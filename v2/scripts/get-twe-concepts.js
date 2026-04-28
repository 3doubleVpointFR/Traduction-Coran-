const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  // twe (id=925), nfq (285) vs n f q (??), khbr (1564), e f f (1186)
  const ids = [925, 285];
  for (const id of ids) {
    const { data } = await supabase.from('word_meanings').select('concept,sense,description,display_order').eq('analysis_id',id).not('concept','is',null).order('display_order');
    const by={};
    for(const r of (data||[])) { if(!by[r.concept]) by[r.concept]={desc:(r.description||'').substring(0,100),senses:[]}; by[r.concept].senses.push(r.sense); }
    console.log(`\n=== id=${id} ===`);
    for(const [c,v] of Object.entries(by)) console.log(`"${c}": ${JSON.stringify(v.senses)}\n  ${v.desc}`);
  }
  // Check if nfq and n f q are same entry
  const { data: wa } = await supabase.from('word_analyses').select('id,word_key,root_ar').in('word_key',['nfq','n f q']);
  console.log('\n=== nfq/n f q word_analyses ===', wa?.map(r=>`${r.word_key}(id=${r.id},root=${r.root_ar})`));
}
main().catch(console.error);
