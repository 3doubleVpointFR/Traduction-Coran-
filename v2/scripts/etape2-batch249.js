const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2075, total = 2321

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

  r=await ins('wea',[{sense:'récipient',concept:'Contenant/Récipient',description:"Objet qui contient et garde ce qu'on y met. Le récipient est permanent dans sa fonction de contenance."},{sense:'contenir',concept:'Contenant/Récipient',description:''}]);log(r,'wea')

  r=await ins('kdn',[{sense:'être sombre',concept:'Obscurité/Tristesse',description:"État de ce qui est couvert d'ombre et de tristesse. La sombresse est permanente dans ce qui n'a pas de lumière."},{sense:'être triste',concept:'Obscurité/Tristesse',description:''}]);log(r,'kdn')

  r=await ins('ysas',[{sense:'désespérer',concept:'Désespoir/Perte d\'espoir',description:"État de celui qui a perdu toute attente de bien. Le désespoir coupe l'horizon — permanent tant que l'espoir ne revient pas."},{sense:'perdre espoir',concept:'Désespoir/Perte d\'espoir',description:''}]);log(r,'ysas')

  r=await ins('fta',[{sense:'cesser',concept:'Cessation/Arrêt',description:"Acte de mettre fin à une action en cours. La cessation crée un état permanent d'inaction."},{sense:'ne pas cesser',concept:'Cessation/Arrêt',description:''}]);log(r,'fta')

  r=await ins('shkw',[{sense:'se plaindre',concept:'Plainte/Lamentation',description:"Acte d'exprimer sa douleur ou son mécontentement. La plainte sort de celui qui souffre — directionnelle vers celui qui écoute."},{sense:'lamentation',concept:'Plainte/Lamentation',description:''}]);log(r,'shkw')

  r=await ins('zjw',[{sense:'réprimander',concept:'Réprimande/Avertissement',description:"Acte d'adresser un blâme ferme pour corriger. La réprimande sort du correcteur et atteint le fautif — directionnelle."},{sense:'pousser',concept:'Réprimande/Avertissement',description:''}]);log(r,'zjw')

  r=await ins("kha'",[{sense:'se tromper',concept:'Erreur/Faute',description:"Acte de commettre une faute. L'erreur est ponctuelle mais ses conséquences peuvent durer."},{sense:'pécher',concept:'Erreur/Faute',description:''}]);log(r,"kha'")

  r=await ins('gwt',[{sense:'secourir',concept:'Secours/Aide',description:"Acte de venir en aide. Directionnel du secoureur vers le secouru."},{sense:'appeler au secours',concept:'Secours/Aide',description:''}]);log(r,'gwt')

  r=await ins('thrb',[{sense:'blâmer',concept:'Blâme/Reproche',description:"Acte d'adresser un reproche. Directionnel du blâmeur vers le blâmé."},{sense:'reprocher',concept:'Blâme/Reproche',description:''}]);log(r,'thrb')

  r=await ins('fnd',[{sense:'être sénile',concept:'Sénilité/Affaiblissement',description:"État de celui dont l'esprit s'affaiblit par la vieillesse. La sénilité est permanente — l'esprit ne revient pas à sa force."},{sense:'radoter',concept:'Sénilité/Affaiblissement',description:''}]);log(r,'fnd')

  console.log('\n=== Batch 249 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
