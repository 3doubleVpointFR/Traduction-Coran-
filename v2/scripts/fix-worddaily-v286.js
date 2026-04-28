const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function insertWordDaily(analysis_id, sense, phrases) {
  for (const p of phrases) {
    const { data: existing } = await supabase.from('word_daily').select('id').eq('analysis_id', analysis_id).eq('french', p.fr);
    if (existing && existing.length > 0) { console.log(`  word_daily SKIP: ${p.fr.substring(0,40)}`); continue; }
    const { error } = await supabase.from('word_daily').insert({ analysis_id, sense, french: p.fr, arabic: p.ar, phon: p.phon });
    if (error) console.error(`  word_daily error [${analysis_id}]:`, error.message);
    else console.log(`  word_daily OK: ${p.fr.substring(0,40)}`);
  }
}

async function main() {
  // klf -> 1210
  await insertWordDaily(1210, 'Charge/Obligation', [
    { fr: 'Dieu n\'impose à personne une charge au-delà de ses forces.', ar: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', phon: 'lā yukallifu llāhu nafsan illā wusʿahā' },
    { fr: 'Cette tâche lui a été imposée malgré ses limites.', ar: 'كُلِّفَ هَذِهِ الْمَهَمَّةَ رَغْمَ مَحْدُودِيَّتِهِ', phon: 'kullifa hādhihi l-mahamma raghma maḥdūdiyyatihi' },
    { fr: 'L\'obligation religieuse doit rester proportionnée à la capacité.', ar: 'التَّكْلِيفُ الدِّينِيُّ يَجِبُ أَنْ يَكُونَ مُتَنَاسِبًا مَعَ الطَّاقَةِ', phon: 'al-taklīf al-dīnī yajib an yakūna mutanāsiban maʿa l-ṭāqa' }
  ]);

  // wse -> 1061
  await insertWordDaily(1061, 'Capacité/Amplitude', [
    { fr: 'Il a dépensé selon sa capacité, pas au-delà.', ar: 'أَنْفَقَ بِقَدْرِ وُسْعِهِ لَا أَكْثَرَ', phon: 'anfaqa bi-qadri wusʿihi lā akthar' },
    { fr: 'La loi islamique tient compte de l\'amplitude de chacun.', ar: 'الشَّرِيعَةُ تَأْخُذُ بِعَيْنِ الاِعْتِبَارِ وُسْعَ كُلِّ إِنْسَانٍ', phon: 'al-sharīʿa taʾkhudhu bi-ʿayn al-iʿtibār wusʿa kulli insān' },
    { fr: 'Il n\'est pas en son pouvoir de faire plus.', ar: 'لَيْسَ فِي وُسْعِهِ أَنْ يَفْعَلَ أَكْثَرَ', phon: 'laysa fī wusʿihi an yafʿala akthar' }
  ]);

  // kha -> 576
  await insertWordDaily(576, 'Erreur/Faute', [
    { fr: 'Il a commis une erreur par inadvertance, sans mauvaise intention.', ar: 'أَخْطَأَ دُونَ قَصْدٍ سَيِّئٍ', phon: 'akhṭaʾa dūna qaṣdin sayyiʾ' },
    { fr: 'L\'oubli et la faute involontaire sont pardonnés dans l\'islam.', ar: 'النِّسْيَانُ وَالْخَطَأُ غَيْرُ الْمَقْصُودِ مَعْفُوٌّ عَنْهُ فِي الإِسْلَامِ', phon: 'al-nisyān wa-l-khaṭaʾ ghayr al-maqṣūd maʿfuwwun ʿanhu fī l-islām' },
    { fr: 'Qui n\'a jamais fait d\'erreur dans sa vie ?', ar: 'مَنْ لَمْ يُخْطِئْ فِي حَيَاتِهِ قَطُّ؟', phon: 'man lam yukhṭiʾ fī ḥayātihi qaṭṭu?' }
  ]);

  // twq -> 965
  await insertWordDaily(965, 'Force/Capacité', [
    { fr: 'Cela dépasse mes forces, je ne peux pas le supporter.', ar: 'هَذَا فَوْقَ طَاقَتِي، لَا أَسْتَطِيعُ تَحَمُّلَهُ', phon: 'hādhā fawqa ṭāqatī, lā astaṭīʿu taḥammalahu' },
    { fr: 'Travaille autant que tu en as la force, pas plus.', ar: 'اعْمَلْ بِقَدْرِ طَاقَتِكَ، لَا تَتَجَاوَزْهَا', phon: 'iʿmal bi-qadri ṭāqatika, lā tatajāwazha' },
    { fr: 'La résistance humaine a ses limites infranchissables.', ar: 'لِلطَّاقَةِ الْبَشَرِيَّةِ حُدُودٌ لَا تُتَجَاوَزُ', phon: 'li-l-ṭāqa al-bashariyya ḥudūd lā tutajāwaz' }
  ]);

  // enw -> 1274
  await insertWordDaily(1274, 'Pardon/Indulgence', [
    { fr: 'Il lui a pardonné et a passé sur ses erreurs.', ar: 'عَفَا عَنْهُ وَتَجَاوَزَ عَنْ أَخْطَائِهِ', phon: 'ʿafā ʿanhu wa-tajāwaza ʿan akhṭāʾihi' },
    { fr: 'Dieu est Indulgent envers Ses serviteurs repentants.', ar: 'اللَّهُ عَفُوٌّ عَنْ عِبَادِهِ التَّائِبِينَ', phon: 'allāhu ʿafuwwun ʿan ʿibādihi l-tāʾibīna' }
  ]);

  // ant -> 446
  await insertWordDaily(446, 'Toi/Tu (pronom)', [
    { fr: 'Tu es notre Protecteur, secours-nous donc.', ar: 'أَنْتَ مَوْلَانَا فَانْصُرْنَا', phon: 'anta mawlānā fa-nṣurnā' },
    { fr: 'C\'est Toi seul que nous adorons et dont nous implorons l\'aide.', ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', phon: 'iyyāka naʿbudu wa-iyyāka nastaʿīnu' }
  ]);

  console.log('\nword_daily V286 DONE');
}
main().catch(console.error);
