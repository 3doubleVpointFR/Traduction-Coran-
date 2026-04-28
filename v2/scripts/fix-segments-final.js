const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Fix broken segments by assigning sense_chosen (from VWA) as fr for content words
// and standard French for particles. This matches how V1-100 segments work.
(async () => {
  // Find broken verses
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, full_translation, segments, segments_step1')
    .gte('verse_id', 207).lte('verse_id', 293)
    .order('verse_id');

  // Get ALL VWA for these verses
  const {data: allVWA} = await db.from('verse_word_analyses')
    .select('verse_id, word_key, position, sense_chosen')
    .gte('verse_id', 207).lte('verse_id', 293);

  // Build VWA map: verse_id -> { position -> sense_chosen, word_key -> sense_chosen }
  const vwaMap = {};
  for (const v of (allVWA || [])) {
    if (!vwaMap[v.verse_id]) vwaMap[v.verse_id] = { byPos: {}, byKey: {} };
    vwaMap[v.verse_id].byPos[v.position] = v.sense_chosen;
    vwaMap[v.verse_id].byKey[v.word_key] = v.sense_chosen;
  }

  let fixed = 0;
  let totalSegsFixed = 0;

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    // Check if broken
    let badCount = 0;
    let contentCount = 0;
    for (const s of segs) {
      if (s.is_particle) continue;
      contentCount++;
      if (!s.fr || s.fr === '—' || s.fr === '' || s.fr.includes('/')) badCount++;
    }
    if (contentCount === 0 || badCount / contentCount < 0.3) continue;

    // Get step1 for better phon
    let step1 = va.segments_step1;
    if (typeof step1 === 'string') step1 = JSON.parse(step1);
    const step1Map = {};
    if (step1 && Array.isArray(step1)) {
      for (const s of step1) step1Map[s.position] = s;
    }

    const vwa = vwaMap[va.verse_id] || { byPos: {}, byKey: {} };
    const vn = va.verse_id - 7;
    let segsFixed = 0;

    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      const s1 = step1Map[seg.position];
      
      // Fix phon if it contains Arabic
      if (seg.phon && /[\u0600-\u06FF]/.test(seg.phon)) {
        if (s1 && s1.phon && !/[\u0600-\u06FF]/.test(s1.phon)) {
          seg.phon = s1.phon;
        } else if (s1 && s1.transliteration) {
          seg.phon = s1.transliteration;
        }
        // If still Arabic, leave it (at least it's readable)
      }

      // Fix fr
      if (seg.is_particle) {
        const ar = seg.arabic || '';
        const newFr = getParticleFr(ar);
        if (newFr && (!seg.fr || seg.fr === '' || seg.fr === '—')) {
          seg.fr = newFr;
          segsFixed++;
        }
      } else {
        // Content word - use VWA sense_chosen
        const sense = vwa.byPos[seg.position] || (seg.word_key && vwa.byKey[seg.word_key]) || null;
        
        if (sense && (!seg.fr || seg.fr === '—' || seg.fr === '' || seg.fr.includes('/'))) {
          // Truncate if too long
          let fr = sense;
          if (fr.length > 35) {
            const dash = fr.indexOf('—');
            if (dash > 0) fr = fr.substring(0, dash).trim();
            const comma = fr.indexOf(',');
            if (comma > 0 && fr.length > 35) fr = fr.substring(0, comma).trim();
          }
          seg.fr = fr;
          seg.sense_retenu = fr;
          segsFixed++;
        } else if (!seg.fr || seg.fr === '—' || seg.fr === '' || seg.fr.includes('/')) {
          // No VWA - try to get from step1 key or sense_retenu
          if (seg.sense_retenu && seg.sense_retenu.length > 0 && seg.sense_retenu !== '—') {
            seg.fr = seg.sense_retenu;
            segsFixed++;
          } else if (s1 && s1.key) {
            // Use word_key as last resort transliteration
            seg.fr = s1.key;
            segsFixed++;
          }
        }
      }
    }

    if (segsFixed > 0) {
      await db.from('verse_analyses').update({ segments: segs }).eq('id', va.id);
      fixed++;
      totalSegsFixed += segsFixed;
      console.log('V' + vn + ': ' + segsFixed + ' segments corrigés');
    }
  }

  console.log('\n=== RÉSULTAT ===');
  console.log('Versets corrigés:', fixed);
  console.log('Segments corrigés:', totalSegsFixed);
})();

