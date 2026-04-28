const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 557, total = 2321

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

  // 562. nthy (نهي) — fin, interdire
  r = await ins('nthy', [
    {sense:'fin',concept:'Terminus/Limite',description:"Le point ultime où aboutit quelque chose — la fin (nihâya) est le terme d'un parcours. C'est directionnel vers l'extrémité. Vers ton Seigneur est la fin dernière (al-muntahâ). Le Lotus de la limite (sidrat al-muntahâ) marque la frontière que nul ne dépasse."},
    {sense:'aboutir',concept:'Terminus/Limite',description:''},
    {sense:'interdire',concept:'Prohibition',description:"Défendre de faire quelque chose — interdire (nahâ) c'est poser une limite à ne pas franchir. Dieu ordonne la justice et interdit la turpitude. L'interdit protège du mal."},
    {sense:'empêcher',concept:'Prohibition',description:''},
  ])
  log(r,'nthy',{'Terminus/Limite':"Point ultime. Le Lotus de la limite. Vers Dieu est la fin.",'Prohibition':"Poser une limite. Dieu interdit la turpitude."})

  // 563. a n t (أنت) — tu, toi
  r = await ins('a n t', [
    {sense:'tu',concept:'Pronom personnel',description:"Pronom de la deuxième personne du singulier — anta (masculin) et anti (féminin) désignent l'interlocuteur. C'est directionnel vers celui à qui on parle. Tu n'es qu'un avertisseur. Tu ne guides pas qui tu aimes, mais Dieu guide qui Il veut. Le tutoiement marque l'adresse directe."},
    {sense:'toi',concept:'Pronom personnel',description:''},
    {sense:'vous',concept:'Pronom personnel',description:''},
  ])
  log(r,'a n t',{'Pronom personnel':"Désigne l'interlocuteur. Tu n'es qu'un avertisseur. Adresse directe."})

  // 564. taem (طعم) — goûter, nourriture
  r = await ins('taem', [
    {sense:'goûter',concept:'Gustation/Expérience',description:"Percevoir la saveur de quelque chose — goûter (ta'ima/dhâqa) est ponctuel dans l'acte de mettre en bouche. Goûtez le châtiment pour ce que vous faisiez ! Goûter le châtiment c'est en faire l'expérience directe et intérieure. Le goût ne peut être décrit, seulement vécu."},
    {sense:'manger',concept:'Gustation/Expérience',description:''},
    {sense:'nourriture',concept:'Gustation/Expérience',description:''},
    {sense:'saveur',concept:'Gustation/Expérience',description:''},
  ])
  log(r,'taem',{'Gustation/Expérience':"Percevoir la saveur. Goûtez le châtiment ! Expérience directe et intérieure."})

  // 565. mae (معي) — entrailles, avec
  r = await ins('mae', [
    {sense:'entrailles',concept:'Intérieur corporel',description:"Les organes internes du corps — les entrailles (am'â') sont ce qui est au plus profond de l'être physique. L'eau bouillante fera fondre ce qui est dans leurs entrailles. Le châtiment atteint l'intérieur le plus intime."},
    {sense:'intestins',concept:'Intérieur corporel',description:''},
    {sense:'avec',concept:'Accompagnement',description:"Préposition de compagnie — ma'a indique la présence conjointe. Dieu est avec les patients. La compagnie divine est le soutien suprême."},
  ])
  log(r,'mae',{'Intérieur corporel':"Organes internes. L'eau bouillante fera fondre les entrailles.",'Accompagnement':"Présence conjointe. Dieu est avec les patients."})

  // 566. nny (نوي) — intention, noyau
  r = await ins('nny', [
    {sense:'intention',concept:'Volonté/Dessein',description:"Le propos du cœur avant l'acte — l'intention (niyya) est intérieure par essence. Elle précède et qualifie l'action. Les actes ne valent que par les intentions. L'intention sincère distingue l'adoration de la simple habitude."},
    {sense:'projet',concept:'Volonté/Dessein',description:''},
    {sense:'noyau',concept:'Graine/Centre',description:"La partie centrale et dure du fruit — le noyau (nawâ) contient la graine. Fendeur du grain et du noyau (fâliq al-habb wa-n-nawâ)."},
  ])
  log(r,'nny',{'Volonté/Dessein':"Propos du cœur. Les actes ne valent que par les intentions.",'Graine/Centre':"Partie centrale. Fendeur du grain et du noyau."})

  // 567. tbe (طبع) — sceller, nature
  r = await ins('tbe', [
    {sense:'sceller',concept:'Scellement/Fermeture',description:"Fermer de manière à empêcher l'ouverture — sceller (taba'a) les cœurs c'est les rendre imperméables à la guidance. C'est permanent comme état résultant. Dieu a scellé leurs cœurs et leur ouïe. Le sceau empêche toute pénétration de la vérité."},
    {sense:'marquer',concept:'Scellement/Fermeture',description:''},
    {sense:'nature',concept:'Caractère inné',description:"La disposition originelle — le caractère (tab') est la nature avec laquelle on est créé. Chacun agit selon sa nature (shâkilatihi)."},
    {sense:'empreinte',concept:'Scellement/Fermeture',description:''},
  ])
  log(r,'tbe',{'Scellement/Fermeture':"Fermer les cœurs. Dieu a scellé. Imperméable à la guidance.",'Caractère inné':"Disposition originelle. Chacun agit selon sa nature."})

  console.log('\n=== Batch 61 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
