// Pipeline S3:V66 — verse_id=359 (va_id=722)
// "Vous avez argumenté sur ce dont vous aviez la connaissance..."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 359;
const VA_ID = 722;

// ─────────────────────────────────────────────────────────────
// SEGMENTS_STEP1 (tels que stockés en BDD, pas de modification)
// ─────────────────────────────────────────────────────────────
const SEGMENTS_STEP1 = [
  { phon: 'أَنتُمْ', type: 'particle', arabic: 'هَٰٓأَنتُمْ', person: '2ème', grammar: { person: '2ème' }, phonetic: 'أَنتُمْ', position: 1, is_particle: true },
  { phon: 'هَٰٓؤُلَآءِ', type: 'particle', arabic: 'هَٰٓؤُلَآءِ', phonetic: 'هَٰٓؤُلَآءِ', position: 2, is_particle: true },
  { pos: 'verbe', phon: 'حَٰجَجْ', root: 'ح ج ج', type: 'important', tense: 'accompli', arabic: 'حَٰجَجْتُمْ', person: '2ème', grammar: { pos: 'verbe', tense: 'accompli', person: '2ème', suffix_pronoun: '2MP' }, phonetic: 'حَٰجَجْ', position: 3, word_key: 'hjj', verb_form: 'III', is_particle: false, suffix_pronoun: '2MP' },
  { phon: 'مَا', type: 'particle', arabic: 'فِيمَا', phonetic: 'مَا', position: 4, is_particle: true },
  { phon: 'كُم', type: 'particle', arabic: 'لَكُم', person: '2ème', grammar: { person: '2ème' }, phonetic: 'كُم', position: 5, is_particle: true, prefix_particle: 'la', preceded_by_negation: true },
  { phon: 'هِ.', type: 'particle', arabic: 'بِهِ.', person: '3ème', grammar: { person: '3ème' }, phonetic: 'هِ.', position: 6, is_particle: true, prefix_particle: 'bi' },
  { pos: 'nom', phon: 'عِلْمٌ', root: 'ع ل م', type: 'important', arabic: 'عِلْمٌ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'عِلْمٌ', position: 7, word_key: 'elm', is_particle: false },
  { phon: 'مَ', type: 'particle', arabic: 'فَلِمَ', phonetic: 'مَ', position: 8, is_particle: true, prefix_particle: 'li' },
  { pos: 'verbe', phon: 'تُحَآجُّ', root: 'ح ج ج', type: 'important', tense: 'inaccompli', arabic: 'تُحَآجُّونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', suffix_pronoun: '2MP' }, phonetic: 'تُحَآجُّ', position: 9, word_key: 'hjj', verb_form: 'III', is_particle: false, suffix_pronoun: '2MP' },
  { phon: 'مَا', type: 'particle', arabic: 'فِيمَا', phonetic: 'مَا', position: 10, is_particle: true },
  { pos: 'verbe', phon: 'لَيْسَ', root: 'ل ي س', type: 'important', tense: 'accompli', arabic: 'لَيْسَ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème' }, phonetic: 'لَيْسَ', position: 11, word_key: 'lys', is_particle: false, preceded_by_negation: true },
  { phon: 'كُم', type: 'particle', arabic: 'لَكُم', person: '2ème', grammar: { person: '2ème' }, phonetic: 'كُم', position: 12, is_particle: true, prefix_particle: 'la' },
  { phon: 'هِ.', type: 'particle', arabic: 'بِهِ.', person: '3ème', grammar: { person: '3ème' }, phonetic: 'هِ.', position: 13, is_particle: true, prefix_particle: 'bi' },
  { pos: 'nom', phon: 'عِلْمٌ', root: 'ع ل م', type: 'important', arabic: 'عِلْمٌ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'عِلْمٌ', position: 14, word_key: 'elm', is_particle: false },
  { pos: 'nom', phon: 'ٱللَّهُ', root: 'ا ل ه', type: 'important', arabic: 'وَٱللَّهُ', grammar: { pos: 'nom' }, phonetic: 'ٱللَّهُ', position: 15, word_key: 'alh', is_particle: false, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'يَعْلَمُ', root: 'ع ل م', type: 'important', tense: 'inaccompli', arabic: 'يَعْلَمُ', person: '3ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '3ème' }, phonetic: 'يَعْلَمُ', position: 16, word_key: 'elm', is_particle: false },
  { phon: 'أَنتُمْ', type: 'particle', arabic: 'وَأَنتُمْ', person: '2ème', grammar: { person: '2ème' }, phonetic: 'أَنتُمْ', position: 17, is_particle: true, prefix_particle: 'wa' },
  { phon: 'لَا', type: 'particle', arabic: 'لَا', phonetic: 'لَا', position: 18, is_particle: true },
  { pos: 'verbe', phon: 'تَعْلَمُ', root: 'ع ل م', type: 'important', tense: 'inaccompli', arabic: 'تَعْلَمُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', suffix_pronoun: '2MP' }, phonetic: 'تَعْلَمُ', position: 19, word_key: 'elm', is_particle: false, suffix_pronoun: '2MP', preceded_by_negation: true }
];

