const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 843, total = 2321

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

  // 857. nafs (نفس) — âme, soi-même
  r = await ins('nafs', [
    {sense:'âme',concept:'Âme/Soi',description:"Le principe vital et conscient — la nafs est ce qui anime l'être, son moi profond. C'est permanent comme réalité métaphysique. Toute âme (nafs) goûtera la mort. La nafs a des degrés : ammâra (incitatrice au mal), lawwâma (qui blâme), mutma'inna (apaisée). L'âme apaisée retourne à son Seigneur. La nafs est aussi le soi, la personne elle-même. Connais-toi toi-même (nafsaka)."},
    {sense:'soi-même',concept:'Âme/Soi',description:''},
    {sense:'personne',concept:'Âme/Soi',description:''},
  ])
  log(r,'nafs',{'Âme/Soi':"Principe vital et conscient. Toute âme goûtera la mort. Âme apaisée retourne."})

  // 858. nfr (نفر) — fuir, s'enfuir, aversion
  r = await ins('nfr', [
    {sense:'fuir',concept:'Fuite/Aversion',description:"S'éloigner rapidement par peur ou dégoût — fuir (nafara) c'est s'enfuir devant ce qui repousse. C'est directionnel et ponctuel. Pourquoi ne part-il pas (yanfiru) de chaque groupe une partie ? La nafîra est l'expédition, le départ en groupe. Le nufûr peut être positif (partir chercher le savoir) ou négatif (fuir la vérité). L'aversion éloigne du bien comme du mal."},
    {sense:'s\'enfuir',concept:'Fuite/Aversion',description:''},
    {sense:'aversion',concept:'Fuite/Aversion',description:''},
  ])
  log(r,'nfr',{'Fuite/Aversion':"S'éloigner par peur. Pourquoi ne part-il pas un groupe? Aversion éloigne."})

  // 859. dnk (دنك) — variante/forme
  r = await ins('dnk', [
    {sense:'approcher',concept:'Proximité',description:"Skip si variante de d-n-w."},
  ])

  // 860. haaulaai (هؤلاء) — ceux-ci, démonstratif
  r = await ins('haaulaai', [
    {sense:'ceux-ci',concept:'Démonstration/Désignation',description:"Pronom démonstratif pluriel proche — hâ'ulâ'i désigne ceux qui sont présents ou proches. C'est permanent comme outil grammatical. Ceux-ci (hâ'ulâ'i) sont notre peuple. La désignation rapproche ou accuse. Pointer du doigt crée une distinction entre eux et nous. Le démonstratif peut exprimer la proximité affective ou la distance morale."},
    {sense:'voici ceux',concept:'Démonstration/Désignation',description:''},
  ])
  log(r,'haaulaai',{'Démonstration/Désignation':"Démonstratif pluriel proche. Ceux-ci sont notre peuple. Pointer crée distinction."})

  // 861. rey (رعي) — paître, garder le troupeau
  r = await ins('rey', [
    {sense:'paître',concept:'Pâturage/Protection',description:"Faire manger l'herbe aux bêtes — paître (ra'â) c'est conduire le troupeau aux pâturages. C'est permanent comme activité pastorale. Des prophètes furent bergers. Le ra'î est le berger, le gardien du troupeau. La ri'âya est la protection, le soin apporté à ce qu'on garde. Qui ne garde pas sa parole (lâ yar'auna) n'a pas de protection. Le berger est responsable de chaque bête."},
    {sense:'garder',concept:'Pâturage/Protection',description:''},
    {sense:'veiller sur',concept:'Pâturage/Protection',description:''},
  ])
  log(r,'rey',{'Pâturage/Protection':"Conduire le troupeau. Prophètes bergers. Le berger responsable de chaque bête."})

  // 862. khwn (خون) — trahir, tromper
  r = await ins('khwn', [
    {sense:'trahir',concept:'Trahison/Perfidie',description:"Manquer à la confiance donnée — trahir (khâna) c'est violer la foi jurée. C'est intérieur (intention) et ponctuel (acte). Dieu n'aime pas les traîtres (al-khâ'inîn). La khiyâna est la trahison, le contraire de l'amâna (fidélité). La femme de Noé et celle de Lot trahirent (khânatâ) leurs époux. La trahison domestique est la plus douloureuse. Le khâ'in est celui en qui on ne peut avoir confiance."},
    {sense:'tromper',concept:'Trahison/Perfidie',description:''},
    {sense:'perfide',concept:'Trahison/Perfidie',description:''},
  ])
  log(r,'khwn',{'Trahison/Perfidie':"Manquer à la confiance. Dieu n'aime pas les traîtres. Femmes de Noé et Lot."})

  console.log('\n=== Batch 118 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
