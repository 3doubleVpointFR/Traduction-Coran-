const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 646, total = 2321

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

  // Skip entrées connues
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 652. snm (صنم) — idole
  r = await ins('snm', [
    {sense:'idole',concept:'Fausse divinité',description:"Statue adorée à la place de Dieu — l'idole (sanam) est l'objet fabriqué que les polythéistes adorent. C'est permanent comme objet physique mais vide de toute réalité divine. Préserve-moi et mes descendants de l'adoration des idoles (asnâm). Abraham détruisit les idoles de son peuple pour montrer leur impuissance."},
    {sense:'statue',concept:'Fausse divinité',description:''},
    {sense:'fausse divinité',concept:'Fausse divinité',description:''},
  ])
  log(r,'snm',{'Fausse divinité':"Statue adorée. Préserve-moi des idoles. Abraham les détruisit."})

  // 653. raaa (رأي) — voir, opinion
  r = await ins('raaa', [
    {sense:'voir',concept:'Vision/Jugement',description:"Percevoir par les yeux ou par l'esprit — voir (ra'â/yarâ) est directionnel vers ce qu'on perçoit. La vision peut être physique ou spirituelle. N'as-tu pas vu (alam tara) comment ton Seigneur a agi ? Voir c'est aussi comprendre et juger. L'opinion (ra'y) est le jugement personnel fondé sur ce qu'on a vu et compris."},
    {sense:'regarder',concept:'Vision/Jugement',description:''},
    {sense:'opinion',concept:'Vision/Jugement',description:''},
    {sense:'juger',concept:'Vision/Jugement',description:''},
  ])
  log(r,'raaa',{'Vision/Jugement':"Percevoir. N'as-tu pas vu comment? La vision physique ou spirituelle. Opinion."})

  // 654. alyas (أليس) — Élie
  r = await ins('alyas', [
    {sense:'Élie',concept:'Prophète/Mission',description:"Prophète envoyé aux adorateurs de Baal — Ilyâs (Élie) est un prophète d'Israël qui combattit l'idolâtrie. C'est permanent comme nom propre. Paix sur Élie ! Il dit à son peuple : Ne craignez-vous pas Dieu ? Il fut parmi les envoyés et laissa un bon souvenir parmi les générations."},
    {sense:'Ilyâs',concept:'Prophète/Mission',description:''},
  ])
  log(r,'alyas',{'Prophète/Mission':"Prophète contre Baal. Paix sur Élie ! Parmi les envoyés."})

  // 655. yse (يسع) — Élisée
  r = await ins('yse', [
    {sense:'Élisée',concept:'Prophète/Succession',description:"Prophète successeur d'Élie — al-Yasa' (Élisée) reçut le manteau prophétique d'Élie. C'est permanent comme nom propre. Et Ismaël, Élisée (al-Yasa'), Jonas et Lot, tous Nous les avons favorisés sur les mondes. Il fait partie de la lignée des prophètes d'Israël bénis par Dieu."},
    {sense:'al-Yasa',concept:'Prophète/Succession',description:''},
  ])
  log(r,'yse',{'Prophète/Succession':"Successeur d'Élie. Favorisé sur les mondes. Lignée prophétique."})

  // 656. ealayna () — sur nous
  r = await ins('ealayna', [
    {sense:'sur nous',concept:'Direction/Responsabilité',description:"Préposition + pronom indiquant ce qui incombe — 'alaynâ marque ce qui pèse sur nous comme devoir ou ce qui nous concerne. À Nous incombe la guidance (inna 'alaynâ la-l-hudâ). La responsabilité divine de guider montre que Dieu ne laisse pas l'humanité sans direction."},
    {sense:'à nous',concept:'Direction/Responsabilité',description:''},
    {sense:'notre devoir',concept:'Direction/Responsabilité',description:''},
  ])
  log(r,'ealayna',{'Direction/Responsabilité':"Ce qui incombe. À Nous la guidance. Dieu ne laisse pas sans direction."})

  console.log('\n=== Batch 77 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