// ─────────────────────────────────────────────────────────────
// TRADUCTIONS
// ─────────────────────────────────────────────────────────────
const FULL_TRANSLATION_HAMIDULLAH = `Ha! Vous avez disputé de ce que vous saviez ; pourquoi donc disputez-vous de ce que vous ne savez pas ? Dieu sait, et vous, vous ne savez pas.`;

const TRANSLATION_ARAB = `hā antum hāʾulāʾi ḥājatjtum fīmā lakum bihi ʿilmun, fa-lima tuḥājjūna fīmā laysa lakum bihi ʿilmun, wa-llāhu yaʿlamu wa-antum lā taʿlamūna`;

const TRANSLATION_MEDITATIONAL = `Ce verset construit un parallélisme rhétorique fondé sur le contraste accompli/inaccompli : vous avez argumenté (passé, terminé) sur ce que vous connaissiez — et vous continuez d'argumenter (présent, en cours) sur ce que vous ne connaissez pas. La conclusion — Dieu sait, vous ne savez pas — pose l'asymétrie absolue entre la connaissance divine et l'ignorance humaine comme mesure de toute argumentation légitime.`;

const TRANSLATION_EXPLANATION = `Notre traduction : « Vous voilà ! Vous avez argumenté sur ce dont vous aviez la connaissance. Pourquoi donc argumentez-vous sur ce dont il n'y a aucune connaissance pour vous ? Dieu sait, tandis que vous ne savez pas. »

§DEMARCHE§

Ce verset (S3:V66) répond directement à V65, qui posait l'argument de la postériorité chronologique d'Abraham par rapport à la Torah et à l'Évangile. V66 formule le paradoxe rhétorique : les Gens du Livre avaient argumenté sur ce qu'ils connaissaient, mais ils persistent à argumenter sur ce qu'ils ne connaissent pas. Le cœur du verset est le contraste entre ḥājatjtum (accompli : c'est fait) et tuḥājjūna (inaccompli : ça continue), ainsi que la répétition symétrique de ʿilmun (connaissance présente/absente). Les mots-clés sont : hjj (argumenter), elm (connaissance/savoir), lys (il n'y a pas), alh (Dieu).

**ḥājatjtum** (vous avez argumenté) est un verbe Form III accompli 2ème personne masculin pluriel (2MP). La Form III de la racine h-j-j exprime une action réciproque et adversariale — chaque partie présente ses ḥujaj (arguments, preuves) contre l'autre. L'accompli indique que cet épisode d'argumentation est terminé. La construction "fīmā lakum bihi ʿilmun" précise le domaine : sur ce dont vous aviez la connaissance. On traduit par "avez argumenté".

**ʿilmun** (connaissance — premier) est un nom masculin indéfini au nominatif, sujet de la structure "lakum bihi ʿilmun" (= pour vous, concernant cela, connaissance). La racine ʿ-l-m désigne d'abord le fait de connaître (ʿalima = il a su), puis par dérivation nominale ʿilm = le corps de connaissance, le savoir structuré. Ici ʿilmun est un substantif — il désigne la connaissance comme réalité existante ("vous aviez de la connaissance"). On traduit par "connaissance".

**tuḥājjūna** (argumentez-vous) est un verbe Form III inaccompli 2ème personne masculin pluriel (2MP). Même racine et même forme que ḥājatjtum, mais à l'inaccompli — l'argumentation est en cours, continue. Ce changement de temps (accompli → inaccompli) est intentionnel : "vous avez argumenté" (passé, terminé) s'oppose à "vous argumentez" (présent, encore). "Fīmā" introduit le nouveau sujet : sur ce dont il n'y a pas de connaissance pour vous. On traduit par "argumentez-vous".

**laysa** (il n'y a pas) est un verbe défectif de la racine l-y-s, exprimant la négation existentielle. Contrairement à lā (particule de négation qui s'attache à un verbe), laysa est un verbe à part entière — il gouverne un sujet au nominatif et un prédicat à l'accusatif, comme kāna mais avec un sens négatif. Le Lane's donne laysa : "un mot dénotant la négation, ayant le régime du verbe kāna et de ses sœurs". Ici la structure est : "laysa lakum bihi ʿilmun" = "il n'y a pas pour vous de connaissance concernant cela" — ʿilmun (nom au nominatif) est le sujet apparent de laysa. On traduit par "il n'y a pas".

**ʿilmun** (connaissance — second) est le même nom que dans la première clause du verset, mais dans une structure niée par laysa. L'absence de connaissance est exprimée nominalement : ce n'est pas "vous ne savez pas" (verbe), mais "il n'y a pas de connaissance pour vous" (nom + existentielle niée). On traduit par "connaissance".

**Allāhu** (Dieu) est le nom propre au nominatif, sujet de la phrase suivante. Allāh = al-ilāh, la divinité par excellence, avec l'article défini incorporé au nom. Le nominatif indique que Dieu est le sujet actif du verbe yaʿlamu qui suit. On traduit par "Dieu".

**yaʿlamu** (sait) est un verbe Form I inaccompli 3ème personne masculin singulier (3MS) de la racine ʿ-l-m. La Form I (ʿalima / yaʿlamu) est la forme de base du verbe — connaître, savoir. L'inaccompli exprime un état continu ou permanent : Dieu sait de façon permanente. On traduit par "sait".

**taʿlamūna** (savez) est un verbe Form I inaccompli 2ème personne masculin pluriel (2MP) précédé de la négation lā. Même racine ʿ-l-m, même Form I, mais à la 2ème personne et niée. La structure wa-antum lā taʿlamūna crée le contraste final : Dieu (3MS, sait) / vous (2MP, ne savez pas). On traduit par "savez".

§JUSTIFICATION§

**avez argumenté** — Le sens "argumenter" [Argumentation/Dispute] est retenu pour ḥājatjtum (Form III accompli). L'accompli est rendu en français par "avez argumenté" pour marquer l'action passée et terminée. "Avez disputé" (Hamidullah) efface la dimension intellectuelle de la racine h-j-j — ḥujja = argument, preuve, raison décisive. "Avez plaidé" est écarté car il renvoie au domaine juridique. "Avez débattu" serait possible mais "argumenté" rend mieux la confrontation structurée d'arguments.

**connaissance** — Le sens "science" [Savoir/Connaissance] est retenu pour ʿilmun (forme nominale, deux occurrences). Le mot français "connaissance" est choisi pour rendre ʿilm comme substantif — un corps de savoir existant, pas l'acte de savoir. "Science" au sens moderne français (disciplines scientifiques) serait anachronique. "Savoir" est verbal et ne convient pas pour un nom. "Connaissance" rend la réalité substantive de ʿilmun.

**argumentez-vous** — Même justification que ḥājatjtum, mais à l'inaccompli. L'inaccompli est rendu par le présent "argumentez-vous", marquant une action qui se poursuit.

**il n'y a pas** — Le sens "il n'y a pas" [Négation/Non-existence] est retenu pour laysa. La construction laysa lakum bihi ʿilmun est une négation existentielle nominale : "il n'y a pas de connaissance pour vous à ce sujet". "N'est pas" serait trop copulatif. "Il n'existe pas" accentue l'inexistence ontologique mais est lourd. "Il n'y a pas" est la formule la plus naturelle en français pour cette absence existentielle.

**Dieu** — Le sens "Dieu" [Divinité] est retenu pour Allāh. Le nom propre Allāh désigne la divinité unique par excellence. "Allah" (translittération) est écarté car notre traduction vise le français courant.

**sait / savez** — Le sens "savoir" [Savoir/Connaissance] est retenu pour yaʿlamu (3MS) et taʿlamūna (2MP). "Sait" (Form I inaccompli 3MS) est direct et courant. "Savez" pour la 2MP niée (lā taʿlamūna). L'alternative "connaît / connaissez" est possible mais "sait / savez" est plus naturel en français pour une vérité générale.

§CRITIQUE§

**argumentez-vous vs disputez-vous** : Hamidullah traduit ḥājatjtum et tuḥājjūna par "disputez". Ce choix rend l'aspect conflictuel mais efface la dimension intellectuelle de la racine h-j-j — ḥujja = argument, preuve, raison décisive. La Form III exprime la confrontation structurée d'arguments, pas une querelle émotionnelle. Notre traduction "argumentez-vous" rend mieux cette joute rationnelle réciproque.

**il n'y a pas de connaissance vs vous ne savez pas** : Hamidullah traduit "fīmā laysa lakum bihi ʿilmun" par "ce que vous ne savez pas" — une proposition verbale avec "savoir" à l'imparfait. Mais l'arabe utilise la structure nominale : laysa (négation existentielle) + ʿilmun (substantif) + lakum (possession). La différence est structurellement significative : le texte dit "il n'y a pas de connaissance pour vous concernant cela" (absence objective d'un corps de savoir) et non "vous ne savez pas cela" (ignorance personnelle). La formulation nominale est plus impersonnelle et plus forte : ce n'est pas que vous êtes ignorants — c'est que la connaissance elle-même est absente. Notre traduction "ce dont il n'y a aucune connaissance pour vous" restitue cette structure nominale.`;

