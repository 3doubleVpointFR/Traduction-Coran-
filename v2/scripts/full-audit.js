const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// verse_id 8 = sourate 2 verset 1, verse_id 293 = sourate 2 verset 286
const VERSE_ID_MIN = 8;
const VERSE_ID_MAX = 293;

const FORBIDDEN_WORDS = [
  /\ballah\b/i,
  /\bchâtiment\b/i,
  /\bcraignez\b/i,
  /\bpardonneur\b/i,
  /\binfidèle\b/i,
  /\bmécréant\b/i,
  /\bassociateur\b/i,
  /\bpolythéiste\b/i,
  /\bidolâtre\b/i,
  /\bimpie\b/i,
  /\bmiséricordieux\b/i,
  /\bdjibril\b/i,
];

const TECHNICAL_MARKERS = [
  '(pos=',
  'Form I',
  'Form II',
  'Form III',
  'Form IV',
  'Form V',
  'Form VI',
  'Form VII',
  'Form VIII',
  'Form IX',
  'Form X',
  '3MP',
  '3MS',
  '3FS',
  '1S',
  '2MP',
  '2MS',
  '2FS',
  '= ',
];

// Pattern: word (pos=X) = translation
const TRANSLITERATION_PATTERN = /\w+\s*\(pos=[^)]+\)\s*=/;

async function fetchAllAnalyses() {
  const all = [];
  let from = 0;
  const batchSize = 100;
  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, full_translation, translation_arab, translation_explanation, segments')
      .gte('verse_id', VERSE_ID_MIN)
      .lte('verse_id', VERSE_ID_MAX)
      .range(from, from + batchSize - 1)
      .order('verse_id');
    if (error) { console.error('Fetch error:', error); break; }
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < batchSize) break;
    from += batchSize;
  }
  return all;
}

function verseNum(verse_id) {
  return verse_id - 7; // verse_id 8 = V1
}

