const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 877, total = 2321

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

  // 893. alaa (ألا) — n'est-ce pas, certes
  r = await ins('alaa', [
    {sense:'n\'est-ce pas',concept:'Assertion/Interpellation',description:"Particule d'interrogation rhétorique ou d'assertion — alâ introduit une affirmation forte ou une question dont la réponse est évidente. C'est permanent comme outil grammatical. N'est-ce pas (alâ) que c'est Lui le Pardonneur ? La question n'attend qu'une réponse : oui. Alâ peut aussi introduire un avertissement : Alâ, prenez garde ! C'est l'interpellation qui éveille l'attention."},
    {sense:'certes',concept:'Assertion/Interpellation',description:''},
    {sense:'attention',concept:'Assertion/Interpellation',description:''},
  ])
  log(r,'alaa',{'Assertion/Interpellation':"Interrogation rhétorique. N'est-ce pas qu'Il est Pardonneur? Éveil de l'attention."})

  // 894. s t t (ستت) — six
  r = await ins('s t t', [
    {sense:'six',concept:'Nombre/Création',description:"Nombre cardinal — six (sitta) est le nombre des jours de la création. C'est permanent comme quantité. Il a créé les cieux et la terre en six (sitta) jours. Les six jours de la création rappellent l'ordre divin, les étapes de la mise en forme du cosmos. Le sixième jour précède le repos, l'istiwâ' sur le Trône. Six est le nombre de la perfection créatrice."},
    {sense:'sixième',concept:'Nombre/Création',description:''},
  ])
  log(r,'s t t',{'Nombre/Création':"Nombre cardinal. Créé en six jours. Nombre de la perfection créatrice."})

  // 895. e r sh (عرش) — trône
  r = await ins('e r sh', [
    {sense:'trône',concept:'Souveraineté/Transcendance',description:"Siège du pouvoir suprême — le Trône ('Arsh) est le symbole de la souveraineté divine. C'est permanent et transcendant. Le Miséricordieux S'est établi (istawâ) sur le Trône. L'istiwâ' sur le 'Arsh exprime la domination absolue de Dieu sur la création. Le 'Arsh est porté par des anges. Il est au-dessus des cieux, englobant tout. Comment Dieu est sur le Trône est au-delà de la compréhension humaine."},
    {sense:'siège',concept:'Souveraineté/Transcendance',description:''},
    {sense:'autorité',concept:'Souveraineté/Transcendance',description:''},
  ])
  log(r,'e r sh',{'Souveraineté/Transcendance':"Siège du pouvoir. Le Miséricordieux sur le Trône. Au-delà de la compréhension."})

  // 896. dhm / ðmm (ذمم) — blâmer
  r = await ins('dhm', [
    {sense:'blâmer',concept:'Blâme/Protection',description:"Critiquer pour une faute — blâmer (dhamma) c'est reprocher à quelqu'un son acte. C'est intérieur (jugement) et extérieur (parole). Ils seront sans excuse ni protection (dhimma). La dhimma est aussi le pacte de protection accordé aux non-musulmans. Le madhmûm est le blâmé, celui qu'on critique. Revenir blâmé (madhmûman) et repoussé, c'est l'échec total."},
    {sense:'reprocher',concept:'Blâme/Protection',description:''},
    {sense:'pacte',concept:'Blâme/Protection',description:''},
  ])
  log(r,'dhm',{'Blâme/Protection':"Critiquer pour une faute. Sans excuse ni dhimma. Le blâmé échoue."})

  // 897. ðmm (ذمم) — variante
  r = await ins('ðmm', [
    {sense:'blâmer',concept:'Blâme/Protection',description:"Skip si déjà fait comme dhm."},
  ])

  // 898. wbw (وبع) — maladie, épidémie
  r = await ins('wbw', [
    {sense:'épidémie',concept:'Maladie/Fléau',description:"Maladie qui se répand — le wabâ' est l'épidémie, le fléau qui frappe les populations. C'est ponctuel comme événement mais dévastateur. Les épidémies sont des épreuves collectives. Elles rappellent la fragilité humaine et la toute-puissance divine. Face au wabâ', la patience et la prière sont les remèdes de l'âme."},
    {sense:'maladie',concept:'Maladie/Fléau',description:''},
    {sense:'fléau',concept:'Maladie/Fléau',description:''},
  ])
  log(r,'wbw',{'Maladie/Fléau':"Épidémie dévastatrice. Épreuve collective. Fragilité humaine rappelée."})

  console.log('\n=== Batch 125 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
