const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  const { data } = await supabase.from('word_meanings').select('concept,sense').eq('analysis_id',1192).not('concept','is',null);
  const by={}; for(const r of (data||[])) { if(!by[r.concept]) by[r.concept]=[]; by[r.concept].push(r.sense); }
  console.log('n f q (1192):'); for(const [c,s] of Object.entries(by)) console.log(` "${c}": ${JSON.stringify(s)}`);
}
main().catch(console.error);
