const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 651, total = 2321

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

  // 657. jsd (جسد) — corps
  r = await ins('jsd', [
    {sense:'corps',concept:'Matérialité/Physique',description:"L'enveloppe physique de l'être — le corps (jasad) est permanent comme réalité matérielle. Nous en avons fait un corps (jasadan) sans vie (le veau d'or). Le corps est le réceptacle de l'âme. La création d'Adam fut celle d'un corps d'argile avant l'insufflation de l'esprit."},
    {sense:'chair',concept:'Matérialité/Physique',description:''},
    {sense:'statue',concept:'Matérialité/Physique',description:''},
  ])
  log(r,'jsd',{'Matérialité/Physique':"Enveloppe physique. Un corps sans vie. Réceptacle de l'âme."})

  // 658. wad (وءد) — enterrer vivant
  r = await ins('wad', [
    {sense:'enterrer vivant',concept:'Meurtre/Infanticide',description:"Enfouir un enfant vivant dans le sol — enterrer vivant (wa'ada) était la pratique préislamique de tuer les filles nouveau-nées. C'est ponctuel mais atroce. Quand la fille enterrée vivante (al-maw'ûda) sera interrogée pour quel péché elle fut tuée. Le Coran condamne fermement cet infanticide."},
    {sense:'enfouir',concept:'Meurtre/Infanticide',description:''},
    {sense:'tuer les filles',concept:'Meurtre/Infanticide',description:''},
  ])
  log(r,'wad',{'Meurtre/Infanticide':"Enfouir vivant. La maw'ûda interrogée. Pour quel péché fut-elle tuée ?"})

  // 659. eyd (عيد) — fête, retour
  r = await ins('eyd', [
    {sense:'fête',concept:'Célébration/Retour',description:"Jour de réjouissance qui revient — la fête ('îd) est un événement cyclique de célébration. Elle revient périodiquement. Qu'elle soit pour nous une fête ('îdan) pour le premier et le dernier d'entre nous. La table descendue du ciel devint commémoration. La fête est retour du temps béni."},
    {sense:'célébration',concept:'Célébration/Retour',description:''},
    {sense:'jour de fête',concept:'Célébration/Retour',description:''},
  ])
  log(r,'eyd',{'Célébration/Retour':"Jour qui revient. Une fête pour nous. La table devint commémoration."})

  // 660. laan (لأن) — parce que, afin que
  r = await ins('laan', [
    {sense:'parce que',concept:'Causalité/But',description:"Conjonction exprimant la cause ou le but — li'anna introduit la raison pour laquelle quelque chose est. C'est directionnel vers l'explication. Parce que (li'annahum) ils ont mécru après leur foi. La conjonction relie l'effet à sa cause, donnant sens aux événements."},
    {sense:'afin que',concept:'Causalité/But',description:''},
    {sense:'car',concept:'Causalité/But',description:''},
  ])
  log(r,'laan',{'Causalité/But':"Introduit la raison. Parce qu'ils ont mécru. Relie l'effet à sa cause."})

  // 661. ams (أمس) — hier
  r = await ins('ams', [
    {sense:'hier',concept:'Temps passé',description:"Le jour qui précède aujourd'hui — hier (ams) est le passé récent et révolu. C'est ponctuel mais définitivement passé. Comme si elle n'avait pas existé la veille (bi-l-amsi). Ce qui était hier n'est plus, rappel de la fragilité des choses et du passage inexorable du temps."},
    {sense:'la veille',concept:'Temps passé',description:''},
    {sense:'passé proche',concept:'Temps passé',description:''},
  ])
  log(r,'ams',{'Temps passé':"Le jour précédent. Comme si elle n'avait pas existé hier. Fragilité des choses."})

  console.log('\n=== Batch 78 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
