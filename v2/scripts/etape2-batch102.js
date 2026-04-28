const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 764, total = 2321

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

  // 776. klb (كلب) — chien
  r = await ins('klb', [
    {sense:'chien',concept:'Animal/Avidité',description:"Animal domestique gardien — le chien (kalb) est l'animal de garde et de chasse. C'est permanent comme espèce. Son exemple est comme celui du chien (al-kalb) : si tu le charges il halète, si tu le laisses il halète. Le chien des gens de la Caverne gardait l'entrée. Manger ce que les chiens de chasse attrapent est licite si on prononce le nom de Dieu."},
    {sense:'avidité',concept:'Animal/Avidité',description:''},
  ])
  log(r,'klb',{'Animal/Avidité':"Gardien et chasseur. Comme le chien qui halète. Chien de la Caverne."})

  // 777. haala (هاء) — voici, prends
  r = await ins('haala', [
    {sense:'voici',concept:'Présentation/Don',description:"Interjection pour présenter ou donner — hâ' est le geste verbal d'offrir. C'est ponctuel comme acte de don. Voici (hâ'um), lisez mon livre ! Le bienheureux au Jour du Jugement tend son livre de la main droite. L'interjection marque l'invitation à recevoir, à prendre ce qui est offert."},
    {sense:'prends',concept:'Présentation/Don',description:''},
    {sense:'tiens',concept:'Présentation/Don',description:''},
  ])
  log(r,'haala',{'Présentation/Don':"Geste verbal d'offrir. Voici, lisez mon livre ! Invitation à recevoir."})

  // 778. nth (نطح) — frapper de la corne
  r = await ins('nth', [
    {sense:'frapper de la corne',concept:'Heurt/Conflit',description:"Donner un coup avec la corne — l'animal natîh frappe avec ses cornes. C'est ponctuel et violent. Ce qui a été tué par un coup de corne (an-natîha). L'animal mort par encornement est illicite sauf égorgé avant la mort. Le heurt de cornes est image de conflit, d'affrontement violent entre adversaires."},
    {sense:'encorner',concept:'Heurt/Conflit',description:''},
    {sense:'encornement',concept:'Heurt/Conflit',description:''},
  ])
  log(r,'nth',{'Heurt/Conflit':"Coup de corne. Tué par natîha. Image de conflit violent."})

  // 779. xms (خمص) — être affamé, creux
  r = await ins('xms', [
    {sense:'être affamé',concept:'Faim/Vide',description:"Avoir le ventre vide — la makhmaṣa est la faim qui creuse le ventre. C'est ponctuel mais peut être durable. Une faim (makhmaṣa) les atteint sur le chemin de Dieu. Souffrir la faim dans le jihâd est une épreuve méritoire. Le khâmiṣ est celui au ventre creux, affamé. La faim est l'état de manque qui appelle à être comblé."},
    {sense:'faim',concept:'Faim/Vide',description:''},
    {sense:'ventre creux',concept:'Faim/Vide',description:''},
  ])
  log(r,'xms',{'Faim/Vide':"Ventre vide. Une faim les atteint. Épreuve sur le chemin de Dieu."})

  // 780. dhw y (ذوي) — posséder, avoir
  r = await ins('dhw y', [
    {sense:'posséder',concept:'Possession/Appartenance',description:"Avoir quelque chose en propre — dhû/dhâ/dhî marque la possession d'une qualité ou d'une chose. C'est permanent comme relation. Dieu est le Possesseur de la majesté (dhû l-jalâl). Les dhawû sont ceux qui possèdent. Ceux qui possèdent des liens de parenté (ûlû l-qurbâ). Posséder une qualité c'est l'avoir en soi de manière stable."},
    {sense:'avoir',concept:'Possession/Appartenance',description:''},
    {sense:'détenteur',concept:'Possession/Appartenance',description:''},
  ])
  log(r,'dhw y',{'Possession/Appartenance':"Avoir en propre. Dhû l-jalâl. Ceux qui possèdent des liens."})

  console.log('\n=== Batch 102 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
