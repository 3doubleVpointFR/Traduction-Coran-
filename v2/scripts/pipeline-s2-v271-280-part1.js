const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function insertVWA(verse_id, word_key, position, sense_chosen, analysis_axes) {
  const { error } = await supabase.from('verse_word_analyses').insert({ verse_id, word_key, position, sense_chosen, analysis_axes });
  if (error) console.error(`  VWA error [${word_key} pos=${position}]:`, error.message);
  else console.log(`  VWA OK: ${word_key} pos=${position}`);
}

async function updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments) {
  const { error } = await supabase.from('verse_analyses').update({ translation_arab, full_translation, translation_explanation, segments }).eq('id', analysis_id);
  if (error) console.error(`  Verse update error [analysis_id=${analysis_id}]:`, error.message);
  else console.log(`  Verse update OK: analysis_id=${analysis_id}`);
}

// ============================================================
// VERSET 2:271  verse_id=278  analysis_id=638
// ============================================================
async function processVerse271() {
  console.log('\n=== 2:271 ===');
  const verse_id = 278;
  const analysis_id = 638;

  const translation_arab = "Si vous manifestez les aumônes, c'est bien ; si vous les cachez et les donnez aux pauvres, c'est mieux pour vous. Il vous effacera une part de vos mauvaises actions. Et Dieu est Bien Informé de ce que vous faites.";
  const full_translation = "Si vous manifestez les aumônes, c'est bien ; si vous les cachez et les donnez aux pauvres, c'est mieux pour vous. Il vous effacera une part de vos mauvaises actions. Et Dieu est Bien Informé de ce que vous faites.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:271 traite de la modalité de la dépense charitable : manifestée (tubdū) ou cachée (tukhfūhā). Tubdū (pos=2) est Form IV inaccompli 2MP de la racine bdw = rendre apparent, manifester. Aṣ-ṣadaqāti (pos=3) est le pluriel défini de ṣadaqa = l'aumône volontaire. Niʿimmā (pos=5) est une particule d'affirmation composée de niʿma (exclamation) + mā = c'est excellent, comme c'est bien. Tukhfūhā (pos=9) est Form IV 2MP de la racine xfy = cacher, dissimuler, avec pronom suffixe la désignant. Tuʾtūhā (pos=11) est Form IV de ʾatā = donner, apporter. Al-fuqaraʾa (pos=12) est le pluriel de faqīr = pauvre, nécessiteux. Khayrun (pos=15) = mieux/meilleur, adjectif comparatif. Wayukaffiru (pos=17) est Form II de kfr = expier, effacer, couvrir (les fautes). Sayyiʾātikum (pos=20) = vos mauvaises actions, pluriel de sayyiʾa. Taʿmalūna (pos=23) est Form I inaccompli 2MP de ʿml = faire, agir. Khabīrun (pos=24) est l'adjectif intensif de la racine khbr = être bien informé, avoir une connaissance intime — ici attribut de Dieu.

§JUSTIFICATION§
Tubdū traduit par "manifestez" : bdw Form IV = rendre visible, manifester — "manifestez" préféré à "montrez" (qui est plus passif). Aṣ-ṣadaqāti traduit par "aumônes" : sdq dans le sens Don/Aumône désigne l'aumône volontaire, distincte de la zakāt obligatoire — "aumônes" est exact. Niʿimmā traduit par "c'est bien" : niʿma + mā = formule d'approbation — "c'est bien" est idiomatique. Tukhfūhā traduit par "vous les cachez" : xfy = dissimuler, Form IV = cacher activement — "cachez" est fidèle. Wayukaffiru traduit par "Il vous effacera" : kfr Form II = effacer les fautes (kaffartu = j'ai expié) — "effacera" exprime le résultat positif de l'expiation. Khabīrun traduit par "Bien Informé" : khbr = connaissance profonde et intime des détails — "Bien Informé" préféré à "Informé" seul pour rendre l'intensité de l'adjectif khabīr.

