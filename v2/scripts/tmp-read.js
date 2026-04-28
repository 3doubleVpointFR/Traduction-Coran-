const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
(async()=>{
  // S3:V3
  const {data:v}=await db.from('verses').select('id,verse_num,arabic_text')
    .eq('surah_id',3).eq('verse_num',3).single();
  console.log('=== SOURATE 3:3 ===');
  console.log('verse_id:', v.id, '| texte:', v.arabic_text);

  // Current segments from étape 1
  const {data:va}=await db.from('verse_analyses').select('segments').eq('verse_id',v.id).single();
  console.log('\n--- Segments étape 1 ---');
  const segs = va?.segments || [];
  segs.forEach((s,i)=>{
    const type = s.type||'?';
    const key = s.key||s.word_key||'null';
    console.log('  seg'+i+': type='+type+' key='+key+' phon="'+s.phon+'" fr="'+(s.fr||'')+'" pos='+s.position+' root='+(s.root||'null'));
  });

  // Get all important words' keys
  const importantSegs = segs.filter(s => s.type === 'important');
  const keys = importantSegs.map(s => s.key).filter(Boolean);
  console.log('\nMots importants:', keys);

  // Check each root
  for(const key of [...new Set(keys)]){
    const {data:wa}=await db.from('word_analyses').select('id,word_key,root_ar,analysis_step,total_occurrences')
      .eq('word_key',key).single();
    if(!wa){ console.log('\n'+key+' → PAS EN BDD'); continue; }

    const {data:wm}=await db.from('word_meanings').select('concept,sense')
      .eq('analysis_id',wa.id).not('concept','is',null).order('display_order');
    const {count:dailyCount}=await db.from('word_daily').select('id',{count:'exact',head:true})
      .eq('analysis_id',wa.id);

    const concepts = {};
    (wm||[]).forEach(m=>{ if(!concepts[m.concept]) concepts[m.concept]=[]; concepts[m.concept].push(m.sense); });

    console.log('\n=== '+key+' (id='+wa.id+') root='+wa.root_ar+' occ='+wa.total_occurrences+' daily='+dailyCount+' ===');
    for(const [c,senses] of Object.entries(concepts)){
      console.log('  ['+c+'] '+senses.join(', '));
    }
  }

  // Context: V2-V4
  console.log('\n=== Contexte V2-V4 ===');
  for(let vn=2;vn<=4;vn++){
    const {data:vx}=await db.from('verses').select('arabic_text').eq('surah_id',3).eq('verse_num',vn).single();
    console.log('  V'+vn+': '+vx?.arabic_text);
  }
})();
