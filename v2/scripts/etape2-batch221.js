const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1796, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  r=await ins('hwm',[
    {sense:'tourner autour',concept:'Circumambulation/Hésitation',description:"Mouvement circulaire autour d'un point sans jamais l'atteindre. L'hésitation est un tournoiement permanent de l'esprit autour d'une décision qu'on ne prend pas."},
    {sense:'hésiter',concept:'Circumambulation/Hésitation',description:''},
  ]);log(r,'hwm')

  r=await ins('aila',[
    {sense:'vers',concept:'Direction/Destination',description:"Préposition qui indique le mouvement vers un point. Directionnelle par essence."},
    {sense:'jusqu\'à',concept:'Direction/Destination',description:''},
  ]);log(r,'aila')

  r=await ins('ethr',[
    {sense:'trébucher',concept:'Chute/Découverte',description:"Acte de tomber sur quelque chose de façon inattendue. Le trébuchement est ponctuel — on tombe sur une vérité ou sur un obstacle sans l'avoir cherché. Découvrir c'est trébucher sur ce qui était caché."},
    {sense:'découvrir',concept:'Chute/Découverte',description:''},
    {sense:'tomber sur',concept:'Chute/Découverte',description:''},
  ]);log(r,'ethr')

  r=await ins('aakhr',[
    {sense:'tomber',concept:'Chute/Prosternation',description:"Mouvement du corps qui se jette au sol. La chute peut être un acte de prosternation devant la vérité ou un effondrement face au choc."},
    {sense:'se prosterner',concept:'Chute/Prosternation',description:''},
  ]);log(r,'aakhr')

  r=await ins('hbs',[
    {sense:'retenir',concept:'Rétention/Emprisonnement',description:"Acte d'empêcher quelqu'un ou quelque chose de sortir ou de bouger. La rétention sort de celui qui retient et atteint ce qui est retenu — c'est directionnel et crée un état permanent d'enfermement."},
    {sense:'emprisonner',concept:'Rétention/Emprisonnement',description:''},
    {sense:'bloquer',concept:'Rétention/Emprisonnement',description:''},
  ]);log(r,'hbs')

  r=await ins('rtb',[
    {sense:'ordonner',concept:'Ordre/Classement',description:"Acte de mettre les choses dans un ordre logique et stable. L'ordonnancement crée une structure permanente — chaque chose à sa place. Le tartib est l'arrangement qui fait sens."},
    {sense:'classer',concept:'Ordre/Classement',description:''},
    {sense:'rang',concept:'Ordre/Classement',description:''},
  ]);log(r,'rtb')

  r=await ins('fad',[
    {sense:'cœur',concept:'Cœur/Siège des émotions',description:"L'organe qui ressent et réagit aux événements. Le fuad est le cœur dans sa dimension émotionnelle — il est le siège de la passion, de la peur et de l'amour. Permanent dans sa fonction de récepteur des émotions."},
    {sense:'passion',concept:'Cœur/Siège des émotions',description:''},
  ]);log(r,'fad')

  r=await ins('anh',[
    {sense:'que lui',concept:'Certitude/Pronom',description:"Particule d'assertion suivie du pronom masculin. Affirme avec force une vérité concernant celui dont on parle."},
    {sense:'certes il',concept:'Certitude/Pronom',description:''},
  ]);log(r,'anh')

  r=await ins('qtrf',[
    {sense:'acquérir (péché)',concept:'Acquisition/Commission',description:"Acte de commettre une action qui entre dans le patrimoine moral de la personne. L'acquisition d'un péché est directionnelle — le péché entre dans la responsabilité de celui qui l'a commis. L'iqtiraf est le fait de commettre par sa propre main."},
    {sense:'commettre',concept:'Acquisition/Commission',description:''},
  ]);log(r,'qtrf')

  r=await ins('zkhf',[
    {sense:'ornement doré',concept:'Ornement/Faux brillant',description:"Décoration qui embellit l'apparence extérieure mais peut masquer la vérité. Le zukhruf est le faux éclat qui trompe — il est la dorure qui cache le bois. L'ornement est permanent dans son apparence mais peut être illusoire dans sa valeur."},
    {sense:'dorure',concept:'Ornement/Faux brillant',description:''},
    {sense:'embellissement trompeur',concept:'Ornement/Faux brillant',description:''},
  ]);log(r,'zkhf')

  console.log('\n=== Batch 221 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
