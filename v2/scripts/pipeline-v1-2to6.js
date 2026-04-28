// Pipeline Maison — Versets 1:2 à 1:6
// Source : Lane's Arabic-English Lexicon (Edward Lane, 1863)
// Règles : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

// ═══════════════════════════════════════
// DONNÉES PAR RACINE (sens étymologiques)
// ═══════════════════════════════════════

const ROOTS = {
  // alh (250) et rhm (251) déjà insérés par v1:1
  // srt (262) déjà inséré par v1:7
  hmd: { id: 252, senses: [
    { sense: 'louange', sense_ar: 'حَمْدٌ', description: 'Éloge adressé à quelqu\'un pour ses qualités ou ses actes. Contrairement à la gratitude (shukr) qui nécessite un bienfait reçu, la louange peut être donnée sans avoir reçu de faveur.', display_order: 1 },
    { sense: 'gratitude', sense_ar: 'حَمِدَ', description: 'Remercier quelqu\'un pour un bienfait reçu, avec admiration et respect. Quand la louange est motivée par une faveur accordée.', display_order: 2 },
    { sense: 'être satisfait', sense_ar: 'حَمِيد', description: 'Être content, approuver. Trouver que quelque chose est digne d\'éloge et de contentement.', display_order: 3 },
    { sense: 'être en colère', sense_ar: 'حَمِدَ', description: 'Sens secondaire attesté dans le Lane\'s dans la construction "hamida alayhi" : être en colère contre quelqu\'un.', display_order: 4 },
    { sense: 'récompenser', sense_ar: 'حَمْد', description: 'Donner en retour, compenser. Le Lane\'s note le sens de récompense et de rétribution.', display_order: 5 },
  ]},
  rbb: { id: 253, senses: [
    { sense: 'augmenter', sense_ar: 'رَبَا', description: 'Croître, s\'accroître, devenir plus grand. Sens physique premier de la racine : la croissance naturelle.', display_order: 1 },
    { sense: 'élever', sense_ar: 'رَبَّى', description: 'Élever un enfant, le faire grandir, le nourrir et l\'éduquer. L\'acte de celui qui accompagne la croissance de l\'autre.', display_order: 2 },
    { sense: 'seigneur', sense_ar: 'رَبّ', description: 'Maître, celui qui possède et qui gère. Celui qui a l\'autorité et la responsabilité sur quelque chose ou quelqu\'un.', display_order: 3 },
    { sense: 'éminence', sense_ar: 'رُبْوَة', description: 'Colline, élévation de terrain. Extension physique de la croissance : ce qui a grandi et dépasse.', display_order: 4 },
    { sense: 'usure', sense_ar: 'رِبًا', description: 'Addition obtenue dans le commerce par un moyen illicite. Augmentation injuste d\'une dette.', display_order: 5 },
    { sense: 'entretenir', sense_ar: 'رَبَّ', description: 'Prendre soin de quelque chose, le maintenir en bon état. Gérer et administrer.', display_order: 6 },
    { sense: 'essoufflement', sense_ar: 'رَبْو', description: 'État de celui qui est à bout de souffle, respiration coupée par la fatigue. Sens physique.', display_order: 7 },
  ]},
  elm: { id: 254, senses: [
    { sense: 'savoir', sense_ar: 'عِلْم', description: 'Connaissance acquise, science. La qualité la plus haute comme attribut selon le Lane\'s. Certitude et compréhension profonde.', display_order: 1 },
    { sense: 'connaître', sense_ar: 'عَلِمَ', description: 'Prendre conscience de quelque chose, être informé. L\'acte d\'acquérir la connaissance.', display_order: 2 },
    { sense: 'marquer', sense_ar: 'عَلَمَ', description: 'Faire une marque distinctive, désigner par un signe. Sens physique de la racine.', display_order: 3 },
    { sense: 'enseigner', sense_ar: 'عَلَّمَ', description: 'Transmettre un savoir à quelqu\'un. Forme II du verbe : faire en sorte que l\'autre sache.', display_order: 4 },
    { sense: 'monde', sense_ar: 'عَالَم', description: 'L\'ensemble des créatures, l\'univers. Ce par quoi on connaît le Créateur : le monde est un signe (une marque) de Celui qui l\'a créé.', display_order: 5 },
    { sense: 'drapeau', sense_ar: 'عَلَم', description: 'Étendard, bannière. Marque distinctive visible de loin. Extension du sens de marquer.', display_order: 6 },
    { sense: 'montagne', sense_ar: 'عَلَم', description: 'Repère naturel, ce qui sert de point de référence dans le paysage. Comme un drapeau naturel.', display_order: 7 },
    { sense: 'savant', sense_ar: 'عَالِم', description: 'Celui qui possède le savoir, le lettré. Extension humaine du savoir.', display_order: 8 },
  ]},
  mlk: { id: 256, senses: [
    { sense: 'posséder', sense_ar: 'مَلَكَ', description: 'Avoir la propriété exclusive de quelque chose. Détenir avec autorité et droit.', display_order: 1 },
    { sense: 'maître', sense_ar: 'مَالِك', description: 'Celui qui possède et exerce l\'autorité. Le possesseur qui commande et interdit. Participe actif : celui qui est en train de posséder.', display_order: 2 },
    { sense: 'roi', sense_ar: 'مَلِك', description: 'Souverain qui exerce le pouvoir sur un peuple. Celui qui a le pouvoir de commander et d\'interdire sur les gens.', display_order: 3 },
    { sense: 'royaume', sense_ar: 'مَمْلَكَة', description: 'Territoire sous l\'autorité d\'un souverain. Le domaine sur lequel s\'exerce la possession.', display_order: 4 },
    { sense: 'ange', sense_ar: 'مَلَك', description: 'Messager qui transmet la communication divine. Le Lane\'s lie ce sens à la racine m-l-k par l\'idée de message et d\'envoi.', display_order: 5 },
    { sense: 'esclave', sense_ar: 'مَمْلُوك', description: 'Celui dont la volonté est soumise à l\'autorité d\'un autre. Le contraire du possesseur.', display_order: 6 },
    { sense: 'propriété', sense_ar: 'مِلْك', description: 'Les biens possédés : maisons et terres. Ce qui appartient à quelqu\'un.', display_order: 7 },
  ]},
  ywm: { id: 257, senses: [
    { sense: 'jour', sense_ar: 'يَوْم', description: 'Période de temps, que ce soit le jour ou la nuit. Le temps en général, pas seulement la période de lumière.', display_order: 1 },
    { sense: 'journée', sense_ar: 'يَوْم', description: 'La période entre le lever et le coucher du soleil. Le temps de lumière.', display_order: 2 },
    { sense: 'événement', sense_ar: 'يَوْم', description: 'Un accident, un fait marquant. Le Lane\'s donne : "an accident, or event". Un jour particulier qui se distingue.', display_order: 3 },
    { sense: 'combat', sense_ar: 'يَوْم', description: 'Un jour de bataille. "Ayyam al-arab" désigne les batailles des Arabes. Le jour où l\'on "gagne le jour".', display_order: 4 },
    { sense: 'étape', sense_ar: 'يَوْم', description: 'La distance parcourue en un jour de marche. Une mesure de distance par le temps.', display_order: 5 },
  ]},
  dyn: { id: 258, senses: [
    { sense: 'obéir', sense_ar: 'دَانَ', description: 'Être obéissant, se soumettre. Accepter l\'autorité de quelqu\'un et suivre ses directives.', display_order: 1 },
    { sense: 'religion', sense_ar: 'دِين', description: 'Le système de croyances et de pratiques auquel on se soumet. L\'ensemble des règles que l\'on suit.', display_order: 2 },
    { sense: 'dette', sense_ar: 'دَيْن', description: 'Ce que l\'on doit à un créancier. L\'obligation financière qui lie le débiteur au créancier.', display_order: 3 },
    { sense: 'rétribution', sense_ar: 'دِين', description: 'Le fait de rendre à chacun ce qu\'il mérite. Récompense ou punition selon les actes. Le Lane\'s note le sens de "repayment, requital, compensation".', display_order: 4 },
    { sense: 'habitude', sense_ar: 'دِين', description: 'Coutume, pratique établie. Ce que l\'on fait de manière régulière et constante.', display_order: 5 },
    { sense: 'soumission', sense_ar: 'دِين', description: 'L\'état de celui qui est assujetti. L\'autorité exercée sur quelqu\'un. Le Lane\'s note "subdual, subjection".', display_order: 6 },
    { sense: 'jugement', sense_ar: 'دِين', description: 'Le moment où les comptes sont rendus. Quand chacun reçoit ce qu\'il mérite pour ses actes.', display_order: 7 },
  ]},
  ebd: { id: 259, senses: [
    { sense: 'adorer', sense_ar: 'عَبَدَ', description: 'Servir, vouer un culte, se dévouer entièrement. L\'acte de dévotion totale envers Dieu ou ce qu\'on prend pour divinité.', display_order: 1 },
    { sense: 'serviteur', sense_ar: 'عَبْد', description: 'Celui qui sert et obéit. Aussi : esclave, celui dont la volonté est soumise à un autre. Contraire de libre (hurr).', display_order: 2 },
    { sense: 'être humain', sense_ar: 'عَبْد', description: 'L\'homme en tant que serviteur de Dieu. Le Lane\'s note que abd peut signifier "a man, or human being" dans le sens de créature soumise à Dieu.', display_order: 3 },
    { sense: 'soumettre', sense_ar: 'عَبَّدَ', description: 'Rendre soumis, assujettir. Forme II : forcer quelqu\'un à la servitude ou aplanir un chemin (le rendre praticable).', display_order: 4 },
    { sense: 'être en colère', sense_ar: 'عَبِدَ', description: 'Être furieux, indigné, méprisant. Sens secondaire attesté dans le Lane\'s.', display_order: 5 },
  ]},
  ewn: { id: 260, senses: [
    { sense: 'aide', sense_ar: 'عَوْن', description: 'Secours, assistance, soutien. Ce qui permet d\'accomplir ce qu\'on ne peut pas faire seul.', display_order: 1 },
    { sense: 'aider', sense_ar: 'أَعَانَ', description: 'Prêter secours à quelqu\'un, lui apporter son soutien. Forme IV : accorder l\'aide.', display_order: 2 },
    { sense: 'demander l\'aide', sense_ar: 'اِسْتَعَانَ', description: 'Chercher activement le secours de quelqu\'un. Forme X : la demande d\'assistance. C\'est cette forme qui est utilisée dans le verset 1:5.', display_order: 3 },
    { sense: 's\'entraider', sense_ar: 'تَعَاوَنُوا', description: 'Se prêter mutuellement assistance. Forme VI : l\'aide réciproque.', display_order: 4 },
    { sense: 'serviteur', sense_ar: 'عَوْن', description: 'Celui qui assiste, le garde armé. Extension : la personne qui fournit l\'aide.', display_order: 5 },
  ]},
  hdy: { id: 261, senses: [
    { sense: 'guider', sense_ar: 'هَدَى', description: 'Diriger quelqu\'un vers la bonne voie, lui montrer le chemin correct. Le Lane\'s donne : "he directed him aright, or caused him to take a right way".', display_order: 1 },
    { sense: 'conduite', sense_ar: 'هَدْي', description: 'Manière d\'agir, comportement calme et posé. Le Lane\'s donne : "a way, course, method, mode, or manner of acting".', display_order: 2 },
    { sense: 'cadeau', sense_ar: 'هَدِيَّة', description: 'Présent envoyé en signe de courtoisie ou d\'honneur. Ce qu\'on offre à quelqu\'un.', display_order: 3 },
    { sense: 'offrande', sense_ar: 'هَدْي', description: 'Animal amené comme sacrifice à La Mecque. Le don sacré.', display_order: 4 },
    { sense: 'conduire une mariée', sense_ar: 'هَدَى', description: 'Accompagner la mariée vers la maison de son époux. Sens spécifique de guider dans le contexte du mariage.', display_order: 5 },
    { sense: 'trouver le chemin', sense_ar: 'اِهْتَدَى', description: 'Prendre la bonne direction soi-même, se guider. Forme VIII : la guidance intérieure.', display_order: 6 },
  ]},
  qwm: { id: 263, senses: [
    { sense: 'se lever', sense_ar: 'قَامَ', description: 'Se mettre debout, se dresser. Sens physique premier de la racine : passer de la position assise ou couchée à la position debout.', display_order: 1 },
    { sense: 'droit', sense_ar: 'مُسْتَقِيم', description: 'Ce qui est droit, sans déviation ni courbure. Forme X : ce qui se tient parfaitement droit. C\'est cette forme qui est utilisée dans le verset 1:6.', display_order: 2 },
    { sense: 'peuple', sense_ar: 'قَوْم', description: 'Un groupe de personnes, une communauté. Les gens qui se tiennent ensemble.', display_order: 3 },
    { sense: 'gérer', sense_ar: 'قَامَ بِ', description: 'Prendre en charge une affaire, l\'administrer, la diriger. Celui qui se lève pour s\'occuper de quelque chose.', display_order: 4 },
    { sense: 'valeur', sense_ar: 'قِيمَة', description: 'Le prix réel d\'une chose, ce qu\'elle vaut. L\'estimation juste.', display_order: 5 },
    { sense: 'stature', sense_ar: 'قَامَة', description: 'La taille d\'une personne debout. Extension physique du sens de se lever.', display_order: 6 },
    { sense: 'redresser', sense_ar: 'قَوَّمَ', description: 'Remettre droit ce qui était tordu, corriger. Forme II : faire en sorte que quelque chose soit droit.', display_order: 7 },
    { sense: 'subsistance', sense_ar: 'قُوت', description: 'La nourriture qui fait vivre, ce qui soutient la vie. Ce grâce à quoi on se tient debout (on survit).', display_order: 8 },
  ]},
}

