const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
(async()=>{
  const {data:va}=await db.from('verse_analyses').select('*').eq('verse_id',310);
  if(!va||!va.length){console.log('No verse_analysis for 310');return;}
  console.log('=== VERSE ANALYSIS ===');
  console.log('id:',va[0].id,'verse_id:',va[0].verse_id);
  console.log('translation_arab:',va[0].translation_arab||'EMPTY');

  const segs=va[0].segments||[];
  console.log('\n=== SEGMENTS ('+segs.length+') ===');
  segs.forEach((s,i)=>{
    const wk=s.word_key||s.key||'?';
    const type=s.is_particle||s.type==='particle'?'PART':'IMP';
    console.log(i+': pos='+s.position+' ['+type+'] wk='+wk+' phon='+s.phon+' ar='+s.arabic);
  });

  const {data:vwa}=await db.from('verse_word_analyses').select('id').eq('verse_id',310);
  console.log('\nExisting VWA:',vwa.length);

  const wkeys=[...new Set(segs.filter(s=>!s.is_particle&&s.type!=='particle').map(s=>s.word_key||s.key))].filter(Boolean);
  console.log('\nWord keys:',wkeys.join(', '));

  for(const wk of wkeys){
    const {data:wa}=await db.from('word_analyses').select('id,root_ar,root_phon,total_occurrences').eq('word_key',wk);
    if(!wa||!wa.length){console.log('  '+wk+' -> NOT FOUND');continue;}
    const aid=wa[0].id;
    const {data:wm}=await db.from('word_meanings').select('id,concept,sense').eq('analysis_id',aid);
    const concepts=[...new Set(wm.map(m=>m.concept))];
    const suspect=wm.length<5?' ⚠️ SUSPECT':'';
    console.log('  '+wk+' -> aid='+aid+' root='+wa[0].root_ar+' occ='+wa[0].total_occurrences+' | '+wm.length+' sens, '+concepts.length+' concepts'+suspect);
    const byC={};
    wm.forEach(m=>{if(!byC[m.concept])byC[m.concept]=[];byC[m.concept].push(m.sense);});
    for(const [c,senses] of Object.entries(byC)){
      console.log('    ['+c+'] '+senses.join(' | '));
    }
  }

  // Check existing daily
  const aids=[];
  for(const wk of wkeys){
    const {data:wa}=await db.from('word_analyses').select('id').eq('word_key',wk);
    if(wa&&wa.length) aids.push(wa[0].id);
  }
  const {data:existDaily}=await db.from('word_daily').select('analysis_id').in('analysis_id',aids);
  const existSet=new Set((existDaily||[]).map(d=>d.analysis_id));
  console.log('\nMissing daily:',aids.filter(a=>!existSet.has(a)).join(',')||'none');
})();
