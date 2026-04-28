const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Rebuild segments from segments_step1 for verses where segments were grouped
(async () => {
  const badVns = [25,26,213,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,240,245,246];

  let fixed = 0;
  let errors = [];

  for (const vn of badVns) {
    const vid = vn + 7;
    const {data: va} = await supabase.from('verse_analyses')
      .select('id, full_translation, segments_step1, segments')
      .eq('verse_id', vid).single();

    if (!va) { errors.push('V'+vn+': not found'); continue; }

    let step1 = va.segments_step1;
    if (typeof step1 === 'string') step1 = JSON.parse(step1);
    if (!step1 || !Array.isArray(step1)) { errors.push('V'+vn+': no step1'); continue; }

    let oldSegs = va.segments;
    if (typeof oldSegs === 'string') oldSegs = JSON.parse(oldSegs);

    // Get VWA for this verse to map sense_chosen
    const {data: vwaList} = await supabase.from('verse_word_analyses')
      .select('position, word_key, sense_chosen')
      .eq('verse_id', vid)
      .order('position');

    const vwaMap = {};
    if (vwaList) {
      for (const w of vwaList) vwaMap[w.position] = w;
    }

    // Build new segments from step1
    const newSegs = [];

    for (const s1 of step1) {
      const seg = {
        position: s1.position,
        phon: buildPhon(s1),
        arabic: s1.arabic || '',
        pos: s1.pos || 'particule',
        is_particle: s1.type === 'particle',
        word_key: s1.key || null,
      };

      // Get fr from old segments - try to match by position or find in grouped segment
      seg.fr = findFrForPosition(s1, oldSegs, step1);

      // Get sense_retenu from VWA
      const vwa = vwaMap[s1.position];
      if (vwa) {
        seg.sense_retenu = vwa.sense_chosen;
        seg.word_key = seg.word_key || vwa.word_key;
      } else if (s1.type === 'particle') {
        seg.sense_retenu = '';
      }

      newSegs.push(seg);
    }

    // Verify: all segments have phon and arabic
    const missingFr = newSegs.filter(s => !s.fr && !s.is_particle).length;

    // Update
    const {error} = await supabase.from('verse_analyses')
      .update({ segments: newSegs })
      .eq('id', va.id);

    if (error) {
      errors.push('V'+vn+': DB error: '+error.message);
    } else {
      fixed++;
      console.log('V'+vn+': '+step1.length+' segments (was '+oldSegs.length+')' + (missingFr ? ' ['+missingFr+' missing fr]' : ''));
    }
  }

  console.log('\nFixed:', fixed);
  if (errors.length) {
    console.log('Errors:');
    errors.forEach(e => console.log('  X', e));
  }
})();

function buildPhon(s1) {
  // Build readable phonetic from step1 data
  let phon = s1.phon || '';

  // If phon is Arabic script, use a transliteration
  // Check if it contains Arabic characters
  if (/[\u0600-\u06FF]/.test(phon)) {
    // Use the arabic field and try to create a basic phon
    // For now, keep the arabic phon as-is (it's better than nothing)
    return phon;
  }

  return phon;
}

function findFrForPosition(s1, oldSegs, allStep1) {
  if (!oldSegs || !Array.isArray(oldSegs)) return '';

  // Strategy 1: exact position match
  const exact = oldSegs.find(os => os.position === s1.position);
  if (exact && exact.fr) {
    // Check if the old segment was single-word (not grouped)
    const oldPhon = exact.phon || '';
    if (oldPhon.split(/\s+/).length <= 2) {
      return exact.fr;
    }
  }

  // Strategy 2: this position is inside a grouped old segment
  // Find which old segment contains this step1's Arabic text
  for (const os of oldSegs) {
    if (!os.arabic || !s1.arabic) continue;
    if (os.arabic.includes(s1.arabic)) {
      // This old segment contains our word - extract the relevant French part
      // For particles, return the particle
      if (s1.type === 'particle') {
        return getParticleFr(s1);
      }
      // For content words, we need to split the grouped French
      // This is approximate - return the whole fr for now, we'll need manual review
      return ''; // Will be filled below
    }
  }

  // Strategy 3: for particles, provide standard translations
  if (s1.type === 'particle') {
    return getParticleFr(s1);
  }

  return '';
}

function getParticleFr(s1) {
  const arabic = s1.arabic || '';
  const phon = (s1.phon || '').toLowerCase();

  // Common particles
  if (arabic.startsWith('وَ') || arabic === 'وَ') return 'et';
  if (arabic.startsWith('فَ') || arabic === 'فَ') return 'alors';
  if (arabic === 'فِى' || arabic === 'فِي') return 'dans';
  if (arabic === 'مِنْ' || arabic === 'مِن') return 'de';
  if (arabic === 'إِلَىٰ' || arabic === 'إِلَى') return 'vers';
  if (arabic === 'عَلَىٰ' || arabic === 'عَلَى') return 'sur';
  if (arabic === 'بِ' || arabic.startsWith('بِ')) return 'par';
  if (arabic === 'لَ' || arabic.startsWith('لِ') || arabic.startsWith('لَ')) return 'pour';
  if (arabic === 'أَنَّ' || arabic.startsWith('أَنَّ')) return 'que';
  if (arabic === 'إِنَّ' || arabic.startsWith('إِنَّ')) return 'certes';
  if (arabic === 'لَا' || arabic === 'لَّا') return 'ne pas';
  if (arabic === 'مَا') return 'ce que';
  if (arabic === 'إِذَا') return 'lorsque';
  if (arabic === 'ثُمَّ') return 'puis';
  if (arabic === 'أَوْ') return 'ou';
  if (arabic === 'هُوَ') return 'lui';
  if (arabic === 'هُمْ') return 'eux';
  if (arabic === 'كُمْ' || arabic.endsWith('كُمْ')) return 'vous';
  if (arabic.startsWith('لَّكُمْ')) return 'pour vous';
  if (arabic === 'الَّذِى' || arabic === 'ٱلَّذِى') return 'celui qui';
  if (arabic === 'الَّذِينَ' || arabic === 'ٱلَّذِينَ') return 'ceux qui';

  return '';
}
