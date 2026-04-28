const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1955, total = 2321

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

  r=await ins('eyl',[{sense:'famille',concept:'Famille/Dépendants',description:"Les personnes dont on a la charge. La famille est un lien permanent de responsabilité — les dépendants comptent sur celui qui les entretient."},{sense:'dépendants',concept:'Famille/Dépendants',description:''}]);log(r,'eyl')

  r=await ins('yd',[{sense:'main',concept:'Main/Puissance',description:"Organe de l'action. La main symbolise la puissance et la capacité d'agir."},{sense:'puissance',concept:'Main/Puissance',description:''}]);log(r,'yd')

  r=await ins('kwy',[{sense:'brûler',concept:'Brûlure/Cautérisation',description:"Acte d'appliquer le feu. La brûlure est directionnelle et laisse une marque permanente."},{sense:'cautériser',concept:'Brûlure/Cautérisation',description:''}]);log(r,'kwy')

  r=await ins('jbh',[{sense:'front',concept:'Front/Visage',description:"La partie haute du visage. Le front est ce qui touche le sol dans la prosternation — signe de soumission."},{sense:'visage',concept:'Front/Visage',description:''}]);log(r,'jbh')

  r=await ins('knz',[{sense:'thésauriser',concept:'Accumulation/Thésaurisation',description:"Acte d'accumuler des richesses sans les dépenser. La thésaurisation est un état permanent de rétention — le kanz est le trésor enfoui qui ne profite à personne."},{sense:'trésor',concept:'Accumulation/Thésaurisation',description:''},{sense:'enterrer (richesse)',concept:'Accumulation/Thésaurisation',description:''}]);log(r,'knz')

  r=await ins('bn',[{sense:'fils',concept:'Filiation/Descendance',description:"Celui qui est engendré. Le fils prolonge la lignée de façon permanente."},{sense:'enfant',concept:'Filiation/Descendance',description:''}]);log(r,'bn')

  r=await ins("shy'",[{sense:'chose',concept:'Chose/Entité',description:"Tout ce qui existe ou peut être conçu par l'esprit. La chose est l'unité fondamentale de l'existence — le shay est tout ce qui a un être, du plus grand au plus petit."},{sense:'quelque chose',concept:'Chose/Entité',description:''}]);log(r,"shy'")

  r=await ins('wta',[{sense:'fouler',concept:'Marche/Piétinement',description:"Acte de poser le pied sur quelque chose. Le piétinement est directionnel vers le bas — il marque le sol de son passage."},{sense:'marcher sur',concept:'Marche/Piétinement',description:''}]);log(r,'wta')

  r=await ins('huma',[{sense:'eux deux',concept:'Pronom/Duel',description:"Pronom qui désigne exactement deux personnes. Le duel crée une paire permanente."},{sense:'elles deux',concept:'Pronom/Duel',description:''}]);log(r,'huma')

  r=await ins('zukhrf',[{sense:'ornement doré',concept:'Ornement/Faux brillant',description:"Décoration trompeuse qui cache la réalité. Le zukhruf est le faux éclat — permanent dans son apparence mais illusoire dans sa valeur."},{sense:'dorure',concept:'Ornement/Faux brillant',description:''}]);log(r,'zukhrf')

  console.log('\n=== Batch 237 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
