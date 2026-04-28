const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2175, total = 2321

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
    ['zwr',[{sense:'visiter',concept:'Visite/Fausseté',description:"Acte de se rendre auprès de quelqu'un. La visite est directionnelle. Au sens de zour, c'est aussi le faux témoignage — la visite à la vérité pour la déformer."},{sense:'faux témoignage',concept:'Visite/Fausseté',description:''}]],
    ['fjw',[{sense:'espace ouvert',concept:'Espace/Ouverture',description:"Lieu large et dégagé. L'espace ouvert est permanent — il offre de la place."},{sense:'fente',concept:'Espace/Ouverture',description:''}]],
    ['zka',[{sense:'purifier',concept:'Purification/Croissance',description:"Acte de rendre pur et de faire croître. La zakat purifie la richesse en la faisant croître moralement."},{sense:'aumône (zakat)',concept:'Purification/Croissance',description:''},{sense:'croître',concept:'Purification/Croissance',description:''}]],
    ['idh',[{sense:'quand (passé)',concept:'Temps/Circonstance',description:"Particule temporelle pour le passé. Le idh situe un événement dans un moment précis du passé."},{sense:'lorsque',concept:'Temps/Circonstance',description:''}]],
    ['srdq',[{sense:'tente',concept:'Enceinte/Couverture',description:"Grande tente qui entoure. Le suraadiq est l'enceinte de feu qui entoure les damnés — permanente et infranchissable."},{sense:'enceinte',concept:'Enceinte/Couverture',description:''}]],
    ['shw',[{sense:'griller',concept:'Cuisson/Brûlure',description:"Acte de cuire par le feu. La cuisson transforme de façon irréversible."},{sense:'rôtir',concept:'Cuisson/Brûlure',description:''}]],
    ['klt',[{sense:'les deux (fém.)',concept:'Duel féminin',description:"Pronom duel féminin. Désigne deux entités féminines ensemble."},{sense:'chacune des deux',concept:'Duel féminin',description:''}]],
    ['hff',[{sense:'entourer',concept:'Encerclement/Protection',description:"Acte de former un cercle protecteur. L'encerclement est multidirectionnel — il vient de tous côtés."},{sense:'être autour',concept:'Encerclement/Protection',description:''}]],
    ['hlw',[{sense:'être doux',concept:'Douceur/Ornement',description:"État de ce qui est agréable au goût ou à l'œil. La douceur est permanente dans ce qui est pur."},{sense:'ornement',concept:'Douceur/Ornement',description:''}]],
    ['snds',[{sense:'brocart fin',concept:'Tissu précieux',description:"Étoffe de soie fine et précieuse. Le sundus est le tissu du paradis — permanent dans sa finesse et sa beauté."},{sense:'soie fine',concept:'Tissu précieux',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 259 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
