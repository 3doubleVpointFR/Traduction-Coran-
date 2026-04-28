const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // 1. Verse arabic text
  console.log('=== 1. VERSE 322 (S3:V29) — Arabic text ===');
  const { data: verse, error: vErr } = await supabase
    .from('verses')
    .select('*')
    .eq('id', 322)
    .single();
  if (vErr) console.error('verse error:', vErr.message);
  else {
    console.log('verse_id:', verse.id, '| surah:', verse.surah_id, '| verse_num:', verse.verse_num);
    console.log('arabic:', verse.arabic_text);
  }
  console.log();

  // 2. ALL segments from verse_analyses (JSON column)
  console.log('=== 2. SEGMENTS from verse_analyses (verse_id=322) ===');
  const { data: vaRows, error: sErr } = await supabase
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', 322);
  if (sErr) console.error('verse_analyses error:', sErr.message);

  const va = vaRows && vaRows[0];
  if (!va) {
    console.log('No verse_analyses found for verse_id=322');
    return;
  }
  console.log('verse_analyses id:', va.id);
  console.log('full_translation:', va.full_translation);
  console.log('translation_arab:', va.translation_arab);
  console.log('translation_meditational:', va.translation_meditational);
  console.log('translation_explanation:', va.translation_explanation);
  console.log();

  const segments = va.segments || [];
  console.log(`Found ${segments.length} segments\n`);

  const wordKeys = [];
  for (const seg of segments) {
    console.log(`--- Position ${seg.position} ---`);
    console.log(JSON.stringify(seg, null, 2));
    console.log();
    if (seg.key && seg.type === 'important') {
      wordKeys.push({ key: seg.key, position: seg.position, root: seg.root, arabic: seg.arabic, phon: seg.phon });
    }
  }

  console.log(`\n=== Important words: ${wordKeys.length} ===`);
  for (const w of wordKeys) {
    console.log(`  pos=${w.position} key="${w.key}" phon="${w.phon}" root="${w.root}" arabic="${w.arabic}"`);
  }
  console.log();

  // 3. Word analyses for each key
  console.log('=== 3. WORD ANALYSES ===');
  const analysisMap = {}; // word_key -> analysis row
  for (const { key, position } of wordKeys) {
    const { data: wa, error: waErr } = await supabase
      .from('word_analyses')
      .select('*')
      .eq('word_key', key);
    if (waErr) {
      console.error(`word_analyses error for key="${key}":`, waErr.message);
      continue;
    }
    console.log(`\nPos ${position} | key="${key}" => ${(wa || []).length} word_analysis row(s)`);
    for (const row of (wa || [])) {
      console.log(`  id=${row.id} | word_key=${row.word_key} | root_ar=${row.root_ar} | root_phon=${row.root_phon}`);
      console.log(`  root_meaning=${row.root_meaning}`);
      console.log(`  total_occurrences=${row.total_occurrences} | analysis_step=${row.analysis_step}`);
      console.log(`  retenu=${row.retenu} | validated=${row.validated}`);
      analysisMap[key] = row;
    }
    if (!(wa || []).length) {
      console.log(`  (none found)`);
    }
  }
  console.log();

  // 4. Word meanings for each analysis, grouped by concept
  console.log('=== 4. WORD MEANINGS (grouped by concept) ===');
  for (const { key, phon } of wordKeys) {
    const wa = analysisMap[key];
    if (!wa) {
      console.log(`\n[${key}] — no word_analysis found, skipping meanings`);
      continue;
    }
    const { data: meanings, error: mErr } = await supabase
      .from('word_meanings')
      .select('*')
      .eq('analysis_id', wa.id)
      .order('display_order', { ascending: true });
    if (mErr) {
      console.error(`meanings error for ${key} (analysis_id=${wa.id}):`, mErr.message);
      continue;
    }
    console.log(`\n[${key}] (analysis_id=${wa.id}, root=${wa.root_ar}) — ${(meanings || []).length} meanings`);

    // Group by concept
    const byConcept = {};
    for (const m of (meanings || [])) {
      const c = m.concept || '(no concept)';
      if (!byConcept[c]) byConcept[c] = [];
      byConcept[c].push(m);
    }
    for (const [concept, senses] of Object.entries(byConcept)) {
      console.log(`  CONCEPT: ${concept}`);
      for (const s of senses) {
        console.log(`    order=${s.display_order} | sense: ${s.sense} | desc: ${s.description}`);
        console.log(`      status=${s.status} | occ_count=${s.occ_count} | score=${s.score}`);
        if (s.score_reason) console.log(`      score_reason: ${s.score_reason}`);
        if (s.proof_ref) console.log(`      proof_ref: ${s.proof_ref}`);
        if (s.proof_tr) console.log(`      proof_tr: ${s.proof_tr}`);
      }
    }
  }
  console.log();

  // 5. Count word_daily entries for each analysis_id
  console.log('=== 5. WORD_DAILY counts ===');
  for (const { key } of wordKeys) {
    const wa = analysisMap[key];
    if (!wa) continue;
    const { count, error: dErr } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', wa.id);
    if (dErr) {
      console.error(`word_daily error for ${key}:`, dErr.message);
      continue;
    }
    console.log(`  [${key}] analysis_id=${wa.id} => ${count} word_daily entries`);
  }
  console.log();

  // 6. Context: V27 (verse_id=320) and V28 (verse_id=321) translation_arab
  console.log('=== 6. CONTEXT — V27 & V28 translation_arab ===');
  for (const vid of [320, 321]) {
    const { data: ctx, error: cErr } = await supabase
      .from('verse_analyses')
      .select('verse_id, translation_arab, full_translation')
      .eq('verse_id', vid)
      .limit(1);
    if (cErr) {
      console.error(`context error for verse_id=${vid}:`, cErr.message);
      continue;
    }
    if (ctx && ctx.length > 0) {
      console.log(`\nverse_id=${vid}:`);
      console.log('  translation_arab:', ctx[0].translation_arab);
      console.log('  full_translation:', ctx[0].full_translation);
    } else {
      console.log(`\nverse_id=${vid}: no verse_analyses found`);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
