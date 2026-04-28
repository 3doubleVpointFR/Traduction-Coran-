const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 683, total = 2321

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

  // Essai avec espace pour zxrf
  r = await ins('zxr f', [
    {sense:'ornement',concept:'Parure/Illusion',description:"Décoration luxueuse qui peut tromper — l'ornement (zukhruf) est ce qui brille et attire l'œil. C'est extérieur et souvent trompeur. Les paroles enjolivées (zukhruf al-qawl) que les démons inspirent. La zukhruf de la terre est sa parure végétale éphémère. L'ornement peut être vrai ou faux, d'où l'idée d'illusion."},
    {sense:'dorure',concept:'Parure/Illusion',description:''},
  ])
  log(r,'zxr f',{'Parure/Illusion':"Ce qui brille et attire. Paroles enjolivées. Vrai ou trompeur."})

  // 691. rd (أرض) — terre (variante)
  r = await ins('rd', [
    {sense:'terre',concept:'Sol/Monde',description:"La surface terrestre et le monde d'en bas — la terre (ard) est l'opposé du ciel. C'est permanent comme réalité cosmique. À Lui appartient ce qui est dans les cieux et sur la terre. La terre est le lieu de l'épreuve humaine, le théâtre de l'histoire. Elle fut créée en deux jours et sera bouleversée au Jour dernier."},
    {sense:'sol',concept:'Sol/Monde',description:''},
    {sense:'pays',concept:'Sol/Monde',description:''},
  ])
  log(r,'rd',{'Sol/Monde':"Surface terrestre. Ce qui est dans les cieux et sur terre. Lieu de l'épreuve."})

  // 692. ejm (عجم) — être muet, non-arabe
  r = await ins('ejm', [
    {sense:'non-arabe',concept:'Altérité/Inintelligible',description:"Celui dont on ne comprend pas la langue — le 'ajam est l'étranger qui ne parle pas arabe clairement. C'est permanent comme identité. Si Nous l'avions rendu en langue étrangère ('ajamiy). L'incompréhension linguistique crée une barrière. L'opposé est 'arabî, clair et éloquent. Le Coran est descendu en arabe clair pour être compris."},
    {sense:'étranger',concept:'Altérité/Inintelligible',description:''},
    {sense:'obscur',concept:'Altérité/Inintelligible',description:''},
  ])
  log(r,'ejm',{'Altérité/Inintelligible':"Celui qu'on ne comprend pas. Si en langue étrangère. Le Coran est en arabe clair."})

  // 693. jhl (جهل) — ignorer, ignorance
  r = await ins('jhl', [
    {sense:'ignorer',concept:'Ignorance/Aveuglement',description:"Ne pas savoir ce qu'on devrait savoir — l'ignorance (jahl) est l'absence de connaissance qui devrait être présente. C'est intérieur comme état mental et peut être volontaire ou non. L'ère préislamique est la jâhiliyya, l'âge de l'ignorance. Le jâhil agit par passion plutôt que par raison. L'ignorance est le contraire de la science ('ilm) et de la sagesse (hikma)."},
    {sense:'ignorance',concept:'Ignorance/Aveuglement',description:''},
    {sense:'être ignorant',concept:'Ignorance/Aveuglement',description:''},
  ])
  log(r,'jhl',{'Ignorance/Aveuglement':"Absence de savoir. La jâhiliyya. Agir par passion. Contraire de 'ilm."})

  // 694. hrth (حرث) — labourer, champ
  r = await ins('hrth', [
    {sense:'labourer',concept:'Culture/Effort',description:"Travailler la terre pour la rendre fertile — labourer (haratha) est l'effort qui prépare la récolte. C'est directionnel vers le fruit espéré. Vos femmes sont pour vous un champ (harth). Le champ cultivé est métaphore de la fertilité et de la descendance. Qui veut la récolte de l'au-delà, Nous lui accroîtrons son champ."},
    {sense:'champ',concept:'Culture/Effort',description:''},
    {sense:'cultiver',concept:'Culture/Effort',description:''},
  ])
  log(r,'hrth',{'Culture/Effort':"Travailler la terre. Vos femmes sont un champ. Effort vers la récolte."})

  // 695. slm (سلم) — paix, soumission, islam
  r = await ins('slm', [
    {sense:'paix',concept:'Paix/Soumission',description:"État de sécurité et d'harmonie — la paix (salâm/silm) est l'absence de conflit et la tranquillité. C'est permanent comme état recherché. Entrez dans la paix (silm) totalement ! Le salâm est la salutation des croyants et celle des anges au Paradis. La racine s-l-m donne aussi islâm (soumission à Dieu) et muslim (celui qui se soumet)."},
    {sense:'soumission',concept:'Paix/Soumission',description:''},
    {sense:'islam',concept:'Paix/Soumission',description:''},
    {sense:'salut',concept:'Paix/Soumission',description:''},
    {sense:'sain et sauf',concept:'Intégrité/Santé',description:"Être préservé de tout mal — salima c'est être indemne, intact. C'est permanent comme état de préservation. Un cœur sain (qalb salîm) est celui qui est pur de toute maladie spirituelle."},
  ])
  log(r,'slm',{'Paix/Soumission':"Sécurité et harmonie. Entrez dans la paix ! Islâm et muslim.",'Intégrité/Santé':"Être indemne. Cœur sain préservé de maladie spirituelle."})

  console.log('\n=== Batch 85 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
