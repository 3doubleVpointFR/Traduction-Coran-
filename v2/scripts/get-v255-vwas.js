const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  const { data } = await supabase.from('verse_word_analyses').select('id, word_key, position, analysis_axes').eq('verse_id', 262);
  for (const w of data) {
    const concepts = w.analysis_axes?.concepts || {};
    for (const [cname, cdata] of Object.entries(concepts)) {
      if (cdata.status === 'probable' || cdata.status === 'peu_probable') {
        const missing = ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence'].filter(a => !cdata[a]);
        if (missing.length > 0) console.log(`VWA id=${w.id} key=${w.word_key} pos=${w.position} concept="${cname}" status=${cdata.status} MISSING: ${missing.join(',')}`);
        else {
          const short = ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence'].filter(a => cdata[a].length < 100);
          if (short.length > 0) console.log(`VWA id=${w.id} key=${w.word_key} pos=${w.position} concept="${cname}" SHORT: ${short.map(a=>a+'('+cdata[a].length+')').join(',')}`);
        }
      }
    }
  }
}
main().catch(console.error);
