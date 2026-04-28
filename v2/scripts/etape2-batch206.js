const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1648, total = 2321

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

  r=await ins('ser',[
    {sense:'allumer un feu',concept:'Embrasement/Intensité',description:"Acte de faire naître le feu ou d'attiser ce qui brûle. L'embrasement est directionnel — il sort de l'allumeur et atteint ce qui prend feu. Le seer est l'intensité de la flamme et du prix qui monte."},
    {sense:'brûler intensément',concept:'Embrasement/Intensité',description:''},
    {sense:'prix (sier)',concept:'Divers',description:'Le prix d\'une chose — ce qui s\'enflamme dans le marché.'},
  ]);log(r,'ser')

  r=await ins('khwsh',[
    {sense:'être humble',concept:'Humilité/Recueillement',description:"État de soumission mêlée de crainte révérencielle. Le khushu est le recueillement du cœur qui se manifeste dans le corps — voix basse, regard baissé."},
    {sense:'se recueillir',concept:'Humilité/Recueillement',description:''},
  ]);log(r,'khwsh')

  r=await ins('fhsh',[
    {sense:'être obscène',concept:'Indécence/Turpitude',description:"État de ce qui dépasse les limites de la décence. L'indécence est un excès permanent dans le mal — elle franchit ce qui est acceptable."},
    {sense:'turpitude',concept:'Indécence/Turpitude',description:''},
    {sense:'acte immoral',concept:'Indécence/Turpitude',description:''},
  ]);log(r,'fhsh')

  r=await ins('qsm',[
    {sense:'partager',concept:'Partage/Division',description:"Acte de distribuer un bien en parts entre plusieurs personnes. Le partage sort du distributeur et atteint chaque bénéficiaire — c'est multidirectionnel et crée des lots permanents. Le qism est la part qui revient à chacun de droit."},
    {sense:'diviser',concept:'Partage/Division',description:''},
    {sense:'part',concept:'Partage/Division',description:''},
    {sense:'jurer (qasam)',concept:'Serment',description:"Acte solennel de prendre Dieu à témoin de sa véracité. Le serment est un engagement ponctuel qui crée une obligation permanente."},
  ]);log(r,'qsm')

  r=await ins('yly',[
    {sense:'suivre immédiatement',concept:'Succession/Proximité',description:"État de ce qui vient juste après sans intervalle. La succession immédiate est permanente dans l'ordre — ce qui suit est toujours derrière ce qui précède."},
    {sense:'être proche',concept:'Succession/Proximité',description:''},
    {sense:'prendre en charge',concept:'Succession/Proximité',description:''},
  ]);log(r,'yly')

  r=await ins('idha',[
    {sense:'quand (temporel)',concept:'Condition temporelle',description:"Particule qui introduit un événement futur certain. Le idha pose une condition dans le temps — quand ceci arrivera, cela se produira. C'est un lien permanent entre le moment et sa conséquence."},
    {sense:'lorsque',concept:'Condition temporelle',description:''},
  ]);log(r,'idha')

  r=await ins('kf y',[
    {sense:'suffire',concept:'Suffisance/Protection',description:"État de ce qui comble entièrement le besoin. La suffisance est permanente tant que la source demeure — ce qui suffit protège du manque."},
    {sense:'protéger',concept:'Suffisance/Protection',description:''},
  ]);log(r,'kf y')

  r=await ins('fhs',[
    {sense:'être obscène',concept:'Indécence/Turpitude',description:"État de ce qui franchit les limites de la décence. L'indécence est un excès dans le mal."},
    {sense:'turpitude',concept:'Indécence/Turpitude',description:''},
  ]);log(r,'fhs')

  r=await ins('fatk',[
    {sense:'tuer traîtreusement',concept:'Assassinat/Traîtrise',description:"Acte de tuer quelqu'un par surprise et par ruse. L'assassinat sort du tueur et atteint la victime sans qu'elle puisse se défendre — c'est directionnel et lâche."},
    {sense:'assassiner',concept:'Assassinat/Traîtrise',description:''},
  ]);log(r,'fatk')

  r=await ins('f\u0161l',[
    {sense:'échouer',concept:'Échec/Faiblesse',description:"État de celui qui n'atteint pas son but. L'échec résulte de la faiblesse qui empêche d'aboutir."},
    {sense:'faiblir',concept:'Échec/Faiblesse',description:''},
  ]);log(r,'f\u0161l')

  console.log('\n=== Batch 206 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
