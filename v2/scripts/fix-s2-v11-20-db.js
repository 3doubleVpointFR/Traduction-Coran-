// fix-s2-v11-20-db.js — Corrections base de données S2:11-20
// FIX 1: word_key tagging errors in segments_step1 (verse_id 26 and 27)
// FIX 2: Create 3 missing word_analyses entries (tgy, mvl, xtf)
// FIX 3: Create word_meanings (étape 2) for the 3 new roots

const { createClient } = require('@supabase/supabase-js')

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY

const db = createClient(SUPABASE_URL, SUPABASE_KEY)

// ─────────────────────────────────────────────────────────────────────────────
// FIX 1 — Fix word_key tagging errors in segments_step1
// ─────────────────────────────────────────────────────────────────────────────

async function fix1_segmentWordKeys() {
  console.log('\n' + '='.repeat(60))
  console.log('FIX 1: word_key tagging errors in segments_step1')
  console.log('='.repeat(60))

  // --- verse_id=26 (S2:19): "a" → "adhn", and check "h" → "hdhr" ---
  await fixSegmentKey({
    verse_id: 26,
    label: 'S2:19',
    changes: [
      { from: 'a', to: 'adhn', note: 'آذَانِهِمْ = their ears (root أ ذ ن)' },
    ],
    extra_check: 'h',
    extra_candidates: ['hdhr', 'hdr'],
    extra_note: 'حَذَرَ = caution/fear (root ح ذ ر)',
  })

  // --- verse_id=27 (S2:20): "m" → "mshy" ---
  await fixSegmentKey({
    verse_id: 27,
    label: 'S2:20',
    changes: [
      { from: 'm', to: 'mshy', note: 'مَّشَوْا = they walked (root م ش ي)' },
    ],
    extra_check: null,
  })
}

