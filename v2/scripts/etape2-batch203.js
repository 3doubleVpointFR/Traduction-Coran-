const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1618, total = 2321

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

  r=await ins('myz',[
    {sense:'distinguer',concept:'Distinction/Séparation',description:"Acte de séparer les choses selon leur nature pour identifier chacune. La distinction est un acte rationnel qui met de l'ordre — elle sépare le bon du mauvais, le pur de l'impur. C'est directionnel et crée des catégories permanentes."},
    {sense:'séparer',concept:'Distinction/Séparation',description:''},
    {sense:'trier',concept:'Distinction/Séparation',description:''},
  ]);log(r,'myz')

  r=await ins('tle',[
    {sense:'se lever (soleil)',concept:'Lever/Apparition',description:"Mouvement de ce qui monte au-dessus de l'horizon pour devenir visible. Le lever est directionnel vers le haut — il rend visible ce qui était caché. Le lever du soleil éclaire le monde, le lever d'une étoile annonce un événement."},
    {sense:'apparaître',concept:'Lever/Apparition',description:''},
    {sense:'informer',concept:'Lever/Apparition',description:''},
    {sense:'bourgeon',concept:'Divers',description:'Ce qui sort de la branche — le début de la vie végétale.'},
  ]);log(r,'tle')

  r=await ins('jby',[
    {sense:'front',concept:'Front/Soumission',description:"La partie haute du visage qui touche le sol lors de la prosternation. Le front est permanent dans sa position — il est le signe de la dignité quand il est levé et de la soumission quand il touche terre."},
    {sense:'collecter (impôt)',concept:'Collection/Prélèvement',description:"Acte de rassembler les taxes dues. La collecte est directionnelle — elle part du collecteur et prélève de chaque contribuable. C'est un acte de rassemblement des parts."},
    {sense:'lâche',concept:'Divers',description:'Celui dont le front est marqué par la peur — sens de faiblesse.'},
  ]);log(r,'jby')

  r=await ins('krj',[
    {sense:'sortir',concept:'Sortie/Émergence',description:"Acte de passer de l'intérieur vers l'extérieur. La sortie est directionnelle du dedans vers le dehors — elle est le contraire de l'entrée. Sortir c'est quitter un état ou un lieu pour un autre."},
    {sense:'faire sortir',concept:'Sortie/Émergence',description:''},
    {sense:'expulser',concept:'Sortie/Émergence',description:''},
    {sense:'dépense (kharaj)',concept:'Divers',description:'Ce qui sort du patrimoine — impôt ou tribut.'},
  ]);log(r,'krj')

  r=await ins('zbr',[
    {sense:'écriture',concept:'Écriture/Livre',description:"L'acte de fixer la parole sur un support permanent. L'écriture est directionnelle — elle sort de l'écrivain et atteint le support. Le zabur (psaumes) est le livre écrit, la parole divine fixée."},
    {sense:'psaumes (zabur)',concept:'Écriture/Livre',description:''},
    {sense:'fer',concept:'Divers',description:'Morceaux de fer — sens concret.'},
  ]);log(r,'zbr')

  r=await ins('dwq',[
    {sense:'goûter',concept:'Expérience/Goût',description:"Acte de percevoir la saveur par contact direct. Le goût est intérieur — c'est l'expérience intime de ce qui touche. Goûter c'est expérimenter par soi-même."},
    {sense:'expérimenter',concept:'Expérience/Goût',description:''},
    {sense:'savourer',concept:'Expérience/Goût',description:''},
  ]);log(r,'dwq')

  r=await ins('ghrw',[
    {sense:'colle',concept:'Adhérence/Attachement',description:"Substance qui fait tenir deux choses ensemble. La colle crée un lien permanent entre les surfaces — elle empêche la séparation. Au figuré, être collé c'est être attaché de façon indéfectible."},
    {sense:'être attaché',concept:'Adhérence/Attachement',description:''},
  ]);log(r,'ghrw')

  r=await ins('lam',[
    {sense:'pour',concept:'But/Finalité',description:"Préposition qui indique le but ou la destination d'une action. Le lam ouvre la porte de la finalité — il explique pourquoi l'acte est fait. C'est un lien rationnel entre l'action et son objectif."},
    {sense:'afin de',concept:'But/Finalité',description:''},
    {sense:'à (destinataire)',concept:'But/Finalité',description:''},
  ]);log(r,'lam')

  r=await ins('nbdh',[
    {sense:'jeter',concept:'Rejet/Abandon',description:"Acte de lancer quelque chose loin de soi avec mépris ou décision. Le rejet sort de celui qui jette et éloigne ce qui est jeté — c'est directionnel et ponctuel. Jeter c'est se débarrasser de ce qu'on ne veut plus."},
    {sense:'rejeter',concept:'Rejet/Abandon',description:''},
    {sense:'rompre un pacte',concept:'Rejet/Abandon',description:''},
  ]);log(r,'nbdh')

  r=await ins("ra'",[
    {sense:'voir',concept:'Vision/Perception',description:"Acte de percevoir par les yeux ou l'esprit. La vision est directionnelle de l'extérieur vers l'intérieur — voir c'est saisir la réalité."},
    {sense:'montrer',concept:'Ostentation',description:"Acte de faire voir aux autres pour obtenir leur admiration. L'ostentation est directionnelle vers les spectateurs — le ria est l'acte de celui qui montre sa piété pour être vu des gens."},
    {sense:'ostentation (riyaa)',concept:'Ostentation',description:''},
  ]);log(r,"ra'")

  console.log('\n=== Batch 203 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
