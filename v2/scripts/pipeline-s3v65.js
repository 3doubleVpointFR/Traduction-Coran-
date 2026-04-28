// Pipeline S3:V65 — verse_id=358 (va_id=715)
// "O gens du Livre, pourquoi argumentez-vous au sujet d'Abraham..."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 358;
const VA_ID = 715;

// ─────────────────────────────────────────────────────────────
// SEGMENTS_STEP1 — pos=13 word_key corrigé 'bed' → 'baed'
// ─────────────────────────────────────────────────────────────
const SEGMENTS_STEP1 = [
  { pos: 'nom', phon: 'أَهْلَ', root: 'ا ه ل', type: 'important', arabic: 'يَٰٓأَهْلَ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'أَهْلَ', position: 1, word_key: 'ahl', is_particle: false },
  { pos: 'nom', phon: 'كِتَٰبِ', root: 'ك ت ب', type: 'important', arabic: 'ٱلْكِتَٰبِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, definite: true, phonetic: 'كِتَٰبِ', position: 2, word_key: 'ktb', is_particle: false },
  { phon: 'مَ', type: 'particle', arabic: 'لِمَ', phonetic: 'مَ', position: 3, is_particle: true, prefix_particle: 'li' },
  { pos: 'verbe', phon: 'تُحَآجُّ', root: 'ح ج ج', type: 'important', tense: 'inaccompli', arabic: 'تُحَآجُّونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', suffix_pronoun: '2MP' }, phonetic: 'تُحَآجُّ', position: 4, word_key: 'hjj', verb_form: 'III', is_particle: false, suffix_pronoun: '2MP' },
  { phon: 'فِYٓ', type: 'particle', arabic: 'فِYٓ', phonetic: 'فِYٓ', position: 5, is_particle: true },
  { pos: 'nom', phon: 'إِبْرَٰهِيمَ', type: 'important', arabic: 'إِبْرَٰهِيمَ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'إِبْرَٰهِيمَ', position: 6, is_particle: false },
  { phon: 'مَآ', type: 'particle', arabic: 'وَمَآ', phonetic: 'مَآ', position: 7, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'أُنزِلَتِ', root: 'ن ز ل', type: 'important', tense: 'accompli', voice: 'passif', arabic: 'أُنزِلَتِ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', voice: 'passif', person: '3ème' }, phonetic: 'أُنزِلَتِ', position: 8, word_key: 'nzl', verb_form: 'IV', is_particle: false, preceded_by_negation: true },
  { pos: 'nom', phon: 'تَّوْرَYٰةُ', type: 'important', arabic: 'ٱلتَّوْرَYٰةُ', grammar: { pos: 'nom' }, definite: true, phonetic: 'تَّوْرَYٰةُ', position: 9, is_particle: false },
  { pos: 'nom', phon: 'إِنجِيلُ', type: 'important', arabic: 'وَٱلْإِنجِيلُ', grammar: { pos: 'nom' }, definite: true, phonetic: 'إِنجِيلُ', position: 10, is_particle: false, prefix_particle: 'wa' },
  { phon: 'إِلَّا', type: 'particle', arabic: 'إِلَّا', phonetic: 'إِلَّا', position: 11, is_particle: true },
  { phon: 'مِن۞', type: 'particle', arabic: 'مِن۞', phonetic: 'مِن۞', position: 12, is_particle: true },
  { pos: 'nom', phon: 'بَعْدِ', root: 'ب ع د', type: 'important', arabic: 'بَعْدِهِ.ٓ', grammar: { pos: 'nom', suffix_pronoun: '3MS' }, phonetic: 'بَعْدِ', position: 13, word_key: 'baed', is_particle: false, suffix_pronoun: '3MS' },
  { phon: 'لَا', type: 'particle', arabic: 'أَفَلَا', phonetic: 'لَا', position: 14, is_particle: true, prefix_particle: 'fa' },
  { pos: 'verbe', phon: 'تَعْقِلُ', root: 'ع ق ل', type: 'important', tense: 'inaccompli', arabic: 'تَعْقِلُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', suffix_pronoun: '2MP' }, phonetic: 'تَعْقِلُ', position: 15, word_key: 'eql', is_particle: false, suffix_pronoun: '2MP', preceded_by_negation: true }
];

