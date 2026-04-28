const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1845, total = 2321

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

  r=await ins('khsf',[
    {sense:'coudre (des feuilles)',concept:'Couture/Réparation',description:"Acte d'assembler des morceaux en les cousant. La couture est un acte de réparation — elle couvre ce qui est exposé et unit ce qui est séparé."},
    {sense:'recouvrir',concept:'Couture/Réparation',description:''},
  ]);log(r,'khsf')

  r=await ins('nhk',[
    {sense:'affaiblir',concept:'Affaiblissement/Épuisement',description:"Acte de réduire les forces de quelqu'un jusqu'à l'épuisement. L'affaiblissement sort de la cause et atteint celui qui est affaibli — directionnel et progressif."},
    {sense:'épuiser',concept:'Affaiblissement/Épuisement',description:''},
  ]);log(r,'nhk')

  r=await ins('bsw',[
    {sense:'être misérable',concept:'Misère/Malheur',description:"État de détresse et de dénuement. La misère est permanente chez celui qui y est plongé — elle est l'opposé du bonheur."},
    {sense:'être malheureux',concept:'Misère/Malheur',description:''},
  ]);log(r,'bsw')

  r=await ins('rw\u0161',[
    {sense:'âme (ruh)',concept:'Esprit/Souffle vital',description:"Le souffle divin qui anime le corps et lui donne la vie. L'esprit est permanent dans l'être vivant — il est ce qui distingue le vivant du mort. Le ruh est l'essence invisible qui vient de Dieu."},
    {sense:'esprit',concept:'Esprit/Souffle vital',description:''},
    {sense:'repos',concept:'Divers',description:'Le repos de l\'âme — la tranquillité.'},
  ]);log(r,'rw\u0161')

  r=await ins("ha'",[
    {sense:'voici',concept:'Attention/Présentation',description:"Particule qui attire l'attention sur ce qui va être montré."},
  ]);log(r,"ha'")

  r=await ins('fwhsh',[
    {sense:'turpitude',concept:'Indécence/Turpitude',description:"Acte qui dépasse les limites de la décence. Permanent dans son excès."},
    {sense:'obscénité',concept:'Indécence/Turpitude',description:''},
  ]);log(r,'fwhsh')

  r=await ins('mys',[
    {sense:'marcher avec orgueil',concept:'Orgueil/Arrogance',description:"Acte de se déplacer avec une attitude hautaine. L'orgueil dans la marche est visible — il sort du marcheur et s'affiche devant les autres. C'est un état permanent chez l'arrogant."},
    {sense:'se pavaner',concept:'Orgueil/Arrogance',description:''},
  ]);log(r,'mys')

  r=await ins('ljj',[
    {sense:'insister obstinément',concept:'Obstination/Persistance',description:"État de celui qui persiste dans une direction malgré les preuves contraires. L'obstination est un état permanent de refus de changer — le lajj est celui qui ne cède pas, même quand il a tort."},
    {sense:'s\'entêter',concept:'Obstination/Persistance',description:''},
  ]);log(r,'ljj')

  r=await ins('jml',[
    {sense:'chameau',concept:'Chameau/Transport',description:"Animal du désert qui traverse les vastes étendues. Le chameau est permanent dans sa force et sa patience."},
    {sense:'être beau',concept:'Beauté/Patience',description:"État de ce qui est agréable à voir et harmonieux. La beauté est un état permanent — le sabr jamil est la patience belle et digne."},
    {sense:'patience belle',concept:'Beauté/Patience',description:''},
    {sense:'totalité',concept:'Divers',description:'L\'ensemble complet — la somme de tout.'},
  ]);log(r,'jml')

  r=await ins('khyt',[
    {sense:'fil',concept:'Fil/Ligne',description:"Ce qui est fin et continu. Le fil relie deux points — il est le lien permanent. Le fil de l'aube est la première ligne de lumière."},
    {sense:'ligne',concept:'Fil/Ligne',description:''},
  ]);log(r,'khyt')

  console.log('\n=== Batch 226 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
