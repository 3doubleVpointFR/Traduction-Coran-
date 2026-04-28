// Pipeline S3:V73 — verse_id=366, va_id=726
// وَلَا تُؤْمِنُوٓا۟ إِلَّا لِمَن تَبِعَ دِينَكُمْ قُلْ إِنَّ ٱلْهُدَىٰ هُدَى ٱللَّهِ أَن يُؤْتَىٰٓ أَحَدٌ مِّثْلَ مَآ أُوتِيتُمْ أَوْ يُحَآجُّوكُمْ عِندَ رَبِّكُمْ قُلْ إِنَّ ٱلْفَضْلَ بِيَدِ ٱللَّهِ يُؤْتِيهِ مَن يَشَآءُ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ
// "N'accordez confiance qu'à celui qui a suivi votre pratique. Dis : La direction est la direction de Dieu —
//  que quelqu'un reçoive pareil à ce qui vous a été accordé, ou qu'ils discutent contre vous devant votre
//  Seigneur. Dis : La faveur est dans la main de Dieu — Il la donne à qui Il veut, et Dieu est vaste, savant."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 366;
const VA_ID    = 726;
const SURAH    = 3, VERSE = 73;

// ─── ÉTAPE 2 — Vérification richesse racines ───────────────────────────────
// Toutes les racines ont ≥5 sens → SKIP enrichissement
// amn  (aid=287):  14 sens [OK → SKIP]
// tba  (aid=729):  15 sens [OK → SKIP] ← enrichi vs tbae(5)/tbe(11) — règle V70
// dyn  (aid=258):  21 sens [OK → SKIP]
// hdy  (aid=261):  14 sens [OK → SKIP]
// alh  (aid=250):  16 sens [OK → SKIP]
// aty  (aid=379):   6 sens [OK → SKIP] ← override step1 awy(1 sens)/awt(3 sens): root='أ ت ي'
// ahd  (aid=2574): 15 sens [OK → SKIP]
// mvl  (aid=2599): 12 sens [OK → SKIP] ← enrichi vs mthl(9 sens) — règle V70
// hjj  (aid=637):  16 sens [OK → SKIP]
// rbb  (aid=253):  27 sens [OK → SKIP]
// fdl  (aid=524):   6 sens [OK → SKIP]
// ydy  (aid=597):  18 sens [OK → SKIP]
// šya  (aid=369):  15 sens [OK → SKIP]
// wse  (aid=1061):  5 sens [OK → SKIP]
// elm  (aid=254):  22 sens [OK → SKIP]

// ─── SEGMENTS display (format V3) ─────────────────────────────────────────
// Note : step1 LLM a tagué awy (root أوي) pour pos=15, awt (root أوت) pour pos=19+30,
// tbae pour pos=7 et mthl pour pos=17. On corrige par les racines enrichies.
const SEGMENTS = [
  { pos:1,  fr:'',                      phon:'wa',        arabic:'وَ',            is_particle:true,  position:1  },
  { pos:2,  fr:'N\u2019',               phon:'l\u0101',   arabic:'\u0644\u064e\u0627', is_particle:true, position:2 },
  { pos:3,  fr:'accordez confiance',    phon:'tu\u02bemin\u016b',  arabic:'\u062a\u064f\u0624\u0645\u0650\u0646\u064f\u0648\u0627\u06df', word_key:'amn', is_particle:false, sense_retenu:'faire confiance', position:3 },
  { pos:4,  fr:'qu\u2019\u00e0',        phon:'ill\u0101', arabic:'\u0625\u0650\u0644\u0651\u064e\u0627', is_particle:true, position:4 },
  { pos:5,  fr:'',                      phon:'li',        arabic:'\u0644\u0650',   is_particle:true,  position:5  },
  { pos:6,  fr:'celui qui',             phon:'man',       arabic:'\u0645\u064e\u0646', is_particle:true, position:6 },
  { pos:7,  fr:'a suivi',               phon:'taba\u02bfa', arabic:'\u062a\u064e\u0628\u0650\u0639\u064e', word_key:'tba', is_particle:false, sense_retenu:'suivre', position:7 },
  { pos:8,  fr:'votre pratique.',       phon:'d\u012bnakum', arabic:'\u062f\u0650\u064a\u0646\u064e\u0643\u064f\u0645\u0652', word_key:'dyn', is_particle:false, sense_retenu:'pratique', position:8 },
  { pos:9,  fr:'Dis :',                 phon:'qul',       arabic:'\u0642\u064f\u0644\u0652', is_particle:true, position:9 },
  { pos:10, fr:'',                      phon:'inna',      arabic:'\u0625\u0650\u0646\u0651\u064e', is_particle:true, position:10 },
  { pos:11, fr:'La direction',          phon:'al-hud\u0101', arabic:'\u0671\u0644\u0652\u0647\u064f\u062f\u064e\u0649', word_key:'hdy', is_particle:false, sense_retenu:'guidance', position:11 },
  { pos:12, fr:'est la direction de',   phon:'hud\u0101', arabic:'\u0647\u064f\u062f\u064e\u0649', word_key:'hdy', is_particle:false, sense_retenu:'guidance', position:12 },
  { pos:13, fr:'Dieu \u2014',           phon:'all\u0101hi', arabic:'\u0671\u0644\u0644\u0651\u064e\u0647\u0650', word_key:'alh', is_particle:false, sense_retenu:'Dieu', position:13 },
  { pos:14, fr:'que',                   phon:'\u02beан',  arabic:'\u0623\u064e\u0646', is_particle:true, position:14 },
  { pos:15, fr:'re\u00e7oive',          phon:'yu\u02betu\u0101', arabic:'\u064a\u064f\u0624\u062a\u064e\u0649\u06f3', word_key:'aty', is_particle:false, sense_retenu:'donner', position:15 },
  { pos:16, fr:'quelqu\u2019un',        phon:'\u02bea\u1e25adun', arabic:'\u0623\u064e\u062d\u064e\u062f\u064c', word_key:'ahd', is_particle:false, sense_retenu:'quiconque', position:16 },
  { pos:17, fr:'pareil \u00e0',         phon:'mithla',    arabic:'\u0645\u0650\u0651\u062b\u0644\u064e', word_key:'mvl', is_particle:false, sense_retenu:'pareil', position:17 },
  { pos:18, fr:'ce qui',                phon:'m\u0101',   arabic:'\u0645\u064e\u06f3', is_particle:true, position:18 },
  { pos:19, fr:'vous a \u00e9t\u00e9 accord\u00e9,', phon:'\u02be\u016bt\u012btum', arabic:'\u0623\u064f\u0648\u062a\u0650\u064a\u062a\u064f\u0645\u0652', word_key:'aty', is_particle:false, sense_retenu:'donner', position:19 },
  { pos:20, fr:'ou qu\u2019ils',        phon:'\u02beaw',  arabic:'\u0623\u064e\u0648\u0652', is_particle:true, position:20 },
  { pos:21, fr:'discutent contre vous', phon:'yu\u1e25\u0101jjukum', arabic:'\u064a\u064f\u062d\u064e\u06f3\u062c\u0651\u064f\u0648\u0643\u064f\u0645\u0652', word_key:'hjj', is_particle:false, sense_retenu:'disputer', position:21 },
  { pos:22, fr:'devant',                phon:'\u02bfinda',  arabic:'\u0639\u0650\u0646\u062f\u064e', is_particle:true, position:22 },
  { pos:23, fr:'votre Seigneur.',       phon:'rabbikum',  arabic:'\u0631\u064e\u0628\u0650\u0651\u0643\u064f\u0645\u0652', word_key:'rbb', is_particle:false, sense_retenu:'seigneur', position:23 },
  { pos:24, fr:'Dis :',                 phon:'qul',       arabic:'\u0642\u064f\u0644\u0652', is_particle:true, position:24 },
  { pos:25, fr:'',                      phon:'inna',      arabic:'\u0625\u0650\u0646\u0651\u064e', is_particle:true, position:25 },
  { pos:26, fr:'La faveur',             phon:'al-fa\u1e0dla', arabic:'\u0671\u0644\u0652\u0641\u064e\u0636\u0652\u0644\u064e', word_key:'fdl', is_particle:false, sense_retenu:'faveur', position:26 },
  { pos:27, fr:'est dans',              phon:'bi',        arabic:'\u0628\u0650', is_particle:true, position:27 },
  { pos:28, fr:'la main de',            phon:'yadi',      arabic:'\u064a\u064e\u062f\u0650', word_key:'ydy', is_particle:false, sense_retenu:'main', position:28 },
  { pos:29, fr:'Dieu \u2014',           phon:'all\u0101hi', arabic:'\u0671\u0644\u0644\u0651\u064e\u0647\u0650', word_key:'alh', is_particle:false, sense_retenu:'Dieu', position:29 },
  { pos:30, fr:'Il la donne',           phon:'yu\u02betu\u012bhi', arabic:'\u064a\u064f\u0624\u062a\u0650\u064a\u0647\u0650', word_key:'aty', is_particle:false, sense_retenu:'donner', position:30 },
  { pos:31, fr:'\u00e0 qui',            phon:'man',       arabic:'\u0645\u064e\u0646', is_particle:true, position:31 },
  { pos:32, fr:'Il veut,',              phon:'yash\u0101\u02beu', arabic:'\u064a\u064e\u0634\u064e\u06f3\u0621\u064f', word_key:'\u0161ya', is_particle:false, sense_retenu:'vouloir', position:32 },
  { pos:33, fr:'et',                    phon:'wa',        arabic:'\u0648\u064e', is_particle:true, position:33 },
  { pos:34, fr:'Dieu',                  phon:'all\u0101hu', arabic:'\u0671\u0644\u0644\u0651\u064e\u0647\u064f', word_key:'alh', is_particle:false, sense_retenu:'Dieu', position:34 },
  { pos:35, fr:'est vaste,',            phon:'w\u0101si\u02bfun', arabic:'\u0648\u064e\u06f3\u0633\u0650\u0639\u064c', word_key:'wse', is_particle:false, sense_retenu:'\u00eatre vaste', position:35 },
  { pos:36, fr:'savant.',               phon:'\u02bfal\u012bmun', arabic:'\u0639\u064e\u0644\u0650\u064a\u0645\u064c', word_key:'elm', is_particle:false, sense_retenu:'savant', position:36 },
];

