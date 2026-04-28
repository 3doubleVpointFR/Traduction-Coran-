// ÉTAPE 1 — Segmentation LLM de tout le Coran
// 6236 versets, 5 en parallèle, ~40 minutes
// Appelle /api/analyze/step1-only et stocke les résultats en BDD
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const API_BASE = 'http://localhost:3000'
const PARALLEL = 5
const FORCE = false  // Skip les versets déjà traités
const DELAY_MS = 500  // Pause entre chaque batch pour pas crasher le serveur
const MAX_RETRIES = 3  // Nombre de tentatives si fetch échoue
const startTime = Date.now()
let totalVerses = 0
let totalSegments = 0
let totalRootsCreated = 0
let errors = []

async function callStep1(surahId, verseNum, attempt = 1) {
  try {
    const res = await fetch(`${API_BASE}/api/analyze/step1-only`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ surah_id: surahId, verse_num: verseNum }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  } catch (e) {
    if (attempt < MAX_RETRIES) {
      const wait = attempt * 2000  // 2s, 4s, 6s
      console.log(`    ⚠ ${surahId}:${verseNum} retry ${attempt}/${MAX_RETRIES} dans ${wait/1000}s...`)
      await new Promise(r => setTimeout(r, wait))
      return callStep1(surahId, verseNum, attempt + 1)
    }
    throw new Error(`${e.message} (après ${MAX_RETRIES} tentatives)`)
  }
}

async function saveVerseStep1(surahId, verseNum, result) {
  const segments = result.segments || []
  const importants = segments.filter(s => s.type === 'important')
  const particles = segments.filter(s => s.type === 'particle')

  // Créer word_analyses pour les nouvelles racines
  let newRoots = 0
  for (const w of importants) {
    if (!w.key) continue
    // Vérifier si la racine existe déjà
    const { data: existing } = await db.from('word_analyses')
      .select('id').eq('word_key', w.key).limit(1)
    if (existing && existing.length > 0) continue

    // Créer la nouvelle racine
    const { error } = await db.from('word_analyses').insert({
      word_key: w.key,
      root_ar: w.root || '',
      root_phon: w.key,
      root_meaning: '',
      model_used: 'gpt-4.1-mini',
      prompt_version: 'v6-step1',
      analysis_step: 'tagged',
    })
    if (error) {
      // Doublon possible si parallèle — ignorer
      if (!error.message.includes('duplicate')) {
        console.log(`    ERREUR word_analyses ${w.key}: ${error.message}`)
      }
    } else {
      newRoots++
      totalRootsCreated++
    }
  }

  // Stocker les segments dans verse_analyses (segments)
  // On upsert : si verse_analyses existe déjà, on met à jour segments
  const { data: existingVA } = await db.from('verse_analyses')
    .select('id').eq('verse_id', result.verse_id).limit(1)

  if (existingVA && existingVA.length > 0) {
    // Ne PAS écraser segments (étape 4), stocker dans segments_step1
    await db.from('verse_analyses')
      .update({ segments_step1: segments })
      .eq('verse_id', result.verse_id)
  } else {
    const { error } = await db.from('verse_analyses').insert({
      verse_id: result.verse_id,
      segments_step1: segments,
    })
    if (error && !error.message.includes('duplicate')) {
      console.log(`    ERREUR verse_analyses ${surahId}:${verseNum}: ${error.message}`)
    }
  }

  return { importants: importants.length, particles: particles.length, newRoots }
}

// Traiter un batch de versets en parallèle
async function processBatch(batch) {
  return Promise.all(batch.map(async ({ surahId, verseNum }) => {
    try {
      const result = await callStep1(surahId, verseNum)
      const stats = await saveVerseStep1(surahId, verseNum, result)
      totalVerses++
      totalSegments += stats.importants + stats.particles
      return { surahId, verseNum, ...stats, ok: true }
    } catch (e) {
      errors.push(`${surahId}:${verseNum} — ${e.message}`)
      return { surahId, verseNum, ok: false, error: e.message }
    }
  }))
}

