const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Hardcoded translations for common forms that appear in empty segments
const formToFr = {
  // From the remaining list
  'خَٰلِدُونَ': 'éternels', 'خَلِدُونَ': 'éternels',
  'ٱلْفَٰسِقِينَ': 'les pervers', 'ٱلْفَسِقِينَ': 'les pervers',
  'وَمُنذِرِينَ': 'et avertisseurs', 'أُوتُوهُ': 'l\'ont reçu',
  'بَغْيًا': 'par rivalité', 'بَغْيً۞ا': 'par rivalité',
  'فَهَدَى': 'alors a guidé', 'فَهَدَY': 'alors a guidé',
  'ٱخْتَلَفُوا۟': 'ont divergé', 'ٱخْتَلَفُوا': 'ont divergé',
  'يَهْدِى': 'guide', 'يَهْدِY': 'guide',
  'تَدْخُلُوا۟': 'entrez', 'تَدْخُلُوا': 'entrez',
  'قَبْلِكُم': 'avant vous', 'قَبْلِكُمْ': 'avant vous',
  'ٱلْبَأْسَآءُ': 'l\'adversité', 'ٱلْبَأْسَاءُ': 'l\'adversité',
  'وَكُفْرٌ': 'et ingratitude', 'وَكُفْرٌ۞': 'et ingratitude',
  'وَإِخْرَاجُ': 'et l\'expulsion',
  'وَٱلْفِتْنَةُ': 'et l\'épreuve', 'وَٱلْفِتْنَة': 'et l\'épreuve',
  'يَزَالُونَ': 'cessent', 'يُقَٰتِلُونَكُمْ': 'vous combattent',
  'يُقَتِلُونَك': 'vous combattent', 'يُقَتِلُونَكُمْ': 'vous combattent',
  'يَرُدُّوكُمْ': 'vous rendre',
  'ٱسْتَطَٰعُوا۟': 'ils peuvent', 'ٱسْتَطَعُوا': 'ils peuvent',
  'يَرْتَدِدْ': 'apostasie', 'دِينِهِ': 'sa religion', 'دِينِهِ.': 'sa religion',
  'فَيَمُتْ': 'puis meurt', 'حَبِطَتْ': 'sont vaines',
  'أَعْمَٰلُهُمْ': 'leurs œuvres', 'أَعْمَلُهُمْ': 'leurs œuvres',
  'إِثْمٌ': 'péché', 'وَإِثْمُهُمَآ': 'et leur péché', 'وَإِثْمُهُمَ': 'et leur péché',
  'نَّفْعِهِمَا': 'leur utilité', 'وَيَسْـَٔلُونَكَ': 'et ils te demandent',
  'وَيَسْـَٔلُو': 'et ils te demandent',
  'ٱلْعَفْوَ': 'le surplus',
  'تُخَالِطُوهُمْ': 'les côtoyez', 'تُخَالِطُوهُ': 'les côtoyez',
  'فَإِخْوَٰنُكُمْ': 'alors vos frères', 'فَإِخْوَنُكُ': 'alors vos frères',
  'ٱلْمُفْسِدَ': 'le corrupteur', 'ٱلْمُصْلِحِ': 'le réformateur',
  'لَأَعْنَتَكُمْ': 'vous aurait accablés', 'لَأَعْنَتَكُ': 'vous aurait accablés',
  'أَعْجَبَتْكُمْ': 'vous plaît', 'أَعْجَبَتْكُ': 'vous plaît',
  'تُنكِحُوا۟': 'donnez en mariage', 'تُنكِحُوا': 'donnez en mariage',
  'وَلَعَبْدٌ': 'et un serviteur',
  'أَعْجَبَكُمْ': 'vous plaît',
  'يَدْعُونَ': 'appellent', 'يَدْعُوا': 'appellent',
  'وَٱلْمَغْفِرَةِ': 'et le pardon', 'وَٱلْمَغْفِر': 'et le pardon',
  'وَيُبَيِّنُ': 'et expose clairement',
  'ءَايَٰتِهِ': 'Ses signes', 'ءَايَتِهِ.': 'Ses signes', 'ءَايَتِهِ': 'Ses signes',
  'لِلنَّاسِ': 'aux gens',
  'ٱلْمَحِيضِ': 'la menstruation',
  'تَقْرَبُوهُنَّ': 'les approchez', 'تَقْرَبُوهُن': 'les approchez',
  'يَطْهُرْنَ': 'se purifient',
  'تَطَهَّرْنَ': 'se sont purifiées',
  'فَأْتُوهُنَّ': 'alors allez à elles',
  'أَمَرَكُمُ': 'vous a ordonné',
  'وَيُحِبُّ': 'et aime',
  'يُؤَاخِذُكُم': 'vous tient rigueur', 'يُؤَاخِذُكُمُ': 'vous tient rigueur',
  'أَرْبَعَةِ': 'quatre',
  'فَآءُو': 'alors reviennent', 'فَاءُو': 'alors reviennent',
  'وَبُعُولَتُهُنَّ': 'et leurs époux', 'وَبُعُولَتُه': 'et leurs époux',
  'أَحَقُّ': 'ont plus de droit',
  'بِرَدِّهِنَّ': 'à les reprendre',
  'أَرَادُوا۟': 'veulent', 'أَرَادُوا': 'veulent',
  'إِصْلَٰحًا': 'réconciliation', 'إِصْلَحًا': 'réconciliation',
  'وَلِلرِّجَالِ': 'et pour les hommes',
  'دَرَجَةٌ': 'un degré',
  // More common words
  'ٱلضَّرَّآءُ': 'le malheur', 'ٱلضَّرَّاءُ': 'le malheur',
  'وَزُلْزِلُوا۟': 'et furent ébranlés', 'وَزُلْزِلُوا': 'et furent ébranlés',
  'نَصْرُ': 'secours',
  'قَرِيبٌ': 'proche',
  'يُنفِقُونَ': 'dépensent',
  'وَٱلْيَتَٰمَىٰ': 'et les orphelins',
  'مِّنْ': 'de', 'مِّنْهَا': "d'elle",
  'خَيْرٍ': 'bien',
  'مَثَلُ': 'exemple',
  'كَرْهٌ': 'détestable',
  'يَعْلَمُونَ': 'savent',
  'تَعْلَمُونَ': 'vous savez',
  'يَشَآءُ': 'veut',
  'صِرَٰطٍ': 'chemin', 'صِرَطٍ': 'chemin',
  'مُّسْتَقِيمٍ': 'droit',
  'تُفْلِحُونَ': 'réussissez',
  'لَعَلَّكُمْ': 'afin que vous',
  'تَتَّقُونَ': 'vous prémunissiez',
  'تَتَفَكَّرُونَ': 'réfléchissiez',
  'تَعْقِلُونَ': 'raisonniez',
  'ٱلظَّٰلِمِينَ': 'les injustes', 'ٱلظَّلِمِينَ': 'les injustes',
  'ٱلْكَٰفِرِينَ': 'les ingrats', 'ٱلْكَفِرِينَ': 'les ingrats',
  'ٱلْمُؤْمِنِينَ': 'les croyants',
  'ٱلْمُتَّقِينَ': 'les prémunissants',
  'قَالُوا۟': 'ont dit', 'قَالُوا': 'ont dit',
  'يَقُولُونَ': 'disent',
  'ءَامَنُوا۟': 'ont cru', 'ءَامَنُوا': 'ont cru',
  'كَفَرُوا۟': 'ont été ingrats', 'كَفَرُوا': 'ont été ingrats',
  'عَذَابٌ': 'rétribution',
  'أَلِيمٌ': 'douloureuse',
  'عَظِيمٌ': 'immense',
  'ٱللَّهَ': 'Dieu', 'ٱللَّهُ': 'Dieu', 'ٱللَّهِ': 'Dieu',
  'رَبِّ': 'Seigneur', 'رَبِّهِ': 'son Seigneur', 'رَبِّهِمْ': 'leur Seigneur',
  'رَبَّنَا': 'notre Seigneur', 'رَبُّكَ': 'ton Seigneur',
  'ٱلدُّنْيَا': 'la vie d\'ici-bas', 'ٱلْأَرْضِ': 'la terre',
  'ٱلسَّمَٰوَٰتِ': 'les cieux', 'ٱلنَّارِ': 'le Feu',
  'ٱلْجَنَّةِ': 'le Jardin', 'ٱلْجَنَّةَ': 'le Jardin',
  'ٱلنَّاسِ': 'les gens', 'ٱلنَّاسُ': 'les gens',
};

