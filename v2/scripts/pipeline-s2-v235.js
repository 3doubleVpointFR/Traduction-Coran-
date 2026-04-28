const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 235
// verse_id=242, analysis_id=605
// "wa la junaha 'alaykum fima 'arradtum bihi min khitbati al-nisa'i
//  aw aknannum fi anfusikum 'alima Allahu annakum satadh-kurunahunna
//  wa lakin la tawa'aduhunna sirran illa an taqulu qawlan ma'rufan
//  wa la ta'zimu 'uqdata al-nikahi hatta yabligha al-kitabu ajalahu
//  wa'lamu anna Allaha ya'lamu ma fi anfusikum fa-hadharuh
//  wa'lamu anna Allaha ghafurun halim"
// =====================================================

const verseData = {
  235: {
    verse_id: 242,
    analysis_id: 605,
    translation_arab: "Il n'y a pas d'inclinaison vers la faute pour vous dans les allusions que vous faites a ces femmes pour les demander en mariage, ou dans ce que vous dissimulez en vous-memes. Dieu sait que vous les evoquerez. Mais ne leur promettez pas secrètement, sauf a leur dire une parole convenable. Et ne vous decidez pas a nouer le contrat du mariage avant que l'ecrit n'atteigne son terme. Sachez que Dieu sait ce qu'il y a dans vos ames ; prenez-y garde. Et sachez que Dieu est Couvrant-pardonnant et Indulgent.",
    full_translation: "Il n'y a pas de peche pour vous dans les allusions que vous faites a ces femmes [en periode d'attente] pour les demander en mariage, ou dans ce que vous cachez en vous-memes. Dieu sait que vous les mentionnerez. Mais ne leur promettez pas secretement, sauf a leur dire une parole convenable. Et ne vous decidez pas a contracter le mariage avant que l'ecrit n'atteigne son terme. Sachez que Dieu sait ce qu'il y a dans vos ames ; prenez-y garde. Et sachez que Dieu est Pardonneur et Indulgent.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 235 fait suite au verset 234 (idda de la veuve) et au verset 232 (interdiction d'empechement du remariage) pour traiter d'une question delicate : peut-on exprimer son interet matrimonial a une femme en periode d'attente (idda) ? Le verset autorise les allusions voilees (ta'rid) mais interdit les promesses explicites et secretes, et le contrat formel avant la fin du terme (ajal al-kitab).\n" +
"\n" +
"La racine **jnh** (jim-nun-ha) signifie l'inclinaison vers la faute. Le Lane's donne : s'incliner vers ce qui est blamable, penchant vers le blame. La junaha = pas d'inclinaison — formule negative standard pour l'absence de responsabilite morale. Ce n'est pas 'pas de peche' au sens chretien mais 'pas de penchant blamable'.\n" +
"\n" +
"La racine **erd** ('ayn-ra-dad) signifie l'exposition oblique et l'allusion. Le Lane's donne : exposer a mi-mot, suggerer indirectement, mentionner de cote (par opposition a la declaration directe/tasrih). 'Arradtum bihi = vous l'avez suggere/allude indirectement. La ta'ridh est la voie permise : on evoque sans declarer.\n" +
"\n" +
"La racine **knn** (kaf-nun-nun) signifie cacher et dissimuler. Le Lane's donne : cacher, couvrir, garder dans un abri, dissimuler dans le for interieur. Aknanntum = vous avez cache/dissimule (accompli 2MP). Aknanntum fi anfusikum = ce que vous avez cache dans vos ames — les intentions tenues secretes.\n" +
"\n" +
"La racine **elm** ('ayn-lam-mim) signifie le savoir et la connaissance certaine. Le Lane's donne : savoir avec certitude, connaitre, etre informe. 'Alima Allahu = Dieu sait (accompli, assertion). Le 'ilm est la connaissance certaine — la science, l'etat de savoir etabli.\n" +
"\n" +
"La racine **dhkr** (dhal-kaf-ra) signifie le rappel et la mention. Le Lane's donne : rappeler, mentionner, evoquer, rememorier. Satadh-kurunahunna = vous les evoquerez/vous les mentionnerez (inaccompli 2MP avec suffixe feminin pluriel). Le dhikr est la mention et le rappel — le fait d'avoir a l'esprit ou de mettre en parole.\n" +
"\n" +
"La racine **wed** (waw-'ayn-dal) signifie la promesse et l'engagement mutuels. Le Lane's donne : promettre, s'engager a, wa'ada = il promit, tawa'ada = ils se promirent mutuellement. Tawa'aduhunna = vous leur promettez (Form VI mutuellement). La wa'da est la promesse — l'engagement contractuel avant le contrat officiel.\n" +
"\n" +
"La racine **srr** (sin-ra-ra) signifie le secret et ce qui est cache. Le Lane's donne : secret, chose cachee, confidence, sirran = secretement, en cachette. Sirran ici est le mode interdit : la promesse secrete (wa'd sirri) qui anticipe le contrat avant le terme de l'idda.\n" +
"\n" +
"La racine **qwl** (qaf-waw-lam) signifie la parole et le discours. Le Lane's donne : dire, parler, la parole, le discours, ce qui est exprime verbalement. Qawlan ma'rufan = une parole convenable — la parole encadree par le ma'ruf (bienveillance reconnue).\n" +
"\n" +
"La racine **erf** ('ayn-ra-fa) signifie ce qui est reconnu convenable et la bienveillance sociale. Le Lane's donne : ce qui est connu/reconnu, ce qui est socialement admis comme bien, la bienseance. Ma'rufan = convenable (adjectif), ce qui est reconnu dans la communaute comme bienveillant.\n" +
"\n" +
"La racine **eqd** ('ayn-qaf-dal) signifie le noeud et le contrat. Le Lane's donne : nouer, attacher, 'aqd = le noeud, le lien, le contrat. 'Uqdata al-nikahi = le noeud du mariage — la formule contractuelle. 'Azamtum = vous avez resolu/vous vous etes decides a (accompli 2MP). Ne pas 'ezimu 'uqdat al-nikah = ne pas nouer formellement le contrat.\n" +
"\n" +
"La racine **nkh** (nun-kaf-ha) signifie le mariage et l'union conjugale formelle. Le Lane's donne : mariage, union conjugale, nikah = le contrat de mariage. Al-nikahu est le mariage contractuel formel — la relation legallement validee.\n" +
"\n" +
"La racine **ktb** (kaf-ta-ba) signifie l'ecrit et la prescription. Le Lane's donne : ecrire, inscrire, al-kitab = l'ecrit, la prescription, le terme ecrit/fixe. Hatta yabligha al-kitabu ajalahu = jusqu'a ce que l'ecrit atteigne son terme — le terme de l'idda tel qu'il est determine/prescrit.\n" +
"\n" +
"La racine **ajl** (alif-jim-lam) signifie le terme fixe et l'echeance. Le Lane's donne : terme fixe, delai determine, echeance. Ajalahu = son terme (suffixe masculin singulier — terme du kitab). L'ajal est le terme ultime fixe — la limite au-dela de laquelle l'etat change.\n" +
"\n" +
"La racine **nfs** (nun-fa-sin) signifie l'ame et le for interieur. Le Lane's donne : ame, soi, personne, for interieur, souffle vital. Anfusikum = vos ames/vous-memes (pluriel avec suffixe 2MP). Fi anfusikum = dans vos ames/dans vos for interieurs — les intentions et desirs caches.\n" +
"\n" +
"La racine **ghfr** (ghayn-fa-ra) signifie le pardon et la couverture des fautes. Le Lane's donne : couvrir, pardonner, ghafara = il couvrit/pardonna les fautes. Ghafurun = Couvrant-pardonnant (forme intensif). Le ghufran est le pardon comme couverture — Dieu couvre les fautes de ceux qui se detournent.\n" +
"\n" +
"La racine **hlm** (ha-lam-mim) signifie l'indulgence et la patience face aux fautes. Le Lane's donne : patience, retenue, douceur, halim = indulgent, clement, qui ne se hate pas de punir. Halimun = Indulgent (attribut divin). Al-Halim est Celui qui ne punit pas precipitamment malgre la connaissance des fautes.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Pas d'inclinaison vers la faute dans les allusions** — la junaha 'alaykum fima 'arradtum bihi : la formule la junaha (pas d'inclinaison blamable) etablit la permission. La ta'ridh ('ard = allusion oblique) est la voie permise pour exprimer son interet a une femme en idda — on suggere sans declarer. Le ta'ridh s'oppose au tasrih (declaration directe) qui serait interdit pendant l'idda.\n" +
"\n" +
"**ou dans ce que vous dissimulez en vous-memes** — aw aknanntum fi anfusikum : le kitmane (dissimulation, de knn) dans les anfus (ames) est egalement permis. Les intentions cachees sont du domaine interne — elles ne constituent pas une faute tant qu'elles ne se concretisent pas en actes prohibes. Cette permission de la pensee cachee contraste avec l'interdiction de la promesse secrete.\n" +
"\n" +
"**Dieu sait que vous les evoquerez** — 'alima Allahu annakum satadh-kurunahunna : l'assertion divine ('alima = Dieu sait) est un aveu realiste. Dieu reconnait que les hommes penseront a ces femmes (satadh-kurunahunna = vous les evoquerez). Ce realisme divin justifie la permission de la ta'ridh et de la pensee.\n" +
"\n" +
"**Mais ne leur promettez pas secretement** — wa lakin la tawa'aduhunna sirran : le contraste (wa lakin = mais) etablit la limite. La wa'da (promesse, de wed) secrete (sirran, de srr) est interdite. La tawa'ada (Form VI = se promettre mutuellement) implies un engagement bilateral — une quasi-fiancaille avant la fin de l'idda, ce qui anticipe irregulierement le contrat.\n" +
"\n" +
"**sauf a dire une parole convenable** — illa an taqulu qawlan ma'rufan : l'exception (illa = sauf) autorise la parole (qawl, de qwl) encadree par le ma'ruf (ce qui est reconnu convenable, de erf). La parole convenable est celle qui n'engage pas formellement mais reste dans les limites de la bienseance sociale.\n" +
"\n" +
"**ne vous decidez pas a nouer le contrat du mariage** — wa la ta'zimu 'uqdata al-nikahi : ta'zimu (vous resolez, de azm = resolution ferme) 'uqdata (le noeud, de eqd) al-nikahi (du mariage, de nkh) — l'interdiction porte sur la decision ferme de conclure le contrat formel. Ce n'est pas une simple pensee mais une resolution contractuelle qui est interdite.\n" +
"\n" +
"**avant que l'ecrit n'atteigne son terme** — hatta yabligha al-kitabu ajalahu : al-kitab (l'ecrit/le terme prescrit, de ktb) qui doit atteindre (yabligha, de blgh) son terme (ajal, de ajl) est le terme de l'idda. L'ecrit est soit le terme de l'idda prescrit par la loi divine, soit le document de repudiation qui court jusqu'a son echeance.\n" +
"\n" +
"**Sachez que Dieu sait ce qu'il y a dans vos ames** — wa'lamu anna Allaha ya'lamu ma fi anfusikum : la reprise de la racine elm ('ilm) — d'abord 'alima (Dieu a su), puis ya'lamu (Dieu sait, inaccompli continu) — souligne la connaissance divine permanente des intentions cachees dans les anfus (ames).\n" +
"\n" +
"**Pardonneur et Indulgent** — ghafurun halimun : la cloture par Ghafur (Couvrant-pardonnant, de ghfr) et Halim (Indulgent, de hlm) est une promesse de misericorde pour ceux qui auraient failli. Dieu sait les faiblesses humaines (pensees, intentions) et, tout en posant des limites, offre le pardon a ceux qui les respectent apres transgression.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'arradtum' par 'allusions'. La racine erd signifie exposer obliquement, suggerer a mi-mot — l'allusion voilee (ta'ridh) s'oppose a la declaration directe (tasrih). 'Allusions' est une traduction acceptable, mais 'suggestions indirectes' ou 'propos a demi-mots' rendrait mieux la subtilite de la distinction coranique entre ta'ridh et tasrih.\n" +
"\n" +
"Hamidullah traduit 'aknanntum' par 'cachez'. La racine knn signifie cacher en mettant a couvert, proteger dans un abri interieur. 'Dissimulez' ou 'gardez dans votre for interieur' rendrait mieux le sens de couverture et d'abri que contient knn, distinct de katama (cacher par suppression) ou asarra (cacher secretement).\n" +
"\n" +
"Hamidullah traduit 'sirran' par 'secretement'. Sirr designe le secret comme substance — la confidence, ce qui appartient a la sphere privee et cachee. La promesse secrete (wa'd sirri) serait une quasi-fiancaille clandestine qui lierait les parties avant la fin de l'idda. La traduction est exacte mais ne capture pas la nuance de violation de l'espace public/prive.",
    segments: [
      { fr: "Pas d'inclinaison vers la faute pour vous", pos: "nom", phon: "wa la junaha 'alaykum", arabic: "وَلَا جُنَاحَ عَلَيْكُمْ", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 1 },
      { fr: "dans ce que vous suggerez a mi-mots", pos: "verbe", phon: "fima 'arradtum bihi", arabic: "فِيمَا عَرَّضْتُم بِهِ", word_key: "erd", is_particle: false, sense_retenu: "suggestion/allusion", position: 2 },
      { fr: "de la demande en mariage des femmes", is_particle: true, phon: "min khitbati al-nisa'i", arabic: "مِنْ خِطْبَةِ ٱلنِّسَآءِ", position: 3 },
      { fr: "ou de ce que vous dissimulez en vous-memes", pos: "verbe", phon: "aw aknanntum fi anfusikum", arabic: "أَوْ أَكْنَنتُمْ فِىٓ أَنفُسِكُمْ", word_key: "knn", is_particle: false, sense_retenu: "dissimulation/protection", position: 4 },
      { fr: "Dieu sait que vous les evoquerez", pos: "verbe", phon: "'alima Allahu annakum satadh-kurunahunna", arabic: "عَلِمَ ٱللَّهُ أَنَّكُمْ سَتَذْكُرُونَهُنَّ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 5 },
      { fr: "que vous les evoquerez/mentionnerez", pos: "verbe", phon: "satadh-kurunahunna", arabic: "سَتَذْكُرُونَهُنَّ", word_key: "dhkr", is_particle: false, sense_retenu: "rappel/mention", position: 6 },
      { fr: "mais ne leur promettez pas secretement", pos: "verbe", phon: "wa lakin la tawa'aduhunna sirran", arabic: "وَلَـٰكِن لَّا تُوَاعِدُوهُنَّ سِرًّا", word_key: "wed", is_particle: false, sense_retenu: "promesse/engagement", position: 7 },
      { fr: "secretement", pos: "nom", phon: "sirran", arabic: "سِرًّا", word_key: "srr", is_particle: false, sense_retenu: "secret/confidence", position: 8 },
      { fr: "sauf a leur dire une parole convenable", pos: "verbe", phon: "illa an taqulu qawlan ma'rufan", arabic: "إِلَّآ أَن تَقُولُوا۟ قَوْلًا مَّعْرُوفًا", word_key: "qwl", is_particle: false, sense_retenu: "parole/discours", position: 9 },
      { fr: "convenable/conforme a l'usage reconnu", pos: "nom", phon: "ma'rufan", arabic: "مَّعْرُوفًا", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 10 },
      { fr: "et ne vous decidez pas a nouer le contrat du mariage", pos: "verbe", phon: "wa la ta'zimu 'uqdata al-nikahi", arabic: "وَلَا تَعْزِمُوا۟ عُقْدَةَ ٱلنِّكَاحِ", word_key: "eqd", is_particle: false, sense_retenu: "noeud/contrat", position: 11 },
      { fr: "du mariage", pos: "nom", phon: "al-nikahi", arabic: "ٱلنِّكَاحِ", word_key: "nkh", is_particle: false, sense_retenu: "mariage/union", position: 12 },
      { fr: "avant que l'ecrit n'atteigne son terme", pos: "nom", phon: "hatta yabligha al-kitabu ajalahu", arabic: "حَتَّىٰ يَبْلُغَ ٱلْكِتَـٰبُ أَجَلَهُۥ", word_key: "ktb", is_particle: false, sense_retenu: "ecrit/prescription", position: 13 },
      { fr: "son terme", pos: "nom", phon: "ajalahu", arabic: "أَجَلَهُۥ", word_key: "ajl", is_particle: false, sense_retenu: "terme/delai", position: 14 },
      { fr: "sachez que Dieu sait ce qu'il y a dans vos ames", pos: "verbe", phon: "wa'lamu anna Allaha ya'lamu ma fi anfusikum", arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ يَعْلَمُ مَا فِىٓ أَنفُسِكُمْ", word_key: "nfs", is_particle: false, sense_retenu: "ame/for interieur", position: 15 },
      { fr: "Et Dieu est Pardonneur et Indulgent", pos: "nom", phon: "wa'lamu anna Allaha ghafurun halimun", arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٌ", word_key: "ghfr", is_particle: false, sense_retenu: "pardon/couverture", position: 16 }
    ],
    vwa: [
      {
        word_key: "jnh",
        position: 2,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["penchant vers la faute", "inclination blamable", "responsabilite morale", "faute/peche"],
              proof_ctx: "La racine j-n-h (jim-nun-ha) signifie l'inclinaison laterale et le penchant vers ce qui est blamable. Le Lane's donne : s'incliner de cote, le flanc, le penchant — janaha = s'incliner, junah = l'inclinaison vers la faute, la responsabilite. La formule 'la junaha' = pas d'inclinaison vers la blamable = pas de responsabilite morale pour cet acte.",
              axe1_verset: "La junaha 'alaykum fima 'arradtum (pas d'inclinaison blamable pour vous dans ce que vous avez suggere) : la formule la junaha etablit la permission des allusions voilees pendant l'idda. L'inclinaison (junah) n'existe pas pour la ta'ridh — suggerer obliquement n'est pas un penchant blamable. Ce sens de penchant/inclinaison distingue junah de dhanb (peche comme faute commise) ou ithm (transgression).",
              axe2_voisins: "Le meme verset 234 utilisait la junaha 'alaykum pour les actes des veuves apres le terme de l'idda. Ici (235), la formule la junaha couvre les allusions pendant l'idda. La coherence est forte : dans les deux cas, la junaha marque la limite de la responsabilite communautaire — ce qui ne constitue pas une inclinaison vers la faute pour les observateurs.",
              axe3_sourate: "La formule la junaha apparait de nombreuses fois dans al-Baqarah, toujours pour marquer les actes permis sans culpabilite : 2:158 (safa et marwa), 2:198 (commerce pendant le hajj), 2:229-234 (divorce et remariage). La racine jnh calibre la frontiere entre le permis et le blamable dans les situations ambigues.",
              axe4_coherence: "La racine jnh apparait environ 15 fois dans le Coran. Le sens d'inclinaison vers la faute ou vers le blamable est constant. La formule la junaha est une formule juridique de permission : elle leve la responsabilite (junah) sur un acte qui pourrait sembler ambigu. Junah n'est pas synonyme de ithm (peche delibere) mais d'inclinaison vers ce qui pourrait etre reprehensible.",
              axe5_frequence: "L'usage de junah dans ce verset (allusions pendant l'idda) est significatif : il indique que la question de la ta'ridh etait debattue et que certains y voyaient une faute potentielle. Le Coran la leve explicitement (la junaha) tout en posant des limites claires (pas de promesse secrete, pas de contrat avant le terme). La formule la junaha est une reponse directe a une question pratique de la communaute."
            }
          }
        }
      },
      {
        word_key: "erd",
        position: 5,
        sense_chosen: "suggestion/allusion",
        analysis_axes: {
          sense_chosen: "suggestion/allusion",
          concept_chosen: "Suggestion/Allusion",
          concepts: {
            "Suggestion/Allusion": {
              status: "retenu",
              senses: ["suggerer indirectement", "exposer a mi-mot", "allusion voilee", "propos oblique", "ta'ridh"],
              proof_ctx: "La racine '-r-d ('ayn-ra-dad) signifie exposer lateralement, presenter de cote, suggerer obliquement. Le Lane's donne : 'arada = presenter, exposer, suggerer — ta'ridh = allusion oblique, suggestion indirecte (par opposition a tasrih = declaration directe). 'Arradtum bihi = vous l'avez suggere/allude indirectement. La Form II (ta'ridh) renforce l'idee d'exposition oblique.",
              axe1_verset: "Fima 'arradtum bihi min khitbati al-nisa'i (dans ce que vous avez suggere a mi-mots de la demande en mariage des femmes) : la ta'ridh ('ard) est la voie permise pour manifester son interet matrimonial a une femme en idda. La distinction avec le tasrih (declaration directe) est fondamentale dans la jurisprudence islamique : on peut dire 'tu es belle' mais pas 'je veux t'epouser'.",
              axe2_voisins: "Le verset 235 contraste la ta'ridh (permise) avec la wa'da sirriyya (promesse secrete, interdite). Les deux expriment l'interet matrimonial mais de maniere differente : l'allusion voilee (ta'ridh) laisse la femme libre d'interpreter, la promesse secrete (wa'd sirri) cree un engagement bilateral avant le terme de l'idda.",
              axe3_sourate: "La racine erd avec le sens de ta'ridh n'apparait qu'ici dans al-Baqarah. C'est un terme technique de la jurisprudence matrimoniale. En dehors de ce contexte, la racine erd signifie aussi la proposition generale (proposer, offrir) et l'exposition (montrer). La specificite du ta'ridh comme allusion voilée dans le contexte des demandes en mariage est propre a ce passage.",
              axe4_coherence: "La racine erd apparait environ 60 fois dans le Coran avec des sens varies : presenter, offrir, exposer, etc. Dans ce verset, le sens precis de ta'ridh (allusion oblique) est etabli par le contraste avec l'interdiction de la wa'da sirra (promesse secrete). La ta'ridh est la voie mediane entre le silence total et la declaration explicite.",
              axe5_frequence: "La permission de la ta'ridh a eu des implications juridiques importantes. Les juristes ont defini en detail ce qui constitue une ta'ridh permise : 'tu es une femme desirable', 'j'aimerais me marier', 'Dieu t'envoie un mari pieux' — versus les declarations directes interdites. Le verset a genere une litterature jurisprudentielle considerable sur la distinction ta'ridh/tasrih dans le contexte des demandes en mariage aux femmes en idda."
            }
          }
        }
      },
      {
        word_key: "knn",
        position: 11,
        sense_chosen: "dissimulation/protection",
        analysis_axes: {
          sense_chosen: "dissimulation/protection",
          concept_chosen: "Dissimulation/Protection",
          concepts: {
            "Dissimulation/Protection": {
              status: "retenu",
              senses: ["cacher", "couvrir", "dissimuler dans le coeur", "garder en soi", "abriter"],
              proof_ctx: "La racine k-n-n (kaf-nun-nun) signifie cacher en couvrant et abriter. Le Lane's donne : kanna = couvrir, cacher dans un abri, proteger sous un voile — akanna = it concealed, al-kinn = abri, protection. Aknanntum = vous avez cache/vous avez dissimule (accompli 2MP). Aknanntum fi anfusikum = ce que vous avez cache dans vos ames — les intentions enfouies.",
              axe1_verset: "Aw aknanntum fi anfusikum (ou ce que vous avez cache dans vos ames) : le kitmane (de knn) dans les anfus est permis. Les intentions matrimoniales que l'on garde en soi sans les exprimer ne constituent pas de faute. La dissimulation interieure (knn fi al-nafs) est distincte de l'acte externe — tant que cela reste dans le for interieur, pas de responsabilite.",
              axe2_voisins: "Le verset contraste kanna (cacher dans le for interieur, permis) avec wa'ada sirran (promettre secretement, interdit). La nuance est importante : garder une intention pour soi (knn) est interieur et passif ; promettre secretement (wa'd sirri) est exterieur et actif, engageant une autre personne dans une quasi-fiancaille irreguliere.",
              axe3_sourate: "La racine knn est rare dans al-Baqarah. Elle apparait ici pour souligner la permission de l'intention cachee. En S.27:74 et S.28:69, la meme racine designe ce que les ames dissimulent (ma tukhfi al-sudur). La coherence est celle de l'interieur/exterieur : kanna = cacher dans l'abri interieur.",
              axe4_coherence: "La racine knn apparait environ 5 fois dans le Coran. Le sens de cacher/couvrir/proteger est constant. Kanna se distingue de katama (cacher par suppression deliberee) et de asarra (garder secret). Knn implique l'idee d'un abri naturel — ce qui est enfoui dans la nafs comme dans un abri.",
              axe5_frequence: "La permission de aknanntum fi anfusikum (ce que vous cachez dans vos ames) a une dimension psychologique importante : le Coran reconnait les desirs et intentions non exprimes et ne les condamne pas en eux-memes. Ce qui compte, c'est l'acte exterieur (ta'ridh permise, wa'd sirri interdit). L'intention cachee (knn) est du domaine de la conscience personnelle, que Dieu seul connait — d'ou la clause suivante : 'Alima Allahu.'"
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 15,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir avec certitude", "connaitre", "etre informe", "'ilm = connaissance certaine"],
              proof_ctx: "La racine '-l-m ('ayn-lam-mim) signifie le savoir certain et la connaissance etablie. Le Lane's donne : 'alima = il sut, il connut — 'ilm = connaissance certaine, science. 'Alima Allahu annakum satadh-kurunahunna = Dieu sait (accompli, assertion definitive) que vous les evoquerez. Le 'ilm divin est absolu et certain — il englobe le visible et le cache.",
              axe1_verset: "Double usage de la racine elm dans ce verset : 'alima Allahu (Dieu a su/sait, accompli) puis ya'lamu (Dieu sait, inaccompli continu) ma fi anfusikum. Le premier est une assertion realiste (Dieu sait que vous penserez a ces femmes), le second est un avertissement (Dieu sait en permanence ce qui est dans vos ames). Les deux usages encadrent les regles posees par le verset.",
              axe2_voisins: "Le verset 234 se terminait par khabir (Bien Informe, de khbr) — connaissance des actes. Le verset 235 utilise 'alima/ya'lamu (de elm) — connaissance des intentions. La progression est coherente : Dieu connait les actes (khabir, 234) et les intentions (elm, 235). Les deux attributs couvrent l'integralite de la connaissance divine — actes exterieurs et intentions interieures.",
              axe3_sourate: "La racine elm est l'une des plus frequentes dans al-Baqarah et dans le Coran. Le 'ilm divin est l'attribut fondamental qui legitime les commandements : Dieu pose des regles parce qu'Il sait. Dans ce verset, la mention de 'alima Allahu (Dieu sait) justifie la permission des allusions (Il sait que vous penserez a ces femmes) et la limite posee (Il sait ce qui est dans vos ames).",
              axe4_coherence: "La racine elm apparait plus de 750 fois dans le Coran. Le sens de savoir certain est constant. 'Alima (accompli) = connaissance acquise/etablie ; ya'lamu (inaccompli) = connaissance active et continue. La distinction entre les deux formes dans ce meme verset est significative : le premier registre une realite humaine (vous penserez a elles), le second etablit une surveillance permanente (Il sait ce qui est dans vos ames).",
              axe5_frequence: "La formule 'alima Allahu (Dieu sait) dans ce verset a une fonction de justification pragmatique : le Coran reconnait la realite psychologique (les hommes penseront aux femmes en idda) et legalise la voie la moins intrusive (ta'ridh). Ce realisme divin, exprime par 'alima, distingue la legislation coranique d'une approche purement idealiste."
            }
          }
        }
      },
      {
        word_key: "dhkr",
        position: 18,
        sense_chosen: "rappel/mention",
        analysis_axes: {
          sense_chosen: "rappel/mention",
          concept_chosen: "Rappel/Mention",
          concepts: {
            "Rappel/Mention": {
              status: "retenu",
              senses: ["mentionner", "rappeler", "evoquer", "avoir a l'esprit", "dhikr = rappel"],
              proof_ctx: "La racine dh-k-r (dhal-kaf-ra) signifie le rappel et la mention. Le Lane's donne : dhakara = rappeler, mentionner, evoquer — dhikr = le rappel, la mention, le souvenir. Satadh-kurunahunna = vous les evoquerez/vous les mentionnerez (inaccompli futur 2MP avec suffixe feminin pluriel -hunna). La Form I (dhakara) couvre l'idee de ramener a l'esprit ce qui etait present.",
              axe1_verset: "Annakum satadh-kurunahunna (que vous les evoquerez/mentionnerez) : le dhikr ici est l'evocation mentale et verbale des femmes en idda. Dieu sait que les hommes penseront a ces femmes (les evoqueront dans leurs pensees et conversations). Ce dhikr naturel justifie la permission de la ta'ridh — interdire toute allusion serait nier une realite humaine que Dieu reconnait.",
              axe2_voisins: "La racine dhkr dans al-Baqarah a deux registres principaux : le dhikr de Dieu (rappel/commemoration divine, 2:152, 200, 203) et le dhikr ordinaire (mention/rappel de personnes ou choses). Ici, satadh-kurunahunna appartient au second registre — l'evocation naturelle de personnes. Le contraste est instructif : le dhikr de Dieu est un devoir, le dhikr des femmes en idda est une realite humaine que Dieu reconnait et encadre.",
              axe3_sourate: "La racine dhkr est tres frequente dans al-Baqarah. Dans le contexte matrimonial de ce verset, satadh-kurunahunna est la seule occurrence du dhikr humain ordinaire. L'usage de la racine dhkr (plutot que, par exemple, tafakkaru = vous pensiez) est significatif : evoquer (dhkr) implique un mouvement vers la parole et l'acte, pas seulement la pensee.",
              axe4_coherence: "La racine dhkr apparait plus de 280 fois dans le Coran. Le sens de rappel/mention est constant. Le dhikr est le mouvement de la memoire vers l'expression — rappeler quelque chose ou quelqu'un pour le mentionner, en parler, y penser de maniere active. Satadh-kurunahunna dit que les hommes ne pourront s'empecher d'evoquer ces femmes — pensee, parole, intention.",
              axe5_frequence: "L'usage du futur certain (satadh-kurunahunna avec le sin du futur proche) est un aveu divin de la nature humaine : il ne s'agit pas d'une possibilite mais d'une certitude. Dieu affirme que les hommes evoqueront ces femmes — c'est une realite anthropologique reconnue, qui fonde la permission de la ta'ridh. Cette approche realiste du comportement humain est caracteristique de la methode legislative coranique."
            }
          }
        }
      },
      {
        word_key: "wed",
        position: 21,
        sense_chosen: "promesse/engagement",
        analysis_axes: {
          sense_chosen: "promesse/engagement",
          concept_chosen: "Promesse/Engagement",
          concepts: {
            "Promesse/Engagement": {
              status: "retenu",
              senses: ["promettre", "s'engager mutuellement", "convention", "wa'ada = il promit", "tawa'ada = promesse bilaterale"],
              proof_ctx: "La racine w-'-d (waw-'ayn-dal) signifie la promesse et l'engagement. Le Lane's donne : wa'ada = il promit, wa'd = la promesse, tawa'ada (Form VI) = ils se promirent mutuellement, convention bilaterale. Tawa'aduhunna = vous leur promettez (Form VI 2MP + suffixe feminin). La Form VI souligne la reciprocite — une promesse qui engage les deux parties.",
              axe1_verset: "Wa lakin la tawa'aduhunna sirran (mais ne leur promettez pas secretement) : l'interdiction porte sur la tawa'ada (promesse mutuelle/reciproque) sirran (secretement). La Form VI (tawa'ada = se promettre l'un a l'autre) implique un engagement bilateral — une quasi-fiancaille. Faire cela sirran (en secret) pendant l'idda revient a conclure un engagement formel avant le terme.",
              axe2_voisins: "La ta'ridh (suggestion oblique) est permise, mais la tawa'ada (promesse mutuelle) est interdite. La distinction est celle de l'engagement : la ta'ridh ne cree pas d'obligation, la promesse mutuelle (tawa'ada) cree un lien quasi-contractuel. Le verset protege les femmes en idda de pressions et d'engagements qui anticiperaient irregulierement le contrat de mariage.",
              axe3_sourate: "La racine wed apparait en al-Baqarah pour les promesses divines et humaines. L'utilisation de la Form VI (tawa'ada) dans ce verset est unique : c'est la seule occurrence de la promesse bilaterale (mutuelle) dans al-Baqarah. Le contraste avec wa'd Allah (promesse divine, unilaterale) est instructif : la tawa'ada est une convention entre egaux.",
              axe4_coherence: "La racine wed apparait environ 130 fois dans le Coran. Le sens de promesse/engagement est constant. La Form VI (tawa'ada) est rare et souligne la reciprocite. L'interdiction de la tawa'ada sirran protege le processus juridique de l'idda : une quasi-fiancaille secrete pendant ce temps violerait les droits des parties et la logique du terme prescrit.",
              axe5_frequence: "La prohibition de la tawa'ada sirran a eu des implications jurisprudentielles importantes. Les juristes ont debattu de ce qui constitue une promesse (wa'd) : un engagement verbal suffit-il ? Un document ecrit ? La reciprocite est-elle necessaire ? Le verset a genere une doctrine de la distinction entre la simple manifestation d'interet (permise, ta'ridh) et l'engagement bilateral anticipe (interdit, tawa'ada sirran)."
            }
          }
        }
      },
      {
        word_key: "srr",
        position: 22,
        sense_chosen: "secret/confidence",
        analysis_axes: {
          sense_chosen: "secret/confidence",
          concept_chosen: "Secret/Confidence",
          concepts: {
            "Secret/Confidence": {
              status: "retenu",
              senses: ["secret", "ce qui est cache", "confidence", "sirran = secretement", "dans le secret"],
              proof_ctx: "La racine s-r-r (sin-ra-ra) signifie le secret et ce qui est dissimule de la vue publique. Le Lane's donne : sirr = secret, confidence, chose cachee — sirran = secretement, en cachette. Al-sirr est ce qui appartient a la sphere privee et cachee, par opposition a al-'alaniyya (le public). Sirran ici est adverbe de maniere : la promesse faite secretement, en dehors du regard communautaire.",
              axe1_verset: "La tawa'ada sirran (promesse secrete bilaterale) est interdite. Le sirr comme mode d'action clandestine viole la logique de l'idda : l'idda est une periode de transition publiquement reconnue. Une promesse secrete (sirran) qui contourne cette reconnaissance publique anticipe irregulierement le contrat de mariage et peut creer des pressions sur la femme en idda.",
              axe2_voisins: "Le verset contraste sirran (secretement, interdit) avec qawlan ma'rufan (parole convenable, permise). Le ma'ruf (reconnu socialement) est l'antonyme du sirr (cache, prive) dans ce contexte : la parole convenable est celle qui s'inscrit dans l'espace reconnu du ma'ruf, pas dans le secret bilateral. Le contraste sirr/ma'ruf structure l'opposition des deux modes de communication.",
              axe3_sourate: "La racine srr apparait en al-Baqarah dans plusieurs contextes : ce qui est cache dans les coeurs (2:33, al-asrar), les reunions secretes (al-najwa). L'usage de sirran comme adverbe dans ce verset est specifique : il qualifie le mode interdit de la promesse. Le sirr n'est pas condamne en soi (knn/aknanntum, ce que vous cachez, est permis) mais comme mode d'engagement pre-contractuel.",
              axe4_coherence: "La racine srr apparait environ 45 fois dans le Coran. Le sens de secret/cache est constant. Dans le contexte matrimonial, sirran designe le mode clandestin d'un engagement qui devrait etre public (le mariage est un acte public, pas prive). L'interdiction de la tawa'ada sirran protege la transparence du processus matrimonial.",
              axe5_frequence: "L'opposition entre sirran (secret, interdit) et ma'ruf (reconnu, permis) dans ce verset reflete une conception du mariage comme acte social public. Le contrat de nikah (mariage) necessite publicite et temoins dans la jurisprudence islamique — l'interdiction de la promesse secrete anticipe cette exigence de publicite. Le verset dit en substance : manifestez votre interet de maniere socialement reconnue (ma'ruf), pas dans le secret bilateral (sirran)."
            }
          }
        }
      },
      {
        word_key: "qwl",
        position: 26,
        sense_chosen: "parole/discours",
        analysis_axes: {
          sense_chosen: "parole/discours",
          concept_chosen: "Parole/Discours",
          concepts: {
            "Parole/Discours": {
              status: "retenu",
              senses: ["parole", "discours", "ce qui est dit", "qawlan = une parole", "expression verbale"],
              proof_ctx: "La racine q-w-l (qaf-waw-lam) signifie la parole et le discours. Le Lane's donne : qala = il dit, qawl = la parole, le discours, ce qui est exprime verbalement. Qawlan ma'rufan = une parole convenable (accusatif indefini). Le qawl est la parole comme acte — l'expression verbale dans sa dimension communicative et sociale.",
              axe1_verset: "Illa an taqulu qawlan ma'rufan (sauf a dire une parole convenable) : l'exception (illa = sauf) a l'interdiction de la promesse secrete est la parole convenable (qawlan ma'rufan). Cette parole est l'expression permise : elle n'engage pas comme une promesse bilaterale mais communique l'interet de maniere socialement reconnue. Le qawl ma'ruf est la forme juste de la ta'ridh verbale.",
              axe2_voisins: "Le verset 232 utilisait ma'ruf pour les actes des femmes apres l'idda. Le verset 233 utilisait ma'ruf pour les obligations des peres. Le verset 234 utilisait ma'ruf pour les actes des veuves. Dans ce verset 235, qawlan ma'rufan est la parole encadree par le ma'ruf — la parole convenable comme exception a l'interdiction. Le ma'ruf est le standard de conformite sociale qui court tout au long de la section matrimoniale.",
              axe3_sourate: "La racine qwl est l'une des plus frequentes dans al-Baqarah. Dans la section matrimoniale, le qawl (parole) est encadre par le ma'ruf : qawlan ma'rufan (235), qawr bi al-ma'ruf (plusieurs occurrences). La parole dans la sphere matrimoniale est toujours calibree par le ma'ruf — elle doit etre socialement reconnue et bienveillante.",
              axe4_coherence: "La racine qwl apparait plus de 1700 fois dans le Coran. Le sens de parole/discours est constant. Dans ce verset, qawlan ma'rufan est la parole qui n'engage pas illegitimement — elle exprime sans promettre, communique sans contracter. La distinction entre dire (qwl) et promettre (wed) est juridiquement essentielle.",
              axe5_frequence: "La formule qawlan ma'rufan (parole convenable) dans le contexte de la demande en mariage pendant l'idda a genere une jurisprudence detaillee sur les formules permises. Les juristes ont debattu de ce qui constitue un qawl ma'ruf en ce contexte : complimenter la femme ? Exprimer un desir general de mariage ? Mentionner sa propre situation matrimoniale ? La frontiere entre le qawl ma'ruf (permis) et la wa'da sirra (interdite) est la ligne directrice de cette jurisprudence."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 27,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est reconnu convenable", "bienseance sociale", "usage etabli", "bienfait reconnu", "ma'ruf"],
              proof_ctx: "La racine '-r-f ('ayn-ra-fa) signifie la connaissance et ce qui est socialement reconnu. Le Lane's donne : 'arafa = reconnaitre, connaitre — ma'ruf = ce qui est connu/reconnu comme bien, l'usage etabli, la bienveillance sociale. Ma'rufan = convenable (accusatif indefini). Le ma'ruf est le standard social de ce qui est reconnu comme bienveillant et acceptable dans la communaute.",
              axe1_verset: "Qawlan ma'rufan (une parole convenable) : le ma'ruf qualifie la parole (qawl) permise pendant l'idda. La parole doit etre ma'rufa = reconnue comme convenable dans le contexte social. Ce n'est pas l'expression de n'importe quel interet mais d'un interet exprime de maniere socialement admise et bienveillante.",
              axe2_voisins: "La racine erf (ma'ruf) court tout au long de la section matrimoniale de al-Baqarah : v.228 (bi al-ma'rufi), v.229 (bi al-ma'rufi), v.231 (bi al-ma'rufi), v.232 (bi al-ma'rufi), v.233 (bi al-ma'rufi), v.234 (bi al-ma'rufi), v.235 (ma'rufan), v.236 (bi al-ma'rufi). Le ma'ruf est le standard normatif omnipresent de la section : les actes et paroles dans la sphere matrimoniale sont juges a l'aune du ma'ruf.",
              axe3_sourate: "La racine erf est l'une des racines les plus importantes de la section matrimoniale. Le ma'ruf est le standard de la bienveillance sociale reconnue — il s'oppose a l'injustice (zulm), au secret bilateral (sirr) et a l'exces. Le ma'ruf comme critere normatif dans les relations matrimoniales est une constante de l'ethique coranique.",
              axe4_coherence: "La racine erf apparait environ 90 fois dans le Coran. Le sens de ce qui est reconnu/connu comme bien est constant. Le ma'ruf est toujours un standard social et communautaire — ce qui est reconnu comme bienveillant et acceptable dans la communaute croyante. L'antonyme du ma'ruf est le munkar (ce qui est reenie/rejete comme mauvais).",
              axe5_frequence: "La recurrence du ma'ruf dans la section matrimoniale de al-Baqarah etablit que les relations entre hommes et femmes dans la sphere du mariage et du divorce sont regulees par un standard de bienveillance sociale (ma'ruf). Ce standard n'est pas rigide mais contextuel — ce que la communaute reconnait comme convenable dans chaque situation. Le qawlan ma'rufan de ce verset est la parole qui rentre dans ce standard de bienveillance reconnue."
            }
          }
        }
      },
      {
        word_key: "eqd",
        position: 30,
        sense_chosen: "noeud/contrat",
        analysis_axes: {
          sense_chosen: "noeud/contrat",
          concept_chosen: "Noeud/Contrat",
          concepts: {
            "Noeud/Contrat": {
              status: "retenu",
              senses: ["nouer", "attacher", "'aqd = le noeud/contrat", "'uqdat al-nikah = le noeud du mariage", "lien contractuel"],
              proof_ctx: "La racine '-q-d ('ayn-qaf-dal) signifie le noeud et le lien contractuel. Le Lane's donne : 'aqada = nouer, attacher, conclure — 'aqd = le noeud, le contrat, le lien. 'Uqdat al-nikahi = le noeud du mariage — la metaphore du noeud exprime la solidite du lien contractuel du mariage. La'ta'zimu = ne pas vous resoudre a (interdiction de la decision ferme).",
              axe1_verset: "Wa la ta'zimu 'uqdata al-nikahi (ne vous decidez pas a nouer le contrat du mariage) : la prohibition porte sur la 'azima (resolution ferme/decision, de 'azm) de conclure l''uqda (le noeud/contrat) du nikah. Ce n'est pas seulement la conclusion du contrat qui est interdite mais la decision ferme de le conclure — l'intention contractuelle arrêtee.",
              axe2_voisins: "La 'uqdat al-nikah (le noeud du mariage) est en tension avec le terme de l'idda ('l'ecrit atteigne son terme', v.235). Le noeud (eqd) du mariage ne peut etre noue avant la fin du terme (ajal al-kitab). Cette interdiction protege la logique de l'idda : l'ecrit (al-kitab) doit courir son terme avant qu'un nouveau noeud (eqd) ne soit noue.",
              axe3_sourate: "La racine eqd dans al-Baqarah designe les contrats et les noeuds : 2:235 ('uqdat al-nikah), 2:237 ('uqdat al-nikah encore). En dehors du contexte matrimonial, la racine eqd designe aussi les serments solennels et les alliances. Le noeud (eqd) est la metaphore centrale du lien contractuel — nouer un contrat, c'est creer un lien.",
              axe4_coherence: "La racine eqd apparait environ 25 fois dans le Coran. Le sens de noeud/lien/contrat est constant. La 'uqda est le lien qui attache — le contrat de mariage ('uqdat al-nikah) est le lien qui unit les epoux. La prohibition de 'ta'zimu 'uqdat al-nikah' dit : ne nouez pas ce lien avant le terme de l'idda.",
              axe5_frequence: "L'expression 'uqdat al-nikah (le noeud du mariage) est une metaphore juridique puissante. Elle decrit le mariage comme un lien noue — un attachement mutuel cree par le contrat. La prohibition de nouer ce lien avant le terme de l'idda (la'ta'zimu) protege le processus de transition : la femme ne peut etre 'nouee' a un nouveau mari avant d'avoir complete son delai d'attente. Le noeud (eqd) comme metaphore du mariage est coherent avec la conception islamique du mariage comme contrat."
            }
          }
        }
      },
      {
        word_key: "nkh",
        position: 31,
        sense_chosen: "mariage/union",
        analysis_axes: {
          sense_chosen: "mariage/union",
          concept_chosen: "Mariage/Union",
          concepts: {
            "Mariage/Union": {
              status: "retenu",
              senses: ["mariage", "union conjugale formelle", "contrat de mariage", "nikah = le mariage"],
              proof_ctx: "La racine n-k-h (nun-kaf-ha) signifie le mariage et l'union conjugale formelle. Le Lane's donne : nakaha = il epousa, se maria — nikah = le mariage, le contrat de mariage. Al-nikahu est le mariage comme institution contractuelle et comme relation conjugale. La racine est a la fois le contrat (aqd al-nikah) et la relation (laqad al-nikah).",
              axe1_verset: "'Uqdata al-nikahi (le noeud du mariage) : le nikah est l'institution matrimoniale que le verset interdit de conclure ('ta'zimu 'uqdata al-nikahi') avant le terme de l'idda. La combinaison 'uqda (noeud/contrat) + nikah (mariage) est la formule juridique complete du mariage contractuel.",
              axe2_voisins: "La racine nkh court tout au long de la section matrimoniale de al-Baqarah. Dans ce verset, al-nikah est ce qui ne peut etre conclu avant le terme de l'idda. En v.230, la prohibition du remariage avec le meme epoux sans intermediaire utilisait la meme racine. En v.221, la prohibition du mariage avec les polythéistes. Le nikah est l'institution centrale de la section.",
              axe3_sourate: "La racine nkh est la plus importante de la section matrimoniale de al-Baqarah. Le nikah est le mariage formal — l'union reconnue et valide. Toutes les regles sur l'idda, le divorce, la dot visent a proteger le nikah comme institution : ses conditions, ses effets, sa dissolution, et les transitions vers un nouveau nikah.",
              axe4_coherence: "La racine nkh apparait environ 20 fois dans le Coran. Le sens de mariage/union conjugale est constant. Le nikah est le mariage formel reconnu par la communaute et la loi divine — l'union legitime. L'interdiction de conclure le nikah avant le terme de l'idda protege la legitimite du processus : un nikah conclu dans ces conditions serait invalide.",
              axe5_frequence: "La prohibition de la 'uqdat al-nikah avant le terme de l'idda a des implications pratiques importantes. Les juristes ont debattu de ce qui constitue la 'azima (resolution ferme) interdite : une simple intention ? Un accord oral ? Un contrat redige ? La jurisprudence s'est convergee sur l'interdiction du contrat formel mais a discute du statut de la promesse. Le verset distingue clairement la parole convenable (permise, qawlan ma'rufan) de la resolution contractuelle (interdite, la ta'zimu 'uqdata al-nikah)."
            }
          }
        }
      },
      {
        word_key: "ktb",
        position: 34,
        sense_chosen: "ecrit/prescription",
        analysis_axes: {
          sense_chosen: "ecrit/prescription",
          concept_chosen: "Ecrit/Prescription",
          concepts: {
            "Ecrit/Prescription": {
              status: "retenu",
              senses: ["l'ecrit", "le terme prescrit", "la prescription", "al-kitab = l'ecrit/le terme fixe"],
              proof_ctx: "La racine k-t-b (kaf-ta-ba) signifie l'ecriture et la prescription. Le Lane's donne : kataba = ecrire, prescrire — kitab = l'ecrit, le livre, la prescription. Al-kitabu dans ce verset designe le terme de l'idda tel qu'il est ecrit/prescrit — soit le document de repudiation qui court jusqu'a expiration, soit le terme prescrit par la loi divine. Hatta yabligha al-kitabu ajalahu = jusqu'a ce que l'ecrit atteigne son terme.",
              axe1_verset: "Hatta yabligha al-kitabu ajalahu (jusqu'a ce que l'ecrit atteigne son terme) : al-kitab ici est le terme de l'idda comme prescription ecrite. Plusieurs interpretations coexistent : le document de repudiation (talaq), la prescription divine de l'idda, ou le terme generalement fixe. L'essentiel est que ce terme doit etre atteint (yabligha, de blgh) avant qu'un nouveau contrat de mariage soit conclu.",
              axe2_voisins: "Dans al-Baqarah, al-kitab designe principalement le Livre sacre (al-Quran ou les Ecritures). Dans ce verset, al-kitab designe le terme prescrit de l'idda — un sens contextuel specifique. La coherence avec le sens general de kitab (prescription ecrite) est maintenue : le terme de l'idda est une prescription divine ecrite.",
              axe3_sourate: "La racine ktb dans al-Baqarah a deux registres : le Livre (al-Kitab comme Ecriture sacree) et l'ecrit/prescription dans les affaires humaines (kitabat le credit, v.282 ; al-kitab ici le terme de l'idda). L'usage dans ce verset est dans le registre de l'ecrit comme acte prescrit — le terme fixe de l'idda comme quelque chose de determine et d'inscrit.",
              axe4_coherence: "La racine ktb apparait environ 300 fois dans le Coran. Le sens d'ecriture/prescription est constant. Dans les contextes juridiques et matrimoniaux, al-kitab designe les prescriptions et les documents qui fixent des droits et des obligations. Al-kitab comme terme de l'idda est une prescription qui doit etre respectee avant tout nouveau contrat.",
              axe5_frequence: "L'expression 'hatta yabligha al-kitabu ajalahu' (jusqu'a ce que l'ecrit atteigne son terme) a suscite des discussions jurisprudentielles sur la nature de cet 'ecrit' : est-ce le document de talaq ? La prescription divine de l'idda ? Le terme fixe par Dieu ? La majorite des commentateurs interpretent al-kitab comme le terme prescrit de l'idda — la periode d'attente fixee qui doit courir jusqu'a son terme avant qu'un nouveau mariage soit conclu."
            }
          }
        }
      },
      {
        word_key: "ajl",
        position: 35,
        sense_chosen: "terme/delai",
        analysis_axes: {
          sense_chosen: "terme/delai",
          concept_chosen: "Terme/Delai",
          concepts: {
            "Terme/Delai": {
              status: "retenu",
              senses: ["terme fixe", "limite temporelle", "echeance", "ajalahu = son terme propre"],
              proof_ctx: "La racine a-j-l (alif-jim-lam) signifie le terme fixe et l'echeance. Le Lane's donne : ajal = terme fixe, delai determine, echeance — ajalahu = son terme (suffixe masculin singulier, referant a al-kitab). L'ajal est le point limite fixe — la limite temporelle au-dela de laquelle un etat change. L'ajal de l'idda est le terme prescrit a l'expiration duquel la femme est libre.",
              axe1_verset: "Hatta yabligha al-kitabu ajalahu (jusqu'a ce que l'ecrit atteigne son terme) : l'ajal est le terme du kitab — le terme fixe que le document/la prescription doit atteindre. Ajalahu (son terme, avec -hu referant a al-kitab) : c'est le terme propre du kitab, sa limite naturelle d'expiration. Tant que ce terme n'est pas atteint, le nouveau mariage ne peut etre conclu.",
              axe2_voisins: "Le meme syntagme 'balaghna ajalahunna' (elles ont atteint leur terme) etait utilise en v.232 et v.234 pour la fin de l'idda des divorcees et des veuves. En v.235, 'yabligha al-kitabu ajalahu' (le kitab atteint son terme) utilise la meme combinaison blgh + ajal mais avec al-kitab comme sujet. La coherence est forte : l'ajal est le terme que chaque prescription doit atteindre.",
              axe3_sourate: "La racine ajl dans al-Baqarah designe les termes fixes dans plusieurs contextes : terme de l'idda (232, 234, 235), terme des dettes (282, al-ajal al-musamma = le terme nomme). L'ajal est un element structurant du droit coranique — chaque obligation ou etat a un ajal qui en fixe la limite.",
              axe4_coherence: "La racine ajl apparait environ 55 fois dans le Coran. Le sens de terme fixe est constant. L'ajal est toujours un seuil temporel determine — par Dieu pour les etres vivants (ajal al-mawt), par la loi pour les obligations (ajal al-idda, ajal al-dayn). L'atteinte de l'ajal (bulugh al-ajal) est le point de changement d'etat.",
              axe5_frequence: "La formule 'hatta yabligha al-kitabu ajalahu' structure juridiquement l'interdiction du contrat de mariage avant la fin de l'idda. L'ajal est le terme fixe par Dieu — il ne peut etre raccourci par un accord bilateral. Cette formule etablit l'anteriorite de l'ajal (terme divin) sur la volonte des parties : on ne peut conclure le nikah avant que l'ajal soit atteint, quelle que soit la volonte des parties."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 43,
        sense_chosen: "ame/for interieur",
        analysis_axes: {
          sense_chosen: "ame/for interieur",
          concept_chosen: "Ame/For interieur",
          concepts: {
            "Ame/For interieur": {
              status: "retenu",
              senses: ["ame", "soi", "for interieur", "anfusikum = vos ames", "conscience personnelle"],
              proof_ctx: "La racine n-f-s (nun-fa-sin) signifie l'ame et la personne individuee. Le Lane's donne : nafs = ame, souffle vital, soi, personne, identite propre — anfusikum = vos ames/vous-memes (pluriel avec suffixe 2MP). Fi anfusikum = dans vos ames/dans vos for interieurs. Cette occurrence (ya'lamu ma fi anfusikum) designe le domaine intime ou Dieu a acces.",
              axe1_verset: "Ya'lamu ma fi anfusikum (Il sait ce qu'il y a dans vos ames) : les anfus sont le lieu de la conscience interieure — les intentions, les desirs, les plans caches. Ce que Dieu connait dans les anfus inclut les intentions matrimoniales (qu'on ait exprime par ta'ridh ou cache par knn). L'avertissement ('fa-hdhiruh = prenez-y garde') souligne que la connaissance divine de l'interieur est une raison de vigilance morale.",
              axe2_voisins: "Le debut du verset mentionnait aknanntum fi anfusikum (ce que vous avez cache dans vos ames) — les intentions dissimulees, permises. La fin du verset reprend anfusikum dans ya'lamu ma fi anfusikum — Dieu connait ces memes intentions cachees. La coherence est circulaire : vous cachez dans vos ames (akkanntum fi anfusikum, permis) et Dieu sait ce qui est dans vos ames (ya'lamu ma fi anfusikum, avertissement).",
              axe3_sourate: "La racine nfs est l'une des plus frequentes dans al-Baqarah. Dans la section matrimoniale, les anfus sont le lieu de l'intention et de la responsabilite personnelle : bi anfusihinna (v.234 = par elles-memes), fi anfusihinna (v.234 = dans elles-memes), fi anfusikum (v.235, ici = dans vos ames). La nafs est le sujet moral fondamental.",
              axe4_coherence: "La racine nfs apparait plus de 280 fois dans le Coran. La nafs est le sujet moral par excellence — le lieu de l'intention, de la responsabilite, et de la rencontre avec Dieu. Anfusikum (vos ames) dans 'ya'lamu ma fi anfusikum' designe l'interieur inaccessible aux autres humains mais transparent a Dieu. L'avertissement qui suit (fa-hdhiruh = prenez-y garde) est l'injonction morale fondee sur cette connaissance divine.",
              axe5_frequence: "La formule 'ya'lamu ma fi anfusikum fa-hdhiruh' (Il sait ce qui est dans vos ames, prenez-y garde) est une injonction morale a la vigilance interieure. Elle etablit que la conscience (nafs) est sous regard divin permanent. Dans le contexte des regles sur les allusions et les promesses, cela signifie : meme si votre ta'ridh est formellement correcte, vos intentions interieures (fi al-nafs) sont connues de Dieu. La conformite externe ne suffit pas — l'intention doit etre sincere."
            }
          }
        }
      },
      {
        word_key: "ghfr",
        position: 46,
        sense_chosen: "pardon/couverture",
        analysis_axes: {
          sense_chosen: "pardon/couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["couvrir les fautes", "pardonner", "Ghafur = Qui couvre/pardonne", "ghufran = le pardon comme couverture"],
              proof_ctx: "La racine gh-f-r (ghayn-fa-ra) signifie couvrir et pardonner. Le Lane's donne : ghafara = il couvrit, il pardonna — ghafur = Tres-pardonnant (forme intensif), Celui qui couvre les fautes de maniererepetee. Al-ghufran est le pardon comme acte de couverture — Dieu recouvre les fautes pour ne pas les exposer. Ghafurun est un attribut divin intensif (sighta mubalaghah).",
              axe1_verset: "Ghafurun halimun (Pardonneur et Indulgent) : la cloture du verset par ces deux attributs divins est une promesse de misericorde. Apres les regles strictes (interdiction de la promesse secrete, du contrat avant le terme), Dieu rappelle Sa nature pardonnante (ghfr). Ceux qui auraient transgresse les limites peuvent esperer le pardon — Dieu couvre les fautes de ceux qui se repentent.",
              axe2_voisins: "Le verset 234 se terminait par khabir (Bien Informe). Le verset 235 se termine par ghafurun halimun. La progression est significative : Dieu est informe de tout (234, khabir) et cependant Il pardonne et est indulgent (235, ghafur halim). La connaissance divine ne conduit pas necessairement a la punition — elle est combinee avec la misericorde.",
              axe3_sourate: "La racine ghfr est tres frequente dans al-Baqarah, souvent en paire avec rahim (misericordieux) ou halim (indulgent). Dans la section matrimoniale, ghafur apparait apres des regles delicates : le pardon est la ressource des etres imparfaits qui navigent des situations complexes. Dieu est Ghafur (Couvrant-pardonnant) face aux faiblesses humaines.",
              axe4_coherence: "La racine ghfr apparait environ 230 fois dans le Coran. Le sens de couverture/pardon est constant. Al-Ghafur est l'un des noms divins les plus frequents — Celui qui couvre les fautes de maniere repeteee et intensive. La couverture (ghfr) est une metaphore de la protection : Dieu cache les fautes au lieu de les exposer.",
              axe5_frequence: "La combinaison ghafurun halimun (Pardonneur et Indulgent) est une cloture frequente dans les versets qui etablissent des regles strictes. Elle dit en substance : voici les limites, mais si vous faillissez, Dieu ne punit pas precipitamment (halim) et couvre les fautes (ghfr). Cette combinaison est une invitation a la fois a l'observance des regles et a l'espoir en la misericorde divine."
            }
          }
        }
      },
      {
        word_key: "hlm",
        position: 47,
        sense_chosen: "patience/indulgence",
        analysis_axes: {
          sense_chosen: "patience/indulgence",
          concept_chosen: "Patience/Indulgence",
          concepts: {
            "Patience/Indulgence": {
              status: "retenu",
              senses: ["patience face aux fautes", "indulgence", "retenue", "Halim = l'Indulgent/Patient", "ne pas se hater de punir"],
              proof_ctx: "La racine h-l-m (ha-lam-mim) signifie la patience, l'indulgence et la retenue. Le Lane's donne : haluma = etre doux, clement, patient — halim = indulgent, clement, qui ne se hate pas de punir malgre sa capacite a le faire. Al-Halim est Celui qui ne se precipite pas dans la punition — Il laisse du temps pour le repentir. Halimun est un attribut divin intensif.",
              axe1_verset: "Ghafurun halimun (Pardonneur et Indulgent) : la paire ghfr + hlm exprime deux dimensions de la misericorde divine. Ghfr couvre les fautes (pardon actif). Hlm retient la punition (patience/indulgence). Apres les regles strictes du verset, ces deux attributs promettent que Dieu ne se hate pas de punir (halim) et couvre les fautes de ceux qui s'en repentent (ghfr).",
              axe2_voisins: "La paire ghafurun halimun est distincte de la paire ghafurun rahimun (Pardonneur et Misericordieux). Halim implique la retenue face a la transgression — Dieu connait la transgression (elm) mais ne punit pas immediatement. Dans le contexte de ce verset, ou des regles de conduite delicates sont posees, halim signifie que Dieu est patient avec ceux qui navigent ces situations complexes.",
              axe3_sourate: "La paire ghafurun halimun apparait en al-Baqarah v.225 et v.235. Dans les deux cas, elle cloture des regles sur des actes de parole potentiellement transgressifs (serments, promesses). La coherence est forte : ghafurun halimun couvre les situations ou la parole peut etre mal utilisee — Dieu est a la fois Pardonneur (ghfr) et Indulgent/Patient (hlm).",
              axe4_coherence: "La racine hlm apparait environ 15 fois dans le Coran. Le sens d'indulgence/patience est constant. Al-Halim est Celui qui possede la puissance de punir mais choisit de retenir cette puissance — c'est une forme de force, pas de faiblesse. L'indulgence divine (hilm) est une qualite active : Dieu retient Sa punition pour permettre le repentir.",
              axe5_frequence: "Al-Halim comme attribut divin contraste avec la connaissance (elm) mentionnee dans le meme verset : Dieu sait ce qui est dans les ames (elm) et pourtant Il est Indulgent (hlm). Cette tension entre connaissance et indulgence est au coeur de la theologie de la misericorde divine dans le Coran. Connaissant les faiblesses et les transgression internes, Dieu choisit l'indulgence (hilm) — Il ne punit pas precipitamment mais attend le retour du croyant."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[235];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab, full_translation: data.full_translation,
    translation_explanation: data.translation_explanation, segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V235)');
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id, word_key: word.word_key,
      position: word.position, sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) {
      if (vwaErr.code === '23505') console.log('  VWA already exists (skip): ' + word.word_key + ' pos=' + word.position);
      else console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    } else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('V235 TERMINE');
}
main().catch(console.error);
