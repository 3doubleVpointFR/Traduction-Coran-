const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 823, total = 2321

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

  // 836. shyd (شيد) — construire, élever
  r = await ins('shyd', [
    {sense:'construire',concept:'Élévation/Construction',description:"Ériger une structure solide — construire (shayyada) c'est élever avec des matériaux durables. C'est permanent comme résultat. Des tours (mashîda) élevées. Le shîd est le plâtre, le mortier qui consolide. Les constructions humaines, aussi hautes soient-elles, s'écrouleront. Seul ce qui est construit pour Dieu demeure. L'élévation matérielle n'est rien sans l'élévation spirituelle."},
    {sense:'élever',concept:'Élévation/Construction',description:''},
    {sense:'fortifier',concept:'Élévation/Construction',description:''},
  ])
  log(r,'shyd',{'Élévation/Construction':"Ériger avec solidité. Tours élevées. L'élévation matérielle n'est rien sans la spirituelle."})

  // 837. mal (مال) — pencher, richesse
  r = await ins('mal', [
    {sense:'pencher',concept:'Inclinaison/Richesse',description:"S'incliner vers un côté — pencher (mâla) c'est dévier de la verticalité. C'est directionnel et peut être ponctuel ou permanent. Ils voudraient que vous penchiez (tamîlûna) pour qu'ils penchent. Le mâl est aussi la richesse, les biens. Les biens (amwâl) et les enfants sont la parure de la vie. Le mâl peut faire pencher le cœur vers le bas-monde. La vraie richesse est la piété."},
    {sense:'richesse',concept:'Inclinaison/Richesse',description:''},
    {sense:'biens',concept:'Inclinaison/Richesse',description:''},
  ])
  log(r,'mal',{'Inclinaison/Richesse':"S'incliner vers un côté. Les biens sont parure. Le mâl fait pencher le cœur."})

  // 838. fqh (فقه) — comprendre, jurisprudence
  r = await ins('fqh', [
    {sense:'comprendre',concept:'Compréhension/Jurisprudence',description:"Saisir le sens profond — comprendre (faqiha) c'est pénétrer au-delà de l'apparence. C'est intérieur et permanent comme faculté. Un peuple qui ne comprend pas (lâ yafqahûna). Le fiqh est la compréhension approfondie de la religion, devenue science du droit. Le faqîh est le juriste, celui qui comprend les implications de la Loi. Comprendre c'est plus que savoir : c'est saisir les causes et les effets."},
    {sense:'jurisprudence',concept:'Compréhension/Jurisprudence',description:''},
    {sense:'pénétrer',concept:'Compréhension/Jurisprudence',description:''},
  ])
  log(r,'fqh',{'Compréhension/Jurisprudence':"Saisir le sens profond. Un peuple qui ne comprend pas. Le fiqh: science du droit."})

  // 839. sne (صنع) — fabriquer, faire
  r = await ins('sne', [
    {sense:'fabriquer',concept:'Fabrication/Art',description:"Produire avec habileté — fabriquer (sana'a) c'est créer par le travail artisanal. C'est permanent comme activité et ponctuel comme acte. L'œuvre (sun') de Dieu qui a parfait toute chose. La fabrication divine est parfaite, sans défaut. Le sâni' est l'artisan, le créateur. Ce qu'ils fabriquaient (mâ kânû yasna'ûna) les a trompés. L'idolâtrie est fabrication de faux dieux."},
    {sense:'œuvrer',concept:'Fabrication/Art',description:''},
    {sense:'artisanat',concept:'Fabrication/Art',description:''},
  ])
  log(r,'sne',{'Fabrication/Art':"Produire avec habileté. L'œuvre de Dieu parfaite. Ce qu'ils fabriquaient les a trompés."})

  // 840. n s b (نصب) — dresser, fatiguer
  r = await ins('n s b', [
    {sense:'dresser',concept:'Érection/Fatigue',description:"Établir verticalement — dresser (nasaba) c'est planter debout ce qui était couché. C'est directionnel vers le haut. Les idoles dressées (al-ansâb) étaient adorées. L'idol est ce qu'on érige pour l'adorer. Le nasab est aussi la fatigue, l'épuisement. Aucune fatigue (nasab) ne les touchera au Paradis. Dresser demande effort, mais au Paradis tout est repos et aise."},
    {sense:'fatiguer',concept:'Érection/Fatigue',description:''},
    {sense:'idole',concept:'Érection/Fatigue',description:''},
  ])
  log(r,'n s b',{'Érection/Fatigue':"Établir verticalement. Idoles dressées. Aucune fatigue au Paradis."})

  console.log('\n=== Batch 114 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
