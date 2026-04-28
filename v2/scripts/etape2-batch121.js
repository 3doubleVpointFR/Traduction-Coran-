const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 857, total = 2321

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

  // 873. mym (ميم) — lettre mîm
  r = await ins('mym', [
    {sense:'mîm',concept:'Lettre/Mystère',description:"Vingt-quatrième lettre de l'alphabet arabe — mîm est une des lettres isolées du Coran. C'est permanent comme symbole. Alif-Lâm-Mîm ouvre plusieurs sourates. Le sens de ces lettres est connu de Dieu seul selon la plupart des exégètes. Mîm peut symboliser Muhammad, ou Dieu (al-Majîd, le Glorieux). Les lettres isolées sont un mystère qui invite à la méditation."},
    {sense:'lettre',concept:'Lettre/Mystère',description:''},
  ])
  log(r,'mym',{'Lettre/Mystère':"Lettre de l'alphabet. Alif-Lâm-Mîm. Mystère qui invite à la méditation."})

  // 874. dny (دني) — bas, proche, ce bas monde
  r = await ins('dny', [
    {sense:'bas',concept:'Proximité/Bassesse',description:"Ce qui est proche et inférieur — le bas (daniyy) désigne ce qui est à portée et de moindre valeur. C'est permanent comme qualité. La vie d'ici-bas (al-hayât al-dunyâ). Le monde présent est le plus proche (adnâ) mais le plus bas en valeur comparé à l'au-delà. Préférer le bas au haut c'est échanger l'éternel contre l'éphémère. La dunyâ séduit mais passe."},
    {sense:'proche',concept:'Proximité/Bassesse',description:''},
    {sense:'ce monde',concept:'Proximité/Bassesse',description:''},
  ])
  log(r,'dny',{'Proximité/Bassesse':"Proche et inférieur. La vie d'ici-bas. Échanger l'éternel contre l'éphémère."})

  // 875. ann (أنّ) — que (conjonction)
  r = await ins('ann', [
    {sense:'que',concept:'Affirmation/Certitude',description:"Particule affirmative introduisant une proposition — anna affirme avec force ce qui suit. C'est permanent comme outil grammatical. Sache qu'(anna) Allah est Pardonneur. Anna renforce la certitude, différent de an (subordination simple). Ce qui suit anna est présenté comme établi, certain, indubitable. La foi repose sur des anna : certitudes qui structurent la croyance."},
    {sense:'certes',concept:'Affirmation/Certitude',description:''},
  ])
  log(r,'ann',{'Affirmation/Certitude':"Particule affirmative. Sache qu'Allah est Pardonneur. Certitudes qui structurent."})

  // 876. katabna (كتب) — nous avons écrit, prescrit
  r = await ins('katabna', [
    {sense:'nous avons écrit',concept:'Écriture/Prescription',description:"Première personne pluriel de kataba — katabnâ exprime l'action divine d'écrire ou prescrire. C'est ponctuel comme acte et permanent comme décret. Nous leur avons prescrit (katabnâ) que âme pour âme. L'écriture divine est loi immuable. Ce que Dieu écrit advient nécessairement. La prescription divine est à la fois commandement et prédestination."},
    {sense:'nous avons prescrit',concept:'Écriture/Prescription',description:''},
    {sense:'nous avons décrété',concept:'Écriture/Prescription',description:''},
  ])
  log(r,'katabna',{'Écriture/Prescription':"Action divine d'écrire. Nous avons prescrit. L'écriture divine est loi."})

  // 877. qtulu (قتل) — tuez, forme impérative
  r = await ins('qtulu', [
    {sense:'tuez',concept:'Combat/Ordre',description:"Impératif du verbe tuer — uqtulû ordonne le combat. C'est ponctuel comme ordre et contextuel. Tuez-les (uqtulûhum) où que vous les trouviez. L'ordre de combattre est encadré par des règles strictes : ne pas tuer femmes, enfants, moines, ne pas mutiler. Le qitâl (combat) n'est licite qu'en cas de légitime défense ou pour protéger les opprimés."},
    {sense:'combattez',concept:'Combat/Ordre',description:''},
  ])
  log(r,'qtulu',{'Combat/Ordre':"Impératif contextuel. Tuez-les où vous les trouvez. Règles strictes du combat."})

  console.log('\n=== Batch 121 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
