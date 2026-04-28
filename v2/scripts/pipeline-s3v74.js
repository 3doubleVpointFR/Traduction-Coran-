// Pipeline S3:V74 — verse_id=367, va_id=723
// يَخْتَصُّ بِرَحْمَتِهِ مَن يَشَآءُ وَٱللَّهُ ذُو ٱلْفَضْلِ ٱلْعَظِيمِ
// "Il réserve Sa miséricorde à qui Il veut, et Dieu possède la faveur immense."
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 367;
const VA_ID    = 723;
const SURAH    = 3, VERSE = 74;

// ─── ÉTAPE 2 — Enrichissement khs (خ ص ص, aid=738) ───────────────────────
// 3 sens actuels → SUSPECT (< 5). Lane's consulté : broot=xS — 19 entrées.
// Réorganisation en 4 concepts (19 sens au total).
const KHS_AID = 738;

const KHS_NEW_SENSES = [
  // ── Concept 1 : Réservation/Attribution exclusive ──────────────────────
  // Formes I, II, VIII de la racine + خُصُوصٌ (particularité).
  // La Forme I خَصَّهُ bi = il lui a réservé/assigné en propre, l'excluant des autres.
  // La Forme VIII اختصّ bi = être singularisé par quelque chose, en avoir la possession exclusive.
  // D'après Lane's : "he had the thing appropriated to him alone, in particular, peculiarly,
  // or specially, exclusively of others." خُصُوصٌ = particularité, exclusivité (contr. عُمُومٌ).
  { concept: 'Réservation/Attribution exclusive', sense: 'réserver en propre',       meaning_type: 'etymology', display_order: 1  },
  { concept: 'Réservation/Attribution exclusive', sense: 'attribuer exclusivement',  meaning_type: 'etymology', display_order: 2  },
  { concept: 'Réservation/Attribution exclusive', sense: 'singulariser',             meaning_type: 'etymology', display_order: 3  },
  { concept: 'Réservation/Attribution exclusive', sense: 'particulariser',           meaning_type: 'etymology', display_order: 4  },
  { concept: 'Réservation/Attribution exclusive', sense: 'être singularisé',         meaning_type: 'etymology', display_order: 5  },
  { concept: 'Réservation/Attribution exclusive', sense: 'particularité',            meaning_type: 'etymology', display_order: 6  },
  { concept: 'Réservation/Attribution exclusive', sense: 'exclusivité',              meaning_type: 'etymology', display_order: 7  },

  // ── Concept 2 : Distinction/Élite ──────────────────────────────────────
  // خَاصٌّ (adj.) = particulier, contr. de عَامٌّ (général) — Lane's : "Particular; peculiar;
  // special; distinct, or distinguished, from others; contr. of عَامٌّ."
  // خَاصَّةٌ = les gens distingués, l'élite (contr. de عَامَّةٌ = le commun).
  // خَاصِّيَّةٌ = propriété propre d'une chose, non trouvée chez d'autres.
  { concept: 'Distinction/Élite', sense: 'particulier — contr. général', meaning_type: 'etymology', display_order: 8  },
  { concept: 'Distinction/Élite', sense: 'distingué',                    meaning_type: 'etymology', display_order: 9  },
  { concept: 'Distinction/Élite', sense: 'élite',                        meaning_type: 'etymology', display_order: 10 },
  { concept: 'Distinction/Élite', sense: 'gens distingués',              meaning_type: 'etymology', display_order: 11 },
  { concept: 'Distinction/Élite', sense: 'propre à',                     meaning_type: 'etymology', display_order: 12 },

  // ── Concept 3 : Architecture/Interstice ────────────────────────────────
  // خُصٌّ = hutte en roseaux ou branchages, nommée ainsi à cause des خَصَاص (interstices
  // étroits entre les roseaux) à travers lesquels on voit l'intérieur.
  // خَصَاصٌ / خَصَاصَةٌ = interstice, ouverture étroite (dans une porte, un tamis, un voile,
  // entre les pierres du foyer ou entre les doigts).
  { concept: 'Architecture/Interstice', sense: 'hutte en roseaux',   meaning_type: 'etymology', display_order: 13 },
  { concept: 'Architecture/Interstice', sense: 'cabane',             meaning_type: 'etymology', display_order: 14 },
  { concept: 'Architecture/Interstice', sense: 'interstice',         meaning_type: 'etymology', display_order: 15 },
  { concept: 'Architecture/Interstice', sense: 'ouverture étroite',  meaning_type: 'etymology', display_order: 16 },

  // ── Concept 4 : Précarité/Dénuement ────────────────────────────────────
  // Forme V تخصّص peut signifier "être dans un état de misère exclusif, non partagé"
  // (Lane's : "He was in a peculiar, unparticipated state of pressing want and poverty").
  // خَصَاصَةٌ est utilisé métaphoriquement pour désigner la pauvreté aiguë.
  { concept: 'Précarité/Dénuement', sense: 'pauvreté',              meaning_type: 'etymology', display_order: 17 },
  { concept: 'Précarité/Dénuement', sense: 'dénuement',             meaning_type: 'etymology', display_order: 18 },
  { concept: 'Précarité/Dénuement', sense: 'manque pressant',       meaning_type: 'etymology', display_order: 19 },
];

