const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 956, total = 2321

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

  // 976. mta (متع) — jouissance, biens
  r = await ins('mta', [
    {sense:'jouissance',concept:'Jouissance/Provision',description:"Profit temporaire de ce monde — la jouissance (matâ') est ce dont on profite. C'est temporaire par nature. Jouissance (matâ') jusqu'à un terme. Les biens de ce monde sont matâ' éphémère. Le mut'a est la provision de voyage. L'istimt'' est la jouissance mutuelle. Ce monde n'est que jouissance trompeuse (matâ' al-ghurûr). La vraie richesse est ce qui reste après la mort."},
    {sense:'biens',concept:'Jouissance/Provision',description:''},
    {sense:'provision',concept:'Jouissance/Provision',description:''},
  ])
  log(r,'mta',{'Jouissance/Provision':"Profit temporaire. Jouissance jusqu'à un terme. Ce monde: jouissance trompeuse."})

  // 977. drr (ضرر) — nuire, mal
  r = await ins('drr', [
    {sense:'nuire',concept:'Nuisance/Mal',description:"Causer du tort — nuire (darra) c'est infliger un dommage. C'est ponctuel comme acte et peut être permanent comme effet. Ils ne vous nuiront (yadurrûkum) en rien. Les ennemis ne peuvent nuire sans la permission de Dieu. Le darar est le dommage, la durr est le mal. La darûra est la nécessité impérieuse. Lâ darara wa lâ dirâr : pas de nuisance ni de représailles nuisibles."},
    {sense:'tort',concept:'Nuisance/Mal',description:''},
    {sense:'dommage',concept:'Nuisance/Mal',description:''},
  ])
  log(r,'drr',{'Nuisance/Mal':"Causer du tort. Ils ne vous nuiront en rien. Pas de nuisance ni représailles."})

  // 978. syr (صير) — devenir
  r = await ins('syr', [
    {sense:'devenir',concept:'Devenir/Destination',description:"Passer à un autre état — devenir (sâra/yasîru) c'est changer de condition. C'est directionnel et transformatif. Vers Dieu est la destination (al-masîr). Le masîr est le lieu de retour, la destination finale. Tout retourne à Dieu. Le sîra est le cheminement, le parcours. Le devenir humain est un voyage vers la rencontre divine. Chaque pas nous rapproche du masîr."},
    {sense:'destination',concept:'Devenir/Destination',description:''},
    {sense:'aboutir',concept:'Devenir/Destination',description:''},
  ])
  log(r,'syr',{'Devenir/Destination':"Changer de condition. Vers Dieu le masîr. Voyage vers la rencontre."})

  // 979. kzlk (كذلك) — ainsi, de même
  r = await ins('kzlk', [
    {sense:'ainsi',concept:'Comparaison/Identité',description:"De la même manière — kadhâlika établit une équivalence. C'est permanent comme outil comparatif. Ainsi (kadhâlika) Nous l'avons révélé. Ce qui est fait ici est comme ce qui fut fait avant. La répétition divine des schémas manifeste la constance de Sa sunna. Kadhâlika relie les événements dans une logique divine cohérente."},
    {sense:'de même',concept:'Comparaison/Identité',description:''},
  ])
  log(r,'kzlk',{'Comparaison/Identité':"Équivalence. Ainsi Nous l'avons révélé. Constance de la sunna divine."})

  // 980. wa (و) — et, conjonction
  r = await ins('wa', [
    {sense:'et',concept:'Coordination/Serment',description:"Particule de coordination ou de serment — wa relie deux éléments ou introduit un serment. C'est permanent comme outil grammatical. Les cieux et (wa) la terre. La coordination par wa peut être simultanée ou séquentielle. Wa peut aussi être serment : Par (wa) le ciel ! Le wa de serment invoque Dieu à témoin. La simple conjonction 'et' porte parfois une profondeur théologique."},
    {sense:'par',concept:'Coordination/Serment',description:''},
  ])
  log(r,'wa',{'Coordination/Serment':"Relie ou jure. Les cieux et la terre. Par le ciel! Profondeur du wa."})

  // 981. rghb (رغب) — désirer, aspirer
  r = await ins('rghb', [
    {sense:'désirer',concept:'Désir/Aspiration',description:"Souhaiter ardemment quelque chose — désirer (raghiba) c'est aspirer à obtenir. C'est intérieur et peut être permanent. Ils aspiraient (yarghubûna) vers Nous. L'aspiration vers Dieu est la meilleure des aspirations. Raghiba fî est désirer, raghiba 'an est se détourner de. Le râghib est celui qui désire. L'aspiration vraie oriente l'âme vers son Seigneur."},
    {sense:'aspirer',concept:'Désir/Aspiration',description:''},
    {sense:'souhaiter',concept:'Désir/Aspiration',description:''},
  ])
  log(r,'rghb',{'Désir/Aspiration':"Souhaiter ardemment. Ils aspiraient vers Nous. L'âme orientée vers son Seigneur."})

  console.log('\n=== Batch 141 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
