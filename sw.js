/* Mephisto service worker (P2, 13.1): offline app shell; updates only when the user taps "Neue Version – jetzt laden".
   Each file is stored ONCE in a content-addressed cache shared by all versions ("mephisto-files", key = path?sha=<hash>):
   - single download: "./" is not a second copy; files that did not change between versions are not fetched again;
   - resumable: every verified file is kept at once, so an interrupted install continues where it stopped;
   - atomic: the new version only takes over when every file is stored and matches its SHA-256 (a stale CDN copy fails and is retried later). */
const VERSION = "13.4.0-68252d778f";
const FILES = {
"index.html": "cbf84950468057d705404c5bdcf33ba5f2b29e62db4eafb36daf304f56cd246b",
"manifest.webmanifest": "d573eb33cf31c814060c21e4f4cb29abf24b12f9ab8950b4ca18aabd1c360cd9",
"fonts.css": "8d483729ffa0c8054319a0ab4223a52671c7471c86e678358d990a13b24fcd39",
"icons/apple-touch-icon.png": "3911a4362fc845fbaf7c9fcc664ef3a538a6e3050a7dd7ad20f1435eb99fd0e7",
"icons/favicon-32.png": "3971442267d6f7164a4a461ea4ef948d457647bfc0c00c530366de971ea7ada6",
"icons/icon-192.png": "8cbd42f4a84b22fbed45dcdb36daafa09d222c4774dee998634d932018f82de3",
"icons/icon-512.png": "752f19c0136394f263c5a64f8cf0ff3844203b31b7ec9caa4ac48b6ca68e8724",
"icons/maskable-192.png": "a56ca6872a4383489a887121a34f6b4c25dc42ee865718c30d348b09687704d9",
"icons/maskable-512.png": "8e95dee6a7c25c7c39e53377b4fc4b349adae6519de914d2cfc87d92d6907a31",
"fonts/fraunces-italic.woff": "bd3d2051dd4484d2c89aa590687bdd593361b5f4b289d7f0853570fce9a0c48b",
"fonts/fraunces.woff": "2a843c6e98042287355525270cacafc5851cdeccc2c62c2c336e6c1cc06fe97b",
"fonts/jetbrainsmono.woff": "efd34b8e6763b349b47fb93e50a0ef8531eb18ec72cb48cecfca0b8eb79cffab",
"fonts/sourcesans3.woff": "2d88d075fbe8d76830e128589f90555eefb59a27467220aa31ed1ceb8f5a44a0",
"fonts/sourceserif4-italic.woff": "65cb81b09f72ccd03e756b200d2c08bdd4e8a30e6634a59dc5310e43cba9857e",
"fonts/sourceserif4.woff": "0375575b7d682774f40208171de11fd99a042c083fdd17b925721455ea21278f",
"fonts/unifraktur.woff": "961e1cfdcf923c87df0dbf6215a32d3f02fa40b2f330e04c4b6dc90f842cfe35",
"js/app.js": "f11c1d9f0445e358c85116d8a2d7f1102c0b1aa404b1ddae74af3e02c3ff3e06",
"js/data-b2.js": "f1a561e5277a177631eb4ecfda8c324e5daa36f1bddfc5ec779ff06d5f90900a",
"js/data-base.js": "ba8d146f92a885e0d18c1eae0423afeb972cd4ebdb65631bdc9e976bfac1f129",
"js/data-bib.js": "dc6d0bf4d328c70f9abe260f5cc1abc2661f376283a6ab71b8d88feb036994a7",
"js/data-fix.js": "72c37f9b910ac55c00acae4288e34bee4396f37610e2248d58d7ca20cf8379f6",
"js/data-integ.js": "b5f455b9108b86899aad27beca98b5ed32287f4042e86a9db8debd24bca75142",
"js/data-l4.js": "b42778ca03961f4d1c62645b5a9107e0532441d9baf53beca8da8a0d0745a7c7",
"js/data-media.js": "07a5088b8e81c3f7271264c63f2f6baea8471d042d3faaa992ce6734c2cdbb38",
"js/data-more.js": "9f7a29cec486f2b553f150f77817a5db9588c1023c0d1fe1418ffb39bc58014e",
"js/data-story.js": "f43d6ce3745e33d218103cfb4bf48d8e853abfb28988da06fe25b7794afdc0c9",
"media/art/a8_finale.webp": "a0e4bce554fee3bf2640551c33e0058ab35038719d068235bcdda591d446c357",
"media/art/a8_finale@2x.webp": "dca3850a1add4b9c579f3266942a076c49bd77f175cffeac2913dbc703a89f87",
"media/art/clarke_10.webp": "b6e7f5e3d0cc605017b6834b6000e2c1e7784b93b4dc541e227b6b066ec3fccf",
"media/art/clarke_11.webp": "5376dbb89d625b31394a5c7b6df5487b022b271b6fa7395e7c4ab60b2095237a",
"media/art/clarke_15.webp": "fe3d9b7c58a610fe9c7328394c0af6a81fd0b15af299dec7502832d4a3e7e345",
"media/art/clarke_18.webp": "3e2653b1c9ec3fa74f1c464f03773e2327109c54669d61b566041e6693442c98",
"media/art/clarke_19.webp": "7800e27a69dd9e33e240ca9f8e7eef1a9d446367442ed7bd0ed31a4f36e36ddd",
"media/art/clarke_2.webp": "2af6a2e13489f619b9cb538505a5f5fdf304a101d555eaa37cbed38e4d9c6119",
"media/art/clarke_20.webp": "5b1eb22ec388e7aeb03c62ecd34531b5e981803601e873a86146121b9749f64e",
"media/art/clarke_22.webp": "0cdfcfad4cf631ef5e6d7b47104d3aefe273f3b7eb2e9293f5d7c3a62d2a8d33",
"media/art/clarke_3.webp": "957fc6dc632abecc999d95a023ed6cf12ae03d64a98ef199517120eb00635c08",
"media/art/clarke_31.webp": "f5aa38bc85220d4ebb65982bf04864f2aa213a47a551a4aa0c195e241a305563",
"media/art/clarke_35.webp": "c4da2d6602cbe6f95d45fe244065840543e0da249e8c2c56b5c58a8e364e057b",
"media/art/clarke_39.webp": "ac9e6ff3739f781c1362fc627f3f7f0ff4509b57dc35af0f4a338104b2051e6f",
"media/art/clarke_40.webp": "18b6c391544dcac0768c69f54ac47c11ad5c1b90f6854196f4df717b4f1680a3",
"media/art/clarke_41.webp": "a7248f5df4d1d6c443a7b4e4832f90f36a680dfc4b10d8aa69963ed0f59396e9",
"media/art/clarke_46.webp": "85542990795a9998e597365147e72e5ae90b418add4d9dffdd4e5573ce291397",
"media/art/clarke_52.webp": "2d82239703c73c4618a0b21311d0f9687a90aef7c218c6b4c22d9d21f371dd5a",
"media/art/clarke_54.webp": "d332a6f98674163d97d7bd338227257a6c413989ac78b56596292f1294b9cb9b",
"media/art/clarke_57.webp": "b0368f1d357698e4177da050efa948c0570bb93e84ae8bab5a00c272428532ff",
"media/art/clarke_58.webp": "1c336b5697fd04c6fdc48f018408c171e3f4184450ed12d8b2809ec92631983b",
"media/art/clarke_59.webp": "46559c0f187077bacd507c1b52a40c078451c179bab95196a3b458a13638d5ea",
"media/art/clarke_61.webp": "64cf868a4b0f3b4ec44cfa75bbec1913c391847b8589c380ef620b02c999895a",
"media/art/clarke_63.webp": "f738b013b369819fc979f89dbb351530b0d1f799b0e3a39805f1b9f66c3d6de5",
"media/art/clarke_63@2x.webp": "66d3bcf351840aa7a34ec14d91c6ea92f4c5dd060595b5fb8a5a9e762a4c61ec",
"media/art/delacroix_12.webp": "fce0d740dcf5d143520724c07494c019add104b2fe7821319ec130443402d9c8",
"media/art/delacroix_12@2x.webp": "71a0f8f9447f5f8e932c51bc4dfe8c78f8c9fd8c7bb308daba9f80b3239d9d6b",
"media/art/delacroix_16.webp": "a65707f6c1c840a22a09a65876b27afdccd471880ff0626176a43fb87d431755",
"media/art/delacroix_16@2x.webp": "4e750378f86fda2fefd94581b2de3cdd16d28046e204e9834c56ad589d982633",
"media/art/delacroix_17.webp": "8462cf950b150d51c75fa24951840c055d64218b3953105f71294e1cd2f24dd4",
"media/art/delacroix_17@2x.webp": "2138af9d69c73f8e13e2856b5db0bb69e5209489484315c353f745d4e0b05f26",
"media/art/delacroix_18.webp": "d86d6f171b18b594d200dcbc15884f961d4c98557f7ceeb14cb79fbf59b1ddee",
"media/art/delacroix_19.webp": "7d9611c228dde1aded8c4210e70e50e1a536a710fdd79c649944dad005558011",
"media/art/delacroix_19@2x.webp": "b5d0055e9b0eae91366ebc19f6f35e534377a52775b16f537951e7b53b2ba7d9",
"media/art/delacroix_2.webp": "a04becd7b9026b9ca591608f823e0bf7ef050db90bb7fdf6b7bda2d0308ca23a",
"media/art/delacroix_4.webp": "74b9d4a54aed219982ae723dca679c39e635fc95684cf74fef88d202c6e7d634",
"media/art/delacroix_4@2x.webp": "31429e96f282178723ad199cffa5bb0960afc309a4a4bd428a57a7c0d41003b5",
"media/art/delacroix_7.webp": "3d07d1a73bb888b479a535d4a8ae186f0659717b54c3b4eadce987f34edfb728",
"media/art/delacroix_7@2x.webp": "d854bcff598379579fd1e4a2190680b48333e544dc6e44826fcab780aeeec2b3",
"media/art/dore_13.webp": "40249bb45aaa6f287155c014372fb78b19590511ac97601e487e65fb83e7c749",
"media/art/dore_16.webp": "26bd354d1aa614f98f68cdcf553ac213fc6b24d7b5dd817e7e24b9ee271ea28d",
"media/art/dore_17.webp": "45e89f9ba64c0a90fa51445b844464012016307ca29e4a2163139ae47981ce26",
"media/art/dore_18.webp": "a7fcc575e3211b18d5f5f63cefe4ec2cb2f1ed3d8fdf03ca51085b3b3538af53",
"media/art/dore_19.webp": "af40c9a44e003d03c3b986861a5ad3d6bd384f74fe284bb0255319c6695edc65",
"media/art/dore_2.webp": "e4199b73466132a6d6c80f45e8c06040f848ecf1401c2d9658b2564111fef3d9",
"media/art/dore_23.webp": "f85a502a582c4296894d6d75fd6c6bc5609f1b4d1d6ab1f97f7c390a0cca1bd4",
"media/art/dore_31.webp": "2d03211e5a24fd57c8aa0f3026f4d69c2a5a48e01d938cb3b0ca3549d63c99ba",
"media/art/dore_37.webp": "37bae4242094df42a52e53cc769392a65162eec0985b57ce5ccac7d03cca419e",
"media/art/dore_4.webp": "3cb4a20d1536bb93fa72ba9c32da8ebdb5e71a920590afeb721f390a285ae354",
"media/art/dore_7.webp": "b2f12ca1c40785d91adaee8c5593014c304a9dc7fbe4464a6cb966d22a04e6dd",
"media/art/durer_melencolia.webp": "33c47245648b3123614d6b2f813849abfdb0a14c98c1efa75a881ea67ea481ee",
"media/art/fahringer_16.webp": "f95b8fde57b5cdb6407c9b3a09e21b547c2c7599de84bb59ed7aaf3c8fcebc7f",
"media/art/fahringer_2.webp": "d3a28bab3bde48be61b1bed9ad06f4035dc88473beb256304b5d5f1cd3362595",
"media/art/fahringer_36.webp": "cf0eca1980d2fdaf9287bed50658d2a12b1f673785a479c745f896ff89cdb66d",
"media/art/fahringer_37.webp": "7e6f8de8fc8c46101e597d1f676ea5489acb65a9b4347f3372fe2c7a79db48fb",
"media/art/fahringer_8.webp": "687224ab21215a812dec5919d3ddf8ccf2ac34b8b3d39023a77f6320022dfeb9",
"media/art/holbein_counsellor.webp": "7225d9ded96d1560a7d7e2e737c19faa62a13181957ad3493aa611897e7c4533",
"media/art/holbein_counsellor@2x.webp": "cb607e3b883f491ad7bbabcaedb686a6506c6a83e63593f985bb673ea8e8fcd2",
"media/art/holbein_fool.webp": "34c9bdf699b2b87b42958d0e2502f7cf6c4f2d7ca016896be159f19d344b294f",
"media/art/holbein_fool@2x.webp": "cf9f36e7cef755686c348ff4eda8307438fd20d46d3b2febbf203b8e2a483570",
"media/art/holbein_judge.webp": "7c611e20d9af67cc61f98628a4776b57ab7421540510178d92f3f7b1313d142f",
"media/art/holbein_judge@2x.webp": "75de2f1ad6737d9ba236afe141262380324890a309bdefed44715fae776d5883",
"media/art/holbein_physician.webp": "5a7c4878466db3c8dd3d3f3650f54f703c078d0875b0417e4b6c3a7054392f12",
"media/art/holbein_physician@2x.webp": "26d7ea50187435831bdf1263bdef94e056a797928b28ac172a88ce915301654e",
"media/art/holbein_shipman.webp": "ee821b541da65d7375f786832c2289846cc6809866b2ec6b4534b4f97a70bd84",
"media/art/holbein_shipman@2x.webp": "74203508de02fdf966a004ff58638c36717de1811a1020f6e9d1e3a6d3628f5e",
"media/art/rackham_10.webp": "d1918b6be4d8c235c914ecfb1475b81b8a913a6fe897ed6bfa9f9dbb9f52f207",
"media/art/rackham_12.webp": "6e7d7257c0be33320340510973975e220941ee0377e80df2e4b815fd3c33c183",
"media/art/rackham_13.webp": "7c0b81c10c5c61d38d7eff9a6856c877c746527008958afed7e1506e3ea99ac8",
"media/art/rackham_15.webp": "9a43410d89e4b401f29f820fecbc8d8d04949353cd30fbc98f41e6a92906d87b",
"media/art/rackham_18.webp": "644368343676566db96e6951e72d82debd22909f91bf97e8b58f2944e887b08a",
"media/art/rackham_19.webp": "e90f6e2a1bdc46456ef005ee895b5af2f2eafa384d52ac2fc22ea73a5443658e",
"media/art/rackham_5.webp": "8de4580031298988b3c178af1eec961004c9e13a3997e3ac0af6e3c777b1dfc5",
"media/art/rackham_7.webp": "ac73f74e158c08b50c44b8f67d70c89b48989906bc0a1ad4844d811a1ae5b683",
"media/art/rackham_9.webp": "d1fa164d561a1b7bb2c33544fac8d2fa3803e85cae21ede2550f4122d72ed87e",
"media/art/roentgen_hand.webp": "b0f1140b5d31049ad7625ba6738c9a8c5c1f77baa671c8e9d29b0c6e135bbf50",
"media/art/roentgen_hand@2x.webp": "5fb65077dadd2855d2b9a10d48129099712f2977a6e1fad36356efed45626243",
"media/art/struwwel_1.webp": "53a5338d7dcbf8bc52f72194cecaa2ccfbb88295a8fa13df46cfad67134a7df9",
"media/art/struwwel_15.webp": "38ff3c2d9978d1fe803eeb8bf85adb23c45aba0e3124d3a7b77033e33b274efa",
"media/art/struwwel_17.webp": "e91c54d3800f8528dea82802ae94e2f49b8ee975caafde25e7f410683cec7fe8",
"media/art/struwwel_17@2x.webp": "220e13c9d6a39243ab326b1a1688a449dc32b2c5a4b3684d3d4911d86168526c",
"media/art/struwwel_1@2x.webp": "879754e3318ddbe12f7b4f65f0b791053c4173c6a57eccadd8822f0f5009afdc",
"media/art/struwwel_29.webp": "bb88c018c3fea88c59a5f3bb76de933cd7bc00763144ac10be717dc1ec6822ed",
"media/art/struwwel_6.webp": "115816b6594f5fed85fa97794e2de1c6595ae6a1beae121ae31732656ebcc958",
"media/art/struwwel_6@2x.webp": "b16729cea44c1e1443990ae0b2332b093489d45596fdfce21895b7f3c70bc86c",
"media/art/vesalius_epitome.webp": "6e23316d7fcaccb6fa4ed6318f248329f689bddcdf9419c0b2318a5ef6776aec",
"media/art/vesalius_epitome@2x.webp": "c001738f6b93bdebfddedda0f3849b2f3bea757e05d483326991e7fed04bcc9d",
"media/bib.json": "944a63f2b5138833178b67ef869596985127a6de56c8b4f3f96cf105a0e4493d",
"media/fonts/a1-doc.woff2": "31b2f35a39d018797eb61234964b12f849bbc81722a42023f1d7eb2f9eddee36",
"media/fonts/a1-feder.woff2": "6332314aca9c3a1c31f31c63651d3c7a0e96de42e45cdf88523393157e213ebf",
"media/fonts/a1-fell-it.woff2": "63eae338969f08f6c012e4a5151abbfa772bfad4f366322b7a166268b62a5e5c",
"media/fonts/a1-fell.woff2": "8b04738eb61145c7a7984be186ffb30af52fdd06e657cc3f2dba34514eec7d2b",
"media/fonts/a1-fonts.json": "fa6e7766901d3a944be8cd9e685a216906da62b7f464f86d3dea59b317dff7d3",
"media/fonts/a1-fraktur.woff2": "3aaa7bf8e6cf217b2e376ea8a48705b191ba60e7f2bd6bc52e2480913e7d1eba",
"media/fonts/a1-garamond-it.woff2": "3609f6956c8c0316dc0ba9fe596a23249fba29e734f72cdeadbbac9329c7d236",
"media/fonts/a1-garamond.woff2": "f039de4d5e5b2e280809bf806d47bd139e989e5bf8a600aa9b74c3b105b665a7",
"media/fonts/a1-germania.woff2": "148aed2b706254f62600a17f3f82ac97c27da660b70ffdd22197b44a817027cd",
"media/fonts/a1-gotisch.woff2": "fbf4b10d1528052404572b98946d6df968abe8c1e9e7ca48b62fea5e7bf53677",
"media/fonts/a1-learn-it.woff2": "4f8c1356938f2c15cd24d914e0ab4b7cd7040718fc6efe0d3426e3f3cd9c29d0",
"media/fonts/a1-learn.woff2": "ee11c47dd4fd22b7d4ba434e4686be7876f3e81e9b57557c9975270dceaf6f00",
"media/fonts/a1-neu.woff2": "de78bb2e7d078e6398aec8b16caf5a78984ed38d474582efc798fa52446eac3c",
"media/fonts/a1-orangepixel.woff": "203baa292002f36598e5618d7ad372b323f2f483180ac36ac42aeaf7dddbc0f0",
"media/fonts/a1-pirat.woff2": "d97268399c479cf14eaeed43505acb6407583419afb04f53f1998a6d5dded4b3",
"media/fonts/a1-ui-it.woff2": "2e3b3cb943cf88b2b9144a837aafd48f6dd88ab46e6864fd64d8b0af9a6136e4",
"media/fonts/a1-ui.woff2": "1137313b0f0727fb8dfe8e5c78d892d03252526e046bcd5f441f6b9f95d611fe",
"media/fonts/a1-ziffern-it.woff2": "ec49ee439e34391a528fb3f42b5eb18adcddf6269e2b9cc96c9135721526e426",
"media/fonts/a1-ziffern-titel.woff2": "5ff89c9ea8625b4c0f3fc86d0bd963562334666917e7350af0a7bff768d79954",
"media/fonts/a1-ziffern.woff2": "f1c7496bea228d8bf36537c0cef8b1cc7ecefbd06162578e120436929b2e1422",
"media/fonts/pk-01-7b7349bc.woff": "7b740f58d42b8d568998b10913c0a7ce864b07bb2356c11e465a622b75019cd6",
"media/fonts/pk-02-0e2d0eb4.woff": "e76af36a470fa8486d78fcc3a4e90a7145a47959ed8edd73b58dc871713cc208",
"media/fonts/pk-03-0b4ce5ad.woff": "b16a9ced70e361c7c4fca2ebc0cca23a24601a3ac8430e62f14e86f65312b90a",
"media/fonts/pk-04-22874c51.woff": "3805c77db264effba79693839b074a0598169e893f642854b0ed13ea9e1405e0",
"media/fonts/pk-05-953b991a.woff": "66dfa95e96cc3620c7e4329703913978d8876f4b0667ef5d3af8ea23e39d94e0",
"media/fonts/pk-06-8eceaeec.woff": "b221e294c29ab0c8b61d120e2c0745ab943c757c0e7a610eea5c7672e00366a9",
"media/fonts/pk-07-3cf9b587.woff": "b5aee67ea08bb389138c7b91abbc81f6486d4840895f529da74d1a28eb77bd29",
"media/fonts/pk-08-ed92d105.woff": "796787113d63e716a6c2f43cd7f44f0e9ae9b2d0ff4617d5da1359d25c783dba",
"media/fonts/pk-09-d6a80eea.woff": "655f251df8cc207c863efbc057ba42ec95b6f7139ba962b8335b0ea4625661d1",
"media/fonts/pk-10-3fc07602.woff": "0585b90b3deb9be9eedae353b76543696cc18de64482547e3c63ac79f275ba07",
"media/fonts/pk-11-b9f32436.woff": "23cc9e4ced11d21b0fa7523535913da77e2ddf07c973a734494a7043c50b15c5",
"media/fonts/pk-12-b73b7e4a.woff": "14b98fc44a5050e5d48a264839809cd05e37128aba9768188ae25bfc190d6e0f",
"media/fonts/pk-13-c5d86f65.woff": "5118eaf54dab1e00b607506cd3836766a560ea41d4e5dfef4edae16059fc22d7",
"media/fonts/pk-14-e7c85c02.woff": "be170768796c40a30ef4aba893c7e0f15cabd2a07b3ccdef5b404b688a980cc7",
"media/fonts/pk-15-83135100.woff": "448a4a73adc3baeab8f71911ea4dc9fccb01136e246936915a1c2907dc441091",
"media/fonts/pk-16-4602c59e.woff": "45b416cda6f4fa76423707b2ab48a3c9f5b56624fa341bf27eb22bac54bc3ad5"
};            // {path: sha256 hex}
const FC = "mephisto-files", RT = "mephisto-rt";
const keyOf = p => new Request(new URL(p + "?sha=" + FILES[p], self.registration.scope).href);
const hex = async buf => [...new Uint8Array(await crypto.subtle.digest("SHA-256", buf))].map(b => b.toString(16).padStart(2, "0")).join("");

