const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 611, total = 2321

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

  // 616. thwr (ثور) — taureau, soulever
  r = await ins('thwr', [
    {sense:'taureau',concept:'Animal/Force',description:"Mâle de la vache, symbole de force — le taureau (thawr) est un animal puissant utilisé pour le labour. C'est permanent comme espèce. Dans l'histoire de la vache, on parle de bovins qui ne sont ni trop vieux ni trop jeunes. Le taureau évoque la force et le travail agricole."},
    {sense:'bœuf',concept:'Animal/Force',description:''},
    {sense:'soulever',concept:'Agitation',description:"Mettre en mouvement, agiter — soulever (athâra) la terre c'est la labourer. Soulever la poussière, les passions."},
  ])
  log(r,'thwr',{'Animal/Force':"Mâle puissant. Labour. Ni trop vieux ni trop jeune.",'Agitation':"Mettre en mouvement. Labourer. Soulever passions."})

  // 617. ghsl (غسل) — laver
  r = await ins('ghsl', [
    {sense:'laver',concept:'Purification/Nettoyage',description:"Nettoyer avec de l'eau — laver (ghasala) est l'acte de purification corporelle. C'est directionnel vers l'extérieur pour enlever l'impureté. Lavez vos visages et vos mains jusqu'aux coudes. Les grandes ablutions (ghusl) purifient le corps entier. Le lavage physique prépare à la prière."},
    {sense:'purifier',concept:'Purification/Nettoyage',description:''},
    {sense:'ablution',concept:'Purification/Nettoyage',description:''},
  ])
  log(r,'ghsl',{'Purification/Nettoyage':"Nettoyer à l'eau. Lavez visages et mains. Le ghusl purifie tout le corps."})

  // 618. kft (خفت) — baisser la voix
  r = await ins('kft', [
    {sense:'baisser la voix',concept:'Discrétion/Modération',description:"Parler doucement, ne pas crier — baisser (khafata) la voix est un signe de respect et de retenue. Ne sois ni trop haut ni trop bas dans ta prière, cherche entre cela un chemin. La modération dans la voix reflète la modération de l'âme. Le murmure excessif peut être hypocrisie."},
    {sense:'murmurer',concept:'Discrétion/Modération',description:''},
    {sense:'parler bas',concept:'Discrétion/Modération',description:''},
  ])
  log(r,'kft',{'Discrétion/Modération':"Parler doucement. Ni trop haut ni trop bas. Modération de l'âme."})

  // 619. sdf (صدف) — se détourner
  r = await ins('sdf', [
    {sense:'se détourner',concept:'Évitement/Refus',description:"Tourner le dos, refuser de faire face — se détourner (sadafa) c'est refuser d'écouter ou de voir. C'est directionnel vers l'extérieur, loin de ce qu'on rejette. Qui est plus injuste que celui qui, rappelé des signes de son Seigneur, s'en détourne ? Le détournement est le début de l'égarement."},
    {sense:'éviter',concept:'Évitement/Refus',description:''},
    {sense:'refuser',concept:'Évitement/Refus',description:''},
  ])
  log(r,'sdf',{'Évitement/Refus':"Tourner le dos. Qui se détourne des signes ? Début de l'égarement."})

  // 620. eshy (عشي) — soir
  r = await ins('eshy', [
    {sense:'soir',concept:'Temps/Déclin',description:"Le moment où le jour décline vers la nuit — le soir ('ashiyy) est le temps entre l'après-midi et la nuit. C'est temporaire comme moment du cycle quotidien. Glorifiez Dieu le soir ('ashiyyan) et le matin ! Le soir et le matin marquent les deux extrémités du jour, temps privilégiés de prière."},
    {sense:'soirée',concept:'Temps/Déclin',description:''},
    {sense:'crépuscule',concept:'Temps/Déclin',description:''},
  ])
  log(r,'eshy',{'Temps/Déclin':"Le jour décline. Glorifiez le soir et le matin ! Temps de prière."})

  // 621. sw' (سوء) — mal, mauvais
  r = await ins("sw'", [
    {sense:'mal',concept:'Mal/Négativité',description:"Ce qui est nuisible ou moralement répréhensible — le mal (sû') est le contraire du bien. C'est permanent comme catégorie morale. Le mal les a entourés de toutes parts. Quiconque fait un mal sera rétribué pour cela. Le mal peut être acte, parole ou intention. Seul Dieu peut en préserver."},
    {sense:'mauvais',concept:'Mal/Négativité',description:''},
    {sense:'nuisible',concept:'Mal/Négativité',description:''},
    {sense:'honteux',concept:'Mal/Négativité',description:''},
  ])
  log(r,"sw'",{'Mal/Négativité':"Nuisible et répréhensible. Le mal les a entourés. Rétribué pour cela."})

  console.log('\n=== Batch 70 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
