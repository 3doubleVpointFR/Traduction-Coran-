const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  // 1. Fix sourate 114 — missing daily phrases
  const phrases114 = [
    // sdr - poitrine
    {word_key:'sdr', sense:'poitrine', arabic:'شَرَحَ اللهُ صَدرَهُ', phon:'sharaha allahu sadrahu', french:"Dieu a ouvert sa poitrine (il lui a donné la sérénité)."},
    {word_key:'sdr', sense:'poitrine', arabic:'ضاق صدره', phon:'daqa sadruhu', french:'Sa poitrine s\'est serrée (il a ressenti de l\'angoisse).'},
    {word_key:'sdr', sense:'poitrine', arabic:'ما في صدرك؟', phon:'ma fi sadrik?', french:'Qu\'est-ce qui est dans ta poitrine ? (Qu\'est-ce qui te préoccupe ?)'},
    // jnn - djinn/êtres cachés
    {word_key:'jnn', sense:'djinns', arabic:'الجن مخلوقات لا نراها', phon:'al-jinnu makhluqatun la naraha', french:'Les djinns sont des créatures que nous ne voyons pas.'},
    {word_key:'jnn', sense:'djinns', arabic:'الجنة تحت أقدام الأمهات', phon:'al-jannatu tahta aqdami al-ummahat', french:'Le jardin (paradis) est sous les pieds des mères.'},
    {word_key:'jnn', sense:'djinns', arabic:'جُنّ جنونه', phon:'junna jununuhu', french:'Il a perdu la raison (lien avec le sens de "couvert/caché").'},
    // nws - gens
    {word_key:'nws', sense:'gens', arabic:'خير الناس أنفعهم للناس', phon:'khayru an-nasi anfa\'uhum li-n-nas', french:'Les meilleurs des gens sont les plus utiles aux gens.'},
    {word_key:'nws', sense:'gens', arabic:'الناس سواسية', phon:'an-nasu sawasiyya', french:'Les gens sont égaux.'},
    {word_key:'nws', sense:'gens', arabic:'عامل الناس كما تحب أن يعاملوك', phon:'\'amil an-nasa kama tuhibbu an yu\'amiluk', french:'Traite les gens comme tu aimerais être traité.'},
  ]

  let inserted = 0
  for (const p of phrases114) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (!wa || !wa[0]) continue
    const {error} = await db.from('word_daily').insert({
      analysis_id: wa[0].id, sense: p.sense,
      arabic: p.arabic, phon: p.phon, french: p.french
    })
    if (error && error.message.includes('duplicate')) continue
    if (error) console.log('ERR ' + p.word_key + ':', error.message)
    else inserted++
  }
  console.log('✅ Sourate 114: ' + inserted + ' phrases insérées')

  // 2. Fix sourate 109 — mot "concept" dans verset 6
  const V6_109 = 6213
  const {data: va} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', V6_109).single()
  if (va && va.translation_explanation && /\bconcept\b/i.test(va.translation_explanation)) {
    const fixed = va.translation_explanation.replace(/\bconcept\b/gi, 'sens')
    await db.from('verse_analyses').update({translation_explanation: fixed}).eq('verse_id', V6_109)
    console.log('✅ Sourate 109 v6: "concept" → "sens"')
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
