const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// French translations rebuilt from segments + Hamidullah reference
// V65: O gens du Livre ! Pourquoi argumentez-vous au sujet d'Abraham, alors que la Tora et l'Évangile n'ont été envoyés qu'après lui ? N'exercez-vous donc pas votre raison ?
// V66: Vous voilà — vous avez argumenté sur ce dont vous aviez la connaissance ; pourquoi donc argumentez-vous sur ce dont il n'y a pour vous aucune connaissance ? Dieu sait, tandis que vous, vous ne savez pas.
// V67: Abraham n'était ni Juif ni Chrétien, mais il était tourné vers la vérité, se remettant [à Dieu], et il n'était pas des associateurs.
// V68: Certes, les plus dignes d'Abraham parmi les gens sont ceux qui l'ont suivi, ainsi que ce Prophète et ceux qui ont accordé foi. Et Dieu est le protecteur de ceux qui accordent foi.

const fixes = [
  {
    verse_id: 358,
    vnum: 65,
    translation_arab: "Ô gens de l'Écriture ! Pourquoi argumentez-vous au sujet d'Abraham, alors que la Thora et l'Évangile n'ont été envoyés qu'après lui ? N'exercez-vous donc pas votre raison ?",
  },
  {
    verse_id: 359,
    vnum: 66,
    translation_arab: "Vous voilà, vous avez argumenté sur ce dont vous aviez connaissance ; pourquoi donc argumentez-vous sur ce dont il n'y a pour vous aucune connaissance ? Dieu sait, tandis que vous, vous ne savez pas.",
  },
  {
    verse_id: 360,
    vnum: 67,
    translation_arab: "Abraham n'était ni Juif ni Chrétien, mais il était tourné vers la vérité, se remettant [à Dieu], et il n'était pas des associateurs.",
    fixSegmentsSchema: true,
  },
  {
    verse_id: 361,
    vnum: 68,
    translation_arab: "Certes, les plus dignes d'Abraham parmi les gens sont ceux qui l'ont suivi, ainsi que ce Prophète et ceux qui ont accordé foi. Et Dieu est le protecteur de ceux qui accordent foi.",
    fixSegmentsSchema: true,
  },
];

async function run() {
  for (const f of fixes) {
    const updates = { translation_arab: f.translation_arab };

    if (f.fixSegmentsSchema) {
      // Fix V67/V68 segments: phonetic → phon, translation → fr
      const { data } = await db.from('verse_analyses').select('segments').eq('verse_id', f.verse_id).single();
      const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
      if (segs) {
        const fixedSegs = segs.map(s => ({
          fr: s.translation || s.fr,
          pos: s.position,
          phon: s.phonetic || s.phon,
          arabic: s.arabic,
          word_key: s.word_key || null,
          is_particle: s.is_particle,
          sense_retenu: s.sense_retenu || null,
          position: s.position,
        }));
        updates.segments = fixedSegs;
      }
    }

    const { error } = await db.from('verse_analyses').update(updates).eq('verse_id', f.verse_id);
    if (error) console.error('V' + f.vnum + ': ERR', error.message);
    else console.log('V' + f.vnum + ' ✅ corrigé');
    console.log('  translation_arab: ' + f.translation_arab.substring(0, 90));
  }
}
run().catch(console.error);
