const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1915, total = 2321

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

  r=await ins('sdw',[{sense:'se détourner',concept:'Détournement/Refus',description:"Acte de tourner le dos à ce qui est proposé. Le détournement est directionnel — il part de celui qui refuse et s'éloigne de ce qui est offert."},{sense:'refuser',concept:'Détournement/Refus',description:''}]);log(r,'sdw')

  r=await ins('mdy',[{sense:'aller de l\'avant',concept:'Progression/Passage',description:"Mouvement vers l'avant sans retour. La progression est directionnelle et irréversible — ce qui est passé est passé."},{sense:'passer',concept:'Progression/Passage',description:''}]);log(r,'mdy')

  r=await ins('rkm',[{sense:'entasser',concept:'Accumulation/Entassement',description:"Acte de mettre couche sur couche. L'accumulation crée un tas permanent — les nuages entassés portent la pluie."},{sense:'empiler',concept:'Accumulation/Entassement',description:''}]);log(r,'rkm')

  r=await ins('\u1E0Fwq',[{sense:'goûter',concept:'Expérience/Goût',description:"Acte de percevoir la saveur par contact direct. Goûter c'est expérimenter par soi-même."},{sense:'expérimenter',concept:'Expérience/Goût',description:''}]);log(r,'\u1E0Fwq')

  r=await ins('ryh',[{sense:'vent',concept:'Vent/Souffle',description:"Mouvement de l'air qui se déplace d'un point à un autre. Le vent est directionnel et peut être doux (brise) ou violent (tempête). Le vent porte la pluie et les parfums — il est le souffle de la miséricorde ou du châtiment."},{sense:'souffle',concept:'Vent/Souffle',description:''},{sense:'parfum',concept:'Divers',description:'Ce que le vent porte — l\'odeur agréable.'}]);log(r,'ryh')

  r=await ins('btr',[{sense:'être orgueilleux',concept:'Orgueil/Ingratitude',description:"État de celui que la richesse rend arrogant et ingrat. Le batar est l'orgueil qui naît de l'excès de bien — l'ingrat ne remercie pas car il croit mériter ce qu'il a."},{sense:'être ingrat',concept:'Orgueil/Ingratitude',description:''}]);log(r,'btr')

  r=await ins('ilayhi',[{sense:'vers lui',concept:'Direction/Destination',description:"Préposition et pronom indiquant le mouvement vers un masculin absent. Directionnel vers la destination."},{sense:'en sa direction',concept:'Direction/Destination',description:''}]);log(r,'ilayhi')

  r=await ins('nks',[{sense:'reculer',concept:'Recul/Régression',description:"Acte de revenir en arrière face à ce qu'on avait accepté. Le recul est directionnel vers l'arrière — il est le mouvement de celui qui se dérobe."},{sense:'se rétracter',concept:'Recul/Régression',description:''}]);log(r,'nks')

  r=await ins('qwy',[{sense:'être fort',concept:'Force/Puissance',description:"État de celui qui possède la capacité d'agir et de résister. La force est intérieure et permanente."},{sense:'puissance',concept:'Force/Puissance',description:''}]);log(r,'qwy')

  r=await ins('frae',[{sense:'Pharaon',concept:'Nom propre/Tyrannie',description:"Titre du roi d'Égypte, symbole de la tyrannie et de l'arrogance suprême. Pharaon est permanent dans la mémoire comme l'archétype du tyran qui se prend pour Dieu."},{sense:'tyran',concept:'Nom propre/Tyrannie',description:''}]);log(r,'frae')

  console.log('\n=== Batch 233 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
