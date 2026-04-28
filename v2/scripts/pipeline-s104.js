const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// =====================================================
// PIPELINE SOURATE 104 — AL-HUMAZAH (Le Diffamateur)
// Étapes 2 + 3 + 4 complètes
// =====================================================

async function main() {
  console.log('=== PIPELINE SOURATE 104 — AL-HUMAZAH ===\n');

  // ÉTAPE 2 — Assigner les concepts aux racines hmz et nbv
  await assignHmzConcepts();
  await assignNbvConcepts();

  // ÉTAPE 3+4 — Analyser et traduire chaque verset
  for (let v = 1; v <= 9; v++) {
    await processVerse(v);
  }

  // SYNC word_meanings depuis verse_word_analyses
  await syncWordMeanings();

  // WORD DAILY
  await insertWordDaily();

  console.log('\n=== PIPELINE TERMINÉE ===');
}

// =====================================================
// ÉTAPE 2 — Concepts pour hmz (analysis_id=2596)
// =====================================================
async function assignHmzConcepts() {
  console.log('[RACINE hmz] 22 sens → 4 concepts');

  // Concept 1: Pression/Force physique (IDs 11876-11886)
  const pressionIds = [11876, 11877, 11878, 11879, 11880, 11881, 11882, 11883, 11884, 11885, 11886];
  for (const id of pressionIds) {
    await supabase.from('word_meanings').update({ concept: 'Pression/Force physique' }).eq('id', id);
  }
  // Description philosophique sur le premier sens
  await supabase.from('word_meanings').update({
    description: "Acte extérieur d'exercer une force sur un objet ou une personne pour le comprimer, le déplacer ou le blesser. La pression est directionnelle — elle part de celui qui presse et atteint ce qui est pressé. C'est un mouvement ponctuel et physique qui vise à contraindre, diriger ou blesser."
  }).eq('id', 11876);

  // Concept 2: Blâme/Dénigrement (IDs 11887-11893)
  const blameIds = [11887, 11888, 11889, 11890, 11891, 11892, 11893];
  for (const id of blameIds) {
    await supabase.from('word_meanings').update({ concept: 'Blâme/Dénigrement' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Acte extérieur dirigé contre la dignité ou la réputation d'une personne. Le dénigrement sort de celui qui blâme et atteint celui qui est blâmé — c'est un jugement négatif qui vise à diminuer l'autre. Il peut être direct (reprocher en face) ou indirect (médire en absence), mais il est toujours dirigé vers une cible humaine."
  }).eq('id', 11887);

  // Concept 3: Signe/Geste (IDs 11894-11895)
  for (const id of [11894, 11895]) {
    await supabase.from('word_meanings').update({ concept: 'Signe/Geste' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Acte extérieur discret de communication non-verbale. Le signe est un geste ponctuel — clin d'œil, mouvement de tête, grimace — qui transmet un message de moquerie ou de mépris sans parole."
  }).eq('id', 11894);

  // Concept 4: Sens isolé/Phonétique (IDs 11896-11897)
  for (const id of [11896, 11897]) {
    await supabase.from('word_meanings').update({ concept: 'Sens isolé/Phonétique' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Son produit par la compression de la gorge. La hamza est liée étymologiquement à la pression physique — le son est le résultat d'une constriction."
  }).eq('id', 11896);

  console.log('  Pression/Force physique (11 sens) → assigné');
  console.log('  Blâme/Dénigrement (7 sens) → assigné');
  console.log('  Signe/Geste (2 sens) → assigné');
  console.log('  Sens isolé/Phonétique (2 sens) → assigné');
}

// =====================================================
// ÉTAPE 2 — Concepts pour nbv (analysis_id=2597)
// =====================================================
async function assignNbvConcepts() {
  console.log('[RACINE nbv] 17 sens → 4 concepts');

  // Concept 1: Rejet/Abandon (IDs 11898-11906)
  const rejetIds = [11898, 11899, 11900, 11901, 11902, 11903, 11904, 11905, 11906];
  for (const id of rejetIds) {
    await supabase.from('word_meanings').update({ concept: 'Rejet/Abandon' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Acte extérieur de se débarrasser de quelque chose en le jetant loin de soi comme indigne de valeur. Le rejet est directionnel — l'objet est éloigné de celui qui rejette. Il implique un jugement de valeur : ce qui est jeté est considéré comme sans importance. Le rejet peut porter sur un objet, un engagement ou une personne."
  }).eq('id', 11898);

  // Concept 2: Retrait/Isolement (IDs 11907-11909)
  const retraitIds = [11907, 11908, 11909];
  for (const id of retraitIds) {
    await supabase.from('word_meanings').update({ concept: 'Retrait/Isolement' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Mouvement réflexif de s'éloigner soi-même du groupe. Contrairement au rejet qui éloigne l'autre, le retrait éloigne soi-même. C'est un acte volontaire de séparation — la personne choisit de se mettre à l'écart."
  }).eq('id', 11907);

  // Concept 3: Fermentation/Boisson (IDs 11910-11912)
  const fermentIds = [11910, 11911, 11912];
  for (const id of fermentIds) {
    await supabase.from('word_meanings').update({ concept: 'Fermentation/Boisson' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "Processus physique de transformation par macération dans l'eau. Le lien étymologique avec le rejet est direct : les fruits sont jetés dans l'eau pour fermenter."
  }).eq('id', 11910);

  // Concept 4: Quantité/Valeur (IDs 11913-11914)
  for (const id of [11913, 11914]) {
    await supabase.from('word_meanings').update({ concept: 'Quantité/Valeur' }).eq('id', id);
  }
  await supabase.from('word_meanings').update({
    description: "État de ce qui est en si petite quantité qu'on peut le jeter sans regret. Ce qui est peu est ce qu'on rejette comme négligeable."
  }).eq('id', 11913);

  console.log('  Rejet/Abandon (9 sens) → assigné');
  console.log('  Retrait/Isolement (3 sens) → assigné');
  console.log('  Fermentation/Boisson (3 sens) → assigné');
  console.log('  Quantité/Valeur (2 sens) → assigné');
}

// =====================================================
// DONNÉES D'ANALYSE PAR VERSET
// =====================================================

const verseData = {
  // =====================================================
  // VERSET 104:1 — وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ
  // =====================================================
  1: {
    verse_id: 6180,
    analysis_id: 6543,
    words: [
      {
        word_key: 'wyl',
        position: 1,
        sense_chosen: 'malheur',
        analysis_axes: {
          sense_chosen: 'malheur',
          concept_chosen: 'Malédiction/Désastre',
          concepts: {
            'Malédiction/Désastre': {
              status: 'retenu',
              senses: ['malheur', 'détresse', 'damnation'],
              proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), wayl signifie : malheur, détresse, damnation. Le mot est un nom indéfini en tête de phrase nominale — il annonce un état de malheur permanent pour quiconque pratique le comportement décrit. La racine w-y-l ne porte qu'un seul champ sémantique : la malédiction et le désastre. Le mot est utilisé comme exclamation d'avertissement.",
              axe1_verset: "Le mot wayl ouvre le verset et annonce un avertissement. Le champ lexical est celui de la mise en garde : malheur (wayl) + diffamateur (humazah) + calomniateur (lumazah). Le mot wayl pose la conséquence avant de décrire le comportement — la structure dit d'abord ce qui attend, puis qui est visé. Le verset est une phrase nominale — le malheur est une vérité permanente, pas un événement ponctuel. Le mot est indéfini (wayl sans al-), ce qui lui donne une dimension d'intensité indéterminée — un malheur tellement grand qu'il échappe à la définition.",
              axe2_voisins: "Le verset 1 est l'annonce, les versets 2-3 décrivent le comportement (amasser, compter, croire à l'immortalité par la richesse). Les versets 4-9 décrivent le contenu de ce malheur (la hutamah, le feu, la fermeture). Le mot wayl englobe tout ce qui suit — c'est le titre de la sourate en un mot. Chaque verset qui suit détaille soit la cause soit la nature de ce malheur.",
              axe3_sourate: "La sourate 104 est une sourate d'avertissement qui nomme un comportement (diffamation + accumulation) et sa conséquence (le feu écrasant). Le mot wayl est le fil conducteur — il annonce dès le premier mot que ce qui suit est une conséquence inévitable. Toute la sourate est construite comme un développement de ce premier mot. Le nom al-Humazah vient du deuxième mot du verset, mais wayl est le premier mot et le moteur thématique.",
              axe4_coherence: "Le Coran utilise wayl dans plusieurs passages pour introduire des avertissements : en 83:1 « wayl li-l-mutaffifin » (malheur aux fraudeurs), en 107:4 « fa-wayl li-l-musallin » (malheur à ceux qui prient). Dans chaque cas, wayl annonce une conséquence pour un comportement décrit ensuite. L'usage est constant : wayl + li + description du comportement. La formule est un procédé coranique de mise en garde directe.",
              axe5_frequence: "Le malheur annoncé est la conséquence naturelle d'un comportement qui détruit les liens sociaux. Pour l'être humain dans sa mission de civilisation, la diffamation et l'accumulation égoïste sont des obstacles directs à la justice et à la cohésion sociale. Le malheur n'est pas une punition arbitraire mais le résultat logique de la corruption — quand on détruit le tissu social, on finit par en subir les conséquences."
            }
          }
        }
      },
      {
        word_key: 'hmz',
        position: 3,
        sense_chosen: 'dénigrer',
        analysis_axes: {
          sense_chosen: 'dénigrer',
          concept_chosen: 'Blâme/Dénigrement',
          concepts: {
            'Blâme/Dénigrement': {
              status: 'retenu',
              senses: ['blâmer', 'reprocher', 'critiquer', 'dénigrer', 'médire', 'diffamer', 'calomnier'],
              proof_ctx: "D'après les sources étymologiques, humazah signifie : « celui qui blâme, reproche ou trouve des défauts chez les autres, beaucoup ou habituellement ». Le Lane's ajoute : « celui qui médit de son frère, celui qui diffame les gens — l'action peut se faire par des signes de la bouche, de l'œil, de la tête... celui qui va habituellement avec la calomnie, séparant les compagnons et excitant l'inimitié entre amis ». Le -ah final est pour l'intensité (comme fa'ulah), pas pour le féminin — il s'applique à tout être humain. Le dénigrement englobe toutes les formes d'atteinte à la dignité : verbale, gestuelle et sociale. Il est plus large que le simple geste moqueur (Signe/Geste), qui n'est qu'un moyen parmi d'autres. La pression physique (Pression/Force physique) est le sens originel et concret de la racine, mais le verset parle d'un type de personne dans un contexte social, pas d'un acte physique.",
              axe1_verset: "Le verset associe humazah à lumazah (deux formes intensives côte à côte). Le champ lexical est celui de l'agression verbale et sociale : quelqu'un qui s'en prend systématiquement à la dignité des autres. Les deux mots décrivent des formes complémentaires de dénigrement. Le mot humazah est le premier qualificatif — il définit le type de personne visé par l'avertissement. La forme fa'ulah (humazah) est intensive : pas quelqu'un qui blâme une fois, mais celui qui le fait constamment et habituellement.",
              axe2_voisins: "Les versets 2-3 ajoutent un deuxième trait : cette personne amasse de la richesse et la compte. Le profil se dessine : quelqu'un qui dénigre les autres (v1) tout en accumulant pour lui-même (v2). Les versets 4-9 montrent la conséquence. Le dénigrement du verset 1 est le premier acte qui déclenche le processus de la sourate. Le parallèle est clair : celui qui rabaisse les autres sera lui-même rabaissé (jeté dans la hutamah, v4).",
              axe3_sourate: "La sourate entière porte le nom d'al-Humazah — le dénigrement est donc LE thème central, pas un détail. La sourate fait du dénigrement le comportement premier qui mérite l'avertissement. L'accumulation de richesse (v2-3) est le deuxième trait qui s'ajoute au premier. La structure de la sourate est : nommer le mal (v1) → décrire le mécanisme (v2-3) → annoncer la conséquence (v4-9).",
              axe4_coherence: "Le Coran utilise la racine h-m-z dans la sourate 23:97 (hamzāt al-shayāṭīn — les poussées des démons) et dans la formule d'ouverture a'ūdhu billāhi min hamzihi (je cherche refuge auprès de Dieu contre sa poussée). L'usage tropical de la racine — passer de la pression physique à la pression morale — est attesté dans le Coran. La sourate 104 nomme directement la personne qui exerce cette pression morale sur les autres.",
              axe5_frequence: "Le dénigrement est un acte qui détruit le tissu social. Pour l'être humain dans sa mission de justice et de civilisation, attaquer la dignité des autres est un obstacle direct à la cohésion. La forme intensive (humazah) montre que ce n'est pas un acte isolé mais un comportement systématique — la personne construit son identité autour du dénigrement des autres. C'est l'inverse de la mission de construire : au lieu de bâtir, elle démolit."
            },
            'Signe/Geste': {
              status: 'peu_probable',
              senses: ['faire signe', 'signe moqueur'],
              proof_ctx: "Le signe moqueur est une forme de dénigrement non-verbal — un clin d'œil, une grimace. Le Lane's mentionne que l'action du humazah « peut se faire par des signes de la bouche, de l'œil, de la tête ». Mais le geste n'est qu'UN des moyens du dénigrement, pas le dénigrement lui-même. Le mot humazah sur la forme fa'ulah décrit une personne par son comportement HABITUEL et complet, pas par un geste précis. Réduire humazah au seul geste moqueur appauvrit le portrait que la sourate dresse.",
              axe1_verset: "Le verset associe humazah à lumazah. Le signe moqueur est une forme de dénigrement non-verbal — un clin d'œil, une grimace. Le champ lexical du dénigrement social est cohérent mais le signe est trop spécifique. Le verset décrit un type de personne, pas un geste précis. La forme intensive fa'ulah couvre TOUT le comportement, pas un seul de ses aspects.",
              axe2_voisins: "Les versets 2-3 ajoutent l'accumulation de richesse. Le geste moqueur seul ne crée pas de lien thématique fort avec l'argent — c'est le dénigrement en général, pas un simple geste, qui s'associe naturellement à l'accumulation égoïste. Le profil décrit est celui de quelqu'un qui méprise systématiquement, pas quelqu'un qui fait un clin d'œil de temps en temps.",
              axe3_sourate: "La sourate est un avertissement contre un profil humain complet. Réduire humazah au seul geste moqueur limite la portée de l'avertissement. Le Lane's dit que l'action « peut se faire par des signes » mais c'est UN des moyens, pas le seul.",
              axe4_coherence: "Les usages coraniques de h-m-z ne se limitent pas aux gestes. Les hamzāt al-shayāṭīn (23:97) sont des pressions mentales, pas des gestes physiques. Le spectre de la racine est plus large que le geste seul.",
              axe5_frequence: "Le geste moqueur est une forme de corruption sociale mais il est trop ponctuel pour capturer la gravité de l'avertissement. Le texte décrit quelqu'un de systématiquement nuisible, pas quelqu'un qui fait un geste de temps en temps."
            },
            'Pression/Force physique': {
              status: 'nul',
              senses: ['presser', 'serrer', 'pincer', 'comprimer', 'pousser', 'repousser', 'aiguillonner', 'éperonner', 'frapper', 'mordre', 'battre'],
              proof_ctx: "La pression physique est le sens originel et concret de la racine h-m-z. Le verset parle d'un type de personne dans un contexte social (associé à la richesse, v2-3), pas d'un acte de violence physique. Hors sujet."
            },
            'Sens isolé/Phonétique': {
              status: 'nul',
              senses: ['son guttural', 'la lettre hamza'],
              proof_ctx: "La phonétique (le son hamza) est un sens technique linguistique. Hors sujet dans un avertissement moral."
            }
          }
        }
      },
      {
        word_key: 'lmz',
        position: 4,
        sense_chosen: 'calomnier',
        analysis_axes: {
          sense_chosen: 'calomnier',
          concept_chosen: 'Médisance/Calomnie',
          concepts: {
            'Médisance/Calomnie': {
              status: 'retenu',
              senses: ['critiquer en secret', 'calomnier'],
              proof_ctx: "D'après les sources étymologiques, lumazah signifie : « celui qui critique en secret, celui qui calomnie ». Le mot est sur la même forme intensive que humazah (fa'ulah). Les deux mots forment une paire complémentaire : humazah couvre le dénigrement ouvert (blâmer, reprocher, faire des signes), lumazah couvre la critique secrète et la calomnie. La racine l-m-z n'a qu'un seul champ sémantique — la médisance et la calomnie — ce qui rend le choix direct. En 9:58 et 9:79, le Coran utilise la racine l-m-z pour décrire ceux qui critiquent la distribution des aumônes.",
              axe1_verset: "Le mot lumazah est le deuxième qualificatif après humazah. Les deux formes intensives (fa'ulah) se renforcent mutuellement. Le champ lexical est celui de l'agression contre la réputation : humazah (dénigrement ouvert) + lumazah (calomnie secrète). Le verset dresse un portrait complet : celui qui attaque les autres de toutes les manières possibles — en face et dans le dos. Le parallèle des deux formes intensives crée un effet d'insistance.",
              axe2_voisins: "Les versets 2-3 complètent le portrait : cette personne qui calomnie les autres est aussi celle qui amasse la richesse et croit qu'elle la rend immortelle. Le profil est cohérent : quelqu'un qui rabaisse les autres (v1) tout en se croyant supérieur grâce à ses biens (v2-3). La calomnie et l'accumulation égoïste font partie du même comportement de mépris.",
              axe3_sourate: "La sourate s'appelle al-Humazah mais le mot lumazah renforce l'idée que le comportement visé est l'atteinte systématique à la dignité d'autrui. La calomnie s'inscrit pleinement dans le thème d'avertissement de la sourate. Les deux mots ensemble définissent le sujet de toute la sourate.",
              axe4_coherence: "Le Coran utilise la racine l-m-z en 9:58 et 9:79 pour décrire ceux qui critiquent la distribution des aumônes — des gens qui médisent sur les choix financiers des autres. Ce contexte renforce le lien entre médisance (v1) et richesse (v2) dans la sourate 104. L'usage coranique de l-m-z est toujours négatif et lié à la critique injuste.",
              axe5_frequence: "La calomnie est un acte qui détruit la confiance entre les membres de la communauté. Pour l'être humain dans sa mission de civilisation, la calomnie secrète empoisonne les relations et rend la coopération impossible. La forme intensive (lumazah) montre un comportement systématique qui sape les fondements de la justice sociale. C'est la face cachée de la corruption — le mal fait dans l'ombre."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'Malheur', pos: 'nom', phon: 'waylun', arabic: 'وَيْلٌ', word_key: 'wyl', is_particle: false, sense_retenu: 'malheur', position: 1 },
      { fr: 'à tout', phon: 'li-kulli', arabic: 'لِّكُلِّ', is_particle: true, position: 2 },
      { fr: 'diffamateur', pos: 'nom', phon: 'humazatin', arabic: 'هُمَزَةٍ', word_key: 'hmz', is_particle: false, sense_retenu: 'dénigrer', position: 3 },
      { fr: 'calomniateur', pos: 'nom', phon: 'lumazatin', arabic: 'لُّمَزَةٍ', word_key: 'lmz', is_particle: false, sense_retenu: 'calomnier', position: 4 }
    ],
    translation_arab: "Malheur à tout diffamateur calomniateur",
    full_translation: "Malheur à tout calomniateur diffamateur,",
    translation_explanation: `§DEMARCHE§

Le mot **wayl** est un nom indéfini au nominatif. En arabe, un nom indéfini en tête de phrase nominale exprime une intensité indéterminée — le malheur est si grand qu'il échappe à la définition. La phrase nominale (pas de verbe) indique une vérité permanente : ce malheur est toujours valable, pas limité à un moment.

La particule **li** (à/pour) indique la direction du malheur — il est destiné à la personne décrite ensuite.

Le mot **kulli** (tout/chaque) universalise l'avertissement. Ce n'est pas un individu précis qui est visé mais quiconque adopte ce comportement.

Le mot **humazah** est un nom intensif sur la forme fa'ulah. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), cette forme exprime l'habitude et l'intensité : celui qui fait l'action constamment. Le Lane's donne pour humazah : « celui qui blâme, reproche ou trouve des défauts chez les autres, beaucoup ou habituellement ; celui qui médit de son frère ; celui qui diffame les gens — l'action peut se faire par des signes de la bouche, de l'œil, de la tête ». Le -ah est pour l'intensité, pas pour le féminin.

Le mot **lumazah** est sur la même forme fa'ulah. Le Lane's donne : « celui qui critique en secret, qui calomnie ». Les deux mots forment une paire : le premier couvre le dénigrement ouvert, le second la critique secrète.

§JUSTIFICATION§

**malheur** — Le sens retenu est « Malédiction/Désastre ». Le mot « malheur » est choisi car il est compris de tous et exprime une conséquence grave sans être du registre religieux. « Damnation » écarté (vocabulaire chrétien). « Détresse » écarté (état intérieur alors que wayl est une annonce extérieure).

**diffamateur** — Le sens retenu est « Blâme/Dénigrement ». Le mot « diffamateur » est choisi car il désigne en français courant quelqu'un qui attaque la réputation d'autrui de manière habituelle. « Blâmeur » écarté (pas un mot standard en français). « Médisant » écarté (trop proche du sens de lumazah — il faut distinguer les deux mots). « Calomniateur » écarté car réservé à lumazah.

**calomniateur** — Le sens retenu est « Médisance/Calomnie ». Le mot « calomniateur » est choisi car il désigne celui qui accuse faussement ou critique en secret. « Médisant » écarté (moins fort que calomniateur, ne rend pas l'intensité de la forme fa'ulah).

§CRITIQUE§

Les traductions courantes (Hamidullah : « Malheur à tout calomniateur diffamateur ») donnent sensiblement le même sens que notre traduction. L'ordre est inversé (calomniateur-diffamateur vs diffamateur-calomniateur) mais cela ne change pas le sens du verset. La seule nuance est que Hamidullah traduit deux mots distincts en arabe par deux mots français proches sans expliquer la distinction : humazah couvre le dénigrement ouvert (gestes, reproches en face) tandis que lumazah couvre la critique secrète. Les deux mots ne sont pas des synonymes — ils forment une paire complémentaire qui couvre tout le spectre de l'atteinte à la dignité.`
  },

  // =====================================================
  // VERSET 104:2 — ٱلَّذِى جَمَعَ مَالًا وَعَدَّدَهُۥ
  // =====================================================
  2: {
    verse_id: 6181,
    analysis_id: 6544,
    words: [
      {
        word_key: 'jme',
        position: 2,
        sense_chosen: 'rassembler',
        analysis_axes: {
          sense_chosen: 'rassembler',
          concept_chosen: 'Rassemblement/Union',
          concepts: {
            'Rassemblement/Union': {
              status: 'retenu',
              senses: ['rassembler', 'réunir', 'assembler', 'contracter', 'unanimité', 'vendredi', 'totalité'],
              proof_ctx: "D'après les sources étymologiques, jama'a signifie : rassembler, réunir, assembler. Le verbe est un accompli forme I — il a rassemblé. Le sens est direct dans ce contexte : l'accumulation de richesse matérielle. La racine j-m-' n'a qu'un seul champ sémantique (le rassemblement sous différentes formes). Le Coran associe régulièrement jama'a + māl pour décrire l'amassement (70:18, 104:2).",
              axe1_verset: "Le verset dit jama'a mālan — il a rassemblé des biens. Le champ lexical est celui de l'accumulation méthodique : rassembler (jama'a) + richesse (māl) + compter ('addadahu). Chaque mot renforce l'idée d'un amassement méthodique et obsessionnel. Le verbe jama'a au passé (accompli) montre que l'accumulation est un fait achevé — cette personne a déjà amassé. Le complément d'objet mālan (indéfini) montre une richesse en quantité indéterminée.",
              axe2_voisins: "Le verset 1 décrit le comportement social (dénigrement). Le verset 2 ajoute le comportement économique (accumulation). Les versets 1-2 forment ensemble le portrait complet de la personne visée. Le verset 3 ajoute la croyance qui soutient ce comportement : l'illusion d'immortalité par la richesse. Le rassemblement est le deuxième trait du profil, pas le premier — le dénigrement vient avant l'argent.",
              axe3_sourate: "La sourate lie deux comportements : dégrader les autres (v1) et accumuler pour soi (v2). Le rassemblement de richesse n'est pas condamné en soi — c'est le fait de le combiner avec le mépris des autres qui constitue le problème. Le thème est la corruption du rapport aux autres et aux biens. La sourate dit que celui qui rabaisse les gens ET amasse la richesse court vers le malheur.",
              axe4_coherence: "Le Coran utilise jama'a dans d'autres passages pour décrire l'accumulation. En 70:18, jama'a fa-aw'ā (il a rassemblé et thésaurisé). En 111:2, la richesse de celui qui possède ne lui sert à rien. L'usage est constant : jama'a associé aux biens matériels décrit l'accumulation égoïste. Le Coran ne condamne pas la richesse mais l'amassement sans redistribution.",
              axe5_frequence: "Rassembler des richesses sans les redistribuer est un obstacle à la mission de justice. Le verset montre que l'accumulation combinée au mépris des autres (v1) représente une corruption fondamentale de la mission de l'être humain. Le rassemblement pour soi seul va à l'encontre de la civilisation qui repose sur la coopération et le partage."
            }
          }
        }
      },
      {
        word_key: 'mwl',
        position: 3,
        sense_chosen: 'richesse',
        analysis_axes: {
          sense_chosen: 'richesse',
          concept_chosen: 'Richesse/Biens',
          concepts: {
            'Richesse/Biens': {
              status: 'retenu',
              senses: ['richesse', 'biens', 'fortune', 'être riche'],
              proof_ctx: "Le Lane's donne : richesse, biens, fortune, être riche. Le mot māl dans le Coran désigne les biens matériels sans exception. L'indéfinition (mālan, sans al-) souligne une richesse en quantité indéterminée — pas une richesse spécifique mais de la richesse en général. La racine m-w-l n'a qu'un seul champ sémantique.",
              axe1_verset: "Le mot mālan est le complément direct de jama'a (rassembler). Le champ lexical est celui de l'accumulation matérielle : rassembler + richesse + compter. Le mot est indéfini (mālan, pas al-māl) — c'est de la richesse en général, pas une richesse spécifique. Le fait qu'il soit à l'accusatif montre qu'il est l'objet de l'accumulation — la richesse est ce qui est amassé.",
              axe2_voisins: "Le verset 3 reprend le même mot sous la forme possessive mālahu (sa richesse). Le passage du mālan indéfini (v2) à mālahu possessif (v3) montre que la personne s'est approprié cette richesse et la considère comme sienne, comme une extension de soi. Cette progression renforce le portrait de l'attachement excessif aux biens — de « des biens » à « SES biens ».",
              axe3_sourate: "La sourate fait de la richesse le deuxième élément du profil de la personne visée. Le thème n'est pas la richesse en soi mais son accumulation égoïste combinée au mépris des autres. La richesse est l'instrument de l'illusion d'immortalité décrite au verset 3 — elle nourrit la croyance que les biens garantissent la permanence.",
              axe4_coherence: "Le Coran utilise māl dans de nombreux passages. En 111:2, « mā aghnā 'anhu māluhu » — sa richesse ne lui a servi à rien. En 92:11, « mā yughnī 'anhu māluhu idhā taraddā » — sa richesse ne lui sera d'aucune utilité quand il tombera. L'usage est constant : la richesse accumulée pour soi-même est vaine face aux conséquences.",
              axe5_frequence: "Les biens matériels sont un outil pour la mission de l'être humain — ils servent à construire la civilisation et à maintenir la justice. Quand ils deviennent un but en soi (accumuler pour accumuler), ils se retournent contre la mission. Le verset montre que la richesse accumulée sans but social mène à la corruption. Le passage de « des biens » à « ses biens » montre la perversion."
            }
          }
        }
      },
      {
        word_key: 'edd',
        position: 5,
        sense_chosen: 'compter',
        analysis_axes: {
          sense_chosen: 'compter',
          concept_chosen: 'Dénombrement/Calcul',
          concepts: {
            'Dénombrement/Calcul': {
              status: 'retenu',
              senses: ['compter', 'dénombrer', 'nombre', 'énumérer ses qualités', 'nombreux'],
              proof_ctx: "D'après les sources étymologiques, 'addada signifie : compter, dénombrer, énumérer. Le verbe est un accompli forme II (intensive) — il a compté avec insistance, il a dénombré méthodiquement. La forme II ajoute l'intensité : ce n'est pas un comptage rapide mais un dénombrement obsessionnel. Le sens de Préparation (préparer, équiper) est hors sujet — le verset parle de compter une richesse déjà accumulée, pas de la préparer pour un usage.",
              axe1_verset: "Le verset dit wa-'addadahu — et il l'a compté/dénombré. Le champ lexical est celui de l'accumulation méthodique : rassembler (jama'a) + richesse (māl) + compter ('addadahu). Le fait de compter sa richesse après l'avoir rassemblée montre une obsession pour la quantification. Le verbe est à la forme II (intensive) — il ne compte pas juste une fois, il recompte et vérifie méthodiquement. Le pronom suffixe -hu renvoie à mālan (la richesse).",
              axe2_voisins: "Le verset 3 dit « il pense que sa richesse l'a rendu éternel ». Le comptage du verset 2 est le mécanisme de cette illusion : c'est en comptant qu'il mesure sa puissance et croit à son immortalité. Le lien v2→v3 est direct : compter mène à croire qu'on est éternel. Le verset 4 (kallā — certainement pas) interrompt brutalement cette chaîne de raisonnement.",
              axe3_sourate: "Le comptage s'inscrit dans le thème de l'obsession matérielle. La sourate décrit un parcours : dénigrer les autres (v1) → amasser (v2a) → compter (v2b) → croire à l'immortalité (v3) → être écrasé (v4-9). Le comptage est l'étape de l'auto-persuasion — c'est la quantification qui nourrit l'illusion de permanence.",
              axe4_coherence: "Le Coran utilise la racine '-d-d dans 72:28 (ahsā kulla shay'in 'adadan — Il a dénombré chaque chose). En 19:94 (laqad ahsāhum wa-'addahum 'addā — Il les a comptés et dénombrés). Le comptage est un acte rationnel de mesure. Quand Dieu compte, c'est un acte de maîtrise ; quand l'humain compte sa richesse, c'est un acte d'auto-illusion.",
              axe5_frequence: "Le comptage obsessionnel des biens matériels détourne de la mission de justice. Au lieu de compter ce qu'il possède, l'être humain dans sa mission de civilisation devrait mesurer ce qu'il contribue. Le verset montre la perversion du calcul quand il est tourné vers soi — compter pour se rassurer au lieu de compter pour redistribuer."
            },
            'Préparation': {
              status: 'nul',
              senses: ['préparer', 'équiper'],
              proof_ctx: "La préparation implique un acte tourné vers l'avenir — préparer quelque chose pour un usage futur. Le verset parle de compter une richesse déjà accumulée, pas de la préparer. Hors sujet."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'celui qui', phon: 'alladhī', arabic: 'ٱلَّذِى', is_particle: true, position: 1 },
      { fr: 'a amassé', pos: 'verbe', phon: "jama'a", arabic: 'جَمَعَ', word_key: 'jme', is_particle: false, sense_retenu: 'rassembler', position: 2 },
      { fr: 'des biens', pos: 'nom', phon: 'mālan', arabic: 'مَالًا', word_key: 'mwl', is_particle: false, sense_retenu: 'richesse', position: 3 },
      { fr: 'et', phon: 'wa', arabic: 'وَ', is_particle: true, position: 4 },
      { fr: 'les a comptés', pos: 'verbe', phon: "'addadahu", arabic: 'عَدَّدَهُۥ', word_key: 'edd', is_particle: false, sense_retenu: 'compter', position: 5 }
    ],
    translation_arab: "celui qui a amassé des biens et les a comptés",
    full_translation: "qui amasse une fortune et la compte,",
    translation_explanation: `§DEMARCHE§

Le pronom relatif **alladhī** (celui qui) rattache le verset 2 au verset 1 — il précise qui est le diffamateur calomniateur.

Le mot **jama'a** est un verbe accompli forme I. Il signifie « il a rassemblé ». L'accompli montre que l'accumulation est un fait achevé — cette personne a déjà amassé. Le complément mālan est indéfini, ce qui montre une richesse en quantité indéterminée.

Le mot **mālan** est un nom indéfini à l'accusatif — des biens (pas « les biens » ou « ses biens »). L'indéfinition souligne la quantité indéterminée.

Le mot **'addadahu** est un verbe accompli forme II (intensive). La forme II ajoute l'intensité à l'action : il n'a pas juste compté, il a dénombré méthodiquement, recompté. Le pronom suffixe -hu renvoie à mālan (la richesse). La forme II montre une obsession du comptage.

§JUSTIFICATION§

**amassé** — Le sens retenu est « Rassemblement/Union ». Le mot « amasser » est choisi car il combine le rassemblement avec l'idée d'accumulation quantitative. « Rassembler » écarté (trop neutre, pourrait être pour les distribuer). « Réunir » écarté (implique des éléments séparés qu'on rapproche, pas une accumulation).

**biens** — Le sens retenu est « Richesse/Biens ». Le mot « biens » est choisi car il est plus général que « fortune » (qui implique une grande quantité). Le texte dit mālan indéfini — de la richesse sans préciser combien. « Fortune » écarté (trop spécifique). « Argent » écarté (trop restrictif, māl couvre tous les types de biens).

**comptés** — Le sens retenu est « Dénombrement/Calcul ». Le mot « compter » est choisi car il est le plus direct en français courant pour décrire l'acte de dénombrer. « Dénombrer » écarté (registre administratif). « Énumérer » écarté (trop formel).

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit mālan par « fortune » — ce mot implique une grande richesse, alors que le texte arabe utilise le nom indéfini mālan sans préciser la quantité. La nuance est mineure mais « biens » est plus fidèle à l'indéfinition du texte.`
  },

  // =====================================================
  // VERSET 104:3 — يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ
  // =====================================================
  3: {
    verse_id: 6182,
    analysis_id: 6545,
    words: [
      {
        word_key: 'hsb',
        position: 1,
        sense_chosen: 'estimer',
        analysis_axes: {
          sense_chosen: 'estimer',
          concept_chosen: 'Calcul/Évaluation',
          concepts: {
            'Calcul/Évaluation': {
              status: 'retenu',
              senses: ['compter', 'estimer', 'penser', 'compte'],
              proof_ctx: "D'après les sources étymologiques, hasiba signifie : compter, estimer, penser, évaluer. Le verbe yahsabu est un inaccompli forme I — il estime/pense (action en cours, habituelle). Le sens de calcul mental (estimer, croire) est le plus direct dans ce contexte : la personne fait une évaluation erronée de la réalité. La Suffisance (suffire, suffisant) ne s'insère pas syntaxiquement — « il suffit que sa richesse l'a rendu éternel » ne se dit pas. La Noblesse est hors sujet.",
              axe1_verset: "Le verset dit yahsabu anna mālahu akhladahu — il estime que sa richesse l'a rendu éternel. Le champ lexical est celui du raisonnement erroné : estimer (yahsabu) + richesse (mālahu) + éternité (akhladahu). Le mot yahsabu introduit la croyance qui motive le comportement des versets 1-2. C'est un verbe inaccompli — l'estimation est en cours, habituelle, elle se renouvelle constamment. Il ne pense pas cela une seule fois — il le pense tout le temps.",
              axe2_voisins: "Le verset 2 décrit l'accumulation et le comptage. Le verset 3 montre le résultat de ce comptage : la personne en arrive à croire que sa richesse la rend éternelle. Les versets 2 et 3 forment un enchaînement logique : accumuler → compter → croire à l'immortalité. Le verset 4 (kallā — certainement pas) interrompt brutalement cette chaîne de raisonnement. Le contraste v3→v4 est le pivot de la sourate.",
              axe3_sourate: "L'estimation erronée est le pivot de la sourate. C'est parce que cette personne croit que sa richesse la rend éternelle qu'elle se permet de dénigrer les autres (v1) et d'accumuler (v2). Le verset 3 révèle la racine psychologique du comportement : l'illusion d'immortalité. Toute la sourate s'articule autour de cette erreur de jugement.",
              axe4_coherence: "Le Coran utilise yahsabu dans d'autres passages pour décrire des croyances erronées. En 3:169 (wa-lā tahsabanna — ne pense pas), en 3:178 (wa-lā yahsabanna — qu'ils ne pensent pas), la formule introduit systématiquement une estimation que le texte corrige ensuite. L'usage est constant : yahsabu introduit ce que quelqu'un croit à tort. Le Coran ne condamne pas le fait de penser mais le contenu erroné de cette pensée.",
              axe5_frequence: "L'estimation erronée est le mécanisme de la corruption. La personne se trompe dans son évaluation de la réalité — elle pense que les biens matériels garantissent la permanence. Pour la mission de l'être humain, cette erreur de jugement mène à la destruction du tissu social : si on croit que l'argent rend immortel, on accumule sans redistribuer et on méprise ceux qui ont moins. La croyance erronée est la source du comportement corrompu."
            },
            'Suffisance': {
              status: 'nul',
              senses: ['suffire', 'suffisant'],
              proof_ctx: "La suffisance signifie « être assez, combler le besoin ». Syntaxiquement, « il suffit que sa richesse l'a rendu éternel » ne fonctionne pas en arabe : yahsabu anna n'introduit pas la suffisance mais une estimation. Hors sujet."
            },
            'Sens isolé/Noblesse': {
              status: 'nul',
              senses: ['noblesse'],
              proof_ctx: "La noblesse est un rang social. Le verset parle d'une croyance, pas d'un rang. Hors sujet."
            }
          }
        }
      },
      {
        word_key: 'mwl',
        position: 3,
        sense_chosen: 'richesse',
        analysis_axes: {
          sense_chosen: 'richesse',
          concept_chosen: 'Richesse/Biens',
          concepts: {
            'Richesse/Biens': {
              status: 'retenu',
              senses: ['richesse', 'biens', 'fortune', 'être riche'],
              proof_ctx: "Le mot mālahu est le même mot que mālan au verset 2, cette fois avec le pronom possessif -hu (sa richesse). Le passage de l'indéfini (v2) au possessif (v3) marque l'appropriation — la richesse est devenue une extension de la personne. Le sens de richesse/biens est le seul pertinent pour la racine m-w-l.",
              axe1_verset: "Le mot mālahu est en position de sujet de akhladahu — sa richesse l'a rendu éternel. Le champ lexical montre que la richesse est devenue l'agent de l'éternité : ce sont LES BIENS qui rendent éternel (dans la croyance de la personne). Le pronom possessif -hu marque l'appropriation totale — la richesse est intégrée à l'identité de la personne. Le mot passe de mālan indéfini (v2) à mālahu possessif (v3).",
              axe2_voisins: "Au verset 2, la richesse est l'objet de l'accumulation (jama'a mālan). Au verset 3, elle devient le sujet de l'éternité (mālahu akhladahu). Ce changement de rôle grammatical est significatif : la richesse passe d'objet passé à agent actif. La personne lui attribue un pouvoir qu'elle n'a pas — le pouvoir de rendre éternel.",
              axe3_sourate: "La richesse est le fil conducteur des versets 2-3. D'abord accumulée et comptée (v2), puis divinisée comme source d'éternité (v3). La sourate montre la progression de l'attachement aux biens : de la possession à l'adoration. La richesse devient une idole — elle est censée donner ce que seul Dieu peut donner (l'éternité).",
              axe4_coherence: "En 111:2, le Coran dit que la richesse ne sert à rien face aux conséquences. En 92:11, la richesse ne sera d'aucune utilité quand la personne tombera. Le message est constant : la richesse ne garantit pas la permanence. Le verset 104:3 décrit exactement l'illusion que le Coran dénonce partout.",
              axe5_frequence: "La richesse devenue source d'identité et d'illusion d'éternité est la perversion ultime de la mission du khalifa. Les biens sont des outils pour la civilisation, pas des sources de permanence. Quand la richesse remplace la mission comme objectif de vie, tout le système se corrompt : on méprise les autres (v1), on accumule (v2), on se croit éternel (v3)."
            }
          }
        }
      },
      {
        word_key: 'xld',
        position: 4,
        sense_chosen: 'demeurer éternellement',
        analysis_axes: {
          sense_chosen: 'demeurer éternellement',
          concept_chosen: 'Éternité/Permanence',
          concepts: {
            'Éternité/Permanence': {
              status: 'retenu',
              senses: ['demeurer éternellement', 'rester pour toujours'],
              proof_ctx: "D'après les sources étymologiques, khalada signifie : demeurer éternellement, rester pour toujours. Le verbe akhladahu est un accompli forme IV — la forme IV (af'ala) signifie « faire devenir éternel ». La richesse FAIT devenir éternel, c'est elle l'agent de l'éternité supposée. Le sens d'éternité est le seul pertinent — l'Inclination (pencher vers) ne fonctionne pas avec la forme IV et le pronom suffixe dans ce contexte.",
              axe1_verset: "Le verset dit mālahu akhladahu — sa richesse l'a rendu éternel. Le champ lexical est celui de l'illusion de permanence : richesse (māl) + éternité (akhladahu). L'éternité est l'aboutissement de la chaîne d'erreur : le comptage de la richesse mène à la croyance en l'immortalité. La forme IV (af'ala) signifie « faire devenir » — la richesse FAIT devenir éternel. C'est la richesse qui est l'agent, pas la personne.",
              axe2_voisins: "Le verset 2 décrit l'accumulation, le verset 3 en donne la raison psychologique : cette personne croit que ses biens lui assurent la permanence. Le verset 4 (kallā — certainement pas) brise cette illusion brutalement. L'éternité est le mirage que le texte détruit. Le contraste entre v3 (il pense qu'il est éternel) et v4 (il sera jeté) est le moment central de la sourate.",
              axe3_sourate: "L'illusion d'éternité par la richesse est l'erreur fondamentale que la sourate dénonce. C'est cette croyance qui justifie (dans l'esprit de la personne) le dénigrement des autres et l'accumulation. La sourate montre que cette croyance est fausse en décrivant la hutamah — la destruction totale, l'exact opposé de l'éternité.",
              axe4_coherence: "Le Coran utilise la racine kh-l-d dans de nombreux passages sur l'éternité. En 21:34, « a-fa-in mitta fa-humu l-khālidūna » — si tu meurs, eux seront-ils éternels ? En 26:129, les constructions sont faites « comme si vous deviez demeurer éternellement ». Le Coran questionne systématiquement l'illusion d'éternité humaine — elle est réservée à la vie future, pas à la vie d'ici-bas.",
              axe5_frequence: "L'illusion d'éternité par les biens matériels est un obstacle direct à la mission de l'être humain. Si on croit que la richesse rend éternel, on n'a plus besoin de contribuer à la civilisation ni de se soucier de la justice — on est déjà « arrivé ». Le verset montre que cette croyance mène à la destruction — l'inverse exact de la construction que la mission impose."
            },
            'Inclination': {
              status: 'nul',
              senses: ['pencher vers'],
              proof_ctx: "L'inclination est un mouvement intérieur de l'âme vers ce qui attire. Le verset parle de la croyance que la richesse rend éternel, pas d'une attirance. La forme IV (akhladahu) signifie « faire devenir éternel », pas « faire pencher vers ». Hors sujet."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'il pense', pos: 'verbe', phon: 'yahsabu', arabic: 'يَحْسَبُ', word_key: 'hsb', is_particle: false, sense_retenu: 'estimer', position: 1 },
      { fr: 'que', phon: 'anna', arabic: 'أَنَّ', is_particle: true, position: 2 },
      { fr: 'ses biens', pos: 'nom', phon: 'mālahu', arabic: 'مَالَهُۥٓ', word_key: 'mwl', is_particle: false, sense_retenu: 'richesse', position: 3 },
      { fr: "l'ont rendu éternel", pos: 'verbe', phon: 'akhladahu', arabic: 'أَخْلَدَهُۥ', word_key: 'xld', is_particle: false, sense_retenu: 'demeurer éternellement', position: 4 }
    ],
    translation_arab: "Il pense que ses biens l'ont rendu éternel",
    full_translation: "pensant que sa fortune l'immortalisera.",
    translation_explanation: `§DEMARCHE§

Le mot **yahsabu** est un verbe inaccompli forme I. L'inaccompli indique une action en cours ou habituelle : il pense continuellement, il est convaincu en permanence. Ce n'est pas une pensée ponctuelle mais une conviction installée.

La particule **anna** (que) introduit le contenu de cette conviction — ce qui suit est ce que la personne croit.

Le mot **mālahu** est le même mot que mālan au verset 2, avec le pronom possessif -hu (sa richesse). Le passage de l'indéfini (v2) au possessif (v3) est significatif : la richesse est devenue SA richesse, une partie de lui-même.

Le mot **akhladahu** est un verbe accompli forme IV. La forme IV (af'ala) signifie « faire faire » — ici « faire devenir éternel ». La richesse est le sujet grammatical : ce sont les biens qui rendent éternel (dans la croyance de la personne). L'accompli montre que dans l'esprit de cette personne, c'est déjà fait — il SE CROIT déjà éternel. Le pronom -hu (l'a rendu) montre que c'est la personne elle-même qui bénéficie de cette éternité supposée.

§JUSTIFICATION§

**pense** — Le sens retenu est « Calcul/Évaluation ». Le mot « penser » est choisi car il est le plus naturel en français courant pour exprimer une conviction erronée. « Estimer » écarté (implique un calcul plus rationnel). « Compter » écarté (déjà utilisé pour 'addadahu au v2, et ici le sens est celui de la croyance, pas du dénombrement).

**biens** — Le sens retenu est « Richesse/Biens ». Même choix qu'au v2 pour la cohérence. Le pronom possessif change « des biens » en « ses biens ».

**rendu éternel** — Le sens retenu est « Éternité/Permanence ». L'expression « rendu éternel » est choisie car elle rend la forme IV (faire devenir) avec l'idée d'éternité. « Immortalisé » écarté (trop littéraire). « Fait durer pour toujours » écarté (trop long, même sens).

§CRITIQUE§

Hamidullah traduit par « pensant que sa fortune l'immortalisera » — il utilise le futur (« immortalisera ») alors que l'arabe utilise un accompli (akhladahu — l'a rendu éternel). L'accompli montre que dans l'esprit de cette personne, l'éternité est déjà acquise, pas un projet futur. La nuance est significative : la personne ne SOUHAITE pas l'éternité, elle la CROIT déjà obtenue. Le futur de Hamidullah adoucit l'illusion en la projetant dans l'avenir, alors que l'accompli arabe montre une conviction déjà installée.`
  },

  // =====================================================
  // VERSET 104:4 — كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ
  // =====================================================
  4: {
    verse_id: 6183,
    analysis_id: 6546,
    words: [
      {
        word_key: 'nbv',
        position: 2,
        sense_chosen: 'jeter',
        analysis_axes: {
          sense_chosen: 'jeter',
          concept_chosen: 'Rejet/Abandon',
          concepts: {
            'Rejet/Abandon': {
              status: 'retenu',
              senses: ['jeter', 'rejeter', 'abandonner', 'expulser', 'enfant trouvé', 'rompre un pacte', 'dissoudre un traité', 'déclarer la guerre', 'négliger'],
              proof_ctx: "D'après les sources étymologiques, nabadha signifie : « il a jeté, lancé, au loin, comme une chose estimée sans importance ou sans valeur ». Le verbe la-yunbadhanna est un passif inaccompli emphatique avec lam de serment + nūn de confirmation — la triple emphase (lam + passif + nūn) renforce le caractère absolument inévitable du rejet. La personne qui traitait les autres comme sans valeur (v1) est elle-même traitée comme sans valeur. Le retournement est total. Le Retrait/Isolement (se retirer) est incompatible avec le passif — on ne SE retire pas quand on est JETÉ. La Fermentation et la Quantité/Valeur sont hors sujet.",
              axe1_verset: "Le verset dit la-yunbadhanna fī l-hutamati — il sera assurément jeté dans la broyeuse. Le champ lexical est celui de la conséquence : rejet (yunbadhanna) + broyeuse (hutamah). Le verbe est au passif — la personne qui dénigrait et amassait n'a plus aucun contrôle, elle est jetée comme un objet sans valeur. Le retournement est total : celui qui traitait les autres comme sans valeur est lui-même traité comme sans valeur. La triple emphase (lam + passif + nūn) rend le rejet absolument inévitable.",
              axe2_voisins: "Le verset s'ouvre par kallā (certainement pas) qui brise net l'illusion d'éternité du verset 3. Puis le verbe au passif montre que la personne n'a plus aucun contrôle — elle est jetée. Les versets 5-9 détaillent ce dans quoi elle est jetée. Le passage du v3 (il pense qu'il est éternel) au v4 (il est jeté) est brutal et immédiat — pas de transition, pas d'avertissement supplémentaire.",
              axe3_sourate: "Le rejet dans la hutamah est la conséquence du comportement des versets 1-3. La sourate suit une structure de cause et conséquence : comportement (v1-3) → conséquence (v4-9). Le rejet marque le basculement entre les deux parties. Le mot kallā est la charnière — il ferme la partie « comportement » et ouvre la partie « conséquence ».",
              axe4_coherence: "Le Coran utilise la racine n-b-dh en 3:187 (fa-nabadhūhu warā'a zuhūrihim — ils le jetèrent derrière leur dos) pour décrire le rejet des engagements envers Dieu. En 8:58, le verbe nabadha est utilisé pour « rejeter un traité ». L'idée de jeter comme quelque chose sans valeur est constante dans le Coran. En 104, c'est la personne elle-même qui est jetée — ce qu'elle faisait aux autres lui est retourné.",
              axe5_frequence: "Le rejet est la conséquence logique de la corruption. Celui qui rejette les autres (en les dénigrant, v1) et rejette ses responsabilités sociales (en accumulant pour soi, v2) finit par être lui-même rejeté. La symétrie est parfaite : le dénigrement était un rejet social, la hutamah est un rejet définitif. Pour la mission de l'être humain, le rejet dans la hutamah montre que la corruption mène au point de non-retour."
            },
            'Retrait/Isolement': {
              status: 'peu_probable',
              senses: ['se retirer', "s'isoler", "s'écarter"],
              proof_ctx: "Le retrait est un acte volontaire et réflexif — on se retire soi-même. Le verset utilise le passif emphatique (la-yunbadhanna) : la personne est jetée par un agent extérieur, elle n'a pas le choix. La voix passive exclut la dimension volontaire du retrait. Le rejet par un agent extérieur est l'exact inverse du retrait volontaire.",
              axe1_verset: "Le verset utilise le passif (yunbadhanna) — la personne est jetée par un agent extérieur. Le retrait est un acte volontaire et réflexif (se retirer soi-même). La voix passive est incompatible avec un acte volontaire — on ne se retire pas quand on est jeté. Le champ lexical est celui de la contrainte (être jeté + dans la broyeuse), pas du choix.",
              axe2_voisins: "Le verset 3 décrit quelqu'un qui se croit éternel. Le verset 4 montre qu'il est JETÉ — pas qu'il se retire. Le contraste entre la croyance en sa propre puissance (v3) et le fait d'être jeté comme un objet (v4) est le pivot de la sourate. Le retrait volontaire détruirait ce contraste.",
              axe3_sourate: "La sourate est un avertissement : le diffamateur qui amasse sera JETÉ. Si la personne se retirait elle-même, il n'y aurait pas d'avertissement — juste un choix personnel. La dimension d'avertissement exige le passif : quelqu'un le jette, pas lui-même.",
              axe4_coherence: "Le Coran utilise la forme VIII (intabadha) pour le retrait volontaire en 19:16 (elle se retira à l'écart de sa famille). La distinction entre les formes est claire : forme I passive = être jeté, forme VIII = se retirer. Le verset 104:4 utilise la forme I passive.",
              axe5_frequence: "Le retrait volontaire n'a pas de dimension de conséquence. La sourate annonce un malheur (wayl, v1) — le malheur exige une action subie, pas un choix. Le retrait ne rend pas compte de la gravité de l'avertissement."
            },
            'Fermentation/Boisson': {
              status: 'nul',
              senses: ['fermenter', 'infuser', 'nabīdh'],
              proof_ctx: "La fermentation est un processus chimique de transformation des fruits dans l'eau. Hors sujet dans un contexte d'avertissement et de feu."
            },
            'Quantité/Valeur': {
              status: 'nul',
              senses: ['peu', 'rebuts'],
              proof_ctx: "La petite quantité et les rebuts ne s'appliquent pas à l'action de jeter une personne dans le feu. Hors sujet."
            }
          }
        }
      },
      {
        word_key: 'htm',
        position: 4,
        sense_chosen: 'briser',
        analysis_axes: {
          sense_chosen: 'briser',
          concept_chosen: 'Brisure/Destruction',
          concepts: {
            'Brisure/Destruction': {
              status: 'retenu',
              senses: ['briser'],
              proof_ctx: "D'après les sources étymologiques, hatama signifie : briser, réduire en morceaux, écraser. L'acte est irréversible. Le mot al-hutamah est sur la forme fa'alah (intensive) avec l'article al- (défini). La forme intensive fa'alah indique non pas quelque chose qui casse mais quelque chose qui BROIE, qui écrase tout ce qui entre. C'est un nom défini qui désigne une réalité spécifique — le feu destructeur que les versets 6-9 vont définir. Le terme n'apparaît nulle part ailleurs dans le Coran, il est propre à cette sourate.",
              axe1_verset: "Le mot al-hutamah est le lieu dans lequel la personne est jetée. Le nom est défini (al-) — la broyeuse est une réalité connue et identifiée, pas n'importe quelle destruction. Le champ lexical est celui de la destruction totale : être jeté (yunbadhanna) + broyeuse (hutamah). La forme fa'alah est intensive — ce n'est pas quelque chose qui casse, c'est quelque chose qui BROIE et écrase tout ce qui entre.",
              axe2_voisins: "Le verset 5 demande « sais-tu ce qu'est la hutamah ? » — la question rhétorique souligne le caractère extraordinaire de cette réalité. Le verset 6 répond : « le feu de Dieu, allumé ». La hutamah est donc identifiée au feu de Dieu. Les versets 7-9 décrivent ses propriétés : monte vers les cœurs, fermée sur eux, en colonnes étendues.",
              axe3_sourate: "La hutamah est la conséquence centrale de la sourate. Les versets 1-3 décrivent le comportement, les versets 4-9 décrivent la hutamah. Le mot apparaît deux fois (v4 et v5) pour insister sur son importance. La sourate est construite autour de ce mot — c'est la réponse au wayl du verset 1.",
              axe4_coherence: "Le terme hutamah est unique dans le Coran — il n'apparaît qu'en 104:4 et 104:5. C'est un nom propre pour cette réalité de destruction. Le Coran emploie des termes distincts pour différentes réalités du feu (jahannam, sa'ir, saqar, laza, hutamah), chacun avec sa nuance. La hutamah est celle qui broie.",
              axe5_frequence: "La broyeuse est la conséquence de la corruption sociale (dénigrement) et économique (accumulation égoïste). Pour la mission de l'être humain, elle montre que la destruction totale est le résultat de la corruption — pas une punition arbitraire mais le résultat logique d'un comportement qui détruit le tissu social. Le choix du mot « broyeuse » insiste sur l'irréversibilité : ce qui est broyé ne peut pas être reconstitué."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'Certainement pas !', phon: 'kallā', arabic: 'كَلَّا', is_particle: true, position: 1 },
      { fr: 'il sera assurément jeté', pos: 'verbe', phon: 'la-yunbadhanna', arabic: 'لَيُنۢبَذَنَّ', word_key: 'nbv', is_particle: false, sense_retenu: 'jeter', position: 2 },
      { fr: 'dans', phon: 'fī', arabic: 'فِى', is_particle: true, position: 3 },
      { fr: 'la Broyeuse', pos: 'nom', phon: 'al-hutamati', arabic: 'ٱلْحُطَمَةِ', word_key: 'htm', is_particle: false, sense_retenu: 'briser', position: 4 }
    ],
    translation_arab: "Certainement pas ! Il sera assurément jeté dans la Broyeuse",
    full_translation: "Mais non! Il sera certes, jeté dans la Hutamah.",
    translation_explanation: `§DEMARCHE§

Le mot **kallā** est une interjection qui signifie « certainement pas ». C'est un mot de réfutation et de coupure — il brise net la croyance du verset 3. Il ne signifie pas juste « non » mais « absolument pas, desist ».

Le mot **la-yunbadhanna** est un verbe inaccompli passif avec deux emphases : le lam de serment (la-) et le nūn de confirmation (-anna). D'après les sources étymologiques, nabadha signifie « jeter au loin comme une chose sans valeur ». Le passif montre que la personne n'a aucun contrôle — elle est jetée par un agent extérieur. La triple emphase (lam + passif + nūn) rend le rejet absolument certain et inévitable. Le retournement est total : celui qui traitait les autres comme sans valeur (v1) est lui-même traité comme sans valeur.

Le mot **al-hutamati** est un nom défini sur la forme fa'alah (intensive). La racine h-t-m signifie « briser, réduire en morceaux ». La forme fa'alah (comme les formes humazah et lumazah du v1) exprime l'intensité : ce n'est pas quelque chose qui casse, c'est quelque chose qui BROIE tout ce qui entre. L'article al- montre que la Broyeuse est une réalité définie et connue.

§JUSTIFICATION§

**jeté** — Le sens retenu est « Rejet/Abandon ». Le mot « jeter » est choisi car il rend le sens originel de nabadha (lancer au loin comme sans valeur) et le passif (être jeté). « Rejeté » écarté (trop abstrait, perd la dimension physique du lancer). « Expulsé » écarté (implique un espace fermé qu'on quitte, alors qu'ici on est lancé DANS un espace).

**Broyeuse** — Le sens retenu est « Brisure/Destruction ». Le mot « Broyeuse » est choisi car la forme intensive fa'alah décrit une réalité qui broie activement et constamment tout ce qui entre. « Destructrice » écarté (trop général). « Écrasante » écarté (ne rend pas la forme intensive nominale). « Broyeuse » avec majuscule car c'est un nom propre dans le Coran (terme unique à cette sourate).

§CRITIQUE§

Hamidullah traduit par « la Hutamah » — il garde le mot arabe sans le traduire. Ce choix prive le lecteur francophone du sens du mot. En arabe, tout le monde comprend que hutamah vient de hatama (briser) — le lecteur arabe sait qu'il s'agit de « la Broyeuse ». En gardant le mot arabe, Hamidullah transforme un nom parlant en nom opaque. Notre traduction « la Broyeuse » respecte l'étymologie et donne au lecteur la même compréhension que le lecteur arabe. C'est un exemple d'information perdue en traduction qui peut être facilement restituée.`
  },

  // =====================================================
  // VERSET 104:5 — وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ
  // =====================================================
  5: {
    verse_id: 6184,
    analysis_id: 6547,
    words: [
      {
        word_key: 'dry',
        position: 2,
        sense_chosen: 'savoir',
        analysis_axes: {
          sense_chosen: 'savoir',
          concept_chosen: 'Connaissance/Perception',
          concepts: {
            'Connaissance/Perception': {
              status: 'retenu',
              senses: ['savoir', 'percevoir', 'se rendre compte'],
              proof_ctx: "D'après les sources étymologiques, darā signifie : savoir, percevoir, se rendre compte. La forme IV (adrā) signifie « faire savoir, faire connaître ». La formule mā adrāka (qu'est-ce qui t'a fait savoir) est un procédé coranique récurrent qui souligne qu'une réalité dépasse la connaissance humaine ordinaire. La racine d-r-y n'a qu'un seul champ sémantique — la connaissance et la perception.",
              axe1_verset: "Le verset utilise la formule mā adrāka mā — qu'est-ce qui t'a fait savoir ce qu'est. Le champ lexical est celui de l'incompréhension face à la destruction : la Broyeuse est si extraordinaire qu'elle dépasse la connaissance humaine ordinaire. Le verbe est à la forme IV (af'ala) — il signifie « faire savoir à quelqu'un », pas « savoir soi-même ». L'accompli souligne que cette connaissance n'a pas été acquise par l'expérience.",
              axe2_voisins: "Le verset 4 introduit la hutamah, le verset 5 souligne son caractère extraordinaire, le verset 6 la définit. Le verset 5 crée une pause entre l'annonce (v4) et l'explication (v6). La formule mā adrāka prépare le lecteur à une révélation — ce qui suit est important et dépasse l'expérience.",
              axe3_sourate: "La formule mā adrāka marque la transition entre le comportement humain (v1-4) et la description de la conséquence (v6-9). Elle signale que ce qui suit est au-delà de l'expérience humaine ordinaire. La sourate passe du portrait du diffamateur à la nature de la Broyeuse.",
              axe4_coherence: "Le Coran utilise la formule mā adrāka dans 15 passages différents (69:3, 82:17-18, 83:8, 86:2, 90:12, 97:2, 101:3,10, etc.). Dans chaque cas, elle introduit une réalité que l'humain ne peut pas saisir par lui-même — elle nécessite d'être communiquée. L'usage est constant et formulaire dans tout le Coran.",
              axe5_frequence: "La question mā adrāka montre les limites de la connaissance humaine. Pour l'être humain dans sa mission de civilisation, reconnaître les limites de sa propre connaissance est fondamental. Certaines réalités ne sont accessibles que par la révélation — la Broyeuse en fait partie. La formule invite à l'humilité face à ce qu'on ne peut pas comprendre seul."
            }
          }
        }
      },
      {
        word_key: 'htm',
        position: 4,
        sense_chosen: 'briser',
        analysis_axes: {
          sense_chosen: 'briser',
          concept_chosen: 'Brisure/Destruction',
          concepts: {
            'Brisure/Destruction': {
              status: 'retenu',
              senses: ['briser'],
              proof_ctx: "Le mot al-hutamatu réapparaît en position de sujet dans la question rhétorique. La répétition du mot (v4 et v5) insiste sur son importance et sur le fait que la Broyeuse mérite d'être expliquée. Le Lane's confirme : hatama signifie briser, écraser de manière irréversible.",
              axe1_verset: "Le mot al-hutamatu réapparaît dans la question rhétorique mā al-hutamatu — ce qu'est la Broyeuse. Le champ lexical est celui de l'incompréhension face à la destruction : la Broyeuse est si totale qu'elle dépasse la connaissance humaine. La répétition du mot hutamah (v4 et v5) insiste sur la gravité de cette réalité — le texte prend le temps de poser la question avant de répondre.",
              axe2_voisins: "Le verset 5 est la transition entre l'annonce de la hutamah (v4) et sa définition (v6). La question mā al-hutamatu demande la nature de cette destruction. Le verset 6 répondra : le feu de Dieu, allumé. Les versets 7-9 ajouteront les propriétés de ce feu.",
              axe3_sourate: "La hutamah est le pivot de la deuxième partie de la sourate (v4-9). Sa répétition au v5 montre qu'elle est l'aboutissement de tout le discours. Le texte prend le temps de poser la question (v5) avant de répondre (v6-9) — cette pause crée une attente et souligne la gravité.",
              axe4_coherence: "Le terme hutamah n'apparaît que dans cette sourate. Sa forme intensive (fa'alah) indique un feu qui ne fait pas que brûler — il écrase et réduit tout en miettes. Le Coran emploie des termes spécifiques pour différentes réalités (jahannam, sa'ir, saqar, laza, hutamah). Chacun a sa nuance propre.",
              axe5_frequence: "La question mā al-hutamatu invite l'être humain à méditer sur les conséquences de la corruption. Le fait que le texte pose la question montre que la compréhension de ces conséquences n'est pas évidente — elle demande une réflexion active. La mission du khalifa inclut cette capacité de méditation sur les conséquences de ses actes."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'Et', phon: 'wa', arabic: 'وَ', is_particle: true, position: 1 },
      { fr: "qu'est-ce qui t'a fait savoir", pos: 'verbe', phon: 'mā adrāka', arabic: 'مَآ أَدْرَىٰكَ', word_key: 'dry', is_particle: false, sense_retenu: 'savoir', position: 2 },
      { fr: "ce qu'est", phon: 'mā', arabic: 'مَا', is_particle: true, position: 3 },
      { fr: 'la Broyeuse ?', pos: 'nom', phon: 'al-hutamatu', arabic: 'ٱلْحُطَمَةُ', word_key: 'htm', is_particle: false, sense_retenu: 'briser', position: 4 }
    ],
    translation_arab: "Et qu'est-ce qui t'a fait savoir ce qu'est la Broyeuse ?",
    full_translation: "Et qui te dira ce qu'est la Hutamah?",
    translation_explanation: `§DEMARCHE§

La formule **mā adrāka mā** est un procédé rhétorique coranique. Elle se décompose en : mā (qu'est-ce qui) + adrāka (t'a fait savoir, verbe accompli forme IV) + mā (ce que). La forme IV (af'ala) de la racine d-r-y signifie « faire savoir, faire connaître ». La question est rhétorique — elle ne demande pas une réponse mais souligne que la réalité décrite dépasse la connaissance humaine ordinaire.

Le mot **al-hutamatu** réapparaît en position de sujet. La répétition du mot (v4 et v5) est un procédé d'insistance : le texte nomme la Broyeuse (v4), puis prend le temps de poser la question sur sa nature (v5), puis y répond (v6-9).

§JUSTIFICATION§

**fait savoir** — Le sens retenu est « Connaissance/Perception ». L'expression « fait savoir » rend la forme IV (adrā = faire connaître). « Appris » écarté (implique un processus d'apprentissage). « Informé » écarté (registre administratif).

**Broyeuse** — Même choix qu'au verset 4, pour la cohérence.

§CRITIQUE§

Hamidullah traduit par « Et qui te dira ce qu'est la Hutamah? » — deux différences. Premièrement, il garde « Hutamah » sans traduire (voir critique du v4). Deuxièmement, il traduit mā adrāka par « qui te dira » (futur), alors que le verbe adrāka est un accompli (passé). La formule coranique demande « qu'est-ce qui t'a DÉJÀ fait savoir » — la connaissance est déjà transmise, pas à venir. Le futur de Hamidullah change la temporalité de la question.`
  },

  // =====================================================
  // VERSET 104:6 — نَارُ ٱللَّهِ ٱلْمُوقَدَةُ
  // =====================================================
  6: {
    verse_id: 6185,
    analysis_id: 6548,
    words: [
      {
        word_key: 'nwr',
        position: 1,
        sense_chosen: 'feu',
        analysis_axes: {
          sense_chosen: 'feu',
          concept_chosen: 'Lumière/Clarté',
          concepts: {
            'Lumière/Clarté': {
              status: 'retenu',
              senses: ['lumière', 'éclairer', 'feu', 'guider par la lumière'],
              proof_ctx: "D'après les sources étymologiques, la racine n-w-r couvre à la fois la lumière (nūr) et le feu (nār). Les deux réalités sont liées étymologiquement — le feu est une forme de lumière visible et destructrice. Le mot nāru dans ce verset est en idafa avec allāhi — le feu de Dieu. Le sens de feu est le seul pertinent : le contexte (hutamah, broyeuse, v4-5) exige la dimension destructrice, pas la dimension lumineuse.",
              axe1_verset: "Le mot nāru est en idafa avec allāhi — le feu de Dieu. Le champ lexical est celui de la définition de la hutamah : feu (nāru) + Dieu (allāhi) + allumé (al-mūqadatu). Le feu est la nature de la Broyeuse annoncée au verset 4. Le nom est défini par l'idafa — ce n'est pas n'importe quel feu, c'est le feu DE Dieu. Cette attribution directe est unique dans le Coran.",
              axe2_voisins: "Le verset 5 posait la question « qu'est-ce que la hutamah ? ». Le verset 6 répond directement : le feu de Dieu, allumé. Les versets 7-9 ajoutent les propriétés de ce feu : il monte vers les cœurs (v7), il est fermé sur eux (v8), en colonnes étendues (v9). Le feu est le premier élément de la réponse.",
              axe3_sourate: "Le feu est l'instrument de la destruction annoncée au verset 1 (wayl). La sourate construit progressivement : malheur (v1) → comportement (v1-3) → conséquence nommée (v4) → conséquence définie (v6). Le feu est l'aboutissement concret de l'avertissement — il transforme le malheur abstrait en réalité physique.",
              axe4_coherence: "Le Coran utilise nār dans des centaines de passages. L'expression « nāru llāh » (feu de Dieu) est unique — elle n'apparaît qu'en 104:6. Ailleurs le Coran dit « nāru jahannam » ou simplement « al-nār ». L'attribution directe du feu à Dieu dans ce verset souligne que la conséquence vient directement de l'autorité divine, sans intermédiaire.",
              axe5_frequence: "Le feu de Dieu montre que la conséquence de la corruption n'est pas un hasard mais un acte divin direct. Pour l'être humain dans sa mission de justice, le feu représente la destruction de ce qui refuse de contribuer à la civilisation. L'attribution à Dieu confirme que la justice est garantie — la corruption a des conséquences certaines."
            },
            'Sens isolé/Fleur': {
              status: 'nul',
              senses: ['fleur'],
              proof_ctx: "Hors sujet dans un contexte de feu et de destruction."
            },
            'Sens isolé/Fuir': {
              status: 'nul',
              senses: ['fuir'],
              proof_ctx: "Hors sujet dans un contexte de feu et de destruction."
            }
          }
        }
      },
      {
        word_key: 'alh',
        position: 2,
        sense_chosen: 'divinité',
        analysis_axes: {
          sense_chosen: 'divinité',
          concept_chosen: 'Divinité',
          concepts: {
            'Divinité': {
              status: 'retenu',
              senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
              proof_ctx: "Le mot allāhi est le nom propre de Dieu en position de génitif dans l'idafa nāru llāhi (le feu de Dieu). Le sens est direct et sans ambiguïté. Les autres sens de la racine (adoration, détresse, refuge, domination) ne s'appliquent pas — le mot fonctionne ici comme nom propre.",
              axe1_verset: "Le mot allāhi est en position de génitif dans l'idafa nāru llāhi — le feu appartient à Dieu. Le champ lexical est celui de l'attribution divine : le feu est qualifié comme étant celui de Dieu. Cette idafa attribue directement la Broyeuse à Dieu — ce n'est pas un hasard, une force naturelle ou un accident, c'est le feu DE Dieu.",
              axe2_voisins: "Les versets 1-5 ne mentionnent pas Dieu directement. Le verset 6 l'introduit pour la première fois dans la sourate. L'apparition de Dieu à ce point précis — au moment de définir la Broyeuse — montre que la conséquence est divine. La progression est : l'humain agit (v1-3) → Dieu répond (v6-9).",
              axe3_sourate: "La mention de Dieu dans une sourate d'avertissement ancre l'avertissement dans l'autorité divine. La sourate passe du portrait humain (v1-3) à la réponse divine (v6-9), avec la transition au verset 4 (kallā). Dieu est l'auteur de la conséquence — il n'est pas mentionné dans la partie « comportement » mais seulement dans la partie « conséquence ».",
              axe4_coherence: "Le Coran utilise allāh comme nom propre de Dieu dans tout le texte. L'expression nāru llāh est unique dans le Coran — elle attribue le feu directement à Dieu au lieu de le nommer par un nom propre (jahannam, sa'ir). Cette attribution directe est un choix significatif.",
              axe5_frequence: "La mention de Dieu dans la conséquence montre que la justice n'est pas une conséquence naturelle mais un acte divin. Pour la mission de l'être humain, cela confirme que la corruption a des conséquences garanties par l'autorité suprême — la justice n'est pas optionnelle."
            }
          }
        }
      },
      {
        word_key: 'wqd',
        position: 3,
        sense_chosen: 'allumer',
        analysis_axes: {
          sense_chosen: 'allumer',
          concept_chosen: 'Feu/Combustion',
          concepts: {
            'Feu/Combustion': {
              status: 'retenu',
              senses: ['allumer', 'brûler', 'feu', 'combustible'],
              proof_ctx: "D'après les sources étymologiques, waqada signifie : allumer, brûler. Le mot al-mūqadatu est un participe passif forme IV — le feu qui a été allumé/attisé. Le participe passif confirme l'action d'un agent : quelqu'un (Dieu, mentionné dans la même phrase) a allumé ce feu. La forme IV ajoute l'idée d'un acte délibéré. Test grammatical : participe passif → le feu a SUBI l'allumage → compatible.",
              axe1_verset: "Le mot al-mūqadatu est un participe passif de la forme IV — le feu allumé/attisé. Le champ lexical renforce la description du feu : feu (nāru) + Dieu (allāhi) + allumé (al-mūqadatu). Le participe passif montre que le feu a été allumé par un agent — implicitement Dieu. La forme IV (af'ala) ajoute l'idée de « faire allumer » — le feu est mis en marche délibérément, pas par accident.",
              axe2_voisins: "Le verset 6 est la réponse complète à la question du verset 5. Le mot al-mūqadatu qualifie le feu : il n'est pas juste là, il est activement allumé et attisé. Les versets 7-9 ajoutent d'autres propriétés : il monte vers les cœurs (v7), il est fermé sur eux (v8), en colonnes étendues (v9). Chaque verset ajoute un degré de gravité.",
              axe3_sourate: "L'allumage du feu montre un acte délibéré, pas un phénomène naturel. La sourate présente la conséquence comme une réponse active et intentionnelle au comportement des versets 1-3. Le feu n'est pas un accident — il est allumé en réponse au dénigrement et à l'accumulation égoïste.",
              axe4_coherence: "Le Coran utilise la racine w-q-d en 85:5 (al-nāru dhātu l-waqūd — le feu alimenté). Le sens de combustion/allumage est constant. En 2:17, istawqada nāran (il a allumé un feu). Le participe passif (al-mūqadah) implique que quelqu'un a allumé ce feu — la combustion n'est pas spontanée.",
              axe5_frequence: "Le feu allumé délibérément montre que la conséquence de la corruption est active et intentionnelle, pas passive ou accidentelle. La justice n'est pas un accident — elle est mise en œuvre. Pour la mission de l'être humain, cela rappelle que les actes ont des conséquences délibérées, pas aléatoires."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'Le feu', pos: 'nom', phon: 'nāru', arabic: 'نَارُ', word_key: 'nwr', is_particle: false, sense_retenu: 'feu', position: 1 },
      { fr: 'de Dieu', pos: 'nom', phon: 'allāhi', arabic: 'ٱللَّهِ', word_key: 'alh', is_particle: false, sense_retenu: 'divinité', position: 2 },
      { fr: 'allumé', pos: 'nom', phon: 'al-mūqadatu', arabic: 'ٱلْمُوقَدَةُ', word_key: 'wqd', is_particle: false, sense_retenu: 'allumer', position: 3 }
    ],
    translation_arab: "Le feu de Dieu, allumé",
    full_translation: "Le Feu attisé d'Allah,",
    translation_explanation: `§DEMARCHE§

Le mot **nāru** est un nom féminin en position de mubtada' (sujet de phrase nominale). Il est en idafa avec allāhi — le feu de Dieu. L'idafa (rattachement possessif) attribue le feu directement à Dieu. Cette construction est unique dans le Coran : ailleurs le feu est nommé « nāru jahannam » ou simplement « al-nār », mais ici c'est « nāru llāh ».

Le mot **allāhi** est en position de génitif (mudāf ilayhi) dans l'idafa. C'est le nom propre de Dieu.

Le mot **al-mūqadatu** est un participe passif forme IV. La forme IV (awqada) signifie « allumer, attiser ». Le participe passif (mūqadah) signifie « qui a été allumé/attisé ». Le passif implique un agent — quelqu'un a allumé ce feu. Comme le mot Dieu est dans la même phrase, l'agent est implicitement Dieu. Le -ah final est pour le féminin (accord avec nār qui est féminin en arabe).

§JUSTIFICATION§

**feu** — Le sens retenu est « Lumière/Clarté ». La racine n-w-r couvre la lumière (nūr) et le feu (nār). Le mot « feu » est choisi car le contexte est destructif (hutamah = broyeuse) et le feu est la manifestation destructrice de la racine. « Lumière » écarté (connotation positive, inadaptée au contexte). « Flamme » écarté (trop spécifique, nār couvre tout le feu).

**Dieu** — Le sens retenu est « Divinité ». Allāh traduit par « Dieu » selon la règle des noms propres. « Allah » écarté (mot arabe non traduit, le lecteur francophone comprend mieux « Dieu »).

**allumé** — Le sens retenu est « Feu/Combustion ». Le mot « allumé » est choisi car il rend le participe passif (le feu a été allumé par quelqu'un). « Attisé » écarté (implique que le feu était déjà allumé et qu'on l'a renforcé — la forme IV signifie plus simplement « faire brûler »). « Brûlant » écarté (participe actif, alors que le mot arabe est un participe passif).

§CRITIQUE§

Hamidullah traduit « Le Feu attisé d'Allah ». Deux nuances : « attisé » pour al-mūqadah, et « Allah » non traduit. « Attisé » implique que le feu existait déjà et a été renforcé, alors que awqada (forme IV) signifie « mettre le feu, allumer ». La nuance est mineure. L'emploi de « Allah » au lieu de « Dieu » est un choix de non-traduction — en arabe, allāh est le nom commun pour Dieu (les chrétiens arabes disent aussi allāh). Traduire par « Dieu » est plus naturel en français.`
  },

  // =====================================================
  // VERSET 104:7 — ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ
  // =====================================================
  7: {
    verse_id: 6186,
    analysis_id: 6549,
    words: [
      {
        word_key: 'tle',
        position: 2,
        sense_chosen: 'se lever (soleil)',
        analysis_axes: {
          sense_chosen: 'se lever (soleil)',
          concept_chosen: 'Lever/Apparition',
          concepts: {
            'Lever/Apparition': {
              status: 'retenu',
              senses: ['se lever (soleil)', 'apparaître', 'informer'],
              proof_ctx: "D'après les sources étymologiques, tala'a signifie : se lever (comme le soleil), apparaître, atteindre un sommet. La forme VIII (ittala'a) ajoute l'idée d'atteindre, de surmonter, de pénétrer. Le verbe tattali'u est un inaccompli forme VIII (elle s'élève) — le sujet est al-nār (le feu, féminin). L'action est en cours et continue : le feu s'élève activement et continuellement vers les cœurs. Le sens de bourgeon est hors sujet.",
              axe1_verset: "Le verset dit tattali'u 'alā l-af'idah — elle s'élève sur les cœurs. Le champ lexical est celui de la pénétration intérieure : le feu (v6) s'élève (tattali'u) sur (alā) les cœurs (af'idah). Le feu ne se contente pas de brûler l'extérieur — il monte jusqu'au siège des émotions et des intentions. Le verbe est un inaccompli forme VIII — l'action est en cours, continue, répétée.",
              axe2_voisins: "Le verset 6 identifie le feu de Dieu, le verset 7 décrit sa propriété distinctive : il atteint les cœurs. Le verset 8 ajoutera qu'il est fermé sur eux. La progression est : feu allumé (v6) → monte vers les cœurs (v7) → fermé sur eux (v8) → en colonnes (v9). Chaque verset ajoute une propriété au feu. Le v7 est la propriété la plus frappante : le feu est intérieur, pas seulement extérieur.",
              axe3_sourate: "Le fait que le feu atteigne les cœurs donne à la sourate une dimension intérieure. La sourate ne parle pas seulement d'une destruction physique mais d'une atteinte au siège des émotions et des intentions. Le cœur est le lieu où naissent les croyances — c'est dans le cœur que l'illusion d'immortalité par la richesse (v3) a pris racine. Le feu atteint directement la source du mal.",
              axe4_coherence: "La racine t-l-' est utilisée dans le Coran pour le lever du soleil (18:17 — quand le soleil se lève ; 91:1 — par le soleil et son lever). L'image du lever/de l'ascension est constante. En 104:7, le feu s'élève comme le soleil se lève — mais vers l'intérieur de la personne, vers ses cœurs. L'inversion est frappante : au lieu de monter vers le ciel, le feu monte vers l'intérieur.",
              axe5_frequence: "Le feu qui atteint les cœurs montre que la conséquence touche le siège même des intentions. Pour l'être humain dans sa mission de civilisation, c'est un rappel que la corruption n'est pas qu'un acte extérieur — elle vient du cœur (la croyance erronée du v3) et c'est le cœur qui est atteint en retour. La symétrie est complète : le mal naît dans le cœur, la conséquence y retourne."
            },
            'Sens isolé/Bourgeon': {
              status: 'nul',
              senses: ['bourgeon'],
              proof_ctx: "Le bourgeon est un élément végétal. Hors sujet dans un contexte de feu et de destruction."
            }
          }
        }
      },
      {
        word_key: 'fad',
        position: 4,
        sense_chosen: 'cœur',
        analysis_axes: {
          sense_chosen: 'cœur',
          concept_chosen: 'Cœur/Siège des émotions',
          concepts: {
            'Cœur/Siège des émotions': {
              status: 'retenu',
              senses: ['cœur', 'passion'],
              proof_ctx: "D'après les sources étymologiques, fu'ād signifie : cœur, siège des émotions et des passions. Le fu'ād est le cœur dans sa dimension émotionnelle et perceptive, distinct de qalb (cœur dans sa dimension spirituelle). Le pluriel af'idah (les cœurs) montre que ce sont les cœurs de toutes les personnes visées. Le mot est défini (al-af'idah) — ce sont LES cœurs, une réalité connue. La racine f-'-d n'a qu'un seul champ sémantique.",
              axe1_verset: "Le mot al-af'idah est le complément de tattali'u 'alā — le feu s'élève vers les cœurs. Le champ lexical est celui de l'intériorité atteinte par le feu : le feu pénètre jusqu'au siège des émotions et des intentions. Le cœur est au pluriel (af'idah) — ce sont les cœurs de toutes les personnes visées par l'avertissement. Le mot est défini (al-) — les cœurs sont une réalité connue et universelle.",
              axe2_voisins: "Les versets 1-3 décrivent un comportement qui vient du cœur : la croyance en l'immortalité par la richesse (v3, yahsabu = il pense). Le verset 7 montre que le feu atteint précisément le lieu qui a généré ce comportement. La boucle est complète : le cœur qui a produit l'illusion est le cœur qui est atteint par le feu.",
              axe3_sourate: "Le cœur est le lieu de la croyance erronée du verset 3. La sourate montre que le feu atteint directement la source de l'erreur. Le thème est celui de la justice précise : ce qui a produit le mal est exactement ce qui est atteint. Les cœurs ne sont pas des victimes innocentes — c'est en eux que la corruption a pris racine.",
              axe4_coherence: "Le Coran utilise fu'ād dans d'autres passages. En 46:26, les fu'ād sont mentionnés avec la vue et l'ouïe comme organes de perception : « Nous leur avions donné l'ouïe, la vue et les cœurs (af'idah) ». Le fu'ād est le cœur dans sa dimension de perception et de compréhension. En 104:7, c'est cette perception qui est atteinte.",
              axe5_frequence: "Le cœur est le siège de la conscience et des intentions. Le feu qui atteint les cœurs montre que la conséquence de la corruption touche la racine même de la volonté humaine. Pour l'être humain dans sa mission, le cœur est l'organe de la mission — c'est de là que naissent les intentions de justice ou de corruption. Quand le cœur choisit la corruption, le feu y revient."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'qui', phon: 'allatī', arabic: 'ٱلَّتِى', is_particle: true, position: 1 },
      { fr: "s'élève", pos: 'verbe', phon: "tattali'u", arabic: 'تَطَّلِعُ', word_key: 'tle', is_particle: false, sense_retenu: 'se lever (soleil)', position: 2 },
      { fr: 'sur', phon: "'alā", arabic: 'عَلَى', is_particle: true, position: 3 },
      { fr: 'les cœurs', pos: 'nom', phon: "al-af'idati", arabic: 'ٱلْأَفْـِٔدَةِ', word_key: 'fad', is_particle: false, sense_retenu: 'cœur', position: 4 }
    ],
    translation_arab: "qui s'élève jusqu'aux cœurs",
    full_translation: "qui monte jusqu'aux cœurs.",
    translation_explanation: `§DEMARCHE§

Le pronom relatif **allatī** (qui, féminin) se rapporte à nāru llāh (le feu de Dieu) du verset 6 — le feu est féminin en arabe.

Le mot **tattali'u** est un verbe inaccompli forme VIII de la racine t-l-'. La forme VIII (ittala'a) signifie « s'élever vers, atteindre, surmonter ». L'inaccompli indique une action en cours et continue — le feu s'élève activement et sans cesse. Le préfixe ta- est pour la troisième personne féminin (elle = le feu). La forme VIII ajoute l'idée de pénétration : le feu ne reste pas à la surface, il monte et atteint l'intérieur.

La préposition **'alā** (sur/vers) indique la direction du mouvement — le feu monte VERS les cœurs, il les atteint.

Le mot **al-af'idati** est le pluriel de fu'ād. D'après les sources étymologiques, le fu'ād est le cœur dans sa dimension émotionnelle et perceptive — le siège des émotions, des passions et de la compréhension. Le pluriel montre que ce sont les cœurs de toutes les personnes visées. L'article al- (les) montre que les cœurs sont une réalité connue.

§JUSTIFICATION§

**s'élève** — Le sens retenu est « Lever/Apparition ». Le mot « s'élève » est choisi car il rend le mouvement ascendant de la racine t-l-' (comme le soleil qui se lève) avec l'idée de pénétration de la forme VIII. « Monte » écarté (plus banal, ne rend pas l'idée d'atteindre un sommet). « Apparaît » écarté (trop statique, le verset décrit un mouvement actif).

**cœurs** — Le sens retenu est « Cœur/Siège des émotions ». Le mot « cœur » est choisi car il est compris de tous en français comme le siège des émotions et des intentions. « Passion » écarté (trop spécifique, le fu'ād couvre plus que les passions).

§CRITIQUE§

Les traductions courantes (Hamidullah : « qui monte jusqu'aux cœurs ») donnent sensiblement le même sens. La seule nuance est que « monte » est plus neutre que « s'élève » — la racine t-l-' porte l'image du soleil qui se lève au-dessus de l'horizon, pas juste d'un mouvement ascendant ordinaire. Mais les deux sont acceptables.`
  },

  // =====================================================
  // VERSET 104:8 — إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ
  // =====================================================
  8: {
    verse_id: 6187,
    analysis_id: 6550,
    words: [
      {
        word_key: 'wsd',
        position: 3,
        sense_chosen: 'fermer hermétiquement',
        analysis_axes: {
          sense_chosen: 'fermer hermétiquement',
          concept_chosen: 'Fermeture/Scellement',
          concepts: {
            'Fermeture/Scellement': {
              status: 'retenu',
              senses: ['fermer hermétiquement', 'sceller'],
              proof_ctx: "D'après les sources étymologiques, awsada signifie : fermer hermétiquement, sceller. Le mot mu'sadatun est un participe passif forme IV — fermée hermétiquement (par un agent). Le participe passif est compatible : la fermeture est un acte qui sort de celui qui ferme et atteint ce qui est fermé — le feu est SUBI par ceux sur qui il est fermé. La forme IV ajoute l'idée d'un acte délibéré. Test grammatical : « fermée hermétiquement sur eux » → compatible avec le passif. La racine w-s-d n'a qu'un seul champ sémantique — la fermeture hermétique.",
              axe1_verset: "Le mot mu'sadatun est un participe passif forme IV — fermée hermétiquement. Le champ lexical est celui de l'enfermement total : fermée (mu'sadah) + sur eux ('alayhim). Le feu n'est pas seulement allumé (v6), il ne fait pas que monter vers les cœurs (v7) — il est aussi fermé sur eux. Il n'y a pas d'issue. La fermeture hermétique complète le tableau : le feu entoure et emprisonne sans laisser de sortie.",
              axe2_voisins: "Le verset 7 décrit le feu qui monte, le verset 8 ajoute qu'il est fermé sur eux. La progression est : feu allumé (v6) → monte vers les cœurs (v7) → fermé sur eux (v8). Chaque verset ajoute un degré de gravité. Le verset 9 ajoutera la dernière propriété — des colonnes étendues. L'enfermement est le troisième trait du feu, après l'allumage et l'élévation.",
              axe3_sourate: "La fermeture hermétique est le contraire de l'ouverture que l'accumulation de richesse était censée garantir (v3 — l'illusion d'éternité). Au lieu de la liberté éternelle espérée, c'est l'enfermement total. Le retournement est complet : la personne croyait que sa richesse lui ouvrait l'éternité, mais c'est la fermeture qui l'attend.",
              axe4_coherence: "Le Coran utilise le participe mu'sadah en 90:20 (nārun mu'sadah — un feu fermé). Les deux passages (90:20 et 104:8) décrivent un feu fermé sur les personnes. L'image est constante dans le Coran : la fermeture hermétique sans issue. Le Coran distingue ce feu fermé d'autres formes de feu (ouvert, visible).",
              axe5_frequence: "La fermeture hermétique montre le caractère définitif de la conséquence. Pour l'être humain dans sa mission de civilisation, c'est un avertissement clair : la corruption mène à un point de non-retour. Quand la porte est fermée, il n'y a plus d'issue. La fermeture est l'absence de toute possibilité de correction — c'est le résultat final de la corruption non corrigée."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'Elle est', phon: 'innahā', arabic: 'إِنَّهَا', is_particle: true, position: 1 },
      { fr: 'sur eux', phon: "'alayhim", arabic: 'عَلَيْهِم', is_particle: true, position: 2 },
      { fr: 'fermée hermétiquement', pos: 'nom', phon: "mu'sadatun", arabic: 'مُّؤْصَدَةٌ', word_key: 'wsd', is_particle: false, sense_retenu: 'fermer hermétiquement', position: 3 }
    ],
    translation_arab: "Elle est fermée sur eux",
    full_translation: "Il se refermera sur eux,",
    translation_explanation: `§DEMARCHE§

La particule **innahā** (elle est, certes elle) est composée de inna (particule d'emphase = certes, en vérité) + hā (pronom féminin = elle). Le « elle » renvoie au feu (nār, féminin en arabe) ou à la Broyeuse (hutamah, féminin). La particule inna ajoute l'emphase : il est CERTAIN qu'elle est fermée.

Le mot **'alayhim** (sur eux) est la préposition 'alā + le pronom suffixe him (eux). La fermeture est SUR eux — elle les couvre et les emprisonne.

Le mot **mu'sadatun** est un participe passif forme IV de la racine w-s-d. D'après les sources étymologiques, awsada signifie « fermer une porte hermétiquement ». Le participe passif signifie « qui a été fermée hermétiquement » — la fermeture a été faite par un agent (implicitement Dieu). La forme IV ajoute l'idée d'un acte délibéré. Le mot est indéfini (mu'sadatun, pas al-mu'sadatu) — la fermeture est une qualité descriptive, pas un nom propre.

§JUSTIFICATION§

**fermée** — Le sens retenu est « Fermeture/Scellement ». L'expression « fermée hermétiquement » est simplifiée à « fermée » dans la traduction pour le français courant, mais le sens d'hermétisme est dans le mot arabe. « Scellée » écarté (implique un acte officiel, registre juridique). « Verrouillée » écarté (implique un mécanisme, trop moderne).

§CRITIQUE§

Hamidullah traduit « Il se refermera sur eux » — deux différences. Premièrement, le pronom « Il » (masculin) alors que le pronom arabe est « hā » (elle, féminin, renvoyant au feu qui est féminin en arabe). En français, « le feu » est masculin donc « il » se justifie, mais la traduction perd la continuité avec la hutamah (féminin). Deuxièmement, « se refermera » (futur réfléchi) alors que mu'sadatun est un participe passif (état accompli) — la fermeture est un état, pas une action future. La traduction de Hamidullah projette la fermeture dans le futur alors que le texte la présente comme un fait établi.`
  },

  // =====================================================
  // VERSET 104:9 — فِى عَمَدٍ مُّمَدَّدَةٍۭ
  // =====================================================
  9: {
    verse_id: 6188,
    analysis_id: 6551,
    words: [
      {
        word_key: 'emd',
        position: 2,
        sense_chosen: 'colonne',
        analysis_axes: {
          sense_chosen: 'colonne',
          concept_chosen: 'Support/Pilier',
          concepts: {
            'Support/Pilier': {
              status: 'retenu',
              senses: ['colonne', 'pilier'],
              proof_ctx: "D'après les sources étymologiques, 'amad est le pluriel de 'amūd — colonne, pilier. Le Lane's donne : ce qui soutient et maintient debout une structure. Le mot 'amad est un nom indéfini au génitif — des colonnes (pas les colonnes). Le sens d'Intention/Volonté ('faire exprès') ne s'applique pas ici : le verset décrit une structure physique (des colonnes dans lesquelles le feu est contenu), pas une intention. Le nom 'amad est suivi de mumaddadah (étendues) en qualification directe.",
              axe1_verset: "Le mot 'amadin est un nom au pluriel indéfini — des colonnes. Le champ lexical est celui de la structure du feu : colonnes ('amad) + étendues (mumaddadah). Le feu de la Broyeuse est structuré — il a une architecture, il est fait de colonnes. Cette description donne au feu une dimension imposante et permanente. L'indéfinition ('amadin, pas al-'amad) laisse le nombre de colonnes indéterminé — ce qui renforce l'idée d'immensité.",
              axe2_voisins: "Le verset 8 dit que le feu est fermé sur eux, le verset 9 précise la structure de cette fermeture : en colonnes étendues. Les colonnes forment l'architecture de la fermeture. La progression est : allumé (v6) → monte vers les cœurs (v7) → fermé (v8) → en colonnes étendues (v9). Le verset 9 est le dernier — il laisse l'image finale d'une structure immense.",
              axe3_sourate: "Les colonnes donnent une image de solidité et de permanence à la Broyeuse. La sourate se termine sur cette image de structure imposante et définitive — le contraire de l'éternité illusoire de la richesse (v3). L'éternité réelle n'est pas dans la richesse mais dans la conséquence de la corruption.",
              axe4_coherence: "Le Coran utilise 'amūd/'amad dans d'autres passages. En 13:2, le mot décrit les colonnes (invisibles) des cieux — « Dieu a élevé les cieux sans colonnes que vous puissiez voir ». Le sens de colonne/support est constant dans le Coran. Les colonnes sont des structures fondamentales qui soutiennent.",
              axe5_frequence: "Les colonnes donnent à la conséquence une dimension structurelle et permanente. Pour l'être humain dans sa mission de civilisation, cela montre que la corruption à petite échelle (dénigrer un individu, amasser pour soi) mène à une conséquence structurée et immense. La justice divine n'est pas chaotique — elle est organisée en colonnes."
            },
            'Intention/Volonté': {
              status: 'nul',
              senses: ['faire exprès'],
              proof_ctx: "L'intention est un acte mental de préméditation. Le verset décrit une structure physique (des colonnes étendues), pas un acte mental. Hors sujet — le mot 'amad ici est clairement le pluriel de 'amūd (colonne)."
            }
          }
        }
      },
      {
        word_key: 'mdd',
        position: 3,
        sense_chosen: 'étendre',
        analysis_axes: {
          sense_chosen: 'étendre',
          concept_chosen: 'Extension/Étirement',
          concepts: {
            'Extension/Étirement': {
              status: 'retenu',
              senses: ['tirer', 'étendre', 'étirer', 'allonger', 'grand'],
              proof_ctx: "D'après les sources étymologiques, madda signifie : tirer, étendre, étirer, allonger. Le mot mumaddadah est un participe passif forme II (intensive) — les colonnes ont été étendues/prolongées. La forme II (fa''ala) ajoute l'intensité : les colonnes ne sont pas juste longues, elles sont TRÈS étendues. Le sens d'extension spatiale est le plus direct : les colonnes s'étirent dans l'espace. Les autres sens (Abondance, Aide/Renfort, Écriture, Mesure/Durée, Pus) sont hors sujet dans ce contexte de description physique.",
              axe1_verset: "Le mot mumaddadah qualifie 'amad — des colonnes étendues. Le champ lexical est celui de l'espace et de l'immensité : les colonnes sont prolongées, elles s'étirent. L'extension donne aux colonnes une dimension d'immensité — elles ne sont ni courtes ni limitées. Le participe passif forme II (mudaddadah du taf'īl) ajoute l'intensité : les colonnes ont été TRÈS étendues, elles dépassent toute mesure habituelle.",
              axe2_voisins: "Le verset 9 est le dernier de la sourate. Il clôt la description de la Broyeuse sur l'image des colonnes étendues. La dernière impression que la sourate laisse est celle de l'immensité et de la permanence de la structure. Après le feu (v6), la pénétration des cœurs (v7), la fermeture (v8), l'extension est le trait final.",
              axe3_sourate: "L'extension des colonnes donne une dimension de totalité à la conséquence. La sourate se termine sur l'image de l'immensité — rien n'échappe à cette structure. L'extension ferme la sourate comme le wayl l'a ouverte : du malheur annoncé (v1) à la structure immense de la conséquence (v9).",
              axe4_coherence: "Le Coran utilise la racine m-d-d dans le sens d'étendre et d'allonger. En 2:15, Dieu yamuddu-hum fī tughyānihim (il les prolonge dans leur transgression). En 71:12, Dieu donne des biens et des fils. Le sens d'extension spatiale ou temporelle est constant dans tout le Coran.",
              axe5_frequence: "L'extension des colonnes montre l'ampleur de la conséquence. Pour l'être humain dans sa mission, la dimension de l'immensité rappelle que les actes individuels (dénigrer, amasser) ont des conséquences qui dépassent l'individu. La corruption locale produit des conséquences immenses — les colonnes étendues sont la mesure de cette disproportion."
            },
            'Abondance/Accroissement': {
              status: 'nul',
              senses: ['augmenter', 'rendre abondant', 'remplir'],
              proof_ctx: "L'abondance décrit une augmentation en quantité. Le verset décrit l'extension spatiale de colonnes, pas une augmentation en nombre. Hors sujet."
            },
            'Aide/Renfort': {
              status: 'nul',
              senses: ['aider', 'renforcer', 'troupe de renfort'],
              proof_ctx: "L'aide est un acte de soutien entre personnes. Hors sujet dans un contexte de description physique de colonnes."
            },
            'Écriture/Langage': {
              status: 'nul',
              senses: ['encre'],
              proof_ctx: "L'encre est un instrument d'écriture. Hors sujet."
            },
            'Mesure/Durée': {
              status: 'nul',
              senses: ['durée', 'limite de temps'],
              proof_ctx: "La durée est une mesure temporelle. Le mot mumaddadah qualifie des colonnes physiques, pas une période de temps. Hors sujet dans ce contexte direct."
            },
            'Sens isolé/Pus': {
              status: 'nul',
              senses: ['pus'],
              proof_ctx: "Le pus est une substance corporelle. Hors sujet."
            }
          }
        }
      }
    ],
    segments: [
      { fr: 'dans', phon: 'fī', arabic: 'فِى', is_particle: true, position: 1 },
      { fr: 'des colonnes', pos: 'nom', phon: "'amadin", arabic: 'عَمَدٍ', word_key: 'emd', is_particle: false, sense_retenu: 'colonne', position: 2 },
      { fr: 'étendues', pos: 'nom', phon: 'mumaddadatin', arabic: 'مُّمَدَّدَةٍ', word_key: 'mdd', is_particle: false, sense_retenu: 'étendre', position: 3 }
    ],
    translation_arab: "dans des colonnes étendues",
    full_translation: "en colonnes (de flammes) étendues.",
    translation_explanation: `§DEMARCHE§

La préposition **fī** (dans) indique que les personnes sont DANS les colonnes — les colonnes les contiennent.

Le mot **'amadin** est le pluriel de 'amūd (colonne, pilier). C'est un nom indéfini au génitif. D'après les sources étymologiques, 'amūd signifie « colonne, ce qui soutient et maintient debout une structure ». L'indéfinition ('amadin, pas al-'amad) laisse le nombre de colonnes indéterminé — il y en a un nombre inconnu, ce qui renforce l'idée d'immensité.

Le mot **mumaddadatin** est un participe passif forme II de la racine m-d-d. La forme II (maddada) signifie « étendre avec intensité ». Le participe passif signifie « qui ont été étendues ». Les colonnes ont été prolongées, étirées — elles sont immenses. La forme II ajoute l'intensité de l'extension.

§JUSTIFICATION§

**colonnes** — Le sens retenu est « Support/Pilier ». Le mot « colonnes » est choisi car il est le plus naturel en français pour décrire les structures verticales qui soutiennent et contiennent. « Piliers » écarté (synonyme acceptable mais « colonnes » est plus courant). « Poteaux » écarté (connotation trop technique/moderne).

**étendues** — Le sens retenu est « Extension/Étirement ». Le mot « étendues » est choisi car il rend l'idée d'extension spatiale de la forme II intensive. « Prolongées » écarté (implique un ajout à quelque chose d'existant). « Allongées » écarté (trop spécifique à une seule dimension).

§CRITIQUE§

Hamidullah traduit « en colonnes (de flammes) étendues » — il ajoute « de flammes » entre parenthèses. Ce mot n'existe PAS dans le texte arabe. Le texte dit 'amad mumaddadah — des colonnes étendues. Il ne précise pas de quoi sont faites les colonnes. L'ajout « de flammes » est une interprétation exégétique qui ne vient pas du texte. Notre traduction « dans des colonnes étendues » respecte le texte tel qu'il est, sans ajout.`
  }
};

// =====================================================
// TRAITEMENT DES VERSETS
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 104:${verseNum} — TRAITEMENT`);

  // 1. Insérer les verse_word_analyses
  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
    } else {
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
    }
  }

  // 2. Mettre à jour verse_analyses
  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
  } else {
    console.log(`  Traduction : "${data.translation_arab}"`);
  }

  console.log(`VERSET 104:${verseNum} — TERMINÉ`);
}

// =====================================================
// SYNC word_meanings depuis verse_word_analyses
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  // Récupérer tous les verse_word_analyses de la sourate 104
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', [6180, 6181, 6182, 6183, 6184, 6185, 6186, 6187, 6188]);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnée à synchroniser');
    return;
  }

  // Pour chaque mot analysé, mettre à jour les statuts dans word_meanings
  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    // Récupérer l'analysis_id pour cette racine
    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) continue;

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      // Mettre à jour le statut de tous les sens de ce concept
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} → synced`);
  }
}

// =====================================================
// WORD DAILY — 3 phrases du quotidien par sens retenu
// =====================================================
async function insertWordDaily() {
  console.log('\n=== WORD DAILY ===');

  const dailyData = [
    // wyl → malheur
    { word_key: 'wyl', sense: 'malheur', arabic: 'وَيْل', phon: 'wayl', phrases: [
      "Quel malheur de perdre ses clés juste avant de partir.",
      "Le malheur des uns fait le bonheur des autres, comme on dit.",
      "C'est un vrai malheur qu'il n'ait pas pu venir à la fête."
    ]},
    // hmz → dénigrer
    { word_key: 'hmz', sense: 'dénigrer', arabic: 'هَمْز', phon: 'hamz', phrases: [
      "Il passe son temps à dénigrer ses collègues dans leur dos.",
      "Dénigrer quelqu'un ne te rend pas meilleur que lui.",
      "Elle a l'habitude de dénigrer le travail des autres pour se mettre en valeur."
    ]},
    // lmz → calomnier
    { word_key: 'lmz', sense: 'calomnier', arabic: 'لَمْز', phon: 'lamz', phrases: [
      "Calomnier quelqu'un peut détruire sa réputation en un instant.",
      "Il a été calomnié par un voisin jaloux de sa réussite.",
      "On ne devrait jamais calomnier les gens qu'on ne connaît pas."
    ]},
    // jme → rassembler
    { word_key: 'jme', sense: 'rassembler', arabic: 'جَمْع', phon: "jam'", phrases: [
      "Elle a rassemblé toutes les pièces du puzzle en une heure.",
      "Rassembler les voisins pour un repas de quartier, ça fait du bien.",
      "Il rassemble des timbres depuis qu'il est enfant."
    ]},
    // edd → compter
    { word_key: 'edd', sense: 'compter', arabic: 'عَدّ', phon: "'add", phrases: [
      "Il compte ses économies tous les soirs avant de dormir.",
      "Compter les jours avant les vacances, c'est long.",
      "Elle a compté les invités pour être sûre d'avoir assez de chaises."
    ]},
    // hsb → estimer
    { word_key: 'hsb', sense: 'estimer', arabic: 'حَسْب', phon: 'hasb', phrases: [
      "Il estime que le projet sera terminé d'ici la fin du mois.",
      "On estime à cent le nombre de participants.",
      "Elle estimait que tout irait bien, mais elle s'est trompée."
    ]},
    // xld → demeurer éternellement
    { word_key: 'xld', sense: 'demeurer éternellement', arabic: 'خُلْد', phon: 'khuld', phrases: [
      "Rien ne demeure éternellement, tout finit par changer.",
      "Il croyait que sa gloire demeurerait éternellement, mais les gens oublient vite.",
      "Ces monuments ont l'air de vouloir demeurer éternellement debout."
    ]},
    // nbv → jeter
    { word_key: 'nbv', sense: 'jeter', arabic: 'نَبْذ', phon: 'nabdh', phrases: [
      "Il a jeté le journal à la poubelle sans même le lire.",
      "On ne jette pas les gens comme des objets quand ils ne servent plus.",
      "Elle a jeté ses vieilles chaussures et s'est sentie plus légère."
    ]},
    // htm → briser
    { word_key: 'htm', sense: 'briser', arabic: 'حَطْم', phon: 'hatm', phrases: [
      "Le vase s'est brisé en mille morceaux en tombant.",
      "Briser la confiance de quelqu'un, c'est difficile à réparer.",
      "La tempête a brisé toutes les vitres du rez-de-chaussée."
    ]},
    // dry → savoir
    { word_key: 'dry', sense: 'savoir', arabic: 'دَرْي', phon: 'dary', phrases: [
      "Je ne savais même pas qu'il était parti.",
      "Savoir ce qui se passe vraiment, ça change tout.",
      "Elle a su dès le début que quelque chose n'allait pas."
    ]},
    // nwr → feu
    { word_key: 'nwr', sense: 'feu', arabic: 'نَار', phon: 'nār', phrases: [
      "Le feu de la cheminée réchauffe toute la pièce.",
      "Il a allumé un feu de camp pour la soirée.",
      "Attention au feu, ne laissez pas les enfants s'approcher."
    ]},
    // wqd → allumer
    { word_key: 'wqd', sense: 'allumer', arabic: 'وَقْد', phon: 'waqd', phrases: [
      "Il a allumé la bougie avant de s'asseoir à table.",
      "Allumer un barbecue sans allumettes, c'est tout un art.",
      "Le voisin a allumé un feu dans son jardin hier soir."
    ]},
    // tle → se lever (soleil)
    { word_key: 'tle', sense: 'se lever (soleil)', arabic: 'طُلُوع', phon: "tulū'", phrases: [
      "Le soleil se lève plus tôt en été qu'en hiver.",
      "Je me réveille toujours avant le lever du soleil.",
      "Ils se sont retrouvés sur la plage pour voir le soleil se lever."
    ]},
    // fad → cœur
    { word_key: 'fad', sense: 'cœur', arabic: 'فُؤَاد', phon: "fu'ād", phrases: [
      "Son cœur battait fort quand elle a ouvert la lettre.",
      "Il a le cœur gros depuis le départ de son ami.",
      "Écoute ton cœur, il sait souvent mieux que ta tête."
    ]},
    // wsd → fermer hermétiquement
    { word_key: 'wsd', sense: 'fermer hermétiquement', arabic: 'وَصْد', phon: 'wasd', phrases: [
      "Ferme bien le bocal hermétiquement sinon les épices vont perdre leur goût.",
      "La porte était fermée hermétiquement, impossible de l'ouvrir.",
      "Il faut fermer le couvercle hermétiquement pour que ça reste frais."
    ]},
    // emd → colonne
    { word_key: 'emd', sense: 'colonne', arabic: 'عَمَد', phon: "'amad", phrases: [
      "Les colonnes du temple tiennent debout depuis deux mille ans.",
      "Il s'est appuyé contre la colonne en attendant le bus.",
      "Les colonnes de fumée montaient droit dans le ciel sans vent."
    ]},
    // mdd → étendre
    { word_key: 'mdd', sense: 'étendre', arabic: 'مَدّ', phon: 'madd', phrases: [
      "Elle a étendu le linge sur le fil pour qu'il sèche au soleil.",
      "La plaine s'étend à perte de vue jusqu'aux montagnes.",
      "Il a étendu les bras pour attraper le ballon."
    ]}
  ];

  for (const d of dailyData) {
    // Récupérer l'analysis_id
    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', d.word_key)
      .single();

    if (!wa) {
      console.error(`  ${d.word_key} non trouvé dans word_analyses`);
      continue;
    }

    for (const phrase of d.phrases) {
      await supabase.from('word_daily').insert({
        analysis_id: wa.id,
        sense: d.sense,
        arabic: d.arabic,
        phon: d.phon,
        french: phrase
      });
    }
    console.log(`  ${d.word_key} → 3 phrases`);
  }
}

// =====================================================
main().catch(console.error);
