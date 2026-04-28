const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const targets = [
    { verse_id: 265, word_key: 'hdy', position: 41 },
    { verse_id: 265, word_key: 'hyy', position: 18 },
    { verse_id: 266, word_key: 'ksw', position: 55 },
    { verse_id: 266, word_key: 'lbv', position: 25 },
    { verse_id: 266, word_key: 'qry', position: 5  },
    { verse_id: 267, word_key: 'hyy', position: 7  },
    { verse_id: 267, word_key: 'sEy', position: 34 },
    { verse_id: 267, word_key: 'Tmn', position: 15 },
    { verse_id: 267, word_key: 'Tyr', position: 21 },
  ];

  for (const t of targets) {
    const { data, error } = await supabase
      .from('verse_word_analyses')
      .select('word_key, position, analysis_axes')
      .eq('verse_id', t.verse_id)
      .eq('word_key', t.word_key)
      .eq('position', t.position)
      .single();

    if (error) {
      console.log(`ERROR ${t.verse_id}/${t.word_key}/${t.position}: ${error.message}`);
      continue;
    }
    if (!data) {
      console.log(`NOT FOUND: ${t.verse_id}/${t.word_key}/${t.position}`);
      continue;
    }

    const axes = data.analysis_axes;
    console.log(`\n=== verse_id=${t.verse_id} word_key=${t.word_key} pos=${t.position} ===`);
    console.log(`sense_chosen: ${axes.sense_chosen}`);
    for (const axe of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence']) {
      const val = axes[axe] || '';
      console.log(`  ${axe} (${val.length}): ${val}`);
    }
  }
}
main().catch(console.error);
