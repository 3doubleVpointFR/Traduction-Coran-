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
// VERSET 2:273  verse_id=280  analysis_id=640
// ============================================================
async function processVerse273() {
  console.log('\n=== 2:273 ===');
  const verse_id = 280;
  const analysis_id = 640;

  const translation_arab = "[Ces aumônes sont] pour les pauvres qui se sont consacrés à la voie de Dieu, incapables de voyager sur terre. L'ignorant les croit riches à cause de leur retenue. Tu les reconnaîtras à leur apparence. Ils ne mendient pas les gens avec insistance. Et ce que vous dépensez en bien, Dieu en est Savant.";
  const full_translation = "[Ces aumônes sont] pour les pauvres qui se sont consacrés à la voie de Dieu, incapables de voyager sur terre. L'ignorant les croit riches à cause de leur retenue. Tu les reconnaîtras à leur apparence. Ils ne mendient pas les gens avec insistance. Et ce que vous dépensez en bien, Dieu en est Savant.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:273 décrit une catégorie de pauvres particulièrement dignes d'aide. Uḥṣirū (pos=4) est Form IV passif accompli de ḥṣr = assiéger, confiner — ils ont été bloqués/confinés dans la voie de Dieu. Sabīli llāhi (pos=6) = voie de Dieu. Yastaṭīʿūna (pos=9) est Form X inaccompli 3MP de ṭwʿ = pouvoir, être capable — ils ne peuvent pas. Ḍarban (pos=10) est le masdar de ḍrb = voyager, frapper — ici ḍarban fī l-arḍ = voyager sur la terre (idiome du voyage). Al-jāhilu (pos=14) = l'ignorant, Form I actif participe de jhl. Aghnīyāʾa (pos=15) = riches, pluriel de ghanī. At-taʿaffufi (pos=17) est le masdar de Form V de ʿff = se retenir, être chaste/pudique — leur retenue/pudeur. Taʿrifuhum (pos=18) = tu les reconnais, Form IV de ʿrf. Sīmāhum (pos=20) = leur signe/marque visible. Yasʾalūna (pos=22) = ils demandent, Form I de sʾl. An-nāsa (pos=23) = les gens. Ilḥāfan (pos=24) = avec insistance, masdar de lhf = presser, insister. Tunfiqū (pos=27) = vous dépensez, Form IV de nfq. Khayrin (pos=29) = bien. ʿAlīmun (pos=34) = Savant, adjectif intensif de ʿlm.

§JUSTIFICATION§
Uḥṣirū traduit par "se sont consacrés" : uḥṣirū est Form IV passif — être bloqué, confiné ; mais le contexte fī sabīli llāhi (dans la voie de Dieu) donne le sens de consécration (s'être engagé dans la voie de Dieu au point de ne pouvoir voyager pour travailler). "Bloqués" serait plus littéral mais "consacrés" rend l'intention du texte. Yastaṭīʿūna traduit par "incapables" : Form X stʿṭ = pouvoir, être capable — la négation lā yastaṭīʿūna = incapables. At-taʿaffufi traduit par "retenue" : Form V masdar de ʿff = se retenir, être pudique — "retenue" est préféré à "pudeur" (trop genré) ou "continence". Sīmāhum traduit par "leur apparence" : sīmā = signe visible, marque — "apparence" convient pour un signe physique visible. Ilḥāfan traduit par "avec insistance" : lhf = presser, couvrir, insister — "avec insistance" est exact.

§CRITIQUE§
Hamidullah traduit uḥṣirū par "qui se sont consacrés" — nous sommes en accord sur ce sens. Hamidullah dit "ne mendient point" — nous disons "ne mendient pas... avec insistance" pour rendre le ilḥāfan. Hamidullah dit "tu les reconnaîtras à leur aspect" — nous disons "à leur apparence" (aspect et apparence sont synonymes ici). Pour ʿAlīmun, Hamidullah dit "Omniscient" — nous préférons "Savant" qui est plus proche de l'adjectif d'intensité ʿalīm.`;

  const segments = [
    { position: 1, text_arab: "لِ", phonetic: "li", translation: "Pour", grammar_type: "particle" },
    { position: 2, text_arab: "ٱلْفُقَرَآءِ", phonetic: "al-fuqaraʾi", translation: "les pauvres", grammar_type: "noun", root_key: "fq r" },
    { position: 3, text_arab: "ٱلَّذِينَ", phonetic: "alladhīna", translation: "qui", grammar_type: "particle" },
    { position: 4, text_arab: "أُحْصِرُوا۟", phonetic: "uḥṣirū", translation: "se sont consacrés", grammar_type: "verb", root_key: "h s r" },
    { position: 5, text_arab: "فِى", phonetic: "fī", translation: "dans", grammar_type: "particle" },
    { position: 6, text_arab: "سَبِيلِ", phonetic: "sabīli", translation: "la voie de", grammar_type: "noun", root_key: "s b l" },
    { position: 7, text_arab: "ٱللَّهِ", phonetic: "allāhi", translation: "Dieu,", grammar_type: "particle" },
    { position: 8, text_arab: "لَا", phonetic: "lā", translation: "ne pouvant pas", grammar_type: "particle" },
    { position: 9, text_arab: "يَسْتَطِيعُونَ", phonetic: "yastaṭīʿūna", translation: "voyager", grammar_type: "verb", root_key: "t w e" },
    { position: 10, text_arab: "ضَرْبًا", phonetic: "ḍarban", translation: "en chemin", grammar_type: "noun", root_key: "d r b" },
    { position: 11, text_arab: "فِى", phonetic: "fī", translation: "sur", grammar_type: "particle" },
    { position: 12, text_arab: "ٱلْأَرْضِ", phonetic: "al-arḍi", translation: "la terre.", grammar_type: "noun", root_key: "a r d" },
    { position: 13, text_arab: "يَحْسَبُهُمُ", phonetic: "yaḥsabuhumu", translation: "Il les croit", grammar_type: "verb", root_key: "h s b" },
    { position: 14, text_arab: "ٱلْجَاهِلُ", phonetic: "al-jāhilu", translation: "l'ignorant", grammar_type: "noun", root_key: "j h l" },
    { position: 15, text_arab: "أَغْنِيَآءَ", phonetic: "aghnīyāʾa", translation: "riches", grammar_type: "noun", root_key: "gh n y" },
    { position: 16, text_arab: "مِنْ", phonetic: "min", translation: "à cause de", grammar_type: "particle" },
    { position: 17, text_arab: "ٱلتَّعَفُّفِ", phonetic: "at-taʿaffufi", translation: "leur retenue.", grammar_type: "noun", root_key: "e f f" },
    { position: 18, text_arab: "تَعْرِفُهُم", phonetic: "taʿrifuhum", translation: "Tu les reconnaîtras", grammar_type: "verb", root_key: "e r f" },
    { position: 19, text_arab: "بِ", phonetic: "bi", translation: "à", grammar_type: "particle" },
    { position: 20, text_arab: "سِيمَـٰهُمْ", phonetic: "sīmāhum", translation: "leur apparence.", grammar_type: "noun", root_key: "s w m" },
    { position: 21, text_arab: "لَا", phonetic: "lā", translation: "Ils ne", grammar_type: "particle" },
    { position: 22, text_arab: "يَسْـَٔلُونَ", phonetic: "yasʾalūna", translation: "mendient pas", grammar_type: "verb", root_key: "s a l" },
    { position: 23, text_arab: "ٱلنَّاسَ", phonetic: "an-nāsa", translation: "les gens", grammar_type: "noun", root_key: "n w s" },
    { position: 24, text_arab: "إِلْحَافًا", phonetic: "ilḥāfan", translation: "avec insistance.", grammar_type: "noun", root_key: "l h f" },
    { position: 25, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 26, text_arab: "مَا", phonetic: "mā", translation: "ce que", grammar_type: "particle" },
    { position: 27, text_arab: "تُنفِقُوا۟", phonetic: "tunfiqū", translation: "vous dépensez", grammar_type: "verb", root_key: "n f q" },
    { position: 28, text_arab: "مِنْ", phonetic: "min", translation: "en", grammar_type: "particle" },
    { position: 29, text_arab: "خَيْرٍ", phonetic: "khayrin", translation: "bien,", grammar_type: "noun", root_key: "kh y r" },
    { position: 30, text_arab: "فَ", phonetic: "fa", translation: "certes", grammar_type: "particle" },
    { position: 31, text_arab: "إِنَّ", phonetic: "inna", translation: "Dieu en est", grammar_type: "particle" },
    { position: 32, text_arab: "ٱللَّهَ", phonetic: "allāha", translation: "Dieu", grammar_type: "particle" },
    { position: 33, text_arab: "بِهِۦ", phonetic: "bihi", translation: "en est", grammar_type: "particle" },
    { position: 34, text_arab: "عَلِيمٌ", phonetic: "ʿalīmun", translation: "Savant.", grammar_type: "adjective", root_key: "e l m" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "fq r", 2, "pauvre/dans le besoin", {
    sense_chosen: "pauvre/dans le besoin",
    concept_chosen: "Pauvreté/Besoin",
    concepts: {
      "Pauvreté/Besoin": {
        status: "retenu",
        senses: ["être pauvre","avoir besoin","manquer","nécessiteux"],
        proof_ctx: "Al-fuqaraʾi : pluriel défini de faqīr, génitif. Ce verset développe qui sont les fuqarāʾ évoqués en 2:271. Il s'agit de pauvres d'un type particulier : ceux qui ont tout sacrifié pour la voie de Dieu et ne peuvent plus subvenir à leurs besoins par le travail.",
        axe1_verset: "Li-l-fuqaraʾi alladhīna uḥṣirū = pour les pauvres qui ont été bloqués. L'article défini (al-fuqarāʾ) renvoie aux pauvres mentionnés en 2:271 comme bénéficiaires de l'aumône cachée. Ce verset précise leur profil. La pauvreté n'est pas ici un état passif mais le résultat d'un engagement dans la voie de Dieu.",
        axe2_voisins: "Le verset 9:60 établit une liste de 8 catégories de bénéficiaires de la zakāt, dont al-fuqarāʾ et al-masākīn. Ici 2:273 décrit une sous-catégorie de fuqarāʾ particulièrement méritante : ceux qui sont pauvres par consécration à Dieu. Leur dignité interdit la mendicité.",
        axe3_sourate: "Dans al-Baqarah, les fuqarāʾ apparaissent en 2:177, 2:271, 2:273. La séquence 271-273 crée un portrait précis du bénéficiaire idéal de l'aumône cachée : un pauvre digne et silencieux qu'on doit identifier et aider sans attendre sa demande.",
        axe4_coherence: "La pauvreté coranique (faqr) est une condition matérielle, non un état spirituel. Elle peut être subie (faqr naturel) ou choisie/imposée par l'engagement (faqr fī sabīli llāh). Cette distinction est importante : l'aumône s'adresse à tous les pauvres mais 2:273 valorise particulièrement ceux qui sont pauvres par consécration.",
        axe5_frequence: "Al-fuqarāʾ apparaît environ 13 fois dans le Coran. La fréquence modérée en fait un terme technique pour les bénéficiaires prioritaires de la redistribution. Sa présence en 2:273 après 2:271 crée une continuité thématique forte."
      }
    }
  });

  await insertVWA(verse_id, "h s r", 4, "être bloqué/confiné", {
    sense_chosen: "être bloqué/confiné",
    concept_chosen: "Siège/Confinement",
    concepts: {
      "Siège/Confinement": {
        status: "retenu",
        senses: ["assiéger","confiner","être bloqué","être empêché"],
        proof_ctx: "Uḥṣirū : Form IV passif 3MP accompli de ḥṣr = confiner, bloquer, assiéger. Ils ont été bloqués/confinés dans la voie de Dieu — empêchés de voyager pour subvenir à leurs besoins.",
        axe1_verset: "Uḥṣirū fī sabīli llāhi = ils ont été bloqués dans la voie de Dieu. La Form IV passive indique un état subi : ce n'est pas leur choix d'être pauvres, mais une conséquence de leur engagement dans la voie de Dieu. Le verbe ḥaṣara = assiéger, encercler — ici ils sont encerclés par leur situation.",
        axe2_voisins: "La même racine ḥṣr apparaît en 2:196 (fa-in uḥṣirtum = si vous êtes empêchés) dans le contexte du pèlerinage empêché. La signification est similaire : être empêché d'accomplir ce qu'on voudrait faire. Le verset 9:5 utilise aussi ḥaṣara dans un contexte militaire.",
        axe3_sourate: "Al-Baqarah 2:196 utilise la même Form IV passive pour l'empêchement du pèlerinage. La racine ḥṣr désigne systématiquement une contrainte externe, un encerclement — physique ou circonstanciel. Pour les pauvres de 2:273, c'est leur engagement qui les empêche.",
        axe4_coherence: "L'uḥṣirū fī sabīli llāhi est l'image de personnes entièrement absorbées par leur engagement religieux ou leur service à la cause de Dieu, au point de ne plus pouvoir travailler normalement pour subvenir à leurs besoins. C'est le cas des étudiants en sciences religieuses, des combattants sans ressources, des déplacés pour la foi.",
        axe5_frequence: "La racine ḥṣr apparaît environ 7 fois dans le Coran, principalement dans des contextes de confinement, d'empêchement ou de siège. Sa faible fréquence en fait un terme précis et ciblé."
      }
    }
  });

  await insertVWA(verse_id, "s b l", 6, "voie/chemin de Dieu", {
    sense_chosen: "voie/chemin de Dieu",
    concept_chosen: "Voie/Chemin",
    concepts: {
      "Voie/Chemin": {
        status: "retenu",
        senses: ["chemin","voie","cause (fi sabili)"],
        proof_ctx: "Sabīli llāhi : génitif de sabīl = voie, chemin + génitif allāh. L'expression fī sabīli llāhi = dans la voie de Dieu est un idiome coranique pour désigner l'engagement dans la cause divine.",
        axe1_verset: "Uḥṣirū fī sabīli llāhi = bloqués dans la voie de Dieu. Sabīl est ici une voie d'engagement, de consécration. La formule fī sabīli llāhi est l'une des plus fréquentes du Coran pour qualifier tout acte accompli pour la cause divine.",
        axe2_voisins: "Fī sabīli llāhi est présent en 2:261 (infāq fī sabīli llāhi), en 2:190, en 2:273. La formule est le marqueur universel de l'acte dédié à Dieu. Dans la séquence 261-273, la voie de Dieu est à la fois la direction de la dépense et le contexte de l'engagement des pauvres.",
        axe3_sourate: "Dans al-Baqarah, sabīl est utilisé dans deux sens principaux : voie de Dieu (fī sabīli llāhi = pour la cause divine) et voie vers quelqu'un/quelque chose. La formule fī sabīli llāhi apparaît environ 13 fois dans la sourate seule.",
        axe4_coherence: "La racine sbl = épi pendant (végétation/plante) ; l'épi qui pend suggère une voie tracée, un sillon. Par extension, sabīl = chemin, voie, puis cause. La formule fī sabīli llāhi est devenue un idiome intraduisible par un seul mot : c'est à la fois dans la voie, pour la cause, au nom de Dieu.",
        axe5_frequence: "Fī sabīli llāhi apparaît environ 70 fois dans le Coran. C'est l'une des formules les plus fréquentes. Sa présence dans la séquence 261-273 est constante (2:261, 2:273)."
      },
      "Végétation/Plante": { status: "nul", senses: ["épi pendant"], proof_ctx: "Sens étymologique premier non pertinent dans ce contexte." }
    }
  });

  await insertVWA(verse_id, "t w e", 9, "être capable/pouvoir", {
    sense_chosen: "être capable/pouvoir",
    concept_chosen: "Capacité",
    concepts: {
      "Capacité": {
        status: "retenu",
        senses: ["être capable"],
        proof_ctx: "Yastaṭīʿūna : Form X inaccompli 3MP de ṭwʿ = obéir, puis Form X = pouvoir, être capable. Form X (istaṭāʿa) = avoir la capacité, être en mesure de faire. Lā yastaṭīʿūna ḍarban fī l-arḍ = ils ne peuvent pas voyager sur la terre.",
        axe1_verset: "Lā yastaṭīʿūna ḍarban fī l-arḍ = ils ne peuvent pas se déplacer sur la terre. La Form X istaṭāʿa est le terme standard pour la capacité physique ou matérielle. Leur incapacité à voyager les empêche de travailler — c'est la cause de leur pauvreté.",
        axe2_voisins: "La même Form X apparaît en 2:282 (wa-in kāna alladhī ʿalayhi l-ḥaqqu safīhan aw ḍaʿīfan aw lā yastaṭīʿu an yamilla huwa = si le débiteur est incapable de dicter lui-même). La notion de capacité/incapacité est centrale dans le droit coranique.",
        axe3_sourate: "La Form X istaṭāʿa est le terme technique pour la capacité légale et physique dans la fiqh coranique. Dans al-Baqarah, la notion de capacité conditionne plusieurs obligations : le jeûne (2:184), le pèlerinage implicitement, la dépense (2:286).",
        axe4_coherence: "La Form X de ṭwʿ (obéir) pour signifier pouvoir/capacité est une évolution sémantique intéressante : de l'obéissance volontaire (Form I) à la capacité intrinsèque (Form X). La Form X signifie littéralement se mettre en état d'obéir, d'où la capacité de faire.",
        axe5_frequence: "La Form X istaṭāʿa/yastaṭīʿu apparaît environ 31 fois dans le Coran. Sa fréquence modérée en fait un terme technique spécifique à la capacité humaine conditionnant les obligations légales."
      },
      "Obéissance/Soumission volontaire": { status: "probable", senses: ["obéir","se soumettre"], proof_ctx: "Le sens premier de la racine ṭwʿ est l'obéissance volontaire (ṭāʿa). Ici Form X signifie plutôt la capacité, mais le lien avec l'obéissance — ne pouvoir obéir au commandement de dépenser en voyageant — est pertinent." }
    }
  });

  await insertVWA(verse_id, "d r b", 10, "voyager/se déplacer", {
    sense_chosen: "voyager/se déplacer",
    concept_chosen: "Déplacement",
    concepts: {
      "Déplacement": {
        status: "retenu",
        senses: ["voyager"],
        proof_ctx: "Ḍarban : masdar de ḍrb dans le sens de voyager, se déplacer. L'expression ḍarban fī l-arḍ est un idiome coranique pour le voyage commercial ou de subsistance. ḍrb fī l-arḍ = frapper la terre = marcher, voyager.",
        axe1_verset: "Lā yastaṭīʿūna ḍarban fī l-arḍ = ils ne peuvent pas voyager sur la terre. L'expression ḍarban fī l-arḍ est l'idiome pour le voyage commercial (pour gagner sa vie en marchandant). Ces pauvres sont trop bloqués pour voyager et commercer.",
        axe2_voisins: "La même expression ḍarban fī l-arḍ apparaît en 4:101, 73:20 dans des contextes de voyage. En 4:101 : wa-idhā ḍarabtum fī l-arḍ = lorsque vous voyagez sur la terre. L'idiome est consacré pour le déplacement en vue d'un but.",
        axe3_sourate: "Dans al-Baqarah, le voyage est implicitement associé au commerce (2:198 : laysa ʿalaykum junāḥun an tabtaghū faḍlan min rabbikum = pas de faute à chercher les largesses de votre Seigneur lors du pèlerinage = commerce). Ne pas pouvoir voyager signifie ne pas pouvoir commercer.",
        axe4_coherence: "La racine ḍrb = frapper est l'une des plus polysémiques du Coran : frapper physiquement (châtiment), frapper un exemple (ḍaraba mathalan), voyager (ḍaraba fī l-arḍ = frapper la terre = marcher). Ces sens distincts illustrent la richesse sémantique de l'arabe.",
        axe5_frequence: "La racine ḍrb apparaît environ 58 fois dans le Coran dans ses différents sens. L'idiome ḍaraba fī l-arḍ pour voyager est présent 4-5 fois. Sa polysémie est caractéristique des racines à forte fréquence."
      },
      "Frappe/Coup": { status: "peu_probable", senses: ["frapper"], proof_ctx: "Sens premier de ḍrb, mais ici l'idiome ḍarban fī l-arḍ signifie voyager, non frapper physiquement." },
      "Établissement/Institution": { status: "nul", senses: ["donner un exemple","établir"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "a r d", 12, "terre/sol", {
    sense_chosen: "terre/sol",
    concept_chosen: "Terre/Sol",
    concepts: {
      "Terre/Sol": {
        status: "retenu",
        senses: ["terre","sol","pays","monde d'ici-bas"],
        proof_ctx: "Al-arḍi : génitif défini de arḍ = terre, sol. Dans l'expression ḍarban fī l-arḍ = voyager sur la terre, arḍ désigne la surface terrestre sur laquelle on voyage pour travailler.",
        axe1_verset: "Ḍarban fī l-arḍi = se déplacer sur la terre. Al-arḍ est le lieu du voyage commercial/économique. L'incapacité à se déplacer sur la terre signifie l'incapacité à gagner sa vie par le travail ordinaire.",
        axe2_voisins: "Al-arḍ est omniprésent dans al-Baqarah comme scène de l'action humaine (2:11, 2:22, 2:30, 2:60, etc.). Elle s'oppose systématiquement au ciel (samāwāt) ou à l'au-delà. Ici arḍ = monde de la subsistance, de l'économie.",
        axe3_sourate: "Dans al-Baqarah, arḍ est soit le monde terrestre en général soit la Terre Promise (arḍ muqaddasa). Ici c'est le monde économique du voyage et du commerce.",
        axe4_coherence: "La racine ʾrḍ = être étendu/plat ; arḍ = ce qui est étendu = la terre. C'est l'un des termes fondamentaux de la cosmologie coranique (samāwāt wa-arḍ = cieux et terre). Dans les contextes économiques, arḍ est le lieu du travail humain.",
        axe5_frequence: "Arḍ apparaît environ 461 fois dans le Coran — parmi les plus fréquentes. Sa présence ici est attendue et sans ambiguïté."
      }
    }
  });

  await insertVWA(verse_id, "h s b", 13, "penser/estimer/croire à tort", {
    sense_chosen: "penser/estimer/croire à tort",
    concept_chosen: "Calcul/Estimation",
    concepts: {
      "Calcul/Estimation": {
        status: "retenu",
        senses: ["compter","penser","estimer"],
        proof_ctx: "Yaḥsabuhumu : Form I inaccompli 3MS de ḥsb = calculer, estimer, penser — avec pronom suffixe 3MP = il les croit. Yaḥsabuhumu l-jāhilu aghnīyāʾa = l'ignorant les estime/croit riches.",
        axe1_verset: "Yaḥsabuhumu l-jāhilu aghnīyāʾa = l'ignorant les croit riches. Le ḥasaba ici est une estimation erronée — l'ignorant calcule mal la situation à partir des apparences. Leur dignité (taʿaffuf) est prise pour de la richesse.",
        axe2_voisins: "La même erreur de calcul apparaît en 3:178 : lā yaḥsabanna alladhīna kafarū = que les ingrats ne croient pas... La Form I ḥasiba = penser, estimer est souvent utilisé pour des jugements basés sur des apparences trompeuses.",
        axe3_sourate: "Dans al-Baqarah, l'erreur de calcul (ḥisāb) est un thème moral : les hypocrites pensent tromper Dieu (2:9), les ingrats pensent que le commerce est comme l'usure (2:275). Le ḥasaba erroné de l'ignorant ici reflète l'incapacité à voir la réalité spirituelle.",
        axe4_coherence: "La racine ḥsb = calculer donne ḥisāb = compte rendu, jugement (Jour du Jugement = yawm al-ḥisāb). L'erreur de calcul humain (yaḥsabu) vs la précision du Compte divin (ḥisāb) est un contraste implicite.",
        axe5_frequence: "La racine ḥsb apparaît environ 109 fois dans le Coran. Form I ḥasiba = penser/estimer est fréquente dans des contextes où un personnage se fait une idée erronée de la réalité."
      },
      "Suffisance": { status: "nul", senses: ["suffire"], proof_ctx: "Sens de ḥasb = suffisance (ḥasbunā llāhu = Dieu nous suffit) non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "j h l", 14, "l'ignorant/qui ne sait pas", {
    sense_chosen: "l'ignorant/qui ne sait pas",
    concept_chosen: "Ignorance/Méconnaissance",
    concepts: {
      "Ignorance/Méconnaissance": {
        status: "retenu",
        senses: ["ignorer","être ignorant","agir par ignorance"],
        proof_ctx: "Al-jāhilu : article défini + participe actif Form I de jhl = celui qui ne sait pas, l'ignorant. Al-jāhil est le personnage-type qui juge les apparences sans comprendre la réalité intérieure.",
        axe1_verset: "Yaḥsabuhumu l-jāhilu aghnīyāʾa = l'ignorant les croit riches. Al-jāhil est ici l'observateur extérieur qui ne connaît pas la situation réelle. Sa jahl (ignorance) est morale et spirituelle : il n'est pas initié au secret de la dignité dans la pauvreté.",
        axe2_voisins: "L'opposition jāhil/ʿālim (ignorant/savant) est fondamentale dans le Coran. La jāhiliyya = l'ère de l'ignorance (avant l'islam). L'ignorant de 2:273 illustre ceux qui jugent sur les apparences, à l'opposé de Dieu qui est ʿAlīm (le Savant, pos=34).",
        axe3_sourate: "Dans al-Baqarah, la jahl est surtout morale et spirituelle — les Juifs qui savent mais agissent comme s'ils ne savaient pas (2:146), les hypocrites qui se croient intelligents (2:13). L'ignorant de 2:273 fait une erreur de perception.",
        axe4_coherence: "La paire jāhil (pos=14) / ʿAlīm (pos=34) crée une structure rhétorique du verset : l'ignorant se trompe sur la richesse de ces pauvres ; mais Dieu, Lui, est Savant de tout ce que vous dépensez. Deux connaissances opposées encadrent le verset.",
        axe5_frequence: "La racine jhl apparaît environ 24 fois dans le Coran. Jāhil/jāhilūn est utilisé pour décrire ceux qui agissent par ignorance morale ou spirituelle. La jāhiliyya est un concept théologique majeur."
      }
    }
  });

  await insertVWA(verse_id, "gh n y", 15, "riches/aisés", {
    sense_chosen: "riches/aisés",
    concept_chosen: "Richesse/Autosuffisance",
    concepts: {
      "Richesse/Autosuffisance": {
        status: "retenu",
        senses: ["être riche","se passer de","enrichir"],
        proof_ctx: "Aghnīyāʾa : pluriel de ghanī = riche, aisé. Racine ghny = être riche, se suffire à soi-même. L'ignorant les croit aghnīyāʾa à cause de leur retenue. La dignité de leur comportement est prise pour de la richesse.",
        axe1_verset: "Yaḥsabuhumu l-jāhilu aghnīyāʾa = l'ignorant les croit riches. Aghnīyāʾ est l'opposé de fuqarāʾ (pauvres, pos=2) — les deux termes encadrent la description de ces gens. Leur taʿaffuf (retenue) crée l'illusion de la richesse.",
        axe2_voisins: "Allāhu l-ghanī = Dieu est le Riche par excellence (2:263, 2:267). La richesse divine est absolute (al-Ghanī = le Riche, nom divin). La richesse humaine (aghnīyāʾ) est relative et trompeuse — ici elle est une apparence.",
        axe3_sourate: "Dans al-Baqarah, la richesse (ghinā) est un thème moral : les riches doivent donner (2:177, 2:261-274). Le contraste fuqarāʾ/aghnīyāʾ structure la redistribution. Ici l'apparence de richesse chez des pauvres est une leçon de discernement.",
        axe4_coherence: "La racine ghny = être autosuffisant, n'avoir besoin de personne. Ghanī = celui qui n'a besoin de rien, riche. L'image des pauvres pris pour des riches est une inversion spirituelle : leur véritable richesse est spirituelle (confiance en Dieu) mais invisible à l'ignorant.",
        axe5_frequence: "La racine ghny apparaît environ 69 fois dans le Coran. Aghnīyāʾ (riches) comme contraire de fuqarāʾ apparaît environ 5 fois. La tension richesse/pauvreté est un thème central de l'éthique sociale coranique."
      }
    }
  });

  await insertVWA(verse_id, "e f f", 17, "retenue/pudeur/chasteté", {
    sense_chosen: "retenue/pudeur/chasteté",
    concept_chosen: "Chasteté/Retenue",
    concepts: {
      "Chasteté/Retenue": {
        status: "retenu",
        senses: ["être chaste","s'abstenir","pudeur","être digne"],
        proof_ctx: "At-taʿaffufi : article défini + masdar Form V de ʿff = se retenir, s'abstenir, être chaste. Form V taʿaffafa = pratiquer la retenue, s'abstenir de mendier. At-taʿaffuf = la retenue/pudeur qui empêche de mendier.",
        axe1_verset: "Yaḥsabuhumu l-jāhilu aghnīyāʾa mina t-taʿaffufi = l'ignorant les croit riches à cause de leur retenue. Le taʿaffuf est la dignité qui consiste à ne pas demander même dans le besoin. Cette vertu morale crée l'illusion de la richesse aux yeux de l'ignorant.",
        axe2_voisins: "La même racine ʿff apparaît en 4:6 (wa-man kāna ghaniyyan fa-l-yastaʿfif = celui qui est riche, qu'il s'abstienne) et en 24:33 (wa-l-yastaʿfifi lladhīna lā yajidūna nikāḥan = que ceux qui ne peuvent se marier pratiquent la chasteté). Le taʿaffuf est une vertu recommandée dans des contextes de besoin matériel ou sexuel.",
        axe3_sourate: "Dans al-Baqarah, la dignité face au besoin est valorisée. Le verset 2:273 présente le taʿaffuf comme le signe distinctif des pauvres nobles. Cette dignité les empêche de mendier (lā yasʾalūna, pos=22) et les rend invisibles à l'aide ordinaire.",
        axe4_coherence: "La racine ʿff = être chaste, pur, retenu. Form V taʿaffafa = pratiquer activement la retenue. C'est une forme réflexive intensive : on s'impose soi-même la retenue. La vertu du taʿaffuf s'applique à la fois à la chasteté sexuelle (s'abstenir) et à la dignité économique (s'abstenir de mendier).",
        axe5_frequence: "La racine ʿff apparaît environ 8 fois dans le Coran. Sa fréquence faible en fait un terme précis et valorisé. Le taʿaffuf est mentionné dans des contextes de dignité face au besoin matériel ou physique."
      }
    }
  });

  await insertVWA(verse_id, "e r f", 18, "reconnaître/identifier", {
    sense_chosen: "reconnaître/identifier",
    concept_chosen: "Connaissance/Reconnaissance",
    concepts: {
      "Connaissance/Reconnaissance": {
        status: "retenu",
        senses: ["connaître","reconnaître"],
        proof_ctx: "Taʿrifuhum : Form II inaccompli 2MS de ʿrf = connaître, reconnaître, identifier. Taʿrifuhum bi-sīmāhum = tu les reconnaîtras à leurs signes. La Form II intensifie : tu pourras les identifier clairement.",
        axe1_verset: "Taʿrifuhum bi-sīmāhum = tu les reconnaîtras à leur apparence. Le ʿarafa (Form I) = connaître, reconnaître ; Form II ʿarrafa = faire connaître, identifier clairement. Le sujet (tu) est le donateur averti qui sait lire les signes. C'est une capacité acquise par la connaissance intérieure.",
        axe2_voisins: "La racine ʿrf donne maʿrūf = le bien reconnu, ce qui est conventionnellement bon (2:177, 2:178, 2:228, 2:229, 2:231, 2:232, 2:233, 2:234, 2:236, 2:240, 2:241). Le maʿrūf est présent environ 14 fois dans al-Baqarah seule. La connaissance du bien est un fil directeur.",
        axe3_sourate: "Dans al-Baqarah, la connaissance (ʿilm) et la reconnaissance (maʿrifa) sont des thèmes moraux majeurs. Reconnaître les pauvres dignes est une compétence spirituelle. Elle s'oppose à la jahl (ignorance) de l'observateur qui se trompe.",
        axe4_coherence: "La paire yaḥsabuhumu l-jāhilu aghnīyāʾa (l'ignorant les croit riches) / taʿrifuhum (tu les reconnaîtras) crée un contraste entre fausse connaissance (jahl) et vraie reconnaissance (maʿrifa). Le croyant éclairé peut voir ce que l'ignorant ne voit pas.",
        axe5_frequence: "La racine ʿrf apparaît environ 70 fois dans le Coran. Taʿarafa/ʿarafa dans des contextes de reconnaissance et de connaissance intime est fréquent. Le maʿrūf (le bien reconnu) est l'un des termes éthiques les plus importants."
      },
      "Convention/Usage": { status: "probable", senses: ["coutume","le bien reconnu"], proof_ctx: "La même racine donne maʿrūf = ce qui est reconnu comme bon, la convention. Ici c'est le sens de reconnaissance directe qui prédomine." }
    }
  });

  await insertVWA(verse_id, "s w m", 20, "signe visible/marque", {
    sense_chosen: "signe visible/marque",
    concept_chosen: "Pâturage/Parcours",
    concepts: {
      "Pâturage/Parcours": {
        status: "peu_probable",
        senses: ["faire paître"],
        proof_ctx: "Sens premier de la racine swm non pertinent pour sīmā = signe/marque visible."
      },
      "Envoi/Direction": {
        status: "peu_probable",
        senses: ["lancer (une attaque)"],
        proof_ctx: "Sens de swm comme envoi/direction non pertinent pour sīmā."
      },
      "Sens isolé/Marquer": {
        status: "retenu",
        senses: ["marquer"],
        proof_ctx: "Sīmāhum : pluriel de sīmā/sīmāʾ = signe distinctif, marque visible. Dérivé de sawm = marquer (comme on marque le bétail). Bi-sīmāhum = à leur marque/apparence distincte.",
        axe1_verset: "Taʿrifuhum bi-sīmāhum = tu les reconnaîtras à leurs marques visibles. Sīmā (aussi sīmāʾ) désigne les signes physiques visibles qui distinguent une personne. Pour ces pauvres, c'est probablement les marques de l'ascèse, les habits usés, un certain air de dignité mêlée de dénuement.",
        axe2_voisins: "Le mot sīmā apparaît en 48:29 (sīmāhum fī wujūhihim = leur marque sur leurs visages) dans le contexte des croyants dont la prière a laissé des marques. En 7:46-48 (ʿalā l-aʿrāfi rijālun yaʿrifūna kullan bi-sīmāhum = des hommes reconnaissent chacun à ses marques). Sīmā est le signe de reconnaissance.",
        axe3_sourate: "Dans al-Baqarah, l'apparence extérieure est un signe de l'état intérieur : les hypocrites ont un discours trompeur (2:8-16), les gens du Livre sont reconnaissables (2:146). La sīmā des pauvres dignes de 2:273 est un signe de leur état réel.",
        axe4_coherence: "La sīmā est une marque involontaire, contrairement au tatouage ou au symbole délibéré. C'est la trace que laissent les conditions de vie sur l'apparence physique. Reconnaître les pauvres à leur sīmā nécessite un regard formé, une maʿrifa intérieure.",
        axe5_frequence: "Sīmā/sīmāʾ apparaît environ 5 fois dans le Coran. Sa faible fréquence en fait un terme précis pour les signes distinctifs visibles."
      }
    }
  });

  await insertVWA(verse_id, "s a l", 22, "mendier/demander", {
    sense_chosen: "mendier/demander",
    concept_chosen: "Mendicité",
    concepts: {
      "Mendicité": {
        status: "retenu",
        senses: ["mendier"],
        proof_ctx: "Yasʾalūna : Form I inaccompli 3MP de sʾl = demander, questionner. Lā yasʾalūna an-nāsa ilḥāfan = ils ne demandent pas aux gens avec insistance. Dans ce contexte de pauvres et d'aumônes, sʾl = mendier, quémander.",
        axe1_verset: "Lā yasʾalūna an-nāsa ilḥāfan = ils ne mendient pas les gens avec insistance. La négation lā + yasʾalūna confirme que ces pauvres ont la dignité de ne pas demander. C'est la preuve concrète de leur taʿaffuf. Le ilḥāfan souligne qu'ils ne mendient pas même avec insistance — c'est-à-dire pas du tout.",
        axe2_voisins: "Le verset 93:10 dit wa-ammā s-sāʾila fa-lā tanha = quant au demandeur, ne le repousse pas. La distinction entre le sāʾil (mendiant) et le non-sāʾil (digne) est importante dans l'éthique coranique.",
        axe3_sourate: "Dans al-Baqarah, la demande (suʾāl) peut être positive (suʾāl de Dieu en 2:186) ou négative (mendier indûment). Ici lā yasʾalūna renforce le portrait d'une pauvreté digne et silencieuse.",
        axe4_coherence: "La double dignité de ces pauvres : d'abord leur taʿaffuf (retenue) les rend invisibles aux yeux de l'ignorant ; ensuite leur refus de mendier (lā yasʾalūna) confirme cette dignité. Ce portrait correspond à l'ideal islamique du faqīr digne.",
        axe5_frequence: "La racine sʾl apparaît environ 129 fois dans le Coran dans ses sens de demander/questionner/mendier. Le sens de mendicité est moins fréquent mais important dans les contextes caritatifs."
      },
      "Demande/Question": { status: "probable", senses: ["demander","questionner","interroger"], proof_ctx: "Le sens premier de sʾl est demander/questionner. Dans ce contexte, c'est la mendicité qui est visée mais la racine couvre les deux sens." }
    }
  });

  await insertVWA(verse_id, "n w s", 23, "les gens/l'humanité", {
    sense_chosen: "les gens/l'humanité",
    concept_chosen: "Humanité/Peuple",
    concepts: {
      "Humanité/Peuple": {
        status: "retenu",
        senses: ["gens","humanité","peuple"],
        proof_ctx: "An-nāsa : accusatif défini de nās = les gens, les hommes. Lā yasʾalūna an-nāsa = ils ne mendient pas les gens (l'humanité en général).",
        axe1_verset: "Lā yasʾalūna an-nāsa ilḥāfan = ils ne demandent pas aux gens avec insistance. An-nās désigne l'ensemble des gens — ils n'interpellent personne, ne font pas appel à la charité publique. Leur dignité est totale face à toute l'humanité.",
        axe2_voisins: "An-nās dans al-Baqarah est l'humanité collective destinataire des lois divines (2:21 : yā ayyuhā n-nāsu = ô gens), le public devant lequel on ne doit pas faire parade (2:264), les gens qu'on ne doit pas léser (2:188).",
        axe3_sourate: "Al-nās dans al-Baqarah est soit l'humanité en général (destinataires du message) soit les gens en tant que public social. Ici c'est le second sens : ne pas mendier face aux gens = ne pas exposer sa misère publiquement.",
        axe4_coherence: "La paire sīmāhum (marques visibles pour le regard attentif) / lā yasʾalūna an-nāsa (ne mendient pas les gens) est une double discrétion : leur pauvreté est visible seulement à qui sait voir, et ils ne la déclarent pas verbalement.",
        axe5_frequence: "An-nās apparaît environ 241 fois dans le Coran — l'une des plus fréquentes. C'est le terme général pour l'humanité."
      }
    }
  });

  await insertVWA(verse_id, "l h f", 24, "avec insistance/importuner", {
    sense_chosen: "avec insistance/importuner",
    concept_chosen: "Insistance/Excès",
    concepts: {
      "Insistance/Excès": {
        status: "retenu",
        senses: ["insister dans la demande","presser"],
        proof_ctx: "Ilḥāfan : masdar de alḥafa = insister, presser dans la demande. Lā yasʾalūna an-nāsa ilḥāfan = ils ne demandent pas aux gens avec insistance pressante. Le ilḥāf = couvrir quelqu'un de demandes, harceler.",
        axe1_verset: "Lā yasʾalūna an-nāsa ilḥāfan = ils ne mendient pas les gens avec insistance. Le ilḥāfan est le complément de manière : si déjà ils ne mendient pas du tout (lā yasʾalūna), à plus forte raison ne le font-ils pas avec insistance. Le ilḥāf est la forme la plus problématique de la mendicité.",
        axe2_voisins: "Le ilḥāf (insistance dans la demande) est explicitement mentionné ici comme la pratique que ces pauvres évitent. Par contraste, le verset 2:186 dit falyastajibu lī = qu'ils me répondent quand Je les appelle — Dieu ne repousse pas la demande sincère.",
        axe3_sourate: "Dans al-Baqarah, la dignité face au besoin est une valeur. L'ilḥāf serait une forme d'abaissement devant les hommes au lieu de se tourner vers Dieu. Le portrait de 2:273 est celui d'une foi totale : pas besoin de quémander aux hommes quand on fait confiance à Dieu.",
        axe4_coherence: "La racine lhf = couvrir (couverture) → ilḥāf = couvrir quelqu'un de demandes = harceler, importuner. La métaphore est celle de quelqu'un qui couvre de requêtes son interlocuteur. C'est la forme extreme de la mendicité.",
        axe5_frequence: "La racine lhf apparaît 3 fois dans le Coran. Sa rareté en fait un terme précis pour une pratique spécifique — la mendicité insistante et importune."
      }
    }
  });

  await insertVWA(verse_id, "n f q", 27, "dépenser/faire l'aumône", {
    sense_chosen: "dépenser/faire l'aumône",
    concept_chosen: "Dépense/Don",
    concepts: {
      "Dépense/Don": {
        status: "retenu",
        senses: ["dépenser","faire l'aumône","subvenir"],
        proof_ctx: "Tunfiqū : Form IV 2MP subjonctif de nfq. Wa-mā tunfiqū min khayrin fa-inna llāha bihi ʿAlīmun = tout ce que vous dépensez en bien, Dieu en est Savant. Clôture classique qui renvoie au donateur.",
        axe1_verset: "Wa-mā tunfiqū min khayrin fa-inna llāha bihi ʿAlīmun = ce que vous dépensez en bien, Dieu en est Savant. Après avoir décrit le bénéficiaire idéal (le pauvre digne), le verset rappelle au donateur que Dieu connaît sa dépense. L'aumône faite en connaissance de qui mérite reçoit une validation divine.",
        axe2_voisins: "La formule tunfiqū + ʿAlīmun est parallèle à 2:271 (taʿmalūna + khabīrun) et 2:272 (tunfiqū + yuwaffa). Les trois versets 271-273 clôturent sur un rappel de la conscience divine de la dépense.",
        axe3_sourate: "Dans la séquence 271-273, chaque verset sur la dépense se termine par un attribut divin de connaissance. Dieu est khabīrun (271), Dieu rendra intégralement (272), Dieu est ʿAlīmun (273). Cette progression constitue une garantie progressive de la récompense.",
        axe4_coherence: "La Form IV de n f q dans ce verset (n f q = nfq avec espaces = id=1192) désigne la dépense charitable au sens de Dépense/Don. C'est un acte de générosité délibéré envers les pauvres décrits.",
        axe5_frequence: "La répétition de tunfiqū aux positions 12 (V272) et 27 (V273) crée un fil directeur thématique entre les deux versets. La clôture avec ʿAlīmun confirme que la dépense est connue de Dieu."
      },
      "Passage souterrain": { status: "nul", senses: ["tunnel"], proof_ctx: "Non pertinent ici." },
      "Dissimulation": { status: "nul", senses: ["hypocrisie"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "kh y r", 29, "bien/bonté", {
    sense_chosen: "bien/bonté",
    concept_chosen: "Bien/Bonté",
    concepts: {
      "Bien/Bonté": {
        status: "retenu",
        senses: ["être bon","bien","meilleur"],
        proof_ctx: "Khayrin : génitif indéfini de khayr = bien. Min khayrin = en bien, tout ce qui est de l'ordre du bien. C'est la même formule que 2:272 pos=14 et 28 mais avec la clé kh y r (id=1176) distincte de khyr (id=727).",
        axe1_verset: "Wa-mā tunfiqū min khayrin = ce que vous dépensez en bien. La troisième répétition de cette formule dans la séquence 271-273 (2:272 × 2, 2:273) crée une insistance rhétorique. La formule est désormais un refrain qui unit les trois versets.",
        axe2_voisins: "La formule min khayrin est utilisée systématiquement pour qualifier la dépense méritoire. Elle ne précise pas la nature du bien — argent, temps, services — laissant la porte ouverte à toute forme de générosité.",
        axe3_sourate: "Khayr dans al-Baqarah est à la fois la bonté morale et les biens matériels. Min khayrin = en bien = tout ce qui est bon et utile. La formule est générique mais valorisante.",
        axe4_coherence: "La différence entre khyr (id=727) et kh y r (id=1176) reflète deux entrées distinctes dans la BDD pour la même racine. Le sens reste identique : Bien/Excellence ou Bien/Bonté — les deux facettes du khayr coranique.",
        axe5_frequence: "La formule min khayrin apparaît environ 7 fois dans le Coran dans des contextes de dépense charitable. Elle est un marqueur des enseignements caritatifs."
      },
      "Choix/Préférence": { status: "peu_probable", senses: ["choisir","préférer"], proof_ctx: "Sens de khayr comme choix/préférence (ikhtiyār) est une extension secondaire non pertinente ici." }
    }
  });

  await insertVWA(verse_id, "e l m", 34, "savant/omniscient", {
    sense_chosen: "savant/omniscient",
    concept_chosen: "Connaissance/Science",
    concepts: {
      "Connaissance/Science": {
        status: "retenu",
        senses: ["savoir","connaître","science"],
        proof_ctx: "ʿAlīmun : adjectif intensif de ʿlm = savoir. Fa-inna llāha bihi ʿAlīmun = certes Dieu est Savant de cela. ʿAlīm désigne la connaissance totale, incluant ce qui est caché et ce qui est manifeste.",
        axe1_verset: "Fa-inna llāha bihi ʿAlīmun = Dieu est Savant de ce que vous dépensez. La clôture avec ʿAlīmun apporte une double garantie : Dieu connaît la pauvreté des destinataires (vu leur discrétion) et Il connaît la dépense du donateur. Cette omniscience est rassurante.",
        axe2_voisins: "Le triplet de clôtures des versets 271-273 : khabīrun (informé des détails), yuwaffa (rendu intégralement), ʿAlīmun (savant de tout). Ces trois attributs/promesses progressent du détail (khabīr) à la récompense totale (yuwaffa) à la connaissance absolue (ʿAlīm).",
        axe3_sourate: "ʿAlīm est l'attribut divin de la connaissance absolue, présent environ 157 fois dans le Coran. Il clôt systématiquement des versets où l'action humaine — visible ou cachée — est rappelée à la conscience divine.",
        axe4_coherence: "La paire jāhil (l'ignorant humain, pos=14) / ʿAlīm (Dieu l'Omniscient, pos=34) crée une opposition structurelle dans le verset : l'ignorant humain se trompe sur la richesse des pauvres ; Dieu l'Omniscient sait tout. Cette opposition est aussi une invitation au discernement.",
        axe5_frequence: "ʿAlīm comme attribut divin apparaît environ 157 fois dans le Coran. Sa fréquence élevée en fait l'un des attributs divins les plus importants. Il est systématiquement associé à la connaissance de toutes les actions humaines."
      }
    }
  });
}

// ============================================================
// VERSET 2:274  verse_id=281  analysis_id=637
// ============================================================
async function processVerse274() {
  console.log('\n=== 2:274 ===');
  const verse_id = 281;
  const analysis_id = 637;

  const translation_arab = "Ceux qui dépensent leurs biens de nuit comme de jour, en secret comme en public, ont leur récompense auprès de leur Seigneur. Ils n'auront aucune crainte et ils ne seront pas affligés.";
  const full_translation = "Ceux qui dépensent leurs biens de nuit comme de jour, en secret comme en public, ont leur récompense auprès de leur Seigneur. Ils n'auront aucune crainte et ils ne seront pas affligés.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:274 est le dernier de la séquence sur la dépense charitable avant de passer à l'usure. Il décrit la générosité idéale : en toutes circonstances, sans restriction de temps ou de mode. Yunfiqūna (pos=2) Form IV inaccompli 3MP de nfq. Amwālahum (pos=3) = leurs biens. Bi-l-layli (pos=5) = de nuit, ba + article + layl. Wa-n-nahāri (pos=7) = et de jour. Sirran (pos=8) = en secret, masdar de srr utilisé comme adverbe. Wa-ʿalāniyatan (pos=10) = et en public, masdar de ʿln. Fa-lahum ajruhum (pos=11-13) = ils ont leur récompense, fa de conséquence. ʿInda rabbihim (pos=14-15) = auprès de leur Seigneur. Wa-lā khawfun ʿalayhim (pos=16-18) = et aucune crainte sur eux. Wa-lā hum yaḥzanūna (pos=19-21) = et ils ne seront pas attristés.

§JUSTIFICATION§
Amwālahum traduit par "leurs biens" : amwāl = pluriel de māl = biens, richesses — "leurs biens" est exact. Al-layli traduit par "de nuit" : layl = nuit — "de nuit" est idiomatique. Sirran traduit par "en secret" : sirr = secret, caché — "en secret" est juste. ʿAlāniyatan traduit par "en public" : ʿalāna = manifester publiquement — "en public" est exact. Ajruhum traduit par "leur récompense" : ajr = salaire, récompense — "récompense" est le sens spirituel approprié. Rabbihim traduit par "leur Seigneur" : rabb = seigneur, maître éducateur — "Seigneur" est l'équivalent français consacré. Khawfun traduit par "crainte" : khwf = peur, craindre — "crainte" est juste. Yaḥzanūna traduit par "seront affligés" : hzn = être triste, s'affliger — "seront affligés" rend le sens d'une tristesse profonde.

§CRITIQUE§
Hamidullah traduit amwālahum par "leurs biens" — accord. Hamidullah dit "nuit et jour, en secret et en public" — nous disons "de nuit comme de jour, en secret comme en public" pour marquer la temporalité et le mode. Hamidullah traduit ajruhum ʿinda rabbihim par "leur récompense est auprès de leur Seigneur" — accord. Sur la formule finale (lā khawfun... lā hum yaḥzanūna), Hamidullah dit "n'auront rien à craindre et ne seront pas attristés" — nous sommes en accord.`;

  const segments = [
    { position: 1, text_arab: "ٱلَّذِينَ", phonetic: "alladhīna", translation: "Ceux qui", grammar_type: "particle" },
    { position: 2, text_arab: "يُنفِقُونَ", phonetic: "yunfiqūna", translation: "dépensent", grammar_type: "verb", root_key: "nfq" },
    { position: 3, text_arab: "أَمْوَالَهُم", phonetic: "amwālahum", translation: "leurs biens", grammar_type: "noun", root_key: "mlk" },
    { position: 4, text_arab: "بِ", phonetic: "bi", translation: "de", grammar_type: "particle" },
    { position: 5, text_arab: "ٱلَّيْلِ", phonetic: "al-layli", translation: "nuit", grammar_type: "noun", root_key: "lyl" },
    { position: 6, text_arab: "وَ", phonetic: "wa", translation: "et de", grammar_type: "particle" },
    { position: 7, text_arab: "ٱلنَّهَارِ", phonetic: "an-nahāri", translation: "jour,", grammar_type: "noun", root_key: "nhr" },
    { position: 8, text_arab: "سِرًّا", phonetic: "sirran", translation: "en secret", grammar_type: "noun", root_key: "srr" },
    { position: 9, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 10, text_arab: "عَلَانِيَةً", phonetic: "ʿalāniyatan", translation: "en public,", grammar_type: "noun", root_key: "eln" },
    { position: 11, text_arab: "فَ", phonetic: "fa", translation: "ont", grammar_type: "particle" },
    { position: 12, text_arab: "لَهُمْ", phonetic: "lahum", translation: "pour eux", grammar_type: "particle" },
    { position: 13, text_arab: "أَجْرُهُمْ", phonetic: "ajruhum", translation: "leur récompense", grammar_type: "noun", root_key: "ajr" },
    { position: 14, text_arab: "عِندَ", phonetic: "ʿinda", translation: "auprès de", grammar_type: "noun", root_key: "end" },
    { position: 15, text_arab: "رَبِّهِمْ", phonetic: "rabbihim", translation: "leur Seigneur.", grammar_type: "noun", root_key: "rbb" },
    { position: 16, text_arab: "وَلَا", phonetic: "wa-lā", translation: "Ils n'auront aucune", grammar_type: "particle" },
    { position: 17, text_arab: "خَوْفٌ", phonetic: "khawfun", translation: "crainte", grammar_type: "noun", root_key: "khw" },
    { position: 18, text_arab: "عَلَيْهِمْ", phonetic: "ʿalayhim", translation: "sur eux", grammar_type: "particle" },
    { position: 19, text_arab: "وَلَا", phonetic: "wa-lā", translation: "et ils ne seront pas", grammar_type: "particle" },
    { position: 20, text_arab: "هُمْ", phonetic: "hum", translation: "eux", grammar_type: "particle" },
    { position: 21, text_arab: "يَحْزَنُونَ", phonetic: "yaḥzanūna", translation: "affligés.", grammar_type: "verb", root_key: "hzn" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "nfq", 2, "dépenser ses biens", {
    sense_chosen: "dépenser ses biens",
    concept_chosen: "Dépense/Distribution",
    concepts: {
      "Dépense/Distribution": {
        status: "retenu",
        senses: ["dépenser","distribuer","s'épuiser"],
        proof_ctx: "Yunfiqūna : Form IV inaccompli 3MP de nfq = dépenser. C'est la forme habituelle qui décrit une pratique régulière (inaccompli = action en cours, habituelle). Ces gens-là ont pour habitude de dépenser.",
        axe1_verset: "Yunfiqūna amwālahum bi-l-layli wa-n-nahāri sirran wa-ʿalāniyatan = ils dépensent leurs biens de nuit et de jour, en secret et en public. La quatrième paire d'opposés (nuit/jour + secret/public) indique une générosité absolument sans limite : en tout temps et en tout mode.",
        axe2_voisins: "Ce verset clôt la séquence 261-274 sur la dépense. Il décrit le modèle parfait du donateur après avoir décrit les conditions (2:261), les dangers (2:262-264), les exceptions (2:265-266), les modalités (2:271-273). Le donateur idéal ne connaît aucune limite de temps ou de mode.",
        axe3_sourate: "La séquence nfq de 2:261 à 2:274 est la plus longue développée sur un seul thème dans al-Baqarah. Elle culmine avec ce portrait du donateur idéal qui n'a aucune contrainte de moment ou de forme. Après 2:274, al-Baqarah passe à l'usure, opposé exact de la générosité.",
        axe4_coherence: "La Form IV yunfiqūna (ils dépensent) décrit une pratique habituelle et continue — ce n'est pas un don occasionnel mais un état d'être. Ces gens ont intégré la générosité comme mode de vie.",
        axe5_frequence: "Yunfiqūna dans la séquence 261-274 est un refrain. Sa récurrence dans al-Baqarah (au moins 15 occurrences dans cette sourate seule) crée un thème dominant."
      }
    }
  });

  await insertVWA(verse_id, "mlk", 3, "leurs biens/possessions", {
    sense_chosen: "leurs biens/possessions",
    concept_chosen: "Possession/Autorité",
    concepts: {
      "Possession/Autorité": {
        status: "retenu",
        senses: ["posséder","maître","possesseur","propriété","biens","esclave","asservir"],
        proof_ctx: "Amwālahum : pluriel de māl + suffixe 3MP = leurs biens. Le segment est codé avec la clé 'mlk' (possession). Bien que la racine de māl soit mwl (richesse), la clé assignée dans la DB est mlk — ce qui renvoie au concept de Possession/Autorité.",
        axe1_verset: "Yunfiqūna amwālahum = ils dépensent leurs biens. Amwālahum est le complément direct de yunfiqūna. Les amwāl sont ce qui peut être dépensé : argent, biens, ressources. Le suffixe -hum = leurs souligne que c'est leur propriété propre qu'ils cèdent.",
        axe2_voisins: "Amwālahum revient en 2:261, 2:262, 2:265. La formule yunfiqūna amwālahum est récurrente. Ces biens sont la matière première de la générosité coranique.",
        axe3_sourate: "Dans al-Baqarah, amwāl = biens est présent dans tous les contextes économiques : dépense (2:261-274), usure (2:275-280), successions (2:180), testaments. Les amwāl sont la ressource humaine centrale du droit économique coranique.",
        axe4_coherence: "La racine mlk = posséder, maîtriser. Amwāl vient de mwl = richesse — deux racines distinctes. L'assignation de 'mlk' comme clé dans ce segment reflète le sens de possession. Le concept de Possession/Autorité capture bien la relation propriétaire-biens.",
        axe5_frequence: "Amwāl (pluriel de māl) apparaît environ 86 fois dans le Coran. C'est le terme standard pour les biens matériels dans tous les contextes économiques et caritatifs."
      }
    }
  });

  await insertVWA(verse_id, "lyl", 5, "de nuit/la nuit", {
    sense_chosen: "de nuit/la nuit",
    concept_chosen: "Nuit/Obscurité",
    concepts: {
      "Nuit/Obscurité": {
        status: "retenu",
        senses: ["nuit","obscurité","ténèbres"],
        proof_ctx: "Al-layli : génitif défini de layl = la nuit. Bi-l-layli = de nuit. La paire bi-l-layli wa-n-nahāri (de nuit et de jour) exprime la totalité temporelle.",
        axe1_verset: "Bi-l-layli wa-n-nahāri = de nuit et de jour. La nuit précède le jour dans cette formule — peut-être pour souligner que la générosité nocturne (plus discrète, cf. 2:271 tukhfūhā) est au moins aussi importante que la diurne. La paire nuit/jour couvre tout le temps.",
        axe2_voisins: "La paire layl/nahār (nuit/jour) est une formule de totalité temporelle dans le Coran (3:27, 10:6, 23:80, etc.). Ici elle qualifie la générosité permanente. En 3:190, layl/nahār est signe de la création divine.",
        axe3_sourate: "Dans al-Baqarah, layl apparaît dans des contextes variés : nuit de jeûne du Ramadan (2:187), nuit comme moment de prière. Ici la nuit est le moment de la générosité discrète, en parallèle avec sirran (en secret).",
        axe4_coherence: "La nuit (layl) est le symbole de la discrétion : la dépense nocturne est naturellement plus cachée que la diurne. Son association avec sirran (en secret) renforce ce parallèle. La totalité de la vie (nuit + jour) est consacrée à la générosité.",
        axe5_frequence: "Layl apparaît environ 92 fois dans le Coran. La paire layl/nahār est un idiome de la totalité temporelle. Sa présence ici est attendue dans un contexte de générosité sans limite."
      }
    }
  });

  await insertVWA(verse_id, "nhr", 7, "de jour/le jour", {
    sense_chosen: "de jour/le jour",
    concept_chosen: "Clarté/Jour",
    concepts: {
      "Clarté/Jour": {
        status: "retenu",
        senses: ["jour","clarté"],
        proof_ctx: "An-nahāri : génitif défini de nahār = le jour, la clarté. Wa-n-nahāri = et de jour. La paire layl/nahār couvre tout le temps. Nahār est le jour dans sa dimension de clarté et d'activité.",
        axe1_verset: "Bi-l-layli wa-n-nahāri = de nuit et de jour. An-nahār est le pendant diurne du layl. La générosité du jour est plus visible (ʿalāniyatan) et peut encourager les autres. La totalité temporelle layl/nahār indique une générosité permanente.",
        axe2_voisins: "La paire layl/nahār est fréquente dans le Coran pour exprimer la totalité du temps. En 2:274, sirran (nuit) / ʿalāniyatan (jour) sont une paire parallèle qui renforce la totalité modale.",
        axe3_sourate: "Nahār dans al-Baqarah est principalement présent dans des contextes de temporalité : jeûne du jour (2:187), nuit/jour de la création (2:164). Ici il qualifie la générosité continue.",
        axe4_coherence: "La racine nhr = couler abondamment (eau), puis clarté, jour. Le nahār est le temps de clarté et d'abondance. La générosité diurne (publique, en clarté) complète la nocturne (secrète, discrète). Les deux ensemble forment la générosité parfaite.",
        axe5_frequence: "Nahār apparaît environ 57 fois dans le Coran. La paire layl/nahār est sa forme d'apparition la plus fréquente. Son emploi ici est standard."
      }
    }
  });

  await insertVWA(verse_id, "srr", 8, "en secret/secrètement", {
    sense_chosen: "en secret/secrètement",
    concept_chosen: "Caché/Intime",
    concepts: {
      "Caché/Intime": {
        status: "retenu",
        senses: ["secret"],
        proof_ctx: "Sirran : masdar/adverbe de srr = secret, intime. Sirran wa-ʿalāniyatan = en secret et en public. Sirran est le mode caché de la dépense.",
        axe1_verset: "Sirran wa-ʿalāniyatan = en secret et en public. La paire modal sirr/ʿalāna (caché/manifeste) complète la paire temporelle layl/nahār. En secret renvoie naturellement à la nuit et au cœur de la piété intérieure ; en public renvoie au jour et à l'encouragement social.",
        axe2_voisins: "Sirran wa-ʿalāniyatan est une formule récurrente dans le Coran (13:22, 14:31, 35:29). Elle décrit toujours une pratique totale, sans restriction de mode. En 2:274, elle s'applique à la générosité idéale.",
        axe3_sourate: "Dans al-Baqarah, l'opposition sirr/ʿalāna est présente dans plusieurs contextes. En 2:271, le don caché (tukhfūhā) est préféré au manifeste (tubdū). Ici 2:274 dit que les deux modes sont valables — la supériorité du secret ne signifie pas l'interdiction du public.",
        axe4_coherence: "La racine srr = se réjouir secrètement, puis secret. Sirr = secret, intimité, intérieur. La générosité sirran = en secret est la générosité dont l'intention est pure : personne ne voit sauf Dieu.",
        axe5_frequence: "Sirran wa-ʿalāniyatan comme formule de totalité modale apparaît environ 5 fois dans le Coran. Sa fréquence modérée en fait une formule consacrée pour exprimer la pratique sans restriction."
      },
      "Joie/Plaisir": { status: "nul", senses: ["réjouir","plaire"], proof_ctx: "Sens étymologique de srr = se réjouir, non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "eln", 10, "en public/ouvertement", {
    sense_chosen: "en public/ouvertement",
    concept_chosen: "Manifestation/Publicité",
    concepts: {
      "Manifestation/Publicité": {
        status: "retenu",
        senses: ["manifester","public","déclarer"],
        proof_ctx: "ʿAlāniyatan : masdar/adverbe de ʿln = rendre public, manifester. Wa-ʿalāniyatan = et en public. S'oppose à sirran (en secret) dans la paire qui exprime la totalité modale.",
        axe1_verset: "Sirran wa-ʿalāniyatan = en secret et en public. ʿAlāniyatan est l'acte de dépense qui n'est pas caché, qui peut être vu. La générosité publique a une valeur sociale : elle montre l'exemple et encourage les autres à donner.",
        axe2_voisins: "La même paire sirran wa-ʿalāniyatan en 13:22 (pour les gens de bonté), 14:31 (pour les croyants qui prient et dépensent), 35:29. Dans tous ces contextes, la paire indique une pratique totale et constante.",
        axe3_sourate: "Dans al-Baqarah, la dépense publique était présente en 2:264 (à ne pas faire par ostentation = mannun wa-adhā) mais ici en 2:274 elle est acceptée car non ostentatoire. La différence est l'intention : ostentation vs exemplarité.",
        axe4_coherence: "La racine ʿln = être haut, visible, public. ʿAlāniyatan désigne ce qui est fait ouvertement, visible à tous. Contrairement à la dépense ostentation de 2:264, ici elle est valorisée car accompagnant une générosité secrète également.",
        axe5_frequence: "La racine ʿln dans ses formes adverbiales (sirran wa-ʿalāniyatan) apparaît environ 5 fois dans le Coran. C'est une formule stylistique consacrée pour la totalité de la pratique."
      }
    }
  });

  await insertVWA(verse_id, "ajr", 13, "leur récompense/salaire", {
    sense_chosen: "leur récompense/salaire",
    concept_chosen: "Rétribution/Salaire",
    concepts: {
      "Rétribution/Salaire": {
        status: "retenu",
        senses: ["récompense","salaire","rémunération","dot"],
        proof_ctx: "Ajruhum : ajr + suffixe 3MP = leur récompense. Fa-lahum ajruhum ʿinda rabbihim = ils ont leur récompense auprès de leur Seigneur. Le fa de conséquence introduit la récompense promise.",
        axe1_verset: "Fa-lahum ajruhum ʿinda rabbihim = alors ils ont leur récompense auprès de leur Seigneur. L'ajr est la récompense méritée, le salaire spirituel. Le fa de conséquence = comme résultat direct de leur générosité sans limite. L'ajr est ici ʿinda rabbihim = auprès du Seigneur — il n'est pas précisé mais il est garanti.",
        axe2_voisins: "La formule fa-lahum ajruhum ʿinda rabbihim revient en 2:277, 3:136, 3:172. C'est la promesse standard de la récompense divine pour les croyants fidèles. Sa présence ici clôt la séquence des donateurs (261-274) avec une promesse de rémunération.",
        axe3_sourate: "L'ajr dans al-Baqarah est la récompense eschatologique des bonnes actions. Ici ajruhum est indéfini — Dieu détermine sa nature et son ampleur. La confiance dans la générosité divine de la récompense est implicite.",
        axe4_coherence: "La racine ʾjr = salaire, loyer, dot. L'ajr est une rémunération méritée pour un service rendu. Appliqué à la générosité, il confirme que le don n'est pas une perte mais un investissement rémunéré. La logique économique est retournée : donner = recevoir une récompense.",
        axe5_frequence: "Ajr apparaît environ 107 fois dans le Coran. C'est le terme standard pour la récompense divine. Sa fréquence dans al-Baqarah est élevée dans les contextes d'actions méritoires."
      }
    }
  });

  await insertVWA(verse_id, "end", 14, "auprès de/chez", {
    sense_chosen: "auprès de/chez",
    concept_chosen: "Proximité/Présence",
    concepts: {
      "Proximité/Présence": {
        status: "retenu",
        senses: ["auprès de","chez","près de"],
        proof_ctx: "ʿInda : préposition/adverbe de proximité = auprès de, chez. ʿInda rabbihim = auprès de leur Seigneur. La récompense est ʿinda llāh = en la présence de Dieu, garantie par Sa proximité.",
        axe1_verset: "Fa-lahum ajruhum ʿinda rabbihim = leur récompense est auprès de leur Seigneur. ʿInda rabbihim signifie que la récompense est en la garde de Dieu, en Sa présence. C'est une garantie absolue : ce que Dieu garde ne peut être perdu.",
        axe2_voisins: "La formule ajruhum ʿinda rabbihim est standard dans al-Baqarah (2:262, 2:274, 2:277). ʿInda llāh = auprès de Dieu est une expression récurrente pour tout ce qui est garanti et permanent.",
        axe3_sourate: "Dans al-Baqarah, ʿinda llāh désigne à la fois la présence divine (la récompense y est stockée) et la supériorité qualitative de ce qui est divin sur ce qui est humain (2:54, 2:103).",
        axe4_coherence: "ʿInda = auprès de, chez, en la présence de. Ce n'est pas seulement une localisation spatiale mais une indication de sécurité et de garantie. La récompense ʿinda rabbihim ne peut pas être perdue ou diminuée.",
        axe5_frequence: "ʿInda apparaît environ 189 fois dans le Coran. Sa fréquence élevée dans des formules de garantie divine (ʿinda llāh, ʿinda rabbihim) en fait un marqueur de sécurité eschatologique."
      }
    }
  });

  await insertVWA(verse_id, "rbb", 15, "leur Seigneur", {
    sense_chosen: "leur Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur","maître","propriétaire","celui qui élève","celui qui entretient","celui qui possède","gouverner"],
        proof_ctx: "Rabbihim : rabb + suffixe 3MP = leur Seigneur. Rabb désigne Dieu dans Sa relation d'autorité bienveillante — Il élève, nourrit, administre Ses créatures. C'est l'attribut divin qui garantit la récompense.",
        axe1_verset: "ʿInda rabbihim = auprès de leur Seigneur. Le rabb est Celui qui prend soin de Ses sujets, Celui qui les élève. La récompense est entre les mains du rabb — non comme un trésorier froid mais comme un seigneur bienveillant qui récompense ceux qui ont bien agi.",
        axe2_voisins: "Rabbihim apparaît dans la même formule en 2:262, 2:274, 2:277. C'est une constante dans les promesses de récompense. Le rabb est toujours le garant de la rémunération promise.",
        axe3_sourate: "Dans al-Baqarah, rabb est présent environ 50 fois. Rabbunā (notre Seigneur) est la forme d'invocation des croyants (2:200, 2:201). Rabbihim (leur Seigneur) est le garant de la récompense pour les actions méritoires.",
        axe4_coherence: "La racine rbb = élever, nourrir, faire grandir, puis seigneur, maître. L'idée de Seigneurie bienveillante est centrale : le rabb n'est pas un juge froid mais un maître qui prend soin. La récompense ʿinda rabbihim est donc dans la générosité même de Ce maître.",
        axe5_frequence: "Rabb apparaît environ 950 fois dans le Coran — parmi les attributs divins les plus fréquents. Rabbihim/rabbunā est l'expression la plus intime de la relation Dieu-croyant."
      },
      "Éducation/Accompagnement": { status: "probable", senses: ["élever un enfant","éduquer","former"], proof_ctx: "Le sens éducatif de rabb est toujours présent en filigrane — le Seigneur élève et accompagne." }
    }
  });

  await insertVWA(verse_id, "khw", 17, "crainte/peur", {
    sense_chosen: "crainte/peur",
    concept_chosen: "Crainte/Appréhension",
    concepts: {
      "Crainte/Appréhension": {
        status: "retenu",
        senses: ["peur","craindre","redouter","effrayer"],
        proof_ctx: "Khawfun : nominatif indéfini de khawf = peur, crainte. Wa-lā khawfun ʿalayhim = et aucune crainte sur eux. Formule négative eschatologique indiquant l'absence de peur au Jour dernier.",
        axe1_verset: "Wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūna = nulle crainte sur eux et ils ne seront pas attristés. Cette double négation est la promesse eschatologique standard pour les croyants méritants. Khawf = crainte du futur, huzn = tristesse pour le passé.",
        axe2_voisins: "La formule lā khawfun ʿalayhim wa-lā hum yaḥzanūna revient en 2:38, 2:62, 2:112, 2:262, 2:274, 2:277. C'est une des formules les plus récurrentes dans al-Baqarah — une promesse de sécurité eschatologique totale.",
        axe3_sourate: "Dans al-Baqarah, la formule lā khawf... lā yaḥzanūn est la récompense eschatologique par excellence pour les croyants fidèles. Elle apparaît au moins 6 fois dans la sourate, créant un leitmotiv de sécurité.",
        axe4_coherence: "Khawf (crainte) = peur du futur, de ce qui peut arriver. L'absence de khawf au Jour dernier signifie que les donateurs n'ont pas à craindre le jugement — leur générosité les a mis en sécurité. C'est une promesse de protection divine.",
        axe5_frequence: "La racine khwf apparaît environ 124 fois dans le Coran. La formule lā khawfun ʿalayhim est présente environ 16 fois. Sa récurrence crée une constante de sécurité dans le message coranique."
      }
    }
  });

  await insertVWA(verse_id, "hzn", 21, "ne seront pas affligés", {
    sense_chosen: "ne seront pas affligés",
    concept_chosen: "Tristesse/Affliction",
    concepts: {
      "Tristesse/Affliction": {
        status: "retenu",
        senses: ["être triste","tristesse","chagrin","affliger","attrister"],
        proof_ctx: "Yaḥzanūna : Form I inaccompli 3MP de hzn = être triste, s'affliger. Wa-lā hum yaḥzanūna = et ils ne seront pas attristés. La négation de la tristesse futur-présente.",
        axe1_verset: "Wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūna = nul khawf et nulle huzn. Le couple khawf/huzn (peur/tristesse) couvre les deux dimensions temporelles de l'anxiété : khawf pour le futur, huzn pour le passé. L'absence des deux = béatitude eschatologique complète.",
        axe2_voisins: "La formule wa-lā hum yaḥzanūna complète systématiquement wa-lā khawfun ʿalayhim dans tout le Coran. Les deux sont inséparables. En 2:38, première occurrence dans al-Baqarah, elle promet la sécurité à ceux qui suivent la guidance divine.",
        axe3_sourate: "Dans al-Baqarah, yaḥzanūna est le pendant de khawfun dans la formule eschatologique. La huzn (tristesse/chagrin) est aussi mentionnée à propos du Prophète (2:282, 2:286 lā taḥzan). L'absence de huzn = bonheur total.",
        axe4_coherence: "La racine hzn = être triste, s'affliger. La tristesse est du passé, de ce qui a été perdu ou raté. Au Jour dernier, les croyants verront que leur générositité était un investissement parfait — aucun regret.",
        axe5_frequence: "La racine hzn apparaît environ 42 fois dans le Coran. Yaḥzanūna dans la formule eschatologique est présent dans al-Baqarah et dans d'autres sourates comme promesse de sécurité spirituelle."
      }
    }
  });
}

async function main() {
  await processVerse273();
  await processVerse274();
  console.log('\nPart 2 terminé (V273-274).');
}
main().catch(console.error);
