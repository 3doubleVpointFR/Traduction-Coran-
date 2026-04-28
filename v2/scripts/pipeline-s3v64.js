// Pipeline S3:V64 — verse_id=357
// Verset doctrinal de la kalimatin sawā' — "une parole commune" entre le Prophète et les gens du Livre
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 357;
const SURAH = 3, VERSE = 64;

// ─── SEGMENTS ÉTAPE 1 — corrections des word_key manquants ──────────────────
const SEGMENTS_STEP1 = [
  { pos: "verbe", phon: "قُلْ", root: "ق و ل", type: "important", tense: "impératif", arabic: "قُلْ", person: "2ème", grammar: { pos: "verbe", tense: "impératif", person: "2ème" }, phonetic: "قُلْ", position: 1, word_key: "qwl", is_particle: false },
  { pos: "nom", phon: "أَهْلَ", root: "ا ه ل", type: "important", arabic: "يَٰٓأَهْلَ", gender: "masculin", grammar: { pos: "nom", gender: "masculin" }, phonetic: "أَهْلَ", position: 2, word_key: "ahl", is_particle: false, prefix_particle: "yā" },
  { pos: "nom", phon: "كِتَٰبِ", root: "ك ت ب", type: "important", arabic: "ٱلْكِتَٰبِ", gender: "masculin", grammar: { pos: "nom", gender: "masculin" }, definite: true, phonetic: "كِتَٰبِ", position: 3, word_key: "ktb", is_particle: false },
  { pos: "verbe", phon: "تَعَالَ", root: "ع ل و", type: "important", tense: "impératif", arabic: "تَعَالَوْا۟", person: "2ème", grammar: { pos: "verbe", tense: "impératif", person: "2ème", suffix_pronoun: "2MP" }, phonetic: "تَعَالَ", position: 4, word_key: "elw", verb_form: "IV", is_particle: false, suffix_pronoun: "2MP" },
  { phon: "إِلَىٰ", type: "particle", arabic: "إِلَىٰ", phonetic: "إِلَىٰ", position: 5, is_particle: true },
  { pos: "nom", phon: "كَلِمَةٍ", root: "ك ل م", type: "important", arabic: "كَلِمَةٍ", gender: "féminin", grammar: { pos: "nom", gender: "féminin" }, phonetic: "كَلِمَةٍ", position: 6, word_key: "klm", is_particle: false },
  { pos: "adjectif", phon: "سَوَآءٍ", root: "س و ي", type: "important", arabic: "سَوَآءٍ", gender: "masculin", grammar: { pos: "adjectif", gender: "masculin" }, phonetic: "سَوَآءٍ", position: 7, word_key: "swy", is_particle: false },
  { phon: "بَيْنَ", root: "ب ي ن", type: "particle", arabic: "بَيْنَنَا", grammar: { suffix_pronoun: "1P" }, phonetic: "بَيْنَ", position: 8, word_key: "byn", is_particle: true, suffix_pronoun: "1P" },
  { phon: "بَيْنَ", root: "ب ي ن", type: "particle", arabic: "وَبَيْنَكُمْ", grammar: { suffix_pronoun: "2MP" }, phonetic: "بَيْنَ", position: 9, word_key: "byn", is_particle: true, suffix_pronoun: "2MP", prefix_particle: "wa" },
  { phon: "أَلَّا", type: "particle", arabic: "أَلَّا", phonetic: "أَلَّا", position: 10, is_particle: true },
  { pos: "verbe", phon: "نَعْبُدَ", root: "ع ب د", type: "important", tense: "inaccompli", arabic: "نَعْبُدَ", number: "pluriel", person: "1ère", grammar: { pos: "verbe", tense: "inaccompli", number: "pluriel", person: "1ère" }, phonetic: "نَعْبُدَ", position: 11, word_key: "ebd", is_particle: false, preceded_by_negation: true },
  { phon: "إِلَّا", type: "particle", arabic: "إِلَّا", phonetic: "إِلَّا", position: 12, is_particle: true },
  { pos: "nom", phon: "ٱللَّهَ", root: "ا ل ه", type: "important", arabic: "ٱللَّهَ", grammar: { pos: "nom" }, phonetic: "ٱللَّهَ", position: 13, word_key: "alh", is_particle: false },
  { phon: "لَا", type: "particle", arabic: "وَلَا", phonetic: "لَا", position: 14, is_particle: true, prefix_particle: "wa" },
  { pos: "verbe", phon: "نُشْرِكَ", root: "ش ر ك", type: "important", tense: "inaccompli", arabic: "نُشْرِكَ", number: "pluriel", person: "1ère", grammar: { pos: "verbe", tense: "inaccompli", number: "pluriel", person: "1ère" }, phonetic: "نُشْرِكَ", position: 15, word_key: "shrk", verb_form: "IV", is_particle: false, preceded_by_negation: true },
  { phon: "هِ", type: "particle", arabic: "بِهِۦ", person: "3ème", grammar: { person: "3ème" }, phonetic: "هِ", position: 16, is_particle: true, prefix_particle: "bi" },
  { pos: "nom", phon: "شَيْـًٔا", root: "ش ي ء", type: "important", arabic: "شَيْـًٔا", gender: "masculin", grammar: { pos: "nom", gender: "masculin" }, phonetic: "شَيْـًٔا", position: 17, word_key: "shyy", is_particle: false },
  { phon: "لَا", type: "particle", arabic: "وَلَا", phonetic: "لَا", position: 18, is_particle: true, prefix_particle: "wa" },
  { pos: "verbe", phon: "يَتَّخِذَ", root: "أ خ ذ", type: "important", tense: "inaccompli", arabic: "يَتَّخِذَ", person: "3ème", grammar: { pos: "verbe", tense: "inaccompli", person: "3ème" }, phonetic: "يَتَّخِذَ", position: 19, word_key: "axdh", verb_form: "VIII", is_particle: false, preceded_by_negation: true },
  { pos: "nom", phon: "بَعْضُ", root: "ب ع ض", type: "important", arabic: "بَعْضُنَا", gender: "masculin", grammar: { pos: "nom", gender: "masculin", suffix_pronoun: "1P" }, phonetic: "بَعْضُ", position: 20, word_key: "bed", is_particle: false, suffix_pronoun: "1P" },
  { pos: "nom", phon: "بَعْضًا", root: "ب ع ض", type: "important", arabic: "بَعْضًا", gender: "masculin", grammar: { pos: "nom", gender: "masculin" }, phonetic: "بَعْضًا", position: 21, word_key: "bed", is_particle: false },
  { pos: "nom", phon: "أَرْبَابًا", root: "ر ب ب", type: "important", arabic: "أَرْبَابًا", gender: "masculin", number: "pluriel", grammar: { pos: "nom", gender: "masculin", number: "pluriel" }, phonetic: "أَرْبَابًا", position: 22, word_key: "rbb", is_particle: false },
  { phon: "مِّن", type: "particle", arabic: "مِّن", phonetic: "مِّن", position: 23, is_particle: true },
  { pos: "nom", phon: "دُونِ", root: "د و ن", type: "important", arabic: "دُونِ", grammar: { pos: "nom" }, phonetic: "دُونِ", position: 24, word_key: "dwn", is_particle: false },
  { pos: "nom", phon: "ٱللَّهِ", root: "ا ل ه", type: "important", arabic: "ٱللَّهِ", grammar: { pos: "nom" }, phonetic: "ٱللَّهِ", position: 25, word_key: "alh", is_particle: false },
  { phon: "إِن", type: "particle", arabic: "فَإِن", phonetic: "إِن", position: 26, is_particle: true, prefix_particle: "fa" },
  { pos: "verbe", phon: "تَوَلَّ", root: "و ل ي", type: "important", tense: "accompli", arabic: "تَوَلَّوْا۟", person: "3ème", grammar: { pos: "verbe", tense: "accompli", person: "3ème", suffix_pronoun: "3MP" }, phonetic: "تَوَلَّ", position: 27, word_key: "wly", verb_form: "V", is_particle: false, suffix_pronoun: "3MP" },
  { pos: "verbe", phon: "قُولُ", root: "ق و ل", type: "important", tense: "impératif", arabic: "فَقُولُوا۟", person: "2ème", grammar: { pos: "verbe", tense: "impératif", person: "2ème", suffix_pronoun: "2MP" }, phonetic: "قُولُ", position: 28, word_key: "qwl", is_particle: false, suffix_pronoun: "2MP", prefix_particle: "fa" },
  { pos: "verbe", phon: "ٱشْهَدُ", root: "ش ه د", type: "important", tense: "impératif", arabic: "ٱشْهَدُوا۟", person: "2ème", grammar: { pos: "verbe", tense: "impératif", person: "2ème", suffix_pronoun: "2MP" }, phonetic: "ٱشْهَدُ", position: 29, word_key: "shhd", is_particle: false, suffix_pronoun: "2MP" },
  { phon: "أَنَّ", type: "particle", arabic: "بِأَنَّا", grammar: { suffix_pronoun: "1P" }, phonetic: "أَنَّ", position: 30, is_particle: true, suffix_pronoun: "1P", prefix_particle: "bi" },
  { pos: "nom", phon: "مُسْلِمُونَ", root: "س ل م", type: "important", voice: "actif", arabic: "مُسْلِمُونَ", gender: "masculin", number: "pluriel", grammar: { pos: "nom", voice: "actif", gender: "masculin", number: "pluriel" }, phonetic: "مُسْلِمُونَ", position: 31, word_key: "slm", verb_form: "IV", is_particle: false }
];

