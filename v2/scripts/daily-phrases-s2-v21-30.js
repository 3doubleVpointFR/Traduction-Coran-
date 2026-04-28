const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Daily phrases for roots used in S2:21-30 that don't have phrases yet
// Format: { analysis_id, sense, arabic, phon, french }
const phrases = [
  // bny (id=386) — Construction/Édification — "construire"
  { analysis_id: 386, sense: 'construire', arabic: 'بَنَى بَيْتًا', phon: 'banā baytan', french: 'Il a construit une maison' },
  { analysis_id: 386, sense: 'construire', arabic: 'نَبْنِي مُسْتَقْبَلَنَا', phon: 'nabnī mustaqbalanā', french: 'Nous construisons notre avenir' },
  { analysis_id: 386, sense: 'construire', arabic: 'اَلْبِنَاءُ مَتِينٌ', phon: 'al-binā\'u matīn', french: 'La construction est solide' },

  // mwh (id=1885) — Eau/Liquide — "eau"
  { analysis_id: 1885, sense: 'eau', arabic: 'أُرِيدُ مَاءً', phon: 'urīdu mā\'an', french: 'Je veux de l\'eau' },
  { analysis_id: 1885, sense: 'eau', arabic: 'اَلْمَاءُ بَارِدٌ', phon: 'al-mā\'u bārid', french: 'L\'eau est froide' },
  { analysis_id: 1885, sense: 'eau', arabic: 'اِشْرَبِ الْمَاءَ', phon: 'ishrab il-mā\'a', french: 'Bois de l\'eau' },

  // xrj (id=388) — Sortie/Extraction — "faire sortir"
  { analysis_id: 388, sense: 'faire sortir', arabic: 'خَرَجَ مِنَ الْبَيْتِ', phon: 'kharaja min al-bayt', french: 'Il est sorti de la maison' },
  { analysis_id: 388, sense: 'faire sortir', arabic: 'أَخْرِجْ مَفَاتِيحَكَ', phon: 'akhrij mafātīḥak', french: 'Sors tes clés' },
  { analysis_id: 388, sense: 'faire sortir', arabic: 'اَلْمَخْرَجُ هُنَا', phon: 'al-makhraj hunā', french: 'La sortie est ici' },

  // ndd (id=391) — Rivalité/Égalité — "rival"
  { analysis_id: 391, sense: 'rival', arabic: 'لَيْسَ لَهُ نِدٌّ', phon: 'laysa lahu nidd', french: 'Il n\'a pas de rival' },
  { analysis_id: 391, sense: 'rival', arabic: 'هُمْ أَنْدَادٌ', phon: 'hum andād', french: 'Ils sont des rivaux' },
  { analysis_id: 391, sense: 'rival', arabic: 'لَا نِدَّ لَكَ', phon: 'lā nidda lak', french: 'Personne ne te rivalise' },

  // aty (id=379) — Venue/Arrivée — "apporter"
  { analysis_id: 379, sense: 'apporter', arabic: 'آتِنِي الْكِتَابَ', phon: 'ātinī al-kitāb', french: 'Apporte-moi le livre' },
  { analysis_id: 379, sense: 'apporter', arabic: 'أَتَى الضَّيْفُ', phon: 'atā al-ḍayf', french: 'L\'invité est venu' },
  { analysis_id: 379, sense: 'apporter', arabic: 'يَأْتِي كُلَّ يَوْمٍ', phon: 'ya\'tī kulla yawm', french: 'Il vient chaque jour' },

  // swr (id=380) — chapitre — "chapitre"
  { analysis_id: 380, sense: 'chapitre', arabic: 'اِقْرَأْ سُورَةً', phon: 'iqra\' sūratan', french: 'Lis un chapitre' },
  { analysis_id: 380, sense: 'chapitre', arabic: 'هَذِهِ سُورَةٌ طَوِيلَةٌ', phon: 'hādhihi sūratun ṭawīla', french: 'C\'est un long chapitre' },
  { analysis_id: 380, sense: 'chapitre', arabic: 'كَمْ سُورَةً فِي الْقُرْآنِ', phon: 'kam sūratan fī al-qur\'ān', french: 'Combien de chapitres dans le Coran ?' },

  // dew (id=381) — Appel/Invocation — "appeler"
  { analysis_id: 381, sense: 'appeler', arabic: 'اُدْعُ صَدِيقَكَ', phon: 'ud\'u ṣadīqak', french: 'Appelle ton ami' },
  { analysis_id: 381, sense: 'appeler', arabic: 'دَعَوْتُهُ لِلْعَشَاءِ', phon: 'da\'awtuhu lil-\'ashā\'', french: 'Je l\'ai invité au dîner' },
  { analysis_id: 381, sense: 'appeler', arabic: 'اَلدُّعَاءُ مُسْتَجَابٌ', phon: 'al-du\'ā\'u mustajāb', french: 'L\'appel est exaucé' },

  // dwn (id=383) — Infériorité/En-dessous — "en dehors de"
  { analysis_id: 383, sense: 'en dehors de', arabic: 'مِنْ دُونِ إِذْنٍ', phon: 'min dūni idhn', french: 'Sans permission' },
  { analysis_id: 383, sense: 'en dehors de', arabic: 'دُونَ ذَلِكَ', phon: 'dūna dhālik', french: 'En dessous de cela' },
  { analysis_id: 383, sense: 'en dehors de', arabic: 'لَا شَيْءَ دُونَهُ', phon: 'lā shay\'a dūnahu', french: 'Rien en dehors de lui' },

  // sdq (id=384) — Vérité/Sincérité — "véridique"
  { analysis_id: 384, sense: 'véridique', arabic: 'هُوَ صَادِقٌ', phon: 'huwa ṣādiq', french: 'Il est véridique' },
  { analysis_id: 384, sense: 'véridique', arabic: 'قَالَ الصِّدْقَ', phon: 'qāla al-ṣidq', french: 'Il a dit la vérité' },
  { analysis_id: 384, sense: 'véridique', arabic: 'صَدَقَنِي', phon: 'ṣadaqanī', french: 'Il m\'a dit vrai' },

  // thmr (id=390) — Fruit/Produit — "fruit"
  { analysis_id: 390, sense: 'fruit', arabic: 'اَلثَّمَرَةُ نَاضِجَةٌ', phon: 'al-thamaratu nāḍija', french: 'Le fruit est mûr' },
  { analysis_id: 390, sense: 'fruit', arabic: 'أَثْمَرَتِ الشَّجَرَةُ', phon: 'athmarat al-shajara', french: 'L\'arbre a produit des fruits' },
  { analysis_id: 390, sense: 'fruit', arabic: 'ثِمَارُ الْجَهْدِ', phon: 'thimār al-jahd', french: 'Les fruits de l\'effort' },

  // bshr (id=392) — Annonce/Réjouissance — "annoncer"
  { analysis_id: 392, sense: 'annoncer une bonne nouvelle', arabic: 'بَشِّرْهُ بِالنَّجَاحِ', phon: 'bashshirhu bi-al-najāḥ', french: 'Annonce-lui la réussite' },
  { analysis_id: 392, sense: 'annoncer une bonne nouvelle', arabic: 'بُشْرَى لَكَ', phon: 'bushrā lak', french: 'Bonne nouvelle pour toi' },
  { analysis_id: 392, sense: 'annoncer une bonne nouvelle', arabic: 'بَشَّرُونِي بِمَوْلُودٍ', phon: 'bashsharūnī bi-mawlūd', french: 'Ils m\'ont annoncé un nouveau-né' },

  // jry (id=395) — Écoulement/Mouvement — "couler"
  { analysis_id: 395, sense: 'couler', arabic: 'يَجْرِي النَّهْرُ', phon: 'yajrī al-nahr', french: 'La rivière coule' },
  { analysis_id: 395, sense: 'couler', arabic: 'جَرَى الْمَاءُ', phon: 'jarā al-mā\'', french: 'L\'eau a coulé' },
  { analysis_id: 395, sense: 'couler', arabic: 'مَا يَجْرِي هُنَا', phon: 'mā yajrī hunā', french: 'Ce qui se passe ici' },

  // tht (id=396) — Position inférieure — "sous"
  { analysis_id: 396, sense: 'sous', arabic: 'تَحْتَ الطَّاوِلَةِ', phon: 'taḥt al-ṭāwila', french: 'Sous la table' },
  { analysis_id: 396, sense: 'sous', arabic: 'مِنْ تَحْتِهِ', phon: 'min taḥtihi', french: 'En dessous de lui' },
  { analysis_id: 396, sense: 'sous', arabic: 'تَحْتَ السَّيْطَرَةِ', phon: 'taḥt al-sayṭara', french: 'Sous contrôle' },

  // nhr (id=397) — Cours d'eau — "rivière"
  { analysis_id: 397, sense: 'rivière', arabic: 'اَلنَّهْرُ كَبِيرٌ', phon: 'al-nahru kabīr', french: 'La rivière est grande' },
  { analysis_id: 397, sense: 'rivière', arabic: 'عِنْدَ النَّهْرِ', phon: '\'ind al-nahr', french: 'Au bord de la rivière' },
  { analysis_id: 397, sense: 'rivière', arabic: 'أَنْهَارُ الْمَدِينَةِ', phon: 'anhār al-madīna', french: 'Les rivières de la ville' },

  // zwj (id=401) — Couple/Paire — "conjoint"
  { analysis_id: 401, sense: 'conjoint', arabic: 'هَذَا زَوْجِي', phon: 'hādhā zawjī', french: 'C\'est mon conjoint' },
  { analysis_id: 401, sense: 'conjoint', arabic: 'تَزَوَّجَ أَمْسِ', phon: 'tazawwaja ams', french: 'Il s\'est marié hier' },
  { analysis_id: 401, sense: 'conjoint', arabic: 'زَوْجَةٌ صَالِحَةٌ', phon: 'zawjatun ṣāliḥa', french: 'Une conjointe vertueuse' },

  // thr (id=402) — Pureté/Propreté — "purifier"
  { analysis_id: 402, sense: 'purifier', arabic: 'طَهِّرْ يَدَيْكَ', phon: 'ṭahhir yadayk', french: 'Purifie tes mains' },
  { analysis_id: 402, sense: 'purifier', arabic: 'اَلْمَاءُ طَاهِرٌ', phon: 'al-mā\'u ṭāhir', french: 'L\'eau est pure' },
  { analysis_id: 402, sense: 'purifier', arabic: 'تَطَهَّرْ قَبْلَ الصَّلَاةِ', phon: 'taṭahhar qabl al-ṣalāt', french: 'Purifie-toi avant la prière' },

  // hyy (id=404) — Vie/Existence — "vivant"
  { analysis_id: 404, sense: 'vivre', arabic: 'هُوَ حَيٌّ', phon: 'huwa ḥayy', french: 'Il est vivant' },
  { analysis_id: 404, sense: 'vivre', arabic: 'اَلْحَيَاةُ قَصِيرَةٌ', phon: 'al-ḥayātu qaṣīra', french: 'La vie est courte' },
  { analysis_id: 404, sense: 'vivre', arabic: 'أَحْيَا الْأَرْضَ', phon: 'aḥyā al-arḍ', french: 'Il a redonné vie à la terre' },

  // drb (id=405) — Frappe/Coup — "frapper"
  { analysis_id: 405, sense: 'donner un exemple', arabic: 'ضَرَبَ مَثَلًا', phon: 'ḍaraba mathalan', french: 'Il a donné un exemple' },
  { analysis_id: 405, sense: 'donner un exemple', arabic: 'اِضْرِبْ لَنَا مَثَلًا', phon: 'iḍrib lanā mathalan', french: 'Donne-nous un exemple' },
  { analysis_id: 405, sense: 'donner un exemple', arabic: 'ضَرَبَ عَلَى الطَّاوِلَةِ', phon: 'ḍaraba \'alā al-ṭāwila', french: 'Il a frappé sur la table' },

  // bed (id=406) — Partie/Division — "moustique"
  { analysis_id: 406, sense: 'une partie', arabic: 'بَعْضُ النَّاسِ', phon: 'ba\'ḍ al-nās', french: 'Certaines personnes' },
  { analysis_id: 406, sense: 'une partie', arabic: 'بَعْضُهُمْ', phon: 'ba\'ḍuhum', french: 'Certains d\'entre eux' },
  { analysis_id: 406, sense: 'une partie', arabic: 'أَعْطِنِي بَعْضَهُ', phon: 'a\'ṭinī ba\'ḍahu', french: 'Donne-moi une partie' },

  // rwd (id=411) — Volonté/Intention — "vouloir"
  { analysis_id: 411, sense: 'vouloir', arabic: 'مَاذَا تُرِيدُ', phon: 'mādhā turīd', french: 'Que veux-tu ?' },
  { analysis_id: 411, sense: 'vouloir', arabic: 'أُرِيدُ أَنْ أَفْهَمَ', phon: 'urīdu an afham', french: 'Je veux comprendre' },
  { analysis_id: 411, sense: 'vouloir', arabic: 'أَرَادَ الْخَيْرَ', phon: 'arāda al-khayr', french: 'Il a voulu le bien' },

  // fsq (id=414) — Déviation/Sortie — "déviant"
  { analysis_id: 414, sense: 'sortir du droit chemin', arabic: 'هُوَ فَاسِقٌ', phon: 'huwa fāsiq', french: 'Il est déviant' },
  { analysis_id: 414, sense: 'sortir du droit chemin', arabic: 'فَسَقَ عَنِ الْأَمْرِ', phon: 'fasaqa \'an al-amr', french: 'Il a dévié de l\'ordre' },
  { analysis_id: 414, sense: 'sortir du droit chemin', arabic: 'لَا تَكُنْ مِنَ الْفَاسِقِينَ', phon: 'lā takun min al-fāsiqīn', french: 'Ne sois pas parmi les déviants' },

  // nqd (id=424) — Rupture/Dissolution — "rompre"
  { analysis_id: 424, sense: 'rompre', arabic: 'نَقَضَ الْعَهْدَ', phon: 'naqaḍa al-\'ahd', french: 'Il a rompu le pacte' },
  { analysis_id: 424, sense: 'rompre', arabic: 'لَا تَنْقُضْ وَعْدَكَ', phon: 'lā tanquḍ wa\'dak', french: 'Ne romps pas ta promesse' },
  { analysis_id: 424, sense: 'rompre', arabic: 'نَقْضُ الِاتِّفَاقِ', phon: 'naqḍ al-ittifāq', french: 'La rupture de l\'accord' },

  // ehd (id=425) — Pacte/Engagement — "pacte"
  { analysis_id: 425, sense: 'pacte', arabic: 'عَاهَدْتُهُ', phon: '\'āhadtuhu', french: 'J\'ai fait un pacte avec lui' },
  { analysis_id: 425, sense: 'pacte', arabic: 'اَلْعَهْدُ بَيْنَنَا', phon: 'al-\'ahd baynanā', french: 'Le pacte entre nous' },
  { analysis_id: 425, sense: 'pacte', arabic: 'أَوْفِ بِالْعَهْدِ', phon: 'awfi bil-\'ahd', french: 'Respecte le pacte' },

  // wthq (id=426) — Fermeté/Confiance — "lier"
  { analysis_id: 426, sense: 'lier solidement', arabic: 'وَثَّقَ الْحَبْلَ', phon: 'waththaqa al-ḥabl', french: 'Il a solidement lié la corde' },
  { analysis_id: 426, sense: 'lier solidement', arabic: 'مِيثَاقٌ غَلِيظٌ', phon: 'mīthāq ghalīẓ', french: 'Un pacte solide' },
  { analysis_id: 426, sense: 'lier solidement', arabic: 'أَثِقُ بِكَ', phon: 'athiqu bik', french: 'J\'ai confiance en toi' },

  // qte (id=427) — Coupure/Séparation — "couper"
  { analysis_id: 427, sense: 'couper', arabic: 'اِقْطَعِ الْحَبْلَ', phon: 'iqṭa\' al-ḥabl', french: 'Coupe la corde' },
  { analysis_id: 427, sense: 'couper', arabic: 'قَطَعَ الطَّرِيقَ', phon: 'qaṭa\'a al-ṭarīq', french: 'Il a traversé la route' },
  { analysis_id: 427, sense: 'couper', arabic: 'اِنْقَطَعَ الْكَهْرَبَاءُ', phon: 'inqaṭa\'a al-kahrabā\'', french: 'L\'électricité a été coupée' },

  // amr (id=428) — Commandement/Autorité — "ordonner"
  { analysis_id: 428, sense: 'ordonner', arabic: 'أَمَرَهُ بِالْعَدْلِ', phon: 'amarahu bil-\'adl', french: 'Il lui a ordonné la justice' },
  { analysis_id: 428, sense: 'ordonner', arabic: 'هَذَا أَمْرٌ مُهِمٌّ', phon: 'hādhā amrun muhimm', french: 'C\'est une affaire importante' },
  { analysis_id: 428, sense: 'ordonner', arabic: 'مَا أَمَرْتَنِي', phon: 'mā amartanī', french: 'Ce que tu m\'as ordonné' },

  // wsl (id=429) — Liaison/Connexion — "joindre"
  { analysis_id: 429, sense: 'joindre', arabic: 'وَصَلَ إِلَى الْبَيْتِ', phon: 'waṣala ilā al-bayt', french: 'Il est arrivé à la maison' },
  { analysis_id: 429, sense: 'joindre', arabic: 'صِلْ رَحِمَكَ', phon: 'ṣil raḥimak', french: 'Maintiens tes liens de parenté' },
  { analysis_id: 429, sense: 'joindre', arabic: 'اَلْوَصْلُ بَيْنَهُمَا', phon: 'al-waṣl baynahumā', french: 'La liaison entre eux deux' },

  // baed (id=926) — Postériorité — "après"
  { analysis_id: 926, sense: 'après', arabic: 'بَعْدَ الْغَدِ', phon: 'ba\'d al-ghad', french: 'Après demain' },
  { analysis_id: 926, sense: 'après', arabic: 'مِنْ بَعْدِ ذَلِكَ', phon: 'min ba\'di dhālik', french: 'Après cela' },
  { analysis_id: 926, sense: 'après', arabic: 'سَأَأْتِي بَعْدَكَ', phon: 'sa-ā\'tī ba\'dak', french: 'Je viendrai après toi' },

  // xlf (id=436) — Succession/Remplacement — "successeur"
  { analysis_id: 436, sense: 'succéder', arabic: 'خَلَفَهُ فِي الْمَنْصِبِ', phon: 'khalafahu fī al-manṣib', french: 'Il lui a succédé au poste' },
  { analysis_id: 436, sense: 'succéder', arabic: 'هُوَ خَلِيفَتُهُ', phon: 'huwa khalīfatuhu', french: 'Il est son successeur' },
  { analysis_id: 436, sense: 'succéder', arabic: 'تَرَكَ خَلْفَهُ أَثَرًا', phon: 'taraka khalfahu atharan', french: 'Il a laissé derrière lui une trace' },

  // sfk (id=438) — Écoulement/Versement — "verser"
  { analysis_id: 438, sense: 'verser', arabic: 'سَفَكَ الدَّمَ', phon: 'safaka al-dam', french: 'Il a versé le sang' },
  { analysis_id: 438, sense: 'verser', arabic: 'لَا تَسْفِكْ دَمًا', phon: 'lā tasfik daman', french: 'Ne verse pas de sang' },
  { analysis_id: 438, sense: 'verser', arabic: 'سُفِكَتِ الدِّمَاءُ', phon: 'sufikat al-dimā\'', french: 'Le sang a été versé' },

  // dmw (id=439) — Sang — "sang"
  { analysis_id: 439, sense: 'sang', arabic: 'اَلدَّمُ أَحْمَرُ', phon: 'al-damu aḥmar', french: 'Le sang est rouge' },
  { analysis_id: 439, sense: 'sang', arabic: 'تَحْلِيلُ الدَّمِ', phon: 'taḥlīl al-dam', french: 'Analyse de sang' },
  { analysis_id: 439, sense: 'sang', arabic: 'رَابِطَةُ الدَّمِ', phon: 'rābiṭat al-dam', french: 'Le lien du sang' },

  // sbh (id=440) — Glorification/Louange — "glorifier"
  { analysis_id: 440, sense: 'glorifier', arabic: 'سُبْحَانَ اللَّهِ', phon: 'subḥān allāh', french: 'Gloire à Dieu' },
  { analysis_id: 440, sense: 'glorifier', arabic: 'نُسَبِّحُ بِحَمْدِهِ', phon: 'nusabbiḥu bi-ḥamdihi', french: 'Nous glorifions par Sa louange' },
  { analysis_id: 440, sense: 'glorifier', arabic: 'سَبَّحَ الْكَوْنَ', phon: 'sabbaḥa al-kawn', french: 'L\'univers a glorifié' },

  // qds (id=441) — Sacralité/Pureté — "sanctifier"
  { analysis_id: 441, sense: 'sanctifier', arabic: 'اَلْأَرْضُ الْمُقَدَّسَةُ', phon: 'al-arḍ al-muqaddasa', french: 'La terre sainte' },
  { analysis_id: 441, sense: 'sanctifier', arabic: 'رُوحُ الْقُدُسِ', phon: 'rūḥ al-quds', french: 'L\'esprit saint' },
  { analysis_id: 441, sense: 'sanctifier', arabic: 'نُقَدِّسُ لَكَ', phon: 'nuqaddisu lak', french: 'Nous sanctifions pour Toi' },

  // frš (id=385) — Étalement/Literie — "lit"
  { analysis_id: 385, sense: 'étendre', arabic: 'فَرَشَ السَّجَّادَةَ', phon: 'farasha al-sajjāda', french: 'Il a étendu le tapis' },
  { analysis_id: 385, sense: 'étendre', arabic: 'اَلْفِرَاشُ نَاعِمٌ', phon: 'al-firāshu nā\'im', french: 'Le lit est doux' },
  { analysis_id: 385, sense: 'étendre', arabic: 'فُرِشَتِ الْأَرْضُ', phon: 'furishat al-arḍ', french: 'La terre a été étendue' },
];

async function insertDailyPhrases() {
  let ok = 0, err = 0;

  for (const p of phrases) {
    // Check if phrase already exists
    const { data: existing } = await db.from('word_daily')
      .select('id').eq('analysis_id', p.analysis_id).eq('french', p.french);
    if (existing && existing.length > 0) {
      console.log('SKIP exists:', p.french);
      continue;
    }

    const { error } = await db.from('word_daily').insert(p);
    if (error) {
      console.log('ERR', p.analysis_id, p.french, ':', error.message);
      err++;
    } else {
      console.log('OK', p.analysis_id, p.french);
      ok++;
    }
  }

  console.log(`\nDone: ${ok} OK, ${err} errors`);
}

insertDailyPhrases().catch(console.error);
