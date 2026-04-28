const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 803, total = 2321

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

  // 816. kshe (خشع) — être humble, s'humilier
  r = await ins('kshe', [
    {sense:'être humble',concept:'Humilité/Soumission',description:"Se soumettre avec crainte et respect — la khushû' est l'humilité profonde devant Dieu. C'est intérieur (cœur) et extérieur (posture). Ceux qui sont humbles (khâshi'în) dans leur prière. La khushû' est le contraire de l'orgueil et de la distraction. Elle implique concentration, crainte révérencielle et reconnaissance de sa faiblesse devant la grandeur divine."},
    {sense:'humilité',concept:'Humilité/Soumission',description:''},
    {sense:'recueillement',concept:'Humilité/Soumission',description:''},
  ])
  log(r,'kshe',{'Humilité/Soumission':"Se soumettre avec respect. Les khâshi'în dans leur prière. Contraire de l'orgueil."})

  // 817. diar (دير) — variante de dyr déjà traité
  r = await ins('diar', [
    {sense:'monastère',concept:'Lieu',description:"Skip si déjà fait comme dyr."},
  ])

  // 818. lyt (ليت) — plût à Dieu, si seulement
  r = await ins('lyt', [
    {sense:'si seulement',concept:'Souhait/Regret',description:"Expression du souhait irréalisable — layta exprime le désir de ce qui ne peut être. C'est intérieur comme sentiment et permanent comme regret. Si seulement (laytanî) j'avais présenté pour ma vie ! Le souhait vain du Jour du Jugement. Layta marque souvent le regret de ce qui aurait dû être fait mais ne l'a pas été. C'est le vœu impossible."},
    {sense:'plût à Dieu',concept:'Souhait/Regret',description:''},
    {sense:'ah si',concept:'Souhait/Regret',description:''},
  ])
  log(r,'lyt',{'Souhait/Regret':"Désir de l'irréalisable. Si seulement j'avais présenté ! Regret du Jour."})

  // 819. brj (برج) — tour, constellation
  r = await ins('brj', [
    {sense:'tour',concept:'Élévation/Zodiaque',description:"Construction élevée ou position céleste — le burj est la tour fortifiée ou la constellation du zodiaque. C'est permanent comme structure. Même si vous étiez dans des tours (burûj) imprenables. Les burûj du ciel sont les constellations. Le ciel aux constellations (dhât al-burûj). L'élévation terrestre ne protège pas de la mort, les constellations célestes ordonnent le cosmos."},
    {sense:'constellation',concept:'Élévation/Zodiaque',description:''},
    {sense:'forteresse',concept:'Élévation/Zodiaque',description:''},
  ])
  log(r,'brj',{'Élévation/Zodiaque':"Tour ou constellation. Même dans des tours imprenables. Ciel aux burûj."})

  // 820. keb (كعب) — cheville, Kaaba
  r = await ins('keb', [
    {sense:'cheville',concept:'Articulation/Cube',description:"Partie du pied ou construction cubique — le ka'b est la cheville, l'os saillant du pied. C'est permanent comme partie du corps. Lavez vos pieds jusqu'aux chevilles (ka'bayn). La Ka'ba est la Maison cubique de Dieu à La Mecque. La forme cubique donne stabilité et centralité. Les chevilles et la Ka'ba partagent l'idée de pivot, de point d'ancrage."},
    {sense:'Kaaba',concept:'Articulation/Cube',description:''},
    {sense:'cube',concept:'Articulation/Cube',description:''},
  ])
  log(r,'keb',{'Articulation/Cube':"Cheville ou cube. Lavez jusqu'aux chevilles. La Ka'ba: Maison cubique."})

  // 821. xwl (خول) — accorder, serviteur
  r = await ins('xwl', [
    {sense:'accorder',concept:'Don/Service',description:"Donner généreusement — accorder (khawwala) c'est gratifier quelqu'un d'un bienfait. Après que Nous lui avons accordé (khawwalnâhu) une grâce de Notre part. Le khawl peut aussi être le serviteur, celui qui sert. La grâce accordée implique reconnaissance. Celui qui reçoit doit remercier et servir le donneur par gratitude."},
    {sense:'gratifier',concept:'Don/Service',description:''},
    {sense:'serviteur',concept:'Don/Service',description:''},
  ])
  log(r,'xwl',{'Don/Service':"Donner généreusement. Après que Nous lui avons accordé. Gratitude requise."})

  console.log('\n=== Batch 110 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
