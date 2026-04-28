const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 464, total = 2321

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

  // Skip ma'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])

  // 466. kayfa — comment
  r = await ins('kayfa', [
    {sense:'comment',concept:'Interrogation/Manière',description:"Adverbe interrogatif sur la manière ou l'état — kayfa demande par quel moyen, de quelle façon. C'est directionnel vers le mode d'action ou d'être. Comment Dieu guide-t-Il un peuple qui a mécru après avoir cru ? Comment pouvez-vous mécroire alors que les versets vous sont récités ? L'interrogation invite à la réflexion sur le processus."},
    {sense:'de quelle manière',concept:'Interrogation/Manière',description:''},
    {sense:'dans quel état',concept:'Interrogation/Manière',description:''},
  ])
  log(r,'kayfa',{'Interrogation/Manière':"Demande le moyen. Invite à la réflexion. Comment pouvez-vous mécroire?"})

  // 467. wba (وبأ) — épidémie, malheur
  r = await ins('wba', [
    {sense:'épidémie',concept:'Fléau/Calamité',description:"Maladie qui frappe massivement une population — l'épidémie (wabâ') est un châtiment collectif qui se répand. C'est ponctuel dans le déclenchement mais peut durer et décimer. Les épidémies sont des signes de la puissance divine et des rappels à l'humilité."},
    {sense:'fléau',concept:'Fléau/Calamité',description:''},
    {sense:'peste',concept:'Fléau/Calamité',description:''},
  ])
  log(r,'wba',{'Fléau/Calamité':"Maladie qui frappe massivement. Châtiment collectif. Rappel à l'humilité."})

  // 468. sh y a (شيء) — chose
  r = await ins('sh y a', [
    {sense:'chose',concept:'Existence/Entité',description:"Tout ce qui peut être désigné ou conçu — la chose (shay') est le concept le plus universel englobant tout ce qui est. C'est permanent comme catégorie ontologique. Dieu dit à une chose 'Sois' et elle est. Toute chose périra sauf Sa Face. La chose est ce qui peut être pensé, voulu, nommé."},
    {sense:'quelque chose',concept:'Existence/Entité',description:''},
    {sense:'rien',concept:'Existence/Entité',description:''},
    {sense:'affaire',concept:'Existence/Entité',description:''},
  ])
  log(r,'sh y a',{'Existence/Entité':"Tout ce qui peut être désigné. Catégorie universelle. Sois et c'est."})

  // 469. shqq (شقق) — fendre
  r = await ins('shqq', [
    {sense:'fendre',concept:'Fissure/Division',description:"Séparer en deux parties ce qui était un — fendre (shaqqa) est directionnel à travers ce qui est fendu. C'est ponctuel dans l'acte mais crée un état de séparation. Nous avons fendu la terre pour faire germer le grain. La lune fendue est un signe montré aux Mecquois. La fissure révèle ce qui était caché à l'intérieur."},
    {sense:'diviser',concept:'Fissure/Division',description:''},
    {sense:'fissure',concept:'Fissure/Division',description:''},
    {sense:'difficulté',concept:'Peine/Épreuve',description:"État pénible qui divise les forces — la difficulté (mashaqqa) épuise et sépare de son confort. Elle éprouve celui qui la subit."},
  ])
  log(r,'shqq',{'Fissure/Division':"Séparer ce qui était un. La terre fendue, la lune fendue.",'Peine/Épreuve':"Difficulté qui épuise. Éprouve celui qui la subit."})

  // 470. s j d (سجد) — se prosterner
  r = await ins('s j d', [
    {sense:'se prosterner',concept:'Adoration/Soumission',description:"Poser le front à terre en signe de soumission et d'adoration — la prosternation (sujûd) est directionnelle vers le bas et vers Dieu. C'est l'acte d'adoration suprême où le serviteur s'abaisse totalement devant son Seigneur. Prosternez-vous et adorez ! Le plus proche de Dieu est celui qui est prosterné. Même les étoiles et les arbres se prosternent."},
    {sense:'prosterner',concept:'Adoration/Soumission',description:''},
    {sense:'adorer',concept:'Adoration/Soumission',description:''},
    {sense:'mosquée',concept:'Lieu de prosternation',description:"Endroit consacré à la prière — la mosquée (masjid) est le lieu où l'on se prosterne. C'est permanent comme espace sacré."},
  ])
  log(r,'s j d',{'Adoration/Soumission':"Poser le front à terre. Acte suprême. Le plus proche de Dieu est prosterné.",'Lieu de prosternation':"La mosquée. Espace sacré permanent."})

  // 471. d k r (دخر) — humilier
  r = await ins('d k r', [
    {sense:'humilier',concept:'Abaissement/Soumission forcée',description:"Réduire quelqu'un à un état d'infériorité et de honte — l'humiliation (dakhr) est directionnelle vers celui qu'on abaisse. C'est ponctuel dans l'acte mais laisse une marque durable. Les orgueilleux entreront dans la Géhenne en état d'humiliation (dâkhirîn). L'humiliation est le sort de ceux qui refusaient de s'humilier volontairement devant Dieu."},
    {sense:'abaisser',concept:'Abaissement/Soumission forcée',description:''},
    {sense:'soumettre',concept:'Abaissement/Soumission forcée',description:''},
  ])
  log(r,'d k r',{'Abaissement/Soumission forcée':"Réduire à l'infériorité. Les orgueilleux humiliés dans la Géhenne."})

  // 472. wtfk (وتفك) — renverser
  r = await ins('wtfk', [
    {sense:'renverser',concept:'Destruction/Inversion',description:"Retourner sens dessus dessous, détruire en bouleversant — renverser (ifk) est un acte de destruction totale qui inverse l'ordre établi. Les cités renversées (al-mu'tafikât) sont Sodome et Gomorrhe, retournées pour leur perversion. Ce qui est renversé ne peut être redressé."},
    {sense:'retourner',concept:'Destruction/Inversion',description:''},
    {sense:'mensonge',concept:'Calomnie',description:"Parole qui inverse la vérité — le mensonge (ifk) est un renversement de la réalité. La calomnie contre Aïcha fut appelée ifk car elle inversait la vérité."},
  ])
  log(r,'wtfk',{'Destruction/Inversion':"Retourner sens dessus dessous. Sodome renversée.",'Calomnie':"Parole qui inverse la vérité. L'ifk contre Aïcha."})

  // 473. wry (وري) — cacher
  r = await ins('wry', [
    {sense:'cacher',concept:'Dissimulation',description:"Soustraire à la vue, ne pas montrer — cacher (wârâ/tawârâ) est directionnel vers l'intérieur ou le non-visible. Le corbeau montra à Caïn comment enterrer (yuwârî) son frère. Ce qui est caché peut être révélé par Dieu qui connaît le secret et le plus caché."},
    {sense:'dissimuler',concept:'Dissimulation',description:''},
    {sense:'enterrer',concept:'Dissimulation',description:''},
    {sense:'derrière',concept:'Position cachée',description:"Ce qui se trouve de l'autre côté — warâ' désigne ce qui est derrière, hors de vue."},
  ])
  log(r,'wry',{'Dissimulation':"Soustraire à la vue. Le corbeau enseigna à enterrer. Dieu connaît le caché.",'Position cachée':"Derrière, hors de vue."})

  // 474. rwh (روح) — esprit, vent
  r = await ins('rwh', [
    {sense:'esprit',concept:'Esprit/Souffle vital',description:"Principe de vie insufflé par Dieu dans les créatures — l'esprit (rûh) est ce qui anime et vivifie. Dieu a insufflé de Son esprit en Adam et en Marie. L'esprit est permanent comme réalité immatérielle distincte du corps. Gabriel est l'Esprit fidèle (ar-Rûh al-Amîn). L'esprit est ce qui relie la créature à son Créateur."},
    {sense:'âme',concept:'Esprit/Souffle vital',description:''},
    {sense:'vent',concept:'Souffle/Mouvement',description:"Air en mouvement — le vent (rîh) est le souffle de la création. Les vents sont envoyés annonciateurs avant la pluie. Ils peuvent être miséricorde ou châtiment."},
    {sense:'repos',concept:'Apaisement',description:"État de tranquillité — le repos (râha) est l'apaisement après la fatigue. C'est permanent comme état de paix intérieure."},
  ])
  log(r,'rwh',{'Esprit/Souffle vital':"Principe de vie. Insufflé par Dieu. Gabriel est l'Esprit fidèle.",'Souffle/Mouvement':"Air en mouvement. Annonciateurs avant la pluie.",'Apaisement':"Tranquillité. Paix intérieure."})

  console.log('\n=== Batch 49 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
