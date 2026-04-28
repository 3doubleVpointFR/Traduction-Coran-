const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 539, total = 2321

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

  // 542. hy' (هيء) — variante possible
  r = await ins("hy'", [
    {sense:'préparer',concept:'Préparation',description:"Skip si déjà fait."},
  ])

  // 543. xhrj (خرج) — sortir
  r = await ins('xhrj', [
    {sense:'sortir',concept:'Sortie/Extraction',description:"Passer de l'intérieur vers l'extérieur — sortir (kharaja) est directionnel de dedans vers dehors. C'est ponctuel dans l'acte mais peut marquer un changement d'état permanent. Sortez-les de chez eux ! Faire sortir les gens des ténèbres vers la lumière est la mission prophétique. L'extraction révèle ce qui était caché."},
    {sense:'extraire',concept:'Sortie/Extraction',description:''},
    {sense:'faire sortir',concept:'Sortie/Extraction',description:''},
    {sense:'tribut',concept:'Impôt/Don',description:"Ce qui sort des biens vers l'autorité — le kharâj est l'impôt foncier, ce qui est extrait de la terre pour le trésor public."},
  ])
  log(r,'xhrj',{'Sortie/Extraction':"De dedans vers dehors. Des ténèbres vers la lumière. Révèle le caché.",'Impôt/Don':"Ce qui sort des biens. Le kharâj extrait de la terre."})

  // 544. etb (عتب) — blâmer, seuil
  r = await ins('etb', [
    {sense:'blâmer',concept:'Reproche/Responsabilité',description:"Exprimer son mécontentement à quelqu'un — le blâme ('itâb) est directionnel vers celui qu'on reprend. C'est ponctuel dans l'expression mais peut révéler un grief durable. Il n'y a pas de reproche contre les faibles s'ils sont sincères envers Dieu. Le reproche vise à corriger, non à humilier."},
    {sense:'reprocher',concept:'Reproche/Responsabilité',description:''},
    {sense:'seuil',concept:'Limite/Passage',description:"Le pas de la porte, la limite entre deux espaces — le seuil ('ataba) marque le passage d'un lieu à un autre."},
  ])
  log(r,'etb',{'Reproche/Responsabilité':"Exprimer le mécontentement. Pas de reproche contre les faibles sincères.",'Limite/Passage':"Seuil de porte. Passage entre deux espaces."})

  // 545. nfd (نفد) — s'épuiser
  r = await ins('nfd', [
    {sense:"s'épuiser",concept:'Épuisement/Fin',description:"Être consommé jusqu'au bout — s'épuiser (nafida) c'est arriver au terme de ses ressources. C'est directionnel vers le néant. Si la mer était encre pour les paroles de mon Seigneur, la mer s'épuiserait avant que ne s'épuisent les paroles. Les paroles de Dieu sont infinies, les ressources terrestres finies."},
    {sense:'finir',concept:'Épuisement/Fin',description:''},
    {sense:'tarir',concept:'Épuisement/Fin',description:''},
  ])
  log(r,'nfd',{'Épuisement/Fin':"Consommé jusqu'au bout. La mer s'épuiserait, pas les paroles de Dieu."})

  // 546. nby (نبأي) — prophète, annoncer
  r = await ins('nby', [
    {sense:'prophète',concept:'Prophétie/Annonce',description:"Celui qui reçoit et transmet un message divin — le prophète (nabî) est l'envoyé qui annonce (anba'a) ce que Dieu lui révèle. C'est permanent comme fonction et mission. Les prophètes forment une chaîne qui culmine avec Muhammad, sceau des prophètes. Ils annoncent la bonne nouvelle et avertissent."},
    {sense:'annoncer',concept:'Prophétie/Annonce',description:''},
    {sense:'informer',concept:'Prophétie/Annonce',description:''},
    {sense:'nouvelle',concept:'Information',description:"Ce qui est rapporté comme information — la nouvelle (naba') est ce qu'on fait savoir. Les nouvelles du mystère te sont révélées."},
  ])
  log(r,'nby',{'Prophétie/Annonce':"Reçoit et transmet le message. Chaîne culminant avec Muhammad.",'Information':"Ce qu'on fait savoir. Nouvelles du mystère révélées."})

  // 547. ruh (روح) — esprit, souffle
  r = await ins('ruh', [
    {sense:'esprit',concept:'Esprit/Vie',description:"Le souffle vital insufflé par Dieu — l'esprit (rûh) est ce qui anime et donne la vie. C'est permanent comme réalité spirituelle. J'insufflai en lui de Mon esprit. L'Esprit fidèle (Jibrîl) descend avec la révélation. L'esprit est le lien entre le Créateur et la créature."},
    {sense:'souffle',concept:'Esprit/Vie',description:''},
    {sense:'âme',concept:'Esprit/Vie',description:''},
  ])
  log(r,'ruh',{'Esprit/Vie':"Souffle vital. Insufflé par Dieu. Lien entre Créateur et créature."})

  // 548. e n d (عند) — chez, auprès de
  r = await ins('e n d', [
    {sense:'chez',concept:'Proximité/Présence',description:"Préposition de lieu indiquant la proximité — 'inda marque la présence auprès de quelqu'un. C'est directionnel vers le lieu où l'on est. Ce qui est auprès de Dieu ('inda Allâh) est meilleur et plus durable. La proximité divine est le bien suprême. Auprès de Lui sont les clés du mystère."},
    {sense:'auprès de',concept:'Proximité/Présence',description:''},
    {sense:'près de',concept:'Proximité/Présence',description:''},
  ])
  log(r,'e n d',{'Proximité/Présence':"Indique la présence. Ce qui est auprès de Dieu est meilleur."})

  // 549. ḫwd (خوض) — patauger (variante)
  r = await ins('ḫwd', [
    {sense:'patauger',concept:'Immersion',description:"Skip si déjà fait comme xwd."},
  ])

  console.log('\n=== Batch 58 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
