const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 531, total = 2321

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

  // 534. s-t-t (ستت) — six
  r = await ins('s-t-t', [
    {sense:'six',concept:'Nombre/Création',description:"Le nombre 6 — six (sitta) est permanent comme valeur numérique. Dieu a créé les cieux et la terre en six jours. Le six représente la complétude de la création matérielle avant le repos du septième jour. Six jours de travail structurent la semaine."},
    {sense:'sixième',concept:'Nombre/Création',description:''},
    {sense:'soixante',concept:'Nombre/Création',description:''},
  ])
  log(r,'s-t-t',{'Nombre/Création':"Six jours de création. Complétude avant le repos. Structure la semaine."})

  // 535. nsn (نسن) — être humain
  r = await ins('nsn', [
    {sense:'être humain',concept:'Humanité/Faiblesse',description:"Le genre humain dans sa nature — l'être humain (insân) est permanent comme espèce créée. L'homme est créé faible, impatient, disputeur. Nous avons certes créé l'homme dans la meilleure stature. L'insân est caractérisé par l'oubli (nisyân), d'où peut-être son nom. Il oscille entre sa noble origine et ses faiblesses."},
    {sense:'homme',concept:'Humanité/Faiblesse',description:''},
    {sense:'humanité',concept:'Humanité/Faiblesse',description:''},
    {sense:'oublieux',concept:'Humanité/Faiblesse',description:''},
  ])
  log(r,'nsn',{'Humanité/Faiblesse':"Genre humain. Créé faible mais dans la meilleure stature. Caractérisé par l'oubli."})

  // 536. bta (بطأ) — être lent, tarder
  r = await ins('bta', [
    {sense:'être lent',concept:'Lenteur/Retard',description:"Ne pas se hâter, prendre du temps — être lent (batua/yubti'u) est le contraire de la promptitude. C'est permanent comme disposition ou temporaire comme action. Parmi vous il en est qui tarde (layubatti'anna). Le retardataire n'est pas au rendez-vous de l'effort collectif, il ralentit le groupe."},
    {sense:'tarder',concept:'Lenteur/Retard',description:''},
    {sense:'retarder',concept:'Lenteur/Retard',description:''},
  ])
  log(r,'bta',{'Lenteur/Retard':"Ne pas se hâter. Celui qui tarde ralentit le groupe."})

  // 537. dry (دري) — savoir, percevoir
  r = await ins('dry', [
    {sense:'savoir',concept:'Connaissance/Perception',description:"Avoir connaissance de quelque chose — savoir (darâ/yadrî) est la conscience de ce qui est. Et que t'en sais-tu (mâ adrâka) ? Cette formule introduit souvent une réalité que l'homme ne peut saisir par lui-même. Seul Dieu fait savoir ce qui échappe à la perception humaine."},
    {sense:'percevoir',concept:'Connaissance/Perception',description:''},
    {sense:'se rendre compte',concept:'Connaissance/Perception',description:''},
  ])
  log(r,'dry',{'Connaissance/Perception':"Avoir connaissance. Que t'en sais-tu? Ce qui échappe à l'homme."})

  // 538. hy' (هيء) — préparer, disposer
  r = await ins("hy'", [
    {sense:'préparer',concept:'Préparation/Disposition',description:"Mettre en état de servir à un usage — préparer (hayya'a) c'est disposer ce qui est nécessaire. C'est directionnel vers l'objectif visé. Dieu vous préparera (yuhayyi' lakum) de Son affaire une facilité. La préparation divine arrange les circonstances pour le bien du serviteur."},
    {sense:'disposer',concept:'Préparation/Disposition',description:''},
    {sense:'arranger',concept:'Préparation/Disposition',description:''},
  ])
  log(r,"hy'",{'Préparation/Disposition':"Mettre en état. Dieu prépare une facilité. Arrange les circonstances."})

  // 539. seh (سعة) — largeur, capacité
  r = await ins('seh', [
    {sense:'largeur',concept:'Amplitude/Capacité',description:"Étendue dans l'espace ou les moyens — la largeur (sa'a) est l'opposé de l'étroitesse. C'est permanent comme qualité. La terre de Dieu est vaste (wâsi'a). Le vaste (al-Wâsi') est un nom de Dieu : Il englobe tout par Sa miséricorde et Sa science. La capacité financière (wus') détermine l'obligation de dépenser."},
    {sense:'capacité',concept:'Amplitude/Capacité',description:''},
    {sense:'aisance',concept:'Amplitude/Capacité',description:''},
    {sense:'vaste',concept:'Amplitude/Capacité',description:''},
  ])
  log(r,'seh',{'Amplitude/Capacité':"Étendue. La terre de Dieu est vaste. Al-Wâsi' englobe tout."})

  // 540. swgh (سوغ) — avaler, passer facilement
  r = await ins('swgh', [
    {sense:'avaler',concept:'Ingestion/Difficulté',description:"Faire passer dans la gorge — avaler (sâgha/yasûghu) est le passage de la nourriture ou de la boisson. Il l'avale (yatasawwaghuhu) à petites gorgées et peut à peine l'avaler. L'eau bouillante de l'enfer est si atroce qu'elle ne peut être avalée facilement. La difficulté d'avaler symbolise la souffrance intérieure."},
    {sense:'ingurgiter',concept:'Ingestion/Difficulté',description:''},
    {sense:'gorgée',concept:'Ingestion/Difficulté',description:''},
  ])
  log(r,'swgh',{'Ingestion/Difficulté':"Passage dans la gorge. Eau bouillante difficile à avaler. Souffrance intérieure."})

  // 541. kyy (كيى) — afin que, pour que
  r = await ins('kyy', [
    {sense:'afin que',concept:'Finalité/But',description:"Conjonction exprimant le but — kay introduit l'intention ou la finalité d'une action. C'est directionnel vers l'objectif visé. Afin que (likay) vous ne vous affligiez pas de ce qui vous échappe. La particule relie l'action à son but, donnant sens à l'effort."},
    {sense:'pour que',concept:'Finalité/But',description:''},
    {sense:'de sorte que',concept:'Finalité/But',description:''},
  ])
  log(r,'kyy',{'Finalité/But':"Introduit le but. Afin que vous ne vous affligiez pas. Donne sens à l'effort."})

  console.log('\n=== Batch 57 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
