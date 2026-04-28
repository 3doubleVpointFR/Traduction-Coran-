const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1298, total = 2321

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

  // 1. bst (بصط → بسط) — étendre, déployer, ouvrir la main
  r=await ins('bst',[
    {sense:'étendre',concept:'Extension/Déploiement',description:"Acte extérieur de déplier ce qui était replié, d'ouvrir ce qui était fermé. L'extension est directionnelle vers l'extérieur — elle crée de l'espace et de la largeur. Le bast est l'opposé du qabd (contraction), c'est l'ouverture et la générosité."},
    {sense:'déployer',concept:'Extension/Déploiement',description:''},
    {sense:'ouvrir la main',concept:'Extension/Déploiement',description:''},
    {sense:'être spacieux',concept:'Extension/Déploiement',description:''},
    {sense:'réjouir (bast al-nafs)',concept:'Divers',description:'Étendre l\'âme — la joie comme expansion intérieure.'},
  ]);log(r,'bst')

  // 2. tbwt (تبوت) — arche, coffre, tabernacle
  r=await ins('tbwt',[
    {sense:'arche (tabut)',concept:'Contenant sacré',description:"Coffre qui contient des objets sacrés et symbolise la présence divine parmi le peuple. L'arche est un contenant permanent qui garde et protège ce qui est sacré — elle est le lieu de la préservation."},
    {sense:'coffre',concept:'Contenant sacré',description:''},
  ]);log(r,'tbwt')

  // 3. bqy (بقي) — rester, durer, subsister
  r=await ins('bqy',[
    {sense:'rester',concept:'Permanence/Subsistance',description:"État de ce qui ne part pas et ne disparaît pas. La permanence est l'état fondamental de ce qui dure — ce qui reste est ce qui survit au passage du temps. Le baqi est le permanent par excellence, celui qui ne finit pas."},
    {sense:'durer',concept:'Permanence/Subsistance',description:''},
    {sense:'subsister',concept:'Permanence/Subsistance',description:''},
    {sense:'conserver',concept:'Permanence/Subsistance',description:''},
  ]);log(r,'bqy')

  // 4. harwn (هرون) — Aaron (nom propre)
  r=await ins('harwn',[
    {sense:'Aaron (nom propre)',concept:'Nom propre',description:"Nom du prophète frère de Moïse. C'est un nom propre permanent et inchangeable qui désigne une personne historique précise — Aaron est celui qui assistait Moïse dans sa mission."},
  ]);log(r,'harwn')

  // 5. hml (حمل) — porter, transporter, supporter, grossesse
  r=await ins('hml',[
    {sense:'porter',concept:'Portage/Transport',description:"Acte extérieur de soulever et de maintenir un poids sur soi. Le portage sort du porteur et s'exerce sur ce qui est porté — c'est directionnel et demande de la force. Porter c'est prendre la charge de l'autre sur ses propres épaules."},
    {sense:'transporter',concept:'Portage/Transport',description:''},
    {sense:'supporter un fardeau',concept:'Portage/Transport',description:''},
    {sense:'être enceinte',concept:'Grossesse/Gestation',description:"État de la femme qui porte un enfant en elle. La grossesse est un portage intérieur et permanent pendant neuf mois — la mère porte en elle la vie future."},
    {sense:'charger',concept:'Divers',description:'Acte de mettre un poids sur quelqu\'un ou quelque chose.'},
  ]);log(r,'hml')

  // 6. km (كم) — combien, quantité
  r=await ins('km',[
    {sense:'combien',concept:'Interrogation/Quantité',description:"Particule qui questionne sur le nombre ou la quantité. Le combien cherche la mesure — c'est une interrogation rationnelle qui demande une réponse chiffrée."},
    {sense:'que de (exclamatif)',concept:'Interrogation/Quantité',description:''},
  ]);log(r,'km')

  // 7. twl (طول) — être long, longueur, grâce
  r=await ins('twl',[
    {sense:'être long',concept:'Longueur/Extension',description:"État de ce qui s'étend dans l'espace ou le temps au-delà de la mesure ordinaire. La longueur est permanente dans ce qui est long — elle est une extension qui dépasse la norme. Ce qui est long prend du temps et de l'espace."},
    {sense:'longueur',concept:'Longueur/Extension',description:''},
    {sense:'grâce divine (tawl)',concept:'Faveur/Grâce',description:"Don gratuit de Dieu qui dépasse ce que l'on mérite. La grâce est directionnelle — elle sort de Dieu et atteint celui qui la reçoit. C'est un surplus de bonté qui s'étend au-delà du droit."},
    {sense:'pouvoir',concept:'Faveur/Grâce',description:''},
  ]);log(r,'twl')

  // 8. hw (هو) — pronom il, lui
  r=await ins('hw',[
    {sense:'il',concept:'Pronom/Troisième personne',description:"Pronom qui désigne l'absent, celui dont on parle sans qu'il soit présent. Le pronom de troisième personne pointe vers le hors-champ — c'est directionnel vers l'absent. Il est permanent dans sa fonction de désignation."},
    {sense:'lui',concept:'Pronom/Troisième personne',description:''},
    {sense:'c\'est',concept:'Pronom/Troisième personne',description:''},
  ]);log(r,'hw')

  // 9. sew (سعو → سعي) — s'efforcer, marcher rapidement, chercher
  r=await ins('sew',[
    {sense:'s\'efforcer',concept:'Effort/Quête active',description:"Acte de se mettre en mouvement avec détermination pour atteindre un but. L'effort actif sort de celui qui s'efforce et se dirige vers l'objectif — c'est directionnel et permanent tant que le but n'est pas atteint. Le saey est la marche déterminée vers ce qu'on veut."},
    {sense:'marcher rapidement',concept:'Effort/Quête active',description:''},
    {sense:'chercher activement',concept:'Effort/Quête active',description:''},
    {sense:'courir entre Safa et Marwa',concept:'Effort/Quête active',description:''},
  ]);log(r,'sew')

  // 10. jsm (جسم) — corps, être corpulent
  r=await ins('jsm',[
    {sense:'corps',concept:'Corps/Matérialité',description:"La forme physique et matérielle de l'être vivant. Le corps est permanent dans sa présence — il est ce qui est visible et tangible de la personne. Le corps est le véhicule de l'âme dans le monde matériel."},
    {sense:'être corpulent',concept:'Corps/Matérialité',description:''},
    {sense:'stature',concept:'Corps/Matérialité',description:''},
  ]);log(r,'jsm')

  console.log('\n=== Batch 171 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
