const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 499, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // Skip ma' et ns'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])

  // 502. nkf (نكف) — dédaigner
  r = await ins('nkf', [
    {sense:'dédaigner',concept:'Orgueil/Refus',description:"Refuser de faire quelque chose par fierté — dédaigner (istankafa) c'est se croire au-dessus de l'acte demandé. C'est intérieur comme sentiment d'orgueil. Le Messie ne dédaigne pas d'être serviteur de Dieu, ni les anges rapprochés. Celui qui dédaigne l'adoration sera rassemblé vers Dieu."},
    {sense:'refuser par orgueil',concept:'Orgueil/Refus',description:''},
    {sense:'mépriser',concept:'Orgueil/Refus',description:''},
  ])
  log(r,'nkf',{'Orgueil/Refus':"Se croire au-dessus. Le Messie ne dédaigne pas d'être serviteur."})

  // 503. a j l (أجل) — terme, délai
  r = await ins('a j l', [
    {sense:'terme',concept:'Limite/Échéance',description:"Moment fixé où quelque chose doit arriver ou finir — le terme (ajal) est permanent comme limite décrétée. C'est directionnel vers le moment final. Chaque âme goûtera la mort à son terme fixé. Le terme ne peut être ni avancé ni retardé. Quand le terme arrive, nul ne peut le reporter."},
    {sense:'délai',concept:'Limite/Échéance',description:''},
    {sense:'échéance',concept:'Limite/Échéance',description:''},
    {sense:'à cause de',concept:'Cause',description:"Pour cette raison — 'min ajli dhâlika' : à cause de cela. Le meurtre de Caïn fut cause de la législation sur le meurtre."},
  ])
  log(r,'a j l',{'Limite/Échéance':"Moment fixé. Ne peut être avancé ni retardé. Chaque âme a son terme.",'Cause':"Pour cette raison. À cause de cela."})

  // 504. hwq (حوق) — entourer, vérité
  r = await ins('hwq', [
    {sense:'entourer',concept:'Encerclement/Totalité',description:"Être tout autour de quelque chose — entourer (hâqa/ahâta) est directionnel vers le centre depuis tous les côtés. La Géhenne entoure les mécréants. Dieu embrasse toute chose par Sa science. Ce qui entoure contient et ne laisse pas d'échappatoire."},
    {sense:'cerner',concept:'Encerclement/Totalité',description:''},
    {sense:'embrasser',concept:'Encerclement/Totalité',description:''},
    {sense:'vérité',concept:'Vérité/Droit',description:"Ce qui correspond à la réalité — le vrai (haqq) est permanent comme contraire du faux. La vérité est venue et le faux a disparu. La vérité est un droit qui s'impose."},
  ])
  log(r,'hwq',{'Encerclement/Totalité':"Tout autour. La Géhenne entoure. Dieu embrasse par Sa science.",'Vérité/Droit':"Ce qui correspond à la réalité. La vérité est venue."})

  // 505. ila (إلى) — vers
  r = await ins('ila', [
    {sense:'vers',concept:'Direction/But',description:"Préposition indiquant la direction du mouvement — 'ilâ' marque l'orientation vers un but. C'est directionnel vers la destination. Vers Dieu est le retour. Vers Lui vous serez ramenés. La préposition ouvre un chemin, indique où l'on va, où l'on tend."},
    {sense:'jusqu à',concept:'Direction/But',description:''},
    {sense:'en direction de',concept:'Direction/But',description:''},
  ])
  log(r,'ila',{'Direction/But':"Indique la direction. Vers Dieu est le retour."})

  // 506. qada (قضي) — juger (variante)
  r = await ins('qada', [
    {sense:'juger',concept:'Jugement/Décision',description:"Trancher une affaire — juger (qadâ) est l'acte de décider avec autorité. C'est directionnel vers l'affaire jugée. Dieu juge en vérité. Quand Il décide une chose, Il lui dit sois et elle est. Le jugement divin est définitif et sans appel."},
    {sense:'décider',concept:'Jugement/Décision',description:''},
    {sense:'décréter',concept:'Jugement/Décision',description:''},
    {sense:'accomplir',concept:'Achèvement',description:"Mener à terme — accomplir c'est finir ce qui était commencé."},
  ])
  log(r,'qada',{'Jugement/Décision':"Trancher avec autorité. Sois et c'est. Décision divine définitive.",'Achèvement':"Mener à terme ce qui était commencé."})

  // 507. zem (زعم) — prétendre
  r = await ins('zem', [
    {sense:'prétendre',concept:'Affirmation douteuse',description:"Affirmer quelque chose sans preuve solide — prétendre (za'ama) implique un doute sur la véracité de l'affirmation. C'est directionnel vers ce qu'on avance. Ceux qui prétendent croire... leurs prétentions ne sont pas confirmées par leurs actes. La prétention peut être mensonge déguisé."},
    {sense:'affirmer',concept:'Affirmation douteuse',description:''},
    {sense:'soutenir',concept:'Affirmation douteuse',description:''},
    {sense:'chef',concept:'Autorité',description:"Celui qui dirige — le za'îm est le chef qui prend la parole au nom du groupe."},
  ])
  log(r,'zem',{'Affirmation douteuse':"Sans preuve solide. Ceux qui prétendent croire...",'Autorité':"Chef qui parle au nom du groupe."})

  // 508. nay (نأي) — éloigner
  r = await ins('nay', [
    {sense:'éloigner',concept:'Distance/Fuite',description:"Mettre ou se mettre à distance — éloigner (na'â/yan'â) est directionnel vers le loin. C'est ponctuel dans le mouvement mais peut créer un état de distance. Quand Nous faisons grâce à l'homme il s'éloigne et se détourne. L'éloignement peut être physique ou moral, une fuite de la vérité."},
    {sense:'écarter',concept:'Distance/Fuite',description:''},
    {sense:'se détourner',concept:'Distance/Fuite',description:''},
  ])
  log(r,'nay',{'Distance/Fuite':"Mettre à distance. L'homme s'éloigne quand Dieu lui fait grâce."})

  // 509. swe (سوع) — heure
  r = await ins('swe', [
    {sense:'heure',concept:'Temps/Instant',description:"Moment précis du temps — l'heure (sâ'a) est un instant particulier dans le flux temporel. L'Heure (as-Sâ'a) par excellence est le Jour du Jugement dont nul ne connaît le moment exact. L'Heure approche. Elle viendra certainement mais son quand reste caché. Chaque heure de la vie est comptée."},
    {sense:'instant',concept:'Temps/Instant',description:''},
    {sense:'moment',concept:'Temps/Instant',description:''},
    {sense:'Jour du Jugement',concept:'Temps/Instant',description:''},
  ])
  log(r,'swe',{'Temps/Instant':"Moment précis. L'Heure du Jugement approche mais reste cachée."})

  console.log('\n=== Batch 53 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
