const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 862, total = 2321

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

  // 878. qalil (قليل) — peu, petit nombre
  r = await ins('qalil', [
    {sense:'peu',concept:'Petitesse/Minorité',description:"En quantité réduite — le peu (qalîl) s'oppose au beaucoup (kathîr). C'est permanent comme quantité relative. Peu (qalîlan) d'entre eux croient. La minorité fidèle face à la majorité égarée. Le qalîl peut être précieux : peu de bien sincère vaut mieux que beaucoup d'hypocrisie. La qualité prime sur la quantité dans la balance divine."},
    {sense:'petit nombre',concept:'Petitesse/Minorité',description:''},
    {sense:'réduit',concept:'Petitesse/Minorité',description:''},
  ])
  log(r,'qalil',{'Petitesse/Minorité':"Quantité réduite. Peu d'entre eux croient. La qualité prime."})

  // 879. faealu (فعل) — il a fait
  r = await ins('faealu', [
    {sense:'il a fait',concept:'Action/Accomplissement',description:"Troisième personne du verbe faire — fa'ala exprime l'action accomplie. C'est ponctuel comme acte passé. Et ils ont fait (fa'alû) ce qu'ils ont fait. L'acte passé engage la responsabilité future. Ce qui est fait ne peut être défait. Fa'ala implique l'agent conscient et responsable. Les actes (af'âl) seront présentés au Jugement."},
    {sense:'il a accompli',concept:'Action/Accomplissement',description:''},
  ])
  log(r,'faealu',{'Action/Accomplissement':"Action accomplie. Ils ont fait ce qu'ils ont fait. L'acte engage."})

  // 880. kan (كون) — être, exister
  r = await ins('kan', [
    {sense:'être',concept:'Existence/Devenir',description:"Verbe d'existence et de devenir — kâna exprime l'être dans le temps. C'est fondamental comme catégorie. Il était (kâna) et rien n'était avec Lui. L'être de Dieu précède tout être créé. Kâna peut exprimer le passé mais aussi l'état permanent : Dieu était (et demeure) Pardonneur. Le kun (sois) divin fait passer du non-être à l'être."},
    {sense:'exister',concept:'Existence/Devenir',description:''},
    {sense:'devenir',concept:'Existence/Devenir',description:''},
  ])
  log(r,'kan',{'Existence/Devenir':"Verbe d'existence. Il était et rien avec Lui. Le kun fait passer à l'être."})

  // 881. fqyr (فقير) — pauvre, nécessiteux
  r = await ins('fqyr', [
    {sense:'pauvre',concept:'Pauvreté/Besoin',description:"Celui qui manque du nécessaire — le pauvre (faqîr) est dans le besoin. C'est permanent comme état social. Vous êtes les pauvres (fuqarâ') envers Dieu. Toute créature est faqîr devant le Riche absolu (al-Ghaniyy). La pauvreté matérielle peut être dignité, la pauvreté spirituelle est la reconnaissance de notre dépendance totale envers Dieu."},
    {sense:'nécessiteux',concept:'Pauvreté/Besoin',description:''},
    {sense:'indigent',concept:'Pauvreté/Besoin',description:''},
  ])
  log(r,'fqyr',{'Pauvreté/Besoin':"Celui qui manque. Vous êtes pauvres envers Dieu. Dépendance totale."})

  // 882. nqb (نقب) — percer, scruter
  r = await ins('nqb', [
    {sense:'percer',concept:'Perforation/Investigation',description:"Faire un trou à travers quelque chose — percer (naqaba) c'est traverser une barrière. C'est directionnel et ponctuel. Ils ont fouillé (naqqabû) dans les contrées. Les peuples passés ont exploré, construit, conquis, mais ont péri. Le naqîb est le chef qui scrute et surveille. Percer c'est aussi pénétrer un secret, investiguer en profondeur."},
    {sense:'fouiller',concept:'Perforation/Investigation',description:''},
    {sense:'scruter',concept:'Perforation/Investigation',description:''},
  ])
  log(r,'nqb',{'Perforation/Investigation':"Traverser une barrière. Ils ont fouillé les contrées. Pénétrer les secrets."})

  console.log('\n=== Batch 122 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
