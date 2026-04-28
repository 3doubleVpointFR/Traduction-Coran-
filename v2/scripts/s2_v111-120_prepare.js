const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const keymap = JSON.parse(fs.readFileSync('./s2_v111-120_keymap.json','utf8'));
  const segments = JSON.parse(fs.readFileSync('./s2_v111-120_segments.json','utf8'));
  const uniqueKeys = [...new Set(Object.values(keymap))];
  console.log(`Unique word_keys: ${uniqueKeys.length}`);

  // 1. Get word_analyses IDs for each word_key
  const waMap = {}; // word_key -> analysis_id
  for (let i = 0; i < uniqueKeys.length; i += 30) {
    const batch = uniqueKeys.slice(i, i + 30);
    const { data, error } = await supabase
      .from('word_analyses')
      .select('id, word_key')
      .in('word_key', batch);
    if (error) { console.error('Error:', error); continue; }
    for (const row of data) {
      waMap[row.word_key] = row.id;
    }
  }
  console.log(`word_analyses found: ${Object.keys(waMap).length}/${uniqueKeys.length}`);
  const missingWA = uniqueKeys.filter(k => !waMap[k]);
  if (missingWA.length > 0) console.log('Missing word_analyses:', missingWA);

  // 2. Get word_meanings for all analysis_ids
  const analysisIds = Object.values(waMap);
  const concepts = {}; // word_key -> [{concept, sense, status, description, ...}]
  for (let i = 0; i < analysisIds.length; i += 30) {
    const batch = analysisIds.slice(i, i + 30);
    const { data, error } = await supabase
      .from('word_meanings')
      .select('analysis_id, concept, sense, status, description, display_order')
      .in('analysis_id', batch)
      .order('analysis_id')
      .order('display_order');
    if (error) { console.error('Error:', error); continue; }
    for (const row of data) {
      // Find word_key for this analysis_id
      const wk = Object.entries(waMap).find(([k, v]) => v === row.analysis_id)?.[0];
      if (!wk) continue;
      if (!concepts[wk]) concepts[wk] = [];
      concepts[wk].push(row);
    }
  }

  // Check missing
  const missingConcepts = uniqueKeys.filter(k => !concepts[k] || concepts[k].length === 0);
  console.log(`\nRoots with concepts: ${Object.keys(concepts).length}`);
  console.log(`Roots MISSING concepts: ${missingConcepts.length}`);
  if (missingConcepts.length > 0) console.log('Missing:', missingConcepts);

  // Save concepts
  fs.writeFileSync('./s2_v111-120_concepts.json', JSON.stringify(concepts, null, 2));
  console.log('Concepts saved');

  // 3. Summary: concept names per root
  console.log('\n=== CONCEPTS PER ROOT ===');
  for (const wk of uniqueKeys.sort()) {
    if (!concepts[wk]) { console.log(`${wk}: NO CONCEPTS`); continue; }
    const grouped = {};
    for (const m of concepts[wk]) {
      if (!grouped[m.concept]) grouped[m.concept] = { status: m.status, senses: [] };
      grouped[m.concept].senses.push(m.sense);
    }
    const summary = Object.entries(grouped).map(([c,v]) => `${c}(${v.senses.length}s)`).join(', ');
    console.log(`${wk}: ${summary}`);
  }

  // 4. Enrich segments
  for (const [verseKey, verseData] of Object.entries(segments)) {
    for (const seg of verseData.segments) {
      if (seg.type === 'important' && seg.key) {
        seg.word_key = keymap[seg.key] || seg.key;
        seg.is_particle = false;
      } else if (seg.type === 'particle') {
        seg.is_particle = true;
      }
    }
  }
  fs.writeFileSync('./s2_v111-120_segments_enriched.json', JSON.stringify(segments, null, 2));
  console.log('\nEnriched segments saved');

  // 5. Per-verse summary
  console.log('\n=== PER VERSE ===');
  for (const [vk, vd] of Object.entries(segments)) {
    const cw = vd.segments.filter(s => s.type === 'important');
    const ok = cw.filter(s => concepts[s.word_key]);
    const miss = cw.filter(s => !concepts[s.word_key]);
    console.log(`${vk} (vid=${vd.verse_id}, aid=${vd.analysis_id}): ${cw.length} words, ${ok.length} ok, ${miss.length} missing`);
    if (miss.length > 0) console.log(`  Missing: ${miss.map(s=>s.word_key).join(', ')}`);
  }
}

main().catch(console.error);
