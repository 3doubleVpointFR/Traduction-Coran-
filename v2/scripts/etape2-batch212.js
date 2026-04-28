const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1705, total = 2321

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

  r=await ins('nsh z',[
    {sense:'se rebeller (conjugal)',concept:'Élévation/Rébellion',description:"Acte de se dresser contre l'autre dans le couple. Le nushuz est la rébellion conjugale — l'élévation de l'un contre l'autre."},
    {sense:'désobéir',concept:'Élévation/Rébellion',description:''},
  ]);log(r,'nsh z')

  r=await ins('shhh',[
    {sense:'être avare',concept:'Avarice/Rétention',description:"État de celui qui retient jalousement ce qu'il a. L'avarice est un état intérieur permanent — le shuhh est la rétention excessive qui empêche la générosité et crée le conflit."},
    {sense:'être cupide',concept:'Avarice/Rétention',description:''},
  ]);log(r,'shhh')

  r=await ins('khb r',[
    {sense:'informer',concept:'Information/Connaissance',description:"Acte de transmettre une nouvelle ou un savoir. L'information sort de celui qui sait et atteint celui qui ne sait pas — c'est directionnel. Le khabir est celui qui connaît les profondeurs des choses."},
    {sense:'connaître en profondeur',concept:'Information/Connaissance',description:''},
    {sense:'nouvelle',concept:'Information/Connaissance',description:''},
  ]);log(r,'khb r')

  r=await ins('shaa',[
    {sense:'vouloir',concept:'Volonté/Décision',description:"Acte de décider librement ce qui doit être. La volonté est souveraine — elle choisit sans contrainte."},
    {sense:'décider',concept:'Volonté/Décision',description:''},
  ]);log(r,'shaa')

  r=await ins('lhh',[
    {sense:'à lui (pour lui)',concept:'Attribution/Possession',description:"Préposition et pronom indiquant l'appartenance. L'attribution est directionnelle vers celui à qui la chose est destinée."},
    {sense:'pour lui',concept:'Attribution/Possession',description:''},
  ]);log(r,'lhh')

  r=await ins('khbr',[
    {sense:'informer',concept:'Information/Connaissance',description:"Acte de transmettre une connaissance. Directionnel de celui qui sait vers celui qui ne sait pas."},
    {sense:'connaître en profondeur',concept:'Information/Connaissance',description:''},
  ]);log(r,'khbr')

  r=await ins('e\u1E0Fb',[
    {sense:'tourmenter',concept:'Tourment/Châtiment',description:"Acte d'infliger une souffrance intense et prolongée. Le tourment sort du tortionnaire et atteint celui qui est tourmenté — c'est directionnel et peut être permanent. Le adhab est la souffrance qui ne s'arrête pas."},
    {sense:'châtiment',concept:'Tourment/Châtiment',description:''},
    {sense:'être doux (eau)',concept:'Douceur',description:"État de l'eau pure et agréable au goût. L'eau douce est permanente dans sa pureté — elle désaltère et nourrit."},
  ]);log(r,'e\u1E0Fb')

  r=await ins('fala',[
    {sense:'est-ce que ne pas',concept:'Interrogation rhétorique',description:"Particule qui pose une question dont la réponse est évidente. L'interrogation rhétorique est un reproche déguisé — elle ne cherche pas une réponse mais un réveil."},
    {sense:'alors ne pas',concept:'Interrogation rhétorique',description:''},
  ]);log(r,'fala')

  r=await ins('khwd',[
    {sense:'patauger',concept:'Immersion/Engagement irréfléchi',description:"Acte de s'enfoncer dans quelque chose sans précaution. Le khawdh est l'entrée imprudente dans un sujet ou un lieu dangereux — c'est directionnel vers le bas et sans contrôle. Patauger dans le faux c'est s'y enfoncer."},
    {sense:'s\'engager dans le faux',concept:'Immersion/Engagement irréfléchi',description:''},
  ]);log(r,'khwd')

  r=await ins('innakum',[
    {sense:'certes vous',concept:'Certitude/Assertion',description:"Particule d'emphase suivie du pronom de la deuxième personne pluriel. L'assertion vise directement le groupe interpellé avec force de certitude."},
  ]);log(r,'innakum')

  console.log('\n=== Batch 212 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
