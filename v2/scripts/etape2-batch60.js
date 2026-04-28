const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 551, total = 2321

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

  // Skip ma', ns', hy'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])

  // 556. ḵḏḏ (خذذ) — prendre
  r = await ins('ḵḏḏ', [
    {sense:'prendre',concept:'Saisie/Acquisition',description:"S'emparer de quelque chose, recevoir — prendre (akhadha) est directionnel vers ce qu'on saisit. C'est ponctuel dans l'acte. Prenez ce que Nous vous avons donné avec force ! Prendre implique responsabilité. On prend un engagement, on prend une direction, on prend au sérieux."},
    {sense:'saisir',concept:'Saisie/Acquisition',description:''},
    {sense:'recevoir',concept:'Saisie/Acquisition',description:''},
    {sense:'châtier',concept:'Punition',description:"Frapper d'une punition — Dieu prend (akhadha) les peuples injustes par Son châtiment."},
  ])
  log(r,'ḵḏḏ',{'Saisie/Acquisition':"S'emparer. Prenez avec force ! Prendre implique responsabilité.",'Punition':"Châtier. Dieu prend les injustes."})

  // 557. frṯ (فرث) — contenu de la panse
  r = await ins('frṯ', [
    {sense:'contenu de la panse',concept:'Digestion/Impureté',description:"Ce qui est dans l'estomac des animaux — le farth est la matière en digestion dans la panse. C'est intérieur et considéré comme impur. D'entre le contenu de la panse et le sang, Nous vous faisons boire un lait pur. La transformation du farth en lait est un signe de la puissance divine qui tire le pur de l'impur."},
    {sense:'excréments',concept:'Digestion/Impureté',description:''},
    {sense:'résidu digestif',concept:'Digestion/Impureté',description:''},
  ])
  log(r,'frṯ',{'Digestion/Impureté':"Matière en digestion. Du farth et du sang sort un lait pur. Le pur de l'impur."})

  // 558. lmh (لمح) — regard rapide
  r = await ins('lmh', [
    {sense:'regard rapide',concept:'Vision/Instantanéité',description:"Un coup d'œil bref — le regard (lamh) est ponctuel par excellence, aussi bref qu'un clin d'œil. L'Heure n'est que comme un clin d'œil (ka-lamhi l-basar) ou plus proche encore. L'instantanéité du regard illustre la soudaineté de l'avènement de l'Heure."},
    {sense:'clin d œil',concept:'Vision/Instantanéité',description:''},
    {sense:'instant',concept:'Vision/Instantanéité',description:''},
  ])
  log(r,'lmh',{'Vision/Instantanéité':"Coup d'œil bref. L'Heure comme un clin d'œil. Soudaineté."})

  // 559. wbr (وبر) — poil de chameau
  r = await ins('wbr', [
    {sense:'poil de chameau',concept:'Matière/Animal',description:"Le pelage fin du dromadaire — le wabar est la laine du chameau utilisée pour le tissage. C'est permanent comme matière naturelle. De leurs poils (awbârihâ), de leur laine et de leur crin, des objets et une jouissance pour un temps. Les animaux fournissent aux hommes de quoi se vêtir et s'abriter."},
    {sense:'laine',concept:'Matière/Animal',description:''},
    {sense:'toison',concept:'Matière/Animal',description:''},
  ])
  log(r,'wbr',{'Matière/Animal':"Pelage du chameau. De leurs poils des objets et jouissance."})

  // 560. lwt (لوت) — Lot
  r = await ins('lwt', [
    {sense:'Lot',concept:'Prophète/Histoire',description:"Prophète envoyé au peuple de Sodome — Lût était le neveu d'Abraham, envoyé à un peuple qui commettait la turpitude. C'est un nom propre permanent. Son peuple fut détruit pour avoir refusé son appel et persisté dans l'abomination. Lot et sa famille furent sauvés, sauf sa femme qui fut parmi les retardataires."},
    {sense:'prophète Lot',concept:'Prophète/Histoire',description:''},
  ])
  log(r,'lwt',{'Prophète/Histoire':"Prophète à Sodome. Peuple détruit. Lot sauvé sauf sa femme."})

  // 561. skr (سكر) — ivresse
  r = await ins('skr', [
    {sense:'ivresse',concept:'Altération/Trouble',description:"État de celui qui a perdu sa lucidité — l'ivresse (sukr) est temporaire comme état mais peut devenir permanente comme habitude. C'est intérieur comme trouble de la conscience. N'approchez pas la prière alors que vous êtes ivres. L'ivresse empêche la présence de l'esprit nécessaire à l'adoration."},
    {sense:'enivrer',concept:'Altération/Trouble',description:''},
    {sense:'boisson enivrante',concept:'Altération/Trouble',description:''},
    {sense:'sucre',concept:'Douceur',description:"Substance douce — le sukkar est la douceur tirée de la canne."},
  ])
  log(r,'skr',{'Altération/Trouble':"Perte de lucidité. N'approchez pas la prière ivres. Trouble de conscience.",'Douceur':"Le sucre, substance douce."})

  console.log('\n=== Batch 60 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
