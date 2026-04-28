const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function getParticleFr(ar) {
  const a = (ar || '').replace(/[۟۞ٰٓ\u0670]/g, '').trim();
  const map = {
    'وَ': 'et', 'فَ': 'alors', 'فِى': 'dans', 'فِي': 'dans',
    'مِنْ': 'de', 'مِن': 'de', 'مِنَ': 'de', 'مِّنْ': 'de', 'مِّن': 'de',
    'عَنِ': 'sur', 'عَن': 'sur', 'إِلَى': 'vers', 'إِلَيْ': 'vers',
    'عَلَى': 'sur', 'عَلَيْ': 'sur',
    'بِ': 'par', 'لِ': 'pour', 'لَ': 'pour', 'لَّ': 'pour',
    'أَنَّ': 'que', 'أَن': 'que', 'أَنْ': 'que', 'أَنۢ': 'que',
    'لَا': 'ne pas', 'لَّا': 'ne pas',
    'وَلَا': 'et ne pas', 'مَا': 'ce que', 'ثُمَّ': 'puis',
    'أَوْ': 'ou', 'أَمْ': 'ou bien', 'هُوَ': 'il', 'هُمْ': 'eux',
    'هِىَ': 'elle', 'ذَلِكَ': 'cela', 'كَذَلِكَ': 'ainsi',
    'بَلْ': 'plutôt', 'كَمَا': 'comme', 'كَ': 'comme',
    'قَدْ': 'certes', 'إِذْ': 'quand', 'إِذَا': 'lorsque',
    'هَذَا': 'ceci', 'إِلَّا': 'sauf', 'بَيْنَ': 'entre',
    'لَوْ': 'si', 'إِنَّ': 'certes', 'إِن': 'si', 'إِنِ': 'si',
    'فَإِنَّ': 'certes', 'فَإِن': 'si', 'فَإِنْ': 'si',
    'فَإِذَا': 'lorsque', 'فَإِذَآ': 'lorsque',
    'بَيْنَكُمْ': 'entre vous', 'عَلَيْكُمْ': 'sur vous',
    'لَكُمْ': 'pour vous', 'لَكُم': 'pour vous',
    'مِنكُم': 'parmi vous', 'مِنكُمْ': 'parmi vous',
    'لَهُمْ': 'pour eux', 'لَهُمُ': 'pour eux', 'لَهُ': 'pour lui',
    'عَلَيْهِمْ': 'sur eux', 'عَلَيْهِ': 'sur lui',
    'فِيهَا': 'en elle', 'فِيهِ': 'en lui', 'فِيهِمْ': 'parmi eux',
    'بِهِ': 'par lui', 'بِهَا': 'par elle', 'بِهِمْ': 'par eux',
    'مِنْهُ': 'de lui', 'مِنْهَا': "d'elle", 'مِنْهُمْ': "d'entre eux",
    'عَنْهُمْ': "d'eux", 'عَنْهُ': 'de lui',
    'إِلَيْهِ': 'vers lui', 'إِلَيْهِمْ': 'vers eux',
    'وَمَا': 'et ce que', 'وَمَن': 'et celui qui',
    'فَمَن': 'celui qui', 'فَمَا': 'alors ce que',
    'فَمِنْ': 'parmi', 'فَمِنَ': 'parmi',
    'وَإِن': 'et si', 'وَإِذَا': 'et lorsque', 'وَإِذْ': 'et quand',
    'وَلَوْ': 'et même si', 'وَلَكِنَّ': 'mais', 'وَلَكِن': 'mais',
    'لَكِنَّ': 'mais', 'لَكِن': 'mais',
    'حَتَّى': "jusqu'à", 'أَلَّا': 'de ne pas',
    'فَلَيْسَ': 'alors pas', 'لَيْسَ': 'n est pas',
    'هُنَالِكَ': 'là', 'هُنَا': 'ici',
    'ذَلِكُمْ': 'cela', 'تِلْكَ': 'ceux-là',
    'مَعَ': 'avec', 'بَعْدَ': 'après', 'قَبْلَ': 'avant',
    'فَوْقَ': 'au-dessus', 'تَحْتَ': 'en dessous',
    'عِندَ': 'auprès de', 'كُلِّ': 'chaque', 'كُلَّ': 'chaque',
    'وَلْ': "et qu'", 'فَلْ': "qu'il",
    'فَلَمَّا': 'lorsque', 'لَمَّا': 'lorsque',
    'لَّمْ': 'ne pas', 'لَمْ': 'ne pas',
    'هَلْ': 'est-ce que',
    'يَا': 'ô', 'أَيُّهَا': 'ô',
    'وَهُمْ': 'et eux', 'وَهُوَ': 'et Il',
  };

  // Direct match
  if (map[a]) return map[a];

  // Starts-with matches
  if (a.startsWith('وَ') && a.length <= 4) return 'et';
  if (a.startsWith('فِي') || a.startsWith('فِى')) return 'dans';
  if (a.startsWith('إِلَ') && a.length <= 8) return 'vers';
  if (a.startsWith('عَلَ') && a.length <= 8) return 'sur';
  if (a.startsWith('بِ') && a.length <= 5) return 'par';
  if (a.startsWith('لِ') && a.length <= 5) return 'pour';
  if (a.startsWith('حَتَّ')) return "jusqu'à";
  if (a.startsWith('ٱلَّذِينَ') || a.startsWith('الَّذِينَ')) return 'ceux qui';
  if (a.startsWith('ٱلَّذِى') || a.startsWith('ٱلَّذِي') || a.startsWith('الَّذِى')) return 'celui qui';

  return null;
}

