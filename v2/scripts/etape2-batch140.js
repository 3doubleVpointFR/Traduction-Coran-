const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 951, total = 2321

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

  // 971. brh (بره) — prouver, être pieux
  r = await ins('brh', [
    {sense:'prouver',concept:'Preuve/Piété',description:"Établir la vérité ou être vertueux — la preuve (burhân) établit et la piété (birr) honore. C'est permanent comme qualité. La piété (al-birr) n'est pas de tourner vos visages vers l'est ou l'ouest. Le birr est la bonté profonde, l'obéissance complète. Le bârr est le pieux, le bienfaisant. Les abrâr sont les vertueux qui seront récompensés. La vraie piété est actes et croyance."},
    {sense:'être pieux',concept:'Preuve/Piété',description:''},
    {sense:'bonté',concept:'Preuve/Piété',description:''},
  ])
  log(r,'brh',{'Preuve/Piété':"Établir ou être vertueux. La piété n'est pas les directions. Les abrâr récompensés."})

  // 972. twf (طوف) — tourner autour, tawâf
  r = await ins('twf', [
    {sense:'tourner autour',concept:'Circumambulation/Visite',description:"Faire le tour de quelque chose — tourner (tâfa) autour de la Kaaba est un rite. C'est directionnel (circulaire) et ponctuel comme acte. Qu'ils tournent (yattawwafû) autour de la Maison antique. Le tawâf est la circumambulation rituelle. Le tâ'if est celui qui tourne. Tourner autour de la Maison c'est graviter autour du centre sacré, comme les astres autour de leur soleil."},
    {sense:'tawâf',concept:'Circumambulation/Visite',description:''},
    {sense:'circuler',concept:'Circumambulation/Visite',description:''},
  ])
  log(r,'twf',{'Circumambulation/Visite':"Faire le tour. Qu'ils tournent autour de la Maison. Graviter autour du centre."})

  // 973. ekf (عكف) — s'attacher, retraite
  r = await ins('ekf', [
    {sense:'s\'attacher',concept:'Retraite/Attachement',description:"Rester assidûment en un lieu — s'attacher ('akafa) c'est se consacrer à quelque chose. C'est permanent comme état. Ceux qui font retraite ('âkifûn) dans les mosquées. L'i'tikâf est la retraite spirituelle dans la mosquée, particulièrement les dix derniers jours de Ramadan. Le 'âkif se retire du monde pour se consacrer à Dieu. L'attachement peut être bon (à Dieu) ou mauvais (aux idoles)."},
    {sense:'retraite',concept:'Retraite/Attachement',description:''},
    {sense:'se consacrer',concept:'Retraite/Attachement',description:''},
  ])
  log(r,'ekf',{'Retraite/Attachement':"Rester assidûment. Ceux qui font retraite. L'i'tikâf: se consacrer à Dieu."})

  // 974. rke (ركع) — s'incliner, génuflexion
  r = await ins('rke', [
    {sense:'s\'incliner',concept:'Inclinaison/Prière',description:"Courber le dos en signe de soumission — s'incliner (raka'a) est un pilier de la prière. C'est ponctuel comme mouvement et permanent comme pratique. Inclinez-vous (irka'û) avec ceux qui s'inclinent. Le rukû' est la génuflexion dans la prière, où l'on courbe le dos mains sur les genoux. Le râki' est celui qui s'incline. L'inclinaison exprime la soumission du corps à Dieu, préparant la prosternation."},
    {sense:'génuflexion',concept:'Inclinaison/Prière',description:''},
    {sense:'rukû\'',concept:'Inclinaison/Prière',description:''},
  ])
  log(r,'rke',{'Inclinaison/Prière':"Courber le dos. Inclinez-vous avec ceux qui s'inclinent. Soumission du corps."})

  // 975. bld (بلد) — pays, cité
  r = await ins('bld', [
    {sense:'pays',concept:'Territoire/Cité',description:"Étendue de terre habitée — le pays (balad) est le territoire où vit une communauté. C'est permanent comme entité géographique. Ce pays (al-balad) sûr, La Mecque. La Mecque est le balad al-amîn, la cité sécurisée. Les buldân sont les pays, les régions. Chaque balad a ses caractéristiques et son histoire. La cité sacrée est le centre vers lequel on se tourne."},
    {sense:'cité',concept:'Territoire/Cité',description:''},
    {sense:'contrée',concept:'Territoire/Cité',description:''},
  ])
  log(r,'bld',{'Territoire/Cité':"Terre habitée. Ce pays sûr, La Mecque. Centre vers lequel on se tourne."})

  console.log('\n=== Batch 140 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
