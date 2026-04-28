const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 704, total = 2321

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

  // 710. eln (علن) — être public, manifeste
  r = await ins('eln', [
    {sense:'manifester',concept:'Manifestation/Publicité',description:"Rendre visible ce qui était caché — manifester ('alana/yu'linu) est l'action de rendre public. C'est directionnel vers l'extérieur et le visible. Ce que vous manifestez ('alaniyyatan) et ce que vous cachez. L'opposé est asarra (cacher). Dieu connaît le secret et le manifeste. La 'alâniya est la vie publique, ce qu'on montre aux autres."},
    {sense:'public',concept:'Manifestation/Publicité',description:''},
    {sense:'déclarer',concept:'Manifestation/Publicité',description:''},
  ])
  log(r,'eln',{'Manifestation/Publicité':"Rendre visible. Ce que vous manifestez et cachez. Dieu connaît les deux."})

  // 711. amy (أمي) — illettré, maternel
  r = await ins('amy', [
    {sense:'illettré',concept:'Illettré/Maternel',description:"Celui qui n'a pas appris à lire — l'ummî est celui qui est resté comme sa mère l'a mis au monde, sans instruction livresque. C'est permanent comme état. Le Prophète illettré (an-nabî al-ummî) qui ne savait ni lire ni écrire. Son illettrisme est preuve de l'origine divine du Coran. Les ummiyyûn sont aussi les non-juifs qui n'ont pas reçu d'Écriture."},
    {sense:'maternel',concept:'Illettré/Maternel',description:''},
    {sense:'sans Écriture',concept:'Illettré/Maternel',description:''},
  ])
  log(r,'amy',{'Illettré/Maternel':"Sans instruction livresque. Le Prophète illettré. Preuve de l'origine divine."})

  // 712. qww (قوو) — force, puissance
  r = await ins('qww', [
    {sense:'force',concept:'Puissance/Capacité',description:"Capacité d'agir et d'effectuer — la force (quwwa) est le pouvoir de faire ce qu'on veut. C'est permanent comme attribut. Il n'y a de force (quwwa) et de puissance qu'en Dieu. Le qawî est celui qui possède la force. La force peut être physique ou morale. Prenez ce que Nous vous avons donné avec force (bi-quwwa), c'est-à-dire avec détermination."},
    {sense:'puissance',concept:'Puissance/Capacité',description:''},
    {sense:'capacité',concept:'Puissance/Capacité',description:''},
  ])
  log(r,'qww',{'Puissance/Capacité':"Capacité d'agir. Pas de force qu'en Dieu. Prendre avec détermination."})

  // 713. ksb (كسب) — acquérir, gagner
  r = await ins('ksb', [
    {sense:'acquérir',concept:'Acquisition/Rétribution',description:"Obtenir par son effort — acquérir (kasaba) est l'action de gagner ce qui devient sien. C'est directionnel vers le possesseur. Chaque âme est otage de ce qu'elle a acquis (kasabat). Le kasb est ce qu'on gagne par son travail, mais aussi les actes qu'on accumule. L'iktisâb est l'effort d'acquisition. Ce qu'on acquiert nous appartient et nous engage."},
    {sense:'gagner',concept:'Acquisition/Rétribution',description:''},
    {sense:'mériter',concept:'Acquisition/Rétribution',description:''},
  ])
  log(r,'ksb',{'Acquisition/Rétribution':"Obtenir par effort. Otage de ce qu'elle a acquis. Engage la responsabilité."})

  // 714. sy' (سيء) — mal, mauvais (variante)
  r = await ins("sy'", [
    {sense:'mal',concept:'Mal/Mauvais',description:"Ce qui cause du tort ou déplaît — le mal (sû'/sayyi'a) est l'opposé du bien. C'est permanent comme catégorie morale. La mauvaise action (sayyi'a) sera rétribuée par son équivalent. Le sû' peut être moral (péché) ou naturel (malheur). Ce qui est mauvais déplaît à Dieu et nuit à celui qui le commet ou le subit."},
    {sense:'mauvais',concept:'Mal/Mauvais',description:''},
    {sense:'péché',concept:'Mal/Mauvais',description:''},
  ])
  log(r,"sy'",{'Mal/Mauvais':"Ce qui cause du tort. La sayyi'a rétribuée. Déplaît à Dieu."})

  console.log('\n=== Batch 89 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
