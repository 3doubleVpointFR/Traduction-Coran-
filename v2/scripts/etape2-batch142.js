const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 962, total = 2321

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

  // 982. qwe (قوع) — tomber, se produire
  r = await ins('qwe', [
    {sense:'tomber',concept:'Chute/Occurrence',description:"Se produire, advenir — tomber (waqa'a) c'est se passer, avoir lieu. C'est ponctuel comme événement. Quand l'Événement (al-wâqi'a) se produira. La wâqi'a est l'événement inéluctable, le Jour du Jugement. Waqa'a peut être chute physique ou occurrence d'un fait. Ce qui tombe advient nécessairement. L'Heure tombera sur les impréparés."},
    {sense:'se produire',concept:'Chute/Occurrence',description:''},
    {sense:'advenir',concept:'Chute/Occurrence',description:''},
  ])
  log(r,'qwe',{'Chute/Occurrence':"Se passer. Quand l'Événement se produira. L'Heure sur les impréparés."})

  // 983. shq (صحق) — écraser, réduire en poudre
  r = await ins('shq', [
    {sense:'écraser',concept:'Écrasement/Pulvérisation',description:"Réduire à l'état de poussière — écraser (sahq) c'est broyer complètement. C'est ponctuel et destructeur. La montagne sera écrasée (dakkâ). L'écrasement total ne laisse rien de reconnaissable. Le sahq est la réduction à néant. Au Jour du Jugement, les montagnes seront réduites en poussière dispersée. Ce qui semblait éternel sera pulvérisé."},
    {sense:'broyer',concept:'Écrasement/Pulvérisation',description:''},
    {sense:'pulvériser',concept:'Écrasement/Pulvérisation',description:''},
  ])
  log(r,'shq',{'Écrasement/Pulvérisation':"Réduire en poussière. La montagne écrasée. Ce qui semblait éternel pulvérisé."})

  // 984. shyntn / štn (شيطن) — Satan, démon
  r = await ins('shyntn', [
    {sense:'Satan',concept:'Démoniaque/Tentation',description:"L'ennemi éternel de l'homme — Satan (Shaytân) est le tentateur. C'est permanent comme entité. Satan (al-Shaytân) est pour vous un ennemi. L'inimitié est déclarée et définitive. Les shayâtîn sont les démons, de jinn ou d'hommes. Ils inspirent le mal et embellissent le péché. Se réfugier auprès de Dieu contre Satan est protection nécessaire. L'ennemi guette chaque moment de faiblesse."},
    {sense:'démon',concept:'Démoniaque/Tentation',description:''},
    {sense:'diable',concept:'Démoniaque/Tentation',description:''},
  ])
  log(r,'shyntn',{'Démoniaque/Tentation':"L'ennemi éternel. Satan est pour vous ennemi. Se réfugier auprès de Dieu."})

  // Variante štn
  r = await ins('štn', [
    {sense:'Satan',concept:'Démoniaque/Tentation',description:"Skip si déjà fait comme shyntn."},
  ])

  // 985. zlk (ذلك) — cela (variante de dlk)
  r = await ins('zlk', [
    {sense:'cela',concept:'Démonstration/Distance',description:"Skip si déjà fait comme dlk."},
  ])

  // 986. ryy (ريي) — voir, opinion
  r = await ins('ryy', [
    {sense:'voir',concept:'Vision/Opinion',description:"Percevoir par les yeux ou l'esprit — voir (ra'â) est perception et jugement. C'est ponctuel comme acte de voir et permanent comme opinion. N'as-tu pas vu (alam tara) comment ton Seigneur a fait ? La vision conduit à la réflexion. Le ra'y est l'opinion, le jugement personnel. La ru'ya est la vision, y compris le rêve. Voir les signes mène à croire."},
    {sense:'opinion',concept:'Vision/Opinion',description:''},
    {sense:'rêve',concept:'Vision/Opinion',description:''},
  ])
  log(r,'ryy',{'Vision/Opinion':"Percevoir. N'as-tu pas vu comment? Voir les signes mène à croire."})

  // 987. shay (شأي) — chose (variante)
  r = await ins('shay', [
    {sense:'chose',concept:'Entité',description:"Skip si variante de shay'/šyya."},
  ])

  // 988. sghy (صغي) — petit, pencher
  r = await ins('sghy', [
    {sense:'petit',concept:'Petitesse/Inclinaison',description:"De taille ou d'importance réduite — le petit (saghîr) est ce qui est de moindre dimension. C'est permanent comme caractéristique. Petit (saghîr) ou grand. Les péchés sont comptés, petits et grands. Le tasghîr est le diminutif. L'oreille qui s'incline (tasgha) vers quelque chose écoute avec attention. Le petit peut être précieux et le grand vain."},
    {sense:'pencher',concept:'Petitesse/Inclinaison',description:''},
  ])
  log(r,'sghy',{'Petitesse/Inclinaison':"De moindre dimension. Petit ou grand comptés. Le petit peut être précieux."})

  // 989. qrf (قرف) — cueillir, à portée
  r = await ins('qrf', [
    {sense:'cueillir',concept:'Proximité/Cueillette',description:"Prendre ce qui est à portée — cueillir (qatafa) c'est récolter ce qui est proche. C'est ponctuel comme acte. Ses fruits (qutûfuhâ) sont à portée. Au Paradis, les fruits s'offrent sans effort. Le qatf est la cueillette facile. Ce qui est dâniya (proche) se cueille aisément. La générosité divine met les bienfaits à portée de main."},
    {sense:'récolter',concept:'Proximité/Cueillette',description:''},
    {sense:'à portée',concept:'Proximité/Cueillette',description:''},
  ])
  log(r,'qrf',{'Proximité/Cueillette':"Prendre ce qui est proche. Fruits à portée au Paradis. Sans effort."})

  // 990. dyq (ضيق) — étroitesse, angoisse
  r = await ins('dyq', [
    {sense:'étroitesse',concept:'Constriction/Angoisse',description:"Manque d'espace ou d'aisance — l'étroitesse (dîq/dayq) est le resserrement. C'est permanent comme état ou ponctuel comme sensation. N'aie pas la poitrine serrée (dayq). L'angoisse resserre la poitrine. Le dayyiq est étroit, resserré. La terre leur sembla étroite malgré sa vastitude. L'étroitesse spirituelle est pire que l'étroitesse physique. L'opposé est le shar (l'ouverture)."},
    {sense:'angoisse',concept:'Constriction/Angoisse',description:''},
    {sense:'resserré',concept:'Constriction/Angoisse',description:''},
  ])
  log(r,'dyq',{'Constriction/Angoisse':"Manque d'espace. N'aie pas la poitrine serrée. L'étroitesse spirituelle pire."})

  console.log('\n════════════════════════════════════════════════════════════')
  console.log('=== TRAITEMENT TERMINÉ — ' + done + ' racines traitées ===')
  console.log('════════════════════════════════════════════════════════════')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
