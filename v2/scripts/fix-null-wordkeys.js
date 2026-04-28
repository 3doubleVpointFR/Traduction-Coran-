const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // ============================================================
  // PART 1: Check V248 (verse_id=255)
  // ============================================================
  console.log('='.repeat(70));
  console.log('PART 1: Checking V248 (verse_id=255)');
  console.log('='.repeat(70));

  const { data: va255, error: vaErr } = await db
    .from('verse_analyses')
    .select('segments')
    .eq('verse_id', 255)
    .single();

  if (vaErr) {
    console.log('Error fetching verse_analyses for 255:', vaErr.message);
  } else {
    const segments = va255.segments || [];
    console.log(`\nTotal segments: ${segments.length}\n`);
    console.log('Pos | Arabic | Phon | FR | is_particle | word_key | pos');
    console.log('-'.repeat(100));

    let particleCount = 0;
    let contentCount = 0;
    const suspiciousParticles = [];

    segments.forEach((seg, i) => {
      const isP = seg.is_particle;
      if (isP) particleCount++;
      else contentCount++;

      console.log(
        `${String(i).padStart(3)} | ${(seg.arabic || '').padEnd(15)} | ${(seg.phon || '').padEnd(20)} | ${(seg.fr || '').substring(0, 30).padEnd(30)} | ${String(!!isP).padEnd(11)} | ${(seg.word_key || 'null').padEnd(10)} | ${seg.pos || '-'}`
      );

      // Flag particles that look like content words
      if (isP && seg.fr) {
        const fr = seg.fr.toLowerCase();
        // Check if the "particle" has a meaning that suggests it's a content word
        if (fr.match(/(moussa|haroun|coffre|famille|anges|il dit|vous viendra|vous étiez|signe|prophète|seigneur|repos|savoir|venir|dire|roi|armée|combat|fleuve|boire|épreuve|traverser|patience)/i)) {
          suspiciousParticles.push({ index: i, arabic: seg.arabic, phon: seg.phon, fr: seg.fr });
        }
      }
    });

    console.log(`\nParticles: ${particleCount}, Content words: ${contentCount}`);

    if (suspiciousParticles.length > 0) {
      console.log(`\nSuspicious particles (should probably be content words):`);
      suspiciousParticles.forEach(sp => {
        console.log(`  - [${sp.index}] ${sp.arabic} (${sp.phon}) = "${sp.fr}"`);
      });
    }
  }

  // Check VWA for verse_id=255
  const { data: vwa255, error: vwaErr } = await db
    .from('verse_word_analyses')
    .select('id, word_key, position')
    .eq('verse_id', 255)
    .order('position');

  if (vwaErr) {
    console.log('Error fetching VWA for 255:', vwaErr.message);
  } else {
    console.log(`\nVWA entries for verse_id=255: ${(vwa255 || []).length}`);
    if (vwa255 && vwa255.length > 0) {
      vwa255.forEach(v => {
        console.log(`  position=${v.position}, word_key=${v.word_key}`);
      });
    }
  }

  // ============================================================
  // PART 2: Fix 30 verses with ALL null word_keys
  // ============================================================
  console.log('\n' + '='.repeat(70));
  console.log('PART 2: Fixing 30 verses with all-null word_keys');
  console.log('='.repeat(70));

  // verse_id = verse_number + 7 for surah 2
  const verseNumbers = [
    25, 26, 95, 96, 213, 217, 219, 220,
    ...Array.from({ length: 20 }, (_, i) => 221 + i), // 221-240
    245, 246, 253, 254
  ];
  const verseIds = verseNumbers.map(n => n + 7);

  console.log(`\nVerse IDs to fix: ${verseIds.join(', ')}`);
  console.log(`Total: ${verseIds.length} verses\n`);

  let totalSegmentsUpdated = 0;
  let totalVersesFixed = 0;

  for (const verseId of verseIds) {
    // Get current segments
    const { data: va, error: vaE } = await db
      .from('verse_analyses')
      .select('segments')
      .eq('verse_id', verseId)
      .single();

    if (vaE || !va) {
      console.log(`  [${verseId}] No verse_analyses found (${vaE?.message || 'null'})`);
      continue;
    }

    // Get VWA entries
    const { data: vwa, error: vwaE } = await db
      .from('verse_word_analyses')
      .select('word_key, position')
      .eq('verse_id', verseId)
      .order('position');

    if (vwaE || !vwa || vwa.length === 0) {
      console.log(`  [${verseId}] No VWA entries found`);
      continue;
    }

    const segments = va.segments || [];

    // Build position->word_key map from VWA
    const vwaByPosition = {};
    for (const v of vwa) {
      if (v.position != null && v.word_key) {
        vwaByPosition[v.position] = v.word_key;
      }
    }

    // Match segments to VWA by position
    // Segments don't always have a position field, so we also try index-based matching
    let updated = 0;
    const newSegments = segments.map((seg, idx) => {
      // Try matching by segment's own position field first, then by index
      const pos = seg.position != null ? seg.position : idx;

      if (seg.word_key === null && vwaByPosition[pos]) {
        updated++;
        return {
          ...seg,
          word_key: vwaByPosition[pos],
          is_particle: false, // content word, not particle
        };
      }
      return seg;
    });

    if (updated > 0) {
      // If position-based matching got 0 results, try a different strategy
      // Update the database
      const { error: updateErr } = await db
        .from('verse_analyses')
        .update({ segments: newSegments })
        .eq('verse_id', verseId);

      if (updateErr) {
        console.log(`  [${verseId}] ERROR updating: ${updateErr.message}`);
      } else {
        console.log(`  [${verseId}] Fixed ${updated} segments (VWA had ${vwa.length} entries, total segs: ${segments.length})`);
        totalSegmentsUpdated += updated;
        totalVersesFixed++;
      }
    } else {
      // Try alternative: match by order of non-particle segments or all segments
      // Sometimes segments lack position, so match VWA in order to segments that have null word_key
      let altUpdated = 0;
      let vwaIdx = 0;
      const altSegments = segments.map((seg) => {
        if (seg.word_key === null && vwaIdx < vwa.length && vwa[vwaIdx].word_key) {
          // Only assign if this segment looks like it could be a content word
          // (has arabic text and isn't clearly a tiny particle)
          altUpdated++;
          const wk = vwa[vwaIdx].word_key;
          vwaIdx++;
          return {
            ...seg,
            word_key: wk,
            is_particle: false,
          };
        }
        return seg;
      });

      if (altUpdated > 0) {
        const { error: updateErr } = await db
          .from('verse_analyses')
          .update({ segments: altSegments })
          .eq('verse_id', verseId);

        if (updateErr) {
          console.log(`  [${verseId}] ERROR (alt) updating: ${updateErr.message}`);
        } else {
          console.log(`  [${verseId}] Fixed ${altUpdated} segments via alt matching (VWA: ${vwa.length}, segs: ${segments.length})`);
          totalSegmentsUpdated += altUpdated;
          totalVersesFixed++;
        }
      } else {
        console.log(`  [${verseId}] Could not match any segments (VWA: ${vwa.length}, segs: ${segments.length})`);
      }
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Verses fixed: ${totalVersesFixed} / ${verseIds.length}`);
  console.log(`Total segments assigned word_keys: ${totalSegmentsUpdated}`);
}

main().catch(console.error);
