const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1905, total = 2321

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

  r=await ins('swq',[{sense:'conduire',concept:'Conduite/Direction',description:"Acte de pousser par derrière pour faire avancer. La conduite est directionnelle — elle part du conducteur et pousse ce qui est conduit vers l'avant."},{sense:'pousser',concept:'Conduite/Direction',description:''},{sense:'marché (suq)',concept:'Divers',description:'Le lieu où les gens se poussent et échangent.'}]);log(r,'swq')

  r=await ins('ghwth',[{sense:'appeler au secours',concept:'Secours/Aide',description:"Cri lancé par celui qui est en détresse. L'appel au secours est directionnel — il sort du désespéré vers quiconque peut l'entendre."},{sense:'secourir',concept:'Secours/Aide',description:''}]);log(r,'ghwth')

  r=await ins('rdf',[{sense:'suivre de près',concept:'Succession/Renfort',description:"Acte de venir juste derrière pour renforcer. Le renfort est directionnel — il arrive de l'arrière pour soutenir ceux de devant."},{sense:'renforcer',concept:'Succession/Renfort',description:''}]);log(r,'rdf')

  r=await ins('shwk',[{sense:'épine',concept:'Arme/Force',description:"Pointe acérée qui blesse celui qui la touche. L'épine symbolise la force militaire — la shawka est la puissance armée d'un groupe."},{sense:'force militaire',concept:'Arme/Force',description:''}]);log(r,'shwk')

  r=await ins('zhf',[{sense:'ramper vers l\'ennemi',concept:'Avancement/Confrontation',description:"Mouvement lent et déterminé d'une armée qui avance vers l'adversaire. Le zahf est l'avancement massif — toute l'armée avance comme un seul corps."},{sense:'avancer en masse',concept:'Avancement/Confrontation',description:''}]);log(r,'zhf')

  r=await ins('enq',[{sense:'cou',concept:'Cou/Soumission',description:"La partie du corps qui relie la tête au tronc. Le cou symbolise la soumission — frapper les cous c'est vaincre définitivement. Le cou est aussi ce qui porte les chaînes."},{sense:'frapper les cous',concept:'Cou/Soumission',description:''}]);log(r,'enq')

  r=await ins('bnn',[{sense:'bout du doigt',concept:'Extrémité/Doigt',description:"La pointe du doigt — le point de contact le plus précis avec le monde."},{sense:'doigt',concept:'Extrémité/Doigt',description:''}]);log(r,'bnn')

  r=await ins('hyz',[{sense:'se retirer',concept:'Retrait/Fuite',description:"Acte de quitter le champ de bataille ou une situation. Le retrait est directionnel — il éloigne du danger. Se retirer c'est reculer face à ce qui menace."},{sense:'fuir',concept:'Retrait/Fuite',description:''}]);log(r,'hyz')

  r=await ins('khass',[{sense:'spécifique',concept:'Spécificité/Exclusivité',description:"État de ce qui est propre à un seul et ne se partage pas. La spécificité distingue et isole du commun."},{sense:'réservé',concept:'Spécificité/Exclusivité',description:''}]);log(r,'khass')

  r=await ins('kwa',[{sense:'brûler',concept:'Brûlure/Cautérisation',description:"Acte d'appliquer le feu sur la peau pour marquer ou soigner. La brûlure est directionnelle et douloureuse — elle laisse une marque permanente."},{sense:'cautériser',concept:'Brûlure/Cautérisation',description:''}]);log(r,'kwa')

  console.log('\n=== Batch 232 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
