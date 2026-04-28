const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // These 4 verses have segments with position fields that don't match VWA positions
  // We need to match by VWA position -> segment index (position-1 since segments are 1-indexed)
  const failedIds = [102, 103, 260, 261];
  let totalUpdated = 0;

  for (const verseId of failedIds) {
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', verseId).single();
    const { data: vwa } = await db.from('verse_word_analyses').select('word_key, position').eq('verse_id', verseId).order('position');

    if (!va || !vwa || vwa.length === 0) continue;

    const segs = [...va.segments];
    let updated = 0;

    for (const v of vwa) {
      if (!v.word_key || v.position == null) continue;

      // Try multiple strategies to find the right segment
      // Strategy 1: VWA position maps to segment with matching position field
      let segIdx = segs.findIndex(s => s.position === v.position && (s.word_key === null || s.word_key === undefined));

      // Strategy 2: For verse 103, VWA positions are 0-based, segments are 1-based
      // Try VWA.position+1 matching segment.position
      if (segIdx === -1) {
        segIdx = segs.findIndex(s => s.position === v.position + 1 && (s.word_key === null || s.word_key === undefined));
      }

      // Strategy 3: VWA position as direct index into segments array
      if (segIdx === -1 && v.position < segs.length) {
        const candidate = segs[v.position];
        if (candidate && (candidate.word_key === null || candidate.word_key === undefined) && !candidate.is_particle) {
          segIdx = v.position;
        }
      }

      if (segIdx !== -1) {
        segs[segIdx] = {
          ...segs[segIdx],
          word_key: v.word_key,
          is_particle: false,
        };
        updated++;
      }
    }

    if (updated > 0) {
      const { error } = await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', verseId);
      if (error) {
        console.log(`[${verseId}] ERROR: ${error.message}`);
      } else {
        console.log(`[${verseId}] Fixed ${updated}/${vwa.length} segments`);
        totalUpdated += updated;
      }
    } else {
      console.log(`[${verseId}] Still could not match. Dumping alignment:`);
      for (const v of vwa) {
        const matchingSeg = segs.find(s => s.position === v.position);
        const matchingSegP1 = segs.find(s => s.position === v.position + 1);
        console.log(`  VWA pos=${v.position} wk=${v.word_key} | seg@pos=${matchingSeg?.arabic || 'NONE'} | seg@pos+1=${matchingSegP1?.arabic || 'NONE'}`);
      }
    }
  }

  console.log(`\nTotal additional segments fixed: ${totalUpdated}`);
}

main().catch(console.error);
