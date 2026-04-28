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
// VERSET 2:282  verse_id=289  analysis_id=648
// Le plus long verset du Coran — règlementation du prêt avec témoins
// Segments importants:
//   pos=2  dhhy (al-ladhīna) — nom/pronom relatif pluriel
//   pos=3  amn  (āmanū) — verbe
//   pos=5  dyn  (tadāyantum) — verbe
//   pos=7  dyn  (daynin) — nom
//   pos=9  ajl  (ajal) — nom
//   pos=10 smw  (musamman) — adjectif
//   pos=12 ktb  (uktubūhu) — verbe impératif
//   pos=14 ktb  (yaktub) — verbe
//   pos=15 byn  (baynakum) — nom
//   pos=16 ktb  (kātibun) — nom
//   pos=18 edl  (al-ʿadli) — nom
//   pos=20 aby  (yaʾba) — verbe
//   pos=21 ktb  (kātibun) — nom (idem pos=16)
//   pos=23 ktb  (yaktuba) — verbe
//   pos=24 kmw  (kamā) — particule comparaison
//   pos=25 elm  (ʿallamahu) — verbe
//   pos=28 ktb  (yaktub) — verbe (idem pos=14)
//   pos=30 dhhy (alladhī) — pronom relatif singulier
//   pos=32 hqq  (al-ḥaqq) — nom
//   pos=34 llh  (allāha) — nom
//   pos=35 rbb  (rabbahu) — nom
//   pos=37 bxs  (yabkhas) — verbe
//   pos=40 šya  (shayʾan) — nom
// ============================================================
async function processVerse282() {
  console.log('\n=== 2:282 ===');
  const verse_id = 289;
  const analysis_id = 648;

  const translation_arab = "Ô vous qui avez cru ! Quand vous contractez une dette à terme fixé, écrivez-la. Et qu'un scribe l'écrive avec équité entre vous. Qu'aucun scribe ne refuse d'écrire selon ce que Dieu lui a enseigné. Qu'il écrive donc, et que dicte celui qui a l'obligation, qu'il craigne Dieu son Seigneur et ne diminue rien de sa dette.";
  const full_translation = "Ô vous qui avez cru ! Quand vous contractez une dette à terme fixé, écrivez-la. Et qu'un scribe l'écrive avec équité entre vous. Qu'aucun scribe ne refuse d'écrire selon ce que Dieu lui a enseigné. Qu'il écrive donc, et que dicte celui qui a l'obligation, qu'il craigne Dieu son Seigneur et ne diminue rien de sa dette.";

  const translation_explanation = `§DEMARCHE§
V282 est le verset le plus long du Coran — il établit la réglementation du prêt écrit avec témoins. Structure principale : yā ayyuhā lladhīna āmanū idhā tadāyantum bi-daynin ilā ajalin musamman fa-ktubūhu (ô vous qui avez cru, quand vous vous endettez mutuellement pour une dette à terme fixé, écrivez-la). Puis wa-l-yaktub baynakum kātibun bi-l-ʿadli (qu'un scribe écrive entre vous avec équité). Wa-lā yaʾba kātibun an yaktuba kamā ʿallamahu llāhu (qu'aucun scribe ne refuse d'écrire selon ce que Dieu lui a enseigné). Fal-yaktub wa-l-yumlil alladhī ʿalayhi l-ḥaqq (qu'il écrive, et que dicte celui sur qui pèse l'obligation). Wa-l-yattaqi llāha rabbahu wa-lā yabkhas minhu shayʾan (qu'il craigne Dieu son Seigneur et ne retranche rien).

§JUSTIFICATION§
Alladhīna āmanū : formule d'interpellation des croyants — dhhy est le relatif pluriel (ceux qui). Āmanū : Foi/Adhésion — ceux qui ont cru. Tadāyantum : sens retenu de dyn = Dette/Obligation — Form VI réciproque (se faire des dettes mutuellement). Daynin : même sens — la dette elle-même. Ajal : Terme/Échéance — terme fixé. Musamman : sens retenu de smw = Nom/Identification — un terme nommé/fixé (participe passif désigné). Uktubūhu / yaktub / kātibun / yaktuba / yaktub : tous de ktb = Écriture/Inscription — écrire, le scribe, l'écrit. Baynakum : sens retenu de byn = Séparation/Distance — entre vous (la relation de réciprocité). Al-ʿadli : sens retenu de edl = Justice/Équité. Yaʾba : sens retenu de aby = Refus/Rejet — qu'il ne refuse pas. Kamā ʿallamahu : elm = Savoir/Connaissance — selon ce qu'il lui a enseigné. Al-ḥaqq : sens retenu de hqq = Vérité/Réalité / Obligation/Nécessité — ici l'obligation (al-ḥaqq = la dette/obligation). Rabbahu : rbb = Seigneurie/Autorité bienveillante. Yabkhas : bxs = Injustice/Lésion — diminuer, retrancher injustement. Shayʾan : šya = Chose/Existence — quoi que ce soit, rien.

§CRITIQUE§
Hamidullah traduit ce verset dans sa totalité avec beaucoup de fidélité. Sa traduction de tadāyantum par "vous vous faites des avances" plutôt que "vous contractez une dette" est plus littérale. Notre traduction "vous contractez une dette" rend mieux le sens pratique. Sur musamman, Hamidullah dit "pour un temps déterminé" — nous disons "à terme fixé" (même sens). Sur bi-l-ʿadli, Hamidullah dit "équitablement" — nous disons "avec équité". Les traductions courantes donnent sensiblement le même sens.`;

  const segments = [
    { position: 1, arabic: "يَـٰٓأَيُّهَا", phon: "yā ayyuhā", fr: "Ô", is_particle: true },
    { position: 2, arabic: "ٱلَّذِينَ", phon: "al-ladhīna", fr: "vous qui", is_particle: false, word_key: "dhhy", pos: "nom", sense_retenu: "ceux qui" },
    { position: 3, arabic: "ءَامَنُوا۟", phon: "āmanū", fr: "avez cru !", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "avez cru" },
    { position: 4, arabic: "إِذَا", phon: "idhā", fr: "Quand", is_particle: true },
    { position: 5, arabic: "تَدَايَنتُم", phon: "tadāyantum", fr: "vous contractez une dette", is_particle: false, word_key: "dyn", pos: "verbe", sense_retenu: "contractez une dette" },
    { position: 6, arabic: "بِ", phon: "bi", fr: "pour", is_particle: true },
    { position: 7, arabic: "دَيْنٍ", phon: "daynin", fr: "une dette", is_particle: false, word_key: "dyn", pos: "nom", sense_retenu: "dette" },
    { position: 8, arabic: "إِلَىٰ", phon: "ilā", fr: "à", is_particle: true },
    { position: 9, arabic: "أَجَلٍ", phon: "ajalin", fr: "terme", is_particle: false, word_key: "ajl", pos: "nom", sense_retenu: "terme" },
    { position: 10, arabic: "مُّسَمًّى", phon: "musamman", fr: "fixé,", is_particle: false, word_key: "smw", pos: "adjectif", sense_retenu: "fixé/désigné" },
    { position: 11, arabic: "فَٱكْتُبُوهُ", phon: "fa-ktubūhu", fr: "écrivez-la.", is_particle: true },
    { position: 12, arabic: "ٱكْتُبُوهُ", phon: "uktubūhu", fr: "Écrivez-la", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "écrivez" },
    { position: 13, arabic: "وَلْ", phon: "wa-l", fr: "Et qu'", is_particle: true },
    { position: 14, arabic: "يَكْتُب", phon: "yaktub", fr: "écrive", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "écrive" },
    { position: 15, arabic: "بَيْنَكُمْ", phon: "baynakum", fr: "entre vous", is_particle: false, word_key: "byn", pos: "nom", sense_retenu: "entre" },
    { position: 16, arabic: "كَاتِبٌ", phon: "kātibun", fr: "un scribe", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 17, arabic: "بِٱلْعَدْلِ", phon: "bi-l-ʿadli", fr: "avec équité.", is_particle: true },
    { position: 18, arabic: "ٱلْعَدْلِ", phon: "al-ʿadli", fr: "équité", is_particle: false, word_key: "edl", pos: "nom", sense_retenu: "équité" },
    { position: 19, arabic: "وَلَا", phon: "wa-lā", fr: "Qu'aucun", is_particle: true },
    { position: 20, arabic: "يَأْبَ", phon: "yaʾba", fr: "ne refuse", is_particle: false, word_key: "aby", pos: "verbe", sense_retenu: "refuse" },
    { position: 21, arabic: "كَاتِبٌ", phon: "kātibun", fr: "scribe", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 22, arabic: "أَن", phon: "an", fr: "d'", is_particle: true },
    { position: 23, arabic: "يَكْتُبَ", phon: "yaktuba", fr: "écrire", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "écrire" },
    { position: 24, arabic: "كَمَا", phon: "kamā", fr: "selon ce que", is_particle: false, word_key: "kmw", pos: "particule", sense_retenu: "selon" },
    { position: 25, arabic: "عَلَّمَهُ", phon: "ʿallamahu", fr: "lui a enseigné", is_particle: false, word_key: "elm", pos: "verbe", sense_retenu: "lui a enseigné" },
    { position: 26, arabic: "ٱللَّهُ", phon: "allāhu", fr: "Dieu,", is_particle: true },
    { position: 27, arabic: "فَلْ", phon: "fal", fr: "Qu'il", is_particle: true },
    { position: 28, arabic: "يَكْتُب", phon: "yaktub", fr: "écrive donc,", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "écrive" },
    { position: 29, arabic: "وَلْيُمْلِلِ", phon: "walyumlli", fr: "et que dicte", is_particle: true },
    { position: 30, arabic: "ٱلَّذِى", phon: "alladhī", fr: "celui qui", is_particle: false, word_key: "dhhy", pos: "nom", sense_retenu: "celui qui" },
    { position: 31, arabic: "عَلَيْهِ", phon: "ʿalayhi", fr: "sur lui", is_particle: true },
    { position: 32, arabic: "ٱلْحَقُّ", phon: "al-ḥaqq", fr: "pèse l'obligation,", is_particle: false, word_key: "hqq", pos: "nom", sense_retenu: "l'obligation" },
    { position: 33, arabic: "وَلْيَتَّقِ", phon: "walyattaqi", fr: "qu'il craigne", is_particle: true },
    { position: 34, arabic: "ٱللَّهَ", phon: "allāha", fr: "Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 35, arabic: "رَبَّهُ", phon: "rabbahu", fr: "son Seigneur", is_particle: false, word_key: "rbb", pos: "nom", sense_retenu: "son Seigneur" },
    { position: 36, arabic: "وَلَا", phon: "wa-lā", fr: "et ne", is_particle: true },
    { position: 37, arabic: "يَبْخَسْ", phon: "yabkhas", fr: "retranche pas", is_particle: false, word_key: "bxs", pos: "verbe", sense_retenu: "retranche/lèse" },
    { position: 38, arabic: "مِنْهُ", phon: "minhu", fr: "de sa dette", is_particle: true },
    { position: 39, arabic: "هُ", phon: "hu", fr: "", is_particle: true },
    { position: 40, arabic: "شَيْـًٔا", phon: "shayʾan", fr: "quoi que ce soit.", is_particle: false, word_key: "šya", pos: "nom", sense_retenu: "quoi que ce soit" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  // dhhy pos=2 — pronom relatif pluriel (alladhīna = ceux qui)
  await insertVWA(verse_id, "dhhy", 2, "ceux qui (pronom relatif pluriel)", {
    concept_chosen: "Non trouvé",
    concepts: {
      "Non trouvé": {
        status: "retenu",
        senses: ["non trouvé"],
        proof_ctx: "Al-ladhīna (pos=2) est le pronom relatif pluriel masculin (ceux qui). C'est un mot grammatical arabe sans étymologie lexicale tractable dans le Lane's. Sa fonction est purement relativisante : yā ayyuhā lladhīna āmanū = ô vous qui avez cru. Il introduit la relative qui définit le groupe interpellé. Aucun sens lexical indépendant.",
        axe1_verset: "Alladhīna āmanū = ceux qui ont cru. Le pronom relatif pluriel identifie le collectif des croyants comme destinataires de l'injonction.",
        axe2_voisins: "La formule yā ayyuhā lladhīna āmanū est l'une des plus fréquentes dans le Coran pour interpeller la communauté musulmane.",
        axe3_sourate: "Al-Baqarah utilise cette formule environ 26 fois pour introduire des obligations pratiques.",
        axe4_coherence: "Le pronom relatif alladhīna est invariable — il n'a pas de flexion casuelle propre. C'est un morphème grammatical.",
        axe5_frequence: "Alladhīna apparaît environ 928 fois dans le Coran — parmi les mots les plus fréquents."
      }
    }
  });

  // amn pos=3 — Foi/Adhésion
  await insertVWA(verse_id, "amn", 3, "avez cru (foi)", {
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
        proof_ctx: "Āmanū (pos=3) : Form IV accompli 3MP de amn (ou Form I = ʾāmana). Yā ayyuhā lladhīna āmanū = ô vous qui avez cru. Formule d'interpellation standard. La foi (āmanū) est la condition d'appartenance. Sens Foi/Adhésion retenu.",
        axe1_verset: "Yā ayyuhā lladhīna āmanū introduit le plus long verset du Coran — la réglementation du prêt écrit. La foi est la base d'une économie juste.",
        axe2_voisins: "La formule yā ayyuhā lladhīna āmanū est récurrente pour introduire des injonctions pratiques (2:183, 2:208, 2:254, 2:278).",
        axe3_sourate: "Al-Baqarah s'adresse aux croyants pour réformer les pratiques économiques. La foi (āmanū) est le fondement de l'éthique économique.",
        axe4_coherence: "La Form IV ʾāmana = croire, avoir la foi. La foi est à la fois acte d'adhésion intellectuelle et engagement pratique.",
        axe5_frequence: "Āmanū dans yā ayyuhā lladhīna āmanū apparaît 89 fois dans le Coran."
      },
      "Garantie/Protection": { status: "nul", senses: ["garantie", "sécurité"], proof_ctx: "Le sens de garantie (amāna) n'est pas pertinent ici — āmanū est le verbe de foi, pas de dépôt." },
      "Sécurité/Confiance": { status: "nul", senses: ["confiance", "sécurité"], proof_ctx: "La confiance est une conséquence de la foi, pas son sens premier ici." },
      "Sens isolé/Amen": { status: "nul", senses: ["amen"], proof_ctx: "Non applicable." }
    }
  });

  // dyn pos=5 — Dette/Obligation (tadāyantum = se faire des dettes mutuellement)
  await insertVWA(verse_id, "dyn", 5, "contractez une dette (mutuellement)", {
    concept_chosen: "Dette/Obligation",
    concepts: {
      "Dette/Obligation": {
        status: "retenu",
        senses: ["dette", "obligation", "emprunt"],
        proof_ctx: "Tadāyantum (pos=5) : Form VI accompli 2MP de dyn = se faire des dettes mutuellement (Form VI réciproque). Tadāyantum bi-daynin = vous contractez une dette. Le sens Det/Obligation est retenu — Form VI désigne la réciprocité du contrat de dette. Sens Religion/Système écarté : ici dyn est clairement la dette financière. Sens Rétribution/Compte écarté : il s'agit d'une transaction, pas d'un jugement.",
        axe1_verset: "Idhā tadāyantum bi-daynin ilā ajalin musamman = quand vous contractez une dette pour un terme fixé. Form VI = réciprocité : les deux parties s'engagent mutuellement.",
        axe2_voisins: "La séquence 2:282-283 est la seule grande réglementation coranienne du crédit écrit. Elle fait suite à l'interdiction de l'usure (2:275-281). Le prêt licite remplace le prêt usuraire.",
        axe3_sourate: "Al-Baqarah 2:282 est le verset législatif le plus long du Coran. La réglementation de la dette (dayn) est au cœur du projet économique coranique.",
        axe4_coherence: "La racine dyn dans le sens de dette financière est confirmée par les occurrences coraniques : en 2:282, 4:11, 4:12 (dettes dans les successions). La Form VI tadāyana est unique au Coran.",
        axe5_frequence: "La dette (dayn) est une réalité économique fondamentale. Sa réglementation par l'écriture et les témoins est une mesure de justice sociale."
      },
      "Religion/Système": { status: "nul", senses: ["religion", "système"], proof_ctx: "Le sens de religion (dīn = religion) est une homonymie. Ici tadāyantum bi-daynin est clairement dans un contexte économique." },
      "Rétribution/Compte": { status: "nul", senses: ["rétribution", "compte"], proof_ctx: "Le sens de rétribution (yawm al-dīn) ne s'applique pas à une transaction commerciale." },
      "Obéissance/Soumission": { status: "nul", senses: ["obéissance"], proof_ctx: "Non applicable." },
      "Sens isolé/Maladie": { status: "nul", senses: ["maladie"], proof_ctx: "Non applicable." },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." }
    }
  });

  // dyn pos=7 — Dette/Obligation (daynin = la dette)
  await insertVWA(verse_id, "dyn", 7, "dette (obligation financière)", {
    concept_chosen: "Dette/Obligation",
    concepts: {
      "Dette/Obligation": {
        status: "retenu",
        senses: ["dette", "obligation", "emprunt"],
        proof_ctx: "Daynin (pos=7) : génitif indéfini de dayn = la dette. Tadāyantum bi-daynin = vous vous endettez pour une dette. La répétition tadāyantum/daynin (cognate accusatif) renforce l'idée de la réalité de la dette. Même sens que pos=5.",
        axe1_verset: "Bi-daynin = pour une dette. Le dayn est l'objet de l'écriture imposée. La réglementation porte sur la dette elle-même.",
        axe2_voisins: "Dayn en 2:282-283 désigne la dette financière à terme. En 4:11-12, dayn est la dette à régler avant le partage de l'héritage.",
        axe3_sourate: "La dette (dayn) est une obligation contractuelle. L'écriture la sécurise pour les deux parties.",
        axe4_coherence: "Dayn dans le Coran désigne toujours la dette financière, jamais la religion (qui est dīn avec un ī long). La distinction phonétique est confirmée par le contexte.",
        axe5_frequence: "Dayn apparaît 7 fois dans le Coran, principalement dans les contextes de succession et de prêt."
      },
      "Religion/Système": { status: "nul", senses: ["religion"], proof_ctx: "Dayn (dette) ≠ dīn (religion) phonétiquement et sémantiquement." },
      "Rétribution/Compte": { status: "nul", senses: ["rétribution"], proof_ctx: "Non applicable dans ce contexte économique." },
      "Obéissance/Soumission": { status: "nul", senses: ["obéissance"], proof_ctx: "Non applicable." },
      "Sens isolé/Maladie": { status: "nul", senses: ["maladie"], proof_ctx: "Non applicable." },
      "Eau/Liquide": { status: "nul", senses: ["eau"], proof_ctx: "Non applicable." }
    }
  });

  // ajl pos=9 — Terme/Échéance
  await insertVWA(verse_id, "ajl", 9, "terme (échéance fixée)", {
    concept_chosen: "Terme/Échéance",
    concepts: {
      "Terme/Échéance": {
        status: "retenu",
        senses: ["terme", "échéance", "délai fixé"],
        proof_ctx: "Ajalin (pos=9) : génitif indéfini. Ilā ajalin musamman = jusqu'à un terme nommé/fixé. Ajal = terme, échéance, délai imparti. Sens Terme/Échéance retenu. Sens Causalité écarté (ajl = à cause de — mais ici c'est ilā ajal = jusqu'au terme).",
        axe1_verset: "Tadāyantum bi-daynin ilā ajalin musamman = vous contractez une dette jusqu'à un terme fixé. Le terme est l'élément clé du contrat licite.",
        axe2_voisins: "Ajal dans al-Baqarah : 2:231, 2:232, 2:234, 2:235, 2:282. Il désigne toujours le délai légal (répudiation, remariage, dette).",
        axe3_sourate: "L'ajal (terme) est un concept législatif fondamental dans al-Baqarah. Il garantit la clarté des engagements dans le temps.",
        axe4_coherence: "Ajal dans le Coran désigne le terme de la vie humaine ou le délai légal. Ici ilā ajalin = jusqu'au terme — sens temporel pur.",
        axe5_frequence: "Ajal apparaît environ 55 fois dans le Coran. Son emploi ici pour le terme d'un prêt est un emploi législatif précis."
      },
      "Causalité": { status: "nul", senses: ["causalité", "à cause de"], proof_ctx: "Min ajli = à cause de. Mais ici ilā ajalin = jusqu'au terme. La préposition ilā indique la direction temporelle, pas la causalité." },
      "Sens isolé/Oui": { status: "nul", senses: ["oui"], proof_ctx: "Non applicable." }
    }
  });

  // smw pos=10 — Nom/Identification (musamman = nommé/fixé)
  await insertVWA(verse_id, "smw", 10, "fixé/désigné (terme nommé)", {
    concept_chosen: "Nom/Identification",
    concepts: {
      "Nom/Identification": {
        status: "retenu",
        senses: ["nom", "identification", "dénomination", "désigné"],
        proof_ctx: "Musamman (pos=10) : Form II participe passif de smw = nommé, désigné, fixé. Ajalin musamman = un terme désigné/fixé. La Form II samma = nommer, désigner. Sens Nom/Identification retenu car musamman = un terme auquel on a donné un nom (une date précise). Sens Ciel/Ce qui couvre écarté : musamman n'est pas le ciel. Sens Hauteur/Élévation écarté : non pertinent.",
        axe1_verset: "Ilā ajalin musamman = jusqu'à un terme désigné. Musamman = dont la date a été fixée par les parties. L'identification précise du terme est l'exigence légale.",
        axe2_voisins: "Musamman apparaît en 6:2 (ajalin musamman = terme fixé pour la mort). En 2:282, il désigne la date de remboursement fixée contractuellement.",
        axe3_sourate: "La précision lexicale de ajalin musamman (terme nommé/fixé) est caractéristique du style législatif d'al-Baqarah.",
        axe4_coherence: "La Form II samma = désigner, nommer précisément. Musamman = ce qui a été nommé = désigné. C'est la désignation précise qui donne force légale au terme.",
        axe5_frequence: "Musamman comme participe passif de smw est fréquent dans les versets législatifs pour exprimer la précision."
      },
      "Hauteur/Élévation": { status: "nul", senses: ["hauteur", "élévation"], proof_ctx: "Le sens d'élévation (samā = ciel) ne s'applique pas à musamman = désigné." },
      "Ciel/Ce qui couvre": { status: "nul", senses: ["ciel"], proof_ctx: "Non applicable ici." }
    }
  });

  // ktb pos=12 — Écriture/Inscription (uktubūhu = écrivez-la)
  await insertVWA(verse_id, "ktb", 12, "écrivez (l'obligation d'écrire)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["écrire", "inscrire", "rédiger", "scribe", "écrit"],
        proof_ctx: "Uktubūhu (pos=12) : Form I impératif 2MP de ktb avec pronom objet = écrivez-la (la dette). C'est l'injonction principale du verset. Sens Écriture/Inscription retenu. Sens Assemblage/Couture écarté : étymologie non pertinente ici. Sens Obligation/Décret écarté : l'impératif ici est l'écriture physique, non une prescription divine.",
        axe1_verset: "Fa-ktubūhu = écrivez-la (la dette). C'est l'injonction centrale de 2:282 : la dette doit être écrite. L'écriture sécurise le contrat.",
        axe2_voisins: "La racine ktb apparaît 6 fois dans ce seul verset (pos=12,14,16,21,23,28). Cette concentration exceptionnelle souligne l'importance de l'écriture dans la régulation économique.",
        axe3_sourate: "Al-Baqarah 2:282 est la réglementation coranique de l'écrit légal. L'écriture (kitāba) est un devoir civil.",
        axe4_coherence: "La racine ktb dans le Coran désigne l'écriture dans de nombreux contextes : le Livre divin, les scribes, les obligations. Ici l'écriture est un outil de justice sociale.",
        axe5_frequence: "La racine ktb apparaît environ 316 fois dans le Coran. Sa concentration en 2:282 est unique et souligne l'importance législative de l'écrit."
      },
      "Obligation/Décret": { status: "probable", senses: ["obligation", "décret"], proof_ctx: "Kutiba ʿalaykum = il vous a été prescrit (Form I passif) dans les versets d'obligation (2:183, 2:187). Mais ici uktubūhu est un impératif actif aux croyants — écrire physiquement la dette. Distinction : Obligation/Décret = prescription divine (passif), Écriture/Inscription = action humaine d'écrire (actif). Ici l'écriture est une action humaine.", axe1_verset: "Uktubūhu est un impératif 2MP = vous devez écrire. C'est une action concrète, pas une prescription divine.", axe2_voisins: "En 2:183 kutiba ʿalaykum al-siyām = le jeûne vous a été prescrit (passif divin). Ici uktubūhu est actif humain.", axe3_sourate: "Les deux emplois coexistent dans al-Baqarah — le contexte détermine la nuance.", axe4_coherence: "L'actif uktubūhu = écrivez-vous (vous les humains) — c'est l'écriture contractuelle.", axe5_frequence: "L'impératif actif désigne toujours l'action humaine, pas la prescription divine." },
      "Livre/Écrit": { status: "nul", senses: ["livre", "écrit"], proof_ctx: "Uktubūhu est un verbe d'action, pas un substantif désignant un livre." },
      "Assemblage/Couture": { status: "nul", senses: ["assembler", "coudre"], proof_ctx: "Étymologie ancienne non pertinente dans ce contexte." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // ktb pos=14 — Écriture/Inscription (yaktub = qu'il écrive)
  await insertVWA(verse_id, "ktb", 14, "qu'il écrive (scribe)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["écrire", "inscrire", "rédiger"],
        proof_ctx: "Yaktub (pos=14) : Form I subjonctif 3MS de ktb = qu'il écrive. Wa-l-yaktub baynakum kātibun bi-l-ʿadli = et qu'un scribe écrive entre vous avec équité. Le subjonctif après lam = obligation. Même sens qu'en pos=12.",
        axe1_verset: "Wa-l-yaktub baynakum kātibun = et qu'écrive entre vous un scribe. Le scribe est un tiers neutre qui garantit l'équité de l'écrit.",
        axe2_voisins: "La présence d'un scribe tiers (baynakum = entre vous) est une garantie supplémentaire d'équité. Le scribe est un professionnel de l'écrit.",
        axe3_sourate: "L'écriture par un scribe équitable est la mesure centrale de 2:282. Elle institutionnalise la neutralité dans les contrats.",
        axe4_coherence: "Yaktub baynakum = écrit entre vous deux — le scribe est arbitre neutre. C'est le fondement du notariat dans la loi islamique.",
        axe5_frequence: "La répétition de ktb (6 fois) dans ce verset est un procédé rhétorique d'insistance législative."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Yaktub ici = action d'écrire par le scribe, pas prescription divine." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Verbe, pas substantif." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // byn pos=15 — Séparation/Distance (baynakum = entre vous)
  await insertVWA(verse_id, "byn", 15, "entre vous (réciprocité)", {
    concept_chosen: "Séparation/Distance",
    concepts: {
      "Séparation/Distance": {
        status: "retenu",
        senses: ["entre", "séparation", "distance", "espace"],
        proof_ctx: "Baynakum (pos=15) : bayna + pronom 2MP = entre vous. Wa-l-yaktub baynakum = et qu'il écrive entre vous. Bayna désigne l'espace intermédiaire, la relation entre deux parties. Sens Séparation/Distance retenu dans son sens spatial-relationnel. Sens Clarté/Évidence écarté : baynakum n'est pas l'évidence ici.",
        axe1_verset: "Baynakum = entre vous (deux parties du contrat). Le scribe est le médiateur entre les parties. L'écrit est la garantie de la relation.",
        axe2_voisins: "Bayna dans al-Baqarah désigne la relation entre parties (2:228, 2:232, 2:233). En 2:282 baynakum = entre créancier et débiteur.",
        axe3_sourate: "Le contrat écrit médiatise la relation entre les parties et prévient les conflits. L'interposition du scribe est une mesure de justice.",
        axe4_coherence: "La racine byn dans le sens de bayna (entre) est une préposition nominalisée très fréquente dans le Coran. Elle exprime la relation médiane.",
        axe5_frequence: "Bayna apparaît environ 175 fois dans le Coran comme préposition d'interposition."
      },
      "Clarté/Évidence": { status: "nul", senses: ["clarté", "évidence"], proof_ctx: "Le sens de clarté (bayyana = rendre clair) ne s'applique pas à baynakum = entre vous." }
    }
  });

  // ktb pos=16 — Écriture/Inscription (kātibun = un scribe)
  await insertVWA(verse_id, "ktb", 16, "un scribe (professionnel de l'écrit)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["écrire", "scribe", "écrivain", "rédiger"],
        proof_ctx: "Kātibun (pos=16) : Form I participe actif de ktb = celui qui écrit = scribe. Kātibun bi-l-ʿadli = un scribe avec équité. Le kātib est le professionnel de l'écriture qui rédige les contrats.",
        axe1_verset: "Kātibun bi-l-ʿadli = un scribe équitable. L'équité (ʿadl) qualifie le scribe. La justice passe par la compétence et l'intégrité du rédacteur.",
        axe2_voisins: "Le scribe (kātib) comme personnage institutionnel apparaît en 2:282 et dans les hadith sur les secrétaires du Prophète.",
        axe3_sourate: "Le scribe est la figure centrale de 2:282 — il apparaît 3 fois (pos=16, 21) dans ce verset.",
        axe4_coherence: "La Form I participe actif kātib = celui qui fait l'action d'écrire = scribe/rédacteur.",
        axe5_frequence: "Kātib comme nom de métier exprime la professionnalisation de l'écriture dans la société coranique."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Kātibun est un nom d'agent, pas une prescription." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Kātib est la personne, pas l'objet." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // edl pos=18 — Justice/Équité
  await insertVWA(verse_id, "edl", 18, "équité (justice dans l'écrit)", {
    concept_chosen: "Justice/Équité",
    concepts: {
      "Justice/Équité": {
        status: "retenu",
        senses: ["justice", "équité", "impartialité"],
        proof_ctx: "Al-ʿadli (pos=18) : génitif du nom al-ʿadl = l'équité. Bi-l-ʿadli = avec équité. Le scribe doit écrire avec justice. Sens Justice/Équité retenu. Sens Sens isolé/Dévier écarté : al-ʿadl ici est la vertu, pas l'écart.",
        axe1_verset: "Kātibun bi-l-ʿadli = un scribe avec équité. L'équité est la qualité du scribe, garantissant que l'écrit ne favorise ni le créancier ni le débiteur.",
        axe2_voisins: "Al-ʿadl dans al-Baqarah (2:282) est lié à la médiation neutre. En 4:58 : wa-idhā ḥakamtum bayna n-nāsi an taḥkumū bi-l-ʿadli = et quand vous jugez entre les gens, jugez avec équité.",
        axe3_sourate: "La justice (ʿadl) est un thème central d'al-Baqarah dans les contextes de droit civil et familial.",
        axe4_coherence: "La racine edl dans le Coran désigne l'équité, le juste milieu, l'impartialité. En 2:282 bi-l-ʿadli qualifie l'action d'écrire — un écrit juste.",
        axe5_frequence: "La racine edl apparaît environ 28 fois dans le Coran. L'équité du scribe est un fondement du droit contractuel."
      },
      "Sens isolé/Dévier": { status: "nul", senses: ["dévier"], proof_ctx: "Le sens de dévier (ʿadala ʿan = s'éloigner de) ne s'applique pas à bi-l-ʿadli = avec équité." }
    }
  });

  // aby pos=20 — Refus/Rejet
  await insertVWA(verse_id, "aby", 20, "refuse (ne pas refuser d'écrire)", {
    concept_chosen: "Refus/Rejet",
    concepts: {
      "Refus/Rejet": {
        status: "retenu",
        senses: ["refuser", "rejeter", "s'abstenir"],
        proof_ctx: "Yaʾba (pos=20) : Form I subjonctif 3MS de aby = qu'il refuse. Wa-lā yaʾba kātibun = et qu'aucun scribe ne refuse. La négation lā + subjonctif = interdiction. Sens Refus/Rejet retenu. Sens Parenté/Paternité écarté : yaʾba est clairement le refus ici.",
        axe1_verset: "Wa-lā yaʾba kātibun an yaktuba = qu'aucun scribe ne refuse d'écrire. Le refus est interdit. L'écriture est un devoir professionnel et civil.",
        axe2_voisins: "La racine aby dans le Coran désigne le refus obstiné. En 2:34 : abā wa-stakbara = il refusa et s'enorgueillit (Iblis). Le refus d'écrire un contrat est une forme d'obstruction à la justice.",
        axe3_sourate: "L'interdiction du refus (lā yaʾba) est une obligation civique imposée aux scribes. Dieu a enseigné l'écriture — la refuser c'est nier ce don.",
        axe4_coherence: "La racine aby dans le Coran désigne toujours le refus obstiné. Ici lā yaʾba impose positivement le service.",
        axe5_frequence: "Yaʾba et ses formes apparaissent 8 fois dans le Coran. Lā yaʾba impose un devoir de service public."
      },
      "Parenté/Paternité": { status: "nul", senses: ["paternité", "père"], proof_ctx: "Le sens de parenté (ab = père) ne s'applique pas à yaʾba = qu'il refuse." }
    }
  });

  // ktb pos=21 — Écriture/Inscription (kātibun = scribe, répétition)
  await insertVWA(verse_id, "ktb", 21, "scribe (répétition de l'obligation)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["scribe", "écrire"],
        proof_ctx: "Kātibun (pos=21) : même mot qu'en pos=16 = le scribe. Répétition de kātibun dans lā yaʾba kātibun an yaktuba = qu'aucun scribe ne refuse d'écrire. La répétition souligne la généralité de l'obligation (tout scribe).",
        axe1_verset: "Wa-lā yaʾba kātibun an yaktuba = aucun scribe ne doit refuser. L'obligation vaut pour tout scribe (kātibun est indéfini).",
        axe2_voisins: "Kātibun répété en pos=16 et pos=21 dans le même verset — insistance sur le rôle du scribe.",
        axe3_sourate: "Le scribe est un pilier de la justice contractuelle dans al-Baqarah.",
        axe4_coherence: "La répétition rhétorique est caractéristique du style législatif coranique.",
        axe5_frequence: "La double occurrence de kātibun renforce l'obligation universelle d'écrire."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Kātibun est le professionnel, pas la prescription." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Kātib est la personne." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // ktb pos=23 — Écriture/Inscription (yaktuba = d'écrire)
  await insertVWA(verse_id, "ktb", 23, "d'écrire (le devoir de rédiger)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["écrire", "rédiger"],
        proof_ctx: "Yaktuba (pos=23) : Form I subjonctif 3MS après an = d'écrire. An yaktuba = d'écrire. Même sens qu'en pos=14.",
        axe1_verset: "Lā yaʾba kātibun an yaktuba = qu'aucun scribe ne refuse d'écrire. L'objet du refus interdit est l'acte d'écrire.",
        axe2_voisins: "Troisième occurrence de ktb dans ce groupe (pos=14, 16, 21, 23).",
        axe3_sourate: "L'insistance sur l'acte d'écrire (yaktub) est la mesure centrale de 2:282.",
        axe4_coherence: "An yaktuba = de rédiger — construction infinitivale standard en arabe.",
        axe5_frequence: "Sixième occurrence de ktb en 2:282 — concentration unique dans le Coran."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Yaktuba est l'acte humain d'écrire, pas la prescription divine." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Verbe, pas substantif." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // kmw pos=24 — Dissimulation/Occultation (kamā = comme/selon ce que)
  await insertVWA(verse_id, "kmw", 24, "selon ce que (comparaison divine)", {
    concept_chosen: "Dissimulation/Occultation",
    concepts: {
      "Dissimulation/Occultation": {
        status: "nul",
        senses: ["cacher", "dissimuler"],
        proof_ctx: "Kmw avec sens de dissimulation/occultation ne s'applique pas ici. Kamā est une particule de comparaison."
      },
      "Particule/Comparaison": {
        status: "retenu",
        senses: ["comme", "selon", "de même que", "conformément à"],
        proof_ctx: "Kamā (pos=24) : particule de comparaison = comme, de même que. Kamā ʿallamahu llāhu = comme/selon ce que Dieu lui a enseigné. Kamā est une forme de kaf al-tashbīh + mā relative. Même si le word_analyses pour kmw liste des sens de dissimulation, ici kamā est clairement une comparaison. Le sens retenu est la comparaison/conformité.",
        axe1_verset: "An yaktuba kamā ʿallamahu llāhu = qu'il écrive conformément à ce que Dieu lui a enseigné. L'écriture doit être conforme au savoir que Dieu a transmis.",
        axe2_voisins: "Kamā dans le Coran est une particule de comparaison très fréquente.",
        axe3_sourate: "Kamā ʿallamahu llāh lie l'écriture contractuelle au don divin du savoir.",
        axe4_coherence: "Kamā = kaf + mā — comparaison nominale. Son emploi ici est strictement grammatical.",
        axe5_frequence: "Kamā apparaît souvent dans le Coran comme marqueur de conformité."
      }
    }
  });

  // elm pos=25 — Savoir/Connaissance (ʿallamahu = lui a enseigné)
  await insertVWA(verse_id, "elm", 25, "lui a enseigné (don du savoir divin)", {
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "connaissance", "enseigner", "apprendre"],
        proof_ctx: "ʿAllamahu (pos=25) : Form II accompli 3MS de elm avec pronom objet = lui a enseigné. Kamā ʿallamahu llāhu = comme Dieu lui a enseigné. La Form II ʿallama = enseigner (transitif intensif). Sens Savoir/Connaissance retenu. Sens Marque/Signe écarté : ʿallama ici est l'enseignement, pas la marque.",
        axe1_verset: "An yaktuba kamā ʿallamahu llāhu = qu'il écrive selon ce que Dieu lui a enseigné. L'écriture est un don de Dieu (cf. 96:4 alladhī ʿallama bi-l-qalam = qui a enseigné par le calame). Le scribe doit utiliser ce don conformément à son origine divine.",
        axe2_voisins: "La référence à l'enseignement divin (ʿallamahu llāhu) est significative : l'écriture vient de Dieu (96:4-5). Le scribe est dépositaire d'un savoir divin qu'il ne peut refuser de mettre au service de la justice.",
        axe3_sourate: "Al-Baqarah 2:31 : wa-ʿallama ādama l-asmāʾa kullahā = et Il a enseigné à Adam tous les noms. L'enseignement divin est le fondement du savoir humain.",
        axe4_coherence: "La Form II ʿallama est causative de ʿalima (savoir). Dieu enseigne = transmet le savoir. La racine elm dans le sens d'enseignement est fréquente dans le Coran.",
        axe5_frequence: "ʿAllamahu llāhu = Dieu lui a enseigné — formule qui lie tout savoir humain à l'origine divine."
      },
      "Marque/Signe": { status: "nul", senses: ["marque", "signe"], proof_ctx: "ʿAllama (Form II) = enseigner, non marquer. La marque est ʿalāma (Form I)." },
      "Monde/Création": { status: "nul", senses: ["monde"], proof_ctx: "Non applicable ici." },
      "Sens isolé/Enseigner": { status: "nul", senses: ["enseigner"], proof_ctx: "Inclus dans Savoir/Connaissance." },
      "Sens isolé/Homonyme": { status: "nul", senses: ["homonyme"], proof_ctx: "Non applicable." },
      "Lieu/Géographie": { status: "nul", senses: ["lieu"], proof_ctx: "Non applicable." }
    }
  });

  // ktb pos=28 — Écriture/Inscription (yaktub = qu'il écrive)
  await insertVWA(verse_id, "ktb", 28, "qu'il écrive (reprise après l'enseignement divin)", {
    concept_chosen: "Écriture/Inscription",
    concepts: {
      "Écriture/Inscription": {
        status: "retenu",
        senses: ["écrire", "rédiger"],
        proof_ctx: "Yaktub (pos=28) : Form I subjonctif 3MS de ktb. Fal-yaktub = qu'il écrive donc. Reprise de l'injonction après la justification (kamā ʿallamahu llāhu). Même sens qu'en pos=14 et 23.",
        axe1_verset: "Fal-yaktub wa-l-yumlil alladhī ʿalayhi l-ḥaqq = qu'il écrive donc et que dicte celui sur qui pèse l'obligation.",
        axe2_voisins: "Sixième occurrence de ktb dans ce verset. La formule fal-yaktub (qu'il écrive donc) reprend l'injonction après sa justification théologique.",
        axe3_sourate: "L'écriture est à la fois un acte humain et un devoir divin.",
        axe4_coherence: "Fal = fa (conséquence) + lam (impératif jussif). Fal-yaktub = alors qu'il écrive.",
        axe5_frequence: "La répétition de yaktub (pos=14, 23, 28) est un procédé d'insistance législative."
      },
      "Obligation/Décret": { status: "nul", senses: ["obligation"], proof_ctx: "Yaktub ici = acte d'écrire, pas prescription divine." },
      "Assemblage/Couture": { status: "nul", senses: ["coudre"], proof_ctx: "Non applicable." },
      "Livre/Écrit": { status: "nul", senses: ["livre"], proof_ctx: "Verbe, pas substantif." },
      "Souffle/Vent": { status: "nul", senses: ["vent"], proof_ctx: "Non applicable." },
      "Sens isolé/Constipation": { status: "nul", senses: ["constipation"], proof_ctx: "Non applicable." },
      "Sens isolé/Gonflé": { status: "nul", senses: ["gonflé"], proof_ctx: "Non applicable." },
      "Sens isolé/Flèche": { status: "nul", senses: ["flèche"], proof_ctx: "Non applicable." }
    }
  });

  // dhhy pos=30 — pronom relatif singulier (alladhī = celui qui)
  await insertVWA(verse_id, "dhhy", 30, "celui qui (pronom relatif singulier)", {
    concept_chosen: "Non trouvé",
    concepts: {
      "Non trouvé": {
        status: "retenu",
        senses: ["non trouvé"],
        proof_ctx: "Alladhī (pos=30) est le pronom relatif singulier masculin (celui qui). Wa-l-yumlil alladhī ʿalayhi l-ḥaqq = et que dicte celui sur qui pèse l'obligation. Mot grammatical sans sens lexical indépendant.",
        axe1_verset: "Alladhī ʿalayhi l-ḥaqq = celui sur qui pèse l'obligation = le débiteur. Il doit dicter la dette pour que le scribe l'écrive.",
        axe2_voisins: "Alladhī comme pronom relatif singulier introduit une définition : le débiteur est identifié par sa position contractuelle.",
        axe3_sourate: "Al-Baqarah utilise alladhī pour désigner précisément les personnes impliquées dans les règles légales.",
        axe4_coherence: "Pronom relatif grammatical invariable.",
        axe5_frequence: "Alladhī apparaît environ 1339 fois dans le Coran."
      }
    }
  });

  // hqq pos=32 — Vérité/Réalité (al-ḥaqq = l'obligation/la vérité)
  await insertVWA(verse_id, "hqq", 32, "l'obligation (la dette due)", {
    concept_chosen: "Obligation/Nécessité",
    concepts: {
      "Obligation/Nécessité": {
        status: "retenu",
        senses: ["obligation", "nécessité", "droit", "dû"],
        proof_ctx: "Al-ḥaqq (pos=32) : le droit, l'obligation. Alladhī ʿalayhi l-ḥaqq = celui sur qui pèse l'obligation. ʿAlayhi l-ḥaqq = sur lui pèse le droit/l'obligation = le débiteur. Sens Obligation/Nécessité retenu dans ce contexte contractuel. Sens Vérité/Réalité est aussi valide mais moins précis pour exprimer l'obligation contractuelle.",
        axe1_verset: "Alladhī ʿalayhi l-ḥaqq = celui sur qui pèse l'obligation. Al-ḥaqq ici = la dette due = ce qui est juridiquement dû. Le débiteur doit dicter.",
        axe2_voisins: "Al-ḥaqq dans le contexte contractuel signifie ce qui est dû, l'obligation. En 2:229 : lā yaḥillu lakum an taʾkhudhū mimmā ātaytumūhunna shayʾan illā an yakhāfā allā yuqīmā ḥudūda llāhi.",
        axe3_sourate: "Al-ḥaqq dans al-Baqarah a deux sens principaux : la vérité divine et le droit/obligation légale. Ici le contexte contractuel indique l'obligation légale.",
        axe4_coherence: "ʿAlayhi l-ḥaqq est une formule juridique standard : l'obligation est sur lui. Le débiteur est identifié par son obligation.",
        axe5_frequence: "Al-ḥaqq dans le sens d'obligation légale est fréquent dans les versets législatifs du Coran."
      },
      "Vérité/Réalité": {
        status: "probable",
        senses: ["vérité", "réalité", "le vrai"],
        proof_ctx: "Al-ḥaqq peut signifier la vérité (la vérité de la dette). Mais ici ʿalayhi l-ḥaqq est une tournure juridique standard (l'obligation est sur lui). Distinction : Vérité/Réalité exprime l'aspect épistémique (c'est vrai), Obligation/Nécessité exprime l'aspect déontique (c'est dû). Ici le contexte contractuel favorise l'obligation.",
        axe1_verset: "ʿAlayhi l-ḥaqq = sur lui pèse le droit. La formule ʿalay + ḥaqq est juridique.",
        axe2_voisins: "En 2:283 : fa-in amina baʿḍukum baʿḍan — le contexte de confiance/obligation est cohérent.",
        axe3_sourate: "Al-ḥaqq dans les versets législatifs d'al-Baqarah penche vers l'obligation légale.",
        axe4_coherence: "La tournure ʿalayhi + ḥaqq est juridique, pas épistémique.",
        axe5_frequence: "Les deux sens coexistent dans le Coran. Le contexte tranche en faveur de l'obligation."
      },
      "Sens isolé/Se": { status: "nul", senses: ["se"], proof_ctx: "Non applicable." },
      "Sens isolé/Vérifier": { status: "nul", senses: ["vérifier"], proof_ctx: "Non applicable." }
    }
  });

  // llh pos=34 — Divinité
  await insertVWA(verse_id, "llh", 34, "Dieu (l'enseignant du savoir)", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": {
        status: "retenu",
        senses: ["Dieu", "divinité"],
        proof_ctx: "Allāha (pos=34) : accusatif du nom propre allāh. Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur. Même usage qu'en V281 pos=7.",
        axe1_verset: "Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur. La conscience divine garantit l'honnêteté du débiteur.",
        axe2_voisins: "Allāha dans les injonctions d'ittaqū allāha est récurrent dans les versets législatifs.",
        axe3_sourate: "La crainte de Dieu (taqwā) est le moteur de l'honnêteté contractuelle.",
        axe4_coherence: "Allāh = le nom propre divin, invariable.",
        axe5_frequence: "Allāh apparaît environ 2699 fois dans le Coran."
      },
      "Adoration/Culte": { status: "nul", senses: ["adorer"], proof_ctx: "Non applicable." },
      "Confusion/Perplexité": { status: "nul", senses: ["confusion"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["asservir"], proof_ctx: "Non applicable." }
    }
  });

  // rbb pos=35 — Seigneurie/Autorité bienveillante
  await insertVWA(verse_id, "rbb", 35, "son Seigneur (Dieu éducateur)", {
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["Seigneur", "Maître bienveillant", "Éducateur"],
        proof_ctx: "Rabbahu (pos=35) : rabb + pronom 3MS = son Seigneur. Wa-l-yattaqi llāha rabbahu = qu'il craigne Dieu son Seigneur. Rabb ici est un titre divin. Sens Seigneurie/Autorité bienveillante retenu. Sens Commerce/Usure et Croissance/Augmentation écartés : non applicables au nom divin rabb.",
        axe1_verset: "Allāha rabbahu = Dieu son Seigneur. La double désignation allāh + rabb souligne la relation personnelle entre le débiteur et Dieu.",
        axe2_voisins: "Allāha rabbahu est une formule fréquente dans les injonctions de taqwā.",
        axe3_sourate: "Rabb dans al-Baqarah désigne Dieu en tant que Seigneur-Éducateur de la communauté.",
        axe4_coherence: "Rabb = celui qui élève, éduque, soutient. La taqwā envers rabb = la vigilance envers celui qui nous a élevés.",
        axe5_frequence: "Rabb apparaît environ 975 fois dans le Coran — l'un des titres divins les plus fréquents."
      },
      "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Non applicable au titre divin rabb." },
      "Éducation/Accompagnement": { status: "nul", senses: ["éduquer"], proof_ctx: "Inclus dans Seigneurie/Autorité bienveillante." },
      "Croissance/Augmentation": { status: "nul", senses: ["croissance"], proof_ctx: "Non applicable au titre divin." }
    }
  });

  // bxs pos=37 — Injustice/Lésion
  await insertVWA(verse_id, "bxs", 37, "retranche/lèse (interdiction de réduire)", {
    concept_chosen: "Injustice/Lésion",
    concepts: {
      "Injustice/Lésion": {
        status: "retenu",
        senses: ["diminuer injustement", "léser", "retrancher frauduleusement"],
        proof_ctx: "Yabkhas (pos=37) : Form I jussif 3MS de bxs = qu'il ne retranche pas. Wa-lā yabkhas minhu shayʾan = et qu'il ne retranche rien de sa dette. Bakhs = diminuer injustement, léser, retrancher. Sens unique : Injustice/Lésion retenu.",
        axe1_verset: "Wa-lā yabkhas minhu shayʾan = et qu'il ne retranche rien de la dette. Le débiteur ne doit pas mentir sur le montant de ce qu'il doit.",
        axe2_voisins: "La racine bxs dans le Coran apparaît en 7:85, 11:85, 26:183 : wa-lā tabkhasū n-nāsa ashyāʾahum = ne lésez pas les gens dans leurs biens. La lésion économique est un thème répété.",
        axe3_sourate: "L'interdiction de léser (lā yabkhas) est le pendant négatif de l'obligation d'écrire. L'honnêteté est double : écrire et ne pas diminuer.",
        axe4_coherence: "Bakhs = retrancher, léser. La racine est rare dans le Coran (5 occurrences). Son sens est toujours la lésion économique frauduleuse.",
        axe5_frequence: "Yabkhas en 2:282 est l'une des 5 occurrences de bxs dans le Coran — toutes dans des contextes d'honnêteté commerciale."
      }
    }
  });

  // šya pos=40 — Chose/Existence
  await insertVWA(verse_id, "šya", 40, "quoi que ce soit (totalité négative)", {
    concept_chosen: "Chose/Existence",
    concepts: {
      "Chose/Existence": {
        status: "retenu",
        senses: ["chose", "quoi que ce soit", "quelque chose"],
        proof_ctx: "Shayʾan (pos=40) : accusatif indéfini de shayʾ = quelque chose. Lā yabkhas minhu shayʾan = qu'il ne retranche rien. Shayʾan après la négation = rien du tout. Sens Chose/Existence retenu. Sens Volonté écarté : shayʾ ici n'est pas la volonté mais l'objet.",
        axe1_verset: "Wa-lā yabkhas minhu shayʾan = et qu'il ne retranche rien (pas même la plus petite chose). L'accent est sur la totalité : rien ne doit manquer.",
        axe2_voisins: "Shayʾan après lā désignant la négation absolue est récurrent dans le Coran : lā taẓlimūna wa-lā tuẓlamūna (2:279).",
        axe3_sourate: "La formule lā + verbe + shayʾan = interdiction absolue de diminuer. L'honnêteté est totale.",
        axe4_coherence: "La racine šya dans le sens de chose/existence est très fréquente (environ 520 fois).",
        axe5_frequence: "Shayʾan ici exprime la totalité de l'honnêteté requise."
      },
      "Volonté": { status: "nul", senses: ["volonté"], proof_ctx: "Shayʾan ici est l'objet de la lésion (ce qui est retranché), pas la volonté." }
    }
  });

  // word_daily pour les racines sans daily
  await insertWordDaily(1047, "terme", [
    { fr: "Le contrat a un terme fixé d'un an.", ar: "لِلْعَقْدِ أَجَلٌ مُحَدَّدٌ بِسَنَةٍ.", phon: "lil-ʿaqdi ajalun muḥaddadun bi-sana" },
    { fr: "Il faut rembourser avant l'échéance.", ar: "يَجِبُ السَّدَادُ قَبْلَ حُلُولِ الْأَجَلِ.", phon: "yajibu as-sadādu qabla ḥulūl al-ajal" },
    { fr: "Le délai expire demain.", ar: "يَنْتَهِي الْأَجَلُ غَدًا.", phon: "yantahī al-ajalu ghadan" }
  ]);

  await insertWordDaily(535, "équité", [
    { fr: "Il a tranché le litige avec équité.", ar: "فَصَلَ النِّزَاعَ بِالْعَدْلِ.", phon: "faṣala an-nizāʿa bi-l-ʿadl" },
    { fr: "L'équité exige de ne léser personne.", ar: "الْعَدْلُ يَقْتَضِي أَلَّا يُظْلَمَ أَحَدٌ.", phon: "al-ʿadlu yaqtaḍī allā yuẓlama aḥad" },
    { fr: "Jugez entre les gens avec justice.", ar: "اِحْكُمُوا بَيْنَ النَّاسِ بِالْعَدْلِ.", phon: "uḥkumū bayna n-nāsi bi-l-ʿadl" }
  ]);

  await insertWordDaily(450, "refus", [
    { fr: "Il a refusé de signer le document.", ar: "أَبَى أَنْ يُوَقِّعَ الْوَثِيقَةَ.", phon: "abā an yuwaqiqqa al-wathīqa" },
    { fr: "On ne peut pas refuser un service légitime.", ar: "لَا يَجُوزُ الْإِبَاءُ عَنْ خِدْمَةٍ مَشْرُوعَةٍ.", phon: "lā yajūzu al-ibāʾu ʿan khidmatin mashrūʿa" },
    { fr: "Il a obstinément refusé de coopérer.", ar: "أَبَى بِعِنَادٍ أَنْ يَتَعَاوَنَ.", phon: "abā bi-ʿinādin an yataʿāwan" }
  ]);

  await insertWordDaily(1253, "lésion", [
    { fr: "Ne lèse personne dans ses droits.", ar: "لَا تَبْخَسْ أَحَدًا حَقَّهُ.", phon: "lā tabkhas aḥadan ḥaqqahu" },
    { fr: "Il a réduit frauduleusement la livraison.", ar: "بَخَسَ الْكَمِّيَّةَ الْمُسَلَّمَةَ.", phon: "bakhasa al-kammiyyata al-musallama" },
    { fr: "La lésion dans les échanges est une injustice.", ar: "الْبَخْسُ فِي الْمُعَامَلَاتِ ظُلْمٌ.", phon: "al-bakhsu fī al-muʿāmalāt ẓulmun" }
  ]);

  await insertWordDaily(369, "chose", [
    { fr: "Il ne faut rien retrancher, pas même la plus petite chose.", ar: "لَا يَنْبَغِي حَذْفُ شَيْءٍ وَلَوْ صَغِيرًا.", phon: "lā yanbaghī ḥadhfu shayʾin wa-law ṣaghīra" },
    { fr: "Dis-moi quelque chose d'utile.", ar: "قُلْ لِي شَيْئًا مُفِيدًا.", phon: "qul lī shayʾan mufīdan" },
    { fr: "Il n'a rien voulu changer.", ar: "لَمْ يُرِدْ تَغْيِيرَ شَيْءٍ.", phon: "lam yurid taghyīra shayʾin" }
  ]);

  console.log('\nVERSET 2:282 — TERMINÉ');
  console.log('  dhhy (pos=2) → Non trouvé (pronom relatif) → "ceux qui"');
  console.log('  amn (pos=3) → Foi/Adhésion → "avez cru"');
  console.log('  dyn (pos=5) → Dette/Obligation → "contractez une dette"');
  console.log('  dyn (pos=7) → Dette/Obligation → "dette"');
  console.log('  ajl (pos=9) → Terme/Échéance → "terme"');
  console.log('  smw (pos=10) → Nom/Identification → "fixé/désigné"');
  console.log('  ktb (pos=12,14,16,21,23,28) → Écriture/Inscription → "écrivez/scribe"');
  console.log('  byn (pos=15) → Séparation/Distance → "entre"');
  console.log('  edl (pos=18) → Justice/Équité → "équité"');
  console.log('  aby (pos=20) → Refus/Rejet → "refuse"');
  console.log('  kmw (pos=24) → Particule/Comparaison → "selon ce que"');
  console.log('  elm (pos=25) → Savoir/Connaissance → "lui a enseigné"');
  console.log('  dhhy (pos=30) → Non trouvé (pronom relatif) → "celui qui"');
  console.log('  hqq (pos=32) → Obligation/Nécessité → "l\'obligation"');
  console.log('  llh (pos=34) → Divinité → "Dieu"');
  console.log('  rbb (pos=35) → Seigneurie/Autorité bienveillante → "son Seigneur"');
  console.log('  bxs (pos=37) → Injustice/Lésion → "retranche"');
  console.log('  šya (pos=40) → Chose/Existence → "quoi que ce soit"');
}

processVerse282().catch(console.error);
