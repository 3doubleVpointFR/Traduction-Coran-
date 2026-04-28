const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1628, total = 2321

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

  r=await ins('fiha',[
    {sense:'en elle',concept:'Contenu/Intériorité',description:"Préposition et pronom féminin indiquant que quelque chose est à l'intérieur. L'intériorité est permanente — ce qui est dedans fait partie de l'ensemble."},
    {sense:'dans cela',concept:'Contenu/Intériorité',description:''},
  ]);log(r,'fiha')

  r=await ins('khz',[
    {sense:'être humilié',concept:'Humiliation/Honte',description:"État de celui qui est rabaissé et perd sa dignité. L'humiliation vient de l'extérieur et atteint celui qui la subit — c'est directionnel et dégradant."},
    {sense:'honte',concept:'Humiliation/Honte',description:''},
    {sense:'châtiment humiliant',concept:'Humiliation/Honte',description:''},
  ]);log(r,'khz')

  r=await ins('jnb',[
    {sense:'côté',concept:'Côté/Éloignement',description:"La partie latérale d'une chose ou d'un être. Le côté est permanent dans sa position — il est ce qui flanque le centre. Au figuré, le janb est ce qu'on néglige en se détournant."},
    {sense:'flanc',concept:'Côté/Éloignement',description:''},
    {sense:'éviter',concept:'Côté/Éloignement',description:''},
    {sense:'s\'éloigner',concept:'Côté/Éloignement',description:''},
    {sense:'être étranger (junub)',concept:'Divers',description:'Celui qui est du côté lointain — l\'étranger.'},
  ]);log(r,'jnb')

  r=await ins('h-dh-a',[
    {sense:'celui-ci',concept:'Démonstratif/Proximité',description:"Pronom qui désigne un masculin proche. Le démonstratif de proximité pointe vers ce qui est ici — directionnel vers le proche."},
    {sense:'ceci',concept:'Démonstratif/Proximité',description:''},
  ]);log(r,'h-dh-a')

  r=await ins('anml',[
    {sense:'bout du doigt',concept:'Extrémité/Doigt',description:"La pointe du doigt, la partie la plus fine et la plus sensible de la main. Le bout du doigt est l'extrémité permanente — il est le point de contact le plus précis avec le monde."},
    {sense:'ongle',concept:'Extrémité/Doigt',description:''},
  ]);log(r,'anml')

  r=await ins('ghy',[
    {sense:'rage',concept:'Rage/Colère intense',description:"État intérieur de colère extrême qui bouillonne. La rage est un feu intérieur permanent chez celui qui ne la maîtrise pas."},
    {sense:'colère intense',concept:'Rage/Colère intense',description:''},
  ]);log(r,'ghy')

  r=await ins('kbl',[
    {sense:'corrompre l\'esprit',concept:'Corruption/Trouble',description:"Acte de dégrader ce qui était sain dans l'esprit. La corruption trouble la capacité de jugement — elle empêche de voir clair."},
    {sense:'troubler',concept:'Corruption/Trouble',description:''},
    {sense:'perte',concept:'Corruption/Trouble',description:''},
  ]);log(r,'kbl')

  r=await ins('aw\u1E0F',[
    {sense:'chercher refuge',concept:'Refuge/Protection divine',description:"Acte de se mettre sous la protection de Dieu contre un danger. Le refuge est directionnel vers Dieu — celui qui cherche refuge reconnaît sa faiblesse et la force de celui qui protège. Aoudhu billah est le cri de celui qui demande la protection divine."},
    {sense:'se réfugier auprès de Dieu',concept:'Refuge/Protection divine',description:''},
  ]);log(r,'aw\u1E0F')

  r=await ins('rbt',[
    {sense:'lier',concept:'Lien/Attachement',description:"Acte de fixer solidement des éléments ensemble. Le lien crée une connexion permanente — il empêche la séparation. Lier les cœurs c'est les unir dans la fermeté et le courage."},
    {sense:'attacher',concept:'Lien/Attachement',description:''},
    {sense:'affermir (le cœur)',concept:'Lien/Attachement',description:''},
    {sense:'être patient',concept:'Divers',description:'La patience comme fait de rester lié à son poste.'},
  ]);log(r,'rbt')

  r=await ins('khld',[
    {sense:'demeurer éternellement',concept:'Éternité/Permanence',description:"État de ce qui ne finit jamais. L'éternité est l'absence totale de fin — c'est la permanence absolue."},
    {sense:'rester pour toujours',concept:'Éternité/Permanence',description:''},
    {sense:'pencher vers',concept:'Inclination',description:"Mouvement intérieur de l'âme vers ce qui attire — directionnel et peut devenir permanent."},
  ]);log(r,'khld')

  console.log('\n=== Batch 204 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
