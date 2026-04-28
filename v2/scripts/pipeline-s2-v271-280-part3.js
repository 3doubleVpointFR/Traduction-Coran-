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
// VERSET 2:275  verse_id=282  analysis_id=645
// ============================================================
async function processVerse275() {
  console.log('\n=== 2:275 ===');
  const verse_id = 282;
  const analysis_id = 645;

  const translation_arab = "Ceux qui consomment l'usure ne se relèveront que comme se relève celui que le Démon a frappé de confusion. C'est parce qu'ils ont dit : le commerce est comme l'usure. Or Dieu a rendu le commerce licite et a interdit l'usure. Celui à qui parvient un avertissement de son Seigneur et qui s'arrête, ce qu'il a pris par le passé lui appartient et son affaire revient à Dieu. Quant à ceux qui recommencent, ce sont les gens du Feu ; ils y demeureront éternellement.";
  const full_translation = "Ceux qui consomment l'usure ne se relèveront que comme se relève celui que le Démon a frappé de confusion. C'est parce qu'ils ont dit : le commerce est comme l'usure. Or Dieu a rendu le commerce licite et a interdit l'usure. Celui à qui parvient un avertissement de son Seigneur et qui s'arrête, ce qu'il a pris par le passé lui appartient et son affaire revient à Dieu. Quant à ceux qui recommencent, ce sont les gens du Feu ; ils y demeureront éternellement.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:275 introduit le thème de l'usure (ar-ribā) qui va dominer jusqu'à 2:281. Yaʾkulūna ar-ribā (pos=2-3) = ils consomment l'usure : yaʾkulūna Form I 3MP de ʾkl = manger/consommer. Lā yaqūmūna (pos=4-5) = ils ne se relèveront pas, Form I 3MP de qwm. Ka-yaqūmu alladhī (pos=7-9) = comme se relève celui qui, formule comparative. Yataḫabbaṭuhu sh-shayṭānu (pos=10-11) = que le Démon a rendu confus/frappé. Mina l-massi (pos=12-13) = à cause de la folie/contact. Dhālika (pos=14) = cela. Annahum qālū (pos=16-17) = parce qu'ils ont dit. Al-bayʿu mithlu r-ribā (pos=19-21) = le commerce est comme l'usure. Wa-aḥalla llāhu l-bayʿa (pos=23-25) = Dieu a rendu le commerce licite. Wa-ḥarrama r-ribā (pos=26-27) = et a interdit l'usure. Man jāʾahu mawʿiẓatun min rabbihi (pos=28-32) = celui à qui vient un avertissement de son Seigneur. Fa-ntahā (pos=34) = et s'arrête. Fa-lahu mā salafa (pos=35-37) = ce qu'il a pris avant lui appartient. Wa-amruhu ilā llāhi (pos=39-41) = son affaire revient à Dieu. Wa-man ʿāda (pos=43) = celui qui recommence. Fa-ūlāʾika aṣḥābu n-nāri (pos=44-47) = ce sont les gens du Feu. Hum fīhā khālidūna (pos=48-50) = ils y demeureront éternellement.

§JUSTIFICATION§
Yaʾkulūna ar-ribā traduit par "consomment l'usure" : ʾkl = manger/consommer — "consomment" rend mieux le sens d'appropriation abusive que "pratiquent". Ar-ribā traduit par "l'usure" : rbw = croître, augmenter ; ribā = augmentation abusive du capital — "usure" est la traduction consacrée. Yataḫabbaṭuhu traduit par "a frappé de confusion" : ḫabaṭa = frapper au hasard, étourdir — "frappé de confusion" rend l'image de la démence. Al-massi traduit par "folie/contact" : mass = toucher, affliger ; al-mass ici = la folie (le contact du démon) — "contact/folie" rend les deux sens. Mawʿiẓatun traduit par "avertissement" : wʿẓ = exhorter, conseiller — "avertissement" pour le sens de conseil dissuasif. Fa-ntahā traduit par "s'arrête" : nhā Form VIII = s'arrêter, s'abstenir — "s'arrête" est juste. Salafa traduit par "ce qu'il a pris par le passé" : slf = précéder — ce qui est passé lui appartient. Khālidūna traduit par "demeureront éternellement" : khld = être éternel — "demeureront éternellement" est standard.

§CRITIQUE§
Hamidullah traduit yaʾkulūna r-ribā par "ceux qui se nourrissent d'usure" — nous disons "consomment l'usure" pour rendre le sens d'appropriation. Sur yataḫabbaṭuhu sh-shayṭānu mina l-mass, Hamidullah dit "mis hors de lui par Satan" — nous disons "frappé de confusion par le Démon" pour rendre l'image de la folie. Hamidullah traduit fa-ntahā par "s'est abstenu" — accord avec "s'arrête". Sur mā salafa, Hamidullah dit "ce qui a précédé" — nous disons "ce qu'il a pris par le passé" pour la clarté.`;

  const segments = [
    { position: 1, text_arab: "ٱلَّذِينَ", phonetic: "alladhīna", translation: "Ceux qui", grammar_type: "particle" },
    { position: 2, text_arab: "يَأْكُلُونَ", phonetic: "yaʾkulūna", translation: "consomment", grammar_type: "verb", root_key: "akl" },
    { position: 3, text_arab: "ٱلرِّبَوٰا۟", phonetic: "ar-ribā", translation: "l'usure", grammar_type: "noun", root_key: "rbw" },
    { position: 4, text_arab: "لَا", phonetic: "lā", translation: "ne", grammar_type: "particle" },
    { position: 5, text_arab: "يَقُومُونَ", phonetic: "yaqūmūna", translation: "se relèveront", grammar_type: "verb", root_key: "qwm" },
    { position: 6, text_arab: "إِلَّا", phonetic: "illā", translation: "que", grammar_type: "particle" },
    { position: 7, text_arab: "كَ", phonetic: "ka", translation: "comme", grammar_type: "particle" },
    { position: 8, text_arab: "يَقُومُ", phonetic: "yaqūmu", translation: "se relève", grammar_type: "verb", root_key: "qwm" },
    { position: 9, text_arab: "ٱلَّذِى", phonetic: "alladhī", translation: "celui que", grammar_type: "particle" },
    { position: 10, text_arab: "يَتَخَبَّطُهُ", phonetic: "yataḫabbaṭuhu", translation: "a rendu confus", grammar_type: "verb", root_key: "xbt" },
    { position: 11, text_arab: "ٱلشَّيْطَـٰنُ", phonetic: "aš-šayṭānu", translation: "le Démon", grammar_type: "noun", root_key: "šytn" },
    { position: 12, text_arab: "مِنَ", phonetic: "mina", translation: "par", grammar_type: "particle" },
    { position: 13, text_arab: "ٱلْمَسِّ", phonetic: "al-massi", translation: "la folie.", grammar_type: "noun", root_key: "mss" },
    { position: 14, text_arab: "ذَٰلِكَ", phonetic: "dhālika", translation: "Cela,", grammar_type: "particle" },
    { position: 15, text_arab: "بِ", phonetic: "bi", translation: "parce que", grammar_type: "particle" },
    { position: 16, text_arab: "أَنَّهُمْ", phonetic: "ʾannahum", translation: "ils ont", grammar_type: "particle" },
    { position: 17, text_arab: "قَالُوٓا۟", phonetic: "qālū", translation: "dit :", grammar_type: "verb", root_key: "qwl" },
    { position: 18, text_arab: "إِنَّمَا", phonetic: "ʾinnamā", translation: "certes,", grammar_type: "particle" },
    { position: 19, text_arab: "ٱلْبَيْعُ", phonetic: "al-bayʿu", translation: "le commerce", grammar_type: "noun", root_key: "bye" },
    { position: 20, text_arab: "مِثْلُ", phonetic: "miṯlu", translation: "est comme", grammar_type: "particle" },
    { position: 21, text_arab: "ٱلرِّبَوٰا۟", phonetic: "ar-ribā", translation: "l'usure.", grammar_type: "noun", root_key: "rbw" },
    { position: 22, text_arab: "وَ", phonetic: "wa", translation: "Or", grammar_type: "particle" },
    { position: 23, text_arab: "أَحَلَّ", phonetic: "aḥalla", translation: "Dieu a rendu licite", grammar_type: "verb", root_key: "hll" },
    { position: 24, text_arab: "ٱللَّهُ", phonetic: "allāhu", translation: "Dieu", grammar_type: "particle" },
    { position: 25, text_arab: "ٱلْبَيْعَ", phonetic: "al-bayʿa", translation: "le commerce", grammar_type: "noun", root_key: "bye" },
    { position: 26, text_arab: "وَحَرَّمَ", phonetic: "waḥarrama", translation: "et a interdit", grammar_type: "verb", root_key: "hrm" },
    { position: 27, text_arab: "ٱلرِّبَوٰا۟", phonetic: "ar-ribā", translation: "l'usure.", grammar_type: "noun", root_key: "rbw" },
    { position: 28, text_arab: "فَمَن", phonetic: "fa-man", translation: "Celui à qui", grammar_type: "particle" },
    { position: 29, text_arab: "جَآءَهُۥ", phonetic: "jāʾahu", translation: "parvient", grammar_type: "verb", root_key: "jaa" },
    { position: 30, text_arab: "مَوْعِظَةٌ", phonetic: "mawʿiẓatun", translation: "un avertissement", grammar_type: "noun", root_key: "wez" },
    { position: 31, text_arab: "مِّن", phonetic: "min", translation: "de", grammar_type: "particle" },
    { position: 32, text_arab: "رَّبِّهِۦ", phonetic: "rabbihi", translation: "son Seigneur", grammar_type: "noun", root_key: "rbb" },
    { position: 33, text_arab: "فَ", phonetic: "fa", translation: "et", grammar_type: "particle" },
    { position: 34, text_arab: "ٱنتَهَىٰ", phonetic: "intahā", translation: "s'arrête,", grammar_type: "verb", root_key: "nhy" },
    { position: 35, text_arab: "فَلَهُۥ", phonetic: "fa-lahu", translation: "ce qu'il a pris", grammar_type: "particle" },
    { position: 36, text_arab: "مَا", phonetic: "mā", translation: "ce qui", grammar_type: "particle" },
    { position: 37, text_arab: "سَلَفَ", phonetic: "salafa", translation: "par le passé lui appartient,", grammar_type: "verb", root_key: "slf" },
    { position: 38, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 39, text_arab: "أَمْرُهُۥٓ", phonetic: "ʾamruhu", translation: "son affaire", grammar_type: "noun", root_key: "amr" },
    { position: 40, text_arab: "إِلَى", phonetic: "ʾilā", translation: "revient à", grammar_type: "particle" },
    { position: 41, text_arab: "ٱللَّهِ", phonetic: "allāhi", translation: "Dieu.", grammar_type: "particle" },
    { position: 42, text_arab: "وَمَنْ", phonetic: "wa-man", translation: "Quant à celui qui", grammar_type: "particle" },
    { position: 43, text_arab: "عَادَ", phonetic: "ʿāda", translation: "recommence,", grammar_type: "verb", root_key: "ewd" },
    { position: 44, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 45, text_arab: "أُو۟لَـٰٓئِكَ", phonetic: "ʾulāʾika", translation: "ce sont", grammar_type: "particle" },
    { position: 46, text_arab: "أَصْحَـٰبُ", phonetic: "aṣḥābu", translation: "les gens", grammar_type: "noun", root_key: "shb" },
    { position: 47, text_arab: "ٱلنَّارِ", phonetic: "an-nāri", translation: "du Feu ;", grammar_type: "noun", root_key: "nwr" },
    { position: 48, text_arab: "هُمْ", phonetic: "hum", translation: "ils", grammar_type: "particle" },
    { position: 49, text_arab: "فِيهَا", phonetic: "fīhā", translation: "y", grammar_type: "particle" },
    { position: 50, text_arab: "خَـٰلِدُونَ", phonetic: "khālidūna", translation: "demeureront éternellement.", grammar_type: "adjective", root_key: "ḫld" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "akl", 2, "consommer/s'approprier", {
    sense_chosen: "consommer/s'approprier",
    concept_chosen: "Alimentation/Consommation",
    concepts: {
      "Alimentation/Consommation": {
        status: "retenu",
        senses: ["manger","consommer","dévorer","nourriture"],
        proof_ctx: "Yaʾkulūna : Form I inaccompli 3MP de ʾkl = manger, consommer. Yaʾkulūna ar-ribā = ils consomment l'usure. La métaphore du manger pour l'appropriation économique est classique dans le Coran.",
        axe1_verset: "Alladhīna yaʾkulūna ar-ribā = ceux qui consomment l'usure. La métaphore de l'appropriation illicite comme manger est présente aussi pour les biens des orphelins (yaʾkulūna amwāla l-yatāmā, 4:10). Manger = absorber, s'approprier sans effort légitime.",
        axe2_voisins: "En 4:29 : lā taʾkulū amwālakum baynakum bi-l-bāṭil = ne consommez pas vos biens entre vous de manière illicite. En 4:161 : wa-akhlihimu r-ribā wa-qad nuhū ʿanhu = ils prenaient l'usure alors qu'ils en avaient été interdits. Le yaʾkulū pour les transactions illicites est récurrent.",
        axe3_sourate: "Dans al-Baqarah, l'ʾakl (consommation) des biens est soumis à des règles strictes : lā taʾkulū amwālakum bi-l-bāṭil (2:188). L'usure est une forme de consommation illicite qui détruit la société.",
        axe4_coherence: "La Form I yaʾkulūna pour l'usure crée un parallèle avec yaʾkulūna amwāla n-nāsi bi-l-bāṭil (ils consomment les biens des gens illégalement, 4:161). L'ʾakl illicite est une métaphore pour toute appropriation économique injuste.",
        axe5_frequence: "La racine ʾkl apparaît environ 109 fois dans le Coran. Yaʾkulūna dans des contextes d'appropriation illicite est une métaphore récurrente dans les passages économiques et juridiques."
      },
      "Destruction/Érosion": { status: "probable", senses: ["consumer (le feu mange)","user"], proof_ctx: "L'usure consomme/détruit le tissu social — le sens destructif de ʾkl est pertinent en filigrane." }
    }
  });

  await insertVWA(verse_id, "rbw", 3, "usure/intérêt", {
    sense_chosen: "usure/intérêt financier",
    concept_chosen: "Usure/Intérêt",
    concepts: {
      "Usure/Intérêt": {
        status: "retenu",
        senses: ["usure (riba)","intérêt financier"],
        proof_ctx: "Ar-ribā : article défini + ribā = l'usure. Dérivé de rbw = croître, augmenter. Le ribā est l'augmentation illicite du capital prêté — l'intérêt sur prêt.",
        axe1_verset: "Yaʾkulūna ar-ribā = ils consomment l'usure. Le ribā est le prêt à intérêt, l'augmentation du capital au-delà du principal. Dieu l'oppose au bayʿ (commerce) et le déclare illicite.",
        axe2_voisins: "Le ribā est mentionné 4 fois dans ce verset (pos=3, 21, 27) puis en 2:276, 2:278, 2:279. Al-Baqarah est le texte fondateur de l'interdiction du ribā en islam.",
        axe3_sourate: "Dans al-Baqarah, l'interdiction du ribā est absolue (ḥarrama). Elle est fondée sur l'injustice : le ribā fait croître le capital du riche au détriment du pauvre endettés. La ṣadaqa (don) est son contraire positif.",
        axe4_coherence: "La racine rbw = croître. Le ribā est la croissance du capital par l'intérêt — qui produit une croissance sans travail ni risque. L'opposé coranique est le bayʿ (commerce) où le gain est lié au risque et au travail.",
        axe5_frequence: "Ar-ribā apparaît environ 8 fois dans le Coran. Sa concentration dans la séquence 2:275-280 en fait le texte coranique fondateur sur l'usure."
      },
      "Croissance/Augmentation": { status: "probable", senses: ["croître","augmenter"], proof_ctx: "Le ribā vient du sens de croissance (rbw) mais ici c'est spécifiquement l'usure financière." }
    }
  });

  await insertVWA(verse_id, "qwm", 5, "se relever/se lever", {
    sense_chosen: "se relever/se lever",
    concept_chosen: "Verticalité/Droiture",
    concepts: {
      "Verticalité/Droiture": {
        status: "retenu",
        senses: ["se lever","se dresser","droit","rectitude","redresser","corriger","se tenir debout"],
        proof_ctx: "Yaqūmūna : Form I inaccompli 3MP de qwm = se lever, se dresser. Lā yaqūmūna illā ka-yaqūmu alladhī = ils ne se lèveront que comme se lève celui qui... L'image est la résurrection au Jour dernier (qiyāma).",
        axe1_verset: "Lā yaqūmūna illā ka-yaqūmu alladhī yataḫabbaṭuhu sh-shayṭānu = ils ne se relèveront que comme celui que le Démon a rendu confus. La yaqūmu ici = se relever au Jour de la Résurrection (yawm al-qiyāma). Les mangeurs d'usure seront ressuscités dans un état de confusion morale et physique.",
        axe2_voisins: "Yawm al-qiyāma = le Jour de la Résurrection vient de la même racine qwm. La yaqūma (résurrection) est l'acte de se relever de la mort. Les mangeurs d'usure se relèveront dans l'état qui reflète leur état moral en ce monde.",
        axe3_sourate: "Dans al-Baqarah, qiyāma est présent en 2:85 (khizy fī l-ḥayāti d-dunyā wa-yawma l-qiyāmati), en 2:174, etc. La résurrection est un thème central. L'image des mangeurs d'usure qui se relèvent comme des fous est une condamnation puissante.",
        axe4_coherence: "La Form I yaqūmu = se lever, se tenir debout. C'est le verbe de la droiture physique et morale. Par antithèse, les mangeurs d'usure se lèveront dans la courbe et la confusion (yataḫabbaṭu = confusion). Droiture vs confusion.",
        axe5_frequence: "Qāma/yaqūmu apparaît environ 660 fois dans le Coran — parmi les plus fréquentes. La signification de yawm al-qiyāma donne à chaque occurrence de qwm une résonance eschatologique."
      }
    }
  });

  await insertVWA(verse_id, "qwm", 8, "se lever/résurrection", {
    sense_chosen: "se lever/résurrection",
    concept_chosen: "Verticalité/Droiture",
    concepts: {
      "Verticalité/Droiture": {
        status: "retenu",
        senses: ["se lever","se dresser","droit","rectitude"],
        proof_ctx: "Yaqūmu : Form I inaccompli 3MS de qwm = se lever. Ka-yaqūmu alladhī = comme se lève celui qui. C'est le terme de comparaison : la résurrection des usuraires imitera celle du fou épileptique.",
        axe1_verset: "Ka-yaqūmu alladhī yataḫabbaṭuhu sh-shayṭānu = comme se lève celui que le Démon a frappé. La comparaison yaqūmu / yaqūmūna (même forme x2) crée un effet rhétorique : leur relèvement sera chaotique, à l'image du fou.",
        axe2_voisins: "La double répétition yaqūmūna/yaqūmu dans ce verset est une figure de style (ishtiqāq = dérivation) : même racine, même forme, sens légèrement décalé. La comparaison est construite sur cette répétition.",
        axe3_sourate: "Le deuxième yaqūmu introduit la comparaison avec le possédé. L'image est forte : l'usuraire au Jour du Jugement ressemblera à un épileptique ou fou déstabilisé par le démon — conséquence physique de son péché moral.",
        axe4_coherence: "La répétition de yaqūmu/yaqūmūna est intentionnelle : elle unit les deux images (résurrection des usuraires = résurrection du fou). La même action (se lever) dans deux états différents (normal vs confus) illustre la punition.",
        axe5_frequence: "Deuxième occurrence de yaqūmu dans ce verset — la répétition est rhétorique et stylistique."
      }
    }
  });

  await insertVWA(verse_id, "xbt", 10, "frapper de confusion/rendre fou", {
    sense_chosen: "frapper de confusion/rendre fou",
    concept_chosen: "Confusion/Aveuglement",
    concepts: {
      "Confusion/Aveuglement": {
        status: "retenu",
        senses: ["frapper au hasard","tâtonner"],
        proof_ctx: "Yataḫabbaṭuhu : Form V inaccompli 3MS de ḫbt = frapper au hasard, faire tâtonner. Form V taḫabbaṭa = être frappé de confusion, être renversé. Yataḫabbaṭuhu sh-shayṭānu = que le Démon frappe de confusion.",
        axe1_verset: "Yataḫabbaṭuhu sh-shayṭānu mina l-massi = que le Démon a rendu confus par son contact/folie. L'image est celle de l'épileptique ou du possédé qui tâtonne sans contrôle. La folie (mass) causée par le Démon est la métaphore de l'état moral de l'usuraire.",
        axe2_voisins: "La racine ḫbt est rare dans le Coran. L'image du yataḫabbaṭu est forte : quelqu'un qui frappe le sol en tous sens, qui tâtonne. C'est l'image de la désorientation totale — morale et physique.",
        axe3_sourate: "Dans al-Baqarah, les fous/désorientés sont une image récurrente pour les hypocrites et les ingrats. En 2:18 : ṣummun bukmun ʿumyun fa-hum lā yarjiʿūna (sourds, muets, aveugles). L'usuraire rejoint cette galerie de personnages désorientés.",
        axe4_coherence: "La Form V taḫabbaṭa est intensive/réflexive : la confusion se répand dans tout l'être. Ce n'est pas une simple erreur mais une désorientation profonde. La métaphore illustre comment l'usure corrompt le jugement moral.",
        axe5_frequence: "La racine ḫbt apparaît seulement 2 fois dans le Coran. Sa rareté en fait une image forte et mémorable pour la désorientation causée par le Démon."
      }
    }
  });

  await insertVWA(verse_id, "šytn", 11, "le Démon/Satan", {
    sense_chosen: "le Démon/Satan",
    concept_chosen: "Égarement/Rébellion",
    concepts: {
      "Égarement/Rébellion": {
        status: "retenu",
        senses: ["diable (shaytan)","s'éloigner de la vérité","être rebelle"],
        proof_ctx: "Aš-šayṭānu : article défini + shayṭān = le Démon, Satan. Racine šyṭn/šyṭ = s'éloigner, brûler. Shayṭān = celui qui s'éloigne (de Dieu/de la vérité), rebelle.",
        axe1_verset: "Yataḫabbaṭuhu sh-shayṭānu mina l-massi = que le Démon a frappé de folie. Le shayṭān est l'agent de la confusion morale. Les usuraires sont présentés comme sous l'influence du Démon — leur faute morale a une dimension spirituelle.",
        axe2_voisins: "Le shayṭān dans al-Baqarah est mentionné en 2:36 (iblis pousse Adam et Ève hors du paradis), en 2:168 (ne suivez pas les pas du shayṭān), en 2:208, 2:268 (le shayṭān vous promet la pauvreté). Il est l'antagoniste systématique du croyant.",
        axe3_sourate: "Dans al-Baqarah, le shayṭān encourage la richesse illicite (2:268) et maintenant provoque la folie des usuraires (2:275). L'association shayṭān-ribā est significative : l'usure est présentée comme une folie satanique.",
        axe4_coherence: "La racine šyṭ = s'enflammer, s'éloigner. Shayṭān = celui qui s'est éloigné (de Dieu) ou qui brûle (de rébellion). Les deux sens convergent : le rebelle qui s'éloigne de la vérité. L'association avec la folie (mass) renforce l'idée que l'usure éloigne de la raison divine.",
        axe5_frequence: "Shayṭān apparaît environ 88 fois dans le Coran. Dans al-Baqarah (env. 10 fois), il est l'instigateur des comportements moralement déviants."
      },
      "Feu/Chaleur": { status: "peu_probable", senses: ["brûler (de colère)"], proof_ctx: "Sens étymologique de šyṭ = brûler, non pertinent comme concept dominant ici." }
    }
  });

  await insertVWA(verse_id, "mss", 13, "contact/folie/affliction", {
    sense_chosen: "contact/affliction/folie",
    concept_chosen: "Contact/Atteinte",
    concepts: {
      "Contact/Atteinte": {
        status: "retenu",
        senses: ["toucher","atteindre","affliger"],
        proof_ctx: "Al-massi : génitif défini de mass = contact, toucher, affliction. Mina l-massi = par le contact/folie. Al-mass dans le contexte de la possession démoniaque = la folie causée par le contact du démon.",
        axe1_verset: "Yataḫabbaṭuhu sh-shayṭānu mina l-massi = le Démon l'a frappé par son contact. Al-mass = le toucher, l'atteinte. Dans la culture arabe classique, al-mass = la folie causée par le djinn/démon qui touche. C'est l'épilepsie ou la démence associée à la possession.",
        axe2_voisins: "La même racine mass dans le sens d'affliction divine en 2:178 (massakum qurḥ = une blessure vous a touché), en 3:140. Mass = être atteint, touché par quelque chose. Mina l-mass = par l'effet du toucher démoniaque.",
        axe3_sourate: "Dans al-Baqarah, mass est employé pour l'atteinte physique ou spirituelle. Ici le mass du démon = la folie spirituelle qui accompagne l'usure. L'image est puissante : l'usuraire est présenté comme un fou.",
        axe4_coherence: "La racine mass = toucher légèrement, atteindre. Mass fī s-sūʾ = affliction dans le malheur. La Form massi (génitif de mass) après mina = par suite de, à cause de son contact. Le mass du démon est la cause de la confusion.",
        axe5_frequence: "La racine mass apparaît environ 26 fois dans le Coran. Dans des contextes de possession démoniaque, mass est le terme classique pour le contact afflictif."
      }
    }
  });

  await insertVWA(verse_id, "qwl", 17, "ils ont dit/parole", {
    sense_chosen: "parole/ce qu'ils ont dit",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        status: "retenu",
        senses: ["dire","parler","parole","discours","affirmer"],
        proof_ctx: "Qālū : Form I 3MP accompli de qwl = dire. Bi-annahum qālū = parce qu'ils ont dit. C'est la justification de leur comportement : leur argumentation erronée sur l'équivalence commerce/usure.",
        axe1_verset: "Bi-annahum qālū innama l-bayʿu mithlu r-ribā = parce qu'ils ont dit : le commerce est comme l'usure. Le qālū introduit leur argument sophistique. Ils utilisent le raisonnement analogique (qiyās) pour justifier ce que Dieu a interdit.",
        axe2_voisins: "Qālū comme introduction des arguments des adversaires de la foi est fréquent dans al-Baqarah : qālū lā takhshā fī l-arḍi (2:11), qālū āmannā (2:14). Ici qālū introduit une argument économique fallacieux.",
        axe3_sourate: "Dans al-Baqarah, les diverses parties (Juifs, chrétiens, hypocrites, usuraires) sont caractérisées par ce qu'ils disent (qālū). Leurs paroles révèlent leur état intérieur. L'argument des usuraires révèle leur incompréhension ou leur mauvaise foi.",
        axe4_coherence: "La logique des usuraires (commerce = usure) est une fausse analogie : le commerce implique risque et travail, l'usure est un gain garanti sans risque ni travail. Dieu les distingue (aḥalla/ḥarrama). Leur qawl reflète une confusion morale et intellectuelle.",
        axe5_frequence: "Qāla/qālū est l'un des verbes les plus fréquents du Coran (~1600 fois). Sa présence ici introduit la justification fallacieuse des usuraires."
      }
    }
  });

  await insertVWA(verse_id, "bye", 19, "le commerce/la vente", {
    sense_chosen: "le commerce/la vente",
    concept_chosen: "Vente/Transaction",
    concepts: {
      "Vente/Transaction": {
        status: "retenu",
        senses: ["vendre","acheter","conclure un marché"],
        proof_ctx: "Al-bayʿu : nominatif défini de bayʿ = vente, commerce. Innama l-bayʿu mithlu r-ribā = certes le commerce est comme l'usure. Argument des usuraires. Dieu répond : il a rendu le bayʿ licite et le ribā illicite.",
        axe1_verset: "Innama l-bayʿu mithlu r-ribā wa-aḥalla llāhu l-bayʿa wa-ḥarrama r-ribā = le commerce est comme l'usure — mais Dieu a rendu le commerce licite et interdit l'usure. Le bayʿ est le fondement légitime de l'économie islamique. La distinction bayʿ/ribā est la distinction licite/illicite.",
        axe2_voisins: "Al-bayʿ revient en 2:254 (wa-lā khullatun wa-lā shafāʿatun = ni échange ni intercession), en 62:9 (fa-s-ʿaw ilā dhikri llāhi wa-dharū l-bayʿa = courez vers l'invocation de Dieu et abandonnez le commerce). Al-bayʿ est le commerce licite.",
        axe3_sourate: "Dans al-Baqarah, la distinction bayʿ/ribā est l'axe économique central. Le bayʿ (commerce avec risque) est licite car il repose sur un échange équitable. Le ribā (prêt à intérêt) est illicite car il garantit le gain du prêteur sans risque.",
        axe4_coherence: "La distinction bayʿ/ribā est aussi une distinction de temporalité : le bayʿ est un échange simultané (présent), le ribā est une addition au prix au fil du temps (futur). Le temps est à Dieu, pas au créancier.",
        axe5_frequence: "Bayʿ apparaît environ 8 fois dans le Coran. Sa présence dans 2:275 comme opposé légitime du ribā en fait un terme fondateur du droit économique islamique."
      }
    }
  });

  await insertVWA(verse_id, "hll", 23, "rendre licite/permettre", {
    sense_chosen: "rendre licite/permettre",
    concept_chosen: "Licéité/Permission",
    concepts: {
      "Licéité/Permission": {
        status: "retenu",
        senses: ["être licite","être permis","rendre licite"],
        proof_ctx: "Aḥalla : Form IV accompli 3MS de hll = rendre licite. Wa-aḥalla llāhu l-bayʿa = Dieu a rendu le commerce licite. Form IV aḥalla = déclarer halāl, permettre.",
        axe1_verset: "Wa-aḥalla llāhu l-bayʿa wa-ḥarrama r-ribā = Dieu a rendu le commerce licite et interdit l'usure. L'opposition aḥalla/ḥarrama (licite/interdit) est la charnière théologique du verset. C'est Dieu qui établit la frontière entre licite et illicite, non le raisonnement humain.",
        axe2_voisins: "La paire ḥalāl/ḥarām est fondamentale dans al-Baqarah et tout le Coran. En 2:168 : kulū mimmā fī l-arḍi ḥalālan ṭayyiban = mangez de ce qui est sur la terre de licite et de bon. L'autorité de définir le ḥalāl/ḥarām appartient à Dieu seul.",
        axe3_sourate: "La racine hll dans al-Baqarah est présente dans des contextes de mariage (2:230, 2:232), d'alimentation (2:168), et ici d'économie. La ḥalāl est une catégorie divine, non culturelle.",
        axe4_coherence: "La Form IV aḥalla = rendre ḥalāl. C'est un acte divin de législation. Par opposition, ḥarrama (Form II de ḥrm) = déclarer ḥarām. Les deux Form IV/II sont des actes législatifs divins souverains.",
        axe5_frequence: "La racine hll dans ses formes juridiques (ḥalāl, aḥalla, taḥill) apparaît environ 31 fois dans le Coran. Sa fréquence dans des contextes juridiques en fait un terme fondamental de la sharīʿa."
      }
    }
  });

  await insertVWA(verse_id, "bye", 25, "le commerce/la vente", {
    sense_chosen: "le commerce/la vente",
    concept_chosen: "Vente/Transaction",
    concepts: {
      "Vente/Transaction": {
        status: "retenu",
        senses: ["vendre","acheter","conclure un marché"],
        proof_ctx: "Al-bayʿa : accusatif défini de bayʿ = le commerce. Wa-aḥalla llāhu l-bayʿa = Dieu a rendu le commerce licite. Deuxième occurrence du mot bayʿ dans le verset, maintenant comme objet de la permission divine.",
        axe1_verset: "Deuxième occurrence de al-bayʿ — accusatif direct de aḥalla. La répétition bayʿu (pos=19) / bayʿa (pos=25) crée un parallèle : l'argument humain (bayʿ = ribā) vs la décision divine (bayʿ ≠ ribā). La même chose est licite dans un cas et illicite dans l'autre.",
        axe2_voisins: "La répétition du même mot (bayʿ) dans les deux parties du verset — argument humain vs décision divine — est un procédé rhétorique fort. Elle permet de confronter directement les deux logiques.",
        axe3_sourate: "La double occurrence de bayʿ dans ce verset consolide son statut de fondement économique licite dans al-Baqarah. Le commerce honnête est la voie normale de la richesse.",
        axe4_coherence: "La même chose (bayʿ = commerce) est acceptée par Dieu alors que le ribā ne l'est pas. La distinction n'est pas dans l'apparence (les deux impliquent un gain) mais dans la nature (risque partagé vs garantie unilatérale).",
        axe5_frequence: "Deuxième occurrence dans le même verset — intentionnelle pour la structure argumentative."
      }
    }
  });

  await insertVWA(verse_id, "hrm", 26, "interdire/prohiber", {
    sense_chosen: "interdire/prohiber",
    concept_chosen: "Interdiction/Sacré",
    concepts: {
      "Interdiction/Sacré": {
        status: "retenu",
        senses: ["interdire","sacré","sanctuaire","illicite","priver","respecter"],
        proof_ctx: "Wa-ḥarrama : Form II accompli 3MS de ḥrm = déclarer ḥarām, interdire. Wa-ḥarrama r-ribā = et a interdit l'usure. Form II ḥarrama = rendre illicite (action divine souveraine).",
        axe1_verset: "Wa-aḥalla llāhu l-bayʿa wa-ḥarrama r-ribā = Dieu a rendu le commerce licite et interdit l'usure. La paire aḥalla/ḥarrama est la déclaration divine qui tranche le débat. Le bayʿ est ḥalāl, le ribā est ḥarām — et c'est Dieu qui l'a déterminé.",
        axe2_voisins: "La paire aḥalla llāhu/ḥarrama llāhu est récurrente dans le Coran pour établir les limites de la sharīʿa. En 5:87 : lā tuḥarrimū ṭayyibāti mā aḥalla llāhu lakum = ne vous interdisez pas les bonnes choses que Dieu vous a permises.",
        axe3_sourate: "Dans al-Baqarah, ḥarrama llāhu est la forme de l'interdiction divine absolue. En 2:173 : ḥarrama ʿalaykumu l-maytata wa-d-dama... = Il vous a interdit la charogne et le sang... Ici ḥarrama ar-ribā est une interdiction de même rang : absolue et divine.",
        axe4_coherence: "La Form II ḥarrama est causative/déclarative : Dieu déclare ḥarām. C'est un acte souverain législatif. L'argument humain (qālū = ils ont dit) est balayé par l'autorité divine (wa-llāhu aḥalla... wa-ḥarrama).",
        axe5_frequence: "La racine ḥrm dans ses formes juridiques (ḥarām, ḥarrama, muḥarram) apparaît environ 83 fois dans le Coran. C'est un terme central de la sharīʿa islamique."
      }
    }
  });

  await insertVWA(verse_id, "rbw", 27, "l'usure (troisième mention)", {
    sense_chosen: "l'usure/intérêt illicite",
    concept_chosen: "Usure/Intérêt",
    concepts: {
      "Usure/Intérêt": {
        status: "retenu",
        senses: ["usure (riba)","intérêt financier"],
        proof_ctx: "Ar-ribā : troisième occurrence dans ce verset. Wa-ḥarrama r-ribā = et il a interdit l'usure. L'usure est l'objet de l'interdiction divine.",
        axe1_verset: "Wa-ḥarrama r-ribā = et Il a interdit l'usure. La troisième occurrence de ar-ribā dans ce verset (pos=3, 21, 27) crée une emphase triple : la faute est clairement identifiée, répétée trois fois, et finalement déclarée ḥarām.",
        axe2_voisins: "Ar-ribā dans la séquence 2:275-280 est mentionné 7 fois. Cette concentration exceptionnelle fait de ces versets le texte de référence sur l'usure dans la jurisprudence islamique.",
        axe3_sourate: "L'interdiction du ribā est l'un des enseignements économiques majeurs d'al-Baqarah. Elle s'inscrit dans une logique de justice économique : l'usure exploite le pauvre, la ṣadaqa aide le pauvre. Le Coran propose une économie de la générosité vs une économie de l'exploitation.",
        axe4_coherence: "Troisième occurrence de ar-ribā dans le même verset. La répétition est une technique rhétorique coranique pour souligner l'importance d'un concept. L'usure est ici condamnée trois fois dans un seul verset.",
        axe5_frequence: "Troisième répétition intentionnelle dans le verset."
      }
    }
  });

  await insertVWA(verse_id, "jaa", 29, "parvenir/venir", {
    sense_chosen: "parvenir/venir",
    concept_chosen: "Venue",
    concepts: {
      "Venue": {
        status: "retenu",
        senses: ["venir"],
        proof_ctx: "Jāʾahu : Form I accompli 3MS de jāʾa = venir + pronom suffixe 3MS = il lui est venu. Man jāʾahu mawʿiẓatun min rabbihi = celui à qui parvient un avertissement de son Seigneur.",
        axe1_verset: "Man jāʾahu mawʿiẓatun min rabbihi fa-ntahā = celui à qui vient un avertissement de son Seigneur et qui s'arrête. La venue (majīʾ) de l'avertissement = sa réception. C'est une ouverture de miséricorde : si quelqu'un reçoit l'avertissement et s'arrête, son passé lui est pardonné.",
        axe2_voisins: "La construction jāʾahu X = il reçoit X est fréquente dans le Coran pour l'arrivée d'une révélation, d'un avertissement, ou d'une bénédiction. La venue de mawʿiẓa est la guidance divine qui offre une chance de repentir.",
        axe3_sourate: "Dans al-Baqarah, la venue (majīʾ) des prophètes, des signes, des avertissements est une structure narrative récurrente : Mūsā apporte les preuves, etc. Ici jāʾahu mawʿiẓa = l'avertissement arrive comme une miséricorde.",
        axe4_coherence: "La Form I jāʾa = venir est le verbe de l'arrivée spontanée. L'avertissement vient au-devant de l'usuraire — c'est Dieu qui prend l'initiative de la guidance. La réponse (fa-ntahā = s'arrêter) dépend alors de l'usuraire.",
        axe5_frequence: "Jāʾa/yajīʾu apparaît environ 273 fois dans le Coran. C'est un verbe fondamental du récit coranique (arrivée des prophètes, des révélations, etc.)."
      }
    }
  });

  await insertVWA(verse_id, "wez", 30, "avertissement/conseil", {
    sense_chosen: "avertissement/exhortation",
    concept_chosen: "Exhortation/Conseil",
    concepts: {
      "Exhortation/Conseil": {
        status: "retenu",
        senses: ["exhorter","prêcher","conseiller","sermon"],
        proof_ctx: "Mawʿiẓatun : Form I masdar (ou nom d'instrument) de waʿaẓa = exhorter, admonester. Mawʿiẓa = exhortation, avertissement, conseil. Min rabbihi = venant de son Seigneur.",
        axe1_verset: "Man jāʾahu mawʿiẓatun min rabbihi = celui à qui parvient un avertissement de son Seigneur. La mawʿiẓa est une exhortation dissuasive : elle montre les conséquences du comportement interdit. Venant de Dieu (min rabbihi), elle est authoritative.",
        axe2_voisins: "La racine wʿẓ est aussi présente en 2:231 (wa-dhkurū niʿmata llāhi ʿalaykum wa-mā anzala ʿalaykum mina l-kitābi wa-l-ḥikmati yaʿiẓukum bihi = et rappellez-vous le bienfait de Dieu et ce qu'Il a fait descendre du Livre et de la sagesse pour vous exhorter). La mawʿiẓa divine est la guidance révélée.",
        axe3_sourate: "Dans al-Baqarah, les mawāʿiẓ (exhortations) de Dieu aux croyants sont nombreuses. L'ensemble de la séquence 2:261-280 est une mawʿiẓa sur la générosité et l'économie morale.",
        axe4_coherence: "La mawʿiẓa est distincte du nadhīr (avertissement de punition) et du bashīr (annonce de récompense). C'est une exhortation qui fait appel à la raison et à la conscience morale. Sa venue de Dieu la rend irrécusable.",
        axe5_frequence: "La racine wʿẓ apparaît environ 24 fois dans le Coran. Mawʿiẓa comme avertissement/exhortation divine est présente dans des contextes de guidance morale."
      }
    }
  });

  await insertVWA(verse_id, "rbb", 32, "son Seigneur", {
    sense_chosen: "son Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur","maître","celui qui élève","celui qui entretient","gouverner"],
        proof_ctx: "Rabbihi : rabb + suffixe 3MS = son Seigneur. Man jāʾahu mawʿiẓatun min rabbihi = celui à qui parvient une exhortation de son Seigneur. Le rabb est ici Celui qui prend l'initiative d'avertir.",
        axe1_verset: "Min rabbihi = venant de son Seigneur. L'avertissement vient du rabb — c'est-à-dire de Celui qui prend soin de ses sujets. La mawʿiẓa est un acte de sollicitude divine : le rabb avertit par bienveillance, non par punition immédiate.",
        axe2_voisins: "Rabb dans la formule min rabbihi apparaît dans des contextes de guidance divine : la venue de la révélation, des prophètes, des avertissements, vient toujours de Dieu le Seigneur.",
        axe3_sourate: "Le rabb dans al-Baqarah est omniprésent dans les promesses de récompense (ʿinda rabbihim, 2:274) et maintenant dans les avertissements (min rabbihi, 2:275). Dieu est à la fois Celui qui récompense et Celui qui avertit.",
        axe4_coherence: "La bienveillance du rabb est illustrée par la mawʿiẓa elle-même : avant de punir, Dieu avertit. L'usuraire a une chance de se repentir (fa-ntahā) et son passé lui est pardonné. C'est la miséricorde du rabb.",
        axe5_frequence: "Rabb est l'un des attributs divins les plus fréquents. Min rabbihi dans des contextes de guidance divine est une formule récurrente."
      }
    }
  });

  await insertVWA(verse_id, "nhy", 34, "s'arrêter/s'abstenir", {
    sense_chosen: "s'arrêter/s'abstenir",
    concept_chosen: "Interdiction/Empêchement",
    concepts: {
      "Interdiction/Empêchement": {
        status: "retenu",
        senses: ["interdire","empêcher","défendre"],
        proof_ctx: "Intahā : Form VIII accompli de nhy = s'arrêter, s'abstenir. Form VIII intahā = s'empêcher soi-même, prendre fin. Fa-ntahā = alors s'il s'arrête.",
        axe1_verset: "Man jāʾahu mawʿiẓatun min rabbihi fa-ntahā fa-lahu mā salafa = celui qui reçoit l'avertissement et s'arrête, ce qui est passé lui appartient. L'intihāʾ (arrêt) est la condition de la grâce. S'arrêter de l'usure après avoir reçu l'avertissement = être pardonnné.",
        axe2_voisins: "La Form VIII intahā dans le sens de s'arrêter, cesser est fréquente dans le Coran : fa-in intahū fa-inna llāha ghafūrun raḥīmun = si ils s'arrêtent, Dieu est Pardonneur Miséricordieux (2:192, 8:38). La même structure condition/pardon.",
        axe3_sourate: "L'intihāʾ est l'acte de repentir économique : cesser l'usure. Il est la réponse adéquate à la mawʿiẓa divine. Le Coran offre toujours une porte de sortie avant la condamnation finale.",
        axe4_coherence: "La Form VIII de nhy (interdire) = s'interdire soi-même = s'arrêter volontairement. C'est un acte de libre-arbitre : l'usuraire choisit de s'arrêter. Cette liberté de choix est fondamentale dans l'éthique coranique.",
        axe5_frequence: "La racine nhy dans ses formes interdictives et réflexives apparaît environ 54 fois dans le Coran. La Form VIII intahā dans le sens de cesser est fréquente dans des contextes de repentir."
      }
    }
  });

  await insertVWA(verse_id, "slf", 37, "ce qui est passé/antérieur", {
    sense_chosen: "ce qui est passé/antérieur",
    concept_chosen: "Antériorité/Ancêtres",
    concepts: {
      "Antériorité/Ancêtres": {
        status: "retenu",
        senses: ["précéder","ancêtres (salaf)"],
        proof_ctx: "Salafa : Form I accompli 3MS de slf = précéder, passer avant. Fa-lahu mā salafa = ce qui a précédé lui appartient. Mā salafa = ce qui est passé avant l'avertissement.",
        axe1_verset: "Fa-lahu mā salafa wa-amruhu ilā llāhi = ce qu'il a fait par le passé lui appartient et son affaire revient à Dieu. Mā salafa = les profits illicites antérieurs à l'avertissement. Ils ne sont pas réclamés. C'est une mesure de clémence.",
        axe2_voisins: "La formule mā salafa est présente en 4:22 et 5:95 dans des contextes similaires de grâce divine pour les fautes antérieures. La logique est toujours : après l'avertissement/la révélation, les fautes passées sont pardonnées si on s'arrête.",
        axe3_sourate: "Dans al-Baqarah, mā salafa marque la rupture entre le passé (avant la guidance) et le présent/futur (après). C'est une structure de miséricorde : les fautes d'ignorance ou d'avant la guidance sont traitées avec clémence.",
        axe4_coherence: "Le slf (antériorité) vs ʿāda (retour, pos=43) crée une opposition temporelle : mā salafa = le passé pardonné vs man ʿāda = celui qui recommence, puni. La grâce est pour ceux qui ont le passé mais ne reviennent pas ; la punition pour ceux qui reviennent.",
        axe5_frequence: "La racine slf dans le sens d'antériorité et de passé pardonné apparaît environ 9 fois dans le Coran dans des contextes de grâce pour les fautes passées."
      },
      "Transaction/Avance": { status: "probable", senses: ["prêt","avance (paiement)"], proof_ctx: "Le sens commercial de salaf = prêt/avance est pertinent dans un contexte économique mais ici mā salafa = ce qui a précédé, le passé." }
    }
  });

  await insertVWA(verse_id, "amr", 39, "son affaire/sa situation", {
    sense_chosen: "son affaire/sa situation",
    concept_chosen: "Affaire/Chose",
    concepts: {
      "Affaire/Chose": {
        status: "retenu",
        senses: ["affaire","chose"],
        proof_ctx: "Amruhu : amr + suffixe 3MS = son affaire. Wa-amruhu ilā llāhi = et son affaire revient à Dieu. Amr ici = sa situation, son jugement final, ce qui le concerne.",
        axe1_verset: "Wa-amruhu ilā llāhi = son affaire est à Dieu. Après mā salafa (le passé lui appartient), son affaire (amr) est remise à Dieu. Cela signifie que le jugement final lui appartient. Dieu est le seul juge.",
        axe2_voisins: "La formule wa-l-amru llāh = l'affaire appartient à Dieu est fréquente dans le Coran pour exprimer la souveraineté divine sur les situations humaines. En 2:109 : wa-llāhu ʿalā kulli shayʾin qadīr = Dieu est sur toute chose Puissant.",
        axe3_sourate: "L'amr de Dieu dans al-Baqarah est Sa décision souveraine. Wa-amruhu ilā llāhi = la responsabilité ultime incombe à Dieu. C'est une formule de résignation bienveillante : après s'être arrêté, confier son sort à Dieu.",
        axe4_coherence: "Le amr (affaire/commandement) divin est central dans la théologie coranique. Ici amruhu = son affaire (l'affaire de celui qui s'est arrêté) revient à Dieu = c'est Dieu qui jugera. Cette remise à Dieu est rassurante.",
        axe5_frequence: "Amr apparaît environ 176 fois dans le Coran. La formule ilā llāhi + amr est une formule de dévolution à la souveraineté divine."
      },
      "Commandement/Autorité": { status: "peu_probable", senses: ["ordonner","commander"], proof_ctx: "Amr peut signifier commandement mais ici c'est affaire/situation (amruhu = sa situation)." }
    }
  });

  await insertVWA(verse_id, "ewd", 43, "recommencer/revenir au péché", {
    sense_chosen: "recommencer/revenir au péché",
    concept_chosen: "Retour/Répétition",
    concepts: {
      "Retour/Répétition": {
        status: "retenu",
        senses: ["revenir","retourner","habitude"],
        proof_ctx: "ʿĀda : Form I accompli 3MS de ʿwd = revenir, retourner, recommencer. Wa-man ʿāda = quant à celui qui recommence. Revenir à l'usure après avoir été averti.",
        axe1_verset: "Wa-man ʿāda fa-ūlāʾika aṣḥābu n-nāri = celui qui recommence, ce sont les gens du Feu. L'ʿawda = retour à la faute après avertissement. C'est la récidive consciente, la désobéissance délibérée après avoir reçu la guidance divine.",
        axe2_voisins: "Wa-man ʿāda = celui qui revient à la faute. La même structure man + verbe pour distinguer deux catégories : man jāʾahu fa-ntahā (qui s'arrête) vs man ʿāda (qui recommence). Deux destins opposés.",
        axe3_sourate: "Dans al-Baqarah, la récidive après avertissement est systématiquement punie : en 2:178 (fa-man ʿtadā baʿda dhālika fa-lahu ʿadhābun alīm = celui qui transgresse après cela aura un châtiment douloureux). L'ʿawda après guidance est la faute la plus grave.",
        axe4_coherence: "L'ʿawda (retour) contraste avec l'intihāʾ (arrêt). Ces deux termes créent la structure morale du verset : arrêt = grâce, retour = condamnation. La liberté humaine est préservée : chacun choisit.",
        axe5_frequence: "La racine ʿwd dans le sens de retour/récidive apparaît environ 26 fois dans le Coran. Man ʿāda dans des contextes de récidive après avertissement est une formule de condamnation récurrente."
      }
    }
  });

  await insertVWA(verse_id, "shb", 46, "compagnons/gens de", {
    sense_chosen: "compagnons/gens de",
    concept_chosen: "Compagnonnage/Association",
    concepts: {
      "Compagnonnage/Association": {
        status: "retenu",
        senses: ["accompagner","compagnon","associé","ami"],
        proof_ctx: "Aṣḥābu : nominatif pluriel de ṣāḥib = compagnon, associé. Aṣḥābu n-nāri = les compagnons du Feu = les gens du Feu. C'est une expression idiomatique coranique pour désigner ceux qui habitent le Feu.",
        axe1_verset: "Fa-ūlāʾika aṣḥābu n-nāri = ce sont les compagnons du Feu. L'expression aṣḥāb désigne une appartenance totale et durable. Les gens du Feu y sont pour toujours (khālidūna). Leur compagnonnage avec le Feu est leur destin.",
        axe2_voisins: "L'expression aṣḥābu n-nār est opposée à aṣḥābu l-janna (les gens du Paradis) dans plusieurs versets (2:82, 7:36, 7:44, 59:20). Ces deux catégories définissent la division eschatologique finale.",
        axe3_sourate: "Dans al-Baqarah, aṣḥābu n-nār apparaît en 2:39, 2:81, 2:217, 2:275, 2:257. Les gens du Feu sont systématiquement ceux qui ont rejeté les signes de Dieu ou transgressé après guidance.",
        axe4_coherence: "L'ʾaṣḥāb (pl. de ṣāḥib) implique une relation prolongée — pas une visite temporaire mais une appartenance permanente. Les aṣḥābu n-nār y sont khālidūna = éternellement. Le compagnonnage avec le Feu est une punition définitive pour la récidive consciente.",
        axe5_frequence: "La racine shb (compagnonner) apparaît environ 98 fois dans le Coran. L'expression aṣḥābu n-nār vs aṣḥābu l-janna est l'une des distinctions eschatologiques fondamentales."
      }
    }
  });

  await insertVWA(verse_id, "nwr", 47, "le Feu", {
    sense_chosen: "le Feu/la flamme",
    concept_chosen: "Lumière/Clarté",
    concepts: {
      "Lumière/Clarté": {
        status: "retenu",
        senses: ["lumière","éclairer","feu","guider par la lumière"],
        proof_ctx: "An-nāri : génitif défini de nār = le feu. Nār dérive de la racine nwr = lumière, feu. Aṣḥābu n-nāri = les gens du Feu. Nār est le feu infernal.",
        axe1_verset: "Fa-ūlāʾika aṣḥābu n-nāri hum fīhā khālidūna = ce sont les gens du Feu, ils y demeureront éternellement. An-nār est le Feu de l'enfer. La racine nwr couvre à la fois le feu et la lumière — le feu infernal et la lumière divine sont de la même origine mais dans des contextes opposés.",
        axe2_voisins: "An-nār dans al-Baqarah apparaît comme punition eschatologique pour les mécréants (2:24, 2:39, 2:80-81). L'image du feu est systématiquement associée à la punition finale.",
        axe3_sourate: "An-nār vs al-janna (feu vs paradis) est la dichotomie eschatologique fondamentale du Coran. Dans al-Baqarah, la nār est mentionnée environ 12 fois. L'interdit du ribā est l'un des seuls péchés qui envoie directement dans an-nār avec les kafirūn.",
        axe4_coherence: "La racine nwr = feu/lumière. Nār = feu (féminin), nūr = lumière (masculin). Les deux viennent de la même racine mais s'opposent moralement : nūr = guidance, nār = punition. C'est une des dualités fondamentales du vocabulaire coranique.",
        axe5_frequence: "Nār apparaît environ 145 fois dans le Coran comme lieu de punition eschatologique. Sa présence ici comme conséquence de la récidive dans l'usure illustre la gravité de ce péché."
      }
    }
  });

  await insertVWA(verse_id, "ḫld", 50, "demeureront éternellement", {
    sense_chosen: "demeurer éternellement/pour toujours",
    concept_chosen: "Éternité/Permanence",
    concepts: {
      "Éternité/Permanence": {
        status: "retenu",
        senses: ["demeurer éternellement","rester pour toujours","être immortel"],
        proof_ctx: "Khālidūna : nominatif pluriel de khālid = qui demeure, qui reste éternellement. Form I participe actif de ḫld = demeurer, être permanent. Hum fīhā khālidūna = ils y demeureront éternellement.",
        axe1_verset: "Hum fīhā khālidūna = ils y demeureront éternellement. Khālidūna est la condamnation ultime : pas de fin à la punition. C'est la conséquence de la récidive consciente après avertissement divin.",
        axe2_voisins: "La formule hum fīhā khālidūna revient systématiquement après aṣḥābu n-nār dans al-Baqarah (2:39, 2:81, 2:162, 2:217, 2:275). C'est une formule eschatologique standard pour la punition éternelle.",
        axe3_sourate: "Dans al-Baqarah, khālidūna qualifie l'éternité dans le Feu ou le Paradis. Les croyants fidèles y sont khālidūna (2:82 : hum fīhā khālidūna pour le paradis). Les récidivistes dans le Feu sont également khālidūna. L'éternité est le marqueur de l'état eschatologique définitif.",
        axe4_coherence: "La racine ḫld = être permanent, ne pas s'user. Khālid = celui qui ne s'use pas, l'immortel. L'éternité dans le Feu (khālidūna fī n-nār) est la punition maximale du Coran. Elle est réservée aux cas de transgression consciente et délibérée.",
        axe5_frequence: "La racine ḫld apparaît environ 87 fois dans le Coran. Khālidūna comme marque de l'éternité eschatologique est présent dans toutes les grandes sourates. Sa fréquence dans al-Baqarah est élevée."
      },
      "Inclination": { status: "nul", senses: ["pencher vers"], proof_ctx: "Sens secondaire non pertinent ici." }
    }
  });
}

async function main() {
  await processVerse275();
  console.log('\nPart 3 terminé (V275).');
}
main().catch(console.error);
