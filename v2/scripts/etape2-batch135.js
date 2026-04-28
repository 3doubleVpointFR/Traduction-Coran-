const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 926, total = 2321

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
  r = await ins("awy", [{sense:'refuge',concept:'Refuge',description:"Skip si déjà fait."}])

  // 945. lhw (لهو) — distraction, divertissement
  r = await ins('lhw', [
    {sense:'distraction',concept:'Divertissement/Oubli',description:"Ce qui détourne de l'essentiel — la distraction (lahw) éloigne de Dieu. C'est permanent comme piège et ponctuel comme tentation. La vie d'ici-bas n'est que jeu (la'ib) et distraction (lahw). Le lahw détourne du souvenir de Dieu, de la prière, de l'au-delà. Le lâhî est celui qui s'amuse, distrait de ce qui compte. Le lahw n'est pas interdit en soi mais dangereux s'il devient fin."},
    {sense:'divertissement',concept:'Divertissement/Oubli',description:''},
    {sense:'amusement',concept:'Divertissement/Oubli',description:''},
  ])
  log(r,'lhw',{'Divertissement/Oubli':"Ce qui détourne. Vie d'ici-bas jeu et distraction. Dangereux s'il devient fin."})

  // 946. qnt (قنت) — obéir dévotement, être humble
  r = await ins('qnt', [
    {sense:'obéir dévotement',concept:'Dévotion/Humilité',description:"Se soumettre avec ferveur — le qunût est l'obéissance humble et prolongée. C'est intérieur et permanent comme disposition. Dévots (qânitîn) à Dieu. Le qânitât sont les femmes dévotes. Le qunût est aussi l'invocation debout dans la prière. L'obéissance dévote combine soumission, humilité et persévérance. Le qânit reste en prière, concentré sur son Seigneur."},
    {sense:'être humble',concept:'Dévotion/Humilité',description:''},
    {sense:'dévotion',concept:'Dévotion/Humilité',description:''},
  ])
  log(r,'qnt',{'Dévotion/Humilité':"Se soumettre avec ferveur. Dévots à Dieu. Humilité et persévérance."})

  // 947. ḏyn (ذين) — ceux qui (pronom relatif)
  r = await ins('ḏyn', [
    {sense:'ceux qui',concept:'Relation/Désignation',description:"Pronom relatif pluriel — alladhîna désigne un groupe défini par une qualité. C'est permanent comme outil grammatical. Ceux qui (alladhîna) croient et font le bien. Le pronom relie le groupe à son acte définissant. Alladhîna crée des catégories : ceux qui croient vs ceux qui mécroient. L'appartenance se définit par les actes."},
    {sense:'lesquels',concept:'Relation/Désignation',description:''},
  ])
  log(r,'ḏyn',{'Relation/Désignation':"Pronom relatif pluriel. Ceux qui croient et font le bien. L'acte définit."})

  // 948. mna (منع) — empêcher, refuser
  r = await ins('mna', [
    {sense:'empêcher',concept:'Interdiction/Privation',description:"Faire obstacle à quelque chose — empêcher (mana'a) c'est bloquer l'accès ou l'action. C'est ponctuel comme acte. Qui donc empêcherait (yamna'u) que les mosquées soient mentionnées ? Empêcher le culte est un grave péché. Le mâni' est l'obstacle, ce qui empêche. Le man' peut être légitime (protéger du mal) ou illégitime (priver du droit). Dieu seul peut vraiment empêcher."},
    {sense:'refuser',concept:'Interdiction/Privation',description:''},
    {sense:'priver',concept:'Interdiction/Privation',description:''},
  ])
  log(r,'mna',{'Interdiction/Privation':"Faire obstacle. Qui empêcherait les mosquées? Seul Dieu peut vraiment empêcher."})

  // 949. sey (سعي) — s'efforcer, marcher
  r = await ins('sey', [
    {sense:'s\'efforcer',concept:'Effort/Marche',description:"Faire des efforts pour atteindre un but — s'efforcer (sa'â) c'est travailler activement. C'est directionnel et peut être ponctuel ou permanent. Et que l'homme n'obtient que ce pourquoi il s'efforce (sa'â). L'effort est récompensé. Le sa'y est aussi la marche entre Safâ et Marwa au pèlerinage. Le mas'â est le lieu de l'effort. Chaque sa'y vers le bien sera pesé."},
    {sense:'marcher',concept:'Effort/Marche',description:''},
    {sense:'travailler',concept:'Effort/Marche',description:''},
  ])
  log(r,'sey',{'Effort/Marche':"Travailler activement. L'homme n'obtient que son effort. Sa'y entre Safâ et Marwa."})

  console.log('\n=== Batch 135 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
