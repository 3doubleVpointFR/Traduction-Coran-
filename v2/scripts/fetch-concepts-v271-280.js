const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const waIds = [
  250,254,255,256,261,263,264,277,278,279,283,285,286,287,288,294,298,303,307,313,
  324,326,343,349,354,356,361,372,374,379,384,393,397,398,404,405,428,446,451,458,
  466,470,476,477,479,483,487,504,522,528,538,543,548,566,598,608,609,610,616,620,
  624,644,650,652,671,681,682,688,694,725,727,739,743,747,759,848,930,939,941,943,
  947,950,951,952,968,969,979,990,996,1058,1074,1080,1108,1147,1148,1164,1174,1195,
  1196,1202,1241,1549,1696,1721,2577
];

async function main() {
  // word_analyses: key lookup
  const { data: was } = await supabase
    .from('word_analyses')
    .select('id, word_key')
    .in('id', waIds);
  const keyById = {};
  for (const wa of (was||[])) keyById[wa.id] = wa.word_key;

  // Fetch in batches of 50 IDs
  const batchSize = 50;
  const allWms = [];
  for (let i = 0; i < waIds.length; i += batchSize) {
    const batch = waIds.slice(i, i + batchSize);
    const { data, error } = await supabase
      .from('word_meanings')
      .select('analysis_id, concept, sense, description, display_order')
      .in('analysis_id', batch)
      .not('concept', 'is', null)
      .order('analysis_id')
      .order('display_order');
    if (error) { console.error('Error:', error); continue; }
    allWms.push(...(data||[]));
  }

  // Group by analysis_id → concept
  const byAid = {};
  for (const wm of allWms) {
    if (!byAid[wm.analysis_id]) byAid[wm.analysis_id] = {};
    if (!byAid[wm.analysis_id][wm.concept]) {
      byAid[wm.analysis_id][wm.concept] = { description: wm.description, senses: [] };
    }
    byAid[wm.analysis_id][wm.concept].senses.push(wm.sense);
  }

  console.log('const CONCEPTS = {');
  for (const aid of waIds) {
    const concepts = byAid[aid];
    if (!concepts) continue;
    const key = keyById[aid] || aid;
    console.log(`  // ${key} (aid=${aid})`);
    console.log(`  "${key}": {`);
    for (const [cname, cdata] of Object.entries(concepts)) {
      const desc = (cdata.description||'').replace(/\n/g,' ').replace(/\\/g,'\\\\').replace(/"/g,'\\"');
      const senses = cdata.senses.map(s => `"${(s||'').replace(/"/g,'\\"')}"`).join(', ');
      console.log(`    "${cname}": { desc: "${desc}", senses: [${senses}] },`);
    }
    console.log(`  },`);
  }
  console.log('};');
  console.log(`\n// Total racines avec concepts: ${Object.keys(byAid).length}`);
}
main().catch(console.error);