(async () => {
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let totalFixed = 0;
  let versesFixed = 0;
  let remaining = [];

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let fixedInVerse = 0;

    for (const s of segs) {
      if (s.fr && s.fr !== '' && s.fr !== '—') continue;

      const ar = (s.arabic || '');
      const arClean = ar.replace(/[۟۞ٰٓ\u0670]/g, '').trim();

      // Try exact match
      if (formToFr[ar]) {
        s.fr = formToFr[ar];
        fixedInVerse++;
        continue;
      }
      if (formToFr[arClean]) {
        s.fr = formToFr[arClean];
        fixedInVerse++;
        continue;
      }

      // Try without trailing punctuation
      const arNoPunct = arClean.replace(/[،.]/g, '').trim();
      if (formToFr[arNoPunct]) {
        s.fr = formToFr[arNoPunct];
        fixedInVerse++;
        continue;
      }

      remaining.push('V' + (va.verse_id-7) + ':p' + s.position + '=' + arClean.substring(0, 15));
    }

    if (fixedInVerse > 0) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
      totalFixed += fixedInVerse;
    }
  }

  console.log('=== RÉSULTAT ===');
  console.log('Versets corrigés:', versesFixed);
  console.log('Segments remplis:', totalFixed);
  console.log('Encore vides:', remaining.length);
  if (remaining.length > 0) {
    console.log(remaining.join(', '));
  }
})();
