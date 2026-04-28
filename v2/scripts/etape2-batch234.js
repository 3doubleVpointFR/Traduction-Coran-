const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1925, total = 2321

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

  r=await ins('shrd',[{sense:'disperser',concept:'Dispersion/Fuite',description:"Acte de chasser et disperser. La dispersion force les gens à fuir — directionnelle et intimidante."},{sense:'chasser',concept:'Dispersion/Fuite',description:''}]);log(r,'shrd')

  r=await ins('khyn',[{sense:'trahir',concept:'Trahison/Infidélité',description:"Acte de rompre la confiance. La trahison sort du traître et atteint celui qui est trahi — destructrice."},{sense:'être infidèle',concept:'Trahison/Infidélité',description:''}]);log(r,'khyn')

  r=await ins('ily',[{sense:'vers',concept:'Direction/Destination',description:"Préposition indiquant le mouvement vers un point. Directionnelle par essence."},{sense:'jusqu\'à',concept:'Direction/Destination',description:''}]);log(r,'ily')

  r=await ins('kda',[{sense:'tromper',concept:'Tromperie/Ruse',description:"Acte de duper quelqu'un en lui faisant croire ce qui n'est pas. La tromperie est directionnelle — elle sort du trompeur et atteint le trompé."},{sense:'ruser',concept:'Tromperie/Ruse',description:''}]);log(r,'kda')

  r=await ins('nnh',[{sense:'secourir',concept:'Secours/Aide',description:"Acte de venir en aide. Le secours est directionnel — du secoureur vers le secouru."},{sense:'fuir',concept:'Divers',description:'Se retirer du danger.'}]);log(r,'nnh')

  r=await ins('ghl b',[{sense:'vaincre',concept:'Victoire/Domination',description:"Acte de triompher. La victoire sort du vainqueur et s'impose au vaincu."},{sense:'dominer',concept:'Victoire/Domination',description:''}]);log(r,'ghl b')

  r=await ins('gnm',[{sense:'butin',concept:'Butin/Capture',description:"Ce qui est pris à l'ennemi. Transfert directionnel du vaincu vers le vainqueur."},{sense:'mouton',concept:'Bétail',description:"Animal domestique utile."}]);log(r,'gnm')

  r=await ins('thkn',[{sense:'être nombreux',concept:'Abondance/Densité',description:"État de ce qui est en grande quantité et densement présent. L'abondance est permanente dans ce qui est dense."},{sense:'être épais',concept:'Abondance/Densité',description:''}]);log(r,'thkn')

  r=await ins('khn',[{sense:'trahir',concept:'Trahison/Infidélité',description:"Acte de rompre la confiance. Destructeur du lien."},{sense:'être perfide',concept:'Trahison/Infidélité',description:''}]);log(r,'khn')

  r=await ins('awla',[{sense:'plus digne',concept:'Priorité/Mérite',description:"État de celui qui a le plus de droit à quelque chose. La priorité est permanente chez celui qui mérite le plus — le awla est celui qui passe en premier par son mérite."},{sense:'plus proche',concept:'Priorité/Mérite',description:''}]);log(r,'awla')

  console.log('\n=== Batch 234 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
