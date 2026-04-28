const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 719, total = 2321

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

  // 725. nt (نوت) — prendre note (variante)
  r = await ins('nt', [
    {sense:'prendre note',concept:'Notation',description:"Skip si variante."},
  ])

  // 726. nnn (نون) — nûn, poisson
  r = await ins('nnn', [
    {sense:'nûn',concept:'Lettre/Poisson',description:"Lettre de l'alphabet arabe ou le poisson — nûn est la 25ème lettre, qui ouvre la sourate al-Qalam. C'est aussi le poisson (hût). Dhû n-Nûn (l'homme au poisson) est le prophète Jonas. Le nûn est mystérieux comme lettre isolée et symbolique comme poisson qui avala Jonas puis le rejeta sur le rivage."},
    {sense:'poisson',concept:'Lettre/Poisson',description:''},
  ])
  log(r,'nnn',{'Lettre/Poisson':"Lettre nûn. Dhû n-Nûn: Jonas. Le poisson qui avala et rejeta."})

  // 727. ewdh (عوذ) — chercher refuge (variante)
  r = await ins('ewdh', [
    {sense:'chercher refuge',concept:'Protection',description:"Skip si déjà fait comme ewḏ."},
  ])

  // 728. jya (جيء) — venir (variante)
  r = await ins('jya', [
    {sense:'venir',concept:'Venue',description:"Skip si déjà fait comme jyy."},
  ])

  // 729. sryl (سريل) — Israël
  r = await ins('sryl', [
    {sense:'Israël',concept:'Nom propre/Peuple',description:"Nom du prophète Jacob et de sa descendance — Isrâ'îl est le nom donné à Jacob, signifiant serviteur de Dieu. C'est permanent comme nom propre. Ô Fils d'Israël (Banî Isrâ'îl) ! Les Banî Isrâ'îl sont le peuple descendant de Jacob, les Hébreux auxquels furent envoyés de nombreux prophètes."},
    {sense:'Jacob',concept:'Nom propre/Peuple',description:''},
  ])
  log(r,'sryl',{'Nom propre/Peuple':"Nom de Jacob. Ô Fils d'Israël ! Peuple des prophètes hébreux."})

  // 730. ytm (يتم) — être orphelin
  r = await ins('ytm', [
    {sense:'être orphelin',concept:'Orphelinat/Solitude',description:"Être privé de père dans l'enfance — l'orphelin (yatîm) est l'enfant qui a perdu son père avant la puberté. C'est permanent comme état social. Quant à l'orphelin (yatîm), ne le brime pas ! Le Prophète lui-même était orphelin. Prendre soin des orphelins est un devoir majeur. Manger injustement leurs biens c'est avaler du feu."},
    {sense:'orphelin',concept:'Orphelinat/Solitude',description:''},
    {sense:'unique',concept:'Orphelinat/Solitude',description:''},
  ])
  log(r,'ytm',{'Orphelinat/Solitude':"Privé de père. Ne brime pas l'orphelin ! Devoir de protection."})

  // 731. kdlk (كذلك) — ainsi, de même
  r = await ins('kdlk', [
    {sense:'ainsi',concept:'Comparaison/Manière',description:"De cette façon, de la même manière — kadhâlika est une expression qui renvoie à ce qui précède. C'est une manière de dire que quelque chose se fait comme on vient de le décrire. Ainsi (kadhâlika) Nous avons fait de vous une communauté médiane. L'expression établit un parallèle, une similitude de traitement ou de manière."},
    {sense:'de même',concept:'Comparaison/Manière',description:''},
    {sense:'pareillement',concept:'Comparaison/Manière',description:''},
  ])
  log(r,'kdlk',{'Comparaison/Manière':"De cette façon. Ainsi avons-Nous fait. Établit un parallèle."})

  console.log('\n=== Batch 92 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
