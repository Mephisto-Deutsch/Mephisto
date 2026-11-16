// ===== Mephisto · l5 data (PLAN-L §2.5): plan rows, hour figures, Mephisto's plan lines, speaking prompts, outside-time chips.
// Pure constants. Logic is in v2/c_l5.js. Every hour figure here is a planning estimate (MANIFEST "facts to check").
const L5_HOURS={plan:575,lo:500,hi:650, // late A1 → B2, guided hours (learning reviewer's estimate from Goethe-Institut unit figures; unverified)
  b2words:3700, // A1–B2 word target used only when the catalogue cannot be counted (learning.md counts 3,666 A1–B2 words)
  minData:14};  // fewer days of data → no date is printed
// Block tables (minutes). Keys: cards · err (error queue) · gram (grammar cards, interleaved) · mix (errors + grammar) · hoer · les ·
// in1/in2 (20-minute day: main input and the 2-minute closing input, listening and reading alternate by day) · lesson · lesout
// (20-minute day: lesson on even days, output on odd days) · write · mouth (Lautschule / shadowing) · culture · xtra (exam Teil or clinic drill, alternate).
const L5_ROWS={
  20:[["cards",7],["mix",3],["in1",4],["lesout",4],["in2",2]],
  40:[["cards",11],["err",2],["gram",3],["hoer",6],["les",6],["lesson",8],["mouth",3],["culture",1]],
  60:[["cards",15],["err",3],["gram",4],["hoer",9],["les",9],["lesson",10],["write",7],["mouth",3]],
  90:[["cards",20],["err",3],["gram",5],["hoer",15],["les",15],["lesson",12],["write",10],["mouth",7],["xtra",3]],
  shift:[["p_cards",5],["p_hoer",5],["p_les",5],["p_last",5]]};
// ledger fields (minutes, 1 decimal) and their German names
const L5_FIELDS=["rev","hoer","les","spr","schr","gram","klin","laut","pruef","ext"];
const L5_FNAME={rev:"Karten",hoer:"Hören",les:"Lesen",spr:"Sprechen",schr:"Schreiben",gram:"Grammatik & Fehler",klin:"Klinikdeutsch",laut:"Aussprache",pruef:"Prüfung",ext:"Außerhalb der App"};
// provider skill (PLAN-L §2.2) → ledger field
const L5_SKILL={hoeren:"hoer",lesen:"les",sprechen:"spr",schreiben:"schr",aussprache:"laut",klinik:"klin",pruefung:"pruef",leben:"les",zahlen:"hoer",
  hoer:"hoer",les:"les",spr:"spr",schr:"schr",laut:"laut",klin:"klin",pruef:"pruef",gram:"gram",rev:"rev",ext:"ext"};
// one-tap outside time (Ich → Verlauf and Home)
const L5_EXT=[["pod","Podcast",15],["stat","Station",30],["film","Film",45],["talk","Gespräch",20]];
// roster codes
const L5_ROSTER={F:{de:"Früh",en:"early"},S:{de:"Spät",en:"late"},N:{de:"Nacht",en:"night"},"-":{de:"Frei",en:"off"}};
// 30 Mephisto lines: plan, left-over work, return after absence, shift. Never religion, origin or family.
const L5_MEPH={
 plan:[["Vierzig Minuten. Ich habe sie schon verteilt. Sie müssen nur noch gehorchen.","Forty minutes. I have already shared them out. All you have to do is obey."],
  ["Hören, lesen, wiederholen. Jeden Tag. Langweilig? Nein – wirksam.","Listen, read, review. Every day. Boring? No – effective."],
  ["Jede Minute hat heute einen Platz. Verschwenden Sie keine an Ausreden.","Every minute has a place today. Don't waste one on excuses."],
  ["Erst die Karten, dann die Geschichte. So halte ich es mit allen, die bei mir unterschrieben haben.","Cards first, then the story. That is how I treat everyone who signed with me."],
  ["Ein Drittel Ihrer Zeit gehört heute dem Ohr und dem Auge. Darauf bestehe ich.","A third of your time today belongs to the ear and the eye. I insist on it."],
  ["Ich rechne in Stunden, nicht in Versprechen.","I count in hours, not in promises."],
  ["Der Plan ist fertig. Ihre Ausreden auch? Dann fangen wir an.","The plan is ready. Your excuses too? Then let's begin."],
  ["Heute ist ein freier Tag. Für Sie. Nicht für mich.","Today is a day off. For you. Not for me."]],
 left:[["Was heute nicht hineinpasst, verschwindet nicht. Es wartet. Wie ich.","What doesn't fit today doesn't disappear. It waits. Like me."],
  ["Ein paar Karten bleiben liegen. Ich habe sie gezählt – Sie sollten es auch.","A few cards are left over. I have counted them – so should you."],
  ["Fünfzehn Minuten mehr, und der Stapel ist weg. Ihre Entscheidung.","Fifteen more minutes and the pile is gone. Your decision."],
  ["Die Wiederholung kommt vor der neuen Lektion. Auf Vergessenem baut niemand gern.","The review comes before the new lesson. Nobody likes building on what has been forgotten."],
  ["Der Rest kommt morgen zuerst dran. Ich vergesse nichts.","The rest goes first tomorrow. I forget nothing."],
  ["Zu viel für heute? Gut. Dann wissen Sie wenigstens, wie viel es ist.","Too much for today? Good. At least now you know how much it is."],
  ["Ehrlichkeit kostet nichts. Aufschieben kostet Zinsen.","Honesty costs nothing. Putting things off costs interest."]],
 ret:[["Da sind Sie ja wieder. Fangen wir klein an – mit den Karten, die am meisten fehlen.","There you are again. Let's start small – with the cards that are slipping most."],
  ["Ein paar Tage Pause. Ihr Gedächtnis hat sie genutzt, um aufzuräumen. Wir räumen zurück.","A few days off. Your memory used them to tidy up. We'll put things back."],
  ["Ich habe nicht gezählt, wie lange Sie weg waren. Doch, habe ich. Egal – heute zählt.","I didn't count how long you were away. Yes, I did. Never mind – today counts."],
  ["Kein Vorwurf. Nur ein Plan. Der Vorwurf kommt später.","No reproach. Just a plan. The reproach comes later."],
  ["Willkommen zurück. Die dringendsten Karten zuerst, der Rest in Ruhe.","Welcome back. The most urgent cards first, the rest calmly."],
  ["Wer zurückkommt, hat schon die Hälfte geschafft. Die andere Hälfte steht unten.","Coming back is half the work. The other half is listed below."],
  ["Sie waren weg, das Deutsche nicht. Es wartet geduldig – im Gegensatz zu mir.","You were gone, German wasn't. It waits patiently – unlike me."]],
 shift:[["Dienst heute. Vier kleine Runden, drei genügen. Zwischen zwei Patienten passt immer eine.","On duty today. Four small rounds, three are enough. One always fits between two patients."],
  ["Nachtdienst? Fünf Minuten Karten in der Pause. Den Rest verschlafen Sie – ausnahmsweise mit meiner Erlaubnis.","Night shift? Five minutes of cards in your break. Sleep through the rest – with my permission, for once."],
  ["Ihr Dienstplan steht. Die lange Sitzung liegt auf Ihrem freien Tag.","Your roster is set. The long session sits on your day off."],
  ["Eine Runde Hören im Treppenhaus zählt genauso wie eine am Schreibtisch.","A listening round in the stairwell counts just as much as one at a desk."],
  ["Heute keine neue Lektion. Heute nur das, was Sie morgen noch können sollen.","No new lesson today. Only what you should still know tomorrow."],
  ["Frühdienst. Eine Runde vor der Übergabe, eine danach. So einfach ist das.","Early shift. One round before handover, one after. It's that simple."],
  ["Spätdienst. Drei Runden bis Mitternacht, und der Tag zählt.","Late shift. Three rounds before midnight and the day counts."],
  ["Ein harter Dienst? Dann zuerst die Karten. Morgen holen wir den Rest.","A hard shift? Then the cards first. We'll catch up on the rest tomorrow."]]};
