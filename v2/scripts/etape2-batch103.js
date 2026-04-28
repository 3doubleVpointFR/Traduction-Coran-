const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 769, total = 2321

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

  // 781. njy (نجو) — sauver, échapper
  r = await ins('njy', [
    {sense:'sauver',concept:'Salut/Délivrance',description:"Faire échapper au danger — sauver (najjâ/yunjî) est l'action de délivrer du péril. C'est directionnel vers la sécurité. Nous l'avons sauvé (najjaynâhu) ainsi que sa famille. La najât est le salut, l'échappement au malheur. L'istinjâ' est l'appel au secours. Le salut ultime est d'échapper au Feu pour entrer au Paradis."},
    {sense:'échapper',concept:'Salut/Délivrance',description:''},
    {sense:'délivrer',concept:'Salut/Délivrance',description:''},
  ])
  log(r,'njy',{'Salut/Délivrance':"Faire échapper au danger. Nous l'avons sauvé. Échapper au Feu."})

  // 782. afl (أفل) — décliner, se coucher (astre)
  r = await ins('afl', [
    {sense:'décliner',concept:'Déclin/Disparition',description:"Descendre sous l'horizon — décliner (afala) est le mouvement de l'astre qui se couche. C'est directionnel vers le bas et le caché. Quand il vit le soleil se coucher (âfilan), il dit : je n'aime pas ceux qui déclinent. Abraham rejette ce qui disparaît comme divinité. Seul ce qui ne décline jamais mérite l'adoration. Le déclin est signe de finitude."},
    {sense:'se coucher',concept:'Déclin/Disparition',description:''},
    {sense:'disparaître',concept:'Déclin/Disparition',description:''},
  ])
  log(r,'afl',{'Déclin/Disparition':"Descendre sous l'horizon. Je n'aime pas ceux qui déclinent. Signe de finitude."})

  // 783. asf (أسف) — regretter, affliger
  r = await ins('asf', [
    {sense:'regretter',concept:'Regret/Affliction',description:"Éprouver de la tristesse pour ce qui est passé — le asaf est le regret mêlé de colère ou de tristesse. C'est intérieur comme émotion. Quand ils Nous eurent irrités (âsafûnâ), Nous Nous vengeâmes. Le ya asafâ est l'exclamation de douleur. Jacob dit : quelle affliction (asafâ) pour Joseph ! Le regret peut être stérile ou conduire au repentir."},
    {sense:'affliger',concept:'Regret/Affliction',description:''},
    {sense:'irriter',concept:'Regret/Affliction',description:''},
  ])
  log(r,'asf',{'Regret/Affliction':"Tristesse du passé. Quand ils Nous irritèrent. Affliction pour Joseph."})

  // 784. sam (سأم) — être las, ennui
  r = await ins('sam', [
    {sense:'être las',concept:'Lassitude/Ennui',description:"Perdre l'enthousiasme par la répétition — la lassitude (sa'âma/yasa'amu) est l'épuisement moral face à ce qui dure. C'est intérieur et progressif. Les anges ne se lassent pas (lâ yas'amûna) de glorifier Dieu. L'homme se lasse vite de demander le bien, puis se décourage si le mal le touche. Dieu ne se lasse pas tant que vous ne vous lassez pas."},
    {sense:'ennui',concept:'Lassitude/Ennui',description:''},
    {sense:'lassitude',concept:'Lassitude/Ennui',description:''},
  ])
  log(r,'sam',{'Lassitude/Ennui':"Perdre l'enthousiasme. Les anges ne se lassent pas. L'homme se lasse vite."})

  // 785. šmt (شمت) — se réjouir du malheur
  r = await ins('šmt', [
    {sense:'se réjouir du malheur',concept:'Malveillance/Joie mauvaise',description:"Éprouver du plaisir devant l'infortune d'autrui — la shamâta est la joie mauvaise face au malheur de l'ennemi. C'est intérieur mais blâmable. Ne fais pas que les ennemis se réjouissent (lâ tushmit) de moi. Demander à Dieu de ne pas être source de joie pour l'ennemi. La shamâta est le contraire de la compassion, c'est un défaut moral grave."},
    {sense:'joie mauvaise',concept:'Malveillance/Joie mauvaise',description:''},
  ])
  log(r,'šmt',{'Malveillance/Joie mauvaise':"Plaisir du malheur d'autrui. Ne fais pas qu'ils se réjouissent. Défaut moral."})

  console.log('\n=== Batch 103 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
