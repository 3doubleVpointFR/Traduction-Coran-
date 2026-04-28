const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 916, total = 2321

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
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])
  r = await ins("aya", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 935. hwd (هود) — juifs, retourner
  r = await ins('hwd', [
    {sense:'juifs',concept:'Judaïsme/Retour',description:"Les adeptes de la religion de Moïse — les hûd (juifs) sont les descendants d'Israël qui suivent la Torah. C'est permanent comme identité religieuse. Ceux qui ont cru, les juifs (al-ladhîna hâdû), les chrétiens... Le verbe hâda signifie retourner (à Dieu). Les juifs seraient ainsi 'ceux qui retournent' à Dieu. Hûd est aussi le nom d'un prophète arabe envoyé aux 'Âd."},
    {sense:'retourner',concept:'Judaïsme/Retour',description:''},
    {sense:'prophète Hûd',concept:'Judaïsme/Retour',description:''},
  ])
  log(r,'hwd',{'Judaïsme/Retour':"Adeptes de Moïse. Ceux qui retournent. Hûd prophète des 'Âd."})

  // 936. dlk (ذلك) — cela, celui-là
  r = await ins('dlk', [
    {sense:'cela',concept:'Démonstration/Distance',description:"Pronom démonstratif d'éloignement — dhâlika désigne ce qui est distant ou abstrait. C'est permanent comme outil grammatical. Ce (dhâlika) Livre, pas de doute en lui. La distance du démonstratif souligne l'élévation du Coran. Ce qui est dhâlika est distinct, séparé du locuteur. Dhâlika peut aussi exprimer la certitude : voilà ce qui est établi."},
    {sense:'celui-là',concept:'Démonstration/Distance',description:''},
    {sense:'voilà',concept:'Démonstration/Distance',description:''},
  ])
  log(r,'dlk',{'Démonstration/Distance':"Démonstratif éloigné. Ce Livre, pas de doute. Distance qui élève."})

  // 937. brhn (برهن) — preuve, démonstration
  r = await ins('brhn', [
    {sense:'preuve',concept:'Démonstration/Évidence',description:"Argument qui établit la vérité — la preuve (burhân) est l'évidence rationnelle. C'est permanent comme établissement de vérité. Apportez votre preuve (burhânakum) si vous êtes véridiques. Le burhân défie ceux qui prétendent sans prouver. La foi a ses preuves : les signes dans la création, les miracles des prophètes, la cohérence de la révélation. La vérité ne craint pas la démonstration."},
    {sense:'démonstration',concept:'Démonstration/Évidence',description:''},
    {sense:'argument',concept:'Démonstration/Évidence',description:''},
  ])
  log(r,'brhn',{'Démonstration/Évidence':"Argument qui établit. Apportez votre preuve. La vérité ne craint pas."})

  // 938. sbl (سبل) — chemin, voie
  r = await ins('sbl', [
    {sense:'chemin',concept:'Voie/Direction',description:"Route qu'on emprunte — le chemin (sabîl) mène quelque part. C'est permanent comme réalité et métaphorique comme guidance. Sur le chemin (sabîl) de Dieu. Le sabîl Allâh est la voie de Dieu, le djihad ou toute action pieuse. Ibn al-sabîl est le voyageur, le fils du chemin. Les subul sont les chemins multiples. Un seul chemin droit (sirât mustaqîm) face à de nombreuses voies d'égarement."},
    {sense:'voie',concept:'Voie/Direction',description:''},
    {sense:'voyageur',concept:'Voie/Direction',description:''},
  ])
  log(r,'sbl',{'Voie/Direction':"Route qu'on emprunte. Sur le chemin de Dieu. Un seul chemin droit."})

  // 939. hsd (حسد) — envier, jalousie
  r = await ins('hsd', [
    {sense:'envier',concept:'Envie/Jalousie',description:"Désirer le malheur de celui qui a ce qu'on n'a pas — l'envie (hasad) est le souhait que l'autre perde son bienfait. C'est intérieur et destructeur. Beaucoup des Gens du Livre voudraient par envie (hasadan) vous faire revenir mécréants. Le hâsid est l'envieux dont on demande protection. L'envie ronge l'envieux avant de nuire à l'envié. Contre elle : la gratitude et le contentement."},
    {sense:'jalousie',concept:'Envie/Jalousie',description:''},
    {sense:'convoitise',concept:'Envie/Jalousie',description:''},
  ])
  log(r,'hsd',{'Envie/Jalousie':"Souhaiter le malheur d'autrui. Par envie vous faire mécréants. L'envie ronge."})

  console.log('\n=== Batch 133 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
