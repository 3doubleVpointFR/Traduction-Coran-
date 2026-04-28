// query-s107-full.js — Full audit of Sourate 107 data
// Schema:
//   surahs: id, name_ar, name_fr, name_latin, verse_count
//   verses: id, surah_id, verse_num, arabic_text
//   verse_analyses: id, verse_id, segments, translation_explanation, full_translation, ...
//   verse_word_analyses: id, verse_id, word_key, sense_chosen, analysis_axes, ...
//   word_analyses: id, word_key, root_phon, ...
//   word_meanings: id, analysis_id, sense, concept, meaning_type, display_order, ...
//   word_daily: id, analysis_id, ...

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function main() {
  const results = {};

  // ── Get verses for surah 107 (id=107) ─────────────────────────────────────
  console.log('Fetching verses for surah 107...');
  const { data: verses, error: vErr } = await sb
    .from('verses')
    .select('id, verse_num')
    .eq('surah_id', 107)
    .order('verse_num');
  if (vErr) throw vErr;
  console.log(`Found ${verses.length} verses`);

  const verseIds = verses.map(v => v.id);
  const verseNumMap = Object.fromEntries(verses.map(v => [v.id, v.verse_num])); // id -> verse_num

  // ── 1. verse_word_analyses for surah 107 ──────────────────────────────────
  console.log('Fetching verse_word_analyses...');
  const { data: vwas, error: vwaErr } = await sb
    .from('verse_word_analyses')
    .select('id, verse_id, word_key, sense_chosen, analysis_axes, position')
    .in('verse_id', verseIds)
    .order('verse_id')
    .order('position');
  if (vwaErr) throw vwaErr;
  console.log(`Found ${vwas.length} VWA entries`);

  results.vwa = vwas.map(v => ({
    ...v,
    verse_num: verseNumMap[v.verse_id]
  }));

  // ── 2. verse_analyses: translation_explanation for verses 1 and 7 ─────────
  console.log('Fetching verse_analyses...');
  const { data: vas, error: vaErr } = await sb
    .from('verse_analyses')
    .select('verse_id, translation_explanation, full_translation, segments')
    .in('verse_id', verseIds)
    .order('verse_id');
  if (vaErr) throw vaErr;

  results.verse_analyses_all = vas.map(va => ({
    ...va,
    verse_num: verseNumMap[va.verse_id]
  }));

  // Filter verses 1 and 7
  const verse1Id = verses.find(v => v.verse_num === 1)?.id;
  const verse7Id = verses.find(v => v.verse_num === 7)?.id;
  results.translation_explanations_v1_v7 = vas
    .filter(va => va.verse_id === verse1Id || va.verse_id === verse7Id)
    .map(va => ({ verse_num: verseNumMap[va.verse_id], translation_explanation: va.translation_explanation, full_translation: va.full_translation }));

  // ── 3. Segments for all 7 verses (already in verse_analyses_all above) ─────
  results.segments_all = vas.map(va => ({
    verse_num: verseNumMap[va.verse_id],
    segments: va.segments
  }));

  // ── 4. Word meanings for specific roots ───────────────────────────────────
  console.log('Fetching word meanings...');
  const targetKeys = ['ray', 'kdhb', 'dyn', 'dee2', 'ytm', 'hdd2', 'tem', 'skn', 'wyl', 'slw', 'shw2', 'mne', 'men'];

  const { data: waRows, error: waErr } = await sb
    .from('word_analyses')
    .select('id, word_key')
    .in('word_key', targetKeys);
  if (waErr) throw waErr;
  console.log(`Found ${waRows.length} word_analyses for target roots`);

  const waIds = waRows.map(w => w.id);
  const waKeyMap = Object.fromEntries(waRows.map(w => [w.id, w.word_key]));

  const { data: wmRows, error: wmErr } = await sb
    .from('word_meanings')
    .select('id, analysis_id, concept, sense, meaning_type, display_order, description, status')
    .in('analysis_id', waIds)
    .order('analysis_id')
    .order('concept')
    .order('display_order');
  if (wmErr) throw wmErr;

  results.word_meanings = wmRows.map(m => ({
    ...m,
    word_key: waKeyMap[m.analysis_id]
  }));

  // ── 5. Daily phrase counts ─────────────────────────────────────────────────
  console.log('Fetching word_daily counts...');
  const { data: wdRows, error: wdErr } = await sb
    .from('word_daily')
    .select('analysis_id')
    .in('analysis_id', waIds);
  if (wdErr) throw wdErr;

  const phraseCounts = {};
  for (const row of wdRows) {
    const key = waKeyMap[row.analysis_id];
    phraseCounts[key] = (phraseCounts[key] || 0) + 1;
  }
  results.daily_phrase_counts = phraseCounts;

  // ── Write full output to file ──────────────────────────────────────────────
  const outPath = path.join(__dirname, 's107-full-audit.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');

  console.log('\n=== SUMMARY ===');
  console.log('Output file:', outPath);
  console.log('VWA count:', results.vwa.length);
  console.log('Verse analyses:', results.verse_analyses_all.length);
  console.log('Word meanings:', results.word_meanings.length);
  console.log('Daily phrase counts:', JSON.stringify(results.daily_phrase_counts));
  console.log('\n=== VWA FULL DUMP ===');
  console.log(JSON.stringify(results.vwa, null, 2));
  console.log('\n=== TRANSLATION EXPLANATIONS v1 & v7 ===');
  console.log(JSON.stringify(results.translation_explanations_v1_v7, null, 2));
  console.log('\n=== SEGMENTS ALL VERSES ===');
  console.log(JSON.stringify(results.segments_all, null, 2));
  console.log('\n=== WORD MEANINGS ===');
  console.log(JSON.stringify(results.word_meanings, null, 2));
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
