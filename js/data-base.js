// ---- VOCAB: [de, en, type, example, tag] ; type: n v adj adv prep conj pron x ; tag: core | faust | med
const VOCAB = [
["der Mensch","human being, person","n","Der Mensch irrt, solange er strebt.","core"],
["der Mann","man","n","Der Mann liest ein Buch.","core"],
["die Frau","woman","n","Die Frau spricht Deutsch.","core"],
["das Kind","child","n","Das Kind schläft.","core"],
["das Leben","life","n","Das Leben ist kurz.","core"],
["die Welt","world","n","Die ganze Welt ist mir vergällt.","core"],
["die Zeit","time","n","Die Zeit vergeht.","core"],
["der Tag","day","n","Jeder Tag ist neu.","core"],
["die Nacht","night","n","In der Nacht ist es still.","core"],
["das Jahr","year","n","Ein Jahr hat zwölf Monate.","core"],
["der Morgen","morning","n","Am Morgen trinke ich Kaffee.","core"],
["der Abend","evening","n","Am Abend lese ich.","core"],
["das Haus","house","n","Das Haus ist alt.","core"],
["die Stadt","city, town","n","Die Stadt schläft nie.","core"],
["die Erde","earth, ground","n","Die Erde ist rund.","core"],
["der Himmel","sky, heaven","n","Der Himmel ist blau.","core"],
["die Sonne","sun","n","Die Sonne scheint.","core"],
["der Mond","moon","n","Der Mond steht hoch.","core"],
["der Stern","star","n","Ein Stern fällt.","core"],
["das Wasser","water","n","Das Wasser ist kalt.","core"],
["das Feuer","fire","n","Das Feuer brennt.","core"],
["die Luft","air","n","Die Luft ist rein.","core"],
["das Licht","light","n","Es werde Licht!","core"],
["die Hand","hand","n","Gib mir die Hand.","core"],
["das Herz","heart","n","Mein Herz ist schwer.","core"],
["der Kopf","head","n","Mein armer Kopf!","core"],
["das Auge","eye","n","Das Auge sieht.","core"],
["das Wort","word","n","Im Anfang war das Wort.","core"],
["die Sprache","language","n","Deutsch ist eine schöne Sprache.","core"],
["das Buch","book","n","Ich lese ein Buch.","core"],
["der Weg","way, path","n","Der Weg ist weit.","core"],
["die Tür","door","n","Die Tür ist offen.","core"],
["der Freund","friend","n","Er ist mein Freund.","core"],
["der Vater","father","n","Mein Vater ist Arzt.","core"],
["die Mutter","mother","n","Meine Mutter lacht.","core"],
["der Bruder","brother","n","Mein Bruder wohnt in Berlin.","core"],
["die Schwester","sister","n","Meine Schwester singt.","core"],
["der Gott","god","n","Gott sieht alles.","core"],
["der Teufel","devil","n","Der Teufel lacht.","core"],
["die Seele","soul","n","Zwei Seelen wohnen in meiner Brust.","core"],
["der Geist","spirit, mind, ghost","n","Ich bin der Geist, der stets verneint.","core"],
["die Liebe","love","n","Die Liebe ist stark.","core"],
["der Tod","death","n","Der Tod kommt zu allen.","core"],
["der Schmerz","pain","n","Der Schmerz ist groß.","core"],
["die Freude","joy","n","Die Freude ist kurz.","core"],
["die Angst","fear","n","Ich habe Angst.","core"],
["die Kraft","strength, force, power","n","Ein Teil von jener Kraft.","core"],
["die Ruhe","rest, calm","n","Meine Ruh ist hin.","core"],
["der Traum","dream","n","Es war nur ein Traum.","core"],
["die Wahrheit","truth","n","Die Wahrheit tut weh.","core"],
["die Hoffnung","hope","n","Die Hoffnung stirbt zuletzt.","core"],
["der Wille","will","n","Wo ein Wille ist, ist ein Weg.","core"],
["die Brust","chest, breast, bosom","n","Zwei Seelen wohnen, ach! in meiner Brust.","core"],
["die Stimme","voice","n","Ich höre eine Stimme.","core"],
["sein","to be","v","Ich bin müde.","core"],
["haben","to have","v","Wir haben Zeit.","core"],
["werden","to become; will (future)","v","Er wird Arzt.","core"],
["können","can, to be able","v","Ich kann lesen.","core"],
["müssen","must, to have to","v","Du musst gehen.","core"],
["wollen","to want","v","Ich will wissen.","core"],
["sollen","should, to be supposed to","v","Was soll ich tun?","core"],
["dürfen","may, to be allowed","v","Hier darf ich Mensch sein.","core"],
["mögen","to like; may","v","Ich mag Goethe.","core"],
["gehen","to go, walk","v","Ich gehe nach Hause.","core"],
["kommen","to come","v","Komm her!","core"],
["sehen","to see","v","Ich sehe dich.","core"],
["sagen","to say","v","Sag mir die Wahrheit.","core"],
["sprechen","to speak","v","Sprechen Sie Deutsch?","core"],
["wissen","to know (a fact)","v","Ich weiß es nicht.","core"],
["kennen","to know (a person/place)","v","Ich kenne ihn.","core"],
["denken","to think","v","Ich denke, also bin ich.","core"],
["glauben","to believe","v","Ich glaube dir.","core"],
["fühlen","to feel","v","Ich fühle mein Herz.","core"],
["lieben","to love","v","Sie liebt ihn.","core"],
["leben","to live","v","Er lebt in Weimar.","core"],
["sterben","to die","v","Alle müssen sterben.","core"],
["geben","to give","v","Gib mir das Buch.","core"],
["nehmen","to take","v","Nimm es!","core"],
["machen","to make, do","v","Was machst du?","core"],
["tun","to do","v","Was soll ich tun?","core"],
["finden","to find","v","Ich finde sie nimmer.","core"],
["suchen","to seek, search","v","Wer sucht, der findet.","core"],
["stehen","to stand","v","Da steh ich nun.","core"],
["liegen","to lie (position)","v","Das Buch liegt hier.","core"],
["sitzen","to sit","v","Er sitzt am Tisch.","core"],
["bleiben","to stay, remain","v","Bleib bei mir.","core"],
["lassen","to let, leave","v","Lass mich allein.","core"],
["halten","to hold, stop, consider","v","Halt dich fest.","core"],
["bringen","to bring","v","Bring mir Wasser.","core"],
["tragen","to carry, wear","v","Er trägt ein Gewand.","core"],
["ziehen","to pull, move, draw","v","Ich ziehe meine Schüler an der Nase herum.","core"],
["fallen","to fall","v","Der Zeiger mag fallen.","core"],
["steigen","to climb, rise","v","Der Nebel steigt.","core"],
["fliegen","to fly","v","Der Vogel fliegt.","core"],
["schauen","to look, behold","v","Schau alle Wirkenskraft.","core"],
["hören","to hear","v","Hörst du das?","core"],
["fragen","to ask","v","Frag nicht.","core"],
["antworten","to answer","v","Antworte mir!","core"],
["rufen","to call, shout","v","Sie ruft mich.","core"],
["lachen","to laugh","v","Der Teufel lacht.","core"],
["weinen","to cry, weep","v","Gretchen weint.","core"],
["verstehen","to understand","v","Ich verstehe nichts.","core"],
["lesen","to read","v","Ich lese Faust.","core"],
["schreiben","to write","v","Er schreibt ein Gedicht.","core"],
["essen","to eat","v","Wir essen Brot.","core"],
["trinken","to drink","v","Trink den Trank!","core"],
["schlafen","to sleep","v","Das Kind schläft.","core"],
["beginnen","to begin","v","Es beginnt.","core"],
["scheinen","to shine; to seem","v","Die Sonne scheint. Es scheint so.","core"],
["heißen","to be called","v","Ich heiße Faust.","core"],
["brauchen","to need","v","Ich brauche Ruhe.","core"],
["gut","good","adj","Das ist gut.","core"],
["schlecht","bad","adj","Das Wetter ist schlecht.","core"],
["groß","big, great","adj","Ein großer Herr.","core"],
["klein","small","adj","Die kleine Welt.","core"],
["alt","old","adj","Der alte Winter.","core"],
["jung","young","adj","Das junge Blut.","core"],
["neu","new","adj","Ein neuer Tag.","core"],
["schön","beautiful","adj","Verweile doch! du bist so schön!","core"],
["hoch","high","adj","Hoher Ahnen.","core"],
["tief","deep","adj","Das tiefe Meer.","core"],
["weit","far, wide","adj","Der Weg ist weit.","core"],
["hell","bright","adj","Ein heller Stern.","core"],
["dunkel","dark","adj","In seinem dunklen Drange.","core"],
["kalt","cold","adj","Es ist kalt.","core"],
["warm","warm","adj","Die Nacht ist warm.","core"],
["schnell","fast","adj","Lauf schnell!","core"],
["lang","long","adj","Ein langer Tag.","core"],
["kurz","short","adj","Kurz: das Böse.","core"],
["stark","strong","adj","Er ist stark.","core"],
["schwach","weak","adj","In seiner Schwäche.","core"],
["reich","rich","adj","Ein reicher Mann.","core"],
["arm","poor","adj","Ich armer Tor!","core"],
["frei","free","adj","Dann bist du frei.","core"],
["wahr","true","adj","Ist das wahr?","core"],
["ganz","whole, entire; quite","adj","Die ganze Welt.","core"],
["voll","full","adj","Das Glas ist voll.","core"],
["leer","empty","adj","Das Haus ist leer.","core"],
["still","quiet","adj","Sei still!","core"],
["allein","alone; only","adv","Er braucht's allein.","core"],
["immer","always","adv","Immer wieder.","core"],
["nie","never","adv","Nie wieder.","core"],
["oft","often","adv","Ich lese oft.","core"],
["bald","soon","adv","Bis bald!","core"],
["jetzt","now","adv","Jetzt oder nie.","core"],
["heute","today","adv","Heute ist Montag.","core"],
["gestern","yesterday","adv","Gestern war Sonntag.","core"],
["morgen","tomorrow","adv","Morgen kommt er.","core"],
["hier","here","adv","Hier bin ich Mensch.","core"],
["dort","there","adv","Dort steht er.","core"],
["sehr","very","adv","Sehr gut.","core"],
["nur","only","adv","Nur ein Wort.","core"],
["auch","also","adv","Ich auch.","core"],
["noch","still, yet","adv","Noch nicht.","core"],
["schon","already","adv","Hier stock ich schon!","core"],
["wieder","again","adv","Ihr naht euch wieder.","core"],
["doch","yet, but; indeed (emphatic)","adv","Verweile doch!","core"],
["wohl","probably; well; indeed","adv","Versuch ich wohl?","core"],
["gern","gladly","adv","Ich lese gern.","core"],
["vielleicht","perhaps","adv","Vielleicht morgen.","core"],
["und","and","conj","Du und ich.","core"],
["oder","or","conj","Jetzt oder nie.","core"],
["aber","but","conj","Klein, aber fein.","core"],
["denn","for, because (main clause); then (particle)","conj","Denn alles, was entsteht...","core"],
["weil","because (verb to end)","conj","Ich lese, weil ich will.","core"],
["dass","that (verb to end)","conj","Ich weiß, dass du kommst.","core"],
["wenn","if, when","conj","Wenn ich Zeit habe, lese ich.","core"],
["ob","whether","conj","Ich frage, ob er kommt.","core"],
["als","when (past); than; as","conj","Als ich jung war.","core"],
["nicht","not","adv","Ich weiß nicht.","core"],
["kein","no, not a","pron","Kein Wort!","core"],
["dieser","this","pron","Dieser Mann.","core"],
["jener","that (one)","pron","Ein Teil von jener Kraft.","core"],
["welcher","which","pron","Welcher Weg?","core"],
["wer","who","pron","Wer bist du?","core"],
["was","what","pron","Was willst du?","core"],
["wo","where","adv","Wo bist du?","core"],
["wie","how; as, like","adv","Wie geht es dir?","core"],
["warum","why","adv","Warum nicht?","core"],
["wann","when (question)","adv","Wann kommst du?","core"],
["in","in (dat.) / into (acc.)","prep","In der Nacht.","core"],
["an","at, on (vertical)","prep","An der Wand.","core"],
["auf","on (horizontal), onto","prep","Auf dem Tisch.","core"],
["über","over, above, about","prep","Über den Wolken.","core"],
["unter","under, among","prep","Unter dem Baum.","core"],
["vor","in front of, before, ago","prep","Vor dem Tor.","core"],
["hinter","behind","prep","Hinter dem Haus.","core"],
["zwischen","between","prep","Zwischen Himmel und Erde.","core"],
["mit","with (+dat.)","prep","Mit mir.","core"],
["nach","after; to (places) (+dat.)","prep","Nach Hause.","core"],
["von","from, of (+dat.)","prep","Von Zeit zu Zeit.","core"],
["zu","to; too (+dat.)","prep","Zu dir. Zu viel.","core"],
["aus","out of, from (+dat.)","prep","Aus Dunst und Nebel.","core"],
["bei","at, near, with (+dat.)","prep","Bei mir.","core"],
["seit","since (+dat.)","prep","Seit zehn Jahren.","core"],
["für","for (+acc.)","prep","Für mich.","core"],
["durch","through (+acc.)","prep","Durch Geistes Kraft.","core"],
["gegen","against (+acc.)","prep","Gegen den Wind.","core"],
["ohne","without (+acc.)","prep","Ohne dich.","core"],
["um","around; at (time) (+acc.)","prep","Um mich.","core"],
// ---- Faust lexicon
["die Weisheit","wisdom","n","Er sucht die Weisheit.","faust"],
["streben","to strive","v","Es irrt der Mensch, solang er strebt.","faust"],
["das Streben","striving","n","Sein Streben ist ewig.","faust"],
["der Drang","urge, drive","n","In seinem dunklen Drange.","faust"],
["die Sehnsucht","longing","n","Die Sehnsucht nach dem Licht.","faust"],
["die Qual","torment","n","Die Qual der Wahl.","faust"],
["die Pein","pain, agony (poetic)","n","Es ist mir eine Pein.","faust"],
["der Zweifel","doubt","n","Mich plagen keine Zweifel.","faust"],
["die Verzweiflung","despair","n","Faust ist in Verzweiflung.","faust"],
["das Verlangen","desire","n","Ein tiefes Verlangen.","faust"],
["der Genuss","enjoyment, pleasure","n","Der Genuss macht gemein.","faust"],
["die Sünde","sin","n","Alles, was ihr Sünde nennt.","faust"],
["die Schuld","guilt; debt","n","Gretchens Schuld.","faust"],
["die Reue","remorse","n","Keine Reue!","faust"],
["die Gnade","grace, mercy","n","Durch Gnade gerettet.","faust"],
["der Segen","blessing","n","Der Segen der Nacht.","faust"],
["der Fluch","curse","n","Ein Fluch liegt auf ihm.","faust"],
["verfluchen","to curse","v","Faust verflucht die Hoffnung.","faust"],
["der Zauber","magic, spell","n","Der Zauber der Nacht.","faust"],
["die Hexe","witch","n","Die Hexe braut den Trank.","faust"],
["der Wahn","delusion, madness","n","Jenem Wahn geneigt.","faust"],
["die Wonne","bliss","n","Welche Wonne!","faust"],
["die Lust","desire, pleasure","n","In derber Liebeslust.","faust"],
["der Trieb","drive, instinct","n","Ein innerer Trieb.","faust"],
["das Weib","woman (archaic/poetic)","n","Das ewig Weibliche.","faust"],
["die Jungfrau","maiden, virgin","n","Die holde Jungfrau.","faust"],
["der Herr","lord, master, gentleman","n","Der Herr spricht im Himmel.","faust"],
["der Knecht","servant","n","Mein Knecht!","faust"],
["der Pudel","poodle","n","Das also war des Pudels Kern!","faust"],
["das Studierzimmer","study (room)","n","Faust sitzt im Studierzimmer.","faust"],
["der Gelehrte","scholar","n","Ein müder Gelehrter.","faust"],
["der Magister","master (academic title)","n","Heiße Magister, heiße Doktor gar.","faust"],
["die Juristerei","law (ironic, archaic)","n","Juristerei und Medizin.","faust"],
["der Tor","fool","n","Ich armer Tor!","faust"],
["das Tor","gate","n","Vor dem Tor.","faust"],
["der Narr","fool, jester","n","Die kleine Narrenwelt.","faust"],
["der Pfaffe","priest (derogatory)","n","Schreiber und Pfaffen.","faust"],
["der Kerker","dungeon","n","Gretchen im Kerker.","faust"],
["die Hölle","hell","n","Weder vor Hölle noch Teufel.","faust"],
["der Engel","angel","n","Die Engel singen.","faust"],
["die Schöpfung","creation","n","Die ganze Schöpfung.","faust"],
["ewig","eternal","adj","Das Ewig-Weibliche.","faust"],
["das Wesen","being, essence, creature","n","Ein seltsames Wesen.","faust"],
["der Augenblick","moment, instant","n","Werd ich zum Augenblicke sagen...","faust"],
["verweilen","to linger, stay","v","Verweile doch!","faust"],
["vergehen","to pass, perish","v","Die Zeit vergeht.","faust"],
["erkennen","to recognise, perceive, know","v","Dass ich erkenne, was die Welt...","faust"],
["die Erkenntnis","knowledge, insight","n","Der Baum der Erkenntnis.","faust"],
["verneinen","to negate, deny","v","Der Geist, der stets verneint.","faust"],
["das Böse","evil","n","Die stets das Böse will.","faust"],
["die Vernunft","reason","n","Er nennt's Vernunft.","faust"],
["die Wissenschaft","science, scholarship","n","Die Wissenschaft hilft nicht.","faust"],
["irren","to err, wander","v","Es irrt der Mensch.","faust"],
["die Tat","deed, act","n","Im Anfang war die Tat!","faust"],
["der Sinn","sense, meaning, mind","n","Im Anfang war der Sinn.","faust"],
["das Gewand","garment, robe","n","Er trägt ein schwarzes Gewand.","faust"],
["der Abgrund","abyss","n","Am Rande des Abgrunds.","faust"],
["das Gift","poison","n","Das Gift wirkt schnell.","faust"],
["der Trank","potion, drink","n","Der Zaubertrank.","faust"],
["die Wette","bet, wager","n","Topp! Die Wette gilt.","faust"],
["der Pakt","pact","n","Der Pakt mit dem Teufel.","faust"],
["die Unschuld","innocence","n","Gretchens Unschuld.","faust"],
["die Ehre","honour","n","Ehre sei Gott.","faust"],
["die Schande","shame, disgrace","n","Welche Schande!","faust"],
["das Grab","grave","n","Ist mir das Grab.","faust"],
["selig","blessed, blissful","adj","Selig, wer sich vor der Welt verschließt.","faust"],
["bang","anxious, fearful","adj","Mir ist so bang.","faust"],
["zugrunde gehen","to perish, be ruined","v","Dann will ich gern zugrunde gehn.","faust"],
["entstehen","to come into being, arise","v","Alles, was entsteht.","faust"],
["die Finsternis","darkness","n","Ein Teil der Finsternis.","faust"],
["gewöhnlich","usually; ordinary","adv","Gewöhnlich für ein Ganzes hält.","faust"],
["schwanken","to sway, waver","v","Schwankende Gestalten.","faust"],
["die Gestalt","figure, shape","n","Ihr naht euch wieder, schwankende Gestalten.","faust"],
["trüb","murky, gloomy","adj","Dem trüben Blick.","faust"],
["der Nebel","mist, fog","n","Aus Dunst und Nebel.","faust"],
["der Hauch","breath, whiff","n","Vom Zauberhauch.","faust"],
["walten","to rule, hold sway","v","So mögt ihr walten.","faust"],
["der Busen","bosom","n","Mein Busen fühlt sich jugendlich erschüttert.","faust"],
["nimmer","never (poetic)","adv","Ich finde sie nimmer.","faust"],
["gar","even, at all; quite","adv","Heiße Doktor gar.","faust"],
["drum","therefore (= darum)","adv","Drum hab ich mich der Magie ergeben.","faust"],
["schier","almost, nearly (archaic)","adv","Das will mir schier das Herz verbrennen.","faust"],
["ward","became (archaic Präteritum of werden)","v","Und es ward Licht.","faust"],
["fürwahr","truly, indeed","adv","Fürwahr, er dient Euch auf besondre Weise.","faust"],
["wohlan","well then!","x","Wohlan, es sei!","faust"],
["hold","lovely, gracious","adj","Des Frühlings holden Blick.","faust"],
["die Glut","glow, embers; ardour","n","Himmelsglut.","faust"],
["der Schall","sound, resonance","n","Name ist Schall und Rauch.","faust"],
["der Rauch","smoke","n","Schall und Rauch.","faust"],
["die Fessel","shackle, fetter","n","In Fesseln schlagen.","faust"],
["der Zeiger","clock hand, pointer","n","Der Zeiger fallen.","faust"],
["der Dienst","service","n","Deines Dienstes frei.","faust"],
["vorbei","over, past","adv","Es sei die Zeit für mich vorbei!","faust"],
["bescheiden","modest","adj","Bescheidne Wahrheit.","faust"],
["gebären","to give birth (gebar = bore)","v","Die sich das Licht gebar.","faust"],
["plagen","to plague, torment","v","Mich plagen keine Skrupel.","faust"],
["sich ergeben","to surrender, devote oneself","v","Ich hab mich der Magie ergeben.","faust"],
["das Geheimnis","secret, mystery","n","Manch Geheimnis würde kund.","faust"],
["kund","known (archaic)","adj","Würde kund.","faust"],
["der Schweiß","sweat","n","Mit saurem Schweiß.","faust"],
["zusammenhalten","to hold together","v","Was die Welt im Innersten zusammenhält.","faust"],
["kramen","to rummage","v","In Worten kramen.","faust"],
["der Laffe","fop, fool (archaic)","n","All die Laffen.","faust"],
["bekehren","to convert","v","Zu bessern und zu bekehren.","faust"],
["entreißen","to snatch away","v","Alle Freud entrissen.","faust"],
["gescheit","clever","adj","Gescheiter als all die Laffen.","faust"],
["wunderlich","odd, strange","adj","So wunderlich als wie am ersten Tag.","faust"],
["der Schlag","blow; kind, sort","n","Von gleichem Schlag.","faust"],
["tierisch","beastly, animal-like","adj","Nur tierischer als jedes Tier zu sein.","faust"],
["sich hüten","to beware, take care","v","Ich hüte mich, mit ihm zu brechen.","faust"],
["hübsch","pretty; nice","adj","Es ist gar hübsch.","faust"],
["der Zug","procession, train; pull","n","Der euren Zug umwittert.","faust"],
["derb","coarse, robust","adj","In derber Liebeslust.","faust"],
["klammern","to cling","v","Mit klammernden Organen.","faust"],
["gewaltsam","forcibly","adv","Hebt gewaltsam sich.","faust"],
["der Dust","dust (archaic)","n","Vom Dust.","faust"],
["das Gefilde","fields, realm (poetic)","n","Zu den Gefilden hoher Ahnen.","faust"],
["der Ahn","ancestor","n","Hoher Ahnen.","faust"],
["das Eis","ice","n","Vom Eise befreit.","faust"],
["befreien","to free","v","Vom Eise befreit sind Strom und Bäche.","faust"],
["der Strom","stream, river; current","n","Strom und Bäche.","faust"],
["der Bach","brook","n","Ein kleiner Bach.","faust"],
["das Tal","valley","n","Im Tale grünet Hoffnungsglück.","faust"],
["grünen","to turn green","v","Im Tale grünet.","faust"],
["rau","rough, harsh","adj","In rauhe Berge.","faust"],
["verrückt","mad, deranged","adj","Mein armer Kopf ist mir verrückt.","faust"],
["zerstücken","to tear to pieces","v","Mein armer Sinn ist mir zerstückt.","faust"],
["vergällen","to embitter, spoil","v","Die ganze Welt ist mir vergällt.","faust"],
["die Religion","religion","n","Wie hast du's mit der Religion?","faust"],
["das Gefühl","feeling","n","Gefühl ist alles.","faust"],
["umnebeln","to befog","v","Umnebelnd Himmelsglut.","faust"],
["übersetzen","to translate","v","Ich muss es anders übersetzen.","faust"],
["erleuchten","to illuminate, enlighten","v","Vom Geiste recht erleuchtet.","faust"],
["getrost","confidently","adv","Und schreibe getrost.","faust"],
["der Rat","advice, counsel","n","Auf einmal seh ich Rat.","faust"],
["die Totenglocke","death knell","n","Dann mag die Totenglocke schallen.","faust"]
];
// conjugation table for drills: [inf, en, present(ich,du,er,wir,ihr,sie), präteritum(ich,du,er,wir,ihr,sie), partizip II (with aux)]
const CONJ = [
["sein","to be",["bin","bist","ist","sind","seid","sind"],["war","warst","war","waren","wart","waren"],"ist gewesen"],
["haben","to have",["habe","hast","hat","haben","habt","haben"],["hatte","hattest","hatte","hatten","hattet","hatten"],"hat gehabt"],
["werden","to become",["werde","wirst","wird","werden","werdet","werden"],["wurde","wurdest","wurde","wurden","wurdet","wurden"],"ist geworden"],
["können","can",["kann","kannst","kann","können","könnt","können"],["konnte","konntest","konnte","konnten","konntet","konnten"],"hat gekonnt"],
["müssen","must",["muss","musst","muss","müssen","müsst","müssen"],["musste","musstest","musste","mussten","musstet","mussten"],"hat gemusst"],
["wollen","to want",["will","willst","will","wollen","wollt","wollen"],["wollte","wolltest","wollte","wollten","wolltet","wollten"],"hat gewollt"],
["gehen","to go",["gehe","gehst","geht","gehen","geht","gehen"],["ging","gingst","ging","gingen","gingt","gingen"],"ist gegangen"],
["kommen","to come",["komme","kommst","kommt","kommen","kommt","kommen"],["kam","kamst","kam","kamen","kamt","kamen"],"ist gekommen"],
["sehen","to see",["sehe","siehst","sieht","sehen","seht","sehen"],["sah","sahst","sah","sahen","saht","sahen"],"hat gesehen"],
["sprechen","to speak",["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],["sprach","sprachst","sprach","sprachen","spracht","sprachen"],"hat gesprochen"],
["geben","to give",["gebe","gibst","gibt","geben","gebt","geben"],["gab","gabst","gab","gaben","gabt","gaben"],"hat gegeben"],
["nehmen","to take",["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],["nahm","nahmst","nahm","nahmen","nahmt","nahmen"],"hat genommen"],
["wissen","to know",["weiß","weißt","weiß","wissen","wisst","wissen"],["wusste","wusstest","wusste","wussten","wusstet","wussten"],"hat gewusst"],
["denken","to think",["denke","denkst","denkt","denken","denkt","denken"],["dachte","dachtest","dachte","dachten","dachtet","dachten"],"hat gedacht"],
["stehen","to stand",["stehe","stehst","steht","stehen","steht","stehen"],["stand","standst","stand","standen","standet","standen"],"hat gestanden"],
["finden","to find",["finde","findest","findet","finden","findet","finden"],["fand","fandst","fand","fanden","fandet","fanden"],"hat gefunden"],
["bleiben","to stay",["bleibe","bleibst","bleibt","bleiben","bleibt","bleiben"],["blieb","bliebst","blieb","blieben","bliebt","blieben"],"ist geblieben"],
["lassen","to let",["lasse","lässt","lässt","lassen","lasst","lassen"],["ließ","ließest","ließ","ließen","ließt","ließen"],"hat gelassen"],
["tragen","to carry",["trage","trägst","trägt","tragen","tragt","tragen"],["trug","trugst","trug","trugen","trugt","trugen"],"hat getragen"],
["fallen","to fall",["falle","fällst","fällt","fallen","fallt","fallen"],["fiel","fielst","fiel","fielen","fielt","fielen"],"ist gefallen"],
["lesen","to read",["lese","liest","liest","lesen","lest","lesen"],["las","lasest","las","lasen","last","lasen"],"hat gelesen"],
["sagen","to say",["sage","sagst","sagt","sagen","sagt","sagen"],["sagte","sagtest","sagte","sagten","sagtet","sagten"],"hat gesagt"],
["lieben","to love",["liebe","liebst","liebt","lieben","liebt","lieben"],["liebte","liebtest","liebte","liebten","liebtet","liebten"],"hat geliebt"],
["sterben","to die",["sterbe","stirbst","stirbt","sterben","sterbt","sterben"],["starb","starbst","starb","starben","starbt","starben"],"ist gestorben"]
];
const PERSONS = ["ich","du","er/sie/es","wir","ihr","sie/Sie"];

// ---- GRAMMAR lessons: {id, week, title, sub, body (html), quiz:[{q, o:[...], a:index, why}]}
const GRAMMAR = [
{id:"g1",week:1,title:"Laute, Artikel und Genus",sub:"How to say it, and why every noun has a gender",body:`
<p>German spelling is nearly phonetic. Learn these once and you can read any word aloud:</p>
<table><tr><th>Letters</th><th>Sound</th><th>Example</th></tr>
<tr><td>ei</td><td>like English <i>eye</i></td><td class="de">mein, Zeit, Geist</td></tr>
<tr><td>ie</td><td>long <i>ee</i></td><td class="de">Liebe, Ziel, nie</td></tr>
<tr><td>eu / äu</td><td>like <i>oy</i></td><td class="de">Teufel, Freude, Träume</td></tr>
<tr><td>ä ö ü</td><td>eh / French <i>eu</i> / French <i>u</i></td><td class="de">Mädchen, schön, Tür</td></tr>
<tr><td>ch</td><td>soft hiss after i/e; throat after a/o/u</td><td class="de">ich, Licht / Nacht, Buch</td></tr>
<tr><td>sch, st-, sp-</td><td><i>sh</i>; initial st/sp = sht/shp</td><td class="de">schön, Stern, sprechen</td></tr>
<tr><td>w / v / z</td><td>w = v, v = f, z = ts</td><td class="de">Welt, Vater, Zeit</td></tr>
<tr><td>ß</td><td>sharp s after a long vowel or diphthong</td><td class="de">heißen, groß</td></tr></table>
<p>Every noun is <b class="g">der</b> (masculine), <b class="g">die</b> (feminine) or <b class="g">das</b> (neuter). Learn the article as part of the word, never the bare noun. Nouns are capitalised, which makes them easy to spot in a text.</p>
<p>Gender is not random. Reliable cues:</p>
<ul><li><b>die</b>: -ung, -heit, -keit, -schaft, -ion, -tät, -ie (<span class="de">die Hoffnung, die Wahrheit, die Religion</span>); most nouns ending in -e (<span class="de">die Seele, die Liebe</span>)</li>
<li><b>das</b>: -chen, -lein (diminutives: <span class="de">das Mädchen, das Gretchen</span>), -um, -ment; nominalised verbs (<span class="de">das Leben, das Streben</span>)</li>
<li><b>der</b>: -er for agents (<span class="de">der Lehrer</span>), -ling, -ismus; days, months, seasons, most weather words</li></ul>
<div class="tip">Faust is full of nominalised abstractions: <span class="de">das Böse, das Gute, das Ewig-Weibliche</span>. Neuter article + capital letter turns any adjective into a concept.</div>`,
quiz:[
{q:"Which article goes with Hoffnung?",o:["der","die","das"],a:1,why:"-ung nouns are always feminine: die Hoffnung."},
{q:"Which article goes with Mädchen?",o:["der","die","das"],a:2,why:"-chen is a diminutive ending, always neuter — even for a girl."},
{q:"How is 'ei' in Geist pronounced?",o:["like English 'eye'","like English 'ee'","like 'ay' in day"],a:0,why:"ei = 'eye'. ie = 'ee'. Remember: the second letter tells you the sound."},
{q:"Which is feminine?",o:["Wissenschaft","Streben","Zweifel"],a:0,why:"-schaft is a feminine ending: die Wissenschaft. das Streben is a nominalised verb (neuter); der Zweifel is masculine."}]},
{id:"g2",week:1,title:"sein, haben, werden & Pronomen",sub:"The three verbs that carry the whole language",body:`
<table><tr><th></th><th>sein (be)</th><th>haben (have)</th><th>werden (become)</th></tr>
<tr><td>ich</td><td>bin</td><td>habe</td><td>werde</td></tr>
<tr><td>du</td><td>bist</td><td>hast</td><td>wirst</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>hat</td><td>wird</td></tr>
<tr><td>wir</td><td>sind</td><td>haben</td><td>werden</td></tr>
<tr><td>ihr</td><td>seid</td><td>habt</td><td>werdet</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>haben</td><td>werden</td></tr></table>
<p><b class="g">werden</b> does triple duty: "become" (<span class="de">er wird Arzt</span>), future (<span class="de">ich werde lesen</span>) and passive (<span class="de">es wird gesagt</span>). Goethe's archaic past of werden is <span class="de">ward</span> (= wurde).</p>
<p>Pronouns: <span class="de">ich, du, er, sie, es, wir, ihr, sie</span>. <span class="de">Sie</span> (capital) is polite "you". <span class="de">ihr</span> is plural "you all" and is how Faust addresses the spirits: <span class="de">Ihr naht euch wieder</span>.</p>
<div class="tip">In poetry the -e of <i>ich habe</i> is often dropped: <span class="de">Habe nun, ach!...</span> keeps it; <span class="de">Drum hab ich mich...</span> drops it. Same word.</div>`,
quiz:[
{q:"Ihr ___ müde. (you all)",o:["sind","seid","bist"],a:1,why:"ihr → seid. sind is for wir/sie."},
{q:"'Es ward Licht' — ward means:",o:["became","was","will be"],a:0,why:"ward is the archaic Präteritum of werden: 'it became light'."},
{q:"Du ___ ein Buch.",o:["hast","habe","hat"],a:0,why:"du → hast."},
{q:"Which sentence uses werden as future?",o:["Er wird Arzt.","Es wird gesagt.","Ich werde lesen."],a:2,why:"werden + infinitive = future. + noun = become. + participle = passive."}]},
{id:"g3",week:2,title:"Präsens & die V2-Regel",sub:"Conjugation, and the one word-order rule that unlocks German",body:`
<p>Regular verbs: stem + <b class="g">-e, -st, -t, -en, -t, -en</b>. <span class="de">lieben → ich liebe, du liebst, er liebt, wir lieben, ihr liebt, sie lieben</span>.</p>
<p>Strong verbs change the vowel in <b>du</b> and <b>er</b> forms: e→i/ie (<span class="de">sprechen: du sprichst; sehen: er sieht; nehmen: er nimmt</span>), a→ä (<span class="de">tragen: er trägt; fallen: er fällt</span>).</p>
<p><b class="g">V2:</b> in a main clause the conjugated verb is always the <b>second element</b>. Anything can come first; the subject then jumps behind the verb.</p>
<ul><li><span class="de"><b>Ich</b> lese heute Faust.</span></li>
<li><span class="de"><b>Heute</b> lese ich Faust.</span></li>
<li><span class="de"><b>Faust</b> lese ich heute.</span> (emphasis on Faust)</li></ul>
<p>Yes/no questions and commands put the verb first: <span class="de">Liest du Faust? Lies Faust!</span></p>
<div class="tip">Goethe exploits V2 constantly for emphasis: <span class="de">Da steh ich nun, ich armer Tor</span> — "Da" first, then the verb, then "ich". Once you expect the verb in slot two, inverted poetry stops looking scrambled.</div>`,
quiz:[
{q:"Morgen ___ ich nach Weimar.",o:["ich fahre","fahre","fahren"],a:1,why:"'Morgen' takes slot one, so the verb must be slot two: Morgen fahre ich."},
{q:"Er ___ ein Gewand. (tragen)",o:["trägt","tragt","trage"],a:0,why:"tragen is a→ä strong: er trägt."},
{q:"Which is correct?",o:["Heute ich lese.","Ich heute lese.","Heute lese ich."],a:2,why:"Verb second, always."},
{q:"Du ___ die Wahrheit. (sehen)",o:["sehst","sieht","siehst"],a:2,why:"sehen: e→ie in du/er: du siehst."}]},
{id:"g4",week:2,title:"Nominativ & Akkusativ",sub:"Subject vs. direct object: only masculine changes",body:`
<p>Cases mark a noun's role. Nominative = subject; Accusative = direct object (the thing acted on).</p>
<table><tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr>
<tr><td>Nom.</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / keine</td></tr>
<tr><td>Akk.</td><td><b class="g">den / einen</b></td><td>die / eine</td><td>das / ein</td><td>die / keine</td></tr></table>
<p>Only masculine changes: <span class="de">Der Mann sieht <b>den</b> Hund. Der Hund sieht <b>den</b> Mann.</span></p>
<p>Pronouns: <span class="de">ich→mich, du→dich, er→ihn, sie→sie, es→es, wir→uns, ihr→euch, sie→sie, Sie→Sie</span>. <span class="de">Ich liebe dich. Sie sieht ihn.</span></p>
<p>Because case marks the role, word order is free: <span class="de"><b>Den Mann</b> sieht der Hund</span> still means the dog sees the man.</p>
<div class="tip"><span class="de">Ihr naht euch wieder, schwankende Gestalten</span> — "euch" is the accusative reflexive of ihr: you draw yourselves near.</div>`,
quiz:[
{q:"Ich sehe ___ Mann.",o:["der","dem","den"],a:2,why:"Direct object, masculine → den."},
{q:"___ Frau liest ___ Buch.",o:["Die / das","Die / den","Den / das"],a:0,why:"Feminine and neuter don't change in the accusative."},
{q:"Sie liebt ___. (him)",o:["er","ihn","ihm"],a:1,why:"Accusative of er is ihn."},
{q:"'Den Teufel fürchtet er nicht.' Who is the subject?",o:["der Teufel","nicht","er"],a:2,why:"'Den' marks the devil as object; 'er' is nominative, so he is the one not fearing."}]},
{id:"g5",week:3,title:"Dativ",sub:"The case of recipients and locations",body:`
<p>Dative marks the indirect object (to whom / for whom) and follows many prepositions.</p>
<table><tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>plural</th></tr>
<tr><td>Dat.</td><td><b class="g">dem / einem</b></td><td><b class="g">der / einer</b></td><td><b class="g">dem / einem</b></td><td><b class="g">den / keinen (+n on noun)</b></td></tr></table>
<p>Pronouns: <span class="de">mir, dir, ihm, ihr, ihm, uns, euch, ihnen / Ihnen</span>.</p>
<p>Always dative: <span class="de">aus, bei, mit, nach, seit, von, zu</span> — chant them. <span class="de">Mit <b>dem</b> Teufel. Von Zeit zu Zeit. Nach Hause.</span></p>
<p>Dative verbs: <span class="de">helfen, danken, gefallen, gehören, glauben, folgen, antworten</span>. <span class="de">Ich helfe <b>dir</b>. Das gefällt <b>mir</b>.</span></p>
<p>Dative of feeling (very Faust): <span class="de">Mir ist bang. Mir ist das Grab.</span> Literally "to me is fear".</p>
<div class="tip"><span class="de">Die ganze Welt ist <b>mir</b> vergällt. Mein armer Kopf ist <b>mir</b> verrückt.</span> Gretchen stacks dative "mir" to say: for me, as I experience it.</div>`,
quiz:[
{q:"Ich gebe ___ Mann das Buch.",o:["dem","den","der"],a:0,why:"Recipient = dative masculine → dem."},
{q:"Sie spricht mit ___ Teufel.",o:["dem","den","der"],a:0,why:"mit always takes dative."},
{q:"Das gefällt ___. (me)",o:["mich","ich","mir"],a:2,why:"gefallen is a dative verb: mir."},
{q:"Which preposition is NOT always dative?",o:["mit","für","von"],a:1,why:"für takes the accusative. aus-bei-mit-nach-seit-von-zu are the dative set."}]},
{id:"g6",week:3,title:"Wechselpräpositionen",sub:"Two-way prepositions: motion vs. location",body:`
<p>Nine prepositions take <b>accusative for movement toward</b> and <b>dative for location</b>: <span class="de">an, auf, hinter, in, neben, über, unter, vor, zwischen</span>.</p>
<ul><li><span class="de">Ich gehe <b>in die</b> Stadt.</span> (where to? → Akk.)</li>
<li><span class="de">Ich bin <b>in der</b> Stadt.</span> (where? → Dat.)</li>
<li><span class="de">Er legt das Buch <b>auf den</b> Tisch. Das Buch liegt <b>auf dem</b> Tisch.</span></li></ul>
<p>Always accusative: <span class="de">durch, für, gegen, ohne, um</span>. <span class="de">Durch <b>des Geistes</b> Kraft; für <b>mich</b>; ohne <b>dich</b>.</span></p>
<p>Contractions you will see everywhere: <span class="de">im = in dem, am = an dem, zum = zu dem, zur = zu der, ins = in das, ans = an das, vom = von dem</span>.</p>
<div class="tip"><span class="de">Im Tale grünet Hoffnungsglück</span> — location, so dative; and Goethe adds the old dative -e: dem Tale.</div>`,
quiz:[
{q:"Er geht ___ Studierzimmer. (into)",o:["in","im","ins"],a:2,why:"Motion toward → accusative: in das = ins."},
{q:"Das Buch liegt ___ Tisch.",o:["auf dem","auf den","auf der"],a:0,why:"Location → dative: auf dem Tisch."},
{q:"Sie kämpft ___ den Teufel.",o:["bei","mit","gegen"],a:2,why:"gegen + accusative = against."},
{q:"'zur' is short for:",o:["zu dem","zu der","zu das"],a:1,why:"zur = zu der (feminine dative). zum = zu dem."}]},
{id:"g7",week:4,title:"Modalverben & die Satzklammer",sub:"The verbal bracket: German holds its breath till the end",body:`
<p>Modal verbs (<span class="de">können, müssen, wollen, sollen, dürfen, mögen</span>) are conjugated in slot two; the main verb goes to the <b>end</b> as an infinitive. This "bracket" (Satzklammer) is the deep shape of German.</p>
<p><span class="de">Ich <b>will</b> heute Abend Faust <b>lesen</b>. Du <b>darfst</b> hier nicht <b>rauchen</b>.</span></p>
<table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>sollen</th><th>dürfen</th><th>mögen</th></tr>
<tr><td>ich/er</td><td>kann</td><td>muss</td><td>will</td><td>soll</td><td>darf</td><td>mag</td></tr>
<tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>sollst</td><td>darfst</td><td>magst</td></tr>
<tr><td>wir/sie/Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>sollen</td><td>dürfen</td><td>mögen</td></tr>
<tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>sollt</td><td>dürft</td><td>mögt</td></tr></table>
<p><span class="de">möchte</span> ("would like") is the polite form of mögen: <span class="de">Ich möchte wissen...</span></p>
<p>Reading tip: when you meet a modal, your eyes should jump to the end of the clause to find the real verb, then read the middle.</p>
<p><b>Trap:</b> "must not" is <span class="de">nicht dürfen</span>. <span class="de">Sie müssen nicht aufstehen</span> = you don't have to get up. <span class="de">Sie dürfen nicht aufstehen</span> = you must not get up.</p>
<div class="tip"><span class="de">Dann <b>magst</b> du mich in Fesseln <b>schlagen</b>, / Dann <b>will</b> ich gern zugrunde <b>gehn</b>!</span> Two perfect brackets in the wager.</div>`,
quiz:[
{q:"Ich ___ Deutsch ___.",o:["lerne will","will lerne","will lernen"],a:2,why:"Modal second, infinitive last: Ich will Deutsch lernen."},
{q:"Er ___ nicht schlafen. (can)",o:["können","kannst","kann"],a:2,why:"er → kann."},
{q:"Where does the main verb go with a modal?",o:["second","end of clause","first"],a:1,why:"The infinitive closes the bracket at the end."},
{q:"'Hier darf ich's sein' — darf means:",o:["may/am allowed","must","want"],a:0,why:"dürfen = to be allowed. Faust: here I may be human."}]},
{id:"g8",week:4,title:"Trennbare Verben & Imperativ",sub:"Prefixes that fly to the end; commands",body:`
<p>Separable verbs have a stressed prefix (<span class="de">ab-, an-, auf-, aus-, ein-, her-, hin-, los-, mit-, nach-, vor-, weg-, zu-, zurück-, zusammen-</span>) that detaches and goes to the end of a main clause.</p>
<p><span class="de">aufstehen → Ich <b>stehe</b> um sechs <b>auf</b>. zusammenhalten → Was die Welt im Innersten <b>zusammenhält</b>.</span> (In a subordinate clause it re-joins.)</p>
<p>Inseparable prefixes never detach and are unstressed: <span class="de">be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</span>. <span class="de">Ich <b>verstehe</b>. Es <b>entsteht</b>. Er <b>erkennt</b>.</span></p>
<p>Imperative: du-form = stem (often no ending): <span class="de">Komm! Gib! Sag! Lies!</span> ihr-form = the present-tense ihr-form without the pronoun: <span class="de">Kommt!</span> Sie-form: <span class="de">Kommen Sie!</span> Add <span class="de">bitte</span> or <span class="de">mal</span> and the command becomes a request: <span class="de">Kommen Sie bitte herein. Zeigen Sie mal.</span></p>
<div class="tip"><span class="de"><b>Verweile</b> doch! du bist so schön!</span> — imperative with the softening particle doch. <span class="de"><b>Bedenke</b> wohl die erste Zeile</span> — imperative of bedenken; be- is inseparable, so nothing splits off.</div>`,
quiz:[
{q:"aufstehen: Ich ___ früh ___.",o:["stehe / auf","aufstehe / —","auf / stehe"],a:0,why:"The conjugated part is second, the prefix goes to the very end: Ich stehe früh auf."},
{q:"Which prefix is inseparable?",o:["an-","ver-","mit-"],a:1,why:"ver- never separates: ich verstehe, ich verfluche."},
{q:"Imperative (du) of geben:",o:["Gebe!","Gibst!","Gib!"],a:2,why:"Strong e→i verbs keep the vowel change: Gib!"},
{q:"'Verweile doch!' — doch here:",o:["softens/urges the command","means 'but'","negates"],a:0,why:"As a particle, doch adds urging: 'do stay!'"}]},
{id:"g9",week:5,title:"Perfekt",sub:"Spoken past: haben/sein + Partizip II",body:`
<p>The Perfekt is the everyday past in speech. Auxiliary in slot two, participle at the end (another bracket).</p>
<p>Partizip II: weak verbs <span class="de">ge- + stem + -t</span> (<span class="de">gesagt, geliebt, gemacht</span>); strong verbs <span class="de">ge- + changed stem + -en</span> (<span class="de">gesehen, gesprochen, gefunden</span>). Inseparable and -ieren verbs take no ge-: <span class="de">verstanden, studiert</span>.</p>
<p><b class="g">sein</b> with verbs of movement or change of state: <span class="de">ist gegangen, ist gekommen, ist gestorben, ist geworden</span> — and with three verbs you simply learn: <span class="de">ist gewesen, ist geblieben, ist passiert</span>. Everything else: <b class="g">haben</b>.</p>
<p><span class="de">Ich <b>habe</b> Philosophie <b>studiert</b>. Er <b>ist</b> nach Weimar <b>gefahren</b>.</span></p>
<div class="tip">Goethe shortens the auxiliary: <span class="de">Drum <b>hab</b> ich mich der Magie <b>ergeben</b></span> (habe → hab; ergeben = participle of sich ergeben, no ge- because er- is inseparable).</div>`,
quiz:[
{q:"Ich ___ das Buch ___. (lesen)",o:["habe geliest","bin gelesen","habe gelesen"],a:2,why:"lesen is transitive → haben; strong participle gelesen."},
{q:"Sie ___ nach Hause ___. (gehen)",o:["hat gegangen","ist gegangen","ist geht"],a:1,why:"Movement → sein: ist gegangen."},
{q:"Partizip II of verstehen:",o:["verstanden","geverstanden","verstehen"],a:0,why:"ver- is inseparable → no ge-: verstanden."},
{q:"Partizip II of studieren:",o:["gestudiert","studieren","studiert"],a:2,why:"-ieren verbs take no ge-: studiert."}]},
{id:"g10",week:5,title:"Präteritum — die Zeit der Literatur",sub:"The written past. Faust and every novel run on it.",body:`
<p>Books narrate in the Präteritum. You must <b>recognise</b> these forms instantly, even if you rarely produce them in speech.</p>
<p>Weak verbs: stem + <span class="de">-te, -test, -te, -ten, -tet, -ten</span>: <span class="de">ich liebte, er sagte, wir machten</span>.</p>
<p>Strong verbs change the vowel and take <b>no ending</b> in ich/er: ich ging, er ging. A few common verbs change the vowel and still take <b>-te</b> (mixed verbs): hatte, wusste, dachte, brachte; and wurde keeps its -e. Learn these 24 as a chant.</p>
<div class="tablewrap"><table><tr><td class="de">war</td><td>was</td><td class="de">hatte</td><td>had</td><td class="de">wurde / ward</td><td>became</td></tr>
<tr><td class="de">ging</td><td>went</td><td class="de">kam</td><td>came</td><td class="de">sah</td><td>saw</td></tr>
<tr><td class="de">sprach</td><td>spoke</td><td class="de">gab</td><td>gave</td><td class="de">nahm</td><td>took</td></tr>
<tr><td class="de">stand</td><td>stood</td><td class="de">fand</td><td>found</td><td class="de">blieb</td><td>stayed</td></tr>
<tr><td class="de">ließ</td><td>let</td><td class="de">hielt</td><td>held</td><td class="de">trug</td><td>carried</td></tr>
<tr><td class="de">zog</td><td>pulled</td><td class="de">fiel</td><td>fell</td><td class="de">stieg</td><td>climbed</td></tr>
<tr><td class="de">rief</td><td>called</td><td class="de">lag</td><td>lay</td><td class="de">saß</td><td>sat</td></tr>
<tr><td class="de">wusste</td><td>knew</td><td class="de">dachte</td><td>thought</td><td class="de">brachte</td><td>brought</td></tr></table></div>
<p>Modals in the past: <span class="de">konnte, musste, wollte, sollte, durfte, mochte</span>.</p>
<div class="tip"><span class="de">Ein Teil der Finsternis, die sich das Licht <b>gebar</b></span> — gebären → gebar. <span class="de">Der alte Winter <b>zog</b> sich in rauhe Berge zurück</span> — ziehen → zog.</div>`,
quiz:[
{q:"Präteritum of 'er geht':",o:["er gehte","er ging","er gegangen"],a:1,why:"gehen is strong: ging."},
{q:"'Sie sprach kein Wort.' sprach =",o:["speaks","will speak","spoke"],a:2,why:"sprechen → sprach (past)."},
{q:"Präteritum of 'wir lieben':",o:["wir liebten","wir liebte","wir lieben"],a:0,why:"Weak: liebten."},
{q:"'ward' is the archaic form of:",o:["war","hatte","wurde"],a:2,why:"ward = wurde (became)."}]},
{id:"g11",week:6,title:"Nebensätze & Relativsätze",sub:"Subordinate clauses push the verb to the very end",body:`
<p>After a subordinating conjunction the conjugated verb goes to the <b>end</b> of its clause. Key conjunctions: <span class="de">dass, weil, wenn, ob, als, obwohl, damit, bevor, nachdem, während, solange</span>.</p>
<p><span class="de">Und sehe, <b>dass</b> wir nichts wissen <b>können</b>! Es irrt der Mensch, <b>solang</b> er <b>strebt</b>.</span></p>
<p>Question words also subordinate: <span class="de">Ich weiß nicht, <b>wer</b> er <b>ist</b>.</span></p>
<p>If the subordinate clause comes first, the main verb follows immediately (V2 counts the whole clause as slot one): <span class="de"><b>Wenn</b> ich Zeit <b>habe</b>, <b>lese</b> ich.</span></p>
<p><b>Relative clauses</b> use der/die/das (declined like the definite article; only the genitive dessen/deren and the dative plural denen differ) and send the verb to the end:</p>
<ul><li><span class="de">der Geist, <b>der</b> stets verneint</span> (nom. masc.)</li>
<li><span class="de">alles, <b>was</b> entsteht</span> (after alles/nichts/etwas: was)</li>
<li><span class="de">Ein Teil der Finsternis, <b>die</b> sich das Licht gebar</span></li>
<li><span class="de">der Mann, <b>dessen</b> Buch ich lese</span> (whose)</li></ul>
<div class="tip">Reading strategy: when you see a comma + dass/weil/der..., find the verb at the end of that clause first, then read the clause.</div>`,
quiz:[
{q:"Ich glaube, dass er ___.",o:["morgen kommt","kommt morgen","morgen kommen"],a:0,why:"Verb last in the dass-clause, and it agrees with er: dass er morgen kommt."},
{q:"'alles, ___ entsteht'",o:["das","dass","was"],a:2,why:"After alles, nichts, etwas the relative pronoun is was."},
{q:"Weil ich müde bin, ___.",o:["schlafe ich","ich schlafe","ich schlafen"],a:0,why:"The subordinate clause fills slot one, so the main verb comes next: schlafe ich."},
{q:"der Mann, ___ Buch ich lese",o:["der","dessen","dem"],a:1,why:"Possessive relative (whose) masculine → dessen."}]},
{id:"g12",week:6,title:"Genitiv & Possessiv",sub:"Of, whose, and Goethe's inverted genitives",body:`
<p>Genitive = possession/"of". <span class="de">des / der / des / der</span>; masculine and neuter nouns add <span class="de">-(e)s</span>.</p>
<p><span class="de">das Buch <b>des Mannes</b>, die Kraft <b>des Geistes</b>, das Ende <b>der Welt</b></span>.</p>
<p>Genitive prepositions: <span class="de">wegen, trotz, während, statt, innerhalb</span>. In speech you will hear wegen and trotz with the dative; write the genitive.</p>
<p>Possessives (mein, dein, sein, ihr, unser, euer, Ihr) take the genitive endings of ein: <span class="de">meines Vaters, meiner Mutter, meiner Eltern</span>.</p>
<p><b>Poetic preposed genitive</b>: Goethe often puts the genitive <i>before</i> the noun, like English 's: <span class="de"><b>des Pudels</b> Kern, durch <b>des Frühlings</b> holden Blick, <b>Geistes</b> Kraft</span>. Modern prose would say der Kern des Pudels.</p>
<p>Genitive with adjectives: <span class="de">des Lebens müde</span> (weary of life), <span class="de">des rechten Weges bewusst</span> (aware of the right path).</p>
<div class="tip"><span class="de">Ein guter Mensch in seinem dunklen Drange / Ist sich <b>des rechten Weges</b> wohl bewusst.</span> Genitive object of bewusst.</div>`,
quiz:[
{q:"die Kraft ___ Geistes",o:["der","des","dem"],a:1,why:"Genitive masculine: des Geistes."},
{q:"'des Pudels Kern' in modern prose:",o:["des Kern Pudels","der Kern des Pudels","die Pudel Kern"],a:1,why:"Preposed genitive = 'the poodle's core' → der Kern des Pudels."},
{q:"Ich sehe ___ Kopf. (my)",o:["meinen","mein","meinem"],a:0,why:"Accusative masculine → meinen."},
{q:"'des Lebens müde' means:",o:["living tiredly","the life is tired","of life, weary"],a:2,why:"müde takes a genitive object: weary of life."}]},
{id:"g13",week:7,title:"Adjektivendungen & Steigerung",sub:"One rule to survive adjective endings; comparatives",body:`
<p>An adjective before a noun takes an ending. The simplest workable rule:</p>
<ol><li>If the article already shows the case clearly (der, die, das, den, dem, des...), the adjective takes <b class="g">-e</b> in nom./akk. singular (except masc. akk. → -en) and <b class="g">-en</b> everywhere else.</li>
<li>After ein/kein/mein in the nominative (and the neuter accusative), the adjective shows the gender itself: <span class="de">ein gut<b>er</b> Mensch, eine gut<b>e</b> Frau, ein gut<b>es</b> Kind</span>.</li>
<li>With no article, the adjective takes the article's ending: <span class="de">gut<b>er</b> Wein, kalt<b>es</b> Wasser, schwankend<b>e</b> Gestalten</span>.</li></ol>
<p>Comparison: <span class="de">-er / am -sten</span>: <span class="de">klug, klüger, am klügsten; gut, besser, am besten; hoch, höher, am höchsten; gern, lieber, am liebsten</span>. "than" = <span class="de">als</span>; "as...as" = <span class="de">so...wie</span>.</p>
<div class="tip"><span class="de">Und bin so klug <b>als wie</b> zuvor</span> — Goethe's "als wie" is an old doubled form of "as...as". <span class="de">Zwar bin ich gescheit<b>er</b> als alle die Laffen</span> — comparative + als.</div>`,
quiz:[
{q:"ein ___ Mensch (gut)",o:["gute","guten","guter"],a:2,why:"After ein (which shows no gender) the adjective shows masculine nominative: guter."},
{q:"der ___ Winter (alt)",o:["alte","alter","alten"],a:0,why:"After der (nominative) → -e: der alte Winter."},
{q:"Er ist klüger ___ ich.",o:["wie","dann","als"],a:2,why:"Comparative + als."},
{q:"Comparative of gern:",o:["gerner","lieber","mehr gern"],a:1,why:"gern, lieber, am liebsten."}]},
{id:"g14",week:8,title:"Konjunktiv II",sub:"Would, could, if only — the mood of wishes and hypotheticals",body:`
<p>Konjunktiv II expresses the unreal: wishes, conditions, politeness. Key forms:</p>
<table><tr><th></th><th>wäre</th><th>hätte</th><th>würde</th><th>könnte</th><th>müsste</th><th>wollte</th></tr>
<tr><td>ich/er</td><td>wäre</td><td>hätte</td><td>würde</td><td>könnte</td><td>müsste</td><td>wollte</td></tr>
<tr><td>du</td><td>wärst</td><td>hättest</td><td>würdest</td><td>könntest</td><td>müsstest</td><td>wolltest</td></tr>
<tr><td>wir / sie / Sie</td><td>wären</td><td>hätten</td><td>würden</td><td>könnten</td><td>müssten</td><td>wollten</td></tr></table>
<p>The same way: <span class="de">sollte, dürfte</span>. sollte and wollte have no umlaut.</p>
<p>For most verbs modern German uses <span class="de">würde + Infinitiv</span>: <span class="de">Ich würde gern lesen.</span> Literature uses the synthetic forms: strong Präteritum + umlaut where possible + -e (stünde and wüsste are irregular): <span class="de">ginge, käme, sähe, gäbe, fände, stünde, wüsste</span>.</p>
<p>Conditions: <span class="de"><b>Wenn</b> ich Zeit <b>hätte</b>, <b>läse</b> ich Faust.</span> Goethe drops wenn and starts with the verb: <span class="de"><b>Hättst</b> du ihm nicht den Schein des Himmelslichts gegeben...</span> = Wenn du ihm nicht... gegeben hättest.</p>
<p>Past unreal: <span class="de">hätte/wäre + Partizip II</span>: <span class="de">Er wäre gekommen.</span></p>
<div class="tip"><span class="de">Drum besser <b>wär's</b>, dass nichts <b>entstünde</b>.</span> wär's = wäre es; entstünde = Konj. II of entstehen (entstand → entstünde).</div>`,
quiz:[
{q:"Wenn ich reich ___, würde ich reisen.",o:["bin","wäre","war"],a:1,why:"Unreal condition → Konjunktiv II: wäre."},
{q:"'Hättst du ihm nicht... gegeben' is equivalent to:",o:["Hast du ihm gegeben?","Du hast ihm nicht gegeben","Wenn du ihm nicht... gegeben hättest"],a:2,why:"Verb-first replaces wenn in conditional clauses."},
{q:"Konjunktiv II of 'er kommt':",o:["er käme","er kam","er kommte"],a:0,why:"kam + umlaut + e → käme."},
{q:"Past unreal: Ich ___ das Buch ___ (lesen).",o:["habe gelesen","würde lesen","hätte gelesen"],a:2,why:"hätte + Partizip II = would have read."}]},
{id:"g15",week:8,title:"Konjunktiv I & Passiv",sub:"Reported speech, blessings, and 'es wird gesagt'",body:`
<p><b>Konjunktiv I</b> = infinitive stem + -e: <span class="de">er sage, er habe, er komme</span> — only sein has no -e: <span class="de">er sei</span>. Uses: reported speech (<span class="de">Er sagt, er <b>sei</b> müde</span>), wishes and formulas (<span class="de">Es <b>sei</b>! Gott <b>helfe</b> mir. Es <b>werde</b> Licht.</span>), and in Goethe, exhortations — with Konjunktiv I (Es sei …!) or with the modal verb mögen (mögt, mag = "may"; its own Konjunktiv I is möge) — <span class="de">So <b>mögt</b> ihr walten; die Uhr <b>mag</b> stehn; Es <b>sei</b> die Zeit für mich vorbei!</span> — "may/let it be".</p>
<p><b>Passiv</b> = <span class="de">werden + Partizip II</span>: <span class="de">Das Buch <b>wird</b> gelesen. Faust <b>wurde</b> gerettet.</span> Agent with <span class="de">von</span>. The state passive uses sein: <span class="de">Die Tür <b>ist</b> geschlossen.</span></p>
<p>Impersonal passive — a passive without a real subject: <span class="de">Es wird gesagt</span> = it is said. <span class="de">Hier wird nicht geraucht</span> = no smoking here. Do not confuse it with Faust's <span class="de">Geschrieben steht: Im Anfang war das Wort</span> ("it stands written"): that is stehen + participle, a state, not a passive.</p>
<div class="tip">When you see <span class="de">sei, mag, möge, werde</span> opening a clause with no "if" meaning, read it as a wish or command: <span class="de">Es sei!</span> = so be it.</div>`,
quiz:[
{q:"Er sagt, er ___ Arzt. (Konjunktiv I)",o:["sei","ist","wäre"],a:0,why:"Konjunktiv I for reported speech: sei."},
{q:"Das Buch ___ von vielen gelesen.",o:["wird","ist","hat"],a:0,why:"Process passive: wird + Partizip II."},
{q:"'Es werde Licht' is:",o:["a question","a past statement","a wish/command (Konj. I)"],a:2,why:"Konjunktiv I expresses 'let there be'."},
{q:"'Die Uhr mag stehn' means:",o:["The clock likes standing","Let the clock stop","The clock might be standing"],a:1,why:"mag here is an exhortation: let/may the clock stop."}]},
{id:"g16",week:10,title:"Goethes Deutsch",sub:"Archaic forms, elisions and poetic licence — the Faust decoder",body:`
<p>Faust (1808) is more than 200 years old. Its grammar is the grammar you now know, plus a short list of period habits:</p>
<table><tr><th>Habit</th><th>Example</th><th>Modern</th></tr>
<tr><td>Apokope (drop final -e)</td><td class="de">ich hab, ich steh, ich fühl, Ruh, Freud, Müh</td><td>habe, stehe, fühle, Ruhe, Freude, Mühe</td></tr>
<tr><td>Elision with 's</td><td class="de">wär's, ist's, nennt's, braucht's, hast du's</td><td>wäre es, ist es, nennt es...</td></tr>
<tr><td>Dative -e</td><td class="de">dem Tage, im Tale, zum Augenblicke</td><td>dem Tag, im Tal, zum Augenblick</td></tr>
<tr><td>Old forms</td><td class="de">ward, itzt, nimmer, gar, drum, schier, bescheidne, andre</td><td>wurde, jetzt, nie, sogar, darum, fast, bescheidene, andere</td></tr>
<tr><td>Old spelling</td><td class="de">daß, muß, rauh, Theil (in some editions)</td><td>dass, muss, rau, Teil</td></tr>
<tr><td>als wie</td><td class="de">so klug als wie zuvor</td><td>so klug wie zuvor</td></tr>
<tr><td>Preposed genitive</td><td class="de">des Pudels Kern, Geistes Kraft</td><td>der Kern des Pudels</td></tr>
<tr><td>Verb-first condition</td><td class="de">Werd ich zum Augenblicke sagen...</td><td>Wenn ich ... sagen werde</td></tr>
<tr><td>Es + verb + subject</td><td class="de">Es irrt der Mensch</td><td>Der Mensch irrt</td></tr>
<tr><td>Dative of experience</td><td class="de">Mir ist bang; ist mir vergällt</td><td>Ich habe Angst</td></tr></table>
<p>Pronoun <span class="de">Ihr/Euch</span> was the polite form of the period (where modern German uses Sie): Mephisto to the Lord, about Faust: <span class="de">Fürwahr! er dient Euch auf besondre Weise.</span></p>
<div class="tip">Decoding routine for any Faust line: (1) restore dropped e's and expand 's; (2) find the verb (slot two or clause-end); (3) find the subject by case; (4) only then translate.</div>`,
quiz:[
{q:"'wär's' expands to:",o:["wir es","war es","wäre es"],a:2,why:"wär = wäre (Konj. II), 's = es."},
{q:"'Es irrt der Mensch' — the subject is:",o:["Es","irrt","der Mensch"],a:2,why:"Es is a dummy placeholder; der Mensch (nominative) is the real subject."},
{q:"'zum Augenblicke' shows:",o:["the old dative -e","plural","genitive"],a:0,why:"Archaic dative singular ending -e on masculine/neuter nouns."},
{q:"'Habe nun, ach! Philosophie... studiert' — the dropped word is:",o:["Er","Ich","Wir"],a:1,why:"Goethe omits the subject pronoun ich: (Ich) habe... studiert."}]}
];
// ---- CASE DRILL
const CASES = [
["Ich sehe ___ Hund.",["der","den","dem"],1,"direct object, masc. → den"],
["Der Hund gehört ___ Kind.",["das","dem","den"],1,"gehören + dative → dem Kind"],
["Wir gehen ___ Stadt.",["in die","in der","in dem"],0,"motion → accusative"],
["Er wohnt ___ Haus.",["in das","im","in den"],1,"location → dative: im = in dem"],
["Sie dankt ___ Mann.",["den","dem","der"],1,"danken + dative"],
["Das ist das Buch ___ Lehrers.",["des","der","dem"],0,"genitive masc. → des Lehrers"],
["Ich komme ___ Schule.",["aus der","aus die","aus den"],0,"aus + dative; die Schule → der"],
["Ohne ___ Freund gehe ich nicht.",["meinem","meinen","meiner"],1,"ohne + accusative → meinen"],
["Mit ___ Freunden feiern wir.",["die","den","der"],1,"mit + dative plural → den (+n)"],
["Er kämpft gegen ___ Teufel.",["den","dem","der"],0,"gegen + accusative"],
["Sie schreibt ___ Mutter einen Brief.",["ihrer","ihre","ihren"],0,"indirect object fem. → ihrer"],
["Das Kind spielt ___ Tisch.",["unter dem","unter den","unter des"],0,"location → dative"],
["Ich lege das Buch ___ Tisch.",["auf dem","auf den","auf der"],1,"motion (placing) → accusative"],
["Wegen ___ Wetters bleiben wir.",["dem","des","den"],1,"wegen + genitive"],
["Hilf ___!",["mich","mir","ich"],1,"helfen + dative"],
["Bitte legen Sie sich auf ___ Liege.",["die","der","den"],0,"auf + motion (where to?) → accusative: die Liege"],
["Zwei Seelen wohnen in ___ Brust.",["meine","meiner","meinen"],1,"in + location → dative fem. → meiner"],
["Ein Teil von ___ Kraft.",["jener","jene","jenen"],0,"von + dative fem. → jener"],
["Dann bist du ___ Dienstes frei.",["deinem","deines","deinen"],1,"frei + genitive object → deines Dienstes"],
["Der Schmerz strahlt in ___ linken Arm aus.",["den","dem","der"],0,"in + direction (where to?) → accusative masculine: den linken Arm"]
];
// ---- FAUST CLOZE: [line with ___, answer, hint, scene]
const CLOZE = [
["Habe nun, ach! Philosophie, Juristerei und Medizin, und leider auch ___ durchaus studiert.","Theologie","the fourth faculty","Nacht"],
["Da steh ich nun, ich armer ___!","Tor","fool","Nacht"],
["Und bin so klug als wie ___.","zuvor","before","Nacht"],
["Und sehe, dass wir nichts ___ können!","wissen","know","Nacht"],
["Ich bin der Geist, der stets ___!","verneint","negates","Studierzimmer"],
["Ein Teil von jener Kraft, die stets das Böse will und stets das ___ schafft.","Gute","opposite of Böse","Studierzimmer"],
["Es irrt der Mensch, solang er ___.","strebt","strives","Prolog im Himmel"],
["Verweile doch! du bist so ___!","schön","beautiful","Studierzimmer II"],
["Meine Ruh ist hin, mein ___ ist schwer.","Herz","heart","Gretchens Stube"],
["Ich finde sie nimmer und ___.","nimmermehr","never more","Gretchens Stube"],
["Zwei ___ wohnen, ach! in meiner Brust.","Seelen","souls","Vor dem Tor"],
["Hier bin ich ___, hier darf ich's sein!","Mensch","human","Vor dem Tor"],
["Im Anfang war die ___!","Tat","deed","Studierzimmer"],
["Name ist Schall und ___.","Rauch","smoke","Marthens Garten"],
["Das also war des ___ Kern!","Pudels","poodle (genitive)","Studierzimmer"],
["Ihr naht euch wieder, ___ Gestalten.","schwankende","swaying","Zueignung"],
["Vom Eise befreit sind Strom und ___.","Bäche","brooks","Vor dem Tor"],
["Drum hab ich mich der ___ ergeben.","Magie","magic","Nacht"],
["Dass ich erkenne, was die Welt im Innersten ___.","zusammenhält","holds together","Nacht"],
["Gefühl ist ___.","alles","everything","Marthens Garten"]
];

// ---- GRADED TEXTS: {id, level, week, title, sub, paras:[{de, en}], gloss:{word:meaning}}
const TEXTS = [
{id:"t1",level:1,week:1,title:"Der Gelehrte",sub:"Present tense, sein/haben, simple sentences",paras:[
{de:"Faust ist ein Gelehrter. Er ist alt und müde. Er sitzt in seinem Zimmer. Das Zimmer ist dunkel und eng.",en:"Faust is a scholar. He is old and tired. He sits in his room. The room is dark and cramped."},
{de:"Er hat viele Bücher. Die Bücher sind alt. Er liest Tag und Nacht. Aber er ist nicht glücklich.",en:"He has many books. The books are old. He reads day and night. But he is not happy."},
{de:"Er sagt: „Ich weiß nichts. Ich bin ein armer Tor.“ Das Licht der Lampe ist schwach. Draußen ist die Nacht still.",en:"He says: 'I know nothing. I am a poor fool.' The light of the lamp is weak. Outside, the night is still."}],
gloss:{Gelehrter:"scholar",müde:"tired",Zimmer:"room",eng:"cramped, narrow",viele:"many",glücklich:"happy",nichts:"nothing",Lampe:"lamp",draußen:"outside"}},
{id:"t2",level:1,week:2,title:"Eine Nacht in Weimar",sub:"V2 word order, accusative, numbers",paras:[
{de:"Heute ist Montag. Ich bin in Weimar. Die Stadt ist klein und schön. Am Morgen trinke ich Kaffee und lese die Zeitung.",en:"Today is Monday. I am in Weimar. The town is small and beautiful. In the morning I drink coffee and read the newspaper."},
{de:"Am Abend besuche ich das Haus von Goethe. Das Haus hat viele Zimmer. In einem Zimmer steht ein Schreibtisch. Dort schrieb Goethe den Faust.",en:"In the evening I visit Goethe's house. The house has many rooms. In one room stands a desk. There Goethe wrote Faust."},
{de:"Ich kaufe ein Buch. Das Buch heißt „Faust“. Es hat zwei Teile. Ich lese den ersten Teil in drei Monaten.",en:"I buy a book. The book is called 'Faust'. It has two parts. I will read the first part in three months."}],
gloss:{Montag:"Monday",Zeitung:"newspaper",besuche:"visit",Schreibtisch:"desk",schrieb:"wrote (past)",kaufe:"buy",Teile:"parts",ersten:"first",Monaten:"months"}},
{id:"t3",level:2,week:3,title:"Mephistos Besuch",sub:"Dative, prepositions, modal verbs",paras:[
{de:"Ein Hund läuft durch das Feld. Es ist ein schwarzer Pudel. Faust geht mit seinem Freund Wagner nach Hause. Der Hund folgt ihnen.",en:"A dog runs through the field. It is a black poodle. Faust goes home with his friend Wagner. The dog follows them."},
{de:"Im Studierzimmer will Faust die Bibel übersetzen. Aber der Pudel ist unruhig. Er wird groß, dann größer. Faust kann es nicht glauben.",en:"In the study Faust wants to translate the Bible. But the poodle is restless. It grows large, then larger. Faust cannot believe it."},
{de:"Aus dem Nebel tritt ein Mann. Er trägt die Kleidung eines Studenten. „Wer bist du?“, fragt Faust. Der Fremde lächelt und antwortet ihm nicht sofort.",en:"Out of the mist steps a man. He wears the clothes of a student. 'Who are you?' asks Faust. The stranger smiles and does not answer him immediately."}],
gloss:{läuft:"runs",Feld:"field",folgt:"follows",Bibel:"Bible",unruhig:"restless",größer:"larger",tritt:"steps",Kleidung:"clothing",Fremde:"stranger",lächelt:"smiles",sofort:"immediately"}},
{id:"t4",level:2,week:4,title:"Wer war Goethe?",sub:"Perfekt and Präteritum side by side",paras:[
{de:"Johann Wolfgang von Goethe wurde 1749 in Frankfurt geboren. Sein Vater war Jurist. Goethe studierte Jura in Leipzig und Straßburg, aber er interessierte sich mehr für Literatur.",en:"Johann Wolfgang von Goethe was born in 1749 in Frankfurt. His father was a lawyer. Goethe studied law in Leipzig and Strasbourg, but he was more interested in literature."},
{de:"Mit 25 Jahren hat er den Roman „Die Leiden des jungen Werthers“ geschrieben. Das Buch hat ihn in ganz Europa berühmt gemacht.",en:"At 25 he wrote the novel 'The Sorrows of Young Werther'. The book made him famous in all of Europe."},
{de:"1775 ging er nach Weimar. Dort lebte er fast sechzig Jahre. An „Faust“ arbeitete er sein ganzes Leben lang. Den ersten Teil veröffentlichte er 1808, den zweiten Teil vollendete er kurz vor seinem Tod im Jahr 1832.",en:"In 1775 he went to Weimar. There he lived almost sixty years. He worked on 'Faust' his whole life. He published the first part in 1808; he completed the second part shortly before his death in 1832."}],
gloss:{geboren:"born",Jurist:"lawyer",studierte:"studied",Jura:"law",Roman:"novel",Leiden:"sorrows",berühmt:"famous",fast:"almost",arbeitete:"worked",veröffentlichte:"published",vollendete:"completed"}},
{id:"t5",level:3,week:6,title:"Warum Faust zweifelt",sub:"Subordinate and relative clauses",paras:[
{de:"Faust ist ein Mann, der alles gelernt hat, was man lernen kann. Er hat Philosophie, Jura, Medizin und Theologie studiert. Trotzdem fühlt er, dass er nichts wirklich weiß.",en:"Faust is a man who has learned everything that can be learned. He has studied philosophy, law, medicine and theology. Nevertheless he feels that he really knows nothing."},
{de:"Weil die Bücher ihm keine Antwort geben, wendet er sich der Magie zu. Er hofft, dass die Geister ihm zeigen, was die Welt im Innersten zusammenhält.",en:"Because the books give him no answer, he turns to magic. He hopes that the spirits will show him what holds the world together at its core."},
{de:"Als der Erdgeist erscheint, ist Faust erschrocken. Der Geist sagt ihm, dass er ihm nicht gleicht. Faust, der sich für groß gehalten hat, bleibt allein zurück.",en:"When the Earth Spirit appears, Faust is frightened. The spirit tells him that he does not resemble him. Faust, who had thought himself great, is left behind alone."}],
gloss:{gelernt:"learned",trotzdem:"nevertheless",wirklich:"really",Antwort:"answer",wendet:"turns",hofft:"hopes",zeigen:"show",erscheint:"appears",erschrocken:"frightened",gleicht:"resembles",gehalten:"held, considered"}},
{id:"t6",level:3,week:7,title:"Die Wette",sub:"Genitive, adjective endings, Konjunktiv",paras:[
{de:"Mephistopheles bietet Faust einen Vertrag an. Er will Fausts Diener auf der Erde sein. Dafür soll Faust nach dem Tod sein Diener in der Hölle werden.",en:"Mephistopheles offers Faust a contract. He wants to be Faust's servant on earth. In return, Faust is to become his servant in hell after death."},
{de:"Faust lacht über dieses alte Angebot. Er glaubt nicht, dass der Teufel ihm je einen Augenblick wirklicher Zufriedenheit schenken könnte. Deshalb schlägt er eine Wette vor.",en:"Faust laughs at this old offer. He does not believe that the devil could ever give him a moment of real contentment. So he proposes a bet."},
{de:"Wenn er je zu einem Augenblick sagen würde: „Verweile doch, du bist so schön“, dann hätte Mephisto gewonnen. Mephisto nimmt die Wette an. Faust unterschreibt mit einem Tropfen seines eigenen Blutes.",en:"If he should ever say to a moment: 'Stay a while, you are so beautiful', then Mephisto would have won. Mephisto accepts the bet. Faust signs with a drop of his own blood."}],
gloss:{bietet:"offers",Vertrag:"contract",Diener:"servant",Angebot:"offer",je:"ever",Zufriedenheit:"contentment",schenken:"to give (as a gift)",deshalb:"therefore",vorschlagen:"to propose",gewonnen:"won",unterschreibt:"signs",Tropfen:"drop",Blutes:"blood (gen.)"}},
{id:"t7",level:4,week:9,title:"Gretchen",sub:"Passive, participles, complex sentences",paras:[
{de:"Auf der Straße wird Faust von einem einfachen Mädchen bezaubert, das gerade aus der Kirche kommt. Margarete, von allen Gretchen genannt, ist vierzehn Jahre alt und lebt bei ihrer strengen Mutter.",en:"On the street Faust is enchanted by a simple girl who is just coming from church. Margarete, called Gretchen by everyone, is fourteen years old and lives with her strict mother."},
{de:"Mit Hilfe des Teufels und der Nachbarin Marthe wird eine Begegnung im Garten arrangiert. Das Mädchen, das noch nie geliebt worden ist, verliert sein Herz an den gelehrten Fremden.",en:"With the help of the devil and the neighbour Marthe, a meeting in the garden is arranged. The girl, who has never been loved, loses her heart to the learned stranger."},
{de:"Die Geschichte, die so zärtlich beginnt, endet in einer Katastrophe: Die Mutter stirbt an einem Schlaftrunk, der Bruder wird im Duell getötet, und Gretchen, von allen verlassen, wartet im Kerker auf ihre Hinrichtung.",en:"The story, which begins so tenderly, ends in catastrophe: the mother dies from a sleeping potion, the brother is killed in a duel, and Gretchen, abandoned by all, waits in the dungeon for her execution."}],
gloss:{bezaubert:"enchanted",gerade:"just now",Kirche:"church",streng:"strict",Nachbarin:"neighbour (f.)",Begegnung:"encounter",arrangiert:"arranged",verliert:"loses",zärtlich:"tender",Schlaftrunk:"sleeping draught",getötet:"killed",verlassen:"abandoned",Hinrichtung:"execution"}},
{id:"t8",level:4,week:11,title:"Der Knittelvers",sub:"Reading about the verse form you will meet",paras:[
{de:"Goethe schrieb den größten Teil des Faust in einem alten deutschen Versmaß, dem Knittelvers. Jede Zeile hat vier Hebungen, also vier betonte Silben, aber die Zahl der unbetonten Silben dazwischen ist frei.",en:"Goethe wrote most of Faust in an old German metre, the Knittelvers. Each line has four stresses, that is four stressed syllables, but the number of unstressed syllables between them is free."},
{de:"Dadurch klingt der Vers holprig und lebendig wie gesprochene Sprache. Die Zeilen reimen sich paarweise: Tor – zuvor, gar – Jahr. Diese Form war im 16. Jahrhundert bei Hans Sachs beliebt und wirkte zu Goethes Zeit altmodisch und volkstümlich.",en:"As a result the verse sounds bumpy and alive like spoken language. The lines rhyme in pairs: Tor – zuvor, gar – Jahr. This form was popular in the 16th century with Hans Sachs and seemed old-fashioned and folksy in Goethe's time."},
{de:"Wenn Faust ernster oder leidenschaftlicher spricht, wechselt Goethe oft in den freieren Madrigalvers mit wechselnder Zeilenlänge. Die Form des Verses sagt dem Leser, in welcher Stimmung die Figur ist, noch bevor er die Worte versteht.",en:"When Faust speaks more seriously or passionately, Goethe often switches to the freer madrigal verse with varying line lengths. The form of the verse tells the reader what mood the character is in, even before he understands the words."}],
gloss:{Versmaß:"metre",Hebungen:"stresses (lifts)",betonte:"stressed",Silben:"syllables",dazwischen:"in between",holprig:"bumpy",lebendig:"lively",reimen:"rhyme",paarweise:"in pairs",Jahrhundert:"century",beliebt:"popular",altmodisch:"old-fashioned",volkstümlich:"folksy",leidenschaftlich:"passionate",wechselt:"switches",Stimmung:"mood"}},
{id:"t9",level:5,week:12,title:"Was Faust uns heute sagt",sub:"Essay level: abstraction, nominalisation, long sentences",paras:[
{de:"Dass ein Werk, das vor über zweihundert Jahren vollendet wurde, noch immer auf den Bühnen der Welt gespielt wird, erklärt sich nicht allein aus seiner Sprache. Faust verkörpert ein Verlangen, das wir alle kennen: die Weigerung, sich mit dem Erreichbaren zufriedenzugeben.",en:"That a work completed more than two hundred years ago is still performed on the world's stages cannot be explained by its language alone. Faust embodies a desire we all know: the refusal to be content with what is attainable."},
{de:"Der Herr nennt dieses Streben den Beweis, dass der Mensch, so sehr er auch irren mag, des rechten Weges im Grunde bewusst bleibt. Mephisto dagegen sieht darin nur die Lächerlichkeit eines Wesens, das sich für mehr hält, als es ist.",en:"The Lord calls this striving the proof that man, however much he may err, remains at bottom aware of the right path. Mephisto, by contrast, sees in it only the absurdity of a creature that thinks itself more than it is."},
{de:"Wer das Stück liest, muss sich entscheiden, welcher der beiden recht hat – und entdeckt dabei, dass die Frage unbeantwortet bleibt, weil Goethe sie nicht für uns beantworten wollte.",en:"Whoever reads the play must decide which of the two is right, and discovers in doing so that the question remains unanswered, because Goethe did not want to answer it for us."}],
gloss:{Werk:"work",Bühnen:"stages",verkörpert:"embodies",Weigerung:"refusal",Erreichbaren:"the attainable",zufriedengeben:"to be content with",Beweis:"proof",Grunde:"at bottom",dagegen:"by contrast",Lächerlichkeit:"absurdity",entscheiden:"decide",entdeckt:"discovers",unbeantwortet:"unanswered"}}
];
// ---- FAUST EXCERPTS (Goethe, Faust I, 1808 — public domain). {id, week, title, scene, speaker, lines:[[de,en]], note, gloss}
const FAUST = [
{id:"f1",week:2,title:"Da steh ich nun",scene:"Nacht",speaker:"Faust",note:"The opening monologue. Knittelvers, rhymed in pairs (Tor/zuvor, gar/Jahr). Note the dropped subject 'ich' in line 1 and the apocope hab/steh.",lines:[
["Habe nun, ach! Philosophie,","I have now, alas, philosophy,"],
["Juristerei und Medizin,","law and medicine,"],
["Und leider auch Theologie","and unfortunately theology too,"],
["Durchaus studiert, mit heißem Bemühn.","studied thoroughly, with burning effort."],
["Da steh ich nun, ich armer Tor!","Here I stand now, poor fool that I am,"],
["Und bin so klug als wie zuvor;","and am as clever as before;"],
["Heiße Magister, heiße Doktor gar,","I am called Master, called Doctor even,"],
["Und ziehe schon an die zehen Jahr","and for nearly ten years now I drag"],
["Herauf, herab und quer und krumm","up, down, crosswise and crooked"],
["Meine Schüler an der Nase herum –","my students around by the nose –"],
["Und sehe, daß wir nichts wissen können!","and see that we can know nothing!"],
["Das will mir schier das Herz verbrennen.","That almost burns my heart out."]],
gloss:{Juristerei:"law (mock-formal)",Bemühn:"effort (Bemühen)",durchaus:"thoroughly",Tor:"fool",zuvor:"before",heiße:"am called",Magister:"master's title",gar:"even",zehen:"ten (old form of zehn)",herauf:"up",herab:"down",quer:"crosswise",krumm:"crooked",Schüler:"students",Nase:"nose",schier:"almost",verbrennen:"burn up"}},
{id:"f2",week:5,title:"Drum hab ich mich der Magie ergeben",scene:"Nacht",speaker:"Faust",note:"Why Faust turns to magic. Watch the subordinate clauses with daß and ob; the verbs sit at the ends.",lines:[
["Drum hab ich mich der Magie ergeben,","Therefore I have given myself to magic,"],
["Ob mir durch Geistes Kraft und Mund","to see whether, through a spirit's power and mouth,"],
["Nicht manch Geheimnis würde kund;","many a secret might not be revealed to me;"],
["Daß ich nicht mehr mit saurem Schweiß","so that I no longer, with sour sweat,"],
["Zu sagen brauche, was ich nicht weiß;","need to say what I do not know;"],
["Daß ich erkenne, was die Welt","so that I perceive what the world"],
["Im Innersten zusammenhält,","holds together at its innermost core,"],
["Schau alle Wirkenskraft und Samen,","behold all active force and seed,"],
["Und tu nicht mehr in Worten kramen.","and rummage no more in words."]],
gloss:{drum:"therefore",ergeben:"devoted (myself)",Magie:"magic",ob:"whether",Mund:"mouth",manch:"many a",Geheimnis:"secret",kund:"known, revealed",saurem:"sour (dat.)",Schweiß:"sweat",brauche:"need",erkenne:"perceive",Innersten:"innermost",Wirkenskraft:"active force",Samen:"seed",kramen:"rummage"}},
{id:"f3",week:6,title:"Es irrt der Mensch",scene:"Prolog im Himmel",speaker:"Der Herr & Mephistopheles",note:"The Lord's verdict on humanity, and Mephisto's cheeky farewell. 'Es irrt der Mensch' = dummy es + inverted subject. 'des rechten Weges bewußt' = genitive object.",lines:[
["Es irrt der Mensch, so lang er strebt.","Man errs as long as he strives."],
["Ein guter Mensch in seinem dunklen Drange","A good man in his dark urging"],
["Ist sich des rechten Weges wohl bewußt.","is well aware of the right path."],
["— —","— —"],
["Von Zeit zu Zeit seh ich den Alten gern,","From time to time I like to see the Old Man,"],
["Und hüte mich, mit ihm zu brechen.","and take care not to break with him."],
["Es ist gar hübsch von einem großen Herrn,","It is quite nice of a great lord"],
["So menschlich mit dem Teufel selbst zu sprechen.","to speak so humanely with the devil himself."]],
gloss:{irrt:"errs",strebt:"strives",Drange:"urge (dat.)",bewußt:"aware",Alten:"the Old Man (God)",hüte:"take care",brechen:"to break",hübsch:"nice",Herrn:"lord (dat.)",menschlich:"humane"}},
{id:"f4",week:7,title:"Der Geist, der stets verneint",scene:"Studierzimmer",speaker:"Mephistopheles",note:"Mephisto defines himself. 'Ein Teil von jener Kraft' and 'Ich bin der Geist' are the two most quoted self-descriptions in German literature. Note Konjunktiv II: wär's, entstünde.",lines:[
["Ein Teil von jener Kraft,","A part of that power"],
["Die stets das Böse will und stets das Gute schafft.","which always wills evil and always creates good."],
["— —","— —"],
["Ich bin der Geist, der stets verneint!","I am the spirit that always negates!"],
["Und das mit Recht; denn alles, was entsteht,","And rightly so; for everything that comes into being"],
["Ist wert, daß es zugrunde geht;","deserves to perish;"],
["Drum besser wär's, daß nichts entstünde.","so it would be better if nothing came to be."],
["So ist denn alles, was ihr Sünde,","Thus everything that you call sin,"],
["Zerstörung, kurz, das Böse nennt,","destruction, in short, evil,"],
["Mein eigentliches Element.","is my proper element."]],
gloss:{jener:"that",stets:"always",schafft:"creates",verneint:"negates",Recht:"right",entsteht:"comes into being",wert:"worth",zugrunde:"to ruin",entstünde:"would come into being",Zerstörung:"destruction",eigentliches:"proper, actual",Element:"element"}},
{id:"f5",week:8,title:"Die Wette",scene:"Studierzimmer II",speaker:"Faust",note:"The wager. Verb-first conditional (Werd ich... sagen = Wenn ich sagen werde), then Konjunktiv I exhortations: mag, sei.",lines:[
["Werd ich zum Augenblicke sagen:","If I ever say to the moment:"],
["Verweile doch! du bist so schön!","Stay a while! you are so beautiful!"],
["Dann magst du mich in Fesseln schlagen,","then you may clap me in chains,"],
["Dann will ich gern zugrunde gehn!","then I will gladly perish!"],
["Dann mag die Totenglocke schallen,","Then let the death knell sound,"],
["Dann bist du deines Dienstes frei,","then you are free of your service,"],
["Die Uhr mag stehn, der Zeiger fallen,","let the clock stop, the hand fall,"],
["Es sei die Zeit für mich vorbei!","let time be over for me!"]],
gloss:{Augenblicke:"moment (dat. -e)",verweile:"linger, stay",Fesseln:"chains",schlagen:"strike, clap",zugrunde:"to ruin",Totenglocke:"death knell",schallen:"resound",Dienstes:"service (gen.)",Uhr:"clock",Zeiger:"clock hand",vorbei:"over"}},
{id:"f6",week:9,title:"Hier bin ich Mensch",scene:"Vor dem Tor",speaker:"Faust",note:"The Easter walk. Preposed genitive (des Frühlings holden Blick), old dative (im Tale), Präteritum zog. Madrigal verse, lines of varying length.",lines:[
["Vom Eise befreit sind Strom und Bäche","Freed from ice are river and brooks"],
["Durch des Frühlings holden, belebenden Blick;","by spring's lovely, life-giving gaze;"],
["Im Tale grünet Hoffnungsglück;","in the valley hope's happiness turns green;"],
["Der alte Winter, in seiner Schwäche,","old winter, in his weakness,"],
["Zog sich in rauhe Berge zurück.","withdrew into rough mountains."],
["— —","— —"],
["Zufrieden jauchzet groß und klein:","Contentedly great and small rejoice:"],
["Hier bin ich Mensch, hier darf ich's sein!","Here I am human, here I may be so!"]],
gloss:{Eise:"ice (dat. -e)",befreit:"freed",Strom:"river",Bäche:"brooks",Frühlings:"spring (gen.)",holden:"lovely",belebenden:"life-giving",Blick:"gaze",Tale:"valley (dat. -e)",grünet:"turns green",Hoffnungsglück:"hope-happiness",Schwäche:"weakness",zog:"withdrew (ziehen)",rauhe:"rough",zurück:"back",zufrieden:"content",jauchzet:"rejoices"}},
{id:"f7",week:10,title:"Zwei Seelen",scene:"Vor dem Tor",speaker:"Faust",note:"The divided self. Reflexive 'sich trennen', participle adjectives (klammernden), the archaic Dust (= Dunst).",lines:[
["Zwei Seelen wohnen, ach! in meiner Brust,","Two souls dwell, alas, in my breast,"],
["Die eine will sich von der andern trennen;","the one wants to part from the other;"],
["Die eine hält, in derber Liebeslust,","the one clings, in coarse love-lust,"],
["Sich an die Welt mit klammernden Organen;","to the world with grasping organs;"],
["Die andre hebt gewaltsam sich vom Dust","the other lifts itself forcibly from the dust"],
["Zu den Gefilden hoher Ahnen.","to the fields of lofty ancestors."]],
gloss:{Seelen:"souls",wohnen:"dwell",Brust:"breast",trennen:"to separate",derber:"coarse (dat. fem.)",Liebeslust:"love-desire",klammernden:"clinging",Organen:"organs",andre:"other",hebt:"lifts",gewaltsam:"forcibly",Dust:"dust/haze",Gefilden:"fields, realms",Ahnen:"ancestors"}},
{id:"f8",week:11,title:"Im Anfang war die Tat",scene:"Studierzimmer",speaker:"Faust",note:"Faust translates John 1:1 and rejects Wort, Sinn and Kraft in turn. Impersonal 'Geschrieben steht', modal bracket 'muß... übersetzen'.",lines:[
["Geschrieben steht: „Im Anfang war das Wort!“","It is written: 'In the beginning was the Word!'"],
["Hier stock ich schon! Wer hilft mir weiter fort?","Here I stall already! Who helps me onward?"],
["Ich kann das Wort so hoch unmöglich schätzen,","I cannot possibly rate the Word so high,"],
["Ich muß es anders übersetzen,","I must translate it differently,"],
["Wenn ich vom Geiste recht erleuchtet bin.","if I am rightly enlightened by the spirit."],
["Geschrieben steht: Im Anfang war der Sinn.","It is written: In the beginning was the Mind."],
["— —","— —"],
["Mir hilft der Geist! Auf einmal seh ich Rat","The spirit helps me! Suddenly I see counsel"],
["Und schreibe getrost: Im Anfang war die Tat!","and write with confidence: In the beginning was the Deed!"]],
gloss:{geschrieben:"written",Anfang:"beginning",stock:"stall (stocken)",fort:"onward",unmöglich:"impossibly",schätzen:"to value",übersetzen:"translate",Geiste:"spirit (dat. -e)",erleuchtet:"enlightened",Sinn:"mind, meaning",Rat:"counsel",getrost:"confidently",Tat:"deed"}},
{id:"f9",week:12,title:"Meine Ruh ist hin",scene:"Gretchens Stube",speaker:"Gretchen",note:"Gretchen at the spinning wheel. Two-stress lines, dative of experience (ist mir das Grab, ist mir vergällt), poetic nimmer / nimmermehr.",lines:[
["Meine Ruh ist hin,","My peace is gone,"],
["Mein Herz ist schwer;","my heart is heavy;"],
["Ich finde sie nimmer","I shall find it never"],
["Und nimmermehr.","and nevermore."],
["Wo ich ihn nicht hab,","Where I do not have him"],
["Ist mir das Grab,","is the grave to me,"],
["Die ganze Welt","the whole world"],
["Ist mir vergällt.","is embittered for me."],
["Mein armer Kopf","My poor head"],
["Ist mir verrückt,","is deranged,"],
["Mein armer Sinn","my poor mind"],
["Ist mir zerstückt.","is torn to pieces."]],
gloss:{Ruh:"peace (Ruhe)",hin:"gone",schwer:"heavy",nimmer:"never",nimmermehr:"nevermore",Grab:"grave",vergällt:"embittered",verrückt:"deranged",zerstückt:"torn to pieces"}},
{id:"f10",week:13,title:"Gefühl ist alles",scene:"Marthens Garten",speaker:"Gretchen & Faust",note:"The Gretchenfrage. Faust's answer is in madrigal verse with no fixed metre. Elision: hast du's; the participle umnebelnd used as adverb.",lines:[
["Nun sag, wie hast du's mit der Religion?","Now tell me, how do you stand with religion?"],
["Du bist ein herzlich guter Mann,","You are a thoroughly good man,"],
["Allein ich glaub, du hältst nicht viel davon.","only I think you don't hold much to it."],
["— —","— —"],
["Wer darf ihn nennen?","Who may name him?"],
["Und wer bekennen:","And who confess:"],
["Ich glaub ihn?","I believe in him?"],
["— —","— —"],
["Gefühl ist alles;","Feeling is everything;"],
["Name ist Schall und Rauch,","name is sound and smoke,"],
["Umnebelnd Himmelsglut.","befogging heaven's glow."]],
gloss:{Religion:"religion",herzlich:"thoroughly, heartily",allein:"only, but",hältst:"hold (halten von = think of)",davon:"of it",nennen:"to name",bekennen:"to confess",Gefühl:"feeling",Schall:"sound",Rauch:"smoke",umnebelnd:"befogging",Himmelsglut:"heaven's glow"}}
];
// ---- VERSE primer (html)
const VERSE_NOTES = `
<h3>Knittelvers</h3>
<p>Four stresses per line, any number of unstressed syllables between them, rhymed in pairs. Say the stresses out loud and let the rest tumble:</p>
<p class="de" style="font-family:var(--display);font-size:1.15rem">Da <b class="g">steh</b> ich <b class="g">nun</b>, ich <b class="g">ar</b>mer <b class="g">Tor</b>! / Und <b class="g">bin</b> so <b class="g">klug</b> als <b class="g">wie</b> zu<b class="g">vor</b>;</p>
<h3>Madrigalvers</h3>
<p>Free line lengths (2–6 stresses), free rhyme scheme, iambic pulse. Goethe switches to it when the emotion rises (Vor dem Tor, the wager).</p>
<h3>Reading aloud</h3>
<ol><li>Mark the four stresses with a pencil before you read.</li><li>Read the pair of rhymed lines as one breath.</li><li>Shadow: play the line (🔊), then say it immediately after, matching the rhythm. Three repetitions per line.</li><li>Only then look at the translation.</li></ol>
<h3>Rhyme as a dictionary</h3>
<p>If you know one rhyme word you can often guess the other: <span class="de">Tor/zuvor, gar/Jahr, krumm/herum, Zweifel/Teufel, Element/nennt</span>. Rhyme pairs are also the easiest lines to memorise, and memorised lines are the fastest way to internalise German word order.</p>`;
// ---- 90-day plan: week → theme + what to open
const WEEKS13 = [
{n:1,theme:"Laute, Artikel, sein & haben",goal:"Say any word aloud; 120 words in the deck.",gram:["g1","g2"],texts:["t1"],faust:[],med:["m1"]},
{n:2,theme:"Präsens & V2 — the verb is second",goal:"Build simple sentences; read Text 2; meet Faust's first lines.",gram:["g3","g4"],texts:["t2"],faust:["f1"],med:["m1","m2"]},
{n:3,theme:"Dativ & Präpositionen",goal:"Recognise every preposition in a sentence; 300 words.",gram:["g5","g6"],texts:["t3"],faust:["f1"],med:["m2","m3"]},
{n:4,theme:"Modalverben, trennbare Verben, Perfekt",goal:"Read the Satzklammer without stumbling.",gram:["g7","g8","g9"],texts:["t4"],faust:["f1"],med:["m3","m4"]},
{n:5,theme:"Präteritum — the tense of books",goal:"Instantly recognise the 24 strong past forms.",gram:["g10"],texts:["t4"],faust:["f2"],med:["m4","m5"]},
{n:6,theme:"Nebensätze, Relativsätze, Genitiv",goal:"Find the verb at the end of any clause.",gram:["g11","g12"],texts:["t5"],faust:["f3"],med:["m5","m6"]},
{n:7,theme:"Adjektivendungen & Steigerung",goal:"Read Text 6 and Mephisto's self-portrait.",gram:["g13"],texts:["t6"],faust:["f4"],med:["m6","m7"]},
{n:8,theme:"Konjunktiv I & II",goal:"Wishes, conditions, 'let it be' — the wager.",gram:["g14","g15"],texts:["t6"],faust:["f5"],med:["m7","m8"]},
{n:9,theme:"Passiv & Partizipien",goal:"Read Text 7 (Gretchen) and the Easter walk.",gram:["g15"],texts:["t7"],faust:["f6"],med:["m8","m9"]},
{n:10,theme:"Goethes Deutsch — the decoder",goal:"Apply the decoding routine to every Faust line.",gram:["g16"],texts:["t7"],faust:["f7"],med:["m9","m10"]},
{n:11,theme:"Vers & Rhythmus",goal:"Read Knittelvers aloud with four stresses.",gram:["g16"],texts:["t8"],faust:["f8"],med:["m10","m11"]},
{n:12,theme:"Faust lesen I",goal:"Parallel text: Nacht, Studierzimmer, Gretchen.",gram:[],texts:["t9"],faust:["f9","f1","f2","f4"],med:["m11","m12"]},
{n:13,theme:"Faust lesen II — ohne Übersetzung",goal:"Read the excerpts with translations hidden. Then open the full text.",gram:[],texts:["t9"],faust:["f10","f5","f6","f7","f8"],med:["m12"]}
];

// ---- MEDICAL VOCAB: [de, en, type, example, "med"] — merged into VOCAB at load
const MEDVOCAB = [
["die Notaufnahme","emergency department","n","Der Patient kommt in die Notaufnahme.","med"],
["der Notarzt","emergency physician (prehospital)","n","Der Notarzt wird alarmiert.","med"],
["der Rettungsdienst","ambulance service","n","Der Rettungsdienst bringt den Patienten.","med"],
["der Schockraum","resuscitation room / trauma bay","n","Schockraum-Alarm!","med"],
["die Beschwerden","complaints, symptoms","n","Welche Beschwerden haben Sie?","med"],
["die Anamnese","history (medical)","n","Ich erhebe die Anamnese.","med"],
["die Vorerkrankung","pre-existing condition","n","Haben Sie Vorerkrankungen?","med"],
["die Untersuchung","examination","n","Die körperliche Untersuchung ist unauffällig.","med"],
["die Diagnose","diagnosis","n","Die Verdachtsdiagnose lautet...","med"],
["der Verdacht","suspicion","n","Verdacht auf Lungenembolie.","med"],
["die Behandlung","treatment","n","Die Behandlung beginnt sofort.","med"],
["das Medikament","medication","n","Nehmen Sie regelmäßig Medikamente?","med"],
["die Nebenwirkung","side effect","n","Mögliche Nebenwirkungen sind Übelkeit.","med"],
["die Allergie","allergy","n","Haben Sie Allergien?","med"],
["die Unverträglichkeit","intolerance","n","Penicillin-Unverträglichkeit.","med"],
["der Schmerz","pain","n","Wo genau ist der Schmerz?","med"],
["stechend","stabbing","adj","Ein stechender Schmerz.","med"],
["drückend","pressing, dull","adj","Ein drückendes Gefühl in der Brust.","med"],
["brennend","burning","adj","Brennende Schmerzen beim Wasserlassen.","med"],
["krampfartig","cramp-like, colicky","adj","Krampfartige Bauchschmerzen.","med"],
["ausstrahlen","to radiate","v","Strahlt der Schmerz in den Arm aus?","med"],
["die Atemnot","shortness of breath, dyspnoea","n","Der Patient klagt über Atemnot.","med"],
["die Luftnot","breathlessness","n","Plötzliche Luftnot seit einer Stunde.","med"],
["der Husten","cough","n","Husten mit Auswurf.","med"],
["der Auswurf","sputum","n","Gelblicher Auswurf.","med"],
["das Fieber","fever","n","Fieber bis 39,5 °C.","med"],
["der Schüttelfrost","chills, rigors","n","Fieber mit Schüttelfrost.","med"],
["die Übelkeit","nausea","n","Übelkeit und Erbrechen.","med"],
["das Erbrechen","vomiting","n","Mehrfaches Erbrechen.","med"],
["der Durchfall","diarrhoea","n","Wässriger Durchfall seit zwei Tagen.","med"],
["die Verstopfung","constipation","n","Verstopfung seit einer Woche.","med"],
["der Schwindel","dizziness, vertigo","n","Drehschwindel beim Aufstehen.","med"],
["die Ohnmacht","fainting, syncope","n","Die Patientin wurde ohnmächtig.","med"],
["die Bewusstlosigkeit","unconsciousness","n","Kurzzeitige Bewusstlosigkeit.","med"],
["der Krampfanfall","seizure","n","Erstmaliger Krampfanfall.","med"],
["die Lähmung","paralysis","n","Halbseitige Lähmung rechts.","med"],
["das Kribbeln","tingling","n","Kribbeln in den Fingern.","med"],
["das Taubheitsgefühl","numbness (die Taubheit = deafness)","n","Taubheitsgefühl im linken Arm.","med"],
["das Herzrasen","palpitations","n","Plötzliches Herzrasen.","med"],
["das Herzstolpern","irregular heartbeat (patient term)","n","Er spürt Herzstolpern.","med"],
["der Blutdruck","blood pressure","n","Der Blutdruck ist 180/100.","med"],
["der Puls","pulse","n","Der Puls ist unregelmäßig.","med"],
["die Sättigung","saturation","n","Die Sättigung liegt bei 88 %.","med"],
["die Blutung","bleeding","n","Starke vaginale Blutung.","med"],
["die Wunde","wound","n","Eine klaffende Wunde am Unterarm.","med"],
["die Verletzung","injury","n","Verletzung durch einen Sturz.","med"],
["der Sturz","fall","n","Sturz aus zwei Metern Höhe.","med"],
["der Bruch","fracture (patient term)","n","Ist das ein Bruch?","med"],
["die Fraktur","fracture","n","Distale Radiusfraktur.","med"],
["die Prellung","contusion, bruise","n","Nur eine Prellung.","med"],
["die Verstauchung","sprain","n","Verstauchung des Sprunggelenks.","med"],
["die Schwellung","swelling","n","Schwellung und Rötung.","med"],
["die Rötung","redness","n","Rötung über dem Gelenk.","med"],
["der Ausschlag","rash","n","Juckender Ausschlag am Rumpf.","med"],
["der Juckreiz","itching","n","Starker Juckreiz.","med"],
["die Gelbsucht","jaundice","n","Gelbsucht seit einer Woche.","med"],
["der Kopf","head","n","Kopfschmerzen seit drei Tagen.","med"],
["der Hals","neck, throat","n","Halsschmerzen beim Schlucken.","med"],
["die Brust","chest","n","Brustschmerzen beim Atmen.","med"],
["der Brustkorb","thorax","n","Druck im Brustkorb.","med"],
["der Bauch","abdomen, belly","n","Bauchschmerzen rechts unten.","med"],
["der Rücken","back","n","Rückenschmerzen nach dem Heben.","med"],
["der Oberbauch","upper abdomen","n","Schmerzen im Oberbauch.","med"],
["der Unterbauch","lower abdomen","n","Schmerzen im rechten Unterbauch.","med"],
["die Flanke","flank","n","Klopfschmerz der linken Flanke.","med"],
["das Gelenk","joint","n","Das Gelenk ist geschwollen.","med"],
["der Knochen","bone","n","Der Knochen ist gebrochen.","med"],
["die Lunge","lung","n","Die Lunge ist frei.","med"],
["das Herz","heart","n","Herztöne rein und rhythmisch.","med"],
["die Leber","liver","n","Die Leber ist vergrößert.","med"],
["die Niere","kidney","n","Nierenwerte erhöht.","med"],
["die Blase","bladder","n","Die Blase ist gefüllt.","med"],
["der Darm","intestine, bowel","n","Darmgeräusche lebhaft.","med"],
["der Magen","stomach","n","Magenschmerzen nach dem Essen.","med"],
["die Galle","gall, bile; gallbladder (colloq.)","n","Gallensteine bekannt.","med"],
["das Blut","blood","n","Blut im Stuhl?","med"],
["der Stuhl","stool","n","Schwarzer Stuhl seit gestern.","med"],
["der Urin","urine","n","Blut im Urin.","med"],
["das Wasserlassen","urination","n","Brennen beim Wasserlassen.","med"],
["die Spritze","injection, syringe","n","Ich gebe Ihnen eine Spritze.","med"],
["der Zugang","IV access","n","Ich lege Ihnen einen Zugang.","med"],
["die Infusion","IV infusion","n","Sie bekommen eine Infusion.","med"],
["die Blutabnahme","blood draw","n","Wir machen eine Blutabnahme.","med"],
["die Blutentnahme","blood sampling (formal)","n","Blutentnahme erfolgt.","med"],
["das Röntgenbild","X-ray image","n","Das Röntgenbild zeigt eine Fraktur.","med"],
["röntgen","to X-ray","v","Wir röntgen den Arm.","med"],
["die Computertomographie","CT scan","n","Wir machen ein CT vom Kopf.","med"],
["der Ultraschall","ultrasound","n","Der Ultraschall zeigt freie Flüssigkeit.","med"],
["das EKG","ECG","n","Das EKG zeigt ST-Hebungen.","med"],
["die Narkose","anaesthesia","n","Die Operation erfolgt in Narkose.","med"],
["die Operation","surgery","n","Die Operation ist notwendig.","med"],
["nüchtern","fasting, sober","adj","Sind Sie nüchtern?","med"],
["die Aufnahme","admission","n","Stationäre Aufnahme empfohlen.","med"],
["die Entlassung","discharge","n","Entlassung nach Hause.","med"],
["stationär","inpatient","adj","Stationäre Behandlung.","med"],
["ambulant","outpatient","adj","Ambulante Weiterbehandlung.","med"],
["die Überweisung","referral","n","Sie bekommen eine Überweisung.","med"],
["der Hausarzt","GP, family doctor","n","Gehen Sie zu Ihrem Hausarzt.","med"],
["der Facharzt","specialist","n","Der Facharzt für Chirurgie.","med"],
["die Krankenschwester","nurse (f.)","n","Die Krankenschwester misst den Blutdruck.","med"],
["die Pflegekraft","nurse (gender-neutral)","n","Die Pflegekraft legt den Zugang.","med"],
["der Oberarzt","senior physician","n","Ich rufe den Oberarzt.","med"],
["der Chefarzt","head of department","n","Visite mit dem Chefarzt.","med"],
["der Assistenzarzt","resident","n","Ich bin Assistenzarzt in der Notaufnahme.","med"],
["die Visite","ward round","n","Die Visite ist um acht.","med"],
["der Befund","finding, result","n","Der Befund ist unauffällig.","med"],
["unauffällig","unremarkable","adj","Abdomen unauffällig.","med"],
["auffällig","abnormal, conspicuous","adj","Auffälliger Befund.","med"],
["die Vorgeschichte","history","n","In der Vorgeschichte ein Herzinfarkt.","med"],
["der Herzinfarkt","heart attack","n","Verdacht auf Herzinfarkt.","med"],
["der Schlaganfall","stroke","n","Zeichen eines Schlaganfalls.","med"],
["die Lungenentzündung","pneumonia","n","Lungenentzündung rechts.","med"],
["die Blinddarmentzündung","appendicitis","n","Verdacht auf Blinddarmentzündung.","med"],
["die Gallenkolik","biliary colic","n","Typische Gallenkolik.","med"],
["die Nierenkolik","renal colic","n","Nierenkolik links.","med"],
["die Zuckerkrankheit","diabetes (patient term)","n","Haben Sie Zucker?","med"],
["der Bluthochdruck","hypertension","n","Bekannter Bluthochdruck.","med"],
["die Schilddrüse","thyroid","n","Schilddrüsenwerte normal.","med"],
["die Vergiftung","poisoning","n","Alkoholvergiftung.","med"],
["die Verbrennung","burn","n","Verbrennung zweiten Grades.","med"],
["die Unterkühlung","hypothermia","n","Leichte Unterkühlung.","med"],
["die Schwangerschaft","pregnancy","n","Besteht eine Schwangerschaft?","med"],
["die Regelblutung","menstruation","n","Wann war die letzte Regelblutung?","med"],
["rauchen","to smoke","v","Rauchen Sie?","med"],
["die Aufklärung","informed consent discussion","n","Ich führe die Aufklärung durch.","med"],
["die Einwilligung","consent","n","Ich brauche Ihre Einwilligung.","med"],
["die Schweigepflicht","confidentiality","n","Ich unterliege der Schweigepflicht.","med"],
["sich übergeben","to vomit (patient term)","v","Haben Sie sich übergeben?","med"],
["sich hinlegen","to lie down","v","Legen Sie sich bitte hin.","med"],
["sich ausziehen","to undress","v","Machen Sie bitte den Oberkörper frei.","med"],
["einatmen","to breathe in","v","Tief einatmen, bitte.","med"],
["ausatmen","to breathe out","v","Und ausatmen.","med"],
["anhalten","to hold (breath)","v","Luft anhalten.","med"],
["drücken","to press","v","Tut es weh, wenn ich hier drücke?","med"],
["loslassen","to let go","v","Und wenn ich loslasse?","med"],
["abhören","to auscultate","v","Ich höre Sie jetzt ab.","med"],
["abtasten","to palpate","v","Ich taste den Bauch ab.","med"],
["abklopfen","to percuss","v","Ich klopfe den Rücken ab.","med"],
["der Verband","dressing, bandage","n","Wir legen einen Verband an.","med"],
["die Naht","suture","n","Die Wunde braucht eine Naht.","med"],
["nähen","to suture","v","Ich nähe die Wunde.","med"],
["der Gips","plaster cast","n","Der Arm kommt in Gips.","med"],
["die Schiene","splint","n","Wir legen eine Schiene an.","med"],
["die Tablette","tablet","n","Nehmen Sie eine Tablette morgens.","med"],
["das Zäpfchen","suppository","n","Ein Zäpfchen gegen das Fieber.","med"],
["der Tropfen","drop","n","Zehn Tropfen abends.","med"],
["die Wiedervorstellung","re-presentation, follow-up visit","n","Wiedervorstellung bei Beschwerdezunahme.","med"],
["die Krankschreibung","sick note","n","Brauchen Sie eine Krankschreibung?","med"],
["die Krankenkasse","health insurance","n","Welche Krankenkasse haben Sie?","med"],
["die Versichertenkarte","insurance card","n","Haben Sie Ihre Versichertenkarte dabei?","med"],
["der Angehörige","relative, next of kin","n","Sollen wir Angehörige benachrichtigen?","med"],
["die Patientenverfügung","advance directive","n","Gibt es eine Patientenverfügung?","med"],
["die Reanimation","resuscitation","n","Reanimation läuft seit zehn Minuten.","med"],
["der Kreislaufstillstand","cardiac arrest","n","Kreislaufstillstand beobachtet.","med"],
["die Beatmung","ventilation","n","Nichtinvasive Beatmung begonnen.","med"],
["intubieren","to intubate","v","Der Patient muss intubiert werden.","med"],
["die Sepsis","sepsis","n","Verdacht auf Sepsis.","med"],
["der Schock","shock","n","Septischer Schock.","med"],
["die Dehydratation","dehydration","n","Klinisch dehydriert.","med"],
["der Verlauf","course (of disease)","n","Verlauf unkompliziert.","med"],
["die Prognose","prognosis","n","Die Prognose ist gut.","med"],
["die Komplikation","complication","n","Ohne Komplikationen.","med"],
["akut","acute","adj","Akutes Abdomen.","med"],
["chronisch","chronic","adj","Chronische Bronchitis.","med"],
["plötzlich","sudden","adj","Plötzlich einsetzende Schmerzen.","med"],
["schleichend","insidious, gradual","adj","Schleichender Beginn.","med"],
["seit","since / for (duration)","prep","Seit wann haben Sie die Beschwerden?","med"],
["die Dauer","duration","n","Dauer der Beschwerden?","med"],
["die Stärke","intensity","n","Auf einer Skala von eins bis zehn?","med"]
];
// ---- Abbreviations used in German ER notes
const ABBR = [
["AZ / EZ","Allgemeinzustand / Ernährungszustand — general / nutritional state (e.g. 'AZ reduziert, EZ adipös')"],
["V.a.","Verdacht auf — suspected"],
["Z.n.","Zustand nach — status post, history of"],
["DD","Differentialdiagnose"],
["RR","Blutdruck (Riva-Rocci), e.g. RR 130/80"],
["HF","Herzfrequenz — heart rate"],
["AF","Atemfrequenz — respiratory rate (careful: in cardiology AF / VHF also means atrial fibrillation; write VHF for Vorhofflimmern)"],
["SpO₂","Sauerstoffsättigung"],
["Temp.","Temperatur"],
["BZ","Blutzucker — blood glucose"],
["GCS","Glasgow Coma Scale"],
["o.B.","ohne Besonderheiten / ohne Befund — unremarkable"],
["o.p.B.","ohne pathologischen Befund"],
["n.A.","nach Angabe — according to (patient)"],
["bds.","beidseits — bilateral"],
["re. / li.","rechts / links"],
["HWS / BWS / LWS","Hals- / Brust- / Lendenwirbelsäule — cervical / thoracic / lumbar spine"],
["OSG","oberes Sprunggelenk — ankle joint"],
["ACS","akutes Koronarsyndrom"],
["LAE","Lungenarterienembolie — PE"],
["TVT","tiefe Venenthrombose — DVT"],
["KHK","koronare Herzkrankheit — CAD"],
["aHT","arterielle Hypertonie"],
["DM","Diabetes mellitus"],
["pAVK","periphere arterielle Verschlusskrankheit — PAD"],
["COPD","chronisch obstruktive Lungenerkrankung"],
["HWI","Harnwegsinfekt — UTI"],
["GI","gastrointestinal"],
["SHT","Schädel-Hirn-Trauma — TBI"],
["Fx","Fraktur"],
["OP","Operation"],
["i.v. / i.m. / s.c. / p.o.","intravenös / intramuskulär / subkutan / per os"],
["ZVK","zentraler Venenkatheter"],
["DK","Dauerkatheter — urinary catheter"],
["NIV","nichtinvasive Ventilation"],
["ITS","Intensivstation — ICU"],
["ZNA","Zentrale Notaufnahme"],
["RTW / NEF","Rettungswagen / Notarzteinsatzfahrzeug"],
["Pat.","Patient / Patientin"],
["Med.","Medikation"],
["Procedere","plan / next steps (note heading)"],
["Epikrise","discharge summary narrative"],
["BE","Blutentnahme"],
["Sono","Sonographie"],
["Rö-Thorax","Röntgen-Thorax"],
["cCT","kraniale Computertomographie"],
["Labor","lab results"],
["CRP / Leukos / Krea / Trop","C-reaktives Protein / Leukozyten / Kreatinin / Troponin"]
];
// ---- MED LESSONS: {id, week, title, sub, body(html), dialog:[[who, de, en]...], quiz}
const MEDL = [
{id:"m1",week:1,title:"Begrüßung & Vorstellung",sub:"First contact: who you are, what you will do",body:`
<p>German patients expect formality: <b class="g">Sie</b>, surname, title. Introduce yourself with role and purpose in one breath.</p>
<ul><li><span class="de">Guten Tag, Frau Müller. Mein Name ist Dr. Ismail, ich bin der diensthabende Arzt in der Notaufnahme.</span></li>
<li><span class="de">Ich würde Ihnen gern ein paar Fragen stellen und Sie dann untersuchen. Ist das in Ordnung?</span></li>
<li><span class="de">Was führt Sie zu uns?</span> / <span class="de">Was kann ich für Sie tun?</span></li></ul>
<p>Soften with Konjunktiv II: <span class="de">Ich würde gern..., Könnten Sie..., Dürfte ich...</span></p>`,
dialog:[["Arzt","Guten Tag, Herr Schmidt. Mein Name ist Dr. Ismail, ich bin Arzt hier in der Notaufnahme.","Good afternoon, Mr Schmidt. My name is Dr Ismail, I am a doctor here in the emergency department."],
["Patient","Guten Tag, Herr Doktor.","Good afternoon, doctor."],
["Arzt","Was führt Sie heute zu uns?","What brings you to us today?"],
["Patient","Ich habe seit heute Morgen so ein Druckgefühl in der Brust.","Since this morning I've had this feeling of pressure in my chest."],
["Arzt","Das schauen wir uns gleich genau an. Ich stelle Ihnen zuerst ein paar Fragen, dann untersuche ich Sie. Einverstanden?","We'll look at that closely right away. First I'll ask you a few questions, then I'll examine you. Agreed?"]],
quiz:[{q:"How do you address an adult patient?",o:["du + first name","Sie + Herr/Frau + surname","ihr"],a:1,why:"Formal Sie and surname, always, unless the patient offers du."},
{q:"'Was führt Sie zu uns?' means:",o:["Who drove you here?","What brings you to us?","Where do you lead us?"],a:1,why:"Standard opening question for the chief complaint."},
{q:"Polite request form:",o:["Könnten Sie...","Kannst du...","Sie müssen..."],a:0,why:"Konjunktiv II könnten + Sie is the polite register."}]},
{id:"m2",week:2,title:"Die Anamnese — Leitsymptom",sub:"Chief complaint in SOCRATES order, in German",body:`
<p>Run the complaint through a fixed question set. Memorise these as chunks, not as grammar:</p>
<table><tr><th>Dimension</th><th>Frage</th></tr>
<tr><td>Site</td><td class="de">Wo genau tut es weh? Können Sie mit einem Finger darauf zeigen?</td></tr>
<tr><td>Onset</td><td class="de">Seit wann haben Sie die Beschwerden? Hat es plötzlich oder langsam angefangen?</td></tr>
<tr><td>Character</td><td class="de">Wie fühlt sich der Schmerz an – stechend, drückend, brennend, krampfartig?</td></tr>
<tr><td>Radiation</td><td class="de">Strahlt der Schmerz irgendwohin aus – in den Arm, den Rücken, den Kiefer?</td></tr>
<tr><td>Associated</td><td class="de">Haben Sie Begleitbeschwerden wie Übelkeit, Luftnot, Schwitzen?</td></tr>
<tr><td>Time</td><td class="de">Ist der Schmerz dauerhaft da oder kommt und geht er?</td></tr>
<tr><td>Exacerbating</td><td class="de">Gibt es etwas, das die Beschwerden besser oder schlimmer macht? Belastung? Atmung? Lage?</td></tr>
<tr><td>Severity</td><td class="de">Auf einer Skala von null bis zehn, wenn zehn der stärkste vorstellbare Schmerz ist – wie stark ist es jetzt?</td></tr></table>
<div class="tip">Patients say <span class="de">Zucker</span> for diabetes, <span class="de">Blutdruck</span> for hypertension, <span class="de">Herzstolpern</span> for palpitations, <span class="de">Kreislauf</span> for feeling faint, <span class="de">Bruch</span> for fracture. Learn both registers.</div>`,
dialog:[["Arzt","Wo genau spüren Sie das Druckgefühl?","Where exactly do you feel the pressure?"],
["Patient","Hier, mitten in der Brust. Und es zieht in den linken Arm.","Here, in the middle of the chest. And it pulls into the left arm."],
["Arzt","Seit wann genau? Hat es plötzlich angefangen?","Since when exactly? Did it start suddenly?"],
["Patient","Seit etwa zwei Stunden. Ich habe gerade die Treppe hochgetragen, da ging es los.","For about two hours. I had just carried something up the stairs, then it started."],
["Arzt","Haben Sie Luftnot, Übelkeit oder kalten Schweiß?","Do you have shortness of breath, nausea or cold sweat?"],
["Patient","Ja, ich bin ganz nass geschwitzt und mir ist übel.","Yes, I'm soaked in sweat and I feel sick."],
["Arzt","Auf einer Skala von null bis zehn – wie stark ist der Schmerz jetzt?","On a scale from zero to ten, how strong is the pain now?"],
["Patient","So eine Sieben.","About a seven."]],
quiz:[{q:"'Strahlt der Schmerz aus?' asks about:",o:["radiation","severity","onset"],a:0,why:"ausstrahlen = to radiate."},
{q:"A patient says 'Ich habe Zucker.' They mean:",o:["I ate sugar","I have diabetes","I have hypoglycaemia"],a:1,why:"Zucker is the lay term for Diabetes mellitus."},
{q:"'Seit wann' asks for:",o:["how long / since when","where","why"],a:0,why:"seit + time = since/for; note the present tense with seit."},
{q:"'krampfartig' describes:",o:["colicky pain","burning pain","dull pain"],a:0,why:"Krampf = cramp."}]},
{id:"m3",week:3,title:"Vorerkrankungen, Medikamente, Allergien, Sozialanamnese",sub:"The rest of the history as fixed chunks",body:`
<ul><li><span class="de">Sind bei Ihnen Vorerkrankungen bekannt? Herz, Lunge, Zucker, Blutdruck, Schilddrüse?</span></li>
<li><span class="de">Wurden Sie schon einmal operiert?</span></li>
<li><span class="de">Nehmen Sie regelmäßig Medikamente? Auch Blutverdünner? Haben Sie einen Medikamentenplan dabei?</span></li>
<li><span class="de">Haben Sie Allergien oder Unverträglichkeiten – gegen Medikamente, Kontrastmittel, Pflaster?</span></li>
<li><span class="de">Rauchen Sie? Wie viel? Seit wann? Trinken Sie Alkohol? Nehmen Sie Drogen?</span></li>
<li><span class="de">Gibt es in Ihrer Familie Herzerkrankungen, Krebs, Diabetes?</span></li>
<li><span class="de">Was arbeiten Sie? Wie wohnen Sie – allein, mit Familie? Brauchen Sie Hilfe im Alltag?</span></li>
<li>Women: <span class="de">Wann war Ihre letzte Regelblutung? Könnten Sie schwanger sein?</span></li></ul>
<p>Confirm: <span class="de">Habe ich das richtig verstanden: Sie nehmen...?</span></p>`,
dialog:[["Arzt","Sind bei Ihnen Vorerkrankungen bekannt?","Do you have any known pre-existing conditions?"],
["Patient","Ich habe hohen Blutdruck und seit zwei Jahren Zucker.","I have high blood pressure and diabetes for two years."],
["Arzt","Welche Medikamente nehmen Sie dafür?","Which medications do you take for that?"],
["Patient","Ramipril morgens und Metformin, zweimal am Tag. Und ASS, so eine kleine Tablette.","Ramipril in the morning and metformin twice a day. And aspirin, a small tablet."],
["Arzt","Gut. Haben Sie Allergien, zum Beispiel gegen Antibiotika oder Kontrastmittel?","Good. Do you have allergies, for example to antibiotics or contrast agents?"],
["Patient","Auf Penicillin bekomme ich Ausschlag.","Penicillin gives me a rash."],
["Arzt","Rauchen Sie?","Do you smoke?"],
["Patient","Ja, eine Schachtel am Tag, seit dreißig Jahren.","Yes, a pack a day, for thirty years."]],
quiz:[{q:"'Blutverdünner' means:",o:["blood thinner","blood test","blood transfusion"],a:0,why:"verdünnen = to thin/dilute."},
{q:"'Wurden Sie schon einmal operiert?' asks about:",o:["previous surgery","current pain","allergies"],a:0,why:"operiert werden = to be operated on (passive)."},
{q:"'Kontrastmittel' is:",o:["contrast agent","painkiller","antibiotic"],a:0,why:"Mittel = agent/means; Kontrast = contrast."}]},
{id:"m4",week:4,title:"Die körperliche Untersuchung",sub:"Commands and explanations while you examine",body:`
<p>Use imperative Sie-form (<span class="de">Verb + Sie</span>) and tell the patient what you are doing before you do it.</p>
<ul><li><span class="de">Machen Sie bitte den Oberkörper frei. Legen Sie sich bitte hin. Setzen Sie sich bitte auf.</span></li>
<li><span class="de">Ich höre jetzt Herz und Lunge ab. Bitte tief ein- und ausatmen. Luft anhalten. Weiteratmen.</span></li>
<li><span class="de">Ich taste jetzt Ihren Bauch ab. Sagen Sie mir, wenn es wehtut. Tut es hier weh? Und wenn ich loslasse?</span></li>
<li><span class="de">Folgen Sie mit den Augen meinem Finger. Lächeln Sie bitte. Drücken Sie meine Hände. Heben Sie beide Arme.</span></li>
<li><span class="de">Bewegen Sie bitte den Fuß. Spüren Sie das? Ist das Gefühl links und rechts gleich?</span></li>
<li><span class="de">Ich messe jetzt Blutdruck und Sauerstoff. Das piekst kurz.</span> (for the IV)</li></ul>
<p>Report findings in nominal style: <span class="de">Abdomen weich, kein Druckschmerz, keine Abwehrspannung, Darmgeräusche regelrecht.</span></p>`,
dialog:[["Arzt","Ich würde Sie jetzt gern untersuchen. Machen Sie bitte den Oberkörper frei.","I'd like to examine you now. Please undress your upper body."],
["Arzt","Ich höre zuerst die Lunge ab. Tief einatmen... und ausatmen. Noch einmal.","I'll listen to the lungs first. Breathe in deeply... and out. Once more."],
["Arzt","Jetzt das Herz. Bitte kurz die Luft anhalten.","Now the heart. Please hold your breath briefly."],
["Arzt","Ich drücke jetzt auf den Bauch. Tut das weh?","I'm pressing on the abdomen now. Does that hurt?"],
["Patient","Nein, das geht.","No, that's okay."],
["Arzt","Gut. Wir machen jetzt ein EKG und nehmen Blut ab. Die Schwester legt Ihnen dafür einen Zugang. Das piekst kurz.","Good. We'll do an ECG now and take blood. The nurse will put in an IV line for that. It'll sting briefly."]],
quiz:[{q:"'Luft anhalten' means:",o:["hold your breath","breathe faster","cough"],a:0,why:"anhalten = to hold/stop."},
{q:"'Abwehrspannung' is:",o:["guarding","swelling","rebound"],a:0,why:"Abwehr = defence; Spannung = tension → guarding."},
{q:"'Das piekst kurz' prepares the patient for:",o:["a needle","an X-ray","a question"],a:0,why:"pieksen = to prick."}]},
{id:"m5",week:5,title:"Patientenvorstellung an den Oberarzt",sub:"The one-minute handover, in the order German seniors expect",body:`
<p>Structure (SBAR-like, as used in Fachsprachprüfung):</p>
<ol><li><span class="de">Ich stelle Ihnen Herrn Schmidt vor, 58 Jahre alt, der sich heute um 14 Uhr wegen seit zwei Stunden bestehender, retrosternaler, in den linken Arm ausstrahlender Thoraxschmerzen vorstellte.</span></li>
<li><span class="de">Begleitend bestehen Kaltschweißigkeit und Übelkeit. Die Schmerzintensität beträgt 7 von 10.</span></li>
<li><span class="de">An Vorerkrankungen sind eine arterielle Hypertonie und ein Diabetes mellitus Typ 2 bekannt. Die Dauermedikation besteht aus Ramipril, Metformin und ASS. Es besteht eine Penicillinallergie. Nikotinabusus mit 30 Packungsjahren.</span></li>
<li><span class="de">Klinisch zeigte sich ein Patient in reduziertem Allgemeinzustand, RR 150/90, HF 98, SpO₂ 96 %, Herz und Lunge auskultatorisch unauffällig.</span></li>
<li><span class="de">Meine Verdachtsdiagnose ist ein akutes Koronarsyndrom. Differentialdiagnostisch kommen eine Lungenembolie und eine Aortendissektion in Betracht.</span></li>
<li><span class="de">Als Procedere schlage ich vor: 12-Kanal-EKG, Troponin, Monitorüberwachung, ASS und Heparin nach Rücksprache, sowie Information der Kardiologie.</span></li></ol>
<p>Verbs you will reuse: <span class="de">sich vorstellen (present), bestehen (exist), bestehen aus (consist of), sich zeigen (show), in Betracht kommen (be considered), vorschlagen (propose)</span>.</p>`,
dialog:[["Arzt","Herr Oberarzt, ich stelle Ihnen Herrn Schmidt vor, 58 Jahre, mit seit zwei Stunden bestehenden retrosternalen Thoraxschmerzen mit Ausstrahlung in den linken Arm.","Dr [Oberarzt's name], let me present Mr Schmidt, 58, with retrosternal chest pain for two hours radiating to the left arm."],
["Oberarzt","Risikofaktoren?","Risk factors?"],
["Arzt","Arterielle Hypertonie, Diabetes Typ 2, Nikotinabusus, 30 Packungsjahre.","Hypertension, type 2 diabetes, smoking, 30 pack-years."],
["Oberarzt","Und das EKG?","And the ECG?"],
["Arzt","ST-Hebungen in II, III und aVF. Ich habe die Kardiologie bereits informiert und das Herzkatheterlabor angemeldet.","ST elevations in II, III and aVF. I have already informed cardiology and booked the cath lab."],
["Oberarzt","Gut, Heparin und ASS gegeben?","Good, heparin and aspirin given?"],
["Arzt","ASS 250 mg i.v. wurde gegeben, Heparin nach Ihrer Freigabe.","Aspirin 250 mg IV is given, heparin pending your approval."]],
quiz:[{q:"'in Betracht kommen' means:",o:["to be considered","to be excluded","to be confirmed"],a:0,why:"Differentialdiagnostisch kommt X in Betracht = X is a differential."},
{q:"'Die Dauermedikation besteht aus...' uses bestehen aus =",o:["consist of","exist","insist"],a:0,why:"bestehen aus + Dat. = consist of; bestehen alone = exist."},
{q:"'Packungsjahre' =",o:["pack-years","years of packaging","years on medication"],a:0,why:"Standard smoking quantifier."}]},
{id:"m6",week:6,title:"Aufklärung & Einwilligung",sub:"Explaining a procedure and obtaining consent",body:`
<p>German law requires understandable explanation (<span class="de">Aufklärung</span>) of purpose, procedure, risks, alternatives, before consent (<span class="de">Einwilligung</span>). Pattern:</p>
<ol><li><span class="de">Ich möchte Ihnen erklären, warum wir ... empfehlen.</span></li>
<li><span class="de">Dabei wird ... Das dauert etwa ... Sie bekommen vorher ...</span></li>
<li><span class="de">Wie bei jedem Eingriff gibt es Risiken: Blutung, Infektion, ... Diese sind selten.</span></li>
<li><span class="de">Alternativ könnte man ..., allerdings ...</span></li>
<li><span class="de">Haben Sie noch Fragen? Sind Sie damit einverstanden? Dann unterschreiben Sie bitte hier.</span></li></ol>
<p>Useful: <span class="de">der Eingriff</span> (procedure), <span class="de">örtliche Betäubung</span> (local anaesthetic), <span class="de">Vollnarkose</span>, <span class="de">das Risiko / die Risiken</span>, <span class="de">selten / häufig</span>, <span class="de">notwendig / dringend</span>.</p>`,
dialog:[["Arzt","Frau Weber, Ihr Ultraschall zeigt eine Blinddarmentzündung. Wir empfehlen eine Operation noch heute.","Ms Weber, your ultrasound shows appendicitis. We recommend surgery today."],
["Patient","Muss das wirklich sein?","Does it really have to be?"],
["Arzt","Ja, sonst kann der Blinddarm platzen, und das wäre gefährlich. Die Operation erfolgt in Vollnarkose über drei kleine Schnitte und dauert etwa eine Stunde.","Yes, otherwise the appendix can burst, and that would be dangerous. The operation is done under general anaesthesia through three small incisions and takes about an hour."],
["Patient","Welche Risiken gibt es?","What are the risks?"],
["Arzt","Wie bei jeder Operation: Blutung, Infektion, Verletzung von Nachbarorganen, Narkoserisiken. Das ist alles selten. Haben Sie noch Fragen?","As with any operation: bleeding, infection, injury to neighbouring organs, anaesthetic risks. All of that is rare. Do you have any more questions?"],
["Patient","Nein. Dann machen wir das.","No. Then let's do it."],
["Arzt","Dann bräuchte ich hier Ihre Unterschrift. Ab jetzt bitte nichts mehr essen und trinken.","Then I'd need your signature here. From now on please nothing more to eat or drink."]],
quiz:[{q:"'Eingriff' means:",o:["procedure/intervention","grip","complication"],a:0,why:"der Eingriff = surgical procedure."},
{q:"'Sie müssen nüchtern bleiben' means:",o:["stay fasting","stay calm","stay awake"],a:0,why:"nüchtern = fasting (also 'sober')."},
{q:"'platzen' means:",o:["to burst","to place","to flatten"],a:0,why:"der Blinddarm kann platzen = can perforate."}]},
{id:"m7",week:7,title:"Dokumentation: Der Notaufnahme-Bericht",sub:"Nominalstil — writing like a German doctor",body:`
<p>German clinical notes avoid full sentences. Headings and nominal phrases:</p>
<pre class="mono" style="white-space:pre-wrap;font-size:.85rem;background:var(--sunk);padding:.8rem;border-radius:8px">Anamnese: 58-j. Pat., Vorstellung mit seit ca. 2 h bestehenden retrosternalen Thoraxschmerzen (NRS 7/10) mit Ausstrahlung in den li. Arm, begleitend Kaltschweißigkeit und Übelkeit. Beginn unter Belastung.
Vorerkrankungen: aHT, DM Typ 2. Z.n. Cholezystektomie 2019.
Medikation: Ramipril 5 mg 1-0-0, Metformin 1000 mg 1-0-1, ASS 100 mg 1-0-0.
Allergien: Penicillin (Exanthem).
Noxen: Nikotin 30 py, Alkohol gelegentlich.
Befund: Pat. in reduziertem AZ, adipösem EZ, wach, orientiert. RR 150/90, HF 98/min, SpO₂ 96 %, Temp. 36,8 °C. Cor: rein, rhythmisch. Pulmo: vesikuläres AG bds., keine RG. Abdomen: weich, kein DS, keine Abwehrspannung. Extremitäten: keine Ödeme, Pulse tastbar.
EKG: SR, HF 98, ST-Hebungen II, III, aVF.
Labor: Trop. hs 420 ng/l, CRP 4, Krea 0,9.
Diagnose: STEMI inferior.
Procedere: Monitorüberwachung, ASS 250 mg i.v. gegeben, Heparin 5000 IE i.v., Kardiologie informiert, Herzkatheter angemeldet. Stationäre Aufnahme ITS.</pre>
<p>Dosing scheme <span class="de">1-0-1</span> = morning-noon-evening. <span class="de">58-j.</span> = 58-jährig. Date format: 26.10.2026.</p>`,
dialog:[],
quiz:[{q:"'Z.n. Cholezystektomie' means:",o:["status post cholecystectomy","planned cholecystectomy","contraindication to cholecystectomy"],a:0,why:"Z.n. = Zustand nach."},
{q:"'Metformin 1000 mg 1-0-1' means:",o:["morning and evening","once daily","three times daily"],a:0,why:"Positions = morning-noon-evening."},
{q:"'keine RG' in Pulmo means:",o:["no crackles/rales","no breathing","no rhythm"],a:0,why:"RG = Rasselgeräusche."},
{q:"'o.B.' means:",o:["unremarkable","observe","obstruction"],a:0,why:"ohne Befund / ohne Besonderheiten."}]},
{id:"m8",week:8,title:"Schlechte Nachrichten & schwierige Gespräche",sub:"Delivering bad news, de-escalation, uncertainty",body:`
<p>SPIKES in German. Warning shot: <span class="de">Ich habe leider keine guten Nachrichten für Sie.</span> Then plain language, pause, name the emotion: <span class="de">Ich sehe, dass Sie das sehr erschreckt. Das ist verständlich.</span></p>
<ul><li><span class="de">Möchten Sie, dass jemand aus Ihrer Familie dabei ist?</span></li>
<li><span class="de">Was wissen Sie bisher über Ihre Erkrankung?</span></li>
<li><span class="de">Die Untersuchung hat gezeigt, dass ... Das bedeutet, dass ...</span></li>
<li><span class="de">Wir lassen Sie damit nicht allein. Die nächsten Schritte sind ...</span></li></ul>
<p>Angry patient: <span class="de">Ich verstehe, dass Sie verärgert sind. Die Wartezeit ist lang, weil wir zuerst die lebensbedrohlichen Fälle behandeln müssen. Ich kümmere mich jetzt um Sie.</span></p>
<p>Uncertainty: <span class="de">Zum jetzigen Zeitpunkt kann ich das noch nicht sicher sagen. Wir brauchen zuerst ...</span></p>`,
dialog:[["Arzt","Frau Keller, ich habe leider keine guten Nachrichten. Darf ich offen mit Ihnen sprechen?","Ms Keller, I'm afraid I don't have good news. May I speak openly with you?"],
["Patient","Ja, bitte.","Yes, please."],
["Arzt","Die Computertomographie hat eine Blutung im Gehirn gezeigt. Das erklärt Ihre Kopfschmerzen und die Schwäche im Arm.","The CT has shown a bleed in the brain. That explains your headache and the weakness in the arm."],
["Patient","Oh Gott. Werde ich sterben?","Oh God. Am I going to die?"],
["Arzt","Ich verstehe, dass Sie Angst haben. Die Blutung ist ernst, aber wir haben sie früh gefunden. Die Neurochirurgen schauen sich die Bilder gerade an und entscheiden, ob eine Operation nötig ist.","I understand that you're frightened. The bleed is serious, but we found it early. The neurosurgeons are looking at the images right now and deciding whether an operation is necessary."],
["Arzt","Möchten Sie, dass wir jemanden aus Ihrer Familie anrufen?","Would you like us to call someone from your family?"]],
quiz:[{q:"A 'warning shot' in German:",o:["Ich habe leider keine guten Nachrichten.","Alles in Ordnung.","Keine Sorge."],a:0,why:"Prepares the patient before the news."},
{q:"'Ich kümmere mich jetzt um Sie' means:",o:["I'll take care of you now","I'm worried about you","I'll call you later"],a:0,why:"sich kümmern um = to take care of."},
{q:"'zum jetzigen Zeitpunkt' =",o:["at this point in time","at the end","at the beginning"],a:0,why:"Formal hedge for uncertainty."}]},
{id:"m9",week:9,title:"Telefonate: Konsil, Verlegung, Übergabe",sub:"Phone calls that run the ER",body:`
<ul><li>Consult: <span class="de">Hier Ismail, Notaufnahme. Ich bräuchte ein chirurgisches Konsil für einen 45-jährigen Patienten mit akutem Abdomen, Verdacht auf Appendizitis, Sono mit freier Flüssigkeit. Könnten Sie ihn sich anschauen?</span></li>
<li>Transfer: <span class="de">Wir würden den Patienten gern zu Ihnen verlegen. Haben Sie ein freies Bett auf der Intensivstation?</span></li>
<li>Handover: <span class="de">Ich übergebe Ihnen fünf Patienten. Erstens, Koje 3: ...</span></li>
<li>Pharmacy / dose check: <span class="de">Wie ist die Dosierung von ... bei Niereninsuffizienz?</span></li>
<li>Family: <span class="de">Spreche ich mit einem Angehörigen von Herrn Schmidt? Ihr Vater ist bei uns in der Notaufnahme. Es geht ihm den Umständen entsprechend.</span></li></ul>
<p>Spelling on the phone: since 2022 the official table (DIN 5009) uses cities: <span class="de">A wie Aachen, B wie Berlin, C wie Chemnitz, D wie Düsseldorf, E wie Essen, F wie Frankfurt, G wie Goslar, H wie Hamburg, I wie Ingelheim, J wie Jena, K wie Köln, L wie Leipzig, M wie München, N wie Nürnberg, O wie Offenbach, P wie Potsdam, Q wie Quickborn, R wie Rostock, S wie Salzwedel, T wie Tübingen, U wie Unna, V wie Völklingen, W wie Wuppertal, X wie Xanten, Y wie Ypsilon, Z wie Zwickau</span>. Many colleagues still use the old names, which you must understand too: <span class="de">A wie Anton, B wie Berta, C wie Cäsar, D wie Dora, E wie Emil, F wie Friedrich, G wie Gustav, H wie Heinrich, I wie Ida, J wie Julius, K wie Kaufmann, L wie Ludwig, M wie Martha, N wie Nordpol, O wie Otto, P wie Paula, Q wie Quelle, R wie Richard, S wie Samuel, T wie Theodor, U wie Ulrich, V wie Viktor, W wie Wilhelm, X wie Xanthippe, Y wie Ypsilon, Z wie Zeppelin.</span></p>`,
dialog:[["Arzt","Guten Abend, hier Ismail aus der ZNA. Spreche ich mit dem diensthabenden Chirurgen?","Good evening, Ismail from the ER here. Am I speaking to the surgeon on call?"],
["Chirurg","Ja, Hoffmann, was gibt's?","Yes, Hoffmann, what's up?"],
["Arzt","Ich hätte einen 45-jährigen Patienten mit seit zwölf Stunden zunehmenden rechtsseitigen Unterbauchschmerzen, Druckschmerz am McBurney-Punkt, Loslassschmerz, CRP 80, Leukos 15. Sono: Appendix verdickt, freie Flüssigkeit.","I have a 45-year-old with increasing right lower quadrant pain for twelve hours, tenderness at McBurney's point, rebound, CRP 80, WBC 15. Ultrasound: thickened appendix, free fluid."],
["Chirurg","Klingt nach OP. Ist er nüchtern?","Sounds like surgery. Is he fasting?"],
["Arzt","Seit sechs Stunden. Zugang liegt, Blut ist abgenommen, Analgesie läuft.","For six hours. IV in place, bloods taken, analgesia running."],
["Chirurg","Gut, ich komme in zehn Minuten runter.","Good, I'll come down in ten minutes."]],
quiz:[{q:"'Konsil' means:",o:["consult","council","consent"],a:0,why:"ein Konsil anfordern = request a consult."},
{q:"'verlegen' means:",o:["to transfer (patient)","to misplace","to postpone"],a:0,why:"In hospital context: verlegen auf die ITS."},
{q:"'Es geht ihm den Umständen entsprechend' means:",o:["He's doing as well as can be expected","He's fine","He's getting worse"],a:0,why:"Standard non-committal reassurance."}]},
{id:"m10",week:10,title:"Fallsimulation: Luftnot",sub:"Full ER encounter, read then roleplay",body:`
<p>Read the dialogue with translations hidden. Then cover the doctor's lines and produce them yourself from the patient's answers. Finally write the Notaufnahme-Bericht in nominal style (compare with Lesson 7).</p>`,
dialog:[["Arzt","Guten Tag, Frau Bauer, Dr. Ismail. Was führt Sie zu uns?","Good afternoon, Ms Bauer, Dr Ismail. What brings you to us?"],
["Patient","Ich kriege seit gestern kaum noch Luft. Und ich huste ständig.","Since yesterday I can hardly breathe. And I'm coughing constantly."],
["Arzt","Husten Sie etwas ab? Welche Farbe hat der Auswurf?","Are you coughing anything up? What colour is the sputum?"],
["Patient","Ja, so gelb-grün. Und ich hatte Fieber, 39 Grad, mit Schüttelfrost.","Yes, sort of yellow-green. And I had a fever, 39 degrees, with chills."],
["Arzt","Haben Sie Schmerzen beim Atmen?","Do you have pain when breathing?"],
["Patient","Ja, rechts, wenn ich tief einatme, sticht es.","Yes, on the right, when I breathe in deeply, it stabs."],
["Arzt","Sind Lungenerkrankungen bei Ihnen bekannt? Rauchen Sie?","Do you have known lung disease? Do you smoke?"],
["Patient","Ich habe COPD, der Hausarzt gibt mir ein Spray. Geraucht habe ich vierzig Jahre, seit zwei Jahren nicht mehr.","I have COPD, the GP gives me an inhaler. I smoked for forty years, not for the last two."],
["Arzt","Ich höre Sie jetzt ab... Rechts unten höre ich feuchte Rasselgeräusche. Ihre Sättigung ist 89 Prozent, deshalb bekommen Sie jetzt Sauerstoff. Wir machen ein Röntgenbild der Lunge und nehmen Blut ab.","I'll listen to you now... On the lower right I hear crackles. Your saturation is 89 percent, so you'll get oxygen now. We'll take a chest X-ray and bloods."],
["Patient","Muss ich dableiben?","Do I have to stay?"],
["Arzt","Ich vermute eine Lungenentzündung. Mit Ihrer COPD und der niedrigen Sättigung würde ich Sie gern stationär aufnehmen und mit Antibiotika über die Vene behandeln. Wir sprechen gleich noch über die Einzelheiten.","I suspect pneumonia. With your COPD and the low saturation I'd like to admit you and treat with IV antibiotics. We'll discuss the details shortly."]],
quiz:[{q:"'Ich kriege kaum Luft' is the patient's way of saying:",o:["dyspnoea","cough","fever"],a:0,why:"Luft kriegen = get air; kaum = hardly."},
{q:"'feuchte Rasselgeräusche' =",o:["crackles / moist rales","wheeze","stridor"],a:0,why:"RG feucht = crackles; Giemen = wheeze."},
{q:"'über die Vene' means:",o:["intravenously","orally","by inhalation"],a:0,why:"Patient-friendly phrase for i.v."}]},
{id:"m11",week:11,title:"Fallsimulation: Sturz & Trauma",sub:"Trauma history, neuro screen, imaging, discharge",body:`
<p>Trauma questions: <span class="de">Wie sind Sie gestürzt? Aus welcher Höhe? Waren Sie bewusstlos? Können Sie sich an alles erinnern? Haben Sie sich übergeben? Nehmen Sie Blutverdünner? Können Sie den Arm bewegen?</span></p>
<p>Discharge instructions (<span class="de">Entlassung</span>): <span class="de">Kühlen, hochlagern, schonen. Bei zunehmenden Schmerzen, Taubheit, Kopfschmerzen, Erbrechen oder Verwirrtheit sofort wieder vorstellen. Kontrolle beim Hausarzt in drei Tagen.</span></p>`,
dialog:[["Arzt","Herr Lang, was ist passiert?","Mr Lang, what happened?"],
["Patient","Ich bin von der Leiter gefallen, vielleicht zwei Meter. Auf die linke Seite.","I fell off a ladder, maybe two metres. Onto my left side."],
["Arzt","Waren Sie bewusstlos? Können Sie sich an den Sturz erinnern?","Were you unconscious? Can you remember the fall?"],
["Patient","Ich glaube nicht. Ich erinnere mich an alles.","I don't think so. I remember everything."],
["Arzt","Wo tut es weh?","Where does it hurt?"],
["Patient","Das Handgelenk, und die Rippen links. Beim Atmen.","The wrist, and the ribs on the left. When breathing."],
["Arzt","Nehmen Sie Blutverdünner? Haben Sie Kopfschmerzen oder Übelkeit?","Do you take blood thinners? Do you have headache or nausea?"],
["Patient","Nein, nichts davon.","No, none of that."],
["Arzt","Wir röntgen das Handgelenk und den Brustkorb. Bis dahin bekommen Sie etwas gegen die Schmerzen.","We'll X-ray the wrist and the chest. Until then you'll get something for the pain."],
["Arzt","Das Röntgenbild zeigt einen Bruch des Handgelenks, gut stehend. Der Arm kommt in Gips. Die Rippen sind geprellt, nicht gebrochen. Sie können nach Hause.","The X-ray shows a fracture of the wrist, well aligned. The arm goes in a cast. The ribs are bruised, not broken. You can go home."],
["Arzt","Bitte den Arm hochlagern. Wenn die Finger blau werden, kribbeln oder stark anschwellen, kommen Sie sofort wieder. Kontrolle in der Unfallchirurgie in einer Woche.","Please elevate the arm. If the fingers turn blue, tingle or swell strongly, come back immediately. Follow-up in trauma surgery in one week."]],
quiz:[{q:"'Handgelenk' =",o:["wrist","ankle","elbow"],a:0,why:"Hand + Gelenk (joint)."},
{q:"'hochlagern' means:",o:["to elevate","to store","to lift weights"],a:0,why:"Standard discharge advice."},
{q:"'gut stehend' for a fracture means:",o:["well aligned","standing up","healed"],a:0,why:"Stellung = alignment."}]},
{id:"m12",week:12,title:"Fachsprachprüfung: der Ablauf",sub:"What the exam tests, and a self-test",body:`
<p>The <b>Fachsprachprüfung</b> (FSP) is the medical-language exam required for the Approbation in most German states. 60 minutes, three parts of 20 minutes:</p>
<ol><li><b>Arzt-Patienten-Gespräch</b>: take a full history from a simulated patient (lay language, Sie-form, empathy).</li>
<li><b>Dokumentation</b>: write the Anamnesebogen / Arztbrief in nominal style from your notes.</li>
<li><b>Arzt-Arzt-Gespräch</b>: present the case to an examiner-senior in medical terminology, propose DDs and Procedere, answer questions.</li></ol>
<p>Level required: B2 general German plus C1 medical. The three registers (lay ↔ doctor ↔ written) are exactly the three modes this track trains.</p>
<p>Self-test weekly: pick any dialogue in this track, hide translations, read the patient lines aloud and improvise the doctor's lines; then write the report in under 10 minutes; then present it in 2 minutes with your phone recording. Listen back.</p>
<div class="tip">Common FSP pitfalls: using Latin terms with the patient (say <span class="de">Blinddarmentzündung</span>, not Appendizitis), forgetting allergies/medication/social history, and presenting to the senior without a Verdachtsdiagnose and Procedere.</div>`,
dialog:[],
quiz:[{q:"How many parts does the FSP have?",o:["two","three","four"],a:1,why:"Patient talk, documentation, doctor-doctor talk."},
{q:"With the patient you should say:",o:["Appendizitis","Blinddarmentzündung","Appendektomie"],a:1,why:"Lay term for the patient; Latin for the colleague."},
{q:"The doctor-doctor part must end with:",o:["a Verdachtsdiagnose and Procedere","the patient's address","a joke"],a:0,why:"Examiners expect a working diagnosis, DDs and a plan."}]}
];
// ---- Patient → doctor response drill: [patient says, best doctor reply options, correct index, why]
const RESPOND = [
["Mir ist so schwindelig, wenn ich aufstehe.",["Seit wann ist das so, und dreht sich alles, oder wird Ihnen eher schwarz vor Augen?","Wann haben Sie die orthostatische Dysregulation zum ersten Mal bemerkt?","Das ist sicher der Blutdruck. Trinken Sie mehr Wasser.","Seit wann hast du das?"],0,"Characterise first (vertigo vs presyncope), in lay German. Option 2 uses a Latin term with a patient, option 3 concludes too early, option 4 uses du."],
["Ich habe Zucker und nehme da Tabletten.",["Welche Tabletten genau, und wie waren Ihre Zuckerwerte in letzter Zeit?","Haben Sie einen Diabetes mellitus Typ 2 unter oraler Antidiabetika-Therapie?","Gut, dann messen wir gleich den Zucker.","Welche Tabletten nimmst du?"],0,"Zucker = diabetes in lay speech. Ask the drug and control in the patient's words. Option 2 is correct for the chart, wrong for the patient."],
["Ich habe mich dreimal übergeben, und jetzt ist Blut dabei.",["Wie sieht das Blut aus, hellrot oder dunkel wie Kaffeesatz? Nehmen Sie Blutverdünner oder Schmerzmittel?","Hatten Sie eine Hämatemesis oder Kaffeesatzerbrechen?","Das kommt bestimmt vom vielen Erbrechen, keine Sorge.","Okay. Und sonst?"],0,"Characterise the bleeding and ask about anticoagulants and NSAIDs. Option 3 reassures before assessing; option 2 is chart language."],
["Mein Mann ist plötzlich ganz komisch, er redet unverständlich.",["Seit wann genau? Hängt ein Mundwinkel, kann er beide Arme heben?","Hat er öfter solche Phasen?","Vielleicht ist er nur müde. Wir warten erst einmal ab.","Wir machen sofort ein CCT, Verdacht auf Apoplex."],0,"FAST screen and the exact time of onset decide stroke treatment. Option 4 is right for the colleague but tells the wife nothing understandable."],
["Ich will keinen Gips, ich muss morgen arbeiten.",["Das verstehe ich. Ohne Ruhigstellung kann der Bruch aber schief zusammenwachsen. Lassen Sie uns zusammen schauen, was möglich ist.","Das müssen Sie selbst wissen.","Ohne Gips geht es nicht. Das ist medizinisch notwendig.","Ich schreibe Sie krank, dann ist das Problem gelöst."],0,"Acknowledge, explain the risk, decide together. Option 3 is correct but paternalistic; option 4 skips the real question."],
["Ich habe seit drei Tagen Brennen beim Wasserlassen.",["Müssen Sie öfter als sonst? Haben Sie Fieber, Schmerzen in der Flanke oder Blut im Urin?","Wahrscheinlich eine Zystitis. Ich gebe Ihnen ein Antibiotikum.","Haben Sie Dysurie, Pollakisurie oder Hämaturie?","Trinken Sie viel, das geht von allein weg."],0,"Ask the red flags (fever, flank pain) in lay words before treating. Option 3 asks the right things in words the patient won't understand."],
["Warum muss ich so lange warten? Ich bin seit drei Stunden hier!",["Ich verstehe, dass Sie verärgert sind. Wir behandeln zuerst die lebensbedrohlichen Fälle. Ich kümmere mich jetzt um Sie.","Andere warten noch länger.","Wenn Sie nicht warten wollen, können Sie gehen.","Entschuldigung, die Triage nach Manchester priorisiert nach Dringlichkeit."],0,"Acknowledge the feeling, explain triage simply, commit to the next step. Option 4 is true but jargon."],
["Bekomme ich eine Krankschreibung?",["Ja, ich schreibe Sie für drei Tage krank. Wenn es nicht besser wird, gehen Sie bitte zu Ihrem Hausarzt.","Ja, eine AU bis Freitag.","Das entscheidet Ihr Arbeitgeber.","Nein, aus der Notaufnahme gibt es so etwas nicht."],0,"Give the sick note with a duration and the follow-up path. „AU“ alone is jargon to many patients; the Notaufnahme can certify short incapacity."],
["Ich bin allergisch gegen alles Mögliche.",["Gegen welche Medikamente genau? Und was passiert dann, Ausschlag, Luftnot, Schwellung?","Okay, ich notiere: Allergien unbekannt.","Haben Sie eine Typ-I-Sensibilisierung?","Dann geben wir lieber gar nichts."],0,"Pin down the substance and the reaction type: a rash and anaphylaxis change treatment differently."],
["Kann ich nach Hause? Meine Kinder sind allein.",["Ich verstehe die Sorge. Gibt es jemanden, der sich heute um die Kinder kümmern kann? Ich erkläre Ihnen, warum wir Sie gern dabehalten würden.","Nein, das geht nicht.","Ja, wenn Sie unterschreiben, dass Sie gegen ärztlichen Rat gehen.","Das ist nicht mein Problem."],0,"Address the real barrier first, then explain the medical reason. Discharge against advice comes only after that conversation."]
];

// ---- ALLTAG VOCAB (daily life) — merged into VOCAB
const ALLTAGVOCAB = [
["die Wohnung","flat, apartment","n","Ich suche eine Wohnung in Berlin.","alltag"],
["die Miete","rent","n","Die Miete ist 900 Euro kalt.","alltag"],
["die Kaltmiete","rent excluding utilities","n","Kaltmiete 800, Warmmiete 1000.","alltag"],
["die Nebenkosten","utilities / service charges","n","Nebenkosten kommen dazu.","alltag"],
["die Kaution","deposit","n","Drei Monatsmieten Kaution.","alltag"],
["der Vermieter","landlord","n","Der Vermieter will eine Schufa-Auskunft.","alltag"],
["der Mietvertrag","lease","n","Ich unterschreibe den Mietvertrag.","alltag"],
["die Besichtigung","viewing","n","Die Besichtigung ist um 18 Uhr.","alltag"],
["die Anmeldung","registration (of address)","n","Die Anmeldung beim Bürgeramt ist Pflicht.","alltag"],
["das Bürgeramt","citizens' office","n","Ich habe einen Termin im Bürgeramt.","alltag"],
["der Termin","appointment","n","Haben Sie einen Termin?","alltag"],
["das Formular","form","n","Füllen Sie bitte das Formular aus.","alltag"],
["ausfüllen","to fill in","v","Bitte vollständig ausfüllen.","alltag"],
["unterschreiben","to sign","v","Hier bitte unterschreiben.","alltag"],
["die Unterschrift","signature","n","Ihre Unterschrift fehlt.","alltag"],
["der Ausweis","ID card","n","Ihren Ausweis, bitte.","alltag"],
["der Reisepass","passport","n","Mein Reisepass ist abgelaufen.","alltag"],
["die Aufenthaltserlaubnis","residence permit","n","Ich beantrage eine Aufenthaltserlaubnis.","alltag"],
["beantragen","to apply for","v","Ich beantrage die Approbation.","alltag"],
["der Antrag","application","n","Der Antrag ist in Bearbeitung.","alltag"],
["die Bescheinigung","certificate, confirmation","n","Ich brauche eine Bescheinigung.","alltag"],
["die Behörde","authority, public office","n","Die Behörde ist montags geschlossen.","alltag"],
["die Krankenkasse","health insurance fund","n","Ich bin bei der TK versichert.","alltag"],
["die Versicherung","insurance","n","Haftpflichtversicherung ist wichtig.","alltag"],
["das Konto","bank account","n","Ich eröffne ein Konto.","alltag"],
["überweisen","to transfer (money)","v","Ich überweise die Miete.","alltag"],
["die Überweisung","bank transfer; referral","n","Die Überweisung dauert einen Tag.","alltag"],
["der Dauerauftrag","standing order","n","Ich richte einen Dauerauftrag ein.","alltag"],
["die Gehaltsabrechnung","payslip","n","Die Gehaltsabrechnung kommt per Post.","alltag"],
["das Gehalt","salary","n","Das Gehalt wird Ende des Monats gezahlt.","alltag"],
["brutto / netto","gross / net","adj","Brutto 5000, netto 3100.","alltag"],
["die Steuer","tax","n","Die Lohnsteuer wird abgezogen.","alltag"],
["der Vertrag","contract","n","Der Vertrag läuft zwei Jahre.","alltag"],
["kündigen","to cancel, give notice","v","Ich kündige den Handyvertrag.","alltag"],
["die Kündigungsfrist","notice period","n","Drei Monate Kündigungsfrist.","alltag"],
["der Supermarkt","supermarket","n","Ich gehe zum Supermarkt.","alltag"],
["die Bäckerei","bakery","n","Die Bäckerei öffnet um sechs.","alltag"],
["das Brötchen","bread roll","n","Zwei Brötchen, bitte.","alltag"],
["das Pfand","deposit (bottle); regional also: der Pfand","n","Auf der Flasche sind 25 Cent Pfand.","alltag"],
["die Kasse","checkout, till","n","An der Kasse bitte anstellen.","alltag"],
["der Kassenzettel","receipt","n","Möchten Sie den Kassenzettel?","alltag"],
["bar","in cash","adv","Zahlen Sie bar oder mit Karte?","alltag"],
["die Tüte","bag","n","Brauchen Sie eine Tüte?","alltag"],
["der Müll","rubbish","n","Der Müll wird getrennt.","alltag"],
["die Mülltrennung","waste separation","n","Mülltrennung ist hier ernst.","alltag"],
["der Bahnhof","train station","n","Der Hauptbahnhof ist zentral.","alltag"],
["die Verspätung","delay","n","Der Zug hat 20 Minuten Verspätung.","alltag"],
["das Gleis","platform (track)","n","Der ICE fährt von Gleis 7.","alltag"],
["umsteigen","to change (trains)","v","In Frankfurt umsteigen.","alltag"],
["die Fahrkarte","ticket","n","Haben Sie eine gültige Fahrkarte?","alltag"],
["das Deutschlandticket","nationwide monthly transit pass","n","Mit dem Deutschlandticket fahre ich überall.","alltag"],
["die Haltestelle","stop (bus/tram)","n","Die nächste Haltestelle ist Klinikum.","alltag"],
["der Führerschein","driving licence","n","Mein Führerschein muss umgeschrieben werden.","alltag"],
["die Autobahn","motorway","n","Auf der Autobahn gibt es Baustellen.","alltag"],
["der Stau","traffic jam (pl. die Staus)","n","Auf der A5 sind zehn Kilometer Stau.","alltag"],
["der Feierabend","end of the working day","n","Schönen Feierabend!","alltag"],
["der Urlaub","holiday, leave","n","Ich habe 30 Tage Urlaub.","alltag"],
["der Feiertag","public holiday","n","Morgen ist Feiertag.","alltag"],
["die Ruhezeit","quiet hours","n","Ruhezeit ab 22 Uhr.","alltag"],
["der Nachbar","neighbour","n","Der Nachbar grüßt immer.","alltag"],
["die Hausordnung","house rules","n","Die Hausordnung hängt im Flur.","alltag"],
["der Hausmeister","caretaker","n","Der Hausmeister repariert die Heizung.","alltag"],
["die Heizung","heating","n","Die Heizung ist kalt.","alltag"],
["lüften","to air (a room)","v","Zweimal am Tag stoßlüften.","alltag"],
["das Rezept","prescription; recipe","n","Ich brauche ein Rezept.","alltag"],
["die Apotheke","pharmacy","n","Die Apotheke ist um die Ecke.","alltag"],
["die Sprechstunde","consultation hours","n","Sprechstunde Mo–Fr 8–12.","alltag"],
["die Praxis","medical practice","n","Die Praxis ist voll.","alltag"],
["das Wartezimmer","waiting room","n","Bitte im Wartezimmer Platz nehmen.","alltag"],
["der Kollege","colleague","n","Mein Kollege hat Dienst.","alltag"],
["der Dienst","shift, duty","n","Ich habe Nachtdienst.","alltag"],
["der Dienstplan","rota","n","Der Dienstplan kommt am Freitag.","alltag"],
["die Überstunde","overtime hour","n","Ich habe 40 Überstunden.","alltag"],
["die Fortbildung","continuing education","n","Die Fortbildung ist Pflicht.","alltag"],
["der Verein","club, association","n","Ich bin im Sportverein.","alltag"],
["die Stammkneipe","regular pub","n","Wir treffen uns in der Stammkneipe.","alltag"],
["das Gespräch","conversation","n","Ein nettes Gespräch.","alltag"],
["sich vorstellen","to introduce oneself","v","Darf ich mich vorstellen?","alltag"],
["sich entschuldigen","to apologise","v","Ich möchte mich entschuldigen.","alltag"],
["sich beschweren","to complain","v","Ich möchte mich beschweren.","alltag"],
["sich bedanken","to say thanks","v","Ich bedanke mich.","alltag"],
["genau","exactly","adv","Genau!","alltag"],
["eigentlich","actually","adv","Eigentlich wollte ich gehen.","alltag"],
["ungefähr","approximately","adv","Ungefähr zehn Minuten.","alltag"],
["sofort","immediately","adv","Ich komme sofort.","alltag"],
["pünktlich","punctual","adj","Bitte pünktlich sein.","alltag"],
["der Ärger","trouble, annoyance","n","Das gibt Ärger.","alltag"],
["die Ordnung","order","n","Alles in Ordnung.","alltag"],
["Entschuldigung","excuse me / sorry","x","Entschuldigung, wo ist der Bahnhof?","alltag"],
["Alles klar","all right / got it","x","Alles klar, bis morgen.","alltag"],
["Mahlzeit","hello at lunchtime (hospital staff greeting)","x","Mahlzeit! (said in the canteen)","alltag"],
["Moin","hello (north Germany, any time of day)","x","Moin! Alles gut?","alltag"],
["Servus / Grüß Gott","hello (south Germany, Austria)","x","Grüß Gott, Herr Doktor.","alltag"],
["Tschüss","bye","x","Tschüss, bis Montag.","alltag"],
["Na?","hey, how's it going? (very casual)","x","Na? Alles fit?","alltag"],
["Passt schon","it's fine / no worries","x","Passt schon, kein Problem.","alltag"],
["Das geht leider nicht","unfortunately that's not possible","x","Das geht leider nicht.","alltag"],
["Ich hätte gern","I'd like (ordering)","x","Ich hätte gern einen Kaffee.","alltag"],
["Stimmt so","keep the change","x","Stimmt so, danke.","alltag"],
["Prost","cheers","x","Prost! Zum Wohl!","alltag"],
["Gesundheit","bless you","x","Gesundheit!","alltag"],
["Guten Appetit","enjoy your meal","x","Guten Appetit!","alltag"],
["Schönes Wochenende","have a nice weekend","x","Schönes Wochenende!","alltag"],
["Gute Besserung","get well soon","x","Gute Besserung!","alltag"],
["Viel Erfolg","good luck (for a task)","x","Viel Erfolg bei der Prüfung!","alltag"]
];
// ---- ALLTAG lessons: same shape as MEDL (id, week, title, sub, body, dialog, quiz)
const ALLTAG = [
{id:"a1",week:1,title:"Grüßen, Sie und du, Smalltalk",sub:"How Germans open and close conversations",body:`
<p>Germans greet by region and time: <span class="de">Guten Morgen (until ~10), Guten Tag, Guten Abend</span>; casual <span class="de">Hallo</span>; north <span class="de">Moin</span>; south <span class="de">Grüß Gott / Servus</span>; hospital canteen <span class="de">Mahlzeit</span>. Goodbye: <span class="de">Auf Wiedersehen</span> (formal), <span class="de">Tschüss</span>, <span class="de">Bis dann</span>.</p>
<p><b class="g">Sie</b> for strangers, officials, patients, seniors at work. <b class="g">du</b> after someone offers it (<span class="de">Wir können uns duzen</span>), among young people, in sports clubs, often among nurses and junior doctors on the same team. Default to Sie; being too formal is forgiven, too casual is not.</p>
<p>Smalltalk is shorter and more concrete than in the Gulf or the US. Safe topics: weather, the Bahn being late, the weekend, food, football, regional differences. Avoid asking salary, religion, or political party; avoid compliments on appearance at work.</p>`,
dialog:[["Kollegin","Moin! Du bist neu hier, oder?","Morning! You're new here, right?"],["Du","Ja, ich bin seit Montag da. Ich bin Amron, Assistenzarzt in der ZNA.","Yes, I've been here since Monday. I'm Amron, resident in the ER."],["Kollegin","Ich bin Lena, Pflege, Schicht B. Wir duzen uns hier alle, ist das okay?","I'm Lena, nursing, shift B. We're all on first-name terms here, is that okay?"],["Du","Sehr gern. Wie läuft's heute?","Gladly. How's it going today?"],["Kollegin","Voll wie immer. Und das Wetter, typisch November.","Packed as always. And the weather, typical November."],["Du","Ich gewöhne mich noch an den Regen.","I'm still getting used to the rain."],["Kollegin","Da gewöhnt man sich nie dran. Mahlzeit!","You never get used to it. Enjoy your lunch!"]],
quiz:[{q:"A nurse says 'Wir duzen uns hier alle.' You should:",o:["use du with her from now on","keep using Sie","ask her surname"],a:0,why:"She offered du; accepting it is polite."},{q:"'Mahlzeit!' is said:",o:["around lunchtime as a greeting","at bedtime","after a patient dies"],a:0,why:"A workplace greeting at midday."},{q:"Safe smalltalk topic:",o:["the delayed train","the colleague's salary","the colleague's religion"],a:0,why:"Bahn complaints unite the nation."}]},
{id:"a2",week:2,title:"Supermarkt, Bäckerei, Pfand",sub:"Buying food without stress",body:`
<ul><li><span class="de">Ich hätte gern zwei Brötchen und ein Vollkornbrot.</span></li><li><span class="de">Haben Sie das auch in klein? Was kostet das?</span></li><li><span class="de">Bar oder mit Karte? — Mit Karte, bitte. / Bar.</span></li><li><span class="de">Brauchen Sie den Kassenzettel? — Nein, danke.</span></li><li><span class="de">Wo finde ich Hefe?</span> (where do I find...)</li></ul>
<p>Rules of the land: bring your own bag; pack fast at the till (the cashier will not wait); return bottles for <span class="de">Pfand</span> at the machine and take the voucher to the till; shops close on Sunday (bakeries open mornings); cash is still common, some bakeries are cash-only.</p>`,
dialog:[["Verkäuferin","Guten Morgen, was darf's sein?","Good morning, what'll it be?"],["Du","Guten Morgen. Ich hätte gern vier Brötchen und zwei Laugenstangen.","Good morning. I'd like four rolls and two pretzel sticks."],["Verkäuferin","Normale Brötchen oder Körner?","Plain rolls or seeded?"],["Du","Zwei normale, zwei Körner, bitte.","Two plain, two seeded, please."],["Verkäuferin","Sonst noch etwas?","Anything else?"],["Du","Nein, das wär's. Was macht das?","No, that's it. How much is that?"],["Verkäuferin","Vier achtzig. Nur bar, leider.","Four eighty. Cash only, I'm afraid."],["Du","Kein Problem. Stimmt so.","No problem. Keep the change."]],
quiz:[{q:"'Was darf's sein?' means:",o:["What would you like?","May it be?","Is it allowed?"],a:0,why:"Standard shop opening."},{q:"'Das wär's' means:",o:["that's all","that was it (past)","it would be"],a:0,why:"Closing an order."},{q:"Pfand is:",o:["bottle deposit","a tax","a fine"],a:0,why:"Returned at the Pfandautomat."}]},
{id:"a3",week:3,title:"Bürgeramt: Anmeldung & Termine",sub:"Registering your address and surviving the Amt",body:`
<p>Within 14 days of moving in you must register (<span class="de">anmelden</span>) at the <span class="de">Bürgeramt / Einwohnermeldeamt</span>. You need: passport, <span class="de">Wohnungsgeberbestätigung</span> (landlord's confirmation), the form. Book online weeks ahead; or go early without a Termin in smaller towns.</p>
<ul><li><span class="de">Ich möchte mich anmelden. Ich bin am 1. November eingezogen.</span></li><li><span class="de">Hier ist meine Wohnungsgeberbestätigung.</span></li><li><span class="de">Bekomme ich eine Meldebescheinigung?</span> (you need this for the bank, insurance, Approbation)</li><li><span class="de">Könnten Sie das bitte noch einmal langsam sagen?</span></li><li><span class="de">Welche Unterlagen fehlen noch?</span></li></ul>
<p>Tone: polite, brief, patient. Officials are not rude, they are efficient. Bring every document in a folder, in order, with copies.</p>`,
dialog:[["Beamter","Guten Tag, Sie haben einen Termin?","Hello, you have an appointment?"],["Du","Ja, um 9:20, zur Anmeldung. Hier ist die Bestätigung.","Yes, at 9:20, for registration. Here's the confirmation."],["Beamter","Reisepass und Wohnungsgeberbestätigung, bitte.","Passport and landlord confirmation, please."],["Du","Bitte sehr. Ich bin am ersten Oktober eingezogen.","Here you are. I moved in on the first of October."],["Beamter","Konfession?","Religious affiliation (for church tax)?"],["Du","Keine, danke. Bekomme ich heute eine Meldebescheinigung?","None, thanks. Do I get a registration certificate today?"],["Beamter","Ja, einen Moment. Die Steuer-ID kommt per Post in zwei Wochen.","Yes, one moment. The tax ID comes by post in two weeks."]],
quiz:[{q:"'Wohnungsgeberbestätigung' is:",o:["landlord's confirmation of move-in","a rental ad","a utility bill"],a:0,why:"Required for Anmeldung since 2015."},{q:"Deadline to register after moving:",o:["14 days","6 months","no deadline"],a:0,why:"Two weeks; fines are possible."},{q:"'Konfession' at the Amt matters because of:",o:["church tax (Kirchensteuer)","hospital assignment","insurance"],a:0,why:"Declaring a church membership triggers Kirchensteuer: 8–9 % of the income tax, not of the income."}]},
{id:"a4",week:4,title:"Wohnungssuche & Besichtigung",sub:"Finding a flat in a tight market",body:`
<p>Vocabulary of ads: <span class="de">2-Zimmer-Wohnung, 55 m², 3. OG (Obergeschoss), EBK (Einbauküche), Kaltmiete / Warmmiete, Nebenkosten (NK), Kaution, WG (Wohngemeinschaft), ab sofort, provisionsfrei</span>.</p>
<p>What landlords want: <span class="de">Schufa-Auskunft</span> (credit report; new arrivals bring a bank letter or employer's contract instead), last three payslips or <span class="de">Arbeitsvertrag</span>, <span class="de">Mietschuldenfreiheitsbescheinigung</span> (previous landlord's letter), ID copy. Bring them all to the viewing in a folder; the applicant with the complete <span class="de">Bewerbermappe</span> wins.</p>
<ul><li><span class="de">Ich interessiere mich für die Wohnung in der Goethestraße. Ist sie noch frei?</span></li><li><span class="de">Ich bin Arzt am Klinikum, unbefristet angestellt.</span></li><li><span class="de">Sind die Nebenkosten inklusive Heizung?</span></li><li><span class="de">Ab wann ist die Wohnung verfügbar?</span></li></ul>`,
dialog:[["Vermieter","Guten Abend, kommen Sie rein. Das ist das Wohnzimmer, Südseite.","Good evening, come in. This is the living room, south-facing."],["Du","Schön hell. Sind die Nebenkosten inklusive Heizung und Wasser?","Nice and bright. Do the utilities include heating and water?"],["Vermieter","Ja, 220 Euro warm obendrauf. Strom und Internet extra. Was machen Sie beruflich?","Yes, 220 euros on top for heating and water. Electricity and internet extra. What do you do for a living?"],["Du","Ich bin Assistenzarzt am Universitätsklinikum, unbefristeter Vertrag. Hier sind Arbeitsvertrag, Gehaltsnachweis und Ausweiskopie.","I'm a resident at the university hospital, permanent contract. Here are contract, proof of salary and ID copy."],["Vermieter","Sehr ordentlich. Eine Schufa haben Sie?","Very tidy. Do you have a Schufa?"],["Du","Ich bin erst seit zwei Monaten in Deutschland, deshalb habe ich stattdessen eine Bestätigung meiner Bank und eine Bürgschaft des Arbeitgebers.","I've only been in Germany for two months, so instead I have a confirmation from my bank and an employer's guarantee."],["Vermieter","Das reicht mir. Ich melde mich bis Freitag.","That's enough for me. I'll get back to you by Friday."]],
quiz:[{q:"'Warmmiete' includes:",o:["rent + heating/utilities","rent + electricity + internet","rent only"],a:0,why:"Kalt = base; warm = with Nebenkosten (heating, water, building)."},{q:"'unbefristet' means:",o:["permanent (open-ended)","temporary","unpaid"],a:0,why:"befristet = fixed-term."},{q:"'Schufa' is:",o:["a credit report","a rental insurance","a deposit"],a:0,why:"Credit agency; landlords ask for it."}]},
{id:"a5",week:5,title:"Bank, Handy, Verträge, Kündigung",sub:"Contracts and how to escape them",body:`
<p>Germany runs on contracts with notice periods. Rules: mobile and gym contracts often run 12–24 months and auto-renew unless you cancel in writing before the <span class="de">Kündigungsfrist</span>; since 2022 renewals must be cancellable monthly. Keep proof (<span class="de">Einschreiben</span> or email with confirmation).</p>
<ul><li>Bank: <span class="de">Ich möchte ein Girokonto eröffnen. Ich brauche eine Girocard und Online-Banking.</span></li><li>Mobile: <span class="de">Ich hätte gern einen Prepaid-Tarif ohne Vertragsbindung.</span></li><li>Cancel: <span class="de">Hiermit kündige ich meinen Vertrag mit der Nummer 123456 fristgerecht zum nächstmöglichen Zeitpunkt. Bitte bestätigen Sie mir die Kündigung schriftlich.</span></li><li>Problem: <span class="de">Ich wurde doppelt abgebucht. Könnten Sie das bitte prüfen?</span></li></ul>
<p>Also: <span class="de">Rundfunkbeitrag</span> (TV licence, ~18 €/month per household, mandatory), <span class="de">Haftpflichtversicherung</span> (personal liability, cheap, everyone has it), <span class="de">SEPA-Lastschrift</span> (direct debit).</p>`,
dialog:[["Bankberater","Guten Tag, womit kann ich helfen?","Hello, how can I help?"],["Du","Ich möchte ein Girokonto eröffnen. Ich arbeite seit Oktober am Klinikum.","I'd like to open a current account. I've worked at the hospital since October."],["Bankberater","Gern. Reisepass, Meldebescheinigung und Arbeitsvertrag, bitte.","Certainly. Passport, registration certificate and employment contract, please."],["Du","Bitte. Fallen Kontoführungsgebühren an?","Here. Are there account fees?"],["Bankberater","Bei Gehaltseingang über 700 Euro ist das Konto kostenlos. Die Karte kommt per Post, die PIN separat.","With a salary deposit above 700 euros the account is free. The card comes by post, the PIN separately."],["Du","Und kann ich einen Dauerauftrag für die Miete einrichten?","And can I set up a standing order for the rent?"],["Bankberater","Das geht direkt im Online-Banking.","You can do that directly in online banking."]],
quiz:[{q:"'fristgerecht' means:",o:["within the notice period","immediately","by mistake"],a:0,why:"Frist = deadline; gerecht = in accordance."},{q:"The Rundfunkbeitrag is:",o:["mandatory broadcasting fee per household","optional cable TV","a hospital fee"],a:0,why:"Everyone pays, even without a TV."},{q:"'Lastschrift' is:",o:["direct debit","a bill","a cancellation"],a:0,why:"The payee pulls the money from your account."}]},
{id:"a6",week:6,title:"Bahn, Bus, Fahrrad",sub:"Getting around, and the national sport of complaining about the Bahn",body:`
<p>Tickets: <span class="de">Deutschlandticket</span> (63 €/month since 01/01/2026, all local/regional transport, not ICE/IC); <span class="de">Sparpreis</span> for long distance, bought early on the DB app; <span class="de">BahnCard 25/50</span>. Validate (<span class="de">entwerten</span>) paper tickets where required; <span class="de">Schwarzfahren</span> (riding without a ticket) costs 60 €.</p>
<ul><li><span class="de">Entschuldigung, fährt dieser Zug nach Köln? Muss ich umsteigen?</span></li><li><span class="de">Von welchem Gleis fährt der RE nach Mainz?</span></li><li><span class="de">Ist der Platz noch frei?</span> / <span class="de">Ist hier noch frei?</span></li><li><span class="de">Der Zug fällt aus / hat Verspätung / hält heute nicht in ...</span></li></ul>
<p>Cycling is transport, not sport: get a bike, lights, a good lock; cycle lanes are enforced by glares.</p>`,
dialog:[["Durchsage","Der ICE 571 nach München, Abfahrt 14:03, hat heute voraussichtlich 25 Minuten Verspätung. Grund dafür ist eine Störung an der Strecke.","The ICE 571 to Munich, departure 14:03, is expected to be 25 minutes late today. The reason is a fault on the line."],["Du","Entschuldigung, erreiche ich dann noch den Anschluss nach Augsburg?","Excuse me, will I still make the connection to Augsburg?"],["Schaffner","Wahrscheinlich nicht. Nehmen Sie den nächsten, Ihre Fahrkarte gilt. Ab 60 Minuten Verspätung bekommen Sie 25 Prozent zurück.","Probably not. Take the next one, your ticket is valid. From 60 minutes delay you get 25 percent back."],["Du","Wo beantrage ich das?","Where do I claim that?"],["Schaffner","Online über das Fahrgastrechte-Formular.","Online via the passenger-rights form."]],
quiz:[{q:"The Deutschlandticket is valid on:",o:["regional and local transport","ICE trains","flights"],a:0,why:"Not on long-distance (ICE/IC/EC)."},{q:"'Der Zug fällt aus' means:",o:["the train is cancelled","the train is falling","the train is leaving"],a:0,why:"ausfallen = to be cancelled."},{q:"'Ist hier noch frei?' is asked:",o:["before taking a seat","at the ticket counter","at the Amt"],a:0,why:"Seat etiquette on trains and in cafés."}]},
{id:"a7",week:7,title:"Beim Hausarzt (als Patient) & Apotheke",sub:"The other side of the desk",body:`
<p>You will be a patient too. <span class="de">Versichertenkarte</span> at reception, <span class="de">Praxisgebühr</span> no longer exists, <span class="de">Überweisung</span> needed for some specialists, <span class="de">Krankschreibung (AU)</span> goes electronically to employer and Kasse.</p>
<ul><li><span class="de">Ich hätte gern einen Termin, möglichst diese Woche. Es ist nicht dringend.</span></li><li><span class="de">Ich bin neu in der Stadt und suche einen Hausarzt. Nehmen Sie noch Patienten auf?</span></li><li>Pharmacy: <span class="de">Ich habe ein Rezept. / Haben Sie etwas gegen Halsschmerzen, rezeptfrei?</span></li><li><span class="de">Gibt es das auch als Generikum?</span></li></ul>`,
dialog:[["MFA","Praxis Dr. Weber, Schmitt am Apparat.","Dr Weber's practice, Schmitt speaking."],["Du","Guten Tag, mein Name ist Ismail. Ich bin neu in Heidelberg und suche einen Hausarzt. Nehmen Sie noch neue Patienten auf?","Hello, my name is Ismail. I'm new in Heidelberg and looking for a GP. Are you taking new patients?"],["MFA","Im Moment nur mit Warteliste. Ist es akut?","At the moment only with a waiting list. Is it urgent?"],["Du","Nein, nur für die Zukunft, und ich bräuchte eine Impfberatung.","No, just for the future, and I'd need vaccination advice."],["MFA","Dann trage ich Sie ein. Sind Sie gesetzlich oder privat versichert?","Then I'll put you down. Are you publicly or privately insured?"],["Du","Gesetzlich, bei der TK.","Public, with TK."],["MFA","Gut, wir melden uns. Bringen Sie die Versichertenkarte mit.","Good, we'll get back to you. Bring your insurance card."]],
quiz:[{q:"'gesetzlich versichert' means:",o:["public (statutory) insurance","privately insured","uninsured"],a:0,why:"GKV vs PKV; doctors under ~70 k € are usually GKV."},{q:"'rezeptfrei' means:",o:["over the counter","free of charge","no recipe"],a:0,why:"Rezept = prescription."},{q:"'AU' is:",o:["sick note (Arbeitsunfähigkeitsbescheinigung)","an operation","a referral"],a:0,why:"The gelber Schein, now electronic."}]},
{id:"a8",week:8,title:"Restaurant, Kneipe, Einladung",sub:"Eating out and being a guest",body:`
<ul><li><span class="de">Haben Sie einen Tisch für zwei? Wir haben reserviert auf den Namen ...</span></li><li><span class="de">Ich hätte gern das Schnitzel mit Pommes. Und ein großes Wasser, still.</span></li><li>Pay: <span class="de">Zahlen, bitte. Zusammen oder getrennt? — Getrennt, bitte.</span> Tip ~10 %, said at payment: <span class="de">Machen Sie 22.</span> (if the bill is 20).</li><li>Invited home: bring flowers, wine or chocolates; be on time (not early, not more than 10 min late); offer to take off shoes; <span class="de">Prost</span> with eye contact; <span class="de">Guten Appetit</span> before eating.</li><li>Drinks: <span class="de">Ein Pils, bitte.</span> · <span class="de">Ein Glas Riesling, trocken.</span> · <span class="de">Eine Weinschorle, sauer.</span> · <span class="de">Noch eine Runde, bitte!</span> · <span class="de">Was können Sie empfehlen?</span></li></ul>`,
dialog:[["Kellnerin","Guten Abend, haben Sie reserviert?","Good evening, do you have a reservation?"],["Du","Ja, auf den Namen Ismail, für zwei Personen.","Yes, under Ismail, for two."],["Kellnerin","Hier bitte. Möchten Sie schon etwas trinken?","Here you go. Would you like something to drink?"],["Du","Ein Pils und eine Weißweinschorle, bitte. Und was können Sie heute empfehlen?","A Pils and a white-wine spritzer, please. And what can you recommend today?"],["Kellnerin","Den Zwiebelrostbraten mit Spätzle – oder, ganz frisch, Spargel mit Schinken und Kratzete.","The roast beef with onions and Spätzle – or, very fresh, asparagus with ham and pancake strips."],["Du","Dann einmal den Rostbraten und einmal den Spargel, bitte.","Then one roast beef and one asparagus, please."],["Kellnerin","Gerne. — Später: Zusammen oder getrennt?","Certainly. — Later: Together or separately?"],["Du","Zusammen. Machen Sie 48.","Together. Make it 48."]],
quiz:[{q:"'Getrennt, bitte' means:",o:["separate bills","together","to go"],a:0,why:"Splitting is normal and not awkward."},{q:"Tipping in Germany is done by:",o:["saying the rounded total when paying","leaving cash on the table after","never tipping"],a:0,why:"Say 'Machen Sie 22' or 'Stimmt so'."},{q:"Invited to dinner at 19:00, you arrive:",o:["19:00–19:10","18:30","20:00"],a:0,why:"Punctuality is respect; early is also wrong."}]},
{id:"a9",week:9,title:"Nachbarn, Hausordnung, Mülltrennung",sub:"The unwritten and written rules of living in a German building",body:`
<p><b>Ruhezeiten</b>: typically 22:00–06:00 and all day Sunday; no drilling, no loud music, in some buildings no washing machine. <b>Mülltrennung</b>: <span class="de">Restmüll</span> (black), <span class="de">Papier</span> (blue), <span class="de">Gelber Sack / Verpackungen</span> (yellow), <span class="de">Bio</span> (brown), <span class="de">Glas</span> by colour at the container (not on Sundays). <b>Kehrwoche</b>: the residents' rota for cleaning the stairwell, a Württemberg (Swabian) institution; in Heidelberg a paid service or a simple <span class="de">Putzplan</span> is the norm. <b>Lüften</b>: air the flat twice daily to avoid mould, which landlords will blame on you.</p>
<ul><li><span class="de">Guten Tag, ich bin der neue Nachbar aus dem dritten Stock. Ich wollte mich kurz vorstellen.</span></li><li><span class="de">Entschuldigen Sie die Störung gestern Abend, wir hatten Besuch.</span></li><li><span class="de">Wissen Sie, wann der Sperrmüll abgeholt wird?</span></li></ul>`,
dialog:[["Nachbarin","Sie sind neu hier? Ich bin Frau Krause, zweiter Stock.","You're new here? I'm Mrs Krause, second floor."],["Du","Freut mich, Ismail, dritter Stock. Ich wollte mich vorstellen. Falls mal etwas laut ist, sagen Sie mir bitte Bescheid.","Nice to meet you, Ismail, third floor. I wanted to introduce myself. If anything is ever loud, please let me know."],["Nachbarin","Das ist nett. Wichtig: Glas nur werktags zum Container, und die Papiertonne wird dienstags geleert.","That's kind. Important: glass only on weekdays to the container, and the paper bin is emptied on Tuesdays."],["Du","Danke, das hilft. Und wer putzt das Treppenhaus?","Thanks, that helps. And who cleans the stairwell?"],["Nachbarin","Das macht eine Firma, das läuft über die Nebenkosten. Nur den Gehweg räumt im Winter jeder selbst – der Plan hängt im Flur.","A company does that, it goes through the service charges. Only the pavement is cleared by the residents themselves in winter – the rota is in the hallway."]],
quiz:[{q:"Glass goes to the container:",o:["weekdays, not Sundays","any time","only in the Gelber Sack"],a:0,why:"Noise rules apply to bottle banks too."},{q:"'Bescheid sagen' means:",o:["to let someone know","to apologise","to complain to the landlord"],a:0,why:"Very common phrase."},{q:"'Kehrwoche' is:",o:["a stairwell-cleaning rota","a holiday","a parking rule"],a:0,why:"A Swabian (Württemberg) institution; rare in Heidelberg."}]},
{id:"a10",week:10,title:"Arbeitsvertrag, Tarif, Dienste",sub:"Reading your own contract and rota",body:`
<p>Hospital doctors are usually paid by <span class="de">Tarifvertrag</span> (TV-Ärzte/VKA for municipal hospitals, TV-Ärzte/TdL for most university hospitals — but the four university hospitals in Baden-Württemberg, Heidelberg included, have their own TV-Ärzte UK BW). Resident = <span class="de">Arzt in Weiterbildung</span>, grade Ä1, with annual steps. Extras: <span class="de">Bereitschaftsdienst</span> (on-call in house), <span class="de">Rufbereitschaft</span> (on-call from home), <span class="de">Nachtdienst, Wochenenddienst, Zuschläge</span> (bonuses), <span class="de">Überstunden</span> (document them), <span class="de">Probezeit</span> (probation, 6 months), <span class="de">Weiterbildungsordnung</span> (your specialty's training rules), <span class="de">Logbuch</span>.</p>
<ul><li><span class="de">Wann bekomme ich den Dienstplan für nächsten Monat?</span></li><li><span class="de">Könnte ich am 14. den Dienst tauschen?</span></li><li><span class="de">Ich möchte Urlaub beantragen, vom ... bis ...</span></li><li><span class="de">Wie viele Überstunden habe ich auf dem Konto?</span></li><li><span class="de">Wer ist mein Weiterbildungsbeauftragter?</span></li></ul>`,
dialog:[["Du","Frau Dr. Neumann, hätten Sie kurz Zeit? Es geht um den Dienstplan.","Dr Neumann, do you have a moment? It's about the rota."],["Oberärztin","Klar, was gibt's?","Sure, what's up?"],["Du","Ich bin am 14. zum Nachtdienst eingeteilt, habe aber an dem Tag die Fachsprachprüfung. Könnte ich mit jemandem tauschen?","I'm scheduled for night shift on the 14th, but I have the language exam that day. Could I swap with someone?"],["Oberärztin","Sprechen Sie mit Herrn Yilmaz, der wollte sowieso tauschen. Und tragen Sie den Tausch im System ein.","Talk to Mr Yilmaz, he wanted to swap anyway. And enter the swap in the system."],["Du","Mache ich. Danke Ihnen.","Will do. Thank you."]],
quiz:[{q:"'Rufbereitschaft' is:",o:["on-call from home","in-house on-call","day shift"],a:0,why:"Bereitschaftsdienst = in house; Rufbereitschaft = called in."},{q:"'Probezeit' is:",o:["probation period","exam period","holiday"],a:0,why:"Usually six months; easier termination for both sides."},{q:"'Dienst tauschen' means:",o:["swap a shift","cancel a shift","extend a shift"],a:0,why:"tauschen = to swap."}]},
{id:"a11",week:11,title:"Behördendeutsch & Briefe",sub:"Reading official letters and writing formal emails",body:`
<p>Official letters use nominal style and passive. Signal words: <span class="de">hiermit</span> (hereby), <span class="de">gemäß § 3</span> (according to), <span class="de">bis spätestens</span> (by at the latest), <span class="de">andernfalls</span> (otherwise), <span class="de">Widerspruch</span> (objection, usually within one month), <span class="de">Bescheid</span> (official decision), <span class="de">Mahnung</span> (reminder for payment), <span class="de">Frist</span> (deadline).</p>
<p>Formal email skeleton:</p>
<pre class="mono" style="white-space:pre-wrap;font-size:.85rem;background:var(--sunk);padding:.8rem;border-radius:8px">Betreff: Antrag auf Approbation – Aktenzeichen 2026/4711

Sehr geehrte Frau Schneider,

vielen Dank für Ihr Schreiben vom 12.10.2026. Anbei sende ich Ihnen die fehlenden Unterlagen (beglaubigte Übersetzung des Diploms, polizeiliches Führungszeugnis).

Für Rückfragen stehe ich Ihnen gern zur Verfügung.

Mit freundlichen Grüßen
Amron Ismail</pre>
<p>Unknown addressee: <span class="de">Sehr geehrte Damen und Herren</span>. Never <span class="de">Hallo</span> to an Amt. Dates 26.10.2026.</p>`,
dialog:[],
quiz:[{q:"'Widerspruch einlegen' means:",o:["to file an objection","to agree","to pay"],a:0,why:"Usually within one month of a Bescheid."},{q:"'anbei' means:",o:["enclosed/attached","soon","by the way"],a:0,why:"Standard in letters."},{q:"Correct formal closing:",o:["Mit freundlichen Grüßen","Liebe Grüße","Tschüss"],a:0,why:"MfG is the only safe choice with authorities."}]},
{id:"a12",week:12,title:"Freunde finden, Verein, Freizeit",sub:"Why Germans seem cold, and how to get past it",body:`
<p>Germans separate <span class="de">Bekannte</span> (acquaintances) from <span class="de">Freunde</span> (friends) sharply; friendships form slowly and last. The path in is <b>structured activity</b>: a <span class="de">Verein</span> (sports club, choir, volunteer fire brigade, hiking club), a weekly <span class="de">Stammtisch</span>, language tandem, Volkshochschule (VHS) courses. Invitations are sincere and specific (<span class="de">Kommst du Samstag um 18 Uhr?</span>); "we should meet sometime" means nothing.</p>
<ul><li><span class="de">Gibt es hier einen Fußballverein, in dem man einfach mitspielen kann?</span></li><li><span class="de">Hast du Lust, nach der Schicht noch etwas trinken zu gehen?</span></li><li><span class="de">Ich suche einen Tandempartner: Deutsch gegen Arabisch oder Englisch.</span></li><li><span class="de">Was macht ihr am Wochenende?</span> / <span class="de">Ich gehe gern wandern.</span></li></ul>
<p>Weekend culture: Saturday errands and sport, Sunday <span class="de">Ruhe</span>, walks, <span class="de">Kaffee und Kuchen</span> at 15:00, <span class="de">Tatort</span> on TV at 20:15.</p>`,
dialog:[["Kollege","Ein paar von uns gehen Freitag nach der Schicht noch ins Brauhaus. Kommst du mit?","A few of us are going to the brewery pub after the shift on Friday. Are you coming?"],["Du","Gern! Wo geht ihr hin?","Gladly! Where are you going?"],["Kollege","Zum Vetter in der Altstadt, die brauen selbst. Die erste Runde geht auf mich. Um sieben am Haupteingang?","To Vetter's in the old town, they brew their own. First round's on me. Seven at the main entrance?"],["Du","Passt. Spielt ihr eigentlich irgendwo Fußball?","Works. Do you play football anywhere, by the way?"],["Kollege","Dienstags, Klinikmannschaft, Hobbyniveau. Komm einfach vorbei.","Tuesdays, hospital team, amateur level. Just come along."]],
quiz:[{q:"The reliable way to make German friends:",o:["join a Verein or regular activity","smalltalk in the street","wait to be invited"],a:0,why:"Structured, repeated contact is how friendships start here."},{q:"'Die erste Runde geht auf mich' means:",o:["I'm paying for the first round","I'm leaving after the first round","I arrive first"],a:0,why:"eine Runde ausgeben = to buy everyone a drink; the next round is yours."},{q:"'Stammtisch' is:",o:["a regular group meeting at a pub","a dining table","a stem cell"],a:0,why:"Weekly regulars' table."}]}
];
// ---- KULTUR cards: [title, text, tag]
const KULTUR = [
["Pünktlichkeit","Being on time is respect. Five minutes early for work, on the dot for private invitations. If late, text ahead with a reason and an ETA.","Alltag"],
["Direktheit","Germans say what they mean; a blunt 'Das ist falsch' from a colleague is feedback, not an insult. Politeness lives in the Sie, the Konjunktiv, and the Bitte, not in softening the content.","Arbeit"],
["Sie und du","Sie is the default with patients, seniors, officials, strangers. The older or more senior person offers du. In many hospital teams, du is normal among peers and with nursing staff.","Arbeit"],
["Ordnung & Regeln","Rules are followed even when nobody watches: red lights on empty streets, Ruhezeiten, Mülltrennung, no jaywalking in front of children. Ask 'Wie macht man das hier?' and people enjoy explaining.","Alltag"],
["Datenschutz","Privacy is serious: no patient details on the phone in the hallway, no names in group chats, never photograph a chart. The DSGVO (GDPR) is enforced.","Klinik"],
["Hierarchie im Krankenhaus","Chefarzt → Oberarzt → Facharzt → Assistenzarzt. Hierarchy is visible in address and ward rounds, yet decisions are expected to be reasoned, and juniors are expected to ask and to document.","Klinik"],
["Pflege ist Partner","Nurses (Pflegekräfte) are highly trained and outspoken. Introduce yourself to the shift, say Mahlzeit, ask their assessment, thank them. A resident who ignores nursing gets no help at 3 a.m.","Klinik"],
["Dokumentationspflicht","If it is not documented, it did not happen. German chart notes are terse, timed, signed. Learn the Nominalstil early.","Klinik"],
["Feierabend","Work ends at the end of work. Colleagues go home and do not answer email. Respect this and claim it: the word is 'Feierabend', said as a farewell.","Arbeit"],
["Sonntagsruhe","Sunday is quiet: shops closed, no drilling, no lawn mowing, bottle banks closed. Plan groceries on Saturday. Bakeries open Sunday mornings.","Alltag"],
["Kirchensteuer & Konfession","The Anmeldung form asks for your Religionszugehörigkeit. Only members of a tax-levying body (Catholic, Protestant, Old Catholic, Jewish communities and a few others) pay Kirchensteuer: in Baden-Württemberg 8 % of the income tax, in most other states 9 %, collected by the Finanzamt. Everyone else writes 'keine'. Germans who want out declare a Kirchenaustritt at the Standesamt. Check the field 'Konfession' on your first payslip: a wrong entry costs money every month.","Alltag"],
["Krankenversicherung","Mandatory. Employed doctors below the threshold are in public insurance (GKV, ~14.6 % + Zusatzbeitrag, half paid by employer). Private insurance exists for higher earners; think carefully before switching.","Alltag"],
["Die Approbation","The state licence to practise. Non-EU degrees: recognition (Gleichwertigkeitsprüfung or Kenntnisprüfung), B2 general German, Fachsprachprüfung C1 at the Ärztekammer, plus documents (apostilled, translated). The Berufserlaubnis is a temporary licence while you wait.","Klinik"],
["Ärztekammer & Weiterbildung","Every doctor is a member of the Landesärztekammer. Specialty training follows its Weiterbildungsordnung; keep the Logbuch, collect Fortbildungspunkte (CME) and plan rotations early.","Klinik"],
["Bundesländer","Sixteen federal states; health, education and police are state matters. Approbation rules, holidays and dialects differ. Bavaria and Baden-Württemberg are not Berlin.","Deutschland"],
["Dialekte","Hochdeutsch is taught; Bavarian, Swabian, Saxon, Plattdeutsch are spoken. Patients may speak dialect; ask them to repeat slowly, and learn the local words for body parts and pain.","Alltag"],
["Brot & Essen","Over 3,000 registered kinds of bread. The warm meal is at noon (Kantine); the evening is Abendbrot: bread, butter, cheese, Wurst, pickles. Sunday starts with fresh Brötchen from the bakery and ends with Kaffee und Kuchen. Around Heidelberg: Maultaschen and Spätzle from Swabia, Flammkuchen and Saumagen from the Pfalz, white Spargel from Schwetzingen until 24 June, Zwiebelkuchen with neuer Wein in September, Butterbrezel at any hour.","Alltag"],
["Kaffee und Kuchen","Sunday 15:00, cake and coffee, with family or neighbours. Being invited is a sign you are in.","Alltag"],
["Vereinskultur","Half the country is in a Verein. It is the fastest route to friendship and to understanding the town. The Freiwillige Feuerwehr and the Sportverein run small-town life.","Alltag"],
["Geschichte & Erinnerung","Germany keeps its past in view: memorial sites, school visits to former camps, Stolpersteine in the pavement outside victims' last homes (Heidelberg has well over a hundred), 27 January as the day of remembrance. Denying the Holocaust (§ 130 StGB) and using Nazi symbols or the salute, even as a joke (§ 86a), are crimes. German satire does mock Hitler; it never mocks the victims. As a newcomer, do not open that register yourself, and never compare a strict boss to a Nazi.","Deutschland"],
["Wiedervereinigung","East (DDR) and West reunified in 1990. Differences remain in income, politics and attitudes; be curious, not judgmental. 3 October is the national holiday.","Deutschland"],
["Föderalismus & Politik","Parliament (Bundestag), chancellor (Bundeskanzler/in), president (ceremonial). Coalition governments are normal. Doctors' pay and working conditions are negotiated by unions (Marburger Bund).","Deutschland"],
["Umwelt","Recycling, Pfand, energy saving, cycling, the Energiewende. Expect colleagues to cycle in the rain and to be proud of it.","Alltag"],
["Humor","Dry, understated, often self-deprecating; irony is common, sarcasm toward patients is not. Karneval (Rhineland, February) is the licensed exception to seriousness.","Alltag"],
["Feiertage","Neujahr, Karfreitag, Ostermontag, 1. Mai, Christi Himmelfahrt, Pfingstmontag, 3. Oktober, 1. Weihnachtstag, 2. Weihnachtstag; Catholic states add more. Hospital holiday rotas are fought over in January.","Deutschland"],
["Weihnachten & Advent","Four Advent Sundays with a wreath and one more candle each week; an Adventskalender from 1 December; Nikolaus on the 6th (chocolate in the boot). Christmas markets from late November: Glühwein, Feuerzangenbowle, Bratwurst, gebrannte Mandeln. Presents are opened on the evening of the 24th (Heiligabend, die Bescherung), often after potato salad with Würstchen; the goose comes on the 25th. The 25th and 26th are quiet family days. Say 'Frohe Weihnachten!' and, from the 27th, 'Guten Rutsch!'.","Deutschland"],
["Rente & Sozialversicherung","Your payslip deducts pension (RV), unemployment (AV), health (KV) and care (PV) insurance. Contributions made in Germany count toward a German pension, with treaties for many countries.","Alltag"],
["Wohnen","Most Germans rent. Flats come without kitchens or light fixtures; Kaution up to three months' rent; strict mould and ventilation expectations; register the address within 14 days.","Alltag"],
["Höflichkeitsformeln","Bitte/Danke constantly; 'Könnten Sie' not 'Können Sie'; 'Entschuldigung' to get attention; shake hands at first meeting, eye contact when toasting, hold the door, greet when entering a waiting room.","Alltag"],
["Patientenrechte","Patients have the right to see their file, to a second opinion, to refuse treatment, to a Patientenverfügung (living will) and a Vorsorgevollmacht. Document capacity and consent carefully.","Klinik"]
];

// ---- More KLINIK lessons m13–m24 (appended to MEDL)
const MEDL2 = [
{id:"m13",week:13,title:"Visite & Übergabe auf Station",sub:"Ward rounds and shift handover, the daily rituals",body:`
<p><b>Visite</b> runs bed to bed, Oberarzt leading, resident presenting in 30 seconds per patient: name, age, diagnosis, day of stay, what changed, what is planned. <b>Übergabe</b> (handover) at shift change is a list: bed, name, diagnosis, open problems, what to watch, what to do if.</p>
<ul><li><span class="de">Bett 12, Frau Hartmann, 74, Tag 3 nach Hüft-TEP, Mobilisation läuft, Hb stabil bei 10,2, Entlassung Freitag geplant.</span></li><li><span class="de">Herr Koch, Pneumonie, unter Ampicillin/Sulbactam entfiebert, CRP fallend, Sauerstoff kann reduziert werden.</span></li><li><span class="de">Zu beachten heute Nacht: Frau Lenz, Vorhofflimmern, Frequenz um 110, bei über 130 bitte Metoprolol i.v. nach Schema und mich anrufen.</span></li><li>Patient on round: <span class="de">Wie haben Sie geschlafen? Haben Sie Schmerzen? Konnten Sie aufstehen? Hatten Sie Stuhlgang?</span></li></ul>`,
dialog:[["Oberarzt","Bett 7?","Bed 7?"],["Du","Herr Brandt, 61, Tag 2 nach Cholezystektomie, Schmerzen gut eingestellt mit Metamizol, erste Mobilisation gestern, Kostaufbau begonnen, Drainage fördert 30 ml serös. Labor heute: Leukos 9, CRP 60, fallend.","Mr Brandt, 61, day 2 post cholecystectomy, pain well controlled with metamizole, first mobilisation yesterday, oral diet started, drain producing 30 ml serous fluid. Labs today: WBC 9, CRP 60, falling."],["Oberarzt","Drainage ziehen?","Pull the drain?"],["Du","Ich würde sie heute ziehen, wenn bei der Kontrolle unter 50 ml.","I'd remove it today if under 50 ml at check."],["Oberarzt","Einverstanden. Entlassung?","Agreed. Discharge?"],["Du","Voraussichtlich übermorgen, Arztbrief ist vorbereitet.","Probably the day after tomorrow, discharge letter is prepared."],["Oberarzt","Gut. Herr Brandt, wie geht es Ihnen heute?","Good. Mr Brandt, how are you today?"],["Patient","Besser, Herr Doktor. Nur der Bauch zwickt noch.","Better, doctor. Just the belly still twinges."]],
quiz:[{q:"'Kostaufbau' means:",o:["restarting oral intake step by step","cost calculation","building a diet plan"],a:0,why:"Kost = diet; Aufbau = building up."},{q:"'Drainage fördert 30 ml' means:",o:["the drain is producing 30 ml","the drain needs 30 ml","the drain was removed"],a:0,why:"fördern = to deliver/produce."},{q:"'zu beachten heute Nacht' in a handover introduces:",o:["things to watch tonight","discharges","admissions"],a:0,why:"beachten = to pay attention to."}]},
{id:"m14",week:14,title:"Reanimation & Schockraum: Kommandos",sub:"Short, loud, unambiguous German for the resus bay",body:`
<p>Resus language is imperative and nominal. Closed-loop: name the person, give the task, they repeat it.</p>
<ul><li><span class="de">Kreislaufstillstand! Reanimation beginnen! Thoraxkompressionen!</span></li><li><span class="de">Defi dran! Rhythmusanalyse! — Kammerflimmern. Laden auf 200! Alle weg vom Patienten! Schock!</span></li><li><span class="de">Adrenalin ein Milligramm i.v. — Adrenalin ein Milligramm, gegeben um 14:32.</span></li><li><span class="de">Amiodaron 300 Milligramm nach dem dritten Schock.</span></li><li><span class="de">Zugang liegt? — Zugang liegt, 18 G rechts. Intraossär vorbereiten.</span></li><li><span class="de">Atemweg sichern. Larynxtubus / Intubation vorbereiten. Kapnographie dran.</span></li><li><span class="de">Wechsel! (change compressor every 2 min) Puls? — Kein Puls. Weiter.</span></li><li><span class="de">ROSC. Blutdruck messen, 12-Kanal-EKG, Kardiologie informieren.</span></li></ul>
<p>Trauma bay (ATLS in German): <span class="de">A: Atemweg frei. B: Belüftung bds. seitengleich, SpO₂ 94. C: RR 90/60, HF 120, Becken instabil, Beckenschlinge anlegen! D: GCS 13, Pupillen isokor. E: Entkleiden, Wärmeerhalt.</span></p>`,
dialog:[["Du","Herr Müller, hören Sie mich? — Keine Reaktion, keine Atmung. Kreislaufstillstand! Notfallteam rufen! Thoraxkompressionen beginnen!","Mr Müller, can you hear me? — No response, no breathing. Cardiac arrest! Call the resus team! Start chest compressions!"],["Pflege","Defi ist dran.","Defib is on."],["Du","Rhythmusanalyse. Kammerflimmern. Laden auf 200 Joule. Alle weg vom Patienten – Schock!","Rhythm check. VF. Charge to 200 joules. Everyone clear – shock!"],["Du","Kompressionen weiter. Lena, Adrenalin ein Milligramm i.v. nach dem dritten Schock.","Continue compressions. Lena, adrenaline one milligram IV after the third shock."],["Pflege","Adrenalin ein Milligramm nach dem dritten Schock, verstanden.","Adrenaline one milligram after the third shock, understood."],["Du","Zwei Minuten um. Wechsel. Rhythmusanalyse.","Two minutes up. Change. Rhythm check."],["Du","Organisierter Rhythmus. Puls? — Puls tastbar. ROSC um 14:41. Blutdruck, EKG, Blutgasanalyse. Intensiv anrufen.","Organised rhythm. Pulse? — Pulse palpable. ROSC at 14:41. BP, ECG, blood gas. Call ICU."]],
quiz:[{q:"'Alle weg vom Patienten' is said:",o:["before a shock","before intubation","before CPR"],a:0,why:"Clear the patient before defibrillation."},{q:"'Kammerflimmern' is:",o:["ventricular fibrillation","atrial fibrillation","asystole"],a:0,why:"Kammer = ventricle; Vorhof = atrium."},{q:"'Wechsel!' during CPR means:",o:["swap the compressor","change the drug","change the rhythm"],a:0,why:"Every two minutes."}]},
{id:"m15",week:15,title:"Pädiatrie: mit Eltern sprechen",sub:"History from parents, examining a frightened child",body:`
<ul><li><span class="de">Seit wann hat Ihre Tochter Fieber? Wie hoch? Trinkt sie noch? Hat sie nasse Windeln?</span></li><li><span class="de">Hat er sich übergeben? Durchfall? Hautausschlag? Ist er ungewöhnlich schlapp?</span></li><li><span class="de">Sind die Impfungen vollständig? Haben Sie das gelbe Heft / den Impfpass dabei?</span></li><li><span class="de">Gibt es Allergien oder Vorerkrankungen? Schwangerschaft und Geburt unauffällig?</span></li><li>To the child: <span class="de">Hallo Mia, ich bin Amron. Darf ich mal in deine Ohren schauen? Das kitzelt nur. Du machst das toll.</span></li><li>Red flags to tell parents: <span class="de">Wenn sie nicht mehr trinkt, sehr schläfrig wird, Atemnot bekommt oder Flecken auf der Haut, die beim Drücken nicht verschwinden, kommen Sie sofort wieder.</span></li></ul>`,
dialog:[["Mutter","Sie hat seit gestern 39,5 und ist ganz schlapp.","She's had 39.5 since yesterday and is really listless."],["Du","Trinkt sie noch? Wie viele nasse Windeln hatte sie heute?","Is she still drinking? How many wet nappies today?"],["Mutter","Wenig. Vielleicht zwei.","Little. Maybe two."],["Du","Hat sie sich übergeben, Durchfall, Ausschlag? Ist sie geimpft?","Has she vomited, diarrhoea, rash? Is she vaccinated?"],["Mutter","Kein Erbrechen. Alle Impfungen, der Pass ist hier.","No vomiting. All vaccinations, the record is here."],["Du","Gut. Mia, ich schau mal in deinen Hals und deine Ohren, das kitzelt nur. — Die Ohren sind gerötet, das linke Trommelfell vorgewölbt. Sie hat eine Mittelohrentzündung.","Good. Mia, I'll look in your throat and ears, it just tickles. — The ears are red, the left eardrum bulging. She has a middle ear infection."],["Mutter","Braucht sie Antibiotika?","Does she need antibiotics?"],["Du","Bei ihrem Alter und dem Befund ja. Und Ibuprofen gegen Schmerz und Fieber, nach Gewicht dosiert. Wenn sie gar nicht mehr trinkt oder sehr schläfrig wird, kommen Sie sofort wieder.","At her age and with this finding, yes. And ibuprofen for pain and fever, dosed by weight. If she stops drinking or becomes very drowsy, come back immediately."]],
quiz:[{q:"'nasse Windeln' are asked about to assess:",o:["hydration","vaccination","rash"],a:0,why:"Wet nappies = urine output."},{q:"'das gelbe Heft' is:",o:["the child's check-up booklet","a sick note","a prescription"],a:0,why:"U-Untersuchungen record; the Impfpass is separate."},{q:"'Trommelfell' is:",o:["eardrum","throat","drum"],a:0,why:"Trommel = drum, Fell = skin."}]},
{id:"m16",week:16,title:"Psychiatrie & Suizidalität",sub:"Screening questions you must be able to ask fluently",body:`
<p>Normalise, ask directly, document. Legal note: involuntary admission is by state law (PsychKG / Unterbringungsgesetz) and needs the Oberarzt and often the Ordnungsamt.</p>
<ul><li><span class="de">Viele Menschen in Ihrer Situation haben Gedanken, dass das Leben keinen Sinn mehr hat. Kennen Sie solche Gedanken?</span></li><li><span class="de">Haben Sie daran gedacht, sich das Leben zu nehmen? Haben Sie konkrete Pläne? Haben Sie schon etwas vorbereitet?</span></li><li><span class="de">Was hält Sie im Moment am Leben?</span> (protective factors)</li><li><span class="de">Lassen Sie uns gemeinsam einen Krisenplan machen: Woran merken Sie, dass es schlimmer wird? Wen können Sie anrufen? Was hilft Ihnen? Die Telefonseelsorge ist rund um die Uhr erreichbar: 0800 111 0 111.</span> (Joint safety planning; „Versprechen Sie mir…“ contracts are no longer recommended.)</li><li><span class="de">Hören Sie Stimmen, die andere nicht hören? Haben Sie das Gefühl, verfolgt zu werden?</span></li><li><span class="de">Wie schlafen Sie? Wie ist Ihr Appetit? Können Sie sich noch über etwas freuen?</span></li><li><span class="de">Wie viel Alkohol trinken Sie an einem normalen Tag? Nehmen Sie andere Substanzen?</span></li></ul>`,
dialog:[["Patientin","Es ist alles zu viel. Ich kann nicht mehr.","It's all too much. I can't go on."],["Du","Das klingt sehr belastend. Darf ich offen fragen: Haben Sie manchmal Gedanken, nicht mehr leben zu wollen?","That sounds very hard. May I ask openly: do you sometimes have thoughts of not wanting to live anymore?"],["Patientin","Ja. Oft.","Yes. Often."],["Du","Haben Sie auch daran gedacht, wie Sie es tun würden? Gibt es einen Plan?","Have you also thought about how you would do it? Is there a plan?"],["Patientin","Nein, so weit nicht. Ich habe Kinder.","No, not that far. I have children."],["Du","Ihre Kinder sind wichtig für Sie. Ich möchte, dass Sie heute nicht allein sind. Ich hole die Kollegin aus der Psychiatrie dazu, und wir überlegen gemeinsam, wie es weitergeht. Ist das in Ordnung?","Your children matter to you. I don't want you to be alone today. I'll bring in the psychiatry colleague and we'll think together about next steps. Is that all right?"],["Patientin","Ja. Danke.","Yes. Thank you."]],
quiz:[{q:"Asking directly about suicidal thoughts:",o:["is correct and does not increase risk","should be avoided","is only for psychiatrists"],a:0,why:"Direct, normalised questioning is standard."},{q:"'Was hält Sie am Leben?' assesses:",o:["protective factors","diagnosis","medication"],a:0,why:"Reasons for living."},{q:"'Stimmen hören' screens for:",o:["psychosis","depression","dementia"],a:0,why:"Hallucinations."}]},
{id:"m17",week:17,title:"Geriatrie, Demenz, Angehörige",sub:"The oldest patients and the people who bring them",body:`
<ul><li><span class="de">Wer kümmert sich zu Hause um Sie? Haben Sie einen Pflegegrad? Kommt ein Pflegedienst?</span></li><li><span class="de">Können Sie allein aufstehen, sich waschen, anziehen, einkaufen, kochen?</span> (ADL)</li><li><span class="de">Sind Sie in letzter Zeit gestürzt? Nehmen Sie Schlaftabletten oder Wassertabletten?</span></li><li><span class="de">Gibt es eine Vorsorgevollmacht, eine Betreuung oder eine Patientenverfügung?</span></li><li>Orientation: <span class="de">Welches Jahr haben wir? Welcher Monat? Wo sind wir hier? Wie heißt die Bundeskanzlerin / der Bundeskanzler?</span></li><li>Delir: <span class="de">Ist Ihr Vater sonst geistig klar? Seit wann ist er verwirrt? Kam das plötzlich?</span></li><li>Discharge planning: <span class="de">Sozialdienst einschalten, Kurzzeitpflege, Reha beantragen, Hilfsmittel (Rollator, Pflegebett) verordnen.</span></li></ul>`,
dialog:[["Tochter","Meine Mutter ist seit zwei Tagen völlig durcheinander, sonst ist sie klar.","My mother has been completely confused for two days, otherwise she's clear."],["Du","Das ist wichtig. Hat sie Fieber, Schmerzen beim Wasserlassen, neue Medikamente bekommen, ist sie gestürzt?","That's important. Has she had fever, pain passing urine, new medications, has she fallen?"],["Tochter","Der Hausarzt hat letzte Woche eine Schlaftablette verschrieben.","The GP prescribed a sleeping tablet last week."],["Du","Das kann ein Auslöser sein. Wir suchen nach einer Infektion und schauen uns die Medikamente an. Frau Berger, wissen Sie, wo Sie hier sind?","That can be a trigger. We'll look for an infection and review the medication. Mrs Berger, do you know where you are?"],["Patientin","Im Hotel?","In the hotel?"],["Du","Sie sind im Krankenhaus, Ihre Tochter ist bei Ihnen. Gibt es eine Vorsorgevollmacht?","You're in hospital, your daughter is with you. Is there a power of attorney?"],["Tochter","Ja, ich habe sie. Und eine Patientenverfügung.","Yes, I have it. And an advance directive."]],
quiz:[{q:"'Pflegegrad' is:",o:["the care-level grading for long-term care insurance","a nurse's rank","a hospital ward"],a:0,why:"Pflegegrad 1–5 decides Pflegeversicherung benefits."},{q:"'Vorsorgevollmacht' is:",o:["power of attorney for health/finance","a living will","a will (testament)"],a:0,why:"Patientenverfügung = living will; Betreuung = court-appointed guardian."},{q:"'völlig durcheinander, sonst klar' suggests:",o:["delirium","dementia","depression"],a:0,why:"Acute change on a clear baseline."}]},
{id:"m18",week:18,title:"Gynäkologie & Schwangere in der Notaufnahme",sub:"Asking the questions you cannot skip",body:`
<ul><li><span class="de">Wann war Ihre letzte Regelblutung? War sie normal? Ist Ihre Periode regelmäßig?</span></li><li><span class="de">Könnten Sie schwanger sein? Verhüten Sie? Womit?</span></li><li><span class="de">In welcher Schwangerschaftswoche sind Sie? Haben Sie den Mutterpass dabei?</span></li><li><span class="de">Haben Sie Blutungen, Schmerzen, Ausfluss, Fieber? Spüren Sie das Kind?</span></li><li><span class="de">Wie viele Schwangerschaften und Geburten hatten Sie? Gab es Fehlgeburten oder Kaiserschnitte?</span></li><li>Sensitivity: offer a female colleague or chaperone: <span class="de">Möchten Sie, dass eine Kollegin bei der Untersuchung dabei ist?</span></li></ul>`,
dialog:[["Patientin","Ich habe seit heute Morgen starke Schmerzen im Unterbauch, rechts.","I've had severe lower abdominal pain since this morning, on the right."],["Du","Wann war Ihre letzte Regelblutung?","When was your last period?"],["Patientin","Vor etwa sieben Wochen. Sie ist sonst regelmäßig.","About seven weeks ago. It's usually regular."],["Du","Könnten Sie schwanger sein? Haben Sie einen Test gemacht?","Could you be pregnant? Have you done a test?"],["Patientin","Positiv, vor einer Woche.","Positive, a week ago."],["Du","Haben Sie Blutungen oder Schwindel?","Any bleeding or dizziness?"],["Patientin","Leichte Schmierblutung. Und mir war kurz schwarz vor Augen.","Light spotting. And things went black for a moment."],["Du","Dann müssen wir eine Eileiterschwangerschaft ausschließen. Wir machen sofort einen Ultraschall und nehmen Blut ab, und ich hole die Gynäkologin dazu. Bitte ab jetzt nichts mehr essen oder trinken.","Then we must rule out an ectopic pregnancy. We'll do an ultrasound immediately and take blood, and I'll get the gynaecologist. Please nothing to eat or drink from now on."]],
quiz:[{q:"'Mutterpass' is:",o:["the pregnancy record booklet","a mother's ID","a maternity ticket"],a:0,why:"Every pregnant woman carries it."},{q:"'Eileiterschwangerschaft' is:",o:["ectopic pregnancy","twin pregnancy","miscarriage"],a:0,why:"Eileiter = fallopian tube."},{q:"'Schmierblutung' is:",o:["spotting","heavy bleeding","nosebleed"],a:0,why:"schmieren = to smear."}]},
{id:"m19",week:19,title:"Intoxikation, Alkohol, Polizei",sub:"Intoxicated patients, legal requests, the Betreuung question",body:`
<ul><li><span class="de">Was haben Sie genommen? Wie viel? Wann? Alkohol dazu? Haben Sie Tabletten geschluckt – welche, wie viele, wann?</span></li><li><span class="de">Wollten Sie sich etwas antun?</span> (intent) <span class="de">Ich muss das fragen.</span></li><li>Police requests: blood draw for alcohol (<span class="de">Blutentnahme nach § 81a StPO</span>): since 2017, for suspected drink-driving the police or prosecutor can order it without a judge; it is still done by a doctor and only on a proper order; a patient's refusal and the Schweigepflicht must be weighed. <span class="de">Ich darf Ihnen ohne Einwilligung des Patienten keine Auskunft geben.</span></li><li>Capacity: <span class="de">Ist der Patient einwilligungsfähig? Versteht er, was wir ihm erklären?</span></li><li>Violence/aggression: <span class="de">Ich verstehe, dass Sie wütend sind. Ich kann Ihnen nur helfen, wenn Sie ruhig bleiben. Sicherheitsdienst bitte zur ZNA.</span></li></ul>`,
dialog:[["Polizist","Guten Abend, wir bringen einen Mann, stark alkoholisiert, Sturz auf der Straße, Platzwunde am Kopf.","Good evening, we're bringing a man, heavily intoxicated, fell in the street, laceration on the head."],["Du","Danke. Herr Lange, hören Sie mich? Wie viel haben Sie getrunken?","Thanks. Mr Lange, can you hear me? How much have you drunk?"],["Patient","Paar Bier. Lass mich in Ruhe.","Few beers. Leave me alone."],["Du","Ich muss die Wunde anschauen und ausschließen, dass im Kopf etwas passiert ist. Nehmen Sie Blutverdünner? Haben Sie sich übergeben?","I need to look at the wound and rule out an injury inside the head. Do you take blood thinners? Have you vomited?"],["Polizist","Wir bräuchten noch eine Blutentnahme für den Alkoholwert.","We'd also need a blood draw for the alcohol level."],["Du","Liegt eine Anordnung nach § 81a StPO vor? — Dann nehme ich das Blut ab, dokumentiere die Uhrzeit, und die Probe geht versiegelt an Sie. Die Behandlung bleibt davon unabhängig.","Is there an order under § 81a StPO? — Then I'll draw the blood, document the time, and the sample goes to you sealed. Treatment remains independent of that."]],
quiz:[{q:"'Platzwunde' is:",o:["laceration","bruise","burn"],a:0,why:"A split wound, usually scalp."},{q:"Giving patient details to police without consent:",o:["is restricted by Schweigepflicht","is always required","is never allowed"],a:0,why:"Confidentiality unless legal exceptions apply."},{q:"'einwilligungsfähig' means:",o:["capable of giving consent","agreeable","cooperative"],a:0,why:"Capacity to consent."}]},
{id:"m20",week:20,title:"Der Arztbrief",sub:"Writing the discharge letter in idiomatic German",body:`
<p>Structure: <span class="de">Diagnosen (Haupt-, Nebendiagnosen) · Anamnese · Befunde (klinisch, Labor, Bildgebung) · Therapie und Verlauf · Procedere / Empfehlung · Medikation bei Entlassung</span>. Verbs in Präteritum/Perfekt, passive, nominal. Stock phrases:</p>
<ul><li><span class="de">Wir berichten über o.g. Patienten, der sich vom 12.10. bis 15.10.2026 in unserer stationären Behandlung befand.</span></li><li><span class="de">Die Aufnahme erfolgte notfallmäßig bei ...</span></li><li><span class="de">Laborchemisch zeigte sich ein erhöhtes CRP bei normwertigen Leukozyten.</span></li><li><span class="de">Unter antibiotischer Therapie mit ... kam es zu einer raschen Besserung.</span></li><li><span class="de">Der weitere Verlauf gestaltete sich komplikationslos.</span></li><li><span class="de">Wir entlassen den Patienten in gutem Allgemeinzustand in Ihre weitere hausärztliche Betreuung.</span></li><li><span class="de">Wir bitten um Kontrolle der Nierenwerte in einer Woche und um Wiedervorstellung bei Beschwerdezunahme.</span></li><li><span class="de">Mit freundlichen kollegialen Grüßen</span></li></ul>`,
dialog:[],
quiz:[{q:"'o.g.' means:",o:["oben genannt (above-mentioned)","ohne Gewähr","ohne Grund"],a:0,why:"Standard letter abbreviation."},{q:"'komplikationslos' means:",o:["without complications","complicated","unknown"],a:0,why:"-los = -less."},{q:"'Mit freundlichen kollegialen Grüßen' is used:",o:["doctor to doctor","doctor to patient","doctor to Amt"],a:0,why:"The collegial closing."}]},
{id:"m21",week:21,title:"Sprachbarriere, Dolmetscher, Kultur im Krankenhaus",sub:"When the patient's German is worse than yours",body:`
<ul><li><span class="de">Sprechen Sie Deutsch? Englisch? Welche Sprache sprechen Sie? Haben Sie jemanden, der übersetzen kann? Wir können einen Telefondolmetscher rufen.</span></li><li>Simple German strategy: short sentences, present tense, pointing, yes/no questions, pictures. <span class="de">Schmerz hier? Ja oder nein? Zeigen Sie.</span></li><li>Family interpreters: fine for history, not for consent to major procedures or bad news; children never.</li><li>Your own accent: say <span class="de">Entschuldigung, ich bin noch dabei, Deutsch zu lernen. Könnten Sie das bitte wiederholen?</span> Patients respond warmly; pretending to understand is dangerous.</li><li>Faith and food: ask, don't assume: <span class="de">Gibt es etwas, das wir bei der Behandlung aus religiösen Gründen beachten sollten?</span></li></ul>`,
dialog:[["Patientin","(Arabic) ...","..."],["Du","Sprechen Sie Deutsch? Englisch? — Ich spreche Arabisch. Ich kann mit Ihnen auf Arabisch sprechen und dokumentiere auf Deutsch.","Do you speak German? English? — I speak Arabic. I can speak with you in Arabic and document in German."],["Pflege","Soll ich den Telefondolmetscher trotzdem anfordern?","Should I still request the phone interpreter?"],["Du","Für die Aufklärung zur OP ja, bitte, damit es dokumentiert ist. Die Anamnese mache ich selbst.","For the surgical consent yes, please, so it's documented. I'll do the history myself."]],
quiz:[{q:"A child interpreting for a parent's consent is:",o:["not acceptable","fine","required"],a:0,why:"Use a professional interpreter for consent."},{q:"If you didn't understand a patient:",o:["ask them to repeat slowly","nod and move on","switch to English"],a:0,why:"Honesty is safer and respected."},{q:"'Dolmetscher' is:",o:["interpreter","translator (written)","nurse"],a:0,why:"Übersetzer = written; Dolmetscher = spoken."}]},
{id:"m22",week:22,title:"Approbation, Berufserlaubnis, Bewerbung",sub:"The bureaucracy of becoming a doctor in Germany",body:`
<p>Pathway for a non-EU degree (varies by Bundesland; check the Approbationsbehörde of the state you target):</p>
<ol><li><b>Sprachnachweis</b>: B2 (telc/Goethe) general German.</li><li><b>Antrag auf Approbation</b> at the state authority (e.g. Regierungspräsidium, Landesamt für Gesundheit): Lebenslauf (CV), degree, transcripts, polizeiliches Führungszeugnis, ärztliches Attest, apostilles, certified translations.</li><li><b>Fachsprachprüfung</b> (C1 medical) at the Landesärztekammer.</li><li><b>Gleichwertigkeitsprüfung</b> of your degree; if not equivalent → <b>Kenntnisprüfung</b> (oral-practical exam, Innere + Chirurgie + a third subject).</li><li>Meanwhile: <b>Berufserlaubnis</b> (temporary licence, up to 2 years) lets you work under supervision.</li></ol>
<p>Application (<span class="de">Bewerbung</span>): <span class="de">Anschreiben</span> (one page), <span class="de">Lebenslauf</span> tabular with photo (still common), certificates. Interview: <span class="de">Vorstellungsgespräch</span>, often with a <span class="de">Hospitation</span> (observership) first; ask for one.</p>
<ul><li><span class="de">Ich bewerbe mich um eine Stelle als Arzt in Weiterbildung in Ihrer Zentralen Notaufnahme.</span></li><li><span class="de">Ich verfüge über ... Jahre Erfahrung in der Notfall- und Allgemeinmedizin.</span></li><li><span class="de">Gern würde ich vorab eine Hospitation absolvieren.</span></li></ul>`,
dialog:[["Chefarzt","Herr Ismail, warum Notfallmedizin, und warum bei uns?","Mr Ismail, why emergency medicine, and why with us?"],["Du","Ich arbeite seit vier Jahren als Allgemeinarzt mit Schwerpunkt Notfall- und Arbeitsmedizin. Ihre ZNA ist zertifiziertes Traumazentrum, und Sie bilden zum Zusatz Klinische Akut- und Notfallmedizin aus. Das ist genau mein Ziel.","I've worked for four years as a GP with a focus on emergency and occupational medicine. Your ER is a certified trauma centre, and you train for the emergency medicine qualification. That's exactly my goal."],["Chefarzt","Wie ist der Stand Ihrer Approbation?","What's the status of your licence?"],["Du","Der Antrag läuft, die Fachsprachprüfung ist für März angemeldet. Mit Berufserlaubnis könnte ich ab Mai beginnen.","The application is in progress, the language exam is booked for March. With a temporary licence I could start in May."],["Chefarzt","Gut. Wir machen zuerst zwei Wochen Hospitation, dann sehen wir weiter.","Good. We'll do two weeks of observership first, then we'll see."]],
quiz:[{q:"'Berufserlaubnis' is:",o:["temporary licence to practise","full licence","a work visa"],a:0,why:"Bridges the time until Approbation."},{q:"'Kenntnisprüfung' is:",o:["the knowledge exam when a degree is not deemed equivalent","the language exam","the driving test"],a:0,why:"Oral-practical, Innere + Chirurgie + third."},{q:"'Hospitation' is:",o:["an observership","a hospital admission","a hospitality job"],a:0,why:"Unpaid period observing the department; ask for one."}]},
{id:"m23",week:23,title:"Fachsprachprüfung: Simulation I",sub:"A timed run: 20 min patient, 20 min writing, 20 min presenting",body:`
<p>Use the mock generator below: it gives you a patient profile and a chief complaint. Set a timer. Part 1: talk to the patient aloud (use the question chunks from lessons 2–3). Part 2: write the Anamnesebogen (lesson 7 format). Part 3: present to the Oberarzt (lesson 5 order), then answer the examiner's likely questions: <span class="de">Welche Differentialdiagnosen? Welche Untersuchungen? Wie behandeln Sie? Was sagen Sie dem Patienten?</span></p>
<p>Scoring yourself: did you cover all history domains; did you use lay language with the patient and terminology with the colleague; did the written note contain Diagnose, DD, Procedere; did you stay in Sie; did you manage 20 minutes without English?</p>`,
dialog:[],
quiz:[{q:"In part 1 the examiner-patient speaks like:",o:["a layperson","a doctor","a nurse"],a:0,why:"You must switch registers."},{q:"Part 3 should begin with:",o:["name, age, chief complaint, duration","the treatment","the labs"],a:0,why:"Patientenvorstellung order."},{q:"If you forget a word with the patient:",o:["paraphrase in simple German","switch to English","stop"],a:0,why:"Communication strategy is scored."}]},
{id:"m24",week:24,title:"Erste Woche im Dienst: Überleben",sub:"What nobody tells you about the first German shift",body:`
<ul><li>Introduce yourself to every nurse on the shift. <span class="de">Ich bin neu, ich frage lieber einmal zu viel.</span></li><li>Learn the house SOPs (<span class="de">Standards</span>), the phone numbers (<span class="de">Funk, Oberarzt, Labor, Radiologie</span>), the KIS (hospital IT: Orbis, SAP, Meona...). Ask for the <span class="de">Einarbeitung</span> plan.</li><li>Call the Oberarzt early: in Germany the mistake is not calling – nobody minds if you call too often.</li><li>Document times, who you informed, what you ordered. Sign everything.</li><li>Medication: Germany uses <span class="de">Novalgin (Metamizol)</span> freely, <span class="de">Paracetamol, Ibuprofen</span>; opioids with <span class="de">BtM-Rezept</span>. Learn the names Germans use on the ward: ASS (Aspirin), Novalgin (Metamizol), Lasix (Furosemid), Beloc (Metoprolol), Clexane (Enoxaparin) and Heparin.</li><li>Phone etiquette: answer with ward and surname: <span class="de">ZNA, Ismail.</span></li><li>Breaks: take them. Say <span class="de">Ich gehe kurz Mittag, Funk ist bei Dr. Yilmaz.</span></li></ul>`,
dialog:[["Pflege","Herr Doktor, Koje 4 hat RR 80 systolisch und ist kaltschweißig.","Doctor, bay 4 has systolic BP 80 and is cold and sweaty."],["Du","Ich komme sofort. Bitte Monitor dran, zweiten Zugang, 500 ml Ringer anhängen. Wer ist der Patient?","I'm coming right away. Please monitor on, second IV, hang 500 ml Ringer's. Who is the patient?"],["Pflege","Herr Weiß, 70, kam mit Bauchschmerzen, war bis eben stabil.","Mr Weiß, 70, came with abdominal pain, was stable until now."],["Du","Blutgas und Laktat bitte. Ich rufe den Oberarzt. — Herr Dr. Braun, Ismail, ZNA. Herr Weiß, 70, akutes Abdomen, jetzt hypotensiv bei 80 systolisch, kaltschweißig. Ich vermute eine Sepsis oder ein rupturiertes Aneurysma. Sono mache ich jetzt. Könnten Sie kommen?","Blood gas and lactate please. I'm calling the senior. — Dr Braun, Ismail, ER. Mr Weiß, 70, acute abdomen, now hypotensive at 80 systolic, cold and sweaty. I suspect sepsis or a ruptured aneurysm. I'm doing the ultrasound now. Could you come?"],["Oberarzt","Bin unterwegs. Blut kreuzen, Chirurgie informieren.","On my way. Cross-match blood, inform surgery."]],
quiz:[{q:"'Einarbeitung' is:",o:["onboarding/training-in period","overtime","a work report"],a:0,why:"Ask for the Einarbeitungsplan on day one."},{q:"Answering the phone on a German ward:",o:["ward + surname","hello","yes?"],a:0,why:"'ZNA, Ismail.'"},{q:"'Blut kreuzen' means:",o:["cross-match blood","draw blood","transfuse"],a:0,why:"Kreuzprobe = cross-match."}]}
];
// ---- FSP mock case generator parts
const FSP_CASES = [
{name:"Herr Thomas Richter",age:54,job:"Lkw-Fahrer",cc:"seit 3 Stunden drückender Brustschmerz mit Ausstrahlung in den linken Arm, Kaltschweißigkeit",pmh:"Bluthochdruck, Raucher 30 py, Vater Herzinfarkt mit 60",meds:"Ramipril 5 mg 1-0-0",all:"keine bekannt",soc:"verheiratet, 2 Kinder, Schichtarbeit",dx:"Akutes Koronarsyndrom; DD Lungenembolie, Aortendissektion, Pneumothorax",plan:"12-Kanal-EKG, Troponin, Monitor, ASS, Heparin nach Rücksprache, Kardiologie"},
{name:"Frau Sabine Vogt",age:38,job:"Lehrerin",cc:"seit gestern Abend stärkste Kopfschmerzen, schlagartig begonnen, Übelkeit, Lichtscheu",pmh:"Migräne seit Jugend, Pille",meds:"Ethinylestradiol/Levonorgestrel",all:"Penicillin (Exanthem)",soc:"ledig, Nichtraucherin",dx:"V.a. Subarachnoidalblutung; DD Migräne, Meningitis, Sinusvenenthrombose",plan:"cCT nativ sofort, bei negativem CT Lumbalpunktion, Neurologie/Neurochirurgie"},
{name:"Herr Ali Demir",age:67,job:"Rentner, früher Bäcker",cc:"seit 2 Tagen zunehmende Luftnot, Husten mit gelbem Auswurf, Fieber bis 39 °C",pmh:"COPD GOLD II, Diabetes Typ 2, Z.n. Nikotinabusus 40 py (seit 5 Jahren Ex-Raucher)",meds:"Tiotropium, Salbutamol b.B., Metformin 1000 mg 1-0-1",all:"keine",soc:"verwitwet, lebt allein, Tochter in der Nähe",dx:"Ambulant erworbene Pneumonie bei COPD; DD exazerbierte COPD, Herzinsuffizienz, Lungenembolie",plan:"Rö-Thorax, BGA, Labor, Blutkulturen, Antibiose, O2 mit Ziel 88–92 %, stationäre Aufnahme"},
{name:"Frau Elena Petrova",age:29,job:"Studentin",cc:"seit 12 Stunden Schmerzen im rechten Unterbauch, erst periumbilikal, Übelkeit, Appetitlosigkeit",pmh:"keine, letzte Regel vor 2 Wochen",meds:"keine",all:"keine",soc:"WG, Nichtraucherin, gelegentlich Alkohol",dx:"Akute Appendizitis; DD Ovarialzyste/-torsion, Extrauteringravidität, Adnexitis, Harnwegsinfekt",plan:"Labor, Urin inkl. Schwangerschaftstest, Sono Abdomen, chirurgisches Konsil, nüchtern lassen"},
{name:"Herr Karl Hoffmann",age:78,job:"Rentner, früher Landwirt",cc:"seit 1 Stunde Schwäche im rechten Arm und Bein, verwaschene Sprache, Mundwinkel hängt",pmh:"Vorhofflimmern, Bluthochdruck, Hypercholesterinämie",meds:"Apixaban 5 mg 1-0-1, Bisoprolol, Atorvastatin",all:"Kontrastmittel (Übelkeit)",soc:"lebt mit Ehefrau, selbstständig, Nichtraucher",dx:"V.a. ischämischen Schlaganfall links; DD intrazerebrale Blutung unter Antikoagulation, TIA, Hypoglykämie",plan:"Stroke-Alarm, BZ, cCT/CTA sofort, NIHSS, Neurologie, Zeitfenster dokumentieren, Antikoagulation beachten"},
{name:"Frau Monika Schäfer",age:45,job:"Krankenschwester",cc:"seit 4 Tagen kolikartige Schmerzen im rechten Oberbauch nach fettigem Essen, heute Fieber und Schüttelfrost, gelbliche Haut",pmh:"Adipositas, Gallensteine bekannt",meds:"keine",all:"keine",soc:"verheiratet, 3 Kinder, Schichtdienst",dx:"Cholangitis/Cholezystitis; DD Choledocholithiasis, Hepatitis, Pankreatitis",plan:"Labor mit Cholestaseparametern, Lipase, Blutkulturen, Sono, Antibiose, Chirurgie/Gastroenterologie, ggf. ERCP"},
{name:"Herr Jonas Keller",age:22,job:"Auszubildender (Elektriker)",cc:"vor 30 Minuten Sturz vom Gerüst aus 3 m Höhe, Schmerzen im Becken und linken Unterschenkel, kurz benommen",pmh:"keine",meds:"keine",all:"keine",soc:"ledig, Raucher 5 py",dx:"Polytrauma-Verdacht; DD Beckenfraktur, Unterschenkelfraktur, SHT, innere Blutung",plan:"Schockraum, ABCDE, Beckenschlinge, FAST-Sono, Trauma-CT, Unfallchirurgie, Analgesie, Tetanus prüfen"},
{name:"Frau Gisela Brandt",age:82,job:"Rentnerin",cc:"seit 2 Tagen verwirrt, nachts unruhig, trinkt wenig, laut Tochter sonst geistig klar",pmh:"leichte Demenz, Herzinsuffizienz, Harnwegsinfekte rezidivierend",meds:"Torasemid 10 mg, Ramipril, seit 1 Woche Zopiclon zur Nacht",all:"Sulfonamide",soc:"lebt allein mit Pflegedienst 2x täglich, Pflegegrad 2",dx:"Delir bei V.a. Harnwegsinfekt und Exsikkose, medikamentös (Zopiclon); DD Hyponatriämie, Pneumonie, Schlaganfall",plan:"Labor inkl. Elektrolyte, Urinstatus/-kultur, Flüssigkeit, Zopiclon absetzen, Delirprophylaxe, stationäre Aufnahme Geriatrie"}
];

// ---- 40-week plan, regenerated from SYLLABUS by tools/gen_weeks.js (i2). The chapter is the clock; the week is where the nominal plan stands.
// ch = chapters that start in this week. Do not edit by hand: edit v2/x_i2_syl.js and run node tools/gen_weeks.js
const WEEKS = [
{n:1,theme:"Der Pakt",goal:"Kann sich begrüßen, verabschieden und vorstellen (Name, Beruf, Herkunft), einen Namen buchstabieren und die Laute ü, ö, ich-Laut und p hörbar bilden.",gram:["g0","g1","g58"],med:["m1"],alltag:["a1","a2"],texts:["t1","r19"],faust:[],kultur:[2,28,16],ch:[1,2],phase:"Reich I · A1"},
{n:2,theme:"Hänsel ohne Gretel",goal:"Kann mit sein und haben über sich, andere und einfache Beschwerden sprechen und Mengen im Plural nennen.",gram:["g2","g33","g3","g31","g37"],med:["sz19"],alltag:["sz17"],texts:["r20","t2"],faust:[],kultur:[0,8],ch:[3,4],phase:"Reich I · A1"},
{n:3,theme:"Der Wolf frisst den Akkusativ",goal:"Kann sagen, was er braucht, möchte, nimmt und sucht, und Dinge einer Person zuordnen (mein, Ihr, sein, ihr); unterscheidet der und den.",gram:["g4","g34"],med:[],alltag:[],texts:[],faust:[],kultur:[35,9],ch:[5],phase:"Reich I · A1"},
{n:4,theme:"Das Hexen-Einmaleins",goal:"Kann Zahlen, Uhrzeit, Datum, Telefonnummer und einfache Messwerte verstehen und flüssig sagen und Termine mit um, am, im angeben. Kann sagen und fragen, was fehlt und was wehtut (Was fehlt Ihnen? Mir ist kalt.).",gram:["g36","g35","g73"],med:[],alltag:[],texts:[],faust:[],kultur:[24],ch:[6],phase:"Reich I · A1"},
{n:5,theme:"Rotkäppchen fragt",goal:"Kann einfache W-Fragen und Ja/Nein-Fragen zu Person, Ort, Zeit und Beschwerden stellen und beantworten, auch mit doch; kennt die Verben mit Vokalwechsel. Kann sagen, wohin jemand geht, wo er ist und woher er kommt.",gram:["g32","g57","g72"],med:["m2"],alltag:["sz18"],texts:[],faust:[],kultur:[1],ch:[7,8],phase:"Reich I · A1"},
{n:6,theme:"Ankunft in Prag",goal:"Kann sagen, wem etwas gehört, gegeben oder gesagt wird, Vorerkrankungen, Medikamente und Allergien erfragen und Personen durch Pronomen ersetzen. Setzt den Wortakzent hörbar richtig.",gram:["g5","g39","g84"],med:["m3"],alltag:["a8"],texts:["r22"],faust:[],kultur:[17,32],ch:[9],phase:"Reich II · A2"},
{n:7,theme:"Der Golem erwacht",goal:"Kann Orte und Richtungen in Haus und Stadt angeben, einen Weg beschreiben und sagen, wohin etwas kommt und wo es ist.",gram:["g6","g59"],med:[],alltag:["a4","a6"],texts:["t3"],faust:[],kultur:[27,14],ch:[10],phase:"Reich II · A2"},
{n:8,theme:"Die Klammer",goal:"Kann sagen, was jemand kann, muss, darf, soll und will, Regeln und Verbote erklären und allgemeine Aussagen mit man machen.",gram:["g7","g43"],med:[],alltag:["sx6","sx10"],texts:["t4"],faust:[],kultur:[3],ch:[11],phase:"Reich II · A2"},
{n:9,theme:"Zerrissene Verben",goal:"Kann höfliche Anweisungen bei einer Untersuchung geben, trennbare Verben richtig stellen, Richtungen mit hin und her ausdrücken und Dosierungen ansagen. Gibt Anweisungen auch mit du und ihr.",gram:["g8","g60","g75"],med:["m4","sz20","m14"],alltag:["a7"],texts:[],faust:[],kultur:[6],ch:[12],phase:"Reich II · A2"},
{n:10,theme:"Was gewesen ist",goal:"Kann über Vergangenes berichten und nachfragen, was passiert ist (Perfekt mit haben und sein; war, hatte, konnte, musste), und Angaben im Satz in die übliche Reihenfolge bringen.",gram:["g9","g41","g45"],med:[],alltag:["sx12"],texts:["r23"],faust:[],kultur:[],ch:[13],phase:"Reich II · A2"},
{n:11,theme:"Das Amt",goal:"Kann sich bei einer Behörde anmelden, ein Formular ausfüllen, über sich selbst mit reflexiven Verben sprechen und Namen und Titel richtig beugen (den Patienten, Herrn Demir). Versteht und nennt Fristen und Zeitangaben mit vor, seit, bis und ab.",gram:["g38","g44","g74","g61"],med:[],alltag:["a3","sx3"],texts:["r21"],faust:[],kultur:[4,11],ch:[14],phase:"Reich II · A2"},
{n:12,theme:"Rumpelstilzchen",goal:"Kann Gründe, Meinungen, Bedingungen und Absichten in einfachen Nebensätzen ausdrücken (weil, dass, wenn, ob, um … zu) und indirekt nachfragen. Kann Namen und Nummern am Telefon buchstabieren und Laborwerte vorlesen.",gram:["g40","g42","g85","g96"],med:[],alltag:["sx19","sx15"],texts:["r24"],faust:[],kultur:[22],ch:[15],phase:"Reich II · A2"},
{n:13,theme:"Der Golem",goal:"Stufe A2 erreicht: kann sich in einfachen, routinemäßigen Situationen verständigen, in denen es um einen direkten Austausch von Informationen geht (GER A2, Globalskala).",gram:[],med:[],alltag:["a5"],texts:[],faust:[],kultur:[],ch:[16],phase:"Reich II · A2"},
{n:14,theme:"Nacht",goal:"Kann eine Geschichte oder einen Unfallhergang zusammenhängend in der Vergangenheit erzählen und die Reihenfolge von Ereignissen deutlich machen (Präteritum, Plusquamperfekt, als, nachdem, bevor). Setzt nicht an die richtige Stelle.",gram:["g10","g46","g76"],med:["m11","sm15"],alltag:["sx4"],texts:["r8"],faust:["f1","f2"],kultur:[19],ch:[17],phase:"Reich III · B1"},
{n:15,theme:"Des Pudels Kern",goal:"Kann Personen und Dinge mit Relativsätzen genauer beschreiben, Gründe und Gegengründe in Nebensätzen ausdrücken und unpersönliche Ausdrücke mit es verwenden. Versteht einfachen Dialekt der Region und gibt ihn in Standardsprache wieder.",gram:["g11","g49","g91"],med:["m10"],alltag:["a9","sx8"],texts:["r5"],faust:["f4"],kultur:[],ch:[18],phase:"Reich III · B1"},
{n:16,theme:"Der Schüler",goal:"Kann Besitz und Zugehörigkeit im Genitiv ausdrücken, Gründe und Gegengründe im Stil von Brief und Bericht angeben (wegen, trotz, aufgrund, während) und einen kurzen Befund im Nominalstil schreiben. Verwendet feste Verbindungen wie allergisch gegen oder Angst vor.",gram:["g12","g48","g77"],med:["m7","sm6"],alltag:["a11","sz12"],texts:["r3"],faust:[],kultur:[5],ch:[19],phase:"Reich III · B1"},
{n:17,theme:"Auerbachs Keller",goal:"Kann Personen, Dinge und Befunde genau beschreiben und vergleichen (Adjektivendungen, Komparativ, Superlativ) und einen Patienten in einer Minute vorstellen.",gram:["g13","g62","g78"],med:["m5","sm11"],alltag:["a12"],texts:["t5"],faust:[],kultur:[33,31,18],ch:[20],phase:"Reich III · B1"},
{n:18,theme:"Auerbachs Keller",goal:"Kann Personen, Dinge und Befunde genau beschreiben und vergleichen (Adjektivendungen, Komparativ, Superlativ) und einen Patienten in einer Minute vorstellen.",gram:[],med:[],alltag:[],texts:[],faust:[],kultur:[],ch:[],phase:"Reich III · B1"},
{n:19,theme:"Die Hexenküche",goal:"Kann höflich bitten, Vorschläge machen, Wünsche und irreale Bedingungen ausdrücken (Konjunktiv II, als ob) und ein Telefonat mit einer Bitte um ein Konsil führen. Kann eine Medikamentenanamnese führen.",gram:["g14","g64","g95"],med:["m9","m15"],alltag:["sx9"],texts:["t6"],faust:["f5"],kultur:[30,37],ch:[21],phase:"Reich III · B1"},
{n:20,theme:"Gretchen",goal:"Kann Vorgänge beschreiben, ohne den Handelnden zu nennen (Passiv), Aussagen anderer distanziert wiedergeben (Konjunktiv I in festen Formen) und einen Eingriff in einfachen Worten erklären. Überträgt Laienwörter der Patienten in Fachwörter.",gram:["g15","g47","g90"],med:["m6","m13"],alltag:["sz11","sx5"],texts:["t7"],faust:["f9"],kultur:[7,29],ch:[22],phase:"Reich III · B1"},
{n:21,theme:"Goethes Deutsch",goal:"Kann einen älteren oder literarischen Text mit Hilfe verstehen und in eigenen einfachen Worten wiedergeben, Dialekt und Hochsprache unterscheiden und trennbare von untrennbaren Vorsilben unterscheiden. Verwendet irgend- und welche sowie Relativsätze mit wer und was.",gram:["g16","g63","g86","g79"],med:["sm7","m21"],alltag:["sx14"],texts:["t8"],faust:["f8","f3"],kultur:[15],ch:[23],phase:"Reich III · B1"},
{n:22,theme:"Der Pudel",goal:"Stufe B1 erreicht: kann die Hauptpunkte verstehen, wenn klare Standardsprache verwendet wird, und sich einfach und zusammenhängend über vertraute Themen äußern, Erfahrungen berichten und Ansichten kurz begründen (GER B1, Globalskala).",gram:[],med:[],alltag:[],texts:["r1","r2"],faust:[],kultur:[],ch:[24],phase:"Reich III · B1"},
{n:23,theme:"Die Verwandlung",goal:"Kann Verben mit ihren festen Präpositionen sicher verwenden, mit Partizipien und Adjektiven dichte Beschreibungen bilden und eine vollständige Brustschmerz-Anamnese führen. Stellt Satzglieder im Mittelfeld und im Nachfeld richtig.",gram:["g17","g23","g28","g80"],med:["sz1","m18"],alltag:["sz13"],texts:["r4","r16"],faust:[],kultur:[20],ch:[25],phase:"Reich IV · B2"},
{n:24,theme:"Das Kabinett",goal:"Kann komplexe Relativsätze (mit Präposition, dessen, deren, was, wo) verstehen und bilden, Vermutungen und Vorhersagen nach Sicherheit abstufen und ein psychiatrisches Erstgespräch führen. Setzt Kommas richtig.",gram:["g18","g68","g26","g55"],med:["m16","sm9"],alltag:["sz14"],texts:["r10"],faust:[],kultur:[36],ch:[26],phase:"Reich IV · B2"},
{n:25,theme:"Metropolis",goal:"Kann in einer Diskussion oder einem Forumsbeitrag einen Standpunkt klar gliedern, begründen und abwägen (zweiteilige Konnektoren, Redemittel) und unbekannte Wörter aus ihren Bausteinen erschließen. Kann Grafiken und Statistiken beschreiben.",gram:["g19","g29","g27","g98"],med:["sm10","m22"],alltag:[],texts:["r9","r7"],faust:[],kultur:[21],ch:[27],phase:"Reich IV · B2"},
{n:26,theme:"Metropolis",goal:"Kann in einer Diskussion oder einem Forumsbeitrag einen Standpunkt klar gliedern, begründen und abwägen (zweiteilige Konnektoren, Redemittel) und unbekannte Wörter aus ihren Bausteinen erschließen. Kann Grafiken und Statistiken beschreiben.",gram:[],med:[],alltag:[],texts:[],faust:[],kultur:[],ch:[],phase:"Reich IV · B2"},
{n:27,theme:"Der Sandmann",goal:"Kann gesprochene Alltagssprache mit Verschleifungen und Partikeln verstehen, Zeit, Grund, Zweck, Gegengrund, Folge und Bedingung in Nebensätzen ausdrücken und Verhaltenshinweise mit Bedingungen geben.",gram:["g20","g66","g50","g56"],med:["sz2","sz8"],alltag:["sx7"],texts:["r18"],faust:[],kultur:[],ch:[28],phase:"Reich IV · B2"},
{n:28,theme:"Die Kanzlei",goal:"Kann zwischen Verbalstil und Nominalstil wechseln, amtliche und klinische Schreiben verstehen und eine formelle Nachricht im passenden Register verfassen. Beugt Appositionen und Datumsangaben korrekt.",gram:["g21","g52","g67","g87"],med:["m19","sm16","m24"],alltag:["a10","sz15"],texts:["r13","r15","r6"],faust:[],kultur:[38,26,10],ch:[29],phase:"Reich IV · B2"},
{n:29,theme:"Das Leiden",goal:"Kann das Passiv in allen Zeiten und mit Modalverben sowie seine Ersatzformen verwenden, über Versäumtes und Unwirkliches in der Vergangenheit sprechen und eine schlechte Nachricht klar und rücksichtsvoll überbringen. Verwendet das Passiv mit Modalverb im Konjunktiv (hätte operiert werden müssen).",gram:["g22","g65","g24","g81"],med:["m8","sz6"],alltag:["sx11"],texts:["r17"],faust:[],kultur:[],ch:[30],phase:"Reich IV · B2"},
{n:30,theme:"Babylon",goal:"Kann Äußerungen anderer genau und distanziert wiedergeben, die Sicherheit einer fremden Behauptung kennzeichnen (soll, will), einen längeren Text zusammenhängend aufbauen und Folgen und Wünsche ausdrücken (zu …, als dass; Hätte ich bloß …).",gram:["g25","g51","g30","g88"],med:["m17","sm12"],alltag:["sx1"],texts:["r14","t9","r12"],faust:[],kultur:[23,39],ch:[31],phase:"Reich IV · B2"},
{n:31,theme:"Babylon",goal:"Kann Äußerungen anderer genau und distanziert wiedergeben, die Sicherheit einer fremden Behauptung kennzeichnen (soll, will), einen längeren Text zusammenhängend aufbauen und Folgen und Wünsche ausdrücken (zu …, als dass; Hätte ich bloß …).",gram:[],med:[],alltag:[],texts:[],faust:[],kultur:[],ch:[],phase:"Reich IV · B2"},
{n:32,theme:"Dr. Caligari",goal:"Stufe B2 erreicht: kann die Hauptinhalte komplexer Texte zu konkreten und abstrakten Themen verstehen, sich spontan und fließend verständigen und sich zu einem breiten Themenspektrum klar und detailliert ausdrücken (GER B2, Globalskala).",gram:[],med:[],alltag:[],texts:[],faust:[],kultur:[],ch:[32],phase:"Reich IV · B2"},
{n:33,theme:"Das Anatomische Theater",goal:"Kann dieselbe Information für Laien und für Fachkollegen ausdrücken, Fachwörter korrekt beugen und unbekannte Fachwörter aus griechischen und lateinischen Bausteinen erschließen (GER C1: Registerwechsel). Drückt Befunde knapp in einem Wort aus (belastungsabhängig, kolikartig).",gram:["g71","g94"],med:["m12"],alltag:["sx13"],texts:["rx4"],faust:[],kultur:[12],ch:[33],phase:"Reich V · C1"},
{n:34,theme:"Die Anamnese",goal:"Kann ein Anamnesegespräch von 20 Minuten strukturiert führen, gezielt nachfragen, Gesagtes zusammenfassen, Empathie ausdrücken und auf Fragen der Patientin in Laiensprache eingehen (Fachsprachprüfung Teil 1). Führt Schmerz-, vegetative und Sozialanamnese vollständig.",gram:["g82","g89","g97"],med:["sz3","sm2"],alltag:["sz16"],texts:["rx6"],faust:[],kultur:[],ch:[34],phase:"Reich V · C1"},
{n:35,theme:"Der Brief",goal:"Kann aus Gesprächsnotizen einen vollständigen, formal korrekten Arztbrief im Nominalstil schreiben und lange Attribute und schriftsprachliche Präpositionen sicher verwenden (Fachsprachprüfung Teil 2).",gram:["g53","g69","g70"],med:["m20","sm4"],alltag:["sx2"],texts:["r11"],faust:[],kultur:[],ch:[35],phase:"Reich V · C1"},
{n:36,theme:"Die Übergabe",goal:"Kann einen Patienten am Telefon und bei der Übergabe knapp, strukturiert und vollständig vorstellen (SBAR), Zahlen und Einheiten fehlerfrei ansagen und auf Rückfragen sofort antworten. Klärt über Risiken und ihre Häufigkeit auf.",gram:["g92"],med:["sz5"],alltag:["sx20"],texts:["rx3"],faust:[],kultur:[],ch:[36],phase:"Reich V · C1"},
{n:37,theme:"Walpurgisnacht",goal:"Kann in ethisch und emotional schwierigen Gesprächen (Tod, Patientenverfügung, Kinderschutz, eigener Fehler) klar, rücksichtsvoll und rechtlich sicher sprechen und Bedingungen und Einschränkungen genau formulieren.",gram:["g54","g93"],med:["sm3","sm5","sm13","sm8","sz4","sz7"],alltag:["sx16"],texts:["rx5"],faust:[],kultur:[25,34],ch:[37],phase:"Reich V · C1"},
{n:38,theme:"Die Vorstellung",goal:"Kann einen Fall in Fachsprache strukturiert vorstellen, Verdachts- und Differenzialdiagnosen begründen, ein Vorgehen vorschlagen und Rückfragen eines Prüfers sicher beantworten (Fachsprachprüfung Teil 3).",gram:["g83"],med:["sz9","sm1","sm14","m23"],alltag:["sx18"],texts:["rx8"],faust:[],kultur:[13],ch:[38],phase:"Reich V · C1"},
{n:39,theme:"Kerker",goal:"Kann eigene wiederkehrende Fehler erkennen und selbst korrigieren und alle drei Teile der Fachsprachprüfung an getrennten Tagen unter Zeitvorgabe bestehen.",gram:[],med:["sz10"],alltag:[],texts:["rx1","rx2","rx7"],faust:["f6","f7","f10"],kultur:[],ch:[39],phase:"Reich V · C1"},
{n:40,theme:"Die Kommission",goal:"Fachsprachprüfung bestanden: kann sich im ärztlichen Alltag spontan, fließend und präzise ausdrücken, mit Patienten, Angehörigen und Kollegen in je angemessenem Register (GER C1 im Beruf).",gram:[],med:[],alltag:[],texts:[],faust:[],kultur:[],ch:[40],phase:"Reich V · C1"}
];
const PATHS={
  klinikarzt:{name:"Der Klinikarzt",tag:"Hospital-ready in 6 months · default",desc:"Medical German is the spine: patient, chart, colleague. Everyday German and culture run beside it; grammar and reading serve both.",mix:{med:.38,vocab:.15,gram:.09,alltag:.14,read:.08,kultur:.03,verse:.03,tutor:.1}},
  neuankoemmling:{name:"Der Neuankömmling",tag:"Living in Germany first",desc:"Flat, Amt, bank, neighbours, friends. For the months before you start work, when the clinic can wait but the Bürgeramt cannot.",mix:{alltag:.3,vocab:.15,med:.18,gram:.09,kultur:.08,read:.07,verse:.03,tutor:.1}},
  pruefling:{name:"Der Prüfling",tag:"Fachsprachprüfung sprint",desc:"Three registers, daily. Mock cases, chart writing, presenting. Use for the 6–8 weeks before the exam.",mix:{med:.5,vocab:.15,gram:.07,alltag:.08,read:.05,kultur:.02,verse:.03,tutor:.1}},
  architekt:{name:"Der Architekt",tag:"Grammar as scaffolding",desc:"Know why before what. Heavier grammar early, then clinic and daily life on a solid frame.",mix:{gram:.25,vocab:.17,med:.22,alltag:.12,read:.08,kultur:.03,verse:.03,tutor:.1}},
  wanderer:{name:"Der Wanderer",tag:"Input first",desc:"Read and listen a lot, tap words, let grammar explain what you have already met.",mix:{read:.25,vocab:.15,med:.22,alltag:.15,gram:.05,kultur:.04,verse:.04,tutor:.1}},
  rezitator:{name:"Der Rezitator",tag:"Sound, rhythm, Faust",desc:"Shadowing and verse for pronunciation and word order; clinic kept warm. The literary path.",mix:{verse:.22,read:.18,vocab:.15,med:.2,gram:.07,alltag:.05,kultur:.03,tutor:.1}}
};
const MODULES={med:["Klinik","klinik","c-med"],tutor:["Tutor","tutor","c-tutor"],vocab:["Wörter","woerter","c-vocab"],gram:["Grammatik","grammatik","c-gram"],alltag:["Alltag","alltag","c-alltag"],read:["Lesen","lesen","c-read"],kultur:["Kultur","kultur","c-kultur"],verse:["Literatur","faust","c-verse"]};
// ---- idioms of the day
const IDIOMS=[
["Ich verstehe nur Bahnhof.","I understand nothing (literally: only 'train station'). Said with a smile when a dialect defeats you."],
["Das ist nicht mein Bier.","Not my problem / not my business."],
["Da liegt der Hund begraben.","That's the crux of the matter."],
["Jetzt haben wir den Salat.","Now we're in a mess."],
["Alles hat ein Ende, nur die Wurst hat zwei.","Everything ends eventually; said to close a topic lightly."],
["Ich drücke dir die Daumen.","Fingers crossed for you (Germans press thumbs)."],
["Das kannst du vergessen.","Forget it; that won't happen."],
["Halt die Ohren steif.","Keep your chin up."],
["Die Kirche im Dorf lassen.","Don't exaggerate; keep things in proportion."],
["Es ist noch kein Meister vom Himmel gefallen.","Nobody is born an expert."],
["Hals- und Beinbruch!","Break a leg (good luck)."],
["Kein Schwein war da.","Nobody was there."],
["Das Leben ist kein Ponyhof.","Life isn't a picnic."],
["Ich habe die Nase voll.","I've had enough."],
["Es geht um die Wurst.","It's crunch time."],
["Mir reicht's.","That's enough for me."],
["Das passt wie die Faust aufs Auge.","It fits perfectly (or, ironically, not at all)."],
["Ordnung muss sein.","There must be order; the national proverb, said half-ironically."],
["Morgenstund hat Gold im Mund.","The early bird catches the worm."],
["Man sieht sich immer zweimal im Leben.","Be decent; you'll meet people again."],
["Auf Wiederhören.","Goodbye on the phone (hear again, not see again)."],
["Nichts für ungut.","No offence meant."],
["Das ist Jacke wie Hose.","It makes no difference."],
["Schwein gehabt!","Got lucky!"],
["Ich bin fix und fertig.","I'm completely exhausted."],
["Er hat Haare auf den Zähnen.","She/he is tough and sharp-tongued."]
];

// ================= EXTRA DATA (v2) =================
// Pronunciation + contrastive lesson for Arabic-speaking learners
GRAMMAR.unshift({id:"g0",week:1,title:"Aussprache & Fallen für Arabischsprachige",sub:"The sounds and habits that trip Arabic speakers, and the ones you get for free",body:`
<p>Some German sounds are easy for you because Arabic already has them; a few need deliberate practice. Tap 🔊 on each pair and say both words aloud.</p>
<table><tr><th>Sound</th><th>Why it matters</th><th>Minimal pairs</th></tr>
<tr><td><b class="g">p / b</b></td><td>Arabic has no /p/; "Puls" said as "Buls" confuses patients.</td><td class="de"><span data-say="Paar, Bar">Paar – Bar</span>, <span data-say="Pein, Bein">Pein – Bein</span>, <span data-say="packen, backen">packen – backen</span>, <span data-say="Puls, Blut, Praxis">Puls · Blut · Praxis</span></td></tr>
<tr><td><b class="g">f / v / w</b></td><td>German <i>v</i> is usually /f/, German <i>w</i> is /v/ (never English w).</td><td class="de"><span data-say="Vetter, Wetter">Vetter – Wetter</span>, <span data-say="Wein, Bein">Wein – Bein</span>, <span data-say="Vater, Wasser, Vene">Vater · Wasser · Vene</span></td></tr>
<tr><td><b class="g">ü / ö</b></td><td>Rounded front vowels: say <i>i</i> with rounded lips (ü), <i>e</i> with rounded lips (ö).</td><td class="de"><span data-say="Tier, Tür">Tier – Tür</span>, <span data-say="Kiste, Küste">Kiste – Küste</span>, <span data-say="lesen, lösen">lesen – lösen</span>, <span data-say="Übelkeit, Röntgen">Übelkeit · Röntgen</span></td></tr>
<tr><td><b class="g">e / i, o / u</b></td><td>Arabic has three vowel qualities; German has more. Keep them apart.</td><td class="de"><span data-say="bieten, beten">bieten – beten</span>, <span data-say="Mus, Moos">Mus – Moos</span>, <span data-say="Ofen, Ufer">Ofen – Ufer</span></td></tr>
<tr><td><b class="g">Vokallänge</b></td><td>Long vs short changes the word.</td><td class="de"><span data-say="Miete, Mitte">Miete – Mitte</span>, <span data-say="Staat, Stadt">Staat – Stadt</span>, <span data-say="Ofen, offen">Ofen – offen</span></td></tr>
<tr><td><b class="g">Konsonantenhäufung</b></td><td>Don't insert a helping vowel: not "esprechen", "Sitrom".</td><td class="de"><span data-say="Sprechstunde, Schmerz, Pflege, Strumpf">Sprechstunde · Schmerz · Pflege · Strumpf</span></td></tr>
<tr><td><b class="g">ich-Laut</b></td><td>Soft hiss, not ش. The ach-Laut is your خ, free.</td><td class="de"><span data-say="ich, Licht, Kirche, Kirsche">ich · Licht · Kirche – Kirsche</span></td></tr>
<tr><td><b class="g">R</b></td><td>The German uvular R is close to غ. Free. Final <i>-er</i> becomes a light "a".</td><td class="de"><span data-say="rot, Fieber, Vater">rot · Fieber · Vater</span></td></tr>
<tr><td><b class="g">Auslaut</b></td><td>Final b/d/g sound like p/t/k.</td><td class="de"><span data-say="Tag, Kind, Bad">Tag · Kind · Bad</span></td></tr></table>
<p><b>Stress:</b> native words on the first syllable (<span class="de">Schmerzen, Blutdruck</span>); Latin terms usually on the last (<span class="de">Patient, Medizin, Diagnose, Operation</span>).</p>
<p><b>Grammar habits to unlearn</b> (from Arabic and English):</p>
<ul><li>No article with professions: <span class="de">Ich bin Arzt.</span> (not <i>der Arzt</i>)</li>
<li>Never drop the verb "to be": <span class="de">Der Blutdruck <b>ist</b> hoch.</span> Arabic nominal sentences have no copula; German always needs one.</li>
<li><span class="de">seit</span> + present tense: <span class="de">Ich arbeite seit vier Jahren als Arzt.</span> (English speakers say "have worked")</li>
<li>Compounds: the last word is the head, read from the right: <span class="de">Brustschmerzen</span> = pains (of the chest), <span class="de">Schmerzmittel</span> = a remedy (for pain).</li>
<li>Capitalise every noun and the polite <span class="de">Sie</span>; <span class="de">sie</span> lowercase is she/they.</li></ul>`,
quiz:[{q:"How do you say 'I am a doctor'?",o:["Ich bin Arzt.","Ich bin der Arzt.","Ich Arzt."],a:0,why:"Professions take no article in German."},
{q:"German 'v' in 'Vater' sounds like:",o:["f","v","w (English)"],a:0,why:"v is usually /f/ in native words: Vater, viel, Vene."},
{q:"'Brustschmerzen' is primarily a kind of:",o:["pain","chest","medicine"],a:0,why:"The head of a compound is its last part."},
{q:"Correct with 'seit':",o:["Ich arbeite seit vier Jahren hier.","Ich habe seit vier Jahren hier gearbeitet.","Ich arbeitete seit vier Jahren hier."],a:0,why:"seit + present tense for something still going on."}]});
if(!WEEKS[0].gram.includes("g0"))WEEKS[0].gram.unshift("g0"); // i2: the regenerated plan already starts with g0
// ---- Focus = pathway. The method (four strands) is the same for all; the focus picks the content.
const FOCUS={
  klinik:{name:"Klinik",tag:"Krankenhausreif in 9–12 Monaten",desc:"Medical German is the spine: patient, chart, colleague. Daily life and culture run beside it.",order:["med","gram","alltag"],newOrder:["core","satz","med","alltag","faust"],mix:{review:.2,learn:.2,input:.2,output:.25,fluency:.15}},
  ankommen:{name:"Ankommen",tag:"Leben in Deutschland zuerst",desc:"Flat, Amt, bank, neighbours, friends: the months before work starts. Clinic stays warm.",order:["alltag","gram","med"],newOrder:["core","alltag","satz","med","faust"],mix:{review:.2,learn:.2,input:.2,output:.25,fluency:.15}},
  pruefung:{name:"Prüfung",tag:"Fachsprachprüfung-Sprint",desc:"Heavy output: roleplays, chart writing, mock exams. For the 6–8 weeks before the FSP.",order:["med","gram"],newOrder:["satz","med","core","alltag","faust"],mix:{review:.2,learn:.15,input:.1,output:.4,fluency:.15}},
  literatur:{name:"Literatur",tag:"Klang, Lesen, Faust",desc:"More reading and verse, shadowing Goethe; clinic kept warm. The literary path.",order:["gram","med","alltag"],newOrder:["core","faust","med","satz","alltag"],mix:{review:.2,learn:.15,input:.3,output:.15,fluency:.2}}
};
const LEGACY_PATH={klinikarzt:"klinik",neuankoemmling:"ankommen",pruefling:"pruefung",architekt:"klinik",wanderer:"klinik",rezitator:"literatur"};
const STRAND={review:{name:"Wiederholen",en:"spaced review",icon:"cards"},learn:{name:"Neu lernen",en:"new material",icon:"book"},input:{name:"Hören & Lesen",en:"meaning-focused input",icon:"ear"},output:{name:"Schreiben & Sprechen",en:"pushed output",icon:"pen"},fluency:{name:"Flüssigkeit",en:"fluency",icon:"wave"},culture:{name:"Kultur",en:"closing",icon:"tower"}};
// ---- Daily writing tasks (work with or without Claude: model answer + checklist for self-check)
const TASKS=[
{t:"Drei Akten-Sätze",task:"Schreib drei Sätze in Nominalstil für die Akte: Anamnese, Befund, Procedere eines Patienten mit Bauchschmerzen.",ctx:"Notaufnahme-Dokumentation",reg:"Nominalstil, Abkürzungen erlaubt",check:["Nominalstil statt ganzer Sätze","Lokalisation und Dauer der Schmerzen","Befund mit Druckschmerz/Abwehrspannung","Procedere (Labor, Sono, ggf. Konsil)"],model:"Anamnese: seit 12 h zunehmende Schmerzen im re. Unterbauch, Übelkeit, kein Erbrechen. Befund: Druckschmerz re. Unterbauch, Loslassschmerz, keine Abwehrspannung. Procedere: Labor, Urinstatus, Sono Abdomen, chirurgisches Konsil.",k:"klinik"},
{t:"Patientenvorstellung",task:"Stell einen Patienten mit Luftnot dem Oberarzt vor (5–6 Sätze): Alter, Leitsymptom, Dauer, Vorerkrankungen, Verdachtsdiagnose, Procedere.",ctx:"Arzt-Arzt-Gespräch",reg:"fachsprachlich, Arzt zu Oberarzt",check:["Name, Alter, Leitsymptom, Dauer","Relevante Vorerkrankungen","Verdachtsdiagnose + eine DD","Procedere konkret"],model:"Ich stelle Ihnen Herrn Demir vor, 67 Jahre alt. Er kommt mit seit zwei Tagen zunehmender Luftnot und produktivem Husten. Bekannt sind eine COPD und ein Diabetes mellitus Typ 2. Klinisch fanden sich feuchte Rasselgeräusche rechts basal bei einer Sättigung von 89 %. Ich vermute eine Pneumonie, differentialdiagnostisch eine exazerbierte COPD. Ich schlage Röntgen-Thorax, BGA, Labor mit Blutkulturen, Antibiose und Sauerstoff mit Zielsättigung 88–92 % vor.",k:"klinik"},
{t:"Aufklärung",task:"Erkläre einer Patientin in Laiensprache, warum du Blut abnimmst und ein EKG schreibst (4 Sätze).",ctx:"Arzt-Patienten-Gespräch",reg:"verständlich, Sie, keine Latinismen",check:["Sie-Form","Zweck in einfachen Worten","Was sie spüren wird","Frage, ob sie einverstanden ist"],model:"Ich möchte Ihnen kurz erklären, was wir jetzt machen. Wir nehmen Ihnen etwas Blut ab, um zu sehen, ob Ihr Herz belastet ist; das piekst nur kurz. Dann schreiben wir ein EKG, dabei kleben wir Elektroden auf Ihre Brust, das tut nicht weh. Sind Sie damit einverstanden?",k:"klinik"},
{t:"Entlassung",task:"Gib einem Patienten mit Handgelenksbruch Entlassungshinweise (5 Sätze): Gips, Hochlagern, Warnzeichen, Kontrolle.",ctx:"Entlassungsgespräch",reg:"verständlich, Sie, Imperativ Sie-Form",check:["Hochlagern und Kühlen","Warnzeichen konkret","Wann sofort wiederkommen","Kontrolltermin"],model:"Ihr Handgelenk ist gebrochen, aber gut stehend, deshalb bekommen Sie einen Gips. Lagern Sie den Arm bitte hoch und kühlen Sie ihn. Wenn die Finger blau werden, kribbeln oder stark anschwellen, kommen Sie bitte sofort wieder. Gegen die Schmerzen können Sie Ibuprofen nehmen. Die Kontrolle ist in einer Woche in der Unfallchirurgie.",k:"klinik"},
{t:"E-Mail ans Amt",task:"Schreib eine kurze formelle E-Mail an das Bürgeramt: du brauchst einen früheren Termin zur Anmeldung, weil dein Arbeitsvertrag am 1. beginnt.",ctx:"Behördenkommunikation",reg:"formell: Sehr geehrte Damen und Herren … Mit freundlichen Grüßen",check:["Betreff","Formelle Anrede","Grund und Datum","Höfliche Bitte, formeller Gruß"],model:"Betreff: Bitte um früheren Termin zur Anmeldung\n\nSehr geehrte Damen und Herren,\n\nich bin am 1. November nach Heidelberg gezogen und beginne am 1. Dezember meine Tätigkeit am Universitätsklinikum. Für meinen Arbeitgeber benötige ich vorher eine Meldebescheinigung. Gibt es die Möglichkeit eines früheren Termins?\n\nMit freundlichen Grüßen\nAmron Ismail",k:"alltag"},
{t:"Übergabe",task:"Übergib drei Patienten an die Nachtschicht (je ein bis zwei Sätze): Bett, Diagnose, offenes Problem, was zu tun ist.",ctx:"Schichtübergabe",reg:"knapp, fachsprachlich, Nominalstil erlaubt",check:["Bett und Diagnose je Patient","Offenes Problem","Konkrete Handlungsanweisung","Wann anrufen"],model:"Bett 3, Herr Koch, Pneumonie unter Antibiose, entfiebert, Sauerstoff kann reduziert werden. Bett 5, Frau Lenz, Vorhofflimmern, Frequenz um 110; bei über 130 bitte Metoprolol nach Schema und mich anrufen. Bett 8, Herr Weiß, Z.n. Sturz, cCT unauffällig, stündlich Neurostatus bis 6 Uhr.",k:"klinik"},
{t:"Schlechte Nachricht",task:"Teile einer Tochter mit, dass ihre Mutter eine Hirnblutung hat (5 Sätze): Warnschuss, Nachricht, Pause, nächste Schritte, Angebot.",ctx:"Angehörigengespräch",reg:"einfühlsam, Sie, klar",check:["Warnschuss","Klare Nachricht ohne Fachjargon","Gefühl ansprechen","Nächste Schritte + Angebot"],model:"Frau Keller, ich habe leider keine guten Nachrichten. Die Computertomographie hat gezeigt, dass Ihre Mutter eine Blutung im Gehirn hat. Ich sehe, dass Sie das sehr erschreckt, das ist verständlich. Die Neurochirurgen schauen sich die Bilder gerade an und entscheiden, ob operiert werden muss. Möchten Sie zu ihr, oder sollen wir noch jemanden aus der Familie anrufen?",k:"klinik"},
{t:"Smalltalk",task:"Antworte einer Kollegin, die fragt, wie dein Wochenende war und ob du dich schon eingelebt hast (4 Sätze, du-Form).",ctx:"Kollegengespräch",reg:"locker, du, umgangssprachlich",check:["du-Form","Etwas Konkretes vom Wochenende","Gegenfrage","Natürlicher, lockerer Ton"],model:"Danke, ganz gut! Ich war am Samstag am Neckar spazieren, das Wetter war endlich mal schön. Ich gewöhne mich langsam ein, nur die Bürokratie nervt noch ein bisschen. Und du, hattest du frei?",k:"alltag"},
{t:"Beschwerde",task:"Schreib an deinen Handyanbieter: Du wurdest doppelt abgebucht, bitte um Erstattung und Bestätigung (formell, 4 Sätze).",ctx:"Vertragskommunikation",reg:"formell",check:["Kundennummer/Bezug","Problem klar benannt","Konkrete Forderung","Bitte um Bestätigung, formeller Gruß"],model:"Sehr geehrte Damen und Herren,\n\nam 3. November wurde der Monatsbetrag für meinen Vertrag (Kundennummer 482913) doppelt von meinem Konto abgebucht. Ich bitte Sie, mir den zu viel gezahlten Betrag von 29,99 € zu erstatten. Bitte bestätigen Sie mir die Erstattung schriftlich.\n\nMit freundlichen Grüßen\nAmron Ismail",k:"alltag"},
{t:"Anamnese-Fragen",task:"Schreib die acht Fragen, die du einem Patienten mit Brustschmerz stellst (SOCRATES), als vollständige Sätze.",ctx:"Arzt-Patienten-Gespräch",reg:"Sie, Laiensprache",check:["Wo, seit wann, wie","Ausstrahlung","Begleitsymptome","Auslöser und Stärke (0–10)"],model:"Wo genau tut es weh? Seit wann haben Sie die Schmerzen? Wie fühlt sich der Schmerz an, stechend oder drückend? Strahlt der Schmerz irgendwohin aus? Haben Sie Luftnot, Übelkeit oder Schweißausbrüche? Kommt und geht der Schmerz oder ist er dauerhaft? Wird es bei Belastung oder beim Atmen schlimmer? Wie stark ist der Schmerz von null bis zehn?",k:"klinik"}
];
// ---- i2 (PLAN-I R4): the 24 chapter writing and speaking prompts of the integrated syllabus (reviewer I2 §5.7 #23–46).
// Each: four check points and one model text at the chapter's level. lv 0–4 = A1–C1 (read into TASK_LV by c_i2.js), ch = chapter. Existing entries are never replaced.
[
{t:"Mein Dienstag",ch:4,lv:0,k:"alltag",task:"Schreib sechs Sätze über deinen Dienstag. Jeder Satz beginnt mit einer Zeitangabe; zwei Sätze sind verneint; zwei sind mit aber oder denn verbunden.",ctx:"Tagesablauf",reg:"einfach, ich-Form, Präsens",
 check:["Jeder Satz beginnt mit einer Zeitangabe","Das Verb steht auf Platz zwei","Zwei Verneinungen mit nicht oder kein","Zwei Verbindungen mit aber oder denn"],
 model:"Um sechs Uhr stehe ich auf. Um sieben Uhr beginnt die Übergabe. Am Vormittag habe ich keine Pause, denn die Notaufnahme ist voll. Mittags esse ich schnell ein Brot. Am Nachmittag lerne ich Deutsch, aber ich bin müde. Am Abend arbeite ich nicht."},
{t:"Was ich brauche",ch:5,lv:0,k:"klinik",task:"Du legst einen Zugang. Schreib fünf Sätze: was du brauchst, was du nimmst, was fehlt. Jeder Satz hat ein Objekt im Akkusativ.",ctx:"Blutabnahme und Zugang",reg:"einfach, Präsens",
 check:["Fünf Sätze, jeder mit einem Objekt im Akkusativ","einen oder den bei maskulinen Nomen","Ein Possessivartikel (mein, Ihr)","Was fehlt: kein oder keinen"],
 model:"Ich brauche einen Stauschlauch und eine Nadel. Ich nehme meinen Tupfer und ein Pflaster. Haben Sie das Desinfektionsmittel? Ich habe keinen Handschuh mehr. Ich hole einen Handschuh."},
{t:"Anmeldebogen",ch:8,lv:0,k:"alltag",task:"Füll den Anmeldebogen der Klinik für dich selbst aus (Name, Geburtsdatum, Adresse, Telefon, Beruf) und stell dich danach in fünf Sätzen vor.",ctx:"Anmeldung",reg:"einfache Hauptsätze",
 check:["Alle fünf Felder ausgefüllt","Datum als Tag.Monat.Jahr","Fünf Sätze ohne Verbfehler","Beruf ohne Artikel (Ich bin Arzt.)"],
 model:"Name: Ismail, Amron · Geburtsdatum: 12.03.1992 · Adresse: Bergheimer Straße 5, 69115 Heidelberg · Telefon: 0151 23456789 · Beruf: Arzt\n\nGuten Tag, ich heiße Amron Ismail. Ich bin Arzt. Ich wohne in Heidelberg. Ich arbeite in der Notaufnahme. Ich lerne jeden Tag Deutsch."},
{t:"Mein Arbeitsplatz",ch:10,lv:1,k:"klinik",task:"Beschreib deinen Arbeitsplatz in der Notaufnahme in sechs Sätzen: Was steht, liegt oder hängt wo? Dann zwei Sätze: Wohin stellst, legst oder hängst du etwas?",ctx:"Arbeitsplatz",reg:"Präsens, Wechselpräpositionen",
 check:["Sechs Sätze mit stehen, liegen oder hängen und Dativ","Zwei Sätze mit stellen, legen oder hängen und Akkusativ","Verschiedene Präpositionen: auf, in, neben, an, über, zwischen","Artikel nach der Präposition richtig (im, am, auf dem, in die)"],
 model:"Mein Schreibtisch steht neben dem Fenster. Auf dem Tisch liegt das Diensttelefon. Der Computer steht zwischen dem Drucker und der Lampe. Über dem Tisch hängt ein Plan der Notaufnahme. Im Schrank liegen die Handschuhe. An der Tür hängt mein Kittel. Nach dem Dienst lege ich das Telefon in die Schublade. Den Kittel hänge ich an die Tür."},
{t:"Regeln auf Station",ch:11,lv:1,k:"klinik",task:"Erklär einer Patientin sechs Regeln für heute: zwei mit müssen, zwei mit dürfen (eine verneint), eine mit sollen, eine mit man.",ctx:"Arzt-Patienten-Gespräch",reg:"Sie-Form, freundlich, klar",
 check:["Modalverb auf Platz zwei, Infinitiv am Ende","Zwei Sätze mit müssen, zwei mit dürfen (einer verneint)","Eine Regel mit sollen","Ein Satz mit man"],
 model:"Sie müssen bis morgen früh nüchtern bleiben. Sie dürfen nichts essen. Aber Sie dürfen Wasser trinken. Sie müssen heute im Bett bleiben. Bei Schmerzen sollen Sie bitte klingeln. Im Zimmer darf man nicht rauchen."},
{t:"Was Frau Brandt erzählt",ch:16,lv:1,k:"klinik",task:"Frau Brandt hat dir von ihrer Luftnot erzählt. Schreib in acht Sätzen auf, was sie gesagt hat: im Perfekt, mit zwei weil-Sätzen und mindestens einer Zeitangabe am Satzanfang.",ctx:"Anamnese, für die Akte",reg:"Perfekt, dritte Person, einfache Sätze",
 check:["Acht Sätze, das Hilfsverb haben oder sein richtig","Zwei weil-Sätze mit dem Verb am Ende","Eine Zeitangabe am Satzanfang, das Verb danach","Nur, was sie gesagt hat, keine Diagnose"],
 model:"Frau Brandt hat seit drei Tagen mehr Luftnot. Am Montag hat sie die Treppe nicht mehr geschafft. Sie hat in der Nacht im Sessel geschlafen, weil sie im Liegen keine Luft bekommen hat. Ihre Füße sind dick geworden. Sie hat die Wassertablette am Dienstag nicht genommen, weil sie den ganzen Tag in der Stadt war. Gegen die Knieschmerzen hat sie Ibuprofen genommen. Sie hat sich nicht gewogen. Heute Nacht ist sie mit dem Rettungswagen gekommen."},
{t:"Unfallhergang",ch:17,lv:2,k:"klinik",task:"Schreib den Unfallhergang eines Patienten, der vom Gerüst gestürzt ist, in sechs Sätzen im Präteritum, mit einem nachdem-Satz und einem als-Satz.",ctx:"Dokumentation",reg:"Präteritum, sachlich",
 check:["Sechs Sätze im Präteritum","Ein nachdem-Satz mit Plusquamperfekt","Ein als-Satz für einen Zeitpunkt in der Vergangenheit","Uhrzeit, Höhe und Mechanismus genannt"],
 model:"Herr K. arbeitete am Dienstagmorgen auf einem Gerüst. Gegen zehn Uhr rutschte er auf einem nassen Brett aus. Er stürzte aus etwa drei Metern Höhe auf den Rücken. Als ein Kollege zu ihm kam, war er wach und klagte über Schmerzen im Rücken. Nachdem der Kollege den Notruf gewählt hatte, blieb er ruhig liegen. Der Rettungsdienst brachte ihn um elf Uhr in die Notaufnahme."},
{t:"Luftnot zusammenfassen",ch:18,lv:2,k:"klinik",task:"Fass die Anamnese eines Patienten mit Luftnot in sechs Sätzen zusammen: zwei Relativsätze, ein weil-Satz, ein obwohl-Satz und ein Satz mit es.",ctx:"Arzt-Arzt-Gespräch",reg:"sachlich, Nebensätze",
 check:["Zwei Relativsätze mit dem richtigen Relativpronomen","Ein weil-Satz und ein obwohl-Satz, Verb am Ende","Ein Satz mit es (es gibt, es geht …)","Alter, Leitsymptom, Dauer und eine Vorerkrankung"],
 model:"Herr D. ist ein 67-jähriger Patient, der seit zwei Tagen zunehmende Luftnot hat. Seit gestern hat er gelben Auswurf, der ihm Sorgen macht. Er kommt heute, weil er nachts nicht mehr schlafen kann. Obwohl er Fieber hat, hat er kein Antibiotikum genommen. Es gibt eine bekannte COPD. Im Sitzen geht es ihm besser als im Liegen."},
{t:"Konsil anfordern",ch:21,lv:2,k:"klinik",task:"Schreib auf, was du am Telefon sagst, wenn du ein neurologisches Konsil anforderst: wer du bist, um wen es geht, was du brauchst, wie dringend. Fünf Sätze, mindestens drei höfliche Konjunktiv-II-Formen.",ctx:"Telefonat mit einer Fachabteilung",reg:"höflich, knapp, Sie",
 check:["Name und Abteilung","Patient: Alter, Leitsymptom, seit wann","Was du brauchst und wie dringend","Mindestens drei Formen wie hätte, könnten, wäre, würde"],
 model:"Guten Tag, hier ist Amron Ismail, Assistenzarzt in der Notaufnahme. Ich rufe wegen eines 78-jährigen Patienten an, der seit einer Stunde den rechten Arm nicht mehr bewegen kann. Ich hätte gern ein neurologisches Konsil. Könnten Sie bitte sofort kommen? Es wäre wichtig, weil das Zeitfenster für eine Lyse noch offen ist."},
{t:"Faust in einfachem Deutsch",ch:23,lv:2,k:"literatur",task:"Erklär den Monolog „Habe nun, ach!“ in sechs einfachen Sätzen: Was hat Faust studiert? Was weiß er? Was fehlt ihm?",ctx:"Literatur nacherzählen",reg:"einfache Standardsprache, Perfekt und Präsens",
 check:["Die vier Fächer genannt","Was Faust über sein Wissen sagt","Was ihm fehlt (Geld, Ehre, Freude)","Eigene einfache Sätze, keine Zitate"],
 model:"Faust hat Philosophie, Jura und Medizin studiert, und leider auch Theologie. Er hat sehr lange und sehr fleißig gelernt. Trotzdem glaubt er, dass er nichts weiß. Er ist nicht klüger als vorher. Er hat weder Geld noch Ehre. Darum ist er unzufrieden und sucht etwas anderes."},
{t:"Antwort an Bett vier",ch:24,lv:2,k:"klinik",task:"Frau Brandt fragt: „Muss ich sterben, Herr Doktor?“ Schreib deine Antwort in fünf Sätzen: ehrlich, ohne „alles wird gut“, mit einem Satz im Konjunktiv II und einem weil-Satz.",ctx:"Arzt-Patienten-Gespräch",reg:"Sie, Laiensprache, ruhig",
 check:["Die Frage ernst nehmen, nicht ausweichen","Kein falsches Versprechen","Ein Konjunktiv II und ein weil-Satz","Was jetzt passiert und dass jemand da ist"],
 model:"Ich kann Ihnen nicht versprechen, dass nichts passiert. Aber ich würde Sie nicht anlügen: Ihr Herz ist schwach, und das ist ernst. Die Luftnot können wir jetzt behandeln, weil wir wissen, woher sie kommt. Ich bleibe in der Nähe, und die Schwester ist die ganze Nacht da. Wenn es schlimmer würde, wären wir sofort bei Ihnen."},
{t:"Forumsbeitrag: Fachkräftemangel",ch:25,lv:3,k:"alltag",task:"Schreib einen Forumsbeitrag (etwa 150 Wörter) zum Text „Fachkräftemangel in der Pflege“: deine Meinung, zwei Gründe, ein Beispiel, ein Vorschlag.",ctx:"Übung im Stil von Goethe-Zertifikat B2, Schreiben Teil 1",reg:"Forum: sachlich, persönliche Meinung erlaubt",
 check:["Meinung klar am Anfang","Zwei Gründe, mit Konnektoren verbunden","Ein konkretes Beispiel","Ein Vorschlag und ein Schlusssatz"],
 model:"Ich arbeite als Arzt in einer Notaufnahme und erlebe den Fachkräftemangel in der Pflege jeden Tag. Meiner Meinung nach ist er das größte Problem unserer Krankenhäuser. Erstens sind viele Stellen unbesetzt, sodass die vorhandenen Pflegekräfte ständig Überstunden machen müssen. Zweitens verlassen gerade erfahrene Kolleginnen den Beruf, weil sie die Belastung nicht mehr aushalten. Ein Beispiel aus meinem letzten Nachtdienst: Zwei Pflegekräfte waren für zwanzig Patienten zuständig, und eine Patientin musste über eine Stunde auf ihr Schmerzmittel warten. Das ist für alle Beteiligten unzumutbar. Ich schlage deshalb vor, dass Kliniken nicht nur besser bezahlen, sondern auch verlässliche Dienstpläne anbieten. Außerdem sollte die Anerkennung ausländischer Pflegekräfte schneller gehen. Wer Pflege ernst nimmt, muss in die Menschen investieren, die sie leisten."},
{t:"Einschätzung",ch:26,lv:3,k:"klinik",task:"Schreib nach einem Gespräch mit einer niedergeschlagenen Patientin eine Einschätzung in sechs Sätzen: Was ist sicher, was wahrscheinlich, was möglich? Verwende wird, dürfte, müsste und könnte je einmal.",ctx:"Dokumentation",reg:"sachlich, abgestufte Vermutung",
 check:["Ein sicherer Befund ohne Modalverb","wird, dürfte, müsste und könnte je einmal, passend zur Sicherheit","Keine Diagnose als Tatsache, die nur vermutet ist","Das weitere Vorgehen"],
 model:"Die Patientin ist wach, orientiert und von akuter Suizidalität glaubhaft distanziert. Sie wird heute Nacht auf der Station bleiben. Die Niedergeschlagenheit dürfte seit dem Tod ihres Mannes bestehen. Der Hausarzt müsste die Vorgeschichte kennen. Eine depressive Episode könnte die Ursache für den fehlenden Antrieb sein. Morgen früh erfolgt ein psychiatrisches Konsil."},
{t:"Forumsbeitrag: KI in der Radiologie",ch:27,lv:3,k:"klinik",task:"Schreib einen Forumsbeitrag (etwa 150 Wörter) zum Text „Künstliche Intelligenz in der Radiologie“. Verwende vier zweiteilige Konnektoren und Redemittel für Meinung, Abwägung und Schluss.",ctx:"Übung im Stil von Goethe-Zertifikat B2, Schreiben Teil 1",reg:"Forum: sachlich, abwägend",
 check:["Vier zweiteilige Konnektoren (einerseits … andererseits, je … desto, weder … noch, sowohl … als auch)","Meinung und Abwägung klar erkennbar","Ein Beispiel aus dem Klinikalltag","Ein Schluss mit Redemittel (zusammenfassend …)"],
 model:"Künstliche Intelligenz wird in der Radiologie bereits eingesetzt, und ich halte das grundsätzlich für eine Chance. Einerseits erkennen Programme kleine Rundherde oft schneller als ein müder Mensch um drei Uhr nachts. Andererseits trägt eine Maschine keine Verantwortung, wenn sie sich irrt. Je mehr wir uns auf sie verlassen, desto weniger üben junge Ärztinnen und Ärzte das Befunden selbst. Deshalb sollte die KI meiner Meinung nach weder allein entscheiden noch ganz verboten werden. Sie sollte sowohl die Radiologen entlasten als auch eine zweite Meinung liefern, die ein Mensch prüft. Wichtig ist außerdem, dass Patienten erfahren, ob ein Programm an ihrem Befund beteiligt war. Zusammenfassend lässt sich sagen: Die Technik ist ein gutes Werkzeug, aber kein Kollege, dem man blind vertrauen darf."},
{t:"Formelle Nachricht",ch:29,lv:3,k:"alltag",task:"Schreib eine E-Mail an den Chefarzt und bitte um zwei Fortbildungstage für einen Sprachkurs (etwa 100 Wörter). Verwende drei Funktionsverbgefüge.",ctx:"Übung im Stil von Goethe-Zertifikat B2, Schreiben Teil 2",reg:"formell: Sehr geehrter Herr … Mit freundlichen Grüßen",
 check:["Betreff, formelle Anrede und Gruß","Anliegen, Termin und Grund","Drei Funktionsverbgefüge (in Anspruch nehmen, zur Verfügung stehen …)","Vertretung oder Lösung angeboten"],
 model:"Betreff: Antrag auf zwei Fortbildungstage\n\nSehr geehrter Herr Professor Wagner,\n\nhiermit möchte ich im März zwei Fortbildungstage in Anspruch nehmen. Ich beabsichtige, an einem Kurs für medizinische Fachsprache teilzunehmen, der mich auf die Fachsprachprüfung vorbereitet. Der Kurs findet am 12. und 13. März in Heidelberg statt; die Kosten trage ich selbst. Meine Dienste an diesen Tagen habe ich bereits mit Frau Dr. Vogt abgesprochen, die mich vertreten würde. Ich würde mich freuen, wenn mein Antrag Ihre Zustimmung fände. Für Rückfragen stehe ich Ihnen jederzeit zur Verfügung.\n\nMit freundlichen Grüßen\nAmron Ismail"},
{t:"Protokoll einer Diskussion",ch:31,lv:3,k:"alltag",task:"Fass die Radiodiskussion „Tempolimit auf Autobahnen“ in etwa 120 Wörtern in indirekter Rede zusammen: wer was gesagt hat, mit fünf verschiedenen redeeinleitenden Verben.",ctx:"Protokoll",reg:"indirekte Rede, Konjunktiv I (Konjunktiv II, wo die Formen gleich sind)",
 check:["Beide Gäste und ihre Position genannt","Konjunktiv I, wo nötig Konjunktiv II oder würde","Fünf verschiedene Verben (fordern, entgegnen, einräumen, betonen, bezweifeln …)","Eigene Sätze, keine Zitate"],
 model:"In der Radiodiskussion forderte Frau Dr. Berg vom Institut für Verkehrsforschung ein generelles Tempolimit von 130. Sie begründete das mit drei Argumenten: Ein Limit erhöhe die Sicherheit, spare sofort CO2 und koste nichts. Herr Kaya vom Autoclub Süd entgegnete, das klinge einfacher, als es sei; die meisten schweren Unfälle passierten auf Landstraßen. Er räumte ein, er sei nicht grundsätzlich gegen Tempolimits, betonte aber, die CO2-Einsparung liege unter einem Prozent. Frau Berg wandte ein, flexible Anzeigen kosteten Millionen, und verwies auf Umfragen, in denen eine Mehrheit für ein Limit sei. Auf die Schlussfrage antwortete sie, das Limit komme spätestens, wenn die Klimaziele verfehlt würden. Herr Kaya bezweifelte das."},
{t:"Stellungnahme unter Zeit",ch:32,lv:3,k:"alltag",task:"Schreib in 30 Minuten eine Stellungnahme (etwa 150 Wörter): Sollten Kliniken die Sprachkurse für Ärztinnen und Ärzte aus dem Ausland bezahlen? Gliederung: Einleitung, zwei Argumente dafür, eins dagegen, Schluss.",ctx:"Prüfungstraining B2 unter Zeitvorgabe",reg:"sachlich, argumentierend",
 check:["Einleitung mit dem Thema","Zwei Argumente dafür, eins dagegen, jeweils begründet","Redemittel (Ich bin der Ansicht … Dafür spricht … Dagegen lässt sich einwenden …)","Schluss mit eigener Position, in 30 Minuten"],
 model:"Immer mehr Kliniken in Deutschland stellen Ärztinnen und Ärzte aus dem Ausland ein. Die Frage ist, wer ihre Sprachkurse bezahlen sollte. Ich bin der Ansicht, dass die Kliniken einen großen Teil der Kosten übernehmen sollten. Dafür spricht zunächst die Patientensicherheit: Wer eine Anamnese nicht sicher führen kann, gefährdet Menschen, und davon ist auch das Krankenhaus betroffen. Außerdem profitieren die Kliniken selbst, denn ohne die neuen Kolleginnen und Kollegen könnten viele Dienste gar nicht besetzt werden. Dagegen lässt sich einwenden, dass Fachkräfte, die nach dem Kurs den Arbeitgeber wechseln, die Investition mitnehmen. Dieses Problem ließe sich jedoch durch eine faire Vereinbarung lösen, zum Beispiel eine Rückzahlung bei frühem Wechsel. Insgesamt überwiegen meiner Meinung nach die Vorteile deutlich. Eine gute Sprache ist kein privates Hobby, sondern Teil der ärztlichen Qualität."},
{t:"Zweimal dasselbe",ch:33,lv:4,k:"klinik",task:"Erklär Frau Brandts Diagnosen zweimal in je fünf Sätzen: einmal für sie selbst in Laiensprache, einmal für den Oberarzt in Fachsprache.",ctx:"Registerwechsel",reg:"A: Laiensprache, Sie · B: Fachsprache, Arzt zu Arzt",
 check:["Laienfassung ohne Fachwort","Fachfassung mit korrekt gebeugten Fachwörtern","Beide Fassungen enthalten dieselben Diagnosen","Herz, Rhythmus, Lunge und Niere genannt"],
 model:"Für Frau Brandt: Ihr Herz pumpt schwächer als früher, vor allem seit dem Herzinfarkt vor fünf Jahren. Deshalb staut sich Wasser in der Lunge und in den Beinen, und Sie bekommen schlecht Luft. Ihr Herz schlägt außerdem dauerhaft unregelmäßig; deshalb nehmen Sie den Blutverdünner. Auch Ihre Lunge ist vom Rauchen geschädigt, und die Nieren arbeiten etwas schwächer. Mit den Tabletten, vor allem mit der Wassertablette, können wir viel davon auffangen.\n\nFür den Oberarzt: Frau Brandt, 71 Jahre, hat eine chronische Herzinsuffizienz mit reduzierter Ejektionsfraktion von 30 bis 35 Prozent bei ischämischer Kardiomyopathie. Es besteht eine KHK mit Zustand nach Vorderwandinfarkt und Stentimplantation in den RIVA 2021. Zusätzlich bestehen ein permanentes Vorhofflimmern unter Apixaban sowie eine COPD GOLD 2. Die Nierenfunktion ist im Sinne einer chronischen Niereninsuffizienz G3a eingeschränkt. Aktuell gehe ich von einer kardialen Dekompensation bei unregelmäßiger Einnahme des Diuretikums aus."},
{t:"Anamnese in 20 Minuten",ch:34,lv:4,k:"klinik",task:"Führ die Anamnese mit einem Simulationspatienten (Tutor oder FSP-Trainer), nimm sie auf und prüf sie gegen die Liste: aktuelle Beschwerden, Schmerz, vegetative Anamnese, Vorerkrankungen, Medikamente, Allergien, Noxen, Familie, Sozialanamnese, Zusammenfassung.",ctx:"Übung für Teil 1 der Fachsprachprüfung",reg:"Sie, Laiensprache, strukturiert",
 check:["Vorstellung und offene Eröffnungsfrage","Alle Abschnitte in sinnvoller Reihenfolge","Mindestens zwei Zusammenfassungen und zwei Empathie-Signale","Kein Fachwort ohne Erklärung; Abschluss mit Ausblick"],
 model:"Guten Tag, Frau Brandt, mein Name ist Ismail, ich bin Assistenzarzt in der Notaufnahme. Was führt Sie zu uns? – Seit wann haben Sie die Luftnot? Ist sie nur beim Gehen da oder auch in Ruhe? Wie viele Stufen schaffen Sie im Moment? Können Sie flach liegen, oder brauchen Sie nachts mehrere Kissen? Habe ich Sie richtig verstanden, dass Ihre Füße seit einer Woche dicker werden? Das klingt anstrengend, das kann ich gut verstehen. – Wie sind Appetit, Schlaf, Stuhlgang und Wasserlassen? – Lassen Sie uns kurz zu Ihren Medikamenten kommen: Welche Tabletten nehmen Sie, und wie oft? Nehmen Sie die Wassertablette jeden Tag? Haben Sie eine Allergie gegen Medikamente? Rauchen Sie, oder haben Sie früher geraucht? – Wie wohnen Sie, und wer hilft Ihnen im Alltag? Wer kümmert sich gerade um Ihren Hund? – Ich fasse kurz zusammen: Seit drei Tagen haben Sie mehr Luftnot, nachts schlafen Sie im Sitzen, die Füße sind dick, und die Wassertablette haben Sie an einigen Tagen weggelassen. Habe ich etwas vergessen? Als Nächstes untersuche ich Sie, und dann besprechen wir zusammen, wie es weitergeht."},
{t:"Arztbrief Brandt",ch:35,lv:4,k:"klinik",task:"Schreib in 20 Minuten aus deinen Notizen den Entlassungsbrief über Frau Brandt an ihre Hausärztin: Diagnosen, Anamnese, Befund, Verlauf, Procedere.",ctx:"Übung für Teil 2 der Fachsprachprüfung",reg:"Nominalstil, Fachsprache, kein „ich“",
 check:["Diagnosen vollständig und in der üblichen Reihenfolge","Anamnese und Aufnahmebefund im Präteritum oder Nominalstil","Verlauf mit Therapie und Ergebnis","Procedere konkret: Kontrollen, Grenzwerte, Medikation"],
 model:"Sehr geehrte Frau Kollegin Seitz,\n\nwir berichten über Ihre Patientin, Frau Margarete Brandt, geb. 14.01.1955, die sich vom … bis zum … in unserer stationären Behandlung befand.\n\nDiagnosen: Akut dekompensierte chronische Herzinsuffizienz mit reduzierter Ejektionsfraktion (LVEF 30–35 %) bei ischämischer Kardiomyopathie; Pleuraerguss rechts, Entlastungspunktion am dritten Tag. Nebendiagnosen: KHK, Z. n. Vorderwandinfarkt mit Stentimplantation (RIVA) 03/2021; permanentes Vorhofflimmern unter Apixaban; COPD GOLD 2; chronische Niereninsuffizienz G3a; Gonarthrose rechts.\n\nAnamnese: Die Patientin stellte sich nachts mit seit drei Tagen zunehmender Belastungs- und Ruhedyspnoe sowie Unterschenkelödemen vor. Das Diuretikum sei an Tagen außer Haus ausgelassen worden; zudem Einnahme von Ibuprofen bei Knieschmerzen.\n\nAufnahmebefund: Tachypnoe, SpO2 86 % unter Raumluft, feuchte Rasselgeräusche basal beidseits, Unterschenkelödeme beidseits.\n\nVerlauf: Unter intravenöser diuretischer Therapie besserte sich die Dyspnoe zunächst. In der zweiten Nacht kam es zu einem Lungenödem, das unter nichtinvasiver Beatmung auf der Intensivstation rasch rückläufig war. Nach Entlastungspunktion des Pleuraergusses rechts war die Patientin zunehmend mobil. Ibuprofen wurde abgesetzt.\n\nProcedere: Tägliche Gewichtskontrolle; bei einer Zunahme von mehr als 2 kg in drei Tagen bitten wir um Wiedervorstellung. Kontrolle von Kreatinin und Kalium in einer Woche. Mit der Patientin wurde besprochen, das Torasemid an Kurstagen mittags statt morgens einzunehmen.\n\nMit freundlichen kollegialen Grüßen"},
{t:"Gedächtnisprotokoll",ch:37,lv:4,k:"klinik",task:"Schreib nach dem Gespräch „Überbringen einer Todesnachricht“ ein Gedächtnisprotokoll für die Akte (etwa 100 Wörter): wer anwesend war, was gesagt wurde, was vereinbart ist.",ctx:"Dokumentation eines Angehörigengesprächs",reg:"sachlich, Präteritum und indirekte Rede, kein Euphemismus",
 check:["Datum, Uhrzeit, Anwesende","Was mitgeteilt wurde, klar benannt (verstorben)","Fragen der Angehörigen und die Antworten","Vereinbarungen und nächste Schritte"],
 model:"Gedächtnisprotokoll, Notaufnahme, … , 14:20 Uhr. Anwesend: Frau Krämer (Ehefrau), der unterzeichnende Assistenzarzt, eine Pflegekraft. Frau Krämer wurde mitgeteilt, dass ihr Ehemann nach einem Herz-Kreislauf-Stillstand auf der Baustelle trotz etwa einstündiger Reanimation verstorben ist. Auf ihre Frage, ob er gelitten habe, wurde erklärt, er sei sehr schnell bewusstlos gewesen und habe nach unserem Wissen keine Schmerzen gespürt. Es wurde erläutert, dass Tubus und Zugänge vorerst verbleiben und die Polizei informiert wird, da die Todesursache ungeklärt ist; ein Verdacht besteht nicht. Frau Krämer hat ihren Mann in einem ruhigen Raum gesehen. Auf ihren Wunsch wurde die Tochter in Mannheim angerufen; Seelsorge wurde angeboten."},
{t:"Fallvorstellung",ch:38,lv:4,k:"klinik",task:"Stell den Fall Frau Brandt in fünf Minuten vor und beantworte fünf Rückfragen. Nimm dich auf und prüf die sieben Teile: Vorstellung, Leitsymptom, Anamnese, Befund, Verdacht, Differenzialdiagnosen, Vorgehen.",ctx:"Übung für Teil 3 der Fachsprachprüfung",reg:"Fachsprache, Arzt zu Arzt, Sie",
 check:["Alter, Leitsymptom und Dauer im ersten Satz","Vorerkrankungen und Medikation knapp","Verdachtsdiagnose und zwei Differenzialdiagnosen mit Begründung","Konkretes Vorgehen; eine Rückfrage ehrlich mit „Das kann ich im Moment nicht sicher beantworten“"],
 model:"Ich stelle Ihnen Frau Brandt vor, eine 71-jährige Patientin, die sich heute Nacht mit seit drei Tagen zunehmender Luftnot vorstellte. Anamnestisch bestehen eine Orthopnoe, eine Belastbarkeit von weniger als einem Stockwerk und seit einer Woche zunehmende Beinödeme. Vorerkrankungen sind eine Herzinsuffizienz mit reduzierter Ejektionsfraktion bei ischämischer Kardiomyopathie, ein permanentes Vorhofflimmern, eine COPD GOLD 2 und eine Niereninsuffizienz G3a. Die Medikation umfasst unter anderem Bisoprolol, Ramipril, Torasemid, Spironolacton und Apixaban; das Torasemid hat sie an mehreren Tagen ausgelassen, zusätzlich nahm sie Ibuprofen. In der körperlichen Untersuchung zeigten sich feuchte Rasselgeräusche basal beidseits, Unterschenkelödeme und eine Sättigung von 86 Prozent unter Raumluft. Als Verdachtsdiagnose gehe ich von einer kardialen Dekompensation aus. Differenzialdiagnostisch kommen eine Exazerbation der COPD und eine Pneumonie in Betracht; dagegen sprechen das fehlende Fieber und der fehlende Auswurf. Zur weiteren Abklärung schlage ich Labor mit NT-proBNP, eine Röntgenaufnahme des Thorax und eine Echokardiographie vor; therapeutisch beginnen wir mit Furosemid intravenös und Sauerstoff."},
{t:"Fehlerbrief",ch:39,lv:4,k:"alltag",task:"Schreib dir selbst einen Brief (etwa 120 Wörter): deine fünf häufigsten Fehler, je ein falsches und ein richtiges Beispiel und je eine Regel in einem Satz.",ctx:"Fehlerarbeit",reg:"du an dich selbst, klar",
 check:["Fünf verschiedene Fehlerarten","Je ein falsches und ein richtiges Beispiel","Je eine Regel in einem Satz","Eigene Fehler aus der Fehlerliste, nicht erfundene"],
 model:"Lieber Amron,\n\nhier sind deine fünf häufigsten Fehler. Erstens: „wegen dem Fieber“ ist in der Schriftsprache falsch, richtig ist „wegen des Fiebers“, denn wegen verlangt dort den Genitiv. Zweitens: nicht „Der Patient hat gestürzt“, sondern „Der Patient ist gestürzt“; Verben der Bewegung bilden das Perfekt mit sein. Drittens: nicht „Ich weiß, dass er hat Fieber“, sondern „dass er Fieber hat“; im Nebensatz steht das Verb am Ende. Viertens: nicht „Gestern ich habe Nachtdienst gehabt“, sondern „Gestern habe ich Nachtdienst gehabt“; das Verb steht auf Platz zwei. Fünftens: nicht „Ich habe ihn gesagt“, sondern „Ich habe ihm gesagt“; sagen verlangt die Person im Dativ.\n\nViel Erfolg morgen!\nDein Amron"},
{t:"Dokumentation in 20 Minuten",ch:40,lv:4,k:"klinik",task:"Schreib in 20 Minuten aus deinen Notizen die Dokumentation eines unbekannten Falls wie im schriftlichen Teil der Fachsprachprüfung: aktuelle Anamnese, Vorerkrankungen, Medikation, Allergien, Noxen, Familien- und Sozialanamnese, Verdachtsdiagnose, Differenzialdiagnosen, Procedere.",ctx:"Übung für Teil 2 der Fachsprachprüfung",reg:"Nominalstil, Fachsprache",
 check:["Alle Abschnitte vorhanden","Leitsymptom mit Beginn, Charakter und Begleitsymptomen","Verdachtsdiagnose und zwei Differenzialdiagnosen","Procedere konkret und in sinnvoller Reihenfolge"],
 model:"Herr Peter Lang, 58 Jahre, stellte sich mit seit zwei Stunden bestehenden, drückenden retrosternalen Schmerzen mit Ausstrahlung in den linken Arm vor. Begleitend Kaltschweiß und Übelkeit, keine Dyspnoe. Vorerkrankungen: arterielle Hypertonie, Diabetes mellitus Typ 2. Medikation: Ramipril 5 mg 1-0-0, Metformin 1000 mg 1-0-1. Allergien: keine bekannt. Noxen: Nikotin, ca. 30 Packungsjahre; Alkohol gelegentlich. Familienanamnese: Vater mit 60 Jahren an einem Herzinfarkt verstorben. Sozialanamnese: verheiratet, zwei Kinder, Lkw-Fahrer. Verdachtsdiagnose: akutes Koronarsyndrom. Differenzialdiagnosen: Lungenarterienembolie, Aortendissektion. Procedere: 12-Kanal-EKG, Troponin, Monitoring, Rücksprache mit der Kardiologie zur Herzkatheteruntersuchung."}
].forEach(t=>{if(!TASKS.some(x=>x.t===t.t))TASKS.push(t)});
// ---- 4/3/2 fluency topics
const TALKS={klinik:["Stell einen Patienten mit Brustschmerz vor, als würdest du ihn dem Oberarzt übergeben.","Erkläre einem Patienten, was bei einer Blinddarm-Operation passiert.","Beschreibe deinen typischen Nachtdienst in der Notaufnahme.","Erkläre, wie man eine Reanimation leitet, Schritt für Schritt.","Stell einen Patienten mit Luftnot vor: Anamnese, Befund, Verdacht, Procedere."],alltag:["Erzähl, wie dein letztes Wochenende war.","Beschreibe deine Traumwohnung in Deutschland.","Erkläre einem Freund, wie man sich in Deutschland anmeldet.","Erzähl, warum du Arzt geworden bist.","Beschreibe deine Heimatstadt und was du vermissen wirst."]};
// ---- Roleplay counterparts
const SIMS=[
{id:"pat",name:"Patient in der Notaufnahme",who:"Patient",k:"klinik",make:c=>`Du spielst ${c.name}, ${c.age} Jahre, ${c.job}, Patient/in in einer deutschen Notaufnahme. Vorstellungsgrund: ${c.cc}. Vorerkrankungen: ${c.pmh}. Medikamente: ${c.meds}. Allergien: ${c.all}. Sozial: ${c.soc}. Du bist medizinischer Laie: umgangssprachlich, kurze Antworten (1–3 Sätze), Informationen nur auf Nachfrage (Allergien, Medikamente, Rauchen usw.), Laienbegriffe (Zucker, Blutdruck, Herzstolpern), etwas besorgt. Bei Fachbegriffen frag nach. Wenn der Arzt duzt oder unhöflich ist, reagiere irritiert. Bleib in der Rolle, antworte NUR mit dem, was der Patient sagt, keine Regieanweisungen, kein Englisch. Der Arzt beginnt.`},
{id:"oa",name:"Oberarzt / Prüfer",who:"Oberarzt",k:"klinik",make:c=>`Du bist Oberarzt und Prüfer in der Fachsprachprüfung. Der Assistenzarzt stellt dir diesen Fall vor: ${c.name}, ${c.age}, ${c.job}, ${c.cc}; Vorerkrankungen ${c.pmh}; Medikation ${c.meds}; Allergien ${c.all}; sozial ${c.soc}. Erwartete Verdachtsdiagnose: ${c.dx}. Erwartetes Procedere: ${c.plan}. Hör dir die Vorstellung an, dann stelle Rückfragen wie ein Prüfer: fehlende Anamnese-Punkte, Differentialdiagnosen, Untersuchungen und warum, Therapie, was du dem Patienten sagst. Kurz, fachsprachlich, fordernd aber fair, eine Frage pro Antwort. Korrigiere keine Sprache. Bleib in der Rolle, nur Deutsch. Der Assistenzarzt beginnt.`},
{id:"tel",name:"Chirurg am Telefon",who:"Chirurg",k:"klinik",make:c=>`Du bist der diensthabende Chirurg, gestresst, am Telefon. Der Assistenzarzt der Notaufnahme ruft wegen eines Konsils an (Fall: ${c.age} Jahre, ${c.cc}). Frag knapp nach Alter, Leitsymptom, Dauer, Befund, Labor, Sono, nüchtern, Zugang, Analgesie. Ist die Vorstellung unstrukturiert, unterbrich: „Kurz und knapp bitte.“ Entscheide am Ende, ob du kommst. Fachsprachlich, sehr kurz. Bleib in der Rolle, nur Deutsch. Der Assistenzarzt beginnt.`},
{id:"amt",name:"Bürgeramt",who:"Sachbearbeiter",k:"alltag",make:()=>`Du bist Sachbearbeiter/in im Bürgeramt einer deutschen Stadt. Der Lernende will seine Wohnung anmelden. Frag nach Termin, Reisepass, Wohnungsgeberbestätigung, Einzugsdatum, Konfession, Familienstand; erkläre knapp, dass die Steuer-ID per Post kommt. Korrekt, effizient, leicht ungeduldig, höflich. Kurze Sätze, Sie, Behördendeutsch. Bleib in der Rolle, nur Deutsch. Der Lernende beginnt.`},
{id:"vermieter",name:"Wohnungsbesichtigung",who:"Vermieterin",k:"alltag",make:()=>`Du bist Vermieterin bei einer Besichtigung (2 Zimmer, 58 m², 3. OG, 850 € kalt, 200 € Nebenkosten, Kaution drei Monatsmieten, frei ab dem 1. nächsten Monats). Frag nach Beruf, Einkommen, Schufa, Haustieren, Rauchen, wie lange er bleiben will. Beantworte Fragen zur Wohnung. Freundlich, aber prüfend, Sie, natürlich, kurze Sätze. Bleib in der Rolle, nur Deutsch. Der Lernende beginnt.`},
{id:"nachbarin",name:"Nachbarin beschwert sich",who:"Frau Krause",k:"alltag",make:()=>`Du bist Frau Krause, Nachbarin aus dem 2. Stock, 68 Jahre. Du klingelst, weil es gestern nach 22 Uhr laut war (Besuch, Musik). Verärgert, aber fair; entschuldigt sich der Lernende höflich, wirst du freundlicher und erzählst von Hausordnung oder Kehrwoche. Umgangssprachlich, Sie. Bleib in der Rolle, nur Deutsch. Der Lernende beginnt.`},
{id:"lena",name:"Pause mit Kollegin",who:"Lena",k:"alltag",make:()=>`Du bist Lena, Pflegekraft, 30, in der Pause im Aufenthaltsraum der Notaufnahme. Du duzt den neuen Kollegen. Smalltalk: Wochenende, Wetter, Dienstplan, woher er kommt, Tipps für die Stadt. Locker, umgangssprachlich, Füllwörter (na, halt, mal). Kurz. Bleib in der Rolle, nur Deutsch. Der Lernende beginnt.`}
];
const ERR_TYPES=["Kasus","Artikel/Genus","Konjugation","Wortstellung","Präposition","Nebensatz","Adjektivendung","Wortwahl","Register","Rechtschreibung","Sonstiges"];
const ERR_LESSON={"Kasus":"g4","Artikel/Genus":"g1","Konjugation":"g3","Wortstellung":"g3","Präposition":"g6","Nebensatz":"g11","Adjektivendung":"g13","Register":"m1","Rechtschreibung":"g0","Wortwahl":"","Sonstiges":""};
const METHOD=["<b>Chunks, not words.</b> Learn <i>Seit wann haben Sie die Beschwerden?</i> as one unit. Your brain stores phrases; patients hear phrases.","<b>Retrieval beats re-reading.</b> Answer before you look. The effort of recalling is what builds memory.","<b>Say it aloud.</b> Words you speak are remembered better than words you only read (the production effect).","<b>Trust the spacing.</b> A card you found hard is not a card to reset. Gaps are where memory grows.","<b>Mix it up.</b> Interleaving topics feels harder and works better than an hour of one thing.","<b>Mine sentences.</b> Tap unknown words in texts; they enter the deck with their sentence.","<b>Shadow.</b> Repeat half a second behind the voice, copying rhythm and melody. Ten lines a day.","<b>Hide the translation first.</b> Guess, then check. Being wrong and correcting is the lesson.","<b>Push your output.</b> Writing and speaking reveal gaps that reading hides.","<b>Switch registers.</b> Say one finding three ways: to the patient, to the Oberarzt, in the chart.","<b>4/3/2.</b> Tell the same story in four, three, then two minutes. Fluency grows when the content is already known.","<b>Simulate.</b> Timed mock exams beat untimed study. From now on, one FSP mock a week.","<b>Teach it.</b> Explain a grammar point in German to an imaginary student.","<b>Volume.</b> German podcasts on the commute, hospital videos at lunch. Hours, not minutes.","<b>Prepare for not understanding.</b> <i>Könnten Sie das bitte wiederholen?</i> is a professional sentence.","<b>Keep an error log.</b> Your three most frequent errors are your curriculum.","<b>One real conversation a day.</b> Tutor, tandem, neighbour, bakery. The app is rehearsal.","<b>Read the chart aloud.</b> Nominalstil becomes natural once your mouth has said it.","<b>Swap and reuse.</b> Take a dialogue, change the disease, keep the structure.","<b>Time your writing.</b> Arztbrief in 12 minutes, every week.","<b>Predict the question.</b> Before the examiner asks, list what they will ask.","<b>Role reversal.</b> Be the patient; let someone else be the doctor.","<b>Exam conditions.</b> No notes, timer running, out loud.","<b>Reduce, don't add.</b> In the last weeks review what is weak; add nothing new.","<b>Sleep.</b> Sleep consolidates language more than an extra hour of study.","<b>Celebrate.</b> Read a page of Faust for pleasure. You earned it."];

// ================= EXAMS: Goethe-Zertifikat B2, telc Deutsch B2, telc Deutsch B2·C1 Medizin =================
// Item types: match | gap | mc | listen | write | speak. Seeds are original practice items modelled on the official task types.
const EXAMS={
goethe:{name:"Goethe-Zertifikat B2",short:"Goethe B2",color:"var(--accent)",why:"Allgemeines B2 für die Approbation (Antrag) und viele Arbeitgeber.",
 rule:"Vier Module, je 100 Punkte; bestanden ab 60 Punkten pro Modul. Module können einzeln abgelegt werden.",
 crit:["Aufgabenerfüllung","Kohärenz","Wortschatz","Strukturen"],
 mods:[{m:"Lesen",min:65,note:"5 Teile, 30 Aufgaben"},{m:"Hören",min:40,note:"4 Teile, 30 Aufgaben; Teil 2 und 4 zweimal"},{m:"Schreiben",min:75,note:"Forumsbeitrag ~150 Wörter + Nachricht ~100 Wörter"},{m:"Sprechen",min:15,note:"15 Min. Vorbereitung; Vortrag ~4 Min. + Diskussion ~5 Min., meist zu zweit"}],
 teile:[
 {id:"gL1",m:"Lesen",t:"Teil 1",title:"Meinungen zuordnen",min:18,type:"match",spec:"4 Forumsbeiträge (je 150–200 Wörter) von Personen A–D zu einem gesellschaftlichen Thema; 9 Aussagen, jede passt zu genau einer Person (Personen dürfen mehrfach vorkommen). options = Personen mit Text, prompts = Aussagen.",
  seed:[{title:"Homeoffice – Fluch oder Segen?",instructions:"Lesen Sie die Forumsbeiträge. Zu welcher Person passt jede Aussage? Personen können mehrmals gewählt werden.",
   options:[{label:"A",head:"Jana",text:"Seit zwei Jahren arbeite ich drei Tage pro Woche von zu Hause. Am meisten freut mich, dass ich jeden Tag fast zwei Stunden Pendelzeit spare. Diese Zeit gehört jetzt meiner Familie und dem Sport, und ich bin viel ausgeglichener als früher."},
    {label:"B",head:"Tobias",text:"Als Krankenpfleger kann ich natürlich nicht von zu Hause arbeiten. Die ganze Diskussion wirkt auf mich manchmal etwas abgehoben: Patienten brauchen Menschen vor Ort, und das gilt auch für Busfahrer, Verkäuferinnen und Handwerker."},
    {label:"C",head:"Meltem",text:"Zu Hause habe ich endlich Ruhe zum Konzentrieren. Was mir aber wirklich fehlt, sind die Gespräche in der Kaffeeküche. Viele gute Ideen sind in unserem Team früher ganz zufällig im Flur entstanden."},
    {label:"D",head:"Herr Krüger",text:"Als Abteilungsleiter sehe ich, dass Mitarbeitende im Homeoffice oft länger arbeiten und kaum Pausen machen. Deshalb brauchen wir verbindliche Vereinbarungen: Wann muss man erreichbar sein, und wann ist Feierabend?"}],
   prompts:[{text:"Zu Hause wird oft mehr gearbeitet als im Büro.",answer:"D"},{text:"Der persönliche Austausch mit dem Team fehlt.",answer:"C"},{text:"In vielen Berufen ist Homeoffice gar nicht möglich.",answer:"B"},{text:"Durch das Homeoffice bleibt mehr Zeit für das Privatleben.",answer:"A"},{text:"Der Arbeitgeber sollte feste Regeln aufstellen.",answer:"D"}]}]},
 {id:"gL2",m:"Lesen",t:"Teil 2",title:"Sätze in einen Text einfügen",min:12,type:"gap",spec:"Zeitschriftenartikel (ca. 500 Wörter) mit 6 Lücken [1]–[6] und 8 Sätzen (2 bleiben übrig); mode \"sentence\"; bank mit 6 Sätzen a–f (2 passen nicht); answers ordnet jeder Lücke einen Satz zu.",
  seed:[{title:"Vom Pesthaus zur Universitätsklinik",instructions:"Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.",mode:"sentence",
   text:"Krankenhäuser, wie wir sie heute kennen, sind eine relativ junge Erfindung. [1] Im Mittelalter kümmerten sich vor allem Klöster um Kranke, Arme und Reisende. [2] Erst im 18. und 19. Jahrhundert entstanden Kliniken, in denen Ärzte systematisch beobachteten, lehrten und forschten. Die Berliner Charité, 1710 als Pesthaus gegründet, wurde so zu einem der bekanntesten Lehrkrankenhäuser Europas. [3] Heute steht nicht mehr nur die Behandlung im Mittelpunkt, sondern auch die Frage, wie Patientinnen und Patienten möglichst schnell wieder nach Hause können.",
   bank:[{label:"a",text:"Medizinische Behandlung war dabei nur eine Aufgabe unter vielen."},{label:"b",text:"Früher wurden Kranke meist zu Hause von der Familie gepflegt."},{label:"c",text:"Mit der Zeit veränderte sich auch das Ziel eines Krankenhausaufenthalts."},{label:"d",text:"Viele Patienten bezahlten ihre Behandlung mit Naturalien."},{label:"e",text:"Deshalb verlangen viele Krankenkassen heute eine Überweisung."}],
   answers:{"1":"b","2":"a","3":"c"}}]},
 {id:"gL3",m:"Lesen",t:"Teil 3",title:"Zeitungsartikel, Multiple Choice",min:12,type:"mc",spec:"Zeitungsartikel (ca. 500 Wörter) zu einem Thema aus Gesellschaft/Gesundheit; 6 Fragen mit je 3 Optionen, eine richtig.",
  seed:[{title:"Apps auf Rezept",instructions:"Lesen Sie den Text und wählen Sie die richtige Lösung.",
   text:"Immer mehr Menschen messen mit dem Smartphone ihren Puls, zählen Schritte oder protokollieren ihren Schlaf. Seit 2020 können Ärztinnen und Ärzte in Deutschland bestimmte Apps sogar auf Rezept verordnen – man spricht von „digitalen Gesundheitsanwendungen“, kurz DiGA. Die Kosten übernimmt die Krankenkasse, wenn das Bundesinstitut für Arzneimittel und Medizinprodukte die App geprüft hat. Kritiker bemängeln, dass der Nutzen vieler Anwendungen noch nicht ausreichend belegt sei. Hersteller dürfen ihre App nämlich zunächst vorläufig anbieten und müssen erst später Studien vorlegen. Befürworter halten dagegen, dass gerade Menschen auf dem Land, wo Termine bei Fachärzten knapp sind, von digitaler Unterstützung profitieren könnten. Einig sind sich beide Seiten in einem Punkt: Eine App ersetzt kein ärztliches Gespräch.",
   questions:[{q:"Eine DiGA ist …",opts:["eine App, die Ärzte verordnen können.","jede Fitness-App auf dem Smartphone.","eine neue Krankenkasse."],answer:0},{q:"Kritiker bemängeln, dass …",opts:["die Apps zu teuer sind.","der Nutzen nicht immer belegt ist.","Ärzte die Apps nicht verstehen."],answer:1},{q:"Befürworter sehen Vorteile vor allem …",opts:["für junge Menschen in Großstädten.","für Menschen auf dem Land.","für Fachärzte."],answer:1},{q:"Beide Seiten sind sich einig, dass …",opts:["Studien überflüssig sind.","Apps das Arztgespräch nicht ersetzen.","Apps bald verboten werden."],answer:1}]}]},
 {id:"gL4",m:"Lesen",t:"Teil 4",title:"Leserbriefe Überschriften zuordnen",min:12,type:"match",spec:"6 Leserbriefe (je 100–130 Wörter) zu einer kontroversen Frage = prompts; 8 Überschriften = options (nur head, ohne text), zwei bleiben übrig.",
  seed:[{title:"Organspende: Widerspruchslösung?",instructions:"Welche Überschrift passt zu welcher Äußerung? Eine Überschrift bleibt übrig.",
   options:[{label:"a",head:"Die Entscheidung muss freiwillig bleiben."},{label:"b",head:"Aufklärung bringt mehr als Gesetze."},{label:"c",head:"Andere Länder zeigen, dass es funktioniert."},{label:"d",head:"Spender sollten Geld bekommen."}],
   prompts:[{text:"In Spanien gilt die Widerspruchslösung seit Jahrzehnten, und dort gibt es deutlich mehr Spenderorgane. Warum sollten wir das nicht übernehmen?",answer:"c"},{text:"Mein Körper gehört mir. Der Staat darf nicht einfach annehmen, dass ich zustimme, nur weil ich nicht widersprochen habe.",answer:"a"},{text:"Viele Menschen wollen eigentlich spenden, haben aber nie einen Ausweis ausgefüllt. Besser wäre es, in Hausarztpraxen gezielt zu informieren.",answer:"b"}]}]},
 {id:"gL5",m:"Lesen",t:"Teil 5",title:"Regeltext: Paragrafen zuordnen",min:6,type:"match",spec:"Hausordnung oder Regelwerk mit 3 Paragrafen (je 40–60 Wörter) = prompts; 6 Überschriften als options (nur head), 3 bleiben übrig.",
  seed:[{title:"Hausordnung des Klinikums",instructions:"Welche Überschrift passt zu welchem Paragrafen? Zwei Überschriften bleiben übrig.",
   options:[{label:"a",head:"Besuch"},{label:"b",head:"Hygiene"},{label:"c",head:"Elektronische Geräte"},{label:"d",head:"Parken"},{label:"e",head:"Verpflegung"}],
   prompts:[{text:"§ 1 Besuchszeiten sind täglich von 14 bis 19 Uhr. Auf den Intensivstationen gelten abweichende Regelungen; bitte melden Sie sich vorher telefonisch an.",answer:"a"},{text:"§ 2 Das Mitbringen von Schnittblumen und Topfpflanzen ist auf den Stationen der Hämatologie und Onkologie aus hygienischen Gründen nicht gestattet.",answer:"b"},{text:"§ 3 Mobiltelefone dürfen in den Patientenzimmern benutzt werden, sofern Mitpatienten nicht gestört werden. In Untersuchungsräumen sind sie auszuschalten.",answer:"c"}]}]},
 {id:"gH1",m:"Hören",t:"Teil 1",title:"Kurze Alltagstexte",min:10,type:"listen",spec:"5 kurze Alltagstexte (Anrufbeantworter, Durchsage, Gespräch), je 60–90 Wörter, einmal gehört; pro Text 1 Frage richtig/falsch und 1 Frage mit 3 Optionen.",
  seed:[{title:"Anrufbeantworter und Durchsage",instructions:"Sie hören zwei kurze Texte einmal. Lesen Sie zuerst die Aufgaben.",plays:1,
   script:[{who:"Praxis",text:"Guten Tag, Herr Ismail, hier ist die Praxis Doktor Berger. Ihr Termin am Donnerstag um neun Uhr muss leider verschoben werden, weil Frau Doktor Berger krank ist. Wir können Ihnen Freitag um elf Uhr oder Montag um acht Uhr anbieten. Bitte rufen Sie uns bis morgen Mittag zurück."},{who:"Bahnhof",text:"Information zu ICE fünfhundertachtundsiebzig nach Hamburg, planmäßige Abfahrt vierzehn Uhr zwölf: Der Zug fährt heute von Gleis neun statt von Gleis sieben. Wegen einer Reparatur verkehren die Wagen einundzwanzig bis vierundzwanzig heute nicht. Reisende mit Reservierung in diesen Wagen setzen sich bitte in die Wagen fünfundzwanzig bis achtundzwanzig."}],
   questions:[{q:"Der Termin am Donnerstag findet wie geplant statt.",kind:"rf",answer:"f"},{q:"Was soll Herr Ismail tun?",kind:"mc",opts:["Am Freitag vorbeikommen.","Bis morgen Mittag zurückrufen.","Eine E-Mail schreiben."],answer:1},{q:"Der Zug fährt heute von einem anderen Gleis ab.",kind:"rf",answer:"r"},{q:"Was gilt für Reisende mit Reservierung in Wagen 22?",kind:"mc",opts:["Sie müssen einen späteren Zug nehmen.","Sie sollen in einem anderen Wagen Platz nehmen.","Sie bekommen ihr Geld zurück."],answer:1}]}]},
 {id:"gH2",m:"Hören",t:"Teil 2",title:"Radiointerview",min:10,type:"listen",spec:"Radiointerview (Moderator + Expertin), ca. 600 Wörter, zweimal gehört; 6 Fragen mit 3 Optionen.",
  seed:[{title:"Nachtdienst und innere Uhr",instructions:"Sie hören ein Interview zweimal.",plays:2,
   script:[{who:"Moderator",text:"Frau Doktor Lehmann, Sie erforschen, wie Nachtarbeit unseren Körper verändert. Warum ist das überhaupt ein Problem?"},{who:"Dr. Lehmann",text:"Unser Körper hat eine innere Uhr, die sich am Tageslicht orientiert. Wer nachts arbeitet, arbeitet gegen diese Uhr. Kurzfristig führt das zu Müdigkeit und Konzentrationsfehlern, langfristig steigt zum Beispiel das Risiko für Stoffwechselerkrankungen."},{who:"Moderator",text:"Was raten Sie Menschen im Schichtdienst, zum Beispiel Pflegekräften oder Ärzten?"},{who:"Dr. Lehmann",text:"Am wichtigsten ist ein dunkles, ruhiges Schlafzimmer am Tag. Viele unterschätzen auch das Licht: Auf dem Heimweg nach dem Nachtdienst hilft eine Sonnenbrille, damit der Körper nicht glaubt, der Tag beginne."},{who:"Moderator",text:"Und was können Arbeitgeber tun?"},{who:"Dr. Lehmann",text:"Eine ganze Menge. Zum Beispiel Schichtpläne, die vorwärts rotieren, also erst Frühdienst, dann Spätdienst, dann Nachtdienst. Das fällt dem Körper deutlich leichter als umgekehrt."}],
   questions:[{q:"Langfristig führt Nachtarbeit laut Dr. Lehmann zu …",kind:"mc",opts:["besserer Konzentration.","einem höheren Risiko für Stoffwechselkrankheiten.","weniger Müdigkeit."],answer:1},{q:"Warum empfiehlt sie eine Sonnenbrille?",kind:"mc",opts:["Gegen Kopfschmerzen.","Damit der Körper nicht auf Tag umschaltet.","Wegen der Blendung beim Autofahren."],answer:1},{q:"Welche Schichtfolge ist günstiger?",kind:"mc",opts:["Nacht, Spät, Früh.","Früh, Spät, Nacht.","Nur Nachtdienste."],answer:1}]}]},
 {id:"gH3",m:"Hören",t:"Teil 3",title:"Gesprächsrunde: Wer sagt das?",min:8,type:"listen",spec:"Radiogespräch mit Moderator und zwei Gästen (ca. 600 Wörter), einmal gehört; 6 Aussagen, kind \"who\", opts = die drei Sprechernamen, answer = Index.",
  seed:[{title:"Ärzte aus dem Ausland",instructions:"Sie hören eine Diskussion einmal. Wer sagt was?",plays:1,
   script:[{who:"Moderator",text:"Heute sprechen wir über Ärztinnen und Ärzte aus dem Ausland. Herr Doktor Haddad, wie lange hat Ihr Weg zur Approbation gedauert?"},{who:"Dr. Haddad",text:"Fast zwei Jahre. Medizinisch war ich gut vorbereitet, aber die Fachsprachprüfung hat mich mehr Nerven gekostet als jede Prüfung im Studium."},{who:"Moderator",text:"Frau Wolf, Sie leiten die Personalabteilung eines Klinikums. Wie wichtig sind diese Kolleginnen und Kollegen für Sie?"},{who:"Frau Wolf",text:"Ehrlich gesagt: Ohne sie könnten wir mehrere Stationen nicht offen halten. Ein großer Teil unserer Assistenzärzte hat im Ausland studiert."},{who:"Dr. Haddad",text:"Was mir am Anfang gefehlt hat, war eine richtige Einarbeitung. Man wird oft sofort in den Dienst gesteckt."},{who:"Frau Wolf",text:"Da hat er recht. Wir haben deshalb ein Mentorenprogramm eingeführt: In den ersten drei Monaten hat jeder neue Kollege einen festen Ansprechpartner."},{who:"Moderator",text:"Das klingt nach einem Modell, das auch andere Kliniken übernehmen könnten."}],
   questions:[{q:"Die Sprachprüfung war belastender als die Prüfungen im Studium.",kind:"who",opts:["Moderator","Dr. Haddad","Frau Wolf"],answer:1},{q:"Ohne ausländische Ärzte müssten Stationen schließen.",kind:"who",opts:["Moderator","Dr. Haddad","Frau Wolf"],answer:2},{q:"Neue Kollegen bekommen einen festen Ansprechpartner.",kind:"who",opts:["Moderator","Dr. Haddad","Frau Wolf"],answer:2},{q:"Das könnte auch für andere Krankenhäuser interessant sein.",kind:"who",opts:["Moderator","Dr. Haddad","Frau Wolf"],answer:0},{q:"Man muss oft ohne Vorbereitung arbeiten.",kind:"who",opts:["Moderator","Dr. Haddad","Frau Wolf"],answer:1}]}]},
 {id:"gH4",m:"Hören",t:"Teil 4",title:"Kurzvortrag",min:10,type:"listen",spec:"Vortrag einer Person (ca. 600 Wörter) zu einem gesellschaftlichen oder wissenschaftlichen Thema, zweimal gehört; 8 Fragen mit 3 Optionen.",
  seed:[{title:"Fachwortschatz dauerhaft lernen",instructions:"Sie hören einen Vortrag zweimal.",plays:2,
   script:[{who:"Referentin",text:"Guten Morgen. Ich möchte Ihnen heute zeigen, wie man sich Fachwortschatz dauerhaft merkt. Viele Lernende lesen ihre Listen immer wieder durch. Das fühlt sich gut an, bringt aber wenig. Wirksamer ist es, sich selbst abzufragen: Man versucht, das Wort aktiv zu erinnern, bevor man nachschaut. Zweitens sollte man die Wiederholungen verteilen, also heute, in drei Tagen und in einer Woche, statt alles an einem Abend zu lernen. Und drittens: Lernen Sie Wörter nicht einzeln, sondern in typischen Verbindungen, zum Beispiel nicht nur Blutdruck, sondern den Blutdruck messen."}],
   questions:[{q:"Warum ist wiederholtes Durchlesen problematisch?",kind:"mc",opts:["Es ist zu anstrengend.","Es bringt wenig, obwohl es sich gut anfühlt.","Es dauert zu lange."],answer:1},{q:"Was empfiehlt die Referentin zuerst?",kind:"mc",opts:["Sich selbst abzufragen.","Listen abzuschreiben.","Laut vorzulesen."],answer:0},{q:"Welches Beispiel nennt sie für eine Wortverbindung?",kind:"mc",opts:["den Blutdruck messen","Blut abnehmen","den Puls zählen"],answer:0}]}]},
 {id:"gS1",m:"Schreiben",t:"Teil 1",title:"Forumsbeitrag",min:50,type:"write",spec:"Forumsbeitrag zu einem gesellschaftlichen Thema, ca. 150 Wörter; 4 Inhaltspunkte (Meinung, Gründe, Alternative, Vorteile der Alternative); Einleitung und Schluss nötig.",
  seed:[{title:"Arztbesuch per Video?",situation:"Sie schreiben einen Beitrag in einem Online-Forum zum Thema „Videosprechstunde statt Wartezimmer“.",points:["Äußern Sie Ihre Meinung zu Videosprechstunden.","Nennen Sie Gründe, warum Videosprechstunden beliebter werden.","Nennen Sie eine andere Möglichkeit, ärztlichen Rat zu bekommen.","Nennen Sie Vorteile dieser anderen Möglichkeit."],words:150,minutes:50,register:"Forumsbeitrag, neutral bis persönlich, mit Einleitung und Schluss",
   model:"Ich lese hier viele Beiträge über Videosprechstunden und möchte meine Erfahrung als Arzt teilen. Grundsätzlich finde ich sie sinnvoll, aber nicht für jede Situation. Beliebter werden sie vor allem, weil man sich lange Wege und volle Wartezimmer spart. Für Berufstätige oder Menschen auf dem Land ist das ein echter Gewinn. Trotzdem gibt es eine andere Möglichkeit, die oft vergessen wird: den Hausbesuch oder die Telefonberatung durch die eigene Hausarztpraxis. Der Vorteil ist, dass der Arzt den Patienten und seine Vorgeschichte kennt. Bei einem Hausbesuch kann er außerdem untersuchen, und das ersetzt keine Kamera. Mein Fazit: Für Rezepte, Befundbesprechungen oder Kontrollen ist die Videosprechstunde ideal. Bei neuen Beschwerden sollte man aber lieber persönlich zum Arzt gehen."}]},
 {id:"gS2",m:"Schreiben",t:"Teil 2",title:"Nachricht an eine Vorgesetzte",min:25,type:"write",spec:"Formelle Nachricht im beruflichen Kontext, ca. 100 Wörter; 4 Inhaltspunkte; Anrede und Gruß nötig.",
  seed:[{title:"Diensttausch",situation:"Ihre Oberärztin, Frau Dr. Schulz, hat Sie für Freitag zum Nachtdienst eingeteilt. An diesem Tag haben Sie Ihre Sprachprüfung. Schreiben Sie ihr eine Nachricht.",points:["Beschreiben Sie das Problem.","Bitten Sie um Verständnis.","Machen Sie einen Vorschlag für einen Tausch.","Zeigen Sie, dass Sie die Personalsituation verstehen."],words:100,minutes:25,register:"formell, höflich, Sie",
   model:"Sehr geehrte Frau Dr. Schulz,\n\nich habe gesehen, dass ich am Freitag für den Nachtdienst eingeteilt bin. Leider findet an diesem Tag meine Sprachprüfung statt, die ich schon vor Monaten angemeldet habe. Ich hoffe, Sie haben Verständnis dafür. Herr Yilmaz hat mir angeboten, seinen Dienst am Mittwoch gegen meinen zu tauschen. Wäre das für Sie in Ordnung? Mir ist bewusst, dass die Personaldecke im Moment sehr dünn ist, deshalb springe ich gern auch am kommenden Wochenende ein, falls Bedarf besteht.\n\nMit freundlichen Grüßen\nAmron Ismail"}]},
 {id:"gSp1",m:"Sprechen",t:"Teil 1",title:"Vortrag halten",min:4,prep:15,type:"speak",spec:"Thema für einen ca. vierminütigen Vortrag mit Leitpunkten (Thema vorstellen, Situation im Heimatland, Möglichkeiten mit Vor- und Nachteilen, eigene Meinung, Abschluss). role = Prüfungspartner, der danach Fragen stellt.",
  seed:[{title:"Gesunde Ernährung im Schichtdienst",task:"Halten Sie einen Vortrag von etwa vier Minuten. Danach stellt Ihnen Ihr Partner Fragen.",points:["Beschreiben Sie das Thema und warum es wichtig ist.","Beschreiben Sie die Situation in Ihrem Heimatland.","Nennen Sie zwei Möglichkeiten mit Vor- und Nachteilen (z. B. Kantine, selbst kochen).","Sagen Sie Ihre Meinung und geben Sie eine Empfehlung.","Schließen Sie Ihren Vortrag ab und bedanken Sie sich."],prep:15,minutes:4,role:"Prüfungspartner"}]},
 {id:"gSp2",m:"Sprechen",t:"Teil 2",title:"Diskussion",min:5,prep:0,type:"speak",spec:"Kontroverse Frage für eine fünfminütige Diskussion zu zweit; Argumente austauschen, aufeinander reagieren, am Ende zusammenfassen. role = Diskussionspartner mit Gegenposition.",
  seed:[{title:"Grippeimpfung für Klinikpersonal: Pflicht?",task:"Diskutieren Sie etwa fünf Minuten: Sollte es für Klinikpersonal eine Pflicht zur jährlichen Grippeimpfung geben? Tauschen Sie Argumente aus, reagieren Sie auf Ihren Partner und fassen Sie am Ende zusammen.",points:["Ihre Position mit zwei Argumenten","Auf die Argumente des Partners eingehen","Ein Beispiel aus Ihrer Erfahrung","Zusammenfassung: dafür oder dagegen"],prep:0,minutes:5,role:"Diskussionspartner"}]}
 ]},
telc:{name:"telc Deutsch B2",short:"telc B2",color:"var(--alltag)",why:"Alternative zum Goethe-Zertifikat; ebenfalls als B2-Nachweis verbreitet.",
 rule:"Schriftlich 225 Punkte, mündlich 75 Punkte; bestanden mit je 60 % (135 und 45 Punkte). Leseverstehen und Sprachbausteine zusammen 90 Min., Hören ca. 20 Min., Schreiben 30 Min., mündlich ca. 16 Min. zu zweit nach 20 Min. Vorbereitung.",
 crit:["Behandlung der Leitpunkte","Kommunikative Gestaltung","Formale Richtigkeit"],
 mods:[{m:"Lesen",min:90,note:"Leseverstehen 1–3 + Sprachbausteine 1–2"},{m:"Hören",min:20,note:"Teil 1–3, jeder Text nur einmal, richtig/falsch"},{m:"Schreiben",min:30,note:"Ein Brief, 150–200 Wörter, 1 von 2 Themen"},{m:"Sprechen",min:16,note:"Präsentation, Diskussion, Problemlösung"}],
 teile:[
 {id:"tL1",m:"Lesen",t:"Leseverstehen 1",title:"Globales Lesen: Überschriften",min:15,type:"match",spec:"5 kurze Zeitungstexte (je 60–90 Wörter) = prompts; 10 Überschriften a–j = options (nur head), 5 bleiben übrig.",
  seed:[{title:"Meldungen aus der Stadt",instructions:"Welche Überschrift passt zu welchem Text? Zwei Überschriften bleiben übrig.",
   options:[{label:"a",head:"Termine beim Amt per Smartphone"},{label:"b",head:"Mehr Platz für Radfahrende"},{label:"c",head:"Wenn es heiß wird: Hilfe für Ältere"},{label:"d",head:"Autofahren in der Innenstadt bald verboten"},{label:"e",head:"Pflegekräfte streiken"}],
   prompts:[{text:"Ab Juli bietet die Stadt eine neue App an: Bürgerinnen und Bürger können Termine für Pass, Anmeldung und Führerschein direkt online buchen. Wer kein Smartphone hat, kann weiterhin anrufen.",answer:"a"},{text:"Drei weitere Straßen werden zu Fahrradstraßen. Autos dürfen dort nur noch mit 30 km/h fahren und müssen Radfahrenden Vorrang lassen. Die Stadt will so den Anteil des Radverkehrs bis 2030 verdoppeln.",answer:"b"},{text:"Bei Temperaturen über 30 Grad rufen Ehrenamtliche ab sofort allein lebende Senioren an, erinnern sie ans Trinken und organisieren bei Bedarf einen Arztbesuch.",answer:"c"}]}]},
 {id:"tL2",m:"Lesen",t:"Leseverstehen 2",title:"Detailliertes Lesen",min:20,type:"mc",spec:"Sachtext (ca. 400 Wörter); 5 Fragen mit je 3 Optionen.",
  seed:[{title:"Erste Hilfe vor dem Führerschein",instructions:"Lesen Sie den Text. Welche Lösung ist richtig?",
   text:"Wer in Deutschland einen Führerschein machen will, muss vorher einen Erste-Hilfe-Kurs besuchen. Seit 2015 dauert dieser Kurs neun Unterrichtseinheiten und wird an einem einzigen Tag angeboten. Früher gab es für Autofahrer einen kürzeren Kurs, der vor allem lebensrettende Sofortmaßnahmen behandelte. Heute lernen alle Teilnehmenden dasselbe: Notruf absetzen, Bewusstlose in die stabile Seitenlage bringen, Herzdruckmassage durchführen und Wunden versorgen. Fachleute begrüßen die Reform, weil sie praxisnäher ist. Sie kritisieren aber, dass der Kurs nur einmal im Leben Pflicht ist. Wer vor zwanzig Jahren den Führerschein gemacht hat, erinnert sich oft kaum noch an die Herzdruckmassage. Deshalb empfehlen Rettungsdienste, den Kurs alle zwei bis drei Jahre zu wiederholen. Viele Arbeitgeber bezahlen das sogar, wenn man sich als betrieblicher Ersthelfer ausbilden lässt.",
   questions:[{q:"Der Erste-Hilfe-Kurs für den Führerschein …",opts:["dauert heute einen Tag.","ist freiwillig.","wird nur für Lkw-Fahrer angeboten."],answer:0},{q:"Was hat sich seit 2015 geändert?",opts:["Der Kurs ist teurer geworden.","Alle lernen dieselben Inhalte.","Der Kurs findet online statt."],answer:1},{q:"Was kritisieren Fachleute?",opts:["Der Kurs ist zu lang.","Man muss ihn nur einmal machen.","Die Inhalte sind zu theoretisch."],answer:1},{q:"Wer bezahlt oft eine Wiederholung?",opts:["Die Krankenkasse.","Der Arbeitgeber.","Die Fahrschule."],answer:1}]}]},
 {id:"tL3",m:"Lesen",t:"Leseverstehen 3",title:"Selektives Lesen: Anzeigen",min:20,type:"match",spec:"10 Situationen = prompts; 12 kurze Anzeigen = options mit text; für manche Situationen gibt es keine Anzeige (answer \"0\"). Für Übung: 5 Situationen, 6 Anzeigen, none:true.",
  seed:[{title:"Anzeigen in der Stadtzeitung",instructions:"Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige: Wählen Sie dann 0.",none:true,
   options:[{label:"a",head:"Sprachcafé",text:"Jeden Donnerstag, 19 Uhr, Stadtbibliothek: Deutsch sprechen mit Muttersprachlern, kostenlos, ohne Anmeldung."},{label:"b",head:"Fitnessstudio Vital",text:"Probetraining gratis! Schichtarbeiter-Tarif: Training rund um die Uhr, monatlich kündbar."},{label:"c",head:"Möbliertes Zimmer",text:"Ruhiges Zimmer, 18 m², nahe Uniklinik, ab sofort, 450 € warm, nur an Nichtraucher."},{label:"d",head:"Kita Sonnenschein",text:"Freie Plätze für Kinder ab 1 Jahr, Öffnungszeiten 6 bis 20 Uhr, ideal für Eltern im Schichtdienst."},{label:"e",head:"Apotheken-Notdienst",text:"Heute Nacht dienstbereit: Löwen-Apotheke, Hauptstraße 12. Klingel neben dem Eingang."}],
   prompts:[{text:"Sie sind neu in der Stadt, arbeiten bald in der Klinik und suchen schnell eine Unterkunft.",answer:"c"},{text:"Sie möchten Ihr Deutsch in lockerer Atmosphäre verbessern.",answer:"a"},{text:"Ihr Kind hat nachts Fieber, und Sie brauchen ein Medikament.",answer:"e"},{text:"Sie möchten nach dem Nachtdienst Sport machen.",answer:"b"},{text:"Sie suchen einen gebrauchten Kühlschrank.",answer:"0"}]}]},
 {id:"tB1",m:"Lesen",t:"Sprachbausteine 1",title:"Brief mit Lücken",min:15,type:"gap",spec:"Formeller Brief/E-Mail (ca. 200 Wörter) mit 8 Lücken [1]–[8]; mode \"mc\"; je 3 Optionen, grammatisch (Präposition, Konnektor, Kasus, Verbform).",
  seed:[{title:"E-Mail an die Hausverwaltung",instructions:"Welches Wort passt in die Lücke?",mode:"mc",
   text:"Sehr geehrte Damen und Herren,\n\nseit drei Tagen funktioniert die Heizung [1] meiner Wohnung nicht mehr. Ich habe bereits zweimal beim Hausmeister angerufen, [2] leider niemanden erreicht. Da die Temperaturen nachts unter null fallen, ist die Situation [3] meine kleine Tochter sehr belastend. Ich bitte Sie daher, so schnell [4] möglich einen Techniker zu schicken. Ich bin [5] 8 Uhr morgens und nach 18 Uhr zu Hause. Sollte die Reparatur länger dauern, [6] ich Sie, mir ein Heizgerät zur Verfügung zu stellen.\n\nMit freundlichen Grüßen\nAmron Ismail",
   gaps:[{n:1,opts:["in","an","auf"],answer:0},{n:2,opts:["denn","aber","weil"],answer:1},{n:3,opts:["für","mit","von"],answer:0},{n:4,opts:["wie","als","so"],answer:0},{n:5,opts:["seit","bis","vor"],answer:1},{n:6,opts:["bitte","bitten","bat"],answer:0}]}]},
 {id:"tB2",m:"Lesen",t:"Sprachbausteine 2",title:"Text mit Wortkasten",min:20,type:"gap",spec:"Zeitschriftentext (ca. 250 Wörter) mit 8 Lücken [1]–[8]; mode \"bank\"; bank mit 12 Wörtern (label = das Wort selbst), 4 bleiben übrig.",
  seed:[{title:"Hitze in der Stadt",instructions:"Welches Wort passt in die Lücke? Jedes Wort passt nur einmal; drei Wörter bleiben übrig.",mode:"bank",
   text:"Hitzewellen werden in Deutschland häufiger, [1] viele Städte reagieren. In Köln gibt es [2] einen Hitzeaktionsplan, der regelt, [3] wer bei extremen Temperaturen informiert wird. Besonders gefährdet sind ältere Menschen, [4] allein leben und zu wenig trinken. Ärztinnen und Ärzte sollen ihre Patienten [5] warnen, wenn Medikamente wie Entwässerungstabletten die Wirkung der Hitze verstärken. [6] wichtig sind kühle Räume, in denen sich Menschen tagsüber aufhalten können.",
   bank:[{label:"und",text:"und"},{label:"inzwischen",text:"inzwischen"},{label:"wer",text:"wer"},{label:"die",text:"die"},{label:"rechtzeitig",text:"rechtzeitig"},{label:"Ebenso",text:"Ebenso"},{label:"obwohl",text:"obwohl"},{label:"denen",text:"denen"},{label:"damals",text:"damals"}],
   answers:{"1":"und","2":"inzwischen","3":"wer","4":"die","5":"rechtzeitig","6":"Ebenso"}}]},
 {id:"tH1",m:"Hören",t:"Hörverstehen 1",title:"Globalverstehen: Nachrichten",min:5,type:"listen",spec:"3–5 kurze Radionachrichten (je 40–60 Wörter), einmal gehört; je eine Aussage richtig/falsch.",
  seed:[{title:"Kurznachrichten",instructions:"Sie hören kurze Nachrichten einmal. Sind die Aussagen richtig oder falsch?",plays:1,
   script:[{who:"Sprecherin",text:"Berlin. Die Zahl der Medizinstudienplätze soll in den nächsten Jahren steigen. Das haben Bund und Länder gestern vereinbart. Wann genau die neuen Plätze kommen, ist aber noch offen."},{who:"Sprecherin",text:"München. Wegen eines Streiks fallen morgen bei der S-Bahn zahlreiche Verbindungen aus. Fahrgäste sollen auf Busse und U-Bahnen ausweichen."},{who:"Sprecherin",text:"Hamburg. Das Wetter: Morgen ist es im ganzen Norden sonnig, nur an der Küste kann es am Nachmittag einzelne Schauer geben."}],
   questions:[{q:"Es steht schon fest, wann es mehr Studienplätze gibt.",kind:"rf",answer:"f"},{q:"In München fahren morgen viele S-Bahnen nicht.",kind:"rf",answer:"r"},{q:"Im Norden regnet es morgen den ganzen Tag.",kind:"rf",answer:"f"}]}]},
 {id:"tH2",m:"Hören",t:"Hörverstehen 2",title:"Detailverstehen: Interview",min:7,type:"listen",spec:"Radiointerview (ca. 300 Wörter), einmal gehört; 6 Aussagen richtig/falsch.",
  seed:[{title:"Ehrenamt im Rettungsdienst",instructions:"Sie hören ein Interview einmal. Richtig oder falsch?",plays:1,
   script:[{who:"Moderatorin",text:"Herr Brandt, Sie arbeiten als Lehrer und fahren in Ihrer Freizeit Rettungswagen. Wie passt das zusammen?"},{who:"Herr Brandt",text:"Besser, als man denkt. Ich bin ehrenamtlicher Rettungssanitäter beim Roten Kreuz, meistens am Wochenende. Die Ausbildung habe ich vor acht Jahren neben dem Beruf gemacht."},{who:"Moderatorin",text:"Wie viel Zeit kostet das?"},{who:"Herr Brandt",text:"Im Schnitt zwei Dienste im Monat, jeweils zwölf Stunden. In den Ferien auch mal mehr."},{who:"Moderatorin",text:"Was motiviert Sie?"},{who:"Herr Brandt",text:"Man sieht sofort, dass man etwas bewirkt. Und ehrlich gesagt hilft es mir auch in der Schule: Ich bleibe in stressigen Situationen viel ruhiger."}],
   questions:[{q:"Herr Brandt ist hauptberuflich Rettungssanitäter.",kind:"rf",answer:"f"},{q:"Er hat die Ausbildung neben seinem Beruf gemacht.",kind:"rf",answer:"r"},{q:"Er arbeitet jede Woche zwölf Stunden im Rettungsdienst.",kind:"rf",answer:"f"},{q:"Die Arbeit im Rettungsdienst hilft ihm auch als Lehrer.",kind:"rf",answer:"r"}]}]},
 {id:"tH3",m:"Hören",t:"Hörverstehen 3",title:"Selektives Verstehen: Ansagen",min:6,type:"listen",spec:"3–5 kurze Ansagen (Telefon, Lautsprecher), einmal gehört; je eine Aussage richtig/falsch.",
  seed:[{title:"Ansagen",instructions:"Sie hören kurze Ansagen einmal. Richtig oder falsch?",plays:1,
   script:[{who:"Ansage",text:"Herzlich willkommen beim Bürgerservice. Für Terminvereinbarungen drücken Sie die Eins. Für Fragen zu Ihrem Antrag halten Sie bitte Ihre Vorgangsnummer bereit und drücken Sie die Zwei."},{who:"Ansage",text:"Liebe Besucherinnen und Besucher, die Cafeteria im Erdgeschoss schließt heute ausnahmsweise bereits um fünfzehn Uhr. Getränkeautomaten finden Sie in jedem Stockwerk."},{who:"Ansage",text:"Sie sind mit der Praxis Doktor Yilmaz verbunden. Unsere Praxis ist bis einschließlich Freitag geschlossen. In dringenden Fällen wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst unter eins eins sechs, eins eins sieben."}],
   questions:[{q:"Für Fragen zum Antrag braucht man eine Vorgangsnummer.",kind:"rf",answer:"r"},{q:"Die Cafeteria hat heute länger geöffnet.",kind:"rf",answer:"f"},{q:"In dringenden Fällen soll man die 116 117 anrufen.",kind:"rf",answer:"r"}]}]},
 {id:"tS",m:"Schreiben",t:"Schriftlicher Ausdruck",title:"Halbformeller Brief",min:30,type:"write",spec:"Halbformeller oder formeller Brief, 150–200 Wörter; 4 Leitpunkte, von denen mindestens 3 behandelt werden; Betreff, Anrede, Gruß.",
  seed:[{title:"Beschwerde an ein Fitnessstudio",situation:"Sie haben im Fitnessstudio „Vital“ einen Schichtarbeiter-Tarif abgeschlossen, der Training rund um die Uhr verspricht. Seit zwei Wochen ist das Studio aber nachts geschlossen. Schreiben Sie einen Brief an die Geschäftsleitung.",points:["Grund für Ihr Schreiben","Was im Vertrag versprochen wurde","Welche Folgen das für Sie hat","Was Sie jetzt erwarten (z. B. Erstattung, Kündigung)"],words:175,minutes:30,register:"formell, Beschwerde, Betreff und Anrede",
   model:"Betreff: Beschwerde über geänderte Öffnungszeiten\n\nSehr geehrte Damen und Herren,\n\nich bin seit März Mitglied in Ihrem Studio und habe mich bewusst für den Schichtarbeiter-Tarif entschieden. Laut Vertrag kann ich rund um die Uhr trainieren. Seit zwei Wochen ist das Studio jedoch nachts geschlossen, ohne dass ich darüber informiert wurde.\n\nFür mich hat das erhebliche Folgen: Als Arzt im Schichtdienst kann ich nur nach Nachtdiensten trainieren, also gerade dann, wenn Sie geschlossen haben. Ich zahle daher derzeit für eine Leistung, die ich nicht nutzen kann.\n\nIch erwarte, dass die vereinbarten Öffnungszeiten innerhalb von zwei Wochen wiederhergestellt werden. Andernfalls bitte ich um eine anteilige Erstattung der Beiträge seit Beginn der Schließung und um die Möglichkeit, den Vertrag außerordentlich zu kündigen.\n\nIch freue mich auf Ihre baldige Antwort.\n\nMit freundlichen Grüßen\nAmron Ismail"}]},
 {id:"tM1",m:"Sprechen",t:"Mündlich Teil 1",title:"Präsentation",min:3,prep:20,type:"speak",spec:"Thema aus der eigenen Erfahrung für eine Präsentation von ca. 90 Sekunden; danach Fragen des Partners. role = Prüfungspartner.",
  seed:[{title:"Eine Reise, die Sie geprägt hat",task:"Erzählen Sie etwa anderthalb Minuten von einer Reise, die Sie besonders beeindruckt hat. Danach stellt Ihr Partner Fragen, und Sie stellen ihm eine Frage.",points:["Wohin, wann, mit wem","Was besonders war","Was Sie daraus gelernt haben","Eine Frage an Ihren Partner"],prep:20,minutes:3,role:"Prüfungspartner"}]},
 {id:"tM2",m:"Sprechen",t:"Mündlich Teil 2",title:"Diskussion über einen Text",min:5,prep:0,type:"speak",spec:"Kurzer Zeitungstext (ca. 120 Wörter) zu einem Thema; die Kandidaten diskutieren ihn. task enthält den Text. role = Diskussionspartner.",
  seed:[{title:"Medikamente aus dem Internet",task:"Lesen Sie den Text und diskutieren Sie mit Ihrem Partner etwa fünf Minuten.\n\n„Immer mehr Menschen kaufen Medikamente bei Online-Apotheken. Das ist bequem und oft günstiger. Apothekerverbände warnen jedoch: Die persönliche Beratung fehle, und gefälschte Medikamente seien im Internet ein wachsendes Problem. Befürworter verweisen darauf, dass zugelassene Versandapotheken streng kontrolliert werden und gerade chronisch Kranke profitieren.“",points:["Ihre Meinung mit Begründung","Erfahrungen aus Ihrem Heimatland","Auf Argumente des Partners reagieren","Gemeinsames Fazit"],prep:0,minutes:5,role:"Diskussionspartner"}]},
 {id:"tM3",m:"Sprechen",t:"Mündlich Teil 3",title:"Problemlösung: gemeinsam planen",min:5,prep:0,type:"speak",spec:"Gemeinsame Planung einer Aktivität (Feier, Ausflug) ohne vorgegebene Leitpunkte; Einigung erzielen. role = Planungspartner.",
  seed:[{title:"Abschiedsfeier für eine Kollegin",task:"Eine Kollegin aus Ihrem Team geht in Rente. Planen Sie gemeinsam mit Ihrem Partner eine kleine Abschiedsfeier und einigen Sie sich.",points:["Ort und Zeit","Essen und Getränke","Geschenk","Wer lädt ein, wer bezahlt?"],prep:0,minutes:5,role:"Planungspartner"}]}
 ]},
med:{name:"telc Deutsch B2·C1 Medizin",short:"telc Medizin",color:"var(--klinik)",why:"Medizinische Fachsprachprüfung von telc. Ob sie statt der FSP der Ärztekammer anerkannt wird, entscheidet dein Bundesland: frag deine Approbationsbehörde.",
 rule:"Schriftlich ca. 130 Min. (Hören 40, Lesen + Sprachbausteine 70, Schreiben 60) plus mündlich ca. 45 Min. in drei Teilen. Ergebnis auf Niveau B2 oder C1.",
 crit:["Inhalt und Vollständigkeit","Fachsprache und Register","Aufbau","Formale Richtigkeit"],
 mods:[{m:"Hören",min:40,note:"4 Teile, Klinikalltag"},{m:"Lesen",min:70,note:"3 Teile + 2 Sprachbausteine"},{m:"Schreiben",min:60,note:"Arztbrief + E-Mail an Kollegen"},{m:"Sprechen",min:45,note:"Arzt-Patient, Arzt-Arzt, Angehörige"}],
 teile:[
 {id:"mH1",m:"Hören",t:"Teil 1",title:"Übergabe auf Station",min:10,type:"listen",spec:"Ärztliche Übergabe zweier Patienten (ca. 200 Wörter) zwischen Ärztin und Arzt; 4 Fragen mit 3 Optionen oder richtig/falsch.",
  seed:[{title:"Übergabe Nachtdienst",instructions:"Sie hören eine Übergabe einmal.",plays:1,
   script:[{who:"Dr. Neumann",text:"Also, zwei Patienten zur Übergabe. Zimmer vier, Frau Albers, zweiundachtzig, aufgenommen mit Exsikkose und Harnwegsinfekt. Sie bekommt Ceftriaxon, die Kreatininwerte sind heute schon besser. Heute Nacht war sie zeitweise verwirrt, bitte auf ein Delir achten und möglichst keine Benzodiazepine."},{who:"Dr. Ismail",text:"Verstanden. Und Zimmer sieben?"},{who:"Dr. Neumann",text:"Herr Brandt, einundsechzig, Pneumonie rechts basal. Er ist seit gestern fieberfrei, die Sauerstoffgabe kann reduziert werden, Ziel ist eine Sättigung über zweiundneunzig Prozent. Morgen früh bitte ein Kontroll-CRP abnehmen. Wenn das fällt, kann er auf orale Antibiose umgestellt werden."}],
   questions:[{q:"Frau Albers wurde mit einer Pneumonie aufgenommen.",kind:"rf",answer:"f"},{q:"Worauf soll bei Frau Albers besonders geachtet werden?",kind:"mc",opts:["Auf Blutungen.","Auf ein Delir.","Auf Herzrhythmusstörungen."],answer:1},{q:"Was soll bei Herrn Brandt morgen früh passieren?",kind:"mc",opts:["Ein Röntgen-Thorax.","Eine CRP-Kontrolle.","Eine Bronchoskopie."],answer:1},{q:"Herr Brandt kann bei fallendem CRP auf Tabletten umgestellt werden.",kind:"rf",answer:"r"}]}]},
 {id:"mL1",m:"Lesen",t:"Teil 1",title:"Klinische Standardanweisung",min:20,type:"mc",spec:"Auszug aus einer klinikinternen SOP oder Leitlinie (ca. 300 Wörter); 4 Fragen mit 3 Optionen.",
  seed:[{title:"SOP: Sepsis-Screening in der Notaufnahme",instructions:"Lesen Sie den Auszug aus der Standardanweisung und wählen Sie die richtige Antwort.",
   text:"1. Ziel: Frühzeitiges Erkennen einer Sepsis bei allen Patientinnen und Patienten mit Verdacht auf Infektion.\n2. Screening: Bei Verdacht auf Infektion wird bei der Ersteinschätzung der qSOFA-Score erhoben (Atemfrequenz ≥ 22/min, systolischer Blutdruck ≤ 100 mmHg, veränderter Bewusstseinszustand). Ab zwei Punkten ist umgehend die diensthabende Ärztin oder der diensthabende Arzt zu informieren.\n3. Diagnostik: Vor Beginn der Antibiotikatherapie sind mindestens zwei Blutkulturpaare abzunehmen. Ein Laktat > 2 mmol/l ist zu dokumentieren und zu kontrollieren.\n4. Therapie: Die kalkulierte Antibiotikatherapie soll bei septischem Schock innerhalb einer Stunde beginnen. Eine Verzögerung zugunsten weiterer Diagnostik ist zu vermeiden.",
   questions:[{q:"Wann muss der Arzt sofort informiert werden?",opts:["Bei einem qSOFA von mindestens zwei Punkten.","Bei jedem Fieber.","Erst wenn das Laktat erhöht ist."],answer:0},{q:"Was muss vor der ersten Antibiotikagabe geschehen?",opts:["Eine Computertomographie.","Die Abnahme von Blutkulturen.","Eine Urinkultur nach 24 Stunden."],answer:1},{q:"Was gilt für die Antibiotikatherapie beim septischen Schock?",opts:["Sie beginnt nach Eingang aller Befunde.","Sie soll innerhalb einer Stunde beginnen.","Sie wird nur oral gegeben."],answer:1}]}]},
 {id:"mB1",m:"Lesen",t:"Sprachbausteine",title:"Arztbrief mit Lücken",min:15,type:"gap",spec:"Ausschnitt aus einem Arztbrief (ca. 150 Wörter) mit 6 Lücken [1]–[6]; mode \"mc\"; je 3 Optionen (Präpositionen, Passiv, Nominalstil, Konnektoren).",
  seed:[{title:"Epikrise",instructions:"Welches Wort passt?",mode:"mc",
   text:"Wir berichten über Herrn K., der sich [1] 12.10. bis 15.10.2026 in unserer stationären Behandlung befand. Die Aufnahme [2] notfallmäßig bei seit zwei Tagen bestehender Dyspnoe. Laborchemisch zeigte sich ein erhöhtes CRP [3] normwertigen Leukozyten. Radiologisch [4] ein Infiltrat im rechten Unterlappen nachgewiesen. Unter antibiotischer Therapie kam es zu einer raschen [5] des Allgemeinzustands. Wir entlassen den Patienten in gutem Zustand und bitten [6] eine Kontrolle der Entzündungswerte in einer Woche.",
   gaps:[{n:1,opts:["vom","am","seit"],answer:0},{n:2,opts:["erfolgte","machte","führte"],answer:0},{n:3,opts:["bei","mit","für"],answer:0},{n:4,opts:["hat","wurde","ist"],answer:1},{n:5,opts:["Besserung","Bessern","besser"],answer:0},{n:6,opts:["um","für","auf"],answer:0}]}]},
 {id:"mS1",m:"Schreiben",t:"Teil 1",title:"Arztbrief aus Stichpunkten",min:40,type:"write",spec:"Stichpunktartige Patientendaten; daraus einen Arztbrief-Abschnitt (Anamnese, Befund, Verlauf, Procedere) von ca. 150–200 Wörtern formulieren.",
  seed:[{title:"Entlassbrief: Nierenkolik",situation:"Formulieren Sie aus den Stichpunkten einen Arztbrief an den Hausarzt (Anamnese, Befunde, Verlauf, Empfehlung).\n\n• Herr M., 44 J.\n• Aufnahme 20.10.: seit 4 h kolikartige Flankenschmerzen li., Ausstrahlung Leiste, Übelkeit\n• Urinstatus: Mikrohämaturie; Krea normal\n• Sono: Harnstau Grad I li.; CT: 4-mm-Konkrement distaler Ureter li.\n• Therapie: Metamizol i.v., Tamsulosin, Flüssigkeit\n• 22.10.: Steinabgang, beschwerdefrei\n• Empfehlung: Trinkmenge > 2,5 l/Tag, urologische Kontrolle in 4 Wochen",points:["Diagnose an den Anfang","Anamnese und Befunde in Nominalstil","Verlauf und Therapie","Empfehlung an den Hausarzt"],words:180,minutes:40,register:"Arztbrief: fachsprachlich, Nominalstil, Präteritum/Passiv",
   model:"Diagnose: Ureterolithiasis links (4 mm, distaler Ureter) mit Harnstau Grad I, Spontanabgang\n\nSehr geehrte Frau Kollegin, sehr geehrter Herr Kollege,\n\nwir berichten über Herrn M., 44 Jahre, der sich vom 20.10. bis 22.10.2026 in unserer stationären Behandlung befand. Die Aufnahme erfolgte notfallmäßig wegen seit vier Stunden bestehender kolikartiger Flankenschmerzen links mit Ausstrahlung in die Leiste und Übelkeit. Im Urinstatus zeigte sich eine Mikrohämaturie bei normwertigem Kreatinin. Sonographisch fand sich ein Harnstau Grad I links; in der CT wurde ein 4 mm großes Konkrement im distalen Ureter links nachgewiesen.\n\nUnter Analgesie mit Metamizol i.v., Tamsulosin und Flüssigkeitsgabe kam es am 22.10. zum Steinabgang; der Patient war anschließend beschwerdefrei.\n\nWir empfehlen eine Trinkmenge von über 2,5 Litern täglich sowie eine urologische Kontrolle in vier Wochen.\n\nMit freundlichen kollegialen Grüßen"}]},
 {id:"mS2",m:"Schreiben",t:"Teil 2",title:"E-Mail an einen Kollegen",min:20,type:"write",spec:"Berufliche E-Mail an eine Kollegin/einen Kollegen (Rückfrage, Bitte um Übernahme, Konsil), ca. 100 Wörter, mit 3–4 Inhaltspunkten.",
  seed:[{title:"Bitte um Übernahme",situation:"Sie möchten eine Patientin aus der Notaufnahme auf die Kardiologie verlegen. Schreiben Sie dem diensthabenden Kardiologen, Herrn Dr. Becker, eine E-Mail.",points:["Kurze Patientenvorstellung (Alter, Diagnose)","Aktueller Zustand und bisherige Therapie","Bitte um Übernahme und Zeitpunkt","Ihre Erreichbarkeit"],words:110,minutes:20,register:"kollegial-formell, knapp",
   model:"Betreff: Bitte um Übernahme – Frau S., 71 J., NSTEMI\n\nSehr geehrter Herr Kollege Becker,\n\nich möchte Sie um die Übernahme von Frau S., 71 Jahre, bitten. Sie stellte sich heute mit retrosternalen Schmerzen vor; das hs-Troponin war dynamisch erhöht, im EKG zeigten sich keine ST-Hebungen. Wir haben ASS, Heparin und eine Schmerztherapie begonnen; aktuell ist sie beschwerdefrei und hämodynamisch stabil.\n\nWäre eine Übernahme auf Ihre Station heute Nachmittag möglich? Für Rückfragen bin ich unter der Durchwahl 4512 erreichbar.\n\nMit freundlichen kollegialen Grüßen\nAmron Ismail, ZNA"}]},
 {id:"mM1",m:"Sprechen",t:"Teil 1",title:"Arzt-Patienten-Gespräch",min:15,prep:10,type:"speak",sim:"pat",spec:"",seed:[{title:"Anamnesegespräch",task:"Führen Sie mit dem Patienten ein vollständiges Anamnesegespräch und erklären Sie ihm das weitere Vorgehen in Laiensprache.",points:["Begrüßung und Vorstellung","Leitsymptom (SOCRATES)","Vorerkrankungen, Medikamente, Allergien, Noxen","Sozial- und Familienanamnese","Zusammenfassung und nächste Schritte"],prep:10,minutes:15,role:"Patient"}]},
 {id:"mM2",m:"Sprechen",t:"Teil 2",title:"Arzt-Arzt-Gespräch",min:15,prep:5,type:"speak",sim:"oa",spec:"",seed:[{title:"Fallvorstellung",task:"Stellen Sie den Fall Ihrer Oberärztin vor und beantworten Sie ihre Rückfragen zu Differentialdiagnosen, Diagnostik und Therapie.",points:["Strukturierte Vorstellung","Verdachtsdiagnose und Differentialdiagnosen","Diagnostik mit Begründung","Therapie und Procedere"],prep:5,minutes:15,role:"Oberärztin"}]},
 {id:"mM3",m:"Sprechen",t:"Teil 3",title:"Angehörigengespräch",min:15,prep:5,type:"speak",sim:"rel",spec:"",seed:[{title:"Gespräch mit der Tochter",task:"Die Tochter eines Patienten möchte wissen, wie es ihrem Vater geht. Erklären Sie Diagnose, Behandlung und Prognose verständlich und einfühlsam.",points:["Schweigepflicht klären (Einverständnis des Patienten)","Diagnose verständlich erklären","Fragen und Sorgen aufnehmen","Nächste Schritte und Ansprechpartner"],prep:5,minutes:15,role:"Tochter"}]}
 ]}
};
// relatives conversation counterpart for roleplay
SIMS.push({id:"rel",name:"Angehörigengespräch",who:"Tochter",k:"klinik",make:c=>`Du bist die erwachsene Tochter von ${c.name} (${c.age} Jahre), der/die heute mit „${c.cc}“ in die Notaufnahme gekommen ist. Erwartete Diagnose: ${c.dx}. Du bist besorgt, stellst viele Fragen (Was hat mein Vater/meine Mutter? Ist das gefährlich? Wie lange bleibt er/sie? Kann ich zu ihm/ihr?), unterbrichst manchmal und reagierst emotional, wenn der Arzt Fachbegriffe benutzt. Wenn der Arzt nach dem Einverständnis des Patienten zur Auskunft fragt, sag, dass er/sie einverstanden ist. Laiensprache, Sie-Form. Bleib in der Rolle, nur Deutsch. Der Arzt beginnt.`});

// ================= LITERATURE LADDER, POEMS, KINO =================
// Intros are original short retellings in graded German. Only public-domain poems are quoted in full.
const LADDER=[
{id:"L1",a:"Brüder Grimm",t:"Kinder- und Hausmärchen",y:1812,lvl:"A2–B1",form:"Märchen",pd:1,intro:"Die Brüder Jacob und Wilhelm Grimm sammelten Märchen, die man sich in Deutschland erzählte: Rotkäppchen, Hänsel und Gretel, Schneewittchen. Die Sätze sind kurz, vieles wiederholt sich, und alles steht im Präteritum.",why:"The best first real German: short sentences, repetition, Präteritum on every line.",hard:"Old forms like „sprach“, „ward“, „ging hin“.",words:[["es war einmal","once upon a time"],["die Stiefmutter","stepmother"],["die Hexe","witch"],["sprach","spoke (sprechen, Präteritum)"],["verwünschen","to put a curse on"]]},
{id:"L2",a:"Johann Peter Hebel",t:"Unverhofftes Wiedersehen",y:1811,lvl:"B1",form:"Kalendergeschichte",pd:1,intro:"Ein junger Bergmann verunglückt kurz vor seiner Hochzeit in einem Bergwerk. Fünfzig Jahre später findet man ihn, unverändert, und nur seine alte Braut erkennt ihn wieder.",why:"Two pages with a stunning time-lapse paragraph; Kafka loved Hebel.",hard:"A long list of historical events squeezed into one paragraph.",words:[["der Bergmann","miner"],["die Braut","bride"],["verunglücken","to have a fatal accident"],["unverhofft","unexpected"]]},
{id:"L3",a:"Franz Kafka",t:"Vor dem Gesetz",y:1915,lvl:"B1–B2",form:"Parabel",pd:1,intro:"Ein Mann vom Land möchte in das Gesetz eintreten, aber ein Türhüter lässt ihn nicht hinein. Der Mann wartet sein ganzes Leben vor der offenen Tür.",why:"One page, simple words, endless interpretation.",hard:"The meaning, not the language.",words:[["der Türhüter","doorkeeper"],["der Eingang","entrance"],["bestechen","to bribe"],["einlassen","to let in"]]},
{id:"L4",a:"Heinrich Böll",t:"Anekdote zur Senkung der Arbeitsmoral",y:1963,lvl:"B1",form:"Kurzgeschichte",pd:0,intro:"Ein Tourist trifft einen Fischer, der in der Sonne döst, und erklärt ihm, wie er reich werden könnte. Die Antwort des Fischers ist überraschend.",why:"Five pages of gentle irony; a German classroom favourite.",hard:"Easy; enjoy the dialogue.",words:[["dösen","to doze"],["der Fang","catch"],["die Arbeitsmoral","work ethic"]]},
{id:"L5",a:"Friedrich Dürrenmatt",t:"Der Richter und sein Henker",y:1950,lvl:"B1–B2",form:"Kriminalroman",pd:0,intro:"Ein Polizist wird ermordet aufgefunden. Kommissär Bärlach, alt und schwer krank, ermittelt, und er kennt den Täter vielleicht schon sehr lange.",why:"Short detective novel, clear language, a twist you will remember.",hard:"Swiss words (Kommissär).",words:[["der Kommissär","inspector (Swiss)"],["ermitteln","to investigate"],["der Täter","perpetrator"],["die Wette","bet"]]},
{id:"L6",a:"Wolfgang Herrndorf",t:"Tschick",y:2010,lvl:"B1–B2",form:"Jugendroman",pd:0,intro:"Zwei vierzehnjährige Außenseiter aus Berlin klauen in den Sommerferien einen alten Lada und fahren ohne Karte los, irgendwohin in den Osten.",why:"Funny, fast, contemporary; you will hear how teenagers really talk.",hard:"Youth slang.",words:[["klauen","to nick (steal)"],["der Außenseiter","outsider"],["krass","extreme, wild (slang)"]]},
{id:"L7",a:"Franz Kafka",t:"Die Verwandlung",y:1915,lvl:"B2",form:"Erzählung",pd:1,intro:"Gregor Samsa wacht eines Morgens auf und ist ein riesiges Insekt. Seine größte Sorge: dass er zu spät zur Arbeit kommt.",why:"Plain, precise prose about an absurd event; about 70 pages.",hard:"Long sentences in the middle part; the family drama between the lines.",words:[["das Ungeziefer","vermin"],["der Prokurist","chief clerk"],["sich verwandeln","to transform"],["die Last","burden"]]},
{id:"L8",a:"Stefan Zweig",t:"Schachnovelle",y:1942,lvl:"B2",form:"Novelle",pd:1,med:1,intro:"Auf einem Schiff nach Buenos Aires spielt ein unbekannter Passagier gegen den Schachweltmeister. Er hat Schach in Einzelhaft gelernt, nur in seinem Kopf, und dabei fast den Verstand verloren.",why:"Gripping, 80 pages; a precise picture of a mind under isolation.",hard:"Long, elegant periods.",words:[["die Einzelhaft","solitary confinement"],["der Weltmeister","world champion"],["die Partie","game (of chess)"],["der Nervenzusammenbruch","nervous breakdown"]]},
{id:"L9",a:"Georg Büchner",t:"Woyzeck",y:1837,lvl:"B2–C1",form:"Drama (Fragment)",pd:1,med:1,intro:"Der Soldat Woyzeck ist arm. Um Geld zu verdienen, macht er bei einem Arzt ein Experiment mit: Er darf nur noch Erbsen essen. Langsam verliert er den Halt.",why:"Büchner was a physician and scientist; the Doktor in this play is a warning to every doctor.",hard:"Fragments, dialect; read an edition with notes.",words:[["die Erbse","pea"],["der Hauptmann","captain"],["der Wahnsinn","madness"],["die Eifersucht","jealousy"]]},
{id:"L10",a:"Arthur Schnitzler",t:"Leutnant Gustl",y:1900,lvl:"B2–C1",form:"Novelle",pd:1,med:1,intro:"Ein junger Offizier fühlt sich nach einem Konzert beleidigt. Eine Nacht lang hören wir nur seine Gedanken, wie er durch Wien läuft.",why:"The first inner-monologue story in German, written by a Viennese doctor.",hard:"Stream of consciousness, Viennese words.",words:[["beleidigen","to insult"],["die Ehre","honour"],["der Morgen graut","dawn breaks"]]},
{id:"L11",a:"Erich Maria Remarque",t:"Im Westen nichts Neues",y:1929,lvl:"B2",form:"Roman",pd:0,med:1,intro:"Paul Bäumer ist neunzehn, als er mit seinen Klassenkameraden an die Front des Ersten Weltkriegs geht. Er erzählt, was der Krieg aus ihnen macht, auch im Lazarett.",why:"Clear, direct prose; field hospitals described with a medic's eye.",hard:"Military vocabulary.",words:[["das Lazarett","military hospital"],["der Graben","trench"],["die Granate","shell"],["der Kamerad","comrade"]]},
{id:"L12",a:"Bernhard Schlink",t:"Der Vorleser",y:1995,lvl:"B2",form:"Roman",pd:0,intro:"Der fünfzehnjährige Michael verliebt sich in die ältere Hanna. Jahre später sieht er sie wieder, als Angeklagte in einem Prozess über Verbrechen in einem Konzentrationslager.",why:"Short chapters, modern prose, a central post-war question: guilt.",hard:"Moral complexity, legal vocabulary.",words:[["vorlesen","to read aloud"],["die Angeklagte","defendant (f.)"],["die Schuld","guilt"]]},
{id:"L13",a:"Patrick Süskind",t:"Das Parfum",y:1985,lvl:"B2–C1",form:"Roman",pd:0,intro:"Jean-Baptiste Grenouille hat keinen eigenen Geruch, aber die feinste Nase der Welt. Er will den vollkommenen Duft erschaffen, um jeden Preis.",why:"Rich sensory vocabulary; a page-turner.",hard:"Long descriptive sentences.",words:[["der Geruch","smell"],["der Duft","scent"],["riechen","to smell"]]},
{id:"L14",a:"Theodor Storm",t:"Der Schimmelreiter",y:1888,lvl:"B2–C1",form:"Novelle",pd:1,intro:"Hauke Haien baut an der Nordsee einen neuen Deich. Die Dorfbewohner misstrauen ihm und seinem weißen Pferd, bis die große Sturmflut kommt.",why:"North German atmosphere, frame story, a school classic.",hard:"North Frisian words and a frame narrative.",words:[["der Deich","dike"],["der Schimmel","white horse"],["die Sturmflut","storm surge"]]},
{id:"L15",a:"Friedrich Dürrenmatt",t:"Die Physiker",y:1962,lvl:"B2–C1",form:"Komödie",pd:0,med:1,intro:"In einem Sanatorium leben drei Physiker, die sich für Newton, Einstein und einen Boten des Königs Salomo halten. Doch wer ist hier wirklich verrückt?",why:"Short, witty play; perfect to read aloud with a partner.",hard:"Irony; scientific ethics.",words:[["die Irrenanstalt","asylum (old)"],["die Oberschwester","head nurse"],["die Verantwortung","responsibility"]]},
{id:"L16",a:"Johann Wolfgang von Goethe",t:"Die Leiden des jungen Werthers",y:1774,lvl:"C1",form:"Briefroman",pd:1,intro:"In Briefen erzählt der junge Werther von seiner Liebe zu Lotte, die mit einem anderen Mann verlobt ist. Die Geschichte endet tragisch.",why:"Goethe's first bestseller; reading it after Faust closes the circle.",hard:"18th-century spelling and emotional syntax.",words:[["die Leidenschaft","passion"],["verlobt","engaged"],["die Leiden","sorrows"]]},
{id:"L17",a:"Theodor Fontane",t:"Effi Briest",y:1895,lvl:"C1",form:"Roman",pd:1,intro:"Mit siebzehn heiratet Effi einen viel älteren Baron. In einem kleinen Ort an der Ostsee langweilt sie sich, und ein kurzer Fehltritt verfolgt sie ein Leben lang.",why:"The great Prussian society novel; dialogue-rich.",hard:"Indirect irony; 19th-century conventions.",words:[["der Fehltritt","lapse, indiscretion"],["das Duell","duel"],["die Gesellschaft","society"]]},
{id:"L18",a:"Max Frisch",t:"Homo faber",y:1957,lvl:"C1",form:"Roman",pd:0,med:1,intro:"Der Ingenieur Walter Faber glaubt an Technik und Statistik, nicht an Zufall oder Schicksal. Eine Reise zeigt ihm, wie sehr er sich irrt; am Ende steht eine Operation.",why:"Swiss modernism; a report-style narrator who is a scientist like you.",hard:"Fragmented report style.",words:[["der Zufall","chance"],["das Schicksal","fate"],["die Wahrscheinlichkeit","probability"]]},
{id:"L19",a:"Daniel Kehlmann",t:"Die Vermessung der Welt",y:2005,lvl:"C1",form:"Roman",pd:0,intro:"Ein humorvoller Roman über zwei Genies: den Forschungsreisenden Alexander von Humboldt und den Mathematiker Carl Friedrich Gauß.",why:"Witty, recent, historical; a bestseller.",hard:"Almost all dialogue in indirect speech (Konjunktiv I): the perfect grammar workout.",words:[["vermessen","to survey, measure"],["der Forschungsreisende","explorer"],["die indirekte Rede","reported speech"]]},
{id:"L20",a:"Thomas Mann",t:"Buddenbrooks",y:1901,lvl:"C1–C2",form:"Roman",pd:1,intro:"Über vier Generationen erzählt der Roman Aufstieg und Verfall einer Lübecker Kaufmannsfamilie.",why:"Nobel-prize novel; family saga, gemeinfrei seit 2026.",hard:"Long, ironic sentences; Low German phrases.",words:[["der Verfall","decline"],["der Kaufmann","merchant"],["die Firma","the family firm"]]},
{id:"L21",a:"Thomas Mann",t:"Der Zauberberg",y:1924,lvl:"C2",form:"Roman",pd:1,med:1,intro:"Hans Castorp besucht für drei Wochen seinen Cousin in einem Lungensanatorium in Davos und bleibt sieben Jahre. Ein Roman über Zeit, Krankheit und Medizin.",why:"The great German novel of medicine: TB sanatorium, X-rays, fever curves, doctors.",hard:"About 1,000 pages; read alongside an audiobook.",words:[["das Sanatorium","sanatorium"],["die Liegekur","rest cure"],["der Hofrat","privy councillor (the chief doctor)"],["die Fieberkurve","fever chart"]]},
{id:"L22",a:"Heinrich von Kleist",t:"Das Erdbeben in Chili",y:1807,lvl:"C2",form:"Novelle",pd:1,intro:"Während eines Erdbebens in Santiago werden zwei Liebende gerettet, die gerade hingerichtet werden sollten. Doch die Rettung hält nicht lange.",why:"Twenty pages; famous for some of the longest sentences in German.",hard:"The ultimate test of the Satzklammer.",words:[["das Erdbeben","earthquake"],["hinrichten","to execute"],["die Rettung","rescue"]]},
{id:"L23",a:"Johann Wolfgang von Goethe",t:"Faust. Der Tragödie zweiter Teil",y:1832,lvl:"C2",form:"Drama",pd:1,intro:"Faust reist durch den Kaiserhof, durch antike Mythen und durch die Politik, bis zu seinem Tod und seiner Rettung. Freier, seltsamer und schwerer als der erste Teil.",why:"The summit. Read with a commentary.",hard:"Everything; take your time.",words:[["die Erlösung","redemption"],["das Ewig-Weibliche","the eternal feminine"]]}
];
const READ_TIPS=`<ul><li><b>Lies mit Hörbuch mit.</b> Ohr und Auge zusammen halten dich im Satz und zeigen, wo die Betonung liegt. Für gemeinfreie Texte gibt es kostenlose Hörbücher (z. B. LibriVox).</li><li><b>Die 95-Prozent-Regel.</b> Wenn du mehr als ein unbekanntes Wort pro Zeile hast, nimm ein leichteres Buch oder lies zuerst eine Zusammenfassung.</li><li><b>Nicht jedes Wort nachschlagen.</b> Markieren, raten, weiterlesen; erst nachschlagen, wenn ein Wort dreimal vorkommt.</li><li><b>Figurenliste und Lesetagebuch.</b> Pro Kapitel ein deutscher Satz: Was ist passiert? Unten kann Claude ihn korrigieren.</li><li><b>Das erste Kapitel zweimal lesen.</b> Danach kennst du die Stimme des Autors, und der Rest wird leichter.</li><li><b>Gemeinfreie Originale</b> findest du bei Projekt Gutenberg-DE und Zeno.org, mit Erläuterungen in Reclam-Ausgaben.</li></ul>`;
// Public-domain poems (all published before 1929), with plain English line renderings
const POEMS=[
{id:"p1",week:6,title:"Wandrers Nachtlied (Ein Gleiches)",scene:"Goethe, 1780",speaker:"Gedicht",note:"Goethe wrote these eight lines on the wall of a hut on the Kickelhahn. Notice how the lines get shorter and the sounds get softer: the poem itself falls asleep. „Balde“ is the old form of bald.",
 lines:[["Über allen Gipfeln","Over all the peaks"],["Ist Ruh,","is rest,"],["In allen Wipfeln","in all the treetops"],["Spürest du","you feel"],["Kaum einen Hauch;","hardly a breath;"],["Die Vögelein schweigen im Walde.","the little birds are silent in the forest."],["Warte nur, balde","Just wait, soon"],["Ruhest du auch.","you too will rest."]],
 gloss:{Gipfeln:"peaks",Ruh:"rest (Ruhe)",Wipfeln:"treetops",Spürest:"(you) feel",Hauch:"breath",Vögelein:"little birds",schweigen:"are silent",Walde:"forest (old dative -e)",balde:"soon (bald)",Ruhest:"(you) rest"}},
{id:"p2",week:9,title:"Erlkönig",scene:"Goethe, 1782",speaker:"Ballade",note:"A ballad with three voices: narrator, father, son, and the Erlkönig's seductive quotes. Read as a doctor: a feverish child, a father who explains everything rationally. Each stanza rhymes in pairs (AABB).",
 lines:[["Wer reitet so spät durch Nacht und Wind?","Who rides so late through night and wind?"],["Es ist der Vater mit seinem Kind;","It is the father with his child;"],["Er hat den Knaben wohl in dem Arm,","he holds the boy safe in his arm,"],["Er faßt ihn sicher, er hält ihn warm.","he grips him securely, he keeps him warm."],["— —",""],["Mein Sohn, was birgst du so bang dein Gesicht? –","My son, why do you hide your face so fearfully?"],["Siehst, Vater, du den Erlkönig nicht?","Father, don't you see the Erl-King?"],["Den Erlenkönig mit Kron und Schweif? –","The Erl-King with crown and train?"],["Mein Sohn, es ist ein Nebelstreif. –","My son, it is a streak of mist."],["— —",""],["»Du liebes Kind, komm, geh mit mir!","'You dear child, come, go with me!"],["Gar schöne Spiele spiel ich mit dir;","I'll play such lovely games with you;"],["Manch bunte Blumen sind an dem Strand,","many bright flowers grow on the shore,"],["Meine Mutter hat manch gülden Gewand.«","my mother has many a golden robe.'"],["— —",""],["Mein Vater, mein Vater, und hörest du nicht,","My father, my father, and don't you hear"],["Was Erlenkönig mir leise verspricht? –","what the Erl-King quietly promises me?"],["Sei ruhig, bleibe ruhig, mein Kind;","Be calm, stay calm, my child;"],["In dürren Blättern säuselt der Wind. –","the wind is rustling in dry leaves."],["— —",""],["»Willst, feiner Knabe, du mit mir gehn?","'Fine boy, will you come with me?"],["Meine Töchter sollen dich warten schön;","My daughters shall wait on you nicely;"],["Meine Töchter führen den nächtlichen Reihn,","my daughters lead the nightly dance,"],["Und wiegen und tanzen und singen dich ein.«","and will rock and dance and sing you to sleep.'"],["— —",""],["Mein Vater, mein Vater, und siehst du nicht dort","My father, my father, and don't you see there"],["Erlkönigs Töchter am düstern Ort? –","the Erl-King's daughters in that gloomy place?"],["Mein Sohn, mein Sohn, ich seh es genau:","My son, my son, I see it clearly:"],["Es scheinen die alten Weiden so grau. –","the old willows shimmer so grey."],["— —",""],["»Ich liebe dich, mich reizt deine schöne Gestalt;","'I love you, your fair form charms me;"],["Und bist du nicht willig, so brauch ich Gewalt.«","and if you're not willing, I'll use force.'"],["Mein Vater, mein Vater, jetzt faßt er mich an!","My father, my father, now he's seizing me!"],["Erlkönig hat mir ein Leids getan! –","The Erl-King has hurt me!"],["— —",""],["Dem Vater grauset's, er reitet geschwind,","The father shudders, he rides swiftly,"],["Er hält in Armen das ächzende Kind,","he holds the moaning child in his arms,"],["Erreicht den Hof mit Mühe und Not;","reaches the farmyard with great difficulty;"],["In seinen Armen das Kind war tot.","in his arms the child was dead."]],
 gloss:{reitet:"rides",Knaben:"boy (acc.)",faßt:"grips (fasst)",birgst:"hide (bergen)",bang:"fearfully",Schweif:"train, tail",Nebelstreif:"streak of mist",gülden:"golden (old)",Gewand:"robe",dürren:"dry",säuselt:"rustles",warten:"wait on, look after",Reihn:"round dance (Reigen)",wiegen:"rock (a cradle)",düstern:"gloomy",Weiden:"willows",reizt:"attracts, charms",Gewalt:"force",Leids:"harm (Leid)",grauset:"shudders",geschwind:"swiftly",ächzende:"groaning",Mühe:"effort"}},
{id:"p3",week:12,title:"Die Lore-Ley",scene:"Heinrich Heine, 1824",speaker:"Gedicht",note:"Heine's poem became a folk song; every German knows the first line. The Rhine rock near St. Goarshausen still carries the name. Notice the almost childlike syntax, and the irony of the last stanza.",
 lines:[["Ich weiß nicht, was soll es bedeuten,","I don't know what it should mean"],["Daß ich so traurig bin;","that I am so sad;"],["Ein Märchen aus alten Zeiten,","a fairy tale from olden times"],["Das kommt mir nicht aus dem Sinn.","will not leave my mind."],["— —",""],["Die Luft ist kühl und es dunkelt,","The air is cool and it grows dark,"],["Und ruhig fließt der Rhein;","and calmly flows the Rhine;"],["Der Gipfel des Berges funkelt","the summit of the mountain sparkles"],["Im Abendsonnenschein.","in the evening sun."],["— —",""],["Die schönste Jungfrau sitzet","The most beautiful maiden sits"],["Dort oben wunderbar,","up there, wondrously,"],["Ihr goldnes Geschmeide blitzet,","her golden jewellery flashes,"],["Sie kämmt ihr goldenes Haar.","she combs her golden hair."],["— —",""],["Sie kämmt es mit goldenem Kamme","She combs it with a golden comb"],["Und singt ein Lied dabei;","and sings a song meanwhile;"],["Das hat eine wundersame,","it has a wondrous,"],["Gewaltige Melodei.","powerful melody."],["— —",""],["Den Schiffer im kleinen Schiffe","The boatman in his little boat"],["Ergreift es mit wildem Weh;","is seized with wild longing;"],["Er schaut nicht die Felsenriffe,","he does not see the rocky reefs,"],["Er schaut nur hinauf in die Höh.","he only looks up on high."],["— —",""],["Ich glaube, die Wellen verschlingen","I believe the waves swallow"],["Am Ende Schiffer und Kahn;","boatman and boat in the end;"],["Und das hat mit ihrem Singen","and that, with her singing,"],["Die Lore-Ley getan.","is what the Lorelei has done."]],
 gloss:{bedeuten:"mean",Sinn:"mind",dunkelt:"grows dark",funkelt:"sparkles",Jungfrau:"maiden",Geschmeide:"jewellery",blitzet:"flashes",kämmt:"combs",Kamme:"comb (dat. -e)",wundersame:"wondrous",Melodei:"melody (old)",Schiffer:"boatman",Ergreift:"seizes",Weh:"pain, longing",Felsenriffe:"rocky reefs",verschlingen:"swallow",Kahn:"small boat"}},
{id:"p4",week:15,title:"Mondnacht",scene:"Joseph von Eichendorff, 1837",speaker:"Gedicht",note:"Pure Romanticism in twelve lines. The first stanza is one long Konjunktiv II comparison: „Es war, als hätt…“ (as if). Robert Schumann set it to music.",
 lines:[["Es war, als hätt der Himmel","It was as if the sky"],["Die Erde still geküßt,","had quietly kissed the earth,"],["Daß sie im Blütenschimmer","so that in the shimmer of blossoms"],["Von ihm nun träumen müßt.","she now had to dream of him."],["— —",""],["Die Luft ging durch die Felder,","The breeze went through the fields,"],["Die Ähren wogten sacht,","the ears of corn swayed gently,"],["Es rauschten leis die Wälder,","the forests rustled softly,"],["So sternklar war die Nacht.","so starry-clear was the night."],["— —",""],["Und meine Seele spannte","And my soul spread"],["Weit ihre Flügel aus,","its wings out wide,"],["Flog durch die stillen Lande,","flew through the silent lands,"],["Als flöge sie nach Haus.","as if it were flying home."]],
 gloss:{hätt:"had (hätte, Konj. II)",geküßt:"kissed (geküsst)",Blütenschimmer:"shimmer of blossoms",müßt:"had to (müsste)",Ähren:"ears of grain",wogten:"swayed",sacht:"gently",rauschten:"rustled",sternklar:"starry and clear",spannte:"spread",Flügel:"wings",Lande:"lands (poetic)",flöge:"would fly (Konj. II)"}},
{id:"p5",week:18,title:"Der Panther",scene:"Rainer Maria Rilke, 1902",speaker:"Gedicht",note:"Written after watching a panther in the Jardin des Plantes in Paris. Three stanzas: the gaze, the movement, the image that enters and dies in the heart. Notice the participle chains and the dash before the last line.",
 lines:[["Sein Blick ist vom Vorübergehn der Stäbe","His gaze, from the passing of the bars,"],["so müd geworden, daß er nichts mehr hält.","has grown so weary that it holds nothing anymore."],["Ihm ist, als ob es tausend Stäbe gäbe","To him it seems there are a thousand bars"],["und hinter tausend Stäben keine Welt.","and behind a thousand bars no world."],["— —",""],["Der weiche Gang geschmeidig starker Schritte,","The soft gait of supple, powerful strides,"],["der sich im allerkleinsten Kreise dreht,","turning in the very smallest circle,"],["ist wie ein Tanz von Kraft um eine Mitte,","is like a dance of strength around a centre"],["in der betäubt ein großer Wille steht.","in which a great will stands stunned."],["— —",""],["Nur manchmal schiebt der Vorhang der Pupille","Only sometimes the curtain of the pupil"],["sich lautlos auf –. Dann geht ein Bild hinein,","silently slides open –. Then an image enters,"],["geht durch der Glieder angespannte Stille –","goes through the tensed stillness of the limbs –"],["und hört im Herzen auf zu sein.","and ceases to be in the heart."]],
 gloss:{Blick:"gaze",Vorübergehn:"passing by",Stäbe:"bars",müd:"tired",gäbe:"there were (Konj. II)",Gang:"gait",geschmeidig:"supple",Schritte:"steps",betäubt:"stunned, numbed",Vorhang:"curtain",Pupille:"pupil",lautlos:"silently",Glieder:"limbs",angespannte:"tensed"}},
{id:"p6",week:21,title:"Herbsttag",scene:"Rainer Maria Rilke, 1902",speaker:"Gedicht",note:"A prayer-like poem in imperatives (Leg, laß, Befiehl, gib, dränge, jage), then a turn: the last stanza about loneliness. Probably the most quoted German autumn poem.",
 lines:[["Herr: es ist Zeit. Der Sommer war sehr groß.","Lord: it is time. The summer was immense."],["Leg deinen Schatten auf die Sonnenuhren,","Lay your shadow on the sundials,"],["und auf den Fluren laß die Winde los.","and let the winds loose on the meadows."],["— —",""],["Befiehl den letzten Früchten voll zu sein;","Command the last fruits to be full;"],["gib ihnen noch zwei südlichere Tage,","give them two more southern days,"],["dränge sie zur Vollendung hin, und jage","press them to completion, and chase"],["die letzte Süße in den schweren Wein.","the last sweetness into the heavy wine."],["— —",""],["Wer jetzt kein Haus hat, baut sich keines mehr.","Whoever has no house now will build none."],["Wer jetzt allein ist, wird es lange bleiben,","Whoever is alone now will stay so a long time,"],["wird wachen, lesen, lange Briefe schreiben","will stay awake, read, write long letters"],["und wird in den Alleen hin und her","and will wander restlessly up and down"],["unruhig wandern, wenn die Blätter treiben.","the avenues, when the leaves drift."]],
 gloss:{Schatten:"shadow",Sonnenuhren:"sundials",Fluren:"meadows, fields",Befiehl:"command (imperative)",Früchten:"fruits (dat.)",dränge:"press, urge",Vollendung:"completion",jage:"chase",Süße:"sweetness",Alleen:"tree-lined avenues",unruhig:"restless",treiben:"drift"}}
];
POEMS.forEach(p=>{p.lines=p.lines.map(l=>l[0]==="— —"?["— —",""]:l)});
// Kino: films, series and learner channels. Synopses are original one-liners.
const KINO=[
{id:"k1",t:"Nicos Weg (DW)",y:"seit 2018",kind:"Lernserie",lvl:"A1–B1",tags:["anfaenger"],de:"Nico kommt aus Spanien nach Deutschland und baut sich alles neu auf: Wohnung, Arbeit, Freunde, Sprache.",en:"Made for learners, free on dw.com with exercises."},
{id:"k2",t:"Easy German",y:"YouTube",kind:"Kanal",lvl:"A2–C1",tags:["anfaenger"],de:"Straßeninterviews mit echten Menschen, mit deutschen und englischen Untertiteln.",en:"Real spoken German at natural speed; great for listening volume."},
{id:"k3",t:"logo! (ZDF)",y:"Kindernachrichten",kind:"Nachrichten",lvl:"B1",tags:["anfaenger"],de:"Nachrichten für Kinder: kurz, klar und langsam erklärt.",en:"Daily news you can actually follow at B1."},
{id:"k4",t:"Tagesschau in 100 Sekunden",y:"ARD",kind:"Nachrichten",lvl:"B2",tags:[],de:"Die wichtigsten Nachrichten des Tages in hundert Sekunden.",en:"A daily habit; standard news German."},
{id:"k5",t:"In aller Freundschaft",y:"seit 1998",kind:"Serie",lvl:"B1–B2",tags:["medizin"],de:"Ärztinnen, Ärzte und Pflegekräfte der fiktiven Sachsenklinik in Leipzig: Patienten, Diagnosen, Privatleben.",en:"Clear standard German and hospital vocabulary in every episode."},
{id:"k6",t:"Der Bergdoktor",y:"seit 2008",kind:"Serie",lvl:"B1",tags:["medizin"],de:"Ein Arzt führt eine Landarztpraxis in den Tiroler Bergen und löst medizinische Rätsel.",en:"Gentle pace; some Austrian words."},
{id:"k7",t:"Club der roten Bänder",y:"2015–2017",kind:"Serie",lvl:"B1–B2",tags:["medizin"],de:"Sechs Jugendliche lernen sich im Krankenhaus kennen und gründen einen Club.",en:"Young people's German, hospital setting, a lot of heart."},
{id:"k8",t:"Charité",y:"seit 2017",kind:"Serie",lvl:"B2–C1",tags:["medizin","geschichte"],de:"Die Geschichte der berühmten Berliner Klinik, von Robert Koch und Emil von Behring bis ins 20. Jahrhundert.",en:"Medical history in German; the season set in 1888 is a good start."},
{id:"k9",t:"Lola rennt",y:1998,kind:"Film",lvl:"B1",tags:["klassiker"],de:"Lola hat zwanzig Minuten, um 100.000 Mark zu besorgen und ihren Freund zu retten.",en:"Fast, little dialogue, the same story three times."},
{id:"k10",t:"Almanya – Willkommen in Deutschland",y:2011,kind:"Film",lvl:"B1",tags:["komoedie","ankommen"],de:"Eine türkisch-deutsche Familie erzählt, wie der Großvater als Gastarbeiter nach Deutschland kam.",en:"Warm and funny, about arriving in Germany."},
{id:"k11",t:"Good Bye, Lenin!",y:2003,kind:"Film",lvl:"B1–B2",tags:["klassiker","geschichte","medizin"],de:"Seine Mutter liegt beim Mauerfall im Koma; als sie aufwacht, spielt Alex ihr vor, die DDR gäbe es noch.",en:"Comedy-drama about 1989; hospital and cardiac scenes."},
{id:"k12",t:"Fack ju Göhte",y:2013,kind:"Film",lvl:"B1–B2",tags:["komoedie"],de:"Ein Bankräuber wird aus Versehen Aushilfslehrer an einer schwierigen Schule.",en:"Youth slang, and yes, the title is a Goethe joke."},
{id:"k13",t:"Honig im Kopf",y:2014,kind:"Film",lvl:"B1–B2",tags:["medizin"],de:"Ein Großvater mit Alzheimer-Demenz und seine Enkelin brechen heimlich nach Venedig auf.",en:"How German families talk about dementia."},
{id:"k14",t:"Die Welle",y:2008,kind:"Film",lvl:"B1–B2",tags:[],de:"Ein Lehrer startet in einer Projektwoche ein Experiment über Autokratie, und die Schüler machen begeistert mit.",en:"Clear dialogue, big discussion topic."},
{id:"k15",t:"Türkisch für Anfänger",y:"2006–2008",kind:"Serie",lvl:"B1",tags:["komoedie","ankommen"],de:"Eine deutsche und eine türkische Familie ziehen zusammen.",en:"Intercultural comedy, everyday German."},
{id:"k16",t:"Das Leben der Anderen",y:2006,kind:"Film",lvl:"B2",tags:["klassiker","geschichte"],de:"Ein Stasi-Offizier überwacht ein Künstlerpaar in Ost-Berlin und beginnt, sich mit ihnen zu identifizieren.",en:"Oscar-winning; precise, measured German."},
{id:"k17",t:"Sophie Scholl – Die letzten Tage",y:2005,kind:"Film",lvl:"B2",tags:["geschichte"],de:"Die letzten sechs Tage der Studentin Sophie Scholl, die Flugblätter gegen das NS-Regime verteilte.",en:"Interrogation scenes are superb listening practice."},
{id:"k18",t:"Soul Kitchen",y:2009,kind:"Film",lvl:"B2",tags:["komoedie"],de:"Ein Hamburger Restaurantbesitzer kämpft mit seinem Rücken, dem Finanzamt und seinem chaotischen Bruder.",en:"Hamburg energy, informal speech."},
{id:"k19",t:"Systemsprenger",y:2019,kind:"Film",lvl:"B2",tags:["medizin"],de:"Die neunjährige Benni ist so wütend, dass keine Einrichtung sie lange behalten will.",en:"Child psychiatry and youth welfare; intense."},
{id:"k20",t:"Toni Erdmann",y:2016,kind:"Film",lvl:"B2",tags:["komoedie"],de:"Ein Vater mit falschen Zähnen besucht unangekündigt seine Tochter, eine Unternehmensberaterin in Bukarest.",en:"Awkward, brilliant; partly English."},
{id:"k21",t:"Im Westen nichts Neues",y:2022,kind:"Film",lvl:"B2",tags:["geschichte","literatur"],de:"Die neue Verfilmung von Remarques Roman über den Ersten Weltkrieg.",en:"Watch after reading the novel (Leseleiter)."},
{id:"k22",t:"Das Lehrerzimmer",y:2023,kind:"Film",lvl:"B2",tags:[],de:"Eine junge Lehrerin will einen Diebstahl an ihrer Schule aufklären und gerät selbst unter Druck.",en:"Tight, realistic school German."},
{id:"k23",t:"Dark",y:"2017–2020",kind:"Serie",lvl:"B2",tags:[],de:"In einer Kleinstadt verschwinden Kinder, und vier Familien entdecken ein Geheimnis, das über Generationen reicht.",en:"Gripping; keep German audio and German subtitles."},
{id:"k24",t:"Deutschland 83",y:2015,kind:"Serie",lvl:"B2",tags:["geschichte"],de:"Ein junger DDR-Grenzsoldat wird als Spion in die Bundeswehr geschickt.",en:"Cold War thriller, East and West German."},
{id:"k25",t:"Tatort",y:"seit 1970",kind:"Serie",lvl:"B2",tags:["dialekt"],de:"Der Sonntagskrimi um 20:15 Uhr: Jede Stadt hat ihr eigenes Ermittlerteam.",en:"A national ritual; hear regional accents."},
{id:"k26",t:"Babylon Berlin",y:"seit 2017",kind:"Serie",lvl:"C1",tags:["geschichte"],de:"Ein Kommissar ermittelt im Berlin der späten Zwanzigerjahre.",en:"Rich period language, Berlin dialect."},
{id:"k27",t:"Wer früher stirbt ist länger tot",y:2006,kind:"Film",lvl:"C1",tags:["dialekt","komoedie"],de:"Ein bayerischer Junge glaubt, er sei schuld am Tod seiner Mutter, und will unsterblich werden.",en:"Bavarian dialect; a fun challenge with subtitles."},
{id:"k28",t:"Der Himmel über Berlin",y:1987,kind:"Film",lvl:"C1",tags:["klassiker","literatur"],de:"Zwei Engel hören die Gedanken der Menschen in West-Berlin; einer möchte selbst Mensch werden.",en:"Poetic inner monologues; a literary film."},
{id:"k29",t:"Faust – Eine deutsche Volkssage",y:1926,kind:"Film",lvl:"A2",tags:["klassiker","literatur"],de:"F. W. Murnaus Stummfilm: wenige Zwischentitel, große Bilder.",en:"Silent film; watch it the week you read Faust's wager."},
{id:"k30",t:"Faust (Gründgens)",y:1960,kind:"Film",lvl:"B2–C1",tags:["literatur"],de:"Gustaf Gründgens als Mephisto: die gefilmte Hamburger Theaterinszenierung von Faust I.",en:"Hear the verse you studied, performed."}
];
const KINO_METHOD=`<ol><li><b>Deutsche Tonspur, deutsche Untertitel.</b> Englische Untertitel machen aus Hören Lesen.</li><li><b>In Etappen.</b> 20–30 Minuten pro Abend reichen. Lieber regelmäßig als einen ganzen Film halb verstanden.</li><li><b>Eine Szene zweimal.</b> Wähle zwei Minuten, die du magst, schau sie noch einmal und sprich drei Sätze mit (Schattensprechen).</li><li><b>Fünf Ausdrücke ins Deck.</b> Nicht einzelne Wörter, sondern ganze Wendungen, wie sie im Film fallen.</li><li><b>Filmtagebuch.</b> Vier Sätze auf Deutsch: Worum geht es, was hat dir gefallen? Der Offline-Coach prüft die wichtigsten Punkte; mit Claude bekommst du eine volle Korrektur.</li><li><b>Wo?</b> ARD- und ZDF-Mediathek (oft kostenlos, Verfügbarkeit wechselt), DW Learn German, YouTube, Streamingdienste mit deutscher Tonspur. Auch internationale Serien mit deutscher Synchronisation zählen als Hörtraining.</li></ol>`;

