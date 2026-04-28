const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1826, total = 2321

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

  r=await ins('myz n',[
    {sense:'balance',concept:'Balance/Pesée',description:"Instrument qui mesure le poids avec exactitude. La balance est le symbole de la justice — elle ne penche d'aucun côté. Le mizan est permanent dans sa fonction de mesure équitable."},
    {sense:'mesure',concept:'Balance/Pesée',description:''},
    {sense:'équilibre',concept:'Balance/Pesée',description:''},
  ]);log(r,'myz n')

  r=await ins('fwh\u0161',[
    {sense:'turpitude',concept:'Indécence/Turpitude',description:"Acte qui dépasse les limites de la décence. La turpitude est un excès permanent dans le mal."},
    {sense:'acte obscène',concept:'Indécence/Turpitude',description:''},
  ]);log(r,'fwh\u0161')

  r=await ins('awlaai',[
    {sense:'ceux-là',concept:'Démonstratif/Distance pluriel',description:"Pronom démonstratif pluriel lointain. Désigne un groupe éloigné."},
  ]);log(r,'awlaai')

  r=await ins('awlk',[
    {sense:'message',concept:'Message/Transmission',description:"Parole transmise d'un émetteur à un destinataire. Le message est directionnel — il traverse la distance."},
    {sense:'envoyer',concept:'Message/Transmission',description:''},
  ]);log(r,'awlk')

  r=await ins("'mn",[
    {sense:'croire',concept:'Foi/Sécurité',description:"Acte intérieur d'adhérer à une vérité avec confiance totale. La foi est un état permanent de sécurité intérieure — celui qui croit est en paix car il fait confiance. L'iman est la sécurité de l'âme qui sait."},
    {sense:'être en sécurité',concept:'Foi/Sécurité',description:''},
    {sense:'confiance',concept:'Foi/Sécurité',description:''},
  ]);log(r,"'mn")

  r=await ins('saal',[
    {sense:'demander',concept:'Demande/Question',description:"Acte de solliciter une réponse ou un bien. La demande sort du demandeur et atteint celui qui est sollicité — directionnelle."},
    {sense:'questionner',concept:'Demande/Question',description:''},
  ]);log(r,'saal')

  r=await ins('yhm',[
    {sense:'errer',concept:'Errance/Confusion',description:"État de celui qui marche sans direction. L'errance est un mouvement permanent sans but — celui qui erre ne sait pas où il va."},
    {sense:'être confus',concept:'Errance/Confusion',description:''},
  ]);log(r,'yhm')

  r=await ins('ey\u0161',[
    {sense:'vivre',concept:'Vie/Subsistance',description:"État d'être vivant et de subvenir à ses besoins. La vie est l'état permanent tant qu'on existe — le aish est le moyen de subsistance qui maintient la vie."},
    {sense:'subsistance',concept:'Vie/Subsistance',description:''},
  ]);log(r,'ey\u0161')

  r=await ins('wzn',[
    {sense:'peser',concept:'Pesée/Mesure',description:"Acte de déterminer le poids de quelque chose avec exactitude. La pesée est un acte rationnel de justice — elle donne la mesure exacte sans tricher."},
    {sense:'balance',concept:'Pesée/Mesure',description:''},
    {sense:'poids',concept:'Pesée/Mesure',description:''},
  ]);log(r,'wzn')

  r=await ins('ainnaka',[
    {sense:'certes toi',concept:'Certitude/Assertion',description:"Particule d'emphase suivie du pronom de la deuxième personne. L'assertion vise directement l'interlocuteur avec force."},
  ]);log(r,'ainnaka')

  console.log('\n=== Batch 224 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