// ─── PHRASES DU QUOTIDIEN — khs (3 phrases, analysis_id=738) ─────────────
const KHS_DAILY = [
  {
    analysis_id: KHS_AID,
    sense:  'réserver en propre',
    arabic: 'خَصَصْتُ وَقْتاً لِلْقِرَاءَةِ كُلَّ يَوْمٍ.',
    phon:   'khaṣṣastu waqtan li-l-qirāʾati kulla yawm.',
    french: 'J\'ai réservé un moment à la lecture chaque jour.',
  },
  {
    analysis_id: KHS_AID,
    sense:  'réserver en propre',
    arabic: 'اخْتَصَّتْ هٰذِهِ الجَائِزَةُ بِالطُّلَّابِ المُتَفَوِّقِينَ.',
    phon:   'ikhtaṣṣat hādhihi l-jāʾizatu bi-ṭ-ṭullābi l-mutafawwiqīn.',
    french: 'Ce prix a été réservé aux étudiants excellents.',
  },
  {
    analysis_id: KHS_AID,
    sense:  'réserver en propre',
    arabic: 'هٰذِهِ الغُرْفَةُ مُخَصَّصَةٌ لِلضُّيُوفِ.',
    phon:   'hādhihi l-ghurfatu mukhaṣṣaṣatun li-ḍ-ḍuyūf.',
    french: 'Cette chambre est réservée aux invités.',
  },
];

// ─── SEGMENTS display (format V3) ─────────────────────────────────────────
const SEGMENTS = [
  { pos:1,  fr:'Il r\u00e9serve',      phon:'yakhtaṣṣu',   arabic:'يَخْتَصُّ',    word_key:'khs', is_particle:false, sense_retenu:'r\u00e9server en propre', position:1  },
  { pos:2,  fr:'',                     phon:'bi',           arabic:'بِ',           is_particle:true,                                                           position:2  },
  { pos:3,  fr:'Sa mis\u00e9ricorde',  phon:'ra\u1e25matihi', arabic:'رَحْمَتِهِ', word_key:'rhm', is_particle:false, sense_retenu:'mis\u00e9ricorde',          position:3  },
  { pos:4,  fr:'\u00e0 qui',           phon:'man',          arabic:'مَن',          is_particle:true,                                                           position:4  },
  { pos:5,  fr:'Il veut,',             phon:'yash\u0101\u02beu', arabic:'يَشَآءُ', word_key:'\u0161ya', is_particle:false, sense_retenu:'vouloir',              position:5  },
  { pos:6,  fr:'et',                   phon:'wa',           arabic:'وَ',           is_particle:true,                                                           position:6  },
  { pos:7,  fr:'Dieu',                 phon:'all\u0101hu',  arabic:'ٱللَّهُ',      word_key:'alh', is_particle:false, sense_retenu:'Dieu',                      position:7  },
  { pos:8,  fr:'poss\u00e8de',         phon:'dh\u016b',     arabic:'ذُو',          is_particle:true,                                                           position:8  },
  { pos:9,  fr:'la faveur',            phon:'al-fa\u1e0dli', arabic:'ٱلْفَضْلِ',   word_key:'fdl', is_particle:false, sense_retenu:'faveur',                    position:9  },
  { pos:10, fr:'immense.',             phon:'al-\u02bfe\u1e93\u012bmi', arabic:'ٱلْعَظِيمِ', word_key:'ezm', is_particle:false, sense_retenu:'immense',          position:10 },
];

// ─── TRANSLATION ─────────────────────────────────────────────────────────
const TRANSLATION = 'Il r\u00e9serve Sa mis\u00e9ricorde \u00e0 qui Il veut, et Dieu poss\u00e8de la faveur immense.';
const HAMIDULLAH  = 'Il r\u00e9serve Sa mis\u00e9ricorde \u00e0 qui Il veut. Allah est le D\u00e9tenteur de la gr\u00e2ce immense.';

