/**
 * Retire le bloc "**Cohérence coranique** : ..." du proof_ctx de chaque VWA.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const MARKER = '**Cohérence coranique**';

async function run() {
  const allVwa = [];
  let off = 0;
  while (true) {
    const { data } = await db.from('verse_word_analyses').select('id, analysis_axes').range(off, off + 999);
    if (!data || data.length === 0) break;
    allVwa.push(...data);
    if (data.length < 1000) break;
    off += 1000;
  }

  let cleaned = 0;
  for (const v of allVwa) {
    const ax = v.analysis_axes;
    if (!ax?.concepts) continue;
    let changed = false;
    for (const [name, body] of Object.entries(ax.concepts)) {
      const ctx = body.proof_ctx || '';
      if (!ctx.includes(MARKER)) continue;
      // Retirer le marker et tout ce qui suit jusqu'à la fin (ou jusqu'à un autre **bloc**)
      const newCtx = ctx.split(/\n+\*\*Cohérence coranique\*\*/)[0].trimEnd();
      body.proof_ctx = newCtx;
      changed = true;
    }
    if (changed) {
      await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', v.id);
      cleaned++;
    }
  }
  console.log(`✓ ${cleaned} VWA nettoyées`);
}
run().catch(e => { console.error(e); process.exit(1); });
