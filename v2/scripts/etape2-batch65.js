const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 581, total = 2321

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

  // 586. eds (عدس) — lentilles
  r = await ins('eds', [
    {sense:'lentilles',concept:'Légumineuse/Terrestre',description:"Graines comestibles en forme de disque — les lentilles ('adas) sont l'un des aliments réclamés par les Israélites dans le désert. C'est permanent comme espèce végétale cultivée. Les lentilles représentent la nourriture simple et terrestre que les Hébreux préféraient à la manne céleste."},
    {sense:'légumineuses',concept:'Légumineuse/Terrestre',description:''},
  ])
  log(r,'eds',{'Légumineuse/Terrestre':"Graines comestibles. Réclamées par les Israélites. Préférées à la manne."})

  // 587. sqy (سقي) — abreuver, irriguer
  r = await ins('sqy', [
    {sense:'abreuver',concept:'Irrigation/Don',description:"Donner à boire — abreuver (saqâ/asqâ) est directionnel vers celui qui reçoit l'eau. C'est ponctuel dans l'acte mais vital pour la vie. Nous vous abreuvons de ce qui est dans leurs ventres. Dieu abreuve Ses créatures de pluie et de sources. L'eau donnée est signe de générosité."},
    {sense:'irriguer',concept:'Irrigation/Don',description:''},
    {sense:'donner à boire',concept:'Irrigation/Don',description:''},
  ])
  log(r,'sqy',{'Irrigation/Don':"Donner à boire. Dieu abreuve de pluie. Signe de générosité."})

  // 588. bsl (بصل) — oignon
  r = await ins('bsl', [
    {sense:'oignon',concept:'Condiment/Terrestre',description:"Plante à bulbe au goût fort utilisée en cuisine — l'oignon (basal) est mentionné parmi les légumes demandés par les Israélites. C'est permanent comme espèce cultivée depuis l'antiquité. L'oignon d'Égypte symbolise l'attachement aux habitudes terrestres même quand Dieu offre mieux."},
    {sense:'bulbe',concept:'Condiment/Terrestre',description:''},
  ])
  log(r,'bsl',{'Condiment/Terrestre':"Plante à goût fort. Demandé avec l'ail. Attachement aux habitudes."})

  // 589. esw (عصو) — bâton, désobéir
  r = await ins('esw', [
    {sense:'bâton',concept:'Instrument/Appui',description:"Morceau de bois long et droit servant d'appui — le bâton ('asâ) est l'instrument de Moïse qui devint serpent et fendit la mer. C'est permanent comme objet. Le bâton de Moïse est signe du pouvoir divin confié au prophète. Il s'appuie dessus et en tire mille usages."},
    {sense:'canne',concept:'Instrument/Appui',description:''},
    {sense:'désobéir',concept:'Rébellion',description:"Refuser d'obéir — désobéir ('asâ) c'est se rebeller contre l'autorité. Le péché d'Adam fut une désobéissance."},
  ])
  log(r,'esw',{'Instrument/Appui':"Bâton de Moïse. Devint serpent. Signe de pouvoir divin.",'Rébellion':"Refuser d'obéir. Adam désobéit."})

  // 590. fjr (فجر) — aube, jaillir
  r = await ins('fjr', [
    {sense:'aube',concept:'Commencement/Lumière',description:"Le moment où la lumière perce l'obscurité — l'aube (fajr) est le début du jour quand la clarté fend la nuit. C'est ponctuel mais quotidien. Par l'aube ! Le Fendeur de l'aube (fâliq al-isbâh) est Dieu qui fait jaillir la lumière. La prière de l'aube marque l'entrée dans un nouveau jour."},
    {sense:'aurore',concept:'Commencement/Lumière',description:''},
    {sense:'jaillir',concept:'Éclatement',description:"Sortir avec force — faire jaillir (fajjara) les sources du rocher. Le jaillissement est l'irruption de ce qui était contenu."},
    {sense:'débauche',concept:'Transgression',description:"Conduite dissolue — le fujûr est le vice qui rompt les limites morales."},
  ])
  log(r,'fjr',{'Commencement/Lumière':"Lumière perçant l'obscurité. Par l'aube ! Prière du fajr.",'Éclatement':"Jaillir avec force. Sources du rocher.",'Transgression':"Vice qui rompt les limites."})

  // 591. eyn (عين) — œil, source
  r = await ins('eyn', [
    {sense:'œil',concept:'Vision/Perception',description:"Organe de la vue — l'œil ('ayn) perçoit le monde visible. C'est permanent comme partie du corps. Sous Nos yeux (bi-a'yuninâ) : sous Notre protection vigilante. L'œil mauvais (al-'ayn) peut nuire par envie. L'œil est aussi le regard intérieur du cœur."},
    {sense:'regard',concept:'Vision/Perception',description:''},
    {sense:'source',concept:'Eau vive',description:"Point d'où jaillit l'eau — la source ('ayn) est l'origine de l'eau pure. Dans le Paradis coulent des sources. Douze sources jaillirent du rocher pour les tribus d'Israël."},
    {sense:'essence',concept:'Identité',description:"La chose même — 'ayn ash-shay' est la chose elle-même, son essence."},
  ])
  log(r,'eyn',{'Vision/Perception':"Organe de la vue. Sous Nos yeux. L'œil mauvais peut nuire.",'Eau vive':"Point d'où jaillit l'eau. Sources du Paradis. Douze sources.",'Identité':"La chose même. Son essence."})

  console.log('\n=== Batch 65 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
