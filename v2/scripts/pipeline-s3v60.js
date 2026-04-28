// Pipeline S3:V60 — verse_id=353
// Texte: ٱلْحَقُّ مِن رَّبِّكَ فَلَا تَكُن مِّنَ ٱلْمُمْتَرِينَ
// Hamidullah: "La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui doutent."
// Notre traduction étymologique : "La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui disputent obstinément."

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 353;
const SURAH = 3, VERSE = 60;

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 1 — Segments step1 (tagging grammatical)
// Toutes les racines importantes du verset ont ≥ 5 sens : INTOUCHABLES.
//   hqq(409)=9 sens, rbb(253)=27, kwn(2577)=8, mry(691)=7
// ═══════════════════════════════════════════════════════════════════

const SEGMENTS_STEP1 = [
  { type: 'important', pos: 'nom', phon: 'al-ḥaqqu', arabic: 'ٱلْحَقُّ',
    key: 'hqq', root: 'ح ق ق', gender: 'masculin', number: 'singulier', definite: true,
    case_i18n: 'nominatif', idafa: false, position: 1 },
  { type: 'particle', phon: 'min', arabic: 'مِن', fr: 'de', position: 2 },
  { type: 'important', pos: 'nom', phon: 'rabbika', arabic: 'رَّبِّكَ',
    key: 'rbb', root: 'ر ب ب', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'genitif', idafa: true, suffix_pronoun: 'ka', position: 3 },
  { type: 'particle', phon: 'fa-lā', arabic: 'فَلَا', fr: 'donc... ne pas',
    prefix_particle: 'fa', prohibitive: true, position: 4 },
  { type: 'important', pos: 'verbe', phon: 'takun', arabic: 'تَكُن',
    key: 'kwn', root: 'ك و ن', tense: 'inaccompli', mood: 'jussif', voice: 'actif', person: 2,
    number: 'singulier', gender: 'masculin', verb_form: 'I',
    preceded_by_negation: true, jussif_apocope: true, definite: false, position: 5 },
  { type: 'particle', phon: 'mina', arabic: 'مِّنَ', fr: 'de', position: 6 },
  { type: 'important', pos: 'nom', phon: 'al-mumtarīna', arabic: 'ٱلْمُمْتَرِينَ',
    key: 'mry', root: 'م ر ي', gender: 'masculin', number: 'pluriel', definite: true,
    case_i18n: 'genitif', participle: 'actif', verb_form: 'VIII', position: 7 }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 2 — ENRICHISSEMENTS
// Toutes les racines importantes ont ≥ 5 sens : INTOUCHABLES.
// Aucun ajout, aucune modification. On ne touche pas à word_meanings.
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 3 — VWA (réflexion 5 axes interne, proof_ctx concis)
// Concepts exacts lus depuis word_meanings :
//   hqq  : Vérité/Réalité (retenu), Obligation/Nécessité, Sens isolé/Se, Sens isolé/Vérifier
//   rbb  : Seigneurie/Autorité bienveillante (retenu), Éducation/Accompagnement, Croissance/Augmentation,
//          Commerce/Usure, Souffle/Vent, Sens isolé/Fixer, Sens isolé/Rassembler, Sens isolé/Groupe, Sens isolé/Confiture
//   kwn  : Être/Existence (retenu), Humilité/Soumission, Lieu/État
//   mry  : Dispute/Opposition obstinée (retenu), Doute/Contestation, Extraction/Tirer
// ═══════════════════════════════════════════════════════════════════

const VWA_ROWS = [
  // Position 1 — al-ḥaqqu (ح ق ق) : nom défini nominatif, sujet de phrase nominale
  {
    position: 1, word_key: 'hqq', sense_chosen: 'vérité',
    reason: "Nom masculin singulier défini par l'article al-, au cas nominatif. Il est le sujet d'une phrase nominale dont le prédicat est la construction prépositionnelle min rabbika (« de ton Seigneur »). La définition par al- marque qu'il s'agit de LA vérité, identifiée comme réalité connue et posée comme établie — celle que le verset précédent vient d'énoncer à propos du cas de Jésus. Le nominatif (marfūʿ) marque son rôle de thème posé en tête de la phrase. La phrase nominale affirme de manière permanente et posée cette appartenance à la source divine.",
    analysis_axes: {
      concept_chosen: 'Vérité/Réalité',
      concepts: {
        'Vérité/Réalité': {
          status: 'retenu',
          senses: ['être vrai', 'vérité', 'réalité', 'droit'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-ḥaqq désigne ce qui est établi dans la réalité, ce qui correspond effectivement à ce qui est — l'état objectif et extérieur de ce qui ne peut être contesté. Ce sens est compatible avec le nom défini au nominatif en tête de phrase nominale : le verset pose comme acquis que la vérité en question est cette réalité-là, référée par l'article, et en donne la source (min rabbika). La vérité ici ne dépend pas de l'adhésion du locuteur — elle est extérieure, établie, et la suite du verset l'oppose à l'état intérieur de ceux qui la contestent."
        },
        'Obligation/Nécessité': {
          status: 'probable',
          senses: ['devoir', 'mériter', 'être obligatoire'],
          proof_ctx: "Sens dérivé cohérent — ce qui est vrai est aussi ce qui s'impose comme obligation. L'article al- pourrait désigner le droit établi par Dieu. Mais le test grammatical et sémantique penche pour « vérité » : le verset oppose al-ḥaqq à al-mumtarīna (ceux qui disputent obstinément), or on ne dispute pas naturellement d'une obligation — on dispute d'une affirmation présentée comme vraie. Le champ lexical de la contestation active « vérité » plus nettement que « devoir »."
        },
        'Sens isolé/Se': {
          status: 'nul',
          senses: ['se réaliser'],
          proof_ctx: "Sens verbal isolé lié à la racine, hors sujet pour un nom défini en tête de phrase nominale."
        },
        'Sens isolé/Vérifier': {
          status: 'nul',
          senses: ['vérifier'],
          proof_ctx: "Sens verbal isolé, hors sujet pour un nom défini qui désigne une réalité et non un acte."
        }
      }
    }
  },
  // Position 3 — rabbika (ر ب ب) : nom génitif idafa avec suffixe -ka
  {
    position: 3, word_key: 'rbb', sense_chosen: 'seigneur',
    reason: "Nom masculin singulier au cas génitif, complément de la préposition min (« de »). Il est en annexion (idafa) avec le pronom suffixe -ka (2ème personne du masculin singulier) qui désigne le destinataire du verset — le Prophète. « Ton Seigneur » situe la source de la vérité : elle provient de la personne qui a autorité permanente sur le destinataire. Le génitif marque la rection par min, qui exprime ici l'origine — d'où vient la vérité.",
    analysis_axes: {
      concept_chosen: 'Seigneurie/Autorité bienveillante',
      concepts: {
        'Seigneurie/Autorité bienveillante': {
          status: 'retenu',
          senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner'],
          proof_ctx: "D'après les sources étymologiques, rabb désigne la personne qui a autorité sur une réalité et qui la gouverne, la nourrit et la maintient — la seigneurie unit l'autorité et le soin. Ce sens est compatible avec le nom en idafa avec un pronom personnel (rabbi-ka) : il décrit une relation permanente et extérieure entre celui qui gouverne et celui qui est gouverné. Dans le verset, le suffixe -ka rattache le Prophète à cette source qui lui transmet la vérité."
        },
        'Éducation/Accompagnement': {
          status: 'probable',
          senses: ['élever un enfant', 'éduquer', 'former', 'accompagner la croissance'],
          proof_ctx: "Sens dérivé cohérent — rabb peut évoquer l'éducateur qui accompagne la croissance. Mais ce sens insiste sur l'acte pédagogique, alors que la forme nominale rabb en idafa avec un pronom personnel désigne d'abord la relation d'autorité permanente, plus large que l'acte éducatif ponctuel."
        },
        'Croissance/Augmentation': {
          status: 'peu_probable',
          senses: ['augmenter', 'croître', 'faire grandir', 'nourrir', 'développer', 'excès', 'colline', 'éminence'],
          proof_ctx: "Sens physique premier de la racine — ce qui grandit ou fait grandir. La forme rabb en idafa désigne la personne qui assume cette fonction, non le processus en lui-même. Ce sens éclaire l'étymologie mais le nom spécialisé rabb a été fixé comme titre d'autorité."
        },
        'Commerce/Usure': {
          status: 'nul',
          senses: ['usure', 'augmentation de dette', 'intérêt'],
          proof_ctx: "Sens spécialisé dans le domaine financier, hors sujet dans une construction min rabbi-ka désignant la source de la vérité."
        },
        'Souffle/Vent': {
          status: 'nul',
          senses: ['essoufflement'],
          proof_ctx: "Sens physique isolé, hors sujet."
        },
        'Sens isolé/Fixer': {
          status: 'nul',
          senses: ['fixer'],
          proof_ctx: "Sens verbal isolé, hors sujet."
        },
        'Sens isolé/Rassembler': {
          status: 'nul',
          senses: ['rassembler'],
          proof_ctx: "Sens verbal isolé, hors sujet."
        },
        'Sens isolé/Groupe': {
          status: 'nul',
          senses: ['groupe'],
          proof_ctx: "Sens nominal isolé, hors sujet."
        },
        'Sens isolé/Confiture': {
          status: 'nul',
          senses: ['confiture'],
          proof_ctx: "Sens concret isolé, hors sujet."
        }
      }
    }
  },
  // Position 5 — takun (ك و ن) : verbe inaccompli jussif 2MS actif, après lā prohibitive
  {
    position: 5, word_key: 'kwn', sense_chosen: 'être (verbe incomplet)',
    reason: "Verbe à l'inaccompli, 2ème personne du masculin singulier, voix active, forme I, au mode jussif (marqué par l'apocope de la voyelle finale : takun au lieu de takūnu). Il est précédé du lā nāhiya (lā prohibitive) qui, combiné au fa de conséquence de fa-lā, interdit l'action dans une construction de défense : « ne sois donc pas ». Kāna/yakūnu est ici verbe incomplet (copule) — il lie le sujet (tu, le Prophète) à son attribut introduit par mina l-mumtarīna (« parmi ceux qui disputent obstinément »). La défense vise à empêcher le Prophète de s'inscrire dans le groupe désigné.",
    analysis_axes: {
      concept_chosen: 'Être/Existence',
      concepts: {
        'Être/Existence': {
          status: 'retenu',
          senses: ["être (verbe incomplet)", "venir à l'existence"],
          proof_ctx: "D'après les sources étymologiques, kāna exprime l'être dans ses différentes facettes, notamment comme verbe incomplet qui sert de copule pour attribuer une qualité ou une appartenance au sujet. Ce sens est compatible avec le verbe inaccompli jussif négatif suivi d'un complément prépositionnel (mina l-mumtarīna) : la structure lā takun min X est la formule classique de la défense d'appartenance à une catégorie. Il ne s'agit pas d'une défense d'existence absolue mais de qualification."
        },
        'Humilité/Soumission': {
          status: 'nul',
          senses: ['être humble soumis'],
          proof_ctx: "Sens verbal lié à une forme dérivée (istakāna, forme X) — se soumettre. La forme I simple takun n'active pas ce sens, surtout en construction copulative avec min."
        },
        'Lieu/État': {
          status: 'nul',
          senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'],
          proof_ctx: "Sens nominal ou spatial de la racine. Ici takun fonctionne comme copule liant un sujet à un complément d'appartenance (mina l-mumtarīna), non comme verbe de position ou d'état fixe."
        }
      }
    }
  },
  // Position 7 — al-mumtarīna (م ر ي) : participe actif forme VIII, défini pluriel accusatif/génitif
  // Note : après mina, le participe est au génitif ; le suffixe pluriel -īna rend invariable accusatif/génitif.
  {
    position: 7, word_key: 'mry', sense_chosen: 'disputer obstinément',
    reason: "Participe actif à la forme VIII (iftaʿala → muftaʿil), masculin pluriel, défini par l'article al-. La forme VIII ajoute à la racine une idée de réciprocité ou d'implication active du sujet dans l'action — celui qui se met en position de dispute ou de contestation soutenue, pas un simple état intérieur de doute. Il est au cas génitif parce qu'il suit la préposition mina (« de / parmi »). L'article al- désigne une catégorie identifiée — les gens connus comme tels. La construction lā takun min al-mumtarīna défend au Prophète d'entrer dans cette catégorie.",
    analysis_axes: {
      concept_chosen: 'Dispute/Opposition obstinée',
      concepts: {
        'Dispute/Opposition obstinée': {
          status: 'retenu',
          senses: ['disputer obstinément', 'contredire'],
          proof_ctx: "D'après les sources étymologiques, la forme VIII de la racine م ر ي (imtarā/yamtarī) décrit un acte verbal dirigé vers autrui consistant à contester avec ténacité ce qui a été affirmé — pas un doute intérieur passif mais une opposition active et soutenue. Ce sens est compatible avec le participe actif forme VIII : muftaʿil marque l'engagement actif du sujet dans l'acte. Le verset précède cette défense d'une affirmation forte (al-ḥaqqu min rabbika), ce qui situe la catégorie visée comme celle de ceux qui continuent à s'opposer à cette affirmation malgré son énoncé."
        },
        'Doute/Contestation': {
          status: 'probable',
          senses: ['douter', 'contestation', 'dispute'],
          proof_ctx: "Sens proche de la même racine, qui décrit le mouvement intérieur d'incertitude ou le désaccord en général. C'est le sens donné par les traductions courantes. La distinction philosophique : le doute est un état intérieur de l'esprit qui hésite, alors que la forme VIII muftaʿil décrit un acte extérieur et soutenu. Le verset vise la conduite active (s'inscrire dans un groupe identifié, al-mumtarīna), pas un simple état mental passager."
        },
        'Extraction/Tirer': {
          status: 'nul',
          senses: ['tirer', 'extraire'],
          proof_ctx: "Sens physique premier de la racine — tirer, extraire. Le Lane's rattache ce sens physique au doute par l'image du vent qui tire les nuages. Hors sujet ici : la forme VIII avec complément personnel désigne la dispute, non l'extraction."
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 4 — TRADUCTION
// ═══════════════════════════════════════════════════════════════════

const FULL_TRANSLATION_HAMIDULLAH =
  "La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui doutent.";

const TRANSLATION_ARAB =
  "La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui disputent obstinément.";

const TRANSLATION_MEDITATIONAL =
  "Après avoir posé au verset précédent la clé de lecture du récit de Jésus — son cas est comme celui d'Adam, créé sans père par la seule parole divine — le locuteur clôt la séquence en affirmant d'où vient tout ce qui vient d'être dit : de ton Seigneur. La phrase nominale pose la vérité comme réalité stable, extérieure, identifiée. Elle s'adresse directement au Prophète et lui demande de ne pas s'inscrire dans le groupe de ceux qui, malgré cette affirmation, continuent à s'opposer avec obstination. Le verset distingue ainsi deux attitudes : recevoir ce qui vient de la source, ou rester dans la dispute soutenue.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§
Le verset 60 clôt la séquence sur le cas de Jésus en affirmant la source divine de tout ce qui vient d'être dit (versets 3:45-59) et en interpellant directement le Prophète. Après le parallèle Jésus/Adam posé au verset 59 (« l'exemple de Jésus auprès de Dieu est comme l'exemple d'Adam »), ce verset fait deux choses : il pose que cette affirmation vient du Seigneur du Prophète, et il défend au Prophète de se joindre au groupe de ceux qui disputent obstinément.

**Al-ḥaqqu** (la vérité) est un nom masculin singulier défini par l'article al-, au cas nominatif (marqué par la ḍamma finale). Il est le sujet d'une phrase nominale dont le prédicat est la construction prépositionnelle min rabbika (« de ton Seigneur »). La phrase nominale arabe affirme une relation stable, posée, indépendante du temps — pas une action en train de se faire, mais un état de fait. L'article al- désigne LA vérité en question, celle qui vient d'être énoncée, comme une réalité identifiée et connue. La racine ح ق ق désigne d'abord ce qui est établi dans la réalité : ce qui correspond effectivement à ce qui est.

**Min** (de) est une préposition qui marque ici l'origine, la provenance. Elle introduit le prédicat de la phrase nominale : la vérité vient de quelque part, d'une source.

**Rabbika** (ton Seigneur) est un nom masculin singulier au cas génitif (rection par min), en annexion (idafa) avec le pronom suffixe -ka (2ème personne du masculin singulier) qui renvoie au destinataire du verset : le Prophète. La racine ر ب ب désigne la seigneurie, c'est-à-dire l'autorité permanente unie au soin — celui qui gouverne, nourrit et fait grandir. L'idafa rattache cette seigneurie au destinataire : « ton Seigneur » — la source de la vérité est située dans le rapport personnel du Prophète à celui qui a autorité sur lui.

**Fa-lā** (ne... donc... pas) est la particule fa (de conséquence, « donc ») préfixée à lā (négation prohibitive). Le fa enchaîne la défense qui suit sur ce qui précède : puisque la vérité vient de ton Seigneur, alors ne... pas. La particule lā devant un verbe inaccompli à la 2ème personne est le lā nāhiya (lā de défense), qui interdit l'action — c'est la formule standard de la défense en arabe.

**Takun** (sois) est un verbe à l'inaccompli de la racine ك و ن, 2ème personne du masculin singulier, voix active, forme I, au mode jussif. Le jussif se marque par l'apocope de la voyelle finale : takun au lieu de takūnu. Cette apocope est la trace formelle du lā de défense qui précède — la grammaire arabe exige le jussif après lā nāhiya. Ici kāna fonctionne comme verbe incomplet (copule) : il lie un sujet à son attribut introduit par le complément prépositionnel qui suit. « Ne sois pas de... » — il ne s'agit pas d'une défense d'existence absolue, mais d'une défense d'appartenance à une catégorie.

**Mina** (de, parmi) est la préposition min avec une fatha de liaison (mina au lieu de min devant une voyelle). Elle introduit le complément de catégorie : mina + groupe = « parmi / faire partie de ».

**Al-mumtarīna** (ceux qui disputent obstinément) est un participe actif à la forme VIII (iftaʿala) de la racine م ر ي, au masculin pluriel, défini par l'article al-, au cas génitif (marqué par la terminaison -īna qui est invariable entre accusatif et génitif pour le pluriel régulier masculin). La forme VIII imtarā/yamtarī ajoute à la racine une idée de réciprocité ou d'implication active — celui qui se met en position de contestation soutenue. Le Lane's donne pour cette racine d'abord le sens physique de tirer/extraire (comme le vent qui tire les nuages), puis le doute/la contestation comme extension, puis à la forme VIII une dispute active et obstinée. L'article al- désigne la catégorie identifiée comme telle — les gens connus pour cette attitude. La défense de s'inscrire dans ce groupe s'adresse au Prophète en tant qu'il reçoit la révélation.

§JUSTIFICATION§
**la vérité (al-ḥaqqu)** — Le sens retenu est « Vérité/Réalité ». Le mot « vérité » est choisi parce qu'il rend l'état objectif de ce qui correspond à la réalité, extérieur à celui qui l'énonce ou qui l'entend. L'alternative « réalité » est possible mais plus neutre — « vérité » a la connotation de ce qui s'oppose à la dispute et au doute, ce que le verset active explicitement par la suite (lā takun min al-mumtarīna). « Droit » est écarté parce qu'il renvoie plus à une obligation qu'à un état de fait. Le sens « devoir / être obligatoire » (sens d'obligation/nécessité) est écarté par le test de cohérence avec la suite du verset : on ne « dispute » pas naturellement d'une obligation, on dispute d'une affirmation présentée comme vraie — le couple vérité/dispute est le plus naturel en français comme en arabe.

**ton Seigneur (rabbika)** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi parce qu'il rend la relation d'autorité permanente unie au soin qui est propre à rabb. L'alternative « maître » est plus brute et ne rend pas la dimension de bienveillance (celui qui nourrit, qui élève). « Éducateur » serait trop pédagogique et réduirait rabb à un acte, alors que la forme nominale en idafa avec un pronom personnel désigne la relation entière. « Celui qui te fait grandir » serait une périphrase exacte mais alourdit la traduction. Le sens « usure / intérêt » (sens spécialisé de commerce/usure) est écarté parce qu'il est un sens spécialisé financier, hors sujet dans une construction min rabbi-ka désignant la source de la vérité.

**ne sois pas (lā takun)** — Le sens retenu pour takun est « Être/Existence ». Le verbe « être » est choisi parce qu'il rend exactement la fonction copulative du verbe incomplet kāna dans une construction attributive. L'alternative « ne deviens pas » activerait le sens « devenir comme » (sens de lieu/état), écarté parce que la forme I simple en structure lā + takun + min + catégorie est un pur usage copulatif, non un changement d'état. « Ne te fais pas » serait une traduction possible mais introduit une nuance d'effort absente du texte arabe.

**ceux qui disputent obstinément (al-mumtarīna)** — Le sens retenu est « Dispute/Opposition obstinée ». L'expression « disputer obstinément » est choisie parce qu'elle rend l'acte actif et soutenu propre à la forme VIII, pas un simple état intérieur de doute. L'alternative « ceux qui doutent » est écartée parce que le doute est un mouvement intérieur de l'esprit qui hésite, alors que la forme VIII muftaʿil décrit un acte extérieur dirigé contre une affirmation reçue. « Ceux qui contestent » est possible mais moins marquée — la forme VIII ajoute l'idée d'obstination. « Ceux qui disputent » tout court pourrait convenir, mais l'ajout d'« obstinément » rend la différence d'intensité entre la forme I (douter/contester) et la forme VIII (imtarā, dispute soutenue).

§CRITIQUE§
**la vérité vient de vs la vérité émane de** — Les traductions courantes donnent globalement le même sens pour cette première partie. Hamidullah traduit « La vérité vient de ton Seigneur » — même choix que nous. Pas de différence notable.

**ceux qui disputent obstinément vs ceux qui doutent** — Hamidullah traduit al-mumtarīna par « ceux qui doutent ». Ce choix est sémantiquement réducteur : il ramène une forme verbale VIII (qui marque l'engagement actif du sujet dans l'acte) à un simple état intérieur de doute. La racine م ر ي donne bien au Lane's un sens de doute à la forme I (marā, imtarā simple), mais la forme VIII imtarā/yamtarī décrit dans le Lane's une dispute active et soutenue — pas une hésitation passagère de l'esprit. Le verset défend au Prophète non pas de douter (un mouvement intérieur privé) mais de s'inscrire dans un groupe identifié (al-mumtarīna, avec l'article défini) qui manifeste extérieurement son opposition. La différence change la portée : « ne doute pas » est une injonction intérieure et personnelle, alors que « ne sois pas de ceux qui disputent obstinément » est une mise en garde contre l'appartenance à une catégorie visible, celle de ceux qui continuent à contester la vérité malgré son énoncé. Le texte n'interdit pas le mouvement intérieur qui cherche, il interdit l'attitude extérieure d'obstination.`;

const SEGMENTS = [
  { fr: 'La vérité', pos: 'nom', phon: 'al-ḥaqqu', arabic: 'ٱلْحَقُّ', word_key: 'hqq', is_particle: false, sense_retenu: 'vérité', position: 1 },
  { fr: 'de', pos: null, phon: 'min', arabic: 'مِن', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
  { fr: 'ton Seigneur', pos: 'nom', phon: 'rabbika', arabic: 'رَّبِّكَ', word_key: 'rbb', is_particle: false, sense_retenu: 'seigneur', position: 3 },
  { fr: 'donc ne pas', pos: null, phon: 'fa-lā', arabic: 'فَلَا', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
  { fr: 'sois', pos: 'verbe', phon: 'takun', arabic: 'تَكُن', word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)', position: 5 },
  { fr: 'de', pos: null, phon: 'mina', arabic: 'مِّنَ', word_key: null, is_particle: true, sense_retenu: null, position: 6 },
  { fr: 'ceux qui disputent obstinément', pos: 'nom', phon: 'al-mumtarīna', arabic: 'ٱلْمُمْتَرِينَ', word_key: 'mry', is_particle: false, sense_retenu: 'disputer obstinément', position: 7 }
];

// ═══════════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════════

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V60 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // Étape 2 : AUCUN enrichissement - toutes racines ≥ 5 sens INTOUCHABLES
  console.log('\n═══ ÉTAPE 2 — Vérification racines (INTOUCHABLES) ═══');
  const rootsCheck = [
    { aid: 409,  key: 'hqq', name: 'ḥaqq',   min: 5 },
    { aid: 253,  key: 'rbb', name: 'rabb',   min: 5 },
    { aid: 2577, key: 'kwn', name: 'kāna',   min: 5 },
    { aid: 691,  key: 'mry', name: 'marā',   min: 5 }
  ];
  for (const r of rootsCheck) {
    const { data: m } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = m ? m.length : 0;
    console.log('  aid=' + r.aid + ' (' + r.key + '/' + r.name + ') : ' + n + ' sens ' + (n >= r.min ? '[INTOUCHABLE OK]' : '[ALERTE]'));
  }

  // Étapes 1 & 4 : verse_analyses
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses ═══');
  const { data: existingVa } = await db.from('verse_analyses').select('id').eq('verse_id', VERSE_ID);
  let vaId;
  if (existingVa && existingVa.length) {
    vaId = existingVa[0].id;
    console.log('Row existante va_id=' + vaId + ' → UPDATE');
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
    }).eq('id', vaId);
    if (vaErr) throw vaErr;
  } else {
    console.log('Row absente → INSERT');
    const { data: inserted, error: vaErr } = await db.from('verse_analyses').insert({
      verse_id: VERSE_ID,
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-opus-4-pipeline-maison',
      prompt_version: 'v3'
    }).select('id').single();
    if (vaErr) throw vaErr;
    vaId = inserted.id;
    console.log('Inséré va_id=' + vaId);
  }

  // Étape 3 : VWA
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Clean: ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: v.analysis_axes
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('Insérés : ' + vwaRows.length + ' VWA');

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V60 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error(e); process.exit(1); });