§CRITIQUE§
Hamidullah traduit niʿimmā par "que c'est bon" — nous disons "c'est bien" pour la fluidité. Hamidullah dit "Il vous couvrira de quelques-unes de vos mauvaises actions" — nous disons "effacera une part" pour rendre min (une partie de) clairement. La distinction bdw (manifester) / xfy (cacher) est bien rendue par Hamidullah aussi. Sur khabīrun, Hamidullah dit "Parfaitement Informé" — nous préférons "Bien Informé" qui est plus naturel en français tout en rendant l'intensif.`;

  const segments = [
    { position: 1, text_arab: "إِنْ", phonetic: "in", translation: "Si", grammar_type: "particle" },
    { position: 2, text_arab: "تُبْدُوا۟", phonetic: "tubdū", translation: "vous manifestez", grammar_type: "verb", root_key: "bdw" },
    { position: 3, text_arab: "ٱلصَّدَقَـٰتِ", phonetic: "aṣ-ṣadaqāti", translation: "les aumônes,", grammar_type: "noun", root_key: "sdq" },
    { position: 4, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 5, text_arab: "نِعِمَّا", phonetic: "niʿimmā", translation: "c'est bien ;", grammar_type: "noun", root_key: "nem" },
    { position: 6, text_arab: "هِيَ", phonetic: "hiya", translation: "elle est", grammar_type: "particle" },
    { position: 7, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 8, text_arab: "إِنْ", phonetic: "in", translation: "si", grammar_type: "particle" },
    { position: 9, text_arab: "تُخْفُوهَا", phonetic: "tukhfūhā", translation: "vous les cachez", grammar_type: "verb", root_key: "xfy" },
    { position: 10, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 11, text_arab: "تُؤْتُوهَا", phonetic: "tuʾtūhā", translation: "les donnez", grammar_type: "verb", root_key: "aty" },
    { position: 12, text_arab: "ٱلْفُقَرَآءَ", phonetic: "al-fuqaraʾa", translation: "aux pauvres,", grammar_type: "noun", root_key: "fq r" },
    { position: 13, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 14, text_arab: "هُوَ", phonetic: "huwa", translation: "c'est", grammar_type: "particle" },
    { position: 15, text_arab: "خَيْرٌ", phonetic: "khayrun", translation: "mieux", grammar_type: "noun", root_key: "khyr" },
    { position: 16, text_arab: "لَّكُمْ", phonetic: "lakum", translation: "pour vous.", grammar_type: "particle" },
    { position: 17, text_arab: "وَيُكَفِّرُ", phonetic: "wayukaffiru", translation: "Il effacera", grammar_type: "verb", root_key: "kfr" },
    { position: 18, text_arab: "عَنكُم", phonetic: "ʿankum", translation: "pour vous", grammar_type: "particle" },
    { position: 19, text_arab: "مِنْ", phonetic: "min", translation: "une part de", grammar_type: "particle" },
    { position: 20, text_arab: "سَيِّـَٔاتِكُمْ", phonetic: "sayyiʾātikum", translation: "vos mauvaises actions.", grammar_type: "noun", root_key: "sya" },
    { position: 21, text_arab: "وَٱللَّهُ", phonetic: "wa-llāhu", translation: "Et Dieu est", grammar_type: "particle" },
    { position: 22, text_arab: "بِمَا", phonetic: "bimā", translation: "de ce que", grammar_type: "particle" },
    { position: 23, text_arab: "تَعْمَلُونَ", phonetic: "taʿmalūna", translation: "vous faites", grammar_type: "verb", root_key: "eml" },
    { position: 24, text_arab: "خَبِيرٌ", phonetic: "khabīrun", translation: "Bien Informé.", grammar_type: "adjective", root_key: "khbr" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "bdw", 2, "manifester/rendre visible", {
    sense_chosen: "manifester/rendre visible",
    concept_chosen: "Apparition/Manifestation",
    concepts: {
      "Apparition/Manifestation": {
        status: "retenu",
        senses: ["apparaître","se montrer","sembler"],
        proof_ctx: "Tubdū : Form IV 2MP inaccompli de bdw = rendre apparent, faire paraître. La Form IV (ʾabdā) donne un sens causatif : vous rendez visible ce qui pourrait rester caché. Le contexte est la publicité vs le secret de l'aumône.",
        axe1_verset: "Tubdū aṣ-ṣadaqāti = vous rendez visibles les aumônes. La Form IV de bdw = ʾabdā = rendre manifeste, faire paraître ouvertement. Le verset oppose cette manifestation (tubdū) à la dissimulation (tukhfūhā). La manifestation de l'aumône est dite bien (niʿimmā) mais le secret est préférable (khayrun). Cette opposition est centrale au verset.",
        axe2_voisins: "Le verset 2:264 condamnait l'ostentation (mannun wa-adhā) — la manifestation de l'aumône n'est pas automatiquement une faute mais devient problématique si elle nuit au bénéficiaire. Le verset 2:273 décrit des pauvres que leur dignité empêche de se manifester — parallèle inverse. La manifestation de l'aumône peut encourager les autres à donner (2:177).",
        axe3_sourate: "Al-Baqarah distingue plusieurs niveaux de générosité : l'infāq pour la voie de Dieu (2:261), l'infāq sincère vs ostentatoire (2:264-265), la dépense publique vs privée (2:271). La racine bdw apparaît dans la sourate pour opposer l'apparent au caché dans plusieurs contextes moraux. La manifestation physique n'est pas condamnée en soi mais doit être guidée par l'intention.",
        axe4_coherence: "La racine bdw signifie d'abord apparaître, se montrer (sens intransitif) ; la Form IV ʾabdā est causative = faire apparaître. Dans le Coran, ʾabdā mā kāna yakhfā = Il a fait apparaître ce qui était caché (7:22). La visibilité est neutre en elle-même ; c'est l'intention qui détermine sa valeur morale.",
        axe5_frequence: "La racine bdw apparaît environ 27 fois dans le Coran. La Form IV ʾabdā est la plus fréquente dans des contextes de révélation de ce qui était caché. Ici la Form IV s'applique à un acte volontaire du croyant : rendre visible sa charité. La fréquence relative dans al-Baqarah montre que la transparence est un thème récurrent mais ambigu."
      },
      "Désert/Nomadisme": {
        status: "nul",
        senses: ["bédouin","désert"],
        proof_ctx: "Le sens de désert/nomadisme (badā = bédouin) est une extension culturelle de la racine bdw (être à l'extérieur/dehors) sans rapport avec le contexte de manifestation de l'aumône."
      }
    }
  });

  await insertVWA(verse_id, "sdq", 3, "aumône volontaire", {
    sense_chosen: "aumône volontaire",
    concept_chosen: "Don/Aumône",
    concepts: {
      "Don/Aumône": {
        status: "retenu",
        senses: ["aumône","dot"],
        proof_ctx: "Aṣ-ṣadaqātu : pluriel défini de ṣadaqa, terme technique pour l'aumône volontaire (hors zakāt obligatoire). Dérivé de ṣidq = vérité/sincérité : la ṣadaqa est un don qui atteste la sincérité de la foi.",
        axe1_verset: "Aṣ-ṣadaqāti désigne les aumônes volontaires — distinct de az-zakāt (impôt religieux obligatoire). Le verset traite de la modalité de ce don : publicité ou discrétion. La ṣadaqa est l'objet direct de tubdū (manifester) et tukhfūhā (cacher) : c'est elle qui peut être rendue visible ou dissimulée.",
        axe2_voisins: "Le verset 2:276 met en opposition directe ar-ribā (usure) et aṣ-ṣadaqāt : Dieu anéantit l'usure et fait prospérer les aumônes. Le verset 2:280 évoque taṣaddaqū = faire l'aumône d'une remise de dette. La séquence 271-280 forme un ensemble cohérent autour du don, de l'usure, et de la justice économique.",
        axe3_sourate: "La ṣadaqa est mentionnée plusieurs fois dans al-Baqarah (2:196, 2:263, 2:264, 2:271, 2:276, 2:280). Elle constitue avec la zakāt le système de redistribution coranique. La racine sdq relie la sincérité morale (ṣidq) à l'acte caritatif (ṣadaqa) : donner sincèrement est en soi une vérité exprimée par l'acte.",
        axe4_coherence: "La ṣadaqa volontaire diffère de la zakāt obligatoire en ce qu'elle est libre dans son montant et sa destination. La racine sdq = être vrai, sincère — ṣadaqa est étymologiquement l'acte qui témoigne de la vérité de la foi. La ṣadaqa peut être monétaire, mais aussi toute bonne action selon les hadith.",
        axe5_frequence: "La racine sdq dans ses formes nominales et verbales apparaît environ 155 fois dans le Coran. Ṣadaqa au sens d'aumône apparaît principalement dans des contextes juridiques et moraux. Sa fréquence dans al-Baqarah est élevée — la sourate est le principal texte coranique sur l'économie charitable."
      },
      "Vérité/Sincérité": {
        status: "probable",
        senses: ["dire vrai","vrai","sincère","confirmer"],
        proof_ctx: "La ṣadaqa est étymologiquement un don sincère, un acte qui témoigne de la vérité de la foi. Le lien entre sincérité et aumône est réel mais secondaire dans le contexte précis de ce verset."
      },
      "Amitié": {
        status: "nul",
        senses: ["ami sincère"],
        proof_ctx: "Le sens d'amitié (ṣadīq = ami) est une extension de la racine sdq sans rapport avec l'aumône mentionnée ici."
      }
    }
  });

  await insertVWA(verse_id, "nem", 5, "c'est bien/excellent", {
    sense_chosen: "c'est bien/excellent",
    concept_chosen: "Affirmation",
    concepts: {
      "Affirmation": {
        status: "retenu",
        senses: ["oui","certes","excellent"],
        proof_ctx: "Niʿimmā = niʿma + mā. Niʿma est une exclamation d'approbation = comme c'est bien ! mā est un renforçateur. La construction fa-niʿimmā hiya = c'est excellent, comme c'est bien qu'elle soit ainsi.",
        axe1_verset: "Fa-niʿimmā hiya = alors c'est bien ainsi. La construction niʿma + mā est une formule d'approbation enthousiaste dans le style sémitique. Le pronom hiya renvoie aux aumônes (aṣ-ṣadaqāt, féminin). Cette approbation est ensuite dépassée par la comparaison khayrun lakum = c'est mieux pour vous, introduisant une gradation : bien → encore mieux.",
        axe2_voisins: "La gradation bien/mieux de 2:271 se retrouve dans d'autres versets : 2:184 wa-an taṣūmū khayrun lakum = que vous jeuniez est mieux pour vous. La formule niʿma apparaît aussi en 2:278 dans d'autres contextes. L'approbation conditionnelle permet d'encourager sans interdire la dépense publique.",
        axe3_sourate: "La racine nem (niʿma = bien, bienfait) est centrale dans al-Baqarah pour les formules d'approbation divine. La forme niʿma est distincte de niʿmat = bienfait (même racine) et de naʿam = oui. Ici c'est le sens d'affirmation/approbation qui est retenu.",
        axe4_coherence: "La construction niʿma + nom est une formule classique de l'éloge arabe : niʿmal-ʿabdu = excellent serviteur ! La Form niʿimmā (avec assimilation) est spécifique à quelques versets coraniques. L'usage ici crée un effet rhétorique : l'approbation enthousiaste précède immédiatement la comparaison supérieure.",
        axe5_frequence: "La racine nem dans ses divers sens (bienfait, approbation, bétail) apparaît environ 145 fois dans le Coran. La forme niʿma comme exclamation d'éloge est présente dans plusieurs sourates. Dans al-Baqarah, la racine est surtout présente dans les formules de bienfaits divins et d'approbation."
      },
      "Bienfait/Faveur": {
        status: "peu_probable",
        senses: ["bienfait","faveur","bénédiction"],
        proof_ctx: "Niʿma peut signifier bienfait/faveur, mais dans la construction niʿimmā hiya il s'agit d'une exclamation d'approbation, pas d'un bienfait accordé."
      },
      "Douceur/Aisance": { status: "nul", senses: ["douceur","tendresse"], proof_ctx: "Sens non pertinent ici." },
      "Bétail/Animaux": { status: "nul", senses: ["bétail","troupeau"], proof_ctx: "Sens non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "xfy", 9, "cacher/dissimuler", {
    sense_chosen: "cacher/dissimuler",
    concept_chosen: "Dissimulation/Secret",
    concepts: {
      "Dissimulation/Secret": {
        status: "retenu",
        senses: ["cacher","être caché","être secret","être invisible"],
        proof_ctx: "Tukhfūhā : Form IV 2MP de xfy + pronom féminin = vous la cachez (l'aumône). La Form IV = ʾakhfā = rendre secret, cacher activement. S'oppose directement à tubdū (manifester).",
        axe1_verset: "Tukhfūhā wa-tuʾtūhā al-fuqaraʾa = vous la cachez ET vous la donnez aux pauvres. Les deux conditions sont liées : cacher l'aumône n'a de valeur que si elle parvient quand même au bénéficiaire. La discrétion protège la dignité du pauvre et l'intention du donateur.",
        axe2_voisins: "Le verset 2:273 décrit des pauvres qui cachent leur pauvreté (at-taʿaffuf = retenue/dissimulation). Le verset 2:274 mentionne sirran (en secret) comme modalité valorisée de la dépense nocturne. La discrétion dans la charité est un leitmotiv de la séquence 271-274.",
        axe3_sourate: "La racine xfy dans le Coran exprime le caché face au manifeste dans des contextes variés : secrets du cœur, actions cachées, choses invisibles. Dans al-Baqarah, le couple ẓāhir/bāṭin (apparent/caché) structure plusieurs enseignements sur l'intention.",
        axe4_coherence: "La Form IV ʾakhfā = cacher est plus forte que la Form I khafiya = être caché. Ici l'agent cache activement son aumône. La même racine xfy donne ikhfāʾ = secret dans les sciences du Coran. L'opposition bdw/xfy ici est aussi une opposition de l'ego : manifester peut nourrir l'amour-propre.",
        axe5_frequence: "La racine xfy apparaît environ 37 fois dans le Coran. La Form IV ʾakhfā est la plus fréquente, souvent dans des contextes de secrets cachés à Dieu (7:55) ou d'actes discrets valorisés. La fréquence dans al-Baqarah montre l'importance de la discrétion dans l'éthique du don."
      }
    }
  });

  await insertVWA(verse_id, "aty", 11, "donner/remettre", {
    sense_chosen: "donner/remettre",
    concept_chosen: "Venue/Arrivée",
    concepts: {
      "Venue/Arrivée": {
        status: "retenu",
        senses: ["venir","arriver","apporter","donner","commettre"],
        proof_ctx: "Tuʾtūhā : Form IV 2MP de ʾatā + pronom féminin = vous la donnez (la faites parvenir). Form IV ʾātā = faire venir, apporter, donner. C'est le terme standard pour donner au sens de faire parvenir quelque chose à quelqu'un.",
        axe1_verset: "Tukhfūhā wa-tuʾtūhā al-fuqaraʾa = vous cachez ET donnez aux pauvres. La Form IV ʾātā souligne l'acte actif de transmission — pas simplement avoir ou posséder mais faire parvenir à l'autre. Al-fuqaraʾa est le bénéficiaire direct, souligné sans intermédiaire.",
        axe2_voisins: "Le verset 2:177 utilise aussi ātā al-māla = il donne les biens dans la liste des actes de piété. Le verset 2:277 dit ātawū az-zakāta = ils acquittent la zakāt. La Form IV ʾātā est le terme technique du don dans le Coran.",
        axe3_sourate: "Dans al-Baqarah, la Form IV ātā est omniprésente dans les contextes de dépense obligatoire (zakāt) et volontaire (ṣadaqa). La racine ʾtw signifie d'abord venir, arriver puis par extension apporter, donner. La Form IV causative = faire arriver = donner.",
        axe4_coherence: "La distinction ʾātā (donner, Form IV) vs ʾaʿṭā (donner, Form IV de ʿṭw) est subtile : ātā insiste sur la livraison, le fait que l'objet parvient ; ʾaʿṭā insiste sur l'acte de remise. Les deux sont synonymes dans l'usage coranique mais ātā a une fréquence plus élevée.",
        axe5_frequence: "La racine ʾtw apparaît environ 549 fois dans le Coran — c'est l'une des racines les plus fréquentes. La Form IV ātā/yuʾtī est standard pour donner, remettre, accorder. Sa présence ici est attendue et sans ambiguïté."
      },
      "Sens isolé/Détruire": { status: "nul", senses: ["détruire"], proof_ctx: "Sens extrêmement rare non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "fq r", 12, "pauvre/nécessiteux", {
    sense_chosen: "pauvre/nécessiteux",
    concept_chosen: "Pauvreté/Besoin",
    concepts: {
      "Pauvreté/Besoin": {
        status: "retenu",
        senses: ["être pauvre","avoir besoin","manquer","nécessiteux"],
        proof_ctx: "Al-fuqaraʾa : pluriel défini de faqīr = pauvre, nécessiteux. Racine fqr = manquer, être dans le besoin. C'est le terme standard pour désigner les bénéficiaires de l'aumône dans le Coran.",
        axe1_verset: "Tuʾtūhā al-fuqaraʾa = vous la donnez aux pauvres. Les fuqarāʾ sont les destinataires spécifiques de l'aumône cachée. Le verset 2:273 développe qui sont ces fuqarāʾ — des gens dignes qui cachent eux-mêmes leur dénuement. La discrétion du donateur correspond à la dignité du destinataire.",
        axe2_voisins: "Le verset 2:273 décrit les fuqarāʾ alladhīna uḥṣirū fī sabīli llāhi = les pauvres bloqués dans la voie de Dieu. Le verset 2:177 cite les fuqarāʾ dans la liste des bénéficiaires de l'aumône. La séquence 271-273 forme un ensemble sur les pauvres et la manière de les aider.",
        axe3_sourate: "La racine fqr = fissure vertébrale → manque, besoin (comme si la colonne était brisée). Le Coran distingue fuqarāʾ et masākīn (pauvres démunis) dans plusieurs contextes de distribution. Dans al-Baqarah, les fuqarāʾ sont mentionnés en 2:177, 2:271, 2:273.",
        axe4_coherence: "La distinction faqīr/miskīn est discutée par les juristes : selon certains, le faqīr est plus démuni que le miskīn, selon d'autres l'inverse. Les deux termes apparaissent dans la liste des bénéficiaires de la zakāt (9:60). Ici faqīr désigne généralement le pauvre dans le besoin.",
        axe5_frequence: "La racine fqr apparaît environ 13 fois dans le Coran. Faqīr au pluriel fuqarāʾ est le terme dominant pour les pauvres bénéficiaires d'aumônes. Sa fréquence modérée indique un terme technique spécifique au contexte caritatif."
      }
    }
  });

  await insertVWA(verse_id, "khyr", 15, "mieux/meilleur", {
    sense_chosen: "mieux/meilleur",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien","meilleur","bonté"],
        proof_ctx: "Khayrun : adjectif de la racine khyr = être bon, être meilleur. Ici khayrun lakum = c'est mieux pour vous — khayrun fonctionne comme comparatif (ellatif) en arabe. Le don caché surpasse le don public en valeur spirituelle.",
        axe1_verset: "Fa-huwa khayrun lakum = c'est mieux pour vous. L'ellatif khayrun (comparatif de ḥasan ou de khayr) indique une supériorité sur niʿimmā hiya. La gradation rhétorique est : manifester l'aumône = bien ; cacher et donner = encore mieux. Le bénéfice (lakum) est personnel : le donateur lui-même profite spirituellement de la discrétion.",
        axe2_voisins: "La formule khayrun lakum revient en 2:184, 2:280. Elle indique systématiquement une supériorité morale d'une action sur une alternative. Dans 2:184, jeûner est khayrun ; dans 2:280, remettre la dette est khayrun. La formule crée un système de gradation morale.",
        axe3_sourate: "Khayr = bien, excellence est l'un des termes axiologiques centraux d'al-Baqarah. Il qualifie les actions moralement supérieures. La racine khyr est aussi présente dans du khayr = de bien (2:272, 2:273, 2:274) — la notion de bien est omniprésente dans la séquence sur la générosité.",
        axe4_coherence: "Khayr en arabe classique est à la fois un nom (le bien) et un adjectif ellatif (meilleur). Cette ambiguïté est résolue par le contexte : ici khayrun lakum = c'est mieux pour vous, comparaison implicite avec l'alternative précédente. La cohérence avec les autres emplois dans al-Baqarah est parfaite.",
        axe5_frequence: "La racine khyr apparaît environ 176 fois dans le Coran — parmi les plus fréquentes. Khayr comme bien/excellent est présent dans toutes les sourates majeures. Sa fréquence dans la séquence 271-280 est élevée : du khayr (2:272, 273), khayrun (2:271, 280), aṣḥābu al-khayr."
      }
    }
  });

  await insertVWA(verse_id, "kfr", 17, "effacer/expier les fautes", {
    sense_chosen: "effacer/expier les fautes",
    concept_chosen: "Expiation/Réparation",
    concepts: {
      "Expiation/Réparation": {
        status: "retenu",
        senses: ["expier","effacer les péchés"],
        proof_ctx: "Wayukaffiru : Form II inaccompli de kfr = couvrir, puis expier, effacer les fautes. Kaffara (Form II) = expier, couvrir les péchés. Ici le sujet implicite est Dieu. La ṣadaqa cachée a pour récompense divine l'effacement d'une part des fautes.",
        axe1_verset: "Wayukaffiru ʿankum min sayyiʾātikum = Il effacera une part de vos mauvaises actions. Le verbe yukaffiru en Form II intensif de kfr = couvrir entièrement, effacer. La préposition ʿan = loin de vous, indiquant l'éloignement des fautes. Min sayyiʾātikum = une partie des mauvaises actions — non pas toutes, marquant la juste mesure.",
        axe2_voisins: "La kafāra (expiation) est un terme juridique dans la charia pour réparer certaines fautes (meurtre involontaire, parjure...). Ici yukaffiru est promis comme récompense spontanée du don caché. Le verset 2:286 dit Allāh lā yuʾākhidhukum = Dieu ne vous tient pas rigueur — l'effacement des fautes est une miséricorde.",
        axe3_sourate: "La racine kfr dans al-Baqarah a plusieurs emplois : kāfir (mécréant, Form I = couvrir/nier), kaffara (expier, Form II), mukaffir (qui efface). Ces emplois illustrent comment une même racine peut avoir des sens très opposés selon la forme grammaticale. Ici Form II est positif : expiation.",
        axe4_coherence: "La Form II kaffara intensifie le sens de couvrir : couvrir complètement, effacer. C'est le terme technique de l'expiation islamique (kafārat al-yamīn = expiation du serment rompu). La récompense de l'aumône cachée est donc doublement spirituelle : mérite positif + effacement des fautes.",
        axe5_frequence: "La racine kfr dans ses formes verb. et nom. apparaît environ 525 fois dans le Coran — l'une des plus fréquentes. La Form II kaffara dans le sens expier est moins fréquente (~10 fois) mais présente dans des contextes juridiques et moraux importants."
      },
      "Couverture/Dissimulation": {
        status: "probable",
        senses: ["couvrir","cacher","la nuit qui couvre"],
        proof_ctx: "Le sens premier de kfr est couvrir, cacher. Yukaffiru signifie etymologiquement couvrir les fautes — la connexion avec la dissimulation de l'aumône (tukhfūhā) dans le même verset est suggestive mais le sens retenu est l'expiation."
      },
      "Rejet/Ingratitude": { status: "nul", senses: ["nier","être ingrat","renier"], proof_ctx: "Sens de kāfir (mécréant/ingrat) non pertinent dans ce contexte de récompense divine." }
    }
  });

  await insertVWA(verse_id, "sya", 20, "mauvaises actions/méfaits", {
    sense_chosen: "mauvaises actions/méfaits",
    concept_chosen: "Mal",
    concepts: {
      "Mal": {
        status: "retenu",
        senses: ["mal"],
        proof_ctx: "Sayyiʾātikum : pluriel de sayyiʾa = mauvaise action, méfait, suffixe possessif 2MP. La sayyiʾa est l'acte mauvais par opposition au ḥasana (bonne action). L'aumône cachée a pour récompense l'effacement d'une part de ces actes.",
        axe1_verset: "Min sayyiʾātikum = une part de vos mauvaises actions. Le pluriel sayyiʾāt souligne la multiplicité des fautes humaines. Min (une partie de) indique que l'aumône n'efface pas tout mais compense proportionnellement. La connexion logique est : l'acte bon (aumône cachée) contrebalance les actes mauvais (sayyiʾāt).",
        axe2_voisins: "Le verset 2:286 dit lā tuʾākhidhnā = ne nous tiens pas rigueur de nos erreurs. La notion de balance des actes (mīzān) est centrale dans al-Baqarah. La sayyiʾa s'oppose à ḥasana (2:245, 2:261) — un grain produit 700 grains = la ḥasana est multipliée.",
        axe3_sourate: "Sayyiʾa dans al-Baqarah désigne les actes mauvais en général, sans spécification. La racine sūʾ = être mauvais, laid, causer du tort est présente dans des contextes variés. L'effacement des sayyiʾāt par les bonnes actions est un principe théologique coranique de miséricorde.",
        axe4_coherence: "La paire ḥasana/sayyiʾa est un couple conceptuel fondamental du Coran moral. Les sayyiʾāt peuvent être effacées par les bonnes actions (ḥasanāt tudhhibna as-sayyiʾāt, 11:114). L'aumône cachée comme effacement de fautes est cohérent avec cette logique de compensation spirituelle.",
        axe5_frequence: "Sayyiʾa/sayyiʾāt apparaît environ 167 fois dans le Coran comme terme standard pour mauvaise action. Sa présence systématique dans les contextes moraux en fait un terme fondamental de l'éthique coranique."
      }
    }
  });

  await insertVWA(verse_id, "eml", 23, "ce que vous faites/vos actes", {
    sense_chosen: "ce que vous faites/vos actes",
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["travailler","agir","oeuvre","acte","ouvrier"],
        proof_ctx: "Taʿmalūna : Form I inaccompli 2MP de ʿml = faire, agir, travailler. Bimā taʿmalūna = de ce que vous faites. Formule fréquente de clôture dans le Coran indiquant la conscience divine de toutes les actions humaines.",
        axe1_verset: "Bimā taʿmalūna khabīrun = Bien Informé de ce que vous faites. La formule bimā taʿmalūna est une clôture standard qui rappelle que l'apparence ou la discrétion ne change rien à la connaissance divine. Elle renforce le message : que l'aumône soit publique ou cachée, Dieu en est informé.",
        axe2_voisins: "La même formule bimā taʿmalūna basīrun (Voyant) / khabīrun (Informé) / ʿalīmun (Savant) clôt de nombreux versets. En 2:234 : wa-llāhu bimā taʿmalūna khabīrun. En 2:265 : wa-llāhu bimā taʿmalūna baṣīrun. Ces clôtures créent un rappel constant de la surveillance divine.",
        axe3_sourate: "La racine ʿml = faire, agir est l'une des plus fréquentes dans al-Baqarah. Alladhīna āmanū wa-ʿamilū aṣ-ṣāliḥāt (ceux qui croient et font de bonnes œuvres) est une formule récurrente. Ici taʿmalūna inclut tous les actes, bons et mauvais.",
        axe4_coherence: "La Form I ʿamila = a fait, ʿamala = il fait — c'est le verbe générique de l'action humaine dans le Coran. Il ne présuppose pas la valeur morale de l'acte (ʿamila ṣāliḥan = a fait du bien ; ʿamila sayy'an = a fait du mal). Son usage avec khabīrun crée un chiasme : Dieu connaît intimement (khbr) tous les actes (ʿml).",
        axe5_frequence: "La racine ʿml apparaît environ 359 fois dans le Coran. Taʿmalūna dans des formules de clôture avec des noms divins (ʿAlīm, Khabīr, Baṣīr) est extrêmement fréquent. Cette récurrence crée un effet de rappel pédagogique constant."
      },
      "Sens isolé/Gouverneur": { status: "nul", senses: ["gouverneur"], proof_ctx: "Sens non pertinent." }
    }
  });

  await insertVWA(verse_id, "khbr", 24, "bien informé/qui connaît intimement", {
    sense_chosen: "bien informé/qui connaît intimement",
    concept_chosen: "Information/Connaissance",
    concepts: {
      "Information/Connaissance": {
        status: "retenu",
        senses: ["informer","connaître en profondeur"],
        proof_ctx: "Khabīrun : adjectif intensif de la racine khbr = connaître en profondeur, être informé des détails intimes. Khabīr désigne la connaissance intime des détails cachés — distinct de ʿAlīm (connaissance générale) et Baṣīr (connaissance visuelle). Attribut divin ici clôturant le verset sur la discrétion.",
        axe1_verset: "Wa-llāhu bimā taʿmalūna khabīrun = Dieu est Bien Informé de ce que vous faites. Khabīr est l'adjectif approprié ici car il clôt un verset sur le caché (tukhfūhā) et le manifeste (tubdū). Même ce que vous cachez des hommes, Dieu en est khabīr = informé dans sa profondeur cachée. La racine khbr connote une connaissance de l'intérieur, intime.",
        axe2_voisins: "Khabīrun est l'un des attributs divins les plus fréquents dans al-Baqarah et ailleurs. Il clôt souvent des versets sur les actions humaines (2:234, 2:271). Il est souvent couplé avec ʿAlīm : wa-llāhu ʿAlīmun Khabīrun (64:8). Ensemble ils forment la connaissance totale et intime.",
        axe3_sourate: "Dans al-Baqarah, les attributs divins qui clôturent les versets sont choisis avec précision selon le contexte. Khabīr convient parfaitement ici : le verset parle de ce qui est caché vs manifeste — Dieu connaît même le caché intimement. ʿAlīm aurait été plus général.",
        axe4_coherence: "La racine khbr = informer, connaître les nouvelles (khabar = nouvelle, information). Khabīr comme attribut divin signifie Celui qui connaît jusqu'aux secrets les plus profonds. La distinction avec ʿAlīm (Omniscient en général) est que khabīr insiste sur la connaissance des détails et de l'intérieur des choses.",
        axe5_frequence: "Khabīr comme attribut divin apparaît environ 45 fois dans le Coran. Il clôt souvent des versets sur les actions humaines cachées ou secrètes. Sa présence ici est particulièrement apt car le verset traite précisément de l'action cachée (l'aumône secrète)."
      }
    }
  });
}