// ═══════════════════════════════════════
// ANALYSES PAR VERSET
// ═══════════════════════════════════════

const VERSES = [
  {
    verse_id: 2,
    words: [
      {word_key:'hmd',sense_chosen:'louange',position:1},
      // alh déjà analysé en v1, on réutilise
      {word_key:'alh',sense_chosen:'divinité',position:3},
      {word_key:'rbb',sense_chosen:'seigneur',position:4},
      {word_key:'elm',sense_chosen:'monde',position:5},
    ],
    translation_arab: "La louange est pour Dieu, Seigneur des mondes.",
    translation_explanation: "Al-hamdu (la louange) est le sujet de la phrase. En arabe, quand une phrase commence par un nom et pas par un verbe, on appelle ça une phrase nominale (jumla ismiyya), et ça donne un sens de vérité permanente : la louange est pour Dieu, ça a toujours été et ça sera toujours. La particule li (pour) indique à qui elle est destinée : la louange revient à Dieu. Ensuite, rabbi l-alamin : le mot rabb est rattaché à alamin par ce qu'on appelle en arabe une idafa (annexion), c'est quand deux mots sont liés pour dire que le premier appartient ou est lié au second, comme quand on dit \"la porte de la maison\". Ici : le Seigneur des mondes. Le mot rabb vient d'une racine qui signifie faire grandir, élever et entretenir. Le pluriel \"mondes\" (alamin) montre que cette seigneurie ne concerne pas seulement les humains mais toute la création.",
    segments: [
      {fr:"la louange",pos:"nom",phon:"al-hamdu",arabic:"ٱلْحَمْدُ",word_key:"hmd",is_particle:false,sense_retenu:"louange"},
      {fr:"pour",phon:"li",arabic:"لِ",word_key:null,is_particle:true},
      {fr:"Dieu",pos:"nom",phon:"allahi",arabic:"ٱللَّهِ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
      {fr:"Seigneur",pos:"nom",phon:"rabbi",arabic:"رَبِّ",word_key:"rbb",is_particle:false,sense_retenu:"seigneur"},
      {fr:"des mondes",pos:"nom",phon:"al-alamin",arabic:"ٱلْعَـٰلَمِينَ",word_key:"elm",is_particle:false,sense_retenu:"monde"},
    ],
  },
  {
    verse_id: 3,
    words: [
      {word_key:'rhm',sense_chosen:'miséricorde',position:1},
      {word_key:'rhm',sense_chosen:'miséricorde',position:2},
    ],
    translation_arab: "Le Tout-Miséricordieux, le Miséricordieux.",
    translation_explanation: "Ce verset continue la description de Dieu commencée au verset 2. Les deux mots ar-rahman et ar-rahim viennent de la même racine (r-h-m, qui a pour sens physique premier l'utérus, le lieu où la vie se forme dans la douceur et la protection). Ar-rahman est construit sur un modèle (qu'on appelle en arabe un wazn, c'est comme un moule qui donne une forme particulière au mot) qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout. C'est pour ça qu'on traduit \"le Tout-Miséricordieux\". Ar-rahim est construit sur un modèle qui exprime une qualité permanente, qui ne s'arrête jamais, un trait de caractère constant. C'est pour ça qu'on traduit \"le Miséricordieux\" (sans \"Tout\"). Cette répétition du verset 1 crée un encadrement : la sourate s'ouvre et se rappelle la miséricorde comme fondement.",
    segments: [
      {fr:"le Tout-Miséricordieux",pos:"adjectif",phon:"ar-rahmani",arabic:"ٱلرَّحْمَـٰنِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
      {fr:"le Miséricordieux",pos:"adjectif",phon:"ar-rahimi",arabic:"ٱلرَّحِيمِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
    ],
  },
  {
    verse_id: 4,
    words: [
      {word_key:'mlk',sense_chosen:'maître',position:1},
      {word_key:'ywm',sense_chosen:'jour',position:2},
      {word_key:'dyn',sense_chosen:'rétribution',position:3},
    ],
    translation_arab: "Maître du Jour de la rétribution.",
    translation_explanation: "Le verset est construit comme un enchaînement (ce qu'on appelle en arabe une idafa, quand un mot est rattaché au suivant pour dire qu'il lui appartient, comme \"la porte de la maison\"). Ici c'est une triple idafa : Malik (le maître, celui qui possède) possède le Jour (yawm), et ce Jour est celui de la rétribution (ad-din). Chaque mot complète le précédent, comme quand on dit en français \"le propriétaire de la maison du quartier\". La forme malik (avec un a long, c'est un participe actif) désigne celui qui possède avec autorité. C'est différent de malik (avec un a court) qui veut dire roi. \"Maître\" est choisi car c'est du français courant pour exprimer la possession avec autorité. Le mot din est traduit par \"rétribution\" car le Lane's le définit comme \"repayment, requital\" : le moment où chacun reçoit ce qu'il mérite pour ses actes.",
    segments: [
      {fr:"Maître",pos:"nom",phon:"maliki",arabic:"مَـٰلِكِ",word_key:"mlk",is_particle:false,sense_retenu:"maître"},
      {fr:"du Jour",pos:"nom",phon:"yawmi",arabic:"يَوْمِ",word_key:"ywm",is_particle:false,sense_retenu:"jour"},
      {fr:"de la rétribution",pos:"nom",phon:"ad-dini",arabic:"ٱلدِّينِ",word_key:"dyn",is_particle:false,sense_retenu:"rétribution"},
    ],
  },
  {
    verse_id: 5,
    words: [
      {word_key:'ebd',sense_chosen:'adorer',position:2},
      {word_key:'ewn',sense_chosen:'demander l\'aide',position:5},
    ],
    translation_arab: "C'est Toi seul que nous adorons et c'est Toi seul dont nous demandons l'aide.",
    translation_explanation: "En arabe, quand on place le complément avant le verbe (ce qu'on appelle le taqdim), ça sert à marquer l'exclusivité : seulement Toi. C'est pour ça qu'on traduit \"c'est Toi seul\". Cette structure est répétée deux fois dans le verset, ce qui crée un parallélisme (deux phrases construites de la même façon). La première fois pour l'adoration : na'budu (nous adorons, forme I, la forme de base du verbe). La deuxième pour l'aide : nasta'inu (nous demandons l'aide, forme X, cette forme en arabe ajoute l'idée de chercher ou demander activement quelque chose). Nous ne recevons pas l'aide passivement, nous la demandons activement.",
    segments: [
      {fr:"c'est Toi seul",phon:"iyyaka",arabic:"إِيَّاكَ",word_key:null,is_particle:true},
      {fr:"que nous adorons",pos:"verbe",phon:"na'budu",arabic:"نَعْبُدُ",word_key:"ebd",is_particle:false,sense_retenu:"adorer"},
      {fr:"et",phon:"wa",arabic:"وَ",word_key:null,is_particle:true},
      {fr:"c'est Toi seul",phon:"iyyaka",arabic:"إِيَّاكَ",word_key:null,is_particle:true},
      {fr:"dont nous demandons l'aide",pos:"verbe",phon:"nasta'inu",arabic:"نَسْتَعِينُ",word_key:"ewn",is_particle:false,sense_retenu:"demander l'aide"},
    ],
  },
  {
    verse_id: 6,
    words: [
      {word_key:'hdy',sense_chosen:'guider',position:1},
      {word_key:'srt',sense_chosen:'chemin',position:2},
      {word_key:'qwm',sense_chosen:'droit',position:3},
    ],
    translation_arab: "Guide-nous sur le droit chemin.",
    translation_explanation: "Ihdina est un verbe à l'impératif (c'est un ordre, une demande) avec le suffixe na (nous), donc \"guide-nous\". C'est ce qu'on appelle en arabe un verbe au mode jussif utilisé comme prière. As-sirata est le chemin, le complément du verbe, ce vers quoi on demande à être guidé. Al-mustaqima est un adjectif qui qualifie le chemin : il est droit, sans déviation. C'est la forme X du verbe qama (se lever, se tenir debout), qui ajoute le sens de \"se tenir parfaitement droit\". L'article défini al- (le) devant sirat et mustaqim est important : il montre que c'est LE chemin précis et connu, pas n'importe quel chemin. On ne demande pas un chemin au hasard, on demande celui qui est déjà établi.",
    segments: [
      {fr:"guide-nous",pos:"verbe",phon:"ihdina",arabic:"ٱهْدِنَا",word_key:"hdy",is_particle:false,sense_retenu:"guider"},
      {fr:"le chemin",pos:"nom",phon:"as-sirata",arabic:"ٱلصِّرَٰطَ",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
      {fr:"le droit",pos:"adjectif",phon:"al-mustaqima",arabic:"ٱلْمُسْتَقِيمَ",word_key:"qwm",is_particle:false,sense_retenu:"droit"},
    ],
  },
]

// Axes simplifiés pour les racines (retenu + probables)
const AXES = {
  hmd: {
    louange: { status:'retenu', proof_ctx:'La louange est l\'éloge adressé pour les qualités ou les actes. Contrairement à la gratitude (shukr) qui nécessite un bienfait reçu, la louange peut être donnée librement. Le verset dit "al-hamdu li-llahi" (la louange est pour Dieu), c\'est une déclaration universelle. Distinction avec gratitude : la gratitude est conditionnelle (on remercie pour quelque chose de reçu), la louange est inconditionnelle (on loue pour ce que l\'autre est).',
      axe1_verset:'Le verset déclare que la louange revient à Dieu. Le champ lexical est celui de la déclaration et de l\'attribution. La louange est le sujet de la phrase, c\'est le concept central.',
      axe2_voisins:'Les versets suivants qualifient Dieu (Seigneur des mondes, Miséricordieux, Maître du Jour). La louange ouvre cette série de qualifications.',
      axe3_sourate:'La Fatiha s\'ouvre par la louange, ce qui pose le ton de la sourate : reconnaissance et éloge.',
      axe4_coherence:'Le Coran utilise al-hamdu li-llahi dans de nombreux passages comme formule de louange universelle.',
      axe5_frequence:'La louange est l\'attitude fondamentale du khalifa envers Dieu. C\'est la reconnaissance qui motive l\'action juste.',
    },
    gratitude: { status:'probable', proof_ctx:'La gratitude est le remerciement pour un bienfait reçu. La louange est plus large car elle ne nécessite pas de bienfait préalable. Le verset dit "la louange est pour Dieu", pas "merci à Dieu".',
      axe1_verset:'La gratitude s\'inscrit dans le champ lexical du verset mais est plus restrictive que la louange.',
      axe2_voisins:'Les versets voisins décrivent les qualités de Dieu, pas les bienfaits reçus.',
      axe3_sourate:'La sourate pose une relation de louange, pas juste de remerciement.',
      axe4_coherence:'Le Coran distingue hamd (louange) de shukr (gratitude).',
      axe5_frequence:'La gratitude est conditionnelle, la louange est permanente.',
    },
    'être satisfait': { status:'peu_probable', proof_ctx:'Être satisfait est un état intérieur. La louange est un acte d\'expression. Le verset exprime, il ne constate pas un état.',
      axe1_verset:'Le verset est une déclaration active, pas un constat de satisfaction.',axe2_voisins:'Les versets voisins qualifient Dieu activement.',axe3_sourate:'La sourate est active, pas contemplative.',axe4_coherence:'Le Coran utilise hamd pour l\'expression de louange, pas pour la satisfaction.',axe5_frequence:'La satisfaction est passive, la louange est active.',
    },
    'être en colère': { status:'nul', proof_ctx:'Sens secondaire dans une construction spécifique ("hamida alayhi"). Aucun rapport avec le verset.' },
    'récompenser': { status:'nul', proof_ctx:'Sens de rétribution. Le verset parle de louange donnée à Dieu, pas de récompense.' },
  },
  rbb: {
    seigneur: { status:'retenu', proof_ctx:'Le "seigneur" est celui qui possède, élève et entretient. Le Lane\'s donne la racine comme augmenter/croître, et rabb comme celui qui fait croître et gère. Dans le verset, rabb al-alamin (Seigneur des mondes) décrit celui qui élève et entretient toute la création. Test de compatibilité grammaticale : le mot est en idafa avec al-alamin. "Seigneur des mondes" fonctionne parfaitement. Distinction avec "roi" : le roi commande, le seigneur nourrit et fait grandir. La racine insiste sur l\'éducation et l\'entretien, pas sur le pouvoir brut.',
      axe1_verset:'Le verset qualifie Dieu comme rabb al-alamin. Le champ lexical est celui de la seigneurie universelle, de l\'autorité bienveillante qui s\'étend à toute la création.',
      axe2_voisins:'Les versets voisins qualifient Dieu par la miséricorde (v1,3) et la maîtrise (v4). La seigneurie s\'inscrit entre la miséricorde et l\'autorité.',
      axe3_sourate:'La Fatiha décrit Dieu sous plusieurs facettes. La seigneurie est la première qualification après la louange.',
      axe4_coherence:'Le Coran utilise rabb des milliers de fois pour Dieu. C\'est l\'un des mots les plus fréquents.',
      axe5_frequence:'Le seigneur qui élève et entretient est le modèle du khalifa : diriger en nourrissant et en faisant grandir, pas en dominant.',
    },
    'élever': { status:'probable', proof_ctx:'Élever est le sens verbal de la racine (faire grandir un enfant). Le verset utilise le nom rabb (celui qui élève), pas le verbe (élever). Le seigneur est celui qui élève.',
      axe1_verset:'Élever s\'inscrit dans le champ lexical du verset.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Le Coran utilise rabba pour élever mais ici c\'est le nom rabb.',axe5_frequence:'Élever est l\'action, le seigneur est celui qui la fait.',
    },
    entretenir: { status:'probable', proof_ctx:'Entretenir est une des fonctions du rabb. Mais c\'est une partie du sens, pas le tout. Le seigneur élève ET entretient.',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    augmenter: { status:'nul', proof_ctx:'Sens physique premier (croître). Le verset parle de la relation entre Dieu et les mondes, pas de croissance physique.' },
    'éminence': { status:'nul', proof_ctx:'Colline, élévation de terrain. Hors contexte.' },
    usure: { status:'nul', proof_ctx:'Addition illicite dans le commerce. Hors contexte.' },
    essoufflement: { status:'nul', proof_ctx:'État physique de fatigue. Hors contexte.' },
  },
  elm: {
    monde: { status:'retenu', proof_ctx:'Le "monde" (alam) est l\'ensemble des créatures. Le pluriel alamin (les mondes) indique la totalité de la création. Le Lane\'s lie ce mot à la racine "marquer" : le monde est ce par quoi on connaît le Créateur, un signe qui pointe vers Celui qui l\'a fait. Test de compatibilité grammaticale : nom défini avec al-. "Les mondes" fonctionne. Distinction avec "savoir" : le savoir est la connaissance, le monde est ce qui est connu. Les deux viennent de la même racine car le monde est la marque visible du Créateur.',
      axe1_verset:'Le verset dit "rabb al-alamin" (Seigneur des mondes). Le champ lexical est celui de la création universelle.',
      axe2_voisins:'Les versets voisins parlent de Dieu dans sa relation avec la totalité. Les mondes englobent tout.',
      axe3_sourate:'La Fatiha pose Dieu comme Seigneur de tout ce qui existe.',
      axe4_coherence:'Le Coran utilise alamin pour l\'ensemble de la création. Cohérent.',
      axe5_frequence:'Les mondes incluent tous les êtres, donc tous les porteurs de dignité humaine.',
    },
    savoir: { status:'probable', proof_ctx:'Le savoir est le sens premier du verbe. Mais dans le verset, c\'est le nom alam (monde) qui est utilisé, pas ilm (savoir).',
      axe1_verset:'Le verset utilise alamin (pluriel de alam = monde), pas ilm (savoir).',axe2_voisins:'Compatible dans l\'absolu mais le mot est alam, pas ilm.',axe3_sourate:'Compatible.',axe4_coherence:'Le Coran distingue alam (monde) de ilm (savoir).',axe5_frequence:'Le savoir est important mais le verset parle des mondes.',
    },
    marquer: { status:'nul', proof_ctx:'Faire une marque. Sens physique premier. Le verset parle des mondes, pas de marques.' },
    enseigner: { status:'nul', proof_ctx:'Transmettre un savoir. Le verset parle de la seigneurie sur les mondes.' },
    drapeau: { status:'nul', proof_ctx:'Étendard. Hors contexte.' },
    montagne: { status:'nul', proof_ctx:'Repère naturel. Hors contexte.' },
    savant: { status:'nul', proof_ctx:'Celui qui sait. Le verset parle des mondes, pas des savants.' },
    'connaître': { status:'nul', proof_ctx:'Prendre conscience. Le verset utilise alam (monde), pas le verbe alima (connaître).' },
  },
  mlk: {
    'maître': { status:'retenu', proof_ctx:'Le "maître" (malik, avec a long = participe actif) est celui qui possède avec autorité. Le Lane\'s définit malik comme "the possessor of command, or rule". Test de compatibilité grammaticale : le mot est en idafa avec yawm. "Maître du Jour" fonctionne. Distinction avec "roi" : malik (a court) = roi qui règne sur un peuple. Malik (a long) = possesseur qui détient avec autorité. Le verset utilise la forme avec a long (participe actif = celui qui est en train de posséder).',
      axe1_verset:'Le verset dit "maliki yawmi d-din" (Maître du Jour de la rétribution). Le champ lexical est celui de l\'autorité et de la possession.',
      axe2_voisins:'Le verset 2 dit que Dieu est Seigneur des mondes (rabb). Le verset 4 ajoute qu\'il est Maître du Jour. La progression va de la seigneurie (élever) à la maîtrise (posséder).',
      axe3_sourate:'La Fatiha qualifie Dieu avec des titres de plus en plus forts : miséricordieux, seigneur, maître.',
      axe4_coherence:'Le Coran utilise malik et malik pour Dieu dans différents contextes. Les deux sont attestés.',
      axe5_frequence:'Le maître possède avec autorité. Pour le khalifa, c\'est un modèle de responsabilité : posséder implique entretenir, pas dominer.',
    },
    roi: { status:'probable', proof_ctx:'Le roi (malik, a court) est le souverain qui commande un peuple. Le verset utilise malik (a long) = possesseur. Les deux sont attestés dans les lectures coraniques. Mais la forme participe actif (a long) insiste sur la possession active, pas sur la royauté.',
      axe1_verset:'Le roi est compatible avec le champ lexical de l\'autorité.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Les deux lectures (malik et malik) sont attestées.',axe5_frequence:'Le roi commande, le maître possède. La possession implique plus de responsabilité.',
    },
    'posséder': { status:'probable', proof_ctx:'Posséder est le sens verbal de la racine. Le verset utilise le participe actif malik (celui qui possède). Les deux sont liés.',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    royaume: { status:'nul', proof_ctx:'Territoire sous autorité. Le verset parle d\'un Jour, pas d\'un territoire.' },
    ange: { status:'nul', proof_ctx:'Messager divin. Hors contexte.' },
    esclave: { status:'nul', proof_ctx:'Celui qui est soumis. Contraire du sens ici.' },
    'propriété': { status:'nul', proof_ctx:'Biens possédés. Le verset parle d\'autorité, pas de biens matériels.' },
  },
  ywm: {
    jour: { status:'retenu', proof_ctx:'Le "jour" est la période de temps. Le Lane\'s donne "a time, whether night or day; time absolutely". Dans le verset, yawm ad-din (le Jour de la rétribution) désigne un moment précis et connu. Test de compatibilité : nom en idafa avec ad-din. "Jour de la rétribution" fonctionne. Distinction avec "événement" : l\'événement est ce qui arrive, le jour est le moment où ça arrive. Le verset parle du moment, pas de ce qui s\'y passe.',
      axe1_verset:'Le verset dit "yawmi d-din" (Jour de la rétribution). Le champ lexical est celui du temps et de l\'échéance.',
      axe2_voisins:'Les versets voisins qualifient Dieu. Le verset 4 ajoute la dimension temporelle : Dieu est aussi maître du temps.',
      axe3_sourate:'La Fatiha qualifie Dieu hors du temps (miséricordieux) et dans le temps (maître du Jour).',
      axe4_coherence:'Le Coran utilise yawm pour des jours spécifiques (Jour du Jugement, Jour de la Résurrection).',
      axe5_frequence:'Le Jour de la rétribution est le moment où la mission du khalifa est évaluée.',
    },
    'événement': { status:'probable', proof_ctx:'L\'événement est ce qui arrive. Le jour est le moment. Le verset insiste sur le moment (yawm), pas sur l\'événement lui-même.',
      axe1_verset:'Compatible mais moins précis.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Le Coran utilise yawm pour le moment, pas pour l\'événement.',axe5_frequence:'Compatible.',
    },
    journée: { status:'nul', proof_ctx:'Période de lumière entre lever et coucher du soleil. Le verset parle d\'un Jour cosmique, pas d\'une journée ordinaire.' },
    combat: { status:'nul', proof_ctx:'Jour de bataille. Hors contexte.' },
    'étape': { status:'nul', proof_ctx:'Distance parcourue en un jour. Hors contexte.' },
  },
  dyn: {
    'rétribution': { status:'retenu', proof_ctx:'La "rétribution" est le fait de rendre à chacun ce qu\'il mérite. Le Lane\'s donne "repayment, requital, compensation". Dans le verset, "yawm ad-din" (Jour de la rétribution) est le moment où les comptes sont rendus. Test de compatibilité : nom défini avec al-. "La rétribution" fonctionne. Distinction avec "religion" : la religion est le système qu\'on suit, la rétribution est le résultat final. Le verset parle du Jour du résultat, pas du Jour du système. Distinction avec "jugement" : le jugement est l\'acte d\'évaluer, la rétribution est le résultat de cette évaluation.',
      axe1_verset:'Le verset dit "maliki yawmi d-din" (Maître du Jour de la rétribution). Le champ lexical est celui de l\'échéance et des comptes à rendre.',
      axe2_voisins:'Les versets voisins posent Dieu comme Seigneur miséricordieux. Le verset 4 ajoute la dimension de la rétribution : la miséricorde n\'exclut pas la justice.',
      axe3_sourate:'La Fatiha pose les fondements : miséricorde ET rétribution. Les deux coexistent.',
      axe4_coherence:'Le Coran utilise yawm ad-din dans d\'autres passages pour le Jour où chacun reçoit ce qu\'il mérite.',
      axe5_frequence:'La rétribution est le mécanisme qui rend la mission du khalifa significative : les actes ont des conséquences. Sans rétribution, pas de responsabilité.',
    },
    jugement: { status:'probable', proof_ctx:'Le jugement est l\'acte d\'évaluer. La rétribution est le résultat de cette évaluation. Le verset parle du Jour du résultat (chacun reçoit ce qu\'il mérite), pas du Jour de l\'évaluation.',
      axe1_verset:'Compatible mais la rétribution est plus précise.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Le Coran utilise din aussi dans le sens de jugement.',axe5_frequence:'Le jugement évalue, la rétribution distribue.',
    },
    religion: { status:'probable', proof_ctx:'La religion est le système de croyances. Le Jour de la religion ne fait pas sens en français courant. Le Jour de la rétribution fait sens.',
      axe1_verset:'"Jour de la religion" ne fonctionne pas aussi bien que "Jour de la rétribution" en français courant.',axe2_voisins:'Compatible dans l\'absolu.',axe3_sourate:'La sourate parle de la relation avec Dieu, compatible.',axe4_coherence:'Le Coran utilise din dans les deux sens.',axe5_frequence:'Compatible.',
    },
    dette: { status:'peu_probable', proof_ctx:'La dette financière. Le verset parle d\'un Jour cosmique, pas de commerce.',
      axe1_verset:'Le Jour de la dette n\'a pas de sens dans ce contexte.',axe2_voisins:'Hors contexte.',axe3_sourate:'Hors thème.',axe4_coherence:'Le Coran utilise dayn pour la dette financière, pas din.',axe5_frequence:'Hors sujet.',
    },
    'obéir': { status:'nul', proof_ctx:'Se soumettre. Le verset parle d\'un Jour, pas de l\'acte d\'obéir.' },
    habitude: { status:'nul', proof_ctx:'Coutume. "Jour de la coutume" n\'a pas de sens.' },
    soumission: { status:'nul', proof_ctx:'État d\'assujettissement. "Jour de la soumission" ne correspond pas au sens du verset.' },
  },
  ebd: {
    adorer: { status:'retenu', proof_ctx:'Adorer est le sens premier de la racine : servir, vouer un culte, se dévouer entièrement. Le verset dit "iyyaka nabudu" (c\'est Toi seul que nous adorons). Test de compatibilité grammaticale : verbe inaccompli (action en cours). "Nous adorons" fonctionne. Distinction avec "serviteur" : le serviteur est celui qui adore, adorer est l\'action. Le verset utilise le verbe (l\'action), pas le nom (la personne).',
      axe1_verset:'Le verset est une déclaration d\'adoration exclusive. Le champ lexical est celui de la dévotion et de l\'exclusivité.',
      axe2_voisins:'Les versets précédents qualifient Dieu. Le verset 5 est la réponse : après avoir décrit Dieu, on déclare qu\'on L\'adore.',
      axe3_sourate:'La Fatiha passe de la description de Dieu (v1-4) à l\'engagement de l\'humain (v5). L\'adoration est le pivot.',
      axe4_coherence:'Le Coran utilise nabudu (nous adorons) dans ce sens précis. Parfaitement cohérent.',
      axe5_frequence:'L\'adoration est la mission première du khalifa. C\'est par l\'adoration qu\'on reconnaît la Divinité et qu\'on s\'engage dans la mission de justice.',
    },
    serviteur: { status:'probable', proof_ctx:'Le serviteur (abd) est celui qui adore. Le verset utilise le verbe nabudu (nous adorons), pas le nom abd (serviteur). Les deux sont liés mais le verset choisit l\'action, pas la personne.',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    'être humain': { status:'nul', proof_ctx:'L\'homme en tant que créature. Le verset parle de l\'acte d\'adorer, pas de la nature humaine.' },
    soumettre: { status:'nul', proof_ctx:'Rendre soumis (forme II). Le verset utilise la forme I (adorer), pas la forme II.' },
    'être en colère': { status:'nul', proof_ctx:'Sens secondaire. Aucun rapport avec le contexte d\'adoration.' },
  },
  ewn: {
    'demander l\'aide': { status:'retenu', proof_ctx:'Demander l\'aide (forme X : istaana) est le sens exact du verbe utilisé dans le verset (nastainu). La forme X en arabe ajoute l\'idée de chercher activement. "Nous demandons l\'aide" implique une démarche active, pas une réception passive. Test de compatibilité : verbe inaccompli. "Nous demandons l\'aide" fonctionne. Distinction avec "aide" : l\'aide est le résultat, demander l\'aide est l\'action. Le verset utilise le verbe (l\'action de demander), pas le nom (l\'aide reçue).',
      axe1_verset:'Le verset dit "iyyaka nastainu" (c\'est Toi seul dont nous demandons l\'aide). Le champ lexical est celui de la demande active et de l\'exclusivité.',
      axe2_voisins:'Le verset 5 déclare deux choses : l\'adoration et la demande d\'aide. Les deux sont complémentaires.',
      axe3_sourate:'La Fatiha demande : d\'abord l\'adoration (engagement), puis l\'aide (besoin). On s\'engage avant de demander.',
      axe4_coherence:'Le Coran utilise istaana (forme X) pour la demande d\'aide active. Cohérent.',
      axe5_frequence:'Demander l\'aide est l\'humilité du khalifa : reconnaître qu\'on ne peut pas accomplir la mission seul.',
    },
    aide: { status:'probable', proof_ctx:'L\'aide est le résultat. Demander l\'aide est l\'action. Le verset utilise le verbe (nastainu = nous demandons l\'aide), pas le nom (awn = aide).',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    aider: { status:'nul', proof_ctx:'Aider (forme IV : aana) est l\'acte de donner l\'aide. Le verset utilise la forme X (demander l\'aide), pas la forme IV (donner l\'aide).' },
    's\'entraider': { status:'nul', proof_ctx:'Aide réciproque (forme VI). Le verset parle de demander l\'aide à Dieu, pas d\'entraide entre humains.' },
    serviteur: { status:'nul', proof_ctx:'Celui qui assiste. Le verset parle de l\'acte de demander, pas de la personne qui aide.' },
  },
  hdy: {
    guider: { status:'retenu', proof_ctx:'Guider est le sens premier de la racine : diriger quelqu\'un vers la bonne voie. Le verset dit "ihdina" (guide-nous), un impératif (une demande adressée à Dieu). Test de compatibilité : verbe impératif. "Guide-nous" fonctionne parfaitement. Distinction avec "conduite" : la conduite est le comportement, guider est l\'action de montrer le chemin. Le verset demande la direction, pas le comportement.',
      axe1_verset:'Le verset est une demande de guidance. Le champ lexical est celui de la direction et du chemin.',
      axe2_voisins:'Le verset 5 déclare l\'adoration et la demande d\'aide. Le verset 6 précise ce qu\'on demande : la guidance.',
      axe3_sourate:'La Fatiha culmine dans cette demande de guidance. Tout converge vers cette prière.',
      axe4_coherence:'Le Coran utilise hada (guider) massivement. Sens parfaitement cohérent.',
      axe5_frequence:'La guidance est la condition première pour que le khalifa accomplisse sa mission. Sans direction, pas d\'action juste.',
    },
    conduite: { status:'probable', proof_ctx:'La conduite est la manière d\'agir. Le verset demande la guidance (la direction), pas la conduite (le comportement). Les deux sont liés mais le verset insiste sur la direction à suivre.',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    cadeau: { status:'nul', proof_ctx:'Présent offert. Hors contexte de demande de guidance.' },
    offrande: { status:'nul', proof_ctx:'Animal sacrifié. Hors contexte.' },
    'conduire une mariée': { status:'nul', proof_ctx:'Accompagner la mariée. Sens spécifique hors contexte.' },
    'trouver le chemin': { status:'probable', proof_ctx:'Se guider soi-même (forme VIII). Le verset demande à Dieu de guider (forme I), pas de se guider soi-même.',
      axe1_verset:'Compatible mais le verset demande la guidance de Dieu, pas l\'auto-guidance.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Le Coran distingue hada (guider) de ihtada (se guider).',axe5_frequence:'L\'auto-guidance est une conséquence de la guidance divine.',
    },
  },
  qwm: {
    droit: { status:'retenu', proof_ctx:'"Droit" (mustaqim, forme X de qama) signifie ce qui se tient parfaitement droit, sans déviation. Le Lane\'s lie la forme X à l\'idée de se tenir debout de manière parfaitement droite. Dans le verset, al-mustaqim qualifie le chemin (sirat) : le chemin droit. Test de compatibilité : adjectif défini. "Le droit" fonctionne comme qualificatif du chemin. Distinction avec "se lever" : se lever est l\'action physique, droit est l\'état résultant. Le verset décrit l\'état du chemin, pas l\'action de se lever.',
      axe1_verset:'Le verset dit "as-sirata l-mustaqim" (le chemin droit). Le champ lexical est celui de la direction et de la rectitude.',
      axe2_voisins:'Le verset 7 précisera quel est ce chemin droit. Le verset 6 le demande, le verset 7 le définit.',
      axe3_sourate:'La Fatiha demande le chemin droit comme aboutissement de la prière.',
      axe4_coherence:'Le Coran utilise al-sirat al-mustaqim comme expression récurrente. Cohérent.',
      axe5_frequence:'La rectitude est la qualité fondamentale du chemin du khalifa. Sans rectitude, la justice dévie.',
    },
    'se lever': { status:'nul', proof_ctx:'Action physique de se mettre debout. Le verset utilise la forme X (mustaqim = droit), pas la forme I (qama = se lever).' },
    peuple: { status:'nul', proof_ctx:'Communauté. Le verset parle du chemin, pas des gens.' },
    'gérer': { status:'nul', proof_ctx:'Administrer une affaire. Le verset qualifie le chemin, pas une gestion.' },
    valeur: { status:'nul', proof_ctx:'Prix d\'une chose. Hors contexte.' },
    stature: { status:'nul', proof_ctx:'Taille physique. Hors contexte.' },
    redresser: { status:'probable', proof_ctx:'Remettre droit ce qui était tordu (forme II). Le chemin mustaqim est le résultat de ce redressement. Les deux sont liés.',
      axe1_verset:'Compatible.',axe2_voisins:'Compatible.',axe3_sourate:'Compatible.',axe4_coherence:'Compatible.',axe5_frequence:'Compatible.',
    },
    subsistance: { status:'nul', proof_ctx:'Nourriture qui fait vivre. Hors contexte.' },
  },
}

// ═══════════════════════════════════════
// EXÉCUTION
// ═══════════════════════════════════════

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSETS 1:2 à 1:6')
  log('============================================')
  log('')

  // ÉTAPE 2 — Insertion des sens pour les nouvelles racines
  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  log('')
  let totalSenses = 0
  for (const [key, root] of Object.entries(ROOTS)) {
    const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
    const {error} = await db.from('word_meanings').insert(senses)
    if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
    totalSenses += senses.length
    log('  [' + key + '] ' + senses.length + ' sens insérés')
    for (const s of senses) log('    ' + s.display_order + '. ' + s.sense)
    log('')
  }
  log('  TOTAL : ' + totalSenses + ' sens pour ' + Object.keys(ROOTS).length + ' racines')
  log('')

  // ÉTAPE 3 — Axes et statuts
  log('>>> ÉTAPE 3 — ANALYSE DES SENS')
  log('')
  let updatedCount = 0
  for (const [rootKey, rootAxes] of Object.entries(AXES)) {
    log('  [' + rootKey + ']')
    const rootId = ROOTS[rootKey]?.id
    if (!rootId) { log('    racine déjà insérée (v1:1 ou v1:7)'); continue }
    const {data: meanings} = await db.from('word_meanings')
      .select('id, sense').eq('analysis_id', rootId).order('display_order')
    for (const m of meanings) {
      const axeData = rootAxes[m.sense]
      if (!axeData) { log('    ' + m.sense + ' : pas de données'); continue }
      const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
      if (axeData.axe1_verset) upd.axe1_verset = axeData.axe1_verset
      if (axeData.axe2_voisins) upd.axe2_voisins = axeData.axe2_voisins
      if (axeData.axe3_sourate) upd.axe3_sourate = axeData.axe3_sourate
      if (axeData.axe4_coherence) upd.axe4_coherence = axeData.axe4_coherence
      if (axeData.axe5_frequence) upd.axe5_frequence = axeData.axe5_frequence
      const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
      if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
      const hasAxes = axeData.axe1_verset ? ' (5 axes)' : ''
      log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + hasAxes)
      updatedCount++
    }
    log('')
  }
  log('  ' + updatedCount + ' sens mis à jour')
  log('')

  // ÉTAPE 3+4 — Pour chaque verset
  for (const v of VERSES) {
    log('--- Verset 1:' + v.verse_id + ' ---')

    // verse_word_analyses
    const {error: vwaErr} = await db.from('verse_word_analyses').insert(v.words.map(w => ({verse_id: v.verse_id, ...w})))
    if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
    else log('  ' + v.words.length + ' mots insérés : ' + v.words.map(w => w.word_key + '->' + w.sense_chosen).join(', '))

    // verse_analyses
    const {error: vaErr} = await db.from('verse_analyses').insert({
      verse_id: v.verse_id,
      translation_arab: v.translation_arab,
      translation_explanation: v.translation_explanation,
      segments: v.segments,
    })
    if (vaErr) log('  ERREUR va: ' + vaErr.message)
    else log('  Traduction : "' + v.translation_arab + '"')
    log('')
  }

  // Daily phrases pour les sens retenus des nouvelles racines
  log('>>> Phrases du quotidien')
  const daily = [
    {analysis_id:252,sense:'louange',arabic:'اَلْحَمْدُ لِلَّهِ',phon:'al-hamdu li-llahi',french:'La louange est pour Dieu'},
    {analysis_id:252,sense:'louange',arabic:'حَمِدْتُهُ عَلَى صَنِيعِهِ',phon:'hamidtuhu ala sanihi',french:"Je l'ai loué pour son acte"},
    {analysis_id:252,sense:'louange',arabic:'هُوَ مَحْمُودٌ عِنْدَ النَّاسِ',phon:'huwa mahmud inda n-nas',french:'Il est loué chez les gens'},
    {analysis_id:253,sense:'seigneur',arabic:'رَبِّ ٱلْعَالَمِينَ',phon:'rabbi l-alamin',french:'Seigneur des mondes'},
    {analysis_id:253,sense:'seigneur',arabic:'رَبَّيْتُ وَلَدِي',phon:'rabbaytu waladi',french:"J'ai élevé mon enfant"},
    {analysis_id:253,sense:'seigneur',arabic:'مَنْ رَبُّكَ؟',phon:'man rabbuka?',french:'Qui est ton seigneur ?'},
    {analysis_id:254,sense:'monde',arabic:'رَبِّ ٱلْعَالَمِينَ',phon:'rabbi l-alamin',french:'Seigneur des mondes'},
    {analysis_id:254,sense:'monde',arabic:'ٱلْعَالَمُ كَبِيرٌ',phon:'al-alamu kabir',french:'Le monde est grand'},
    {analysis_id:254,sense:'monde',arabic:'عَلَّمْتُهُ ٱلْقِرَاءَةَ',phon:'allamtuhu l-qiraata',french:"Je lui ai enseigné la lecture"},
    {analysis_id:256,sense:'maître',arabic:'مَالِكِ يَوْمِ ٱلدِّينِ',phon:'maliki yawmi d-din',french:'Maître du Jour de la rétribution'},
    {analysis_id:256,sense:'maître',arabic:'هُوَ مَالِكُ ٱلْبَيْتِ',phon:'huwa maliku l-bayt',french:'Il est le maître de la maison'},
    {analysis_id:256,sense:'maître',arabic:'مَلَكَ نَفْسَهُ',phon:'malaka nafsahu',french:'Il a maîtrisé lui-même'},
    {analysis_id:257,sense:'jour',arabic:'يَوْمٌ جَمِيلٌ',phon:'yawmun jamil',french:'Une belle journée'},
    {analysis_id:257,sense:'jour',arabic:'فِي يَوْمٍ مِنَ ٱلْأَيَّامِ',phon:'fi yawmin min al-ayyam',french:'Un jour parmi les jours'},
    {analysis_id:257,sense:'jour',arabic:'يَوْمَ ٱلْقِيَامَةِ',phon:'yawma l-qiyama',french:'Le Jour de la résurrection'},
    {analysis_id:258,sense:'rétribution',arabic:'كَمَا تَدِينُ تُدَانُ',phon:'kama tadinu tudan',french:'Comme tu traites tu seras traité'},
    {analysis_id:258,sense:'rétribution',arabic:'يَوْمُ ٱلدِّينِ',phon:'yawmu d-din',french:'Le Jour de la rétribution'},
    {analysis_id:258,sense:'rétribution',arabic:'لَهُ دَيْنٌ عَلَيَّ',phon:'lahu daynun alayya',french:'Il a une dette sur moi'},
    {analysis_id:259,sense:'adorer',arabic:'إِيَّاكَ نَعْبُدُ',phon:'iyyaka nabudu',french:"C'est Toi seul que nous adorons"},
    {analysis_id:259,sense:'adorer',arabic:'ٱعْبُدُوا ٱللَّهَ',phon:'ubudu llaha',french:'Adorez Dieu'},
    {analysis_id:259,sense:'adorer',arabic:'هُوَ عَبْدُ ٱللَّهِ',phon:'huwa abdu llah',french:'Il est le serviteur de Dieu'},
    {analysis_id:260,sense:"demander l'aide",arabic:'إِيَّاكَ نَسْتَعِينُ',phon:'iyyaka nastainu',french:"C'est Toi seul dont nous demandons l'aide"},
    {analysis_id:260,sense:"demander l'aide",arabic:'اِسْتَعِنْ بِٱللَّهِ',phon:'istain bi-llah',french:'Demande l\'aide de Dieu'},
    {analysis_id:260,sense:"demander l'aide",arabic:'تَعَاوَنُوا عَلَى ٱلْبِرِّ',phon:'taawanu ala l-birr',french:'Entraidez-vous pour le bien'},
    {analysis_id:261,sense:'guider',arabic:'ٱهْدِنَا ٱلصِّرَاطَ',phon:'ihdina s-sirata',french:'Guide-nous sur le chemin'},
    {analysis_id:261,sense:'guider',arabic:'هَدَاهُ ٱللَّهُ',phon:'hadahu llah',french:'Dieu l\'a guidé'},
    {analysis_id:261,sense:'guider',arabic:'هَلْ مِنْ هَادٍ؟',phon:'hal min hadin?',french:'Y a-t-il un guide ?'},
    {analysis_id:263,sense:'droit',arabic:'ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ',phon:'as-sirata l-mustaqim',french:'Le chemin droit'},
    {analysis_id:263,sense:'droit',arabic:'قُمْ مُسْتَقِيمًا',phon:'qum mustaqiman',french:'Tiens-toi droit'},
    {analysis_id:263,sense:'droit',arabic:'اِسْتَقَامَ عَلَى أَمْرِهِ',phon:'istaqama ala amrihi',french:'Il est resté droit dans sa conduite'},
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  ' + daily.length + ' phrases insérées')

  log('')
  log('============================================')
  log('  VERSETS 1:2 à 1:6 — TERMINÉS')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
