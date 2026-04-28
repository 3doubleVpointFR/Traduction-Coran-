// Pipeline S3:V59 — verse_id=352
// Texte: إِنَّ مَثَلَ عِيسَىٰ عِندَ ٱللَّهِ كَمَثَلِ ءَادَمَ ۖ خَلَقَهُۥ مِن تُرَابٍ ثُمَّ قَالَ لَهُۥ كُن فَيَكُونُ
// Hamidullah: "En vérité, Jésus est auprès d'Allah, comme Adam qu'Il créa de poussière, puis Il lui dit : «Sois» et il fut."
// Notre traduction étymologique : "Certes, l'exemple de Jésus auprès de Dieu est comme l'exemple d'Adam : Il le créa de poussière, puis Il lui dit « Sois » et il est."

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 352;
const SURAH = 3, VERSE = 59;

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 1 — Segments step1 (tagging grammatical)
// Toutes les racines importantes du verset ont ≥ 5 sens : INTOUCHABLES.
// Mapping word_key : on utilise les clés effectivement utilisées dans
//   word_analyses avec ≥ 5 sens : mthl(347), eys(690), alh(250),
//   adm(416), xlq(344), trb(1156), qwl(307), kwn(2577).
// ═══════════════════════════════════════════════════════════════════

const SEGMENTS_STEP1 = [
  { type: 'particle', phon: 'inna', arabic: 'إِنَّ', fr: 'certes', emphatic_inna: true, position: 1 },
  { type: 'important', pos: 'nom', phon: 'mathala', arabic: 'مَثَلَ',
    key: 'mthl', root: 'م ث ل', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'accusatif', idafa: true, emphatic_inna: true, position: 2 },
  { type: 'important', pos: 'nom', phon: 'ʿīsā', arabic: 'عِيسَىٰ',
    key: 'eys', root: 'ع ي س', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'genitif', idafa: false, position: 3 },
  { type: 'particle', phon: 'ʿinda', arabic: 'عِندَ', fr: 'auprès de', root: 'ع ن د', position: 4 },
  { type: 'important', pos: 'nom', phon: 'allāhi', arabic: 'ٱللَّهِ',
    key: 'alh', root: 'ا ل ه', gender: 'masculin', number: 'singulier', definite: true,
    case_i18n: 'genitif', idafa: false, position: 5 },
  { type: 'particle', phon: 'ka', arabic: 'كَ', fr: 'comme', position: 6 },
  { type: 'important', pos: 'nom', phon: 'mathali', arabic: 'مَثَلِ',
    key: 'mthl', root: 'م ث ل', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'genitif', idafa: true, prefix_particle: 'ka', position: 7 },
  { type: 'important', pos: 'nom', phon: 'ʾādama', arabic: 'ءَادَمَ',
    key: 'adm', root: 'ء د م', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'genitif', position: 8 },
  { type: 'important', pos: 'verbe', phon: 'khalaqahu', arabic: 'خَلَقَهُۥ',
    key: 'xlq', root: 'خ ل ق', tense: 'accompli', voice: 'actif', person: 3,
    number: 'singulier', gender: 'masculin', verb_form: 'I', suffix_pronoun: 'hu',
    definite: false, position: 9 },
  { type: 'particle', phon: 'min', arabic: 'مِن', fr: 'de', position: 10 },
  { type: 'important', pos: 'nom', phon: 'turābin', arabic: 'تُرَابٍ',
    key: 'trb', root: 'ت ر ب', gender: 'masculin', number: 'singulier', definite: false,
    case_i18n: 'genitif', position: 11 },
  { type: 'particle', phon: 'thumma', arabic: 'ثُمَّ', fr: 'puis', position: 12 },
  { type: 'important', pos: 'verbe', phon: 'qāla', arabic: 'قَالَ',
    key: 'qwl', root: 'ق و ل', tense: 'accompli', voice: 'actif', person: 3,
    number: 'singulier', gender: 'masculin', verb_form: 'I', definite: false, position: 13 },
  { type: 'particle', phon: 'lahu', arabic: 'لَهُۥ', fr: 'à lui', prefix_particle: 'la', position: 14 },
  { type: 'important', pos: 'verbe', phon: 'kun', arabic: 'كُن',
    key: 'kwn', root: 'ك و ن', tense: 'impératif', voice: 'actif', person: 2,
    number: 'singulier', gender: 'masculin', verb_form: 'I', definite: false, position: 15 },
  { type: 'important', pos: 'verbe', phon: 'fayakūnu', arabic: 'فَيَكُونُ',
    key: 'kwn', root: 'ك و ن', tense: 'inaccompli', voice: 'actif', person: 3,
    number: 'singulier', gender: 'masculin', verb_form: 'I', prefix_particle: 'fa',
    consequential_fa: true, definite: false, position: 16 }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 2 — ENRICHISSEMENTS
// Toutes les racines importantes ont ≥ 5 sens : INTOUCHABLES.
// Aucun ajout, aucune modification. On ne touche pas à word_meanings.
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 3 — VWA (réflexion 5 axes interne, proof_ctx concis)
// ═══════════════════════════════════════════════════════════════════

const VWA_ROWS = [
  // Position 2 — mathala (م ث ل) : nom accusatif idafa (objet direct de inna)
  {
    position: 2, word_key: 'mthl', sense_chosen: 'exemple',
    reason: "Nom masculin singulier au cas accusatif, objet de la particule d'emphase inna. Il est en idafa (annexion) avec le nom suivant ʿīsā — « l'exemple de Jésus ». L'accusatif après inna est la marque de son statut de sujet thématique du verset : c'est l'exemple (mathal) de Jésus qui est mis en valeur par le locuteur. L'idafa fait de ʿīsā le mot auquel se rattache mathal, comme on dit en français « le cas de X », « l'exemple de Y ». Le verset compare ensuite cet exemple à un autre — celui d'Adam — pour donner la clé de lecture du récit précédent.",
    analysis_axes: {
      concept_chosen: 'Ressemblance/Exemple',
      concepts: {
        'Ressemblance/Exemple': {
          status: 'retenu',
          senses: ['exemple', 'ressembler', 'imiter', 'proverbe', 'parabole', 'semblable'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), mathal désigne ce qui sert de modèle, d'illustration ou de comparaison — une réalité concrète mise en parallèle avec une autre pour l'éclairer. Ce sens est compatible avec le nom en idafa (« l'exemple de ») et avec la suite du verset qui pose explicitement un kamathali (« comme l'exemple de »). L'exemple sort du locuteur qui le propose et atteint l'auditeur pour lui faire comprendre une réalité par parallèle — directionnel, extérieur, pédagogique."
        },
        'Station/Présence': {
          status: 'nul',
          senses: ['se tenir debout', 'dresser'],
          proof_ctx: "Sens physique premier — se tenir debout, se dresser. Ne convient pas à un nom en idafa avec ʿīsā : on ne parle pas de la station debout de Jésus, mais d'une comparaison donnée."
        },
        'Sens isolé/Mutiler': {
          status: 'nul',
          senses: ['mutiler'],
          proof_ctx: "Sens concret isolé de la racine, hors sujet."
        }
      }
    }
  },
  // Position 3 — ʿīsā (ع ي س) : nom propre, sans déclinaison (diptote)
  {
    position: 3, word_key: 'eys', sense_chosen: 'Jésus',
    reason: "Nom propre masculin singulier, second terme de l'idafa avec mathala — d'où le cas génitif par position (le mot lui-même est invariable). Il désigne le prophète dont les versets 3:45-57 viennent de raconter la naissance, la mission et le sort. Le verset 59 fait le bilan de ce récit en en donnant la clé : la situation de Jésus.",
    analysis_axes: {
      concept_chosen: 'Prophète/Messie',
      concepts: {
        'Prophète/Messie': {
          status: 'retenu',
          senses: ['Jésus', 'Messie'],
          proof_ctx: "Nom propre du prophète fils de Maryam, attesté comme tel dans le Coran. Le contexte des versets précédents (3:45-58) est entièrement consacré à son histoire. Ce sens est compatible avec le nom propre en idafa après mathala — l'exemple est celui de Jésus en tant que personne."
        },
        'Couleur/Chameau': {
          status: 'nul',
          senses: ['Blanc teinté de rouge', 'Blanc terne', 'Blanc tirant vers le jaune'],
          proof_ctx: "Sens physique premier attesté dans le Lane's pour la racine — couleur blanche chez les chameaux. Sans rapport avec la personne désignée par le nom propre dans le verset."
        },
        'Couleur/Animal': {
          status: 'nul',
          senses: ['Gazelle ou taureau de teinte adma'],
          proof_ctx: "Sens zoologique isolé, hors sujet."
        },
        'Couleur/Cheveux': {
          status: 'nul',
          senses: ['Cheveux blancs'],
          proof_ctx: "Sens physique isolé, hors sujet."
        },
        'Trace/Empreinte': {
          status: 'nul',
          senses: ['Trace blanche'],
          proof_ctx: "Sens physique isolé, hors sujet."
        },
        'Insecte': {
          status: 'nul',
          senses: ['Sauterelle femelle'],
          proof_ctx: "Sens zoologique isolé, hors sujet."
        }
      }
    }
  },
  // Position 5 — allāhi (ا ل ه) : nom défini génitif, objet de ʿinda
  {
    position: 5, word_key: 'alh', sense_chosen: 'Dieu',
    reason: "Nom défini masculin singulier au cas génitif, complément de la préposition ʿinda (« auprès de »). La forme allāh est le nom propre construit à partir de la racine ʾ-l-h avec l'article fusionné — « la divinité » devenue nom propre. Le génitif marque la rection par la préposition : « auprès de Dieu ». Le verset situe la comparaison de Jésus dans le rapport à Dieu lui-même, c'est-à-dire selon la mesure du locuteur divin.",
    analysis_axes: {
      concept_chosen: 'Divinité',
      concepts: {
        'Divinité': {
          status: 'retenu',
          senses: ['Dieu', 'divinité', 'dieu'],
          proof_ctx: "D'après les sources étymologiques, allāh est le nom propre de la divinité unique dans le Coran. La présence de l'article al- soudé indique que la divinité visée est la divinité par excellence, unique et reconnue. Ce sens est compatible avec le nom défini au génitif après la préposition ʿinda : la comparaison est rapportée à celui qui est à la fois le locuteur du verset et la mesure de référence."
        },
        'Adoration/Culte': {
          status: 'nul',
          senses: ['adorer', 'servir', 'se consacrer au culte'],
          proof_ctx: "Sens verbal de la racine — adorer, servir. Ne convient pas à un nom propre défini désignant une personne divine dans une construction prépositionnelle."
        },
        'Confusion/Perplexité': {
          status: 'nul',
          senses: ['être confus'],
          proof_ctx: "Sens isolé de la racine, hors sujet dans le contexte d'une comparaison rapportée à Dieu."
        },
        'Asservissement': {
          status: 'nul',
          senses: ['réduire en esclavage'],
          proof_ctx: "Sens isolé de la racine, hors sujet."
        }
      }
    }
  },
  // Position 7 — mathali (م ث ل) : nom génitif idafa, précédé de ka-
  {
    position: 7, word_key: 'mthl', sense_chosen: 'exemple',
    reason: "Nom masculin singulier au cas génitif, second membre d'une construction comparative introduite par la préposition ka (« comme »). Il est en idafa avec ʾādama — « l'exemple d'Adam ». Cette construction met en parallèle deux exemples : celui de Jésus (position 2) et celui d'Adam (ici). Le verset établit ainsi une analogie explicite entre les deux figures : ce qui vaut pour Adam vaut pour Jésus.",
    analysis_axes: {
      concept_chosen: 'Ressemblance/Exemple',
      concepts: {
        'Ressemblance/Exemple': {
          status: 'retenu',
          senses: ['exemple', 'ressembler', 'imiter', 'proverbe', 'parabole', 'semblable'],
          proof_ctx: "Même racine que position 2, même sens — ce qui sert de modèle ou d'illustration. La préposition comparative ka verrouille le sens d'exemple mis en parallèle : ka-mathali = « comme l'exemple de ». L'idafa avec ʾādama fait d'Adam la personne dont l'exemple est invoqué comme référence pour comprendre le cas de Jésus."
        },
        'Station/Présence': {
          status: 'nul',
          senses: ['se tenir debout', 'dresser'],
          proof_ctx: "Sens physique premier de la racine, incompatible avec une construction comparative ka-mathal."
        },
        'Sens isolé/Mutiler': {
          status: 'nul',
          senses: ['mutiler'],
          proof_ctx: "Sens concret isolé, hors sujet."
        }
      }
    }
  },
  // Position 8 — ʾādama (ء د م) : nom propre, diptote
  {
    position: 8, word_key: 'adm', sense_chosen: 'Adam',
    reason: "Nom propre masculin singulier, second terme de l'idafa avec mathali — génitif par position (le nom est diptote, sa désinence est la fatha au lieu de la kasra). Il désigne le premier humain selon le Coran, créé directement par Dieu. Le verset mobilise cette figure pour fournir le parallèle de Jésus : comme Adam a été créé sans père ni mère, Jésus a été créé sans père.",
    analysis_axes: {
      concept_chosen: 'Nom propre',
      concepts: {
        'Nom propre': {
          status: 'retenu',
          senses: ['Adam'],
          proof_ctx: "Nom propre du premier humain, attesté comme tel dans le Coran (cf. 2:31 et suivants). Ce sens est compatible avec le nom propre en idafa après mathali : l'exemple est celui d'Adam en tant que personne de référence."
        },
        'Surface/Peau': {
          status: 'nul',
          senses: ['peau', 'surface', 'brun'],
          proof_ctx: "Sens physique premier — la surface brune, la peau. D'après les sources étymologiques, la racine a donné son nom à Adam parce qu'il a été tiré de la terre (ʾadīm = surface de la terre). Ce sens éclaire l'étymologie mais n'est pas activé dans le verset, qui emploie Adam comme nom propre."
        },
        'Assaisonnement': {
          status: 'nul',
          senses: ['assaisonner'],
          proof_ctx: "Sens culinaire isolé, hors sujet."
        },
        'Sens isolé/Exemple': {
          status: 'nul',
          senses: ['exemple'],
          proof_ctx: "Sens rare et isolé, hors sujet."
        },
        'Sens isolé/Réconcilier': {
          status: 'nul',
          senses: ['réconcilier'],
          proof_ctx: "Sens rare et isolé, hors sujet."
        }
      }
    }
  },
  // Position 9 — khalaqahu (خ ل ق) : verbe accompli 3e masc sg actif + suffixe -hu
  {
    position: 9, word_key: 'xlq', sense_chosen: 'créer',
    reason: "Verbe à l'accompli, 3ᵉ personne du masculin singulier, voix active, forme I, avec le pronom suffixe -hu qui renvoie à ʾādama. Le sujet non exprimé est Dieu (anaphorique sur allāhi à la position 5). L'accompli fixe l'acte dans le passé révolu — la création d'Adam est présentée comme un événement achevé qui a eu lieu. Le suffixe -hu est objet direct : « Il le créa » (il = Dieu, le = Adam).",
    analysis_axes: {
      concept_chosen: 'Création/Production',
      concepts: {
        'Création/Production': {
          status: 'retenu',
          senses: ['créer', 'création', 'créature', 'façonner', 'nature', 'caractère'],
          proof_ctx: "D'après les sources étymologiques, khalaqa signifie faire exister ce qui n'existait pas, donner l'être. L'accompli actif avec objet direct personnel -hu et complément de matière (min turāb — de poussière) décrit un acte accompli de mise à l'existence à partir d'une matière première. Ce sens est compatible avec le verbe accompli actif : l'action de création est dirigée de Dieu vers Adam, achevée, avec origine matérielle précise."
        },
        'Sens isolé/Lisse': {
          status: 'nul',
          senses: ['lisse'],
          proof_ctx: "Sens physique isolé, hors sujet."
        },
        'Sens isolé/Mensonge': {
          status: 'nul',
          senses: ['mensonge'],
          proof_ctx: "Sens isolé, hors sujet."
        }
      }
    }
  },
  // Position 11 — turābin (ت ر ب) : nom indéfini génitif après min
  {
    position: 11, word_key: 'trb', sense_chosen: 'poussière',
    reason: "Nom masculin singulier indéfini au cas génitif, complément de la préposition min (« de »). L'indéfinition (tanwīn en -in) marque une matière brute, non particulière — « de poussière » au sens générique. Le verset précise ainsi la matière d'origine de la création d'Adam.",
    analysis_axes: {
      concept_chosen: 'Terre/Poussière',
      concepts: {
        'Terre/Poussière': {
          status: 'retenu',
          senses: ['poussière', 'terre', 'sol'],
          proof_ctx: "D'après les sources étymologiques, turāb désigne la poussière, la terre dans sa forme la plus fine et la plus humble. Le Coran lui-même répète la formule min turāb pour la création d'Adam et de ses descendants (cf. 22:5, 30:20, 35:11). Ce sens est compatible avec le nom indéfini après min marquant l'origine matérielle : la création part d'une matière minérale à l'état le plus élémentaire."
        },
        'Sens isolé/Être': {
          status: 'nul',
          senses: ['être pauvre'],
          proof_ctx: "Sens verbal isolé dérivé par extension, hors sujet dans un complément de matière."
        },
        'Anatomie/Poitrine': {
          status: 'nul',
          senses: ['cotes superieures', 'poitrine'],
          proof_ctx: "Sens anatomique lié à la racine (tarāʾib = os de la poitrine). Hors sujet ici : le mot est turābin, pas tarāʾib, et le contexte est celui de la matière de création."
        }
      }
    }
  },
  // Position 13 — qāla (ق و ل) : verbe accompli 3e masc sg actif
  {
    position: 13, word_key: 'qwl', sense_chosen: 'dire',
    reason: "Verbe à l'accompli, 3ᵉ personne du masculin singulier, voix active, forme I. Le sujet non exprimé est Dieu, toujours anaphorique sur allāhi. L'accompli fixe l'acte de parole dans le passé révolu, coordonné au verbe khalaqahu par thumma (« puis »), ce qui marque la succession narrative : création, puis parole. L'objet direct de qāla est introduit par la particule kun à la position 15 (« Sois »).",
    analysis_axes: {
      concept_chosen: 'Parole/Énonciation',
      concepts: {
        'Parole/Énonciation': {
          status: 'retenu',
          senses: ['dire', 'parler', 'parole', 'discours', 'affirmer'],
          proof_ctx: "D'après les sources étymologiques, qāla signifie produire des mots pour communiquer. Ici l'acte est introduit par thumma et suivi d'une citation directe (kun) : la structure est celle d'un discours rapporté. Ce sens est compatible avec le verbe accompli actif dont l'objet est une parole citée — Dieu parle, la parole sort de lui et prend effet."
        },
        'Pensée/Avis': {
          status: 'nul',
          senses: ['opinion', 'avis', 'doctrine'],
          proof_ctx: "Sens intérieur de jugement — qāla peut signifier penser/juger dans d'autres contextes, mais ici l'objet est une parole citée (kun), pas une opinion intérieure."
        },
        'Sens isolé/Puissance': {
          status: 'nul',
          senses: ['puissance'],
          proof_ctx: "Sens rare et isolé, hors sujet."
        },
        'Corps/Anatomie': {
          status: 'nul',
          senses: ['troupeau'],
          proof_ctx: "Sens concret isolé de la racine, hors sujet."
        }
      }
    }
  },
  // Position 15 — kun (ك و ن) : verbe impératif 2e masc sg
  {
    position: 15, word_key: 'kwn', sense_chosen: 'être (verbe incomplet)',
    reason: "Verbe à l'impératif, 2ᵉ personne du masculin singulier, voix active, forme I. L'impératif est adressé à Adam (ou au créé en général) par le locuteur divin : « Sois ». Kāna/yakūnu est le verbe d'existence par excellence — à l'impératif, il commande l'entrée dans l'existence. La forme est la plus courte possible (kun, deux lettres), ce qui redouble son caractère performatif : la parole divine ne demande aucun effort, elle énonce et la réalité advient.",
    analysis_axes: {
      concept_chosen: 'Être/Existence',
      concepts: {
        'Être/Existence': {
          status: 'retenu',
          senses: ["être (verbe incomplet)", "venir à l'existence"],
          proof_ctx: "D'après les sources étymologiques, kāna exprime l'être dans ses différentes facettes : être, exister, devenir. L'impératif kun commande l'existence — venir à l'être. Ce sens est compatible avec le verbe à l'impératif adressé à une créature qui n'existait pas encore : l'ordre fait passer du non-être à l'être."
        },
        'Humilité/Soumission': {
          status: 'nul',
          senses: ['être humble soumis'],
          proof_ctx: "Sens verbal de forme X (istakāna) — se soumettre. L'impératif simple kun à la forme I n'active pas ce sens."
        },
        'Lieu/État': {
          status: 'nul',
          senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'],
          proof_ctx: "Sens nominal ou spatial de la racine (makān = lieu). Hors sujet : l'impératif kun ici commande l'existence, non un lieu ou un état particulier."
        }
      }
    }
  },
  // Position 16 — fayakūnu (ك و ن) : verbe inaccompli 3e masc sg actif
  {
    position: 16, word_key: 'kwn', sense_chosen: 'être (verbe incomplet)',
    reason: "Verbe à l'inaccompli, 3ᵉ personne du masculin singulier, voix active, forme I, précédé du fa de conséquence qui enchaîne directement sur kun. L'inaccompli ne marque pas ici un futur ni un présent ponctuel, mais la présentation de l'advenue comme un procès qui se déploie à la suite immédiate de l'ordre. La construction kun fa-yakūn est une formule fixe du Coran qui dit l'efficience immédiate de la parole divine : l'ordre donné et la réalité qui s'ensuit sont présentés sans rupture.",
    analysis_axes: {
      concept_chosen: 'Être/Existence',
      concepts: {
        'Être/Existence': {
          status: 'retenu',
          senses: ["être (verbe incomplet)", "venir à l'existence"],
          proof_ctx: "Même racine et même sens que la position 15 — mais à l'inaccompli, il décrit l'advenue à l'existence comme procès qui se déploie. Ce sens est compatible avec le verbe inaccompli précédé du fa de conséquence : la parole kun a pour conséquence directe l'entrée dans l'être décrite par yakūnu. La formule est répétée plusieurs fois dans le Coran (2:117, 3:47, 6:73, 16:40, 19:35, 36:82, 40:68) avec toujours la même structure performative."
        },
        'Humilité/Soumission': {
          status: 'nul',
          senses: ['être humble soumis'],
          proof_ctx: "Sens d'une forme dérivée, pas activé dans la forme I simple."
        },
        'Lieu/État': {
          status: 'nul',
          senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'],
          proof_ctx: "Sens nominal ou spatial, hors sujet dans la formule performative d'existence."
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 4 — TRADUCTION
// ═══════════════════════════════════════════════════════════════════

const FULL_TRANSLATION_HAMIDULLAH =
  "Pour Allah, Jésus est comme Adam qu'Il créa de poussière, puis Il lui dit «Sois»: et il fut.";

const TRANSLATION_ARAB =
  "Certes, l'exemple de Jésus auprès de Dieu est comme l'exemple d'Adam : Il le créa de poussière, puis Il lui dit « Sois » et il est.";

const TRANSLATION_MEDITATIONAL =
  "Le récit qui précède a montré la naissance de Jésus sans père, ses miracles, son élévation. Le locuteur divin en livre maintenant la clé de lecture : la situation de Jésus, rapportée à Dieu, est comme celle d'Adam. Adam aussi a été créé sans père — directement de la poussière, par la seule parole « Sois ». L'analogie trace une limite : Jésus n'est pas plus singulier qu'Adam dans son origine, tous deux viennent d'un acte créateur unique.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§
Le verset 59 fait le bilan du récit qui précède (3:45-58) en posant une comparaison capitale. Les versets 45-58 ont raconté la naissance de Jésus sans père, sa mission, ses miracles, son élévation, et le sort de ses partisans et de ceux qui l'ont renié. Le verset 59 donne la clé : le cas de Jésus est semblable au cas d'Adam. Adam aussi a été créé sans père ni mère — directement, par une parole. L'analogie trace donc une frontière contre l'idée que la naissance singulière de Jésus ferait de lui un être d'une autre nature que la nôtre.

**Inna** (certes) est une particule d'emphase qui met en valeur ce qui suit et introduit la proposition comme une affirmation forte. Elle demande l'accusatif sur le nom qui la suit directement.

**Mathala** (exemple) est un nom masculin singulier à l'accusatif, complément de inna, et premier terme d'une annexion (idafa) avec le nom suivant ʿīsā — « l'exemple de Jésus ». La racine م ث ل désigne d'abord la ressemblance : mathal est ce qui se tient en parallèle d'une autre réalité pour l'éclairer. Ce n'est pas un exemple moral (type à imiter) ni une parabole abstraite, c'est la mise en parallèle de deux cas qui se ressemblent.

**ʿĪsā** (Jésus) est un nom propre, second terme de l'idafa avec mathala. Le nom est diptote (il ne prend pas de tanwīn) et reste tel quel, mais la position grammaticale exige le cas génitif. « L'exemple de Jésus » — c'est sa situation qui est mise en avant.

**ʿInda** (auprès de) est une préposition qui indique la proximité relationnelle — être auprès de quelqu'un, sous sa considération. Elle introduit le point de vue depuis lequel la comparaison est faite : ce n'est pas une comparaison humaine, c'est une comparaison rapportée au regard de Dieu.

**Allāhi** (Dieu) est un nom défini masculin singulier au cas génitif, complément de ʿinda. Il désigne le locuteur divin lui-même, sous le regard duquel la comparaison est posée.

**Ka-mathali** (comme l'exemple de) est la préposition ka (comme) préfixée à un second mathali au cas génitif, qui est à son tour premier terme d'une idafa avec ʾādama. La particule ka est le marqueur standard de la comparaison directe. Le verset pose une équation : le cas de Jésus = le cas d'Adam.

**ʾĀdama** (Adam) est un nom propre, second terme de l'idafa avec mathali. Il est diptote (sa désinence est la fatha au lieu de la kasra malgré le cas génitif). Adam est ici convoqué comme figure de référence : le premier humain, créé directement par Dieu.

**Khalaqahu** (Il le créa) est un verbe à l'accompli, à la 3ᵉ personne du masculin singulier, à la voix active, à la forme I, avec le pronom suffixe -hu qui renvoie à Adam. Le sujet implicite est Dieu (anaphorique sur allāhi). L'accompli fixe l'acte dans le passé révolu. La racine خ ل ق signifie faire exister ce qui n'existait pas — la création est un acte dirigé du créateur vers la créature.

**Min turābin** (de poussière) est la préposition min (de, à partir de) suivie d'un nom indéfini au cas génitif. Min marque ici l'origine matérielle : à partir de quoi la création a été faite. Turāb désigne la poussière, la terre à l'état le plus simple et le plus humble. L'indéfinition (tanwīn en -in) marque une matière générique, non particulière.

**Thumma** (puis) est une particule de coordination qui marque la succession avec un intervalle. Elle enchaîne khalaqahu et qāla en marquant l'ordre narratif : d'abord la création, puis la parole.

**Qāla** (Il dit) est un verbe à l'accompli, 3ᵉ personne du masculin singulier, voix active, forme I. Sujet implicite Dieu. La parole rapportée qui suit (kun) est l'objet direct du verbe.

**Lahu** (à lui) est la préposition la (à, pour) avec le pronom suffixe -hu qui renvoie à la créature (Adam, et par extension le cas de Jésus). « Il lui dit » — la parole est adressée directement à la créature.

**Kun** (Sois) est un verbe à l'impératif, 2ᵉ personne du masculin singulier, voix active, forme I. La racine ك و ن est le verbe fondamental d'existence — kāna/yakūnu = être, exister, devenir. À l'impératif, il commande l'entrée dans l'existence. La forme kun est la plus courte possible, redoublant l'aspect performatif : la parole divine ne demande aucun effort.

**Fayakūnu** (et il est) est le verbe inaccompli de la même racine, précédé du fa de conséquence qui enchaîne directement sur kun. L'inaccompli ne marque pas ici un futur précis ni un présent ponctuel, mais la présentation de l'advenue comme un procès qui se déploie à la suite immédiate de l'ordre. La formule kun fa-yakūn est répétée plusieurs fois dans le Coran (2:117, 3:47, 6:73, 16:40, 19:35, 36:82, 40:68) : elle dit l'efficience immédiate de la parole divine, sans rupture entre l'ordre donné et la réalité qui en découle.

§JUSTIFICATION§
**exemple (mathala, mathali)** — Le sens retenu est « Ressemblance/Exemple ». Le mot « exemple » est choisi parce qu'il rend la mise en parallèle de deux cas pour les éclairer l'un par l'autre. L'alternative « parabole » est écartée parce qu'elle suggère un récit fictif à valeur morale, alors que le verset pose une comparaison entre deux figures historiques réelles. « Similitude » et « comparaison » sont possibles mais plus abstraits — « exemple » rend mieux l'idée d'un cas concret présenté comme référence. « Semblable » est écarté parce qu'il est adjectif, alors que mathal est un nom qui désigne l'acte même de mise en parallèle. Le sens « se tenir debout » (sens physique premier) est écarté parce qu'il est incompatible avec l'idafa qui fait de mathala le premier terme d'un composé avec un nom de personne.

**Jésus (ʿīsā)** — Le sens retenu est « Prophète/Messie ». Nom propre sans alternative dans le contexte coranique — les versets précédents (3:45-57) sont entièrement consacrés à son histoire, et le sens zoologique ou chromatique de la racine ع ي س (couleur des chameaux, gazelle, sauterelle femelle) est sans rapport avec la personne désignée.

**Dieu (allāh)** — Le sens retenu est « Divinité ». Le mot « Dieu » est choisi parce qu'il est le terme français courant pour désigner la divinité unique. Conformément à la convention de la pipeline, Allah est rendu par « Dieu ».

**Adam (ʾādam)** — Le sens retenu est « Nom propre ». Nom propre du premier humain selon le Coran. Le sens physique premier de la racine ء د م (peau, surface brune) éclaire peut-être l'étymologie — Adam a été nommé parce qu'il a été tiré de la terre — mais le verset l'emploie comme nom propre, pas comme description physique.

**créa (khalaqahu)** — Le sens retenu est « Création/Production ». Le mot « créer » est choisi parce qu'il rend directement l'acte de faire exister ce qui n'existait pas. L'alternative « façonner » est écartée parce qu'elle suggère un travail sur une matière déjà existante avec intention esthétique — or khalaqa à la forme I simple dit le passage à l'existence à partir de la matière. « Produire » est trop neutre et ne rend pas la dimension d'origination. « Former » est trop technique. Le sens « caractère / nature » (khuluq) est écarté parce qu'il nomme le résultat (la disposition innée), alors que le verbe à l'accompli actif avec objet direct décrit l'acte.

**poussière (turāb)** — Le sens retenu est « Terre/Poussière ». Le mot « poussière » est choisi parce qu'il rend la matière à l'état le plus élémentaire et le plus humble, ce qui correspond à la nuance de turāb par rapport à ʾarḍ (terre en tant que sol étendu) ou ṭīn (argile). « Terre » serait possible mais plus général. « Sol » serait trompeur car il suggère l'étendue du terrain. « Glaise » ou « argile » désigne une autre matière (ṭīn dans 6:2, 7:12, 23:12). Le sens anatomique (tarāʾib = côtes de la poitrine) est écarté : le mot ici est turābin, pas tarāʾib.

**dit (qāla)** — Le sens retenu est « Parole/Énonciation ». Le mot « dit » est choisi parce qu'il rend l'acte de produire une parole. L'alternative « prononça » est plus solennelle mais n'apporte rien. « Proféra » est trop rare. Le sens « opinion / avis » est écarté parce que l'objet du verbe est ici une citation directe (kun), pas un jugement intérieur.

**Sois (kun)** — Le sens retenu est « Être/Existence ». Le mot « sois » est l'impératif du verbe « être » en français, qui rend le plus exactement la racine ك و ن à l'impératif. « Viens à l'existence » serait une périphrase explicative mais alourdit la formule. Le sens « soumets-toi » (istakāna, forme X) est écarté parce qu'il exige une forme verbale dérivée que le texte n'emploie pas.

**il est (fayakūnu)** — Le sens retenu est « Être/Existence ». Le choix de « il est » (présent) plutôt que « il fut » (passé) rend l'inaccompli arabe — qui présente l'advenue comme procès en déploiement, pas comme événement ponctuel achevé. La formule kun fa-yakūn est performative et hors du temps ordinaire : la parole divine n'a pas à attendre que la chose soit pour qu'elle soit. Le passé simple « il fut » (traduction Hamidullah) fige l'advenue dans le révolu, alors que le texte dit yakūnu (imparfait/présent d'advenue), ce qui suggère plutôt que l'advenue est concomitante à la parole. « Et il est » rend mieux l'inaccompli performatif.

§CRITIQUE§
**exemple vs absence du mot** — Hamidullah traduit « Pour Allah, Jésus est comme Adam qu'Il créa de poussière ». Cette traduction fait disparaître le mot mathal qui apparaît pourtant deux fois dans le texte arabe (mathala ʿīsā ... kamathali ʾādama). Le mot arabe est essentiel car il institue la structure de l'analogie : le verset ne dit pas « Jésus est comme Adam », il dit « l'exemple de Jésus est comme l'exemple d'Adam ». C'est le cas qui est comparé, pas la personne. Cette nuance change la portée du verset : l'analogie porte sur le mode de venue à l'existence, pas sur l'identité des deux figures. En élidant mathal, Hamidullah simplifie une structure qui est au cœur du propos.

**auprès de Dieu vs Pour Allah** — Hamidullah traduit ʿinda allāhi par « Pour Allah ». La préposition ʿinda dit la proximité relationnelle — être auprès de quelqu'un, sous sa considération, dans sa sphère. « Pour » suggère un destinataire ou un bénéficiaire, ce qui change le sens : « Pour Dieu, Jésus est comme Adam » laisse entendre que la comparaison est faite à l'intention de Dieu, alors que le texte dit qu'elle est faite selon son point de vue, « auprès de lui ». La nuance est celle de la mesure : le verset propose une lecture du cas de Jésus selon la mesure divine.

**et il est vs et il fut** — Hamidullah traduit fayakūnu par « et il fut ». Le texte arabe emploie un inaccompli (yakūnu), pas un accompli (kāna). L'inaccompli ne dit pas un événement passé fixé dans le révolu — il dit un procès qui se déploie. Le choix du passé simple « il fut » fige la formule dans le temps ordinaire, alors que kun fa-yakūn est une formule performative hors temps : la parole divine prononce et la réalité advient, sans intervalle. Traduire par « il est » respecte mieux la structure performative : la parole et l'advenue sont concomitantes.`;

const SEGMENTS = [
  { fr: 'certes', pos: null, phon: 'inna', arabic: 'إِنَّ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
  { fr: "l'exemple de", pos: 'nom', phon: 'mathala', arabic: 'مَثَلَ', word_key: 'mthl', is_particle: false, sense_retenu: 'exemple', position: 2 },
  { fr: 'Jésus', pos: 'nom', phon: 'ʿīsā', arabic: 'عِيسَىٰ', word_key: 'eys', is_particle: false, sense_retenu: 'Jésus', position: 3 },
  { fr: 'auprès de', pos: null, phon: 'ʿinda', arabic: 'عِندَ', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
  { fr: 'Dieu', pos: 'nom', phon: 'allāhi', arabic: 'ٱللَّهِ', word_key: 'alh', is_particle: false, sense_retenu: 'Dieu', position: 5 },
  { fr: "comme", pos: null, phon: 'ka', arabic: 'كَ', word_key: null, is_particle: true, sense_retenu: null, position: 6 },
  { fr: "l'exemple d'", pos: 'nom', phon: 'mathali', arabic: 'مَثَلِ', word_key: 'mthl', is_particle: false, sense_retenu: 'exemple', position: 7 },
  { fr: 'Adam', pos: 'nom', phon: 'ʾādama', arabic: 'ءَادَمَ', word_key: 'adm', is_particle: false, sense_retenu: 'Adam', position: 8 },
  { fr: 'Il le créa', pos: 'verbe', phon: 'khalaqahu', arabic: 'خَلَقَهُۥ', word_key: 'xlq', is_particle: false, sense_retenu: 'créer', position: 9 },
  { fr: 'de', pos: null, phon: 'min', arabic: 'مِن', word_key: null, is_particle: true, sense_retenu: null, position: 10 },
  { fr: 'poussière', pos: 'nom', phon: 'turābin', arabic: 'تُرَابٍ', word_key: 'trb', is_particle: false, sense_retenu: 'poussière', position: 11 },
  { fr: 'puis', pos: null, phon: 'thumma', arabic: 'ثُمَّ', word_key: null, is_particle: true, sense_retenu: null, position: 12 },
  { fr: 'Il dit', pos: 'verbe', phon: 'qāla', arabic: 'قَالَ', word_key: 'qwl', is_particle: false, sense_retenu: 'dire', position: 13 },
  { fr: 'à lui', pos: null, phon: 'lahu', arabic: 'لَهُۥ', word_key: null, is_particle: true, sense_retenu: null, position: 14 },
  { fr: 'Sois', pos: 'verbe', phon: 'kun', arabic: 'كُن', word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)', position: 15 },
  { fr: 'et il est', pos: 'verbe', phon: 'fayakūnu', arabic: 'فَيَكُونُ', word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)', position: 16 }
];

// ═══════════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════════

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V59 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // Étape 2 : AUCUN enrichissement - toutes racines ≥ 5 sens INTOUCHABLES
  console.log('\n═══ ÉTAPE 2 — Vérification racines (INTOUCHABLES) ═══');
  const rootsCheck = [
    { aid: 347, key: 'mthl', name: 'mathal', min: 5 },
    { aid: 690, key: 'eys',  name: 'ʿīsā',   min: 5 },
    { aid: 250, key: 'alh',  name: 'allāh',  min: 5 },
    { aid: 416, key: 'adm',  name: 'ʾādam',  min: 5 },
    { aid: 344, key: 'xlq',  name: 'khalaqa',min: 5 },
    { aid: 1156,key: 'trb',  name: 'turāb',  min: 5 },
    { aid: 307, key: 'qwl',  name: 'qāla',   min: 5 },
    { aid: 2577,key: 'kwn',  name: 'kāna',   min: 5 }
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
  console.log('║              PIPELINE S3:V59 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error(e); process.exit(1); });
