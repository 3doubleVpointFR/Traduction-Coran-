const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
(async()=>{
  // Check verse_analyses for V235 and V236
  const r3=await db.from('verse_analyses').select('id,verse_id,translation_arab,translation_explanation').in('verse_id',[242,243]).order('verse_id');
  for(const x of r3.data){
    console.log('\n=== analysis id='+x.id+' vid='+x.verse_id+' (V'+(x.verse_id-7)+') ===');
    console.log('TRAD:',(x.translation_arab||'').substring(0,120));
    console.log('DEM:',(x.translation_explanation||'').substring(0,200));
  }
  const r2=await db.from('verse_analyses').select('id,verse_id,translation_arab').in('verse_id',[242,243]).order('verse_id');
  r2.data.forEach(x=>console.log('analysis id='+x.id+' vid='+x.verse_id+' trad='+(x.translation_arab||'').substring(0,100)));
})();
