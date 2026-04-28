const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2145, total = 2321

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
  const data = [
    ['mmw',[{sense:'marcher',concept:'Marche/Passage',description:"Acte de se déplacer. Directionnel et continu."},{sense:'passer',concept:'Marche/Passage',description:''}]],
    ['rft',[{sense:'poussière',concept:'Poussière/Décomposition',description:"Ce qui reste quand la matière se désintègre. La poussière est le résultat final de la décomposition — permanente."},{sense:'os en poussière',concept:'Poussière/Décomposition',description:''}]],
    ['nzgh',[{sense:'semer la discorde',concept:'Discorde/Incitation',description:"Acte du diable qui divise. Directionnel et insidieux."},{sense:'inciter au mal',concept:'Discorde/Incitation',description:''}]],
    ['wfr',[{sense:'être abondant',concept:'Abondance/Plénitude',description:"État de ce qui est en grande quantité. L'abondance est permanente dans ce qui est riche."},{sense:'plénitude',concept:'Abondance/Plénitude',description:''}]],
    ['swt',[{sense:'voix',concept:'Voix/Son',description:"Le son produit par l'être vivant pour communiquer. La voix sort du locuteur et atteint l'auditeur — directionnelle."},{sense:'son',concept:'Voix/Son',description:''}]],
    ['jlb',[{sense:'attirer',concept:'Attraction/Rassemblement',description:"Acte de tirer vers soi. L'attraction est directionnelle — elle ramène vers un centre."},{sense:'rassembler',concept:'Attraction/Rassemblement',description:''}]],
    ['grw',[{sense:'colle',concept:'Adhérence/Attachement',description:"Ce qui fait tenir ensemble. La colle crée un lien permanent."},{sense:'être collé',concept:'Adhérence/Attachement',description:''}]],
    ['ghsq',[{sense:'obscurité',concept:'Obscurité/Crépuscule',description:"État de nuit tombante. L'obscurité est permanente tant que la lumière ne revient pas."},{sense:'crépuscule',concept:'Obscurité/Crépuscule',description:''}]],
    ['li',[{sense:'désespérer',concept:'Désespoir',description:"État de perte totale d'espoir. Le désespoir est permanent tant que rien ne le brise."},{sense:'perdre espoir',concept:'Désespoir',description:''}]],
    ['shkl',[{sense:'forme',concept:'Forme/Apparence',description:"L'aspect extérieur d'une chose. La forme est permanente dans sa structure — elle est ce qui est visible."},{sense:'apparence',concept:'Forme/Apparence',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 256 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
