const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  const { data } = await supabase.from('word_meanings').select('concept,sense,description,display_order').eq('analysis_id',451).not('concept','is',null).order('display_order');
  const by={};
  for(const r of (data||[])) { if(!by[r.concept]) by[r.concept]={desc:r.description,senses:[]}; by[r.concept].senses.push(r.sense); }
  for(const [c,v] of Object.entries(by)) console.log(`"${c}": ${JSON.stringify(v.senses)}\n  desc: ${(v.desc||'').substring(0,100)}\n`);
  // Also check sya (id=681)
  const { data: d2 } = await supabase.from('word_meanings').select('concept,sense,description').eq('analysis_id',681).not('concept','is',null);
  console.log('\n=== sya (681) ===');
  const by2={};
  for(const r of (d2||[])) { if(!by2[r.concept]) by2[r.concept]={senses:[]}; by2[r.concept].senses.push(r.sense); }
  for(const [c,v] of Object.entries(by2)) console.log(`"${c}": ${JSON.stringify(v.senses)}`);
  // jaa (694)
  const { data: d3 } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',694).not('concept','is',null);
  console.log('\n=== jaa (694) ==='); for(const r of (d3||[])) console.log(r.concept,':', r.sense);
  // dhy (1549)
  const { data: d4 } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',1549).not('concept','is',null);
  console.log('\n=== dhy (1549) ==='); for(const r of (d4||[])) console.log(r.concept,':', r.sense);
  // dhhy (286)
  const { data: d5 } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',286).not('concept','is',null);
  console.log('\n=== dhhy (286) ==='); for(const r of (d5||[])) console.log(r.concept,':', r.sense);
  // fyh (356)
  const { data: d6 } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',356).not('concept','is',null);
  console.log('\n=== fyh (356) ==='); for(const r of (d6||[])) console.log(r.concept,':', r.sense);
}
main().catch(console.error);
