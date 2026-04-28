const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 921, total = 2321

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
  r = await ins("'dn", [{sense:'oreille',concept:'Audition',description:"Skip."}])
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])

  // 940. hty (حتى) — jusqu'à
  r = await ins('hty', [
    {sense:'jusqu\'à',concept:'Limite/Finalité',description:"Préposition marquant le terme — hattâ indique la limite spatiale ou temporelle. C'est permanent comme outil grammatical. Jusqu'à ce que (hattâ) vous visitiez les tombeaux. Hattâ peut introduire une subordonnée de but ou de conséquence. La limite fixée par hattâ est un terme qu'on ne dépasse pas. Chaque chose a son hattâ, sa fin assignée."},
    {sense:'afin que',concept:'Limite/Finalité',description:''},
    {sense:'même',concept:'Limite/Finalité',description:''},
  ])
  log(r,'hty',{'Limite/Finalité':"Préposition de terme. Jusqu'à ce que vous visitiez. Chaque chose a sa fin."})

  // 941. shrq (شرق) — est, lever du soleil
  r = await ins('shrq', [
    {sense:'est',concept:'Orient/Lumière',description:"Direction du lever du soleil — l'est (sharq/mashriq) est où le soleil apparaît. C'est permanent comme direction. Seigneur de l'est (al-mashriq) et de l'ouest. L'orient et l'occident appartiennent à Dieu. Le sharq est aussi la lueur de l'aube, la lumière qui éclate. Le mushâriq sont les levers successifs du soleil tout au long de l'année. D'est en ouest, tout est à Dieu."},
    {sense:'lever',concept:'Orient/Lumière',description:''},
    {sense:'orient',concept:'Orient/Lumière',description:''},
  ])
  log(r,'shrq',{'Orient/Lumière':"Direction du lever. Seigneur de l'est et de l'ouest. Tout est à Dieu."})

  // 942. ghrb (غرب) — ouest, coucher du soleil
  r = await ins('ghrb', [
    {sense:'ouest',concept:'Occident/Disparition',description:"Direction du coucher du soleil — l'ouest (gharb/maghrib) est où le soleil disparaît. C'est permanent comme direction. L'est et l'ouest (al-maghrib) appartiennent à Dieu. Le gharîb est l'étranger, celui qui vient d'ailleurs. L'ightirâb est l'exil, l'éloignement de son pays. Le coucher est une disparition temporaire, promesse d'un nouveau lever."},
    {sense:'coucher',concept:'Occident/Disparition',description:''},
    {sense:'étranger',concept:'Occident/Disparition',description:''},
  ])
  log(r,'ghrb',{'Occident/Disparition':"Direction du coucher. L'ouest appartient à Dieu. Le gharîb: l'étranger."})

  // 943. ayn (أين) — où
  r = await ins('ayn', [
    {sense:'où',concept:'Lieu/Interrogation',description:"Adverbe interrogatif de lieu — ayna demande la localisation. C'est permanent comme outil grammatical. Où (ayna) que vous soyez, Il est avec vous. La présence de Dieu n'est pas limitée au lieu. Ayna peut exprimer l'étonnement : où sont-ils passés ? Le lieu ne définit pas l'être pour Dieu qui transcende l'espace."},
    {sense:'en quel lieu',concept:'Lieu/Interrogation',description:''},
  ])
  log(r,'ayn',{'Lieu/Interrogation':"Demande la localisation. Où que vous soyez, Il est avec vous. Au-delà du lieu."})

  // 944. wsae (وسع) — être vaste, contenir
  r = await ins('wsae', [
    {sense:'être vaste',concept:'Ampleur/Capacité',description:"Avoir de l'étendue — être vaste (wasi'a) c'est pouvoir contenir beaucoup. C'est permanent comme qualité. Sa science embrasse (wasi'a) toute chose. Le wâsi' est le Vaste, un des noms divins. La wus'a est la capacité, ce qu'on peut porter. Dieu est Vaste en miséricorde, vaste en pardon. Il n'impose que selon la capacité."},
    {sense:'contenir',concept:'Ampleur/Capacité',description:''},
    {sense:'capacité',concept:'Ampleur/Capacité',description:''},
  ])
  log(r,'wsae',{'Ampleur/Capacité':"Pouvoir contenir beaucoup. Sa science embrasse tout. Al-Wâsi': le Vaste."})

  console.log('\n=== Batch 134 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
