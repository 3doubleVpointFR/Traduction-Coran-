const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  const VERSE_ID = 238; // verse 231 of surah 2

  // ── 1. verse_analyses for verse_id=238 ──
  console.log('=== 1. verse_analyses for verse_id=238 ===');
  const { data: va, error: vaErr } = await db
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', VERSE_ID);

  if (vaErr) {
    console.log('ERROR:', vaErr.message);
  } else if (!va || va.length === 0) {
    console.log('NO verse_analyses row found for verse_id=238!');
  } else {
    for (const row of va) {
      console.log(`  id=${row.id}, verse_id=${row.verse_id}, status=${row.status}`);
      const segments = row.segments || [];
      console.log(`  segments count: ${segments.length}`);
      for (const seg of segments) {
        console.log(`    pos=${seg.position}, word_key=${seg.word_key}, arabic=${seg.arabic}, fr=${seg.fr}, sense_retenu=${seg.sense_retenu}`);
      }
    }
  }

  // ── 2. ALL verse_word_analyses for verse_id=238 ──
  console.log('\n=== 2. verse_word_analyses for verse_id=238 ===');
  const { data: vwa, error: vwaErr } = await db
    .from('verse_word_analyses')
    .select('*')
    .eq('verse_id', VERSE_ID);

  if (vwaErr) {
    console.log('ERROR:', vwaErr.message);
  } else if (!vwa || vwa.length === 0) {
    console.log('NO verse_word_analyses rows found for verse_id=238!');
  } else {
    console.log(`  Found ${vwa.length} rows:`);
    for (const row of vwa) {
      console.log(`    id=${row.id}, verse_id=${row.verse_id}, word_key=${row.word_key}, position=${row.position}, sense_chosen=${row.sense_chosen}, concept_chosen=${row.concept_chosen}`);
      console.log(`      analysis_axes keys: ${row.analysis_axes ? Object.keys(row.analysis_axes).join(', ') : 'NULL'}`);
      if (row.analysis_axes) {
        for (const [k, v] of Object.entries(row.analysis_axes)) {
          const val = typeof v === 'string' ? v.substring(0, 80) : v;
          console.log(`        ${k}: ${val}...`);
        }
      }
    }
  }

  // ── 3. For each word_key in segments, check word_analyses + word_meanings ──
  console.log('\n=== 3. Per-segment checks (word_analyses + word_meanings + axes) ===');
  const segments = va && va.length > 0 ? (va[0].segments || []) : [];
  const wordKeys = segments.map(s => s.word_key).filter(Boolean);
  const uniqueKeys = [...new Set(wordKeys)];

  if (uniqueKeys.length === 0) {
    console.log('  No word_keys to check (segments empty or all null).');
  }

  for (const wk of uniqueKeys) {
    console.log(`\n  --- word_key: ${wk} ---`);
    const { data: wa, error: waErr } = await db
      .from('word_analyses')
      .select('id, word_key, root_ar, root_phon, root_meaning, status')
      .eq('word_key', wk)
      .single();

    if (waErr || !wa) {
      console.log(`    word_analyses: NOT FOUND (${waErr?.message})`);
      continue;
    }
    console.log(`    word_analyses: id=${wa.id}, root_ar=${wa.root_ar}, root_phon=${wa.root_phon}, status=${wa.status}`);

    // word_meanings
    const { data: wm, error: wmErr } = await db
      .from('word_meanings')
      .select('id, sense, description, meaning_type, display_order')
      .eq('analysis_id', wa.id);

    if (wmErr) {
      console.log(`    word_meanings ERROR: ${wmErr.message}`);
    } else {
      console.log(`    word_meanings: ${wm.length} entries`);
      for (const m of wm) {
        console.log(`      id=${m.id}, sense=${m.sense}, type=${m.meaning_type}, order=${m.display_order}`);
      }
    }

    // Check VWA axes for this word_key at this verse
    const vwaForWord = (vwa || []).filter(v => v.word_key === wk);
    if (vwaForWord.length === 0) {
      console.log(`    verse_word_analyses: MISSING for this word_key at verse_id=238!`);
    } else {
      for (const v of vwaForWord) {
        const axes = v.analysis_axes;
        const hasAxes = axes && Object.keys(axes).length > 0;
        console.log(`    verse_word_analyses: pos=${v.position}, sense=${v.sense_chosen}, axes_populated=${hasAxes}`);
        if (axes) {
          const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence', 'axe6_finalite'];
          for (const ak of axeKeys) {
            console.log(`      ${ak}: ${axes[ak] ? 'YES (' + String(axes[ak]).substring(0, 60) + '...)' : 'MISSING'}`);
          }
        }
      }
    }
  }

  // ── 4. Check for null/empty word_keys in segments ──
  console.log('\n=== 4. Null or empty word_keys in segments ===');
  const nullKeys = segments.filter(s => !s.word_key);
  if (nullKeys.length === 0) {
    console.log('  None — all segments have word_keys.');
  } else {
    console.log(`  ${nullKeys.length} segments with null/empty word_key:`);
    for (const s of nullKeys) {
      console.log(`    pos=${s.position}, arabic=${s.arabic}, fr=${s.fr}`);
    }
  }

  // ── 5. Broader check: verses in surah 2 where ALL segment word_keys are null ──
  console.log('\n=== 5. Surah 2 verses where ALL segment word_keys are null ===');
  // Get all verse_ids for surah 2
  const { data: s2Verses } = await db
    .from('verses')
    .select('id, verse_num')
    .eq('surah_id', 2)
    .order('verse_num');

  const s2Ids = (s2Verses || []).map(v => v.id);

  // Get all verse_analyses for surah 2
  const { data: allVa } = await db
    .from('verse_analyses')
    .select('verse_id, segments')
    .in('verse_id', s2Ids);

  const verseNumMap = {};
  for (const v of s2Verses || []) {
    verseNumMap[v.id] = v.verse_num;
  }

  const badVerses = [];
  for (const row of allVa || []) {
    const segs = row.segments || [];
    if (segs.length === 0) {
      badVerses.push({ verse_id: row.verse_id, verse_num: verseNumMap[row.verse_id], reason: 'empty segments' });
    } else {
      const allNull = segs.every(s => !s.word_key);
      if (allNull) {
        badVerses.push({ verse_id: row.verse_id, verse_num: verseNumMap[row.verse_id], reason: 'all word_keys null' });
      }
    }
  }

  if (badVerses.length === 0) {
    console.log('  None — all analyzed verses have at least one segment with a word_key.');
  } else {
    console.log(`  ${badVerses.length} problematic verses:`);
    for (const b of badVerses) {
      console.log(`    verse_num=${b.verse_num} (verse_id=${b.verse_id}): ${b.reason}`);
    }
  }

  // ── 6. Quick sanity: does verse_id=238 exist in verses table? ──
  console.log('\n=== 6. Sanity: verse_id=238 in verses table ===');
  const { data: vRow } = await db
    .from('verses')
    .select('id, surah_id, verse_num, text_uthmani')
    .eq('id', VERSE_ID)
    .single();

  if (vRow) {
    console.log(`  id=${vRow.id}, surah=${vRow.surah_id}, verse_num=${vRow.verse_num}, text=${(vRow.text_uthmani || '').substring(0, 60)}...`);
  } else {
    console.log('  NOT FOUND in verses table!');
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
