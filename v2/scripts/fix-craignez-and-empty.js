const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID_MIN = 8;
const VERSE_ID_MAX = 293;

// --- Particle mapping ---
const PARTICLE_MAP = {
  'وَ': 'et',
  'فَ': 'alors',
  'فِى': 'dans',
  'فِي': 'dans',
  'مِنْ': 'de',
  'مِن': 'de',
  'إِلَى': 'vers',
  'إِلَيْ': 'vers',
  'عَلَى': 'sur',
  'عَلَيْ': 'sur',
  'بِ': 'par',
  'لِ': 'pour',
  'لَ': 'pour',
  'أَنَّ': 'que',
  'أَنْ': 'que',
  'إِنَّ': 'certes',
  'لَا': 'ne pas',
  'لَّا': 'ne pas',
  'مَا': 'ce que',
  'مَّا': 'ce que',
  'إِذَا': 'lorsque',
  'ثُمَّ': 'puis',
  'أَوْ': 'ou',
  'هُوَ': 'il',
  'هُمْ': 'eux',
  'كُمْ': 'vous',
  'هَا': 'elle/cela',
  'أَمْ': 'ou bien',
  'بَلْ': 'plutôt',
  'قَدْ': 'certes/déjà',
  'كَ': 'comme',
  'يَا': 'ô',
  'إِلَّا': 'sauf',
  'حَتَّى': 'jusqu\'à',
  'عَنْ': 'de/loin de',
  'عَن': 'de/loin de',
  'لَمْ': 'ne pas',
  'لَنْ': 'ne jamais',
  'لَوْ': 'si',
  'كَمَا': 'comme',
  'إِذْ': 'quand',
  'هِىَ': 'elle',
  'هِيَ': 'elle',
  'نَا': 'nous',
  'كُم': 'vous',
  'هُ': 'lui',
  'هِ': 'lui',
};

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

function vn(verse_id) { return `V${verse_id - 7}`; }

// --- Fix 1: craignez/crainte replacements ---
function replaceCraignez(text) {
  if (!text) return { text, changed: false };
  let result = text;
  // "Craignez" at start of sentence
  result = result.replace(/\bCraignez\b/g, 'Prémunissez-vous');
  // "craignez" lowercase
  result = result.replace(/\bcraignez\b/g, 'prémunissez-vous');
  // "craigne " (subjunctive)
  result = result.replace(/\bCraigne\b/g, 'Se prémunisse');
  result = result.replace(/\bcraigne\b/g, 'se prémunisse');
  // "craignent"
  result = result.replace(/\bCraignent\b/g, 'Se prémunissent');
  result = result.replace(/\bcraignent\b/g, 'se prémunissent');
  // "craindre"
  result = result.replace(/\bCraindre\b/g, 'Se prémunir');
  result = result.replace(/\bcraindre\b/g, 'se prémunir');
  // "craignons"
  result = result.replace(/\bCraignons\b/g, 'Prémunissons-nous');
  result = result.replace(/\bcraignons\b/g, 'prémunissons-nous');
  // "crainte" -> "prémunition" (taqwa context)
  result = result.replace(/\bCrainte\b/g, 'Prémunition');
  result = result.replace(/\bcrainte\b/g, 'prémunition');
  // "craint" (il craint)
  result = result.replace(/\bcraint\b/g, 'se prémunit');
  return { text: result, changed: result !== text };
}

