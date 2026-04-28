const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 813, total = 2321

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

  // 826. ḫðl (خذل) — abandonner, trahir
  r = await ins('ḫðl', [
    {sense:'abandonner',concept:'Abandon/Trahison',description:"Laisser sans aide celui qui compte sur nous — abandonner (khadhala) c'est retirer son soutien à qui en a besoin. C'est ponctuel mais dévastateur. S'Il vous abandonne (yakhdhulikum), qui vous aidera ? L'abandon par Dieu est la pire des choses. Le khidhlân est le fait d'être laissé seul face à l'épreuve. L'opposé est le nusra, le secours."},
    {sense:'trahir',concept:'Abandon/Trahison',description:''},
    {sense:'délaisser',concept:'Abandon/Trahison',description:''},
  ])
  log(r,'ḫðl',{'Abandon/Trahison':"Retirer son soutien. S'Il vous abandonne. L'opposé du nusra."})

  // 827. thmm (ثمم) — ensuite, puis
  r = await ins('thmm', [
    {sense:'ensuite',concept:'Succession/Ordre',description:"Ce qui vient après dans le temps — thumma introduit la suite dans l'ordre chronologique. C'est ponctuel comme transition. Il a créé puis (thumma) Il a proportionné. Thumma marque une séquence avec un intervalle, contrairement à wa (et) qui peut être simultané. L'ordre de la création suit des étapes que thumma articule."},
    {sense:'puis',concept:'Succession/Ordre',description:''},
    {sense:'après',concept:'Succession/Ordre',description:''},
  ])
  log(r,'thmm',{'Succession/Ordre':"Ce qui vient après. Il a créé puis proportionné. Séquence avec intervalle."})

  // 828. rfq (رفق) — être doux, compagnon
  r = await ins('rfq', [
    {sense:'être doux',concept:'Douceur/Compagnonnage',description:"Traiter avec gentillesse — la rifq est la douceur dans le traitement. C'est intérieur comme disposition et extérieur comme comportement. Dieu aime la douceur (rifq) en toute chose. Le rafîq est le compagnon de route, celui qui partage le chemin. Les prophètes, véridiques, martyrs et vertueux sont les meilleurs compagnons (rufaqâ')."},
    {sense:'douceur',concept:'Douceur/Compagnonnage',description:''},
    {sense:'compagnon',concept:'Douceur/Compagnonnage',description:''},
  ])
  log(r,'rfq',{'Douceur/Compagnonnage':"Traiter avec gentillesse. Dieu aime la douceur. Meilleurs compagnons."})

  // 829. anna (أنن) — que (conjonction)
  r = await ins('anna', [
    {sense:'que',concept:'Conjonction/Certitude',description:"Particule introduisant une proposition — anna affirme la certitude de ce qui suit. C'est permanent comme outil grammatical. Sache qu'(anna) il n'y a de dieu que Dieu. Anna introduit une réalité établie. La différence avec inna est subtile : anna suit souvent un verbe de connaissance ou de perception. Ce qui suit anna est tenu pour certain."},
    {sense:'certes',concept:'Conjonction/Certitude',description:''},
  ])
  log(r,'anna',{'Conjonction/Certitude':"Affirme la certitude. Sache qu'il n'y a de dieu que Dieu. Réalité établie."})

  // 830. ani (أن) — que (conjonction légère)
  r = await ins('ani', [
    {sense:'que',concept:'Subordination',description:"Particule de subordination — an introduit une proposition subordonnée. Nous leur avons ordonné qu'(an) ils adorent Dieu. An peut exprimer le but, la conséquence ou le contenu d'un ordre. C'est un outil grammatical essentiel pour relier les propositions dans le discours coranique."},
    {sense:'afin que',concept:'Subordination',description:''},
    {sense:'de',concept:'Subordination',description:''},
  ])
  log(r,'ani',{'Subordination':"Introduit la subordonnée. Nous leur avons ordonné qu'ils adorent. But ou contenu."})

  console.log('\n=== Batch 112 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
