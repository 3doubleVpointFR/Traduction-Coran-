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
// VERSET 2:278  verse_id=285  analysis_id=642
// ============================================================
async function processVerse278() {
  console.log('\n=== 2:278 ===');
  const verse_id = 285;
  const analysis_id = 642;

  const translation_arab = "Ô vous qui avez cru ! Craignez Dieu et abandonnez ce qui reste des intérêts de l'usure, si vous êtes croyants.";
  const full_translation = "Ô vous qui avez cru ! Craignez Dieu et abandonnez ce qui reste des intérêts de l'usure, si vous êtes croyants.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:278 est une injonction directe aux croyants. Yā ayyuhā lladhīna āmanū (pos=1-3) = ô vous qui avez cru. Ittaqū llāha (pos=4-5) = craignez Dieu, Form VIII de wqy. Wadharū (pos=6) = abandonnez, Form I impératif de dhr. Mā baqiya (pos=7-8) = ce qui reste. Mina r-ribā (pos=9-10) = des intérêts de l'usure. In kuntum muʾminīna (pos=11-13) = si vous êtes croyants.

§JUSTIFICATION§
Ittaqū traduit par "craignez" : wqy Form VIII = se garder, se protéger, craindre — "craignez" est la traduction standard de taqwā. Wadharū traduit par "abandonnez" : dhr = laisser, abandonner — "abandonnez" est juste. Mā baqiya traduit par "ce qui reste" : bqy = rester, subsister — "ce qui reste" des créances d'usure. Mina r-ribā traduit par "des intérêts de l'usure" : ribā = usure — "intérêts de l'usure" précise la nature de ce qui reste. In kuntum muʾminīna = si vous êtes croyants : condition mise sur la foi.

§CRITIQUE§
Hamidullah traduit ittaqū par "craignez" — accord. Sur wadharū mā baqiya mina r-ribā, Hamidullah dit "renoncez aux arrérages d'usure" — nous disons "abandonnez ce qui reste des intérêts de l'usure" pour la clarté. La condition in kuntum muʾminīna est rendue par Hamidullah par "si vous êtes de vrais croyants" — nous disons simplement "si vous êtes croyants".`;

  const segments = [
    { position: 1, text_arab: "يَـٰٓأَيُّهَا", phonetic: "yā ayyuhā", translation: "Ô", grammar_type: "particle" },
    { position: 2, text_arab: "ٱلَّذِينَ", phonetic: "alladhīna", translation: "vous qui", grammar_type: "particle" },
    { position: 3, text_arab: "ءَامَنُوا۟", phonetic: "āmanū", translation: "avez cru !", grammar_type: "verb", root_key: "amn" },
    { position: 4, text_arab: "ٱتَّقُوا۟", phonetic: "ittaqū", translation: "Craignez", grammar_type: "verb", root_key: "wqy" },
    { position: 5, text_arab: "ٱللَّهَ", phonetic: "allāha", translation: "Dieu", grammar_type: "particle" },
    { position: 6, text_arab: "وَذَرُوا۟", phonetic: "wadharū", translation: "et abandonnez", grammar_type: "verb", root_key: "dhru" },
    { position: 7, text_arab: "مَا", phonetic: "mā", translation: "ce qui", grammar_type: "particle" },
    { position: 8, text_arab: "بَقِىَ", phonetic: "baqiya", translation: "reste", grammar_type: "verb", root_key: "bqy" },
    { position: 9, text_arab: "مِنَ", phonetic: "mina", translation: "des", grammar_type: "particle" },
    { position: 10, text_arab: "ٱلرِّبَوٰٓا۟", phonetic: "ar-ribā", translation: "intérêts de l'usure,", grammar_type: "noun", root_key: "rbw" },
    { position: 11, text_arab: "إِن", phonetic: "in", translation: "si", grammar_type: "particle" },
    { position: 12, text_arab: "كُنتُم", phonetic: "kuntum", translation: "vous êtes", grammar_type: "verb", root_key: "kwn" },
    { position: 13, text_arab: "مُّؤْمِنِينَ", phonetic: "muʾminīna", translation: "croyants.", grammar_type: "adjective", root_key: "amn" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "amn", 3, "avoir cru/croyants", {
    sense_chosen: "avoir cru/adhésion à la foi",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire","avoir la foi","accepter comme vrai","croyant","confirmer"],
        proof_ctx: "Āmanū (pos=3) : Form IV 3MP accompli. Yā ayyuhā lladhīna āmanū = ô vous qui avez cru. C'est l'interpellation standard des croyants dans le Coran.",
        axe1_verset: "Yā ayyuhā lladhīna āmanū ittaqū llāha = ô vous qui avez cru, craignez Dieu. Cette formule d'interpellation est présente environ 89 fois dans le Coran. Elle s'adresse aux croyants comme un collectif responsable. La foi (āmanū) est la condition d'appartenance au groupe interpellé.",
        axe2_voisins: "La formule yā ayyuhā lladhīna āmanū est fréquente dans al-Baqarah pour introduire des injonctions pratiques (2:104, 2:153, 2:172, 2:183, 2:254, 2:278). Elle marque le passage d'une description à une prescription.",
        axe3_sourate: "Yā ayyuhā lladhīna āmanū dans al-Baqarah est une formule de mobilisation : elle s'adresse aux croyants comme acteurs responsables, non comme simples récepteurs de vérités.",
        axe4_coherence: "La foi (āmanū) est ici présupposée mais aussi mise en question par la condition finale : in kuntum muʾminīna (si vous êtes croyants). L'abandon de l'usure est le test de la réalité de la foi.",
        axe5_frequence: "Lladhīna āmanū comme groupe interpellé est l'une des formules les plus fréquentes du Coran. Sa présence ici introduit l'injonction la plus directe sur l'usure."
      }
    }
  });

  await insertVWA(verse_id, "wqy", 4, "craindre Dieu/taqwā", {
    sense_chosen: "craindre Dieu/se protéger",
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["protéger","préserver","craindre","piété","se prémunir","éviter"],
        proof_ctx: "Ittaqū : Form VIII impératif 2MP de wqy = craindre, se protéger. Ittaqū llāha = craignez Dieu / soyez pieux envers Dieu. C'est l'injonction de la taqwā.",
        axe1_verset: "Ittaqū llāha wa-dharū mā baqiya mina r-ribā = craignez Dieu et abandonnez ce qui reste de l'usure. L'ittaqū précède et motive l'abandon de l'usure. La taqwā est la force morale qui permet d'obéir à l'injonction.",
        axe2_voisins: "Ittaqū llāha est une formule récurrente dans al-Baqarah (2:41, 2:48, 2:123, 2:189, 2:194, 2:196, 2:278, 2:282, 2:283). Elle est systématiquement l'invitation à la conscience divine avant une prescription.",
        axe3_sourate: "La taqwā (crainte révérencielle de Dieu) est le thème central d'al-Baqarah (2:2 : hudan lil-muttaqīn = guidance pour les pieux). Ici ittaqū llāha précède l'injonction d'abandonner l'usure : c'est la taqwā qui motive l'obéissance.",
        axe4_coherence: "La Form VIII ittaqā = se garder de, se protéger de. La taqwā n'est pas une peur craintive mais une vigilance aimante : se garder de déplaire à Dieu. L'abandon de l'usure est une expression de cette vigilance.",
        axe5_frequence: "Ittaqū llāha comme impératif est présent environ 15 fois dans al-Baqarah et environ 38 fois dans le Coran. C'est la formule d'appel à la piété pratique."
      }
    }
  });

  await insertVWA(verse_id, "dhru", 6, "abandonner/laisser", {
    sense_chosen: "abandonner/laisser tomber",
    concept_chosen: "Dispersion/Éparpillement",
    concepts: {
      "Dispersion/Éparpillement": {
        status: "retenu",
        senses: ["disperser"],
        proof_ctx: "Wadharū : Form I impératif 2MP de dhr/dhara = laisser, abandonner. Wa-dharū mā baqiya mina r-ribā = abandonnez ce qui reste de l'usure. La racine dhara = laisser derrière soi, disperser.",
        axe1_verset: "Wa-dharū mā baqiya mina r-ribā = abandonnez ce qui reste des intérêts d'usure. L'impératif dharū = laissez tomber, abandonnez. C'est un ordre pratique immédiat : ceux qui ont des créances d'usure en cours doivent y renoncer.",
        axe2_voisins: "Dharū dans al-Baqarah (2:278) est une injonction économique concrète. Elle porte sur mā baqiya = ce qui reste = les intérêts courus non encore perçus. C'est une mesure de transition vers l'économie sans usure.",
        axe3_sourate: "L'impératif dharū est une des rares injonctions économiques directes du Coran. Elle s'adresse aux créanciers qui ont des contrats d'usure en cours : ils doivent y renoncer immédiatement.",
        axe4_coherence: "La racine dhara = laisser derrière soi. Le concept de Dispersion/Éparpillement reflète l'idée d'éparpiller, de laisser aller. Dharū mā baqiya = laissez partir ce qui reste = abandonnez les créances.",
        axe5_frequence: "L'impératif dharū est rare dans le Coran (~5 fois). Sa rareté en fait une injonction forte et ciblée."
      },
      "Descendance/Multiplication": { status: "nul", senses: ["progéniture"], proof_ctx: "Non pertinent ici." },
      "Petitesse/Infime": { status: "nul", senses: ["atome"], proof_ctx: "Non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "bqy", 8, "ce qui reste/subsiste", {
    sense_chosen: "ce qui reste/subsiste",
    concept_chosen: "Permanence/Subsistance",
    concepts: {
      "Permanence/Subsistance": {
        status: "retenu",
        senses: ["rester","durer","subsister","conserver"],
        proof_ctx: "Baqiya : Form I accompli 3MS de bqy = rester, subsister. Mā baqiya mina r-ribā = ce qui reste des intérêts d'usure. Ce sont les intérêts courus non encore perçus.",
        axe1_verset: "Wa-dharū mā baqiya mina r-ribā = abandonnez ce qui reste de l'usure. Mā baqiya = ce qui est encore dû, les intérêts en suspens. L'injonction porte sur ce qui reste (pas le passé, cf. mā salafa en 2:275).",
        axe2_voisins: "La distinction mā salafa (ce qui est passé, 2:275) / mā baqiya (ce qui reste, 2:278) est précise : le passé est pardonné, le futur doit être abandonné. La loi islamique sur l'usure est tournée vers l'avenir.",
        axe3_sourate: "Baqiya dans al-Baqarah désigne ce qui subsiste, ce qui reste. La racine bqy = permanence, subsistance. Mā yabqā = ce qui reste, ce qui dure. Le ribā qui reste doit être abandonné pour la justice.",
        axe4_coherence: "La combinaison dharū (abandonnez) + mā baqiya (ce qui reste) est une injonction temporelle précise : les créances d'usure non encore encaissées doivent être abandonnées. C'est une mesure de justice immédiate.",
        axe5_frequence: "Baqiya dans le sens de ce qui reste est fréquent dans le Coran. Sa présence ici dans un contexte économique est précise."
      }
    }
  });

  await insertVWA(verse_id, "rbw", 10, "l'usure restante", {
    sense_chosen: "l'usure/intérêt à abandonner",
    concept_chosen: "Usure/Intérêt",
    concepts: {
      "Usure/Intérêt": {
        status: "retenu",
        senses: ["usure (riba)","intérêt financier"],
        proof_ctx: "Ar-ribā : la cinquième mention du ribā dans la séquence 2:275-280. Mā baqiya mina r-ribā = ce qui reste des intérêts d'usure. C'est maintenant l'objet de l'injonction d'abandon.",
        axe1_verset: "Dharū mā baqiya mina r-ribā = abandonnez ce qui reste de l'usure. La même injonction qu'en 2:275 (fa-ntahā = s'arrêtez) est ici formulée de manière impérative directe aux croyants. L'usure restante doit être abandonnée immédiatement.",
        axe2_voisins: "L'interdiction progressive : 2:275 ḥarrama → 2:276 yamḥaqu → 2:278 dharū. La progression logique mène de l'interdiction divine à l'injonction pratique aux croyants.",
        axe3_sourate: "La cinquième mention du ribā dans la séquence confirme son importance comme thème central. L'injonction directe en 2:278 est la plus pratique : abandonnez maintenant ce qui reste.",
        axe4_coherence: "Mā baqiya mina r-ribā = les intérêts courus non encore encaissés. L'injonction porte sur l'avenir : il ne faut plus encaisser. Le passé (mā salafa) est pardonné selon 2:275.",
        axe5_frequence: "Cinquième mention du ribā dans la séquence. La concentration est exceptionnelle dans le Coran."
      }
    }
  });

  await insertVWA(verse_id, "kwn", 12, "vous êtes/vous existez", {
    sense_chosen: "vous êtes/si vous existez comme croyants",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être (verbe incomplet)","venir à l'existence"],
        proof_ctx: "Kuntum : Form I accompli 2MP de kwn = être. In kuntum muʾminīna = si vous êtes croyants. Kāna/kuntum est le verbe incomplet qui indique un état.",
        axe1_verset: "In kuntum muʾminīna = si vous êtes croyants. La condition finale remet en question la réalité de la foi si on ne respecte pas l'injonction d'abandonner l'usure. Abandonner l'usure est le test de la foi réelle.",
        axe2_voisins: "In kuntum muʾminīna est une formule conditionnelle récurrente dans le Coran pour tester la cohérence de la foi : in kuntum tuʾminūna bi-llāhi wa-l-yawmi l-ākhir (2:232). La condition sur la foi lie la pratique à la croyance.",
        axe3_sourate: "Dans al-Baqarah, la foi (imān) est testée par les actes. In kuntum muʾminīna en 2:278 lie la foi à l'abandon de l'usure : si vous croyez vraiment, vous abandonnerez l'usure.",
        axe4_coherence: "Kāna/kuntum est le verbe d'état par excellence. In kuntum muʾminīna = si votre état est celui de croyants = si vous êtes vraiment dans cet état. La condition est un test de cohérence foi/pratique.",
        axe5_frequence: "Kāna/kuntum apparaît environ 1360 fois dans le Coran — parmi les plus fréquents. In kuntum + adjectif est une formule conditionnelle classique."
      }
    }
  });

  await insertVWA(verse_id, "amn", 13, "croyants", {
    sense_chosen: "croyants/ayant la foi",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire","avoir la foi","accepter comme vrai","croyant","confirmer"],
        proof_ctx: "Muʾminīna : pluriel de muʾmin = croyant, Form IV participe actif de amn. In kuntum muʾminīna = si vous êtes croyants. Condition finale qui lie l'injonction à la foi.",
        axe1_verset: "In kuntum muʾminīna = si vous êtes croyants. Le muʾminīna est le statut dont on est censé se réclamer. La condition est rhétorique : vous dites être croyants, alors agissez en conséquence en abandonnant l'usure.",
        axe2_voisins: "La double mention de āmanū (pos=3) et muʾminīna (pos=13) dans le même verset crée une inclusion : ouverture par l'apostrophe (vous qui avez cru) et clôture par la condition (si vous êtes croyants). La foi encadre l'injonction.",
        axe3_sourate: "Muʾminīna comme terme collectif pour les croyants est fréquent dans al-Baqarah. La condition in kuntum muʾminīna est un appel à la cohérence : être muʾmin implique d'obéir à Dieu sur l'usure.",
        axe4_coherence: "La paire āmanū (pos=3) / muʾminīna (pos=13) est une structure rhétorique : vous dites avoir cru → si vous êtes vraiment croyants → abandonnez l'usure. La foi est testée par l'acte économique.",
        axe5_frequence: "Muʾminīna comme pluriel de muʾmin est très fréquent dans le Coran (~160 fois). Sa présence ici comme condition finale de l'injonction est forte."
      }
    }
  });
}

// ============================================================
// VERSET 2:279  verse_id=286  analysis_id=643
// ============================================================
async function processVerse279() {
  console.log('\n=== 2:279 ===');
  const verse_id = 286;
  const analysis_id = 643;

  const translation_arab = "Si vous ne le faites pas, soyez avertis de la guerre de la part de Dieu et de Son Messager. Et si vous vous repentez, vos capitaux vous appartiennent. Vous ne léserez personne et personne ne vous lésera.";
  const full_translation = "Si vous ne le faites pas, soyez avertis de la guerre de la part de Dieu et de Son Messager. Et si vous vous repentez, vos capitaux vous appartiennent. Vous ne léserez personne et personne ne vous lésera.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:279 formule la conséquence du refus d'abandonner l'usure puis la règle du repentir. Fa-in lam tafʿalū (pos=1-4) = si vous ne faites pas cela. Fa-dhanū bi-ḥarbin mina llāhi wa-rasūlihi (pos=5-11) = soyez avertis d'une guerre de la part de Dieu et de Son Messager. Dhanu est Form I impératif de adhn = être averti, noter. Wa-in tubtum (pos=12-14) = et si vous vous repentez. Fa-lakum ruʾūsu amwālikum (pos=15-19) = vos capitaux vous appartiennent. Lā taẓlimūna wa-lā tuẓlamūna (pos=20-23) = vous ne léserez personne et personne ne vous lésera.

§JUSTIFICATION§
Fa-dhanū traduit par "soyez avertis" : dhn Form I impératif = sachez, soyez notifiés — "soyez avertis" est juste. Bi-ḥarbin traduit par "de la guerre" : ḥarb = guerre — "la guerre de Dieu et de Son Messager" est la déclaration de guerre la plus grave possible. Tubtum traduit par "vous vous repentez" : twb = se repentir, revenir — "vous vous repentez" est exact. Ruʾūsu amwālikum traduit par "vos capitaux" : raʾs = tête/principal + amwāl = biens — "vos capitaux" = vos biens principaux (sans les intérêts). Taẓlimūna traduit par "léserez" : ẓlm = léser, être injuste — "léserez" rend bien le sens d'injustice économique.

§CRITIQUE§
Hamidullah traduit fa-dhanū bi-ḥarb par "attendez-vous à la guerre" — nous disons "soyez avertis de la guerre" pour rendre le sens d'avertissement formel. Sur ruʾūsu amwālikum, Hamidullah dit "vous aurez la mise de fonds" — nous disons "vos capitaux vous appartiennent" pour la clarté. Sur lā taẓlimūna wa-lā tuẓlamūna, Hamidullah dit "sans léser ni être lésé" — nous sommes en accord.`;

  const segments = [
    { position: 1, text_arab: "فَ", phonetic: "fa", translation: "Si", grammar_type: "particle" },
    { position: 2, text_arab: "إِنْ", phonetic: "in", translation: "vous ne", grammar_type: "particle" },
    { position: 3, text_arab: "لَّمْ", phonetic: "lam", translation: "ne", grammar_type: "particle" },
    { position: 4, text_arab: "تَفْعَلُوا۟", phonetic: "tafʿalū", translation: "faites pas cela,", grammar_type: "verb", root_key: "fel" },
    { position: 5, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 6, text_arab: "أْذَنُوا۟", phonetic: "ʾudhnū", translation: "soyez avertis", grammar_type: "verb", root_key: "adhn" },
    { position: 7, text_arab: "بِحَرْبٍ", phonetic: "bi-ḥarbin", translation: "d'une guerre", grammar_type: "noun", root_key: "hrb" },
    { position: 8, text_arab: "مِنَ", phonetic: "mina", translation: "de la part de", grammar_type: "particle" },
    { position: 9, text_arab: "ٱللَّهِ", phonetic: "allāhi", translation: "Dieu", grammar_type: "particle" },
    { position: 10, text_arab: "وَ", phonetic: "wa", translation: "et de", grammar_type: "particle" },
    { position: 11, text_arab: "رَسُولِهِۦ", phonetic: "rasūlihi", translation: "Son Messager.", grammar_type: "noun", root_key: "rsl" },
    { position: 12, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 13, text_arab: "إِنْ", phonetic: "in", translation: "si", grammar_type: "particle" },
    { position: 14, text_arab: "تُبْتُمْ", phonetic: "tubtum", translation: "vous vous repentez,", grammar_type: "verb", root_key: "twb" },
    { position: 15, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 16, text_arab: "لَ", phonetic: "la", translation: "vous", grammar_type: "particle" },
    { position: 17, text_arab: "كُمْ", phonetic: "kum", translation: "appartiennent", grammar_type: "particle" },
    { position: 18, text_arab: "رُءُوسُ", phonetic: "ruʾūsu", translation: "les capitaux de", grammar_type: "noun", root_key: "ras" },
    { position: 19, text_arab: "أَمْوَالِكُمْ", phonetic: "amwālikum", translation: "vos biens.", grammar_type: "noun", root_key: "mwl" },
    { position: 20, text_arab: "لَا", phonetic: "lā", translation: "Vous ne", grammar_type: "particle" },
    { position: 21, text_arab: "تَظْلِمُونَ", phonetic: "taẓlimūna", translation: "léserez personne", grammar_type: "verb", root_key: "zlm" },
    { position: 22, text_arab: "وَلَا", phonetic: "wa-lā", translation: "et", grammar_type: "particle" },
    { position: 23, text_arab: "تُظْلَمُونَ", phonetic: "tuẓlamūna", translation: "personne ne vous lésera.", grammar_type: "verb", root_key: "zlm" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "fel", 4, "faire/agir", {
    sense_chosen: "faire cela/accomplir l'injonction",
    concept_chosen: "Action/Acte",
    concepts: {
      "Action/Acte": {
        status: "retenu",
        senses: ["faire","agir","action","subir une action"],
        proof_ctx: "Tafʿalū : Form I subjonctif 2MP de fʿl = faire. Fa-in lam tafʿalū = si vous ne faites pas cela. Tafʿalū renvoie à l'injonction du verset précédent : abandonner l'usure.",
        axe1_verset: "Fa-in lam tafʿalū fa-dhanū bi-ḥarbin = si vous ne faites pas (n'abandonnez pas l'usure), soyez avertis de la guerre. Le tafʿalū est anaphorique : il renvoie à l'injonction de 2:278. L'acte requis est l'abandon de l'usure.",
        axe2_voisins: "La Form I inaccompli après lam = passé négatif/subjonctif négatif. In lam tafʿalū = si vous ne le faites pas. C'est la condition du châtiment annoncé.",
        axe3_sourate: "Dans al-Baqarah, tafʿal/tafʿalū dans des conditions hypothétiques est fréquent pour les injonctions légales. In lam tafʿalū introduit la conséquence de la désobéissance.",
        axe4_coherence: "La Form I fʿl = faire, agir. Le tafʿalū ici = accomplir l'injonction prescrite. La loi coranique est conditionnelle : si vous faites (obéissez), récompense ; si vous ne faites pas (désobéissez), punition.",
        axe5_frequence: "Tafʿal/tafʿalū comme verbe d'action conditionnelle est fréquent dans les injonctions coraniques."
      }
    }
  });

  await insertVWA(verse_id, "adhn", 6, "soyez avertis/notifiés", {
    sense_chosen: "être averti/notifié",
    concept_chosen: "Annonce/Avertissement",
    concepts: {
      "Annonce/Avertissement": {
        status: "retenu",
        senses: ["avertir","appel à la prière"],
        proof_ctx: "ʾUdhnū : Form I impératif 2MP de adhn = être informé, prendre note, être averti. ʾUdhnū bi-ḥarbin = soyez notifiés d'une guerre. C'est une déclaration de guerre formelle.",
        axe1_verset: "Fa-ʾudhnū bi-ḥarbin mina llāhi wa-rasūlihi = soyez avertis d'une guerre de la part de Dieu et de Son Messager. Le ʾudhnū est une notification officielle — une déclaration de guerre. Dieu et Son Messager se positionnent en opposition aux usuraires récidivistes.",
        axe2_voisins: "Cette déclaration de guerre (ḥarb mina llāhi wa-rasūlihi) est la menace la plus grave du Coran pour un comportement économique. Elle place l'usure au niveau d'une opposition à Dieu lui-même.",
        axe3_sourate: "Dans al-Baqarah, ʾadhan/udhn (écoute, permission, annonce) est présent dans plusieurs contextes. L'impératif ʾudhnū ici est rare et exceptionnel.",
        axe4_coherence: "La racine adhn = oreille, écouter, puis notifier, annoncer. L'ʾudhun (oreille) est l'organe de la notification. ʾUdhnū = prenez note, soyez avertis.",
        axe5_frequence: "L'impératif ʾudhnū dans le sens d'avertissement est exceptionnel dans le Coran — cette déclaration de guerre est unique dans sa formulation."
      },
      "Écoute/Oreille": { status: "peu_probable", senses: ["écouter","oreille"], proof_ctx: "Sens étymologique de la racine — ici c'est le sens dérivé d'annonce/avertissement." },
      "Permission/Autorisation": { status: "peu_probable", senses: ["permission","autoriser"], proof_ctx: "Sens de permission non pertinent ici." }
    }
  });

  await insertVWA(verse_id, "hrb", 7, "la guerre/le combat", {
    sense_chosen: "la guerre/le conflit",
    concept_chosen: "Guerre/Combat",
    concepts: {
      "Guerre/Combat": {
        status: "retenu",
        senses: ["guerre","combattre","ennemi"],
        proof_ctx: "Bi-ḥarbin : préposition + génitif indéfini de ḥarb = guerre. ḥarb mina llāhi = guerre de la part de Dieu. C'est la menace la plus grave possible.",
        axe1_verset: "Fa-ʾudhnū bi-ḥarbin mina llāhi wa-rasūlihi = soyez avertis d'une guerre de la part de Dieu et de Son Messager. La ḥarb mina llāhi est unique dans le Coran — seule l'usure reçoit cette menace explicite de guerre divine.",
        axe2_voisins: "La guerre de Dieu contre l'usure est sans parallèle dans le Coran. Ailleurs les guerres sont des jihads des croyants contre les ennemis extérieurs. Ici c'est Dieu lui-même qui déclare la guerre à ses propres sujets récalcitrants.",
        axe3_sourate: "Dans al-Baqarah, la ḥarb (guerre) est mentionnée dans des contextes très graves : 2:190 (guerre juste), 2:216 (obligation de combattre). La ḥarb de Dieu contre les usuraires est encore plus grave que la ḥarb entre humains.",
        axe4_coherence: "La racine ḥrb = guerre, combat. Ḥarb comme concept abstrait désigne le conflit armé ou la hostilité. La ḥarb mina llāhi est une hostilité divine — une rupture de la relation de sécurité entre Dieu et la créature.",
        axe5_frequence: "Ḥarb apparaît environ 6 fois dans le Coran. La formule ḥarb mina llāhi wa-rasūlihi est unique et exceptionnelle."
      }
    }
  });

  await insertVWA(verse_id, "rsl", 11, "Son Messager/l'envoyé", {
    sense_chosen: "Son Messager/l'envoyé de Dieu",
    concept_chosen: "Envoi/Message",
    concepts: {
      "Envoi/Message": {
        status: "retenu",
        senses: ["envoyer","messager","message","libérer"],
        proof_ctx: "Rasūlihi : rasūl + suffixe 3MS = Son Messager. Mina llāhi wa-rasūlihi = de la part de Dieu et de Son Messager. Rasūl = messager, envoyé — celui qui est envoyé pour transmettre un message.",
        axe1_verset: "Mina llāhi wa-rasūlihi = de la part de Dieu et de Son Messager. La conjonction Dieu/Messager dans la déclaration de guerre souligne l'autorité absolue de l'injonction. C'est à la fois une loi divine et une politique prophétique.",
        axe2_voisins: "La paire llāhu wa-rasūluhu (Dieu et Son Messager) est fréquente dans le Coran pour les injonctions d'obéissance (3:32, 4:13, 8:1). Ici elle est dans un contexte de punition — l'obéissance à Dieu et à Son Messager n'est pas optionnelle.",
        axe3_sourate: "Rasūl dans al-Baqarah désigne le Prophète Muḥammad (et parfois les prophètes précédents). L'association Dieu/Messager dans une déclaration de guerre est exceptionnelle.",
        axe4_coherence: "La racine rsl = envoyer, libérer. Rasūl = celui qui est envoyé = messager. L'envoyé parle au nom de celui qui l'envoie. La déclaration de guerre vient donc de Dieu (autorité divine) transmise par le Messager (autorité prophétique).",
        axe5_frequence: "Rasūl apparaît environ 332 fois dans le Coran. L'association llāhi wa-rasūlihi est une formule d'autorité absolue présente environ 40 fois."
      }
    }
  });

  await insertVWA(verse_id, "twb", 14, "se repentir/revenir à Dieu", {
    sense_chosen: "se repentir/revenir",
    concept_chosen: "Retour",
    concepts: {
      "Retour": {
        status: "retenu",
        senses: ["revenir","se repentir","accepter le repentir","repentir"],
        proof_ctx: "Tubtum : Form I accompli 2MP de twb = se repentir, revenir. Wa-in tubtum = et si vous vous repentez. Le tawba = retour vers Dieu après une faute.",
        axe1_verset: "Wa-in tubtum fa-lakum ruʾūsu amwālikum = si vous vous repentez, vos capitaux vous appartiennent. L'ouverture miséricordieuse après la menace de guerre : le repentir annule la punition. La tawba est toujours offerte avant le châtiment définitif.",
        axe2_voisins: "La même structure menace + tawba en 2:192 : fa-in ntahaw fa-inna llāha ghafūrun raḥīmun = s'ils s'arrêtent, Dieu est Pardonneur Miséricordieux. Le repentir ouvre toujours la porte de la miséricorde.",
        axe3_sourate: "La tawba dans al-Baqarah est une constante : 2:37 (Adam, pos=tawba acceptée), 2:54 (Israël), 2:160 (ceux qui se repentent). Elle est toujours la condition du pardon.",
        axe4_coherence: "La racine twb = retour. Tāba = il est revenu (vers Dieu). Le repentir économique (tawba sur l'usure) se traduit pratiquement : abandonner les créances d'usure en cours. La tawba n'est pas seulement verbale mais implique un changement de comportement.",
        axe5_frequence: "Twb dans ses formes de repentir apparaît environ 87 fois dans le Coran. La tawba est un thème central de la spiritualité coranique."
      }
    }
  });

  await insertVWA(verse_id, "ras", 18, "les capitaux/têtes des biens", {
    sense_chosen: "les capitaux/le principal des biens",
    concept_chosen: "Capital/Principal",
    concepts: {
      "Capital/Principal": {
        status: "retenu",
        senses: ["capital (d'argent)"],
        proof_ctx: "Ruʾūsu : nominatif pluriel de raʾs = tête, sommet, principal. Ruʾūsu amwālikum = les capitaux de vos biens = le principal de vos prêts (sans les intérêts).",
        axe1_verset: "Fa-lakum ruʾūsu amwālikum = vos capitaux vous appartiennent. Ruʾūsu amwāl = les têtes des biens = le principal des prêts. Si vous vous repentez, vous récupérez votre mise de départ mais pas les intérêts. C'est une mesure de justice équitable.",
        axe2_voisins: "La formule ruʾūsu amwālikum est unique dans le Coran. Elle désigne précisément le principal des prêts, le capital sans intérêts. C'est le fondement du droit financier islamique.",
        axe3_sourate: "Dans al-Baqarah, la récupération du capital sans intérêts (ruʾūs al-amwāl) est la règle de justice économique pour la sortie de l'usure. Les débiteurs remboursent ce qu'ils ont reçu, les créanciers ne perçoivent que ce qu'ils ont prêté.",
        axe4_coherence: "La racine raʾs = tête, sommet, chef. Le raʾs al-māl = tête du bien = capital, principal. La métaphore est claire : le capital est la tête, les intérêts sont le reste du corps qu'on n'a pas le droit de récupérer.",
        axe5_frequence: "Ruʾūs dans le sens de capital est rare dans le Coran — cette occurrence est l'une des seules. Sa précision terminologique est remarquable."
      },
      "Tête/Sommet": { status: "probable", senses: ["tête","sommet","chef","début"], proof_ctx: "Sens étymologique de raʾs — ici c'est le sens dérivé de capital/principal qui prédomine." }
    }
  });

  await insertVWA(verse_id, "mwl", 19, "vos biens/votre richesse", {
    sense_chosen: "vos biens/votre richesse",
    concept_chosen: "Richesse/Biens",
    concepts: {
      "Richesse/Biens": {
        status: "retenu",
        senses: ["richesse","biens","fortune","être riche"],
        proof_ctx: "Amwālikum : pluriel de māl + suffixe 2MP = vos biens. Ruʾūsu amwālikum = les capitaux de vos biens. C'est la formule du droit de récupération des prêts.",
        axe1_verset: "Fa-lakum ruʾūsu amwālikum = vos capitaux de biens vous appartiennent. Amwālikum est l'objet dont on récupère le ruʾūs = la mise de départ. Sans les intérêts (ribā), vous récupérez votre māl initial.",
        axe2_voisins: "Amwāl dans la séquence économique d'al-Baqarah est omniprésent. Ici amwālikum désigne spécifiquement les prêts consentis dont on ne peut récupérer que le principal.",
        axe3_sourate: "La formule ruʾūsu amwālikum est la règle pratique de la finance islamique : pas d'intérêts, récupération du seul principal. C'est la base des contrats islamiques.",
        axe4_coherence: "La combinaison ruʾūs (capitaux) + amwāl (biens) crée un syntagme technique économique précis. Ruʾūs amwāl est devenu la terminologie classique pour le capital en finance islamique.",
        axe5_frequence: "Amwālikum dans des contextes économiques est fréquent dans al-Baqarah. Sa présence ici dans la formule ruʾūsu amwālikum est précisément technique."
      }
    }
  });

  await insertVWA(verse_id, "zlm", 21, "léser/commettre l'injustice", {
    sense_chosen: "léser/être injuste",
    concept_chosen: "Injustice/Oppression",
    concepts: {
      "Injustice/Oppression": {
        status: "retenu",
        senses: ["opprimer","être injuste","injustice","oppresseur"],
        proof_ctx: "Taẓlimūna : Form VIII inaccompli 2MP de ẓlm = commettre une injustice, léser. Lā taẓlimūna = vous ne léserez pas. La Form VIII ẓalama = agir injustement envers autrui.",
        axe1_verset: "Lā taẓlimūna wa-lā tuẓlamūna = vous ne léserez pas et ne serez pas lésés. La double formule équilibre parfaitement les droits des deux parties : le créancier (qui ne doit pas exiger les intérêts = ne pas léser) et le débiteur (qui doit rembourser le principal = ne pas léser non plus).",
        axe2_voisins: "La même formule lā taẓlimūna wa-lā tuẓlamūna revient en 2:279. Elle est la règle d'or de la justice économique islamique : équilibre parfait entre les deux parties.",
        axe3_sourate: "Dans al-Baqarah, ẓulm = injustice est condamné dans tous les contextes. Lā taẓlimūna (actif) = n'agissez pas injustement ; lā tuẓlamūna (passif) = ne subissez pas l'injustice. Les deux sont garantis par la règle économique.",
        axe4_coherence: "La Form VIII active taẓlimū vs Form VIII passive tuẓlamū : le premier est l'acteur de l'injustice, le second la victime. La formule double garantit l'équité des deux côtés.",
        axe5_frequence: "La paire taẓlimūna / tuẓlamūna est rare dans le Coran mais exceptionnellement précise dans ce contexte économique."
      }
    }
  });

  await insertVWA(verse_id, "zlm", 23, "être lésé/subir l'injustice", {
    sense_chosen: "être lésé/subir l'injustice",
    concept_chosen: "Injustice/Oppression",
    concepts: {
      "Injustice/Oppression": {
        status: "retenu",
        senses: ["opprimer","être injuste","injustice","oppresseur"],
        proof_ctx: "Tuẓlamūna : Form VIII passive 2MP inaccompli de ẓlm = subir l'injustice, être lésé. Wa-lā tuẓlamūna = et vous ne serez pas lésés.",
        axe1_verset: "Wa-lā tuẓlamūna = et vous ne serez pas lésés. Le passif garantit que le créancier qui renonce aux intérêts (en se repentant) ne sera pas lui-même victime d'injustice : il récupère son capital. Les deux parties sont protégées.",
        axe2_voisins: "La même formule de garantie lā tuẓlamūna revient en 2:272 (pour les donateurs) et 2:279 (pour les créanciers repentants). C'est une garantie divine de justice équitable.",
        axe3_sourate: "La double garantie lā taẓlimūna / lā tuẓlamūna clôt la séquence économique sur l'usure avec un principe de justice parfaite. Personne ne lèse, personne n'est lésé. C'est l'équilibre divin.",
        axe4_coherence: "La paire actif/passif taẓlimūna / tuẓlamūna est une figure de style chiasmatique : action injuste (actif) vs subir l'injustice (passif). Les deux sont niés simultanément. C'est la formule de l'équité absolue.",
        axe5_frequence: "Deuxième occurrence de zlm dans ce verset. La répétition active/passive est intentionnelle et rhétoriquement efficace."
      }
    }
  });
}

// ============================================================
// VERSET 2:280  verse_id=287  analysis_id=646
// ============================================================
async function processVerse280() {
  console.log('\n=== 2:280 ===');
  const verse_id = 287;
  const analysis_id = 646;

  const translation_arab = "Et si [le débiteur] est dans la gêne, accordez-lui un délai jusqu'au moment de l'aisance. Et si vous faites remise de la dette à titre d'aumône, c'est mieux pour vous, si vous saviez.";
  const full_translation = "Et si [le débiteur] est dans la gêne, accordez-lui un délai jusqu'au moment de l'aisance. Et si vous faites remise de la dette à titre d'aumône, c'est mieux pour vous, si vous saviez.";
  const translation_explanation = `§DEMARCHE§
Le verset 2:280 est le dernier de la séquence et introduit une mesure de clémence envers le débiteur insolvable. Wa-in kāna (pos=1-3) = et s'il est. Dhū ʿusratin (pos=4-5) = possesseur d'une gêne = dans la gêne. Fa-naẓiratun ilā maysaratin (pos=6-9) = alors un délai jusqu'à l'aisance. Wa-an taṣaddaqū (pos=10-12) = et si vous faites remise comme aumône. Khayrun lakum (pos=13-14) = c'est mieux pour vous. In kuntum taʿlamūna (pos=15-17) = si vous saviez.

§JUSTIFICATION§
Dhū ʿusratin traduit par "dans la gêne" : dhū = possesseur de + ʿusra = difficulté, gêne — "dans la gêne" est idiomatique. Naẓiratun traduit par "délai" : nẓr = regarder, attendre — naẓira = délai, répit — "délai" est la traduction juridique. Maysaratin traduit par "l'aisance" : ysr = être facile, aisé — maysara = aisance, facilité — "l'aisance" est juste. Taṣaddaqū traduit par "faites remise... à titre d'aumône" : ṣdq Form V = faire la ṣadaqa, donner en aumône — "remise à titre d'aumône" rend le sens de don généreux. Taʿlamūna traduit par "vous saviez" : ʿlm = savoir — la formule finale est une invitation à la réflexion.

§CRITIQUE§
Hamidullah traduit dhū ʿusratin par "dans la gêne" — accord. Pour naẓiratun ilā maysaratin, Hamidullah dit "accordez-lui un délai jusqu'à l'aisance" — nous sommes en accord. Sur wa-an taṣaddaqū, Hamidullah dit "si vous faites remise à titre d'aumône" — accord. La formule finale in kuntum taʿlamūna est rendue par Hamidullah "si vous saviez" — accord.`;

  const segments = [
    { position: 1, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 2, text_arab: "إِن", phonetic: "in", translation: "si", grammar_type: "particle" },
    { position: 3, text_arab: "كَانَ", phonetic: "kāna", translation: "[le débiteur] est", grammar_type: "verb", root_key: "kwn" },
    { position: 4, text_arab: "ذُو", phonetic: "dhū", translation: "possesseur", grammar_type: "noun", root_key: "dhwy" },
    { position: 5, text_arab: "عُسْرَةٍ", phonetic: "ʿusratin", translation: "d'une gêne,", grammar_type: "noun", root_key: "esr" },
    { position: 6, text_arab: "فَ", phonetic: "fa", translation: "alors", grammar_type: "particle" },
    { position: 7, text_arab: "نَظِرَةٌ", phonetic: "naẓiratun", translation: "un délai", grammar_type: "noun", root_key: "nzr" },
    { position: 8, text_arab: "إِلَىٰ", phonetic: "ilā", translation: "jusqu'à", grammar_type: "particle" },
    { position: 9, text_arab: "مَيْسَرَةٍ", phonetic: "maysaratin", translation: "l'aisance.", grammar_type: "noun", root_key: "ysr" },
    { position: 10, text_arab: "وَ", phonetic: "wa", translation: "Et", grammar_type: "particle" },
    { position: 11, text_arab: "أَن", phonetic: "an", translation: "si vous faites", grammar_type: "particle" },
    { position: 12, text_arab: "تَصَدَّقُوا۟", phonetic: "taṣaddaqū", translation: "remise à titre d'aumône,", grammar_type: "verb", root_key: "sdq" },
    { position: 13, text_arab: "خَيْرٌ", phonetic: "khayrun", translation: "c'est mieux", grammar_type: "noun", root_key: "khyr" },
    { position: 14, text_arab: "لَّكُمْ", phonetic: "lakum", translation: "pour vous,", grammar_type: "particle" },
    { position: 15, text_arab: "إِن", phonetic: "in", translation: "si", grammar_type: "particle" },
    { position: 16, text_arab: "كُنتُمْ", phonetic: "kuntum", translation: "vous", grammar_type: "verb", root_key: "kwn" },
    { position: 17, text_arab: "تَعْلَمُونَ", phonetic: "taʿlamūna", translation: "saviez.", grammar_type: "verb", root_key: "elm" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "kwn", 3, "être/se trouver dans un état", {
    sense_chosen: "être/se trouver dans la gêne",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être (verbe incomplet)","venir à l'existence"],
        proof_ctx: "Kāna : Form I accompli 3MS de kwn = être. Wa-in kāna dhū ʿusratin = et s'il se trouve dans la gêne. Kāna ici = se trouver dans un état (verbe incomplet d'état).",
        axe1_verset: "Wa-in kāna dhū ʿusratin fa-naẓiratun = s'il se trouve dans la gêne, accordez un délai. Kāna dhū ʿusratin = être possesseur d'une gêne = être dans la gêne. Le verbe incomplet kāna indique l'état du débiteur.",
        axe2_voisins: "Kāna + dhū + nom est une formule d'état dans le Coran : kāna dhū mirra (52:6), kāna dhū quwwa (53:5). Ici dhū ʿusratin = dans la gêne financière.",
        axe3_sourate: "Dans al-Baqarah, kāna est omniprésent comme verbe d'état. Son emploi ici dans une condition légale (in kāna = si il est dans l'état de) est standard.",
        axe4_coherence: "Le verbe incomplet kāna = être dans un état désigne une condition provisoire. Le débiteur est dans la gêne maintenant — la loi prévoit un délai jusqu'à ce que l'état change (maysara = aisance).",
        axe5_frequence: "Kāna apparaît environ 1360 fois dans le Coran. Son emploi comme verbe d'état conditionnel (in kāna X = si il est dans l'état X) est très fréquent."
      }
    }
  });

  await insertVWA(verse_id, "dhwy", 4, "possesseur d'une gêne", {
    sense_chosen: "possesseur/qui se trouve dans",
    concept_chosen: "Possession/Essence",
    concepts: {
      "Possession/Essence": {
        status: "retenu",
        senses: ["possesseur","propriétaire","doué de","essence","propriété essentielle"],
        proof_ctx: "Dhū : nominatif de dhū/dhī = possesseur de, doué de. Dhū ʿusratin = possesseur d'une gêne = celui qui a une gêne = dans la gêne.",
        axe1_verset: "Wa-in kāna dhū ʿusratin = s'il est possesseur d'une gêne. Dhū est une particule d'appartenance : avoir une propriété essentielle. Dhū ʿusra = celui dont l'état essentiel est la gêne = le débiteur insolvable.",
        axe2_voisins: "Dhū + nom de qualité est une construction récurrente : dhū l-ʿarshi (possesseur du Trône), dhū mirra (doué de force), dhū ʿusratin (dans la gêne). C'est une formule d'attribution d'une propriété.",
        axe3_sourate: "Dans al-Baqarah, dhū est présent dans des descriptions de qualités ou d'états. Dhū ʿusratin = caractérisé par la gêne = dans la gêne = insolvable.",
        axe4_coherence: "La racine dhwy = essence, possession. Dhū = possesseur, doué de. La gêne (ʿusra) est ici traitée comme une propriété de la personne — elle la caractérise pleinement. Le verset reconnaît la réalité de l'insolvabilité.",
        axe5_frequence: "Dhū comme particule d'appartenance est fréquent dans le Coran. Dhū ʿusratin comme formule d'insolvabilité est rare et précis."
      }
    }
  });

  await insertVWA(verse_id, "esr", 5, "la gêne/difficulté financière", {
    sense_chosen: "gêne/difficulté financière",
    concept_chosen: "Difficulté/Gêne",
    concepts: {
      "Difficulté/Gêne": {
        status: "retenu",
        senses: ["être difficile","difficulté","gêne financière","mettre dans la gêne"],
        proof_ctx: "ʿUsratin : génitif indéfini de ʿusra = difficulté, gêne. Dhū ʿusratin = dans la gêne, insolvable. La ʿusra est la situation financière difficile du débiteur.",
        axe1_verset: "Wa-in kāna dhū ʿusratin = s'il se trouve dans la gêne. La ʿusra est l'état d'insolvabilité — ne pas pouvoir rembourser une dette. Le verset prévoit une mesure de clémence : le délai (naẓira).",
        axe2_voisins: "La même racine ʿsr est présente dans l'adage coranique : fa-inna maʿa l-ʿusri yusran inna maʿa l-ʿusri yusran (94:5-6) = après la difficulté vient l'aisance (deux fois). La ʿusra de 2:280 se résout dans la maysara (aisance) prévue.",
        axe3_sourate: "Dans al-Baqarah, la gêne financière (ʿusra) est une réalité sociale reconnue. Le verset 2:280 est la loi coranique sur l'insolvabilité : délai jusqu'à l'aisance.",
        axe4_coherence: "La paire ʿusra/maysara (gêne/aisance) est l'axe de ce verset. La ʿusra est provisoire : elle durera jusqu'à la maysara. La loi coranique ne punit pas l'insolvable mais lui accorde du temps.",
        axe5_frequence: "La racine ʿsr apparaît environ 12 fois dans le Coran. ʿUsra dans le sens de gêne financière est présente dans des contextes de miséricorde et de clémence."
      }
    }
  });

  await insertVWA(verse_id, "nzr", 7, "délai/répit", {
    sense_chosen: "délai/répit accordé",
    concept_chosen: "Attente",
    concepts: {
      "Attente": {
        status: "retenu",
        senses: ["attendre","délai"],
        proof_ctx: "Naẓiratun : nominatif indéfini de naẓira = délai, répit, attente. Fa-naẓiratun ilā maysaratin = alors un délai jusqu'à l'aisance. Naẓira = attente, délai accordé.",
        axe1_verset: "Fa-naẓiratun ilā maysaratin = alors accordez-lui un délai jusqu'à l'aisance. Naẓira est le terme juridique pour le délai de grâce. Le créancier est invité à attendre (naẓara = regarder, attendre) que le débiteur retrouve l'aisance.",
        axe2_voisins: "La racine nẓr dans le sens d'attente/délai est présente en 37:143 (wa-law lā an kāna mina l-musabbiḥīna la-labitha fī baṭnihi ilā yawmi yubʿathūna = s'il n'avait pas été des glorificateurs, il aurait attendu jusqu'au Jour). La naẓira de 2:280 est une attente volontaire du créancier.",
        axe3_sourate: "Dans al-Baqarah, la naẓira est la mesure juridique de clémence envers le débiteur insolvable. Elle s'inscrit dans la logique générale de la sourate : équité économique et miséricorde.",
        axe4_coherence: "Naẓira (attente, délai) vs maysara (aisance) : le délai dure jusqu'au rétablissement financier. C'est une mesure pragmatique : le créancier n'abandonne pas sa créance mais l'ajourne. La tawba économique est possible.",
        axe5_frequence: "Naẓira dans le sens de délai juridique est rare dans le Coran — cette occurrence est fondatrice pour le droit islamique de l'insolvabilité."
      },
      "Regard/Contemplation": { status: "peu_probable", senses: ["regarder","voir","contempler"], proof_ctx: "Sens premier de nẓr — ici c'est le sens dérivé d'attente/délai qui prédomine dans ce contexte juridique." }
    }
  });

  await insertVWA(verse_id, "ysr", 9, "l'aisance/la facilité", {
    sense_chosen: "l'aisance/la facilité financière",
    concept_chosen: "Facilité/Aisance",
    concepts: {
      "Facilité/Aisance": {
        status: "retenu",
        senses: ["être facile","faciliter","aisance","richesse"],
        proof_ctx: "Maysaratin : génitif indéfini de maysara = aisance, facilité, prospérité. Ilā maysaratin = jusqu'à l'aisance. La maysara est le retour à la solvabilité.",
        axe1_verset: "Fa-naẓiratun ilā maysaratin = un délai jusqu'à l'aisance. La maysara = facilité, aisance financière. C'est le terme qui désigne le retour à la solvabilité. Le délai dure jusqu'à ce que le débiteur recouvre son aisance.",
        axe2_voisins: "La paire ʿusra/maysara (gêne/aisance) est renversée dans 94:5-6 : maʿa l-ʿusri yusran = avec la gêne [vient] l'aisance. La même logique s'applique ici : la ʿusra est provisoire, la maysara viendra.",
        axe3_sourate: "Dans al-Baqarah, la maysara de 2:280 est le fondement de la doctrine de l'insolvabilité islamique. Elle reconnaît que la difficulté financière est temporaire et que la justice doit en tenir compte.",
        axe4_coherence: "La racine ysr = être facile, aisé. Maysara = facilité, aisance. L'aisance est le contraire de la ʿusra (difficulté). La loi coranique est tournée vers l'avenir positif : le délai est accordé dans l'espoir de la maysara.",
        axe5_frequence: "Maysara apparaît seulement 2 fois dans le Coran (2:280 et implicitement dans 94:5-6). Sa rareté en fait un terme précis et fondateur du droit économique islamique."
      }
    }
  });

  await insertVWA(verse_id, "sdq", 12, "faire remise/aumône de la dette", {
    sense_chosen: "faire remise à titre d'aumône",
    concept_chosen: "Don/Aumône",
    concepts: {
      "Don/Aumône": {
        status: "retenu",
        senses: ["aumône","dot"],
        proof_ctx: "Taṣaddaqū : Form V impératif 2MP de ṣdq = faire la ṣadaqa. Wa-an taṣaddaqū = et si vous faites remise (de la dette) comme aumône. Form V taṣaddaqa = se montrer généreux, donner en aumône.",
        axe1_verset: "Wa-an taṣaddaqū khayrun lakum = si vous faites remise à titre d'aumône, c'est mieux pour vous. La remise totale de la dette (taṣaddaqū) est supérieure au délai (naẓira). C'est la mesure la plus généreuse : annuler la dette du débiteur insolvable.",
        axe2_voisins: "La Form V taṣaddaqa désigne l'acte de générosité maximum : non seulement attendre (naẓira) mais annuler entièrement la dette. En 57:18, al-mutaṣaddiqīna (ceux qui font l'aumône) ont une récompense multipliée.",
        axe3_sourate: "La séquence 2:271-280 se clôt sur taṣaddaqū — un retour à la ṣadaqa thème d'ouverture (2:271). La boucle est complète : de l'aumône volontaire (2:271) à la remise de dette comme aumône (2:280).",
        axe4_coherence: "La Form V taṣaddaqa (s'engager activement dans la ṣadaqa) est plus forte que la Form I ṣadaqa. C'est un acte délibéré et généreux de remise. La ṣadaqa comme annulation de dette est la forme la plus haute de générosité économique.",
        axe5_frequence: "La Form V taṣaddaqa apparaît environ 5 fois dans le Coran. Sa présence ici comme acte de générosité économique maximale clôt magnifiquement la séquence sur la générosité et l'usure."
      },
      "Vérité/Sincérité": { status: "peu_probable", senses: ["dire vrai","vrai","sincère"], proof_ctx: "Le sens de sincérité/vérité est présent en filigrane (ṣadaqa = acte sincère) mais c'est le sens d'aumône qui prédomine ici." }
    }
  });

  await insertVWA(verse_id, "khyr", 13, "mieux/meilleur", {
    sense_chosen: "mieux/meilleur pour vous",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien","meilleur","bonté"],
        proof_ctx: "Khayrun : nominatif indéfini de khayr = bien, meilleur. Khayrun lakum = c'est mieux pour vous. La même formule qu'en 2:271 (khayrun lakum pour l'aumône cachée).",
        axe1_verset: "Wa-an taṣaddaqū khayrun lakum = et si vous faites remise comme aumône, c'est mieux pour vous. Khayrun lakum clôt le verset avec la même formule qu'en 2:271 (la générosité est mieux pour soi). La structure circulaire est complète.",
        axe2_voisins: "Khayrun lakum en 2:271, 2:280 crée une inclusion rhétorique dans le passage. La générosité (aumône cachée ou remise de dette) est toujours khayrun = mieux pour le donateur.",
        axe3_sourate: "Khayrun lakum comme formule de gradation morale est récurrente dans al-Baqarah (2:184, 2:271, 2:280). Elle indique systématiquement que la générosité ou la piété est supérieure à l'alternative.",
        axe4_coherence: "Khayr comme ellatif/comparatif (mieux) est la forme de la recommandation coranique : je ne vous interdis pas X mais Y est khayrun = mieux. La liberté est préservée mais le mieux est indiqué.",
        axe5_frequence: "Khayrun lakum apparaît environ 7 fois dans le Coran dans des formules de gradation morale."
      }
    }
  });

  await insertVWA(verse_id, "kwn", 16, "si vous étiez/vous êtes", {
    sense_chosen: "si vous êtes/si vous saviez",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être (verbe incomplet)","venir à l'existence"],
        proof_ctx: "Kuntum : Form I accompli 2MP de kwn = être. In kuntum taʿlamūna = si vous saviez. Kuntum ici est le support de la condition.",
        axe1_verset: "In kuntum taʿlamūna = si vous saviez. La formule finale est une invitation à la réflexion : si vous comprenez la vérité de ce principe, vous choisirez la générosité. La connaissance (taʿlamūna) conduit à la générosité (taṣaddaqū).",
        axe2_voisins: "In kuntum taʿlamūna est une formule d'invitation au savoir et à la réflexion fréquente dans le Coran (in kuntum taʿlamūna, in kuntum muʾminīna). Elle appelle à agir selon la connaissance.",
        axe3_sourate: "In kuntum taʿlamūna clôt le verset sur une note de confiance dans l'intelligence humaine : vous saurez choisir le mieux si vous réfléchissez.",
        axe4_coherence: "Kuntum taʿlamūna = si vous étiez sachant = si vous saviez. La condition sur le savoir est une invitation à acquérir ce savoir. La clôture par le savoir (ʿilm) relie la séquence économique à la dimension de la connaissance.",
        axe5_frequence: "In kuntum + verbe de connaissance est fréquent comme formule de clôture invitante dans le Coran."
      }
    }
  });

  await insertVWA(verse_id, "elm", 17, "savoir/connaître", {
    sense_chosen: "savoir/connaître la vérité",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir","connaître","être informé","certitude","savant","science","enseignement"],
        proof_ctx: "Taʿlamūna : Form I inaccompli 2MP de ʿlm = savoir, connaître. In kuntum taʿlamūna = si vous saviez. Invitation à appliquer la connaissance.",
        axe1_verset: "In kuntum taʿlamūna = si vous saviez. La clôture de la séquence économique sur le savoir (ʿilm) est significative : la générosité (taṣaddaqū) est mieux si l'on comprend la sagesse divine. Le savoir conduit à la vertu.",
        axe2_voisins: "La formule in kuntum taʿlamūna clôt de nombreux passages coraniques sur une invitation réflexive. Elle dit : réfléchissez, et vous verrez que c'est mieux.",
        axe3_sourate: "Dans al-Baqarah, la connaissance (ʿilm) est un thème central : Dieu est ʿAlīm (Omniscient, 2:273), les croyants sont invités à savoir (taʿlamūna) pour mieux agir. La clôture de 2:280 sur taʿlamūna relie l'action économique à la connaissance spirituelle.",
        axe4_coherence: "La paire ʿAlīmun (Dieu Savant, 2:273) / taʿlamūna (vous saviez, 2:280) crée une inclusion entre les deux clôtures du passage. Dieu connaît vos dépenses (2:273) ; si vous connaissez la vérité (2:280), vous agirez bien.",
        axe5_frequence: "Taʿlamūna dans des formules de clôture invitantes est fréquent dans le Coran. Sa présence ici clôt magnifiquement la séquence 2:261-280."
      }
    }
  });
}

async function main() {
  await processVerse278();
  await processVerse279();
  await processVerse280();
  console.log('\nPart 5 terminé (V278-280). Pipeline V271-280 COMPLET.');
}
main().catch(console.error);
