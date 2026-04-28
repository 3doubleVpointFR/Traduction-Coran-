const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  // khbr (id=1564) concepts
  const { data: khbr, count: c1 } = await supabase.from('word_meanings').select('concept,sense,description').eq('analysis_id',1564).not('concept','is',null);
  console.log('=== khbr (1564) ===', c1);
  const by={};
  for(const r of (khbr||[])) { if(!by[r.concept]) by[r.concept]={desc:r.description,senses:[]}; by[r.concept].senses.push(r.sense); }
  for(const [c,v] of Object.entries(by)) console.log(`"${c}": ${JSON.stringify(v.senses)}\n  desc: ${(v.desc||'').substring(0,120)}\n`);

  // khb r (id=1561) concepts
  const { data: khb2 } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',1561).not('concept','is',null);
  console.log('\n=== khb r (1561) ===');
  for(const r of (khb2||[])) console.log(`  ${r.concept}: ${r.sense}`);

  // eff - chercher dans word_analyses
  const { data: eff } = await supabase.from('word_analyses').select('id,word_key,root_ar').ilike('word_key','%eff%');
  console.log('\n=== eff dans word_analyses ===', eff);
  const { data: eff2 } = await supabase.from('word_analyses').select('id,word_key,root_ar').ilike('root_ar','%ع ف ف%');
  console.log('=== root ع ف ف ===', eff2);
}
main().catch(console.error);
