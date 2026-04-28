// Pipeline S3:V72 — verse_id=365, va_id=725
// وَقَالَت طَّآئِفَةٌ مِّنْ أَهْلِ ٱلْكِتَٰبِ ءَامِنُوا۟ بِٱلَّذِىٓ أُنزِلَ عَلَى ٱلَّذِينَ ءَامَنُوا۟ وَجْهَ ٱلنَّهَارِ وَٱكْفُرُوٓا۟ ءَاخِرَهُۥ لَعَلَّهُمْ يَرْجِعُونَ
// "Une faction des gens de l'Écriture dit : « Croyez en ce qui fut révélé à ceux qui ont cru au lever du jour, et recouvrez-le à sa fin — peut-être qu'ils retourneront. »"
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 365;
const VA_ID = 725;
const SURAH = 3, VERSE = 72;

// ─── ÉTAPE 2 — Vérification richesse racines ───────────────────────────────
// qwl (aid=307): 10 sens [OK → SKIP]
// twf (aid=790): 18 sens [OK → SKIP]
// ahl (aid=736):  6 sens [OK → SKIP]
// ktb (aid=275): 36 sens [OK → SKIP]
// amn (aid=287): 14 sens [OK → SKIP]
// nzl (aid=289): 10 sens [OK → SKIP]
// nhr (aid=397):  8 sens [OK → SKIP]
// kfr (aid=294): 13 sens [OK → SKIP]
// akhr (aid=653): 12 sens [OK → SKIP]
// rje (aid=336): 10 sens [OK → SKIP]

// ─── SEGMENTS display (format V3) ─────────────────────────────────────────
const SEGMENTS = [
  { pos:1,  fr:'dit',              phon:'wa-qālat',    arabic:'وَقَالَتْ',       word_key:'qwl',  is_particle:false, sense_retenu:'dire',             position:1  },
  { pos:2,  fr:'une faction',      phon:'ṭāʾifatun',   arabic:'طَّآئِفَةٌ',      word_key:'twf',  is_particle:false, sense_retenu:'faction',          position:2  },
  { pos:3,  fr:'des',              phon:'min',         arabic:'مِّنْ',            is_particle:true,  position:3  },
  { pos:4,  fr:'gens de',          phon:'ahlī',        arabic:'أَهْلِ',          word_key:'ahl',  is_particle:false, sense_retenu:'gens de',          position:4  },
  { pos:5,  fr:"l'Écriture",       phon:'al-kitābi',   arabic:'ٱلْكِتَـٰبِ',    word_key:'ktb',  is_particle:false, sense_retenu:'écriture révélée', position:5  },
  { pos:6,  fr:'Croyez en',        phon:'āminū',       arabic:'ءَامِنُوا۟',     word_key:'amn',  is_particle:false, sense_retenu:'croire',           position:6  },
  { pos:7,  fr:'ce qui',           phon:'bi-lladhī',   arabic:'بِٱلَّذِىٓ',     is_particle:true,  position:7  },
  { pos:8,  fr:'fut révélé',       phon:'unzila',      arabic:'أُنزِلَ',         word_key:'nzl',  is_particle:false, sense_retenu:'révéler',          position:8  },
  { pos:9,  fr:'à',                phon:'ʿalā',        arabic:'عَلَى',           is_particle:true,  position:9  },
  { pos:10, fr:'ceux qui',         phon:'alladhīna',   arabic:'ٱلَّذِينَ',       is_particle:true,  position:10 },
  { pos:11, fr:'ont cru',          phon:'āmanū',       arabic:'ءَامَنُوا۟',     word_key:'amn',  is_particle:false, sense_retenu:'croire',           position:11 },
  { pos:12, fr:'au lever',         phon:'wajha',       arabic:'وَجْهَ',          is_particle:true,  position:12 },
  { pos:13, fr:'du jour',          phon:'an-nahāri',   arabic:'ٱلنَّهَارِ',     word_key:'nhr',  is_particle:false, sense_retenu:'jour',             position:13 },
  { pos:14, fr:'et recouvrez-le',  phon:'wa-kfurū',    arabic:'وَٱكْفُرُوا۟',  word_key:'kfr',  is_particle:false, sense_retenu:'couvrir',          position:14 },
  { pos:15, fr:'à sa fin',         phon:'ākhirahu',    arabic:'ءَاخِرَهُۥ',     is_particle:true,  position:15 },
  { pos:16, fr:"peut-être qu'ils", phon:"laʿallahum",  arabic:'لَعَلَّهُمْ',    is_particle:true,  position:16 },
  { pos:17, fr:'retourneront',     phon:'yarjiʿūna',   arabic:'يَرْجِعُونَ',    word_key:'rje',  is_particle:false, sense_retenu:'retourner',        position:17 },
];

