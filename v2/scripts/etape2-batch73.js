const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 626, total = 2321

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

  // 632. shfy (شفي) — guérir
  r = await ins('shfy', [
    {sense:'guérir',concept:'Guérison/Remède',description:"Rétablir la santé — guérir (shafâ/yashfî) est directionnel vers le bien-être. C'est ponctuel dans l'acte mais permanent dans le résultat. Ce Coran est une guérison (shifâ') pour ce qui est dans les poitrines. La guérison divine touche les cœurs malades de doute et les corps atteints de maladie."},
    {sense:'soigner',concept:'Guérison/Remède',description:''},
    {sense:'remède',concept:'Guérison/Remède',description:''},
  ])
  log(r,'shfy',{'Guérison/Remède':"Rétablir la santé. Le Coran est guérison pour les poitrines. Cœurs et corps."})

  // 633. hfd (حفد) — petits-enfants, servir
  r = await ins('hfd', [
    {sense:'petits-enfants',concept:'Descendance/Service',description:"Les enfants des enfants — les petits-enfants (hafada) sont la continuation de la lignée. C'est permanent comme lien familial. Dieu vous a donné de vos épouses des enfants et des petits-enfants (hafada). La descendance est un bienfait de Dieu qui prolonge l'existence à travers les générations."},
    {sense:'descendants',concept:'Descendance/Service',description:''},
    {sense:'serviteurs',concept:'Descendance/Service',description:''},
  ])
  log(r,'hfd',{'Descendance/Service':"Enfants des enfants. Dieu donne enfants et petits-enfants. Bienfait prolongé."})

  // 634. jww (جوو) — air, atmosphère
  r = await ins('jww', [
    {sense:'air',concept:'Espace aérien',description:"L'étendue au-dessus de la terre — l'air (jaww) est l'espace où volent les oiseaux. C'est permanent comme milieu. Les oiseaux maintenus (musakhkharât) dans l'air (jaww) du ciel. Rien ne les maintient sinon Dieu. L'espace aérien vide témoigne de la puissance qui maintient les oiseaux en vol."},
    {sense:'atmosphère',concept:'Espace aérien',description:''},
    {sense:'ciel',concept:'Espace aérien',description:''},
  ])
  log(r,'jww',{'Espace aérien':"Étendue au-dessus. Oiseaux maintenus dans l'air. Rien ne les maintient sinon Dieu."})

  // 635. zen (ظعن) — voyager, se déplacer
  r = await ins('zen', [
    {sense:'voyager',concept:'Déplacement/Nomadisme',description:"Se déplacer d'un lieu à un autre — voyager (za'ana) est le mouvement des nomades et des voyageurs. C'est ponctuel dans chaque départ mais peut être un mode de vie. Des maisons légères (buyût) pour vos déplacements (za'n) et vos haltes. La vie du voyageur est faite d'étapes et de repos."},
    {sense:'se déplacer',concept:'Déplacement/Nomadisme',description:''},
    {sense:'monture',concept:'Déplacement/Nomadisme',description:''},
  ])
  log(r,'zen',{'Déplacement/Nomadisme':"Se déplacer. Maisons pour déplacements et haltes. Vie d'étapes et repos."})

  // 636. thwth (ثوث) — vêtement
  r = await ins('thwth', [
    {sense:'vêtement',concept:'Habillement/Protection',description:"Ce qui couvre et protège le corps — le vêtement (thawb) est permanent comme objet nécessaire. Nous avons fait descendre sur vous un vêtement qui couvre vos parties honteuses et une parure. Le vêtement de la piété (libâs at-taqwâ) est le meilleur. Le vêtement extérieur symbolise le vêtement intérieur de la vertu."},
    {sense:'habit',concept:'Habillement/Protection',description:''},
    {sense:'robe',concept:'Habillement/Protection',description:''},
  ])
  log(r,'thwth',{'Habillement/Protection':"Ce qui couvre. Vêtement et parure. Le vêtement de piété est le meilleur."})

  console.log('\n=== Batch 73 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
