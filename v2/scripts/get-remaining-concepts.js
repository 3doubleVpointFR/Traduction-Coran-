const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  // rbb(253), mlk(256) - already loaded but want full list, drb(405) Déplacement concept
  const ids = [253];
  for (const id of ids) {
    const { data } = await supabase.from('word_meanings').select('concept,sense,description').eq('analysis_id',id).not('concept','is',null).order('display_order');
    const by={}; for(const r of (data||[])) { if(!by[r.concept]) by[r.concept]={desc:(r.description||'').substring(0,120),senses:[]}; by[r.concept].senses.push(r.sense); }
    console.log(`\n=== id=${id} ===`);
    for(const [c,v] of Object.entries(by)) console.log(`"${c}": ${JSON.stringify(v.senses)}\n  ${v.desc}`);
  }
}
main().catch(console.error);
