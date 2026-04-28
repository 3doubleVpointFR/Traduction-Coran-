const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2155, total = 2321

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
    ['nbe',[{sense:'jaillir',concept:'Jaillissement/Source',description:"Acte de sortir de terre avec force. L'eau qui jaillit est la vie qui sort du sol — directionnelle vers le haut."},{sense:'source',concept:'Jaillissement/Source',description:''}]],
    ['ksf',[{sense:'morceaux',concept:'Fragment/Partie',description:"Pièces résultant de la division d'un tout. Les fragments sont permanents dans leur séparation."},{sense:'morceau de ciel',concept:'Fragment/Partie',description:''}]],
    ['zxhrf',[{sense:'ornement doré',concept:'Ornement/Faux brillant',description:"Décoration trompeuse. Le zukhruf est le faux éclat."},{sense:'dorure',concept:'Ornement/Faux brillant',description:''}]],
    ['rqy',[{sense:'monter',concept:'Ascension/Élévation',description:"Mouvement vers le haut. L'ascension est directionnelle."},{sense:'s\'élever',concept:'Ascension/Élévation',description:''}]],
    ['lff',[{sense:'envelopper',concept:'Enveloppement/Rassemblement',description:"Acte d'enrouler autour. L'enveloppement couvre de tous côtés — permanent."},{sense:'rassembler',concept:'Enveloppement/Rassemblement',description:''}]],
    ['tse',[{sense:'neuf',concept:'Nombre/Quantité',description:"Le nombre neuf. Un de moins que dix."},{sense:'neuvième',concept:'Nombre/Quantité',description:''}]],
    ['dhqn',[{sense:'menton',concept:'Menton/Visage',description:"La partie basse du visage. Le menton touche le sol dans la prosternation — signe d'humilité extrême."},{sense:'barbe',concept:'Menton/Visage',description:''}]],
    ['mkth',[{sense:'rester longtemps',concept:'Séjour prolongé',description:"État de celui qui demeure en un lieu pendant une longue période. Le mukth est la patience de l'attente — permanent dans sa durée."},{sense:'demeurer',concept:'Séjour prolongé',description:''}]],
    ['samaa',[{sense:'ciel',concept:'Ciel/Élévation',description:"L'espace au-dessus de la terre. Le ciel est permanent dans sa hauteur — il domine tout."},{sense:'être élevé',concept:'Ciel/Élévation',description:''}]],
    ['kwth',[{sense:'abondance',concept:'Abondance/Bien immense',description:"Quantité immense de bien. Le kawthar est l'abondance divine — permanente et inépuisable. Le bassin du Prophète au paradis."},{sense:'bien immense',concept:'Abondance/Bien immense',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 257 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
