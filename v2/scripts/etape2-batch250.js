const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2085, total = 2321

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

  r=await ins('\u0161wk',[{sense:'épine',concept:'Arme/Force',description:"Pointe acérée qui blesse. La shawka est la force militaire."},{sense:'force militaire',concept:'Arme/Force',description:''}]);log(r,'\u0161wk')

  r=await ins('\u0161ay',[{sense:'chose',concept:'Chose/Entité',description:"Tout ce qui existe. Le shay est l'unité fondamentale de l'existence."},{sense:'quelque chose',concept:'Chose/Entité',description:''}]);log(r,'\u0161ay')

  r=await ins('tmn',[{sense:'rassurer',concept:'Sérénité/Apaisement',description:"Acte de ramener le calme. L'apaisement crée un état permanent de tranquillité."},{sense:'être serein',concept:'Sérénité/Apaisement',description:''}]);log(r,'tmn')

  r=await ins('er\u0161',[{sense:'trône',concept:'Trône suprême',description:"Le trône de Dieu qui surplombe toute la création. Permanent et symbolise la souveraineté totale."},{sense:'toit',concept:'Couverture/Structure',description:"La partie supérieure qui couvre et protège."}]);log(r,'er\u0161')

  r=await ins('xrr',[{sense:'tomber',concept:'Chute/Prosternation',description:"Mouvement du corps qui se jette au sol — prosternation ou effondrement."},{sense:'se prosterner',concept:'Chute/Prosternation',description:''}]);log(r,'xrr')

  r=await ins('tyf',[{sense:'être doux',concept:'Douceur/Subtilité',description:"État de ce qui est fin, délicat et bienveillant. La douceur est intérieure et permanente — le latif est celui qui connaît les détails les plus subtils."},{sense:'être subtil',concept:'Douceur/Subtilité',description:''}]);log(r,'tyf')

  r=await ins('rws',[{sense:'tête',concept:'Tête/Sommet',description:"La partie la plus haute. Le sommet est permanent dans sa position dominante."},{sense:'sommet',concept:'Tête/Sommet',description:''}]);log(r,'rws')

  r=await ins('jdd',[{sense:'être nouveau',concept:'Nouveauté/Renouvellement',description:"État de ce qui vient d'apparaître et n'existait pas avant. La nouveauté est le renouvellement — ce qui est jadid remplace ce qui est ancien."},{sense:'renouveler',concept:'Nouveauté/Renouvellement',description:''}]);log(r,'jdd')

  r=await ins('zre',[{sense:'semer',concept:'Semence/Agriculture',description:"Acte de mettre la graine en terre. Directionnel vers la terre — investir dans l'avenir."},{sense:'culture',concept:'Semence/Agriculture',description:''}]);log(r,'zre')

  r=await ins('nxl',[{sense:'palmier',concept:'Arbre/Provision',description:"L'arbre qui donne les dattes. Permanent dans sa stabilité et sa générosité."},{sense:'dattier',concept:'Arbre/Provision',description:''}]);log(r,'nxl')

  console.log('\n=== Batch 250 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
