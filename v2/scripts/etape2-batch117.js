const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 838, total = 2321

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

  // 852. aff (أفف) — ouf, exclamation de dégoût
  r = await ins('aff', [
    {sense:'ouf',concept:'Dégoût/Impatience',description:"Exclamation de lassitude ou d'irritation — uff est le soupir d'agacement, le rejet exaspéré. C'est ponctuel et expressif. Ne leur dis pas 'ouf' (uff) ! Le respect dû aux parents interdit même cette petite marque d'impatience. Le uff est le minimum du manque de respect. Si même uff est interdit, que dire des paroles plus dures ? La piété filiale exige une patience totale."},
    {sense:'fi',concept:'Dégoût/Impatience',description:''},
    {sense:'bah',concept:'Dégoût/Impatience',description:''},
  ])
  log(r,'aff',{'Dégoût/Impatience':"Soupir d'agacement. Ne dis pas uff aux parents. Minimum du manque de respect."})

  // 853. zhzh (زحزح) — éloigner, écarter
  r = await ins('zhzh', [
    {sense:'éloigner',concept:'Éloignement/Salut',description:"Écarter de quelque chose — éloigner (zuhziha) c'est mettre à distance. C'est directionnel et ponctuel. Quiconque est éloigné (zuhziha) du Feu et introduit au Paradis a réussi. L'éloignement de l'Enfer est le salut. Le zuhzaha est l'écartement salvateur, la distance qui sépare du châtiment. Être éloigné du mal c'est être rapproché du bien."},
    {sense:'écarter',concept:'Éloignement/Salut',description:''},
    {sense:'repousser',concept:'Éloignement/Salut',description:''},
  ])
  log(r,'zhzh',{'Éloignement/Salut':"Mettre à distance. Quiconque est éloigné du Feu a réussi. Distance salvatrice."})

  // 854. nbd (نبذ) — rejeter, abandonner
  r = await ins('nbd', [
    {sense:'rejeter',concept:'Rejet/Abandon',description:"Écarter avec mépris — rejeter (nabadha) c'est se débarrasser de quelque chose ou quelqu'un. C'est ponctuel et définitif. Ils l'ont rejeté (nabadhuhu) derrière leur dos. Le Livre fut traité avec mépris. Le manbûdh est le rejeté, l'exclu. Rejeter la vérité c'est se condamner soi-même. Ce qu'on rejette témoignera contre soi."},
    {sense:'abandonner',concept:'Rejet/Abandon',description:''},
    {sense:'jeter',concept:'Rejet/Abandon',description:''},
  ])
  log(r,'nbd',{'Rejet/Abandon':"Écarter avec mépris. Ils l'ont rejeté derrière leur dos. Le rejet condamne."})

  // 855. lw (لو) — si seulement, conditionnel
  r = await ins('lw', [
    {sense:'si',concept:'Conditionnel/Irréel',description:"Particule de condition irréelle — law introduit ce qui ne s'est pas produit. C'est permanent comme outil grammatical. Si seulement (law) nous avions obéi ! Le regret du Jour du Jugement. Law exprime l'irréalisable, le passé qu'on ne peut changer. Les si du Jour dernier sont vains : le temps de l'action est révolu. Law est la particule du regret éternel."},
    {sense:'si seulement',concept:'Conditionnel/Irréel',description:''},
    {sense:'même si',concept:'Conditionnel/Irréel',description:''},
  ])
  log(r,'lw',{'Conditionnel/Irréel':"Condition irréelle. Si seulement nous avions obéi. Particule du regret éternel."})

  // 856. elyhm (عليه) — sur eux, préposition
  r = await ins('elyhm', [
    {sense:'sur eux',concept:'Surplomb/Obligation',description:"Préposition 'alâ avec pronom suffixe — 'alayhim exprime ce qui pèse ou s'impose. C'est permanent comme outil grammatical. Sur eux ('alayhim) est la colère de Dieu. Ce qui est 'alâ quelqu'un lui incombe comme devoir ou lui pèse comme sanction. La préposition marque l'obligation ou la conséquence qui s'abat d'en haut."},
    {sense:'contre eux',concept:'Surplomb/Obligation',description:''},
    {sense:'à leur charge',concept:'Surplomb/Obligation',description:''},
  ])
  log(r,'elyhm',{'Surplomb/Obligation':"Ce qui pèse ou s'impose. Sur eux la colère de Dieu. Obligation ou sanction."})

  console.log('\n=== Batch 117 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
