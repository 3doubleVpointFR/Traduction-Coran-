const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 694, total = 2321

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

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 700. hrf (حرف) — lettre, bord, dévier
  r = await ins('hrf', [
    {sense:'lettre',concept:'Élément/Bord',description:"Unité minimale du langage ou extrémité — le harf est la lettre de l'alphabet, l'élément de base de la parole. C'est aussi le bord, la limite d'une chose. Parmi les gens il y en a qui adorent Dieu sur un bord (harf). Être sur le bord c'est être instable, prêt à basculer. Le harf est ce qui délimite, que ce soit un mot ou un territoire."},
    {sense:'bord',concept:'Élément/Bord',description:''},
    {sense:'particule',concept:'Élément/Bord',description:''},
  ])
  log(r,'hrf',{'Élément/Bord':"Unité minimale. Adorer Dieu sur un bord. Ce qui délimite."})

  // 701. hdṯ (حدث) — événement, nouveau
  r = await ins('hdṯ', [
    {sense:'événement',concept:'Nouveauté/Récence',description:"Ce qui se produit et qui est récent — le hadath est l'événement nouveau, ce qui n'existait pas avant. C'est ponctuel comme occurrence. Aucun rappel (dhikr) nouveau (muhdath) ne leur vient de leur Seigneur. Le muhdath est le récent par opposition à l'ancien. Créer (ahdatha) c'est faire advenir le nouveau. L'innovation (bid'a) partage cette idée de nouveauté non fondée."},
    {sense:'nouveau',concept:'Nouveauté/Récence',description:''},
    {sense:'récent',concept:'Nouveauté/Récence',description:''},
  ])
  log(r,'hdṯ',{'Nouveauté/Récence':"Ce qui n'existait pas. Aucun rappel nouveau. Faire advenir le neuf."})

  // 702. fth (فتح) — ouvrir, conquête, victoire
  r = await ins('fth', [
    {sense:'ouvrir',concept:'Ouverture/Victoire',description:"Donner accès à ce qui était fermé — ouvrir (fataha) est directionnel vers l'intérieur rendu accessible. C'est ponctuel comme action mais peut avoir des effets permanents. Nous t'avons accordé une victoire éclatante (fath mubîn). Le fath est l'ouverture des portes, des cœurs, des villes. La conquête (fath) de La Mecque ouvrit l'islam à l'Arabie. Dieu est al-Fattâh, Celui qui ouvre les voies."},
    {sense:'conquête',concept:'Ouverture/Victoire',description:''},
    {sense:'victoire',concept:'Ouverture/Victoire',description:''},
    {sense:'clé',concept:'Ouverture/Victoire',description:''},
  ])
  log(r,'fth',{'Ouverture/Victoire':"Donner accès. Victoire éclatante. Al-Fattâh ouvre les voies."})

  // 703. hjj (حجج) — pèlerinage, argument
  r = await ins('hjj', [
    {sense:'pèlerinage',concept:'Pèlerinage/Preuve',description:"Voyage sacré vers la Maison de Dieu — le hajj est le pèlerinage à La Mecque, pilier de l'islam. C'est cyclique annuellement mais ponctuel pour chaque pèlerin. Le pèlerinage (al-hajj) à la Maison est un devoir envers Dieu pour quiconque en a les moyens. Le hajj est aussi l'argument, la preuve qu'on oppose : ils disputent (yuhâjjûna) sur ce dont ils n'ont pas connaissance."},
    {sense:'argument',concept:'Pèlerinage/Preuve',description:''},
    {sense:'preuve',concept:'Pèlerinage/Preuve',description:''},
    {sense:'disputer',concept:'Pèlerinage/Preuve',description:''},
  ])
  log(r,'hjj',{'Pèlerinage/Preuve':"Voyage sacré. Le hajj est un devoir. Argument qu'on oppose."})

  // 704. qsw (قسو) — durcir, endurcissement
  r = await ins('qsw', [
    {sense:'durcir',concept:'Dureté/Cruauté',description:"Devenir dur et insensible — l'endurcissement (qaswa) est l'état du cœur qui ne répond plus à la vérité. C'est intérieur et progressif, devenant permanent. Puis vos cœurs se sont endurcis (qasat) après cela et devinrent comme la pierre ou plus durs encore. La qaswa est le contraire de la khushû' (humilité). Le cœur dur ne pleure pas, ne craint pas, ne se soumet pas."},
    {sense:'endurcir',concept:'Dureté/Cruauté',description:''},
    {sense:'cruauté',concept:'Dureté/Cruauté',description:''},
  ])
  log(r,'qsw',{'Dureté/Cruauté':"Cœur insensible. Comme la pierre ou plus durs. Contraire de khushû'."})

  console.log('\n=== Batch 87 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
