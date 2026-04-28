const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ===== V65 : segments + DEM + JUSTIFICATION Livre → Écriture, Tora → Thora =====
  {
    const { data } = await db.from('verse_analyses').select('translation_explanation, segments').eq('verse_id', 358).single();

    // Segments fix
    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
    const segFixed = segs.map(s => {
      const newSeg = { ...s };
      if (newSeg.position === 1) newSeg.fr = 'Ô gens de';
      if (newSeg.position === 2) newSeg.fr = "l'Écriture";
      if (newSeg.position === 9) newSeg.fr = 'la Thora';
      return newSeg;
    });

    // Text fix: Livre → Écriture, Torah/Tora → Thora
    let newExpl = data.translation_explanation
      .replace(/\bGens du Livre\b/g, "Gens de l'Écriture")
      .replace(/\bgens du Livre\b/g, "gens de l'Écriture")
      .replace(/\bdu Livre\b/g, "de l'Écriture")
      .replace(/\ble Livre\b/g, "l'Écriture")
      .replace(/\bau Livre\b/g, "à l'Écriture")
      .replace(/\bLivre\b/g, 'Écriture')
      .replace(/\bla Torah\b/g, 'la Thora')
      .replace(/\bla Tora\b/g, 'la Thora')
      .replace(/\bTorah\b/g, 'Thora')
      .replace(/\bTora\b/g, 'Thora');

    await db.from('verse_analyses').update({ segments: segFixed, translation_explanation: newExpl }).eq('verse_id', 358);
    console.log('V65: Livre→Écriture, Tora→Thora (segments + DEM + JUSTIFICATION) ✅');
  }

  // ===== V66 : DEM Livre → Écriture, Torah → Thora =====
  {
    const { data } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 359).single();
    let newExpl = data.translation_explanation
      .replace(/\bGens du Livre\b/g, "Gens de l'Écriture")
      .replace(/\bgens du Livre\b/g, "gens de l'Écriture")
      .replace(/\bdu Livre\b/g, "de l'Écriture")
      .replace(/\ble Livre\b/g, "l'Écriture")
      .replace(/\bla Torah\b/g, 'la Thora')
      .replace(/\bla Tora\b/g, 'la Thora')
      .replace(/\bTorah\b/g, 'Thora')
      .replace(/\bTora\b/g, 'Thora');

    await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('verse_id', 359);
    console.log('V66: Livre→Écriture, Tora→Thora (DEM) ✅');
  }

  // ===== V68 : segments + DEM + JUSTIFICATION + VWA : croyants → ceux qui accordent foi, ont cru → ont accordé foi =====
  {
    const { data } = await db.from('verse_analyses').select('translation_explanation, segments').eq('verse_id', 361).single();

    // Segments fix
    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
    const segFixed = segs.map(s => {
      const newSeg = { ...s };
      if (newSeg.position === 10) newSeg.fr = 'ont accordé foi';
      if (newSeg.position === 13) newSeg.fr = 'de ceux qui accordent foi';
      return newSeg;
    });

    // Text fix in DEM and JUSTIFICATION (avoiding §CRITIQUE§)
    const expl = data.translation_explanation;
    const critStart = expl.indexOf('§CRITIQUE§');
    const beforeCrit = expl.substring(0, critStart);
    const critSection = expl.substring(critStart);

    let fixedBefore = beforeCrit
      .replace(/\b« ont cru »/g, '« ont accordé foi »')
      .replace(/\bont cru\b/g, 'ont accordé foi')
      .replace(/\b« croyants »/g, '« ceux qui accordent foi »')
      .replace(/\b« croyant »/g, '« celui qui accorde foi »')
      .replace(/\bles croyants\b/g, 'ceux qui accordent foi')
      .replace(/\baux croyants\b/g, 'à ceux qui accordent foi')
      .replace(/\bdes croyants\b/g, 'de ceux qui accordent foi')
      .replace(/\bcroyants\b/g, 'ceux qui accordent foi')
      .replace(/\bcroyant\b/g, 'celui qui accorde foi')
      .replace(/\bcroire\b/g, 'accorder foi')
      .replace(/\bcrue\b/g, 'accordé foi');

    const newExpl = fixedBefore + critSection;

    // VWA fix: amn sense_chosen
    await db.from('verse_word_analyses').update({ sense_chosen: 'accorder foi' }).eq('verse_id', 361).eq('word_key', 'amn').eq('position', 10);
    await db.from('verse_word_analyses').update({ sense_chosen: 'celui qui accorde foi' }).eq('verse_id', 361).eq('word_key', 'amn').eq('position', 13);

    await db.from('verse_analyses').update({ segments: segFixed, translation_explanation: newExpl }).eq('verse_id', 361);
    console.log('V68: croyants→ceux qui accordent foi, ont cru→ont accordé foi (segments + DEM + JUSTIFICATION + VWA) ✅');
  }

  // Vérification finale
  console.log('\n=== VÉRIFICATION ===');
  for (const vid of [358, 359, 360, 361]) {
    const vnum = vid - 293;
    const { data } = await db.from('verse_analyses').select('translation_explanation, segments').eq('verse_id', vid).single();
    const expl = data.translation_explanation;
    const critStart = expl.indexOf('§CRITIQUE§');
    const beforeCrit = expl.substring(0, critStart);

    const segs = typeof data.segments === 'string' ? JSON.parse(data.segments) : data.segments;
    const segsLower = segs.map(s => s.fr?.toLowerCase() || '').join(' ');

    const badWordsByVid = {
      358: ['livre', 'tora'],
      359: ['livre', 'tora'],
      361: ['croyants', 'ont cru'],
    };
    const bads = badWordsByVid[vid] || [];
    for (const b of bads) {
      const inDem = beforeCrit.toLowerCase().includes(b);
      const inSegs = segsLower.includes(b);
      if (inDem || inSegs) console.log('V' + vnum + ': reste "' + b + '" dans DEM/segments (DEM=' + inDem + ' segs=' + inSegs + ')');
    }
  }
  console.log('Fin.');
}
run().catch(console.error);