// ─── ANALYSE — §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§ ──────────────────
const TRANSLATION_EXPLANATION = `§DEMARCHE§
Ce verset s'inscrit dans la continuité des versets 70 et 71 qui décrivaient les gens de l'Écriture recouvrant les signes divins et dissimulant la vérité. Il expose une tactique de manipulation : une faction instruit ses membres à simuler l'adhésion à la révélation au début du jour, puis à la dissimuler à la fin, espérant déstabiliser ceux qui ont adhéré.

**wa-qālat** (et dit) est un verbe de la racine q-w-l (parler, énoncer), à l'accompli, 3ème personne du féminin singulier. L'accord féminin est commandé par le sujet ṭāʾifatun (féminin). La forme accomplie signale que la prise de parole a déjà eu lieu. La racine désigne la production de paroles — un acte qui sort de celui qui parle vers un destinataire.

**ṭāʾifatun** (une faction) est un nom dérivé du participe actif de la racine ṭ-w-f (tourner autour, patrouiller, circuler). C'est un nom d'unité qui désigne un groupe constitué et organisé. L'absence d'article défini indique qu'il s'agit d'un sous-groupe parmi les gens de l'Écriture, pas de leur totalité. La connotation de groupe qui agit de concert, avec une intention commune, est inhérente à cette racine.

**ahlī** (gens de) est un nom de la racine a-h-l (appartenir à), en état construit (idafa) — lié au mot suivant par la construction génitivale. Il désigne l'appartenance à un groupe, une communauté. Ici : les gens qui appartiennent à l'Écriture.

**al-kitābi** (de l'Écriture) est un nom de la racine k-t-b (écrire, inscrire), défini, au génitif après ahlī. Al-kitāb désigne le corpus scripturaire révélé — l'ensemble des textes sacrés reçus d'en haut. « L'Écriture » conserve mieux cette dimension de texte sacré reçu que « livre » qui évoque un objet physique.

**āminū** (croyez en) est un verbe de la racine a-m-n à la Forme IV (āmana), impératif, 2ème personne du masculin pluriel. La Forme IV transforme l'état de sécurité/confiance (Forme I : amina = être en sécurité) en adhésion déclarée tournée vers l'extérieur. La construction āminū bi- (adhérez à / croyez en) est la forme standard de la déclaration de foi dans le Coran. Ici, la faction ordonne à ses membres de simuler cette adhésion — le commandement est stratégique, non sincère.

**unzila** (fut révélé) est un verbe de la racine n-z-l à la Forme IV, accompli passif (unzila = fut fait descendre). La Forme IV d'anzala = « faire descendre intentionnellement ». Au passif, le sujet actant n'est pas nommé — c'est le passif de majesté. La racine décrit un mouvement de haut en bas : la révélation divine descend d'en haut.

**āmanū** (ont cru) est le même verbe a-m-n à la Forme IV, accompli, 3ème personne du masculin pluriel. Il désigne ceux qui ont effectivement adhéré à la révélation — les croyants authentiques, par opposition aux membres de la faction à qui on commande de simuler cette adhésion.

**wajha n-nahāri** (au lever du jour) : **wajha** est un nom de la racine w-j-h (visage, face, ce qui fait face), à l'accusatif, en idafa avec ce qui suit. La « face du jour » est une expression idiomatique arabe pour le début de la journée — la partie que le jour montre en premier. **an-nahāri** (du jour) est un nom de la racine n-h-r (clarté, période lumineuse du jour), défini au génitif. L'ensemble forme un adverbe de temps : au lever du jour.

**wa-kfurū** (et recouvrez-le) est un verbe de la racine k-f-r à la Forme I, impératif, 2ème personne du masculin pluriel, précédé de wa (et). La racine k-f-r désigne l'acte physique de recouvrir — à l'origine l'agriculteur qui recouvre les graines de terre. Lane's Lexicon donne le sens premier : « il couvrit, dissimula, cacha ». Ici, la faction commande un acte délibéré de dissimulation : après avoir semblé adhérer, recouvrir — cacher — la vérité de la révélation. Ce n'est pas une simple absence de foi : c'est un acte actif d'occultation.

**ākhirahu** (à sa fin) est un nom de la racine a-kh-r (postérieur, terminal, ce qui vient en dernier), à l'accusatif, avec le pronom suffixe -hu (renvoie au jour, an-nahār). Ākhir désigne le terme, la partie finale d'une durée. « Sa fin » = la fin du jour, par opposition au lever mentionné plus haut.

**yarjiʿūna** (retourneront) est un verbe de la racine r-j-ʿ à la Forme I, inaccompli, 3ème personne du masculin pluriel. La forme inaccomplie indique une action attendue — ici le résultat espéré par la faction. La racine désigne un retour vers un état ou un lieu antérieur. Lane's donne rājaʿa = « il retourna à un lieu ou un état ». « Peut-être qu'ils retourneront » signifie : peut-être que les croyants, déstabilisés, reviendront à leur état d'avant.

§JUSTIFICATION§
**dit** — Le sens retenu est « Parole/Énonciation ». Le mot « dit » est choisi car qālat introduit un discours rapporté direct — c'est la formulation la plus neutre et exacte pour une parole produite et adressée. L'alternative « déclara » est écartée car elle implique une solennité que le contexte ne souligne pas.

**une faction** — Le sens retenu est « Groupe/Faction ». Le mot « faction » est choisi car ṭāʾifatun désigne un groupe organisé avec une intention commune, un sous-groupe qui agit de façon concertée. Ce verset décrit une stratégie délibérée — « faction » rend mieux l'organisation interne que « groupe » (trop neutre) ou « partie » (simple portion sans cohésion interne).

**gens de** — Le sens retenu est « Famille/Communauté ». Le mot « gens de » est choisi car ahlī désigne l'appartenance communautaire. L'alternative « peuple de » est écartée car elle implique une dimension ethnique que ahlī ne porte pas nécessairement.

**l'Écriture** — Le sens retenu est « Livre/Écrit ». Le mot « l'Écriture » est choisi car al-kitāb dans le Coran désigne le corpus scripturaire révélé — l'ensemble de la révélation écrite. « L'Écriture » porte cette dimension de texte sacré reçu. L'alternative « le Livre » (Hamidullah) est écartée car elle évoque l'objet physique plutôt que la réalité textuelle divine.

**croyez en** — Le sens retenu est « Foi/Adhésion ». Le mot « croyez en » est choisi car āminū bi- est la construction standard de l'adhésion déclarée dans le Coran. L'alternative « faites confiance à » est écartée car elle évoque la sécurité intérieure (la Forme I amina), alors que la Forme IV āmana désigne une adhésion déclarée tournée vers l'extérieur.

**fut révélé** — Le sens retenu est « Descente/Révélation ». Le mot « révélé » est choisi car unzila (Forme IV passif) = « fut fait descendre d'en haut ». L'alternative « fut envoyé » est écartée car elle perd la verticalité du mouvement de descente inhérente à la racine n-z-l.

**ont cru** — Le sens retenu est « Foi/Adhésion ». Même analyse que āminū — āmanū (accompli) = « ils ont adhéré ». Le mot « cru » à l'accompli est le plus naturel en français.

**du jour** — Le sens retenu est « Clarté/Jour ». Le mot « jour » est choisi car an-nahār désigne la période de clarté diurne. Il complète l'expression idiomatique wajha n-nahāri (la face du jour = au lever du jour).

**et recouvrez-le** — Le sens retenu est « Couverture/Dissimulation ». Le mot « recouvrez » est choisi car kfurū (impératif de k-f-r) commande un acte délibéré de dissimulation active. « Recouvrir » porte l'idée d'une action intentionnelle de cacher en mettant quelque chose par-dessus — le sens étymologique de la racine. L'alternative « niez-le » est écartée car la négation n'est pas le premier sens de k-f-r. L'alternative « n'y croyez plus » (Hamidullah) est écartée car elle évoque une cessation passive alors que kfurū est un impératif actif qui commande un acte de dissimulation.

**à sa fin** — Le sens retenu est « Postériorité/Fin ». Le mot « à sa fin » est choisi car ākhirahu = « son terme final » — le point terminal de la journée. L'alternative « à la fin » est écartée car elle perd le pronom -hu qui ancre la fin comme appartenant au même jour.

**retourneront** — Le sens retenu est « Retour/Réversion ». Le mot « retourneront » est choisi car yarjiʿūna désigne un mouvement de retour vers un état antérieur. Lane's donne rājaʿa = « il retourna à un lieu ou un état ». « Retourneront » exprime ce mouvement de retour en arrière.

§CRITIQUE§
**de l'Écriture vs « du Livre »** : les traductions courantes (Hamidullah : « gens du Livre ») rendent ahlī l-kitābi par « gens du Livre ». Ce choix vient d'une longue tradition exégétique qui a objectivé al-kitāb en livre physique institutionnel. Notre traduction donne « de l'Écriture » car al-kitāb désigne le corpus scripturaire révélé dans son ensemble — l'Écriture comme réalité textuelle divine reçue, pas un objet cultuel. La différence change la connotation : « du Livre » évoque une appartenance institutionnelle à un texte figé ; « de l'Écriture » désigne ceux qui ont reçu la révélation scripturaire.

**recouvrez-le vs « n'y croyez plus »** : Hamidullah rend wa-kfurū par « n'y croyez plus ». Ce choix vient de la lecture de k-f-r comme antonyme de foi — ce qui est juste mais insuffisant. Notre traduction donne « recouvrez-le » car la racine k-f-r désigne d'abord un acte physique actif : couvrir, dissimuler. Lane's Lexicon donne pour kāfara le sens premier : « il couvrit, dissimula, cacha ». Cette distinction change profondément le sens du verset : Hamidullah décrit une cessation passive de la foi, alors que l'étymologie révèle un acte délibéré d'occultation active. La stratégie de la faction n'est pas de « cesser de croire » — c'est de couvrir délibérément la vérité pour semer le doute chez les croyants.`;

