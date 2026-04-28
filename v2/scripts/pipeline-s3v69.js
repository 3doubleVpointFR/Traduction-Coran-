// Pipeline S3:V69 — verse_id=362
// "Une faction des gens de l'Écriture souhaitent ardemment vous égarer..."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 362;
const SURAH = 3, VERSE = 69;
const VA_ID = 719;

// ═══════════════════════════════════════════════════════
// SEGMENTS_STEP1 — avec word_key='sher' ajouté pos=13
// ═══════════════════════════════════════════════════════
const SEGMENTS_STEP1 = [
  { pos: 'verbe', phon: 'وَدَّت', root: 'و د د', type: 'important', tense: 'accompli', arabic: 'وَدَّت', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème', genre: 'féminin' }, phonetic: 'وَدَّت', position: 1, word_key: 'wdd', is_particle: false },
  { pos: 'nom', phon: 'طَّآئِفَةٌ', root: 'ط و ف', type: 'important', arabic: 'طَّآئِفَةٌ', gender: 'féminin', number: 'singulier', grammar: { pos: 'nom', gender: 'féminin', number: 'singulier' }, phonetic: 'طَّآئِفَةٌ', position: 2, word_key: 'twf', is_particle: false },
  { phon: 'مِّنْ', type: 'particle', arabic: 'مِّنْ', phonetic: 'مِّنْ', position: 3, is_particle: true },
  { pos: 'nom', phon: 'أَهْلِ', root: 'ا ه ل', type: 'important', arabic: 'أَهْلِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'أَهْلِ', position: 4, word_key: 'ahl', is_particle: false },
  { pos: 'nom', phon: 'كِتَٰبِ', root: 'ك ت ب', type: 'important', arabic: 'ٱلْكِتَٰبِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, definite: true, phonetic: 'كِتَٰبِ', position: 5, word_key: 'ktb', is_particle: false },
  { phon: 'لَوْ', type: 'particle', arabic: 'لَوْ', phonetic: 'لَوْ', position: 6, is_particle: true },
  { pos: 'verbe', phon: 'يُضِلُّونَكُمْ', root: 'ض ل ل', type: 'important', tense: 'inaccompli', arabic: 'يُضِلُّونَكُمْ', person: '3ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '3ème', suffix_pronoun: '2MP' }, phonetic: 'يُضِلُّونَكُمْ', position: 7, word_key: 'dll', verb_form: 'IV', is_particle: false, suffix_pronoun: '2MP' },
  { phon: 'مَا', type: 'particle', arabic: 'وَمَا', phonetic: 'مَا', position: 8, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'يُضِلُّونَ', root: 'ض ل ل', type: 'important', tense: 'inaccompli', arabic: 'يُضِلُّونَ', person: '3ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '3ème' }, phonetic: 'يُضِلُّونَ', position: 9, word_key: 'dll', verb_form: 'IV', is_particle: false, preceded_by_negation: true },
  { phon: 'إِلَّآ', type: 'particle', arabic: 'إِلَّآ', phonetic: 'إِلَّآ', position: 10, is_particle: true },
  { pos: 'nom', phon: 'أَنفُسَهُمْ', root: 'ن ف س', type: 'important', arabic: 'أَنفُسَهُمْ', gender: 'féminin', number: 'pluriel', grammar: { pos: 'nom', gender: 'féminin', number: 'pluriel', suffix_pronoun: '3MP' }, phonetic: 'أَنفُسَهُمْ', position: 11, word_key: 'nfs', is_particle: false, suffix_pronoun: '3MP' },
  { phon: 'مَا', type: 'particle', arabic: 'وَمَا', phonetic: 'مَا', position: 12, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'يَشْعُرُونَ', root: 'ش ع ر', type: 'important', tense: 'inaccompli', arabic: 'يَشْعُرُونَ', person: '3ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '3ème' }, phonetic: 'يَشْعُرُونَ', position: 13, word_key: 'sher', is_particle: false, preceded_by_negation: true }
];

// ═══════════════════════════════════════════════════════
// SEGMENTS (affichage traduit)
// Schéma strict : fr, pos, phon, arabic, word_key, is_particle, sense_retenu, position
// ═══════════════════════════════════════════════════════
const SEGMENTS = [
  { fr: 'souhaitent ardemment',  pos: 1,  phon: 'waddatu',        arabic: 'وَدَّت',         word_key: 'wdd',  is_particle: false, sense_retenu: 'souhaiter ardemment', position: 1  },
  { fr: 'une faction',           pos: 2,  phon: 'ṭāʾifatun',      arabic: 'طَّآئِفَةٌ',      word_key: 'twf',  is_particle: false, sense_retenu: 'faction',             position: 2  },
  { fr: 'de',                    pos: 3,  phon: 'min',             arabic: 'مِّنْ',          is_particle: true, position: 3  },
  { fr: 'les gens',              pos: 4,  phon: 'ahli',            arabic: 'أَهْلِ',         word_key: 'ahl',  is_particle: false, sense_retenu: 'gens de',             position: 4  },
  { fr: "de l'Écriture",         pos: 5,  phon: 'al-kitābi',       arabic: 'ٱلْكِتَٰبِ',    word_key: 'ktb',  is_particle: false, sense_retenu: 'écriture révélée',    position: 5  },
  { fr: 'que',                   pos: 6,  phon: 'law',             arabic: 'لَوْ',           is_particle: true, position: 6  },
  { fr: 'vous égarer',           pos: 7,  phon: 'yuḍillūnakum',   arabic: 'يُضِلُّونَكُمْ', word_key: 'dll',  is_particle: false, sense_retenu: 'faire égarer',        position: 7  },
  { fr: 'mais',                  pos: 8,  phon: 'wa-mā',           arabic: 'وَمَا',          is_particle: true, position: 8  },
  { fr: "n'égarent",             pos: 9,  phon: 'yuḍillūna',      arabic: 'يُضِلُّونَ',     word_key: 'dll',  is_particle: false, sense_retenu: 'faire égarer',        position: 9  },
  { fr: 'que',                   pos: 10, phon: 'illā',            arabic: 'إِلَّآ',         is_particle: true, position: 10 },
  { fr: 'eux-mêmes',             pos: 11, phon: 'anfusahum',       arabic: 'أَنفُسَهُمْ',   word_key: 'nfs',  is_particle: false, sense_retenu: 'soi-même',            position: 11 },
  { fr: 'sans',                  pos: 12, phon: 'wa-mā',           arabic: 'وَمَا',          is_particle: true, position: 12 },
  { fr: "s'en apercevoir",       pos: 13, phon: 'yashʿurūna',     arabic: 'يَشْعُرُونَ',   word_key: 'sher', is_particle: false, sense_retenu: 'être conscient de',   position: 13 }
];

// ═══════════════════════════════════════════════════════
// TRADUCTIONS
// ═══════════════════════════════════════════════════════
const FULL_TRANSLATION_HAMIDULLAH =
  "Une partie des gens du Livre voudrait vous égarer ; mais ils n'égarent qu'eux-mêmes, sans s'en rendre compte.";

// Notre traduction étymologique en français naturel
const TRANSLATION_ARAB =
  "Une faction des gens de l'Écriture souhaitent ardemment vous égarer — mais ils n'égarent qu'eux-mêmes, sans s'en apercevoir.";

const TRANSLATION_MEDITATIONAL =
  "L'hostilité d'un sous-groupe n'atteint pas sa cible : vouloir détourner les autres du juste chemin conduit à se perdre soi-même. L'ironie est que cette faction n'en a pas conscience.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Ce verset fait suite à V68 qui affirmait "Dieu est le protecteur de ceux qui accordent confiance." V69 introduit immédiatement la menace opposée : une faction parmi les gens de l'Écriture qui souhaite activement induire en erreur — et dont la manœuvre se retourne contre elle-même.

**waddatu** (souhaitent ardemment) est un verbe accompli 3ème personne féminin singulier de la racine w-d-d. La forme wudd avec redoublement de la consonne centrale exprime un désir intense et orienté. Le verbe est au féminin singulier pour s'accorder avec ṭāʾifatun (féminin). Il est suivi de law (si seulement) qui introduit un souhait portant sur quelque chose d'espéré. Lane's : wudd = désirer ardemment, souhaiter avec force. On traduit par "souhaitent ardemment".

**ṭāʾifatun** (une faction) est un nom féminin singulier indéfini nominatif de la racine ṭ-w-f, sujet de waddatu. Le tanwīn (désinence -un) marque l'indéfini — le verset parle d'une faction non nommée, pas de l'ensemble. Lane's : ṭāʾifa = "une partie distincte ou portion d'une chose, et un groupe de personnes constituant une unité identifiable". La construction min ahl al-kitāb (de parmi les gens de l'Écriture) précise qu'il s'agit d'un sous-groupe, pas d'une communauté entière. On traduit par "une faction".

**ahli** (les gens de) est un nom masculin génitif de la racine ʾ-h-l, premier terme d'une construction idafa (ahl al-kitāb = les gens de l'Écriture). L'idafa relie ahl à al-kitāb par un lien d'appartenance : "ceux dont l'identité est liée à l'Écriture". On traduit par "les gens de".

**al-kitābi** (l'Écriture) est un nom masculin défini génitif de la racine k-t-b, second terme de l'idafa. Dans ahl al-kitāb, al-kitāb désigne le texte révélé comme objet identifiable — les Écritures (Torah, Évangile). Sens "écriture révélée" [Livre/Écrit] retenu, cohérent avec l'usage en V65. On traduit par "l'Écriture".

**yuḍillūnakum** (vous égarer) est un verbe de la forme IV (yuḍillu) de la racine ḍ-l-l, inaccompli 3ème personne masculin pluriel avec pronom suffixe 2MP (kum = vous). La forme IV est causative : aḍalla = "faire s'écarter, faire s'égarer". La structure law + inaccompli exprime un souhait portant sur un futur désiré (si seulement ils pouvaient vous égarer). On traduit par "vous égarer".

**yuḍillūna** (n'égarent) est le même verbe Form IV, inaccompli 3MP, mais cette fois dans la structure wa-mā yuḍillūna illā anfusahum (mais ils n'égarent que leurs propres êtres). La négation wa-mā...illā (ne...que) restreint l'effet de l'égarement à leurs propres personnes, non à ceux qu'ils visaient. On traduit par "n'égarent".

**anfusahum** (eux-mêmes) est le pluriel de nafs avec pronom suffixe 3MP (hum = leur). Anfus est l'objet direct de yuḍillūna : c'est leur propre être qui est égaré. Lane's : nafs = soi-même, l'être dans son identité propre. On traduit par "eux-mêmes".

**yashʿurūna** (s'en apercevoir) est un verbe Form I de la racine sh-ʿ-r, inaccompli 3MP, nié par wa-mā. La racine sh-ʿ-r désigne la perception intérieure, la conscience spontanée de quelque chose. La négation wa-mā yashʿurūna = ils ne perçoivent pas, exprimé en français par "sans s'en apercevoir". On traduit par "s'en apercevoir" (dans la construction négative).

§JUSTIFICATION§

**souhaitent ardemment** — Le sens retenu est "souhaiter ardemment" de la racine w-d-d. L'expression "souhaitent ardemment" est choisie car wudd (avec redoublement) désigne un désir intense orienté vers un résultat, et law qui suit confirme le caractère conditionnel du souhait. L'alternative "voudraient" (Hamidullah) est écartée car le conditionnel en français amoindrit la force du désir, alors que waddatu est un accompli qui affirme le souhait comme un fait.

**une faction** — Le sens retenu est "faction" de la racine ṭ-w-f. Le mot "faction" est choisi car ṭāʾifa désigne un sous-groupe identifiable et organisé au sein d'un ensemble plus large. L'alternative "partie" (Hamidullah) est écartée car trop abstraite — "partie" peut désigner une fraction numérique, alors que ṭāʾifa désigne spécifiquement un groupement humain. L'alternative "groupe" est écartée car "faction" rend mieux l'idée d'une entité distincte avec une position propre.

**les gens de** — Le sens retenu est "gens de" de la racine ʾ-h-l. L'expression "gens de" est choisie car ahl désigne ceux dont l'identité est liée à quelque chose, ceux qui appartiennent à. L'alternative "peuple" est écartée car trop large et sans nuance d'appartenance.

**l'Écriture** — Le sens retenu est "écriture révélée" de la racine k-t-b. Le mot "Écriture" est choisi car al-kitāb dans ce contexte désigne le corpus révélé dans sa dimension sacrée — le texte écrit comme référence fondatrice. Cohérent avec V65. L'alternative "Livre" est écartée car elle désigne un objet physique ordinaire et non le texte révélé comme tel.

**vous égarer / n'égarent** — Le sens retenu est "faire égarer" de la racine ḍ-l-l, forme IV causative. Le verbe "égarer" est choisi car aḍalla désigne l'acte de faire dévier quelqu'un de son chemin. L'alternative "induire en erreur" est écartée car trop intellectuelle — ḍalla désigne une déviation de direction, pas une erreur de raisonnement.

**eux-mêmes** — Le sens retenu est "soi-même" de la racine n-f-s. Le mot "eux-mêmes" est choisi car anfusahum (pluriel de nafs + pronom 3MP) désigne leurs propres êtres comme objets de l'égarement. L'alternative "âmes" est écartée car elle connotelé registre spiritualiste, alors que nafs ici désigne simplement l'être propre de chacun.

**s'en apercevoir** — Le sens retenu est "être conscient de" de la racine sh-ʿ-r. L'expression "sans s'en apercevoir" est choisie car wa-mā yashʿurūna exprime l'absence de conscience spontanée de la situation. L'alternative "s'en rendre compte" (Hamidullah) est sémantiquement proche mais "s'apercevoir" désigne une perception plus soudaine et directe, moins réfléchie.

§CRITIQUE§

**souhaitent ardemment vs "voudrait"** : Les traductions courantes (Hamidullah) donnent "voudrait vous égarer". Ce choix transpose waddatu en conditionnel français, créant une nuance d'incertitude ou de potentialité qui n'est pas dans le texte. En arabe, waddatu est un accompli (le souhait est affirmé comme fait) suivi de law (si seulement) qui porte sur l'acte désiré. Notre traduction "souhaitent ardemment" restitue l'accompli assertif de waddatu et l'intensité de wudd (racine du désir ardent). La différence est structurelle : "voudrait" insinue que le désir est hypothétique ou timide, alors que l'arabe affirme le désir comme une réalité.

**gens de l'Écriture vs "gens du Livre"** : Les traductions courantes donnent "gens du Livre". Ce choix fixe kitāb comme "livre" physique ou institutionnel. Notre traduction donne "gens de l'Écriture" car al-kitāb dans ahl al-kitāb désigne d'abord l'acte d'écriture révélée et le texte sacré dans sa dimension de parole fixée — pas l'objet-livre. La nuance est que "Écriture" maintient le lien avec l'écriture divine, alors que "Livre" le réduit à un objet.`;

// ═══════════════════════════════════════════════════════
// ENRICHISSEMENT twf (aid=790) — 3 sens → 18 sens
// Lane's Twf : ṭāʾifa = groupe/faction, ṭāʾif = patrouille,
//              ṭūfān = déluge, aṭāfa bi-hi = rendre visite,
//              ṭawwāf = serviteur attentif
// ═══════════════════════════════════════════════════════
const TWF_NEW_SENSES = [
  // [Groupe/Faction] — ṭāʾifa = partie distincte / groupe de personnes
  { analysis_id: 790, sense: 'groupe',         concept: 'Groupe/Faction', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾifa", proof_phon: 'ṭāʾifa',
    proof_tr: 'partie distincte, groupe de personnes',
    proof_ctx: "Lane's : ṭāʾifa = « une partie distincte ou portion d'une chose, et un groupe de personnes constituant une unité identifiable, un corps de même profession, une communauté, une secte ».",
    period: 'coranique' },
  { analysis_id: 790, sense: 'faction',        concept: 'Groupe/Faction', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾifa", proof_phon: 'ṭāʾifa',
    proof_tr: 'faction, division',
    proof_ctx: "Lane's : ṭāʾifa désigne une division ou corps de personnes distincts au sein d'un ensemble plus large — pouvant désigner une faction organisée avec une position propre.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'partie distincte', concept: 'Groupe/Faction', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾifa", proof_phon: 'ṭāʾifa',
    proof_tr: 'a detached or distinct part or portion',
    proof_ctx: "Lane's : ṭāʾifa = « une portion séparable d'un tout » — sens premier de l'acte de tourner autour et donc d'en constituer un arc distinct.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'communauté',     concept: 'Groupe/Faction', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾifa", proof_phon: 'ṭāʾifa',
    proof_tr: 'body, distinct community',
    proof_ctx: "Lane's : ṭāʾifa peut désigner un corps humain constituant une communauté distincte ou un groupe confessionnel.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'secte',          concept: 'Groupe/Faction', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾifa", proof_phon: 'ṭāʾifa',
    proof_tr: 'sect, party',
    proof_ctx: "Lane's : ṭāʾifa = sect (groupe particulier au sein d'un ensemble religieux ou politique).",
    period: 'coranique' },
  // [Patrouille/Ronde] — ṭāʾif = celui qui fait la ronde
  { analysis_id: 790, sense: 'patrouille',     concept: 'Patrouille/Ronde', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾif", proof_phon: 'ṭāʾif',
    proof_tr: 'le patrouilleur, la ronde de nuit',
    proof_ctx: "Lane's : ṭāʾif = « la ronde de nuit, ceux qui patrouillent autour des maisons » (al-ʿasas). Désigne spécifiquement ceux qui font la ronde nocturne.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'ronde',          concept: 'Patrouille/Ronde', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾif", proof_phon: 'ṭāʾif',
    proof_tr: 'ronde, tournée de surveillance',
    proof_ctx: "Lane's : ṭāʾif = le déplacement circulaire à des fins de surveillance, la tournée.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'garde de nuit',  concept: 'Patrouille/Ronde', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭāʾif", proof_phon: 'ṭāʾif',
    proof_tr: 'guard of the night',
    proof_ctx: "Lane's : ṭāʾif désigne spécifiquement ceux qui font la ronde la nuit — garde nocturne.",
    period: 'coranique' },
  // [Déluge/Inondation] — ṭūfān = eau qui submerge
  { analysis_id: 790, sense: 'déluge',         concept: 'Déluge/Inondation', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭūfān", proof_phon: 'ṭūfān',
    proof_tr: 'déluge, pluie dévastatrice',
    proof_ctx: "Lane's : ṭūfān = « une pluie dévastatrice ; et une eau irrésistible qui couvre et submerge tout » — c'est le déluge de Noé.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'inondation',     concept: 'Déluge/Inondation', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭūfān", proof_phon: 'ṭūfān',
    proof_tr: 'inondation, eau qui submerge',
    proof_ctx: "Lane's : ṭūfān désigne l'eau qui s'étend à l'excès et noie la terre entière.",
    period: 'coranique' },
  // [Visite/Approche] — aṭāfa bihi = venir à quelqu'un, rendre visite
  { analysis_id: 790, sense: 'rendre visite',  concept: 'Visite/Approche', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — aṭāfa bihi (Form IV)", proof_phon: 'aṭāfa bihi',
    proof_tr: 'il vint à lui, lui rendit visite',
    proof_ctx: "Lane's : aṭāfa bihi = « il vint à lui, lui rendit visite, s'arrêta chez lui comme hôte ».",
    period: 'coranique' },
  { analysis_id: 790, sense: "s'approcher",    concept: 'Visite/Approche', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — aṭāfa bihi (Form IV)", proof_phon: 'aṭāfa bihi',
    proof_tr: "s'approcher, se rapprocher",
    proof_ctx: "Lane's : aṭāfa bihi = qārabahu (se rapprocher de lui).",
    period: 'coranique' },
  { analysis_id: 790, sense: "s'arrêter chez", concept: 'Visite/Approche', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — aṭāfa bihi (Form IV)", proof_phon: 'aṭāfa bihi',
    proof_tr: "s'arrêter chez quelqu'un",
    proof_ctx: "Lane's : aṭāfa bihi = alamma bihi (faire escale chez lui, s'y arrêter).",
    period: 'coranique' },
  // [Service/Soin] — ṭawwāf = serviteur attentif
  { analysis_id: 790, sense: 'serviteur attentif', concept: 'Service/Soin', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭawwāf", proof_phon: 'ṭawwāf',
    proof_tr: 'serviteur attentif et diligent',
    proof_ctx: "Lane's : ṭawwāf = « un serviteur qui sert avec douceur et soin » (AHeyth) ; désigne aussi les serviteurs et esclaves domestiques qui circulent pour servir.",
    period: 'coranique' },
  { analysis_id: 790, sense: 'servir avec soin', concept: 'Service/Soin', status: 'validated', meaning_type: 'etymology',
    proof_ref: "Lane's Twf — ṭawwāf", proof_phon: 'ṭawwāf',
    proof_tr: 'servir avec soin et diligence',
    proof_ctx: "Lane's : ṭawwāf (Form II participe actif) exprime l'idée d'un service attentif rendu en circulant auprès de ceux qu'on sert.",
    period: 'coranique' }
];

// ═══════════════════════════════════════════════════════
// WORD DAILY — twf (daily=0 → ajouter 3 phrases)
// ═══════════════════════════════════════════════════════
const TWF_DAILY = [
  { analysis_id: 790, sense: 'groupe', arabic: 'طَائِفَةٌ مِنَ الْعُمَّالِ تَجَمَّعَتْ أَمَامَ الْمَبْنَى', phon: 'ṭāʾifatun min al-ʿummāli tajamaʿat amāma l-mabnā', french: "Un groupe de travailleurs s'est rassemblé devant le bâtiment." },
  { analysis_id: 790, sense: 'groupe', arabic: 'طَافَ الْحُرَّاسُ حَوْلَ الْمَنْزِلِ كُلَّ لَيْلَةٍ', phon: "ṭāfa l-ḥurrāsu ḥawla l-manzili kulla laylatin", french: "Les gardes faisaient la ronde autour de la maison chaque nuit." },
  { analysis_id: 790, sense: 'groupe', arabic: 'طَائِفَةٌ مِنَ السُّكَّانِ اعْتَرَضَتْ عَلَى الْقَرَارِ', phon: 'ṭāʾifatun min al-sukkāni iʿtaraḍat ʿalā l-qarāri', french: "Une faction des habitants s'est opposée à la décision." }
];

// ═══════════════════════════════════════════════════════
// VWA
// ═══════════════════════════════════════════════════════
const VWA_ROWS = [
  // pos=1 : waddatu (wdd) — accompli 3FS, souhait ardent
  {
    word_key: 'wdd', position: 1,
    sense_chosen: 'souhaiter ardemment',
    concept_chosen: 'Souhait/Désir',
    reason: "waddatu = Form I accompli 3FS de w-d-d (féminin s'accorde avec ṭāʾifatun). Suivi de law = souhait portant sur un résultat désiré. Wudd (redoublement) = désir intense. Sens « souhaiter ardemment » [Souhait/Désir] retenu.",
    analysis_axes: {
      concepts: {
        'Souhait/Désir': {
          senses: ['désirer', 'souhaiter ardemment'],
          status: 'retenu',
          proof_ctx: "waddatu suivi de law (si seulement) exprime un souhait ardent portant sur un résultat désiré mais pas encore atteint. Le redoublement de la consonne (wudd) indique l'intensité. Le sujet est hostile (une faction qui veut égarer), ce qui place clairement le mot dans le registre du désir unilatéral orienté vers un résultat, non de l'affection mutuelle."
        },
        'Amour/Affection': {
          senses: ['aimer', 'affection', 'souhaiter', 'amour', 'ami', 'bien-aimé', 'aimant', 's\'aimer mutuellement', 'se faire aimer'],
          status: 'peu_probable',
          proof_ctx: "wudd inclut une dimension d'amour et d'affection, et « souhaiter » y figure aussi. Mais dans ce verset, l'acte désiré est l'égarement d'autrui — le contexte est hostile, non affectif. [Souhait/Désir] rend mieux l'acte de vouloir ardemment un résultat précis, sans la chaleur relationnelle de l'affection."
        },
        'Idolâtrie': {
          senses: ['idole (Wadd)'],
          status: 'nul',
          proof_ctx: "Sens du nom propre Wadd (idole) — hors contexte verbal."
        }
      }
    }
  },

  // pos=2 : ṭāʾifatun (twf) — nom féminin singulier, sujet
  {
    word_key: 'twf', position: 2,
    sense_chosen: 'faction',
    concept_chosen: 'Groupe/Faction',
    reason: "ṭāʾifatun = nom féminin singulier indéfini nominatif de ṭ-w-f, sujet de waddatu. Lane's : ṭāʾifa = partie distincte d'un ensemble / groupe de personnes identifiable. La construction min ahl al-kitāb (de parmi les gens de l'Écriture) confirme qu'il s'agit d'un sous-groupe. Sens « faction » [Groupe/Faction] retenu.",
    analysis_axes: {
      concepts: {
        'Groupe/Faction': {
          senses: ['groupe', 'faction', 'partie distincte', 'communauté', 'secte'],
          status: 'retenu',
          proof_ctx: "ṭāʾifatun désigne un groupement humain distinct identifiable au sein d'un ensemble plus grand (ahl al-kitāb). Lane's : ṭāʾifa = « une portion séparable / un corps de personnes distinct ». Le fait qu'elle soit précédée de min (de parmi) confirme qu'il s'agit d'un sous-groupe avec une identité propre — ce que rend exactement « faction »."
        },
        'Circumambulation/Tournée': {
          senses: ['tourner autour', 'tawâf', 'circuler'],
          status: 'nul',
          proof_ctx: "Ces sens désignent l'acte de tourner (verbe ou rituel) — ṭāʾifatun est ici un nom désignant un groupe humain, non un acte de circumambulation."
        },
        'Patrouille/Ronde': {
          senses: ['patrouille', 'ronde', 'garde de nuit'],
          status: 'nul',
          proof_ctx: "La patrouille est un usage spécifique de ṭāʾif (au singulier, désigne celui qui fait la ronde). ṭāʾifatun ici désigne un groupe d'appartenance, non une fonction de surveillance."
        },
        'Déluge/Inondation': { senses: ['déluge', 'inondation'], status: 'nul', proof_ctx: "ṭūfān est un nom distinct de ṭāʾifa — hors sujet." },
        'Visite/Approche': { senses: ['rendre visite', "s'approcher", "s'arrêter chez"], status: 'nul', proof_ctx: "Hors sujet — ṭāʾifatun est un groupe humain, pas un acte de visite." },
        'Service/Soin': { senses: ['serviteur attentif', 'servir avec soin'], status: 'nul', proof_ctx: "Hors sujet." }
      }
    }
  },

  // pos=4 : ahli (ahl) — génitif, construct state
  {
    word_key: 'ahl', position: 4,
    sense_chosen: 'gens de',
    concept_chosen: 'Famille/Communauté',
    reason: "ahli = nom masculin génitif de ʾ-h-l, premier terme de l'idafa ahl al-kitāb. Ahl désigne ceux dont l'identité est liée à quelque chose. Sens « gens de » [Famille/Communauté] retenu — cohérent avec V65 et tous les VWA précédents.",
    analysis_axes: {
      concepts: {
        'Famille/Communauté': {
          senses: ['famille', 'gens de', 'peuple'],
          status: 'retenu',
          proof_ctx: "ahl al-kitāb est une construction idiomatique qui désigne ceux dont l'appartenance est définie par rapport au texte révélé. « Gens de » rend exactement ce lien d'appartenance sans sur-spécifier la nature communautaire — cohérent avec tous les VWA précédents pour ahl dans ce contexte."
        },
        'Mérite/Aptitude': { senses: ['digne de'], status: 'nul', proof_ctx: "Ce sens (être digne de) s'applique au verbe tahawwala et à la construction ahl + infinitif — hors sujet dans ahl al-kitāb." },
        'Sens isolé/Accueillir': { senses: ['accueillir'], status: 'nul', proof_ctx: "Hors sujet." },
        'Parenté/Famille': { senses: ['se marier'], status: 'nul', proof_ctx: "Hors sujet." }
      }
    }
  },

  // pos=5 : al-kitābi (ktb) — nom défini génitif
  {
    word_key: 'ktb', position: 5,
    sense_chosen: 'écriture révélée',
    concept_chosen: 'Livre/Écrit',
    reason: "al-kitābi = nom défini génitif de k-t-b, second terme de l'idafa ahl al-kitāb. Désigne le texte révélé (Torah, Évangile) comme corpus sacré identifié. Sens « écriture révélée » [Livre/Écrit] retenu — cohérent avec V65.",
    analysis_axes: {
      concepts: {
        'Livre/Écrit': {
          senses: ['livre', 'écriture révélée', 'registre', 'contrat écrit', 'contrat de mariage', "contrat d'affranchissement"],
          status: 'retenu',
          proof_ctx: "Dans ahl al-kitāb, al-kitāb désigne le texte révélé comme objet identifiable — les Écritures sacrées. « Écriture révélée » rend cette identité de texte sacré, cohérent avec V65 où la même construction désigne Torah et Évangile nommés explicitement."
        },
        'Écriture/Inscription': {
          senses: ['écrire', 'dicter', 'art de l\'écriture', 'scribe', 'savant'],
          status: 'nul',
          proof_ctx: "Ces sens désignent l'acte d'écrire ou le métier de scribe — al-kitāb est ici un nom (texte), pas un verbe ou une fonction."
        },
        'Obligation/Décret': {
          senses: ['prescrire', 'rendre obligatoire', 'décret divin'],
          status: 'nul',
          proof_ctx: "Hors sujet dans ahl al-kitāb — le lien est avec l'Écriture comme texte, non avec un décret."
        },
        'Assemblage/Couture': { senses: ['rassembler', 'coudre', 'armée'], status: 'nul', proof_ctx: "Sens physiques premiers — hors sujet." }
      }
    }
  },

  // pos=7 : yuḍillūnakum (dll) — Form IV inaccompli 3MP + 2MP
  {
    word_key: 'dll', position: 7,
    sense_chosen: 'faire égarer',
    concept_chosen: 'Égarement/Déviation',
    reason: "yuḍillūnakum = Form IV (aḍalla = causatif de ḍalla) inaccompli 3MP + pronom 2MP. Form IV = faire s'écarter, faire s'égarer. Dans la structure law + inaccompli = souhait ardent. Sens « faire égarer » [Égarement/Déviation] retenu.",
    analysis_axes: {
      concepts: {
        'Égarement/Déviation': {
          senses: ["s'égarer", 'dévier', 'errer', 'perdre son chemin', 'faire égarer', 'être égaré', 'confusion', 'perplexité', 'feindre l\'égarement', 'demander l\'égarement', 'route qui égare', 'terre qui égare', "cause d'égarement"],
          status: 'retenu',
          proof_ctx: "yuḍillūnakum est Form IV (causative) de ḍalla — aḍalla = faire s'écarter quelqu'un de sa direction. L'objet direct est le pronom 2MP (vous). « Faire égarer » est le sens exact de cette forme causative, cohérent avec tous les VWA précédents pour dll Form IV."
        },
        'Disparition/Perte': {
          senses: ['disparaître', 'se perdre', 'périr', 'mourir', 'devenir poussière', 'être enterré', 'perdre quelque chose', 'état de perdition', 'futilité', 'vain'],
          status: 'nul',
          proof_ctx: "Ce sens désigne la perte définitive ou physique — non l'acte de faire dévier quelqu'un d'un chemin."
        },
        'Oubli/Enterrement': { senses: ['oublier', 'enterrer', 'eau souterraine'], status: 'nul', proof_ctx: "Hors sujet." }
      }
    }
  },

  // pos=9 : yuḍillūna (dll) — Form IV inaccompli 3MP, nié
  {
    word_key: 'dll', position: 9,
    sense_chosen: 'faire égarer',
    concept_chosen: 'Égarement/Déviation',
    reason: "yuḍillūna = même Form IV inaccompli 3MP, dans la structure wa-mā yuḍillūna illā anfusahum (mais ils n'égarent que leurs propres êtres). Même sens « faire égarer » qu'en pos=7, mais cette fois l'objet est anfusahum (eux-mêmes). Sens « faire égarer » [Égarement/Déviation] retenu.",
    analysis_axes: {
      concepts: {
        'Égarement/Déviation': {
          senses: ["s'égarer", 'dévier', 'faire égarer', 'confusion', 'cause d\'égarement'],
          status: 'retenu',
          proof_ctx: "yuḍillūna (pos=9) est la même Form IV causative que pos=7, mais dans une structure niée (wa-mā...illā). L'effet de l'égarement est restreint par illā (sauf) à anfusahum (leurs propres êtres). Le retournement est rhétorique : ce qu'ils voulaient faire aux autres (pos=7), ils ne le font qu'à eux-mêmes (pos=9)."
        },
        'Disparition/Perte': { senses: ['se perdre', 'perdre quelque chose'], status: 'nul', proof_ctx: "Hors sujet — la structure grammaticale Form IV causative exclut le sens de simple disparition." }
      }
    }
  },

  // pos=11 : anfusahum (nfs) — pluriel de nafs + 3MP
  {
    word_key: 'nfs', position: 11,
    sense_chosen: 'soi-même',
    concept_chosen: 'Âme/Être',
    reason: "anfusahum = pluriel de nafs + pronom suffixe 3MP. Objet direct de yuḍillūna (pos=9). anfus = les propres êtres de chacun. Sens « soi-même » [Âme/Être] retenu.",
    analysis_axes: {
      concepts: {
        'Âme/Être': {
          senses: ['âme', 'soi-même', 'personne', 'esprit', 'désir'],
          status: 'retenu',
          proof_ctx: "anfusahum = leurs propres êtres, leurs personnes propres. Dans wa-mā yuḍillūna illā anfusahum, anfus est l'objet de l'égarement — c'est leur propre être qui est égaré. « Soi-même » rend exactement ce sens réflexif : l'être dans son identité propre comme objet de l'action."
        },
        'Souffle/Vie': {
          senses: ['souffle', 'respirer', 'soulagement'],
          status: 'nul',
          proof_ctx: "Ces sens renvoient à la dimension vitale/respiratoire de nafs — hors sujet ici où anfus est l'objet grammatical d'un égarement."
        },
        'Corps/Anatomie': { senses: ['sang'], status: 'nul', proof_ctx: "Hors sujet." }
      }
    }
  },

  // pos=13 : yashʿurūna (sher) — Form I inaccompli 3MP, nié
  {
    word_key: 'sher', position: 13,
    sense_chosen: 'être conscient de',
    concept_chosen: 'Perception/Conscience',
    reason: "yashʿurūna = Form I de sh-ʿ-r, inaccompli 3MP, nié par wa-mā. La racine sh-ʿ-r désigne la perception intérieure spontanée, la conscience de quelque chose. wa-mā yashʿurūna = ils ne perçoivent pas (sans s'en apercevoir). Sens « être conscient de » [Perception/Conscience] retenu.",
    analysis_axes: {
      concepts: {
        'Perception/Conscience': {
          senses: ['sentir', 'savoir', 'être conscient de'],
          status: 'retenu',
          proof_ctx: "yashʿurūna (Form I inaccompli 3MP) désigne la perception intérieure — la conscience spontanée de ce qui se passe. La négation wa-mā yashʿurūna = ils n'ont pas conscience de leur propre égarement. « Être conscient de » rend cette absence de perception intérieure, cohérent avec V16 qui utilise le même sens dans un contexte similaire de non-conscience."
        },
        'Cheveux/Poils': { senses: ['cheveux', 'poils'], status: 'nul', proof_ctx: "Sens physique de la racine — hors sujet avec le verbe yashʿuru." },
        'Poésie/Expression': { senses: ['poésie', 'poète'], status: 'nul', proof_ctx: "Hors sujet." },
        'Rituel/Culte': { senses: ['rite sacré'], status: 'nul', proof_ctx: "Hors sujet — ce sens s'applique à shaʿāʾir (pluriel), non au verbe shaʿara." }
      }
    }
  }
];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V69 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── ÉTAPE 2 — Enrichissement twf ───────────────────────
  console.log('\n═══ ÉTAPE 2 — Enrichissement racines ═══');

  const { count: twfCount } = await db.from('word_meanings')
    .select('id', { count: 'exact', head: true }).eq('analysis_id', 790);
  console.log('twf (aid=790) : ' + twfCount + ' sens actuels ' + (twfCount >= 6 ? '[OK]' : '[SUSPECT → enrichissement]'));

  if (twfCount < 6) {
    const { count: twfGroupeExists } = await db.from('word_meanings')
      .select('id', { count: 'exact', head: true })
      .eq('analysis_id', 790).eq('sense', 'groupe');
    if (twfGroupeExists === 0) {
      const { error: twfErr } = await db.from('word_meanings').insert(TWF_NEW_SENSES);
      if (twfErr) throw twfErr;
      console.log('  → twf enrichi : +' + TWF_NEW_SENSES.length + ' sens (6 concepts)');
    } else {
      console.log('  → twf déjà enrichi, SKIP');
    }
  }

  // Vérification finale richesse
  const roots = [
    { aid: 703,  key: 'wdd',  name: 'waddatu' },
    { aid: 790,  key: 'twf',  name: 'ṭāʾifatun' },
    { aid: 736,  key: 'ahl',  name: 'ahli' },
    { aid: 275,  key: 'ktb',  name: 'al-kitāb' },
    { aid: 268,  key: 'dll',  name: 'yuḍillū' },
    { aid: 298,  key: 'nfs',  name: 'anfusahum' },
    { aid: 842,  key: 'sher', name: 'yashʿurū' }
  ];
  for (const r of roots) {
    const { count: n } = await db.from('word_meanings')
      .select('id', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log('  ' + r.key + ' (aid=' + r.aid + ', ' + r.name + ') : ' + n + ' sens ' + (n >= 5 ? '[OK]' : '[<5 ATTN]'));
  }

  // ─── word_daily ──────────────────────────────────────────
  console.log('\n═══ word_daily ═══');
  const { count: twfDailyCount } = await db.from('word_daily')
    .select('id', { count: 'exact', head: true }).eq('analysis_id', 790);
  if (twfDailyCount === 0) {
    const { error: twfDailyErr } = await db.from('word_daily').insert(TWF_DAILY);
    if (twfDailyErr) throw twfDailyErr;
    console.log('  twf : +3 phrases insérées');
  } else {
    console.log('  twf : ' + twfDailyCount + ' phrases existantes → SKIP');
  }
  // Vérification autres racines
  for (const r of [{ aid: 703, key: 'wdd' }, { aid: 736, key: 'ahl' }, { aid: 275, key: 'ktb' },
                   { aid: 268, key: 'dll' }, { aid: 298, key: 'nfs' }, { aid: 842, key: 'sher' }]) {
    const { count: n } = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log('  ' + r.key + ' : ' + n + ' phrases → ' + (n > 0 ? 'SKIP' : 'ATTN'));
  }

  // ─── ÉTAPES 1 & 4 — verse_analyses ─────────────────────
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses UPDATE ═══');
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
  console.log('  UPDATE va_id=' + VA_ID + ' OK');

  // ─── ÉTAPE 3 — VWA ──────────────────────────────────────
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses')
    .select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('  Clean: ' + existingVwa.length + ' VWA supprimés.');
  }

  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: {
      ...v.analysis_axes,
      concept_chosen: v.concept_chosen,
      sense_chosen: v.sense_chosen
    }
  }));

  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');
  vwaRows.forEach(v => {
    const orig = VWA_ROWS.find(r => r.position === v.position && r.word_key === v.word_key);
    console.log('    pos=' + v.position + ' ' + v.word_key + ' → « ' + v.sense_chosen + ' » [' + orig.concept_chosen + ']');
  });

  // ─── LOGS ────────────────────────────────────────────────
  console.log('\n══════════════════════════════════════════════════════');
  console.log('VERSET 3:69 — TERMINÉ');
  console.log('  waddatu (wdd)   → Souhait/Désir       → "souhaitent ardemment"');
  console.log('  ṭāʾifatun (twf) → Groupe/Faction      → "une faction"');
  console.log('  ahli (ahl)      → Famille/Communauté  → "les gens de"');
  console.log('  al-kitābi (ktb) → Livre/Écrit         → "l\'Écriture"');
  console.log('  yuḍillūnakum (dll) Form IV → Égarement/Déviation → "vous égarer"');
  console.log('  yuḍillūna (dll) Form IV → Égarement/Déviation → "n\'égarent"');
  console.log('  anfusahum (nfs) → Âme/Être            → "eux-mêmes"');
  console.log('  yashʿurūna (sher) → Perception/Conscience → "s\'en apercevoir"');
  console.log('  Traduction : "Une faction des gens de l\'Écriture souhaitent ardemment vous égarer — mais ils n\'égarent qu\'eux-mêmes, sans s\'en apercevoir."');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V69 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