async function fixCraignez(analyses) {
  console.log('=== FIX 1: Replacing "craignez" family with "prémunissez-vous" family ===\n');
  let totalFixes = 0;

  for (const va of analyses) {
    const updates = {};
    let fixes = [];

    // Check text fields
    for (const field of ['full_translation', 'translation_explanation', 'translation_arab']) {
      const { text: newVal, changed } = replaceCraignez(va[field]);
      if (changed) {
        updates[field] = newVal;
        fixes.push(`  ${field}: "${va[field]?.substring(0, 80)}..." → fixed`);
      }
    }

    // Check segments
    let segments = va.segments;
    if (segments && Array.isArray(segments)) {
      let segChanged = false;
      const newSegs = segments.map(seg => {
        if (seg.fr) {
          const { text: newFr, changed } = replaceCraignez(seg.fr);
          if (changed) {
            segChanged = true;
            fixes.push(`  segment[${seg.position}].fr: "${seg.fr}" → "${newFr}"`);
            return { ...seg, fr: newFr };
          }
        }
        return seg;
      });
      if (segChanged) {
        updates.segments = newSegs;
      }
    }

    if (Object.keys(updates).length > 0) {
      const { error } = await supabase
        .from('verse_analyses')
        .update(updates)
        .eq('id', va.id);
      if (error) {
        console.error(`  ERROR updating ${vn(va.verse_id)}:`, error.message);
      } else {
        console.log(`${vn(va.verse_id)} (id=${va.id}):`);
        fixes.forEach(f => console.log(f));
        totalFixes += fixes.length;
      }
    }
  }

  console.log(`\n--- Fix 1 done: ${totalFixes} replacements across all verses ---\n`);
  return totalFixes;
}

// --- Fix 2: Fill empty segment.fr fields ---
async function fixEmptySegments(analyses) {
  console.log('=== FIX 2: Filling empty segment.fr fields ===\n');
  let totalFixed = 0;
  let versesFixed = 0;

  for (const va of analyses) {
    const segments = va.segments;
    if (!segments || !Array.isArray(segments)) continue;

    let anyFixed = false;
    const newSegs = segments.map(seg => {
      const fr = seg.fr;
      const isEmpty = !fr || fr === '—' || fr === '-' || fr.trim() === '';
      if (!isEmpty) return seg;

      let newFr = null;

      if (seg.is_particle) {
        // Try particle map
        const arabic = seg.arabic?.trim();
        if (arabic && PARTICLE_MAP[arabic]) {
          newFr = PARTICLE_MAP[arabic];
        } else {
          // Try stripping diacritics-like variations
          for (const [key, val] of Object.entries(PARTICLE_MAP)) {
            if (arabic && (arabic.startsWith(key) || key.startsWith(arabic))) {
              newFr = val;
              break;
            }
          }
        }
      } else {
        // Content word: use sense_retenu if short enough
        if (seg.sense_retenu && seg.sense_retenu.length < 30 && seg.sense_retenu !== '—') {
          newFr = seg.sense_retenu;
        }
      }

      if (newFr) {
        anyFixed = true;
        totalFixed++;
        console.log(`  ${vn(va.verse_id)} seg[${seg.position}] (${seg.is_particle ? 'particle' : 'word'}) arabic="${seg.arabic}" → fr="${newFr}"`);
        return { ...seg, fr: newFr };
      }
      return seg;
    });

    if (anyFixed) {
      versesFixed++;
      const { error } = await supabase
        .from('verse_analyses')
        .update({ segments: newSegs })
        .eq('id', va.id);
      if (error) {
        console.error(`  ERROR updating segments for ${vn(va.verse_id)}:`, error.message);
      }
    }
  }

  console.log(`\n--- Fix 2 done: ${totalFixed} segments filled across ${versesFixed} verses ---\n`);
  return totalFixed;
}

async function main() {
  console.log('Fetching all verse_analyses for sourate 2 (verse_id 8-293)...\n');
  const analyses = await fetchAllAnalyses();
  console.log(`Found ${analyses.length} analyses.\n`);

  const fix1Count = await fixCraignez(analyses);

  // Re-fetch after fix 1 to work on updated segments
  const analyses2 = await fetchAllAnalyses();
  const fix2Count = await fixEmptySegments(analyses2);

  console.log('=== SUMMARY ===');
  console.log(`Fix 1 (craignez → prémunissez-vous): ${fix1Count} replacements`);
  console.log(`Fix 2 (empty segment.fr filled): ${fix2Count} segments`);
}

main().catch(console.error);
