const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1985, total = 2321

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

  r=await ins('ealayhi',[{sense:'sur lui',concept:'Obligation/Supériorité',description:"Préposition et pronom indiquant ce qui incombe à quelqu'un. Directionnel vers celui qui porte la charge."}]);log(r,'ealayhi')

  r=await ins('ble',[{sense:'avaler',concept:'Absorption/Engloutissement',description:"Acte de faire entrer par la gorge. L'absorption est directionnelle de l'extérieur vers l'intérieur — la terre qui avale son eau reprend ce qu'elle avait donné."},{sense:'engloutir',concept:'Absorption/Engloutissement',description:''}]);log(r,'ble')

  r=await ins('qle',[{sense:'arracher',concept:'Arrachement/Déracinement',description:"Acte de retirer par la force ce qui était planté. Le déracinement est directionnel — il arrache de la terre ce qui y était ancré."},{sense:'déraciner',concept:'Arrachement/Déracinement',description:''}]);log(r,'qle')

  r=await ins('wtw',[{sense:'donner',concept:'Don/Attribution',description:"Acte de transmettre un bien. Le don sort du donneur vers le receveur — directionnel et généreux."},{sense:'accorder',concept:'Don/Attribution',description:''}]);log(r,'wtw')

  r=await ins('jwd',[{sense:'être généreux',concept:'Générosité/Excellence',description:"État de celui qui donne abondamment sans compter. La générosité est permanente chez le jawad — il est celui dont le don dépasse ce qui est attendu."},{sense:'exceller',concept:'Générosité/Excellence',description:''}]);log(r,'jwd')

  r=await ins('etr',[{sense:'trébucher',concept:'Chute/Découverte',description:"Acte de tomber sur quelque chose. Le trébuchement est ponctuel — on tombe sur une vérité ou un obstacle sans l'avoir cherché."},{sense:'trouver',concept:'Chute/Découverte',description:''}]);log(r,'etr')

  r=await ins('mew',[{sense:'intestins',concept:'Intérieur/Entrailles',description:"Les organes internes du ventre. Les entrailles sont permanentes dans le corps — elles sont ce qui est le plus caché et le plus vital."},{sense:'ventre',concept:'Intérieur/Entrailles',description:''}]);log(r,'mew')

  r=await ins('la-fi',[{sense:'certes dans',concept:'Certitude/Contenu',description:"Particule composée qui affirme qu'il y a quelque chose à l'intérieur. La certitude du contenu est permanente."},{sense:'assurément en',concept:'Certitude/Contenu',description:''}]);log(r,'la-fi')

  r=await ins('min-ma',[{sense:'de ce que',concept:'Provenance/Partitivité',description:"Particule composée indiquant l'extraction. La provenance est directionnelle de la source vers ce qui en sort."}]);log(r,'min-ma')

  r=await ins('laain',[{sense:'certes si',concept:'Serment/Certitude',description:"Particule composée qui renforce un serment ou une condition. Le laain affirme avec force que la condition sera suivie de sa conséquence."}]);log(r,'laain')

  console.log('\n=== Batch 240 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
