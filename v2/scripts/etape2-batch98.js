const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 745, total = 2321

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

  // 755. wjd (وجد) — trouver, exister
  r = await ins('wjd', [
    {sense:'trouver',concept:'Découverte/Existence',description:"Rencontrer ce qu'on cherchait ou ce qu'on ne cherchait pas — trouver (wajada) est le moment de la découverte. C'est ponctuel comme action. Nous l'avons trouvé (wajadnâhu) patient. Le wujûd est l'existence, le fait d'être trouvé, d'être là. Celui qui existe peut être trouvé. Dieu est al-Wâjid, Celui qui trouve et Celui qui existe par excellence."},
    {sense:'exister',concept:'Découverte/Existence',description:''},
    {sense:'rencontrer',concept:'Découverte/Existence',description:''},
  ])
  log(r,'wjd',{'Découverte/Existence':"Rencontrer. Nous l'avons trouvé patient. Wujûd: existence."})

  // 756. huwa (هوي) — variante de hwa (déjà traité)
  r = await ins('huwa', [
    {sense:'passion',concept:'Passion',description:"Skip si déjà fait comme hwa."},
  ])

  // 757. nqr (نقر) — creuser, corne
  r = await ins('nqr', [
    {sense:'creuser',concept:'Excavation/Signal',description:"Faire un creux dans une surface — creuser (naqara) c'est évider, trouer. Le nâqûr est la corne dans laquelle on souffle. Quand il sera soufflé dans la corne (fî n-nâqûr). Le naqîr est le creux dans le noyau de datte, le plus infime. Ils ne seront pas lésés d'un naqîr. Le creux est l'espace vide qu'on a fait dans le plein."},
    {sense:'corne',concept:'Excavation/Signal',description:''},
    {sense:'infime',concept:'Excavation/Signal',description:''},
  ])
  log(r,'nqr',{'Excavation/Signal':"Faire un creux. Le nâqûr qu'on souffle. Pas lésé d'un naqîr."})

  // 758. jbt (جبت) — idole, faux dieu
  r = await ins('jbt', [
    {sense:'idole',concept:'Fausse divinité/Magie',description:"Ce qui est adoré en dehors de Dieu — le jibt désigne tout ce qui est adoré indûment. C'est permanent comme objet de faux culte. Ils croient au jibt et au tâghût. Le jibt peut être une idole, un magicien, ou toute chose qui détourne de Dieu. C'est l'objet de culte illégitime, le faux dieu qui n'a aucune réalité divine."},
    {sense:'faux dieu',concept:'Fausse divinité/Magie',description:''},
    {sense:'magie',concept:'Fausse divinité/Magie',description:''},
  ])
  log(r,'jbt',{'Fausse divinité/Magie':"Adoré indûment. Ils croient au jibt. Détourne de Dieu."})

  // 759. hdha (هذا) — variante de hda
  r = await ins('hdha', [
    {sense:'ceci',concept:'Démonstratif',description:"Skip si déjà fait comme hda."},
  ])

  // 760. mdj (مضج) — résider, être patient
  r = await ins('mdj', [
    {sense:'résider',concept:'Établissement/Patience',description:"Demeurer en un lieu — résider c'est s'établir quelque part. Le madâji' sont les lieux de repos, les couches. Leurs flancs se détachent des couches (al-madâji'). Se lever la nuit pour prier c'est quitter sa couche confortable. La patience est aussi un repos dans l'épreuve, une stabilité intérieure face à l'adversité."},
    {sense:'couche',concept:'Établissement/Patience',description:''},
    {sense:'lit',concept:'Établissement/Patience',description:''},
  ])
  log(r,'mdj',{'Établissement/Patience':"Demeurer en un lieu. Leurs flancs se détachent des couches. Repos."})

  console.log('\n=== Batch 98 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
