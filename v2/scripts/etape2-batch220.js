const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1786, total = 2321

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

  r=await ins('dhalik',[
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom qui désigne ce qui est éloigné. Pointe vers le lointain."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'dhalik')

  r=await ins('wqe',[
    {sense:'tomber',concept:'Chute/Occurrence',description:"Acte de se retrouver dans une situation. La chute est directionnelle vers le bas — ce qui tombe arrive sans l'avoir voulu."},
    {sense:'se produire',concept:'Chute/Occurrence',description:''},
  ]);log(r,'wqe')

  r=await ins('mysr',[
    {sense:'jeu de hasard',concept:'Jeu de hasard/Risque',description:"Activité où le gain et la perte dépendent du sort et non de l'effort. Le maysir est un échange injuste — l'un gagne ce que l'autre perd sans mérite. C'est un risque permanent où la justice est absente."},
    {sense:'pari',concept:'Jeu de hasard/Risque',description:''},
  ]);log(r,'mysr')

  r=await ins('ayha',[
    {sense:'ô (vocatif emphatique)',concept:'Appel/Interpellation',description:"Particule d'interpellation forte. L'appel est directionnel et insistant."},
    {sense:'lequel',concept:'Interrogation',description:"Pronom interrogatif qui demande d'identifier parmi plusieurs."},
  ]);log(r,'ayha')

  r=await ins('rmh',[
    {sense:'lance',concept:'Arme/Combat',description:"Arme longue et pointue utilisée au combat. La lance est directionnelle — elle sort de la main du combattant et vise l'ennemi. C'est l'arme de la distance, qui atteint avant que l'épée ne puisse toucher."},
    {sense:'transpercer',concept:'Arme/Combat',description:''},
  ]);log(r,'rmh')

  r=await ins('ghb',[
    {sense:'être absent',concept:'Absence/Invisible',description:"État de ce qui n'est pas présent et ne peut être perçu. L'absence est permanente tant que la chose n'apparaît pas — le ghayb est l'invisible, ce qui est au-delà des sens. Croire au ghayb c'est croire sans voir."},
    {sense:'invisible (ghayb)',concept:'Absence/Invisible',description:''},
    {sense:'disparaître',concept:'Absence/Invisible',description:''},
  ]);log(r,'ghb')

  r=await ins('lhf',[
    {sense:'se lamenter',concept:'Lamentation/Regret',description:"Acte d'exprimer sa tristesse et son regret de façon démonstrative. La lamentation est un cri intérieur qui cherche à sortir — elle reste dans celui qui la porte mais cherche à être entendue."},
    {sense:'regretter profondément',concept:'Lamentation/Regret',description:''},
  ]);log(r,'lhf')

  r=await ins('dhk',[
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom démonstratif lointain. Pointe vers ce qui est éloigné."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'dhk')

  r=await ins('ntq',[
    {sense:'se venger',concept:'Vengeance/Châtiment',description:"Acte de rendre le mal pour le mal. La vengeance est directionnelle et rétributive."},
    {sense:'punir',concept:'Vengeance/Châtiment',description:''},
  ]);log(r,'ntq')

  r=await ins('\u1E0Flw',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État d'abaissement et de soumission. Permanent comme disposition."},
    {sense:'être docile',concept:'Humilité/Soumission',description:''},
  ]);log(r,'\u1E0Flw')

  console.log('\n=== Batch 220 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
