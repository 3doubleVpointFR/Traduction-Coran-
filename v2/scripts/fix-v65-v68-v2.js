const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ===== 1. V65/V66 : normaliser schéma segments (ar→arabic, ajouter pos + sense_retenu) =====
  for (const vid of [358, 359]) {
    const vnum = vid - 293;
    const { data } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;

    // Get VWA sense_chosen for mapping
    const { data: vwa } = await db.from('verse_word_analyses').select('word_key, position, sense_chosen').eq('verse_id', vid);
    const vwaMap = {};
    for (const v of vwa) vwaMap[v.position] = v.sense_chosen;

    const fixed = segs.map(s => ({
      fr: s.fr || '',
      pos: s.position,
      phon: s.phon,
      arabic: s.arabic || s.ar,
      word_key: s.word_key || null,
      is_particle: s.is_particle,
      sense_retenu: s.is_particle ? null : (vwaMap[s.position] || null),
      position: s.position,
    }));

    const { error } = await db.from('verse_analyses').update({ segments: fixed }).eq('verse_id', vid);
    if (error) console.error('V' + vnum + ' segments: ERR', error.message);
    else console.log('V' + vnum + ': schéma segments normalisé ✅');
  }

  // ===== 2. V65/V66 : remplir les fr vides =====
  // V65 pos=12 "min" → "de" (actuellement vide)
  // V66 pos=2 "hāʾulāʾi" → "vous" (actuellement vide), pos=6 "bihi" → "", pos=13 "bihi" → ""
  const emptyFrFixes = [
    { vid: 358, pos: 12, fr: 'de' },       // V65 min
    { vid: 359, pos: 2, fr: 'vous' },      // V66 hāʾulāʾi (démonstratif — ceux-là/vous)
    { vid: 359, pos: 6, fr: 'de cela' },   // V66 bihi (dont + pronom)
    { vid: 359, pos: 13, fr: 'de cela' },  // V66 bihi
  ];

  for (const fix of emptyFrFixes) {
    const { data } = await db.from('verse_analyses').select('segments').eq('verse_id', fix.vid).single();
    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
    const target = segs.find(s => s.position === fix.pos);
    if (target && (!target.fr || target.fr === '')) {
      target.fr = fix.fr;
    }
    await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', fix.vid);
    const vnum = fix.vid - 293;
    console.log('V' + vnum + ' pos=' + fix.pos + ': fr="' + fix.fr + '" ✅');
  }

  // ===== 3. V67/V68 : enlever "(Hamidullah, S3:V..)" du full_translation =====
  for (const vid of [360, 361]) {
    const vnum = vid - 293;
    const { data } = await db.from('verse_analyses').select('full_translation').eq('verse_id', vid).single();
    const cleaned = data.full_translation.replace(/\s*\(Hamidullah,\s*S?\d*:?V?\d*\)\s*$/i, '').trim();
    await db.from('verse_analyses').update({ full_translation: cleaned }).eq('verse_id', vid);
    console.log('V' + vnum + ' full_translation nettoyé ✅ : "' + cleaned.substring(0, 90) + '..."');
  }

  console.log('\n=== VÉRIFICATION FINALE ===');
  for (const vid of [358, 359, 360, 361]) {
    const { data } = await db.from('verse_analyses').select('full_translation, translation_arab, segments').eq('verse_id', vid).single();
    const vnum = vid - 293;
    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
    const fields = Object.keys(segs[0]);
    const emptyFr = segs.filter(s => !s.fr).length;
    const hasPos = fields.includes('pos');
    const hasArabic = fields.includes('arabic');
    const hasSenseRetenu = fields.includes('sense_retenu');
    console.log('V' + vnum + ': pos=' + hasPos + ' arabic=' + hasArabic + ' sense_retenu=' + hasSenseRetenu + ' emptyFr=' + emptyFr + ' fullTrad ends with Ham? ' + /\(Hamidullah/i.test(data.full_translation));
  }
}
run().catch(console.error);
