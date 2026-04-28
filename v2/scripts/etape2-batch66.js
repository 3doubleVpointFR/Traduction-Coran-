const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 587, total = 2321

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

  // 592. shrb (شرب) — boire
  r = await ins('shrb', [
    {sense:'boire',concept:'Absorption/Consommation',description:"Faire entrer un liquide dans le corps — boire (shariba) est l'acte vital d'absorber l'eau ou une boisson. C'est directionnel vers l'intérieur du corps. Mangez et buvez de la provision de Dieu ! Ceux qui ont adoré le veau en ont bu dans leurs cœurs. Boire peut être physique ou symbolique."},
    {sense:'absorber',concept:'Absorption/Consommation',description:''},
    {sense:'boisson',concept:'Absorption/Consommation',description:''},
    {sense:'abreuvoir',concept:'Lieu de boisson',description:"Lieu où l'on boit — le mashraba est l'endroit où l'on s'abreuve."},
  ])
  log(r,'shrb',{'Absorption/Consommation':"Faire entrer le liquide. Mangez et buvez ! Peut être physique ou symbolique.",'Lieu de boisson':"Endroit où l'on s'abreuve."})

  // 593. ethw (عثو) — corrompre, semer le désordre
  r = await ins('ethw', [
    {sense:'corrompre',concept:'Corruption/Désordre',description:"Causer du mal sur terre — corrompre ('athâ/ya'thû) c'est semer le désordre dans la création. C'est directionnel contre l'ordre établi par Dieu. Ne corrompez pas sur terre après qu'elle a été réformée ! La corruption morale détruit les sociétés et attire le châtiment divin."},
    {sense:'semer le désordre',concept:'Corruption/Désordre',description:''},
    {sense:'faire du mal',concept:'Corruption/Désordre',description:''},
  ])
  log(r,'ethw',{'Corruption/Désordre':"Semer le mal sur terre. Ne corrompez pas ! Attire le châtiment."})

  // 594. dhw (ذور) — disperser, semer
  r = await ins('dhw', [
    {sense:'disperser',concept:'Dispersion/Semence',description:"Éparpiller en différentes directions — disperser (dhara/yadhru) est directionnel depuis un centre vers la périphérie. Dieu a dispersé en vous de nombreuses bêtes. La dispersion peut être bénédiction (multiplication des créatures) ou châtiment (éparpillement des mécréants)."},
    {sense:'semer',concept:'Dispersion/Semence',description:''},
    {sense:'répandre',concept:'Dispersion/Semence',description:''},
    {sense:'descendance',concept:'Postérité',description:"Les enfants répandus sur terre — la dhurriyya est la descendance semée par Dieu."},
  ])
  log(r,'dhw',{'Dispersion/Semence':"Éparpiller. Dieu a dispersé de nombreuses bêtes. Bénédiction ou châtiment.",'Postérité':"Descendance semée par Dieu."})

  // 595. esy (عصي) — désobéir
  r = await ins('esy', [
    {sense:'désobéir',concept:'Rébellion/Péché',description:"Refuser d'obéir à un ordre — désobéir ('asâ) c'est se rebeller contre l'autorité légitime. C'est ponctuel dans l'acte mais grave dans ses conséquences. Adam désobéit à son Seigneur et s'égara. La désobéissance rompt le lien de soumission due à Dieu. Quiconque désobéit à Dieu et à Son messager..."},
    {sense:'se rebeller',concept:'Rébellion/Péché',description:''},
    {sense:'pécher',concept:'Rébellion/Péché',description:''},
  ])
  log(r,'esy',{'Rébellion/Péché':"Refuser d'obéir. Adam désobéit et s'égara. Rompt le lien de soumission."})

  // 596. nkl (نكل) — châtiment, entraves
  r = await ins('nkl', [
    {sense:'châtiment',concept:'Punition exemplaire',description:"Peine qui sert d'exemple aux autres — le nakâl est le châtiment dissuasif qui fait réfléchir. C'est permanent comme leçon. Nous en avons fait un exemple (nakâlan) pour leurs contemporains et leurs successeurs. Le châtiment exemplaire vise à prévenir le mal en frappant les esprits."},
    {sense:'exemple dissuasif',concept:'Punition exemplaire',description:''},
    {sense:'entraves',concept:'Liens/Chaînes',description:"Ce qui lie et empêche de bouger — les ankâl sont les chaînes et les fers de l'enfer."},
  ])
  log(r,'nkl',{'Punition exemplaire':"Peine dissuasive. Un exemple pour leurs contemporains. Prévenir le mal.",'Liens/Chaînes':"Chaînes et fers de l'enfer."})

  // 597. ydy (يدي) — main
  r = await ins('ydy', [
    {sense:'main',concept:'Action/Pouvoir',description:"Membre du corps qui saisit et agit — la main (yad) est l'instrument de l'action. C'est permanent comme partie du corps. Les deux mains de Dieu sont ouvertes, Il dépense comme Il veut. La main symbolise le pouvoir et la générosité. Ce que vos mains ont acquis. La main droite est honorable."},
    {sense:'pouvoir',concept:'Action/Pouvoir',description:''},
    {sense:'bienfait',concept:'Action/Pouvoir',description:''},
    {sense:'devant',concept:'Antériorité',description:"Ce qui est en avant — bayna yadayhi signifie devant lui, ce qui précède."},
  ])
  log(r,'ydy',{'Action/Pouvoir':"Instrument de l'action. Les mains de Dieu ouvertes. Ce que vos mains ont acquis.",'Antériorité':"Devant. Ce qui précède."})

  console.log('\n=== Batch 66 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