// ─── TRADUCTION HAMIDULLAH ──────────────────────────────────────────────────
const FULL_TRANSLATION_HAMIDULLAH =
  "Dis: \"Ô gens du Livre, venez à une parole commune entre nous et vous : que nous n'adorions qu'Allah, sans rien Lui associer, et que nous ne nous prenions point les uns les autres pour seigneurs en dehors d'Allah\". Puis, s'ils tournent le dos, dites: \"Soyez témoins que nous, nous sommes soumis\".";

// ─── NOTRE TRADUCTION ──────────────────────────────────────────────────────
const TRANSLATION_ARAB =
  "Dis : « Ô gens de l'Écriture, venez à une parole d'égalité entre nous et entre vous : que nous n'adorions que Dieu, que nous ne Lui associions rien, et que les uns d'entre nous ne se prennent pas les autres pour seigneurs en dessous de Dieu. » Et s'ils se détournent, dites : « Témoignez que nous, nous sommes de ceux qui se remettent. »";

const TRANSLATION_MEDITATIONAL = null;

// ─── SEGMENTS D'AFFICHAGE ──────────────────────────────────────────────────
const SEGMENTS = [
  { fr: "Dis",                    pos: "V", phon: "qul",              arabic: "قُلْ",           position: 1,  word_key: "qwl",  is_particle: false, sense_retenu: "dire" },
  { fr: "ô gens de",              pos: "N", phon: "yā-ahla",          arabic: "يَٰٓأَهْلَ",      position: 2,  word_key: "ahl",  is_particle: false, sense_retenu: "gens" },
  { fr: "l'Écriture",             pos: "N", phon: "l-kitābi",         arabic: "ٱلْكِتَٰبِ",       position: 3,  word_key: "ktb",  is_particle: false, sense_retenu: "écriture" },
  { fr: "venez",                  pos: "V", phon: "taʿālaw",          arabic: "تَعَالَوْا۟",     position: 4,  word_key: "elw",  is_particle: false, sense_retenu: "être haut" },
  { fr: "à",                      pos: "",  phon: "ilā",              arabic: "إِلَىٰ",         position: 5,  word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "une parole",             pos: "N", phon: "kalimatin",        arabic: "كَلِمَةٍ",        position: 6,  word_key: "klm",  is_particle: false, sense_retenu: "parole" },
  { fr: "d'égalité",              pos: "A", phon: "sawāʾin",          arabic: "سَوَآءٍ",         position: 7,  word_key: "swy",  is_particle: false, sense_retenu: "être égal" },
  { fr: "entre nous",             pos: "",  phon: "baynanā",          arabic: "بَيْنَنَا",       position: 8,  word_key: "byn",  is_particle: true,  sense_retenu: null },
  { fr: "et entre vous",          pos: "",  phon: "wa-baynakum",      arabic: "وَبَيْنَكُمْ",    position: 9,  word_key: "byn",  is_particle: true,  sense_retenu: null },
  { fr: "que nous",               pos: "",  phon: "allā",             arabic: "أَلَّا",          position: 10, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "n'adorions",             pos: "V", phon: "naʿbuda",          arabic: "نَعْبُدَ",        position: 11, word_key: "ebd",  is_particle: false, sense_retenu: "adorer" },
  { fr: "que",                    pos: "",  phon: "illā",             arabic: "إِلَّا",          position: 12, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "Dieu",                   pos: "N", phon: "llāha",            arabic: "ٱللَّهَ",         position: 13, word_key: "alh",  is_particle: false, sense_retenu: "Dieu" },
  { fr: "et ne",                  pos: "",  phon: "wa-lā",            arabic: "وَلَا",          position: 14, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "associions",             pos: "V", phon: "nushrika",         arabic: "نُشْرِكَ",        position: 15, word_key: "shrk", is_particle: false, sense_retenu: "associer" },
  { fr: "à Lui",                  pos: "",  phon: "bihi",             arabic: "بِهِۦ",          position: 16, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "rien",                   pos: "N", phon: "shayʾan",          arabic: "شَيْـًٔا",        position: 17, word_key: "shyy", is_particle: false, sense_retenu: "chose" },
  { fr: "et ne",                  pos: "",  phon: "wa-lā",            arabic: "وَلَا",          position: 18, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "prennent",               pos: "V", phon: "yattakhidha",      arabic: "يَتَّخِذَ",       position: 19, word_key: "axdh", is_particle: false, sense_retenu: "se prendre pour" },
  { fr: "les uns d'entre nous",   pos: "N", phon: "baʿḍunā",          arabic: "بَعْضُنَا",      position: 20, word_key: "bed",  is_particle: false, sense_retenu: "partie" },
  { fr: "les autres",             pos: "N", phon: "baʿḍan",           arabic: "بَعْضًا",        position: 21, word_key: "bed",  is_particle: false, sense_retenu: "partie" },
  { fr: "pour seigneurs",         pos: "N", phon: "arbāban",          arabic: "أَرْبَابًا",      position: 22, word_key: "rbb",  is_particle: false, sense_retenu: "seigneur" },
  { fr: "en",                     pos: "",  phon: "min",              arabic: "مِّن",           position: 23, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "dessous de",             pos: "N", phon: "dūni",             arabic: "دُونِ",          position: 24, word_key: "dwn",  is_particle: false, sense_retenu: "en dessous" },
  { fr: "Dieu",                   pos: "N", phon: "llāhi",            arabic: "ٱللَّهِ",         position: 25, word_key: "alh",  is_particle: false, sense_retenu: "Dieu" },
  { fr: "et si",                  pos: "",  phon: "fa-in",            arabic: "فَإِن",          position: 26, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "ils se détournent",      pos: "V", phon: "tawallawū",        arabic: "تَوَلَّوْا۟",     position: 27, word_key: "wly",  is_particle: false, sense_retenu: "se détourner" },
  { fr: "dites",                  pos: "V", phon: "fa-qūlū",          arabic: "فَقُولُوا۟",     position: 28, word_key: "qwl",  is_particle: false, sense_retenu: "dire" },
  { fr: "témoignez",              pos: "V", phon: "ishhadū",          arabic: "ٱشْهَدُوا۟",     position: 29, word_key: "shhd", is_particle: false, sense_retenu: "témoigner" },
  { fr: "que nous,",              pos: "",  phon: "bi-annā",          arabic: "بِأَنَّا",        position: 30, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: "nous sommes de ceux qui se remettent", pos: "N", phon: "muslimūna", arabic: "مُسْلِمُونَ", position: 31, word_key: "slm", is_particle: false, sense_retenu: "se remettre" }
];

