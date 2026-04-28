const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 788, total = 2321

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
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 801. hlf (حلف) — jurer, serment
  r = await ins('hlf', [
    {sense:'jurer',concept:'Serment/Alliance',description:"Prendre Dieu à témoin de sa parole — jurer (halafa) c'est engager sa foi sur la vérité de ce qu'on dit. C'est ponctuel mais engage durablement. Ils jurent (yahlifûna) par Dieu qu'ils sont des vôtres. Le half est le serment, l'acte de jurer. Le parjure est grave car il prend Dieu en vain. L'alliance (hilf) est le pacte scellé par serment entre les parties."},
    {sense:'serment',concept:'Serment/Alliance',description:''},
    {sense:'alliance',concept:'Serment/Alliance',description:''},
  ])
  log(r,'hlf',{'Serment/Alliance':"Prendre Dieu à témoin. Ils jurent par Dieu. Le parjure est grave."})

  // 802. šna (شنأ) — haïr, détester
  r = await ins('šna', [
    {sense:'haïr',concept:'Haine/Aversion',description:"Éprouver une aversion intense — haïr (shani'a) est l'opposé d'aimer. C'est intérieur comme émotion. Celui qui te hait (shâni'aka) sera le sans postérité. La haine de l'ennemi ne doit pas conduire à l'injustice. Le shana'ân est la haine, l'hostilité profonde. Que la haine d'un peuple ne vous pousse pas à être injustes."},
    {sense:'détester',concept:'Haine/Aversion',description:''},
    {sense:'hostilité',concept:'Haine/Aversion',description:''},
  ])
  log(r,'šna',{'Haine/Aversion':"Aversion intense. Celui qui te hait sera sans postérité. Que la haine ne pousse à l'injustice."})

  // 803. wqḏ (وقذ) — assommer, tuer à coups
  r = await ins('wqḏ', [
    {sense:'assommer',concept:'Violence/Mort',description:"Frapper à mort sans effusion de sang — assommer (waqadha) c'est tuer par le choc. Ce qui est tué par choc (al-mawqûdha) est interdit sauf égorgé avant la mort. La bête assommée mais non égorgée est illicite car le sang n'a pas coulé. La violence qui tue sans verser le sang est différente de l'égorgement rituel."},
    {sense:'frapper à mort',concept:'Violence/Mort',description:''},
  ])
  log(r,'wqḏ',{'Violence/Mort':"Frapper sans effusion. Al-mawqûdha illicite. L'égorgement rituel nécessaire."})

  // 804. flq (فلق) — fendre, aube
  r = await ins('flq', [
    {sense:'fendre',concept:'Fission/Aube',description:"Séparer en ouvrant — fendre (falaqa) c'est diviser ce qui était joint. C'est ponctuel et décisif. Dis : je cherche refuge auprès du Seigneur de l'aube (al-falaq). L'aube est le moment où la nuit se fend pour laisser place à la lumière. Celui qui fend le grain et le noyau (fâliq al-habb wa n-nawâ). Dieu fend les ténèbres par la lumière."},
    {sense:'aube',concept:'Fission/Aube',description:''},
    {sense:'séparer',concept:'Fission/Aube',description:''},
  ])
  log(r,'flq',{'Fission/Aube':"Séparer en ouvrant. Seigneur de l'aube. Fendre le grain et le noyau."})

  // 805. ndh (نذر) — avertir, vœu
  r = await ins('ndh', [
    {sense:'avertir',concept:'Avertissement/Vœu',description:"Prévenir d'un danger ou prendre un engagement — avertir (andhara) c'est alerter sur les conséquences. Le nadhîr est l'avertisseur, le prophète qui prévient du châtiment. Tu n'es qu'un avertisseur (nadhîr). Le nadhr est aussi le vœu, l'engagement envers Dieu. Ils accomplissent leurs vœux (yûfûna bi-n-nadhr). Le vœu une fois prononcé doit être tenu."},
    {sense:'vœu',concept:'Avertissement/Vœu',description:''},
    {sense:'avertisseur',concept:'Avertissement/Vœu',description:''},
  ])
  log(r,'ndh',{'Avertissement/Vœu':"Prévenir du danger. Tu n'es qu'un avertisseur. Ils accomplissent leurs vœux."})

  console.log('\n=== Batch 107 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
