const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1965, total = 2321

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

  r=await ins('ylk',[{sense:'celui-là (possessif)',concept:'Démonstratif/Possession',description:"Pronom démonstratif avec pronom possessif. Désigne ce qui appartient à celui dont on parle."},{sense:'à lui',concept:'Démonstratif/Possession',description:''}]);log(r,'ylk')

  r=await ins('dnn',[{sense:'péché',concept:'Péché/Faute',description:"Acte qui transgresse la loi divine. Le péché pèse sur l'âme comme une dette permanente."},{sense:'faute',concept:'Péché/Faute',description:''}]);log(r,'dnn')

  r=await ins('xbl',[{sense:'corrompre l\'esprit',concept:'Corruption/Trouble',description:"Acte de troubler la raison. La corruption empêche de voir clair."},{sense:'perte',concept:'Corruption/Trouble',description:''}]);log(r,'xbl')

  r=await ins('xll',[{sense:'ami intime',concept:'Amitié intime',description:"Proximité profonde entre deux êtres. Le khalil est celui dont l'amour a pénétré les fibres de l'être."},{sense:'percer',concept:'Pénétration/Intervalle',description:"Acte de créer un passage. La pénétration crée un intervalle dans ce qui était compact."},{sense:'défaut',concept:'Divers',description:'La faille dans ce qui semblait solide.'}]);log(r,'xll')

  r=await ins('\u1E6Fbt',[{sense:'retarder',concept:'Retardement/Découragement',description:"Acte de freiner quelqu'un dans son élan. Le retardement est directionnel — il tire vers l'arrière celui qui voulait avancer."},{sense:'décourager',concept:'Retardement/Découragement',description:''}]);log(r,'\u1E6Fbt')

  r=await ins('zhq',[{sense:'disparaître',concept:'Disparition/Anéantissement',description:"Acte de cesser d'exister face à la vérité. Le faux disparaît quand le vrai apparaît — le zahq est l'anéantissement permanent du mensonge."},{sense:'périr',concept:'Disparition/Anéantissement',description:''}]);log(r,'zhq')

  r=await ins('lja',[{sense:'chercher refuge',concept:'Refuge/Abri',description:"Acte de se mettre à l'abri dans un lieu protégé. Le refuge est directionnel vers le lieu sûr — celui qui cherche refuge reconnaît le danger et fuit vers la protection."},{sense:'se réfugier',concept:'Refuge/Abri',description:''}]);log(r,'lja')

  r=await ins('ghwr',[{sense:'s\'enfoncer dans le sol',concept:'Enfoncement/Disparition',description:"Mouvement de ce qui descend sous la surface et disparaît. L'enfoncement est directionnel vers le bas — l'eau qui s'enfonce dans le sol ne revient pas."},{sense:'disparaître (eau)',concept:'Enfoncement/Disparition',description:''}]);log(r,'ghwr')

  r=await ins('dkhl',[{sense:'entrer',concept:'Entrée/Pénétration',description:"Acte de passer de l'extérieur vers l'intérieur. L'entrée est directionnelle — elle franchit le seuil."},{sense:'pénétrer',concept:'Entrée/Pénétration',description:''}]);log(r,'dkhl')

  r=await ins('jmh',[{sense:'s\'emballer',concept:'Emballement/Fuite incontrôlée',description:"Mouvement de celui qui court sans contrôle ni direction, emporté par la passion ou la peur. L'emballement est un mouvement incontrôlé — comme le cheval qui s'emballe et ne répond plus au cavalier."},{sense:'fuir sans contrôle',concept:'Emballement/Fuite incontrôlée',description:''}]);log(r,'jmh')

  console.log('\n=== Batch 238 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