// ─── DÉMARCHE + JUSTIFICATION + CRITIQUE ───────────────────────────────────
const TRANSLATION_EXPLANATION = `§DEMARCHE§
Après la confrontation des versets 61-63 (l'invitation à l'imprécation mutuelle, la proclamation que ce récit est le récit vrai, puis la clause conclusive « s'ils se détournent, Dieu est omniscient des corrupteurs »), ce verset tourne la page et propose une sortie positive. Le Prophète reçoit l'ordre d'inviter les gens de l'Écriture à une parole partagée — trois principes communs aux monothéismes : n'adorer que Dieu, ne rien Lui associer, ne pas prendre les uns les autres pour seigneurs en dessous de Dieu. Si cette invitation est refusée, la réponse demandée n'est ni la violence ni la mise à l'écart, mais une simple déclaration de position : nous, nous sommes de ceux qui se remettent.

**qul** (dis) est un verbe à l'impératif 2ème personne masculin singulier de la racine q-w-l. La forme impérative adresse l'ordre au Prophète individuellement — c'est une commande de dire, donc d'énoncer publiquement le contenu qui suit. Le verbe qāla exprime l'acte simple de parler, de formuler — il introduit le discours rapporté. La citation qui suit est tout le cœur doctrinal du verset.

**yā-ahla l-kitābi** (ô gens de l'Écriture) est une apostrophe au vocatif. La particule **yā** est l'interpellation. **Ahla** (gens) est un nom accusatif (vocatif régi par yā) pluriel de la racine a-h-l, qui exprime l'appartenance à un groupe — famille, peuple, communauté liée par un lieu, une origine ou une pratique. **al-kitābi** (l'écriture / l'écrit) est un nom défini au génitif de la racine k-t-b, dans une construction d'iḍāfa (état construit) avec ahla. D'après le Lane's, kitāb désigne d'abord ce qui est écrit — l'inscription, l'écrit, le texte consigné. Le défini al- identifie ce livre comme connu des interlocuteurs. L'expression ahlu l-kitābi désigne ceux dont l'identité communautaire est liée à une Écriture antérieure.

**taʿālaw** (venez) est un verbe à l'impératif 2ème personne masculin pluriel de la racine ʿ-l-w, à la forme IV (une forme causative qui dit que le sujet fait que quelque chose se produise — littéralement « faites-vous monter haut »). D'après le Lane's, la racine ʿ-l-w exprime la hauteur, l'élévation — taʿālā signifie littéralement « viens vers le haut, viens en haut ». C'est devenu l'expression courante pour dire « viens » avec une nuance d'invitation à s'élever vers celui qui appelle. L'impératif au pluriel inclut tous les interlocuteurs.

**kalimatin** (une parole) est un nom indéfini (tanwīn) au génitif après la préposition ilā, féminin singulier, de la racine k-l-m. D'après le Lane's, kalima désigne une parole, une énonciation — une unité de discours qui porte un sens arrêté. Le fait qu'elle soit indéfinie (sans article al-) la présente comme une parole à constituer, pas une parole déjà connue. C'est la parole-principe vers laquelle il faut venir.

**sawāʾin** (d'égalité) est un adjectif / nom indéfini au génitif (accord avec kalimatin), de la racine s-w-y. D'après le Lane's, la racine s-w-y exprime l'égalité, l'équivalence, le fait que deux choses soient au même niveau — c'est un état objectif et extérieur qui se constate, pas une convention ou un accord négocié. sawāʾ désigne ce qui est également partagé, également réparti, posé sur un pied d'égalité entre deux parties. L'expression kalimatin sawāʾin signifie donc une parole qui est au même niveau pour les deux côtés, une parole qui ne privilégie personne.

**baynanā wa-baynakum** (entre nous et entre vous) répète délibérément la particule **bayna** (entre) avec deux suffixes pronominaux différents : **-nā** (1ère personne du pluriel, « nous ») et **-kum** (2ème personne du masculin pluriel, « vous »). La répétition de bayna n'est pas redondante : elle marque la symétrie parfaite entre les deux pôles. Ce n'est pas « entre nous et vous » (qui pourrait suggérer un seul espace commun), mais « entre nous et entre vous » — deux espaces qui se rencontrent sur un même point.

**allā naʿbuda illā llāha** (que nous n'adorions que Dieu). **allā** est la contraction de an (particule subjonctive introduisant une proposition complétive) + lā (négation). **naʿbuda** est un verbe à l'inaccompli subjonctif 1ère personne du pluriel de la racine ʿ-b-d. D'après le Lane's, la racine ʿ-b-d exprime le fait de servir avec soumission, d'adorer, de se mettre au service exclusif de quelqu'un. La structure **lā... illā** (ne... que) est la construction arabe classique de la restriction exclusive — elle établit que l'adoration est réservée à Dieu et à nul autre. **llāha** (Dieu) est le nom propre à l'accusatif, objet du verbe adorer.

**wa-lā nushrika bihi shayʾan** (et que nous ne Lui associions rien). **nushrika** est un verbe à l'inaccompli subjonctif 1ère personne du pluriel, forme IV de la racine sh-r-k. D'après le Lane's, la forme I sharika signifie partager, être en copartage ; la forme IV ashraka est causative et signifie donner à quelqu'un un copartenaire — attribuer à Dieu un associé qui partagerait avec Lui son autorité ou son adoration. La préposition **bihi** (« à Lui ») complète le verbe : ne rien associer À Lui. **shayʾan** (quoi que ce soit) est un nom indéfini à l'accusatif — c'est le complément d'objet direct qui, associé à la négation lā, exprime l'exclusion totale : pas la moindre chose.

**wa-lā yattakhidha baʿḍunā baʿḍan arbāban min dūni llāhi** (et que les uns d'entre nous ne se prennent pas les autres pour seigneurs en dessous de Dieu). **yattakhidha** est un verbe à l'inaccompli subjonctif 3ème personne du masculin singulier, forme VIII de la racine a-kh-dh. D'après le Lane's, la forme I akhadha signifie prendre, saisir ; la forme VIII ittakhadha est réflexive — prendre pour soi, se constituer quelque chose comme sien, adopter. La construction ittakhadha X Y signifie littéralement « prendre X pour en faire Y » — c'est une structure d'appropriation qui transforme X en ayant la fonction Y. **baʿḍunā baʿḍan** (les uns d'entre nous les autres) est une construction de réciprocité classique : baʿḍ (partie, certains) répété avec le suffixe -nā sur le premier et l'accusatif -an sur le second exprime « les uns... les autres ». **arbāban** (seigneurs) est un nom pluriel indéfini à l'accusatif de la racine r-b-b (pluriel irrégulier de rabb). D'après le Lane's, rabb désigne le maître, le seigneur, celui qui possède une autorité sur une chose ou une personne. Au pluriel arbāb, appliqué ici à des humains, ce terme exprime l'acte de conférer à d'autres êtres humains une autorité de type seigneurial qui n'appartient en toute rigueur qu'à Dieu. **min dūni llāhi** (en dessous de Dieu) : **dūni** est un nom génitif de la racine d-w-n, qui signifie « en dessous, au-dessous, d'un rang inférieur ». La préposition **min** (à partir de) combinée avec dūni donne l'expression figée min dūn X = « au-dessous de X, à un rang inférieur à X » — l'expression désigne toujours une position de subordination illégitime, non une simple extériorité. Prendre des seigneurs min dūni llāhi, c'est prendre des seigneurs dont le rang est inférieur à Dieu, sans le remplacer mais en s'insérant sous Lui dans la position d'autorité.

**fa-in tawallaw** (et s'ils se détournent). La particule **fa-in** introduit la condition hypothétique qui ouvre la seconde partie du verset. **tawallaw** est un verbe à l'accompli 3ème personne du masculin pluriel, forme V de la racine w-l-y. La forme V tawallā est réflexive et exprime le fait de se retourner, de tourner le dos — c'est l'acte par lequel le sujet se détourne de lui-même de ce qui lui est présenté.

**fa-qūlū ishhadū bi-annā muslimūna** (dites : « témoignez que nous, nous sommes de ceux qui se remettent »). **fa-qūlū** est l'impératif 2ème personne masculin pluriel de qāla (dire) précédé de la particule **fa** (alors) qui marque la conséquence. **ishhadū** est un verbe à l'impératif 2ème personne masculin pluriel de la racine sh-h-d. D'après le Lane's, la racine sh-h-d exprime le fait de déclarer avec certitude ce dont on a fait l'expérience directe, d'attester d'une connaissance établie. **bi-annā** est la préposition bi- + la particule anna (que) + le suffixe -nā (nous) — « que nous, nous... ». **muslimūna** (ceux qui se remettent) est un nom pluriel masculin indéfini (avec tanwīn au nominatif) de la racine s-l-m, à la forme IV — c'est le participe actif de la forme IV aslama. D'après le Lane's, la forme IV exprime l'acte de se remettre entièrement à quelqu'un, de s'en remettre à sa disposition, de se livrer volontairement. Le participe actif muslim désigne donc celui qui fait activement et continûment cet acte de remise. La forme est intensive et continue — ce n'est pas une action ponctuelle passée, mais un état volontaire maintenu.

§JUSTIFICATION§
**Dis** — Le sens retenu est « dire » de la racine q-w-l. L'impératif qul est traduit directement par « dis » — c'est le mot français le plus naturel pour l'ordre de parler.

**ô gens de l'Écriture** — Pour ahla, le sens retenu est « gens ». Le mot « gens » est choisi car il est courant en français et rend l'appartenance communautaire sans ajouter de nuance ecclésiastique. L'alternative « peuple » est plus politique — elle suggère une entité étatique. Pour al-kitābi, le sens retenu est « écriture » de la racine k-t-b. Le mot « l'Écriture » est choisi car il rend mot pour mot le sens premier de kitāb (ce qui est écrit) et reste compréhensible. L'alternative « le Livre » est possible mais elle est devenue un raccourci technique — elle masque que kitāb désigne l'écrit au sens large, pas une reliure matérielle. L'alternative « la Bible » est écartée car elle projette la terminologie chrétienne.

**venez** — Le sens retenu est « venir haut » du fait de la forme IV de la racine ʿ-l-w. Le mot « venez » est choisi car c'est l'équivalent courant en français de taʿālaw, dont la nuance étymologique (venir vers le haut) ne se rend pas facilement sans lourdeur. L'alternative « élevez-vous jusqu'à » surcharge la phrase.

**une parole d'égalité** — Pour kalimatin, le sens retenu est « parole » de la racine k-l-m. Le mot « parole » est choisi car il rend l'unité de discours sensée. L'alternative « mot » est écartée car kalima est plus qu'un simple mot au sens français — c'est une énonciation qui porte un sens arrêté. Pour sawāʾin, le sens retenu est « être égal » de la racine s-w-y — l'idée d'équivalence, de niveau égal. Le mot « d'égalité » est choisi car il rend précisément la nuance : une parole qui place les deux parties sur un pied d'égalité. L'alternative « commune » (traduction courante) est écartée car elle dit « partagée » sans dire « égale » — et le verset insiste sur l'équivalence (sawāʾ), pas sur la communauté. L'alternative « équitable » est possible mais un peu juridique.

**entre nous et entre vous** — La répétition de « entre » est maintenue car elle rend la répétition délibérée de bayna dans l'arabe. L'alternative « entre nous et vous » efface la symétrie posée par l'arabe.

**que nous n'adorions que Dieu** — Pour naʿbuda, le sens retenu est « adorer » de la racine ʿ-b-d. Le mot « adorions » est choisi car il rend le verbe dans sa dimension de service religieux exclusif. L'alternative « servir » est possible mais moins précise en français courant — elle peut désigner un service ordinaire. Pour llāha, le sens retenu est « Dieu ». « Dieu » est choisi car c'est le nom courant du français (allāh = al-ilāh = la divinité).

**et que nous ne Lui associions rien** — Pour nushrika, le sens retenu est « associer » de la racine sh-r-k. Le mot « associons » est choisi car il rend la forme IV causative : donner à Dieu des associés. L'alternative « partager » est écartée car elle ne rend pas la nuance d'associer une autre autorité au détriment de l'unicité. Pour shayʾan, le sens retenu est « chose ». Le mot « rien » est choisi car shayʾan combiné à la négation lā forme en français l'expression naturelle « ne... rien ». L'alternative « quoi que ce soit » est possible mais plus lourde.

**et que les uns d'entre nous ne se prennent pas les autres pour seigneurs en dessous de Dieu** — Pour yattakhidha, le sens retenu est « se prendre pour » de la racine a-kh-dh à la forme VIII. L'expression « se prennent... pour seigneurs » est choisie car elle rend mot pour mot la structure ittakhadha X Y (prendre X pour en faire Y). L'alternative « adopter comme » est possible mais moins naturelle dans cette construction. Pour baʿḍunā baʿḍan, le sens retenu est « partie » (de bed). L'expression française standard « les uns... les autres » est choisie pour rendre la construction réciproque. Pour arbāban, le sens retenu est « seigneur » du pluriel arbāb de r-b-b. Le mot « seigneurs » est choisi car il rend la racine sans ambiguïté. L'alternative « maîtres » est écartée car elle est plus large et ne rend pas la dimension d'autorité souveraine propre au rabb. Pour dūni, le sens retenu est « en-dessous » de la racine d-w-n. L'expression « en dessous de » est choisie car c'est le sens étymologique premier — min dūni X signifie occuper un rang inférieur à X. L'alternative « en dehors de » (traduction courante) est écartée car elle change le sens : « en dehors de Dieu » suggère un espace extérieur à Dieu, comme s'il existait un dehors de Dieu ; « en dessous de Dieu » dit plutôt que l'on s'insère à un rang inférieur sans remplacer Dieu — c'est exactement la situation décrite par le verset (prendre des humains comme seigneurs relatifs tout en maintenant nominalement Dieu au-dessus).

**et s'ils se détournent** — Le sens retenu est « se détourner » de la racine w-l-y à la forme V. Le mot « se détournent » est choisi car il rend l'acte volontaire de rejet. L'alternative « tournent le dos » est plus physique.

**dites : « témoignez que nous, nous sommes de ceux qui se remettent »** — Pour qūlū, « dites » est l'impératif naturel. Pour ishhadū, le sens retenu est « témoigner » de la racine sh-h-d. Le mot « témoignez » est choisi car c'est l'impératif direct. Pour muslimūna, le sens retenu est « se remettre » de la racine s-l-m à la forme IV (participe actif). L'expression « de ceux qui se remettent » est choisie car elle rend précisément ce qu'est un muslim : celui qui, de façon volontaire et continue, se remet entièrement à Dieu. L'alternative « soumis » (traduction courante) est écartée parce qu'elle suggère une passivité imposée, alors que la forme IV est active et volontaire — muslim n'est pas celui que l'on soumet, mais celui qui se remet de lui-même. L'alternative « Musulmans » est écartée parce que c'est devenu un label confessionnel post-islamique qui renvoie à une appartenance religieuse institutionnelle — or au moment de la révélation, muslimūn désigne un acte (se remettre à Dieu) partagé par tous les prophètes et tous ceux qui se tiennent dans cette remise, incluant Abraham, Moïse, Jésus et leurs disciples fidèles.

§CRITIQUE§
**gens de l'Écriture vs gens du Livre** : les traductions courantes rendent ahl al-kitāb par « gens du Livre ». Le mot kitāb vient de la racine k-t-b qui signifie d'abord « écrire » — un kitāb est un écrit. La traduction « Livre » (avec majuscule) est devenue un raccourci qui suggère un objet matériel unique, ce qui déforme le sens. L'expression « gens de l'Écriture » rend directement la racine et reste ouverte : elle désigne ceux qui sont héritiers d'une écriture révélée, sans préjuger de la forme matérielle.

**parole d'égalité vs parole commune** : les traductions courantes rendent kalimatin sawāʾin par « parole commune ». Le mot sawāʾ vient de la racine s-w-y qui désigne l'égalité stricte, l'équivalence, le fait que deux choses soient rigoureusement au même niveau. « Commune » suggère « partagée par tous », un accord mou, alors que sawāʾ est beaucoup plus précis : c'est une parole qui ne favorise ni l'un ni l'autre côté, qui traite les deux parties sur un pied strictement égal. Cette différence change la logique du verset : il ne s'agit pas de trouver un plus petit dénominateur commun, mais de se retrouver sur une parole qui ne privilégie personne et à laquelle chacun peut adhérer à égalité.

**entre nous et entre vous vs entre nous et vous** : les traductions courantes simplifient baynanā wa-baynakum en « entre nous et vous ». L'arabe répète délibérément bayna devant chaque pronom. Cette répétition n'est pas redondante — elle marque la symétrie parfaite entre les deux pôles et signale que l'espace en question se constitue à la rencontre de deux espaces distincts, pas comme un seul espace vague englobant tout le monde. Maintenir la répétition dans la traduction française préserve cette symétrie.

**que nous n'adorions que Dieu vs que nous n'adorions qu'Allah** : Hamidullah garde « Allah » comme nom propre. Le mot allāh est la contraction de al-ilāh = la divinité. Le français dispose du mot « Dieu » qui rend exactement ce sens. Garder « Allah » dans la traduction produit un double effet problématique : d'une part cela donne l'impression qu'il s'agit d'un nom propre parmi d'autres (comme Zeus ou Jupiter), d'autre part cela empêche les gens de l'Écriture à qui ce verset s'adresse de se reconnaître dans l'invitation (puisque par construction « leur » Dieu n'est pas « Allah »). Or tout le sens du verset est l'inverse : venir à une parole d'égalité où « Dieu » est un terrain commun. Traduire par « Dieu » respecte cette invitation.

**seigneurs en dessous de Dieu vs seigneurs en dehors d'Allah** : les traductions courantes rendent min dūni llāhi par « en dehors de Dieu » ou « hors Dieu ». Le mot dūn, d'après le Lane's, signifie « en dessous de, à un rang inférieur ». L'expression min dūni X signifie toujours « à un rang inférieur à X », pas « à l'extérieur de X ». Cette distinction change profondément le sens : « en dehors de Dieu » suggère qu'on peut prendre des seigneurs tant qu'ils ne sont pas Dieu, comme s'il existait un territoire extérieur à Dieu où l'on pourrait légitimement installer des autorités ; « en dessous de Dieu » dit au contraire qu'il ne faut pas insérer, entre soi et Dieu, des figures humaines que l'on consacrerait comme seigneurs relatifs. Le verset ne vise pas seulement le polythéisme explicite (remplacer Dieu par un autre Dieu), il vise aussi la sacralisation des autorités humaines intermédiaires (clercs, dirigeants, ancêtres, traditions personnifiées) à qui l'on confère un pouvoir de type seigneurial tout en continuant à dire que l'on adore Dieu.

**ceux qui se remettent vs Musulmans** : les traductions rendent souvent muslimūn par « Musulmans » (Blachère, Berque par endroits) ou « soumis » (Hamidullah). « Musulmans » avec majuscule est un anachronisme : au moment de la révélation, il n'existe pas encore de « communauté musulmane » au sens confessionnel institutionnel. muslimūn désigne un acte continu (se remettre à Dieu) que le Coran attribue explicitement à Abraham (2:131-132), Jacob, Joseph, Moïse, les apôtres de Jésus (5:111), et non une communauté distincte des autres. Traduire par « Musulmans » transforme une pratique (se remettre à Dieu) en une appartenance confessionnelle et brise le pont que le verset tend précisément aux gens de l'Écriture. « Soumis » (Hamidullah) est mieux mais reste insatisfaisant : il évoque une soumission imposée, alors que la forme IV aslama est active et volontaire — muslim n'est pas celui qu'on a soumis, mais celui qui fait l'acte de se remettre. « Ceux qui se remettent » restitue cette activité volontaire et maintient le verset dans son cadre universel : tous ceux qui se remettent à Dieu peuvent se dire muslimūn.`;

