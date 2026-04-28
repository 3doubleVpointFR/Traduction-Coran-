const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// V75 : sens corrects pour chaque position selon le §DEMARCHE§
const V75_SENSES = {
  2: { word_key: 'ahl', sense: 'gens de', phon: 'ahla' },
  3: { word_key: 'ktb', sense: 'écriture', phon: 'al-kitābi' },
  6: { word_key: 'amn', sense: 'confier', phon: 'taʾmanhu' },
  7: { word_key: 'qntr', sense: 'trésor', phon: 'bi-qinṭārin' },
  8: { word_key: 'ady', sense: 'restituer', phon: 'yuʾaddihi' },
  13: { word_key: 'amn', sense: 'confier', phon: 'taʾmanhu' },
  14: { word_key: 'dnr', sense: 'dinar', phon: 'bi-dīnārin' },
  16: { word_key: 'ady', sense: 'restituer', phon: 'yuʾaddihi' },
  20: { word_key: 'dwm', sense: 'demeurer', phon: 'dumta' },
  22: { word_key: 'qwm', sense: 'se tenir debout', phon: 'qāʾiman' },
  25: { word_key: 'qwl', sense: 'dire', phon: 'qālū' },
  29: { word_key: 'amm', sense: 'illettrés', phon: 'al-ummiyyīna' },
  30: { word_key: 'sbl', sense: 'voie', phon: 'sabīlun' },
  31: { word_key: 'qwl', sense: 'dire', phon: 'yaqūlūna' },
  33: { word_key: 'alh', sense: 'Dieu', phon: 'allāhi' },
  34: { word_key: 'kdb', sense: 'mensonge', phon: 'al-kadhiba' },
  36: { word_key: 'elm', sense: 'savoir', phon: 'yaʿlamūna' },
};

// Particules V75 : phonétique propre + traduction
const V75_PARTICLES = {
  1: { fr: 'et de', phon: 'wa-min' },
  4: { fr: 'celui qui', phon: 'man' },
  5: { fr: 'si', phon: 'in' },
  9: { fr: 'à toi', phon: 'ilayka' },
  10: { fr: 'et parmi', phon: 'wa-minhum' },
  11: { fr: 'celui qui', phon: 'man' },
  12: { fr: 'si', phon: 'in' },
  15: { fr: 'ne', phon: 'lā' },
  17: { fr: 'à toi', phon: 'ilayka' },
  18: { fr: 'sauf', phon: 'illā' },
  19: { fr: 'tant que', phon: 'mā' },
  21: { fr: 'sur lui', phon: 'ʿalayhi' },
  23: { fr: 'cela', phon: 'dhālika' },
  24: { fr: 'parce qu\'ils', phon: 'bi-anna-hum' },
  26: { fr: 'il n\'est pas', phon: 'laysa' },
  27: { fr: 'sur nous', phon: 'ʿalaynā' },
  28: { fr: 'envers', phon: 'fī' },
  32: { fr: 'sur', phon: 'ʿalā' },
  35: { fr: 'alors qu\'ils', phon: 'wa-hum' },
};

async function run() {
  // ============== V75 segments ==============
  const r75 = await db.from('verse_analyses').select('segments').eq('verse_id', 368).single();
  const segs75 = r75.data.segments || [];
  const newSegs75 = segs75.map(s => {
    const word = V75_SENSES[s.position];
    const part = V75_PARTICLES[s.position];
    if (word) {
      return {
        ...s,
        word_key: word.word_key,
        fr: word.sense,
        sense_retenu: word.sense,
        phon: word.phon,
        is_particle: false,
      };
    }
    if (part) {
      return {
        ...s,
        fr: part.fr,
        phon: part.phon,
        is_particle: true,
        word_key: null,
      };
    }
    return s;
  });
  await db.from('verse_analyses').update({ segments: newSegs75 }).eq('verse_id', 368);
  console.log('✓ V75 segments corrigés');

  // V75 VWA : mettre à jour les sens et concept_chosen
  const { data: vwas75 } = await db.from('verse_word_analyses').select('id, position, word_key, analysis_axes, sense_chosen').eq('verse_id', 368);
  for (const v of vwas75 || []) {
    const correct = V75_SENSES[v.position];
    if (!correct) continue;
    // Trouver le concept correct depuis word_meanings
    const wa = await db.from('word_analyses').select('id').eq('word_key', correct.word_key).maybeSingle();
    if (!wa.data) continue;
    const { data: wm } = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
    const matchingConcept = (wm || []).find(m => m.sense === correct.sense)?.concept;

    if (v.analysis_axes) {
      v.analysis_axes.sense_chosen = correct.sense;
      if (matchingConcept) v.analysis_axes.concept_chosen = matchingConcept;
      if (v.analysis_axes.concepts && matchingConcept) {
        for (const c of Object.keys(v.analysis_axes.concepts)) {
          v.analysis_axes.concepts[c].status = (c === matchingConcept) ? 'retenu' : 'nul';
        }
      }
      await db.from('verse_word_analyses').update({
        sense_chosen: correct.sense,
        word_key: correct.word_key,
        analysis_axes: v.analysis_axes,
      }).eq('id', v.id);
    }
  }
  console.log('✓ V75 VWA mis à jour avec sens contextuels');

  // ============== V76 fa particule sans traduction ==============
  const r76 = await db.from('verse_analyses').select('segments').eq('verse_id', 369).single();
  const segs76 = r76.data.segments || [];
  let v76Changed = false;
  const newSegs76 = segs76.map(s => {
    if (s.phon === 'fa' || (s.is_particle && (s.fr === '' || s.fr === null || s.fr === undefined))) {
      v76Changed = true;
      // Mapping pour les particules courantes
      const PARTICLE_MAP = {
        'fa': 'alors',
        'wa': 'et',
        'bi': 'avec',
        'lā': 'ne',
        'mā': 'ne',
        'in': 'si',
        'inna': 'certes',
      };
      const fr = PARTICLE_MAP[s.phon] || '...';
      return { ...s, fr };
    }
    return s;
  });
  if (v76Changed) {
    await db.from('verse_analyses').update({ segments: newSegs76 }).eq('verse_id', 369);
    console.log('✓ V76 particule "fa" traduite par "alors"');
  } else {
    console.log('⊙ V76 aucune particule sans fr trouvée');
  }
}

run().catch(e => { console.error(e); process.exit(1); });
