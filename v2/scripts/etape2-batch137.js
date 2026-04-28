const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 936, total = 2321

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
  r = await ins("fa", [{sense:'alors',concept:'Conjonction',description:"Skip."}])
  r = await ins("lan", [{sense:'jamais',concept:'Négation',description:"Skip."}])

  // 956. aayh (أية) — signe, verset
  r = await ins('aayh', [
    {sense:'signe',concept:'Signe/Verset',description:"Marque qui indique quelque chose — le signe (âya) est ce qui pointe vers une réalité. C'est permanent comme réalité. Un signe (âya) pour eux est la terre morte. Les âyât sont les versets du Coran et les signes dans la création. Chaque verset est signe, chaque signe est verset. L'univers est un livre de signes pour qui sait lire. La compréhension des âyât ouvre à la foi."},
    {sense:'verset',concept:'Signe/Verset',description:''},
    {sense:'miracle',concept:'Signe/Verset',description:''},
  ])
  log(r,'aayh',{'Signe/Verset':"Marque qui indique. La terre morte est signe. L'univers livre de signes."})

  // 957. jhm (جحم) — Géhenne, feu ardent
  r = await ins('jhm', [
    {sense:'Géhenne',concept:'Enfer/Châtiment',description:"Lieu de châtiment éternel — la Géhenne (Jahannam) est le feu de l'au-delà. C'est permanent comme destination finale. La Géhenne (Jahannam) les entoure. Jahannam est l'un des noms de l'Enfer, peut-être d'origine hébraïque (Géhinnom). Le jahîm est le feu intense. La Géhenne est réservée aux mécréants obstinés. Son feu est alimenté par les hommes et les pierres."},
    {sense:'feu ardent',concept:'Enfer/Châtiment',description:''},
    {sense:'enfer',concept:'Enfer/Châtiment',description:''},
  ])
  log(r,'jhm',{'Enfer/Châtiment':"Lieu de châtiment. La Géhenne les entoure. Feu des obstinés."})

  // 958. bda (بدع) — innover, créer sans modèle
  r = await ins('bda', [
    {sense:'innover',concept:'Innovation/Création',description:"Faire quelque chose de nouveau sans précédent — innover (bada'a) c'est créer sans modèle préalable. C'est ponctuel comme acte et permanent comme résultat. Créateur (Badî') des cieux et de la terre. Al-Badî' crée sans modèle antérieur. La bid'a en religion est l'innovation blâmable qui ajoute à ce que Dieu a établi. Innovation divine est création pure, innovation humaine en religion est déviation."},
    {sense:'créer',concept:'Innovation/Création',description:''},
    {sense:'originer',concept:'Innovation/Création',description:''},
  ])
  log(r,'bda',{'Innovation/Création':"Créer sans modèle. Al-Badî' des cieux et terre. La bid'a: innovation blâmable."})

  // 959. qdy (قضي) — juger, décréter
  r = await ins('qdy', [
    {sense:'juger',concept:'Jugement/Décret',description:"Trancher une affaire — juger (qadâ) c'est décider de manière définitive. C'est ponctuel comme verdict et permanent comme effet. Quand Il décrète (qadâ) une chose, Il lui dit 'Sois'. Le qadâ' divin est irrévocable. Le qâdî est le juge qui tranche les litiges. Qadâ est aussi accomplir : qadâ salâtahu, il a accompli sa prière. Le jugement de Dieu s'exécute nécessairement."},
    {sense:'décréter',concept:'Jugement/Décret',description:''},
    {sense:'accomplir',concept:'Jugement/Décret',description:''},
  ])
  log(r,'qdy',{'Jugement/Décret':"Trancher définitivement. Quand Il décrète, Il dit Sois. Jugement irrévocable."})

  // 960. rdy (رضي) — être satisfait, agréer
  r = await ins('rdy', [
    {sense:'être satisfait',concept:'Agrément/Satisfaction',description:"Trouver bon, accepter avec contentement — être satisfait (radiya) c'est accepter pleinement. C'est intérieur et permanent. Dieu est satisfait (radiya) d'eux et ils sont satisfaits de Lui. Le ridâ mutuel entre Dieu et Ses serviteurs est le bonheur suprême. Le mardiyy est l'agréé, le mardât est l'agrément. Chercher le ridâ d'Allah est le but de la vie pieuse."},
    {sense:'agréer',concept:'Agrément/Satisfaction',description:''},
    {sense:'contentement',concept:'Agrément/Satisfaction',description:''},
  ])
  log(r,'rdy',{'Agrément/Satisfaction':"Accepter pleinement. Dieu satisfait d'eux, eux de Lui. Bonheur suprême."})

  console.log('\n=== Batch 137 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
