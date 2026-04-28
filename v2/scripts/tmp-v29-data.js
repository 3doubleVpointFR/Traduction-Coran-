const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

(async () => {
  // 1. Find the verse: surah_id=3, verse_num=29
  console.log('========================================');
  console.log('  COLLECTING DATA FOR SURAH 3, VERSE 29');
  console.log('========================================\n');

  const { data: verse, error: e1 } = await sb
    .from('verses')
    .select('*')
    .eq('surah_id', 3)
    .eq('verse_num', 29)
    .single();

  if (e1 || !verse) {
    console.log('ERROR finding verse:', e1?.message || 'not found');
    process.exit(1);
  }
  console.log('=== VERSE (3:29) ===');
  console.log(`  id: ${verse.id}`);
  console.log(`  surah_id: ${verse.surah_id}`);
  console.log(`  verse_num: ${verse.verse_num}`);
  console.log(`  arabic_text: ${verse.arabic_text}`);
  console.log(`  All columns:`, JSON.stringify(verse, null, 2));

  const VERSE_ID = verse.id;

  // 2. Get all words for this verse, ordered by position
  console.log('\n=== WORDS (verse_id=' + VERSE_ID + ') ===');
  const { data: words, error: e2 } = await sb
    .from('words')
    .select('*')
    .eq('verse_id', VERSE_ID)
    .order('position');

  if (e2) console.log('ERROR words:', e2.message);
  console.log(`Found ${words?.length || 0} words`);
  for (const w of words || []) {
    console.log(`  pos=${w.position}: ${w.arabic} (key=${w.word_key}, tag=${w.tag}, root=${w.root})`);
  }

  // 3. Get verse_analyses (segments JSON)
  console.log('\n=== VERSE_ANALYSES ===');
  const { data: vaList, error: e3 } = await sb
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', VERSE_ID);

  if (e3) console.log('ERROR verse_analyses:', e3.message);
  console.log(`Found ${vaList?.length || 0} verse_analyses`);
  for (const va of vaList || []) {
    console.log(`  analysis record id: ${va.id}`);
    console.log(`  translation_arab: ${va.translation_arab || '(empty)'}`);
    console.log(`  full_translation: ${va.full_translation || '(empty)'}`);
    console.log(`  segments: ${va.segments ? JSON.stringify(va.segments, null, 2) : '(none)'}`);
    // Print all other columns
    const shown = new Set(['id', 'verse_id', 'translation_arab', 'full_translation', 'segments']);
    for (const [k, v] of Object.entries(va)) {
      if (!shown.has(k) && v !== null && v !== undefined) {
        console.log(`  ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`);
      }
    }
  }

  // 4. Get word_analyses related to words in this verse
  // Extract unique keys from segments (the "key" field in segments JSON)
  const segments = (vaList && vaList.length > 0 && vaList[0].segments) ? vaList[0].segments : [];
  const segmentKeys = [...new Set(segments.map(s => s.key).filter(Boolean))];
  console.log('\n=== WORD_ANALYSES (for segment keys in this verse) ===');
  console.log('Segment keys:', segmentKeys.join(', '));

  // Look up word_analyses by word_key matching segment keys
  let waRelevant = [];
  if (segmentKeys.length > 0) {
    const { data: waAll, error: e4 } = await sb
      .from('word_analyses')
      .select('*')
      .in('word_key', segmentKeys);

    if (e4) console.log('ERROR word_analyses:', e4.message);
    waRelevant = waAll || [];
  }
  console.log(`Found ${waRelevant.length} word_analyses`);

  for (const wa of waRelevant) {
    console.log(`\n  --- word_key: ${wa.word_key} (analysis_id=${wa.id}) ---`);
    console.log(`  root_ar: ${wa.root_ar}`);
    console.log(`  root_phon: ${wa.root_phon}`);
    console.log(`  total_occurrences: ${wa.total_occurrences}`);
    const shown2 = new Set(['id', 'word_key', 'root_ar', 'root_phon', 'total_occurrences', 'surah_id']);
    for (const [k, v] of Object.entries(wa)) {
      if (!shown2.has(k) && v !== null && v !== undefined) {
        console.log(`  ${k}: ${typeof v === 'object' ? JSON.stringify(v, null, 2) : v}`);
      }
    }

    // 5. Get word_meanings for this analysis_id
    const { data: meanings, error: e5 } = await sb
      .from('word_meanings')
      .select('*')
      .eq('analysis_id', wa.id)
      .order('display_order');

    if (e5) console.log('  ERROR word_meanings:', e5.message);
    console.log(`  word_meanings: ${meanings?.length || 0} senses`);
    for (const m of meanings || []) {
      console.log(`    [order=${m.display_order}] concept="${m.concept}" | sense="${m.sense}" | sense_ar="${m.sense_ar || ''}" | desc="${m.description || ''}"`);
      const shown3 = new Set(['id', 'analysis_id', 'display_order', 'concept', 'sense', 'sense_ar', 'description']);
      for (const [k, v] of Object.entries(m)) {
        if (!shown3.has(k) && v !== null && v !== undefined) {
          console.log(`      ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`);
        }
      }
    }

    // 8. Count word_daily for this analysis_id
    const { count: dailyCount, error: e8 } = await sb
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', wa.id);

    if (e8) console.log('  ERROR word_daily:', e8.message);
    console.log(`  word_daily count: ${dailyCount || 0}`);
  }

  // 6. Get verse_word_analyses for this verse
  console.log('\n=== VERSE_WORD_ANALYSES (verse_id=' + VERSE_ID + ') ===');
  const { data: vwaList, error: e6 } = await sb
    .from('verse_word_analyses')
    .select('*')
    .eq('verse_id', VERSE_ID)
    .order('position');

  if (e6) console.log('ERROR verse_word_analyses:', e6.message);
  console.log(`Found ${vwaList?.length || 0} VWAs`);
  for (const vwa of vwaList || []) {
    console.log(`  pos=${vwa.position}: word_key=${vwa.word_key}, sense_chosen="${vwa.sense_chosen}", concept_chosen="${vwa.concept_chosen}"`);
    const shown4 = new Set(['id', 'verse_id', 'position', 'word_key', 'sense_chosen', 'concept_chosen']);
    for (const [k, v] of Object.entries(vwa)) {
      if (!shown4.has(k) && v !== null && v !== undefined) {
        console.log(`    ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`);
      }
    }
  }

  // 7. Context: get V27 and V28 translation_arab
  console.log('\n=== CONTEXT: V27 & V28 (translation_arab) ===');
  for (const vn of [27, 28]) {
    const { data: ctxVerse } = await sb
      .from('verses')
      .select('id')
      .eq('surah_id', 3)
      .eq('verse_num', vn)
      .single();

    if (!ctxVerse) {
      console.log(`  V${vn}: verse not found`);
      continue;
    }

    const { data: ctxVa } = await sb
      .from('verse_analyses')
      .select('translation_arab, full_translation')
      .eq('verse_id', ctxVerse.id);

    if (ctxVa && ctxVa.length > 0) {
      console.log(`  V${vn} (verse_id=${ctxVerse.id}):`);
      console.log(`    translation_arab: ${ctxVa[0].translation_arab || '(empty)'}`);
      console.log(`    full_translation: ${ctxVa[0].full_translation || '(empty)'}`);
    } else {
      console.log(`  V${vn}: no verse_analyses found`);
    }
  }

  // Also check if segments reference analysis_ids we haven't covered
  if (vaList && vaList.length > 0 && vaList[0].segments) {
    const segments = vaList[0].segments;
    const segAnalysisIds = segments
      .filter(s => s.analysis_id)
      .map(s => s.analysis_id);
    const coveredIds = new Set(waRelevant.map(wa => wa.id));
    const uncoveredIds = segAnalysisIds.filter(id => !coveredIds.has(id));

    if (uncoveredIds.length > 0) {
      console.log('\n=== ADDITIONAL WORD_ANALYSES (from segments, not matched by word_key) ===');
      for (const aid of uncoveredIds) {
        const { data: extraWa } = await sb
          .from('word_analyses')
          .select('*')
          .eq('id', aid)
          .single();

        if (extraWa) {
          console.log(`\n  --- analysis_id=${extraWa.id}, word_key=${extraWa.word_key} ---`);
          console.log(`  root_ar: ${extraWa.root_ar}, root_phon: ${extraWa.root_phon}`);
          console.log(`  total_occurrences: ${extraWa.total_occurrences}`);

          const { data: extraMeanings } = await sb
            .from('word_meanings')
            .select('*')
            .eq('analysis_id', extraWa.id)
            .order('display_order');

          console.log(`  word_meanings: ${extraMeanings?.length || 0} senses`);
          for (const m of extraMeanings || []) {
            console.log(`    [order=${m.display_order}] concept="${m.concept}" | sense="${m.sense}" | desc="${m.description || ''}"`);
          }

          const { count: dc } = await sb
            .from('word_daily')
            .select('*', { count: 'exact', head: true })
            .eq('analysis_id', extraWa.id);
          console.log(`  word_daily count: ${dc || 0}`);
        }
      }
    }
  }

  console.log('\n========================================');
  console.log('  DONE');
  console.log('========================================');
})();
