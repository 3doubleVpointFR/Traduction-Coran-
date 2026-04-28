// Script to query all data for Sourate 107 from Supabase
// Correct schema discovered:
// verse_analyses: id, verse_id, segments, model_used, prompt_version, generated_at, validated, full_translation,
//                 translation_meditational, translation_arab, translation_explanation, segments_step1
// verse_word_analyses: id, verse_id, word_key, root, sense_chosen, analysis_axes, reason, model_used, prompt_version, created_at, position
// verses: id, surah_id, verse_num, arabic_text
// surahs: id, name_ar, name_fr, name_latin, verse_count, revelation

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function main() {
  // ─── QUERY 3: Get Arabic verses for surah 107 ─────────────────────────────
  console.log('='.repeat(80));
  console.log('QUERY 3: Arabic verses for surah 107');
  console.log('='.repeat(80));

  const { data: verses, error: e3 } = await supabase
    .from('verses')
    .select('id, verse_num, arabic_text')
    .eq('surah_id', 107)
    .order('verse_num');

  if (e3) {
    console.error('ERROR query 3:', e3);
  } else {
    console.log(`Found ${verses.length} verses`);
    console.log(JSON.stringify(verses, null, 2));
  }

  // ─── QUERY 4: Surah info ───────────────────────────────────────────────────
  console.log('\n' + '='.repeat(80));
  console.log('QUERY 4: Surah info for surah 107');
  console.log('='.repeat(80));

  const { data: surahInfo, error: e4 } = await supabase
    .from('surahs')
    .select('*')
    .eq('id', 107);

  if (e4) {
    console.error('ERROR query 4:', e4);
  } else {
    console.log(JSON.stringify(surahInfo, null, 2));
  }

  // Get verse IDs for surah 107
  const verseIds = verses ? verses.map(v => v.id) : [];
  console.log('\nVerse IDs for surah 107:', verseIds);

  // ─── QUERY 1: verse_analyses for surah 107 ────────────────────────────────
  console.log('\n' + '='.repeat(80));
  console.log('QUERY 1: verse_analyses for surah 107');
  console.log('='.repeat(80));

  if (verseIds.length === 0) {
    console.log('No verses found, cannot query verse_analyses.');
  } else {
    const { data: verseAnalyses, error: e1 } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, segments_step1, segments, translation_arab, translation_explanation, full_translation, translation_meditational, model_used, prompt_version, generated_at, validated')
      .in('verse_id', verseIds)
      .order('verse_id');

    if (e1) {
      console.error('ERROR query 1:', e1);
    } else {
      console.log(`Found ${verseAnalyses.length} verse_analyses rows`);
      // Print each one separately for clarity
      for (const va of verseAnalyses) {
        const verse = verses.find(v => v.id === va.verse_id);
        console.log(`\n--- verse_analysis: verse_id=${va.verse_id} (verse_num=${verse ? verse.verse_num : '?'}) id=${va.id} ---`);
        console.log('translation_arab:', va.translation_arab);
        console.log('full_translation:', va.full_translation);
        console.log('translation_explanation:', va.translation_explanation);
        console.log('translation_meditational:', va.translation_meditational);
        console.log('model_used:', va.model_used);
        console.log('prompt_version:', va.prompt_version);
        console.log('generated_at:', va.generated_at);
        console.log('validated:', va.validated);
        console.log('\nsegments_step1:', JSON.stringify(va.segments_step1, null, 2));
        console.log('\nsegments:', JSON.stringify(va.segments, null, 2));
      }

      // ─── QUERY 2: verse_word_analyses for surah 107 ────────────────────────
      console.log('\n' + '='.repeat(80));
      console.log('QUERY 2: verse_word_analyses for surah 107');
      console.log('='.repeat(80));

      // verse_word_analyses uses verse_id directly (not verse_analysis_id)
      const { data: wordAnalyses, error: e2 } = await supabase
        .from('verse_word_analyses')
        .select('*')
        .in('verse_id', verseIds)
        .order('verse_id')
        .order('position');

      if (e2) {
        console.error('ERROR query 2:', e2);
      } else {
        console.log(`Found ${wordAnalyses.length} verse_word_analyses rows`);
        for (const wva of wordAnalyses) {
          const verse = verses.find(v => v.id === wva.verse_id);
          console.log(`\n--- word_analysis: verse_id=${wva.verse_id} (verse_num=${verse ? verse.verse_num : '?'}) position=${wva.position} word_key=${wva.word_key} id=${wva.id} ---`);
          console.log('root:', wva.root);
          console.log('sense_chosen:', wva.sense_chosen);
          console.log('reason:', wva.reason);
          console.log('model_used:', wva.model_used);
          console.log('created_at:', wva.created_at);
          console.log('\nanalysis_axes:', JSON.stringify(wva.analysis_axes, null, 2));
        }
      }
    }
  }
}

main().catch(console.error);