// ─────────────────────────────────────────────────────────────
// SEGMENTS (affichage)
// ─────────────────────────────────────────────────────────────
const SEGMENTS = [
  { position: 1,  ar: 'هَٰٓأَنتُمْ',    phon: 'hā antum',      fr: 'Vous voilà —',         word_key: null,   is_particle: true  },
  { position: 2,  ar: 'هَٰٓؤُلَآءِ',    phon: "hāʾulāʾi",     fr: '',                     word_key: null,   is_particle: true  },
  { position: 3,  ar: 'حَٰجَجْتُمْ',    phon: 'ḥājatjtum',     fr: 'avez argumenté',       word_key: 'hjj',  is_particle: false },
  { position: 4,  ar: 'فِيمَا',          phon: 'fīmā',          fr: 'sur ce dont',          word_key: null,   is_particle: true  },
  { position: 5,  ar: 'لَكُم',           phon: 'lakum',         fr: 'vous aviez',           word_key: null,   is_particle: true  },
  { position: 6,  ar: 'بِهِ',            phon: 'bihi',          fr: '',                     word_key: null,   is_particle: true  },
  { position: 7,  ar: 'عِلْمٌ',          phon: 'ʿilmun',        fr: 'la connaissance.',     word_key: 'elm',  is_particle: false },
  { position: 8,  ar: 'فَلِمَ',          phon: 'fa-lima',       fr: 'Pourquoi donc',        word_key: null,   is_particle: true  },
  { position: 9,  ar: 'تُحَآجُّونَ',    phon: 'tuḥājjūna',    fr: 'argumentez-vous',      word_key: 'hjj',  is_particle: false },
  { position: 10, ar: 'فِيمَا',          phon: 'fīmā',          fr: 'sur ce dont',          word_key: null,   is_particle: true  },
  { position: 11, ar: 'لَيْسَ',          phon: 'laysa',         fr: 'il n\'y a pas',        word_key: 'lys',  is_particle: false },
  { position: 12, ar: 'لَكُم',           phon: 'lakum',         fr: 'pour vous',            word_key: null,   is_particle: true  },
  { position: 13, ar: 'بِهِ',            phon: 'bihi',          fr: '',                     word_key: null,   is_particle: true  },
  { position: 14, ar: 'عِلْمٌ',          phon: 'ʿilmun',        fr: 'aucune connaissance.', word_key: 'elm',  is_particle: false },
  { position: 15, ar: 'وَٱللَّهُ',       phon: 'wa-llāhu',      fr: 'Dieu',                 word_key: 'alh',  is_particle: false },
  { position: 16, ar: 'يَعْلَمُ',        phon: 'yaʿlamu',       fr: 'sait,',                word_key: 'elm',  is_particle: false },
  { position: 17, ar: 'وَأَنتُمْ',       phon: 'wa-antum',      fr: 'tandis que vous',      word_key: null,   is_particle: true  },
  { position: 18, ar: 'لَا',             phon: 'lā',            fr: 'ne',                   word_key: null,   is_particle: true  },
  { position: 19, ar: 'تَعْلَمُونَ',     phon: 'taʿlamūna',    fr: 'savez pas.',           word_key: 'elm',  is_particle: false }
];