// ─────────────────────────────────────────────────────────────
// TRADUCTION
// ─────────────────────────────────────────────────────────────
const FULL_TRANSLATION_HAMIDULLAH = `O gens du Livre ! Pourquoi disputez-vous au sujet d'Abraham, alors que la Tora et l'Évangile n'ont été révélés qu'après lui ? Ne raisonnez-vous donc pas ?`;

const TRANSLATION_ARAB = `yā ahla l-kitābi, li-mā tuḥājjūna fī ibrāhīma, wa-mā unzilat al-tawrātu wa-l-injīlu illā min baʿdihi, a-fa-lā taʿqilūna`;

const TRANSLATION_MEDITATIONAL = `Ce verset pose un argument historique irréfutable : Abraham précède la Torah et l'Évangile. Revendiquer Abraham comme figure fondatrice d'une tradition qui n'existait pas encore de son vivant constitue un anachronisme. L'appel à la raison — a-fa-lā taʿqilūna — souligne que cet argument est accessible à toute intelligence honnête : si les Écritures n'ont été envoyées qu'après Abraham, il ne peut être rangé dans aucune des traditions qui s'en réclament.`;

const TRANSLATION_EXPLANATION = `Notre traduction : « O gens du Livre, pourquoi argumentez-vous au sujet d'Abraham, alors que la Tora et l'Évangile n'ont été envoyées qu'après lui ? N'exercez-vous donc pas votre raison ? »

§DEMARCHE§

Ce verset (S3:V65) s'inscrit dans le dialogue avec les Gens du Livre. Après la déclaration du verset précédent (V64) posant les bases d'un terrain commun, V65 formule un argument historique décisif : Abraham précède la Torah et l'Évangile, donc aucune tradition issue de ces Écritures ne peut le revendiquer comme figure fondatrice. Les mots-clés sont : ahl (gens de), ktb (Livre), hjj (argumenter), nzl (envoyer d'en haut), baed (après), eql (raisonner).

**ya ahla** (O gens de) est un vocatif : ya + nom au cas accusatif (ahla). La racine a-h-l désigne le foyer et la famille, puis par extension toute communauté partageant un patrimoine commun. Dans la construction état construit ya ahla l-kitāb, le sens est « les gens qui appartiennent au Livre ». On traduit par « gens du ».

**l-kitābi** (Livre) est un nom masculin singulier défini au génitif, complément de nom de ahl. La racine k-t-b signifie écrire, inscrire. al-kitāb avec l'article défini désigne le Livre par excellence — la révélation écrite. Le contexte (Torah et Évangile nommés ensuite) confirme qu'il s'agit des Écritures révélées. On traduit par « Livre ».

**tuḥājjūna** (argumentez-vous) est un verbe Form III inaccompli 2ème personne masculin pluriel (2MP). La Form III de la racine h-j-j exprime l'argumentation mutuelle et adversariale : chaque partie présente des ḥujaj (arguments, preuves) contre l'autre. Le sens premier est la preuve, l'argument décisif. La Form III ici désigne une joute argumentaire réciproque. On traduit par « argumentez-vous ».

**unzilat** (ont été envoyées) est un verbe Form IV passif accompli 3ème personne féminin singulier (3FS), s'accordant avec al-tawrāt (féminin). La Form IV anzala est le causatif de descendre : faire descendre d'en-haut. Le passif masque l'agent (Dieu). tanzīl est le terme technique coranique pour la descente verticale de la révélation. On traduit par « ont été envoyées ».

**baʿdihi** (après lui) est un nom génitif de la racine b-ʿ-d, suivi du pronom suffixe 3ème personne masculin singulier (hi = lui, renvoyant à ibrāhīm). La locution min baʿdihi signifie temporellement « après lui ». La racine b-ʿ-d exprime l'éloignement spatial et la postériorité temporelle. On traduit par « après lui ».

**taʿqilūna** (exercez-vous votre raison) est un verbe Form I inaccompli 2MP précédé de la négation lā et de la double particule a-fa (interrogatif + consécutif). La racine ʿ-q-l désigne d'abord le ʿiqāl (corde pour attacher les chameaux), puis par extension la faculté qui attache et retient la pensée : la raison. On traduit par « exercez-vous votre raison ».

§JUSTIFICATION§

**gens du** — Le sens « gens de » de la racine ahl dans la construction état construit rend le mieux ya ahla l-kitābi : une appartenance communautaire au Livre révélé. « Peuple du Livre » serait trop chargé politiquement. « Gens du Livre » est sobre et exact. L'alternative « famille » est écartée car elle désigne une parenté de sang, non une communauté spirituelle.

**argumentez-vous** — La Form III tuḥājjūna est décisive : elle n'est pas la Form I « vous affirmez » mais la forme de confrontation mutuelle. La racine h-j-j renvoie à ḥujja (argument, preuve, raison déterminante). « Disputez-vous » (Hamidullah) efface cette dimension intellectuelle — la dispute peut être émotionnelle, alors que ḥājja exprime la joute d'arguments rationnels. « Argumentez-vous » rend mieux la Form III.

**ont été envoyées** — unzilat Form IV passif : le mouvement de descente verticale (tanzīl) est inscrit dans la forme. « Révélées » (Hamidullah) est trop général : la révélation peut se faire de multiples façons. La Form IV de nzl insiste sur la descente d'en-haut — de Dieu vers la terre. « Envoyées » rend cette dynamique verticale. De plus, la 3FS unzilat s'accorde avec al-tawrāt (féminin) : on traduit au féminin pluriel « envoyées ».

**après lui** — baʿdihi avec min : temporellement après Abraham. La Tora et l'Évangile n'ont été envoyées qu'après Abraham — argument chronologique irréfutable. Le pronom « lui » renvoie à ibrāhīm (masculin singulier). Pas d'alternative.

**exercez-vous votre raison** — taʿqilūna Form I. La double particule a-fa-lā crée une question rhétorique avec une nuance consécutive (fa = alors donc). « N'exercez-vous donc pas votre raison ? » rend mieux a-fa-lā que le simple « ne raisonnez-vous pas ? ». L'alternative « n'avez-vous pas de raison ? » (Hamidullah) est nominale et efface l'aspect verbal : il ne s'agit pas de posséder ou non la raison, mais de l'exercer.

§CRITIQUE§

**argumentez-vous vs disputez-vous** : Hamidullah traduit tuḥājjūna par « disputez-vous ». Ce choix rend l'aspect conflictuel mais efface la dimension intellectuelle de la racine h-j-j — ḥujja = argument, preuve, raison décisive. La Form III exprime la confrontation d'arguments structurés, pas une querelle émotionnelle. Notre traduction « argumentez-vous » rend mieux cette joute rationnelle réciproque.

**ont été envoyées vs n'ont été révélés** : Hamidullah traduit unzilat par « n'ont été révélés » avec deux différences. D'abord, le sémantisme : « révélés » est général alors qu'unzilat (Form IV de nzl) inscrit le mouvement de descente verticale (tanzīl) — d'en-haut vers la terre. Ensuite, la grammaire : unzilat est 3ème personne féminin singulier, s'accordant avec al-tawrāt (féminin). En français, cet accord grammatical donne « ont été envoyées » au féminin, alors qu'Hamidullah dit « révélés » au masculin. La précision grammaticale change le rendu.`;

