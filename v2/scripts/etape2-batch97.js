const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 741, total = 2321

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

  // 750. jaa (جيء) — variante de jyy
  r = await ins('jaa', [
    {sense:'venir',concept:'Venue',description:"Skip si déjà fait comme jyy."},
  ])

  // 751. xdd (خذذ) — variante de akhdh
  r = await ins('xdd', [
    {sense:'prendre',concept:'Saisie',description:"Skip si variante."},
  ])

  // 752. fi (في) — dans, préposition
  r = await ins('fi', [
    {sense:'dans',concept:'Intériorité/Localisation',description:"Préposition indiquant la position intérieure — fî marque ce qui est à l'intérieur d'un contenant ou d'un espace. C'est permanent comme relation spatiale. Dans (fî) les cieux et la terre. Fî peut aussi indiquer le temps (dans tel mois) ou le domaine (dans la religion). L'intériorité de fî s'oppose à l'extériorité ou au dépassement."},
    {sense:'en',concept:'Intériorité/Localisation',description:''},
    {sense:'parmi',concept:'Intériorité/Localisation',description:''},
  ])
  log(r,'fi',{'Intériorité/Localisation':"Position intérieure. Dans les cieux et la terre. Temps et domaine."})

  // 753. abd (أبد) — éternité, toujours
  r = await ins('abd', [
    {sense:'éternité',concept:'Perpétuité/Durée',description:"Durée sans fin dans le futur — l'éternité (abad) est le temps qui n'a pas de terme. C'est permanent par définition. Immortels (khâlidîna fîhâ abadan) pour toujours. L'abad regarde vers le futur infini, tandis que l'azal regarde vers le passé infini. Ce qui est abadî n'aura jamais de fin. L'Enfer et le Paradis sont abadiyya, éternels."},
    {sense:'toujours',concept:'Perpétuité/Durée',description:''},
    {sense:'jamais',concept:'Perpétuité/Durée',description:''},
  ])
  log(r,'abd',{'Perpétuité/Durée':"Durée sans fin. Immortels pour toujours. Abad vers le futur infini."})

  // 754. qdm (قدم) — précéder, ancien, pied
  r = await ins('qdm', [
    {sense:'précéder',concept:'Antériorité/Établissement',description:"Venir avant dans le temps ou avancer — précéder (qaddama) c'est être ou mettre avant. C'est directionnel vers l'avant temporel. Ce que leurs mains ont avancé (qaddamat). Le qadîm est l'ancien, ce qui existe de longtemps. Le pied (qadam) est ce qui avance le premier. Avoir un pied de vérité (qadam sidq) c'est avoir un précédent honorable. L'établissement ferme."},
    {sense:'ancien',concept:'Antériorité/Établissement',description:''},
    {sense:'pied',concept:'Antériorité/Établissement',description:''},
    {sense:'avancer',concept:'Antériorité/Établissement',description:''},
  ])
  log(r,'qdm',{'Antériorité/Établissement':"Venir avant. Ce que leurs mains ont avancé. Pied de vérité."})

  // 755. xls (خلص) — purifier, sincère
  r = await ins('xls', [
    {sense:'purifier',concept:'Pureté/Sincérité',description:"Rendre pur de tout mélange — purifier (akhlasa) c'est dégager l'essentiel de ce qui l'altère. C'est directionnel vers la pureté. Ils Lui vouent un culte pur (mukhlisîna lahu d-dîn). L'ikhlâs est la sincérité absolue, adorer Dieu sans rien Lui associer. Le mukhlas est celui que Dieu a purifié, le mukhlis est celui qui se purifie pour Dieu."},
    {sense:'sincère',concept:'Pureté/Sincérité',description:''},
    {sense:'dévoué',concept:'Pureté/Sincérité',description:''},
  ])
  log(r,'xls',{'Pureté/Sincérité':"Rendre pur. Culte pur, mukhlisîn. Ikhlâs: sincérité absolue."})

  console.log('\n=== Batch 97 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