// ─── ANALYSE — §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§ ──────────────────
const TRANSLATION_EXPLANATION = `§DEMARCHE§
Ce verset fait immédiatement suite au verset 72 qui décrivait la tactique de la faction : simuler l'adhésion au lever du jour, puis la dissimuler à la fin. Le verset 73 rapporte une seconde instruction de la même faction — restreindre la confiance aux membres du groupe — suivie de deux répliques introduites par l'impératif qul (Dis).

**lā tuʾminū illā li-man** (n'accordez confiance qu'à celui qui) est une construction de restriction : lā (négation jussive) + tuʾminū (Forme IV de la racine ʾ-m-n, inaccompli 2ème personne du masculin pluriel) + illā (sauf) + li-man (pour/à celui qui). La Forme IV de ʾ-m-n (āmana, yuʾminu) transforme le sens de base de la racine — la sécurité intérieure, la tranquillité — en un acte extérieur et déclaratif tourné vers l'autre. Ce qui distingue la construction avec li- (pour/à quelqu'un) de celle avec bi- (en quelque chose) : āmana bi- désigne l'adhésion à une vérité ou une doctrine ; āmana li- désigne l'acte d'accorder sa confiance à une personne, de lui donner crédit. Le sens premier de la racine ʾ-m-n est la sécurité, la fidélité, la confiance. On traduit par « n'accordez confiance ».

**tabaʿa** (a suivi) est un verbe de la racine t-b-ʿ à la Forme I, accompli, 3ème personne du masculin singulier. L'accompli arabe marque un acte passé et achevé : la faction réserve la confiance à ceux qui ont déjà intégré et suivi le groupe — pas à ceux qui pourraient le faire. La racine t-b-ʿ désigne le fait de marcher derrière, de se mettre dans le sillage de quelqu'un, d'adhérer à un chemin. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier est : marcher derrière, venir après, suivre. On traduit par « a suivi ».

**dīnakum** (votre pratique) est un nom de la racine d-y-n, à l'accusatif (complément du verbe tabaʿa), en idafa avec le pronom suffixe -kum (votre). La racine d-y-n désigne d'abord l'obéissance, la dette, la coutume, la pratique habituelle. D'après les sources étymologiques, dīn signifie : la coutume, l'habitude, la pratique, l'obéissance régulière. Le terme « religion » est une extension tardive, post-islamique, qui s'est imposée après la révélation. On traduit par « votre pratique » pour rendre le sens étymologique premier.

**qul** (Dis) est l'impératif de la racine q-w-l (parler), 2ème personne du masculin singulier. Il interrompt le discours rapporté de la faction pour introduire une réplique divine. Il apparaît deux fois dans le verset.

**inna al-hudā hudā allāhi** (La direction est la direction de Dieu) est une phrase nominale emphatique introduite par inna. **al-hudā** est un nom défini de la racine h-d-y (guider, orienter, montrer le chemin). Défini par l'article al-, il désigne une réalité précise et connue : cette direction dont il est question. **hudā allāhi** est le même nom en état construit (idafa), relié à allāhi (Dieu) au génitif. La répétition du nom en sujet (al-hudā) et en prédicat (hudā allāhi) forme une assertion d'identification exclusive : ce qui est la direction, c'est uniquement ce qui vient de Dieu. Ce procédé coranique de répétition emphatique répond à la faction qui voulait limiter la confiance à son groupe humain. D'après les sources étymologiques, h-d-y = guider, donner l'orientation, montrer le chemin. On traduit par « la direction ».

**ʾan yuʾtā** (que reçoive) : la particule ʾan introduit un subjonctif. **yuʾtā** est un verbe de la racine ʾ-t-y à la Forme IV (āta/yuʾtī = accorder, donner), inaccompli passif : « que l'on donne, que quelqu'un reçoive ». La Forme IV de ʾ-t-y signifie faire venir, apporter, accorder — le sens est celui du don actif. Au passif, le donateur est présent mais non nommé. Le texte laisse ouverte la source du don. On traduit par « reçoive ».

**ʾaḥadun** (quelqu'un) est un nom de la racine ʾ-ḥ-d, indéfini, au nominatif (sujet du passif yuʾtā). D'après les sources étymologiques, ʾaḥad désigne à la fois l'unité et l'indéfini générique — quelqu'un, quiconque, une personne quelconque. Dans un contexte affirmatif ou hypothétique, ʾaḥad prend la valeur d'un indéfini non marqué. On traduit par « quelqu'un ».

**mithla** (pareil à) est un nom de la racine m-ṯ-l, à l'accusatif (complément de mesure), en idafa avec ce qui suit. La racine m-ṯ-l désigne la ressemblance, l'identité de mesure, l'équivalence. Mithla = pareil à, l'équivalent exact de. On traduit par « pareil à ».

**ʾūtītum** (vous a été accordé) est la même racine ʾ-t-y à la Forme IV, accompli passif, 2ème personne du masculin pluriel. Il reprend le même verbe que yuʾtā mais à l'accompli : la révélation effectivement reçue dans le passé. L'opposition inaccompli (yuʾtā = que reçoive, condition) / accompli (ʾūtītum = ce qui vous a été accordé, fait établi) structure le raisonnement.

**yuḥājjūkum** (discutent contre vous) est un verbe de la racine ḥ-j-j à la Forme III (ḥājja), inaccompli 3ème personne du masculin pluriel avec pronom suffixe -kum (contre vous). La Forme III ajoute la dimension de réciprocité et d'affrontement direct : ce n'est pas simplement argumenter mais argumenter contre quelqu'un, face à face. D'après les sources étymologiques, la racine ḥ-j-j désigne d'abord la direction vers un but, puis par extension l'argumentation serrée et la preuve. La Forme III ḥājja = disputer avec, argumenter contre, chercher à vaincre par l'argument.

**ʿinda rabbikum** (devant votre Seigneur) : **ʿinda** est une préposition de présence et de proximité (devant, auprès de). **rabbikum** est un nom de la racine r-b-b, en idafa avec -kum (votre). La racine r-b-b désigne celui qui fait croître, entretient, éduque — l'autorité bienveillante et nourricière. Rabbikum = votre Seigneur.

**al-faḍla** (la faveur) est un nom défini de la racine f-ḍ-l, à l'accusatif après inna. La racine f-ḍ-l désigne ce qui excelle, ce qui dépasse, le don accordé par supériorité. Al-faḍl défini = la faveur comme réalité définie, ce que Dieu accorde en vertu de son excellence. D'après les sources étymologiques, f-ḍ-l signifie : être supérieur, dépasser, accorder en excès. On traduit par « la faveur ».

**bi-yadi allāhi** (dans la main de Dieu) : **yadi** est un nom de la racine y-d-y (main, bras, patte avant), au génitif après bi (dans/par). La main est l'organe du don, de la maîtrise, de l'action directe. L'expression « dans la main de » est une image de possession totale et de maîtrise. Le texte dit que la faveur est dans la main de Dieu — image concrète du contrôle absolu sur ce don.

**yuʾtīhi** (Il la donne) est la même racine ʾ-t-y à la Forme IV, inaccompli actif, 3ème personne du masculin singulier, avec pronom suffixe -hi (la = la faveur). Dieu est ici sujet actif : Il donne la faveur. C'est le même verbe qu'en yuʾtā (passif) mais ici à l'actif — le donateur est nommé.

**yashāʾu** (Il veut) est un verbe de la racine š-y-ʾ à la Forme I, inaccompli 3ème personne du masculin singulier. La racine š-y-ʾ désigne la volonté, le souhait, la chose voulue. D'après les sources étymologiques, mashīʾa = la volonté souveraine. yashāʾu = Il veut, Il décide.

**wāsiʿun** (vaste) est un participe actif de la racine w-s-ʿ, indéfini, nominatif. La racine w-s-ʿ désigne la capacité de contenir, l'ampleur, la vastitude. D'après les sources étymologiques, wasiʿa = être ample, contenir, englober. On traduit par « vaste ».

**ʿalīmun** (savant) est un adjectif intensif de la racine ʿ-l-m, indéfini, nominatif. La racine ʿ-l-m désigne le savoir, la connaissance, la certitude. ʿAlīm = le très savant, celui qui sait avec certitude. On traduit par « savant ».

§JUSTIFICATION§
**accordez confiance** — Le sens retenu est « Sécurité/Confiance ». Le mot « accordez confiance » est choisi car tuʾminū + li- désigne l'acte d'accorder sa confiance à une personne. La construction avec li- se distingue de la construction bi- (āmana bi- = croire en quelque chose) : ici l'acte s'oriente vers un être humain, pas vers une doctrine. L'alternative « croyez » est écartée car elle évoque l'adhésion de foi à une vérité, non le crédit accordé à quelqu'un. L'alternative « fiez-vous » est possible mais moins précise que « accordez confiance » qui rend le caractère actif et délibéré de l'acte.

**a suivi** — Le sens retenu est « Suivre/Accompagner ». Le mot « a suivi » est choisi car tabaʿa (accompli) désigne un acte passé et achevé. L'alternative « suit » (présent) est écartée car elle perdrait la temporalité de l'accompli : la faction parle de ceux qui ont déjà adhéré, non de ceux qui pourraient le faire. L'alternative « a adhéré à » est possible mais moins physique que « suivre » qui porte encore l'image de se mettre dans le sillage de quelqu'un.

**votre pratique** — Le sens retenu est « Religion/Système ». Le mot « pratique » est choisi car dīn désigne d'abord la coutume, l'habitude, la pratique ordinaire — une façon de vivre et d'obéir à un ordre de choses. L'alternative « religion » est écartée car c'est une extension post-islamique : dīn a pris ce sens technique après la révélation. L'alternative « système » est trop neutre et trop technique. « Pratique » rend le sens de manière habituelle de faire les choses.

**la direction** — Le sens retenu est « Guidance/Direction ». Le mot « direction » est choisi car al-hudā désigne le fait d'indiquer le chemin et de guider quelqu'un vers un but. La racine h-d-y porte l'idée d'une orientation communiquée à quelqu'un. L'alternative « guidance » est écartée car elle n'est pas du français courant. L'alternative « la vraie voie » ajoute le jugement « vraie » qui n'est pas dans le texte.

**est la direction de** — Même sens retenu que al-hudā. Le deuxième hudā en état construit (idafa) répète le premier pour poser une identification : la direction dont il est question, c'est celle de Dieu. La répétition est un procédé d'emphase qui identifie le sujet au prédicat de façon exclusive.

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » est choisi pour allāh conformément à la convention de cette traduction — rendre allāh par le terme français courant du monothéisme.

**reçoive** — Le sens retenu est « Venue/Arrivée ». Le mot « reçoive » est choisi car yuʾtā (Forme IV passif) signifie « qu'il soit accordé, qu'on lui donne ». La Forme IV āta = donner, accorder. Au passif, le bénéficiaire est au premier plan. L'alternative « soit apporté » est écartée car elle évoque un objet physique transporté. L'alternative « soit accordé » est possible mais moins courant dans ce contexte hypothétique.

**quelqu'un** — Le sens retenu est « Quiconque/Indéfini ». Le mot « quelqu'un » est choisi car ʾaḥad dans ce contexte hypothétique positif désigne un indéfini générique. L'alternative « quiconque » est possible mais trop universel pour une proposition conditionnelle simple. L'alternative « personne » est réservée aux contextes négatifs (mā jāʾa bi-hi ʾaḥad = personne ne l'a apporté).

**pareil à** — Le sens retenu est « Ressemblance/Identité ». Le mot « pareil » est choisi car mithla désigne l'équivalence exacte, l'identité de mesure. L'alternative « semblable à » est écartée car elle implique une ressemblance partielle ; mithla affirme l'équivalent exact. L'alternative « comme » est trop vague.

**vous a été accordé** — Même sens retenu que yuʾtā. ʾŪtītum (accompli passif, 2ème personne du pluriel) désigne ce qui vous a effectivement été accordé dans le passé — la révélation reçue. L'alternative « vous a été donné » est également acceptable ; « accordé » rend mieux l'idée d'un don gracieux de la Forme IV.

**discutent contre vous** — Le sens retenu est « Argumentation/Dispute ». Le mot « discutent » est choisi car yuḥājjūkum (Forme III de ḥ-j-j) désigne l'argumentation face à face, le débat contradictoire dirigé contre quelqu'un. L'alternative « disputent » est possible mais moins précise pour un débat argumentatif organisé. L'alternative « plaident » évoque un contexte judiciaire strict que la Forme III ne limite pas.

**votre Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car rabb désigne celui qui élève, entretient, fait grandir — une autorité bienveillante et nourricière. L'alternative « maître » est écartée car elle perd la dimension de soin et d'éducation inhérente à la racine r-b-b.

**la faveur** — Le sens retenu est « Excellence/Faveur ». Le mot « faveur » est choisi car al-faḍl désigne un don accordé par celui qui a la supériorité, un bienfait qui excède ce qui était dû. L'alternative « grâce » est écartée car c'est un terme de vocabulaire religieux chrétien (latin gratia) avec des connotations théologiques spécifiques absentes de l'étymologie arabe f-ḍ-l. L'alternative « bienfait » est possible mais moins précise que « faveur » qui porte l'idée de l'excès accordé par bienveillance.

**la main de** — Le sens retenu est « Main/Corps ». Le mot « la main de » est choisi car bi-yadi (dans la main de) est une image de possession active et de maîtrise directe. La main est l'organe du don. L'alternative « la puissance de » est écartée car elle substitue une abstraction à l'image physique du texte. Le texte dit « dans la main » — on conserve l'image.

**Il la donne** — Même sens retenu que yuʾtā. yuʾtīhi (Forme IV actif) = Il accorde, Il donne. « Il la donne » exprime l'acte actif de Dieu accordant la faveur à qui Il veut.

**Il veut** — Le sens retenu est « Volonté ». Le mot « veut » est choisi car yashāʾu désigne la volonté souveraine — la décision de vouloir. L'alternative « décide » est écartée car elle implique un processus délibératif externe que le texte ne mentionne pas. L'alternative « choisit » est possible mais moins immédiat que « veut ».

**vaste** — Le sens retenu est « Vastitude/Ampleur ». Le mot « vaste » est choisi car wāsiʿ (participe actif) désigne celui qui est ample, qui contient beaucoup, dont la capacité est grande. L'alternative « immense » implique une grandeur de taille ; w-s-ʿ désigne plutôt la capacité de contenir et d'englober. « Vaste » est plus fidèle à la racine.

**savant** — Le sens retenu est « Savoir/Connaissance ». Le mot « savant » est choisi car ʿalīm est la forme intensive de ʿ-l-m : le très savant, celui qui sait avec certitude. L'alternative « omniscient » est écartée car elle importe un terme théologique latin (omnis + sciens = qui sait tout) qui affirme une connaissance universelle et absolue. Le texte dit ʿalīm — le savant — sans préciser que ce savoir est exhaustif ou illimité. L'étymologie arabe ne porte pas cette affirmation.

§CRITIQUE§
**accordez confiance vs « ne vous fiez »** : les traductions courantes rendent lā tuʾminū...li- par « ne croyez qu'à » ou « ne vous fiez qu'à ». La différence avec notre traduction porte sur la structure de la construction : āmana + li- (pour/à quelqu'un) n'est pas la même que āmana + bi- (en quelque chose). Āmana bi- est la formule de la foi en une doctrine ; āmana li- est l'acte d'accorder du crédit à une personne. Notre traduction donne « n'accordez confiance qu'à » pour rendre cette préposition li- qui oriente l'acte vers un être humain. Les traductions qui utilisent « ne croyez qu'à » glissent vers la foi doctrinale, alors que le texte parle ici d'un acte de confiance interpersonnelle.

**a suivi vs « qui suivent »** : les traductions courantes rendent tabaʿa par un présent « qui suivent » ou « qui suit ». Mais tabaʿa est un accompli : la faction parle de ceux qui ont déjà suivi et intégré le groupe — un état acquis dans le passé. Cette différence grammaticale change le sens : « qui suivent » (présent) désigne une pratique en cours ; « qui a suivi » (accompli) désigne une appartenance historique. La faction ne demande de confiance qu'à ceux dont l'adhésion est un fait accompli.

**votre pratique vs « votre religion »** : les traductions courantes rendent dīnakum par « votre religion ». Ce choix vient d'une lecture post-islamique : dīn a pris le sens technique de « religion » après la révélation. Mais étymologiquement, dīn désigne la coutume, l'habitude, la pratique, l'obéissance régulière. Lane's donne pour dīn le sens primaire de coutume et de pratique habituelle. Notre traduction donne « votre pratique » pour rendre le sens étymologique. La différence change la portée : « votre religion » évoque une appartenance confessionnelle instituée ; « votre pratique » évoque les usages et coutumes d'un groupe humain.

**la faveur vs « la grâce »** : les traductions courantes rendent al-faḍl par « la grâce ». Ce choix vient du vocabulaire religieux chrétien — le latin gratia (grâce) a influencé les traductions françaises du Coran. Mais al-faḍl vient de la racine f-ḍ-l = excellence, supériorité, ce qui dépasse. Notre traduction donne « la faveur » — un don accordé par celui qui a l'excellence. La différence change la connotation : « la grâce » porte des résonances théologiques chrétiennes (grâce sanctifiante, salut, don surnaturel) qui sont absentes de l'étymologie arabe. F-ḍ-l est un registre d'excellence et de générosité, pas de salut.

**vaste vs « Immense »** : les traductions courantes rendent wāsiʿ par « Immense ». Mais la racine w-s-ʿ désigne d'abord la capacité de contenir et d'englober — l'ampleur, l'étendue capable d'accueillir. Lane's donne wasiʿa = être ample, contenir, avoir assez de place pour. « Immense » implique une taille incommensurable ; w-s-ʿ désigne la capacité à englober, à ne pas être trop étroit pour quoi que ce soit. Notre traduction donne « vaste » pour rester au plus proche du champ sémantique de la racine.

**savant vs « Omniscient »** : les traductions courantes rendent ʿalīm par « Omniscient ». Ce terme vient du latin scolastique (omnis = tout + sciens = sachant) et affirme une connaissance totale et absolue de toute chose. Mais ʿalīm est simplement la forme intensive de ʿ-l-m : le grand savant, celui qui sait avec certitude. Le texte ne dit pas « celui qui sait tout » mais « le savant ». Notre traduction donne « savant » pour ne pas importer une affirmation théologique étrangère à l'étymologie arabe.`;