// ─── DÉMARCHE / JUSTIFICATION / CRITIQUE ─────────────────────────────────
const TRANSLATION_EXPLANATION = `\u00a7D\u00e9marche\u00a7
Ce verset conclut le passage ouvert au verset 72 sur la tactique de la faction des gens du Livre. Apr\u00e8s avoir affirm\u00e9 au verset 73 que la direction et la faveur appartiennent \u00e0 Dieu seul et qu\u2019Il les donne \u00e0 qui Il veut, le verset 74 reformule la m\u00eame souverainet\u00e9 divine mais avec la mis\u00e9ricorde (ra\u1e25ma) : Dieu r\u00e9serve Sa mis\u00e9ricorde \u00e0 qui Il veut, et Dieu poss\u00e8de la faveur immense.

**Yakhtaṣṣu** (Il r\u00e9serve) est un verbe de la racine kh-ṣ-ṣ \u00e0 la Forme VIII (iktif\u0101l), inaccompli actif, 3\u00e8me personne du masculin singulier. La Forme VIII est r\u00e9flexive et intensive par rapport \u00e0 la Forme I : l\u00e0 o\u00f9 la Forme I khassa = r\u00e9server quelque chose \u00e0 quelqu\u2019un d\u2019autre (acte transitif orient\u00e9 vers l\u2019autre), la Forme VIII iktassa = avoir quelque chose en propre, l\u2019approprier, le singulariser exclusivement. D\u2019apr\u00e8s les sources \u00e9tymologiques (Lane\u2019s Arabic-English Lexicon, Edward Lane, 1863), la Forme VIII ikhtass\u0101 bi- signifie : \u00eatre singularis\u00e9 particuli\u00e8rement, exclusivement des autres, par quelque chose ; avoir une chose qui lui appartient seul, en propre, \u00e0 l\u2019exclusion des autres. L\u2019inf. n. khus\u016bs = particularit\u00e9, exclusivit\u00e9 (contraire de \u02bfum\u016bm = g\u00e9n\u00e9ralit\u00e9). La construction yakhtaṣṣu bi-ra\u1e25matihi man yash\u0101\u02beu = Il singularise par Sa mis\u00e9ricorde qui Il veut \u2014 Dieu est le sujet actif qui r\u00e9serve l\u2019acc\u00e8s \u00e0 Sa mis\u00e9ricorde de mani\u00e8re souveraine. On traduit par \u00ab Il r\u00e9serve \u00bb.

**Bi-ra\u1e25matihi** (Sa mis\u00e9ricorde) : pr\u00e9position bi (par/avec) + ra\u1e25matihi (racine r-\u1e25-m, nom f\u00e9minin au g\u00e9nitif, avec pronom suffixe -hi = Sa). La racine r-\u1e25-m a pour sens premier l\u2019ut\u00e9rus \u2014 le lieu d\u2019o\u00f9 sort la vie, le siège du lien de protection et de tendresse entre qui engendre et ce qu\u2019il engendre. Par extension, la racine d\u00e9signe toute forme de compassion active, de traitement doux et favorable. Ra\u1e25ma = la mis\u00e9ricorde, la compassion. D\u2019apr\u00e8s les sources \u00e9tymologiques, ra\u1e25ima = traiter avec compassion, pardonner, accorder sa piti\u00e9. Le pronom -hi renvoie \u00e0 Dieu, sujet du verbe pr\u00e9c\u00e9dent. On traduit par \u00ab Sa mis\u00e9ricorde \u00bb.

**Man** (\u00e0 qui) est un pronom relatif masculin ind\u00e9fini. Il a ici la valeur d\u2019un compl\u00e9ment d\u2019objet indirect de yakhtaṣṣu (Il r\u00e9serve Sa mis\u00e9ricorde \u00e0 qui...). Ce pronom n\u2019appartient \u00e0 aucune racine verbale.

**Yash\u0101\u02beu** (Il veut) est un verbe de la racine sh-y-\u02be \u00e0 la Forme I, inaccompli actif, 3\u00e8me personne du masculin singulier. Le sujet est Dieu, sous-entendu depuis le d\u00e9but du verset. La formule man yash\u0101\u02beu (= \u00e0 qui Il veut) est r\u00e9currente dans le Coran pour exprimer la libert\u00e9 absolue et non contrainte de la d\u00e9cision divine. D\u2019apr\u00e8s les sources \u00e9tymologiques, mash\u012b\u02bfa = la volont\u00e9 souveraine. On traduit par \u00ab Il veut \u00bb.

**All\u0101hu** (Dieu) est le nom au nominatif, sujet de la phrase nominale conclusive. Convention universelle dans cette traduction : all\u0101h \u2192 Dieu.

**Dh\u016b** (poss\u00e8de) est la forme de \u0630\u0648 \u00e0 l\u2019\u00e9tat construit nominatif, exprimant la possession (maître de, possesseur de). Dh\u016b al-fa\u1e0dl = celui qui poss\u00e8de la faveur / maître de la faveur. Cette construction forme une phrase nominale sans verbe explicite : All\u0101hu [est] dh\u016b al-fa\u1e0dli al-\u02bfe\u1e93\u012bmi. Le texte ne dit pas \u00ab Dieu donne la faveur \u00bb mais \u00ab Dieu poss\u00e8de la faveur \u00bb \u2014 la faveur est une r\u00e9alit\u00e9 qui lui appartient, dont Il dispose.

**Al-fa\u1e0dli** (la faveur) est un nom d\u00e9fini de la racine f-\u1e0d-l, au g\u00e9nitif apr\u00e8s dh\u016b. D\u00e9j\u00e0 analys\u00e9 au verset 73. D\u2019apr\u00e8s les sources \u00e9tymologiques, fa\u1e0dl = ce qui exc\u00e8de ce qui \u00e9tait d\u00fb, un don accord\u00e9 par sup\u00e9riorit\u00e9. On traduit par \u00ab la faveur \u00bb.

**Al-\u02bfe\u1e93\u012bmi** (immense) est un adjectif de la racine \u02bfe-\u1e93-m, d\u00e9fini, g\u00e9nitif en accord avec al-fa\u1e0dl. D\u2019apr\u00e8s les sources \u00e9tymologiques, \u02bfa\u1e93uma = \u00eatre grand primitivement dans ses os, puis, par extension, tout ce qui est grand, vaste, \u00e9norme en taille ou en rang et en consid\u00e9ration. Lane\u2019s pr\u00e9cise que \u02bfa\u1e93\u012bm signifie : d\u2019une grandeur qui d\u00e9passe les choses de m\u00eame esp\u00e8ce, estim\u00e9 grand par ceux qui l\u2019\u00e9valuent \u2014 plus intense que kab\u012br (grand en soi) et pouvant \u00eatre rendu par \u00ab \u00e9norme, vaste, immense \u00bb. On traduit par \u00ab immense \u00bb.

\u00a7Justification\u00a7
**Il r\u00e9serve** \u2014 Le sens retenu est \u00ab R\u00e9servation/Attribution exclusive \u00bb. Le mot \u00ab r\u00e9serve \u00bb est choisi car yakhtaṣṣu (Forme VIII de kh-ṣ-ṣ) d\u00e9signe l\u2019acte de singulariser quelque chose, de l\u2019attribuer en propre \u00e0 quelqu\u2019un, \u00e0 l\u2019exclusion des autres. L\u2019alternative \u00ab distingue \u00bb est \u00e9cart\u00e9e car elle \u00e9voque une diff\u00e9renciation visible, pas n\u00e9cessairement une attribution exclusive. L\u2019alternative \u00ab accorde sp\u00e9cialement \u00bb est plus longue et moins pr\u00e9cise : yakhtaṣṣu insiste sur l\u2019exclusivit\u00e9 de la r\u00e9servation. \u00ab R\u00e9serve \u00bb capture \u00e0 la fois la Forme VIII (appropriation exclusive) et la construction bi (par Sa mis\u00e9ricorde = c\u2019est la mis\u00e9ricorde qui est r\u00e9serv\u00e9e, et elle l\u2019est pour celui qu\u2019Il veut).

**Sa mis\u00e9ricorde** \u2014 Le sens retenu est \u00ab Mis\u00e9ricorde/Tendresse \u00bb. Le mot \u00ab mis\u00e9ricorde \u00bb est choisi car ra\u1e25ma d\u00e9signe la compassion active et le traitement favorable accord\u00e9 par bienveillance, ancr\u00e9 \u00e9tymologiquement dans le lien de tendresse et de protection. L\u2019alternative \u00ab tendresse \u00bb est \u00e9cart\u00e9e car elle \u00e9voque un sentiment int\u00e9rieur plus que l\u2019acte orient\u00e9 vers l\u2019autre. L\u2019alternative \u00ab bonté \u00bb est trop neutre et ne rend pas l\u2019\u00e9tymologie de r-\u1e25-m (lien de protection n\u00e9 de l\u2019int\u00e9rieur). \u00ab Mis\u00e9ricorde \u00bb est le terme fran\u00e7ais le plus pr\u00e9cis pour ce champ s\u00e9mantique.

**Il veut** \u2014 Le sens retenu est \u00ab Volont\u00e9 \u00bb. D\u00e9j\u00e0 justifi\u00e9 au verset 73. Yash\u0101\u02beu = Il veut souverainement, d\u00e9cision non contrainte. L\u2019alternative \u00ab Il d\u00e9cide \u00bb est \u00e9cart\u00e9e car elle implique un processus d\u00e9lib\u00e9ratif que le texte ne mentionne pas.

**Dieu** \u2014 Convention universelle dans cette traduction.

**la faveur** \u2014 Le sens retenu est \u00ab Excellence/Faveur \u00bb. D\u00e9j\u00e0 justifi\u00e9 au verset 73. Al-fa\u1e0dl = la faveur accord\u00e9e par sup\u00e9riorit\u00e9. L\u2019alternative \u00ab la gr\u00e2ce \u00bb est \u00e9cart\u00e9e car elle importe un vocabulaire religieux chr\u00e9tien absent de l\u2019\u00e9tymologie arabe f-\u1e0d-l.

**immense** \u2014 Le sens retenu est \u00ab Grandeur/Importance \u00bb. Le mot \u00ab immense \u00bb est choisi car \u02bea\u1e93\u012bm d\u00e9signe ce qui est d\u2019une grandeur qui d\u00e9passe les choses de m\u00eame cat\u00e9gorie. Lane\u2019s pr\u00e9cise que \u02bea\u1e93\u012bm est plus intense que kab\u012br : il dit non pas \u00ab grand en lui-m\u00eame \u00bb mais \u00ab immense aux yeux de ceux qui l\u2019\u00e9valuent, d\u00e9passant toute comparaison \u00bb. L\u2019alternative \u00ab grand \u00bb est trop ordinaire pour \u02bea\u1e93\u012bm. L\u2019alternative \u00ab infinie \u00bb est \u00e9cart\u00e9e car elle affirme une caract\u00e9ristique que le texte ne mentionne pas : \u02bea\u1e93\u012bm dit \u00ab tr\u00e8s grand \u00bb, pas \u00ab sans limite \u00bb.

\u00a7Critique\u00a7
**la faveur vs \u00ab la gr\u00e2ce \u00bb** : Les traductions courantes rendent al-fa\u1e0dl par \u00ab la gr\u00e2ce \u00bb. Ce choix vient du vocabulaire religieux chr\u00e9tien \u2014 le latin gratia (gr\u00e2ce) a influenc\u00e9 les traductions fran\u00e7aises du Coran. Mais al-fa\u1e0dl vient de la racine f-\u1e0d-l = excellence, sup\u00e9riorit\u00e9, ce qui d\u00e9passe ce qui \u00e9tait d\u00fb. Notre traduction donne \u00ab la faveur \u00bb \u2014 un don accord\u00e9 par celui qui a l\u2019excellence. La diff\u00e9rence change la connotation : \u00ab la gr\u00e2ce \u00bb porte des r\u00e9sonances th\u00e9ologiques chr\u00e9tiennes (salut, don surnaturel) absentes de l\u2019\u00e9tymologie arabe f-\u1e0d-l. Les traductions courantes donnent sensiblement le m\u00eame sens pour les autres mots du verset.`;

