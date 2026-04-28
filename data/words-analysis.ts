export interface WordMeaning {
  s: string
  st: 'ok' | 'maybe' | 'no'
  ref: string
  phon: string
  tr: string
  ctx: string
}
export interface WordOccurrence {
  before: { ref: string; ar: string; phon: string; tr: string }
  main:   { ref: string; ar: string; phon: string; tr: string }
  after:  { ref: string; ar: string; phon: string; tr: string }
}
export interface WordAnalysis {
  ar: string
  phon: string
  root_ar: string
  root_phon: string
  root_meaning: string
  retenu: string
  retenu_display: string
  total_occs: number
  meanings: WordMeaning[]
  occs: WordOccurrence[]
  daily: { ar: string; phon: string; fr: string }[]
  coh: string
}
export const WORDS: Record<string, WordAnalysis> = {
  kitab: {
    ar: "كِتَاب",
    phon: "kitāb",
    root_ar: "ك ت ب",
    root_phon: "k-t-b",
    root_meaning: "Agir d'instituer, poser par écrit, fixer durablement",
    retenu: "prescription établie",
    retenu_display: "prescription établie (kitāb)",
    total_occs: 230,
    meanings: [
      { s: "prescription établie, ordonnance", st: "ok",
        ref: "2:183", phon: "kutiba alaykumu s-siyam",
        tr: "Il vous a été prescrit le jeûne",
        ctx: "k-t-b au passif = prescrit sur vous — acte d'instituer une obligation" },
      { s: "registre fixé, texte arrêté", st: "ok",
        ref: "6:38", phon: "ma farratna fi l-kitabi min shay",
        tr: "Nous n'avons rien négligé dans ce registre",
        ctx: "Le kitāb comme registre exhaustif et fixé" },
      { s: "décret, destin préinscrit", st: "ok",
        ref: "57:22", phon: "illa fi kitabin min qabli an nabra-aha",
        tr: "Sans qu'il soit dans un registre avant que Nous le créions",
        ctx: "Le kitāb comme registre préexistant à la création" },
      { s: "correspondance, lettre officielle", st: "maybe",
        ref: "27:28", phon: "idhhab bi-kitabi hadha fa-alqihi ilayhim",
        tr: "Va avec cette lettre mienne et jette-la vers eux",
        ctx: "Salomon envoie un kitāb (lettre officielle) à la reine de Saba" },
      { s: "contrat, acte juridique", st: "maybe",
        ref: "2:282", phon: "idha tadayantum bi-daynin fa-ktubuhu",
        tr: "Quand vous contractez une dette à terme, consignez-la",
        ctx: "La racine k-t-b utilisée pour les actes contractuels" },
      { s: "écrit, trace graphique", st: "no",
        ref: "2:2", phon: "dhalika l-kitabu la rayba fih",
        tr: "Cette prescription — aucun trouble en elle",
        ctx: "Décrit la forme pas le statut — vide le sens d'institution" },
      { s: "livre physique (objet)", st: "no",
        ref: "2:2", phon: "dhalika l-kitabu la rayba fih",
        tr: "Cette prescription — aucun trouble en elle",
        ctx: "Tautologie : cette prescription est un livre — rend le verset inutile" }
    ],
    occs: [
      { before: { ref:"2:1", ar:"الم", phon:"alif-lam-mim", tr:"Alif. Lām. Mīm." },
        main:   { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription établie — aucun trouble en elle" },
        after:  { ref:"2:3", ar:"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", phon:"alladhina yu'minuna bi-l-ghayb", tr:"Ceux qui s'engagent envers l'imperceptible" } },
      { before: { ref:"2:182", ar:"فَمَنْ خَافَ مِن مُّوصٍ جَنَفًا", phon:"fa-man khafa min musin janafan", tr:"Si quelqu'un craint une injustice du testateur" },
        main:   { ref:"2:183", ar:"كُتِبَ عَلَيْكُمُ الصِّيَامُ", phon:"kutiba alaykumu s-siyam", tr:"Il vous a été prescrit le jeûne" },
        after:  { ref:"2:184", ar:"أَيَّامًا مَّعْدُودَاتٍ", phon:"ayyaman ma'dudat", tr:"Des jours comptés" } },
      { before: { ref:"6:37", ar:"وَقَالُوا لَوْلَا نُزِّلَ عَلَيْهِ آيَةٌ", phon:"wa-qalu lawla nuzzila alayhi aya", tr:"Ils dirent : pourquoi un signe ne lui a pas été envoyé ?" },
        main:   { ref:"6:38", ar:"مَا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", phon:"ma farratna fi l-kitabi min shay", tr:"Nous n'avons rien négligé dans cette prescription" },
        after:  { ref:"6:39", ar:"وَالَّذِينَ كَذَّبُوا بِآيَاتِنَا صُمٌّ وَبُكْمٌ", phon:"wa-lladhina kadhdhabu bi-ayatina summun wa-bukmun", tr:"Ceux qui ont démenti Nos signes sont sourds et muets" } },
      { before: { ref:"27:27", ar:"قَالَ سَنَنظُرُ أَصَدَقْتَ", phon:"qala sananzuru asadaqta", tr:"Il dit : nous allons voir si tu dis vrai" },
        main:   { ref:"27:28", ar:"اذْهَب بِّكِتَابِي هَٰذَا فَأَلْقِهْ إِلَيْهِمْ", phon:"idhhab bi-kitabi hadha fa-alqihi ilayhim", tr:"Va avec cette lettre mienne et jette-la vers eux" },
        after:  { ref:"27:29", ar:"إِنِّي أُلْقِيَ إِلَيَّ كِتَابٌ كَرِيمٌ", phon:"inni ulqiya ilayya kitabun karim", tr:"Un écrit honorable m'a été soumis" } },
      { before: { ref:"57:21", ar:"سَابِقُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ", phon:"sabiqu ila maghfiratin min rabbikum", tr:"Devancez-vous vers le pardon de votre éducateur" },
        main:   { ref:"57:22", ar:"مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا فِي كِتَابٍ", phon:"ma asaba min musibatin illa fi kitabin min qabli an nabra-aha", tr:"Nulle épreuve sans être dans un registre avant que Nous la créions" },
        after:  { ref:"57:23", ar:"لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ", phon:"li-kayla ta'saw ala ma fatakum", tr:"Afin que vous ne vous affligiez pas de ce qui vous échappe" } }
    ],
    daily: [
      { ar: "كَتَبْتُ كِتَابًا إِلَى صَدِيقِي", phon: "katabtu kitaban ila sadiki", fr: "J'ai écrit une lettre à mon ami" },
      { ar: "هَٰذَا كِتَابُ الْقَانُونِ الْمَدَنِيِّ", phon: "hadha kitabu l-qanuni l-madani", fr: "C'est le code civil (kitāb = registre de loi)" },
      { ar: "وَقَّعَ عَلَى الْكِتَابِ أَمَامَ الْقَاضِي", phon: "waqqa'a ala l-kitabi amama l-qadi", fr: "Il a signé l'acte devant le juge" }
    ],
    coh: "230 occurrences de k-t-b — acte d'institution. Retenu : prescription établie."
  },
  rayb: {
    ar: "رَيْب", phon: "rayb", root_ar: "ر ي ب", root_phon: "r-y-b",
    root_meaning: "Être troublé, agité intérieurement — suspicion affective, pas doute neutre",
    retenu: "trouble intérieur", retenu_display: "trouble (rayb)",
    total_occs: 32,
    meanings: [
      { s: "trouble intérieur, hésitation affective", st: "ok",
        ref: "2:2", phon: "la rayba fih", tr: "Aucun trouble en elle",
        ctx: "Ouverture — la prescription est présentée comme libérée de tout trouble interne" },
      { s: "inquiétude, doute troublant", st: "ok",
        ref: "2:23", phon: "wa-in kuntum fi raybin mimma nazzalna", tr: "Et si vous êtes dans le trouble concernant ce que Nous avons envoyé",
        ctx: "Rayb = état de trouble face au texte — agitation, pas questionnement neutre" },
      { s: "suspicion active, soupçon troublant", st: "ok",
        ref: "9:45", phon: "wa-rtabat qulubuhum fa-hum fi raybihim yataraddadun", tr: "Leurs cœurs ont douté et ils oscillent dans leur trouble",
        ctx: "R-y-b lié au cœur agité — dimension émotionnelle forte confirmée" },
      { s: "ambiguïté, équivoque troublante", st: "maybe",
        ref: "3:9", phon: "li-yawmin la rayba fih", tr: "Pour un jour dont il n'y a aucune ambiguïté",
        ctx: "Nuance possible : le Jour sans équivoque" },
      { s: "doute rationnel neutre", st: "no",
        ref: "2:2", phon: "la rayba fih", tr: "Aucun trouble en elle",
        ctx: "Exclu : rayb n'est jamais neutre dans le Coran — il porte toujours un trouble affectif" }
    ],
    occs: [
      { before: { ref:"2:1", ar:"الم", phon:"alif-lam-mim", tr:"Alif. Lām. Mīm." },
        main:   { ref:"2:2", ar:"لَا رَيْبَ فِيهِ", phon:"la rayba fih", tr:"Aucun trouble en elle" },
        after:  { ref:"2:3", ar:"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", phon:"alladhina yu'minuna bi-l-ghayb", tr:"Ceux qui s'engagent envers l'imperceptible" } },
      { before: { ref:"2:22", ar:"فَلَا تَجْعَلُوا لِلَّهِ أَندَادًا", phon:"fa-la taj'alu li-llahi andadan", tr:"Ne donnez pas à Dieu des égaux" },
        main:   { ref:"2:23", ar:"وَإِن كُنتُمْ فِي رَيْبٍ", phon:"wa-in kuntum fi raybin mimma nazzalna", tr:"Et si vous êtes dans le trouble" },
        after:  { ref:"2:24", ar:"فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا", phon:"fa-in lam taf'alu wa-lan taf'alu", tr:"Si vous ne le faites pas — et vous ne le ferez pas" } },
      { before: { ref:"3:8", ar:"رَبَّنَا لَا تُزِغْ قُلُوبَنَا", phon:"rabbana la tuzigh qulubana", tr:"Notre éducateur, ne fais pas dévier nos cœurs" },
        main:   { ref:"3:9", ar:"لِيَوْمٍ لَّا رَيْبَ فِيهِ", phon:"li-yawmin la rayba fih", tr:"Pour un jour dont il n'y a aucun trouble" },
        after:  { ref:"3:10", ar:"إِنَّ الَّذِينَ كَفَرُوا لَن تُغْنِيَ عَنْهُمْ أَمْوَالُهُمْ", phon:"inna lladhina kafaru lan tughniya anhum amwaluhum", tr:"Ceux qui ont refusé — leurs biens ne leur serviront de rien" } },
      { before: { ref:"4:86", ar:"وَإِذَا حُيِّيتُم بِتَحِيَّةٍ", phon:"wa-idha huyyitum bi-tahiyyatin", tr:"Quand on vous salue d'une salutation" },
        main:   { ref:"4:87", ar:"لَا رَيْبَ فِيهِ", phon:"la rayba fih", tr:"Sans aucun trouble" },
        after:  { ref:"4:88", ar:"فَمَا لَكُمْ فِي الْمُنَافِقِينَ فِئَتَيْنِ", phon:"fa-ma lakum fi l-munafiqina fi'atayn", tr:"Pourquoi êtes-vous deux groupes concernant les hypocrites ?" } },
      { before: { ref:"45:25", ar:"وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا", phon:"wa-idha tutla alayhim ayatuna", tr:"Quand Nos signes leur sont récités" },
        main:   { ref:"45:26", ar:"لَا رَيْبَ فِيهِ", phon:"la rayba fih", tr:"Sans aucun trouble" },
        after:  { ref:"45:27", ar:"وَلِلَّهِ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", phon:"wa-li-llahi mulku s-samawati wa-l-ard", tr:"À Dieu appartient le règne des cieux et de la terre" } }
    ],
    daily: [
      { ar: "لَا رَيْبَ فِي صِدْقِهِ", phon: "la rayba fi sidqihi", fr: "Il n'y a aucun doute sur son honnêteté" },
      { ar: "أَثَارَ كَلَامُهُ رَيْبًا فِي نَفْسِي", phon: "athara kalamahu rayban fi nafsi", fr: "Ses paroles ont éveillé un trouble en moi" },
      { ar: "هَٰذَا الْأَمْرُ لَا رَيْبَ فِيهِ أَبَدًا", phon: "hadha l-amru la rayba fihi abadan", fr: "Cette affaire ne prête absolument à aucune ambiguïté" }
    ],
    coh: "32 occurrences — toujours état affectif troublé. Retenu : trouble intérieur, hésitation."
  },
  salat: {
    ar: "صَلَاة", phon: "ṣalāt", root_ar: "ص ل و", root_phon: "s-l-w",
    root_meaning: "Relier, connecter, établir un lien — tendre vers quelque chose",
    retenu: "la connexion", retenu_display: "la connexion (salat)",
    total_occs: 99,
    meanings: [
      { s: "connexion, lien actif établi", st: "ok",
        ref: "2:3", phon: "wa-yuqimuna s-salata", tr: "Et ils établissent la connexion",
        ctx: "Yuqimuna = dresser, établir solidement — la salat est quelque chose qu'on érige" },
      { s: "soutien orienté, bénédiction active", st: "ok",
        ref: "33:56", phon: "inna llaha wa-mala-ikatahu yusalluna ala n-nabi", tr: "Allah et ses envoyés établissent une connexion vers le prophète",
        ctx: "Preuve absolue : Allah fait salat — sens prosternation physique impossible ici" },
      { s: "inclination favorable, geste d'orientation", st: "ok",
        ref: "2:157", phon: "ula-ika alayhim salawatun min rabbihim wa-rahma", tr: "Ceux-là reçoivent des connexions de leur éducateur",
        ctx: "Les salawat de Dieu vers les humains — geste d'orientation et soutien divin" },
      { s: "rituel de mise en lien (5 fois/jour)", st: "maybe",
        ref: "17:78", phon: "aqimi s-salata li-duluki sh-shamsi", tr: "Établis la connexion depuis le déclin du soleil",
        ctx: "Application pratique cohérente — l'acte de relier à des moments fixes" },
      { s: "prière rituelle codifiée seule", st: "maybe",
        ref: "2:238", phon: "hafizu ala s-salawati wa-s-salati l-wusta", tr: "Préservez les connexions, et la connexion médiane",
        ctx: "Usage traditionnel — crée un problème en 33:56" },
      { s: "prosternation physique seule", st: "no",
        ref: "33:56", phon: "inna llaha wa-mala-ikatahu yusalluna ala n-nabi", tr: "Allah et ses envoyés font salat vers le prophète",
        ctx: "Absolument exclu : Allah ne se prosterne pas — contradiction logique fatale" }
    ],
    occs: [
      { before: { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription — aucun trouble en elle" },
        main:   { ref:"2:3", ar:"وَيُقِيمُونَ الصَّلَاةَ", phon:"wa-yuqimuna s-salata", tr:"Et ils établissent la connexion" },
        after:  { ref:"2:4", ar:"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ", phon:"wa-lladhina yu'minuna bima unzila ilayk", tr:"Et ceux qui s'engagent envers ce qui t'a été envoyé" } },
      { before: { ref:"33:55", ar:"لَّا جُنَاحَ عَلَيْهِنَّ فِي آبَائِهِنَّ", phon:"la junaha alayhinna fi aba-ihinna", tr:"Pas de faute pour elles concernant leurs pères" },
        main:   { ref:"33:56", ar:"إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ", phon:"inna llaha wa-mala-ikatahu yusalluna ala n-nabi", tr:"Allah et ses envoyés établissent une connexion vers le prophète" },
        after:  { ref:"33:57", ar:"إِنَّ الَّذِينَ يُؤْذُونَ اللَّهَ وَرَسُولَهُ", phon:"inna lladhina yu'dhuna llaha wa-rasulahu", tr:"Ceux qui blessent Dieu et Son envoyé" } },
      { before: { ref:"2:237", ar:"وَلَا تَنسَوُا الْفَضْلَ بَيْنَكُمْ", phon:"wa-la tansawu l-fadla baynakum", tr:"N'oubliez pas la générosité entre vous" },
        main:   { ref:"2:238", ar:"حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ", phon:"hafizu ala s-salawati wa-s-salati l-wusta", tr:"Préservez les connexions, et la connexion médiane" },
        after:  { ref:"2:239", ar:"فَإِنْ خِفْتُمْ فَرِجَالًا أَوْ رُكْبَانًا", phon:"fa-in khiftum fa-rijalan aw rukbanan", tr:"Si vous avez peur, à pied ou à cheval" } },
      { before: { ref:"2:156", ar:"الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ", phon:"alladhina idha asabathum musiba", tr:"Ceux qui, quand une épreuve les touche" },
        main:   { ref:"2:157", ar:"أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِّن رَّبِّهِمْ", phon:"ula-ika alayhim salawatun min rabbihim", tr:"Ceux-là reçoivent des connexions de leur éducateur" },
        after:  { ref:"2:158", ar:"إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ", phon:"inna s-safa wa-l-marwata min sha'a-iri llah", tr:"Safa et Marwa font partie des rites de Dieu" } },
      { before: { ref:"17:77", ar:"سُنَّةَ مَن قَدْ أَرْسَلْنَا", phon:"sunnata man qad arsalna", tr:"C'est la règle pour ceux que Nous avons envoyés" },
        main:   { ref:"17:78", ar:"أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ", phon:"aqimi s-salata li-duluki sh-shams", tr:"Établis la connexion depuis le déclin du soleil" },
        after:  { ref:"17:79", ar:"وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً", phon:"wa-mina l-layli fa-tahajjad bihi nafilatan", tr:"Et de la nuit, veille en plus — un supplément pour toi" } }
    ],
    daily: [
      { ar: "صَلَّى الْقَوْمُ عَلَى الْمَيِّتِ", phon: "salla l-qawmu ala l-mayyit", fr: "Les gens ont établi un lien sur le défunt" },
      { ar: "يُصَلِّي الْإِمَامُ بِالنَّاسِ", phon: "yusalli l-imamu bi-n-nas", fr: "L'imam établit la connexion avec les gens" },
      { ar: "مَكَانُ الصَّلَاةِ فِي الطَّابِقِ الثَّانِي", phon: "makanu s-salati fi t-tabiqi th-thani", fr: "L'espace de connexion est au deuxième étage" }
    ],
    coh: "33:56 exclut définitivement prosternation. 99 occurrences. Retenu : connexion, lien actif."
  },
  iman: {
    ar: "يُؤْمِنُونَ", phon: "yu'minuna", root_ar: "أ م ن", root_phon: "'-m-n",
    root_meaning: "Être en sécurité, sécuriser autrui — établir une relation de fiabilité",
    retenu: "s'engagent", retenu_display: "s'engagent (yu'minuna)",
    total_occs: 537,
    meanings: [
      { s: "s'engagent, établissent une confiance", st: "ok",
        ref: "2:3", phon: "alladhina yu'minuna bi-l-ghayb", tr: "Ceux qui s'engagent envers l'imperceptible",
        ctx: "Yu'minuna bi = s'engager envers — acte actif, pas état passif" },
      { s: "sécurisent, donnent la sécurité", st: "ok",
        ref: "59:23", phon: "huwa llahu l-maliku l-quddusi s-salamu l-mu'minu", tr: "Dieu — le Mu'min (Celui qui sécurise)",
        ctx: "Dieu lui-même est al-Mu'min — la racine porte sécuriser autrui" },
      { s: "sont en état de fiabilité morale", st: "ok",
        ref: "2:283", phon: "fa-l-yu'addi lladhina tumina amanatahu", tr: "Que celui à qui on a confié le dépôt s'en acquitte",
        ctx: "Amana = dépôt confié — même racine — fiabilité comme acte concret" },
      { s: "croient (foi dogmatique)", st: "maybe",
        ref: "4:136", phon: "ya ayyuha lladhina amanu aminu bi-llah", tr: "Ô vous qui vous êtes engagés, engagez-vous envers Dieu",
        ctx: "La répétition montre que c'est un acte renouvelable, pas un état fixe" },
      { s: "adhèrent intellectuellement", st: "no",
        ref: "2:3", phon: "alladhina yu'minuna bi-l-ghayb", tr: "Ceux qui s'engagent envers l'imperceptible",
        ctx: "Exclu : '-m-n implique un acte de sécurisation, pas une opinion mentale" }
    ],
    occs: [
      { before: { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription — aucun trouble en elle" },
        main:   { ref:"2:3", ar:"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", phon:"alladhina yu'minuna bi-l-ghayb", tr:"Ceux qui s'engagent envers l'imperceptible" },
        after:  { ref:"2:4", ar:"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ", phon:"wa-lladhina yu'minuna bima unzila ilayk", tr:"Et ceux qui s'engagent envers ce qui t'a été envoyé" } },
      { before: { ref:"59:22", ar:"هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ", phon:"huwa llahu lladhia la ilaha illa huw", tr:"C'est Dieu, nul dieu sauf Lui" },
        main:   { ref:"59:23", ar:"الْمُؤْمِنُ", phon:"al-mu'minu", tr:"Al-Mu'min — Celui qui sécurise" },
        after:  { ref:"59:24", ar:"هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ", phon:"huwa llahu l-khaliqu l-bari'u l-musawwiru", tr:"Dieu, le Créateur, l'Auteur, le Modeleur" } },
      { before: { ref:"2:284", ar:"لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", phon:"li-llahi ma fi s-samawati wa-ma fi l-ard", tr:"À Dieu ce qui est dans les cieux et la terre" },
        main:   { ref:"2:285", ar:"كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ", phon:"kullun amana bi-llahi wa-mala-ikatihi", tr:"Chacun s'est engagé envers Dieu et ses envoyés" },
        after:  { ref:"2:286", ar:"لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", phon:"la yukallifu llahu nafsan illa wus'aha", tr:"Dieu n'impose à personne que ce qu'il peut supporter" } },
      { before: { ref:"4:135", ar:"كُونُوا قَوَّامِينَ بِالْقِسْطِ", phon:"kunu qawwamina bi-l-qist", tr:"Soyez constants dans la justice" },
        main:   { ref:"4:136", ar:"يَا أَيُّهَا الَّذِينَ آمَنُوا آمِنُوا بِاللَّهِ", phon:"ya ayyuha lladhina amanu aminu bi-llah", tr:"Ô vous qui vous êtes engagés, engagez-vous envers Dieu" },
        after:  { ref:"4:137", ar:"إِنَّ الَّذِينَ آمَنُوا ثُمَّ كَفَرُوا", phon:"inna lladhina amanu thumma kafaru", tr:"Ceux qui se sont engagés puis ont refusé" } },
      { before: { ref:"49:13", ar:"إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ", phon:"inna khalaqnakum min dhakarin wa-untha", tr:"Nous vous avons créés d'un mâle et d'une femelle" },
        main:   { ref:"49:14", ar:"قَالَتِ الْأَعْرَابُ آمَنَّا", phon:"qalati l-a'rabu amanna", tr:"Les nomades dirent : nous nous sommes engagés" },
        after:  { ref:"49:15", ar:"إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ آمَنُوا بِاللَّهِ", phon:"innama l-mu'minuna lladhina amanu bi-llah", tr:"Les mu'minun sont ceux qui s'engagent envers Dieu" } }
    ],
    daily: [
      { ar: "أَنَا آمَنْتُ بِهِ مِن أَوَّلِ لِقَاءٍ", phon: "ana amantu bihi min awwali liqa'", fr: "Je lui ai fait confiance dès la première rencontre" },
      { ar: "هَٰذِهِ مَنْطَقَةٌ آمِنَةٌ", phon: "hadhihi mantaqatun aminah", fr: "C'est une zone sécurisée (même racine '-m-n)" },
      { ar: "أَعْطَاهُ الْأَمَانَةَ وَاطْمَأَنَّ إِلَيْهِ", phon: "a'tahu l-amanata wa-tma'anna ilayhi", fr: "Il lui a confié le dépôt (amana) et s'est reposé sur lui" }
    ],
    coh: "Al-Mu'min (59:23) = Dieu sécurise. Retenu : s'engager, établir une confiance."
  },
  ghayb: {
    ar: "غَيْب", phon: "ghayb", root_ar: "غ ي ب", root_phon: "gh-y-b",
    root_meaning: "S'absenter, disparaître — ce qui n'est plus présent aux sens",
    retenu: "l'imperceptible", retenu_display: "l'imperceptible (ghayb)",
    total_occs: 49,
    meanings: [
      { s: "l'imperceptible sensoriel, l'absent", st: "ok",
        ref: "2:3", phon: "yu'minuna bi-l-ghayb", tr: "Ils s'engagent envers l'imperceptible",
        ctx: "Premier usage — s'engager envers ce qui n'est pas accessible aux sens" },
      { s: "l'invisible structurel (inaccessible par nature)", st: "ok",
        ref: "6:59", phon: "wa-'indahu mafatihu l-ghaybi la ya'lamuha illa huw", tr: "Auprès de Lui les clés de l'imperceptible — nul ne les connaît sauf Lui",
        ctx: "Le ghayb comme domaine structurellement réservé" },
      { s: "le non-manifeste (opposé de shahada)", st: "ok",
        ref: "59:22", phon: "'alimu l-ghaybi wa-sh-shahada", tr: "Connaisseur de l'imperceptible et du manifeste",
        ctx: "Paire ghayb/shahada = absent/présent — confirme le sens sensoriel" },
      { s: "le mystère, le caché", st: "maybe",
        ref: "72:26", phon: "'alimu l-ghaybi fa-la yuzhiru ala ghaybihi ahada", tr: "Connaisseur de l'imperceptible — Il ne révèle rien",
        ctx: "Nuance du caché acceptable — moins précis que absent aux sens" },
      { s: "le surnaturel / miraculeux", st: "no",
        ref: "2:3", phon: "yu'minuna bi-l-ghayb", tr: "Ils s'engagent envers l'imperceptible",
        ctx: "Exclu : surinterprétation — le texte dit simplement absent, pas surnaturel" }
    ],
    occs: [
      { before: { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription — aucun trouble en elle" },
        main:   { ref:"2:3", ar:"يُؤْمِنُونَ بِالْغَيْبِ", phon:"yu'minuna bi-l-ghayb", tr:"Ils s'engagent envers l'imperceptible" },
        after:  { ref:"2:4", ar:"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ", phon:"wa-lladhina yu'minuna bima unzila ilayk", tr:"Et ceux qui s'engagent envers ce qui t'a été envoyé" } },
      { before: { ref:"6:58", ar:"قُل لَّوْ أَنَّ عِندِي مَا تَسْتَعْجِلُونَ", phon:"qul law anna 'indi ma tasta'jilun", tr:"Dis : si j'avais ce que vous réclamez" },
        main:   { ref:"6:59", ar:"وَعِندَهُ مَفَاتِحُ الْغَيْبِ", phon:"wa-'indahu mafatihu l-ghayb", tr:"Auprès de Lui les clés de l'imperceptible" },
        after:  { ref:"6:60", ar:"وَهُوَ الَّذِي يَتَوَفَّاكُم بِاللَّيْلِ", phon:"wa-huwa lladhia yatawaffakum bi-l-layl", tr:"Et c'est Lui qui vous rappelle la nuit" } },
      { before: { ref:"27:64", ar:"أَمَّن يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", phon:"amman yabda'u l-khalqa thumma yu'iduh", tr:"Qui commence la création puis la recommence ?" },
        main:   { ref:"27:65", ar:"لَا يَعْلَمُ مَن فِي السَّمَاوَاتِ الْغَيْبَ", phon:"la ya'lamu man fi s-samawati wa-l-ardi l-ghayba illa llah", tr:"Nul dans les cieux ne connaît l'imperceptible sauf Dieu" },
        after:  { ref:"27:66", ar:"بَلِ ادَّارَكَ عِلْمُهُمْ فِي الْآخِرَةِ", phon:"bali ddaraka 'ilmuhum fi l-akhira", tr:"Leur savoir sur l'au-delà s'est perdu" } },
      { before: { ref:"59:21", ar:"لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ", phon:"law anzalna hadha l-qur'ana ala jabal", tr:"Si Nous avions envoyé ce Coran sur une montagne" },
        main:   { ref:"59:22", ar:"عَالِمُ الْغَيْبِ وَالشَّهَادَةِ", phon:"'alimu l-ghaybi wa-sh-shahada", tr:"Connaisseur de l'imperceptible et du manifeste" },
        after:  { ref:"59:23", ar:"هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ", phon:"huwa llahu l-maliku l-quddus", tr:"Dieu, le Roi, le Très-Saint" } },
      { before: { ref:"72:25", ar:"قُلْ إِنْ أَدْرِي أَقَرِيبٌ مَّا تُوعَدُونَ", phon:"qul in adri aqaribun ma tu'adun", tr:"Je ne sais si ce qu'on vous promet est proche" },
        main:   { ref:"72:26", ar:"عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا", phon:"'alimu l-ghaybi fa-la yuzhiru ala ghaybihi ahada", tr:"Connaisseur de l'imperceptible — Il ne révèle rien" },
        after:  { ref:"72:27", ar:"إِلَّا مَنِ ارْتَضَىٰ مِن رَّسُولٍ", phon:"illa mani rtada min rasul", tr:"Sauf à celui qu'Il choisit parmi les envoyés" } }
    ],
    daily: [
      { ar: "هُوَ غَائِبٌ عَنِ الِاجْتِمَاعِ", phon: "huwa gha'ibun ani l-ijtima'", fr: "Il est absent de la réunion (même racine gh-y-b)" },
      { ar: "تَغَيَّبَ عَنِ الدَّرْسِ بِدُونِ عُذْرٍ", phon: "taghayyaba ani d-darsi bi-duni 'udhr", fr: "Il s'est absenté du cours sans raison" },
      { ar: "لَا أَعْلَمُ مَا الَّذِي غَابَ عَنِّي", phon: "la a'lamu ma lladhia ghaba 'anni", fr: "Je ne sais pas ce qui m'a échappé" }
    ],
    coh: "Paire constante ghayb/shahada en 59:22. 49 occurrences. Retenu : l'imperceptible sensoriel."
  },
  khalifa: {
    ar: "خَلِيفَة", phon: "khalifa", root_ar: "خ ل ف", root_phon: "kh-l-f",
    root_meaning: "Venir après, succéder, remplacer — ce qui suit et continue",
    retenu: "un représentant", retenu_display: "un représentant (khalifa)",
    total_occs: 127,
    meanings: [
      { s: "représentant désigné, continuateur", st: "ok",
        ref: "2:30", phon: "inni ja'ilun fi-l-ardi khalifatan", tr: "Je vais établir dans la terre un représentant",
        ctx: "Schéma ja'ala + khalifa + fi-l-ard — désignation officielle d'un continuateur" },
      { s: "successeur, héritier d'une mission", st: "ok",
        ref: "38:26", phon: "inna ja'alnaka khalifatan fi l-ard", tr: "Nous t'avons établi représentant dans la terre",
        ctx: "Même schéma pour Dawud — continuateur d'une mission, pas titre politique" },
      { s: "remplaçant, substitut", st: "ok",
        ref: "6:165", phon: "huwa lladhia ja'alakum khala-ifa l-ard", tr: "Il vous a établis représentants dans la terre",
        ctx: "Au pluriel khala'if — tous les humains comme continuateurs" },
      { s: "délégué, mandataire", st: "maybe",
        ref: "10:14", phon: "thumma ja'alnakum khala-ifa fi l-ardi min ba'dihim", tr: "Puis Nous vous avons établis successeurs après eux",
        ctx: "Min ba'dihim = après eux — nuance de succession temporelle" },
      { s: "calife (sens politique institutionnel)", st: "no",
        ref: "2:30", phon: "inni ja'ilun fi-l-ardi khalifatan", tr: "Je vais établir dans la terre un représentant",
        ctx: "Exclu : anachronisme — le sens politique calife est postérieur au Coran" }
    ],
    occs: [
      { before: { ref:"2:29", ar:"هُوَ الَّذِي خَلَقَ لَكُم مَّا فِي الْأَرْضِ", phon:"huwa lladhia khalaqa lakum ma fi l-ard", tr:"C'est Lui qui a créé pour vous tout ce qui est dans la terre" },
        main:   { ref:"2:30", ar:"إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً", phon:"inni ja'ilun fi-l-ardi khalifatan", tr:"Je vais établir dans la terre un représentant" },
        after:  { ref:"2:31", ar:"وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا", phon:"wa-'allama adama l-asma'a kullaha", tr:"Et Il enseigna à Adam tous les noms" } },
      { before: { ref:"38:25", ar:"فَغَفَرْنَا لَهُ ذَٰلِكَ", phon:"fa-ghafarna lahu dhalik", tr:"Et Nous lui avons pardonné cela" },
        main:   { ref:"38:26", ar:"إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ", phon:"inna ja'alnaka khalifatan fi l-ard", tr:"Nous t'avons établi représentant dans la terre" },
        after:  { ref:"38:27", ar:"فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ", phon:"fa-hkum bayna n-nasi bi-l-haqq", tr:"Juge donc entre les gens avec la vérité" } },
      { before: { ref:"6:164", ar:"قُلْ أَغَيْرَ اللَّهِ أَبْغِي رَبًّا", phon:"qul aghayr allahi abghi rabban", tr:"Dis : est-ce autre que Dieu que je chercherais ?" },
        main:   { ref:"6:165", ar:"جَعَلَكُمْ خَلَائِفَ الْأَرْضِ", phon:"ja'alakum khala-ifa l-ard", tr:"Il vous a établis représentants dans la terre" },
        after:  { ref:"7:1", ar:"المص", phon:"alif-lam-mim-sad", tr:"Alif. Lām. Mīm. Ṣād." } },
      { before: { ref:"10:13", ar:"وَلَقَدْ أَهْلَكْنَا الْقُرُونَ مِن قَبْلِكُمْ", phon:"wa-laqad ahlakna l-quruna min qablikum", tr:"Nous avons anéanti les générations avant vous" },
        main:   { ref:"10:14", ar:"جَعَلْنَاكُمْ خَلَائِفَ فِي الْأَرْضِ مِن بَعْدِهِمْ", phon:"ja'alnakum khala-ifa fi l-ardi min ba'dihim", tr:"Nous vous avons établis successeurs après eux" },
        after:  { ref:"10:15", ar:"وَإِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُنَا", phon:"wa-idha tutla alayhim ayatuna", tr:"Quand Nos signes leur sont récités" } },
      { before: { ref:"35:38", ar:"إِنَّ اللَّهَ عَالِمُ غَيْبِ السَّمَاوَاتِ", phon:"inna llaha 'alimu ghaybi s-samawat", tr:"Dieu connaît l'imperceptible des cieux" },
        main:   { ref:"35:39", ar:"هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ", phon:"huwa lladhia ja'alakum khala-ifa fi l-ard", tr:"C'est Lui qui vous a établis représentants dans la terre" },
        after:  { ref:"35:40", ar:"قُلْ أَرَأَيْتُمْ شُرَكَاءَكُمُ", phon:"qul ara'aytum shuraka-akum", tr:"Dis : avez-vous vu vos associés ?" } }
    ],
    daily: [
      { ar: "هُوَ خَلِيفَةُ الْمُدِيرِ فِي غِيَابِهِ", phon: "huwa khalifatu l-mudiri fi ghiyabihi", fr: "Il est le remplaçant du directeur en son absence" },
      { ar: "خَلَفَ الِابْنُ أَبَاهُ فِي إِدَارَةِ الشَّرِكَةِ", phon: "khalafa l-ibnu abahu fi idairati sh-sharika", fr: "Le fils a succédé à son père dans la gestion" },
      { ar: "تَرَكَ لَهُ خِلَافَةَ الْمَنْزِلِ", phon: "taraka lahu khilafata l-manzil", fr: "Il lui a laissé la succession de la maison" }
    ],
    coh: "127 occurrences. Schéma ja'ala + khalifa + fi-l-ard cohérent. Retenu : représentant / continuateur désigné."
  },
  rabb: {
    ar: "رَبّ", phon: "rabb", root_ar: "ر ب ب", root_phon: "r-b-b",
    root_meaning: "Faire croître, élever, cultiver — celui qui prend soin et développe",
    retenu: "ton éducateur", retenu_display: "ton éducateur (rabb)",
    total_occs: 970,
    meanings: [
      { s: "celui qui cultive, éduque, fait croître", st: "ok",
        ref: "1:2", phon: "al-hamdu li-llahi rabbi l-'alamin", tr: "La reconnaissance à Dieu, éducateur des mondes",
        ctx: "Rabb al-'alamin = éducateur/cultivateur des mondes — sens actif de soin" },
      { s: "maître responsable, seigneur bienveillant", st: "ok",
        ref: "17:23", phon: "wa-qada rabbuka alla ta'budu illa iyyah", tr: "Et ton éducateur a établi que vous ne serviez que Lui",
        ctx: "Rabb comme autorité instituant une règle — maître responsable" },
      { s: "propriétaire, maître d'une chose", st: "ok",
        ref: "2:30", phon: "wa-idh qala rabbuka li-l-mala-ika", tr: "Et quand ton éducateur dit aux envoyés",
        ctx: "Rabbuka = ton éducateur — lien personnel et nourricier" },
      { s: "seigneur divin (titre)", st: "maybe",
        ref: "96:3", phon: "iqra' wa-rabbuka l-akram", tr: "Lis, et ton éducateur est le plus généreux",
        ctx: "Acceptable comme titre — perd la nuance dynamique de faire croître" },
      { s: "Dieu (équivalent de Allah)", st: "no",
        ref: "1:2", phon: "al-hamdu li-llahi rabbi l-'alamin", tr: "La reconnaissance à Dieu, éducateur des mondes",
        ctx: "Exclu : Allah et Rabb sont deux termes distincts dans le Coran" }
    ],
    occs: [
      { before: { ref:"2:29", ar:"هُوَ الَّذِي خَلَقَ لَكُم مَّا فِي الْأَرْضِ", phon:"huwa lladhia khalaqa lakum ma fi l-ard", tr:"C'est Lui qui a créé pour vous ce qui est dans la terre" },
        main:   { ref:"2:30", ar:"قَالَ رَبُّكَ لِلْمَلَائِكَةِ", phon:"qala rabbuka li-l-mala-ika", tr:"Ton éducateur dit aux envoyés" },
        after:  { ref:"2:31", ar:"وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا", phon:"wa-'allama adama l-asma'a kullaha", tr:"Et Il enseigna à Adam tous les noms" } },
      { before: { ref:"1:1", ar:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", phon:"bismi llahi r-rahmani r-rahim", tr:"Au nom de Dieu, le Rahman, le Rahim" },
        main:   { ref:"1:2", ar:"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", phon:"al-hamdu li-llahi rabbi l-'alamin", tr:"La reconnaissance à Dieu, éducateur des mondes" },
        after:  { ref:"1:3", ar:"الرَّحْمَٰنِ الرَّحِيمِ", phon:"ar-rahmani r-rahim", tr:"Le Rahman, le Rahim" } },
      { before: { ref:"55:12", ar:"وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ", phon:"wa-l-habbu dhu l-'asfi wa-r-rayhanu", tr:"Et le grain avec sa paille et le basilic" },
        main:   { ref:"55:13", ar:"فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", phon:"fa-bi-ayyi ala'i rabbikuma tukadhdhibani", tr:"Lequel des bienfaits de votre éducateur niez-vous ?" },
        after:  { ref:"55:14", ar:"خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ", phon:"khalaqa l-insana min salsalin", tr:"Il a créé l'être humain d'argile sonore" } },
      { before: { ref:"17:22", ar:"لَّا تَجْعَلْ مَعَ اللَّهِ إِلَٰهًا آخَرَ", phon:"la taj'al ma'a llahi ilahan akhara", tr:"Ne place pas avec Dieu un autre dieu" },
        main:   { ref:"17:23", ar:"وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ", phon:"wa-qada rabbuka alla ta'budu illa iyyah", tr:"Et ton éducateur a établi que vous ne serviez que Lui" },
        after:  { ref:"17:24", ar:"وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ", phon:"wa-khfid lahumma janaha dh-dhulli", tr:"Et abaisse pour eux l'aile de l'humilité" } },
      { before: { ref:"96:2", ar:"خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ", phon:"khalaqa l-insana min 'alaq", tr:"Il a créé l'être humain d'une adhérence" },
        main:   { ref:"96:3", ar:"اقْرَأْ وَرَبُّكَ الْأَكْرَمُ", phon:"iqra' wa-rabbuka l-akram", tr:"Lis, et ton éducateur est le plus généreux" },
        after:  { ref:"96:4", ar:"الَّذِي عَلَّمَ بِالْقَلَمِ", phon:"alladhia 'allama bi-l-qalam", tr:"Celui qui a enseigné par le calame" } }
    ],
    daily: [
      { ar: "هُوَ رَبُّ الْبَيْتِ وَهُوَ الْمَسْؤُولُ", phon: "huwa rabbu l-bayti wa-huwa l-mas'ul", fr: "Il est le maître de maison et le responsable" },
      { ar: "رَبَّتِ الْأُمُّ أَطْفَالَهَا بِحُبٍّ", phon: "rabbati l-ummu atfalaha bi-hubb", fr: "La mère a élevé ses enfants avec amour (même racine r-b-b)" },
      { ar: "التَّرْبِيَةُ أَهَمُّ مِنَ التَّعْلِيمِ", phon: "at-tarbiyatu ahammun mina t-ta'lim", fr: "L'éducation (tarbiya, même racine) est plus importante que l'instruction" }
    ],
    coh: "Tarbiya (éducation), murabbi (éducateur) — même racine r-b-b. 970 occurrences. Retenu : celui qui cultive, éduque, fait croître."
  },
  huda: {
    ar: "هُدى", phon: "huda", root_ar: "هـ د ي", root_phon: "h-d-y",
    root_meaning: "Montrer le chemin, orienter, guider vers",
    retenu: "guidance active", retenu_display: "guidance (huda)",
    total_occs: 316,
    meanings: [
      { s: "guidance active, orientation", st: "ok",
        ref: "2:2", phon: "hudan li-l-muttaqin", tr: "Guidance pour les vigilants",
        ctx: "Huda comme acte d'orientation — ce texte oriente ceux qui se préservent" },
      { s: "direction donnée, cap indiqué", st: "ok",
        ref: "2:185", phon: "hudan li-n-nas", tr: "Guidance pour les gens",
        ctx: "Huda pour tous les gens — Ramaḍān comme moment d'orientation" },
      { s: "don d'orientation, grâce de sens", st: "ok",
        ref: "39:23", phon: "huda llahi yahdi bih", tr: "Guidance de Dieu par laquelle Il oriente",
        ctx: "Huda llahi = guidance émanant de Dieu — acte de grâce actif" },
      { s: "révélation divine", st: "maybe",
        ref: "20:123", phon: "fa-imma ya'tiyannakum minni huda", tr: "Si une guidance vient de Moi vers vous",
        ctx: "Huda comme message divin — sens possible mais plus étroit" },
      { s: "cadeau, présent", st: "no",
        ref: "2:2", phon: "hudan li-l-muttaqin", tr: "Guidance pour les vigilants",
        ctx: "Exclu : h-d-y = don en arabe courant mais jamais dans le Coran dans ce sens" }
    ],
    occs: [
      { before: { ref:"2:1", ar:"الم", phon:"alif-lam-mim", tr:"Alif. Lām. Mīm." },
        main:   { ref:"2:2", ar:"هُدًى لِّلْمُتَّقِينَ", phon:"hudan li-l-muttaqin", tr:"Guidance pour les vigilants" },
        after:  { ref:"2:3", ar:"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", phon:"alladhina yu'minuna bi-l-ghayb", tr:"Ceux qui s'engagent envers l'imperceptible" } },
      { before: { ref:"2:184", ar:"أَيَّامًا مَّعْدُودَاتٍ", phon:"ayyaman ma'dudat", tr:"Des jours comptés" },
        main:   { ref:"2:185", ar:"هُدًى لِّلنَّاسِ", phon:"hudan li-n-nas", tr:"Guidance pour les gens" },
        after:  { ref:"2:186", ar:"وَإِذَا سَأَلَكَ عِبَادِي عَنِّي", phon:"wa-idha sa'alaka 'ibadi 'anni", tr:"Et quand Mes serviteurs t'interrogent sur Moi" } },
      { before: { ref:"7:202", ar:"وَإِخْوَانُهُمْ يَمُدُّونَهُمْ فِي الْغَيِّ", phon:"wa-ikhwanuhum yamudduna fi l-ghayy", tr:"Leurs frères les entraînent dans l'égarement" },
        main:   { ref:"7:203", ar:"هَٰذَا هُدًى وَرَحْمَةٌ", phon:"hadha hudan wa-rahma", tr:"Ceci est guidance et miséricorde" },
        after:  { ref:"7:204", ar:"وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ", phon:"wa-idha quri'a l-qur'anu fa-stami'u lah", tr:"Quand le Coran est récité, écoutez-le" } },
      { before: { ref:"20:122", ar:"ثُمَّ اجْتَبَاهُ رَبُّهُ", phon:"thumma jtabahu rabbuh", tr:"Puis son éducateur l'a choisi" },
        main:   { ref:"20:123", ar:"فَإِمَّا يَأْتِيَنَّكُم مِّنِّي هُدًى", phon:"fa-imma ya'tiyannakum minni huda", tr:"Si une guidance vient de Moi vers vous" },
        after:  { ref:"20:124", ar:"وَمَنْ أَعْرَضَ عَن ذِكْرِي", phon:"wa-man a'rada 'an dhikri", tr:"Et quiconque se détourne de Mon rappel" } },
      { before: { ref:"39:22", ar:"أَفَمَن شَرَحَ اللَّهُ صَدْرَهُ لِلْإِسْلَامِ", phon:"a-fa-man sharaha llahu sadrahu li-l-islam", tr:"Celui dont Dieu a ouvert la poitrine" },
        main:   { ref:"39:23", ar:"هُدَى اللَّهِ يَهْدِي بِهِ مَن يَشَاءُ", phon:"huda llahi yahdi bihi man yasha'", tr:"Guidance de Dieu par laquelle Il oriente qui Il veut" },
        after:  { ref:"39:24", ar:"أَفَمَن يَتَّقِي بِوَجْهِهِ سُوءَ الْعَذَابِ", phon:"a-fa-man yattaqi bi-wajhihi su'a l-'adhab", tr:"Celui qui se préserve du mauvais châtiment" } }
    ],
    daily: [
      { ar: "هَدَيْتُهُ إِلَى الطَّرِيقِ الصَّحِيحِ", phon: "hadaytuhu ila t-tariqi s-sahih", fr: "Je l'ai guidé vers le bon chemin" },
      { ar: "الْهَادِي فِي الصَّحْرَاءِ يَعْرِفُ النُّجُومَ", phon: "al-hadi fi s-sahra'i ya'rifu n-nujum", fr: "Le guide dans le désert connaît les étoiles" },
      { ar: "أَرْسَلَ لَهُ هَدِيَّةً", phon: "arsala lahu hadiyyatan", fr: "Il lui a envoyé un cadeau (même racine h-d-y)" }
    ],
    coh: "316 occurrences — toujours orientation active. Retenu : guidance active."
  },
  muttaqin: {
    ar: "مُتَّقِين", phon: "muttaqin", root_ar: "و ق ي", root_phon: "w-q-y",
    root_meaning: "Protéger, préserver, faire bouclier — wiqaya = protection active",
    retenu: "vigilants", retenu_display: "vigilants (muttaqin)",
    total_occs: 258,
    meanings: [
      { s: "vigilants, ceux qui se préservent", st: "ok",
        ref: "2:2", phon: "hudan li-l-muttaqin", tr: "Guidance pour ceux qui se préservent",
        ctx: "Premier usage — les muttaqin sont les destinataires de la guidance" },
      { s: "ceux qui font taqwa (veille protectrice)", st: "ok",
        ref: "49:13", phon: "inna akramakum 'inda llahi atqakum", tr: "Le plus honoré est celui qui se préserve le mieux",
        ctx: "Atqakum = superlatif de taqwa — la vigilance est un degré, pas un état binaire" },
      { s: "les précautionneux, les prudents actifs", st: "ok",
        ref: "3:133", phon: "wa-jannatin u'iddat li-l-muttaqin", tr: "Un jardin préparé pour les vigilants",
        ctx: "Les muttaqin comme catégorie active — ils se hâtent, ils agissent" },
      { s: "les pieux, les dévots", st: "maybe",
        ref: "2:177", phon: "wa-ula-ika humu l-muttaqun", tr: "Et ceux-là sont les vigilants",
        ctx: "Nuance possible mais affaiblit la dimension concrète de protection active" },
      { s: "les croyants en général", st: "no",
        ref: "2:3", phon: "alladhina yu'minuna bi-l-ghayb", tr: "Ceux qui s'engagent envers l'imperceptible",
        ctx: "Exclu : le Coran distingue systématiquement mu'minun et muttaqin" }
    ],
    occs: [
      { before: { ref:"2:1", ar:"الم", phon:"alif-lam-mim", tr:"Alif. Lām. Mīm." },
        main:   { ref:"2:2", ar:"هُدًى لِّلْمُتَّقِينَ", phon:"hudan li-l-muttaqin", tr:"Guidance pour les vigilants" },
        after:  { ref:"2:3", ar:"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ", phon:"alladhina yu'minuna bi-l-ghayb", tr:"Ceux qui s'engagent envers l'imperceptible" } },
      { before: { ref:"2:176", ar:"ذَٰلِكَ بِأَنَّ اللَّهَ نَزَّلَ الْكِتَابَ", phon:"dhalika bi-anna llaha nazzala l-kitab", tr:"C'est parce que Dieu a envoyé la prescription" },
        main:   { ref:"2:177", ar:"وَأُولَٰئِكَ هُمُ الْمُتَّقُونَ", phon:"wa-ula-ika humu l-muttaqun", tr:"Et ceux-là sont les vigilants" },
        after:  { ref:"2:178", ar:"يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الْقِصَاصُ", phon:"kutiba 'alaykumu l-qisas", tr:"Ô vous qui vous êtes engagés, la rétribution vous a été prescrite" } },
      { before: { ref:"3:131", ar:"وَاتَّقُوا النَّارَ الَّتِي أُعِدَّتْ لِلْكَافِرِينَ", phon:"wa-ttaqu n-nara llati u'iddat li-l-kafirin", tr:"Préservez-vous du feu préparé pour ceux qui refusent" },
        main:   { ref:"3:133", ar:"وَجَنَّةٍ أُعِدَّتْ لِلْمُتَّقِينَ", phon:"wa-jannatin u'iddat li-l-muttaqin", tr:"Et un jardin préparé pour les vigilants" },
        after:  { ref:"3:134", ar:"الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ", phon:"alladhina yunfiquna fi s-sarra'", tr:"Ceux qui font circuler dans l'aisance" } },
      { before: { ref:"49:12", ar:"اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ", phon:"jtanibu kathiran mina z-zann", tr:"Évitez beaucoup de suspicion" },
        main:   { ref:"49:13", ar:"إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ", phon:"inna akramakum 'inda llahi atqakum", tr:"Le plus honoré est celui qui se préserve le mieux" },
        after:  { ref:"49:14", ar:"قَالَتِ الْأَعْرَابُ آمَنَّا", phon:"qalati l-a'rabu amanna", tr:"Les nomades dirent : nous nous sommes engagés" } },
      { before: { ref:"51:14", ar:"ذُوقُوا فِتْنَتَكُمْ", phon:"dhuqu fitnatakum", tr:"Goûtez votre épreuve" },
        main:   { ref:"51:15", ar:"إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَعُيُونٍ", phon:"inna l-muttaqina fi jannatin wa-'uyun", tr:"Les vigilants sont dans des jardins et des sources" },
        after:  { ref:"51:16", ar:"آخِذِينَ مَا آتَاهُمْ رَبُّهُمْ", phon:"akhidhina ma atahum rabbuhum", tr:"Recevant ce que leur éducateur leur accorde" } }
    ],
    daily: [
      { ar: "اتَّقِ اللَّهَ فِي كُلِّ أَمْرٍ", phon: "ittaqi llaha fi kulli amr", fr: "Préserve-toi dans toutes tes affaires (taqwa = acte de préservation)" },
      { ar: "وَقَاهُ اللَّهُ شَرَّ الْحَسَدِ", phon: "waqahu llahu sharra l-hasad", fr: "Dieu l'a préservé du mal de la jalousie (même racine w-q-y)" },
      { ar: "الْوِقَايَةُ خَيْرٌ مِنَ الْعِلَاجِ", phon: "al-wiqayatu khayrun mina l-'ilaj", fr: "La prévention (wiqaya, même racine) vaut mieux que le traitement" }
    ],
    coh: "258 occurrences. W-q-y = bouclier/protection. Retenu : ceux qui exercent une vigilance protectrice."
  },
  razaq: {
    ar: "رَزَق", phon: "razaqna", root_ar: "ر ز ق", root_phon: "r-z-q",
    root_meaning: "Attribuer une provision ciblée à un destinataire précis",
    retenu: "Nous avons pourvu", retenu_display: "Nous avons pourvu (razaqna)",
    total_occs: 123,
    meanings: [
      { s: "pourvoir, attribuer une part ciblée", st: "ok",
        ref: "2:3", phon: "wa-mimma razaqnahum yunfiqun", tr: "Et de ce que Nous leur avons pourvu, ils font circuler",
        ctx: "Razaqnahum = Nous leur avons pourvus — attribution ciblée avec destinataire précis" },
      { s: "subvenir, nourrir", st: "ok",
        ref: "2:22", phon: "fa-akhraja bihi mina th-thamarati rizqan lakum", tr: "Il en fit sortir des fruits comme provision pour vous",
        ctx: "Rizq concret = les fruits de la terre comme provision vitale" },
      { s: "doter, accorder richesse ou savoir", st: "ok",
        ref: "3:37", phon: "wa-razaqaha min haythu la yahtasib", tr: "Et Il la pourvut d'où elle n'attendait pas",
        ctx: "Maryam pourvue de façon inattendue — rizq peut être spirituel ou matériel" },
      { s: "gratifier, accorder un don", st: "maybe",
        ref: "51:57", phon: "ma uridu minhum min rizq", tr: "Je ne veux d'eux aucune provision",
        ctx: "Dieu n'a pas besoin de rizq — Il en est la source (ar-Razzaq)" },
      { s: "créer les richesses", st: "no",
        ref: "51:58", phon: "inna llaha huwa r-razzaqu dhu l-quwwati l-matin", tr: "Dieu est le Grand Pourvoyeur",
        ctx: "Ar-Razzaq = Celui qui attribue — pas créateur mais distributeur de parts" }
    ],
    occs: [
      { before: { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription — aucun trouble en elle" },
        main:   { ref:"2:3", ar:"وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", phon:"wa-mimma razaqnahum yunfiqun", tr:"Et de ce que Nous avons pourvu, ils font circuler" },
        after:  { ref:"2:4", ar:"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ", phon:"wa-lladhina yu'minuna bima unzila ilayk", tr:"Et ceux qui s'engagent envers ce qui t'a été envoyé" } },
      { before: { ref:"2:21", ar:"يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ", phon:"ya ayyuha n-nasu 'budu rabbakum", tr:"Ô gens, servez votre éducateur" },
        main:   { ref:"2:22", ar:"فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ", phon:"fa-akhraja bihi mina th-thamarati rizqan lakum", tr:"Il en fit sortir des fruits comme provision pour vous" },
        after:  { ref:"2:23", ar:"وَإِن كُنتُمْ فِي رَيْبٍ", phon:"wa-in kuntum fi rayb", tr:"Et si vous êtes dans le trouble" } },
      { before: { ref:"3:36", ar:"وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ", phon:"wa-llahu a'lamu bima wada'at", tr:"Dieu sait mieux ce qu'elle a enfanté" },
        main:   { ref:"3:37", ar:"وَرَزَقَهَا مِن حَيْثُ لَا يَحْتَسِبُ", phon:"wa-razaqaha min haythu la yahtasib", tr:"Et Il la pourvut d'où elle n'attendait pas" },
        after:  { ref:"3:38", ar:"هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُ", phon:"hunalika da'a Zakariyya rabbahu", tr:"Là, Zacharie invoqua son éducateur" } },
      { before: { ref:"16:74", ar:"فَلَا تَضْرِبُوا لِلَّهِ الْأَمْثَالَ", phon:"fa-la tadribu li-llahi l-amthal", tr:"Ne donnez pas à Dieu des exemples" },
        main:   { ref:"16:75", ar:"وَمِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً", phon:"wa-mimma razaqnahum sirran wa-'alaniyatan", tr:"De ce que Nous avons pourvu, discrètement et ouvertement" },
        after:  { ref:"16:76", ar:"وَضَرَبَ اللَّهُ مَثَلًا رَّجُلَيْنِ", phon:"wa-daraba llahu mathalan rajulayni", tr:"Et Dieu propose un exemple avec deux hommes" } },
      { before: { ref:"51:56", ar:"وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", phon:"wa-ma khalaqtu l-jinna wa-l-insa illa li-ya'budun", tr:"Je n'ai créé les jinn et les humains que pour Me servir" },
        main:   { ref:"51:57", ar:"مَا أُرِيدُ مِنْهُم مِّن رِّزْقٍ", phon:"ma uridu minhum min rizq", tr:"Je ne veux d'eux aucune provision" },
        after:  { ref:"51:58", ar:"إِنَّ اللَّهَ هُوَ الرَّزَّاقُ", phon:"inna llaha huwa r-razzaq", tr:"Dieu est le Grand Pourvoyeur" } }
    ],
    daily: [
      { ar: "رَزَقَنَا اللَّهُ خَيْرًا كَثِيرًا", phon: "razaqana llahu khayran kathiran", fr: "Dieu nous a pourvus de nombreux bienfaits" },
      { ar: "الرِّزْقُ بِيَدِ اللَّهِ وَلَيْسَ بِيَدِ الْإِنْسَانِ", phon: "ar-rizqu bi-yadi llahi", fr: "La provision (rizq) est dans la main de Dieu" },
      { ar: "يَسْعَى لِطَلَبِ الرِّزْقِ الْحَلَالِ", phon: "yas'a li-talabi r-rizqi l-halal", fr: "Il cherche à obtenir une provision licite (rizq halal)" }
    ],
    coh: "123 occurrences. Ar-Razzaq (51:58) = le Grand Pourvoyeur. Retenu : pourvoir, attribuer une part."
  },
  yunfiq: {
    ar: "يُنفِقُون", phon: "yunfiquna", root_ar: "ن ف ق", root_phon: "n-f-q",
    root_meaning: "Faire passer à travers, faire circuler — nafaq = tunnel comme métaphore",
    retenu: "font circuler", retenu_display: "font circuler (yunfiquna)",
    total_occs: 171,
    meanings: [
      { s: "font circuler, mettent en mouvement", st: "ok",
        ref: "2:3", phon: "wa-mimma razaqnahum yunfiqun", tr: "Et de ce que Nous avons pourvu, ils font circuler",
        ctx: "Yunfiquna directement après razaqnahum — la provision circule, elle ne reste pas stockée" },
      { s: "dépensent, mettent en usage actif", st: "ok",
        ref: "2:195", phon: "wa-anfiqu fi sabili llah", tr: "Et faites circuler dans le chemin de Dieu",
        ctx: "Infaq fi sabili llah = mise en circulation dans un chemin — flux actif" },
      { s: "s'acquittent d'une obligation de soutien", st: "ok",
        ref: "65:7", phon: "fa-l-yunfiq mimma atahu llah", tr: "Qu'il fasse circuler de ce que Dieu lui a donné",
        ctx: "Nafaqa = pension alimentaire obligatoire — obligation légale de soutien" },
      { s: "donnent en aumône", st: "maybe",
        ref: "3:134", phon: "alladhina yunfiquna fi s-sarra'i wa-d-darra'", tr: "Ceux qui font circuler dans l'aisance et dans l'adversité",
        ctx: "Possible — mais le texte ne précise pas que c'est de l'aumône" },
      { s: "gaspillent", st: "no",
        ref: "2:195", phon: "wa-anfiqu fi sabili llah", tr: "Et faites circuler dans le chemin de Dieu",
        ctx: "Exclu : le contexte est toujours positif et orienté" }
    ],
    occs: [
      { before: { ref:"2:2", ar:"ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", phon:"dhalika l-kitabu la rayba fih", tr:"Cette prescription — aucun trouble en elle" },
        main:   { ref:"2:3", ar:"وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ", phon:"wa-mimma razaqnahum yunfiqun", tr:"Et de ce que Nous avons pourvu, ils font circuler" },
        after:  { ref:"2:4", ar:"وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ", phon:"wa-lladhina yu'minuna bima unzila ilayk", tr:"Et ceux qui s'engagent envers ce qui t'a été envoyé" } },
      { before: { ref:"2:194", ar:"الشَّهْرُ الْحَرَامُ بِالشَّهْرِ الْحَرَامِ", phon:"ash-shahru l-haramu bi-sh-shahri l-haram", tr:"Le mois sacré pour le mois sacré" },
        main:   { ref:"2:195", ar:"وَأَنفِقُوا فِي سَبِيلِ اللَّهِ", phon:"wa-anfiqu fi sabili llah", tr:"Et faites circuler dans le chemin de Dieu" },
        after:  { ref:"2:196", ar:"وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ", phon:"wa-atimmu l-hajja wa-l-'umra", tr:"Et accomplissez le pèlerinage" } },
      { before: { ref:"3:133", ar:"وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ", phon:"wa-sari'u ila maghfiratin min rabbikum", tr:"Hâtez-vous vers un pardon de votre éducateur" },
        main:   { ref:"3:134", ar:"الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ", phon:"alladhina yunfiquna fi s-sarra'i wa-d-darra'", tr:"Ceux qui font circuler dans l'aisance et dans l'adversité" },
        after:  { ref:"3:135", ar:"وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً", phon:"wa-lladhina idha fa'alu fahishatan", tr:"Et ceux qui, quand ils commettent une turpitude" } },
      { before: { ref:"16:74", ar:"فَلَا تَضْرِبُوا لِلَّهِ الْأَمْثَالَ", phon:"fa-la tadribu li-llahi l-amthal", tr:"Ne donnez pas à Dieu des exemples" },
        main:   { ref:"16:75", ar:"فَهُوَ يُنفِقُ مِنْهُ سِرًّا وَجَهْرًا", phon:"fa-huwa yunfiqu minhu sirran wa-jahran", tr:"Il en fait circuler discrètement et ouvertement" },
        after:  { ref:"16:76", ar:"وَضَرَبَ اللَّهُ مَثَلًا رَّجُلَيْنِ", phon:"wa-daraba llahu mathalan rajulayni", tr:"Et Dieu propose un exemple avec deux hommes" } },
      { before: { ref:"57:9", ar:"وَمَا لَكُمْ لَا تُؤْمِنُونَ بِاللَّهِ", phon:"wa-ma lakum la tu'minuna bi-llah", tr:"Pourquoi ne vous engagez-vous pas envers Dieu ?" },
        main:   { ref:"57:10", ar:"وَمَا لَكُمْ أَلَّا تُنفِقُوا فِي سَبِيلِ اللَّهِ", phon:"wa-ma lakum alla tunfiqu fi sabili llah", tr:"Pourquoi ne faites-vous pas circuler dans le chemin de Dieu ?" },
        after:  { ref:"57:11", ar:"مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا", phon:"man dha lladhia yuqridu llaha qardan hasana", tr:"Qui est-ce qui prête à Dieu un prêt généreux ?" } }
    ],
    daily: [
      { ar: "أَنْفَقَ كُلَّ مَالِهِ فِي التَّعْلِيمِ", phon: "anfaqa kulla malihi fi t-ta'lim", fr: "Il a mis en circulation tout son argent dans l'éducation" },
      { ar: "النَّفَقَةُ وَاجِبَةٌ عَلَى الزَّوْجِ", phon: "an-nafaqatu wajibatun 'ala z-zawj", fr: "La pension alimentaire (nafaqa, même racine) est obligatoire pour le mari" },
      { ar: "الطَّرِيقُ يَمُرُّ فِي نَفَقٍ", phon: "at-tariqu yamurru fi nafaq", fr: "La route passe dans un tunnel (nafaq, même racine)" }
    ],
    coh: "171 occurrences. Nafaq = tunnel/passage. Nafaqa = pension. Retenu : faire circuler une ressource."
  }
}
