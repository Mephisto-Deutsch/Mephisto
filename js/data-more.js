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
1:["Ich bin dein Schatten. Ich bin müde. Ich will nach Hause.","I am your shadow. I am tired. I want to go home."],
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
39:["Im Kerker ist es dunkel; folglich wirft dort niemand einen Schatten. Insofern bleibt mir nur ein Ort: du selbst.","It is dark in the dungeon; consequently nobody casts a shadow there. In that respect only one place remains for me: you yourself."],
40:["Wir treten gemeinsam ein. Du sprichst, und ich schweige. Zum ersten Mal habe ich keine Angst.","We enter together. You speak, and I stay silent. For the first time I am not afraid."]};

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
// Bett vier: after each boss, the patient who waits. boss id → lines.
const BETT={
 hexe:[["N","For one breath the oven door is another door. White light. A corridor. Bed four. An old woman looks at you."],
  ["X","Patientin","Guten Tag, Herr Doktor.","Good day, Doctor."],["X","Du","Guten Tag. Ich bin Doktor {LAST}. Ich bin Arzt.","Good day. I am Doctor {LAST}. I am a physician."],
  ["N","That is all you have. She waits for more. Then the forest is back."],["M","Neun Wörter. Sie wartet. Ich auch.","Nine words. She is waiting. So am I."]],
 golem:[["N","The clay cracks, and behind it is the corridor again. Bed four."],
  ["X","Du","Wo haben Sie Schmerzen?","Where do you have pain?"],["X","Patientin","Hier, im Bauch.","Here, in my belly."],["X","Du","Seit wann?","Since when?"],["X","Patientin","Seit gestern Abend. Ich habe nichts gegessen.","Since last night. I haven't eaten anything."],
  ["N","You understood her. She looks at you for a moment longer than she needs to."],["X","Patientin","Sie sprechen aber gut Deutsch.","But you speak German well."],
  ["M","Sie lügt. Aber sie hat gelächelt. Das habe ich nicht erlaubt.","She is lying. But she smiled. I did not permit that."]],
 pudel:[["N","Der Pudel schrumpft, und wo er war, steht wieder das Bett. Bett vier.","The poodle shrinks, and where it was the bed stands again. Bed four."],
  ["X","Patientin","Ich bin gekommen, weil ich keine Luft mehr bekommen habe.","I came because I couldn't get any air."],
  ["N","Du hast das „weil“ verstanden und das Verb am Ende. Dann fragte sie etwas anderes.","You understood the 'weil' and the verb at the end. Then she asked something else."],
  ["X","Patientin","Muss ich sterben, Herr Doktor?","Am I going to die, Doctor?"],
  ["N","Du wusstest die Antwort. Du hattest die Wörter nicht. Man tröstet im Konjunktiv, und den hattest du noch nicht sicher.","You knew the answer. You did not have the words. One comforts in the subjunctive, and you did not have that securely yet."],
  ["M","Dazu fällt mir keine Beleidigung ein.","I can't think of an insult for that.","Dazu fällt mir keine Beleidigung ein."]],
 caligari:[["N","Die schiefen Wände richten sich auf. Ein gerader Flur. Bett vier.","The crooked walls straighten. A straight corridor. Bed four."],
  ["X","Du","Wären Sie früher gekommen, hätten wir es leichter gehabt. Aber Sie sind jetzt hier, und wir kümmern uns um Sie. Ich erkläre Ihnen Schritt für Schritt, was als Nächstes geschieht.","Had you come earlier, it would have been easier for us. But you are here now, and we are taking care of you. I will explain to you step by step what happens next."],
  ["X","Patientin","Danke, dass Sie es mir erklärt haben. Das hat bisher keiner getan.","Thank you for explaining it to me. Nobody has done that so far."],
  ["N","Mephisto schweigt. Die Laterne brennt heller.","Mephisto is silent. The lantern burns brighter."]]};
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
 ["Der Nächste hat heute unterschrieben. Er ist schlechter als Sie damals. Fast.","The next one signed today. He's worse than you were. Almost.","Der Nächste hat heute unterschrieben. Er ist schlechter als du damals. Fast."]];
// Chronik pages remapped to the chapters they belong to
const LORE_CH={hunger:3,hameln:4,rotkaeppchen:5,hexenhammer:8,kafka:14,totentanz:15,pudel:18,volksbuch:19,auerbach:20,paracelsus:21,caligari:26,virchow:28,vesal:33,semmelweis:34,brocken:37,hauser:39,roentgen:36};

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