async function main() {
  console.log('Fetching all verse_analyses for sourate 2 (verse_id 8-293)...\n');
  const analyses = await fetchAllAnalyses();
  console.log(`Found ${analyses.length} analyses out of 286 expected.\n`);

  // Track missing verse_ids
  const foundIds = new Set(analyses.map(a => a.verse_id));
  const missingVerses = [];
  for (let vid = VERSE_ID_MIN; vid <= VERSE_ID_MAX; vid++) {
    if (!foundIds.has(vid)) missingVerses.push(verseNum(vid));
  }
  if (missingVerses.length > 0) {
    console.log(`WARNING: ${missingVerses.length} missing verse analyses: V${missingVerses.join(', V')}\n`);
  }

  // Issue trackers
  const issue1_technical_explanation = [];
  const issue2_dash_fr = [];
  const issue3_technical_fr = [];
  const issue4_transliteration_explanation = [];
  const issue5_forbidden = {};
  const issue6_grouped_arabic = [];
  const issue7_empty_fields = { full_translation: [], translation_arab: [], translation_explanation: [], segments: [] };

  for (const a of analyses) {
    const vn = verseNum(a.verse_id);

    // --- Issue 1: Technical content in translation_explanation ---
    if (a.translation_explanation) {
      const te = a.translation_explanation;
      for (const marker of TECHNICAL_MARKERS) {
        if (te.includes(marker)) {
          issue1_technical_explanation.push({ verse: vn, marker, snippet: te.substring(0, 120) });
          break;
        }
      }
    }

    // --- Issue 4: Transliteration format in translation_explanation ---
    if (a.translation_explanation && TRANSLITERATION_PATTERN.test(a.translation_explanation)) {
      issue4_transliteration_explanation.push({ verse: vn, snippet: a.translation_explanation.substring(0, 120) });
    }

    // --- Issue 5: Forbidden vocabulary ---
    const textFields = [
      { name: 'full_translation', val: a.full_translation },
      { name: 'translation_arab', val: a.translation_arab },
      { name: 'translation_explanation', val: a.translation_explanation },
    ];
    for (const { name, val } of textFields) {
      if (!val) continue;
      for (const regex of FORBIDDEN_WORDS) {
        const match = val.match(regex);
        if (match) {
          const key = match[0].toLowerCase();
          if (!issue5_forbidden[key]) issue5_forbidden[key] = [];
          issue5_forbidden[key].push({ verse: vn, field: name });
        }
      }
    }

    // --- Issue 7: Empty/null fields ---
    if (!a.full_translation || a.full_translation.trim() === '') issue7_empty_fields.full_translation.push(vn);
    if (!a.translation_arab || a.translation_arab.trim() === '') issue7_empty_fields.translation_arab.push(vn);
    if (!a.translation_explanation || a.translation_explanation.trim() === '') issue7_empty_fields.translation_explanation.push(vn);
    if (!a.segments || !Array.isArray(a.segments) || a.segments.length === 0) issue7_empty_fields.segments.push(vn);

    // --- Segment-level checks ---
    if (a.segments && Array.isArray(a.segments)) {
      for (const seg of a.segments) {
        // Issue 2: fr === "—" or empty/null
        if (!seg.fr || seg.fr === '—' || seg.fr.trim() === '') {
          issue2_dash_fr.push({ verse: vn, arabic: seg.arabic || '?', is_particle: seg.is_particle });
        }

        // Issue 3: technical content in fr
        if (seg.fr) {
          if (seg.fr.includes('(pos=') || seg.fr.length > 50) {
            issue3_technical_fr.push({ verse: vn, fr: seg.fr.substring(0, 80), arabic: seg.arabic || '?' });
          }
        }

        // Issue 5 in segment fr
        if (seg.fr) {
          for (const regex of FORBIDDEN_WORDS) {
            const match = seg.fr.match(regex);
            if (match) {
              const key = match[0].toLowerCase();
              if (!issue5_forbidden[key]) issue5_forbidden[key] = [];
              issue5_forbidden[key].push({ verse: vn, field: 'segment.fr', arabic: seg.arabic });
            }
          }
        }

        // Issue 6: grouped arabic (spaces in arabic)
        if (seg.arabic && seg.arabic.includes(' ')) {
          issue6_grouped_arabic.push({ verse: vn, arabic: seg.arabic });
        }
      }
    }
  }

  // ========== REPORT ==========
  console.log('='.repeat(70));
  console.log('       COMPREHENSIVE AUDIT REPORT — SOURATE 2 (286 VERSES)');
  console.log('='.repeat(70));

  // Issue 1
  console.log('\n--- ISSUE 1: Technical content in translation_explanation ---');
  const i1Verses = [...new Set(issue1_technical_explanation.map(x => x.verse))];
  console.log(`Count: ${i1Verses.length} verses affected`);
  if (i1Verses.length > 0) {
    console.log(`Verses: V${i1Verses.join(', V')}`);
    for (const item of issue1_technical_explanation.slice(0, 10)) {
      console.log(`  V${item.verse} [marker: "${item.marker}"] — ${item.snippet}...`);
    }
    if (issue1_technical_explanation.length > 10) console.log(`  ... and ${issue1_technical_explanation.length - 10} more`);
  }

  // Issue 2
  console.log('\n--- ISSUE 2: Segments with "—" or empty fr ---');
  const i2Verses = [...new Set(issue2_dash_fr.map(x => x.verse))];
  console.log(`Count: ${issue2_dash_fr.length} segments in ${i2Verses.length} verses`);
  if (i2Verses.length > 0) {
    console.log(`Verses: V${i2Verses.join(', V')}`);
    for (const item of issue2_dash_fr.slice(0, 15)) {
      console.log(`  V${item.verse}: arabic="${item.arabic}", is_particle=${item.is_particle}`);
    }
    if (issue2_dash_fr.length > 15) console.log(`  ... and ${issue2_dash_fr.length - 15} more`);
  }

  // Issue 3
  console.log('\n--- ISSUE 3: Segments with technical content as fr ---');
  const i3Verses = [...new Set(issue3_technical_fr.map(x => x.verse))];
  console.log(`Count: ${issue3_technical_fr.length} segments in ${i3Verses.length} verses`);
  if (i3Verses.length > 0) {
    console.log(`Verses: V${i3Verses.join(', V')}`);
    for (const item of issue3_technical_fr.slice(0, 15)) {
      console.log(`  V${item.verse}: arabic="${item.arabic}" → fr="${item.fr}"`);
    }
    if (issue3_technical_fr.length > 15) console.log(`  ... and ${issue3_technical_fr.length - 15} more`);
  }

  // Issue 4
  console.log('\n--- ISSUE 4: Transliteration format in translation_explanation ---');
  const i4Verses = [...new Set(issue4_transliteration_explanation.map(x => x.verse))];
  console.log(`Count: ${i4Verses.length} verses affected`);
  if (i4Verses.length > 0) {
    console.log(`Verses: V${i4Verses.join(', V')}`);
    for (const item of issue4_transliteration_explanation.slice(0, 10)) {
      console.log(`  V${item.verse}: ${item.snippet}...`);
    }
    if (issue4_transliteration_explanation.length > 10) console.log(`  ... and ${issue4_transliteration_explanation.length - 10} more`);
  }

  // Issue 5
  console.log('\n--- ISSUE 5: Forbidden vocabulary ---');
  let totalForbidden = 0;
  for (const [word, occurrences] of Object.entries(issue5_forbidden)) {
    totalForbidden += occurrences.length;
    const verses = [...new Set(occurrences.map(o => o.verse))];
    console.log(`  "${word}": ${occurrences.length} occurrences in V${verses.join(', V')}`);
    for (const occ of occurrences.slice(0, 5)) {
      console.log(`    V${occ.verse} in ${occ.field}${occ.arabic ? ' (seg: ' + occ.arabic + ')' : ''}`);
    }
    if (occurrences.length > 5) console.log(`    ... and ${occurrences.length - 5} more`);
  }
  console.log(`Total forbidden occurrences: ${totalForbidden}`);

  // Issue 6
  console.log('\n--- ISSUE 6: Segments with grouped Arabic (spaces) ---');
  const i6Verses = [...new Set(issue6_grouped_arabic.map(x => x.verse))];
  console.log(`Count: ${issue6_grouped_arabic.length} segments in ${i6Verses.length} verses`);
  if (i6Verses.length > 0) {
    console.log(`Verses: V${i6Verses.join(', V')}`);
    for (const item of issue6_grouped_arabic.slice(0, 15)) {
      console.log(`  V${item.verse}: arabic="${item.arabic}"`);
    }
    if (issue6_grouped_arabic.length > 15) console.log(`  ... and ${issue6_grouped_arabic.length - 15} more`);
  }

  // Issue 7
  console.log('\n--- ISSUE 7: Empty or null fields ---');
  for (const [field, verses] of Object.entries(issue7_empty_fields)) {
    console.log(`  ${field}: ${verses.length} empty${verses.length > 0 ? ' — V' + verses.join(', V') : ''}`);
  }

  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total analyses found:          ${analyses.length} / 286`);
  console.log(`Missing analyses:              ${missingVerses.length}`);
  console.log(`Issue 1 (technical expl.):     ${i1Verses.length} verses`);
  console.log(`Issue 2 (dash/empty fr):       ${issue2_dash_fr.length} segments in ${i2Verses.length} verses`);
  console.log(`Issue 3 (technical fr):        ${issue3_technical_fr.length} segments in ${i3Verses.length} verses`);
  console.log(`Issue 4 (transliteration):     ${i4Verses.length} verses`);
  console.log(`Issue 5 (forbidden vocab):     ${totalForbidden} occurrences`);
  console.log(`Issue 6 (grouped arabic):      ${issue6_grouped_arabic.length} segments in ${i6Verses.length} verses`);
  console.log(`Issue 7 (empty fields):        ft=${issue7_empty_fields.full_translation.length}, ta=${issue7_empty_fields.translation_arab.length}, te=${issue7_empty_fields.translation_explanation.length}, seg=${issue7_empty_fields.segments.length}`);
  const totalIssueVersesSet = new Set([
    ...i1Verses, ...i2Verses, ...i3Verses, ...i4Verses,
    ...Object.values(issue5_forbidden).flat().map(o => o.verse),
    ...i6Verses,
    ...Object.values(issue7_empty_fields).flat(),
  ]);
  console.log(`\nTotal unique verses with issues: ${totalIssueVersesSet.size} / ${analyses.length}`);
  console.log(`Clean verses: ${analyses.length - totalIssueVersesSet.size}`);
}

main().catch(console.error);