// ─────────────────────────────────────────────────────────────
// SEGMENTS (affichage)
// ─────────────────────────────────────────────────────────────
const SEGMENTS = [
  { position: 1,  ar: 'يَٰٓأَهْلَ',       phon: 'yā ahla',      fr: 'O gens du',              word_key: 'ahl',  is_particle: false },
  { position: 2,  ar: 'ٱلْكِتَٰبِ',       phon: 'l-kitābi',     fr: 'Livre',                  word_key: 'ktb',  is_particle: false },
  { position: 3,  ar: 'لِمَ',             phon: 'li-mā',         fr: 'pourquoi',               word_key: null,   is_particle: true  },
  { position: 4,  ar: 'تُحَآجُّونَ',      phon: 'tuḥājjūna',    fr: 'argumentez-vous',        word_key: 'hjj',  is_particle: false },
  { position: 5,  ar: 'فِي',              phon: 'fī',            fr: 'au sujet de',            word_key: null,   is_particle: true  },
  { position: 6,  ar: 'إِبْرَٰهِيمَ',    phon: 'ibrāhīma',     fr: 'Abraham',                word_key: null,   is_particle: false },
  { position: 7,  ar: 'وَمَا',            phon: 'wa-mā',         fr: 'alors que... ne',        word_key: null,   is_particle: true  },
  { position: 8,  ar: 'أُنزِلَتِ',        phon: 'unzilat',       fr: 'ont été envoyées',       word_key: 'nzl',  is_particle: false },
  { position: 9,  ar: 'ٱلتَّوْرَاةُ',    phon: 'l-tawrātu',    fr: 'la Tora',                word_key: null,   is_particle: false },
  { position: 10, ar: 'وَٱلْإِنجِيلُ',   phon: 'wa-l-injīlu',  fr: "et l'Évangile",          word_key: null,   is_particle: false },
  { position: 11, ar: 'إِلَّا',           phon: 'illā',          fr: "qu'",                    word_key: null,   is_particle: true  },
  { position: 12, ar: 'مِن',              phon: 'min',           fr: '',                       word_key: null,   is_particle: true  },
  { position: 13, ar: 'بَعْدِهِ',         phon: 'baʿdihi',       fr: 'après lui',              word_key: 'baed', is_particle: false },
  { position: 14, ar: 'أَفَلَا',          phon: 'a-fa-lā',       fr: "N'exercez-vous donc pas", word_key: null,  is_particle: true  },
  { position: 15, ar: 'تَعْقِلُونَ',      phon: 'taʿqilūna',    fr: 'votre raison ?',         word_key: 'eql',  is_particle: false }
];

