const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 616, total = 2321

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

  // Skip entrées connues
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 622. txd (تخذ) — prendre
  r = await ins('txd', [
    {sense:'prendre',concept:'Saisie/Adoption',description:"S'emparer de quelque chose, adopter — prendre (ittakhadha) est directionnel vers ce qu'on saisit ou choisit. Ils ont pris (ittakhadhû) leurs savants et leurs moines comme seigneurs en dehors de Dieu. Prendre des alliés, prendre un chemin, prendre pour soi. L'acte de prendre engage la responsabilité."},
    {sense:'adopter',concept:'Saisie/Adoption',description:''},
    {sense:'choisir',concept:'Saisie/Adoption',description:''},
  ])
  log(r,'txd',{'Saisie/Adoption':"S'emparer, choisir. Ils ont pris leurs moines comme seigneurs. Engage la responsabilité."})

  // 623. flt (فلت) — échapper
  r = await ins('flt', [
    {sense:'échapper',concept:'Fuite/Libération',description:"Se soustraire à une emprise — échapper (aflata/yanfalitu) c'est se libérer de ce qui retenait. C'est directionnel vers l'extérieur de la contrainte. Ils faillirent s'en prendre à lui (de peu ils le tuaient). L'échappée peut être salutaire ou tragique selon ce à quoi on échappe."},
    {sense:'glisser',concept:'Fuite/Libération',description:''},
    {sense:'se libérer',concept:'Fuite/Libération',description:''},
  ])
  log(r,'flt',{'Fuite/Libération':"Se soustraire. Ils faillirent s'en prendre à lui. Salutaire ou tragique."})

  // 624. fla (فلو) — labourer, échouer
  r = await ins('fla', [
    {sense:'labourer',concept:'Travail agricole/Réussite',description:"Cultiver la terre — labourer (falaha) prépare le sol pour la semence. Le fellah est le paysan qui travaille la terre. Réussir (aflaha) c'est cultiver son âme comme on cultive un champ. Bienheureux (qad aflaha) sont les croyants ! Le succès spirituel est une moisson après l'effort."},
    {sense:'réussir',concept:'Travail agricole/Réussite',description:''},
    {sense:'prospérer',concept:'Travail agricole/Réussite',description:''},
  ])
  log(r,'fla',{'Travail agricole/Réussite':"Cultiver la terre et l'âme. Bienheureux les croyants ! Succès comme moisson."})

  // 625. yws (يوس) — Joseph, désespoir
  r = await ins('yws', [
    {sense:'Joseph',concept:'Prophète/Histoire',description:"Prophète fils de Jacob, vendu par ses frères — Yûsuf est le beau prophète dont l'histoire occupe une sourate entière. C'est permanent comme nom propre. Dans l'histoire de Joseph et ses frères, il y a des signes pour ceux qui interrogent. Sa patience face à l'épreuve est modèle de vertu."},
    {sense:'désespérer',concept:'Perte d espoir',description:"Perdre tout espoir — le désespoir (ya's/iblâs) est l'abandon de l'espérance en Dieu. Ne désespérez pas de la miséricorde de Dieu ! Seuls les mécréants désespèrent."},
  ])
  log(r,'yws',{'Prophète/Histoire':"Fils de Jacob. Le beau prophète. Patience face à l'épreuve.",'Perte d espoir':"Ne désespérez pas de la miséricorde ! Seuls les mécréants désespèrent."})

  // 626. khrr (خرر) — tomber prosterné
  r = await ins('khrr', [
    {sense:'tomber prosterné',concept:'Prosternation/Humilité',description:"Se jeter à terre en signe de soumission — tomber (kharra) est la chute vers le bas, mouvement de l'humilité. C'est ponctuel mais profond. Ils tombent prosternés (yakkhirrûna sujjadan) en pleurant. La prosternation est la position la plus proche de Dieu, où l'orgueilleux devient humble."},
    {sense:'se prosterner',concept:'Prosternation/Humilité',description:''},
    {sense:"s'écrouler",concept:'Chute',description:"Tomber de tout son poids — les montagnes s'écroulent devant la majesté divine."},
  ])
  log(r,'khrr',{'Prosternation/Humilité':"Se jeter à terre. Tombent prosternés en pleurant. Position la plus proche de Dieu.",'Chute':"Tomber de tout son poids. Montagnes s'écroulent."})

  console.log('\n=== Batch 71 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
