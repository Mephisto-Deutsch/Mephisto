// ===== Mephisto · Grammatik, Lücken aus Runde 8: g72–g83 (L9, geprüft und korrigiert von L2) und g84–g98 (L2). Same format as x_gram4b.js; load after it and before c_core.js.
GRAMMAR3.push(
{id:"g72",level:"A1",week:7,title:"Wohin? Wo? Woher?",sub:"zum Arzt, beim Arzt, vom Arzt — in die Klinik, in der Klinik, aus der Klinik",
 body:`<p>German asks three different questions about place — <b>Wohin?</b> (to where), <b>Wo?</b> (where), <b>Woher?</b> (from where) — and the preposition depends on <b>what kind of place</b> it is. English "to / at / from" is not enough.</p>
<table><tr><th>Kind of place</th><th>Wohin?</th><th>Wo?</th><th>Woher?</th></tr>
<tr><td>a person</td><td class="de"><b>zu</b> + D: zum Arzt, zur Hausärztin, zu Frau Weber</td><td class="de"><b>bei</b> + D: beim Arzt, bei der Hausärztin, bei Frau Weber</td><td class="de"><b>von</b> + D: vom Arzt, von der Hausärztin, von Frau Weber</td></tr>
<tr><td>a building or room (you go inside)</td><td class="de"><b>in</b> + A: in die Klinik, ins Krankenhaus, in den OP</td><td class="de"><b>in</b> + D: in der Klinik, im Krankenhaus, im OP</td><td class="de"><b>aus</b> + D: aus der Klinik, aus dem Krankenhaus, aus dem OP</td></tr>
<tr><td>a town, a country without article</td><td class="de"><b>nach</b> Heidelberg, nach Deutschland</td><td class="de"><b>in</b> Heidelberg, in Deutschland</td><td class="de"><b>aus</b> Heidelberg, aus Saudi-Arabien</td></tr>
<tr><td>a country with article</td><td class="de"><b>in</b> die Schweiz, in die USA</td><td class="de"><b>in</b> der Schweiz, in den USA</td><td class="de"><b>aus</b> der Schweiz, aus den USA</td></tr>
<tr><td>home</td><td class="de"><b>nach</b> Hause</td><td class="de"><b>zu</b> Hause</td><td class="de"><b>von</b> zu Hause</td></tr>
<tr><td>an activity or errand</td><td class="de"><b>zu</b> + D: zur Arbeit, zum Röntgen, zur Untersuchung</td><td class="de"><b>bei</b> + D: bei der Arbeit, beim Röntgen</td><td class="de"><b>von</b> + D: von der Arbeit, vom Röntgen</td></tr>
<tr><td>a ward, a floor, an open surface</td><td class="de"><b>auf</b> + A: auf die Station, auf die Intensivstation, auf die Toilette</td><td class="de"><b>auf</b> + D: auf der Station, auf der Intensivstation, auf der Toilette</td><td class="de"><b>von</b> + D: von der Station, von der Intensivstation</td></tr>
<tr><td>water, an edge</td><td class="de"><b>an</b> + A: an den Neckar, ans Meer</td><td class="de"><b>an</b> + D: am Neckar, am Meer</td><td class="de"><b>von</b> + D: vom Neckar, vom Meer</td></tr></table>
<p>Short forms: <span class="de">zu dem = <b>zum</b> · zu der = <b>zur</b> · bei dem = <b>beim</b> · von dem = <b>vom</b> · in das = <b>ins</b> · in dem = <b>im</b> · an das = <b>ans</b> · an dem = <b>am</b></span></p>
<p><b>In the hospital:</b> <span class="de">Der Patient kommt <b>aus dem</b> OP <b>auf die</b> Station. · Die Patientin kommt <b>von zu</b> Hause / <b>aus dem</b> Pflegeheim / <b>vom</b> Hausarzt. · Wir bringen ihn <b>in den</b> Schockraum. · Sie liegt <b>auf der</b> Intensivstation.</span> Staff also say <span class="de">auf Station</span> without the article: <span class="de">Ich bin heute auf Station.</span></p>
<p><b>Traps:</b> <span class="de">nach</span> is only for towns, countries without article, directions (<span class="de">nach links, nach oben</span>) and <span class="de">nach Hause</span> — never for people: <span class="de">Ich gehe <b>zum</b> Arzt.</span> <span class="de">bei</span> never shows movement: <span class="de">Ich gehe <b>zu</b> meiner Schwester</span>, then <span class="de">Ich bin <b>bei</b> meiner Schwester.</span> "At the doctor's" = <span class="de">beim Arzt</span>. "At home" = <span class="de">zu Hause</span>; "(to) home" = <span class="de">nach Hause</span>.</p>`,
 merke:"Person: zu – bei – von. Raum: in – in – aus. Stadt: nach – in – aus. nach Hause gehen, zu Hause sein.",
 ex:[{type:"mc",q:"Ich gehe morgen ___ Arzt.",o:["nach dem","beim","zum"],a:2,why:"Wohin? + a person → zu + dative: zum Arzt. nach is never used for people."},
 {type:"mc",q:"Wo waren Sie gestern? — Ich war ___ Hausärztin.",o:["zur","bei der","in die"],a:1,why:"Wo? + a person → bei + dative: bei der Hausärztin."},
 {type:"mc",q:"Die Patientin kommt ___ Pflegeheim.",o:["nach dem","bei dem","aus dem"],a:2,why:"Woher? + a building she was inside → aus + dative."},
 {type:"mc",q:"Nach dem Dienst fahre ich ___.",o:["nach Hause","im Haus","zu Hause"],a:0,why:"Wohin? → nach Hause. zu Hause answers Wo?"},
 {type:"gap",q:"Wir bringen den Patienten ___ die Intensivstation. (Präposition)",a:"auf",alt:[],why:"A ward takes auf; movement → accusative: auf die Intensivstation."},
 {type:"gap",q:"Frau Keller liegt seit Montag ___ Krankenhaus. (Präposition + Artikel, ein Wort)",a:"im",alt:["in dem"],why:"Wo? + building → in + dative: in dem = im."},
 {type:"order",words:["Der","Patient","kommt","gerade","aus","dem","OP","."],a:"Der Patient kommt gerade aus dem OP.",alt:["Gerade kommt der Patient aus dem OP."],why:"Woher? + room → aus + dative."},
 {type:"fix",q:"Ich gehe heute Nachmittag bei meiner Schwester.",a:"Ich gehe heute Nachmittag zu meiner Schwester.",err:"bei",why:"gehen is movement (Wohin?) → zu. bei only says where you are."},
 {type:"transform",q:"Satzbau (Präsens): wir / die Patientin / in / der OP / fahren",a:"Wir fahren die Patientin in den OP.",alt:[],why:"Wohin? + room → in + accusative: in den OP."},
 {type:"transform",q:"Auf Deutsch: I was at the doctor's yesterday.",a:"Ich war gestern beim Arzt.",alt:["Gestern war ich beim Arzt.","Ich war gestern bei der Ärztin.","Gestern war ich bei der Ärztin.","Ich bin gestern beim Arzt gewesen."],why:"at the doctor's = beim Arzt (bei + dative); time before place."}]},
{id:"g73",level:"A1",week:6,title:"Verben mit Dativ",sub:"Was fehlt Ihnen? Tut Ihnen das weh? Mir ist schwindelig.",
 body:`<p>Most verbs take an accusative object. A small group takes the <b>dative</b> instead — and the bedside is full of them. English gives no warning: "I help <i>him</i>" looks like a direct object, but German says <span class="de">Ich helfe <b>ihm</b>.</span></p>
<table><tr><th>Verb</th><th>Example</th><th>English</th></tr>
<tr><td class="de">helfen</td><td class="de">Kann ich <b>Ihnen</b> helfen?</td><td>help</td></tr>
<tr><td class="de">danken</td><td class="de">Ich danke <b>Ihnen</b>.</td><td>thank</td></tr>
<tr><td class="de">fehlen</td><td class="de">Was fehlt <b>Ihnen</b>?</td><td>"What is the matter?" (what is missing to you)</td></tr>
<tr><td class="de">wehtun</td><td class="de">Tut <b>Ihnen</b> das weh? Der Kopf tut <b>mir</b> weh.</td><td>hurt</td></tr>
<tr><td class="de">gehören</td><td class="de">Gehört die Tasche <b>Ihnen</b>?</td><td>belong to</td></tr>
<tr><td class="de">gefallen</td><td class="de">Das Zimmer gefällt <b>mir</b>.</td><td>"I like the room"</td></tr>
<tr><td class="de">schmecken</td><td class="de">Schmeckt <b>Ihnen</b> das Essen?</td><td>taste good to</td></tr>
<tr><td class="de">passen</td><td class="de">Passt <b>Ihnen</b> Dienstag?</td><td>suit</td></tr>
<tr><td class="de">antworten · zuhören</td><td class="de">Bitte antworten Sie <b>mir</b>. Hören Sie <b>mir</b> bitte zu.</td><td>answer · listen to</td></tr>
<tr><td class="de">glauben · raten</td><td class="de">Ich glaube <b>Ihnen</b>. Ich rate <b>Ihnen</b> zu einer Operation.</td><td>believe · advise</td></tr>
<tr><td class="de">folgen</td><td class="de">Folgen Sie <b>mir</b> bitte. Folgen Sie <b>meinem</b> Finger.</td><td>follow</td></tr>
<tr><td class="de">passieren</td><td class="de">Was ist <b>Ihnen</b> passiert?</td><td>happen to</td></tr></table>
<p><b>The thing is the subject.</b> With <span class="de">gefallen, schmecken, fehlen, wehtun, gehören, passen</span> the person is in the dative and the verb agrees with the thing: <span class="de">Die Stadt gefäll<b>t</b> mir. Die Schuhe gefall<b>en</b> mir. Die Beine tu<b>n</b> mir weh.</span></p>
<p><b>How you feel</b> = dative + <span class="de">ist / wird</span>, with no subject at all: <span class="de"><b>Mir</b> ist schlecht. · <b>Mir</b> ist schwindelig. · <b>Mir</b> ist kalt. · <b>Mir</b> wird schwarz vor Augen. · Wie geht es <b>Ihnen</b>? — <b>Mir</b> geht es besser. · Es tut <b>mir</b> leid.</span></p>
<p><b>Trap:</b> <span class="de">Ich bin kalt</span> says that your character or your skin is cold. "I am cold" is <span class="de"><b>Mir ist</b> kalt.</span> The same for <span class="de">Mir ist heiß, Mir ist übel, Mir ist langweilig.</span></p>
<p><b>Two objects:</b> the person is dative, the thing accusative: <span class="de">Ich gebe <b>Ihnen</b> ein Rezept. · Ich zeige <b>dem Patienten</b> das Röntgenbild. · Ich erkläre <b>Ihnen</b> die Untersuchung.</span></p>`,
 merke:"helfen, danken, fehlen, wehtun, gehören, gefallen → Dativ. Mir ist schlecht. Was fehlt Ihnen?",
 ex:[{type:"mc",q:"Kann ich ___ helfen, Frau Braun?",o:["Sie","Ihr","Ihnen"],a:2,why:"helfen takes the dative: Ihnen."},
 {type:"mc",q:"Der Bauch tut ___ seit gestern weh. (he)",o:["ihn","ihm","er"],a:1,why:"wehtun takes the dative: er → ihm."},
 {type:"mc",q:"I am cold. →",o:["Mir ist kalt.","Ich habe kalt.","Ich bin kalt."],a:0,why:"Feelings of this kind: dative + ist. Mir ist kalt."},
 {type:"mc",q:"Die neuen Schuhe ___ mir gut.",o:["gefallen","gefällt","gefalle"],a:0,why:"The thing is the subject: die Schuhe (plural) → gefallen."},
 {type:"gap",q:"Was fehlt ___, Herr Demir? (you, polite)",a:"Ihnen",alt:[],why:"fehlen takes the dative; polite form with a capital: Ihnen."},
 {type:"gap",q:"Die Tasche gehört ___ Patientin in Bett vier. (die)",a:"der",alt:[],why:"gehören + dative; feminine die → der."},
 {type:"order",words:["Mir","ist","seit","heute","Morgen","schwindelig","."],a:"Mir ist seit heute Morgen schwindelig.",alt:["Seit heute Morgen ist mir schwindelig."],why:"Dative first, then ist; no subject."},
 {type:"fix",q:"Ich danke Sie für Ihre Hilfe.",a:"Ich danke Ihnen für Ihre Hilfe.",err:"Sie",why:"danken takes the dative: Ihnen."},
 {type:"transform",q:"Satzbau (Präsens, Frage): wo / wehtun / es / Sie (Dativ) / ?",a:"Wo tut es Ihnen weh?",alt:["Wo tut es weh?"],why:"wehtun is separable: tut … weh; the person is dative."},
 {type:"transform",q:"Auf Deutsch: I like Heidelberg. (gefallen)",a:"Heidelberg gefällt mir.",alt:["Mir gefällt Heidelberg.","Heidelberg gefällt mir gut.","Mir gefällt Heidelberg gut."],why:"The thing liked is the subject, the person is dative."}]},
{id:"g74",level:"A2",week:10,title:"Zeit: vor, seit, in, nach, bis, ab",sub:"ago, since, in, after, until, from — and the tense each one demands",
 body:`<p>Every history starts with time. The preposition decides the tense, and English "for" has three different translations.</p>
<table><tr><th>Preposition</th><th>Meaning</th><th>Tense</th><th>Example</th></tr>
<tr><td class="de"><b>vor</b> + D</td><td>… ago (a point in the past)</td><td>past</td><td class="de"><b>Vor</b> drei Tagen bin ich gestürzt.</td></tr>
<tr><td class="de"><b>seit</b> + D</td><td>since / for — began in the past, still going on</td><td><b>present!</b></td><td class="de">Ich <b>habe seit</b> drei Tagen Fieber. · seit gestern · seit 2019</td></tr>
<tr><td class="de"><b>in</b> + D</td><td>in … (counted from now)</td><td>present / future</td><td class="de">Der Befund ist <b>in</b> zwei Stunden fertig.</td></tr>
<tr><td class="de"><b>nach</b> + D</td><td>after</td><td>any</td><td class="de"><b>nach</b> dem Essen · <b>nach</b> der Operation · <b>nach</b> zwei Tagen</td></tr>
<tr><td class="de"><b>bis</b> (+ A) · <b>bis zu</b> + D</td><td>until, by</td><td>any</td><td class="de"><b>bis</b> morgen · <b>bis</b> Freitag · <b>bis zum</b> Abend · <b>bis zur</b> Entlassung</td></tr>
<tr><td class="de"><b>ab</b> + D</td><td>from … on</td><td>present / future</td><td class="de"><b>Ab</b> morgen dürfen Sie aufstehen. · ab sofort · ab dem 3. Mai</td></tr>
<tr><td class="de"><b>von … bis</b></td><td>from … to</td><td>any</td><td class="de">von 8 bis 16 Uhr · von Montag bis Freitag</td></tr>
<tr><td class="de"><b>zwischen</b> + D</td><td>between</td><td>any</td><td class="de">zwischen 8 und 10 Uhr</td></tr>
<tr><td class="de"><b>während</b> + G</td><td>during (genitive — for now learn the phrases)</td><td>any</td><td class="de">während der Nacht · während der Operation</td></tr>
<tr><td class="de"><b>innerhalb</b> + G / <b>von</b> + D</td><td>within (genitive, or von + dative)</td><td>any</td><td class="de">innerhalb einer Stunde · innerhalb von zwei Tagen</td></tr>
<tr><td class="de"><b>über</b> + A</td><td>over, all through</td><td>any</td><td class="de">über Nacht · über das Wochenende · über Jahre</td></tr></table>
<p><b>No preposition at all</b> — the bare accusative — for how long and how often: <span class="de">Ich habe <b>zwei Stunden</b> gewartet. · Er war <b>drei Tage</b> im Krankenhaus. · <b>jeden Morgen</b> · <b>letzte Woche</b> · <b>nächsten Montag</b> · dreimal <b>am Tag</b> / dreimal täglich.</span></p>
<p><b>Three kinds of "for":</b></p>
<table><tr><td>still going on</td><td class="de"><b>seit</b> + present: Ich arbeite <b>seit</b> zwei Jahren hier.</td></tr>
<tr><td>finished</td><td class="de">bare accusative (+ lang): Ich habe <b>zwei Jahre (lang)</b> in Riad gearbeitet.</td></tr>
<tr><td>planned, ahead</td><td class="de"><b>für</b> + A: Ich fahre <b>für</b> zwei Wochen nach Hause. · Sie bekommen das Antibiotikum <b>für</b> sieben Tage.</td></tr></table>
<p><b>The questions:</b> <span class="de"><b>Seit wann</b> haben Sie die Schmerzen? · <b>Wann</b> hat es angefangen? — Vor zwei Stunden. · <b>Wie lange</b> dauert ein Anfall? — Etwa zehn Minuten. · <b>Wie oft</b>? — Zweimal am Tag. · <b>Bis wann</b>? · <b>Ab wann</b>?</span></p>
<p><b>Trap:</b> <span class="de">vor</span> stands <i>before</i> the time: "three days ago" = <span class="de"><b>vor</b> drei Tagen</span>. And "I have had pain for three days" is present tense in German: <span class="de">Ich <b>habe seit</b> drei Tagen Schmerzen.</span></p>`,
 merke:"vor = ago (Vergangenheit). seit = bis jetzt (Präsens). in = von jetzt an. Dauer ohne Präposition: drei Tage.",
 ex:[{type:"mc",q:"Ich habe ___ drei Tagen Husten.",o:["vor","für","seit"],a:2,why:"Still going on → seit + dative, with the present tense."},
 {type:"mc",q:"Die Schmerzen haben ___ zwei Stunden angefangen.",o:["seit","vor","in"],a:1,why:"A point in the past (two hours ago) → vor."},
 {type:"mc",q:"Der Befund ist erst ___ zwei Stunden fertig. Bitte warten Sie so lange.",o:["vor","in","für"],a:1,why:"Counted from now into the future → in + dative."},
 {type:"mc",q:"I have worked here for two years. →",o:["Ich arbeite seit zwei Jahren hier.","Ich habe hier für zwei Jahre gearbeitet.","Ich arbeite hier vor zwei Jahren."],a:0,why:"Still true now → seit + present tense."},
 {type:"gap",q:"___ morgen dürfen Sie wieder normal essen. (from … on)",a:"Ab",alt:[],why:"ab + dative = from a point on."},
 {type:"gap",q:"Bitte bleiben Sie ___ zur Visite im Zimmer. (until)",a:"bis",alt:[],why:"bis zu + dative: bis zur Visite."},
 {type:"order",words:["Ich","habe","gestern","zwei","Stunden","gewartet","."],a:"Ich habe gestern zwei Stunden gewartet.",alt:["Gestern habe ich zwei Stunden gewartet."],why:"Duration stands in the bare accusative, without a preposition."},
 {type:"fix",q:"Ich bin seit drei Tagen gestürzt.",a:"Ich bin vor drei Tagen gestürzt.",err:"seit",why:"A single event in the past → vor. seit is for what is still going on."},
 {type:"transform",q:"Satzbau (Präsens): die Patientin / seit / eine Woche / Fieber / haben",a:"Die Patientin hat seit einer Woche Fieber.",alt:["Seit einer Woche hat die Patientin Fieber."],why:"seit + dative (einer Woche) and the present tense."},
 {type:"transform",q:"Auf Deutsch: The pain started three days ago.",a:"Die Schmerzen haben vor drei Tagen angefangen.",alt:["Die Schmerzen haben vor drei Tagen begonnen.","Der Schmerz hat vor drei Tagen angefangen.","Der Schmerz hat vor drei Tagen begonnen.","Vor drei Tagen haben die Schmerzen angefangen.","Vor drei Tagen haben die Schmerzen begonnen.","Die Schmerzen fingen vor drei Tagen an.","Die Schmerzen begannen vor drei Tagen."],why:"ago = vor + dative, placed before the time."}]},
{id:"g75",level:"A2",week:11,title:"Imperativ: du, ihr, Sie",sub:"Nimm! Schlaf! Seid ruhig! — and the commands of the physical examination",
 body:`<p>You know the Sie-imperative (<span class="de">Atmen Sie tief ein.</span>). Children, friends and colleagues you say du to need the <b>du-</b> and <b>ihr-forms</b>.</p>
<table><tr><th>Infinitiv</th><th>du</th><th>ihr</th><th>Sie</th></tr>
<tr><td class="de">kommen</td><td class="de">Komm!</td><td class="de">Kommt!</td><td class="de">Kommen Sie!</td></tr>
<tr><td class="de">nehmen (e → i)</td><td class="de">N<b>i</b>mm!</td><td class="de">Nehmt!</td><td class="de">Nehmen Sie!</td></tr>
<tr><td class="de">geben (e → i)</td><td class="de">G<b>i</b>b!</td><td class="de">Gebt!</td><td class="de">Geben Sie!</td></tr>
<tr><td class="de">sehen (e → ie)</td><td class="de">S<b>ie</b>h!</td><td class="de">Seht!</td><td class="de">Sehen Sie!</td></tr>
<tr><td class="de">schlafen (a → ä)</td><td class="de">Schl<b>a</b>f! (no umlaut)</td><td class="de">Schlaft!</td><td class="de">Schlafen Sie!</td></tr>
<tr><td class="de">atmen · warten</td><td class="de">Atm<b>e</b>! · Wart<b>e</b>!</td><td class="de">Atmet! · Wartet!</td><td class="de">Atmen Sie! · Warten Sie!</td></tr>
<tr><td class="de">aufmachen (separable)</td><td class="de">Mach … auf!</td><td class="de">Macht … auf!</td><td class="de">Machen Sie … auf!</td></tr>
<tr><td class="de">sich hinlegen (reflexive)</td><td class="de">Leg <b>dich</b> hin!</td><td class="de">Legt <b>euch</b> hin!</td><td class="de">Legen Sie <b>sich</b> hin!</td></tr>
<tr><td class="de">sein</td><td class="de"><b>Sei</b> ruhig!</td><td class="de"><b>Seid</b> ruhig!</td><td class="de"><b>Seien</b> Sie ruhig!</td></tr>
<tr><td class="de">haben</td><td class="de">Hab keine Angst!</td><td class="de">Habt keine Angst!</td><td class="de">Haben Sie keine Angst!</td></tr></table>
<p><b>Rule for du:</b> take the du-form of the present, drop <span class="de">du</span> and <span class="de">-st</span>: <span class="de">du kommst → Komm! · du nimmst → Nimm! · du liest → Lies!</span> The umlaut of a → ä verbs disappears: <span class="de">du schläfst → Schlaf! · du fährst → Fahr!</span> An <span class="de">-e</span> is needed only after -t, -d, -ig and after consonant + m/n: <span class="de">Warte! Rede! Entschuldige! Atme! Öffne!</span></p>
<p><b>Rule for ihr:</b> the ihr-form of the present without <span class="de">ihr</span>: <span class="de">Kommt! Nehmt! Setzt euch!</span></p>
<p><b>Softeners</b> make a command polite: <span class="de">bitte, mal, einmal, kurz, doch</span>. <span class="de">Zeig <b>mal</b> her. · Machen Sie <b>bitte einmal</b> den Mund auf.</span> Staff also use the bare infinitive for short neutral commands: <span class="de">Tief einatmen — Luft anhalten — ausatmen. · Bitte nicht bewegen.</span></p>
<p><b>The physical examination</b></p>
<table><tr><th>To an adult (Sie)</th><th>To a child (du)</th></tr>
<tr><td class="de">Machen Sie bitte den Oberkörper frei.</td><td class="de">Mach bitte den Oberkörper frei.</td></tr>
<tr><td class="de">Atmen Sie tief ein und aus. · Atmen Sie durch den offenen Mund.</td><td class="de">Atme tief ein und aus.</td></tr>
<tr><td class="de">Halten Sie die Luft an. — Atmen Sie weiter.</td><td class="de">Halt die Luft an. — Atme weiter.</td></tr>
<tr><td class="de">Legen Sie sich bitte auf den Rücken.</td><td class="de">Leg dich bitte auf den Rücken.</td></tr>
<tr><td class="de">Zeigen Sie mir, wo es wehtut.</td><td class="de">Zeig mir, wo es wehtut.</td></tr>
<tr><td class="de">Sagen Sie Bescheid, wenn es wehtut.</td><td class="de">Sag Bescheid, wenn es wehtut.</td></tr>
<tr><td class="de">Drücken Sie gegen meine Hand.</td><td class="de">Drück gegen meine Hand.</td></tr>
<tr><td class="de">Folgen Sie meinem Finger nur mit den Augen.</td><td class="de">Folge meinem Finger nur mit den Augen.</td></tr>
<tr><td class="de">Strecken Sie die Zunge heraus und sagen Sie „Ah“.</td><td class="de">Streck die Zunge heraus und sag „Ah“.</td></tr>
<tr><td class="de">Entspannen Sie sich. Lassen Sie den Arm ganz locker.</td><td class="de">Entspann dich. Lass den Arm ganz locker.</td></tr></table>`,
 merke:"du nimmst → Nimm! du schläfst → Schlaf! (kein Umlaut). ihr: Nehmt! sein: Sei! Seid! Seien Sie!",
 ex:[{type:"mc",q:"Imperativ (du) von „schlafen“:",o:["Schläf gut!","Schläfst gut!","Schlaf gut!"],a:2,why:"a → ä verbs lose the umlaut in the imperative: Schlaf!"},
 {type:"mc",q:"Zu zwei Kindern: „___ bitte ruhig!“",o:["Sei","Seid","Seien"],a:1,why:"ihr-imperative of sein: Seid!"},
 {type:"mc",q:"Imperativ (du) von „sich hinlegen“:",o:["Leg dich hin!","Leg sich hin!","Hinleg dich!"],a:0,why:"Verb first, then dich, the prefix hin at the end."},
 {type:"mc",q:"Zu einem Kind: „___ mal tief ein!“ (atmen)",o:["Atm","Atme","Atmest"],a:1,why:"After consonant + m the du-imperative needs -e: Atme!"},
 {type:"gap",q:"___ bitte die Tablette mit viel Wasser! (nehmen, du)",a:"Nimm",alt:[],why:"du nimmst → Nimm! The e → i change stays."},
 {type:"gap",q:"Halten Sie bitte die Luft ___. (anhalten)",a:"an",alt:[],why:"anhalten is separable: the prefix goes to the end."},
 {type:"order",words:["Machen","Sie","bitte","den","Oberkörper","frei","."],a:"Machen Sie bitte den Oberkörper frei.",alt:["Bitte machen Sie den Oberkörper frei."],why:"Sie-imperative: verb first, then Sie; frei closes the sentence."},
 {type:"fix",q:"Gebe mir bitte deine Hand.",a:"Gib mir bitte deine Hand.",err:"Gebe",why:"geben changes e → i in the du-imperative: Gib!"},
 {type:"transform",q:"Satzbau (Imperativ, du): sich legen / bitte / auf / die Liege",a:"Leg dich bitte auf die Liege.",alt:["Lege dich bitte auf die Liege.","Bitte leg dich auf die Liege.","Bitte lege dich auf die Liege."],why:"Verb first, reflexive dich after it; Wohin? → auf + accusative."},
 {type:"transform",q:"Auf Deutsch (Sie): Please breathe in deeply and hold your breath.",a:"Atmen Sie bitte tief ein und halten Sie die Luft an.",alt:["Bitte atmen Sie tief ein und halten Sie die Luft an.","Atmen Sie tief ein und halten Sie die Luft an.","Atmen Sie bitte tief ein und halten Sie den Atem an.","Bitte atmen Sie tief ein und halten Sie den Atem an.","Atmen Sie bitte tief ein und halten die Luft an.","Bitte tief einatmen und die Luft anhalten."],why:"Two separable verbs: einatmen and anhalten; both prefixes go to the end of their part."}]},
{id:"g76",level:"B1",week:22,title:"Die Position von „nicht“",sub:"Er hat das Medikament nicht genommen — or nicht das Medikament, sondern …?",
 body:`<p>The A1 rule said: <span class="de">nicht</span> at the end, but before adjectives and places. Here is the whole system. There are two kinds of negation.</p>
<p><b>1 · Satznegation</b> — the whole statement is denied. <span class="de">nicht</span> moves as far to the right as it can, but it stops <b>before</b> everything that belongs closely to the verb.</p>
<table><tr><th>nicht stands BEFORE …</th><th>Example</th></tr>
<tr><td>the second verb part (infinitive, participle, prefix)</td><td class="de">Ich kann heute <b>nicht</b> kommen. · Er hat <b>nicht</b> angerufen. · Ich rufe heute <b>nicht</b> an.</td></tr>
<tr><td>an adjective or noun after sein, werden, bleiben</td><td class="de">Der Befund ist <b>nicht</b> eindeutig. · Er ist <b>nicht</b> mein Hausarzt.</td></tr>
<tr><td>a place or direction that the verb needs</td><td class="de">Sie geht <b>nicht</b> nach Hause. · Er liegt <b>nicht</b> auf der Intensivstation.</td></tr>
<tr><td>an object with a preposition</td><td class="de">Ich warte <b>nicht</b> auf den Bus. · Sie leidet <b>nicht</b> an Diabetes.</td></tr>
<tr><td>manner (how?)</td><td class="de">Er atmet <b>nicht</b> regelmäßig. · Sie isst <b>nicht</b> gern Fisch.</td></tr>
<tr><td>a fixed noun–verb pair</td><td class="de">Das kommt <b>nicht</b> in Frage. · Er fährt <b>nicht</b> Auto.</td></tr>
<tr><th>nicht stands AFTER …</th><th></th></tr>
<tr><td>the verb, if nothing else is there</td><td class="de">Ich rauche <b>nicht</b>.</td></tr>
<tr><td>accusative and dative objects</td><td class="de">Er nimmt das Medikament <b>nicht</b>. · Ich glaube ihm <b>nicht</b>. · Ich habe den Patienten <b>nicht</b> gesehen.</td></tr>
<tr><td>time (heute, gestern, am Montag)</td><td class="de">Ich komme heute <b>nicht</b>. · Sie hat gestern <b>nicht</b> gegessen.</td></tr>
<tr><td>comment words (leider, wahrscheinlich, vielleicht)</td><td class="de">Er kommt leider <b>nicht</b>.</td></tr></table>
<p><b>2 · Sondernegation</b> — only one element is denied. <span class="de">nicht</span> stands directly before it, and <span class="de">sondern</span> usually gives the correction: <span class="de">Er hat <b>nicht das Medikament</b> genommen, <b>sondern</b> das Placebo. · <b>Nicht ich</b> habe das gesagt, sondern der Oberarzt. · Ich komme <b>nicht heute</b>, sondern morgen.</span></p>
<p>Compare: <span class="de">Er hat das Medikament <b>nicht</b> genommen.</span> (he did not take it) — <span class="de">Er hat <b>nicht</b> das Medikament genommen …</span> (he took something else).</p>
<p><b>nicht before small adverbs of degree and frequency:</b> <span class="de">Das stimmt <b>nicht</b> ganz. · Ich schlafe <b>nicht</b> immer gut. · Er kommt <b>nicht</b> oft.</span> Fixed pairs: <span class="de">noch nicht · nicht mehr · gar nicht · überhaupt nicht · nicht einmal.</span></p>
<p><b>kein, not nicht</b>, for a noun with ein or without article: <span class="de">Sie hat <b>kein</b> Fieber und <b>keine</b> Allergien.</span></p>
<p><b>In the Arztbrief</b> the negation hides inside words: <span class="de"><b>kein</b> Anhalt für · <b>ohne</b> Befund · <b>un</b>auffällig · fieber<b>frei</b> · <b>nicht</b> druckschmerzhaft · Fieber wurde <b>verneint</b>.</span></p>`,
 merke:"Satznegation: nicht so weit rechts wie möglich, aber vor Verbteil 2, Adjektiv, Ort, Präpositionalobjekt. Sondernegation: nicht direkt vor dem Wort, dann sondern.",
 ex:[{type:"mc",q:"Ohne Kontrast verneint: „Er hat das Rezept abgeholt.“ →",o:["Er hat nicht das Rezept abgeholt.","Er hat das Rezept abgeholt nicht.","Er hat das Rezept nicht abgeholt."],a:2,why:"Satznegation: after the accusative object, before the participle. The first option would need „… sondern“."},
 {type:"mc",q:"Die Patientin ist ___.",o:["allergisch gegen Penicillin nicht","allergisch nicht gegen Penicillin","nicht allergisch gegen Penicillin"],a:2,why:"nicht stands before the adjective after sein."},
 {type:"mc",q:"Ich komme ___, sondern morgen.",o:["heute nicht","nicht heute","nicht"],a:1,why:"Sondernegation: nicht directly before the element that is corrected."},
 {type:"mc",q:"Wir warten ___.",o:["nicht auf den Befund","auf den Befund nicht","den Befund nicht auf"],a:0,why:"nicht stands before an object with a preposition."},
 {type:"gap",q:"Er ist seit gestern ___ mehr ansprechbar. (Negation)",a:"nicht",alt:[],why:"nicht mehr = no longer; before the adjective."},
 {type:"gap",q:"Die Patientin hat ___ Fieber und keinen Husten. (Negation)",a:"kein",alt:[],why:"A noun without article is negated with kein: kein Fieber."},
 {type:"order",words:["Der","Patient","hat","die","Tabletten","gestern","nicht","genommen","."],a:"Der Patient hat die Tabletten gestern nicht genommen.",alt:["Der Patient hat gestern die Tabletten nicht genommen."],why:"Object and time first, nicht directly before the participle."},
 {type:"fix",q:"Ich kann nicht heute Abend kommen.",a:"Ich kann heute Abend nicht kommen.",err:"nicht heute Abend",why:"Time stands before nicht; nicht stands before the infinitive."},
 {type:"transform",q:"Satzbau (Perfekt, mit „noch nicht“): ich / den Oberarzt / heute / erreichen",a:"Ich habe den Oberarzt heute noch nicht erreicht.",alt:["Ich habe heute den Oberarzt noch nicht erreicht.","Heute habe ich den Oberarzt noch nicht erreicht.","Den Oberarzt habe ich heute noch nicht erreicht."],why:"Object and time before noch nicht; the participle closes the bracket."},
 {type:"transform",q:"Auf Deutsch: She is not going home today.",a:"Sie geht heute nicht nach Hause.",alt:["Heute geht sie nicht nach Hause.","Sie fährt heute nicht nach Hause.","Heute fährt sie nicht nach Hause."],why:"Time before nicht; nicht before the direction (nach Hause)."}]},
{id:"g77",level:"B1",week:19,title:"Adjektive und Nomen mit Präposition",sub:"allergisch gegen, zuständig für, einverstanden mit — Angst vor, Verdacht auf, Anhalt für",
 body:`<p>Verbs bring fixed prepositions (<span class="de">warten auf, leiden an</span>). Adjectives and nouns do the same. Learn each one as a block with its case.</p>
<table><tr><th>Preposition</th><th>Adjectives</th><th>Example</th></tr>
<tr><td class="de">auf + A</td><td class="de">stolz, neugierig, gespannt, angewiesen, eifersüchtig</td><td class="de">Ich bin gespannt <b>auf den</b> Befund.</td></tr>
<tr><td class="de">an + D</td><td class="de">interessiert, schuld, beteiligt, erkrankt, reich, arm</td><td class="de">Er ist <b>an</b> Diabetes erkrankt.</td></tr>
<tr><td class="de">für + A</td><td class="de">zuständig, verantwortlich, dankbar, typisch, geeignet, bekannt</td><td class="de">Wer ist <b>für diesen</b> Patienten zuständig?</td></tr>
<tr><td class="de">gegen + A</td><td class="de">allergisch (also: auf), immun, resistent, geimpft</td><td class="de">Sie ist allergisch <b>gegen</b> Penicillin.</td></tr>
<tr><td class="de">mit + D</td><td class="de">einverstanden, zufrieden, verheiratet, beschäftigt, fertig, verwandt</td><td class="de">Sind Sie <b>mit der</b> Behandlung einverstanden?</td></tr>
<tr><td class="de">über + A</td><td class="de">froh, glücklich, traurig, erstaunt, verärgert</td><td class="de">Wir sind froh <b>über den</b> Verlauf.</td></tr>
<tr><td class="de">um + A</td><td class="de">besorgt, bemüht</td><td class="de">Die Tochter ist sehr besorgt <b>um ihren</b> Vater.</td></tr>
<tr><td class="de">von + D</td><td class="de">abhängig, überzeugt, begeistert, enttäuscht, frei</td><td class="de">Der Patient ist <b>von</b> Opioiden abhängig.</td></tr>
<tr><td class="de">zu + D</td><td class="de">bereit, fähig, entschlossen, nett, freundlich</td><td class="de">Sind Sie <b>zu einer</b> Operation bereit?</td></tr></table>
<table><tr><th>Noun + preposition</th><th>Example</th></tr>
<tr><td class="de">Angst <b>vor</b> + D · Schutz <b>vor</b> + D</td><td class="de">Haben Sie Angst <b>vor der</b> Narkose?</td></tr>
<tr><td class="de">Verdacht <b>auf</b> + A · Hinweis <b>auf</b> + A</td><td class="de">Verdacht <b>auf</b> Lungenembolie · kein Hinweis <b>auf eine</b> Fraktur</td></tr>
<tr><td class="de">Anhalt <b>für</b> + A · Grund <b>für</b> + A</td><td class="de">kein Anhalt <b>für</b> Malignität · der Grund <b>für die</b> Aufnahme</td></tr>
<tr><td class="de">Einfluss / Wirkung / Reaktion / Anspruch / Hoffnung <b>auf</b> + A</td><td class="de">eine allergische Reaktion <b>auf das</b> Kontrastmittel</td></tr>
<tr><td class="de">Bedarf / Mangel / Interesse / Zweifel / Teilnahme <b>an</b> + D</td><td class="de">Bedarf <b>an</b> Schmerzmitteln · Mangel <b>an</b> Eisen</td></tr>
<tr><td class="de">Erfahrung / Problem / Behandlung <b>mit</b> + D</td><td class="de">Haben Sie Erfahrung <b>mit diesem</b> Gerät?</td></tr>
<tr><td class="de">Bitte / Sorge <b>um</b> + A</td><td class="de">mit der Bitte <b>um</b> Rückruf</td></tr>
<tr><td class="de">Allergie / Impfung / Mittel <b>gegen</b> + A</td><td class="de">eine Impfung <b>gegen</b> Tetanus</td></tr>
<tr><td class="de">Zustand <b>nach</b> + D</td><td class="de">Zustand <b>nach</b> Appendektomie</td></tr>
<tr><td class="de">Unterschied / Zusammenhang <b>zwischen</b> + D</td><td class="de">der Zusammenhang <b>zwischen</b> Rauchen und Husten</td></tr></table>
<p><b>Asking and pointing back</b> works as with verbs: <span class="de"><b>Wovor</b> haben Sie Angst? — <b>Davor</b>, dass ich nicht mehr aufwache. · <b>Wogegen</b> sind Sie allergisch? · Ich bin <b>damit</b> einverstanden. · <b>Dafür</b> bin ich nicht zuständig.</span> For people: <span class="de"><b>Mit wem</b> ist sie verheiratet? · <b>Auf wen</b> sind Sie angewiesen?</span></p>
<p><b>Word families</b> usually keep their preposition: <span class="de">abhängen von → abhängig von → die Abhängigkeit von · hinweisen auf → der Hinweis auf · hoffen auf → die Hoffnung auf · zweifeln an → der Zweifel an · bitten um → die Bitte um.</span> The exception to learn: <span class="de">sich interessieren <b>für</b></span> — but <span class="de">interessiert <b>an</b>, das Interesse <b>an</b>.</span></p>`,
 merke:"allergisch gegen, zuständig für, einverstanden mit, abhängig von · Angst vor, Verdacht auf, Hinweis auf, Anhalt für, Bedarf an.",
 ex:[{type:"mc",q:"Sind Sie ___ der Operation einverstanden?",o:["mit","für","über"],a:0,why:"einverstanden mit + dative."},
 {type:"mc",q:"Es besteht der Verdacht ___ eine Lungenembolie.",o:["für","auf","an"],a:1,why:"Verdacht auf + accusative."},
 {type:"mc",q:"Wer ist heute Nacht ___ die Station zuständig?",o:["auf","über","für"],a:2,why:"zuständig für + accusative."},
 {type:"mc",q:"___ haben Sie Angst? — Vor der Narkose.",o:["Worauf","Wofür","Wovor"],a:2,why:"Angst vor → wo(r)- + vor = wovor."},
 {type:"gap",q:"Die Patientin ist allergisch ___ Penicillin.",a:"gegen",alt:["auf"],why:"allergisch gegen + accusative (auf is also used)."},
 {type:"gap",q:"Im CT zeigt sich kein Anhalt ___ eine Blutung.",a:"für",alt:[],why:"Anhalt für + accusative — but Hinweis auf."},
 {type:"order",words:["Wir","haben","keinen","Hinweis","auf","eine","Fraktur","gefunden","."],a:"Wir haben keinen Hinweis auf eine Fraktur gefunden.",why:"Hinweis auf + accusative; the participle closes the bracket."},
 {type:"fix",q:"Der Patient ist abhängig auf Schmerzmittel.",a:"Der Patient ist abhängig von Schmerzmitteln.",alt:["Der Patient ist von Schmerzmitteln abhängig."],err:"auf Schmerzmittel",why:"abhängig von + dative; the dative plural adds -n."},
 {type:"transform",q:"Satzbau (Präsens): die Angehörigen / mit / die Behandlung / sehr zufrieden / sein",a:"Die Angehörigen sind mit der Behandlung sehr zufrieden.",alt:["Die Angehörigen sind sehr zufrieden mit der Behandlung."],why:"zufrieden mit + dative: mit der Behandlung."},
 {type:"transform",q:"Auf Deutsch (Sie): What are you allergic to?",a:"Wogegen sind Sie allergisch?",alt:["Worauf sind Sie allergisch?","Gegen was sind Sie allergisch?","Auf was sind Sie allergisch?"],why:"allergisch gegen → wogegen; the question word comes first, the verb second."}]},
{id:"g78",level:"B1",week:21,title:"viele gute, alle guten",sub:"Adjective endings after alle, beide, keine — and after viele, einige, mehrere, zwei",
 body:`<p>After a quantity word the adjective has one question: <b>does the word before me already show the case, like der/die/das?</b> If yes, the adjective is weak (-en in the plural). If no, the adjective shows the case itself.</p>
<table><tr><th>Group A — work like the article <i>die</i></th><th>Group B — work like adjectives</th></tr>
<tr><td class="de">alle, beide, keine, diese, meine / Ihre, sämtliche</td><td class="de">viele, wenige, einige, mehrere, einzelne, zahlreiche, verschiedene, andere, weitere, folgende — and numbers: zwei, drei …</td></tr>
<tr><td class="de">alle neu<b>en</b> Befunde<br>beide alt<b>en</b> Patienten<br>keine neu<b>en</b> Beschwerden</td><td class="de">viele neu<b>e</b> Befunde<br>einige alt<b>e</b> Patienten<br>zwei groß<b>e</b> Tabletten</td></tr></table>
<table><tr><th></th><th>Group A (alle)</th><th>Group B (viele)</th></tr>
<tr><td>Nom. / Akk.</td><td class="de">alle neu<b>en</b> Patienten</td><td class="de">viele neu<b>e</b> Patienten</td></tr>
<tr><td>Dat.</td><td class="de">mit allen neu<b>en</b> Patienten</td><td class="de">mit vielen neu<b>en</b> Patienten</td></tr>
<tr><td>Gen.</td><td class="de">aller neu<b>en</b> Patienten</td><td class="de">vieler neu<b>er</b> Patienten</td></tr></table>
<p>In group B the adjective simply copies the ending of the quantity word: <span class="de">viel<b>e</b> gut<b>e</b> · viel<b>en</b> gut<b>en</b> · viel<b>er</b> gut<b>er</b>.</span></p>
<p><b>Singular, no ending on the quantity word</b> — <span class="de">viel, wenig, etwas, mehr, genug, ein bisschen, ein paar</span> — the adjective must show the case: <span class="de">viel kalt<b>es</b> Wasser · wenig frei<b>e</b> Zeit · etwas warm<b>er</b> Tee · mit wenig gut<b>em</b> Willen · ein paar neu<b>e</b> Tabletten.</span></p>
<p><b>Singular with ending</b> — <span class="de">jeder, dieser, mancher, welcher</span> — the adjective is weak: <span class="de">jeder neu<b>e</b> Patient · bei jedem neu<b>en</b> Patienten.</span></p>
<p><b>An article before the number decides:</b> <span class="de">zwei neu<b>e</b> Kollegen</span> — but <span class="de">die zwei neu<b>en</b> Kollegen.</span></p>
<p><b>In reports:</b> <span class="de">bei allen stationären Patienten · nach mehreren erfolglosen Versuchen · wegen zahlreicher kleiner Blutungen · beide unteren Extremitäten · keine weiteren Fragen · folgende weitere Diagnosen.</span></p>
<p><b>Trap:</b> "all the patients" is <span class="de">alle Patienten</span> — no article. "Both patients" is <span class="de">beide Patienten</span> or <span class="de">die beiden Patienten.</span></p>`,
 merke:"alle, beide, keine + -en: alle guten Ärzte. viele, einige, mehrere, zwei + gleiche Endung: viele gute Ärzte, mit vielen guten Ärzten.",
 ex:[{type:"mc",q:"Alle ___ Patienten sind schon aufgenommen. (angemeldet)",o:["angemeldeten","angemeldete","angemeldeter"],a:0,why:"alle works like the article die → weak ending -en."},
 {type:"mc",q:"Wir haben viele ___ Kollegen.",o:["netter","netten","nette"],a:2,why:"viele works like an adjective; accusative plural → both take -e."},
 {type:"mc",q:"Beide ___ Kollegen haben heute Nachtdienst. (neu)",o:["neuen","neuer","neue"],a:0,why:"beide works like the article die → -en."},
 {type:"mc",q:"Nach mehreren ___ Versuchen lag der Zugang.",o:["erfolglose","erfolglosen","erfolgloser"],a:1,why:"nach + dative plural: mehreren erfolglosen — the adjective copies -en."},
 {type:"gap",q:"Trinken Sie bitte viel ___ Wasser. (kalt)",a:"kaltes",alt:[],why:"viel has no ending, so the adjective shows neuter accusative: -es."},
 {type:"gap",q:"Ich habe keine ___ Fragen. (weiter)",a:"weiteren",alt:[],why:"keine works like the article die → -en."},
 {type:"order",words:["Einige","ältere","Patienten","haben","mehrere","chronische","Krankheiten","."],a:"Einige ältere Patienten haben mehrere chronische Krankheiten.",why:"einige and mehrere are group B: the adjectives take -e."},
 {type:"fix",q:"Alle neue Mitarbeiter bekommen einen Schlüssel.",a:"Alle neuen Mitarbeiter bekommen einen Schlüssel.",err:"neue",why:"After alle the adjective ends in -en."},
 {type:"transform",q:"Satzbau (Präsens): der Patient / zwei / klein / Wunden / an / die rechte Hand / haben",a:"Der Patient hat zwei kleine Wunden an der rechten Hand.",alt:["Der Patient hat an der rechten Hand zwei kleine Wunden.","An der rechten Hand hat der Patient zwei kleine Wunden."],why:"After a number the adjective shows the case: zwei kleine; Wo? → an der rechten Hand."},
 {type:"transform",q:"Auf Deutsch: Many older patients take several different medications.",a:"Viele ältere Patienten nehmen mehrere verschiedene Medikamente.",alt:["Viele ältere Patienten nehmen mehrere verschiedene Medikamente ein.","Viele alte Patienten nehmen mehrere verschiedene Medikamente.","Viele alte Patienten nehmen mehrere verschiedene Medikamente ein.","Viele ältere Patientinnen und Patienten nehmen mehrere verschiedene Medikamente."],why:"viele ältere (nominative) and mehrere verschiedene (accusative): group B, all in -e."}]},
{id:"g79",level:"B1",week:23,title:"Relativsätze mit wer, was, wo(r)-",sub:"Alles, was Sie sagen … · Wer raucht, lebt gefährlich. · etwas, worüber wir sprechen müssen",
 body:`<p>The relative pronouns <span class="de">der, die, das</span> need a noun to point to. When there is no real noun, German uses <span class="de">was, wo(r)-</span> and <span class="de">wer</span>.</p>
<table><tr><th>was after …</th><th>Example</th></tr>
<tr><td class="de">alles, nichts, vieles, einiges, wenig, das</td><td class="de">Alles, <b>was</b> Sie sagen, bleibt unter uns. · Es gibt nichts, <b>was</b> dagegen spricht. · Das, <b>was</b> Sie beschreiben, klingt nach Migräne.</td></tr>
<tr><td>a superlative or adjective used as a noun: <span class="de">das Beste, das Einzige, das Erste, das Wichtigste</span></td><td class="de">Das ist das Beste, <b>was</b> wir tun können.</td></tr>
<tr><td>a whole clause</td><td class="de">Er hat mit dem Rauchen aufgehört, <b>was</b> mich sehr freut.</td></tr></table>
<p>After <span class="de">etwas</span> you will meet both <span class="de">was</span> and <span class="de">das</span>: <span class="de">etwas, was / das mich beunruhigt.</span></p>
<p><b>With a preposition</b>, <span class="de">was</span> becomes <span class="de">wo(r)-</span> + preposition: <span class="de">Es gibt vieles, <b>wofür</b> ich dankbar bin. · Das ist alles, <b>woran</b> ich mich erinnere. · Er kam zu spät, <b>worüber</b> sich der Oberarzt ärgerte.</span> A real noun keeps preposition + <span class="de">der/die/das</span>: <span class="de">der Befund, <b>über den</b> wir sprechen</span>. For people never wo-: <span class="de">die Kollegin, <b>mit der</b> ich arbeite.</span></p>
<p><b>Places</b> take <span class="de">wo, wohin, woher</span>: <span class="de">Heidelberg, <b>wo</b> ich wohne · die Stelle, <b>wo</b> es wehtut · dort, <b>wohin</b> der Schmerz ausstrahlt.</span></p>
<p><b>wer = anyone who.</b> The wer-clause stands first; the main clause may begin with <span class="de">der</span>, and must do so when the two cases differ.</p>
<table><tr><th>Case</th><th>Example</th></tr>
<tr><td>Nom.</td><td class="de"><b>Wer</b> Fieber hat, (der) bleibt zu Hause.</td></tr>
<tr><td>Akk.</td><td class="de"><b>Wen</b> es betrifft, <b>der</b> soll sich melden.</td></tr>
<tr><td>Dat.</td><td class="de"><b>Wem</b> schwindelig ist, <b>der</b> setzt sich bitte hin.</td></tr></table>
<p><span class="de">was</span> does the same for things: <span class="de"><b>Was</b> Sie hier sehen, ist ein alter Infarkt. · <b>Was</b> mir auffällt, ist der niedrige Blutdruck.</span> This is a strong opening in B2 Sprechen and in the case presentation.</p>
<p><b>At work:</b> <span class="de"><b>Wer</b> Blutverdünner nimmt, darf dieses Medikament nicht einnehmen. · Alles, <b>was</b> Sie brauchen, bekommen Sie von der Pflege. · Gibt es noch etwas, <b>was</b> Sie mir sagen möchten?</span></p>
<p><b>Trap:</b> English "which" for a whole clause is <span class="de">was</span>, never <span class="de">welches</span> or <span class="de">das</span>. And never <span class="de">dass</span>.</p>`,
 merke:"alles, nichts, das Beste + was. Ganzer Satz + was. Mit Präposition: wofür, worüber. Wer …, (der) … = jeder, der.",
 ex:[{type:"mc",q:"Das ist das Beste, ___ wir im Moment tun können.",o:["das","was","dass"],a:1,why:"After a superlative used as a noun the relative pronoun is was."},
 {type:"mc",q:"Er hat zehn Kilo abgenommen, ___ den Blutdruck deutlich gesenkt hat.",o:["das","was","welches"],a:1,why:"The relative clause refers to the whole clause → was."},
 {type:"mc",q:"___ Blutverdünner nimmt, sollte vor dem Eingriff Bescheid sagen.",o:["Wer","Wem","Der"],a:0,why:"No noun to refer to; 'anyone who' as subject → wer."},
 {type:"mc",q:"Es gibt vieles, ___ ich Ihnen dankbar bin.",o:["wovor","womit","wofür"],a:2,why:"dankbar für → wo- + für = wofür."},
 {type:"gap",q:"Alles, ___ Sie mir erzählen, unterliegt der Schweigepflicht.",a:"was",alt:[],why:"After alles the relative pronoun is was."},
 {type:"gap",q:"___ schwindelig ist, der setzt sich bitte sofort hin. (wer, Dativ)",a:"Wem",alt:[],why:"Mir ist schwindelig → dative: wem."},
 {type:"order",words:["Wer","Fieber","hat",",","bleibt","bitte","zu","Hause","."],a:"Wer Fieber hat, bleibt bitte zu Hause.",why:"The wer-clause fills position 1; the main verb follows the comma."},
 {type:"fix",q:"Sie hat aufgehört zu rauchen, das mich sehr freut.",a:"Sie hat aufgehört zu rauchen, was mich sehr freut.",err:"das",why:"Reference to a whole clause → was."},
 {type:"transform",q:"Satzbau (Präsens): was / mir / auffallen / , / sein / der niedrige Blutdruck",a:"Was mir auffällt, ist der niedrige Blutdruck.",alt:[],why:"was-clause first with the verb at its end (auffällt, joined again), then ist."},
 {type:"transform",q:"Auf Deutsch (Sie): Is there anything else you want to tell me?",a:"Gibt es noch etwas, was Sie mir sagen möchten?",alt:["Gibt es noch etwas, das Sie mir sagen möchten?","Gibt es noch etwas, was Sie mir sagen wollen?","Gibt es noch etwas, das Sie mir sagen wollen?","Gibt es sonst noch etwas, was Sie mir sagen möchten?","Gibt es sonst noch etwas, das Sie mir sagen möchten?","Gibt es noch etwas, was Sie mir erzählen möchten?","Gibt es noch etwas, das Sie mir erzählen möchten?"],why:"etwas + was (or das); the verb goes to the end of the relative clause."}]},
{id:"g80",level:"B2",week:34,title:"Mittelfeld und Nachfeld",sub:"Who stands where between the two verb parts — and what may come after the bracket",
 body:`<p>A German main clause has five fields. The two verb parts form the bracket.</p>
<table><tr><th>Vorfeld</th><th>Verb 1</th><th>Mittelfeld</th><th>Verb 2</th><th>Nachfeld</th></tr>
<tr><td class="de">Gestern</td><td class="de">hat</td><td class="de">der Oberarzt den Angehörigen den Befund ausführlich</td><td class="de">erklärt</td><td class="de">, weil er Zeit hatte.</td></tr></table>
<p><b>Order in the Mittelfeld</b> — five tendencies, strongest first:</p>
<table><tr><th>Tendency</th><th>Example</th></tr>
<tr><td>1 · Pronouns first, directly after verb 1; among them nominative – accusative – dative</td><td class="de">Hat <b>er es ihm</b> gesagt? · Gestern hat <b>es ihm</b> der Arzt gesagt.</td></tr>
<tr><td>2 · Nouns: subject – dative – accusative</td><td class="de">Der Arzt gibt <b>der Patientin das Rezept</b>.</td></tr>
<tr><td>3 · Known before new: the new information moves right</td><td class="de">Ich habe dem Patienten <b>ein Schmerzmittel</b> gegeben. — Ich habe das Schmerzmittel <b>einem anderen Patienten</b> gegeben.</td></tr>
<tr><td>4 · Time – reason – manner – place; direction stands last, next to verb 2</td><td class="de">Wir haben ihn <b>gestern wegen der Atemnot sofort auf die Intensivstation</b> verlegt.</td></tr>
<tr><td>5 · Objects with a preposition stand far right</td><td class="de">Sie hat lange <b>auf den Befund</b> gewartet.</td></tr></table>
<p><b>The Nachfeld</b> — what may follow verb 2:</p>
<table><tr><th>What</th><th>Example</th></tr>
<tr><td>subordinate and infinitive clauses (normal)</td><td class="de">Ich habe vergessen, die Tablette zu nehmen.</td></tr>
<tr><td>comparisons with als / wie (standard, also in writing)</td><td class="de">Die Operation hat länger gedauert <b>als geplant</b>. · Es ist besser gelaufen <b>als erwartet</b>. · Er hat sich benommen <b>wie ein Kind</b>.</td></tr>
<tr><td>additions with und zwar, das heißt, vor allem, zum Beispiel</td><td class="de">Er hat Schmerzen angegeben, <b>und zwar im rechten Unterbauch</b>.</td></tr>
<tr><td>a relative clause, moved out so that the verb is not left alone</td><td class="de">Ich habe den Patienten untersucht, <b>der gestern gestürzt ist</b>.</td></tr>
<tr><td>in speech only: phrases with a preposition, adverbs (Ausklammerung)</td><td class="de">Ich habe ihn gesehen <b>gestern im Flur</b>. · Ich bin gefahren <b>mit dem Bus</b>.</td></tr></table>
<p>Understand the spoken Ausklammerung; in writing, close the bracket. <b>Never</b> in the Nachfeld: the subject, an object without preposition, or <span class="de">nicht</span>.</p>
<p><b>Why it matters:</b> in Goethe B2 Schreiben the mark for structures falls with every object after the participle; in the Arztbrief the right edge of the Mittelfeld carries the finding: <span class="de">Der Patient wurde am 12.11. kreislaufstabil <b>auf die Normalstation</b> verlegt.</span></p>`,
 merke:"Mittelfeld: Pronomen vor Nomen, Dativ vor Akkusativ, Bekanntes vor Neuem, Richtung nach rechts. Nachfeld: Nebensätze und Vergleiche mit als / wie.",
 ex:[{type:"mc",q:"Welche Reihenfolge ist richtig?",o:["Ich habe dem Patienten es erklärt.","Ich habe es dem Patienten erklärt.","Ich habe erklärt es dem Patienten."],a:1,why:"A pronoun stands before a noun, directly after verb 1."},
 {type:"mc",q:"Was darf nach dem zweiten Verbteil stehen?",o:["Ich habe gestern gesehen ihn.","Die Operation hat länger gedauert als geplant.","Sie hat genommen die Tablette."],a:1,why:"A comparison with als may stand in the Nachfeld; objects may not."},
 {type:"mc",q:"„Wem haben Sie das Rezept gegeben?“ — Am natürlichsten: „Ich habe ___ gegeben.“",o:["einer Kollegin das Rezept","einer Kollegin es","das Rezept einer Kollegin"],a:2,why:"Known (das Rezept) before new (einer Kollegin): the answer to the question stands on the right."},
 {type:"mc",q:"Welcher Satz ist geschriebenes Standarddeutsch?",o:["Ich bin mit dem Bus in die Klinik gefahren.","Ich bin mit dem Bus gefahren in die Klinik.","Ich bin gefahren mit dem Bus in die Klinik."],a:0,why:"In writing the bracket closes after manner and direction."},
 {type:"gap",q:"Der Verlauf war günstiger ___ erwartet.",a:"als",alt:[],why:"Comparative + als; the comparison stands at the end."},
 {type:"gap",q:"Der Patient hat Schmerzen angegeben, und ___ im rechten Unterbauch. (namely)",a:"zwar",alt:[],why:"und zwar adds a precise detail in the Nachfeld."},
 {type:"order",words:["Wir","haben","ihn","gestern","sofort","auf","die","Intensivstation","verlegt","."],a:"Wir haben ihn gestern sofort auf die Intensivstation verlegt.",why:"Pronoun first, then time, manner, direction; the participle closes the bracket."},
 {type:"fix",q:"Die Ärztin hat dem Patienten ihn gezeigt.",a:"Die Ärztin hat ihn dem Patienten gezeigt.",err:"dem Patienten ihn",why:"The pronoun (ihn) stands before the noun (dem Patienten)."},
 {type:"transform",q:"Satzbau (Perfekt): der Oberarzt / erklären / gestern / die Angehörigen / der Befund",a:"Der Oberarzt hat den Angehörigen gestern den Befund erklärt.",alt:["Der Oberarzt hat gestern den Angehörigen den Befund erklärt.","Gestern hat der Oberarzt den Angehörigen den Befund erklärt.","Den Angehörigen hat der Oberarzt gestern den Befund erklärt."],why:"Dative (den Angehörigen) before accusative (den Befund); participle last."},
 {type:"transform",q:"Auf Deutsch: The operation went better than expected.",a:"Die Operation ist besser verlaufen als erwartet.",alt:["Die Operation ist besser gelaufen als erwartet.","Die Operation verlief besser als erwartet.","Die Operation lief besser als erwartet.","Die OP ist besser verlaufen als erwartet.","Die OP ist besser gelaufen als erwartet.","Die OP verlief besser als erwartet.","Die Operation ist besser als erwartet verlaufen.","Die Operation ist besser als erwartet gelaufen."],why:"The comparison als erwartet may stand after the participle."}]},
{id:"g81",level:"B2",week:31,title:"Passiv mit Modalverb im Konjunktiv",sub:"hätte operiert werden müssen · könnte übersehen worden sein — the three-verb endings",
 body:`<p>Reports, expert opinions and every morbidity conference end their sentences with three verbs. Build them step by step.</p>
<table><tr><th>Step</th><th>Example</th></tr>
<tr><td>Passive</td><td class="de">Der Patient <b>wird</b> operiert.</td></tr>
<tr><td>+ modal verb</td><td class="de">Der Patient <b>muss</b> operiert <b>werden</b>.</td></tr>
<tr><td>+ past</td><td class="de">Der Patient <b>musste</b> operiert <b>werden</b>.</td></tr>
<tr><td>+ Konjunktiv II of the past: it did not happen</td><td class="de">Der Patient <b>hätte</b> operiert <b>werden müssen</b>.</td></tr></table>
<p>There are <b>two different clusters</b>. Do not mix them.</p>
<table><tr><th></th><th>A · Criticism: it should have been done</th><th>B · Guess: I think it was done</th></tr>
<tr><td>Form</td><td class="de">hätte + Partizip II + <b>werden</b> + müssen / sollen / können / dürfen</td><td class="de">muss / dürfte / könnte / soll + Partizip II + <b>worden sein</b></td></tr>
<tr><td>Example</td><td class="de">Das CT <b>hätte</b> früher gemacht <b>werden können</b>.<br>Der Patient <b>hätte</b> nicht entlassen <b>werden dürfen</b>.</td><td class="de">Der Befund <b>könnte</b> übersehen <b>worden sein</b>.<br>Der Zugang <b>muss</b> paravenös gelegt <b>worden sein</b>.</td></tr>
<tr><td>Meaning</td><td>It was not done.</td><td>I conclude that it happened.</td></tr></table>
<p>Compare: <span class="de">Die Fraktur <b>hätte</b> erkannt <b>werden müssen</b>.</span> (nobody saw it — criticism) — <span class="de">Die Fraktur <b>muss</b> übersehen <b>worden sein</b>.</span> (that is my conclusion). With <span class="de">sollen</span> in B you report hearsay: <span class="de">Er <b>soll</b> gestern schon einmal untersucht <b>worden sein</b>.</span></p>
<p><b>In a subordinate clause:</b> in A the finite verb stands before the cluster: <span class="de">…, weil der Patient <b>hätte</b> operiert werden müssen.</span> In B it stands last: <span class="de">…, dass der Befund übersehen worden sein <b>könnte</b>.</span></p>
<p><b>Without a modal verb:</b> <span class="de">wäre</span> + Partizip II + <span class="de">worden</span>: <span class="de">Ohne den Helm <b>wäre</b> er schwer verletzt <b>worden</b>. · Wenn früher reanimiert <b>worden wäre</b>, …</span></p>
<p><b>Now, not past:</b> <span class="de">Das <b>müsste</b> abgeklärt <b>werden</b>. · Das <b>sollte</b> kontrolliert <b>werden</b>. · Das <b>könnte</b> ambulant gemacht <b>werden</b>.</span></p>
<p><b>The easy way out in speech</b> is <span class="de">man</span> + active: <span class="de"><b>Man hätte</b> früher ein CT machen <b>müssen</b>.</span> In the Fachsprachprüfung the examiner asks exactly this: <span class="de">Was hätte man anders machen können?</span></p>`,
 merke:"Kritik: hätte + Partizip II + werden + müssen / sollen / können. Vermutung: muss / könnte / dürfte + Partizip II + worden sein.",
 ex:[{type:"mc",q:"Vermutung über die Vergangenheit: Der Befund ___.",o:["hätte übersehen werden können","könnte übersehen worden sein","könnte übersehen werden"],a:1,why:"A guess about a past event: modal + Partizip II + worden sein."},
 {type:"mc",q:"Welcher Satz ist eine Kritik (es ist nicht geschehen)?",o:["Das EKG muss geschrieben worden sein.","Das EKG musste geschrieben werden.","Das EKG hätte geschrieben werden müssen."],a:2,why:"hätte + Partizip II + werden + müssen = should have been done, but was not."},
 {type:"mc",q:"…, weil die Wunde ___.",o:["hätte genäht werden müssen","genäht werden müssen hätte","hätte genäht worden müssen"],a:0,why:"In the subordinate clause hätte stands before the cluster; after a modal the passive infinitive is werden."},
 {type:"gap",q:"Ohne die Reanimation ___ der Patient nicht gerettet worden. (sein, Konjunktiv II)",a:"wäre",alt:[],why:"Passive in the Konjunktiv II of the past: wäre + Partizip II + worden."},
 {type:"gap",q:"Die Allergie hätte dokumentiert ___ müssen.",a:"werden",alt:[],why:"hätte + Partizip II + werden + modal infinitive."},
 {type:"order",words:["Das","CT","hätte","früher","gemacht","werden","können","."],a:"Das CT hätte früher gemacht werden können.",why:"hätte in position 2; the cluster at the end: Partizip II – werden – können."},
 {type:"fix",q:"Die Patientin hätte früher verlegt worden müssen.",a:"Die Patientin hätte früher verlegt werden müssen.",err:"worden",why:"Before the modal infinitive the passive needs werden, not worden."},
 {type:"transform",q:"Ins Passiv: Man hätte den Patienten früher aufklären müssen.",a:"Der Patient hätte früher aufgeklärt werden müssen.",alt:[],why:"The accusative object becomes the subject; aufklären → aufgeklärt werden."},
 {type:"transform",q:"Satzbau (Kritik im Passiv, Konjunktiv II der Vergangenheit): die Antibiotikatherapie / früher / beginnen / sollen",a:"Die Antibiotikatherapie hätte früher begonnen werden sollen.",alt:[],why:"hätte + Partizip II (begonnen) + werden + sollen."},
 {type:"transform",q:"Auf Deutsch: The fracture must have been overlooked.",a:"Die Fraktur muss übersehen worden sein.",alt:["Der Bruch muss übersehen worden sein.","Der Knochenbruch muss übersehen worden sein.","Man muss die Fraktur übersehen haben.","Man muss den Bruch übersehen haben."],why:"A conclusion about the past: muss + Partizip II + worden sein."}]},
{id:"g82",level:"B2",week:35,title:"Die Schmerzanamnese",sub:"Wo? Wohin? Wie? Wie stark? Seit wann? — the patient's words and the words of the letter",
 body:`<p>Pain is the most frequent complaint in an emergency department, and the Fachsprachprüfung expects every dimension of it — asked in plain German, written down in technical German.</p>
<table><tr><th>Dimension</th><th>Your question</th><th>The patient says</th><th>You write</th></tr>
<tr><td>Lokalisation</td><td class="de">Wo genau tut es weh? Können Sie mit einem Finger darauf zeigen?</td><td class="de">Hier, rechts unten im Bauch.</td><td class="de">Schmerzen im rechten Unterbauch</td></tr>
<tr><td>Ausstrahlung</td><td class="de">Strahlen die Schmerzen irgendwohin aus?</td><td class="de">Das zieht bis in den Rücken.</td><td class="de">Ausstrahlung in den Rücken</td></tr>
<tr><td>Qualität</td><td class="de">Wie fühlt sich der Schmerz an? Können Sie ihn beschreiben?</td><td class="de">Es sticht. / Es drückt.</td><td class="de">stechend / drückend</td></tr>
<tr><td>Stärke</td><td class="de">Wie stark sind die Schmerzen auf einer Skala von null bis zehn?</td><td class="de">Sieben bis acht.</td><td class="de">Schmerzintensität 7–8/10</td></tr>
<tr><td>Beginn</td><td class="de">Seit wann haben Sie die Schmerzen? Kamen sie plötzlich oder langsam?</td><td class="de">Ganz plötzlich. / Das kam nach und nach.</td><td class="de">schlagartig einsetzend / schleichend beginnend</td></tr>
<tr><td>Verlauf</td><td class="de">Sind die Schmerzen die ganze Zeit da, oder kommen und gehen sie?</td><td class="de">Das kommt in Wellen. / Es wird immer schlimmer.</td><td class="de">kolikartig, wellenförmig / anhaltend / zunehmend</td></tr>
<tr><td>Auslöser</td><td class="de">Gibt es etwas, was die Schmerzen auslöst oder verstärkt?</td><td class="de">Immer wenn ich die Treppe hochgehe.</td><td class="de">belastungsabhängig</td></tr>
<tr><td>Linderung</td><td class="de">Gibt es etwas, was die Schmerzen besser macht?</td><td class="de">Wenn ich mich hinsetze, wird es besser.</td><td class="de">Besserung in Ruhe</td></tr>
<tr><td>Begleitsymptome</td><td class="de">Haben Sie außerdem noch andere Beschwerden bemerkt?</td><td class="de">Mir ist auch schlecht.</td><td class="de">begleitend Übelkeit</td></tr>
<tr><td>Vorgeschichte</td><td class="de">Hatten Sie solche Schmerzen schon einmal?</td><td class="de">Nein, so etwas hatte ich noch nie.</td><td class="de">erstmalig aufgetreten</td></tr></table>
<p><b>The quality words</b> are present participles: verb + d + adjective ending.</p>
<table><tr><th>The patient says</th><th>You write</th></tr>
<tr><td class="de">Es sticht wie ein Messer.</td><td class="de">stechend</td></tr>
<tr><td class="de">Es drückt, wie ein Stein auf der Brust.</td><td class="de">drückend</td></tr>
<tr><td class="de">Es brennt.</td><td class="de">brennend</td></tr>
<tr><td class="de">Es zieht.</td><td class="de">ziehend</td></tr>
<tr><td class="de">Es pocht. / Es klopft.</td><td class="de">pochend, pulsierend</td></tr>
<tr><td class="de">Es bohrt.</td><td class="de">bohrend</td></tr>
<tr><td class="de">Es reißt, als würde etwas zerreißen.</td><td class="de">reißend</td></tr>
<tr><td class="de">Es krampft; es kommt und geht.</td><td class="de">krampfartig, kolikartig</td></tr>
<tr><td class="de">Tief innen, schwer zu sagen wo.</td><td class="de">dumpf</td></tr>
<tr><td class="de">Es schießt ein, wie ein Stromschlag.</td><td class="de">einschießend</td></tr></table>
<p><b>Endings:</b> <span class="de">stechend<b>e</b> Schmerzen · ein drückend<b>er</b> Schmerz · mit brennend<b>en</b> Schmerzen.</span></p>
<p><b>What it depends on:</b> noun (+ s) + <span class="de">abhängig</span>: <span class="de">belastung<b>s</b>abhängig · bewegung<b>s</b>abhängig · nahrung<b>s</b>abhängig · atemabhängig · lageabhängig.</span></p>
<p><b>The verbs:</b> <span class="de">ausstrahlen <b>in</b> + A (Der Schmerz strahlt in den linken Arm aus.) · auftreten · einsetzen · zunehmen · nachlassen · abklingen · sich bessern · sich verschlechtern · lindern · auslösen.</span></p>
<p><b>In the presentation:</b> <span class="de">Der Patient klagt über seit drei Stunden bestehende, drückende Schmerzen hinter dem Brustbein mit Ausstrahlung in den linken Arm. Die Schmerzintensität wird mit 8 von 10 angegeben. Die Beschwerden seien schlagartig in Ruhe aufgetreten.</span></p>`,
 merke:"Wo? Wohin? Wie? Wie stark? Seit wann? Wie verläuft es? Was macht es schlimmer, was besser? — Patient: Es sticht. Brief: stechende Schmerzen.",
 ex:[{type:"mc",q:"„Das kommt und geht in Wellen, wie ein Krampf.“ → Im Arztbrief:",o:["dumpfer Dauerschmerz","brennende Schmerzen","kolikartige Schmerzen"],a:2,why:"Pain that comes in waves is kolikartig."},
 {type:"mc",q:"Die Schmerzen strahlen ___ aus.",o:["in den linken Arm","zum linken Arm","im linken Arm"],a:0,why:"ausstrahlen in + accusative (direction)."},
 {type:"mc",q:"„Immer wenn ich Treppen steige.“ → Die Schmerzen sind …",o:["lageabhängig","belastungsabhängig","atemabhängig"],a:1,why:"Pain on exertion is belastungsabhängig."},
 {type:"mc",q:"Welche Frage fragt nach der Linderung?",o:["Wohin strahlen die Schmerzen aus?","Seit wann haben Sie die Schmerzen?","Gibt es etwas, was die Schmerzen besser macht?"],a:2,why:"Linderung = relief: what makes it better?"},
 {type:"gap",q:"Wie stark sind die Schmerzen auf einer ___ von null bis zehn?",a:"Skala",alt:[],why:"auf einer Skala von null bis zehn."},
 {type:"gap",q:"Der Patient klagt über ___ Schmerzen hinter dem Brustbein. (drücken, Partizip I)",a:"drückende",alt:[],why:"drücken + d + ending -e (accusative plural, no article)."},
 {type:"order",words:["Strahlen","die","Schmerzen","in","den","Rücken","aus","?"],a:"Strahlen die Schmerzen in den Rücken aus?",why:"Yes/no question: verb first; the prefix aus goes to the end."},
 {type:"fix",q:"Die Schmerzen sind plötzlich aufgetreten und strahlen in dem Rücken aus.",a:"Die Schmerzen sind plötzlich aufgetreten und strahlen in den Rücken aus.",err:"in dem Rücken",why:"ausstrahlen is a direction → in + accusative: in den Rücken."},
 {type:"transform",q:"Satzbau (Präsens, Frage): die Schmerzen / beim / Einatmen / stärker / werden / ?",a:"Werden die Schmerzen beim Einatmen stärker?",alt:[],why:"Yes/no question: verb first; stärker stands at the end."},
 {type:"transform",q:"In die Briefsprache (ohne Verb): Der Schmerz hat plötzlich angefangen und zieht in den linken Arm.",a:"Schlagartig einsetzender Schmerz mit Ausstrahlung in den linken Arm.",alt:["Plötzlich einsetzender Schmerz mit Ausstrahlung in den linken Arm.","Akut einsetzender Schmerz mit Ausstrahlung in den linken Arm.","Schlagartig einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Plötzlich einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Akut einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Plötzlich aufgetretener Schmerz mit Ausstrahlung in den linken Arm.","Schlagartig aufgetretener Schmerz mit Ausstrahlung in den linken Arm.","Plötzlicher Schmerzbeginn mit Ausstrahlung in den linken Arm."],why:"The verbs become a participle (einsetzend) and a noun (Ausstrahlung)."}]},
{id:"g83",level:"C1",week:38,title:"Die Fallvorstellung",sub:"Der Patient berichtet, er habe … — the spoken case presentation and the examiner's questions",
 body:`<p>In the third part of the Fachsprachprüfung you present your patient to a senior doctor. The order is fixed, and each step has its own grammar.</p>
<table><tr><th>Step</th><th>Sentence frame</th><th>Grammar</th></tr>
<tr><td>1 · Person and reason</td><td class="de">Ich möchte Ihnen Herrn Weber vorstellen, einen 58-jährigen Patienten, der sich heute wegen seit drei Stunden bestehender Brustschmerzen bei uns vorgestellt hat.</td><td>apposition in the same case (<span class="de">Herrn Weber, einen … Patienten</span>); wegen + genitive</td></tr>
<tr><td>2 · Present complaint</td><td class="de">Der Patient berichtet, die Schmerzen seien plötzlich in Ruhe aufgetreten. Er gibt an, ihm sei übel gewesen.</td><td>Konjunktiv I</td></tr>
<tr><td>3 · What he denied</td><td class="de">Fieber, Husten und Luftnot wurden verneint.</td><td>passive</td></tr>
<tr><td>4 · Vegetative history</td><td class="de">Die vegetative Anamnese sei bis auf eine Nykturie unauffällig.</td><td>Konjunktiv I</td></tr>
<tr><td>5 · Past history</td><td class="de">An Vorerkrankungen seien eine arterielle Hypertonie und ein Diabetes mellitus Typ 2 bekannt.</td><td>Konjunktiv I, plural <span class="de">seien</span></td></tr>
<tr><td>6 · Drugs and allergies</td><td class="de">Er nehme regelmäßig Ramipril und Metformin ein. Allergien seien nicht bekannt.</td><td>Konjunktiv I</td></tr>
<tr><td>7 · Noxae</td><td class="de">Der Patient rauche seit 30 Jahren etwa eine Schachtel pro Tag; Alkohol trinke er gelegentlich.</td><td>Konjunktiv I</td></tr>
<tr><td>8 · Family and social</td><td class="de">Der Vater sei mit 60 Jahren an einem Herzinfarkt verstorben. Der Patient sei verheiratet und arbeite als Busfahrer.</td><td>Konjunktiv I</td></tr>
<tr><td>9 · Your suspicion</td><td class="de">Die Angaben deuten am ehesten auf ein akutes Koronarsyndrom hin. · Ich gehe von einem akuten Koronarsyndrom aus.</td><td><b>Indikativ</b> — this is your own judgement</td></tr>
<tr><td>10 · Differential diagnoses</td><td class="de">Differenzialdiagnostisch kommen eine Lungenembolie und eine Aortendissektion in Betracht.</td><td>Indikativ</td></tr>
<tr><td>11 · Plan</td><td class="de">Zur weiteren Abklärung würde ich ein EKG schreiben und das Troponin bestimmen. Sollte sich der Verdacht bestätigen, würde ich den Patienten in die Kardiologie verlegen.</td><td>Konjunktiv II (proposal); <span class="de">sollte</span>-condition</td></tr></table>
<p><b>The switch:</b> what the patient <i>said</i> → Konjunktiv I (<span class="de">er habe, sie sei, er nehme</span>). What you <i>think</i> → Indikativ. What you <i>propose</i> → <span class="de">würde</span>. Where Konjunktiv I looks like the indicative (most plural forms), use <span class="de">würden</span> + infinitive or Konjunktiv II: <span class="de">Die Schmerzen <b>würden</b> in den Arm ausstrahlen.</span></p>
<p><b>The examiner's questions</b></p>
<table><tr><th>Question</th><th>How to begin your answer</th></tr>
<tr><td class="de">Was verstehen Sie unter einer Synkope?</td><td class="de">Unter einer Synkope versteht man …</td></tr>
<tr><td class="de">Woran denken Sie differenzialdiagnostisch?</td><td class="de">In erster Linie denke ich an …, außerdem an …</td></tr>
<tr><td class="de">Welche Untersuchung ordnen Sie an, und warum?</td><td class="de">Zunächst würde ich … veranlassen, um … auszuschließen.</td></tr>
<tr><td class="de">Wie erklären Sie das dem Patienten?</td><td>change to plain German: <span class="de">Das Herz bekommt zu wenig Blut.</span></td></tr></table>
<p><b>When you need a moment:</b> <span class="de">Darf ich kurz überlegen? · Wenn ich Sie richtig verstehe, fragen Sie nach … · Da bin ich mir nicht sicher; das würde ich nachschlagen.</span></p>`,
 merke:"Patient sagt → Konjunktiv I (er habe, sie sei). Ich denke → Indikativ. Ich schlage vor → würde. Verneintes → wurde verneint.",
 ex:[{type:"mc",q:"Die Patientin berichtet, die Schmerzen ___ plötzlich aufgetreten. (Konjunktiv I)",o:["sind","seien","waren"],a:1,why:"Reported speech, plural of sein: seien."},
 {type:"mc",q:"Ich möchte Ihnen Frau Keller vorstellen, ___.",o:["einer 72-jährigen Patientin","eine 72-jährige Patientin","einen 72-jährigen Patient"],a:1,why:"The apposition takes the case of Frau Keller: accusative feminine."},
 {type:"mc",q:"Ihre eigene Verdachtsdiagnose steht im …",o:["Indikativ: Ich gehe von einer Pneumonie aus.","Imperativ: Gehen Sie von einer Pneumonie aus!","Konjunktiv I: Es handle sich um eine Pneumonie."],a:0,why:"Your own judgement is a statement, not reported speech: Indikativ."},
 {type:"mc",q:"Die Frage nach Vorerkrankungen ___.",o:["wurde verneinen","hat verneint","wurde verneint"],a:2,why:"Passive: wurde + Partizip II."},
 {type:"gap",q:"An Vorerkrankungen ___ ein Diabetes mellitus bekannt. (sein, Konjunktiv I)",a:"sei",alt:[],why:"Singular subject (ein Diabetes) → sei."},
 {type:"gap",q:"Differenzialdiagnostisch kommt eine Lungenembolie in ___.",a:"Betracht",alt:["Frage"],why:"in Betracht kommen = to be a possibility."},
 {type:"order",words:["Zur","weiteren","Abklärung","würde","ich","ein","EKG","schreiben","."],a:"Zur weiteren Abklärung würde ich ein EKG schreiben.",alt:["Ich würde zur weiteren Abklärung ein EKG schreiben."],why:"The phrase fills position 1; würde second; the infinitive last."},
 {type:"fix",q:"Der Patient berichtet, er nimmt keine Medikamente ein.",a:"Der Patient berichtet, er nehme keine Medikamente ein.",err:"nimmt",why:"What the patient says stands in Konjunktiv I: er nehme."},
 {type:"transform",q:"Satzbau (indirekte Rede, Konjunktiv I): die Patientin / berichten / , / sie / seit zwei Tagen / Durchfall / haben",a:"Die Patientin berichtet, sie habe seit zwei Tagen Durchfall.",alt:["Die Patientin berichtet, dass sie seit zwei Tagen Durchfall habe."],why:"haben → sie habe; without dass the verb stays in second position."},
 {type:"transform",q:"Auf Deutsch (Konjunktiv I): Allergies are not known.",a:"Allergien seien nicht bekannt.",alt:["Allergien seien keine bekannt.","Es seien keine Allergien bekannt."],why:"Plural of sein in Konjunktiv I: seien."}]}
);
// ===== g84–g98: the remaining gaps from the linguist's coverage lists (round 8), written by builder L2. Same format.
GRAMMAR3.push(
{id:"g84",level:"A2",week:9,title:"Wortakzent, lange und kurze Vokale",sub:"ANrufen but verSTEhen · Staat or Stadt · why Bad ends in t",
 body:`<p>Three habits decide whether a German understands you at once: where the <b>stress</b> falls, whether the vowel is <b>long or short</b>, and what happens to the <b>last consonant</b>. Tap the words and say them aloud.</p>
<p><b>1 · Word stress</b></p>
<table><tr><th>Rule</th><th>Examples (stressed syllable in capitals)</th></tr>
<tr><td>German words: the first syllable of the stem</td><td class="de"><span data-say="Schmerzen, Fieber, Arbeit, Antwort">SCHMERzen · FIEber · ARbeit · ANTwort</span></td></tr>
<tr><td>Compounds: the first part</td><td class="de"><span data-say="Blutdruck, Krankenhaus, Notaufnahme">BLUTdruck · KRANkenhaus · NOTaufnahme</span></td></tr>
<tr><td>Separable prefix: stressed</td><td class="de"><span data-say="anrufen, aufstehen, einatmen, mitkommen">ANrufen · AUFstehen · EINatmen · MITkommen</span></td></tr>
<tr><td>be-, ge-, er-, ver-, zer-, ent-, emp-: never stressed</td><td class="de"><span data-say="verstehen, bekommen, entlassen, Gesicht">verSTEhen · beKOMmen · entLASsen · geSICHT</span></td></tr>
<tr><td>Verbs in -ieren: on -ier-</td><td class="de"><span data-say="operieren, studieren, telefonieren">opeRIEren · stuDIEren · telefoNIEren</span></td></tr>
<tr><td>Loanwords in -tion, -ität, -ie, -ent, -ant, -ist, -ur, -ös, -ell: on the ending</td><td class="de"><span data-say="Operation, Qualität, Therapie, Patient, Assistent, Spezialist, Temperatur, nervös, aktuell">OperaTION · QualiTÄT · TheraPIE · PatiENT · AssisTENT · SpeziaLIST · TemperaTUR · nerVÖS · aktuELL</span></td></tr>
<tr><td>Medical words that learners get wrong</td><td class="de"><span data-say="Anamnese, Diagnose, Katheter, Symptom, Infarkt, Thrombose, Pneumonie, Allergie, Diabetes, Ödem">AnamNEse · DiaGNOse · KaTHEter · SympTOM · InFARKT · ThromBOse · PneumoNIE · AllerGIE · DiaBEtes · ÖDEM</span></td></tr>
<tr><td>-ie without stress (two sounds: i-e)</td><td class="de"><span data-say="Familie, Arterie, Bakterie, Studie">FaMIlie · ArTErie · BakTErie · STUdie</span></td></tr></table>
<p>Stress can change the meaning. <span class="de" data-say="umfahren">UMfahren</span> (separable) = to knock down: <span class="de">Der Bus fährt das Schild um.</span> <span class="de" data-say="umfahren">umFAHren</span> (inseparable) = to drive around: <span class="de">Wir umfahren die Baustelle.</span> You hear the grammar: a stressed prefix splits off.</p>
<p><b>2 · Long or short vowel</b> — the spelling tells you.</p>
<table><tr><th>Long</th><th>Short</th></tr>
<tr><td>double vowel: <span class="de">Staat, Tee, Boot</span><br>vowel + h: <span class="de">Zahl, fühlen, Sohn</span><br>ie: <span class="de">Miete, Fieber</span><br>before one consonant or ß: <span class="de">Tag, Weg, Blut, Fuß</span></td><td>before a double consonant: <span class="de">Mitte, Bett, kommen, füllen</span><br>before ck, tz: <span class="de">Rücken, Spritze</span><br>before two or more consonants: <span class="de">Hand, Kind, Stadt, Wurst</span></td></tr></table>
<p>Pairs that patients will not forgive: <span class="de"><span data-say="Staat, Stadt">Staat – Stadt</span> · <span data-say="Miete, Mitte">Miete – Mitte</span> · <span data-say="Ofen, offen">Ofen – offen</span> · <span data-say="fühlen, füllen">fühlen – füllen</span> · <span data-say="Höhle, Hölle">Höhle – Hölle</span> · <span data-say="Beet, Bett">Beet – Bett</span> · <span data-say="ihn, in">ihn – in</span> · <span data-say="Wahl, Wall">Wahl – Wall</span></span></p>
<p><b>3 · The end of the word</b></p>
<ul><li>Final b, d, g are spoken p, t, k: <span class="de" data-say="Bad, Tag, Kind, halb">Bad · Tag · Kind · halb</span> — but inside the word they are soft again: <span class="de" data-say="Bäder, Tage, Kinder">Bäder · Tage · Kinder</span>.</li>
<li>Final <b>-ig</b> is spoken like <i>-ich</i>: <span class="de" data-say="wichtig, zwanzig, ruhig">wichtig · zwanzig · ruhig</span>. In the south you will also hear <i>-ik</i>.</li>
<li>Unstressed <b>-er</b> is a short open "a": <span class="de" data-say="Vater, Fieber, aber">Vater · Fieber · aber</span>. Unstressed <b>-en</b> loses its e: <span class="de" data-say="haben, kommen, Rücken">haben · kommen · Rücken</span>.</li></ul>`,
 merke:"Trennbare Vorsilbe = betont: ANrufen. be-, ver-, ent- = nie betont. Doppelkonsonant = kurzer Vokal: Mitte. h, ie, Doppelvokal = lang: Miete.",
 ex:[{type:"mc",q:"Welche Silbe ist in „Anamnese“ betont?",o:["a-nam-NE-se","a-NAM-ne-se","A-nam-ne-se"],a:0,why:"Greek and Latin words in -ese, -ose are stressed on the second-to-last syllable: AnamNEse, DiaGNOse."},
 {type:"mc",q:"„Wir umfahren die Baustelle.“ (drive around) — betont ist:",o:["umFAHren","UMfahren","umfahREN"],a:0,why:"Inseparable verb: the prefix is unstressed, the stem carries the stress. UMfahren (separable) means to knock down."},
 {type:"mc",q:"Welches Wort hat einen langen Vokal?",o:["Mittel","Mitte","Miete"],a:2,why:"ie is always long. Before a double consonant (tt) the vowel is short."},
 {type:"mc",q:"Das „-ig“ in „wichtig“ klingt im Standarddeutschen wie:",o:["-isch","-ich","-ing"],a:1,why:"Final -ig is spoken like -ich: wichtig, zwanzig, ruhig. (In the south you will also hear -ik.)"},
 {type:"gap",q:"Heidelberg ist eine schöne ___. (Staat oder Stadt? — short a)",a:"Stadt",alt:[],why:"Two consonants (dt) after the vowel → short. Double vowel (aa) → long: der Staat."},
 {type:"gap",q:"offen oder Ofen? Die Wunde ist noch ___.",a:"offen",alt:[],why:"offen (short o, double f) = open. der Ofen (long o) = the oven."},
 {type:"order",words:["Rufen","Sie","mich","bitte","morgen","an","."],a:"Rufen Sie mich bitte morgen an.",alt:["Rufen Sie mich morgen bitte an."],why:"anrufen is stressed on an- — and the stressed prefix is the one that splits off and goes to the end."},
 {type:"fix",q:"Ich fülle mich heute nicht wohl.",a:"Ich fühle mich heute nicht wohl.",err:"fülle",why:"fühlen (long ü, written with h) = to feel. füllen (short ü, double l) = to fill."},
 {type:"transform",q:"Perfekt: Wir umfahren die Baustelle. (umFAHren, untrennbar)",a:"Wir haben die Baustelle umfahren.",alt:[],why:"Unstressed prefix = inseparable = participle without ge-: umfahren. (The separable verb would give umgefahren.)"},
 {type:"transform",q:"Plural (das t wird wieder zu d): das Bad",a:"die Bäder",alt:["Bäder"],why:"Bad is spoken with t at the end, but the plural shows the real d: die Bäder."}]},
{id:"g85",level:"A2",week:10,title:"Buchstabieren und Zahlen am Telefon",sub:"A wie Aachen · zwo · Punkt, Bindestrich, at — names, numbers and addresses by ear",
 body:`<p>On the phone nobody sees your lips or your badge. Names, phone numbers and e-mail addresses are spelled out — and you must be able to take them down.</p>
<p><b>The letter names</b> — the ones that differ from English:</p>
<table><tr><th>Letter</th><th>Say</th><th>Trap</th></tr>
<tr><td>A · E · I</td><td class="de" data-say="A, E, I">ah · eh · ih</td><td>German <b>E</b> sounds like English "A", German <b>I</b> like English "E". Most spelling mistakes happen here.</td></tr>
<tr><td>G · H · J · K</td><td class="de" data-say="G, H, J, K">geh · hah · jott · kah</td><td>J = jott, not "dschäi"</td></tr>
<tr><td>Q · R · V · W</td><td class="de" data-say="Q, R, V, W">kuh · err · fau · weh</td><td>V = fau, W = weh</td></tr>
<tr><td>X · Y · Z</td><td class="de" data-say="X, Y, Z">iks · üpsilon · zett</td><td></td></tr>
<tr><td>Ä · Ö · Ü · ß</td><td class="de">A-Umlaut · O-Umlaut · U-Umlaut · Eszett (scharfes S)</td><td></td></tr></table>
<p>Useful: <span class="de">großes A · kleines b · Doppel-L (ll) · mit „ie“ · mit h nach dem a · zusammen / getrennt · mit Bindestrich</span>.</p>
<p><b>Spelling with words.</b> The official table since 2022 uses city names; many people still use the old first names. Understand both, use one consistently.</p>
<table><tr><th></th><th>Since 2022 (cities)</th><th>Older (names) — still heard</th></tr>
<tr><td>A–F</td><td class="de">Aachen · Berlin · Chemnitz · Düsseldorf · Essen · Frankfurt</td><td class="de">Anton · Berta · Cäsar · Dora · Emil · Friedrich</td></tr>
<tr><td>G–L</td><td class="de">Goslar · Hamburg · Ingelheim · Jena · Köln · Leipzig</td><td class="de">Gustav · Heinrich · Ida · Julius · Kaufmann · Ludwig</td></tr>
<tr><td>M–R</td><td class="de">München · Nürnberg · Offenbach · Potsdam · Quickborn · Rostock</td><td class="de">Martha · Nordpol · Otto · Paula · Quelle · Richard</td></tr>
<tr><td>S–Z</td><td class="de">Salzwedel · Tübingen · Unna · Völklingen · Wuppertal · Xanten · Ypsilon · Zwickau</td><td class="de">Samuel / Siegfried · Theodor · Ulrich · Viktor · Wilhelm · Xanthippe · Ypsilon · Zacharias / Zeppelin</td></tr></table>
<p><span class="de">„Mein Name ist Ismail. Ich buchstabiere: I wie Ingelheim, S wie Salzwedel, M wie München, A wie Aachen, I wie Ingelheim, L wie Leipzig.“</span></p>
<p><b>Numbers by ear</b></p>
<ul><li>Phone numbers: digit by digit, or in pairs. <span class="de">0 62 21 – 56 78 = null sechs zwei zwei eins, fünf sechs sieben acht</span> or <span class="de">… sechsundfünfzig achtundsiebzig</span>. Write pairs down only after you have heard both digits: <span class="de">achtundsiebzig</span> = 78.</li>
<li><span class="de">zwei</span> becomes <span class="de"><b>zwo</b></span>, so that it is not heard as <span class="de">drei</span>.</li>
<li><span class="de">die Vorwahl</span> (area code) · <span class="de">die Durchwahl</span> (extension) · <span class="de">die Handynummer</span> · <span class="de">der Piepser / der Funk</span> (pager).</li></ul>
<p><b>E-mail and web addresses:</b> <span class="de">@ = at · . = Punkt · - = Bindestrich (Minus) · _ = Unterstrich · / = Schrägstrich · alles klein · ohne Leerzeichen</span>.<br><span class="de">a.ismail@klinik-hd.de = a Punkt ismail at klinik Bindestrich h d Punkt d e</span></p>
<p><b>Phrases</b>: <span class="de">Wie schreibt man das? · Können Sie das bitte buchstabieren? · Könnten Sie das bitte wiederholen? · Etwas langsamer, bitte. · Ich wiederhole: … · Stimmt das so? · Unter welcher Nummer kann ich Sie erreichen? · Bleiben Sie bitte dran. · Ich verbinde Sie.</span></p>`,
 merke:"E = „eh“, I = „ih“, V = „fau“, W = „weh“, J = „jott“. Am Telefon: zwo statt zwei. @ = at, . = Punkt, - = Bindestrich, _ = Unterstrich.",
 ex:[{type:"mc",q:"Der deutsche Buchstabe „I“ klingt wie englisch:",o:["ay (as in day)","eye","ee (as in see)"],a:2,why:"German I = ih. The German letter that sounds like English \"A\" is E."},
 {type:"mc",q:"Der Buchstabe „V“ heißt:",o:["fau","weh","wie"],a:0,why:"V = fau, W = weh."},
 {type:"mc",q:"Am Telefon sagt man für „zwei“ oft:",o:["zwau","zwie","zwo"],a:2,why:"zwo cannot be confused with drei on a bad line."},
 {type:"mc",q:"Das Zeichen „_“ in einer E-Mail-Adresse heißt:",o:["Bindestrich","Unterstrich","Schrägstrich"],a:1,why:"_ = Unterstrich · - = Bindestrich · / = Schrägstrich."},
 {type:"gap",q:"Können Sie Ihren Namen bitte ___? (spell)",a:"buchstabieren",alt:[],why:"buchstabieren = to spell (der Buchstabe = the letter)."},
 {type:"gap",q:"Neue Buchstabiertafel: „H wie ___“ (große Stadt im Norden)",a:"Hamburg",alt:[],why:"Since 2022 the official table uses city names: H wie Hamburg (older: H wie Heinrich)."},
 {type:"order",words:["Unter","welcher","Nummer","kann","ich","Sie","erreichen","?"],a:"Unter welcher Nummer kann ich Sie erreichen?",why:"Question phrase first (unter welcher Nummer), modal verb second, infinitive last."},
 {type:"fix",q:"Wie schreibt das man?",a:"Wie schreibt man das?",err:"das man",why:"The subject pronoun man stands directly after the verb; the object das follows."},
 {type:"transform",q:"In Worten, Ziffer für Ziffer: 06221",a:"null sechs zwei zwei eins",alt:["null sechs zwo zwo eins","null sechs zwei zwo eins","null sechs zwo zwei eins"],why:"An area code is read digit by digit; zwo for zwei is common on the phone."},
 {type:"transform",q:"Auf Deutsch (Sie): Could you repeat that, please?",a:"Könnten Sie das bitte wiederholen?",alt:["Können Sie das bitte wiederholen?","Könnten Sie das bitte noch einmal sagen?","Können Sie das bitte noch einmal sagen?","Würden Sie das bitte wiederholen?","Könnten Sie das bitte nochmal sagen?","Können Sie das bitte nochmal sagen?"],why:"wiederholen is inseparable here (stress on -ho-): Könnten Sie das bitte wiederholen?"}]},
{id:"g86",level:"B1",week:21,title:"irgend-, einer, keiner, welche",sub:"Haben Sie Tabletten? — Ja, ich habe welche. · irgendwo, irgendwann, irgendwelche",
 body:`<p>When the noun is not repeated, the article word stands alone — and then it needs a full ending.</p>
<table><tr><th></th><th>masc.</th><th>neut.</th><th>fem.</th><th>plural</th></tr>
<tr><td>Nom.</td><td class="de">ein<b>er</b> · kein<b>er</b></td><td class="de">ein<b>s</b> · kein<b>s</b></td><td class="de">eine · keine</td><td class="de">welche · keine</td></tr>
<tr><td>Akk.</td><td class="de">einen · keinen</td><td class="de">ein<b>s</b> · kein<b>s</b></td><td class="de">eine · keine</td><td class="de">welche · keine</td></tr>
<tr><td>Dat.</td><td class="de">einem · keinem</td><td class="de">einem · keinem</td><td class="de">einer · keiner</td><td class="de">welchen · keinen</td></tr></table>
<p><span class="de">Brauchen Sie einen Rollstuhl? — Nein danke, ich habe <b>einen</b>. · Ist hier ein Arzt? — Ja, dort steht <b>einer</b>. · Haben Sie ein Rezept? — Nein, ich habe <b>keins</b>.</span></p>
<p><b>welche</b> replaces a plural or an uncountable noun ("some"): <span class="de">Haben Sie Schmerztabletten zu Hause? — Ja, ich habe <b>welche</b>. · Ist noch Tee da? — Ja, hier ist <b>welcher</b>. · Ich brauche Geld. Hast du <b>welches</b>?</span></p>
<p>The possessives do the same: <span class="de">Ist das Ihr Stift? — Ja, das ist <b>meiner</b>. · Mein Handy ist leer. Kann ich <b>Ihres</b> benutzen?</span></p>
<p><span class="de"><b>einer der</b> … / <b>eine der</b> … / <b>eins der</b> …</span> + genitive plural = one of the …: <span class="de">Das ist einer der häufigsten Fehler. · eine der wichtigsten Fragen · keiner der Patienten</span>.</p>
<p><b>irgend-</b> means "any-, some- … or other": you do not know or do not care which.</p>
<table><tr><th>Word</th><th>Example</th><th>Negative</th></tr>
<tr><td class="de">irgendjemand / irgendwer</td><td class="de">Hat irgendjemand in Ihrer Familie Diabetes?</td><td class="de">niemand</td></tr>
<tr><td class="de">irgendetwas / irgendwas</td><td class="de">Ist Ihnen irgendetwas aufgefallen?</td><td class="de">nichts</td></tr>
<tr><td class="de">irgendwo · irgendwohin · irgendwoher</td><td class="de">Haben Sie irgendwo Schmerzen? · Strahlt der Schmerz irgendwohin aus?</td><td class="de">nirgendwo / nirgends</td></tr>
<tr><td class="de">irgendwann</td><td class="de">Irgendwann in der Nacht bin ich aufgewacht.</td><td class="de">nie</td></tr>
<tr><td class="de">irgendwie</td><td class="de">Mir ist irgendwie komisch.</td><td></td></tr>
<tr><td class="de">irgendein(e) + noun · plural: irgendwelche</td><td class="de">Nehmen Sie irgendwelche Medikamente? · Haben Sie irgendeine Allergie?</td><td class="de">kein(e)</td></tr></table>
<p><b>jemand, niemand</b> may take endings: <span class="de">Ich habe niemand(en) gesehen. · Haben Sie mit jemand(em) gesprochen?</span> <b>man</b> has no other forms; it borrows <span class="de">einen</span> (accusative) and <span class="de">einem</span> (dative): <span class="de">Das Medikament macht <b>einen</b> müde. · Das sagt <b>einem</b> niemand.</span></p>
<p><b>Trap:</b> English "Do you have any?" is not <s class="de">Haben Sie einige?</s> but <span class="de">Haben Sie <b>welche</b>?</span> — and "I don't have one" is <span class="de">Ich habe <b>keinen / keine / keins</b></span>, not <s class="de">nicht einen</s>.</p>`,
 merke:"Allein braucht das Wort die volle Endung: einer, eins, keiner, keins. Plural und Unzählbares: welche. irgend- = egal wer, wo, wann.",
 ex:[{type:"mc",q:"Haben Sie Schmerztabletten zu Hause? — Ja, ich habe ___.",o:["eins","welches","welche"],a:2,why:"A plural noun is replaced by welche."},
 {type:"mc",q:"Brauchen Sie einen Rollstuhl? — Nein danke, ich habe ___.",o:["einen","ein","eins"],a:0,why:"der Rollstuhl, accusative: einen — the same form as the article here."},
 {type:"mc",q:"Nehmen Sie ___ Medikamente?",o:["irgendeine","irgendwelche","irgendwer"],a:1,why:"Before a plural noun: irgendwelche. irgendeine is singular feminine; irgendwer is a person."},
 {type:"mc",q:"___ der drei Patienten hat Fieber. (not one)",o:["Keins","Kein","Keiner"],a:2,why:"Alone, masculine nominative: keiner (der Patient). kein needs a noun after it."},
 {type:"gap",q:"Ist Ihnen ___ aufgefallen? (anything at all)",a:"irgendetwas",alt:["irgendwas","etwas","irgend etwas"],why:"irgendetwas (spoken: irgendwas) = anything at all."},
 {type:"gap",q:"Ist noch Tee da? — Nein, es ist ___ mehr da. (none; der Tee)",a:"keiner",alt:[],why:"der Tee, nominative, standing alone → keiner."},
 {type:"order",words:["Hat","irgendjemand","in","Ihrer","Familie","Diabetes","?"],a:"Hat irgendjemand in Ihrer Familie Diabetes?",alt:["Hat in Ihrer Familie irgendjemand Diabetes?"],why:"Yes/no question: verb first, then the subject irgendjemand."},
 {type:"fix",q:"Ich brauche einen Stift. Hast du ein?",a:"Ich brauche einen Stift. Hast du einen?",err:"ein?",why:"Standing alone, the word needs its full ending: der Stift, accusative → einen."},
 {type:"transform",q:"Antworten Sie mit „welche“: Haben Sie Allergien? — Ja, …",a:"Ja, ich habe welche.",alt:["Ich habe welche.","Ja, ich habe welche"],why:"welche stands for the plural noun Allergien."},
 {type:"transform",q:"Auf Deutsch (Sie): Do you have pain anywhere?",a:"Haben Sie irgendwo Schmerzen?",alt:["Tut Ihnen irgendwo etwas weh?","Tut es Ihnen irgendwo weh?","Tut es irgendwo weh?","Tut Ihnen irgendwo was weh?"],why:"anywhere = irgendwo; it stands in the middle, before the noun."}]},
{id:"g87",level:"B2",week:32,title:"Apposition und Datum",sub:"mit Herrn Weber, dem Oberarzt · am Montag, dem 3. Mai — the explanation takes the same case",
 body:`<p>An <b>apposition</b> is a noun phrase that explains the noun before it. It stands between commas and takes <b>the same case</b> as that noun. English has no case to copy, so this is the classic B2 writing error.</p>
<table><tr><th>Case</th><th>Example</th></tr>
<tr><td>Nom.</td><td class="de">Herr Weber, <b>der Oberarzt</b> der Kardiologie, kommt gleich.</td></tr>
<tr><td>Akk.</td><td class="de">Ich rufe Herrn Weber, <b>den Oberarzt</b> der Kardiologie, an.</td></tr>
<tr><td>Dat.</td><td class="de">Ich habe mit Herrn Weber, <b>dem Oberarzt</b> der Kardiologie, gesprochen.</td></tr>
<tr><td>Gen.</td><td class="de">die Therapie der Patientin, <b>einer 80-jährigen Diabetikerin</b></td></tr></table>
<p>The Arztbrief and the case presentation open with one: <span class="de">Wir berichten über Herrn Karl Weber, <b>einen 58-jährigen Patienten</b>, der sich … vorstellte. · Ich möchte Ihnen Frau Keller vorstellen, <b>eine 72-jährige Patientin</b> mit Luftnot.</span></p>
<p>A title after a name often stands <b>without article</b>; the case is then invisible: <span class="de">Herr Dr. Braun, Chefarzt der Chirurgie, …</span></p>
<p><b>als</b> + noun agrees in the same way: <span class="de">Ich <b>als behandelnder Arzt</b> empfehle … · Sprechen Sie mit ihm <b>als behandelndem Arzt</b>. · Wir kennen sie <b>als zuverlässige Kollegin</b>.</span></p>
<p><b>Dates</b> are appositions too.</p>
<table><tr><th>Pattern</th><th>Example</th></tr>
<tr><td>am + weekday, <b>dem</b> … (dative, the exact form)</td><td class="de">Die Operation ist am Montag, <b>dem</b> 3. Mai.</td></tr>
<tr><td>am + weekday, <b>den</b> … (accusative, also correct)</td><td class="de">Die Operation ist am Montag, <b>den</b> 3. Mai.</td></tr>
<tr><td>Heute ist … (nominative)</td><td class="de">Heute ist Montag, <b>der</b> 3. Mai.</td></tr>
<tr><td>place and date at the top of a letter (accusative)</td><td class="de">Heidelberg, <b>den</b> 03.05.2027</td></tr>
<tr><td>without am (accusative)</td><td class="de">Wir sehen uns Montag, <b>den</b> 3. Mai.</td></tr></table>
<p>Say the ordinal with its ending: <span class="de">am dritten Mai · dem dritten Mai · der dritte Mai</span>.</p>
<p><b>Close apposition</b> — no comma, and the second noun usually stays in the nominative: <span class="de">die Stadt Heidelberg · im Monat Mai · Kollege Braun · ein Glas Wasser · zwei Ampullen Morphin · mit einer Tasse Tee</span>. Names with titles: only the last part takes the genitive -s: <span class="de">Dr. Webers Befund · die Praxis Dr. Müllers</span> — in speech: <span class="de">die Praxis von Dr. Müller</span>.</p>
<p><b>Trap:</b> the nominative is not a neutral form. <s class="de">Ich danke Herrn Weber, der Oberarzt.</s> must be <span class="de">Ich danke Herrn Weber, <b>dem Oberarzt</b>.</span></p>`,
 merke:"Die Apposition steht im gleichen Fall: mit Herrn Weber, dem Oberarzt. über Herrn Weber, einen 58-jährigen Patienten. am Montag, dem 3. Mai.",
 ex:[{type:"mc",q:"Ich habe mit Frau Dr. Nowak, ___, gesprochen.",o:["der Oberärztin","die Oberärztin","den Oberärztin"],a:0,why:"mit + dative; the apposition copies the case: der Oberärztin."},
 {type:"mc",q:"Wir berichten über Herrn Weber, ___.",o:["ein 58-jähriger Patient","einem 58-jährigen Patienten","einen 58-jährigen Patienten"],a:2,why:"berichten über + accusative → the apposition is accusative too: einen 58-jährigen Patienten."},
 {type:"mc",q:"Die Visite ist am Dienstag, ___ 4. Juni.",o:["der","dem","des"],a:1,why:"am Dienstag is dative, so the date follows in the dative: dem 4. Juni. (den 4. Juni is also accepted.)"},
 {type:"mc",q:"Heute ist Freitag, ___ 12. November.",o:["des","dem","der"],a:2,why:"After Heute ist … the weekday and its date are nominative: der 12. November."},
 {type:"gap",q:"Das ist das Büro von Herrn Braun, ___ Chefarzt der Chirurgie. (der)",a:"dem",alt:[],why:"von + dative → the apposition is dative: dem Chefarzt."},
 {type:"gap",q:"die Behandlung der Patientin, ___ 80-jährigen Diabetikerin (eine)",a:"einer",alt:[],why:"der Patientin is genitive → einer 80-jährigen Diabetikerin."},
 {type:"order",words:["Ich","stelle","Ihnen","Frau","Keller",",","unsere","neue","Kollegin",",","vor","."],a:"Ich stelle Ihnen Frau Keller, unsere neue Kollegin, vor.",why:"The apposition stands directly after its noun, between two commas; the prefix vor closes the sentence."},
 {type:"fix",q:"Ich danke Herrn Dr. Weber, der behandelnde Arzt, für den Bericht.",a:"Ich danke Herrn Dr. Weber, dem behandelnden Arzt, für den Bericht.",err:"der behandelnde Arzt",why:"danken + dative: Herrn Dr. Weber — so the apposition is dative: dem behandelnden Arzt."},
 {type:"transform",q:"Mit Apposition verbinden: Wir verlegen Herrn Demir. Er ist ein 70-jähriger Patient mit Pneumonie.",a:"Wir verlegen Herrn Demir, einen 70-jährigen Patienten mit Pneumonie.",alt:[],why:"verlegen + accusative → einen 70-jährigen Patienten (n-declension: Patienten)."},
 {type:"transform",q:"Datum in Worten, mit „am“: Di., 04.06.",a:"am Dienstag, dem vierten Juni",alt:["am Dienstag, den vierten Juni","am Dienstag, dem 4. Juni","am Dienstag, den 4. Juni","am Dienstag, dem vierten Sechsten","am Dienstag, den vierten Sechsten"],why:"am + weekday, then the date as an apposition: dem (or den) vierten Juni."}]},
{id:"g88",level:"B2",week:30,title:"zu …, als dass · Wunschsätze",sub:"Der Befund ist zu unklar, als dass man operieren könnte. · Hätte ich bloß früher angerufen!",
 body:`<p>Two patterns of the unreal that g24 and g64 left open: the consequence that does <b>not</b> happen, and the wish.</p>
<p><b>1 · zu + adjective, als dass + Konjunktiv II</b> — "too … for … to". The als-dass-clause says what is impossible; it contains no nicht.</p>
<table><tr><th>Real</th><th>Unreal consequence</th></tr>
<tr><td class="de">Der Befund ist so unklar, dass man nicht operieren kann.</td><td class="de">Der Befund ist <b>zu</b> unklar, <b>als dass</b> man operieren <b>könnte</b>.</td></tr>
<tr><td class="de">Sie war so schwach, dass sie nicht aufstehen konnte.</td><td class="de">Sie war <b>zu</b> schwach, <b>als dass</b> sie <b>hätte</b> aufstehen <b>können</b>.</td></tr></table>
<p>Same subject in both parts → the short form <b>zu …, um … zu</b>: <span class="de">Er ist zu schwach, <b>um</b> allein auf<b>zu</b>stehen. · Es ist zu früh, <b>um</b> etwas Sicheres <b>zu</b> sagen.</span></p>
<p>Relatives of this pattern: <span class="de"><b>ohne dass</b></span> — <span class="de">Er hat die Klinik verlassen, ohne dass ihn jemand gesehen hätte.</span> (same subject: <span class="de">ohne … zu</span>) · <span class="de"><b>nicht so, dass</b></span> — <span class="de">Es ist nicht so, dass wir keine Zeit hätten.</span></p>
<p><b>2 · Wishes that cannot come true</b> — Konjunktiv II plus one of the particles <b>doch, nur, bloß</b>, and an exclamation mark. Two word orders:</p>
<table><tr><th></th><th>with wenn (verb last)</th><th>verb first</th></tr>
<tr><td>now</td><td class="de">Wenn ich <b>doch</b> mehr Zeit <b>hätte</b>!</td><td class="de"><b>Hätte</b> ich <b>doch</b> mehr Zeit!</td></tr>
<tr><td>now</td><td class="de">Wenn es <b>nur</b> nicht so wehtun <b>würde</b>!</td><td class="de"><b>Würde</b> es <b>nur</b> nicht so wehtun!</td></tr>
<tr><td>past</td><td class="de">Wenn ich <b>bloß</b> früher angerufen <b>hätte</b>!</td><td class="de"><b>Hätte</b> ich <b>bloß</b> früher angerufen!</td></tr>
<tr><td>past</td><td class="de">Wenn ich <b>doch</b> zu Hause geblieben <b>wäre</b>!</td><td class="de"><b>Wäre</b> ich <b>doch</b> zu Hause geblieben!</td></tr></table>
<p>Without the particle the sentence is a condition or a question, not a wish. <span class="de">doch nur</span> and <span class="de">doch bloß</span> may be combined.</p>
<p><b>ich wünschte / ich wollte</b> + Konjunktiv II: <span class="de">Ich wünschte, ich könnte Ihnen etwas anderes sagen. · Ich wünschte, ich hätte bessere Nachrichten für Sie. · Ich wollte, es wäre schon Freitag.</span></p>
<p>At the bedside you hear these from patients and relatives: <span class="de">Wäre ich nur früher zum Arzt gegangen! · Hätten wir ihn bloß nicht allein gelassen!</span> Do not answer the grammar; answer the feeling: <span class="de">Sie konnten das nicht wissen.</span></p>`,
 merke:"zu + Adjektiv, als dass + Konjunktiv II (ohne nicht). Wunsch: Hätte ich doch …! Wäre ich nur …! Wenn ich bloß … hätte!",
 ex:[{type:"mc",q:"Der Befund ist zu unklar, als dass man jetzt operieren ___.",o:["können","könnte","gekonnt"],a:1,why:"als dass + Konjunktiv II: könnte, at the end of the clause."},
 {type:"mc",q:"Er ist zu schwach, ___ allein aufzustehen.",o:["damit","als dass","um"],a:2,why:"Same subject and an infinitive with zu → zu …, um … zu."},
 {type:"mc",q:"Welcher Satz ist ein Wunsch?",o:["Hätte ich früher anrufen sollen?","Hätte ich bloß früher angerufen!","Ich hatte früher angerufen."],a:1,why:"Konjunktiv II + bloß + exclamation mark = a wish about the past."},
 {type:"mc",q:"Wenn ich doch nur mehr Zeit ___!",o:["hätte","habe","hatte"],a:0,why:"A wish needs Konjunktiv II: hätte."},
 {type:"gap",q:"___ ich doch zu Hause geblieben! (sein, Konjunktiv II)",a:"Wäre",alt:[],why:"bleiben forms its perfect with sein → Wäre ich … geblieben!"},
 {type:"gap",q:"Ich wünschte, ich ___ Ihnen etwas anderes sagen. (können, Konjunktiv II)",a:"könnte",alt:[],why:"ich wünschte + Konjunktiv II: könnte."},
 {type:"order",words:["Wenn","es","nur","nicht","so","wehtun","würde","!"],a:"Wenn es nur nicht so wehtun würde!",alt:["Wenn es nur nicht so wehtun würde"],why:"Wish with wenn: the particle nur after the subject, würde at the very end."},
 {type:"fix",q:"Hätte ich bloß früher den Notarzt rufen!",a:"Hätte ich bloß früher den Notarzt gerufen!",err:"rufen",why:"Wish about the past: hätte + Partizip II (gerufen)."},
 {type:"transform",q:"Als Wunsch, Verb zuerst, mit „bloß“: Ich habe die Tabletten nicht genommen.",a:"Hätte ich bloß die Tabletten genommen!",alt:["Hätte ich die Tabletten bloß genommen!","Wenn ich bloß die Tabletten genommen hätte!","Wenn ich die Tabletten bloß genommen hätte!"],why:"The real negative fact becomes a positive wish: Hätte ich … genommen!"},
 {type:"transform",q:"Mit „zu …, als dass“: Die Wunde ist so tief, dass man sie nicht kleben kann.",a:"Die Wunde ist zu tief, als dass man sie kleben könnte.",alt:[],why:"so … dass … nicht → zu …, als dass + Konjunktiv II; nicht disappears."}]},
{id:"g89",level:"B2",week:35,title:"Die vegetative Anamnese",sub:"Appetit, Durst, Gewicht, Schlaf, Stuhlgang, Wasserlassen, Fieber — plain question, lay answer, Fachbegriff",
 body:`<p>After the main complaint every history runs through the body's basic functions. In the Fachsprachprüfung the examiner listens for two things: that you ask in <b>plain, polite German</b>, and that you can name the answer in <b>technical German</b> afterwards.</p>
<table><tr><th>Topic</th><th>Your question</th><th>The patient says</th><th>You write</th></tr>
<tr><td>Appetit</td><td class="de">Wie ist Ihr Appetit? Hat er sich verändert?</td><td class="de">Ich habe gar keinen Hunger mehr.</td><td class="de">Inappetenz, Appetitlosigkeit</td></tr>
<tr><td>Durst</td><td class="de">Trinken Sie mehr als sonst?</td><td class="de">Ich habe ständig Durst.</td><td class="de">Polydipsie</td></tr>
<tr><td>Gewicht</td><td class="de">Hat sich Ihr Gewicht in letzter Zeit verändert? Haben Sie ungewollt ab- oder zugenommen?</td><td class="de">Ich habe fünf Kilo abgenommen, ohne es zu wollen.</td><td class="de">ungewollter Gewichtsverlust von 5 kg in 3 Monaten</td></tr>
<tr><td>Schlaf</td><td class="de">Wie schlafen Sie? Können Sie gut einschlafen und durchschlafen?</td><td class="de">Ich liege stundenlang wach. / Ich wache jede Nacht um drei auf.</td><td class="de">Einschlafstörung / Durchschlafstörung</td></tr>
<tr><td>Stuhlgang</td><td class="de">Wie ist Ihr Stuhlgang? Regelmäßig? Haben Sie Durchfall oder Verstopfung? Ist Ihnen Blut im Stuhl aufgefallen? Welche Farbe hat der Stuhl?</td><td class="de">Ich war seit vier Tagen nicht auf der Toilette. / Der Stuhl ist ganz schwarz.</td><td class="de">Obstipation / Diarrhö / Teerstuhl (Meläna) / Blutbeimengungen</td></tr>
<tr><td>Wasserlassen</td><td class="de">Haben Sie Probleme beim Wasserlassen? Brennt es dabei? Müssen Sie nachts zur Toilette?</td><td class="de">Es brennt beim Wasserlassen. / Ich muss nachts dreimal raus.</td><td class="de">Dysurie / Nykturie (3×) / Pollakisurie</td></tr>
<tr><td>Fieber, Schüttelfrost</td><td class="de">Hatten Sie Fieber? Haben Sie gemessen? Hatten Sie Schüttelfrost?</td><td class="de">Gestern Abend 39. Ich habe am ganzen Körper gezittert.</td><td class="de">Fieber bis 39 °C, Schüttelfrost</td></tr>
<tr><td>Nachtschweiß</td><td class="de">Schwitzen Sie nachts stark — so, dass Sie die Wäsche wechseln müssen?</td><td class="de">Morgens ist alles nass.</td><td class="de">Nachtschweiß</td></tr>
<tr><td>Übelkeit, Erbrechen</td><td class="de">Ist Ihnen übel? Mussten Sie sich übergeben?</td><td class="de">Ich musste zweimal brechen.</td><td class="de">Übelkeit, zweimaliges Erbrechen</td></tr>
<tr><td>Husten, Auswurf</td><td class="de">Haben Sie Husten? Mit Auswurf? Welche Farbe hat er?</td><td class="de">Da kommt gelber Schleim.</td><td class="de">produktiver Husten mit gelblichem Auswurf</td></tr>
<tr><td>Regelblutung</td><td class="de">Wann war Ihre letzte Regelblutung? Könnten Sie schwanger sein?</td><td class="de">Vor zwei Wochen, ganz normal.</td><td class="de">letzte Menstruation vor 2 Wochen, regelmäßiger Zyklus</td></tr></table>
<p><b>The grammar you need</b></p>
<ul><li><b>beim</b> + infinitive as a noun = "when …ing": <span class="de">beim Wasserlassen · beim Schlucken · beim Atmen · beim Treppensteigen</span>.</li>
<li>Separable and reflexive verbs in the Perfekt question: <span class="de">Haben Sie abgenommen? · Hat sich etwas verändert? · Ist Ihnen etwas aufgefallen?</span></li>
<li><span class="de"><b>in letzter Zeit</b></span> (lately) · <span class="de"><b>mehr / öfter als sonst</b></span> (than usual) · <span class="de"><b>ungewollt</b></span> (without trying).</li>
<li>Summing up: <span class="de"><b>bis auf</b> + A</span> = except for; <span class="de"><b>unauffällig</b></span> = nothing abnormal; <span class="de">… <b>wurde verneint</b></span>.</li></ul>
<p>In the letter and the presentation: <span class="de">Die vegetative Anamnese ist bis auf eine Nykturie (2×) und einen ungewollten Gewichtsverlust von 5 kg in 3 Monaten unauffällig. Fieber, Nachtschweiß und Schüttelfrost wurden verneint. Stuhlgang und Miktion seien regelrecht.</span></p>
<p>Fever, night sweats and weight loss together are called <span class="de">B-Symptomatik</span>. Ask all three whenever a tumour or a chronic infection is possible.</p>`,
 merke:"Fragen in einfachem Deutsch: Wasserlassen, Stuhlgang, abgenommen. Schreiben in Fachsprache: Dysurie, Obstipation, Gewichtsverlust. Alles normal: unauffällig.",
 ex:[{type:"mc",q:"„Ich muss nachts dreimal raus.“ → Im Brief:",o:["Nykturie","Dysurie","Diarrhö"],a:0,why:"Passing urine at night = Nykturie. Dysurie = pain on passing urine."},
 {type:"mc",q:"„Der Stuhl ist ganz schwarz.“ → Im Brief:",o:["Inappetenz","Obstipation","Teerstuhl"],a:2,why:"Black stool = Teerstuhl (Meläna). Obstipation = constipation."},
 {type:"mc",q:"Welche Frage ist klar und höflich?",o:["Leiden Sie an Dysurie?","Haben Sie Probleme beim Wasserlassen?","Pinkeln Sie normal?"],a:1,why:"Plain neutral words for the patient: no technical term, no slang."},
 {type:"mc",q:"Haben Sie in letzter Zeit ungewollt ___?",o:["abnehmen","abgenommen","abgenehmt"],a:1,why:"Perfekt of abnehmen: hat abgenommen (strong, ge- in the middle)."},
 {type:"gap",q:"Brennt es ___ Wasserlassen? (bei + dem)",a:"beim",alt:["bei dem"],why:"beim + infinitive as a noun: beim Wasserlassen."},
 {type:"gap",q:"Können Sie gut einschlafen und ___? (sleep through the night)",a:"durchschlafen",alt:[],why:"einschlafen = to fall asleep, durchschlafen = to sleep through."},
 {type:"order",words:["Hat","sich","Ihr","Gewicht","in","letzter","Zeit","verändert","?"],a:"Hat sich Ihr Gewicht in letzter Zeit verändert?",alt:["Hat sich in letzter Zeit Ihr Gewicht verändert?"],why:"sich verändern: sich directly after the verb; the participle closes the question."},
 {type:"fix",q:"Ist Ihnen Blut in den Stuhl aufgefallen?",a:"Ist Ihnen Blut im Stuhl aufgefallen?",err:"in den Stuhl",why:"Wo? → dative: im Stuhl."},
 {type:"transform",q:"In die Briefsprache (ohne Verb): Der Patient hat in drei Monaten fünf Kilo abgenommen, ohne es zu wollen.",a:"Ungewollter Gewichtsverlust von 5 kg in drei Monaten.",alt:["Ungewollter Gewichtsverlust von fünf Kilo in drei Monaten.","Ungewollter Gewichtsverlust von 5 kg in 3 Monaten.","Ungewollter Gewichtsverlust von fünf Kilogramm in drei Monaten.","Ungewollter Gewichtsverlust von 5 Kilo in drei Monaten.","Ungewollter Gewichtsverlust von 5 Kilogramm in drei Monaten.","Ungewollte Gewichtsabnahme von 5 kg in drei Monaten.","Ungewollte Gewichtsabnahme von fünf Kilo in drei Monaten.","Ungewollte Gewichtsabnahme von 5 kg in 3 Monaten."],why:"abnehmen → der Gewichtsverlust; ohne es zu wollen → ungewollt, with the ending -er before a masculine noun."},
 {type:"transform",q:"Auf Deutsch (Sie): Do you sweat heavily at night?",a:"Schwitzen Sie nachts stark?",alt:["Schwitzen Sie in der Nacht stark?","Schwitzen Sie nachts sehr stark?","Schwitzen Sie nachts sehr?","Schwitzen Sie stark in der Nacht?"],why:"Yes/no question: verb first; time (nachts) before manner (stark)."}]},
{id:"g90",level:"B1",week:25,title:"Laiensprache: Zucker, Wasser in den Beinen, Hexenschuss",sub:"What patients really say — and the word you write in the chart",
 body:`<p>Patients do not say <i>Diabetes mellitus</i>. They say <span class="de">Ich habe Zucker.</span> You must understand the everyday word, write the technical one, and then explain your finding in everyday words again.</p>
<table><tr><th>The patient says</th><th>You write</th></tr>
<tr><td class="de">Ich habe Zucker.</td><td class="de">Diabetes mellitus</td></tr>
<tr><td class="de">Ich hab’s am Herzen. / Ich habe es mit dem Herzen.</td><td class="de">kardiale Vorerkrankung (ask which one!)</td></tr>
<tr><td class="de">Ich habe Wasser in den Beinen.</td><td class="de">Beinödeme</td></tr>
<tr><td class="de">Wasser in der Lunge</td><td class="de">Lungenödem / Pleuraerguss</td></tr>
<tr><td class="de">ein offenes Bein</td><td class="de">Ulcus cruris</td></tr>
<tr><td class="de">Ich habe einen Hexenschuss. / Ich hab’s im Kreuz.</td><td class="de">Lumbago, akute Lumbalgie</td></tr>
<tr><td class="de">Er hatte einen Schlag. / (Südwesten:) ein Schlägle</td><td class="de">Schlaganfall (Apoplex) / TIA</td></tr>
<tr><td class="de">Ich bin umgekippt. / Mir wurde schwarz vor Augen.</td><td class="de">Kollaps, Synkope / Präsynkope</td></tr>
<tr><td class="de">Herzstolpern · Herzrasen</td><td class="de">Palpitationen · Tachykardie</td></tr>
<tr><td class="de">Ich habe gebrochen. / Ich musste mich übergeben.</td><td class="de">Erbrechen</td></tr>
<tr><td class="de">Ich habe meine Tage. / die Regel / die Periode</td><td class="de">Menstruation</td></tr>
<tr><td class="de">unten rum</td><td class="de">im Genitalbereich</td></tr>
<tr><td class="de">groß machen · klein machen (bei Kindern)</td><td class="de">Stuhlgang · Wasserlassen</td></tr>
<tr><td class="de">Er macht in die Hose. / Er kann das Wasser nicht halten.</td><td class="de">Inkontinenz</td></tr>
<tr><td class="de">ein blauer Fleck</td><td class="de">Hämatom</td></tr></table>
<table><tr><th>Everyday name</th><th>Technical term</th><th>Everyday name</th><th>Technical term</th></tr>
<tr><td class="de">Bluthochdruck</td><td class="de">arterielle Hypertonie</td><td class="de">Gelbsucht</td><td class="de">Ikterus</td></tr>
<tr><td class="de">Herzschwäche</td><td class="de">Herzinsuffizienz</td><td class="de">Blutvergiftung</td><td class="de">Sepsis</td></tr>
<tr><td class="de">Lungenentzündung</td><td class="de">Pneumonie</td><td class="de">Gürtelrose</td><td class="de">Herpes zoster</td></tr>
<tr><td class="de">Blinddarmentzündung</td><td class="de">Appendizitis</td><td class="de">Schuppenflechte</td><td class="de">Psoriasis</td></tr>
<tr><td class="de">Schaufensterkrankheit</td><td class="de">pAVK</td><td class="de">Grauer Star · Grüner Star</td><td class="de">Katarakt · Glaukom</td></tr>
<tr><td class="de">Blutverdünner</td><td class="de">Antikoagulans</td><td class="de">Wassertablette</td><td class="de">Diuretikum</td></tr></table>
<p><b>The pattern</b> <span class="de">es + haben + an / in / mit + Dativ</span> names the organ, not the disease: <span class="de">Er hat es am Herzen · an der Lunge · im Kreuz · mit dem Magen · mit den Nieren.</span> Note <span class="de">das Herz → am Herz<b>en</b></span>.</p>
<p><b>When you are not sure, ask</b> — nobody minds: <span class="de">Was meinen Sie genau mit „Schlägle“? · Meinen Sie damit, dass Sie bewusstlos waren? · Wie hat sich das geäußert? · Können Sie mir das beschreiben?</span></p>
<p><b>And back again.</b> To the patient: <span class="de">Sie haben eine Lungenentzündung.</span> To the Oberarzt: <span class="de">Der Patient hat eine Pneumonie.</span> A technical word in front of a patient needs its translation: <span class="de">Sie haben ein Hämatom, also einen Bluterguss.</span></p>`,
 merke:"Zucker = Diabetes. Wasser in den Beinen = Ödeme. umgekippt = kollabiert. Zum Patienten: Lungenentzündung. Im Brief: Pneumonie. Im Zweifel: „Was meinen Sie genau mit …?“",
 ex:[{type:"mc",q:"„Ich habe Zucker.“ — Der Patient hat:",o:["Diabetes mellitus","eine Zuckerallergie","Karies"],a:0,why:"Zucker haben is the everyday expression for diabetes."},
 {type:"mc",q:"„Ich hab Wasser in den Beinen.“ → Im Brief:",o:["Varizen","Inkontinenz","Beinödeme"],a:2,why:"Wasser in den Beinen = fluid in the legs: Beinödeme."},
 {type:"mc",q:"„Meine Frau ist gestern in der Küche umgekippt.“ — Sie ist:",o:["kollabiert","gestolpert","eingeschlafen"],a:0,why:"umkippen = to keel over, to collapse. Ask next whether she was unconscious."},
 {type:"mc",q:"Zur Patientin sagen Sie nicht „Ikterus“, sondern:",o:["Gürtelrose","Gelbsucht","Gicht"],a:1,why:"Ikterus = Gelbsucht (jaundice). Gürtelrose = Herpes zoster; Gicht = gout."},
 {type:"gap",q:"Fachbegriff für „Hexenschuss“: die ___",a:"Lumbago",alt:["Lumbalgie"],why:"Hexenschuss = Lumbago (akute Lumbalgie): sudden low back pain."},
 {type:"gap",q:"Alltagswort für „Hämatom“: der blaue ___",a:"Fleck",alt:[],why:"ein blauer Fleck (or: der Bluterguss) = Hämatom."},
 {type:"order",words:["Was","meinen","Sie","genau","mit","„Schlägle“","?"],a:"Was meinen Sie genau mit „Schlägle“?",alt:["Was genau meinen Sie mit „Schlägle“?","Was meinen Sie mit „Schlägle“ genau?"],why:"meinen mit + dative; asking back is the professional move."},
 {type:"fix",q:"Mein Mann hat es an dem Herz.",a:"Mein Mann hat es am Herzen.",err:"an dem Herz",why:"Fixed phrase es am Herzen haben; das Herz takes -en in the dative: am Herzen."},
 {type:"transform",q:"In Fachsprache: Die Patientin hat ein offenes Bein.",a:"Die Patientin hat ein Ulcus cruris.",alt:["Die Patientin hat ein Ulkus cruris.","Bei der Patientin besteht ein Ulcus cruris.","Bei der Patientin besteht ein Ulkus cruris."],why:"ein offenes Bein = Ulcus cruris."},
 {type:"transform",q:"Für den Patienten, ohne Fachwort: Sie haben eine Pneumonie.",a:"Sie haben eine Lungenentzündung.",alt:[],why:"Pneumonie = Lungenentzündung: the patient gets the everyday word."}]},
{id:"g91",level:"B1",week:26,title:"So redet der Südwesten",sub:"Fuß for the whole leg, schaffen for arbeiten, „Ich bin gelegen“ — understand it, write the standard",
 body:`<p>In Heidelberg and the country around it your patients speak the regional German of the south-west — Kurpfälzisch, Badisch, Schwäbisch. Nobody expects you to speak it. But an emergency doctor who misunderstands <span class="de">Fuß</span> examines the wrong part of the body. What follows is what you are likely to hear; how strongly, depends on the person and the village.</p>
<p><b>1 · Words that mean something else</b></p>
<table><tr><th>You hear</th><th>It usually means</th><th>So ask</th></tr>
<tr><td class="de">Mir tut der <b>Fuß</b> weh.</td><td>often the whole leg, up to the hip</td><td class="de">Zeigen Sie mir bitte genau, wo.</td></tr>
<tr><td class="de"><b>Heb</b> mal! · Heben Sie das mal.</td><td class="de">halten, festhalten</td><td>(to lift is <span class="de">lupfen</span>)</td></tr>
<tr><td class="de">Ich <b>schaff</b> beim Bosch. · Ich muss ins Geschäft.</td><td class="de">arbeiten · zur Arbeit</td><td></td></tr>
<tr><td class="de">Ich bin hierher <b>gelaufen</b>.</td><td class="de">zu Fuß gegangen (not: gerannt)</td><td></td></tr>
<tr><td class="de">Er ist <b>gesprungen</b>.</td><td class="de">gerannt</td><td></td></tr>
<tr><td class="de">Das tut <b>arg</b> weh.</td><td class="de">sehr</td><td></td></tr>
<tr><td class="de">…, <b>gell</b>?</td><td class="de">…, nicht wahr?</td><td></td></tr></table>
<p><b>2 · Sounds and small words</b></p>
<table><tr><th>You hear</th><th>Standard</th></tr>
<tr><td class="de">Mir <b>isch</b> schlecht. · Was <b>hasch</b> du?</td><td class="de">ist · hast</td></tr>
<tr><td class="de"><b>Des</b> isch <b>net</b> schlimm.</td><td class="de">Das ist nicht schlimm.</td></tr>
<tr><td class="de"><b>e bissle</b> / e bissl · <b>ebbes</b></td><td class="de">ein bisschen · etwas</td></tr>
<tr><td class="de">Ich kann <b>nimmi</b>.</td><td class="de">Ich kann nicht mehr.</td></tr>
<tr><td class="de">Schlägle · Tablettle · Häusle</td><td>the ending <span class="de">-le</span> = <span class="de">-chen</span> (small)</td></tr>
<tr><td class="de"><b>Grüß Gott</b> · <b>Ade</b></td><td class="de">Guten Tag · Auf Wiedersehen</td></tr></table>
<p><b>3 · Grammar of the south</b></p>
<ul><li><span class="de">Ich <b>bin</b> gelegen / gesessen / gestanden.</span> In the south these three verbs take <span class="de">sein</span>. Understand it; in the exam write <span class="de">Ich habe gelegen.</span></li>
<li>Past events are told in the <b>Perfekt</b> only: <span class="de">Ich bin gestern gestürzt</span>, hardly ever <span class="de">ich stürzte</span>. <span class="de">war</span> and <span class="de">hatte</span> stay.</li>
<li><span class="de"><b>wo</b></span> as the relative pronoun for everything: <span class="de">der Mann, wo gestern da war</span> = <span class="de">der Mann, der gestern da war</span>. Never write it.</li>
<li>Names with the article: <span class="de">Der Herr Weber kommt gleich. · Die Monika hat angerufen.</span> Friendly, not rude.</li>
<li>The time: <span class="de">viertel drei</span> = 2:15, <span class="de">drei viertel drei</span> = 2:45. If an appointment depends on it, ask for the number: <span class="de">Also Viertel nach zwei?</span></li></ul>
<p><b>What to do:</b> answer in standard German, slowly; most people then switch to it. And ask without embarrassment: <span class="de">Entschuldigung, das habe ich nicht verstanden. Können Sie das bitte noch einmal sagen? · Meinen Sie den Fuß oder das ganze Bein?</span></p>`,
 merke:"Fuß kann das ganze Bein sein. heben = halten, schaffen = arbeiten, laufen = gehen. isch = ist, net = nicht, e bissle = ein bisschen. Ich bin gelegen → schreiben: Ich habe gelegen.",
 ex:[{type:"mc",q:"„Mir tut der Fuß weh.“ kann im Südwesten bedeuten:",o:["das ganze Bein","nur die Zehen","die Hand"],a:0,why:"Fuß often covers the whole leg. Let the patient point."},
 {type:"mc",q:"„Ich schaff seit dreißig Jahren beim Bosch.“ — schaffen =",o:["einkaufen","schlafen","arbeiten"],a:2,why:"schaffen is the south-western word for arbeiten."},
 {type:"mc",q:"Im Schwäbischen bedeutet „Heb mal!“ meistens:",o:["Steh mal auf.","Halt das mal fest.","Hör mal zu."],a:1,why:"heben = halten. To lift is lupfen."},
 {type:"mc",q:"„Ich bin zwei Stunden auf dem Boden gelegen.“ — In der Prüfung schreiben Sie:",o:["Ich bin zwei Stunden auf den Boden gelegt.","Ich habe zwei Stunden auf dem Boden gelegen.","Ich war zwei Stunden auf dem Boden liegen."],a:1,why:"Standard German: liegen forms its perfect with haben. The south says bin gelegen."},
 {type:"gap",q:"Standarddeutsch: „Des isch net schlimm.“ = Das ist ___ schlimm.",a:"nicht",alt:[],why:"net (also: ned, nit) = nicht."},
 {type:"gap",q:"Standarddeutsch: „Ich kann nimmi laufen.“ = Ich kann nicht ___ gehen.",a:"mehr",alt:[],why:"nimmi = nicht mehr; laufen = (zu Fuß) gehen."},
 {type:"order",words:["Zeigen","Sie","mir","bitte","genau",",","wo","es","wehtut","."],a:"Zeigen Sie mir bitte genau, wo es wehtut.",alt:["Zeigen Sie mir genau, wo es bitte wehtut.","Bitte zeigen Sie mir genau, wo es wehtut."],why:"Imperative first; in the wo-clause the verb stands last."},
 {type:"fix",q:"Das ist der Patient, wo gestern gestürzt ist.",a:"Das ist der Patient, der gestern gestürzt ist.",err:"wo",why:"In writing the relative pronoun follows the noun: der Patient, der …"},
 {type:"transform",q:"In Standarddeutsch: Mir isch e bissle schwindelig.",a:"Mir ist ein bisschen schwindelig.",alt:["Mir ist ein wenig schwindelig.","Mir ist etwas schwindelig."],why:"isch = ist; e bissle = ein bisschen."},
 {type:"transform",q:"Fragen Sie nach (Sie): nur der Fuß — oder das ganze Bein? Beginnen Sie mit „Meinen Sie …“",a:"Meinen Sie nur den Fuß oder das ganze Bein?",alt:["Meinen Sie den Fuß oder das ganze Bein?","Meinen Sie nur den Fuß, oder das ganze Bein?"],why:"meinen + accusative: den Fuß, das ganze Bein."}]},
{id:"g92",level:"B2",week:33,title:"Aufklärung: Risiko und Häufigkeit",sub:"In seltenen Fällen kann es zu … kommen. · Es besteht das Risiko einer … · Alternativ käme … in Frage.",
 body:`<p>Before every procedure the patient must understand what will happen, what can go wrong and what the alternatives are — and agree. The Aufklärungsgespräch is a fixed text type, and it is tested in the Fachsprachprüfung.</p>
<table><tr><th>Step</th><th>What you say</th><th>Grammar</th></tr>
<tr><td>1 · What and why</td><td class="de">Ich möchte mit Ihnen über die geplante Magenspiegelung sprechen. Wir möchten damit herausfinden, woher die Blutung kommt.</td><td>sprechen über + A</td></tr>
<tr><td>2 · How it goes</td><td class="de">Zuerst bekommen Sie ein Beruhigungsmittel. Dann wird ein dünner Schlauch durch den Mund eingeführt. Dabei können kleine Gewebeproben entnommen werden. Das Ganze dauert etwa zehn Minuten.</td><td>passive: wird eingeführt, werden entnommen</td></tr>
<tr><td>3 · Risks</td><td class="de">Die Untersuchung ist sehr sicher. Wie bei jedem Eingriff gibt es aber Risiken. In seltenen Fällen kann es zu einer Nachblutung kommen. Sehr selten kommt es zu einer Verletzung der Speiseröhre. Es besteht außerdem das Risiko einer allergischen Reaktion.</td><td>es kann zu + D kommen · es besteht das Risiko + G</td></tr>
<tr><td>4 · Alternatives</td><td class="de">Alternativ käme eine Röntgenuntersuchung in Frage. Sie wäre aber weniger genau.</td><td>Konjunktiv II: käme, wäre</td></tr>
<tr><td>5 · Before and after</td><td class="de">Sie müssen nüchtern sein, das heißt: ab Mitternacht nichts essen und nichts trinken. Nach der Untersuchung dürfen Sie 24 Stunden lang nicht Auto fahren.</td><td>müssen · nicht dürfen</td></tr>
<tr><td>6 · Questions and consent</td><td class="de">Haben Sie dazu noch Fragen? Haben Sie alles verstanden? Wenn Sie einverstanden sind, unterschreiben Sie bitte hier. Sie können Ihre Einwilligung jederzeit widerrufen.</td><td>einverstanden mit + D</td></tr></table>
<p><b>How often is "selten"?</b> In package leaflets and consent forms the frequency words have fixed meanings:</p>
<table><tr><th>Word</th><th>Means</th></tr>
<tr><td class="de">sehr häufig</td><td>more than 1 in 10</td></tr>
<tr><td class="de">häufig</td><td>1 to 10 in 100</td></tr>
<tr><td class="de">gelegentlich</td><td>1 to 10 in 1,000</td></tr>
<tr><td class="de">selten</td><td>1 to 10 in 10,000</td></tr>
<tr><td class="de">sehr selten</td><td>fewer than 1 in 10,000</td></tr></table>
<p>For the patient, say the number as people: <span class="de">Bei etwa einem von tausend Patienten kommt es zu einer Nachblutung.</span></p>
<p><b>The words</b>: <span class="de">jemanden <b>über</b> etwas aufklären · die Aufklärung · <b>in</b> etwas (A) einwilligen · die Einwilligung · einverstanden sein <b>mit</b> · etwas ablehnen · widerrufen · der Eingriff · die örtliche Betäubung · die Vollnarkose · die Nebenwirkung · die Komplikation · die Nachblutung · die Wundinfektion · die Thrombose · der Aufklärungsbogen</span>.</p>
<p><b>Trap:</b> <span class="de">nüchtern</span> means "with an empty stomach" here — and "sober" elsewhere. Always add what it means: <span class="de">nichts essen, nichts trinken, nicht rauchen</span>.</p>`,
 merke:"Es kann zu einer Nachblutung kommen. Es besteht das Risiko einer Infektion. Alternativ käme … in Frage. gelegentlich = 1 bis 10 von 1000, selten = 1 bis 10 von 10 000.",
 ex:[{type:"mc",q:"In seltenen Fällen kann es ___ einer Nachblutung kommen.",o:["zu","an","mit"],a:0,why:"es kommt zu + dative = something (unwanted) happens."},
 {type:"mc",q:"„Gelegentlich“ bedeutet im Beipackzettel:",o:["1 bis 10 von 100 Behandelten","1 bis 10 von 1 000 Behandelten","mehr als 1 von 10 Behandelten"],a:1,why:"gelegentlich = uncommon: 1 to 10 in 1,000. häufig = 1 to 10 in 100; sehr häufig = more than 1 in 10."},
 {type:"mc",q:"Alternativ ___ eine Behandlung mit Tabletten in Frage.",o:["käme","kämen","gekommen"],a:0,why:"Konjunktiv II for a possibility that is only considered: käme (singular subject: eine Behandlung)."},
 {type:"mc",q:"„Sie müssen morgen früh nüchtern sein.“ bedeutet hier:",o:["ruhig liegen bleiben","keinen Alkohol trinken","nichts essen und nichts trinken"],a:2,why:"nüchtern before a procedure = with an empty stomach. Always spell it out for the patient."},
 {type:"gap",q:"Es besteht das Risiko ___ Wundinfektion. (eine)",a:"einer",alt:[],why:"das Risiko + genitive; feminine: einer Wundinfektion."},
 {type:"gap",q:"Sind Sie mit dem Eingriff ___? (in agreement)",a:"einverstanden",alt:[],why:"einverstanden sein mit + dative."},
 {type:"order",words:["Haben","Sie","dazu","noch","Fragen","?"],a:"Haben Sie dazu noch Fragen?",alt:["Haben Sie noch Fragen dazu?"],why:"dazu = about this; the verb comes first in a yes/no question."},
 {type:"fix",q:"Die Ärztin hat mich für die Risiken aufgeklärt.",a:"Die Ärztin hat mich über die Risiken aufgeklärt.",err:"für",why:"jemanden über etwas aufklären (+ accusative)."},
 {type:"transform",q:"Ins Passiv (Präsens): Wir entnehmen eine Gewebeprobe.",a:"Eine Gewebeprobe wird entnommen.",alt:["Es wird eine Gewebeprobe entnommen."],why:"The object becomes the subject; wird + Partizip II (entnommen)."},
 {type:"transform",q:"Auf Deutsch (Sie): You can withdraw your consent at any time.",a:"Sie können Ihre Einwilligung jederzeit widerrufen.",alt:["Sie können Ihre Einwilligung jederzeit zurückziehen.","Sie können Ihr Einverständnis jederzeit widerrufen.","Sie können Ihr Einverständnis jederzeit zurückziehen.","Sie können jederzeit Ihre Einwilligung widerrufen.","Sie können Ihre Einwilligung jederzeit zurücknehmen."],why:"die Einwilligung widerrufen; widerrufen is inseparable."}]},
{id:"g93",level:"B2",week:34,title:"Schlechte Nachrichten und schwierige Gespräche",sub:"Ich habe leider keine guten Nachrichten. — the warning, the plain word, the silence, the next step",
 body:`<p>No grammar is harder than this conversation, and none matters more. The language is simple on purpose: short sentences, no technical words, no hiding behind the passive.</p>
<table><tr><th>Step</th><th>What you say</th></tr>
<tr><td>1 · Setting</td><td class="de">Setzen wir uns einen Moment. Möchten Sie, dass jemand bei dem Gespräch dabei ist?</td></tr>
<tr><td>2 · What the patient knows</td><td class="de">Was wissen Sie bisher über Ihre Erkrankung? Was hat man Ihnen schon gesagt?</td></tr>
<tr><td>3 · The warning</td><td class="de">Ich habe leider keine guten Nachrichten für Sie. · Die Ergebnisse sind leider nicht so, wie wir gehofft haben.</td></tr>
<tr><td>4 · The plain word</td><td class="de">Die Untersuchung hat gezeigt, dass der Tumor bösartig ist. Es ist Krebs.</td></tr>
<tr><td>5 · Silence, then feelings</td><td class="de">(wait) · Ich sehe, dass Sie das sehr trifft. · Das ist ein Schock, das verstehe ich. · Lassen Sie sich Zeit.</td></tr>
<tr><td>6 · Check</td><td class="de">Ich weiß, das ist sehr viel auf einmal. Was möchten Sie jetzt wissen? · Soll ich etwas noch einmal erklären?</td></tr>
<tr><td>7 · The next step</td><td class="de">Wir lassen Sie damit nicht allein. Als Nächstes besprechen wir, welche Behandlung möglich ist. Morgen komme ich wieder, dann können Sie alle Fragen stellen.</td></tr></table>
<p><b>To relatives after a death</b>: <span class="de">Es tut mir sehr leid, Ihnen sagen zu müssen, dass Ihr Mann heute Nacht verstorben ist. · Wir haben alles versucht, aber wir konnten ihm nicht mehr helfen. · Mein herzliches Beileid. · Möchten Sie ihn noch einmal sehen? · Gibt es jemanden, den wir für Sie anrufen sollen?</span> Say <span class="de">verstorben</span> or <span class="de">gestorben</span> — never a technical word, and no phrase that can be misunderstood (<s class="de">eingeschlafen</s>, <s class="de">von uns gegangen</s>).</p>
<p><b>The angry patient</b>: <span class="de">Ich verstehe, dass Sie verärgert sind. Sie warten schon sehr lange, das tut mir leid. · Ich möchte Ihnen helfen. Lassen Sie uns schauen, was wir jetzt tun können.</span> Name the feeling first, then the next step. No <span class="de">aber</span> after the understanding.</p>
<p><b>The patient who wants to leave</b> (<span class="de">Entlassung gegen ärztlichen Rat</span>): <span class="de">Ich kann Sie nicht zwingen zu bleiben. Aus ärztlicher Sicht rate ich Ihnen aber dringend davon ab. Es besteht die Gefahr, dass sich Ihr Zustand verschlechtert. · Wenn Sie trotzdem gehen möchten, unterschreiben Sie bitte, dass Sie gegen ärztlichen Rat gehen. · Sie können jederzeit wiederkommen.</span></p>
<p><b>The grammar of tact</b></p>
<ul><li><span class="de"><b>leider</b></span> stands early, right after the verb: <span class="de">Ich habe leider …</span></li>
<li><b>dass</b>-clauses after verbs of seeing and understanding: <span class="de">Ich sehe, dass … · Ich verstehe, dass … · Es tut mir leid, dass …</span></li>
<li><span class="de"><b>jemandem zu etwas raten</b></span> — <span class="de"><b>jemandem von etwas abraten</b></span>: <span class="de">Ich rate Ihnen zu der Operation. · Ich rate Ihnen davon ab.</span></li>
<li><span class="de">Es tut <b>mir</b> leid.</span> — dative, always.</li>
<li>Offer, do not order: <span class="de">Möchten Sie …? · Soll ich …? · Wir können …</span></li></ul>`,
 merke:"Erst die Warnung: „Ich habe leider keine guten Nachrichten.“ Dann das klare Wort. Dann schweigen. Gefühl benennen: „Ich sehe, dass Sie das sehr trifft.“ Dann der nächste Schritt.",
 ex:[{type:"mc",q:"Welcher Satz bereitet auf die schlechte Nachricht vor?",o:["Sie haben ein Karzinom.","Ich habe leider keine guten Nachrichten für Sie.","Keine Sorge, das wird schon wieder."],a:1,why:"The warning comes first; it gives the patient a second to prepare. The third sentence would be untrue."},
 {type:"mc",q:"Zu den Angehörigen: „Es tut mir sehr leid. Ihr Vater ist heute Nacht ___.“",o:["verstorben","ex","eingeschlafen"],a:0,why:"verstorben (or gestorben) is clear and respectful. eingeschlafen can be misunderstood; staff jargon is never used with relatives."},
 {type:"mc",q:"Die Patientin sagt nach der Diagnose nichts. Sie …",o:["sagen: „Das ist nicht so schlimm.“","erklären sofort die Chemotherapie.","schweigen auch und warten einen Moment."],a:2,why:"Silence after the plain word is part of the conversation. Information comes when the patient asks."},
 {type:"mc",q:"Aus ärztlicher Sicht rate ich Ihnen dringend ___ ab.",o:["dazu","davon","darüber"],a:1,why:"abraten von → davon. (raten zu → dazu.)"},
 {type:"gap",q:"Mein herzliches ___. (condolences)",a:"Beileid",alt:[],why:"Mein herzliches Beileid. / Mein aufrichtiges Beileid."},
 {type:"gap",q:"Ich verstehe, ___ Sie verärgert sind.",a:"dass",alt:[],why:"verstehen + dass-clause; the verb sind goes to the end."},
 {type:"order",words:["Was","wissen","Sie","bisher","über","Ihre","Erkrankung","?"],a:"Was wissen Sie bisher über Ihre Erkrankung?",alt:["Was wissen Sie über Ihre Erkrankung bisher?"],why:"Start from what the patient already knows; wissen über + accusative."},
 {type:"fix",q:"Es tut mich sehr leid.",a:"Es tut mir sehr leid.",err:"mich",why:"leidtun takes the dative: Es tut mir leid."},
 {type:"transform",q:"Für die Patientin, ohne Fachwort: Der Tumor ist maligne.",a:"Der Tumor ist bösartig.",alt:["Der Tumor ist leider bösartig.","Es ist Krebs.","Es handelt sich um Krebs."],why:"maligne = bösartig. The patient needs the plain word."},
 {type:"transform",q:"Auf Deutsch (Sie): I cannot force you to stay.",a:"Ich kann Sie nicht zwingen zu bleiben.",alt:["Ich kann Sie nicht zum Bleiben zwingen.","Ich kann Sie nicht dazu zwingen zu bleiben.","Ich kann Sie nicht zwingen hierzubleiben.","Ich kann Sie nicht dazu zwingen hierzubleiben.","Ich kann Sie nicht zwingen, hier zu bleiben."],why:"jemanden zwingen + zu + infinitive."}]},
{id:"g94",level:"B2",week:36,title:"Befundsprache: -abhängig, -artig, -bedingt",sub:"belastungsabhängig, kolikartig, fieberfrei, rezeptpflichtig — one word instead of a clause",
 body:`<p>Findings are written in adjectives that pack a whole clause into one word. Each ending has one meaning; learn the ending and you can read — and build — hundreds of them.</p>
<table><tr><th>Ending</th><th>Meaning</th><th>Examples</th></tr>
<tr><td class="de">-abhängig</td><td>depends on, brought on by</td><td class="de">belastungsabhängig · atemabhängig · lageabhängig · bewegungsabhängig · nahrungsabhängig · dosisabhängig</td></tr>
<tr><td class="de">-bedingt</td><td>caused by</td><td class="de">altersbedingt · stressbedingt · schmerzbedingt · krankheitsbedingt · berufsbedingt</td></tr>
<tr><td class="de">-artig</td><td>like, in the manner of</td><td class="de">kolikartig · krampfartig · anfallsartig · grippeartig · schlagartig</td></tr>
<tr><td class="de">-förmig</td><td>in the shape of</td><td class="de">wellenförmig · ringförmig · gürtelförmig · spindelförmig</td></tr>
<tr><td class="de">-pflichtig</td><td>requires (by rule or by need)</td><td class="de">rezeptpflichtig · meldepflichtig · dialysepflichtig · beatmungspflichtig · sauerstoffpflichtig</td></tr>
<tr><td class="de">-bedürftig</td><td>in need of</td><td class="de">pflegebedürftig · hilfsbedürftig · behandlungsbedürftig · kontrollbedürftig</td></tr>
<tr><td class="de">-frei</td><td>without (good)</td><td class="de">fieberfrei · schmerzfrei · beschwerdefrei · rezeptfrei · rezidivfrei</td></tr>
<tr><td class="de">-los</td><td>without</td><td class="de">bewusstlos · komplikationslos · reizlos · erfolglos · schmerzlos</td></tr>
<tr><td class="de">-arm · -reich</td><td>with little · with much</td><td class="de">salzarm · fettarm · symptomarm · eiweißreich · ballaststoffreich</td></tr>
<tr><td class="de">-fähig · -unfähig</td><td>able · unable</td><td class="de">gehfähig · transportfähig · einwilligungsfähig · arbeitsfähig — arbeitsunfähig</td></tr>
<tr><td class="de">-haft</td><td>having the quality</td><td class="de">schmerzhaft · druckschmerzhaft · krampfhaft · krankhaft</td></tr></table>
<p><b>The link.</b> After <span class="de">-ung, -heit, -keit, -ion, -ität</span> the first part takes an <b>s</b>: <span class="de">belastung<b>s</b>abhängig · krankheit<b>s</b>bedingt · komplikation<b>s</b>los · einwilligung<b>s</b>fähig</span>. Also <span class="de">alter<b>s</b>bedingt, beruf<b>s</b>bedingt, anfall<b>s</b>artig</span>. Most other words take nothing: <span class="de">atemabhängig · schmerzfrei · fieberfrei · dosisabhängig</span>.</p>
<p><b>Prefixes from Greek and Latin</b> come in pairs:</p>
<table><tr><th>Pair</th><th>Meaning</th><th>Examples</th></tr>
<tr><td class="de">hyper- / hypo-</td><td>too much / too little</td><td class="de">Hypertonie – Hypotonie · Hyperglykämie – Hypoglykämie</td></tr>
<tr><td class="de">tachy- / brady-</td><td>fast / slow</td><td class="de">Tachykardie – Bradykardie · Tachypnoe</td></tr>
<tr><td class="de">prä- / post-</td><td>before / after</td><td class="de">präoperativ – postoperativ · postprandial</td></tr>
<tr><td class="de">intra- / extra-</td><td>inside / outside</td><td class="de">intravenös · intrakraniell – extrakraniell</td></tr>
<tr><td class="de">a(n)- · dys-</td><td>without · disturbed</td><td class="de">afebril · Anämie · Dysurie · Dyspnoe</td></tr>
<tr><td class="de">sub- · peri-</td><td>under · around</td><td class="de">subkutan · subfebril · perioperativ</td></tr></table>
<p><b>In the sentence.</b> After <span class="de">sein</span> the word has no ending: <span class="de">Die Patientin ist seit gestern fieberfrei. Die Schmerzen sind belastungsabhängig.</span> Before a noun it is an ordinary adjective and takes the ending: <span class="de">kolikartig<b>e</b> Schmerzen · ein beschwerdefrei<b>er</b> Patient · bei belastungsabhängig<b>er</b> Dyspnoe · eine behandlungsbedürftig<b>e</b> Anämie.</span></p>
<p>From clause to word: <span class="de">Schmerzen, die bei Belastung auftreten → belastungsabhängige Schmerzen · ein Medikament, das man nur mit Rezept bekommt → ein rezeptpflichtiges Medikament · ein Patient, der Pflege braucht → ein pflegebedürftiger Patient.</span></p>`,
 merke:"-abhängig = hängt ab von · -bedingt = verursacht durch · -artig = wie · -frei / -los = ohne · -pflichtig = braucht zwingend · -bedürftig = braucht. Nach -ung, -heit, -ion: Fugen-s.",
 ex:[{type:"mc",q:"Schmerzen, die nur beim Einatmen auftreten, sind …",o:["atemartig","atemfrei","atemabhängig"],a:2,why:"-abhängig = depending on: atemabhängige Schmerzen."},
 {type:"mc",q:"Ein Medikament, das man nur mit Rezept bekommt, ist …",o:["rezeptbedürftig","rezeptfrei","rezeptpflichtig"],a:2,why:"-pflichtig = requires: rezeptpflichtig. rezeptfrei is the opposite."},
 {type:"mc",q:"„postoperativ“ bedeutet:",o:["vor der Operation","nach der Operation","während der Operation"],a:1,why:"post- = after; prä- = before; intra- = during / inside."},
 {type:"mc",q:"Der Patient versteht die Aufklärung und kann selbst entscheiden. Er ist …",o:["einwilligungsfähig","einwilligungspflichtig","einwilligungsfrei"],a:0,why:"-fähig = able: einwilligungsfähig = able to give consent."},
 {type:"gap",q:"Sie hat kein Fieber mehr: Die Patientin ist seit gestern ___.",a:"fieberfrei",alt:["afebril"],why:"-frei = without: fieberfrei (technical: afebril)."},
 {type:"gap",q:"Wortbildung: Belastung + abhängig = ___",a:"belastungsabhängig",alt:[],why:"After -ung the linking s is needed: belastungsabhängig."},
 {type:"order",words:["Der","Patient","ist","seit","zwei","Tagen","beschwerdefrei","."],a:"Der Patient ist seit zwei Tagen beschwerdefrei.",alt:["Seit zwei Tagen ist der Patient beschwerdefrei."],why:"After sein the adjective stands at the end and has no ending."},
 {type:"fix",q:"Die Patientin klagt über kolikartig Schmerzen im Oberbauch.",a:"Die Patientin klagt über kolikartige Schmerzen im Oberbauch.",err:"kolikartig",why:"Before a noun the word is an ordinary adjective: accusative plural without article → -e."},
 {type:"transform",q:"Ein Adjektiv statt Relativsatz: eine Erkrankung, die behandelt werden muss → eine …",a:"eine behandlungsbedürftige Erkrankung",alt:["eine behandlungspflichtige Erkrankung"],why:"-bedürftig = in need of; Behandlung + s + bedürftig, with the ending -e after eine."},
 {type:"transform",q:"Gegenteil mit „hypo-“: die Hypertonie",a:"die Hypotonie",alt:["Hypotonie"],why:"hyper- = too much, hypo- = too little: Hypertonie – Hypotonie."}]},
{id:"g95",level:"B1",week:24,title:"Die Medikamentenanamnese",sub:"Welche Medikamente nehmen Sie ein? — forms, doses, and what a „Wassertablette“ is",
 body:`<p>Every admission needs the drug history, and patients rarely know the names. You ask in simple German, you hear everyday words, and you write substance, dose and schedule.</p>
<p><b>The questions</b></p>
<ul><li><span class="de">Nehmen Sie regelmäßig Medikamente ein? Welche?</span></li>
<li><span class="de">Haben Sie einen Medikationsplan oder die Packungen dabei?</span></li>
<li><span class="de">In welcher Dosierung? Wie oft am Tag? Seit wann?</span></li>
<li><span class="de">Wofür — oder wogegen — nehmen Sie das?</span></li>
<li><span class="de">Nehmen Sie auch etwas ohne Rezept, zum Beispiel Schmerzmittel oder pflanzliche Mittel?</span></li>
<li><span class="de">Nehmen Sie etwas zur Blutverdünnung?</span> — never forget this one.</li>
<li><span class="de">Haben Sie Ihre Tabletten heute schon genommen? Vertragen Sie sie gut?</span></li></ul>
<p><b>The forms</b>: <span class="de">die Tablette · die Kapsel · das Dragee · die Brausetablette · die Tropfen (Pl.) · der Saft · das Zäpfchen · die Salbe · die Creme · das Pflaster · die Spritze · die Infusion · das Spray — der Hub, zwei Hübe</span></p>
<p><b>The verbs</b></p>
<table><tr><th>Verb</th><th>Example</th></tr>
<tr><td class="de">einnehmen (trennbar)</td><td class="de">Ich nehme morgens eine Tablette ein. · Haben Sie sie eingenommen?</td></tr>
<tr><td class="de">spritzen · auftragen · inhalieren</td><td class="de">Sie spritzt Insulin. · Tragen Sie die Salbe dünn auf.</td></tr>
<tr><td class="de">verschreiben / verordnen</td><td class="de">Wer hat Ihnen das verschrieben?</td></tr>
<tr><td class="de">vertragen</td><td class="de">Vertragen Sie das Medikament? — Nein, davon wird mir übel.</td></tr>
<tr><td class="de">absetzen ↔ ansetzen</td><td class="de">Der Hausarzt hat das Medikament abgesetzt. (stopped)</td></tr>
<tr><td class="de">umstellen auf + A</td><td class="de">Wir stellen Sie auf ein anderes Präparat um.</td></tr>
<tr><td class="de">die Dosis erhöhen ↔ reduzieren</td><td class="de">Die Dosis wurde auf 10 mg erhöht.</td></tr></table>
<p><b>When</b>: <span class="de">morgens · mittags · abends · zur Nacht · vor / nach / zu den Mahlzeiten · nüchtern · alle acht Stunden · einmal pro Woche · bei Bedarf</span>. Written: <span class="de">1–0–1</span> = one in the morning, none at noon, one in the evening.</p>
<p><span class="de"><b>Dauermedikation</b></span> = taken regularly. <span class="de"><b>Bedarfsmedikation</b></span> = only when needed.</p>
<p><b>What the patient calls it</b></p>
<table><tr><th>Everyday word</th><th>Class</th><th>Everyday word</th><th>Class</th></tr>
<tr><td class="de">Blutverdünner</td><td class="de">Antikoagulans / Thrombozytenaggregationshemmer</td><td class="de">Wassertablette</td><td class="de">Diuretikum</td></tr>
<tr><td class="de">Blutdrucktablette</td><td class="de">Antihypertensivum</td><td class="de">Cholesterinsenker</td><td class="de">Statin</td></tr>
<tr><td class="de">Magenschutz</td><td class="de">Protonenpumpenhemmer</td><td class="de">Zuckertablette</td><td class="de">orales Antidiabetikum</td></tr>
<tr><td class="de">Schmerzmittel</td><td class="de">Analgetikum</td><td class="de">Schlaftablette</td><td class="de">Hypnotikum</td></tr>
<tr><td class="de">Beruhigungsmittel</td><td class="de">Sedativum</td><td class="de">Abführmittel</td><td class="de">Laxans</td></tr>
<tr><td class="de">die Pille</td><td class="de">orales Kontrazeptivum</td><td class="de">Schilddrüsentablette</td><td class="de">Schilddrüsenhormon</td></tr></table>
<p>In the chart: <span class="de">Dauermedikation: Ramipril 5 mg 1–0–0, Metformin 1000 mg 1–0–1. Bedarfsmedikation: Ibuprofen 400 mg bei Schmerzen. Der Patient nehme seit zwei Jahren einen Blutverdünner ein; das Präparat sei ihm nicht bekannt.</span></p>`,
 merke:"Nehmen Sie regelmäßig Medikamente ein? Wofür? Wie oft? Seit wann? — Blutverdünner = Antikoagulans, Wassertablette = Diuretikum, Magenschutz = Protonenpumpenhemmer. absetzen = stoppen.",
 ex:[{type:"mc",q:"„Ich nehme einen Blutverdünner.“ → Im Brief:",o:["Analgetikum","Diuretikum","Antikoagulans"],a:2,why:"Blutverdünner = Antikoagulans (or a platelet inhibitor — ask which)."},
 {type:"mc",q:"Eine „Wassertablette“ ist ein …",o:["Diuretikum","Antibiotikum","Laxans"],a:0,why:"Wassertablette = Diuretikum. Laxans = Abführmittel."},
 {type:"mc",q:"Ibuprofen nur bei Schmerzen — das ist eine …",o:["Dauermedikation","Bedarfsmedikation","Narkose"],a:1,why:"bei Bedarf = when needed → Bedarfsmedikation."},
 {type:"mc",q:"Der Hausarzt hat das Medikament letzte Woche ___. (gestoppt)",o:["angesetzt","abgesetzt","aufgesetzt"],a:1,why:"ein Medikament absetzen = to stop it; ansetzen = to start it."},
 {type:"gap",q:"Nehmen Sie regelmäßig Medikamente ___?",a:"ein",alt:[],why:"einnehmen is separable: the prefix ein closes the question."},
 {type:"gap",q:"Wie viele ___ nehmen Sie von dem Asthmaspray? (der Hub, Plural)",a:"Hübe",alt:[],why:"der Hub → die Hübe (puffs)."},
 {type:"order",words:["Haben","Sie","Ihren","Medikationsplan","dabei","?"],a:"Haben Sie Ihren Medikationsplan dabei?",why:"etwas dabeihaben = to have something with you; dabei stands at the end."},
 {type:"fix",q:"Ich nehme die Tabletten seit zwei Jahre.",a:"Ich nehme die Tabletten seit zwei Jahren.",err:"Jahre",why:"seit + dative; the dative plural adds -n: seit zwei Jahren."},
 {type:"transform",q:"Satzbau (Präsens, Frage, Sie): wogegen / dieses Medikament / nehmen / ?",a:"Wogegen nehmen Sie dieses Medikament?",alt:["Wogegen nehmen Sie dieses Medikament ein?"],why:"Question word first, verb second, then Sie."},
 {type:"transform",q:"Auf Deutsch (Sie): Do you tolerate the tablets well?",a:"Vertragen Sie die Tabletten gut?",alt:["Vertragen Sie die Tabletten?"],why:"vertragen = to tolerate; inseparable."}]},
{id:"g96",level:"A2",week:13,title:"Laborwerte vorlesen",sub:"Das Kalium liegt bei vier Komma zwei Millimol pro Liter. — units, trends and the phone call from the lab",
 body:`<p>The lab calls, the Oberarzt asks, the handover is spoken: lab values are read aloud all day. The rule is simple — say the name, the verb, the number with <span class="de">Komma</span>, and the unit with <span class="de">pro</span>.</p>
<p><span class="de">Das Hb <b>liegt bei</b> acht Komma zwei Gramm <b>pro</b> Deziliter. · Das Kalium <b>beträgt</b> fünf Komma eins Millimol pro Liter. · Das CRP <b>ist</b> fünfundachtzig.</span></p>
<table><tr><th>Written</th><th>Spoken</th></tr>
<tr><td>mg/dl</td><td class="de">Milligramm pro Deziliter</td></tr>
<tr><td>g/dl</td><td class="de">Gramm pro Deziliter</td></tr>
<tr><td>mmol/l</td><td class="de">Millimol pro Liter</td></tr>
<tr><td>µmol/l</td><td class="de">Mikromol pro Liter</td></tr>
<tr><td>U/l</td><td class="de">Units pro Liter / Einheiten pro Liter</td></tr>
<tr><td>ng/ml</td><td class="de">Nanogramm pro Milliliter</td></tr>
<tr><td>/µl</td><td class="de">pro Mikroliter</td></tr>
<tr><td>× 10⁹/l</td><td class="de">mal zehn hoch neun pro Liter</td></tr>
<tr><td>%</td><td class="de">Prozent</td></tr>
<tr><td>mmHg</td><td class="de">Millimeter Quecksilbersäule</td></tr>
<tr><td>/min</td><td class="de">pro Minute</td></tr></table>
<p><b>Numbers.</b> After the comma, read digit by digit: <span class="de">7,35 = sieben Komma drei fünf</span>. Thousands: <span class="de">12 000 = zwölftausend · 250 000 = zweihundertfünfzigtausend</span>. Units stay singular: <span class="de">fünf Millimol, zwei Gramm</span>.</p>
<p><b>Is it normal?</b></p>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td class="de">im Normbereich · normwertig · unauffällig</td><td>normal</td></tr>
<tr><td class="de">erhöht — leicht / deutlich / stark erhöht</td><td>raised — slightly / clearly / markedly</td></tr>
<tr><td class="de">erniedrigt · vermindert</td><td>low</td></tr>
<tr><td class="de">grenzwertig</td><td>borderline</td></tr>
<tr><td class="de">gestiegen · gefallen</td><td>has risen · has fallen</td></tr>
<tr><td class="de">rückläufig · stabil</td><td>going down · unchanged</td></tr></table>
<p><b>Trends</b> take <span class="de">sein</span> and three small prepositions: <span class="de">Das Kreatinin <b>ist von</b> 1,2 <b>auf</b> 2,4 gestiegen.</span> (from … to) · <span class="de">Das Hb ist <b>um</b> zwei Gramm gefallen.</span> (by) · <span class="de">Das CRP <b>liegt</b> jetzt <b>bei</b> 40.</span> (at)</p>
<p><b>The articles</b>: <span class="de">das Hb / das Hämoglobin · das Kalium · das Natrium · das Kreatinin · das CRP · das Troponin · der Blutzucker · der pH-Wert · der Quick · die Leukozyten (Pl.) · die Thrombozyten (Pl.)</span>. Plural values need a plural verb: <span class="de">Die Leukozyten <b>liegen</b> bei zwölftausend.</span></p>
<p><b>On the phone</b>: <span class="de">Labor, guten Tag. Ich habe einen kritischen Wert für Frau Keller auf Station drei: Kalium sechs Komma acht. — Ich wiederhole: Kalium sechs Komma acht, Frau Keller, Station drei. Danke. — Könnten Sie den Wert bitte noch einmal sagen?</span> Always repeat the value back.</p>`,
 merke:"Name + liegt bei + Zahl mit Komma + Einheit mit pro. Von 1,2 auf 2,4 gestiegen. erhöht ↔ erniedrigt · im Normbereich · grenzwertig. Am Telefon: den Wert wiederholen.",
 ex:[{type:"mc",q:"„mg/dl“ liest man:",o:["Milligramm zu Deziliter","Milligramm durch Deziliter","Milligramm pro Deziliter"],a:2,why:"The slash in a unit is spoken pro."},
 {type:"mc",q:"pH 7,35 liest man:",o:["sieben Komma drei fünf","sieben Punkt fünfunddreißig","siebenhundertfünfunddreißig"],a:0,why:"Komma, and the digits after it one by one: drei fünf."},
 {type:"mc",q:"Der Wert ist zu hoch. Er ist …",o:["erhöht","erniedrigt","unauffällig"],a:0,why:"erhöht = raised; erniedrigt = low; unauffällig = normal."},
 {type:"mc",q:"Das Kalium ___ bei 5,1 Millimol pro Liter.",o:["legt","liegt","liegen"],a:1,why:"liegen bei = to be at; das Kalium is singular: liegt."},
 {type:"gap",q:"Das Kreatinin ist von 1,2 ___ 2,4 gestiegen.",a:"auf",alt:[],why:"von … auf = from … to; um = by."},
 {type:"gap",q:"Alle Werte sind normal: Das Labor ist ___. (nothing abnormal)",a:"unauffällig",alt:["normal","normwertig"],why:"unauffällig = without abnormal findings — the standard word in reports."},
 {type:"order",words:["Das","CRP","ist","seit","gestern","deutlich","gefallen","."],a:"Das CRP ist seit gestern deutlich gefallen.",alt:["Das CRP ist deutlich gefallen seit gestern."],why:"fallen forms its perfect with sein; the participle stands at the end."},
 {type:"fix",q:"Das Hb liegt bei acht Punkt zwei.",a:"Das Hb liegt bei acht Komma zwei.",err:"Punkt",why:"German decimals are spoken with Komma."},
 {type:"transform",q:"In Worten: K 4,2 mmol/l → Das Kalium liegt bei …",a:"Das Kalium liegt bei vier Komma zwei Millimol pro Liter.",alt:["vier Komma zwei Millimol pro Liter","Das Kalium liegt bei 4,2 Millimol pro Liter."],why:"Number with Komma, unit with pro; Millimol stays singular."},
 {type:"transform",q:"Satzbau (Perfekt): das Hb / von 12 / auf 8 / fallen",a:"Das Hb ist von 12 auf 8 gefallen.",alt:["Das Hb ist von zwölf auf acht gefallen."],why:"fallen takes sein: ist … gefallen; von … auf gives start and end."}]},
{id:"g97",level:"B2",week:31,title:"Sozial- und Rechtsanamnese",sub:"Leben Sie allein? Wer versorgt Sie? Haben Sie eine Patientenverfügung? — the questions and the words",
 body:`<p>Before a patient can go home you must know how he lives, who helps him and who may decide for him. These questions are personal; ask them calmly and say why: <span class="de">Ich frage das, damit wir Ihre Entlassung gut planen können.</span></p>
<table><tr><th>Topic</th><th>Your question</th><th>You write</th></tr>
<tr><td>Family</td><td class="de">Sind Sie verheiratet? Haben Sie Kinder? Leben Sie allein oder mit jemandem zusammen?</td><td class="de">ledig · verheiratet · geschieden · verwitwet · alleinlebend</td></tr>
<tr><td>Work</td><td class="de">Was machen Sie beruflich? Sind Sie noch berufstätig?</td><td class="de">berufstätig · arbeitssuchend · berentet · arbeitsunfähig (krankgeschrieben)</td></tr>
<tr><td>Home</td><td class="de">Wohnen Sie im Erdgeschoss, oder müssen Sie Treppen steigen? Gibt es einen Aufzug?</td><td class="de">Wohnung im 2. Stock ohne Aufzug</td></tr>
<tr><td>Help</td><td class="de">Kommen Sie zu Hause allein zurecht? Wer hilft Ihnen im Haushalt? Kommt ein Pflegedienst zu Ihnen?</td><td class="de">selbstständig · ambulanter Pflegedienst 1× täglich · Versorgung durch die Tochter</td></tr>
<tr><td>Care level</td><td class="de">Haben Sie einen Pflegegrad?</td><td class="de">Pflegegrad 2</td></tr>
<tr><td>Who decides</td><td class="de">Haben Sie eine Patientenverfügung oder eine Vorsorgevollmacht? Haben Sie einen gesetzlichen Betreuer?</td><td class="de">Patientenverfügung liegt vor · Tochter bevollmächtigt · gesetzliche Betreuung</td></tr>
<tr><td>Contact</td><td class="de">Wen sollen wir im Notfall benachrichtigen? Dürfen wir Ihre Angehörigen informieren?</td><td class="de">Angehörige: Tochter, Tel. …</td></tr></table>
<p><b>Three documents that are not the same</b></p>
<table><tr><th>Word</th><th>What it is</th></tr>
<tr><td class="de">die Patientenverfügung</td><td>the patient's own written wishes about treatment, for the time when he can no longer decide</td></tr>
<tr><td class="de">die Vorsorgevollmacht</td><td>the patient names a person he trusts to decide for him: <span class="de">der / die Bevollmächtigte</span></td></tr>
<tr><td class="de">die gesetzliche Betreuung</td><td>a court names a person: <span class="de">der gesetzliche Betreuer / die gesetzliche Betreuerin</span></td></tr></table>
<p><b>More words</b>: <span class="de">die Einwilligungsfähigkeit · einwilligungsfähig · die Schweigepflicht — jemanden von der Schweigepflicht entbinden · die Angehörigen (Pl.) · der Lebensgefährte / die Lebensgefährtin · das Pflegeheim · das betreute Wohnen · die Kurzzeitpflege · der Hausnotruf · der Sozialdienst</span>.</p>
<p><b>Grammar notes</b></p>
<ul><li><span class="de"><b>zurechtkommen</b></span> is separable: <span class="de">Kommen Sie allein zurecht? — Ja, ich komme gut zurecht.</span></li>
<li>Many of these nouns are adjectives in disguise and decline: <span class="de">der Angehörig<b>e</b>, ein Angehörig<b>er</b>, die Angehörig<b>en</b> · der Bevollmächtigt<b>e</b>, eine Bevollmächtigt<b>e</b></span>.</li>
<li><span class="de"><b>Wen</b> sollen wir benachrichtigen?</span> (accusative) — <span class="de"><b>Wem</b> dürfen wir Auskunft geben?</span> (dative).</li>
<li>In the letter the patient's statements stand in Konjunktiv I: <span class="de">Der Patient lebe allein und sei berentet. Eine Patientenverfügung liege vor.</span></li></ul>
<p>In the letter: <span class="de">Sozialanamnese: Der 78-jährige Patient ist verwitwet und lebt allein in einer Wohnung im 2. Stock ohne Aufzug. Er ist berentet (früher Schlosser). Es besteht Pflegegrad 2; ein ambulanter Pflegedienst kommt einmal täglich. Eine Vorsorgevollmacht liegt vor, bevollmächtigt ist die Tochter.</span></p>`,
 merke:"Leben Sie allein? Kommen Sie allein zurecht? Haben Sie einen Pflegegrad, eine Patientenverfügung, eine Vorsorgevollmacht? Wen sollen wir im Notfall benachrichtigen?",
 ex:[{type:"mc",q:"Seine Frau ist vor zwei Jahren gestorben. Er ist …",o:["ledig","geschieden","verwitwet"],a:2,why:"verwitwet = widowed; geschieden = divorced; ledig = never married."},
 {type:"mc",q:"Ein Gericht hat bestimmt, wer für den Patienten entscheidet. Diese Person ist …",o:["der gesetzliche Betreuer","der Pflegedienst","der Bevollmächtigte"],a:0,why:"Named by a court = gesetzlicher Betreuer. A Bevollmächtigter is chosen by the patient himself."},
 {type:"mc",q:"In einer ___ steht, welche Behandlung jemand wünscht, wenn er nicht mehr entscheiden kann.",o:["Überweisung","Krankmeldung","Patientenverfügung"],a:2,why:"die Patientenverfügung = living will."},
 {type:"mc",q:"Sie arbeitet nicht mehr und bekommt Rente. Sie ist …",o:["berufstätig","berentet","krankgeschrieben"],a:1,why:"berentet (in Rente) = retired."},
 {type:"gap",q:"Kommen Sie zu Hause allein ___? (manage)",a:"zurecht",alt:[],why:"zurechtkommen is separable: Kommen Sie … zurecht?"},
 {type:"gap",q:"Wen sollen wir im ___ benachrichtigen? (emergency)",a:"Notfall",alt:[],why:"im Notfall = in an emergency."},
 {type:"order",words:["Kommt","ein","Pflegedienst","zu","Ihnen","nach","Hause","?"],a:"Kommt ein Pflegedienst zu Ihnen nach Hause?",why:"Yes/no question: verb first; zu Ihnen nach Hause = to your home."},
 {type:"fix",q:"Ich lebe seit dem Tod von meine Frau allein.",a:"Ich lebe seit dem Tod von meiner Frau allein.",alt:["Ich lebe seit dem Tod meiner Frau allein."],err:"meine",why:"von + dative: von meiner Frau (or the genitive: meiner Frau)."},
 {type:"transform",q:"In die Briefsprache (Konjunktiv I): Der Patient sagt: „Ich lebe allein.“ → Der Patient …",a:"Der Patient lebe allein.",alt:["Der Patient gibt an, er lebe allein.","Der Patient sagt, er lebe allein.","Der Patient gibt an, allein zu leben.","Der Patient berichtet, er lebe allein."],why:"Reported speech in the letter: ich lebe → er lebe."},
 {type:"transform",q:"Auf Deutsch (Sie): Do you have a living will?",a:"Haben Sie eine Patientenverfügung?",alt:[],why:"living will = die Patientenverfügung."}]},
{id:"g98",level:"B2",week:27,title:"Grafik und Statistik beschreiben",sub:"Der Anteil ist von 20 auf 30 Prozent gestiegen. · knapp die Hälfte · jeder Dritte",
 body:`<p>In Goethe B2 you present a topic and often describe a chart; in the clinic you read study results and quality figures. The language is a small closed set — learn it once.</p>
<p><b>1 · Opening</b>: <span class="de">Die Grafik zeigt, wie viele … · Das Diagramm gibt Auskunft über … · Thema der Grafik ist … · Die Daten stammen vom Statistischen Bundesamt aus dem Jahr 2024. · Die Angaben sind in Prozent.</span></p>
<p><b>2 · Up, down, unchanged</b></p>
<table><tr><th></th><th>Verb</th><th>Perfekt with</th><th>Noun</th></tr>
<tr><td>up</td><td class="de">steigen · wachsen · zunehmen · sich erhöhen</td><td class="de">ist gestiegen · ist gewachsen · hat zugenommen · hat sich erhöht</td><td class="de">der Anstieg · das Wachstum · die Zunahme</td></tr>
<tr><td>down</td><td class="de">sinken · fallen · zurückgehen · abnehmen</td><td class="de">ist gesunken · ist gefallen · ist zurückgegangen · hat abgenommen</td><td class="de">der Rückgang · die Abnahme</td></tr>
<tr><td>same</td><td class="de">gleich bleiben · stagnieren</td><td class="de">ist gleich geblieben · hat stagniert</td><td class="de">die Stagnation</td></tr>
<tr><td>×2 · ÷2</td><td class="de">sich verdoppeln · sich halbieren</td><td class="de">hat sich verdoppelt</td><td class="de">die Verdopplung</td></tr></table>
<p>How fast: <span class="de">leicht · deutlich · stark · kontinuierlich · sprunghaft</span>.</p>
<p><b>3 · The three prepositions</b></p>
<table><tr><th>Preposition</th><th>Meaning</th><th>Example</th></tr>
<tr><td class="de">von … auf + A</td><td>from … to</td><td class="de">Der Anteil ist von 20 auf 30 Prozent gestiegen.</td></tr>
<tr><td class="de">um + A</td><td>by (the difference)</td><td class="de">Der Anteil ist um 10 Prozentpunkte gestiegen.</td></tr>
<tr><td class="de">bei + D</td><td>at (the level)</td><td class="de">Der Anteil liegt bei 30 Prozent.</td></tr></table>
<p><b>4 · Shares</b>: <span class="de">die Hälfte · ein Drittel · ein Viertel · zwei Drittel · jeder Zweite · jeder Dritte · jede vierte Frau · die Mehrheit · die meisten · nur wenige</span>. Approximating: <span class="de"><b>knapp</b> die Hälfte</span> (just under) · <span class="de"><b>gut</b> ein Drittel</span> (just over) · <span class="de">rund / etwa / fast</span>.</p>
<p>Agreement: the verb follows the first noun. <span class="de">Die Hälfte der Befragten <b>raucht</b>. · Ein Drittel <b>ist</b> zufrieden.</span> But: <span class="de">30 Prozent der Befragten <b>rauchen</b>.</span></p>
<p><b>5 · Comparing</b>: <span class="de">im Vergleich zu + D · im Gegensatz zu + D · verglichen mit · während (whereas) · dagegen · doppelt so viele wie · An erster Stelle steht …, gefolgt von … · am häufigsten · am seltensten</span></p>
<p><b>6 · Commenting</b>: <span class="de">Auffällig ist, dass … · Überraschend finde ich, dass … · Das lässt sich dadurch erklären, dass … · Daraus kann man schließen, dass … · Bei uns in der Klinik ist die Situation ähnlich.</span></p>
<p><b>Trap:</b> steigen, sinken, fallen, wachsen and zurückgehen take <span class="de">sein</span>; zunehmen and abnehmen take <span class="de">haben</span>. And <span class="de">senken</span> (to lower something: <span class="de">Das Medikament senkt den Blutdruck.</span>) is not <span class="de">sinken</span> (to go down by itself: <span class="de">Der Blutdruck sinkt.</span>).</p>`,
 merke:"von 20 auf 30 Prozent steigen · um 10 Prozentpunkte · bei 30 Prozent liegen. ist gestiegen / gesunken, hat zugenommen / abgenommen. knapp < genau < gut. jeder Dritte = ein Drittel.",
 ex:[{type:"mc",q:"Der Anteil ist ___ 20 ___ 30 Prozent gestiegen.",o:["von … um","von … auf","aus … zu"],a:1,why:"von … auf = from … to. um gives the difference: um 10 Prozentpunkte."},
 {type:"mc",q:"„Knapp die Hälfte“ ist:",o:["48 Prozent","52 Prozent","25 Prozent"],a:0,why:"knapp = just under; gut = just over."},
 {type:"mc",q:"Die Zahl der Raucher ist in zehn Jahren deutlich ___.",o:["gesenkt","gesinkt","gesunken"],a:2,why:"sinken — sank — ist gesunken. gesenkt belongs to senken (to lower something)."},
 {type:"mc",q:"„Jeder Dritte“ sind etwa:",o:["30 von 1 000","3 Prozent","33 Prozent"],a:2,why:"jeder Dritte = one in three = about 33 per cent."},
 {type:"gap",q:"Im Vergleich ___ 2015 ist die Zahl deutlich gestiegen.",a:"zu",alt:["mit","zum Jahr"],why:"im Vergleich zu + dative (also: im Vergleich mit)."},
 {type:"gap",q:"Die Zahl hat sich ___: von 100 auf 200. (doubled)",a:"verdoppelt",alt:[],why:"sich verdoppeln — hat sich verdoppelt."},
 {type:"order",words:["Die","Grafik","zeigt",",","wie","viele","Menschen","in","Deutschland","rauchen","."],a:"Die Grafik zeigt, wie viele Menschen in Deutschland rauchen.",why:"Indirect question after zeigt: the verb rauchen stands at the end."},
 {type:"fix",q:"Die Zahl der Patienten hat um zehn Prozent gestiegen.",a:"Die Zahl der Patienten ist um zehn Prozent gestiegen.",err:"hat",why:"steigen forms its perfect with sein: ist gestiegen."},
 {type:"transform",q:"Mit Verb statt Nomen: Es gab einen Anstieg der Kosten um 5 Prozent. → Die Kosten …",a:"Die Kosten sind um 5 Prozent gestiegen.",alt:["Die Kosten sind um fünf Prozent gestiegen.","Die Kosten stiegen um 5 Prozent.","Die Kosten stiegen um fünf Prozent."],why:"der Anstieg → steigen; plural subject and sein: sind gestiegen."},
 {type:"transform",q:"Auf Deutsch: Every second patient is older than 65.",a:"Jeder zweite Patient ist älter als 65.",alt:["Jeder zweite Patient ist über 65.","Jeder zweite Patient ist älter als 65 Jahre.","Jeder zweite Patient ist über 65 Jahre alt.","Jeder zweite Patient ist älter als fünfundsechzig."],why:"jeder zweite + singular noun and verb; comparative + als."}]}
);

// ===== Mephisto 13.2 · L2 Grammatik data: GRAM_PLAN (level + prerequisites, aligned with i2 SYLLABUS; week = null, i2 owns the clock),
// L2_FALLEN (contrastive items, L9 proposal 6), GRAM_CARDS (spaced grammar review cards gc:<lesson>:<n>, generated by tools/l2_gen_cards.js and frozen).
const GRAM_PLAN=[
 ["g0","A1",null,[]],
 ["g1","A1",null,[]],
 ["g2","A1",null,[]],
 ["g3","A1",null,["g2"]],
 ["g4","A1",null,["g1","g3"]],
 ["g5","A2",null,["g4"]],
 ["g6","A2",null,["g5"]],
 ["g7","A2",null,["g3"]],
 ["g8","A2",null,["g3","g57"]],
 ["g9","A2",null,["g2","g8"]],
 ["g10","B1",null,["g9","g41"]],
 ["g11","B1",null,["g40"]],
 ["g12","B1",null,["g44"]],
 ["g13","B1",null,["g4","g5"]],
 ["g14","B1",null,["g41"]],
 ["g15","B1",null,["g9"]],
 ["g16","B1",null,[]],
 ["g17","B2",null,["g5","g38"]],
 ["g18","B2",null,["g11","g12"]],
 ["g19","B2",null,["g37"]],
 ["g20","B2",null,["g46"]],
 ["g21","B2",null,["g12"]],
 ["g22","B2",null,["g15"]],
 ["g23","B2",null,[]],
 ["g24","B2",null,["g14","g9"]],
 ["g25","B2",null,["g15"]],
 ["g26","B2",null,["g2"]],
 ["g27","B2",null,[]],
 ["g28","B2",null,["g13","g12"]],
 ["g29","B2",null,[]],
 ["g30","B2",null,[]],
 ["g31","A1",null,[]],
 ["g32","A1",null,[]],
 ["g33","A1",null,[]],
 ["g34","A1",null,[]],
 ["g35","A1",null,[]],
 ["g36","A1",null,[]],
 ["g37","A1",null,[]],
 ["g38","A2",null,["g39"]],
 ["g39","A2",null,["g4","g5"]],
 ["g40","A2",null,["g3","g7"]],
 ["g41","A2",null,["g7"]],
 ["g42","A2",null,["g7","g40"]],
 ["g43","A2",null,[]],
 ["g44","A2",null,["g4","g5"]],
 ["g45","A2",null,["g9"]],
 ["g46","B1",null,["g9","g10","g40"]],
 ["g47","B1",null,["g7"]],
 ["g48","B1",null,["g12"]],
 ["g49","B1",null,[]],
 ["g50","B2",null,[]],
 ["g51","B2",null,["g26","g9"]],
 ["g52","B2",null,["g21"]],
 ["g53","C1",null,["g23"]],
 ["g54","C1",null,["g20"]],
 ["g55","B2",null,[]],
 ["g56","B2",null,[]],
 ["g57","A1",null,["g3"]],
 ["g58","A1",null,[]],
 ["g59","A2",null,["g6"]],
 ["g60","A2",null,[]],
 ["g61","A2",null,[]],
 ["g62","B1",null,[]],
 ["g63","B1",null,["g8"]],
 ["g64","B1",null,["g14"]],
 ["g65","B2",null,["g22"]],
 ["g66","B2",null,[]],
 ["g67","B2",null,[]],
 ["g68","B2",null,["g23"]],
 ["g69","C1",null,["g48"]],
 ["g70","C1",null,["g21","g25"]],
 ["g71","C1",null,["g33"]],
 ["g72","A1",null,[]],
 ["g73","A1",null,[]],
 ["g74","A2",null,["g5","g9"]],
 ["g75","A2",null,["g8"]],
 ["g76","B1",null,["g31","g45"]],
 ["g77","B1",null,[]],
 ["g78","B1",null,[]],
 ["g79","B1",null,[]],
 ["g80","B2",null,["g45","g39"]],
 ["g81","B2",null,["g22","g24","g65"]],
 ["g82","B2",null,["g23","g72"]],
 ["g83","C1",null,["g25","g66"]],
 ["g84","A2",null,["g0"]],
 ["g85","A2",null,["g36"]],
 ["g86","B1",null,["g31","g43"]],
 ["g87","B2",null,["g5","g12","g44"]],
 ["g88","B2",null,["g24","g42"]],
 ["g89","B2",null,["g82","g9"]],
 ["g90","B1",null,["g4"]],
 ["g91","B1",null,["g9","g59"]],
 ["g92","B2",null,["g14","g15"]],
 ["g93","B2",null,["g14","g40"]],
 ["g94","B2",null,["g23","g27"]],
 ["g95","B1",null,["g7","g36"]],
 ["g96","A2",null,["g61"]],
 ["g97","B2",null,["g11","g40"]],
 ["g98","B2",null,["g19","g36"]]];
const L2_FALLEN=[
 // English
 ["g7",{type:"mc",q:"You must not eat anything. →",o:["Sie müssen nichts essen.","Sie dürfen nichts essen.","Sie brauchen nichts zu essen."],a:1,why:"must not = nicht dürfen. nicht müssen = don't have to. (English must not ≠ German muss nicht.)"}],
 ["g46",{type:"mc",q:"When I arrived, the patient was asleep. →",o:["Wenn ich ankam, schlief der Patient.","Wann ich ankam, schlief der Patient.","Als ich ankam, schlief der Patient."],a:2,why:"One event in the past → als. (English when = als, wenn or wann.)"}],
 ["g40",{type:"mc",q:"I don't know if he is allergic. →",o:["Ich weiß nicht, wenn er allergisch ist.","Ich weiß nicht, ob er allergisch ist.","Ich weiß nicht, dass er allergisch ist."],a:1,why:"if = whether → ob. (English if = wenn for a condition, ob for whether.)"}],
 ["g3",{type:"transform",q:"Auf Deutsch: I am working today.",a:"Ich arbeite heute.",alt:["Heute arbeite ich."],why:"German has no -ing form: the simple present. Not: Ich bin arbeiten."}],
 ["g26",{type:"mc",q:"„Ich will nach Hause.“ means:",o:["I will go home.","I want to go home.","I would go home."],a:1,why:"will is the present of wollen. The future is werde. (English will ≠ German will.)"}],
 ["g47",{type:"mc",q:"She became a doctor. →",o:["Sie bekam Ärztin.","Sie wurde Ärztin.","Sie wird Ärztin bekommen."],a:1,why:"become = werden. bekommen = to get."}],
 ["g49",{type:"mc",q:"There is a pharmacy in the building. →",o:["Da ist eine Apotheke im Haus gibt.","Es gibt eine Apotheke im Haus.","Es ist geben eine Apotheke im Haus."],a:1,why:"there is / there are = es gibt + accusative."}],
 ["g73",{type:"transform",q:"Auf Deutsch: I like the food. (schmecken)",a:"Das Essen schmeckt mir.",alt:["Mir schmeckt das Essen.","Das Essen schmeckt mir gut.","Mir schmeckt das Essen gut."],why:"The food is the subject, the person is dative."}],
 ["g35",{type:"fix",q:"Ich habe in Montag Dienst.",a:"Ich habe am Montag Dienst.",err:"in Montag",why:"Days take am: on Monday = am Montag."}],
 ["g55",{type:"fix",q:"Nach der Operation, ging es ihm besser.",a:"Nach der Operation ging es ihm besser.",err:"Operation,",why:"No comma after an opening phrase."}],
 ["g72",{type:"mc",q:"I am going to the pharmacy. →",o:["Ich gehe zu Apotheke.","Ich gehe nach der Apotheke.","Ich gehe in die Apotheke."],a:2,why:"A building you enter: in + accusative (or: zur Apotheke). English to = zu, nach or in."}],
 // Arabic
 ["g2",{type:"fix",q:"Bei mir ist Fieber seit gestern.",a:"Ich habe seit gestern Fieber.",alt:["Seit gestern habe ich Fieber."],err:"Bei mir ist",why:"German uses haben: Ich habe Fieber. (Arabic عندي, at me is, = German ich habe.)"}],
 ["g18",{type:"fix",q:"Das ist der Patient, den ich ihn gestern untersucht habe.",a:"Das ist der Patient, den ich gestern untersucht habe.",err:"ihn",why:"The relative pronoun den is the object; no second pronoun. (Arabic repeats the pronoun inside the relative clause; German does not.)"}],
 ["g13",{type:"order",words:["Wir","haben","einen","neuen","Patienten","."],a:"Wir haben einen neuen Patienten.",why:"The adjective stands before the noun. (Arabic puts it after.)"}],
 ["g3",{type:"fix",q:"Kam der Arzt um acht Uhr.",a:"Der Arzt kam um acht Uhr.",alt:["Um acht Uhr kam der Arzt."],err:"Kam der Arzt",why:"A statement has the verb in second place; verb first is a question. (Arabic statements may start with the verb.)"}],
 ["g58",{type:"gap",q:"Ich habe ___ Frage. (a)",a:"eine",alt:[],why:"German needs the indefinite article: eine Frage. (Arabic has none.)"}],
 ["g58",{type:"fix",q:"Der Herr Weber hat die Schmerzen im Bauch.",a:"Herr Weber hat Schmerzen im Bauch.",err:"Der Herr Weber hat die Schmerzen",why:"No article before a name with Herr/Frau in writing, none before an unspecified symptom."}],
 ["g1",{type:"mc",q:"___ Mädchen ist sieben Jahre alt.",o:["Die","Das","Der"],a:1,why:"-chen makes the noun neuter: das Mädchen. (Arabic has two genders; German has a third.)"}],
 ["g32",{type:"transform",q:"Als Frage (Verb zuerst): Sie haben Schmerzen.",a:"Haben Sie Schmerzen?",alt:[],why:"A yes/no question is made by word order alone: verb first. (No question particle like هل.)"}]
];
const GRAM_CARDS={
 g0:[
  {"n":1,"k":"pr","q":"Satzbau: Blutdruck / Der / heute / hoch / ist","a":"Der Blutdruck ist heute hoch.","alt":["Heute ist der Blutdruck hoch."],"why":"German never drops the verb 'to be': Der Blutdruck ist hoch."},
  {"n":2,"k":"pr","q":"Satzbau: als / arbeite / Arzt / drei / Ich / Jahren / seit","a":"Ich arbeite seit drei Jahren als Arzt.","alt":["Ich arbeite als Arzt seit drei Jahren."],"why":"seit + present tense; no article before the profession."},
  {"n":3,"k":"pr","q":"Satzbau: Brust / der / hat / Herr / in / Schmerzen / Yilmaz","a":"Herr Yilmaz hat Schmerzen in der Brust.","alt":["Herr Yilmaz hat in der Brust Schmerzen."],"why":"Verb in position 2."},
  {"n":4,"k":"pr","q":"Satzbau: Fieber / Haben / Husten / oder / Sie (?)","a":"Haben Sie Fieber oder Husten?","alt":["Haben Sie Husten oder Fieber?"],"why":"Yes/no question: verb first."},
  {"n":5,"k":"cz","q":"Herr Müller hat seit gestern ___.","a":"Fieber","de":"Herr Müller hat seit gestern Fieber.","why":"ie is a long ee: Fieber."},
  {"n":6,"k":"cz","q":"Bitte schließen Sie die ___. (door: Tür or Tier?)","a":"Tür","de":"Bitte schließen Sie die Tür.","why":"Rounded ü: die Tür is the door."},
  {"n":7,"k":"cz","q":"Ich bin ___. (doctor, masculine, no article)","a":"Arzt","de":"Ich bin Arzt.","why":"Professions take no article: Ich bin Arzt."},
  {"n":8,"k":"cz","q":"Frau Nowak hat ___ zwei Tagen Husten. (since)","a":"seit","de":"Frau Nowak hat seit zwei Tagen Husten.","why":"seit + present tense for something that started in the past and is still going on."}],
 g1:[
  {"n":1,"k":"pr","q":"Satzbau: Die / drei / hat / Wohnung / Zimmer","a":"Die Wohnung hat drei Zimmer.","why":"die Wohnung (-ung = die) is the subject."},
  {"n":2,"k":"pr","q":"Satzbau: Das / Fieber / hat / hohes / Mädchen","a":"Das Mädchen hat hohes Fieber.","why":"Rule: -chen makes a noun neuter → das Mädchen, even for a girl."},
  {"n":3,"k":"pr","q":"Satzbau: Der / Heidelberg / in / ist / kalt / Winter","a":"Der Winter in Heidelberg ist kalt.","alt":["In Heidelberg ist der Winter kalt.","Der Winter ist in Heidelberg kalt."],"why":"Rule: seasons are der → der Winter."},
  {"n":4,"k":"pr","q":"Satzbau: dauert / Die / Operation / Stunden / zwei","a":"Die Operation dauert zwei Stunden.","why":"Rule: -ion is die → die Operation."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Diagnose ist noch nicht sicher.","a":"Die Diagnose ist noch nicht sicher.","why":"Rule: most nouns ending in -e are feminine → die Diagnose."},
  {"n":6,"k":"cz","q":"___ Mutter kommt heute. (article)","a":"Die","de":"Die Mutter kommt heute.","why":"Family words follow natural gender: die Mutter, der Vater, das Kind."},
  {"n":7,"k":"cz","q":"___ Krankenhaus ist sehr groß. (article)","a":"Das","de":"Das Krankenhaus ist sehr groß.","why":"Rule: the last word of a compound gives the gender."},
  {"n":8,"k":"cz","q":"___ Kind hat Fieber. (article)","a":"Das","de":"Das Kind hat Fieber.","why":"Family words follow natural gender, but das Kind is neuter: das Kind."}],
 g2:[
  {"n":1,"k":"pr","q":"Satzbau: alt / Bruder / ist / Jahre / Mein / zwanzig","a":"Mein Bruder ist zwanzig Jahre alt.","why":"Age: ..."},
  {"n":2,"k":"pr","q":"Satzbau: haben / heute / Patienten / viele / Wir","a":"Wir haben heute viele Patienten.","alt":["Heute haben wir viele Patienten."],"why":"wir → haben."},
  {"n":3,"k":"pr","q":"In den Plural (wir): Ich bin Arzt.","a":"Wir sind Ärzte.","alt":["Wir sind Ärztinnen."],"why":"ich bin → wir sind."},
  {"n":4,"k":"pr","q":"Mit „Sie“ statt „du“: Du hast Fieber.","a":"Sie haben Fieber.","why":"Polite Sie takes the same verb form as sie (they): Sie haben."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Du seid heute sehr blass.","a":"Du bist heute sehr blass.","why":"sein: du → bist."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Bei mir ist Fieber seit gestern.","a":"Ich habe seit gestern Fieber.","alt":["Seit gestern habe ich Fieber."],"why":"German uses haben: Ich habe Fieber."},
  {"n":7,"k":"cz","q":"Ich ___ Arzt.","a":"bin","de":"Ich bin Arzt.","why":"sein: ich → bin, du → bist, er/sie/es → ist."},
  {"n":8,"k":"cz","q":"Du ___ Fieber, oder?","a":"hast","de":"Du hast Fieber, oder?","why":"haben: ich → habe, du → hast, er/sie/es → hat."}],
 g3:[
  {"n":1,"k":"pr","q":"Satzbau: einer / Ich / in / kleinen / wohne / Wohnung","a":"Ich wohne in einer kleinen Wohnung.","why":"Subject first, verb second: ich → wohne."},
  {"n":2,"k":"pr","q":"Satzbau: auf / Chefarzt / der / die / kommt / Morgen / Station","a":"Morgen kommt der Chefarzt auf die Station.","alt":["Der Chefarzt kommt morgen auf die Station."],"why":"V2 rule: Morgen is first, so the verb kommt is second and the subject moves after it."},
  {"n":3,"k":"pr","q":"Beginnen Sie mit „Jetzt“: Ich messe den Blutdruck.","a":"Jetzt messe ich den Blutdruck.","why":"V2 rule: if Jetzt comes first, the verb stays second and ich moves after it."},
  {"n":4,"k":"pr","q":"Als Ja/Nein-Frage: Sie schläft gut.","a":"Schläft sie gut?","why":"Yes/no questions put the verb first."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Er fahrt mit dem Fahrrad zur Klinik.","a":"Er fährt mit dem Fahrrad zur Klinik.","why":"fahren changes a → ä in du and er: du fährst, er fährt."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Kam der Arzt um acht Uhr.","a":"Der Arzt kam um acht Uhr.","alt":["Um acht Uhr kam der Arzt."],"why":"A statement has the verb in second place; verb first is a question."},
  {"n":7,"k":"cz","q":"Ich ___ Wasser. (trinken)","a":"trinke","de":"Ich trinke Wasser.","why":"Endings: ich → -e, du → -st, er/sie/es → -t."},
  {"n":8,"k":"cz","q":"Der Patient ___ viel Wasser. (trinken)","a":"trinkt","de":"Der Patient trinkt viel Wasser.","why":"er/sie/es → -t: der Patient trinkt."}],
 g4:[
  {"n":1,"k":"pr","q":"Satzbau: brauche / einen / Ich / Stühle / Tisch / und / zwei","a":"Ich brauche einen Tisch und zwei Stühle.","alt":["Ich brauche zwei Stühle und einen Tisch."],"why":"brauchen takes the accusative: einen Tisch (masc.), zwei Stühle (plural, no change)."},
  {"n":2,"k":"pr","q":"Satzbau: Brief / Den / der / morgen / Oberarzt / schreibt","a":"Den Brief schreibt der Oberarzt morgen.","alt":["Den Brief schreibt morgen der Oberarzt.","Der Oberarzt schreibt morgen den Brief."],"why":"den shows the object, der shows the subject, so the object may come first for emphasis."},
  {"n":3,"k":"pr","q":"Ersetzen Sie „den Patienten“ durch ein Pronomen: Ich rufe den Patienten.","a":"Ich rufe ihn.","why":"er → ihn in the accusative."},
  {"n":4,"k":"pr","q":"Machen Sie „der Pfleger“ zum Objekt: Der Pfleger sieht die Ärztin.","a":"Die Ärztin sieht den Pfleger.","why":"der → den for a masculine object; feminine die does not change."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wir suchen der Notausgang.","a":"Wir suchen den Notausgang.","why":"suchen takes a direct object: masculine der → den."},
  {"n":6,"k":"cz","q":"Ich kaufe ___ Apfel. (der Apfel)","a":"den","de":"Ich kaufe den Apfel.","why":"Rule: the direct object (what I buy) is accusative."},
  {"n":7,"k":"cz","q":"Kennst du ___? (her)","a":"sie","de":"Kennst du sie?","why":"Accusative pronouns: ich → mich, du → dich, er → ihn, sie → sie."},
  {"n":8,"k":"cz","q":"Wir haben ___ Sohn und eine Tochter. (a; der Sohn)","a":"einen","de":"Wir haben einen Sohn und eine Tochter.","why":"Only masculine changes in the accusative: ein → einen."}],
 g5:[
  {"n":1,"k":"pr","q":"Satzbau: dem / Essen / gehe / ich / meiner / Nach / Schwester / zu","a":"Nach dem Essen gehe ich zu meiner Schwester.","alt":["Ich gehe nach dem Essen zu meiner Schwester."],"why":"nach and zu take the dative: dem Essen, meiner Schwester."},
  {"n":2,"k":"pr","q":"Satzbau: bringt / dem / Der / ein / Kind / Pflaster / Pfleger","a":"Der Pfleger bringt dem Kind ein Pflaster.","why":"Dative person (dem Kind) comes before the accusative thing (ein Pflaster)."},
  {"n":3,"k":"pr","q":"Ersetzen Sie „der Patientin“ durch ein Pronomen: Es geht der Patientin besser.","a":"Es geht ihr besser.","why":"sie (she) → ihr in the dative."},
  {"n":4,"k":"pr","q":"Bilden Sie einen Satz mit „mit“: ich / sprechen / der Chefarzt","a":"Ich spreche mit dem Chefarzt.","why":"mit + dative: der → dem."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Hilfst du mich bitte?","a":"Hilfst du mir bitte?","why":"helfen takes the dative: ich → mir, not mich."},
  {"n":6,"k":"cz","q":"Ich gebe ___ Kind ein Eis. (das Kind)","a":"dem","de":"Ich gebe dem Kind ein Eis.","why":"The person who receives something is dative."},
  {"n":7,"k":"cz","q":"Ich fahre mit ___ Bus zur Klinik.","a":"dem","de":"Ich fahre mit dem Bus zur Klinik.","why":"mit always takes the dative: der Bus → mit dem Bus."},
  {"n":8,"k":"cz","q":"Das Medikament hilft ___. (him)","a":"ihm","de":"Das Medikament hilft ihm.","why":"helfen is a dative verb."}],
 g6:[
  {"n":1,"k":"pr","q":"Satzbau: Das / dem / der / Fenster / Sofa / steht / Tür / und / zwischen","a":"Das Sofa steht zwischen dem Fenster und der Tür.","alt":["Das Sofa steht zwischen der Tür und dem Fenster."],"why":"stehen = location → dative: dem Fenster, der Tür."},
  {"n":2,"k":"pr","q":"Satzbau: auf / Demir / der / gestern / Herr / Intensivstation / liegt / seit","a":"Herr Demir liegt seit gestern auf der Intensivstation.","alt":["Seit gestern liegt Herr Demir auf der Intensivstation."],"why":"liegen = location → dative: auf der Intensivstation."},
  {"n":3,"k":"pr","q":"Antworten Sie auf „Wo?“: Ich gehe in die Apotheke.","a":"Ich bin in der Apotheke.","why":"Wo? → dative: in der Apotheke."},
  {"n":4,"k":"pr","q":"Antworten Sie auf „Wohin?“: Das Kind ist im Garten.","a":"Das Kind geht in den Garten.","alt":["Das Kind läuft in den Garten."],"why":"Wohin? → accusative: in den Garten."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Das Thermometer liegt auf den Tisch.","a":"Das Thermometer liegt auf dem Tisch.","why":"liegen = location (Wo?), so auf takes the dative: auf dem Tisch."},
  {"n":6,"k":"cz","q":"Ich gehe ___ Supermarkt. (der Supermarkt)","a":"in den","de":"Ich gehe in den Supermarkt.","why":"Wohin? (where to?) → accusative: in den Supermarkt."},
  {"n":7,"k":"cz","q":"Die Akte liegt ___ Schreibtisch.","a":"auf dem","de":"Die Akte liegt auf dem Schreibtisch.","why":"Wo? (where?) → dative: auf dem Schreibtisch."},
  {"n":8,"k":"cz","q":"Ohne ___ Überweisung geht es nicht.","a":"die","de":"Ohne die Überweisung geht es nicht.","why":"ohne always takes the accusative."}],
 g7:[
  {"n":1,"k":"pr","q":"Satzbau: ein / Ich / kaufen / Kilo / möchte / Tomaten","a":"Ich möchte ein Kilo Tomaten kaufen.","why":"Bracket rule: möchte second, kaufen (infinitive) last."},
  {"n":2,"k":"pr","q":"Satzbau: Der / heute / hierbleiben / muss / Nacht / Patient","a":"Der Patient muss heute Nacht hierbleiben.","alt":["Heute Nacht muss der Patient hierbleiben."],"why":"Bracket rule: modal second, the infinitive hierbleiben (one word) at the very end."},
  {"n":3,"k":"pr","q":"Mit „müssen“: Ich rufe den Oberarzt.","a":"Ich muss den Oberarzt rufen.","why":"muss takes position 2; rufen becomes an infinitive at the end."},
  {"n":4,"k":"pr","q":"Mit „können“: Sie läuft wieder ohne Hilfe.","a":"Sie kann wieder ohne Hilfe laufen.","alt":["Sie kann ohne Hilfe wieder laufen."],"why":"kann second; the infinitive laufen closes the bracket."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich kann morgen nicht komme.","a":"Ich kann morgen nicht kommen.","why":"After a modal the main verb is an infinitive (-en): kommen."},
  {"n":6,"k":"cz","q":"Ich ___ heute nicht arbeiten. (können)","a":"kann","de":"Ich kann heute nicht arbeiten.","why":"Modal verbs: ich → kann, du → kannst, er/sie/es → kann (no -e in the ich-form)."},
  {"n":7,"k":"cz","q":"Sie ___ heute nichts essen, Frau Keller.","a":"dürfen","de":"Sie dürfen heute nichts essen, Frau Keller.","why":"Polite Sie → dürfen (plural form)."},
  {"n":8,"k":"cz","q":"Du ___ mehr trinken. (sollen)","a":"sollst","de":"Du sollst mehr trinken.","why":"du → -st: sollst."}],
 g8:[
  {"n":1,"k":"pr","q":"Satzbau: Brot / ein / Ich / im / kaufe / Milch / Supermarkt / und","a":"Ich kaufe im Supermarkt Brot und Milch ein.","alt":["Ich kaufe Brot und Milch im Supermarkt ein.","Ich kaufe im Supermarkt Milch und Brot ein.","Ich kaufe Milch und Brot im Supermarkt ein."],"why":"einkaufen: kaufe second, prefix ein at the end."},
  {"n":2,"k":"pr","q":"Satzbau: auf / Herr / jeden / Morgen / Müller / sechs / steht / um","a":"Herr Müller steht jeden Morgen um sechs auf.","alt":["Jeden Morgen steht Herr Müller um sechs auf."],"why":"aufstehen: steht second, prefix auf last."},
  {"n":3,"k":"pr","q":"Als Imperativ (Sie): Sie atmen tief ein.","a":"Atmen Sie tief ein!","alt":["Atmen Sie tief ein."],"why":"Sie-imperative: verb first, Sie second, prefix at the end."},
  {"n":4,"k":"pr","q":"Als Imperativ (du): Du machst den Mund auf.","a":"Mach den Mund auf!","alt":["Mache den Mund auf!","Mach den Mund auf."],"why":"du-imperative: drop du and -st; the prefix auf stays at the end."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Rettungswagen ankommt um zehn Uhr.","a":"Der Rettungswagen kommt um zehn Uhr an.","why":"ankommen is separable: kommt ..."},
  {"n":6,"k":"cz","q":"Der Zug fährt um 7.15 Uhr ___. (abfahren)","a":"ab","de":"Der Zug fährt um 7.15 Uhr ab.","why":"Separable prefix ab- goes to the end of the sentence."},
  {"n":7,"k":"cz","q":"Ich ___ das Rezept morgen. (bekommen)","a":"bekomme","de":"Ich bekomme das Rezept morgen.","why":"be- is inseparable, so the verb stays in one piece: ich bekomme."},
  {"n":8,"k":"cz","q":"___ bitte die Tür! (schließen, du-form)","a":"Schließ","alt":["Schließe"],"de":"Schließ bitte die Tür!","why":"du-imperative = stem, usually without -e: Schließ!"}],
 g9:[
  {"n":1,"k":"pr","q":"Satzbau: aufgestanden / bin / Ich / sieben / Uhr / um","a":"Ich bin um sieben Uhr aufgestanden.","alt":["Um sieben Uhr bin ich aufgestanden."],"why":"aufstehen takes sein; the separable participle is auf + ge + standen."},
  {"n":2,"k":"pr","q":"Satzbau: Der / gegangen / gestern / Hause / ist / nach / Patient","a":"Der Patient ist gestern nach Hause gegangen.","alt":["Gestern ist der Patient nach Hause gegangen."],"why":"gehen = movement → ist."},
  {"n":3,"k":"pr","q":"Ins Perfekt: Sie trinkt zu wenig.","a":"Sie hat zu wenig getrunken.","why":"trinken → getrunken (strong)."},
  {"n":4,"k":"pr","q":"Ins Perfekt: Wir fahren mit dem Rettungswagen.","a":"Wir sind mit dem Rettungswagen gefahren.","why":"fahren = movement → sein: wir sind gefahren."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich habe gestern Nacht sehr schlecht geschlaft.","a":"Ich habe gestern Nacht sehr schlecht geschlafen.","why":"schlafen is strong: the participle is geschlafen, not geschlaft."},
  {"n":6,"k":"cz","q":"Wir haben am Sonntag die Familie ___. (besuchen)","a":"besucht","de":"Wir haben am Sonntag die Familie besucht.","why":"be- is inseparable → no ge-."},
  {"n":7,"k":"cz","q":"Herr Yilmaz ___ in der Nacht gestorben. (sein or haben)","a":"ist","de":"Herr Yilmaz ist in der Nacht gestorben.","why":"sterben is a change of state → sein: ist gestorben."},
  {"n":8,"k":"cz","q":"Sie hat nach der OP lange ___. (schlafen)","a":"geschlafen","de":"Sie hat nach der OP lange geschlafen.","why":"schlafen is strong: ge- + schlaf + -en."}],
 g10:[
  {"n":1,"k":"pr","q":"Satzbau: Abend / ein / Fieber / Gestern / kam / Kind / mit","a":"Gestern Abend kam ein Kind mit Fieber.","alt":["Ein Kind mit Fieber kam gestern Abend."],"why":"kommen → kam, in slot two after the time phrase."},
  {"n":2,"k":"pr","q":"Satzbau: auf / blieb / der / Die / drei / Patientin / Station / Tage","a":"Die Patientin blieb drei Tage auf der Station.","why":"bleiben → blieb."},
  {"n":3,"k":"pr","q":"Ins Präteritum: Er geht langsam zur Tür.","a":"Er ging langsam zur Tür.","why":"gehen → ging."},
  {"n":4,"k":"pr","q":"Ins Präteritum: Wir wissen die Diagnose nicht.","a":"Wir wussten die Diagnose nicht.","why":"wissen → wusste, plural wussten."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Chirurg sprechte lange mit der Familie.","a":"Der Chirurg sprach lange mit der Familie.","why":"sprechen is strong: sprach, never sprechte."},
  {"n":6,"k":"cz","q":"Gestern ___ ich keine Zeit.","a":"hatte","de":"Gestern hatte ich keine Zeit.","why":"haben → hatte."},
  {"n":7,"k":"cz","q":"Vor zehn Jahren ___ Dr. Ismail noch Student. (sein)","a":"war","de":"Vor zehn Jahren war Dr. Ismail noch Student.","why":"sein → war."},
  {"n":8,"k":"cz","q":"Der Nachtpfleger ___ sofort den Notarzt. (rufen)","a":"rief","de":"Der Nachtpfleger rief sofort den Notarzt.","why":"rufen is strong: rief."}],
 g11:[
  {"n":1,"k":"pr","q":"Satzbau: dass / der / glaube / hat / Ich / Patient / Schmerzen","a":"Ich glaube, dass der Patient Schmerzen hat.","why":"dass sends hat to the end of its clause."},
  {"n":2,"k":"pr","q":"Satzbau: das / Fieber / mich / rufen / Sie / steigt / Wenn","a":"Wenn das Fieber steigt, rufen Sie mich.","alt":["Rufen Sie mich, wenn das Fieber steigt."],"why":"The wenn-clause is slot one, so the main verb rufen follows right after the comma."},
  {"n":3,"k":"pr","q":"Verbinden Sie mit „weil“: Sie bleibt zu Hause. Sie ist krank.","a":"Sie bleibt zu Hause, weil sie krank ist.","alt":["Weil sie krank ist, bleibt sie zu Hause."],"why":"weil pushes ist to the end."},
  {"n":4,"k":"pr","q":"Verbinden Sie zu einem Relativsatz: Das ist der Pfleger. Er arbeitet nachts.","a":"Das ist der Pfleger, der nachts arbeitet.","why":"Masculine relative pronoun der; arbeitet goes to the end."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich hoffe, dass es geht Ihnen bald besser.","a":"Ich hoffe, dass es Ihnen bald besser geht.","alt":["Ich hoffe, es geht Ihnen bald besser."],"why":"After dass the verb must stand at the end of the clause."},
  {"n":6,"k":"cz","q":"Das ist die Ärztin, ___ mich operiert hat.","a":"die","de":"Das ist die Ärztin, die mich operiert hat.","why":"Feminine subject of the relative clause → die."},
  {"n":7,"k":"cz","q":"Es gibt nichts, ___ ich nicht schon gehört habe.","a":"was","de":"Es gibt nichts, was ich nicht schon gehört habe.","why":"After nichts, alles, etwas the relative pronoun is was."},
  {"n":8,"k":"cz","q":"Wir warten, ___ der Befund da ist. (until)","a":"bis","de":"Wir warten, bis der Befund da ist.","why":"bis is a subordinating conjunction; verb at the end."}],
 g12:[
  {"n":1,"k":"pr","q":"Satzbau: Bluttests / des / Die / Ergebnisse / normal / sind","a":"Die Ergebnisse des Bluttests sind normal.","why":"Genitive follows the noun it belongs to: die Ergebnisse des Bluttests."},
  {"n":2,"k":"pr","q":"Satzbau: des / die / gesperrt / ist / Straße / Unfalls / Wegen","a":"Wegen des Unfalls ist die Straße gesperrt.","alt":["Die Straße ist wegen des Unfalls gesperrt."],"why":"wegen + genitive fills slot one; the verb comes second."},
  {"n":3,"k":"pr","q":"Mit Genitiv: das Auto von meinem Bruder","a":"das Auto meines Bruders","why":"von + dative becomes a genitive: meines Bruders (-s on the noun)."},
  {"n":4,"k":"pr","q":"In moderne Prosa: des Kindes Fieber","a":"das Fieber des Kindes","why":"Modern prose puts the genitive after the noun."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Name des Arzt steht auf dem Schild.","a":"Der Name des Arztes steht auf dem Schild.","why":"Masculine nouns add -(e)s in the genitive: des Arztes."},
  {"n":6,"k":"cz","q":"Das Zimmer ___ Patienten ist frei.","a":"des","de":"Das Zimmer des Patienten ist frei.","why":"Genitive masculine: des Patienten (n-noun, so -en)."},
  {"n":7,"k":"cz","q":"Wegen ___ Sturms kann der Hubschrauber nicht fliegen.","a":"des","de":"Wegen des Sturms kann der Hubschrauber nicht fliegen.","why":"wegen + genitive: des Sturms."},
  {"n":8,"k":"cz","q":"Ich rufe ___ Mutter an. (your, du)","a":"deine","de":"Ich rufe deine Mutter an.","why":"deine Mutter: feminine, accusative stays -e."}],
 g13:[
  {"n":1,"k":"pr","q":"Satzbau: aus / Der / Hamburg / kommt / neue / Oberarzt","a":"Der neue Oberarzt kommt aus Hamburg.","why":"After der in the nominative the adjective takes -e: der neue Oberarzt."},
  {"n":2,"k":"pr","q":"Satzbau: als / gestern / habe / Heute / ich / Schmerzen / weniger","a":"Heute habe ich weniger Schmerzen als gestern.","alt":["Ich habe heute weniger Schmerzen als gestern."],"why":"Comparative weniger + als."},
  {"n":3,"k":"pr","q":"Setzen Sie „der“ statt „ein“: ein guter Arzt","a":"der gute Arzt","why":"der already shows the gender, so the adjective only takes -e."},
  {"n":4,"k":"pr","q":"Superlativ mit „am“: Nachts ist es ruhig.","a":"Nachts ist es am ruhigsten.","why":"Predicative superlative: am + -sten."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Sie hat einen hohe Blutdruck.","a":"Sie hat einen hohen Blutdruck.","why":"Masculine accusative after einen → -en: einen hohen Blutdruck."},
  {"n":6,"k":"cz","q":"ein ___ Patient (jung)","a":"junger","de":"ein junger Patient","why":"After ein the adjective shows masculine nominative: junger."},
  {"n":7,"k":"cz","q":"Wir brauchen ___ Wasser. (kalt, no article)","a":"kaltes","de":"Wir brauchen kaltes Wasser.","why":"No article: the adjective takes the article's ending, neuter -es."},
  {"n":8,"k":"cz","q":"Heute geht es ihr ___ als gestern. (gut)","a":"besser","de":"Heute geht es ihr besser als gestern.","why":"gut, besser, am besten; comparative + als."}],
 g14:[
  {"n":1,"k":"pr","q":"Satzbau: hätte / ich / ich / machen / Sport / Wenn / würde / Zeit","a":"Wenn ich Zeit hätte, würde ich Sport machen.","alt":["Ich würde Sport machen, wenn ich Zeit hätte."],"why":"hätte at the end of the wenn-clause, then würde ..."},
  {"n":2,"k":"pr","q":"Satzbau: bitte / das / Formular / geben / Könnten / mir / Sie (?)","a":"Könnten Sie mir bitte das Formular geben?","alt":["Könnten Sie mir das Formular bitte geben?","Könnten Sie bitte mir das Formular geben?"],"why":"Polite request: Könnten first, infinitive geben last."},
  {"n":3,"k":"pr","q":"Höflicher mit Konjunktiv II: Haben Sie einen Moment Zeit?","a":"Hätten Sie einen Moment Zeit?","why":"haben → hätten for a polite request."},
  {"n":4,"k":"pr","q":"Irreal in der Vergangenheit (hätte/wäre + Partizip II): Sie nimmt die Tabletten.","a":"Sie hätte die Tabletten genommen.","why":"Past unreal: hätte + genommen."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wenn er gesund wäre, konnte er arbeiten.","a":"Wenn er gesund wäre, könnte er arbeiten.","why":"The main clause of an unreal condition also needs Konjunktiv II: könnte."},
  {"n":6,"k":"cz","q":"Wenn ich mehr Zeit ___, würde ich länger mit den Patienten sprechen.","a":"hätte","de":"Wenn ich mehr Zeit hätte, würde ich länger mit den Patienten sprechen.","why":"Unreal condition → Konjunktiv II: hätte."},
  {"n":7,"k":"cz","q":"___ Sie bitte kurz warten? (polite)","a":"Könnten","de":"Könnten Sie bitte kurz warten?","why":"könnten is the polite Konjunktiv II; konnten is plain past."},
  {"n":8,"k":"cz","q":"Ohne den Helm ___ er jetzt nicht mehr am Leben.","a":"wäre","de":"Ohne den Helm wäre er jetzt nicht mehr am Leben.","why":"Unreal condition without wenn: Ohne den Helm wäre er … (sein → wäre)."}],
 g15:[
  {"n":1,"k":"pr","q":"Satzbau: acht / Der / operiert / Patient / Uhr / um / wird","a":"Der Patient wird um acht Uhr operiert.","alt":["Um acht Uhr wird der Patient operiert."],"why":"wird in slot two, participle operiert at the end."},
  {"n":2,"k":"pr","q":"Satzbau: habe / keine / sagt / Schmerzen / sie / Sie","a":"Sie sagt, sie habe keine Schmerzen.","why":"Reported speech without dass keeps V2 and uses Konjunktiv I: habe."},
  {"n":3,"k":"pr","q":"Ins Passiv: Die Pflegerin misst den Blutdruck.","a":"Der Blutdruck wird von der Pflegerin gemessen.","alt":["Der Blutdruck wird gemessen."],"why":"Object becomes subject; wird + gemessen; agent with von."},
  {"n":4,"k":"pr","q":"In indirekte Rede (Konj. I): Er sagt: „Ich bin Diabetiker.“","a":"Er sagt, er sei Diabetiker.","alt":["Er sagt, dass er Diabetiker sei."],"why":"ich bin → er sei; the pronoun shifts to er."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Das Rezept wird vom Arzt unterschreiben.","a":"Das Rezept wird vom Arzt unterschrieben.","why":"The passive needs the participle: unterschrieben."},
  {"n":6,"k":"cz","q":"Die Patientin sagt, sie ___ keine Allergien. (Konjunktiv I)","a":"habe","de":"Die Patientin sagt, sie habe keine Allergien.","why":"Reported speech → Konjunktiv I: habe."},
  {"n":7,"k":"cz","q":"Der Patient ___ morgen operiert.","a":"wird","de":"Der Patient wird morgen operiert.","why":"Process passive: werden + Partizip II."},
  {"n":8,"k":"cz","q":"Die Wunde ___ schon versorgt. (state)","a":"ist","de":"Die Wunde ist schon versorgt.","why":"State passive uses sein: ist versorgt."}],
 g16:[
  {"n":1,"k":"pr","q":"Satzbau: die / Es / im / Schnee / schweigt / Stadt / tiefen","a":"Es schweigt die Stadt im tiefen Schnee.","alt":["Es schweigt im tiefen Schnee die Stadt."],"why":"Dummy Es first, verb second, real subject die Stadt after it: the Faust pattern."},
  {"n":2,"k":"pr","q":"Satzbau: bang / dieser / in / ist / Mir / Nacht / so","a":"Mir ist so bang in dieser Nacht.","alt":["Mir ist in dieser Nacht so bang."],"why":"Dative of experience: Mir ist bang = I am afraid."},
  {"n":3,"k":"pr","q":"In modernes Deutsch: Wär ich doch nimmer hier gewesen!","a":"Wäre ich doch nie hier gewesen!","alt":["Wenn ich doch nie hier gewesen wäre!"],"why":"wär → wäre; nimmer → nie."},
  {"n":4,"k":"pr","q":"In modernes Deutsch: Des Doktors Rat hat sie nicht gehört.","a":"Den Rat des Doktors hat sie nicht gehört.","alt":["Sie hat den Rat des Doktors nicht gehört."],"why":"Preposed genitive becomes a following genitive."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Er thut seine Pflicht.","a":"Er tut seine Pflicht.","why":"Old spelling th (thun, Thür, Thal) is now t: tun, Tür, Tal."},
  {"n":6,"k":"cz","q":"„Itzt“ is the old word for ___. (modern word)","a":"jetzt","de":"„Itzt“ is the old word for jetzt.","why":"itzt = jetzt (now)."},
  {"n":7,"k":"cz","q":"„Drum“ is short for ___. (modern word)","a":"darum","de":"„Drum“ is short for darum.","why":"drum = darum (therefore)."},
  {"n":8,"k":"cz","q":"Restore the dropped letter: Ich steh am Fenster → Ich ___ am Fenster.","a":"stehe","de":"Ich stehe am Fenster.","why":"Apokope drops the final -e of the ich-form; modern prose keeps it."}],
 g17:[
  {"n":1,"k":"pr","q":"Satzbau: den / Ich / kümmere / mich / Patienten / sofort / um","a":"Ich kümmere mich sofort um den Patienten.","why":"sich kümmern um + A; reflexive pronoun directly after the verb."},
  {"n":2,"k":"pr","q":"Satzbau: beschwert / die / hat / lange / sich / Sie / über / Wartezeit","a":"Sie hat sich über die lange Wartezeit beschwert.","why":"sich beschweren über + A; in the Perfekt the participle closes the bracket."},
  {"n":3,"k":"pr","q":"Mit da-Kompositum + dass-Satz verbinden: Er achtet auf etwas. Er nimmt die Tabletten regelmäßig.","a":"Er achtet darauf, dass er die Tabletten regelmäßig nimmt.","alt":["Er achtet darauf, die Tabletten regelmäßig zu nehmen."],"why":"achten auf + A; the da-form darauf announces the following clause."},
  {"n":4,"k":"pr","q":"Bilden Sie die Frage mit wo-Kompositum: Sie leidet an Rückenschmerzen.","a":"Woran leidet sie?","alt":["Woran leidet sie denn?"],"why":"leiden an; a thing is asked about with wo(r)- + preposition: woran."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wir haben lange über den Bus gewartet.","a":"Wir haben lange auf den Bus gewartet.","why":"warten auf + A, never über."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Die Angehörigen zweifeln an die Diagnose.","a":"Die Angehörigen zweifeln an der Diagnose.","why":"zweifeln an takes the dative: an der Diagnose."},
  {"n":7,"k":"cz","q":"Ich warte ___ den Bus.","a":"auf","de":"Ich warte auf den Bus.","why":"warten auf + A; English „for“ is no guide."},
  {"n":8,"k":"cz","q":"Sie interessiert sich ___ Musik.","a":"für","de":"Sie interessiert sich für Musik.","why":"sich interessieren für + A."}],
 g18:[
  {"n":1,"k":"pr","q":"Satzbau: die / Die / Fieber / Frau / hat / hustet","a":"Die Frau, die hustet, hat Fieber.","why":"The relative clause sits right after its noun, between commas; the main verb follows it."},
  {"n":2,"k":"pr","q":"Satzbau: das / Das / dem / Gerät / ist / messen / mit / wir","a":"Das ist das Gerät, mit dem wir messen.","why":"Preposition + relative pronoun open the clause; the verb goes to the end."},
  {"n":3,"k":"pr","q":"Mit Relativsatz verbinden: Das ist der Pfleger. Er hat heute Nachtdienst.","a":"Das ist der Pfleger, der heute Nachtdienst hat.","why":"er → der (masculine nominative); the verb hat moves to the end."},
  {"n":4,"k":"pr","q":"Mit Relativsatz verbinden: Ich kenne die Ärztin. Ihr Sohn ist auch Arzt.","a":"Ich kenne die Ärztin, deren Sohn auch Arzt ist.","why":"ihr Sohn → deren Sohn (feminine genitive); no article after deren."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Patient, den ich geholfen habe, ist entlassen.","a":"Der Patient, dem ich geholfen habe, ist entlassen.","why":"helfen takes the dative, so the pronoun must be dem."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Das ist alles, das ich weiß.","a":"Das ist alles, was ich weiß.","why":"After alles the relative pronoun is was, not das."},
  {"n":7,"k":"cz","q":"Das ist der Mann, ___ dort wartet.","a":"der","de":"Das ist der Mann, der dort wartet.","why":"The pronoun is the subject of the relative clause, so nominative: der."},
  {"n":8,"k":"cz","q":"Das ist die Frau, ___ ich kenne.","a":"die","de":"Das ist die Frau, die ich kenne.","why":"Object of kennen → accusative; feminine accusative is die."}],
 g19:[
  {"n":1,"k":"pr","q":"Satzbau: andererseits / Einerseits / einschlafen / er / er / ist / kann / müde / nicht","a":"Einerseits ist er müde, andererseits kann er nicht einschlafen.","why":"Both parts take Position 1, so the verb follows each of them directly."},
  {"n":2,"k":"pr","q":"Satzbau: bleibt / deshalb / er / Er / Hause / ist / krank / zu","a":"Er ist krank, deshalb bleibt er zu Hause.","alt":["Er ist krank, er bleibt deshalb zu Hause."],"why":"deshalb is Position 1: verb next, then the subject."},
  {"n":3,"k":"pr","q":"Mit „weder … noch“ verbinden: Der Patient hat kein Fieber. Er hat keinen Husten.","a":"Der Patient hat weder Fieber noch Husten.","alt":["Der Patient hat weder Husten noch Fieber."],"why":"weder … noch already negates; kein disappears."},
  {"n":4,"k":"pr","q":"„weil“ durch „deshalb“ ersetzen: Sie bleibt zu Hause, weil sie Fieber hat.","a":"Sie hat Fieber, deshalb bleibt sie zu Hause.","alt":["Sie hat Fieber. Deshalb bleibt sie zu Hause."],"why":"deshalb introduces the result and is Position 1: deshalb bleibt sie."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Er nimmt weder Aspirin noch nicht Ibuprofen.","a":"Er nimmt weder Aspirin noch Ibuprofen.","why":"weder … noch is already negative; an extra nicht is wrong."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Der Patient hat Schmerzen, trotzdem er möchte nach Hause.","a":"Der Patient hat Schmerzen, trotzdem möchte er nach Hause.","why":"trotzdem is Position 1, so the verb must come right after it."},
  {"n":7,"k":"cz","q":"Möchten Sie Tee ___ Kaffee?","a":"oder","de":"Möchten Sie Tee oder Kaffee?","why":"oder (Position 0) offers a choice between two words."},
  {"n":8,"k":"cz","q":"Sie bleibt zu Hause, ___ sie krank ist.","a":"weil","de":"Sie bleibt zu Hause, weil sie krank ist.","why":"The verb ist stands at the end, so a Nebensatz connector is needed: weil."}],
 g20:[
  {"n":1,"k":"pr","q":"Satzbau: Bevor / Blutzucker / den / essen / messen / Sie / Sie","a":"Bevor Sie essen, messen Sie den Blutzucker.","alt":["Messen Sie den Blutzucker, bevor Sie essen."],"why":"A fronted Nebensatz counts as Position 1, so the main verb comes straight after the comma."},
  {"n":2,"k":"pr","q":"Satzbau: an / das / Falls / Fieber / rufen / Sie / steigt / uns","a":"Falls das Fieber steigt, rufen Sie uns an.","alt":["Rufen Sie uns an, falls das Fieber steigt."],"why":"falls-clause first (verb at its end), then the main clause with the verb first after the comma."},
  {"n":3,"k":"pr","q":"Nebensatz statt Präposition: Nach der Operation wurde er auf die Station verlegt.","a":"Nachdem er operiert worden war, wurde er auf die Station verlegt.","alt":["Nachdem man ihn operiert hatte, wurde er auf die Station verlegt.","Nachdem er operiert worden war, wurde er auf die Normalstation verlegt."],"why":"nach + D becomes nachdem with the Plusquamperfekt, because the main clause is in the Präteritum."},
  {"n":4,"k":"pr","q":"Präposition statt Nebensatz: Weil er stark hustet, kann er nicht schlafen.","a":"Wegen des starken Hustens kann er nicht schlafen.","alt":["Wegen seines starken Hustens kann er nicht schlafen.","Aufgrund des starken Hustens kann er nicht schlafen.","Aufgrund seines starken Hustens kann er nicht schlafen."],"why":"weil → wegen + Genitiv; the verb husten becomes the noun der Husten."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Nachdem sie die Tablette genommen hat, ging es ihr besser.","a":"Nachdem sie die Tablette genommen hatte, ging es ihr besser.","alt":["Nachdem sie die Tablette genommen hat, geht es ihr besser."],"why":"With a Präteritum main clause, the nachdem-clause needs the Plusquamperfekt."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Ich nehme ein Schmerzmittel, damit ich besser zu schlafen.","a":"Ich nehme ein Schmerzmittel, um besser zu schlafen.","alt":["Ich nehme ein Schmerzmittel, damit ich besser schlafen kann.","Ich nehme ein Schmerzmittel, damit ich besser schlafe.","Ich nehme ein Schmerzmittel, um besser schlafen zu können."],"why":"zu + Infinitiv belongs to um … zu; damit needs a full clause with a conjugated verb."},
  {"n":7,"k":"cz","q":"Ich bin müde, ___ ich wenig geschlafen habe.","a":"weil","de":"Ich bin müde, weil ich wenig geschlafen habe.","why":"weil gives the reason; obwohl would contradict the logic, damit expresses purpose."},
  {"n":8,"k":"cz","q":"___ ich esse, wasche ich mir die Hände.","a":"Bevor","de":"Bevor ich esse, wasche ich mir die Hände.","why":"bevor = before; nachdem would need a tense shift and the wrong order of events."}],
 g21:[
  {"n":1,"k":"pr","q":"Satzbau: am / Die / dritten / Entlassung / erfolgte / Tag","a":"Die Entlassung erfolgte am dritten Tag.","why":"Typical Arztbrief sentence: noun of the action as subject, erfolgen as the colourless verb."},
  {"n":2,"k":"pr","q":"Satzbau: derzeit / Dialyse / Eine / Frage / in / kommt / nicht","a":"Eine Dialyse kommt derzeit nicht in Frage.","alt":["Derzeit kommt eine Dialyse nicht in Frage."],"why":"In a Funktionsverbgefüge the noun part (in Frage) stands at the end of the clause."},
  {"n":3,"k":"pr","q":"In den Verbalstil: Die Untersuchung des Abdomens erfolgte ohne Befund.","a":"Das Abdomen wurde untersucht und war unauffällig.","alt":["Wir untersuchten das Abdomen ohne Befund.","Das Abdomen wurde untersucht, ohne Befund.","Das Abdomen wurde ohne Befund untersucht.","Das Abdomen wurde untersucht; es war unauffällig."],"why":"The genitive object becomes the subject of a passive sentence; Untersuchung → untersucht."},
  {"n":4,"k":"pr","q":"In den Nominalstil: Der Patient wurde am 05.11.2026 entlassen.","a":"Die Entlassung des Patienten erfolgte am 05.11.2026.","alt":["Entlassung des Patienten am 05.11.2026.","Die Entlassung des Patienten am 05.11.2026."],"why":"entlassen → die Entlassung; subject → genitive; the verb becomes erfolgen."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wir haben die Operation in Betracht genommen.","a":"Wir haben die Operation in Betracht gezogen.","why":"The fixed pair is in Betracht ziehen, not nehmen."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Der Behandlung erfolgte ambulant.","a":"Die Behandlung erfolgte ambulant.","why":"Nouns in -ung are always feminine: die Behandlung."},
  {"n":7,"k":"cz","q":"Die ___ dauert 20 Minuten. (untersuchen)","a":"Untersuchung","de":"Die Untersuchung dauert 20 Minuten.","why":"untersuchen → die Untersuchung; -ung nouns are feminine, so they fit after die."},
  {"n":8,"k":"cz","q":"Wir müssen jetzt eine Entscheidung ___.","a":"treffen","de":"Wir müssen jetzt eine Entscheidung treffen.","why":"The Funktionsverbgefüge is eine Entscheidung treffen."}],
 g22:[
  {"n":1,"k":"pr","q":"Satzbau: der / Der / gebracht / Patient / Polizei / von / wurde","a":"Der Patient wurde von der Polizei gebracht.","why":"wurde in Position 2, agent with von + D, Partizip II at the end."},
  {"n":2,"k":"pr","q":"Satzbau: darf / geraucht / Hier / nicht / werden","a":"Hier darf nicht geraucht werden.","why":"Impersonal modal passive: no subject, so hier takes Position 1 and es disappears."},
  {"n":3,"k":"pr","q":"Ins Passiv (Perfekt): Man hat den Patienten auf die Intensivstation verlegt.","a":"Der Patient ist auf die Intensivstation verlegt worden.","why":"man disappears; the accusative object becomes the subject; Perfekt passive is ist … worden."},
  {"n":4,"k":"pr","q":"Passiversatz mit „sein + zu“: Die Dosis muss täglich kontrolliert werden.","a":"Die Dosis ist täglich zu kontrollieren.","why":"muss + Partizip II + werden → ist zu + Infinitiv."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Patient wurde gestern geholfen.","a":"Dem Patienten wurde gestern geholfen.","why":"helfen takes the dative; it cannot become a nominative subject in the passive."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Die OP muss morgen durchgeführt.","a":"Die OP muss morgen durchgeführt werden.","why":"A modal passive needs werden after the Partizip II."},
  {"n":7,"k":"cz","q":"Das Essen ___ um 12 Uhr gebracht.","a":"wird","de":"Das Essen wird um 12 Uhr gebracht.","why":"Present passive: wird + Partizip II."},
  {"n":8,"k":"cz","q":"Die Wunde ___ gestern genäht.","a":"wurde","de":"Die Wunde wurde gestern genäht.","why":"gestern → past; Präteritum passive is wurde + Partizip II."}],
 g23:[
  {"n":1,"k":"pr","q":"Satzbau: Der / Flur / hustende / im / Mann / wartet","a":"Der hustende Mann wartet im Flur.","why":"The participle stands between article and noun, like any adjective."},
  {"n":2,"k":"pr","q":"Satzbau: Die / geschwollen / Hand / ist / noch / operierte","a":"Die operierte Hand ist noch geschwollen.","why":"Partizip II as attribute before the noun; the verb follows in Position 2."},
  {"n":3,"k":"pr","q":"In einen Relativsatz: die vom Notarzt intubierte Patientin","a":"die Patientin, die vom Notarzt intubiert wurde","alt":["die Patientin, die vom Notarzt intubiert worden ist","die Patientin, die der Notarzt intubiert hat"],"why":"Partizip II attribute → passive relative clause; the extension (vom Notarzt) moves into the clause."},
  {"n":4,"k":"pr","q":"In ein Partizipialattribut: der Patient, der seit gestern fastet","a":"der seit gestern fastende Patient","why":"Active, ongoing → Partizip I fastend + -e; the extension goes before the participle."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der schlafender Patient hat einen ruhigen Puls.","a":"Der schlafende Patient hat einen ruhigen Puls.","why":"After the definite article the ending is -e."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Die eingeliefernde Patientin ist stabil.","a":"Die eingelieferte Patientin ist stabil.","why":"She was admitted, so the passive Partizip II is needed, not Partizip I."},
  {"n":7,"k":"cz","q":"Der ___ Hund liegt in der Sonne.","a":"schlafende","de":"Der schlafende Hund liegt in der Sonne.","why":"The dog is sleeping now: Partizip I schlafend + -e after der."},
  {"n":8,"k":"cz","q":"Die ___ Tür ist kaputt. (öffnen)","a":"geöffnete","de":"Die geöffnete Tür ist kaputt.","why":"The door was opened: Partizip II geöffnet + adjective ending -e."}],
 g24:[
  {"n":1,"k":"cz","q":"Ich ___ gestern fast den Bus verpasst. (haben, Konjunktiv II)","a":"hätte","de":"Ich hätte gestern fast den Bus verpasst.","why":"It almost happened: hätte / wäre + Partizip II, following the Perfekt auxiliary.","v":[["Fast ___ ich heute zu spät gekommen. (sein, Konjunktiv II)","wäre",[],"Fast wäre ich heute zu spät gekommen."],["Beinahe ___ wir den Befund übersehen. (haben, Konjunktiv II)","hätten",[],"Beinahe hätten wir den Befund übersehen."]]},
  {"n":2,"k":"cz","q":"Wenn der Patient früher gekommen ___, hätten wir operieren können.","a":"wäre","de":"Wenn der Patient früher gekommen wäre, hätten wir operieren können.","why":"Unreal condition in the past: the wenn-clause ends in hätte / wäre.","v":[["Wenn wir das EKG sofort geschrieben ___, wäre der Infarkt früher aufgefallen.","hätten",[],"Wenn wir das EKG sofort geschrieben hätten, wäre der Infarkt früher aufgefallen."],["Wenn ihr pünktlich gekommen ___, hättet ihr den Oberarzt noch getroffen.","wärt",["wäret"],"Wenn ihr pünktlich gekommen wärt, hättet ihr den Oberarzt noch getroffen."]]},
  {"n":3,"k":"cz","q":"Hätte ich doch die Tabletten regelmäßig ___! (nehmen)","a":"genommen","de":"Hätte ich doch die Tabletten regelmäßig genommen!","why":"Unreal wish in the past: hätte / wäre first, Partizip II last.","v":[["Wäre ich nur nicht so spät ___! (losfahren)","losgefahren",[],"Wäre ich nur nicht so spät losgefahren!"],["Hätten wir bloß früher ___! (anrufen)","angerufen",[],"Hätten wir bloß früher angerufen!"]]},
  {"n":4,"k":"cz","q":"Er ___ gestern kommen müssen. (Konjunktiv II)","a":"hätte","de":"Er hätte gestern kommen müssen.","why":"With a modal verb always hätte — even when the main verb takes sein.","v":[["Sie ___ den Notarzt rufen müssen, Frau Nowak. (Konjunktiv II)","hätten",[],"Sie hätten den Notarzt rufen müssen, Frau Nowak."],["Das ___ nicht passieren dürfen. (Konjunktiv II)","hätte",[],"Das hätte nicht passieren dürfen."]]},
  {"n":5,"k":"fx","q":"Wenn ich das gewusst hätte gehabt, wäre ich geblieben.","a":"Wenn ich das gewusst hätte, wäre ich geblieben.","alt":["Hätte ich das gewusst, wäre ich geblieben."],"why":"One participle only; and no würde in the past.","v":[["Sie würden uns anrufen sollen.","Sie hätten uns anrufen sollen.",[],"Sie hätten uns anrufen sollen."]]},
  {"n":6,"k":"pr","q":"Höfliche Kritik mit „sollen“: Sie haben die Allergie nicht dokumentiert.","a":"Sie hätten die Allergie dokumentieren sollen.","why":"hätte + infinitive + modal infinitive.","v":[["Höfliche Kritik mit „können“: Du hast mich nicht geweckt.","Du hättest mich wecken können.",["Du hättest mich ruhig wecken können."],"Du hättest mich wecken können."],["Höfliche Kritik mit „müssen“: Man hat kein CT gemacht.","Man hätte ein CT machen müssen.",[],"Man hätte ein CT machen müssen."]]},
  {"n":7,"k":"pr","q":"Irreal: Der Patient hat nicht angerufen, deshalb ist das Rezept nicht fertig.","a":"Wenn der Patient angerufen hätte, wäre das Rezept fertig.","alt":["Hätte der Patient angerufen, wäre das Rezept fertig.","Wenn der Patient angerufen hätte, wäre das Rezept fertig gewesen.","Hätte der Patient angerufen, wäre das Rezept fertig gewesen."],"why":"The real negative fact becomes a positive unreal clause.","v":[["Irreal: Ich bin zu spät losgefahren, deshalb habe ich den Zug verpasst.","Wenn ich nicht zu spät losgefahren wäre, hätte ich den Zug nicht verpasst.",["Wenn ich früher losgefahren wäre, hätte ich den Zug nicht verpasst.","Wäre ich früher losgefahren, hätte ich den Zug nicht verpasst.","Wäre ich nicht zu spät losgefahren, hätte ich den Zug nicht verpasst."],"Wenn ich nicht zu spät losgefahren wäre, hätte ich den Zug nicht verpasst."]]},
  {"n":8,"k":"pr","q":"Auf Deutsch (Sie): In your place I would have done a CT at once.","a":"An Ihrer Stelle hätte ich sofort ein CT gemacht.","alt":["An Ihrer Stelle hätte ich sofort eine CT gemacht.","Ich hätte an Ihrer Stelle sofort ein CT gemacht.","Ich hätte an Ihrer Stelle sofort eine CT gemacht."],"why":"An Ihrer Stelle + hätte + Partizip II.","v":[["Auf Deutsch (Sie): You should have called us.","Sie hätten uns anrufen sollen.",[],"Sie hätten uns anrufen sollen."]]}],
 g25:[
  {"n":1,"k":"pr","q":"Satzbau: Der / er / habe / Kopfschmerzen / Patient / sagt / starke","a":"Der Patient sagt, er habe starke Kopfschmerzen.","why":"Without dass the reported clause keeps main-clause order: subject, then habe in position 2."},
  {"n":2,"k":"pr","q":"Satzbau: fragte / hätte / ich / ob / Sie / Zeit","a":"Sie fragte, ob ich Zeit hätte.","why":"ob sends the verb to the end; ich habe equals the Indikativ, so hätte is used."},
  {"n":3,"k":"pr","q":"In die indirekte Rede: Herr Schmidt sagt: „Ich bin gestern gestürzt.“","a":"Herr Schmidt sagt, er sei gestern gestürzt.","alt":["Herr Schmidt sagt, dass er gestern gestürzt sei."],"why":"ich → er, bin → sei; Partizip II stays."},
  {"n":4,"k":"pr","q":"In die indirekte Rede: Die Ärztin sagt zu mir: „Trinken Sie viel Wasser!“","a":"Die Ärztin sagt, ich solle viel Wasser trinken.","alt":["Die Ärztin sagt mir, ich solle viel Wasser trinken.","Die Ärztin sagt, dass ich viel Wasser trinken solle."],"why":"An imperative is reported with sollen in Konjunktiv I; Sie → ich."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Die Patientin berichtet, sie hat seit drei Tagen Durchfall.","a":"Die Patientin berichtet, sie habe seit drei Tagen Durchfall.","why":"Reported speech in a medical note needs Konjunktiv I: habe."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Er fragte, dass ich morgen Dienst habe.","a":"Er fragte, ob ich morgen Dienst habe.","alt":["Er fragte, ob ich morgen Dienst hätte."],"why":"A reported yes/no question takes ob, never dass."},
  {"n":7,"k":"cz","q":"Anna sagt, sie ___ müde. (Konj. I)","a":"sei","de":"Anna sagt, sie sei müde.","why":"Konjunktiv I of sein, 3rd person singular: sei."},
  {"n":8,"k":"cz","q":"Der Patient berichtet, er ___ seit gestern Übelkeit. (Konj. I)","a":"habe","de":"Der Patient berichtet, er habe seit gestern Übelkeit.","why":"3rd person singular Konjunktiv I of haben is habe; it differs from the Indikativ, so no Konjunktiv II is needed."}],
 g26:[
  {"n":1,"k":"pr","q":"Satzbau: Er / im / Labor / noch / sein / wird / wohl","a":"Er wird wohl noch im Labor sein.","why":"wird in position 2, the particle wohl after it, the infinitive sein at the end."},
  {"n":2,"k":"pr","q":"Satzbau: allergische / Das / dürfte / eine / Reaktion / sein","a":"Das dürfte eine allergische Reaktion sein.","why":"Modal verb of assumption in position 2, infinitive last."},
  {"n":3,"k":"pr","q":"Als Vermutung über die Vergangenheit (Futur II): Vermutlich hat sie die Spritze vergessen.","a":"Sie wird die Spritze vergessen haben.","alt":["Sie wird wohl die Spritze vergessen haben.","Sie wird die Spritze wohl vergessen haben."],"why":"Futur II replaces vermutlich + Perfekt."},
  {"n":4,"k":"pr","q":"Mit „dürfte“: Wahrscheinlich ist das eine Zerrung.","a":"Das dürfte eine Zerrung sein.","alt":["Es dürfte sich um eine Zerrung handeln.","Es dürfte eine Zerrung sein.","Das dürfte wohl eine Zerrung sein."],"why":"dürfte + sein carries the meaning of wahrscheinlich."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Patient wird die Tabletten nicht genommen hat.","a":"Der Patient wird die Tabletten nicht genommen haben.","why":"Futur II ends with the infinitive haben, not a conjugated form."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Das darf eine Lungenentzündung sein.","a":"Das dürfte eine Lungenentzündung sein.","why":"Only dürfte expresses probability; darf means is allowed to."},
  {"n":7,"k":"cz","q":"Morgen ___ ich dich anrufen, versprochen!","a":"werde","de":"Morgen werde ich dich anrufen, versprochen!","why":"Promise with Futur I: ich werde + Infinitiv at the end."},
  {"n":8,"k":"cz","q":"Wo ist Lena? – Sie ___ wohl noch im Bus sein.","a":"wird","de":"Wo ist Lena? – Sie wird wohl noch im Bus sein.","why":"wird + wohl + Infinitiv = a guess about the present."}],
 g27:[
  {"n":1,"k":"pr","q":"Satzbau: ausschließen / einen / Herzinfarkt / müssen / Wir / zuerst","a":"Wir müssen zuerst einen Herzinfarkt ausschließen.","alt":["Zuerst müssen wir einen Herzinfarkt ausschließen."],"why":"ausschließen is separable but stays whole as an infinitive after a modal."},
  {"n":2,"k":"pr","q":"Satzbau: auf / die / Die / Intensivstation / unvermeidbar / Verlegung / war","a":"Die Verlegung auf die Intensivstation war unvermeidbar.","why":"Verlegung (-ung, feminine) is the subject; unvermeidbar = un- + vermeid + bar."},
  {"n":3,"k":"pr","q":"Nominalstil mit -ung: Der Patient wurde gestern untersucht. → Die ___ des Patienten erfolgte gestern.","a":"Die Untersuchung des Patienten erfolgte gestern.","alt":["Die Untersuchung des Patienten fand gestern statt."],"why":"untersuchen → die Untersuchung; the object becomes a Genitiv."},
  {"n":4,"k":"pr","q":"Ersetzen Sie den Relativsatz durch ein Adjektiv auf -bar: Das ist ein Fehler, den man vermeiden kann.","a":"Das ist ein vermeidbarer Fehler.","why":"-bar expresses can be done; the adjective then takes the ein-ending -er."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Der Arzt hat den Patienten gestern geentlassen.","a":"Der Arzt hat den Patienten gestern entlassen.","why":"ent- is inseparable, so the Partizip II has no ge-."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Das Untersuchungergebnis ist unauffällig.","a":"Das Untersuchungsergebnis ist unauffällig.","why":"Nouns in -ung need Fugen-s in a compound."},
  {"n":7,"k":"cz","q":"Haus + Tür = ___ Haustür","a":"die","de":"die Haustür","why":"The last element (Tür, feminine) decides the gender of the compound."},
  {"n":8,"k":"cz","q":"Nomen aus „wohnen“: Die ___ hat drei Zimmer.","a":"Wohnung","de":"Die Wohnung hat drei Zimmer.","why":"Verb stem + -ung gives a feminine noun."}],
 g28:[
  {"n":1,"k":"pr","q":"Satzbau: ältere / Der / die / hat / Patient / Schmerzen / stärksten","a":"Der ältere Patient hat die stärksten Schmerzen.","why":"Comparative and superlative decline like any adjective: der -e, die (Pl."},
  {"n":2,"k":"pr","q":"Satzbau: Die / gedacht / ist / nicht / so / teuer / wie / Wohnung","a":"Die Wohnung ist nicht so teuer wie gedacht.","why":"Equal comparison uses so … wie, even when negated."},
  {"n":3,"k":"pr","q":"Attributiver Superlativ: Dieses Krankenhaus ist am modernsten in der Stadt.","a":"Das ist das modernste Krankenhaus in der Stadt.","alt":["Das ist das modernste Krankenhaus der Stadt.","Dieses Krankenhaus ist das modernste Krankenhaus der Stadt.","Dieses Krankenhaus ist das modernste Krankenhaus in der Stadt.","Dieses Krankenhaus ist das modernste der Stadt."],"why":"Before a noun the superlative takes the article and a normal adjective ending."},
  {"n":4,"k":"pr","q":"Mit „je … desto“: Wenn man früher kommt, wartet man kürzer.","a":"Je früher man kommt, desto kürzer wartet man.","alt":["Je früher man kommt, umso kürzer wartet man."],"why":"je-clause has the verb at the end; after desto the verb comes immediately."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Herr Müller ist ein alte Patient mit hohem Blutdruck.","a":"Herr Müller ist ein alter Patient mit hohem Blutdruck.","why":"ein shows no gender, so the adjective needs -er for masculine nominative."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Die Narbe ist größer wie letzte Woche.","a":"Die Narbe ist größer als letzte Woche.","why":"Unequal comparison takes als, not wie."},
  {"n":7,"k":"cz","q":"Das ist ein ___ Film.","a":"guter","de":"Das ist ein guter Film.","why":"ein + masculine nominative: the adjective shows -er."},
  {"n":8,"k":"cz","q":"Mein Bruder ist ___ als ich.","a":"älter","de":"Mein Bruder ist älter als ich.","why":"Comparative: alt → älter, followed by als."}],
 g29:[
  {"n":1,"k":"pr","q":"Satzbau: die / heute / Ich / möchte / Patientensicherheit / sprechen / über","a":"Ich möchte heute über die Patientensicherheit sprechen.","alt":["Heute möchte ich über die Patientensicherheit sprechen."],"why":"über + Akkusativ; the infinitive sprechen closes the bracket."},
  {"n":2,"k":"pr","q":"Satzbau: als / anderer / bin / Da / ich / Meinung / Sie","a":"Da bin ich anderer Meinung als Sie.","alt":["Ich bin da anderer Meinung als Sie."],"why":"Da in the Vorfeld, verb second; anderer Meinung is a fixed Genitiv phrase."},
  {"n":3,"k":"pr","q":"Mit „Ich bin der Meinung, dass …“: Die Besuchszeiten sind zu kurz.","a":"Ich bin der Meinung, dass die Besuchszeiten zu kurz sind.","why":"The statement becomes a dass-clause with sind at the end."},
  {"n":4,"k":"pr","q":"Mit „aufgrund“ + Genitiv: Weil die Wartezeiten lang sind, sind viele Patienten unzufrieden.","a":"Aufgrund der langen Wartezeiten sind viele Patienten unzufrieden.","why":"The weil-clause becomes a Genitiv phrase; the main verb then follows in position 2."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich finde, dass diese Idee ist sehr gut.","a":"Ich finde, dass diese Idee sehr gut ist.","alt":["Ich finde, diese Idee ist sehr gut."],"why":"After dass the verb moves to the end of the clause."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Trotz dem schlechten Wetter kamen viele Besucher.","a":"Trotz des schlechten Wetters kamen viele Besucher.","why":"In written German trotz takes the Genitiv: des schlechten Wetters."},
  {"n":7,"k":"cz","q":"Ich finde, dass das Essen hier sehr gut ___.","a":"ist","de":"Ich finde, dass das Essen hier sehr gut ist.","why":"After dass the verb ist goes to the end."},
  {"n":8,"k":"cz","q":"Es ist wichtig, jeden Tag Deutsch ___.","a":"zu lernen","de":"Es ist wichtig, jeden Tag Deutsch zu lernen.","why":"Es ist wichtig + Infinitiv mit zu."}],
 g30:[
  {"n":1,"k":"pr","q":"Satzbau: auf / Daraufhin / die / die / Intensivstation / Patientin / verlegt / wurde","a":"Daraufhin wurde die Patientin auf die Intensivstation verlegt.","alt":["Die Patientin wurde daraufhin auf die Intensivstation verlegt."],"why":"Daraufhin takes the Vorfeld, the passive auxiliary is second, Partizip II last."},
  {"n":2,"k":"pr","q":"Satzbau: Außerdem / er / klagt / Übelkeit / über","a":"Außerdem klagt er über Übelkeit.","alt":["Er klagt außerdem über Übelkeit."],"why":"Connector first, verb second, pronoun subject third."},
  {"n":3,"k":"pr","q":"Verbinden Sie ohne Wiederholung: Der Patient bekam ein Antibiotikum. Das Fieber fiel unter dem Antibiotikum.","a":"Der Patient bekam ein Antibiotikum. Darunter fiel das Fieber.","alt":["Der Patient bekam ein Antibiotikum, worunter das Fieber fiel."],"why":"The repeated noun becomes the Pronominaladverb darunter."},
  {"n":4,"k":"pr","q":"Beginnen Sie nicht mit „Ich“ (Vorfeld-Variation): Ich habe gestern den Mietvertrag unterschrieben.","a":"Gestern habe ich den Mietvertrag unterschrieben.","alt":["Den Mietvertrag habe ich gestern unterschrieben."],"why":"Any element can fill the Vorfeld; the subject then follows the verb."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Deshalb ich habe den Oberarzt informiert.","a":"Deshalb habe ich den Oberarzt informiert.","why":"After a connector in the Vorfeld the verb must come second."},
  {"n":6,"k":"fx","q":"Korrigieren Sie: Ich habe mich sehr über es gefreut.","a":"Ich habe mich sehr darüber gefreut.","why":"A thing after a preposition becomes da(r)+Präposition: darüber."},
  {"n":7,"k":"cz","q":"Das ist Herr Braun. ___ ist unser Nachbar.","a":"Er","de":"Das ist Herr Braun. Er ist unser Nachbar.","why":"The second mention of a person becomes the pronoun er."},
  {"n":8,"k":"cz","q":"Es regnet. ___ bleibe ich zu Hause.","a":"Deshalb","de":"Es regnet. Deshalb bleibe ich zu Hause.","why":"Deshalb fills the Vorfeld, then the verb comes directly."}],
 g31:[
  {"n":1,"k":"pr","q":"Auf Deutsch: I am not a nurse.","a":"Ich bin kein Pfleger.","why":"'not a' is always kein, never nicht ein."},
  {"n":2,"k":"pr","q":"Satzbau: heute / Ich / kann / kommen / nicht","a":"Ich kann heute nicht kommen.","alt":["Heute kann ich nicht kommen."],"why":"nicht stands before the second verb part (kommen)."},
  {"n":3,"k":"pr","q":"Verneinen: Ich habe Fieber.","a":"Ich habe kein Fieber.","why":"das Fieber, no article → kein Fieber."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Er hat nicht ein Auto.","a":"Er hat kein Auto.","why":"nicht ein → kein."},
  {"n":5,"k":"cz","q":"Ich habe ___ Allergien.","a":"keine","de":"Ich habe keine Allergien.","why":"Allergien is a plural noun without article → keine."},
  {"n":6,"k":"cz","q":"Der Patient ist ___ wach.","a":"nicht","de":"Der Patient ist nicht wach.","why":"wach is an adjective → nicht, placed before it."},
  {"n":7,"k":"cz","q":"Der Patient trinkt ___ Alkohol.","a":"keinen","de":"Der Patient trinkt keinen Alkohol.","why":"der Alkohol, accusative, no article → keinen."},
  {"n":8,"k":"cz","q":"Das ist ___ mein Ausweis. (not)","a":"nicht","de":"Das ist nicht mein Ausweis.","why":"A noun with a possessive (mein) is negated with nicht."}],
 g32:[
  {"n":1,"k":"pr","q":"Auf Deutsch: Do you take medication?","a":"Nehmen Sie Medikamente?","why":"German has no 'do': the verb simply comes first."},
  {"n":2,"k":"pr","q":"Satzbau: haben / Husten / lange / schon / Sie / Wie (?)","a":"Wie lange haben Sie schon Husten?","why":"Question phrase (wie lange) first, then the verb."},
  {"n":3,"k":"pr","q":"Bilden Sie eine Ja/Nein-Frage: Sie haben Fieber.","a":"Haben Sie Fieber?","why":"Verb first."},
  {"n":4,"k":"pr","q":"Als Frage (Verb zuerst): Sie haben Schmerzen.","a":"Haben Sie Schmerzen?","why":"A yes/no question is made by word order alone: verb first."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wo Sie wohnen?","a":"Wo wohnen Sie?","why":"After the question word the verb comes second, then the subject."},
  {"n":6,"k":"cz","q":"___ tut es weh? — Im Bauch.","a":"Wo","de":"Wo tut es weh? — Im Bauch.","why":"wo = where."},
  {"n":7,"k":"cz","q":"___ haben Sie die Schmerzen? — Seit gestern.","a":"Seit wann","de":"Seit wann haben Sie die Schmerzen? — Seit gestern.","why":"seit wann = since when."},
  {"n":8,"k":"cz","q":"Rauchen Sie nicht? — ___, zehn Zigaretten am Tag.","a":"Doch","de":"Rauchen Sie nicht? — Doch, zehn Zigaretten am Tag.","why":"A 'yes' to a negative question is doch."}],
 g33:[
  {"n":1,"k":"pr","q":"Satzbau: Die / Fieber / haben / Kinder / seit / Tagen / zwei","a":"Die Kinder haben seit zwei Tagen Fieber.","alt":["Seit zwei Tagen haben die Kinder Fieber."],"why":"Plural subject → haben; seit + dative plural (Tagen)."},
  {"n":2,"k":"pr","q":"In den Plural: Der Patient wartet.","a":"Die Patienten warten.","why":"der Patient → die Patienten (n-declension), verb → warten."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich habe zwei Bruder.","a":"Ich habe zwei Brüder.","why":"der Bruder → die Brüder (umlaut, no ending)."},
  {"n":4,"k":"cz","q":"die Lunge → die ___","a":"Lungen","de":"die Lungen","why":"Nouns in -e add -n."},
  {"n":5,"k":"cz","q":"das Kind → die ___","a":"Kinder","de":"die Kinder","why":"Short neuter nouns often take -er."},
  {"n":6,"k":"cz","q":"der Arzt → die ___","a":"Ärzte","de":"die Ärzte","why":"-e with umlaut: die Ärzte."},
  {"n":7,"k":"cz","q":"die Ärztin → die ___","a":"Ärztinnen","de":"die Ärztinnen","why":"-in doubles the n: -innen."},
  {"n":8,"k":"cz","q":"seit drei ___ (der Tag)","a":"Tagen","de":"seit drei Tagen","why":"seit + dative; the dative plural adds -n: Tagen."}],
 g34:[
  {"n":1,"k":"pr","q":"Satzbau: Ausweis / Bitte / geben / Ihren / mir / Sie","a":"Bitte geben Sie mir Ihren Ausweis.","alt":["Geben Sie mir bitte Ihren Ausweis."],"why":"der Ausweis, accusative → Ihren."},
  {"n":2,"k":"pr","q":"Höflich (Sie): Wo ist dein Ausweis?","a":"Wo ist Ihr Ausweis?","why":"dein → Ihr (capital)."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Frau Klein und sein Sohn warten draußen.","a":"Frau Klein und ihr Sohn warten draußen.","why":"A woman's son → ihr Sohn."},
  {"n":4,"k":"cz","q":"Frau Weber, wo ist ___ Versichertenkarte?","a":"Ihre","de":"Frau Weber, wo ist Ihre Versichertenkarte?","why":"Polite form, capital: Ihre; die Karte → -e."},
  {"n":5,"k":"cz","q":"Herr Nowak nimmt ___ Tabletten nicht.","a":"seine","de":"Herr Nowak nimmt seine Tabletten nicht.","why":"Male owner → sein-; plural noun → seine."},
  {"n":6,"k":"cz","q":"Die Patientin sucht ___ Mann.","a":"ihren","de":"Die Patientin sucht ihren Mann.","why":"Female owner → ihr-; der Mann in the accusative → ihren."},
  {"n":7,"k":"cz","q":"Ich besuche heute ___ Schwester.","a":"meine","de":"Ich besuche heute meine Schwester.","why":"besuchen + accusative; feminine accusative = nominative: meine Schwester."},
  {"n":8,"k":"cz","q":"Das ist ___ Kollege, Dr. Braun.","a":"unser","de":"Das ist unser Kollege, Dr. Braun.","why":"der Kollege, nominative → unser (no ending)."}],
 g35:[
  {"n":1,"k":"pr","q":"Auf Deutsch: I have had a cough for three days.","a":"Ich habe seit drei Tagen Husten.","why":"Still going on → seit + dative, present tense."},
  {"n":2,"k":"pr","q":"Satzbau: arbeite / bis / Freitag / Ich / Montag / von","a":"Ich arbeite von Montag bis Freitag.","alt":["Von Montag bis Freitag arbeite ich."],"why":"von … bis = from … to."},
  {"n":3,"k":"pr","q":"Mit „ohne“: Ich trinke Kaffee mit Zucker.","a":"Ich trinke Kaffee ohne Zucker.","why":"ohne + accusative; Zucker needs no article here."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich bin in 1997 geboren.","a":"Ich bin 1997 geboren.","alt":["Ich bin im Jahr 1997 geboren.","Ich bin im Jahre 1997 geboren.","Ich wurde 1997 geboren."],"why":"No preposition before a bare year."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich habe in Montag Dienst.","a":"Ich habe am Montag Dienst.","why":"Days take am: on Monday = am Montag."},
  {"n":6,"k":"cz","q":"Das Rezept ist für ___ Mann. (Ihr)","a":"Ihren","de":"Das Rezept ist für Ihren Mann.","why":"für + accusative, der Mann → Ihren."},
  {"n":7,"k":"cz","q":"Der Termin ist ___ 14 Uhr.","a":"um","de":"Der Termin ist um 14 Uhr.","why":"Clock time → um."},
  {"n":8,"k":"cz","q":"Ich habe ___ Montag Nachtdienst.","a":"am","de":"Ich habe am Montag Nachtdienst.","why":"Days → am."}],
 g36:[
  {"n":1,"k":"pr","q":"Satzbau: am / bin / geboren / Ich / März / vierzehnten","a":"Ich bin am vierzehnten März geboren.","alt":["Am vierzehnten März bin ich geboren."],"why":"am + ordinal in -en."},
  {"n":2,"k":"pr","q":"In Ziffern (Uhrzeit, 24 h): Viertel nach sieben am Abend","a":"19:15","alt":["19.15","19:15 Uhr","19.15 Uhr","19 Uhr 15"],"why":"Evening: 7 + 12 = 19; Viertel nach = :15."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Der Patient ist dreiundsiebenzig Jahre alt.","a":"Der Patient ist dreiundsiebzig Jahre alt.","why":"sieben shortens: siebzig."},
  {"n":4,"k":"cz","q":"16 = ___","a":"sechzehn","why":"sechs loses its s: sechzehn."},
  {"n":5,"k":"cz","q":"Der Termin ist um ___ zehn. (9:30, spoken)","a":"halb","de":"Der Termin ist um halb zehn.","why":"9:30 = halb zehn."},
  {"n":6,"k":"pr","q":"Auf Deutsch, in Worten: The appointment is at half past three. (spoken German)","a":"Der Termin ist um halb vier.","alt":["Der Termin ist um fünfzehn Uhr dreißig.","Der Termin ist um drei Uhr dreißig."],"why":"halb vier = 3:30: half towards four."}],
 g37:[
  {"n":1,"k":"pr","q":"Satzbau: aber / arbeite / bin / ich / Ich / müde / weiter","a":"Ich bin müde, aber ich arbeite weiter.","why":"Comma before aber; normal word order after it."},
  {"n":2,"k":"pr","q":"Verbinden Sie mit „denn“: Ich gehe zum Arzt. Ich habe Schmerzen.","a":"Ich gehe zum Arzt, denn ich habe Schmerzen.","why":"denn + normal word order, comma before it."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich bin krank, denn bleibe ich zu Hause.","a":"Ich bin krank, deshalb bleibe ich zu Hause.","alt":["Ich bin krank, deswegen bleibe ich zu Hause.","Ich bin krank, daher bleibe ich zu Hause.","Ich bin krank, darum bleibe ich zu Hause.","Ich bin krank, also bleibe ich zu Hause."],"why":"denn gives the reason; the consequence needs deshalb."},
  {"n":4,"k":"cz","q":"Ich nehme die Tablette, ___ ich habe Schmerzen.","a":"denn","de":"Ich nehme die Tablette, denn ich habe Schmerzen.","why":"denn = because, normal word order after it."},
  {"n":5,"k":"cz","q":"Das ist kein Infarkt, ___ eine Muskelzerrung.","a":"sondern","de":"Das ist kein Infarkt, sondern eine Muskelzerrung.","why":"After a negation, a correction → sondern."},
  {"n":6,"k":"cz","q":"Möchten Sie Tee ___ Wasser?","a":"oder","de":"Möchten Sie Tee oder Wasser?","why":"oder = or."},
  {"n":7,"k":"cz","q":"Ich komme nicht heute, ___ morgen. (but rather)","a":"sondern","de":"Ich komme nicht heute, sondern morgen.","why":"nicht … sondern."},
  {"n":8,"k":"cz","q":"Sie hat Husten ___ Fieber. (and)","a":"und","de":"Sie hat Husten und Fieber.","why":"und joins two words; no comma."}],
 g38:[
  {"n":1,"k":"pr","q":"Satzbau: die / habe / Hand / Ich / mir / verletzt","a":"Ich habe mir die Hand verletzt.","why":"Dative pronoun (mir) because the hand is the accusative object."},
  {"n":2,"k":"pr","q":"Ins Perfekt: Er verletzt sich.","a":"Er hat sich verletzt.","why":"Reflexive verbs always form the perfect with haben."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich wasche mich die Hände.","a":"Ich wasche mir die Hände.","why":"With a body part as object the reflexive is dative."},
  {"n":4,"k":"cz","q":"Wie fühlen Sie ___ heute?","a":"sich","de":"Wie fühlen Sie sich heute?","why":"Reflexive for Sie is sich (lowercase)."},
  {"n":5,"k":"cz","q":"Ich habe ___ erkältet.","a":"mich","de":"Ich habe mich erkältet.","why":"sich erkälten, accusative: ich → mich."},
  {"n":6,"k":"cz","q":"Ich habe ___ das Bein gebrochen.","a":"mir","de":"Ich habe mir das Bein gebrochen.","why":"Body part is the accusative object → the pronoun is dative: mir."},
  {"n":7,"k":"cz","q":"Bitte setzen Sie ___.","a":"sich","de":"Bitte setzen Sie sich.","why":"sich setzen; polite imperative: Setzen Sie sich."},
  {"n":8,"k":"cz","q":"Der Patient hat ___ dreimal übergeben.","a":"sich","de":"Der Patient hat sich dreimal übergeben.","why":"sich übergeben = to vomit; third person → sich."}],
 g39:[
  {"n":1,"k":"pr","q":"Satzbau: es / gebe / Ich / Ihnen / sofort","a":"Ich gebe es Ihnen sofort.","why":"Two pronouns: accusative (es) first, then dative (Ihnen)."},
  {"n":2,"k":"pr","q":"Ersetzen Sie beide Objekte durch Pronomen: Ich zeige dem Arzt den Befund.","a":"Ich zeige ihn ihm.","why":"den Befund → ihn, dem Arzt → ihm; accusative first."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich gebe das Rezept ihm.","a":"Ich gebe ihm das Rezept.","why":"A pronoun comes before a noun."},
  {"n":4,"k":"cz","q":"Wo ist Herr Braun? Ich suche ___.","a":"ihn","de":"Wo ist Herr Braun? Ich suche ihn.","why":"suchen + accusative → ihn."},
  {"n":5,"k":"cz","q":"Frau Weber, ich verschreibe ___ ein Antibiotikum.","a":"Ihnen","de":"Frau Weber, ich verschreibe Ihnen ein Antibiotikum.","why":"verschreiben: to whom → dative, polite: Ihnen."},
  {"n":6,"k":"cz","q":"Der Befund? Ich schicke ___ morgen.","a":"ihn Ihnen","de":"Der Befund? Ich schicke ihn Ihnen morgen.","why":"Two pronouns: accusative (ihn) before dative (Ihnen)."},
  {"n":7,"k":"cz","q":"___ ist schwindelig.","a":"Mir","de":"Mir ist schwindelig.","why":"Feelings of this kind use the dative: Mir ist schwindelig."},
  {"n":8,"k":"cz","q":"Ich erkläre ___ die Untersuchung.","a":"der Patientin","de":"Ich erkläre der Patientin die Untersuchung.","why":"Dative noun before accusative noun: der Patientin die Untersuchung."}],
 g40:[
  {"n":1,"k":"pr","q":"Satzbau: bleibe / Dienst / habe / hier / ich / Ich / weil","a":"Ich bleibe hier, weil ich Dienst habe.","why":"Comma, weil, … verb last."},
  {"n":2,"k":"pr","q":"Verbinden Sie mit „weil“: Er bleibt im Bett. Er hat Fieber.","a":"Er bleibt im Bett, weil er Fieber hat.","alt":["Weil er Fieber hat, bleibt er im Bett."],"why":"weil + verb last."},
  {"n":3,"k":"pr","q":"Auf Deutsch: I don't know if he is allergic.","a":"Ich weiß nicht, ob er allergisch ist.","why":"if = whether → ob."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich nehme das nicht, weil ich bin allergisch.","a":"Ich nehme das nicht, weil ich allergisch bin.","alt":["Ich nehme das nicht, denn ich bin allergisch."],"why":"After weil the verb goes to the end."},
  {"n":5,"k":"cz","q":"Ich weiß nicht, ___ er Diabetes hat.","a":"ob","de":"Ich weiß nicht, ob er Diabetes hat.","why":"'whether' → ob."},
  {"n":6,"k":"cz","q":"Er sagt, dass er nicht ___","a":"schlafen kann.","de":"Er sagt, dass er nicht schlafen kann.","why":"Conjugated verb (kann) last, infinitive before it."},
  {"n":7,"k":"cz","q":"Ich glaube, ___ das Bein gebrochen ist.","a":"dass","de":"Ich glaube, dass das Bein gebrochen ist.","why":"dass = that."},
  {"n":8,"k":"cz","q":"Sie kommt nicht, weil sie keine Zeit ___. (haben)","a":"hat","de":"Sie kommt nicht, weil sie keine Zeit hat.","why":"Verb at the end, conjugated: sie hat."}],
 g41:[
  {"n":1,"k":"pr","q":"Satzbau: Als / Asthma / hatte / ich / Kind / oft","a":"Als Kind hatte ich oft Asthma.","alt":["Ich hatte als Kind oft Asthma."],"why":"Time phrase first, verb second."},
  {"n":2,"k":"pr","q":"Ins Präteritum: Ich habe Kopfschmerzen.","a":"Ich hatte Kopfschmerzen.","why":"haben → hatte."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich musste gestern arbeiten und könnte nicht kommen.","a":"Ich musste gestern arbeiten und konnte nicht kommen.","why":"The simple past has no umlaut: konnte."},
  {"n":4,"k":"cz","q":"Gestern ___ ich krank.","a":"war","de":"Gestern war ich krank.","why":"Past of sein → war."},
  {"n":5,"k":"cz","q":"___ Sie schon einmal eine Operation?","a":"Hatten","de":"Hatten Sie schon einmal eine Operation?","why":"haben → hatten (Sie)."},
  {"n":6,"k":"cz","q":"Ich ___ die ganze Nacht nicht schlafen.","a":"konnte","de":"Ich konnte die ganze Nacht nicht schlafen.","why":"Past: konnte (no umlaut)."},
  {"n":7,"k":"cz","q":"Er ___ gestern nicht arbeiten. (was not allowed to)","a":"durfte","de":"Er durfte gestern nicht arbeiten.","why":"dürfen → durfte."},
  {"n":8,"k":"cz","q":"Wo ___ du gestern Abend? (sein)","a":"warst","de":"Wo warst du gestern Abend?","why":"du warst."}],
 g42:[
  {"n":1,"k":"pr","q":"Satzbau: frühstücken / habe / Ich / keine / Zeit / zu","a":"Ich habe keine Zeit, zu frühstücken.","why":"zu + infinitive at the end."},
  {"n":2,"k":"pr","q":"Mit „um … zu“: Ich gehe in die Apotheke. Ich will Tabletten kaufen.","a":"Ich gehe in die Apotheke, um Tabletten zu kaufen.","alt":["Um Tabletten zu kaufen, gehe ich in die Apotheke."],"why":"um + … + zu + infinitive; wollen disappears."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich bin hier für zu arbeiten.","a":"Ich bin hier, um zu arbeiten.","why":"Purpose: um … zu, never für zu."},
  {"n":4,"k":"cz","q":"Ich versuche, weniger ___","a":"zu rauchen.","de":"Ich versuche, weniger zu rauchen.","why":"versuchen + zu + infinitive."},
  {"n":5,"k":"cz","q":"Ich muss heute lange ___","a":"arbeiten.","de":"Ich muss heute lange arbeiten.","why":"No zu after a modal verb."},
  {"n":6,"k":"cz","q":"Vergessen Sie nicht, mich ___","a":"anzurufen.","de":"Vergessen Sie nicht, mich anzurufen.","why":"Separable verb: zu goes between prefix and verb."},
  {"n":7,"k":"cz","q":"Ich erkläre es langsam, ___ der Patient es versteht.","a":"damit","de":"Ich erkläre es langsam, damit der Patient es versteht.","why":"Different subjects (ich / der Patient) → damit."},
  {"n":8,"k":"cz","q":"Es ist wichtig, die Hände ___ waschen.","a":"zu","de":"Es ist wichtig, die Hände zu waschen.","why":"Es ist wichtig, … zu + infinitive."}],
 g43:[
  {"n":1,"k":"pr","q":"Satzbau: Deutschland / In / Kaffee / man / trinkt / viel","a":"In Deutschland trinkt man viel Kaffee.","alt":["Man trinkt in Deutschland viel Kaffee."],"why":"Place first, verb second, then man."},
  {"n":2,"k":"pr","q":"In den Plural: Jeder Patient bekommt ein Armband.","a":"Alle Patienten bekommen ein Armband.","why":"jeder has no plural → alle; verb plural."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich habe nicht nichts gehört.","a":"Ich habe nichts gehört.","why":"German uses a single negative."},
  {"n":4,"k":"cz","q":"Nehmen Sie die Tablette ___ Abend.","a":"jeden","de":"Nehmen Sie die Tablette jeden Abend.","why":"Time expressions without preposition are accusative: der Abend → jeden Abend."},
  {"n":5,"k":"cz","q":"Hier ___ man nicht parken.","a":"darf","de":"Hier darf man nicht parken.","why":"man takes the er-form."},
  {"n":6,"k":"cz","q":"Haben Sie heute ___ gegessen? — Nein, nichts.","a":"etwas","de":"Haben Sie heute etwas gegessen? — Nein, nichts.","why":"etwas = something / anything."},
  {"n":7,"k":"cz","q":"Gibt es etwas ___?","a":"Neues","de":"Gibt es etwas Neues?","why":"After etwas the adjective is a capitalised noun in -es."},
  {"n":8,"k":"cz","q":"___ Arm tut weh, der rechte oder der linke?","a":"Welcher","de":"Welcher Arm tut weh, der rechte oder der linke?","why":"der Arm, nominative → welcher."}],
 g44:[
  {"n":1,"k":"cz","q":"Ich untersuche den ___. (der Patient)","a":"Patienten","de":"Ich untersuche den Patienten.","why":"Accusative of an n-noun: -(e)n.","v":[["Bitte rufen Sie den ___ an. (der Kollege)","Kollegen",[],"Bitte rufen Sie den Kollegen an."],["Wir warten auf den ___. (der Kardiologe)","Kardiologen",[],"Wir warten auf den Kardiologen."]]},
  {"n":2,"k":"cz","q":"Ich habe mit dem ___ gesprochen. (der Student)","a":"Studenten","de":"Ich habe mit dem Studenten gesprochen.","why":"Dative of an n-noun: -(e)n.","v":[["Geben Sie das bitte dem ___. (der Assistent)","Assistenten",[],"Geben Sie das bitte dem Assistenten."],["Das Fahrrad gehört einem ___. (der Nachbar)","Nachbarn",[],"Das Fahrrad gehört einem Nachbarn."]]},
  {"n":3,"k":"cz","q":"Wie ist der Name des ___? (der Patient)","a":"Patienten","de":"Wie ist der Name des Patienten?","why":"Genitive of an n-noun: -(e)n, no -s.","v":[["Das ist das Büro des ___. (der Kollege)","Kollegen",[],"Das ist das Büro des Kollegen."],["die Aussage des ___ (der Zeuge)","Zeugen",[],"die Aussage des Zeugen"]]},
  {"n":4,"k":"cz","q":"Ich stelle Ihnen ___ Weber vor. (Herr)","a":"Herrn","de":"Ich stelle Ihnen Herrn Weber vor.","why":"Herr → Herrn in every case but the nominative; in a greeting it is nominative: Herr.","v":[["Der Brief ist für ___ Dr. Braun. (Herr)","Herrn",[],"Der Brief ist für Herrn Dr. Braun."],["Guten Tag, ___ Weber! (Herr)","Herr",[],"Guten Tag, Herr Weber!"]]},
  {"n":5,"k":"cz","q":"Bitte buchstabieren Sie Ihren ___. (der Name)","a":"Namen","de":"Bitte buchstabieren Sie Ihren Namen.","why":"der Name → den Namen, dem Namen, des Namens; das Herz → dem Herzen.","v":[["Ich habe Ihren ___ leider nicht verstanden. (der Name)","Namen",[],"Ich habe Ihren Namen leider nicht verstanden."],["Das liegt mir sehr am ___. (das Herz)","Herzen",[],"Das liegt mir sehr am Herzen."]]},
  {"n":6,"k":"cz","q":"Ich rufe den ___ an. (der Arzt)","a":"Arzt","de":"Ich rufe den Arzt an.","why":"Not every masculine person is an n-noun: den Arzt, den Professor — but den Chirurgen.","v":[["Fragen Sie bitte den ___. (der Professor)","Professor",[],"Fragen Sie bitte den Professor."],["Ich kenne den ___ seit Jahren. (der Chirurg)","Chirurgen",[],"Ich kenne den Chirurgen seit Jahren."]]},
  {"n":7,"k":"pr","q":"Satzbau (Perfekt): ich / der Patient / schon / aufnehmen","a":"Ich habe den Patienten schon aufgenommen.","alt":["Ich habe schon den Patienten aufgenommen."],"why":"The object is an n-noun: den Patienten.","v":[["Satzbau (Präsens): wir / der Nachbar / helfen","Wir helfen dem Nachbarn.",[],"Wir helfen dem Nachbarn."],["Satzbau (Präsens, Frage): Sie / der Kollege / kennen / ?","Kennen Sie den Kollegen?",[],"Kennen Sie den Kollegen?"]]},
  {"n":8,"k":"pr","q":"Auf Deutsch: I am speaking with the patient. (a man)","a":"Ich spreche mit dem Patienten.","why":"mit + dative: dem Patienten.","v":[["Auf Deutsch: I know the neighbour. (a man; kennen)","Ich kenne den Nachbarn.",[],"Ich kenne den Nachbarn."],["Auf Deutsch: That is Mr Weber's bag. (die Tasche von …)","Das ist die Tasche von Herrn Weber.",["Das ist Herrn Webers Tasche.","Das ist die Tasche Herrn Webers."],"Das ist die Tasche von Herrn Weber."]]},
  {"n":9,"k":"fx","q":"Korrigieren Sie: Ich habe den Patient gestern untersucht.","a":"Ich habe den Patienten gestern untersucht.","why":"der Patient is an n-noun: den Patienten."}],
 g45:[
  {"n":1,"k":"pr","q":"Satzbau: Berlin / bin / dem / gefahren / gestern / Ich / mit / nach / Zug","a":"Ich bin gestern mit dem Zug nach Berlin gefahren.","alt":["Gestern bin ich mit dem Zug nach Berlin gefahren."],"why":"Te – Mo – Lo, participle at the end."},
  {"n":2,"k":"pr","q":"Beginnen Sie mit „Seit drei Tagen“: Ich habe seit drei Tagen Husten.","a":"Seit drei Tagen habe ich Husten.","why":"The verb stays second; the subject moves behind it."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich fahre in die Klinik mit dem Bus heute.","a":"Ich fahre heute mit dem Bus in die Klinik.","why":"Time (heute), manner (mit dem Bus), place (in die Klinik)."},
  {"n":4,"k":"cz","q":"Morgen ___ zum Arzt.","a":"gehe ich","de":"Morgen gehe ich zum Arzt.","why":"Time in position 1 → verb second, subject after it."},
  {"n":5,"k":"cz","q":"Heute ___ ich Nachtdienst. (haben)","a":"habe","de":"Heute habe ich Nachtdienst.","why":"Verb in position 2 after heute."},
  {"n":6,"k":"pr","q":"Satzbau (Perfekt): ich / gestern / mit dem Taxi / in die Klinik / fahren","a":"Ich bin gestern mit dem Taxi in die Klinik gefahren.","alt":["Gestern bin ich mit dem Taxi in die Klinik gefahren."],"why":"Time – manner – place: gestern, mit dem Taxi, in die Klinik."}],
 g46:[
  {"n":1,"k":"pr","q":"Satzbau: Als / Asthma / hatte / ich / ich / klein / war","a":"Als ich klein war, hatte ich Asthma.","why":"als-clause first, then verb – subject."},
  {"n":2,"k":"pr","q":"Ins Plusquamperfekt: Er hat die Tablette genommen.","a":"Er hatte die Tablette genommen.","why":"hat → hatte."},
  {"n":3,"k":"pr","q":"Auf Deutsch: When I arrived, the patient was asleep.","a":"Als ich ankam, schlief der Patient.","why":"One event in the past → als."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Wenn ich zehn Jahre alt war, bin ich vom Baum gefallen.","a":"Als ich zehn Jahre alt war, bin ich vom Baum gefallen.","why":"A single time in the past needs als."},
  {"n":5,"k":"cz","q":"___ ich gestern nach Hause kam, war ich sehr müde.","a":"Als","de":"Als ich gestern nach Hause kam, war ich sehr müde.","why":"One event in the past → als."},
  {"n":6,"k":"cz","q":"Immer ___ ich Treppen steige, bekomme ich Luftnot.","a":"wenn","de":"Immer wenn ich Treppen steige, bekomme ich Luftnot.","why":"Repeated → wenn."},
  {"n":7,"k":"cz","q":"Ich weiß nicht, ___ der Arzt kommt.","a":"wann","de":"Ich weiß nicht, wann der Arzt kommt.","why":"Indirect question about time → wann."},
  {"n":8,"k":"cz","q":"Nachdem er gegessen ___, ging er spazieren.","a":"hatte","de":"Nachdem er gegessen hatte, ging er spazieren.","why":"nachdem + Plusquamperfekt before a Präteritum."}],
 g47:[
  {"n":1,"k":"pr","q":"Auf Deutsch: You must not get up.","a":"Sie dürfen nicht aufstehen.","why":"Prohibition = nicht dürfen."},
  {"n":2,"k":"pr","q":"Satzbau: ein / EKG / lassen / schreiben / Wir","a":"Wir lassen ein EKG schreiben.","why":"lassen in position 2, infinitive at the end, no zu."},
  {"n":3,"k":"pr","q":"Mit „brauchen“: Sie müssen nicht warten.","a":"Sie brauchen nicht zu warten.","alt":["Sie brauchen nicht warten."],"why":"nicht müssen = nicht brauchen zu."},
  {"n":4,"k":"pr","q":"Auf Deutsch: She became a doctor.","a":"Sie wurde Ärztin.","why":"become = werden."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich lasse meine Augen zu untersuchen.","a":"Ich lasse meine Augen untersuchen.","why":"No zu after lassen."},
  {"n":6,"k":"cz","q":"Ich ___ mir morgen Blut abnehmen.","a":"lasse","de":"Ich lasse mir morgen Blut abnehmen.","why":"ich lasse + infinitive at the end."},
  {"n":7,"k":"cz","q":"Mir ___ schwindelig.","a":"wird","de":"Mir wird schwindelig.","why":"werden = become: Mir wird schwindelig."},
  {"n":8,"k":"cz","q":"Das Fenster ___ nicht öffnen.","a":"lässt sich","de":"Das Fenster lässt sich nicht öffnen.","why":"sich lassen + infinitive = can (not) be done."}],
 g48:[
  {"n":1,"k":"pr","q":"Satzbau: der / er / hat / noch / Schmerzen / Therapie / Trotz","a":"Trotz der Therapie hat er noch Schmerzen.","alt":["Er hat trotz der Therapie noch Schmerzen."],"why":"Prepositional phrase first, then verb – subject."},
  {"n":2,"k":"pr","q":"Mit „wegen“: Er bleibt zu Hause, weil er eine Erkältung hat.","a":"Wegen einer Erkältung bleibt er zu Hause.","alt":["Er bleibt wegen einer Erkältung zu Hause.","Wegen der Erkältung bleibt er zu Hause.","Er bleibt wegen der Erkältung zu Hause.","Wegen seiner Erkältung bleibt er zu Hause.","Er bleibt wegen seiner Erkältung zu Hause."],"why":"wegen + genitive: einer Erkältung."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Trotz er krank ist, arbeitet er.","a":"Obwohl er krank ist, arbeitet er.","alt":["Trotz seiner Krankheit arbeitet er.","Trotz der Krankheit arbeitet er."],"why":"trotz stands before a noun; a clause needs obwohl."},
  {"n":4,"k":"cz","q":"Wegen ___ konnte er nicht schlafen.","a":"des Hustens","de":"Wegen des Hustens konnte er nicht schlafen.","why":"wegen + genitive: der Husten → des Hustens."},
  {"n":5,"k":"cz","q":"___ der Schmerzen geht sie arbeiten.","a":"Trotz","de":"Trotz der Schmerzen geht sie arbeiten.","why":"in spite of → trotz."},
  {"n":6,"k":"cz","q":"Während ___ ist der Blutdruck gefallen.","a":"der Operation","de":"Während der Operation ist der Blutdruck gefallen.","why":"während + genitive, feminine → der."},
  {"n":7,"k":"cz","q":"Er hat Fieber, ___ geht er zur Arbeit.","a":"trotzdem","de":"Er hat Fieber, trotzdem geht er zur Arbeit.","why":"Adverb in position 1 before the verb → trotzdem."},
  {"n":8,"k":"cz","q":"___ er Fieber hat, geht er zur Arbeit.","a":"Obwohl","de":"Obwohl er Fieber hat, geht er zur Arbeit.","why":"Conjunction with verb at the end → obwohl."}],
 g49:[
  {"n":1,"k":"pr","q":"Satzbau: dass / Es / ist / Sie / trinken / viel / wichtig","a":"Es ist wichtig, dass Sie viel trinken.","why":"es points forward to the dass-clause."},
  {"n":2,"k":"pr","q":"Beginnen Sie mit „Mir“: Es ist mir schwindelig.","a":"Mir ist schwindelig.","why":"es drops out when the dative stands first."},
  {"n":3,"k":"pr","q":"Auf Deutsch: There is a pharmacy in the building.","a":"Es gibt eine Apotheke im Haus.","why":"there is / there are = es gibt + accusative."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Es gibt ein Aufzug im Haus.","a":"Es gibt einen Aufzug im Haus.","why":"es gibt + accusative: der Aufzug → einen Aufzug."},
  {"n":5,"k":"cz","q":"___ gibt hier keinen Aufzug.","a":"Es","de":"Es gibt hier keinen Aufzug.","why":"es gibt = there is."},
  {"n":6,"k":"cz","q":"Es gibt ___ Arzt im Dorf.","a":"einen","de":"Es gibt einen Arzt im Dorf.","why":"es gibt + accusative: einen Arzt."},
  {"n":7,"k":"cz","q":"Mir ___ schlecht.","a":"ist","de":"Mir ist schlecht.","why":"Mir ist schlecht (es is dropped when mir comes first)."},
  {"n":8,"k":"cz","q":"___ handelt sich um eine 45-jährige Patientin.","a":"Es","alt":["es"],"de":"Es handelt sich um eine 45-jährige Patientin.","why":"Fixed phrase: Es handelt sich um + accusative."}],
 g50:[
  {"n":1,"k":"pr","q":"Satzbau: doch / her / Kommen / mal / Sie","a":"Kommen Sie doch mal her.","why":"doch before mal; particles stand in the middle."},
  {"n":2,"k":"pr","q":"Freundlicher, mit „mal“: Zeigen Sie mir den Arm.","a":"Zeigen Sie mir mal den Arm.","alt":["Zeigen Sie mal den Arm.","Zeigen Sie mir doch mal den Arm.","Zeigen Sie mir bitte mal den Arm.","Zeigen Sie mir mal bitte den Arm."],"why":"mal follows the pronoun."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Was ist ja passiert?","a":"Was ist denn passiert?","why":"In questions the friendly particle is denn; ja does not occur in W-questions."},
  {"n":4,"k":"cz","q":"Friendly to a patient: „Machen Sie ___ den Oberkörper frei.“","a":"mal","de":"„Machen Sie mal den Oberkörper frei.“","why":"mal softens a request."},
  {"n":5,"k":"cz","q":"„Was ist ___ passiert?“ (interested, friendly)","a":"denn","de":"„Was ist denn passiert?“","why":"denn makes questions warmer."},
  {"n":6,"k":"cz","q":"„Der Bus ist weg. Dann gehen wir ___ zu Fuß.“","a":"eben","de":"„Der Bus ist weg. Dann gehen wir eben zu Fuß.“","why":"eben/halt = nothing to be done about it."},
  {"n":7,"k":"cz","q":"„Das ist ___ ein Virusinfekt.“ (probably)","a":"wohl","de":"„Das ist wohl ein Virusinfekt.“","why":"wohl marks an assumption."},
  {"n":8,"k":"cz","q":"„Sie nehmen ___ Marcumar, da müssen wir vorsichtig sein.“ (as we both know)","a":"ja","de":"„Sie nehmen ja Marcumar, da müssen wir vorsichtig sein.“","why":"ja signals shared knowledge."}],
 g51:[
  {"n":1,"k":"pr","q":"Auf Deutsch: He must have forgotten it.","a":"Er muss es vergessen haben.","why":"Assumption about the past: muss + Partizip II + haben."},
  {"n":2,"k":"pr","q":"Satzbau: Die / Fieber / gehabt / haben / Patientin / soll","a":"Die Patientin soll Fieber gehabt haben.","why":"sollen + Partizip II + haben = it is said that she had."},
  {"n":3,"k":"pr","q":"Mit „könnte“: Vielleicht ist es eine Lungenembolie.","a":"Es könnte eine Lungenembolie sein.","alt":["Das könnte eine Lungenembolie sein.","Es könnte sich um eine Lungenembolie handeln."],"why":"vielleicht → könnte + sein."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Er muss gestern gestürzt haben.","a":"Er muss gestern gestürzt sein.","why":"stürzen forms its perfect with sein."},
  {"n":5,"k":"cz","q":"Das ___ nicht sein — das EKG ist völlig normal. (impossible)","a":"kann","de":"Das kann nicht sein — das EKG ist völlig normal.","why":"kann nicht = impossible."},
  {"n":6,"k":"cz","q":"Die Ergebnisse ___ in einer Stunde vorliegen. (should, if all goes as expected)","a":"müssten","alt":["dürften","sollten"],"de":"Die Ergebnisse müssten in einer Stunde vorliegen.","why":"müssten: expected with high probability."}],
 g52:[
  {"n":1,"k":"pr","q":"Satzbau: Arzt / Der / Diagnose / die / gestellt / hat","a":"Der Arzt hat die Diagnose gestellt.","why":"eine Diagnose stellen."},
  {"n":2,"k":"pr","q":"Formell, mit „einen Antrag auf … stellen“: Der Patient hat seine Verlegung beantragt.","a":"Der Patient hat einen Antrag auf Verlegung gestellt.","alt":["Der Patient hat einen Antrag darauf gestellt, verlegt zu werden.","Der Patient stellte einen Antrag auf Verlegung.","Der Patient hat einen Verlegungsantrag gestellt."],"why":"beantragen → einen Antrag stellen (auf + accusative)."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Wir haben eine Entscheidung gemacht.","a":"Wir haben eine Entscheidung getroffen.","alt":["Wir haben eine Entscheidung gefällt."],"why":"Entscheidung + treffen (getroffen)."},
  {"n":4,"k":"cz","q":"eine Entscheidung ___","a":"treffen","de":"eine Entscheidung treffen","why":"eine Entscheidung treffen — never machen."},
  {"n":5,"k":"cz","q":"einen Antrag ___","a":"stellen","de":"einen Antrag stellen","why":"einen Antrag stellen = to apply."},
  {"n":6,"k":"cz","q":"Diese Therapie kommt nicht in ___.","a":"Frage","de":"Diese Therapie kommt nicht in Frage.","why":"in Frage kommen = to be an option."},
  {"n":7,"k":"cz","q":"Wir müssen eine Operation in Betracht ___.","a":"ziehen","de":"Wir müssen eine Operation in Betracht ziehen.","why":"in Betracht ziehen = to consider."},
  {"n":8,"k":"cz","q":"Das Alter spielt hier eine große ___.","a":"Rolle","de":"Das Alter spielt hier eine große Rolle.","why":"eine Rolle spielen = to matter."}],
 g53:[
  {"n":1,"k":"pr","q":"Satzbau: begonnene / Die / gestern / Therapie / Wirkung / zeigt","a":"Die gestern begonnene Therapie zeigt Wirkung.","why":"Article – attribute – participle – noun, then the verb."},
  {"n":2,"k":"pr","q":"Als Partizipialattribut: die Patientin, die mit Fieber eingeliefert wurde","a":"die mit Fieber eingelieferte Patientin","why":"Partizip II (eingeliefert) + -e, placed before the noun."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Die in den Arm ausstrahlende Schmerzen bestehen seit gestern.","a":"Die in den Arm ausstrahlenden Schmerzen bestehen seit gestern.","why":"After die in the plural the ending is -en."},
  {"n":4,"k":"cz","q":"die seit einer Woche ___ Beschwerden (zunehmen, Partizip I)","a":"zunehmenden","de":"die seit einer Woche zunehmenden Beschwerden","why":"zunehmen + d + plural ending -en."},
  {"n":5,"k":"cz","q":"der vor zwei Jahren ___ Herzinfarkt (erleiden, Partizip II)","a":"erlittene","de":"der vor zwei Jahren erlittene Herzinfarkt","why":"erleiden → erlitten; after der, masculine nominative → -e."},
  {"n":6,"k":"pr","q":"Als Partizipialattribut: die Schmerzen, die seit drei Tagen bestehen → die …","a":"die seit drei Tagen bestehenden Schmerzen","alt":["Die seit drei Tagen bestehenden Schmerzen"],"why":"Active and ongoing → Partizip I + ending: bestehenden."}],
 g54:[
  {"n":1,"k":"pr","q":"Satzbau: er / ich / keine / Medikamente / nimmt / Soweit / weiß","a":"Soweit ich weiß, nimmt er keine Medikamente.","why":"Subordinate clause first, then verb – subject."},
  {"n":2,"k":"pr","q":"Mit „indem“: Man kann Stürze vermeiden. Man trägt feste Schuhe.","a":"Man kann Stürze vermeiden, indem man feste Schuhe trägt.","alt":["Indem man feste Schuhe trägt, kann man Stürze vermeiden."],"why":"indem + verb last."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Er wurde gesund, in dem er viel schlief.","a":"Er wurde gesund, indem er viel schlief.","why":"The conjunction is one word: indem."},
  {"n":4,"k":"cz","q":"Man verhindert Infektionen, ___ man die Hände desinfiziert.","a":"indem","de":"Man verhindert Infektionen, indem man die Hände desinfiziert.","why":"Means (by doing) → indem."},
  {"n":5,"k":"cz","q":"Sie können morgen nach Hause, ___ das Fieber nicht wiederkommt.","a":"sofern","de":"Sie können morgen nach Hause, sofern das Fieber nicht wiederkommt.","why":"Condition → sofern (provided that)."},
  {"n":6,"k":"cz","q":"Er sollte nicht Auto fahren, ___ er starke Schmerzmittel nimmt.","a":"zumal","de":"Er sollte nicht Auto fahren, zumal er starke Schmerzmittel nimmt.","why":"An additional, stronger reason → zumal."},
  {"n":7,"k":"cz","q":"Der Patient kann kaum sitzen, ___ laufen.","a":"geschweige denn","de":"Der Patient kann kaum sitzen, geschweige denn laufen.","why":"let alone → geschweige denn."},
  {"n":8,"k":"cz","q":"Die Therapie schlug an; ___ blieb er noch zwei Tage stationär.","a":"dennoch","de":"Die Therapie schlug an; dennoch blieb er noch zwei Tage stationär.","why":"Adverb in position 1 before the verb → dennoch."}],
 g55:[
  {"n":1,"k":"pr","q":"Satzbau: bin / helfen / hier / Ich / Ihnen / um / zu","a":"Ich bin hier, um Ihnen zu helfen.","why":"Comma before um … zu."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Ich hoffe, das es Ihnen besser geht.","a":"Ich hoffe, dass es Ihnen besser geht.","why":"You cannot replace it with dieses/welches → dass."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Nach der Operation, ging es ihm besser.","a":"Nach der Operation ging es ihm besser.","why":"No comma after an opening phrase."},
  {"n":4,"k":"cz","q":"Er ___ sofort ins Krankenhaus.","a":"muss","de":"Er muss sofort ins Krankenhaus.","why":"Short u → ss: muss."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Wir sehen uns morgen Früh.","a":"Wir sehen uns morgen früh.","why":"After heute, morgen, gestern: früh stays lowercase (but: heute Abend, morgen Abend)."},
  {"n":6,"k":"pr","q":"Mit Komma: Ich weiß / dass / er / allergisch / sein","a":"Ich weiß, dass er allergisch ist.","why":"Comma before dass; the verb goes to the end."}],
 g56:[
  {"n":1,"k":"pr","q":"Satzbau: bin / fertig / fix / Ich / und","a":"Ich bin fix und fertig.","why":"fix und fertig = completely exhausted."},
  {"n":2,"k":"pr","q":"In Standardsprache: Haste mal 'n Stift?","a":"Hast du mal einen Stift?","alt":["Hast du einen Stift?"],"why":"haste = hast du; 'n = einen."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Schriftlich: Ich komme nicht, weil ich habe keine Zeit.","a":"Ich komme nicht, weil ich keine Zeit habe.","alt":["Ich komme nicht, denn ich habe keine Zeit."],"why":"In writing, weil always sends the verb to the end."},
  {"n":4,"k":"cz","q":"Standardsprache: „Das hat nicht geklappt.“ = Das hat nicht ___.","a":"funktioniert","de":"Das hat nicht funktioniert.","why":"klappen = funktionieren, to work out."},
  {"n":5,"k":"cz","q":"Standardsprache: „Guck mal!“ = ___ mal!","a":"Schau","alt":["Sieh"],"de":"Schau mal!","why":"gucken = schauen / sehen."},
  {"n":6,"k":"pr","q":"In Standardsprache: Ich krieg keine Luft.","a":"Ich bekomme keine Luft.","why":"kriegen = bekommen."}],
 g57:[
  {"n":1,"k":"pr","q":"Du-Imperativ: (nehmen) die Tablette mit Wasser!","a":"Nimm die Tablette mit Wasser!","alt":["Nimm die Tablette mit Wasser."],"why":"The imperative keeps the e → i change and has no ending: Nimm!"},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Sie gebt dem Kind einen Saft.","a":"Sie gibt dem Kind einen Saft.","why":"geben: e → i: sie gibt."},
  {"n":3,"k":"cz","q":"Der Patient ___ kein Deutsch.","a":"spricht","de":"Der Patient spricht kein Deutsch.","why":"sprechen: e → i for er: spricht."},
  {"n":4,"k":"cz","q":"___ du die Tabletten jeden Tag?","a":"Nimmst","de":"Nimmst du die Tabletten jeden Tag?","why":"nehmen: du nimmst (e → i, and hm → mm)."},
  {"n":5,"k":"cz","q":"Wir ___ heute nach Heidelberg.","a":"fahren","de":"Wir fahren heute nach Heidelberg.","why":"The vowel changes only for du and er/sie/es; wir stays regular."},
  {"n":6,"k":"cz","q":"Die Patientin ___ seit drei Nächten schlecht.","a":"schläft","de":"Die Patientin schläft seit drei Nächten schlecht.","why":"schlafen: a → ä: sie schläft."},
  {"n":7,"k":"cz","q":"Er ___ (essen) kein Fleisch.","a":"isst","de":"Er isst kein Fleisch.","why":"essen: e → i: er isst."},
  {"n":8,"k":"cz","q":"Was ___ (lesen) du da?","a":"liest","de":"Was liest du da?","why":"lesen: e → ie: du liest."},
  {"n":9,"k":"pr","q":"Satzbau (Präsens): der Patient / schlecht / schlafen / seit Tagen","a":"Der Patient schläft seit Tagen schlecht.","alt":["Seit Tagen schläft der Patient schlecht."],"why":"schlafen: a → ä for er/sie/es: schläft."}],
 g58:[
  {"n":1,"k":"pr","q":"Satzbau: als / arbeitet / Bruder / Mein / Pfleger","a":"Mein Bruder arbeitet als Pfleger.","why":"als + profession, no article."},
  {"n":2,"k":"pr","q":"Plural: Ich habe eine Frage.","a":"Ich habe Fragen.","why":"The plural of ein is no article."},
  {"n":3,"k":"fx","q":"Korrigieren Sie: Ich habe einen Husten und ein Fieber.","a":"Ich habe Husten und Fieber.","why":"Symptoms with haben stand without article."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Der Herr Weber hat die Schmerzen im Bauch.","a":"Herr Weber hat Schmerzen im Bauch.","why":"No article before a name with Herr/Frau in writing, none before an unspecified symptom."},
  {"n":5,"k":"cz","q":"Sie ist ___ sehr gute Ärztin.","a":"eine","de":"Sie ist eine sehr gute Ärztin.","why":"With an adjective the article returns: eine sehr gute Ärztin."},
  {"n":6,"k":"cz","q":"Er kommt aus ___ Türkei.","a":"der","de":"Er kommt aus der Türkei.","why":"die Türkei is one of the few countries with an article; aus + dative: aus der Türkei."},
  {"n":7,"k":"cz","q":"Ich habe ___ Schmerzen. (negation)","a":"keine","de":"Ich habe keine Schmerzen.","why":"No article → negate with kein-: keine Schmerzen (plural)."},
  {"n":8,"k":"cz","q":"Ich habe ___ Frage. (a)","a":"eine","de":"Ich habe eine Frage.","why":"German needs the indefinite article: eine Frage."}],
 g59:[
  {"n":1,"k":"pr","q":"Ergebnis mit „liegen“: Ich lege das Buch auf den Tisch. → Das Buch …","a":"Das Buch liegt auf dem Tisch.","why":"Position → liegen + dative."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Ich sitze mich auf den Stuhl.","a":"Ich setze mich auf den Stuhl.","why":"Movement with sich: sich setzen."},
  {"n":3,"k":"cz","q":"Der Patient ___ im Bett.","a":"liegt","de":"Der Patient liegt im Bett.","why":"Position, no movement: liegen."},
  {"n":4,"k":"cz","q":"Bitte ___ Sie sich auf die Liege.","a":"legen","de":"Bitte legen Sie sich auf die Liege.","why":"Movement onto the couch: sich legen + accusative."},
  {"n":5,"k":"cz","q":"Die Akte liegt auf ___ Schreibtisch.","a":"dem","de":"Die Akte liegt auf dem Schreibtisch.","why":"liegen = position → dative: auf dem Schreibtisch."},
  {"n":6,"k":"cz","q":"Ich habe das Glas auf den Tisch ___.","a":"gestellt","de":"Ich habe das Glas auf den Tisch gestellt.","why":"stellen is regular: hat gestellt."},
  {"n":7,"k":"cz","q":"Sie hat zwei Stunden im Wartezimmer ___ (sitzen).","a":"gesessen","de":"Sie hat zwei Stunden im Wartezimmer gesessen.","why":"sitzen — saß — hat gesessen."},
  {"n":8,"k":"cz","q":"Stellen Sie die Schuhe bitte unter ___ Stuhl. (der Stuhl)","a":"den","de":"Stellen Sie die Schuhe bitte unter den Stuhl.","why":"stellen = motion → accusative: unter den Stuhl."},
  {"n":9,"k":"pr","q":"Auf Deutsch (Sie): Please lie down on the couch.","a":"Legen Sie sich bitte auf die Liege.","alt":["Bitte legen Sie sich auf die Liege.","Legen Sie sich auf die Liege."],"why":"Movement: sich legen + auf + accusative."}],
 g60:[
  {"n":1,"k":"pr","q":"Satzbau: bitte / herein / Kommen / Sie","a":"Kommen Sie bitte herein.","why":"herein stands at the end like a separable prefix."},
  {"n":2,"k":"pr","q":"Ein Wort: Wo gehst du hin?","a":"Wohin gehst du?","why":"Wo … hin = Wohin."},
  {"n":3,"k":"cz","q":"(Der Arzt ist im Zimmer.) „Kommen Sie bitte ___!“","a":"herein","de":"„Kommen Sie bitte herein!“","why":"Towards the speaker: herein."},
  {"n":4,"k":"cz","q":"„Wo gehen Sie ___?“","a":"hin","de":"„Wo gehen Sie hin?“","why":"Wohin? = Wo … hin?"},
  {"n":5,"k":"cz","q":"„Legen Sie sich bitte ___.“","a":"hin","de":"„Legen Sie sich bitte hin.“","why":"sich hinlegen = to lie down."},
  {"n":6,"k":"cz","q":"Wo kommen Sie ___? — Aus Riad.","a":"her","de":"Wo kommen Sie her? — Aus Riad.","why":"Woher? = Wo … her?"},
  {"n":7,"k":"cz","q":"Die Patientin ist auf der Treppe ___gefallen.","a":"hin","de":"Die Patientin ist auf der Treppe hingefallen.","why":"hinfallen = to fall down."},
  {"n":8,"k":"pr","q":"Auf Deutsch (Sie): Please come in.","a":"Kommen Sie bitte herein.","alt":["Bitte kommen Sie herein.","Kommen Sie herein."],"why":"Towards the speaker: her- (herein)."}],
 g61:[
  {"n":1,"k":"pr","q":"Offizielle Uhrzeit in Worten: 16:45 Uhr","a":"sechzehn Uhr fünfundvierzig","alt":["16 Uhr 45"],"why":"The hospital uses the 24-hour clock: sechzehn Uhr fünfundvierzig."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Die Patientin wiegt 62 Kilos.","a":"Die Patientin wiegt 62 Kilo.","why":"Units of measure stay singular: 62 Kilo."},
  {"n":3,"k":"cz","q":"Der Patient bekommt fünf ___ Morphin.","a":"Milligramm","de":"Der Patient bekommt fünf Milligramm Morphin.","why":"Masculine and neuter units stay singular after numbers."},
  {"n":4,"k":"cz","q":"Nehmen Sie die Tablette ___ täglich. (3×)","a":"dreimal","alt":["drei Mal","3-mal","3x","3 x"],"de":"Nehmen Sie die Tablette dreimal täglich.","why":"dreimal täglich = three times a day."},
  {"n":5,"k":"cz","q":"Nehmen Sie morgens eine ___ Tablette. (½)","a":"halbe","de":"Nehmen Sie morgens eine halbe Tablette.","why":"halb is an adjective here: eine halbe Tablette."},
  {"n":6,"k":"pr","q":"In Worten: RR 130/85","a":"hundertdreißig zu fünfundachtzig","alt":["Blutdruck hundertdreißig zu fünfundachtzig"],"why":"Blood pressure is read with zu."},
  {"n":7,"k":"pr","q":"In Worten: 2,5 mg","a":"zwei Komma fünf Milligramm","alt":["zweieinhalb Milligramm"],"why":"Decimal Komma; the unit stays singular."}],
 g62:[
  {"n":1,"k":"pr","q":"Als Nomen: ein Mann, der verletzt ist → ein …","a":"ein Verletzter","alt":["Ein Verletzter"],"why":"Participle as noun, ein + masculine: -er."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Meine Frau ist eine Deutscher.","a":"Meine Frau ist eine Deutsche.","why":"Feminine after eine: -e."},
  {"n":3,"k":"cz","q":"Ein ___ wurde in die Notaufnahme gebracht.","a":"Verletzter","de":"Ein Verletzter wurde in die Notaufnahme gebracht.","why":"ein + masculine nominative: -er."},
  {"n":4,"k":"cz","q":"Die ___ des Patienten warten im Flur.","a":"Angehörigen","de":"Die Angehörigen des Patienten warten im Flur.","why":"Plural with die: -en."},
  {"n":5,"k":"cz","q":"Gibt es etwas ___?","a":"Neues","de":"Gibt es etwas Neues?","why":"After etwas: -es, with capital letter."},
  {"n":6,"k":"cz","q":"Ich wünsche Ihnen alles ___.","a":"Gute","de":"Ich wünsche Ihnen alles Gute.","why":"After alles: -e."},
  {"n":7,"k":"cz","q":"Ich habe mit dem ___ gesprochen. (der Kranke)","a":"Kranken","de":"Ich habe mit dem Kranken gesprochen.","why":"Dative masculine: dem Kranken."},
  {"n":8,"k":"cz","q":"Das CT zeigt nichts ___. (auffällig)","a":"Auffälliges","de":"Das CT zeigt nichts Auffälliges.","why":"After nichts: -es and a capital letter."},
  {"n":9,"k":"pr","q":"Auf Deutsch: The relatives are waiting outside.","a":"Die Angehörigen warten draußen.","why":"die Angehörigen: adjective noun, plural after die → -en."}],
 g63:[
  {"n":1,"k":"pr","q":"Perfekt: Der Patient übergibt sich zweimal.","a":"Der Patient hat sich zweimal übergeben.","why":"sich übergeben is inseparable: hat sich übergeben."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Ich schreibe das Formular unter.","a":"Ich unterschreibe das Formular.","why":"unterschreiben is inseparable."},
  {"n":3,"k":"cz","q":"Der Arzt hat den Patienten gründlich ___.","a":"untersucht","de":"Der Arzt hat den Patienten gründlich untersucht.","why":"untersuchen is inseparable: no ge-."},
  {"n":4,"k":"cz","q":"Die Hausärztin hat ihn in die Klinik ___.","a":"überwiesen","de":"Die Hausärztin hat ihn in die Klinik überwiesen.","why":"überweisen is inseparable: hat überwiesen."},
  {"n":5,"k":"cz","q":"Der Patient wurde gestern ___ (entlassen, Partizip).","a":"entlassen","de":"Der Patient wurde gestern entlassen.","why":"ent- is inseparable; the participle has no ge-: entlassen."},
  {"n":6,"k":"cz","q":"Sie wurde stationär ___ (aufnehmen, Partizip).","a":"aufgenommen","de":"Sie wurde stationär aufgenommen.","why":"Separable: ge- in the middle: aufgenommen."},
  {"n":7,"k":"pr","q":"Ins Perfekt: Wir stellen die Therapie um.","a":"Wir haben die Therapie umgestellt.","why":"umstellen is separable here: ge- in the middle: umgestellt."}],
 g64:[
  {"n":1,"k":"pr","q":"Satzbau: als / er / Er / ob / schliefe / so / tut","a":"Er tut so, als ob er schliefe.","why":"als ob sends the verb to the end."},
  {"n":2,"k":"pr","q":"Ohne „ob“: Es sieht aus, als ob er krank wäre.","a":"Es sieht aus, als wäre er krank.","why":"Without ob the verb comes immediately after als."},
  {"n":3,"k":"cz","q":"Er sieht aus, als ob er Fieber ___.","a":"hätte","de":"Er sieht aus, als ob er Fieber hätte.","why":"als ob + Konjunktiv II: hätte."},
  {"n":4,"k":"cz","q":"Sie tut so, als ___ sie alles.","a":"wüsste","de":"Sie tut so, als wüsste sie alles.","why":"als without ob: the verb follows directly: als wüsste sie alles."},
  {"n":5,"k":"cz","q":"Vergangenheit: Er tut so, als ob er nichts ___.","a":"gesehen hätte","de":"Er tut so, als ob er nichts gesehen hätte.","why":"Past unreal comparison: Partizip + hätte."},
  {"n":6,"k":"cz","q":"Es ist, als ob ein Stein auf meiner Brust ___ (liegen).","a":"läge","alt":["liegen würde"],"de":"Es ist, als ob ein Stein auf meiner Brust läge.","why":"Konjunktiv II of liegen: läge (or liegen würde)."},
  {"n":7,"k":"cz","q":"Sie sehen aus, als ___ Sie nicht geschlafen.","a":"hätten","de":"Sie sehen aus, als hätten Sie nicht geschlafen.","why":"als + verb directly: als hätten Sie nicht geschlafen."},
  {"n":8,"k":"pr","q":"Mit „als ob“: Er tut so. Er hat keine Schmerzen. (Konjunktiv II)","a":"Er tut so, als ob er keine Schmerzen hätte.","alt":["Er tut so, als hätte er keine Schmerzen."],"why":"als ob + Konjunktiv II at the end: hätte."}],
 g65:[
  {"n":1,"k":"pr","q":"Perfekt: Sie musste lange warten.","a":"Sie hat lange warten müssen.","why":"hat + warten + müssen."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Wir haben den Patienten verlegen gemusst.","a":"Wir haben den Patienten verlegen müssen.","why":"With a second verb: müssen, not gemusst."},
  {"n":3,"k":"cz","q":"Ich habe gestern nicht arbeiten ___.","a":"können","de":"Ich habe gestern nicht arbeiten können.","why":"Modal with a second verb in the perfect: Ersatzinfinitiv können."},
  {"n":4,"k":"cz","q":"Das habe ich nicht ___.","a":"gewollt","de":"Das habe ich nicht gewollt.","why":"The modal stands alone: participle gewollt."},
  {"n":5,"k":"cz","q":"Sie ___ früher kommen sollen.","a":"hätten","de":"Sie hätten früher kommen sollen.","why":"Modal verbs form the perfect with haben: hätten … sollen."},
  {"n":6,"k":"cz","q":"Ich habe mir den Blutdruck messen ___ (lassen).","a":"lassen","de":"Ich habe mir den Blutdruck messen lassen.","why":"lassen + infinitive: Ersatzinfinitiv."},
  {"n":7,"k":"cz","q":"Er sagt, dass er nicht ___ kommen können. (Perfekt)","a":"hat","alt":["habe"],"de":"Er sagt, dass er nicht hat kommen können.","why":"haben goes before the double infinitive."},
  {"n":8,"k":"pr","q":"Ins Perfekt: Ich konnte nicht schlafen.","a":"Ich habe nicht schlafen können.","why":"Modal with a second verb: Ersatzinfinitiv können."}],
 g66:[
  {"n":1,"k":"pr","q":"Satzbau: an / Fragen / haben / rufen / Sie / Sie / Sollten / uns","a":"Sollten Sie Fragen haben, rufen Sie uns an.","why":"Condition first with sollten; the main clause starts with its verb."},
  {"n":2,"k":"pr","q":"Ohne „wenn“: Wenn Sie Schmerzen haben, nehmen Sie eine Tablette.","a":"Haben Sie Schmerzen, nehmen Sie eine Tablette.","alt":["Haben Sie Schmerzen, so nehmen Sie eine Tablette.","Haben Sie Schmerzen, dann nehmen Sie eine Tablette.","Sollten Sie Schmerzen haben, nehmen Sie eine Tablette."],"why":"Drop wenn and put the verb first."},
  {"n":3,"k":"cz","q":"___ das Fieber wieder steigen, kommen Sie bitte sofort wieder.","a":"Sollte","de":"Sollte das Fieber wieder steigen, kommen Sie bitte sofort wieder.","why":"Only Sollte fits: wenn and falls would need a finite verb at the end (… steigt)."},
  {"n":4,"k":"cz","q":"Hätte ich das gewusst, ___ ich früher gekommen.","a":"wäre","de":"Hätte ich das gewusst, wäre ich früher gekommen.","why":"kommen takes sein: wäre … gekommen."},
  {"n":5,"k":"cz","q":"Sofern keine Komplikationen ___, wird die Patientin morgen entlassen.","a":"auftreten","de":"Sofern keine Komplikationen auftreten, wird die Patientin morgen entlassen.","why":"sofern is a subordinating conjunction: verb at the end."},
  {"n":6,"k":"cz","q":"„___ Verschlechterung sofortige Wiedervorstellung.“","a":"Bei","de":"„Bei Verschlechterung sofortige Wiedervorstellung.“","why":"Nominal condition: bei + dative."},
  {"n":7,"k":"cz","q":"___ er früher gekommen, hätten wir ihm helfen können.","a":"Wäre","de":"Wäre er früher gekommen, hätten wir ihm helfen können.","why":"Verb first, Konjunktiv II past: Wäre er … gekommen."},
  {"n":8,"k":"cz","q":"Sie dürfen aufstehen, es sei ___, Ihnen wird schwindelig.","a":"denn","de":"Sie dürfen aufstehen, es sei denn, Ihnen wird schwindelig.","why":"es sei denn = unless."},
  {"n":9,"k":"pr","q":"Mit „sollten“ (ohne wenn): Wenn Sie Fieber bekommen, rufen Sie uns an.","a":"Sollten Sie Fieber bekommen, rufen Sie uns an.","alt":["Sollten Sie Fieber bekommen, rufen Sie uns bitte an.","Sollten Sie Fieber bekommen, dann rufen Sie uns an."],"why":"Verb-first condition with sollten replaces wenn."}],
 g67:[
  {"n":1,"k":"pr","q":"Mit „es ist erforderlich“: Man muss den Blutzucker kontrollieren.","a":"Es ist erforderlich, den Blutzucker zu kontrollieren.","alt":["Es ist erforderlich den Blutzucker zu kontrollieren."],"why":"es ist erforderlich, … zu + infinitive."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Der Patient ist nicht in der Lage, allein aufstehen.","a":"Der Patient ist nicht in der Lage, allein aufzustehen.","why":"Infinitive with zu; in separable verbs zu goes inside: aufzustehen."},
  {"n":3,"k":"cz","q":"Der Arzt ist ___, den Patienten aufzuklären. (müssen)","a":"verpflichtet","alt":["gezwungen"],"de":"Der Arzt ist verpflichtet, den Patienten aufzuklären.","why":"müssen = verpflichtet sein, zu …"},
  {"n":4,"k":"cz","q":"Die Erkrankung lässt ___ gut behandeln.","a":"sich","de":"Die Erkrankung lässt sich gut behandeln.","why":"sich lassen + infinitive = can be …"},
  {"n":5,"k":"pr","q":"Mit „in der Lage sein“: Der Patient kann nicht allein gehen.","a":"Der Patient ist nicht in der Lage, allein zu gehen.","alt":["Der Patient ist nicht in der Lage allein zu gehen."],"why":"können = in der Lage sein, … zu + infinitive."},
  {"n":6,"k":"pr","q":"Mit „sich lassen“: Die Wunde kann gut versorgt werden.","a":"Die Wunde lässt sich gut versorgen.","why":"sich lassen + bare infinitive = can be done."}],
 g68:[
  {"n":1,"k":"pr","q":"Satzbau: das / dosiert / ist / Medikament / Richtig / sicher","a":"Richtig dosiert, ist das Medikament sicher.","why":"Participle group first, then the verb of the main clause."},
  {"n":2,"k":"pr","q":"Partizipialsatz: Nachdem er zu Hause angekommen war, legte er sich sofort hin. → Zu Hause …","a":"Zu Hause angekommen, legte er sich sofort hin.","why":"Drop conjunction, subject and auxiliary; keep the participle at the end."},
  {"n":3,"k":"cz","q":"___ von leichtem Husten geht es ihr gut.","a":"Abgesehen","de":"Abgesehen von leichtem Husten geht es ihr gut.","why":"Fixed phrase: abgesehen von + dative."},
  {"n":4,"k":"cz","q":"___ mit dem Vorbefund ist der Tumor kleiner geworden.","a":"Verglichen","de":"Verglichen mit dem Vorbefund ist der Tumor kleiner geworden.","why":"Fixed phrase: verglichen mit …"},
  {"n":5,"k":"cz","q":"Streng ___, ist das keine Diagnose, sondern ein Symptom.","a":"genommen","de":"Streng genommen, ist das keine Diagnose, sondern ein Symptom.","why":"streng genommen = strictly speaking."},
  {"n":6,"k":"cz","q":"Laut um Hilfe ___ (rufen), lief sie auf den Flur.","a":"rufend","de":"Laut um Hilfe rufend, lief sie auf den Flur.","why":"Simultaneous, active: Partizip I rufend."},
  {"n":7,"k":"pr","q":"Partizipialsatz: Nachdem er vom Hausarzt überwiesen worden war, stellte er sich bei uns vor. → Vom Hausarzt …","a":"Vom Hausarzt überwiesen, stellte er sich bei uns vor.","why":"Drop conjunction, subject and auxiliary; keep the participle at the end of the group."}],
 g69:[
  {"n":1,"k":"pr","q":"Mit „trotz“: Obwohl er Fieber hatte, ging er zur Arbeit.","a":"Trotz des Fiebers ging er zur Arbeit.","alt":["Trotz Fieber ging er zur Arbeit.","Trotz Fiebers ging er zur Arbeit.","Trotz seines Fiebers ging er zur Arbeit.","Er ging trotz des Fiebers zur Arbeit.","Er ging trotz Fieber zur Arbeit."],"why":"trotz + genitive replaces the obwohl-clause."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Infolge der Sturz erlitt sie eine Fraktur.","a":"Infolge des Sturzes erlitt sie eine Fraktur.","why":"infolge + genitive: des Sturzes."},
  {"n":3,"k":"cz","q":"___ des Befundes wurde die Therapie geändert.","a":"Aufgrund","de":"Aufgrund des Befundes wurde die Therapie geändert.","why":"aufgrund + genitive; gemäß and entsprechend take the dative (dem Befund)."},
  {"n":4,"k":"cz","q":"Die Behandlung erfolgt gemäß ___ aktuellen Leitlinien.","a":"den","de":"Die Behandlung erfolgt gemäß den aktuellen Leitlinien.","why":"gemäß + dative plural: den Leitlinien."},
  {"n":5,"k":"cz","q":"Dem Laborbericht ___ ist das Kalium normal.","a":"zufolge","de":"Dem Laborbericht zufolge ist das Kalium normal.","why":"zufolge stands after its dative noun; laut and aufgrund stand before theirs."},
  {"n":6,"k":"cz","q":"Die Diagnose wurde ___ einer Biopsie gesichert.","a":"mittels","de":"Die Diagnose wurde mittels einer Biopsie gesichert.","why":"mittels + genitive = by means of."},
  {"n":7,"k":"cz","q":"Der Schmerz sitzt unterhalb ___ rechten Rippenbogens.","a":"des","de":"Der Schmerz sitzt unterhalb des rechten Rippenbogens.","why":"unterhalb + genitive: des Rippenbogens."},
  {"n":8,"k":"cz","q":"Im ___ der Aufnahmeuntersuchung wurde ein EKG geschrieben.","a":"Rahmen","alt":["Zuge","Verlauf","Laufe"],"de":"Im Rahmen der Aufnahmeuntersuchung wurde ein EKG geschrieben.","why":"im Rahmen + genitive = as part of."},
  {"n":9,"k":"pr","q":"Mit „aufgrund“: Weil er stürzte, erlitt er eine Fraktur.","a":"Aufgrund des Sturzes erlitt er eine Fraktur.","alt":["Aufgrund seines Sturzes erlitt er eine Fraktur.","Er erlitt aufgrund des Sturzes eine Fraktur."],"why":"aufgrund + genitive: des Sturzes."}],
 g70:[
  {"n":1,"k":"pr","q":"Briefstil mit „Es erfolgte“: Wir haben den Patienten stationär aufgenommen.","a":"Es erfolgte die stationäre Aufnahme.","alt":["Es erfolgte die stationäre Aufnahme des Patienten."],"why":"erfolgen + nominalised verb."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Der Patient berichtete, er hat keine Allergien.","a":"Der Patient berichtete, er habe keine Allergien.","why":"Reported speech in the letter: Konjunktiv I habe."},
  {"n":3,"k":"cz","q":"Röntgen-Thorax: kein ___ für ein Infiltrat.","a":"Anhalt","alt":["Anhaltspunkt"],"de":"kein Anhalt für ein Infiltrat.","why":"kein Anhalt für … = no evidence of … (but: kein Hinweis auf …)"},
  {"n":4,"k":"cz","q":"Nikotin- und Alkoholkonsum wurden ___.","a":"verneint","alt":["negiert"],"de":"Nikotin- und Alkoholkonsum wurden verneint.","why":"verneinen = to deny."},
  {"n":5,"k":"pr","q":"In die Briefsprache (Konjunktiv I): Der Patient sagt: „Ich habe seit gestern Fieber.“","a":"Der Patient gab an, er habe seit gestern Fieber.","alt":["Der Patient gibt an, er habe seit gestern Fieber.","Der Patient berichtete, er habe seit gestern Fieber.","Der Patient berichtet, er habe seit gestern Fieber."],"why":"Anamnese: angeben/berichten + Konjunktiv I."},
  {"n":6,"k":"cz","q":"Es zeigte sich kein Hinweis ___ eine Fraktur.","a":"auf","de":"Es zeigte sich kein Hinweis auf eine Fraktur.","why":"Hinweis auf + accusative (but: kein Anhalt für)."}],
 g71:[
  {"n":1,"k":"pr","q":"Fachsprache: die Lungenentzündung","a":"die Pneumonie","alt":["Pneumonie"],"why":"Lungenentzündung = Pneumonie."},
  {"n":2,"k":"fx","q":"Korrigieren Sie: Der Patient hat eine akut Appendizitis.","a":"Der Patient hat eine akute Appendizitis.","why":"Adjectives before the term are declined: eine akute Appendizitis."},
  {"n":3,"k":"cz","q":"___ Karzinom wurde früh entdeckt.","a":"Das","de":"Das Karzinom wurde früh entdeckt.","why":"-om → neuter: das Karzinom."},
  {"n":4,"k":"cz","q":"Die Antibiotika ___ gut.","a":"wirken","de":"Die Antibiotika wirken gut.","why":"Antibiotika is the plural of Antibiotikum."},
  {"n":5,"k":"cz","q":"Plural: die Dosis → die ___","a":"Dosen","de":"die Dosen","why":"die Dosis → die Dosen."},
  {"n":6,"k":"cz","q":"Die Größe des ___ (das Karzinom) beträgt zwei Zentimeter.","a":"Karzinoms","de":"Die Größe des Karzinoms beträgt zwei Zentimeter.","why":"Neuter in -om: genitive -s."},
  {"n":7,"k":"pr","q":"Plural: das Antibiotikum → die …","a":"die Antibiotika","alt":["Antibiotika"],"why":"-um → -a: die Antibiotika."}],
 g72:[
  {"n":1,"k":"pr","q":"Satzbau: aus / dem / Der / gerade / kommt / OP / Patient","a":"Der Patient kommt gerade aus dem OP.","alt":["Gerade kommt der Patient aus dem OP."],"why":"Woher? + room → aus + dative."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens): wir / die Patientin / in / der OP / fahren","a":"Wir fahren die Patientin in den OP.","why":"Wohin? + room → in + accusative: in den OP."},
  {"n":3,"k":"pr","q":"Auf Deutsch: I was at the doctor's yesterday.","a":"Ich war gestern beim Arzt.","alt":["Gestern war ich beim Arzt.","Ich war gestern bei der Ärztin.","Gestern war ich bei der Ärztin.","Ich bin gestern beim Arzt gewesen."],"why":"at the doctor's = beim Arzt (bei + dative); time before place."},
  {"n":4,"k":"pr","q":"Auf Deutsch: I am going to the pharmacy.","a":"Ich gehe in die Apotheke.","why":"A building you enter: in + accusative (or: zur Apotheke)."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich gehe heute Nachmittag bei meiner Schwester.","a":"Ich gehe heute Nachmittag zu meiner Schwester.","why":"gehen is movement (Wohin?) → zu."},
  {"n":6,"k":"cz","q":"Ich gehe morgen ___ Arzt.","a":"zum","de":"Ich gehe morgen zum Arzt.","why":"Wohin? + a person → zu + dative: zum Arzt."},
  {"n":7,"k":"cz","q":"Wo waren Sie gestern? — Ich war ___ Hausärztin.","a":"bei der","de":"Wo waren Sie gestern? — Ich war bei der Hausärztin.","why":"Wo? + a person → bei + dative: bei der Hausärztin."},
  {"n":8,"k":"cz","q":"Die Patientin kommt ___ Pflegeheim.","a":"aus dem","de":"Die Patientin kommt aus dem Pflegeheim.","why":"Woher? + a building she was inside → aus + dative."}],
 g73:[
  {"n":1,"k":"pr","q":"Auf Deutsch: I am cold.","a":"Mir ist kalt.","why":"Feelings of this kind: dative + ist."},
  {"n":2,"k":"pr","q":"Satzbau: heute / ist / Mir / Morgen / schwindelig / seit","a":"Mir ist seit heute Morgen schwindelig.","alt":["Seit heute Morgen ist mir schwindelig."],"why":"Dative first, then ist; no subject."},
  {"n":3,"k":"pr","q":"Satzbau (Präsens, Frage): wo / wehtun / es / Sie (Dativ) / ?","a":"Wo tut es Ihnen weh?","alt":["Wo tut es weh?"],"why":"wehtun is separable: tut … weh; the person is dative."},
  {"n":4,"k":"pr","q":"Auf Deutsch: I like Heidelberg. (gefallen)","a":"Heidelberg gefällt mir.","alt":["Mir gefällt Heidelberg.","Heidelberg gefällt mir gut.","Mir gefällt Heidelberg gut."],"why":"The thing liked is the subject, the person is dative."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich danke Sie für Ihre Hilfe.","a":"Ich danke Ihnen für Ihre Hilfe.","why":"danken takes the dative: Ihnen."},
  {"n":6,"k":"cz","q":"Kann ich ___ helfen, Frau Braun?","a":"Ihnen","de":"Kann ich Ihnen helfen, Frau Braun?","why":"helfen takes the dative: Ihnen."},
  {"n":7,"k":"cz","q":"Der Bauch tut ___ seit gestern weh. (he)","a":"ihm","de":"Der Bauch tut ihm seit gestern weh.","why":"wehtun takes the dative: er → ihm."},
  {"n":8,"k":"cz","q":"Die neuen Schuhe ___ mir gut.","a":"gefallen","de":"Die neuen Schuhe gefallen mir gut.","why":"The thing is the subject: die Schuhe (plural) → gefallen."}],
 g74:[
  {"n":1,"k":"cz","q":"Ich habe ___ drei Tagen Husten. (Präposition)","a":"seit","de":"Ich habe seit drei Tagen Husten.","why":"Still going on → seit + present.","v":[["Die Patientin nimmt das Medikament ___ einem Jahr. (Präposition)","seit",[],"Die Patientin nimmt das Medikament seit einem Jahr."],["Herr Demir liegt ___ gestern auf der Intensivstation. (Präposition)","seit",[],"Herr Demir liegt seit gestern auf der Intensivstation."]]},
  {"n":2,"k":"cz","q":"Die Schmerzen haben ___ zwei Stunden angefangen. (Präposition)","a":"vor","de":"Die Schmerzen haben vor zwei Stunden angefangen.","why":"A point in the past, counted back from now → vor.","v":[["Ich bin ___ einem Jahr nach Deutschland gekommen. (Präposition)","vor",[],"Ich bin vor einem Jahr nach Deutschland gekommen."],["Der Patient wurde ___ drei Tagen operiert. (Präposition)","vor",[],"Der Patient wurde vor drei Tagen operiert."]]},
  {"n":3,"k":"cz","q":"Der Befund ist erst ___ zwei Stunden fertig. Bitte warten Sie so lange. (Präposition)","a":"in","de":"Der Befund ist erst in zwei Stunden fertig. Bitte warten Sie so lange.","why":"Counted from now into the future → in + dative.","v":[["Bitte kommen Sie ___ einer Woche zur Kontrolle wieder. (Präposition)","in",[],"Bitte kommen Sie in einer Woche zur Kontrolle wieder."],["Die Visite beginnt ___ zehn Minuten. (Präposition)","in",[],"Die Visite beginnt in zehn Minuten."]]},
  {"n":4,"k":"cz","q":"___ morgen dürfen Sie wieder normal essen. (from … on)","a":"Ab","de":"Ab morgen dürfen Sie wieder normal essen.","why":"ab = from a point on; bis = until.","v":[["Bitte bleiben Sie ___ zur Visite im Zimmer. (until)","bis",[],"Bitte bleiben Sie bis zur Visite im Zimmer."],["Die Sprechstunde ist von 8 ___ 12 Uhr.","bis",[],"Die Sprechstunde ist von 8 bis 12 Uhr."]]},
  {"n":5,"k":"cz","q":"Ich habe gestern zwei ___ gewartet. (die Stunde)","a":"Stunden","de":"Ich habe gestern zwei Stunden gewartet.","why":"Duration and frequency: bare accusative, no preposition (drei Tage — not Tagen).","v":[["Er war drei ___ im Krankenhaus. (der Tag)","Tage",[],"Er war drei Tage im Krankenhaus."],["Nehmen Sie die Tablette jeden ___. (der Morgen)","Morgen",[],"Nehmen Sie die Tablette jeden Morgen."]]},
  {"n":6,"k":"fx","q":"Ich bin seit drei Tagen gestürzt.","a":"Ich bin vor drei Tagen gestürzt.","why":"A single past event → vor; a state that continues → seit + present.","v":[["Ich arbeite hier für zwei Jahre.","Ich arbeite seit zwei Jahren hier.",["Ich arbeite hier seit zwei Jahren."],"Ich arbeite seit zwei Jahren hier."]]},
  {"n":7,"k":"pr","q":"Satzbau (Präsens): die Patientin / seit / eine Woche / Fieber / haben","a":"Die Patientin hat seit einer Woche Fieber.","alt":["Seit einer Woche hat die Patientin Fieber."],"why":"seit + dative + present; vor + dative + past.","v":[["Satzbau (Perfekt): der Patient / vor / zwei Tage / stürzen","Der Patient ist vor zwei Tagen gestürzt.",["Vor zwei Tagen ist der Patient gestürzt."],"Der Patient ist vor zwei Tagen gestürzt."]]},
  {"n":8,"k":"pr","q":"Auf Deutsch (Sie): Since when have you had the pain?","a":"Seit wann haben Sie die Schmerzen?","alt":["Seit wann haben Sie Schmerzen?","Seit wann haben Sie die Schmerzen schon?","Seit wann haben Sie den Schmerz?"],"why":"Seit wann + present tense.","v":[["Auf Deutsch: The pain started three days ago.","Die Schmerzen haben vor drei Tagen angefangen.",["Die Schmerzen haben vor drei Tagen begonnen.","Vor drei Tagen haben die Schmerzen angefangen.","Die Schmerzen fingen vor drei Tagen an.","Die Schmerzen begannen vor drei Tagen."],"Die Schmerzen haben vor drei Tagen angefangen."]]}],
 g75:[
  {"n":1,"k":"pr","q":"Satzbau: bitte / den / frei / Machen / Oberkörper / Sie","a":"Machen Sie bitte den Oberkörper frei.","alt":["Bitte machen Sie den Oberkörper frei."],"why":"Sie-imperative: verb first, then Sie; frei closes the sentence."},
  {"n":2,"k":"pr","q":"Satzbau (Imperativ, du): sich legen / bitte / auf / die Liege","a":"Leg dich bitte auf die Liege.","alt":["Lege dich bitte auf die Liege.","Bitte leg dich auf die Liege.","Bitte lege dich auf die Liege."],"why":"Verb first, reflexive dich after it; Wohin? → auf + accusative."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Please breathe in deeply and hold your breath.","a":"Atmen Sie bitte tief ein und halten Sie die Luft an.","alt":["Bitte atmen Sie tief ein und halten Sie die Luft an.","Atmen Sie tief ein und halten Sie die Luft an.","Atmen Sie bitte tief ein und halten Sie den Atem an.","Bitte atmen Sie tief ein und halten Sie den Atem an.","Atmen Sie bitte tief ein und halten die Luft an.","Bitte tief einatmen und die Luft anhalten."],"why":"Two separable verbs: einatmen and anhalten; both prefixes go to the end of their part."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Gebe mir bitte deine Hand.","a":"Gib mir bitte deine Hand.","why":"geben changes e → i in the du-imperative: Gib!"},
  {"n":5,"k":"cz","q":"Zu zwei Kindern: „___ bitte ruhig!“","a":"Seid","de":"„Seid bitte ruhig!“","why":"ihr-imperative of sein: Seid!"},
  {"n":6,"k":"cz","q":"Zu einem Kind: „___ mal tief ein!“ (atmen)","a":"Atme","de":"„Atme mal tief ein!“","why":"After consonant + m the du-imperative needs -e: Atme!"},
  {"n":7,"k":"cz","q":"___ bitte die Tablette mit viel Wasser! (nehmen, du)","a":"Nimm","de":"Nimm bitte die Tablette mit viel Wasser!","why":"du nimmst → Nimm! The e → i change stays."},
  {"n":8,"k":"cz","q":"Halten Sie bitte die Luft ___. (anhalten)","a":"an","de":"Halten Sie bitte die Luft an.","why":"anhalten is separable: the prefix goes to the end."}],
 g76:[
  {"n":1,"k":"pr","q":"Auf Deutsch: Ohne Kontrast verneint: „Er hat das Rezept abgeholt.“","a":"Er hat das Rezept nicht abgeholt.","why":"Satznegation: after the accusative object, before the participle."},
  {"n":2,"k":"pr","q":"Satzbau: Der / die / genommen / gestern / hat / nicht / Patient / Tabletten","a":"Der Patient hat die Tabletten gestern nicht genommen.","alt":["Der Patient hat gestern die Tabletten nicht genommen."],"why":"Object and time first, nicht directly before the participle."},
  {"n":3,"k":"pr","q":"Satzbau (Perfekt, mit „noch nicht“): ich / den Oberarzt / heute / erreichen","a":"Ich habe den Oberarzt heute noch nicht erreicht.","alt":["Ich habe heute den Oberarzt noch nicht erreicht.","Heute habe ich den Oberarzt noch nicht erreicht.","Den Oberarzt habe ich heute noch nicht erreicht."],"why":"Object and time before noch nicht; the participle closes the bracket."},
  {"n":4,"k":"pr","q":"Auf Deutsch: She is not going home today.","a":"Sie geht heute nicht nach Hause.","alt":["Heute geht sie nicht nach Hause.","Sie fährt heute nicht nach Hause.","Heute fährt sie nicht nach Hause."],"why":"Time before nicht; nicht before the direction (nach Hause)."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Ich kann nicht heute Abend kommen.","a":"Ich kann heute Abend nicht kommen.","why":"Time stands before nicht; nicht stands before the infinitive."},
  {"n":6,"k":"cz","q":"Ich komme ___, sondern morgen.","a":"nicht heute","de":"Ich komme nicht heute, sondern morgen.","why":"Sondernegation: nicht directly before the element that is corrected."},
  {"n":7,"k":"cz","q":"Er ist seit gestern ___ mehr ansprechbar. (Negation)","a":"nicht","de":"Er ist seit gestern nicht mehr ansprechbar.","why":"nicht mehr = no longer; before the adjective."},
  {"n":8,"k":"cz","q":"Die Patientin hat ___ Fieber und keinen Husten. (Negation)","a":"kein","de":"Die Patientin hat kein Fieber und keinen Husten.","why":"A noun without article is negated with kein: kein Fieber."}],
 g77:[
  {"n":1,"k":"pr","q":"Satzbau: auf / eine / Fraktur / gefunden / haben / Hinweis / keinen / Wir","a":"Wir haben keinen Hinweis auf eine Fraktur gefunden.","why":"Hinweis auf + accusative; the participle closes the bracket."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens): die Angehörigen / mit / die Behandlung / sehr zufrieden / sein","a":"Die Angehörigen sind mit der Behandlung sehr zufrieden.","alt":["Die Angehörigen sind sehr zufrieden mit der Behandlung."],"why":"zufrieden mit + dative: mit der Behandlung."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): What are you allergic to?","a":"Wogegen sind Sie allergisch?","alt":["Worauf sind Sie allergisch?","Gegen was sind Sie allergisch?","Auf was sind Sie allergisch?"],"why":"allergisch gegen → wogegen; the question word comes first, the verb second."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Der Patient ist abhängig auf Schmerzmittel.","a":"Der Patient ist abhängig von Schmerzmitteln.","alt":["Der Patient ist von Schmerzmitteln abhängig."],"why":"abhängig von + dative; the dative plural adds -n."},
  {"n":5,"k":"cz","q":"Sind Sie ___ der Operation einverstanden?","a":"mit","de":"Sind Sie mit der Operation einverstanden?","why":"einverstanden mit + dative."},
  {"n":6,"k":"cz","q":"Es besteht der Verdacht ___ eine Lungenembolie.","a":"auf","de":"Es besteht der Verdacht auf eine Lungenembolie.","why":"Verdacht auf + accusative."},
  {"n":7,"k":"cz","q":"Wer ist heute Nacht ___ die Station zuständig?","a":"für","de":"Wer ist heute Nacht für die Station zuständig?","why":"zuständig für + accusative."},
  {"n":8,"k":"cz","q":"___ haben Sie Angst? — Vor der Narkose.","a":"Wovor","de":"Wovor haben Sie Angst? — Vor der Narkose.","why":"Angst vor → wo(r)- + vor = wovor."}],
 g78:[
  {"n":1,"k":"pr","q":"Satzbau: ältere / chronische / Einige / haben / Krankheiten / mehrere / Patienten","a":"Einige ältere Patienten haben mehrere chronische Krankheiten.","why":"einige and mehrere are group B: the adjectives take -e."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens): der Patient / zwei / klein / Wunden / an / die rechte Hand / haben","a":"Der Patient hat zwei kleine Wunden an der rechten Hand.","alt":["Der Patient hat an der rechten Hand zwei kleine Wunden.","An der rechten Hand hat der Patient zwei kleine Wunden."],"why":"After a number the adjective shows the case: zwei kleine; Wo? → an der rechten Hand."},
  {"n":3,"k":"pr","q":"Auf Deutsch: Many older patients take several different medications.","a":"Viele ältere Patienten nehmen mehrere verschiedene Medikamente.","alt":["Viele ältere Patienten nehmen mehrere verschiedene Medikamente ein.","Viele alte Patienten nehmen mehrere verschiedene Medikamente.","Viele alte Patienten nehmen mehrere verschiedene Medikamente ein.","Viele ältere Patientinnen und Patienten nehmen mehrere verschiedene Medikamente."],"why":"viele ältere (nominative) and mehrere verschiedene (accusative): group B, all in -e."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Alle neue Mitarbeiter bekommen einen Schlüssel.","a":"Alle neuen Mitarbeiter bekommen einen Schlüssel.","why":"After alle the adjective ends in -en."},
  {"n":5,"k":"cz","q":"Alle ___ Patienten sind schon aufgenommen. (angemeldet)","a":"angemeldeten","de":"Alle angemeldeten Patienten sind schon aufgenommen.","why":"alle works like the article die → weak ending -en."},
  {"n":6,"k":"cz","q":"Wir haben viele ___ Kollegen.","a":"nette","de":"Wir haben viele nette Kollegen.","why":"viele works like an adjective; accusative plural → both take -e."},
  {"n":7,"k":"cz","q":"Beide ___ Kollegen haben heute Nachtdienst. (neu)","a":"neuen","de":"Beide neuen Kollegen haben heute Nachtdienst.","why":"beide works like the article die → -en."},
  {"n":8,"k":"cz","q":"Nach mehreren ___ Versuchen lag der Zugang.","a":"erfolglosen","de":"Nach mehreren erfolglosen Versuchen lag der Zugang.","why":"nach + dative plural: mehreren erfolglosen — the adjective copies -en."}],
 g79:[
  {"n":1,"k":"pr","q":"Satzbau: bitte / bleibt / Fieber / hat / Hause / Wer / zu","a":"Wer Fieber hat, bleibt bitte zu Hause.","why":"The wer-clause fills position 1; the main verb follows the comma."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens): was / mir / auffallen / , / sein / der niedrige Blutdruck","a":"Was mir auffällt, ist der niedrige Blutdruck.","why":"was-clause first with the verb at its end (auffällt, joined again), then ist."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Is there anything else you want to tell me?","a":"Gibt es noch etwas, was Sie mir sagen möchten?","alt":["Gibt es noch etwas, das Sie mir sagen möchten?","Gibt es noch etwas, was Sie mir sagen wollen?","Gibt es noch etwas, das Sie mir sagen wollen?","Gibt es sonst noch etwas, was Sie mir sagen möchten?","Gibt es sonst noch etwas, das Sie mir sagen möchten?","Gibt es noch etwas, was Sie mir erzählen möchten?","Gibt es noch etwas, das Sie mir erzählen möchten?"],"why":"etwas + was (or das); the verb goes to the end of the relative clause."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Sie hat aufgehört zu rauchen, das mich sehr freut.","a":"Sie hat aufgehört zu rauchen, was mich sehr freut.","why":"Reference to a whole clause → was."},
  {"n":5,"k":"cz","q":"Das ist das Beste, ___ wir im Moment tun können.","a":"was","de":"Das ist das Beste, was wir im Moment tun können.","why":"After a superlative used as a noun the relative pronoun is was."},
  {"n":6,"k":"cz","q":"Er hat zehn Kilo abgenommen, ___ den Blutdruck deutlich gesenkt hat.","a":"was","de":"Er hat zehn Kilo abgenommen, was den Blutdruck deutlich gesenkt hat.","why":"The relative clause refers to the whole clause → was."},
  {"n":7,"k":"cz","q":"___ Blutverdünner nimmt, sollte vor dem Eingriff Bescheid sagen.","a":"Wer","de":"Wer Blutverdünner nimmt, sollte vor dem Eingriff Bescheid sagen.","why":"No noun to refer to; 'anyone who' as subject → wer."},
  {"n":8,"k":"cz","q":"Es gibt vieles, ___ ich Ihnen dankbar bin.","a":"wofür","de":"Es gibt vieles, wofür ich Ihnen dankbar bin.","why":"dankbar für → wo- + für = wofür."}],
 g80:[
  {"n":1,"k":"pr","q":"Satzbau: auf / die / gestern / haben / ihn / Intensivstation / sofort / verlegt / Wir","a":"Wir haben ihn gestern sofort auf die Intensivstation verlegt.","why":"Pronoun first, then time, manner, direction; the participle closes the bracket."},
  {"n":2,"k":"pr","q":"Satzbau (Perfekt): der Oberarzt / erklären / gestern / die Angehörigen / der Befund","a":"Der Oberarzt hat den Angehörigen gestern den Befund erklärt.","alt":["Der Oberarzt hat gestern den Angehörigen den Befund erklärt.","Gestern hat der Oberarzt den Angehörigen den Befund erklärt.","Den Angehörigen hat der Oberarzt gestern den Befund erklärt."],"why":"Dative (den Angehörigen) before accusative (den Befund); participle last."},
  {"n":3,"k":"pr","q":"Auf Deutsch: The operation went better than expected.","a":"Die Operation ist besser verlaufen als erwartet.","alt":["Die Operation ist besser gelaufen als erwartet.","Die Operation verlief besser als erwartet.","Die Operation lief besser als erwartet.","Die OP ist besser verlaufen als erwartet.","Die OP ist besser gelaufen als erwartet.","Die OP verlief besser als erwartet.","Die Operation ist besser als erwartet verlaufen.","Die Operation ist besser als erwartet gelaufen."],"why":"The comparison als erwartet may stand after the participle."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Die Ärztin hat dem Patienten ihn gezeigt.","a":"Die Ärztin hat ihn dem Patienten gezeigt.","why":"The pronoun (ihn) stands before the noun (dem Patienten)."},
  {"n":5,"k":"cz","q":"Der Verlauf war günstiger ___ erwartet.","a":"als","de":"Der Verlauf war günstiger als erwartet.","why":"Comparative + als; the comparison stands at the end."},
  {"n":6,"k":"cz","q":"Der Patient hat Schmerzen angegeben, und ___ im rechten Unterbauch. (namely)","a":"zwar","de":"Der Patient hat Schmerzen angegeben, und zwar im rechten Unterbauch.","why":"und zwar adds a precise detail in the Nachfeld."}],
 g81:[
  {"n":1,"k":"pr","q":"Satzbau: CT / Das / früher / gemacht / hätte / können / werden","a":"Das CT hätte früher gemacht werden können.","why":"hätte in position 2; the cluster at the end: Partizip II – werden – können."},
  {"n":2,"k":"pr","q":"Ins Passiv: Man hätte den Patienten früher aufklären müssen.","a":"Der Patient hätte früher aufgeklärt werden müssen.","why":"The accusative object becomes the subject; aufklären → aufgeklärt werden."},
  {"n":3,"k":"pr","q":"Satzbau (Kritik im Passiv, Konjunktiv II der Vergangenheit): die Antibiotikatherapie / früher / beginnen / sollen","a":"Die Antibiotikatherapie hätte früher begonnen werden sollen.","why":"hätte + Partizip II (begonnen) + werden + sollen."},
  {"n":4,"k":"pr","q":"Auf Deutsch: The fracture must have been overlooked.","a":"Die Fraktur muss übersehen worden sein.","alt":["Der Bruch muss übersehen worden sein.","Der Knochenbruch muss übersehen worden sein.","Man muss die Fraktur übersehen haben.","Man muss den Bruch übersehen haben."],"why":"A conclusion about the past: muss + Partizip II + worden sein."},
  {"n":5,"k":"fx","q":"Korrigieren Sie: Die Patientin hätte früher verlegt worden müssen.","a":"Die Patientin hätte früher verlegt werden müssen.","why":"Before the modal infinitive the passive needs werden, not worden."},
  {"n":6,"k":"cz","q":"Ohne die Reanimation ___ der Patient nicht gerettet worden. (sein, Konjunktiv II)","a":"wäre","de":"Ohne die Reanimation wäre der Patient nicht gerettet worden.","why":"Passive in the Konjunktiv II of the past: wäre + Partizip II + worden."},
  {"n":7,"k":"cz","q":"Die Allergie hätte dokumentiert ___ müssen.","a":"werden","de":"Die Allergie hätte dokumentiert werden müssen.","why":"hätte + Partizip II + werden + modal infinitive."}],
 g82:[
  {"n":1,"k":"pr","q":"Satzbau: aus / den / die / in / Rücken / Schmerzen / Strahlen (?)","a":"Strahlen die Schmerzen in den Rücken aus?","why":"Yes/no question: verb first; the prefix aus goes to the end."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens, Frage): die Schmerzen / beim / Einatmen / stärker / werden / ?","a":"Werden die Schmerzen beim Einatmen stärker?","why":"Yes/no question: verb first; stärker stands at the end."},
  {"n":3,"k":"pr","q":"In die Briefsprache (ohne Verb): Der Schmerz hat plötzlich angefangen und zieht in den linken Arm.","a":"Schlagartig einsetzender Schmerz mit Ausstrahlung in den linken Arm.","alt":["Plötzlich einsetzender Schmerz mit Ausstrahlung in den linken Arm.","Akut einsetzender Schmerz mit Ausstrahlung in den linken Arm.","Schlagartig einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Plötzlich einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Akut einsetzende Schmerzen mit Ausstrahlung in den linken Arm.","Plötzlich aufgetretener Schmerz mit Ausstrahlung in den linken Arm.","Schlagartig aufgetretener Schmerz mit Ausstrahlung in den linken Arm.","Plötzlicher Schmerzbeginn mit Ausstrahlung in den linken Arm."],"why":"The verbs become a participle (einsetzend) and a noun (Ausstrahlung)."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Die Schmerzen sind plötzlich aufgetreten und strahlen in dem Rücken aus.","a":"Die Schmerzen sind plötzlich aufgetreten und strahlen in den Rücken aus.","why":"ausstrahlen is a direction → in + accusative: in den Rücken."},
  {"n":5,"k":"cz","q":"Wie stark sind die Schmerzen auf einer ___ von null bis zehn?","a":"Skala","de":"Wie stark sind die Schmerzen auf einer Skala von null bis zehn?","why":"auf einer Skala von null bis zehn."},
  {"n":6,"k":"cz","q":"Der Patient klagt über ___ Schmerzen hinter dem Brustbein. (drücken, Partizip I)","a":"drückende","de":"Der Patient klagt über drückende Schmerzen hinter dem Brustbein.","why":"drücken + d + ending -e (accusative plural, no article)."}],
 g83:[
  {"n":1,"k":"pr","q":"Satzbau: Abklärung / ein / EKG / ich / schreiben / weiteren / würde / Zur","a":"Zur weiteren Abklärung würde ich ein EKG schreiben.","alt":["Ich würde zur weiteren Abklärung ein EKG schreiben."],"why":"The phrase fills position 1; würde second; the infinitive last."},
  {"n":2,"k":"pr","q":"Satzbau (indirekte Rede, Konjunktiv I): die Patientin / berichten / , / sie / seit zwei Tagen / Durchfall / haben","a":"Die Patientin berichtet, sie habe seit zwei Tagen Durchfall.","alt":["Die Patientin berichtet, dass sie seit zwei Tagen Durchfall habe."],"why":"haben → sie habe; without dass the verb stays in second position."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Konjunktiv I): Allergies are not known.","a":"Allergien seien nicht bekannt.","alt":["Allergien seien keine bekannt.","Es seien keine Allergien bekannt."],"why":"Plural of sein in Konjunktiv I: seien."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Der Patient berichtet, er nimmt keine Medikamente ein.","a":"Der Patient berichtet, er nehme keine Medikamente ein.","why":"What the patient says stands in Konjunktiv I: er nehme."},
  {"n":5,"k":"cz","q":"Die Patientin berichtet, die Schmerzen ___ plötzlich aufgetreten. (Konjunktiv I)","a":"seien","de":"Die Patientin berichtet, die Schmerzen seien plötzlich aufgetreten.","why":"Reported speech, plural of sein: seien."},
  {"n":6,"k":"cz","q":"Die Frage nach Vorerkrankungen ___.","a":"wurde verneint","de":"Die Frage nach Vorerkrankungen wurde verneint.","why":"Passive: wurde + Partizip II."},
  {"n":7,"k":"cz","q":"An Vorerkrankungen ___ ein Diabetes mellitus bekannt. (sein, Konjunktiv I)","a":"sei","de":"An Vorerkrankungen sei ein Diabetes mellitus bekannt.","why":"Singular subject (ein Diabetes) → sei."},
  {"n":8,"k":"cz","q":"Differenzialdiagnostisch kommt eine Lungenembolie in ___.","a":"Betracht","alt":["Frage"],"de":"Differenzialdiagnostisch kommt eine Lungenembolie in Betracht.","why":"in Betracht kommen = to be a possibility."}],
 g84:[
  {"n":1,"k":"pr","q":"Satzbau: an / bitte / mich / morgen / Rufen / Sie","a":"Rufen Sie mich bitte morgen an.","alt":["Rufen Sie mich morgen bitte an."],"why":"anrufen is stressed on an- — and the stressed prefix is the one that splits off and goes to the end."},
  {"n":2,"k":"pr","q":"Perfekt: Wir umfahren die Baustelle. (umFAHren, untrennbar)","a":"Wir haben die Baustelle umfahren.","why":"Unstressed prefix = inseparable = participle without ge-: umfahren."},
  {"n":3,"k":"pr","q":"Plural (das t wird wieder zu d): das Bad","a":"die Bäder","alt":["Bäder"],"why":"Bad is spoken with t at the end, but the plural shows the real d: die Bäder."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich fülle mich heute nicht wohl.","a":"Ich fühle mich heute nicht wohl.","why":"fühlen (long ü, written with h) = to feel."},
  {"n":5,"k":"cz","q":"Heidelberg ist eine schöne ___. (Staat oder Stadt? — short a)","a":"Stadt","de":"Heidelberg ist eine schöne Stadt.","why":"Two consonants (dt) after the vowel → short."},
  {"n":6,"k":"cz","q":"offen oder Ofen? Die Wunde ist noch ___.","a":"offen","de":"offen oder Ofen? Die Wunde ist noch offen.","why":"offen (short o, double f) = open."},
  {"n":7,"k":"cz","q":"Wir treffen uns in der ___ der Woche. (Miete oder Mitte?)","a":"Mitte","de":"Wir treffen uns in der Mitte der Woche.","why":"Double consonant → short vowel: Mitte. ie → long: Miete."}],
 g85:[
  {"n":1,"k":"pr","q":"Satzbau: erreichen / ich / kann / Nummer / Sie / Unter / welcher (?)","a":"Unter welcher Nummer kann ich Sie erreichen?","why":"Question phrase first (unter welcher Nummer), modal verb second, infinitive last."},
  {"n":2,"k":"pr","q":"In Worten, Ziffer für Ziffer: 06221","a":"null sechs zwei zwei eins","alt":["null sechs zwo zwo eins","null sechs zwei zwo eins","null sechs zwo zwei eins"],"why":"An area code is read digit by digit; zwo for zwei is common on the phone."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Could you repeat that, please?","a":"Könnten Sie das bitte wiederholen?","alt":["Können Sie das bitte wiederholen?","Könnten Sie das bitte noch einmal sagen?","Können Sie das bitte noch einmal sagen?","Würden Sie das bitte wiederholen?","Könnten Sie das bitte nochmal sagen?","Können Sie das bitte nochmal sagen?"],"why":"wiederholen is inseparable here (stress on -ho-): Könnten Sie das bitte wiederholen?"},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Wie schreibt das man?","a":"Wie schreibt man das?","why":"The subject pronoun man stands directly after the verb; the object das follows."},
  {"n":5,"k":"cz","q":"Können Sie Ihren Namen bitte ___? (spell)","a":"buchstabieren","de":"Können Sie Ihren Namen bitte buchstabieren?","why":"buchstabieren = to spell (der Buchstabe = the letter)."},
  {"n":6,"k":"cz","q":"Neue Buchstabiertafel: „H wie ___“ (große Stadt im Norden)","a":"Hamburg","de":"„H wie Hamburg“","why":"Since 2022 the official table uses city names: H wie Hamburg (older: H wie Heinrich)."}],
 g86:[
  {"n":1,"k":"pr","q":"Satzbau: Diabetes / Familie / Hat / Ihrer / in / irgendjemand (?)","a":"Hat irgendjemand in Ihrer Familie Diabetes?","alt":["Hat in Ihrer Familie irgendjemand Diabetes?"],"why":"Yes/no question: verb first, then the subject irgendjemand."},
  {"n":2,"k":"pr","q":"Antworten Sie mit „welche“: Haben Sie Allergien? — Ja, …","a":"Ja, ich habe welche.","alt":["Ich habe welche.","Ja, ich habe welche"],"why":"welche stands for the plural noun Allergien."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Do you have pain anywhere?","a":"Haben Sie irgendwo Schmerzen?","alt":["Tut Ihnen irgendwo etwas weh?","Tut es Ihnen irgendwo weh?","Tut es irgendwo weh?","Tut Ihnen irgendwo was weh?"],"why":"anywhere = irgendwo; it stands in the middle, before the noun."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich brauche einen Stift. Hast du ein?","a":"Ich brauche einen Stift. Hast du einen?","why":"Standing alone, the word needs its full ending: der Stift, accusative → einen."},
  {"n":5,"k":"cz","q":"Haben Sie Schmerztabletten zu Hause? — Ja, ich habe ___.","a":"welche","de":"Haben Sie Schmerztabletten zu Hause? — Ja, ich habe welche.","why":"A plural noun is replaced by welche."},
  {"n":6,"k":"cz","q":"Brauchen Sie einen Rollstuhl? — Nein danke, ich habe ___.","a":"einen","de":"Brauchen Sie einen Rollstuhl? — Nein danke, ich habe einen.","why":"der Rollstuhl, accusative: einen — the same form as the article here."},
  {"n":7,"k":"cz","q":"Nehmen Sie ___ Medikamente?","a":"irgendwelche","de":"Nehmen Sie irgendwelche Medikamente?","why":"Before a plural noun: irgendwelche."},
  {"n":8,"k":"cz","q":"___ der drei Patienten hat Fieber. (not one)","a":"Keiner","de":"Keiner der drei Patienten hat Fieber.","why":"Alone, masculine nominative: keiner (der Patient)."}],
 g87:[
  {"n":1,"k":"pr","q":"Satzbau: Frau / Ich / Ihnen / Keller / Kollegin / neue / stelle / unsere / vor","a":"Ich stelle Ihnen Frau Keller, unsere neue Kollegin, vor.","why":"The apposition stands directly after its noun, between two commas; the prefix vor closes the sentence."},
  {"n":2,"k":"pr","q":"Mit Apposition verbinden: Wir verlegen Herrn Demir. Er ist ein 70-jähriger Patient mit Pneumonie.","a":"Wir verlegen Herrn Demir, einen 70-jährigen Patienten mit Pneumonie.","why":"verlegen + accusative → einen 70-jährigen Patienten (n-declension: Patienten)."},
  {"n":3,"k":"pr","q":"Datum in Worten, mit „am“: Di., 04.06.","a":"am Dienstag, dem vierten Juni","alt":["am Dienstag, den vierten Juni","am Dienstag, dem 4. Juni","am Dienstag, den 4. Juni","am Dienstag, dem vierten Sechsten","am Dienstag, den vierten Sechsten"],"why":"am + weekday, then the date as an apposition: dem (or den) vierten Juni."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich danke Herrn Dr. Weber, der behandelnde Arzt, für den Bericht.","a":"Ich danke Herrn Dr. Weber, dem behandelnden Arzt, für den Bericht.","why":"danken + dative: Herrn Dr."},
  {"n":5,"k":"cz","q":"Ich habe mit Frau Dr. Nowak, ___, gesprochen.","a":"der Oberärztin","de":"Ich habe mit Frau Dr. Nowak, der Oberärztin, gesprochen.","why":"mit + dative; the apposition copies the case: der Oberärztin."},
  {"n":6,"k":"cz","q":"Die Visite ist am Dienstag, ___ 4. Juni.","a":"dem","de":"Die Visite ist am Dienstag, dem 4. Juni.","why":"am Dienstag is dative, so the date follows in the dative: dem 4."},
  {"n":7,"k":"cz","q":"Heute ist Freitag, ___ 12. November.","a":"der","de":"Heute ist Freitag, der 12. November.","why":"After Heute ist … the weekday and its date are nominative: der 12."},
  {"n":8,"k":"cz","q":"Das ist das Büro von Herrn Braun, ___ Chefarzt der Chirurgie. (der)","a":"dem","de":"Das ist das Büro von Herrn Braun, dem Chefarzt der Chirurgie.","why":"von + dative → the apposition is dative: dem Chefarzt."}],
 g88:[
  {"n":1,"k":"pr","q":"Satzbau: es / nicht / nur / so / wehtun / Wenn / würde","a":"Wenn es nur nicht so wehtun würde!","alt":["Wenn es nur nicht so wehtun würde"],"why":"Wish with wenn: the particle nur after the subject, würde at the very end."},
  {"n":2,"k":"pr","q":"Als Wunsch, Verb zuerst, mit „bloß“: Ich habe die Tabletten nicht genommen.","a":"Hätte ich bloß die Tabletten genommen!","alt":["Hätte ich die Tabletten bloß genommen!","Wenn ich bloß die Tabletten genommen hätte!","Wenn ich die Tabletten bloß genommen hätte!"],"why":"The real negative fact becomes a positive wish: Hätte ich … genommen!"},
  {"n":3,"k":"pr","q":"Mit „zu …, als dass“: Die Wunde ist so tief, dass man sie nicht kleben kann.","a":"Die Wunde ist zu tief, als dass man sie kleben könnte.","why":"so … dass … nicht → zu …, als dass + Konjunktiv II; nicht disappears."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Hätte ich bloß früher den Notarzt rufen!","a":"Hätte ich bloß früher den Notarzt gerufen!","why":"Wish about the past: hätte + Partizip II (gerufen)."},
  {"n":5,"k":"cz","q":"Der Befund ist zu unklar, als dass man jetzt operieren ___.","a":"könnte","de":"Der Befund ist zu unklar, als dass man jetzt operieren könnte.","why":"als dass + Konjunktiv II: könnte, at the end of the clause."},
  {"n":6,"k":"cz","q":"Er ist zu schwach, ___ allein aufzustehen.","a":"um","de":"Er ist zu schwach, um allein aufzustehen.","why":"Same subject and an infinitive with zu → zu …, um … zu."},
  {"n":7,"k":"cz","q":"Wenn ich doch nur mehr Zeit ___!","a":"hätte","de":"Wenn ich doch nur mehr Zeit hätte!","why":"A wish needs Konjunktiv II: hätte."},
  {"n":8,"k":"cz","q":"___ ich doch zu Hause geblieben! (sein, Konjunktiv II)","a":"Wäre","de":"Wäre ich doch zu Hause geblieben!","why":"bleiben forms its perfect with sein → Wäre ich … geblieben!"}],
 g89:[
  {"n":1,"k":"pr","q":"Satzbau: Gewicht / Hat / Ihr / in / letzter / sich / verändert / Zeit (?)","a":"Hat sich Ihr Gewicht in letzter Zeit verändert?","alt":["Hat sich in letzter Zeit Ihr Gewicht verändert?"],"why":"sich verändern: sich directly after the verb; the participle closes the question."},
  {"n":2,"k":"pr","q":"In die Briefsprache (ohne Verb): Der Patient hat in drei Monaten fünf Kilo abgenommen, ohne es zu wollen.","a":"Ungewollter Gewichtsverlust von 5 kg in drei Monaten.","alt":["Ungewollter Gewichtsverlust von fünf Kilo in drei Monaten.","Ungewollter Gewichtsverlust von 5 kg in 3 Monaten.","Ungewollter Gewichtsverlust von fünf Kilogramm in drei Monaten.","Ungewollter Gewichtsverlust von 5 Kilo in drei Monaten.","Ungewollter Gewichtsverlust von 5 Kilogramm in drei Monaten.","Ungewollte Gewichtsabnahme von 5 kg in drei Monaten.","Ungewollte Gewichtsabnahme von fünf Kilo in drei Monaten.","Ungewollte Gewichtsabnahme von 5 kg in 3 Monaten."],"why":"abnehmen → der Gewichtsverlust; ohne es zu wollen → ungewollt, with the ending -er before a masculine noun."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Do you sweat heavily at night?","a":"Schwitzen Sie nachts stark?","alt":["Schwitzen Sie in der Nacht stark?","Schwitzen Sie nachts sehr stark?","Schwitzen Sie nachts sehr?","Schwitzen Sie stark in der Nacht?"],"why":"Yes/no question: verb first; time (nachts) before manner (stark)."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ist Ihnen Blut in den Stuhl aufgefallen?","a":"Ist Ihnen Blut im Stuhl aufgefallen?","why":"Wo? → dative: im Stuhl."},
  {"n":5,"k":"cz","q":"Haben Sie in letzter Zeit ungewollt ___?","a":"abgenommen","de":"Haben Sie in letzter Zeit ungewollt abgenommen?","why":"Perfekt of abnehmen: hat abgenommen (strong, ge- in the middle)."},
  {"n":6,"k":"cz","q":"Brennt es ___ Wasserlassen? (bei + dem)","a":"beim","alt":["bei dem"],"de":"Brennt es beim Wasserlassen?","why":"beim + infinitive as a noun: beim Wasserlassen."},
  {"n":7,"k":"cz","q":"Können Sie gut einschlafen und ___? (sleep through the night)","a":"durchschlafen","de":"Können Sie gut einschlafen und durchschlafen?","why":"einschlafen = to fall asleep, durchschlafen = to sleep through."}],
 g90:[
  {"n":1,"k":"pr","q":"Satzbau: „Schlägle“ / genau / meinen / mit / Sie / Was (?)","a":"Was meinen Sie genau mit „Schlägle“?","alt":["Was genau meinen Sie mit „Schlägle“?","Was meinen Sie mit „Schlägle“ genau?"],"why":"meinen mit + dative; asking back is the professional move."},
  {"n":2,"k":"pr","q":"In Fachsprache: Die Patientin hat ein offenes Bein.","a":"Die Patientin hat ein Ulcus cruris.","alt":["Die Patientin hat ein Ulkus cruris.","Bei der Patientin besteht ein Ulcus cruris.","Bei der Patientin besteht ein Ulkus cruris."],"why":"ein offenes Bein = Ulcus cruris."},
  {"n":3,"k":"pr","q":"Für den Patienten, ohne Fachwort: Sie haben eine Pneumonie.","a":"Sie haben eine Lungenentzündung.","why":"Pneumonie = Lungenentzündung: the patient gets the everyday word."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Mein Mann hat es an dem Herz.","a":"Mein Mann hat es am Herzen.","why":"Fixed phrase es am Herzen haben; das Herz takes -en in the dative: am Herzen."},
  {"n":5,"k":"cz","q":"Fachbegriff für „Hexenschuss“: die ___","a":"Lumbago","alt":["Lumbalgie"],"de":"Fachbegriff für „Hexenschuss“: die Lumbago","why":"Hexenschuss = Lumbago (akute Lumbalgie): sudden low back pain."},
  {"n":6,"k":"cz","q":"Alltagswort für „Hämatom“: der blaue ___","a":"Fleck","de":"Alltagswort für „Hämatom“: der blaue Fleck","why":"ein blauer Fleck (or: der Bluterguss) = Hämatom."}],
 g91:[
  {"n":1,"k":"pr","q":"Satzbau: bitte / es / genau / mir / Sie / wehtut / wo / Zeigen","a":"Zeigen Sie mir bitte genau, wo es wehtut.","alt":["Zeigen Sie mir genau, wo es bitte wehtut.","Bitte zeigen Sie mir genau, wo es wehtut."],"why":"Imperative first; in the wo-clause the verb stands last."},
  {"n":2,"k":"pr","q":"In Standarddeutsch: Mir isch e bissle schwindelig.","a":"Mir ist ein bisschen schwindelig.","alt":["Mir ist ein wenig schwindelig.","Mir ist etwas schwindelig."],"why":"isch = ist; e bissle = ein bisschen."},
  {"n":3,"k":"pr","q":"Fragen Sie nach (Sie): nur der Fuß — oder das ganze Bein? Beginnen Sie mit „Meinen Sie …“","a":"Meinen Sie nur den Fuß oder das ganze Bein?","alt":["Meinen Sie den Fuß oder das ganze Bein?","Meinen Sie nur den Fuß, oder das ganze Bein?"],"why":"meinen + accusative: den Fuß, das ganze Bein."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Das ist der Patient, wo gestern gestürzt ist.","a":"Das ist der Patient, der gestern gestürzt ist.","why":"In writing the relative pronoun follows the noun: der Patient, der …"},
  {"n":5,"k":"cz","q":"Standarddeutsch: „Des isch net schlimm.“ = Das ist ___ schlimm.","a":"nicht","de":"Das ist nicht schlimm.","why":"net (also: ned, nit) = nicht."},
  {"n":6,"k":"cz","q":"Standarddeutsch: „Ich kann nimmi laufen.“ = Ich kann nicht ___ gehen.","a":"mehr","de":"Ich kann nicht mehr gehen.","why":"nimmi = nicht mehr; laufen = (zu Fuß) gehen."}],
 g92:[
  {"n":1,"k":"pr","q":"Satzbau: dazu / Fragen / Haben / noch / Sie (?)","a":"Haben Sie dazu noch Fragen?","alt":["Haben Sie noch Fragen dazu?"],"why":"dazu = about this; the verb comes first in a yes/no question."},
  {"n":2,"k":"pr","q":"Ins Passiv (Präsens): Wir entnehmen eine Gewebeprobe.","a":"Eine Gewebeprobe wird entnommen.","alt":["Es wird eine Gewebeprobe entnommen."],"why":"The object becomes the subject; wird + Partizip II (entnommen)."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): You can withdraw your consent at any time.","a":"Sie können Ihre Einwilligung jederzeit widerrufen.","alt":["Sie können Ihre Einwilligung jederzeit zurückziehen.","Sie können Ihr Einverständnis jederzeit widerrufen.","Sie können Ihr Einverständnis jederzeit zurückziehen.","Sie können jederzeit Ihre Einwilligung widerrufen.","Sie können Ihre Einwilligung jederzeit zurücknehmen."],"why":"die Einwilligung widerrufen; widerrufen is inseparable."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Die Ärztin hat mich für die Risiken aufgeklärt.","a":"Die Ärztin hat mich über die Risiken aufgeklärt.","why":"jemanden über etwas aufklären (+ accusative)."},
  {"n":5,"k":"cz","q":"In seltenen Fällen kann es ___ einer Nachblutung kommen.","a":"zu","de":"In seltenen Fällen kann es zu einer Nachblutung kommen.","why":"es kommt zu + dative = something (unwanted) happens."},
  {"n":6,"k":"cz","q":"Alternativ ___ eine Behandlung mit Tabletten in Frage.","a":"käme","de":"Alternativ käme eine Behandlung mit Tabletten in Frage.","why":"Konjunktiv II for a possibility that is only considered: käme (singular subject: eine Behandlung)."},
  {"n":7,"k":"cz","q":"Es besteht das Risiko ___ Wundinfektion. (eine)","a":"einer","de":"Es besteht das Risiko einer Wundinfektion.","why":"das Risiko + genitive; feminine: einer Wundinfektion."},
  {"n":8,"k":"cz","q":"Sind Sie mit dem Eingriff ___? (in agreement)","a":"einverstanden","de":"Sind Sie mit dem Eingriff einverstanden?","why":"einverstanden sein mit + dative."}],
 g93:[
  {"n":1,"k":"pr","q":"Satzbau: bisher / Erkrankung / Ihre / Sie / über / Was / wissen (?)","a":"Was wissen Sie bisher über Ihre Erkrankung?","alt":["Was wissen Sie über Ihre Erkrankung bisher?"],"why":"Start from what the patient already knows; wissen über + accusative."},
  {"n":2,"k":"pr","q":"Für die Patientin, ohne Fachwort: Der Tumor ist maligne.","a":"Der Tumor ist bösartig.","alt":["Der Tumor ist leider bösartig.","Es ist Krebs.","Es handelt sich um Krebs."],"why":"maligne = bösartig."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): I cannot force you to stay.","a":"Ich kann Sie nicht zwingen zu bleiben.","alt":["Ich kann Sie nicht zum Bleiben zwingen.","Ich kann Sie nicht dazu zwingen zu bleiben.","Ich kann Sie nicht zwingen hierzubleiben.","Ich kann Sie nicht dazu zwingen hierzubleiben.","Ich kann Sie nicht zwingen, hier zu bleiben."],"why":"jemanden zwingen + zu + infinitive."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Es tut mich sehr leid.","a":"Es tut mir sehr leid.","why":"leidtun takes the dative: Es tut mir leid."},
  {"n":5,"k":"cz","q":"Zu den Angehörigen: „Es tut mir sehr leid. Ihr Vater ist heute Nacht ___.“","a":"verstorben","de":"„Es tut mir sehr leid. Ihr Vater ist heute Nacht verstorben.“","why":"verstorben (or gestorben) is clear and respectful."},
  {"n":6,"k":"cz","q":"Aus ärztlicher Sicht rate ich Ihnen dringend ___ ab.","a":"davon","de":"Aus ärztlicher Sicht rate ich Ihnen dringend davon ab.","why":"abraten von → davon."},
  {"n":7,"k":"cz","q":"Mein herzliches ___. (condolences)","a":"Beileid","de":"Mein herzliches Beileid.","why":"Mein herzliches Beileid."},
  {"n":8,"k":"cz","q":"Ich verstehe, ___ Sie verärgert sind.","a":"dass","de":"Ich verstehe, dass Sie verärgert sind.","why":"verstehen + dass-clause; the verb sind goes to the end."}],
 g94:[
  {"n":1,"k":"pr","q":"Satzbau: beschwerdefrei / Der / ist / Patient / seit / Tagen / zwei","a":"Der Patient ist seit zwei Tagen beschwerdefrei.","alt":["Seit zwei Tagen ist der Patient beschwerdefrei."],"why":"After sein the adjective stands at the end and has no ending."},
  {"n":2,"k":"pr","q":"Ein Adjektiv statt Relativsatz: eine Erkrankung, die behandelt werden muss → eine …","a":"eine behandlungsbedürftige Erkrankung","alt":["eine behandlungspflichtige Erkrankung"],"why":"-bedürftig = in need of; Behandlung + s + bedürftig, with the ending -e after eine."},
  {"n":3,"k":"pr","q":"Gegenteil mit „hypo-“: die Hypertonie","a":"die Hypotonie","alt":["Hypotonie"],"why":"hyper- = too much, hypo- = too little: Hypertonie – Hypotonie."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Die Patientin klagt über kolikartig Schmerzen im Oberbauch.","a":"Die Patientin klagt über kolikartige Schmerzen im Oberbauch.","why":"Before a noun the word is an ordinary adjective: accusative plural without article → -e."},
  {"n":5,"k":"cz","q":"Sie hat kein Fieber mehr: Die Patientin ist seit gestern ___.","a":"fieberfrei","alt":["afebril"],"de":"Die Patientin ist seit gestern fieberfrei.","why":"-frei = without: fieberfrei (technical: afebril)."},
  {"n":6,"k":"cz","q":"Wortbildung: Belastung + abhängig = ___","a":"belastungsabhängig","why":"After -ung the linking s is needed: belastungsabhängig."}],
 g95:[
  {"n":1,"k":"pr","q":"Satzbau: dabei / Haben / Ihren / Medikationsplan / Sie (?)","a":"Haben Sie Ihren Medikationsplan dabei?","why":"etwas dabeihaben = to have something with you; dabei stands at the end."},
  {"n":2,"k":"pr","q":"Satzbau (Präsens, Frage, Sie): wogegen / dieses Medikament / nehmen / ?","a":"Wogegen nehmen Sie dieses Medikament?","alt":["Wogegen nehmen Sie dieses Medikament ein?"],"why":"Question word first, verb second, then Sie."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Do you tolerate the tablets well?","a":"Vertragen Sie die Tabletten gut?","alt":["Vertragen Sie die Tabletten?"],"why":"vertragen = to tolerate; inseparable."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich nehme die Tabletten seit zwei Jahre.","a":"Ich nehme die Tabletten seit zwei Jahren.","why":"seit + dative; the dative plural adds -n: seit zwei Jahren."},
  {"n":5,"k":"cz","q":"Der Hausarzt hat das Medikament letzte Woche ___. (gestoppt)","a":"abgesetzt","de":"Der Hausarzt hat das Medikament letzte Woche abgesetzt.","why":"ein Medikament absetzen = to stop it; ansetzen = to start it."},
  {"n":6,"k":"cz","q":"Nehmen Sie regelmäßig Medikamente ___?","a":"ein","de":"Nehmen Sie regelmäßig Medikamente ein?","why":"einnehmen is separable: the prefix ein closes the question."},
  {"n":7,"k":"cz","q":"Wie viele ___ nehmen Sie von dem Asthmaspray? (der Hub, Plural)","a":"Hübe","de":"Wie viele Hübe nehmen Sie von dem Asthmaspray?","why":"der Hub → die Hübe (puffs)."}],
 g96:[
  {"n":1,"k":"pr","q":"Satzbau: CRP / Das / deutlich / gefallen / gestern / ist / seit","a":"Das CRP ist seit gestern deutlich gefallen.","alt":["Das CRP ist deutlich gefallen seit gestern."],"why":"fallen forms its perfect with sein; the participle stands at the end."},
  {"n":2,"k":"pr","q":"In Worten: K 4,2 mmol/l → Das Kalium liegt bei …","a":"Das Kalium liegt bei vier Komma zwei Millimol pro Liter.","alt":["vier Komma zwei Millimol pro Liter","Das Kalium liegt bei 4,2 Millimol pro Liter."],"why":"Number with Komma, unit with pro; Millimol stays singular."},
  {"n":3,"k":"pr","q":"Satzbau (Perfekt): das Hb / von 12 / auf 8 / fallen","a":"Das Hb ist von 12 auf 8 gefallen.","alt":["Das Hb ist von zwölf auf acht gefallen."],"why":"fallen takes sein: ist … gefallen; von … auf gives start and end."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Das Hb liegt bei acht Punkt zwei.","a":"Das Hb liegt bei acht Komma zwei.","why":"German decimals are spoken with Komma."},
  {"n":5,"k":"cz","q":"Das Kalium ___ bei 5,1 Millimol pro Liter.","a":"liegt","de":"Das Kalium liegt bei 5,1 Millimol pro Liter.","why":"liegen bei = to be at; das Kalium is singular: liegt."},
  {"n":6,"k":"cz","q":"Das Kreatinin ist von 1,2 ___ 2,4 gestiegen.","a":"auf","de":"Das Kreatinin ist von 1,2 auf 2,4 gestiegen.","why":"von … auf = from … to; um = by."},
  {"n":7,"k":"cz","q":"Alle Werte sind normal: Das Labor ist ___. (nothing abnormal)","a":"unauffällig","alt":["normal","normwertig"],"de":"Das Labor ist unauffällig.","why":"unauffällig = without abnormal findings — the standard word in reports."}],
 g97:[
  {"n":1,"k":"pr","q":"Satzbau: ein / Hause / Ihnen / Kommt / nach / Pflegedienst / zu (?)","a":"Kommt ein Pflegedienst zu Ihnen nach Hause?","why":"Yes/no question: verb first; zu Ihnen nach Hause = to your home."},
  {"n":2,"k":"pr","q":"In die Briefsprache (Konjunktiv I): Der Patient sagt: „Ich lebe allein.“ → Der Patient …","a":"Der Patient lebe allein.","alt":["Der Patient gibt an, er lebe allein.","Der Patient sagt, er lebe allein.","Der Patient gibt an, allein zu leben.","Der Patient berichtet, er lebe allein."],"why":"Reported speech in the letter: ich lebe → er lebe."},
  {"n":3,"k":"pr","q":"Auf Deutsch (Sie): Do you have a living will?","a":"Haben Sie eine Patientenverfügung?","why":"living will = die Patientenverfügung."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Ich lebe seit dem Tod von meine Frau allein.","a":"Ich lebe seit dem Tod von meiner Frau allein.","alt":["Ich lebe seit dem Tod meiner Frau allein."],"why":"von + dative: von meiner Frau (or the genitive: meiner Frau)."},
  {"n":5,"k":"cz","q":"In einer ___ steht, welche Behandlung jemand wünscht, wenn er nicht mehr entscheiden kann.","a":"Patientenverfügung","de":"In einer Patientenverfügung steht, welche Behandlung jemand wünscht, wenn er nicht mehr entscheiden kann.","why":"die Patientenverfügung = living will."},
  {"n":6,"k":"cz","q":"Kommen Sie zu Hause allein ___? (manage)","a":"zurecht","de":"Kommen Sie zu Hause allein zurecht?","why":"zurechtkommen is separable: Kommen Sie … zurecht?"},
  {"n":7,"k":"cz","q":"Wen sollen wir im ___ benachrichtigen? (emergency)","a":"Notfall","de":"Wen sollen wir im Notfall benachrichtigen?","why":"im Notfall = in an emergency."}],
 g98:[
  {"n":1,"k":"pr","q":"Satzbau: Deutschland / Die / Grafik / in / Menschen / rauchen / viele / wie / zeigt","a":"Die Grafik zeigt, wie viele Menschen in Deutschland rauchen.","why":"Indirect question after zeigt: the verb rauchen stands at the end."},
  {"n":2,"k":"pr","q":"Mit Verb statt Nomen: Es gab einen Anstieg der Kosten um 5 Prozent. → Die Kosten …","a":"Die Kosten sind um 5 Prozent gestiegen.","alt":["Die Kosten sind um fünf Prozent gestiegen.","Die Kosten stiegen um 5 Prozent.","Die Kosten stiegen um fünf Prozent."],"why":"der Anstieg → steigen; plural subject and sein: sind gestiegen."},
  {"n":3,"k":"pr","q":"Auf Deutsch: Every second patient is older than 65.","a":"Jeder zweite Patient ist älter als 65.","alt":["Jeder zweite Patient ist über 65.","Jeder zweite Patient ist älter als 65 Jahre.","Jeder zweite Patient ist über 65 Jahre alt.","Jeder zweite Patient ist älter als fünfundsechzig."],"why":"jeder zweite + singular noun and verb; comparative + als."},
  {"n":4,"k":"fx","q":"Korrigieren Sie: Die Zahl der Patienten hat um zehn Prozent gestiegen.","a":"Die Zahl der Patienten ist um zehn Prozent gestiegen.","why":"steigen forms its perfect with sein: ist gestiegen."},
  {"n":5,"k":"cz","q":"Die Zahl der Raucher ist in zehn Jahren deutlich ___.","a":"gesunken","de":"Die Zahl der Raucher ist in zehn Jahren deutlich gesunken.","why":"sinken — sank — ist gesunken."},
  {"n":6,"k":"cz","q":"Im Vergleich ___ 2015 ist die Zahl deutlich gestiegen.","a":"zu","alt":["mit","zum Jahr"],"de":"Im Vergleich zu 2015 ist die Zahl deutlich gestiegen.","why":"im Vergleich zu + dative (also: im Vergleich mit)."},
  {"n":7,"k":"cz","q":"Die Zahl hat sich ___: von 100 auf 200. (doubled)","a":"verdoppelt","de":"Die Zahl hat sich verdoppelt: von 100 auf 200.","why":"sich verdoppeln — hat sich verdoppelt."}]};

