const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 575, total = 2321

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

  // 580. tem (طعم) — goût, nourriture
  r = await ins('tem', [
    {sense:'goût',concept:'Gustation/Nourriture',description:"La saveur perçue par la langue — le goût (ta'm) est la qualité sensorielle des aliments. C'est intérieur comme perception. Des fleuves dont l'eau ne change pas de goût. La nourriture (ta'âm) est ce qui sustente le corps. Nourrir le pauvre est un acte de piété recommandé."},
    {sense:'nourriture',concept:'Gustation/Nourriture',description:''},
    {sense:'manger',concept:'Gustation/Nourriture',description:''},
    {sense:'saveur',concept:'Gustation/Nourriture',description:''},
  ])
  log(r,'tem',{'Gustation/Nourriture':"Saveur perçue. Fleuves dont l'eau garde son goût. Nourrir le pauvre."})

  // 581. whd (وحد) — un, unique
  r = await ins('whd', [
    {sense:'un',concept:'Unicité/Unité',description:"Le nombre premier, ce qui n'est pas multiple — un (wâhid) est permanent comme qualité de ce qui est unique. Votre Dieu est un Dieu unique (ilâhun wâhid). L'unicité divine (tawhîd) est le fondement de l'islam. Il n'y a de dieu que Dieu, seul, sans associé. L'Un n'a pas de semblable."},
    {sense:'unique',concept:'Unicité/Unité',description:''},
    {sense:'seul',concept:'Unicité/Unité',description:''},
    {sense:'unifier',concept:'Unicité/Unité',description:''},
  ])
  log(r,'whd',{'Unicité/Unité':"Le nombre premier. Votre Dieu est unique. Fondement de l'islam. Sans associé."})

  // 582. nbt (نبت) — pousser, végétation
  r = await ins('nbt', [
    {sense:'pousser',concept:'Croissance végétale',description:"Sortir de terre et grandir vers le haut — pousser (nabata) est le mouvement de la graine qui germe. C'est directionnel de bas en haut. Nous avons fait pousser pour lui un arbre de courge. La végétation qui pousse après la pluie est signe de résurrection. La croissance est signe de vie."},
    {sense:'faire germer',concept:'Croissance végétale',description:''},
    {sense:'végétation',concept:'Croissance végétale',description:''},
    {sense:'plante',concept:'Croissance végétale',description:''},
  ])
  log(r,'nbt',{'Croissance végétale':"La graine qui germe. Un arbre pour Jonas. Signe de résurrection."})

  // 583. bql (بقل) — légumes verts
  r = await ins('bql', [
    {sense:'légumes verts',concept:'Végétaux comestibles',description:"Plantes potagères qu'on mange — les légumes (baql) sont les herbes comestibles cultivées. Les Israélites demandèrent des légumes, des concombres, de l'ail et des oignons à la place de la manne. Préférer le terrestre au céleste est un signe de bassesse d'âme."},
    {sense:'herbes',concept:'Végétaux comestibles',description:''},
    {sense:'verdure',concept:'Végétaux comestibles',description:''},
  ])
  log(r,'bql',{'Végétaux comestibles':"Plantes potagères. Les Israélites demandèrent des légumes. Préférer le terrestre."})

  // 584. qtha (قثء) — concombre
  r = await ins('qtha', [
    {sense:'concombre',concept:'Légume/Désir terrestre',description:"Plante potagère au fruit allongé et frais — le concombre (qiththâ') fait partie des légumes demandés par les Israélites qui se lassaient de la manne céleste. C'est permanent comme espèce végétale. La demande de concombres symbolise l'attachement aux plaisirs de la terre au détriment des dons divins."},
    {sense:'courge',concept:'Légume/Désir terrestre',description:''},
  ])
  log(r,'qtha',{'Légume/Désir terrestre':"Fruit frais. Demandé par les Israélites. Attachement aux plaisirs terrestres."})

  // 585. fwm (فوم) — ail, blé
  r = await ins('fwm', [
    {sense:'ail',concept:'Condiment/Terrestre',description:"Plante à bulbe au goût fort — l'ail (fûm) est l'un des aliments demandés par les Israélites dans le désert. Certains commentateurs y voient le blé. Les enfants d'Israël préféraient l'ail de l'Égypte à la nourriture céleste, révélant leur attachement au monde qu'ils avaient quitté."},
    {sense:'blé',concept:'Condiment/Terrestre',description:''},
  ])
  log(r,'fwm',{'Condiment/Terrestre':"Plante à goût fort. Demandé au lieu de la manne. Attachement à l'Égypte."})

  console.log('\n=== Batch 64 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
