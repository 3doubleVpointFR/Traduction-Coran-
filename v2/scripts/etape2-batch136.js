const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 931, total = 2321

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

  // 950. khrb (خرب) — ruiner, détruire
  r = await ins('khrb', [
    {sense:'ruiner',concept:'Destruction/Ruine',description:"Réduire à l'état de ruine — détruire (kharaba) c'est rendre inhabitable. C'est ponctuel comme acte et permanent comme résultat. Ils détruisent (yukhribûna) leurs maisons de leurs propres mains. L'autodestruction est la pire des destructions. Le kharâb est la ruine, l'état de désolation. Les civilisations passées ne sont plus que ruines témoignant de leur fin."},
    {sense:'détruire',concept:'Destruction/Ruine',description:''},
    {sense:'désoler',concept:'Destruction/Ruine',description:''},
  ])
  log(r,'khrb',{'Destruction/Ruine':"Rendre inhabitable. Détruisent leurs maisons de leurs mains. Ruines témoignant."})

  // 951. xwf (خوف) — craindre, avoir peur
  r = await ins('xwf', [
    {sense:'craindre',concept:'Crainte/Peur',description:"Éprouver de l'appréhension devant un danger — craindre (khâfa) est un sentiment naturel face au mal. C'est intérieur et peut être ponctuel ou permanent. Ils ne craignent (yakhâfûna) que Dieu. La crainte de Dieu (khawf Allâh) est louable, elle éloigne du péché. Le khâ'if est celui qui a peur. La peur du Seigneur est le début de la sagesse. Crains Dieu et tu ne craindras personne d'autre."},
    {sense:'peur',concept:'Crainte/Peur',description:''},
    {sense:'appréhension',concept:'Crainte/Peur',description:''},
  ])
  log(r,'xwf',{'Crainte/Peur':"Appréhension devant le danger. Ils ne craignent que Dieu. Début de la sagesse."})

  // 952. yhd (يهد) — guider
  r = await ins('yhd', [
    {sense:'guider',concept:'Guidance',description:"Montrer le chemin — guider (hadâ/yahdî) c'est mener vers le droit chemin. C'est permanent comme action divine. Dieu guide (yahdî) qui Il veut. La hidâya est le don le plus précieux. Le hâdî est le guide, un des noms divins. La guidance est lumière dans les ténèbres, clarté après la confusion. Sans guidance divine, l'homme s'égare. Demande la guidance : ihdinâ al-sirât al-mustaqîm."},
    {sense:'montrer le chemin',concept:'Guidance',description:''},
  ])
  log(r,'yhd',{'Guidance':"Mener au droit chemin. Dieu guide qui Il veut. Ihdinâ le chemin droit."})

  // 953. lys (ليس) — ne pas être
  r = await ins('lys', [
    {sense:'ne pas être',concept:'Négation/Non-existence',description:"Verbe de négation existentielle — laysa nie l'être ou l'attribut. C'est permanent comme outil grammatical. Rien (laysa) n'est semblable à Lui. Laysa affirme l'unicité incomparable de Dieu. Ce qui n'est pas (laysa) n'a pas de réalité. Laysa peut nier une qualité, un état, une appartenance. La négation par laysa est catégorique et définitive."},
    {sense:'il n\'y a pas',concept:'Négation/Non-existence',description:''},
  ])
  log(r,'lys',{'Négation/Non-existence':"Nie l'être. Rien n'est semblable à Lui. Négation catégorique."})

  // 954. kdl (كذل) — ainsi (variante)
  r = await ins('kdl', [
    {sense:'ainsi',concept:'Comparaison',description:"Skip si déjà fait comme kðl."},
  ])

  // 955. fym (فيم) — dans quoi, pourquoi
  r = await ins('fym', [
    {sense:'dans quoi',concept:'Interrogation/But',description:"Préposition fî + pronom interrogatif mâ — fîma interroge sur le contenu ou le but. C'est permanent comme outil grammatical. Dans quoi (fîma) êtes-vous ? L'interrogation porte sur l'occupation, l'état ou la raison. Fîma anta min dhikrâhâ : en quoi te concerne-t-elle ? La question peut être rhétorique, poussant à la réflexion."},
    {sense:'pourquoi',concept:'Interrogation/But',description:''},
  ])
  log(r,'fym',{'Interrogation/But':"Préposition + interrogatif. Dans quoi êtes-vous? Pousse à la réflexion."})

  console.log('\n=== Batch 136 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
