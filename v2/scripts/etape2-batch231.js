const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1895, total = 2321

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

  r=await ins('bt\u0161',[{sense:'frapper avec violence',concept:'Violence/Saisie brutale',description:"Acte de saisir et frapper avec une force terrible. La saisie brutale sort du puissant et écrase le faible — directionnelle et dévastatrice."},{sense:'châtiment violent',concept:'Violence/Saisie brutale',description:''}]);log(r,'bt\u0161')

  r=await ins('l\u1E0Fy',[{sense:'plaisir',concept:'Plaisir/Jouissance',description:"État de satisfaction face à ce qui est agréable. Permanent au paradis."},{sense:'délice',concept:'Plaisir/Jouissance',description:''}]);log(r,'l\u1E0Fy')

  r=await ins('nzg',[{sense:'semer la discorde',concept:'Discorde/Incitation',description:"Acte du diable qui pousse les gens les uns contre les autres. Le nazgh est un murmure qui divise — directionnel et insidieux."},{sense:'inciter au mal',concept:'Discorde/Incitation',description:''}]);log(r,'nzg')

  r=await ins('sma',[{sense:'entendre',concept:'Audition/Écoute',description:"Acte de percevoir les sons par l'oreille. L'audition est directionnelle de l'extérieur vers l'intérieur — le son atteint celui qui écoute. Entendre c'est recevoir la parole."},{sense:'écouter',concept:'Audition/Écoute',description:''},{sense:'obéir (par l\'écoute)',concept:'Audition/Écoute',description:''}]);log(r,'sma')

  r=await ins('snt',[{sense:'se taire',concept:'Silence/Écoute attentive',description:"Acte de garder le silence pour mieux écouter. Le silence est un état de réceptivité — celui qui se tait ouvre son oreille."},{sense:'écouter attentivement',concept:'Silence/Écoute attentive',description:''}]);log(r,'snt')

  r=await ins('asl',[{sense:'racine',concept:'Racine/Fondement',description:"La partie cachée de l'arbre qui l'ancre dans le sol et le nourrit. La racine est permanente et invisible — elle est le fondement sur lequel tout repose. L'asl est l'origine première dont tout dérive."},{sense:'fondement',concept:'Racine/Fondement',description:''},{sense:'origine',concept:'Racine/Fondement',description:''}]);log(r,'asl')

  r=await ins('wjl',[{sense:'avoir peur',concept:'Crainte/Tremblement',description:"État intérieur de peur face à la grandeur de Dieu. Le wajal est la crainte qui fait trembler le cœur — elle reste dans celui qui la ressent."},{sense:'trembler de peur',concept:'Crainte/Tremblement',description:''}]);log(r,'wjl')

  r=await ins('ayy t',[{sense:'signe',concept:'Signe/Miracle',description:"Ce qui pointe vers une réalité plus grande. L'aya est le verset et le miracle — permanent dans sa fonction d'indication."},{sense:'verset',concept:'Signe/Miracle',description:''},{sense:'miracle',concept:'Signe/Miracle',description:''}]);log(r,'ayy t')

  r=await ins('nfl',[{sense:'butin supplémentaire',concept:'Surplus/Don',description:"Ce qui est donné en plus du droit, un don supplémentaire. Le nafl est le surplus que Dieu accorde — directionnel du donneur vers le receveur."},{sense:'prière surérogatoire',concept:'Surplus/Don',description:''},{sense:'don gracieux',concept:'Surplus/Don',description:''}]);log(r,'nfl')

  r=await ins('alyh',[{sense:'sur lui',concept:'Supériorité/Obligation',description:"Préposition et pronom indiquant ce qui pèse sur quelqu'un ou ce qui lui incombe. L'obligation est directionnelle vers celui qui la porte."},{sense:'contre lui',concept:'Supériorité/Obligation',description:''}]);log(r,'alyh')

  console.log('\n=== Batch 231 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
