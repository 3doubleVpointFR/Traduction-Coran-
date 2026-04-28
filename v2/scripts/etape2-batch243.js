const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2015, total = 2321

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

  r=await ins('shhq',[{sense:'inhaler bruyamment',concept:'Halètement/Gémissement',description:"Son produit par une respiration violente et douloureuse. Le shahiq est le bruit de l'enfer qui aspire — un gémissement permanent de souffrance."},{sense:'gémir',concept:'Halètement/Gémissement',description:''}]);log(r,'shhq')

  r=await ins('li-ma',[{sense:'pourquoi',concept:'Interrogation causale',description:"Particule composée qui demande la raison. L'interrogation causale cherche le motif."},{sense:'pour quelle raison',concept:'Interrogation causale',description:''}]);log(r,'li-ma')

  r=await ins('khald',[{sense:'demeurer éternellement',concept:'Éternité/Permanence',description:"État de ce qui ne finit jamais. L'éternité est la permanence absolue."},{sense:'rester pour toujours',concept:'Éternité/Permanence',description:''}]);log(r,'khald')

  r=await ins('j\u1E0Fw',[{sense:'tronc de palmier',concept:'Tronc/Bûche',description:"La partie massive et morte du palmier. Le tronc est permanent dans sa solidité — il reste même après la mort de l'arbre."},{sense:'souche',concept:'Tronc/Bûche',description:''}]);log(r,'j\u1E0Fw')

  r=await ins('zlf',[{sense:'se rapprocher',concept:'Rapprochement/Proximité',description:"Mouvement vers ce qui est proche. Le rapprochement est directionnel — il comble la distance. Les zulfa sont les heures de la nuit où l'on se rapproche de Dieu."},{sense:'proximité',concept:'Rapprochement/Proximité',description:''}]);log(r,'zlf')

  r=await ins('atr',[{sense:'trace',concept:'Trace/Empreinte',description:"La marque laissée par le passage. La trace est permanente — elle survit à ce qui l'a causée."},{sense:'effet',concept:'Trace/Empreinte',description:''}]);log(r,'atr')

  r=await ins('ywsf',[{sense:'Joseph (nom propre)',concept:'Nom propre',description:"Nom du prophète Joseph fils de Jacob. C'est un nom propre permanent — Joseph est le modèle de la patience face à l'injustice et de la beauté intérieure et extérieure."}]);log(r,'ywsf')

  r=await ins('abt',[{sense:'père (vocatif)',concept:'Parenté/Paternité',description:"Forme vocative du mot père — utilisée pour s'adresser à son père directement."},{sense:'ô mon père',concept:'Parenté/Paternité',description:''}]);log(r,'abt')

  r=await ins('nbaa',[{sense:'nouvelle importante',concept:'Annonce/Information grave',description:"Information d'une grande importance qui change la compréhension de la situation. Le naba est la nouvelle qui ne laisse pas indifférent — elle est grave et conséquente."},{sense:'récit',concept:'Annonce/Information grave',description:''}]);log(r,'nbaa')

  r=await ins('trh',[{sense:'jeter',concept:'Rejet/Éloignement',description:"Acte de lancer loin de soi. Le rejet est directionnel — il éloigne ce dont on ne veut plus."},{sense:'abandonner',concept:'Rejet/Éloignement',description:''}]);log(r,'trh')

  console.log('\n=== Batch 243 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
