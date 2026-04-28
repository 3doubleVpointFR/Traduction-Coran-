const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const targets = [
    { verse_id: 265, word_key: 'hdy', position: 41, concept: 'Don/Cadeau' },
    { verse_id: 265, word_key: 'hyy', position: 18, concept: 'Vie/Vitalite' },
    { verse_id: 266, word_key: 'ksw', position: 55, concept: 'Don de vetement' },
    { verse_id: 266, word_key: 'lbv', position: 25, concept: 'Attente/Immobilite' },
    { verse_id: 266, word_key: 'qry', position: 5,  concept: 'Rassemblement/Concentration' },
    { verse_id: 267, word_key: 'hyy', position: 7,  concept: 'Vie/Vitalite' },
    { verse_id: 267, word_key: 'sEy', position: 34, concept: 'Effort/Travail' },
    { verse_id: 267, word_key: 'Tmn', position: 15, concept: 'Stabilisation/Affermissement' },
    { verse_id: 267, word_key: 'Tyr', position: 21, concept: 'Presage/Omen' },
  ];

  for (const t of targets) {
    const { data, error } = await supabase
      .from('verse_word_analyses')
      .select('word_key, position, analysis_axes')
      .eq('verse_id', t.verse_id)
      .eq('word_key', t.word_key)
      .eq('position', t.position)
      .single();

    if (error) { console.log(`ERR ${t.verse_id}/${t.word_key}: ${error.message}`); continue; }

    const axes = data.analysis_axes;
    const concepts = axes.concepts || {};
    const c = concepts[t.concept];

    if (!c) {
      console.log(`\n=== ${t.verse_id}/${t.word_key} — concept "${t.concept}" NOT FOUND ===`);
      console.log('Available concepts:', Object.keys(concepts).join(', '));
      continue;
    }

    console.log(`\n=== verse_id=${t.verse_id} key=${t.word_key} pos=${t.position} concept="${t.concept}" status=${c.status} ===`);
    for (const axe of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence']) {
      const val = c[axe] || '';
      const flag = val.length < 100 ? ' *** SHORT ***' : '';
      console.log(`  ${axe} (${val.length})${flag}: ${val}`);
    }
  }
}
main().catch(console.error);
