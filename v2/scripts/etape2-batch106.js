const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 783, total = 2321

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

  // 796. hthth (حثث) — hâter, presser
  r = await ins('hthth', [
    {sense:'hâter',concept:'Empressement/Urgence',description:"Pousser à agir vite — hâter (haththa) c'est inciter à la rapidité. C'est directionnel vers l'action immédiate. Il incite (yahuthth) à nourrir le pauvre. La hâte louable est celle qui pousse au bien. Le hathîth est l'empressé. L'urgence peut être bonne (empressement vers le bien) ou mauvaise (précipitation irréfléchie)."},
    {sense:'presser',concept:'Empressement/Urgence',description:''},
    {sense:'inciter',concept:'Empressement/Urgence',description:''},
  ])
  log(r,'hthth',{'Empressement/Urgence':"Pousser à agir vite. Il incite à nourrir le pauvre. Hâte vers le bien."})

  // 797. lft (لفت) — détourner, tourner
  r = await ins('lft', [
    {sense:'détourner',concept:'Détournement/Distraction',description:"Faire se tourner vers autre chose — détourner (lafata) c'est changer la direction de l'attention. C'est directionnel vers l'ailleurs. Ne te détourne pas (lâ taltafit) vers eux. Quitter le chemin droit c'est se laisser détourner. L'iltifât est le fait de se retourner, de regarder en arrière au lieu de poursuivre."},
    {sense:'se retourner',concept:'Détournement/Distraction',description:''},
    {sense:'tourner',concept:'Détournement/Distraction',description:''},
  ])
  log(r,'lft',{'Détournement/Distraction':"Changer la direction. Ne te détourne pas. Regarder en arrière."})

  // 798. dhruw (ذرو) — disperser, atomes
  r = await ins('dhruw', [
    {sense:'disperser',concept:'Dispersion/Particules',description:"Éparpiller en petites parties — disperser (dharâ/yadhru) c'est semer au vent. La dharra est la plus petite particule visible, l'atome. Pas même le poids d'une dharra (atome) ne Lui échappe. La dhurriyya est la descendance, ce qui est semé et dispersé pour peupler. Le vent qui disperse (dhâriyât) est une des forces créées par Dieu."},
    {sense:'atome',concept:'Dispersion/Particules',description:''},
    {sense:'descendance',concept:'Dispersion/Particules',description:''},
  ])
  log(r,'dhruw',{'Dispersion/Particules':"Éparpiller au vent. Pas le poids d'un atome. Dhurriyya: descendance."})

  // 799. šrb (شرب) — boire
  r = await ins('šrb', [
    {sense:'boire',concept:'Ingestion/Breuvage',description:"Faire entrer un liquide dans le corps — boire (shariba) est l'acte d'absorber une boisson. C'est ponctuel et vital. Buvez (ishrabû) de la provision de Dieu. Le sharâb est la boisson, ce qui se boit. Au Paradis, les croyants boiront un vin pur (rahîq). L'alcool est interdit : le vin est œuvre du diable. Le mashrab est le lieu où l'on boit."},
    {sense:'boisson',concept:'Ingestion/Breuvage',description:''},
    {sense:'absorber',concept:'Ingestion/Breuvage',description:''},
  ])
  log(r,'šrb',{'Ingestion/Breuvage':"Absorber un liquide. Buvez de la provision. Vin pur au Paradis."})

  // 800. awt (أوت) — se réfugier, abriter
  r = await ins('awt', [
    {sense:'se réfugier',concept:'Refuge/Protection',description:"Chercher un abri sûr — se réfugier (âwâ/ya'wî) c'est chercher protection. C'est directionnel vers le refuge. Nous leur avons donné refuge (âwaynâhumâ) sur une colline. Le ma'wâ est le refuge, le lieu de repos. Le Feu est le refuge (ma'wâ) des injustes, le Paradis celui des croyants. Chacun a un refuge selon ses œuvres."},
    {sense:'abriter',concept:'Refuge/Protection',description:''},
    {sense:'refuge',concept:'Refuge/Protection',description:''},
  ])
  log(r,'awt',{'Refuge/Protection':"Chercher un abri. Nous leur avons donné refuge. Ma'wâ selon les œuvres."})

  console.log('\n=== Batch 106 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