// ============================================================
// VERSET 2:272  verse_id=279  analysis_id=639
// ============================================================
async function processVerse272() {
  console.log('\n=== 2:272 ===');
  const verse_id = 279;
  const analysis_id = 639;

  const translation_arab = "Il ne t'incombe pas de les guider, mais Dieu guide qui Il veut. Ce que vous dépensez en bien est pour vos propres âmes. Vous ne dépensez que cherchant la Face de Dieu. Ce que vous dépensez en bien vous sera intégralement rendu, et vous ne serez pas lésés.";
  const full_translation = "Il ne t'incombe pas de les guider, mais Dieu guide qui Il veut. Ce que vous dépensez en bien est pour vos propres âmes. Vous ne dépensez que cherchant la Face de Dieu. Ce que vous dépensez en bien vous sera intégralement rendu, et vous ne serez pas lésés.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:272 répond à une question implicite : faut-il s'assurer de la religion du bénéficiaire avant de donner ? Laysa ʿalayka hudāhum = il ne t'incombe pas (litt. ce n'est pas sur toi) leur guidance. Laysa est le verbe de négation non-temporel. Hudāhum (pos=4) est le masdar de hdy = guidance, avec suffixe 3MP. Walākinna llāha yahdī (pos=5-7) = mais Dieu guide : yahdī est Form IV de hdy. Man yashāʾu (pos=8-9) = qui Il veut : yashāʾu Form I de shāʾa. Wa-mā tunfiqū min khayrin (pos=10-14) = tout ce que vous dépensez en bien. Fa-li-anfusikum (pos=15-16) = c'est pour vos propres âmes. Ibtighāʾa wajhi llāhi (pos=21-23) = cherchant la Face de Dieu. Yuwaffa ilaykum (pos=29-31) = vous sera rendu intégralement. Tuẓlamūna (pos=35) Form VIII passive de ẓlm = vous ne serez pas lésés.

§JUSTIFICATION§
Hudāhum traduit par "les guider" : hdy = guidance, le masdar désigne l'acte de guider vers la bonne voie — "les guider" est exact. Yahdī traduit par "guide" : Form IV de hdy = guider activement — "guide" est fidèle. Man yashāʾu traduit par "qui Il veut" : shāʾa = vouloir, Form I accompli — "qui Il veut" est idiomatique. Anfusikum traduit par "vos propres âmes" : nafs + suffixe = soi-même, âme — "vos propres âmes" accentue le bénéfice personnel. Ibtighāʾa traduit par "cherchant" : Form VIII masdar de bghā = chercher — "cherchant" rend le participe/masdar d'intention. Wajhi llāhi traduit par "la Face de Dieu" : wajh = visage, face — "la Face de Dieu" est l'expression théologique consacrée. Yuwaffa traduit par "vous sera rendu intégralement" : Form II passive de wfy = accomplir intégralement — "rendu intégralement" rend le sens de récompense complète.

§CRITIQUE§
Hamidullah dit "il ne t'appartient pas de les guider" — nous disons "il ne t'incombe pas" car laysa ʿalayka = ce n'est pas sur toi (obligation), non une question de propriété. Hamidullah traduit ibtighāʾa wajhi llāhi par "recherchant la Face d'Allah" — nous disons "cherchant la Face de Dieu", en accord. Sur yuwaffa, Hamidullah dit "vous sera pleinement payé" — nous disons "rendu intégralement" pour la nuance de complétude fidèle (wafā = être fidèle, complet).`;

  const segments = [
    { position: 1, text_arab: "لَيْسَ", phonetic: "laysa", translation: "Il n'incombe pas", grammar_type: "particle" },
    { position: 2, text_arab: "عَلَى", phonetic: "ʿalā", translation: "à", grammar_type: "particle" },
    { position: 3, text_arab: "كَ", phonetic: "ka", translation: "toi", grammar_type: "particle" },
    { position: 4, text_arab: "هُدَاهُمْ", phonetic: "hudāhum", translation: "de les guider,", grammar_type: "noun", root_key: "hdy" },
    { position: 5, text_arab: "وَلَـٰكِنَّ", phonetic: "walākinna", translation: "mais", grammar_type: "particle" },
    { position: 6, text_arab: "ٱللَّهَ", phonetic: "allāha", translation: "Dieu", grammar_type: "particle" },
    { position: 7, text_arab: "يَهْدِى", phonetic: "yahdī", translation: "guide", grammar_type: "verb", root_key: "hdy" },
    { position: 8, text_arab: "مَن", phonetic: "man", translation: "qui", grammar_type: "particle" },
    { position: 9, text_arab: "يَشَاءُ", phonetic: "yashāʾu", translation: "Il veut.", grammar_type: "verb", root_key: "shy" },
    { position: 10, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 11, text_arab: "مَا", phonetic: "mā", translation: "ce que", grammar_type: "particle" },
    { position: 12, text_arab: "تُنفِقُوا۟", phonetic: "tunfiqū", translation: "vous dépensez", grammar_type: "verb", root_key: "nfq" },
    { position: 13, text_arab: "مِنْ", phonetic: "min", translation: "en", grammar_type: "particle" },
    { position: 14, text_arab: "خَيْرٍ", phonetic: "khayrin", translation: "bien,", grammar_type: "noun", root_key: "khyr" },
    { position: 15, text_arab: "فَلِ", phonetic: "fa-li", translation: "c'est pour", grammar_type: "particle" },
    { position: 16, text_arab: "أَنفُسِكُمْ", phonetic: "anfusikum", translation: "vos propres âmes.", grammar_type: "noun", root_key: "nfs" },
    { position: 17, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 18, text_arab: "مَا", phonetic: "mā", translation: "vous ne", grammar_type: "particle" },
    { position: 19, text_arab: "تُنفِقُونَ", phonetic: "tunfiqūna", translation: "dépensez", grammar_type: "verb", root_key: "nfq" },
    { position: 20, text_arab: "إِلَّا", phonetic: "illā", translation: "que", grammar_type: "particle" },
    { position: 21, text_arab: "ٱبْتِغَاءَ", phonetic: "ibtighāʾa", translation: "cherchant", grammar_type: "noun", root_key: "bghy" },
    { position: 22, text_arab: "وَجْهِ", phonetic: "wajhi", translation: "la Face de", grammar_type: "noun", root_key: "wjh" },
    { position: 23, text_arab: "ٱللَّهِ", phonetic: "allāhi", translation: "Dieu.", grammar_type: "particle" },
    { position: 24, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 25, text_arab: "مَا", phonetic: "mā", translation: "tout ce que", grammar_type: "particle" },
    { position: 26, text_arab: "تُنفِقُوا۟", phonetic: "tunfiqū", translation: "vous dépensez", grammar_type: "verb", root_key: "nfq" },
    { position: 27, text_arab: "مِنْ", phonetic: "min", translation: "en", grammar_type: "particle" },
    { position: 28, text_arab: "خَيْرٍ", phonetic: "khayrin", translation: "bien", grammar_type: "noun", root_key: "khyr" },
    { position: 29, text_arab: "يُوَفَّ", phonetic: "yuwaffa", translation: "vous sera intégralement rendu", grammar_type: "verb", root_key: "wfy" },
    { position: 30, text_arab: "إِلَى", phonetic: "ilā", translation: "vers", grammar_type: "particle" },
    { position: 31, text_arab: "كُمْ", phonetic: "kum", translation: "vous,", grammar_type: "particle" },
    { position: 32, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 33, text_arab: "أَنتُمْ", phonetic: "antum", translation: "vous", grammar_type: "particle" },
    { position: 34, text_arab: "لَا", phonetic: "lā", translation: "ne serez pas", grammar_type: "particle" },
    { position: 35, text_arab: "تُظْلَمُونَ", phonetic: "tuẓlamūna", translation: "lésés.", grammar_type: "verb", root_key: "zlm" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "hdy", 4, "guidance/être guidé", {
    sense_chosen: "guidance/être guidé",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider","diriger vers la bonne voie","montrer le chemin","guidance","se guider soi-même"],
        proof_ctx: "Hudāhum : masdar de hdy (Form I = guider) + suffixe 3MP = leur guidance. Laysa ʿalayka hudāhum = ce n'est pas sur toi leur guidance. Le masdar hudā désigne l'acte de guider ou le fait d'être guidé.",
        axe1_verset: "Laysa ʿalayka hudāhum = il ne t'incombe pas de les guider. Le masdar hudā est ici au sens de guidance vers la foi — c'est à Dieu seul de guider les cœurs vers l'islam. Le verset répond à une inquiétude du Prophète : doit-on donner uniquement aux musulmans ? La réponse : non, la guidance est l'affaire de Dieu, pas du donateur.",
        axe2_voisins: "Le verset suivant (pos=7) contient yahdī = Il guide — même racine mais sujet différent (Dieu). La paire hudāhum / yahdī crée un contraste : toi tu ne guides pas → mais Dieu guide. Cette opposition prophète/Dieu pour la guidance est récurrente dans le Coran.",
        axe3_sourate: "Dans al-Baqarah, la guidance (hudā) est le thème d'ouverture (2:2 : hudan lil-muttaqīn = guidance pour les pieux). La racine hdy est omniprésente. Le Coran lui-même est hudā. Ici on découvre que le Prophète n'est pas responsable de la guidance des autres.",
        axe4_coherence: "La guidance divine (hidāya) est distincte de la guidance prophétique : le Prophète montre le chemin (tablīgh) mais ne peut forcer ni garantir la guidance intérieure. Cette distinction est théologiquement importante dans le Coran.",
        axe5_frequence: "La racine hdy apparaît environ 316 fois dans le Coran — parmi les plus fréquentes. Hudā comme masdar apparaît environ 79 fois. La fréquence élevée reflète l'importance centrale de la guidance dans la théologie coranique."
      },
      "Don/Offrande": { status: "nul", senses: ["cadeau","offrande"], proof_ctx: "Le sens de don (hadiya) est une extension secondaire de hdy sans rapport ici." },
      "Conduite/Comportement": { status: "nul", senses: ["conduite","comportement"], proof_ctx: "Sens secondaire non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "hdy", 7, "guider/donner la guidance", {
    sense_chosen: "guider/donner la guidance",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider","diriger vers la bonne voie","montrer le chemin","guidance","se guider soi-même"],
        proof_ctx: "Yahdī : Form IV inaccompli de hdy = guider vers la bonne voie. Sujets : Allāh. La Form IV est la forme active causative : Dieu fait venir quelqu'un sur le bon chemin.",
        axe1_verset: "Walākinna llāha yahdī man yashāʾu = mais Dieu guide qui Il veut. Yahdī man yashāʾu est une formule clé qui affirme la souveraineté divine dans la guidance. Le man yashāʾu n'est pas arbitraire mais s'inscrit dans la sagesse divine (hikma).",
        axe2_voisins: "La même formule yahdī man yashāʾu revient en 2:142, 2:213, 2:272. Elle constitue une réponse systématique aux questions sur la guidance sélective. Le contexte de la dépense charitable la place ici : ne refuse pas l'aumône sous prétexte que l'autre n'est pas guidé.",
        axe3_sourate: "Al-Baqarah contient la déclaration fondamentale : lā ikrāha fī d-dīn = pas de contrainte en religion (2:256). La guidance est libre et divine. Le verset 2:272 prolonge cette logique : le donateur n'est pas responsable de la guidance du bénéficiaire.",
        axe4_coherence: "Dans le Coran, Dieu est al-Hādī = le Guide (22:54). La guidance divine (tawfīq) est différente du tablīgh prophétique (proclamation). On peut montrer le chemin sans pouvoir forcer l'entrée dans le cœur.",
        axe5_frequence: "Yahdī comme Form IV de hdy est très fréquent. La formule yahdī man yashāʾu est une formule stéréotypée de souveraineté divine qui apparaît au moins 7 fois dans le Coran."
      },
      "Don/Offrande": { status: "nul", senses: ["cadeau","offrande"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "shy", 9, "vouloir/désirer", {
    sense_chosen: "vouloir/désirer",
    concept_chosen: "Volonté",
    concepts: {
      "Volonté": {
        status: "retenu",
        senses: ["vouloir"],
        proof_ctx: "Yashāʾu : Form I inaccompli de shāʾa = vouloir. Man yashāʾu = qui Il veut. La volonté divine (mashīʾa) est souveraine dans la guidance.",
        axe1_verset: "Yahdī man yashāʾu = Il guide qui Il veut. La mashīʾa (volonté divine) est absolue dans la théologie coranique. Elle n'est pas arbitraire mais découle de la sagesse et de la science divines (ʿAlīm, Ḥakīm). La guidance est un don accordé selon la volonté souveraine de Dieu.",
        axe2_voisins: "La formule man yashāʾu est systématiquement associée à des attributs divins absolus dans al-Baqarah. Le verset 2:142 dit Allāhu yahdī man yashāʾu ilā ṣirāṭin mustaqīm. La volonté divine sélective de guider est un thème théologique récurrent.",
        axe3_sourate: "La mashīʾa divine est un principe fondamental de la théologie al-Baqarah : Dieu guide qui Il veut (hdy), donne à qui Il veut (ʿṭw), accorde la sagesse à qui Il veut (ḥkm). Cette souveraineté divine est affirmée sans contradiction avec la liberté humaine.",
        axe4_coherence: "La racine shāʾa/yashāʾu est uniquement utilisée pour Dieu dans les formules man yashāʾu — la volonté humaine est exprimée par d'autres racines (rāda, arāda). Cette restriction renforce la souveraineté divine.",
        axe5_frequence: "Yashāʾu dans la formule man yashāʾu apparaît environ 36 fois dans le Coran, presque toujours avec Dieu comme sujet dans des contextes de souveraineté divine."
      },
      "Chose/Être": { status: "nul", senses: ["chose"], proof_ctx: "Le sens de chose/existence (shayʾ) est une extension de la même racine mais non pertinent ici." },
      "Néant": { status: "nul", senses: ["néant"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "nfq", 12, "dépenser/donner", {
    sense_chosen: "dépenser/donner",
    concept_chosen: "Dépense/Distribution",
    concepts: {
      "Dépense/Distribution": {
        status: "retenu",
        senses: ["dépenser","distribuer","s'épuiser"],
        proof_ctx: "Tunfiqū : Form IV 2MP subjonctif de nfq = dépenser. Wa-mā tunfiqū min khayrin = ce que vous dépensez en bien. Première occurrence de tunfiqū dans ce verset, conditionnelle.",
        axe1_verset: "Wa-mā tunfiqū min khayrin fa-li-anfusikum = tout ce que vous dépensez en bien est pour vos propres âmes. Le retour de la dépense est ici spécifié : la générosité bénéficie d'abord au donateur lui-même (anfus = âmes). Cette affirmation renverse la logique économique : donner = s'enrichir spirituellement.",
        axe2_voisins: "Le verset 2:274 utilisera la même racine : yunfiqūna amwālahum bi-l-layli wa-n-nahāri. Le verset 2:261 a établi que chaque bien dépensé est multiplié. Ici le bénéfice revient à l'âme du donateur. Ces deux perspectives sont complémentaires.",
        axe3_sourate: "La racine nfq est centrale dans la séquence 261-274. Chaque occurrence précise les conditions et les bénéfices de la dépense. Ici fa-li-anfusikum = pour vos âmes est un argument supplémentaire pour encourager la générosité.",
        axe4_coherence: "La Form IV anfaqa/yunfiqu désigne toujours une dépense volontaire dans un sens positif dans le Coran. L'idée que la dépense bénéficie d'abord à celui qui donne est un renversement économique typique du style coranique.",
        axe5_frequence: "Tunfiqū (Form IV 2MP) apparaît trois fois dans ce seul verset (pos=12, 19, 26) — répétition rhétorique soulignant l'importance du message."
      },
      "Passage/Traversée": { status: "nul", senses: ["passer à travers","tunnel"], proof_ctx: "Sens premier non pertinent ici." },
      "Hypocrisie/Double-face": { status: "nul", senses: ["hypocrisie"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "khyr", 14, "bien/bonté", {
    sense_chosen: "bien/bonté",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien","meilleur","bonté"],
        proof_ctx: "Khayrin : génitif indéfini de khayr = bien, utilisé dans min khayrin = en bien, en bonne chose. C'est le min partitif qui introduit l'objet de la dépense : tout ce que vous dépensez qui soit du bien.",
        axe1_verset: "Wa-mā tunfiqū min khayrin = tout ce que vous dépensez en bien. Min khayrin est une formule générale incluant tout ce qui est bon et utile. Elle contraste avec d'éventuelles dépenses inutiles ou nuisibles. Le khayr ici est ce que vous donnez : argent, temps, services.",
        axe2_voisins: "La même formule min khayrin revient en 2:273 (wa-mā tunfiqū min khayrin) et 2:272 (deux fois). La répétition triple de min khayrin dans ce passage crée une insistance : tout ce qui est bon dans votre dépense sera rendu.",
        axe3_sourate: "Khayr/khayrin est l'un des mots les plus fréquents dans la séquence 271-280. Il désigne à la fois le bien général et les biens matériels. La racine khyr connote une excellence qualitative, pas seulement quantitative.",
        axe4_coherence: "Min khayrin vs min māl : la formule choisit khayrin (bien, ce qui est bon) plutôt que māl (biens matériels) — cela élargit la portée de la dépense à toute forme de bienfaisance, pas seulement monétaire.",
        axe5_frequence: "Min khayrin comme formule apparaît environ 7 fois dans le Coran, principalement dans des contextes de dépense charitable. La fréquence dans la séquence 271-274 est particulièrement élevée."
      }
    }
  });

  await insertVWA(verse_id, "nfs", 16, "âme/soi-même", {
    sense_chosen: "âme/soi-même",
    concept_chosen: "Âme/Être",
    concepts: {
      "Âme/Être": {
        status: "retenu",
        senses: ["âme","soi-même","personne","esprit","désir"],
        proof_ctx: "Anfusikum : pluriel de nafs + suffixe 2MP = vos âmes/vous-mêmes. Fa-li-anfusikum = c'est pour vos propres âmes. Nafs désigne ici le soi bénéficiaire de l'acte généreux.",
        axe1_verset: "Fa-li-anfusikum = c'est pour vos propres âmes. Le préfixe li- (pour) + anfusikum crée un effet de miroir : en donnant aux autres, vous vous donnez à vous-mêmes. L'anfus (pluriel de nafs) souligne que chacun individuellement profite de sa générosité.",
        axe2_voisins: "La formule li-anfusikum (pour vos âmes) revient en 2:182, 2:233, 2:286. Elle indique systématiquement que l'acte prescrit bénéficie d'abord à son auteur. En 2:286 : lahā mā kasabat wa-ʿalayhā mā ktasabat = à son profit ce qu'elle gagne, à sa charge ce qu'elle commet.",
        axe3_sourate: "La nafs dans al-Baqarah est à la fois l'âme individuelle et le sujet moral responsable. Le Coran distingue la nafs muṭmaʾinna (âme apaisée) de la nafs ammāra bi-s-sūʾ (âme qui commande le mal). Ici nafs est le bénéficiaire de l'acte bon.",
        axe4_coherence: "La paradoxe apparent (donner = recevoir) est résolu par la théologie coranique : la générosité purific l'âme et la rapproche de Dieu. L'anfus est donc à la fois le bénéficiaire spirituel (l'âme qui se purifie) et le bénéficiaire eschatologique (la récompense au Jour dernier).",
        axe5_frequence: "Nafs/anfus apparaît environ 295 fois dans le Coran. La formule li-anfusikum est fréquente dans les contextes où une action bonne bénéficie à celui qui l'accomplit. Sa fréquence reflète la théologie coranique de la responsabilité individuelle."
      },
      "Souffle/Vie": { status: "probable", senses: ["souffle","respirer"], proof_ctx: "Le nafs a aussi le sens de souffle/vie (de même racine que nafasa = respirer). Ici c'est le sens d'âme/soi-même qui prédomine." }
    }
  });

  await insertVWA(verse_id, "bghy", 21, "chercher/rechercher", {
    sense_chosen: "chercher/rechercher",
    concept_chosen: "Recherche/Quête",
    concepts: {
      "Recherche/Quête": {
        status: "retenu",
        senses: ["chercher","désirer"],
        proof_ctx: "Ibtighāʾa : Form VIII masdar de bghā = rechercher, quêter avec intention. Form VIII (ibtaghā) désigne la recherche active et intentionnelle. Ibtighāʾa wajhi llāhi = cherchant/quêtant la Face de Dieu.",
        axe1_verset: "Illā ibtighāʾa wajhi llāhi = seulement en cherchant la Face de Dieu. Le illā restrictif = uniquement, seulement — la dépense n'a de valeur que si elle est orientée vers Dieu. L'ibtighāʾ (Form VIII de bghā) insiste sur l'intention active : on cherche consciemment et intentionnellement l'agrément divin.",
        axe2_voisins: "La même formule ibtighāʾa wajhi llāhi revient en 2:265 (wa-ibtighāʾa marḍāti llāhi), en 6:52, en 13:22, en 30:38-39. Elle constitue la définition de l'action sincère (ikhlāṣ) dans le Coran.",
        axe3_sourate: "Le verset 2:265 avait établi ibtighāʾa marḍāti llāhi = cherchant l'agrément de Dieu comme la condition de la dépense valorisée (jardin sur la colline). Ici 2:272 reformule la même idée avec wajh (face) plutôt que marḍāt (agrément). Les deux expressions sont synonymiques.",
        axe4_coherence: "La Form VIII ibtaghā vs Form I baghā : la Form VIII est réflexive/intensive, impliquant une recherche personnelle et active. C'est pourquoi elle est choisie pour exprimer l'intention sincère : non pas une simple orientation (Form I) mais une quête active et personnelle.",
        axe5_frequence: "La racine bghā dans ses diverses formes apparaît environ 95 fois dans le Coran. La Form VIII ibtaghā dans le sens de rechercher/quêter est moins fréquente (~20 fois) mais systématiquement associée à des contextes d'intention sincère."
      },
      "Transgression/Injustice": { status: "nul", senses: ["transgresser","oppression"], proof_ctx: "Le sens de transgression (baghā = dépasser les limites) est une autre extension de la racine bghā, sans rapport avec l'intention charitable ici." }
    }
  });

  await insertVWA(verse_id, "wjh", 22, "face/visage de Dieu", {
    sense_chosen: "face/visage de Dieu",
    concept_chosen: "Visage/Direction",
    concepts: {
      "Visage/Direction": {
        status: "retenu",
        senses: ["visage","face","direction","se diriger vers"],
        proof_ctx: "Wajhi llāhi : génitif de wajh = visage, face, direction + génitif allāhi. Expression théologique consacrée désignant l'agrément de Dieu ou Sa présence. Dépenser ibtighāʾa wajhi llāhi = cherchant la Face de Dieu.",
        axe1_verset: "Ibtighāʾa wajhi llāhi = en cherchant la Face de Dieu. L'expression wajhu llāh désigne à la fois la direction vers Dieu et Son agrément. Elle marque la pureté de l'intention : la dépense n'est pas pour la gloire personnelle mais orientée vers Dieu.",
        axe2_voisins: "Wajhu llāh apparaît en 2:115 (aynamā tuwallu fa-thamma wajhu llāh = partout où vous vous tournez, là est la Face de Dieu), en 2:265, en 30:38-39. L'expression est un marqueur d'intention pure.",
        axe3_sourate: "Dans al-Baqarah, wajh llāh apparaît dans plusieurs contextes : direction de la prière (2:115), intention de la dépense (2:265, 2:272). La Face de Dieu est à la fois la direction de l'acte et sa finalité.",
        axe4_coherence: "La théologie islamique interprète wajhu llāh non pas anthropomorphiquement mais comme la présence divine, l'agrément ou la direction vers Dieu. L'expression ibtighāʾa wajh est devenue un idiome pour l'action désintéressée, sincère.",
        axe5_frequence: "Wajh apparaît environ 72 fois dans le Coran. Wajhu llāh comme expression théologique de l'agrément divin est présent dans plusieurs sourates. Sa fréquence dans les contextes de dépense et de direction montre son importance dans l'éthique coranique."
      }
    }
  });

  await insertVWA(verse_id, "nfq", 26, "dépenser/donner", {
    sense_chosen: "dépenser/donner",
    concept_chosen: "Dépense/Distribution",
    concepts: {
      "Dépense/Distribution": {
        status: "retenu",
        senses: ["dépenser","distribuer","s'épuiser"],
        proof_ctx: "Tunfiqū (troisième occurrence dans le verset, pos=26) : Form IV 2MP subjonctif de nfq. Wa-mā tunfiqū min khayrin yuwaffa ilaykum = tout ce que vous dépensez en bien vous sera rendu. La répétition triple de tunfiqū dans ce verset est une insistance rhétorique sur la générosité.",
        axe1_verset: "Wa-mā tunfiqū min khayrin yuwaffa ilaykum = tout ce que vous dépensez en bien vous sera rendu intégralement. Cette troisième occurrence clôt la séquence avec une promesse de rémunération complète (yuwaffa = Form II passive de wfy). La dépense est présentée comme un investissement à rendement garanti.",
        axe2_voisins: "La triple répétition tunfiqū (pos=12, 19, 26) est une technique rhétorique coranique d'insistance (takrār). Chaque occurrence apporte un élément nouveau : ce que vous dépensez est pour vos âmes ; vous ne dépensez que pour Dieu ; ce que vous dépensez vous sera rendu.",
        axe3_sourate: "La séquence 261-274 est la plus dense en occurrences de nfq dans al-Baqarah. La répétition dans 2:272 est remarquable — trois occurrences en un seul verset. Cela souligne l'importance centrale du thème.",
        axe4_coherence: "La promesse yuwaffa = sera rendu intégralement est la contrepartie économique de la générosité. Elle s'inscrit dans la logique du 700 pour 1 de 2:261 : non seulement la dépense bénéficie à l'âme du donateur, mais elle lui sera également rendue.",
        axe5_frequence: "La triple répétition de tunfiqū dans ce verset est exceptionnelle. Elle est une signature stylistique de l'insistance rhétorique coranique sur les thèmes fondamentaux."
      }
    }
  });

  await insertVWA(verse_id, "wfy", 29, "rendre intégralement/accomplir", {
    sense_chosen: "rendre intégralement/accomplir",
    concept_chosen: "Fidélité/Accomplissement",
    concepts: {
      "Fidélité/Accomplissement": {
        status: "retenu",
        senses: ["être fidèle","accomplir","tenir sa promesse","payer intégralement"],
        proof_ctx: "Yuwaffa : Form II passive inaccompli de wfy = être fidèle, accomplir, payer en totalité. Yuwaffa ilaykum = vous sera rendu (payé) intégralement. La Form II intensifie le sens d'accomplissement complet.",
        axe1_verset: "Yuwaffa ilaykum wa-antum lā tuẓlamūna = vous sera rendu intégralement et vous ne serez pas lésés. Le yuwaffa (passif) a Dieu comme agent implicite : c'est Dieu qui rend la récompense complète. Antum lā tuẓlamūna souligne que cette rémunération est juste — pas un centime ne sera retenu.",
        axe2_voisins: "La même promesse de récompense complète revient en 2:281 (thumma tuwaffā kullu nafsin mā kasabat = puis chaque âme sera intégralement récompensée de ce qu'elle a acquis) et en 3:57. La Form II passive de wfy est le terme technique de la rémunération divine complète.",
        axe3_sourate: "La racine wfy = être complet, fidèle, intégral. La Form II waffā = payer intégralement, la Form X tawāfā = mourir (prendre l'âme en totalité). Ici yuwaffa ilaykum est la promesse d'une récompense totale, sans diminution.",
        axe4_coherence: "La Form II passive yuwaffa est le terme juridique pour le paiement intégral d'une dette. Appliqué à la récompense divine, il signifie que Dieu tient sa promesse entièrement, sans déduction. C'est une garantie divine de fidélité.",
        axe5_frequence: "La racine wfy dans le sens de récompense intégrale divine apparaît environ 15 fois dans le Coran. Elle est systématiquement associée à la promesse d'une rémunération complète et juste des actes."
      },
      "Mort/Fin": { status: "nul", senses: ["mourir"], proof_ctx: "Le sens de mort (tawaffā = prendre l'âme) est une extension de wfy = prendre en totalité, non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "zlm", 35, "léser/être injuste", {
    sense_chosen: "léser/être injuste",
    concept_chosen: "Injustice/Oppression",
    concepts: {
      "Injustice/Oppression": {
        status: "retenu",
        senses: ["opprimer","être injuste","injustice","oppresseur"],
        proof_ctx: "Tuẓlamūna : Form VIII passive 2MP inaccompli de ẓlm = être opprimé, être lésé. Lā tuẓlamūna = vous ne serez pas lésés. La Form VIII passive = subir l'injustice.",
        axe1_verset: "Wa-antum lā tuẓlamūna = et vous ne serez pas lésés. La négation lā + passif tuẓlamūna garantit l'équité de la récompense divine : rien ne sera retenu, diminué, ou mal calculé. C'est une assurance de justice absolue.",
        axe2_voisins: "La même formule lā tuẓlamūna revient en 2:279 (à propos de la restitution des capitaux après abandon de l'usure). Elle apparaît aussi en 2:281. Sa répétition dans la séquence 271-281 crée un cadre de justice équitable.",
        axe3_sourate: "La racine ẓlm dans al-Baqarah désigne surtout l'injustice humaine (ẓālamū anfusahum = ils ont lésé leurs propres âmes) et la garantie divine contre l'injustice (lā tuẓlamūna). La justice divine est un thème récurrent.",
        axe4_coherence: "La Form VIII passive tuẓlamūna (vous subissez l'injustice) vs la Form I active ẓalamū (ils ont commis l'injustice) — la distinction active/passive est importante. Ici le croyant est passif (ne subit pas l'injustice) grâce à la promesse divine.",
        axe5_frequence: "La racine ẓlm apparaît environ 315 fois dans le Coran — l'une des plus fréquentes. Lā tuẓlamūna comme promesse divine de non-lésion est présent dans plusieurs contextes économiques et eschatologiques."
      },
      "Obscurité/Ténèbres": { status: "nul", senses: ["obscurité","ténèbres"], proof_ctx: "Sens secondaire de la racine ẓlm (mise en contexte de la nuit obscure) non pertinent ici." }
    }
  });
}

async function main() {
  await processVerse271();
  await processVerse272();
  console.log('\nPart 1 terminé (V271-272).');
}
main().catch(console.error);