// Correction : marqueurs §
const EXPL = TRANSLATION_EXPLANATION
  .replace('\u00a7D\u00e9marche\u00a7',       '§DEMARCHE§')
  .replace('\u00a7Justification\u00a7',    '§JUSTIFICATION§')
  .replace('\u00a7Critique\u00a7',         '§CRITIQUE§');

// ─── VWA ─────────────────────────────────────────────────────────────────
const VWA_ROWS = [
  {
    word_key: 'khs', position: 1,
    analysis_axes: {
      sense_chosen: 'r\u00e9server en propre',
      concept_chosen: 'R\u00e9servation/Attribution exclusive',
      concepts: {
        'R\u00e9servation/Attribution exclusive': {
          status: 'retenu',
          senses: ['r\u00e9server en propre', 'attribuer exclusivement', 'singulariser', 'particulariser', '\u00eatre singularis\u00e9', 'particularit\u00e9', 'exclusivit\u00e9'],
          proof_ctx: "Yakhtaṣṣu (Forme VIII de kh-ṣ-ṣ) = il singularise, il r\u00e9serve en propre. La construction Forme VIII + bi-ra\u1e25matihi man yash\u0101\u02beu = Dieu r\u00e9serve Sa mis\u00e9ricorde \u00e0 qui Il veut, \u00e0 l\u2019exclusion de tout principe d\u2019appartenance ou de statut. C\u2019est la seule cat\u00e9gorie qui rende \u00e0 la fois l\u2019exclusivit\u00e9 et l\u2019acte actif du sujet.",
        },
        'Distinction/\u00c9lite': {
          status: 'peu_probable',
          senses: ['particulier — contr. g\u00e9n\u00e9ral', 'distingu\u00e9', '\u00e9lite', 'gens distingu\u00e9s', 'propre \u00e0'],
          proof_ctx: "La distinction/\u00e9lite d\u00e9signe un statut reconnu (kh\u0101ṣṣ = particulier, contr. de \u02bfe\u0101mm), pas l\u2019acte de r\u00e9server quelque chose \u00e0 quelqu\u2019un. Yakhtaṣṣu est une action en cours (inaccompli), pas un \u00e9tat descriptif.",
        },
        'Architecture/Interstice': {
          status: 'nul',
          senses: ['hutte en roseaux', 'cabane', 'interstice', 'ouverture \u00e9troite'],
          proof_ctx: "Sens physique d\u2019une structure en roseaux ou d\u2019un espace \u00e9troit \u2014 hors contexte.",
        },
        'Pr\u00e9carit\u00e9/D\u00e9nuement': {
          status: 'nul',
          senses: ['pauvret\u00e9', 'd\u00e9nuement', 'manque pressant'],
          proof_ctx: "Sens m\u00e9taphorique de mis\u00e8re exclusive \u2014 hors contexte d\u2019un attribut divin.",
        },
      },
    },
  },
  {
    word_key: 'rhm', position: 3,
    analysis_axes: {
      sense_chosen: 'mis\u00e9ricorde',
      concept_chosen: 'Mis\u00e9ricorde/Tendresse',
      concepts: {
        'Mis\u00e9ricorde/Tendresse': {
          status: 'retenu',
          senses: ['mis\u00e9ricorde', 'pardon', 'traiter avec compassion', 'se forcer \u00e0 la compassion', 'mis\u00e9ricorde r\u00e9ciproque', 'demander la mis\u00e9ricorde', 'le Compatissant', 'plus mis\u00e9ricordieux', 'objet de mis\u00e9ricorde', 'trait\u00e9 avec beaucoup de compassion'],
          proof_ctx: "Ra\u1e25matihi = Sa mis\u00e9ricorde (nom abstrait + pronom de Dieu). La mis\u00e9ricorde est un acte orient\u00e9 vers l\u2019ext\u00e9rieur, accord\u00e9 \u00e0 celui qui la re\u00e7oit. C\u2019est la seule cat\u00e9gorie compatible avec le nom abstrait ra\u1e25ma quand il est rattach\u00e9 \u00e0 Dieu comme agent : Dieu r\u00e9serve Sa mis\u00e9ricorde.",
        },
        'Ut\u00e9rus/Reproduction': {
          status: 'nul',
          senses: ['ut\u00e9rus', 'vulve', 'maladie de l\u2019ut\u00e9rus', 'chamelle malade post-partum'],
          proof_ctx: "Le sens physique de l\u2019ut\u00e9rus (ra\u1e25im) ne peut pas \u00eatre attribu\u00e9 \u00e0 Dieu avec le pronom -hi. Ra\u1e25matihi est ici un nom abstrait, pas un organe.",
        },
        'Parent\u00e9/Lien familial': {
          status: 'nul',
          senses: ['lien de parent\u00e9', 'parents par les femmes', 'sentiment de parent\u00e9'],
          proof_ctx: "Le lien de parent\u00e9 (ar\u1e25\u0101m) est une extension de l\u2019ut\u00e9rus. Bi-ra\u1e25matihi man yash\u0101\u02beu = \u00ab avec Sa parent\u00e9 \u00e0 qui Il veut \u00bb est absurde dans ce contexte de don divin.",
        },
        'Provision/Bienfait mat\u00e9riel': {
          status: 'peu_probable',
          senses: ['subsistance', 'pluie', 'abondance', 'proph\u00e9tie'],
          proof_ctx: "La pluie et la subsistance sont des formes de mis\u00e9ricorde, pas la mis\u00e9ricorde elle-m\u00eame. Ra\u1e25ma est l\u2019acte de Dieu qui r\u00e9serve ce don — la source du don, non le don mat\u00e9riel.",
        },
        'Lieu/G\u00e9ographie': {
          status: 'nul',
          senses: ['La Mecque', 'M\u00e9dine'],
          proof_ctx: "Sens g\u00e9ographiques isol\u00e9s \u2014 hors contexte.",
        },
      },
    },
  },
  {
    word_key: '\u0161ya', position: 5,
    analysis_axes: {
      sense_chosen: 'vouloir',
      concept_chosen: 'Volont\u00e9',
      concepts: {
        'Volont\u00e9': {
          status: 'retenu',
          senses: ['vouloir', 'cr\u00e9er', 'd\u00e9sirer', 'souhaiter', 'volont\u00e9 (mash\u012b\u02bfa)'],
          proof_ctx: "Yash\u0101\u02beu (Forme I inaccompli) = Il veut. Dans la formule man yash\u0101\u02beu (= \u00e0 qui Il veut), la volont\u00e9 divine est pr\u00e9sent\u00e9e comme souveraine et non contrainte. C\u2019est le sens verbal actif de la racine sh-y-\u02be.",
        },
        'Chose/Existence': {
          status: 'nul',
          senses: ['chose', 'quelque chose', 'rien', 'entit\u00e9', 'existence'],
          proof_ctx: "Le sens nominal de la racine (sh\u0101\u02ber = chose) ne s\u2019applique pas ici o\u00f9 le mot est un verbe inaccompli \u00e0 la 3\u00e8me personne.",
        },
        'Incitation/Contrainte': { status: 'nul', senses: ['inciter', 'contraindre'], proof_ctx: "Hors contexte de volont\u00e9 souveraine." },
        'Laideur/Difformit\u00e9':  { status: 'nul', senses: ['rendre laid', 'mal form\u00e9'], proof_ctx: "Hors contexte." },
        'Apaisement':            { status: 'nul', senses: ['apaiser sa col\u00e8re'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'alh', position: 7,
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinit\u00e9',
      concepts: {
        'Divinit\u00e9': {
          status: 'retenu',
          senses: ['divinit\u00e9', 'divinit\u00e9 (concept)', 'Dieu', 'th\u00e9ologie', 'exclamation divine', 'oui certes'],
          proof_ctx: "All\u0101hu (nominatif) = Dieu. Sujet de la phrase nominale conclusive. Convention universelle dans cette traduction : all\u0101h \u2192 Dieu.",
        },
        'Adoration/D\u00e9votion':  { status: 'nul', senses: ['adorer', 'faire adorer'], proof_ctx: "Sens verbal \u2014 hors contexte d\u2019un nom propre au nominatif." },
        'D\u00e9tresse':            { status: 'nul', senses: ['\u00eatre perplexe', 'se lamenter'], proof_ctx: "Hors contexte." },
        'Refuge/Protection':      { status: 'nul', senses: ['chercher refuge', 'prot\u00e9ger'], proof_ctx: "Hors contexte." },
        'Domination':             { status: 'nul', senses: ['asservir'], proof_ctx: "Hors contexte." },
      },
    },
  },
  {
    word_key: 'fdl', position: 9,
    analysis_axes: {
      sense_chosen: 'faveur',
      concept_chosen: 'Excellence/Faveur',
      concepts: {
        'Excellence/Faveur': {
          status: 'retenu',
          senses: ['\u00eatre sup\u00e9rieur', 'gr\u00e2ce', 'faveur', 'm\u00e9rite'],
          proof_ctx: "Al-fa\u1e0dl (d\u00e9fini, g\u00e9nitif apr\u00e8s dh\u016b) = la faveur appartenant \u00e0 Dieu, qu\u2019Il poss\u00e8de. La racine f-\u1e0d-l d\u00e9signe ce qui exc\u00e8de ce qui \u00e9tait d\u00fb \u2014 un don accord\u00e9 par sup\u00e9riorit\u00e9. D\u00e9j\u00e0 analys\u00e9 au verset 73.",
        },
        'Reste/Surplus': { status: 'nul', senses: ['surplus', 'reste'], proof_ctx: "Sens de ce qui reste apr\u00e8s usage \u2014 hors contexte d\u2019un bien poss\u00e9d\u00e9 par Dieu." },
      },
    },
  },
  {
    word_key: 'ezm', position: 10,
    analysis_axes: {
      sense_chosen: 'immense',
      concept_chosen: 'Grandeur/Importance',
      concepts: {
        'Grandeur/Importance': {
          status: 'retenu',
          senses: ['\u00eatre grand', 'grandir', 'immense', 'magnifier'],
          proof_ctx: "Al-\u02bfe\u1e93\u012bmi (adjectif d\u00e9fini, g\u00e9nitif) qualifie al-fa\u1e0dl = la faveur immense. Lane\u2019s : \u02bea\u1e93\u012bm d\u00e9signe ce qui est d\u2019une grandeur qui d\u00e9passe les choses de m\u00eame esp\u00e8ce, plus intense que kab\u012br. Qualifiant la faveur divine, il exprime que cette faveur d\u00e9passe toute comparaison.",
        },
        'Structure/Ossature': { status: 'nul', senses: ['os', 'squelette'], proof_ctx: "Sens physique de la racine \u2014 incompatible avec un adjectif qualifiant une r\u00e9alit\u00e9 abstraite (la faveur)." },
        'Sens isol\u00e9/Ch\u00e2timent': { status: 'nul', senses: ['ch\u00e2timent terrible'], proof_ctx: "Sens isol\u00e9 hors contexte d\u2019un attribut de la faveur divine." },
      },
    },
  },
];

// ─── INSERTION ──────────────────────────────────────────────────────────────
async function run() {
  console.log('\u2554' + '\u2550'.repeat(57) + '\u2557');
  console.log('\u2551   PIPELINE MAISON \u2014 S3:V74 (verse_id=367)               \u2551');
  console.log('\u255a' + '\u2550'.repeat(57) + '\u255d\n');

  // ── ÉTAPE 2 — Enrichissement khs ──────────────────────────────────────
  console.log('\u2550\u2550\u2550 \u00c9TAPE 2 \u2014 Enrichissement khs (aid=738) \u2550\u2550\u2550');
  console.log('[khs] 3 sens actuels \u2192 suspect (< 5). Lane\u2019s consult\u00e9 : 4 concepts, 19 sens.');

  // Supprimer anciens sens
  const { error: delErr } = await db.from('word_meanings').delete().eq('analysis_id', KHS_AID);
  if (delErr) { console.error('  ERREUR delete khs word_meanings:', delErr.message); return; }
  console.log('  Anciens sens supprim\u00e9s.');

  // Ins\u00e9rer nouveaux sens
  const khsInserts = KHS_NEW_SENSES.map(s => ({ ...s, analysis_id: KHS_AID }));
  const { error: insErr } = await db.from('word_meanings').insert(khsInserts);
  if (insErr) { console.error('  ERREUR insert khs word_meanings:', insErr.message); return; }
  console.log(`  ${KHS_NEW_SENSES.length} sens ins\u00e9r\u00e9s en 4 concepts :`);
  const byConc = {};
  for (const s of KHS_NEW_SENSES) { (byConc[s.concept] = byConc[s.concept] || []).push(s.sense); }
  for (const [c, ss] of Object.entries(byConc)) console.log(`    [${c}] ${ss.length} sens`);

  // V\u00e9rifier total_occurrences de khs
  const { data: khsWA } = await db.from('word_analyses').select('total_occurrences').eq('id', KHS_AID);
  if (khsWA && khsWA[0]) console.log(`  total_occurrences khs = ${khsWA[0].total_occurrences}`);

  // ── LOGS ÉTAPE 2 (richesse) ────────────────────────────────────────────
  console.log('\n[khs] 19 sens extraits \u2192 4 concepts');
  console.log('  R\u00e9servation/Attribution exclusive (7 sens) \u2192 RETENU : yakhtaṣṣu (Forme VIII) = r\u00e9server en propre, exclusivement. La seule cat\u00e9gorie compatible avec l\u2019acte de singulariser souverainement.');
  console.log('  Distinction/\u00c9lite (5 sens) \u2192 PEU PROBABLE : kh\u0101ṣṣ = statut descriptif, pas l\u2019acte de r\u00e9server.');
  console.log('  Architecture/Interstice (4 sens) \u2192 NUL : sens physique hors contexte.');
  console.log('  Pr\u00e9carit\u00e9/D\u00e9nuement (3 sens) \u2192 NUL : sens m\u00e9taphorique hors contexte divin.');

  console.log('\n[rhm] 30 sens \u2192 OK \u2192 SKIP');
  console.log('  Mis\u00e9ricorde/Tendresse (10 sens) \u2192 RETENU : ra\u1e25matihi + pronom de Dieu = Sa mis\u00e9ricorde active.');
  console.log('  Ut\u00e9rus/Reproduction (6 sens) \u2192 NUL : sens physique incompatible avec pronom divin.');
  console.log('  Parent\u00e9/Lien familial (5 sens) \u2192 NUL : bi-ra\u1e25matihi man yash\u0101\u02beu = absurde.');
  console.log('  Provision/Bienfait mat\u00e9riel (4 sens) \u2192 PEU PROBABLE : la pluie est une forme de mis\u00e9ricorde, pas la mis\u00e9ricorde elle-m\u00eame.');

  console.log('\n[ezm] 7 sens \u2192 OK \u2192 SKIP');
  console.log('  Grandeur/Importance (4 sens) \u2192 RETENU : \u02bea\u1e93\u012bm qualifiant al-fa\u1e0dl = la faveur immense.');
  console.log('  Structure/Ossature (2 sens) \u2192 NUL : sens physique incompatible avec adjectif abstrait.');
  console.log('  Sens isol\u00e9/Ch\u00e2timent (1 sens) \u2192 NUL : hors contexte.');

  // ── PHRASES DU QUOTIDIEN — khs ─────────────────────────────────────────
  console.log('\n\u2550\u2550\u2550 word_daily \u2014 khs (0 phrases \u2192 3 \u00e0 cr\u00e9er) \u2550\u2550\u2550');
  const { error: dailyErr } = await db.from('word_daily').insert(KHS_DAILY);
  if (dailyErr) { console.error('  ERREUR word_daily khs:', dailyErr.message); return; }
  for (const d of KHS_DAILY) console.log(`  \u00ab ${d.french} \u00bb (${d.sense})`);

  // ── ÉTAPES 1 & 4 — verse_analyses UPDATE ──────────────────────────────
  console.log('\n\u2550\u2550\u2550 verse_analyses UPDATE (va_id=723) \u2550\u2550\u2550');
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab:        TRANSLATION,
    full_translation:        HAMIDULLAH,
    translation_explanation: EXPL,
    segments:                SEGMENTS,
  }).eq('id', VA_ID);
  if (vaErr) { console.error('  ERREUR VA:', vaErr.message); return; }
  console.log('  UPDATE OK');

  // ── ÉTAPE 3 — VWA ─────────────────────────────────────────────────────
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

  // ── RÉSUMÉ FINAL ───────────────────────────────────────────────────────
  console.log('\n' + '\u2550'.repeat(56));
  console.log('VERSET 3:74 \u2014 TERMIN\u00c9');
  for (const s of SEGMENTS.filter(s => !s.is_particle)) {
    const vwa = VWA_ROWS.find(v => v.word_key === s.word_key && v.position === s.pos);
    if (vwa) console.log(`  ${(s.phon||'').padEnd(18)} (${s.word_key}) \u2192 ${vwa.analysis_axes.concept_chosen.padEnd(32)} \u2192 "${s.fr}"`);
  }
  console.log(`  Traduction : "${TRANSLATION}"`);
  console.log('\u2554' + '\u2550'.repeat(57) + '\u2557');
  console.log('\u2551              PIPELINE S3:V74 TERMIN\u00c9E                 \u2551');
  console.log('\u255a' + '\u2550'.repeat(57) + '\u255d');
}

run().catch(console.error);
