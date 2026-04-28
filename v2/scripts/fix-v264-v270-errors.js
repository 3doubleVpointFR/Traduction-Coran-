const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVwa(id, label, mutateFn) {
  const { data, error } = await supabase
    .from('verse_word_analyses')
    .select('analysis_axes')
    .eq('id', id)
    .single();
  if (error || !data) { console.error(`❌ ${label}: lecture impossible`, error); return; }

  const axes = JSON.parse(JSON.stringify(data.analysis_axes)); // deep clone
  mutateFn(axes);

  const { error: err2 } = await supabase
    .from('verse_word_analyses')
    .update({ analysis_axes: axes })
    .eq('id', id);
  if (err2) { console.error(`❌ ${label}: update impossible`, err2); return; }
  console.log(`✅ ${label}: corrigé`);
}

async function main() {
  // Fix 1 : ray id=4204 — "Vision/Perception" probable → retenu
  await fixVwa(4204, 'ray (V264)', (axes) => {
    axes.concepts['Vision/Perception'].status = 'retenu';
  });

  // Fix 2 : sfw id=4209 — "Pureté/Clarté" probable → retenu
  await fixVwa(4209, 'sfw (V264)', (axes) => {
    axes.concepts['Pureté/Clarté'].status = 'retenu';
  });

  // Fix 3 : ndhr id=4285 — concept_chosen "Avertissement/Mise en garde" → "Vœu/Consécration"
  await fixVwa(4285, 'ndhr (V270)', (axes) => {
    axes.concept_chosen = 'Vœu/Consécration';
  });

  console.log('\nDone.');
}
main().catch(console.error);
