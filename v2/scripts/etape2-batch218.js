const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1766, total = 2321

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

  r=await ins('ghll',[
    {sense:'trahir (butin)',concept:'Trahison/Détournement',description:"Acte de prendre secrètement une part du butin commun avant le partage. La trahison dans le butin sort du traître et lèse la communauté — c'est directionnel et clandestin. Le ghulul est le vol déguisé de ce qui appartient à tous."},
    {sense:'détourner',concept:'Trahison/Détournement',description:''},
    {sense:'rancœur',concept:'Ressentiment',description:"État intérieur de haine cachée qui couve dans le cœur. La rancœur reste dans celui qui la porte — permanente et corrosive."},
  ]);log(r,'ghll')

  r=await ins('tghy',[
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de dépasser les limites. La transgression franchit la frontière du permis — directionnelle et peut devenir permanente chez le tyran."},
    {sense:'tyranniser',concept:'Transgression/Excès',description:''},
  ]);log(r,'tghy')

  r=await ins('tfa',[
    {sense:'éteindre',concept:'Extinction/Suppression',description:"Acte de faire cesser le feu ou la lumière. L'extinction est directionnelle — elle agit sur la source de lumière pour la supprimer. Éteindre la lumière de Dieu c'est tenter de supprimer la vérité, mais elle résiste."},
    {sense:'supprimer',concept:'Extinction/Suppression',description:''},
  ]);log(r,'tfa')

  r=await ins('dyy',[
    {sense:'prix du sang',concept:'Compensation/Rançon',description:"Somme versée pour compenser la mort d'une personne. La diya est directionnelle du meurtrier vers la famille de la victime — c'est une réparation permanente qui remplace la vengeance."},
    {sense:'compensation',concept:'Compensation/Rançon',description:''},
  ]);log(r,'dyy')

  r=await ins('rswl',[
    {sense:'messager',concept:'Message/Mission',description:"Celui qui est envoyé pour transmettre un message d'un émetteur à un destinataire. Le rasul est directionnel — il part de Dieu et va vers les gens. Le messager est permanent dans sa mission tant qu'il n'a pas achevé sa transmission."},
    {sense:'envoyé',concept:'Message/Mission',description:''},
    {sense:'apôtre',concept:'Message/Mission',description:''},
  ]);log(r,'rswl')

  r=await ins('qsd',[
    {sense:'viser',concept:'Intention/Direction',description:"Acte de se diriger vers un but précis avec détermination. Le qasd est directionnel — il part de celui qui vise et pointe vers l'objectif. C'est un mouvement mesuré et droit, sans excès."},
    {sense:'se diriger vers',concept:'Intention/Direction',description:''},
    {sense:'être modéré',concept:'Intention/Direction',description:''},
  ]);log(r,'qsd')

  r=await ins('ass',[
    {sense:'fonder',concept:'Fondation/Base',description:"Acte de poser les premières pierres sur lesquelles tout le reste repose. La fondation est directionnelle vers le bas — elle ancre dans le sol ce qui va s'élever. Le asas est permanent — il est ce qui ne bouge pas sous le bâtiment."},
    {sense:'base',concept:'Fondation/Base',description:''},
    {sense:'fondement',concept:'Fondation/Base',description:''},
  ]);log(r,'ass')

  r=await ins('lst',[
    {sense:'ne pas être',concept:'Négation existentielle',description:"Particule qui nie l'existence ou l'attribution d'une qualité. Le laysa est une négation permanente de l'être — il affirme que la chose n'est pas ce qu'on prétend."},
    {sense:'ne pas',concept:'Négation existentielle',description:''},
  ]);log(r,'lst')

  r=await ins('ghnm',[
    {sense:'butin',concept:'Butin/Capture',description:"Ce qui est pris à l'ennemi. Le butin est un transfert directionnel du vaincu vers le vainqueur."},
    {sense:'mouton',concept:'Bétail',description:"Animal domestique dont on tire la laine et la viande. Le mouton est permanent dans son utilité."},
  ]);log(r,'ghnm')

  r=await ins('afk',[
    {sense:'mentir',concept:'Mensonge/Détournement',description:"Acte de détourner la vérité et de la renverser. Le ifk est le mensonge qui retourne la réalité — il fait passer le vrai pour faux et le faux pour vrai. C'est directionnel et destructeur de la confiance."},
    {sense:'calomnier',concept:'Mensonge/Détournement',description:''},
    {sense:'détourner',concept:'Mensonge/Détournement',description:''},
  ]);log(r,'afk')

  console.log('\n=== Batch 218 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
