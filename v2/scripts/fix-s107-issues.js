const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function fix() {
  console.log('=== CORRECTIONS Sourate 107 ===')

  // ── Issue 1: Fix sense_retenu in segments JSON ──

  const fixes = [
    { id: 6564, verse: 4, word_key: 'slw', old: 'prière', new: 'prière rituelle' },
    { id: 6565, verse: 5, word_key: 'slw', old: 'prière', new: 'prière rituelle' },
    { id: 6567, verse: 7, word_key: 'mne', old: 'refus',  new: 'refuser' },
  ]

  console.log('\n[Issue 1 — sense_retenu dans segments]')
  for (const fix of fixes) {
    // Fetch the current row
    const { data: rows, error: fetchErr } = await db
      .from('verse_analyses')
      .select('id, segments')
      .eq('id', fix.id)
      .single()

    if (fetchErr || !rows) {
      console.log(`  verse ${fix.verse} (id=${fix.id}) — FETCH ERROR: ${fetchErr?.message}`)
      continue
    }

    const segments = rows.segments
    if (!Array.isArray(segments)) {
      console.log(`  verse ${fix.verse} (id=${fix.id}) — segments is not an array`)
      continue
    }

    // Find the target segment
    const idx = segments.findIndex(s => s.word_key === fix.word_key)
    if (idx === -1) {
      console.log(`  verse ${fix.verse} (id=${fix.id}) — word_key '${fix.word_key}' NOT FOUND`)
      continue
    }

    const current = segments[idx].sense_retenu
    if (current !== fix.old) {
      console.log(`  verse ${fix.verse} (id=${fix.id}) word_key='${fix.word_key}' — sense_retenu='${current}' (expected '${fix.old}', skipping)`)
      continue
    }

    // Apply the change
    segments[idx].sense_retenu = fix.new

    const { error: updateErr } = await db
      .from('verse_analyses')
      .update({ segments })
      .eq('id', fix.id)

    if (updateErr) {
      console.log(`  verse ${fix.verse} (id=${fix.id}) — UPDATE ERROR: ${updateErr.message}`)
    } else {
      console.log(`  verse ${fix.verse} (id=${fix.id}) word_key='${fix.word_key}' — '${fix.old}' → '${fix.new}' OK`)
    }
  }

  // ── Issue 2: Fix total_occurrences for root 'men' ──

  console.log('\n[Issue 2 — total_occurrences pour root men]')
  const { data: wa, error: waErr } = await db
    .from('word_analyses')
    .select('id, word_key, total_occurrences')
    .eq('id', 2308)
    .single()

  if (waErr || !wa) {
    console.log(`  FETCH ERROR: ${waErr?.message}`)
  } else {
    console.log(`  current: id=${wa.id} word_key='${wa.word_key}' total_occurrences=${wa.total_occurrences}`)
    const { error: updErr } = await db
      .from('word_analyses')
      .update({ total_occurrences: 3 })
      .eq('id', 2308)
    if (updErr) {
      console.log(`  UPDATE ERROR: ${updErr.message}`)
    } else {
      console.log(`  id=2308 word_key='${wa.word_key}' — total_occurrences ${wa.total_occurrences} → 3 OK`)
    }
  }

  console.log('\n=== TERMINÉ ===')
}

fix().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