function getParticleFr(ar) {
  // Remove diacritical ornaments
  const a = ar.replace(/[۟۞ٰٓ]/g, '').trim();
  
  if (a === 'وَ' || a.startsWith('وَ') && a.length <= 4) return 'et';
  if (a === 'فَ') return 'alors';
  if (a === 'فَإِذَا' || a === 'إِذَا') return 'lorsque';
  if (a === 'فَإِن' || a === 'إِن' || a === 'إِنِ') return 'si';
  if (a === 'فَإِنَّ' || a === 'إِنَّ') return 'certes';
  if (a.startsWith('فِي') || a.startsWith('فِY')) return 'dans';
  if (a === 'مِنْ' || a === 'مِن' || a === 'مِّن' || a === 'مِّن۞' || a === 'مِنَ') return 'de';
  if (a === 'عَنِ' || a === 'عَن') return 'sur';
  if (a.startsWith('إِلَ') || a.startsWith('إِلَY')) return 'vers';
  if (a.startsWith('عَلَ') || a.startsWith('عَلَY')) return 'sur';
  if (a === 'بِ' || a.startsWith('بِ') && a.length <= 5) return 'par';
  if (a.startsWith('لِ') && a.length <= 4) return 'pour';
  if (a === 'لَ' || a === 'لَّ') return 'pour';
  if (a === 'أَنَّ' || a === 'أَن' || a === 'أَنْ') return 'que';
  if (a === 'لَا' || a === 'لَّا') return 'ne pas';
  if (a === 'وَلَا') return 'et ne pas';
  if (a === 'مَا') return 'ce que';
  if (a === 'مَاذَا') return 'que';
  if (a === 'ثُمَّ') return 'puis';
  if (a === 'أَوْ') return 'ou';
  if (a === 'أَمْ') return 'ou bien';
  if (a === 'هُوَ') return 'il';
  if (a === 'هُمْ') return 'eux';
  if (a === 'هِىَ') return 'elle';
  if (a.startsWith('ٱلَّذِينَ') || a.startsWith('الَّذِينَ')) return 'ceux qui';
  if (a.startsWith('ٱلَّذِى') || a.startsWith('ٱلَّذِي') || a.startsWith('الَّذِى')) return 'celui qui';
  if (a === 'ذَٰلِكَ' || a === 'ذَ') return 'cela';
  if (a === 'كَذَٰلِكَ') return 'ainsi';
  if (a.startsWith('حَتَّ')) return "jusqu'à";
  if (a === 'بَلْ') return 'plutôt';
  if (a === 'كَمَا' || a === 'كَ') return 'comme';
  if (a === 'قَدْ') return 'certes';
  if (a === 'إِذْ') return 'quand';
  if (a === 'هَٰذَا' || a === 'هَـٰذَا') return 'ceci';
  if (a === 'إِلَّا') return 'sauf';
  if (a === 'بَيْنَ') return 'entre';
  if (a === 'مَن' || a === 'مَن') return 'celui qui';
  if (a === 'وَلَوْ') return 'et même si';
  if (a === 'لَوْ') return 'si';
  if (a === 'لَعَلَّكُمْ' || a === 'لَعَلَّهُمْ') return 'afin que vous';
  if (a === 'مَعَهُمُ' || a === 'مَعَهُ،' || a === 'مَعَهُ') return 'avec eux';
  if (a === 'فَمِنَ') return 'parmi';
  if (a === 'وَمَا') return 'et';
  if (a === 'لَهُ' || a === 'لَهُ،' || a === 'لَّهُمْ
