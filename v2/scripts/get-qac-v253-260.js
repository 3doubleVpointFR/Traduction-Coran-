const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Check columns first
  const { data: sample } = await supabase.from('words').select('*').limit(1);
  if (sample && sample.length > 0) console.log('COLONNES:', Object.keys(sample[0]).join(', '));

  for (let vnum = 253; vnum <= 260; vnum++) {
    const vid = vnum + 7;
    const { data: words } = await supabase.from('words').select('*').eq('verse_id', vid).order('position');
    const { data: va } = await supabase.from('verse_analyses').select('id').eq('verse_id', vid).single();
    console.log(`\n=== V${vnum} (vid=${vid}, aid=${va?.id}) ===`);
    if (words && words.length > 0) words.forEach(w => {
      const root = w.root_key || w.root || '-';
      const bw = w.form || w.transliteration || w.bw || '-';
      console.log(`  pos=${w.position} form=${bw} root=${root} pos_tag=${w.pos_tag||w.tag||'-'}`);
    });
    else console.log('  (no words)');
  }
}
main().catch(console.error);
