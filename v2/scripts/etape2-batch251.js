const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2095, total = 2321

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

  r=await ins('skhr',[{sense:'se moquer',concept:'Moquerie/Dérision',description:"Acte de ridiculiser. Directionnel du moqueur vers le moqué."},{sense:'asservir',concept:'Assujettissement',description:"Mettre au service. Directionnel et permanent."}]);log(r,'skhr')

  r=await ins('mhl',[{sense:'accorder un délai',concept:'Délai/Sursis',description:"Acte de donner du temps avant la sanction. Le sursis est directionnel de celui qui accorde vers celui qui reçoit — temporaire mais significatif."},{sense:'reporter',concept:'Délai/Sursis',description:''}]);log(r,'mhl')

  r=await ins('kmn',[{sense:'être caché',concept:'Dissimulation/Embuscade',description:"État de ce qui est invisible et prêt à surgir. Le kamn est celui qui se cache en attendant le moment — permanent dans sa dissimulation."},{sense:'embuscade',concept:'Dissimulation/Embuscade',description:''}]);log(r,'kmn')

  r=await ins('qswa',[{sense:'extrême',concept:'Extrémité/Limite',description:"Le point le plus éloigné. L'extrémité est permanente dans sa position — elle est la limite au-delà de laquelle il n'y a plus rien."},{sense:'le plus lointain',concept:'Extrémité/Limite',description:''}]);log(r,'qswa')

  r=await ins('syl',[{sense:'torrent',concept:'Torrent/Inondation',description:"Courant d'eau violent qui emporte tout sur son passage. Le torrent est directionnel et dévastateur — il descend avec force et ne laisse rien debout."},{sense:'inondation',concept:'Torrent/Inondation',description:''}]);log(r,'syl')

  r=await ins('zbd',[{sense:'écume',concept:'Écume/Superficiel',description:"La mousse qui flotte à la surface de l'eau ou du métal en fusion. L'écume est ce qui est rejeté — elle est temporaire et disparaît. Le vrai reste en dessous."},{sense:'rebut',concept:'Écume/Superficiel',description:''}]);log(r,'zbd')

  r=await ins('jfw',[{sense:'être sec',concept:'Sécheresse/Aridité',description:"État de ce qui a perdu toute humidité. La sécheresse est permanente dans ce qui n'a plus d'eau — le sol sec n'accueille plus la vie."},{sense:'rivière asséchée',concept:'Sécheresse/Aridité',description:''}]);log(r,'jfw')

  r=await ins('dra',[{sense:'repousser',concept:'Repoussement/Défense',description:"Acte d'éloigner par la force. Directionnel et protecteur."},{sense:'détourner',concept:'Repoussement/Défense',description:''}]);log(r,'dra')

  r=await ins('mtb',[{sense:'retour',concept:'Retour/Destination finale',description:"Le lieu ou l'état vers lequel on revient. Le matab est la destination finale — permanente et inévitable."},{sense:'destination',concept:'Retour/Destination finale',description:''}]);log(r,'mtb')

  r=await ins('aml',[{sense:'espérer',concept:'Espoir/Attente',description:"État intérieur d'attente d'un bien futur. L'espoir est permanent tant que la cause d'espérer existe — il tourne le regard vers l'avenir."},{sense:'espérance',concept:'Espoir/Attente',description:''}]);log(r,'aml')

  console.log('\n=== Batch 251 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
