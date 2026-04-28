const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 887, total = 2321

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

  // 905. ltf (لطف) — douceur, subtilité
  r = await ins('ltf', [
    {sense:'douceur',concept:'Subtilité/Bienveillance',description:"Délicatesse dans le traitement — la douceur (lutf) est la subtilité bienveillante. C'est intérieur comme qualité et extérieur comme effet. Dieu est Subtil (Latîf) envers Ses serviteurs. Al-Latîf connaît les détails les plus fins et traite avec une délicatesse infinie. Le lutf divin agit là où on ne le voit pas, arrangeant les choses imperceptiblement. La subtilité de Dieu dépasse notre entendement."},
    {sense:'subtilité',concept:'Subtilité/Bienveillance',description:''},
    {sense:'délicatesse',concept:'Subtilité/Bienveillance',description:''},
  ])
  log(r,'ltf',{'Subtilité/Bienveillance':"Délicatesse. Dieu est Latîf. Arrange imperceptiblement."})

  // 906. lana (لنا) — pour nous
  r = await ins('lana', [
    {sense:'pour nous',concept:'Attribution/Possession',description:"Préposition li avec pronom suffixe — lanâ exprime ce qui nous revient ou nous concerne. C'est permanent comme outil grammatical. Pour nous (lanâ) nos œuvres et pour vous vos œuvres. La responsabilité est individuelle. Ce qui est lanâ nous appartient ou nous incombe. L'attribution claire évite la confusion des responsabilités devant Dieu."},
    {sense:'à nous',concept:'Attribution/Possession',description:''},
  ])
  log(r,'lana',{'Attribution/Possession':"Ce qui nous revient. Pour nous nos œuvres. Responsabilité individuelle."})

  // 907. hyṯ (حيث) — où, là où
  r = await ins('hyṯ', [
    {sense:'où',concept:'Lieu/Condition',description:"Adverbe de lieu ou de condition — haythu indique l'endroit ou la circonstance. C'est permanent comme outil grammatical. Là où (haythu) vous vous tournerez, là est la Face de Dieu. Le lieu n'est pas une limite pour Dieu qui est partout. Haythu peut aussi être conditionnel : selon où, selon que. La direction de la prière importe moins que la sincérité du cœur."},
    {sense:'là où',concept:'Lieu/Condition',description:''},
  ])
  log(r,'hyṯ',{'Lieu/Condition':"Adverbe de lieu. Là où vous vous tournerez. Dieu n'est pas limité au lieu."})

  // 908. ghbr (غبر) — poussière, reste
  r = await ins('ghbr', [
    {sense:'poussière',concept:'Poussière/Résidu',description:"Particules fines en suspension — la poussière (ghubâr) est ce qui reste et se disperse. C'est permanent comme réalité physique. Couverts de poussière (ghabara). La poussière sur le visage du combattant ou du pèlerin est honorable. Le ghâbir est ce qui reste, le vestige. La poussière rappelle l'origine terrestre de l'homme : de la terre créé, à la terre retournant."},
    {sense:'reste',concept:'Poussière/Résidu',description:''},
    {sense:'vestige',concept:'Poussière/Résidu',description:''},
  ])
  log(r,'ghbr',{'Poussière/Résidu':"Particules fines. Couverts de poussière. Origine terrestre de l'homme."})

  // 909. fkh (فخر) — se vanter, fierté
  r = await ins('fkh', [
    {sense:'se vanter',concept:'Orgueil/Fierté',description:"Se glorifier de ses mérites — se vanter (fakhara) c'est étaler sa supériorité. C'est intérieur (orgueil) et extérieur (paroles). Ils ne font que se vanter (yafkharûna) et s'enorgueillir. La vantardise est un signe de faiblesse intérieure. Le fakhr est la fierté qui peut être légitime (fierté de sa foi) ou blâmable (orgueil mondain). Le fakhûr est le vaniteux que Dieu n'aime pas."},
    {sense:'fierté',concept:'Orgueil/Fierté',description:''},
    {sense:'vantardise',concept:'Orgueil/Fierté',description:''},
  ])
  log(r,'fkh',{'Orgueil/Fierté':"Étaler sa supériorité. Ils ne font que se vanter. Le fakhûr n'est pas aimé."})

  console.log('\n=== Batch 127 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