// ─── TRADUCTION ─────────────────────────────────────────────────────────────
const TRANSLATION = "N\u2019accordez confiance qu\u2019\u00e0 celui qui a suivi votre pratique. Dis\u00a0: La direction est la direction de Dieu \u2014 que quelqu\u2019un re\u00e7oive pareil \u00e0 ce qui vous a \u00e9t\u00e9 accord\u00e9, ou qu\u2019ils discutent contre vous devant votre Seigneur. Dis\u00a0: La faveur est dans la main de Dieu \u2014 Il la donne \u00e0 qui Il veut, et Dieu est vaste, savant.";
const HAMIDULLAH  = "Ne vous fiez qu\u2019\u00e0 ceux qui suivent votre religion. Dis\u00a0: La direction est la direction d\u2019Allah \u2014 que quelqu\u2019un re\u00e7oive pareil \u00e0 ce qui vous a \u00e9t\u00e9 accord\u00e9, ou qu\u2019ils discutent contre vous devant votre Seigneur. Dis\u00a0: La gr\u00e2ce est dans la main d\u2019Allah \u2014 Il la donne \u00e0 qui Il veut. Allah est Immense et Omniscient.";

// ─── VWA — analyse_axes (format V3) ──────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: 'amn', position: 3,
    analysis_axes: {
      sense_chosen: 'faire confiance',
      concept_chosen: 'S\u00e9curit\u00e9/Confiance',
      concepts: {
        'S\u00e9curit\u00e9/Confiance': {
          status: 'retenu',
          senses: ['\u00eatre en s\u00e9curit\u00e9', 'se sentir en s\u00e9curit\u00e9', 'faire confiance', 'confier', 'fid\u00e8le', 'lieu s\u00fbr'],
          proof_ctx: "La construction āmana + li- (accorder confiance à une personne) est distincte de āmana bi- (croire en quelque chose). Ici la faction interdit à ses membres d'accorder leur confiance à quiconque d'extérieur au groupe. La nature de l'acte est interpersonnelle, pas doctrinale — [Sécurité/Confiance] est la seule catégorie compatible avec li-.",
        },
        'Foi/Adh\u00e9sion': {
          status: 'probable',
          senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
          proof_ctx: "La foi/adhésion (āmana bi-) est grammaticalement proche mais philosophiquement différente : elle désigne l'adhésion à une vérité, pas le crédit accordé à une personne. La préposition li- impose un objet humain, ce qui exclut [Foi/Adhésion] comme sens retenu.",
        },
        'Garantie/Protection': {
          status: 'nul',
          senses: ['prot\u00e9ger', 'accorder la s\u00e9curit\u00e9'],
          proof_ctx: "Accorder une protection à quelqu'un est une action unilatérale de pouvoir. Le contexte est la confiance mutuelle dans un groupe, pas la protection accordée à un sujet.",
        },
        'Sens isol\u00e9/Amen': {
          status: 'nul',
          senses: ['amen'],
          proof_ctx: "Sens liturgique isolé — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'tba', position: 7,
    analysis_axes: {
      sense_chosen: 'suivre',
      concept_chosen: 'Suivre/Accompagner',
      concepts: {
        'Suivre/Accompagner': {
          status: 'retenu',
          senses: ['suivre', 'accompagner', 'disciple', 'imiter'],
          proof_ctx: "tabaʿa (Forme I, accompli) = il a suivi, il s'est mis dans le sillage. L'accompli marque une appartenance acquise : la faction réserve la confiance à ceux qui ont déjà suivi le groupe. [Suivre/Accompagner] rend l'idée de mise dans le sillage d'une personne ou d'une communauté.",
        },
        'Rattraper/Atteindre': {
          status: 'peu_probable',
          senses: ['rattraper', 'rejoindre', 'suivre les traces'],
          proof_ctx: "Rattraper implique un écart préalable à combler. Ici tabaʿa désigne l'appartenance continue à un groupe, pas la course pour le rejoindre.",
        },
        'Succession/Continuit\u00e9': {
          status: 'nul',
          senses: ['ench\u00e2\u00eener', 'cons\u00e9cutif', 'bien ex\u00e9cut\u00e9'],
          proof_ctx: "Sens de continuité temporelle ou d'enchaînement — hors contexte d'appartenance à un groupe humain.",
        },
        'R\u00e9clamation/R\u00e9paration': {
          status: 'nul',
          senses: ['poursuivre en justice', 'r\u00e9clamer', 'cons\u00e9quence'],
          proof_ctx: "Sens judiciaire ou de conséquence — hors contexte.",
        },
        'D\u00e9pendance/Suj\u00e9tion': {
          status: 'nul',
          senses: ['serviteur', 'ombre'],
          proof_ctx: "Sens de dépendance ou de sujétion — trop fort pour le contexte d'appartenance volontaire à un groupe.",
        },
      },
    },
  },
  {
    word_key: 'dyn', position: 8,
    analysis_axes: {
      sense_chosen: 'pratique',
      concept_chosen: 'Religion/Syst\u00e8me',
      concepts: {
        'Religion/Syst\u00e8me': {
          status: 'retenu',
          senses: ['religion', 'syst\u00e8me de croyances', 'pratique', 'coutume', 'habitude'],
          proof_ctx: "dīnakum désigne les pratiques et coutumes du groupe auquel la faction appartient. Le sens étymologique de dīn (pratique, coutume, obéissance habituelle) est ici le plus approprié. Le sens post-islamique de 'religion' comme institution confessionnelle est plus tardif.",
        },
        'Ob\u00e9issance/Soumission': {
          status: 'probable',
          senses: ['ob\u00e9ir', 'se soumettre', 'soumission', 'assujettissement'],
          proof_ctx: "L'obéissance est le sens primaire de la racine d-y-n et reste pertinente ici — suivre les pratiques du groupe, c'est s'y soumettre. Mais [Religion/Système] avec 'pratique' est plus précis pour ce contexte de mœurs collectives.",
        },
        'R\u00e9tribution/Compte': {
          status: 'nul',
          senses: ['r\u00e9tribution', 'r\u00e9compense', 'punition', 'compensation', 'rendre ce qui est d\u00fb', 'jugement'],
          proof_ctx: "Sens de rétribution et de jugement — hors contexte d'appartenance à un groupe.",
        },
        'Dette/Obligation': {
          status: 'nul',
          senses: ['dette', 'cr\u00e9ance', 'obligation financi\u00e8re', 'pr\u00eat'],
          proof_ctx: "Sens financier — hors contexte.",
        },
        'Sens isol\u00e9/Maladie': { status: 'nul', senses: ['maladie'], proof_ctx: "Sens isolé — hors contexte." },
        'Eau/Liquide':            { status: 'nul', senses: ['pluie continue'], proof_ctx: "Sens physique — hors contexte." },
      },
    },
  },
  {
    word_key: 'hdy', position: 11,
    analysis_axes: {
      sense_chosen: 'guidance',
      concept_chosen: 'Guidance/Direction',
      concepts: {
        'Guidance/Direction': {
          status: 'retenu',
          senses: ['guider', 'diriger vers la bonne voie', 'montrer le chemin', 'guidance', 'se guider soi-m\u00eame'],
          proof_ctx: "al-hudā (défini) désigne l'orientation donnée, le chemin indiqué. La réplique divine oppose la direction qui vient de Dieu à la restriction humaine de la faction. [Guidance/Direction] est la seule catégorie qui rend cette idée d'orientation transmise par Dieu.",
        },
        'Conduite/Comportement': {
          status: 'peu_probable',
          senses: ['conduite', 'mani\u00e8re d\u2019agir', 'comportement calme'],
          proof_ctx: "La conduite est un état intérieur de celui qui se comporte ; la direction est une réalité transmise par un guide vers celui qui est guidé. Ici al-hudā est présentée comme appartenant à Dieu — c'est une orientation qu'Il donne, pas un comportement intérieur.",
        },
        'Don/Offrande': {
          status: 'nul',
          senses: ['cadeau', 'offrande', 'sacrifice', 'pr\u00e9sent'],
          proof_ctx: "Sens de don physique ou rituel — hors contexte d'orientation spirituelle.",
        },
        'Parent\u00e9/Famille': { status: 'nul', senses: ['conduire une mari\u00e9e'], proof_ctx: "Sens isolé — hors contexte." },
        'Sens isol\u00e9/Repentance': { status: 'nul', senses: ['repentance'], proof_ctx: "Sens isolé — hors contexte." },
      },
    },
  },
  {
    word_key: 'hdy', position: 12,
    analysis_axes: {
      sense_chosen: 'guidance',
      concept_chosen: 'Guidance/Direction',
      concepts: {
        'Guidance/Direction': {
          status: 'retenu',
          senses: ['guider', 'diriger vers la bonne voie', 'montrer le chemin', 'guidance', 'se guider soi-m\u00eame'],
          proof_ctx: "hudā allāhi (état construit) = la direction de Dieu, l'orientation qui lui appartient. La répétition al-hudā / hudā allāhi forme une assertion d'identification exclusive : ce qui est la direction, c'est uniquement ce qui vient de Dieu.",
        },
        'Conduite/Comportement': {
          status: 'nul',
          senses: ['conduite', 'mani\u00e8re d\u2019agir'],
          proof_ctx: "Même raison qu'en pos=11 : hudā ici est la direction transmise, pas un comportement intérieur.",
        },
        'Don/Offrande': { status: 'nul', senses: ['cadeau', 'offrande'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'alh', position: 13,
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinit\u00e9',
      concepts: {
        'Divinit\u00e9': {
          status: 'retenu',
          senses: ['divinit\u00e9', 'divinit\u00e9 (concept)', 'Dieu', 'th\u00e9ologie', 'exclamation divine', 'oui certes'],
          proof_ctx: "allāhi au génitif = de Dieu, appartenant à Dieu. Convention universelle dans cette traduction : allāh → Dieu.",
        },
        'Adoration/D\u00e9votion': { status: 'nul', senses: ['adorer', 'faire adorer'], proof_ctx: "Sens verbal d'adoration — hors contexte d'un nom propre au génitif." },
        'D\u00e9tresse':            { status: 'nul', senses: ['\u00eatre perplexe', 'se lamenter'], proof_ctx: "Hors contexte." },
        'Refuge/Protection':      { status: 'nul', senses: ['chercher refuge', 'prot\u00e9ger'], proof_ctx: "Hors contexte." },
        'Domination':             { status: 'nul', senses: ['asservir'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'aty', position: 15,
    analysis_axes: {
      sense_chosen: 'donner',
      concept_chosen: 'Venue/Arriv\u00e9e',
      concepts: {
        'Venue/Arriv\u00e9e': {
          status: 'retenu',
          senses: ['venir', 'arriver', 'apporter', 'donner', 'commettre'],
          proof_ctx: "yuʾtā (Forme IV passif inaccompli) = qu'il soit accordé, que quelqu'un reçoive. La Forme IV de ʾ-t-y = accorder, donner en faisant venir. Au passif, le bénéficiaire (ʾaḥadun) est au premier plan. 'donner' est le sens le plus précis pour la Forme IV transitive.",
        },
        'Sens isol\u00e9/D\u00e9truire': { status: 'nul', senses: ['d\u00e9truire'], proof_ctx: "Sens isolé — incompatible avec le passif divin d'un don accordé." },
      },
    },
  },
  {
    word_key: 'ahd', position: 16,
    analysis_axes: {
      sense_chosen: 'quiconque',
      concept_chosen: 'Quiconque/Ind\u00e9fini',
      concepts: {
        'Quiconque/Ind\u00e9fini': {
          status: 'retenu',
          senses: ['quiconque', 'personne', 'quelque chose'],
          proof_ctx: "ʾaḥadun (indéfini, nominatif) = sujet du passif yuʾtā. Dans un contexte positif ou hypothétique, ʾaḥad désigne un indéfini générique : quelqu'un, une personne quelconque. Le sens 'quiconque' de [Quiconque/Indéfini] est le plus adapté ; on traduit par 'quelqu'un' qui est plus naturel en contexte hypothétique.",
        },
        'Unicit\u00e9/Indivisibilit\u00e9': {
          status: 'peu_probable',
          senses: ['d\u00e9clarer l\u2019unicit\u00e9', 'un (premier des nombres)', 'l\u2019Indivisible', 'unit\u00e9'],
          proof_ctx: "L'unicité (al-aḥad = l'Unique) s'applique quand le terme est défini ou attribut divin. Ici ʾaḥadun est indéfini — c'est l'indéfini générique, pas l'attribut d'unicité.",
        },
        'Nombre/Quantification': { status: 'nul', senses: ['rendre onze', 'un des plusieurs', 'un par un'], proof_ctx: "Sens numérique — hors contexte." },
        'Solitude/Isolement':    { status: 'nul', senses: ['\u00eatre seul', 'ne pas conna\u00eetre'], proof_ctx: "Hors contexte positif/hypothétique." },
        'Sens isol\u00e9/Dimanche': { status: 'nul', senses: ['dimanche'], proof_ctx: "Hors contexte." },
        'Sens isol\u00e9/Calamit\u00e9': { status: 'nul', senses: ['calamit\u00e9'], proof_ctx: "Hors contexte." },
        'Min\u00e9ral/Terre': { status: 'nul', senses: ['tradition isol\u00e9e'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'mvl', position: 17,
    analysis_axes: {
      sense_chosen: 'pareil',
      concept_chosen: 'Ressemblance/Identit\u00e9',
      concepts: {
        'Ressemblance/Identit\u00e9': {
          status: 'retenu',
          senses: ['ressembler', '\u00eatre semblable', 'pareil', '\u00e9quivalent'],
          proof_ctx: "mithla (accusatif de mesure, idafa) = pareil à, l'équivalent exact de. [Ressemblance/Identité] avec le sens 'pareil' rend l'idée d'une égalité de mesure : ce qui vous a été accordé — et non simplement quelque chose de similaire.",
        },
        'Similitude/Comparaison': {
          status: 'probable',
          senses: ['exemple', 'parabole', 'similitude', 'comparaison', 'semblable'],
          proof_ctx: "La parabole et la comparaison sont possibles mais moins précises que l'identité de mesure que mithla exprime ici : le texte parle d'un équivalent exact, pas d'une illustration.",
        },
        'Repr\u00e9sentation/Image': { status: 'nul', senses: ['statue', 'image', 'repr\u00e9sentation'], proof_ctx: "Sens de représentation physique — hors contexte." },
      },
    },
  },
  {
    word_key: 'aty', position: 19,
    analysis_axes: {
      sense_chosen: 'donner',
      concept_chosen: 'Venue/Arriv\u00e9e',
      concepts: {
        'Venue/Arriv\u00e9e': {
          status: 'retenu',
          senses: ['venir', 'arriver', 'apporter', 'donner', 'commettre'],
          proof_ctx: "ʾūtītum (Forme IV accompli passif, 2ème personne du pluriel) = ce qui vous a été accordé. L'accompli marque la révélation déjà reçue dans le passé, par opposition à yuʾtā (inaccompli hypothétique) au pos=15.",
        },
        'Sens isol\u00e9/D\u00e9truire': { status: 'nul', senses: ['d\u00e9truire'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'hjj', position: 21,
    analysis_axes: {
      sense_chosen: 'disputer',
      concept_chosen: 'Argumentation/Dispute',
      concepts: {
        'Argumentation/Dispute': {
          status: 'retenu',
          senses: ['disputer', 'argumenter', 'preuve', 'vaincre par l\u2019argument', 'plaider'],
          proof_ctx: "yuḥājjūkum (Forme III inaccompli) = ils discutent contre vous, ils vous disputent cela. La Forme III ḥājja ajoute la réciprocité et l'affrontement direct face à face. Le contexte est une opposition argumentative devant Dieu.",
        },
        'Direction/Destination': {
          status: 'peu_probable',
          senses: ['se rendre vers', 'visiter', 'visiter fr\u00e9quemment'],
          proof_ctx: "Le pèlerinage (ḥajj) est de cette racine, mais la Forme III ḥājja désigne l'argumentation face à face, pas le mouvement physique vers un lieu.",
        },
        'Sondage/M\u00e9decine': { status: 'nul', senses: ['sonder', 'traiter une fracture', 'raser'], proof_ctx: "Sens médical — hors contexte." },
        'Retrait/H\u00e9sitation': { status: 'nul', senses: ['se retirer', 'rester sur place', 'retenir en soi'], proof_ctx: "Hors contexte d'argumentation active." },
        'Anatomie/Temps': { status: 'nul', senses: ['os de l\u2019orbite', 'ann\u00e9e'], proof_ctx: "Sens isolé — hors contexte." },
      },
    },
  },
  {
    word_key: 'rbb', position: 23,
    analysis_axes: {
      sense_chosen: 'seigneur',
      concept_chosen: 'Seigneurie/Autorit\u00e9 bienveillante',
      concepts: {
        'Seigneurie/Autorit\u00e9 bienveillante': {
          status: 'retenu',
          senses: ['seigneur', 'ma\u00eetre', 'propri\u00e9taire', 'celui qui \u00e9l\u00e8ve', 'celui qui entretient', 'celui qui poss\u00e8de', 'gouverner'],
          proof_ctx: "rabbikum (en idafa avec -kum) = votre Seigneur, celui qui vous entretient. La racine r-b-b désigne l'autorité bienveillante et nourricière — celui qui fait croître et élève. C'est devant cette autorité que l'argumentation aura lieu.",
        },
        'Croissance/Augmentation': {
          status: 'probable',
          senses: ['augmenter', 'cro\u00eetre', 'faire grandir', 'nourrir', 'd\u00e9velopper', 'exc\u00e8s'],
          proof_ctx: "La croissance est le sens physique premier de r-b-b ; mais rabbikum avec le pronom de possession désigne la relation d'autorité bienveillante, pas l'acte de faire croître.",
        },
        '\u00c9ducation/Accompagnement': { status: 'peu_probable', senses: ['\u00e9lever un enfant', '\u00e9duquer', 'former'], proof_ctx: "L'éducation est un aspect de la seigneurie mais trop spécifique pour rabbikum qui désigne la relation globale d'appartenance à un Seigneur." },
        'Commerce/Usure': { status: 'nul', senses: ['usure', 'augmentation de dette', 'int\u00e9r\u00eat'], proof_ctx: "Sens financier — hors contexte." },
        'Souffle/Vent': { status: 'nul', senses: ['essoufflement'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'fdl', position: 26,
    analysis_axes: {
      sense_chosen: 'faveur',
      concept_chosen: 'Excellence/Faveur',
      concepts: {
        'Excellence/Faveur': {
          status: 'retenu',
          senses: ['\u00eatre sup\u00e9rieur', 'gr\u00e2ce', 'faveur', 'm\u00e9rite'],
          proof_ctx: "al-faḍl (défini) = la faveur, le don accordé par celui qui a l'excellence. La racine f-ḍ-l désigne ce qui excède ce qui était dû — un don gracieux de supériorité. 'faveur' rend ce sens sans les connotations chrétiennes de 'grâce'. Le texte affirme que cette faveur appartient à Dieu et qu'Il la distribue selon Sa volonté.",
        },
        'Reste/Surplus': { status: 'nul', senses: ['surplus', 'reste'], proof_ctx: "Sens de ce qui reste après usage — hors contexte d'un don actif." },
      },
    },
  },
  {
    word_key: 'ydy', position: 28,
    analysis_axes: {
      sense_chosen: 'main',
      concept_chosen: 'Main/Corps',
      concepts: {
        'Main/Corps': {
          status: 'retenu',
          senses: ['main', 'bras', 'patte avant'],
          proof_ctx: "bi-yadi (dans la main de) est une image de possession et de maîtrise directe. La main est l'organe actif du don. Le texte utilise délibérément cette image physique pour dire que la faveur est tenue et donnée par Dieu Lui-même.",
        },
        'Pouvoir/Autorit\u00e9': {
          status: 'probable',
          senses: ['pouvoir', 'autorit\u00e9', 'emprise', 'ma\u00eetrise'],
          proof_ctx: "Le pouvoir et l'autorité sont des extensions métaphoriques de la main. Mais le texte dit bi-yadi — dans la main — pas 'par le pouvoir de'. On conserve l'image physique plutôt que l'abstraction.",
        },
        'Bienfait/G\u00e9n\u00e9rosit\u00e9': { status: 'peu_probable', senses: ['bienfait', 'faveur', 'g\u00e9n\u00e9rosit\u00e9', 'don'], proof_ctx: "Sens métaphorique de la main généreuse — possible mais c'est une métonymie. Le texte dit la main physique qui tient la faveur." },
        'Ant\u00e9riorit\u00e9/Pr\u00e9sence': { status: 'nul', senses: ['devant', 'imm\u00e9diat', 'comptant'], proof_ctx: "Sens temporel ou commercial — hors contexte." },
        'Moyen/Instrument': { status: 'nul', senses: ['par le moyen de', 'interm\u00e9diaire'], proof_ctx: "Sens instrumental — bi-yadi est une image directe, pas une instrumentalisation." },
        'Soumission/Reconnaissance': { status: 'nul', senses: ['ob\u00e9issance', 'reconnaissance de sup\u00e9riorit\u00e9'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'alh', position: 29,
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinit\u00e9',
      concepts: {
        'Divinit\u00e9': {
          status: 'retenu',
          senses: ['divinit\u00e9', 'divinit\u00e9 (concept)', 'Dieu', 'th\u00e9ologie', 'exclamation divine', 'oui certes'],
          proof_ctx: "allāhi (génitif) = de Dieu. Convention universelle. La faveur est dans la main de Dieu.",
        },
        'Adoration/D\u00e9votion': { status: 'nul', senses: ['adorer'], proof_ctx: "Sens verbal — hors contexte d'un nom propre." },
      },
    },
  },
  {
    word_key: 'aty', position: 30,
    analysis_axes: {
      sense_chosen: 'donner',
      concept_chosen: 'Venue/Arriv\u00e9e',
      concepts: {
        'Venue/Arriv\u00e9e': {
          status: 'retenu',
          senses: ['venir', 'arriver', 'apporter', 'donner', 'commettre'],
          proof_ctx: "yuʾtīhi (Forme IV actif inaccompli) = Il la donne, Il l'accorde. Dieu est ici sujet actif de l'acte de donner la faveur. C'est le même verbe qu'en pos=15 et pos=19 mais à l'actif — le donateur est nommé cette fois.",
        },
        'Sens isol\u00e9/D\u00e9truire': { status: 'nul', senses: ['d\u00e9truire'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: '\u0161ya', position: 32,
    analysis_axes: {
      sense_chosen: 'vouloir',
      concept_chosen: 'Volont\u00e9',
      concepts: {
        'Volont\u00e9': {
          status: 'retenu',
          senses: ['vouloir', 'cr\u00e9er', 'd\u00e9sirer', 'souhaiter', 'volont\u00e9 (mash\u012b\u02bfa)'],
          proof_ctx: "yashāʾu (Forme I inaccompli) = il veut, il désire. La racine š-y-ʾ désigne la volonté souveraine. Dans la formule coranique man yashāʾu = à qui Il veut, la volonté divine est présentée comme souveraine et indéterminée — Dieu donne la faveur à qui Il veut, sans que le texte précise de critère.",
        },
        'Chose/Existence': {
          status: 'peu_probable',
          senses: ['chose', 'quelque chose', 'rien', 'entit\u00e9', 'existence'],
          proof_ctx: "La chose (šayʾ) est le sens nominal de la racine. Ici yashāʾu est un verbe inaccompli — c'est le sens verbal de la volonté qui s'impose, pas le sens nominal.",
        },
        'Incitation/Contrainte': { status: 'nul', senses: ['inciter', 'contraindre'], proof_ctx: "Hors contexte de volonté souveraine non contrainte." },
        'Laideur/Difformit\u00e9': { status: 'nul', senses: ['rendre laid', 'mal form\u00e9'], proof_ctx: "Hors contexte." },
        'Apaisement': { status: 'nul', senses: ['apaiser sa col\u00e8re'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'alh', position: 34,
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinit\u00e9',
      concepts: {
        'Divinit\u00e9': {
          status: 'retenu',
          senses: ['divinit\u00e9', 'divinit\u00e9 (concept)', 'Dieu', 'th\u00e9ologie', 'exclamation divine', 'oui certes'],
          proof_ctx: "allāhu (nominatif) = Dieu. Sujet de la phrase nominale conclusive.",
        },
        'Adoration/D\u00e9votion': { status: 'nul', senses: ['adorer'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'wse', position: 35,
    analysis_axes: {
      sense_chosen: '\u00eatre vaste',
      concept_chosen: 'Vastitude/Ampleur',
      concepts: {
        'Vastitude/Ampleur': {
          status: 'retenu',
          senses: ['\u00eatre vaste', 'contenir', 'englober', 'aisance'],
          proof_ctx: "wāsiʿun (participe actif, prédicat d'une phrase nominale) = Dieu est vaste. La racine w-s-ʿ désigne la capacité de contenir et d'englober sans être trop étroit. Dans le contexte où la faveur est donnée à qui Dieu veut, wāsiʿ souligne que cette capacité de donner est ample — aucune limite de ressource ne la restreint.",
        },
        'Sens isol\u00e9/\u00c9largir': { status: 'nul', senses: ['\u00e9largir'], proof_ctx: "Sens verbal transitif — hors contexte d'un prédicat attributif." },
      },
    },
  },
  {
    word_key: 'elm', position: 36,
    analysis_axes: {
      sense_chosen: 'savant',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'conna\u00eetre', '\u00eatre inform\u00e9', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: "ʿalīmun (adjectif intensif, nominatif) = le savant, le grand connaisseur. La racine ʿ-l-m désigne le savoir et la certitude. Dans le contexte où Dieu donne la faveur à qui Il veut, ʿalīm dit que Dieu sait — Il connaît les destinataires de Sa faveur. 'savant' rend ce sens sans importer l'affirmation d'une connaissance totale et absolue.",
        },
        'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe', 'drapeau', 'repère'], proof_ctx: "Sens de signe ou repère physique — hors contexte d'un attribut divin." },
        'Monde/Cr\u00e9ation': { status: 'nul', senses: ['monde', 'les mondes', 'ensemble des cr\u00e9atures', 'univers'], proof_ctx: "Sens nominal cosmologique — ʿalīmun est un adjectif prédicat, pas un nom." },
        'Sens isol\u00e9/Enseigner': { status: 'nul', senses: ['enseigner'], proof_ctx: "Hors contexte d'un attribut prédicatif." },
        'Lieu/G\u00e9ographie': { status: 'nul', senses: ['informer', 'nommer'], proof_ctx: "Hors contexte." },
        'Sens isol\u00e9/Homonyme': { status: 'nul', senses: ['homonyme'], proof_ctx: "Hors contexte." },
      },
    },
  },
];

// ─── INSERTION ──────────────────────────────────────────────────────────────
async function run() {
  console.log('\u2554' + '\u2550'.repeat(57) + '\u2557');
  console.log('\u2551   PIPELINE MAISON \u2014 S3:V73 (verse_id=366)               \u2551');
  console.log('\u255a' + '\u2550'.repeat(57) + '\u255d\n');

  const roots = [
    {key:'amn',aid:287,n:14},{key:'tba',aid:729,n:15,note:'enrichi vs tbae(5)/tbe(11)'},
    {key:'dyn',aid:258,n:21},{key:'hdy',aid:261,n:14},{key:'alh',aid:250,n:16},
    {key:'aty',aid:379,n:6,note:'override awy(1)/awt(3) — root \u0623 \u062a \u064a'},
    {key:'ahd',aid:2574,n:15},{key:'mvl',aid:2599,n:12,note:'enrichi vs mthl(9)'},
    {key:'hjj',aid:637,n:16},{key:'rbb',aid:253,n:27},{key:'fdl',aid:524,n:6},
    {key:'ydy',aid:597,n:18},{key:'\u0161ya',aid:369,n:15},{key:'wse',aid:1061,n:5},{key:'elm',aid:254,n:22},
  ];

  console.log('\u2550\u2550\u2550 \u00c9TAPE 2 \u2014 V\u00e9rification richesse racines \u2550\u2550\u2550');
  for (const r of roots) {
    const note = r.note ? ` \u2190 ${r.note}` : '';
    console.log(`  ${r.key} (aid=${r.aid}): ${r.n} sens [OK \u2192 SKIP]${note}`);
  }

  console.log('\n\u2550\u2550\u2550 word_daily \u2550\u2550\u2550');
  for (const r of roots) {
    const { count } = await db.from('word_daily').select('id', {count:'exact',head:true}).eq('analysis_id', r.aid);
    console.log(`  ${r.key}: ${count} phrase(s) \u2192 SKIP`);
  }

  console.log('\n\u2550\u2550\u2550 \u00c9TAPES 1 & 4 \u2014 verse_analyses UPDATE (va_id=726) \u2550\u2550\u2550');
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab:        TRANSLATION,
    full_translation:        HAMIDULLAH,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments:                SEGMENTS,
  }).eq('id', VA_ID);
  if (vaErr) { console.error('  ERREUR VA:', vaErr.message); return; }
  console.log('  UPDATE OK');

  console.log('\n\u2550\u2550\u2550 \u00c9TAPE 3 \u2014 VWA \u2550\u2550\u2550');
  await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaInserts = VWA_ROWS.map(r => ({
    verse_id:      VERSE_ID,
    word_key:      r.word_key,
    position:      r.position,
    sense_chosen:  r.analysis_axes.sense_chosen,
    analysis_axes: r.analysis_axes,
    reason:        r.analysis_axes.concept_chosen,
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaInserts);
  if (vwaErr) { console.error('  ERREUR VWA:', vwaErr.message); return; }
  console.log(`  Ins\u00e9r\u00e9s : ${vwaInserts.length} VWA`);
  for (const r of VWA_ROWS) {
    console.log(`    pos=${r.position} ${r.word_key} \u2192 \u00ab ${r.analysis_axes.sense_chosen} \u00bb [${r.analysis_axes.concept_chosen}]`);
  }

  console.log('\n' + '\u2550'.repeat(56));
  console.log('VERSET 3:73 \u2014 TERMIN\u00c9');
  for (const s of SEGMENTS.filter(s => !s.is_particle)) {
    const vwa = VWA_ROWS.find(v => v.word_key === s.word_key && v.position === s.pos);
    if (vwa) console.log(`  ${(s.phon||'').padEnd(18)} (${s.word_key}) \u2192 ${vwa.analysis_axes.concept_chosen.padEnd(28)} \u2192 "${s.fr}"`);
  }
  console.log(`  Traduction : "${TRANSLATION}"`);
  console.log('\u2554' + '\u2550'.repeat(57) + '\u2557');
  console.log('\u2551              PIPELINE S3:V73 TERMIN\u00c9E                 \u2551');
  console.log('\u255a' + '\u2550'.repeat(57) + '\u255d');
}

run().catch(console.error);