async function run() {
  console.log('════════════════════════════════════════════════════')
  console.log('  ÉTAPE 1 — SEGMENTATION LLM — CORAN COMPLET')
  console.log('  6236 versets, ' + PARALLEL + ' en parallèle')
  console.log('════════════════════════════════════════════════════')
  console.log('')

  // Récupérer toutes les sourates avec leur nombre de versets
  const { data: surahs } = await db.from('surahs')
    .select('id, name_latin, name_fr, verse_count')
    .order('id')

  if (!surahs || surahs.length === 0) {
    console.log('ERREUR: Aucune sourate trouvée')
    return
  }

  let globalVerseCount = 0

  for (const surah of surahs) {
    const surahStart = Date.now()
    console.log('')
    console.log(`=== SOURATE ${surah.id}/114 — ${surah.name_latin} (${surah.name_fr}) — ${surah.verse_count} versets ===`)

    // Vérifier quels versets sont déjà faits
    const { data: existingVA } = await db.from('verse_analyses')
      .select('verse_id')
      .gte('verse_id', globalVerseCount + 1)
      .lte('verse_id', globalVerseCount + surah.verse_count)
      .not('segments', 'is', null)

    const doneVerseIds = FORCE ? new Set() : new Set((existingVA || []).map(v => v.verse_id))

    // Construire la liste des versets à traiter
    const versesToDo = []
    for (let v = 1; v <= surah.verse_count; v++) {
      const verseId = globalVerseCount + v
      if (!doneVerseIds.has(verseId)) {
        versesToDo.push({ surahId: surah.id, verseNum: v })
      }
    }

    if (versesToDo.length === 0) {
      console.log(`  ✓ Tous les ${surah.verse_count} versets déjà faits — skip`)
      globalVerseCount += surah.verse_count
      continue
    }

    const skipped = surah.verse_count - versesToDo.length
    if (skipped > 0) {
      console.log(`  ${skipped} versets déjà faits, ${versesToDo.length} restants`)
    }

    // Traiter par batch de PARALLEL
    let surahImportants = 0
    let surahParticles = 0
    let surahNewRoots = 0
    let surahErrors = 0

    for (let i = 0; i < versesToDo.length; i += PARALLEL) {
      const batch = versesToDo.slice(i, i + PARALLEL)
      const results = await processBatch(batch)
      // Pause entre chaque batch pour pas surcharger le serveur
      if (i + PARALLEL < versesToDo.length) await new Promise(r => setTimeout(r, DELAY_MS))

      for (const r of results) {
        if (r.ok) {
          surahImportants += r.importants
          surahParticles += r.particles
          surahNewRoots += r.newRoots
          process.stdout.write(`  ${r.surahId}:${r.verseNum} → ${r.importants}i+${r.particles}p`)
          if (r.newRoots > 0) process.stdout.write(` (+${r.newRoots} racines)`)
          console.log('')
        } else {
          surahErrors++
          console.log(`  ${r.surahId}:${r.verseNum} → ERREUR: ${r.error}`)
        }
      }
    }

    const surahTime = ((Date.now() - surahStart) / 1000).toFixed(1)
    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1)
    console.log(`  ✓ Sourate ${surah.id} terminée — ${versesToDo.length} versets — ${surahImportants}i+${surahParticles}p — ${surahNewRoots} nouvelles racines — ${surahTime}s`)
    if (surahErrors > 0) console.log(`  ⚠ ${surahErrors} erreurs`)
    console.log(`  [PROGRESSION] ${totalVerses}/6236 versets — ${totalRootsCreated} racines créées — ${elapsed} min écoulées`)

    globalVerseCount += surah.verse_count
  }

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1)
  console.log('')
  console.log('════════════════════════════════════════════════════')
  console.log('  ÉTAPE 1 TERMINÉE — CORAN COMPLET')
  console.log(`  ${totalVerses} versets traités`)
  console.log(`  ${totalSegments} segments (importants + particules)`)
  console.log(`  ${totalRootsCreated} nouvelles racines créées`)
  console.log(`  ${errors.length} erreurs`)
  console.log(`  Durée totale : ${totalTime} minutes`)
  console.log('════════════════════════════════════════════════════')

  if (errors.length > 0) {
    console.log('')
    console.log('ERREURS :')
    for (const e of errors) console.log('  ' + e)
  }
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
