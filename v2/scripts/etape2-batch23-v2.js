const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 207, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {senses, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.senses.length+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    r.senses.forEach(s => {
      console.log('• '+s.sense+' ['+s.concept+']')
      console.log('  '+s.description)
    })
  }
}

async function run() {
  let r

  // khsr (خسر) — perdre, être en perte
  r=await ins('khsr',[
    {sense:'perdre',concept:'Perte/Diminution',description:"Acte de ne plus avoir ce qu'on possédait. La perte est un mouvement négatif qui sort de celui qui perd — quelque chose s'échappe de lui sans retour. C'est directionnel (de soi vers l'extérieur) et peut être ponctuel (perte soudaine) ou progressif. La perte est le contraire du gain : on avait, on n'a plus."},
    {sense:'subir une perte',concept:'Perte/Diminution',description:"État passif de celui qui a moins qu'avant. Subir une perte est intérieur — c'est l'expérience de la diminution. C'est une émotion mêlée de jugement rationnel : on constate qu'on a perdu. L'état peut devenir permanent si la perte est irréparable."},
    {sense:'être dans l\'erreur',concept:'Égarement',description:"État de celui qui s'est trompé de chemin. L'erreur est intérieure — elle affecte le jugement et reste chez celui qui erre. C'est un état qui peut être ponctuel (une erreur) ou permanent (l'égarement). L'erreur est une perte de direction, une déviation du vrai."},
    {sense:'être trompé',concept:'Égarement',description:"État de celui qui a été induit en erreur par autrui. La tromperie vient de l'extérieur (du trompeur) et atteint l'intérieur (le trompé). C'est directionnel et généralement ponctuel. Être trompé c'est perdre par la faute d'un autre."},
    {sense:'faire périr',concept:'Destruction',description:"Acte de causer la perte totale de quelqu'un. Faire périr sort de celui qui détruit et atteint celui qui est détruit — c'est directionnel et définitif. C'est la perte ultime : non pas perdre quelque chose, mais perdre tout, perdre l'être même."},
    {sense:'perdition',concept:'Destruction',description:"État de celui qui est voué à la perte totale. La perdition est un état intérieur permanent — c'est la condition de celui qui a tout perdu ou va tout perdre. C'est plus qu'une perte : c'est la perte de l'âme elle-même."},
  ]);log(r,'khsr')

  // dhly (ذلي → ذل) — être humble, humilié
  r=await ins('dhly',[
    {sense:'être humble',concept:'Humilité/Abaissement',description:"État intérieur de celui qui reconnaît sa petitesse. L'humilité reste chez celui qui l'éprouve — c'est une disposition permanente de l'âme qui se sait petite devant ce qui est grand. C'est un jugement rationnel sur sa propre place, pas une émotion subie."},
    {sense:'être humilié',concept:'Humilité/Abaissement',description:"État de celui qui est rabaissé par autrui. L'humiliation vient de l'extérieur et atteint l'intérieur — c'est directionnel. Contrairement à l'humilité choisie, l'humiliation est subie. C'est une émotion de honte qui peut être ponctuelle ou laisser une trace permanente."},
    {sense:'être soumis',concept:'Soumission',description:"État de dépendance volontaire ou forcée envers plus puissant. La soumission peut être intérieure (acceptation) ou seulement extérieure (obéissance contrainte). Elle est directionnelle : du soumis vers celui à qui on se soumet. Elle peut être permanente (servitude) ou temporaire."},
    {sense:'s\'abaisser',concept:'Humilité/Abaissement',description:"Acte volontaire de se mettre plus bas qu'on n'était. L'abaissement est un mouvement vers le bas — il sort de celui qui s'abaisse. C'est directionnel et ponctuel dans le geste, mais peut exprimer une humilité permanente."},
    {sense:'être docile',concept:'Soumission',description:"État de celui qui se laisse guider facilement. La docilité est une soumission douce et acceptée — elle reste intérieure comme disposition mais se manifeste dans l'obéissance extérieure. C'est un état permanent du caractère."},
    {sense:'méprisé',concept:'Divers',description:"État de celui qui est regardé de haut par les autres. Le mépris vient de l'extérieur et touche celui qui est méprisé — c'est directionnel. C'est une émotion négative infligée qui peut devenir un statut social permanent."},
  ]);log(r,'dhly')

  // khlaq (خلق) — créer, nature, caractère
  r=await ins('khlaq',[
    {sense:'créer',concept:'Création/Formation',description:"Acte de faire exister ce qui n'existait pas. La création sort du créateur et produit une réalité nouvelle — c'est directionnel et ponctuel dans l'acte mais permanent dans le résultat. Créer est l'acte divin par excellence : donner l'être à ce qui n'était rien."},
    {sense:'façonner',concept:'Création/Formation',description:"Acte de donner forme à ce qui existe déjà. Le façonnage sort de celui qui façonne et atteint la matière — c'est directionnel et ponctuel. Façonner est moins radical que créer : on transforme ce qui est, on ne fait pas surgir du néant."},
    {sense:'mesurer',concept:'Création/Formation',description:"Acte de déterminer les proportions avant de créer. La mesure précède la création — c'est un acte rationnel qui planifie. Elle est intérieure (dans l'esprit du créateur) avant de devenir extérieure (dans la chose créée). Le Créateur crée avec mesure."},
    {sense:'nature innée',concept:'Nature/Caractère',description:"Ce qui est créé en l'être dès l'origine. La nature est le résultat de la création — c'est permanent et intérieur. Elle définit ce qu'un être est fondamentalement, avant tout accident. La nature est donnée, pas acquise."},
    {sense:'caractère',concept:'Nature/Caractère',description:"Disposition morale innée de l'âme. Le caractère est intérieur et permanent — c'est la nature appliquée au comportement. Il se manifeste dans les actes extérieurs mais reste enraciné à l'intérieur. Le bon caractère est une nature droite."},
    {sense:'création',concept:'Création/Formation',description:"L'ensemble de ce qui a été créé, ou l'acte de créer. La création est le résultat du créer — elle existe comme état permanent. Elle inclut tout ce qui est, sauf le Créateur lui-même qui est incréé."},
  ]);log(r,'khlaq')

  // stwy (سوي) — être égal, droit, niveau
  r=await ins('stwy',[
    {sense:'être égal',concept:'Égalité/Équilibre',description:"État de parité entre deux choses. L'égalité est un état permanent des choses comparées — c'est un jugement rationnel qui constate l'absence de différence. L'égalité est relationnelle : on est égal à quelque chose d'autre."},
    {sense:'être droit',concept:'Rectitude',description:"État de ce qui ne dévie pas. La droiture est une qualité permanente — elle reste dans la chose qui est droite. C'est le contraire du tordu, du dévié. Dans le sens moral, la droiture est l'absence d'égarement."},
    {sense:'être de niveau',concept:'Égalité/Équilibre',description:"État de surface plane et uniforme. Le niveau est une égalité spatiale — c'est permanent tant que rien ne vient briser l'équilibre. C'est un état qui permet la stabilité."},
    {sense:'s\'établir fermement',concept:'Établissement',description:"Acte de se fixer solidement en place. L'établissement est un mouvement qui aboutit à un état stable — c'est ponctuel dans le mouvement mais permanent dans le résultat. S'établir c'est trouver sa place et y rester."},
    {sense:'achever',concept:'Accomplissement',description:"Acte de mener à terme. L'achèvement est ponctuel — c'est le moment où quelque chose atteint sa forme finale. Après l'achèvement, la chose est égale à ce qu'elle devait être : complète, sans manque."},
    {sense:'atteindre la maturité',concept:'Accomplissement',description:"État de développement complet. La maturité est l'achèvement de la croissance — c'est un état permanent atteint après un processus. L'être mature est égal à sa pleine réalisation."},
  ]);log(r,'stwy')

  // ana (أنى) — quand, comment, d'où
  r=await ins('ana',[
    {sense:'quand',concept:'Interrogation temporelle',description:"Particule qui interroge sur le moment. Le quand cherche à situer dans le temps — c'est une question qui sort du questionneur vers la réponse. C'est ponctuel dans l'interrogation mais vise un temps qui peut être passé, présent ou futur."},
    {sense:'comment',concept:'Interrogation modale',description:"Particule qui interroge sur la manière. Le comment cherche le mode d'être ou d'action — c'est une question rationnelle qui demande une explication. Elle sort vers l'extérieur pour comprendre le fonctionnement des choses."},
    {sense:'d\'où',concept:'Interrogation spatiale',description:"Particule qui interroge sur l'origine. Le d'où cherche le point de départ — c'est directionnel vers le passé ou l'ailleurs. Savoir d'où vient une chose c'est comprendre sa nature et sa légitimité."},
    {sense:'où que ce soit',concept:'Généralité',description:"Indication de lieu indéterminé. Le où que ce soit nie l'importance du lieu — partout égale partout. C'est un état permanent d'indifférence au lieu : la chose reste vraie quel que soit l'endroit."},
  ]);log(r,'ana')

  console.log('\n=== Batch 23 v2 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