// ─── VWA — analyse_axes (format V3) ──────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: 'qwl', analysis_id: 307, position: 1,
    analysis_axes: {
      sense_chosen: 'dire',
      concept_chosen: 'Parole/Énonciation',
      concepts: {
        'Parole/Énonciation': {
          status: 'retenu',
          senses: ['dire', 'parler', 'parole', 'discours', 'affirmer'],
          proof_ctx: "qālat introduit un discours rapporté direct — la parole sort de la faction et atteint ses membres. C'est un acte communicatif extérieur et directionnel. Les sens de [Pensée/Avis] (opinion, doctrine) restent intérieurs et ne peuvent pas introduire un discours rapporté.",
        },
        'Pensée/Avis': {
          status: 'peu_probable',
          senses: ['opinion', 'avis', 'doctrine'],
          proof_ctx: "La pensée/l'avis est un état intérieur — il ne sort pas vers l'extérieur sous forme de discours rapporté. qālat + discours direct exige un acte de parole extérieur.",
        },
        'Sens isolé/Puissance': {
          status: 'nul',
          senses: ['puissance'],
          proof_ctx: "Sens isolé sans rapport avec le contexte discursif du verset.",
        },
        'Corps/Anatomie': {
          status: 'nul',
          senses: ['troupeau'],
          proof_ctx: "Sens physique sans rapport avec le contexte.",
        },
      },
    },
  },
  {
    word_key: 'twf', analysis_id: 790, position: 2,
    analysis_axes: {
      sense_chosen: 'faction',
      concept_chosen: 'Groupe/Faction',
      concepts: {
        'Groupe/Faction': {
          status: 'retenu',
          senses: ['partie distincte', 'communauté', 'secte', 'faction', 'groupe'],
          proof_ctx: "ṭāʾifatun désigne un groupe constitué avec une intention commune — ici un sous-groupe qui élabore une tactique de déception délibérée. La connotation d'organisation interne est cohérente avec la stratégie exposée dans le reste du verset.",
        },
        'Patrouille/Ronde': {
          status: 'probable',
          senses: ['patrouille', 'ronde', 'garde de nuit'],
          proof_ctx: "L'idée d'un groupe qui se déplace de façon coordonnée est présente, mais ṭāʾifatun ici désigne un groupe humain avec une intention, pas une unité en ronde. [Groupe/Faction] est plus précis pour ce contexte de stratégie communautaire.",
        },
        'Circumambulation/Visite': {
          status: 'nul',
          senses: ['tourner autour', 'tawāf', 'circuler'],
          proof_ctx: "Sens rituel de circumambulation — sans rapport avec un groupe humain constitué.",
        },
        'Déluge/Inondation': {
          status: 'nul',
          senses: ['déluge', 'inondation'],
          proof_ctx: "Sens physique d'inondation — hors contexte.",
        },
        'Visite/Approche': {
          status: 'nul',
          senses: ["rendre visite", "s'approcher", "s'arrêter chez"],
          proof_ctx: "Sens de mouvement individuel — pas applicable à un groupe constitué agissant collectivement.",
        },
        'Service/Soin': {
          status: 'nul',
          senses: ['serviteur attentif', 'servir avec soin'],
          proof_ctx: "Sens de service attentif — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'ahl', analysis_id: 736, position: 4,
    analysis_axes: {
      sense_chosen: 'gens de',
      concept_chosen: 'Famille/Communauté',
      concepts: {
        'Famille/Communauté': {
          status: 'retenu',
          senses: ['famille', 'gens de', 'peuple'],
          proof_ctx: "ahlī l-kitābi est la formule d'appartenance communautaire — les gens qui appartiennent à l'Écriture. [Famille/Communauté] capture cette relation d'appartenance à un groupe lié par un texte sacré commun.",
        },
        'Mérite/Aptitude': {
          status: 'nul',
          senses: ['digne de'],
          proof_ctx: "Sens de qualification ou mérite — pas applicable dans une formule d'appartenance.",
        },
        'Sens isolé/Accueillir': {
          status: 'nul',
          senses: ['accueillir'],
          proof_ctx: "Sens isolé sans rapport avec la formule ahlī l-kitāb.",
        },
        'Parenté/Famille': {
          status: 'nul',
          senses: ['se marier'],
          proof_ctx: "Sens de mariage/parenté consanguine — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'ktb', analysis_id: 275, position: 5,
    analysis_axes: {
      sense_chosen: 'écriture révélée',
      concept_chosen: 'Livre/Écrit',
      concepts: {
        'Livre/Écrit': {
          status: 'retenu',
          senses: ['livre', 'écriture révélée', 'registre', 'contrat écrit'],
          proof_ctx: "al-kitāb dans ahlī l-kitābi désigne le corpus scripturaire révélé — l'Écriture reçue d'en haut. [Livre/Écrit] et son sens « écriture révélée » correspond à cet usage coranique établi dans les versets précédents.",
        },
        'Écriture/Inscription': {
          status: 'peu_probable',
          senses: ['écrire', 'inscrire', 'tracer'],
          proof_ctx: "L'acte d'écriture (processus) est moins précis que l'Écriture (résultat) — al-kitāb défini est le corpus écrit, pas l'acte d'écrire.",
        },
        'Obligation/Décret': {
          status: 'nul',
          senses: ['obligation', 'décret', 'prescription'],
          proof_ctx: "Sens de prescription légale — al-kitāb ici est le texte sacré, pas un décret.",
        },
      },
    },
  },
  {
    word_key: 'amn', analysis_id: 287, position: 6,
    analysis_axes: {
      sense_chosen: 'croire',
      concept_chosen: 'Foi/Adhésion',
      concepts: {
        'Foi/Adhésion': {
          status: 'retenu',
          senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
          proof_ctx: "āminū (Forme IV, impératif) + bi- = adhérez à / croyez en. La Forme IV āmana désigne une adhésion déclarée tournée vers l'extérieur — c'est la forme standard de la foi quranique. Même si la faction ordonne une adhésion simulée, le mot utilisé est celui de la foi/adhésion authentique.",
        },
        'Sécurité/Confiance': {
          status: 'peu_probable',
          senses: ['être en sécurité', 'se sentir en sécurité', 'faire confiance'],
          proof_ctx: "La sécurité (Forme I amina) est un état intérieur de tranquillité qui reste chez celui qui la ressent. La Forme IV āmana est causative/déclarative et porte l'adhésion vers l'extérieur, vers l'objet de la foi.",
        },
        'Garantie/Protection': {
          status: 'nul',
          senses: ['protéger', 'accorder la sécurité'],
          proof_ctx: "Protéger quelqu'un est une action sur autrui — incompatible avec āminū bi- qui désigne une adhésion à quelque chose.",
        },
        'Sens isolé/Amen': {
          status: 'nul',
          senses: ['amen'],
          proof_ctx: "Sens liturgique isolé — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'nzl', analysis_id: 289, position: 8,
    analysis_axes: {
      sense_chosen: 'révéler',
      concept_chosen: 'Descente/Révélation',
      concepts: {
        'Descente/Révélation': {
          status: 'retenu',
          senses: ['descendre', 'faire descendre', 'révéler', 'envoyer d\'en haut', 'pluie qui descend'],
          proof_ctx: "unzila (Forme IV passif accompli) = « fut fait descendre intentionnellement » — le passif de majesté où l'actant divin n'est pas nommé. La racine n-z-l décrit un mouvement de haut en bas ; la révélation divine est la descente par excellence. [Descente/Révélation] est le seul sens compatible avec ce passif divin.",
        },
        'Halte/Séjour': {
          status: 'peu_probable',
          senses: ["s'installer", 'faire halte', 'hôte'],
          proof_ctx: "S'installer désigne un arrêt dans un lieu — incompatible avec unzila qui désigne une descente directionnelle. La dimension de haut en bas est absente de [Halte/Séjour].",
        },
        'Sens isolé/Rang': {
          status: 'nul',
          senses: ['rang'],
          proof_ctx: "Sens de statut — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'amn', analysis_id: 287, position: 11,
    analysis_axes: {
      sense_chosen: 'croire',
      concept_chosen: 'Foi/Adhésion',
      concepts: {
        'Foi/Adhésion': {
          status: 'retenu',
          senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
          proof_ctx: "āmanū (Forme IV, accompli, 3ème pers.) désigne ceux qui ont effectivement adhéré à la révélation. Ils sont distingués des membres de la faction à qui on commande de simuler cette adhésion.",
        },
        'Sécurité/Confiance': {
          status: 'peu_probable',
          senses: ['être en sécurité', 'se sentir en sécurité', 'faire confiance'],
          proof_ctx: "Même distinction que pour āminū — la Forme IV est l'adhésion déclarée, pas l'état intérieur de sécurité.",
        },
        'Garantie/Protection': {
          status: 'nul',
          senses: ['protéger', 'accorder la sécurité'],
          proof_ctx: "Sens de protection accordée à autrui — hors contexte.",
        },
        'Sens isolé/Amen': {
          status: 'nul',
          senses: ['amen'],
          proof_ctx: "Sens liturgique isolé — hors contexte.",
        },
      },
    },
  },
  {
    word_key: 'nhr', analysis_id: 397, position: 13,
    analysis_axes: {
      sense_chosen: 'jour',
      concept_chosen: 'Clarté/Jour',
      concepts: {
        'Clarté/Jour': {
          status: 'retenu',
          senses: ['jour', 'clarté'],
          proof_ctx: "an-nahāri est le génitif de an-nahār (le jour) dans l'expression wajha n-nahāri (la face du jour = au lever du jour). n-h-r désigne la période de clarté diurne. [Clarté/Jour] est le seul sens applicable dans cette expression temporelle.",
        },
        'Eau/Cours d\'eau': {
          status: 'nul',
          senses: ['rivière', 'fleuve', 'couler', 'abondance'],
          proof_ctx: "Sens de cours d'eau — l'expression wajha n-nahāri est une expression temporelle établie pour désigner le début du jour, pas un cours d'eau.",
        },
        'Sens isolé/Interdire': {
          status: 'nul',
          senses: ['interdire'],
          proof_ctx: "Sens isolé sans rapport avec une expression temporelle.",
        },
        'Sens isolé/Creuser': {
          status: 'nul',
          senses: ['creuser'],
          proof_ctx: "Sens isolé sans rapport.",
        },
      },
    },
  },
  {
    word_key: 'kfr', analysis_id: 294, position: 14,
    analysis_axes: {
      sense_chosen: 'couvrir',
      concept_chosen: 'Couverture/Dissimulation',
      concepts: {
        'Couverture/Dissimulation': {
          status: 'retenu',
          senses: ['couvrir', 'cacher', 'la nuit qui couvre'],
          proof_ctx: "kfurū (impératif de k-f-r) commande un acte délibéré de dissimulation active. La stratégie de la faction repose sur la tromperie : simuler l'adhésion puis couvrir délibérément la vérité. Le sens de [Couverture/Dissimulation] (acte physique intentionnel de cacher) est plus précis que [Rejet/Ingratitude] pour décrire cet acte planifié d'occultation.",
        },
        'Rejet/Ingratitude': {
          status: 'probable',
          senses: ['nier', 'être ingrat', 'renier un bienfait', 'rejeter'],
          proof_ctx: "Le rejet est également possible — la faction ordonne de rejeter la révélation. Mais le sens premier de k-f-r est la couverture physique délibérée, ce qui correspond mieux à la tactique de déception décrite (une dissimulation stratégique, pas un simple refus).",
        },
        'Expiation/Réparation': {
          status: 'nul',
          senses: ['expier', 'effacer les péchés'],
          proof_ctx: "Sens de réparation — incompatible avec un impératif de dissimulation.",
        },
        'Sens isolé/Cultivateur': { status: 'nul', senses: ['cultivateur'], proof_ctx: "Sens isolé sans rapport." },
        'Sens isolé/Goudron':     { status: 'nul', senses: ['goudron'],     proof_ctx: "Sens isolé sans rapport." },
        'Sens isolé/Village':     { status: 'nul', senses: ['village'],     proof_ctx: "Sens isolé sans rapport." },
      },
    },
  },
  {
    word_key: 'rje', analysis_id: 336, position: 17,
    analysis_axes: {
      sense_chosen: 'retourner',
      concept_chosen: 'Retour/Réversion',
      concepts: {
        'Retour/Réversion': {
          status: 'retenu',
          senses: ['retourner', 'revenir', 'réverter', 'faire revenir', 'renvoyer'],
          proof_ctx: "yarjiʿūna (inaccompli, 3ème pers. plur.) désigne le retour espéré des croyants vers leur état d'avant — peut-être à leur état de doute ou d'incrédulité que la faction cherche à provoquer. La racine r-j-ʿ décrit un mouvement de retour vers un point ou état antérieur.",
        },
        'Répétition': {
          status: 'peu_probable',
          senses: ['répéter', 'réponse'],
          proof_ctx: "La répétition d'une action est un retour temporel, mais [Retour/Réversion] est plus précis — yarjiʿūna désigne un retour à un état/lieu, pas la répétition d'un geste.",
        },
        'Pluie/Renouvellement': {
          status: 'nul',
          senses: ['pluie'],
          proof_ctx: "Sens de pluie/eau cyclique — hors contexte humain.",
        },
        'Sens isolé/Profit':   { status: 'nul', senses: ['profit'],   proof_ctx: "Sens isolé sans rapport." },
        'Sens isolé/Ruminer':  { status: 'nul', senses: ['ruminer'],  proof_ctx: "Sens isolé sans rapport." },
      },
    },
  },
];

// ─── TRADUCTION ─────────────────────────────────────────────────────────────
const TRANSLATION = "Une faction des gens de l\u2019\u00c9criture dit : \u00ab Croyez en ce qui fut r\u00e9v\u00e9l\u00e9 \u00e0 ceux qui ont cru au lever du jour, et recouvrez-le \u00e0 sa fin \u2014 peut-\u00eatre qu\u2019ils retourneront. \u00bb";
const HAMIDULLAH   = "Une faction des gens du Livre dit : \u00ab Croyez \u00e0 ce qui a \u00e9t\u00e9 r\u00e9v\u00e9l\u00e9 aux croyants \u00e0 l\u2019aube du jour, et n\u2019y croyez plus \u00e0 la fin du jour. Peut-\u00eatre qu\u2019ils retourneront. \u00bb";

// ─── INSERTION ──────────────────────────────────────────────────────────────
async function run() {
  console.log('\u2554' + '\u2550'.repeat(55) + '\u2557');
  console.log('\u2551   PIPELINE MAISON \u2014 S3:V72 (verse_id=365)             \u2551');
  console.log('\u255a' + '\u2550'.repeat(55) + '\u255d\n');

  console.log('\u2550\u2550\u2550 \u00c9TAPE 2 \u2014 V\u00e9rification richesse racines \u2550\u2550\u2550');
  const roots = [
    {key:'qwl',aid:307,n:10},{key:'twf',aid:790,n:18},{key:'ahl',aid:736,n:6},
    {key:'ktb',aid:275,n:36},{key:'amn',aid:287,n:14},{key:'nzl',aid:289,n:10},
    {key:'nhr',aid:397,n:8},{key:'kfr',aid:294,n:13},{key:'akhr',aid:653,n:12},
    {key:'rje',aid:336,n:10},
  ];
  for (const r of roots) console.log(`  ${r.key} (aid=${r.aid}): ${r.n} sens [OK \u2192 SKIP]`);

  console.log('\n\u2550\u2550\u2550 word_daily \u2550\u2550\u2550');
  for (const r of roots) {
    const { count } = await db.from('word_daily').select('id', {count:'exact',head:true}).eq('analysis_id', r.aid);
    console.log(`  ${r.key}: ${count} phrase(s) \u2192 SKIP`);
  }

  console.log('\n\u2550\u2550\u2550 \u00c9TAPES 1 & 4 \u2014 verse_analyses UPDATE (va_id=725) \u2550\u2550\u2550');
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab: TRANSLATION,
    full_translation: HAMIDULLAH,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments: SEGMENTS,
  }).eq('id', VA_ID);
  if (vaErr) { console.error('  ERREUR VA:', vaErr.message); return; }
  console.log('  UPDATE OK');

  console.log('\n\u2550\u2550\u2550 \u00c9TAPE 3 \u2014 VWA \u2550\u2550\u2550');
  // Delete existing VWA if any
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

  console.log('\n' + '\u2550'.repeat(54));
  console.log('VERSET 3:72 \u2014 TERMIN\u00c9');
  for (const s of SEGMENTS.filter(s => !s.is_particle)) {
    const vwa = VWA_ROWS.find(v => v.word_key === s.word_key && v.position === s.pos);
    if (vwa) console.log(`  ${s.phon.padEnd(18)} (${s.word_key}) \u2192 ${vwa.analysis_axes.concept_chosen.padEnd(25)} \u2192 "${s.fr}"`);
  }
  console.log(`  Traduction : "${TRANSLATION}"`);
  console.log('\u2554' + '\u2550'.repeat(55) + '\u2557');
  console.log('\u2551              PIPELINE S3:V72 TERMIN\u00c9E               \u2551');
  console.log('\u255a' + '\u2550'.repeat(55) + '\u255d');
}

run().catch(console.error);
