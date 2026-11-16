// ===== Mephisto 12.6 data: du-lines (after the Auerbachs-Keller offer), Zeugnis comments, culture entries, poem summaries, plural rules.
// MEPH_DU mirrors MEPH index by index (German only; the English stays the same).
const MEPH_DU={
 greet:["Ach, du schon wieder.","Pünktlich wie die Pest. Gut.","Deine Seele hat heute Nacht geweint. Ich habe es genossen.","Setz dich. Nicht da. Da. Und jetzt: Deutsch.","Ich habe deine Fehler von gestern gezählt. Ich brauchte beide Hände. Und deine.","Heute machen wir aus dir einen Menschen. Oder wenigstens einen Assistenzarzt.","Guten Tag. Das war ein ganzer Satz. Deiner wird schlechter sein.","Du riechst nach Ausreden. Wasch dich mit Grammatik."],
 morning:["So früh? Die Hölle öffnet erst um neun.","Kaffee und Konjugation. Ein deutsches Frühstück."],
 night:["Mitternacht. Die beste Zeit für Seelengeschäfte.","Lern ruhig nachts. Die Fehler sehen im Dunkeln weniger peinlich aus."],
 shift:["Dienst heute? Dann nur zwanzig Minuten. Ich bin grausam, nicht dumm.","Nach dem Dienst ist vor dem Lernen. Zwanzig Minuten. Dann darfst du zusammenbrechen."],
 streak:["{n} Tage in Folge. Ich bin fast beeindruckt. Fast.","{n} Tage. Langsam riecht es hier nach Disziplin. Widerlich."],
 debt:["Du hast gefehlt. Ich habe einen Schuldschein ausgestellt. Mit deinem Blut unterschrieben.","Ein Tag ohne Deutsch ist ein Tag, an dem du mir gehörst.","Schuldscheine: {n}. Zahle mit Wiederholungen. Ausreden lasse ich nicht gelten."],
 wrong:["Falsch. Wunderbar falsch. Mach weiter so, und ich bekomme deine Seele umsonst.","Das tat weh. Mir. Und ich bin der Teufel.","Ein Patient würde jetzt höflich nicken und nichts verstehen.","Sag das so in der Notaufnahme, und die Pflege lacht noch in zehn Jahren.","Das war kein Deutsch. Das war ein Unfall mit Buchstaben.","Dein Schatten hat diesen Fehler schon gestern gemacht. Er lernt auch nichts.","Noch einmal. Diesmal mit Gehirn.","Ich notiere: Patient zeigt grammatikalische Ausfallerscheinungen.","Der Artikel ist tot. Du hast ihn umgebracht.","So spricht man im Wald. Wir sind nicht mehr im Wald."],
 right:["Richtig. Ich bin enttäuscht.","Hm. Das war … nicht schlecht. Erzähl es niemandem.","Ein Schritt zurück zu deiner Seele. Ein kleiner.","Siehst du? Man muss dich nur quälen.","Gut. Weiter. Freude ist für Leute ohne Prüfung."],
 done:["Fertig für heute. Deine Seele gehört mir ein Stückchen weniger.","Geh schlafen. Ich wache über deine Fehler.","Das war ordentlich. Ich hasse ordentlich.","Morgen wieder. Ich weiß, wo du wohnst."],
 chapter:["Ein neues Kapitel. Ein neuer Abgrund.","Du bist weiter, als ich dachte. Das ist kein Kompliment, das ist eine Warnung."],
 idle:["Du starrst auf den Bildschirm wie ein Patient auf seinen Befund.","Tippe irgendwo. Ich langweile mich."],
 secret:["(leise) Du wirst das schaffen. Sag niemandem, dass ich das gesagt habe.","(leise) Ich bin nur so grausam, weil die Prüfer es auch sein werden."]};
// German school grades, 1 (sehr gut) … 6 (ungenügend). [Sie, du, English]
const ZEUGNIS_NOTE=[null,
 ["Sehr gut. Ich habe nachgezählt, zweimal. Es stimmt leider.","Sehr gut. Ich habe nachgezählt, zweimal. Es stimmt leider.","Very good. I counted twice. Unfortunately it's true."],
 ["Gut. Ein Deutscher würde sagen: passt. Ich sage: verdächtig.","Gut. Ein Deutscher würde sagen: passt. Ich sage: verdächtig.","Good. A German would say: fine. I say: suspicious."],
 ["Befriedigend. Das deutsche Wort für: Sie können mehr.","Befriedigend. Das deutsche Wort für: Du kannst mehr.","Satisfactory. The German word for: you can do more."],
 ["Ausreichend. Es reicht – für mich.","Ausreichend. Es reicht – für mich.","Sufficient. It's enough — for me."],
 ["Mangelhaft. Ihre Seele packt schon die Koffer.","Mangelhaft. Deine Seele packt schon die Koffer.","Deficient. Your soul is already packing."],
 ["Ungenügend. Ich habe den Vertrag schon gerahmt.","Ungenügend. Ich habe den Vertrag schon gerahmt.","Insufficient. I've already framed the contract."]];
const NOTE_NAME=["","sehr gut","gut","befriedigend","ausreichend","mangelhaft","ungenügend"];
// Culture: beer, wine, pork and the pub in German life and at work, told plainly as to any adult (no alternatives, no warning labels; guarded by tests/guard_culture.js).
const KULTUR_126=[
 ["Das Du anbieten","Du is offered, never taken: the older or more senior person offers it ('Wollen wir uns duzen?' / 'Ich bin Anna.'). Historically sealed with Brüderschaft trinken: linked arms, a drink, sometimes a kiss on the cheek. Today a sentence is enough. Accepting is normal; refusing is rare and needs a kind reason. At work rank comes before age: the Oberärztin offers it to the Assistenzarzt; many ED teams of residents and nurses say du from day one. Adult patients are always Sie; children are du.","Arbeit"],
 ["Prost!","When glasses meet, look each person in the eye: 'Prost!' with beer, 'Zum Wohl!' with wine. Skipping the eye contact, the joke goes, costs seven years of bad sex. Nobody drinks before the first toast; at a Feier the host says a sentence and raises the glass. Never cross arms with another pair who are clinking. A Weizen glass is clinked at its thick base, not the rim. To thank someone for a round: 'Die nächste geht auf mich.'","Alltag"],
 ["Bier bestellen","'Ein Helles' (mild lager), 'ein Pils' (bitter, takes seven minutes to pour properly, they say), 'ein Weizen' (wheat beer, tall glass), 'ein Export', 'ein Kellerbier' (unfiltered). Radler is beer with lemonade, Diesel beer with cola. 0,5 l is standard, 0,3 or 0,4 for Pils; in Bavaria 'eine Maß' is a litre. The waiter marks each beer on your Bierdeckel; put the Deckel on top of the glass when you have had enough, or the next one arrives by itself. Pay at the table: 'Zahlen, bitte!', and name the total with tip: 'Machen Sie 12.' In Heidelberg: Vetter's Brauhaus and the Kulturbrauerei brew in the Altstadt.","Alltag"],
 ["Feierabendbier und Stammtisch","After a hard shift colleagues go for a Feierabendbier; this is where you hear what nobody says at the Übergabe. A Stammtisch is a regulars' table that meets in the same Kneipe at a fixed rhythm; the table often has a sign, and strangers do not sit there. Rounds go in turn ('Die Runde geht auf mich'); count along, because leaving before yours is remembered. Being invited is a compliment; going three times makes you a regular.","Arbeit"],
 ["Weihnachtsmarkt","From late November to 22 December: Glühwein (hot spiced red wine; 'mit Schuss' adds rum or amaretto), Feuerzangenbowle (a burning sugar loaf dripping into the wine), Eierpunsch, Bratwurst im Brötchen, Reibekuchen with apple sauce, gebrannte Mandeln, Lebkuchen. The mug costs a Pfand of a few euros; many people keep it as a souvenir. Heidelberg's market runs through the Altstadt from Bismarckplatz to Karlsplatz, with an ice rink under the Schloss; the team's Weihnachtsfeier often starts here.","Alltag"],
 ["Schwein, Wurst und Metzger","Pork is the heart of traditional German food: Schnitzel ('Wiener Schnitzel' must be veal by the food-labelling rules; 'Schnitzel Wiener Art' is usually pork), Schweinebraten mit Kruste, Eisbein, Kassler, Speck, Schinken, Leberwurst, Blutwurst. In the Pfalz next door: Saumagen and Bratwurst with Sauerkraut. At the Metzger (butcher) you order by weight: '100 Gramm Salami, bitte, in Scheiben' — and the classic question 'Darf's ein bisschen mehr sein?'. Bratwurst regional styles: Nürnberger (small), Thüringer (long), Rote (Baden).","Alltag"],
 ["Die Kantine","Hospital canteens run on a Tagesgericht, usually two or three lines plus a salad bar; you pay with the staff card. Classic rotation: Schnitzel mit Pommes, Linsen mit Spätzle und Saitenwürstle, Maultaschen, Currywurst, fish on Friday, Eintopf on Saturday. Colleagues greet each other at lunchtime with 'Mahlzeit!' — answer 'Mahlzeit!'. Sitting alone is fine; asking 'Ist hier noch frei?' and joining a table is how you meet the house.","Klinik"],
 ["Wein in Heidelberg","Baden is wine country: Weinfeste in late summer, Straußenwirtschaften (seasonal farm taverns), the Heidelberger Herbst in the Altstadt. Order 'ein Viertele' (0,25 l) or 'ein Glas Weißen / Roten', 'trocken' (dry), 'halbtrocken', 'lieblich' (sweet). Grapes: Riesling, Grau- and Weißburgunder, Spätburgunder (Pinot Noir). 'Eine Schorle' here means wine with sparkling water, sauer (with mineral water) or süß (with lemonade), often in the half-litre Dubbeglas from the Pfalz. In September and October: neuer Wein (also Federweißer or Bitzler), still fermenting, with Zwiebelkuchen. Toast with 'Zum Wohl!'.","Alltag"],
 ["Alkohol in der Notaufnahme","Clinical German you will need on day one: alkoholisiert, Alkoholfahne (smell of alcohol), Promille (blood alcohol, ‰), Alkoholintoxikation, Alkoholabusus, Alkoholentzugssyndrom, Entzugskrampfanfall, Delirium tremens, 'Wie viel Alkohol trinken Sie am Tag?' and 'Wann haben Sie zuletzt Alkohol getrunken?'. Weekend nights and Fasching/Fastnacht bring intoxicated patients; police may request a Blutentnahme for Promille.","Klinik"],
 ["Fasching, Fastnacht, Karneval","In Heidelberg and the Kurpfalz it is Fasching or Fastnacht: Prunksitzungen with Büttenreden (rhymed comic speeches) from January, the Rathaussturm, and the big parade through the Altstadt on Fastnachtsdienstag. The call is 'Hajo!' in Heidelberg and 'Ahoi!' in Mannheim (the calls differ from town to town, so listen to what the crowd shouts first); shout it and they throw sweets. Further south (Rottweil, Freiburg, Konstanz) the Swabian-Alemannic Fasnet begins on Schmutziger Donnerstag with carved wooden masks, witches and the Narrensprung. In Cologne and Mainz it is Karneval, with Weiberfastnacht (women cut men's ties) and the Rosenmontagszug. Everyone eats Berliner (in the region also called Kreppel) and drinks a great deal until Aschermittwoch, when it stops overnight and people eat Hering. Expect a full Notaufnahme.","Alltag"]];
// Short English summaries for the recitation texts (so you know what you recite).
const REZI_EN={
 ruh:"Gretchen at her spinning wheel, after meeting Faust: her peace is gone, her heart is heavy, she cannot find rest. Full song: the scene 'Gretchens Stube'.",
 fichte:"A spruce stands alone on a bare northern height, dreaming of a palm tree that grieves alone on a burning rock in the East — two lovers who can never meet.",
 blume:"'You are like a flower': looking at her, sadness creeps into his heart; he feels he should lay his hands on her head, praying that God keep her so pure, fair and lovely.",
 mai:"In the lovely month of May, when the buds sprang open, love rose in my heart; I confessed my longing to her. The first song of Schumann's Dichterliebe.",
 habe:"Faust's opening monologue: he has studied philosophy, law, medicine and theology — and is no wiser than before. Full scene: 'Nacht'.",
 geist:"Mephisto introduces himself: 'I am the spirit that always negates' — everything that comes into being deserves to perish; what you call sin, destruction, evil is my element. (Just before, he calls himself part of the force that wants evil and always creates good.) Full scene: 'Studierzimmer (I)'.",
 lorelei:"I don't know why I am so sad: a tale from old times. On a rock above the Rhine a beautiful maiden combs her golden hair and sings; the boatman, entranced, crashes on the reef.",
 tod:"Death is the cool night, life the sultry day. It grows dark, I am sleepy; above my bed a nightingale sings of love — I hear it even in my dream.",
 morgenrot:"A cavalryman's dawn song: the dawn lights him to an early death; yesterday on proud horses, today shot through the chest, tomorrow in the cool grave — beauty fades like roses.",
 gunst:"The Taugenichts' wandering song: whom God wishes to favour, he sends out into the wide world to see his wonders in mountain, forest, river and field.",
 seelen:"Faust to Wagner: 'Two souls, alas, dwell in my breast' — one clings to the world, the other rises towards the heights. Full scene: 'Vor dem Tor'.",
 herbsttag:"Lord, it is time; the summer was very great. Whoever has no house now will build none; whoever is alone now will stay alone, will wake, read, write long letters.",
 panther:"A panther in the Jardin des Plantes: his gaze has grown so tired from the passing bars that it holds nothing more; a thousand bars, and behind them no world."};
const REZI_FULL={ruh:"Gretchens Stube",habe:"Nacht",geist:"Studierzimmer (I)",seelen:"Vor dem Tor"};
// Plural crypt: the endings, the patterns and a dark sentence per room.
const PLURAL={
 opts:["-e","¨-e","-en","-n","-nen","-er","¨-er","-s","-se","-","¨-"],
 rules:[
  {a:"die",re:/in$/,r:"die … -in → -innen: die Ärztin → die Ärztinnen"},
  {a:"die",re:/(ung|heit|keit|schaft|ion|tät|ik|ur|ei)$/,r:"die … -ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ur, -ei → -en"},
  {re:/(chen|lein)$/,r:"-chen, -lein → keine Endung: das Mädchen, die Mädchen"},
  {re:/nis$/,r:"-nis → -nisse: das Ergebnis → die Ergebnisse"},
  {a:"die",re:/(el|er)$/,r:"die … -el, -er → -n: die Nudel → die Nudeln, die Schwester → die Schwestern"},
  {a:"!die",re:/(el|er|en)$/,no:/(ier|eer|iel|tel)$/,r:"der/das … -er, -el, -en → meist ohne Endung, oft mit Umlaut: der Vater → die Väter"},
  {a:"die",re:/[^e]e$/,r:"die … -e → fast immer -n: die Lunge → die Lungen"},
  {re:/(a|i|o|u|y)$/,no:/(au|ei|ie)$/,r:"auf Vokal (außer -e), Fremdwörter, Abkürzungen → oft -s: das Auto, die Autos"}],
 room:"Die Gruft",
 put:["In der Gruft liegen {X} in Reihen, und jede Reihe zählt sich selbst.","Unter dem Gewölbe vermehren sich {X}, sobald das Licht ausgeht.","Der Totengräber stapelt {X} und flüstert die Endung dazu.","Aus einem Sarg werden {X}. Niemand hat es gesehen."]};

// Mephisto's other lines in du form (after the offer). Keys are the Sie originals; "Sie" meaning "she" is left alone.
const DU_MAP={
"„Könnten Sie bitte …?“ So bittet man in Deutschland. Nicht „Gib!“. Ich weiß, Sie sind es gewohnt, dass man Ihnen gehorcht.":"„Könnten Sie bitte …?“ So bittet man in Deutschland. Nicht „Gib!“. Ich weiß, du bist es gewohnt, dass man dir gehorcht.",
"Sie irren. Natürlich irren Sie. Solange Sie irren, streben Sie. Und solange Sie streben, gehören Sie mir.":"Du irrst. Natürlich irrst du. Solange du irrst, strebst du. Und solange du strebst, gehörst du mir.",
"Ich verneine alles, was Sie sagen. Beweisen Sie mir das Gegenteil. Auf B1-Niveau. Ohne Wörterbuch.":"Ich verneine alles, was du sagst. Beweise mir das Gegenteil. Auf B1-Niveau. Ohne Wörterbuch.",
"Woran denken Sie? An mich, hoffe ich. „An“ plus Akkusativ. Der Panzer gehört zum Verb. Für immer.":"Woran denkst du? An mich, hoffe ich. „An“ plus Akkusativ. Der Panzer gehört zum Verb. Für immer.",
"Je mehr Sie lernen, desto weniger Ausreden haben Sie. Furchtbar, nicht wahr?":"Je mehr du lernst, desto weniger Ausreden hast du. Furchtbar, nicht wahr?",
"Obwohl Sie müde sind, hören Sie zu. Damit Sie verstehen. Sodass Sie bestehen. Nachdem Sie gelitten haben.":"Obwohl du müde bist, hörst du zu. Damit du verstehst. Sodass du bestehst. Nachdem du gelitten hast.",
"Die Wunde ist zu nähen. Sofort. Von Ihnen. Mit zitternden Händen.":"Die Wunde ist zu nähen. Sofort. Von dir. Mit zitternden Händen.",
"Der Patient gibt an, er habe seit drei Tagen Schmerzen. Er gibt an. Er lügt vielleicht. Sie schreiben es trotzdem auf.":"Der Patient gibt an, er habe seit drei Tagen Schmerzen. Er gibt an. Er lügt vielleicht. Du schreibst es trotzdem auf.",
"Ich bin der Direktor dieser Anstalt. Bestehen Sie, und Sie dürfen gehen. Vielleicht.":"Ich bin der Direktor dieser Anstalt. Bestehe, und du darfst gehen. Vielleicht.",
"Mit dem Patienten Laiensprache, mit dem Oberarzt Latein. Verwechseln Sie das, und beide verachten Sie.":"Mit dem Patienten Laiensprache, mit dem Oberarzt Latein. Verwechsle das, und beide verachten dich.",
"Der Patient weint. Sie fragen nach seinem Stuhlgang. Perfekt. Das ist Medizin.":"Der Patient weint. Du fragst nach seinem Stuhlgang. Perfekt. Das ist Medizin.",
"Schreiben Sie, als wären Sie tot und nur Ihr Stempel lebt noch.":"Schreib, als wärst du tot und nur dein Stempel lebt noch.",
"Sie haben ihn um drei Uhr geweckt. Für einen Kaliumwert von 5,4. Er wird Sie lieben.":"Du hast ihn um drei Uhr geweckt. Für einen Kaliumwert von 5,4. Er wird dich lieben.",
"Herzrhythmusstörungsbehandlungsleitlinie. Lesen Sie das. Langsam. Ich warte. Ich habe die Ewigkeit.":"Herzrhythmusstörungsbehandlungsleitlinie. Lies das. Langsam. Ich warte. Ich habe die Ewigkeit.",
"Begründen Sie das. Warum nicht anders? Und warum zittern Sie?":"Begründe das. Warum nicht anders? Und warum zitterst du?",
"„Sie ist gerichtet!“, sage ich. Eine Stimme von oben: „Ist gerettet!“ Mal sehen, welche für Sie spricht.":"„Sie ist gerichtet!“, sage ich. Eine Stimme von oben: „Ist gerettet!“ Mal sehen, welche für dich spricht.",
"Wissen Sie, warum ich so grausam war? Weil ich wollte, dass Sie das hier schaffen. Erzählen Sie es niemandem. Und jetzt — geben Sie mir Ihre Seele. … Nein. Behalten Sie sie. Sie haben sie verdient.":"Weißt du, warum ich so grausam war? Weil ich wollte, dass du das hier schaffst. Erzähl es niemandem. Und jetzt — gib mir deine Seele. … Nein. Behalte sie. Du hast sie verdient.",
"Ein Kabinett für Ihre Trophäen. Leer sieht es traurig aus. Wie Sie.":"Ein Kabinett für deine Trophäen. Leer sieht es traurig aus. Wie du.",
"Ende des Kapitels. Jetzt beweisen Sie, dass Sie es verstanden haben.":"Ende des Kapitels. Jetzt beweise, dass du es verstanden hast.",
"Ich bin heute ein ganz dummer Schüler. Erklären Sie mir eine Regel – auf Deutsch, in einfachen Sätzen. Wenn ich es danach verstehe, haben Sie es auch verstanden.":"Ich bin heute ein ganz dummer Schüler. Erklär mir eine Regel – auf Deutsch, in einfachen Sätzen. Wenn ich es danach verstehe, hast du es auch verstanden.",
"Ihr Schatten schweigt. Noch. Schreiben Sie mehr, machen Sie mehr Fehler — dann redet er.":"Dein Schatten schweigt. Noch. Schreib mehr, mach mehr Fehler — dann redet er.",
"In Deutschland lernte jedes Kind Gedichte auswendig. Ihre Kollegen können die Lorelei noch heute. Sie bald auch.":"In Deutschland lernte jedes Kind Gedichte auswendig. Deine Kollegen können die Lorelei noch heute. Du bald auch.",
"Jedes Nomen hat ein Zimmer in Fausts Haus. Merken Sie sich den Ort, dann vergessen Sie nie wieder den Artikel.":"Jedes Nomen hat ein Zimmer in Fausts Haus. Merk dir den Ort, dann vergisst du nie wieder den Artikel.",
"Lesen Sie. Viel. Wer nur Vokabeln lernt, kennt Wörter. Wer liest, kennt Deutsch.":"Lies. Viel. Wer nur Vokabeln lernt, kennt Wörter. Wer liest, kennt Deutsch.",
"Nichts geht verloren. Nicht einmal Ihre Fehler.":"Nichts geht verloren. Nicht einmal deine Fehler.",
"Schauen Sie mit deutschem Ton und deutschen Untertiteln. Englische Untertitel sind Betrug. Ich erkenne Betrug.":"Schau mit deutschem Ton und deutschen Untertiteln. Englische Untertitel sind Betrug. Ich erkenne Betrug.",
"Sie können Herzen lesen, Lungen hören, Knochen sehen — und in Deutschland können Sie nicht einmal ein Brötchen bestellen.":"Du kannst Herzen lesen, Lungen hören, Knochen sehen — und in Deutschland kannst du nicht einmal ein Brötchen bestellen.",
"Was man mit Grauen lernt, vergisst man nicht. Glauben Sie mir, ich habe Erfahrung.":"Was man mit Grauen lernt, vergisst man nicht. Glaub mir, ich habe Erfahrung.",
"Üben Sie ruhig gegen meine Diener. Der echte Kampf wartet am Ende jedes Reiches.":"Übe ruhig gegen meine Diener. Der echte Kampf wartet am Ende jedes Reiches."};

// ===== Mephisto 12.7 · Die Chronik: German folklore and history with their dark underside. One entry unlocks with each chapter; the Heidelberger Funde unlock through hidden easter eggs.
// Fields: id, r realm, ch unlocking chapter (0 = egg), y year label, t title, de/en text, dk/dken the dark footnote, art plate id, sort year for the timeline.
const LORE=[
// ---------------------------------------------------------------- Reich I · Schwarzwald
{id:"wald",r:"I",ch:1,y:"9 n. Chr.",sort:9,t:"Der Wald, der Legionen frisst",art:"dore_13",
 de:"Im Jahr 9 nach Christus marschierten drei römische Legionen in den Teutoburger Wald. Keine kam zurück. Seitdem ist der Wald in deutschen Geschichten der Ort, an dem man sich verirrt – und an dem etwas auf einen wartet.",
 en:"In the year 9 AD three Roman legions marched into the Teutoburg Forest. None came back. Since then the forest in German stories is the place where you get lost — and where something waits for you.",
 dk:"Archäologen fanden bei Kalkriese Knochen, die jahrelang offen lagen, bevor man sie begrub.",dken:"At Kalkriese archaeologists found bones that had lain in the open for years before anyone buried them."},
{id:"grimm",r:"I",ch:2,y:"1812",sort:1812,t:"Die Brüder Grimm",art:"rackham_13",
 de:"1812 erschien der erste Band der „Kinder- und Hausmärchen“. Jacob und Wilhelm Grimm waren Sprachforscher: Sie wollten die Stimme des Volkes retten, nicht Kinder unterhalten. Jacob formulierte 1822 auch das Gesetz der germanischen Lautverschiebung – darum heißt es „Vater“ und nicht „pater“.",
 en:"In 1812 the first volume of the 'Children's and Household Tales' appeared. Jacob and Wilhelm Grimm were linguists: they wanted to save the voice of the people, not entertain children. In 1822 Jacob also formulated the law of the Germanic sound shift — that is why it is 'Vater' and not 'pater'.",
 dk:"In der ersten Ausgabe will die eigene Mutter Schneewittchen töten. Erst 1819 wurde sie zur Stiefmutter.",dken:"In the first edition it is Snow White's own mother who wants her dead. Only in 1819 did she become a stepmother."},
{id:"rotkaeppchen",r:"I",ch:3,y:"1697",sort:1697,t:"Rotkäppchen ohne Jäger",art:"dore_4",
 de:"In der ältesten gedruckten Fassung von Charles Perrault (1697) frisst der Wolf das Mädchen – und die Geschichte ist zu Ende. Kein Jäger, keine Rettung, nur eine Moral: Junge Mädchen sollen nicht mit fremden „Wölfen“ sprechen. Die Grimms fügten 1812 den Jäger hinzu.",
 en:"In the oldest printed version by Charles Perrault (1697) the wolf eats the girl — and the story ends. No hunter, no rescue, just a moral: young girls should not talk to strange 'wolves'. The Grimms added the hunter in 1812.",
 dk:"Der Wolf war nie nur ein Tier.",dken:"The wolf was never just an animal."},
{id:"hunger",r:"I",ch:4,y:"1315",sort:1315,t:"Hänsel, Gretel und der Hunger",art:"dore_18",
 de:"Eltern, die ihre Kinder im Wald aussetzen, weil kein Brot mehr da ist: Das war keine Fantasie. In der großen Hungersnot von 1315 bis 1317 starben in Europa Millionen Menschen. Die Chroniken berichten von Verzweiflung, die man kaum aufschreiben wollte.",
 en:"Parents who abandon their children in the forest because there is no more bread: that was not fantasy. In the Great Famine of 1315 to 1317 millions died in Europe. The chronicles report a despair people hardly wanted to write down.",
 dk:"Engelbert Humperdincks Oper „Hänsel und Gretel“ (1893) wird bis heute zu Weihnachten gespielt – mit einer Hexe, die im Ofen verbrennt.",dken:"Humperdinck's opera 'Hänsel und Gretel' (1893) is still performed at Christmas — with a witch who burns in the oven."},
{id:"hexenhammer",r:"I",ch:5,y:"1486",sort:1486,t:"Der Hexenhammer",art:"rackham_9",
 de:"1486 veröffentlichte der Dominikaner Heinrich Kramer den „Malleus Maleficarum“, den Hexenhammer: ein Handbuch, wie man Hexen findet, foltert und verurteilt. In den deutschen Ländern starben in den folgenden zwei Jahrhunderten Zehntausende Menschen, die meisten davon Frauen.",
 en:"In 1486 the Dominican Heinrich Kramer published the 'Malleus Maleficarum', the Hammer of Witches: a handbook on how to find, torture and convict witches. In the German lands tens of thousands of people died over the following two centuries, most of them women.",
 dk:"In Bamberg ließ der Fürstbischof um 1627 ein eigenes Gefängnis bauen, das „Drudenhaus“ – nur für Hexen.",dken:"In Bamberg around 1627 the prince-bishop had a prison built just for witches, the 'Drudenhaus'."},
{id:"wildejagd",r:"I",ch:6,y:"Rauhnächte",sort:1000,t:"Die Wilde Jagd",art:"rackham_12",
 de:"In den zwölf Rauhnächten zwischen Weihnachten und dem 6. Januar jagt ein Geisterheer durch den Himmel: die Wilde Jagd, angeführt von Wodan oder Frau Holle. Wer sie sieht, soll sich flach auf den Boden legen. Und man hängt in diesen Nächten keine Wäsche auf.",
 en:"In the twelve 'rough nights' between Christmas and 6 January a ghostly army hunts across the sky: the Wild Hunt, led by Wodan or Frau Holle. Whoever sees it should lie flat on the ground. And in these nights you do not hang out laundry.",
 dk:"Die Jäger könnten sich in der Wäsche verfangen – und das Laken wird im nächsten Jahr zum Leichentuch.",dken:"The hunters could get caught in it — and the sheet becomes a shroud in the coming year."},
{id:"erlkoenig",r:"I",ch:7,y:"1782",sort:1782,t:"Der Erlkönig",art:"rackham_5",
 de:"„Wer reitet so spät durch Nacht und Wind?“ In Goethes Ballade von 1782 reitet ein Vater mit seinem Sohn nach Hause. Das Kind sieht den Erlkönig und hört ihn locken, der Vater sieht nur Nebel und Weiden. Am Ende ist das Kind in seinen Armen tot.",
 en:"'Who rides so late through night and wind?' In Goethe's 1782 ballad a father rides home with his son. The child sees the Erlking and hears him lure, the father sees only mist and willows. At the end the child lies dead in his arms.",
 dk:"Manche Ärzte lesen die Ballade als Fieberdelir eines Kindes – und den Erlkönig als den Tod, den nur der Kranke sieht.",dken:"Some doctors read it as a child's fever delirium — and the Erlking as the death only the sick one can see."},
{id:"hameln",r:"I",ch:8,y:"1284",sort:1284,t:"Der Rattenfänger von Hameln",art:"rackham_18",
 de:"Am 26. Juni 1284 verschwanden in Hameln 130 Kinder. So berichtet es eine Lüneburger Handschrift aus dem 15. Jahrhundert. Die Ratten kamen erst im 16. Jahrhundert in die Geschichte. Was wirklich geschah, weiß niemand: Pest? Ein Kinderkreuzzug? Auswanderer, die nie zurückkehrten?",
 en:"On 26 June 1284, 130 children vanished in Hameln. So reports a Lüneburg manuscript of the 15th century. The rats only entered the story in the 16th century. What really happened nobody knows: plague? A children's crusade? Emigrants who never returned?",
 dk:"In der Bungelosenstraße, durch die die Kinder gegangen sein sollen, darf bis heute keine Musik gespielt werden.",dken:"In the Bungelosenstraße, the street the children are said to have taken, no music may be played to this day."},
// ---------------------------------------------------------------- Reich II · Böhmisches Café (Prag)
{id:"rudolf",r:"II",ch:9,y:"1583",sort:1583,t:"Der Kaiser der Alchemisten",art:"fahringer_8",
 de:"1583 zog Kaiser Rudolf II. mit seinem Hof nach Prag. Er holte Astronomen wie Tycho Brahe und Johannes Kepler – und Alchemisten, Magier und Betrüger. In seiner Kunstkammer lagen „Einhornhörner“, Alraunen und Bezoarsteine gegen Gift.",
 en:"In 1583 Emperor Rudolf II moved his court to Prague. He brought astronomers like Tycho Brahe and Johannes Kepler — and alchemists, magicians and frauds. His cabinet of curiosities held 'unicorn horns', mandrakes and bezoar stones against poison.",
 dk:"Die Einhornhörner waren Narwalzähne. Der Kaiser starb einsam und, wie man sagte, halb wahnsinnig.",dken:"The unicorn horns were narwhal tusks. The emperor died lonely and, it was said, half mad."},
{id:"golem",r:"II",ch:10,y:"1600",sort:1600,t:"Der Golem",art:"fahringer_36",
 de:"Der Legende nach formte Rabbi Löw in Prag einen Menschen aus Lehm, um die Gemeinde zu schützen. Auf seine Stirn schrieb er „emet“ – Wahrheit. Als der Golem außer Kontrolle geriet, löschte der Rabbi einen Buchstaben: „met“ – tot.",
 en:"According to legend Rabbi Loew in Prague formed a man from clay to protect the community. On its forehead he wrote 'emet' — truth. When the golem ran out of control, the rabbi erased one letter: 'met' — dead.",
 dk:"Aufgeschrieben wurde die Prager Legende erst im 19. Jahrhundert. Die Reste des Golems sollen bis heute auf dem Dachboden der Altneusynagoge liegen. Die Treppe dorthin ist nicht öffentlich.",dken:"The Prague legend was only written down in the 19th century. The golem's remains are said to lie in the attic of the Old-New Synagogue to this day. The stairs up are not public."},
{id:"alraune",r:"II",ch:11,y:"Mittelalter",sort:1200,t:"Die Alraune",art:"fahringer_37",
 de:"Die Alraune wächst angeblich unter dem Galgen, aus dem, was ein Gehenkter verliert. Wer sie aus der Erde zieht, hört ihren Schrei – und stirbt. Darum band man einen Hund an die Wurzel und ließ ihn ziehen.",
 en:"The mandrake supposedly grows under the gallows, from what a hanged man loses. Whoever pulls it from the ground hears its scream — and dies. So people tied a dog to the root and let it pull.",
 dk:"Die Wurzel enthält Scopolamin und Atropin. Mittelalterliche Chirurgen nutzten sie als Betäubung – und als Gift.",dken:"The root contains scopolamine and atropine. Medieval surgeons used it as an anaesthetic — and as a poison."},
{id:"pest",r:"II",ch:12,y:"1348",sort:1348,t:"Der Schwarze Tod",art:"fahringer_36",
 de:"1348 erreichte die Pest die deutschen Länder. In wenigen Jahren starb vielleicht ein Drittel der Menschen. Geißler zogen durch die Städte und schlugen sich blutig, um Gott zu versöhnen.",
 en:"In 1348 the plague reached the German lands. Within a few years perhaps a third of the people died. Flagellants marched through the towns, whipping themselves bloody to appease God.",
 dk:"Man gab den Juden die Schuld, sie hätten Brunnen vergiftet. In vielen Städten wurden ganze Gemeinden ermordet – oft bevor die Pest überhaupt kam.",dken:"Jews were blamed for poisoning wells. In many towns whole communities were murdered — often before the plague had even arrived."},
{id:"faustdum",r:"II",ch:13,y:"Legende",sort:1550,t:"Das Faust-Haus in Prag",art:"clarke_40",
 de:"Am Karlsplatz in Prag steht ein Haus, das man das Faust-Haus nennt. Hier soll der Teufel Doktor Faust geholt haben – durch die Decke. Das Loch, so erzählte man, ließ sich nie wieder schließen.",
 en:"On Charles Square in Prague stands a house people call the Faust House. Here the devil is said to have taken Doctor Faust — through the ceiling. The hole, they said, could never be closed again.",
 dk:"Man erzählt, der Teufel habe ihn an den Haaren durch die Decke gezogen. Wer das Loch zumauerte, fand es am nächsten Morgen wieder offen.",dken:"They say the devil dragged him through the ceiling by his hair. Whoever bricked up the hole found it open again the next morning."},
{id:"totentanz",r:"II",ch:14,y:"1463",sort:1463,t:"Der Totentanz",art:"clarke_19",
 de:"1463 malte man in der Lübecker Marienkirche einen Totentanz: ein fast dreißig Meter langes Bild, auf dem der Tod mit allen tanzt – mit dem Papst, dem Kaiser, dem Arzt und dem Kind. Niemand ist zu wichtig, um mitzutanzen.",
 en:"In 1463 a Dance of Death was painted in St Mary's Church in Lübeck: a picture almost thirty metres long in which Death dances with everyone — with the pope, the emperor, the doctor and the child. Nobody is too important to join the dance.",
 dk:"1701 ersetzte man das brüchige Original durch eine Kopie. Sie verbrannte 1942 in einer Bombennacht. Der Tod tanzte zu Ende.",dken:"In 1701 the crumbling original was replaced by a copy. It burned in a bombing night in 1942. Death finished the dance."},
{id:"kafka",r:"II",ch:15,y:"1915",sort:1915,t:"Kafka, der Versicherungsjurist",art:"clarke_31",
 de:"Franz Kafka schrieb auf Deutsch und arbeitete in Prag bei einer Arbeiter-Unfall-Versicherung. Tagsüber las er Berichte über abgerissene Finger und zerquetschte Hände, nachts schrieb er „Die Verwandlung“.",
 en:"Franz Kafka wrote in German and worked in Prague for a workers' accident insurance institute. By day he read reports about torn-off fingers and crushed hands, by night he wrote 'The Metamorphosis'.",
 dk:"Er starb 1924 an Tuberkulose und bat seinen Freund Max Brod, alles zu verbrennen. Brod tat es nicht.",dken:"He died of tuberculosis in 1924 and asked his friend Max Brod to burn everything. Brod did not."},
{id:"doppel",r:"II",ch:16,y:"1796",sort:1796,t:"Der Doppelgänger",art:"clarke_52",
 de:"Das Wort „Doppelgänger“ erfand der Dichter Jean Paul 1796. Wer seinem Doppelgänger begegnet, so sagt der Volksglaube, wird bald sterben. Die Romantik liebte dieses Motiv: Heine, Hoffmann, Schubert.",
 en:"The word 'Doppelgänger' was coined by the poet Jean Paul in 1796. Whoever meets their double, says folk belief, will soon die. Romanticism loved the motif: Heine, Hoffmann, Schubert.",
 dk:"Neurologen kennen das Phänomen: Heautoskopie, das Sehen des eigenen Körpers – bei Epilepsie, Migräne und Hirnläsionen.",dken:"Neurologists know the phenomenon: heautoscopy, seeing one's own body — in epilepsy, migraine and brain lesions."},
// ---------------------------------------------------------------- Reich III · Fausts Studierzimmer
{id:"histfaust",r:"III",ch:17,y:"um 1540",sort:1540,t:"Der echte Doktor Faust",art:"clarke_2",
 de:"Johann Georg Faust lebte wirklich, etwa von 1480 bis 1541. Er war Astrologe, Wahrsager und, so sagten seine Feinde, Betrüger. Geboren vermutlich in Knittlingen, gestorben der Überlieferung nach in Staufen im Breisgau.",
 en:"Johann Georg Faust really lived, roughly from 1480 to 1541. He was an astrologer, fortune teller and, his enemies said, a fraud. Probably born in Knittlingen; according to tradition he died in Staufen im Breisgau.",
 dk:"Im Gasthaus „Löwen“ in Staufen soll man ihn tot gefunden haben, grässlich zugerichtet. Der Teufel habe ihm den Hals umgedreht.",dken:"He is said to have been found dead in the 'Löwen' inn in Staufen, horribly mangled. The devil had wrung his neck, they said."},
{id:"volksbuch",r:"III",ch:18,y:"1587",sort:1587,t:"Die Historia von D. Johann Fausten",art:"clarke_58",
 de:"1587 druckte Johann Spies in Frankfurt das erste Faustbuch. Faust schließt einen Pakt für 24 Jahre und reist mit Mephostophiles durch die Welt. Das Buch war ein Bestseller und eine Warnung zugleich.",
 en:"In 1587 Johann Spies printed the first Faust book in Frankfurt. Faust makes a pact for 24 years and travels the world with Mephostophiles. The book was a bestseller and a warning at the same time.",
 dk:"Am Ende finden die Studenten sein Gehirn an der Wand und seinen Körper auf dem Misthaufen.",dken:"At the end the students find his brain on the wall and his body on the dung heap."},
{id:"auerbach",r:"III",ch:19,y:"1525",sort:1525,t:"Auerbachs Keller",art:"clarke_19",
 de:"Den Weinkeller in Leipzig gründete um 1525 Heinrich Stromer aus Auerbach – ein Arzt und Professor der Medizin. Er verkaufte den Studenten Wein, weil er für die Gesundheit gut sei. Goethe trank hier als Student.",
 en:"The wine cellar in Leipzig was founded around 1525 by Heinrich Stromer from Auerbach — a physician and professor of medicine. He sold wine to the students because it was good for their health. Goethe drank here as a student.",
 dk:"Ein altes Wandbild zeigt Faust, der auf einem Weinfass aus dem Keller reitet. Am Eingang reiben Besucher Fausts Bronzefuß blank – das soll Glück bringen.",dken:"An old mural shows Faust riding out of the cellar on a wine barrel. At the entrance visitors rub Faust's bronze foot shiny — for luck."},
{id:"paracelsus",r:"III",ch:20,y:"1541",sort:1541,t:"Paracelsus und die Dosis",art:"clarke_20",
 de:"Paracelsus, Arzt und Alchemist, starb 1541 – vermutlich im selben Jahr wie Faust. Von ihm stammt der Gedanke: „Allein die Dosis macht, dass ein Ding kein Gift ist.“ In Basel verbrannte er öffentlich den „Kanon“ des Avicenna.",
 en:"Paracelsus, physician and alchemist, died in 1541 — probably the same year as Faust. The idea comes from him: 'Only the dose makes a thing not a poison.' In Basel he publicly burned Avicenna's Canon.",
 dk:"Unter seinem Namen ist auch ein Rezept für einen Homunculus überliefert, einen künstlichen Menschen aus Samen und Pferdemist. Goethe gab ihn später Wagner im Faust II.",dken:"A recipe for a homunculus, an artificial man made from semen and horse dung, has also come down under his name. Goethe later gave one to Wagner in Faust II."},
{id:"pudel",r:"III",ch:21,y:"1535",sort:1535,t:"Der schwarze Hund",art:"fahringer_16",
 de:"Bei Goethe kommt Mephisto als schwarzer Pudel zu Faust. Die Idee ist alt: Vom Gelehrten Agrippa von Nettesheim erzählte man, sein schwarzer Hund „Monsieur“ sei ein Dämon gewesen.",
 en:"In Goethe, Mephisto comes to Faust as a black poodle. The idea is old: of the scholar Agrippa von Nettesheim it was said that his black dog 'Monsieur' was a demon.",
 dk:"Als Agrippa 1535 starb, soll er den Hund verflucht haben. Das Tier lief in einen Fluss und kam nie wieder heraus.",dken:"When Agrippa died in 1535 he is said to have cursed the dog. The animal ran into a river and never came out."},
{id:"brandt",r:"III",ch:22,y:"1772",sort:1772,t:"Das echte Gretchen",art:"delacroix_19",
 de:"Am 14. Januar 1772 wurde in Frankfurt Susanna Margaretha Brandt hingerichtet. Die junge Magd hatte ihr neugeborenes Kind getötet. Der junge Jurist Goethe kannte die Prozessakten – und ließ sie in Gretchens Geschichte einfließen.",
 en:"On 14 January 1772 Susanna Margaretha Brandt was executed in Frankfurt. The young maid had killed her newborn child. The young lawyer Goethe knew the trial records — and wrote them into Gretchen's story.",
 dk:"Sie sagte, der Teufel habe sie verblendet. Das Schwert traf sie vor einer großen Menge Zuschauer.",dken:"She said the devil had blinded her. The sword struck her in front of a large crowd."},
{id:"goethe",r:"III",ch:23,y:"1832",sort:1832,t:"Sechzig Jahre Faust",art:"delacroix_4",
 de:"Goethe arbeitete fast sein ganzes Leben am Faust: vom Urfaust um 1772 bis zum zweiten Teil, den er 1831 versiegelte. Er sollte erst nach seinem Tod erscheinen. Goethe starb am 22. März 1832 in Weimar.",
 en:"Goethe worked on Faust almost his whole life: from the Urfaust around 1772 to the second part, which he sealed in 1831. It was only to appear after his death. Goethe died on 22 March 1832 in Weimar.",
 dk:"Seine letzten Worte sollen „Mehr Licht!“ gewesen sein. Vielleicht wollte er nur, dass jemand die Fensterläden öffnet.",dken:"His last words are said to have been 'More light!'. Perhaps he only wanted someone to open the shutters."},
{id:"karzer",r:"III",ch:24,y:"1509",sort:1509,t:"Faust in Heidelberg?",art:"clarke_22",
 de:"In den Matrikeln der Universität Heidelberg steht 1509 ein „Johannes Faust ex Simern“, der den Bakkalaureus bekam. War das unser Faust? Die Forscher streiten bis heute. Sicher ist: Du wirst in seiner Stadt arbeiten.",
 en:"The Heidelberg University register lists in 1509 a 'Johannes Faust ex Simern' who received a bachelor's degree. Was it our Faust? Scholars still argue. What is certain: you will work in his town.",
 dk:"Mephisto sagt nichts dazu. Er lächelt nur.",dken:"Mephisto says nothing. He only smiles."},
// ---------------------------------------------------------------- Reich IV · Expressionistisches Berlin
{id:"charite",r:"IV",ch:25,y:"1710",sort:1710,t:"Die Charité war ein Pesthaus",art:"struwwel_29",
 de:"1710 baute man vor den Toren Berlins ein Pesthaus – für eine Pest, die dann nicht kam. 1727 machte König Friedrich Wilhelm I. daraus ein Krankenhaus für Arme und nannte es „Charité“, Nächstenliebe. Heute ist es eines der größten Universitätsklinika Europas.",
 en:"In 1710 a plague house was built outside the gates of Berlin — for a plague that then never came. In 1727 King Friedrich Wilhelm I turned it into a hospital for the poor and called it 'Charité', charity. Today it is one of Europe's largest university hospitals.",
 dk:"Die Toten der Armen landeten oft auf dem Seziertisch. Für die Anatomie war das Pesthaus ein Glücksfall.",dken:"The poor who died there often ended up on the dissecting table. For anatomy the plague house was a stroke of luck."},
{id:"virchow",r:"IV",ch:26,y:"1858",sort:1858,t:"Virchow und die Zelle",art:"clarke_11",
 de:"Rudolf Virchow lehrte in Berlin: „Omnis cellula e cellula“ – jede Zelle stammt aus einer Zelle. Er begründete die Zellularpathologie und sagte: „Die Medizin ist eine soziale Wissenschaft.“",
 en:"Rudolf Virchow taught in Berlin: 'Omnis cellula e cellula' — every cell comes from a cell. He founded cellular pathology and said: 'Medicine is a social science.'",
 dk:"Bismarck forderte ihn 1865 tatsächlich zum Duell. Die Legende ergänzt: Virchow wählte als Waffen zwei Würste – eine davon voller Trichinen. Bismarck lehnte ab.",dken:"Bismarck really did challenge him to a duel in 1865. Legend adds: Virchow chose two sausages as weapons — one full of trichinella. Bismarck declined."},
{id:"koch",r:"IV",ch:27,y:"1882",sort:1882,t:"Der 24. März 1882",art:"clarke_54",
 de:"Am 24. März 1882 stellte Robert Koch in Berlin den Erreger der Tuberkulose vor. Damals starb jeder siebte Mensch in Europa an der „Schwindsucht“. Der 24. März ist heute Welttuberkulosetag.",
 en:"On 24 March 1882 Robert Koch presented the tuberculosis bacterium in Berlin. At the time one in seven people in Europe died of 'consumption'. 24 March is World Tuberculosis Day today.",
 dk:"Sein Heilmittel Tuberkulin von 1890 heilte niemanden. Der Skandal verfolgte ihn bis zum Nobelpreis 1905.",dken:"His 1890 cure, tuberculin, cured no one. The scandal followed him all the way to his Nobel Prize in 1905."},
{id:"caligari",r:"IV",ch:28,y:"1920",sort:1920,t:"Das Cabinet des Dr. Caligari",art:"clarke_31",
 de:"1920 kam „Das Cabinet des Dr. Caligari“ ins Kino: gemalte, schiefe Häuser, ein Schlafwandler, der mordet, und ein Arzt, der eine Irrenanstalt leitet. Am Ende weiß man nicht mehr, wer verrückt ist – der Arzt oder der Erzähler.",
 en:"In 1920 'The Cabinet of Dr. Caligari' came to the cinema: painted, crooked houses, a sleepwalker who murders, and a doctor who runs an asylum. At the end you no longer know who is mad — the doctor or the narrator.",
 dk:"Die Kulissen waren bemalte Leinwände. Es heißt, im Nachkriegs-Berlin habe der Strom für Licht gefehlt – darum sind die Schatten gemalt.",dken:"The sets were painted canvas. It is said post-war Berlin lacked electricity for lighting — so the shadows are painted on."},
{id:"nosferatu",r:"IV",ch:29,y:"1922",sort:1922,t:"Nosferatu",art:"clarke_47",
 de:"1922 kam F. W. Murnaus „Nosferatu“ ins Kino – eine nicht autorisierte Verfilmung von „Dracula“. Graf Orlok bringt Ratten und Pest in eine norddeutsche Stadt. Der Schauspieler hieß Max Schreck.",
 en:"In 1922 F. W. Murnau's 'Nosferatu' reached the cinemas — an unauthorised adaptation of 'Dracula'. Count Orlok brings rats and plague to a north German town. The actor was called Max Schreck — 'Schreck' means fright.",
 dk:"Ein Gericht befahl, alle Kopien zu vernichten. Einige überlebten im Dunkeln – wie der Graf.",dken:"A court ordered all copies destroyed. Some survived in the dark — like the count."},
{id:"haarmann",r:"IV",ch:30,y:"1924",sort:1924,t:"Der Fall Haarmann",art:"clarke_41",
 de:"Zwischen 1918 und 1924 ermordete Fritz Haarmann in Hannover mindestens 24 junge Männer. Er arbeitete auch als Spitzel für die Polizei – darum suchte ihn lange niemand. Der Philosoph Theodor Lessing berichtete über den Prozess und klagte die Gesellschaft an.",
 en:"Between 1918 and 1924 Fritz Haarmann murdered at least 24 young men in Hannover. He also worked as a police informer — which is why for a long time nobody looked for him. The philosopher Theodor Lessing reported on the trial and accused society.",
 dk:"Sein Kopf lag bis 2014 in Formalin in der Göttinger Rechtsmedizin. Lessing wurde 1933 von Nationalsozialisten ermordet.",dken:"His head was kept in formalin at the Göttingen forensic institute until 2014. Lessing was murdered by Nazis in 1933."},
{id:"doeblin",r:"IV",ch:31,y:"1929",sort:1929,t:"Der Kassenarzt vom Alexanderplatz",art:"clarke_35",
 de:"Alfred Döblin hatte eine Kassenarztpraxis im Osten Berlins. 1929 schrieb er „Berlin Alexanderplatz“ – über Franz Biberkopf, der aus dem Gefängnis kommt und anständig bleiben will. Die Stadt lässt ihn nicht.",
 en:"Alfred Döblin had a public-insurance practice in east Berlin. In 1929 he wrote 'Berlin Alexanderplatz' — about Franz Biberkopf, who leaves prison and wants to stay decent. The city won't let him.",
 dk:"Döblin kannte seine Figuren aus dem Wartezimmer.",dken:"Döblin knew his characters from his waiting room."},
{id:"mfilm",r:"IV",ch:32,y:"1931",sort:1931,t:"M – Eine Stadt sucht einen Mörder",art:"clarke_47",
 de:"1931 drehte Fritz Lang „M“. Ein Kindermörder pfeift immer dieselbe Melodie, Griegs „In der Halle des Bergkönigs“. Ein blinder Ballonverkäufer erkennt ihn am Pfeifen. Nicht die Polizei fasst ihn, sondern die Unterwelt – und stellt ihn vor ihr eigenes Gericht.",
 en:"In 1931 Fritz Lang made 'M'. A child murderer always whistles the same tune, Grieg's 'In the Hall of the Mountain King'. A blind balloon seller recognises him by the whistling. It is not the police who catch him but the underworld — which puts him before its own court.",
 dk:"Das Pfeifen im Film soll von Fritz Lang selbst stammen – der Schauspieler konnte nicht pfeifen.",dken:"The whistling in the film is said to be Fritz Lang's own — the actor could not whistle."},
// ---------------------------------------------------------------- Reich V · Walpurgisnacht + Anatomisches Theater
{id:"brocken",r:"V",ch:33,y:"1777",sort:1777,t:"Der Brocken",art:"clarke_7",
 de:"In der Nacht zum 1. Mai treffen sich die Hexen auf dem Brocken im Harz – so erzählt man seit Jahrhunderten. Goethe stieg im Dezember 1777 im Schnee hinauf. Im Nebel kann man dort einen riesigen Schatten mit Heiligenschein sehen: das Brockengespenst.",
 en:"On the night before 1 May the witches meet on the Brocken in the Harz — so people have told for centuries. Goethe climbed it in the snow in December 1777. In the fog you can see a giant shadow with a halo there: the Brocken spectre.",
 dk:"Das Gespenst ist dein eigener Schatten auf den Wolken. Wer es sieht, sieht sich selbst – größer und dunkler.",dken:"The spectre is your own shadow on the clouds. Whoever sees it sees themselves — bigger and darker."},
{id:"vesal",r:"V",ch:34,y:"1543",sort:1543,t:"Das Anatomische Theater",art:"clarke_57",
 de:"1543 erschien Vesals „De humani corporis fabrica“ – der Körper, wie er wirklich ist. Bald baute man Anatomische Theater: steile Ränge um einen Tisch, auf dem ein Toter geöffnet wurde. Man verkaufte Eintrittskarten.",
 en:"In 1543 Vesalius's 'De humani corporis fabrica' appeared — the body as it really is. Soon anatomical theatres were built: steep tiers around a table on which a corpse was opened. Tickets were sold.",
 dk:"Die Leichen kamen meist vom Galgen. Sektionen fanden im Winter statt, zur Karnevalszeit – wegen der Kälte, und weil die Leute Zeit hatten.",dken:"The bodies mostly came from the gallows. Dissections took place in winter, at carnival time — because of the cold, and because people had time."},
{id:"nachzehrer",r:"V",ch:35,y:"Pestzeit",sort:1350,t:"Der Nachzehrer",art:"fahringer_37",
 de:"Ein Nachzehrer ist ein Toter, der im Grab sein Leichentuch kaut – und dabei seine Verwandten nachholt, einen nach dem anderen. Man legte Toten einen Stein oder eine Münze in den Mund, damit sie nicht kauen konnten.",
 en:"A Nachzehrer is a dead man who chews his shroud in the grave — and drags his relatives after him, one by one. People put a stone or a coin in the dead's mouth so they could not chew.",
 dk:"Die Erklärung kennt jeder Rechtsmediziner: Fäulnisgase blähen den Leichnam, Flüssigkeit tritt aus dem Mund, das Tuch reißt. In der Pestzeit starb die Familie wirklich nacheinander.",dken:"Every forensic doctor knows the explanation: putrefaction gases bloat the body, fluid leaks from the mouth, the cloth tears. In plague times the family really did die one after another."},
{id:"hauser",r:"V",ch:36,y:"1828",sort:1828,t:"Kaspar Hauser",art:"dore_16",
 de:"Am Pfingstmontag 1828 stand in Nürnberg ein junger Mann, der kaum sprechen konnte. Er sagte, er habe sein Leben in einem dunklen Verlies verbracht. Ganz Europa nannte ihn „das Kind Europas“.",
 en:"On Whit Monday 1828 a young man stood in Nuremberg who could barely speak. He said he had spent his life in a dark dungeon. All of Europe called him 'the child of Europe'.",
 dk:"1833 starb er an einer Stichwunde. Wer ihn erstach – oder ob er es selbst war –, ist bis heute ungeklärt.",dken:"In 1833 he died of a stab wound. Who stabbed him — or whether he did it himself — is still unsolved."},
{id:"semmelweis",r:"V",ch:37,y:"1847",sort:1847,t:"Semmelweis wäscht die Hände",art:"clarke_61",
 de:"1847 erkannte Ignaz Semmelweis in Wien, warum so viele Mütter am Kindbettfieber starben: Die Ärzte kamen direkt aus dem Sektionssaal in den Kreißsaal. Er ließ sie die Hände mit Chlorkalk waschen. Die Sterblichkeit fiel dramatisch.",
 en:"In 1847 Ignaz Semmelweis in Vienna realised why so many mothers died of childbed fever: the doctors came straight from the dissecting room to the delivery room. He had them wash their hands with chlorinated lime. Mortality fell dramatically.",
 dk:"Die Kollegen lachten ihn aus. Er starb 1865 in einer Irrenanstalt – an einer infizierten Wunde.",dken:"His colleagues laughed at him. He died in 1865 in an asylum — of an infected wound."},
{id:"dippel",r:"V",ch:38,y:"1673",sort:1673,t:"Burg Frankenstein",art:"fahringer_36",
 de:"Auf Burg Frankenstein bei Darmstadt wurde 1673 Johann Konrad Dippel geboren, Alchemist und Arzt. Er kochte Knochen und Tierblut zu „Dippels Öl“, einem Lebenselixier. Manche glauben, Mary Shelley habe von ihm gehört.",
 en:"At Castle Frankenstein near Darmstadt Johann Konrad Dippel was born in 1673, alchemist and physician. He boiled bones and animal blood into 'Dippel's oil', an elixir of life. Some believe Mary Shelley heard of him.",
 dk:"Bewiesen ist nichts. Aber das Öl wurde später als Mittel gegen Insekten und Wild verkauft.",dken:"Nothing is proven. But the oil was later sold as a repellent against insects and game."},
{id:"roentgen",r:"V",ch:39,y:"1895",sort:1895,t:"Die Hand von Anna Bertha",art:"clarke_62",
 de:"Am 8. November 1895 entdeckte Wilhelm Conrad Röntgen in Würzburg eine unsichtbare Strahlung. Eines der ersten Bilder zeigt die Hand seiner Frau Anna Bertha – Knochen und Ehering.",
 en:"On 8 November 1895 Wilhelm Conrad Röntgen discovered an invisible radiation in Würzburg. One of the first pictures shows the hand of his wife Anna Bertha — bones and wedding ring.",
 dk:"Als sie das Bild sah, soll sie gesagt haben: „Ich habe meinen Tod gesehen.“",dken:"When she saw the picture she is said to have said: 'I have seen my death.'"},
{id:"gerettet",r:"V",ch:40,y:"1808",sort:1808,t:"„Ist gerettet!“",art:"clarke_10",
 de:"Am Ende von Faust I ruft Mephisto über Gretchen: „Sie ist gerichtet!“ Eine Stimme von oben antwortet: „Ist gerettet!“ Im zweiten Teil wird auch Faust gerettet – weil er nie aufgehört hat, sich zu bemühen.",
 en:"At the end of Faust I Mephisto cries over Gretchen: 'She is judged!' A voice from above answers: 'Is saved!' In the second part Faust is saved too — because he never stopped striving.",
 dk:"„Wer immer strebend sich bemüht, den können wir erlösen.“ Mephisto verliert. Vielleicht wollte er das.",dken:"'Whoever strives with all his might, him we can redeem.' Mephisto loses. Perhaps he wanted to."},
// ---------------------------------------------------------------- Heidelberger Funde (secret: one per easter egg)
{id:"h_uni",r:"H",ch:0,egg:"konami",y:"1386",sort:1386,t:"Die älteste Universität",art:"clarke_11",
 de:"1386 gründete Kurfürst Ruprecht I. die Universität Heidelberg – die älteste im heutigen Deutschland. Wer sich danebenbenahm, kam in den Studentenkarzer. Die Wände sind voller Zeichnungen und Namen der Gefangenen.",
 en:"In 1386 Elector Ruprecht I founded Heidelberg University — the oldest in today's Germany. Students who misbehaved went to the student prison. Its walls are covered in drawings and names of the prisoners.",
 dk:"Bis 1914 saß man dort – die ersten Tage bei Wasser und Brot. Viele kamen absichtlich – es galt als Ehre.",dken:"Until 1914 students were locked up there — the first days on bread and water. Many got themselves locked up on purpose — it was a badge of honour."},
{id:"h_schloss",r:"H",ch:0,egg:"eye7",y:"1693",sort:1693,t:"Das zerstörte Schloss",art:"dore_7",
 de:"Französische Truppen sprengten das Heidelberger Schloss 1689 und 1693. Als man es wieder bewohnbar machen wollte, schlug 1764 ein Blitz ein, und es brannte erneut. Danach gab man auf. Die Ruine wurde zum Symbol der Romantik.",
 en:"French troops blew up Heidelberg Castle in 1689 and 1693. When it was being made habitable again, lightning struck in 1764 and it burned once more. After that people gave up. The ruin became the symbol of Romanticism.",
 dk:"Der „gesprengte Turm“ liegt bis heute halb im Graben – wie er gefallen ist.",dken:"The 'blown-up tower' still lies half in the moat — just as it fell."},
{id:"h_fass",r:"H",ch:0,egg:"verweile",y:"1751",sort:1751,t:"Perkeo und das große Fass",art:"fahringer_2",
 de:"Im Schlosskeller liegt das Große Fass von 1751, mit mehr als 200.000 Litern. Gegenüber steht die Figur des Perkeo: ein kleinwüchsiger Hofnarr aus Südtirol, der schon das Vorgängerfass bewachte und angeblich nur Wein trank.",
 en:"In the castle cellar lies the Great Tun of 1751, holding more than 200,000 litres. Facing it stands the figure of Perkeo: a court jester of short stature from South Tyrol, who guarded the previous tun and supposedly drank only wine.",
 dk:"Als ein Arzt ihm ein Glas Wasser verordnete, starb er – so die Legende – am nächsten Tag.",dken:"When a doctor prescribed him a glass of water he died — so the legend goes — the next day."},
{id:"h_mauer",r:"H",ch:0,egg:"geister",y:"600.000 v. Chr.",sort:-600000,t:"Der Unterkiefer von Mauer",art:"dore_19",
 de:"1907 fand ein Arbeiter in einer Sandgrube in Mauer bei Heidelberg einen Unterkiefer: etwa 600.000 Jahre alt. So bekam der Homo heidelbergensis seinen Namen. Heidelberg war bewohnt, lange bevor es Menschen wie uns gab.",
 en:"In 1907 a worker in a sand pit at Mauer near Heidelberg found a lower jaw: about 600,000 years old. That is how Homo heidelbergensis got its name. Heidelberg was inhabited long before there were people like us.",
 dk:"Der Kiefer hat keine Kinnspitze. Er lächelt nicht.",dken:"The jaw has no chin. It does not smile."},
{id:"h_bunsen",r:"H",ch:0,egg:"pudel",y:"1860",sort:1860,t:"Bunsen und das Licht der Sterne",art:"clarke_22",
 de:"Robert Bunsen und Gustav Kirchhoff zerlegten in Heidelberg das Licht von Flammen in Farben. So fanden sie 1860 und 1861 zwei neue Elemente: Caesium und Rubidium – und eine Methode, die Chemie der Sterne zu lesen.",
 en:"Robert Bunsen and Gustav Kirchhoff split the light of flames into colours in Heidelberg. That is how in 1860 and 1861 they found two new elements: caesium and rubidium — and a way to read the chemistry of the stars.",
 dk:"Bei der Explosion einer Arsenverbindung hatte Bunsen 1843 die Sehkraft des rechten Auges verloren – und sich fast vergiftet.",dken:"In 1843 an exploding arsenic compound had cost Bunsen the sight of his right eye — and nearly poisoned him."},
{id:"h_alz",r:"H",ch:0,egg:"datum",y:"1906",sort:1906,t:"Alzheimer und Kraepelin",art:"clarke_35",
 de:"Emil Kraepelin ordnete in Heidelberg die psychischen Krankheiten neu. 1903 arbeitete bei ihm kurz Alois Alzheimer, der ihm dann nach München folgte. 1906 beschrieb Alzheimer den Fall seiner Frankfurter Patientin Auguste Deter. Sie hatte gesagt: „Ich habe mich sozusagen selbst verloren.“",
 en:"Emil Kraepelin reorganised the classification of mental illness in Heidelberg. In 1903 Alois Alzheimer worked with him briefly and then followed him to Munich. In 1906 Alzheimer described the case of his Frankfurt patient Auguste Deter. She had said: 'I have lost myself, so to speak.'",
 dk:"Ihre Krankenakte galt fast neunzig Jahre als verschollen. 1995 tauchte sie wieder auf, 1997 die Präparate ihres Gehirns.",dken:"Her medical file was thought lost for almost ninety years. It resurfaced in 1995, the slides of her brain in 1997."},
{id:"h_twain",r:"H",ch:0,egg:"portrait",y:"1878",sort:1878,t:"Mark Twain und die schreckliche Sprache",art:"struwwel_15",
 de:"1878 lebte Mark Twain einige Monate in Heidelberg und lernte Deutsch. Daraus wurde sein Essay „Die schreckliche deutsche Sprache“: Ein Mädchen hat kein Geschlecht, eine Rübe aber schon.",
 en:"In 1878 Mark Twain lived in Heidelberg for a few months and learned German. The result was his essay 'The Awful German Language': a girl has no gender, but a turnip does.",
 dk:"Er schrieb: Ein begabter Mensch lernt Englisch in dreißig Stunden, Französisch in dreißig Tagen – und Deutsch in dreißig Jahren.",dken:"He wrote: a gifted person learns English in thirty hours, French in thirty days — and German in thirty years."}];
const LORE_REALM={I:"Schwarzwald",II:"Böhmisches Café",III:"Fausts Studierzimmer",IV:"Expressionistisches Berlin",V:"Walpurgisnacht",H:"Heidelberger Funde"};
// Easter eggs: id → [title, hint (shown before found), Mephisto's line DE, EN]
const EGGS={
 konami:["Der Code der Alten","Eine alte Folge: hoch, hoch, runter, runter …","In der Hölle gibt es keine Cheats. Aber für Sie mache ich eine Ausnahme.","There are no cheats in hell. But for you I'll make an exception."],
 eye7:["Das siebte Mal","Wer das Auge oft genug berührt …","Siebenmal. Jetzt sieht es Sie auch.","Seven times. Now it sees you too."],
 verweile:["Verweile doch!","Schreib irgendwo den berühmtesten Wunsch des Faust.","„Verweile doch, du bist so schön.“ Vorsicht. Mit diesem Satz hätte ich schon einmal fast eine Seele gewonnen.","'Stay, you are so beautiful.' Careful. With that sentence I once nearly won a soul."],
 geister:["Geisterstunde","Komm zur Geisterstunde.","Mitternacht. Die Glocke schlägt zwölf. Ab jetzt gehört die Stunde uns.","Midnight. The bell strikes twelve. From now on the hour is ours."],
 pudel:["Des Pudels Kern","Manchmal läuft ein schwarzer Hund durchs Bild.","Das also war des Pudels Kern!","So that was the poodle's core!"],
 datum:["Kalender des Teufels","Komm an einem Tag, der Goethe oder den Hexen gehört.","An diesem Tag ist die Grenze dünn. Gut, dass Sie gekommen sind.","On this day the border is thin. Good that you came."],
 portrait:["Der Geist, der stets verneint","Tippe dreimal auf mein Gesicht.","Ich bin der Geist, der stets verneint! Und das mit Recht.","I am the spirit that always denies! And rightly so."]};
const EGG_DATES={"04-30":"Walpurgisnacht","05-01":"Walpurgisnacht","08-28":"Goethes Geburtstag (1749)","03-22":"Goethes Todestag (1832)","01-14":"Hinrichtung der Susanna Margaretha Brandt (1772)","06-26":"Auszug der Kinder von Hameln (1284)","03-24":"Robert Kochs Vortrag (1882)","11-08":"Röntgens Entdeckung (1895)","12-06":"Nikolaus – der große Nikolas aus dem Struwwelpeter","10-31":"Reformationstag (1517)"};

// ===== Mephisto 12.8 · Grammatik komplett, Teil 1 (A1–A2): the lessons that were missing between the big chapters.
const GRAMMAR3=[
{id:"g31",level:"A1",week:2,title:"Negation: nicht & kein",sub:"Two ways to say no, and where nicht stands",
 body:`<p><b>kein</b> negates a noun that would have <i>ein</i> or no article. It takes the same endings as <i>ein</i>.</p>
<table><tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr><tr><td>Nom.</td><td><b class="g">kein</b></td><td><b class="g">keine</b></td><td><b class="g">kein</b></td><td><b class="g">keine</b></td></tr><tr><td>Akk.</td><td><b class="g">keinen</b></td><td>keine</td><td>kein</td><td>keine</td></tr></table>
<p><span class="de">Ich habe <b>kein</b> Fieber. Ich habe <b>keine</b> Schmerzen. Ich habe <b>keinen</b> Hunger.</span></p>
<p><b>nicht</b> negates everything else: verbs, adjectives, adverbs, nouns with <i>der/die/das</i> or <i>mein</i>.</p>
<p>Position of <b>nicht</b>: at the <b>end</b> when it negates the whole sentence (<span class="de">Ich rauche <b>nicht</b>.</span>), but <b>before</b> an adjective, an adverb, a preposition phrase or the second verb part: <span class="de">Das ist <b>nicht</b> gut. Ich komme <b>nicht</b> aus Berlin. Ich kann <b>nicht</b> schlafen.</span></p>
<p><b>Trap for English speakers:</b> do not use <span class="de">nicht ein</span> for a plain "not a". "I am not a doctor" = <span class="de">Ich bin <b>kein</b> Arzt.</span></p>
<p>More negatives: <span class="de">nie</span> (never), <span class="de">nichts</span> (nothing), <span class="de">niemand</span> (nobody), <span class="de">noch nicht</span> (not yet), <span class="de">nicht mehr</span> (no longer).</p>`,
 merke:"ein → kein. Everything else → nicht. Not „nicht ein“.",
 ex:[{type:"mc",q:"Ich habe ___ Allergien.",o:["nicht","keine","kein"],a:1,why:"Allergien is a plural noun without article → keine."},
 {type:"mc",q:"Der Patient ist ___ wach.",o:["kein","keine","nicht"],a:2,why:"wach is an adjective → nicht, placed before it."},
 {type:"mc",q:"I am not a nurse. →",o:["Ich bin nicht ein Pfleger.","Ich bin kein Pfleger.","Ich bin Pfleger nicht."],a:1,why:"'not a' is always kein, never nicht ein."},
 {type:"mc",q:"Ich trinke ___ Alkohol.",o:["keinen","keine","nicht"],a:0,why:"der Alkohol, accusative, no article → keinen."},
 {type:"mc",q:"Where does nicht go? „Ich verstehe das ___.“ / „Ich ___ verstehe das.“",o:["Ich verstehe das nicht.","Ich nicht verstehe das.","Ich verstehe das kein."],a:0,why:"When the whole sentence is negated, nicht goes to the end."},
 {type:"gap",q:"Das ist ___ mein Ausweis. (not)",a:"nicht",alt:[],why:"A noun with a possessive (mein) is negated with nicht."},
 {type:"gap",q:"Wir haben heute ___ Zeit. (no)",a:"keine",alt:[],why:"die Zeit, no article → keine Zeit."},
 {type:"order",words:["Ich","kann","heute","nicht","kommen","."],a:"Ich kann heute nicht kommen.",why:"nicht stands before the second verb part (kommen)."},
 {type:"fix",q:"Er hat nicht ein Auto.",a:"Er hat kein Auto.",err:"nicht ein",why:"nicht ein → kein."},
 {type:"transform",q:"Verneinen: Ich habe Fieber.",a:"Ich habe kein Fieber.",alt:[],why:"das Fieber, no article → kein Fieber."}]},
{id:"g32",level:"A1",week:2,title:"Fragen: W-Fragen, Ja/Nein und „doch“",sub:"Question words, verb-first questions, and the answer English lacks",
 body:`<p><b>W-Frage:</b> question word in position 1, <b>verb in position 2</b>. <span class="de">Wo <b>haben</b> Sie Schmerzen? Seit wann <b>haben</b> Sie Fieber?</span></p>
<table><tr><th>wer</th><td>who</td><th>was</th><td>what</td><th>wo</th><td>where</td></tr><tr><th>wohin</th><td>where to</td><th>woher</th><td>where from</td><th>wann</th><td>when</td></tr><tr><th>wie</th><td>how</td><th>warum</th><td>why</td><th>wie lange</th><td>how long</td></tr><tr><th>wie viel</th><td>how much</td><th>wie oft</th><td>how often</td><th>welcher</th><td>which</td></tr></table>
<p><b>False friends:</b> <span class="de">wer</span> = who (not where), <span class="de">wo</span> = where (not who).</p>
<p><b>Ja/Nein-Frage:</b> the verb comes <b>first</b>. No "do". <span class="de"><b>Haben</b> Sie Schmerzen? <b>Nehmen</b> Sie Medikamente?</span></p>
<p><b>doch</b> answers "yes" to a <b>negative</b> question: <span class="de">Haben Sie keine Schmerzen? — <b>Doch</b>, im Bauch.</span> (<span class="de">Ja</span> would be confusing here.)</p>
<p><span class="de">wem</span> = to whom (dative), <span class="de">wen</span> = whom (accusative): <span class="de">Wen rufen Sie an? Wem gehört das?</span></p>`,
 merke:"W-Frage: verb second. Ja/Nein: verb first. Negative question + yes = doch.",
 ex:[{type:"mc",q:"___ tut es weh? — Im Bauch.",o:["Wer","Wo","Wann"],a:1,why:"wo = where. wer = who."},
 {type:"mc",q:"___ haben Sie die Schmerzen? — Seit gestern.",o:["Seit wann","Wie viel","Wohin"],a:0,why:"seit wann = since when."},
 {type:"mc",q:"Rauchen Sie nicht? — ___, zehn Zigaretten am Tag.",o:["Ja","Nein","Doch"],a:2,why:"A 'yes' to a negative question is doch."},
 {type:"mc",q:"Do you take medication? →",o:["Tun Sie nehmen Medikamente?","Nehmen Sie Medikamente?","Machen Sie Medikamente nehmen?"],a:1,why:"German has no 'do': the verb simply comes first."},
 {type:"mc",q:"___ kommen Sie? — Aus Saudi-Arabien.",o:["Wo","Wohin","Woher"],a:2,why:"woher = where from; wohin = where to; wo = where (no movement)."},
 {type:"gap",q:"___ heißen Sie? (how)",a:"Wie",alt:["wie"],why:"Wie heißen Sie? = What is your name? (literally: how are you called)"},
 {type:"gap",q:"___ rufen wir an? — Den Oberarzt. (whom)",a:"Wen",alt:["wen"],why:"anrufen takes the accusative → wen."},
 {type:"order",words:["Wie","lange","haben","Sie","schon","Husten","?"],a:"Wie lange haben Sie schon Husten?",why:"Question phrase (wie lange) first, then the verb."},
 {type:"fix",q:"Wo Sie wohnen?",a:"Wo wohnen Sie?",err:"Sie wohnen",why:"After the question word the verb comes second, then the subject."},
 {type:"transform",q:"Mach eine Ja/Nein-Frage: Sie haben Fieber.",a:"Haben Sie Fieber?",alt:[],why:"Verb first."}]},
{id:"g33",level:"A1",week:3,title:"Der Plural",sub:"Five endings, some umlauts, and how to guess",
 body:`<p>German has five plural patterns. The article is always <b class="g">die</b>. Learn every noun as a triple: <span class="de">der Arzt, die Ärzte</span>.</p>
<table><tr><th>Ending</th><th>Typical for</th><th>Example</th></tr>
<tr><td><b>-(e)n</b></td><td>most feminine nouns; all feminines in -e, -ung, -heit, -keit, -ion</td><td>die Lunge → die Lunge<b>n</b>, die Untersuchung → die Untersuchung<b>en</b></td></tr>
<tr><td><b>-e</b> / <b>¨-e</b></td><td>many masculine, short neuter</td><td>der Tag → die Tag<b>e</b>, der Arzt → die <b>Ä</b>rzt<b>e</b></td></tr>
<tr><td><b>-er</b> / <b>¨-er</b></td><td>many short neuter nouns</td><td>das Kind → die Kind<b>er</b>, das Haus → die H<b>ä</b>us<b>er</b></td></tr>
<tr><td><b>–</b> / <b>¨</b></td><td>masc./neut. in -er, -el, -en; -chen, -lein</td><td>der Finger → die Finger, der Vater → die V<b>ä</b>ter</td></tr>
<tr><td><b>-s</b></td><td>foreign words, words ending in a vowel, abbreviations</td><td>das Auto → die Auto<b>s</b>, das EKG → die EKG<b>s</b></td></tr></table>
<p><b>-in → -innen:</b> <span class="de">die Ärztin → die Ärztin<b>nen</b></span>. <b>-nis → -nisse:</b> <span class="de">das Ergebnis → die Ergebnis<b>se</b></span>. Latin words: <span class="de">das Virus → die Viren, das Antibiotikum → die Antibiotika</span>.</p>
<p><b>Dative plural adds -n:</b> <span class="de">mit den Kinder<b>n</b>, seit drei Tage<b>n</b></span> (not after -s or -n).</p>
<p>Practise in <b>Die Gruft</b> (Pakt › Werkstatt).</p>`,
 merke:"Feminine → mostly -(e)n. Learn noun + article + plural together.",
 ex:[{type:"mc",q:"die Lunge → die ___",o:["Lunge","Lungen","Lunges"],a:1,why:"Nouns in -e add -n."},
 {type:"mc",q:"das Kind → die ___",o:["Kinder","Kinden","Kinds"],a:0,why:"Short neuter nouns often take -er."},
 {type:"mc",q:"der Arzt → die ___",o:["Arzte","Ärzte","Arzten"],a:1,why:"-e with umlaut: die Ärzte."},
 {type:"mc",q:"die Ärztin → die ___",o:["Ärztinen","Ärztinnen","Ärztin"],a:1,why:"-in doubles the n: -innen."},
 {type:"mc",q:"seit drei ___ (der Tag)",o:["Tage","Tagen","Tags"],a:1,why:"seit + dative; the dative plural adds -n: Tagen."},
 {type:"gap",q:"zwei ___ (das Medikament)",a:"Medikamente",alt:[],why:"Neuter nouns in -ment take -e."},
 {type:"gap",q:"Wir haben drei ___ gemacht. (das EKG)",a:"EKGs",alt:["EKG"],why:"Abbreviations take -s."},
 {type:"order",words:["Die","Kinder","haben","seit","zwei","Tagen","Fieber","."],a:"Die Kinder haben seit zwei Tagen Fieber.",why:"Plural subject → haben; seit + dative plural (Tagen)."},
 {type:"fix",q:"Ich habe zwei Bruder.",a:"Ich habe zwei Brüder.",err:"Bruder",why:"der Bruder → die Brüder (umlaut, no ending)."},
 {type:"transform",q:"In den Plural: Der Patient wartet.",a:"Die Patienten warten.",alt:[],why:"der Patient → die Patienten (n-declension), verb → warten."}]},
{id:"g34",level:"A1",week:3,title:"Possessivartikel",sub:"mein, dein, sein, ihr, unser, euer, Ihr — and their endings",
 body:`<p>The possessive agrees with the <b>owner</b> (which word) and with the <b>thing owned</b> (which ending). Endings are those of <i>ein/kein</i>.</p>
<table><tr><th>ich</th><td>mein</td><th>du</th><td>dein</td><th>er / es</th><td>sein</td></tr><tr><th>sie (she)</th><td>ihr</td><th>wir</th><td>unser</td><th>ihr</th><td>euer</td></tr><tr><th>sie (they)</th><td>ihr</td><th>Sie</th><td><b>Ihr</b></td><th></th><td></td></tr></table>
<table><tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr><tr><td>Nom.</td><td>mein Arm</td><td>mein<b>e</b> Hand</td><td>mein Bein</td><td>mein<b>e</b> Augen</td></tr><tr><td>Akk.</td><td>mein<b>en</b> Arm</td><td>meine Hand</td><td>mein Bein</td><td>meine Augen</td></tr><tr><td>Dat.</td><td>mein<b>em</b> Arm</td><td>mein<b>er</b> Hand</td><td>mein<b>em</b> Bein</td><td>mein<b>en</b> Augen</td></tr></table>
<p><b>sein</b> for a male or neuter owner, <b>ihr</b> for a female owner or several owners: <span class="de">Herr Nowak und <b>seine</b> Frau. Frau Nowak und <b>ihr</b> Mann.</span></p>
<p>Polite <b>Ihr</b> is always capital: <span class="de">Wie ist <b>Ihr</b> Name? Zeigen Sie mir bitte <b>Ihren</b> Ausweis.</span></p>
<p>With body parts German often uses the article, not the possessive: <span class="de">Heben Sie bitte <b>den</b> Arm.</span></p>`,
 merke:"Owner picks the word, the noun picks the ending. Polite Ihr is capital.",
 ex:[{type:"mc",q:"Frau Weber, wo ist ___ Versichertenkarte?",o:["ihre","Ihre","Ihr"],a:1,why:"Polite form, capital: Ihre; die Karte → -e."},
 {type:"mc",q:"Herr Nowak nimmt ___ Tabletten nicht.",o:["seine","seinen","sein"],a:0,why:"Male owner → sein-; plural noun → seine."},
 {type:"mc",q:"Die Patientin sucht ___ Mann.",o:["ihrem","ihren","ihr"],a:1,why:"Female owner → ihr-; der Mann in the accusative → ihren."},
 {type:"mc",q:"Ich wohne bei ___ Schwester.",o:["meine","meiner","meinem"],a:1,why:"bei + dative, feminine → meiner."},
 {type:"mc",q:"Das ist ___ Kollege, Dr. Braun.",o:["unser","unsere","unseren"],a:0,why:"der Kollege, nominative → unser (no ending)."},
 {type:"mc",q:"Wie ist ___ Telefonnummer? (your, polite)",o:["ihre","Ihre","Ihr"],a:1,why:"die Telefonnummer → Ihre, capital I."},
 {type:"gap",q:"Ich rufe ___ Arzt an. (my)",a:"meinen",alt:[],why:"anrufen + accusative, der Arzt → meinen."},
 {type:"order",words:["Bitte","geben","Sie","mir","Ihren","Ausweis","."],a:"Bitte geben Sie mir Ihren Ausweis.",why:"der Ausweis, accusative → Ihren."},
 {type:"fix",q:"Frau Klein und sein Sohn warten draußen.",a:"Frau Klein und ihr Sohn warten draußen.",err:"sein",why:"A woman's son → ihr Sohn."},
 {type:"transform",q:"Höflich (Sie): Wo ist dein Ausweis?",a:"Wo ist Ihr Ausweis?",alt:[],why:"dein → Ihr (capital)."}]},
{id:"g35",level:"A1",week:4,title:"Präpositionen mit Akkusativ & die Zeit",sub:"für, ohne, durch, gegen, um — and am, um, im for time",
 body:`<p><b>Always accusative:</b> <span class="de">für, ohne, durch, gegen, um, bis</span> — and <span class="de">entlang</span> when it follows the noun (<span class="de">den Fluss entlang</span>). Chant: <i>durch, für, gegen, ohne, um</i>.</p>
<p><span class="de">ein Rezept <b>für den</b> Patienten · <b>ohne</b> Befund · <b>durch die</b> Nase atmen · eine Tablette <b>gegen die</b> Schmerzen · <b>um die</b> Ecke</span></p>
<p>Only the masculine changes in the accusative: <span class="de">der → den, ein → einen</span>.</p>
<p><b>Time:</b></p>
<table><tr><th>um</th><td>clock time</td><td class="de">um 8 Uhr, um halb neun</td></tr><tr><th>am</th><td>days, dates, parts of the day</td><td class="de">am Montag, am 3. Mai, am Abend (but: <b>in der</b> Nacht)</td></tr><tr><th>im</th><td>months, seasons, years with <i>Jahr</i></td><td class="de">im Januar, im Winter, im Jahr 2026</td></tr><tr><th>seit</th><td>since / for (still going on) + dative</td><td class="de">seit gestern, seit drei Tagen</td></tr><tr><th>vor</th><td>ago + dative</td><td class="de">vor zwei Wochen</td></tr><tr><th>von … bis</th><td>from … to</td><td class="de">von 8 bis 16 Uhr</td></tr></table>
<p><b>Trap:</b> a bare year has no preposition: <span class="de">Ich bin 1997 geboren.</span> — never <i>in 1997</i>. And "for three days" (ongoing) is <span class="de">seit drei Tagen</span>, not <i>für</i>.</p>`,
 merke:"durch, für, gegen, ohne, um → accusative. um + Uhr, am + Tag, im + Monat.",
 ex:[{type:"mc",q:"Das Rezept ist für ___ Mann. (Ihr)",o:["Ihr","Ihren","Ihrem"],a:1,why:"für + accusative, der Mann → Ihren."},
 {type:"mc",q:"Der Termin ist ___ 14 Uhr.",o:["am","im","um"],a:2,why:"Clock time → um."},
 {type:"mc",q:"Ich habe ___ Montag Nachtdienst.",o:["am","im","um"],a:0,why:"Days → am."},
 {type:"mc",q:"I have had a cough for three days. →",o:["Ich habe Husten für drei Tage.","Ich habe seit drei Tagen Husten.","Ich hatte Husten vor drei Tagen."],a:1,why:"Still going on → seit + dative, present tense."},
 {type:"mc",q:"Er wurde ___ operiert. (2019)",o:["in 2019","2019","am 2019"],a:1,why:"A bare year takes no preposition (or: im Jahr 2019)."},
 {type:"gap",q:"Atmen Sie bitte durch ___ Mund. (der Mund)",a:"den",alt:[],why:"durch + accusative: der → den."},
 {type:"gap",q:"Ich komme ___ Januar nach Heidelberg. (in)",a:"im",alt:[],why:"Months → im."},
 {type:"order",words:["Ich","arbeite","von","Montag","bis","Freitag","."],a:"Ich arbeite von Montag bis Freitag.",why:"von … bis = from … to."},
 {type:"fix",q:"Ich bin in 1997 geboren.",a:"Ich bin 1997 geboren.",alt:["Ich bin im Jahr 1997 geboren.","Ich bin im Jahre 1997 geboren.","Ich wurde 1997 geboren."],err:"in 1997",why:"No preposition before a bare year."},
 {type:"transform",q:"Mit „ohne“: Ich trinke Kaffee mit Zucker.",a:"Ich trinke Kaffee ohne Zucker.",alt:[],why:"ohne + accusative; Zucker needs no article here."}]},
{id:"g36",level:"A1",week:4,title:"Zahlen, Uhrzeit, Datum",sub:"Reading numbers backwards, half past, and the date with a dot",
 body:`<p><b>21–99 are said backwards:</b> <span class="de">einundzwanzig</span> (one-and-twenty), <span class="de">fünfundvierzig</span> = 45. Write it down digit by digit when a patient dictates a number.</p>
<p><b>Trap:</b> <span class="de">sechs</span> but <span class="de">se<b>ch</b>zehn, se<b>ch</b>zig</span>; <span class="de">sieben</span> but <span class="de">sie<b>b</b>zehn, sie<b>b</b>zig</span>; <span class="de">dreißig</span> with ß.</p>
<p><b>Decimals use a comma:</b> <span class="de">38,5 °C = achtunddreißig Komma fünf</span>. Thousands use a dot or space: 1.000.</p>
<p><b>Clock:</b> official (hospital, train) = 24 h: <span class="de">14:30 = vierzehn Uhr dreißig</span>. Spoken:</p>
<table><tr><td>8:15</td><td class="de">Viertel nach acht</td><td>8:30</td><td class="de"><b>halb neun</b></td></tr><tr><td>8:45</td><td class="de">Viertel vor neun</td><td>8:25</td><td class="de">fünf vor halb neun</td></tr></table>
<p><b>halb neun = 8:30</b>, half <i>towards</i> nine. This costs foreigners appointments.</p>
<p><b>Date:</b> ordinal + dot, day first: <span class="de">der 3. Mai = der dritte Mai</span>; "on" = <span class="de">am dritt<b>en</b> Mai</span>. Written 03.05.2026.</p>
<p>Ordinals: <span class="de">erste, zweite, <b>dritte</b>, vierte … <b>siebte</b>, achte … zwanzig<b>ste</b></span> (-te up to 19, -ste from 20).</p>
<p>Age and birthdate: <span class="de">Ich bin 29 Jahre alt. Geboren am 14.03.1997.</span> Years: <span class="de">neunzehnhundertsiebenundneunzig, zweitausendsechsundzwanzig</span>.</p>`,
 merke:"Units before tens. halb neun = 8:30. Dates: day.month.year with dots.",
 ex:[{type:"mc",q:"„siebenundsechzig“ =",o:["76","67","607"],a:1,why:"Units first: sieben-und-sechzig = 67."},
 {type:"mc",q:"„halb vier“ =",o:["4:30","3:30","3:45"],a:1,why:"halb vier = half towards four = 3:30."},
 {type:"mc",q:"38,5 °C spricht man:",o:["achtunddreißig Punkt fünf","achtunddreißig Komma fünf","achtunddreißig und fünf"],a:1,why:"German decimals use Komma."},
 {type:"mc",q:"„am 03.05.“ spricht man:",o:["am drei Mai","am dritten Mai","am dritte Mai"],a:1,why:"am + ordinal with -en: am dritten Mai (or: am dritten Fünften)."},
 {type:"mc",q:"„Viertel vor neun“ =",o:["9:15","8:45","9:45"],a:1,why:"A quarter before nine = 8:45."},
 {type:"gap",q:"16 = ___",a:"sechzehn",alt:[],why:"sechs loses its s: sechzehn."},
 {type:"gap",q:"Der Termin ist um ___ zehn. (9:30, spoken)",a:"halb",alt:[],why:"9:30 = halb zehn."},
 {type:"order",words:["Ich","bin","am","vierzehnten","März","geboren","."],a:"Ich bin am vierzehnten März geboren.",why:"am + ordinal in -en."},
 {type:"fix",q:"Der Patient ist dreiundsiebenzig Jahre alt.",a:"Der Patient ist dreiundsiebzig Jahre alt.",err:"dreiundsiebenzig",why:"sieben shortens: siebzig."},
 {type:"transform",q:"In Ziffern (Uhrzeit, 24 h): Viertel nach sieben am Abend",a:"19:15",alt:["19.15","19:15 Uhr","19.15 Uhr","19 Uhr 15"],why:"Evening: 7 + 12 = 19; Viertel nach = :15."}]},
{id:"g37",level:"A1",week:5,title:"und, aber, oder, denn, sondern",sub:"Five connectors that do not move the verb",
 body:`<p>These five stand in <b>position 0</b>: they join two main clauses and the word order after them stays normal. Memory word: <b>ADUSO</b> (aber, denn, und, sondern, oder).</p>
<p><span class="de">Ich bin müde, <b>aber</b> ich <b>arbeite</b> weiter.</span><br><span class="de">Ich bleibe zu Hause, <b>denn</b> ich <b>bin</b> krank.</span> (denn = because, with normal word order)</p>
<p><b>sondern</b> = "but rather", only after a negation, and it corrects: <span class="de">Das ist <b>nicht</b> das Herz, <b>sondern</b> der Magen.</span> <b>aber</b> only adds a contrast: <span class="de">Er ist nicht reich, aber glücklich.</span></p>
<p><b>Comma:</b> before <span class="de">aber, denn, sondern</span> always; before <span class="de">und, oder</span> normally none.</p>
<p>Compare with adverbs that take <b>position 1</b> and push the subject behind the verb: <span class="de">Ich bin krank, <b>deshalb bleibe</b> ich zu Hause.</span> Same for <span class="de">dann, danach, trotzdem, also</span>.</p>
<p>If the subject is the same, you can drop it after <span class="de">und</span>: <span class="de">Ich komme und (ich) helfe.</span></p>`,
 merke:"ADUSO = position 0, verb stays second. deshalb/trotzdem/dann = position 1, verb follows directly.",
 ex:[{type:"mc",q:"Ich nehme die Tablette, ___ ich habe Schmerzen.",o:["denn","deshalb","sondern"],a:0,why:"denn = because, normal word order after it."},
 {type:"mc",q:"Das ist kein Infarkt, ___ eine Muskelzerrung.",o:["aber","sondern","oder"],a:1,why:"After a negation, a correction → sondern."},
 {type:"mc",q:"Ich habe Fieber, deshalb ___",o:["ich bleibe im Bett.","bleibe ich im Bett.","ich im Bett bleibe."],a:1,why:"deshalb takes position 1, so the verb comes next."},
 {type:"mc",q:"Möchten Sie Tee ___ Wasser?",o:["oder","denn","sondern"],a:0,why:"oder = or."},
 {type:"mc",q:"Er ist alt, aber ___",o:["ist er fit.","er ist fit.","er fit ist."],a:1,why:"aber is position 0: subject, then verb."},
 {type:"gap",q:"Ich komme nicht heute, ___ morgen. (but rather)",a:"sondern",alt:[],why:"nicht … sondern."},
 {type:"gap",q:"Sie hat Husten ___ Fieber. (and)",a:"und",alt:[],why:"und joins two words; no comma."},
 {type:"order",words:["Ich","bin","müde",",","aber","ich","arbeite","weiter","."],a:"Ich bin müde, aber ich arbeite weiter.",why:"Comma before aber; normal word order after it."},
 {type:"fix",q:"Ich bin krank, denn bleibe ich zu Hause.",a:"Ich bin krank, deshalb bleibe ich zu Hause.",alt:["Ich bin krank, deswegen bleibe ich zu Hause.","Ich bin krank, daher bleibe ich zu Hause.","Ich bin krank, darum bleibe ich zu Hause.","Ich bin krank, also bleibe ich zu Hause."],err:"denn",why:"denn gives the reason; the consequence needs deshalb."},
 {type:"transform",q:"Verbinde mit „denn“: Ich gehe zum Arzt. Ich habe Schmerzen.",a:"Ich gehe zum Arzt, denn ich habe Schmerzen.",alt:[],why:"denn + normal word order, comma before it."}]},
{id:"g38",level:"A2",week:6,title:"Reflexive Verben",sub:"sich waschen, sich fühlen, sich erinnern — and when sich is dative",
 body:`<p>The subject does something to itself. The reflexive pronoun equals the personal pronoun except in the third person: <b>sich</b>.</p>
<table><tr><th></th><th>Akk.</th><th>Dat.</th></tr><tr><td>ich</td><td><b class="g">mich</b></td><td><b class="g">mir</b></td></tr><tr><td>du</td><td><b class="g">dich</b></td><td><b class="g">dir</b></td></tr><tr><td>er/sie/es · sie · Sie</td><td colspan="2"><b class="g">sich</b></td></tr><tr><td>wir</td><td colspan="2">uns</td></tr><tr><td>ihr</td><td colspan="2">euch</td></tr></table>
<p><span class="de">Wie fühlen Sie <b>sich</b>? Ich fühle <b>mich</b> schwach. Setzen Sie <b>sich</b> bitte. Bitte ziehen Sie <b>sich</b> aus.</span></p>
<p><b>Dative</b> when there is another accusative object (usually a body part or clothing): <span class="de">Ich wasche <b>mich</b>.</span> but <span class="de">Ich wasche <b>mir die Hände</b>. Ich habe <b>mir den Arm</b> gebrochen.</span></p>
<p>Many verbs are reflexive only in German: <span class="de">sich erinnern an, sich freuen auf/über, sich ärgern über, sich beeilen, sich erkälten, sich verletzen, sich übergeben, sich Sorgen machen, sich vorstellen</span>.</p>
<p><b>Position:</b> directly after the verb, or after the subject if it follows the verb: <span class="de">Heute fühlt <b>er sich</b> besser. Haben Sie <b>sich</b> verletzt?</span> With a noun subject, sich usually comes before it: <span class="de">Heute fühlt <b>sich</b> der Patient besser.</span> Perfect always with <b>haben</b>.</p>`,
 merke:"Third person and Sie: sich. Body part as object → dative: Ich wasche mir die Hände.",
 ex:[{type:"mc",q:"Wie fühlen Sie ___ heute?",o:["Sie","sich","Ihnen"],a:1,why:"Reflexive for Sie is sich (lowercase)."},
 {type:"mc",q:"Ich habe ___ erkältet.",o:["mir","mich","sich"],a:1,why:"sich erkälten, accusative: ich → mich."},
 {type:"mc",q:"Ich habe ___ das Bein gebrochen.",o:["mich","mir","mein"],a:1,why:"Body part is the accusative object → the pronoun is dative: mir."},
 {type:"mc",q:"Bitte setzen Sie ___.",o:["Sie","sich","dich"],a:1,why:"sich setzen; polite imperative: Setzen Sie sich."},
 {type:"mc",q:"Der Patient hat ___ dreimal übergeben.",o:["sich","ihn","ihm"],a:0,why:"sich übergeben = to vomit; third person → sich."},
 {type:"gap",q:"Erinnern Sie ___ an den Unfall?",a:"sich",alt:[],why:"sich erinnern an + accusative."},
 {type:"gap",q:"Wir freuen ___ auf das Wochenende.",a:"uns",alt:[],why:"wir → uns."},
 {type:"order",words:["Ich","habe","mir","die","Hand","verletzt","."],a:"Ich habe mir die Hand verletzt.",why:"Dative pronoun (mir) because the hand is the accusative object."},
 {type:"fix",q:"Ich wasche mich die Hände.",a:"Ich wasche mir die Hände.",err:"mich",why:"With a body part as object the reflexive is dative."},
 {type:"transform",q:"Ins Perfekt: Er verletzt sich.",a:"Er hat sich verletzt.",alt:[],why:"Reflexive verbs always form the perfect with haben."}]},
{id:"g39",level:"A2",week:6,title:"Pronomen im Akkusativ & Dativ — und ihre Reihenfolge",sub:"ihn or ihm? And who comes first: Ich gebe es ihm.",
 body:`<table><tr><th>Nom.</th><td>ich</td><td>du</td><td>er</td><td>sie</td><td>es</td><td>wir</td><td>ihr</td><td>sie / Sie</td></tr><tr><th>Akk.</th><td>mich</td><td>dich</td><td><b class="g">ihn</b></td><td>sie</td><td>es</td><td>uns</td><td>euch</td><td>sie / Sie</td></tr><tr><th>Dat.</th><td>mir</td><td>dir</td><td><b class="g">ihm</b></td><td><b class="g">ihr</b></td><td>ihm</td><td>uns</td><td>euch</td><td><b class="g">ihnen / Ihnen</b></td></tr></table>
<p><span class="de">Ich sehe <b>ihn</b>. Ich helfe <b>ihm</b>. Ich gebe <b>ihr</b> das Rezept. Wie geht es <b>Ihnen</b>?</span></p>
<p>Things are <span class="de">er, sie, es</span> by their gender: <span class="de">Wo ist der Befund? — Ich habe <b>ihn</b> hier.</span></p>
<p><b>Order of two objects:</b></p>
<ul><li>Two nouns: <b>dative before accusative</b>. <span class="de">Ich gebe <b>dem Patienten das Rezept</b>.</span></li>
<li>A pronoun always comes <b>before</b> a noun. <span class="de">Ich gebe <b>ihm</b> das Rezept. Ich gebe <b>es</b> dem Patienten.</span></li>
<li>Two pronouns: <b>accusative before dative</b>. <span class="de">Ich gebe <b>es ihm</b>.</span></li></ul>
<p>Verbs that take both: <span class="de">geben, zeigen, bringen, erklären, schicken, verschreiben, empfehlen, sagen</span>.</p>
<p>Phrases with dative: <span class="de">Mir ist schlecht / kalt / schwindelig. Es tut mir leid. Das tut mir weh.</span></p>`,
 merke:"Nouns: Dat. before Akk. Pronouns first. Two pronouns: Akk. before Dat. — „Ich gebe es ihm.“",
 ex:[{type:"mc",q:"Wo ist Herr Braun? Ich suche ___.",o:["ihm","ihn","er"],a:1,why:"suchen + accusative → ihn."},
 {type:"mc",q:"Frau Weber, ich verschreibe ___ ein Antibiotikum.",o:["Sie","Ihnen","Ihr"],a:1,why:"verschreiben: to whom → dative, polite: Ihnen."},
 {type:"mc",q:"Der Befund? Ich schicke ___ morgen.",o:["Ihnen ihn","ihn Ihnen","ihm Sie"],a:1,why:"Two pronouns: accusative (ihn) before dative (Ihnen)."},
 {type:"mc",q:"___ ist schwindelig.",o:["Ich","Mich","Mir"],a:2,why:"Feelings of this kind use the dative: Mir ist schwindelig."},
 {type:"mc",q:"Ich erkläre ___ die Untersuchung.",o:["der Patientin","die Patientin","ihn"],a:0,why:"Dative noun before accusative noun: der Patientin die Untersuchung."},
 {type:"gap",q:"Das ist meine Kollegin. Kennen Sie ___?",a:"sie",alt:[],why:"kennen + accusative, feminine → sie."},
 {type:"gap",q:"Können Sie ___ helfen? (me)",a:"mir",alt:[],why:"helfen + dative → mir."},
 {type:"order",words:["Ich","gebe","es","Ihnen","sofort","."],a:"Ich gebe es Ihnen sofort.",why:"Two pronouns: accusative (es) first, then dative (Ihnen)."},
 {type:"fix",q:"Ich gebe das Rezept ihm.",a:"Ich gebe ihm das Rezept.",err:"das Rezept ihm",why:"A pronoun comes before a noun."},
 {type:"transform",q:"Ersetze beide Objekte durch Pronomen: Ich zeige dem Arzt den Befund.",a:"Ich zeige ihn ihm.",alt:[],why:"den Befund → ihn, dem Arzt → ihm; accusative first."}]}
];

// ===== Mephisto 12.8 · Grammatik komplett, Teil 2 (A2–B1)
GRAMMAR3.push(
{id:"g40",level:"A2",week:7,title:"Erste Nebensätze: weil, dass, wenn, ob",sub:"The verb goes to the end — the most German rule of all",
 body:`<p>In a subordinate clause the conjugated <b>verb goes to the end</b>. A comma always separates the clauses.</p>
<p><span class="de">Ich bleibe zu Hause, <b>weil</b> ich krank <b>bin</b>.</span> (because)<br><span class="de">Ich glaube, <b>dass</b> er Fieber <b>hat</b>.</span> (that)<br><span class="de"><b>Wenn</b> Sie Schmerzen <b>haben</b>, klingeln Sie bitte.</span> (if / whenever)<br><span class="de">Ich weiß nicht, <b>ob</b> sie allergisch <b>ist</b>.</span> (whether)</p>
<p><b>Two verbs:</b> the conjugated one is last. <span class="de">…, weil ich nicht schlafen <b>kann</b>. …, dass er operiert <b>wurde</b>. …, weil sie gestern gestürzt <b>ist</b>.</span></p>
<p><b>Separable verbs</b> join again: <span class="de">…, wenn der Arzt <b>anruft</b>.</span></p>
<p><b>Subordinate clause first</b> → it counts as position 1, so the main verb follows the comma directly: <span class="de"><b>Wenn</b> ich Zeit <b>habe</b>, <b>komme</b> ich.</span> Verb, comma, verb.</p>
<p><b>ob or wenn?</b> If you can say "whether" → <span class="de">ob</span>. <b>weil or denn?</b> Same meaning; <span class="de">denn</span> keeps normal word order.</p>
<p>Indirect questions work the same way: <span class="de">Wissen Sie, <b>wo</b> die Notaufnahme <b>ist</b>? Können Sie mir sagen, <b>wann</b> der Arzt <b>kommt</b>?</span></p>`,
 merke:"weil, dass, wenn, ob → verb last. Clause first → verb, comma, verb.",
 ex:[{type:"mc",q:"Ich komme nicht, weil ___",o:["ich bin krank.","ich krank bin.","bin ich krank."],a:1,why:"weil sends the verb to the end."},
 {type:"mc",q:"Ich weiß nicht, ___ er Diabetes hat.",o:["wenn","ob","dass"],a:1,why:"'whether' → ob."},
 {type:"mc",q:"Wenn Sie Fieber haben, ___",o:["Sie rufen an.","rufen Sie an.","Sie anrufen."],a:1,why:"The wenn-clause is position 1, so the verb comes right after the comma."},
 {type:"mc",q:"Er sagt, dass er nicht ___",o:["kann schlafen.","schlafen kann.","schlafen können."],a:1,why:"Conjugated verb (kann) last, infinitive before it."},
 {type:"mc",q:"Können Sie mir sagen, wo ___?",o:["ist die Toilette","die Toilette ist","die Toilette sein"],a:1,why:"Indirect question: verb at the end."},
 {type:"gap",q:"Ich glaube, ___ das Bein gebrochen ist.",a:"dass",alt:[],why:"dass = that."},
 {type:"gap",q:"Sie kommt nicht, weil sie keine Zeit ___. (haben)",a:"hat",alt:[],why:"Verb at the end, conjugated: sie hat."},
 {type:"order",words:["Ich","bleibe","hier",",","weil","ich","Dienst","habe","."],a:"Ich bleibe hier, weil ich Dienst habe.",why:"Comma, weil, … verb last."},
 {type:"fix",q:"Ich nehme das nicht, weil ich bin allergisch.",a:"Ich nehme das nicht, weil ich allergisch bin.",err:"bin allergisch",why:"After weil the verb goes to the end."},
 {type:"transform",q:"Verbinde mit „weil“: Er bleibt im Bett. Er hat Fieber.",a:"Er bleibt im Bett, weil er Fieber hat.",alt:["Weil er Fieber hat, bleibt er im Bett."],why:"weil + verb last."}]},
{id:"g41",level:"A2",week:8,title:"Präteritum: war, hatte und die Modalverben",sub:"The past forms you need before any others",
 body:`<p>In spoken German the past is the <b>Perfekt</b> — except for <b>sein, haben</b> and the <b>modal verbs</b>, which use the <b>Präteritum</b> almost always.</p>
<table><tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th><th>wollen</th></tr>
<tr><td>ich</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td><td>wollte</td></tr><tr><td>du</td><td>warst</td><td>hattest</td><td>konntest</td><td>musstest</td><td>wolltest</td></tr><tr><td>er/sie/es</td><td><b class="g">war</b></td><td><b class="g">hatte</b></td><td>konnte</td><td>musste</td><td>wollte</td></tr><tr><td>wir</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td><td>wollten</td></tr><tr><td>ihr</td><td>wart</td><td>hattet</td><td>konntet</td><td>musstet</td><td>wolltet</td></tr><tr><td>sie/Sie</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td><td>wollten</td></tr></table>
<p><b>ich = er</b>: no ending in the first and third person. Modal verbs <b>lose the umlaut</b>: <span class="de">können → konnte, müssen → musste, dürfen → durfte, mögen → mochte</span>; <span class="de">sollen → sollte, wollen → wollte</span>.</p>
<p><span class="de">Wo <b>waren</b> Sie gestern? <b>Hatten</b> Sie das schon einmal? Ich <b>konnte</b> nicht schlafen. Er <b>musste</b> operiert werden.</span></p>
<p><b>Trap:</b> <span class="de">Ich <b>wollte</b> …</span> = I wanted. <span class="de">Ich <b>möchte</b> …</span> = I would like (now). The past of <span class="de">möchte</span> is <span class="de">wollte</span>.</p>
<p><span class="de">konnte</span> (was able to) is not <span class="de">könnte</span> (could, would be able to) — the two dots change the meaning.</p>`,
 merke:"war, hatte, konnte, musste, wollte: ich = er, no umlaut.",
 ex:[{type:"mc",q:"Gestern ___ ich krank.",o:["bin","war","hatte"],a:1,why:"Past of sein → war."},
 {type:"mc",q:"___ Sie schon einmal eine Operation?",o:["Hatten","Waren","Hattet"],a:0,why:"haben → hatten (Sie)."},
 {type:"mc",q:"Ich ___ die ganze Nacht nicht schlafen.",o:["könnte","konnte","kann"],a:1,why:"Past: konnte (no umlaut). könnte = could (hypothetical)."},
 {type:"mc",q:"Past of „Ich möchte einen Termin.“",o:["Ich möchtete einen Termin.","Ich wollte einen Termin.","Ich mochte einen Termin."],a:1,why:"möchte has no past of its own; use wollte."},
 {type:"mc",q:"Er ___ gestern nicht arbeiten. (was not allowed to)",o:["durfte","dürfte","darf"],a:0,why:"dürfen → durfte."},
 {type:"gap",q:"Wo ___ du gestern Abend? (sein)",a:"warst",alt:[],why:"du warst."},
 {type:"gap",q:"Wir ___ lange warten. (müssen, past)",a:"mussten",alt:[],why:"wir mussten."},
 {type:"order",words:["Als","Kind","hatte","ich","oft","Asthma","."],a:"Als Kind hatte ich oft Asthma.",why:"Time phrase first, verb second."},
 {type:"fix",q:"Ich musste gestern arbeiten und könnte nicht kommen.",a:"Ich musste gestern arbeiten und konnte nicht kommen.",err:"könnte",why:"The simple past has no umlaut: konnte."},
 {type:"transform",q:"Ins Präteritum: Ich habe Kopfschmerzen.",a:"Ich hatte Kopfschmerzen.",alt:[],why:"haben → hatte."}]},
{id:"g42",level:"A2",week:9,title:"Infinitiv mit zu · um … zu · ohne … zu",sub:"When zu appears, where it stands, and how to say 'in order to'",
 body:`<p>After many verbs, nouns and adjectives the second verb comes at the end with <b>zu</b>:</p>
<p><span class="de">Ich versuche, mehr <b>zu trinken</b>. Vergessen Sie nicht, die Tablette <b>zu nehmen</b>. Es ist wichtig, viel <b>zu schlafen</b>. Ich habe keine Lust <b>zu kochen</b>.</span></p>
<p><b>No zu</b> after modal verbs and after <span class="de">werden, lassen, sehen, hören, gehen, bleiben</span>: <span class="de">Ich muss <b>gehen</b>. Ich gehe <b>einkaufen</b>.</span></p>
<p><b>Separable verbs:</b> zu goes in the middle, one word: <span class="de">an<b>zu</b>rufen, auf<b>zu</b>stehen, ein<b>zu</b>nehmen</span>. <span class="de">Bitte vergessen Sie nicht anzurufen.</span></p>
<table><tr><th>um … zu</th><td>in order to (purpose)</td><td class="de">Ich bin hier, <b>um</b> Deutsch <b>zu</b> lernen.</td></tr><tr><th>ohne … zu</th><td>without …ing</td><td class="de">Er ging, <b>ohne</b> ein Wort <b>zu</b> sagen.</td></tr><tr><th>(an)statt … zu</th><td>instead of …ing</td><td class="de"><b>Statt zu</b> schlafen, lernt er.</td></tr></table>
<p>These only work when both parts have the <b>same subject</b>. With different subjects use <span class="de">damit</span>: <span class="de">Ich spreche langsam, <b>damit</b> Sie mich verstehen.</span></p>
<p><b>Trap:</b> purpose is never <span class="de">für zu</span>. "to learn" = <span class="de">um zu lernen</span>.</p>`,
 merke:"zu + infinitive at the end. Purpose: um … zu (same subject) or damit (different subject).",
 ex:[{type:"mc",q:"Ich versuche, weniger ___",o:["rauchen.","zu rauchen.","zu geraucht."],a:1,why:"versuchen + zu + infinitive."},
 {type:"mc",q:"Ich muss heute lange ___",o:["zu arbeiten.","arbeiten.","gearbeitet."],a:1,why:"No zu after a modal verb."},
 {type:"mc",q:"Vergessen Sie nicht, mich ___",o:["zu anrufen.","anzurufen.","anrufen zu."],a:1,why:"Separable verb: zu goes between prefix and verb."},
 {type:"mc",q:"Ich lerne Deutsch, ___ in Heidelberg ___ arbeiten.",o:["für … zu","um … zu","damit … zu"],a:1,why:"Purpose with the same subject → um … zu."},
 {type:"mc",q:"Ich erkläre es langsam, ___ der Patient es versteht.",o:["um","damit","ohne"],a:1,why:"Different subjects (ich / der Patient) → damit."},
 {type:"gap",q:"Es ist wichtig, die Hände ___ waschen.",a:"zu",alt:[],why:"Es ist wichtig, … zu + infinitive."},
 {type:"gap",q:"Er verließ die Klinik, ___ sich abzumelden. (without)",a:"ohne",alt:[],why:"ohne … zu = without doing."},
 {type:"order",words:["Ich","habe","keine","Zeit",",","zu","frühstücken","."],a:"Ich habe keine Zeit, zu frühstücken.",why:"zu + infinitive at the end."},
 {type:"fix",q:"Ich bin hier für zu arbeiten.",a:"Ich bin hier, um zu arbeiten.",err:"für zu",why:"Purpose: um … zu, never für zu."},
 {type:"transform",q:"Mit „um … zu“: Ich gehe in die Apotheke. Ich will Tabletten kaufen.",a:"Ich gehe in die Apotheke, um Tabletten zu kaufen.",alt:["Um Tabletten zu kaufen, gehe ich in die Apotheke."],why:"um + … + zu + infinitive; wollen disappears."}]},
{id:"g43",level:"A2",week:10,title:"dieser, jeder, alle · man, jemand, niemand, etwas, nichts",sub:"Pointing words and words for nobody in particular",
 body:`<p><b>dieser</b> (this), <b>jeder</b> (every), <b>welcher</b> (which) take the endings of <i>der/die/das</i>:</p>
<table><tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr><tr><td>Nom.</td><td>dies<b>er</b></td><td>dies<b>e</b></td><td>dies<b>es</b></td><td>dies<b>e</b></td></tr><tr><td>Akk.</td><td>dies<b>en</b></td><td>diese</td><td>dieses</td><td>diese</td></tr><tr><td>Dat.</td><td>dies<b>em</b></td><td>dies<b>er</b></td><td>dies<b>em</b></td><td>dies<b>en</b></td></tr></table>
<p><span class="de">Nehmen Sie <b>diese</b> Tablette <b>jeden</b> Morgen. <b>Welches</b> Bein tut weh?</span> <b>jeder</b> has no plural — use <b>alle</b>: <span class="de">alle Patienten</span>.</p>
<p><b>man</b> = one / people / you in general. Verb in the third person singular: <span class="de">Hier darf <b>man</b> nicht rauchen. Wie sagt <b>man</b> das auf Deutsch?</span> Not the same as <span class="de">der Mann</span>.</p>
<table><tr><th>jemand</th><td>somebody</td><th>niemand</th><td>nobody</td></tr><tr><th>etwas</th><td>something</td><th>nichts</th><td>nothing</td></tr><tr><th>alles</th><td>everything</td><th>viel / wenig</th><td>much / little</td></tr></table>
<p><span class="de">Ist <b>jemand</b> bei Ihnen zu Hause? — Nein, <b>niemand</b>. Haben Sie heute <b>etwas</b> gegessen? — Nein, <b>nichts</b>.</span></p>
<p><b>etwas / nichts + adjective</b> = capital and -es: <span class="de">etwas Neu<b>es</b>, nichts Besonder<b>es</b>, etwas Wichtig<b>es</b></span>.</p>
<p><b>Trap:</b> one negative is enough: <span class="de">Ich habe <b>nichts</b> gesehen.</span> — not <i>nicht nichts</i>.</p>`,
 merke:"dieser/jeder/welcher decline like der. man + er-form. etwas Neues, nichts Besonderes.",
 ex:[{type:"mc",q:"Nehmen Sie die Tablette ___ Abend.",o:["jeder","jeden","jedes"],a:1,why:"Time expressions without preposition are accusative: der Abend → jeden Abend."},
 {type:"mc",q:"Hier ___ man nicht parken.",o:["darf","dürfen","darfst"],a:0,why:"man takes the er-form."},
 {type:"mc",q:"Haben Sie heute ___ gegessen? — Nein, nichts.",o:["jemand","etwas","alle"],a:1,why:"etwas = something / anything."},
 {type:"mc",q:"Gibt es etwas ___?",o:["neu","Neues","neue"],a:1,why:"After etwas the adjective is a capitalised noun in -es."},
 {type:"mc",q:"___ Arm tut weh, der rechte oder der linke?",o:["Welcher","Welche","Welches"],a:0,why:"der Arm, nominative → welcher."},
 {type:"gap",q:"Ist ___ zu Hause, der Ihnen helfen kann? (somebody)",a:"jemand",alt:[],why:"jemand = somebody."},
 {type:"gap",q:"Mit ___ Medikament habe ich Probleme. (this)",a:"diesem",alt:[],why:"mit + dative, das Medikament → diesem."},
 {type:"order",words:["In","Deutschland","trinkt","man","viel","Kaffee","."],a:"In Deutschland trinkt man viel Kaffee.",why:"Place first, verb second, then man."},
 {type:"fix",q:"Ich habe nicht nichts gehört.",a:"Ich habe nichts gehört.",err:"nicht nichts",why:"German uses a single negative."},
 {type:"transform",q:"In den Plural: Jeder Patient bekommt ein Armband.",a:"Alle Patienten bekommen ein Armband.",alt:[],why:"jeder has no plural → alle; verb plural."}]},
{id:"g44",level:"A2",week:11,title:"Die n-Deklination",sub:"der Patient, den Patienten, dem Patienten — the nouns that grow an -n",
 body:`<p>A group of <b>masculine</b> nouns adds <b>-(e)n in every case except the nominative singular</b>. Many of them are people — and you will say them a hundred times a day.</p>
<table><tr><th>Nom.</th><td>der Patient</td><td>der Kollege</td><td>der Herr</td></tr><tr><th>Akk.</th><td>den Patient<b>en</b></td><td>den Kolleg<b>en</b></td><td>den Herr<b>n</b></td></tr><tr><th>Dat.</th><td>dem Patient<b>en</b></td><td>dem Kolleg<b>en</b></td><td>dem Herr<b>n</b></td></tr><tr><th>Gen.</th><td>des Patient<b>en</b></td><td>des Kolleg<b>en</b></td><td>des Herr<b>n</b></td></tr></table>
<p><b>Who belongs?</b></p>
<ul><li>masculine nouns ending in <b>-e</b>: <span class="de">der Kollege, der Junge, der Kunde, der Zeuge, der Experte, der Neffe, der Löwe</span></li>
<li>foreign endings <b>-ent, -ant, -ist, -at, -oge, -and</b>: <span class="de">der Patient, der Student, der Assistent, der Praktikant, der Spezialist, der Internist, der Kardiologe, der Soldat, der Doktorand</span></li>
<li>a few short ones: <span class="de">der Mensch, der Herr, der Nachbar, der Bauer, der Held</span></li></ul>
<p><span class="de">Ich untersuche <b>den Patienten</b>. Ich spreche mit <b>Herrn</b> Weber. Fragen Sie <b>den Kollegen</b>.</span> On envelopes and in letter headings: <span class="de"><b>Herrn</b> Dr. Müller</span>.</p>
<p>Special: <span class="de">der Name → den Namen, dem Namen, des Name<b>ns</b></span> (also <span class="de">der Gedanke, der Buchstabe, das Herz → dem Herzen, des Herzens</span>).</p>
<p>Not n-declension: <span class="de">der Arzt, der Doktor, der Professor</span> (den Arzt, dem Professor).</p>`,
 merke:"der Patient → den/dem/des Patienten. Herr → Herrn. Only the nominative singular is bare.",
 ex:[{type:"mc",q:"Ich stelle Ihnen ___ Weber vor.",o:["Herr","Herrn","Herren"],a:1,why:"Accusative of Herr → Herrn."},
 {type:"mc",q:"Der Arzt untersucht ___.",o:["den Patient","den Patienten","dem Patient"],a:1,why:"Accusative: den Patienten."},
 {type:"mc",q:"Ich spreche mit ___.",o:["dem Kollege","dem Kollegen","den Kollege"],a:1,why:"mit + dative: dem Kollegen."},
 {type:"mc",q:"Which noun is NOT n-declension?",o:["der Student","der Arzt","der Nachbar"],a:1,why:"der Arzt declines normally: den Arzt, dem Arzt."},
 {type:"mc",q:"Wie ist der Name ___?",o:["des Patient","des Patienten","des Patients"],a:1,why:"Genitive: des Patienten (no -s)."},
 {type:"gap",q:"Wir rufen den ___ an. (der Kardiologe)",a:"Kardiologen",alt:[],why:"-oge nouns are n-declension."},
 {type:"gap",q:"Bitte buchstabieren Sie Ihren ___. (der Name)",a:"Namen",alt:[],why:"der Name → den Namen."},
 {type:"order",words:["Ich","habe","den","Patienten","schon","aufgenommen","."],a:"Ich habe den Patienten schon aufgenommen.",why:"Accusative: den Patienten."},
 {type:"fix",q:"Ich habe mit dem Student gesprochen.",a:"Ich habe mit dem Studenten gesprochen.",err:"Student",why:"-ent nouns add -en in the dative."},
 {type:"transform",q:"Setze in den Akkusativ: Das ist der Nachbar. → Ich kenne …",a:"Ich kenne den Nachbarn.",alt:[],why:"der Nachbar → den Nachbarn."}]},
{id:"g45",level:"A2",week:12,title:"Die Reihenfolge im Satz: TeKaMoLo",sub:"When, why, how, where — the order inside the sentence",
 body:`<p>Between the verb in position 2 and the verb part at the end lies the <b>Mittelfeld</b>. Information there usually follows <b>Te-Ka-Mo-Lo</b>:</p>
<table><tr><th>Te</th><td>temporal · when?</td><td class="de">heute</td></tr><tr><th>Ka</th><td>kausal · why?</td><td class="de">wegen der Schmerzen</td></tr><tr><th>Mo</th><td>modal · how?</td><td class="de">mit dem Taxi</td></tr><tr><th>Lo</th><td>lokal · where (to)?</td><td class="de">in die Klinik</td></tr></table>
<p><span class="de">Ich bin <b>heute wegen der Schmerzen mit dem Taxi in die Klinik</b> gefahren.</span></p>
<p><b>English order is the opposite</b> (place before time): "I went to the clinic today." German: <span class="de">Ich bin <b>heute in die Klinik</b> gegangen.</span> <b>Time before place.</b></p>
<p><b>Position 1 is free:</b> anything can go first for emphasis, and then the <b>subject jumps behind the verb</b>: <span class="de"><b>Heute</b> fahre <b>ich</b> in die Klinik. <b>In die Klinik</b> fahre <b>ich</b> heute.</span></p>
<p><b>Short before long, known before new:</b> pronouns come early, right after the verb or subject: <span class="de">Ich habe <b>es ihm gestern</b> gesagt.</span></p>
<p><b>nicht</b> comes after time and objects but before manner and place: <span class="de">Ich fahre heute <b>nicht</b> mit dem Bus.</span></p>`,
 merke:"Time before manner before place. Whatever stands first, the verb stays second.",
 ex:[{type:"mc",q:"Choose the natural order:",o:["Ich fahre nach Heidelberg morgen.","Ich fahre morgen nach Heidelberg.","Ich morgen fahre nach Heidelberg."],a:1,why:"Time (morgen) before place (nach Heidelberg)."},
 {type:"mc",q:"Morgen ___ zum Arzt.",o:["ich gehe","gehe ich","ich gehen"],a:1,why:"Time in position 1 → verb second, subject after it."},
 {type:"mc",q:"Er kommt ___ .",o:["mit dem Auto um acht in die Klinik","um acht mit dem Auto in die Klinik","in die Klinik mit dem Auto um acht"],a:1,why:"Te (um acht) – Mo (mit dem Auto) – Lo (in die Klinik)."},
 {type:"mc",q:"Ich bin ___ gestürzt.",o:["zu Hause gestern","gestern zu Hause","gestern in zu Hause"],a:1,why:"Time before place."},
 {type:"mc",q:"Ich habe ___ gesagt.",o:["gestern es ihm","es ihm gestern","ihm gestern es"],a:1,why:"Pronouns come first, accusative before dative, then the time."},
 {type:"gap",q:"Heute ___ ich Nachtdienst. (haben)",a:"habe",alt:[],why:"Verb in position 2 after heute."},
 {type:"mc",q:"Ich arbeite ___.",o:["in Heidelberg seit Januar","seit Januar in Heidelberg","seit in Heidelberg Januar"],a:1,why:"Time (seit Januar) before place (in Heidelberg)."},
 {type:"order",words:["Ich","bin","gestern","mit","dem","Zug","nach","Berlin","gefahren","."],a:"Ich bin gestern mit dem Zug nach Berlin gefahren.",why:"Te – Mo – Lo, participle at the end."},
 {type:"fix",q:"Ich fahre in die Klinik mit dem Bus heute.",a:"Ich fahre heute mit dem Bus in die Klinik.",err:"in die Klinik mit dem Bus heute",why:"Time (heute), manner (mit dem Bus), place (in die Klinik)."},
 {type:"transform",q:"Beginne mit „Seit drei Tagen“: Ich habe seit drei Tagen Husten.",a:"Seit drei Tagen habe ich Husten.",alt:[],why:"The verb stays second; the subject moves behind it."}]},
{id:"g46",level:"B1",week:13,title:"Plusquamperfekt · als, wenn, wann · nachdem, bevor, während",sub:"The past before the past, and three words for 'when'",
 body:`<p><b>Plusquamperfekt</b> = <span class="de">hatte / war</span> + Partizip II. It tells what happened <b>before</b> another past event.</p>
<p><span class="de">Als der Notarzt kam, <b>hatte</b> der Patient schon das Bewusstsein <b>verloren</b>. Sie <b>war</b> schon <b>gegangen</b>, als ich ankam.</span></p>
<p><b>nachdem</b> needs a time step: <span class="de">Nachdem er die Tablette <b>genommen hatte</b>, <b>ging</b> es ihm besser.</span> (Plusquamperfekt → Präteritum/Perfekt). In the present: <span class="de">Nachdem ich gegessen <b>habe</b>, <b>nehme</b> ich die Tablette.</span></p>
<table><tr><th>als</th><td>when — <b>once</b> in the past</td><td class="de">Als ich ein Kind war, …</td></tr><tr><th>wenn</th><td>whenever (repeated) · when/if in present and future</td><td class="de">Immer wenn ich huste, … / Wenn Sie kommen, …</td></tr><tr><th>wann</th><td>when? — only in questions (direct or indirect)</td><td class="de">Wann beginnt es? Ich weiß nicht, wann …</td></tr></table>
<table><tr><th>bevor</th><td>before</td><td class="de">Bevor Sie gehen, unterschreiben Sie bitte.</td></tr><tr><th>während</th><td>while</td><td class="de">Während er schlief, fiel der Blutdruck.</td></tr><tr><th>seit(dem)</th><td>since</td><td class="de">Seit ich hier wohne, …</td></tr><tr><th>bis</th><td>until</td><td class="de">Warten Sie, bis ich zurückkomme.</td></tr><tr><th>sobald</th><td>as soon as</td><td class="de">Sobald das Labor da ist, rufe ich an.</td></tr></table>
<p><b>Trap:</b> <span class="de">bevor</span> and <span class="de">nachdem</span> join clauses; <span class="de">vor</span> and <span class="de">nach</span> stand before nouns: <span class="de"><b>vor</b> dem Essen · <b>bevor</b> Sie essen</span>.</p>`,
 merke:"als = once in the past. wenn = repeated or future. wann = question. nachdem + one tense earlier.",
 ex:[{type:"mc",q:"___ ich gestern nach Hause kam, war ich sehr müde.",o:["Wenn","Als","Wann"],a:1,why:"One event in the past → als."},
 {type:"mc",q:"Immer ___ ich Treppen steige, bekomme ich Luftnot.",o:["als","wenn","wann"],a:1,why:"Repeated → wenn."},
 {type:"mc",q:"Ich weiß nicht, ___ der Arzt kommt.",o:["als","wenn","wann"],a:2,why:"Indirect question about time → wann."},
 {type:"mc",q:"Nachdem er gegessen ___, ging er spazieren.",o:["hat","hatte","war"],a:1,why:"nachdem + Plusquamperfekt before a Präteritum."},
 {type:"mc",q:"Als wir ankamen, ___ der Zug schon abgefahren.",o:["hatte","war","ist"],a:1,why:"abfahren forms its perfect with sein → war abgefahren."},
 {type:"gap",q:"___ Sie die Tablette nehmen, essen Sie bitte etwas. (before)",a:"Bevor",alt:["bevor"],why:"bevor joins clauses; vor stands before nouns."},
 {type:"gap",q:"Warten Sie bitte, ___ ich Sie aufrufe. (until)",a:"bis",alt:[],why:"bis = until."},
 {type:"order",words:["Als","ich","klein","war",",","hatte","ich","Asthma","."],a:"Als ich klein war, hatte ich Asthma.",why:"als-clause first, then verb – subject."},
 {type:"fix",q:"Wenn ich zehn Jahre alt war, bin ich vom Baum gefallen.",a:"Als ich zehn Jahre alt war, bin ich vom Baum gefallen.",err:"Wenn",why:"A single time in the past needs als."},
 {type:"transform",q:"Ins Plusquamperfekt: Er hat die Tablette genommen.",a:"Er hatte die Tablette genommen.",alt:[],why:"hat → hatte."}]},
{id:"g47",level:"B1",week:14,title:"lassen · werden · brauchen",sub:"Three small verbs with many jobs",
 body:`<p><b>lassen</b> (lässt, ließ, hat gelassen) behaves like a modal verb: second verb at the end, <b>no zu</b>.</p>
<table><tr><th>have something done</th><td class="de">Ich <b>lasse</b> mein Blut <b>untersuchen</b>. Wir lassen ein Röntgenbild machen.</td></tr><tr><th>allow, let</th><td class="de"><b>Lassen</b> Sie mich bitte <b>ausreden</b>. Der Arzt lässt ihn nach Hause gehen.</td></tr><tr><th>leave</th><td class="de">Lassen Sie den Arm locker. Ich habe den Schlüssel zu Hause gelassen.</td></tr><tr><th>sich lassen = can be done</th><td class="de">Das <b>lässt sich</b> leicht <b>erklären</b>. Die Tür lässt sich nicht öffnen.</td></tr></table>
<p><b>werden</b> (wird, wurde, ist geworden) has three jobs:</p>
<table><tr><th>become (+ noun/adjective)</th><td class="de">Er <b>wird</b> Arzt. Mir <b>wird</b> schlecht. Es wird dunkel.</td></tr><tr><th>future (+ infinitive)</th><td class="de">Der Arzt <b>wird</b> gleich <b>kommen</b>.</td></tr><tr><th>passive (+ Partizip II)</th><td class="de">Sie <b>werden</b> morgen <b>operiert</b>.</td></tr></table>
<p><b>brauchen</b> = need (+ accusative): <span class="de">Ich brauche einen Termin.</span> With <b>nicht/kein/nur + zu</b> it replaces <span class="de">müssen</span>: <span class="de">Sie <b>brauchen nicht zu</b> kommen</span> = you don't have to come. <span class="de">Sie brauchen <b>nur zu</b> klingeln.</span></p>
<p><b>Trap:</b> <span class="de">nicht müssen</span> = don't have to. <span class="de">nicht dürfen</span> = must not. <span class="de">Sie müssen nicht aufstehen</span> (no need) vs. <span class="de">Sie dürfen nicht aufstehen</span> (forbidden).</p>`,
 merke:"lassen + infinitive (no zu). werden = become / will / is being. nicht brauchen zu = nicht müssen.",
 ex:[{type:"mc",q:"Ich ___ mir morgen Blut abnehmen.",o:["lasse","werde lassen zu","lässt"],a:0,why:"ich lasse + infinitive at the end."},
 {type:"mc",q:"„Sie werden morgen operiert.“ — werden is here:",o:["future","passive","'become'"],a:1,why:"werden + Partizip II (operiert) = passive."},
 {type:"mc",q:"Mir ___ schwindelig.",o:["wird","werde","lässt"],a:0,why:"werden = become: Mir wird schwindelig."},
 {type:"mc",q:"You must not get up. →",o:["Sie müssen nicht aufstehen.","Sie dürfen nicht aufstehen.","Sie brauchen nicht aufzustehen."],a:1,why:"Prohibition = nicht dürfen. nicht müssen = no need."},
 {type:"mc",q:"Das Fenster ___ nicht öffnen.",o:["lässt sich","lässt","wird sich"],a:0,why:"sich lassen + infinitive = can (not) be done."},
 {type:"gap",q:"Sie brauchen morgen nicht ___ kommen.",a:"zu",alt:[],why:"nicht brauchen + zu + infinitive."},
 {type:"gap",q:"Er ___ gestern entlassen. (werden, past)",a:"wurde",alt:[],why:"Passive in the past: wurde + Partizip II."},
 {type:"order",words:["Wir","lassen","ein","EKG","schreiben","."],a:"Wir lassen ein EKG schreiben.",why:"lassen in position 2, infinitive at the end, no zu."},
 {type:"fix",q:"Ich lasse meine Augen zu untersuchen.",a:"Ich lasse meine Augen untersuchen.",err:"zu untersuchen",why:"No zu after lassen."},
 {type:"transform",q:"Mit „brauchen“: Sie müssen nicht warten.",a:"Sie brauchen nicht zu warten.",alt:[],why:"nicht müssen = nicht brauchen zu."}]},
{id:"g48",level:"B1",week:15,title:"Präpositionen mit Genitiv",sub:"wegen, trotz, während, statt, aufgrund, innerhalb — the language of letters and reports",
 body:`<p>These prepositions take the <b>genitive</b>. You hear them in every handover and read them in every Arztbrief.</p>
<table><tr><th>wegen</th><td>because of</td><td class="de">wegen <b>des</b> Fieber<b>s</b>, wegen <b>der</b> Schmerzen</td></tr><tr><th>trotz</th><td>in spite of</td><td class="de">trotz <b>der</b> Therapie</td></tr><tr><th>während</th><td>during</td><td class="de">während <b>der</b> Operation</td></tr><tr><th>(an)statt</th><td>instead of</td><td class="de">statt <b>eines</b> Antibiotikum<b>s</b></td></tr><tr><th>aufgrund</th><td>on the basis of, due to</td><td class="de">aufgrund <b>des</b> Befund<b>es</b></td></tr><tr><th>innerhalb / außerhalb</th><td>within / outside</td><td class="de">innerhalb <b>eines</b> Tages, außerhalb <b>der</b> Sprechzeiten</td></tr><tr><th>infolge</th><td>as a result of</td><td class="de">infolge <b>eines</b> Sturzes</td></tr><tr><th>mithilfe</th><td>with the help of</td><td class="de">mithilfe <b>eines</b> Katheters</td></tr><tr><th>bezüglich / hinsichtlich</th><td>regarding</td><td class="de">bezüglich <b>Ihres</b> Schreibens</td></tr></table>
<p><b>Genitive forms:</b> masc./neut. <span class="de">des / eines + -(e)s</span> on the noun; feminine <span class="de">der / einer</span>, plural <span class="de">der</span>, noun unchanged. N-declension nouns take -en, not -s: <span class="de">wegen des Patient<b>en</b></span>.</p>
<p>In everyday speech you will hear <span class="de">wegen dem Wetter</span> (dative). Write the genitive.</p>
<p><b>Preposition → conjunction → adverb:</b></p>
<table><tr><td class="de">wegen + Gen.</td><td class="de">weil …</td><td class="de">deshalb</td></tr><tr><td class="de">trotz + Gen.</td><td class="de">obwohl …</td><td class="de">trotzdem</td></tr><tr><td class="de">während + Gen.</td><td class="de">während …</td><td class="de">währenddessen</td></tr></table>
<p><span class="de"><b>Trotz</b> der Schmerzen arbeitet er. = <b>Obwohl</b> er Schmerzen hat, arbeitet er. = Er hat Schmerzen, <b>trotzdem</b> arbeitet er.</span></p>`,
 merke:"wegen, trotz, während, statt, aufgrund + Genitiv: des …s / der.",
 ex:[{type:"mc",q:"Wegen ___ konnte er nicht schlafen.",o:["dem Husten","des Hustens","der Husten"],a:1,why:"wegen + genitive: der Husten → des Hustens."},
 {type:"mc",q:"___ der Schmerzen geht sie arbeiten.",o:["Wegen","Trotz","Statt"],a:1,why:"in spite of → trotz."},
 {type:"mc",q:"Während ___ ist der Blutdruck gefallen.",o:["die Operation","der Operation","dem Operation"],a:1,why:"während + genitive, feminine → der."},
 {type:"mc",q:"Er hat Fieber, ___ geht er zur Arbeit.",o:["trotz","obwohl","trotzdem"],a:2,why:"Adverb in position 1 before the verb → trotzdem."},
 {type:"mc",q:"___ er Fieber hat, geht er zur Arbeit.",o:["Trotz","Obwohl","Trotzdem"],a:1,why:"Conjunction with verb at the end → obwohl."},
 {type:"gap",q:"Die Aufnahme erfolgte aufgrund ___ Sturzes. (ein)",a:"eines",alt:[],why:"aufgrund + genitive, masculine → eines Sturzes."},
 {type:"gap",q:"Bitte melden Sie sich innerhalb ___ Woche. (eine)",a:"einer",alt:[],why:"innerhalb + genitive, feminine → einer."},
 {type:"order",words:["Trotz","der","Therapie","hat","er","noch","Schmerzen","."],a:"Trotz der Therapie hat er noch Schmerzen.",why:"Prepositional phrase first, then verb – subject."},
 {type:"fix",q:"Trotz er krank ist, arbeitet er.",a:"Obwohl er krank ist, arbeitet er.",err:"Trotz",why:"trotz stands before a noun; a clause needs obwohl."},
 {type:"transform",q:"Mit „wegen“: Er bleibt zu Hause, weil er eine Erkältung hat.",a:"Wegen einer Erkältung bleibt er zu Hause.",alt:["Er bleibt wegen einer Erkältung zu Hause.","Wegen der Erkältung bleibt er zu Hause.","Er bleibt wegen der Erkältung zu Hause.","Wegen seiner Erkältung bleibt er zu Hause.","Er bleibt wegen seiner Erkältung zu Hause."],why:"wegen + genitive: einer Erkältung."}]}
);

// ===== Mephisto 12.8 · Grammatik komplett, Teil 3 (B1–C1)
GRAMMAR3.push(
{id:"g49",level:"B1",week:16,title:"Das kleine Wort „es“",sub:"es gibt, es regnet, es tut weh — and the es that disappears",
 body:`<p><b>es</b> has four jobs.</p>
<table><tr><th>1 · Pronoun</th><td>for a neuter noun</td><td class="de">Das Kind weint. <b>Es</b> hat Fieber.</td></tr>
<tr><th>2 · Fixed subject</th><td>weather, time, feelings, fixed phrases — it can never be dropped</td><td class="de"><b>Es</b> regnet. <b>Es</b> ist spät. <b>Es</b> gibt keinen Befund. Wie geht <b>es</b> Ihnen? <b>Es</b> geht um … <b>Es</b> handelt sich um …</td></tr>
<tr><th>3 · Placeholder</th><td>fills position 1 and vanishes when something else stands there</td><td class="de"><b>Es</b> wurden drei Patienten aufgenommen. → Heute wurden drei Patienten aufgenommen.</td></tr>
<tr><th>4 · Pointer</th><td>announces a <i>dass</i>-clause or infinitive</td><td class="de"><b>Es</b> ist wichtig, dass Sie viel trinken. <b>Es</b> freut mich, Sie zu sehen.</td></tr></table>
<p><b>es gibt + accusative</b> = there is / there are: <span class="de">Es gibt <b>einen</b> Aufzug. Gibt es hier <b>einen</b> Arzt?</span> For "there is / there are" in general (existence), use <i>es gibt</i>. <i>Es ist / es sind</i> only works for what is present at a place right now: <span class="de">Es sind noch drei Patienten im Wartezimmer.</span></p>
<p><b>Feelings with dative</b> can drop es when the person comes first: <span class="de"><b>Es</b> ist mir kalt. → <b>Mir</b> ist kalt.</span> <span class="de">Mir ist schlecht. Mir ist schwindelig.</span></p>
<p>Clinical phrases: <span class="de">Es besteht der Verdacht auf … · Es zeigt sich … · Es kam zu einer Blutung · Es liegt kein Anhalt für … vor · Es handelt sich um einen 60-jährigen Patienten.</span></p>
<p><b>Trap:</b> as an object, es can never stand first: <span class="de">Ich weiß <b>es</b>.</span> but <span class="de"><b>Das</b> weiß ich.</span> (not <i>Es weiß ich</i>).</p>`,
 merke:"es gibt + Akkusativ. Placeholder-es disappears when position 1 is taken.",
 ex:[{type:"mc",q:"___ gibt hier keinen Aufzug.",o:["Das","Es","Er"],a:1,why:"es gibt = there is."},
 {type:"mc",q:"Es gibt ___ Arzt im Dorf.",o:["ein","einen","einem"],a:1,why:"es gibt + accusative: einen Arzt."},
 {type:"mc",q:"„Es wurden zwei Patienten verlegt.“ → Gestern ___",o:["es wurden zwei Patienten verlegt.","wurden zwei Patienten verlegt.","wurden es zwei Patienten verlegt."],a:1,why:"Placeholder-es disappears when another word takes position 1."},
 {type:"mc",q:"Mir ___ schlecht.",o:["bin","ist","es ist"],a:1,why:"Mir ist schlecht (es is dropped when mir comes first)."},
 {type:"mc",q:"I know it. — With emphasis on 'it' first:",o:["Es weiß ich.","Das weiß ich.","Es ich weiß."],a:1,why:"Object es cannot stand first; use das."},
 {type:"gap",q:"___ handelt sich um eine 45-jährige Patientin.",a:"Es",alt:["es"],why:"Fixed phrase: Es handelt sich um + accusative."},
 {type:"gap",q:"Wie geht ___ Ihnen heute?",a:"es",alt:[],why:"Wie geht es Ihnen?"},
 {type:"order",words:["Es","ist","wichtig",",","dass","Sie","viel","trinken","."],a:"Es ist wichtig, dass Sie viel trinken.",why:"es points forward to the dass-clause."},
 {type:"fix",q:"Es gibt ein Aufzug im Haus.",a:"Es gibt einen Aufzug im Haus.",err:"ein",why:"es gibt + accusative: der Aufzug → einen Aufzug."},
 {type:"transform",q:"Beginne mit „Mir“: Es ist mir schwindelig.",a:"Mir ist schwindelig.",alt:[],why:"es drops out when the dative stands first."}]},
{id:"g50",level:"B2",week:28,title:"Modalpartikeln: doch, ja, mal, halt, eben, denn, eigentlich, wohl",sub:"The little words that make German sound human",
 body:`<p>Modal particles carry no content — they carry <b>attitude</b>. They stand in the Mittelfeld, are normally unstressed, and cannot be translated one-to-one. Without them your German is correct and cold.</p>
<table><tr><th>mal</th><td>softens a request</td><td class="de">Zeigen Sie <b>mal</b> her. Machen Sie <b>mal</b> den Mund auf.</td></tr>
<tr><th>doch</th><td>friendly urging · reminder of something known · surprise</td><td class="de">Kommen Sie <b>doch</b> rein. Sie wissen <b>doch</b>, dass Sie nicht rauchen sollen. Das ist <b>doch</b> nicht normal!</td></tr>
<tr><th>ja</th><td>"as we both know" · surprise</td><td class="de">Sie haben <b>ja</b> Diabetes. Das ist <b>ja</b> furchtbar!</td></tr>
<tr><th>denn</th><td>makes a question friendly or interested (only in questions)</td><td class="de">Was ist <b>denn</b> passiert? Wie heißen Sie <b>denn</b>?</td></tr>
<tr><th>eigentlich</th><td>"by the way", "actually" — in questions casual, in statements a reservation</td><td class="de">Rauchen Sie <b>eigentlich</b>? <b>Eigentlich</b> wollte ich nach Hause.</td></tr>
<tr><th>halt / eben</th><td>resignation: "that's just how it is" (halt is southern, eben northern)</td><td class="de">Das ist <b>halt</b> so. Dann müssen wir <b>eben</b> warten.</td></tr>
<tr><th>wohl</th><td>assumption: probably</td><td class="de">Das ist <b>wohl</b> ein Infekt. Er hat es <b>wohl</b> vergessen.</td></tr>
<tr><th>schon</th><td>reassurance · limited agreement</td><td class="de">Das wird <b>schon</b> wieder. Das stimmt <b>schon</b>, aber …</td></tr>
<tr><th>bloß / nur</th><td>warning · wish</td><td class="de">Stehen Sie <b>bloß</b> nicht auf! Wenn ich <b>nur</b> schlafen könnte!</td></tr>
<tr><th>einfach</th><td>"simply"</td><td class="de">Ich kann <b>einfach</b> nicht mehr.</td></tr></table>
<p>They combine in a fixed order: <span class="de">Kommen Sie <b>doch mal</b> her. Das ist <b>ja wohl</b> ein Witz. Hören Sie <b>doch einfach mal</b> zu.</span></p>
<p>At the bedside: a bare imperative sounds like an order. <span class="de">Atmen Sie tief ein.</span> → <span class="de">Atmen Sie <b>mal</b> tief ein.</span></p>
<p>Do not confuse with the same words as real words: <span class="de">doch</span> (yes, on the contrary), <span class="de">ja</span> (yes), <span class="de">denn</span> (because), <span class="de">schon</span> (already), <span class="de">eben</span> (just now; flat).</p>`,
 merke:"mal softens, doch urges or reminds, ja = we both know, denn warms a question, halt/eben = that's life, wohl = probably.",
 ex:[{type:"mc",q:"Friendly to a patient: „Machen Sie ___ den Oberkörper frei.“",o:["mal","wohl","halt"],a:0,why:"mal softens a request."},
 {type:"mc",q:"„Was ist ___ passiert?“ (interested, friendly)",o:["ja","denn","eben"],a:1,why:"denn makes questions warmer."},
 {type:"mc",q:"„Der Bus ist weg. Dann gehen wir ___ zu Fuß.“",o:["eben","denn","ja"],a:0,why:"eben/halt = nothing to be done about it."},
 {type:"mc",q:"„Das ist ___ ein Virusinfekt.“ (probably)",o:["mal","wohl","doch"],a:1,why:"wohl marks an assumption."},
 {type:"mc",q:"„Sie nehmen ___ Marcumar, da müssen wir vorsichtig sein.“ (as we both know)",o:["ja","denn","bloß"],a:0,why:"ja signals shared knowledge."},
 {type:"gap",q:"Keine Sorge, das wird ___ wieder. (reassuring)",a:"schon",alt:[],why:"Das wird schon wieder = it will be all right."},
 {type:"gap",q:"Setzen Sie sich ___! (friendly urging, 'do sit down')",a:"doch",alt:["doch bitte","ruhig"],why:"doch in an imperative = friendly urging."},
 {type:"order",words:["Kommen","Sie","doch","mal","her","."],a:"Kommen Sie doch mal her.",why:"doch before mal; particles stand in the middle."},
 {type:"fix",q:"Was ist ja passiert?",a:"Was ist denn passiert?",err:"ja",why:"In questions the friendly particle is denn; ja does not occur in W-questions."},
 {type:"transform",q:"Freundlicher, mit „mal“: Zeigen Sie mir den Arm.",a:"Zeigen Sie mir mal den Arm.",alt:["Zeigen Sie mal den Arm.","Zeigen Sie mir doch mal den Arm.","Zeigen Sie mir bitte mal den Arm.","Zeigen Sie mir mal bitte den Arm."],why:"mal follows the pronoun."}]},
{id:"g51",level:"B2",week:30,title:"Subjektive Modalverben",sub:"müsste, dürfte, könnte, soll, will — how sure are you, and who says so?",
 body:`<p>Modal verbs also express <b>how certain</b> the speaker is, or that a claim comes from <b>someone else</b>. You need this for differential diagnoses and for reporting what a patient says.</p>
<p><b>How sure am I?</b></p>
<table><tr><th>muss</th><td>~ 95 %, logical conclusion</td><td class="de">Das <b>muss</b> ein Infarkt sein.</td></tr><tr><th>müsste</th><td>~ 90 %, if all is as expected</td><td class="de">Das Labor <b>müsste</b> gleich da sein.</td></tr><tr><th>dürfte</th><td>~ 75 %, probably</td><td class="de">Es <b>dürfte</b> sich um einen Infekt handeln.</td></tr><tr><th>kann / könnte</th><td>~ 50 % / less, possible</td><td class="de">Das <b>könnte</b> eine Embolie sein.</td></tr><tr><th>kann nicht</th><td>~ 0 %, impossible</td><td class="de">Das <b>kann nicht</b> stimmen.</td></tr></table>
<p><b>Who claims it?</b></p>
<table><tr><th>sollen</th><td>others say so (hearsay)</td><td class="de">Er <b>soll</b> gestürzt sein. (= Man sagt, dass er gestürzt ist.)</td></tr><tr><th>wollen</th><td>the person claims it about himself — and I doubt it</td><td class="de">Er <b>will</b> nichts getrunken haben. (= Er behauptet, nichts getrunken zu haben.)</td></tr></table>
<p><b>Past:</b> modal verb in the present + <b>Infinitiv Perfekt</b> (Partizip II + <span class="de">haben/sein</span>): <span class="de">Er <b>muss</b> gestürzt <b>sein</b>. Sie <b>dürfte</b> das Medikament vergessen <b>haben</b>.</span></p>
<p>Compare the ordinary meaning: <span class="de">Er <b>musste</b> gehen</span> (had to go) vs. <span class="de">Er <b>muss</b> gegangen sein</span> (he must have left).</p>
<p>The same without modal verbs: <span class="de">sicher, bestimmt, höchstwahrscheinlich, vermutlich, wahrscheinlich, vielleicht, möglicherweise, angeblich</span> (= sollen).</p>`,
 merke:"muss > müsste > dürfte > könnte. sollen = others say. wollen = he claims. Past: modal + Partizip + haben/sein.",
 ex:[{type:"mc",q:"„Vermutlich ist es ein Infekt.“ =",o:["Es dürfte ein Infekt sein.","Es soll ein Infekt sein.","Es will ein Infekt sein."],a:0,why:"vermutlich / wahrscheinlich → dürfte."},
 {type:"mc",q:"„Angeblich ist der Patient gestürzt.“ =",o:["Der Patient muss gestürzt sein.","Der Patient soll gestürzt sein.","Der Patient sollte stürzen."],a:1,why:"Hearsay → sollen + Infinitiv Perfekt."},
 {type:"mc",q:"„Er behauptet, keinen Alkohol getrunken zu haben.“ =",o:["Er will keinen Alkohol getrunken haben.","Er soll keinen Alkohol getrunken haben.","Er wollte keinen Alkohol trinken."],a:0,why:"A claim about oneself → wollen."},
 {type:"mc",q:"Most certain:",o:["Das könnte eine Fraktur sein.","Das dürfte eine Fraktur sein.","Das muss eine Fraktur sein."],a:2,why:"muss expresses near certainty."},
 {type:"mc",q:"He must have forgotten it. →",o:["Er musste es vergessen.","Er muss es vergessen haben.","Er hat es vergessen müssen."],a:1,why:"Assumption about the past: muss + Partizip II + haben."},
 {type:"gap",q:"Das ___ nicht sein — das EKG ist völlig normal. (impossible)",a:"kann",alt:[],why:"kann nicht = impossible."},
 {type:"gap",q:"Die Ergebnisse ___ in einer Stunde vorliegen. (should, if all goes as expected)",a:"müssten",alt:["dürften","sollten"],why:"müssten: expected with high probability."},
 {type:"order",words:["Die","Patientin","soll","Fieber","gehabt","haben","."],a:"Die Patientin soll Fieber gehabt haben.",why:"sollen + Partizip II + haben = it is said that she had."},
 {type:"fix",q:"Er muss gestern gestürzt haben.",a:"Er muss gestern gestürzt sein.",err:"haben",why:"stürzen forms its perfect with sein."},
 {type:"transform",q:"Mit „könnte“: Vielleicht ist es eine Lungenembolie.",a:"Es könnte eine Lungenembolie sein.",alt:["Das könnte eine Lungenembolie sein.","Es könnte sich um eine Lungenembolie handeln."],why:"vielleicht → könnte + sein."}]},
{id:"g52",level:"B2",week:32,title:"Funktionsverbgefüge",sub:"eine Entscheidung treffen, in Frage kommen — noun-verb pairs of formal German",
 body:`<p>Formal German loves a <b>noun + a pale verb</b> where everyday German uses one verb. The noun carries the meaning; the verb is fixed and must be learned with it. Exams (B2 writing, FSP) reward these.</p>
<table><tr><th>Funktionsverbgefüge</th><th>simple verb</th></tr>
<tr><td class="de">eine Entscheidung <b>treffen</b></td><td class="de">entscheiden</td></tr>
<tr><td class="de">eine Frage <b>stellen</b></td><td class="de">fragen</td></tr>
<tr><td class="de">einen Antrag <b>stellen</b></td><td class="de">beantragen</td></tr>
<tr><td class="de">eine Diagnose <b>stellen</b></td><td class="de">diagnostizieren</td></tr>
<tr><td class="de">Abschied <b>nehmen</b></td><td class="de">sich verabschieden</td></tr>
<tr><td class="de">Rücksicht <b>nehmen</b> auf</td><td class="de">rücksichtsvoll sein, schonen</td></tr>
<tr><td class="de">in Anspruch <b>nehmen</b></td><td class="de">beanspruchen, nutzen</td></tr>
<tr><td class="de">Einfluss <b>nehmen / haben</b> auf</td><td class="de">beeinflussen</td></tr>
<tr><td class="de">zur Verfügung <b>stehen / stellen</b></td><td class="de">verfügbar sein / bereitstellen</td></tr>
<tr><td class="de">in Frage <b>kommen</b></td><td class="de">möglich sein</td></tr>
<tr><td class="de">zum Einsatz <b>kommen</b></td><td class="de">eingesetzt werden</td></tr>
<tr><td class="de">in Betracht <b>ziehen</b></td><td class="de">erwägen</td></tr>
<tr><td class="de">zur Kenntnis <b>nehmen</b></td><td class="de">registrieren, wahrnehmen</td></tr>
<tr><td class="de">eine Rolle <b>spielen</b></td><td class="de">wichtig sein</td></tr>
<tr><td class="de">Kritik <b>üben</b> an</td><td class="de">kritisieren</td></tr>
<tr><td class="de">Bescheid <b>geben / sagen</b></td><td class="de">informieren</td></tr>
<tr><td class="de">sich Sorgen <b>machen</b> um</td><td class="de">sich sorgen</td></tr>
<tr><td class="de">in Kraft <b>treten</b></td><td class="de">gültig werden</td></tr></table>
<p>Clinical: <span class="de">eine Indikation <b>stellen</b> · eine Therapie <b>einleiten</b> · einen Zugang <b>legen</b> · Blut <b>abnehmen</b> · eine Aufklärung <b>durchführen</b> · unter Beobachtung <b>stehen</b> · in Behandlung <b>sein</b> · zur Aufnahme <b>kommen</b> · Beschwerden <b>angeben</b> · eine Besserung <b>zeigen</b>.</span></p>
<p>Negation: <b>nicht</b> when the noun is tied to a preposition (<span class="de">Das kommt <b>nicht</b> in Frage. Das steht <b>nicht</b> zur Verfügung.</span>); <b>kein</b> when it is a bare accusative noun (<span class="de">Er nimmt <b>keine</b> Rücksicht. Sie hat <b>keinen</b> Antrag gestellt.</span>).</p>`,
 merke:"Learn noun + verb as one chunk: Entscheidung treffen, Frage/Antrag/Diagnose stellen, in Frage kommen, in Betracht ziehen.",
 ex:[{type:"mc",q:"eine Entscheidung ___",o:["machen","treffen","nehmen"],a:1,why:"eine Entscheidung treffen — never machen."},
 {type:"mc",q:"einen Antrag ___",o:["stellen","geben","tun"],a:0,why:"einen Antrag stellen = to apply."},
 {type:"mc",q:"Diese Therapie kommt nicht in ___.",o:["Frage","Antwort","Betracht ziehen"],a:0,why:"in Frage kommen = to be an option."},
 {type:"mc",q:"Wir müssen eine Operation in Betracht ___.",o:["nehmen","ziehen","stellen"],a:1,why:"in Betracht ziehen = to consider."},
 {type:"mc",q:"Das Alter spielt hier eine große ___.",o:["Rolle","Frage","Stelle"],a:0,why:"eine Rolle spielen = to matter."},
 {type:"gap",q:"Darf ich Ihnen eine Frage ___?",a:"stellen",alt:[],why:"eine Frage stellen."},
 {type:"gap",q:"Bitte geben Sie mir ___, wenn das Labor da ist. (let me know)",a:"Bescheid",alt:[],why:"Bescheid geben = to let someone know."},
 {type:"order",words:["Der","Arzt","hat","die","Diagnose","gestellt","."],a:"Der Arzt hat die Diagnose gestellt.",why:"eine Diagnose stellen."},
 {type:"fix",q:"Wir haben eine Entscheidung gemacht.",a:"Wir haben eine Entscheidung getroffen.",alt:["Wir haben eine Entscheidung gefällt."],err:"gemacht",why:"Entscheidung + treffen (getroffen)."},
 {type:"transform",q:"Formell, mit „einen Antrag auf … stellen“: Der Patient hat seine Verlegung beantragt.",a:"Der Patient hat einen Antrag auf Verlegung gestellt.",alt:["Der Patient hat einen Antrag darauf gestellt, verlegt zu werden.","Der Patient stellte einen Antrag auf Verlegung.","Der Patient hat einen Verlegungsantrag gestellt."],why:"beantragen → einen Antrag stellen (auf + accusative)."}]},
{id:"g53",level:"C1",week:34,title:"Erweiterte Partizipialattribute",sub:"„der seit drei Tagen bestehende Schmerz“ — how to unpack the long noun phrases of the Arztbrief",
 body:`<p>Written German packs a whole relative clause <b>between the article and the noun</b>. Doctors' letters are full of it. You must read it fluently and write a few yourself.</p>
<p><span class="de"><b>der</b> [seit drei Tagen bestehend<b>e</b>] <b>Schmerz</b></span> = <span class="de">der Schmerz, der seit drei Tagen besteht</span></p>
<p><b>Partizip I</b> (Infinitiv + d) = <b>active, at the same time</b>:<br><span class="de">die in den linken Arm ausstrahlend<b>en</b> Schmerzen = die Schmerzen, die in den linken Arm ausstrahlen</span></p>
<p><b>Partizip II</b> = <b>passive or completed</b>:<br><span class="de">der gestern operiert<b>e</b> Patient = der Patient, der gestern operiert wurde</span><br><span class="de">das vom Hausarzt verordnet<b>e</b> Medikament = das Medikament, das vom Hausarzt verordnet wurde</span></p>
<p><b>zu + Partizip I</b> = <b>must / can be done</b>:<br><span class="de">die noch durchzuführend<b>en</b> Untersuchungen = die Untersuchungen, die noch durchgeführt werden müssen</span></p>
<p><b>How to read:</b> 1. find the article; 2. jump to the noun; 3. the word before the noun is the participle (with an adjective ending); 4. read everything in between as the rest of the clause.</p>
<p><b>How to write:</b> take the relative clause, drop the relative pronoun, turn the verb into a participle with the right adjective ending, put it directly before the noun, and everything else before the participle.</p>
<p>FSP style: <span class="de">Der 67-jährige, mit akuter Luftnot <b>eingelieferte</b> Patient · bei <b>bekannter</b> koronarer Herzkrankheit · die seit gestern <b>zunehmenden</b> Beschwerden · der initial <b>erhobene</b> Befund · das <b>einzuleitende</b> Procedere.</span></p>`,
 merke:"Article … [everything else] participle + ending → noun. Partizip I = active now; Partizip II = passive/done; zu + Partizip I = to be done.",
 ex:[{type:"mc",q:"„der Schmerz, der seit gestern besteht“ =",o:["der seit gestern bestandene Schmerz","der seit gestern bestehende Schmerz","der seit gestern zu bestehende Schmerz"],a:1,why:"Active, ongoing → Partizip I: bestehend + e."},
 {type:"mc",q:"„das Medikament, das der Hausarzt verordnet hat“ =",o:["das vom Hausarzt verordnende Medikament","das vom Hausarzt verordnete Medikament","das vom Hausarzt zu verordnete Medikament"],a:1,why:"Completed/passive → Partizip II; the agent becomes von + dative."},
 {type:"mc",q:"„die noch durchzuführenden Untersuchungen“ means:",o:["the examinations already carried out","the examinations still to be carried out","the examinations being carried out"],a:1,why:"zu + Partizip I = must/can be done."},
 {type:"mc",q:"In „die in den Rücken ausstrahlenden Schmerzen“, the core noun phrase is:",o:["die Schmerzen","den Rücken","die ausstrahlenden"],a:0,why:"Article (die) … noun (Schmerzen); everything between is the attribute."},
 {type:"mc",q:"„der Patient, der gestern aufgenommen wurde“ =",o:["der gestern aufnehmende Patient","der gestern aufgenommene Patient","der gestern aufzunehmende Patient"],a:1,why:"Passive, completed → Partizip II: aufgenommen + e."},
 {type:"gap",q:"die seit einer Woche ___ Beschwerden (zunehmen, Partizip I)",a:"zunehmenden",alt:[],why:"zunehmen + d + plural ending -en."},
 {type:"gap",q:"der vor zwei Jahren ___ Herzinfarkt (erleiden, Partizip II)",a:"erlittene",alt:[],why:"erleiden → erlitten; after der, masculine nominative → -e."},
 {type:"order",words:["Die","gestern","begonnene","Therapie","zeigt","Wirkung","."],a:"Die gestern begonnene Therapie zeigt Wirkung.",why:"Article – attribute – participle – noun, then the verb."},
 {type:"fix",q:"Die in den Arm ausstrahlende Schmerzen bestehen seit gestern.",a:"Die in den Arm ausstrahlenden Schmerzen bestehen seit gestern.",err:"ausstrahlende",why:"After die in the plural the ending is -en."},
 {type:"transform",q:"Als Partizipialattribut: die Patientin, die mit Fieber eingeliefert wurde",a:"die mit Fieber eingelieferte Patientin",alt:[],why:"Partizip II (eingeliefert) + -e, placed before the noun."}]},
{id:"g54",level:"C1",week:36,title:"Konnektoren für Fortgeschrittene",sub:"indem, sofern, zumal, wohingegen, es sei denn, geschweige denn",
 body:`<p>These connectors lift your writing from B2 to C1. The <b>conjunctions</b> below send the verb to the end (except <span class="de">es sei denn</span> and <span class="de">geschweige denn</span>); the <b>adverbs</b> take position 1.</p>
<table><tr><th>indem</th><td>by …ing (means)</td><td class="de">Man senkt das Fieber, <b>indem</b> man Wadenwickel macht.</td></tr>
<tr><th>dadurch, dass</th><td>by the fact that</td><td class="de">Die Wunde heilte <b>dadurch, dass</b> sie sauber gehalten wurde.</td></tr>
<tr><th>sofern / falls</th><td>provided that / in case</td><td class="de"><b>Sofern</b> keine Komplikationen auftreten, werden Sie morgen entlassen.</td></tr>
<tr><th>es sei denn, …</th><td>unless (+ main clause order or <i>dass</i>)</td><td class="de">Wir operieren morgen, <b>es sei denn</b>, das Fieber steigt.</td></tr>
<tr><th>zumal</th><td>especially since</td><td class="de">Er sollte nicht fliegen, <b>zumal</b> er gerade operiert wurde.</td></tr>
<tr><th>wohingegen / während</th><td>whereas</td><td class="de">Der Puls ist normal, <b>wohingegen</b> der Blutdruck erhöht ist.</td></tr>
<tr><th>sodass</th><td>so that (result)</td><td class="de">Er hatte starke Schmerzen, <b>sodass</b> er nicht schlafen konnte.</td></tr>
<tr><th>ohne dass / anstatt dass</th><td>without / instead (different subject)</td><td class="de">Er ging, <b>ohne dass</b> wir es merkten.</td></tr>
<tr><th>soweit / soviel</th><td>as far as</td><td class="de"><b>Soweit</b> ich weiß, ist er allergisch.</td></tr>
<tr><th>je nachdem, ob/wie</th><td>depending on</td><td class="de"><b>Je nachdem, wie</b> das Labor ausfällt, …</td></tr>
<tr><th>geschweige denn</th><td>let alone</td><td class="de">Er kann nicht stehen, <b>geschweige denn</b> gehen.</td></tr></table>
<p><b>Adverbs (position 1, verb follows):</b> <span class="de">folglich, demnach, somit</span> (therefore) · <span class="de">allerdings, jedoch, hingegen, dennoch, gleichwohl</span> (however / nevertheless) · <span class="de">andernfalls, sonst</span> (otherwise) · <span class="de">zudem, außerdem, darüber hinaus, ferner</span> (moreover) · <span class="de">insofern</span> (in that respect) · <span class="de">stattdessen</span> (instead).</p>
<p><span class="de">Die Schmerzen ließen nach; <b>dennoch</b> blieb der Patient zur Beobachtung. Nehmen Sie das Antibiotikum zu Ende, <b>andernfalls</b> droht ein Rückfall.</span></p>
<p><b>Trap:</b> <span class="de">indem</span> (by doing) is not <span class="de">in dem</span> (in which), and <span class="de">sodass</span> (result) is not <span class="de">damit</span> (purpose).</p>`,
 merke:"indem = how. sofern = if. zumal = all the more because. es sei denn = unless. dennoch/allerdings/folglich take position 1.",
 ex:[{type:"mc",q:"Man verhindert Infektionen, ___ man die Hände desinfiziert.",o:["indem","sodass","zumal"],a:0,why:"Means (by doing) → indem."},
 {type:"mc",q:"Sie können morgen nach Hause, ___ das Fieber nicht wiederkommt.",o:["zumal","sofern","wohingegen"],a:1,why:"Condition → sofern (provided that)."},
 {type:"mc",q:"Er sollte nicht Auto fahren, ___ er starke Schmerzmittel nimmt.",o:["zumal","es sei denn","indem"],a:0,why:"An additional, stronger reason → zumal."},
 {type:"mc",q:"Der Patient kann kaum sitzen, ___ laufen.",o:["geschweige denn","es sei denn","je nachdem"],a:0,why:"let alone → geschweige denn."},
 {type:"mc",q:"Die Therapie schlug an; ___ blieb er noch zwei Tage stationär.",o:["obwohl","dennoch","zumal"],a:1,why:"Adverb in position 1 before the verb → dennoch."},
 {type:"gap",q:"Wir entlassen Sie heute, es sei ___, die Werte verschlechtern sich.",a:"denn",alt:[],why:"es sei denn = unless."},
 {type:"gap",q:"Er hustete stark, ___ er nicht sprechen konnte. (result)",a:"sodass",alt:["so dass"],why:"Result → sodass."},
 {type:"order",words:["Soweit","ich","weiß",",","nimmt","er","keine","Medikamente","."],a:"Soweit ich weiß, nimmt er keine Medikamente.",why:"Subordinate clause first, then verb – subject."},
 {type:"fix",q:"Er wurde gesund, in dem er viel schlief.",a:"Er wurde gesund, indem er viel schlief.",err:"in dem",why:"The conjunction is one word: indem."},
 {type:"transform",q:"Mit „indem“: Man kann Stürze vermeiden. Man trägt feste Schuhe.",a:"Man kann Stürze vermeiden, indem man feste Schuhe trägt.",alt:["Indem man feste Schuhe trägt, kann man Stürze vermeiden."],why:"indem + verb last."}]},
{id:"g55",level:"B2",week:38,title:"Kommas, ß und Großschreibung",sub:"The spelling rules examiners actually mark",
 body:`<p><b>Comma — always:</b></p>
<ul><li>between main clause and subordinate clause: <span class="de">Ich glaube<b>,</b> dass er kommt. Der Mann<b>,</b> der dort sitzt<b>,</b> ist mein Chef.</span></li>
<li>before <span class="de">aber, sondern, denn, doch, jedoch</span>: <span class="de">klein<b>,</b> aber fein</span></li>
<li>in lists without <span class="de">und/oder</span>: <span class="de">Fieber<b>,</b> Husten und Schnupfen</span></li>
<li>before <span class="de">um … zu, ohne … zu, statt … zu</span>: <span class="de">Ich bin hier<b>,</b> um zu helfen.</span></li>
<li>around insertions and appositions: <span class="de">Dr. Braun<b>,</b> der Oberarzt<b>,</b> kommt gleich.</span></li></ul>
<p><b>No comma</b> before <span class="de">und / oder</span> joining words or short clauses, and <b>none after an opening phrase</b>: <span class="de">Nach der Operation ging es ihm gut.</span> (English writers add one here — do not.)</p>
<p><b>ß or ss?</b> After a <b>long</b> vowel or diphthong: <b>ß</b> — <span class="de">Fuß, groß, heißen, draußen, Straße, schließen</span>. After a <b>short</b> vowel: <b>ss</b> — <span class="de">muss, Fluss, essen, Wasser, dass, Schluss</span>. So: <span class="de">ich weiß · wir wissen</span>; <span class="de">der Fuß · der Fluss</span>.</p>
<p><b>das or dass?</b> If you can say <span class="de">dieses / welches</span> → <b>das</b>. Otherwise → <b>dass</b>. <span class="de">Ich weiß, <b>dass das</b> Medikament hilft.</span></p>
<p><b>Capital letters:</b> all nouns; nominalised verbs and adjectives (<span class="de">das Essen, beim Gehen, etwas Neues, im Allgemeinen</span>); polite <span class="de">Sie, Ihr, Ihnen</span>. <b>Lowercase:</b> adjectives of nationality and language as adjectives (<span class="de">die deutsche Sprache</span> — but <span class="de">auf Deutsch, das Deutsche</span>); <span class="de">heute Morgen, gestern Abend</span> (day lower, part of day capital); <span class="de">montags, abends</span>.</p>
<p><b>Together or apart:</b> <span class="de">kennenlernen, teilnehmen, stattfinden, zurückkommen</span> are one word in the infinitive; <span class="de">Rad fahren, Auto fahren, spazieren gehen</span> are two.</p>`,
 merke:"Comma before every Nebensatz, aber, sondern, um … zu. Long vowel → ß, short → ss. dieses/welches → das, else dass.",
 ex:[{type:"mc",q:"Which is correct?",o:["Ich glaube das er krank ist.","Ich glaube, dass er krank ist.","Ich glaube, das er krank ist."],a:1,why:"Comma before the clause; the conjunction is dass."},
 {type:"mc",q:"Which is correct?",o:["der Fuss","der Fuß","der Fus"],a:1,why:"Long u → ß."},
 {type:"mc",q:"Which is correct?",o:["Nach dem Essen, nehme ich die Tablette.","Nach dem Essen nehme ich die Tablette.","Nach dem essen nehme ich die Tablette."],a:1,why:"No comma after an opening phrase; das Essen is a noun."},
 {type:"mc",q:"Which is correct?",o:["Ich spreche Deutsch und lese deutsche Bücher.","Ich spreche deutsch und lese Deutsche Bücher.","Ich spreche Deutsch und lese Deutsche Bücher."],a:0,why:"The language as a noun is capital; the adjective is lowercase."},
 {type:"mc",q:"Ich weiß, ___ ___ Kind Fieber hat.",o:["das dass","dass das","dass dass"],a:1,why:"Conjunction dass, then article das."},
 {type:"mc",q:"Er ___ sofort ins Krankenhaus.",o:["muß","muss","mus"],a:1,why:"Short u → ss: muss."},
 {type:"mc",q:"Which is correct?",o:["Wir sehen uns heute abend.","Wir sehen uns Heute Abend.","Wir sehen uns heute Abend."],a:2,why:"heute Abend: the day word is lowercase, the part of the day is a capitalised noun."},
 {type:"order",words:["Ich","bin","hier",",","um","Ihnen","zu","helfen","."],a:"Ich bin hier, um Ihnen zu helfen.",why:"Comma before um … zu."},
 {type:"fix",q:"Ich hoffe, das es Ihnen besser geht.",a:"Ich hoffe, dass es Ihnen besser geht.",err:"das",why:"You cannot replace it with dieses/welches → dass."},
 {type:"mc",q:"Which is correct?",o:["Der Patient der gestern kam, ist entlassen.","Der Patient, der gestern kam, ist entlassen.","Der Patient, der gestern kam ist entlassen."],a:1,why:"A relative clause is enclosed by two commas."}]},
{id:"g56",level:"B2",week:39,title:"Gesprochenes Deutsch & Umgangssprache",sub:"What patients really say: nix, 'n bisschen, ich hab, kriegen, gucken",
 body:`<p>Textbook German is not what you hear at three in the morning. Understand everything here; in exams and with patients <b>use</b> the standard forms.</p>
<p><b>Sounds that disappear:</b></p>
<table><tr><td class="de">ich hab, ich komm, ich geh</td><td>final -e dropped</td></tr><tr><td class="de">is, nich, jetz, ma</td><td>ist, nicht, jetzt, mal</td></tr><tr><td class="de">'n, 'ne, 'nen</td><td>ein, eine, einen: <span class="de">Ich hab 'ne Frage.</span></td></tr><tr><td class="de">nix</td><td>nichts</td></tr><tr><td class="de">haste, biste, kannste</td><td>hast du, bist du, kannst du</td></tr><tr><td class="de">gibt's, geht's, wie's, auf'm, in'n</td><td>gibt es, geht es, wie es, auf dem, in den</td></tr><tr><td class="de">was (für etwas)</td><td><span class="de">Ich hab was gegessen.</span></td></tr></table>
<p><b>Everyday words:</b> <span class="de">kriegen</span> = bekommen · <span class="de">gucken</span> = sehen, schauen · <span class="de">kaputt</span> = broken, exhausted · <span class="de">klappen</span> = work out · <span class="de">quatschen</span> = chat · <span class="de">pennen</span> = sleep · <span class="de">Klamotten</span> = clothes · <span class="de">Kohle</span> = money · <span class="de">mies, übel</span> = bad · <span class="de">krass</span> = extreme · <span class="de">echt?</span> = really? · <span class="de">Quatsch!</span> = nonsense · <span class="de">ne? / gell? / oder?</span> = isn't it?</p>
<p><b>Patients describing symptoms:</b> <span class="de">Mir ist kotzübel. Ich hab's im Kreuz</span> (back pain)<span class="de">. Ich krieg keine Luft. Mir brummt der Schädel. Ich bin fix und fertig. Das zwickt / zieht / sticht. Ich hab Rücken</span> (I have back trouble)<span class="de">. Ich hab mich übergeben. Ich hab gebrochen / gekotzt. Ich muss ständig aufs Klo. Ich bin umgekippt</span> (fainted)<span class="de">. Ich hab einen Kater</span> (hangover).</p>
<p><b>Grammar of speech:</b> <span class="de">weil</span> with main-clause order (<span class="de">…, weil ich hab keine Zeit</span>) — common, but wrong in writing. <span class="de">wegen dem</span> instead of <span class="de">wegen des</span>. <span class="de">der/die</span> instead of <span class="de">er/sie</span>: <span class="de">Der hat gesagt …</span> <span class="de">tun</span> as a helper: <span class="de">Ich tu grad kochen.</span></p>
<p><b>Greetings by region:</b> <span class="de">Moin</span> (north, all day) · <span class="de">Grüß Gott / Servus</span> (south) · <span class="de">Guude</span> (Hessen) · <span class="de">Tschüss / Ciao / Ade</span> (Baden: <span class="de">Ade!</span>). In the Kurpfalz around Heidelberg you will hear <span class="de">Alla (hopp)!</span> = okay then, bye.</p>`,
 merke:"Understand: hab, nix, 'ne, kriegen, gucken, kaputt. Write and say to patients: habe, nichts, eine, bekommen, sehen.",
 ex:[{type:"mc",q:"„Ich krieg keine Luft.“ =",o:["Ich bekomme keine Luft.","Ich möchte keine Luft.","Ich brauche keine Luft."],a:0,why:"kriegen = bekommen."},
 {type:"mc",q:"„Ich hab nix gegessen.“ — nix =",o:["nicht","nichts","nie"],a:1,why:"nix = nichts."},
 {type:"mc",q:"„Ich bin gestern umgekippt.“ means:",o:["I fell out of bed","I fainted / collapsed","I changed my mind"],a:1,why:"umkippen = to keel over, faint."},
 {type:"mc",q:"„Hast du 'ne Tablette?“ — 'ne =",o:["keine","eine","meine"],a:1,why:"'ne = eine."},
 {type:"mc",q:"„Mir ist kotzübel.“ The patient feels:",o:["very nauseous","very cold","very angry"],a:0,why:"kotzübel = extremely nauseous (vulgar-colloquial)."},
 {type:"gap",q:"Standardsprache: „Das hat nicht geklappt.“ = Das hat nicht ___.",a:"funktioniert",alt:[],why:"klappen = funktionieren, to work out."},
 {type:"gap",q:"Standardsprache: „Guck mal!“ = ___ mal!",a:"Schau",alt:["Sieh"],why:"gucken = schauen / sehen."},
 {type:"order",words:["Ich","bin","fix","und","fertig","."],a:"Ich bin fix und fertig.",why:"fix und fertig = completely exhausted."},
 {type:"fix",q:"Schriftlich: Ich komme nicht, weil ich habe keine Zeit.",a:"Ich komme nicht, weil ich keine Zeit habe.",err:"habe keine Zeit",why:"In writing, weil always sends the verb to the end."},
 {type:"transform",q:"In Standardsprache: Haste mal 'n Stift?",a:"Hast du mal einen Stift?",alt:["Hast du einen Stift?"],why:"haste = hast du; 'n = einen."}]}
);

// ===== Mephisto 12.8 · Funktionswörter: the small words that hold German together (only added if not already in the catalogue). [de, en, example, exampleEn, level, theme]
const VOC3=[
["mal","(particle) softens a request; short for einmal","Zeigen Sie mal her.","Let me have a look.","A2","partikeln"],
["halt","(particle) that's just how it is","Das ist halt so.","That's just how it is.","B1","partikeln"],
["eben","(particle) simply, just; (adverb) just now","Dann müssen wir eben warten.","Then we'll just have to wait.","B1","partikeln"],
["bloß","(particle) just, only; warning","Stehen Sie bloß nicht auf!","Don't you get up!","B1","partikeln"],
["ruhig","(particle) feel free to; (adjective) calm","Fragen Sie ruhig.","Feel free to ask.","B1","partikeln"],
["übrigens","by the way","Übrigens, Ihr Befund ist da.","By the way, your result is here.","B1","kleine-woerter"],
["sowieso","anyway, in any case","Ich muss sowieso zur Apotheke.","I have to go to the pharmacy anyway.","B1","kleine-woerter"],
["ohnehin","anyway (formal)","Die Untersuchung war ohnehin geplant.","The examination was planned anyway.","B2","kleine-woerter"],
["bereits","already (formal)","Der Patient wurde bereits aufgeklärt.","The patient has already been informed.","B1","kleine-woerter"],
["damals","back then","Damals hatte ich noch keine Beschwerden.","Back then I had no complaints yet.","A2","kleine-woerter"],
["neulich","the other day, recently","Neulich bin ich auf der Treppe gestürzt.","The other day I fell on the stairs.","B1","kleine-woerter"],
["kürzlich","recently","Sie wurde kürzlich operiert.","She was operated on recently.","B1","kleine-woerter"],
["vorhin","a little while ago (today)","Vorhin war mir schwindelig.","A little while ago I felt dizzy.","B1","kleine-woerter"],
["gleich","in a moment; same","Der Arzt kommt gleich.","The doctor will be with you in a moment.","A1","kleine-woerter"],
["sofort","immediately","Rufen Sie sofort den Notarzt.","Call the emergency doctor immediately.","A1","kleine-woerter"],
["bald","soon","Gute Besserung, bis bald!","Get well soon, see you!","A1","kleine-woerter"],
["inzwischen","meanwhile, by now","Inzwischen geht es ihr besser.","By now she is doing better.","B1","kleine-woerter"],
["bisher","so far, until now","Bisher gab es keine Komplikationen.","So far there have been no complications.","B1","kleine-woerter"],
["zunächst","first of all, for now","Zunächst machen wir ein EKG.","First we'll do an ECG.","B1","kleine-woerter"],
["anschließend","afterwards","Anschließend kommen Sie auf die Station.","Afterwards you will go to the ward.","B1","kleine-woerter"],
["schließlich","finally; after all","Schließlich ist er Arzt.","After all, he is a doctor.","B1","kleine-woerter"],
["ständig","constantly","Ich muss ständig husten.","I have to cough constantly.","B1","kleine-woerter"],
["gelegentlich","occasionally","Ich trinke gelegentlich ein Glas Wein.","I occasionally drink a glass of wine.","B1","kleine-woerter"],
["selten","rarely","Ich bin selten krank.","I am rarely ill.","A2","kleine-woerter"],
["kaum","hardly, barely","Ich kann kaum atmen.","I can hardly breathe.","B1","kleine-woerter"],
["fast","almost","Ich wäre fast gestürzt.","I almost fell.","A2","kleine-woerter"],
["ziemlich","quite, rather","Die Schmerzen sind ziemlich stark.","The pain is quite strong.","A2","kleine-woerter"],
["etwa","about, approximately","Seit etwa drei Wochen.","For about three weeks.","A2","kleine-woerter"],
["ungefähr","roughly","Ungefähr einmal im Monat.","Roughly once a month.","A2","kleine-woerter"],
["mindestens","at least","Trinken Sie mindestens zwei Liter am Tag.","Drink at least two litres a day.","A2","kleine-woerter"],
["höchstens","at most","Höchstens drei Tabletten täglich.","At most three tablets a day.","B1","kleine-woerter"],
["sogar","even","Er hat sogar nachts Schmerzen.","He even has pain at night.","A2","kleine-woerter"],
["überhaupt","at all; in general","Ich habe überhaupt keinen Appetit.","I have no appetite at all.","B1","kleine-woerter"],
["jedenfalls","in any case","Jedenfalls sollten Sie nicht rauchen.","In any case you should not smoke.","B1","kleine-woerter"],
["nämlich","namely; you see","Ich kann nicht kommen, ich habe nämlich Dienst.","I can't come — I'm on duty, you see.","B1","kleine-woerter"],
["allerdings","however, though","Die Therapie wirkt, allerdings langsam.","The therapy works, though slowly.","B1","kleine-woerter"],
["dennoch","nevertheless","Er hatte Schmerzen, dennoch ging er arbeiten.","He was in pain; nevertheless he went to work.","B2","kleine-woerter"],
["hingegen","on the other hand","Der Puls ist normal, der Blutdruck hingegen erhöht.","The pulse is normal; the blood pressure, on the other hand, is raised.","B2","kleine-woerter"],
["folglich","consequently","Die Werte sind normal, folglich können Sie nach Hause.","The values are normal, so you can go home.","B2","kleine-woerter"],
["andernfalls","otherwise","Nehmen Sie es regelmäßig, andernfalls wirkt es nicht.","Take it regularly, otherwise it won't work.","B2","kleine-woerter"],
["stattdessen","instead","Nehmen Sie stattdessen Paracetamol.","Take paracetamol instead.","B1","kleine-woerter"],
["solange","as long as","Solange Sie Fieber haben, bleiben Sie im Bett.","As long as you have a fever, stay in bed.","B1","kleine-woerter"],
["sobald","as soon as","Sobald das Labor da ist, sage ich Ihnen Bescheid.","As soon as the lab results are in, I'll let you know.","B1","kleine-woerter"],
["sofern","provided that","Sofern Sie einverstanden sind, beginnen wir.","Provided you agree, we'll begin.","B2","kleine-woerter"],
["indem","by (doing)","Sie helfen sich selbst, indem Sie viel trinken.","You help yourself by drinking a lot.","B2","kleine-woerter"],
["zumal","especially since","Bleiben Sie hier, zumal es schon spät ist.","Stay here, especially since it is already late.","C1","kleine-woerter"],
["wegen","because of (+ genitive)","Wegen der Schmerzen kann ich nicht schlafen.","Because of the pain I can't sleep.","A2","kleine-woerter"],
["aufgrund","due to (+ genitive)","Aufgrund des Befundes empfehlen wir eine Operation.","Due to the findings we recommend an operation.","B2","kleine-woerter"],
["innerhalb","within (+ genitive)","Innerhalb einer Stunde wurde es besser.","Within an hour it got better.","B1","kleine-woerter"],
["anhand","on the basis of (+ genitive)","Anhand der Bilder lässt sich ein Bruch erkennen.","From the images a fracture can be identified.","B2","kleine-woerter"],
["bezüglich","regarding (+ genitive)","Bezüglich Ihrer Frage rufe ich Sie zurück.","Regarding your question I'll call you back.","B2","kleine-woerter"],
["gegenüber","opposite; towards (+ dative)","Die Apotheke ist gegenüber dem Bahnhof.","The pharmacy is opposite the station.","A2","kleine-woerter"],
["sich","oneself (reflexive, 3rd person and Sie)","Setzen Sie sich bitte.","Please sit down.","A1","kleine-woerter"],
["einander","each other","Wir helfen einander.","We help each other.","B1","kleine-woerter"],
["irgendwie","somehow","Mir ist irgendwie komisch.","I feel somehow strange.","B1","kleine-woerter"],
["irgendwann","at some point","Irgendwann hörten die Schmerzen auf.","At some point the pain stopped.","B1","kleine-woerter"],
["irgendwo","somewhere","Tut es noch irgendwo weh?","Does it hurt anywhere else?","B1","kleine-woerter"],
["nirgends","nowhere","Ich finde meine Brille nirgends.","I can't find my glasses anywhere.","B1","kleine-woerter"],
["beide","both","Beide Beine sind geschwollen.","Both legs are swollen.","A2","kleine-woerter"],
["sämtliche","all (formal)","Sämtliche Werte sind im Normbereich.","All values are within the normal range.","B2","kleine-woerter"],
["einige","some, a few","Ich habe einige Fragen.","I have a few questions.","A2","kleine-woerter"],
["mehrere","several","Er nimmt mehrere Medikamente.","He takes several medications.","A2","kleine-woerter"],
["derselbe","the same (one)","Es ist derselbe Schmerz wie gestern.","It is the same pain as yesterday.","B1","kleine-woerter"],
["solch","such","Solche Schmerzen hatte ich noch nie.","I have never had such pain.","B1","kleine-woerter"],
["umso","all the (more)","Je früher wir beginnen, umso besser.","The sooner we begin, the better.","B2","kleine-woerter"],
["zwar","admittedly (… aber)","Das hilft zwar, aber nur kurz.","It does help, but only briefly.","B1","kleine-woerter"],
["weder","neither (… noch)","Ich habe weder Fieber noch Husten.","I have neither fever nor cough.","B1","kleine-woerter"],
["sowohl","both (… als auch)","Sowohl der Puls als auch der Blutdruck sind normal.","Both the pulse and the blood pressure are normal.","B1","kleine-woerter"],
["entweder","either (… oder)","Entweder heute oder morgen.","Either today or tomorrow.","A2","kleine-woerter"],
["je","ever; per; the (… desto)","Je mehr Sie trinken, desto besser.","The more you drink, the better.","B1","kleine-woerter"],
["hin","there (away from the speaker)","Wo gehen Sie hin?","Where are you going?","A2","kleine-woerter"],
["her","here (towards the speaker)","Kommen Sie bitte her.","Please come here.","A2","kleine-woerter"],
["daher","therefore; from there","Er ist Diabetiker, daher die Kontrolle.","He is diabetic, hence the check.","B1","kleine-woerter"],
["dabei","at the same time; with it","Haben Sie Ihre Medikamente dabei?","Do you have your medication with you?","A2","kleine-woerter"],
["davon","of it, from it","Davon weiß ich nichts.","I know nothing about that.","B1","kleine-woerter"],
["dafür","for it; in return","Dafür brauchen Sie eine Überweisung.","For that you need a referral.","A2","kleine-woerter"],
["dagegen","against it; on the other hand","Was kann man dagegen tun?","What can be done about it?","B1","kleine-woerter"],
["worüber","about what","Worüber machen Sie sich Sorgen?","What are you worried about?","B1","kleine-woerter"]];

// ===== Mephisto 12.8 · Der Schatten: a second voice in every chapter. He speaks in the grammar of that chapter, at its level, and changes from enemy to ally (Jung's shadow, integrated at the end).
const SHADOW={
1:["Ich bin müde. Ich will nach Hause. Es ist kalt.","I am tired. I want to go home. It is cold."],
2:["Der, die, das. Wer braucht das? Niemand.","Der, die, das. Who needs that? Nobody."],
3:["Ich habe Angst. Du hast auch Angst. Wir sind allein. Und es wird dunkel.","I am afraid. You are afraid too. We are alone. And it is getting dark."],
4:["Heute lerne ich nicht. Morgen lerne ich. Vielleicht.","Today I won't study. Tomorrow I will. Maybe."],
5:["Der Wolf frisst den Mann. Der Wald frisst den Weg. Die Sprache frisst dich.","The wolf eats the man. The forest eats the path. The language eats you."],
6:["Eins, zwei, drei … Ich zähle deine Fehler. Ich bin schon bei hundert.","One, two, three … I am counting your mistakes. I have reached a hundred already."],
7:["Warum bist du hier? Wohin gehst du? Wer wartet auf dich?","Why are you here? Where are you going? Who is waiting for you?"],
8:["Die Hexe ist alt und stark. Du bist neu und schwach. Das Haus ist nicht für dich.","The witch is old and strong. You are new and weak. The house is not for you."],
9:["Der Stadt gefällst du nicht. Dem Kellner antwortest du falsch. Mir kannst du glauben: Wir gehören nicht hierher.","The city does not like you. You answer the waiter wrongly. You can believe me: we do not belong here."],
10:["Du gehst in das Café. Ich sitze schon im Café. Ich bin immer vor dir da.","You walk into the café. I am already sitting in the café. I am always there before you."],
11:["Du musst nicht lernen. Du kannst aufhören. Du darfst müde sein. Ich will es so.","You don't have to study. You can stop. You are allowed to be tired. I want it that way."],
12:["Gib auf. Hör auf. Mach das Buch zu. Ich fange gar nicht erst an.","Give up. Stop. Close the book. I won't even begin."],
13:["Was hast du gelernt? Was hast du vergessen? Ich bin geblieben und habe alles gesehen.","What have you learned? What have you forgotten? I stayed and saw everything."],
14:["Du meldest dich an. Du setzt dich. Du wartest. Und ich frage mich: Wozu?","You register. You sit down. You wait. And I ask myself: what for?"],
15:["Ich weiß, dass du zweifelst. Ich weiß nicht, ob du bleibst. Ich hoffe, dass du gehst, weil ich müde bin.","I know that you doubt. I don't know whether you will stay. I hope that you leave, because I am tired."],
16:["Der Golem gehorcht jedem Befehl. Du gehorchst jeder Angst. Wer von euch ist aus Lehm?","The golem obeys every command. You obey every fear. Which of you is made of clay?"],
17:["Es war einmal ein Arzt, der alles wusste. Dann kam er nach Deutschland und wusste nichts mehr. Das warst du.","Once upon a time there was a doctor who knew everything. Then he came to Germany and knew nothing any more. That was you."],
18:["Ich bin der Hund, der dir folgt, weil du mich nicht ansiehst.","I am the dog that follows you because you won't look at me."],
19:["Die Angst des Schülers ist die Freude des Teufels. Und ich bin der Schatten des Schülers.","The pupil's fear is the devil's joy. And I am the pupil's shadow."],
20:["Ein müder Mann mit einem schweren Kopf in einem lauten Keller: ein schönes Bild von dir. Ich bin der Klügere von uns.","A tired man with a heavy head in a loud cellar: a fine picture of you. I am the cleverer of us two."],
21:["Wenn du zu Hause wärst, hättest du jetzt Ruhe. An deiner Stelle würde ich umkehren.","If you were at home, you would have peace now. In your place I would turn back."],
22:["Gretchen wurde verlassen. Du wirst geprüft. Mephisto sagt, es sei gerecht. Ich werde nie gefragt.","Gretchen was abandoned. You are being tested. Mephisto says it is just. I am never asked."],
23:["„Zwei Seelen wohnen, ach! in meiner Brust.“ Eine davon bin ich. Rate, welche lauter ist.","'Two souls, alas, dwell in my breast.' One of them is me. Guess which is louder."],
24:["Der Pudel bin nicht ich. Aber wir kennen uns. Wenn du ihn besiegst, werde ich leiser.","The poodle is not me. But we know each other. If you defeat him, I will grow quieter."],
25:["Du wartest auf den Tag, an dem du dich nicht mehr für deine Fehler schämst. Ich kümmere mich darum, dass er nicht kommt.","You are waiting for the day when you are no longer ashamed of your mistakes. I am seeing to it that it does not come."],
26:["Ich bin der Schlafwandler, dessen Augen offen sind und in dessen Kopf ein anderer spricht.","I am the sleepwalker whose eyes are open and in whose head another speaks."],
27:["Entweder du lernst, oder du schläfst. Weder das eine noch das andere gelingt dir ganz. Je müder du bist, desto lauter bin ich.","Either you study or you sleep. You manage neither the one nor the other completely. The more tired you are, the louder I am."],
28:["Obwohl du mich nicht hören willst, höre ich dir zu, damit ich weiß, wann du aufgibst.","Although you don't want to hear me, I listen to you, so that I know when you give up."],
29:["Nach Abschluss der Prüfung erfolgt die Ablehnung Ihres Antrags. So klingt meine Hoffnung im Nominalstil.","Upon completion of the examination, your application will be rejected. That is how my hope sounds in nominal style."],
30:["Es wird gelernt, es wird vergessen, es wird gelitten. Von wem? Das Passiv verrät es nicht. Ich schon: von dir.","There is learning, there is forgetting, there is suffering. By whom? The passive won't tell. I will: by you."],
31:["Man sagt, du seist begabt. Man sagt, du habest Fortschritte gemacht. Ich sage nichts. Ich warte.","They say you are gifted. They say you have made progress. I say nothing. I wait."],
32:["Vielleicht hat er recht, und du bist der Verrückte. Vielleicht bin ich der einzige Vernünftige hier.","Perhaps he is right and you are the madman. Perhaps I am the only sane one here."],
33:["Du bist ja immer noch da. Dann mach halt weiter. Ich bin mir eigentlich gar nicht mehr so sicher, dass du scheiterst.","Well, you are still here. Then just carry on. Actually I am no longer so sure that you will fail."],
34:["Du dürftest es schaffen. Ich muss mich geirrt haben. Der Teufel soll schon nervös sein.","You will probably make it. I must have been wrong. The devil is said to be nervous already."],
35:["Ich habe eine Entscheidung getroffen: Ich nehme Abschied von meinen Zweifeln. Sie kommen nicht mehr in Frage.","I have made a decision: I am taking leave of my doubts. They are no longer an option."],
36:["Der seit sechsunddreißig Kapiteln hinter dir hergehende, lange von dir gefürchtete Schatten bittet um das Wort: Danke.","The shadow that has walked behind you for thirty-six chapters, long feared by you, asks to speak: thank you."],
37:["Schattenlos wirst du nie sein. Aber furchtlos, vielleicht. Das Wort habe ich selbst gebaut.","You will never be shadowless. But fearless, perhaps. I built that word myself."],
38:["Meiner Meinung nach hast du es verdient. Davon bin ich überzeugt. Abschließend lässt sich sagen: Wir sind bereit.","In my opinion you have earned it. Of that I am convinced. In conclusion it can be said: we are ready."],
39:["Im Kerker ist es dunkel; folglich wirft dort niemand einen Schatten. Insofern bleibt mir nur ein Ort: du selbst.","It is dark in the dungeon; consequently nobody casts a shadow there. In that respect only one place remains for me: you yourself."]};
// SHADOW[40] deleted (S8-12): the line lives once, in SCN[40] / STORY3[40].open.

// ===== Mephisto 12.9 · Starke und unregelmäßige Verben: [Infinitiv, English, er-Form Präsens, Präteritum (er), Perfekt (er), level, Ablaut-Gruppe]
const STARK=[
["sein","to be","ist","war","ist gewesen","A1","x"],["haben","to have","hat","hatte","hat gehabt","A1","x"],["werden","to become","wird","wurde","ist geworden","A1","x"],
["gehen","to go","geht","ging","ist gegangen","A1","x"],["stehen","to stand","steht","stand","hat gestanden","A1","x"],["tun","to do","tut","tat","hat getan","A2","x"],
["kommen","to come","kommt","kam","ist gekommen","A1","o-a-o"],["bekommen","to get, receive","bekommt","bekam","hat bekommen","A1","o-a-o"],
["bringen","to bring","bringt","brachte","hat gebracht","A1","misch"],["denken","to think","denkt","dachte","hat gedacht","A2","misch"],["kennen","to know (be familiar with)","kennt","kannte","hat gekannt","A1","misch"],["nennen","to name","nennt","nannte","hat genannt","A2","misch"],["rennen","to run","rennt","rannte","ist gerannt","A2","misch"],["brennen","to burn","brennt","brannte","hat gebrannt","B1","misch"],["wissen","to know (a fact)","weiß","wusste","hat gewusst","A1","misch"],["senden","to send (also weak: sendete, gesendet)","sendet","sandte/sendete","hat gesandt/gesendet","B1","misch"],["wenden","to turn (also weak: wendete, gewendet)","wendet","wandte/wendete","hat gewandt/gewendet","B2","misch"],
["bleiben","to stay","bleibt","blieb","ist geblieben","A1","ei-ie-ie"],["schreiben","to write","schreibt","schrieb","hat geschrieben","A1","ei-ie-ie"],["steigen","to climb, rise","steigt","stieg","ist gestiegen","A2","ei-ie-ie"],["scheinen","to shine, seem","scheint","schien","hat geschienen","A2","ei-ie-ie"],["entscheiden","to decide","entscheidet","entschied","hat entschieden","A2","ei-ie-ie"],["verschreiben","to prescribe","verschreibt","verschrieb","hat verschrieben","A2","ei-ie-ie"],["überweisen","to refer; transfer","überweist","überwies","hat überwiesen","B1","ei-ie-ie"],["schweigen","to be silent","schweigt","schwieg","hat geschwiegen","B1","ei-ie-ie"],["schreien","to scream","schreit","schrie","hat geschrien","B1","ei-ie-ie"],["leihen","to lend","leiht","lieh","hat geliehen","B1","ei-ie-ie"],["meiden","to avoid","meidet","mied","hat gemieden","B2","ei-ie-ie"],["treiben","to drive, do (sport)","treibt","trieb","hat getrieben","B1","ei-ie-ie"],["beweisen","to prove","beweist","bewies","hat bewiesen","B1","ei-ie-ie"],
["beißen","to bite","beißt","biss","hat gebissen","B1","ei-i-i"],["schneiden","to cut","schneidet","schnitt","hat geschnitten","A2","ei-i-i"],["leiden","to suffer","leidet","litt","hat gelitten","B1","ei-i-i"],["reißen","to tear","reißt","riss","hat/ist gerissen","B1","ei-i-i"],["greifen","to grasp","greift","griff","hat gegriffen","B1","ei-i-i"],["streiten","to argue","streitet","stritt","hat gestritten","B1","ei-i-i"],["reiten","to ride (a horse)","reitet","ritt","ist geritten","B1","ei-i-i"],["gleichen","to resemble","gleicht","glich","hat geglichen","B2","ei-i-i"],["vergleichen","to compare","vergleicht","verglich","hat verglichen","B1","ei-i-i"],["pfeifen","to whistle","pfeift","pfiff","hat gepfiffen","B2","ei-i-i"],["schleichen","to creep","schleicht","schlich","ist geschlichen","B2","ei-i-i"],["weichen","to yield","weicht","wich","ist gewichen","C1","ei-i-i"],
["fliegen","to fly","fliegt","flog","ist geflogen","A1","ie-o-o"],["ziehen","to pull (hat); move (ist)","zieht","zog","hat/ist gezogen","A2","ie-o-o"],["verlieren","to lose","verliert","verlor","hat verloren","A2","ie-o-o"],["frieren","to freeze, be cold","friert","fror","hat gefroren","B1","ie-o-o"],["bieten","to offer","bietet","bot","hat geboten","B1","ie-o-o"],["anbieten","to offer","bietet an","bot an","hat angeboten","A2","ie-o-o"],["schließen","to close","schließt","schloss","hat geschlossen","A2","ie-o-o"],["riechen","to smell","riecht","roch","hat gerochen","A2","ie-o-o"],["fließen","to flow","fließt","floss","ist geflossen","B1","ie-o-o"],["gießen","to pour","gießt","goss","hat gegossen","B1","ie-o-o"],["schießen","to shoot","schießt","schoss","hat geschossen","B1","ie-o-o"],["wiegen","to weigh","wiegt","wog","hat gewogen","A2","ie-o-o"],["biegen","to bend (hat); turn (ist)","biegt","bog","hat/ist gebogen","B1","ie-o-o"],["fliehen","to flee","flieht","floh","ist geflohen","B1","ie-o-o"],["lügen","to lie (untruth)","lügt","log","hat gelogen","B1","e-o-o"],["heben","to lift","hebt","hob","hat gehoben","A2","e-o-o"],["schwellen","to swell","schwillt","schwoll","ist geschwollen","B1","e-o-o"],
["finden","to find","findet","fand","hat gefunden","A1","i-a-u"],["trinken","to drink","trinkt","trank","hat getrunken","A1","i-a-u"],["singen","to sing","singt","sang","hat gesungen","A2","i-a-u"],["sinken","to sink, fall","sinkt","sank","ist gesunken","B1","i-a-u"],["springen","to jump","springt","sprang","ist gesprungen","A2","i-a-u"],["binden","to tie","bindet","band","hat gebunden","B1","i-a-u"],["verbinden","to bandage; connect","verbindet","verband","hat verbunden","A2","i-a-u"],["verschwinden","to disappear","verschwindet","verschwand","ist verschwunden","B1","i-a-u"],["klingen","to sound","klingt","klang","hat geklungen","B1","i-a-u"],["gelingen","to succeed","gelingt","gelang","ist gelungen","B1","i-a-u"],["zwingen","to force","zwingt","zwang","hat gezwungen","B1","i-a-u"],["stinken","to stink","stinkt","stank","hat gestunken","B1","i-a-u"],["empfinden","to feel, sense","empfindet","empfand","hat empfunden","B2","i-a-u"],
["beginnen","to begin","beginnt","begann","hat begonnen","A1","i-a-o"],["gewinnen","to win","gewinnt","gewann","hat gewonnen","A2","i-a-o"],["schwimmen","to swim","schwimmt","schwamm","ist geschwommen","A1","i-a-o"],["spinnen","to spin; be crazy","spinnt","spann","hat gesponnen","B2","i-a-o"],
["sprechen","to speak","spricht","sprach","hat gesprochen","A1","e-a-o"],["helfen","to help","hilft","half","hat geholfen","A1","e-a-o"],["nehmen","to take","nimmt","nahm","hat genommen","A1","e-a-o"],["treffen","to meet; hit","trifft","traf","hat getroffen","A1","e-a-o"],["sterben","to die","stirbt","starb","ist gestorben","A2","e-a-o"],["brechen","to break; vomit","bricht","brach","hat/ist gebrochen","A2","e-a-o"],["erbrechen","to vomit","erbricht","erbrach","hat erbrochen","B1","e-a-o"],["stechen","to sting, stab","sticht","stach","hat gestochen","B1","e-a-o"],["werfen","to throw","wirft","warf","hat geworfen","A2","e-a-o"],["empfehlen","to recommend","empfiehlt","empfahl","hat empfohlen","A2","e-a-o"],["stehlen","to steal","stiehlt","stahl","hat gestohlen","B1","e-a-o"],["erschrecken","to get a fright ('to frighten' is weak: erschreckte, hat erschreckt)","erschrickt","erschrak","ist erschrocken","B1","e-a-o"],["gelten","to be valid","gilt","galt","hat gegolten","B1","e-a-o"],["verderben","to spoil","verdirbt","verdarb","ist/hat verdorben","B2","e-a-o"],["sich bewerben","to apply","bewirbt sich","bewarb sich","hat sich beworben","B1","e-a-o"],["unterbrechen","to interrupt","unterbricht","unterbrach","hat unterbrochen","B1","e-a-o"],
["essen","to eat","isst","aß","hat gegessen","A1","e-a-e"],["geben","to give","gibt","gab","hat gegeben","A1","e-a-e"],["sehen","to see","sieht","sah","hat gesehen","A1","e-a-e"],["lesen","to read","liest","las","hat gelesen","A1","e-a-e"],["vergessen","to forget","vergisst","vergaß","hat vergessen","A1","e-a-e"],["messen","to measure","misst","maß","hat gemessen","A2","e-a-e"],["treten","to step, kick","tritt","trat","hat/ist getreten","B1","e-a-e"],["geschehen","to happen","geschieht","geschah","ist geschehen","B1","e-a-e"],["bitten","to ask, request","bittet","bat","hat gebeten","A2","e-a-e"],["sitzen","to sit","sitzt","saß","hat gesessen","A1","e-a-e"],["liegen","to lie (position)","liegt","lag","hat gelegen","A1","e-a-e"],["fressen","to eat (animals), devour","frisst","fraß","hat gefressen","B1","e-a-e"],["genesen","to recover","genest","genas","ist genesen","C1","e-a-e"],
["fahren","to drive, go","fährt","fuhr","ist gefahren","A1","a-u-a"],["tragen","to carry; wear","trägt","trug","hat getragen","A1","a-u-a"],["schlagen","to hit, beat","schlägt","schlug","hat geschlagen","A2","a-u-a"],["waschen","to wash","wäscht","wusch","hat gewaschen","A1","a-u-a"],["wachsen","to grow","wächst","wuchs","ist gewachsen","A2","a-u-a"],["laden","to load","lädt","lud","hat geladen","B1","a-u-a"],["einladen","to invite","lädt ein","lud ein","hat eingeladen","A1","a-u-a"],["graben","to dig","gräbt","grub","hat gegraben","B1","a-u-a"],["schaffen","to create (strong; 'to manage' is weak: schaffte, geschafft)","schafft","schuf","hat geschaffen","B2","a-u-a"],["erfahren","to learn, experience","erfährt","erfuhr","hat erfahren","B1","a-u-a"],["vertragen","to tolerate","verträgt","vertrug","hat vertragen","B1","a-u-a"],
["schlafen","to sleep","schläft","schlief","hat geschlafen","A1","a-ie-a"],["fallen","to fall","fällt","fiel","ist gefallen","A2","a-ie-a"],["halten","to hold; stop","hält","hielt","hat gehalten","A2","a-ie-a"],["lassen","to let, leave","lässt","ließ","hat gelassen","A2","a-ie-a"],["raten","to advise; guess","rät","riet","hat geraten","B1","a-ie-a"],["laufen","to run, walk","läuft","lief","ist gelaufen","A1","red"],["rufen","to call","ruft","rief","hat gerufen","A2","red"],["anrufen","to phone","ruft an","rief an","hat angerufen","A1","red"],["heißen","to be called","heißt","hieß","hat geheißen","A1","red"],["stoßen","to push, bump","stößt","stieß","hat/ist gestoßen","B1","red"],["blasen","to blow","bläst","blies","hat geblasen","B2","a-ie-a"],["braten","to roast, fry","brät","briet","hat gebraten","B1","a-ie-a"],["fangen","to catch","fängt","fing","hat gefangen","A2","red"],["anfangen","to begin","fängt an","fing an","hat angefangen","A1","red"],["hängen","to hang (intransitive; transitive is weak: hängte, gehängt)","hängt","hing","hat gehangen","A2","red"],["behalten","to keep","behält","behielt","hat behalten","B1","a-ie-a"],["erhalten","to receive","erhält","erhielt","hat erhalten","B1","a-ie-a"],["verlassen","to leave","verlässt","verließ","hat verlassen","B1","a-ie-a"],["entlassen","to discharge","entlässt","entließ","hat entlassen","B1","a-ie-a"],
["können","can","kann","konnte","hat gekonnt","A1","modal"],["müssen","must","muss","musste","hat gemusst","A1","modal"],["dürfen","may","darf","durfte","hat gedurft","A1","modal"],["wollen","to want","will","wollte","hat gewollt","A1","modal"],["sollen","to be supposed to, shall","soll","sollte","hat gesollt","A1","modal"],["mögen","to like","mag","mochte","hat gemocht","A1","modal"],
["aufstehen","to get up","steht auf","stand auf","ist aufgestanden","A1","x"],["verstehen","to understand","versteht","verstand","hat verstanden","A1","x"],["entstehen","to arise","entsteht","entstand","ist entstanden","B1","x"],["bestehen","to exist; pass","besteht","bestand","hat bestanden","B1","x"],["vergehen","to pass (time)","vergeht","verging","ist vergangen","B1","x"],["ausziehen","to undress (hat); move out (ist)","zieht aus","zog aus","hat/ist ausgezogen","A2","ie-o-o"],["umziehen","to move house","zieht um","zog um","ist umgezogen","A2","ie-o-o"],["abnehmen","to lose weight; take (blood)","nimmt ab","nahm ab","hat abgenommen","A2","e-a-o"],["zunehmen","to gain weight; increase","nimmt zu","nahm zu","hat zugenommen","A2","e-a-o"],["einnehmen","to take (medicine)","nimmt ein","nahm ein","hat eingenommen","A2","e-a-o"],["aufnehmen","to admit; record","nimmt auf","nahm auf","hat aufgenommen","B1","e-a-o"],["auftreten","to occur","tritt auf","trat auf","ist aufgetreten","B1","e-a-e"],["eintreten","to enter; occur","tritt ein","trat ein","ist eingetreten","B1","e-a-e"],["zurückgehen","to go back; decrease","geht zurück","ging zurück","ist zurückgegangen","B1","x"],["nachlassen","to subside","lässt nach","ließ nach","hat nachgelassen","B2","a-ie-a"],["einschlafen","to fall asleep","schläft ein","schlief ein","ist eingeschlafen","A2","a-ie-a"],["ansehen","to look at","sieht an","sah an","hat angesehen","A2","e-a-e"],["aussehen","to look (appear)","sieht aus","sah aus","hat ausgesehen","A2","e-a-e"],["vorliegen","to be present (findings)","liegt vor","lag vor","hat vorgelegen","B2","e-a-e"],["sich befinden","to be located","befindet sich","befand sich","hat sich befunden","B1","i-a-u"],["sich übergeben","to vomit","übergibt sich","übergab sich","hat sich übergeben","B1","e-a-e"],["sich verhalten","to behave","verhält sich","verhielt sich","hat sich verhalten","B2","a-ie-a"],["sich unterziehen","to undergo","unterzieht sich","unterzog sich","hat sich unterzogen","C1","ie-o-o"],["erleiden","to suffer (an event)","erleidet","erlitt","hat erlitten","B2","ei-i-i"],["zuweisen","to refer, assign","weist zu","wies zu","hat zugewiesen","B2","ei-ie-ie"],["verschieben","to postpone","verschiebt","verschob","hat verschoben","B1","ie-o-o"],["betragen","to amount to","beträgt","betrug","hat betragen","B1","a-u-a"],["ergeben","to result in","ergibt","ergab","hat ergeben","B2","e-a-e"],["enthalten","to contain","enthält","enthielt","hat enthalten","B1","a-ie-a"]];
const STARK_GRP={x:"Die ganz Unregelmäßigen",misch:"Mischverben: Vokalwechsel + -te (brachte, gebracht)","ei-ie-ie":"ei – ie – ie (bleiben, blieb, geblieben)","ei-i-i":"ei – i – i (schneiden, schnitt, geschnitten)","ie-o-o":"ie – o – o (fliegen, flog, geflogen)","i-a-u":"i – a – u (finden, fand, gefunden)","i-a-o":"i – a – o (beginnen, begann, begonnen)","e-a-o":"e – a – o (sprechen, sprach, gesprochen)","e-a-e":"e/i/ie – a – e (geben, gab, gegeben · sitzen, saß, gesessen · liegen, lag, gelegen)","e-o-o":"e/ü – o – o (heben, hob, gehoben · lügen, log, gelogen)",red:"Präteritum mit ie/i, Partizip mit dem Stammvokal des Infinitivs (laufen, lief, gelaufen · fangen, fing, gefangen · hängen, hing, gehangen)","a-u-a":"a – u – a (fahren, fuhr, gefahren)","a-ie-a":"a – ie – a (schlafen, schlief, geschlafen)","o-a-o":"o – a – o (kommen, kam, gekommen)",modal:"Modalverben (mit Infinitiv: hat … können/müssen, nicht gekonnt/gemusst)"};

// ===== Mephisto 12.9 · Hören für den Anfang: ten new A1–A2 listening pieces (clinic and daily life in Heidelberg).
const HOEREN3=[
{id:"h41",kind:"gespraech",level:1,week:1,title:"An der Anmeldung",situation:"Sie hören ein Gespräch an der Anmeldung der Notaufnahme.",
 script:[{who:"Pflegerin",text:"Guten Tag. Wie heißen Sie, bitte?"},{who:"Patient",text:"Guten Tag. Ich heiße Peter Schmitt. Schmitt mit zwei T."},{who:"Pflegerin",text:"Danke, Herr Schmitt. Wann sind Sie geboren?"},{who:"Patient",text:"Am zwölften Mai neunzehnhundertsechzig."},{who:"Pflegerin",text:"Haben Sie Ihre Versichertenkarte dabei?"},{who:"Patient",text:"Ja, hier bitte."},{who:"Pflegerin",text:"Danke. Bitte nehmen Sie im Wartezimmer Platz. Wir rufen Sie auf."}],
 questions:[{q:"Wie schreibt man den Namen des Patienten?",kind:"mc",opts:["Schmidt","Schmitt","Schmied"],answer:1},{q:"Der Patient ist im Mai geboren.",kind:"rf",opts:[],answer:"r"},{q:"Was soll der Patient jetzt tun?",kind:"mc",opts:["Nach Hause gehen","Im Wartezimmer warten","Zum Arzt gehen"],answer:1}],
 phrases:[["Wie heißen Sie?","What is your name?"],["Wann sind Sie geboren?","When were you born?"],["die Versichertenkarte","health insurance card"],["Platz nehmen","to take a seat"],["Wir rufen Sie auf.","We will call you."]],trap:"Schmitt with tt, not Schmidt; the date: day first, then month.",words:46},
{id:"h42",kind:"gespraech",level:1,week:2,title:"Wo tut es weh?",situation:"Ein Arzt spricht mit einer Patientin.",
 script:[{who:"Arzt",text:"Guten Morgen, Frau Kaya. Was fehlt Ihnen?"},{who:"Patientin",text:"Ich habe Bauchschmerzen."},{who:"Arzt",text:"Wo genau tut es weh? Zeigen Sie mal."},{who:"Patientin",text:"Hier, rechts unten."},{who:"Arzt",text:"Seit wann haben Sie die Schmerzen?"},{who:"Patientin",text:"Seit gestern Abend."},{who:"Arzt",text:"Haben Sie auch Fieber?"},{who:"Patientin",text:"Ja, achtunddreißig Komma fünf."}],
 questions:[{q:"Wo hat die Patientin Schmerzen?",kind:"mc",opts:["Im Kopf","Im Bauch, rechts unten","Im Rücken"],answer:1},{q:"Die Schmerzen sind seit heute Morgen da.",kind:"rf",opts:[],answer:"f"},{q:"Wie hoch ist das Fieber?",kind:"mc",opts:["37,5","38,5","39,5"],answer:1}],
 phrases:[["Was fehlt Ihnen?","What is the matter?"],["Wo tut es weh?","Where does it hurt?"],["rechts unten","lower right"],["Seit wann?","Since when?"],["seit gestern Abend","since last night"]],trap:"achtunddreißig Komma fünf = 38.5; gestern Abend, not heute Morgen.",words:38},
{id:"h43",kind:"durchsage",level:1,week:3,title:"Im Wartezimmer",situation:"Sie sitzen im Wartezimmer und hören Aufrufe.",
 script:[{who:"Ansage",text:"Herr Yilmaz, bitte in Zimmer drei. Herr Yilmaz, Zimmer drei."},{who:"Ansage",text:"Frau Becker, bitte zur Blutabnahme ins Labor. Das Labor ist im ersten Stock, links."},{who:"Ansage",text:"Familie Hoffmann, bitte kommen Sie zum Röntgen. Das Röntgen ist im Erdgeschoss, Zimmer zwölf."}],
 questions:[{q:"Wohin geht Herr Yilmaz?",kind:"mc",opts:["In Zimmer zwei","In Zimmer drei","Ins Labor"],answer:1},{q:"Das Labor ist im ersten Stock.",kind:"rf",opts:[],answer:"r"},{q:"Wo ist das Röntgen?",kind:"mc",opts:["Im Erdgeschoss, Zimmer 12","Im ersten Stock, Zimmer 2","Im Keller, Zimmer 20"],answer:0}],
 phrases:[["bitte in Zimmer drei","to room three, please"],["die Blutabnahme","blood draw"],["im ersten Stock","one floor up (UK first floor, US second floor)"],["im Erdgeschoss","on the ground floor"],["links / rechts","left / right"]],trap:"zwei / drei and zwölf / zwanzig sound close; Erdgeschoss is the floor at street level.",words:38},
{id:"h44",kind:"telefon",level:1,week:4,title:"Einen Termin machen",situation:"Sie rufen in einer Hausarztpraxis an.",
 script:[{who:"Praxis",text:"Praxis Doktor Lang, guten Tag."},{who:"Anrufer",text:"Guten Tag, mein Name ist Ismail. Ich möchte bitte einen Termin."},{who:"Praxis",text:"Waren Sie schon einmal bei uns?"},{who:"Anrufer",text:"Nein, ich bin neu in Heidelberg."},{who:"Praxis",text:"Kein Problem. Geht es am Donnerstag um halb zehn?"},{who:"Anrufer",text:"Donnerstag, halb zehn. Ja, das passt."},{who:"Praxis",text:"Gut. Bringen Sie bitte Ihre Versichertenkarte mit. Auf Wiederhören."}],
 questions:[{q:"Wann ist der Termin?",kind:"mc",opts:["Dienstag, 10:30","Donnerstag, 9:30","Donnerstag, 10:30"],answer:1},{q:"Der Anrufer war schon einmal in der Praxis.",kind:"rf",opts:[],answer:"f"},{q:"Was soll er mitbringen?",kind:"mc",opts:["Den Pass","Die Versichertenkarte","Ein Rezept"],answer:1}],
 phrases:[["Ich möchte bitte einen Termin.","I would like an appointment, please."],["Geht es am Donnerstag?","Is Thursday possible?"],["Das passt.","That works."],["mitbringen","to bring along"],["Auf Wiederhören","Goodbye (on the phone)"]],trap:"halb zehn is 9:30, not 10:30; Dienstag and Donnerstag sound similar.",words:52},
{id:"h45",kind:"gespraech",level:1,week:5,title:"In der Bäckerei",situation:"Sie stehen morgens in einer Bäckerei in der Altstadt.",
 script:[{who:"Verkäuferin",text:"Guten Morgen! Was darf es sein?"},{who:"Kunde",text:"Guten Morgen. Ich hätte gern zwei Brötchen und eine Brezel."},{who:"Verkäuferin",text:"Gern. Sonst noch etwas?"},{who:"Kunde",text:"Ja, einen Kaffee zum Mitnehmen, bitte."},{who:"Verkäuferin",text:"Mit Milch und Zucker?"},{who:"Kunde",text:"Nur mit Milch."},{who:"Verkäuferin",text:"Das macht vier Euro achtzig."},{who:"Kunde",text:"Hier sind fünf Euro. Stimmt so."}],
 questions:[{q:"Was kauft der Kunde?",kind:"mc",opts:["Zwei Brezeln und ein Brötchen","Zwei Brötchen und eine Brezel","Drei Brötchen"],answer:1},{q:"Er trinkt den Kaffee mit Zucker.",kind:"rf",opts:[],answer:"f"},{q:"Wie viel kostet alles?",kind:"mc",opts:["4,18 €","4,80 €","8,40 €"],answer:1}],
 phrases:[["Was darf es sein?","What would you like?"],["Ich hätte gern …","I would like …"],["Sonst noch etwas?","Anything else?"],["zum Mitnehmen","to take away"],["Stimmt so.","Keep the change."]],trap:"vier Euro achtzig = 4.80; 'Stimmt so' means the rest is a tip.",words:44},
{id:"h46",kind:"gespraech",level:2,week:6,title:"Die Medikamente",situation:"Eine Ärztin fragt einen Patienten nach seinen Medikamenten.",
 script:[{who:"Ärztin",text:"Herr Braun, nehmen Sie regelmäßig Medikamente?"},{who:"Patient",text:"Ja, ich nehme morgens eine Tablette gegen hohen Blutdruck. Ramipril, fünf Milligramm."},{who:"Ärztin",text:"Sonst noch etwas?"},{who:"Patient",text:"Abends nehme ich eine Tablette für das Cholesterin. Und manchmal Ibuprofen, wenn ich Kopfschmerzen habe."},{who:"Ärztin",text:"Haben Sie Allergien?"},{who:"Patient",text:"Ja, ich bin allergisch gegen Penicillin. Davon bekomme ich Ausschlag."}],
 questions:[{q:"Wann nimmt er die Blutdrucktablette?",kind:"mc",opts:["Morgens","Mittags","Abends"],answer:0},{q:"Er nimmt jeden Tag Ibuprofen.",kind:"rf",opts:[],answer:"f"},{q:"Was passiert, wenn er Penicillin nimmt?",kind:"mc",opts:["Er bekommt Luftnot","Er bekommt Ausschlag","Er bekommt Fieber"],answer:1}],
 phrases:[["regelmäßig","regularly"],["eine Tablette gegen hohen Blutdruck","a tablet for high blood pressure"],["manchmal","sometimes"],["allergisch gegen","allergic to"],["der Ausschlag","rash"]],trap:"morgens vs abends; manchmal is not regelmäßig.",words:49},
{id:"h47",kind:"telefon",level:2,week:7,title:"Krankmeldung",situation:"Ein Kollege ruft morgens auf der Station an.",
 script:[{who:"Station",text:"Station drei, Schwester Anna."},{who:"Kollege",text:"Guten Morgen, hier ist Markus. Ich kann heute leider nicht zum Dienst kommen. Ich habe seit gestern Fieber und Halsschmerzen."},{who:"Station",text:"Oh je. Gehst du zum Arzt?"},{who:"Kollege",text:"Ja, ich habe um zehn einen Termin. Ich schicke die Krankmeldung heute Nachmittag."},{who:"Station",text:"Gut. Wie lange bleibst du zu Hause?"},{who:"Kollege",text:"Wahrscheinlich bis Freitag. Am Montag bin ich wieder da."},{who:"Station",text:"Alles klar. Gute Besserung!"}],
 questions:[{q:"Warum kommt Markus nicht?",kind:"mc",opts:["Er hat frei","Er ist krank","Er hat den Bus verpasst"],answer:1},{q:"Er schickt die Krankmeldung am Nachmittag.",kind:"rf",opts:[],answer:"r"},{q:"Wann arbeitet er wieder?",kind:"mc",opts:["Am Freitag","Am Samstag","Am Montag"],answer:2}],
 phrases:[["Ich kann leider nicht kommen.","Unfortunately I can't come."],["die Krankmeldung","sick note"],["wahrscheinlich","probably"],["Ich bin wieder da.","I'll be back."],["Gute Besserung!","Get well soon!"]],trap:"bis Freitag krank, ab Montag wieder da; colleagues say du.",words:63},
{id:"h48",kind:"gespraech",level:2,week:8,title:"Im Bürgeramt",situation:"Sie melden Ihre neue Wohnung an.",
 script:[{who:"Beamtin",text:"Guten Tag. Was kann ich für Sie tun?"},{who:"Kunde",text:"Guten Tag. Ich bin letzte Woche nach Heidelberg gezogen und möchte mich anmelden."},{who:"Beamtin",text:"Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?"},{who:"Kunde",text:"Den Pass habe ich. Und was ist das Zweite?"},{who:"Beamtin",text:"Das ist ein Formular von Ihrem Vermieter. Er bestätigt, dass Sie dort wohnen."},{who:"Kunde",text:"Das habe ich leider nicht."},{who:"Beamtin",text:"Dann kommen Sie bitte noch einmal. Sie haben nach dem Einzug zwei Wochen Zeit."}],
 questions:[{q:"Was möchte der Kunde?",kind:"mc",opts:["Einen Pass beantragen","Sich anmelden","Ein Auto anmelden"],answer:1},{q:"Er hat alle Dokumente dabei.",kind:"rf",opts:[],answer:"f"},{q:"Wer füllt die Wohnungsgeberbestätigung aus?",kind:"mc",opts:["Der Arbeitgeber","Der Vermieter","Das Bürgeramt"],answer:1}],
 phrases:[["sich anmelden","to register (one's address)"],["die Wohnungsgeberbestätigung","landlord's confirmation of residence"],["der Vermieter","landlord"],["der Einzug","moving in"],["Sie haben zwei Wochen Zeit.","You have two weeks."]],trap:"Two documents are needed; the deadline counts from moving in.",words:69},
{id:"h49",kind:"durchsage",level:2,week:9,title:"In der Straßenbahn",situation:"Sie fahren mit der Linie 21 zum Klinikum und hören die Durchsagen.",
 script:[{who:"Ansage",text:"Nächster Halt: Bismarckplatz. Umsteigemöglichkeit zu den Linien 5, 22 und 23."},{who:"Fahrer",text:"Liebe Fahrgäste, wegen eines Unfalls fährt diese Bahn heute nicht über die Berliner Straße. Fahrgäste zum Universitätsklinikum steigen bitte am Bismarckplatz in den Bus 32 um."},{who:"Fahrer",text:"Der Bus fährt direkt vor dem Kaufhaus ab. Ihre Fahrkarte bleibt gültig. Wir bitten um Entschuldigung."}],
 questions:[{q:"Warum fährt die Bahn anders?",kind:"mc",opts:["Wegen einer Baustelle","Wegen eines Unfalls","Wegen eines Streiks"],answer:1},{q:"Zum Klinikum nimmt man heute den Bus 32.",kind:"rf",opts:[],answer:"r"},{q:"Muss man eine neue Fahrkarte kaufen?",kind:"mc",opts:["Ja","Nein, die Karte bleibt gültig","Nur im Bus"],answer:1}],
 phrases:[["Nächster Halt","next stop"],["die Umsteigemöglichkeit","connection"],["wegen eines Unfalls","because of an accident"],["gültig","valid"],["Wir bitten um Entschuldigung.","We apologise."]],trap:"Line numbers: the tram is 21, the bus is 32, the connections are 5, 22, 23.",words:53},
{id:"h50",kind:"gespraech",level:2,week:10,title:"Die Entlassung",situation:"Ein Arzt erklärt einer Patientin, was sie zu Hause tun soll.",
 script:[{who:"Arzt",text:"Frau Lehmann, Sie können heute nach Hause gehen. Die Wunde sieht gut aus."},{who:"Patientin",text:"Das freut mich. Was muss ich zu Hause beachten?"},{who:"Arzt",text:"Halten Sie die Wunde trocken und wechseln Sie den Verband jeden zweiten Tag. Duschen dürfen Sie erst ab Freitag."},{who:"Patientin",text:"Und die Fäden?"},{who:"Arzt",text:"Die zieht Ihr Hausarzt in zehn Tagen. Wenn die Wunde rot wird oder Sie Fieber bekommen, kommen Sie bitte sofort wieder."},{who:"Patientin",text:"In Ordnung. Vielen Dank, Herr Doktor."}],
 questions:[{q:"Wie oft soll sie den Verband wechseln?",kind:"mc",opts:["Jeden Tag","Jeden zweiten Tag","Einmal pro Woche"],answer:1},{q:"Sie darf heute schon duschen.",kind:"rf",opts:[],answer:"f"},{q:"Wer zieht die Fäden?",kind:"mc",opts:["Der Hausarzt","Der Chirurg","Die Patientin selbst"],answer:0}],
 phrases:[["Was muss ich beachten?","What do I need to keep in mind?"],["den Verband wechseln","to change the dressing"],["jeden zweiten Tag","every other day"],["die Fäden ziehen","to remove the stitches"],["sofort wiederkommen","to come back at once"]],trap:"erst ab Freitag = not before Friday; in zehn Tagen, by the Hausarzt.",words:71}];

// ===== Mephisto 12.10 · Die Wette: the story gets a human stake (Bett vier), a wager (Verweile doch), a turn (Mephisto is kind) and an ending.
// Line types: ["N",de/en text, en?] narrator · ["M",de,en,du?] Mephisto · ["S",de,en] the Shadow · ["X",who,de,en] another voice · ["D",title,de,en] a document · ["C",choiceId] a choice.
const STORY3={
1:{add:[["N","He holds up a lantern. The flame is orange. You put your hand near it. It is cold."],
 ["M","Das ist eine Laterne. Die Laterne ist kalt. Sie fragen: Warum? Später, Doktor. Sie haben noch kein Warum.","This is a lantern. The lantern is cold. You ask: why? Later, Doctor. You don't have a 'why' yet."]]},
2:{add:[["M","Der Arzt. Die Ärztin. Das Krankenhaus. Sie sind „der“. Lernen Sie zuerst sich selbst.","Der Arzt. Die Ärztin. Das Krankenhaus. You are 'der'. Learn yourself first."]]},
3:{add:[["N","You look back. Every mistake you made today lies on the path like a crumb of bread. Something small and dark bends down and picks them up, one by one."],
 ["S","Ich nehme das Brot. Ich nehme jeden Fehler. Ich habe eine Tasche. Sie ist schon schwer.","I take the bread. I take every mistake. I have a bag. It is already heavy."]]},
6:{add:[["N","Far away a church bell strikes. The witch counts with it, backwards."],
 ["M","Hören Sie die Glocke? Zählen Sie. Wie spät ist es? … Falsch gezählt ist auch gezählt. Aber nicht in der Notaufnahme.","Hear the bell? Count. What time is it? … Counting wrong is still counting. But not in the emergency department."]]},
7:{add:[["N","The tale is all questions. So ask him one."],["C","q7"]]},
9:{add:[["M","Ich habe zwei Kaffee bestellt. Ich habe beide getrunken. Der zweite war für Sie. Aber Sie haben zu lange nach dem Dativ gesucht.","I ordered two coffees. I drank both. The second was for you. But you took too long looking for the dative."]]},
10:{add:[["N","The rabbi wrote one word on the Golem's forehead. Mephisto looks at yours."],
 ["M","Auf seiner Stirn steht ein Wort. Auf Ihrer Stirn steht auch eins: „Anfänger“. Ich habe es selbst geschrieben. Wischen Sie es weg – Buchstabe für Buchstabe.","There is a word on his forehead. There is one on yours too: 'beginner'. I wrote it myself. Wipe it off — letter by letter."]]},
12:{add:[["N","In the Golden Lane, house number 22, a thin man with large ears writes all night. In the morning he goes to the insurance office."],
 ["M","Er hat nachts geschrieben und am Tag gearbeitet. Wie Sie. Er hat auch geklagt. Aber er hat auf Deutsch geklagt.","He wrote at night and worked by day. Like you. He complained too. But he complained in German."]]},
14:{add:[["M","Formular 66-6: Antrag auf Rückgabe der Seele. Haben Sie Ihren Pass mitgebracht? Ihre Meldebescheinigung? Ihre Seele? Ach nein. Die habe ja ich.","Form 66-6: application for return of the soul. Did you bring your passport? Your registration certificate? Your soul? Ah, no. I have that."],
 ["S","Ich habe eine Nummer gezogen. Ich warte auch. Meine Nummer ist deine Nummer.","I took a number. I am waiting too. My number is your number."]]},
20:{add:[["S","Er bietet dir das Du an, weil man seine Beute duzt. Ich habe dich immer geduzt.","He offers you the du because one says du to one's prey. I have always said du to you."]]},
21:{add:[["N","Zwischen zwei Büchern steckte ein Blatt, das nicht zum Pakt gehörte. Es war älter als der Pakt. Darauf stand eine Wette, und dein Name stand nicht darin – nur das Wort „der Mensch“.","Between two books there was a sheet that did not belong to the pact. It was older than the pact. On it stood a wager, and your name was not in it — only the words 'der Mensch'."],
 ["N","Du hast immer geglaubt, dass er gewinnt, wenn du scheiterst. Das stand dort nicht. Dort stand: Er gewinnt, wenn du zufrieden bist.","You always believed that he wins if you fail. That was not what it said. It said: he wins if you are satisfied."],
 ["M","Sie haben es gelesen. Gut. Dann wissen Sie jetzt, wie ich gewinne. Nicht, wenn Sie durchfallen. Wenn Sie sagen: „Es reicht. Verweile doch, du bist so schön.“","You've read it. Good. Then you know how I win. Not if you fail. If you say: 'That's enough. Stay, you are so beautiful.'","Du hast es gelesen. Gut. Dann weißt du jetzt, wie ich gewinne. Nicht, wenn du durchfällst. Wenn du sagst: „Es reicht. Verweile doch, du bist so schön.“"],
 ["M","Warum ich Sie trotzdem jeden Tag weitertreibe? Das ist eine gute Frage. Stellen Sie sie mir in neunzehn Kapiteln noch einmal.","Why I still drive you on every day? Good question. Ask me again in nineteen chapters.","Warum ich dich trotzdem jeden Tag weitertreibe? Das ist eine gute Frage. Stell sie mir in neunzehn Kapiteln noch einmal."]]},
22:{add:[["M","Sie wurde untersucht, verurteilt und vergessen. Niemand hat sie gefragt. Wenn Sie eine Patientin im Passiv beschreiben, dann denken Sie daran, dass sie im Aktiv leidet.","She was examined, sentenced and forgotten. Nobody asked her. When you describe a patient in the passive, remember that she suffers in the active.","Sie wurde untersucht, verurteilt und vergessen. Niemand hat sie gefragt. Wenn du eine Patientin im Passiv beschreibst, dann denk daran, dass sie im Aktiv leidet."],
 ["N","Er sah aus, als hätte er das nicht sagen wollen.","He looked as if he had not meant to say that."]]},
23:{add:[["N","An diesem Abend war er freundlich. Er rückte dir den Stuhl zurecht. Es war das Unheimlichste, was er je getan hatte.","That evening he was kind. He pulled out the chair for you. It was the most uncanny thing he had ever done."],
 ["M","Sie verstehen den Bäcker, den Busfahrer und die Nachbarin. Wozu brauchen Sie noch den Konjunktiv? Bleiben Sie hier. Es ist warm. Ich würde aufhören, Sie zu beleidigen.","You understand the baker, the bus driver and the neighbour. What do you still need the subjunctive for? Stay here. It's warm. I would stop insulting you.","Du verstehst den Bäcker, den Busfahrer und die Nachbarin. Wozu brauchst du noch den Konjunktiv? Bleib hier. Es ist warm. Ich würde aufhören, dich zu beleidigen."],
 ["S","Wenn ich du wäre, würde ich bleiben. Aber ich bin du – und ich weiß nicht mehr, ob ich bleiben will.","If I were you, I would stay. But I am you — and I no longer know whether I want to stay."],["C","v23"]]},
25:{add:[["N","Im Kabarett „Zur letzten Instanz“ steht ein Conférencier im Frack auf der Bühne. Du kennst die Stimme.","In the cabaret 'Zur letzten Instanz' a master of ceremonies in tails stands on the stage. You know the voice."],
 ["M","Meine Damen und Herren, sowohl die Lebenden als auch die Toten: Heute Abend sehen Sie einen Mann, der nicht nur Arzt ist, sondern auch glaubt, er könne Deutsch.","Ladies and gentlemen, both the living and the dead: tonight you will see a man who is not only a doctor but also believes he can speak German."]]},
26:{add:[["N","Caligari öffnet den Schrank. Der Schlafwandler, dessen Augen seit dreiundzwanzig Jahren geschlossen sind, schlägt sie auf und sagt jedem die Zukunft voraus.","Caligari opens the cabinet. The sleepwalker, whose eyes have been closed for twenty-three years, opens them and tells everyone their future."],
 ["X","Cesare","Sie fragen, wie lange Sie noch lernen müssen? Bis zum Morgengrauen der Prüfung.","You ask how much longer you must study? Until the dawn of the exam."]]},
28:{add:[["N","Für dieses Kapitel löscht er die Laterne. Wer nichts sieht, hört besser.","For this chapter he puts out the lantern. Whoever sees nothing hears better."],
 ["M","Augen zu. Die brauchen Sie hier nicht. Der Sandmann nimmt sie ohnehin.","Eyes shut. You don't need them here. The Sandman takes them anyway.","Augen zu. Die brauchst du hier nicht. Der Sandmann nimmt sie ohnehin."]]},
29:{add:[["N","In der Kanzlei liegt eine Akte offen auf dem Tisch. Sie trägt deinen Namen.","In the chancery a file lies open on the table. It bears your name."],
 ["D","Akte · streng vertraulich","Betreff: {NAME}, Arzt. Zustand nach Paktschluss. Bei fortgesetzter Lernbereitschaft ist mit einer vollständigen Rückgabe der Seele zu rechnen. Eine Verwertung des Unterzeichneten ist nicht vorgesehen. Um strikte Geheimhaltung gegenüber dem Betroffenen wird gebeten.\n\nEr darf das nie lesen. – M.","Re: {NAME}, physician. Status after conclusion of the pact. Given continued willingness to learn, a complete return of the soul is to be expected. No use of the undersigned is intended. Strict secrecy towards the person concerned is requested.\n\nNote in the margin, handwritten: He must never read this. — M."],
 ["M","Das ist eine Fälschung. Unterstehen Sie sich, mich für anständig zu halten.","That is a forgery. Don't you dare think me decent.","Das ist eine Fälschung. Untersteh dich, mich für anständig zu halten."]]},
31:{add:[["N","Mitten im Satz flüsterte jemand hinter dir, bevor du den Fehler machen konntest.","In the middle of the sentence someone whispered behind you, before you could make the mistake."],
 ["S","Vorsicht: „wegen“ verlangt den Genitiv. – Das habe ich nicht gesagt. Man behauptet nur, ich hätte es gesagt.","Careful: 'wegen' takes the genitive. — I did not say that. People merely claim I said it."]]},
32:{add:[["X","Dr. Caligari","Hier sind die Lösungen, Herr Doktor, sämtliche. Sie brauchen lediglich zu unterschreiben – diesmal bei mir.","Here are the answers, Doctor, all of them. You need only sign — this time with me."],
 ["M","Bei mir hat er bereits unterschrieben. Ich teile nicht. Und er schummelt nicht – dafür habe ich ihn zu gründlich gequält.","He has already signed with me. I don't share. And he doesn't cheat — I've tormented him too thoroughly for that."]]},
33:{add:[["N","Auf dem Tisch liegt, säuberlich eröffnet, dein erstes Jahr in dieser Sprache: jeder falsche Artikel freipräpariert, jede verrutschte Endung mit einer Nadel beschriftet.","On the table, neatly opened, lies your first year in this language: every wrong article dissected free, every slipped ending labelled with a pin."],
 ["M","Erheben Sie den Befund. In Fachsprache. Es handelt sich um Ihren eigenen Leichnam – da darf man gründlich sein.","Report the findings. In technical language. The cadaver is your own — one may be thorough.","Erhebe den Befund. In Fachsprache. Es handelt sich um deinen eigenen Leichnam – da darf man gründlich sein."]]},
34:{add:[["N","Die Schauspielpatientin stellt sich vor. Sie heißt Margarete Brandt, einundsiebzig Jahre alt. Du hast diesen Namen schon einmal gelesen, in einer Chronik, unter dem Jahr 1772.","The simulated patient introduces herself. Her name is Margarete Brandt, seventy-one years old. You have read this name before, in a chronicle, under the year 1772."],
 ["M","Zufall. Ich arbeite nie mit Zufällen.","Coincidence. I never work with coincidences."]]},
37:{add:[["N","Auf dem Brocken tanzen sie alle: die Hexe, verkohlt und vergnügt; der Golem, dem ein Buchstabe fehlt; der Pudel; Caligari in der Zwangsjacke. Sie grüßen dich wie einen alten Bekannten.","On the Brocken they are all dancing: the witch, charred and cheerful; the golem, missing one letter; the poodle; Caligari in a straitjacket. They greet you like an old acquaintance."],
 ["M","Bleiben Sie doch beim Tanz. Dort unten wartet nichts als ein Kerker und eine Prüfung.","Do stay for the dance. Down there nothing awaits but a dungeon and an exam.","Bleib doch beim Tanz. Dort unten wartet nichts als ein Kerker und eine Prüfung."],
 ["N","Im Nebel über dem Gipfel stand eine riesige Gestalt mit einem Lichtkranz um den Kopf. Du hobst den Arm. Sie hob ihn auch.","In the fog above the summit stood a giant figure with a ring of light around its head. You raised your arm. It raised its arm too."],
 ["S","Das bin ich. So groß war ich nur, solange du mich nicht angesehen hast.","That is me. I was only that big as long as you did not look at me."]]},
39:{add:[["N","Im Kerker stellte der Schatten eine Tasche vor dich hin.","In the dungeon the shadow set a bag down in front of you."],
 ["S","Ich habe sie alle aufgehoben, seit dem Wald. Zähl nach. Es sind weniger, als du befürchtet hast – und keiner davon ist zweimal dabei.","I picked them all up, since the forest. Count them. There are fewer than you feared — and none of them is in there twice."]]},
40:{open:[["N","Vor der Tür des Prüfungsraums. Drei Stühle hinter einem Tisch, ein vierter davor. Der vierte ist für dich.","Outside the door of the examination room. Three chairs behind a table, a fourth in front of it. The fourth is for you."],
 ["M","Ich darf nicht mit hinein. Hausverbot, seit 1808. Alles, was ich Ihnen beibringen konnte, tragen Sie bei sich. Der Rest ist Ihr Deutsch. Ihres – nicht meines.","I'm not allowed in with you. Banned from the premises since 1808. Everything I could teach you, you carry with you. The rest is your German. Yours — not mine.","Ich darf nicht mit hinein. Hausverbot, seit 1808. Alles, was ich dir beibringen konnte, trägst du bei dir. Der Rest ist dein Deutsch. Deines – nicht meines."],
 ["S","Wir treten gemeinsam ein. Du sprichst, und ich schweige. Zum ersten Mal habe ich keine Angst.","We enter together. You speak, and I stay silent. For the first time I am not afraid."]],
 finale:[["N","Drei Ärztinnen und Ärzte am Tisch. Eine Stunde. Am Ende sagt jemand ein einziges Wort: „Bestanden.“ Die Tür fällt ins Schloss, und im Flur steht er, die Laterne in der Hand.","Three doctors at the table. One hour. At the end someone says a single word: 'Passed.' The door falls shut, and in the corridor he stands, the lantern in his hand."],
 ["M","Kapitel vierzig. Ich habe keine Beleidigung vorbereitet. Das ist mir seit 1808 nicht passiert.","Chapter forty. I haven't prepared an insult. That hasn't happened to me since 1808."],
 ["M","Bestanden. Ich habe an der Tür gelauscht. Sie haben „aufgrund“ mit dem Genitiv gebraucht. Mir wäre beinahe warm ums Herz geworden, wenn ich eines hätte.","Passed. I listened at the door. You used 'aufgrund' with the genitive. It nearly warmed my heart, if I had one.","Bestanden. Ich habe an der Tür gelauscht. Du hast „aufgrund“ mit dem Genitiv gebraucht. Mir wäre beinahe warm ums Herz geworden, wenn ich eines hätte."],
 ["M","Und nun zum Geschäft. Sie sind am Ziel. Sagen Sie den Satz, Doktor: „Verweile doch, du bist so schön.“ Sagen Sie, dass es genug ist. Dann gehört sie mir – so steht es in der älteren Wette.","And now to business. You have arrived. Say the sentence, Doctor: 'Stay, you are so beautiful.' Say that it is enough. Then it is mine — so says the older wager.","Und nun zum Geschäft. Du bist am Ziel. Sag den Satz, Doktor: „Verweile doch, du bist so schön.“ Sag, dass es genug ist. Dann gehört sie mir – so steht es in der älteren Wette."],
 ["C","v40"],
 ["M","„Noch nicht.“ Zwei Wörter – und ich verliere eine Wette, die ich seit dem Schwarzwald zu verlieren hoffe.","'Not yet.' Two words — and I lose a wager I have been hoping to lose since the Black Forest."],
 ["N","Er hält den Pakt über eine Kerze. Zwischen den Zeilen erscheint in brauner Schrift ein sechster Paragraf.","He holds the pact over a candle. Between the lines, in brown writing, a sixth clause appears."],
 ["D","§ 6","Der Unterzeichnete kann jederzeit gehen. Er muss nur fragen.","The undersigned may leave at any time. He only has to ask."],
 ["M","Sie haben nie gefragt. Vierzig Kapitel lang. Wissen Sie, wie selten das ist?","You never asked. For forty chapters. Do you know how rare that is?","Du hast nie gefragt. Vierzig Kapitel lang. Weißt du, wie selten das ist?"],
 ["M","Im Wald wollten Sie wissen, warum ich Ihnen helfe. Damals fehlte Ihnen der Wortschatz für die Antwort. Jetzt nicht mehr: Wer immer strebend sich bemüht, den kann ich nicht behalten. Ich habe es oft genug versucht. Man gewöhnt sich ans Verlieren. Am Ende beginnt man, es zu wollen.","In the forest you wanted to know why I help you. Back then you lacked the vocabulary for the answer. Not any more: whoever strives with all his might, him I cannot keep. I have tried often enough. One gets used to losing. In the end one begins to want it.","Im Wald wolltest du wissen, warum ich dir helfe. Damals fehlte dir der Wortschatz für die Antwort. Jetzt nicht mehr: Wer immer strebend sich bemüht, den kann ich nicht behalten. Ich habe es oft genug versucht. Man gewöhnt sich ans Verlieren. Am Ende beginnt man, es zu wollen."],
 ["SIG"],
 ["M","Hier. Ihre Unterschrift. Das Blut ist längst trocken. Und nehmen Sie die Laterne mit. In der Notaufnahme ist es um drei Uhr nachts dunkler als im Schwarzwald. – Erzählen Sie es niemandem.","Here. Your signature. The blood dried long ago. And take the lantern with you. In the emergency department at three in the morning it is darker than in the Black Forest. — Tell no one.","Hier. Deine Unterschrift. Das Blut ist längst trocken. Und nimm die Laterne mit. In der Notaufnahme ist es um drei Uhr nachts dunkler als im Schwarzwald. – Erzähl es niemandem."],
 ["N","Die Laterne ist warm.","The lantern is warm."],
 ["S","Ich bin leiser geworden. Ich bin nicht fort. Wenn du müde bist, hörst du mich wieder. Dann sag es mir auf Deutsch.","I have grown quieter. I am not gone. When you are tired, you will hear me again. Then say it to me in German."],
 ["N","Heidelberg. Notaufnahme. 03:07 Uhr. Bett vier. „Guten Morgen, Frau Brandt. Ich bin Doktor {LAST}. Was führt Sie zu uns?“ Sie erzählt, und du verstehst jedes Wort. Auf dem Tisch im Dienstzimmer steht eine zweite Tasse Kaffee. Sie ist voll. Vor der Schiebetür sitzt ein schwarzer Pudel und tut, als gehöre er zu niemandem.","Heidelberg. Emergency department. 03:07. Bed four. 'Good morning, Mrs Brandt. I am Doctor {LAST}. What brings you to us?' She tells you, and you understand every word. On the table in the staff room stands a second cup of coffee. It is full. Outside the sliding door sits a black poodle, pretending to belong to no one."]]}};
// choices: id → {q?, opts:[[label, lines, effect?]]}; effect: "egg:verweile", "debt", "again" (return to the choice), "secretFace"
const CHOICES={
 q7:{opts:[["„Wer sind Sie?“",[["M","Ich bin Ihr Lehrer. Das ist schlimmer als der Teufel.","I am your teacher. That is worse than the devil."]]],
  ["„Warum helfen Sie mir?“",[["M","Falsche Frage. Nächste Frage.","Wrong question. Next question."],["N","It is the first time he does not have an answer ready."]]]]},
 v23:{opts:[["„Verweile doch.“",[["N","Es wird dunkel. Die Laterne geht aus. Eine tiefe Glocke schlägt, einmal.","It grows dark. The lantern goes out. A deep bell strikes, once."],["M","… Nein. So billig will ich Sie nicht. Noch einmal.","… No. I don't want you that cheaply. Again.","… Nein. So billig will ich dich nicht. Noch einmal."]],"dark,egg:verweile,again"],
  ["„Weiter.“",[["M","Schade. Für mich.","A pity. For me."]],"secretFace"]]},
 v40:{opts:[["„Verweile doch.“",[["N","Es wird dunkel. Eine tiefe Glocke schlägt, einmal.","It grows dark. A deep bell strikes, once."],["M","… Nein. Diesen Satz schenke ich Ihnen nicht. Noch einmal.","… No. I won't make you a gift of that sentence. Again.","… Nein. Diesen Satz schenke ich dir nicht. Noch einmal."]],"dark,again"],
  ["„Noch nicht. Morgen habe ich Frühdienst.“",[],""]]}};
// Bett vier: the four scenes now live in BETX (v2/x_s7_scn.js, owner s7) and are copied into BETT by the loader v2/c_s2.js. Kept as an empty object so every reader of BETT still works.
const BETT={};
// Milestone lines [Sie, English, du]
const MILE={
 seal1:["Ihr erstes Siegel. Heben Sie es gut auf. Die meisten meiner Kunden besitzen nur eins.","Your first seal. Keep it safe. Most of my clients own only one.",""],
 half:["Halbzeit. Ab hier ist der Rückweg genauso lang wie der Weg. Ich habe das so gebaut.","Half-time. From here the way back is as long as the way on. I built it that way.",""],
 back3:["Drei Tage. Ich habe Ihren Stuhl warm gehalten. Mit Feuer.","Three days. I kept your chair warm. With fire.","Drei Tage. Ich habe deinen Stuhl warm gehalten. Mit Feuer."],
 back7:["Eine Woche. Ihr Schatten hat hier gesessen und Ihre Karten gelernt. Er ist jetzt besser als Sie.","A week. Your shadow sat here and learned your cards. He is better than you now.","Eine Woche. Dein Schatten hat hier gesessen und deine Karten gelernt. Er ist jetzt besser als du."],
 back30:["(leise) Ich dachte, Sie kommen nicht wieder. – Vergessen Sie das. Zehn Karten. Sofort.","(quietly) I thought you weren't coming back. — Forget that. Ten cards. Now.","(leise) Ich dachte, du kommst nicht wieder. – Vergiss das. Zehn Karten. Sofort."],
 lore1:["Sie lesen freiwillig? Vorsicht. So hat es bei Faust auch angefangen.","Reading of your own free will? Careful. That's how it started with Faust.","Du liest freiwillig? Vorsicht. So hat es bei Faust auch angefangen."],
 boss1:["Sie haben eine alte Frau in einen Ofen gestoßen. Für einen Artikel. Jetzt verstehen wir uns.","You pushed an old woman into an oven. For an article. Now we understand each other.",""],
 soul100:["Hundert Prozent. Sie gehört wieder Ihnen. Sie war ohnehin schwer zu lagern.","A hundred per cent. It's yours again. It was hard to store anyway.","Hundert Prozent. Sie gehört wieder dir. Sie war ohnehin schwer zu lagern."],
 sealI:["Ein Siegel mehr. Der Wald wird nicht heller. Sie sehen nur besser.","One more seal. The forest gets no brighter. You just see better.",""],
 sealII:["Besiegelt. Der Kellner hat genickt. Das ist in Prag eine Auszeichnung.","Sealed. The waiter nodded. In Prague that's a decoration.",""],
 sealIII:["Besiegelt. Faust hätte an dieser Stelle längst einen Trank verlangt.","Sealed. Faust would have demanded a potion long before this point.",""],
 sealIV:["Abgestempelt, abgelegt, aktenkundig. Auch das ist ein Siegel.","Stamped, filed, on record. That too is a seal.",""],
 sealV:["Noch ein Siegel. Es sind nicht mehr viele. Ich zähle sie ungern.","Another seal. Not many left. I don't like counting them.",""]};
const MEPH_AFTER=[["Sie schon wieder? Sie schulden mir nichts mehr. … Setzen Sie sich trotzdem.","You again? You owe me nothing now. … Sit down anyway.","Du schon wieder? Du schuldest mir nichts mehr. … Setz dich trotzdem."],
 ["Ich habe keine Handhabe mehr gegen Sie. Lernen Sie also freiwillig. Das ist das Schlimmste.","I have no hold on you any more. So study of your own free will. That's the worst of it.","Ich habe keine Handhabe mehr gegen dich. Lern also freiwillig. Das ist das Schlimmste."],
 ["Der Nächste hat heute unterschrieben. Er ist schlechter als Sie damals. Fast.","The next one signed today. He's worse than you were. Almost.","Der Nächste hat heute unterschrieben. Er ist schlechter als du damals. Fast."],
 ["Die Laterne brennt bei Ihnen besser als bei mir. Ärgerlich, aber aktenkundig.","The lantern burns better with you than with me. Annoying, but on record.","Die Laterne brennt bei dir besser als bei mir. Ärgerlich, aber aktenkundig."],
 ["Der Revisor hat meine Akte geschlossen. Ich habe sie wieder aufgeschlagen. Man braucht ein Hobby.","The auditor closed my file. I opened it again. One needs a hobby.","Der Revisor hat meine Akte geschlossen. Ich habe sie wieder aufgeschlagen. Man braucht ein Hobby."],
 ["Ich stehe vor der Schiebetür, nicht dahinter. Daran hat sich nichts geändert. Gehen Sie hinein; ich warte hier.","I stand outside the sliding door, not behind it. That has not changed. Go in; I shall wait here.","Ich stehe vor der Schiebetür, nicht dahinter. Daran hat sich nichts geändert. Geh hinein; ich warte hier."],
 ["Zehn Karten. Nicht, weil Sie müssen, sondern weil Sie sonst vergessen, wie man „aufgrund“ verwendet.","Ten cards. Not because you must, but because otherwise you forget how to use 'aufgrund'.","Zehn Karten. Nicht, weil du musst, sondern weil du sonst vergisst, wie man „aufgrund“ verwendet."],
 ["Die zweite Tasse steht noch da, und sie ist voll. Niemand außer Ihnen rührt sie an.","The second cup is still there, and it is full. Nobody but you touches it.","Die zweite Tasse steht noch da, und sie ist voll. Niemand außer dir rührt sie an."],
 ["Wenn Sie heute Nachtdienst hatten: Schlafen Sie. Die Wörter sind morgen auch noch da. Ich leider auch.","If you were on night shift today: sleep. The words will still be here tomorrow. So shall I, unfortunately.","Wenn du heute Nachtdienst hattest: Schlaf. Die Wörter sind morgen auch noch da. Ich leider auch."],
 ["Eine Wette verloren, einen Kollegen gewonnen. Ich habe schon schlechtere Geschäfte gemacht.","Lost a wager, gained a colleague. I have made worse deals.","Eine Wette verloren, einen Kollegen gewonnen. Ich habe schon schlechtere Geschäfte gemacht."]];
// Chronik pages remapped to the chapters they belong to
const LORE_CH={hunger:3,hameln:4,rotkaeppchen:5,hexenhammer:8,kafka:14,totentanz:15,pudel:18,volksbuch:19,auerbach:20,paracelsus:21,caligari:26,virchow:28,vesal:33,semmelweis:36,brocken:37,hauser:39,roentgen:38};

// ===== Mephisto 13.0 · Grammatik, letzte Lücken, Teil 1 (A1–B1): g57–g64
GRAMMAR3.push(
{id:"g57",level:"A1",week:3,title:"Verben mit Vokalwechsel",sub:"ich spreche, du sprichst — the vowel changes for du and er/sie/es",
 body:`<p>Some strong verbs change their stem vowel in the present tense — but <b>only for du and er/sie/es</b>. ich, wir, ihr, sie/Sie stay regular.</p>
<table><tr><th>e → i</th><td class="de">sprechen: du spr<b>i</b>chst, er spr<b>i</b>cht · helfen: du h<b>i</b>lfst, er h<b>i</b>lft · essen: du <b>i</b>sst, er <b>i</b>sst · geben: du g<b>i</b>bst, er g<b>i</b>bt · nehmen: du n<b>imm</b>st, er n<b>imm</b>t</td></tr>
<tr><th>e → ie</th><td class="de">sehen: du s<b>ie</b>hst, er s<b>ie</b>ht · lesen: du l<b>ie</b>st, er l<b>ie</b>st</td></tr>
<tr><th>a → ä</th><td class="de">schlafen: du schl<b>ä</b>fst, er schl<b>ä</b>ft · fahren: du f<b>ä</b>hrst, er f<b>ä</b>hrt · tragen: du tr<b>ä</b>gst, er tr<b>ä</b>gt · fallen: er f<b>ä</b>llt</td></tr>
<tr><th>au → äu</th><td class="de">laufen: du l<b>äu</b>fst, er l<b>äu</b>ft</td></tr></table>
<p>The same change appears in the <b>du-imperative</b> for e → i/ie (no ending): <span class="de">Sprich! Nimm! Gib! Lies! Iss! Hilf!</span> — but never for a → ä: <span class="de">Schlaf! Fahr!</span></p>
<p>At the bedside: <span class="de">Der Patient <b>isst</b> nichts. Sie <b>nimmt</b> drei Tabletten. Er <b>schläft</b> schlecht. Was <b>sehen</b> Sie? — with Sie nothing changes.</span></p>
<p><b>Trap:</b> wissen is irregular in the whole singular: <span class="de">ich weiß, du weißt, er weiß.</span> And werden: <span class="de">du wirst, er wird.</span></p>`,
 merke:"Vowel change only for du and er/sie/es. e → i/ie, a → ä.",
 ex:[{type:"mc",q:"Der Patient ___ kein Deutsch.",o:["sprecht","spricht","sprichst"],a:1,why:"sprechen: e → i for er: spricht."},
 {type:"mc",q:"___ du die Tabletten jeden Tag?",o:["Nehmst","Nimmst","Nehmt"],a:1,why:"nehmen: du nimmst (e → i, and hm → mm)."},
 {type:"mc",q:"Wir ___ heute nach Heidelberg.",o:["fahren","fähren","fährt"],a:0,why:"The vowel changes only for du and er/sie/es; wir stays regular."},
 {type:"mc",q:"Die Patientin ___ seit drei Nächten schlecht.",o:["schlaft","schläft","schlafen"],a:1,why:"schlafen: a → ä: sie schläft."},
 {type:"gap",q:"Er ___ (essen) kein Fleisch.",a:"isst",alt:[],why:"essen: e → i: er isst."},
 {type:"gap",q:"Was ___ (lesen) du da?",a:"liest",alt:[],why:"lesen: e → ie: du liest."},
 {type:"fix",q:"Sie gebt dem Kind einen Saft.",a:"Sie gibt dem Kind einen Saft.",err:"gebt",why:"geben: e → i: sie gibt."},
 {type:"transform",q:"Du-Imperativ: (nehmen) die Tablette mit Wasser!",a:"Nimm die Tablette mit Wasser!",alt:["Nimm die Tablette mit Wasser."],why:"The imperative keeps the e → i change and has no ending: Nimm!"}]},
{id:"g58",level:"A1",week:5,title:"Kein Artikel: der Nullartikel",sub:"Ich bin Arzt. Ich habe Fieber. — when German uses no article at all",
 body:`<p>English often says <i>a</i> where German says nothing.</p>
<table><tr><th>Professions, nationalities, religions after sein/werden/als</th><td class="de">Ich bin Arzt. Sie wird Krankenschwester. Er arbeitet als Pfleger. Sie ist Deutsche.</td></tr>
<tr><th>Unspecified amounts and materials</th><td class="de">Ich trinke Kaffee. Brauchen Sie Wasser? Der Ring ist aus Gold.</td></tr>
<tr><th>Plural of ein</th><td class="de">Ich habe eine Frage. → Ich habe Fragen.</td></tr>
<tr><th>Many fixed phrases with haben</th><td class="de">Hunger, Durst, Angst, Zeit, Fieber, Schmerzen, Husten, Durchfall, Glück haben</td></tr>
<tr><th>Cities, most countries, names</th><td class="de">Ich wohne in Heidelberg. Ich komme aus Deutschland. <span class="muted">but: aus <b>der</b> Schweiz, aus <b>der</b> Türkei, aus <b>den</b> USA</span></td></tr>
<tr><th>Headlines, lists, notes</th><td class="de">Patient wach, ansprechbar. Verdacht auf Pneumonie.</td></tr></table>
<p>With an adjective the article comes back for professions: <span class="de">Sie ist <b>eine gute</b> Ärztin.</span></p>
<p>Negation of a noun without article is <b>kein</b>: <span class="de">Ich habe <b>kein</b> Fieber. Ich habe <b>keine</b> Schmerzen. Ich bin <b>kein</b> Arzt.</span></p>
<p><b>Trap:</b> English "I have a fever / a headache / a cough" → <span class="de">Ich habe Fieber / Kopfschmerzen / Husten.</span> No <i>ein</i>.</p>`,
 merke:"Ich bin Arzt. Ich habe Fieber. No article for professions and for symptoms with haben.",
 ex:[{type:"mc",q:"Ich bin ___ Arzt.",o:["ein","der","— (nichts)"],a:2,why:"Professions after sein take no article."},
 {type:"mc",q:"Der Patient hat ___ Fieber.",o:["ein","— (nichts)","einen"],a:1,why:"Fieber haben: fixed phrase without article."},
 {type:"mc",q:"Sie ist ___ sehr gute Ärztin.",o:["— (nichts)","eine","ein"],a:1,why:"With an adjective the article returns: eine sehr gute Ärztin."},
 {type:"mc",q:"Er kommt aus ___ Türkei.",o:["— (nichts)","der","die"],a:1,why:"die Türkei is one of the few countries with an article; aus + dative: aus der Türkei."},
 {type:"gap",q:"Ich habe ___ Schmerzen. (negation)",a:"keine",alt:[],why:"No article → negate with kein-: keine Schmerzen (plural)."},
 {type:"fix",q:"Ich habe einen Husten und ein Fieber.",a:"Ich habe Husten und Fieber.",err:"einen",why:"Symptoms with haben stand without article."},
 {type:"order",words:["Mein","Bruder","arbeitet","als","Pfleger","."],a:"Mein Bruder arbeitet als Pfleger.",why:"als + profession, no article."},
 {type:"transform",q:"Plural: Ich habe eine Frage.",a:"Ich habe Fragen.",alt:[],why:"The plural of ein is no article."}]},
{id:"g59",level:"A2",week:9,title:"stellen oder stehen? Die Positionsverben",sub:"legen/liegen, stellen/stehen, setzen/sitzen, hängen — motion or position",
 body:`<p>German separates <b>putting</b> something somewhere (motion → accusative, regular verb) from <b>being</b> there (position → dative, strong verb).</p>
<table><tr><th>Wohin? + Akkusativ (regular)</th><th>Wo? + Dativ (strong)</th></tr>
<tr><td class="de"><b>stellen</b> — stellte, hat gestellt<br>Ich stelle die Flasche auf <b>den</b> Tisch.</td><td class="de"><b>stehen</b> — stand, hat gestanden<br>Die Flasche steht auf <b>dem</b> Tisch.</td></tr>
<tr><td class="de"><b>legen</b> — legte, hat gelegt<br>Legen Sie sich auf <b>die</b> Liege.</td><td class="de"><b>liegen</b> — lag, hat gelegen<br>Der Patient liegt auf <b>der</b> Liege.</td></tr>
<tr><td class="de"><b>setzen</b> — setzte, hat gesetzt<br>Setzen Sie sich auf <b>den</b> Stuhl.</td><td class="de"><b>sitzen</b> — saß, hat gesessen<br>Sie sitzt auf <b>dem</b> Stuhl.</td></tr>
<tr><td class="de"><b>hängen</b> — hängte, hat gehängt<br>Ich hänge die Infusion an <b>den</b> Ständer.</td><td class="de"><b>hängen</b> — hing, hat gehangen<br>Die Infusion hängt an <b>dem</b> Ständer.</td></tr></table>
<p><b>stellen/stehen</b> for things that stand upright (bottles, shoes, a bed on its legs); <b>legen/liegen</b> for things lying flat (a book, a patient, a file). Plates <i>stehen</i> on the table; a letter <i>liegt</i> there.</p>
<p>In the examination room: <span class="de">Legen Sie sich bitte hin. · Setzen Sie sich bitte. · Stellen Sie sich bitte gerade hin. · Bleiben Sie liegen / sitzen / stehen.</span></p>
<p><b>Trap:</b> the person who moves needs <b>sich</b>: <span class="de">Ich setze <b>mich</b>.</span> — then <span class="de">Ich sitze.</span></p>`,
 merke:"stellen, legen, setzen = Wohin? + Akk. · stehen, liegen, sitzen = Wo? + Dat.",
 ex:[{type:"mc",q:"Der Patient ___ im Bett.",o:["legt","liegt","liegen"],a:1,why:"Position, no movement: liegen."},
 {type:"mc",q:"Bitte ___ Sie sich auf die Liege.",o:["liegen","legen","lagen"],a:1,why:"Movement onto the couch: sich legen + accusative."},
 {type:"mc",q:"Die Akte liegt auf ___ Schreibtisch.",o:["den","dem","der"],a:1,why:"liegen = position → dative: auf dem Schreibtisch."},
 {type:"mc",q:"Ich habe das Glas auf den Tisch ___.",o:["gestanden","gestellt","gestellen"],a:1,why:"stellen is regular: hat gestellt."},
 {type:"gap",q:"Sie hat zwei Stunden im Wartezimmer ___ (sitzen).",a:"gesessen",alt:[],why:"sitzen — saß — hat gesessen."},
 {type:"gap",q:"Stellen Sie die Schuhe bitte unter ___ Stuhl. (der Stuhl)",a:"den",alt:[],why:"stellen = motion → accusative: unter den Stuhl."},
 {type:"fix",q:"Ich sitze mich auf den Stuhl.",a:"Ich setze mich auf den Stuhl.",err:"sitze",why:"Movement with sich: sich setzen."},
 {type:"transform",q:"Ergebnis mit „liegen“: Ich lege das Buch auf den Tisch. → Das Buch …",a:"Das Buch liegt auf dem Tisch.",alt:[],why:"Position → liegen + dative."}]},
{id:"g60",level:"A2",week:10,title:"hin und her",sub:"Kommen Sie herein! Gehen Sie hinaus! — direction seen from the speaker",
 body:`<p><b>her</b> = towards the speaker. <b>hin</b> = away from the speaker.</p>
<table><tr><th>her- (to me)</th><td class="de">Kommen Sie <b>her</b>! · Kommen Sie <b>herein</b>! · Geben Sie es <b>her</b>. · Wo kommen Sie <b>her</b>?</td></tr>
<tr><th>hin- (away from me)</th><td class="de">Gehen Sie <b>hin</b>! · Gehen Sie <b>hinein</b>. · Legen Sie sich <b>hin</b>. · Wo gehen Sie <b>hin</b>?</td></tr></table>
<p>They combine with prepositions: <span class="de">herein/hinein (in), heraus/hinaus (out), herauf/hinauf (up), herunter/hinunter (down), herüber/hinüber (across).</span></p>
<p>In speech everybody shortens both to <b>r-</b>: <span class="de"><b>rein, raus, rauf, runter, rüber</b></span> — <span class="de">Kommen Sie rein! Gehen Sie mal raus.</span></p>
<p><b>Wohin?</b> and <b>Woher?</b> can split: <span class="de">Wohin gehen Sie? = Wo gehen Sie hin? · Woher kommen Sie? = Wo kommen Sie her?</span></p>
<p>Fixed verbs worth knowing: <span class="de">sich hinlegen, sich hinsetzen, hinfallen (to fall down), hinschauen, herkommen, hergeben, herausfinden (to find out), herstellen (to produce).</span></p>
<p>At the bedside: <span class="de">Atmen Sie tief <b>ein</b> und <b>aus</b>. · Schauen Sie mal <b>her</b>. · Ist Ihnen etwas <b>heruntergefallen</b>? · Wie sind Sie <b>hingefallen</b>?</span></p>
<p><b>hin und her</b> = back and forth: <span class="de">Er läuft hin und her.</span></p>`,
 merke:"her = to me, hin = away from me. Spoken: rein, raus, rauf, runter.",
 ex:[{type:"mc",q:"(Der Arzt ist im Zimmer.) „Kommen Sie bitte ___!“",o:["hinein","herein","hinaus"],a:1,why:"Towards the speaker: herein."},
 {type:"mc",q:"„Wo gehen Sie ___?“",o:["her","hin","herein"],a:1,why:"Wohin? = Wo … hin?"},
 {type:"mc",q:"„Legen Sie sich bitte ___.“",o:["her","hin","herein"],a:1,why:"sich hinlegen = to lie down."},
 {type:"mc",q:"Umgangssprache für „herunter/hinunter“:",o:["rauf","runter","rüber"],a:1,why:"runter = herunter / hinunter."},
 {type:"gap",q:"Wo kommen Sie ___? — Aus Riad.",a:"her",alt:[],why:"Woher? = Wo … her?"},
 {type:"gap",q:"Die Patientin ist auf der Treppe ___gefallen.",a:"hin",alt:[],why:"hinfallen = to fall down."},
 {type:"order",words:["Kommen","Sie","bitte","herein","."],a:"Kommen Sie bitte herein.",why:"herein stands at the end like a separable prefix."},
 {type:"transform",q:"Ein Wort: Wo gehst du hin?",a:"Wohin gehst du?",alt:[],why:"Wo … hin = Wohin."}]},
{id:"g61",level:"A2",week:11,title:"Zahlen in der Klinik",sub:"Dosis, Uhrzeit, Werte — saying numbers the way the ward says them",
 body:`<p>A number said wrongly is a medication error. These are the patterns.</p>
<table><tr><th>Decimal comma</th><td class="de">37,5 °C = siebenunddreißig <b>Komma</b> fünf Grad · 0,5 mg = null Komma fünf Milligramm · 1.000 = eintausend (the point separates thousands)</td></tr>
<tr><th>Units are singular</th><td class="de">fünf Milligramm, zwei Liter, zehn Milliliter, 80 Kilo, drei Prozent — <span class="muted">but feminine units take a plural: zwei Tabletten, drei Tassen, zwei Ampullen</span></td></tr>
<tr><th>Fractions</th><td class="de">½ = ein halb / eine halbe Tablette · ¼ = ein Viertel · ¾ = drei Viertel · 1½ = anderthalb / eineinhalb</td></tr>
<tr><th>Frequency</th><td class="de">einmal, zweimal, dreimal täglich · alle acht Stunden · jeden zweiten Tag · morgens, mittags, abends, zur Nacht</td></tr>
<tr><th>Dosing scheme</th><td class="de">1–0–1 = „eins – null – eins“ (morgens – mittags – abends) · bei Bedarf (b. B.) · nüchtern · zu den Mahlzeiten</td></tr>
<tr><th>Blood pressure</th><td class="de">120/80 = hundertzwanzig <b>zu</b> achtzig</td></tr>
<tr><th>Clock on the ward</th><td class="de">14:30 = vierzehn Uhr dreißig (official, always in the hospital) · halb drei (private)</td></tr>
<tr><th>Dates</th><td class="de">am 3. Mai = am dritten Mai · geboren am 12.11.1957 = am zwölften Elften neunzehnhundertsiebenundfünfzig</td></tr>
<tr><th>Age</th><td class="de">ein 60-jähriger Patient = ein sechzigjähriger Patient</td></tr></table>
<p>Remember that the units come before the tens: <span class="de">45 = fünf<b>und</b>vierzig.</span> When you take a phone number or a lab value, repeat it digit by digit: <span class="de">„Kalium vier Komma zwei – richtig?“</span></p>
<p><b>Trap:</b> <span class="de">eine halbe Tablette</span> (adjective, declined) but <span class="de">anderthalb Tabletten</span> (not declined, plural).</p>`,
 merke:"Komma, not Punkt. Units stay singular: fünf Milligramm. 120/80 = hundertzwanzig zu achtzig.",
 ex:[{type:"mc",q:"37,8 °C spricht man:",o:["siebenunddreißig Punkt acht","siebenunddreißig Komma acht","siebenunddreißig und acht"],a:1,why:"German uses a decimal comma: Komma."},
 {type:"mc",q:"Blutdruck 140/90:",o:["hundertvierzig zu neunzig","hundertvierzig durch neunzig","hundertvierzig auf neunzig"],a:0,why:"Blood pressure is read with zu."},
 {type:"mc",q:"Der Patient bekommt fünf ___ Morphin.",o:["Milligramme","Milligramm","Milligrammen"],a:1,why:"Masculine and neuter units stay singular after numbers."},
 {type:"mc",q:"„1–0–1“ bedeutet:",o:["morgens und abends je eine","einmal täglich","alle zwei Stunden"],a:0,why:"morgens – mittags – abends: one, none, one."},
 {type:"gap",q:"Nehmen Sie die Tablette ___ täglich. (3×)",a:"dreimal",alt:["drei Mal"],why:"dreimal täglich = three times a day."},
 {type:"gap",q:"Nehmen Sie morgens eine ___ Tablette. (½)",a:"halbe",alt:[],why:"halb is an adjective here: eine halbe Tablette."},
 {type:"fix",q:"Die Patientin wiegt 62 Kilos.",a:"Die Patientin wiegt 62 Kilo.",err:"Kilos",why:"Units of measure stay singular: 62 Kilo."},
 {type:"transform",q:"Offizielle Uhrzeit in Worten: 16:45 Uhr",a:"sechzehn Uhr fünfundvierzig",alt:["16 Uhr 45"],why:"The hospital uses the 24-hour clock: sechzehn Uhr fünfundvierzig."}]},
{id:"g62",level:"B1",week:17,title:"Adjektive als Nomen",sub:"der Kranke, eine Verwandte, das Wichtigste — nouns that keep adjective endings",
 body:`<p>An adjective or participle can become a noun. It gets a <b>capital letter</b> — and keeps its <b>adjective ending</b>.</p>
<table><tr><th></th><th>with der/die</th><th>with ein/eine</th></tr>
<tr><th>masculine</th><td class="de">der Krank<b>e</b></td><td class="de">ein Krank<b>er</b></td></tr>
<tr><th>feminine</th><td class="de">die Krank<b>e</b></td><td class="de">eine Krank<b>e</b></td></tr>
<tr><th>plural</th><td class="de">die Krank<b>en</b></td><td class="de">Krank<b>e</b> / viele Krank<b>e</b></td></tr>
<tr><th>dative</th><td class="de">dem Krank<b>en</b>, der Krank<b>en</b></td><td class="de">einem Krank<b>en</b></td></tr></table>
<p>The hospital is full of them: <span class="de">der/die Kranke, Verletzte, Tote, Angehörige (relative), Verwandte, Bekannte, Erwachsene, Jugendliche, Angestellte, Vorgesetzte (superior), Betroffene, Reisende, Deutsche; der Beamte (but: die Beamtin).</span></p>
<p><b>Neuter</b> forms are abstract: <span class="de">das Gute, das Wichtigste, das Neue.</span> After <b>etwas, nichts, viel, wenig</b> the ending is <b>-es</b>: <span class="de">etwas Neu<b>es</b>, nichts Besonder<b>es</b>, viel Gut<b>es</b>.</span> After <b>alles</b> it is <b>-e</b>: <span class="de">alles Gut<b>e</b>!</span></p>
<p>Clinical: <span class="de">Die Angehörigen warten draußen. · Ein Verletzter wurde eingeliefert. · Gibt es etwas Neues? · Der Befund zeigt nichts Auffälliges.</span></p>
<p><b>Trap:</b> <span class="de">ein Deutscher, eine Deutsche, die Deutschen</span> — the only nationality that works this way.</p>`,
 merke:"Capital letter + adjective ending: der Kranke, ein Kranker. etwas Neues, alles Gute.",
 ex:[{type:"mc",q:"Ein ___ wurde in die Notaufnahme gebracht.",o:["Verletzte","Verletzter","Verletzten"],a:1,why:"ein + masculine nominative: -er."},
 {type:"mc",q:"Die ___ des Patienten warten im Flur.",o:["Angehörige","Angehörigen","Angehöriger"],a:1,why:"Plural with die: -en."},
 {type:"mc",q:"Gibt es etwas ___?",o:["Neue","Neues","neuen"],a:1,why:"After etwas: -es, with capital letter."},
 {type:"mc",q:"Ich wünsche Ihnen alles ___.",o:["Gutes","Gute","Guten"],a:1,why:"After alles: -e."},
 {type:"gap",q:"Ich habe mit dem ___ gesprochen. (der Kranke)",a:"Kranken",alt:[],why:"Dative masculine: dem Kranken."},
 {type:"gap",q:"Das CT zeigt nichts ___. (auffällig)",a:"Auffälliges",alt:[],why:"After nichts: -es and a capital letter."},
 {type:"fix",q:"Meine Frau ist eine Deutscher.",a:"Meine Frau ist eine Deutsche.",err:"Deutscher",why:"Feminine after eine: -e."},
 {type:"transform",q:"Als Nomen: ein Mann, der verletzt ist → ein …",a:"ein Verletzter",alt:["Ein Verletzter"],why:"Participle as noun, ein + masculine: -er."}]},
{id:"g63",level:"B1",week:18,title:"Trennbar oder nicht?",sub:"be-, ver-, zer- never split; um-, über-, unter-, durch- can do both",
 body:`<p>You know separable verbs (<span class="de">aufstehen: ich stehe auf</span>). The other half of the system:</p>
<p><b>Never separable</b> — unstressed prefix, <b>no ge-</b> in the participle: <span class="de"><b>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</b></span><br>
<span class="de">Ich be<b>han</b>dle den Patienten. — hat behandelt · verschreiben — hat verschrieben · entlassen — hat entlassen · empfehlen — hat empfohlen · erklären — hat erklärt · zerstören — hat zerstört</span></p>
<p><b>Always separable</b> — stressed prefix, <b>ge-</b> goes in the middle: <span class="de">ab-, an-, auf-, aus-, bei-, ein-, mit-, nach-, vor-, zu-, zurück-, weiter-</span><br>
<span class="de"><b>auf</b>nehmen — hat auf<b>ge</b>nommen · <b>ein</b>weisen — hat ein<b>ge</b>wiesen · <b>ab</b>hören — hat ab<b>ge</b>hört</span></p>
<p><b>Both</b> — <span class="de">durch-, über-, um-, unter-, wider-, wieder-</span>. Stress tells you: stressed prefix = separable and usually literal; unstressed = inseparable and usually figurative.</p>
<table><tr><th>separable (literal)</th><th>inseparable (figurative)</th></tr>
<tr><td class="de"><b>um</b>fahren: Er fährt das Schild <b>um</b>. (knocks it down)</td><td class="de">um<b>fah</b>ren: Er umfährt das Schild. (drives round it)</td></tr>
<tr><td class="de"><b>über</b>setzen: Die Fähre setzt <b>über</b>.</td><td class="de">über<b>set</b>zen: Ich übersetze den Brief. — hat übersetzt</td></tr>
<tr><td class="de"><b>wieder</b>holen: Ich hole es <b>wieder</b>. (fetch back)</td><td class="de">wieder<b>ho</b>len: Wiederholen Sie bitte. — hat wiederholt</td></tr></table>
<p>The clinical ones are almost all <b>inseparable</b>: <span class="de">untersuchen (hat untersucht), überweisen (hat überwiesen), übergeben (to hand over; sich übergeben = to vomit), überleben, unterschreiben, unterbrechen, überprüfen.</span> The exception is <span class="de"><b>durch</b>führen: führt … <b>durch</b>, hat durch<b>ge</b>führt.</span></p>
<p>With <b>zu</b>: separable verbs take it inside (<span class="de">auf<b>zu</b>stehen</span>), inseparable ones in front (<span class="de"><b>zu</b> untersuchen</span>).</p>`,
 merke:"be-, emp-, ent-, er-, ge-, miss-, ver-, zer-: never split, no ge-. untersuchen → hat untersucht.",
 ex:[{type:"mc",q:"Der Arzt hat den Patienten gründlich ___.",o:["untergesucht","untersucht","geuntersucht"],a:1,why:"untersuchen is inseparable: no ge-."},
 {type:"mc",q:"Wir ___ die Operation morgen ___.",o:["führen … durch","durchführen … —","führen durch … —"],a:0,why:"durchführen is separable: führen … durch."},
 {type:"mc",q:"Die Hausärztin hat ihn in die Klinik ___.",o:["übergewiesen","überwiesen","überweist"],a:1,why:"überweisen is inseparable: hat überwiesen."},
 {type:"mc",q:"Welches Verb ist trennbar?",o:["verschreiben","einweisen","entlassen"],a:1,why:"ein- is always separable; ver- and ent- never."},
 {type:"gap",q:"Der Patient wurde gestern ___ (entlassen, Partizip).",a:"entlassen",alt:[],why:"ent- is inseparable; the participle has no ge-: entlassen."},
 {type:"gap",q:"Sie wurde stationär ___ (aufnehmen, Partizip).",a:"aufgenommen",alt:[],why:"Separable: ge- in the middle: aufgenommen."},
 {type:"fix",q:"Ich schreibe das Formular unter.",a:"Ich unterschreibe das Formular.",err:"unter",why:"unterschreiben is inseparable."},
 {type:"transform",q:"Perfekt: Der Patient übergibt sich zweimal.",a:"Der Patient hat sich zweimal übergeben.",alt:[],why:"sich übergeben is inseparable: hat sich übergeben."}]},
{id:"g64",level:"B1",week:20,title:"als ob",sub:"Er tut so, als ob er schliefe — comparing with something unreal",
 body:`<p><b>als ob</b> (= as if) introduces something that only seems to be so. The verb goes to the end and stands in <b>Konjunktiv II</b>.</p>
<p><span class="de">Er sieht aus, <b>als ob</b> er krank <b>wäre</b>. · Sie tut so, <b>als ob</b> sie nichts <b>wüsste</b>. · Es fühlt sich an, <b>als ob</b> jemand auf meiner Brust <b>säße</b>.</span></p>
<p>For most verbs use <b>würde + infinitive</b>: <span class="de">Es klingt, als ob er gleich weinen würde.</span></p>
<p><b>Past:</b> hätte / wäre + participle: <span class="de">Er tut so, als ob er nichts gehört <b>hätte</b>. · Sie sieht aus, als ob sie nicht geschlafen <b>hätte</b>.</span></p>
<p><b>als</b> alone does the same — but then the verb comes <b>directly after als</b>: <span class="de">Er sieht aus, <b>als wäre</b> er krank. · Es fühlt sich an, <b>als säße</b> jemand auf meiner Brust.</span> This form is the elegant written one.</p>
<p><b>als wenn</b> and <b>wie wenn</b> exist too and work like als ob.</p>
<p>Typical openers: <span class="de">Es sieht so aus, als ob … · Er tut so, als ob … · Ich habe das Gefühl, als ob … · Es kommt mir vor, als ob … · Mir ist, als ob …</span></p>
<p>Patients describe symptoms this way all the time: <span class="de">„Es ist, als ob ein Gürtel um meinen Bauch läge.“ · „Als würde mir jemand ein Messer in den Rücken stechen.“</span> Note these phrases word for word — they are diagnostic.</p>
<p>In everyday speech you will also hear the indicative (<span class="de">als ob er krank ist</span>). Understand it; write the Konjunktiv.</p>`,
 merke:"als ob + … + Konjunktiv II am Ende. als + Konjunktiv II direkt danach: als wäre er krank.",
 ex:[{type:"mc",q:"Er sieht aus, als ob er Fieber ___.",o:["hat","hätte","haben"],a:1,why:"als ob + Konjunktiv II: hätte."},
 {type:"mc",q:"Sie tut so, als ___ sie alles.",o:["ob wüsste","wüsste","wüsste ob"],a:1,why:"als without ob: the verb follows directly: als wüsste sie alles."},
 {type:"mc",q:"Es fühlt sich an, als ob mein Herz ___.",o:["stehen bleiben würde","würde stehen bleiben","bleibt stehen würde"],a:0,why:"Verb-final: … stehen bleiben würde."},
 {type:"mc",q:"Vergangenheit: Er tut so, als ob er nichts ___.",o:["gesehen hätte","sah","gesehen hat würde"],a:0,why:"Past unreal comparison: Partizip + hätte."},
 {type:"gap",q:"Es ist, als ob ein Stein auf meiner Brust ___ (liegen).",a:"läge",alt:["liegen würde"],why:"Konjunktiv II of liegen: läge (or liegen würde)."},
 {type:"gap",q:"Sie sehen aus, als ___ Sie nicht geschlafen.",a:"hätten",alt:[],why:"als + verb directly: als hätten Sie nicht geschlafen."},
 {type:"order",words:["Er","tut","so",",","als","ob","er","schliefe","."],a:"Er tut so, als ob er schliefe.",why:"als ob sends the verb to the end."},
 {type:"transform",q:"Ohne „ob“: Es sieht aus, als ob er krank wäre.",a:"Es sieht aus, als wäre er krank.",alt:[],why:"als + Konjunktiv II in second place of the clause."}]}
);

// ===== Mephisto 13.0 · Grammatik, letzte Lücken, Teil 2 (B2–C1): g65–g71
GRAMMAR3.push(
{id:"g65",level:"B2",week:27,title:"Der Ersatzinfinitiv",sub:"Er hat kommen müssen — two infinitives instead of a participle",
 body:`<p>In the perfect tense a <b>modal verb with another verb</b> does not use its participle (gemusst, gekonnt). It uses the <b>infinitive</b> instead — the "substitute infinitive".</p>
<p><span class="de">Er <b>hat</b> operiert werden <b>müssen</b>. · Ich <b>habe</b> nicht schlafen <b>können</b>. · Sie <b>hat</b> das nicht sagen <b>wollen</b>.</span></p>
<p>Alone, the modal keeps its participle: <span class="de">Ich habe es nicht <b>gekonnt</b>. Das habe ich nicht <b>gewollt</b>.</span></p>
<p>The same happens with <b>lassen</b>, and usually with <b>sehen, hören, helfen</b>: <span class="de">Ich habe mich untersuchen <b>lassen</b>. · Sie hat ihn stürzen <b>sehen</b>. · Wir haben ihn rufen <b>hören</b>.</span></p>
<p><b>The one word-order surprise in German:</b> in a subordinate clause, <b>haben</b> does not go to the end. It stands <b>before</b> the two infinitives.</p>
<p><span class="de">…, weil er <b>hat</b> operiert werden müssen. · …, dass ich nicht <b>habe</b> schlafen können. · …, obwohl sie sich <b>hätte</b> untersuchen lassen sollen.</span></p>
<p>That is why everybody prefers the <b>Präteritum</b> of modals: <span class="de">…, weil er operiert werden <b>musste</b>.</span> Shorter, and the verb is where you expect it.</p>
<p>You cannot avoid it in the <b>Konjunktiv II of the past</b> — the form of regret and criticism: <span class="de">Sie <b>hätten</b> früher kommen <b>sollen</b>. · Das <b>hätte</b> man sehen <b>müssen</b>. · Ich <b>hätte</b> es wissen <b>können</b>.</span></p>
<p>Always <b>haben</b>, never sein — even with verbs of motion: <span class="de">Er <b>hat</b> gehen müssen.</span></p>`,
 merke:"hat + Infinitiv + Modalverb im Infinitiv. Im Nebensatz steht haben VOR den Infinitiven.",
 ex:[{type:"mc",q:"Ich habe gestern nicht arbeiten ___.",o:["gekonnt","können","konnte"],a:1,why:"Modal with a second verb in the perfect: Ersatzinfinitiv können."},
 {type:"mc",q:"Das habe ich nicht ___.",o:["wollen","gewollt","wollte"],a:1,why:"The modal stands alone: participle gewollt."},
 {type:"mc",q:"…, weil der Patient ___.",o:["operiert werden müssen hat","hat operiert werden müssen","operiert hat werden müssen"],a:1,why:"With the Ersatzinfinitiv haben stands before the infinitives."},
 {type:"mc",q:"Sie ___ früher kommen sollen.",o:["wären","hätten","würden"],a:1,why:"Modal verbs form the perfect with haben: hätten … sollen."},
 {type:"gap",q:"Ich habe mir den Blutdruck messen ___ (lassen).",a:"lassen",alt:[],why:"lassen + infinitive: Ersatzinfinitiv."},
 {type:"gap",q:"Er sagt, dass er nicht ___ kommen können.",a:"hat",alt:["habe"],why:"haben goes before the double infinitive."},
 {type:"fix",q:"Wir haben den Patienten verlegen gemusst.",a:"Wir haben den Patienten verlegen müssen.",err:"gemusst",why:"With a second verb: müssen, not gemusst."},
 {type:"transform",q:"Perfekt: Sie musste lange warten.",a:"Sie hat lange warten müssen.",alt:[],why:"hat + warten + müssen."}]},
{id:"g66",level:"B2",week:29,title:"Bedingung ohne „wenn“",sub:"Sollten Sie Fieber bekommen, … — the verb-first conditional",
 body:`<p>A condition can start with the <b>verb</b> instead of <i>wenn</i>. The meaning is the same; the tone is more formal.</p>
<table><tr><th>with wenn</th><th>verb first</th></tr>
<tr><td class="de"><b>Wenn</b> Sie Fragen <b>haben</b>, rufen Sie an.</td><td class="de"><b>Haben</b> Sie Fragen, (so) rufen Sie an.</td></tr>
<tr><td class="de">Wenn die Schmerzen zunehmen <b>sollten</b>, …</td><td class="de"><b>Sollten</b> die Schmerzen zunehmen, kommen Sie sofort wieder.</td></tr>
<tr><td class="de">Wenn ich das gewusst <b>hätte</b>, …</td><td class="de"><b>Hätte</b> ich das gewusst, wäre ich früher gekommen.</td></tr>
<tr><td class="de">Wenn er früher gekommen <b>wäre</b>, …</td><td class="de"><b>Wäre</b> er früher gekommen, hätten wir operieren können.</td></tr></table>
<p><b>Sollte(n) …</b> is the politest "if by any chance". It is the standard formula at the end of every discharge talk and every letter: <span class="de">Sollten Sie Fieber bekommen, stellen Sie sich bitte umgehend wieder vor. · Sollten Sie Rückfragen haben, stehen wir gern zur Verfügung.</span></p>
<p>The main clause that follows starts with its verb (the condition fills position 1), often introduced by <b>so</b> or <b>dann</b>.</p>
<p>Other ways to state a condition without wenn:</p>
<ul><li><b>falls</b> (in case): <span class="de">Falls Sie allergisch reagieren, …</span></li>
<li><b>sofern / soweit</b> (provided that): <span class="de">Sofern keine Komplikationen auftreten, …</span></li>
<li><b>bei + Dativ</b> (nominal): <span class="de">Bei Fieber über 38,5 °C … · Bei Bedarf · Bei Verschlechterung sofortige Wiedervorstellung.</span></li>
<li><b>ohne / mit</b>: <span class="de">Ohne Behandlung wäre er gestorben.</span></li>
<li><b>es sei denn</b> (unless): <span class="de">Sie können nach Hause, es sei denn, das Fieber steigt wieder.</span></li>
<li><b>andernfalls / sonst</b> (otherwise)</li></ul>`,
 merke:"Sollten Sie …, + Verb. Hätte ich …, wäre ich … Verb first = wenn.",
 ex:[{type:"mc",q:"___ Sie Fieber bekommen, kommen Sie bitte sofort wieder.",o:["Wenn","Sollten","Falls sollten"],a:1,why:"Verb-first conditional with sollten."},
 {type:"mc",q:"Hätte ich das gewusst, ___ ich früher gekommen.",o:["hätte","wäre","würde"],a:1,why:"kommen takes sein: wäre … gekommen."},
 {type:"mc",q:"Sofern keine Komplikationen ___, wird die Patientin morgen entlassen.",o:["auftreten","treten auf","aufzutreten"],a:0,why:"sofern is a subordinating conjunction: verb at the end."},
 {type:"mc",q:"„___ Verschlechterung sofortige Wiedervorstellung.“",o:["Wenn","Bei","Falls"],a:1,why:"Nominal condition: bei + dative."},
 {type:"gap",q:"___ er früher gekommen, hätten wir ihm helfen können.",a:"Wäre",alt:[],why:"Verb first, Konjunktiv II past: Wäre er … gekommen."},
 {type:"gap",q:"Sie dürfen aufstehen, es sei ___, Ihnen wird schwindelig.",a:"denn",alt:[],why:"es sei denn = unless."},
 {type:"order",words:["Sollten","Sie","Fragen","haben",",","rufen","Sie","uns","an","."],a:"Sollten Sie Fragen haben, rufen Sie uns an.",why:"Condition first with sollten; the main clause starts with its verb."},
 {type:"transform",q:"Ohne „wenn“: Wenn Sie Schmerzen haben, nehmen Sie eine Tablette.",a:"Haben Sie Schmerzen, nehmen Sie eine Tablette.",alt:["Haben Sie Schmerzen, so nehmen Sie eine Tablette.","Haben Sie Schmerzen, dann nehmen Sie eine Tablette.","Sollten Sie Schmerzen haben, nehmen Sie eine Tablette."],why:"Drop wenn and put the verb first."}]},
{id:"g67",level:"B2",week:31,title:"Modalverben umschreiben",sub:"in der Lage sein, verpflichtet sein, es ist erforderlich — the written-German equivalents",
 body:`<p>Reports, consent forms and exam texts avoid plain modal verbs. Every modal has formal paraphrases — B2 and the FSP test them directly.</p>
<table><tr><th>können</th><td class="de">in der Lage sein, zu … · fähig / imstande sein, zu … · die Möglichkeit haben, zu … · es ist möglich, zu … · sich lassen: Das <b>lässt sich</b> behandeln. · -bar: behandel<b>bar</b></td></tr>
<tr><th>müssen</th><td class="de">verpflichtet / gezwungen sein, zu … · es ist notwendig / erforderlich / unerlässlich, zu … · haben + zu: Sie <b>haben</b> nüchtern <b>zu</b> bleiben. · sein + zu: Der Befund <b>ist</b> zu kontrollieren.</td></tr>
<tr><th>nicht müssen</th><td class="de">nicht brauchen … zu: Sie <b>brauchen</b> nicht <b>zu</b> warten. · es ist nicht nötig, zu …</td></tr>
<tr><th>dürfen</th><td class="de">es ist erlaubt / gestattet, zu … · berechtigt sein, zu … · die Erlaubnis haben, zu …</td></tr>
<tr><th>nicht dürfen</th><td class="de">es ist verboten / untersagt, zu … · nicht berechtigt sein, zu …</td></tr>
<tr><th>wollen</th><td class="de">beabsichtigen / vorhaben / planen, zu … · die Absicht haben, zu … · bereit sein, zu …</td></tr>
<tr><th>sollen</th><td class="de">es wird empfohlen / geraten, zu … · es ist ratsam, zu … · den Auftrag haben, zu … · angehalten sein, zu …</td></tr>
<tr><th>möchten</th><td class="de">den Wunsch haben, zu … · Lust haben, zu …</td></tr></table>
<p>All of them take an infinitive with <b>zu</b> — and the comma before it is recommended.</p>
<p><span class="de">Der Patient kann nicht allein aufstehen. → Der Patient <b>ist nicht in der Lage</b>, allein auf<b>zu</b>stehen.</span><br>
<span class="de">Der Arzt muss den Patienten aufklären. → Der Arzt <b>ist verpflichtet</b>, den Patienten auf<b>zu</b>klären.</span><br>
<span class="de">Man darf hier nicht rauchen. → <b>Es ist untersagt</b>, hier <b>zu</b> rauchen.</span></p>
<p><b>Trap:</b> <i>nicht müssen</i> (no need) is not <i>nicht dürfen</i> (forbidden). <span class="de">Sie müssen nicht nüchtern sein</span> = you needn't; <span class="de">Sie dürfen nichts essen</span> = you mustn't.</p>`,
 merke:"können = in der Lage sein, zu … · müssen = verpflichtet sein, zu … · nicht dürfen = es ist untersagt, zu …",
 ex:[{type:"mc",q:"„Der Patient kann nicht schlucken.“ =",o:["Der Patient ist nicht in der Lage zu schlucken.","Der Patient ist nicht verpflichtet zu schlucken.","Der Patient beabsichtigt nicht zu schlucken."],a:0,why:"können = in der Lage sein."},
 {type:"mc",q:"„Es ist untersagt, das Gelände zu verlassen.“ =",o:["Man muss das Gelände nicht verlassen.","Man darf das Gelände nicht verlassen.","Man will das Gelände nicht verlassen."],a:1,why:"untersagt = forbidden = nicht dürfen."},
 {type:"mc",q:"„Sie brauchen nicht zu warten.“ =",o:["Sie dürfen nicht warten.","Sie müssen nicht warten.","Sie können nicht warten."],a:1,why:"nicht brauchen zu = nicht müssen."},
 {type:"mc",q:"„Die Ärztin beabsichtigt, die Dosis zu erhöhen.“ =",o:["Sie soll die Dosis erhöhen.","Sie will die Dosis erhöhen.","Sie darf die Dosis erhöhen."],a:1,why:"beabsichtigen = wollen."},
 {type:"gap",q:"Der Arzt ist ___, den Patienten aufzuklären. (müssen)",a:"verpflichtet",alt:["gezwungen"],why:"müssen = verpflichtet sein, zu …"},
 {type:"gap",q:"Die Erkrankung lässt ___ gut behandeln.",a:"sich",alt:[],why:"sich lassen + infinitive = can be …"},
 {type:"fix",q:"Der Patient ist nicht in der Lage, allein aufstehen.",a:"Der Patient ist nicht in der Lage, allein aufzustehen.",err:"aufstehen",why:"Infinitive with zu; in separable verbs zu goes inside: aufzustehen."},
 {type:"transform",q:"Mit „es ist erforderlich“: Man muss den Blutzucker kontrollieren.",a:"Es ist erforderlich, den Blutzucker zu kontrollieren.",alt:["Es ist erforderlich den Blutzucker zu kontrollieren."],why:"es ist erforderlich, … zu + infinitive."}]},
{id:"g68",level:"B2",week:33,title:"Partizipialsätze",sub:"In der Klinik angekommen, … — a participle instead of a whole clause",
 body:`<p>A participle group can replace a subordinate clause. It has <b>no subject and no conjugated verb</b>; the participle stands at its end. The subject is the subject of the main clause.</p>
<table><tr><th>Partizip II (finished / passive)</th><td class="de"><b>In der Klinik angekommen</b>, klagte der Patient über Luftnot. <span class="muted">(= Nachdem er angekommen war, …)</span><br><b>Von Schmerzen geplagt</b>, konnte sie nicht schlafen. <span class="muted">(= Weil sie … geplagt wurde)</span><br><b>Richtig dosiert</b>, ist das Medikament sicher. <span class="muted">(= Wenn es richtig dosiert wird)</span></td></tr>
<tr><th>Partizip I (at the same time / active)</th><td class="de"><b>Laut um Hilfe rufend</b>, lief er über den Flur. <span class="muted">(= Während er rief)</span><br><b>Auf den Befund wartend</b>, saß sie im Flur.</td></tr></table>
<p>The relation (time, reason, condition, manner) is not stated; the reader infers it. That is why this is a written, compact style — novels, reports, newspapers.</p>
<p>Fixed participle phrases you can simply learn: <span class="de">streng genommen (strictly speaking) · genau genommen · kurz gesagt · offen gesagt · anders ausgedrückt · verglichen mit … · abgesehen von … (apart from) · ausgehend von … (starting from) · bezogen auf … · gemessen an … · angenommen, (dass) … · vorausgesetzt, (dass) …</span></p>
<p>In the Arztbrief: <span class="de">Abgesehen von einer leichten Tachykardie war der Befund unauffällig. · Verglichen mit der Voraufnahme zeigt sich keine Änderung. · Ausgehend von der Anamnese ist eine Pneumonie wahrscheinlich.</span></p>
<p><b>Rule:</b> the hidden subject must be the subject of the main clause. <s class="de">In der Klinik angekommen, untersuchte ihn der Arzt.</s> says the doctor arrived.</p>
<p>The comma is required when the group is announced or taken up by a word, and is always safe; put it.</p>`,
 merke:"Partizip am Ende der Gruppe, kein Subjekt, Komma. Abgesehen von …, verglichen mit …",
 ex:[{type:"mc",q:"„In der Notaufnahme angekommen, verlor der Patient das Bewusstsein.“ =",o:["Bevor er ankam, …","Nachdem er angekommen war, …","Obwohl er ankommt, …"],a:1,why:"Partizip II expresses the finished action."},
 {type:"mc",q:"___ von leichtem Husten geht es ihr gut.",o:["Abgesehen","Absehend","Abgesehend"],a:0,why:"Fixed phrase: abgesehen von + dative."},
 {type:"mc",q:"___ mit dem Vorbefund ist der Tumor kleiner geworden.",o:["Vergleichend","Verglichen","Vergleicht"],a:1,why:"Fixed phrase: verglichen mit …"},
 {type:"mc",q:"Welcher Satz ist korrekt?",o:["Vom Hausarzt überwiesen, untersuchte ich die Patientin.","Vom Hausarzt überwiesen, stellte sich die Patientin bei uns vor.","Vom Hausarzt überwiesen, war die Untersuchung schnell."],a:1,why:"The hidden subject must be the subject of the main clause: the patient was referred."},
 {type:"gap",q:"Streng ___, ist das keine Diagnose, sondern ein Symptom.",a:"genommen",alt:[],why:"streng genommen = strictly speaking."},
 {type:"gap",q:"Laut um Hilfe ___ (rufen), lief sie auf den Flur.",a:"rufend",alt:[],why:"Simultaneous, active: Partizip I rufend."},
 {type:"order",words:["Richtig","dosiert",",","ist","das","Medikament","sicher","."],a:"Richtig dosiert, ist das Medikament sicher.",why:"Participle group first, then the verb of the main clause."},
 {type:"transform",q:"Partizipialsatz: Nachdem er zu Hause angekommen war, legte er sich sofort hin. → Zu Hause …",a:"Zu Hause angekommen, legte er sich sofort hin.",alt:[],why:"Drop conjunction, subject and auxiliary; keep the participle at the end."}]},
{id:"g69",level:"C1",week:35,title:"Präpositionen der Schriftsprache",sub:"aufgrund, infolge, mittels, anhand, gemäß — the prepositions of reports and letters",
 body:`<p>Written medical German replaces small words with heavier prepositions. Most take the <b>genitive</b>.</p>
<table><tr><th>Reason</th><td class="de"><b>aufgrund</b> + G (because of) · <b>infolge</b> + G (as a result of) · <b>angesichts</b> + G (in view of) · <b>mangels</b> + G (for lack of) · <b>dank</b> + G/D (thanks to)</td></tr>
<tr><th>Means</th><td class="de"><b>mittels</b> + G (by means of) · <b>anhand</b> + G (on the basis of, using) · <b>mithilfe</b> + G · <b>kraft</b> + G (by virtue of)</td></tr>
<tr><th>Reference</th><td class="de"><b>hinsichtlich</b> + G · <b>bezüglich</b> + G · <b>betreffs</b> + G (regarding) · <b>in Bezug auf</b> + A · <b>im Hinblick auf</b> + A</td></tr>
<tr><th>Accordance</th><td class="de"><b>gemäß</b> + D · <b>entsprechend</b> + D · <b>laut</b> + G/D (according to) · <b>zufolge</b> + D (placed after: dem Befund zufolge)</td></tr>
<tr><th>Purpose</th><td class="de"><b>zwecks</b> + G · <b>zur</b> + nominalised verb: zur Abklärung · <b>um … willen</b> + G</td></tr>
<tr><th>Time</th><td class="de"><b>binnen</b> + G/D (within) · <b>innerhalb</b> + G · <b>anlässlich</b> + G (on the occasion of) · <b>im Laufe</b> + G · <b>im Rahmen</b> + G (in the course of, as part of)</td></tr>
<tr><th>Contrast / exception</th><td class="de"><b>ungeachtet</b> + G (regardless of) · <b>trotz</b> + G · <b>anstelle</b> + G · <b>abzüglich / zuzüglich</b> + G · <b>seitens</b> + G (on the part of)</td></tr>
<tr><th>Place</th><td class="de"><b>oberhalb, unterhalb, innerhalb, außerhalb, beiderseits, diesseits, jenseits, entlang</b> + G · <b>unweit</b> + G</td></tr></table>
<p><span class="de">Aufgrund <b>des</b> Befund<b>es</b> wurde die Therapie umgestellt. · Die Diagnose wurde mittels <b>einer</b> Biopsie gesichert. · Laut Arztbrief besteht eine Penicillinallergie. · Dem Labor zufolge ist das CRP rückläufig. · Im Rahmen <b>der</b> Aufnahme erfolgte ein EKG. · Zwecks weiterer Abklärung erfolgte die Verlegung.</span></p>
<p><b>Without article</b> the genitive is often invisible, so the dative or <b>von</b> steps in: <span class="de">mangels Beweis<b>en</b> · infolge <b>von</b> Blutungen · laut Befund.</span></p>
<p>Anatomical direction uses the genitive: <span class="de">oberhalb des Knies, unterhalb des Rippenbogens, beiderseits der Wirbelsäule.</span></p>
<p><b>Trap:</b> <b>gemäß</b> and <b>entsprechend</b> take the <b>dative</b>: <span class="de">gemäß <b>den</b> Leitlinien</span>, not <s class="de">gemäß der Leitlinien</s>.</p>`,
 merke:"aufgrund, infolge, mittels, anhand, hinsichtlich + Genitiv · gemäß, entsprechend, zufolge + Dativ.",
 ex:[{type:"mc",q:"___ des Befundes wurde die Therapie geändert.",o:["Aufgrund","Gemäß","Zufolge"],a:0,why:"aufgrund + genitive; gemäß takes the dative, zufolge follows its noun."},
 {type:"mc",q:"Die Behandlung erfolgt gemäß ___ aktuellen Leitlinien.",o:["der","den","die"],a:1,why:"gemäß + dative plural: den Leitlinien."},
 {type:"mc",q:"Dem Laborbericht ___ ist das Kalium normal.",o:["laut","zufolge","gemäß"],a:1,why:"zufolge stands after its dative noun."},
 {type:"mc",q:"Die Diagnose wurde ___ einer Biopsie gesichert.",o:["mittels","mangels","binnen"],a:0,why:"mittels + genitive = by means of."},
 {type:"gap",q:"Der Schmerz sitzt unterhalb ___ rechten Rippenbogens.",a:"des",alt:[],why:"unterhalb + genitive: des Rippenbogens."},
 {type:"gap",q:"Im ___ der Aufnahmeuntersuchung wurde ein EKG geschrieben.",a:"Rahmen",alt:[],why:"im Rahmen + genitive = as part of."},
 {type:"fix",q:"Infolge der Sturz erlitt sie eine Fraktur.",a:"Infolge des Sturzes erlitt sie eine Fraktur.",err:"der",why:"infolge + genitive: des Sturzes."},
 {type:"transform",q:"Mit „trotz“: Obwohl er Fieber hatte, ging er zur Arbeit.",a:"Trotz des Fiebers ging er zur Arbeit.",alt:["Trotz Fieber ging er zur Arbeit.","Trotz Fiebers ging er zur Arbeit."],why:"trotz + genitive replaces the obwohl-clause."}]},
{id:"g70",level:"C1",week:37,title:"Der Arztbrief: die Konventionen",sub:"Wir berichten über … — the fixed architecture and language of the discharge letter",
 body:`<p>The Arztbrief is a genre with rules. In the FSP you write one in about 20 minutes.</p>
<table><tr><th>1 · Anrede</th><td class="de">Sehr geehrte Frau Kollegin, sehr geehrter Herr Kollege, · wir berichten über Ihre Patientin / den o. g. Patienten Frau/Herrn …, geb. am …, die/der sich am … in unserer Notaufnahme vorstellte / vom … bis … in unserer stationären Behandlung befand.</td></tr>
<tr><th>2 · Diagnosen</th><td class="de">Hauptdiagnose zuerst, dann Nebendiagnosen. Nominal, ohne Verb: „Ambulant erworbene Pneumonie rechts basal“ · V. a. (Verdacht auf) · Z. n. (Zustand nach) · DD (Differenzialdiagnose) · ED (Erstdiagnose)</td></tr>
<tr><th>3 · Anamnese</th><td class="de"><b>Präteritum + Konjunktiv I</b> for what the patient said: Der Patient <b>stellte sich</b> mit seit drei Tagen bestehendem Husten <b>vor</b>. Er <b>berichtete</b>, er <b>habe</b> Fieber bis 39 °C gemessen. Vorerkrankungen <b>seien</b> nicht bekannt. Nikotin- und Alkoholkonsum <b>wurden verneint</b>.</td></tr>
<tr><th>4 · Befund</th><td class="de"><b>Present or Präteritum, telegraphic</b>: 58-jähriger Patient in reduziertem Allgemeinzustand und adipösem Ernährungszustand. Wach, zu allen Qualitäten orientiert. Pulmo: feinblasige Rasselgeräusche rechts basal. Cor: rein, rhythmisch. Abdomen weich, kein Druckschmerz.</td></tr>
<tr><th>5 · Therapie und Verlauf</th><td class="de"><b>Präteritum, passive, nominal</b>: Es <b>erfolgte</b> die stationäre Aufnahme. Wir <b>leiteten</b> eine kalkulierte antibiotische Therapie <b>ein</b>. Darunter <b>kam es zu</b> einer raschen Besserung. Der Verlauf <b>gestaltete sich</b> komplikationslos.</td></tr>
<tr><th>6 · Procedere / Empfehlung</th><td class="de">Wir <b>bitten um</b> eine Kontrolle der Entzündungswerte in einer Woche. Wir <b>empfehlen</b> die Fortführung der Therapie bis einschließlich … Bei erneutem Fieber ist eine Wiedervorstellung <b>jederzeit möglich</b>.</td></tr>
<tr><th>7 · Schluss</th><td class="de">Wir entlassen Herrn … in gebessertem Allgemeinzustand in Ihre geschätzte ambulante Weiterbetreuung. · Mit freundlichen kollegialen Grüßen</td></tr></table>
<p><b>The six verbs that carry a letter:</b> <span class="de">sich vorstellen (mit) · berichten / angeben / verneinen · sich zeigen: Es zeigte sich … · erfolgen: Es erfolgte … · sich ergeben: Es ergab sich kein Hinweis auf … · bestehen: Es besteht der Verdacht auf …</span></p>
<p><b>Negative findings</b> have their own phrases: <span class="de">kein Anhalt für … · kein Hinweis auf … · unauffällig · ohne pathologischen Befund (o. p. B.) · … wurde verneint · … ist nicht bekannt.</span></p>
<p><b>Do not write:</b> ich, colloquial words (kriegen, ein bisschen), exclamation marks, speculation without V. a.</p>`,
 merke:"Anamnese: Präteritum + Konjunktiv I. Befund: telegraphic. Verlauf: Es erfolgte … / Es zeigte sich …",
 ex:[{type:"mc",q:"Welcher Satz gehört in die Anamnese?",o:["Der Patient sagt, er hat Fieber.","Der Patient gab an, er habe seit drei Tagen Fieber.","Der Patient hat halt Fieber gekriegt."],a:1,why:"Präteritum for the report, Konjunktiv I for what the patient said."},
 {type:"mc",q:"„Z. n. Appendektomie 2010“ bedeutet:",o:["Zustand nach","Zeichen negativ","Zweifel nicht"],a:0,why:"Z. n. = Zustand nach."},
 {type:"mc",q:"Der Patient ___ sich mit akuter Luftnot in unserer Notaufnahme ___.",o:["stellte … vor","kam … an","zeigte … an"],a:0,why:"sich vorstellen (mit) is the standard verb."},
 {type:"mc",q:"Welche Formulierung passt in den Verlauf?",o:["Wir haben ihm dann Antibiotika gegeben.","Es erfolgte die Einleitung einer antibiotischen Therapie.","Ich gab Antibiotika!"],a:1,why:"Nominal style with erfolgen; no ich, no Perfekt."},
 {type:"gap",q:"Röntgen-Thorax: kein ___ für ein Infiltrat.",a:"Anhalt",alt:["Hinweis"],why:"kein Anhalt für … = no evidence of …"},
 {type:"gap",q:"Nikotin- und Alkoholkonsum wurden ___.",a:"verneint",alt:[],why:"verneinen = to deny."},
 {type:"fix",q:"Der Patient berichtete, er hat keine Allergien.",a:"Der Patient berichtete, er habe keine Allergien.",err:"hat",why:"Reported speech in the letter: Konjunktiv I habe."},
 {type:"transform",q:"Briefstil mit „Es erfolgte“: Wir haben den Patienten stationär aufgenommen.",a:"Es erfolgte die stationäre Aufnahme.",alt:["Es erfolgte die stationäre Aufnahme des Patienten."],why:"erfolgen + nominalised verb."}]},
{id:"g71",level:"C1",week:38,title:"Fachwörter beugen",sub:"der Thrombus, die Thromben — gender, plural and genitive of Latin and Greek terms",
 body:`<p>Medical terms keep traces of Latin and Greek. The ending tells you gender and plural.</p>
<table><tr><th>Ending</th><th>Gender</th><th>Plural</th><th>Examples</th></tr>
<tr><td>-itis</td><td>die</td><td>-itiden</td><td class="de">die Gastritis → die Gastritiden · Hepatitis, Bronchitis, Arthritis</td></tr>
<tr><td>-ose</td><td>die</td><td>-n</td><td class="de">die Stenose → die Stenosen · Thrombose, Diagnose, Psychose, Arthrose</td></tr>
<tr><td>-ie</td><td>die</td><td>-n</td><td class="de">die Embolie → die Embolien · Anämie, Therapie, Biopsie, Allergie</td></tr>
<tr><td>-ion / -tät / -ur</td><td>die</td><td>-en</td><td class="de">die Infektion, die Läsion, die Mortalität, die Fraktur, die Ruptur</td></tr>
<tr><td>-om</td><td>das</td><td>-e</td><td class="de">das Karzinom → die Karzinome · Hämatom, Lipom, Symptom, Syndrom</td></tr>
<tr><td>-ma</td><td>das</td><td>-men / -mata</td><td class="de">das Trauma → die Traumen / Traumata · das Asthma, das Ödem (→ Ödeme), das Koma, das Ekzem</td></tr>
<tr><td>-um</td><td>das</td><td>-a / -en</td><td class="de">das Antibiotikum → die Antibiotika · das Medikament (→ -e) · das Serum → Seren · das Virus → Viren (das, im Alltag auch der)</td></tr>
<tr><td>-us</td><td>der</td><td>-en / -i</td><td class="de">der Thrombus → die Thromben · der Embolus → die Emboli · der Bolus → die Boli · der Tumor → die Tumoren · der Abszess → die Abszesse</td></tr>
<tr><td>-is / -sis</td><td>die</td><td>-en / -es</td><td class="de">die Sepsis · die Basis → Basen · die Dosis → die Dosen · die Prognose → -n</td></tr>
<tr><td>-ex / -ix</td><td>der / die</td><td>-izes</td><td class="de">der Index → die Indizes · der Apex · die Appendix → die Appendizes · die Zervix</td></tr></table>
<p><b>Genitive:</b> masculine and neuter terms in -om, -em, -ament, -ess add <b>-s</b>: <span class="de">des Karzinom<b>s</b>, des Ödem<b>s</b>, des Abszess<b>es</b>.</span> Terms in -us stay unchanged: <span class="de">des Thrombus, des Diabetes, des Ikterus, des Ileus.</span> Feminine terms never change.</p>
<p><b>Adjectives from terms</b> are ordinary adjectives and are declined: <span class="de">eine akut<b>e</b> Appendizitis, ein malign<b>es</b> Melanom, bei chronisch<b>er</b> Niereninsuffizienz, der distal<b>e</b> Radius.</span></p>
<p><b>Latin phrases</b> stay frozen: <span class="de">in situ, per os, post mortem, Status post, Diabetes mellitus, Ulcus ventriculi, Arteria carotis.</span> In German text the anatomical genitive is often germanised: <span class="de">die Fraktur des Radius / die Radiusfraktur.</span></p>
<p><b>Patient language is German:</b> every term has a plain twin, and the FSP tests the translation both ways — <span class="de">die Appendizitis = die Blinddarmentzündung · die Pneumonie = die Lungenentzündung · das Hämatom = der Bluterguss · die Fraktur = der Knochenbruch · der Ikterus = die Gelbsucht.</span></p>
<p><b>Trap:</b> <span class="de">die Dosis</span> — plural <span class="de">die Dosen</span>, not Dosisse. <span class="de">Das Antibiotikum wirkt</span>, <span class="de">die Antibiotika wirk<b>en</b></span> — Antibiotika is plural.</p>`,
 merke:"-itis, -ose, -ie = die · -om, -ma, -um = das · -us = der. Antibiotika ist Plural.",
 ex:[{type:"mc",q:"___ Karzinom wurde früh entdeckt.",o:["Der","Die","Das"],a:2,why:"-om → neuter: das Karzinom."},
 {type:"mc",q:"Plural von „der Thrombus“:",o:["die Thrombusse","die Thromben","die Thrombi"],a:1,why:"der Thrombus → die Thromben."},
 {type:"mc",q:"Die Antibiotika ___ gut.",o:["wirkt","wirken","wirke"],a:1,why:"Antibiotika is the plural of Antibiotikum."},
 {type:"mc",q:"Patientensprache für „das Hämatom“:",o:["der Bluterguss","die Blutvergiftung","der Blutdruck"],a:0,why:"Hämatom = Bluterguss (bruise)."},
 {type:"gap",q:"Plural: die Dosis → die ___",a:"Dosen",alt:[],why:"die Dosis → die Dosen."},
 {type:"gap",q:"Die Größe des ___ (das Karzinom) beträgt zwei Zentimeter.",a:"Karzinoms",alt:[],why:"Neuter in -om: genitive -s."},
 {type:"fix",q:"Der Patient hat eine akut Appendizitis.",a:"Der Patient hat eine akute Appendizitis.",err:"akut",why:"Adjectives before the term are declined: eine akute Appendizitis."},
 {type:"transform",q:"Fachsprache: die Lungenentzündung",a:"die Pneumonie",alt:["Pneumonie"],why:"Lungenentzündung = Pneumonie."}]}
);

// ===== Mephisto 13.0 · C1: Funktionsverbgefüge, Kollokationen, Brief- und Gesprächsformeln (only added if not already in the catalogue). [de, en, example, exampleEn, level, theme]
const VOC4=[
// ---- Funktionsverbgefüge
["in Betracht ziehen","to take into consideration","Wir müssen auch eine Lungenembolie in Betracht ziehen.","We must also consider a pulmonary embolism.","C1","fvg"],
["in Frage kommen","to be a possibility","Eine Operation kommt derzeit nicht in Frage.","Surgery is not an option at present.","B2","fvg"],
["zur Verfügung stehen","to be available","Für Rückfragen stehen wir gern zur Verfügung.","We are happy to be available for queries.","B2","fvg"],
["zur Verfügung stellen","to make available","Bitte stellen Sie uns die Vorbefunde zur Verfügung.","Please make the previous findings available to us.","B2","fvg"],
["in Anspruch nehmen","to make use of, to take up","Er hat nie ärztliche Hilfe in Anspruch genommen.","He has never sought medical help.","C1","fvg"],
["zum Ausdruck bringen","to express","Die Patientin brachte ihre Sorge zum Ausdruck.","The patient expressed her concern.","C1","fvg"],
["eine Entscheidung treffen","to make a decision","Wir müssen heute eine Entscheidung treffen.","We must make a decision today.","B2","fvg"],
["Maßnahmen ergreifen","to take measures","Es wurden sofort Maßnahmen ergriffen.","Measures were taken at once.","C1","fvg"],
["in Kauf nehmen","to accept (a drawback)","Diese Nebenwirkung müssen wir in Kauf nehmen.","We have to accept this side effect.","C1","fvg"],
["Rücksicht nehmen auf","to show consideration for","Bitte nehmen Sie Rücksicht auf die anderen Patienten.","Please show consideration for the other patients.","B2","fvg"],
["Stellung nehmen zu","to comment on","Dazu möchte ich kurz Stellung nehmen.","I would like to comment briefly on that.","C1","fvg"],
["zur Kenntnis nehmen","to take note of","Ich habe den Befund zur Kenntnis genommen.","I have taken note of the finding.","C1","fvg"],
["in Erwägung ziehen","to consider","Wir ziehen eine Verlegung in Erwägung.","We are considering a transfer.","C1","fvg"],
["unter Beobachtung stehen","to be under observation","Der Patient steht weiter unter Beobachtung.","The patient remains under observation.","B2","fvg"],
["außer Frage stehen","to be beyond question","Es steht außer Frage, dass operiert werden muss.","There is no question that surgery is needed.","C1","fvg"],
["eine Rolle spielen","to play a role","Das Alter spielt hier eine wichtige Rolle.","Age plays an important role here.","B2","fvg"],
["zur Folge haben","to result in","Der Sturz hatte eine Fraktur zur Folge.","The fall resulted in a fracture.","C1","fvg"],
["in Zusammenhang stehen mit","to be connected with","Die Beschwerden stehen in Zusammenhang mit dem Essen.","The complaints are connected with eating.","C1","fvg"],
["Abstand nehmen von","to refrain from","Wir nehmen von einer Operation Abstand.","We are refraining from surgery.","C1","fvg"],
["Bescheid geben","to let someone know","Geben Sie mir bitte Bescheid, wenn das Labor da ist.","Please let me know when the lab results are in.","B1","fvg"],
["in Kraft treten","to come into force","Die neue Regelung tritt im Januar in Kraft.","The new rule comes into force in January.","C1","fvg"],
["sich in Behandlung befinden","to be under treatment","Sie befindet sich in kardiologischer Behandlung.","She is under cardiological treatment.","B2","fvg"],
["Verantwortung tragen","to bear responsibility","Die Stationsärztin trägt die Verantwortung.","The ward doctor bears the responsibility.","B2","fvg"],
["einen Antrag stellen","to submit an application","Sie müssen einen Antrag auf Reha stellen.","You must apply for rehabilitation.","B2","fvg"],
["zu dem Schluss kommen","to come to the conclusion","Wir kamen zu dem Schluss, dass keine Operation nötig ist.","We came to the conclusion that no surgery is needed.","C1","fvg"],
// ---- klinische Kollokationen
["eine Diagnose stellen","to make a diagnosis","Die Diagnose wurde anhand des CTs gestellt.","The diagnosis was made on the basis of the CT.","B2","kollokation"],
["eine Diagnose sichern","to confirm a diagnosis","Die Diagnose wurde histologisch gesichert.","The diagnosis was confirmed histologically.","C1","kollokation"],
["einen Befund erheben","to record a finding","Bei der Aufnahme wurde folgender Befund erhoben.","On admission the following findings were recorded.","C1","kollokation"],
["die Anamnese erheben","to take the history","Ich möchte zuerst die Anamnese erheben.","I would first like to take the history.","B2","kollokation"],
["eine Therapie einleiten","to start a therapy","Wir leiteten eine antibiotische Therapie ein.","We started antibiotic therapy.","C1","kollokation"],
["eine Therapie absetzen","to stop a therapy","Das Medikament wurde wegen Übelkeit abgesetzt.","The drug was stopped because of nausea.","B2","kollokation"],
["ein Medikament ansetzen","to start a drug","Wir haben einen Betablocker angesetzt.","We started a beta blocker.","C1","kollokation"],
["die Dosis anpassen","to adjust the dose","Die Dosis wurde an die Nierenfunktion angepasst.","The dose was adjusted to renal function.","B2","kollokation"],
["Blut abnehmen","to take blood","Ich nehme Ihnen jetzt Blut ab.","I am going to take blood from you now.","B1","kollokation"],
["einen Zugang legen","to place an IV line","Wir legen Ihnen einen Zugang.","We are placing an IV line.","B2","kollokation"],
["Beschwerden lindern","to relieve complaints","Das Mittel lindert die Beschwerden.","The remedy relieves the complaints.","B2","kollokation"],
["Beschwerden äußern","to voice complaints","Der Patient äußerte keine Beschwerden.","The patient voiced no complaints.","C1","kollokation"],
["einen Verdacht erhärten","to substantiate a suspicion","Das EKG erhärtete den Verdacht.","The ECG substantiated the suspicion.","C1","kollokation"],
["einen Verdacht ausräumen","to dispel a suspicion","Der Verdacht konnte ausgeräumt werden.","The suspicion could be dispelled.","C1","kollokation"],
["eine Erkrankung ausschließen","to rule out a disease","Ein Infarkt konnte ausgeschlossen werden.","An infarction could be ruled out.","B2","kollokation"],
["einen Eingriff vornehmen","to perform a procedure","Der Eingriff wird in Vollnarkose vorgenommen.","The procedure is performed under general anaesthesia.","C1","kollokation"],
["eine Einwilligung einholen","to obtain consent","Vor dem Eingriff holen wir Ihre Einwilligung ein.","Before the procedure we obtain your consent.","C1","kollokation"],
["über Risiken aufklären","to inform about risks","Ich muss Sie über die Risiken aufklären.","I have to inform you about the risks.","B2","kollokation"],
["sich einer Operation unterziehen","to undergo an operation","Er unterzog sich 2019 einer Bypass-Operation.","He underwent bypass surgery in 2019.","C1","kollokation"],
["an einer Krankheit leiden","to suffer from a disease","Sie leidet an Diabetes.","She suffers from diabetes.","B1","kollokation"],
["unter Schmerzen leiden","to suffer pain","Er leidet unter starken Schmerzen.","He is suffering severe pain.","B1","kollokation"],
["einer Sache vorbeugen","to prevent something","Bewegung beugt Thrombosen vor.","Exercise prevents thromboses.","B2","kollokation"],
["auf eine Therapie ansprechen","to respond to a therapy","Der Patient spricht gut auf die Therapie an.","The patient is responding well to the therapy.","C1","kollokation"],
["mit Komplikationen einhergehen","to be accompanied by complications","Die Erkrankung geht häufig mit Fieber einher.","The disease is often accompanied by fever.","C1","kollokation"],
["einen Verlauf nehmen","to take a course","Die Erkrankung nahm einen schweren Verlauf.","The disease took a severe course.","C1","kollokation"],
["zu etwas neigen","to be prone to","Sie neigt zu Infekten.","She is prone to infections.","B2","kollokation"],
["auf etwas zurückzuführen sein","to be attributable to","Die Anämie ist auf einen Eisenmangel zurückzuführen.","The anaemia is attributable to iron deficiency.","C1","kollokation"],
["sich verschlechtern","to deteriorate","Der Zustand hat sich über Nacht verschlechtert.","The condition deteriorated overnight.","B1","kollokation"],
["sich zurückbilden","to regress","Die Schwellung hat sich vollständig zurückgebildet.","The swelling has regressed completely.","C1","kollokation"],
["abklingen","to subside","Das Fieber ist abgeklungen.","The fever has subsided.","B2","kollokation"],
["auftreten","to occur","Die Schmerzen treten vor allem nachts auf.","The pain occurs mainly at night.","B1","kollokation"],
["ausstrahlen","to radiate","Der Schmerz strahlt in den linken Arm aus.","The pain radiates into the left arm.","B1","kollokation"],
// ---- Befundsprache
["unauffällig","unremarkable","Das Abdomen ist unauffällig.","The abdomen is unremarkable.","B2","befund"],
["rückläufig","decreasing","Die Entzündungswerte sind rückläufig.","The inflammatory markers are decreasing.","C1","befund"],
["progredient","progressive","Es zeigt sich eine progrediente Dyspnoe.","There is progressive dyspnoea.","C1","befund"],
["druckschmerzhaft","tender on pressure","Der rechte Unterbauch ist druckschmerzhaft.","The right lower abdomen is tender.","B2","befund"],
["seitengleich","equal on both sides","Die Lunge ist seitengleich belüftet.","The lungs are ventilated equally on both sides.","C1","befund"],
["regelrecht","normal, as expected","Regelrechter Sitz des Katheters.","Correct position of the catheter.","C1","befund"],
["altersentsprechend","appropriate for age","Altersentsprechender Normalbefund.","Normal findings for age.","C1","befund"],
["der Allgemeinzustand","general condition","Patient in reduziertem Allgemeinzustand.","Patient in reduced general condition.","B2","befund"],
["der Ernährungszustand","nutritional status","Guter Ernährungszustand.","Good nutritional status.","B2","befund"],
["die Abwehrspannung","guarding","Keine Abwehrspannung.","No guarding.","C1","befund"],
["der Klopfschmerz","pain on percussion","Kein Klopfschmerz über den Nierenlagern.","No percussion pain over the renal beds.","C1","befund"],
["die Rasselgeräusche","rales, crackles","Feinblasige Rasselgeräusche rechts basal.","Fine crackles at the right base.","C1","befund"],
["vesikulär","vesicular","Vesikuläres Atemgeräusch beidseits.","Vesicular breath sounds on both sides.","C1","befund"],
["der Verdacht auf","suspicion of","Es besteht der Verdacht auf eine Appendizitis.","There is a suspicion of appendicitis.","B2","befund"],
["der Zustand nach","status post","Zustand nach Cholezystektomie 2015.","Status post cholecystectomy 2015.","B2","befund"],
["kein Anhalt für","no evidence of","Kein Anhalt für eine Blutung.","No evidence of bleeding.","C1","befund"],
["die Wiedervorstellung","re-presentation, return visit","Bei Fieber bitten wir um sofortige Wiedervorstellung.","In case of fever please return immediately.","C1","befund"],
["das Procedere","further management","Zum weiteren Procedere empfehlen wir eine Koloskopie.","For further management we recommend a colonoscopy.","C1","befund"],
["die Epikrise","summary and assessment in a discharge letter","In der Epikrise fassen wir den Verlauf zusammen.","In the epicrisis we summarise the course.","C1","befund"],
["komplikationslos","without complications","Der postoperative Verlauf war komplikationslos.","The postoperative course was without complications.","C1","befund"],
// ---- Gespräch: empathisch, strukturierend
["Das kann ich gut nachvollziehen.","I can well understand that.","Sie haben Angst vor der Narkose. Das kann ich gut nachvollziehen.","You are afraid of the anaesthetic. I can well understand that.","B2","gespraech"],
["Ich versichere Ihnen, dass …","I assure you that …","Ich versichere Ihnen, dass wir alles Nötige tun.","I assure you that we are doing everything necessary.","B2","gespraech"],
["Darf ich kurz zusammenfassen?","May I briefly summarise?","Darf ich kurz zusammenfassen, was Sie mir erzählt haben?","May I briefly summarise what you have told me?","B2","gespraech"],
["Habe ich Sie richtig verstanden, dass …?","Have I understood you correctly that …?","Habe ich Sie richtig verstanden, dass die Schmerzen nachts stärker sind?","Have I understood correctly that the pain is worse at night?","B2","gespraech"],
["Lassen Sie sich ruhig Zeit.","Take your time.","Lassen Sie sich ruhig Zeit mit der Antwort.","Take your time with the answer.","B1","gespraech"],
["Dazu komme ich gleich.","I'll come to that in a moment.","Eine gute Frage. Dazu komme ich gleich.","A good question. I'll come to that in a moment.","B2","gespraech"],
["Was genau meinen Sie mit …?","What exactly do you mean by …?","Was genau meinen Sie mit „schwindelig“?","What exactly do you mean by 'dizzy'?","B1","gespraech"],
["Ich würde Sie gern untersuchen.","I would like to examine you.","Wenn Sie einverstanden sind, würde ich Sie jetzt gern untersuchen.","If you agree, I would like to examine you now.","B1","gespraech"],
["Sind Sie damit einverstanden?","Do you agree to that?","Wir würden Sie gern stationär aufnehmen. Sind Sie damit einverstanden?","We would like to admit you. Do you agree?","B1","gespraech"],
["nach derzeitigem Stand","as things stand","Nach derzeitigem Stand ist keine Operation nötig.","As things stand, no surgery is needed.","C1","gespraech"],
["Ich möchte Ihnen nichts vormachen.","I don't want to pretend to you.","Ich möchte Ihnen nichts vormachen: Der Befund ist ernst.","I don't want to pretend: the finding is serious.","C1","gespraech"],
["Es tut mir leid, Ihnen das sagen zu müssen.","I am sorry to have to tell you this.","Es tut mir leid, Ihnen das sagen zu müssen: Die Gewebeprobe ist bösartig.","I am sorry to have to tell you: the tissue sample is malignant.","B2","gespraech"],
// ---- Übergabe und Kollegengespräch
["Ich möchte Ihnen einen Patienten vorstellen.","I would like to present a patient to you.","Herr Oberarzt, ich möchte Ihnen einen neuen Patienten vorstellen.","Sir, I would like to present a new patient to you.","B2","uebergabe"],
["Es handelt sich um …","This is … / The case concerns …","Es handelt sich um einen 67-jährigen Patienten mit Thoraxschmerz.","This is a 67-year-old patient with chest pain.","B2","uebergabe"],
["differenzialdiagnostisch","as a differential diagnosis","Differenzialdiagnostisch kommt eine Lungenembolie in Betracht.","As a differential, pulmonary embolism must be considered.","C1","uebergabe"],
["am ehesten","most likely","Die Beschwerden sprechen am ehesten für eine Gastritis.","The complaints most likely indicate gastritis.","C1","uebergabe"],
["für etwas sprechen","to point to something","Dafür spricht der plötzliche Beginn.","The sudden onset points to that.","B2","uebergabe"],
["gegen etwas sprechen","to speak against something","Dagegen spricht das fehlende Fieber.","The absence of fever speaks against it.","B2","uebergabe"],
["Ich würde folgendermaßen vorgehen:","I would proceed as follows:","Ich würde folgendermaßen vorgehen: zuerst Labor, dann Sonografie.","I would proceed as follows: first labs, then ultrasound.","C1","uebergabe"],
["zum Ausschluss","to rule out","Zum Ausschluss eines Infarkts bestimmen wir das Troponin.","To rule out an infarction we measure troponin.","C1","uebergabe"],
["zur Abklärung","for work-up","Wir nehmen die Patientin zur weiteren Abklärung auf.","We are admitting the patient for further work-up.","B2","uebergabe"],
["in Rücksprache mit","after consultation with","In Rücksprache mit dem Oberarzt erfolgte die Verlegung.","After consultation with the senior physician the transfer took place.","C1","uebergabe"],
["der Dienst","shift, duty","Ich habe heute Nachtdienst.","I am on night duty today.","A2","uebergabe"],
["die Übergabe","handover","Die Übergabe ist um sieben Uhr.","Handover is at seven o'clock.","B1","uebergabe"],
["die Visite","ward round","Die Visite beginnt um acht.","The ward round starts at eight.","A2","uebergabe"],
["das Konsil","consult","Wir haben ein neurologisches Konsil angefordert.","We have requested a neurology consult.","C1","uebergabe"],
// ---- Schriftsprache / Konnektoren C1
["demzufolge","consequently","Das CT war unauffällig; demzufolge wurde der Patient entlassen.","The CT was unremarkable; consequently the patient was discharged.","C1","konnektor"],
["infolgedessen","as a result","Er nahm die Tabletten nicht; infolgedessen stieg der Blutdruck.","He did not take the tablets; as a result his blood pressure rose.","C1","konnektor"],
["nichtsdestotrotz","nevertheless","Nichtsdestotrotz empfehlen wir eine Kontrolle.","Nevertheless we recommend a check-up.","C1","konnektor"],
["indessen","meanwhile; however","Die Schmerzen ließen nach; das Fieber indessen blieb.","The pain eased; the fever, however, remained.","C1","konnektor"],
["insofern","in this respect","Der Befund ist insofern wichtig, als er die Therapie ändert.","The finding is important in that it changes the therapy.","C1","konnektor"],
["hingegen","on the other hand","Das rechte Bein ist warm, das linke hingegen kalt.","The right leg is warm, the left, on the other hand, cold.","C1","konnektor"],
["zumal","especially as","Wir sollten abwarten, zumal die Werte sich bessern.","We should wait, especially as the values are improving.","C1","konnektor"],
["sofern","provided that","Sofern keine Komplikationen auftreten, entlassen wir Sie morgen.","Provided no complications occur, we will discharge you tomorrow.","B2","konnektor"],
["wohingegen","whereas","Er hustet nachts, wohingegen er tagsüber beschwerdefrei ist.","He coughs at night, whereas he is symptom-free during the day.","C1","konnektor"],
["geschweige denn","let alone","Er kann nicht stehen, geschweige denn gehen.","He cannot stand, let alone walk.","C1","konnektor"],
["im Übrigen","besides, moreover","Im Übrigen ist der Befund unverändert.","Otherwise the finding is unchanged.","C1","konnektor"],
["letztlich","ultimately","Letztlich entscheidet die Patientin selbst.","Ultimately the patient decides herself.","B2","konnektor"],
["gegebenenfalls","if applicable, if need be","Gegebenenfalls muss die Dosis erhöht werden.","If need be the dose must be increased.","B2","konnektor"],
["vorbehaltlich","subject to","Vorbehaltlich des Laborbefundes kann sie morgen gehen.","Subject to the lab result she can go tomorrow.","C1","konnektor"],
["umgehend","immediately","Bitte stellen Sie sich umgehend wieder vor.","Please come back immediately.","B2","konnektor"],
// ---- Alltag C1: Redewendungen, die man im Krankenhaus wirklich hört
["auf dem Zahnfleisch gehen","to be completely exhausted","Nach drei Nachtdiensten gehe ich auf dem Zahnfleisch.","After three night shifts I am running on empty.","C1","redewendung"],
["jemandem auf die Nerven gehen","to get on someone's nerves","Der Piepser geht mir auf die Nerven.","The pager is getting on my nerves.","B1","redewendung"],
["die Nase voll haben","to be fed up","Ich habe die Nase voll von diesem Formular.","I am fed up with this form.","B1","redewendung"],
["etwas auf dem Herzen haben","to have something on one's mind","Haben Sie noch etwas auf dem Herzen?","Is there anything else on your mind?","B2","redewendung"],
["jemandem etwas ans Herz legen","to urge someone to do something","Ich lege Ihnen ans Herz, mit dem Rauchen aufzuhören.","I urge you to stop smoking.","C1","redewendung"],
["Hand und Fuß haben","to be well founded","Ihr Therapieplan hat Hand und Fuß.","Your treatment plan is sound.","C1","redewendung"],
["über den Berg sein","to be out of the woods","Die Patientin ist über den Berg.","The patient is out of the woods.","B2","redewendung"],
["am seidenen Faden hängen","to hang by a thread","Sein Leben hing am seidenen Faden.","His life hung by a thread.","C1","redewendung"],
["den Löffel abgeben","(colloquial) to die","„Ich gebe noch lange nicht den Löffel ab“, sagte der Patient.","'I'm not kicking the bucket for a long time yet,' said the patient.","C1","redewendung"],
["jemandem reinen Wein einschenken","to tell someone the plain truth","Schenken Sie mir bitte reinen Wein ein, Herr Doktor.","Please tell me the plain truth, Doctor.","C1","redewendung"],
["den Teufel an die Wand malen","to tempt fate by imagining the worst","Malen Sie nicht den Teufel an die Wand.","Don't imagine the worst.","C1","redewendung"],
["in Teufels Küche kommen","to get into deep trouble","Ohne Aufklärung kommen Sie in Teufels Küche.","Without informed consent you will get into deep trouble.","C1","redewendung"]];

// ===== Mephisto 13.0 · Verbotene Seiten: eleven more Chronik pages, each behind a secret. Seven are hidden in the app, four are earned in the story.
LORE_REALM.N="Verbotene Seiten";
Object.assign(EGGS,{
 mehrlicht:["Mehr Licht!","Schreib irgendwo Goethes letzte zwei Wörter.","Zwei Wörter, und alle Welt zitiert sie. Von mir zitiert man ganze Akte. Niemand dankt es mir.","Two words, and the whole world quotes them. Of me they quote entire acts. Nobody thanks me."],
 zauber:["Die Geister, die ich rief","Schreib den Zauberspruch des Lehrlings: „Walle! walle …“","Walle, walle. Und wer wischt jetzt auf? Der Meister kommt nicht. Der Meister bin ich.","Walle, walle. And who mops up now? The master isn't coming. The master is me."],
 rumpel:["Ach, wie gut, dass niemand weiß","Schreib den Namen, den die Königin erraten musste.","Wer den Namen kennt, hat die Macht. Darum lernen wir Vokabeln.","Whoever knows the name holds the power. That is why we learn vocabulary."],
 wolf:["Die Stunde des Nachtwächters","Komm, wenn die Notaufnahme am dunkelsten ist: um drei.","Drei Uhr. Um diese Zeit sterben die meisten und lernen die wenigsten. Willkommen.","Three o'clock. At this hour most people die and the fewest study. Welcome."],
 sandmann:["Der Sandmann kommt","Lerne noch, wenn Kinder längst schlafen müssen: nach elf.","Noch wach? Der Sandmann war schon da. Ich habe ihn weggeschickt. Er nimmt nur die Augen – ich brauche den ganzen Kopf.","Still awake? The Sandman has been. I sent him away. He only takes the eyes — I need the whole head."],
 schlemihl:["Der Mann ohne Schatten","Tippe dreimal auf den Namen dessen, der hinter dir geht.","Sie zupfen an Ihrem Schatten? Vorsicht. Ein Kollege von mir hat einmal einen gekauft. Für einen Geldbeutel.","Tugging at your shadow? Careful. A colleague of mine once bought one. For a purse."],
 kyff:["Fliegen die Raben noch?","Im Schwarzwald fliegt etwas. Fang es.","Sie haben einen Raben gefangen. Jetzt fehlt einer am Berg, und der alte Kaiser verschläft noch einmal hundert Jahre.","You have caught a raven. Now one is missing at the mountain, and the old emperor will oversleep another hundred years."],
 wette:["Prolog im Himmel","Lies das Kapitel, in dem die ältere Wette ans Licht kommt.","Jetzt kennen Sie den Vertrag über dem Vertrag. Ich hätte ihn besser verstecken sollen. Ich wollte nicht.","Now you know the contract above the contract. I should have hidden it better. I didn't want to."],
 koepenick:["Die Uniform","Lies die Akte, die du nie lesen solltest.","Papier glaubt in diesem Land alles. Man muss nur die richtige Uniform dazu tragen.","In this country paper believes anything. One only has to wear the right uniform with it."],
 eid:["Das Gelöbnis","Besuche Bett vier viermal.","Viermal Bett vier. Sie kommen wieder, obwohl ich Sie nicht zwinge. Das steht in keinem meiner Verträge.","Bed four, four times. You keep coming back although I don't force you. That is in none of my contracts."],
 schluss:["Das Unbeschreibliche","Erfülle den Pakt. Dann berühre die Laterne.","Das ist das Ende, das er mir geschrieben hat. Ich verliere darin. Seit 1832, jeden Abend, auf jeder Bühne.","This is the ending he wrote for me. I lose in it. Since 1832, every night, on every stage."]});
LORE.push(
{id:"n_licht",r:"N",ch:0,egg:"mehrlicht",y:"1832",sort:1832.2,t:"Mehr Licht!",art:"delacroix_2",
 de:"Am 22. März 1832 starb Goethe in Weimar, in seinem Lehnstuhl, mit zweiundachtzig Jahren. Seine letzten Worte sollen „Mehr Licht!“ gewesen sein. Die Nachwelt machte daraus ein Vermächtnis der Aufklärung. Wahrscheinlicher ist, dass er nur darum bat, einen Fensterladen zu öffnen, weil es im Zimmer zu dunkel war.",
 en:"On 22 March 1832 Goethe died in Weimar, in his armchair, aged eighty-two. His last words are said to have been 'More light!' Posterity turned them into a testament of the Enlightenment. More probably he was only asking for a shutter to be opened because the room was too dark.",
 dk:"Sein Arzt Carl Vogel beschrieb die letzte Nacht ohne Verklärung: fürchterliche Angst und Unruhe, der Kranke habe keine Lage gefunden, die ihm Ruhe gab. Der Bericht wurde lange weniger gern zitiert als die zwei Wörter.",dken:"His physician Carl Vogel described the last night without any halo: terrible fear and restlessness, the sick man finding no position that gave him rest. For a long time the report was quoted less gladly than the two words."},
{id:"n_zauber",r:"N",ch:0,egg:"zauber",y:"1797",sort:1797,t:"Der Zauberlehrling",art:"rackham_7",
 de:"1797, im sogenannten Balladenjahr, schrieb Goethe den „Zauberlehrling“. Der Meister ist aus dem Haus, der Lehrling verzaubert einen Besen, damit er Wasser trägt – und kennt das Wort nicht, das ihn wieder anhält. Er spaltet den Besen mit dem Beil. Nun tragen zwei. Der Stoff ist alt: Schon der Grieche Lukian erzählte ihn im zweiten Jahrhundert.",
 en:"In 1797, the so-called year of ballads, Goethe wrote 'The Sorcerer's Apprentice'. The master is out, the apprentice enchants a broom to carry water — and does not know the word that stops it. He splits the broom with an axe. Now two are carrying. The material is old: the Greek writer Lucian told it in the second century.",
 dk:"„Die ich rief, die Geister, werd ich nun nicht los.“ Der Satz steht heute über jeder Erfindung, die ihrem Erfinder entgleitet. In der Ballade kommt der Meister zurück. Im Leben ist das nicht vorgesehen.",dken:"'The spirits that I summoned I cannot now be rid of.' Today the sentence stands over every invention that slips from its inventor's hands. In the ballad the master returns. In life that is not provided for."},
{id:"n_rumpel",r:"N",ch:0,egg:"rumpel",y:"1812",sort:1812.1,t:"Rumpelstilzchen",art:"rackham_19",
 de:"Ein Müller behauptet, seine Tochter könne Stroh zu Gold spinnen. Der König sperrt sie ein. Ein Männchen spinnt für sie – zuerst für ihr Halsband, dann für ihren Ring, zuletzt für ihr erstes Kind. Sie kann es nur behalten, wenn sie seinen Namen errät. Das Märchen kennt ein altes Gesetz: Wer den wahren Namen eines Wesens weiß, hat Macht über es.",
 en:"A miller claims his daughter can spin straw into gold. The king locks her up. A little man spins for her — first for her necklace, then for her ring, finally for her first child. She may keep it only if she guesses his name. The tale knows an old law: whoever knows a being's true name has power over it.",
 dk:"In der ersten Ausgabe von 1812 läuft das Männchen nur zornig davon. Erst in der zweiten Ausgabe von 1819 packt es seinen linken Fuß mit beiden Händen und reißt sich selbst mitten entzwei. Die Grimms fanden das besser.",dken:"In the first edition of 1812 the little man merely runs away in anger. Only in the second edition of 1819 does he seize his left foot with both hands and tear himself in two. The Grimms thought that was better."},
{id:"n_wacht",r:"N",ch:0,egg:"wolf",y:"um 1600",sort:1600,t:"Der Nachtwächter",art:"dore_23",
 de:"Bis ins neunzehnte Jahrhundert ging in deutschen Städten nachts ein Mann mit Laterne, Horn und Hellebarde durch die Gassen. Er rief die Stunden aus: „Hört, ihr Herrn, und lasst euch sagen, unsre Glock hat drei geschlagen.“ Er achtete auf Feuer, auf Diebe und auf offene Türen. Wer heute um drei Uhr nachts mit einem Licht über einen dunklen Flur geht und nach den Schlafenden sieht, hat seinen Beruf geerbt.",
 en:"Into the nineteenth century a man with a lantern, a horn and a halberd walked the lanes of German towns at night. He called out the hours: 'Hear, good sirs, and let me tell you, our bell has struck three.' He watched for fire, for thieves and for open doors. Whoever walks down a dark corridor at three in the morning with a light, looking in on the sleepers, has inherited his trade.",
 dk:"Vielerorts galt der Nachtwächter als „unehrlich“ – wie der Henker, der Abdecker und der Totengräber. Wer nachts für alle wach war, durfte am Tag oft in keine Zunft eintreten und saß im Wirtshaus allein.",dken:"In many places the night watchman counted as 'dishonourable' — like the executioner, the knacker and the gravedigger. The man who stayed awake at night for everyone was often barred by day from every guild and sat alone in the tavern."},
{id:"n_sand",r:"N",ch:0,egg:"sandmann",y:"1816",sort:1816,t:"Der Sandmann",art:"clarke_48",
 de:"In E. T. A. Hoffmanns Erzählung von 1816 fragt der kleine Nathanael, wer der Sandmann sei. Die Kinderfrau antwortet: ein böser Mann, der den Kindern, die nicht schlafen wollen, Sand in die Augen wirft, bis sie blutig aus dem Kopf springen. Er trägt sie in einem Sack zum Mond und füttert damit seine eigenen Kinder. Nathanael glaubt es ein Leben lang – und verliebt sich in eine Puppe mit Glasaugen.",
 en:"In E. T. A. Hoffmann's tale of 1816 little Nathanael asks who the Sandman is. The nurse answers: a wicked man who throws sand into the eyes of children who will not sleep, until they spring bleeding from their heads. He carries them to the moon in a sack and feeds them to his own children. Nathanael believes it all his life — and falls in love with a doll with glass eyes.",
 dk:"Sigmund Freud baute 1919 auf dieser Geschichte seinen Aufsatz „Das Unheimliche“: Unheimlich sei nicht das Fremde, sondern das Vertraute, das verdrängt wurde und wiederkehrt. Das deutsche Wort trägt es in sich – un-heim-lich.",dken:"In 1919 Sigmund Freud built his essay 'The Uncanny' on this story: the uncanny, he argued, is not the foreign but the familiar that was repressed and returns. The German word carries it inside itself — un-heim-lich, un-home-ly."},
{id:"n_schlemihl",r:"N",ch:0,egg:"schlemihl",y:"1814",sort:1814,t:"Peter Schlemihl",art:"clarke_18",
 de:"1814 erschien „Peter Schlemihls wundersame Geschichte“. Ein höflicher Mann im grauen Rock rollt Schlemihls Schatten vom Boden auf, steckt ihn ein und gibt ihm dafür einen Beutel, der nie leer wird. Schlemihl ist nun reich – und überall ausgestoßen, denn einem Menschen ohne Schatten traut niemand. Später bietet der Graue den Schatten zurück: gegen die Seele. Schlemihl lehnt ab, wirft den Beutel fort und wird Naturforscher.",
 en:"In 1814 'Peter Schlemihl's Wondrous Story' appeared. A polite man in a grey coat rolls Schlemihl's shadow up from the ground, pockets it and gives him in return a purse that never empties. Schlemihl is now rich — and shunned everywhere, for nobody trusts a man without a shadow. Later the grey man offers the shadow back: for the soul. Schlemihl refuses, throws the purse away and becomes a naturalist.",
 dk:"Der Autor Adelbert von Chamisso war als Kind mit seiner Familie aus Frankreich geflohen und schrieb in einer Sprache, die er erst hatte lernen müssen. Viele lasen den fehlenden Schatten als das, was dem Fremden fehlt: die Selbstverständlichkeit, dazuzugehören.",dken:"The author Adelbert von Chamisso had fled France with his family as a child and wrote in a language he had first had to learn. Many read the missing shadow as what the foreigner lacks: the taken-for-granted right to belong."},
{id:"n_kyff",r:"N",ch:0,egg:"kyff",y:"1190",sort:1190,t:"Der Kaiser im Berg",art:"dore_31",
 de:"1190 ertrank Kaiser Friedrich Barbarossa auf dem Kreuzzug im Fluss Saleph. Die Sage ließ ihn nicht sterben: Er schlafe im Kyffhäuser, einem Berg in Thüringen, an einem steinernen Tisch, und sein roter Bart sei durch die Tischplatte gewachsen. Alle hundert Jahre erwache er und frage, ob die Raben noch um den Berg fliegen. Fliegen sie noch, schläft er weiter.",
 en:"In 1190 Emperor Frederick Barbarossa drowned in the river Saleph on crusade. Legend would not let him die: he sleeps in the Kyffhäuser, a mountain in Thuringia, at a stone table, and his red beard has grown through the tabletop. Every hundred years he wakes and asks whether the ravens are still flying round the mountain. If they are, he sleeps on.",
 dk:"Ursprünglich galt die Sage wohl seinem Enkel Friedrich II.; erst später wurde sie auf Barbarossa übertragen. Das neunzehnte Jahrhundert machte aus dem Schläfer ein nationales Versprechen. 1941 erhielt der Überfall auf die Sowjetunion seinen Namen.",dken:"The legend probably first belonged to his grandson Frederick II; only later was it transferred to Barbarossa. The nineteenth century turned the sleeper into a national promise. In 1941 the invasion of the Soviet Union was given his name."},
{id:"n_prolog",r:"N",ch:0,egg:"wette",y:"1808",sort:1808.1,t:"Prolog im Himmel",art:"delacroix_12",
 de:"Bevor Faust zum ersten Mal auftritt, wettet Mephisto mit dem Herrn um ihn – nach dem Vorbild des Buches Hiob. Der Herr erlaubt alles, solange Faust lebt, und sagt den Satz, der das ganze Stück trägt: „Es irrt der Mensch, solang er strebt.“ Der Irrtum ist also kein Fehler im Plan. Er ist der Plan. Erst danach schließt Faust seine eigene Wette: Wenn er je zum Augenblick sagt „Verweile doch! du bist so schön!“, dann gehört er dem Teufel.",
 en:"Before Faust first appears, Mephisto wagers with the Lord over him — after the model of the Book of Job. The Lord permits everything as long as Faust lives, and speaks the sentence that carries the whole play: 'Man errs as long as he strives.' Error, then, is not a flaw in the plan. It is the plan. Only afterwards does Faust make his own wager: if he ever says to the moment 'Stay! you are so beautiful!', he belongs to the devil.",
 dk:"Faust sagt den Satz am Ende wirklich – hundertjährig, erblindet. Er hört Spaten und glaubt, man grabe seinen großen Kanal. Es sind die Lemuren. Sie graben sein Grab.",dken:"In the end Faust really does say the sentence — a hundred years old, blind. He hears spades and believes his great canal is being dug. It is the lemures. They are digging his grave."},
{id:"n_koepenick",r:"N",ch:0,egg:"koepenick",y:"1906",sort:1906,t:"Der Hauptmann von Köpenick",art:"struwwel_8",
 de:"Am 16. Oktober 1906 zog der Schuster Wilhelm Voigt eine gebraucht gekaufte Hauptmannsuniform an, hielt auf der Straße ein paar Soldaten an und befahl ihnen, ihm zu folgen. Sie folgten. Er besetzte das Rathaus von Köpenick, ließ den Bürgermeister verhaften und sich die Stadtkasse aushändigen – gegen Quittung. Niemand fragte nach einem Papier. Die Uniform war das Papier. Ganz Europa lachte; der Kaiser soll ihn ein „geniales Kerlchen“ genannt haben.",
 en:"On 16 October 1906 the shoemaker Wilhelm Voigt put on a captain's uniform bought second-hand, stopped a few soldiers in the street and ordered them to follow him. They followed. He occupied the town hall of Köpenick, had the mayor arrested and the municipal treasury handed over — against a receipt. Nobody asked for a document. The uniform was the document. All Europe laughed; the Kaiser is said to have called him a 'brilliant little fellow'.",
 dk:"Voigt hatte viele Jahre im Zuchthaus gesessen. Danach bekam er ohne Arbeit keine Aufenthaltserlaubnis und ohne Aufenthaltserlaubnis keine Arbeit; mehrere Städte wiesen ihn aus. Carl Zuckmayer machte 1931 aus diesem Kreis ein Theaterstück.",dken:"Voigt had spent many years in prison. Afterwards he could get no residence permit without work and no work without a residence permit; several towns expelled him. In 1931 Carl Zuckmayer turned this circle into a play."},
{id:"n_eid",r:"N",ch:0,egg:"eid",y:"1947",sort:1947,t:"Das Gelöbnis",art:"clarke_39",
 de:"Vom Dezember 1946 bis zum August 1947 standen in Nürnberg dreiundzwanzig Angeklagte vor Gericht, zwanzig davon Ärzte. Sie hatten Menschen in Lagern unterkühlt, infiziert, vergiftet und getötet und es Forschung genannt. Das Urteil enthielt zehn Sätze, den Nürnberger Kodex. Der erste lautet: Die freiwillige Zustimmung der Versuchsperson ist unbedingt erforderlich. 1948 verabschiedete der Weltärztebund in Genf ein neues Gelöbnis. Es steht heute der Berufsordnung der deutschen Ärztinnen und Ärzte voran.",
 en:"From December 1946 to August 1947 twenty-three defendants stood trial in Nuremberg, twenty of them physicians. They had chilled, infected, poisoned and killed people in camps and called it research. The judgment contained ten sentences, the Nuremberg Code. The first reads: the voluntary consent of the human subject is absolutely essential. In 1948 the World Medical Association adopted a new pledge in Geneva. Today it stands at the head of the professional code of German physicians.",
 dk:"Jedes Aufklärungsgespräch, das du auf Deutsch führen wirst – „Ich muss Sie über die Risiken aufklären. Sind Sie einverstanden?“ –, ist die Antwort auf diesen Prozess. Sieben der Angeklagten wurden 1948 in Landsberg gehängt. Viele andere praktizierten weiter.",dken:"Every informed-consent talk you will hold in German — 'I have to inform you about the risks. Do you agree?' — is the answer to this trial. Seven of the defendants were hanged at Landsberg in 1948. Many others went on practising."},
{id:"n_schluss",r:"N",ch:0,egg:"schluss",y:"1832",sort:1832.3,t:"Das Unbeschreibliche",art:"delacroix_18",
 de:"Goethe versiegelte das Manuskript von „Faust II“ im Sommer 1831 und ließ es erst nach seinem Tod drucken. Am Ende tragen Engel Fausts Unsterbliches davon und sagen, warum sie es dürfen: „Wer immer strebend sich bemüht, den können wir erlösen.“ Nicht der Erfolg rettet ihn, nicht die Tugend – Faust hat beides nicht –, sondern dass er nie aufgehört hat. Die letzten Worte des Stücks gehören einem Chor: „Das Unbeschreibliche, hier ist’s getan.“",
 en:"Goethe sealed the manuscript of 'Faust II' in the summer of 1831 and had it printed only after his death. At the end angels carry off Faust's immortal part and say why they may: 'Whoever strives with all his might, him we can redeem.' It is not success that saves him, nor virtue — Faust has neither — but that he never stopped. The last words of the play belong to a chorus: 'The indescribable, here it is done.'",
 dk:"Und Mephisto? Er verliert die Seele, weil er im entscheidenden Augenblick abgelenkt ist: Die Engel streuen Rosen, und er verguckt sich in sie. Als er wieder hinsieht, ist Faust fort. Der Teufel wird um seinen Lohn geprellt – und Goethe gönnt ihm dazu noch die komischste Szene des Stücks.",dken:"And Mephisto? He loses the soul because at the decisive moment he is distracted: the angels scatter roses, and he becomes infatuated with them. When he looks again, Faust is gone. The devil is cheated of his wages — and Goethe grants him the funniest scene in the play on top of it."}
);

// ===== Mephisto · track S · x_s2_scn.js (owner: s2) — chapters 1–16 in full (realms I Schwarzwald, II Prag), their places, recaps and the two bosses' texts.
// Canon: PLAN-S §2. Line format: PLAN-S §3.1 (read by v2/c_s2.js). Narrator English in realms I–II; Sie throughout (du is offered in 21).
// Level: 1–8 A1 (present tense, main clauses, no Perfekt), 9–12 A2 without Perfekt, 13–16 A2 with Perfekt; no Konjunktiv II except „möchte"; no passive.
// Decisions (["C",id], texts are s4's; hidden until they exist): 1 l1 · 2 n2 · 3 b3 · 5 w5 · 6 z6 · 7 q7 · 8 s8 · 9 h9 · 10 g10 · 11 k11 · 12 s12,k12 · 13 s13 · 14 a14 · 15 r15.
// SCN[8].after and SCN[16].after: played after the won duel and before Bett vier (c_s2.js).
var SCN=SCN||{},CHX=CHX||{},BOSX=BOSX||{};
// ---------------------------------------------------------------- REALM I · DER SCHWARZWALD · A1
SCN[1]={scene:[
 ["N","You studied medicine for years. You can read an ECG in your sleep. And yet, in this forest, you cannot even order bread."],
 ["N","Night on the Tannenbühl, between the Murg and the Enz. In the old story a man who knows the right verse can call up a little man of glass here, and the little man grants three wishes. You know no verse. Somebody else steps out from between the firs."],
 ["M","Guten Abend, Herr Doktor. Sie sprechen kein Deutsch? Wie praktisch. Dann können Sie mir nicht widersprechen.","Good evening, Doctor. You don't speak German? How convenient. Then you cannot contradict me."],
 ["M","Ich mache Ihr Deutsch perfekt. Der Preis: Ihre Seele. Sie arbeiten? Dann bekommen Sie jeden Tag ein Stück zurück.","I will make your German perfect. The price: your soul. You work? Then you get a piece of it back every day."],
 ["M","Hier im Wald kauft ein Kollege Herzen. Er legt sie in Gläser. Ich nehme nur die Seele. Das Herz brauchen Sie noch – zum Lernen.","Here in the forest a colleague buys hearts. He puts them in jars. I take only the soul. You still need the heart — for learning."],
 ["N","You sign. The paper is long, the letters are small, and you cannot read one word of it. He folds it and puts it into his coat."],
 ["@","cast"],
 ["N","He holds up a lantern. The flame is orange. You put your hand near it. It is cold."],
 ["M","Das ist eine Laterne. Die Laterne ist kalt. Sie fragen: Warum? Später, Doktor. Sie haben noch kein Warum.","This is a lantern. The lantern is cold. You ask: why? Later, Doctor. You don't have a 'why' yet."],
 ["M","Der Weg ist lang. Wer trägt die Laterne? Sie oder ich? Sagen Sie es. Auf Deutsch.","The way is long. Who carries the lantern? You or I? Say it. In German."],
 ["C","l1"],
 ["@","task"],
 ["N","Your first task is your mouth. Arabic already gave you the hard sounds: the ach-sound is your خ, and the German r sits in the throat like your غ. What it did not give you: ü, ö, the soft ich-sound, p (not b), and e and o kept apart from i and u. The forest gives you the words: ü in Tannenbühl, ö in Köhler, the ich-sound in Michel and Männlein, p in Peter."],
 ["@","pay"],
 ["S","Ich bin müde. Ich will nach Hause. Es ist kalt.","I am tired. I want to go home. It is cold."],
 ["N","Mephisto walks ahead. The lantern throws orange light and no warmth. Behind you on the path something keeps pace with you — always two steps behind, never one."]]};

SCN[2]={scene:[
 ["N","Before dawn the path ends at a black lake under the Hornisgrinde: the Mummelsee. Every German noun carries a seal. Blue iron for der, blood red for die, bone green for das. Lose the seal and the word is a corpse."],
 ["M","Der See. Die Nacht. Das Wasser. Drei Wörter, drei Siegel. Lernen Sie jedes Wort mit seinem Siegel. Immer. Ohne Ausnahme. Sonst fresse ich es.","The lake. The night. The water. Three words, three seals. Learn every word with its seal. Always. No exceptions. Otherwise I eat it."],
 ["N","He presses a seal into your palm. Blue iron. It is cold too. You say 'die Tisch'. The seal burns for one second, the word falls dead on the path, and a black bird drops from a branch, takes it in its beak and flies off to the left."],
 ["M","„Die Tisch“? Eine Leiche spricht besser Deutsch.","'Die Tisch'? A corpse speaks better German."],
 ["M","Der Vogel hat eine Chefin. Sie sammelt Wörter ohne Siegel. Sie lernen sie noch kennen.","The bird has a boss. She collects words without a seal. You will get to know her yet."],
 ["@","cast"],
 ["N","Something rises out of the water: a woman with green hair and wet sleeves. A nixie, on her way home from a dance in a farmhouse down in the valley. She looks at the seal in your palm."],
 ["X","Die Nixe","Du bist neu hier. Wer bist du? Wie heißt du?","You are new here. Who are you? What is your name?"],
 ["C","n2"],
 ["N","Somewhere in the valley a cock crows. The nixie starts: she is late. She goes under without a sound, and a moment later the black water turns red."],
 ["M","Der See. Die See. Ein Buchstabe, und Sie stehen am Meer – nicht im Schwarzwald. Die Nixe kommt eine Stunde zu spät. Sehen Sie das Wasser? Rot. Wie „die“.","Der See is a lake. Die See is the sea. One letter, and you are standing by the ocean — not in the Black Forest. The nixie comes home an hour too late. See the water? Red. Like 'die'."],
 ["@","task"],
 ["M","Der Arzt. Die Ärztin. Das Krankenhaus. Sie sind „der“. Lernen Sie zuerst Ihren Artikel.","Der Arzt. Die Ärztin. Das Krankenhaus. You are 'der'. Learn your own article first."],
 ["@","pay"],
 ["S","Der, die, das. Wer braucht das? Niemand. Ich brauche nur eine Tasche.","Der, die, das. Who needs that? Nobody. All I need is a bag."],
 ["N","On the far shore the black bird sits on a branch with your dead word in its beak. It waits until you have seen it. Then it flies left."]]};

SCN[3]={scene:[
 ["N","Morning on the Kniebis. A charcoal burner's kiln smokes beside the path; nobody is there. Hansel dropped breadcrumbs to find his way back. The birds ate them. You drop sein and haben everywhere, and the birds eat those too."],
 ["N","The first time, Hansel dropped white pebbles. They shone in the moonlight like new coins, and the children walked home. Only the bread was eaten. Ich bin, du bist, er ist: these are your pebbles."],
 ["M","Ich bin. Du bist. Er ist. Drei Wörter, Doktor. Ein Kind lernt sie in einer Woche. Sie brauchen offenbar zwei.","I am, you are, he is. Three words, Doctor. A child learns them in a week. You apparently need two."],
 ["@","cast"],
 ["N","You look back. Every mistake you made today lies on the path like a crumb of bread. Something small and dark bends down and picks them up, one by one. When it straightens up, you see its face. It is yours."],
 ["S","Ich nehme das Brot. Ich nehme jeden Fehler. Ich habe eine Tasche. Sie ist schon schwer.","I take the bread. I take every mistake. I have a bag. It is already heavy."],
 ["C","b3"],
 ["M","Das ist Ihr Schatten, Doktor. Er ist Sie – nur ohne Grammatik. Er hat keine Arbeit. Er hat nur eine Tasche.","That is your shadow, Doctor. He is you — only without grammar. He has no work. He only has a bag."],
 ["N","What he does not pick up, the birds take. They all fly the same way: to the left, where a small yellow light has just come on."],
 ["@","task"],
 ["M","Sie sind Arzt. Sie haben Dienst. Sie sind müde, aber Sie haben Zeit. Das sind Kiesel, Doktor. Sammeln Sie Kiesel. Kein Brot.","You are a doctor. You are on duty. You are tired, but you have time. Those are pebbles, Doctor. Collect pebbles. Not bread."],
 ["@","pay"],
 ["N","Far to the left the yellow light is still burning. It looks warm. Your shadow stands still and looks at it for a long time."]]};

SCN[4]={scene:[
 ["N","The path follows a stream called the Wolf down to Wolfach, where raftsmen bind fir trunks into rafts for Holland. Then it splits. Left is dark. Right is dark. Mephisto does not stop; he never stops. German has one law older than these trees: in a statement the verb stands in second place. Everything else may move. The verb may not."],
 ["M","Heute gehe ich vorn. Morgen gehe ich auch vorn. Sie gehen hinten. Sehen Sie? Das Verb ist immer Nummer zwei. Wie Sie, Doktor.","Today I walk in front. Tomorrow I walk in front too. You walk behind. See? The verb is always number two. Like you, Doctor."],
 ["M","Ein Floß hat viele Stämme, und jeder liegt woanders. Nur der Steuermann steht immer auf dem zweiten Glied. Er ist das Verb. „Heute fährt das Floß nach Holland.“ Steht er falsch? Dann liegen Sie im Wasser.","A raft has many trunks, and each one lies somewhere else. Only the steersman always stands on the second section. He is the verb. 'Today the raft goes to Holland.' Is he standing in the wrong place? Then you are in the water."],
 ["@","cast"],
 ["N","You try a sentence. It comes out wrong: Heute ich gehe. The lantern flickers. Far off between the trees a window lights up — yellow, warm, the shape of a small house. It smells of sugar."],
 ["M","„Heute ich gehe“? Nein. „Heute gehe ich.“ Dort wohnt eine Frau. Sie sammelt falsche Sätze. Jetzt hat sie einen von Ihnen.","'Heute ich gehe'? No. 'Heute gehe ich.' A woman lives over there. She collects wrong sentences. Now she has one of yours."],
 ["@","task"],
 ["S","Heute lerne ich nicht. Morgen lerne ich. Vielleicht. Dort ist ein Haus. Dort ist es warm. Jetzt gehe ich nach links.","Today I won't study. Tomorrow I will. Maybe. There is a house there. It is warm there. Now I am going left."],
 ["N","The voice behind you has every verb in the right place. You notice that. You do not like it."],
 ["@","pay"],
 ["M","Hören Sie nicht auf ihn. Er spricht richtig, aber er geht falsch. Rechts ist der Weg. Links ist der Ofen. Jetzt kommen Sie.","Don't listen to him. He speaks correctly, but he walks wrongly. On the right is the path. On the left is the oven. Now come."],
 ["N","When you look round, the path behind you is empty. On the left, in the wet moss, two footprints lead towards the window. They are the size of your own."]]};

SCN[5]={scene:[
 ["N","Down in the Gutach valley the unmarried women wear straw hats with red woollen pompoms. You think of Little Red Riding Hood; Mephisto tells you the tale is from Hesse. The left path is empty now. Your shadow went that way, towards the warm window, and has not come back. In the light of his lantern you throw no shadow at all."],
 ["N","Then a hut. A bed. A cap. Somebody does something to somebody: that somebody is in the accusative, and if he is masculine, der becomes den and ein becomes einen. Die and das stay as they are."],
 ["M","Der Wolf frisst die Großmutter. Der Jäger findet den Wolf. Den! Nicht der. Der Jäger tut es, der Wolf erleidet es – also Akkusativ. Lernen Sie das. Sonst fresse ich Sie. Jetzt Sie: Der Wolf frisst – wen?","The wolf eats the grandmother. The huntsman finds the wolf. Den! Not der. The huntsman does it, the wolf suffers it — so accusative. Learn that. Otherwise I eat you. Now you: the wolf eats — whom?"],
 ["C","w5"],
 ["@","cast"],
 ["N","But the hunter has not been eaten. He sits at the table and cleans his gun. In the bed lies something with grandmother's cap and the wrong teeth. It is asleep."],
 ["X","Der Jäger","Guten Abend. Sie suchen den Weg? Ich sehe einen Mann und einen Teufel. Aber ich sehe keinen Schatten. Wo haben Sie den Schatten?","Good evening. You are looking for the path? I see a man and a devil. But I see no shadow. Where do you have your shadow?"],
 ["X","Du","Ich habe keinen Schatten. Ich suche den Schatten. Ich suche auch einen Weg.","I have no shadow. I am looking for the shadow. I am also looking for a path."],
 ["X","Der Jäger","Die Hexe hat den Schatten. Sie hat ein Haus, einen Ofen und einen Käfig. Der Käfig ist klein. Ihr Schatten sitzt dort und isst Brot.","The witch has the shadow. She has a house, an oven and a cage. The cage is small. Your shadow sits there and eats bread."],
 ["M","Ohne Schatten nehme ich Sie nicht mit. Ich kaufe keinen halben Kunden. Wir holen ihn. Nein: Sie holen ihn.","Without a shadow I am not taking you along. I do not buy half a client. We fetch him. No: you fetch him."],
 ["@","task"],
 ["M","In Hornberg schießt man den ganzen Tag. Am Abend kommt der Herzog, und man hat kein Pulver mehr. Den Herzog! Sie schießen auch viel. Treffen Sie den Akkusativ.","In Hornberg they fire all day. In the evening the duke comes, and they have no powder left. Den Herzog! You fire a lot too. Hit the accusative."],
 ["N","You step closer to the bed. It is an old woman's bed, with a number on a little brass plate. You cannot read the number yet. You only know the article: das Bett."],
 ["M","Sehen Sie das Bett, Doktor? Sie sehen es wieder. Ohne Wolf.","Do you see the bed, Doctor? You will see it again. Without a wolf."],
 ["@","pay"],
 ["S","Der Wolf frisst den Mann. Der Wald frisst den Weg. Die Sprache frisst dich. Ich esse nur Brot. Hier ist es warm.","The wolf eats the man. The forest eats the path. The language eats you. I only eat bread. It is warm here."],
 ["N","The voice comes from far off on the left, thin as smoke. The thing in the bed opens one eye. The hunter lifts the gun. Mephisto is already at the door."],
 ["X","Der Jäger","Gehen Sie! Die Hexe macht den Ofen heiß. Um sieben Uhr hat sie einen Braten.","Go! The witch is heating the oven. At seven o'clock she has a roast."]]};

SCN[6]={scene:[
 ["N","Triberg, in winter. A clock carver's room: a hundred cuckoo clocks on the wall, each a little wrong, each calling a different hour, and under the window the roar of the waterfall. Here the numbers are spoken backwards. Fünfundzwanzig: five-and-twenty. Blood pressure, doses, dates, the time of a shift — all of it backwards."],
 ["M","Hundertzwanzig zu achtzig. Sagen Sie es. Schneller. Sie zählen – und Ihr Patient blutet.","A hundred and twenty over eighty. Say it. Faster. You count — and your patient bleeds."],
 ["M","Fragen Sie den Kuckuck: „Kuckuck, sag mir doch: Wie viele Jahre leb ich noch?“ … Dreiundzwanzig. Fünfundvierzig. Er lügt. Er ist aus Holz. Aber Sie zählen richtig.","Ask the cuckoo: 'Cuckoo, tell me true: how many years have I still to live?' … Twenty-three. Forty-five. He is lying. He is made of wood. But you are counting correctly."],
 ["@","cast"],
 ["N","Across the valley the yellow window is burning again. The sugar house has moved. It is always one valley ahead. On the wall one of the clocks begins to strike."],
 ["M","Die Uhr schlägt. Zählen Sie. Wie spät ist es?","The clock is striking. Count. What time is it?"],
 ["C","z6"],
 ["M","Drei Uhr. Vergessen Sie die Stunde nicht. Sie gehört einmal Ihnen.","Three o'clock. Do not forget the hour. One day it will be yours."],
 ["N","Through the window of the sugar house you see the witch feed your shadow through the bars of a cage. She counts every crumb, and he counts with her. He is not trying to get out."],
 ["X","Die Hexe","Achtundneunzig, neunundneunzig, hundert. Um sieben Uhr ist er fett. Um sieben Uhr ist der Ofen heiß. Vier Stunden noch.","Ninety-eight, ninety-nine, a hundred. At seven o'clock he is fat. At seven o'clock the oven is hot. Four more hours."],
 ["S","Achtundneunzig, neunundneunzig, hundert. Ich zähle mit. Hier ist es warm. Hier bekomme ich Brot. Hier lernt keiner.","Ninety-eight, ninety-nine, a hundred. I am counting along. It is warm here. Here I get bread. Here nobody studies."],
 ["@","task"],
 ["M","Und jetzt rechnen Sie: drei Uhr plus vier Stunden. Wie spät ist es dann? Laut. Falsch zählen ist auch zählen. Aber nicht in der Notaufnahme.","And now do the sum: three o'clock plus four hours. What time is it then? Aloud. Counting wrong is still counting. But not in the emergency department."],
 ["@","pay"],
 ["N","Seven o'clock. An oven. Four hours. You start to walk, and for the first time you walk faster than Mephisto."]]};

SCN[7]={scene:[
 ["N","„Ei, Großmutter, was hast du für große Ohren!“ Every German knows the line, and it is not even a question: it is an exclamation with was für. The questions come from the wolf: Wohin gehst du? Wo wohnt deine Großmutter? Wer, was, wo, wann, warum, wie. Ask well, and you learn everything. The wolf did."],
 ["N","The Höllental. The valley narrows until the rocks almost touch. The only way out of the forest runs downhill through Hell, to a station called Himmelreich. Every signpost is a question."],
 ["M","Wohin führt dieser Weg? In die Hölle. Woher kommt der Zug? Aus Himmelreich. Von wem sind diese Namen? Nicht von mir. Ich mache es umgekehrt.","Where does this path lead? To Hell. Where does the train come from? From the Kingdom of Heaven. Whose names are these? Not mine. I do it the other way round."],
 ["M","Im Krankenhaus fragen Sie den ganzen Tag. Seit wann? Wo genau? Wie stark? Sie fragen falsch? Dann lügt der Patient. Wie ich.","In the hospital you ask questions all day. Since when? Where exactly? How bad? You ask wrongly? Then the patient lies. Like me."],
 ["@","cast"],
 ["S","Warum bist du hier? Wohin gehst du? Wer wartet auf dich?","Why are you here? Where are you going? Who is waiting for you?"],
 ["N","The tale is all questions. So ask him one."],
 ["C","q7"],
 ["@","task"],
 ["N","Half past six. At the end of the valley stands the sugar house, as if it had always stood there. You knock."],
 ["@","pay"],
 ["X","Die Hexe","Wer ist da? Was willst du? Wen suchst du? – Ah. Den Schatten. Komm herein. Die Tür ist offen. Der Ofen auch.","Who is there? What do you want? Whom are you looking for? — Ah. The shadow. Come in. The door is open. So is the oven."]]};

SCN[8]={scene:[
 ["N","The house stands on the summit of the Kandel, under a rock called the Devil's Pulpit. It is built of bread, roofed with cake, and its windows are clear sugar. It is almost seven, and the oven is already hot. On a shelf stand thirty jars. In every jar lies a noun you once said without its seal. Beside the oven hangs a cage, and in the cage sits your shadow. He is fat. He has eaten every crumb she gave him."],
 ["N","The witch is as old as stone. Her eyes are red, and she cannot see far. But she can smell every word without a seal."],
 ["X","Die Hexe","Guten Abend, Herr Doktor. Komm herein! Das Haus ist warm. Der Ofen ist heiß. Hier lernt man nicht. Hier isst man.","Good evening, Doctor. Come in! The house is warm. The oven is hot. Nobody studies here. Here one eats."],
 ["@","cast"],
 ["S","Die Hexe ist alt und stark. Du bist neu und schwach. Das Haus ist nicht für dich. Es ist für mich. Geh nach Hause.","The witch is old and strong. You are new and weak. The house is not for you. It is for me. Go home."],
 ["X","Du","Das ist mein Schatten. Ich brauche den Schatten. Ich gehe nicht.","That is my shadow. I need the shadow. I am not leaving."],
 ["X","Die Hexe","Dein Schatten? Er kostet dreißig Wörter. Jedes Wort mit Siegel: der, die oder das. Ein Fehler – und ich habe einen Braten mehr.","Your shadow? He costs thirty words. Every word with its seal: der, die or das. One mistake — and I have one roast more."],
 ["X","Die Hexe","Du bist müde. Trink. Ein Becher, und du bist heute schnell fertig.","You are tired. Drink. One cup, and you are finished quickly today."],
 ["C","s8"],
 ["M","Sie will Sie in den Ofen schieben. Mir ist das egal. Aber Sie sind meine Investition. Also: Artikel, Doktor. Leben Sie.","She wants to push you into the oven. I don't care. But you are my investment. So: articles, Doctor. Live."],
 ["@","task"],
 ["N","He does not come in. He stands at the door and holds the lantern so that you can read the labels on the jars. It is the only help he gives."],
 ["M","Ich bleibe an der Tür. Ich will es so. Der Tisch. Die Tür. Das Bett. Sie kennen die Wörter. Sagen Sie sie. Laut. Ich höre zu.","I stay at the door. That is my choice. Der Tisch. Die Tür. Das Bett. You know the words. Say them. Aloud. I am listening."],
 ["@","pay"],
 ["X","Die Hexe","Knusper, knusper, Kneischen, wer knuspert an meinem Häuschen? Ein Wort ohne Siegel! Wir fangen an: der, die oder das?","Nibble, nibble, little mouse, who is nibbling at my house? A word without its seal! We begin: der, die or das?"],
 ["N","The first jar opens."]],
after:[
 ["N","She falls into her own oven. The jars break one after another, and the words fly out with their seals on. Above the house the rock cracks, and a piece of the Devil's Pulpit falls into the valley. The cage door hangs open. Your shadow does not move."],
 ["S","Hier ist es warm. Dort ist es kalt. Ich bleibe.","It is warm here. It is cold there. I am staying."],
 ["X","Du","Nein. Wir gehen. Du und ich.","No. We are going. You and I."],
 ["N","He climbs out. He is heavy now. He picks up his bag. He does not say thank you. Behind the house the trees end, and the path runs down out of the forest."],
 ["N","You come down out of the forest at Staufen. On the market square stands an inn, the Löwen. Mephisto does not look at it."],
 ["M","Zimmer fünf. Vor fünfhundert Jahren stirbt dort ein Kunde von mir. Er ist auch Doktor. Er lernt nicht, er wünscht nur. Fragen Sie nicht. Gehen Sie weiter.","Room five. Five hundred years ago a client of mine died there. He was a doctor too. He did not learn, he only wished. Do not ask. Walk on."],
 ["M","Von hier fährt ein Zug nach Osten. In Prag gibt es Kaffee und Menschen. Beides ist bitter. Kommen Sie.","From here a train goes east. In Prague there is coffee, and people. Both are bitter. Come."]]};

// ---------------------------------------------------------------- REALM II · PRAG, UM 1912 · A2
SCN[9]={scene:[
 ["N","You leave the forest with soot on your hands and a heavy shadow behind you. Prague, about 1912. The night train stops at the Staatsbahnhof, and across the street is the Café Arco: electric light on marble tables, newspapers from all over Europe on wooden holders, a room full of people who all speak at once. Every sentence here has someone it is given to: mit dem Kaffee, von der Kellnerin, zum Arzt. After mit, nach, aus, zu, von, bei, seit: always dative."],
 ["X","Der Ober","Guten Abend. Was darf es sein?","Good evening. What will it be?"],
 ["X","Du","Guten Abend. Ich möchte einen Kaffee mit … mit die Milch, bitte.","Good evening. I would like a coffee with … with the milk (wrong article), please."],
 ["N","The head waiter looks at you the way a customs officer looks at a suitcase. He writes something down. Under the table something as small as a crumb hits the floor. Nobody looks."],
 ["X","Der Ober","Mit Milch. Oder: mit der Milch. Hier in Prag sagt man: mit Obers. Bitte sehr, bitte gleich.","With milk. Or: with the milk. Here in Prague we say 'mit Obers' (Obers = Sahne, cream; Austrian). Coming right away."],
 ["@","cast"],
 ["M","Geben Sie dem Kellner Trinkgeld. Dem! Er bekommt etwas – also Dativ. Sie dagegen bekommen von mir nichts.","Give the waiter a tip. Dem! He receives something — so dative. You, on the other hand, receive nothing from me."],
 ["M","Zwei Kaffee: einer für mich, einer für Sie. Ich trinke beide. Der zweite war für Sie. Aber Sie suchen zu lange nach dem Dativ.","Two coffees: one for me, one for you. I drink both. The second one was for you. But you take too long looking for the dative."],
 ["X","Der Ober","Sie sind neu hier? Dann gehen Sie bald zum Amt. Ohne Anmeldung bleibt bei uns niemand lange. Sie haben vierzehn Tage.","You are new here? Then go to the office soon. Without registration nobody stays with us for long. You have fourteen days."],
 ["M","Beim Amt habe ich keine Macht. Dort hilft Ihnen kein Teufel. Dort hilft nur ein Formular. Sie gehen allein – mit Ihrem Pass und mit Ihrem Deutsch.","At the office I have no power. No devil helps you there. Only a form helps there. You go alone — with your passport and with your German."],
 ["@","task"],
 ["N","From the tiled stove in the corner comes a knock. Three times. A thin old voice, very far away, as if from the bottom of an oven in another country."],
 ["X","Eine Stimme im Ofen","Hilf mir! Mir ist heiß. Hilf mir!","Help me! I am so hot. Help me!"],
 ["M","Die Hexe. Sie lebt noch – im Ofen, wie alle Hexen. Helfen Sie ihr? Ihr, Doktor. Der Hexe. Dativ.","The witch. She is still alive — in the oven, like all witches. Will you help her? Ihr, Doctor: her. Der Hexe: the witch. Dative."],
 ["C","h9"],
 ["@","pay"],
 ["S","Der Stadt gefällst du nicht. Dem Kellner antwortest du falsch. Mir kannst du glauben: Wir gehören nicht hierher. Ich will nach Hause. Ich finde einen Weg.","The city does not like you. You answer the waiter wrongly. You can believe me: we do not belong here. I want to go home. I will find a way."],
 ["N","When you look down, your shadow is not under your chair. He is under the next table, on his knees, picking something up from the floor. He puts it into the bag."]]};

SCN[10]={scene:[
 ["N","Under the roof of the Old-New Synagogue, the legend says, lies a clay man. The legend has two versions: a slip of parchment in his mouth, or a word on his forehead that kills him when one letter is taken away. Mephisto prefers the forehead. Movement takes the accusative: in den Keller. Standing still takes the dative: im Keller. Tonight you climb."],
 ["X","Der Ober","Auf den Dachboden? Nein. Dorthin geht man nicht. Die Stiege ist alt. Auf dem Dachboden liegt etwas. Lassen Sie es liegen.","Up to the attic? No. One does not go there. The stairs are old (Stiege = Treppe; Austrian). Something lies in the attic. Let it lie."],
 ["M","Wohin? Akkusativ. Wo? Dativ. Ein Lehmklumpen versteht das. Sie nicht? Sie steigen auf den Dachboden. Dann stehen Sie auf dem Dachboden. Ich bleibe auf der Treppe.","Where to? Accusative. Where? Dative. A lump of clay understands this. You don't? You climb up to the attic. Then you stand in the attic. I stay on the stairs."],
 ["@","cast"],
 ["N","He stops on the last step and comes no further. He says nothing about it. Dust, beams, a smell of river mud. The clay man lies between two chests: three metres long, grey, with folded hands. His forehead is smooth. If a word was ever written there, it is gone."],
 ["M","Auf seiner Stirn steht nichts mehr. Auf Ihrer Stirn steht etwas: „Anfänger“. Das Wort ist von mir. Wischen Sie es weg – Buchstabe für Buchstabe.","Nothing is written on his forehead any more. On yours there is something: 'Anfänger' — beginner. The word is mine. Wipe it off — letter by letter."],
 ["C","g10"],
 ["@","task"],
 ["X","Du","Sehen Sie dort: Neben dem Arm ist ein Loch. Hier fehlt ein Stück Lehm. Wer nimmt Lehm von einem Golem?","Look there: beside the arm there is a hole. A piece of clay is missing here. Who takes clay from a golem?"],
 ["N","A piece the size of a loaf of bread has been cut out of the Golem's side. The cut is fresh. In the dust on the floor are footprints. They lead from the Golem to the stairs. You put your foot into one of them. It fits."],
 ["M","Interessant. Jemand geht mit Ihren Schuhen durch die Stadt. Und Sie stehen hier, in Ihren Schuhen. Zählen Sie nach, Doktor: Wie viele sind Sie?","Interesting. Somebody is walking through the city in your shoes. And you are standing here, in your shoes. Count, Doctor: how many of you are there?"],
 ["@","pay"],
 ["S","Du gehst in das Café. Ich sitze schon im Café. Ich bin immer vor dir da.","You walk into the café. I am already sitting in the café. I am always there before you."],
 ["N","The voice comes from below, from the street. When you reach the little window, the lane is empty. Somewhere down there a door is still swinging."]]};

SCN[11]={scene:[
 ["N","Morning in the café. Modal verbs clamp a sentence like an iron trap: the modal in second place, the infinitive at the very end. Everything you want to say is caught between the jaws. The head waiter puts a letter on your table. It has a window and no stamp. German letters with a window never bring good news."],
 ["D","Schreiben vom Amt","Sehr geehrter Herr Dr. {LAST}, Sie müssen sich anmelden. Sie können einen Termin buchen. Ohne Termin dürfen Sie nicht kommen. Sie sollen Ihren Pass mitbringen. Der nächste freie Termin ist in sechs Wochen. Parteienverkehr: Montag bis Freitag, 8 bis 12 Uhr.","Dear Dr {LAST}, you must register. You can book an appointment. Without an appointment you may not come. You are to bring your passport. The next free appointment is in six weeks. Office hours for the public (Parteienverkehr; Austrian): Monday to Friday, 8 to 12."],
 ["M","„Ich muss heute arbeiten.“ Hören Sie das Zuschnappen? Muss … arbeiten. Klack. Ich liebe Fallen. Und das Amt baut die schönsten.","'Ich muss heute arbeiten.' Hear the snap? Muss … arbeiten. Clack. I love traps. And the office builds the finest ones."],
 ["@","cast"],
 ["X","Du","Sechs Wochen! Ich habe nur vierzehn Tage. Was soll ich machen? – Entschuldigung. Können Sie mir helfen?","Six weeks! I have only fourteen days. What am I to do? — Excuse me. Can you help me?"],
 ["X","Der Ober","Ich kann. Ich will nicht. – Na gut. Ich muss wohl. Sie müssen früh kommen, um sieben. Dann können Sie eine Nummer ziehen. Aber Sie dürfen keinen Fehler im Formular machen.","I can. I don't want to. — All right. I suppose I must. You must come early, at seven. Then you can take a number. But you may not make a mistake in the form."],
 ["X","Der Ober","Und das Formular? Das kann ich nicht ausfüllen. Fragen Sie den Dünnen im Goldenen Gässchen, Nummer 22. Er arbeitet im Amt. Er kennt die Formulare. – Möchten Sie noch etwas?","And the form? I cannot fill that in. Ask the thin one in the Golden Lane, number 22. He works at the office. He knows the forms. — Would you like anything else?"],
 ["C","k11"],
 ["@","task"],
 ["M","Sie müssen lernen. Sie sollen schlafen. Sie wollen aufhören. Und Sie dürfen … – nein. Das Verb sage ich Ihnen noch nicht.","You must study. You are supposed to sleep. You want to stop. And you may … — no. I am not telling you that verb yet."],
 ["N","He closes the trap with two fingers. For a moment it looked as if he had almost said 'gehen'."],
 ["@","pay"],
 ["S","Du musst nicht lernen. Du kannst aufhören. Du darfst müde sein. Ich will es so. Und ich kann jetzt etwas bauen. Du sollst es nicht sehen.","You don't have to study. You can stop. You are allowed to be tired. I want it that way. And now I can build something. You are not supposed to see it."],
 ["N","Under the next table the bag stands open. It is almost empty. Something on the floor beside it has the shape of a hand. It is grey, and it is still wet."]]};

SCN[12]={scene:[
 ["N","Some verbs are torn in two when they move: anrufen becomes rufe … an, ausfüllen becomes fülle … aus. The prefix is flung to the end of the sentence like a severed hand. Evening, in your room above the café. In the wardrobe stands a small casket that was not there this morning."],
 ["C","s12"],
 ["N","Then the Golden Lane, under the castle wall: houses the size of cupboards. In number 22 a thin man with large ears writes every evening until midnight. Then he walks down the castle steps to his bed, and at eight he is at his desk in the office. Through the little window you see him writing."],
 ["C","k12"],
 ["@","cast"],
 ["N","The door opens before you have decided anything. The thin man has seen the form in your hand."],
 ["X","Der dünne Mann","Verzeihen Sie. Sie lernen Deutsch? Ich schreibe es seit Jahren und verstehe das Amt immer noch nicht. Zeigen Sie her. – Gut. Füllen Sie das hier aus. Kreuzen Sie „ledig“ oder „verheiratet“ an. Tragen Sie Ihren Beruf ein. Unterschreiben Sie unten.","Forgive me. You are learning German? I have been writing it for years and still don't understand the office. Show me. — Good. Fill this in. Tick 'single' or 'married'. Enter your profession. Sign at the bottom."],
 ["X","Du","Ich fülle das Formular aus. Ich kreuze an. Ich trage ein: Beruf – Arzt. Ich unterschreibe.","I fill in the form. I tick. I enter: profession — physician. I sign."],
 ["X","Der dünne Mann","Arzt? Auf Ihrer Stirn steht etwas anderes. – Egal. Geben Sie das Formular am Schalter ab. Ziehen Sie eine Nummer. Passen Sie auf: Man ruft die Nummer nur einmal auf. Stehen Sie sofort auf.","Physician? Something else is written on your forehead. — Never mind. Hand the form in at the counter. Take a number. Pay attention: they call the number only once. Stand up at once."],
 ["@","task"],
 ["M","„Ich rufe den Oberarzt an.“ Die Hand liegt am Ende. Und bitte, Doktor: „Machen Sie den Mund auf.“ Mit Sie. Ihr Patient ist kein Hund.","'Ich rufe den Oberarzt an.' The hand lies at the end. And please, Doctor: 'Machen Sie den Mund auf.' With Sie. Your patient is not a dog."],
 ["M","Er schreibt abends und arbeitet am Tag. Wie Sie. Er klagt auch. Aber er klagt auf Deutsch. Er kennt eine Geschichte über einen Mann vor einer Tür. Der Mann wartet sein Leben lang. Am Ende macht man die Tür zu.","He writes in the evening and works by day. Like you. He complains too. But he complains in German. He knows a story about a man in front of a door. The man waits all his life. In the end they close the door."],
 ["@","pay"],
 ["S","Gib auf. Hör auf. Mach das Buch zu. Ich fange gar nicht erst an. – Doch. Ich fange an. Ich baue etwas auf. Bald steht es auf.","Give up. Stop. Close the book. I won't even begin. — No, I will. I am beginning. I am building something. Soon it will stand up."],
 ["N","The thin man looks up from the form to the window. Outside, something heavy walks past. It does not walk like a man. It walks like someone who is still learning how."],
 ["X","Der dünne Mann","Machen Sie die Tür zu. Schnell. Und sehen Sie nicht hinaus.","Close the door. Quickly. And do not look out."]]};

SCN[13]={scene:[
 ["N","Night in the café. The chairs are on the tables. Every patient begins with the past: Was ist passiert? Ich bin gestürzt. Ich habe gegessen. Movement and change take sein; everything else takes haben. Tonight Mephisto does not ask about a patient. He asks about you."],
 ["M","Was haben Sie heute gemacht, Doktor? Sagen Sie es im Perfekt. Ich habe Zeit. Der Ober ist schon gegangen.","What did you do today, Doctor? Say it in the perfect tense. I have time. The head waiter has already gone home."],
 ["C","s13"],
 ["@","cast"],
 ["M","Ich weiß es schon. „Ich habe gearbeitet. Ich bin nach Hause gekommen. Ich habe gelernt.“ Und dann, ganz leise: „Ich habe viele Fehler gemacht.“ Das sagen alle.","I know already. 'I worked. I came home. I studied.' And then, very quietly: 'I made a lot of mistakes.' Everybody says that."],
 ["M","Gestern haben Sie gesagt: „Ich habe gefallen.“ Sie sind gefallen, Doktor. Tief. Wie alle meine Kunden. Aber Sie sind wieder aufgestanden. Das habe ich notiert.","Yesterday you said: 'Ich habe gefallen.' You fell, Doctor — with sein: Sie sind gefallen. Deep. Like all my clients. But you got up again. I made a note of that."],
 ["M","In Prag sagt man übrigens: „Ich bin gesessen.“ In Heidelberg sagt man: „Ich habe gesessen.“ Verstehen müssen Sie beides. Schreiben Sie das Deutsche aus Heidelberg.","In Prague, by the way, they say 'Ich bin gesessen' (I sat — with sein; Austrian). In Heidelberg they say 'Ich habe gesessen'. You have to understand both. Write the German of Heidelberg."],
 ["@","task"],
 ["N","He turns a page in a small black book. For one second you can read an old line. It is not about you. The ink is brown."],
 ["D","Notizbuch · eine alte Seite","Ich habe einmal gewettet. Ich habe verloren. Ich habe es niemandem gesagt.","I made a bet once. I lost. I told nobody."],
 ["M","Das haben Sie nicht gelesen. Das ist nicht passiert. – Das war übrigens auch Perfekt.","You did not read that. That did not happen. — That, by the way, was the perfect tense too."],
 ["@","pay"],
 ["S","Was hast du gelernt? Was hast du vergessen? Ich bin geblieben und habe alles gesehen. Ich habe auch das Buch gesehen.","What have you learned? What have you forgotten? I stayed and saw everything. I saw the book too."],
 ["N","Under the tables something has changed. Where your wrong sentences fell today, a little grey dust lies on the floor. You touch it. It is clay, and it is still wet."]]};

SCN[14]={scene:[
 ["N","Seven in the morning, Pořitscher Straße 7. In the real Prague this was the address of the insurance office where Kafka worked; in Heidelberg you will meet his heirs: the Bürgeramt, the Ausländerbehörde, the Ärztekammer. Here it is simply das Amt: a hall with forty chairs, one counter and a machine that gives out numbers. Mephisto stays at the entrance and reads the notices on the wall with real pleasure."],
 ["M","Ein Formular, Doktor. Nur eins. Dann noch eins. Dann ein drittes, um die ersten beiden zu bestätigen. Ich habe die Bürokratie nicht erfunden – aber ich bewundere sie.","One form, Doctor. Just one. Then another. Then a third to confirm the first two. I didn't invent bureaucracy — but I admire it."],
 ["M","Formular 66-6: Antrag auf Rückgabe der Seele. Es liegt dort am Schalter, im Fach ganz unten. Haben Sie Ihren Pass mitgebracht? Ihre Meldebescheinigung? Ihre Seele? Ach nein. Die habe ja ich.","Form 66-6: application for return of the soul. It lies there at the counter, in the bottom tray. Did you bring your passport? Your registration certificate? Your soul? Ah, no. I have that."],
 ["@","cast"],
 ["N","You take a number: 47. You sit down. You have practised your sentence all night: Guten Morgen, ich möchte mich anmelden."],
 ["C","a14"],
 ["@","task"],
 ["S","Ich habe eine Nummer gezogen. Ich warte auch. Meine Nummer ist deine Nummer.","I took a number. I am waiting too. My number is your number."],
 ["@","pay"],
 ["X","Fräulein Svobodová","Nummer 47, bitte!","Number 47, please!"],
 ["N","You stand up. Somebody else has stood up first. He wears your coat. He is grey, and he is a head taller than the footprints in the attic. He puts a number 47 on the counter and opens his mouth."],
 ["X","Der Graue","Guten Morgen. Ich möchte mir anmelden. Ich habe gekommt mit die Zug. Ich bin Anfänger.","Good morning. I would like to register (wrong pronoun). I came (wrong participle, wrong auxiliary) by train (wrong article). I am a beginner. — Every mistake in it is one of yours."],
 ["X","Fräulein Svobodová","Ich schreibe, was Sie sagen. Anfänger, Punkt. Unterschreiben Sie hier. Hier ist Ihr Meldezettel. Der Nächste, bitte!","I write what you say. Beginner, full stop. Sign here. Here is your registration slip (Meldezettel = Meldebescheinigung; Austrian). Next, please!"],
 ["D","Meldezettel","Name: {NAME}. Wohnort: Prag. Beruf: Anfänger. Angemeldet seit heute. Dieser Meldezettel gilt nur mit Stempel.","Name: {NAME}. Residence: Prague. Profession: beginner. Registered as of today. This registration slip is valid only with a stamp."],
 ["X","Du","Entschuldigung! Das bin ich nicht. Das ist mein Name. Das ist mein Papier!","Excuse me! That is not me. That is my name. That is my paper!"],
 ["X","Fräulein Svobodová","Sie haben keine Nummer mehr. Ohne Nummer kann ich nichts für Sie tun. Ziehen Sie eine neue. Der nächste freie Termin ist in sechs Wochen.","You no longer have a number. Without a number I can do nothing for you. Take a new one. The next free appointment is in six weeks."],
 ["N","The grey man folds the paper, puts it into your coat — his coat now — and walks out past Mephisto, who steps aside for him politely, as one does for an official."],
 ["M","Jetzt gibt es Sie zweimal: einmal mit Papier und einmal ohne. Das Amt glaubt dem Papier. Immer.","Now there are two of you: one with a paper and one without. The office believes the paper. Always."]]};

SCN[15]={scene:[
 ["N","The Josefstadt is being torn down street by street. Behind the new façades lies one last crooked yard, and in it an antiquarian's shop. Herr Taussig is small and very old. The children call him Rumpelstilzchen, because he knows the name of every thing — in the plural. In the tale you must guess the little man's name. In German you must guess more than that: the plural. Ärzte, Patienten, Tabletten, Kinder, Mütter. Five endings and a mad umlaut."],
 ["X","Herr Taussig","Ein Buchstabe, mein Herr, ist nie klein. Also: Ein Arzt, zwei …? Eine Tablette, zwei …? Ein Kind, zwei …? Sie haben drei Antworten. Bei einem Fehler gehört mir Ihr erstes deutsches Wort.","A letter, sir, is never small. So: one doctor, two …? One tablet, two …? One child, two …? You have three answers. With one mistake your first German word belongs to me."],
 ["@","cast"],
 ["X","Du","Zwei Ärzte. Zwei Tabletten. Zwei … Kinder.","Two doctors. Two tablets. Two … children."],
 ["N","The old man stamps so hard that his foot goes through the floorboards. Mephisto watches him the way a surgeon watches a student close a wound."],
 ["M","Letzte Woche haben Sie hier „zwei Tablette“ gesagt. Da hat er so laut gelacht, dass er sich fast entzweigerissen hat. Heute nicht. Schade. Ich habe gern zugesehen.","Last week, in here, you said 'zwei Tablette'. He laughed so hard that he almost tore himself in two. Not today. A pity. I enjoyed watching."],
 ["@","task"],
 ["X","Herr Taussig","Und der da? Wie heißt er? Er hat viele Namen. Ich kenne alle. Aber für einen Namen muss man bezahlen. Ich sage Ihnen seinen Namen, und Sie geben mir Ihren Schatten. Ein Schatten, zwei Schatten – ich sammle sie.","And that one there? What is he called? He has many names. I know them all. But for a name one has to pay. I tell you his name, and you give me your shadow. One shadow, two shadows — I collect them."],
 ["C","r15"],
 ["X","Herr Taussig","Ihr Name steht jetzt auf einem Papier. Das Papier hat ein anderer. Holen Sie es zurück. Er lernt schon unterschreiben.","Your name is on a paper now. Somebody else has the paper. Get it back. He is already learning to sign."],
 ["@","pay"],
 ["M","Er lügt nicht. Namen sind teuer. Wer den Namen kennt, hat die Macht. Darum sage ich Ihren Namen nie, Doktor. Ich will Ihre Macht nicht. Noch nicht.","He is not lying. Names are expensive. Whoever knows the name has the power. That is why I never say your name, Doctor. I do not want your power. Not yet."],
 ["S","Ich weiß, dass du zweifelst. Ich weiß nicht, ob du bleibst. Aber ich kenne deinen Namen. Ich sage ihn jeden Abend. Leise.","I know that you doubt. I don't know whether you will stay. But I know your name. I say it every evening. Quietly."]]};

SCN[16]={scene:[
 ["N","Night. The café is full. At your table sits the grey man with your coat, your paper and your voice, and he is ordering. With every wrong sentence he says, he grows. The word on his forehead is not the word of any legend. It is yours: ANFÄNGER. He is made of every sentence you built wrong in this city."],
 ["X","Der Golem","Ich möchte ein Kaffee. Ich habe gestern in das Café gesessen. Ich kann nicht gut sprechen Deutsch.","I would like a coffee (wrong ending). Yesterday I sat into the café (wrong case). I cannot well speak German (wrong order)."],
 ["@","cast"],
 ["X","Der Ober","Das war alles falsch. Und Sie sind nicht der Herr Doktor. Der Herr Doktor macht jeden Tag einen Fehler weniger. – Gehen Sie bitte.","All of that was wrong. And you are not the doctor. The doctor makes one mistake fewer every day. — Please leave."],
 ["N","The Golem stands up. The table breaks. He takes the head waiter by the collar and lifts him the way one lifts a cup."],
 ["S","Der Golem gehorcht jedem Befehl. Du gehorchst jeder Angst. Wer von euch ist aus Lehm? – Ich habe ihn gebaut. Aus der Tasche. Ich wollte, dass du dich hörst. Dann gibst du auf, und wir fahren nach Hause. Aber er hört nicht auf mich.","The golem obeys every command. You obey every fear. Which of you is made of clay? — I built him. Out of the bag. I wanted you to hear yourself. Then you would give up, and we would go home. But he does not listen to me."],
 ["@","task"],
 ["M","Befehlen Sie ihm. Auf Deutsch. Richtig. Sonst zerquetscht er Sie – und ich verliere eine Investition.","Command him. In German. Correctly. Otherwise he crushes you — and I lose an investment."],
 ["X","Du","Lassen Sie den Mann los! Stellen Sie ihn hin! Geben Sie mir das Papier zurück!","Let go of the man! Put him down! Give me back the paper!"],
 ["N","The Golem stops. For one second the clay listens. On his forehead the first letter turns pale. Seven are left."],
 ["X","Der Ober","Weiter! Er hört nur richtige Sätze. Das Verb, Herr Doktor! Das Verb!","Go on! He only hears correct sentences. The verb, Doctor! The verb!"],
 ["@","pay"],
 ["M","Acht Buchstaben, acht Befehle. Dativ, Wechselpräpositionen, Perfekt, Satzklammer. Ich habe gewettet, dass Sie es schaffen. Ich sage nicht, mit wem.","Eight letters, eight commands. Dative, two-way prepositions, perfect, sentence clamp. I have bet that you will manage it. I am not saying with whom."]],
after:[
 ["N","The last letter goes out. The Golem stands still; then he is only dust, and the dust is dry. On the floor lies a paper. The head waiter picks it up, takes a pencil from behind his ear, crosses out one word and writes another above it."],
 ["D","Meldezettel","Name: {NAME}. Wohnort: Prag. Beruf: Arzt. (Korrigiert: E. S. – Der Stempel folgt.)","Name: {NAME}. Residence: Prague. Profession: physician. (Corrected: E. S. — Stamp to follow.)"],
 ["X","Der Ober","So. Jetzt stimmt es. Ich heiße übrigens Emil. Emil Souček. Das hat mich hier noch kein Gast gefragt. Sie auch nicht. Aber Sie haben mir geholfen. Das vergesse ich nicht.","There. Now it is right. My name is Emil, by the way. Emil Souček. No guest here has ever asked me that. Neither have you. But you helped me. I will not forget that."],
 ["M","Er hat Ihnen seinen Namen geschenkt. Einfach so. Menschen sind schlechte Geschäftsleute. Packen Sie. Wir fahren nach Norden, in ein Zimmer mit sehr vielen Büchern.","He has made you a present of his name. Just like that. Human beings are bad businessmen. Pack. We are travelling north, to a room with a great many books."],
 ["S","Ich hebe alles wieder auf. Die Tasche ist jetzt voll Staub. Sie ist leichter als vorher. Das habe ich nicht gewollt. Entschuldigung sage ich nicht.","I am picking it all up again. The bag is full of dust now. It is lighter than before. I did not want that. I am not saying sorry."]]};

// ---------------------------------------------------------------- places (ort, s2) and „Was bisher geschah" / „Nächstes Mal" (prev/next, scene writer)
(function(){const R={
1:["Tannenbühl, zwischen Murg und Enz",["Sie sind Arzt. Sie sprechen kein Deutsch. Es ist Nacht.","You are a physician. You speak no German. It is night."],["Jedes Wort hat ein Siegel. Ein Wort ohne Siegel ist tot.","Every word has a seal. A word without a seal is dead."]],
2:["Mummelsee, unter der Hornisgrinde",["Sie haben den Pakt. Der Teufel hat eine Laterne. Die Laterne ist kalt.","You have the pact. The devil has a lantern. The lantern is cold."],["Hinter Ihnen geht jemand. Er hat Ihr Gesicht.","Somebody is walking behind you. He has your face."]],
3:["Am Kniebis, bei den Kohlenmeilern",["Ein Vogel hat Ihr Wort. Er fliegt nach links.","A bird has your word. It flies to the left."],["Der Weg hat zwei Seiten. Links ist ein Licht.","The path has two sides. On the left is a light."]],
4:["Wolfach, wo die Wolf in die Kinzig fließt",["Ihr Schatten hat eine Tasche. Die Tasche ist voll Fehler.","Your shadow has a bag. The bag is full of mistakes."],["Ihr Schatten ist fort. Ein Jäger sieht es sofort.","Your shadow is gone. A hunter sees it at once."]],
5:["Gutach, unter den roten Hüten",["Im Wald ist ein Haus. Das Fenster ist warm. Ihr Schatten geht nach links.","In the forest is a house. The window is warm. Your shadow goes left."],["Eine Uhr schlägt drei. Die Hexe zählt.","A clock strikes three. The witch is counting."]],
6:["Triberg, im Haus der tausend Uhren",["Die Hexe hat den Schatten. Um sieben Uhr ist der Ofen heiß.","The witch has the shadow. At seven o'clock the oven is hot."],["Sie haben eine Frage frei. Der Teufel hat keine Antwort.","You have one question. The devil has no answer."]],
7:["Höllental, zwischen Höllsteig und Himmelreich",["Es ist drei Uhr. Der Schatten sitzt im Käfig und isst. Sie haben vier Stunden.","It is three o'clock. The shadow sits in the cage and eats. You have four hours."],["Dreißig Wörter. Ein Ofen. Kein Fehler.","Thirty words. One oven. No mistake."]],
8:["Kandel · danach Staufen",["Die Tür ist offen. Der Ofen ist heiß. Der Teufel bleibt draußen.","The door is open. The oven is hot. The devil stays outside."],["Eine Stadt. Ein Café. Zwei Kaffee – und keiner ist für Sie.","A city. A café. Two coffees — and neither is for you."]],
9:["Prag 1912 · Café Arco",["Die Hexe ist im Ofen. Ihr Schatten ist wieder da. Danke sagt er nicht.","The witch is in the oven. Your shadow is back. He does not say thank you."],["Unter dem Dach liegt ein Mann aus Lehm. Jemand war vor Ihnen dort.","Under the roof lies a man of clay. Somebody was there before you."]],
10:["Altneusynagoge, Dachboden",["Sie haben vierzehn Tage für das Amt. Ihr Schatten hebt etwas vom Boden auf.","You have fourteen days for the office. Your shadow picks something up from the floor."],["Ein Brief vom Amt kommt. Er hat ein Fenster.","A letter from the office comes. It has a window."]],
11:["Café Arco, morgens",["Auf dem Dachboden fehlt ein Stück Lehm. Die Schuhe im Staub sind Ihre Schuhe.","In the attic a piece of clay is missing. The shoes in the dust are your shoes."],["Ein dünner Mann schreibt abends. Er kennt die Formulare.","A thin man writes in the evenings. He knows the forms."]],
12:["Goldenes Gässchen 22",["Der Termin ist in sechs Wochen. Der Ober will helfen. Neben der Tasche liegt eine Hand aus Lehm.","The appointment is in six weeks. The head waiter is willing to help. Beside the bag lies a hand of clay."],["Was war heute? Der Teufel will es wissen. Er hat ein Notizbuch.","What happened today? The devil wants to know. He has a notebook."]],
13:["Café Arco, nach Mitternacht",["Sie haben das Formular ausgefüllt. Draußen ist etwas Schweres vorbeigegangen.","You have filled in the form. Outside, something heavy walked past."],["Sieben Uhr, Nummer 47. Jemand ist vor Ihnen aufgestanden.","Seven o'clock, number 47. Somebody stood up before you did."]],
14:["Das Amt, Pořitscher Straße 7",["Der Teufel hat einmal gewettet und verloren. Unter den Tischen liegt nasser Lehm.","The devil once made a bet and lost. Under the tables lies wet clay."],["Ein kleiner alter Mann fragt nach Pluralen. Namen sind bei ihm teuer.","A little old man asks about plurals. With him, names are expensive."]],
15:["Josefstadt, der letzte Hof",["Ein grauer Mann hat Ihr Papier bekommen. Das Amt glaubt dem Papier.","A grey man has got your paper. The office believes the paper."],["Der Graue sitzt an Ihrem Tisch. Er bestellt mit Ihrer Stimme.","The grey man is sitting at your table. He is ordering in your voice."]],
16:["Café Arco, nachts",["Wer den Namen kennt, hat die Macht. Ihr Name steht auf einem Papier, und das Papier hat der Golem.","Whoever knows the name has the power. Your name is on a paper, and the Golem has the paper."],["Ein Zimmer voller Bücher. In einem Regal steht eine Mappe mit Ihrem Namen.","A room full of books. On a shelf stands a folder with your name."]]};
Object.keys(R).forEach(n=>{const c=CHX[n]=CHX[n]||{};c.ort=R[n][0];c.prev=R[n][1];c.next=R[n][2]})})();

// ---------------------------------------------------------------- the two bosses: words only (mechanics are track I's)
BOSX.hexe={
 intro:["Dreißig Gläser, dreißig Wörter ohne Siegel. Neben dem Ofen hängt ein Käfig. Für jeden richtigen Artikel zerbricht ein Glas. Für jeden falschen wird der Ofen heißer.","Thirty jars, thirty words without a seal. Beside the oven hangs a cage. For every correct article a jar breaks. For every wrong one the oven gets hotter."],
 taunt:[["Ins Feuer mit dir!","Into the fire with you!"],
  ["Knusper, knusper, Kneischen, wer knuspert an meinem Häuschen? Ein Wort ohne Siegel!","Nibble, nibble, little mouse, who is nibbling at my house? A word without its seal!"],
  ["Ich sehe dich nicht. Aber ich rieche dein falsches Siegel.","I cannot see you. But I can smell your wrong seal."],
  ["Das Glas bleibt zu. Der Ofen wird heißer.","The jar stays shut. The oven gets hotter."],
  ["Du schmeckst nach Fehlern.","You taste of mistakes."],
  ["Noch ein Fehler, und ich backe dich.","One more mistake and I'll bake you."]],
 win:["Sie stoßen die Hexe in ihren eigenen Ofen. Die Gläser zerbrechen, die Siegel glühen, die Käfigtür steht offen.","You push the witch into her own oven. The jars break, the seals glow, the cage door stands open."],
 lose:["Der Ofen schließt sich. Die Gläser bleiben voll. Lernen Sie Ihre Artikel – und kommen Sie wieder.","The oven door closes. The jars stay full. Learn your articles — and come back."]};
BOSX.golem={
 intro:["Lehm, drei Meter hoch. Auf der Stirn acht Buchstaben: ANFÄNGER. Er gehorcht nur richtigen Sätzen: Das Verb steht am richtigen Platz. Jeder richtige Befehl löscht einen Buchstaben.","Clay, three metres tall. On his forehead eight letters: ANFÄNGER. He obeys only correct sentences: the verb in the right place. Every correct command wipes out one letter."],
 taunt:[["Falsch. Der Golem zerdrückt einen Sessel.","Wrong. The Golem crushes a chair (Sessel = Stuhl; Austrian)."],
  ["Das Verb steht falsch. Der Buchstabe bleibt.","The verb is in the wrong place. The letter stays."],
  ["Aus dem Fehler wird Lehm. Er wächst.","The mistake turns to clay. He grows."],
  ["Er stampft. Die Gläser im Café zerspringen.","He stamps. The café's glasses shatter."],
  ["Er hält den Ober noch fest. Befehlen Sie richtig!","He is still holding the head waiter. Give the command correctly!"]],
 win:["Der letzte Buchstabe verlischt. Auf der Stirn steht nichts mehr. Der Golem bleibt stehen, dann ist er Staub – trockener Staub.","The last letter goes out. Nothing is left on the forehead. The Golem stands still, then he is dust — dry dust."],
 lose:["Der Golem schiebt Sie aus dem Café. Auf seiner Stirn steht noch „ANFÄNGER“. Üben Sie die Satzklammer: Verb, Präfix, Partizip. Dann kommen Sie zurück.","The Golem pushes you out of the café. 'ANFÄNGER' is still on his forehead. Practise the sentence clamp: verb, prefix, participle. Then come back."]};

// ===== Mephisto · track S · x_s2_extra.js (owner: s2) — data for other packages; nothing here is shown by itself.
// BOSS_X.golem.last — 12 duel items for track I: „Welches Wort steht ganz am Ende?" (sentence clamp: infinitive, prefix, participle).
//   Item: {k:"last", q:sentence, o:[3 options], a:index of the right one, why:German explanation, en:English gloss of the sentence}.
//   Ready for the existing multiple-choice renderer: {k:"mc", q:BOSS_X.golem.ask+" – "+x.q, o:x.o, a:x.a, why:x.why}.
// AMT_DOCS — three Prague office documents (A2 reading, 1912 Austrian officialese with today's word beside it) for s7's Mappe, in story order
//   (chapter 11 · 14 · after the duel of 16). Item: {id, ch, lv, t, tEn, de, en, gloss:[[word, German explanation, English]] ×6,
//   tf:[[statement, true|false, English]] ×4, task:{de, en, model, modelEn}, bridge:[de,en]}. {LAST} = learner's surname (st3Fill).
//   Dates are written as the documents of the period write them (day first, month as a word).
var BOSS_X=BOSS_X||{},AMT_DOCS=AMT_DOCS||[];
BOSS_X.golem=Object.assign(BOSS_X.golem||{},{ask:"Welches Wort steht ganz am Ende?",askEn:"Which word stands at the very end?",last:[
 {k:"last",q:"Ich muss heute arbeiten.",o:["arbeiten","muss","heute"],a:0,why:"Modalverb auf Platz 2, Infinitiv am Ende: „arbeiten“.",en:"I have to work today."},
 {k:"last",q:"Sie dürfen hier nicht rauchen.",o:["dürfen","rauchen","nicht"],a:1,why:"Der Infinitiv steht am Ende – auch nach „nicht“.",en:"You may not smoke here."},
 {k:"last",q:"Ich rufe den Oberarzt an.",o:["rufe","Oberarzt","an"],a:2,why:"anrufen ist trennbar: Das Präfix „an“ geht ans Ende.",en:"I am calling the consultant."},
 {k:"last",q:"Machen Sie bitte den Mund auf.",o:["auf","Mund","Machen"],a:0,why:"aufmachen: „auf“ steht am Ende, auch im Imperativ.",en:"Please open your mouth."},
 {k:"last",q:"Der Patient ist gestern gestürzt.",o:["ist","gestern","gestürzt"],a:2,why:"Perfekt: Hilfsverb auf Platz 2, Partizip am Ende.",en:"The patient fell yesterday."},
 {k:"last",q:"Wir fangen um acht Uhr an.",o:["fangen","an","acht"],a:1,why:"anfangen: fangen … an.",en:"We start at eight o'clock."},
 {k:"last",q:"Können Sie mir das bitte erklären?",o:["Können","erklären","bitte"],a:1,why:"Auch in der Frage steht der Infinitiv am Ende.",en:"Can you explain that to me, please?"},
 {k:"last",q:"Hören Sie sofort mit dem Rauchen auf.",o:["Rauchen","Hören","auf"],a:2,why:"aufhören: Das „auf“ kommt ganz am Schluss – nach allem anderen.",en:"Stop smoking at once."},
 {k:"last",q:"Ich habe die Tabletten schon genommen.",o:["genommen","habe","schon"],a:0,why:"Partizip am Ende: „genommen“.",en:"I have already taken the tablets."},
 {k:"last",q:"Sie soll morgen nüchtern kommen.",o:["soll","nüchtern","kommen"],a:2,why:"sollen + Infinitiv am Ende.",en:"She is to come tomorrow with an empty stomach."},
 {k:"last",q:"Ziehen Sie bitte das Hemd aus.",o:["aus","Hemd","Ziehen"],a:0,why:"ausziehen: ziehen … aus.",en:"Please take off your shirt."},
 {k:"last",q:"Er ist heute Nacht nicht eingeschlafen.",o:["nicht","eingeschlafen","ist"],a:1,why:"einschlafen, Perfekt mit sein: ist … eingeschlafen.",en:"He did not fall asleep last night."}]});

AMT_DOCS.push(
{id:"amt1",ch:11,lv:"A2",t:"Aufforderung zur Anmeldung",tEn:"Request to register",
 de:"Anstalt für Sprachunfälle im Königreich Böhmen · Meldeamt\nPrag, Pořitscher Straße 7 · Zahl 4711/12 · Prag, am 5. November 1912\n\nAufforderung zur Anmeldung\n\nHerrn Dr. {LAST}, Arzt, derzeit Café Arco, Prag\n\nSie wohnen seit dem 4. November 1912 in Prag. Sie müssen sich hiemit binnen 14 Tagen persönlich anmelden.\nDer nächste freie Termin ist am Dienstag, dem 17. Dezember 1912, um 8 Uhr früh: 3. Stock, Zimmer 14.\nOhne Termin dürfen Sie nicht kommen. Sie können aber ab 7 Uhr früh eine Nummer ziehen.\n\nMitzubringen sind:\n1. dieses Schreiben,\n2. Ihr Reisepass,\n3. das Formular A, ausgefüllt und unterschrieben.\n\nDer Parteienverkehr ist von Montag bis Freitag von 8 bis 12 Uhr.\nWer sich nicht rechtzeitig anmeldet, zahlt eine Strafe von 5 Kronen.\n\nDer Vorstand: (Unterschrift unleserlich)",
 en:"Institute for Language Accidents in the Kingdom of Bohemia · Registration Office\nPrague, Pořitscher Straße 7 · Ref. 4711/12 · Prague, 5 November 1912\n\nRequest to register\n\nDr {LAST}, physician, currently Café Arco, Prague\n\nYou have been living in Prague since 4 November 1912. You are hereby required to register in person within 14 days.\nThe next free appointment is on Tuesday, 17 December 1912, at 8 a.m.: 3rd floor, room 14.\nYou may not come without an appointment. You can, however, take a number from 7 a.m.\n\nTo be brought:\n1. this letter,\n2. your passport,\n3. form A, filled in and signed.\n\nOffice hours for the public are Monday to Friday, 8 to 12.\nWhoever does not register in time pays a fine of 5 crowns.\n\nThe Director: (signature illegible)",
 gloss:[["hiemit","österreichisch für: hiermit","hereby (Austrian)"],["binnen 14 Tagen","in 14 Tagen oder früher","within 14 days"],["mitzubringen sind","Sie müssen mitbringen","to be brought"],["der Parteienverkehr","österreichisch für: die Sprechzeiten, die Öffnungszeiten","office hours for the public (Austrian)"],["rechtzeitig","früh genug, nicht zu spät","in time"],["unleserlich","man kann es nicht lesen","illegible"]],
 tf:[["Der Termin ist am Nachmittag.",false,"The appointment is in the afternoon."],["Man muss drei Dinge mitbringen.",true,"You have to bring three things."],["Am Samstag ist das Amt für Besucher offen.",false,"On Saturday the office is open to visitors."],["Der freie Termin liegt nach dem Ende der Frist.",true,"The free appointment is after the deadline has run out."]],
 task:{de:"Schreiben Sie zwei Sätze an das Amt: Sie können am 17. Dezember nicht kommen. Warum nicht? Wann können Sie kommen?",en:"Write two sentences to the office: you cannot come on 17 December. Why not? When can you come?",model:"Sehr geehrte Damen und Herren, am 17. Dezember kann ich leider nicht kommen, weil ich Dienst habe. Ich kann am 18. Dezember um 8 Uhr kommen.",modelEn:"Dear Sir or Madam, unfortunately I cannot come on 17 December because I am on duty. I can come on 18 December at 8 o'clock."},
 bridge:["Ein Brief vom Bürgeramt hat heute dasselbe Skelett: Betreff – Aufforderung – Frist – Folge.","A letter from today's Bürgeramt has the same skeleton: subject – request – deadline – consequence."]},
{id:"amt2",ch:14,lv:"A2",t:"Bescheid",tEn:"Official decision",
 de:"Anstalt für Sprachunfälle im Königreich Böhmen · Meldeamt\nZahl 4711/12 · Prag, am 12. November 1912\n\nBescheid\n\nHerrn Dr. {LAST}, Arzt, Prag\n\nSie haben am 12. November 1912 am Schalter einen Antrag auf Berichtigung Ihres Meldezettels gestellt.\nDas Meldeamt lehnt den Antrag ab.\n\nBegründung: Für Ihren Namen liegt seit heute eine Anmeldung vor (Beilage A). Dort steht: „Beruf: Anfänger.“ Die Anmeldung ist unterschrieben. Eine zweite Anmeldung mit demselben Namen ist nach der Vorschrift nicht möglich.\n\nDie Kosten des Verfahrens (1 Krone für die Stempelmarke) bekommen Sie nicht zurück.\n\nRechtsmittel: Gegen diesen Bescheid können Sie binnen 14 Tagen schriftlich Rekurs einlegen. Der Rekurs hat keine aufschiebende Wirkung.\n\nHochachtungsvoll\nFür den Vorstand: Dr. K., Konzipist",
 en:"Institute for Language Accidents in the Kingdom of Bohemia · Registration Office\nRef. 4711/12 · Prague, 12 November 1912\n\nOfficial decision\n\nDr {LAST}, physician, Prague\n\nOn 12 November 1912 you applied at the counter for your registration slip to be corrected.\nThe Registration Office rejects the application.\n\nReasons: since today there is a registration for your name (enclosure A). It says: 'Profession: beginner.' The registration is signed. A second registration under the same name is not possible under the regulations.\n\nThe costs of the procedure (1 crown for the revenue stamp) will not be refunded.\n\nLegal remedy: you may lodge an appeal against this decision in writing within 14 days. The appeal does not suspend the decision.\n\nYours faithfully\nFor the Director: Dr K., clerk",
 gloss:[["der Bescheid","die offizielle Antwort eines Amtes (heute genauso)","official decision (the same word today)"],["einen Antrag stellen","offiziell um etwas bitten","to apply for something"],["ablehnen","Nein sagen","to reject"],["die Begründung","der Grund","the reasons"],["die Beilage","österreichisch für: die Anlage","enclosure (Austrian)"],["der Rekurs","österreichisch; heute in Deutschland: der Widerspruch","appeal (Austrian; in Germany today: Widerspruch)"]],
 tf:[["Das Amt sagt Ja.",false,"The office says yes."],["Für den Namen gibt es schon eine Anmeldung.",true,"There is already a registration for the name."],["Der Doktor bekommt die Krone zurück.",false,"The doctor gets the crown back."],["Er hat zwei Wochen Zeit für einen Rekurs.",true,"He has two weeks for an appeal."]],
 task:{de:"Was können Sie jetzt tun? Nennen Sie zwei Möglichkeiten.",en:"What can you do now? Name two options.",model:"Ich kann Rekurs einlegen. Ich kann mein Papier selbst zurückholen.",modelEn:"I can lodge an appeal. I can fetch my paper back myself."},
 bridge:["Ein deutscher Bescheid von heute endet mit einer Rechtsbehelfsbelehrung: „Gegen diesen Bescheid kann innerhalb eines Monats Widerspruch erhoben werden.“ Dasselbe Skelett, andere Wörter.","A German decision today ends with information on legal remedies: 'An objection to this decision may be lodged within one month.' The same skeleton, other words."]},
{id:"amt3",ch:16,lv:"A2",t:"Bescheinigung",tEn:"Certificate",
 de:"Anstalt für Sprachunfälle im Königreich Böhmen · Meldeamt\nZahl 4711/12\n\nBescheinigung\n\nDas Meldeamt bestätigt hiemit: Herr Dr. {LAST}, Arzt, wohnt seit dem 4. November 1912 in Prag und ist gemeldet.\nBeruf: Arzt. Der Eintrag „Anfänger“ ist gestrichen.\nDie Anmeldung vom 12. November 1912 ist ungültig. Der Anmelder war aus Lehm.\nFür den Schaden im Café Arco (ein Tisch, zwei Sessel, zwölf Gläser) haftet der Inhaber des Golems.\nDiese Bescheinigung gilt nur mit Stempel.\n\nPrag, am 18. November 1912\nFür den Vorstand: Dr. K., Konzipist (Stempel)\n\nHandschriftlich darunter: Verzeihen Sie. Ich war nicht zuständig. Aber ich habe mich gefreut.",
 en:"Institute for Language Accidents in the Kingdom of Bohemia · Registration Office\nRef. 4711/12\n\nCertificate\n\nThe Registration Office hereby confirms: Dr {LAST}, physician, has been living in Prague since 4 November 1912 and is registered.\nProfession: physician. The entry 'beginner' has been struck out.\nThe registration of 12 November 1912 is invalid. The person who registered was made of clay.\nThe owner of the golem is liable for the damage in the Café Arco (one table, two chairs, twelve glasses).\nThis certificate is valid only with a stamp.\n\nPrague, 18 November 1912\nFor the Director: Dr K., clerk (stamp)\n\nHandwritten underneath: Forgive me. It was not my department. But I was glad.",
 gloss:[["die Bescheinigung","ein Papier, das etwas offiziell bestätigt (in Deutschland brauchen Sie viele: Meldebescheinigung, Arbeitsbescheinigung …)","certificate"],["bestätigen","sagen, dass etwas wahr ist","to confirm"],["gestrichen","durchgestrichen; es gilt nicht mehr","struck out"],["ungültig","es zählt nicht","invalid"],["haften für","für den Schaden zahlen müssen","to be liable for"],["der Inhaber","der Besitzer","the owner"]],
 tf:[["Im Papier steht jetzt „Arzt“.",true,"The paper now says 'physician'."],["Die Anmeldung des Golems gilt noch.",false,"The golem's registration is still valid."],["Der Inhaber des Golems muss den Schaden bezahlen.",true,"The owner of the golem has to pay for the damage."],["Ohne Stempel ist das Papier nichts wert.",true,"Without a stamp the paper is worth nothing."]],
 task:{de:"Sie brauchen in Heidelberg eine Meldebescheinigung. Was sagen Sie am Schalter? Schreiben Sie zwei Sätze: Was brauchen Sie? Wofür?",en:"You need a registration certificate in Heidelberg. What do you say at the counter? Write two sentences: what do you need? What for?",model:"Guten Morgen. Ich brauche eine Meldebescheinigung. Sie ist für meinen Arbeitgeber, das Krankenhaus.",modelEn:"Good morning. I need a registration certificate. It is for my employer, the hospital."},
 bridge:["In Deutschland melden Sie sich heute beim Bürgeramt an. Die Meldebescheinigung bekommen Sie meistens sofort.","In Germany today you register at the Bürgeramt. You usually get the registration certificate straight away."]});

// ===== Mephisto · track S · x_s3_scn.js (owner: s3) — the scenes of chapters 17–32 (realm III Fausts Studierzimmer, B1 · realm IV Berlin, B2),
// their „Was bisher geschah"/„Nächstes Mal" texts and the duel texts of the Poodle and of Dr. Caligari. Data only; applied at load by v2/c_s2.js.
// Canon: build/PLAN-S.md §2 (binding). Text base per chapter (PLAN-S D5 / S8 §5 column "Text"): S8 §6 scripts for 17, 18, 19, 24, 25, 26, 28–32;
// "+" (existing scene + PATCH_S8) for 20, 21; "=" (existing + narrative.md fixes) for 22, 23; narrative.md §4 for 27. Merged in: S2-faust D1, D8, D10,
// D12, P7.1; narrative.md D3, D7, D12, D13; S9-prague-weimar §7.1 places and people (one Berliner line per chapter at most, standard German first in
// the gloss), F3, F9, F10, F13.
// Line shapes = x_story3.js: ["N",de,en] · ["M",sie,en,du] · ["S",de,en] · ["X",who,de,en] · ["D",title,de,en] · ["C",id] · ["@",anchor].
// Every scene: anchors cast → task → pay (in this order), its own Shadow line, the C ids of PLAN-S §3.5, a hook as the last line.
// From chapter 21 every M line has a du twin (identical text where Mephisto speaks to others or uses no form of address).
// Narration in Präteritum in realm III, in the present in realm IV (as the existing realm IV scenes).
// Level: 17–20 no passive and no Konjunktiv II (except „möchte"); 21 Konjunktiv II, no passive; 22–24 passive and Konjunktiv I; 25–32 B2, each in
// the structure of its own lesson (g17 Verben mit Präpositionen … g25 indirekte Rede).
// Deliberate learner errors (24: „Die Tisch.", „Ich habe gekommt.", „Mit die Zug.") and Berlinerisch (25, 28) must be exempt from any spell check.
var SCN=SCN||{},CHX=CHX||{},BOSX=BOSX||{};
(function(){
const A=a=>["@",a];
// ================================================================= REALM III · Fausts Studierzimmer · B1
SCN[17]={scene:[
 ["N","Prag lag hinter euch. Mephisto öffnete eine schmale Tür, und ihr standet in einem hochgewölbten, engen gotischen Zimmer: Bücher bis zur Decke, ein Schädel, Glas und Rauch. Literatur erzählt im Präteritum: er saß, er wusste, er wollte.","Prague lay behind you. Mephisto opened a narrow door, and you stood in a high-vaulted, narrow Gothic room: books to the ceiling, a skull, glass and smoke. Literature narrates in the preterite: he sat, he knew, he wanted."],
 ["M","Präteritum, Doktor. Die Zeit der Bücher und der Toten. Ihre Arztbriefe schreiben Sie auch so: „Der Patient klagte über …“ Hier saß einer, der Arzt war wie Sie. Er hieß Faust.","Preterite, Doctor. The tense of books and the dead. You write your discharge letters this way too: 'The patient complained of …' Here sat a man who was a physician like you. His name was Faust."],
 A("cast"),
 ["M","Als junger Mann half er seinem Vater während der Pest. Sie gaben den Kranken eine Arznei, die sie selbst gemischt hatten. Die Kranken starben, und die Bauern dankten ihm trotzdem. Er wusste es. Darum saß er nachts hier. Sie kennen dieses Zimmer, Doktor. Jeder Arzt hat eines.","As a young man he helped his father during the plague. They gave the sick a medicine they had mixed themselves. The sick died, and the peasants thanked him all the same. He knew it. That is why he sat here at night. You know this room, Doctor. Every physician has one."],
 ["M","„Hier war die Arzenei, die Patienten starben, und niemand fragte: wer genas?“ Vier Verben im Präteritum, Doktor – und eine Frage, die man heute eine Studie nennt.","'Here was the medicine, the patients died, and nobody asked: who recovered?' Four verbs in the preterite, Doctor — and a question that is nowadays called a study."],
 ["M","Und Sie? Was taten Sie in der Nacht, in der Ihnen zum ersten Mal ein Patient starb? Antworten Sie im Präteritum. Lügen dürfen Sie. Ich merke es trotzdem.","And you? What did you do on the night when a patient died on you for the first time? Answer in the preterite. You may lie. I shall notice anyway."],
 ["C","p17"],
 A("task"),
 ["N","Auf dem Pult lag ein aufgeschlagenes Buch. Daneben stand ein Regal mit schmalen grauen Mappen. Auf jedem Rücken stand ein Name. Es waren sehr viele Mappen.","On the desk lay an open book. Beside it stood a shelf of narrow grey folders. On every spine stood a name. There were a great many folders."],
 ["X","Du","Was ist das für ein Regal?","What kind of shelf is that?"],
 ["M","Verträge. Meine. Jeder Kunde bekam eine Mappe. Ihre steht auch dort. Sie unterschrieben im Wald – erinnern Sie sich? Damals konnten Sie „Guten Tag“ sagen. Lesen konnten Sie den Vertrag nicht.","Contracts. Mine. Every client got a folder. Yours stands there too. You signed in the forest — do you remember? Back then you could say 'Guten Tag'. You could not read the contract."],
 ["N","Du gingst zum Regal. Davor lag ein schwarzer Pudel. Vorher war er nicht da gewesen. Er hob den Kopf. Er knurrte nicht. Er sah dich nur an, und du bliebst stehen.","You went to the shelf. In front of it lay a black poodle. It had not been there before. It raised its head. It did not growl. It only looked at you, and you stopped."],
 ["M","Der gehört zum Haus. Er ließ noch keinen an das Regal. Lesen Sie ruhig, was auf dem Pult liegt. Das andere lesen Sie, wenn Sie es können. Also nie.","He belongs to the house. He has never yet let anyone near the shelf. Do read what lies on the desk. The other thing you will read when you are able to. So: never."],
 ["S","Es war einmal ein Arzt, der alles wusste. Dann kam er nach Deutschland und wusste nichts mehr. Das warst du. Er unterschrieb etwas und las es nicht. Das warst du auch.","Once upon a time there was a doctor who knew everything. Then he came to Germany and knew nothing any more. That was you. He signed something and did not read it. That was you too."],
 A("pay"),
 ["N","In dieser Nacht lerntest du am Pult. Der Pudel schlief nicht. Einmal standest du auf, und er stand auch auf.","That night you studied at the desk. The poodle did not sleep. Once you stood up, and it stood up too."]]};

SCN[18]={scene:[
 ["N","Ein schwarzer Pudel folgte Faust nach Hause. Hinter dem Ofen wuchs er, bis er so groß war wie ein Nilpferd – und heraus trat Mephisto. Nebensätze sind wie der Pudel: Das Verb versteckt sich bis zum Ende.","A black poodle followed Faust home. Behind the stove it grew until it was as big as a hippopotamus — and out stepped Mephisto. Subordinate clauses are like the poodle: the verb hides until the end."],
 ["M","Das war ich. Das Nilpferd war übertrieben; Goethe neigte dazu. Aber der Auftritt war gut. Ich habe seitdem keinen besseren gehabt – bis Sie unterschrieben haben.","That was me. The hippopotamus was an exaggeration; Goethe was prone to that. But the entrance was good. I have not had a better one since — until you signed."],
 A("cast"),
 ["N","Am Abend kamst du von einem Spaziergang zurück. Es regnete. Vor der Tür saß der Pudel, nass bis auf die Haut, und wartete, bis du die Tür aufmachtest.","In the evening you came back from a walk. It was raining. In front of the door sat the poodle, soaked to the skin, and waited until you opened the door."],
 ["M","Lassen Sie ihn herein oder nicht. Aber begründen Sie es. Mit „weil“ – und mit dem Verb am Ende, wo es hingehört.","Let him in or don't. But give your reason. With 'weil' — and with the verb at the end, where it belongs."],
 ["C","d18"],
 ["N","Später lag der Pudel wieder vor dem Regal. Niemand wusste, wie er hineingekommen war.","Later the poodle lay in front of the shelf again. Nobody knew how it had got in."],
 ["X","Du","Wenn das Ihr Auftritt war, wer liegt dann dort vor dem Regal?","If that was your entrance, then who is lying there in front of the shelf?"],
 ["M","Meine erste Gestalt. Ich habe sie abgelegt, aber sie ist geblieben, weil sie etwas will, was ich nicht mehr will. Fragen Sie nicht, was. „…, weil ich keine Zeit habe.“ Das Verb wartet am Ende. Geduldig. Wie er.","My first shape. I took it off, but it stayed, because it wants something that I no longer want. Do not ask what. '…, weil ich keine Zeit habe.' The verb waits at the end. Patiently. Like him."],
 A("task"),
 ["N","Du versuchtest es mit einem Satz. Der Pudel knurrte, sobald du das Verb an die falsche Stelle setztest, und er schwieg, wenn es am Ende stand.","You tried a sentence. The poodle growled as soon as you put the verb in the wrong place, and it was silent when the verb stood at the end."],
 ["X","Du","Ich möchte den Vertrag lesen, weil ich ihn unterschrieben habe. Ich weiß nicht, ob ich alles verstanden habe. Ein Arzt muss den Patienten aufklären, bevor der Patient unterschreibt.","I would like to read the contract because I signed it. I do not know whether I understood everything. A physician must inform the patient before the patient signs."],
 ["M","Aufklärung und Einwilligung. Sie haben recht: Ich habe Sie nicht aufgeklärt. In Ihrem Beruf nennt man das einen Fehler. In meinem nennt man es Tradition.","Information and consent. You are right: I did not inform you. In your profession that is called a mistake. In mine it is called tradition."],
 ["N","Der Pudel legte den Kopf auf die Pfoten und ließ dich einen Schritt näher an das Regal. Nur einen. Für jeden richtigen Nebensatz einen Schritt.","The poodle laid its head on its paws and let you one step closer to the shelf. Only one. For every correct subordinate clause one step."],
 ["S","Ich bin der Hund, der dir folgt, weil du mich nicht ansiehst. Aber der dort ist ein anderer Hund. Ich frage mich, ob er dich beißt, wenn du die Mappe nimmst.","I am the dog that follows you because you won't look at me. But that one there is a different dog. I wonder whether he will bite you when you take the folder."],
 A("pay"),
 ["M","Noch sieben Schritte. Dann können Sie lesen, was Sie unterschrieben haben. Ob es Ihnen gefällt, ist eine andere Frage.","Seven more steps. Then you can read what you signed. Whether you will like it is another question."]]};

SCN[19]={scene:[
 ["N","Ein Student kam einst zu Faust – aber Mephisto empfing ihn im Doktormantel und beriet ihn spöttisch. Der Genitiv ist die Sprache der Besitzer und der Akten: des Patienten, der Ärztin, des Krankenhauses. An diesem Abend zog Mephisto den Mantel wieder an und spielte dir die Szene vor. Er spielte beide Rollen.","A student once came to Faust — but Mephisto received him in the doctor's gown and advised him mockingly. The genitive is the language of owners and of files: of the patient, of the doctor, of the hospital. That evening Mephisto put the gown on again and acted the scene out for you. He played both parts."],
 A("cast"),
 ["M","Der Genitiv stirbt, sagt man. Unsinn. Im Arztbrief lebt er: „Zustand nach Fraktur des rechten Radius.“ Des! Nicht von dem.","They say the genitive is dying. Nonsense. In the discharge letter it lives: 'status post fracture of the right radius.' Des! Not von dem."],
 ["M","Dem Schüler habe ich gesagt: „Der Geist der Medizin ist leicht zu fassen.“ Das war gelogen. Ihnen sage ich: Der Genitiv ist leicht zu fassen. Das ist auch gelogen. Aber Sie merken es wenigstens.","I told the student: 'The spirit of medicine is easy to grasp.' That was a lie. I tell you: the genitive is easy to grasp. That is a lie too. But you at least notice."],
 A("task"),
 ["N","Während er spielte, sah er nicht zum Regal. Der Pudel sah ihm zu. Du machtest den letzten Schritt und zogst die Mappe mit deinem Namen heraus.","While he was acting he did not look at the shelf. The poodle was watching him. You took the last step and pulled out the folder with your name."],
 ["D","Mappe des Arztes {NAME} · Abschrift des Pakts · Inhalt: 2 Blatt","§ 1 Dauer des Weges: fünf Reiche, bis zur Prüfung des Unterzeichneten. § 2 Eigentum an der Seele des Unterzeichneten: beim Teufel, bis zur Rückzahlung. § 3 Pflicht des Unterzeichneten: 60 Minuten täglich, an Diensttagen 20. § 4 Folge eines versäumten Tages: ein Schuldschein. § 5 Recht des Teufels: die tägliche Beleidigung – Pflicht des Teufels: die richtige Erklärung jedes Fehlers.\n\nUnterschrift des Arztes. Unterschrift des Teufels.","§ 1 Length of the way: five realms, until the examination of the undersigned. § 2 Ownership of the soul of the undersigned: with the devil, until repayment. § 3 Duty of the undersigned: 60 minutes daily, 20 on duty days. § 4 Consequence of a missed day: an IOU. § 5 Right of the devil: the daily insult — duty of the devil: the correct explanation of every mistake.\n\nSignature of the physician. Signature of the devil."],
 ["N","Fünf Paragrafen. Du verstandest jedes Wort. Zwischen § 5 und den Unterschriften war das Papier leer – ein Abstand von der Breite einer Zeile, vielleicht zweier.","Five clauses. You understood every word. Between § 5 and the signatures the paper was empty — a gap the width of one line, perhaps of two."],
 ["S","Die Angst des Schülers ist die Freude des Teufels. Und ich bin der Schatten des Schülers. Er hat den Schüler damals belogen. Woher weißt du, dass er dich nicht belügt? Sieh dir die Lücke an.","The pupil's fear is the devil's joy. And I am the pupil's shadow. He lied to the student back then. How do you know he is not lying to you? Look at the gap."],
 ["X","Du","Warum ist hier Platz für eine Zeile?","Why is there room for a line here?"],
 ["M","Das ist der Rand des Blattes. Papier hat Ränder. Stellen Sie die Mappe zurück.","That is the margin of the sheet. Paper has margins. Put the folder back."],
 A("pay"),
 ["N","Es war nicht der Rand. Als du die Mappe zurückstelltest, fiel dir etwas anderes auf: Auf dem Deckel stand „2 Blatt“, und in der Mappe lag eines. Der Pudel war nicht mehr vor dem Regal. In der Tür sahst du noch seinen Rücken – und etwas Weißes in seinem Maul.","It was not the margin. When you put the folder back you noticed something else: on the cover it said '2 sheets', and in the folder lay one. The poodle was no longer in front of the shelf. In the doorway you just saw its back — and something white in its mouth."]]};

SCN[20]={scene:[
 ["N","In Leipzig tranken die Studenten in Auerbachs Keller. Mephisto bohrte Löcher in den Tisch, und Wein floss heraus – roter, weißer, süßer. Adjektivendungen sind wie dieser Wein: Jeder Tropfen hängt vom Artikel davor ab.","In Leipzig the students were drinking in Auerbach's Cellar. Mephisto bored holes in the table, and wine flowed out — red, white, sweet. Adjective endings are like this wine: every drop depends on the article in front of it."],
 ["M","„Ein kalter Wein, der kalte Wein, mit kaltem Wein.“ Drei Endungen. Trinken Sie. Lernen Sie. Ersticken Sie nicht.","'Ein kalter Wein, der kalte Wein, mit kaltem Wein.' Three endings. Drink. Learn. Don't choke."],
 A("cast"),
 ["M","Ein Glas aus meinem Tisch? Es kostet nichts. Das sagen alle meine Weine.","A glass from my table? It costs nothing. All my wines say that."],
 ["C","s20"],
 ["S","Ein müder Mann mit einem schweren Kopf in einem lauten Keller: ein schönes Bild von dir. Ich bin der Klügere von uns.","A tired man with a heavy head in a loud cellar: a fine picture of you. I am the cleverer of us two."],
 ["N","Ein Tropfen fiel auf den Boden und wurde zu Feuer. Die Studenten sprangen auf. Einer zog ein Messer. Er meinte nicht Mephisto. Er meinte dich, den Fremden am Tisch.","A drop fell to the floor and turned to fire. The students jumped up. One drew a knife. He did not mean Mephisto. He meant you, the stranger at the table."],
 ["X","Ein Student","Du da, mit dem fremden Gesicht! Ist das dein dummer Zauber? Wir sind keine kleinen Kinder!","You there, with the foreign face! Is that your stupid magic? We are not little children!"],
 A("task"),
 ["X","Du","Ich sehe, dass Sie wütend sind, und ich verstehe das. Das war ein schlechter Scherz, aber es war nicht meiner. Legen Sie bitte das Messer weg. Dann reden wir in aller Ruhe.","I can see that you are angry, and I understand that. That was a bad joke, but it was not mine. Please put the knife away. Then we shall talk quite calmly."],
 ["N","Er legte es weg. Mephisto sah dich an, wie man einen billigen Wein ansieht, der besser schmeckt als das Etikett.","He put it away. Mephisto looked at you the way one looks at a cheap wine that tastes better than its label."],
 A("pay"),
 ["M","Eine ruhige Stimme, ein klarer Satz, ein höfliches „bitte“. Das habe ich Ihnen nicht beigebracht. Das hatten Sie schon. Ihnen fehlten nur die deutschen Endungen dafür.","A calm voice, a clear sentence, a polite 'please'. I did not teach you that. You had it already. You only lacked the German endings for it."]]};

SCN[21]={scene:[
 ["N","In der Hexenküche trank Faust einen Trank und wurde dreißig Jahre jünger. Der Konjunktiv II ist dieser Trank: die Welt, wie sie sein könnte. Wenn ich jünger wäre … Wenn ich Deutsch könnte …","In the witch's kitchen Faust drank a potion and became thirty years younger. The subjunctive II is this potion: the world as it could be. If I were younger … If I could speak German …"],
 ["M","„Könnten Sie bitte …?“ So bittet man in Deutschland. Nicht „Gib!“. Ich weiß, Sie sind es gewohnt, dass man Ihnen gehorcht.","'Könnten Sie bitte …?' That is how one asks in Germany. Not 'Give!'. I know you are used to being obeyed.","„Könntest du bitte …?“ So bittet man in Deutschland. Nicht „Gib!“. Ich weiß, du bist es gewohnt, dass man dir gehorcht."],
 A("cast"),
 ["M","Die Meerkatze rührt im Kessel. Sie würde Ihnen gern etwas einschenken. Sagen Sie mir zuerst, was Sie gern wären. Im Konjunktiv, bitte – Wünsche im Indikativ sind Bestellungen.","The monkey is stirring the cauldron. She would like to pour you something. First tell me what you would like to be. In the subjunctive, please — wishes in the indicative are orders.","Die Meerkatze rührt im Kessel. Sie würde dir gern etwas einschenken. Sag mir zuerst, was du gern wärst. Im Konjunktiv, bitte – Wünsche im Indikativ sind Bestellungen."],
 ["C","t21"],
 A("task"),
 ["N","Zwischen zwei Büchern steckte das Blatt, das in deiner Mappe gefehlt hatte. Es gehörte nicht zum Pakt. Es war älter als der Pakt, und zwei Hände hatten darauf geschrieben.","Between two books was the sheet that had been missing from your folder. It did not belong to the pact. It was older than the pact, and two hands had written on it."],
 ["D","Das zweite Blatt","„Was wettet Ihr? den sollt Ihr noch verlieren, wenn Ihr mir die Erlaubnis gebt, ihn meine Straße sacht zu führen.“\n\n„Werd ich zum Augenblicke sagen: Verweile doch! du bist so schön! Dann magst du mich in Fesseln schlagen.“ – Topp!","'What will you wager? You shall lose him yet, if you give me leave to lead him gently down my road.'\n\n'If ever I say to the moment: Stay! you are so beautiful! — then you may put me in chains.' — Done!"],
 ["N","Die obere Wette war alt, in einer Schrift, die du nicht kanntest. Dein Name stand nicht darin – gemeint war nur „der Mensch“. Die untere war jünger. Ein Doktor hatte sie selbst angeboten, in einem Studierzimmer wie diesem. Darunter stand ein Wort von anderer Hand: „Topp!“","The upper wager was old, in a hand you did not know. Your name was not in it — all it meant was 'man'. The lower one was younger. A doctor had offered it himself, in a study like this one. Beneath it, in another hand, stood one word: 'Done!'"],
 ["N","Du hast immer geglaubt, dass er gewinnt, wenn du scheiterst. Das stand dort nicht.","You always believed that he wins if you fail. That was not what it said."],
 ["M","Sie haben es gelesen. Gut. Dann wissen Sie jetzt, dass ich auf zwei Arten gewinne. Erstens: wenn Sie meine Straße gehen statt Ihrer eigenen – die bequeme. Zweitens: wenn Sie stehen bleiben und sagen: „Es reicht. Verweile doch, du bist so schön.“ Durchfallen steht in keiner der beiden Wetten.","You've read it. Good. Then you now know that I win in two ways. First: if you walk my road instead of your own — the comfortable one. Second: if you stop and say: 'That will do. Stay, you are so beautiful.' Failing is in neither wager.","Du hast es gelesen. Gut. Dann weißt du jetzt, dass ich auf zwei Arten gewinne. Erstens: wenn du meine Straße gehst statt deiner eigenen – die bequeme. Zweitens: wenn du stehen bleibst und sagst: „Es reicht. Verweile doch, du bist so schön.“ Durchfallen steht in keiner der beiden Wetten."],
 ["S","Er bietet dir gleich das Du an, weil man seine Beute duzt. Ich habe dich immer geduzt.","In a moment he will offer you the du, because one says du to one's prey. I have always said du to you."],
 ["N","In Goethes Stück musste Faust dreimal „Herein!“ sagen, bevor der Teufel eintrat. Hier war es umgekehrt: Der Teufel stand im Zimmer und wartete, ob du dreimal „du“ sagen würdest.","In Goethe's play Faust had to say 'Come in!' three times before the devil entered. Here it was the other way round: the devil stood in the room and waited to see whether you would say 'du' three times."],
 ["M","Bisher habe ich „Sie“ gesagt. Der Doktor vor Ihnen hat von mir erst „Ihr“ gehört und dann, an dem Abend, an dem es ernst wurde, „du“. Wenn Sie das wollen, sagen Sie es. Man muss es dreimal sagen. Das ist bei uns Vorschrift.","Until now I have said 'Sie'. The doctor before you first heard 'Ihr' from me and then, on the evening when it became serious, 'du'. If you want that, say so. One has to say it three times. With us that is regulation.","Bisher habe ich „Sie“ gesagt. Der Doktor vor dir hat von mir erst „Ihr“ gehört und dann, an dem Abend, an dem es ernst wurde, „du“. Du hast es dreimal gesagt. Das ist bei uns Vorschrift. Also: du."],
 A("pay"),
 ["M","Warum ich Sie trotzdem jeden Tag weitertreibe? Das ist eine gute Frage. Stellen Sie sie mir in neunzehn Kapiteln noch einmal.","Why I still drive you on every day? Good question. Ask me again in nineteen chapters.","Warum ich dich trotzdem jeden Tag weitertreibe? Das ist eine gute Frage. Stell sie mir in neunzehn Kapiteln noch einmal."]]};

SCN[22]={scene:[
 ["N","Gretchen saß am Spinnrad und sang. Noch war nichts geschehen. Später wurde sie verführt, verlassen und verurteilt – und in allen drei Sätzen fehlt der, der es getan hat. Im Passiv verschwindet der Täter: „Sie wurde verlassen.“ Von wem? Das sagt der Satz nicht.","Gretchen sat at the spinning wheel and sang. Nothing had happened yet. Later she was seduced, abandoned and sentenced — and in all three sentences the one who did it is missing. In the passive the culprit disappears: 'She was abandoned.' By whom? The sentence does not say."],
 ["M","„Der Patient wurde operiert.“ Von wem, Doktor? Im Passiv sind alle unschuldig. Deshalb liebe ich es.","'The patient was operated on.' By whom, Doctor? In the passive everyone is innocent. That is why I love it.","„Der Patient wurde operiert.“ Von wem, Doktor? Im Passiv sind alle unschuldig. Deshalb liebe ich es."],
 A("cast"),
 ["M","Also: Von wem wurde sie verlassen? Sagen Sie es im Passiv. Aber nennen Sie den Täter – mit „von“.","So: by whom was she abandoned? Say it in the passive. But name the culprit — with 'von'.","Also: Von wem wurde sie verlassen? Sag es im Passiv. Aber nenn den Täter – mit „von“."],
 ["C","g22"],
 ["S","Gretchen wurde verlassen. Du wirst geprüft. Mephisto sagt, es sei gerecht. Ich werde nie gefragt.","Gretchen was abandoned. You are being tested. Mephisto says it is just. I am never asked."],
 ["N","Dann legte er dir einen Aufnahmebogen hin, wie er in jeder Notaufnahme geschrieben wird.","Then he put an admission sheet in front of you, of the kind that is written in every emergency department."],
 ["D","Aufnahmebogen","Aufnahme wegen Luftnot. Die Patientin wurde vom Rettungsdienst gebracht, untersucht, geröntgt und mit Sauerstoff versorgt. Der Rettungsdienst berichtet, sie sei zu Hause gestürzt. Sie gibt an, sie habe seit drei Tagen kaum geschlafen.\n\nFragen der Patientin: nicht dokumentiert.","Admission for shortness of breath. The patient was brought in by the ambulance service, examined, X-rayed and given oxygen. The ambulance service reports that she fell at home. She states that she has hardly slept for three days.\n\nQuestions asked by the patient: not documented."],
 A("task"),
 ["X","Du","Die Patientin gibt an, sie bekomme seit drei Tagen schlecht Luft. Sie sagt, sie habe nachts Angst. Was sie gefragt hat, wurde nicht aufgeschrieben.","The patient states that she has been short of breath for three days. She says she is afraid at night. What she asked was not written down."],
 A("pay"),
 ["M","Sie wurde untersucht, verurteilt und vergessen. Niemand hat sie gefragt. Wenn Sie eine Patientin im Passiv beschreiben, dann denken Sie daran, dass sie im Aktiv leidet.","She was examined, sentenced and forgotten. Nobody asked her. When you describe a patient in the passive, remember that she suffers in the active.","Sie wurde untersucht, verurteilt und vergessen. Niemand hat sie gefragt. Wenn du eine Patientin im Passiv beschreibst, dann denk daran, dass sie im Aktiv leidet."],
 ["N","Er sah aus, als hätte er das nicht sagen wollen.","He looked as if he had not meant to say that."]]};

SCN[23]={scene:[
 ["N","An diesem Abend lasest du zum ersten Mal das Original. Die Wörter waren alt, die Grammatik war frei, die Reime sangen. Wer Goethe versteht, versteht jede Behörde.","That evening you read the original for the first time. The words were old, the grammar was free, the rhymes sang. Whoever understands Goethe understands every public office."],
 ["D","Faust I · Nacht","Habe nun, ach! Philosophie, / Juristerei und Medizin, / Und leider auch Theologie / Durchaus studiert, mit heißem Bemühn. / Da steh ich nun, ich armer Tor! / Und bin so klug als wie zuvor.","I have now, alas, studied philosophy, law and medicine, and sadly theology too, thoroughly, with ardent effort. And here I stand, poor fool that I am, and am as wise as I was before."],
 A("cast"),
 ["M","Erklären Sie es mir. In einfachem Deutsch, wie einer Patientin. Ohne Reim, ohne „ach“.","Explain it to me. In simple German, as to a patient. Without rhyme, without 'alas'.","Erklär es mir. In einfachem Deutsch, wie einer Patientin. Ohne Reim, ohne „ach“."],
 A("task"),
 ["X","Du","Faust hat alles studiert, auch Medizin. Er hat sehr viel gearbeitet. Trotzdem weiß er nicht mehr als vorher, und das macht ihn unglücklich.","Faust has studied everything, medicine too. He has worked very hard. All the same he knows no more than before, and that makes him unhappy."],
 ["M","Sie irren. Natürlich irren Sie. Solange Sie irren, streben Sie. Und solange Sie streben, bekomme ich Sie nicht. Sehen Sie das Problem? Ich schon.","You err. Of course you err. As long as you err, you strive. And as long as you strive, I do not get you. Do you see the problem? I do.","Du irrst. Natürlich irrst du. Solange du irrst, strebst du. Und solange du strebst, bekomme ich dich nicht. Siehst du das Problem? Ich schon."],
 ["N","An diesem Abend war er freundlich. Er rückte dir den Stuhl zurecht, ganz nah an den Ofen. Der Stuhl war warm. Es war das Unheimlichste, was er je getan hatte.","That evening he was kind. He pulled out the chair for you, right up close to the stove. The chair was warm. It was the most uncanny thing he had ever done."],
 ["M","Sie verstehen den Bäcker, den Busfahrer und die Nachbarin. Wozu brauchen Sie noch den Konjunktiv? Bleiben Sie hier. Es ist warm. Ich würde aufhören, Sie zu beleidigen.","You understand the baker, the bus driver and the neighbour. What do you still need the subjunctive for? Stay here. It is warm. I would stop insulting you.","Du verstehst den Bäcker, den Busfahrer und die Nachbarin. Wozu brauchst du noch den Konjunktiv? Bleib hier. Es ist warm. Ich würde aufhören, dich zu beleidigen."],
 ["S","Wenn ich du wäre, würde ich bleiben. Aber ich bin du – und ich weiß nicht mehr, ob ich bleiben will.","If I were you, I would stay. But I am you — and I no longer know whether I want to stay."],
 A("pay"),
 ["C","v23"],
 ["N","Hinter der Tür des Studierzimmers kratzte etwas am Holz. Es klang wie Pfoten.","Behind the door of the study something scratched at the wood. It sounded like paws."]]};

SCN[24]={scene:[
 ["N","Seit der Hexenküche fehlte das alte Blatt wieder. Du fandest es im Studierzimmer: Der Pudel lag darauf. Er wuchs, als du danach griffst, und er wuchs noch einmal, bis sein Rücken die Bücher berührte. Dann hatte er dein Gesicht.","Since the witch's kitchen the old sheet had been missing again. You found it in the study: the poodle was lying on it. It grew when you reached for it, and it grew once more, until its back touched the books. Then it had your face."],
 ["M","Das ist nicht Ihr Schatten. Das Gesicht hat er sich nur geliehen. Das ist der Teil von mir, der noch gewinnen will. Ich habe ihn 1808 hinter den Ofen gelegt und nie ganz weggeschickt.","That is not your shadow. He has only borrowed the face. That is the part of me that still wants to win. I laid him behind the stove in 1808 and never quite sent him away.","Das ist nicht dein Schatten. Das Gesicht hat er sich nur geliehen. Das ist der Teil von mir, der noch gewinnen will. Ich habe ihn 1808 hinter den Ofen gelegt und nie ganz weggeschickt."],
 A("cast"),
 ["X","Der Pudel","Bleib. Du hast genug gelernt. Wenn du jetzt aufhörst, bist du zufrieden, und wenn du zufrieden bist, gehörst du uns. Das stand auf dem Blatt, das du gelesen hast.","Stay. You have learned enough. If you stop now you are satisfied, and if you are satisfied you belong to us. That was on the sheet that you read."],
 ["S","Der Pudel bin nicht ich. Aber wir kennen uns. Er sagt, was ich früher gesagt habe. Es klingt hässlich, wenn es ein anderer sagt. Wenn du ihn besiegst, werde ich leiser.","The poodle is not me. But we know each other. He says what I used to say. It sounds ugly when someone else says it. If you defeat him, I will grow quieter."],
 ["N","Dann spuckte er dir deine alten Sätze vor die Füße, einen nach dem anderen: „Die Tisch.“ „Ich habe gekommt.“ „Mit die Zug.“ Jeder lag da wie ein nasser Knochen. Er fragte, wem sie gehörten.","Then it spat your old sentences at your feet, one after another: 'Die Tisch.' 'Ich habe gekommt.' 'Mit die Zug.' Each lay there like a wet bone. It asked whom they belonged to."],
 ["C","p24"],
 ["X","Du","Und jetzt? Kann man ihn zurückrufen?","And now? Can he be called off?"],
 ["M","Das kann ich nicht. Er gehorcht mir nicht mehr. Er war immer der Fleißigere von uns beiden.","I cannot. He no longer obeys me. He was always the more industrious of the two of us.","Das kann ich nicht. Er gehorcht mir nicht mehr. Er war immer der Fleißigere von uns beiden."],
 ["N","Der Pudel legte sich vor die Tür. Solange er dort lag, kam niemand hinaus: nicht nach Berlin, nicht auf den Brocken, nicht nach Heidelberg.","The poodle lay down in front of the door. As long as it lay there, nobody got out: not to Berlin, not onto the Brocken, not to Heidelberg."],
 ["X","Der Pudel","Du sagst, dass du weitergehst. Ich sage, dass du es nicht kannst. Du sagst, dass du Arzt bist. Ich sage, dass du hier nur ein Mann bist, der Wörter sucht.","You say that you are going on. I say that you cannot. You say that you are a physician. I say that here you are only a man who is looking for words."],
 A("task"),
 ["M","Ich verneine alles, was Sie sagen – so hat er es von mir gelernt. Er hat nicht unrecht: Sie suchen Wörter. Aber inzwischen finden Sie sie. Beweisen Sie ihm das Gegenteil. Auf B1-Niveau. Ohne Wörterbuch. Ich würde mit dem Verb am Ende anfangen. Das hasst er.","I deny everything you say — that is how he learned it from me. He is not wrong: you are looking for words. But by now you find them. Prove him wrong. At B1 level. Without a dictionary. I would begin with the verb at the end. He hates that.","Ich verneine alles, was du sagst – so hat er es von mir gelernt. Er hat nicht unrecht: Du suchst Wörter. Aber inzwischen findest du sie. Beweise ihm das Gegenteil. Auf B1-Niveau. Ohne Wörterbuch. Ich würde mit dem Verb am Ende anfangen. Das hasst er."],
 A("pay"),
 ["N","Du machtest den ersten Schritt auf die Tür zu.","You took the first step towards the door."]],
 after:[
 ["N","Der Pudel kroch hinter den Ofen. Das Blatt lag auf der Schwelle. Du hobst es auf und stecktest es ein, und Mephisto tat, als hätte er es nicht gesehen.","The poodle crept behind the stove. The sheet lay on the threshold. You picked it up and put it in your pocket, and Mephisto acted as if he had not seen it."],
 ["M","Auf Ihrer Stirn steht nur noch „…fänger“. Wir arbeiten daran. Packen Sie. In Berlin regnet es, und man verkauft dort etwas, was ich nicht verkaufe: Abkürzungen.","On your forehead it now only says '…fänger'. We are working on it. Pack. In Berlin it is raining, and they sell something there that I do not sell: shortcuts.","Auf deiner Stirn steht nur noch „…fänger“. Wir arbeiten daran. Pack. In Berlin regnet es, und man verkauft dort etwas, was ich nicht verkaufe: Abkürzungen."]]};

// ================================================================= REALM IV · Berlin, November 1923 · B2
SCN[25]={scene:[
 ["N","Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. (Kafka, 1915) Du erwachst im Nachtzug aus Prag, als er in den Anhalter Bahnhof einfährt. Es ist November 1923, und auch du bist verwandelt: in einen Antragsteller, dessen Name auf drei Formularen falsch geschrieben steht.","When Gregor Samsa woke one morning from uneasy dreams, he found himself transformed in his bed into a monstrous vermin. (Kafka, 1915) You wake on the night train from Prague as it pulls into the Anhalter Bahnhof. It is November 1923, and you too are transformed: into an applicant whose name is misspelt on three forms."],
 ["X","Atze","Extrablatt! Dollar steht uff vier Komma zwee Billionen! Wat kiekste, Männeken? Billion, nich Milliarde!","(Standard: Extrablatt! Der Dollar steht auf vier Komma zwei Billionen! Was schaust du, Kleiner? Billion, nicht Milliarde!) Extra! The dollar is at 4.2 trillion! What are you staring at, mate? Billion, not Milliarde!"],
 ["M","Verlassen Sie sich in dieser Stadt auf kein Wort, das Sie zu kennen glauben. Eine deutsche Billion hat zwölf Nullen, Ihre englische „billion“ neun. An drei Nullen ist schon mancher zugrunde gegangen.","In this city, rely on no word you think you know. A German Billion has twelve noughts, your English 'billion' nine. Three noughts have ruined many a man.","Verlass dich in dieser Stadt auf kein Wort, das du zu kennen glaubst. Eine deutsche Billion hat zwölf Nullen, deine englische „billion“ neun. An drei Nullen ist schon mancher zugrunde gegangen."],
 A("cast"),
 ["C","s25"],
 ["N","Verben mit Präpositionen sind Panzer, die man nicht mehr ablegt: Man wartet auf etwas, denkt an etwas, leidet unter etwas.","Verbs with prepositions are shells one never takes off again: one waits for something, thinks of something, suffers from something."],
 ["M","Woran denken Sie? An mich, hoffe ich. „An“ plus Akkusativ. Der Panzer gehört zum Verb. Für immer.","What are you thinking of? Of me, I hope. 'An' plus accusative. The shell belongs to the verb. For ever.","Woran denkst du? An mich, hoffe ich. „An“ plus Akkusativ. Der Panzer gehört zum Verb. Für immer."],
 ["N","Am Abend führt er dich ins Hinterzimmer der Gaststätte „Zur letzten Instanz“, gleich neben dem Gericht. Heute ist dort Kabarett. Auf der Bühne steht ein Conférencier im Frack. Du kennst die Stimme. Er stellt dich dem Saal vor, wie man bei der Visite einen Fall vorstellt.","In the evening he takes you to the back room of the tavern 'Zur letzten Instanz', right next to the court. Tonight there is cabaret there. On the stage stands a master of ceremonies in tails. You know the voice. He presents you to the house the way one presents a case on the ward round."],
 ["M","Meine Damen und Herren: In Reihe drei sehen Sie einen Arzt, der seit vierundzwanzig Kapiteln unter dem Dativ leidet. Er klagt über Adjektivendungen, er träumt von einem Stempel, und er verlässt sich auf mich. Prognose: ungewiss. Procedere: weiterquälen.","Ladies and gentlemen: in row three you see a physician who has been suffering from the dative for twenty-four chapters. He complains of adjective endings, he dreams of a stamp, and he relies on me. Prognosis: uncertain. Plan: continue the torment.","Meine Damen und Herren: In Reihe drei sehen Sie einen Arzt, der seit vierundzwanzig Kapiteln unter dem Dativ leidet. Er klagt über Adjektivendungen, er träumt von einem Stempel, und er verlässt sich auf mich. Prognose: ungewiss. Procedere: weiterquälen."],
 ["N","Gelächter. In der ersten Reihe lacht einer nicht: ein kleiner Herr mit Zylinder, runder Brille und weißen Handschuhen. Als Mephisto ihn bemerkt, verspricht er sich – zum ersten Mal, seit du ihn kennst.","Laughter. In the front row one man is not laughing: a small gentleman with a top hat, round glasses and white gloves. When Mephisto notices him, he stumbles over his words — for the first time since you have known him."],
 ["M","… und er hofft auf – er hofft – Verzeihung. Musik!","… and he hopes for — he hopes — pardon me. Music!","… und er hofft auf – er hofft – Verzeihung. Musik!"],
 A("task"),
 ["N","In der Pause steht der kleine Herr neben dir. Er riecht nach Äther. Er überreicht dir eine Karte und ist verschwunden, bevor du dich bei ihm bedanken oder nach seinem Namen fragen kannst.","In the interval the small gentleman is standing beside you. He smells of ether. He hands you a card and has vanished before you can thank him or ask for his name."],
 ["D","Visitenkarte","Dr. Caligari · Institut für müheloses Deutsch · B2 in vierzehn Nächten. Ohne Lernen. Ohne Fehler. Ohne Teufel.\n\nFragen Sie ihn, wie viele seiner Kunden bestanden haben – und was er davon hatte.","Dr Caligari · Institute for Effortless German · B2 in fourteen nights. Without studying. Without mistakes. Without a devil.\n\nAsk him how many of his clients have passed — and what he got out of it."],
 ["S","Du wartest auf den Tag, an dem du dich nicht mehr für deine Fehler schämst. Bisher habe ich mich darum gekümmert, dass er nicht kommt. Der kleine Herr interessiert sich für dich. Ich weiß nicht, ob ich mich darüber freue.","You are waiting for the day when you are no longer ashamed of your mistakes. Until now I have seen to it that it does not come. The small gentleman is interested in you. I do not know whether I am pleased about that."],
 ["X","Du","Wer war das? Seit wann verspricht sich der Teufel?","Who was that? Since when does the devil stumble over his words?"],
 ["M","Ein Kollege. Wir haben uns um dieselbe Stelle beworben. Er hat sie nicht bekommen – noch nicht. Werfen Sie die Karte weg. Ich bitte Sie selten um etwas.","A colleague. We applied for the same post. He did not get it — not yet. Throw the card away. I seldom ask you for anything.","Ein Kollege. Wir haben uns um dieselbe Stelle beworben. Er hat sie nicht bekommen – noch nicht. Wirf die Karte weg. Ich bitte dich selten um etwas."],
 A("pay"),
 ["N","Du wirfst sie nicht weg.","You do not throw it away."]]};

SCN[26]={scene:[
 ["N","Im Lunapark am Halensee, zwischen Wasserrutschbahn und Schießbude, steht ein Zelt, dessen Wände schief gemalt sind. Davor zeigt Dr. Caligari, der aus Holstenwall gekommen ist, einer Stadt, die auf keiner Karte steht, seinen Schlafwandler Cesare, der seit dreiundzwanzig Jahren schläft. Relativsätze schlafen auch im Satz: der Mann, dessen Augen geschlossen sind, mit dem niemand spricht, von dem alle reden.","In the Lunapark at Halensee, between the water chute and the shooting gallery, stands a tent whose walls are painted crooked. In front of it Dr Caligari, who has come from Holstenwall, a town that is on no map, shows his sleepwalker Cesare, who has been asleep for twenty-three years. Relative clauses sleep inside the sentence too: the man whose eyes are closed, with whom nobody speaks, of whom everyone talks."],
 ["M","Dessen, deren, dem, denen. Ich verkaufe Seelen, deren Besitzer nichts davon wissen. Er dort verkauft Zertifikate, deren Besitzer nichts können. Das ist der Unterschied zwischen uns, und er ist kleiner, als mir lieb ist.","Dessen, deren, dem, denen. I sell souls whose owners know nothing about it. He over there sells certificates whose owners can do nothing. That is the difference between us, and it is smaller than I would like.","Dessen, deren, dem, denen. Ich verkaufe Seelen, deren Besitzer nichts davon wissen. Er dort verkauft Zertifikate, deren Besitzer nichts können. Das ist der Unterschied zwischen uns, und er ist kleiner, als mir lieb ist."],
 A("cast"),
 ["N","Caligari öffnet den Schrank. Der Schlafwandler, dessen Augen seit dreiundzwanzig Jahren geschlossen sind, schlägt sie auf und sagt jedem die Zukunft voraus. Dann dreht er den Kopf zu dir, obwohl du nichts gefragt hast.","Caligari opens the cabinet. The sleepwalker, whose eyes have been closed for twenty-three years, opens them and tells everyone their future. Then he turns his head towards you, although you have asked nothing."],
 ["X","Cesare","Sie fragen, wie lange Sie noch lernen müssen? Bis zum Morgengrauen der Prüfung. Sie werden vor einer Tür stehen, durch die er nicht gehen darf, und an einem Bett, an dem Sie schon viermal gestanden haben.","You ask how much longer you must study? Until the dawn of the exam. You will stand before a door through which he may not go, and at a bed at which you have already stood four times."],
 ["X","Dr. Caligari","Ein Somnambule lernt nicht, Herr Doktor. Er wird gesprochen. Sehen Sie sich meine Absolventen an – dort, in der ersten Reihe, die Herrschaften, denen ich das Zertifikat bereits ausgehändigt habe.","A somnambulist does not learn, Doctor. He is spoken. Look at my graduates — there, in the front row, the ladies and gentlemen to whom I have already handed the certificate."],
 ["N","In der ersten Reihe sitzen sieben Menschen, auf deren Knien gerahmte Urkunden liegen. Sie lächeln. Sie klatschen nicht. Einer von ihnen, ein Mann, dessen Gesicht grau geworden ist, rutscht langsam vom Stuhl.","In the front row sit seven people on whose knees lie framed certificates. They are smiling. They do not clap. One of them, a man whose face has turned grey, slides slowly off his chair."],
 ["X","Eine Absolventin","Keine Sorge. Er ist nur sehr sensibel. Eventuell steht er gleich wieder auf.","She means: 'Don't worry. He is just very sensible. He will eventually get up again.' — She says: 'He is just very sensitive. He may possibly get up again in a moment.'"],
 A("task"),
 ["X","Du","Hallo! Hören Sie mich? – Keine Atmung. Sie, die Dame, neben der ich knie: Rufen Sie den Notarzt, eins-eins-zwei! Sie, der Herr, dessen Jacke hier liegt: Holen Sie den Defibrillator vom Eingang! Ich beginne mit der Herzdruckmassage.","Hello! Can you hear me? — No breathing. You, the lady beside whom I am kneeling: call the emergency doctor, one-one-two! You, the gentleman whose jacket is lying here: fetch the defibrillator from the entrance! I am starting chest compressions."],
 ["X","Eine Zuschauerin","Der Notarzt ist gerufen!","The emergency doctor has been called!"],
 ["N","Dreißig zu zwei. Du zählst auf Deutsch, ohne es zu merken. Keiner der Absolventen steht auf. Keiner sagt ein Wort. Sie haben B2, und sie können nicht einmal „Hilfe“ rufen.","Thirty to two. You count in German without noticing. None of the graduates stands up. None says a word. They have B2, and they cannot even call 'help'."],
 ["M","Das war die erste Reanimation, die Sie auf Deutsch geleitet haben. Drei Befehle, zwei Relativsätze, kein Fehler. Eine Eins-Eins-Zwei und einen Defibrillator gibt es in diesem Jahr übrigens noch nicht. Sie haben trotzdem beides verlangt. In Heidelberg wird man Ihnen gehorchen.","That was the first resuscitation you have led in German. Three commands, two relative clauses, no mistake. A one-one-two and a defibrillator do not exist yet in this year, by the way. You demanded both all the same. In Heidelberg they will obey you.","Das war die erste Reanimation, die du auf Deutsch geleitet hast. Drei Befehle, zwei Relativsätze, kein Fehler. Eine Eins-Eins-Zwei und einen Defibrillator gibt es in diesem Jahr übrigens noch nicht. Du hast trotzdem beides verlangt. In Heidelberg wird man dir gehorchen."],
 ["S","Ich bin der Schlafwandler, dessen Augen offen sind und in dessen Kopf ein anderer spricht. Der Mann, um den du dich gekümmert hast, hat die Augen aufgemacht. Er hat dich angesehen – nicht den Herrn mit dem Zylinder.","I am the sleepwalker whose eyes are open and in whose head another speaks. The man you looked after has opened his eyes. He looked at you — not at the gentleman with the top hat."],
 ["X","Der Mann am Boden","Danke, Herr Kollege. Ich bin … Physiker. Nein. Arzt. Wendt, Assistenzarzt. Warum habe ich das eben falsch gesagt?","Thank you, colleague. I am … a physicist. No. A physician. Wendt, junior doctor. Why did I say that wrong just now?"],
 ["X","Dr. Caligari","Beeindruckend. Und so anstrengend. Eine Frage an Cesare ist im Eintritt inbegriffen, Herr Doktor. Stellen Sie sie.","Impressive. And so strenuous. One question to Cesare is included in the admission, Doctor. Ask it."],
 ["C","z26"],
 A("pay"),
 ["X","Dr. Caligari","Kommen Sie wieder, wenn Sie müde sind, Herr Doktor. Müde werden sie alle.","Come back when you are tired, Doctor. They all get tired."]]};

SCN[27]={scene:[
 ["N","Die Stadt ist eine Maschine, und die Maschine hat zwei Hände: entweder … oder, sowohl … als auch, nicht nur … sondern auch, weder … noch, je … desto. Zweiteilige Konnektoren halten ein Argument zusammen wie Zahnräder. In einem schiefen Haus zwischen den Türmen hat Dr. Caligari ein Labor gemietet.","The city is a machine, and the machine has two hands: either … or, both … and, not only … but also, neither … nor, the more … the more. Two-part connectors hold an argument together like cogwheels. In a crooked house between the towers Dr Caligari has rented a laboratory."],
 ["N","Auf dem Tisch liegt eine Gestalt aus Metall. Als er den Hebel umlegt, bekommt sie ein Gesicht. Es ist deines. Sie öffnet den Mund und spricht ein Deutsch, das du noch nie gesprochen hast: fehlerfrei, akzentfrei, ohne zu zögern.","On the table lies a figure of metal. When he throws the lever, it gets a face. It is yours. It opens its mouth and speaks a German you have never spoken: flawless, without an accent, without hesitating."],
 A("cast"),
 ["X","Der Maschinenmensch","Guten Tag. Ich spreche sowohl mit den Patienten als auch mit der Kommission. Ich mache weder Fehler noch Pausen. Je weniger Sie selbst sagen, desto besser klinge ich.","Good day. I speak both with the patients and with the commission. I make neither mistakes nor pauses. The less you say yourself, the better I sound."],
 ["X","Dr. Caligari","Entweder Sie quälen sich noch ein Jahr, Herr Doktor, oder Sie lassen ihn für sich sprechen. Er ist nicht nur schneller als Sie, sondern auch billiger als Ihr Teufel: Er kostet keine Seele. Nur die Stimme.","Either you torment yourself for another year, Doctor, or you let him speak for you. He is not only faster than you but also cheaper than your devil: he costs no soul. Only the voice."],
 ["S","Zwar ist er besser als wir, aber er ist niemand. Je länger ich ihm zuhöre, desto weniger erkenne ich mich. Ausnahmsweise bin ich deiner Meinung, bevor du eine hast.","He may be better than us, but he is nobody. The longer I listen to him, the less I recognise myself. For once I share your opinion before you have one."],
 A("task"),
 ["X","Du","Dann sag mir eins: Was hat mich die Frau in Bett vier gefragt?","Then tell me one thing: what did the woman in bed four ask me?"],
 ["X","Der Maschinenmensch","Diese Angabe liegt mir nicht vor. Bitte formulieren Sie Ihre Anfrage neu.","This information is not available to me. Please rephrase your request."],
 ["N","Er weiß es nicht. Du weißt es: „Muss ich sterben, Herr Doktor?“ Sie hat nicht ihn gefragt, sondern dich. Damals hattest du die Wörter nicht. Er hätte sie gehabt – zwar fehlerfrei, aber nicht für sie.","He does not know. You know: 'Am I going to die, Doctor?' She did not ask him, but you. Back then you did not have the words. He would have had them — flawless, admittedly, but not for her."],
 ["C","m27"],
 A("pay"),
 ["M","Je mehr Sie lernen, desto weniger Ausreden haben Sie – und desto schwerer sind Sie zu ersetzen. Furchtbar, nicht wahr? Kommen Sie. Er hat zwar Ihr Gesicht, aber er hat nie um drei Uhr nachts ein Wort gesucht und es gefunden.","The more you learn, the fewer excuses you have — and the harder you are to replace. Terrible, isn't it? Come. He may have your face, but he has never searched for a word at three in the morning and found it.","Je mehr du lernst, desto weniger Ausreden hast du – und desto schwerer bist du zu ersetzen. Furchtbar, nicht wahr? Komm. Er hat zwar dein Gesicht, aber er hat nie um drei Uhr nachts ein Wort gesucht und es gefunden."]]};

SCN[28]={scene:[
 ["N","E. T. A. Hoffmann war tagsüber Richter am Berliner Kammergericht und schrieb nachts. 1816 ließ er den Sandmann kommen, der den Kindern Sand in die Augen wirft, bis sie blutig herausspringen. Bei ihm hat der Sandmann zwei Namen und zwei Gesichter: Coppelius und Coppola. Hören ist dein schwächster Sinn. Darum: hören, bis die Augen bluten – temporal, kausal, final, konzessiv.","E. T. A. Hoffmann was a judge at the Berlin Court of Appeal by day and wrote at night. In 1816 he let the Sandman come, who throws sand into children's eyes until they spring out bleeding. In his story the Sandman has two names and two faces: Coppelius and Coppola. Listening is your weakest sense. Therefore: listen until your eyes bleed — temporal, causal, final, concessive."],
 ["M","Obwohl Sie müde sind, hören Sie zu. Damit Sie verstehen. Sodass Sie bestehen. Nachdem Sie gelitten haben. – Augen zu. Die brauchen Sie hier nicht. Der Sandmann nimmt sie ohnehin.","Although you are tired, you listen. So that you understand. So that you pass. After you have suffered. — Eyes shut. You don't need them here. The Sandman takes them anyway.","Obwohl du müde bist, hörst du zu. Damit du verstehst. Sodass du bestehst. Nachdem du gelitten hast. – Augen zu. Die brauchst du hier nicht. Der Sandmann nimmt sie ohnehin."],
 A("cast"),
 ["N","Die letzte Ringbahn. In der Ecke des Wagens sitzt ein Mann mit Luftballons und einem Blindenstock. Für dieses Kapitel löscht Mephisto die Laterne; wer nichts sieht, hört besser. Im Dunkeln hörst du seine Schritte nach links gehen. Dann spricht er dich von rechts an.","The last Ringbahn. In the corner of the carriage sits a man with balloons and a white stick. For this chapter Mephisto puts out the lantern; whoever sees nothing hears better. In the dark you hear his steps go to the left. Then he speaks to you from the right."],
 ["X","Eine Stimme von rechts","Setzen Sie sich, Doktor. Sie haben heute genug getan. Weil Sie so fleißig waren, dürfen Sie aufhören. Falls Sie etwas brauchen, spreche ich für Sie. Schlafen Sie, damit ich arbeiten kann.","Sit down, Doctor. You have done enough today. Because you were so industrious, you may stop. In case you need anything, I shall speak for you. Sleep, so that I can work."],
 ["X","Eine Stimme von links","Stehen Sie auf, Doktor. Bevor Sie schlafen, wiederholen Sie die Konnektoren. Wenn Sie dabei einschlafen, wecke ich Sie – und zwar so, dass Sie es sich merken.","Stand up, Doctor. Before you sleep, you revise the connectors. If you fall asleep doing it, I shall wake you — and in such a way that you remember it."],
 ["N","Zwei Stimmen, derselbe Klang, dasselbe höfliche Sie. Eine davon ist nicht er. Du hast keine Augen. Du hast nur die Grammatik und das, was du über ihn weißt.","Two voices, the same sound, the same polite Sie. One of them is not him. You have no eyes. You have only the grammar and what you know about him."],
 ["S","Obwohl du mich nicht hören willst, höre ich dir zu. Früher tat ich es, damit ich wusste, wann du aufgibst. Heute tue ich es, weil ich im Dunkeln der Einzige bin, der sich auskennt. Rechts roch es nach Äther.","Although you do not want to hear me, I listen to you. I used to do it so that I knew when you would give up. Today I do it because in the dark I am the only one who knows his way around. On the right it smelled of ether."],
 A("task"),
 ["X","Du","Die Stimme von rechts ist die falsche. Obwohl sie freundlicher klingt, will sie, dass ich aufhöre. Das will er nie.","The voice on the right is the false one. Although it sounds friendlier, it wants me to stop. He never wants that."],
 ["M","Richtig. Woran Sie es gemerkt haben, weiß ich: an dem Wort, das ich nicht in den Mund nehme, solange Sie mir gehören.","Correct. I know how you noticed: by the word that I do not take into my mouth as long as you belong to me.","Richtig. Woran du es gemerkt hast, weiß ich: an dem Wort, das ich nicht in den Mund nehme, solange du mir gehörst."],
 ["N","Rechts lacht jemand leise und zufrieden; dann entfernen sich Schritte. Als die Laterne wieder brennt, steht Mephisto links. Rechts ist niemand. Auf dem Boden liegt ein weißer Handschuh. Draußen ruft der Schaffner: „Zurückbleiben, bitte!“","On the right someone laughs quietly and contentedly; then steps move away. When the lantern burns again, Mephisto is standing on the left. On the right there is nobody. On the floor lies a white glove. Outside the guard calls: 'Stand back, please!'"],
 ["X","Blinder Paule","Ick seh nüscht, aber ick hör allet. Der Rechte hat „jenug“ jesacht, der Linke nich. Da kannste nich meckern.","(Standard: Ich sehe nichts, aber ich höre alles. Der Rechte hat „genug“ gesagt, der Linke nicht. Da kann man nicht meckern.) I see nothing, but I hear everything. The one on the right said 'enough', the one on the left didn't. Can't complain."],
 A("pay"),
 ["M","Er kann meine Stimme. Das können viele. Was er nicht kann: Sie beleidigen, solange es Ihnen nützt. Merken Sie sich, woran Sie mich erkannt haben. Sie werden es noch einmal brauchen.","He can do my voice. Many can. What he cannot do: insult you for as long as it is of use to you. Remember how you recognised me. You will need it once more.","Er kann meine Stimme. Das können viele. Was er nicht kann: dich beleidigen, solange es dir nützt. Merk dir, woran du mich erkannt hast. Du wirst es noch einmal brauchen."]]};

SCN[29]={scene:[
 ["N","In Berlin schreibt man nicht „weil der Patient Fieber hatte“, sondern „aufgrund des Fiebers“. Der Nominalstil verwandelt jedes Verb in ein Ding. Kälter, kürzer, amtlicher. Im weißen Handschuh steckt ein Zettel mit einer Adresse: die Rote Burg am Alexanderplatz, vierter Stock, Kanzlei. Sprechzeiten nach Vereinbarung.","In Berlin one does not write 'because the patient had a fever' but 'owing to the fever'. Nominal style turns every verb into a thing. Colder, shorter, more official. Inside the white glove is a slip with an address: the Red Castle on Alexanderplatz, fourth floor, chancery. Consultation by appointment."],
 ["M","Nach erfolgter Aufklärung und Einwilligung erfolgte die Durchführung der Untersuchung. Schön, nicht? Kein Mensch weit und breit. – Gehen Sie nicht hinauf. Das ist keine Bitte, das ist eine Empfehlung unter Vorbehalt.","Following completed information and consent, the performance of the examination took place. Lovely, isn't it? Not a human being far and wide. — Do not go up. That is not a request; it is a recommendation subject to reservation.","Nach erfolgter Aufklärung und Einwilligung erfolgte die Durchführung der Untersuchung. Schön, nicht? Kein Mensch weit und breit. – Geh nicht hinauf. Das ist keine Bitte, das ist eine Empfehlung unter Vorbehalt."],
 A("cast"),
 ["N","Du gehst hinauf. Die Tür steht offen, das Zimmer ist leer. Auf dem Tisch liegen zwei Schriftstücke, so sorgfältig nebeneinander ausgerichtet, dass niemand sie vergessen haben kann.","You go up. The door stands open, the room is empty. On the table lie two documents, aligned side by side so carefully that nobody can have forgotten them."],
 A("task"),
 ["D","Vollmacht","Hiermit bevollmächtige ich, {NAME}, Herrn Dr. C., mich in sämtlichen sprachlichen Angelegenheiten zu vertreten, insbesondere bei Prüfungen, Telefonaten und Gesprächen mit Patienten. Die Vollmacht gilt ab Unterzeichnung bis auf Widerruf. Der Widerruf bedarf der mündlichen Form.","I, {NAME}, hereby authorise Dr C. to represent me in all linguistic matters, in particular at examinations, on the telephone and in conversations with patients. The power of attorney is valid from signature until revoked. Revocation must be made orally."],
 ["D","Personalakte M. · streng vertraulich","Betreff: Sachbearbeiter M., Abteilung Seelenerwerb. Bilanz seit 1808: abgeschlossene Pakte 4 117, verwertete Seelen 0. Der Sachbearbeiter führt seine Kunden nachweislich bis zum Bestehen. Bei erneutem Verlust – Vorgang {NAME}, Arzt – erfolgt die Versetzung in den Innendienst unter Einziehung der Laterne.\n\nSoll er sie haben. – M.","Re: case officer M., Soul Acquisition Department. Record since 1808: pacts concluded 4,117; souls realised 0. The officer demonstrably leads his clients until they pass. In the event of a further loss — case {NAME}, physician — he will be transferred to desk duty and the lantern withdrawn.\n\nHandwritten: Let him have it. — M."],
 ["N","Jetzt verstehst du, warum beide Papiere hier liegen. Das erste sollst du unterschreiben. Das zweite sollst du lesen, damit du es tust: Dein Lehrer ist, amtlich festgestellt, ein Versager.","Now you understand why both papers are lying here. The first you are meant to sign. The second you are meant to read so that you do: your teacher is, officially established, a failure."],
 ["S","Nach Abschluss der Prüfung erfolgt die Ablehnung Ihres Antrags. So klang meine Hoffnung im Nominalstil. Bei Durchsicht dieser Akte kommt mir eine andere: Wer viertausendmal verloren hat und trotzdem jeden Morgen wiederkommt, ist kein Versager. Im Krankenhaus haben wir für so jemanden ein anderes Wort.","Upon completion of the examination, your application will be rejected. That is how my hope used to sound in nominal style. On perusal of this file another one occurs to me: someone who has lost four thousand times and still comes back every morning is not a failure. In the hospital we have a different word for someone like that."],
 ["M","Sie lesen fremde Personalakten? In diesem Land ist das eine Ordnungswidrigkeit. – Es ist eine Fälschung. Unterstehen Sie sich, mich für anständig zu halten.","You read other people's personnel files? In this country that is an administrative offence. — It is a forgery. Don't you dare think me decent.","Du liest fremde Personalakten? In diesem Land ist das eine Ordnungswidrigkeit. – Es ist eine Fälschung. Untersteh dich, mich für anständig zu halten."],
 ["M","Schreiben Sie mit, wenn Sie schon lesen: Ich bin ein Teil von jener Kraft, die stets das Böse will und stets das Gute schafft. Das Erste ist meine Absicht. Das Zweite ist ein Betriebsunfall.","Take notes, since you are reading anyway: I am part of that power which always wills evil and always works good. The first is my intention. The second is an industrial accident.","Schreib mit, wenn du schon liest: Ich bin ein Teil von jener Kraft, die stets das Böse will und stets das Gute schafft. Das Erste ist meine Absicht. Das Zweite ist ein Betriebsunfall."],
 ["X","Du","Und die Vollmacht? Ist die auch eine Fälschung?","And the power of attorney? Is that a forgery too?"],
 ["M","Nein. Die ist echt. Er hält seine Verträge – das ist ja das Schlimme. Wer bei ihm unterschreibt, ist am nächsten Morgen zufrieden. Und Sie wissen seit der Hexenküche, wem die Zufriedenen gehören.","No. That one is genuine. He keeps his contracts — that is the awful part. Whoever signs with him is satisfied the next morning. And you have known since the witch's kitchen to whom the satisfied belong.","Nein. Die ist echt. Er hält seine Verträge – das ist ja das Schlimme. Wer bei ihm unterschreibt, ist am nächsten Morgen zufrieden. Und du weißt seit der Hexenküche, wem die Zufriedenen gehören."],
 ["C","a29"],
 A("pay"),
 ["N","Du lässt die Vollmacht liegen. Die Akte nimmst du mit. Im Treppenhaus hörst du über dir eine Tür, die leise geschlossen wird.","You leave the power of attorney where it is. The file you take with you. On the stairs you hear a door above you being quietly closed."]]};

SCN[30]={scene:[
 ["N","Passiv, Zustandspassiv, Passiversatz: Die Wunde wird genäht. Die Wunde ist genäht. Die Wunde lässt sich nähen. Die Wunde ist zu nähen. Vier Formen, ein Körper. In dieser Nacht wirst du geweckt: Jemand steht an deinem Bett. Seine Augen sind offen, und er schläft.","Passive, statal passive, passive substitutes: the wound is being stitched. The wound is stitched. The wound can be stitched. The wound is to be stitched. Four forms, one body. That night you are woken: somebody is standing at your bed. His eyes are open, and he is asleep."],
 A("cast"),
 ["X","Cesare","Ich wurde geweckt. Ich wurde geschickt. Mir wurde gesagt, Ihre Stimme sei zu holen. Es wird nicht gefragt, ob ich will.","I was woken. I was sent. I was told your voice was to be fetched. It is not asked whether I want to."],
 ["N","In seiner Hand liegt ein Messer. Es wird gehoben. Dann steht ein anderer zwischen euch, und die Klinge trifft eine Hand statt deiner Kehle.","In his hand lies a knife. It is raised. Then another stands between you, and the blade meets a hand instead of your throat."],
 ["M","Zurück in den Schrank. Und Ihrem Herrn sei ausgerichtet, dass hier nichts abzuholen ist.","Back into the cabinet. And let your master be told that there is nothing to be collected here.","Zurück in den Schrank. Und Ihrem Herrn sei ausgerichtet, dass hier nichts abzuholen ist."],
 ["N","Cesare lässt das Messer fallen und geht, wie er gekommen ist. Mephisto hält die Hand hoch. Quer über die Handfläche läuft ein Schnitt – genau auf einer alten Narbe, als wäre dort schon einmal ein Siegel zerbrochen worden.","Cesare drops the knife and leaves the way he came. Mephisto holds up his hand. Across the palm runs a cut — exactly along an old scar, as if a seal had been broken there once before."],
 ["M","Die Wunde ist zu nähen. Sofort. Von Ihnen. Mit zitternden Händen. Sie lässt sich übrigens nicht schließen, seit 1832 nicht. Üben Sie trotzdem an mir. Ich halte still.","The wound is to be stitched. Now. By you. With shaking hands. It cannot be closed, by the way, not since 1832. Practise on me all the same. I shall hold still.","Die Wunde ist zu nähen. Sofort. Von dir. Mit zitternden Händen. Sie lässt sich übrigens nicht schließen, seit 1832 nicht. Üb trotzdem an mir. Ich halte still."],
 ["C","l30"],
 A("task"),
 ["X","Du","Bevor genäht wird, muss gefragt werden. Besteht Tetanusschutz? Sind Allergien bekannt? Werden blutverdünnende Medikamente eingenommen?","Before stitching is done, questions must be asked. Is there tetanus protection? Are any allergies known? Are blood-thinning drugs being taken?"],
 ["M","Tetanus. Ich. – Die letzte Auffrischung dürfte 1832 erfolgt sein. Allergien: gegen Lob. Blutverdünner werden nicht eingenommen; es ist ohnehin wenig Blut vorhanden.","Tetanus. Me. — The last booster was probably given in 1832. Allergies: to praise. Blood thinners are not being taken; there is little blood present in any case.","Tetanus. Ich. – Die letzte Auffrischung dürfte 1832 erfolgt sein. Allergien: gegen Lob. Blutverdünner werden nicht eingenommen; es ist ohnehin wenig Blut vorhanden."],
 ["X","Du","Die Wunde wird jetzt gereinigt. Danach wird örtlich betäubt; das brennt kurz. Dann wird sie mit vier Stichen verschlossen. Sind Sie damit einverstanden?","The wound will now be cleaned. After that a local anaesthetic will be given; that stings briefly. Then it will be closed with four stitches. Do you consent to that?"],
 ["N","Er sieht die Nadel an und dann dich. Zum ersten Mal ist er derjenige, dem etwas erklärt wird. Er nickt, und er sieht dabei aus wie jeder Patient, der sich vor einer Nadel fürchtet und es nicht zugibt.","He looks at the needle and then at you. For the first time he is the one to whom something is explained. He nods, and as he does he looks like every patient who is afraid of a needle and will not admit it."],
 ["S","Es wird gelernt, es wird vergessen, es wird gelitten. Von wem? Das Passiv verrät es nicht. Heute Nacht verrate ich es: Es wurde für dich geblutet. Von ihm.","There is learning, there is forgetting, there is suffering. By whom? The passive won't tell. Tonight I will: blood was shed for you. By him."],
 A("pay"),
 ["M","Einverstanden. – Schreiben Sie in den Befund: Patient wurde aufgeklärt, Wunde wurde versorgt, Naht hält nicht. Und schreiben Sie nicht hinein, von wem der Schnitt abgefangen wurde. Für solche Fälle ist das Passiv erfunden worden.","I consent. — Write in the report: patient was informed, wound was treated, suture does not hold. And do not write in it by whom the cut was intercepted. It is for cases like this that the passive was invented.","Einverstanden. – Schreib in den Befund: Patient wurde aufgeklärt, Wunde wurde versorgt, Naht hält nicht. Und schreib nicht hinein, von wem der Schnitt abgefangen wurde. Für solche Fälle ist das Passiv erfunden worden."]]};

SCN[31]={scene:[
 ["N","Im Kabarett erzählt jeder, was der andere gesagt habe. Indirekte Rede: Er sagt, er sei krank. Sie behauptet, sie habe nichts gewusst. Der Konjunktiv I ist die Sprache der Zeitungen, der Übergaben und der Protokolle.","In the cabaret everyone tells what the other is supposed to have said. Reported speech: he says he is ill. She claims she knew nothing. Subjunctive I is the language of newspapers, handovers and police records."],
 A("cast"),
 ["X","Elli Zander","Der Herr Direktor lässt mitteilen, heute Abend werde nicht gelacht. Lachen sei geeignet, den Schlaf der Bevölkerung zu stören. Er sei, heißt es, kein Hypnotiseur, sondern Pädagoge.","The director wishes it to be known that there will be no laughing tonight. Laughter is said to be liable to disturb the sleep of the population. He is, they say, no hypnotist but an educator."],
 ["N","Kurz nach Mitternacht geht im Saal das Licht an. Ein Mann im grauen Mantel kommt an deinen Tisch.","Shortly after midnight the lights in the hall go on. A man in a grey coat comes to your table."],
 ["X","Kommissar Lohmann","Lohmann, Kriminalpolizei. Sie haben vorgestern im Lunapark einen Mann reanimiert. Ich brauche seinen Namen, seine Diagnose und alles, was er Ihnen gesagt hat.","Lohmann, criminal police. The day before yesterday you resuscitated a man in the Lunapark. I need his name, his diagnosis and everything he said to you."],
 ["X","Du","Dazu darf ich Ihnen keine Auskunft geben. Ich unterliege der ärztlichen Schweigepflicht. Solange der Patient mich nicht davon entbunden hat, sage ich nichts über ihn.","I may not give you any information about that. I am bound by medical confidentiality. As long as the patient has not released me from it, I shall say nothing about him."],
 ["X","Kommissar Lohmann","Verstanden. Dann zu der Nacht danach. Da waren Sie nicht Arzt, sondern Zeuge. Was hat der Mann mit dem Messer gesagt?","Understood. Then to the night after. There you were not a physician but a witness. What did the man with the knife say?"],
 ["N","Mitten im Satz flüstert jemand hinter dir, bevor du den Fehler machen kannst.","In the middle of the sentence someone whispers behind you, before you can make the mistake."],
 ["S","Vorsicht: Nach „er sagte“ heißt es jetzt „sei“, nicht „ist“. – Das habe ich nicht gesagt. Man behauptet nur, ich hätte es gesagt.","Careful: after 'er sagte' it is now 'sei', not 'ist'. — I did not say that. People merely claim I said it."],
 A("task"),
 ["X","Du","Er sagte, er sei geweckt und geschickt worden. Ihm sei gesagt worden, er solle meine Stimme holen. Niemand habe ihn gefragt, ob er wolle. Von wem er geschickt worden sei, hat er nicht gesagt.","He said he had been woken and sent. He had been told he was to fetch my voice. Nobody had asked him whether he wanted to. By whom he had been sent he did not say."],
 ["X","Kommissar Lohmann","Sie geben also an, der Mann habe im Auftrag gehandelt. Das entlastet ihn. Die meisten Zeugen hätten das weggelassen. – Noch etwas: Ich habe vorhin ein Flüstern gehört. Wer hat Ihnen vorgesagt?","So you state that the man acted on someone's orders. That exonerates him. Most witnesses would have left that out. — One more thing: I heard a whisper just now. Who prompted you?"],
 ["C","b31"],
 A("pay"),
 ["M","Der Patient gibt an, er habe seit drei Tagen Schmerzen. Er gibt an. Er lügt vielleicht. Sie schreiben es trotzdem auf – und zwar so, dass man hört, wessen Satz es ist. Das haben Sie eben für einen Mann getan, der Sie umbringen sollte.","The patient states he has had pain for three days. He states. Maybe he is lying. You write it down anyway — and in such a way that one hears whose sentence it is. You have just done that for a man who was supposed to kill you.","Der Patient gibt an, er habe seit drei Tagen Schmerzen. Er gibt an. Er lügt vielleicht. Du schreibst es trotzdem auf – und zwar so, dass man hört, wessen Satz es ist. Das hast du eben für einen Mann getan, der dich umbringen sollte."],
 ["S","Man sagt, du seist begabt. Man sagt, du habest Fortschritte gemacht. Ich sage nichts. Ich warte. – Gut: Ich habe geflüstert. Einmal. Es werde nicht wieder vorkommen, heißt es.","They say you are gifted. They say you have made progress. I say nothing. I wait. — All right: I whispered. Once. It will not happen again, so it is said."],
 ["N","Beim Hinausgehen bleibt der Kommissar stehen. Er sagt, ein gewisser Dr. C. betreibe am Stadtrand ein Institut, aus dem noch nie jemand eine Aussage gemacht habe. Die Absolventen seien alle sehr zufrieden. Sprechen wolle keiner.","On his way out the inspector stops. He says a certain Dr C. runs an institute on the edge of the city from which nobody has ever made a statement. The graduates are all very satisfied, he says. None of them wants to speak."],
 ["X","Kommissar Lohmann","Sie haben dort morgen früh Ihre Prüfung, höre ich. Passen Sie auf, was Sie unterschreiben.","You have your examination there tomorrow morning, I hear. Be careful what you sign."]]};

SCN[32]={scene:[
 ["N","Am Ende des Films stellt sich heraus: Der Erzähler sitzt im Irrenhaus, und Caligari ist der Direktor. Das Institut am Stadtrand ist ein solches Haus. In einem Saal mit schiefen Fenstern liegen die Absolventen in Reihen und schlafen, jeder mit seiner Urkunde auf der Brust. Am Ende des Saals steht ein einziges Pult. Die Prüfung ist dieselbe wie überall: Lesen, Hören, Schreiben, Sprechen. Goethe-Zertifikat B2.","At the end of the film it turns out: the narrator is sitting in the asylum, and Caligari is the director. The institute on the edge of the city is such a house. In a hall with crooked windows the graduates lie in rows and sleep, each with his certificate on his chest. At the end of the hall stands a single desk. The examination is the same as everywhere: reading, listening, writing, speaking. Goethe-Zertifikat B2."],
 A("cast"),
 ["X","Dr. Caligari","Ich bin der Direktor dieser Anstalt. Bestehen Sie, und Sie dürfen gehen. Vielleicht. – Aber wozu die Mühe? Hier sind die Lösungen, Herr Doktor, sämtliche. Sie brauchen lediglich zu unterschreiben – diesmal bei mir.","I am the director of this institution. Pass, and you may leave. Perhaps. — But why take the trouble? Here are the answers, Doctor, all of them. You need only sign — this time with me."],
 ["M","Bei mir hat er bereits unterschrieben. Ich teile nicht.","He has already signed with me. I do not share.","Bei mir hat er bereits unterschrieben. Ich teile nicht."],
 ["X","Dr. Caligari","Du teilst seit 1808, Kollege, und zwar alles: viertausend Pakte, keine einzige Seele. Meine Kunden schlafen, sind zufrieden und gehören der Abteilung. Deiner hier schläft nicht, ist nie zufrieden – und kostet dich die Laterne.","You have been sharing since 1808, colleague, and everything at that: four thousand pacts, not a single soul. My clients sleep, are satisfied and belong to the department. Yours here does not sleep, is never satisfied — and is costing you the lantern."],
 ["N","Mephisto antwortet nicht. Er hält die verbundene Hand hinter dem Rücken. Zum ersten Mal sieht er dich an, als wüsste er nicht, was du tun wirst.","Mephisto does not answer. He holds the bandaged hand behind his back. For the first time he looks at you as if he did not know what you will do."],
 ["C","c32"],
 A("task"),
 ["S","Vielleicht hat er recht, und du bist der Verrückte: der Einzige im Saal, der wach ist. Dann bin ich es auch. Ausnahmsweise möchte ich mit niemandem hier tauschen.","Perhaps he is right and you are the madman: the only one in the hall who is awake. Then so am I. For once I would not want to change places with anyone here."],
 ["M","Er schummelt nicht, Kollege – dafür habe ich ihn zu gründlich gequält. Gehen Sie ans Pult, Doktor. Ich bleibe an der Tür; dies ist sein Haus, nicht meines. Cesare kennt Ihre Prüfung. Ihr Deutsch kennt er nicht.","He does not cheat, colleague — I have tormented him too thoroughly for that. Go to the desk, Doctor. I stay at the door; this is his house, not mine. Cesare knows your exam. He does not know your German.","Er schummelt nicht, Kollege – dafür habe ich ihn zu gründlich gequält. Geh ans Pult. Ich bleibe an der Tür; dies ist sein Haus, nicht meines. Cesare kennt deine Prüfung. Dein Deutsch kennt er nicht."],
 ["N","Du setzt dich. Die Schläfer atmen im Takt. Caligari öffnet den Schrank.","You sit down. The sleepers breathe in time. Caligari opens the cabinet."],
 A("pay"),
 ["X","Dr. Caligari","Cesare, erwache! Der Kandidat möchte sich anstrengen.","Cesare, awake! The candidate wishes to exert himself."]],
 after:[
 ["N","Caligari trägt die Zwangsjacke. Die Urkunden auf den Schläfern sind leer geworden, und einer nach dem anderen schlägt die Augen auf. Der Schrank steht offen. Cesare sitzt auf der Kante und sieht seine Hände an.","Caligari is wearing the straitjacket. The certificates on the sleepers have gone blank, and one after another they open their eyes. The cabinet stands open. Cesare is sitting on its edge, looking at his hands."],
 ["X","Cesare","Ich habe geträumt, ich lerne. Sie haben es getan.","I dreamed that I was learning. You did it."],
 ["M","B2. Auf Ihrer Stirn steht jetzt nur noch „er“. Ein Pronomen. Immerhin eine Person. – Die Akte, die Sie eingesteckt haben, behalten Sie. Man wird nach ihr fragen. Man fragt bereits.","B2. On your forehead it now only says 'er'. A pronoun. A person, at least. — The file you pocketed: keep it. They will ask about it. They are asking already.","B2. Auf deiner Stirn steht jetzt nur noch „er“. Ein Pronomen. Immerhin eine Person. – Die Akte, die du eingesteckt hast, behältst du. Man wird nach ihr fragen. Man fragt bereits."]]};

// ================================================================= „Was bisher geschah" (prev, above the first line) · „Nächstes Mal" (next, at the end)
// [sie, en] for 17–21 (Sie, Präteritum); [sie, en, du] from 22 (the du form is shown when P().du===true).
const R={
17:{prev:["Sie befahlen dem Golem, und er zerfiel. Der Kellner nannte Ihnen seinen Namen: Emil.","You gave the Golem commands, and he crumbled. The waiter told you his name: Emil."],
    next:["Der Pudel hört zu. Für jeden richtigen Nebensatz dürfen Sie einen Schritt näher an das Regal.","The poodle is listening. For every correct subordinate clause you may take one step closer to the shelf."]},
18:{prev:["Im Studierzimmer stand Ihr Vertrag. Sie hatten ihn unterschrieben, aber nie gelesen. Ein Pudel bewachte das Regal.","In the study stood your contract. You had signed it but never read it. A poodle guarded the shelf."],
    next:["Sie lesen, was Sie unterschrieben haben. Zwischen § 5 und der Unterschrift ist Platz.","You read what you signed. Between § 5 and the signature there is room."]},
19:{prev:["Der Pudel war Mephistos erste Gestalt. Sie kamen dem Regal näher, weil das Verb am Ende stand.","The poodle was Mephisto's first shape. You came closer to the shelf because the verb stood at the end."],
    next:["Mephisto lädt Sie in einen Keller ein, damit Sie nicht an das fehlende Blatt denken.","Mephisto invites you to a cellar so that you do not think about the missing sheet."]},
20:{prev:["Der Pakt hatte fünf Paragrafen und eine Lücke. Das zweite Blatt der Mappe trug der Pudel im Maul davon.","The pact had five clauses and a gap. The folder's second sheet was carried off in the poodle's mouth."],
    next:["Das alte Blatt taucht auf. Darauf steht, wie er gewinnt – und es ist nicht das, was Sie glauben.","The old sheet turns up. On it stands how he wins — and it is not what you believe."]},
21:{prev:["Im Keller beruhigten Sie einen wütenden Mann – auf Deutsch. Mephisto sah das nicht gern.","In the cellar you calmed an angry man — in German. Mephisto did not like to see that."],
    next:["Eine Frau wurde verurteilt und vergessen. Mephisto sagt einen Satz, den er nicht sagen wollte.","A woman was sentenced and forgotten. Mephisto says a sentence he did not mean to say."]},
22:{prev:["Sie wissen jetzt, wie er gewinnt: nicht, wenn Sie scheitern, sondern wenn Sie zufrieden sind – oder seine bequeme Straße gehen. Er hat Ihnen das Du angeboten.","You now know how he wins: not if you fail, but if you are satisfied — or walk his comfortable road. He has offered you the du.","Du weißt jetzt, wie er gewinnt: nicht, wenn du scheiterst, sondern wenn du zufrieden bist – oder seine bequeme Straße gehst. Er hat dir das Du angeboten."],
    next:["An diesem Abend ist er freundlich. Es wäre besser, wenn er es nicht wäre.","This evening he is kind. It would be better if he were not.","An diesem Abend ist er freundlich. Es wäre besser, wenn er es nicht wäre."]},
23:{prev:["Bei Gretchen ist ihm die Maske verrutscht: Eine Patientin, sagte er, leide im Aktiv.","With Gretchen his mask slipped: a patient, he said, suffers in the active voice.","Bei Gretchen ist ihm die Maske verrutscht: Eine Patientin, sagte er, leide im Aktiv."],
    next:["Der Pudel liegt vor der Tür. Er trägt Ihr Gesicht und sagt, was Sie längst nicht mehr hören wollen.","The poodle lies in front of the door. It wears your face and says what you have long since stopped wanting to hear.","Der Pudel liegt vor der Tür. Er trägt dein Gesicht und sagt, was du längst nicht mehr hören willst."]},
24:{prev:["Er hat Ihnen einen warmen Stuhl angeboten. Das alte Blatt ist wieder verschwunden.","He offered you a warm chair. The old sheet has disappeared again.","Er hat dir einen warmen Stuhl angeboten. Das alte Blatt ist wieder verschwunden."],
    next:["In Berlin wartet jemand auf Sie, der sich mit Mephisto um dieselbe Stelle beworben hat.","In Berlin somebody is waiting for you who applied for the same post as Mephisto.","In Berlin wartet jemand auf dich, der sich mit Mephisto um dieselbe Stelle beworben hat."]},
25:{prev:["Sie haben den Pudel besiegt und das Blatt eingesteckt. An Bett vier wurde Ihnen eine Frage gestellt, auf die Sie noch keine Antwort hatten.","You defeated the poodle and pocketed the sheet. At bed four you were asked a question to which you did not yet have an answer.","Du hast den Pudel besiegt und das Blatt eingesteckt. An Bett vier wurde dir eine Frage gestellt, auf die du noch keine Antwort hattest."],
    next:["Im Lunapark öffnet ein Schlafwandler die Augen – und einer, dessen Zertifikat gerahmt ist, hört auf zu atmen.","In the Lunapark a sleepwalker opens his eyes — and a man whose certificate is framed stops breathing.","Im Lunapark öffnet ein Schlafwandler die Augen – und einer, dessen Zertifikat gerahmt ist, hört auf zu atmen."]},
26:{prev:["Ein kleiner Herr mit weißen Handschuhen hat Ihnen eine Karte überreicht, vor der sich sogar Mephisto versprochen hat.","A small gentleman in white gloves handed you a card that made even Mephisto stumble over his words.","Ein kleiner Herr mit weißen Handschuhen hat dir eine Karte überreicht, vor der sich sogar Mephisto versprochen hat."],
    next:["Caligari hat nicht nur Schlafwandler, sondern auch eine Maschine. Sie hat Ihr Gesicht.","Caligari has not only sleepwalkers but also a machine. It has your face.","Caligari hat nicht nur Schlafwandler, sondern auch eine Maschine. Sie hat dein Gesicht."]},
27:{prev:["Sie haben auf Deutsch eine Reanimation geleitet, während Caligaris Absolventen stumm danebensaßen.","You led a resuscitation in German while Caligari's graduates sat by in silence.","Du hast auf Deutsch eine Reanimation geleitet, während Caligaris Absolventen stumm danebensaßen."],
    next:["Die Laterne geht aus. Im Dunkeln sprechen zwei Stimmen, von denen nur eine ihm gehört.","The lantern goes out. In the dark two voices speak, only one of which is his.","Die Laterne geht aus. Im Dunkeln sprechen zwei Stimmen, von denen nur eine ihm gehört."]},
28:{prev:["Der Maschinenmensch sprach fehlerfrei und wusste nichts von Bett vier. Caligari verlangt dafür nur Ihre Stimme.","The machine man spoke flawlessly and knew nothing of bed four. All Caligari asks for it is your voice.","Der Maschinenmensch sprach fehlerfrei und wusste nichts von Bett vier. Caligari verlangt dafür nur deine Stimme."],
    next:["In einem weißen Handschuh steckt eine Adresse. Dort liegen zwei Papiere, die man nicht vergessen, sondern hingelegt hat.","Inside a white glove is an address. Two papers lie there that were not forgotten but laid out.","In einem weißen Handschuh steckt eine Adresse. Dort liegen zwei Papiere, die man nicht vergessen, sondern hingelegt hat."]},
29:{prev:["Sie haben ihn im Dunkeln an einem einzigen Wort erkannt – an dem, das nur der andere sagt.","You recognised him in the dark by a single word — the one only the other one says.","Du hast ihn im Dunkeln an einem einzigen Wort erkannt – an dem, das nur der andere sagt."],
    next:["Nachts steht jemand an Ihrem Bett, der geschickt wurde. Am Ende ist es Mephisto, der genäht werden muss.","At night someone who was sent stands at your bed. In the end it is Mephisto who has to be stitched.","Nachts steht jemand an deinem Bett, der geschickt wurde. Am Ende ist es Mephisto, der genäht werden muss."]},
30:{prev:["Die Vollmacht haben Sie liegen lassen, die Akte haben Sie mitgenommen: viertausend Pakte, keine Seele – und beim nächsten Verlust die Laterne.","You left the power of attorney where it was and took the file: four thousand pacts, no soul — and at the next loss, the lantern.","Die Vollmacht hast du liegen lassen, die Akte hast du mitgenommen: viertausend Pakte, keine Seele – und beim nächsten Verlust die Laterne."],
    next:["Die Kriminalpolizei möchte wissen, was gesagt worden sei. Ein Teil davon unterliegt der Schweigepflicht.","The criminal police would like to know what is supposed to have been said. Part of it is covered by confidentiality.","Die Kriminalpolizei möchte wissen, was gesagt worden sei. Ein Teil davon unterliegt der Schweigepflicht."]},
31:{prev:["Cesare wurde geschickt, Ihre Stimme zu holen. Der Schnitt traf Mephistos Hand, und Sie haben ihn aufgeklärt wie jeden Patienten.","Cesare was sent to fetch your voice. The cut met Mephisto's hand, and you informed him like any patient.","Cesare wurde geschickt, deine Stimme zu holen. Der Schnitt traf Mephistos Hand, und du hast ihn aufgeklärt wie jeden Patienten."],
    next:["Caligaris Institut, ein Saal voller zufriedener Schläfer, ein Pult – und sämtliche Lösungen gegen eine Unterschrift.","Caligari's institute, a hall full of satisfied sleepers, one desk — and all the answers in exchange for a signature.","Caligaris Institut, ein Saal voller zufriedener Schläfer, ein Pult – und sämtliche Lösungen gegen eine Unterschrift."]},
32:{prev:["Sie haben dem Kommissar wiedergegeben, was Cesare gesagt habe, und über Ihren Patienten geschwiegen. Ihr Schatten hat Ihnen dabei vorgesagt.","You reported to the inspector what Cesare had said, and kept silent about your patient. Your shadow prompted you as you did.","Du hast dem Kommissar wiedergegeben, was Cesare gesagt habe, und über deinen Patienten geschwiegen. Dein Schatten hat dir dabei vorgesagt."],
    next:["Im Anatomischen Theater liegt Ihr erstes Jahr auf dem Tisch. In der obersten Bank sitzt ein Herr in Grau, der nicht Ihretwegen gekommen ist.","In the anatomy theatre your first year lies on the table. On the top bench sits a gentleman in grey who has not come on your account.","Im Anatomischen Theater liegt dein erstes Jahr auf dem Tisch. In der obersten Bank sitzt ein Herr in Grau, der nicht deinetwegen gekommen ist."]}};
Object.keys(R).forEach(n=>{CHX[n]=CHX[n]||{};CHX[n].prev=R[n].prev;CHX[n].next=R[n].next});

// ================================================================= duel texts (text fields of BOSSES; mechanics are track I's)
BOSX.pudel={
 intro:["Ein schwarzer Pudel vor der Tür des Studierzimmers. Er wächst. Er trägt Ihr Gesicht – geliehen. Er verneint jeden Satz, den Sie sagen. Unter seinen Pfoten liegt das zweite Blatt.","A black poodle in front of the study door. It grows. It wears your face — borrowed. It denies every sentence you say. Under its paws lies the second sheet."],
 taunt:[["Bleib. Du hast genug gelernt.","Stay. You have learned enough."],["Ich verneine dich. Das Verb steht falsch.","I negate you. The verb is in the wrong place."],["Du wärst zufrieden, wenn du jetzt aufhören würdest. Konjunktiv II.","You would be satisfied if you stopped now. Subjunctive II."],["Es wurde gelernt. Von wem? Nicht von dir.","Learning was done. By whom? Not by you."],["Das also war des Pudels Kern: ein Fehler.","So that was the poodle's core: a mistake."],["Hinter dem Ofen ist es warm. Komm.","It is warm behind the stove. Come."]],
 win:["Der Pudel schrumpft, bis er wieder ein Hund ist, und kriecht hinter den Ofen. Die Tür ist frei. Auf der Schwelle liegt das zweite Blatt.","The poodle shrinks until it is a dog again, and creeps behind the stove. The door is free. On the threshold lies the second sheet."],
 lose:["Der Pudel legt sich wieder vor die Tür. Er sieht zufrieden aus. Nebensätze, Konjunktiv II und Passiv wiederholen – dann zurück.","The poodle lies down in front of the door again. It looks satisfied. Revise subordinate clauses, subjunctive II and passive — then come back."]};
BOSX.caligari={
 intro:["Treten Sie näher! Das Kabinett des Dr. Caligari! Hier der Somnambule Cesare, der seit 23 Jahren schläft und Ihre Prüfung kennt. Sprechen Sie mir nach: Jedes Wort, das Sie zu kennen glauben, gehört mir. Und verlieren Sie, verliert Ihr Lehrer die Laterne.","Step closer! The cabinet of Dr Caligari! Here Cesare the sleepwalker, asleep for 23 years, who knows your exam. Repeat after me: every word you think you know belongs to me. And if you lose, your teacher loses the lantern."],
 taunt:[["Cesare, erwache! Der Kandidat irrt.","Cesare, awake! The candidate errs."],["Im Irrenhaus gibt es noch Betten.","There are still beds in the asylum."],["Die Wände neigen sich. Wie Ihre Grammatik.","The walls lean. Like your grammar."],["Nominalstil, mein Herr. Nicht Gestammel.","Nominal style, sir. Not stammering."],["Sie „bekommen“ nichts, Herr Kandidat. Sie werden auch nichts.","You 'bekommen' nothing, candidate. Nor will you become anything."],["Eventuell bestehen Sie. Eventuell. Sie wissen ja jetzt, was das heißt.","'Eventuell' you will pass. Eventuell. You know by now what that means."]],
 win:["Caligari trägt die Zwangsjacke. Sie sind der Direktor – Ihrer eigenen Stimme. B2 bestanden. Im Saal schlägt der Erste die Augen auf.","Caligari wears the straitjacket. You are the director — of your own voice. B2 passed. In the hall the first sleeper opens his eyes."],
 lose:["Die Tür der Anstalt fällt ins Schloss. Die Schläfer atmen weiter im Takt. Konnektoren, Passiv, Nominalstil und indirekte Rede wiederholen – dann zurück ans Pult.","The asylum door slams shut. The sleepers go on breathing in time. Revise connectors, passive, nominal style and reported speech — then back to the desk."]};
})();

// ===== Mephisto · track S · x_s3_berlin.js (owner: s3) — Berlin language material (realm IV, B2). Data only.
// Source: S9-prague-weimar §7.3 (false friends), §7.5.1–7.5.4 (Berlinerisch, couplets, satire, intertitles); texts by S9 are original, not quotations.
// Corrections made here: couplet 2 „Ein Herr aus London" → „aus New York" (in 1923 the British billion still had twelve noughts; the American one nine);
// poem question „beinahe froh" → „beinahe schön" (the poem says „schön"); Berlinerisch no. 30 „Tschüssikowski" (post-war) → „Mach's jut!";
// false friend „Ambulanz" hedged (in Austria „die Rettung"/„Ambulanz" usage differs).
// Consumers: BOSS_X.caligari.falsch → track I (duel phase „Falsche Freunde"); BERLIN → c_s3.js shelf „Berliner Bühne".
var BOSS_X=BOSS_X||{};var BERLIN=BERLIN||{};
// [Satz des Hypnotisierten, was er auf Deutsch wirklich sagt, falsche Deutung 1, falsche Deutung 2, Erklärung, med (1 = clinically relevant)]
BOSS_X.caligari=Object.assign(BOSS_X.caligari||{},{falsch:[
 ["„Sie müssen nicht aufstehen.“","Es ist nicht nötig, dass Sie aufstehen.","Aufstehen ist verboten.","Sie sollen jetzt aufstehen.","must not = nicht dürfen. „nicht müssen“ = nicht brauchen. Der gefährlichste falsche Freund der Klinik.",1],
 ["„Ich bekomme Arzt.“","Ich erhalte einen Arzt. (Und der Akkusativ fehlt.)","Ich werde Arzt.","Ich bin Arzt.","to become = werden. bekommen = erhalten.",0],
 ["„Die Schwester gibt Ihnen ein Gift.“","Die Schwester verabreicht etwas Giftiges.","Sie bekommen ein Geschenk.","Sie bekommen ein Medikament.","gift = das Geschenk. das Gift = poison.",1],
 ["„Sie bekommen dreimal täglich eine Dose.“","Sie erhalten dreimal täglich eine Blechbüchse.","Sie erhalten dreimal täglich eine Dosis.","Sie erhalten dreimal täglich eine Spritze.","dose = die Dosis (Plural: die Dosen!). die Dose = tin, can – und ihr Plural heißt ebenfalls Dosen.",1],
 ["„Ich bin Ihr Physiker.“","Ich bin Naturwissenschaftler für Physik.","Ich bin Ihr Arzt.","Ich bin Ihr Physiotherapeut.","physician = der Arzt. der Physiker = physicist.",1],
 ["„Ich rufe die Ambulanz.“","Ich rufe in der Ambulanz an, wo Patienten ohne stationäre Aufnahme behandelt werden.","Ich rufe einen Rettungswagen.","Ich rufe den Notarzt ans Bett.","ambulance = der Rettungswagen (RTW), der Krankenwagen. die Ambulanz = in Deutschland meist die ambulante Abteilung einer Klinik (in Österreich wird das Wort anders gebraucht).",1],
 ["„Hier ist Ihr Rezept für die Rechnung.“","Hier ist Ihre ärztliche Verordnung für die Rechnung.","Hier ist Ihre Quittung.","Hier ist Ihr Kochrezept.","receipt = die Quittung. das Rezept = prescription (oder recipe).",1],
 ["„Der Oberarzt kommt eventuell.“","Der Oberarzt kommt vielleicht.","Der Oberarzt kommt schließlich doch.","Der Oberarzt kommt gleich.","eventually = schließlich, endlich. eventuell = possibly.",1],
 ["„Aktuell hat er kein Fieber.“","Im Moment hat er kein Fieber.","Eigentlich hat er kein Fieber.","Tatsächlich hat er nie Fieber gehabt.","actually = eigentlich, tatsächlich. aktuell = currently.",1],
 ["„Das ist ein sehr sensibler Vorschlag.“","Das ist ein sehr empfindlicher Vorschlag.","Das ist ein sehr vernünftiger Vorschlag.","Das ist ein sehr geheimer Vorschlag.","sensible = vernünftig. sensibel = sensitive.",0],
 ["„Die Fraktur ist nicht seriös.“","Der Bruch ist nicht vertrauenswürdig.","Der Bruch ist nicht ernst.","Der Bruch ist nicht frisch.","serious = ernst, schwer. seriös = respectable, reputable.",1],
 ["„Seien Sie brav.“","Benehmen Sie sich artig – wie ein Kind.","Seien Sie tapfer.","Seien Sie ruhig.","brave = tapfer, mutig. brav = well-behaved.",1],
 ["„Ich spreche mit dem Chef über Ihr Essen.“","Ich spreche mit dem Vorgesetzten über Ihr Essen.","Ich spreche mit dem Koch über Ihr Essen.","Ich spreche mit dem Kellner über Ihr Essen.","chef = der Koch, der Küchenchef. der Chef = boss.",0],
 ["„Der Patient hat also Husten.“","Der Patient hat folglich Husten.","Der Patient hat auch Husten.","Der Patient hat immer Husten.","also (engl.) = auch. also (dt.) = so, therefore.",1],
 ["„Ich will Sie morgen entlassen.“","Ich habe die Absicht, Sie morgen zu entlassen.","Ich werde Sie morgen sicher entlassen.","Ich muss Sie morgen entlassen.","I will = ich werde. ich will = I want to. Der Patient hört ein Versprechen, wo nur ein Wunsch steht.",1],
 ["„Die Behandlung kostet eine Billion.“","Sie kostet 1 000 000 000 000.","Sie kostet 1 000 000 000.","Sie kostet 1 000 000.","billion = die Milliarde (neun Nullen). die Billion = trillion (zwölf Nullen).",0],
 ["„Der Patient ist bald.“","Der Satz ist unvollständig: „bald“ heißt „in kurzer Zeit“.","Der Patient hat eine Glatze.","Der Patient ist kühn.","bald (engl.) = kahl, glatzköpfig. bald (dt.) = soon.",0],
 ["„Er ist fast wach.“","Er ist beinahe wach.","Er ist schnell wach.","Er ist fest wach.","fast (engl.) = schnell. fast (dt.) = almost.",1],
 ["„Wie viel Zeit spenden Sie mit Ihren Patienten?“","Wie viel Zeit schenken Sie wohltätig her? (So sagt man es nicht.)","Wie viel Zeit verbringen Sie mit ihnen?","Wie viel Geld geben Sie für sie aus?","to spend = verbringen (Zeit), ausgeben (Geld). spenden = to donate: Blut spenden, Organe spenden.",1],
 ["„Die Infusion enthält kein Präservativ.“","Die Infusion enthält kein Kondom.","Die Infusion enthält kein Konservierungsmittel.","Die Infusion enthält kein Schmerzmittel.","preservative = das Konservierungsmittel. das Präservativ = condom.",1],
 ["„Die Schwester war sehr sympathisch.“","Die Schwester war sehr nett und angenehm.","Die Schwester war sehr mitfühlend.","Die Schwester war sehr traurig.","sympathetic = mitfühlend, verständnisvoll. sympathisch = likeable.",0],
 ["„Die Schwester bringt Ihnen gleich das Tablett.“","Sie bringt ein Brett mit dem Essen.","Sie bringt die Tablette.","Sie bringt den Tablet-Computer.","das Tablett = tray. die Tablette = tablet, pill. Ein Buchstabe, ein Artikel – und der Patient schluckt nichts.",1],
 ["„Ich möchte Sie nicht blamieren.“","Ich möchte Sie nicht lächerlich machen.","Ich möchte Ihnen keine Schuld geben.","Ich möchte Sie nicht stören.","to blame = jemandem die Schuld geben, beschuldigen. blamieren = to embarrass.",0],
 ["„Mit dem Kollegen muss man Fraktur reden.“","Man muss ihm deutlich und grob die Meinung sagen.","Man muss mit ihm über Knochenbrüche sprechen.","Man muss mit ihm Latein sprechen.","Ein echter Freund mit Doppelleben: die Fraktur = der Knochenbruch UND die alte gebrochene Druckschrift. „Fraktur reden“ = Klartext reden.",1]]});

// ---------------------------------------------------------------- 1. Berlinerisch fürs Ohr — text only (never spoken by TTS); b = as heard, std = standard German
BERLIN.rules=[["ich → ick, icke","I"],["das → dit, det","that/the"],["was → wat","what"],["g- → j- (jut, janz, jeht)","g becomes j"],["au → oo (ooch, loofen, koofen)","au becomes oo"],["ei → ee (keen, een, nee)","ei becomes ee"],["auf → uff","on/up"],["nichts → nüscht","nothing"],["mir und mich werden vertauscht: „Ick liebe dir.“","mir and mich swap"]];
BERLIN.frame=["Sie müssen nicht berlinern. Sie müssen nur verstehen, was der Mann auf der Trage meint – ich sagte: müssen nicht. Nicht: dürfen nicht.","You need not speak Berlinerisch. You only need to understand what the man on the stretcher means — I said: need not. Not: must not.","Du musst nicht berlinern. Du musst nur verstehen, was der Mann auf der Trage meint – ich sagte: musst nicht. Nicht: darfst nicht."];
BERLIN.tag="So klingt es – so schreibt man es nicht";
BERLIN.ohr=[
 {id:"o1",b:"Tach ooch!",std:"Guten Tag auch!",en:"Hello (reply to a greeting)"},
 {id:"o2",b:"Na, wie jeht's? – Muss ja.",std:"Wie geht es? – Es muss ja gehen.",en:"How are things? — Can't complain (the standard answer)"},
 {id:"o3",b:"Ick hab't im Kreuz.",std:"Ich habe Rückenschmerzen.",en:"I've got back pain — triage",med:1,ask:"Seit wann haben Sie die Rückenschmerzen?"},
 {id:"o4",b:"Mir is janz blümerant.",std:"Mir ist ganz flau und schwindelig.",en:"I feel faint and queasy",med:1,ask:"Ist Ihnen schwindelig, wenn Sie aufstehen?"},
 {id:"o5",b:"Mir is kodderig.",std:"Mir ist übel.",en:"I feel sick",med:1,ask:"Müssen Sie sich übergeben?"},
 {id:"o6",b:"Ick krieg keene Luft.",std:"Ich bekomme keine Luft.",en:"I can't breathe",med:1,ask:"Seit wann bekommen Sie schlecht Luft?"},
 {id:"o7",b:"Dit zwiebelt aba!",std:"Das brennt aber!",en:"That stings! (disinfectant)",med:1,ask:"Das brennt nur kurz. Gleich ist es vorbei."},
 {id:"o8",b:"Ick bin janz malade.",std:"Ich fühle mich ganz krank und schwach.",en:"I feel poorly",med:1,ask:"Seit wann fühlen Sie sich so schwach?"},
 {id:"o9",b:"Dit jeht mir uff'n Senkel.",std:"Das geht mir auf die Nerven.",en:"That gets on my nerves"},
 {id:"o10",b:"Wat ham Se jesacht?",std:"Was haben Sie gesagt?",en:"What did you say?"},
 {id:"o11",b:"Dit weeß ick nich mehr.",std:"Das weiß ich nicht mehr.",en:"I don't remember (history-taking)",med:1,ask:"Wissen Sie noch, was Sie zuletzt gegessen haben?"},
 {id:"o12",b:"Ick hab nüscht jejessen.",std:"Ich habe nichts gegessen.",en:"I haven't eaten anything",med:1,ask:"Seit wann haben Sie nichts gegessen?"},
 {id:"o13",b:"Ick nehm da so'ne kleenen Weißen.",std:"Ich nehme so kleine weiße Tabletten.",en:"'the little white ones' — drug history",med:1,ask:"Wie heißen die Tabletten? Haben Sie die Packung dabei?"},
 {id:"o14",b:"Seit jestern Abend, Herr Dokter.",std:"Seit gestern Abend, Herr Doktor.",en:"Since last night, Doctor",med:1,ask:"Und was ist gestern Abend passiert?"},
 {id:"o15",b:"Nu mach ma halblang!",std:"Nun übertreib nicht!",en:"Steady on!"},
 {id:"o16",b:"Mach hinne!",std:"Beeil dich!",en:"Hurry up!"},
 {id:"o17",b:"Da kannste nich meckern.",std:"Da kann man nicht meckern. (= Das ist sehr gut.)",en:"Can't complain — the highest Berlin praise"},
 {id:"o18",b:"Dit is mir schnuppe.",std:"Das ist mir egal.",en:"I don't care"},
 {id:"o19",b:"Ick gloob, ick spinne!",std:"Ich glaube, ich träume!",en:"I don't believe it!"},
 {id:"o20",b:"Ach du grüne Neune!",std:"Ach du meine Güte!",en:"Good grief!"},
 {id:"o21",b:"Nachtijall, ick hör dir trapsen.",std:"Ich merke schon, worauf das hinausläuft.",en:"I can see what's coming"},
 {id:"o22",b:"Dit is jehüppt wie jesprungen.",std:"Das ist das eine wie das andere.",en:"It makes no difference"},
 {id:"o23",b:"Kiek ma eener an!",std:"Sieh mal einer an!",en:"Well, look at that!"},
 {id:"o24",b:"Wat kiekste?",std:"Was schaust du so?",en:"What are you looking at?"},
 {id:"o25",b:"Ick sach ja nüscht, ick mein ja bloß.",std:"Ich sage ja nichts, ich meine ja nur.",en:"I'm not saying anything, I'm just saying"},
 {id:"o26",b:"Haste ma'n Stift für mir?",std:"Hast du mal einen Stift für mich?",en:"Got a pen for me? (mir/mich swapped)"},
 {id:"o27",b:"Eene Schrippe mit Bulette, bitte.",std:"Ein Brötchen mit Frikadelle, bitte.",en:"A bread roll with a meatball, please — canteen"},
 {id:"o28",b:"Dit is janz weit draußen. (j. w. d.)",std:"Das ist sehr weit außerhalb.",en:"Out in the sticks"},
 {id:"o29",b:"Bleib ma uff'm Teppich!",std:"Bleib realistisch!",en:"Keep your feet on the ground"},
 {id:"o30",b:"Mach's jut! – Bis denne!",std:"Mach es gut! – Bis dann!",en:"Take care! — See you! (today also „Tschüssikowski“)"}];

// ---------------------------------------------------------------- 2. Kabarett couplets (B2 listening; read by the TTS). Gap = last word of every second line of each stanza.
// st: stanzas; a stanza with r:true is the refrain (sung after every verse; gapped once).
BERLIN.couplets=[
 {id:"c1",t:"Ohne Stempel",who:"Elli Zander",ch:27,st:[
  {l:["Ich kam zur Welt an einem Dienstag um halb acht,","die Hebamme hat's gleich zu Protokoll gebracht.","Doch weil das Standesamt geschlossen war,","galt ich als Mensch erst ab dem nächsten Jahr."]},
  {r:true,l:["Denn ohne Stempel, liebes Kind,","weiß kein Beamter, wer wir sind.","Erst abgestempelt, dann geborn –","wer's andersrum macht, hat verlorn."]},
  {l:["Ich liebte Erna, und sie liebte mich,","wir gingen hin und sagten's feierlich.","Der Mann am Schalter sah uns gar nicht an:","„Zimmer vierzehn. Stell'n Sie sich hinten an.“"]},
  {l:["Und lieg ich eines Tages kalt und stumm","und denke mir: Na endlich, es ist rum,","dann kommt ein Herr mit Mappe und mit Hut:","„Der Schein fehlt noch. Sie leben. Also gut.“"]}],
  q:["Warum „galt“ das Kind erst ein Jahr später als Mensch?","Was fehlt dem Toten am Ende?","Welche Wörter aus dem Amt hören Sie? (Protokoll, Standesamt, Schalter, Schein, Stempel)"]},
 {id:"c2",t:"Lauter Nullen",who:"Inflations-Couplet, 1923",ch:25,st:[
  {l:["Am Montag kost' das Brot 'ne Million,","am Mittwoch 'ne Milliarde schon,","am Freitag fragt der Bäcker: „Na, mein Sohn,","ham Se's nich größer? Ich nehm nur Billion.“"]},
  {r:true,l:["Nullen, Nullen, lauter Nullen,","auf dem Schein und im Büro!","Wer sie zählt, der wird sich wundern:","So reich war'n wir nie – und so k. o."]},
  {l:["Mein Onkel hat gespart sein Leben lang","und trug sein Geld voll Stolz zur Bank.","Heut kriegt er dafür, blass und krank,","'ne halbe Schrippe. Vielen Dank."]},
  {l:["Ein Herr aus New York rechnet, lacht und spricht:","„A billion? Cheap!“ – Mein Herr, das ist es nicht.","Bei uns hat die Billion drei Nullen mehr.","Jetzt wäscht er Teller, und sein Koffer ist leer."]}],
  q:["Wie entwickelt sich der Brotpreis von Montag bis Freitag?","Was ist mit dem Geld des Onkels passiert?","Welchen Fehler macht der Herr aus New York?"]},
 {id:"c3",t:"Falsche Freunde",who:"Das Lied vom Doktor aus der Fremde",ch:31,st:[
  {l:["Ein Doktor kam aus fernem Land","und nahm die Sprache bei der Hand.","Er sprach, was ihm so ähnlich schien –","da staunte man in ganz Berlin."]},
  {r:true,l:["Denn „bald“ ist nicht kahl, und „brav“ ist nicht kühn,","ein „Gift“ ist kein Geschenk, mein Lieber!","Wer was „bekommt“, der wird noch lange nichts –","und wer das glaubt, bekommt bloß Fieber."]},
  {l:["Er sagt zur Schwester früh um vier:","„Ich bin der neue Physiker hier.“","Sie holt ihm Kreide aus dem Schrank –","er rechnet noch. Der Kranke bleibt krank."]},
  {l:["Zum Kranken sprach er mild und schlicht:","„Mein Freund, Sie müssen heute nicht","aufstehn.“ – Gemeint war: Bleiben Sie!","Der Mann stand auf. Jetzt hat er's Knie."]}],
  q:["Was wollte der Doktor der Schwester sagen?","Warum ist der Kranke aufgestanden?","Erklären Sie mit eigenen Worten: „Wer was bekommt, der wird noch lange nichts.“"]},
 {id:"c4",t:"Zurückbleiben, bitte!",who:"Ringbahn-Couplet",ch:28,st:[
  {l:["Ich wollt nach oben, wollt was werden,","ein feiner Herr mit Hut auf Erden.","Ich stand am Bahnsteig, früh und fit –","der Schaffner rief: „Sie komm'n nicht mit!“"]},
  {r:true,l:["Zurückbleiben, bitte! Zurückbleiben, bitte!","Die Türen schließen, der Zug fährt an.","Und auf dem Bahnsteig, in der Mitte,","steht einer, der nicht weiter kann."]},
  {l:["Ich lernte Englisch, lernte Tippen,","ich lernte, höflich nur zu nippen.","Ich stand im Amt um Punkt halb acht –","da wurde grade zugemacht."]},
  {l:["Heut fahr ich Ringbahn, Nacht für Nacht,","im Kreis herum, und hab gelacht:","Wer nirgends hinwill, kommt nie zu spät","und sieht, wie sich die Stadt verdreht."]},
  {l:["Zurückbleiben, bitte! Zurückbleiben, bitte!","Ich bleib zurück, und zwar sehr gern.","Die Eiligen fahr'n ab – und ich, in der Mitte,","hör endlich mal mich selber plärrn."]}],
  q:["Was wollte der Sänger werden, und woran ist er gescheitert?","Wie hat sich seine Haltung in der letzten Strophe verändert?","Was bedeutet „Zurückbleiben, bitte!“ auf dem Bahnsteig – und was bedeutet es im Lied?"]}];

// ---------------------------------------------------------------- 3. Three satirical pieces (B2 reading, ~150 words). q: [question, options, index of the correct option]; open: a writing prompt.
BERLIN.satire=[
 {id:"s1",t:"Der Schalter",genre:"Glosse",text:["Der deutsche Schalter ist kein Möbelstück, sondern eine Weltanschauung. Vor ihm steht der Mensch, hinter ihm sitzt der Staat, und zwischen beiden befindet sich eine Glasscheibe mit einem Loch, das genau so groß ist, dass ein Formular hindurchpasst, aber kein Argument.","Man tritt heran. Man grüßt. Der Staat grüßt nicht zurück; er isst. Nach einer Weile hebt er den Kopf und spricht das Wort, auf dem dieses Land ruht: „Zuständig?“ Es ist keine Frage. Es ist ein Urteil. Zuständig ist nämlich grundsätzlich der Schalter daneben, und der Schalter daneben hat geschlossen, und zwar seit 1911.","Der Ausländer glaubt, er habe etwas falsch gemacht. Der Deutsche weiß: Er hat alles richtig gemacht, nur am falschen Tag. Und so gehen beide nach Hause, der eine verzweifelt, der andere beruhigt. Denn ein Amt, das funktioniert, wäre dem Deutschen unheimlich. Er würde sofort fragen, wer dafür zuständig ist."],
  q:[["Wofür ist das Loch in der Scheibe groß genug, wofür nicht?",["Für ein Formular, aber nicht für ein Argument.","Für ein Argument, aber nicht für ein Formular.","Für eine Hand, aber nicht für ein Formular."],0],
     ["Warum ist „Zuständig?“ laut Text keine Frage?",["Weil es ein Urteil ist: Zuständig ist immer ein anderer Schalter.","Weil der Beamte die Antwort kennt und gern hilft.","Weil der Beamte gar nicht spricht, sondern nur isst."],0],
     ["Worin unterscheiden sich der Ausländer und der Deutsche nach dem Besuch?",["Der Ausländer ist verzweifelt, der Deutsche beruhigt.","Beide sind zufrieden, weil sie einen Stempel haben.","Der Deutsche ist verzweifelt, der Ausländer beruhigt."],0]],
  open:"Beschreiben Sie in drei Sätzen einen Schalter, an dem Sie selbst gestanden haben – sachlich oder satirisch."},
 {id:"s2",t:"Ratschläge für einen, der Deutsch lernt",genre:"ironische Gebrauchsanweisung",text:["Fang niemals mit dem Verb an; das wäre zu einfach. Heb es dir auf. Der Deutsche liebt es, wenn er bis zum Ende eines Satzes nicht weiß, ob der Patient nun operiert, entlassen oder beerdigt wird.","Lerne die Artikel nicht. Rate. Bei drei Möglichkeiten liegst du in einem Drittel der Fälle richtig, und das ist mehr, als mancher Minister von sich sagen kann.","Sprich schnell. Wer schnell spricht, dem glaubt man, dass er es kann. Wer langsam und richtig spricht, gilt als verdächtig.","Benutze Wörter, die du aus deiner eigenen Sprache kennst. Sie bedeuten hier zwar etwas anderes, aber das merkt der Zuhörer erst, wenn du gegangen bist.","Frag nie nach. Nicke. Wer nickt, hat verstanden; so steht es in jeder Akte.","Wenn du das alles befolgst, wirst du in kurzer Zeit fließend sprechen. Verstehen wird dich niemand. Aber das ist ja bei den Einheimischen genauso."],
  q:[["Welche Ratschläge sind das Gegenteil von dem, was Mephisto verlangt?",["Artikel raten, schnell sprechen, nie nachfragen.","Langsam sprechen, Artikel lernen, nachfragen.","Das Verb ans Ende stellen und Pausen machen."],0],
     ["Welcher Absatz beschreibt Caligaris Methode?",["Der über Wörter aus der eigenen Sprache, die hier etwas anderes bedeuten.","Der über das Verb, das man sich bis zum Ende aufhebt.","Der über die Minister, die selten recht haben."],0],
     ["Welcher Ratschlag ist ernst gemeint?",["Lerne jedes Nomen mit seinem Artikel.","Nicke, wenn du nichts verstehst.","Benutze Wörter aus deiner Sprache – sie bedeuten dasselbe."],0]],
  open:"Formulieren Sie zwei Ratschläge des Textes so um, dass sie ernst gemeint sind."},
 {id:"s3",t:"Sachliche Auskunft",genre:"Gedicht in der Art der Neuen Sachlichkeit",text:["Er kam im November. Es regnete sehr. / Er hatte zwei Koffer. Der eine war leer. / Im andern lag, zwischen Hemden gepresst, / ein Zeugnis, von dem sich nur sagen lässt, / dass es hier keiner lesen kann. / Er zog seinen ältesten Mantel an.","Das Amt war geschlossen. Das Zimmer war kalt. / Die Wirtin fragte: „Beruf? Und wie alt?“ / Er sagte: „Arzt.“ Sie sagte: „Na dann: / Die Miete im Voraus. Und fang'n Se nich an / mit Damenbesuch.“ Er schrieb's in ein Buch, / denn „Miete“, „im Voraus“ und „Damenbesuch“ / waren drei Wörter, die kannte er nicht. / Er lernte sie abends bei schlechtem Licht.","Er lernte die Wörter. Die Wörter war'n schwer. / Er lernte sie nachts, und es wurden mehr. / Im Frühjahr verstand er den Mann von der Bahn, / im Sommer die Wirtin, im Herbst seinen Plan.","Er sprach nicht darüber. Er war nicht der Mann. / Doch als ihn ein Kranker verstand, irgendwann, / ging er nach Haus durch den Regen, allein, / und fand es beinahe schön, hier zu sein."],
  q:[["Was erfährt man über den Mann?",["Er ist Arzt, kam im November und lernt nachts Wörter.","Er ist Beamter und vermietet ein Zimmer.","Er kam im Sommer und sprach schon gut Deutsch."],0],
     ["Woran merkt man den Fortschritt?",["Er versteht nacheinander den Mann von der Bahn, die Wirtin und schließlich einen Kranken.","Er bekommt am Ende einen Stempel vom Amt.","Er zieht einen neuen Mantel an."],0],
     ["Warum heißt es „beinahe schön“ und nicht „schön“?",["Weil er noch fremd und allein ist – aber zum ersten Mal ein wenig angekommen.","Weil es regnet und er das Wetter nicht mag.","Weil der Kranke ihn nicht verstanden hat."],0]],
  open:"Was erfährt man über den Mann nicht? Schreiben Sie zwei Fragen, die Sie ihm stellen würden."}];

// ---------------------------------------------------------------- 4. „Das Kabinett der falschen Freunde — ein Film in sechs Akten": 20 intertitles [akt, de, en] (A2–B1 reading)
BERLIN.titel=[
 [1,"Berlin, im November. Ein Nachtzug kommt an. Ein fremder Arzt steigt aus.","Berlin, in November. A night train arrives. A foreign doctor gets off."],
 [1,"Er hat einen Koffer, eine Laterne – und keinen Stempel.","He has a suitcase, a lantern — and no stamp."],
 [1,"„Ohne Stempel kein Zimmer!“, sagt die Wirtin. „Ohne Zimmer kein Stempel!“, sagt das Amt.","'No room without a stamp!' says the landlady. 'No stamp without a room!' says the office."],
 [2,"An jeder Mauer klebt dasselbe Plakat: DU MUSST CALIGARI WERDEN!","On every wall hangs the same poster: YOU MUST BECOME CALIGARI!"],
 [2,"Im Lunapark steht ein schiefes Zelt. Davor ruft ein Mann mit Zylinder: „Treten Sie näher!“","In the Lunapark stands a crooked tent. In front of it a man in a top hat calls: 'Step closer!'"],
 [2,"„Deutsch im Schlaf!“, verspricht Dr. Caligari. „Ohne Grammatik! Ohne Mühe!“","'German in your sleep!' promises Dr Caligari. 'No grammar! No effort!'"],
 [2,"Er öffnet einen Schrank. Darin steht Cesare. Er schläft seit dreiundzwanzig Jahren.","He opens a cabinet. In it stands Cesare. He has been asleep for twenty-three years."],
 [3,"Cesare spricht. Jeder Satz klingt richtig. Kein Satz bedeutet, was er meint.","Cesare speaks. Every sentence sounds right. No sentence means what he intends."],
 [3,"Am nächsten Morgen spricht die halbe Stadt wie er.","The next morning half the city speaks like him."],
 [3,"Der Beamte sagt „eventuell“ und meint „endlich“. Der Antrag bleibt liegen.","The official says 'eventuell' and means 'eventually'. The application is left lying."],
 [4,"Nacht. Die letzte Ringbahn. Jemand pfeift einen Walzer.","Night. The last Ringbahn. Someone is whistling a waltz."],
 [4,"Ein blinder Mann mit Luftballons sagt: „Ich sehe nichts. Aber ich höre, wer schläft.“","A blind man with balloons says: 'I see nothing. But I can hear who is asleep.'"],
 [4,"Cesare geht mit geschlossenen Augen zur falschen Tür. Dahinter liegen die Gleise.","Cesare walks with closed eyes to the wrong door. Behind it lie the tracks."],
 [4,"„Sie müssen nicht aussteigen“, sagt ein Schläfer. Cesare geht weiter.","'You need not get out,' says a sleeper. Cesare walks on."],
 [4,"Da ruft der Arzt: „Halt! Sie dürfen nicht aussteigen!“ – Und Cesare bleibt stehen.","Then the doctor shouts: 'Stop! You must not get out!' — And Cesare stands still."],
 [5,"Im Amt findet der Arzt eine Akte. Darin steht: Die ganze Stadt soll schlafen. Unterschrift: Der Direktor.","In the office the doctor finds a file. It says: the whole city shall sleep. Signed: the Director."],
 [5,"Im Krankenhaus sagt ein Kollege zum Patienten: „Ich bin Ihr Physiker.“ Der Patient läuft weg.","In the hospital a colleague says to the patient: 'I am your physicist.' The patient runs away."],
 [5,"Im Kabarett singt eine Frau über den Direktor. Die Leute lachen. Wer lacht, wacht auf.","In the cabaret a woman sings about the Director. People laugh. Whoever laughs, wakes up."],
 [6,"Der letzte Stempel fehlt. Der Arzt klopft an die Tür des Direktors. Hinter dem Schreibtisch sitzt – Dr. Caligari.","The last stamp is missing. The doctor knocks at the Director's door. Behind the desk sits — Dr Caligari."],
 [6,"„Unterschreiben Sie, und Sie müssen nie mehr lernen.“ – „Nein. Prüfen Sie mich.“ ENDE? Noch nicht.","'Sign, and you will never have to study again.' — 'No. Examine me.' THE END? Not yet."]];
BERLIN.order=[3,7,10,15,19];   // 1-based numbers of the five titles the learner puts back in order after the film

// ===== Mephisto · track S · x_s7_scn.js (owner s7) — Realm V: chapters 33–40 (C1), the finale base, Bett vier on one chart, the Kommission.
// Canon: build/PLAN-S.md §2 (realm V = S8 plot inside S4's one anatomy theatre, 1543 → today). Applied at load by the loader v2/c_s2.js.
// Line shapes as x_story3.js. Every M line carries a du twin (lines spoken to the Revisor repeat the same text). Narration is in the present tense.
// Anchors: cast · task · pay in every scene; the finale carries ["@","zeugin"] … ["@","/zeugin"] around the witness lines (c_s7.js removes the anchors
// and shows the witness only when Bett vier has been read at least three times — s4 may replace that rule, see MANIFEST).
var SCN=SCN||{},CHX=CHX||{},INS=INS||{},BETX=BETX||{},BOSX=BOSX||{},FINX=FINX||{};

// ---------------------------------------------------------------- 33 · Das Anatomische Theater — die Ränge (1543–1595) · Fachsprache ↔ Laiensprache
SCN[33]={scene:[
 ["N","Ein Trichter aus Holz, sechs Ränge steil übereinander, so eng, dass man nur stehen kann. Oben auf dem Katheder liest einer Latein aus einem Buch. Unten schneidet ein Barbier, der kein Latein versteht. Keiner der beiden sieht den anderen an.","A funnel of wood, six tiers steeply one above the other, so narrow that one can only stand. Up in the chair a man reads Latin from a book. Below, a barber who understands no Latin does the cutting. Neither looks at the other."],
 ["M","So hat man dreihundert Jahre lang Medizin gelehrt: Der eine konnte reden, der andere konnte schneiden. Sie werden beides können müssen – mit demselben Mund.","That is how medicine was taught for three hundred years: one could talk, the other could cut. You will have to be able to do both — with the same mouth.","So hat man dreihundert Jahre lang Medizin gelehrt: Der eine konnte reden, der andere konnte schneiden. Du wirst beides können müssen – mit demselben Mund."],
 ["X","Der Barbier","Herr Professor, im Buch steht, die Leber habe fünf Lappen. Ich zähle zwei.","Professor, the book says the liver has five lobes. I count two."],
 ["M","Und wem glaubte man? Dem Buch. Merken Sie sich das für jede Visite: Wer nur die Fachsprache beherrscht, liest vor. Wer auch die Sprache des Patienten beherrscht, sieht hin.","And whom did they believe? The book. Remember that on every ward round: whoever commands only the technical language reads aloud. Whoever also commands the patient's language looks.","Und wem glaubte man? Dem Buch. Merk dir das für jede Visite: Wer nur die Fachsprache beherrscht, liest vor. Wer auch die Sprache des Patienten beherrscht, sieht hin."],
 ["@","cast"],
 ["N","Heute stehst du selbst auf diesen Rängen. Unten auf dem Tisch hat jeder Körperteil zwei Namen: einen für den Patienten, einen für den Oberarzt. Bauch und Abdomen, Herzinfarkt und Myokardinfarkt, Blutvergiftung und Sepsis.","Today you yourself stand on these tiers. Down on the table every part of the body has two names: one for the patient, one for the consultant. Belly and abdomen, heart attack and myocardial infarction, blood poisoning and sepsis."],
 ["@","task"],
 ["N","Auf dem Tisch liegt, säuberlich eröffnet, dein erstes Jahr in dieser Sprache: jeder falsche Artikel freipräpariert, jede verrutschte Endung mit einer Nadel beschriftet.","On the table, neatly opened, lies your first year in this language: every wrong article dissected free, every slipped ending labelled with a pin."],
 ["M","Erheben Sie den Befund. In Fachsprache. Es handelt sich um Ihren eigenen Leichnam – da darf man gründlich sein.","Report the findings. In technical language. The cadaver is your own — one may be thorough.","Erhebe den Befund. In Fachsprache. Es handelt sich um deinen eigenen Leichnam – da darf man gründlich sein."],
 ["S","Du bist ja immer noch da. Dann mach halt weiter. Ich bin mir eigentlich gar nicht mehr so sicher, dass du scheiterst.","Well, you are still here. Then just carry on. Actually I am no longer so sure that you will fail."],
 ["@","pay"],
 ["N","In der obersten Bank sitzt ein Herr in Grau, eine Aktentasche auf den Knien. Er ist nicht zum Zusehen gekommen.","On the top bench sits a gentleman in grey, a briefcase on his knees. He has not come to watch."],
 ["X","Der Revisor","Innenrevision, Abteilung Seelenerwerb. Mir liegt die Meldung vor, eine Personalakte sei aus einer Berliner Kanzlei entfernt worden. Ferner: 4 117 Pakte, kein Ertrag. Ich begleite diesen Vorgang bis zu seinem Abschluss.","Internal audit, Soul Acquisition Department. I have before me the report that a personnel file has been removed from a chancery in Berlin. Furthermore: 4,117 pacts, no yield. I shall accompany this case until its conclusion."],
 ["M","Begleiten Sie. Aber die Laterne fassen Sie nicht an. Noch gehört sie zu mir.","Accompany away. But you do not touch the lantern. For now it still belongs with me.","Begleiten Sie. Aber die Laterne fassen Sie nicht an. Noch gehört sie zu mir."]]};

// ---------------------------------------------------------------- 34 · Die Anamnese — das Krankenbett (1840) · FSP Teil 1 · sober (Frau Brandt is on stage)
SCN[34]={sober:true,scene:[
 ["N","Jemand hat ein Bett in die Arena geschoben. Darin liegt kein Präparat, sondern eine Frau, die atmet, friert und eine Frage hat. Auf den Rängen wird es still, denn es geschieht etwas Unerhörtes: Der Professor spricht Deutsch.","Someone has pushed a bed into the arena. In it lies no specimen but a woman who breathes, feels cold and has a question. The tiers fall silent, for something unheard-of is happening: the professor is speaking German."],
 ["X","Der Kliniker, 1840","Meine Herren, die Kranke versteht kein Latein. Also fragen wir sie in ihrer Sprache – und schreiben erst danach in unserer.","Gentlemen, the patient understands no Latin. So we shall ask her in her language — and only afterwards write in ours."],
 ["M","Zwanzig Minuten. Sie fragen, sie antwortet, und alles, was Sie nicht verstanden haben, fehlt nachher in Ihrem Brief. Die Leiche war geduldiger, das gebe ich zu.","Twenty minutes. You ask, she answers, and everything you did not understand will be missing from your letter afterwards. The corpse was more patient, I admit.","Zwanzig Minuten. Du fragst, sie antwortet, und alles, was du nicht verstanden hast, fehlt nachher in deinem Brief. Die Leiche war geduldiger, das gebe ich zu."],
 ["@","cast"],
 ["N","Der erste Teil der Fachsprachprüfung: zwanzig Minuten mit einer Schauspielpatientin. Leitsymptom, Vorerkrankungen, Medikamente, Allergien, Noxen, Familie, Sozialanamnese – in Laiensprache und mit Empathie.","The first part of the medical language examination: twenty minutes with a simulated patient. Main complaint, previous illnesses, medication, allergies, toxins, family, social history — in lay language and with empathy."],
 ["N","Die Schauspielpatientin stellt sich vor: Margarete Brandt, einundsiebzig Jahre alt. Du kennst das Gesicht. Du hast es viermal gesehen, jedes Mal einen Atemzug lang, in einem Bett mit der Nummer vier.","The simulated patient introduces herself: Margarete Brandt, seventy-one years old. You know the face. You have seen it four times, one breath each time, in a bed with the number four."],
 ["N","Den Namen kennst du auch. Er steht in der Chronik, unter dem Jahr 1772. Du siehst zu Mephisto hinüber.","You know the name too. It is in the chronicle, under the year 1772. You look across at Mephisto."],
 ["M","Den Namen habe ich nicht ausgesucht. Über diesen Namen mache ich keine Witze. Fragen Sie sie, was ihr fehlt – und hören Sie diesmal zu.","I did not choose the name. I make no jokes about that name. Ask her what is wrong — and this time, listen.","Den Namen habe ich nicht ausgesucht. Über diesen Namen mache ich keine Witze. Frag sie, was ihr fehlt – und hör diesmal zu."],
 ["X","Frau Brandt","Ich spiele heute eine Frau mit Luftnot, Herr Doktor. Man hat mir gesagt, ich mache das sehr überzeugend. Bevor Sie fragen: Darf ich Ihnen erst einmal erzählen, wie es angefangen hat?","Today I am playing a woman who is short of breath, Doctor. I have been told I am very convincing. Before you ask: may I first tell you how it started?"],
 ["@","task"],
 ["N","Du lässt sie erzählen. Drei Tage bei der Tochter in Mannheim, die Wassertabletten zu Hause vergessen; erst ging die Treppe nicht mehr, seit gestern Abend geht auch das Liegen nicht mehr. Nach der dritten Frage hält sie inne und holt Luft.","You let her tell it. Three days at her daughter's in Mannheim, the water tablets forgotten at home; first the stairs became impossible, since last night lying down has become impossible too. After the third question she stops and draws breath."],
 ["C","m34"],
 ["X","Frau Brandt","Bekomme ich wieder richtig Luft, Herr Doktor? Oder muss ich daran sterben?","Will I get my breath back properly, Doctor? Or am I going to die of this?"],
 ["X","Du","Versprechen kann ich Ihnen nicht, dass alles wieder so wird wie vorher. Sagen kann ich Ihnen, was wir jetzt tun: Wir entlasten Ihr Herz, Sie bekommen Sauerstoff, und ich bleibe bei Ihnen, bis die Luftnot nachlässt. Über alles Weitere sprechen wir danach in Ruhe – so oft Sie wollen.","I cannot promise you that everything will be as it was before. I can tell you what we are doing now: we take the strain off your heart, you get oxygen, and I stay with you until the breathlessness eases. Everything else we talk about afterwards, calmly — as often as you like."],
 ["@","pay"],
 ["S","Du dürftest es schaffen. Ich muss mich geirrt haben. Der Teufel soll schon nervös sein.","You will probably make it. I must have been wrong. The devil is said to be nervous already."],
 ["X","Frau Brandt","Ich war vierzig Jahre lang Souffleuse am Theater. Ich habe anderen Leuten die Wörter zugeflüstert, wenn sie ihnen fehlten. Bei Ihnen brauche ich das nicht, Herr Doktor. Eigentlich schade.","For forty years I was a prompter at the theatre. I whispered the words to other people when they were missing. With you I do not need to, Doctor. A pity, really."]]};

// ---------------------------------------------------------------- 35 · Der Brief — das Protokoll (1875) · FSP Teil 2 · her testimony goes into the file
SCN[35]={scene:[
 ["N","Im Nebenraum des Theaters steht ein Stehpult. Hier wird nicht geschnitten, hier wird diktiert: Größe, Gewicht, Farbe, Konsistenz, bei jedem Organ in derselben Reihenfolge. Was man gesehen hat, gehört in den Befund. Was man davon hält, steht ganz am Schluss.","In the side room of the theatre stands a lectern. Here nobody cuts, here one dictates: size, weight, colour, consistency, in the same order for every organ. What one has seen belongs in the findings. What one makes of it stands at the very end."],
 ["X","Der Pathologe, 1875","Sie schreiben „vermutlich entzündet“. Haben Sie eine Vermutung gesehen? Beschreiben Sie, was vorliegt. Die Beurteilung bekommt einen eigenen Absatz – und der trägt Ihren Namen.","You write 'presumably inflamed'. Did you see a presumption? Describe what is there. The assessment gets a paragraph of its own — and that one bears your name."],
 ["M","Ein Mann nach meinem Geschmack: Er hat Kollegen wegen eines falschen Adjektivs erledigt. Schreiben Sie Ihren Brief so, dass er ihn unterzeichnet hätte: erst der Befund, dann die Beurteilung, und nirgends ein „ich“.","A man to my taste: he finished colleagues off over a wrong adjective. Write your letter so that he would have signed it: findings first, then assessment, and nowhere an 'I'.","Ein Mann nach meinem Geschmack: Er hat Kollegen wegen eines falschen Adjektivs erledigt. Schreib deinen Brief so, dass er ihn unterzeichnet hätte: erst der Befund, dann die Beurteilung, und nirgends ein „ich“."],
 ["@","cast"],
 ["N","Teil zwei: Du schreibst. Aus deinen Notizen wird ein Anamnesebogen im Nominalstil, dann ein Arztbrief. Kein „ich“, kein „weil“, nur „Z. n.“, „V. a.“, „bei“. Zwanzig Minuten. Am Nebentisch sitzt der Revisor und führt seinerseits Protokoll: über dich, über die Uhr und über den, der hinter dir steht.","Part two: you write. Your notes become a history sheet in nominal style, then a doctor's letter. No 'I', no 'because', only 'status post', 'suspected', 'with'. Twenty minutes. At the next table sits the auditor, keeping a record of his own: of you, of the clock and of the one standing behind you."],
 ["M","Schreiben Sie, als wären Sie tot und nur Ihr Stempel lebte noch.","Write as if you were dead and only your stamp were still alive.","Schreib, als wärst du tot und nur dein Stempel lebte noch."],
 ["@","task"],
 ["D","Arztbrief · Entwurf","Sehr geehrte Frau Kollegin, sehr geehrter Herr Kollege,\nwir berichten über Frau Margarete B., 71 J., die sich mit seit drei Tagen progredienter, seit dem Vorabend auch in Ruhe bestehender Dyspnoe bei bekannter COPD und chronischer Herzinsuffizienz in unserer Notaufnahme vorstellte. Anamnestisch seit drei Tagen keine Einnahme des Diuretikums, keine Nahrungsaufnahme seit dem Vorabend. Klinisch bibasale feuchte Rasselgeräusche, exspiratorisches Giemen sowie beidseitige Unterschenkelödeme. Bei V. a. kardiale Dekompensation bei infektexazerbierter COPD erfolgte die stationäre Aufnahme.\n\nSie hat einen Namen. Schreib ihn aus. – dein Schatten","Dear colleague,\nwe report on Mrs Margarete B., 71, who presented to our emergency department with dyspnoea progressive for three days and present at rest since the previous evening, with known COPD and chronic heart failure. By history no intake of the diuretic for three days, no food since the previous evening. Clinically bibasal moist crackles, expiratory wheeze and bilateral lower-leg oedema. On suspicion of cardiac decompensation with an infective exacerbation of COPD she was admitted.\n\nShe has a name. Write it out. — your shadow"],
 ["N","Du streichst „B.“ und schreibst „Brandt“. Dann stockst du. Im Entwurf steht alles, was sie hat, und nichts von dem, was sie gesagt hat.","You strike out 'B.' and write 'Brandt'. Then you falter. The draft contains everything she has and nothing of what she said."],
 ["X","Der Revisor","Vermerk: Der Kandidat zögert. Der Sachbearbeiter schweigt. Früher hätte er an dieser Stelle beleidigt. Ich stelle eine Abweichung vom üblichen Verfahren fest.","Note: the candidate hesitates. The case officer is silent. Formerly he would have delivered an insult at this point. I record a deviation from the usual procedure."],
 ["M","Halten Sie mich nicht für milde, Herr Revisor. Ich warte lediglich, bis sich eine Beleidigung lohnt. – Doktor: Was fehlt in Ihrem Brief? Nicht medizinisch. Sie wissen, was ich meine.","Do not take me for lenient, Mr Auditor. I am merely waiting until an insult is worth the effort. — Doctor: what is missing from your letter? Not medically. You know what I mean.","Halten Sie mich nicht für milde, Herr Revisor. Ich warte lediglich, bis sich eine Beleidigung lohnt. – Doktor: Was fehlt in deinem Brief? Nicht medizinisch. Du weißt, was ich meine."],
 ["X","Du","Ihre Frage. Sie hat gefragt, ob sie daran sterben muss. In den Befund gehört das nicht – aber in den Brief, sonst fragt der Nächste sie wieder nicht.","Her question. She asked whether she is going to die of it. That does not belong in the findings — but it belongs in the letter, otherwise the next person will again not ask her."],
 ["D","Arztbrief · letzter Absatz","Die Patientin äußerte wiederholt die Sorge, an der Erkrankung zu versterben. Ein ausführliches Gespräch über Erkrankung, Behandlung und Prognose ist erfolgt; die Patientin zeigte sich hierdurch deutlich entlastet. Wir bitten, diese Gespräche im weiteren Verlauf fortzuführen.\nMit freundlichen kollegialen Grüßen\nDr. {LAST}","The patient repeatedly expressed the fear of dying of the illness. A detailed conversation about the illness, its treatment and the prognosis has taken place; the patient appeared clearly relieved by it. We ask that these conversations be continued in the further course.\nWith kind collegial regards\nDr {LAST}"],
 ["S","Ich habe eine Entscheidung getroffen: Ich nehme Abschied von meinen Zweifeln. Sie kommen nicht mehr in Frage. Du hast einem Satz, den niemand hören wollte, einen Platz in einer Akte verschafft. Im Nominalstil. Das soll dir erst einmal einer nachmachen.","I have made a decision: I am taking leave of my doubts. They are no longer an option. You have secured a place in a file for a sentence that nobody wanted to hear. In nominal style. Let someone try to match that."],
 ["@","pay"],
 ["N","Durch die Tür reicht jemand einen Bogen herein: die Rückmeldung der Schauspielpatientin aus Teil eins, mit Kugelschreiber ausgefüllt, in großer, gerader Schrift. Der Revisor heftet ihn ungelesen in seine Akte. „Zeugenaussagen werden am Schluss gewürdigt“, sagt er.","Someone hands a sheet in through the door: the feedback of the simulated patient from part one, filled in with a ballpoint pen in large, upright handwriting. The auditor files it, unread. 'Witness statements are assessed at the end,' he says."],
 ["N","Dann steht er auf, tritt hinter dich und liest deinen Brief. Er liest lange. Zum ersten Mal an diesem Tag macht er keinen Vermerk.","Then he stands up, steps behind you and reads your letter. He reads for a long time. For the first time that day he makes no note."],
 ["X","Der Revisor","Der Brief ist nicht zu beanstanden. Das ist bedauerlich. Jeder einwandfreie Brief dieses Kandidaten wird Ihnen zugerechnet, Kollege M. – Sie wissen, in welcher Spalte.","The letter gives no cause for complaint. That is regrettable. Every flawless letter by this candidate is attributed to you, colleague M. — you know in which column."],
 ["M","In der falschen. Seit 1808. Schreiben Sie es ruhig auf.","In the wrong one. Since 1808. Do write it down.","In der falschen. Seit 1808. Schreiben Sie es ruhig auf."]]};

// ---------------------------------------------------------------- 36 · Die Übergabe — die Tür zum Kreißsaal (1847) · SBAR at 03:07 · the sliding door
SCN[36]={scene:[
 ["N","Zwischen dem Sektionssaal und dem Kreißsaal liegen vierzig Schritte und eine Tür. Um drei Uhr nachts geht ein junger Arzt hindurch, die Ärmel noch aufgekrempelt. An seinen Händen haftet etwas, das er nicht sieht. Vor der Tür steht eine Schüssel mit Chlorkalk, und daneben einer, der nicht zur Seite tritt.","Between the dissecting room and the delivery room lie forty paces and a door. At three in the morning a young doctor walks through, sleeves still rolled up. Something clings to his hands that he cannot see. In front of the door stands a basin of chlorinated lime, and beside it a man who will not step aside."],
 ["X","Der Assistent, 1847","Was Sie von einem Raum in den nächsten tragen, entscheidet über Leben und Tod. Zuerst die Hände. Danach sagen Sie mir in vier Sätzen, was ich über diese Frau wissen muss.","What you carry from one room into the next decides over life and death. First the hands. After that you tell me in four sentences what I need to know about this woman."],
 ["M","Situation, Hintergrund, Einschätzung, Empfehlung. Was Sie bei der Übergabe weglassen, verschwindet nicht. Es geht mit dem Kollegen ans nächste Bett – wie damals das Leichengift.","Situation, background, assessment, recommendation. What you leave out at handover does not vanish. It goes with your colleague to the next bed — like the cadaveric poison back then.","Situation, Hintergrund, Einschätzung, Empfehlung. Was du bei der Übergabe weglässt, verschwindet nicht. Es geht mit dem Kollegen ans nächste Bett – wie damals das Leichengift."],
 ["N","Du wäschst dir die Hände, bis sie nach Chlor riechen. Als du aufsiehst, ist der Gang weiß gekachelt, und über der Tür hängt eine Uhr.","You wash your hands until they smell of chlorine. When you look up, the corridor is tiled white, and a clock hangs above the door."],
 ["@","cast"],
 ["N","Nachtdienst in der Notaufnahme, wie er sein wird. Um drei Uhr rufst du den Oberarzt an: SBAR, knapp, präzise, ohne Entschuldigung. Um sieben übergibst du sechs Patienten. Mephisto begleitet dich bis zur Schiebetür und keinen Schritt weiter.","Night shift in the emergency department, as it will be. At three you call the consultant: SBAR, brief, precise, without apology. At seven you hand over six patients. Mephisto accompanies you as far as the sliding door and not a step further."],
 ["M","Bis hierher und nicht weiter. Dort drinnen gilt eine Hausordnung, die älter ist als meine Verträge. Rufen Sie ihn an. Ich höre von hier aus zu.","This far and no further. In there a set of house rules applies that is older than my contracts. Call him. I shall listen from here.","Bis hierher und nicht weiter. Dort drinnen gilt eine Hausordnung, die älter ist als meine Verträge. Ruf ihn an. Ich höre von hier aus zu."],
 ["@","task"],
 ["X","Du","Guten Morgen, Herr Dr. Albrecht, entschuldigen Sie die – nein. Hier spricht {LAST} aus der Notaufnahme. Es geht um eine einundsiebzigjährige Patientin in Bett vier mit bekannter COPD und Herzinsuffizienz: seit drei Tagen zunehmende Luftnot, das Diuretikum hat sie seitdem nicht eingenommen. Jetzt Atemfrequenz 28, Sättigung 86 Prozent unter zwei Litern Sauerstoff, in der Blutgasanalyse ein pH von 7,31 bei einem pCO₂ von 58, Kalium 5,4. Ich gehe von einer kardialen Dekompensation bei infektexazerbierter COPD mit beginnender hyperkapnischer Ateminsuffizienz aus. Furosemid habe ich intravenös gegeben, die NIV ist vorbereitet. Ich bitte Sie, sich die Patientin jetzt anzusehen – wegen der NIV und einer möglichen Verlegung auf die Überwachungsstation.","Good morning, Dr Albrecht, I am sorry for the — no. This is {LAST} from the emergency department. It concerns a seventy-one-year-old patient in bed four with known COPD and heart failure: shortness of breath increasing for three days, she has not taken her diuretic since then. Now respiratory rate 28, saturation 86 per cent on two litres of oxygen, blood gas pH 7.31 with a pCO₂ of 58, potassium 5.4. I assume cardiac decompensation with an infective exacerbation of COPD and beginning hypercapnic respiratory failure. I have given furosemide intravenously, non-invasive ventilation is prepared. I ask you to see the patient now — because of the NIV and a possible transfer to the monitoring unit."],
 ["X","Oberarzt","… In Ordnung. Ich bin in zehn Minuten da. – Das war übrigens die erste Übergabe heute Nacht, bei der ich nicht nachfragen musste.","… All right. I'll be there in ten minutes. — That, incidentally, was the first handover tonight where I did not have to ask a single question."],
 ["N","Du legst auf. Erst jetzt fällt dir auf, dass du dich nicht entschuldigt hast – und dass du wusstest, wer in Bett vier liegt, bevor du die Akte aufgeschlagen hattest.","You hang up. Only now do you notice that you did not apologise — and that you knew who is lying in bed four before you had opened the file."],
 ["M","Sie haben ihn um drei Uhr geweckt, und er hat Sie gelobt. Mir ist das in dreihundert Jahren nicht gelungen. – Schauen Sie nicht so zufrieden. Das Wort ist gefährlich, wie Sie wissen.","You woke him at three, and he praised you. I have not managed that in three hundred years. — Don't look so satisfied. That word is dangerous, as you know.","Du hast ihn um drei Uhr geweckt, und er hat dich gelobt. Mir ist das in dreihundert Jahren nicht gelungen. – Schau nicht so zufrieden. Das Wort ist gefährlich, wie du weißt."],
 ["C","n36"],["C","g36"],
 ["S","Der seit sechsunddreißig Kapiteln hinter dir hergehende, lange von dir gefürchtete Schatten bittet um das Wort: Danke. Ich an deiner Stelle hätte mich entschuldigt. Du nicht.","The shadow that has walked behind you for thirty-six chapters, long feared by you, asks to speak: thank you. In your place I would have apologised. You did not."],
 ["@","pay"],
 ["N","Auf dem Tisch im Dienstzimmer stehen zwei Tassen. Eine ist leer. Die Uhr über der Tür zeigt 03:07. Sie wird diese Zeit noch einmal zeigen.","On the table in the staff room stand two cups. One is empty. The clock above the door shows 03:07. It will show this time once more."]]};

// ---------------------------------------------------------------- 37 · Walpurgisnacht — die Sammlung (1899) · Wortbildung · the dance for the record
SCN[37]={scene:[
 ["N","Hinter dem Theater liegt die Sammlung: Regale bis unter die Decke, über zwanzigtausend Gläser, jedes mit einem Etikett in spitzer Schrift. In der Nacht zum ersten Mai lösen sich die Etiketten. Die Wörter steigen aus dem Spiritus und suchen sich neue Partner.","Behind the theatre lies the collection: shelves up to the ceiling, more than twenty thousand jars, each with a label in spiky handwriting. On the night before the first of May the labels come loose. The words climb out of the spirit and look for new partners."],
 ["M","Herz, Rhythmus, Störung – schon tanzen drei. Kommt die Behandlung dazu, sind es vier, und die Leitlinie führt. Suchen Sie den Kopf des Wortes: Er steht immer am Ende und bestimmt den Artikel.","Heart, rhythm, disorder — three are dancing already. Add the treatment and there are four, and the guideline leads. Look for the head of the word: it always stands at the end and decides the article.","Herz, Rhythmus, Störung – schon tanzen drei. Kommt die Behandlung dazu, sind es vier, und die Leitlinie führt. Such den Kopf des Wortes: Er steht immer am Ende und bestimmt den Artikel."],
 ["X","Ein Präparat","Ich war einmal eine Gallenblasenentzündung. Jetzt bin ich nur noch ein Kompositum im Glas. Zerlegen Sie mich – aber von hinten, wenn ich bitten darf.","I was once an inflammation of the gall bladder. Now I am merely a compound in a jar. Take me apart — but from the back, if I may ask."],
 ["@","cast"],
 ["N","Zwischen den Regalen führt ein Weg bergauf, bis auf den Brocken. Oben tanzen die Hexen, und die Wörter verwandeln sich mit: Präfixe, Suffixe, Komposita. Aus „Herz“ werden Herzinfarkt, herzlos, beherzt und Herzensangelegenheit. Wortbildung ist Hexerei.","Between the shelves a path leads uphill, all the way to the Brocken. At the top the witches are dancing, and the words change along with them: prefixes, suffixes, compounds. 'Herz' turns into heart attack, heartless, courageous and matter of the heart. Word formation is witchcraft."],
 ["M","Herzrhythmusstörungsbehandlungsleitlinie. Lesen Sie das. Langsam. Ich warte. Ich habe die Ewigkeit.","Heart-rhythm-disorder-treatment-guideline. Read that. Slowly. I'll wait. I have eternity.","Herzrhythmusstörungsbehandlungsleitlinie. Lies das. Langsam. Ich warte. Ich habe die Ewigkeit."],
 ["@","task"],
 ["N","Auf dem Gipfel tanzen sie alle: die Hexe, verkohlt und vergnügt; der Golem, dem kein Wort mehr auf der Stirn steht; der Pudel; Caligari in der Zwangsjacke. Sie grüßen dich wie einen alten Bekannten.","On the summit they are all dancing: the witch, charred and cheerful; the golem, with no word left on his forehead; the poodle; Caligari in a straitjacket. They greet you like an old acquaintance."],
 ["M","Bleiben Sie doch beim Tanz. Dort unten wartet nichts als ein Kerker und eine Prüfung.","Do stay for the dance. Down there nothing awaits but a dungeon and an exam.","Bleib doch beim Tanz. Dort unten wartet nichts als ein Kerker und eine Prüfung."],
 ["N","Er sagt es laut, und er sagt es nicht zu dir. Drei Schritte hinter ihm steht der Revisor und schreibt mit. Du erkennst den Ton: höflich, warm – es fehlt nur noch das Wort „genug“. So hat im Dunkeln der andere geklungen. Er spielt den Versucher für das Protokoll.","He says it loudly, and he does not say it to you. Three steps behind him stands the auditor, writing it down. You recognise the tone: polite, warm — only the word 'enough' is missing. That is how the other one sounded in the dark. He is playing the tempter for the record."],
 ["C","t37"],
 ["@","pay"],
 ["N","Im Nebel über dem Gipfel steht eine riesige Gestalt mit einem Lichtkranz um den Kopf. Du hebst den Arm. Sie hebt ihn auch.","In the fog above the summit stands a giant figure with a ring of light around its head. You raise your arm. It raises its arm too."],
 ["S","Das bin ich. So groß war ich nur, solange du mich nicht angesehen hast.","That is me. I was only that big as long as you did not look at me."]]};

// ---------------------------------------------------------------- 38 · Die Vorstellung — das Kolleg (um 1900) · FSP Teil 3 · reversal: eleven minutes
SCN[38]={scene:[
 ["N","Das Theater ist jetzt ein Hörsaal mit elektrischem Licht und einem Röntgenbild am Leuchtkasten. Zweihundert Studenten, in der ersten Reihe die Oberärzte. Du stehst unten an der Tafel, und vor dir wartet ein Geheimrat mit weißem Bart. Den Geheimrat spielt heute Mephisto; der Bart ist angeklebt.","The theatre is now a lecture hall with electric light and an X-ray on the light box. Two hundred students, the senior physicians in the front row. You stand below at the blackboard, and in front of you a privy councillor with a white beard is waiting. Today the privy councillor is played by Mephisto; the beard is glued on."],
 ["M","Antworten Sie in dieser Reihenfolge: Verdacht, Begründung, Alternative, Procedere. Und wenn Sie etwas nicht wissen, sagen Sie: „Das müsste ich nachschlagen.“ Dieser Satz hat mehr Karrieren gerettet als jedes Lehrbuch.","Answer in this order: suspicion, reasons, alternative, plan. And if there is something you do not know, say: 'I would have to look that up.' That sentence has saved more careers than any textbook.","Antworte in dieser Reihenfolge: Verdacht, Begründung, Alternative, Procedere. Und wenn du etwas nicht weißt, sag: „Das müsste ich nachschlagen.“ Dieser Satz hat mehr Karrieren gerettet als jedes Lehrbuch."],
 ["@","cast"],
 ["N","Teil drei: die Fallvorstellung. Fachsprache, Verdachtsdiagnose, Differenzialdiagnosen, Procedere. Dann die Fragen. Dann noch mehr Fragen. Der Revisor hat sich in die letzte Reihe gesetzt und zählt die Unterbrechungen.","Part three: the case presentation. Technical language, working diagnosis, differential diagnoses, plan. Then the questions. Then more questions. The auditor has sat down in the back row and is counting the interruptions."],
 ["@","task"],
 ["X","Du","Ich stelle Ihnen Frau Brandt vor, eine 71-jährige Patientin mit bekannter COPD und chronischer Herzinsuffizienz, die sich mit seit drei Tagen zunehmender, seit dem Vorabend auch in Ruhe bestehender Luftnot vorstellte. Ihr Diuretikum hatte sie drei Tage lang nicht eingenommen. Klinisch fanden sich beidseits basale Rasselgeräusche, ein exspiratorisches Giemen sowie beidseitige Unterschenkelödeme; die Sauerstoffsättigung lag bei 89 Prozent unter Raumluft. Meine Arbeitsdiagnose lautet kardiale Dekompensation nach Pausieren des Diuretikums bei infektexazerbierter COPD. Differenzialdiagnostisch kommen eine Pneumonie und eine Lungenembolie in Betracht.","I present Mrs Brandt, a 71-year-old patient with known COPD and chronic heart failure, who presented with shortness of breath increasing for three days and present at rest since the previous evening. She had not taken her diuretic for three days. Clinically there were bilateral basal crackles, an expiratory wheeze and bilateral lower-leg oedema; the oxygen saturation was 89 per cent on room air. My working diagnosis is cardiac decompensation after a pause of the diuretic, with an infective exacerbation of COPD. In the differential, pneumonia and pulmonary embolism come into consideration."],
 ["M","Und weshalb, bitte, steht die Lungenembolie nicht an erster Stelle?","And why, pray, is pulmonary embolism not in first place?","Und weshalb, bitte, steht die Lungenembolie nicht an erster Stelle?"],
 ["X","Du","Dagegen sprechen der beidseitige Auskultationsbefund, der erklärbare Auslöser und das Fehlen einer einseitigen Beinschwellung. Ausschließen lässt sie sich dadurch nicht; je nach klinischer Wahrscheinlichkeit würde ich altersadaptiert D-Dimere bestimmen oder direkt eine CT-Angiografie veranlassen.","Against it speak the bilateral auscultation findings, the explainable trigger and the absence of unilateral leg swelling. It cannot be excluded by that; depending on clinical probability I would measure age-adjusted D-dimers or arrange a CT angiography straight away."],
 ["M","Und was veranlassen Sie, noch bevor die Ergebnisse vorliegen?","And what do you set in motion before the results are in?","Und was veranlasst du, noch bevor die Ergebnisse vorliegen?"],
 ["X","Du","Oberkörperhochlagerung, Sauerstoff mit einer Zielsättigung von 88 bis 92 Prozent, Furosemid intravenös, eine Blutgasanalyse, ein EKG, Labor mit Troponin, NT-proBNP, CRP und Elektrolyten, eine Röntgenaufnahme des Thorax und eine Echokardiografie. Bei Hyperkapnie eine NIV. Falls eine Antibiose nötig wird: Die Patientin hat eine Penicillinallergie.","Head of the bed raised, oxygen with a target saturation of 88 to 92 per cent, intravenous furosemide, a blood gas, an ECG, labs with troponin, NT-proBNP, CRP and electrolytes, a chest X-ray and an echocardiogram. If hypercapnic, non-invasive ventilation. If antibiotics become necessary: the patient is allergic to penicillin."],
 ["N","Du redest weiter. Auf halbem Weg merkst du, dass er nicht mehr unterbricht. Er schreibt mit.","You go on talking. Half-way through you notice that he has stopped interrupting. He is taking notes."],
 ["M","Fahren Sie fort. Ich notiere nur, was ich nicht mehr korrigieren muss. Die Liste wird lang. Das ist ärgerlich.","Go on. I am only noting what I no longer need to correct. The list is getting long. It is annoying.","Fahr fort. Ich notiere nur, was ich nicht mehr korrigieren muss. Die Liste wird lang. Das ist ärgerlich."],
 ["N","Als du fertig bist, klopfen die Studenten mit den Knöcheln auf die Pulte. So klingt in diesem Land Beifall. In der letzten Reihe klappt jemand eine Akte auf.","When you finish, the students rap their knuckles on the desks. That is what applause sounds like in this country. In the back row someone opens a file."],
 ["X","Der Revisor","Elf Minuten ohne Unterbrechung. Ich halte fest: Der Sachbearbeiter hat dem Kandidaten nichts mehr hinzuzufügen. Damit entfällt die Geschäftsgrundlage des Pakts. Die Laterne ist nach bestandener Prüfung bei mir abzugeben.","Eleven minutes without interruption. I place on record: the case officer has nothing further to add to the candidate. The basis of the pact thereby ceases to exist. After the examination has been passed, the lantern is to be surrendered to me."],
 ["S","Meiner Meinung nach hast du es verdient. Davon bin ich überzeugt. Abschließend lässt sich sagen: Wir sind bereit. Er dagegen – sieh ihn dir an – ist es nicht.","In my opinion you have earned it. Of that I am convinced. In conclusion it can be said: we are ready. He, on the other hand — look at him — is not."],
 ["@","pay"],
 ["N","Mephisto klappt das Notizbuch zu. Es ist das kleine schwarze aus dem Prager Café. Die Laterne hat er auf das Pult gestellt, zwischen dich und den Revisor, und er lässt die Hand darauf liegen.","Mephisto snaps the notebook shut. It is the small black one from the café in Prague. He has put the lantern on the desk, between you and the auditor, and he keeps his hand on it."],
 ["M","Sie haben gehört, was er gesagt hat. Je besser Sie in der Prüfung sind, desto sicherer holt er sie. Seien Sie trotzdem gut. Das ist keine Bitte. Bitten kann ich nicht; das wissen Sie.","You heard what he said. The better you are in the examination, the more surely he will come for it. Be good all the same. That is not a request. I cannot make requests; you know that.","Du hast gehört, was er gesagt hat. Je besser du in der Prüfung bist, desto sicherer holt er sie. Sei trotzdem gut. Das ist keine Bitte. Bitten kann ich nicht; das weißt du."]]};

// ---------------------------------------------------------------- 39 · Kerker — der Keller (1933–1945) · SOBER throughout: no joke, no effect · then the bag and the offer
SCN[39]={sober:true,scene:[
 ["N","Unter dem Hörsaal führt eine Treppe in den Keller. Hier wurde angeliefert. In den Büchern stehen die Eingänge nach Datum: bis 1933 wenige Zeilen im Monat, danach Seite um Seite, mit dem Vermerk „hingerichtet“ oder nur mit dem Namen einer Anstalt. Die Laterne brennt ruhig. Hier unten lacht niemand.","Beneath the lecture hall a staircase leads to the cellar. This is where deliveries were made. The ledgers list the arrivals by date: until 1933 a few lines a month, after that page upon page, marked 'executed' or with nothing but the name of an asylum. The lantern burns steadily. Down here nobody laughs."],
 ["M","Sie erwarten einen Witz. Hier habe ich keinen. Das war nicht mein Werk, Doktor – mich hat man dafür nicht gebraucht. Es waren Professoren, Gutachter und Stationsärzte, und sie haben alles ordentlich dokumentiert.","You expect a joke. Here I have none. This was not my work, Doctor — I was not needed for it. It was professors, assessors and ward physicians, and they documented everything properly.","Du erwartest einen Witz. Hier habe ich keinen. Das war nicht mein Werk, Doktor – mich hat man dafür nicht gebraucht. Es waren Professoren, Gutachter und Stationsärzte, und sie haben alles ordentlich dokumentiert."],
 ["X","Faust","Ich habe selbst den Gift an Tausende gegeben: / Sie welkten hin, ich muss erleben, / Dass man die frechen Mörder lobt.","I myself gave the poison to thousands: they withered away, and I must live to see the brazen murderers praised. (Faust I, Vor dem Tor)"],
 ["@","cast"],
 ["N","Du nimmst diese Seiten nicht als Schuld mit nach oben. Du nimmst sie als Wissen mit – für jedes Mal, wenn du fragst: „Sind Sie damit einverstanden?“","You do not take these pages upstairs as guilt. You take them as knowledge — for every time you ask: 'Do you agree to this?'"],
 ["N","Der letzte Schritt vor der Prüfung ist der dunkelste: alles wiederholen, was du vergessen hast.","The last step before the examination is the darkest: repeating everything you have forgotten."],
 ["M","Sie wiederholen jetzt alles, was Sie vergessen haben. Ich halte die Laterne.","You will now repeat everything you have forgotten. I hold the lantern.","Du wiederholst jetzt alles, was du vergessen hast. Ich halte die Laterne."],
 ["@","task"],
 ["N","In einem Winkel des Kellers stellt der Schatten eine Tasche vor dich hin.","In a corner of the cellar the shadow sets a bag down in front of you."],
 ["S","Ich habe sie alle aufgehoben, seit dem Wald. Einmal habe ich einen Mann aus ihnen gebaut; du erinnerst dich. Zähl nach. Es sind weniger, als du befürchtet hast – und die meisten davon machst du längst nicht mehr.","I picked them all up, since the forest. Once I built a man out of them; you remember. Count them. There are fewer than you feared — and most of them you stopped making long ago."],
 ["C","k39"],
 ["@","pay"],
 ["X","Der Revisor","Ein Vorschlag zur Güte. Treten Sie morgen nicht an. Dann gilt der Vorgang als offen, die Laterne bleibt, wo sie ist, und Sie behalten Ihren Lehrer. Aus Dankbarkeit zu bleiben ist keine Schande. Es ist nur – genug.","A proposal for an amicable settlement. Do not sit the examination tomorrow. Then the case counts as open, the lantern stays where it is, and you keep your teacher. To stay out of gratitude is no disgrace. It is merely — enough."],
 ["S","Achte auf das letzte Wort. Du weißt seit Berlin, wer es benutzt.","Mind the last word. You have known since Berlin who uses it."],
 ["X","Du","Er hat mir neununddreißig Kapitel lang verboten, zufrieden zu sein. Dann werde ich es auch jetzt nicht – nicht einmal aus Dankbarkeit. Ich trete an.","For thirty-nine chapters he has forbidden me to be satisfied. Then I shall not be so now either — not even out of gratitude. I shall sit the examination."],
 ["M","Ich habe nichts gehört. Gehen Sie schlafen. Sie haben morgen eine Prüfung, und ich habe morgen eine Laterne abzugeben.","I heard nothing. Go to sleep. Tomorrow you have an examination, and tomorrow I have a lantern to hand in.","Ich habe nichts gehört. Geh schlafen. Du hast morgen eine Prüfung, und ich habe morgen eine Laterne abzugeben."]]};

// ---------------------------------------------------------------- 40 · Die Kommission — der Hörsaal heute · he stays at the door
SCN[40]={scene:[
 ["N","Vor der Tür des Prüfungsraums. Drei Stühle hinter einem Tisch, ein vierter davor. Der vierte ist für dich.","Outside the door of the examination room. Three chairs behind a table, a fourth in front of it. The fourth is for you."],
 ["M","Ich darf nicht mit hinein. Hausverbot, seit 1808. Alles, was ich Ihnen beibringen konnte, tragen Sie bei sich. Der Rest ist Ihr Deutsch. Ihres – nicht meines.","I'm not allowed in with you. Banned from the premises since 1808. Everything I could teach you, you carry with you. The rest is your German. Yours — not mine.","Ich darf nicht mit hinein. Hausverbot, seit 1808. Alles, was ich dir beibringen konnte, trägst du bei dir. Der Rest ist dein Deutsch. Deines – nicht meines."],
 ["N","Er stellt die Laterne neben der Tür auf den Boden, so wie man einen Schirm abstellt, den man gleich wieder braucht. Am Ende des Flurs sitzt der Herr in Grau auf einer Bank und sieht auf die Uhr.","He sets the lantern down on the floor beside the door, the way one puts down an umbrella one will need again shortly. At the end of the corridor the gentleman in grey sits on a bench, looking at the clock."],
 ["@","cast"],
 ["N","Durch die offene Tür siehst du den Raum. Es ist derselbe Saal, weiß gestrichen. Auf dem Tisch liegt kein Tuch mehr, sondern ein Aufklärungsbogen. An der Wand hängt gerahmt ein Text von 1948. Im Flur steht eine Tafel mit dem Dank an alle, die ihren Körper der Lehre vermacht haben – freiwillig, mit Unterschrift.","Through the open door you see the room. It is the same hall, painted white. On the table there is no longer a shroud but a consent form. On the wall hangs a framed text from 1948. In the corridor stands a plaque thanking all those who bequeathed their bodies to teaching — voluntarily, with a signature."],
 ["M","Alles in diesem Haus hat irgendwann jemand zum ersten Mal richtig gemacht: hingesehen, gefragt, aufgeschrieben, die Hände gewaschen, widersprochen. Sie sind der Nächste in dieser Reihe. Das ist keine Beleidigung. Etwas Besseres kann ich über niemanden sagen.","Everything in this house was at some point done right by someone for the first time: looking, asking, writing down, washing hands, objecting. You are the next in that line. That is not an insult. I can say nothing better about anyone.","Alles in diesem Haus hat irgendwann jemand zum ersten Mal richtig gemacht: hingesehen, gefragt, aufgeschrieben, die Hände gewaschen, widersprochen. Du bist der Nächste in dieser Reihe. Das ist keine Beleidigung. Etwas Besseres kann ich über niemanden sagen."],
 ["S","Wir treten gemeinsam ein. Du sprichst, und ich schweige. Zum ersten Mal habe ich keine Angst.","We enter together. You speak, and I stay silent. For the first time I am not afraid."],
 ["@","task"],
 ["X","Die Vorsitzende","Guten Morgen, Herr Doktor {LAST}. Wir sind keine Gespenster, sondern drei Kolleginnen und Kollegen mit einem Bewertungsbogen. Zwanzig Minuten Anamnese, zwanzig Minuten Dokumentation, zwanzig Minuten Vorstellung. Beginnen Sie, sobald Sie so weit sind.","Good morning, Doctor {LAST}. We are not ghosts but three colleagues with a marking sheet. Twenty minutes of history, twenty of documentation, twenty of presentation. Begin as soon as you are ready."],
 ["N","Auf dem Bewertungsbogen stehen drei Spalten: Anamnese, Dokumentation, Vorstellung. Keine davon heißt „Laterne“.","The marking sheet has three columns: history, documentation, presentation. None of them is called 'lantern'."],
 ["@","pay"],
 ["N","Die Tür fällt hinter dir ins Schloss. Draußen bleibt einer stehen, der nicht mit hinein darf.","The door falls shut behind you. Outside stands one who is not allowed in."]]};

// ---------------------------------------------------------------- recaps (S8 §7) — „Was bisher geschah" / „Nächstes Mal"
[[33,["Caligari trägt die Zwangsjacke, seine Schläfer sind erwacht, und du hast B2. Die entwendete Personalakte steckt noch in deiner Tasche.","Caligari is in the straitjacket, his sleepers have woken, and you have B2. The purloined personnel file is still in your pocket."],["Die Schauspielpatientin der Prüfung stellt sich vor. Du kennst ihr Gesicht aus einem Bett mit der Nummer vier.","The simulated patient of the examination introduces herself. You know her face from a bed with the number four."]],
 [34,["Die Innenrevision begleitet den Vorgang nunmehr bis zu seinem Abschluss. Auf dem Seziertisch lag unterdessen dein eigenes erstes Jahr.","Internal audit is now accompanying the case to its conclusion. On the dissection table, meanwhile, lay your own first year."],["Aus dem Gespräch muss ein Brief werden. Was die Patientin hat, lässt sich leicht schreiben; was sie gefragt hat, nicht.","The conversation must become a letter. What the patient has is easily written; what she asked is not."]],
 [35,["Frau Brandt, einundsiebzig, vierzig Jahre Souffleuse, hat dir zum ersten Mal kein einziges Wort zuflüstern müssen.","Mrs Brandt, seventy-one, a prompter for forty years, did not have to whisper a single word to you for the first time."],["Drei Uhr nachts. Du rufst den Oberarzt an, und Mephisto bleibt vor der Schiebetür stehen, als gäbe es dort eine Schwelle.","Three in the morning. You call the consultant, and Mephisto stops at the sliding door as if there were a threshold there."]],
 [36,["Dein Brief war nicht zu beanstanden, was dem Revisor zufolge bedauerlich ist: Jeder einwandfreie Satz wird Mephisto zur Last gelegt. Frau Brandts Rückmeldung liegt ungelesen in seiner Akte.","Your letter gave no cause for complaint, which according to the auditor is regrettable: every flawless sentence is held against Mephisto. Mrs Brandt's feedback lies unread in his file."],["Auf dem Brocken tanzen alle, die du besiegt hast. Mephisto lädt dich zum Bleiben ein – auffallend laut.","On the Brocken everyone you have defeated is dancing. Mephisto invites you to stay — conspicuously loudly."]],
 [37,["Der Oberarzt musste nicht nachfragen, du hast dich nicht entschuldigt, und die Uhr im Dienstzimmer zeigte 03:07.","The consultant did not have to ask a single question, you did not apologise, and the clock in the staff room showed 03:07."],["Du stellst Frau Brandts Fall vor. Der Revisor zählt mit, wie oft Mephisto dich noch unterbrechen muss.","You present Mrs Brandt's case. The auditor counts how often Mephisto still has to interrupt you."]],
 [38,["Die Einladung zum Tanz galt dem Protokoll, nicht dir; du hast es an einem fehlenden Wort erkannt. Das Brockengespenst war dein eigener Schatten.","The invitation to the dance was meant for the record, not for you; you recognised it by a missing word. The Brocken spectre was your own shadow."],["Im Keller stellt dein Schatten die Tasche ab, und der Revisor unterbreitet einen Vorschlag, der wie Dankbarkeit aussieht.","In the cellar your shadow sets down the bag, and the auditor submits a proposal that looks like gratitude."]],
 [39,["Elf Minuten ohne Unterbrechung. Damit, so der Revisor, entfalle die Geschäftsgrundlage des Pakts; bestehst du, wird die Laterne eingezogen.","Eleven minutes without interruption. With that, says the auditor, the basis of the pact ceases to exist; if you pass, the lantern is withdrawn."],["Drei Stühle hinter einem Tisch, ein vierter davor. Er darf nicht mit hinein.","Three chairs behind a table, a fourth in front of it. He is not allowed in with you."]],
 [40,["Du hast es abgelehnt, ihm zuliebe durchzufallen. In der Tasche deines Schattens lagen weniger Fehler, als du befürchtet hattest.","You declined to fail for his sake. In your shadow's bag lay fewer mistakes than you had feared."],["Heidelberg. Notaufnahme. 03:07 Uhr. Bett vier.","Heidelberg. Emergency department. 03:07. Bed four."]]
].forEach(r=>{const x=CHX[r[0]]=CHX[r[0]]||{};x.prev=r[1];x.next=r[2]});

// ---------------------------------------------------------------- the finale base (replaces STORY3[40].finale; every existing line kept in order)
FINX.finale=[
 ["N","Es ist das Morgengrauen der Prüfung. Drei Ärztinnen und Ärzte am Tisch. Eine Stunde. Am Ende sagt jemand ein einziges Wort: „Bestanden.“ Die Tür fällt ins Schloss, und im Flur steht er, die Laterne in der Hand. Am Ende des Flurs wartet ein Herr in Grau.","It is the dawn of the exam. Three doctors at the table. One hour. At the end someone says a single word: 'Passed.' The door falls shut, and in the corridor he stands, the lantern in his hand. At the end of the corridor a gentleman in grey is waiting."],
 ["M","Kapitel vierzig. Ich habe keine Beleidigung vorbereitet. Das ist mir seit 1808 nicht passiert.","Chapter forty. I haven't prepared an insult. That hasn't happened to me since 1808.","Kapitel vierzig. Ich habe keine Beleidigung vorbereitet. Das ist mir seit 1808 nicht passiert."],
 ["M","Bestanden. Ich habe an der Tür gelauscht. Sie haben „aufgrund“ mit dem Genitiv gebraucht. Mir wäre beinahe warm ums Herz geworden, wenn ich eines hätte.","Passed. I listened at the door. You used 'aufgrund' with the genitive. It nearly warmed my heart, if I had one.","Bestanden. Ich habe an der Tür gelauscht. Du hast „aufgrund“ mit dem Genitiv gebraucht. Mir wäre beinahe warm ums Herz geworden, wenn ich eines hätte."],
 ["M","Und nun zum Geschäft. Sie sind am Ziel. Sagen Sie den Satz, Doktor: „Verweile doch, du bist so schön.“ Sagen Sie, dass es genug ist. Dann gehört sie mir – so steht es in der älteren Wette.","And now to business. You have arrived. Say the sentence, Doctor: 'Stay, you are so beautiful.' Say that it is enough. Then it is mine — so says the older wager.","Und nun zum Geschäft. Du bist am Ziel. Sag den Satz, Doktor: „Verweile doch, du bist so schön.“ Sag, dass es genug ist. Dann gehört sie mir – so steht es in der älteren Wette."],
 ["C","v40"],
 ["M","„Noch nicht.“ Zwei Wörter – und ich verliere eine Wette, die ich seit dem Schwarzwald zu verlieren hoffe.","'Not yet.' Two words — and I lose a wager I have been hoping to lose since the Black Forest.","„Noch nicht.“ Zwei Wörter – und ich verliere eine Wette, die ich seit dem Schwarzwald zu verlieren hoffe."],
 ["M","Die Uhr steht still. Der Zeiger fällt. So war es ausgemacht – und jetzt fällt er nicht. „Vorbei“: ein dummes Wort. Vierzig Kapitel Aufwand, schmählich vertan. Man hat mir eine Seele weggepascht, und der Dieb sitzt vor mir und hat Frühdienst.","The clock stands still. The hand falls. That was the agreement — and now it does not fall. 'Over': a stupid word. Forty chapters of expense, shamefully wasted. A soul has been smuggled away from me, and the thief is sitting in front of me and has the early shift.","Die Uhr steht still. Der Zeiger fällt. So war es ausgemacht – und jetzt fällt er nicht. „Vorbei“: ein dummes Wort. Vierzig Kapitel Aufwand, schmählich vertan. Man hat mir eine Seele weggepascht, und der Dieb sitzt vor mir und hat Frühdienst."],
 ["@","zeugin"],
 ["N","Der Herr in Grau ist nähergekommen und schlägt seine Akte auf. Mephisto nimmt ihm, ohne zu fragen, einen Bogen heraus: die Rückmeldung der Schauspielpatientin aus Teil eins. Er liest sie vor, langsam, so wie man einen Vertrag liest.","The gentleman in grey has come closer and opens his file. Without asking, Mephisto takes a sheet out of it: the feedback of the simulated patient from part one. He reads it aloud, slowly, the way one reads a contract."],
 ["D","Rückmeldung · Schauspielpatientin · Teil 1","Hat sich der Kandidat vorgestellt? Ja, mit Namen und Funktion. Hat er Sie ausreden lassen? Ja.\n\nIch habe heute eine Frau mit Luftnot gespielt und gefragt, ob ich daran sterben muss. Er hat mir nichts versprochen, was er nicht halten kann. Er hat mir gesagt, was als Nächstes passiert, und er ist geblieben, bis ich wieder Luft hatte – auch wenn das nur gespielt war. Ich war vierzig Jahre Souffleuse. Ich höre, wenn jemand seinen Text aufsagt. Er hat mit mir gesprochen. Von diesem Arzt würde ich mich behandeln lassen. – Margarete Brandt","Did the candidate introduce himself? Yes, with name and role. Did he let you finish speaking? Yes.\n\nToday I played a woman who is short of breath and asked whether I am going to die of it. He promised me nothing he cannot keep. He told me what happens next, and he stayed until I had my breath back — even though that was only acted. I was a prompter for forty years. I can hear when someone is reciting his lines. He was speaking with me. I would let this doctor treat me. — Margarete Brandt"],
 ["M","… Gegen Fleiß habe ich Einspruch eingelegt, seit es Fleiß gibt. Gegen eine Zeugin habe ich kein Rechtsmittel.","… Against diligence I have lodged objections for as long as diligence has existed. Against a witness I have no remedy.","… Gegen Fleiß habe ich Einspruch eingelegt, seit es Fleiß gibt. Gegen eine Zeugin habe ich kein Rechtsmittel."],
 ["@","/zeugin"],
 ["N","Er hält den Pakt über eine Kerze. Zwischen den Zeilen erscheint in brauner Schrift ein sechster Paragraf.","He holds the pact over a candle. Between the lines, in brown writing, a sixth clause appears."],
 ["D","§ 6","Der Unterzeichnete kann jederzeit gehen. Er muss nur fragen.","The undersigned may leave at any time. He only has to ask."],
 ["M","Formular 66-6 lag übrigens die ganze Zeit am Schalter in Prag, im Fach ganz unten. Sie haben es nie ausgefüllt. Sie haben stattdessen gelernt. Das Amt hätte ohnehin sechs Wochen gebraucht.","Form 66-6, by the way, lay at the counter in Prague the whole time, in the bottom tray. You never filled it in. You studied instead. The office would have needed six weeks anyway.","Formular 66-6 lag übrigens die ganze Zeit am Schalter in Prag, im Fach ganz unten. Du hast es nie ausgefüllt. Du hast stattdessen gelernt. Das Amt hätte ohnehin sechs Wochen gebraucht."],
 ["M","Sie haben nie gefragt. Vierzig Kapitel lang. Wissen Sie, wie selten das ist?","You never asked. For forty chapters. Do you know how rare that is?","Du hast nie gefragt. Vierzig Kapitel lang. Weißt du, wie selten das ist?"],
 ["M","Im Wald wollten Sie wissen, warum ich Ihnen helfe. Damals fehlte Ihnen der Wortschatz für die Antwort. Jetzt nicht mehr: Wer immer strebend sich bemüht, den kann ich nicht behalten. Ich habe es oft genug versucht. Man gewöhnt sich ans Verlieren. Am Ende beginnt man, es zu wollen.","In the forest you wanted to know why I help you. Back then you lacked the vocabulary for the answer. Not any more: whoever strives with all his might, him I cannot keep. I have tried often enough. One gets used to losing. In the end one begins to want it.","Im Wald wolltest du wissen, warum ich dir helfe. Damals fehlte dir der Wortschatz für die Antwort. Jetzt nicht mehr: Wer immer strebend sich bemüht, den kann ich nicht behalten. Ich habe es oft genug versucht. Man gewöhnt sich ans Verlieren. Am Ende beginnt man, es zu wollen."],
 ["SIG"],
 ["M","Hier. Ihre Unterschrift. Das Blut ist längst trocken. Und nehmen Sie die Laterne mit. In der Notaufnahme ist es um drei Uhr nachts dunkler als im Schwarzwald. – Erzählen Sie es niemandem.","Here. Your signature. The blood dried long ago. And take the lantern with you. In the emergency department at three in the morning it is darker than in the Black Forest. — Tell no one.","Hier. Deine Unterschrift. Das Blut ist längst trocken. Und nimm die Laterne mit. In der Notaufnahme ist es um drei Uhr nachts dunkler als im Schwarzwald. – Erzähl es niemandem."],
 ["N","Die Laterne ist warm.","The lantern is warm."],
 ["N","Im Glas der Schiebetür siehst du deine Stirn. Sie ist leer.","In the glass of the sliding door you see your forehead. It is empty."],
 ["N","Der Herr in Grau hält ein Formular bereit: „Einziehung einer Laterne“. Er sieht, wer sie jetzt trägt und wohin. Was ein Arzt in den Dienst mitnimmt, fällt unter eine Hausordnung, die älter ist als seine Abteilung. Er streicht die Zeile durch, klappt die Tasche zu und geht.","The gentleman in grey holds a form ready: 'Withdrawal of one lantern'. He sees who is carrying it now, and where to. What a physician takes on duty with him falls under a set of house rules older than his department. He strikes out the line, shuts his briefcase and leaves."],
 ["S","Ich bin leiser geworden. Ich bin nicht fort. Wenn du müde bist, hörst du mich wieder. Dann sag es mir auf Deutsch.","I have grown quieter. I am not gone. When you are tired, you will hear me again. Then say it to me in German."],
 ["N","Heidelberg. Notaufnahme. 03:07 Uhr. Bett vier. „Guten Morgen, Frau Brandt. Ich bin Doktor {LAST}. Wir kennen uns noch nicht.“ Sie sieht dich lange an. „Doch“, sagt sie. „Sie waren schon viermal hier. Sie haben nur jedes Mal mehr gesagt.“ Dann erzählt sie, und du verstehst jedes Wort. Auf dem Tisch im Dienstzimmer steht eine zweite Tasse Kaffee. Sie ist voll. Vor der Schiebetür sitzt ein schwarzer Pudel und tut, als gehöre er zu niemandem.","Heidelberg. Emergency department. 03:07. Bed four. 'Good morning, Mrs Brandt. I am Doctor {LAST}. We have not met.' She looks at you for a long time. 'Yes we have,' she says. 'You have been here four times. You just said more each time.' Then she tells you, and you understand every word. On the table in the staff room stands a second cup of coffee. It is full. Outside the sliding door sits a black poodle, pretending to belong to no one."]];
// For s4 (CHOICES are s4's): the Konjunktiv exit of S2-faust D2 as a third v40 option, shown only when lesson g14 is done. Not read by any code of s7.
FINX.v40_duerft=["„Zum Augenblicke dürft ich sagen: Verweile doch, du bist so schön.“",[
 ["N","Die Glocke hebt an – und schlägt nicht.","The bell draws breath — and does not strike."],
 ["M","Dürfte. … Sie haben nicht gesagt: Verweile. Sie haben gesagt, Sie dürften es sagen. Das ist kein Satz, das ist die Möglichkeit eines Satzes. Konjunktiv II. Damit kann ich vor keinem Gericht der Welt erscheinen.","Might. … You did not say: stay. You said you might say it. That is not a sentence, it is the possibility of a sentence. Subjunctive. I cannot appear before any court in the world with that.","Dürfte. … Du hast nicht gesagt: Verweile. Du hast gesagt, du dürftest es sagen. Das ist kein Satz, das ist die Möglichkeit eines Satzes. Konjunktiv II. Damit kann ich vor keinem Gericht der Welt erscheinen."],
 ["M","So ist mir schon einmal einer entkommen. Hundert Jahre alt, blind, und im letzten Satz der richtige Modus. Den Konjunktiv habe ich Ihnen in Kapitel einundzwanzig eigenhändig beigebracht. Ich Esel.","One got away from me like that before. A hundred years old, blind, and in his last sentence the right mood. I taught you the subjunctive myself, in chapter twenty-one. Ass that I am.","So ist mir schon einmal einer entkommen. Hundert Jahre alt, blind, und im letzten Satz der richtige Modus. Den Konjunktiv habe ich dir in Kapitel einundzwanzig eigenhändig beigebracht. Ich Esel."]],"egg:duerft",{gate:"g14"}];

// ---------------------------------------------------------------- the Kommission (S4 intro, narrative D4 win: he is not in the room)
BOSX.kommission={
 intro:["Drei Ärztinnen und Ärzte am Tisch, Tageslicht, ein Aufklärungsbogen. „Erklären Sie das der Patientin. Dann uns.“","Three physicians at the table, daylight, a consent form. 'Explain it to the patient. Then to us.'"],
 win:["„Bestanden.“ Ein Wort. Sie drehen sich um. Hinter Ihnen steht niemand – zum ersten Mal seit dem Schwarzwald.","'Passed.' One word. You turn round. Nobody is standing behind you — for the first time since the Black Forest."]};

// ---------------------------------------------------------------- Bett vier: four glimpses of one patient (BRANDT.chart), Luftnot throughout, A1 → B2
BETX.hexe=[
 ["N","For one breath the oven door is another door. White light. A corridor. Bed four. An old woman looks at you. Not that one."],
 ["X","Patientin","Guten Tag, Herr Doktor.","Good day, Doctor."],
 ["X","Du","Guten Tag. Ich bin Doktor {LAST}. Ich bin Arzt.","Good day. I am Doctor {LAST}. I am a physician."],
 ["X","Patientin","Ich habe Luftnot. Ich bekomme schlecht Luft.","I am short of breath. I can't get air properly."],
 ["N","That is all you have. She waits for more."],
 ["X","Patientin","Sie sind neu hier, oder? Das macht nichts.","You're new here, aren't you? That doesn't matter."],
 ["N","Then the forest is back."],
 ["M","Neun Wörter. Sie wartet. Ich auch.","Nine words. She is waiting. So am I."]];
BETX.golem=[
 ["N","The clay cracks, and behind it is the corridor again. Bed four."],
 ["X","Du","Was fehlt Ihnen?","What is wrong?"],
 ["X","Frau Brandt","Ich habe Luftnot. Ich bekomme schlecht Luft.","I am short of breath. I can't get air properly."],
 ["X","Du","Seit wann?","Since when?"],
 ["X","Frau Brandt","Seit gestern Abend ist es schlimm. Ich habe nichts gegessen.","Since last night it has been bad. I haven't eaten anything."],
 ["X","Du","Nur auf der Treppe oder auch im Bett?","Only on the stairs, or in bed too?"],
 ["X","Frau Brandt","Erst nur auf der Treppe. Jetzt auch im Bett. Die Tabletten habe ich zu Hause vergessen. Die weißen, die kleinen.","At first only on the stairs. Now in bed too. I left the tablets at home. The white ones, the small ones."],
 ["X","Frau Brandt","Mir ist kalt. Haben Sie eine Decke?","I am cold. Do you have a blanket?"],
 ["N","You understood her. You bring the blanket. She looks at you for a moment longer than she needs to."],
 ["X","Frau Brandt","Sie sprechen aber gut Deutsch.","But you speak German well."],
 ["N","In the glass of the door you see your forehead. The first letter is gone."],
 ["M","Sie lügt. Aber sie hat gelächelt. Das habe ich nicht erlaubt.","She is lying. But she smiled. I did not permit that."]];
BETX.pudel=[
 ["N","Der Pudel schrumpft, und wo er war, steht wieder das Bett. Bett vier.","The poodle shrinks, and where it was the bed stands again. Bed four."],
 ["X","Frau Brandt","Ich bin gekommen, weil ich keine Luft mehr bekommen habe.","I came because I couldn't get any air."],
 ["X","Frau Brandt","Seit gestern ist die Luftnot auch im Liegen da. Ich habe im Sitzen geschlafen, mit drei Kissen.","Since yesterday the breathlessness has been there lying down too. I slept sitting up, with three pillows."],
 ["N","Du hast das „weil“ verstanden und das Verb am Ende. Dann fragte sie etwas anderes.","You understood the 'weil' and the verb at the end. Then she asked something else."],
 ["X","Frau Brandt","Ich möchte niemandem zur Last fallen. Sagen Sie mir einfach, wie es ist.","I don't want to be a burden to anyone. Just tell me how things are."],
 ["X","Frau Brandt","Muss ich sterben, Herr Doktor?","Am I going to die, Doctor?"],
 ["N","Du wusstest die Antwort. Du hattest die Wörter nicht. Man tröstet im Konjunktiv, und den hattest du noch nicht sicher.","You knew the answer. You did not have the words. One comforts in the subjunctive, and you did not have that securely yet."],
 ["M","Dazu fällt mir keine Beleidigung ein.","I can't think of an insult for that.","Dazu fällt mir keine Beleidigung ein."]];
BETX.caligari=[
 ["N","Die schiefen Wände richten sich auf. Ein gerader Flur. Bett vier. Sie stellt die Frage noch einmal, auf die du im Studierzimmer keine Wörter hattest.","The crooked walls straighten. A straight corridor. Bed four. She asks once more the question for which you had no words in the study."],
 ["X","Frau Brandt","Die Luftnot ist heute Nacht schlimmer geworden. Entweder Sie sagen mir die Wahrheit, oder Sie sagen gar nichts. Schonen müssen Sie mich nicht.","The breathlessness has got worse tonight. Either you tell me the truth or you say nothing at all. You needn't spare me."],
 ["X","Frau Brandt","Muss ich sterben, Herr Doktor?","Am I going to die, Doctor?"],
 ["X","Du","Wenn ich Ihnen versprechen könnte, dass alles gut wird, würde ich es tun. Versprechen kann ich Ihnen etwas anderes: Ihr Herz ist schwach, aber heute Nacht können wir ihm helfen. Ich erkläre Ihnen Schritt für Schritt, was als Nächstes geschieht, und ich bleibe, bis Sie es verstanden haben.","If I could promise you that everything will be all right, I would. I can promise you something else: your heart is weak, but tonight we can help it. I will explain to you step by step what happens next, and I will stay until you have understood it."],
 ["X","Frau Brandt","Danke. Das hat mir bisher keiner so gesagt.","Thank you. Nobody has put it to me like that so far."],
 ["X","Frau Brandt","Solange Sie mir erklären, was geschieht, habe ich keine Angst. Fast keine.","As long as you explain to me what is happening, I am not afraid. Hardly."],
 ["N","Mephisto schweigt. Die Laterne brennt heller.","Mephisto is silent. The lantern burns brighter."]];

// ===== Mephisto · track S · x_s7_brandt.js (owner s7) — Frau Margarete Brandt: ONE patient, one chart (PLAN-S §2.4).
// chart: the single source for every Bett-vier scene, chapters 34–38 and the finale; track I builds the playable encounters on it.
//        Clinical details beyond the canon (values, drugs, doses) are s7's and listed under "facts to check" in the MANIFEST.
// lines: 40 × [German, English, CEFR, use, paraphrase?]. She says Sie and „Herr Doktor"; plain lay German at her level; never Latin.
//        use ∈ greeting complaint request repair kindness thanks fear history medication worry consent.
//        paraphrase (5th field, B1 and above): a German rewording used by „Bett vier hört zu" as the correct option; A1–A2 use the English.
// Dignity (S10 P8): her lines are used only in her scenes, the listening round and her own Mappe document; never as flavour text.
var BRANDT=BRANDT||{};
BRANDT.chart={
 name:"Margarete Brandt",age:71,city:"Heidelberg",
 social:"verwitwet, lebt allein (2. Stock ohne Aufzug); Tochter in Mannheim; der Hund ist während des Aufenthalts bei der Nachbarin",
 job:"vierzig Jahre Souffleuse am Theater, in Rente; ehrenamtlich Schauspielpatientin",
 cc:"Luftnot",
 hpi:"seit drei Tagen zunehmende Belastungsdyspnoe (zuerst beim Treppensteigen), seit dem Vorabend auch Ruhedyspnoe und Orthopnoe (schläft mit drei Kissen, zuletzt im Sitzen); Husten mit gelblichem Auswurf; beidseitige Beinschwellung seit etwa einer Woche; drei Tage bei der Tochter in Mannheim, Diuretikum dort nicht eingenommen (zu Hause vergessen); keine Nahrungsaufnahme seit dem Vorabend",
 pmh:"COPD; chronische Herzinsuffizienz mit reduzierter Ejektionsfraktion; arterielle Hypertonie; Z. n. Cholezystektomie 1998",
 meds:"Metoprololsuccinat 47,5 mg 1-0-0 · Ramipril 5 mg 1-0-1 · Torasemid 10 mg 1-0-0 (seit drei Tagen nicht eingenommen) · Tiotropium inhalativ 1× täglich · Salbutamol-Dosieraerosol bei Bedarf",
 allergies:"Penicillin (Hautausschlag)",
 nox:"Ex-Raucherin, ca. 40 Packungsjahre, seit fünf Jahren abstinent; Alkohol selten",
 fam:"Vater: Herzinfarkt mit 62",
 vitals:"Aufnahme: RR 150/90 mmHg · HF 104/min · AF 24/min · SpO₂ 89 % bei Raumluft · Temp. 37,8 °C",
 exam:"bibasale feuchte Rasselgeräusche, exspiratorisches Giemen, beidseitige Unterschenkelödeme, gestaute Halsvenen",
 night:"03:07: AF 28/min · SpO₂ 86 % unter 2 l O₂/min · BGA pH 7,31, pCO₂ 58 mmHg · K⁺ 5,4 mmol/l · Furosemid i. v. gegeben, NIV vorbereitet",
 dx:"kardiale Dekompensation nach Pausieren des Diuretikums bei infektexazerbierter COPD, beginnende hyperkapnische Ateminsuffizienz",
 ddx:"Pneumonie · Lungenembolie (dagegen: beidseitiger Befund, erklärbarer Auslöser, keine einseitige Beinschwellung; nicht ausgeschlossen)",
 plan:"Oberkörperhochlagerung · O₂ mit Ziel-SpO₂ 88–92 % · Furosemid i. v. · BGA, EKG, Troponin, NT-proBNP, CRP, Elektrolyte · Röntgen-Thorax · Echokardiografie · NIV bei Hyperkapnie · Penicillinallergie bei Antibiose beachten",
 scenes:{hexe:"A1 · Begrüßung · Luftnot",golem:"A2 · seit wann, Belastung/Ruhe, Tabletten vergessen",pudel:"B1 · Orthopnoe · „Muss ich sterben?“",caligari:"B2 · die ehrliche Antwort",
  ch34:"FSP Teil 1 (sie spielt „eine Frau mit Luftnot“)",ch35:"FSP Teil 2 · Arztbrief · ihre Rückmeldung",ch36:"03:07 · Telefonat mit dem Oberarzt",ch38:"FSP Teil 3 · Fallvorstellung",finale:"03:07 · Bett vier · „Sie haben nur jedes Mal mehr gesagt.“"}};
BRANDT.lines=[
 // A1 — present tense, main clauses only
 ["Guten Tag, Herr Doktor. Ich bin Frau Brandt.","Good day, Doctor. I am Mrs Brandt.","A1","greeting"],
 ["Ich habe Luftnot. Ich bekomme schlecht Luft.","I am short of breath. I can't get air properly.","A1","complaint"],
 ["Mir ist kalt. Haben Sie eine Decke?","I am cold. Do you have a blanket?","A1","request"],
 ["Wie bitte? Langsam, bitte. Ich höre nicht gut.","Pardon? Slowly, please. I don't hear well.","A1","repair"],
 ["Sie sind neu hier, oder? Das macht nichts.","You're new here, aren't you? That doesn't matter.","A1","kindness"],
 ["Ich wohne allein. Meine Tochter wohnt in Mannheim.","I live alone. My daughter lives in Mannheim.","A1","history"],
 ["Danke. Sie sind sehr freundlich.","Thank you. You are very kind.","A1","thanks"],
 ["Ist das schlimm, Herr Doktor?","Is it serious, Doctor?","A1","fear"],
 // A2 — Perfekt, modal verbs, dass/weil allowed
 ["Ich war drei Tage bei meiner Tochter in Mannheim.","I was at my daughter's in Mannheim for three days.","A2","history"],
 ["Ich habe heute noch nichts gegessen. Nur einen Zwieback.","I haven't eaten anything yet today. Only a rusk.","A2","history"],
 ["Die Tabletten habe ich zu Hause vergessen. Die weißen, die kleinen.","I left the tablets at home. The white ones, the small ones.","A2","medication"],
 ["Können Sie das bitte noch einmal sagen? Aber ohne Latein.","Could you say that once more, please? But without the Latin.","A2","repair"],
 ["Erst nur auf der Treppe. Jetzt auch im Bett.","At first only on the stairs. Now in bed too.","A2","history"],
 ["Der andere Doktor hat so schnell gesprochen. Sie sprechen schön langsam.","The other doctor spoke so fast. You speak nice and slowly.","A2","kindness"],
 ["Mein Hund ist bei der Nachbarin. Wann darf ich wieder nach Hause?","My dog is at the neighbour's. When may I go home again?","A2","worry"],
 ["Sie haben mich verstanden. Das habe ich gemerkt.","You understood me. I noticed.","A2","thanks"],
 // B1 — subordinate clauses, passive, Präteritum
 ["Ich habe im Sitzen geschlafen, weil ich im Liegen keine Luft bekomme.","I slept sitting up because I can't get air lying down.","B1","complaint","Im Liegen fehlt ihr die Luft, deshalb hat sie sitzend geschlafen."],
 ["Ich weiß nicht, ob das wichtig ist, aber meine Beine sind seit einer Woche dicker. Beide.","I don't know whether it matters, but my legs have been more swollen for a week. Both of them.","B1","history","Seit einer Woche sind ihre beiden Beine geschwollen."],
 ["Wenn ich die Treppe steige, bekomme ich keine Luft mehr.","When I climb the stairs I can't get my breath.","B1","complaint","Beim Treppensteigen wird sie sofort kurzatmig."],
 ["Könnten Sie mir erklären, was mit mir gemacht wird?","Could you explain to me what is being done to me?","B1","request","Sie möchte wissen, welche Behandlung sie bekommt."],
 ["Die Schwester hat gesagt, dass ich nüchtern bleiben soll. Was heißt das für meinen Kaffee?","The nurse said I'm to stay nil by mouth. What does that mean for my coffee?","B1","repair","Sie hat nicht verstanden, ob sie trotz „nüchtern“ Kaffee trinken darf."],
 ["Ich möchte niemandem zur Last fallen. Sagen Sie mir einfach, wie es ist.","I don't want to be a burden to anyone. Just tell me how things are.","B1","fear","Sie will keine Umstände machen und bittet um eine ehrliche Auskunft."],
 ["Sie hören zu. Das ist seltener, als Sie denken.","You listen. That is rarer than you think.","B1","thanks","Sie lobt, dass er ihr zuhört; das erlebt sie nicht oft."],
 ["Muss ich hierbleiben, oder darf ich heute Abend wieder gehen?","Do I have to stay, or may I leave again this evening?","B1","worry","Sie fragt, ob sie stationär aufgenommen wird."],
 // B2 — connectors, relative clauses, idiom
 ["Ehrlich gesagt habe ich es hinausgezögert. Man will ja nicht wegen jeder Kleinigkeit kommen.","To be honest I put it off. One doesn't want to come in for every little thing.","B2","history","Sie ist absichtlich spät gekommen, weil sie niemanden belästigen wollte."],
 ["Je länger ich hier liege, desto mehr Fragen fallen mir ein. Haben Sie einen Moment?","The longer I lie here, the more questions occur to me. Do you have a moment?","B2","request","Ihr fallen immer mehr Fragen ein, und sie bittet um etwas Zeit."],
 ["Entweder Sie sagen mir die Wahrheit, oder Sie sagen gar nichts. Schonen müssen Sie mich nicht.","Either you tell me the truth or you say nothing at all. You needn't spare me.","B2","fear","Sie will die ganze Wahrheit hören, ohne Rücksichtnahme."],
 ["Mein Hausarzt hat mir etwas verschrieben, dessen Namen ich mir nie merken kann. Es fängt mit „Meto“ an.","My GP prescribed me something whose name I can never remember. It begins with 'Meto'.","B2","medication","Sie kennt den Namen eines Medikaments nicht, nur den Anfang."],
 ["Das Wort habe ich nicht verstanden. Sagen Sie es so, wie Sie es am Gartenzaun sagen würden.","I didn't understand that word. Say it the way you would say it over the garden fence.","B2","repair","Sie bittet darum, es in einfacher Alltagssprache zu sagen."],
 ["Ich bin nicht wehleidig, Herr Doktor. Wenn ich sage, es ist schlimm, dann ist es schlimm.","I am not one to make a fuss, Doctor. If I say it is bad, then it is bad.","B2","complaint","Sie übertreibt nicht; wenn sie klagt, ist es ernst."],
 ["Sie erklären es so, dass man es behält. Das können nicht viele.","You explain it in a way one remembers. Not many can.","B2","thanks","Seine Erklärungen kann sie sich merken, und das schätzt sie."],
 ["Solange Sie mir erklären, was geschieht, habe ich keine Angst. Fast keine.","As long as you explain to me what is happening, I am not afraid. Hardly.","B2","kindness","Die Erklärungen nehmen ihr fast die ganze Angst."],
 // C1 — nominal style, Konjunktiv, register
 ["Sollte sich der Befund bestätigen, wüsste ich gern, was das für meinen Alltag bedeutet – nicht für die Statistik.","Should the finding be confirmed, I'd like to know what it means for my daily life — not for the statistics.","C1","request","Falls die Diagnose stimmt, interessieren sie die Folgen für ihr tägliches Leben, nicht die Zahlen."],
 ["Man hat mir schon vieles mitgeteilt, Herr Doktor. Erklärt hat man mir wenig.","I have been informed of a great deal, Doctor. Little has been explained to me.","C1","history","Sie hat viele Informationen bekommen, aber kaum Erklärungen."],
 ["Ich unterschreibe nichts, was ich nicht verstanden habe. Das hat mich das Leben gelehrt.","I sign nothing I haven't understood. Life has taught me that.","C1","consent","Ohne Verständnis gibt sie keine Unterschrift."],
 ["Unter uns: Vor dem Eingriff habe ich weniger Angst als vor dem Aufklärungsbogen.","Between ourselves: the procedure frightens me less than the consent form.","C1","consent","Das Formular macht ihr mehr Sorgen als die Behandlung selbst."],
 ["Sie brauchen nicht um den heißen Brei herumzureden. Ich bin einundsiebzig, nicht aus Zucker.","You needn't beat about the bush. I am seventy-one, not made of sugar.","C1","fear","Er soll direkt sprechen; sie ist alt, aber nicht empfindlich."],
 ["Was würden Sie an meiner Stelle tun? Und sagen Sie jetzt nicht: „Das müssen Sie entscheiden.“","What would you do in my place? And don't say: 'That is for you to decide.'","C1","consent","Sie möchte seine persönliche Empfehlung, keine ausweichende Antwort."],
 ["Wenn ich „ein bisschen Druck auf der Brust“ sage, meine ich: Nehmen Sie mich ernst, ohne dass ich es dramatisch machen muss.","When I say 'a bit of pressure on the chest', I mean: take me seriously without my having to make a drama of it.","C1","complaint","Sie untertreibt bewusst und erwartet trotzdem, ernst genommen zu werden."],
 ["Wissen Sie, was das Schönste ist? Dass Sie nachfragen, statt zu nicken.","Do you know what the nicest thing is? That you ask rather than nod.","C1","thanks","Ihr gefällt, dass er Rückfragen stellt, statt nur zuzustimmen."]];
// „Bett vier hört zu" (S5 P6): one round = one line of each of these uses, at the learner's level.
BRANDT.round=["complaint","history","repair","fear","thanks"];
BRANDT.alt={worry:"fear",kindness:"thanks",request:"repair",medication:"history",consent:"fear",greeting:"thanks"};   // fallback use when a level has no line of the wanted use

// ===== Mephisto · track S · x_s7_mappe.js (owner s7) — „Die Mappe" (narrative.md M5): found documents, graded reading with two questions each.
// Doc: {id, set, title, lv (A1…C1, reading gate), ch? (chapter that must be sealed or reached), page? (notebook page number), de, en, gl:[[de,en]…], q:[[frage,question,[3 options],correct]…], note?:[de,en] (handwritten margin)}
// Sets: nb Mephistos Notizbuch (12; page k opens after k completed 10-day runs) · amt Briefe vom Amt (s2's AMT_DOCS, read at runtime, + 3 Heidelberg letters here)
//       pk Postkarten aus dem Goldenen Gässchen (4; written by „der dünne Mann" of realm II, who stays unnamed — invented texts, not quotations)
//       br Frau Brandts Rückmeldung (1; opens with chapter 35; the same text Mephisto reads in the finale)
// Official letters are marked „Muster": invented examples of the genre, not real letters of the named kind of office.
var MAPPE=MAPPE||[];
MAPPE.push(
// ---------------------------------------------------------------- Mephistos Notizbuch
{id:"nb1",set:"nb",page:1,lv:"A2",title:"Notizbuch · Seite 1",de:"Zehn Tage ohne Pause. Heute hat er „die Tisch“ gesagt und es selbst gemerkt. Ich habe nichts gesagt. Ich habe es aufgeschrieben. Das ist schlimmer.",en:"Ten days without a break. Today he said 'die Tisch' and noticed it himself. I said nothing. I wrote it down. That is worse.",
 gl:[["merken","to notice"],["aufschreiben","to write down"]],
 q:[["Was hat er selbst gemerkt?","What did he notice himself?",["einen Fehler beim Artikel","einen Fehler bei der Uhrzeit","einen Fehler beim Verb"],0],["Was macht Mephisto?","What does Mephisto do?",["Er schreibt es auf.","Er lacht laut.","Er geht nach Hause."],0]]},
{id:"nb2",set:"nb",page:2,lv:"A2",title:"Notizbuch · Seite 2",de:"Er lernt nach dem Dienst. Heute war er müde, und er hat trotzdem zehn Karten gemacht. Ich habe ihm nicht gratuliert. Müdigkeit ist kein Fehler. Sie ist nur keine Ausrede.",en:"He studies after his shift. Today he was tired, and he did ten cards all the same. I did not congratulate him. Tiredness is not a mistake. It is just not an excuse.",
 gl:[["der Dienst","the shift"],["trotzdem","all the same"],["die Ausrede","the excuse"]],
 q:[["Wann lernt er?","When does he study?",["nach dem Dienst","vor dem Frühstück","nur am Wochenende"],0],["Was sagt Mephisto über die Müdigkeit?","What does Mephisto say about tiredness?",["Sie ist kein Fehler, aber keine Ausrede.","Sie ist ein schwerer Fehler.","Sie ist eine gute Ausrede."],0]]},
{id:"nb3",set:"nb",page:3,lv:"B1",title:"Notizbuch · Seite 3",de:"Er hat „wegen dem Regen“ gesagt und sich sofort verbessert: „wegen des Regens“. Ich habe so getan, als hätte ich es nicht gehört. Ich habe es gehört. Seit er sich selbst korrigiert, brauche ich ihn nur noch anzusehen.",en:"He said 'wegen dem Regen' and corrected himself at once: 'wegen des Regens'. I pretended I had not heard it. I heard it. Since he corrects himself, I only need to look at him.",
 gl:[["sich verbessern","to correct oneself"],["so tun, als ob","to pretend"]],
 q:[["Wie hat er sich verbessert?","How did he correct himself?",["wegen des Regens","wegen der Regen","wegen den Regen"],0],["Was hat Mephisto getan?","What did Mephisto do?",["Er hat so getan, als hätte er nichts gehört.","Er hat ihn laut korrigiert.","Er hat das Buch zugeklappt."],0]]},
{id:"nb4",set:"nb",page:4,lv:"B1",title:"Notizbuch · Seite 4",de:"Beim Bäcker hat er heute nicht gezeigt, sondern bestellt: „Zwei Brötchen und ein Roggenbrot, bitte.“ Die Verkäuferin ist nicht ins Englische gewechselt. Er hat es nicht bemerkt. Ich schon.",en:"At the baker's today he did not point, he ordered: 'Two rolls and a rye bread, please.' The shop assistant did not switch to English. He did not notice. I did.",
 gl:[["bestellen","to order"],["wechseln","to switch"],["bemerken","to notice"]],
 q:[["Was hat die Verkäuferin nicht getan?","What did the shop assistant not do?",["Sie ist nicht ins Englische gewechselt.","Sie hat kein Brot verkauft.","Sie hat nicht gelächelt."],0],["Was hat er bestellt?","What did he order?",["zwei Brötchen und ein Roggenbrot","drei Brezeln","einen Kuchen"],0]]},
{id:"nb5",set:"nb",page:5,lv:"B1",title:"Notizbuch · Seite 5",de:"Er hat einen Brief vom Amt verstanden, ohne ihn zweimal zu lesen. Wenn das so weitergeht, muss ich mir neue Formulare ausdenken. Die alten haben ihm nicht geschadet, sondern genützt.",en:"He understood a letter from the authorities without reading it twice. If this goes on, I shall have to think up new forms. The old ones did him no harm; they did him good.",
 gl:[["sich etwas ausdenken","to think something up"],["schaden","to harm"],["nützen","to be of use"]],
 q:[["Wie oft musste er den Brief lesen?","How many times did he have to read the letter?",["einmal","zweimal","dreimal"],0],["Was muss Mephisto jetzt tun?","What must Mephisto do now?",["sich neue Formulare ausdenken","das Amt schließen","den Brief verstecken"],0]]},
{id:"nb6",set:"nb",page:6,lv:"B2",title:"Notizbuch · Seite 6",de:"Heute hat er am Telefon eine Patientin verstanden, die Dialekt sprach. Nicht jedes Wort, aber den Satz, auf den es ankam: „Es ist schlimmer als gestern.“ Darauf kommt es in der Notaufnahme an – nicht auf die Endungen.",en:"Today on the phone he understood a patient who spoke dialect. Not every word, but the sentence that mattered: 'It is worse than yesterday.' That is what matters in the emergency department — not the endings.",
 gl:[["es kommt auf etwas an","something is what matters"],["der Dialekt","the dialect"]],
 q:[["Was hat er verstanden?","What did he understand?",["den entscheidenden Satz","jedes einzelne Wort","gar nichts"],0],["Worauf kommt es laut Mephisto in der Notaufnahme an?","According to Mephisto, what matters in the emergency department?",["auf die wichtige Information","auf perfekte Endungen","auf den Dialekt"],0]]},
{id:"nb7",set:"nb",page:7,lv:"B2",title:"Notizbuch · Seite 7",de:"Ich habe versucht, ihn mit einer Ausrede zu verführen: „Heute nicht, morgen ist auch noch ein Tag.“ Er hat geantwortet: „Morgen habe ich Dienst. Deshalb heute.“ Dass ihm ausgerechnet ein Konnektor gegen mich hilft, hatte ich nicht vorhergesehen.",en:"I tried to tempt him with an excuse: 'Not today, tomorrow is another day.' He answered: 'Tomorrow I am on duty. That is why today.' That of all things a connector would help him against me, I had not foreseen.",
 gl:[["verführen","to tempt"],["ausgerechnet","of all things"],["vorhersehen","to foresee"]],
 q:[["Warum lernt er heute?","Why does he study today?",["Weil er morgen Dienst hat.","Weil er Urlaub hat.","Weil Mephisto es befiehlt."],0],["Welches Wort nennt Mephisto einen Konnektor?","Which word does Mephisto call a connector?",["deshalb","heute","morgen"],0]]},
{id:"nb8",set:"nb",page:8,lv:"B2",title:"Notizbuch · Seite 8",de:"Er hat seine erste Übergabe auf Deutsch gemacht, ohne ein einziges „äh“. Der Kollege hat nur eine Rückfrage gestellt, und zwar eine sinnvolle. Ich verbuche das unter „Verluste“.",en:"He did his first handover in German without a single 'er'. The colleague asked only one follow-up question, and a sensible one. I am booking that under 'losses'.",
 gl:[["die Übergabe","the handover"],["die Rückfrage","the follow-up question"],["verbuchen","to book, to enter"]],
 q:[["Wie viele Rückfragen hat der Kollege gestellt?","How many follow-up questions did the colleague ask?",["eine","keine","sehr viele"],0],["Unter welcher Rubrik verbucht Mephisto das?","Under which heading does Mephisto book it?",["Verluste","Gewinne","Ausreden"],0]]},
{id:"nb9",set:"nb",page:9,lv:"C1",title:"Notizbuch · Seite 9",de:"Den Nominalstil beherrscht er inzwischen so gut, dass er auf ihn verzichten kann. Zu der Patientin hat er heute nicht „Eine Mobilisation ist erfolgt“ gesagt, sondern: „Wir helfen Ihnen jetzt beim Aufstehen.“ Wer zwischen den Registern wählen kann, ist mir entwachsen.",en:"He now commands nominal style so well that he can do without it. Today he did not say to the patient 'Mobilisation has taken place' but: 'We are going to help you get up now.' Whoever can choose between registers has outgrown me.",
 gl:[["auf etwas verzichten","to do without something"],["das Register","the register (of language)"],["jemandem entwachsen","to outgrow someone"]],
 q:[["Was sagt er zu der Patientin?","What does he say to the patient?",["einen Satz in Alltagssprache","einen Satz im Nominalstil","gar nichts"],0],["Was bedeutet „mir entwachsen“ hier?","What does 'outgrown me' mean here?",["Er braucht mich nicht mehr.","Er ist größer geworden.","Er hat mich vergessen."],0]]},
{id:"nb10",set:"nb",page:10,lv:"C1",title:"Notizbuch · Seite 10",de:"Hundert Tage. Ich habe nachgezählt, und zwar zweimal. Die Zahl seiner Fehler ist kaum gesunken, doch ihre Art hat sich verändert: Früher verwechselte er Artikel, heute verwechselt er Nuancen. Das ist der Fehler eines Fortgeschrittenen. Ich verabscheue Fortschritt.",en:"A hundred days. I counted, twice. The number of his mistakes has hardly fallen, but their kind has changed: he used to confuse articles, now he confuses nuances. That is the mistake of an advanced learner. I loathe progress.",
 gl:[["verwechseln","to confuse"],["die Nuance","the nuance"],["verabscheuen","to loathe"]],
 q:[["Was hat sich verändert?","What has changed?",["die Art seiner Fehler","die Zahl der Tage","sein Wohnort"],0],["Welcher Fehler ist typisch für Fortgeschrittene?","Which mistake is typical of advanced learners?",["Nuancen verwechseln","Artikel verwechseln","gar nicht sprechen"],0]]},
{id:"nb11",set:"nb",page:11,lv:"C1",ch:33,title:"Notizbuch · Seite 11",de:"Der Revisor will wissen, warum ich ihn nicht einfach habe durchfallen lassen. Ich habe ihm geantwortet, das sei mir zu billig gewesen. Was ich ihm nicht gesagt habe: Ich hätte es nicht gekonnt. Man unterschätzt, wie viel Arbeit es macht, jemanden nicht aufzuhalten.",en:"The auditor wants to know why I did not simply let him fail. I told him that would have been too cheap for me. What I did not tell him: I could not have done it. People underestimate how much work it takes not to hold someone back.",
 gl:[["durchfallen lassen","to let someone fail"],["unterschätzen","to underestimate"],["aufhalten","to hold back, to stop"]],
 q:[["Was hat Mephisto dem Revisor geantwortet?","What did Mephisto answer the auditor?",["Das sei ihm zu billig gewesen.","Er habe es vergessen.","Er sei krank gewesen."],0],["Was hat er dem Revisor verschwiegen?","What did he keep from the auditor?",["dass er es nicht gekonnt hätte","dass er müde ist","dass er umzieht"],0]]},
{id:"nb12",set:"nb",page:12,lv:"C1",ch:38,title:"Notizbuch · Seite 12",de:"Letzter Eintrag in diesem Buch. Sollte er eines Tages um drei Uhr nachts an einem Bett stehen und nach einem Wort suchen, so möge ihm eines einfallen. Ich werde nicht daneben stehen. Das ist der Sinn der Sache.",en:"Last entry in this book. Should he one day stand at a bed at three in the morning, searching for a word, may one come to him. I shall not be standing beside him. That is the point.",
 gl:[["der Eintrag","the entry"],["möge","may (wish, Konjunktiv I)"],["der Sinn der Sache","the point of it all"]],
 q:[["Wo wird Mephisto dann stehen?","Where will Mephisto be standing then?",["nicht neben ihm","direkt am Bett","im Café"],0],["Was ist „der Sinn der Sache“?","What is 'the point'?",["dass er allein zurechtkommt","dass Mephisto ihm hilft","dass er schläft"],0]]},
// ---------------------------------------------------------------- Briefe vom Amt — Heidelberg (Muster)
{id:"hd1",set:"amt",lv:"B1",ch:17,title:"Bürgeramt Heidelberg · Terminbestätigung (Muster)",de:"Sehr geehrter Herr Dr. {LAST},\nIhr Termin zur Anmeldung Ihres Wohnsitzes findet am Dienstag, 12.01.2027, um 08:40 Uhr statt. Bitte bringen Sie Ihren Reisepass und die Wohnungsgeberbestätigung Ihres Vermieters mit. Die Anmeldung muss innerhalb von zwei Wochen nach dem Einzug erfolgen. Nach der Anmeldung erhalten Sie eine Meldebescheinigung. Bewahren Sie diese gut auf; Sie benötigen sie unter anderem für Ihre Bank und für Ihren Arbeitgeber.\nMit freundlichen Grüßen\nIhr Bürgeramt",en:"Dear Dr {LAST},\nyour appointment to register your residence is on Tuesday, 12/01/2027, at 08:40. Please bring your passport and your landlord's confirmation of residence. Registration must take place within two weeks of moving in. After registering you will receive a registration certificate. Keep it safe; you will need it, among other things, for your bank and your employer.\nKind regards\nYour citizens' office",
 gl:[["der Wohnsitz","the place of residence"],["die Wohnungsgeberbestätigung","the landlord's confirmation"],["der Einzug","moving in"],["die Meldebescheinigung","the registration certificate"],["aufbewahren","to keep"],["der Arbeitgeber","the employer"]],
 note:["Diesmal ohne Golem. – M.","This time without a golem. — M."],
 q:[["Was muss er zum Termin mitbringen?","What must he bring to the appointment?",["Reisepass und Wohnungsgeberbestätigung","Geburtsurkunde und Foto","Arbeitsvertrag und Zeugnis"],0],["Bis wann muss man sich anmelden?","By when must one register?",["innerhalb von zwei Wochen nach dem Einzug","innerhalb eines Jahres","vor dem Einzug"],0]]},
{id:"hd2",set:"amt",lv:"B2",ch:25,title:"Approbationsbehörde · Nachforderung (Muster)",de:"Antrag auf Erteilung der Approbation als Arzt – Nachforderung von Unterlagen\nSehr geehrter Herr Dr. {LAST},\nwir bestätigen den Eingang Ihres Antrags. Zur weiteren Bearbeitung benötigen wir noch folgende Unterlagen: eine amtlich beglaubigte Kopie Ihres Abschlusszeugnisses, eine Übersetzung durch eine öffentlich bestellte und beeidigte Übersetzerin oder einen entsprechenden Übersetzer sowie ein ärztliches Attest über Ihre gesundheitliche Eignung, das nicht älter als drei Monate ist. Bitte reichen Sie die Unterlagen innerhalb von sechs Wochen ein. Sobald Ihre Unterlagen vollständig vorliegen, erhalten Sie eine Einladung zur Fachsprachprüfung. Gehen die Unterlagen nicht fristgerecht ein, kann Ihr Antrag nicht weiter bearbeitet werden.\nMit freundlichen Grüßen\nIm Auftrag",en:"Application for a licence to practise as a physician — request for further documents\nDear Dr {LAST},\nwe confirm receipt of your application. To process it further we still need the following documents: an officially certified copy of your degree certificate, a translation by a publicly appointed and sworn translator, and a medical certificate of your fitness, not older than three months. Please submit the documents within six weeks. As soon as your documents are complete, you will receive an invitation to the medical language examination. If the documents are not received in time, your application cannot be processed further.\nKind regards\npp.",
 gl:[["die Approbation","the full licence to practise"],["die Nachforderung","the request for further documents"],["amtlich beglaubigt","officially certified"],["beeidigt","sworn"],["die Eignung","the fitness, suitability"],["fristgerecht","within the deadline"]],
 note:["Sechs Wochen. Das Amt hält Wort. – M.","Six weeks. The office keeps its word. — M."],
 q:[["Was erhält er, wenn die Unterlagen vollständig sind?","What does he receive when the documents are complete?",["eine Einladung zur Fachsprachprüfung","sofort die Approbation","eine Rechnung"],0],["Was geschieht, wenn die Unterlagen zu spät eingehen?","What happens if the documents arrive too late?",["Der Antrag wird nicht weiter bearbeitet.","Er muss eine Strafe zahlen.","Die Frist verlängert sich automatisch."],0]]},
{id:"hd3",set:"amt",lv:"C1",ch:33,title:"Klinikum · Personalabteilung · Ihre Einstellung (Muster)",de:"Sehr geehrter Herr Dr. {LAST},\nwir freuen uns, Ihnen Ihre Einstellung als Assistenzarzt in der Zentralen Notaufnahme zum 01.04. zu bestätigen. Vor Dienstantritt ist eine arbeitsmedizinische Vorsorge beim Betriebsärztlichen Dienst wahrzunehmen. Bitte legen Sie hierzu Ihren Impfausweis vor; für Beschäftigte in medizinischen Einrichtungen ist nach dem Infektionsschutzgesetz ein Nachweis über einen ausreichenden Masernschutz erforderlich. Die Dienstplanung erfolgt über das Sekretariat der Notaufnahme. Während der Einarbeitung in den ersten vier Wochen werden Sie ausschließlich im Tagdienst eingesetzt. Für Rückfragen stehen wir Ihnen gern zur Verfügung.\nMit freundlichen Grüßen\nPersonalabteilung",en:"Dear Dr {LAST},\nwe are pleased to confirm your appointment as a resident physician in the central emergency department from 1 April. Before you start, you must attend an occupational health check with the company medical service. Please bring your vaccination record; under the Infection Protection Act, employees in medical facilities must provide proof of adequate protection against measles. Rotas are planned by the emergency department's office. During your induction in the first four weeks you will work day shifts only. We are happy to answer any questions.\nKind regards\nHuman resources",
 gl:[["der Dienstantritt","the start of duty"],["die arbeitsmedizinische Vorsorge","the occupational health check"],["der Impfausweis","the vaccination record"],["der Nachweis","the proof"],["die Einarbeitung","the induction"],["einsetzen","to deploy, to schedule"]],
 note:["Nachtdienste erst ab der fünften Woche. Die Uhr über der Tür kann warten. – M.","Night shifts only from the fifth week. The clock above the door can wait. — M."],
 q:[["Was soll er zur arbeitsmedizinischen Vorsorge mitbringen?","What should he bring to the occupational health check?",["seinen Impfausweis","seinen Reisepass","seinen Arbeitsvertrag"],0],["Wie wird er in den ersten vier Wochen eingesetzt?","How will he be scheduled in the first four weeks?",["nur im Tagdienst","nur im Nachtdienst","gar nicht"],0]]},
// ---------------------------------------------------------------- Postkarten aus dem Goldenen Gässchen (the thin man of realm II; never named)
{id:"pk1",set:"pk",lv:"A2",ch:17,title:"Postkarte · Prag, Goldenes Gässchen 22",de:"Lieber Herr Doktor,\ndas Café ist leer ohne Sie. Der Kellner fragt nicht nach Ihnen, aber er schaut oft zur Tür. Ich schreibe nachts und arbeite am Tag. Sie wissen ja, wie das ist.\nIhr Nachbar aus Nr. 22",en:"Dear Doctor,\nthe café is empty without you. The waiter does not ask about you, but he often looks at the door. I write at night and work by day. You know what that is like.\nYour neighbour from no. 22",
 gl:[["schauen","to look"],["der Nachbar","the neighbour"]],
 q:[["Wann schreibt der Nachbar?","When does the neighbour write?",["nachts","am Morgen","nie"],0],["Was macht der Kellner?","What does the waiter do?",["Er schaut oft zur Tür.","Er fragt nach ihm.","Er schließt das Café."],0]]},
{id:"pk2",set:"pk",lv:"A2",ch:17,title:"Postkarte · Prag, Goldenes Gässchen 22",de:"Lieber Herr Doktor,\nheute war ich beim Amt. Ich habe eine Nummer gezogen und drei Stunden gewartet. Dann war das Amt zu. Morgen gehe ich wieder hin. Haben Sie Ihre Meldebescheinigung bekommen? Ich habe meine noch nicht.\nIhr Nachbar aus Nr. 22",en:"Dear Doctor,\ntoday I was at the office. I took a number and waited three hours. Then the office was closed. Tomorrow I am going again. Have you received your registration certificate? I don't have mine yet.\nYour neighbour from no. 22",
 gl:[["eine Nummer ziehen","to take a number"],["zu sein","to be closed"]],
 q:[["Wie lange hat er gewartet?","How long did he wait?",["drei Stunden","drei Tage","drei Minuten"],0],["Was macht er morgen?","What is he doing tomorrow?",["Er geht wieder zum Amt.","Er fährt in Urlaub.","Er schreibt einen Roman."],0]]},
{id:"pk3",set:"pk",lv:"B1",ch:25,title:"Postkarte · Prag, Goldenes Gässchen 22",de:"Lieber Herr Doktor,\nman hat mir erzählt, dass Sie jetzt Briefe auf Deutsch schreiben, an denen niemand etwas auszusetzen hat. Ich gratuliere Ihnen. Ich selbst schreibe Briefe, die ich nie abschicke, weil ich jeden Satz dreimal ändere. Vielleicht sollten wir tauschen.\nIhr Nachbar aus Nr. 22",en:"Dear Doctor,\nI have been told that you now write letters in German that nobody can find fault with. I congratulate you. I myself write letters that I never send, because I change every sentence three times. Perhaps we should swap.\nYour neighbour from no. 22",
 gl:[["an etwas etwas auszusetzen haben","to find fault with something"],["abschicken","to send off"],["tauschen","to swap"]],
 q:[["Warum schickt der Nachbar seine Briefe nicht ab?","Why does the neighbour not send his letters?",["Weil er jeden Satz dreimal ändert.","Weil er keine Briefmarken hat.","Weil die Post streikt."],0],["Was schlägt er vor?","What does he suggest?",["zu tauschen","zu telefonieren","sich in Berlin zu treffen"],0]]},
{id:"pk4",set:"pk",lv:"B1",ch:33,title:"Postkarte · Prag, Goldenes Gässchen 22",de:"Lieber Herr Doktor,\ndies ist meine letzte Karte, denn das Häuschen wird im Frühling neu vermietet. Wenn Sie wieder einmal in Prag sind, setzen Sie sich ins Café und bestellen Sie zwei Tassen. Der Kellner wird verstehen, was das bedeutet. Ich verstehe es nicht ganz, aber das macht nichts.\nIhr Nachbar aus Nr. 22",en:"Dear Doctor,\nthis is my last card, for the little house is being let again in the spring. If you are ever in Prague again, sit down in the café and order two cups. The waiter will understand what that means. I do not quite understand it, but that does not matter.\nYour neighbour from no. 22",
 gl:[["vermieten","to let, to rent out"],["das Häuschen","the little house"]],
 q:[["Warum ist das seine letzte Karte?","Why is this his last card?",["weil das Häuschen neu vermietet wird","weil er krank ist","weil er nach Berlin zieht"],0],["Wie viele Tassen soll der Doktor bestellen?","How many cups should the doctor order?",["zwei","eine","drei"],0]]},
// ---------------------------------------------------------------- Frau Brandts Rückmeldung (her testimony; read aloud in the finale)
{id:"br1",set:"br",lv:"B1",ch:36,title:"Rückmeldung · Schauspielpatientin · Teil 1",de:"Hat sich der Kandidat vorgestellt? Ja, mit Namen und Funktion. Hat er Sie ausreden lassen? Ja.\nIch habe heute eine Frau mit Luftnot gespielt und gefragt, ob ich daran sterben muss. Er hat mir nichts versprochen, was er nicht halten kann. Er hat mir gesagt, was als Nächstes passiert, und er ist geblieben, bis ich wieder Luft hatte – auch wenn das nur gespielt war. Ich war vierzig Jahre Souffleuse. Ich höre, wenn jemand seinen Text aufsagt. Er hat mit mir gesprochen. Von diesem Arzt würde ich mich behandeln lassen.\nMargarete Brandt",en:"Did the candidate introduce himself? Yes, with name and role. Did he let you finish speaking? Yes.\nToday I played a woman who is short of breath and asked whether I am going to die of it. He promised me nothing he cannot keep. He told me what happens next, and he stayed until I had my breath back — even though that was only acted. I was a prompter for forty years. I can hear when someone is reciting his lines. He was speaking with me. I would let this doctor treat me.\nMargarete Brandt",
 gl:[["ausreden lassen","to let someone finish speaking"],["ein Versprechen halten","to keep a promise"],["die Souffleuse","the prompter (theatre)"],["den Text aufsagen","to recite one's lines"]],
 q:[["Was hat der Kandidat ihr versprochen?","What did the candidate promise her?",["nichts, was er nicht halten kann","dass alles gut wird","dass sie morgen nach Hause darf"],0],["Woran erkennt Frau Brandt, dass er mit ihr spricht?","How does Mrs Brandt know that he is speaking with her?",["Er sagt keinen auswendig gelernten Text auf.","Er spricht besonders laut.","Er benutzt viele Fachwörter."],0]]}
);

