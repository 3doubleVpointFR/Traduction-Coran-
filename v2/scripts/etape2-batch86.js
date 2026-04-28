const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 689, total = 2321

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

  // 695. jyy (جيء) — venir, apporter
  r = await ins('jyy', [
    {sense:'venir',concept:'Venue/Apport',description:"Se déplacer vers un lieu ou une personne — venir (jâ'a/yajî'u) est directionnel vers le but. C'est ponctuel comme événement. Quand viendra (jâ'a) le secours de Dieu et la victoire. Le Jour où viendront les signes de ton Seigneur. Venir c'est aussi apporter : il est venu avec la vérité. La venue implique l'arrivée d'une réalité nouvelle."},
    {sense:'apporter',concept:'Venue/Apport',description:''},
    {sense:'arriver',concept:'Venue/Apport',description:''},
  ])
  log(r,'jyy',{'Venue/Apport':"Se déplacer vers. Quand viendra le secours. Apporter une réalité nouvelle."})

  // 696. kwd (كود) — être sur le point de, presque
  r = await ins('kwd', [
    {sense:'être sur le point de',concept:'Imminence/Proximité',description:"État de ce qui va se produire sans s'être encore produit — kâda/yakâdu marque l'imminence. C'est ponctuel comme moment de bascule. Le ciel est sur le point (takâdu) de se fendre. L'huile brillerait presque (yakâdu) même sans feu. Kâda exprime la proximité extrême d'un événement qui n'a pas encore basculé dans l'être."},
    {sense:'presque',concept:'Imminence/Proximité',description:''},
    {sense:'faillir',concept:'Imminence/Proximité',description:''},
  ])
  log(r,'kwd',{'Imminence/Proximité':"Ce qui va se produire. Le ciel sur le point de se fendre. Proximité extrême."})

  // 697. dwr (دور) — tourner, maison
  r = await ins('dwr', [
    {sense:'tourner',concept:'Cycle/Rotation',description:"Mouvement circulaire qui revient sur lui-même — tourner (dâra/yadûru) est le mouvement qui n'a ni début ni fin apparents. C'est cyclique et répétitif. Les yeux qui tournent (tadûru) comme celui qu'atteint la mort. La dawla est le cycle du pouvoir qui passe d'un groupe à l'autre. Le dâ'ira (cercle/malheur) est ce qui entoure et enferme."},
    {sense:'cercle',concept:'Cycle/Rotation',description:''},
    {sense:'maison',concept:'Demeure',description:"Lieu où l'on habite — la dâr est la demeure, l'habitation permanente. Dâr as-salâm (la demeure de paix) est le Paradis. Dâr al-bawâr est la demeure de perdition. La maison terrestre est éphémère, seule la demeure de l'au-delà est vraiment permanente."},
    {sense:'demeure',concept:'Demeure',description:''},
  ])
  log(r,'dwr',{'Cycle/Rotation':"Mouvement circulaire. Les yeux qui tournent. La dawla passe.",'Demeure':"Lieu d'habitation. Dâr as-salâm. Demeure de l'au-delà."})

  // 698. aay (آيت) — signes, versets (pluriel)
  r = await ins('aay', [
    {sense:'signes',concept:'Signe/Manifestation',description:"Les preuves de la puissance divine — les âyât sont les signes que Dieu place dans la création et la révélation. C'est permanent comme témoignage. Dans la création il y a des signes (âyât) pour ceux qui réfléchissent. Les versets du Coran sont des âyât, tout comme les miracles des prophètes. Le signe appelle à reconnaître Celui qui l'a posé."},
    {sense:'versets',concept:'Signe/Manifestation',description:''},
    {sense:'preuves',concept:'Signe/Manifestation',description:''},
  ])
  log(r,'aay',{'Signe/Manifestation':"Preuves divines. Des signes pour ceux qui réfléchissent. Versets et miracles."})

  // 699. tmae (طمع) — convoiter, espérer
  r = await ins('tmae', [
    {sense:'convoiter',concept:'Désir/Espérance',description:"Désirer ardemment obtenir quelque chose — convoiter (tami'a/yatma'u) est l'aspiration vers ce qu'on n'a pas. C'est intérieur comme émotion et directionnel vers l'objet désiré. Ils espèrent (yatma'ûna) en Sa miséricorde. Le tama' peut être positif (espoir en Dieu) ou négatif (avidité pour les biens). L'espérance en Dieu est louable, la convoitise mondaine est blâmable."},
    {sense:'espérer',concept:'Désir/Espérance',description:''},
    {sense:'avidité',concept:'Désir/Espérance',description:''},
  ])
  log(r,'tmae',{'Désir/Espérance':"Aspiration vers l'absent. Ils espèrent en Sa miséricorde. Positif ou négatif."})

  console.log('\n=== Batch 86 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
