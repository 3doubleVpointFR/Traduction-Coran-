// Pipeline S3:V67 — verse_id=360
// "Abraham n'était pas Juif, ni Chrétien..."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 360;
const SURAH = 3, VERSE = 67;
const VA_ID = 720;

// ═══════════════════════════════════════════════════════
// SEGMENTS_STEP1 (copié du DB + word_key='shrk' ajouté pos=14)
// ═══════════════════════════════════════════════════════
const SEGMENTS_STEP1 = [
  { phon: 'مَا', type: 'particle', arabic: 'مَا', phonetic: 'مَا', position: 1, is_particle: true },
  { pos: 'verbe', phon: 'كَانَ', root: 'ك و ن', type: 'important', tense: 'accompli', arabic: 'كَانَ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème' }, phonetic: 'كَانَ', position: 2, word_key: 'kwn', is_particle: false, preceded_by_negation: true },
  { pos: 'nom', phon: 'إِبْرَٰهِيمُ', type: 'important', arabic: 'إِبْرَٰهِيمُ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'إِبْرَٰهِيمُ', position: 3, is_particle: false },
  { pos: 'nom', phon: 'يَهُودِيًّا', type: 'important', arabic: 'يَهُودِيًّا', gender: 'masculin', number: 'singulier', grammar: { pos: 'nom', gender: 'masculin', number: 'singulier' }, phonetic: 'يَهُودِيًّا', position: 4, is_particle: false },
  { phon: 'لَا', type: 'particle', arabic: 'وَلَا', phonetic: 'لَا', position: 5, is_particle: true, prefix_particle: 'wa' },
  { pos: 'nom', phon: 'نَصْرَانِيًّا', root: 'ن ص ر', type: 'important', arabic: 'نَصْرَانِيًّا', grammar: { pos: 'nom' }, phonetic: 'نَصْرَانِيًّا', position: 6, word_key: 'nsr', is_particle: false, preceded_by_negation: true },
  { phon: 'لَٰكِن', type: 'particle', arabic: 'وَلَٰكِن', phonetic: 'لَٰكِن', position: 7, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'كَانَ', root: 'ك و ن', type: 'important', tense: 'accompli', arabic: 'كَانَ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème' }, phonetic: 'كَانَ', position: 8, word_key: 'kwn', is_particle: false },
  { pos: 'nom', phon: 'حَنِيفًا', root: 'ح ن ف', type: 'important', arabic: 'حَنِيفًا', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'حَنِيفًا', position: 9, word_key: 'hnf', is_particle: false },
  { pos: 'adjectif', phon: 'مُّسْلِمًا', root: 'س ل م', type: 'important', voice: 'actif', arabic: 'مُّسْلِمًا', gender: 'masculin', number: 'singulier', grammar: { pos: 'adjectif', voice: 'actif', gender: 'masculin', number: 'singulier' }, phonetic: 'مُّسْلِمًا', position: 10, word_key: 'slm', verb_form: 'IV', is_particle: false },
  { phon: 'مَا', type: 'particle', arabic: 'وَمَا', phonetic: 'مَا', position: 11, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'كَانَ', root: 'ك و ن', type: 'important', tense: 'accompli', arabic: 'كَانَ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème' }, phonetic: 'كَانَ', position: 12, word_key: 'kwn', is_particle: false, preceded_by_negation: true },
  { phon: 'مِنَ', type: 'particle', arabic: 'مِنَ', phonetic: 'مِنَ', position: 13, is_particle: true },
  { pos: 'nom', phon: 'مُشْرِكِينَ', root: 'ش ر ك', type: 'important', voice: 'actif', arabic: 'ٱلْمُشْرِكِينَ', gender: 'masculin', number: 'pluriel', grammar: { pos: 'nom', voice: 'actif', gender: 'masculin', number: 'pluriel' }, definite: true, phonetic: 'مُشْرِكِينَ', position: 14, word_key: 'shrk', verb_form: 'IV', is_particle: false }
];

