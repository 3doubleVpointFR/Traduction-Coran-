/**
 * Validation script for Surah 104
 * Usage: node scripts/validate-s104.js
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const S104_ROOTS = ['wyl', 'hmz', 'lmz', 'jme', 'mwl', 'edd', 'hsb', 'xld', 'nbv', 'htm', 'dry', 'nwr', 'alh', 'wqd', 'tle', 'fad', 'wsd', 'emd', 'mdd'];
const EXEGESIS_WORDS = ['sorcellerie', 'magie', 'envoûtement', 'châtiment', 'grâce', 'péché', 'pardon'];
const ENGLISH_PATTERNS = ['the ', ' is ', ' of '];

function sep(title) {
  console.log('\n' + '='.repeat(60));
  console.log('QUERY: ' + title);
  console.log('='.repeat(60));
}

async function run() {
  // ---- Q1: verse_analyses completeness ----
  sep('Q1 — verse_analyses completeness for S104');
  const { data: verseIds } = await db.from('verses').select('id, verse_num').eq('surah_id', 104).order('verse_num');
  if (!verseIds || !verseIds.length) { console.log('ERROR: no verses found for surah_id=104'); process.exit(1); }
  console.log(`Found ${verseIds.length} verses for surah 104`);

  const verseIdList = verseIds.map(v => v.id);
  const { data: vas } = await db.from('verse_analyses')
    .select('id, verse_id, translation_arab, segments, translation_explanation, full_translation')
    .in('verse_id', verseIdList);

  const verseMap = {};
  for (const v of verseIds) verseMap[v.id] = v.verse_num;

  console.log('\n  id    | verse | has_translation | has_segments | has_explanation | has_hamidullah');
  let q1Issues = [];
  for (const va of (vas || [])) {
    const has_translation = va.translation_arab != null;
    const has_segments = va.segments != null;
    const has_explanation = va.translation_explanation != null;
    const has_hamidullah = va.full_translation != null;
    const row = `  ${String(va.id).padEnd(6)}| ${String(verseMap[va.verse_id]).padEnd(6)}| ${String(has_translation).padEnd(16)}| ${String(has_segments).padEnd(13)}| ${String(has_explanation).padEnd(16)}| ${has_hamidullah}`;
    console.log(row);
    if (!has_translation || !has_segments || !has_explanation) {
      q1Issues.push(`verse ${verseMap[va.verse_id]}: missing ${[!has_translation && 'translation_arab', !has_segments && 'segments', !has_explanation && 'explanation'].filter(Boolean).join(', ')}`);
    }
  }
  // Check coverage
  if ((vas || []).length !== verseIds.length) {
    q1Issues.push(`Only ${(vas||[]).length} verse_analyses found for ${verseIds.length} verses!`);
  }
  if (q1Issues.length) { console.log('\n[ISSUES]'); q1Issues.forEach(i => console.log('  !! ' + i)); }
  else console.log('\n[OK] All verse_analyses complete');

  // ---- Q2: verse_word_analyses ----
  sep('Q2 — verse_word_analyses for S104');
  const { data: vwas } = await db.from('verse_word_analyses')
    .select('id, verse_id, word_key, position, sense_chosen, analysis_axes')
    .in('verse_id', verseIdList)
    .order('position');

  if (!vwas || !vwas.length) {
    console.log('[ISSUE] No verse_word_analyses found for S104!');
  } else {
    console.log(`Found ${vwas.length} verse_word_analyses\n`);
    console.log('  id    | verse | word_key | pos | sense_chosen | concept_chosen | sense_chosen_axes');
    let byVerse = {};
    for (const vwa of vwas) {
      const vn = verseMap[vwa.verse_id];
      if (!byVerse[vn]) byVerse[vn] = [];
      byVerse[vn].push(vwa);
    }
    for (const [vn, rows] of Object.entries(byVerse).sort((a,b) => a[0]-b[0])) {
      for (const vwa of rows) {
        const axes = vwa.analysis_axes || {};
        const cc = axes.concept_chosen || '';
        const sc = axes.sense_chosen || '';
        console.log(`  ${String(vwa.id).padEnd(6)}| ${String(vn).padEnd(6)}| ${String(vwa.word_key||'').padEnd(9)}| ${String(vwa.position||'').padEnd(4)}| ${String(vwa.sense_chosen||'').padEnd(13)}| ${String(cc).padEnd(15)}| ${sc}`);
      }
    }
  }

  // ---- Q3: hmz concepts (analysis_id=2596) ----
  sep('Q3 — word_meanings for hmz (analysis_id=2596)');
  const { data: hmz } = await db.from('word_meanings')
    .select('id, concept, sense, status, description')
    .eq('analysis_id', 2596)
    .order('concept')
    .order('display_order');

  if (!hmz || !hmz.length) {
    console.log('[ISSUE] No word_meanings found for analysis_id=2596 (hmz)!');
  } else {
    console.log(`Found ${hmz.length} entries\n`);
    console.log('  id    | concept | sense | status | has_desc');
    for (const wm of hmz) {
      console.log(`  ${String(wm.id).padEnd(6)}| ${String(wm.concept||'').padEnd(8)}| ${String(wm.sense||'').padEnd(6)}| ${String(wm.status||'').padEnd(7)}| ${wm.description != null}`);
    }
  }

  // ---- Q4: nbv concepts (analysis_id=2597) ----
  sep('Q4 — word_meanings for nbv (analysis_id=2597)');
  const { data: nbv } = await db.from('word_meanings')
    .select('id, concept, sense, status, description')
    .eq('analysis_id', 2597)
    .order('concept')
    .order('display_order');

  if (!nbv || !nbv.length) {
    console.log('[ISSUE] No word_meanings found for analysis_id=2597 (nbv)!');
  } else {
    console.log(`Found ${nbv.length} entries\n`);
    console.log('  id    | concept | sense | status | has_desc');
    for (const wm of nbv) {
      console.log(`  ${String(wm.id).padEnd(6)}| ${String(wm.concept||'').padEnd(8)}| ${String(wm.sense||'').padEnd(6)}| ${String(wm.status||'').padEnd(7)}| ${wm.description != null}`);
    }
  }

  // ---- Q5: status sync for S104 roots ----
  sep('Q5 — word_meanings status sync for S104 roots');
  const { data: waS104 } = await db.from('word_analyses')
    .select('id, word_key')
    .in('word_key', S104_ROOTS);

  if (!waS104 || !waS104.length) {
    console.log('[ISSUE] No word_analyses found for S104 roots!');
  } else {
    const waIds = waS104.map(w => w.id);
    const waKeyMap = {};
    for (const w of waS104) waKeyMap[w.id] = w.word_key;

    // Fetch all word_meanings with status for these analyses
    const { data: wmsStatus } = await db.from('word_meanings')
      .select('analysis_id, concept, status, proof_ctx')
      .in('analysis_id', waIds)
      .not('status', 'is', null)
      .order('concept');

    if (!wmsStatus || !wmsStatus.length) {
      console.log('[ISSUE] No word_meanings with status found for S104 roots!');
    } else {
      console.log(`Found ${wmsStatus.length} word_meanings with status\n`);
      console.log('  word_key  | concept | status | has_proof');
      for (const wm of wmsStatus) {
        console.log(`  ${String(waKeyMap[wm.analysis_id]||'').padEnd(10)}| ${String(wm.concept||'').padEnd(8)}| ${String(wm.status||'').padEnd(7)}| ${wm.proof_ctx != null}`);
      }
    }
  }

  // ---- Q6: word_daily count ----
  sep('Q6 — word_daily count for S104 roots');
  const rootsForDaily = S104_ROOTS.filter(r => r !== 'mwl' && r !== 'alh'); // as per query
  const { data: waForDaily } = await db.from('word_analyses').select('id, word_key').in('word_key', rootsForDaily);
  if (!waForDaily || !waForDaily.length) {
    console.log('[ISSUE] No word_analyses found for daily roots!');
  } else {
    const waKeyMap2 = {};
    for (const w of waForDaily) waKeyMap2[w.id] = w.word_key;
    const waIds2 = waForDaily.map(w => w.id);

    // Count word_daily per analysis_id
    const countMap = {};
    // Fetch in chunks to avoid too-large requests
    const CHUNK = 50;
    for (let i = 0; i < waIds2.length; i += CHUNK) {
      const chunk = waIds2.slice(i, i + CHUNK);
      const { data: wds } = await db.from('word_daily').select('analysis_id').in('analysis_id', chunk);
      for (const wd of (wds || [])) {
        const key = waKeyMap2[wd.analysis_id];
        countMap[key] = (countMap[key] || 0) + 1;
      }
    }
    console.log('  word_key  | phrase_count');
    for (const root of rootsForDaily.sort()) {
      const count = countMap[root] || 0;
      const flag = count === 0 ? ' !! MISSING' : '';
      console.log(`  ${String(root).padEnd(10)}| ${count}${flag}`);
    }
  }

  // ---- Q7: exegesis check ----
  sep('Q7 — Exegesis word check in translations (should be EMPTY)');
  let exegesisIssues = [];
  for (const va of (vas || [])) {
    if (!va.translation_arab) continue;
    const text = va.translation_arab.toLowerCase();
    for (const word of EXEGESIS_WORDS) {
      if (text.includes(word.toLowerCase())) {
        exegesisIssues.push({ verse: verseMap[va.verse_id], word, text: va.translation_arab.slice(0, 100) });
      }
    }
  }
  if (exegesisIssues.length === 0) {
    console.log('[OK] No exegesis words found in translations');
  } else {
    console.log('[ISSUES FOUND]');
    for (const issue of exegesisIssues) {
      console.log(`  !! verse ${issue.verse}: contains "${issue.word}" — "${issue.text}"`);
    }
  }

  // ---- Q8: English check in translation_explanation ----
  sep('Q8 — English word check in translation_explanation (should be EMPTY)');
  let engIssues = [];
  for (const va of (vas || [])) {
    if (!va.translation_explanation) continue;
    const text = va.translation_explanation;
    const flags = [];
    if (text.includes('the ') || text.includes('The ')) flags.push('has_english_the');
    if (/ is /i.test(text)) flags.push('has_english_is');
    if (/ of /i.test(text)) flags.push('has_english_of');
    if (flags.length) {
      engIssues.push({ verse: verseMap[va.verse_id], flags });
    }
  }
  if (engIssues.length === 0) {
    console.log('[OK] No English patterns found in translation_explanation');
  } else {
    console.log('  verse | has_english_the | has_english_is | has_english_of');
    for (const issue of engIssues) {
      console.log(`  ${String(issue.verse).padEnd(6)}| ${String(issue.flags.includes('has_english_the')).padEnd(16)}| ${String(issue.flags.includes('has_english_is')).padEnd(15)}| ${issue.flags.includes('has_english_of')}`);
    }
  }

  // ---- Q9: segments sense_retenu vs word_meanings senses ----
  sep('Q9 — segments sense_retenu alignment with word_meanings');

  // Get all senses for S104 roots
  const { data: waS104full } = await db.from('word_analyses').select('id, word_key').in('word_key', S104_ROOTS);
  const waIdToKey = {};
  const waKeyToIds = {};
  for (const w of (waS104full || [])) {
    waIdToKey[w.id] = w.word_key;
    if (!waKeyToIds[w.word_key]) waKeyToIds[w.word_key] = [];
    waKeyToIds[w.word_key].push(w.id);
  }
  const allWaIds = (waS104full || []).map(w => w.id);
  const { data: allWm } = await db.from('word_meanings').select('analysis_id, sense').in('analysis_id', allWaIds);

  // Build map: word_key -> Set of valid senses
  const validSenses = {};
  for (const wm of (allWm || [])) {
    const key = waIdToKey[wm.analysis_id];
    if (!key) continue;
    if (!validSenses[key]) validSenses[key] = new Set();
    if (wm.sense) validSenses[key].add(wm.sense.trim());
  }

  console.log('\n  All available senses per root:');
  for (const root of S104_ROOTS.sort()) {
    const senses = validSenses[root] ? [...validSenses[root]].sort().join(', ') : '(none)';
    console.log(`  ${String(root).padEnd(5)}: ${senses}`);
  }

  // Now extract sense_retenu from segments
  console.log('\n  Segments sense_retenu check:');
  let sense9Issues = [];
  let sense9Rows = [];
  for (const va of (vas || [])) {
    if (!va.segments) continue;
    let segs;
    try { segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments; }
    catch(e) { console.log(`  !! verse ${verseMap[va.verse_id]}: invalid segments JSON`); continue; }
    if (!Array.isArray(segs)) continue;
    for (const seg of segs) {
      if (!seg.word_key || seg.is_particle === true || seg.is_particle === 'true') continue;
      const wk = seg.word_key;
      const sr = seg.sense_retenu;
      sense9Rows.push({ verse: verseMap[va.verse_id], word_key: wk, sense_retenu: sr });
    }
  }

  console.log('  verse | word_key | sense_retenu | valid?');
  for (const row of sense9Rows) {
    const knownSenses = validSenses[row.word_key] || new Set();
    const isValid = row.sense_retenu ? knownSenses.has(row.sense_retenu.trim()) : false;
    const flag = isValid ? '' : ' !! NOT IN word_meanings';
    console.log(`  ${String(row.verse).padEnd(6)}| ${String(row.word_key||'').padEnd(9)}| ${String(row.sense_retenu||'(null)').padEnd(13)}| ${isValid}${flag}`);
    if (!isValid) sense9Issues.push(row);
  }

  // ---- Summary ----
  sep('SUMMARY');
  const allIssues = [...q1Issues, ...exegesisIssues.map(i => `verse ${i.verse} exegesis: "${i.word}"`), ...engIssues.map(i => `verse ${i.verse} English in explanation`), ...sense9Issues.map(i => `verse ${i.verse} word ${i.word_key} sense_retenu="${i.sense_retenu}" not found`)];
  if (allIssues.length === 0) {
    console.log('[ALL CLEAR] No issues detected for Surah 104');
  } else {
    console.log(`[${allIssues.length} ISSUES FOUND]:`);
    allIssues.forEach((i, n) => console.log(`  ${n+1}. ${i}`));
  }
}

run().catch(e => { console.error(e); process.exit(1); });