(async () => {
  // Get all verses with empty segments
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  // Get ALL VWA
  const {data: allVWA} = await db.from('verse_word_analyses')
    .select('verse_id, word_key, position, sense_chosen')
    .gte('verse_id', 8).lte('verse_id', 293);

  const vwaMap = {};
  for (const v of (allVWA || [])) {
    if (!vwaMap[v.verse_id]) vwaMap[v.verse_id] = {};
    vwaMap[v.verse_id][v.position] = v.sense_chosen;
  }

  let totalFixed = 0;
  let versesFixed = 0;
  let stillEmpty = 0;
  let stillEmptyVerses = [];

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let fixedInVerse = 0;
    let emptyInVerse = 0;
    const vwa = vwaMap[va.verse_id] || {};

    for (const s of segs) {
      if (s.fr && s.fr !== '' && s.fr !== '—') continue;

      // Try particle dictionary
      if (s.is_particle) {
        const pFr = getParticleFr(s.arabic);
        if (pFr) {
          s.fr = pFr;
          fixedInVerse++;
          continue;
        }
      }

      // Try VWA sense_chosen by position (try pos, pos-1, pos+1 for slight offsets)
      let sense = vwa[s.position];
      if (!sense && vwa[s.position - 1]) sense = null; // don't grab neighbor
      if (!sense && s.word_key) {
        // Find by word_key
        for (const [pos, sc] of Object.entries(vwa)) {
          // Check VWA entries - we can't match by key here since vwa is pos->sense
        }
      }

      if (sense) {
        let fr = sense;
        if (fr.length > 35) {
          const dash = fr.indexOf('—');
          if (dash > 0) fr = fr.substring(0, dash).trim();
          const comma = fr.indexOf(',');
          if (comma > 0 && fr.length > 35) fr = fr.substring(0, comma).trim();
        }
        s.fr = fr;
        fixedInVerse++;
        continue;
      }

      // Try sense_retenu
      if (s.sense_retenu && s.sense_retenu !== '—' && s.sense_retenu.length > 0) {
        s.fr = s.sense_retenu;
        fixedInVerse++;
        continue;
      }

      // Try particle even if not marked as particle
      const pFr = getParticleFr(s.arabic);
      if (pFr) {
        s.fr = pFr;
        s.is_particle = true;
        fixedInVerse++;
        continue;
      }

      emptyInVerse++;
    }

    if (fixedInVerse > 0) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
      totalFixed += fixedInVerse;
    }
    if (emptyInVerse > 0) {
      stillEmpty += emptyInVerse;
      stillEmptyVerses.push({v: va.verse_id - 7, empty: emptyInVerse});
    }
  }

  console.log('=== RÉSULTAT ===');
  console.log('Versets corrigés:', versesFixed);
  console.log('Segments remplis:', totalFixed);
  console.log('Segments encore vides:', stillEmpty);
  if (stillEmptyVerses.length > 0) {
    console.log('Versets encore incomplets:', stillEmptyVerses.map(v => 'V'+v.v+'('+v.empty+')').join(', '));
  }
})();
