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
// VERSET 2:283  verse_id=290  analysis_id=650
// Segments importants (type=important):
//   pos=3  kwn  (kuntum) — verbe
//   pos=4  elw  (ʿalā) — préposition/nom (Sur/Au-dessus)
//   pos=5  sfr  (safar) — nom — NOUVEAU ROOT safar=voyage
//   pos=8  wjd  (tajidū) — verbe
//   pos=9  ktb  (kātiban) — nom
//   pos=11 rhn  (rihānun) — nom
//   pos=12 qbd  (maqbūḍatun) — participe_passif
//   pos=15 amn  (amina) — verbe
//   pos=16 bed  (baʿḍukum) — nom
//   pos=17 bed  (baʿḍan) — nom
//   pos=19 ady  (lyuʾaddi) — verbe
//   pos=20 dhw  (alladhī) — nom/pronom relatif
//   pos=21 amn  (ʾuʾtumina) — verbe passif
//   pos=22 amn  (amānatahu) — nom
//   pos=24 wqy  (yattaqi) — verbe
//   pos=25 llh  (allāha) — nom
//   pos=26 rbb  (rabbahu) — nom
//   pos=28 ktm  (taktumū) — verbe
//   pos=29 shh  (ash-shahādah) — nom
//   pos=31 mny  (man) — nom (pronom indéfini "quiconque")
//   pos=32 ktm  (yaktumuhā) — verbe
//   pos=34 nws  (innahu) — particule (emphase)
//   pos=35 athm (āthimun) — nom
//   pos=36 qlb  (qalbuhu) — nom
//   pos=37 llh  (allāhu) — nom
//   pos=38 mym  (bimā) — nom (particule)
//   pos=39 eml  (taʿmalūn) — verbe
//   pos=40 elm  (ʿalīmun) — adjectif
// ============================================================
async function processVerse283() {
  console.log('\n=== 2:283 ===');
  const verse_id = 290;
  const analysis_id = 650;

  const translation_arab = "Et si vous êtes en voyage et ne trouvez pas de scribe, un gage remis en main propre suffit. Si l'un de vous confie un dépôt à l'autre, que celui qui a reçu la confiance restitue son dépôt et qu'il craigne Dieu son Seigneur. Et ne dissimulez pas le témoignage. Quiconque le dissimule a le cœur coupable. Et Dieu sait ce que vous faites.";
  const full_translation = "Et si vous êtes en voyage et ne trouvez pas de scribe, un gage remis en main propre suffit. Si l'un de vous confie un dépôt à l'autre, que celui qui a reçu la confiance restitue son dépôt et qu'il craigne Dieu son Seigneur. Et ne dissimulez pas le témoignage. Quiconque le dissimule a le cœur coupable. Et Dieu sait ce que vous faites.";

  const translation_explanation = `§DEMARCHE§
V283 est la suite directe de 2:282. Structure : Wa in kuntum ʿalā safar wa-lam tajidū kātiban fa-rihānun maqbūḍatun (et si vous êtes en voyage et ne trouvez pas de scribe, un gage saisissable suffit). Fa-in amina baʿḍukum baʿḍan fa-l-yuʾaddi lladhī ʾuʾtumina amānatahu wa-l-yattaqi llāha rabbahu (et si l'un de vous confie à l'autre, que celui en qui on a confiance restitue son dépôt et craigne Dieu son Seigneur). Wa-lā taktumū sh-shahādah (et ne dissimulez pas le témoignage). Wa-man yaktumhā fa-innahu āthimun qalbuhu (et quiconque le dissimule, son cœur est fautif). Wa-llāhu bimā taʿmalūna ʿalīmun (et Dieu est Omniscient de ce que vous faites).

§JUSTIFICATION§
Kuntum traduit par "vous êtes" : kwn = Être/Existence — Form I accompli 2MP. ʿAlā safar traduit par "en voyage" : elw = Sur/Au-dessus (préposition ʿalā) + sfar = Voyage/Déplacement (la racine voyage سفر). Tajidū traduit par "trouvez" : wjd = Découverte/Existence — ne pas trouver de scribe. Kātiban traduit par "scribe" : ktb = Écriture/Inscription. Rihānun traduit par "un gage" : rhn = Gage/Garantie. Maqbūḍatun traduit par "remis en main propre" : qbd = Saisie/Contraction — saisi, pris en main. Amina traduit par "confie" : amn = Sécurité/Confiance (Form I de amn = faire confiance, confier). Baʿḍukum baʿḍan traduit par "l'un de vous à l'autre" : bed = Partie/Division. Yuʾaddi traduit par "restitue" : ady = Accomplissement/Restitution. Alladhī ʾuʾtumina traduit par "celui en qui on a confiance" : dhw = pronom relatif + amn passif = Sécurité/Confiance. Amānatahu traduit par "son dépôt" : amn = Sécurité/Confiance — amāna = dépôt, chose confiée. Yattaqi traduit par "qu'il craigne" : wqy = Protection/Préservation. Taktumū/yaktumhā traduit par "dissimulez/dissimule" : ktm = Dissimulation/Secret. Ash-shahādah traduit par "le témoignage" : shh = Témoignage/Attestation. Man traduit par "quiconque" : mny (key) = pronom indéfini man. Innahu traduit par "son" : nws (key) = particule emphatique inna. Āthimun traduit par "coupable/fautif" : athm = Péché/Faute. Qalbuhu traduit par "son cœur" : qlb = Coeur/Centre. Bimā taʿmalūna traduit par "de ce que vous faites" : mym + eml = Lettre/Mystère + Action/Oeuvre. ʿAlīmun traduit par "Omniscient" : elm = Savoir/Connaissance.

§CRITIQUE§
Hamidullah traduit : "Et si vous êtes en voyage sans trouver un écrivain, un gage saisi suffit." — Notre traduction "remis en main propre" rend mieux maqbūḍa (saisi/pris). Sur āthimun qalbuhu, Hamidullah dit "son cœur est coupable de péché" — nous disons "son cœur est coupable" pour la concision. Les traductions courantes donnent sensiblement le même sens.`;

  const segments = [
    { position: 1, arabic: "وَ", phon: "wa", fr: "Et", is_particle: true },
    { position: 2, arabic: "إِن", phon: "in", fr: "si", is_particle: true },
    { position: 3, arabic: "كُنتُمْ", phon: "kuntum", fr: "vous êtes", is_particle: false, word_key: "kwn", pos: "verbe", sense_retenu: "vous êtes" },
    { position: 4, arabic: "عَلَىٰ", phon: "ʿalā", fr: "en", is_particle: false, word_key: "elw", pos: "nom", sense_retenu: "sur/en" },
    { position: 5, arabic: "سَفَرٍ", phon: "safar", fr: "voyage", is_particle: false, word_key: "sfr", pos: "nom", sense_retenu: "voyage" },
    { position: 6, arabic: "وَ", phon: "wa", fr: "et", is_particle: true },
    { position: 7, arabic: "لَمْ", phon: "lam", fr: "ne", is_particle: true },
    { position: 8, arabic: "تَجِدُوا۟", phon: "tajidū", fr: "trouvez pas", is_particle: false, word_key: "wjd", pos: "verbe", sense_retenu: "trouvez" },
    { position: 9, arabic: "كَاتِبًا", phon: "kātiban", fr: "de scribe,", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 10, arabic: "فَ", phon: "fa", fr: "", is_particle: true },
    { position: 11, arabic: "رِهَـٰنٌ", phon: "rihānun", fr: "un gage", is_particle: false, word_key: "rhn", pos: "nom", sense_retenu: "gage" },
    { position: 12, arabic: "مَّقْبُوضَةٌ", phon: "maqbūḍatun", fr: "remis en main propre.", is_particle: false, word_key: "qbd", pos: "participe_passif", sense_retenu: "remis en main" },
    { position: 13, arabic: "فَ", phon: "fa", fr: "Si", is_particle: true },
    { position: 14, arabic: "إِن", phon: "in", fr: "", is_particle: true },
    { position: 15, arabic: "أَمِنَ", phon: "amina", fr: "l'un de vous confie", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "confie (fait confiance)" },
    { position: 16, arabic: "بَعْضُكُم", phon: "baʿḍukum", fr: "l'un d'entre vous", is_particle: false, word_key: "bed", pos: "nom", sense_retenu: "l'un d'entre vous" },
    { position: 17, arabic: "بَعْضًا", phon: "baʿḍan", fr: "à l'autre,", is_particle: false, word_key: "bed", pos: "nom", sense_retenu: "à l'autre" },
    { position: 18, arabic: "فَلْ", phon: "fal", fr: "que", is_particle: true },
    { position: 19, arabic: "يُؤَدِّ", phon: "lyuʾaddi", fr: "restitue", is_particle: false, word_key: "ady", pos: "verbe", sense_retenu: "restitue" },
    { position: 20, arabic: "ٱلَّذِى", phon: "alladhī", fr: "celui qui", is_particle: false, word_key: "dhw", pos: "nom", sense_retenu: "celui qui" },
    { position: 21, arabic: "ٱؤْتُمِنَ", phon: "ʾuʾtumina", fr: "a reçu la confiance", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "a reçu la confiance" },
    { position: 22, arabic: "أَمَـٰنَتَهُ", phon: "amānatahu", fr: "son dépôt,", is_particle: false, word_key: "amn", pos: "nom", sense_retenu: "dépôt confié" },
    { position: 23, arabic: "وَلْيَتَّقِ", phon: "wa-l-yattaqi", fr: "et qu'il craigne", is_particle: true },
    { position: 24, arabic: "يَتَّقِ", phon: "yattaqi", fr: "craigne", is_particle: false, word_key: "wqy", pos: "verbe", sense_retenu: "craigne" },
    { position: 25, arabic: "ٱللَّهَ", phon: "allāha", fr: "Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 26, arabic: "رَبَّهُ", phon: "rabbahu", fr: "son Seigneur.", is_particle: false, word_key: "rbb", pos: "nom", sense_retenu: "son Seigneur" },
    { position: 27, arabic: "وَلَا", phon: "wa-lā", fr: "Et ne", is_particle: true },
    { position: 28, arabic: "تَكْتُمُوا۟", phon: "taktumū", fr: "dissimulez pas", is_particle: false, word_key: "ktm", pos: "verbe", sense_retenu: "dissimulez" },
    { position: 29, arabic: "ٱلشَّهَـٰدَةَ", phon: "ash-shahādah", fr: "le témoignage.", is_particle: false, word_key: "shh", pos: "nom", sense_retenu: "témoignage" },
    { position: 30, arabic: "وَ", phon: "wa", fr: "Et", is_particle: true },
    { position: 31, arabic: "مَن", phon: "man", fr: "quiconque", is_particle: false, word_key: "mny", pos: "nom", sense_retenu: "quiconque" },
    { position: 32, arabic: "يَكْتُمْهَا", phon: "yaktumuhā", fr: "le dissimule,", is_particle: false, word_key: "ktm", pos: "verbe", sense_retenu: "le dissimule" },
    { position: 33, arabic: "فَ", phon: "fa", fr: "alors", is_particle: true },
    { position: 34, arabic: "إِنَّهُ", phon: "innahu", fr: "son", is_particle: false, word_key: "nws", pos: "particule", sense_retenu: "emphase (innahu)" },
    { position: 35, arabic: "ءَاثِمٌ", phon: "āthimun", fr: "cœur est coupable.", is_particle: false, word_key: "athm", pos: "nom", sense_retenu: "coupable/fautif" },
    { position: 36, arabic: "قَلْبُهُ", phon: "qalbuhu", fr: "son cœur", is_particle: false, word_key: "qlb", pos: "nom", sense_retenu: "cœur" },
    { position: 37, arabic: "وَٱللَّهُ", phon: "allāhu", fr: "Et Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 38, arabic: "بِمَا", phon: "bimā", fr: "de ce que", is_particle: false, word_key: "mym", pos: "nom", sense_retenu: "de ce que" },
    { position: 39, arabic: "تَعْمَلُونَ", phon: "taʿmalūn", fr: "vous faites", is_particle: false, word_key: "eml", pos: "verbe", sense_retenu: "faites" },
    { position: 40, arabic: "عَلِيمٌ", phon: "ʿalīmun", fr: "Omniscient.", is_particle: false, word_key: "elm", pos: "adjectif", sense_retenu: "Omniscient" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  // kwn pos=3 — Être/Existence
  await insertVWA(verse_id, "kwn", 3, "vous êtes (état de voyage)", {
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être (verbe incomplet)", "être dans un état", "se trouver"],
        proof_ctx: "Kuntum (pos=3) : Form I accompli 2MP de kwn = vous étiez/vous êtes. Wa in kuntum ʿalā safar = et si vous êtes en voyage. Kāna + ʿalā = être dans l'état de. Sens Être/Existence retenu.",
        axe1_verset: "In kuntum ʿalā safar = si vous vous trouvez en état de voyage. Kuntum = vous êtes (condition hypothétique). L'état de voyage détermine l'adaptation légale.",
        axe2_voisins: "In kuntum ʿalā safar est une formule de condition dans plusieurs versets (2:283, 4:43, 5:6). Elle ouvre des exceptions légales.",
        axe3_sourate: "Al-Baqarah utilise kuntum pour décrire des états conditionnels (2:23, 2:31, 2:80, 2:94).",
        axe4_coherence: "Kāna est le verbe d'état par excellence. La Form I accompli kuntum = vous étiez/êtes dans l'état de.",
        axe5_frequence: "Kāna apparaît environ 1360 fois dans le Coran — parmi les plus fréquents."
      },
      "Lieu/État": { status: "nul", senses: ["lieu", "état"], proof_ctx: "Kuntum désigne ici l'état temporel (être en voyage), pas un lieu fixe." },
      "Humilité/Soumission": { status: "nul", senses: ["humilité"], proof_ctx: "Non applicable." }
    }
  });

  // elw pos=4 — Sur/Au-dessus (préposition ʿalā)
  await insertVWA(verse_id, "elw", 4, "sur/en (préposition de situation)", {
    concept_chosen: "Hauteur/Élévation",
    concepts: {
      "Hauteur/Élévation": {
        status: "nul",
        senses: ["hauteur", "élévation"],
        proof_ctx: "ʿAlā comme préposition de hauteur physique ne s'applique pas ici — ʿalā safar est une locution figée."
      },
      "Sur/Au-dessus (préposition)": {
        status: "retenu",
        senses: ["sur", "en", "dans la situation de", "contre", "pour", "à propos de"],
        proof_ctx: "ʿAlā (pos=4) : préposition polyvalente, ici dans la locution ʿalā safar = en voyage (littéralement : sur [la route du] voyage). Sens Sur/Au-dessus comme préposition retenu dans son emploi idiomatique.",
        axe1_verset: "In kuntum ʿalā safar = si vous êtes en voyage. ʿAlā safar est une locution standard en arabe pour exprimer l'état de voyage.",
        axe2_voisins: "ʿAlā safar en 4:43 (si vous êtes malades ou en voyage) — même formule.",
        axe3_sourate: "La préposition ʿalā est très fréquente dans les versets législatifs d'al-Baqarah.",
        axe4_coherence: "ʿAlā comme préposition a de nombreux sens (sur, contre, pour, à propos de). Ici la locution figée ʿalā safar = en voyage.",
        axe5_frequence: "ʿAlā apparaît environ 744 fois dans le Coran."
      }
    }
  });

  // sfr pos=5 — Voyage/Déplacement (NOUVEAU ROOT safar)
  // NOTE: segment has key='sfr' but root_ar='س ف ر' — using word_key='sfar' (id=2656) for VWA
  await insertVWA(verse_id, "sfar", 5, "voyage (déplacement hors de chez soi)", {
    concept_chosen: "Voyage/Déplacement",
    concepts: {
      "Voyage/Déplacement": {
        status: "retenu",
        senses: ["voyager", "déplacement", "parcours"],
        proof_ctx: "Safar (pos=5) : génitif de safar = voyage. ʿAlā safar = en voyage. La racine sfar (س ف ر) = voyager, se déplacer. Safar est le nom verbal du déplacement. Lane's : safar = journey, the act of journeying or travelling. Sens Voyage/Déplacement retenu sans ambiguïté. Sens Clarté/Révélation écarté : safar ici est le voyage physique confirmé par le contexte (ne pas trouver de scribe en voyage).",
        axe1_verset: "In kuntum ʿalā safar = si vous êtes en voyage. Safar est la condition d'exception légale : l'impossibilité de trouver un scribe justifie le recours au gage.",
        axe2_voisins: "ʿAlā safar en 4:43 : wa-in kuntum marḍā aw ʿalā safar = si vous êtes malades ou en voyage. Safar est toujours le voyage physique.",
        axe3_sourate: "Al-Baqarah 2:184-185 mentionne le musāfir (voyageur) comme cas d'exception pour le jeûne. Le voyage est un facteur légal récurrent.",
        axe4_coherence: "La racine sfar (سفر) dans le sens de voyage est unanime dans le Coran. En 9:42 : law kāna ʿaraḍan qarīban wa-safaran qāṣidan = si c'était un gain proche et un voyage court.",
        axe5_frequence: "Safar/musāfir dans le sens de voyage est attesté dans de nombreux versets législatifs. Le voyage est une condition juridique reconnue."
      },
      "Clarté/Révélation": { status: "peu_probable", senses: ["briller", "révéler"], proof_ctx: "Le sens étymologique de la racine sfar inclut briller/révéler (Form IV asfara = le matin brilla). Mais safar comme nom = le voyage, non la clarté. En 2:283 le contexte (ne trouver pas de scribe) confirme sans ambiguïté le voyage.", axe1_verset: "Safar dans le contexte wa-lam tajidū kātiban = et ne trouvez pas de scribe — c'est le voyage physique qui empêche de trouver un scribe.", axe2_voisins: "Aucun verset n'utilise safar dans le sens de clarté/révélation.", axe3_sourate: "Le safar = voyage est confirmé par les autres versets coranique.", axe4_coherence: "La clarté est rendue par asfara (Form IV), pas par safar (nom).", axe5_frequence: "Safar = voyage dans le Coran est constant et univoque." },
      "Balayage/Dispersion": { status: "nul", senses: ["balayer"], proof_ctx: "Le sens de balayage (safara = the wind swept away) est étymologique mais pas pertinent pour safar = voyage." },
      "Médiation/Envoi": { status: "nul", senses: ["médiateur"], proof_ctx: "Safar = voyage, non médiation (safīr = médiateur est un dérivé)." }
    }
  });

  // wjd pos=8 — Découverte/Existence
  await insertVWA(verse_id, "wjd", 8, "trouvez (trouver un scribe)", {
    concept_chosen: "Découverte/Existence",
    concepts: {
      "Découverte/Existence": {
        status: "retenu",
        senses: ["trouver", "découvrir", "exister"],
        proof_ctx: "Tajidū (pos=8) : Form I jussif 2MP de wjd = que vous trouviez. Wa-lam tajidū kātiban = et ne trouvez pas de scribe. Wajada = trouver, découvrir. Sens Découverte/Existence retenu.",
        axe1_verset: "Wa-lam tajidū kātiban = et ne trouvez pas de scribe. La non-disponibilité du scribe est la condition d'exception.",
        axe2_voisins: "Wajada dans les conditions légales : trouver ou ne pas trouver une ressource.",
        axe3_sourate: "Al-Baqarah utilise wajada pour des recherches pratiques.",
        axe4_coherence: "La racine wjd dans le Coran désigne la découverte/trouvaille.",
        axe5_frequence: "Wajada apparaît environ 107 fois dans le Coran."
      }
    }
  });

  // ktb pos=9 — Écriture/Inscription (kātiban = un scribe)
  await insertVWA(verse_id, "ktb", 9, "scribe (professionnel de l'écrit)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["scribe", "écrire"],
        proof_ctx: "Kātiban (pos=9) : accusatif de kātib = scribe. Wa-lam tajidū kātiban = et ne trouvez pas de scribe. Même racine ktb qu'en 2:282.",
        axe1_verset: "La non-disponibilité d'un scribe (lam tajidū kātiban) justifie le passage au gage.",
        axe2_voisins: "Le kātib de 2:282 est rappelé en 2:283 pour expliquer l'exception.",
        axe3_sourate: "Le scribe est le pivot de la réglementation écrite de 2:282-283.",
        axe4_coherence: "Kātiban = accusatif d'objet de tajidū (trouver un scribe).",
        axe5_frequence: "Ktb est récurrent dans cette séquence."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Kātiban est le scribe (personne), pas une prescription." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Kātib est la personne." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // rhn pos=11 — Gage/Garantie
  await insertVWA(verse_id, "rhn", 11, "gage (garantie physique)", {
    concept_chosen: "Gage/Garantie",
    concepts: {
      "Gage/Garantie": {
        status: "retenu",
        senses: ["gage", "garantie", "nantissement", "dépôt en garantie"],
        proof_ctx: "Rihānun (pos=11) : pluriel de rahn = gage, nantissement. Fa-rihānun maqbūḍatun = des gages remis en main propre. Rahn = objet donné en garantie d'une dette. Sens Gage/Garantie retenu — sens unique de la racine dans le Coran.",
        axe1_verset: "Fa-rihānun maqbūḍatun = alors des gages remis en main propre. Le gage remplace l'écrit quand le scribe est indisponible.",
        axe2_voisins: "Rahn comme gage financier est un concept central du droit islamique. En 2:283 c'est la seule occurrence du mot rihān dans le Coran.",
        axe3_sourate: "Le gage (rahn) est la mesure de sécurité du contrat en l'absence de scribe.",
        axe4_coherence: "La racine rhn désigne le nantissement — donner un objet de valeur en garantie d'une dette.",
        axe5_frequence: "Rihān est hapax coranique. Sa définition légale a été développée par les juristes musulmans."
      }
    }
  });

  // qbd pos=12 — Saisie/Contraction (maqbūḍatun = remis en main propre)
  await insertVWA(verse_id, "qbd", 12, "remis en main propre (gage saisissable)", {
    concept_chosen: "Saisie/Contraction",
    concepts: {
      "Saisie/Contraction": {
        status: "retenu",
        senses: ["saisir", "prendre en main", "contracter", "retirer"],
        proof_ctx: "Maqbūḍatun (pos=12) : Form I participe passif féminin de qbd = saisie, prise en main. Rihānun maqbūḍatun = des gages remis en main propre (maqbūḍa = saisi = qu'on tient physiquement). Sens Saisie/Contraction retenu.",
        axe1_verset: "Rihānun maqbūḍatun = un gage physiquement tenu. La condition maqbūḍa précise que le gage doit être effectivement remis — un gage verbal ne suffit pas.",
        axe2_voisins: "La condition maqbūḍa est juridiquement importante : le gage n'est valide que s'il est effectivement remis (qabḍ = prise en possession).",
        axe3_sourate: "Le droit islamique retient que le qabḍ (prise de possession) est une condition de validité du gage.",
        axe4_coherence: "La racine qbd dans le Coran désigne la saisie physique. En 2:245 : wa-llāhu yaqbiḍu wa-yabsuṭu = Dieu resserre et étend (la richesse).",
        axe5_frequence: "Qabḍ/maqbūḍ dans le droit islamique = prise de possession effective. C'est un concept technique du droit des contrats."
      },
      "Sens isolé/Retirer": { status: "nul", senses: ["retirer"], proof_ctx: "Le sens de retirer ne convient pas ici — maqbūḍa = remis (pas retiré)." }
    }
  });

  // amn pos=15 — Sécurité/Confiance (amina = confier)
  await insertVWA(verse_id, "amn", 15, "confie (fait confiance à)", {
    concept_chosen: "Sécurité/Confiance",
    concepts: {
      "Sécurité/Confiance": {
        status: "retenu",
        senses: ["confiance", "sécurité", "faire confiance", "confier"],
        proof_ctx: "Amina (pos=15) : Form I accompli 3MS de amn = il a fait confiance. Fa-in amina baʿḍukum baʿḍan = et si l'un de vous fait confiance à l'autre. Amina = accorder la sécurité/confiance, confier. Sens Sécurité/Confiance retenu. Sens Foi/Adhésion écarté : amina ici est le verbe de confiance pratique (confier un dépôt), pas la foi religieuse.",
        axe1_verset: "Fa-in amina baʿḍukum baʿḍan = et si l'un de vous confie à l'autre (sans gage ni scribe). La confiance mutuelle est une alternative au gage.",
        axe2_voisins: "La confiance (amāna) ici est le fondement du crédit informel — on peut se faire confiance sans formalités légales.",
        axe3_sourate: "La séquence confiance/restitution/taqwā en 2:283 est un modèle éthique du contrat.",
        axe4_coherence: "La Form I amina = faire confiance, accorder la sécurité. En 3:75 : wa-min ahl al-kitābi man in taʾmanhu bi-qinṭārin yuʾaddihi ilayka = parmi les gens du Livre, celui à qui tu confierais un quintal te le rend.",
        axe5_frequence: "Amina dans le sens de confier/accorder la confiance est fréquent dans le Coran."
      },
      "Foi/Adhésion": { status: "nul", senses: ["foi", "croire"], proof_ctx: "Amina ici = confier un dépôt (confiance pratique), pas la foi religieuse." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Amina = faire confiance, non garantir." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  // bed pos=16 — Partie/Division (baʿḍukum = l'un d'entre vous)
  await insertVWA(verse_id, "bed", 16, "l'un d'entre vous (partie du groupe)", {
    concept_chosen: "Partie/Division",
    concepts: {
      "Partie/Division": {
        status: "retenu",
        senses: ["une partie", "certains", "l'un", "quelques-uns"],
        proof_ctx: "Baʿḍukum (pos=16) : baʿḍ + pronom 2MP = l'un d'entre vous / certains d'entre vous. Fa-in amina baʿḍukum baʿḍan = si l'un de vous confie à l'autre. Baʿḍ + baʿḍ = relation réciproque. Sens Partie/Division retenu.",
        axe1_verset: "Baʿḍukum baʿḍan = l'un de vous à l'autre. La réciprocité désigne les deux parties du contrat de confiance.",
        axe2_voisins: "Baʿḍukum baʿḍan est une formule de réciprocité standard dans le Coran.",
        axe3_sourate: "Al-Baqarah utilise baʿḍ fréquemment pour les relations réciproques.",
        axe4_coherence: "Baʿḍ = une partie de, certains. Baʿḍukum baʿḍan = les uns les autres.",
        axe5_frequence: "Baʿḍ apparaît environ 200 fois dans le Coran dans les relations réciproques."
      },
      "Sens isolé/Moustique": { status: "nul", senses: ["moustique"], proof_ctx: "Non applicable." }
    }
  });

  // bed pos=17 — même sens
  await insertVWA(verse_id, "bed", 17, "à l'autre (réciprocité)", {
    concept_chosen: "Partie/Division",
    concepts: {
      "Partie/Division": {
        status: "retenu",
        senses: ["une partie", "l'autre", "quelqu'un"],
        proof_ctx: "Baʿḍan (pos=17) : accusatif de baʿḍ = l'autre. Baʿḍukum baʿḍan = l'un de vous à l'autre. Même sens que pos=16.",
        axe1_verset: "La réciprocité baʿḍukum baʿḍan désigne la relation créancier-débiteur dans la confiance informelle.",
        axe2_voisins: "Formule standard de réciprocité.",
        axe3_sourate: "Relation de confiance entre membres de la communauté.",
        axe4_coherence: "Baʿḍan = l'autre membre du binôme.",
        axe5_frequence: "Formule récurrente dans le Coran."
      },
      "Sens isolé/Moustique": { status: "nul", senses: ["moustique"], proof_ctx: "Non applicable." }
    }
  });

  // ady pos=19 — Accomplissement/Restitution (yuʾaddi = restitue)
  await insertVWA(verse_id, "ady", 19, "restitue (le dépôt confié)", {
    concept_chosen: "Accomplissement/Restitution",
    concepts: {
      "Accomplissement/Restitution": {
        status: "retenu",
        senses: ["restituer", "rendre", "s'acquitter", "accomplir"],
        proof_ctx: "Yuʾaddi (pos=19) : Form II jussif 3MS de ady = qu'il rende, restitue. Fa-l-yuʾaddi lladhī ʾuʾtumina amānatahu = que restitue celui à qui on a confié le dépôt. La Form II ʾaddā = remettre, restituer. Sens Accomplissement/Restitution retenu.",
        axe1_verset: "Fa-l-yuʾaddi lladhī ʾuʾtumina amānatahu = que restitue celui qui a reçu la confiance son dépôt. L'obligation de restituer est absolue.",
        axe2_voisins: "La restitution (adāʾ) est un thème récurrent dans le droit islamique des contrats.",
        axe3_sourate: "En 4:58 : wa-in ḥakamtum bayna n-nāsi an taḥkumū bi-l-ʿadli. L'obligation de rendre ce qui a été confié est un principe coranique.",
        axe4_coherence: "La Form II ʾaddā = s'acquitter, rembourser, restituer. Yuʾaddi amānatahu = rend son dépôt.",
        axe5_frequence: "La racine ady dans le sens de restitution apparaît souvent dans les versets légaux."
      }
    }
  });

  // dhw pos=20 — pronom relatif alladhī
  await insertVWA(verse_id, "dhw", 20, "celui qui (pronom relatif)", {
    concept_chosen: "Dispersion/Semence",
    concepts: {
      "Dispersion/Semence": {
        status: "nul",
        senses: ["disperser", "semer"],
        proof_ctx: "La racine dhw = dispersion/semence ne s'applique pas à alladhī = pronom relatif."
      },
      "Particule/Pronom": {
        status: "retenu",
        senses: ["celui qui", "pronom relatif"],
        proof_ctx: "Alladhī (pos=20) : pronom relatif singulier masculin = celui qui. Fa-l-yuʾaddi lladhī ʾuʾtumina = que restitue celui qui a été mis en confiance. Mot grammatical. Même usage que dhhy (alladhīna).",
        axe1_verset: "Alladhī ʾuʾtumina amānatahu = celui à qui a été confié son dépôt = le dépositaire.",
        axe2_voisins: "Alladhī comme relatif identifie le dépositaire.",
        axe3_sourate: "Fonction purement grammaticale de relativisation.",
        axe4_coherence: "Pronom relatif invariable.",
        axe5_frequence: "Alladhī ≈ 1339 fois dans le Coran."
      },
      "Postérité": { status: "nul", senses: ["descendance"], proof_ctx: "Non applicable ici." }
    }
  });

  // amn pos=21 — Sécurité/Confiance (ʾuʾtumina = a été mis en confiance)
  await insertVWA(verse_id, "amn", 21, "a reçu la confiance (dépositaire)", {
    concept_chosen: "Sécurité/Confiance",
    concepts: {
      "Sécurité/Confiance": {
        status: "retenu",
        senses: ["confiance", "être mis en confiance", "être dépositaire"],
        proof_ctx: "ʾUʾtumina (pos=21) : Form IV passif accompli 3MS de amn = il a été mis en confiance. Alladhī ʾuʾtumina = celui à qui on a accordé la confiance = le dépositaire. Sens Sécurité/Confiance retenu.",
        axe1_verset: "Alladhī ʾuʾtumina amānatahu = celui en qui on a eu confiance (et à qui on a remis le dépôt).",
        axe2_voisins: "La confiance (amāna) est la base du crédit informel en l'absence de gage.",
        axe3_sourate: "L'amāna (dépôt/confiance) est un thème important dans le droit et l'éthique coraniques.",
        axe4_coherence: "Form IV passif ʾuʾtumina = avoir été mis en état de confiance = être le dépositaire.",
        axe5_frequence: "ʾUʾtumina est rare dans le Coran (2:283, 3:75). Il désigne la confiance contractuelle."
      },
      "Foi/Adhésion": { status: "nul", senses: ["foi"], proof_ctx: "ʾUʾtumina = confiance contractuelle, non foi religieuse." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Non applicable." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  // amn pos=22 — Sécurité/Confiance (amānatahu = son dépôt)
  await insertVWA(verse_id, "amn", 22, "son dépôt (objet confié)", {
    concept_chosen: "Sécurité/Confiance",
    concepts: {
      "Sécurité/Confiance": {
        status: "retenu",
        senses: ["dépôt", "chose confiée", "amāna"],
        proof_ctx: "Amānatahu (pos=22) : amāna + pronom 3MS = son dépôt. Fa-l-yuʾaddi amānatahu = qu'il restitue son dépôt. Amāna = ce qui a été confié, le dépôt de confiance. Sens Sécurité/Confiance retenu — amāna est la chose mise en sécurité par confiance.",
        axe1_verset: "Yuʾaddi alladhī ʾuʾtumina amānatahu = restitue celui en qui on a confiance son dépôt.",
        axe2_voisins: "En 4:58 : inna llāha yaʾmurukum an tuʾaddū l-amānāti ilā ahlihā = Dieu vous ordonne de rendre les dépôts à leurs propriétaires.",
        axe3_sourate: "L'amāna (dépôt) est un concept central du droit et de l'éthique islamique.",
        axe4_coherence: "Amāna = la chose confiée, le dépôt. Sa restitution est une obligation absolue.",
        axe5_frequence: "Amāna apparaît environ 6 fois dans le Coran dans le sens de dépôt."
      },
      "Foi/Adhésion": { status: "nul", senses: ["foi"], proof_ctx: "Amāna ici = dépôt matériel, pas foi." },
      "Garantie/Protection": { status: "nul", senses: ["garantie"], proof_ctx: "Non applicable." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  // wqy pos=24 — Protection/Préservation (yattaqi = qu'il craigne)
  await insertVWA(verse_id, "wqy", 24, "craigne (vigilance du dépositaire)", {
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["craindre", "piété", "se prémunir", "vigilance"],
        proof_ctx: "Yattaqi (pos=24) : Form VIII jussif 3MS de wqy = qu'il se protège/craigne. Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur. Même racine qu'en 2:282 pos=4. La taqwā du dépositaire garantit sa fidélité.",
        axe1_verset: "Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur. La conscience divine est la garantie de la restitution du dépôt.",
        axe2_voisins: "La taqwā après l'obligation légale est le rappel de la dimension divine.",
        axe3_sourate: "La taqwā est le fondement éthique des obligations légales dans al-Baqarah.",
        axe4_coherence: "Form VIII ittaqā/yattaqi = craindre Dieu comme moteur d'action juste.",
        axe5_frequence: "Ittaqū/yattaqi dans les injonctions légales est très fréquent."
      },
      "Sens isolé/Bouclier": { status: "nul", senses: ["bouclier"], proof_ctx: "Non applicable." }
    }
  });

  // llh pos=25 — Divinité
  await insertVWA(verse_id, "llh", 25, "Dieu (le juge du dépositaire)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu"], proof_ctx: "Allāha (pos=25) : nom propre divin. Wa-l-yattaqi llāha = qu'il craigne Dieu.", axe1_verset: "Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur.", axe2_voisins: "Allāh comme objet de la taqwā.", axe3_sourate: "Dieu est le garant ultime des obligations contractuelles.", axe4_coherence: "Allāh = nom propre divin.", axe5_frequence: "2699 fois dans le Coran." },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  // rbb pos=26 — Seigneurie/Autorité bienveillante
  await insertVWA(verse_id, "rbb", 26, "son Seigneur (Dieu éducateur)", {
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": { status: "retenu", senses: ["Seigneur", "Maître bienveillant"], proof_ctx: "Rabbahu (pos=26) : rabb + pronom = son Seigneur. Même usage qu'en 2:282 pos=35.", axe1_verset: "Allāha rabbahu = Dieu son Seigneur.", axe2_voisins: "Double désignation Dieu + Seigneur dans les injonctions de taqwā.", axe3_sourate: "Rabb dans al-Baqarah = titre de Dieu dans les contextes législatifs.", axe4_coherence: "Rabb = celui qui élève et guide.", axe5_frequence: "Rabb apparaît ~975 fois dans le Coran." },
      "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Non applicable." },
      "Croissance/Augmentation": { status: "nul", senses: ["croissance"], proof_ctx: "Non applicable." },
      "Éducation/Accompagnement": { status: "nul", senses: ["éduquer"], proof_ctx: "Inclus dans Seigneurie." }
    }
  });

  // ktm pos=28 — Dissimulation/Secret (taktumū = dissimulez)
  await insertVWA(verse_id, "ktm", 28, "dissimulez (cacher le témoignage)", {
    concept_chosen: "Dissimulation/Secret",
    concepts: {
      "Dissimulation/Secret": {
        status: "retenu",
        senses: ["dissimuler", "cacher", "taire", "celer"],
        proof_ctx: "Taktumū (pos=28) : Form I jussif 2MP de ktm = que vous cachiez. Wa-lā taktumū sh-shahādah = et ne cachez pas le témoignage. Katama = cacher, dissimuler, taire. Sens Dissimulation/Secret retenu.",
        axe1_verset: "Wa-lā taktumū sh-shahādah = et ne dissimulez pas le témoignage. L'obligation du témoignage véridique est imposée.",
        axe2_voisins: "La dissimulation du témoignage est une faute morale grave. La séquence gage/dépôt/témoignage est complète.",
        axe3_sourate: "L'honnêteté des témoins est un pilier du droit civil dans al-Baqarah.",
        axe4_coherence: "Katama dans le Coran désigne la dissimulation d'une vérité. En 2:159-160 : wa-man yaktumhā fa-ūlāʾika... ceux qui cachent sont maudits.",
        axe5_frequence: "Katama dans les contextes de témoignage et de vérité apparaît en 2:283, 2:159, 3:187."
      }
    }
  });

  // shh pos=29 — Témoignage/Attestation (ash-shahādah)
  await insertVWA(verse_id, "shh", 29, "témoignage (attestation légale)", {
    concept_chosen: "Témoignage/Attestation",
    concepts: {
      "Témoignage/Attestation": {
        status: "retenu",
        senses: ["témoignage", "attestation", "déposition"],
        proof_ctx: "Ash-shahādah (pos=29) : accusatif de ash-shahādah = le témoignage. Wa-lā taktumū sh-shahādah = ne cachez pas le témoignage. Shahāda = attestation de ce qu'on a vu/su. Sens Témoignage/Attestation retenu.",
        axe1_verset: "Ash-shahādah = le témoignage (légal). Son interdiction de dissimulation en fait une obligation civique.",
        axe2_voisins: "Le témoignage (shahāda) est mentionné plusieurs fois dans 2:282-283. Les témoins (shuhadāʾ) sont requis pour les contrats.",
        axe3_sourate: "La shahāda dans al-Baqarah est un pilier du droit civil.",
        axe4_coherence: "La racine shh dans le sens de témoignage est fréquente (shahāda, shahīd, shuhadāʾ).",
        axe5_frequence: "Shahāda apparaît environ 20 fois dans le Coran."
      },
      "Présence/Assistance": { status: "nul", senses: ["présence"], proof_ctx: "Ash-shahādah ici = le témoignage légal, pas la présence physique." },
      "Martyre": { status: "nul", senses: ["martyre"], proof_ctx: "Ash-shahādah ici n'est pas le martyre." },
      "Nourriture/Alimentation": { status: "nul", senses: ["nourriture"], proof_ctx: "Non applicable." }
    }
  });

  // mny pos=31 — pronom indéfini man = "quiconque"
  await insertVWA(verse_id, "mny", 31, "quiconque (pronom indéfini)", {
    concept_chosen: "Désir/Espérance",
    concepts: {
      "Désir/Espérance": {
        status: "nul",
        senses: ["désirer", "espérer"],
        proof_ctx: "Le sens de désir de la racine mny ne s'applique pas à man = quiconque (pronom indéfini)."
      },
      "Particule/Pronom": {
        status: "retenu",
        senses: ["quiconque", "celui qui", "pronom indéfini"],
        proof_ctx: "Man (pos=31) : pronom indéfini = quiconque, celui qui. Wa-man yaktumhā fa-innahu āthimun qalbuhu = et quiconque le dissimule, son cœur est coupable. Man est un pronom grammatical fonctionnel sans sens lexical propre issu de mny.",
        axe1_verset: "Wa-man yaktumhā = et quiconque le dissimule. Man = toute personne qui.",
        axe2_voisins: "Man comme pronom indéfini universel est très fréquent dans le Coran.",
        axe3_sourate: "Man + verbe = formule de règle universelle.",
        axe4_coherence: "Pronom grammatical fonctionnel.",
        axe5_frequence: "Man apparaît environ 1575 fois dans le Coran."
      },
      "Semence": { status: "nul", senses: ["sperme"], proof_ctx: "Non applicable." }
    }
  });

  // ktm pos=32 — même sens que pos=28
  await insertVWA(verse_id, "ktm", 32, "le dissimule (faute du cœur)", {
    concept_chosen: "Dissimulation/Secret",
    concepts: {
      "Dissimulation/Secret": {
        status: "retenu",
        senses: ["dissimuler", "cacher"],
        proof_ctx: "Yaktumhā (pos=32) : Form I inaccompli 3MS de ktm avec pronom = la dissimule. Wa-man yaktumhā = quiconque la dissimule. Même racine qu'en pos=28.",
        axe1_verset: "Wa-man yaktumhā fa-innahu āthimun qalbuhu = quiconque la dissimule a le cœur coupable.",
        axe2_voisins: "La répétition ktm (pos=28 et 32) souligne la gravité de la dissimulation du témoignage.",
        axe3_sourate: "La dissimulation du témoignage est une faute morale profonde.",
        axe4_coherence: "Yaktumhā = la dissimule (pronom féminin = ash-shahādah).",
        axe5_frequence: "Répétition rhétorique pour insistance."
      }
    }
  });

  // nws pos=34 — emphase innahu
  await insertVWA(verse_id, "nws", 34, "emphase (innahu = assurément son)", {
    concept_chosen: "Humanité/Peuple",
    concepts: {
      "Humanité/Peuple": {
        status: "nul",
        senses: ["peuple", "gens"],
        proof_ctx: "Le sens d'humanité/peuple de nws ne s'applique pas à innahu = assurément son."
      },
      "Particule/Emphase": {
        status: "retenu",
        senses: ["assurément", "emphase affirmative", "c'est bien lui"],
        proof_ctx: "Innahu (pos=34) : inna + pronom = assurément lui/son. Fa-innahu āthimun qalbuhu = assurément son cœur est coupable. Inna est une particule d'emphase/affirmation. La clé 'nws' est un tag de la racine nws mais la fonction grammaticale est la particule inna.",
        axe1_verset: "Fa-innahu āthimun qalbuhu = assurément son cœur est coupable. Innahu renforce la certitude de la culpabilité.",
        axe2_voisins: "Inna est une des particules les plus fréquentes dans le Coran pour l'affirmation et l'emphase.",
        axe3_sourate: "La particule inna dans les jugements moraux souligne la certitude.",
        axe4_coherence: "Inna + pronom est une construction nominale emphatique.",
        axe5_frequence: "Inna apparaît environ 520 fois dans le Coran."
      },
      "Perception/Visibilité": { status: "nul", senses: ["voir de loin"], proof_ctx: "Non applicable." }
    }
  });

  // athm pos=35 — Péché/Faute (āthimun = coupable)
  await insertVWA(verse_id, "athm", 35, "coupable (péché du cœur)", {
    concept_chosen: "Péché/Faute",
    concepts: {
      "Péché/Faute": {
        status: "retenu",
        senses: ["péché", "faute", "culpabilité", "coupable"],
        proof_ctx: "Āthimun (pos=35) : Form I participe actif de athm = coupable, fautif. Āthimun qalbuhu = son cœur est coupable. Ithm = péché, faute. Sens Péché/Faute retenu.",
        axe1_verset: "Fa-innahu āthimun qalbuhu = son cœur est assurément coupable. L'attribut de culpabilité est porté par le cœur — c'est une faute intime.",
        axe2_voisins: "L'ithm (péché) est mentionné dans les contextes d'interdits alimentaires et moraux. En 2:219 : fīhimā ithm kabīr = il y a en eux un grand péché.",
        axe3_sourate: "La culpabilité du cœur (āthimun qalbuhu) est une formule unique qui localise la faute dans l'intériorité.",
        axe4_coherence: "Āthim = celui qui a commis un ithm. La dissimulation du témoignage est un péché.",
        axe5_frequence: "Ithm et ses dérivés apparaissent environ 48 fois dans le Coran."
      },
      "Retard/Lenteur": { status: "nul", senses: ["retard"], proof_ctx: "Non applicable ici." }
    }
  });

  // qlb pos=36 — Coeur/Centre (qalbuhu = son cœur)
  await insertVWA(verse_id, "qlb", 36, "son cœur (siège de la faute)", {
    concept_chosen: "Coeur/Centre",
    concepts: {
      "Coeur/Centre": {
        status: "retenu",
        senses: ["cœur", "centre", "intérieur"],
        proof_ctx: "Qalbuhu (pos=36) : qalb + pronom = son cœur. Āthimun qalbuhu = son cœur est coupable. Le qalb est le siège de l'intention et de la conscience morale. Sens Coeur/Centre retenu.",
        axe1_verset: "Āthimun qalbuhu = son cœur est coupable. Le cœur est le siège de la faute dans la dissimulation du témoignage — c'est une faute d'intention.",
        axe2_voisins: "Le cœur (qalb) dans le Coran est le siège de la foi, de la compréhension et de la morale. En 2:10 : fī qulūbihim maraḍun = dans leurs cœurs est une maladie.",
        axe3_sourate: "Al-Baqarah utilise le qalb pour désigner l'état intérieur (maladie du cœur, dureté du cœur). Ici la culpabilité est intérieure.",
        axe4_coherence: "Qalb dans le Coran est le centre de la conscience morale. Āthimun qalbuhu = la faute est dans son intériorité.",
        axe5_frequence: "Qalb apparaît environ 132 fois dans le Coran."
      },
      "Retournement/Changement": { status: "nul", senses: ["retournement"], proof_ctx: "Qalb ici est le cœur (nom), pas le retournement (verbe qalaba)." },
      "Sens isolé/Bracelet": { status: "nul", senses: ["bracelet"], proof_ctx: "Non applicable." },
      "Sens isolé/Moule": { status: "nul", senses: ["moule"], proof_ctx: "Non applicable." }
    }
  });

  // llh pos=37 — Divinité
  await insertVWA(verse_id, "llh", 37, "Dieu (omniscient des actes)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": { status: "retenu", senses: ["Dieu"], proof_ctx: "Allāhu (pos=37) : nominatif. Wa-llāhu bimā taʿmalūna ʿalīmun = et Dieu est omniscient de ce que vous faites.", axe1_verset: "Wa-llāhu ʿalīmun = et Dieu est omniscient. La clôture du verset sur l'omniscience divine garantit que même les actes cachés sont connus.", axe2_voisins: "La formule wa-llāhu bimā taʿmalūna ʿalīmun clôt plusieurs versets législatifs.", axe3_sourate: "L'omniscience divine est le dernier mot sur toute obligation légale.", axe4_coherence: "Allāh omniscient = contrôle ultime sur la sincérité humaine.", axe5_frequence: "Formule de clôture récurrente dans le Coran." },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  // mym pos=38 — Lettre/Mystère (bimā = de ce que)
  await insertVWA(verse_id, "mym", 38, "de ce que (particule de connexion)", {
    concept_chosen: "Lettre/Mystère",
    concepts: {
      "Lettre/Mystère": {
        status: "nul",
        senses: ["mîm", "lettre"],
        proof_ctx: "Le sens de lettre mystérieuse de mym ne s'applique pas à bimā = de ce que (préposition + relatif)."
      },
      "Particule/Connexion": {
        status: "retenu",
        senses: ["de ce que", "à propos de", "concernant ce que"],
        proof_ctx: "Bimā (pos=38) : bi = par/avec + mā = ce que. Bimā taʿmalūna ʿalīmun = omniscient de ce que vous faites. Construction bi + mā relative = à propos de ce que. Particule grammaticale fonctionnelle.",
        axe1_verset: "Bimā taʿmalūna = de ce que vous faites. La combinaison bi + mā introduit l'objet du savoir divin.",
        axe2_voisins: "Bimā comme préposition de connexion relative est très fréquente dans les formules coraniques.",
        axe3_sourate: "Formule de clôture récurrente.",
        axe4_coherence: "Bimā = bi + mā — construction préposition-relatif standard.",
        axe5_frequence: "Bimā apparaît souvent dans les formules de clôture."
      }
    }
  });

  // eml pos=39 — Action/Oeuvre (taʿmalūna = vous faites)
  await insertVWA(verse_id, "eml", 39, "vous faites (les actes accomplis)", {
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["action", "oeuvre", "faire", "agir"],
        proof_ctx: "Taʿmalūna (pos=39) : Form I inaccompli 2MP de eml = vous faites/agissez. Bimā taʿmalūna = de ce que vous faites. ʿAmila = faire, agir, œuvrer. Sens Action/Oeuvre retenu.",
        axe1_verset: "Wa-llāhu bimā taʿmalūna ʿalīmun = et Dieu est omniscient de ce que vous faites. L'omniscience divine porte sur les actes.",
        axe2_voisins: "La formule bimā taʿmalūna ʿalīmun clôt plusieurs versets (2:233, 2:283).",
        axe3_sourate: "Al-ʿamal (l'action) est un des thèmes centraux d'al-Baqarah : la foi se manifeste dans les actes.",
        axe4_coherence: "La racine eml dans le Coran désigne l'action morale/pratique de l'être humain.",
        axe5_frequence: "ʿAmila apparaît environ 360 fois dans le Coran."
      },
      "Sens isolé/Gouverneur": { status: "nul", senses: ["gouverneur"], proof_ctx: "Non applicable ici." }
    }
  });

  // elm pos=40 — Savoir/Connaissance (ʿalīmun = omniscient)
  await insertVWA(verse_id, "elm", 40, "Omniscient (attribut divin du savoir)", {
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "connaissance", "omniscient", "savant"],
        proof_ctx: "ʿAlīmun (pos=40) : Form I adjectif hyperbolique de elm = très savant, omniscient. Wa-llāhu bimā taʿmalūna ʿalīmun = Dieu est omniscient de vos actes. ʿAlīm est l'un des attributs divins les plus fréquents dans le Coran. Sens Savoir/Connaissance retenu.",
        axe1_verset: "Wa-llāhu ʿalīmun = et Dieu est omniscient. L'omniscience divine garantit que la dissimulation ne peut pas échapper à Dieu.",
        axe2_voisins: "ʿAlīmun comme attribut divin dans les formules de clôture : wa-llāhu ʿalīmun ḥakīmun / ʿalīmun khabīrun.",
        axe3_sourate: "Al-Baqarah utilise ʿalīmun pour clôturer les versets législatifs en rappelant l'omniscience divine.",
        axe4_coherence: "La Form I hyperbole ʿalīm = très savant. Allāhu ʿalīm = Dieu omniscient.",
        axe5_frequence: "ʿAlīm comme attribut divin apparaît environ 157 fois dans le Coran."
      },
      "Marque/Signe": { status: "nul", senses: ["marque"], proof_ctx: "ʿAlīm est l'adjectif de savoir, non de marque." },
      "Monde/Création": { status: "nul", senses: ["monde"], proof_ctx: "Non applicable." },
      "Sens isolé/Enseigner": { status: "nul", senses: ["enseigner"], proof_ctx: "ʿAlīm = omniscient (attribut), non enseigner (verbe)." },
      "Sens isolé/Homonyme": { status: "nul", senses: ["homonyme"], proof_ctx: "Non applicable." },
      "Lieu/Géographie": { status: "nul", senses: ["lieu"], proof_ctx: "Non applicable." }
    }
  });

  // word_daily pour les racines sans daily dans V283
  await insertWordDaily(2656, "voyage", [
    { fr: "Je suis en voyage pour une semaine.", ar: "أَنَا فِي سَفَرٍ لِأُسْبُوعٍ.", phon: "anā fī safarin li-usbūʿ" },
    { fr: "Le voyage en train prend deux heures.", ar: "السَّفَرُ بِالْقِطَارِ يَسْتَغْرِقُ سَاعَتَيْنِ.", phon: "as-safaru bi-l-qiṭāri yastaghriqu sāʿatayn" },
    { fr: "Bon voyage ! Reviens sain et sauf.", ar: "سَفَرًا مُوَفَّقًا! عُدْ سَالِمًا.", phon: "safaran muwaffaqan! ʿud sāliman" }
  ]);

  await insertWordDaily(1207, "gage", [
    { fr: "Il a laissé sa montre comme gage.", ar: "تَرَكَ سَاعَتَهُ رَهِينَةً.", phon: "taraka sāʿatahu rahīnatan" },
    { fr: "Le gage sera rendu quand la dette sera remboursée.", ar: "يُعَادُ الرَّهْنُ عِنْدَ سَدَادِ الدَّيْنِ.", phon: "yuʿādu ar-rahnu ʿinda sadād ad-dayn" },
    { fr: "Un gage doit être remis en main propre.", ar: "الرَّهْنُ يَجِبُ تَسْلِيمُهُ يَدًا بِيَدٍ.", phon: "ar-rahnu yajibu taslīmuhu yadan bi-yadin" }
  ]);

  await insertWordDaily(1077, "prise en main", [
    { fr: "Il a pris le document en main.", ar: "قَبَضَ الْوَثِيقَةَ بِيَدِهِ.", phon: "qabaḍa al-wathīqata bi-yadihi" },
    { fr: "La saisie doit être effective pour valider le contrat.", ar: "الْقَبْضُ الْفِعْلِيُّ شَرْطٌ لِصِحَّةِ الْعَقْدِ.", phon: "al-qabḍu al-fiʿliyyu sharṭun li-ṣiḥḥat al-ʿaqd" },
    { fr: "Il a contracté sa main pour saisir l'objet.", ar: "قَبَضَ يَدَهُ لِيُمْسِكَ الشَّيْءَ.", phon: "qabaḍa yadahu li-yumsika ash-shayʾ" }
  ]);

  await insertWordDaily(1208, "restitution", [
    { fr: "Il a restitué l'argent à son propriétaire.", ar: "أَدَّى الْمَالَ إِلَى صَاحِبِهِ.", phon: "addā al-māla ilā ṣāḥibihi" },
    { fr: "La restitution du dépôt est une obligation.", ar: "أَدَاءُ الْأَمَانَةِ وَاجِبٌ.", phon: "adāʾ al-amānati wājibun" },
    { fr: "Il a rendu le livre emprunté sans délai.", ar: "أَدَّى الْكِتَابَ الْمُسْتَعَارَ دُونَ تَأْخِيرٍ.", phon: "addā al-kitāba al-mustaʿāra dūna taʾkhīr" }
  ]);

  await insertWordDaily(840, "témoignage", [
    { fr: "Son témoignage a changé le verdict.", ar: "شَهَادَتُهُ غَيَّرَتِ الْحُكْمَ.", phon: "shahādatuhu ghayyarat al-ḥukm" },
    { fr: "Il a refusé de témoigner malgré la convocation.", ar: "رَفَضَ أَنْ يَشْهَدَ رَغْمَ الِاسْتِدْعَاءِ.", phon: "rafaḍa an yashhada raghma al-istidʿāʾ" },
    { fr: "Un témoignage mensonger est une injustice.", ar: "الشَّهَادَةُ الزُّورُ ظُلْمٌ.", phon: "ash-shahādatu az-zūru ẓulmun" }
  ]);

  await insertWordDaily(470, "apparition", [
    { fr: "Il a révélé ce qu'il avait caché.", ar: "أَبْدَى مَا كَانَ يُخْفِيهِ.", phon: "abdā mā kāna yukhfīhi" },
    { fr: "Le désert apparaît à perte de vue.", ar: "الصَّحْرَاءُ تَبْدُو مَدَّ الْبَصَرِ.", phon: "aṣ-ṣaḥrāʾu tabdū madda al-baṣar" },
    { fr: "Il a manifesté clairement ses intentions.", ar: "أَبْدَى نِيَّاتِهِ بِوُضُوحٍ.", phon: "abdā niyyātihi bi-wuḍūḥ" }
  ]);

  await insertWordDaily(925, "obéissance", [
    { fr: "Il a obéi à l'ordre sans hésitation.", ar: "أَطَاعَ الْأَمْرَ دُونَ تَرَدُّدٍ.", phon: "aṭāʿa al-amra dūna taraddud" },
    { fr: "L'obéissance volontaire vaut plus que la contrainte.", ar: "الطَّاعَةُ الطَّوْعِيَّةُ خَيْرٌ مِنَ الْإِكْرَاهِ.", phon: "aṭ-ṭāʿatu aṭ-ṭawʿiyyatu khayrun min al-ikrāh" },
    { fr: "Elle a suivi les instructions à la lettre.", ar: "اتَّبَعَتِ التَّعْلِيمَاتِ حَرْفِيًّا.", phon: "ittabaʿat at-taʿlīmāti ḥarfiyyan" }
  ]);

  console.log('\nVERSET 2:283 — TERMINÉ');
  console.log('  kwn (pos=3) → Être/Existence → "vous êtes"');
  console.log('  elw (pos=4) → Sur/Au-dessus (préposition) → "en"');
  console.log('  sfar (pos=5) → Voyage/Déplacement → "voyage" [NOUVEAU ROOT]');
  console.log('  wjd (pos=8) → Découverte/Existence → "trouvez"');
  console.log('  ktb (pos=9) → Écriture/Inscription → "scribe"');
  console.log('  rhn (pos=11) → Gage/Garantie → "gage"');
  console.log('  qbd (pos=12) → Saisie/Contraction → "remis en main"');
  console.log('  amn (pos=15) → Sécurité/Confiance → "confie"');
  console.log('  bed (pos=16,17) → Partie/Division → "l\'un/l\'autre"');
  console.log('  ady (pos=19) → Accomplissement/Restitution → "restitue"');
  console.log('  dhw (pos=20) → Particule/Pronom → "celui qui"');
  console.log('  amn (pos=21) → Sécurité/Confiance → "a reçu la confiance"');
  console.log('  amn (pos=22) → Sécurité/Confiance → "dépôt"');
  console.log('  wqy (pos=24) → Protection/Préservation → "craigne"');
  console.log('  llh (pos=25) → Divinité → "Dieu"');
  console.log('  rbb (pos=26) → Seigneurie/Autorité bienveillante → "son Seigneur"');
  console.log('  ktm (pos=28,32) → Dissimulation/Secret → "dissimulez/dissimule"');
  console.log('  shh (pos=29) → Témoignage/Attestation → "témoignage"');
  console.log('  mny (pos=31) → Particule/Pronom → "quiconque"');
  console.log('  nws (pos=34) → Particule/Emphase → "emphase (innahu)"');
  console.log('  athm (pos=35) → Péché/Faute → "coupable"');
  console.log('  qlb (pos=36) → Coeur/Centre → "son cœur"');
  console.log('  llh (pos=37) → Divinité → "Dieu"');
  console.log('  mym (pos=38) → Particule/Connexion → "de ce que"');
  console.log('  eml (pos=39) → Action/Oeuvre → "vous faites"');
  console.log('  elm (pos=40) → Savoir/Connaissance → "Omniscient"');
  console.log('  Traduction : "Et si vous êtes en voyage et ne trouvez pas de scribe, un gage remis en main propre suffit..."');
}

processVerse283().catch(console.error);