// 60-second speaking prompts (shift round 4 when no error is due), by level 0–4
const L5_REDE=[
 {lv:0,de:"Stellen Sie sich vor: Name, Beruf, Arbeitsplatz.",en:"Introduce yourself: name, job, workplace."},
 {lv:0,de:"Beschreiben Sie Ihren Weg zur Arbeit.",en:"Describe your way to work."},
 {lv:0,de:"Was essen und trinken Sie gern? Was nicht?",en:"What do you like to eat and drink? What not?"},
 {lv:1,de:"Erzählen Sie von Ihrem letzten Dienst: Was ist passiert?",en:"Talk about your last shift: what happened?"},
 {lv:1,de:"Beschreiben Sie Ihre Wohnung und Ihre Nachbarn.",en:"Describe your flat and your neighbours."},
 {lv:1,de:"Was machen Sie an einem freien Tag?",en:"What do you do on a day off?"},
 {lv:2,de:"Erklären Sie einem Patienten, warum er vor der Untersuchung nüchtern bleiben muss.",en:"Explain to a patient why he must not eat before the examination."},
 {lv:2,de:"Was gefällt Ihnen an Heidelberg, und was würden Sie ändern?",en:"What do you like about Heidelberg, and what would you change?"},
 {lv:2,de:"Wie bereiten Sie sich auf einen Nachtdienst vor?",en:"How do you prepare for a night shift?"},
 {lv:3,de:"Sollte die Notaufnahme eine Gebühr für Bagatellfälle verlangen? Begründen Sie Ihre Meinung.",en:"Should the emergency department charge a fee for minor cases? Give reasons."},
 {lv:3,de:"Homeoffice für alle – eine gute Idee? Nennen Sie Vor- und Nachteile.",en:"Working from home for everyone – a good idea? Name pros and cons."},
 {lv:3,de:"Übergeben Sie einen Patienten mündlich an den Kollegen vom Tagdienst.",en:"Hand over a patient orally to the day-shift colleague."},
 {lv:4,de:"Erläutern Sie, wie Sie im Team mit einem Fehler umgehen würden, der Ihnen selbst passiert ist.",en:"Explain how you would deal in the team with a mistake you made yourself."},
 {lv:4,de:"Wie verändert die Digitalisierung die Arbeit in der Klinik? Nehmen Sie Stellung.",en:"How is digitalisation changing hospital work? Take a position."}];
// Vorher / Nachher (day 1, 30, 90, 180): the same two tasks each time
const L5_BA={days:[1,30,90,180],
  say:{de:"Stellen Sie sich 45 Sekunden lang vor: Name, Beruf, wo Sie arbeiten, warum Sie Deutsch lernen und wie Ihr Tag heute war.",en:"Introduce yourself for 45 seconds: name, job, where you work, why you are learning German and how your day was."},
  write:{de:"Schreiben Sie fünf Sätze über sich und Ihre Arbeit.",en:"Write five sentences about yourself and your work."}};

