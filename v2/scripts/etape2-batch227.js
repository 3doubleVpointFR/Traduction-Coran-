const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1855, total = 2321

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

  r=await ins('ghwsh',[
    {sense:'couvrir',concept:'Couverture/Voilement',description:"Acte de recouvrir pour cacher ou protéger. La couverture empêche de voir ce qui est dessous — directionnelle et enveloppante."},
    {sense:'envahir',concept:'Couverture/Voilement',description:''},
  ]);log(r,'ghwsh')

  r=await ins('ala',[
    {sense:'bienfaits',concept:'Bienfait/Grâce',description:"Les dons et les faveurs accordés par Dieu. Les bienfaits sont permanents dans leur présence — ils entourent l'homme de toutes parts. Le ala est le don qui appelle la gratitude."},
    {sense:'grâces',concept:'Bienfait/Grâce',description:''},
  ]);log(r,'ala')

  r=await ins('hjb',[
    {sense:'voiler',concept:'Voile/Séparation',description:"Acte de placer un écran entre deux choses pour empêcher la vision ou l'accès. Le voile est une séparation permanente qui cache ce qui est derrière — directionnel et protecteur."},
    {sense:'écran',concept:'Voile/Séparation',description:''},
    {sense:'séparer',concept:'Voile/Séparation',description:''},
  ]);log(r,'hjb')

  r=await ins('qly',[
    {sense:'peu',concept:'Rareté/Quantité infime',description:"État de ce qui existe en faible quantité. Le peu est permanent dans sa faiblesse — il est l'opposé de l'abondance. Ce qui est peu ne suffit pas."},
    {sense:'être rare',concept:'Rareté/Quantité infime',description:''},
    {sense:'diminuer',concept:'Rareté/Quantité infime',description:''},
  ]);log(r,'qly')

  r=await ins('stt',[
    {sense:'six',concept:'Nombre/Quantité',description:"Le nombre six. Les cieux et la terre ont été créés en six jours — nombre de complétude."},
    {sense:'sixième',concept:'Nombre/Quantité',description:''},
  ]);log(r,'stt')

  r=await ins('tlb',[
    {sense:'demander',concept:'Demande/Recherche',description:"Acte de chercher à obtenir quelque chose. La demande est directionnelle — elle sort du demandeur vers l'objet ou la personne sollicitée."},
    {sense:'chercher',concept:'Demande/Recherche',description:''},
    {sense:'réclamer',concept:'Demande/Recherche',description:''},
  ]);log(r,'tlb')

  r=await ins('hth',[
    {sense:'inciter',concept:'Incitation/Encouragement',description:"Acte de pousser quelqu'un à agir par l'encouragement. L'incitation sort de celui qui pousse et atteint celui qui est poussé — directionnelle et motivante."},
    {sense:'encourager',concept:'Incitation/Encouragement',description:''},
  ]);log(r,'hth')

  r=await ins('nw',[
    {sense:'nous',concept:'Pronom/Première personne',description:"Pronom inclusif qui unit le locuteur à d'autres dans un même groupe."},
  ]);log(r,'nw')

  r=await ins('\u1E2Bsr',[
    {sense:'perdre',concept:'Perte/Diminution',description:"Acte de ne plus avoir ce qu'on avait. La perte est un mouvement négatif — une sortie sans retour."},
    {sense:'être en perte',concept:'Perte/Diminution',description:''},
  ]);log(r,'\u1E2Bsr')

  r=await ins('khb\u1E6F',[
    {sense:'être impur',concept:'Impureté/Vilenie',description:"État de ce qui est corrompu et nuisible. L'impureté est permanente dans ce qui est mauvais."},
    {sense:'être mauvais',concept:'Impureté/Vilenie',description:''},
  ]);log(r,'khb\u1E6F')

  console.log('\n=== Batch 227 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
