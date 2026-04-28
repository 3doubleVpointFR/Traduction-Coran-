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
// VERSET 2:276  verse_id=283  analysis_id=641
// ============================================================
async function processVerse276() {
  console.log('\n=== 2:276 ===');
  const verse_id = 283;
  const analysis_id = 641;

  const translation_arab = "Dieu anéantit l'usure et fait prospérer les aumônes. Et Dieu n'aime pas tout impie obstinément pécheur.";
  const full_translation = "Dieu anéantit l'usure et fait prospérer les aumônes. Et Dieu n'aime pas tout impie obstinément pécheur.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:276 est bref et tranchant : il énonce le principe économique et moral opposant usure et aumône. Yamḥaqu (pos=1) : Form I inaccompli 3MS de mhq = effacer, anéantir progressivement. Ar-ribā (pos=3) = l'usure. Wa-yurbi (pos=5) = Form IV inaccompli 3MS de rbw = faire croître, faire prospérer — yurbi aṣ-ṣadaqāti = Il fait prospérer les aumônes. Lā yuḥibbu (pos=8-9) = Il n'aime pas. Kulla kaffārin athīmin (pos=10-12) = tout impie obstinément pécheur.

§JUSTIFICATION§
Yamḥaqu traduit par "anéantit" : mhq = effacer progressivement jusqu'à disparition — "anéantit" rend l'aspect radical du verbe. Yurbi traduit par "fait prospérer" : Form IV de rbw = faire croître, faire augmenter — "fait prospérer" rend le sens de croissance bénéfique. Kaffārin traduit par "impie" : kffr Form intensif = très ingrat/infidèle — "impie" ou "très ingrat". Athīmin traduit par "pécheur" : ithm = péché ; athīm = Form intensif = celui qui pèche beaucoup, obstinément pécheur.

§CRITIQUE§
Hamidullah traduit yamḥaqu par "Dieu détruit l'usure" — nous disons "anéantit" pour rendre le sens de destruction progressive et totale. Sur yurbi, Hamidullah dit "accroît les aumônes" — nous disons "fait prospérer" pour rendre le sens plus positif de développement. Sur kaffārin athīmin, Hamidullah dit "impie pécheur" — accord.`;

  const segments = [
    { position: 1, text_arab: "يَمْحَقُ", phonetic: "yamḥaqu", translation: "Dieu anéantit", grammar_type: "verb", root_key: "mhq" },
    { position: 2, text_arab: "ٱللَّهُ", phonetic: "allāhu", translation: "Dieu", grammar_type: "particle" },
    { position: 3, text_arab: "ٱلرِّبَوٰا۟", phonetic: "ar-ribā", translation: "l'usure", grammar_type: "noun", root_key: "rbw" },
    { position: 4, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 5, text_arab: "يُرْبِى", phonetic: "yurbi", translation: "fait prospérer", grammar_type: "verb", root_key: "rbw" },
    { position: 6, text_arab: "ٱلصَّدَقَـٰتِ", phonetic: "aṣ-ṣadaqāti", translation: "les aumônes.", grammar_type: "noun", root_key: "sdq" },
    { position: 7, text_arab: "ٱللَّهُ", phonetic: "allāhu", translation: "Et Dieu", grammar_type: "particle" },
    { position: 8, text_arab: "لَا", phonetic: "lā", translation: "n'aime pas", grammar_type: "particle" },
    { position: 9, text_arab: "يُحِبُّ", phonetic: "yuḥibbu", translation: "n'aime pas", grammar_type: "verb", root_key: "hbb" },
    { position: 10, text_arab: "كُلَّ", phonetic: "kulla", translation: "tout", grammar_type: "noun", root_key: "kll" },
    { position: 11, text_arab: "كَفَّارٍ", phonetic: "kaffārin", translation: "impie", grammar_type: "adjective", root_key: "kfr" },
    { position: 12, text_arab: "أَثِيمٍ", phonetic: "athīmin", translation: "pécheur.", grammar_type: "adjective", root_key: "athm" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "mhq", 1, "anéantir/effacer progressivement", {
    sense_chosen: "anéantir/effacer progressivement",
    concept_chosen: "Anéantissement/Effacement",
    concepts: {
      "Anéantissement/Effacement": {
        status: "retenu",
        senses: ["anéantir","effacer","diminuer jusqu'à disparition"],
        proof_ctx: "Yamḥaqu : Form I inaccompli 3MS de mhq = diminuer jusqu'à disparition, effacer progressivement. Yamḥaqu llāhu r-ribā = Dieu anéantit l'usure.",
        axe1_verset: "Yamḥaqu llāhu r-ribā wa-yurbi aṣ-ṣadaqāti = Dieu anéantit l'usure et fait prospérer les aumônes. Le maḥq = effacement progressif jusqu'à disparition totale. L'usure qui semble faire croître le capital le détruit en réalité — c'est la loi divine. En parallèle, les aumônes qui semblent diminuer les biens les font croître.",
        axe2_voisins: "L'opposition yamḥaqu (anéantit) / yurbi (fait prospérer) est le résumé théologique de la séquence 2:261-276. La générosité prospère, l'usure s'anéantit. La loi divine inverse la logique économique apparente.",
        axe3_sourate: "Dans al-Baqarah, la loi du maḥq est une vérité eschatologique mais aussi terrestre : les usuraires perdent en réalité même s'ils semblent gagner à court terme. L'histoire économique illustre souvent cette loi.",
        axe4_coherence: "La racine mhq = diminuer jusqu'à disparition (comme la lune qui diminue jusqu'au croissant maḥāq). Le maḥq est une disparition graduelle. L'usure anéantit la richesse spirituellement mais aussi matériellement à terme.",
        axe5_frequence: "La racine mhq apparaît seulement 2 fois dans le Coran — sa rareté en fait un terme fort et mémorable. L'anéantissement de l'usure par Dieu est une vérité économique et spirituelle."
      }
    }
  });

  await insertVWA(verse_id, "rbw", 3, "l'usure (à anéantir)", {
    sense_chosen: "l'usure/intérêt illicite",
    concept_chosen: "Usure/Intérêt",
    concepts: {
      "Usure/Intérêt": {
        status: "retenu",
        senses: ["usure (riba)","intérêt financier"],
        proof_ctx: "Ar-ribā : article défini + ribā = l'usure. Yamḥaqu llāhu r-ribā = Dieu anéantit l'usure. Continuation de l'interdiction et condamnation du ribā des versets précédents.",
        axe1_verset: "Yamḥaqu llāhu r-ribā = Dieu anéantit l'usure. Le yamḥaqu crée une image forte : Dieu efface progressivement l'usure. Même si l'usuraire semble prospérer, la loi divine est que l'usure est condamnée à l'anéantissement.",
        axe2_voisins: "Ar-ribā est maintenant sujet de yamḥaqu (être anéanti) après avoir été sujet de yaʾkulūna (consommer, 2:275) et ḥarrama (interdire, 2:275). La progression : consommer → interdire → anéantir illustre la condamnation graduelle.",
        axe3_sourate: "Dans al-Baqarah, le ribā a été défini (2:275), interdit (2:275), et maintenant condamné à l'anéantissement divin (2:276). La séquence est une argumentation progressive.",
        axe4_coherence: "L'opposition ribā/ṣadaqāt est la dichotomie économique fondamentale d'al-Baqarah. Le ribā est anéanti, les ṣadaqāt prospèrent. La loi divine inverse la logique humaine.",
        axe5_frequence: "Ar-ribā dans la séquence 2:275-280 est mentionné 7 fois. Sa concentration est sans précédent dans le Coran."
      }
    }
  });

  await insertVWA(verse_id, "rbw", 5, "faire prospérer/faire croître", {
    sense_chosen: "faire prospérer/faire croître les aumônes",
    concept_chosen: "Croissance/Augmentation",
    concepts: {
      "Croissance/Augmentation": {
        status: "retenu",
        senses: ["croître","augmenter","élever (un enfant)"],
        proof_ctx: "Yurbi : Form IV inaccompli 3MS de rbw = faire croître, faire augmenter. Yurbi aṣ-ṣadaqāti = Il fait prospérer les aumônes. La même racine rbw que ribā mais dans son sens positif de croissance bénéfique.",
        axe1_verset: "Wa-yurbi aṣ-ṣadaqāti = Il fait prospérer les aumônes. La même racine rbw que ar-ribā mais dans un contexte inverse : l'usure (ribā) est anéantie, les aumônes (ṣadaqāt) sont faites croître (yurbi). C'est une ironie coranique : le ribā (croissance illicite) est anéanti, les ṣadaqāt (dons) croissent licitement.",
        axe2_voisins: "Le verset 2:261 avait annoncé que la dépense dans la voie de Dieu est multipliée 700 fois. Ici yurbi aṣ-ṣadaqāti confirme cette croissance. L'usure prétend faire croître mais Dieu l'anéantit ; les aumônes semblent diminuer mais Dieu les fait croître.",
        axe3_sourate: "L'ironie de la même racine rbw pour ribā (usure, croissance illicite) et yurbi (faire croître licitement les aumônes) est intentionnelle. La vraie croissance est dans la générosité, pas dans l'usure.",
        axe4_coherence: "La Form IV yurbi = fait croître est le sens premier et positif de la racine rbw = augmenter, grandir. C'est seulement dans le nom ribā que le sens devient négatif (croissance illicite, exploitative). Ici Form IV redonne à la racine son sens positif.",
        axe5_frequence: "La Form IV yurbi dans le sens de faire prospérer les aumônes est unique dans le Coran. C'est un emploi intentionnellement contrastif avec ar-ribā (même racine)."
      },
      "Usure/Intérêt": { status: "nul", senses: ["usure"], proof_ctx: "La même racine rbw mais Form IV yurbi = faire croître positivement, pas l'usure." }
    }
  });

  await insertVWA(verse_id, "sdq", 6, "les aumônes", {
    sense_chosen: "les aumônes volontaires",
    concept_chosen: "Don/Aumône",
    concepts: {
      "Don/Aumône": {
        status: "retenu",
        senses: ["aumône","dot"],
        proof_ctx: "Aṣ-ṣadaqāti : pluriel défini génitif de ṣadaqa = aumône volontaire. Yurbi aṣ-ṣadaqāti = Il fait prospérer les aumônes. La ṣadaqa est le contraire du ribā.",
        axe1_verset: "Wa-yurbi aṣ-ṣadaqāti = Il fait prospérer les aumônes. La ṣadaqa est à nouveau mentionnée après le ribā. L'opposition structurelle ribā/ṣadaqa est complète : ribā (interdit, anéanti) vs ṣadaqa (recommandée, prospère).",
        axe2_voisins: "Aṣ-ṣadaqāt a été introduite en 2:271 comme la chose à dépenser. Sa mention ici en 2:276 après l'interdit du ribā crée une boucle : la séquence commence et finit avec les ṣadaqāt.",
        axe3_sourate: "L'opposition ribā/ṣadaqāt structure le segment 2:261-276. Les ṣadaqāt (générosité) sont le moyen de la croissance licite, le ribā (usure) est l'illusion de la croissance illicite.",
        axe4_coherence: "La ṣadaqa est la contrepartie positive du ribā dans l'économie coranique : là où le ribā extrait, la ṣadaqa distribue ; là où le ribā concentre la richesse, la ṣadaqa la redistribue.",
        axe5_frequence: "Aṣ-ṣadaqāt dans la séquence 2:261-276 est mentionnée plusieurs fois. La fréquence élevée souligne son rôle central comme alternative positive au ribā."
      }
    }
  });

  await insertVWA(verse_id, "hbb", 9, "aimer/la non-amour de Dieu", {
    sense_chosen: "aimer/affection divine",
    concept_chosen: "Amour/Affection",
    concepts: {
      "Amour/Affection": {
        status: "retenu",
        senses: ["aimer","affection","préférer"],
        proof_ctx: "Yuḥibbu : Form IV inaccompli 3MS de hbb = aimer. Lā yuḥibbu = Il n'aime pas. La non-amour de Dieu pour les kaffār athīm est la condamnation morale finale.",
        axe1_verset: "Wa-llāhu lā yuḥibbu kulla kaffārin athīmin = Dieu n'aime pas tout impie obstinément pécheur. Le lā yuḥibbu est la formule de réprobation divine. Elle est plus forte que la simple prohibition : c'est une rupture de la relation d'amour entre Dieu et la créature.",
        axe2_voisins: "Lā yuḥibbu X est une formule récurrente dans le Coran pour condamner des comportements : lā yuḥibbu l-mutakabbirīna (2:276, 4:36), lā yuḥibbu l-ẓālimīna (3:57), lā yuḥibbu l-mufsidīna (5:64). Le non-amour de Dieu est la condamnation morale maximale.",
        axe3_sourate: "Dans al-Baqarah, lā yuḥibbu kulla kaffārin athīmin est la première formule de non-amour divin. Elle clôt la condamnation du ribā : l'usuraire récidiviste est un kaffār athīm que Dieu n'aime pas.",
        axe4_coherence: "L'amour divin (maḥabba) est le fondement de la relation Dieu-créature. Son absence (lā yuḥibbu) est donc une rupture de relation. Pour les kaffār athīm (usuraires récidivistes qui rejettent Dieu), cette rupture est la conséquence logique.",
        axe5_frequence: "La Form IV yuḥibbu/yuḥibbūna est fréquente dans le Coran (~83 fois) dans des contextes d'amour humain et divin. Lā yuḥibbu comme condamnation divine est présent environ 24 fois."
      }
    }
  });

  await insertVWA(verse_id, "kll", 10, "tout/chaque", {
    sense_chosen: "tout/chaque (totalité)",
    concept_chosen: "Totalité",
    concepts: {
      "Totalité": {
        status: "retenu",
        senses: ["tout","chaque","totalité"],
        proof_ctx: "Kulla : accusatif de kull = tout, chaque. Kulla kaffārin athīmin = tout impie pécheur. Kull ici a une valeur générale : aucune exception n'est faite.",
        axe1_verset: "Lā yuḥibbu kulla kaffārin athīmin = Il n'aime pas tout impie pécheur. Kulla = chaque, tout — sans exception. Tous les kaffār athīm sont inclus dans la non-amour divine. Il n'y a pas d'exception pour le kuffār de l'usure.",
        axe2_voisins: "Kulla dans des formules totalisantes est fréquent : kulla nafs (chaque âme), kulla mā (tout ce que). Ici kulla kaffārin = tout impie sans exception.",
        axe3_sourate: "Kull dans al-Baqarah est souvent utilisé pour des principes généraux : kulluhum āmanū (tous ont cru), kulla nafsin mā kasabat (chaque âme reçoit ce qu'elle a acquis, 2:286). Ici kulla kaffārin généralise la condamnation.",
        axe4_coherence: "La racine kll = être complet, englobar. Kull = la totalité, tous. Kulla + génitif = tout X, chaque X. L'emploi ici souligne qu'aucun usuraire récidiviste n'est exempt de la non-amour divine.",
        axe5_frequence: "Kull apparaît environ 730 fois dans le Coran — parmi les plus fréquents. Kulla dans des formules totalisantes est standard."
      }
    }
  });

  await insertVWA(verse_id, "kfr", 11, "impie/très ingrat", {
    sense_chosen: "impie/très ingrat envers Dieu",
    concept_chosen: "Rejet/Ingratitude",
    concepts: {
      "Rejet/Ingratitude": {
        status: "retenu",
        senses: ["nier","être ingrat","renier un bienfait","rejeter","mécréant"],
        proof_ctx: "Kaffārin : génitif indéfini de kaffār = Form intensif de kāfir = très ingrat, impie. Le kaffār est celui qui recouvre/nie les bienfaits de Dieu de manière répétée et obstinée.",
        axe1_verset: "Lā yuḥibbu kulla kaffārin athīmin = Il n'aime pas tout impie pécheur. Kaffār est l'intensif de kāfir — non seulement ingrat mais obstinément ingrat, répétitivement ingrat. L'usuraire récidiviste est un kaffār car il refuse l'interdiction divine.",
        axe2_voisins: "Kaffār apparaît en 14:34, 22:66, 39:3, 42:48. C'est toujours l'ingrat obstiné. En 71:27, Noé dit : wa-lā talarid ʿalā l-arḍi illā fajjāran kaffāran = sur la terre il ne reste que des impies obstinément ingrats.",
        axe3_sourate: "Dans al-Baqarah, kāfir/kuffār est fréquent pour les incroyants. Kaffār (intensif) est plus rare — il désigne une ingratitude ou un rejet obstinés, au-delà du simple kufr.",
        axe4_coherence: "La Form intensif kaffār vs kāfir : kāfir = ingrat/incroyant, kaffār = très ingrat, répétitivement ingrat. L'usuraire récidiviste est kaffār car il revient (ʿāda, 2:275) malgré l'interdiction — c'est une ingratitude active.",
        axe5_frequence: "Kaffār apparaît environ 13 fois dans le Coran. Sa fréquence modérée en fait un terme fort réservé aux cas d'ingratitude extrême."
      },
      "Couverture/Dissimulation": { status: "peu_probable", senses: ["couvrir","cacher"], proof_ctx: "Sens étymologique de kfr non dominant ici — c'est le sens d'ingratitude/rejet qui prime." }
    }
  });

  await insertVWA(verse_id, "athm", 12, "pécheur/qui accumule les fautes", {
    sense_chosen: "pécheur/obstinément fautif",
    concept_chosen: "Péché/Faute",
    concepts: {
      "Péché/Faute": {
        status: "retenu",
        senses: ["pécher","commettre une faute","péché (ithm)"],
        proof_ctx: "Athīmin : génitif indéfini de athīm = très pécheur, Form intensif de āthim. Racine athm = ithm = péché, faute. Athīm = celui qui accumule les péchés.",
        axe1_verset: "Kulla kaffārin athīmin = tout impie et pécheur. Kaffār et athīm forment une paire : rejet de Dieu (kfr) + accumulation de péchés (ithm). L'usuraire récidiviste cumule les deux : il rejette l'interdiction divine (kufr) et accumule les péchés économiques (ithm).",
        axe2_voisins: "La paire kaffār-athīm revient en 45:7 (waylu likulli affākin athīm = malheur à tout grand menteur pécheur). Les paires d'intensifs condamnent doublement le comportement.",
        axe3_sourate: "Dans al-Baqarah, ithm/athīm apparaît dans des contextes de transgression grave : 2:85 (wa-taʾtūna bihi ithman = vous commettez un péché), 2:188 (wa-taʾkulū amwāla n-nāsi bi-l-ithmi = consommer les biens des gens par le péché). L'usure est un ithm majeur.",
        axe4_coherence: "La Form intensif athīm vs āthim : āthim = qui pèche, athīm = grand pécheur, qui accumule les péchés. L'usuraire récidiviste est athīm car il multiplie les actes prohibés malgré l'avertissement divin.",
        axe5_frequence: "La racine athm apparaît environ 48 fois dans le Coran. Athīm comme Form intensif est présent environ 7 fois dans des formules de condamnation."
      }
    }
  });
}

// ============================================================
// VERSET 2:277  verse_id=284  analysis_id=644
// ============================================================
async function processVerse277() {
  console.log('\n=== 2:277 ===');
  const verse_id = 284;
  const analysis_id = 644;

  const translation_arab = "Certes, ceux qui ont cru, qui ont accompli de bonnes œuvres, établi la prière et versé la Zakāt, auront leur récompense auprès de leur Seigneur. Ils n'auront aucune crainte et ils ne seront pas affligés.";
  const full_translation = "Certes, ceux qui ont cru, qui ont accompli de bonnes œuvres, établi la prière et versé la Zakāt, auront leur récompense auprès de leur Seigneur. Ils n'auront aucune crainte et ils ne seront pas affligés.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:277 forme un contrepoint positif au verset 2:276 (condamnation des usuraires). Il décrit les quatre piliers du croyant méritant : foi (āmanū), bonnes œuvres (ʿamilū ṣ-ṣāliḥāt), prière (aqāmū ṣ-ṣalāt), zakāt (ātawū z-zakāt). Inna (pos=1) = particule d'affirmation. Āmanū (pos=3) = Form IV 3MP de ʾmn = avoir cru. ʿAmilū (pos=5) = Form I 3MP de ʿml = ont agi. Aṣ-ṣāliḥāt (pos=6) = les bonnes choses/œuvres. Aqāmū (pos=8) = Form IV 3MP de qwm = ont établi, ont accompli. Aṣ-ṣalāt (pos=9) = la prière rituelle. Ātawū (pos=11) = Form IV 3MP de ʾtw = ont donné/versé. Az-zakāt (pos=12) = la zakāt obligatoire. Lahum ajruhum ʿinda rabbihim (pos=13-16) = leur récompense auprès de leur Seigneur. Lā khawfun ʿalayhim wa-lā hum yaḥzanūna = pas de crainte sur eux et ils ne seront pas attristés.

§JUSTIFICATION§
Āmanū traduit par "ont cru" : Form IV = entrer dans la foi, adhérer — "ont cru" est le terme standard. Ṣāliḥāt traduit par "bonnes œuvres" : ṣāliḥāt = bonnes choses, actes bons — "bonnes œuvres" est la traduction consacrée. Aqāmū traduit par "établi" : Form IV de qwm = dresser, établir — aqāmū aṣ-ṣalāta = établir la prière = l'accomplir régulièrement. Ātawū traduit par "versé" : Form IV de ʾtw = donner, remettre — ātawū z-zakāta = verser la zakāt.

§CRITIQUE§
Hamidullah traduit aqāmū aṣ-ṣalāta par "accomplissent la Salat" — nous disons "établi la prière" pour rendre le sens d'aqāma = établir de façon régulière et institutionnelle. Hamidullah dit "ils acquittent la Zakat" pour ātawū z-zakāta — nous disons "versé la Zakāt". La formule de clôture est identique dans les deux traductions.`;

  const segments = [
    { position: 1, text_arab: "إِنَّ", phonetic: "inna", translation: "Certes,", grammar_type: "particle" },
    { position: 2, text_arab: "ٱلَّذِينَ", phonetic: "al-ladhīna", translation: "ceux qui", grammar_type: "particle" },
    { position: 3, text_arab: "ءَامَنُوا۟", phonetic: "āmanū", translation: "ont cru,", grammar_type: "verb", root_key: "amn" },
    { position: 4, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 5, text_arab: "عَمِلُوا۟", phonetic: "ʿamilū", translation: "accompli", grammar_type: "verb", root_key: "eml" },
    { position: 6, text_arab: "ٱلصَّـٰلِحَـٰتِ", phonetic: "aṣ-ṣāliḥāti", translation: "de bonnes œuvres,", grammar_type: "adjective", root_key: "slh" },
    { position: 7, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 8, text_arab: "أَقَامُوا۟", phonetic: "aqāmū", translation: "établi", grammar_type: "verb", root_key: "qwm" },
    { position: 9, text_arab: "ٱلصَّلَوٰةَ", phonetic: "aṣ-ṣalāta", translation: "la prière,", grammar_type: "noun", root_key: "slw" },
    { position: 10, text_arab: "وَ", phonetic: "wa", translation: "et", grammar_type: "particle" },
    { position: 11, text_arab: "ءَاتَوُا۟", phonetic: "ātawū", translation: "versé", grammar_type: "verb", root_key: "aty" },
    { position: 12, text_arab: "ٱلزَّكَوٰةَ", phonetic: "az-zakāta", translation: "la Zakāt,", grammar_type: "noun", root_key: "zkw" },
    { position: 13, text_arab: "لَهُمْ", phonetic: "lahum", translation: "auront", grammar_type: "particle" },
    { position: 14, text_arab: "أَجْرُهُمْ", phonetic: "ajruhum", translation: "leur récompense", grammar_type: "noun", root_key: "ajr" },
    { position: 15, text_arab: "عِندَ", phonetic: "ʿinda", translation: "auprès de", grammar_type: "noun", root_key: "end" },
    { position: 16, text_arab: "رَبِّهِمْ", phonetic: "rabbihim", translation: "leur Seigneur.", grammar_type: "noun", root_key: "rbb" },
    { position: 17, text_arab: "وَلَا", phonetic: "wa-lā", translation: "Ils n'auront aucune", grammar_type: "particle" },
    { position: 18, text_arab: "خَوْفٌ", phonetic: "khawfun", translation: "crainte,", grammar_type: "noun", root_key: "xwf" },
    { position: 19, text_arab: "عَلَيْهِمْ", phonetic: "ʿalayhim", translation: "sur eux,", grammar_type: "particle" },
    { position: 20, text_arab: "وَلَا", phonetic: "wa-lā", translation: "et ils ne seront pas", grammar_type: "particle" },
    { position: 21, text_arab: "هُمْ", phonetic: "hum", translation: "eux", grammar_type: "particle" },
    { position: 22, text_arab: "يَحْزَنُونَ", phonetic: "yaḥzanūna", translation: "affligés.", grammar_type: "verb", root_key: "hzn" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "amn", 3, "avoir foi/croire", {
    sense_chosen: "avoir foi/croire sincèrement",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire","avoir la foi","accepter comme vrai","croyant","confirmer"],
        proof_ctx: "Āmanū : Form IV 3MP accompli de ʾmn = croire, avoir la foi. Inna lladhīna āmanū = certes ceux qui ont cru. C'est la première des quatre conditions du croyant méritant.",
        axe1_verset: "Inna lladhīna āmanū wa-ʿamilū ṣ-ṣāliḥāti wa-aqāmū ṣ-ṣalāta wa-ātawū z-zakāta = certes ceux qui ont cru, accompli de bonnes œuvres, établi la prière et versé la zakāt. Les quatre conditions sont une chaîne : foi → œuvres bonnes → prière → zakāt. La foi (imān) est le fondement de tout.",
        axe2_voisins: "La formule alladhīna āmanū wa-ʿamilū ṣ-ṣāliḥāti est une des formules les plus fréquentes du Coran (~54 fois). Elle est ici augmentée de deux conditions supplémentaires (prière, zakāt) pour former le portrait du croyant parfait.",
        axe3_sourate: "Dans al-Baqarah, l'imān est la première condition du croyant (2:2-4 : alladhīna yuʾminūna bi-l-ghaybi wa-yuqīmūna ṣ-ṣalāta... wa-yatafaḍḍalūna mimmā razaqnāhum). Le verset 2:277 reprend cette liste de façon condensée.",
        axe4_coherence: "La Form IV āmana = croire, adhérer à la vérité. C'est un acte cognitif et spirituel : reconnaître la vérité de Dieu et l'accepter. La foi précède et fonde les œuvres.",
        axe5_frequence: "Āmanū comme Form IV de imān est présent environ 537 fois dans le Coran. C'est l'une des racines les plus fréquentes, centrale à la théologie islamique."
      },
      "Sécurité/Confiance": { status: "probable", senses: ["être en sécurité","se sentir en sécurité","faire confiance"], proof_ctx: "Le sens de sécurité/confiance est étymologiquement premier pour amn — la foi crée la sécurité intérieure. Mais ici c'est le sens d'adhésion/foi qui est retenu." }
    }
  });

  await insertVWA(verse_id, "eml", 5, "accomplir de bonnes œuvres", {
    sense_chosen: "accomplir/faire des œuvres",
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["travailler","agir","oeuvre","acte","ouvrier"],
        proof_ctx: "ʿAmilū : Form I 3MP accompli de ʿml = agir. Wa-ʿamilū ṣ-ṣāliḥāti = et ils ont accompli de bonnes œuvres. L'ʿamal (acte) complète l'imān (foi) : croire + agir.",
        axe1_verset: "Alladhīna āmanū wa-ʿamilū ṣ-ṣāliḥāti = ceux qui ont cru et agi bien. La paire imān/ʿamal est la formule de base du croyant méritant dans le Coran. La foi sans œuvres est insuffisante ; les œuvres sans foi sont vides.",
        axe2_voisins: "La formule āmanū wa-ʿamilū ṣ-ṣāliḥāti est présente environ 54 fois dans le Coran. Sa répétition constante la rend presque un slogan coranique de la spiritualité islamique.",
        axe3_sourate: "Dans al-Baqarah, ʿamala ṣāliḥan est la condition d'entrée au paradis (2:82). Le couple foi/œuvres est le cœur de l'éthique coranique.",
        axe4_coherence: "La Form I ʿamila (accompli) vs Form IV aʿmala (fait travailler) : ici Form I = action personnelle directe. L'ʿamal ṣāliḥ est l'acte moralement bon, utile, rectifiant. Il englobe toutes les formes de bien.",
        axe5_frequence: "La racine ʿml apparaît environ 359 fois dans le Coran. La paire āmanū + ʿamilū ṣ-ṣāliḥāti est une constante."
      }
    }
  });

  await insertVWA(verse_id, "slh", 6, "bonnes/rectitude", {
    sense_chosen: "bonnes/rectitude/vertueux",
    concept_chosen: "Bonté/Rectitude",
    concepts: {
      "Bonté/Rectitude": {
        status: "retenu",
        senses: ["être bon","rectitude","réparer","réconcilier","oeuvre bonne","vertueux","réformer"],
        proof_ctx: "Aṣ-ṣāliḥāti : pluriel féminin défini de ṣāliḥ = bon, vertueux. Ici ṣāliḥāt = les bonnes choses, les actes bons. Les œuvres ṣāliḥāt sont celles qui réparent, rectifient, construisent.",
        axe1_verset: "Wa-ʿamilū ṣ-ṣāliḥāti = ils ont accompli de bonnes œuvres. Les ṣāliḥāt désignent toutes les formes d'actions bonnes, rectifiantes. Elles incluent les actes rituels et sociaux : aide aux pauvres, justice, prière, etc.",
        axe2_voisins: "Ṣāliḥāt dans la formule āmanū wa-ʿamilū ṣ-ṣāliḥāti est systématique. Dans al-Baqarah, les ṣāliḥāt sont le contenu des œuvres que la foi inspire.",
        axe3_sourate: "La racine ṣlḥ = être bon, rectifier, réconcilier. Le ṣāliḥ est celui qui rectifie, qui est dans la droiture. Aṣ-ṣāliḥāt (les bonnes œuvres) sont les actes qui rectifient la situation sociale et morale.",
        axe4_coherence: "La combinaison āmana + ʿamila + ṣāliḥ crée la triade de base : foi + action + bonté. Sans les trois, la vie spirituelle est incomplète. Les ṣāliḥāt sont le test concret de la foi.",
        axe5_frequence: "La racine ṣlḥ apparaît environ 180 fois dans le Coran. Ṣāliḥāt dans la formule āmanū wa-ʿamilū ṣ-ṣāliḥāti est parmi les emplois les plus fréquents."
      }
    }
  });

  await insertVWA(verse_id, "qwm", 8, "établir la prière", {
    sense_chosen: "établir/accomplir régulièrement la prière",
    concept_chosen: "Verticalité/Droiture",
    concepts: {
      "Verticalité/Droiture": {
        status: "retenu",
        senses: ["se lever","se dresser","droit","rectitude","redresser"],
        proof_ctx: "Aqāmū : Form IV 3MP accompli de qwm = établir. Wa-aqāmū ṣ-ṣalāta = ils ont établi la prière. Form IV aqāma = faire se lever, établir, instituer.",
        axe1_verset: "Wa-aqāmū ṣ-ṣalāta = et ils ont établi la prière. L'iqāmat aṣ-ṣalāt = l'établissement régulier et institutionnel de la prière. Ce n'est pas simplement prier (yuṣallūna) mais établir, instituer la prière — c'est-à-dire la pratiquer avec régularité et conformité.",
        axe2_voisins: "La formule wa-yuqīmūna ṣ-ṣalāta est la définition de base du croyant dans al-Baqarah (2:3). Aqāmū ṣ-ṣalāta (accompli) vs yuqīmūna (inaccompli) = l'un est factuel, l'autre est habituel. Les deux sont utilisés dans la sourate.",
        axe3_sourate: "Iqāmat aṣ-ṣalāt = établir la prière est l'un des piliers de l'islam. Dans al-Baqarah, la prière est mentionnée en 2:3, 2:43, 2:45, 2:83, 2:110, 2:177, 2:238, 2:277. C'est un thème récurrent.",
        axe4_coherence: "La Form IV aqāma aṣ-ṣalāta vs Form I ṣallā : aqāma = établir, instituer (plus fort) ; ṣallā = prier simplement. L'iqāma désigne la prière accomplie correctement, dans sa forme complète et régulière.",
        axe5_frequence: "La formule aqāma/yuqīmu ṣ-ṣalāta est présente environ 17 fois dans le Coran. C'est la formule standard pour l'observance de la prière."
      }
    }
  });

  await insertVWA(verse_id, "slw", 9, "la prière rituelle", {
    sense_chosen: "la prière rituelle/l'invocation",
    concept_chosen: "Prière/Invocation",
    concepts: {
      "Prière/Invocation": {
        status: "retenu",
        senses: ["prier","prière rituelle","invoquer","bénir","lieu de prière"],
        proof_ctx: "Aṣ-ṣalāta : accusatif défini de ṣalāt = la prière rituelle. C'est le deuxième pilier de l'islam après la shahāda. La ṣalāt est l'acte de communication rituelle avec Dieu.",
        axe1_verset: "Wa-aqāmū ṣ-ṣalāta = et ils ont établi la prière. Aṣ-ṣalāt est le terme technique pour la prière rituelle islamique (cinq prières quotidiennes). Son mention après āmanū et ʿamilū ṣāliḥāt montre qu'elle est la troisième condition après la foi et les œuvres.",
        axe2_voisins: "Aṣ-ṣalāt dans la liste des conditions du croyant parfait est une constante (2:3, 2:177, 2:277). Elle est toujours associée à la zakāt (quatrième condition). La paire ṣalāt/zakāt est indissociable dans le Coran.",
        axe3_sourate: "Aṣ-ṣalāt dans al-Baqarah est mentionnée environ 15 fois. Elle est le pilier rituel central. Son association avec la zakāt (obligation financière) montre que la dévotion spirituelle et l'engagement social sont les deux dimensions indissociables de la foi.",
        axe4_coherence: "La racine ṣlw = prier, être connecté, être près. Ṣalāt = connexion rituelle avec Dieu. L'établissement de la ṣalāt est à la fois un acte individuel (prière) et social (communauté de prière).",
        axe5_frequence: "Aṣ-ṣalāt apparaît environ 83 fois dans le Coran. C'est l'un des termes les plus fréquents et les plus importants. Sa présence en 2:277 dans la liste des conditions du croyant parfait la confirme comme acte fondamental."
      }
    }
  });

  await insertVWA(verse_id, "aty", 11, "verser/donner la zakāt", {
    sense_chosen: "donner/verser la zakāt",
    concept_chosen: "Venue/Arrivée",
    concepts: {
      "Venue/Arrivée": {
        status: "retenu",
        senses: ["venir","arriver","apporter","donner","commettre"],
        proof_ctx: "Ātawū : Form IV 3MP accompli de ʾtw = donner, faire parvenir. Wa-ātawū z-zakāta = ils ont versé la zakāt. Form IV ātā = faire parvenir, donner (sens de transmission active).",
        axe1_verset: "Wa-ātawū z-zakāta = et ils ont versé la zakāt. La Form IV ātā aṣ-ṣadaqāt/az-zakāt est la formule standard pour le don de la zakāt. Le ātawū = ils ont fait parvenir — c'est la zakāt transmise à ses bénéficiaires.",
        axe2_voisins: "La même formule ātawū z-zakāta revient en 2:83, 2:110, 2:177, 2:277. Elle est la quatrième condition du croyant parfait. La paire aqāmū ṣ-ṣalāta / ātawū z-zakāta est indissociable dans le Coran.",
        axe3_sourate: "Az-zakāt dans al-Baqarah est le quatrième pilier évoqué (après iman, ʿamal, ṣalāt). Elle représente la dimension économique de la foi : l'engagement financier envers la communauté.",
        axe4_coherence: "La Form IV ātā = faire arriver = donner (activement, transmettre). C'est un acte de transmission accomplie — la zakāt est dans les mains du bénéficiaire. Elle complète la ṣalāt : connexion verticale (avec Dieu) + connexion horizontale (avec la communauté).",
        axe5_frequence: "Ātawū z-zakāta est une formule fréquente (~10 fois dans le Coran). Sa récurrence souligne l'importance de la zakāt comme obligation économique de la foi."
      }
    }
  });

  await insertVWA(verse_id, "zkw", 12, "la Zakāt/purification-croissance", {
    sense_chosen: "la Zakāt/aumône obligatoire",
    concept_chosen: "Purification/Croissance",
    concepts: {
      "Purification/Croissance": {
        status: "retenu",
        senses: ["purifier","aumône légale","croître","être pur","prospérer"],
        proof_ctx: "Az-zakāta : accusatif défini de zakāt = aumône légale obligatoire. Dérivé de zakā = être pur, croître. La zakāt purifie les biens et fait croître la spiritualité.",
        axe1_verset: "Wa-ātawū z-zakāta = ils ont versé la zakāt. Az-zakāt est l'impôt religieux obligatoire, quatrième pilier de l'islam. La racine zky = être pur, croître — zakāt purifie les biens et fait croître la bénédiction.",
        axe2_voisins: "Az-zakāt dans al-Baqarah est toujours associée à aṣ-ṣalāt. La paire représente les deux dimensions de la soumission : rituelle (prière) et sociale (zakāt). La zakāt est aussi liée à la ṣadaqa : la zakāt est obligatoire, la ṣadaqa est volontaire.",
        axe3_sourate: "Az-zakāt dans al-Baqarah (2:43, 2:83, 2:110, 2:177, 2:277) est toujours présentée comme obligation fondamentale. Elle représente la redistribution formelle des richesses imposée par la foi.",
        axe4_coherence: "La zakāt (racine zky = pur, croître) purifie les biens du donateur (en les libérant de l'attachement excessif) et fait croître la bénédiction. C'est une purification économique et spirituelle simultanée.",
        axe5_frequence: "Az-zakāt apparaît environ 32 fois dans le Coran. Sa fréquence et sa systématique association avec la ṣalāt en font l'un des termes fondamentaux de l'islam pratique."
      }
    }
  });

  await insertVWA(verse_id, "ajr", 14, "leur récompense", {
    sense_chosen: "leur récompense/salaire divin",
    concept_chosen: "Rétribution/Salaire",
    concepts: {
      "Rétribution/Salaire": {
        status: "retenu",
        senses: ["récompense","salaire","rémunération"],
        proof_ctx: "Ajruhum : ajr + suffixe 3MP = leur récompense. La même formule qu'en 2:274 : la récompense est auprès du Seigneur.",
        axe1_verset: "Lahum ajruhum ʿinda rabbihim = leur récompense est auprès de leur Seigneur. La répétition de cette formule après 2:274 crée un parallèle : les donateurs généraux (2:274) et les croyants fidèles (2:277) reçoivent la même garantie de récompense divine.",
        axe2_voisins: "La formule lahum ajruhum ʿinda rabbihim est une constante pour les croyants méritants dans le Coran. Elle est aussi présente en 3:136, 3:172.",
        axe3_sourate: "Le verset 2:277 utilise la même formule de récompense que 2:274 : ajruhum ʿinda rabbihim + lā khawf + lā huzn. Ce parallèle unit les deux versets : les généreux (2:274) et les croyants complets (2:277) ont le même destin bienheureux.",
        axe4_coherence: "L'ajr comme récompense divine est toujours ʿinda rabbihim = auprès du Seigneur, garantie et définie par Lui. La nature de la récompense n'est pas précisée — c'est une promesse ouverte, plus grande que ce qu'on peut imaginer.",
        axe5_frequence: "Ajr dans des formules de récompense divine est très fréquent dans le Coran. Sa présence en 2:277 clôt la liste des croyants fidèles avec une promesse de récompense."
      }
    }
  });

  await insertVWA(verse_id, "end", 15, "auprès de/chez", {
    sense_chosen: "auprès de leur Seigneur",
    concept_chosen: "Proximité/Présence",
    concepts: {
      "Proximité/Présence": {
        status: "retenu",
        senses: ["auprès de","chez","près de"],
        proof_ctx: "ʿInda : préposition de proximité. ʿInda rabbihim = auprès de leur Seigneur. Même formule qu'en 2:274.",
        axe1_verset: "Lahum ajruhum ʿinda rabbihim = leur récompense est auprès de leur Seigneur. ʿInda rabbihim = en la garde du Seigneur. La récompense est sûre car elle est dans la présence divine.",
        axe2_voisins: "La répétition de ʿinda rabbihim en 2:274 et 2:277 renforce l'idée que la récompense des croyants fidèles est garantie et conservée par Dieu.",
        axe3_sourate: "ʿInda llāh = auprès de Dieu est une formule de garantie absolue dans al-Baqarah. Tout ce qui est ʿinda llāh ne peut être perdu.",
        axe4_coherence: "ʿInda rabbihim insiste sur la dimension de custody divine : la récompense est gardée, préservée chez Dieu jusqu'au Jour du Jugement.",
        axe5_frequence: "ʿInda rabbihim est une formule récurrente dans des contextes de garantie divine. Sa répétition en 2:274 et 2:277 est intentionnelle."
      }
    }
  });

  await insertVWA(verse_id, "rbb", 16, "leur Seigneur", {
    sense_chosen: "leur Seigneur bienveillant",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur","maître","celui qui élève","celui qui entretient"],
        proof_ctx: "Rabbihim : rabb + suffixe 3MP. Même formule qu'en 2:274. Le rabb est le garant de la récompense pour les croyants fidèles.",
        axe1_verset: "ʿInda rabbihim = auprès de leur Seigneur. Le rabbihim souligne la relation personnelle entre les croyants et Dieu. C'est leur Seigneur — non un juge impersonnel mais un Maître bienveillant qui leur appartient et auquel ils appartiennent.",
        axe2_voisins: "Rabbihim en 2:274 et 2:277 crée un parallèle structurel. Les deux catégories (généreux + croyants) ont la même relation avec leur Seigneur.",
        axe3_sourate: "Rabb dans al-Baqarah est présent environ 50 fois. C'est l'attribut divin le plus intime, celui de la relation de soins entre Dieu et Ses créatures.",
        axe4_coherence: "Le rabb des croyants est bienveillant et fidèle à Sa promesse (ajruhum). La Seigneurie se manifeste ici par la garantie de la récompense.",
        axe5_frequence: "Rabbihim dans des formules de récompense divine est fréquent. Sa répétition en 2:274 et 2:277 est intentionnelle."
      }
    }
  });

  await insertVWA(verse_id, "xwf", 18, "crainte/peur", {
    sense_chosen: "crainte/peur eschatologique",
    concept_chosen: "Crainte/Peur",
    concepts: {
      "Crainte/Peur": {
        status: "retenu",
        senses: ["craindre","peur","appréhension"],
        proof_ctx: "Khawfun : nominatif indéfini de khawf = peur, crainte. Wa-lā khawfun ʿalayhim = et nulle crainte sur eux. Même formule eschatologique qu'en 2:274.",
        axe1_verset: "Wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūna = nulle crainte sur eux et ils ne seront pas attristés. La double promesse clôt les conditions du croyant. Après la liste (foi + œuvres + prière + zakāt), vient la récompense (ajr) et la promesse de sécurité (lā khawf, lā huzn).",
        axe2_voisins: "La formule lā khawfun ʿalayhim wa-lā hum yaḥzanūna revient pour la sixième fois dans al-Baqarah (2:38, 2:62, 2:112, 2:262, 2:274, 2:277). Sa répétition est un fil directeur de la sourate.",
        axe3_sourate: "La répétition de lā khawf + lā huzn en 2:274 et 2:277 unit les donateurs généraux et les croyants complets dans une même promesse de béatitude. Les deux portraits sont complémentaires.",
        axe4_coherence: "Khawf (crainte du futur) + huzn (tristesse du passé) = les deux dimensions de l'anxiété humaine. Leur absence = béatitude totale. C'est la promesse eschatologique maximale du Coran.",
        axe5_frequence: "Khawf dans la formule eschatologique lā khawfun ʿalayhim est présent environ 16 fois dans le Coran. Sa récurrence crée une constante de sécurité divine."
      }
    }
  });

  await insertVWA(verse_id, "hzn", 22, "ne seront pas affligés", {
    sense_chosen: "ne seront pas affligés/attristés",
    concept_chosen: "Tristesse/Affliction",
    concepts: {
      "Tristesse/Affliction": {
        status: "retenu",
        senses: ["être triste","tristesse","chagrin","affliger","attrister"],
        proof_ctx: "Yaḥzanūna : Form I inaccompli 3MP de hzn = être triste. Wa-lā hum yaḥzanūna = et ils ne seront pas attristés. Même formule qu'en 2:274.",
        axe1_verset: "Wa-lā hum yaḥzanūna = et ils ne seront pas affligés. La formule finale est identique à 2:274. Elle clôt les deux portraits (donateurs généreux en 2:274, croyants complets en 2:277) avec la même promesse de bonheur eschatologique.",
        axe2_voisins: "La répétition de la même clôture en 2:274 et 2:277 est une figure de composition circulaire (ring composition) : les deux versets sont des variations sur le même thème du croyant récompensé.",
        axe3_sourate: "Yaḥzanūna dans la formule eschatologique est une des récurrences les plus importantes d'al-Baqarah. Sa présence systématique après lā khawf crée une binarité de la béatitude.",
        axe4_coherence: "La paire khawf/huzn couvre l'anxiété du futur et du passé. L'absence des deux = plénitude du présent eschatologique. Les croyants qui ont vécu selon les quatre conditions (foi + œuvres + prière + zakāt) n'auront ni peur ni regret.",
        axe5_frequence: "Yaḥzanūna dans la formule eschatologique est présent environ 16 fois dans le Coran. Sa fréquence et sa systématique association avec lā khawf en font une formule consacrée."
      }
    }
  });
}

async function main() {
  await processVerse276();
  await processVerse277();
  console.log('\nPart 4 terminé (V276-277).');
}
main().catch(console.error);
