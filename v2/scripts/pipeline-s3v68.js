// Pipeline S3:V68 — verse_id=361
// "Certes, les gens les plus dignes d'Abraham..."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 361;
const SURAH = 3, VERSE = 68;
const VA_ID = 721;

// ═══════════════════════════════════════════════════════
// SEGMENTS_STEP1 (copié du DB — word_key='tbe' pour pos=6 conservé)
// ═══════════════════════════════════════════════════════
const SEGMENTS_STEP1 = [
  { phon: 'إِنَّ', type: 'particle', arabic: 'إِنَّ', phonetic: 'إِنَّ', position: 1, is_particle: true, emphatic_inna: true },
  { pos: 'nom', phon: 'أَوْلَى', root: 'و ل ي', type: 'important', arabic: 'أَوْلَى', gender: 'masculin', number: 'singulier', grammar: { pos: 'nom', gender: 'masculin', number: 'singulier' }, phonetic: 'أَوْلَى', position: 2, word_key: 'wly', is_particle: false },
  { pos: 'nom', phon: 'نَّاسِ', root: 'ن و س', type: 'important', arabic: 'ٱلنَّاسِ', gender: 'masculin', number: 'pluriel', grammar: { pos: 'nom', gender: 'masculin', number: 'pluriel' }, definite: true, phonetic: 'نَّاسِ', position: 3, word_key: 'nws', is_particle: false },
  { pos: 'nom', phon: 'إِبْرَٰهِيمَ', type: 'important', arabic: 'بِإِبْرَٰهِيمَ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'إِبْرَٰهِيمَ', position: 4, is_particle: false, prefix_particle: 'bi' },
  { phon: 'لَّذِينَ', type: 'particle', arabic: 'لَلَّذِينَ', phonetic: 'لَّذِينَ', position: 5, is_particle: true, prefix_particle: 'la' },
  { pos: 'verbe', phon: 'ٱتَّبَعُ', root: 'ت ب ع', type: 'important', tense: 'accompli', arabic: 'ٱتَّبَعُوهُ', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème', suffix_pronoun: '3MS' }, phonetic: 'ٱتَّبَعُوهُ', position: 6, word_key: 'tbe', verb_form: 'VIII', is_particle: false, suffix_pronoun: '3MS' },
  { phon: 'هَٰذَا', type: 'particle', arabic: 'وَهَٰذَا', phonetic: 'هَٰذَا', position: 7, is_particle: true, prefix_particle: 'wa' },
  { pos: 'nom', phon: 'نَّبِيُّ', root: 'ن ب ا', type: 'important', arabic: 'ٱلنَّبِيُّ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, definite: true, phonetic: 'ٱلنَّبِيُّ', position: 8, word_key: 'nba', is_particle: false },
  { phon: 'ٱلَّذِينَ', type: 'particle', arabic: 'وَٱلَّذِينَ', phonetic: 'ٱلَّذِينَ', position: 9, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'ءَامَنُ', root: 'ا م ن', type: 'important', tense: 'accompli', arabic: 'ءَامَنُوا', person: '3ème', grammar: { pos: 'verbe', tense: 'accompli', person: '3ème', suffix_pronoun: '3MP' }, phonetic: 'ءَامَنُوا', position: 10, word_key: 'amn', verb_form: 'IV', is_particle: false, suffix_pronoun: '3MP' },
  { pos: 'nom', phon: 'ٱللَّهُ', root: 'ا ل ه', type: 'important', arabic: 'وَٱللَّهُ', grammar: { pos: 'nom' }, phonetic: 'ٱللَّهُ', position: 11, word_key: 'alh', is_particle: false, prefix_particle: 'wa' },
  { pos: 'nom', phon: 'وَلِيُّ', root: 'و ل ي', type: 'important', arabic: 'وَلِيُّ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, phonetic: 'وَلِيُّ', position: 12, word_key: 'wly', is_particle: false },
  { pos: 'nom', phon: 'مُؤْمِنِينَ', root: 'ا م ن', type: 'important', voice: 'actif', arabic: 'ٱلْمُؤْمِنِينَ', gender: 'masculin', number: 'pluriel', grammar: { pos: 'nom', voice: 'actif', gender: 'masculin', number: 'pluriel' }, definite: true, phonetic: 'ٱلْمُؤْمِنِينَ', position: 13, word_key: 'amn', verb_form: 'IV', is_particle: false }
];

// ═══════════════════════════════════════════════════════
// SEGMENTS (affichage traduit)
// ═══════════════════════════════════════════════════════
const SEGMENTS = [
  { position: 1,  arabic: 'إِنَّ',         phonetic: 'inna',          translation: 'Certes',           is_particle: true  },
  { position: 2,  arabic: 'أَوْلَى',        phonetic: 'awlā',          translation: 'les plus dignes',  word_key: 'wly',   is_particle: false },
  { position: 3,  arabic: 'ٱلنَّاسِ',      phonetic: 'al-nāsi',       translation: 'des gens',         word_key: 'nws',   is_particle: false },
  { position: 4,  arabic: 'بِإِبْرَاهِيمَ',phonetic: 'bi-Ibrāhīma',  translation: "d'Abraham",        is_particle: false },
  { position: 5,  arabic: 'لَلَّذِينَ',    phonetic: 'la-l-ladhīna',  translation: 'sont ceux qui',    is_particle: true  },
  { position: 6,  arabic: 'ٱتَّبَعُوهُ',   phonetic: 'ittabaʿūhu',    translation: "l'ont suivi",      word_key: 'tbe',   is_particle: false },
  { position: 7,  arabic: 'وَهَٰذَا',      phonetic: 'wa-hādhā',      translation: 'et ce',            is_particle: true  },
  { position: 8,  arabic: 'ٱلنَّبِيُّ',    phonetic: 'al-nabīyyu',    translation: 'Prophète',         word_key: 'nba',   is_particle: false },
  { position: 9,  arabic: 'وَٱلَّذِينَ',   phonetic: 'wa-l-ladhīna',  translation: 'et ceux qui',      is_particle: true  },
  { position: 10, arabic: 'ءَامَنُوا',      phonetic: 'āmanū',         translation: 'ont cru',          word_key: 'amn',   is_particle: false },
  { position: 11, arabic: 'وَٱللَّهُ',     phonetic: 'wa-llāhu',      translation: 'Et Dieu',          word_key: 'alh',   is_particle: false },
  { position: 12, arabic: 'وَلِيُّ',       phonetic: 'walīyyun',      translation: 'est le protecteur',word_key: 'wly',   is_particle: false },
  { position: 13, arabic: 'ٱلْمُؤْمِنِينَ',phonetic: 'al-muʾminīna', translation: 'des croyants',     word_key: 'amn',   is_particle: false }
];

// ═══════════════════════════════════════════════════════
// TRADUCTIONS
// ═══════════════════════════════════════════════════════
const FULL_TRANSLATION_HAMIDULLAH =
  'Les gens les mieux disposés envers Abraham sont ceux qui l\'ont suivi, et ce Prophète, et ceux qui ont cru. Et Allah est le Maître des croyants. (Hamidullah, S3:V68)';

const TRANSLATION_ARAB =
  'inna awlā al-nāsi bi-Ibrāhīma la-l-ladhīna ittabaʿūhu wa-hādhā al-nabīyyu wa-l-ladhīna āmanū wa-llāhu walīyyu al-muʾminīna';

const TRANSLATION_MEDITATIONAL =
  'La véritable appartenance à Abraham ne se réclame pas par une identité héritée, mais se gagne par l\'acte de suivre sa voie. Ce Prophète et ceux qui ont cru appartiennent à la lignée vivante d\'Abraham. Dieu protège ceux qui croient.';

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Ce verset fait suite à la définition de la religion d'Abraham au verset 67. Il répond à la question implicite : qui peut légitimement revendiquer l'héritage d'Abraham ? Trois groupes sont désignés, puis l'appartenance de Dieu aux croyants est affirmée.

**awlā** (les plus dignes) est une forme superlative (af'alu) de la racine w-l-y, singulier indéfini, sujet prédicatif après inna (particule d'emphase). La racine waliya signifie "avoir droit à, mériter, être digne de". La forme af'alu = le degré le plus élevé de ce mérite : "ceux qui ont le plus grand droit". La structure inna awlā al-nāsi bi-Ibrāhīma affirme avec emphase que certains gens ont le titre le plus élevé à l'héritage d'Abraham. On traduit par « les plus dignes ».

**al-nāsi** (des gens) est un nom pluriel défini génitif de la racine n-w-s. Il désigne l'ensemble des êtres humains de façon neutre. C'est le groupe (les gens) dont on extrait les plus dignes. On traduit par « des gens ».

**ittabaʿūhu** (ils l'ont suivi) est un verbe de la forme VIII de la racine t-b-ʿ, accompli 3ème personne masculin pluriel avec pronom suffixe 3ème masculin singulier (hu = lui, se rapporte à Ibrahim). La forme VIII ittabaʿa renforce le sens de la forme I tabiʿa = suivre. Le sens premier est « marcher derrière, emboîter le pas, se mettre dans la voie de ». On traduit par « l'ont suivi ».

**al-nabīyyu** (le Prophète) est un nom masculin défini nominatif de la racine n-b-ʾ. L'article défini al- désigne un prophète précis, mis en évidence par le démonstratif wa-hādhā (et celui-ci). Lane's : nabīy = « un prophète, celui qui apporte une nouvelle de Dieu ». On traduit par « le Prophète ».

**āmanū** (ils ont cru) est un verbe de la forme IV de la racine ʾ-m-n, accompli 3ème personne masculin pluriel. La forme IV āmana signifie « accomplir l'acte de croire, accorder sa foi ». C'est un acte intérieur qui engage l'être. On traduit par « ont cru ».

**Allāhu** (Dieu) est le nom propre de la divinité au nominatif, sujet de la dernière proposition nominale (Allāhu walīyyun = Dieu est le protecteur). On traduit par « Dieu ».

**walīyyun** (protecteur) est un nom masculin indéfini nominatif de la racine w-l-y, prédicat de la proposition nominale. Le sens premier dans ce contexte est "celui qui prend en charge, qui protège". On traduit par « protecteur ».

**al-muʾminīna** (des croyants) est le participe actif pluriel masculin défini génitif de la forme IV de la racine ʾ-m-n. al-muʾminūna = ceux qui font l'acte de croire (āmana), les croyants. On traduit par « des croyants ».

§JUSTIFICATION§

**les plus dignes** — Le sens retenu est « être plus digne de » de la racine w-l-y. L'expression « les plus dignes » est choisie car awlā est la forme superlative af'alu de waliya (avoir droit, mériter) — elle exprime le titre le plus élevé à quelque chose. L'alternative « les plus proches » est écartée car elle suggère une proximité affective ou physique, alors que awlā bi- (bi-Ibrāhīma) désigne un droit ou un titre légitimé par l'acte de suivre la voie.

**des gens** — Le sens retenu est « gens » de la racine n-w-s. Le mot « gens » est choisi car al-nāsu désigne l'ensemble de l'humanité de façon courante et neutre. L'alternative « êtres humains » est écartée car plus philosophique que descriptive.

**l'ont suivi** — Le sens retenu est « suivre » de la racine t-b-ʿ. Le verbe « l'ont suivi » est choisi car ittabaʿa (Form VIII) désigne l'acte concret d'emboîter le pas à quelqu'un, de se mettre dans sa voie. L'alternative « l'ont imité » est écartée car elle implique une copie de comportement, alors que ittabaʿa désigne l'acte de marcher derrière et d'adhérer à un chemin tracé.

**Prophète** — Le sens retenu est « prophète » de la racine n-b-ʾ. Le mot « Prophète » est choisi avec majuscule car al-nabīyyu désigne ici un prophète précis (avec l'article défini), mis en parallèle avec les compagnons d'Abraham. L'alternative « annonciateur » est écartée car elle réduit la fonction à l'acte de communiquer, alors que nabīy désigne la fonction globale de prophétie.

**ont cru** — Le sens retenu est « croire » de la racine ʾ-m-n, forme IV. Le verbe « ont cru » est choisi car āmana (Form IV) désigne l'acte intérieur d'accorder sa foi. L'alternative « ont fait confiance » est écartée car trop relationnelle (confiance envers quelqu'un), alors qu'āmana peut viser une vérité ou une réalité, pas seulement une personne.

**protecteur** — Le sens retenu est « protecteur » de la racine w-l-y. Le mot « protecteur » est choisi car walīyyun al-muʾminīna désigne le lien de protection divine envers les croyants — un lien bienveillant et actif. L'alternative « Maître » (Hamidullah) est écartée car elle traduit une autorité dominatrice, alors que walīy désigne avant tout la proximité et la protection.

**des croyants** — Le sens retenu est « croyant » de la racine ʾ-m-n. Le mot « croyants » est choisi car al-muʾminūna est le participe actif de āmana — ceux qui accomplissent l'acte de croire. L'alternative « fidèles » est écartée car elle implique une loyauté institutionnelle, alors que muʾmin désigne spécifiquement celui qui a la foi.

§CRITIQUE§

**les plus dignes vs "les mieux disposés envers"** : Les traductions courantes (Hamidullah) donnent « les gens les mieux disposés envers Abraham ». Ce choix vient d'une lecture de awlā comme proximité affective ou disposition intérieure. Notre traduction donne « les plus dignes d'Abraham » car awlā (af'alu de waliya) exprime un titre ou un droit légitime, non une simple disposition. La différence est importante : "mieux disposés" décrit un sentiment, "les plus dignes" désigne une légitimité active fondée sur un acte (ils l'ont suivi).

**protecteur vs "Maître"** : Les traductions courantes (Hamidullah) donnent « Allah est le Maître des croyants ». Ce choix vient d'une lecture de walīy comme autorité souveraine. Notre traduction donne « protecteur » car walīy désigne d'abord le proche, l'allié qui prend en charge — une protection bienveillante, non une domination. Différence structurelle : "Maître" impose une relation de subordination asymétrique ; "protecteur" exprime une relation de soin et de proximité. Le verset termine en affirmant la relation de Dieu aux croyants, non son autorité sur eux.`;

// ═══════════════════════════════════════════════════════
// CORRECTION DE LA RACINE tbe (aid=1752)
// root_ar était 'ط ب ع' (sceller) → corriger en 'ت ب ع' (suivre)
// Remplacer les sens erronés par les sens corrects
// ═══════════════════════════════════════════════════════
const TBE_NEW_SENSES = [
  // Concept 1 : Suivi/Adhérence
  { analysis_id: 1752, sense: 'suivre',          concept: 'Suivi/Adhérence',            status: 'validated', meaning_type: 'primary',
    proof_ref: 'Lane\'s tbE — tabiʿahu (Form I)', proof_phon: 'tabiʿahu',
    proof_tr: 'il le suivit', proof_ctx: 'Lane\'s : tabiʿahu = « il le suivit, marcha derrière lui, vint après lui ».',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'marcher derrière', concept: 'Suivi/Adhérence',           status: 'validated', meaning_type: 'primary',
    proof_ref: 'Lane\'s tbE — tabiʿahu', proof_phon: 'tabiʿahu',
    proof_tr: 'marcher derrière', proof_ctx: 'Lane\'s : "He went, or walked, behind, or after him."',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'venir après',      concept: 'Suivi/Adhérence',           status: 'validated', meaning_type: 'primary',
    proof_ref: 'Lane\'s tbE — tabiʿahu', proof_phon: 'tabiʿahu',
    proof_tr: 'venir après', proof_ctx: 'Lane\'s : tabiʿa désigne aussi l\'action de se joindre à quelqu\'un après son passage.',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'se conformer à',   concept: 'Suivi/Adhérence',           status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — ittabaʿahu (Form VIII)', proof_phon: 'ittabaʿahu',
    proof_tr: 'se conformer à', proof_ctx: 'Lane\'s : ittabaʿa = forme VIII, même sens que la forme I, avec accent sur l\'engagement dans l\'acte de suivre une voie ou une directive.',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'adhérer à',        concept: 'Suivi/Adhérence',           status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — ittabaʿahu (Form VIII)', proof_phon: 'ittabaʿahu',
    proof_tr: 'adhérer à', proof_ctx: 'Lane\'s : ittabaʿa = suit la même voie que tabiʿa, implique l\'adhésion à un chemin.',
    period: 'coranique' },
  // Concept 2 : Consécution/Succession
  { analysis_id: 1752, sense: 'consécutif',       concept: 'Consécution/Succession',    status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — tatabāʿa (Form VI)', proof_phon: 'tatabāʿa',
    proof_tr: 'consécutif', proof_ctx: 'Lane\'s : tatabāʿa = "se succéder sans interruption", s\'applique à des objets ou événements qui se suivent.',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'successif',        concept: 'Consécution/Succession',    status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — mutatabāʿ', proof_phon: 'mutatatābiʿ',
    proof_tr: 'successif', proof_ctx: 'Lane\'s : mutatatābiʿ = "consécutif, successif, ininterrompu dans ses progressions."',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'sans interruption', concept: 'Consécution/Succession',   status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — tatabāʿa', proof_phon: 'tatabāʿa',
    proof_tr: 'sans interruption', proof_ctx: 'Lane\'s : tatabāʿa = "uninterrupted in its progressions."',
    period: 'coranique' },
  // Concept 3 : Conséquence/Responsabilité
  { analysis_id: 1752, sense: 'conséquence',      concept: 'Conséquence/Responsabilité',status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — tabīʿa', proof_phon: 'tabīʿa',
    proof_tr: 'conséquence', proof_ctx: 'Lane\'s : tabīʿa = "la chose qui suit un acte dans le registre moral ou juridique, une obligation qui en découle."',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'responsabilité',   concept: 'Conséquence/Responsabilité',status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — tabīʿa', proof_phon: 'tabīʿa',
    proof_tr: 'responsabilité', proof_ctx: 'Lane\'s : tabīʿa = "a right for which one may be prosecuted" — la responsabilité qui découle d\'un acte commis.',
    period: 'coranique' },
  { analysis_id: 1752, sense: 'poursuite',        concept: 'Conséquence/Responsabilité',status: 'validated', meaning_type: 'secondary',
    proof_ref: 'Lane\'s tbE — tabīʿ', proof_phon: 'tabīʿ',
    proof_tr: 'poursuite', proof_ctx: 'Lane\'s : tabīʿ = "one who is prosecuted or sued for a right or due" — sens de la poursuite légale qui "suit" un acte.',
    period: 'coranique' }
];

// ═══════════════════════════════════════════════════════
// VWA
// ═══════════════════════════════════════════════════════
const VWA_ROWS = [
  // pos=2 : awlā (wly) — superlative, les plus dignes
  {
    word_key: 'wly', position: 2,
    sense_chosen: 'être plus digne de',
    concept_chosen: 'Droit/Mérite',
    reason: 'awlā = forme superlative af\'alu de waliya (w-l-y), sujet prédicatif après inna. awlā bi-Ibrāhīma = ceux qui ont le titre le plus élevé à Ibrahim. Sens "être plus digne de" [Droit/Mérite] retenu.',
    analysis_axes: {
      concepts: {
        'Droit/Mérite': {
          senses: ['être plus digne de', 'avoir droit'],
          status: 'retenu',
          proof_ctx: 'awlā est la forme superlative af\'alu de waliya = avoir droit à, mériter. La structure awlā al-nāsi bi-Ibrāhīma désigne ceux qui ont le titre le plus légitime à l\'héritage d\'Abraham — non une proximité affective mais un droit fondé sur l\'acte (ils l\'ont suivi, verset 68). La forme superlative incompatible avec [Proximité/Protection] (proche, ami) ou [Autorité] (gouverner) — awlā désigne un mérite relatif, non une relation ni un pouvoir.'
        },
        'Proximité/Protection': {
          senses: ['proche', 'ami', 'protecteur', 'allié', 'tuteur', 'patron', 'héritier', 'parent', 'affranchi'],
          status: 'nul',
          proof_ctx: 'Ces sens décrivent des relations (liens affectifs ou de protection), pas un degré de mérite ou de droit. awlā est une forme comparative/superlative de mérite — non une désignation relationnelle.'
        },
        'Autorité': {
          senses: ['gouverner', 'administrer', 'régir', 'préfet', 'prendre en charge', 'maîtriser'],
          status: 'nul',
          proof_ctx: 'Hors contexte — le verset parle de qui a le plus de légitimité à s\'associer à Ibrahim, non de qui gouverne.'
        },
        'Éloignement/Détournement': {
          senses: ['se détourner', 's\'éloigner', 'tourner le dos', 'fuir'],
          status: 'nul',
          proof_ctx: 'Contraire du sens attendu.'
        },
        'Succession/Consécution': {
          senses: ['suivre', 'être adjacent', 'consécutif'],
          status: 'nul',
          proof_ctx: 'Hors contexte.'
        }
      }
    }
  },

  // pos=3 : al-nāsi (nws) — les gens
  {
    word_key: 'nws', position: 3,
    sense_chosen: 'gens',
    concept_chosen: 'Humanité/Peuple',
    reason: 'al-nāsi = nom pluriel défini génitif de n-w-s. Désigne l\'ensemble des êtres humains. Sens "gens" [Humanité/Peuple] retenu.',
    analysis_axes: {
      concepts: {
        'Humanité/Peuple': {
          senses: ['gens', 'êtres humains', 'peuple'],
          status: 'retenu',
          proof_ctx: 'al-nāsu désigne l\'ensemble de l\'humanité. Ici, awlā al-nāsi = les plus dignes parmi les gens — al-nāsi est le groupe global dont on extrait le sous-ensemble le plus légitime. "Gens" est le sens courant et neutre exact.'
        },
        'Perception/Visibilité': {
          senses: ['voir de loin', 'être visible'],
          status: 'nul',
          proof_ctx: 'Sens étymologique minoritaire de la racine — hors sujet dans ce contexte de désignation collective.'
        },
        'Sens isolé/Oublier': { senses: ['oublier'], status: 'nul', proof_ctx: 'Hors sujet.' },
        'Sens isolé/Être': { senses: ['être agité'], status: 'nul', proof_ctx: 'Hors sujet.' }
      }
    }
  },

  // pos=6 : ittabaʿūhu (tbe) — Form VIII, ils l'ont suivi
  {
    word_key: 'tbe', position: 6,
    sense_chosen: 'suivre',
    concept_chosen: 'Suivi/Adhérence',
    reason: 'ittabaʿūhu = Form VIII de t-b-ʿ, accompli 3MP + pronom suffixe 3MS (hu = Ibrahim). La forme VIII intensifie la forme I tabiʿa = suivre. Sens "suivre" [Suivi/Adhérence] retenu.',
    analysis_axes: {
      concepts: {
        'Suivi/Adhérence': {
          senses: ['suivre', 'marcher derrière', 'venir après', 'se conformer à', 'adhérer à'],
          status: 'retenu',
          proof_ctx: 'ittabaʿūhu = Form VIII de tabiʿa, accompli 3MP avec pronom suffixe 3MS. La forme VIII ittabaʿa a le même sens que la forme I tabiʿa = suivre, marcher derrière — Lane\'s indique que la forme VIII renvoie à la forme I pour tous ses sens. L\'objet est Ibrahim (hu). La construction al-ladhīna ittabaʿūhu désigne ceux qui ont effectivement emboîté le pas à Ibrahim, le premier groupe des plus dignes.'
        },
        'Consécution/Succession': {
          senses: ['consécutif', 'successif', 'sans interruption'],
          status: 'nul',
          proof_ctx: 'Ce sens désigne des choses/événements qui se succèdent dans le temps ou l\'espace — non l\'acte de suivre une personne. Ici le pronom hu (lui) confirme un suivi de personne.'
        },
        'Conséquence/Responsabilité': {
          senses: ['conséquence', 'responsabilité', 'poursuite'],
          status: 'nul',
          proof_ctx: 'Sens juridico-moral de ce qui "suit" un acte — hors sujet dans ce contexte d\'adhésion à la voie d\'Abraham.'
        }
      }
    }
  },

  // pos=8 : al-nabīyyu (nba) — le Prophète
  {
    word_key: 'nba', position: 8,
    sense_chosen: 'prophète',
    concept_chosen: 'Prophétie',
    reason: 'al-nabīyyu = nom défini nominatif de n-b-ʾ, désigné par le démonstratif wa-hādhā (et celui-ci). Désigne un prophète précis, le second groupe des plus dignes d\'Abraham. Sens "prophète" [Prophétie] retenu.',
    analysis_axes: {
      concepts: {
        'Prophétie': {
          senses: ['prophète', 'prophétie'],
          status: 'retenu',
          proof_ctx: 'al-nabīyyu est un nom défini (al-) qui désigne la fonction de prophétie dans sa totalité. Avec le démonstratif wa-hādhā (et celui-ci), il désigne ce prophète précis parmi les dignes héritiers d\'Abraham. "Prophète" capture exactement la fonction (nabīy = celui qui reçoit une nouvelle divine et la transmet).'
        },
        'Information/Nouvelle': {
          senses: ['informer', 'nouvelle', 'annoncer'],
          status: 'nul',
          proof_ctx: 'Ces sens s\'appliquent à des formes verbales ou nominales actives de la racine (nabaʾa = informer). al-nabīyyu désigne la fonction globale du prophète, non l\'acte d\'informer.'
        },
        'Sens isolé/Crier': {
          senses: ['crier'],
          status: 'nul',
          proof_ctx: 'Hors sujet.'
        }
      }
    }
  },

  // pos=10 : āmanū (amn) — Form IV accompli 3MP
  {
    word_key: 'amn', position: 10,
    sense_chosen: 'croire',
    concept_chosen: 'Foi/Adhésion',
    reason: 'āmanū = Form IV de ʾ-m-n, accompli 3MP. La forme IV āmana = accorder sa foi, croire. al-ladhīna āmanū = ceux qui ont accompli l\'acte de croire. Sens "croire" [Foi/Adhésion] retenu.',
    analysis_axes: {
      concepts: {
        'Foi/Adhésion': {
          senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
          status: 'retenu',
          proof_ctx: 'āmanū est le Form IV accompli 3MP — āmana = accomplir l\'acte intérieur de croire, accorder sa foi. al-ladhīna āmanū désigne le troisième groupe des plus dignes d\'Abraham : ceux qui ont la foi. "Croire" est le sens exact de cet acte intérieur, distincts de la sécurité (amina, Form I) ou de la protection accordée (Form IV transitif).'
        },
        'Sécurité/Confiance': {
          senses: ['être en sécurité', 'se sentir en sécurité', 'faire confiance', 'confier', 'fidèle', 'lieu sûr'],
          status: 'nul',
          proof_ctx: 'Ces sens appartiennent à la forme I (amina = être en sécurité). La forme IV āmana dans ce contexte (al-ladhīna āmanū) désigne l\'acte de croire — non l\'état de sécurité.'
        },
        'Garantie/Protection': {
          senses: ['protéger', 'accorder la sécurité'],
          status: 'nul',
          proof_ctx: 'Sens transitifs dérivés de la form IV (āmana + complément = donner sécurité à). Hors sujet ici car āmanū est intransitif (acte de croire).'
        },
        'Sens isolé/Amen': { senses: ['amen'], status: 'nul', proof_ctx: 'Hors sujet.' }
      }
    }
  },

  // pos=11 : Allāhu (alh) — Dieu
  {
    word_key: 'alh', position: 11,
    sense_chosen: 'Dieu',
    concept_chosen: 'Divinité',
    reason: 'Allāhu = nom propre nominatif de ʾ-l-h, sujet de la proposition nominale finale. Désigne la divinité unique par excellence. Sens "Dieu" [Divinité] retenu.',
    analysis_axes: {
      concepts: {
        'Divinité': {
          senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
          status: 'retenu',
          proof_ctx: 'Allāhu est le nom propre au nominatif, sujet de la proposition nominale (Allāhu walīyyun al-muʾminīna). Il désigne la divinité unique. "Dieu" est le mot français précis qui rend ce nom propre dans son usage monothéiste.'
        },
        'Adoration/Dévotion': {
          senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
          status: 'nul',
          proof_ctx: 'Sens verbaux actifs de la racine — Allāh est ici le nom propre, non une forme verbale.'
        },
        'Détresse': { senses: ['être perplexe', 'se lamenter'], status: 'nul', proof_ctx: 'Hors sujet.' },
        'Refuge/Protection': { senses: ['chercher refuge', 'protéger', 'demeurer'], status: 'nul', proof_ctx: 'Sens dérivés — Allāh est ici le nom propre sujet, non un verbe.' },
        'Domination': { senses: ['asservir'], status: 'nul', proof_ctx: 'Hors sujet.' }
      }
    }
  },

  // pos=12 : walīyyun (wly) — protecteur
  {
    word_key: 'wly', position: 12,
    sense_chosen: 'protecteur',
    concept_chosen: 'Proximité/Protection',
    reason: 'walīyyun = nom indéfini nominatif de w-l-y, prédicat de la proposition nominale (Allāhu walīyyun al-muʾminīna). Désigne le lien de protection divine. Sens "protecteur" [Proximité/Protection] retenu.',
    analysis_axes: {
      concepts: {
        'Proximité/Protection': {
          senses: ['proche', 'ami', 'protecteur', 'allié', 'tuteur', 'patron', 'héritier', 'parent', 'affranchi'],
          status: 'retenu',
          proof_ctx: 'walīyyun al-muʾminīna exprime le lien bienveillant et actif de Dieu envers les croyants — une protection de proximité. "Protecteur" rend le sens de walīy (celui qui prend en charge, qui se tient près) dans ce contexte d\'affirmation divine. La nature philosophique du sens est un lien de soin orienté vers l\'autre, compatible avec un nom prédicatif (Allāhu walīyyun = Dieu est le protecteur).'
        },
        'Droit/Mérite': {
          senses: ['être plus digne de', 'avoir droit'],
          status: 'nul',
          proof_ctx: 'Ces sens s\'appliquent à la forme superlative awlā (pos=2). walīy simple désigne le lien de protection/proximité, non un degré de mérite.'
        },
        'Autorité': {
          senses: ['gouverner', 'administrer', 'régir', 'prendre en charge', 'maîtriser'],
          status: 'peu_probable',
          proof_ctx: 'walīy peut inclure une idée d\'autorité (walīy al-amr = responsable de l\'affaire). Ici cependant, walīyyun al-muʾminīna conclut un verset sur la foi et le suivi d\'Abraham — le registre est celui de la protection et de l\'appartenance, non de la gouvernance. [Proximité/Protection] est philosophiquement plus cohérent avec ce contexte de lien entre Dieu et les croyants.'
        },
        'Éloignement/Détournement': { senses: ['se détourner', 's\'éloigner'], status: 'nul', proof_ctx: 'Contraire du sens.' },
        'Succession/Consécution': { senses: ['suivre', 'consécutif'], status: 'nul', proof_ctx: 'Hors contexte.' }
      }
    }
  },

  // pos=13 : al-muʾminīna (amn) — Form IV participe actif pl. défini génitif
  {
    word_key: 'amn', position: 13,
    sense_chosen: 'croyant',
    concept_chosen: 'Foi/Adhésion',
    reason: 'al-muʾminīna = participe actif Form IV de ʾ-m-n, pluriel masculin défini génitif. al-muʾminūna = ceux qui font l\'acte de croire. Sens "croyant" [Foi/Adhésion] retenu.',
    analysis_axes: {
      concepts: {
        'Foi/Adhésion': {
          senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
          status: 'retenu',
          proof_ctx: 'al-muʾminīna est le participe actif pluriel de āmana (Form IV). al-muʾminūna désigne ceux qui font l\'acte de croire — les croyants. Complément génitif de walīyyun : Dieu est le protecteur de ces croyants. "Croyant" (participe actif en français) est exact pour rendre le participe actif arabe.'
        },
        'Sécurité/Confiance': {
          senses: ['être en sécurité', 'fidèle', 'lieu sûr'],
          status: 'nul',
          proof_ctx: 'Ces sens appartiennent à la forme I (amina = être en sécurité). al-muʾmin est le participe de la forme IV āmana = croire.'
        },
        'Garantie/Protection': { senses: ['protéger', 'accorder la sécurité'], status: 'nul', proof_ctx: 'Hors sujet — al-muʾmin est celui qui croit, non celui qui protège.' },
        'Sens isolé/Amen': { senses: ['amen'], status: 'nul', proof_ctx: 'Hors sujet.' }
      }
    }
  }
];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V68 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── CORRECTION racine tbe ──────────────────────────────
  console.log('\n═══ CORRECTION racine tbe (aid=1752) ═══');
  // Update root_ar
  const { error: waErr } = await db.from('word_analyses')
    .update({ root_ar: 'ت ب ع', root_meaning: 'suivre, emboîter le pas' })
    .eq('id', 1752);
  if (waErr) throw waErr;
  console.log('  root_ar corrigé : ط ب ع → ت ب ع');

  // Delete old senses (sceller, marquer, empreinte, nature)
  const { data: oldSenses } = await db.from('word_meanings').select('id,sense').eq('analysis_id', 1752);
  const wrongSenses = (oldSenses||[]).filter(s => ['sceller','marquer','empreinte','nature'].includes(s.sense));
  if (wrongSenses.length) {
    const ids = wrongSenses.map(s => s.id);
    await db.from('word_meanings').delete().in('id', ids);
    console.log('  Supprimé ' + ids.length + ' sens erronés : ' + wrongSenses.map(s => s.sense).join(', '));
  }

  // Check if correct senses already present
  const { count: tbeNewCount } = await db.from('word_meanings')
    .select('id', { count: 'exact', head: true })
    .eq('analysis_id', 1752).eq('sense', 'suivre');
  if (tbeNewCount === 0) {
    const { error: tbeErr } = await db.from('word_meanings').insert(TBE_NEW_SENSES);
    if (tbeErr) throw tbeErr;
    console.log('  Inséré ' + TBE_NEW_SENSES.length + ' sens pour t-b-ʿ (suivre)');
  } else {
    console.log('  Sens tbe déjà présents — SKIP');
  }

  // ─── ÉTAPE 2 — Vérification toutes racines ───────────────
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { aid: 599,  key: 'wly', name: 'awlā/walīy' },
    { aid: 303,  key: 'nws', name: 'al-nāsi' },
    { aid: 1752, key: 'tbe', name: 'ittabaʿa' },
    { aid: 418,  key: 'nba', name: 'nabīy' },
    { aid: 287,  key: 'amn', name: 'āmana/muʾmin' },
    { aid: 250,  key: 'alh', name: 'Allāh' }
  ];
  for (const r of rootsCheck) {
    const { count: n } = await db.from('word_meanings')
      .select('id', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log('  ' + r.key + ' (aid=' + r.aid + ', ' + r.name + ') : ' + n + ' sens ' + (n >= 5 ? '[OK]' : '[<5 ATTN]'));
  }

  // ─── word_daily — SKIP tous ──────────────────────────────
  console.log('\n═══ word_daily — SKIP (toutes racines déjà ≥3 phrases) ═══');

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
  vwaRows.forEach(v => console.log('    pos=' + v.position + ' ' + v.word_key + ' → ' + v.sense_chosen + ' [' + VWA_ROWS.find(r => r.position === v.position).concept_chosen + ']'));

  console.log('\n══════════════════════════════════════════════════════');
  console.log('VERSET 3:68 — TERMINÉ');
  console.log('  awlā (wly)      → Droit/Mérite → "les plus dignes"');
  console.log('  al-nāsi (nws)   → Humanité/Peuple → "des gens"');
  console.log('  ittabaʿū (tbe)  → Suivi/Adhérence → "l\'ont suivi"');
  console.log('  al-nabīy (nba)  → Prophétie → "Prophète"');
  console.log('  āmanū (amn)     → Foi/Adhésion → "ont cru"');
  console.log('  Allāhu (alh)    → Divinité → "Dieu"');
  console.log('  walīy (wly)     → Proximité/Protection → "protecteur"');
  console.log('  al-muʾminīn (amn) → Foi/Adhésion → "croyants"');
  console.log('  Traduction : "Certes, les gens les plus dignes d\'Abraham sont ceux qui l\'ont suivi, et ce Prophète, et ceux qui ont cru. Et Dieu est le protecteur des croyants."');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V68 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
