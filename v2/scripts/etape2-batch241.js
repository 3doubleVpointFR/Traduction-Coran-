const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1995, total = 2321

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

  r=await ins('asryl',[{sense:'Israël',concept:'Nom propre/Peuple',description:"Nom du prophète Jacob et du peuple qui descend de lui. Israël est un nom propre permanent — les enfants d'Israël sont le peuple de l'alliance."}]);log(r,'asryl')

  r=await ins('hn\u1E0F',[{sense:'préparer un repas',concept:'Préparation/Sacrifice',description:"Acte de préparer un animal pour le festin. La préparation est directionnelle — elle transforme le cru en cuit pour nourrir les invités."},{sense:'rôtir',concept:'Préparation/Sacrifice',description:''}]);log(r,'hn\u1E0F')

  r=await ins('ywh',[{sense:'malheur',concept:'Exclamation/Détresse',description:"Cri de douleur et de regret. L'exclamation exprime la souffrance intérieure."},{sense:'hélas',concept:'Exclamation/Détresse',description:''}]);log(r,'ywh')

  r=await ins('wjs',[{sense:'ressentir de la crainte',concept:'Appréhension/Inquiétude',description:"État intérieur de pressentiment négatif face à un danger subtil. L'appréhension est un mouvement intérieur qui reste dans celui qui la ressent — elle est le signal faible d'un danger."},{sense:'pressentir',concept:'Appréhension/Inquiétude',description:''}]);log(r,'wjs')

  r=await ins('whh',[{sense:'être faible',concept:'Faiblesse/Fragilité',description:"État de celui qui manque de résistance. La faiblesse rend vulnérable."},{sense:'être fragile',concept:'Faiblesse/Fragilité',description:''}]);log(r,'whh')

  r=await ins('wraa',[{sense:'derrière',concept:'Arrière/Au-delà',description:"Ce qui est après ou derrière — le wara est l'invisible au-delà du visible."},{sense:'au-delà',concept:'Arrière/Au-delà',description:''}]);log(r,'wraa')

  r=await ins('rwe',[{sense:'effrayer',concept:'Effroi/Terreur',description:"Acte de provoquer une peur soudaine. L'effroi sort de la source effrayante et atteint celui qui est terrorisé — directionnel et soudain."},{sense:'être terrifié',concept:'Effroi/Terreur',description:''}]);log(r,'rwe')

  r=await ins('\u0161yx',[{sense:'vieillard',concept:'Vieillesse/Sagesse',description:"Celui qui a atteint un âge avancé. Le shaykh est permanent dans sa sagesse — l'expérience de la vie a fait de lui un sage."},{sense:'être vieux',concept:'Vieillesse/Sagesse',description:''}]);log(r,'\u0161yx')

  r=await ins('mjd',[{sense:'être glorieux',concept:'Gloire/Noblesse',description:"État de celui qui possède une grandeur et une noblesse qui dépassent tous les autres. La gloire est permanente chez celui qui la possède — le majid est celui dont la grandeur est reconnue."},{sense:'noblesse',concept:'Gloire/Noblesse',description:''}]);log(r,'mjd')

  r=await ins('rkn',[{sense:'s\'appuyer sur',concept:'Appui/Confiance',description:"Acte de se reposer sur quelque chose de solide. L'appui est directionnel — on penche vers ce qui soutient. Le rukn est le pilier sur lequel on s'appuie."},{sense:'pilier',concept:'Appui/Confiance',description:''}]);log(r,'rkn')

  console.log('\n=== Batch 241 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