// ─────────────────────────────────────────────────────────────
// VWA — 8 rows
// ─────────────────────────────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: 'hjj',
    position: 3,
    sense_chosen: 'argumenter',
    concept_chosen: 'Argumentation/Dispute',
    reason: "ḥājatjtum = Form III accompli 2MP de h-j-j. Form III = argumentation mutuelle et réciproque (confrontation de ḥujaj = arguments, preuves). L'accompli marque un épisode terminé. Contexte : argumentation sur ce dont ils avaient la connaissance. Sens \"argumenter\" [Argumentation/Dispute] retenu.",
    analysis_axes: {
      sense_chosen: 'argumenter',
      concept_chosen: 'Argumentation/Dispute',
      concepts: {
        'Argumentation/Dispute': {
          status: 'retenu',
          senses: ['disputer', 'argumenter', 'preuve', 'vaincre par l\'argument', 'plaider'],
          proof_ctx: "ḥājatjtum est Form III accompli de h-j-j : confrontation mutuelle d'arguments structurés (ḥujja = preuve, argument décisif). L'accompli marque un épisode terminé. Direction/Destination (pèlerinage, voyage) est hors sujet. Retrait/Hésitation est contraire à l'esprit de l'argumentation."
        },
        'Direction/Destination': {
          status: 'nul',
          senses: ['se rendre vers', 'visiter', 'visiter fréquemment'],
          proof_ctx: "Sens de pèlerinage et de voyage — hors sujet dans un contexte d'argumentation intellectuelle."
        },
        'Sondage/Médecine': {
          status: 'nul',
          senses: ['sonder', 'traiter une fracture', 'raser'],
          proof_ctx: "Sens physique et médical — hors sujet."
        },
        'Retrait/Hésitation': {
          status: 'nul',
          senses: ['se retirer', 'rester sur place', 'retenir en soi'],
          proof_ctx: "Sens opposé à l'argumentation active — hors sujet."
        },
        'Anatomie/Temps': {
          status: 'nul',
          senses: ["os de l'orbite", 'année'],
          proof_ctx: "Sens anatomique ou temporel — hors sujet."
        }
      }
    }
  },
  {
    word_key: 'elm',
    position: 7,
    sense_chosen: 'science',
    concept_chosen: 'Savoir/Connaissance',
    reason: "ʿilmun = nom masculin indéfini nominatif de ʿ-l-m. Forme nominale (maṣdar) — le corps de connaissance comme réalité existante. Structure : lakum bihi ʿilmun = pour vous, de cela, connaissance. Sens \"science\" [Savoir/Connaissance] retenu pour la forme nominale de ʿilm.",
    analysis_axes: {
      sense_chosen: 'science',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: "ʿilmun est un nom verbal (forme nominale de ʿalima) désignant la connaissance comme réalité substantive. La structure lakum bihi ʿilmun affirme que cette connaissance existe pour eux. Marque/Signe (ʿalam = drapeau, montagne) est un homonyme partiel sans rapport avec la possession de savoir. Monde/Création (ʿālam) est également hors sujet."
        },
        'Marque/Signe': {
          status: 'nul',
          senses: ['marquer', 'signe', 'drapeau', 'montagne', 'repère', 'étendard', 'lèvre fendue'],
          proof_ctx: "Homonyme partiel de la racine ʿ-l-m — hors sujet ici."
        },
        'Monde/Création': {
          status: 'nul',
          senses: ['monde', 'les mondes', 'ensemble des créatures', 'univers'],
          proof_ctx: "ʿālam (monde/univers) est un dérivé différent de ʿilm (savoir) — hors sujet."
        }
      }
    }
  },
  {
    word_key: 'hjj',
    position: 9,
    sense_chosen: 'argumenter',
    concept_chosen: 'Argumentation/Dispute',
    reason: "tuḥājjūna = Form III inaccompli 2MP de h-j-j. Même forme que ḥājatjtum (pos=3) mais à l'inaccompli — l'argumentation est en cours. Contraste délibéré : accompli (terminé) → inaccompli (continu). Sens \"argumenter\" [Argumentation/Dispute] retenu.",
    analysis_axes: {
      sense_chosen: 'argumenter',
      concept_chosen: 'Argumentation/Dispute',
      concepts: {
        'Argumentation/Dispute': {
          status: 'retenu',
          senses: ['disputer', 'argumenter', 'preuve', 'vaincre par l\'argument', 'plaider'],
          proof_ctx: "tuḥājjūna est Form III inaccompli : l'argumentation mutuelle se poursuit. Le contraste avec ḥājatjtum (accompli) crée le paradoxe rhétorique du verset — passé terminé vs présent continu. Tous les autres sens (Direction, Médecine, Retrait) sont hors sujet."
        },
        'Direction/Destination': { status: 'nul', senses: ['se rendre vers', 'visiter'], proof_ctx: "Hors sujet." },
        'Sondage/Médecine': { status: 'nul', senses: ['sonder', 'traiter une fracture'], proof_ctx: "Hors sujet." },
        'Retrait/Hésitation': { status: 'nul', senses: ['se retirer', 'rester sur place'], proof_ctx: "Hors sujet." },
        'Anatomie/Temps': { status: 'nul', senses: ["os de l'orbite", 'année'], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: 'lys',
    position: 11,
    sense_chosen: 'il n\'y a pas',
    concept_chosen: 'Négation/Non-existence',
    reason: "laysa = verbe défectif de l-y-s, négation existentielle. Construction : laysa lakum bihi ʿilmun = il n'y a pas pour vous de connaissance concernant cela. ʿilmun (nom) est le sujet de laysa — négation nominale de l'existence de la connaissance. Sens \"il n'y a pas\" [Négation/Non-existence] retenu.",
    analysis_axes: {
      sense_chosen: "il n'y a pas",
      concept_chosen: 'Négation/Non-existence',
      concepts: {
        'Négation/Non-existence': {
          status: 'retenu',
          senses: ["ne pas être", "il n'y a pas", "n'était pas", 'être absent', "il n'est pas le cas que"],
          proof_ctx: "laysa gouverne ʿilmun (nom au nominatif) comme sujet apparent — structure nominale de négation existentielle. Le Lane's confirme : laysa est un verbe défectif dénotant la négation, gouvernant son sujet au nominatif. L'Exception/Exclusion (usage de laysa = illā) n'est pas applicable — il n'y a pas d'exception à formuler dans ce contexte."
        },
        'Exception/Exclusion': {
          status: 'nul',
          senses: ['sauf', 'hormis'],
          proof_ctx: "Usage exceptionnel de laysa comme particule d'exception (à la place de illā) — non applicable ici, pas de structure d'exception dans ce verset."
        }
      }
    }
  },
  {
    word_key: 'elm',
    position: 14,
    sense_chosen: 'science',
    concept_chosen: 'Savoir/Connaissance',
    reason: "ʿilmun = même forme nominale qu'en pos=7, mais dans la structure niée laysa lakum bihi ʿilmun. L'absence de connaissance est exprimée nominalement — ʿilmun est sujet de laysa. Sens \"science\" [Savoir/Connaissance] retenu.",
    analysis_axes: {
      sense_chosen: 'science',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: "Second ʿilmun (pos=14), symétrique au premier (pos=7) mais dans une structure niée. L'absence de connaissance est nominale (laysa... ʿilmun) et non verbale. Marque/Signe et Monde/Création sont hors sujet comme pour pos=7."
        },
        'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe', 'drapeau'], proof_ctx: "Hors sujet." },
        'Monde/Création': { status: 'nul', senses: ['monde', 'univers'], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: 'alh',
    position: 15,
    sense_chosen: 'Dieu',
    concept_chosen: 'Divinité',
    reason: "Allāhu = nom propre au nominatif, sujet de yaʿlamu. Allāh = al-ilāh = la divinité par excellence avec l'article défini incorporé. Sens \"Dieu\" [Divinité] retenu.",
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinité',
      concepts: {
        'Divinité': {
          status: 'retenu',
          senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
          proof_ctx: "Allāhu est le nom propre au nominatif, sujet actif de yaʿlamu. Il désigne la divinité unique par excellence. Adoration/Dévotion et Refuge/Protection sont des dérivés sémantiques de la racine — mais le mot ici est le nom propre lui-même, pas un de ses dérivés actifs."
        },
        'Adoration/Dévotion': {
          status: 'nul',
          senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
          proof_ctx: "Sens actifs dérivés de la racine — Allāh est ici le nom propre, pas une forme verbale."
        },
        'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: "Hors sujet." },
        'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: "Hors sujet." },
        'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: 'elm',
    position: 16,
    sense_chosen: 'savoir',
    concept_chosen: 'Savoir/Connaissance',
    reason: "yaʿlamu = Form I inaccompli 3MS de ʿ-l-m. Verbe actif (contrairement aux formes nominales ʿilmun en pos=7 et 14). L'inaccompli exprime un état continu/permanent. Sens \"savoir\" [Savoir/Connaissance] retenu pour la forme verbale.",
    analysis_axes: {
      sense_chosen: 'savoir',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: "yaʿlamu est Form I inaccompli 3MS — verbe actif de la racine ʿ-l-m exprimant le savoir en acte et en continu. Contraste avec les formes nominales (ʿilmun) du même verset. Marque/Signe et Monde/Création restent hors sujet."
        },
        'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe'], proof_ctx: "Hors sujet." },
        'Monde/Création': { status: 'nul', senses: ['monde', 'univers'], proof_ctx: "Hors sujet." }
      }
    }
  },
  {
    word_key: 'elm',
    position: 19,
    sense_chosen: 'savoir',
    concept_chosen: 'Savoir/Connaissance',
    reason: "taʿlamūna = Form I inaccompli 2MP de ʿ-l-m précédé de lā (négation). Contraste direct avec yaʿlamu (pos=16, 3MS, affirmatif) — vous (2MP) ne savez pas, Dieu (3MS) sait. Sens \"savoir\" [Savoir/Connaissance] retenu.",
    analysis_axes: {
      sense_chosen: 'savoir',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: "taʿlamūna est Form I inaccompli 2MP + lā : négation du savoir en cours. Symétrie parfaite avec yaʿlamu (3MS) — Dieu sait (actif, affirmatif) / vous ne savez pas (actif, nié). Même sens retenu, même forme verbale, mais personne et polarité inversées."
        },
        'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe'], proof_ctx: "Hors sujet." },
        'Monde/Création': { status: 'nul', senses: ['monde', 'univers'], proof_ctx: "Hors sujet." }
      }
    }
  }
];