// ─────────────────────────────────────────────────────────────
// VWA
// ─────────────────────────────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: 'ahl',
    position: 1,
    sense_chosen: 'gens de',
    concept_chosen: 'Famille/Communauté',
    reason: 'Ya ahla l-kitāb : vocatif + état construit. ahl = la communauté qui appartient au Livre révélé. Sens "gens de" (appartenance communautaire) retenu vs "famille" (parenté de sang). Contexte : interpellation des peuples du Livre (Juifs et Chrétiens).',
    analysis_axes: {
      axe1_forme: 'nom masculin pluriel état construit vocatif (ahla), accusatif après ya',
      axe2_voisins: 'l-kitābi (génitif) complète ahl : ahl al-kitāb = gens du Livre révélé',
      axe3_context: "interpellation directe des communautés juive et chrétienne à propos d'Abraham",
      axe4_choix: 'sens "gens de" [Famille/Communauté] retenu ; "famille" (parenté biologique) écarté',
      axe5_conclusion: 'gens du'
    }
  },
  {
    word_key: 'ktb',
    position: 2,
    sense_chosen: 'livre',
    concept_chosen: 'Livre/Écrit',
    reason: "al-kitāb défini = le Livre par excellence. Racine k-t-b = écrire. La Torah et l'Évangile nommés au v.65 confirment qu'il s'agit des Écritures révélées. Sens \"livre\" [Livre/Écrit] retenu.",
    analysis_axes: {
      axe1_forme: 'nom masculin singulier défini génitif (al-kitābi), complément de nom de ahl',
      axe2_voisins: 'ahl : état construit — le Livre est l\'élément définitoire de la communauté',
      axe3_context: 'Torah et Évangile nommés au même verset — al-kitāb les désigne collectivement',
      axe4_choix: 'sens "livre" [Livre/Écrit] retenu ; "écrire" (action) écarté car al-kitāb est ici nominal',
      axe5_conclusion: 'Livre'
    }
  },
  {
    word_key: 'hjj',
    position: 4,
    sense_chosen: 'argumenter',
    concept_chosen: 'Argumentation/Dispute',
    reason: "tuḥājjūna = Form III inaccompli 2MP de h-j-j. Form III = action mutuelle réciproque : les parties s'affrontent avec des arguments (ḥujaj). Sens \"argumenter\" [Argumentation/Dispute] retenu pour rendre la dimension intellectuelle de la joute argumentaire réciproque.",
    analysis_axes: {
      axe1_forme: 'verbe Form III inaccompli 2ème personne masculin pluriel (2MP) : tuḥājjūna',
      axe2_voisins: "fī ibrāhīma : l'argumentation porte sur Abraham — son appartenance religieuse est le sujet",
      axe3_context: 'Juifs et Chrétiens revendiquaient Abraham chacun pour leur tradition ; le verset réfute cela',
      axe4_choix: 'sens "argumenter" [Argumentation/Dispute] retenu ; Form III exprime la réciprocité de la joute',
      axe5_conclusion: 'argumentez-vous'
    }
  },
  {
    word_key: 'nzl',
    position: 8,
    sense_chosen: 'faire descendre',
    concept_chosen: 'Descente/Révélation',
    reason: "unzilat = Form IV passif accompli 3FS de n-z-l. Form IV anzala = causatif : faire descendre. Passif : l'agent (Dieu) est sous-entendu. 3FS s'accorde avec al-tawrāt (féminin). Le terme technique tanzīl désigne la descente verticale de la révélation. Sens \"faire descendre\" retenu.",
    analysis_axes: {
      axe1_forme: 'verbe Form IV passif accompli 3ème personne féminin singulier (3FS) : unzilat',
      axe2_voisins: "précédé de wa-mā (négation) + illā (restriction) : n'ont été envoyées qu'après lui",
      axe3_context: 'sujet : al-tawrāt wa-l-injīl (2 sujets, accord avec le premier, féminin)',
      axe4_choix: 'sens "faire descendre" [Descente/Révélation] retenu ; Form IV passive exprime la descente divine',
      axe5_conclusion: 'ont été envoyées'
    }
  },
  {
    word_key: 'baed',
    position: 13,
    sense_chosen: 'après',
    concept_chosen: 'Postériorité',
    reason: "baʿdihi = nom génitif de b-ʿ-d + pronom 3MS (hi = lui = Abraham). min baʿdihi = temporellement après lui. Argument central du verset : la Torah et l'Évangile sont postérieures à Abraham. Sens \"après\" [Postériorité] retenu.",
    analysis_axes: {
      axe1_forme: 'nom génitif de la racine b-ʿ-d + pronom suffixe 3MS (hi) ; précédé de min (préposition)',
      axe2_voisins: "illā min baʿdihi = exception restrictive : seulement après lui — structure logique centrale",
      axe3_context: "postériorité temporelle d'Abraham par rapport à la révélation de la Torah et de l'Évangile",
      axe4_choix: 'sens "après" [Postériorité] retenu ; "être loin" (spatial) écarté — contexte purement temporel',
      axe5_conclusion: 'après lui'
    }
  },
  {
    word_key: 'eql',
    position: 15,
    sense_chosen: 'comprendre',
    concept_chosen: 'Raison/Intelligence',
    reason: "taʿqilūna = Form I inaccompli 2MP de ʿ-q-l précédé de a-fa-lā. La racine exprime la faculté de raisonner. Le verbe à l'inaccompli = exercer activement sa raison. Double particule a-fa-lā = interrogatif + consécutif + négation. Sens \"comprendre\" [Raison/Intelligence] retenu pour le verbe actif.",
    analysis_axes: {
      axe1_forme: 'verbe Form I inaccompli 2MP (taʿqilūna) précédé de a-fa-lā (interrogatif + fa + négation)',
      axe2_voisins: "clôture rhétorique du verset : après l'argument rationnel (postériorité d'Abraham), appel à la raison",
      axe3_context: "question rhétorique de reproche : l'argument est évident, pourquoi ne pas le voir ?",
      axe4_choix: 'sens "comprendre" [Raison/Intelligence] retenu ; verbe actif à l\'inaccompli = exercice de la faculté',
      axe5_conclusion: 'exercez-vous votre raison'
    }
  }
];

