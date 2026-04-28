const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2135, total = 2321

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
    ['erj',[{sense:'monter',concept:'Ascension/Élévation',description:"Mouvement vers le haut. L'ascension est directionnelle."},{sense:'escalier',concept:'Ascension/Élévation',description:''}]],
    ['lwqh',[{sense:'féconder',concept:'Fécondation/Pollinisation',description:"Acte de transporter le pollen pour féconder. Le vent féconde les nuages et les plantes."},{sense:'vents fécondants',concept:'Fécondation/Pollinisation',description:''}]],
    ['nfkh',[{sense:'souffler',concept:'Souffle/Insufflation',description:"Acte de projeter de l'air. Le souffle est créateur — il donne la vie à l'argile."},{sense:'insuffler',concept:'Souffle/Insufflation',description:''}]],
    ['qew',[{sense:'s\'asseoir',concept:'Position assise/Immobilité',description:"Acte de prendre une position basse. L'assise fixe la personne."},{sense:'rester',concept:'Position assise/Immobilité',description:''}]],
    ['slsl',[{sense:'argile sèche',concept:'Argile/Matière',description:"Terre cuite qui résonne quand on la frappe. L'argile sèche est la matière dont l'homme a été créé — permanente dans sa forme."},{sense:'son de la poterie',concept:'Argile/Matière',description:''}]],
    ['fdh',[{sense:'déshonorer',concept:'Déshonneur/Exposition',description:"Acte de révéler ce qui devait rester caché. Le déshonneur sort de celui qui expose et atteint celui qui est exposé — directionnel et humiliant."},{sense:'exposer',concept:'Déshonneur/Exposition',description:''}]],
    ['wsm',[{sense:'marquer',concept:'Marque/Signe',description:"Acte de mettre un signe distinctif sur quelque chose. La marque est permanente — elle identifie et distingue."},{sense:'signe',concept:'Marque/Signe',description:''}]],
    ['tay',[{sense:'errer',concept:'Errance/Égarement',description:"État de celui qui marche sans direction. L'errance est un mouvement permanent sans but."},{sense:'se perdre',concept:'Errance/Égarement',description:''}]],
    ['mrh',[{sense:'être joyeux avec insolence',concept:'Exultation/Arrogance',description:"État de joie excessive qui mène à l'arrogance. Le marah est la joie orgueilleuse de celui qui se croit invincible."},{sense:'exulter',concept:'Exultation/Arrogance',description:''}]],
    ['qfw',[{sense:'suivre',concept:'Poursuite/Suivi',description:"Acte de marcher sur les traces de quelqu'un. Le suivi est directionnel — il va dans la direction de ce qui précède."},{sense:'poursuivre',concept:'Poursuite/Suivi',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 255 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
