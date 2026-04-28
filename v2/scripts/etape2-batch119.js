const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 848, total = 2321

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
  r = await ins("mwa", [{sense:'eau',concept:'Élément',description:"Skip."}])

  // 863. n q r (نقر) — piquer, frapper, graver
  r = await ins('n q r', [
    {sense:'piquer',concept:'Perforation/Précision',description:"Frapper avec un bec ou un outil pointu — piquer (naqara) c'est percer avec précision. C'est ponctuel et localisé. La naqîra est le creux du noyau, la plus petite quantité. On ne leur fera pas tort d'une naqîra (fatîl wa naqîr). Le nâqûr est la trompette du Jugement qui sera frappée. Le naqr est aussi le coup sec, la percussion."},
    {sense:'frapper',concept:'Perforation/Précision',description:''},
    {sense:'graver',concept:'Perforation/Précision',description:''},
  ])
  log(r,'n q r',{'Perforation/Précision':"Frapper avec précision. Pas tort d'une naqîra. Trompette du Jugement."})

  // 864. wrk (ورك/شرك) — associer ou hanche
  r = await ins('wrk', [
    {sense:'hanche',concept:'Anatomie/Appui',description:"Partie du corps reliant tronc et jambe — le warik est la hanche, l'articulation qui porte le poids. C'est permanent comme partie anatomique. S'appuyer sur sa hanche c'est prendre du repos. La racine peut aussi être liée à l'association (shirk) selon la graphie. L'appui sur la hanche est une posture de confiance ou d'arrogance selon le contexte."},
    {sense:'appuyer',concept:'Anatomie/Appui',description:''},
  ])
  log(r,'wrk',{'Anatomie/Appui':"Hanche qui porte le poids. Appui et repos. Posture de confiance."})

  // 865. ney (نعي) — annoncer la mort, funérailles
  r = await ins('ney', [
    {sense:'annoncer la mort',concept:'Funérailles/Annonce',description:"Informer du décès de quelqu'un — le na'y est l'annonce funèbre. C'est ponctuel et solennel. La mort doit être annoncée pour que les rites soient accomplis. Le nâ'î est celui qui annonce le décès. Les funérailles suivent l'annonce. L'annonce de la mort rappelle à tous leur propre mortalité. Chaque na'y est un rappel de l'échéance inévitable."},
    {sense:'funérailles',concept:'Funérailles/Annonce',description:''},
    {sense:'pleurer un mort',concept:'Funérailles/Annonce',description:''},
  ])
  log(r,'ney',{'Funérailles/Annonce':"Annoncer le décès. Le na'y rappelle la mortalité. Échéance inévitable."})

  // 866. khq (خلق) — créer
  r = await ins('khq', [
    {sense:'créer',concept:'Création/Nature',description:"Faire exister ce qui n'existait pas — créer (khalaqa) c'est donner l'être. C'est l'acte divin par excellence, permanent comme attribut de Dieu. C'est Lui qui a créé (khalaqa) les cieux et la terre. Le khalq est la création, l'ensemble des créatures. Le khulq est le caractère, la nature morale. Création et nature morale sont liées : Dieu crée et façonne les caractères."},
    {sense:'caractère',concept:'Création/Nature',description:''},
    {sense:'nature',concept:'Création/Nature',description:''},
  ])
  log(r,'khq',{'Création/Nature':"Faire exister. Il a créé les cieux et la terre. Création et caractère liés."})

  // 867. edhb (عذب) — châtier, douce (eau)
  r = await ins('edhb', [
    {sense:'châtier',concept:'Châtiment/Douceur',description:"Infliger une peine pour une faute — châtier ('adhdhaba) c'est punir. C'est ponctuel comme acte et permanent comme menace. Un châtiment ('adhâb) douloureux. Le 'adhâb est la peine divine ou humaine. Paradoxalement, 'adhb signifie aussi doux (eau douce, 'adhb). L'eau douce rafraîchit, le châtiment brûle. Les contraires se rejoignent dans la racine : ce qui punit et ce qui désaltère."},
    {sense:'peine',concept:'Châtiment/Douceur',description:''},
    {sense:'eau douce',concept:'Châtiment/Douceur',description:''},
  ])
  log(r,'edhb',{'Châtiment/Douceur':"Infliger une peine. Châtiment douloureux. Eau douce et châtiment: contraires réunis."})

  console.log('\n=== Batch 119 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