// ─── VWA ────────────────────────────────────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: "qwl", position: 1, sense_chosen: "dire",
    reason: "qul est l'impératif 2MS de la racine q-w-l — ordre donné au Prophète d'énoncer un message. Le sens premier 'dire' est celui de la parole articulée qui introduit un discours.",
    analysis_axes: {
      sense_chosen: "dire", concept_chosen: "Parole/Énonciation",
      concepts: {
        "Parole/Énonciation": { status: "retenu", senses: ["dire", "parler", "énoncer"],
          proof_ctx: "qul est un impératif 2MS — ordre de parler. La racine q-w-l à la forme I exprime l'acte simple de prononcer, de formuler en paroles. Le verbe introduit le discours rapporté qui constitue le cœur du verset." },
        "Pensée/Avis": { status: "peu_probable", senses: ["penser", "juger", "estimer"],
          proof_ctx: "Dans certains contextes qāla peut signifier 'penser/juger' mais ce sens figuré ne convient pas à un impératif qui introduit immédiatement un discours rapporté explicite." },
        "Sens isolé/Puissance": { status: "nul", senses: ["force"], proof_ctx: "Hors sujet." },
        "Corps/Anatomie": { status: "nul", senses: ["langue"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "ahl", position: 2, sense_chosen: "gens",
    reason: "ahla est le vocatif (nom accusatif régi par yā) en iḍāfa avec al-kitāb. ahl désigne un groupe humain identifié par un lien commun — ici le fait d'être porteur de l'Écriture.",
    analysis_axes: {
      sense_chosen: "gens", concept_chosen: "Famille/Communauté",
      concepts: {
        "Famille/Communauté": { status: "retenu", senses: ["gens", "famille", "peuple"],
          proof_ctx: "ahla désigne le groupe humain défini par son lien à une réalité commune (ici kitāb). L'iḍāfa ahla l-kitābi identifie une catégorie par son rapport à l'Écriture. 'Gens' en français rend le groupe sans ajouter de nuance ecclésiale ou politique." },
        "Mérite/Aptitude": { status: "peu_probable", senses: ["digne de", "apte à"],
          proof_ctx: "ahl peut signifier 'celui qui est digne de' dans certains contextes, mais la construction vocative avec al-kitāb désigne une appartenance communautaire, pas une aptitude." },
        "Parenté/Famille": { status: "peu_probable", senses: ["parents", "proches"],
          proof_ctx: "Le sens familial strict ne convient pas ici — il s'agit d'un groupe large lié par l'Écriture, non d'une parenté biologique." },
        "Sens isolé/Accueillir": { status: "nul", senses: ["accueillir"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "ktb", position: 3, sense_chosen: "écriture",
    reason: "al-kitābi est un nom défini au génitif, élément régi de l'iḍāfa avec ahla. La racine k-t-b signifie d'abord 'écrire' — al-kitāb désigne ce qui est écrit, le texte consigné.",
    analysis_axes: {
      sense_chosen: "écriture", concept_chosen: "Écriture/Inscription",
      concepts: {
        "Écriture/Inscription": { status: "retenu", senses: ["écrire", "inscrire", "consigner", "écriture"],
          proof_ctx: "al-kitāb désigne ce qui a été écrit — le texte fixé par écrit. Dans l'expression ahla l-kitāb, le défini identifie l'Écriture révélée antérieure que portent les interlocuteurs. Le sens premier de la racine (écrire) est directement activé." },
        "Livre/Écrit": { status: "probable", senses: ["livre", "écrit"],
          proof_ctx: "Le sens 'livre' est une extension naturelle du sens 'écriture' mais il suggère en français une matérialité qui n'est pas portée par kitāb dans l'expression. 'Écriture' rend mieux l'origine étymologique." },
        "Obligation/Décret": { status: "peu_probable", senses: ["décréter", "prescrire"],
          proof_ctx: "kutiba ʿalā (a été prescrit) est un sens idiomatique qui ne s'active qu'avec la construction verbale — absent ici." },
        "Assemblage/Couture": { status: "nul", senses: ["coudre", "assembler"], proof_ctx: "Sens physique obscur, hors sujet." },
        "Souffle/Vent": { status: "nul", senses: ["souffle"], proof_ctx: "Hors sujet." },
        "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Hors sujet." },
        "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Hors sujet." },
        "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "elw", position: 4, sense_chosen: "être haut",
    reason: "taʿālaw est l'impératif 2MP de la forme IV de ʿ-l-w — littéralement 'venez en haut'. Expression figée d'invitation en arabe ('venez'). Sens d'élévation/hauteur activé.",
    analysis_axes: {
      sense_chosen: "être haut", concept_chosen: "Hauteur/Élévation",
      concepts: {
        "Hauteur/Élévation": { status: "retenu", senses: ["être haut", "s'élever", "supérieur"],
          proof_ctx: "taʿālaw est la forme IV impérative 2MP — la forme IV de ʿ-l-w donne l'idée de 'venir en haut'. Devenu formule d'invitation standard en arabe ('venez'), le sens étymologique d'élévation reste présent : l'invitation est à s'élever vers un terrain commun supérieur." },
        "Animal/Faune": { status: "nul", senses: ["animal sauvage"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "klm", position: 6, sense_chosen: "parole",
    reason: "kalimatin est un nom indéfini féminin au génitif après ilā. La racine k-l-m désigne la parole, l'énonciation sensée. Le tanwīn (indéfini) présente cette parole comme à constituer.",
    analysis_axes: {
      sense_chosen: "parole", concept_chosen: "Parole/Discours",
      concepts: {
        "Parole/Discours": { status: "retenu", senses: ["parole", "mot", "discours", "énoncé"],
          proof_ctx: "kalima désigne une unité de discours qui porte un sens arrêté — une énonciation, une parole-principe. Le verset présente cette parole comme la base commune à laquelle venir. Le sens 'parole' est immédiatement activé par le génitif après ilā et par l'attribut sawāʾ qui suit." },
        "Blessure": { status: "nul", senses: ["blesser", "blessure"],
          proof_ctx: "La racine k-l-m a aussi le sens 'blessure' (klm en forme I), mais ce sens ne convient pas à un nom féminin singulier dans une structure conditionnelle d'invitation à l'égalité." }
      }
    }
  },
  {
    word_key: "swy", position: 7, sense_chosen: "être égal",
    reason: "sawāʾin est un adjectif indéfini accordé avec kalimatin — signifie 'd'égalité', 'également partagée'. Le sens premier de la racine est l'équivalence/égalité stricte.",
    analysis_axes: {
      sense_chosen: "être égal", concept_chosen: "Égalité/Équivalence",
      concepts: {
        "Égalité/Équivalence": { status: "retenu", senses: ["être égal", "équivalent", "même chose", "indifférent", "égaliser", "aplanir"],
          proof_ctx: "sawāʾ qualifie kalima — une parole d'égalité, c'est-à-dire également valable pour les deux parties, ne privilégiant ni l'une ni l'autre. La racine s-w-y exprime l'équivalence stricte, le fait d'être au même niveau. Philosophiquement, c'est un état objectif et extérieur — l'égalité se constate, elle n'est pas une convention. Le sens 'achèvement/perfection' (forme II sawwā) ne convient pas car l'adjectif qualifie ici une parole, pas un processus d'achèvement." },
        "Achèvement/Perfection": { status: "peu_probable", senses: ["achever", "rendre parfait"],
          proof_ctx: "La forme II sawwā signifie 'rendre complet' — un acte transitif dirigé vers un objet à compléter. L'adjectif sawāʾ qualifie l'état d'égalité, non un achèvement en cours." },
        "Sens isolé/Se": { status: "nul", senses: ["se tenir droit"], proof_ctx: "Sens concret physique, hors sujet." },
        "Lieu/Géographie": { status: "nul", senses: ["milieu"], proof_ctx: "Hors sujet — 'milieu' ne qualifie pas une parole." }
      }
    }
  },
  {
    word_key: "ebd", position: 11, sense_chosen: "adorer",
    reason: "naʿbuda est un verbe à l'inaccompli subjonctif 1ère personne du pluriel. Il est précédé de allā (négation subjonctive) et suivi de illā llāha — structure lā...illā de la restriction exclusive. Le sens 'adorer' (service religieux exclusif) est activé.",
    analysis_axes: {
      sense_chosen: "adorer", concept_chosen: "Adoration/Dévotion",
      concepts: {
        "Adoration/Dévotion": { status: "retenu", senses: ["adorer", "servir Dieu", "rendre un culte"],
          proof_ctx: "La structure lā naʿbuda illā llāha est la formule restrictive exclusive : n'adorer que Dieu. Le verbe ʿabada dans cette construction religieuse désigne le culte exclusif — l'acte de service et de dévotion rendu à une entité divine. Le sens 'servitude/esclavage' (status servile involontaire) ne convient pas car la structure réflexive avec Dieu pour objet nomme l'acte volontaire d'adoration." },
        "Servitude/Esclavage": { status: "peu_probable", senses: ["asservir", "être esclave"],
          proof_ctx: "ʿabd comme 'esclave' est le sens socio-économique de la racine. Il ne convient pas à un verbe à l'inaccompli sujet 1ère personne pluriel avec Dieu pour objet — on n'est pas 'esclave de Dieu' comme on est esclave d'un maître, mais on L'adore." },
        "Sens isolé/Être": { status: "nul", senses: ["être"], proof_ctx: "Hors sujet." },
        "Sens isolé/Mépriser": { status: "nul", senses: ["mépriser"], proof_ctx: "Hors sujet." },
        "Sens isolé/Colérique": { status: "nul", senses: ["colérique"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "alh", position: 13, sense_chosen: "Dieu",
    reason: "llāha est le nom propre à l'accusatif, objet du verbe naʿbuda. allāh = al-ilāh = la divinité par excellence.",
    analysis_axes: {
      sense_chosen: "Dieu", concept_chosen: "Divinité",
      concepts: {
        "Divinité": { status: "retenu", senses: ["divinité", "Dieu", "théologie"],
          proof_ctx: "llāha est le nom propre — al-ilāh (la divinité) contracté. Il désigne l'entité suprême objet de l'adoration exclusive. Les autres concepts (Adoration, Détresse, Refuge, Domination) sont des dérivés verbaux de la racine — ils ne s'activent pas ici où il s'agit du nom d'entité." },
        "Adoration/Dévotion": { status: "nul", senses: ["adorer", "faire adorer"],
          proof_ctx: "Ces sens verbaux ne s'activent pas sur le nom propre Dieu." },
        "Détresse": { status: "nul", senses: ["être perplexe"], proof_ctx: "Hors sujet." },
        "Refuge/Protection": { status: "nul", senses: ["chercher refuge"], proof_ctx: "Hors sujet." },
        "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "shrk", position: 15, sense_chosen: "associer",
    reason: "nushrika est l'inaccompli subjonctif 1ère personne pluriel forme IV de sh-r-k. La forme IV ashraka est causative : 'attribuer à X un associé'. Avec complément bihi (à Lui) et objet shayʾan, c'est 'ne rien Lui associer'.",
    analysis_axes: {
      sense_chosen: "associer", concept_chosen: "Association/Polythéisme",
      concepts: {
        "Association/Polythéisme": { status: "retenu", senses: ["associer", "polythéisme", "partenaire"],
          proof_ctx: "nushrika bihi shayʾan est la construction classique : forme IV causative de sh-r-k + bi- + COD. Le sujet attribue à Dieu (bihi) un objet (shayʾan) qui Lui serait associé. Le sens 'associer' est directement activé par la forme IV causative et la préposition bi-. Le sens Partage/Copartenariat (forme I sharika = partager) désigne un partage réciproque entre deux parties déjà au même niveau — incompatible philosophiquement avec la forme IV qui dit 'donner un associé à', acte unilatéral à sens unique." },
        "Partage/Copartenariat": { status: "peu_probable", senses: ["partager", "participer", "être copartenaire", "donner une part"],
          proof_ctx: "La forme I sharika exprime un partage réciproque entre parties déjà équivalentes. La forme IV du verset ne dit pas cela — elle dit 'constituer un associé pour', acte unilatéral d'attribution. Le sens 'partager' serait activé si le verbe était à la forme I ; ici la forme IV impose l'idée d'adjonction illégitime d'un tiers." },
        "Enchevêtrement/Piège": { status: "nul", senses: ["enlacer", "piège"],
          proof_ctx: "Sens physique concret (sharak = filet du chasseur), hors sujet dans une structure théologique." },
        "Lanière": { status: "nul", senses: ["lanière de sandale"], proof_ctx: "Sens concret de la lanière de sandale (shirāk), hors sujet." }
      }
    }
  },
  {
    word_key: "shyy", position: 17, sense_chosen: "chose",
    reason: "shayʾan est un nom accusatif indéfini, complément d'objet de nushrika. Avec la négation lā précédente, l'expression shayʾan forme une négation totale ('ne rien'). Le sens 'chose/entité' est le sens premier de la racine sh-y-ʾ.",
    analysis_axes: {
      sense_chosen: "chose", concept_chosen: "Chose/Entité",
      concepts: {
        "Chose/Entité": { status: "retenu", senses: ["chose", "quelque chose", "entité", "quoi que ce soit"],
          proof_ctx: "shay' est le nom le plus général désignant toute entité qui peut être connue ou prédiquée. Indéfini et accompagné de la négation lā, il exprime l'exclusion totale : 'pas la moindre chose'. Le sens 'volonté' (mashī'a, nom dérivé du verbe shā'a) est un autre sens de la racine activé par la forme verbale I, pas par le nom shay'." },
        "Volonté/Dessein": { status: "nul", senses: ["vouloir", "volonté"],
          proof_ctx: "La volonté (mashī'a) est le sens verbal de la racine — elle ne s'active pas sur le nom shay' à l'accusatif complément d'objet." }
      }
    }
  },
  {
    word_key: "axdh", position: 19, sense_chosen: "se prendre pour",
    reason: "yattakhidha est l'inaccompli subjonctif 3MS forme VIII de a-kh-dh. La forme VIII ittakhadha est réflexive : 'prendre pour soi'. Dans la construction ittakhadha X Y, le sujet prend X pour en faire Y — ici baʿḍunā baʿḍan (les uns les autres) pour en faire arbāban (seigneurs).",
    analysis_axes: {
      sense_chosen: "se prendre pour", concept_chosen: "Appropriation/Adoption",
      concepts: {
        "Appropriation/Adoption": { status: "retenu", senses: ["se prendre pour", "adopter", "faire de (X) un (Y)"],
          proof_ctx: "La forme VIII ittakhadha exprime l'acte réflexif de prendre pour soi — constituer volontairement quelqu'un ou quelque chose comme sien dans une fonction particulière. La structure ittakhadha X Y (prendre X pour en faire Y) est ici activée par baʿḍunā baʿḍan arbāban — prendre les uns les autres pour seigneurs. Le sens premier 'prendre/saisir' (forme I) serait plus physique et unilatéral ; la forme VIII ajoute la dimension d'appropriation volontaire avec destination fonctionnelle." },
        "Prise/Saisie": { status: "peu_probable", senses: ["prendre", "saisir", "s'emparer", "recevoir", "accepter"],
          proof_ctx: "La forme I akhadha exprime la saisie simple. La forme VIII du verset ajoute la dimension réflexive et fonctionnelle — ce n'est pas seulement prendre, c'est prendre-pour. Les sens de la forme I sont donc philosophiquement voisins mais insuffisants." },
        "Châtiment/Sanction": { status: "nul", senses: ["châtier"], proof_ctx: "Sens contextuel spécifique (akhadha = saisir pour punir), hors sujet ici." },
        "Captivité": { status: "nul", senses: ["capturer"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "bed", position: 20, sense_chosen: "partie",
    reason: "baʿḍunā est un nom nominatif en iḍāfa avec le pronom -nā (1P). La racine b-ʿ-ḍ signifie 'partie, fraction'. Dans la construction baʿḍunā baʿḍan, baʿḍ répété exprime la réciprocité ('les uns... les autres').",
    analysis_axes: {
      sense_chosen: "partie", concept_chosen: "Partie/Division",
      concepts: {
        "Partie/Division": { status: "retenu", senses: ["partie", "fraction", "certains"],
          proof_ctx: "baʿḍ désigne une partie d'un tout. Dans la construction baʿḍunā baʿḍan, la répétition exprime la réciprocité : une partie de nous à une autre partie de nous = les uns envers les autres. C'est la construction classique arabe de la réciprocité interne à un groupe." },
        "Sens isolé/Moustique": { status: "nul", senses: ["moustique"], proof_ctx: "Sens concret (baʿūḍa), hors sujet." }
      }
    }
  },
  {
    word_key: "bed", position: 21, sense_chosen: "partie",
    reason: "baʿḍan est le second baʿḍ, à l'accusatif indéfini — COD de yattakhidha. Avec baʿḍunā en position 20, forme la réciprocité 'les uns... les autres'.",
    analysis_axes: {
      sense_chosen: "partie", concept_chosen: "Partie/Division",
      concepts: {
        "Partie/Division": { status: "retenu", senses: ["partie", "fraction", "certains"],
          proof_ctx: "baʿḍan est le second élément de la construction réciproque baʿḍunā baʿḍan — l'accusatif indéfini désigne 'les autres' (partie réceptrice de l'action)." },
        "Sens isolé/Moustique": { status: "nul", senses: ["moustique"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "rbb", position: 22, sense_chosen: "seigneur",
    reason: "arbāban est le pluriel indéfini de rabb à l'accusatif — second terme de la construction ittakhadha X Y (prendre X pour en faire Y), ici 'comme seigneurs'. Appliqué à des humains, arbāb désigne des figures investies d'une autorité seigneuriale illégitime.",
    analysis_axes: {
      sense_chosen: "seigneur", concept_chosen: "Seigneurie/Autorité bienveillante",
      concepts: {
        "Seigneurie/Autorité bienveillante": { status: "retenu", senses: ["seigneur", "maître", "propriétaire"],
          proof_ctx: "rabb désigne celui qui détient l'autorité pleine et bienveillante sur une chose ou une personne. Au pluriel arbāb, appliqué ici à des humains, le mot exprime que les hommes se confèrent mutuellement une autorité qui n'appartient en rigueur qu'à Dieu. La construction ittakhadha... arbāban active le sens premier de 'seigneur'. Les concepts de Croissance ou d'Éducation sont des sens voisins (rabbā = élever) mais ne s'activent pas sur le pluriel arbāb objet de ittakhadha." },
        "Éducation/Accompagnement": { status: "peu_probable", senses: ["élever", "éduquer"],
          proof_ctx: "rabbā (forme II) signifie élever un enfant, mais ce sens verbal ne convient pas au nom pluriel arbāb ici utilisé comme attribut de ittakhadha." },
        "Croissance/Augmentation": { status: "peu_probable", senses: ["croître", "augmenter"],
          proof_ctx: "Le sens de croissance est premier dans la racine mais reste verbal — il ne s'active pas sur arbāb." },
        "Commerce/Usure": { status: "nul", senses: ["ribā"], proof_ctx: "Sens technique commercial, hors sujet." },
        "Souffle/Vent": { status: "nul", senses: ["souffle"], proof_ctx: "Hors sujet." },
        "Sens isolé/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Hors sujet." },
        "Sens isolé/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Hors sujet." },
        "Sens isolé/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Hors sujet." },
        "Sens isolé/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "dwn", position: 24, sense_chosen: "en dessous",
    reason: "dūni est un nom génitif après la préposition min — min dūni = locution 'en dessous de, à un rang inférieur à'. Appliqué à Dieu, désigne une position de subordination illégitime, pas une extériorité.",
    analysis_axes: {
      sense_chosen: "en dessous", concept_chosen: "Infériorité/En-dessous",
      concepts: {
        "Infériorité/En-dessous": { status: "retenu", senses: ["en dessous", "inférieur", "moindre"],
          proof_ctx: "dūn signifie 'en dessous, à un rang inférieur'. La locution min dūni X désigne toujours une position subordonnée à X — pas un espace extérieur à X. Le sens 'Proximité/Moindre distance' est voisin mais ne rend pas la dimension hiérarchique qui est précisément le point du verset : les arbāb humains ne remplacent pas Dieu, ils s'insèrent à un rang inférieur sous Lui." },
        "Proximité/Moindre distance": { status: "peu_probable", senses: ["proche", "à côté"],
          proof_ctx: "dūn peut signifier 'proche de, en deçà' dans certains contextes mais pas ici où il s'agit explicitement d'une prise d'autorité subordonnée." },
        "Sens isolé/Le": { status: "nul", senses: ["le"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "alh", position: 25, sense_chosen: "Dieu",
    reason: "llāhi est le nom propre au génitif, élément régi de min dūni. Même analyse que position 13 — allāh = al-ilāh, la divinité.",
    analysis_axes: {
      sense_chosen: "Dieu", concept_chosen: "Divinité",
      concepts: {
        "Divinité": { status: "retenu", senses: ["divinité", "Dieu", "théologie"],
          proof_ctx: "llāhi est le nom propre au génitif après min dūni. allāh = al-ilāh = la divinité par excellence. L'expression min dūni llāhi désigne une position subordonnée à Dieu." },
        "Adoration/Dévotion": { status: "nul", senses: ["adorer"], proof_ctx: "Hors sujet — nom d'entité." },
        "Détresse": { status: "nul", senses: ["être perplexe"], proof_ctx: "Hors sujet." },
        "Refuge/Protection": { status: "nul", senses: ["chercher refuge"], proof_ctx: "Hors sujet." },
        "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "wly", position: 27, sense_chosen: "se détourner",
    reason: "tawallaw est l'accompli 3MP forme V de w-l-y — forme réflexive sans complément exprimé. Sens d'éloignement/détournement actif.",
    analysis_axes: {
      sense_chosen: "se détourner", concept_chosen: "Éloignement/Détournement",
      concepts: {
        "Éloignement/Détournement": { status: "retenu", senses: ["se détourner", "s'éloigner", "tourner le dos", "fuir"],
          proof_ctx: "tawallaw est la forme V accompli 3MP de w-l-y — forme réflexive qui exprime l'acte que le sujet accomplit sur lui-même. Sans complément désignant un allié (qui activerait le sens Proximité/Protection), la forme V dit simplement que le sujet se détourne, tourne le dos. La structure conditionnelle fa-in tawallaw ('et s'ils se détournent') désigne le refus actif après exposition de la vérité." },
        "Proximité/Protection": { status: "peu_probable", senses: ["proche", "ami", "protecteur", "allié", "tuteur", "patron", "héritier", "parent", "affranchi"],
          proof_ctx: "La forme V peut exprimer 'prendre comme walī' avec complément explicite. Absent ici." },
        "Autorité": { status: "nul", senses: ["gouverner", "administrer"], proof_ctx: "Hors sujet." },
        "Succession/Consécution": { status: "nul", senses: ["suivre"], proof_ctx: "Hors sujet." },
        "Bienfaisance/Don": { status: "nul", senses: ["accorder"], proof_ctx: "Hors sujet." },
        "Droit/Mérite": { status: "nul", senses: ["avoir droit"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "qwl", position: 28, sense_chosen: "dire",
    reason: "qūlū est l'impératif 2MP de q-w-l — commande adressée aux croyants d'énoncer la déclaration qui suit.",
    analysis_axes: {
      sense_chosen: "dire", concept_chosen: "Parole/Énonciation",
      concepts: {
        "Parole/Énonciation": { status: "retenu", senses: ["dire", "parler", "énoncer"],
          proof_ctx: "qūlū est l'impératif 2MP — commande d'énoncer le discours qui suit (ishhadū...). Sens simple de l'acte de parler." },
        "Pensée/Avis": { status: "peu_probable", senses: ["penser", "estimer"],
          proof_ctx: "Incompatible avec un impératif qui introduit immédiatement un discours direct." },
        "Sens isolé/Puissance": { status: "nul", senses: ["force"], proof_ctx: "Hors sujet." },
        "Corps/Anatomie": { status: "nul", senses: ["langue"], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: "shhd", position: 29, sense_chosen: "témoigner",
    reason: "ishhadū est l'impératif 2MP de sh-h-d — commande de témoigner, d'attester. Forme I (simple) de la racine.",
    analysis_axes: {
      sense_chosen: "témoigner", concept_chosen: "Témoignage/Déclaration",
      concepts: {
        "Témoignage/Déclaration": { status: "retenu", senses: ["témoigner", "attester", "déclarer"],
          proof_ctx: "ishhadū est l'impératif 2MP de shahida — commande de déclarer publiquement avec certitude. Le verbe est suivi de bi-annā (que nous...) qui introduit le contenu de la déclaration. Le sens 'Présence/Constatation' est voisin mais ici il s'agit d'une déclaration publique adressée aux interlocuteurs, pas seulement de constater." },
        "Présence/Constatation": { status: "peu_probable", senses: ["être présent", "constater"],
          proof_ctx: "shahida peut signifier 'être présent/constater' mais l'impératif adressé aux interlocuteurs ('soyez témoins que nous...') active le sens déclaratif." },
        "Serment/Engagement": { status: "peu_probable", senses: ["jurer"],
          proof_ctx: "L'engagement solennel est un sens voisin mais l'acte ici est de déclaration d'identité, pas d'engagement contractuel." },
        "Connaissance/Reconnaissance": { status: "nul", senses: ["reconnaître"], proof_ctx: "Hors sujet." },
        "Prise à témoin": { status: "nul", senses: ["prendre à témoin"], proof_ctx: "Hors sujet — ici c'est le sujet qui témoigne, pas qui prend quelqu'un comme témoin." },
        "Martyre/Sacrifice": { status: "nul", senses: ["martyre"], proof_ctx: "Sens post-islamique, hors sujet." },
        "Miel/Substance": { status: "nul", senses: ["miel"], proof_ctx: "Sens concret, hors sujet." }
      }
    }
  },
  {
    word_key: "slm", position: 31, sense_chosen: "se remettre",
    reason: "muslimūna est un participe actif pluriel masculin indéfini (tanwīn nominatif) de la forme IV aslama de s-l-m. Prédicat d'une phrase nominale introduite par anna. Le participe actif de la forme IV désigne celui qui, volontairement et continûment, se remet entièrement à Dieu.",
    analysis_axes: {
      sense_chosen: "se remettre", concept_chosen: "Remise/Reddition",
      concepts: {
        "Remise/Reddition": { status: "retenu", senses: ["se remettre", "se rendre", "s'en remettre", "livrer"],
          proof_ctx: "muslimūna est le participe actif de la forme IV aslama — celui qui fait activement et continûment l'acte de se remettre. Philosophiquement, le participe actif désigne un acte volontaire et entretenu, pas un état subi. Le sens 'Paix/Soumission' (contenant 'soumission', 'islam') pourrait convenir mais il inclut des sens étymologiquement voisins mais sémantiquement confessionnalisés (l'islām au sens institutionnel) qui projettent un label post-islamique sur ce qui est, au moment de la révélation, une pratique ouverte à tous ceux qui se remettent à Dieu. Le sens 'sain et sauf' (Intégrité/Santé) décrit la forme I intransitive — état de préservation — philosophiquement incompatible avec la forme IV active et dirigée." },
        "Paix/Soumission": { status: "probable", senses: ["paix", "soumission", "islam", "salut"],
          proof_ctx: "Ce groupe de sens contient le sens 'paix' (état étymologique premier de la racine s-l-m) et le sens 'soumission' qui est parfois donné à aslama. 'Paix' ne convient pas au participe actif pluriel (muslim n'est pas 'pacifié' mais 'qui se remet'). 'Soumission' suggère en français une passivité imposée, alors que la forme IV aslama est active et volontaire. 'Islam' comme label confessionnel est un sens post-islamique qui aplatit l'acte coranique en identité institutionnelle." },
        "Intégrité/Santé": { status: "peu_probable", senses: ["sain et sauf"],
          proof_ctx: "La forme I salima (être sain et sauf) désigne un état intransitif de préservation. Philosophiquement incompatible avec le participe actif de la forme IV qui dit un acte dirigé vers l'extérieur (se remettre À quelqu'un)." },
        "Salutation": { status: "nul", senses: ["saluer"],
          proof_ctx: "La forme II sallama (saluer = prononcer salām ʿalaykum) désigne un acte de parole, pas l'acte de remise continue." }
      }
    }
  }
];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V64 (verse_id=' + VERSE_ID + ')            ║');
  console.log('║   Verset de la kalimatin sawāʾ                        ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ── Richesse racines ───────────────────────────────────────────────────
  console.log('\n═══ VÉRIFICATION RICHESSE RACINES ═══');
  const roots = Array.from(new Set(VWA_ROWS.map(v => v.word_key)));
  for (const key of roots) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', key);
    if (!wa || !wa.length) { console.log('  [MANQUANT] ' + key); continue; }
    const { data: wm } = await db.from('word_meanings').select('id').eq('analysis_id', wa[0].id);
    const n = wm ? wm.length : 0;
    console.log('  ' + key.padEnd(5) + ' → ' + n + ' sens ' + (n >= 5 ? '[OK]' : '[ATTN]'));
  }

  // ── Étape 1 & 4 — verse_analyses ───────────────────────────────────────
  console.log('\n═══ verse_analyses (UPDATE) ═══');
  const { error: vaErr } = await db.from('verse_analyses').update({
    segments_step1: SEGMENTS_STEP1,
    full_translation: FULL_TRANSLATION_HAMIDULLAH,
    translation_arab: TRANSLATION_ARAB,
    translation_meditational: TRANSLATION_MEDITATIONAL,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments: SEGMENTS,
    validated: true,
    model_used: 'claude-sonnet-4-6-pipeline-maison',
    prompt_version: 'v3'
  }).eq('verse_id', VERSE_ID);
  if (vaErr) throw vaErr;
  console.log('  UPDATE OK');

  // ── Étape 3 — VWA ──────────────────────────────────────────────────────
  console.log('\n═══ Étape 3 — VWA ═══');
  const { data: existing } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existing && existing.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('  Clean: ' + existing.length + ' VWA supprimés.');
  }
  const rows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID, word_key: v.word_key, position: v.position,
    sense_chosen: v.sense_chosen, reason: v.reason, analysis_axes: v.analysis_axes
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(rows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + rows.length + ' VWA');
  for (const v of VWA_ROWS) {
    console.log('  pos=' + String(v.position).padStart(2) + ' [' + v.word_key.padEnd(5) + '] → ' + v.analysis_axes.concept_chosen.padEnd(36) + ' → "' + v.sense_chosen + '"');
  }

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V64 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