async function fixSegmentKey({ verse_id, label, changes, extra_check, extra_candidates, extra_note }) {
  console.log(`\n[${label}] verse_id=${verse_id}`)

  const { data: row, error: fetchErr } = await db
    .from('verse_analyses')
    .select('id, verse_id, segments_step1')
    .eq('verse_id', verse_id)
    .single()

  if (fetchErr || !row) {
    console.log(`  FETCH ERROR: ${fetchErr?.message || 'no row found'}`)
    return
  }

  const segs = row.segments_step1
  if (!Array.isArray(segs)) {
    console.log(`  segments_step1 is not an array: ${JSON.stringify(segs)}`)
    return
  }

  console.log(`  Found row id=${row.id}, ${segs.length} segments`)
  console.log(`  Current word_keys: [${segs.map(s => s.word_key).join(', ')}]`)

  let modified = false

  // Apply the main changes
  for (const change of changes) {
    const idx = segs.findIndex(s => s.word_key === change.from)
    if (idx === -1) {
      // Check if already done
      const alreadyIdx = segs.findIndex(s => s.word_key === change.to)
      if (alreadyIdx !== -1) {
        console.log(`  word_key='${change.from}' not found — '${change.to}' already present (already fixed)`)
      } else {
        console.log(`  word_key='${change.from}' NOT FOUND and '${change.to}' also not found — skipping`)
      }
      continue
    }
    segs[idx].word_key = change.to
    modified = true
    console.log(`  '${change.from}' → '${change.to}' (${change.note})`)
  }

  // Check extra_check key if specified
  if (extra_check) {
    const extraIdx = segs.findIndex(s => s.word_key === extra_check)
    if (extraIdx !== -1) {
      console.log(`  Found segment with word_key='${extra_check}' — checking candidates: ${extra_candidates.join(', ')}`)
      // Look up which candidate exists in word_analyses
      let resolved = null
      for (const candidate of extra_candidates) {
        const { data: waRow } = await db
          .from('word_analyses')
          .select('id, word_key')
          .eq('word_key', candidate)
          .limit(1)
        if (waRow && waRow.length > 0) {
          resolved = candidate
          console.log(`  Candidate '${candidate}' EXISTS in word_analyses (id=${waRow[0].id})`)
          break
        } else {
          console.log(`  Candidate '${candidate}' NOT in word_analyses`)
        }
      }
      if (resolved) {
        segs[extraIdx].word_key = resolved
        modified = true
        console.log(`  '${extra_check}' → '${resolved}' (${extra_note})`)
      } else {
        console.log(`  No candidate found for '${extra_check}' — leaving as-is (will need manual fix)`)
      }
    } else {
      console.log(`  word_key='${extra_check}' not found in segments — nothing extra to fix`)
    }
  }

  if (!modified) {
    console.log(`  No changes needed`)
    return
  }

  const { error: updateErr } = await db
    .from('verse_analyses')
    .update({ segments_step1: segs })
    .eq('id', row.id)

  if (updateErr) {
    console.log(`  UPDATE ERROR: ${updateErr.message}`)
  } else {
    console.log(`  UPDATE OK — new word_keys: [${segs.map(s => s.word_key).join(', ')}]`)
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FIX 2 — Create 3 missing word_analyses entries
// ─────────────────────────────────────────────────────────────────────────────

const MISSING_ROOTS = [
  { word_key: 'tgy', root_ar: 'ط غ ي', root_phon: 'tgy', total_occurrences: 39 },
  { word_key: 'mvl', root_ar: 'م ث ل', root_phon: 'mvl', total_occurrences: 169 },
  { word_key: 'xtf', root_ar: 'خ ط ف', root_phon: 'xtf', total_occurrences: 4 },
]

async function fix2_wordAnalyses() {
  console.log('\n' + '='.repeat(60))
  console.log('FIX 2: Create missing word_analyses entries')
  console.log('='.repeat(60))

  const results = {}

  for (const root of MISSING_ROOTS) {
    // Check if already exists
    const { data: existing } = await db
      .from('word_analyses')
      .select('id, word_key, total_occurrences')
      .eq('word_key', root.word_key)
      .limit(1)

    if (existing && existing.length > 0) {
      console.log(`\n  ${root.word_key} — already exists (id=${existing[0].id}, total_occurrences=${existing[0].total_occurrences}) — SKIP`)
      results[root.word_key] = { id: existing[0].id, action: 'existing' }
      continue
    }

    const { data: inserted, error: insertErr } = await db
      .from('word_analyses')
      .insert({
        word_key: root.word_key,
        root_ar: root.root_ar,
        root_phon: root.root_phon,
        total_occurrences: root.total_occurrences,
        analysis_step: 'tagged',
      })
      .select('id')
      .single()

    if (insertErr) {
      console.log(`\n  ${root.word_key} — INSERT ERROR: ${insertErr.message}`)
      results[root.word_key] = { id: null, action: 'error', error: insertErr.message }
    } else {
      console.log(`\n  ${root.word_key} — INSERTED id=${inserted.id} (root_ar='${root.root_ar}', total_occurrences=${root.total_occurrences})`)
      results[root.word_key] = { id: inserted.id, action: 'inserted' }
    }
  }

  return results
}

// ─────────────────────────────────────────────────────────────────────────────
// FIX 3 — Create word_meanings (étape 2) for the 3 new roots
// ─────────────────────────────────────────────────────────────────────────────

function buildMeaningsForRoot(word_key, analysis_id) {
  const rows = []

  if (word_key === 'tgy') {
    // Concept 1: Transgression/Excès (retenu)
    const senses1 = [
      { sense: 'transgresser', description: 'Acte extérieur de dépasser les limites fixées — le tughyan est un débordement qui sort de celui qui transgresse et affecte tout ce qui l\'entoure. C\'est directionnel du transgresseur vers les limites qu\'il franchit. Le tughyan peut être permanent comme caractère ou ponctuel comme acte. L\'eau qui déborde (tafa) est du même champ sémantique — le tughyan est un excès qui ne reconnaît aucune borne.' },
      { sense: 'dépasser les limites', description: null },
      { sense: 'outrepasser', description: null },
      { sense: 'excès', description: null },
      { sense: 'tyrannie', description: null },
    ]
    // Concept 2: Inondation/Débordement
    const senses2 = [
      { sense: 'déborder', description: 'Sens concret lié à la racine. Eau qui déborde, inondation — ce sens éclaire le champ sémantique de l\'excès et du franchissement des limites.' },
      { sense: 'inonder', description: null },
    ]
    let order = 1
    for (const s of senses1) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Transgression/Excès', sense: s.sense, description: s.description, display_order: order++ })
    for (const s of senses2) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Inondation/Débordement', sense: s.sense, description: s.description, display_order: order++ })
  }

  if (word_key === 'mvl') {
    // Concept 1: Similitude/Comparaison
    const senses1 = [
      { sense: 'exemple', description: 'Acte de mettre en parallèle deux réalités pour éclairer l\'une par l\'autre — le mathal est un exemple qui sort de celui qui compare et atteint celui qui écoute. C\'est directionnel et pédagogique. Le mathal est permanent comme outil d\'explication. La parabole éclaire l\'inconnu par le connu.' },
      { sense: 'parabole', description: null },
      { sense: 'similitude', description: null },
      { sense: 'comparaison', description: null },
      { sense: 'semblable', description: null },
    ]
    // Concept 2: Ressemblance/Identité
    const senses2 = [
      { sense: 'ressembler', description: 'État de correspondance entre deux choses — la ressemblance est un lien entre deux réalités qui partagent des caractéristiques. C\'est relationnel et peut être permanent ou temporaire.' },
      { sense: 'être semblable', description: null },
      { sense: 'pareil', description: null },
      { sense: 'équivalent', description: null },
    ]
    // Concept 3: Représentation/Image
    const senses3 = [
      { sense: 'statue', description: 'Sens concret lié à la racine. Forme visible qui représente quelque chose — l\'image ou la statue est une matérialisation de la ressemblance.' },
      { sense: 'image', description: null },
      { sense: 'représentation', description: null },
    ]
    let order = 1
    for (const s of senses1) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Similitude/Comparaison', sense: s.sense, description: s.description, display_order: order++ })
    for (const s of senses2) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Ressemblance/Identité', sense: s.sense, description: s.description, display_order: order++ })
    for (const s of senses3) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Représentation/Image', sense: s.sense, description: s.description, display_order: order++ })
  }

  if (word_key === 'xtf') {
    // Concept 1: Saisissement/Arrachement
    const senses1 = [
      { sense: 'saisir rapidement', description: 'Acte extérieur de prendre quelque chose avec une rapidité fulgurante — le khatf sort de celui qui saisit et atteint ce qui est saisi. C\'est directionnel, ponctuel et violent dans sa rapidité. L\'éclair qui \'saisit\' la vue est un khatf — la vitesse est essentielle au concept.' },
      { sense: 'arracher', description: null },
      { sense: 'enlever brusquement', description: null },
      { sense: 'ravir', description: null },
    ]
    let order = 1
    for (const s of senses1) rows.push({ analysis_id, meaning_type: 'etymology', concept: 'Saisissement/Arrachement', sense: s.sense, description: s.description, display_order: order++ })
  }

  return rows
}

async function fix3_wordMeanings(wordAnalysesResults) {
  console.log('\n' + '='.repeat(60))
  console.log('FIX 3: Create word_meanings (étape 2) for 3 new roots')
  console.log('='.repeat(60))

  for (const { word_key } of MISSING_ROOTS) {
    const result = wordAnalysesResults[word_key]
    if (!result || !result.id) {
      console.log(`\n  ${word_key} — no analysis_id available — SKIP`)
      continue
    }

    const analysis_id = result.id
    console.log(`\n  ${word_key} (analysis_id=${analysis_id})`)

    // Check if meanings already exist
    const { count } = await db
      .from('word_meanings')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', analysis_id)
      .not('concept', 'is', null)

    if (count > 0) {
      console.log(`    Already has ${count} concept rows — SKIP`)
      continue
    }

    const rows = buildMeaningsForRoot(word_key, analysis_id)
    if (rows.length === 0) {
      console.log(`    No meanings defined — SKIP`)
      continue
    }

    const { data: inserted, error: insertErr } = await db
      .from('word_meanings')
      .insert(rows)
      .select('id')

    if (insertErr) {
      console.log(`    INSERT ERROR: ${insertErr.message}`)
    } else {
      const concepts = [...new Set(rows.map(r => r.concept))]
      const conceptDetail = concepts.map(c => `${c} (${rows.filter(r => r.concept === c).length} sens)`)
      console.log(`    INSERTED ${inserted.length} rows — IDs: ${inserted.map(r => r.id).join(', ')}`)
      console.log(`    Concepts: ${conceptDetail.join(', ')}`)
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== CORRECTIONS BASE DE DONNÉES S2:11-20 ===')
  console.log(`Timestamp: ${new Date().toISOString()}`)

  try {
    await fix1_segmentWordKeys()
    const wordAnalysesResults = await fix2_wordAnalyses()
    await fix3_wordMeanings(wordAnalysesResults)

    console.log('\n' + '='.repeat(60))
    console.log('=== TERMINÉ ===')
  } catch (err) {
    console.error('Fatal error:', err)
    process.exit(1)
  }
}

main()
