// Pipeline S3:V56 — Étapes 3 (VWA) + 4 (Traduction) — verse_id=349, va_id=710
// Texte: فَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَأُعَذِّبُهُمْ عَذَابًا شَدِيدًا فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ وَمَا لَهُم مِّن نَّـٰصِرِينَ
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 349;
const VA_ID = 710;

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 3 — VWA (Verse Word Analyses)
// ═══════════════════════════════════════════════════════════════════

const VWA_ROWS = [
  // Position 4 — kafarū (ك ف ر) — verbe accompli, 3PM, actif
  {
    position: 4, word_key: 'kfr', sense_chosen: 'rejeter',
    reason: "Verbe accompli, 3ᵉ personne du masculin pluriel, actif. Forme I simple. Le sujet (pronom relatif al-ladhīna qui précède) désigne ceux qui ont rejeté — action passée achevée. Le contexte V55 a présenté « ceux qui ont dénié » comme groupe opposé à ceux qui suivent Jésus ; le V56 revient sur eux pour annoncer leur sort.",
    analysis_axes: {
      concept_chosen: 'Rejet/Ingratitude',
      concepts: {
        'Rejet/Ingratitude': {
          status: 'retenu',
          senses: ['nier', 'être ingrat', 'renier un bienfait', 'rejeter', 'mécréant'],
          proof_ctx: "Le sens retenu est le mouvement par lequel une personne repousse activement un signe qui lui est adressé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le kufr comporte la nuance d'écarter un bienfait après l'avoir reçu. Le verset 55 a mentionné Jésus comme messager porteur de signes clairs : ceux du 4ᵉ mot sont ceux qui ont rejeté ces signes. Ce sens est compatible avec le verbe accompli actif : le rejet est un acte directionnel qui sort de la personne et atteint ce qu'elle refuse."
        },
        'Couverture/Dissimulation': {
          status: 'probable',
          senses: ['couvrir', 'cacher'],
          proof_ctx: "Le sens premier de la racine est matériel : couvrir, recouvrir. Il peut éclairer métaphoriquement le rejet (on recouvre ce qu'on ne veut pas voir), mais il reste trop physique pour rendre compte directement de l'attitude décrite, qui n'est pas une dissimulation mais un refus affiché."
        },
        'Expiation/Réparation': {
          status: 'nul',
          senses: ['expier', 'effacer les péchés'],
          proof_ctx: "Sens opposé à celui du verset : l'expiation suppose une réparation. Hors sujet ici."
        },
        'Sens isolé/Cultivateur': {
          status: 'nul', senses: ['cultivateur'],
          proof_ctx: "Sens isolé, sans rapport avec le contexte."
        },
        'Sens isolé/Goudron': {
          status: 'nul', senses: ['goudron'],
          proof_ctx: "Sens matériel isolé, hors sujet."
        },
        'Sens isolé/Village': {
          status: 'nul', senses: ['village'],
          proof_ctx: "Sens isolé, sans rapport."
        }
      }
    }
  },

  // Position 6 — uʿadhdhibuhum (ع ذ ب) — verbe inaccompli, 1ère sg, forme II, actif
  {
    position: 6, word_key: 'edb', sense_chosen: 'châtier',
    reason: "Verbe inaccompli forme II, 1ʳᵉ personne du singulier, avec pronom suffixe -hum. La forme II intensifie et rend transitif : celui qui parle (Dieu) applique l'action à un objet extérieur (les rejeteurs). L'inaccompli exprime une action qui se produira ou qui est en cours habituel.",
    analysis_axes: {
      concept_chosen: 'Châtiment/Punition',
      concepts: {
        'Châtiment/Punition': {
          status: 'retenu',
          senses: ['punir', 'châtier', 'tourmenter', 'châtiment'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II ʿadhdhaba désigne l'acte d'infliger une conséquence pénible à quelqu'un en raison de son acte. Le verset introduit par fa-ammā « quant à... » présente une conséquence logique du rejet mentionné au mot précédent — le sens de châtiment est directement compatible avec cette structure conditionnelle. C'est un acte qui sort du sujet (Dieu) et atteint l'objet (les rejeteurs)."
        },
        'Douceur': {
          status: 'nul',
          senses: ['doux', 'sucré', 'eau douce', 'agréable'],
          proof_ctx: "Sens opposé au contexte du verset : la phrase annonce une conséquence pénible."
        },
        'Abstention': {
          status: 'peu_probable',
          senses: ["s'abstenir", 'quitter'],
          proof_ctx: "Sens attesté mais inadapté à la forme II transitive avec pronom suffixe : on ne fait pas s'abstenir quelqu'un dans ce contexte, on lui inflige une action."
        },
        'Eau/Liquide': {
          status: 'nul', senses: ['poussières flottant sur l\'eau'],
          proof_ctx: "Sens physique isolé, sans rapport."
        },
        'Végétation/Plante': {
          status: 'nul', senses: ['arbre vénéneux'],
          proof_ctx: "Sens isolé végétal, hors sujet."
        }
      }
    }
  },

  // Position 7 — ʿadhāban (ع ذ ب) — nom accusatif, indéfini
  {
    position: 7, word_key: 'edb', sense_chosen: 'châtiment',
    reason: "Nom à l'accusatif, indéfini. C'est l'objet interne (mafʿūl muṭlaq) du verbe ʿadhdhaba qui précède : la construction en arabe renforce le verbe par son nom d'action. ʿadhāban = la réalité pénible elle-même, désignée comme chose subie.",
    analysis_axes: {
      concept_chosen: 'Châtiment/Punition',
      concepts: {
        'Châtiment/Punition': {
          status: 'retenu',
          senses: ['punir', 'châtier', 'tourmenter', 'châtiment'],
          proof_ctx: "Même racine que le verbe qui précède. D'après les sources étymologiques, le nom ʿadhāb désigne la conséquence pénible prise comme réalité nommée. La forme accusative indéfinie sert à nommer la chose subie, et l'adjectif qui suit (shadīdan) en précise l'intensité."
        },
        'Douceur': {
          status: 'nul',
          senses: ['doux', 'sucré', 'eau douce', 'agréable'],
          proof_ctx: "Sens opposé."
        },
        'Abstention': {
          status: 'nul', senses: ["s'abstenir", 'quitter'],
          proof_ctx: "Sens sans rapport avec le nom accusatif désignant une réalité subie."
        },
        'Eau/Liquide': {
          status: 'nul', senses: ['poussières flottant sur l\'eau'],
          proof_ctx: "Sens isolé."
        },
        'Végétation/Plante': {
          status: 'nul', senses: ['arbre vénéneux'],
          proof_ctx: "Sens isolé."
        }
      }
    }
  },

  // Position 8 — shadīdan (ش د د) — adjectif accusatif, qualifiant ʿadhāban
  {
    position: 8, word_key: 'shdd', sense_chosen: 'intense',
    reason: "Adjectif à l'accusatif, masculin singulier, indéfini. Il s'accorde avec ʿadhāban qu'il qualifie. La forme faʿīl décrit une qualité pleine et continue du nom auquel elle est rattachée.",
    analysis_axes: {
      concept_chosen: 'Intensité/Sévérité',
      concepts: {
        'Intensité/Sévérité': {
          status: 'retenu',
          senses: ['intense', 'sévère', 'rigoureux'],
          proof_ctx: "Le sens retenu qualifie une réalité par son haut degré. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), shadīd désigne ce qui est poussé au maximum de sa nature — ici, le châtiment est décrit par sa pleine force. L'adjectif est compatible avec la structure accolée au nom : la qualité d'intensité est un état mesurable de la chose qualifiée."
        },
        'Force/Solidité': {
          status: 'probable',
          senses: ['lier fortement', 'affermir'],
          proof_ctx: "Sens plus concret de la racine — nouer, affermir. Il éclaire l'étymologie mais ne s'applique pas directement à un nom abstrait comme ʿadhāb : on ne « lie » pas un châtiment, on le rend intense."
        },
        'Attaque/Assaut': {
          status: 'peu_probable',
          senses: ['charger (en bataille)', 'assaillir'],
          proof_ctx: "Sens verbal d'action ponctuelle. Ne convient pas à l'adjectif qualifiant un nom : ʿadhāb n'est pas une charge militaire."
        },
        'Course/Hâte': {
          status: 'nul',
          senses: ['courir', 'se hâter'],
          proof_ctx: "Sens d'action physique, sans rapport avec un adjectif qualificatif."
        },
        'Avarice/Tenacité': {
          status: 'peu_probable',
          senses: ['avare'],
          proof_ctx: "Sens appliqué aux personnes qui retiennent leurs biens. Ne convient pas à un châtiment."
        },
        'Maturité/Plénitude': {
          status: 'nul',
          senses: ['âge de force', 'maturité'],
          proof_ctx: "Sens nominal désignant une période de la vie. Hors sujet ici."
        },
        'Force': {
          status: 'nul',
          senses: ['serrer'],
          proof_ctx: "Sens verbal concret, sans rapport avec l'adjectif qualifiant un nom abstrait."
        }
      }
    }
  },

  // Position 10 — ad-dunyā (د ن ي) — nom défini, féminin singulier
  {
    position: 10, word_key: 'dny', sense_chosen: 'la vie proche (dunyā)',
    reason: "Nom défini féminin singulier au cas génitif (précédé de fī). C'est une forme substantive consacrée dans le Coran pour désigner la vie présente par opposition à al-ākhirah. Le défini al- marque une réalité identifiée.",
    analysis_axes: {
      concept_chosen: 'Proximité/Bassesse',
      concepts: {
        'Proximité/Bassesse': {
          status: 'retenu',
          senses: ['bas', 'proche', 'ce monde', 'le plus proche', 'la vie proche (dunyā)', 'rapprocher', 'inférieur'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-dunyā désigne la vie proche, immédiate, par opposition à al-ākhirah. Le nom défini isole une réalité identifiée — celle que vit l'être humain avant la suite. Le couple fī l-dunyā wa-l-ākhirah forme une structure binaire récurrente dans le Coran qui embrasse les deux temps de l'existence."
        },
        'Abaissement/Humiliation': {
          status: 'peu_probable',
          senses: ['abaisser', 'vil'],
          proof_ctx: "Sens verbal actif issu de la même racine. Ne convient pas au nom défini consacré qui désigne un temps-lieu, non un acte d'abaissement."
        }
      }
    }
  },

  // Position 12 — al-ʾākhirah (أ خ ر) — nom défini, féminin singulier
  {
    position: 12, word_key: 'akhr', sense_chosen: 'al-ākhirah',
    reason: "Nom défini féminin singulier au cas génitif, coordonné à ad-dunyā par wa-. Forme substantive consacrée dans le Coran qui désigne la vie qui vient après. Le défini al- marque une réalité nommée et identifiée.",
    analysis_axes: {
      concept_chosen: 'Monde à venir/Vie dernière',
      concepts: {
        'Monde à venir/Vie dernière': {
          status: 'retenu',
          senses: ['al-ākhirah', 'la vie dernière'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-ākhirah est la forme substantive féminine définie qui désigne la demeure dernière, la vie qui vient après celle-ci. Elle forme avec al-dunyā un couple binaire identifié. Le contexte V55 a mentionné yawm al-qiyāmah (le jour du redressement) : al-ākhirah désigne l'état d'existence qui s'étend à partir de ce moment."
        },
        'Altérité/Délai': {
          status: 'probable',
          senses: ['autre', 'dernier', 'retarder', 'au-delà'],
          proof_ctx: "Le concept parent de la racine : être autre, venir après. Il éclaire l'étymologie du sens retenu mais ne suffit pas seul — c'est la forme féminine définie al-ākhirah qui fixe le sens technique de vie dernière."
        },
        'Postériorité/Fin': {
          status: 'peu_probable',
          senses: ["fin d'une durée", 'arrière (d\'une chose)'],
          proof_ctx: "Sens positionnel ou temporel ponctuel. La forme définie al-ākhirah ne désigne pas la fin d'une durée mais la vie qui suit."
        },
        'Délai/Report': {
          status: 'nul',
          senses: ['différer', 'reculer', 'accorder un délai'],
          proof_ctx: "Sens verbal d'action. Ne convient pas au nom défini désignant un lieu-temps."
        },
        'Autre/Alternative': {
          status: 'peu_probable',
          senses: ['un parmi deux'],
          proof_ctx: "Sens pronominal d'alternance dans une paire. Le nom défini féminin al-ākhirah n'est pas employé ici comme alternative générique mais comme nom propre de la vie suivante."
        }
      }
    }
  },

  // Position 17 — nāṣirīn (ن ص ر) — participe actif pluriel, indéfini, majrūr
  {
    position: 17, word_key: 'nsr', sense_chosen: 'secourir',
    reason: "Participe actif masculin pluriel, indéfini, au cas génitif (précédé de min). La phrase est précédée de la négation mā lahum (« pas à eux »), ce qui donne : « il n'y a pas à eux, parmi des secoureurs ». Le participe actif désigne des agents qui font activement l'action — des aides qui viendraient porter secours.",
    analysis_axes: {
      concept_chosen: 'Secours/Victoire',
      concepts: {
        'Secours/Victoire': {
          status: 'retenu',
          senses: ['secourir', 'aider', 'victoire', 'défendre'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), naṣara désigne l'acte de venir en aide à celui qui est dans une situation difficile, de le secourir contre ce qui le menace. Le participe actif nāṣir désigne l'agent qui porte ce secours. Le contexte immédiat décrit les rejeteurs face à une conséquence pénible : la négation absolue « il n'y a pas à eux parmi des secoureurs » affirme qu'aucun agent ne viendra les en tirer. Ce sens est compatible avec le participe actif : il désigne un acte extérieur dirigé vers celui qui en a besoin."
        },
        'Alliance/Soutien': {
          status: 'probable',
          senses: ['partisan'],
          proof_ctx: "Sens dérivé — celui qui prend parti pour quelqu'un. Il éclaire le sens retenu mais rend moins bien l'acte de secours concret face à une situation menaçante. Dans le contexte de non-assistance, c'est le geste de venir tirer d'affaire qui importe, plus que l'adhésion de principe."
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 4 — Traduction + segments + démarche
// ═══════════════════════════════════════════════════════════════════

const FULL_TRANSLATION_HAMIDULLAH =
  "Quant à ceux qui n'ont pas cru, Je les châtierai d'un dur châtiment, ici-bas tout comme dans l'au-delà; et pour eux, pas de secoureurs.";

const TRANSLATION_ARAB =
  "Quant à ceux qui ont rejeté, Je les châtierai d'un châtiment intense dans la vie proche et dans la vie dernière, et aucun secoureur ne sera à eux.";

const TRANSLATION_MEDITATIONAL =
  "Pour ceux qui écartent le signe reçu, la conséquence les atteint pleinement, dans le temps qu'ils vivent comme dans celui qui vient ; et nul ne viendra les en tirer.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§
Le verset 56 continue directement le verset 55 : après avoir annoncé à Jésus qu'Il élèverait et purifierait, le texte reprend le destin de ceux qui ont rejeté. La particule initiale fa-ammā introduit une conséquence logique, comme dire « quant à ceux-là ».

**Alladhīna** (ceux qui) est un pronom relatif masculin pluriel. Il introduit la proposition qui désigne le groupe visé.

**Kafarū** (ont rejeté) est un verbe accompli à la 3ᵉ personne du masculin pluriel, à la voix active et à la forme I. L'accompli dit que l'action est achevée — le rejet a déjà eu lieu. La racine k-f-r signifie d'abord couvrir physiquement, puis, par extension, repousser un signe ou un bienfait qu'on a reçu.

**Uʿadhdhibuhum** (Je les châtierai) est un verbe inaccompli à la 1ʳᵉ personne du singulier, à la forme II, avec le pronom suffixe -hum. La forme II intensifie l'action et la rend transitive — Je leur applique l'action. L'inaccompli indique ici un fait qui se produira ou qui est la règle habituelle. Le fa- au début reprend la particule fa-ammā : c'est la conséquence du rejet qui vient d'être énoncé.

**ʿAdhāban** (d'un châtiment) est un nom à l'accusatif, indéfini. C'est ce que la grammaire arabe appelle un mafʿūl muṭlaq, un objet interne : on accole au verbe son nom d'action pour le renforcer. Littéralement : Je les châtie d'un châtiment. La racine ʿ-dh-b peut désigner aussi ce qui est doux (eau douce), mais ici le contexte du verbe forme II fixe le sens de conséquence pénible.

**Shadīdan** (intense) est un adjectif à l'accusatif, masculin singulier, indéfini. Il s'accorde avec ʿadhāban qu'il qualifie. La forme faʿīl décrit une qualité pleine de la chose. La racine sh-d-d signifie d'abord lier ou nouer fortement — le dérivé shadīd désigne ce qui est poussé à son haut degré, dur, intense.

**Fī** (dans) est une préposition qui indique le lieu ou le temps à l'intérieur duquel se situe une réalité.

**Ad-dunyā** (la vie proche) est un nom défini féminin singulier au génitif. C'est la forme substantive consacrée dans le Coran pour la vie présente. La racine d-n-y signifie d'abord « être proche, être inférieur » — la dunyā est la vie qui est proche de nous, celle que nous vivons immédiatement.

**Al-ākhirah** (la vie dernière) est un nom défini féminin singulier au génitif, coordonné à ad-dunyā par la conjonction wa-. La racine a-kh-r signifie d'abord « venir après » — al-ākhirah est la forme substantive consacrée pour la vie qui vient après celle-ci, la demeure définitive.

**Mā lahum min nāṣirīn** (et aucun secoureur ne sera à eux) — le mā est ici une négation absolue, et min sert à généraliser la négation : il n'y a à eux absolument aucun secoureur. **Nāṣirīn** (secoureurs) est un participe actif masculin pluriel, indéfini, au cas génitif après min. Le participe actif désigne les agents qui font activement l'action. La racine n-ṣ-r signifie venir en aide à celui qui est en difficulté.

§JUSTIFICATION§
**rejeter** — Le sens retenu est « Rejet/Ingratitude ». Le mot « rejeter » est choisi parce qu'il rend le mouvement par lequel une personne écarte activement ce qui lui est présenté. Les alternatives « nier » et « renier un bienfait » sont écartées parce qu'elles insistent soit sur la parole (nier), soit sur l'ingratitude ressentie, alors que le texte n'a pas encore précisé ce qui est rejeté. « Couvrir » (sens physique premier) est écarté parce qu'il reste trop concret pour la situation décrite. « Mécréant » est écarté parce qu'il projette une catégorie religieuse postérieure sur un verbe qui décrit d'abord un acte.

**châtier / châtiment** — Le sens retenu est « Châtiment/Punition ». Le mot « châtier » est choisi pour le verbe et « châtiment » pour le nom. Les alternatives « punir / punition » sont possibles mais « châtier » rend mieux la nuance d'une action qui s'applique avec force (forme II). « Tourmenter / tourment » est écarté parce qu'il suggère une peine infligée pour le plaisir de faire souffrir, ce que le texte ne dit pas. Le sens « doux / sucré » de la même racine est un sens opposé et ne s'active pas ici à cause de la forme II qui marque l'action pénible.

**intense** — Le sens retenu est « Intensité/Sévérité ». Le mot « intense » est choisi parce qu'il qualifie un état mesurable de la chose — ici, le châtiment poussé à son haut degré. L'alternative « sévère » est écartée parce qu'elle s'applique plutôt à un comportement, pas à une réalité subie. « Rigoureux » est écarté parce qu'il évoque une règle appliquée strictement, pas l'intensité d'une chose. « Dur » (usuel dans les traductions) est possible mais plus pauvre — il décrit la qualité de résistance, pas l'intensité.

**la vie proche (dunyā)** — Le sens retenu est « Proximité/Bassesse ». L'expression « la vie proche » est choisie parce qu'elle rend la racine d-n-y (être proche) et garde le contraste avec al-ākhirah. Les alternatives « ici-bas » et « ce monde » sont écartées parce qu'elles sont des calques — « ici-bas » est un calque religieux chrétien, et « ce monde » perd l'idée de proximité. Le mot arabe dunyā est conservé entre parenthèses parce qu'il a pris statut de terme propre.

**al-ākhirah / la vie dernière** — Le sens retenu est « Monde à venir / Vie dernière ». L'expression « la vie dernière » est choisie parce qu'elle rend la racine a-kh-r (venir après) et forme le pendant de « la vie proche ». Les alternatives « l'au-delà » et « l'autre monde » sont écartées : « l'au-delà » est un terme religieux marqué, « l'autre monde » projette une idée d'altérité générique que le texte ne dit pas. Le mot al-ākhirah est aussi donné parce qu'il fonctionne comme nom propre dans le Coran.

**secoureur** — Le sens retenu est « Secours/Victoire ». Le mot « secoureur » est choisi parce qu'il dit celui qui vient en aide concrètement à quelqu'un en difficulté. L'alternative « aide » est possible mais trop générale. « Partisan » est écarté parce qu'il dit l'adhésion politique, pas le secours apporté. « Protecteur » est écarté parce qu'il évoque une garde permanente, alors que nāṣir est celui qui intervient pour tirer d'affaire.

§CRITIQUE§
**rejeter vs n'ont pas cru** — Hamidullah traduit kafarū par « n'ont pas cru ». Cette traduction transforme un acte actif de rejet en un simple manque d'adhésion intérieure. La racine k-f-r ne dit pas l'absence de foi : elle dit le geste de couvrir, d'écarter, de repousser un signe reçu. Le texte décrit une action que la personne pose activement, pas un état de non-croyance. « Ne pas croire » importe en plus le couple croyance/incroyance qui est une grille postérieure.

**intense vs dur** — Hamidullah traduit shadīdan par « dur ». « Dur » décrit la résistance d'un matériau ; le mot arabe dit l'intensité d'une qualité poussée à son maximum. Le choix de « dur » est un affaiblissement — il suggère une punition difficile à supporter, alors que le texte qualifie le châtiment lui-même par sa pleine force.

**la vie proche (dunyā) vs ici-bas** — Hamidullah traduit al-dunyā par « ici-bas ». « Ici-bas » est un terme religieux chrétien qui oppose la terre et le ciel ; le mot arabe oppose le proche et le postérieur, deux temps de l'existence. La racine d-n-y dit la proximité, pas le bas. Traduire par « ici-bas » réintroduit une cosmologie verticale absente de l'arabe.

**la vie dernière (al-ākhirah) vs au-delà** — Hamidullah traduit al-ākhirah par « l'au-delà ». « L'au-delà » suggère un lieu séparé situé au-delà d'une frontière ; le mot arabe dit simplement « ce qui vient après », la suite temporelle. La racine a-kh-r dit la postériorité, pas l'extériorité. « L'au-delà » est un emprunt au vocabulaire religieux français qui déplace le sens.

**aucun secoureur ne sera à eux vs pour eux, pas de secoureurs** — la différence est plus stylistique que sémantique. Hamidullah conserve correctement la négation absolue et le sens de secours — l'écart avec notre traduction ne change pas le sens global du verset sur ce point.`;

// ═══════════════════════════════════════════════════════════════════
// SEGMENTS d'affichage (avec position, sense_retenu, phon, fr, arabic, word_key, is_particle)
// ═══════════════════════════════════════════════════════════════════

const SEGMENTS = [
  { fr: 'quant à', pos: null, phon: 'fa-ammā', arabic: 'فَأَمَّا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
  { fr: 'ceux qui', pos: 'pronom', phon: 'al-ladhīna', arabic: 'ٱلَّذِينَ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
  { fr: 'ont rejeté', pos: 'verbe', phon: 'kafarū', arabic: 'كَفَرُوا۟', word_key: 'kfr', is_particle: false, sense_retenu: 'rejeter', position: 3 },
  { fr: 'alors', pos: null, phon: 'fa', arabic: 'فَ', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
  { fr: 'Je les châtierai', pos: 'verbe', phon: 'uʿadhdhibuhum', arabic: 'أُعَذِّبُهُمْ', word_key: 'edb', is_particle: false, sense_retenu: 'châtier', position: 5 },
  { fr: "d'un châtiment", pos: 'nom', phon: 'ʿadhāban', arabic: 'عَذَابًا', word_key: 'edb', is_particle: false, sense_retenu: 'châtiment', position: 6 },
  { fr: 'intense', pos: 'adjectif', phon: 'shadīdan', arabic: 'شَدِيدًا', word_key: 'shdd', is_particle: false, sense_retenu: 'intense', position: 7 },
  { fr: 'dans', pos: null, phon: 'fī', arabic: 'فِى', word_key: null, is_particle: true, sense_retenu: null, position: 8 },
  { fr: 'la vie proche', pos: 'nom', phon: 'ad-dunyā', arabic: 'ٱلدُّنْيَا', word_key: 'dny', is_particle: false, sense_retenu: 'la vie proche (dunyā)', position: 9 },
  { fr: 'et', pos: null, phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 10 },
  { fr: 'la vie dernière', pos: 'nom', phon: 'al-ʾākhirah', arabic: 'ٱلْـَٔاخِرَةِ', word_key: 'akhr', is_particle: false, sense_retenu: 'al-ākhirah', position: 11 },
  { fr: 'et', pos: null, phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 12 },
  { fr: 'ne... aucun', pos: null, phon: 'mā', arabic: 'مَا', word_key: null, is_particle: true, sense_retenu: null, position: 13 },
  { fr: 'à eux', pos: null, phon: 'lahum', arabic: 'لَهُم', word_key: null, is_particle: true, sense_retenu: null, position: 14 },
  { fr: 'parmi', pos: null, phon: 'min', arabic: 'مِّن', word_key: null, is_particle: true, sense_retenu: null, position: 15 },
  { fr: 'des secoureurs', pos: 'nom', phon: 'nāṣirīn', arabic: 'نَّـٰصِرِينَ', word_key: 'nsr', is_particle: false, sense_retenu: 'secourir', position: 16 }
];

async function run() {
  console.log('=== PIPELINE S3:V56 — ÉTAPES 3 + 4 ===\n');

  // --- ÉTAPE 3 — VWA ---
  console.log('--- ÉTAPE 3 : VWA ---');
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
  console.log('VWA insérés: ' + vwaRows.length);

  // --- ÉTAPE 4 — traduction dans verse_analyses ---
  console.log('\n--- ÉTAPE 4 : traduction ---');
  const { error: vaErr } = await db.from('verse_analyses').update({
    full_translation: FULL_TRANSLATION_HAMIDULLAH,
    translation_arab: TRANSLATION_ARAB,
    translation_meditational: TRANSLATION_MEDITATIONAL,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments: SEGMENTS,
    validated: true
  }).eq('id', VA_ID);
  if (vaErr) throw vaErr;
  console.log('verse_analyses mis à jour (va_id=' + VA_ID + ').');

  console.log('\n=== PIPELINE S3:V56 TERMINÉE ===');
}
run().catch(e => { console.error(e); process.exit(1); });