async function getVerified(path) {
  const want = FILES[path];
  // 1. any cache of an older version that already holds exactly this content (no download)
  try { const old = await caches.match(new URL(path, self.registration.scope).href, { ignoreSearch: true }); if (old) { const b = await old.clone().arrayBuffer(); if (await hex(b) === want) return old; } } catch (e) {}
  // 2. the HTTP cache may revalidate (304 instead of a second download of the page the browser has just loaded)
  for (const [u, mode] of [[path, "no-cache"], [path + "?v=" + want.slice(0, 12), "no-store"]]) {
    try { const r = await fetch(new Request(u, { cache: mode })); if (!r.ok) continue; const b = await r.clone().arrayBuffer(); if (await hex(b) === want) return r; } catch (e) {}
  }
  throw new Error("integrity " + path);
}
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const c = await caches.open(FC);
    for (const path of Object.keys(FILES)) {
      if (await c.match(keyOf(path))) continue;       // resume: already stored and verified
      const r = await getVerified(path);
      const body = await r.arrayBuffer();
      await c.put(keyOf(path), new Response(body, { headers: { "Content-Type": r.headers.get("Content-Type") || "application/octet-stream" } }));
    }
  })());
  // no skipWaiting here: the page asks first, so the app never reloads in the middle of a session
});
self.addEventListener("message", event => {
  const d = event.data || {};
  if (d.type === "SKIP_WAITING") self.skipWaiting();
  if (d.type === "VERSION" && event.ports && event.ports[0]) event.ports[0].postMessage({ version: VERSION });
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();   // the per-version caches of 13.0 and older
    await Promise.all(keys.filter(k => k.startsWith("mephisto-") && k !== FC && k !== RT).map(k => caches.delete(k)));
    const c = await caches.open(FC); const live = new Set(Object.keys(FILES).map(p => keyOf(p).url));
    for (const r of await c.keys()) if (!live.has(r.url)) await c.delete(r);
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // API calls, external links: straight to the network
  if (url.pathname.endsWith("manifest.webmanifest")) {
    event.respondWith(fetch(req).catch(() => caches.open(FC).then(c => c.match(keyOf("manifest.webmanifest")))));
    return;
  }
  if (req.mode === "navigate") {  // page loads (incl. ?a=… shortcuts): the cached shell of THIS version
    event.respondWith(caches.open(FC).then(c => c.match(keyOf("index.html"))).then(r => r || fetch(req)));
    return;
  }
  const rel = decodeURIComponent(url.pathname.slice(new URL(self.registration.scope).pathname.length));
  if (FILES[rel]) { event.respondWith(caches.open(FC).then(c => c.match(keyOf(rel))).then(r => r || fetch(req))); return; }
  // anything else of our own (media loaded on demand): cache first, then network
  event.respondWith(caches.open(RT).then(c => c.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(resp => {
    if (resp && resp.ok && resp.type === "basic") c.put(req, resp.clone());
    return resp;
  }))));
});
