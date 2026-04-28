// Pipeline V2 — Sourate 1 Verset 3 — ÉTAPES 3+4
// ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 3

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:3 — ÉTAPES 3+4')
  console.log('  ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ')
  console.log('============================================')
  console.log('')

  // ── rhm (251) — ar-rahmani / ar-rahimi — adjectifs définis ──
  // Étape 2 SKIP — racine déjà analysée
  console.log('>>> ÉTAPE 3 — rhm (ar-rahmani + ar-rahimi, adjectifs définis)')
  console.log('  Étape 2 SKIP — racine déjà en base')

  const rhmAxes = {
    sense_chosen: 'miséricorde',
    concept_chosen: 'Miséricorde/Tendresse',
    concepts: {
      'Miséricorde/Tendresse': {
        status: 'retenu',
        senses: ['miséricorde', 'pardon', 'traiter avec compassion', 'dire "que Dieu te fasse miséricorde"', 'se forcer à la compassion', 'miséricorde réciproque', 'demander la miséricorde', 'le Compatissant', 'plus miséricordieux', 'objet de miséricorde', 'traité avec beaucoup de compassion'],
        proof_ctx: 'Le sens retenu est "Miséricorde/Tendresse". Le verset 3 répète les deux mots ar-rahmani et ar-rahimi du verset 1. Cette répétition crée un encadrement : la sourate s\'ouvre par la miséricorde (v1) et la rappelle après la louange et la seigneurie (v2). Les deux adjectifs sont définis avec l\'article al- (une forme qui identifie une qualité connue et permanente). La miséricorde est un mouvement intérieur de tendresse qui se dirige vers l\'extérieur en actes de bienfaisance. Distinction avec "Parenté/Lien familial" : la parenté est une relation horizontale entre humains, la miséricorde est une qualité qui descend vers les autres. Distinction avec "Provision/Bienfait matériel" : la provision est le résultat concret, la miséricorde est la qualité intérieure qui motive ce résultat.',
        axe1_verset: 'Le verset 3 ne contient que les deux mots ar-rahmani ar-rahimi. Ils forment à eux seuls le verset entier, ce qui leur donne un poids maximal. Le champ lexical est exclusivement celui de la miséricorde : pas d\'autre mot pour le diluer ou le nuancer. C\'est une déclaration pure de miséricorde, sans rien d\'autre. La répétition de la même racine sous deux formes renforce l\'intensité.',
        axe2_voisins: 'Le verset 2 a qualifié Dieu de Seigneur des mondes. Le verset 3 rappelle immédiatement la miséricorde, comme pour tempérer la seigneurie : le Seigneur n\'est pas un tyran, Il est miséricordieux. Le verset 4 ajoutera la maîtrise du Jour, et le verset 3 prépare : avant de parler de la maîtrise qui pourrait inquiéter, on rappelle la miséricorde. La position entre la seigneurie (v2) et la maîtrise (v4) est stratégique.',
        axe3_sourate: 'La Fatiha mentionne la miséricorde deux fois (v1 et v3). C\'est le seul attribut répété dans la sourate. Cette double mention montre que la miséricorde est le fondement de tous les autres attributs : la seigneurie est miséricordieuse (v2-3), la maîtrise est miséricordieuse (v3-4). La miséricorde encadre tout.',
        axe4_coherence: 'Le Coran utilise ar-rahmani ar-rahimi comme formule récurrente. La basmala (v1) l\'utilise au début de presque chaque sourate. Le verset 3 la répète dans le corps de la sourate. Cette double utilisation — en ouverture et dans le corps — est unique à la Fatiha et souligne l\'importance de la miséricorde dans cette sourate.',
        axe5_frequence: 'La miséricorde rappelée entre la seigneurie et la maîtrise montre que l\'autorité doit être tempérée par la bonté. Pour la mission de justice et de civilisation, l\'autorité sans miséricorde devient tyrannie, et la miséricorde sans autorité devient faiblesse. Les deux sont nécessaires ensemble.',
      },
      'Utérus/Reproduction': {
        status: 'nul',
        senses: ['utérus', 'vulve', 'maladie de l\'utérus', 'utérus gonflé', 'chamelle malade post-partum', 'sortie de l\'utérus'],
        proof_ctx: 'Sens physique anatomique. Le verset qualifie Dieu avec des adjectifs, pas des termes anatomiques.',
      },
      'Parenté/Lien familial': {
        status: 'peu_probable',
        senses: ['lien de parenté', 'parents par les femmes', 'parent interdit au mariage', 'sentiment de parenté', 'connecté par parenté'],
        proof_ctx: 'La parenté est une relation horizontale entre humains liés par le sang. Le verset qualifie Dieu avec des adjectifs qui décrivent une qualité descendante (de Dieu vers les humains), pas une relation horizontale entre pairs. La frontière philosophique : la parenté crée des obligations réciproques entre égaux, la miséricorde descend de celui qui la possède vers celui qui la reçoit.',
        axe1_verset: 'Le verset ne contient que ar-rahmani ar-rahimi, deux adjectifs qui qualifient Dieu. Le champ lexical est celui de la qualité divine, pas des relations familiales. La parenté supposerait une relation entre pairs, mais le verset décrit un attribut de Dieu seul, pas une relation entre Dieu et les humains.',
        axe2_voisins: 'Le verset 2 parle de seigneurie sur les mondes. Le verset 4 parle de maîtrise du Jour. Le contexte est celui des attributs d\'autorité divine, pas des liens familiaux. Aucun verset voisin ne parle de parenté.',
        axe3_sourate: 'La Fatiha pose la relation entre l\'humain et Dieu dans un cadre de louange, d\'adoration et de demande. Ce n\'est pas un cadre familial. La parenté serait hors registre.',
        axe4_coherence: 'Le Coran utilise ar-rahmani et ar-rahimi exclusivement comme qualificatifs de miséricorde, jamais dans le sens de parenté. Le mot rahim (utérus/parenté) est distinct des adjectifs rahman et rahim même s\'ils partagent la même racine.',
        axe5_frequence: 'La parenté est une relation entre humains. Le verset décrit une qualité de Dieu, pas des relations humaines.',
      },
      'Provision/Bienfait matériel': {
        status: 'peu_probable',
        senses: ['subsistance', 'pluie', 'abondance', 'prophétie'],
        proof_ctx: 'La provision est le résultat concret et matériel de la miséricorde. Le verset utilise des adjectifs qui décrivent la qualité qui MOTIVE le résultat, pas le résultat lui-même. La frontière philosophique : la qualité (miséricorde) est permanente et intérieure au possesseur, le résultat (provision) est ponctuel et extérieur.',
        axe1_verset: 'Le verset qualifie Dieu avec deux adjectifs. Les adjectifs décrivent des qualités permanentes, pas des actes ponctuels de provision. "Le Tout-Miséricordieux" décrit ce que Dieu EST, pas ce qu\'Il DONNE.',
        axe2_voisins: 'Les versets voisins décrivent des qualités permanentes (seigneur, maître). La provision serait un acte ponctuel dans une série de qualités permanentes.',
        axe3_sourate: 'La Fatiha pose des fondements permanents. La provision est ponctuelle et matérielle.',
        axe4_coherence: 'Le Coran utilise d\'autres mots pour la provision (rizq). Quand le Coran veut parler de provision, il ne dit pas ar-rahmani.',
        axe5_frequence: 'La provision est matérielle. Le verset parle de la qualité qui motive toute provision.',
      },
      'Divers': {
        status: 'nul',
        senses: ['La Mecque', 'Médine', 'outre abîmée', 'la crainte vaut mieux que la pitié'],
        proof_ctx: 'Noms propres et proverbes sans rapport avec la qualification divine du verset.',
      },
    }
  }

  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'rhm', position: 1, sense_chosen: 'miséricorde', analysis_axes: rhmAxes
  })
  console.log('  rhm (pos=1, ar-rahmani) → Miséricorde/Tendresse → "miséricorde"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'rhm', position: 2, sense_chosen: 'miséricorde', analysis_axes: rhmAxes
  })
  console.log('  rhm (pos=2, ar-rahimi) → Miséricorde/Tendresse → "miséricorde"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'le Tout-Miséricordieux', pos:'adjectif', phon:'ar-rahmani', arabic:'ٱلرَّحْمَـٰنِ', word_key:'rhm', is_particle:false, sense_retenu:'miséricorde', position:1},
    {fr:'le Miséricordieux', pos:'adjectif', phon:'ar-rahimi', arabic:'ٱلرَّحِيمِ', word_key:'rhm', is_particle:false, sense_retenu:'miséricorde', position:2},
  ]

  const explanation = [
    '§DEMARCHE§',
    'Ce verset reprend les deux qualificatifs du verset 1 : **ar-rahmani** et **ar-rahimi**. Les deux viennent de la même racine (r-h-m). Ar-rahmani est construit sur un modèle qui exprime le degré le plus intense possible (le Tout-Miséricordieux). Ar-rahimi est construit sur un modèle qui exprime une qualité permanente et constante (le Miséricordieux).',
    'Cette répétition après le verset 2 (Seigneur des mondes) crée un encadrement : la sourate rappelle la miséricorde immédiatement après la seigneurie, comme pour signaler que l\'autorité est toujours accompagnée de bonté.',
    '§JUSTIFICATION§',
    '**miséricorde** — Le sens retenu est "Miséricorde/Tendresse". Le mot "miséricorde" est choisi car il capture le mouvement intérieur de tendresse qui se dirige vers l\'extérieur en actes de bienfaisance. L\'alternative "compassion" est écartée car la compassion est plus ponctuelle (on a compassion face à une situation précise), alors que la miséricorde est permanente (c\'est un trait de caractère constant). L\'alternative "grâce" est écartée car c\'est du vocabulaire religieux chrétien. L\'alternative "bonté" est écartée car la bonté est plus vague — elle ne capture pas le mouvement intérieur de tendresse que la racine r-h-m porte.',
  ].join('\n\n')

  const {error: e3} = await db.from('verse_analyses').update({
    translation_arab: 'Le Tout-Miséricordieux, le Miséricordieux.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "Le Tout-Miséricordieux, le Miséricordieux."' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:3 — TERMINÉ')
  console.log('  ar-rahmani (rhm) → sens "Miséricorde/Tendresse" → mot français "miséricorde"')
  console.log('  ar-rahimi (rhm) → sens "Miséricorde/Tendresse" → mot français "miséricorde"')
  console.log('  Traduction : "Le Tout-Miséricordieux, le Miséricordieux."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
