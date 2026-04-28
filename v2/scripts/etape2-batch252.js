const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2105, total = 2321

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

  r=await ins('qre',[{sense:'frapper à la porte',concept:'Frappe/Choc',description:"Acte de frapper pour attirer l'attention ou annoncer sa venue. La qaria est le choc — l'événement qui frappe et ébranle."},{sense:'événement choquant',concept:'Frappe/Choc',description:''}]);log(r,'qre')

  r=await ins('ilyhm',[{sense:'vers eux',concept:'Direction/Destination',description:"Préposition et pronom indiquant le mouvement vers un groupe. Directionnel."}]);log(r,'ilyhm')

  r=await ins('mhw',[{sense:'effacer',concept:'Effacement/Annulation',description:"Acte de faire disparaître ce qui était écrit ou existant. L'effacement est directionnel et irréversible."},{sense:'annuler',concept:'Effacement/Annulation',description:''}]);log(r,'mhw')

  r=await ins('hu',[{sense:'lui',concept:'Pronom/Troisième personne',description:"Pronom masculin absent. Permanent dans sa fonction de désignation."}]);log(r,'hu')

  r=await ins('mwaa',[{sense:'eau',concept:'Eau/Liquide',description:"Substance source de vie. Permanente dans sa nature."}]);log(r,'mwaa')

  r=await ins('jra',[{sense:'gorgée',concept:'Gorgée/Ingestion',description:"Quantité de liquide avalée en une fois. La gorgée est ponctuelle — chaque gorgée fait descendre le liquide dans le corps."},{sense:'avaler',concept:'Gorgée/Ingestion',description:''}]);log(r,'jra')

  r=await ins('swg',[{sense:'avaler facilement',concept:'Déglutition/Passage facile',description:"Acte de faire passer par la gorge sans difficulté. La déglutition facile est le contraire de l'étouffement — le liquide descend naturellement."},{sense:'passer dans la gorge',concept:'Déglutition/Passage facile',description:''}]);log(r,'swg')

  r=await ins('bad',[{sense:'être loin',concept:'Éloignement/Distance',description:"État de séparation spatiale ou temporelle. La distance est permanente tant que rien ne la comble."},{sense:'après',concept:'Postériorité',description:"Position dans le temps qui suit un autre événement."}]);log(r,'bad')

  r=await ins('jze',[{sense:'être angoissé',concept:'Angoisse/Impatience',description:"État intérieur de détresse face à une situation insupportable. L'angoisse est un état qui pèse — le jazou est l'impatient qui ne supporte pas l'épreuve."},{sense:'être impatient',concept:'Angoisse/Impatience',description:''}]);log(r,'jze')

  r=await ins('srkh',[{sense:'crier au secours',concept:'Cri/Appel au secours',description:"Cri lancé dans la détresse. Le cri est directionnel — il sort du désespéré et cherche quiconque peut entendre."},{sense:'appeler à l\'aide',concept:'Cri/Appel au secours',description:''}]);log(r,'srkh')

  console.log('\n=== Batch 252 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
