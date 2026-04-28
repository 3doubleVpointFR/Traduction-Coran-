/**
 * Reconstruit translation_arab (français) pour V66 et V67 dont la BDD
 * contient à tort la phonétique arabe.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// V66 et V67 français reconstitué (rédigé directement)
const V66 = "Vous voilà — vous avez argumenté sur ce dont vous aviez la connaissance. Pourquoi donc argumentez-vous sur ce dont vous n'avez aucune connaissance ? Et Dieu sait, tandis que vous, vous ne savez pas.";

const V67 = "Abraham n'était ni juif ni chrétien, mais il était tourné vers la vérité, se remettant [à Dieu], et il n'était pas du nombre des associateurs.";

async function run() {
  await db.from('verse_analyses').update({ translation_arab: V66 }).eq('verse_id', 359);
  console.log('✓ V66 (vid=359) translation_arab corrigé');
  await db.from('verse_analyses').update({ translation_arab: V67 }).eq('verse_id', 360);
  console.log('✓ V67 (vid=360) translation_arab corrigé');
}
run().catch(e => { console.error(e); process.exit(1); });
