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

async function insertWordDaily(analysis_id, sense, phrases) {
  for (const p of phrases) {
    const { data: existing } = await supabase.from('word_daily').select('id').eq('analysis_id', analysis_id).eq('french', p.fr);
    if (existing && existing.length > 0) { console.log(`  word_daily SKIP: ${p.fr.substring(0,40)}`); continue; }
    const { error } = await supabase.from('word_daily').insert({ analysis_id, sense, french: p.fr, arabic: p.ar, phon: p.phon });
    if (error) console.error(`  word_daily error:`, error.message);
    else console.log(`  word_daily OK: ${p.fr.substring(0,40)}`);
  }
}

// ============================================================
// VERSET 2:284  verse_id=291  analysis_id=649
// Segments importants:
//   pos=2  llh (allāhi) — nom
//   pos=5  smw (as-samāwāti) — nom
//   pos=9  ard (al-arḍi) — nom
//   pos=12 bdw (tubdū) — verbe
//   pos=15 nfs (anfusikum) — nom
//   pos=17 khf (tukhfūhu) — verbe
//   pos=18 hsb (yuḥāsibkum) — verbe
//   pos=21 llh (allāhu) — nom
//   pos=23 ghf (yaghfiru) — verbe
//   pos=25 mn (man) — pronom
//   pos=26 shy (yashāʾu) — verbe
//   pos=28 edb (yuʿadhdhibu) — verbe
//   pos=29 mn (man) — pronom
//   pos=30 shy (yashāʾu) — verbe
//   pos=31 llh (allāhu) — nom
//   pos=33 kll (kulli) — nom
//   pos=34 shy (shayʾin) — nom
//   pos=35 qdr (qadīrun) — adjectif
// ============================================================
async function processVerse284() {
  console.log('\n=== 2:284 ===');
  const verse_id = 291;
  const analysis_id = 649;

  const translation_arab = "À Dieu appartient ce qui est dans les cieux et ce qui est sur la terre. Que vous manifestiez ce qui est en vous-mêmes ou le cachiez, Dieu vous en demandera compte. Il pardonnera à qui Il voudra et châtiera qui Il voudra. Et Dieu est Puissant sur toute chose.";
  const full_translation = "À Dieu appartient ce qui est dans les cieux et ce qui est sur la terre. Que vous manifestiez ce qui est en vous-mêmes ou le cachiez, Dieu vous en demandera compte. Il pardonnera à qui Il voudra et châtiera qui Il voudra. Et Dieu est Puissant sur toute chose.";

  const translation_explanation = `§DEMARCHE§
V284 est une affirmation de la souveraineté divine et de l'omniscience sur les états intérieurs. Li-llāhi mā fī s-samāwāti wa-mā fī l-arḍ (à Dieu ce qui est dans les cieux et sur la terre). Wa-in tubdū mā fī anfusikum aw tukhfūhu yuḥāsibkum bihi llāh (que vous manifestiez ce qui est en vous ou le cachiez, Dieu vous en demandera compte). Fa-yaghfiru li-man yashāʾu wa-yuʿadhdhibu man yashāʾu (Il pardonnera à qui Il voudra et châtiera qui Il voudra). Wa-llāhu ʿalā kulli shayʾin qadīr (et Dieu est Puissant sur toute chose).

§JUSTIFICATION§
Allāhi (pos=2) : Divinité. As-samāwāti (pos=5) : smw = Ciel/Ce qui couvre. Al-arḍi (pos=9) : ard = Terre/Sol. Tubdū (pos=12) : bdw = Apparition/Manifestation. Anfusikum (pos=15) : nfs = Âme/Être. Tukhfūhu (pos=17) : khf = Dissimulation/Secret. Yuḥāsibkum (pos=18) : hsb = Calcul/Évaluation. Allāhu (pos=21) : Divinité. Yaghfiru (pos=23) : ghf = Pardon/Couverture. Man (pos=25,29) : pronom indéfini (clé mn). Yashāʾu (pos=26,30) : shy = Volonté. Yuʿadhdhibu (pos=28) : edb = Châtiment/Punition. Allāhu (pos=31) : Divinité. Kulli (pos=33) : kll = Totalité. Shayʾin (pos=34) : shy = Chose/Existence. Qadīrun (pos=35) : qdr = Puissance/Capacité.

§CRITIQUE§
Hamidullah traduit : "À Allah appartient tout ce qui est dans les cieux et sur la terre. Que vous manifestiez ce qui est en vous ou que vous le cachiez, Allah vous en demandera compte." — Notre traduction est quasi identique. Sur yuḥāsibkum, Hamidullah dit "vous en demandera compte" — accord. Les traductions courantes donnent sensiblement le même sens.`;

  const segments = [
    { position: 1, arabic: "لِّلَّهِ", phon: "li-llāhi", fr: "À Dieu", is_particle: true },
    { position: 2, arabic: "لِّلَّهِ", phon: "allāhi", fr: "Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 3, arabic: "مَا", phon: "mā", fr: "ce qui est", is_particle: true },
    { position: 4, arabic: "فِى", phon: "fī", fr: "dans", is_particle: true },
    { position: 5, arabic: "ٱلسَّمَـٰوَٰتِ", phon: "as-samāwāti", fr: "les cieux", is_particle: false, word_key: "smw", pos: "nom", sense_retenu: "les cieux" },
    { position: 6, arabic: "وَمَا", phon: "wa-mā", fr: "et ce qui est", is_particle: true },
    { position: 7, arabic: "فِى", phon: "fī", fr: "sur", is_particle: true },
    { position: 8, arabic: "ٱل", phon: "al", fr: "", is_particle: true },
    { position: 9, arabic: "أَرْضِ", phon: "al-arḍi", fr: "la terre.", is_particle: false, word_key: "ard", pos: "nom", sense_retenu: "la terre" },
    { position: 10, arabic: "وَ", phon: "wa", fr: "Que", is_particle: true },
    { position: 11, arabic: "إِن", phon: "in", fr: "vous", is_particle: true },
    { position: 12, arabic: "تُبْدُوا۟", phon: "tubdū", fr: "manifestiez", is_particle: false, word_key: "bdw", pos: "verbe", sense_retenu: "manifestez" },
    { position: 13, arabic: "مَا", phon: "mā", fr: "ce qui est", is_particle: true },
    { position: 14, arabic: "فِىٓ", phon: "fī", fr: "en", is_particle: true },
    { position: 15, arabic: "أَنفُسِكُمْ", phon: "anfusikum", fr: "vous-mêmes,", is_particle: false, word_key: "nfs", pos: "nom", sense_retenu: "vous-mêmes/vos âmes" },
    { position: 16, arabic: "أَوْ", phon: "aw", fr: "ou le", is_particle: true },
    { position: 17, arabic: "تُخْفُوهُ", phon: "tukhfūhu", fr: "cachiez,", is_particle: false, word_key: "khf", pos: "verbe", sense_retenu: "cachez" },
    { position: 18, arabic: "يُحَاسِبْكُم", phon: "yuḥāsibkum", fr: "vous en demandera compte", is_particle: false, word_key: "hsb", pos: "verbe", sense_retenu: "vous en demandera compte" },
    { position: 19, arabic: "بِهِ", phon: "bihi", fr: "de cela", is_particle: true },
    { position: 20, arabic: "ٱللَّهُ", phon: "allāhu", fr: "", is_particle: true },
    { position: 21, arabic: "ٱللَّهُ", phon: "allāhu", fr: "Dieu.", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 22, arabic: "فَ", phon: "fa", fr: "Il", is_particle: true },
    { position: 23, arabic: "يَغْفِرُ", phon: "yaghfiru", fr: "pardonnera", is_particle: false, word_key: "ghf", pos: "verbe", sense_retenu: "pardonnera" },
    { position: 24, arabic: "لِ", phon: "li", fr: "à", is_particle: true },
    { position: 25, arabic: "مَن", phon: "man", fr: "qui", is_particle: false, word_key: "mn", pos: "pronom_indéfini", sense_retenu: "qui Il voudra" },
    { position: 26, arabic: "يَشَآءُ", phon: "yashāʾu", fr: "Il voudra", is_particle: false, word_key: "shy", pos: "verbe", sense_retenu: "Il voudra" },
    { position: 27, arabic: "وَ", phon: "wa", fr: "et", is_particle: true },
    { position: 28, arabic: "يُعَذِّبُ", phon: "yuʿadhdhibu", fr: "châtiera", is_particle: false, word_key: "edb", pos: "verbe", sense_retenu: "châtiera" },
    { position: 29, arabic: "مَن", phon: "man", fr: "qui", is_particle: false, word_key: "mn", pos: "pronom_indéfini", sense_retenu: "qui Il voudra" },
    { position: 30, arabic: "يَشَآءُ", phon: "yashāʾu", fr: "Il voudra.", is_particle: false, word_key: "shy", pos: "verbe", sense_retenu: "Il voudra" },
    { position: 31, arabic: "وَٱللَّهُ", phon: "allāhu", fr: "Et Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 32, arabic: "عَلَىٰ", phon: "ʿalā", fr: "sur", is_particle: true },
    { position: 33, arabic: "كُلِّ", phon: "kulli", fr: "toute", is_particle: false, word_key: "kll", pos: "nom", sense_retenu: "toute" },
    { position: 34, arabic: "شَىْءٍ", phon: "shayʾin", fr: "chose", is_particle: false, word_key: "shy", pos: "nom", sense_retenu: "chose" },
    { position: 35, arabic: "قَدِيرٌ", phon: "qadīrun", fr: "Puissant.", is_particle: false, word_key: "qdr", pos: "adjectif", sense_retenu: "Puissant" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "llh", 2, "Dieu (propriétaire des cieux et de la terre)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu"], proof_ctx: "Li-llāhi : li = à + allāhi. À Dieu appartient tout.", axe1_verset: "Li-llāhi mā fī s-samāwāt = à Dieu ce qui est dans les cieux.", axe2_voisins: "Li-llāhi mā fī s-samāwāti wa-l-arḍ est une formule récurrente (2:109, 2:116, 2:255).", axe3_sourate: "La souveraineté divine totale est le fondement d'al-Baqarah.", axe4_coherence: "Allāh = souverain de l'univers.", axe5_frequence: "Formule de souveraineté universelle très fréquente dans le Coran." },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "smw", 5, "les cieux (la création supérieure)", {
    concept_chosen: "Ciel/Ce qui couvre",
    concepts: {
      "Ciel/Ce qui couvre": {
        status: "retenu",
        senses: ["ciel", "les cieux", "ce qui couvre"],
        proof_ctx: "As-samāwāti (pos=5) : pluriel de samāʾ = les cieux. Li-llāhi mā fī s-samāwāti = à Dieu ce qui est dans les cieux. Samāʾ = le ciel (ce qui est en hauteur au-dessus). Sens Ciel/Ce qui couvre retenu. Sens Hauteur/Élévation écarté : samāwāt est le résultat (le ciel) non le mouvement d'élévation.",
        axe1_verset: "Mā fī s-samāwāti wa-l-arḍ = ce qui est dans les cieux et sur la terre. La paire samāwāt/arḍ désigne l'univers entier.",
        axe2_voisins: "La formule samāwāt + arḍ est récurrente pour désigner l'univers total sous souveraineté divine.",
        axe3_sourate: "Al-Baqarah utilise samāwāt + arḍ comme duale d'un univers appartenant à Dieu.",
        axe4_coherence: "Samāwāt dans le Coran désigne les cieux (espaces supérieurs). Toujours pluriel quand opposé à arḍ.",
        axe5_frequence: "Samāwāt apparaît environ 190 fois dans le Coran."
      },
      "Hauteur/Élévation": { status: "nul", senses: ["hauteur"], proof_ctx: "As-samāwāti est le nom du ciel, pas l'élévation physique." },
      "Nom/Identification": { status: "nul", senses: ["nom"], proof_ctx: "Samāwāt ici est le ciel, non un nom propre." }
    }
  });

  await insertVWA(verse_id, "ard", 9, "la terre (le sol, la création inférieure)", {
    concept_chosen: "Terre/Sol",
    concepts: {
      "Terre/Sol": {
        status: "retenu",
        senses: ["terre", "sol", "la Terre"],
        proof_ctx: "Al-arḍi (pos=9) : génitif de al-arḍ = la terre. Mā fī l-arḍi = ce qui est sur la terre. Sens Terre/Sol retenu.",
        axe1_verset: "Mā fī l-arḍi = ce qui est sur la terre. La paire cieux/terre = l'univers entier appartient à Dieu.",
        axe2_voisins: "Al-arḍ dans la paire samāwāt/arḍ est récurrente pour l'universalité divine.",
        axe3_sourate: "La souveraineté de Dieu sur la terre est un thème central.",
        axe4_coherence: "Arḍ dans le Coran = la Terre (planète ou surface).",
        axe5_frequence: "Arḍ apparaît environ 461 fois dans le Coran."
      },
      "Sens isolé/Rhume": { status: "nul", senses: ["rhume"], proof_ctx: "Non applicable." },
      "Sens isolé/Tremblement": { status: "nul", senses: ["tremblement"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "bdw", 12, "manifestez (révéler l'intérieur)", {
    concept_chosen: "Apparition/Manifestation",
    concepts: {
      "Apparition/Manifestation": {
        status: "retenu",
        senses: ["manifester", "révéler", "rendre apparent"],
        proof_ctx: "Tubdū (pos=12) : Form IV inaccompli 2MP de bdw = vous révélez/manifestez. Wa-in tubdū mā fī anfusikum = que vous manifestiez ce qui est en vous. Sens Apparition/Manifestation retenu. Sens Désert/Nomadisme écarté : tubdū ici est la révélation de l'intérieur, non le nomadisme.",
        axe1_verset: "Tubdū mā fī anfusikum = vous manifestez ce qui est dans vos âmes. La révélation de l'intériorité est la condition du compte divin.",
        axe2_voisins: "Abda (Form IV) = rendre visible. En 3:29 : qul in tukhfū mā fī ṣudūrikum aw tubdūhu yaʿlamhu llāhu = que vous cachiez ce qui est dans vos cœurs ou le manifestiez, Dieu le sait.",
        axe3_sourate: "L'opposition tubdū/tukhfūhu (manifestez/cachiez) est une paire clé pour l'omniscience divine.",
        axe4_coherence: "Form IV abda = faire apparaître, révéler. La manifestation intérieure est connue de Dieu.",
        axe5_frequence: "Abda dans le Coran désigne la révélation de ce qui était caché."
      },
      "Désert/Nomadisme": { status: "nul", senses: ["désert", "nomadisme"], proof_ctx: "Tubdū ici = Form IV (révéler), non Form I (être dans le désert)." }
    }
  });

  await insertVWA(verse_id, "nfs", 15, "vous-mêmes (l'intériorité humaine)", {
    concept_chosen: "Âme/Être",
    concepts: {
      "Âme/Être": {
        status: "retenu",
        senses: ["vous-mêmes", "vos âmes", "votre intériorité"],
        proof_ctx: "Anfusikum (pos=15) : pluriel de nafs + pronom 2MP = vos âmes, vous-mêmes. Mā fī anfusikum = ce qui est en vous-mêmes. Nafs ici = l'intériorité, le for intérieur. Sens Âme/Être retenu.",
        axe1_verset: "Mā fī anfusikum = ce qui est en vous-mêmes — les intentions, pensées, états intérieurs.",
        axe2_voisins: "Mā fī l-anfus (ce qui est dans les âmes) est un thème coranique de l'omniscience divine.",
        axe3_sourate: "Al-Baqarah 2:235 : wa-lākinna lā tuʿāwidūhunna sirran illā an taqūlū qawlan maʿrūfan — le for intérieur est connu de Dieu.",
        axe4_coherence: "Anfus (pluriel de nafs) désigne les intériorités des personnes.",
        axe5_frequence: "Anfus comme pluriel de nafs apparaît souvent dans les contextes d'omniscience divine."
      },
      "Souffle/Vie": { status: "nul", senses: ["souffle"], proof_ctx: "Anfusikum ici = vos intériorités, pas vos souffles." },
      "Corps/Anatomie": { status: "nul", senses: ["sang"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "khf", 17, "cachez (dissimuler l'intérieur)", {
    concept_chosen: "Dissimulation/Secret",
    concepts: {
      "Dissimulation/Secret": {
        status: "retenu",
        senses: ["cacher", "dissimuler", "tenir secret"],
        proof_ctx: "Tukhfūhu (pos=17) : Form IV inaccompli 2MP de khf = vous cachez. Aw tukhfūhu = ou vous le cachez. Akhfā = cacher, dissimuler (Form IV). Sens Dissimulation/Secret retenu. Antonyme de tubdū (manifestez).",
        axe1_verset: "Tubdū aw tukhfūhu = manifestez ou cachez. La paire montre que Dieu voit les deux — le manifeste et le caché.",
        axe2_voisins: "L'opposition abda/akhfā est récurrente dans les versets de l'omniscience divine.",
        axe3_sourate: "La dissimulation de l'intérieur est connue de Dieu comme la manifestation.",
        axe4_coherence: "Form IV akhfā = rendre caché. Dieu pénètre même ce qui est délibérément caché.",
        axe5_frequence: "Akhfā dans le Coran désigne la dissimulation intentionnelle."
      }
    }
  });

  await insertVWA(verse_id, "hsb", 18, "demandera compte (reddition divine)", {
    concept_chosen: "Calcul/Évaluation",
    concepts: {
      "Calcul/Évaluation": {
        status: "retenu",
        senses: ["calculer", "évaluer", "demander compte", "rendre compte"],
        proof_ctx: "Yuḥāsibkum (pos=18) : Form III inaccompli 3MS de hsb + pronom = Il vous demandera compte. Ḥāsaba = demander le compte de, calculer mutuellement. Sens Calcul/Évaluation retenu dans le sens juridique de la reddition des comptes.",
        axe1_verset: "Yuḥāsibkum bihi llāhu = Dieu vous en demandera compte. Le calcul divin portera sur ce qui a été révélé ou caché.",
        axe2_voisins: "La Form III ḥāsaba est récurrente dans les versets eschatologiques : en 84:8 : fa-sawfa yuḥāsabu ḥisāban yasīran = il sera compté d'un compte facile.",
        axe3_sourate: "Al-ḥisāb (le compte) est un thème fondamental d'al-Baqarah eschatologique.",
        axe4_coherence: "Form III ḥāsaba = calculer réciproquement, demander le compte. Yuḥāsib = Il demandera compte.",
        axe5_frequence: "La racine hsb dans le sens de reddition des comptes est très fréquente dans le Coran."
      },
      "Suffisance": { status: "nul", senses: ["suffisance"], proof_ctx: "Yuḥāsibkum est la demande de compte, non la suffisance (ḥasb = assez)." },
      "Sens isolé/Noblesse": { status: "nul", senses: ["noblesse"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "llh", 21, "Dieu (le comptable divin)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu"], proof_ctx: "Allāhu (pos=21) : sujet de yuḥāsibkum = Dieu vous demandera compte.", axe1_verset: "Yuḥāsibkum bihi llāhu = Dieu vous en demandera compte.", axe2_voisins: "Allāh comme sujet du jugement.", axe3_sourate: "Dieu = le juge ultime.", axe4_coherence: "Allāh = nom propre divin.", axe5_frequence: "2699 fois dans le Coran." },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "ghf", 23, "pardonnera (couverture divine)", {
    concept_chosen: "Pardon/Couverture",
    concepts: {
      "Pardon/Couverture": {
        status: "retenu",
        senses: ["pardonner", "couvrir", "effacer"],
        proof_ctx: "Yaghfiru (pos=23) : Form I inaccompli 3MS de ghf = pardonnera. Fa-yaghfiru li-man yashāʾu = Il pardonnera à qui Il voudra. Ghafara = couvrir, pardonner. Sens Pardon/Couverture retenu.",
        axe1_verset: "Fa-yaghfiru li-man yashāʾu = Il pardonnera à qui Il voudra. Le pardon divin est libre (li-man yashāʾ = selon Sa volonté).",
        axe2_voisins: "Le pardon divin dans al-Baqarah est un thème récurrent. En 2:218, 2:226, 2:235.",
        axe3_sourate: "Le pardon (maghfira) est une des prérogatives divines centrales dans al-Baqarah.",
        axe4_coherence: "Ghafara = couvrir les fautes, pardonner. La racine ghfr est étymologiquement liée au fait de couvrir/protéger.",
        axe5_frequence: "La racine ghf dans le sens de pardon apparaît environ 234 fois dans le Coran."
      },
      "Protection": { status: "nul", senses: ["protection"], proof_ctx: "Yaghfiru ici = pardonner, non protéger." }
    }
  });

  await insertVWA(verse_id, "mn", 25, "qui Il voudra (pronom indéfini)", {
    concept_chosen: "Quiconque/Indéfini",
    concepts: {
      "Quiconque/Indéfini": {
        status: "retenu",
        senses: ["qui", "quiconque", "celui que"],
        proof_ctx: "Man (pos=25) : pronom indéfini = qui, quiconque. Li-man yashāʾu = à qui Il voudra. La clé 'mn' (id=305) a pour concept retenu Quiconque/Indéfini. Sens retenu.",
        axe1_verset: "Li-man yashāʾu = à qui Il voudra. La volonté divine est souveraine dans l'attribution du pardon.",
        axe2_voisins: "Man yashāʾu dans les formules du pardon et du châtiment divins (2:142, 2:213, 2:284).",
        axe3_sourate: "La liberté divine dans le pardon et le châtiment est un attribut fondamental.",
        axe4_coherence: "Man comme pronom indéfini de personne est très fréquent.",
        axe5_frequence: "Man apparaît ~1575 fois dans le Coran."
      }
    }
  });

  await insertVWA(verse_id, "shy", 26, "Il voudra (la volonté divine)", {
    concept_chosen: "Volonté",
    concepts: {
      "Volonté": {
        status: "retenu",
        senses: ["vouloir", "volonté divine", "décider"],
        proof_ctx: "Yashāʾu (pos=26) : Form I inaccompli 3MS de shy = Il voudra. Li-man yashāʾu = à qui Il voudra. Shāʾa = vouloir, décider. Sens Volonté retenu. Sens Chose/Être écarté : yashāʾu est le verbe de volonté.",
        axe1_verset: "Fa-yaghfiru li-man yashāʾu wa-yuʿadhdhibu man yashāʾu = Il pardonnera à qui Il voudra et châtiera qui Il voudra. La volonté divine est souveraine.",
        axe2_voisins: "Man yashāʾu (qui Il voudra) est une formule récurrente pour la souveraineté divine.",
        axe3_sourate: "La volonté divine (mashīʾa) est absolue dans al-Baqarah.",
        axe4_coherence: "Shāʾa = vouloir (verbe de volonté). Yashāʾu = Il voudra.",
        axe5_frequence: "Shāʾa apparaît environ 228 fois dans le Coran."
      },
      "Chose/Être": { status: "nul", senses: ["chose"], proof_ctx: "Yashāʾu est le verbe de volonté, non le nom de chose (shayʾ)." },
      "Néant": { status: "nul", senses: ["néant"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "edb", 28, "châtiera (punition divine)", {
    concept_chosen: "Châtiment/Punition",
    concepts: {
      "Châtiment/Punition": {
        status: "retenu",
        senses: ["châtier", "punir", "infliger un châtiment"],
        proof_ctx: "Yuʿadhdhibu (pos=28) : Form II inaccompli 3MS de edb = Il châtiera. Wa-yuʿadhdhibu man yashāʾu = et Il châtiera qui Il voudra. Sens Châtiment/Punition retenu.",
        axe1_verset: "Yuʿadhdhibu man yashāʾu = Il châtiera qui Il voudra. Le châtiment divin est la contrepartie du pardon.",
        axe2_voisins: "La paire yaghfiru/yuʿadhdhibu est récurrente dans les formules de souveraineté divine (5:40, 48:14).",
        axe3_sourate: "Le châtiment divin dans al-Baqarah est mentionné pour les transgresseurs.",
        axe4_coherence: "ʿAdhdhaba = infliger le ʿadhāb (châtiment). Form II = intensif.",
        axe5_frequence: "ʿAdhāb/yuʿadhdhibu dans le Coran désigne toujours le châtiment divin."
      },
      "Abstention": { status: "nul", senses: ["abstention"], proof_ctx: "Non applicable." },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." },
      "Douceur": { status: "nul", senses: ["douceur"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "mn", 29, "qui (pronom indéfini, 2e occurrence)", {
    concept_chosen: "Quiconque/Indéfini",
    concepts: {
      "Quiconque/Indéfini": { status: "retenu", senses: ["qui", "quiconque"], proof_ctx: "Man (pos=29) : même usage que pos=25. Wa-yuʿadhdhibu man yashāʾu = châtiera qui Il voudra.", axe1_verset: "Man yashāʾu = qui Il voudra.", axe2_voisins: "Répétition man yashāʾu dans la paire pardon/châtiment.", axe3_sourate: "Souveraineté divine sur le destin de chacun.", axe4_coherence: "Pronom indéfini.", axe5_frequence: "Man ~1575 fois." }
    }
  });

  await insertVWA(verse_id, "shy", 30, "Il voudra (volonté divine, 2e occurrence)", {
    concept_chosen: "Volonté",
    concepts: {
      "Volonté": { status: "retenu", senses: ["vouloir", "volonté"], proof_ctx: "Yashāʾu (pos=30) : même usage que pos=26.", axe1_verset: "Wa-yuʿadhdhibu man yashāʾu = et châtiera qui Il voudra.", axe2_voisins: "Répétition de man yashāʾu.", axe3_sourate: "Volonté divine absolue.", axe4_coherence: "Shāʾa = vouloir.", axe5_frequence: "~228 fois dans le Coran." },
      "Chose/Être": { status: "nul", senses: ["chose"], proof_ctx: "Yashāʾu est un verbe de volonté." },
      "Néant": { status: "nul", senses: ["néant"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "llh", 31, "Dieu (Puissant sur toute chose)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu"], proof_ctx: "Allāhu (pos=31) : sujet de qadīrun = Dieu est Puissant.", axe1_verset: "Wa-llāhu ʿalā kulli shayʾin qadīrun = et Dieu est Puissant sur toute chose.", axe2_voisins: "Formule de clôture wa-llāhu ʿalā kulli shayʾin qadīr.", axe3_sourate: "Omnipotence divine = fondement de toutes les obligations.", axe4_coherence: "Allāh = nom propre divin.", axe5_frequence: "2699 fois." },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "kll", 33, "toute (totalité universelle)", {
    concept_chosen: "Totalité",
    concepts: {
      "Totalité": { status: "retenu", senses: ["tout", "toute", "chaque"], proof_ctx: "Kulli (pos=33) : génitif de kull. ʿAlā kulli shayʾin qadīr = Puissant sur toute chose. Kull + génitif = totalité universelle.", axe1_verset: "ʿAlā kulli shayʾin = sur toute chose. L'omnipotence est sans exception.", axe2_voisins: "Wa-llāhu ʿalā kulli shayʾin qadīr est une formule récurrente de clôture.", axe3_sourate: "La toute-puissance divine sur toute chose est un attribut fondamental.", axe4_coherence: "Kull + génitif = toute (distribution universelle).", axe5_frequence: "Kull apparaît ~750 fois dans le Coran." },
      "Émoussement/Faiblesse": { status: "nul", senses: ["émoussement"], proof_ctx: "Non applicable." },
      "Charge/Dépendance": { status: "nul", senses: ["fardeau"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "shy", 34, "chose (l'objet de l'omnipotence)", {
    concept_chosen: "Chose/Existence",
    concepts: {
      "Chose/Existence": { status: "retenu", senses: ["chose", "objet", "réalité"], proof_ctx: "Shayʾin (pos=34) : génitif de shayʾ = chose. ʿAlā kulli shayʾin = sur toute chose. Sens Chose/Existence retenu.", axe1_verset: "Kulli shayʾin = toute chose. L'omnipotence divine couvre l'intégralité de l'existence.", axe2_voisins: "Formule wa-llāhu ʿalā kulli shayʾin qadīr fréquente dans le Coran.", axe3_sourate: "Toute chose est dans la puissance divine.", axe4_coherence: "Shayʾ = toute réalité existante.", axe5_frequence: "Shayʾ ~520 fois dans le Coran." },
      "Volonté": { status: "nul", senses: ["vouloir"], proof_ctx: "Shayʾin ici est un nom (chose), non le verbe shāʾa." },
      "Néant": { status: "nul", senses: ["néant"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "qdr", 35, "Puissant (attribut divin de toute-puissance)", {
    concept_chosen: "Puissance/Capacité",
    concepts: {
      "Puissance/Capacité": {
        status: "retenu",
        senses: ["puissant", "tout-puissant", "capable"],
        proof_ctx: "Qadīrun (pos=35) : Form I adjectif de qdr = puissant. Wa-llāhu ʿalā kulli shayʾin qadīrun = Dieu est Puissant sur toute chose. Qadīr = celui qui a le pouvoir absolu. Sens Puissance/Capacité retenu.",
        axe1_verset: "Qadīrun ʿalā kulli shayʾin = Puissant sur toute chose. Qadīr est un attribut divin d'omnipotence.",
        axe2_voisins: "Wa-llāhu ʿalā kulli shayʾin qadīr est une formule de clôture récurrente dans le Coran.",
        axe3_sourate: "L'omnipotence divine clôt le verset sur la souveraineté universelle.",
        axe4_coherence: "Qadīr comme attribut divin apparaît environ 45 fois dans le Coran.",
        axe5_frequence: "Wa-llāhu ʿalā kulli shayʾin qadīr est parmi les formules coraniques les plus récurrentes."
      },
      "Mesure/Détermination": { status: "nul", senses: ["mesure"], proof_ctx: "Qadīr ici = Puissant (attribut), non mesurer (verbe)." },
      "Sens isolé/Marmite": { status: "nul", senses: ["marmite"], proof_ctx: "Non applicable." }
    }
  });

  // word_daily for V284 new roots
  await insertWordDaily(1206, "cacher", [
    { fr: "Il a caché la vérité pour protéger quelqu'un.", ar: "أَخْفَى الْحَقِيقَةَ لِحِمَايَةِ شَخْصٍ.", phon: "akhfā al-ḥaqīqata li-ḥimāyat shakhṣ" },
    { fr: "Elle a gardé secret son départ.", ar: "أَخْفَتْ رَحِيلَهَا.", phon: "akhfat raḥīlahā" },
    { fr: "Ce qui est caché dans le cœur, Dieu le connaît.", ar: "مَا يُخْفَى فِي الْقَلْبِ يَعْلَمُهُ اللَّهُ.", phon: "mā yukfhā fī al-qalbi yaʿlamuhu llāhu" }
  ]);

  await insertWordDaily(996, "compte", [
    { fr: "Il devra rendre compte de ses actes.", ar: "سَيُحَاسَبُ عَلَى أَفْعَالِهِ.", phon: "sa-yuḥāsabu ʿalā afʿālihi" },
    { fr: "J'estime que cela vaut la peine.", ar: "أَحْسِبُ أَنَّ ذَلِكَ يَسْتَحِقُّ.", phon: "aḥsibu anna dhālika yastaḥiqqu" },
    { fr: "Le calcul des dépenses prend du temps.", ar: "حِسَابُ النَّفَقَاتِ يَأْخُذُ وَقْتًا.", phon: "ḥisābu an-nafaqāti yaʾkhudhu waqtan" }
  ]);

  console.log('\nVERSET 2:284 — TERMINÉ');
}

// ============================================================
// VERSET 2:285  verse_id=292  analysis_id=651
// Segments importants:
//   pos=1  amn  (ʾāmana) — verbe
//   pos=2  rsl  (ar-rasūlu) — nom
//   pos=4  ma   (mā) — nom
//   pos=5  nzl  (ʾunzila) — verbe passif
//   pos=8  rbb  (rabbihi) — nom
//   pos=10 amn  (al-muʾminūna) — nom
//   pos=11 kll  (kullun) — nom
//   pos=12 amn  (ʾāmana) — verbe
//   pos=14 alh  (allāhi) — nom
//   pos=16 mlk  (malāʾikatihi) — nom
//   pos=18 ktb  (kutubihi) — nom
//   pos=20 rsl  (rusulihi) — nom
//   pos=22 frq  (nufarriqu) — verbe
//   pos=23 byn  (bayna) — nom
//   pos=24 ahd  (ʾaḥadin) — nom
//   pos=26 rsl  (rusulihi) — nom
//   pos=28 sme  (samiʿnā) — verbe
//   pos=30 twe  (ʾaṭaʿnā) — verbe
//   pos=31 ghfr (ghufrānaka) — nom
//   pos=32 rbb  (rabbnā) — nom
//   pos=35 swr  (al-maṣīru) — nom
// ============================================================
async function processVerse285() {
  console.log('\n=== 2:285 ===');
  const verse_id = 292;
  const analysis_id = 651;

  const translation_arab = "Le Messager a cru en ce qui lui a été révélé par son Seigneur, et les croyants également. Chacun a cru en Dieu, Ses anges, Ses écrits et Ses messagers. Nous ne faisons pas de distinction entre aucun de Ses messagers. Et ils ont dit : Nous avons entendu et obéi. Pardonne-nous, notre Seigneur, et c'est vers Toi que tout retourne.";
  const full_translation = "Le Messager a cru en ce qui lui a été révélé par son Seigneur, et les croyants également. Chacun a cru en Dieu, Ses anges, Ses écrits et Ses messagers. Nous ne faisons pas de distinction entre aucun de Ses messagers. Et ils ont dit : Nous avons entendu et obéi. Pardonne-nous, notre Seigneur, et c'est vers Toi que tout retourne.";

  const translation_explanation = `§DEMARCHE§
V285 est l'énoncé de la profession de foi du Messager et des croyants. Āmana r-rasūlu bimā unzila ilayhi min rabbihi wa-l-muʾminūna (le Messager a cru en ce qui lui a été révélé par son Seigneur, et les croyants aussi). Kullun āmana bi-llāhi wa-malāʾikatihi wa-kutubihi wa-rusulihi (chacun a cru en Dieu, ses anges, ses écrits et ses messagers). Lā nufarriqu bayna aḥadin min rusulihi (nous ne distinguons pas entre aucun de ses messagers). Wa-qālū samiʿnā wa-aṭaʿnā ghufrānaka rabbanā wa-ilayka l-maṣīru (et ils ont dit : nous avons entendu et obéi, pardonne-nous notre Seigneur, et c'est vers Toi que tout retourne).

§JUSTIFICATION§
Āmana : amn = Foi/Adhésion. Ar-rasūlu : rsl = Envoi/Message (le Messager). Mā : ma = particule relative. Unzila : nzl = Descente/Révélation. Rabbihi : rbb = Seigneurie/Autorité bienveillante. Al-muʾminūna : amn = Foi/Adhésion. Kullun : kll = Totalité. Allāhi : alh = Divinité. Malāʾikatihi : mlk = Ange/Messager. Kutubihi : ktb = Livre/Écrit. Rusulihi : rsl = Envoi/Message. Nufarriqu : frq = Séparation/Distinction. Bayna : byn = Séparation/Distance. Aḥadin : ahd = Unicité/Indivisibilité (ici quiconque/personne). Samiʿnā : sme = Audition/Écoute. Aṭaʿnā : twe = Obéissance/Soumission volontaire. Ghufrānaka : ghfr = Pardon/Couverture. Rabbanā : rbb = Seigneurie/Autorité bienveillante. Al-maṣīru : swr = Forme/Image (ici al-maṣīr = la destination finale).

§CRITIQUE§
Hamidullah traduit : "Le Messager a cru en ce qui lui a été descendu de la part de son Seigneur, et aussi les croyants." — Notre traduction "révélé" pour unzila est plus précise que "descendu" (même sens mais révélation est plus courant en français). Sur lā nufarriqu bayna aḥadin min rusulihi, Hamidullah dit "nous ne faisons pas de différence entre ses prophètes" — nous disons "messagers" (rusul = messagers). Les traductions courantes donnent sensiblement le même sens.`;

  const segments = [
    { position: 1, arabic: "ءَامَنَ", phon: "ʾāmana", fr: "a cru", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "a cru" },
    { position: 2, arabic: "ٱلرَّسُولُ", phon: "ar-rasūlu", fr: "Le Messager", is_particle: false, word_key: "rsl", pos: "nom", sense_retenu: "le Messager" },
    { position: 3, arabic: "بِ", phon: "bi", fr: "en ce qui", is_particle: true },
    { position: 4, arabic: "مَآ", phon: "mā", fr: "ce qui", is_particle: false, word_key: "ma", pos: "nom", sense_retenu: "ce qui" },
    { position: 5, arabic: "أُنزِلَ", phon: "ʾunzila", fr: "a été révélé", is_particle: false, word_key: "nzl", pos: "verbe", sense_retenu: "a été révélé" },
    { position: 6, arabic: "إِلَيْهِ", phon: "ʾilayhi", fr: "à lui", is_particle: true },
    { position: 7, arabic: "مِن", phon: "min", fr: "par", is_particle: true },
    { position: 8, arabic: "رَّبِّهِ", phon: "rabbihi", fr: "son Seigneur,", is_particle: false, word_key: "rbb", pos: "nom", sense_retenu: "son Seigneur" },
    { position: 9, arabic: "وَٱلْمُؤْمِنُونَ", phon: "wa-l-muʾminūna", fr: "et les croyants", is_particle: true },
    { position: 10, arabic: "ٱلْمُؤْمِنُونَ", phon: "al-muʾminūna", fr: "croyants", is_particle: false, word_key: "amn", pos: "nom", sense_retenu: "les croyants" },
    { position: 11, arabic: "كُلٌّ", phon: "kullun", fr: "Chacun", is_particle: false, word_key: "kll", pos: "nom", sense_retenu: "chacun" },
    { position: 12, arabic: "ءَامَنَ", phon: "ʾāmana", fr: "a cru", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "a cru" },
    { position: 13, arabic: "بِ", phon: "bi", fr: "en", is_particle: true },
    { position: 14, arabic: "ٱللَّهِ", phon: "allāhi", fr: "Dieu,", is_particle: false, word_key: "alh", pos: "nom", sense_retenu: "Dieu" },
    { position: 15, arabic: "وَ", phon: "wa", fr: "Ses", is_particle: true },
    { position: 16, arabic: "مَلَـٰٓئِكَتِهِ", phon: "malāʾikatihi", fr: "anges,", is_particle: false, word_key: "mlk", pos: "nom", sense_retenu: "Ses anges" },
    { position: 17, arabic: "وَ", phon: "wa", fr: "Ses", is_particle: true },
    { position: 18, arabic: "كُتُبِهِ", phon: "kutubihi", fr: "écrits,", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "Ses écrits" },
    { position: 19, arabic: "وَ", phon: "wa", fr: "et Ses", is_particle: true },
    { position: 20, arabic: "رُسُلِهِ", phon: "rusulihi", fr: "messagers.", is_particle: false, word_key: "rsl", pos: "nom", sense_retenu: "Ses messagers" },
    { position: 21, arabic: "لَا", phon: "lā", fr: "Nous ne", is_particle: true },
    { position: 22, arabic: "نُفَرِّقُ", phon: "nufarriqu", fr: "distinguons pas", is_particle: false, word_key: "frq", pos: "verbe", sense_retenu: "distinguons" },
    { position: 23, arabic: "بَيْنَ", phon: "bayna", fr: "entre", is_particle: false, word_key: "byn", pos: "nom", sense_retenu: "entre" },
    { position: 24, arabic: "أَحَدٍ", phon: "ʾaḥadin", fr: "aucun", is_particle: false, word_key: "ahd", pos: "nom", sense_retenu: "aucun" },
    { position: 25, arabic: "مِّن", phon: "min", fr: "de", is_particle: true },
    { position: 26, arabic: "رُّسُلِهِ", phon: "rusulihi", fr: "Ses messagers.", is_particle: false, word_key: "rsl", pos: "nom", sense_retenu: "Ses messagers" },
    { position: 27, arabic: "وَقَالُوا۟", phon: "wa qālū", fr: "Et ils ont dit :", is_particle: true },
    { position: 28, arabic: "سَمِعْنَا", phon: "samiʿnā", fr: "Nous avons entendu", is_particle: false, word_key: "sme", pos: "verbe", sense_retenu: "avons entendu" },
    { position: 29, arabic: "وَ", phon: "wa", fr: "et", is_particle: true },
    { position: 30, arabic: "أَطَعْنَا", phon: "ʾaṭaʿnā", fr: "obéi.", is_particle: false, word_key: "twe", pos: "verbe", sense_retenu: "obéi" },
    { position: 31, arabic: "غُفْرَانَكَ", phon: "ghufrānaka", fr: "Pardonne-nous,", is_particle: false, word_key: "ghfr", pos: "nom", sense_retenu: "ton pardon" },
    { position: 32, arabic: "رَبَّنَا", phon: "rabbnā", fr: "notre Seigneur,", is_particle: false, word_key: "rbb", pos: "nom", sense_retenu: "notre Seigneur" },
    { position: 33, arabic: "وَ", phon: "wa", fr: "et", is_particle: true },
    { position: 34, arabic: "إِلَيْكَ", phon: "ʾilayka", fr: "c'est vers Toi", is_particle: true },
    { position: 35, arabic: "ٱلْمَصِيرُ", phon: "al-maṣīru", fr: "que tout retourne.", is_particle: false, word_key: "swr", pos: "nom", sense_retenu: "la destination finale" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  await insertVWA(verse_id, "amn", 1, "a cru (le Messager, foi)", {
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": { status: "retenu", senses: ["croire", "avoir la foi"], proof_ctx: "Āmana (pos=1) : Form I accompli 3MS de amn. Āmana r-rasūlu = le Messager a cru. Foi active du Prophète.", axe1_verset: "Āmana r-rasūlu bimā unzila ilayhi = le Messager a cru en ce qui lui a été révélé.", axe2_voisins: "La foi du Messager précède et fonde la foi des croyants.", axe3_sourate: "Al-Baqarah clôt par la confession de foi du Messager et des croyants.", axe4_coherence: "Āmana bi = croire en (quelque chose). La foi est l'adhésion à la révélation.", axe5_frequence: "Āmana comme expression de la foi est très fréquent." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Non applicable." },
      "Sécurité/Confiance": { status: "nul", senses: ["confiance"], proof_ctx: "Āmana ici = foi religieuse." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "rsl", 2, "le Messager (envoyé de Dieu)", {
    concept_chosen: "Envoi/Message",
    concepts: {
      "Envoi/Message": {
        status: "retenu",
        senses: ["messager", "envoyé", "prophète"],
        proof_ctx: "Ar-rasūlu (pos=2) : ar-rasūl = le Messager. Dérivé de rasala = envoyer. Ar-rasūl = celui qui est envoyé = le Prophète Muhammad. Sens Envoi/Message retenu.",
        axe1_verset: "Āmana r-rasūlu = le Messager a cru. Ar-rasūl désigne Muhammad comme envoyé de Dieu.",
        axe2_voisins: "Ar-rasūl dans al-Baqarah désigne Muhammad (2:101, 2:143, 2:253).",
        axe3_sourate: "Le Messager (rasūl) est le modèle de foi pour les croyants.",
        axe4_coherence: "Rasūl = envoyé. Āmana r-rasūl = le Messager lui-même a cru — preuve de la sincérité de la révélation.",
        axe5_frequence: "Rasūl apparaît environ 332 fois dans le Coran."
      },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." },
      "Sens isolé/Cheveux": { status: "nul", senses: ["cheveux"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "ma", 4, "ce qui (relatif objet de foi)", {
    concept_chosen: "Particule",
    concepts: {
      "Particule": { status: "retenu", senses: ["ce qui", "pronom relatif"], proof_ctx: "Mā (pos=4) : pronom relatif = ce qui. Bimā unzila = en ce qui a été révélé. Particule grammaticale.", axe1_verset: "Bimā unzila ilayhi = en ce qui lui a été révélé.", axe2_voisins: "Mā relatif est très fréquent dans le Coran.", axe3_sourate: "Pronom relatif introduisant l'objet de la foi.", axe4_coherence: "Mā comme pronom relatif neutre.", axe5_frequence: "Mā ~1500 fois dans le Coran." }
    }
  });

  await insertVWA(verse_id, "nzl", 5, "a été révélé (descente de la révélation)", {
    concept_chosen: "Descente/Révélation",
    concepts: {
      "Descente/Révélation": {
        status: "retenu",
        senses: ["révélation", "descente", "révéler", "envoyer d'en haut"],
        proof_ctx: "Unzila (pos=5) : Form I passif accompli 3MS de nzl = a été révélé/fait descendre. Bimā unzila ilayhi = en ce qui lui a été révélé. La Form IV anzala = faire descendre, révéler. Sens Descente/Révélation retenu.",
        axe1_verset: "Bimā unzila ilayhi min rabbihi = en ce qui lui a été révélé par son Seigneur. La révélation descend de Dieu vers le Messager.",
        axe2_voisins: "Unzila/anzala est la formule standard pour la révélation du Coran (2:4, 2:23, 2:41, 2:91).",
        axe3_sourate: "Al-Baqarah commence par la révélation (2:2 : dhālika l-kitābu). La foi dans la révélation est son fondement.",
        axe4_coherence: "La racine nzl dans le Coran désigne quasi exclusivement la révélation divine dans son sens coranique.",
        axe5_frequence: "Nzl dans le sens de révélation apparaît environ 290 fois dans le Coran."
      },
      "Halte/Séjour": { status: "nul", senses: ["halte", "séjour"], proof_ctx: "Unzila ilayhi = révélation reçue, non halte en voyage." },
      "Sens isolé/Rang": { status: "nul", senses: ["rang"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "rbb", 8, "son Seigneur (source de la révélation)", {
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": { status: "retenu", senses: ["Seigneur"], proof_ctx: "Rabbihi (pos=8) : rabb + pronom 3MS. Min rabbihi = de son Seigneur. La révélation vient du Seigneur.", axe1_verset: "Unzila ilayhi min rabbihi = révélé par son Seigneur. Le Seigneur est la source de la révélation.", axe2_voisins: "La révélation (tanzīl) vient du rabb.", axe3_sourate: "Rabb = le Seigneur-Éducateur qui guide par la révélation.", axe4_coherence: "Rabb = celui qui nourrit et élève.", axe5_frequence: "Rabb ~975 fois." },
      "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Non applicable." },
      "Croissance/Augmentation": { status: "nul", senses: ["croissance"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "amn", 10, "les croyants (communauté de foi)", {
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": { status: "retenu", senses: ["croyants", "ceux qui croient"], proof_ctx: "Al-muʾminūna (pos=10) : participe actif pluriel = les croyants. Wa-l-muʾminūna = et les croyants. Même racine amn = foi.", axe1_verset: "Āmana r-rasūlu... wa-l-muʾminūna = le Messager a cru... et les croyants aussi.", axe2_voisins: "La foi du Messager et des croyants est parallèle.", axe3_sourate: "Les muʾminūna sont le groupe central d'al-Baqarah.", axe4_coherence: "Al-muʾminūna = pluriel de muʾmin = croyant.", axe5_frequence: "Muʾminūna ~160 fois dans le Coran." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Non applicable." },
      "Sécurité/Confiance": { status: "nul", senses: ["confiance"], proof_ctx: "Muʾminūna = croyants, non dépositaires." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "kll", 11, "chacun (totalité inclusive)", {
    concept_chosen: "Totalité",
    concepts: {
      "Totalité": { status: "retenu", senses: ["chacun", "tous"], proof_ctx: "Kullun (pos=11) : nominatif de kull = chacun. Kullun āmana bi-llāhi = chacun a cru en Dieu. Kull au nominatif indépendant = chacun (tous sans exception).", axe1_verset: "Kullun āmana = chacun a cru. La foi est universelle parmi le Messager et les croyants.", axe2_voisins: "Kullun comme sujet indépendant = chacun sans exception.", axe3_sourate: "L'universalité de la foi dans les objets de croyance.", axe4_coherence: "Kull au nominatif = chacun (sens distributif).", axe5_frequence: "Kull ~750 fois." },
      "Émoussement/Faiblesse": { status: "nul", senses: ["émoussement"], proof_ctx: "Non applicable." },
      "Charge/Dépendance": { status: "nul", senses: ["fardeau"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "amn", 12, "a cru (foi en Dieu et ses envoyés)", {
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": { status: "retenu", senses: ["croire", "avoir la foi"], proof_ctx: "Āmana (pos=12) : Form I 3MS. Kullun āmana bi-llāhi = chacun a cru en Dieu. Foi en Dieu, anges, écrits, messagers.", axe1_verset: "Kullun āmana bi-llāhi wa-malāʾikatihi wa-kutubihi wa-rusulihi = chacun a cru en Dieu, ses anges, ses écrits et ses messagers.", axe2_voisins: "Les quatre objets de foi : Dieu, anges, livres, messagers.", axe3_sourate: "La profession de foi coranique complète.", axe4_coherence: "Āmana bi = croire en. Foi quadruple.", axe5_frequence: "Āmana bi est très fréquent dans le Coran." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Non applicable." },
      "Sécurité/Confiance": { status: "nul", senses: ["confiance"], proof_ctx: "Non applicable." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "alh", 14, "Dieu (objet de foi)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu", "divinité"], proof_ctx: "Allāhi (pos=14) : génitif du nom propre allāh. Āmana bi-llāhi = a cru en Dieu. Allāh = Dieu.", axe1_verset: "Kullun āmana bi-llāhi = chacun a cru en Dieu. Dieu est le premier objet de foi.", axe2_voisins: "Les objets de foi (Dieu, anges, livres, messagers) forment le credo coranique.", axe3_sourate: "Al-Baqarah insiste sur la foi en Dieu comme fondement.", axe4_coherence: "Allāh = Dieu unique.", axe5_frequence: "2699 fois dans le Coran." },
      "Détresse": { status: "nul", senses: ["détresse"], proof_ctx: "Non applicable." },
      "Domination": { status: "nul", senses: ["domination"], proof_ctx: "Non applicable." },
      "Refuge/Protection": { status: "nul", senses: ["refuge"], proof_ctx: "Non applicable." },
      "Adoration/Dévotion": { status: "nul", senses: ["adoration"], proof_ctx: "Allāhi ici est l'objet de foi, non l'acte d'adoration." }
    }
  });

  await insertVWA(verse_id, "mlk", 16, "Ses anges (messagers divins)", {
    concept_chosen: "Ange/Messager",
    concepts: {
      "Ange/Messager": {
        status: "retenu",
        senses: ["ange", "messager divin", "malāʾika"],
        proof_ctx: "Malāʾikatihi (pos=16) : pluriel de malak = ange + pronom 3MS. Āmana bi-malāʾikatihi = a cru en ses anges. Malāʾika = les anges. Sens Ange/Messager retenu.",
        axe1_verset: "Wa-malāʾikatihi = et ses anges. La foi en les anges est le deuxième élément du credo.",
        axe2_voisins: "La foi en les anges (malāʾika) est mentionnée en 2:98, 2:177, 2:285.",
        axe3_sourate: "Al-Baqarah 2:98 : man kāna ʿaduwwan li-jibrīla wa-mīkāla — les anges sont nommés.",
        axe4_coherence: "La racine mlk dans le sens d'ange est fréquente. Malāʾika = les anges = les envoyés divins.",
        axe5_frequence: "Malāʾika apparaît environ 88 fois dans le Coran."
      },
      "Possession/Autorité": { status: "nul", senses: ["possession"], proof_ctx: "Malāʾikatihi = ses anges, non ses possessions." },
      "Royauté/Souveraineté": { status: "nul", senses: ["royauté"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "ktb", 18, "Ses écrits (les livres révélés)", {
    concept_chosen: "Livre/Écrit",
    concepts: {
      "Livre/Écrit": {
        status: "retenu",
        senses: ["livre", "écrit", "écriture sacrée", "révélation écrite"],
        proof_ctx: "Kutubihi (pos=18) : pluriel de kitāb + pronom = ses livres/écrits. Āmana bi-kutubihi = a cru en ses écrits. Les kutub = les livres révélés (Torah, Évangile, Psaumes, Coran). Sens Livre/Écrit retenu.",
        axe1_verset: "Wa-kutubihi = et ses écrits. La foi en les livres révélés est le troisième élément du credo.",
        axe2_voisins: "Al-Baqarah 2:4 mentionne la foi en la révélation (anzala ilayhi).",
        axe3_sourate: "Les kutub coraniques = les Écritures révélées à tous les prophètes.",
        axe4_coherence: "Kutub (pluriel de kitāb) = les livres révélés. Foi universelle dans tous les livres de Dieu.",
        axe5_frequence: "Kutub/kitāb dans le sens de livre révélé est très fréquent dans le Coran."
      },
      "Écriture/Inscription": { status: "nul", senses: ["écrire"], proof_ctx: "Kutubihi = livres (substantif), non acte d'écrire." },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Non applicable ici." }
    }
  });

  await insertVWA(verse_id, "rsl", 20, "Ses messagers (envoyés divins)", {
    concept_chosen: "Envoi/Message",
    concepts: {
      "Envoi/Message": { status: "retenu", senses: ["messagers", "envoyés"], proof_ctx: "Rusulihi (pos=20) : pluriel de rasūl + pronom = ses messagers. Āmana bi-rusulihi = a cru en ses messagers. Rusul = tous les envoyés de Dieu.", axe1_verset: "Wa-rusulihi = et ses messagers. Foi en tous les prophètes envoyés.", axe2_voisins: "Rusul dans al-Baqarah désigne tous les prophètes (2:87, 2:177, 2:253).", axe3_sourate: "La foi coranienne est universelle : tous les messagers sont reconnus.", axe4_coherence: "Rusul (pluriel de rasūl) = les envoyés de Dieu.", axe5_frequence: "Rusul ~160 fois dans le Coran." },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." },
      "Sens isolé/Cheveux": { status: "nul", senses: ["cheveux"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "frq", 22, "distinguons pas (égalité des messagers)", {
    concept_chosen: "Séparation/Distinction",
    concepts: {
      "Séparation/Distinction": {
        status: "retenu",
        senses: ["distinguer", "faire une distinction", "séparer"],
        proof_ctx: "Nufarriqu (pos=22) : Form II inaccompli 1MP de frq = nous distinguons/séparons. Lā nufarriqu = nous ne faisons pas de distinction. Farraka = séparer, discriminer. Sens Séparation/Distinction retenu.",
        axe1_verset: "Lā nufarriqu bayna aḥadin min rusulihi = nous ne faisons pas de distinction entre aucun de ses messagers. Tous les messagers sont égaux.",
        axe2_voisins: "En 4:150-151 : alladhīna yukfurūna bi-llāhi wa-rusulihi wa-yurīdūna an yufarriqū bayna llāhi wa-rusulihi = ceux qui croient en Dieu et rejettent ses messagers en voulant distinguer entre Dieu et ses messagers.",
        axe3_sourate: "L'égalité entre les messagers est un principe fondamental de l'Islam.",
        axe4_coherence: "Form II farraka = distinguer, séparer. Lā nufarriqu = nous ne discriminons pas.",
        axe5_frequence: "Farraka/yufarriqu dans le sens de distinction entre prophètes apparaît en 2:285 et 4:150."
      },
      "Groupe/Partie": { status: "nul", senses: ["groupe"], proof_ctx: "Nufarriqu ici = ne pas faire de distinction, non se diviser en groupes." }
    }
  });

  await insertVWA(verse_id, "byn", 23, "entre (la relation d'égalité)", {
    concept_chosen: "Séparation/Distance",
    concepts: {
      "Séparation/Distance": { status: "retenu", senses: ["entre", "séparation"], proof_ctx: "Bayna (pos=23) : préposition = entre. Lā nufarriqu bayna aḥadin = nous ne distinguons pas entre quiconque. Bayna introduit la relation d'égalité entre les messagers.", axe1_verset: "Bayna aḥadin min rusulihi = entre aucun de ses messagers.", axe2_voisins: "Bayna dans le sens d'égalité/indistinction.", axe3_sourate: "L'absence de distinction bayna les messagers = universalisme coranique.", axe4_coherence: "Bayna = entre (préposition d'interposition).", axe5_frequence: "Bayna ~175 fois." },
      "Clarté/Évidence": { status: "nul", senses: ["clarté"], proof_ctx: "Bayna ici est la préposition entre, non l'évidence." }
    }
  });

  await insertVWA(verse_id, "ahd", 24, "aucun (un de ses messagers)", {
    concept_chosen: "Quiconque/Indéfini",
    concepts: {
      "Quiconque/Indéfini": {
        status: "retenu",
        senses: ["quiconque", "aucun", "un seul"],
        proof_ctx: "Aḥadin (pos=24) : génitif de aḥad = quelqu'un / aucun. Bayna aḥadin min rusulihi = entre aucun de ses messagers. Aḥad après négation = personne, aucun. Sens Quiconque/Indéfini retenu dans son emploi avec négation.",
        axe1_verset: "Lā nufarriqu bayna aḥadin = nous ne faisons pas de distinction entre quiconque. Avec lā = entre aucun.",
        axe2_voisins: "Aḥad min rusulihi en 4:150 dans le même contexte de foi universelle.",
        axe3_sourate: "L'égalité entre tous les envoyés est le fondement de l'universalisme islamique.",
        axe4_coherence: "Aḥad avec négation = aucun (sens universel négatif).",
        axe5_frequence: "Aḥad dans ce sens apparaît en 2:285, 4:150."
      },
      "Unicité/Indivisibilité": { status: "nul", senses: ["unicité"], proof_ctx: "Aḥad ici = quelqu'un/aucun (indéfini), non l'unicité divine." },
      "Solitude/Isolement": { status: "nul", senses: ["solitude"], proof_ctx: "Non applicable." },
      "Nombre/Quantification": { status: "nul", senses: ["nombre"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "rsl", 26, "Ses messagers (égalité affirmée)", {
    concept_chosen: "Envoi/Message",
    concepts: {
      "Envoi/Message": { status: "retenu", senses: ["messagers"], proof_ctx: "Rusulihi (pos=26) : même que pos=20. Répétition de rusulihi pour souligner l'égalité entre tous les messagers.", axe1_verset: "Bayna aḥadin min rusulihi = entre aucun de ses messagers.", axe2_voisins: "La répétition de rusul souligne l'universalisme de la foi.", axe3_sourate: "Tous les prophètes sont égaux devant Dieu.", axe4_coherence: "Rusul = les envoyés.", axe5_frequence: "Rusul ~160 fois." },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." },
      "Sens isolé/Cheveux": { status: "nul", senses: ["cheveux"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "sme", 28, "avons entendu (adhésion active)", {
    concept_chosen: "Audition/Écoute",
    concepts: {
      "Audition/Écoute": {
        status: "retenu",
        senses: ["entendre", "écouter", "ouïr"],
        proof_ctx: "Samiʿnā (pos=28) : Form I accompli 1MP de sme = nous avons entendu. Samiʿnā wa-aṭaʿnā = nous avons entendu et obéi. Samiʿa = entendre, écouter. Sens Audition/Écoute retenu.",
        axe1_verset: "Samiʿnā wa-aṭaʿnā = nous avons entendu et obéi. La paire entendre/obéir est la réponse des croyants à la révélation.",
        axe2_voisins: "La formule samiʿnā wa-aṭaʿnā (nous avons entendu et obéi) est la réponse des croyants en 2:285 vs samiʿnā wa-ʿaṣaynā (nous avons entendu et désobéi) des rebelles en 4:46.",
        axe3_sourate: "L'écoute et l'obéissance sont les deux actes fondamentaux du croyant.",
        axe4_coherence: "Samiʿa = entendre (perception auditive) + adhésion intellectuelle.",
        axe5_frequence: "Samiʿnā wa-aṭaʿnā est une formule de dévotion récurrente dans le Coran."
      },
      "Renommée/Bruit": { status: "nul", senses: ["renommée"], proof_ctx: "Samiʿnā ici = nous avons entendu (acte), non renommée." },
      "Corps/Anatomie": { status: "nul", senses: ["corps"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "twe", 30, "obéi (soumission volontaire)", {
    concept_chosen: "Obéissance/Soumission volontaire",
    concepts: {
      "Obéissance/Soumission volontaire": {
        status: "retenu",
        senses: ["obéir", "se soumettre volontairement", "suivre"],
        proof_ctx: "Aṭaʿnā (pos=30) : Form IV accompli 1MP de twe = nous avons obéi. Samiʿnā wa-aṭaʿnā = nous avons entendu et obéi. Sens Obéissance/Soumission volontaire retenu.",
        axe1_verset: "Wa-aṭaʿnā = et nous avons obéi. L'obéissance est la réponse pratique à l'écoute.",
        axe2_voisins: "La paire samiʿ/aṭā est fondamentale. En 4:46 la réponse négative : wa-ʿaṣaynā (nous avons désobéi).",
        axe3_sourate: "L'obéissance (ṭāʿa) est le fondement de la relation entre le croyant et Dieu.",
        axe4_coherence: "Form IV aṭāʿa = obéir pleinement (causatif = se mettre en état d'obéissance).",
        axe5_frequence: "Aṭāʿa apparaît environ 75 fois dans le Coran."
      },
      "Capacité/Pouvoir": { status: "nul", senses: ["capacité"], proof_ctx: "Aṭaʿnā = obéir, non pouvoir." }
    }
  });

  await insertVWA(verse_id, "ghfr", 31, "ton pardon (implorer le pardon)", {
    concept_chosen: "Pardon/Couverture",
    concepts: {
      "Pardon/Couverture": {
        status: "retenu",
        senses: ["pardon", "couverture des fautes", "absolution"],
        proof_ctx: "Ghufrānaka (pos=31) : nom d'action de ghfr + pronom 2MS = ton pardon. Ghufrānaka rabbanā = ton pardon, notre Seigneur. C'est une demande de pardon. Sens Pardon/Couverture retenu.",
        axe1_verset: "Ghufrānaka rabbanā = ton pardon, notre Seigneur. La demande de pardon suit l'obéissance — même les croyants obéissants ont besoin du pardon divin.",
        axe2_voisins: "La demande de pardon après la profession de foi est un signe d'humilité.",
        axe3_sourate: "Le pardon divin (ghufran) est une thématique centrale d'al-Baqarah.",
        axe4_coherence: "Ghufrān = le pardon (nom d'action de ghafara).",
        axe5_frequence: "Ghufran apparaît en 2:285 et 3:193 comme demande directe de pardon."
      },
      "Protection": { status: "nul", senses: ["protection"], proof_ctx: "Ghufrānaka = ton pardon, non ta protection." }
    }
  });

  await insertVWA(verse_id, "rbb", 32, "notre Seigneur (Dieu des croyants)", {
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": { status: "retenu", senses: ["notre Seigneur"], proof_ctx: "Rabbanā (pos=32) : rabb + pronom 1MP = notre Seigneur. Invocation collective.", axe1_verset: "Ghufrānaka rabbanā = ton pardon, notre Seigneur.", axe2_voisins: "Rabbanā est une formule de prière fréquente dans le Coran.", axe3_sourate: "Notre Seigneur = interpellation divine des croyants.", axe4_coherence: "Rabb = Seigneur-Éducateur.", axe5_frequence: "Rabbanā ~40 fois dans le Coran comme prière." },
      "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Non applicable." },
      "Croissance/Augmentation": { status: "nul", senses: ["croissance"], proof_ctx: "Non applicable." }
    }
  });

  await insertVWA(verse_id, "swr", 35, "la destination finale (le retour à Dieu)", {
    concept_chosen: "Forme/Image",
    concepts: {
      "Forme/Image": {
        status: "nul",
        senses: ["forme", "image"],
        proof_ctx: "Al-maṣīru n'est pas une forme ou image mais une destination."
      },
      "Destination/Retour": {
        status: "retenu",
        senses: ["destination finale", "retour", "aboutissement"],
        proof_ctx: "Al-maṣīru (pos=35) : nom d'action de sāra/maṣara = destination finale, aboutissement. Wa-ilayka l-maṣīru = et c'est vers Toi que tout retourne. Al-maṣīr = la destination finale, le lieu où tout aboutit. La clé 'swr' (id=380) est mappée sur cette racine. Le sens Forme/Image (sūra) est d'une autre racine.",
        axe1_verset: "Wa-ilayka l-maṣīru = et c'est vers Toi que tout retourne. Le maṣīr est la destination finale = Dieu.",
        axe2_voisins: "Wa-ilayka l-maṣīr est une formule de clôture de prière fréquente (2:285, 3:28, 60:4).",
        axe3_sourate: "Al-Baqarah clôt sur le retour à Dieu — thème eschatologique.",
        axe4_coherence: "Maṣīr = destination, aboutissement. La vie humaine a pour destination Dieu.",
        axe5_frequence: "Al-maṣīru/maṣīr dans le sens de destination finale apparaît environ 10 fois dans le Coran."
      },
      "Sens isolé/Mur": { status: "nul", senses: ["mur"], proof_ctx: "Non applicable." },
      "Sens isolé/Trompette": { status: "nul", senses: ["trompette"], proof_ctx: "Non applicable." }
    }
  });

  await insertWordDaily(255, "Dieu", [
    { fr: "Il n'y a de dieu que Dieu.", ar: "لَا إِلَهَ إِلَّا اللَّهُ.", phon: "lā ilāha illā llāhu" },
    { fr: "Dieu est Grand.", ar: "اللَّهُ أَكْبَرُ.", phon: "allāhu akbaru" },
    { fr: "Nous croyons en Dieu, ses anges, ses écrits et ses messagers.", ar: "نُؤْمِنُ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ.", phon: "nuʾminu bi-llāhi wa-malāʾikatihi wa-kutubihi wa-rusulihi" }
  ]);

  console.log('\nVERSET 2:285 — TERMINÉ');
}

async function main() {
  await processVerse284();
  await processVerse285();
  console.log('\n=== VERSETS 284 et 285 TERMINÉS ===');
}
main().catch(console.error);
