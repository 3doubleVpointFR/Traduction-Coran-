const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Strip all diacritics (tashkeel) for fuzzy matching
function stripDiacritics(s) {
  return s.replace(/[\u064B-\u0652\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g, '');
}

// Dictionary: array of [pattern_texts[], french_translation]
// We'll match by stripping diacritics from both sides
const DICT = [
  // Divine names
  [['الله'], 'Dieu'],
  [['ربنا'], 'Seigneur !'],
  [['ربكم'], 'votre Seigneur'],
  [['ربه'], 'son Seigneur'],

  // Verbs of saying
  [['قل', 'قلي'], 'Dis:'],
  [['يقول', 'يقولا'], 'dit'],
  [['قالوا'], 'ils dirent'],
  [['قال'], 'il dit'],

  // Common nouns
  [['الناس', 'الناسي'], 'les gens'],
  [['الجنه', 'الجنة'], 'le Paradis'],
  [['النار', 'الناره'], 'le Feu'],
  [['الدنيا'], 'ici-bas'],
  [['الاخره', 'الاخرة'], "l'au-dela"],
  [['الكتاب', 'الكتابي', 'الكتابه'], 'le Livre'],
  [['النساء'], 'les femmes'],
  [['المطلقات', 'المطلقاتو'], 'les divorcees'],
  [['القتال'], 'le combat'],
  [['قتال', 'قتالن'], 'le combat'],
  [['سبيل', 'سبيلي'], 'sentier'],
  [['صراط', 'صراطن'], 'chemin'],
  [['دين', 'ديني'], 'religion'],
  [['نصر', 'نصرو', 'نصره'], 'secours'],
  [['الحق', 'الحقي'], 'la verite'],
  [['الموت', 'الموتي'], 'la mort'],
  [['اليوم', 'اليومي'], 'le Jour'],
  [['يوم', 'يومي'], 'le Jour'],
  [['الارض', 'الارضي'], 'la terre'],
  [['ارض', 'ارضي'], 'la terre'],
  [['سماوات', 'سماواتي'], 'les cieux'],
  [['خير', 'خيرن'], 'meilleur'],
  [['مال', 'مالن'], 'richesse'],
  [['اموال', 'اموالا'], 'richesse'],
  [['اولاد'], 'enfants'],
  [['ابناء'], 'enfants'],
  [['اعمال', 'اعمالو'], 'oeuvres'],
  [['ذكرا', 'ذكرن'], 'rappel'],
  [['ذكري'], 'rappel'],
  [['المعروف', 'المعروفي'], 'le convenable'],
  [['معروف', 'معروفن'], 'le convenable'],
  [['اجل', 'اجله'], 'delai'],
  [['مثل', 'مثلو'], 'exemple'],
  [['نعمت', 'نعمه'], 'bienfait'],
  [['رسالة', 'رساله'], 'messager'],
  [['رسول', 'رسولو'], 'messager'],

  // Divine attributes
  [['عليم', 'عليمن', 'عليمو'], 'Savant'],
  [['عزيز', 'عزيزن'], 'Puissant'],
  [['حكيم', 'حكيمن'], 'Sage'],
  [['غفور', 'غفورن'], 'Absoluteur'],
  [['حليم', 'حليمن'], 'Longanime'],
  [['رحيم', 'رحيمن'], 'Source de grace'],
  [['سميع', 'سميعن'], 'Entendant'],
  [['بصير', 'بصيرن'], 'Clairvoyant'],
  [['قريب', 'قريبن'], 'proche'],
  [['كبير', 'كبيرن'], 'grand'],
  [['اكبر', 'اكبرو'], 'plus grand'],
  [['اشد', 'اشده'], 'plus intense'],

  // Common verbs
  [['يعلم', 'يعلمو'], 'sait'],
  [['اعلموا', 'فاعلموا'], 'sachez'],
  [['امنوا'], 'ont cru'],
  [['يومنوا', 'يومنن'], 'croient'],
  [['مومن', 'مومنن'], 'croyant'],
  [['مومنه', 'مومنة'], 'croyante'],
  [['يحب', 'يحبو'], 'aime'],
  [['يشاء', 'شاء'], 'veut'],
  [['انزل'], 'a fait descendre'],
  [['يبين', 'يبينو'], 'explique'],
  [['يدعون'], 'invitent'],
  [['يدعو'], 'invite'],
  [['خالدون'], 'eternellement'],
  [['يقولون'], 'disent'],
  [['يتذكرون'], 'se souviennent'],
  [['تتفكرون'], 'meditent'],
  [['مشرك', 'مشركن'], 'celui qui associe'],
  [['مشركه', 'مشركة'], 'celle qui associe'],
  [['المشركات', 'المشركاتي'], 'celles qui associent'],
  [['المشركين'], 'ceux qui associent'],
  [['كافر', 'كافرن'], 'celui qui recouvre'],
  [['اصحاب', 'اصحابو'], 'les compagnons'],
  [['بعد', 'بعدي'], 'apres'],
  [['قبل', 'قبلي'], 'avant'],
  [['التوابين'], 'ceux qui se repentent'],
  [['المتطهرين'], 'ceux qui se purifient'],
  [['اياته', 'اياتهي'], 'Ses versets'],
  [['الايات', 'الاياتي'], 'les versets'],
  [['مومنين'], 'croyants'],
];

// Build a lookup map: normalized_arabic -> french (populated after ORIGINAL_ARABIC_DICT below)
const lookupMap = new Map();
for (const [patterns, fr] of DICT) {
  for (const p of patterns) {
    lookupMap.set(p, fr);
  }
}

// Also build from original Arabic with diacritics
const ORIGINAL_ARABIC_DICT = [
  ['ٱللَّهَ', 'Dieu'], ['ٱللَّهُ', 'Dieu'], ['ٱللَّهِ', 'Dieu'], ['ٱللَّهٰ', 'Dieu'], ['لِلَّهِ', 'Dieu'],
  ['رَبَّنَا', 'Seigneur !'], ['رَبِّكُم', 'votre Seigneur'], ['رَبِّهِ', 'son Seigneur'],
  ['قُلْ', 'Dis:'], ['قُلِ', 'Dis:'],
  ['يَقُولُ', 'dit'], ['يَقُولَ', 'dit'],
  ['قَالُوا', 'ils dirent'], ['قَالَ', 'il dit'],
  ['ٱلنَّاسِ', 'les gens'], ['ٱلنَّاسُ', 'les gens'],
  ['ٱلْجَنَّةَ', 'le Paradis'], ['ٱلْجَنَّةِ', 'le Paradis'],
  ['ٱلنَّارِ', 'le Feu'], ['ٱلنَّارَ', 'le Feu'],
  ['ٱلدُّنْيَا', 'ici-bas'],
  ['ٱلْءَاخِرَةِ', "l'au-dela"], ['ٱلْأَخِرَةِ', "l'au-dela"],
  ['ٱلْكِتَٰبَ', 'le Livre'], ['ٱلْكِتَٰبِ', 'le Livre'],
  ['ٱلنِّسَآءَ', 'les femmes'], ['ٱلنِّسَآءِ', 'les femmes'],
  ['ٱلْمُطَلَّقَٰتُ', 'les divorcees'],
  ['ٱلْقِتَالَ', 'le combat'], ['قِتَالٍ', 'le combat'],
  ['سَبِيلِ', 'sentier'], ['سَبِيلَ', 'sentier'],
  ['صِرَٰطٍ', 'chemin'],
  ['دِينِ', 'religion'], ['دِينَ', 'religion'],
  ['نَصْرُ', 'secours'], ['نَصْرَ', 'secours'],
  ['ٱلْحَقِّ', 'la verite'], ['ٱلْحَقُّ', 'la verite'],
  ['ٱلْمَوْتِ', 'la mort'], ['ٱلْمَوْتُ', 'la mort'],
  ['يَوْمِ', 'le Jour'], ['ٱلْيَوْمِ', 'le Jour'], ['يَوْمَ', 'le Jour'],
  ['أَرْضِ', 'la terre'], ['ٱلْأَرْضِ', 'la terre'], ['ٱلْأَرْضَ', 'la terre'],
  ['سَمَٰوَٰتِ', 'les cieux'], ['ٱلسَّمَٰوَٰتِ', 'les cieux'],
  ['خَيْرٌ', 'meilleur'], ['خَيْرًا', 'meilleur'], ['خَيْرٍ', 'meilleur'],
  ['مَالٍ', 'richesse'], ['أَمْوَٰلَ', 'richesse'], ['أَمْوَٰلِ', 'richesse'], ['أَمْوَٰلُ', 'richesse'], ['أَمْوَٰلَكُم', 'richesse'],
  ['أَوْلَٰدَ', 'enfants'], ['أَبْنَآءَ', 'enfants'], ['أَوْلَٰدِ', 'enfants'], ['أَوْلَٰدَكُم', 'enfants'],
  ['أَعْمَٰلُ', 'oeuvres'], ['أَعْمَٰلَ', 'oeuvres'],
  ['ذِكْرًا', 'rappel'], ['ذِكْرِ', 'rappel'],
  ['مَعْرُوفٍ', 'le convenable'], ['ٱلْمَعْرُوفِ', 'le convenable'],
  ['أَجَلَ', 'delai'], ['أَجَلِ', 'delai'], ['أَجَلٍ', 'delai'],
  ['مَثَلُ', 'exemple'], ['مَثَلَ', 'exemple'],
  ['نِعْمَتَ', 'bienfait'], ['نِعْمَةَ', 'bienfait'],
  ['رِسَالَةَ', 'messager'], ['رَسُولُ', 'messager'], ['رَسُولِ', 'messager'], ['رَسُولَ', 'messager'],
  ['عَلِيمٌ', 'Savant'], ['عَلِيمُ', 'Savant'], ['عَلِيمًا', 'Savant'],
  ['عَزِيزٌ', 'Puissant'],
  ['حَكِيمٌ', 'Sage'], ['حَكِيمًا', 'Sage'],
  ['غَفُورٌ', 'Absoluteur'], ['غَفُورًا', 'Absoluteur'],
  ['حَلِيمٌ', 'Longanime'],
  ['رَّحِيمٌ', 'Source de grace'], ['رَحِيمٌ', 'Source de grace'], ['رَحِيمًا', 'Source de grace'],
  ['سَمِيعٌ', 'Entendant'],
  ['بَصِيرٌ', 'Clairvoyant'],
  ['قَرِيبٌ', 'proche'],
  ['كَبِيرٌ', 'grand'],
  ['أَكْبَرُ', 'plus grand'],
  ['أَشَدَّ', 'plus intense'], ['أَشَدُّ', 'plus intense'],
  ['يَعْلَمُ', 'sait'], ['يَعْلَمَ', 'sait'],
  ['ٱعْلَمُوا', 'sachez'], ['فَٱعْلَمُوا', 'sachez'],
  ['ءَامَنُوا', 'ont cru'],
  ['يُؤْمِنُوا', 'croient'], ['يُؤْمِنَّ', 'croient'],
  ['مُؤْمِنٌ', 'croyant'], ['مُؤْمِنَةٌ', 'croyante'],
  ['يُحِبُّ', 'aime'],
  ['يَشَآءُ', 'veut'], ['شَآءَ', 'a voulu'],
  ['أَنزَلَ', 'a fait descendre'],
  ['يُبَيِّنُ', 'explique'],
  ['يَدْعُونَ', 'invitent'], ['يَدْعُو', 'invite'],
  ['خَٰلِدُونَ', 'eternellement'], ['خَٰلِدِينَ', 'eternellement'],
  ['يَقُولُونَ', 'disent'],
  ['يَتَذَكَّرُونَ', 'se souviennent'],
  ['تَتَفَكَّرُونَ', 'meditent'],
  ['مُشْرِكٍ', 'celui qui associe'], ['مُشْرِكَةٍ', 'celle qui associe'],
  ['ٱلْمُشْرِكَٰتِ', 'celles qui associent'], ['ٱلْمُشْرِكِينَ', 'ceux qui associent'],
  ['كَافِرٌ', 'celui qui recouvre'], ['كَٰفِرٌ', 'celui qui recouvre'],
  ['أَصْحَٰبُ', 'les compagnons'], ['أَصْحَٰبِ', 'les compagnons'],
  ['بَعْدِ', 'apres'], ['بَعْدَ', 'apres'],
  ['قَبْلِ', 'avant'], ['قَبْلَ', 'avant'],
  ['ٱلتَّوَّٰبِينَ', 'ceux qui se repentent'],
  ['ٱلْمُتَطَهِّرِينَ', 'ceux qui se purifient'],
  ['آيَٰتِهِ', 'Ses versets'], ['ءَايَٰتِهِ', 'Ses versets'],
  ['ٱلْءَايَٰتِ', 'les versets'],
  ['مُؤْمِنِينَ', 'croyants'],

  // Prefixed forms (wa-, fa-, bi-, li-, etc.)
  ['وَٱللَّهُ', 'et Dieu'], ['وَٱللَّهِ', 'et Dieu'], ['وَٱللَّهَ', 'et Dieu'],
  ['فَٱللَّهُ', 'alors Dieu'],
  ['بِٱللَّهِ', 'en Dieu'],
  ['لِلَّهِ', 'a Dieu'],
  ['وَٱلْيَوْمِ', 'et le Jour'],
  ['بِٱلْمَعْرُوفِ', 'avec le convenable'],
  ['فِى', 'dans'],
  ['فِيهَا', 'en elle'],
  ['فِيهِ', 'en lui'],
  ['إِلَىٰ', 'vers'],
  ['عَلَىٰ', 'sur'],
  ['عَلَيْكُم', 'sur vous'],
  ['عَلَيْهِ', 'sur lui'],
  ['عَلَيْهِم', 'sur eux'],
  ['عَلَيْهَا', 'sur elle'],

  // Pronouns & demonstratives
  ['هُوَ', 'Lui'],
  ['هُمْ', 'eux'],
  ['هُمُ', 'eux'],
  ['هِىَ', 'elle'],
  ['أَنتُمْ', 'vous'],
  ['ذَٰلِكَ', 'cela'],
  ['ذَٰلِكُم', 'cela'],
  ['تِلْكَ', 'voila'],
  ['هَٰذَا', 'ceci'],
  ['هَٰٓؤُلَآءِ', 'ceux-ci'],
  ['ٱلَّذِينَ', 'ceux qui'],
  ['ٱلَّذِى', 'celui qui'],
  ['ٱلَّتِى', 'celle qui'],
  ['مَن', 'qui'],
  ['مَّن', 'qui'],
  ['مَا', 'ce que'],
  ['مِمَّا', 'de ce que'],

  // Particles
  ['إِنَّ', 'certes'],
  ['إِن', 'si'],
  ['أَنَّ', 'que'],
  ['أَن', 'que'],
  ['لَا', 'ne...pas'],
  ['لَّا', 'ne...pas'],
  ['وَلَا', 'et ne...pas'],
  ['لَمْ', 'ne...pas'],
  ['إِلَّا', 'sauf'],
  ['كُلُّ', 'tout'],
  ['كُلَّ', 'tout'],
  ['ثُمَّ', 'puis'],
  ['إِذَا', 'lorsque'],
  ['إِذْ', 'quand'],
  ['حَتَّىٰ', 'jusqu\'a'],
  ['كَمَا', 'comme'],
  ['بَلْ', 'mais plutot'],
  ['أَمْ', 'ou bien'],
  ['أَوْ', 'ou'],
  ['لَنَا', 'a nous'],
  ['لَهُ', 'a lui'],
  ['لَهُم', 'a eux'],
  ['لَكُمْ', 'a vous'],
  ['لَكُم', 'a vous'],
  ['بِهِ', 'par lui'],
  ['بِهَا', 'par elle'],
  ['بِهِمْ', 'par eux'],
  ['مِنْ', 'de'],
  ['مِّنْ', 'de'],
  ['مِّن', 'de'],
  ['مِنَ', 'de'],
  ['مِنْهَا', 'd\'elle'],
  ['مِنْهُم', 'd\'eux'],
  ['عَنْ', 'de'],
  ['عَنْهَا', 'd\'elle'],
  ['كَمْ', 'combien'],

  // More common words in these verses
  ['جُنَاحَ', 'grief'],
  ['حُدُودَ', 'limites'],
  ['حُدُودُ', 'limites'],
  ['ٱلْبَيِّنَٰتُ', 'les preuves'],
  ['ٱلْبَيِّنَٰتِ', 'les preuves'],
  ['شَيْـًٔا', 'quelque chose'],
  ['شَىْءٍ', 'chose'],
  ['شَىْءٌ', 'chose'],
  ['أَشْهُرٍ', 'mois'],
  ['إِبْرَٰهِـمُ', 'Abraham'],
  ['يُقِيمَا', 'observent'],
  ['أَلَّا', 'de ne pas'],
  ['بِإِذْنِهِ', 'par Sa permission'],
  ['ٱلصَّلَوٰةَ', 'la priere'],
  ['ٱلصَّلَوٰةِ', 'la priere'],
  ['ٱلزَّكَوٰةَ', 'la purification'],
  ['عِندَ', 'aupres de'],
  ['رَبِّ', 'Seigneur'],
  ['رَبَّ', 'Seigneur'],
  ['رَبُّ', 'Seigneur'],
  ['رَبِّى', 'mon Seigneur'],
  ['رَبَّكَ', 'ton Seigneur'],
  ['بَيْنَ', 'entre'],
  ['بَيْنَهُم', 'entre eux'],
  ['غَيْرَ', 'autre que'],
  ['كَانَ', 'etait'],
  ['كَانُوا', 'etaient'],
  ['يَكُنْ', 'est'],
  ['جَعَلَ', 'a fait'],
  ['ءَاتَىٰ', 'a donne'],
  ['أُوتُوا', 'on a donne'],
  ['أُولَٰٓئِكَ', 'ceux-la'],
  ['فَإِنَّ', 'certes'],
  ['فَإِن', 'alors si'],
  ['وَإِن', 'et si'],
  ['وَإِذَا', 'et lorsque'],
  ['وَمَا', 'et ce que'],
  ['وَمِنَ', 'et parmi'],
  ['وَمِن', 'et parmi'],
  ['فَمَن', 'alors qui'],
  ['فَمَا', 'alors quoi'],
  ['فَلَا', 'alors ne...pas'],
  ['وَلَوْ', 'et meme si'],
  ['كَذَٰلِكَ', 'ainsi'],
  ['بَعْضَ', 'une partie'],
  ['بَعْضُ', 'une partie'],
  ['بَعْضَهُم', 'certains d\'entre eux'],
  ['قَدْ', 'certes'],
  ['وَقَدْ', 'et certes'],

  // More common Quranic words
  ['شَدِيدُ', 'severe'],
  ['بِٱلْحَقِّ', 'avec la verite'],
  ['مُّسْتَقِيمٍ', 'droit'],
  ['مُسْتَقِيمٍ', 'droit'],
  ['مَاذَا', 'quoi'],
  ['شَرٌّ', 'mal'],
  ['شَرًّا', 'mal'],
  ['ٱلْقَتْلِ', 'le meurtre'],
  ['دِينِكُمْ', 'votre religion'],
  ['دِينِهِ', 'sa religion'],
  ['وَٱلْءَاخِرَةِ', "et l'au-dela"],
  ['وَٱلْأَرْضِ', 'et la terre'],
  ['ٱلسَّمَٰوَٰتِ', 'les cieux'],
  ['وَٱلْأَرْضَ', 'et la terre'],
  ['ٱلْحَىُّ', 'le Vivant'],
  ['ٱلْقَيُّومُ', "l'Immuable"],
  ['ٱلْعَلِىُّ', 'le Tres-Haut'],
  ['ٱلْعَظِيمُ', "l'Immense"],
  ['عَظِيمٌ', 'immense'],
  ['وَٱسِعٌ', 'large'],
  ['غَنِىٌّ', 'riche'],
  ['شَكُورٌ', 'reconnaissant'],
  ['حَفِيظٌ', 'gardien'],
  ['قَوِىٌّ', 'fort'],
  ['رَءُوفٌ', 'bienveillant'],
  ['وَدُودٌ', 'aimant'],
  ['عَلِيمٌۢ', 'Savant'],
  ['لَهُمْ', 'a eux'],
  ['لَهُمُ', 'a eux'],
  ['لَهَا', 'a elle'],
  ['مِنْهُمْ', "d'eux"],
  ['مِنْكُمْ', 'de vous'],
  ['مِنْهَا', "d'elle"],
  ['فِيهِمْ', 'parmi eux'],
  ['عَنْهُمْ', "d'eux"],
  ['عَنْكُمْ', 'de vous'],
  ['عَلَيْهِمْ', 'sur eux'],
  ['إِلَيْهِمْ', 'vers eux'],
  ['إِلَيْكُمْ', 'vers vous'],
  ['وَهُمْ', 'et eux'],
  ['بِكُمْ', 'par vous'],
  ['أَحَدٌ', 'un/quiconque'],
  ['أَحَدًا', 'quiconque'],
  ['كَسَبَتْ', 'a acquis'],
  ['كَسَبُوا', 'ont acquis'],
  ['وَأَنتُمْ', 'et vous'],
  ['عَذَابٌ', 'chatiment'],
  ['عَذَابَ', 'chatiment'],
  ['ٱلْعَذَابِ', 'le chatiment'],
  ['ٱلْعَذَابَ', 'le chatiment'],
  ['أَلِيمٌ', 'douloureux'],
  ['شَفَٰعَةٌ', 'intercession'],
  ['خِلَٰفَةً', 'lieutenance'],
  ['خَلِيفَةً', 'lieutenant'],
  ['وَلِىٌّ', 'allie'],
  ['أَوْلِيَآءَ', 'allies'],
  ['كُرْسِيُّهُ', 'Son Trone'],
  ['عِلْمِهِ', 'Sa science'],
  ['يَسْـَٔلُونَكَ', "t'interrogent"],
  ['يَسْـَٔلُكَ', "t'interroge"],
  ['قُلُوبِ', 'coeurs'],
  ['قُلُوبِهِمْ', 'leurs coeurs'],
  ['قُلُوبُكُمْ', 'vos coeurs'],
  ['يَغْفِرُ', 'pardonne'],
  ['يُعَذِّبُ', 'chatier'],
  ['يُضِلُّ', 'egare'],
  ['يَهْدِى', 'guide'],
  ['ٱلْهُدَىٰ', 'la guidance'],
  ['هُدًى', 'guidance'],
  ['ٱلضَّلَٰلَةُ', "l'egarement"],
  ['ٱلضَّلَٰلَةَ', "l'egarement"],
  ['عَلَيْهَا', 'sur elle'],
  ['لَكَ', 'a toi'],
  ['مِنْكَ', 'de toi'],
  ['فِيكُمْ', 'parmi vous'],
  ['بَيْنَكُمْ', 'entre vous'],
  ['بَيْنَهُمَا', 'entre eux deux'],

  // Corrupted/special character forms
  ['ٱلَّذِY', 'celui qui'],  // corrupted ى
  ['عَلَY', 'sur'],          // corrupted ى

  // More verbs & words from remaining list
  ['يَشَآءُ', 'veut'],
  ['شَآءَ', 'a voulu'],
  ['ٱلنِّسَآءَ', 'les femmes'],
  ['ٱلنِّسَآءِ', 'les femmes'],
  ['إِبْرَٰهِـمُ', 'Abraham'],
  ['إِبْرَٰهِ.مُ', 'Abraham'],  // corrupted form
  ['إِبْرَٰهِۧمُ', 'Abraham'],
  ['جَآءَتْهُمُ', 'leur est venu'],
  ['جَآءَتْكُمُ', 'vous est venu'],
  ['بِإِذْنِهِ', 'par Sa permission'],
  ['بِإِذْنِهِۦ', 'par Sa permission'],
  ['بِإِذْنِهِ.', 'par Sa permission'],  // corrupted
  ['ٱلْءَاخِرِ', "le Dernier"],
  ['ٱلظَّٰلِمُونَ', 'les injustes'],
  ['ٱلظَّٰلِمِينَ', 'les injustes'],
  ['أَجَلَهُنَّ', 'leur delai'],
  ['وَٱتَّقُوا۟', 'et craignez'],
  ['وَٱتَّقُوا', 'et craignez'],
  ['ٱتَّقُوا', 'craignez'],
  ['وَٱعْلَمُوٓا۟', 'et sachez'],
  ['وَٱعْلَمُوا', 'et sachez'],
  ['تَعْلَمُونَ', 'vous savez'],
  ['تَعْمَلُونَ', 'vous faites'],
  ['وَيَذَرُونَ', 'et laissent'],
  ['أَنفُسِهِنَّ', 'elles-memes'],
  ['أَنفُسِكُمْ', 'vous-memes'],
  ['أَنفُسِهِمْ', 'eux-memes'],
  ['فَرَضْتُمْ', 'vous avez fixe'],
  ['تَرَ', 'as-tu vu'],
  ['كُتِبَ', 'a ete prescrit'],
  ['قَلِيلًا', 'peu'],
  ['مِا۟ئَةَ', 'cent'],
  ['عَامٍ', 'ans'],
  ['عَامًا', 'ans'],
  ['وَٱنظُرْ', 'et regarde'],
  ['كَيْفَ', 'comment'],
  ['فَٱذْكُرُوا۟', 'alors invoquez'],
  ['فَٱذْكُرُوا', 'alors invoquez'],
  ['ءَابَآءَكُمْ', 'vos peres'],
  ['خَلَٰقٍ', 'part'],
  ['خَلَقَ', 'a cree'],
  ['زَلَلْتُم', 'vous trebuchez'],
  ['فَٱعْلَمُوٓا۟', 'alors sachez'],
  ['قَلِيلٌ', 'peu'],
  ['كَثِيرًا', 'beaucoup'],
  ['لَعَلَّكُمْ', 'peut-etre'],
  ['لَعَلَّهُمْ', 'peut-etre'],
  ['يَٰٓأَيُّهَا', 'O!'],
  ['وَهُوَ', 'et Lui'],
  ['وَهُمْ', 'et eux'],
  ['فَهُوَ', 'alors il'],
  ['وَكَانَ', 'et etait'],
  ['يَكُونَ', 'soit'],
  ['إِلَيْهِ', 'vers Lui'],
  ['إِلَيْكُم', 'vers vous'],
  ['مَعَ', 'avec'],
  ['مَعَكُم', 'avec vous'],
  ['مَعَهُم', 'avec eux'],
  ['عِندَهُ', 'aupres de Lui'],
  ['كِتَٰبِ', 'Livre'],
  ['كِتَٰبَ', 'Livre'],
  ['ٱلصَّدَقَٰتِ', 'les aumones'],
  ['ٱلرِّبَوٰا۟', "l'usure"],
  ['ٱلرِّبَٰوا۟', "l'usure"],
  ['دَيْنٍ', 'dette'],
  ['دَيْنِ', 'dette'],
  ['نَفْسٌ', 'ame'],
  ['نَفْسٍ', 'ame'],
  ['نَفْسًا', 'ame'],
  ['يُنفِقُونَ', 'depensent'],
  ['أَنفِقُوا', 'depensez'],
  ['يُنفِقُ', 'depense'],
  ['ٱلْيَتَٰمَىٰ', 'les orphelins'],
  ['وَيُنشِزُهَا', 'et la ressuscite'],
  ['يُحْىِ', 'fait vivre'],
  ['يُمِيتُ', 'fait mourir'],
  ['ٱلْمَوْتَىٰ', 'les morts'],
  ['وَمَا', 'et ce que'],
  ['بِمَا', 'par ce que'],
  ['لِمَا', 'pour ce que'],
  ['فِيمَا', 'dans ce que'],
  ['كُفْرٌ', 'recouvrement'],
  ['إِيمَٰنٌ', 'foi'],
  ['شُهَدَآءَ', 'temoins'],
  ['شَهِيدٌ', 'temoin'],
  ['كَاتِبٌ', 'scribe'],
  ['حِسَابَ', 'compte'],
  ['رِزْقًا', 'subsistance'],
  ['وَلَكِنَّ', 'mais'],
  ['وَلَٰكِنَّ', 'mais'],
  ['لَٰكِنَّ', 'mais'],
  ['هَلْ', 'est-ce que'],
  ['كَرْهٌ', 'repugnance'],
  ['كُرْهًا', 'repugnance'],
  ['فِتْنَةٌ', 'epreuve'],
  ['ٱلْفِتْنَةُ', "l'epreuve"],

];

// Build exact-match map for original arabic
const exactMap = new Map();
for (const [ar, fr] of ORIGINAL_ARABIC_DICT) {
  exactMap.set(ar, fr);
  // Also add normalized version to lookupMap
  const norm = normalize(ar);
  if (!lookupMap.has(norm)) lookupMap.set(norm, fr);
}

// Strip Quranic ornaments (pausal marks, sajda, etc.)
function stripOrnaments(s) {
  return s.replace(/[۟۠ۖۗۘۙۚۛۜ۞ۣ۩\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0615-\u061A]/g, '');
}

function normalize(arabicText) {
  let t = stripOrnaments(arabicText.trim());
  t = stripDiacritics(t);
  // Normalize madda above (U+0653) on alef -> just alef
  t = t.replace(/\u0653/g, '');
  t = t.replace(/ٱ/g, 'ا');
  // Normalize alef variants
  t = t.replace(/[أإآٲ]/g, 'ا');
  // Normalize teh marbuta -> heh
  t = t.replace(/ة/g, 'ه');
  // Normalize alef maqsura -> yeh
  t = t.replace(/ى/g, 'ي');
  // Remove tatweel
  t = t.replace(/ـ/g, '');
  // Remove any remaining combining marks
  t = t.replace(/[\u0654\u0655\u0656\u0657\u0658\u0659\u065A\u065B\u065C\u065D\u065E\u065F]/g, '');
  return t;
}

function findTranslation(arabicText) {
  if (!arabicText) return null;
  const text = stripOrnaments(arabicText.trim());

  // 1. Exact match with diacritics
  if (exactMap.has(text)) return exactMap.get(text);

  // 2. Normalize and match
  const normalized = normalize(text);
  if (lookupMap.has(normalized)) return lookupMap.get(normalized);

  return null;
}

(async () => {
  console.log('Fetching verse_analyses for verse_id 207-293...');

  const {data: allVA, error} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 207).lte('verse_id', 293)
    .order('verse_id');

  if (error) { console.error('Fetch error:', error); process.exit(1); }
  console.log(`Found ${allVA.length} verse_analyses rows`);

  let totalEmpty = 0;
  let totalFilled = 0;
  let totalRemaining = 0;
  let versesUpdated = 0;
  const fillLog = [];

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let changed = false;

    for (const seg of segs) {
      const fr = seg.fr;
      const isEmpty = !fr || fr === '—' || fr === '' || fr === '–';

      if (!isEmpty) continue;
      totalEmpty++;

      const ar = seg.arabic;
      if (!ar) { totalRemaining++; continue; }

      // Skip ornament-only segments
      const stripped = stripOrnaments(ar.trim());
      if (!stripped || /^[\s\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED۟۠ۖۗۘۙۚۛۜ۞ۣ۩]*$/.test(stripped)) {
        // Mark with special value so it's not counted as empty
        seg.fr = '~';
        changed = true;
        totalFilled++;
        fillLog.push(`  v${va.verse_id} pos${seg.position}: "${ar}" → [ornament, skipped]`);
        continue;
      }

      const translation = findTranslation(ar);
      if (translation) {
        seg.fr = translation;
        changed = true;
        totalFilled++;
        fillLog.push(`  v${va.verse_id} pos${seg.position}: "${ar}" → "${translation}"`);
      } else {
        totalRemaining++;
      }
    }

    if (changed) {
      versesUpdated++;
      const {error: upErr} = await db.from('verse_analyses')
        .update({ segments: segs })
        .eq('id', va.id);
      if (upErr) console.error(`Update error for va ${va.id}:`, upErr);
    }
  }

  console.log('\n=== FILL SUMMARY ===');
  console.log(`Total empty segments found: ${totalEmpty}`);
  console.log(`Filled: ${totalFilled}`);
  console.log(`Remaining empty: ${totalRemaining}`);
  console.log(`Verses updated: ${versesUpdated}`);

  if (fillLog.length <= 100) {
    console.log('\nDetail:');
    for (const l of fillLog) console.log(l);
  } else {
    console.log(`\nFirst 50 fills:`);
    for (let i = 0; i < 50; i++) console.log(fillLog[i]);
    console.log(`... and ${fillLog.length - 50} more`);
  }

  // Count remaining empty after update
  console.log('\n--- Verifying remaining empty segments ---');
  const {data: check} = await db.from('verse_analyses')
    .select('verse_id, segments')
    .gte('verse_id', 207).lte('verse_id', 293)
    .order('verse_id');

  let remainCheck = 0;
  const remainingWords = new Map(); // ar -> count
  for (const va of check) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs) continue;
    for (const s of segs) {
      const fr = s.fr;
      if (!fr || fr === '—' || fr === '' || fr === '–') {
        remainCheck++;
        const ar = s.arabic || '(no arabic)';
        remainingWords.set(ar, (remainingWords.get(ar) || 0) + 1);
      }
    }
  }
  console.log(`Verified remaining empty: ${remainCheck}`);

  // Show top remaining words
  const sorted = [...remainingWords.entries()].sort((a,b) => b[1] - a[1]);
  console.log(`\nTop 30 remaining unfilled Arabic words:`);
  for (let i = 0; i < Math.min(30, sorted.length); i++) {
    console.log(`  "${sorted[i][0]}" x${sorted[i][1]}`);
  }

  process.exit(0);
})();