// ═══════════════════════════════════════════════════════
// SEGMENTS (affichage verset traduit)
// ═══════════════════════════════════════════════════════
const SEGMENTS = [
  { position: 1, arabic: 'مَا', phonetic: 'mā', translation: 'ne...pas', is_particle: true },
  { position: 2, arabic: 'كَانَ', phonetic: 'kāna', translation: 'était', word_key: 'kwn', is_particle: false },
  { position: 3, arabic: 'إِبْرَاهِيمُ', phonetic: 'Ibrāhīmu', translation: 'Abraham', is_particle: false },
  { position: 4, arabic: 'يَهُودِيًّا', phonetic: 'yahūdiyyan', translation: 'Juif', is_particle: false },
  { position: 5, arabic: 'وَلَا', phonetic: 'wa-lā', translation: 'ni', is_particle: true },
  { position: 6, arabic: 'نَصْرَانِيًّا', phonetic: 'naṣrāniyyan', translation: 'Chrétien', word_key: 'nsr', is_particle: false },
  { position: 7, arabic: 'وَلَٰكِن', phonetic: 'wa-lākin', translation: 'Mais', is_particle: true },
  { position: 8, arabic: 'كَانَ', phonetic: 'kāna', translation: 'était', word_key: 'kwn', is_particle: false },
  { position: 9, arabic: 'حَنِيفًا', phonetic: 'ḥanīfan', translation: 'tourné vers la vérité', word_key: 'hnf', is_particle: false },
  { position: 10, arabic: 'مُّسْلِمًا', phonetic: 'musliman', translation: 'se remettant [à Dieu]', word_key: 'slm', is_particle: false },
  { position: 11, arabic: 'وَمَا', phonetic: 'wa-mā', translation: 'et ne...pas', is_particle: true },
  { position: 12, arabic: 'كَانَ', phonetic: 'kāna', translation: 'était', word_key: 'kwn', is_particle: false },
  { position: 13, arabic: 'مِنَ', phonetic: 'min', translation: 'de', is_particle: true },
  { position: 14, arabic: 'ٱلْمُشْرِكِينَ', phonetic: 'al-mushrikīna', translation: 'ceux qui associent', word_key: 'shrk', is_particle: false }
];

// ═══════════════════════════════════════════════════════
// TRADUCTIONS
// ═══════════════════════════════════════════════════════
const FULL_TRANSLATION_HAMIDULLAH = 'Abraham n\'était ni Juif ni Chrétien. Mais il était de pure foi (hanif) et non des associateurs. (Hamidullah, S3:V67)';

const TRANSLATION_ARAB = 'mā kāna Ibrāhīmu yahūdiyyan wa-lā naṣrāniyyan wa-lākin kāna ḥanīfan musliman wa-mā kāna min al-mushrikīna';

const TRANSLATION_MEDITATIONAL = 'Abraham n\'appartenait à aucune communauté religieuse instituée de son temps. Sa foi était une orientation pure vers la vérité et une remise totale à Dieu. Il était libre de tout associationnisme.';

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Ce verset définit l'identité religieuse d'Abraham par opposition successive et affirmation double : non-juif, non-chrétien, mais tourné vers la vérité et se remettant à Dieu — loin de tout associationnisme.

**kāna** (était) est un verbe de la racine k-w-n, accompli 3ème personne masculin singulier. Il s'agit d'un verbe nāqis (incomplet) qui fonctionne comme copule et requiert un attribut (khabar). Le sens premier est « être ». Aux deux premières occurrences (niées par mā), il exprime l'état passé nié. À la troisième occurrence (après wa-lākin), il suit la conjonction d'opposition et exprime l'état affirmé. On traduit par « était ».

**naṣrāniyyan** (chrétien) est un nom adjectival de la racine n-ṣ-r, singulier masculin indéfini accusatif, attribut (khabar) de kāna sous-entendu. Il désigne le membre de la communauté des Naṣārā. Lane's confirme naṣrānī = « un Chrétien » (entry naSr). Précédé de wa-lā (ni), il forme la seconde négation de la série. On traduit par « Chrétien ».

**ḥanīfan** (tourné vers la vérité) est un adjectif de la racine ḥ-n-f, singulier masculin indéfini accusatif, premier attribut (khabar) du kāna affirmatif (wa-lākin). Le sens premier de ḥanīf est « s'incliner vers la vraie religion en se détournant du faux ». Lane's confirme : « s'incliner depuis toute fausse religion vers la vraie religion » (Mgh). On traduit par « tourné vers la vérité ».

