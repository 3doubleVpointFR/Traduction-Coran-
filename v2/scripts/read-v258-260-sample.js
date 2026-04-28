const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Get all VWAs for these verses to see which ones have axes filled
  for (const vid of [265, 266, 267]) {
    const { data, error } = await supabase
      .from('verse_word_analyses')
      .select('word_key, position, analysis_axes')
      .eq('verse_id', vid)
      .order('position');

    if (error) { console.log('ERR', error.message); continue; }

    console.log(`\n=== verse_id=${vid} (${data.length} VWAs) ===`);
    for (const d of data) {
      const axes = d.analysis_axes || {};
      const hasConcepts = axes.concepts && axes.concepts.length > 0;
      const axe1Len = (axes.axe1_verset || '').length;
      // Show concepts if any
      if (hasConcepts) {
        for (const c of axes.concepts) {
          const status = c.status;
          const a2 = (c.axe2_voisins || '').length;
          const a3 = (c.axe3_sourate || '').length;
          const a4 = (c.axe4_coherence || '').length;
          const a5 = (c.axe5_frequence || '').length;
          console.log(`  pos=${d.position} key=${d.word_key} concept=${c.label} status=${status} a2=${a2} a3=${a3} a4=${a4} a5=${a5}`);
          if (a2 < 100 || a3 < 100 || a4 < 100 || a5 < 100) {
            console.log(`    ** SHORT AXES FOUND **`);
            if (a2 < 100 && a2 > 0) console.log(`    axe2: ${c.axe2_voisins}`);
            if (a3 < 100 && a3 > 0) console.log(`    axe3: ${c.axe3_sourate}`);
            if (a4 < 100 && a4 > 0) console.log(`    axe4: ${c.axe4_coherence}`);
            if (a5 < 100 && a5 > 0) console.log(`    axe5: ${c.axe5_frequence}`);
          }
        }
      } else {
        console.log(`  pos=${d.position} key=${d.word_key} axe1_len=${axe1Len} (no concepts)`);
      }
    }
  }
}
main().catch(console.error);
