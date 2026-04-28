const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  const { data: va, error } = await supabase
    .from('verse_analyses')
    .select('id, full_translation')
    .eq('verse_id', 263)
    .single();
  if (error) { console.error(error); return; }

  const oldTr = va.full_translation;
  console.log('BEFORE:', oldTr);

  // "aux Taghoûts" -> "aux fausses divinités"
  const newTr = oldTr.replace(/aux Taghoûts/g, 'aux fausses divinités');
  console.log('AFTER:', newTr);

  if (oldTr === newTr) {
    console.log('No change needed.');
    return;
  }

  const { error: upErr } = await supabase
    .from('verse_analyses')
    .update({ full_translation: newTr })
    .eq('verse_id', 263);

  if (upErr) { console.error('Update error:', upErr); return; }
  console.log('\n=== FULL TRANSLATION UPDATED ===');
}

main().catch(console.error);
