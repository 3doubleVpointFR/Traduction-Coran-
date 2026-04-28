const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  const { data } = await supabase.from('word_meanings').select('concept,sense,description,display_order').eq('analysis_id',1186).order('display_order');
  console.log('=== e f f (1186) ===', data?.length, 'entrées');
  const by={};
  for(const r of (data||[])) {
    if(!by[r.concept||'NULL']) by[r.concept||'NULL']={desc:r.description,senses:[]};
    by[r.concept||'NULL'].senses.push(r.sense);
  }
  for(const [c,v] of Object.entries(by)) console.log(`"${c}": ${JSON.stringify(v.senses)}\n  desc: ${(v.desc||'').substring(0,150)}\n`);
}
main().catch(console.error);