// ─────────────────────────────────────────────────────────────
// word_daily — lys uniquement (autres roots: SKIP car phrases existent)
// ─────────────────────────────────────────────────────────────
const WORD_DAILY_LYS = [
  {
    analysis_id: 761,
    sense: "il n'y a pas",
    arabic: 'لَيْسَ هَذَا صَحِيحًا',
    phon: 'laysa hādhā ṣaḥīḥan',
    french: "Ce n'est pas correct."
  },
  {
    analysis_id: 761,
    sense: "il n'y a pas",
    arabic: 'لَيْسَ عِنْدِي وَقْتٌ',
    phon: "laysa ʿindī waqtun",
    french: "Je n'ai pas le temps."
  },
  {
    analysis_id: 761,
    sense: "il n'y a pas",
    arabic: 'لَيْسَ هُنَاكَ فَرْقٌ',
    phon: 'laysa hunāka farqun',
    french: "Il n'y a pas de différence."
  }
];

// ─────────────────────────────────────────────────────────────
// PIPELINE
// ─────────────────────────────────────────────────────────────
async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V66 (verse_id=' + VERSE_ID + ', va_id=' + VA_ID + ') ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ═══ ÉTAPE 2 — Vérification richesse racines ═══
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { aid: 637, key: 'hjj', name: 'ḥājja' },
    { aid: 254, key: 'elm', name: 'ʿilm' },
    { aid: 761, key: 'lys', name: 'laysa' },
    { aid: 250, key: 'alh', name: 'Allāh' }
  ];
  for (const r of rootsCheck) {
    const { data: m } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = m ? m.length : 0;
    console.log('  aid=' + r.aid + ' (' + r.key + '/' + r.name + ') : ' + n + ' sens ' + (n >= 6 ? '[OK]' : '[<6 SUSPECT → ENRICHIR]'));
  }

  // ═══ ENRICHISSEMENT lys (aid=761, 2 sens → 7) ═══
  console.log('\n═══ ENRICHISSEMENT lys (aid=761) — Lane\'s broot=lys ═══');
  const { data: lysSenses } = await db.from('word_meanings').select('id,sense,display_order').eq('analysis_id', 761).order('display_order');
  const lys_n = lysSenses ? lysSenses.length : 0;
  console.log('  Actuel : ' + lys_n + ' sens');

  if (lys_n < 6) {
    const maxOrder = Math.max(...(lysSenses || []).map(s => s.display_order), 0);
    const newSenses = [
      {
        analysis_id: 761,
        sense: "n'était pas",
        concept: 'Négation/Non-existence',
        status: 'nul',
        display_order: maxOrder + 1,
        meaning_type: 'etymology',
        description: "Extension temporelle par le contexte : laysa nie un état non seulement au présent mais aussi par extension au passé ou au futur selon le contexte du discours. Le Lane's précise : « par le contexte, il dénote la négation à un temps autre que le présent. »",
        proof_ctx: "Lane's (lys) : « by means of context, it denotes the negation of a thing at a time not the present » — l'extension temporelle est contextuelle, non lexicale."
      },
      {
        analysis_id: 761,
        sense: 'être absent',
        concept: 'Négation/Non-existence',
        status: 'nul',
        display_order: maxOrder + 2,
        meaning_type: 'etymology',
        description: "Laysa exprime l'absence d'une réalité : ce qui devrait être présent ne l'est pas. L'absence est ontologique — la chose n'existe pas pour celui concerné. Distinct de 'ne pas être' (copule négative) : ici l'accent est sur le manque, la privation.",
        proof_ctx: "Usage dans des constructions comme laysa lakum bihi ʿilmun (il n'y a pas de connaissance pour vous) — l'absence est la réalité niée, pas une qualité ou un état."
      },
      {
        analysis_id: 761,
        sense: "il n'est pas le cas que",
        concept: 'Négation/Non-existence',
        status: 'nul',
        display_order: maxOrder + 3,
        meaning_type: 'etymology',
        description: "Négation universelle et propositionnelle : laysa nie une proposition entière, pas seulement un état. Le Lane's donne l'exemple coranique laysa ʿalaykum junāḥun (il n'y a aucun tort sur vous) — équivalent de lā al-tabrīʾa (négation universelle). Nie le fait même qu'une proposition soit vraie.",
        proof_ctx: "Lane's (lys) : « parfois utilisé dans le sens de lā al-tabrīʾa » — négation universelle d'une réalité propositionnelle."
      },
      {
        analysis_id: 761,
        sense: 'sauf',
        concept: 'Exception/Exclusion',
        status: 'nul',
        display_order: maxOrder + 4,
        meaning_type: 'etymology',
        description: "Usage exceptionnel de laysa comme particule d'exception à la place de illā. Le Lane's : « utilisé comme particule exceptive à la place de illā ». Dans ce cas laysa cesse d'être un verbe et devient une particule d'exclusion — il exclut un élément d'une catégorie.",
        proof_ctx: "Lane's (lys) : « it is also used as an exceptive particle, in the place of illā » — usage limité à certaines constructions dialectales."
      },
      {
        analysis_id: 761,
        sense: 'hormis',
        concept: 'Exception/Exclusion',
        status: 'nul',
        display_order: maxOrder + 5,
        meaning_type: 'etymology',
        description: "Synonyme d'exception de 'sauf' dans le même usage exceptionnel de laysa. Exprime l'exclusion d'un élément particulier d'un ensemble. Exemple du Lane's : jāʾanī l-qawmu laysa Zaydan (la troupe est venue, hormis Zayd).",
        proof_ctx: "Lane's (lys) : « jāʾanī l-qawmu laysa Zaydan — The company of men came to me, except Zeyd. »"
      }
    ];
    const { error: enErr } = await db.from('word_meanings').insert(newSenses);
    if (enErr) { console.error('  Erreur enrichissement lys :', enErr.message); }
    else { console.log('  Ajouté : 5 sens → lys passe à ' + (lys_n + 5) + ' sens [2 concepts]'); }
    console.log('  [lys] Logs racine:');
    console.log('  7 sens extraits → 2 concepts');
    console.log("    Négation/Non-existence (5 sens) → RETENU : \"laysa gouverne ʿilmun comme sujet nominal — négation existentielle de la connaissance. Exception/Exclusion non applicable dans ce contexte.\"");
    console.log("    Exception/Exclusion (2 sens) → NUL : \"Usage de laysa = illā — pas de structure d'exception dans ce verset.\"");
  } else {
    console.log('  Déjà ≥ 6 sens → SKIP');
  }

  // ═══ LOGS ÉTAPE 3 ═══
  console.log('\n═══ ÉTAPE 3 — Logs concepts retenus ═══');
  console.log('  [hjj/pos=3] 5 sens → Argumentation/Dispute → RETENU : "Form III accompli — argumentation réciproque terminée. Direction/Destination, Médecine, Retrait, Anatomie → NUL."');
  console.log('  [elm/pos=7] 7 sens → Savoir/Connaissance → RETENU : "ʿilmun nom = corps de connaissance existant. Marque/Signe, Monde/Création → NUL."');
  console.log('  [hjj/pos=9] 5 sens → Argumentation/Dispute → RETENU : "Form III inaccompli — argumentation en cours. Contraste avec accompli pos=3."');
  console.log('  [lys/pos=11] 7 sens → Négation/Non-existence → RETENU : "laysa existentiel nominal — absence de connaissance."');
  console.log('  [elm/pos=14] 7 sens → Savoir/Connaissance → RETENU : "ʿilmun nié par laysa — absence nominale de connaissance."');
  console.log('  [alh/pos=15] 5 sens → Divinité → RETENU : "Allāh = nom propre, sujet actif de yaʿlamu."');
  console.log('  [elm/pos=16] 7 sens → Savoir/Connaissance → RETENU : "yaʿlamu Form I 3MS — verbe actif continu."');
  console.log('  [elm/pos=19] 7 sens → Savoir/Connaissance → RETENU : "taʿlamūna Form I 2MP + lā — contraste avec yaʿlamu 3MS."');
  console.log('\n  VERSET 3:66 — ÉTAPE 3 TERMINÉE');
  console.log('    hjj (pos=3) → sens "Argumentation/Dispute" → "avez argumenté"');
  console.log('    elm (pos=7) → sens "Savoir/Connaissance" → "connaissance" (sense_chosen=science)');
  console.log('    hjj (pos=9) → sens "Argumentation/Dispute" → "argumentez-vous"');
  console.log("    lys (pos=11) → sens \"Négation/Non-existence\" → \"il n'y a pas\"");
  console.log('    elm (pos=14) → sens "Savoir/Connaissance" → "connaissance" (sense_chosen=science)');
  console.log('    alh (pos=15) → sens "Divinité" → "Dieu"');
  console.log('    elm (pos=16) → sens "Savoir/Connaissance" → "sait" (sense_chosen=savoir)');
  console.log('    elm (pos=19) → sens "Savoir/Connaissance" → "ne savez pas" (sense_chosen=savoir)');
  console.log('    Traduction : "Vous voilà ! Vous avez argumenté sur ce dont vous aviez la connaissance. Pourquoi donc argumentez-vous sur ce dont il n\'y a aucune connaissance pour vous ? Dieu sait, tandis que vous ne savez pas."');

  // ═══ ÉTAPES 1 & 4 — verse_analyses UPDATE ═══
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses UPDATE (va_id=' + VA_ID + ') ═══');
  const { error: vaErr } = await db.from('verse_analyses').update({
    segments_step1: SEGMENTS_STEP1,
    full_translation: FULL_TRANSLATION_HAMIDULLAH,
    translation_arab: TRANSLATION_ARAB,
    translation_meditational: TRANSLATION_MEDITATIONAL,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments: SEGMENTS,
    validated: true,
    model_used: 'claude-opus-4-pipeline-maison',
    prompt_version: 'v3'
  }).eq('id', VA_ID);
  if (vaErr) throw vaErr;
  console.log('  UPDATE OK (va_id=' + VA_ID + ')');

  // ═══ ÉTAPE 3 — VWA ═══
  console.log('\n═══ ÉTAPE 3 — VWA (8 rows) ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('  Clean : ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: { ...v.analysis_axes, concept_chosen: v.concept_chosen, sense_chosen: v.sense_chosen }
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');
  vwaRows.forEach(v => console.log('    pos=' + v.position + ' (' + v.word_key + ') → ' + v.sense_chosen));

  // ═══ ÉTAPE 5 — word_daily ═══
  console.log('\n═══ ÉTAPE 5 — word_daily ═══');
  // lys: 0 phrases → INSERT
  const { data: lysDaily } = await db.from('word_daily').select('id').eq('analysis_id', 761);
  if (!lysDaily || lysDaily.length === 0) {
    const { error: dlErr } = await db.from('word_daily').insert(WORD_DAILY_LYS);
    if (dlErr) { console.error('  Erreur daily lys :', dlErr.message); }
    else { console.log('  lys (aid=761) : 3 phrases insérées'); }
  } else {
    console.log('  lys (aid=761) : ' + lysDaily.length + ' phrases [SKIP]');
  }
  // Check others
  for (const [aid, key] of [[637,'hjj'],[254,'elm'],[250,'alh']]) {
    const { data: dly } = await db.from('word_daily').select('id').eq('analysis_id', aid);
    console.log('  ' + key + ' (aid=' + aid + ') : ' + (dly?.length||0) + ' phrases [SKIP]');
  }

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V66 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
