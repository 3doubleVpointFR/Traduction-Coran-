// Fix accent mismatches in concept_chosen for S88 v11-26
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== FIX ACCENT MISMATCHES ===\n');

  const { data: vwas } = await sb.from('verse_word_analyses').select('id, verse_id, word_key, analysis_axes').gte('verse_id', 5978).lte('verse_id', 5993);

  // For each VWA, look up the correct concept name from word_meanings
  for (const vwa of vwas) {
    if (!vwa.analysis_axes) continue;
    const cc = vwa.analysis_axes.concept_chosen;

    // Get the word_analyses id for this word_key
    const { data: wa } = await sb.from('word_analyses').select('id').eq('word_key', vwa.word_key);
    if (!wa || wa.length === 0) continue;

    // Get all concept names from word_meanings
    const { data: wm } = await sb.from('word_meanings').select('concept').eq('analysis_id', wa[0].id);
    const names = [...new Set(wm.map(m => m.concept))];

    // Check if concept_chosen matches exactly
    if (names.includes(cc)) continue;

    // Find the closest match (case-insensitive, accent-insensitive)
    const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const ccNorm = normalize(cc);
    const match = names.find(n => normalize(n) === ccNorm);

    if (match) {
      // Update concept_chosen and also the key in concepts object
      const axes = { ...vwa.analysis_axes };
      axes.concept_chosen = match;

      // Also update the concepts key if it exists with the wrong name
      if (axes.concepts && axes.concepts[cc] && cc !== match) {
        axes.concepts[match] = axes.concepts[cc];
        delete axes.concepts[cc];
      }

      const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', vwa.id);
      if (error) console.log('  ERR ' + vwa.word_key + ': ' + error.message);
      else console.log('  OK ' + vwa.word_key + ' v' + (vwa.verse_id-5967) + ': "' + cc + '" -> "' + match + '"');
    } else {
      console.log('  ?? ' + vwa.word_key + ' v' + (vwa.verse_id-5967) + ': "' + cc + '" no match in: ' + names.join(', '));
    }
  }

  console.log('\n=== DONE ===');
})();