**musliman** (se remettant) est un participe actif de la forme IV (aslama) de la racine s-l-m, singulier masculin indéfini accusatif, second attribut de kāna affirmatif (après wa-lākin). La forme IV aslama signifie « se remettre, s'en remettre à ». Le sens premier du participe est « celui qui se remet [à Dieu] ». On traduit par « se remettant [à Dieu] ».

**al-mushrikīna** (des associateurs) est le participe actif pluriel masculin défini génitif de la forme IV (ašraka) de la racine š-r-k. La forme IV ašraka signifie « associer [à Dieu] un partenaire ». al-mushrikūna désigne ceux qui réalisent cet acte. Précédé de mā kāna min (il n'était pas de), le verset nie explicitement qu'Abraham appartienne à ce groupe. On traduit par « des associateurs ».

§JUSTIFICATION§

**était** — Le sens retenu est « être (verbe incomplet) » de la racine k-w-n. Le mot « était » est choisi car kāna est le verbe nāqis (copule) par excellence, reliant un sujet à son attribut pour indiquer un état dans le passé. L'alternative « se trouva » est écartée car elle implique un événement ponctuel ou une localisation, alors que kāna exprime ici simplement la qualification d'un état antérieur.

**Chrétien** — Le sens retenu est « chrétien » de la racine n-ṣ-r. Le mot « Chrétien » est choisi car naṣrānī désigne spécifiquement le membre de la communauté naṣārā, avec une majuscule confessionnelle cohérente avec « Juif » au même verset. L'alternative « Nazaréen » est écartée car en français moderne ce terme désigne surtout Jésus de Nazareth, non la communauté chrétienne en général.

**tourné vers la vérité** — Le sens retenu est « s'incliner vers la vérité » de la racine ḥ-n-f. L'expression « tourné vers la vérité » est choisie car elle traduit le mouvement d'orientation intérieure que Lane's décrit (« s'incliner depuis toute fausse religion vers la vraie religion ») sans réduire ḥanīf à une étiquette confessionnelle figée. L'alternative « de pure foi » (Hamidullah) est écartée car elle nominalise l'adjectif actif en état statique, effaçant la dynamique d'inclination.

**se remettant** — Le sens retenu est « se remettre » de la racine s-l-m, forme IV. Le participe actif « se remettant [à Dieu] » est choisi car musliman est le participe actif en action de aslama (acte de remise volontaire de l'être à Dieu). L'alternative « soumis » est écartée car elle connote une contrainte extérieure. L'alternative « musulman » est écartée car elle est post-islamique et projette sur Abraham une identité confessionnelle institutionnelle anachronique.

**associateurs** — Le sens retenu est « associer » de la racine š-r-k, forme IV. Le mot « associateurs » est choisi car al-mushrikūna (Form IV ašraka) désigne précisément ceux qui réalisent l'acte d'associer un partenaire à Dieu. L'alternative « polythéistes » est écartée car c'est un terme académique d'histoire des religions qui occulte la dimension de l'acte (ašraka = rendre partenaire à Dieu).

§CRITIQUE§

**tourné vers la vérité vs "de pure foi (hanif)"** : Les traductions courantes (Hamidullah notamment) donnent « de pure foi (hanif) » ou laissent « hanif » sans traduction. Ce choix vient d'une conception de ḥanīf comme étiquette doctrinale figée désignant le monothéisme abrahamique. Notre traduction donne « tourné vers la vérité » car Lane's indique d'abord « inclining to a right state or tendency » — c'est un mouvement d'orientation, pas une identité statique. Différence structurelle : ḥanīfan est un adjectif actif (état en cours) que « de pure foi » nominalise en attribut figé, effaçant le sens dynamique d'inclination.

**se remettant [à Dieu] vs "musulman"** : Les traductions courantes (Hamidullah) donnent directement « musulman » pour musliman. Ce choix vient d'une lecture identitaire de la racine s-l-m, assimilant Abraham à la communauté islamique historique. Notre traduction donne « se remettant [à Dieu] » car musliman est le participe actif de aslama (Form IV), désignant l'acte de remise volontaire, antérieur à toute institutionnalisation. Différence structurelle : Hamidullah traite le participe comme un nom de religion fixe (« musulman »), notre traduction conserve sa valeur participiale active (« se remettant »), ce qui change la logique de la phrase : Abraham n'est pas désigné comme membre d'une religion, mais décrit dans une attitude intérieure.`;

// ═══════════════════════════════════════════════════════
// VWA
// ═══════════════════════════════════════════════════════
const VWA_ROWS = [
  {
    word_key: 'kwn',
    position: 2,
    sense_chosen: 'être (verbe incomplet)',
    concept_chosen: 'Être/Existence',
    reason: 'kāna = verbe nāqis (incomplet) 3MS accompli, associé à la négation mā (pos=1). Copule reliant le sujet Ibrāhīmu à l\'attribut yahūdiyyan. Sens "être (verbe incomplet)" [Être/Existence] retenu.',
    analysis_axes: {
      concepts: {
        'Être/Existence': {
          senses: ['être (verbe incomplet)', 'venir à l\'existence'],
          status: 'retenu',
          proof_ctx: 'kāna est ici un verbe nāqis reliant sujet (Ibrāhīmu) et attribut (yahūdiyyan). Précédé de mā (négation), il indique l\'état passé d\'Abraham. "Être (verbe incomplet)" est le sens copulatif exact — kāna comme simple lien prédicatif.'
        },
        'Humilité/Soumission': {
          senses: ['être humble soumis'],
          status: 'nul',
          proof_ctx: 'Hors sujet — kāna ici est une pure copule sans connotation d\'humilité.'
        },
        'Lieu/État': {
          senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'],
          status: 'nul',
          proof_ctx: 'Hors sujet — pas de connotation de lieu ou d\'état particulier ici, kāna est simplement copulatif.'
        }
      }
    }
  },
  {
    word_key: 'nsr',
    position: 6,
    sense_chosen: 'chrétien',
    concept_chosen: 'Chrétien/Nazaréen',
    reason: 'naṣrāniyyan = adjectif de n-ṣ-r, singulier masculin accusatif (khabar de kāna implicite). Précédé de wa-lā (ni). Lane\'s : naṣrānī = "a Christian". Sens "chrétien" [Chrétien/Nazaréen] retenu.',
    analysis_axes: {
      concepts: {
        'Secours/Victoire': {
          senses: ['secourir', 'aider', 'victoire', 'défendre'],
          status: 'nul',
          proof_ctx: 'Les sens du verbe naṣara (secourir, aider) ne s\'appliquent pas à la forme nominale naṣrāniyyan qui désigne une appartenance confessionnelle.'
        },
        'Alliance/Soutien': {
          senses: ['partisan'],
          status: 'nul',
          proof_ctx: 'Le sens de "partisan" (auxiliaire, allié) est historiquement lié à naṣr, mais naṣrāniyyan désigne ici spécifiquement l\'appartenance à la communauté des Naṣārā.'
        },
        'Chrétien/Nazaréen': {
          senses: ['chrétien', 'rendre chrétien', 'la religion chrétienne'],
          status: 'retenu',
          proof_ctx: 'naṣrāniyyan est la forme adjectivale désignant le membre des Naṣārā (Chrétiens). Lane\'s : naṣrānī = « un Chrétien » (entry naSr). Parallèle à yahūdiyyan (pos=4), naṣrāniyyan forme la seconde identité niée pour Abraham. Lane\'s atteste également naṣṣarahu = « Il l\'a rendu Chrétien » (Form II) et al-naṣrānīyya = « la religion des Chrétiens ».'
        }
      }
    }
  },
  {
    word_key: 'kwn',
    position: 8,
    sense_chosen: 'être (verbe incomplet)',
    concept_chosen: 'Être/Existence',
    reason: 'kāna = verbe nāqis 3MS accompli, après wa-lākin (mais). Copule affirmative reliant Ibrahim aux attributs ḥanīfan musliman. Sens "être (verbe incomplet)" [Être/Existence] retenu.',
    analysis_axes: {
      concepts: {
        'Être/Existence': {
          senses: ['être (verbe incomplet)', 'venir à l\'existence'],
          status: 'retenu',
          proof_ctx: 'kāna affirmatif (non nié) après wa-lākin. Relie Ibrāhīmu (sujet implicite) à ḥanīfan musliman (doubles attributs). Même sens copulatif qu\'en position 2, ici en mode affirmatif.'
        },
        'Humilité/Soumission': {
          senses: ['être humble soumis'],
          status: 'nul',
          proof_ctx: 'Hors sujet.'
        },
        'Lieu/État': {
          senses: ['lieu', 'état condition', 'devenir comme'],
          status: 'nul',
          proof_ctx: 'Hors sujet — kāna est ici simplement copulatif.'
        }
      }
    }
  },
  {
    word_key: 'hnf',
    position: 9,
    sense_chosen: 's\'incliner vers la vérité',
    concept_chosen: 'Inclinaison/Droiture',
    reason: 'ḥanīfan = adjectif de ḥ-n-f, singulier masculin accusatif, premier khabar de kāna affirmatif (wa-lākin). Lane\'s : ḥanīf = « s\'incliner depuis toute fausse religion vers la vraie religion » (Mgh). Sens "s\'incliner vers la vérité" [Inclinaison/Droiture] retenu.',
    analysis_axes: {
      concepts: {
        'Inclinaison/Droiture': {
          senses: ['s\'incliner vers la vérité', 'être monothéiste pur (hanif)', 'se détourner du faux', 'pencher vers la vraie religion', 'la loi d\'Abraham (ḥanīfiyya)'],
          status: 'retenu',
          proof_ctx: 'ḥanīfan est le premier khabar de kāna affirmatif (wa-lākin), attribut qualifiant l\'état d\'Abraham. Lane\'s : ḥanīf = « s\'incliner vers un état juste ou une bonne tendance » (Er-Rāghib) ; « s\'incliner depuis toute fausse religion vers la vraie religion » (Mgh). ḥanīfiyya = « la loi d\'Abraham » (Lane\'s). La racine ḥ-n-f exprime l\'inclination, le penchant vers la bonne direction. "S\'incliner vers la vérité" rend le sens dynamique de cette inclination.'
        },
        'Déviation/Courbure': {
          senses: ['pied bot', 'être tordu'],
          status: 'nul',
          proof_ctx: 'Ces sens physiques (pied bot, courbure) s\'appliquent à la forme ḥanaf (nom verbal), non à ḥanīf utilisé ici dans son acception spirituelle.'
        }
      }
    }
  },
  {
    word_key: 'slm',
    position: 10,
    sense_chosen: 'se remettre',
    concept_chosen: 'Remise/Reddition',
    reason: 'musliman = participe actif Form IV de aslama (s-l-m), singulier masculin accusatif, second khabar de kāna. ⚠️ Concept [Paix/Soumission] écarté car contient "islam" (post-islamique). Sens "se remettre" [Remise/Reddition] retenu.',
    analysis_axes: {
      concepts: {
        'Paix/Soumission': {
          senses: ['paix', 'soumission', 'islam', 'salut'],
          status: 'nul',
          proof_ctx: 'Le sens "islam" est post-islamique — projeter l\'islam comme religion institutionnelle sur Abraham est un anachronisme. Cette entrée est écartée pour éviter de réduire l\'acte de remise à une appartenance confessionnelle.'
        },
        'Intégrité/Santé': {
          senses: ['sain et sauf'],
          status: 'nul',
          proof_ctx: 'Sens de la forme I (salima = être sain et sauf). musliman est Form IV (aslama), cette branche sémantique ne s\'applique pas.'
        },
        'Remise/Reddition': {
          senses: ['se remettre', 'se rendre', 's\'en remettre', 'livrer'],
          status: 'retenu',
          proof_ctx: 'musliman est le participe actif de aslama (Form IV), signifiant "celui qui se remet [à Dieu]". Il qualifie l\'acte volontaire de remise de l\'être à Dieu. Coordonné avec ḥanīfan, il décrit l\'état spirituel intérieur d\'Abraham — non une appartenance confessionnelle.'
        },
        'Salutation': {
          senses: ['saluer'],
          status: 'nul',
          proof_ctx: 'Sens dérivé de salāmun (forme III) — hors contexte ici.'
        }
      }
    }
  },
  {
    word_key: 'kwn',
    position: 12,
    sense_chosen: 'être (verbe incomplet)',
    concept_chosen: 'Être/Existence',
    reason: 'kāna = verbe nāqis 3MS accompli, dans wa-mā kāna min al-mushrikīna. Copule niée reliant Ibrahim à la catégorie des mushrikīn (avec min). Sens "être (verbe incomplet)" [Être/Existence] retenu.',
    analysis_axes: {
      concepts: {
        'Être/Existence': {
          senses: ['être (verbe incomplet)', 'venir à l\'existence'],
          status: 'retenu',
          proof_ctx: 'kāna nié (wa-mā) relie Ibrahim à min al-mushrikīna. Structure : wa-mā kāna min al-mushrikīna = "et il n\'était pas d\'entre les associateurs". kāna est la copule indispensable de cette proposition relative niée.'
        },
        'Humilité/Soumission': { senses: ['être humble soumis'], status: 'nul', proof_ctx: 'Hors sujet.' },
        'Lieu/État': { senses: ['lieu', 'état condition'], status: 'nul', proof_ctx: 'Hors sujet.' }
      }
    }
  },
  {
    word_key: 'shrk',
    position: 14,
    sense_chosen: 'associer',
    concept_chosen: 'Association/Polythéisme',
    reason: 'al-mushrikīna = participe actif Form IV de ašraka (š-r-k), pluriel masculin défini génitif. Form IV ašraka = associer un partenaire à Dieu. al-mushrikūna = ceux qui associent (les associateurs). Précédé de mā kāna min — négation explicite d\'appartenance. Sens "associer" [Association/Polythéisme] retenu.',
    analysis_axes: {
      concepts: {
        'Association/Polythéisme': {
          senses: ['associer', 'polythéisme', 'partenaire'],
          status: 'retenu',
          proof_ctx: 'al-mushrikīna est le participe actif pluriel de ašraka (Form IV), désignant ceux qui associent des partenaires à Dieu. La structure mā kāna min al-mushrikīna nie explicitement qu\'Abraham appartienne à ce groupe. "Associer" est le sens actif exact de la forme verbale qui sous-tend le participe al-mushrikūna.'
        },
        'Partage/Copartenariat': {
          senses: ['partager', 'participer', 'être copartenaire', 'donner une part'],
          status: 'nul',
          proof_ctx: 'Le contexte coranique de al-mushrikūna est toujours religieux (associer à Dieu), non un partage profane ou commercial.'
        },
        'Enchevêtrement/Piège': {
          senses: ['enlacer', 'piège'],
          status: 'nul',
          proof_ctx: 'Sens physiques de la racine — hors sujet dans un contexte théologique.'
        },
        'Lanière': {
          senses: ['lanière de sandale'],
          status: 'nul',
          proof_ctx: 'Sens matériel — hors sujet.'
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════
// ENRICHISSEMENTS RACINES
// ═══════════════════════════════════════════════════════

// nsr (aid=537) : 5 sens → ajouter [Chrétien/Nazaréen]
const NSR_NEW_SENSES = [
  {
    analysis_id: 537,
    sense: 'chrétien',
    concept: 'Chrétien/Nazaréen',
    status: 'validated',
    meaning_type: 'secondary',
    proof_ref: 'Lane\'s nSr — naṣrānī',
    proof_phon: 'naṣrānī',
    proof_tr: 'a Christian',
    proof_ctx: 'Lane\'s : naṣrānī = "a Christian". Adjectif désignant le membre de la communauté des Naṣārā.',
    period: 'coranique'
  },
  {
    analysis_id: 537,
    sense: 'rendre chrétien',
    concept: 'Chrétien/Nazaréen',
    status: 'validated',
    meaning_type: 'secondary',
    proof_ref: 'Lane\'s nSr — naṣṣara (Form II)',
    proof_phon: 'naṣṣarahu',
    proof_tr: 'He made him a Christian',
    proof_ctx: 'Lane\'s : naṣṣarahu (Form II) = "He made him a Christian" (S, M, K).',
    period: 'coranique'
  },
  {
    analysis_id: 537,
    sense: 'la religion chrétienne',
    concept: 'Chrétien/Nazaréen',
    status: 'validated',
    meaning_type: 'secondary',
    proof_ref: 'Lane\'s nSr — al-naṣrānīyya',
    proof_phon: 'al-naṣrānīyya',
    proof_tr: 'The religion of the Christians',
    proof_ctx: 'Lane\'s : al-naṣrānīyya = "The religion of the naṣārā [or Christians]" (K, TA).',
    period: 'coranique'
  }
];

// hnf (aid=811) : 5 sens → ajouter à [Inclinaison/Droiture]
const HNF_NEW_SENSES = [
  {
    analysis_id: 811,
    sense: 'pencher vers la vraie religion',
    concept: 'Inclinaison/Droiture',
    status: 'validated',
    meaning_type: 'secondary',
    proof_ref: 'Lane\'s Hnf — ḥanīf (Mgh)',
    proof_phon: 'ḥanīf',
    proof_tr: 'inclining from any false religion to the true religion',
    proof_ctx: 'Lane\'s : ḥanīf = "inclining, from any false religion, to the true religion" (Mgh). Ce sens est la base de l\'usage coranique du terme.',
    period: 'coranique'
  },
  {
    analysis_id: 811,
    sense: 'la loi d\'Abraham (ḥanīfiyya)',
    concept: 'Inclinaison/Droiture',
    status: 'validated',
    meaning_type: 'secondary',
    proof_ref: 'Lane\'s Hnf — ḥanīfiyya',
    proof_phon: 'ḥanīfiyya',
    proof_tr: 'the law of Abraham',
    proof_ctx: 'Lane\'s : ḥanīfiyya = "the law of Abraham ; which is the religion of El-Islām ; also termed milla ḥanīfiyya" (TA). Désigne la voie spirituelle d\'Abraham.',
    period: 'coranique'
  }
];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V67 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── ÉTAPE 2 — Enrichissement racines ───────────────────
  console.log('\n═══ ÉTAPE 2 — Enrichissement racines ═══');

  // nsr : vérification + enrichissement
  const { count: nsrCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 537);
  console.log('nsr (aid=537) : ' + nsrCount + ' sens actuels');
  if (nsrCount < 8) {
    // Vérifier si [Chrétien/Nazaréen] existe déjà
    const { count: nsrChrCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true })
      .eq('analysis_id', 537).eq('concept', 'Chrétien/Nazaréen');
    if (nsrChrCount === 0) {
      const { error: nsrErr } = await db.from('word_meanings').insert(NSR_NEW_SENSES);
      if (nsrErr) throw nsrErr;
      console.log('  → nsr enrichi : +3 sens [Chrétien/Nazaréen]');
    } else {
      console.log('  → nsr [Chrétien/Nazaréen] déjà présent, SKIP');
    }
  } else {
    console.log('  → nsr déjà ≥8 sens, SKIP');
  }

  // hnf : vérification + enrichissement
  const { count: hnfCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 811);
  console.log('hnf (aid=811) : ' + hnfCount + ' sens actuels');
  if (hnfCount < 7) {
    const { count: hnfNewCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true })
      .eq('analysis_id', 811).eq('sense', 'pencher vers la vraie religion');
    if (hnfNewCount === 0) {
      const { error: hnfErr } = await db.from('word_meanings').insert(HNF_NEW_SENSES);
      if (hnfErr) throw hnfErr;
      console.log('  → hnf enrichi : +2 sens [Inclinaison/Droiture]');
    } else {
      console.log('  → hnf nouveaux sens déjà présents, SKIP');
    }
  } else {
    console.log('  → hnf déjà ≥7 sens, SKIP');
  }

  // Vérification finale
  const roots = [
    { aid: 2577, key: 'kwn' },
    { aid: 537,  key: 'nsr' },
    { aid: 811,  key: 'hnf' },
    { aid: 627,  key: 'slm' },
    { aid: 737,  key: 'shrk' }
  ];
  for (const r of roots) {
    const { count: n } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log('  aid=' + r.aid + ' (' + r.key + ') : ' + n + ' sens ' + (n >= 5 ? '[OK]' : '[<5 ATTN]'));
  }

  // ─── word_daily : SKIP tous (count=3 pour tous) ─────────
  console.log('\n═══ word_daily — SKIP (count=3 pour tous) ═══');

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
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
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
  vwaRows.forEach(v => console.log('    pos=' + v.position + ' ' + v.word_key + ' → ' + v.sense_chosen));

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V67 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
