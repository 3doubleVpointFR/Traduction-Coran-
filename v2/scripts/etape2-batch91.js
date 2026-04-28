const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 714, total = 2321

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

  // 720. wyl (ويل) — malheur
  r = await ins('wyl', [
    {sense:'malheur',concept:'Malédiction/Désastre',description:"Exclamation de détresse ou de condamnation — wayl est le cri de celui qui souffre ou l'annonce du châtiment. C'est ponctuel comme exclamation mais renvoie à un état permanent de malheur. Malheur (waylun) aux fraudeurs ! Malheur à eux pour ce que leurs mains ont écrit. Le wayl est aussi un lieu en Enfer. C'est l'opposé du salut et de la félicité."},
    {sense:'détresse',concept:'Malédiction/Désastre',description:''},
    {sense:'damnation',concept:'Malédiction/Désastre',description:''},
  ])
  log(r,'wyl',{'Malédiction/Désastre':"Cri de détresse. Malheur aux fraudeurs ! Lieu en Enfer."})

  // 721. šbh (شبه) — ressembler, doute
  r = await ins('šbh', [
    {sense:'ressembler',concept:'Ressemblance/Ambiguïté',description:"Avoir l'apparence de quelque chose — ressembler (shabbaha/tashâbaha) est quand deux choses paraissent similaires. C'est permanent comme caractéristique. Cela leur est apparu semblable (shubbiha lahum). Le mutashâbih est l'ambigu, ce dont le sens n'est pas clair. Les versets ambigus (mutashâbihât) s'opposent aux versets clairs (muhkamât). La ressemblance peut tromper."},
    {sense:'semblable',concept:'Ressemblance/Ambiguïté',description:''},
    {sense:'ambigu',concept:'Ressemblance/Ambiguïté',description:''},
    {sense:'doute',concept:'Ressemblance/Ambiguïté',description:''},
  ])
  log(r,'šbh',{'Ressemblance/Ambiguïté':"Avoir l'apparence. Cela leur parut semblable. Versets ambigus vs clairs."})

  // 722. dnw (دنو) — être proche, s'approcher
  r = await ins('dnw', [
    {sense:'être proche',concept:'Proximité/Monde d\'ici-bas',description:"Avoir peu de distance — être proche (danâ/yadnû) est l'état de ce qui est près dans l'espace ou le temps. C'est directionnel vers ce dont on s'approche. La vie d'ici-bas (ad-dunyâ) est la proche, celle qui est à portée de main. Adnâ est le plus proche. L'au-delà est loin (perspective divine), la dunyâ est proche mais éphémère. Choisis le lointain durable sur le proche passager."},
    {sense:'proche',concept:'Proximité/Monde d\'ici-bas',description:''},
    {sense:'ici-bas',concept:'Proximité/Monde d\'ici-bas',description:''},
    {sense:'approcher',concept:'Proximité/Monde d\'ici-bas',description:''},
  ])
  log(r,'dnw',{'Proximité/Monde d\'ici-bas':"Ce qui est près. Ad-dunyâ: la proche. Éphémère vs l'au-delà durable."})

  // 723. dyr (دير) — monastère, tourner
  r = await ins('dyr', [
    {sense:'monastère',concept:'Lieu de culte',description:"Bâtiment où vivent les moines — le monastère (dayr) est le lieu de retraite religieuse des chrétiens. C'est permanent comme construction. Des monastères (sawâmi' wa biya' wa salawât wa masâjid) où le nom de Dieu est mentionné. Le dayr partage la racine de dâra (tourner), peut-être par l'idée de l'enceinte qui entoure."},
    {sense:'couvent',concept:'Lieu de culte',description:''},
  ])
  log(r,'dyr',{'Lieu de culte':"Lieu de retraite. Monastères où Dieu est mentionné. Enceinte religieuse."})

  // 724. ḫff (خفف) — être léger, alléger
  r = await ins('ḫff', [
    {sense:'être léger',concept:'Légèreté/Allégement',description:"Avoir peu de poids — être léger (khaffa) est l'état de ce qui ne pèse pas lourd. C'est l'opposé de lourd (thaqîl). Allège-nous (khaffif) notre fardeau ! Dieu veut vous alléger (yukhaffifa). La légèreté est une grâce qui rend le chemin plus facile. Au Jour du Jugement, celui dont la balance sera légère (khaffat) aura perdu."},
    {sense:'alléger',concept:'Légèreté/Allégement',description:''},
    {sense:'rapide',concept:'Légèreté/Allégement',description:''},
  ])
  log(r,'ḫff',{'Légèreté/Allégement':"Peu de poids. Dieu veut vous alléger. Balance légère: perte."})

  console.log('\n=== Batch 91 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
