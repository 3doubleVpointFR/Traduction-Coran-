require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const VERSE_ID_MIN = 207;
const VERSE_ID_MAX = 293;
const BATCH_SIZE = 5;
const DELAY_MS = 500;

// ─── Detection helpers ───

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str);
}

function isBadPhon(phon, wordKey) {
  if (!phon || phon.trim() === '') return true;
  if (hasArabic(phon)) return true;
  if (wordKey && phon === wordKey) return true;
  const latin = phon.replace(/[-' ]/g, '');
  if (latin.length === 0) return false;
  if (!/[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(latin)) return true;
  return false;
}

function isBadFr(fr) {
  if (!fr || fr.trim() === '') return true;
  if (fr === '—' || fr === '–' || fr === '-') return true;
  if (fr.includes('/')) return true;
  return false;
}

function parseJson(val) {
  if (!val) return null;
  if (typeof val === 'string') {
    try { return JSON.parse(val); } catch { return null; }
  }
  return val;
}

function diagnoseVerse(va) {
  const segs = parseJson(va.segments);
  if (!segs || !Array.isArray(segs) || segs.length === 0) {
    return { broken: true, issues: ['no segments'], total: 0, badCount: 0 };
  }

  // Only count content words (non-particle)
  const contentSegs = segs.filter(s => !s.is_particle);
  let badCount = 0;

  for (const seg of contentSegs) {
    if (isBadFr(seg.fr)) badCount++;
  }

  // Also check for any seg with "/" in fr (concept names)
  for (const seg of segs) {
    if (seg.fr && seg.fr.includes('/')) badCount++;
  }

  // Check phon issues
  for (const seg of segs) {
    if (isBadPhon(seg.phon, seg.word_key)) badCount++;
  }

  // Deduplicate: use unique bad segments
  const badSegs = new Set();
  for (const seg of segs) {
    const bad = isBadFr(seg.fr) || isBadPhon(seg.phon, seg.word_key) || (seg.fr && seg.fr.includes('/'));
    if (bad) badSegs.add(seg.arabic);
  }

  const ratio = badSegs.size / segs.length;
  return { broken: ratio > 0.3, total: segs.length, badCount: badSegs.size, ratio };
}

// ─── Phonetics helpers ───

function basicBwToPhon(bw) {
  return bw
    .replace(/A/g, 'ā').replace(/w/g, 'w').replace(/y/g, 'y')
    .replace(/b/g, 'b').replace(/t/g, 't').replace(/v/g, 'th')
    .replace(/j/g, 'j').replace(/H/g, 'ḥ').replace(/x/g, 'kh')
    .replace(/d/g, 'd').replace(/\*/g, 'dh').replace(/r/g, 'r')
    .replace(/z/g, 'z').replace(/s/g, 's').replace(/\$/g, 'sh')
    .replace(/S/g, 'ṣ').replace(/D/g, 'ḍ').replace(/T/g, 'ṭ')
    .replace(/Z/g, 'ẓ').replace(/E/g, 'ʿ').replace(/g/g, 'gh')
    .replace(/f/g, 'f').replace(/q/g, 'q').replace(/k/g, 'k')
    .replace(/l/g, 'l').replace(/m/g, 'm').replace(/n/g, 'n')
    .replace(/h/g, 'h').replace(/p/g, 'tā')
    .replace(/i/g, 'i').replace(/u/g, 'u').replace(/a/g, 'a')
    .replace(/~/g, '').replace(/o/g, '').replace(/`/g, 'ā')
    .replace(/\{/g, 'i').replace(/\}/g, '')
    .replace(/\|/g, 'ā').replace(/>/g, '').replace(/</g, '')
    .replace(/&/g, '');
}

function getCleanPhon(s1Seg, currentPhon) {
  // Priority 1: step1.phon if proper Latin with vowels
  if (s1Seg && s1Seg.phon && !hasArabic(s1Seg.phon) && /[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(s1Seg.phon)) {
    return s1Seg.phon;
  }
  // Priority 2: step1.transliteration
  if (s1Seg && s1Seg.transliteration && !hasArabic(s1Seg.transliteration) && /[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(s1Seg.transliteration)) {
    return s1Seg.transliteration;
  }
  // Priority 3: step1.buckwalter converted
  if (s1Seg && s1Seg.buckwalter) {
    return basicBwToPhon(s1Seg.buckwalter);
  }
  // Priority 4: current phon if ok
  if (currentPhon && !hasArabic(currentPhon) && /[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(currentPhon)) {
    return currentPhon;
  }
  return currentPhon || '';
}

// ─── DB fetch helpers ───

async function fetchAnalyses() {
  const all = [];
  let from = 0;
  const pageSize = 500;
  while (true) {
    const { data, error } = await supabase.from('verse_analyses')
      .select('id, verse_id, segments, segments_step1, full_translation')
      .gte('verse_id', VERSE_ID_MIN)
      .lte('verse_id', VERSE_ID_MAX)
      .order('verse_id')
      .range(from, from + pageSize - 1);
    if (error) throw new Error('Fetch error: ' + error.message);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return all;
}

async function fetchVerses() {
  const { data, error } = await supabase.from('verses')
    .select('id, arabic_text, surah_id, verse_num')
    .gte('id', VERSE_ID_MIN)
    .lte('id', VERSE_ID_MAX)
    .order('id');
  if (error) throw new Error('Verses fetch error: ' + error.message);
  return data || [];
}

// ─── LLM alignment ───

async function alignWithLLM(fullTranslation, segments) {
  const segList = segments.map((s, i) => {
    return `  ${i + 1}. arabe: "${s.arabic}" | phon: "${s.phon || ''}" | ${s.is_particle ? 'PARTICULE' : 'MOT DE CONTENU'}`;
  }).join('\n');

  const prompt = `Tu es un expert en arabe coranique et en traduction.

Voici un verset du Coran segmenté mot par mot en arabe avec la phonétique, et sa traduction française complète.

TRADUCTION FRANÇAISE COMPLÈTE :
"${fullTranslation}"

SEGMENTS ARABES :
${segList}

Pour chaque segment, attribue le ou les mots français de la traduction qui correspondent à ce mot arabe.
- Chaque mot français doit être attribué à exactement un segment
- L'ensemble des attributions doit reconstituer la traduction complète
- Les particules (wa, fa, bi, li, min, etc.) correspondent généralement à un seul mot français (et, alors, par, pour, de, etc.)
- Les mots de contenu peuvent correspondre à 1-4 mots français

Réponds UNIQUEMENT en JSON :
{
  "alignments": [
    {"position": 1, "fr": "les mots français correspondants"},
    ...
  ]
}`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    temperature: 0,
    messages: [
      { role: 'system', content: 'Tu es un expert en arabe coranique. Réponds uniquement en JSON valide.' },
      { role: 'user', content: prompt }
    ],
    response_format: { type: 'json_object' },
  });

  const text = response.choices[0]?.message?.content || '';
  const parsed = JSON.parse(text);
  return parsed.alignments || parsed;
}

// ─── Main ───

(async () => {
  console.log('=== LLM Alignment for Broken Segments (V200-286) ===\n');

  // Fetch data
  console.log('Fetching verse_analyses...');
  const analyses = await fetchAnalyses();
  console.log(`  Found ${analyses.length} verse_analyses`);

  console.log('Fetching verses...');
  const verses = await fetchVerses();
  const verseMap = {};
  for (const v of verses) verseMap[v.id] = v;
  console.log(`  Found ${verses.length} verses\n`);

  // Step 1: Find broken verses
  console.log('--- Step 1: Finding broken verses ---');
  const brokenVerses = [];

  for (const va of analyses) {
    const diag = diagnoseVerse(va);
    if (diag.broken) {
      brokenVerses.push({ va, diag });
    }
  }

  console.log(`  Found ${brokenVerses.length} broken verses out of ${analyses.length}\n`);

  if (brokenVerses.length === 0) {
    console.log('No broken verses found. Exiting.');
    return;
  }

  // Show first few broken verses
  console.log('  Sample broken verses:');
  for (const { va, diag } of brokenVerses.slice(0, 5)) {
    console.log(`    verse_id=${va.verse_id} — ${diag.badCount}/${diag.total} bad segments (${(diag.ratio * 100).toFixed(0)}%)`);
  }
  console.log();

  // Step 2: Process with LLM
  console.log('--- Step 2: LLM Alignment ---');
  let successCount = 0;
  let failCount = 0;
  const failures = [];
  const examples = []; // Store before/after for summary

  for (let batchStart = 0; batchStart < brokenVerses.length; batchStart += BATCH_SIZE) {
    const batch = brokenVerses.slice(batchStart, batchStart + BATCH_SIZE);
    console.log(`\n  Batch ${Math.floor(batchStart / BATCH_SIZE) + 1} (verses ${batch.map(b => b.va.verse_id).join(', ')})`);

    for (const { va } of batch) {
      const segs = parseJson(va.segments);
      const step1 = parseJson(va.segments_step1);
      const verse = verseMap[va.verse_id];

      // Get full translation
      const fullTranslation = va.full_translation || '';

      if (!fullTranslation) {
        console.log(`    verse_id=${va.verse_id} — SKIP: no translation`);
        failCount++;
        failures.push({ verse_id: va.verse_id, reason: 'no translation' });
        continue;
      }

      if (!segs || segs.length === 0) {
        console.log(`    verse_id=${va.verse_id} — SKIP: no segments`);
        failCount++;
        failures.push({ verse_id: va.verse_id, reason: 'no segments' });
        continue;
      }

      // Save before state for examples
      const beforeFrs = segs.map(s => s.fr || '(vide)');

      try {
        // Call LLM
        const alignments = await alignWithLLM(fullTranslation, segs);

        // Build step1 lookup by position or index
        const step1Map = {};
        if (step1 && Array.isArray(step1)) {
          for (let i = 0; i < step1.length; i++) {
            const s = step1[i];
            const pos = s.position || (i + 1);
            step1Map[pos] = s;
          }
        }

        // Apply alignments
        let updatedCount = 0;
        for (const alignment of alignments) {
          const pos = alignment.position;
          const idx = pos - 1; // 0-indexed
          if (idx >= 0 && idx < segs.length) {
            const seg = segs[idx];
            const oldFr = seg.fr;

            // Update fr from LLM
            if (alignment.fr && alignment.fr.trim()) {
              seg.fr = alignment.fr.trim();
              updatedCount++;
            }

            // Fix phon if bad
            if (isBadPhon(seg.phon, seg.word_key)) {
              const s1Seg = step1Map[pos] || (step1 && step1[idx]);
              seg.phon = getCleanPhon(s1Seg, seg.phon);
            }
          }
        }

        // Update in DB
        const { error } = await supabase.from('verse_analyses')
          .update({ segments: segs })
          .eq('verse_id', va.verse_id);

        if (error) {
          console.log(`    verse_id=${va.verse_id} — DB ERROR: ${error.message}`);
          failCount++;
          failures.push({ verse_id: va.verse_id, reason: 'db error: ' + error.message });
        } else {
          console.log(`    verse_id=${va.verse_id} — OK (${updatedCount} segments updated)`);
          successCount++;

          // Save examples (max 3)
          if (examples.length < 3) {
            const afterFrs = segs.map(s => s.fr || '(vide)');
            examples.push({
              verse_id: va.verse_id,
              translation: fullTranslation.substring(0, 80),
              before: beforeFrs,
              after: afterFrs,
              arabics: segs.map(s => s.arabic),
            });
          }
        }
      } catch (err) {
        console.log(`    verse_id=${va.verse_id} — LLM ERROR: ${err.message}`);
        failCount++;
        failures.push({ verse_id: va.verse_id, reason: 'llm error: ' + err.message });
      }

      // Rate limiting
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  // Step 3: Summary
  console.log('\n\n=== SUMMARY ===');
  console.log(`Total broken verses found: ${brokenVerses.length}`);
  console.log(`Successful alignments:     ${successCount}`);
  console.log(`Failures:                  ${failCount}`);

  if (failures.length > 0) {
    console.log('\nFailures:');
    for (const f of failures) {
      console.log(`  verse_id=${f.verse_id}: ${f.reason}`);
    }
  }

  if (examples.length > 0) {
    console.log('\n--- Before/After Examples ---');
    for (const ex of examples) {
      console.log(`\n  verse_id=${ex.verse_id}`);
      console.log(`  Translation: "${ex.translation}..."`);
      console.log('  Segments:');
      for (let i = 0; i < ex.arabics.length; i++) {
        const changed = ex.before[i] !== ex.after[i];
        console.log(`    ${ex.arabics[i]}: "${ex.before[i]}" → "${ex.after[i]}"${changed ? ' ✓' : ''}`);
      }
    }
  }

  console.log('\nDone.');
})();