// ─────────────────────────────────────────────────────────────
// PIPELINE
// ─────────────────────────────────────────────────────────────
async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V65 (verse_id=' + VERSE_ID + ', va_id=' + VA_ID + ') ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ═══ ÉTAPE 2 — Vérification richesse racines ═══
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { aid: 736, key: 'ahl',  name: 'ahl' },
    { aid: 275, key: 'ktb',  name: 'kitāb' },
    { aid: 637, key: 'hjj',  name: 'ḥājja' },
    { aid: 289, key: 'nzl',  name: 'nazzala' },
    { aid: 926, key: 'baed', name: 'baʿd' },
    { aid: 513, key: 'eql',  name: 'ʿaqala' }
  ];
  for (const r of rootsCheck) {
    const { data: m } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = m ? m.length : 0;
    console.log('  aid=' + r.aid + ' (' + r.key + '/' + r.name + ') : ' + n + ' sens ' + (n >= 6 ? '[OK]' : '[<6 SUSPECT → ENRICHIR]'));
  }

  // ═══ ENRICHISSEMENT baed (aid=926, 5 sens → 6) ═══
  console.log('\n═══ ENRICHISSEMENT baed (aid=926) ═══');
  const { data: baedSenses } = await db.from('word_meanings').select('id,sense,display_order').eq('analysis_id', 926).order('display_order');
  const baedCount = baedSenses ? baedSenses.length : 0;
  console.log('  Actuel : ' + baedCount + ' sens');

  if (baedCount < 6) {
    const maxOrder = Math.max(...(baedSenses || []).map(s => s.display_order), 0);
    const newSense = {
      analysis_id: 926,
      sense: "s'éloigner",
      concept: 'Éloignement/Distance',
      status: 'nul',
      display_order: maxOrder + 1,
      meaning_type: 'etymology',
      description: "Form V tabaʿʿada : s'éloigner volontairement, se tenir à l'écart. Le Lane's donne tabaʿʿada : « il s'est éloigné, il s'est tenu éloigné de ». Dérivé de la racine b-ʿ-d, cette forme V exprime le mouvement actif d'éloignement, par opposition à l'état passif (baʿuda = être loin).",
      proof_ctx: "Le Lane's (bEd, Form V) donne tabaʿʿada : to go far away, to keep away from, to remove oneself to a distance. C'est la forme réfléchie de l'éloignement — l'action de s'écarter soi-même. Distinct de baʿuda (Form I = état passif) et de abʿada (Form IV = action transitive : éloigner quelqu'un)."
    };
    const { error: enErr } = await db.from('word_meanings').insert(newSense);
    if (enErr) { console.error('  Erreur enrichissement baed:', enErr.message); }
    else { console.log("  Ajouté : s'éloigner [Éloignement/Distance] → baed passe à " + (baedCount + 1) + ' sens'); }
  } else {
    console.log('  Déjà ≥ 6 sens → SKIP');
  }

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
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
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

  // ═══ ÉTAPE 5 — word_daily (SKIP si déjà présent) ═══
  console.log('\n═══ ÉTAPE 5 — word_daily (vérification) ═══');
  const dailyAids = [
    { aid: 736, key: 'ahl' },
    { aid: 275, key: 'ktb' },
    { aid: 637, key: 'hjj' },
    { aid: 289, key: 'nzl' },
    { aid: 926, key: 'baed' },
    { aid: 513, key: 'eql' }
  ];
  for (const { aid, key } of dailyAids) {
    const { data: dly } = await db.from('word_daily').select('id').eq('analysis_id', aid);
    const n = dly ? dly.length : 0;
    console.log('  ' + key + ' (aid=' + aid + ') : ' + n + ' phrases ' + (n > 0 ? '[SKIP]' : '[VIDE]'));
  }

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V65 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
