const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2045, total = 2321

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

  r=await ins('thyn',[{sense:'être humble',concept:'Humilité/Soumission',description:"État d'abaissement. Permanent comme disposition."},{sense:'être soumis',concept:'Humilité/Soumission',description:''}]);log(r,'thyn')

  r=await ins('dee',[{sense:'être faible',concept:'Faiblesse/Maigreur',description:"État de ce qui manque de force et de chair. La faiblesse rend vulnérable — les vaches maigres sont celles qui n'ont plus de réserve."},{sense:'être maigre',concept:'Faiblesse/Maigreur',description:''}]);log(r,'dee')

  r=await ins('smn',[{sense:'être gras',concept:'Embonpoint/Abondance',description:"État de ce qui est plein de chair et de force. L'embonpoint est le signe de l'abondance — les vaches grasses sont celles qui ont de la réserve."},{sense:'gras',concept:'Embonpoint/Abondance',description:''}]);log(r,'smn')

  r=await ins('ejf',[{sense:'être maigre',concept:'Maigreur/Disette',description:"État de ce qui a perdu sa chair par le manque de nourriture. La maigreur est permanente dans la disette — le corps émacié témoigne de la privation."},{sense:'émacié',concept:'Maigreur/Disette',description:''}]);log(r,'ejf')

  r=await ins('ghw\u1E6F',[{sense:'appeler au secours',concept:'Secours/Appel',description:"Cri lancé par celui qui est en détresse. L'appel est directionnel vers quiconque peut entendre."},{sense:'secourir',concept:'Secours/Appel',description:''}]);log(r,'ghw\u1E6F')

  r=await ins('zra',[{sense:'semer',concept:'Semence/Agriculture',description:"Acte de mettre la graine en terre. La semence est directionnelle vers la terre — semer c'est investir dans l'avenir."},{sense:'culture',concept:'Semence/Agriculture',description:''}]);log(r,'zra')

  r=await ins('d r e',[{sense:'bras',concept:'Bras/Mesure',description:"Le membre supérieur. Le bras est une unité de mesure — la coudée."},{sense:'coudée',concept:'Bras/Mesure',description:''}]);log(r,'d r e')

  r=await ins('bwl',[{sense:'uriner',concept:'Excrétion/Impureté',description:"Acte d'évacuer les déchets liquides du corps. L'excrétion est directionnelle de l'intérieur vers l'extérieur."},{sense:'urine',concept:'Excrétion/Impureté',description:''}]);log(r,'bwl')

  r=await ins('khd r',[{sense:'être vert',concept:'Verdure/Fraîcheur',description:"État de ce qui est frais et vivant. Le vert est la couleur de la vie — permanent dans la végétation nourrie d'eau."},{sense:'verdure',concept:'Verdure/Fraîcheur',description:''}]);log(r,'khd r')

  r=await ins('hsh',[{sense:'herbe sèche',concept:'Végétation/Fourrage',description:"Plantes séchées pour le bétail. L'herbe sèche est la végétation qui a perdu sa vie."},{sense:'fourrage',concept:'Végétation/Fourrage',description:''}]);log(r,'hsh')

  console.log('\n=== Batch 246 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
