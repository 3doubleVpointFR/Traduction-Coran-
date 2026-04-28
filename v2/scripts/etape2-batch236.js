const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1945, total = 2321

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

  r=await ins('sqw',[{sense:'tomber',concept:'Chute/Effondrement',description:"Mouvement vers le bas. La chute est directionnelle et souvent irréversible."},{sense:'s\'effondrer',concept:'Chute/Effondrement',description:''}]);log(r,'sqw')

  r=await ins('shf',[{sense:'guérir',concept:'Guérison/Remède',description:"Acte de restaurer la santé. La guérison sort du remède et atteint le malade — directionnelle et transformatrice."},{sense:'remède',concept:'Guérison/Remède',description:''}]);log(r,'shf')

  r=await ins('qt l',[{sense:'tuer',concept:'Meurtre/Destruction',description:"Acte d'ôter la vie. Le meurtre sort du tueur et atteint la victime — directionnel et irréversible."},{sense:'combattre',concept:'Meurtre/Destruction',description:''},{sense:'maudire',concept:'Divers',description:'Exclamation : que Dieu le tue — expression de rejet total.'}]);log(r,'qt l')

  r=await ins('\u1E0Fhn',[{sense:'esprit',concept:'Esprit/Intelligence',description:"Faculté de penser et comprendre. Permanente dans l'être."},{sense:'intelligence',concept:'Esprit/Intelligence',description:''}]);log(r,'\u1E0Fhn')

  r=await ins('wtn',[{sense:'patrie',concept:'Patrie/Résidence',description:"Le lieu où l'on est établi et enraciné. La patrie est permanente dans l'attachement — c'est la terre d'origine qui lie l'homme à son sol."},{sense:'résidence',concept:'Patrie/Résidence',description:''}]);log(r,'wtn')

  r=await ins('ksd',[{sense:'être sans valeur',concept:'Dépréciation/Stagnation',description:"État de ce qui ne se vend pas, de ce qui est délaissé. La dépréciation est permanente dans ce qui n'a pas de demande — le marché stagne."},{sense:'stagner',concept:'Dépréciation/Stagnation',description:''}]);log(r,'ksd')

  r=await ins('mww',[{sense:'eau',concept:'Eau/Liquide',description:"Substance source de vie. Permanente dans sa nature."},{sense:'liquide',concept:'Eau/Liquide',description:''}]);log(r,'mww')

  r=await ins('njs',[{sense:'impureté',concept:'Impureté/Souillure',description:"État de ce qui est rituellement ou moralement sale. L'impureté est permanente dans ce qui est najas — elle empêche l'approche du sacré."},{sense:'être impur',concept:'Impureté/Souillure',description:''}]);log(r,'njs')

  r=await ins('eam',[{sense:'année',concept:'Temps/Cycle annuel',description:"Unité de mesure du temps. L'année est un cycle permanent qui se répète."},{sense:'an',concept:'Temps/Cycle annuel',description:''}]);log(r,'eam')

  r=await ins('xft',[{sense:'baisser la voix',concept:'Discrétion/Silence',description:"Acte de réduire le volume de sa parole. La discrétion est un choix intérieur — parler bas c'est retenir."},{sense:'murmurer',concept:'Discrétion/Silence',description:''}]);log(r,'xft')

  console.log('\n=== Batch 236 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
