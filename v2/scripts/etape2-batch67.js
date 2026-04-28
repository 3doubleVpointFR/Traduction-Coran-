const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 593, total = 2321

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

  // 598. wez (وعظ) — exhorter, prêcher
  r = await ins('wez', [
    {sense:'exhorter',concept:'Exhortation/Conseil',description:"Inciter au bien par des paroles touchantes — exhorter (wa'aza) c'est conseiller avec insistance et émotion. C'est directionnel vers celui qu'on veut guider. Une exhortation (maw'iza) vous est venue de votre Seigneur, une guérison pour ce qui est dans les poitrines. L'exhortation vise le cœur, pas seulement l'intellect."},
    {sense:'prêcher',concept:'Exhortation/Conseil',description:''},
    {sense:'conseiller',concept:'Exhortation/Conseil',description:''},
    {sense:'sermon',concept:'Exhortation/Conseil',description:''},
  ])
  log(r,'wez',{'Exhortation/Conseil':"Inciter au bien. Une exhortation venue de Dieu. Guérison pour les cœurs."})

  // 599. wly (ولي) — proche, ami, protecteur
  r = await ins('wly', [
    {sense:'proche',concept:'Proximité/Protection',description:"Celui qui est tout près et prend en charge — le walî est l'ami proche qui protège. C'est permanent comme relation. Dieu est le Protecteur (al-Walî) des croyants. Prenez-vous les mécréants pour alliés (awliyâ') plutôt que les croyants ? L'alliance avec Dieu exclut l'alliance avec Ses ennemis."},
    {sense:'ami',concept:'Proximité/Protection',description:''},
    {sense:'protecteur',concept:'Proximité/Protection',description:''},
    {sense:'allié',concept:'Proximité/Protection',description:''},
    {sense:'gouverner',concept:'Autorité',description:"Exercer l'autorité — le wâlî gouverne et administre."},
  ])
  log(r,'wly',{'Proximité/Protection':"Ami proche qui protège. Dieu est al-Walî. Ne prenez pas les mécréants pour alliés.",'Autorité':"Le wâlî gouverne."})

  // 600. etd (عتد) — préparer, tenir prêt
  r = await ins('etd', [
    {sense:'préparer',concept:'Préparation/Disponibilité',description:"Avoir quelque chose de prêt pour usage — préparer (a'tadda) c'est rendre disponible ce qui sera nécessaire. Nous leur avons préparé (a'tadnâ) un châtiment douloureux. Ce qui est préparé attend celui à qui il est destiné. La préparation divine est inévitable, en bien comme en mal."},
    {sense:'tenir prêt',concept:'Préparation/Disponibilité',description:''},
    {sense:'disposer',concept:'Préparation/Disponibilité',description:''},
  ])
  log(r,'etd',{'Préparation/Disponibilité':"Rendre disponible. Nous leur avons préparé un châtiment. Inévitable."})

  // 601. sbt (سبت) — sabbat
  r = await ins('sbt', [
    {sense:'sabbat',concept:'Repos sacré/Jour saint',description:"Le jour de repos hebdomadaire des juifs — le sabbat (sabt) est le samedi consacré au repos par la Torah. C'est permanent comme institution religieuse. Nous leur dîmes : N'outrepassez pas le sabbat ! Ceux qui violèrent le sabbat furent transformés en singes méprisés. Le sabbat est test de l'obéissance."},
    {sense:'samedi',concept:'Repos sacré/Jour saint',description:''},
    {sense:'repos',concept:'Repos sacré/Jour saint',description:''},
  ])
  log(r,'sbt',{'Repos sacré/Jour saint':"Jour de repos des juifs. N'outrepassez pas ! Violateurs transformés en singes."})

  // 602. qrd (قرد) — singe
  r = await ins('qrd', [
    {sense:'singe',concept:'Animal/Châtiment',description:"Primate connu pour imiter les gestes humains — le singe (qird) est l'animal en lequel furent transformés les violateurs du sabbat. C'est permanent comme espèce mais ponctuel comme châtiment. Soyez des singes méprisés (qiradatan khâsi'în) ! La transformation en singe symbolise la dégradation de l'humanité désobéissante."},
    {sense:'primate',concept:'Animal/Châtiment',description:''},
  ])
  log(r,'qrd',{'Animal/Châtiment':"Violateurs transformés en singes. Soyez des singes méprisés ! Dégradation."})

  // 603. ksa (خسأ) — repousser, mépriser
  r = await ins('ksa', [
    {sense:'repousser',concept:'Rejet/Mépris',description:"Chasser avec dédain comme on chasse un chien — repousser (khasa'a) est directionnel vers l'extérieur avec mépris. C'est ponctuel mais humiliant. Des singes méprisés (khâsi'în), repoussés et rejetés. Le méprisé est exclu de la dignité humaine par son propre péché."},
    {sense:'mépriser',concept:'Rejet/Mépris',description:''},
    {sense:'rejeter',concept:'Rejet/Mépris',description:''},
  ])
  log(r,'ksa',{'Rejet/Mépris':"Chasser avec dédain. Singes méprisés. Exclu de la dignité par son péché."})

  console.log('\n=== Batch 67 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
