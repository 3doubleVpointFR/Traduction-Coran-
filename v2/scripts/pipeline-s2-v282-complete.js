const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function insertVWA(verse_id, word_key, position, sense_chosen, analysis_axes) {
  // Check if already exists
  const { data: existing } = await supabase.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('position', position);
  if (existing && existing.length > 0) { console.log(`  VWA SKIP (exists): ${word_key} pos=${position}`); return; }
  const { error } = await supabase.from('verse_word_analyses').insert({ verse_id, word_key, position, sense_chosen, analysis_axes });
  if (error) console.error(`  VWA error [${word_key} pos=${position}]:`, error.message);
  else console.log(`  VWA OK: ${word_key} pos=${position}`);
}

async function main() {
  console.log('\n=== COMPLETING 2:282 (positions 35-128) ===');
  const verse_id = 289;
  const analysis_id = 648;

  // ============================================================
  // 1. INSERT VWA for new content words (pos 35+)
  // ============================================================

  // pos=36 kwn (kāna) — already have kwn but at different position context
  await insertVWA(verse_id, "kwn", 36, "etait (existence conditionnelle)", {
    concept_chosen: "Etre/Existence",
    concepts: { "Etre/Existence": { status: "retenu", senses: ["etre", "exister", "se trouver"], proof_ctx: "Kāna (pos=36) : Form I accompli 3MS. Fa-in kāna lladhī ʿalayhi l-ḥaqqu safīhan = et si celui sur qui pese l'obligation etait faible d'esprit. Le verbe d'existence introduit la condition." } }
  });

  // pos=40 sfh (safīhan) — faible d'esprit
  await insertVWA(verse_id, "sfh", 40, "faible d'esprit (incapacite mentale)", {
    concept_chosen: "Faiblesse d'esprit/Legerete",
    concepts: { "Faiblesse d'esprit/Legerete": { status: "retenu", senses: ["faible d'esprit", "leger", "insense", "incapable de gerer"], proof_ctx: "Safīhan (pos=40) : adjectif de s-f-h. Le Lane's donne : lightwitted, weak in intellect, ignorant. Ici l'incapacite juridique a dicter soi-meme son obligation." } }
  });

  // pos=42 Def (ḍaʿīfan) — faible
  await insertVWA(verse_id, "Def", 42, "faible (incapacite physique)", {
    concept_chosen: "Faiblesse/Incapacite",
    concepts: { "Faiblesse/Incapacite": { status: "retenu", senses: ["faible", "infirme", "incapable"], proof_ctx: "Daʿīfan (pos=42) : adjectif de d-ʿ-f. Faiblesse physique ou d'age qui empeche de dicter." } }
  });

  // pos=45 Twe (yastaṭīʿu) — etre capable
  await insertVWA(verse_id, "Twe", 45, "est capable (capacite)", {
    concept_chosen: "Capacite/Obeissance",
    concepts: { "Capacite/Obeissance": { status: "retenu", senses: ["pouvoir", "etre capable", "etre en mesure"], proof_ctx: "Yastaṭīʿu (pos=45) : Form X de ṭ-w-ʿ. Lā yastaṭīʿu an yumilla = incapable de dicter lui-meme." } }
  });

  // pos=47 mll (yumilla) — dicter
  await insertVWA(verse_id, "mll", 47, "dicter (enoncer pour l'ecriture)", {
    concept_chosen: "Dictee/Enonciation",
    concepts: { "Dictee/Enonciation": { status: "retenu", senses: ["dicter", "enoncer"], proof_ctx: "Yumilla (pos=47) : Form IV de m-l-l. An yumilla huwa = qu'il dicte lui-meme. La dictee est l'acte d'enoncer pour que le scribe ecrive." } }
  });

  // pos=50 wly (waliyyuhu) — son tuteur
  await insertVWA(verse_id, "wly", 50, "son tuteur (responsable legal)", {
    concept_chosen: "Tutelle/Proximite",
    concepts: { "Tutelle/Proximite": { status: "retenu", senses: ["tuteur", "protecteur", "responsable", "proche"], proof_ctx: "Waliyyuhu (pos=50) : nom de w-l-y avec pronom suffixe. Le walī est le tuteur legal, celui qui a l'autorite de parler au nom de l'incapable." } }
  });

  // pos=52 shd (istashhidū) — faites temoigner
  await insertVWA(verse_id, "shd", 52, "faites temoigner (Form X = demander le temoignage)", {
    concept_chosen: "Temoignage/Attestation",
    concepts: { "Temoignage/Attestation": { status: "retenu", senses: ["temoigner", "attester", "prendre a temoin"], proof_ctx: "Istashhidū (pos=52) : Form X imperatif de sh-h-d. Wa-stashhidū shahīdayni = et faites temoigner deux temoins." } }
  });

  // pos=55 rjl (rijālikum) — vos hommes
  await insertVWA(verse_id, "rjl", 55, "vos hommes (hommes de votre communaute)", {
    concept_chosen: "Homme/Virilite",
    concepts: { "Homme/Virilite": { status: "retenu", senses: ["homme", "male adulte"], proof_ctx: "Rijālikum (pos=55) : pluriel de rajul (homme) avec pronom 2MP. Min rijālikum = parmi vos hommes." } }
  });

  // pos=61 mra (imraʾatāni) — deux femmes
  await insertVWA(verse_id, "mra", 61, "deux femmes", {
    concept_chosen: "Femme",
    concepts: { "Femme": { status: "retenu", senses: ["femme", "epouse"], proof_ctx: "Imraʾatāni (pos=61) : duel de imraʾa. Fa-rajulun wa-mraʾatāni = alors un homme et deux femmes." } }
  });

  // pos=63 rDw (tarḍawna) — vous agreez
  await insertVWA(verse_id, "rDw", 63, "vous agreez (approbation)", {
    concept_chosen: "Agrement/Satisfaction",
    concepts: { "Agrement/Satisfaction": { status: "retenu", senses: ["agreer", "approuver", "etre satisfait"], proof_ctx: "Tarḍawna (pos=63) : Form I inaccompli 2MP de r-ḍ-w. Mimman tarḍawna mina sh-shuhadāʾi = parmi ceux dont vous agreez le temoignage." } }
  });

  // pos=67 Dll (taḍilla) — s'egarer
  await insertVWA(verse_id, "Dll", 67, "s'egare (erreur de memoire)", {
    concept_chosen: "Egarement/Oubli",
    concepts: { "Egarement/Oubli": { status: "retenu", senses: ["s'egarer", "oublier", "se tromper"], proof_ctx: "Taḍilla (pos=67) : Form I subjonctif de ḍ-l-l. An taḍilla iḥdāhumā = si l'une d'elles s'egare/oublie." } }
  });

  // pos=69 dkr (fatudhakkira) — rappeler
  await insertVWA(verse_id, "dkr", 69, "rappelle (l'autre lui rappelle)", {
    concept_chosen: "Rappel/Memoire",
    concepts: { "Rappel/Memoire": { status: "retenu", senses: ["rappeler", "rememorer", "mentionner"], proof_ctx: "Fatudhakkira (pos=69) : Form II subjonctif de dh-k-r. Fa-tudhakkira iḥdāhumā l-ukhrā = l'autre lui rappelle." } }
  });

  // pos=77 dew (duʿū) — ils sont appeles
  await insertVWA(verse_id, "dew", 77, "sont appeles (convocation)", {
    concept_chosen: "Appel/Invocation",
    concepts: { "Appel/Invocation": { status: "retenu", senses: ["appeler", "convoquer", "inviter"], proof_ctx: "Duʿū (pos=77) : passif de d-ʿ-w. Idhā mā duʿū = quand ils sont appeles [a temoigner]." } }
  });

  // pos=79 sam (tasʾamū) — vous lasser
  await insertVWA(verse_id, "sam", 79, "vous lassez (ennui/fatigue)", {
    concept_chosen: "Lassitude/Ennui",
    concepts: { "Lassitude/Ennui": { status: "retenu", senses: ["se lasser", "s'ennuyer", "se fatiguer"], proof_ctx: "Tasʾamū (pos=79) : Form I subjonctif de s-ʾ-m. Wa-lā tasʾamū an taktubūhu = ne vous lassez pas de l'ecrire." } }
  });

  // pos=82 Sgr (ṣaghīran) — petit
  await insertVWA(verse_id, "Sgr", 82, "petite (dette de faible montant)", {
    concept_chosen: "Petitesse",
    concepts: { "Petitesse": { status: "retenu", senses: ["petit", "mineur"], proof_ctx: "Ṣaghīran (pos=82) : adjectif de ṣ-gh-r. Ṣaghīran aw kabīran = petite ou grande [la dette]." } }
  });

  // pos=84 kbr (kabīran) — grand
  await insertVWA(verse_id, "kbr", 84, "grande (dette de montant important)", {
    concept_chosen: "Grandeur",
    concepts: { "Grandeur": { status: "retenu", senses: ["grand", "important"], proof_ctx: "Kabīran (pos=84) : adjectif de k-b-r. La dette grande ou petite doit etre ecrite." } }
  });

  // pos=88 qsT (aqsaṭu) — plus equitable
  await insertVWA(verse_id, "qsT", 88, "plus equitable (superlatif de justice)", {
    concept_chosen: "Equite/Justice",
    concepts: { "Equite/Justice": { status: "retenu", senses: ["equitable", "juste", "droit"], proof_ctx: "Aqsaṭu (pos=88) : elatif de q-s-ṭ. Dhālikum aqsaṭu ʿinda llāhi = cela est plus equitable aupres de Dieu." } }
  });

  // pos=91 qwm (aqwamu) — plus droit
  await insertVWA(verse_id, "qwm", 91, "plus droit (superlatif de rectitude)", {
    concept_chosen: "Rectitude/Stabilite",
    concepts: { "Rectitude/Stabilite": { status: "retenu", senses: ["droit", "correct", "stable"], proof_ctx: "Aqwamu (pos=91) : elatif de q-w-m. Wa-aqwamu lil-shahādati = et plus droit pour le temoignage." } }
  });

  // pos=95 ryb (tartābū) — douter
  await insertVWA(verse_id, "ryb", 95, "vous doutiez (suspicion)", {
    concept_chosen: "Doute/Suspicion",
    concepts: { "Doute/Suspicion": { status: "retenu", senses: ["douter", "suspecter"], proof_ctx: "Tartābū (pos=95) : Form VIII de r-y-b. Wa-adnā allā tartābū = et plus proche de ne pas douter." } }
  });

  // pos=99 tjr (tijāratan) — commerce
  await insertVWA(verse_id, "tjr", 99, "un commerce (transaction commerciale)", {
    concept_chosen: "Commerce/Negoce",
    concepts: { "Commerce/Negoce": { status: "retenu", senses: ["commerce", "negoce", "transaction"], proof_ctx: "Tijāratan (pos=99) : nom de t-j-r. Illā an takūna tijāratan ḥāḍiratan = sauf s'il s'agit d'un commerce present." } }
  });

  // pos=100 HDr (ḥāḍiratan) — present
  await insertVWA(verse_id, "HDr", 100, "present (immediat, sur place)", {
    concept_chosen: "Presence",
    concepts: { "Presence": { status: "retenu", senses: ["present", "immediat", "sur place"], proof_ctx: "Ḥāḍiratan (pos=100) : participe actif feminin de ḥ-ḍ-r. Commerce present = transaction au comptant, pas a credit." } }
  });

  // pos=101 dwr (tudīrūnahā) — vous faites tourner
  await insertVWA(verse_id, "dwr", 101, "vous faites tourner (gerer en circulation)", {
    concept_chosen: "Rotation/Circulation",
    concepts: { "Rotation/Circulation": { status: "retenu", senses: ["faire tourner", "gerer", "faire circuler"], proof_ctx: "Tudīrūnahā (pos=101) : Form IV de d-w-r. Tudīrūnahā baynakum = vous la faites tourner entre vous. Commerce courant." } }
  });

  // pos=105 jnH (junāḥun) — inclinaison vers la faute
  await insertVWA(verse_id, "jnH", 105, "inclinaison vers la faute", {
    concept_chosen: "Inclinaison/Faute",
    concepts: { "Inclinaison/Faute": { status: "retenu", senses: ["faute", "peche", "inclinaison"], proof_ctx: "Junāḥun (pos=105) : nom de j-n-ḥ. Falaysa ʿalaykum junāḥun = pas d'inclinaison vers la faute sur vous." } }
  });

  // pos=108 shd (ashhidū) — prenez des temoins
  await insertVWA(verse_id, "shd", 108, "prenez des temoins (Form IV = faire temoigner)", {
    concept_chosen: "Temoignage/Attestation",
    concepts: { "Temoignage/Attestation": { status: "retenu", senses: ["prendre a temoin", "faire temoigner"], proof_ctx: "Ashhidū (pos=108) : Form IV imperatif de sh-h-d. Wa-ashhidū idhā tabāyaʿtum = et prenez des temoins quand vous faites une transaction." } }
  });

  // pos=110 byE (tabāyaʿtum) — vous faites une transaction
  await insertVWA(verse_id, "byE", 110, "vous faites une transaction (achat-vente mutuel)", {
    concept_chosen: "Vente/Transaction",
    concepts: { "Vente/Transaction": { status: "retenu", senses: ["vendre", "acheter", "faire une transaction"], proof_ctx: "Tabāyaʿtum (pos=110) : Form VI de b-y-ʿ (reciproque). Idhā tabāyaʿtum = quand vous faites des transactions mutuelles." } }
  });

  // pos=112 Drr (yuḍārra) — subir du tort
  await insertVWA(verse_id, "Drr", 112, "subisse de tort (nuisance)", {
    concept_chosen: "Tort/Nuisance",
    concepts: { "Tort/Nuisance": { status: "retenu", senses: ["nuire", "subir du tort", "causer du dommage"], proof_ctx: "Yuḍārra (pos=112) : Form III passif de ḍ-r-r. Wa-lā yuḍārra kātibun wa-lā shahīdun = que ni scribe ni temoin ne subisse de tort." } }
  });

  // pos=117 fEl (tafʿalū) — vous faites
  await insertVWA(verse_id, "fEl", 117, "vous faites (action)", {
    concept_chosen: "Action/Faire",
    concepts: { "Action/Faire": { status: "retenu", senses: ["faire", "agir"], proof_ctx: "Tafʿalū (pos=117) : Form I inaccompli 2MP de f-ʿ-l. Wa-in tafʿalū fa-innahu fusūqun bikum = et si vous le faites, c'est une deviance." } }
  });

  // pos=119 fsq (fusūqun) — deviance
  await insertVWA(verse_id, "fsq", 119, "deviance (sortie de l'obeissance)", {
    concept_chosen: "Deviance/Transgression",
    concepts: { "Deviance/Transgression": { status: "retenu", senses: ["deviance", "transgression", "sortie de l'obeissance"], proof_ctx: "Fusūqun (pos=119) : masdar de f-s-q. Fa-innahu fusūqun bikum = c'est une deviance de votre part. Le fisq est la sortie de l'obeissance." } }
  });

  // pos=121 wqy (ittaqū) — premunissez-vous
  await insertVWA(verse_id, "wqy", 121, "premunissez-vous (protection)", {
    concept_chosen: "Protection/Preservation",
    concepts: { "Protection/Preservation": { status: "retenu", senses: ["se premunir", "se proteger", "se preserver"], proof_ctx: "Ittaqū (pos=121) : Form VIII imperatif de w-q-y. Wa-ttaqū llāha = et premunissez-vous envers Dieu." } }
  });

  // pos=123 Elm (yuʿallimukumu) — vous enseigne
  await insertVWA(verse_id, "Elm", 123, "vous enseigne (transmission du savoir)", {
    concept_chosen: "Savoir/Connaissance",
    concepts: { "Savoir/Connaissance": { status: "retenu", senses: ["enseigner", "apprendre", "instruire"], proof_ctx: "Yuʿallimukumu (pos=123) : Form II inaccompli de ʿ-l-m. Wa-yuʿallimukumu llāhu = et Dieu vous enseigne." } }
  });

  // ============================================================
  // 2. UPDATE VERSE with complete translation + explanation + segments
  // ============================================================

  const translation_arab = "O vous qui avez cru ! Quand vous contractez une dette a terme fixe, ecrivez-la. Et qu'un scribe l'ecrive avec equite entre vous. Qu'aucun scribe ne refuse d'ecrire selon ce que Dieu lui a enseigne. Qu'il ecrive donc, et que dicte celui qui a l'obligation, qu'il se premunisse envers Dieu son Seigneur et ne diminue rien de sa dette. Si celui qui a l'obligation est faible d'esprit, ou faible, ou incapable de dicter lui-meme, que son tuteur dicte avec equite. Et faites temoigner deux temoins parmi vos hommes. S'il n'y a pas deux hommes, alors un homme et deux femmes parmi ceux dont vous agreez le temoignage, afin que si l'une d'elles s'egare, l'autre lui rappelle. Que les temoins ne refusent pas quand ils sont appeles. Et ne vous lassez pas d'ecrire la dette, petite ou grande, jusqu'a son terme. Cela est plus equitable aupres de Dieu, plus droit pour le temoignage, et plus proche de ne pas douter — sauf s'il s'agit d'un commerce present que vous faites tourner entre vous, alors pas d'inclinaison vers la faute a ne pas l'ecrire. Et prenez des temoins quand vous faites une transaction. Que ni scribe ni temoin ne subisse de tort. Et si vous le faites, c'est une deviance de votre part. Et premunissez-vous envers Dieu. Dieu vous enseigne. Et Dieu est de toute chose Savant.";

  const full_translation = translation_arab;

  const translation_explanation = `§DEMARCHE§
V282 est le verset le plus long du Coran — il etablit la reglementation complete du pret ecrit avec temoins. Structure : (1) yā ayyuhā lladhīna āmanū idhā tadāyantum bi-daynin ilā ajalin musamman fa-ktubūhu = quand vous contractez une dette, ecrivez-la. (2) Wa-l-yaktub baynakum kātibun bi-l-ʿadli = qu'un scribe ecrive avec equite. (3) Wa-lā yaʾba kātibun an yaktuba kamā ʿallamahu llāhu = qu'aucun scribe ne refuse. (4) Fal-yaktub wa-l-yumlil alladhī ʿalayhi l-ḥaqq = que dicte celui qui a l'obligation. (5) Wa-l-yattaqi llāha rabbahu wa-lā yabkhas minhu shayʾan = qu'il se premunisse et ne diminue rien. (6) Fa-in kāna safīhan aw ḍaʿīfan aw lā yastaṭīʿu an yumilla huwa fa-l-yumlil waliyyuhu bi-l-ʿadli = si incapable, que son tuteur dicte. (7) Wa-stashhidū shahīdayni min rijālikum = faites temoigner deux temoins parmi vos hommes. (8) Fa-in lam yakūnā rajulayni fa-rajulun wa-mraʾatāni = sinon un homme et deux femmes. (9) An taḍilla iḥdāhumā fa-tudhakkira iḥdāhumā l-ukhrā = si l'une s'egare, l'autre rappelle. (10) Wa-lā yaʾba sh-shuhadāʾu idhā mā duʿū = que les temoins ne refusent pas. (11) Wa-lā tasʾamū an taktubūhu ṣaghīran aw kabīran ilā ajalihi = ne vous lassez pas d'ecrire. (12) Dhālikum aqsaṭu ʿinda llāhi wa-aqwamu lil-shahādati wa-adnā allā tartābū = plus equitable, plus droit, moins de doute. (13) Illā an takūna tijāratan ḥāḍiratan tudīrūnahā baynakum = sauf commerce present. (14) Wa-ashhidū idhā tabāyaʿtum = prenez des temoins. (15) Wa-lā yuḍārra kātibun wa-lā shahīdun = ni scribe ni temoin ne subisse de tort. (16) Wa-in tafʿalū fa-innahu fusūqun bikum = si vous le faites, c'est une deviance. (17) Wa-ttaqū llāha wa-yuʿallimukumu llāhu wa-llāhu bikulli shayʾin ʿalīmun = premunissez-vous, Dieu enseigne, Dieu est Savant.

§JUSTIFICATION§
Tadāyantum : dyn = Dette/Obligation — Form VI reciproque (se faire des dettes mutuellement). Daynin : dette. Ajal musamman : terme fixe/designe. Fa-ktubūhu : ktb = Ecriture — imperatif pluriel. Kātibun : scribe (participe actif de ktb). Al-ʿadli : edl = Justice/Equite. Yaʾba : aby = Refus. Kamā ʿallamahu llāhu : selon ce que Dieu lui a enseigne (elm). Al-ḥaqq : hqq = l'obligation/la dette. Yattaqi : wqy = se premunir. Yabkhas : bxs = diminuer/leser. Safīhan : sfh = faible d'esprit. Ḍaʿīfan : Def = faible. Yastaṭīʿu : Twe = etre capable (Form X). Yumilla : mll = dicter. Waliyyuhu : wly = son tuteur. Istashhidū : shd = faites temoigner (Form X). Shahīdayni : deux temoins (duel). Rijālikum : rjl = vos hommes. Imraʾatāni : mra = deux femmes (duel). Tarḍawna : rDw = vous agreez. Taḍilla : Dll = s'egarer/oublier. Fatudhakkira : dkr = rappeler (Form II). Duʿū : dew = ils sont appeles (passif). Tasʾamū : sam = se lasser. Ṣaghīran : Sgr = petit. Kabīran : kbr = grand. Aqsaṭu : qsT = plus equitable (elatif). Aqwamu : qwm = plus droit (elatif). Tartābū : ryb = douter (Form VIII). Tijāratan : tjr = commerce. Ḥāḍiratan : HDr = present. Tudīrūnahā : dwr = faire tourner. Junāḥun : jnH = inclinaison vers la faute. Ashhidū : shd = prenez des temoins (Form IV). Tabāyaʿtum : byE = transaction mutuelle (Form VI). Yuḍārra : Drr = subir du tort (Form III passif). Tafʿalū : fEl = faire. Fusūqun : fsq = deviance. Ittaqū : wqy = premunissez-vous. Yuʿallimukumu : Elm = enseigne (Form II). ʿAlīmun : Elm = Savant.

§CRITIQUE§
Hamidullah traduit ce verset dans sa totalite avec fidelite. Nos choix distinctifs : (1) "premunissez-vous" au lieu de "craignez" pour wqy — coherent avec toute la sourate. (2) "inclinaison vers la faute" pour junāḥ plutot que "peche" — plus fidele a l'etymologie j-n-ḥ (s'incliner). (3) "deviance" pour fusūq plutot que "perversite" — f-s-q signifie sortir de l'obeissance, pas perversion morale au sens occidental. (4) "faible d'esprit" pour safīh plutot que "prodigue" (choix de Hamidullah) — le Lane's donne lightwitted, weak in intellect, ce qui convient mieux au contexte juridique (incapacite a dicter). (5) La structure du verset est juridique : obligation d'ecrire, exception (commerce comptant), protection des scribes et temoins, conclusion theologique.`;

  const segments = [
    { position: 1, arabic: "يَـٰٓأَيُّهَا", phon: "yā ayyuhā", fr: "O", is_particle: true },
    { position: 2, arabic: "ٱلَّذِينَ", phon: "al-ladhīna", fr: "vous qui", is_particle: false, word_key: "dhhy", pos: "nom", sense_retenu: "ceux qui" },
    { position: 3, arabic: "ءَامَنُوا۟", phon: "āmanū", fr: "avez cru !", is_particle: false, word_key: "amn", pos: "verbe", sense_retenu: "avez cru" },
    { position: 4, arabic: "إِذَا", phon: "idhā", fr: "Quand", is_particle: true },
    { position: 5, arabic: "تَدَايَنتُم", phon: "tadāyantum", fr: "vous contractez une dette", is_particle: false, word_key: "dyn", pos: "verbe", sense_retenu: "contractez une dette" },
    { position: 6, arabic: "بِ", phon: "bi", fr: "pour", is_particle: true },
    { position: 7, arabic: "دَيْنٍ", phon: "daynin", fr: "une dette", is_particle: false, word_key: "dyn", pos: "nom", sense_retenu: "dette" },
    { position: 8, arabic: "إِلَىٰ", phon: "ilā", fr: "a", is_particle: true },
    { position: 9, arabic: "أَجَلٍ", phon: "ajalin", fr: "terme", is_particle: false, word_key: "ajl", pos: "nom", sense_retenu: "terme" },
    { position: 10, arabic: "مُّسَمًّى", phon: "musamman", fr: "fixe,", is_particle: false, word_key: "smw", pos: "adjectif", sense_retenu: "fixe/designe" },
    { position: 11, arabic: "فَٱكْتُبُوهُ", phon: "fa-ktubūhu", fr: "ecrivez-la.", is_particle: true },
    { position: 12, arabic: "وَلْ", phon: "wa-l", fr: "Et qu'", is_particle: true },
    { position: 13, arabic: "يَكْتُب", phon: "yaktub", fr: "ecrive", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "ecrive" },
    { position: 14, arabic: "بَيْنَكُمْ", phon: "baynakum", fr: "entre vous", is_particle: false, word_key: "byn", pos: "nom", sense_retenu: "entre" },
    { position: 15, arabic: "كَاتِبٌ", phon: "kātibun", fr: "un scribe", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 16, arabic: "بِٱلْعَدْلِ", phon: "bi-l-ʿadli", fr: "avec equite.", is_particle: true },
    { position: 17, arabic: "وَلَا", phon: "wa-lā", fr: "Qu'aucun", is_particle: true },
    { position: 18, arabic: "يَأْبَ", phon: "yaʾba", fr: "ne refuse", is_particle: false, word_key: "aby", pos: "verbe", sense_retenu: "refuse" },
    { position: 19, arabic: "كَاتِبٌ", phon: "kātibun", fr: "scribe", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 20, arabic: "أَن", phon: "an", fr: "d'", is_particle: true },
    { position: 21, arabic: "يَكْتُبَ", phon: "yaktuba", fr: "ecrire", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "ecrire" },
    { position: 22, arabic: "كَمَا", phon: "kamā", fr: "selon ce que", is_particle: true },
    { position: 23, arabic: "عَلَّمَهُ", phon: "ʿallamahu", fr: "lui a enseigne", is_particle: false, word_key: "elm", pos: "verbe", sense_retenu: "enseigne" },
    { position: 24, arabic: "ٱللَّهُ", phon: "allāhu", fr: "Dieu.", is_particle: true },
    { position: 25, arabic: "فَلْ", phon: "fal", fr: "Qu'il", is_particle: true },
    { position: 26, arabic: "يَكْتُبْ", phon: "yaktub", fr: "ecrive donc,", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "ecrive" },
    { position: 27, arabic: "وَلْيُمْلِلِ", phon: "walyumlil", fr: "et que dicte", is_particle: true },
    { position: 28, arabic: "ٱلَّذِى", phon: "alladhī", fr: "celui qui", is_particle: false, word_key: "dhhy", pos: "nom", sense_retenu: "celui qui" },
    { position: 29, arabic: "عَلَيْهِ", phon: "ʿalayhi", fr: "a", is_particle: true },
    { position: 30, arabic: "ٱلْحَقُّ", phon: "al-ḥaqq", fr: "l'obligation,", is_particle: false, word_key: "hqq", pos: "nom", sense_retenu: "obligation" },
    { position: 31, arabic: "وَلْيَتَّقِ", phon: "walyattaqi", fr: "qu'il se premunisse envers", is_particle: true },
    { position: 32, arabic: "ٱللَّهَ", phon: "allāha", fr: "Dieu", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 33, arabic: "رَبَّهُ", phon: "rabbahu", fr: "son Seigneur", is_particle: false, word_key: "rbb", pos: "nom", sense_retenu: "Seigneur" },
    { position: 34, arabic: "وَلَا", phon: "wa-lā", fr: "et ne", is_particle: true },
    { position: 35, arabic: "يَبْخَسْ", phon: "yabkhas", fr: "diminue rien", is_particle: false, word_key: "bxs", pos: "verbe", sense_retenu: "diminuer/leser" },
    { position: 36, arabic: "مِنْهُ", phon: "minhu", fr: "de sa dette.", is_particle: true },
    { position: 37, arabic: "شَيْـًٔا", phon: "shayʾan", fr: "—", is_particle: true },
    // === SECOND HALF STARTS HERE ===
    { position: 38, arabic: "فَإِن", phon: "fa-in", fr: "Si", is_particle: true },
    { position: 39, arabic: "كَانَ", phon: "kāna", fr: "est", is_particle: false, word_key: "kwn", pos: "verbe", sense_retenu: "etre" },
    { position: 40, arabic: "ٱلَّذِى", phon: "alladhī", fr: "celui qui a", is_particle: true },
    { position: 41, arabic: "عَلَيْهِ", phon: "ʿalayhi", fr: "—", is_particle: true },
    { position: 42, arabic: "ٱلْحَقُّ", phon: "al-ḥaqq", fr: "l'obligation", is_particle: false, word_key: "hqq", pos: "nom", sense_retenu: "obligation" },
    { position: 43, arabic: "سَفِيهًا", phon: "safīhan", fr: "faible d'esprit,", is_particle: false, word_key: "sfh", pos: "nom", sense_retenu: "faible d'esprit" },
    { position: 44, arabic: "أَوْ", phon: "aw", fr: "ou", is_particle: true },
    { position: 45, arabic: "ضَعِيفًا", phon: "ḍaʿīfan", fr: "faible,", is_particle: false, word_key: "Def", pos: "nom", sense_retenu: "faible" },
    { position: 46, arabic: "أَوْ", phon: "aw", fr: "ou", is_particle: true },
    { position: 47, arabic: "لَا", phon: "lā", fr: "—", is_particle: true },
    { position: 48, arabic: "يَسْتَطِيعُ", phon: "yastaṭīʿu", fr: "incapable", is_particle: false, word_key: "Twe", pos: "verbe", sense_retenu: "etre capable" },
    { position: 49, arabic: "أَن", phon: "an", fr: "de", is_particle: true },
    { position: 50, arabic: "يُمِلَّ", phon: "yumilla", fr: "dicter", is_particle: false, word_key: "mll", pos: "verbe", sense_retenu: "dicter" },
    { position: 51, arabic: "هُوَ", phon: "huwa", fr: "lui-meme,", is_particle: true },
    { position: 52, arabic: "فَلْيُمْلِلْ", phon: "falyumlil", fr: "que dicte", is_particle: true },
    { position: 53, arabic: "وَلِيُّهُ", phon: "waliyyuhu", fr: "son tuteur", is_particle: false, word_key: "wly", pos: "nom", sense_retenu: "tuteur" },
    { position: 54, arabic: "بِٱلْعَدْلِ", phon: "bi-l-ʿadli", fr: "avec equite.", is_particle: true },
    { position: 55, arabic: "وَٱسْتَشْهِدُوا۟", phon: "wa-stashhidū", fr: "Et faites temoigner", is_particle: false, word_key: "shd", pos: "verbe", sense_retenu: "faites temoigner" },
    { position: 56, arabic: "شَهِيدَيْنِ", phon: "shahīdayni", fr: "deux temoins", is_particle: false, word_key: "shd", pos: "nom", sense_retenu: "temoins" },
    { position: 57, arabic: "مِن", phon: "min", fr: "parmi", is_particle: true },
    { position: 58, arabic: "رِّجَالِكُمْ", phon: "rijālikum", fr: "vos hommes.", is_particle: false, word_key: "rjl", pos: "nom", sense_retenu: "hommes" },
    { position: 59, arabic: "فَإِن", phon: "fa-in", fr: "S'il n'y a pas", is_particle: true },
    { position: 60, arabic: "لَّمْ", phon: "lam", fr: "—", is_particle: true },
    { position: 61, arabic: "يَكُونَا", phon: "yakūnā", fr: "—", is_particle: true },
    { position: 62, arabic: "رَجُلَيْنِ", phon: "rajulayni", fr: "deux hommes,", is_particle: false, word_key: "rjl", pos: "nom", sense_retenu: "hommes" },
    { position: 63, arabic: "فَرَجُلٌ", phon: "farajulun", fr: "alors un homme", is_particle: false, word_key: "rjl", pos: "nom", sense_retenu: "homme" },
    { position: 64, arabic: "وَٱمْرَأَتَانِ", phon: "wa-mraʾatāni", fr: "et deux femmes", is_particle: false, word_key: "mra", pos: "nom", sense_retenu: "femmes" },
    { position: 65, arabic: "مِمَّن", phon: "mimman", fr: "parmi ceux dont", is_particle: true },
    { position: 66, arabic: "تَرْضَوْنَ", phon: "tarḍawna", fr: "vous agreez", is_particle: false, word_key: "rDw", pos: "verbe", sense_retenu: "agreer" },
    { position: 67, arabic: "مِنَ", phon: "mina", fr: "—", is_particle: true },
    { position: 68, arabic: "ٱلشُّهَدَآءِ", phon: "ash-shuhadāʾi", fr: "le temoignage,", is_particle: false, word_key: "shd", pos: "nom", sense_retenu: "temoins" },
    { position: 69, arabic: "أَن", phon: "an", fr: "afin que", is_particle: true },
    { position: 70, arabic: "تَضِلَّ", phon: "taḍilla", fr: "si s'egare", is_particle: false, word_key: "Dll", pos: "verbe", sense_retenu: "s'egarer" },
    { position: 71, arabic: "إِحْدَىٰهُمَا", phon: "iḥdāhumā", fr: "l'une d'elles,", is_particle: true },
    { position: 72, arabic: "فَتُذَكِّرَ", phon: "fatudhakkira", fr: "l'autre lui rappelle.", is_particle: false, word_key: "dkr", pos: "verbe", sense_retenu: "rappeler" },
    { position: 73, arabic: "إِحْدَىٰهُمَا", phon: "iḥdāhumā", fr: "—", is_particle: true },
    { position: 74, arabic: "ٱلْأُخْرَىٰ", phon: "al-ukhrā", fr: "—", is_particle: true },
    { position: 75, arabic: "وَلَا", phon: "wa-lā", fr: "Que ne", is_particle: true },
    { position: 76, arabic: "يَأْبَ", phon: "yaʾba", fr: "refusent pas", is_particle: false, word_key: "aby", pos: "verbe", sense_retenu: "refuser" },
    { position: 77, arabic: "ٱلشُّهَدَآءُ", phon: "ash-shuhadāʾu", fr: "les temoins", is_particle: false, word_key: "shd", pos: "nom", sense_retenu: "temoins" },
    { position: 78, arabic: "إِذَا", phon: "idhā", fr: "quand", is_particle: true },
    { position: 79, arabic: "مَا", phon: "mā", fr: "—", is_particle: true },
    { position: 80, arabic: "دُعُوا۟", phon: "duʿū", fr: "ils sont appeles.", is_particle: false, word_key: "dew", pos: "verbe", sense_retenu: "appeler" },
    { position: 81, arabic: "وَلَا", phon: "wa-lā", fr: "Et ne", is_particle: true },
    { position: 82, arabic: "تَسْـَٔمُوا۟", phon: "tasʾamū", fr: "vous lassez pas", is_particle: false, word_key: "sam", pos: "verbe", sense_retenu: "se lasser" },
    { position: 83, arabic: "أَن", phon: "an", fr: "d'", is_particle: true },
    { position: 84, arabic: "تَكْتُبُوهُ", phon: "taktubūhu", fr: "ecrire la dette,", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "ecrire" },
    { position: 85, arabic: "صَغِيرًا", phon: "ṣaghīran", fr: "petite", is_particle: false, word_key: "Sgr", pos: "nom", sense_retenu: "petit" },
    { position: 86, arabic: "أَوْ", phon: "aw", fr: "ou", is_particle: true },
    { position: 87, arabic: "كَبِيرًا", phon: "kabīran", fr: "grande,", is_particle: false, word_key: "kbr", pos: "nom", sense_retenu: "grand" },
    { position: 88, arabic: "إِلَىٰ", phon: "ilā", fr: "jusqu'a", is_particle: true },
    { position: 89, arabic: "أَجَلِهِ", phon: "ajalihi", fr: "son terme.", is_particle: false, word_key: "ajl", pos: "nom", sense_retenu: "terme" },
    { position: 90, arabic: "ذَٰلِكُمْ", phon: "dhālikum", fr: "Cela est", is_particle: true },
    { position: 91, arabic: "أَقْسَطُ", phon: "aqsaṭu", fr: "plus equitable", is_particle: false, word_key: "qsT", pos: "nom", sense_retenu: "equitable" },
    { position: 92, arabic: "عِندَ", phon: "ʿinda", fr: "aupres de", is_particle: true },
    { position: 93, arabic: "ٱللَّهِ", phon: "allāhi", fr: "Dieu,", is_particle: true },
    { position: 94, arabic: "وَأَقْوَمُ", phon: "wa-aqwamu", fr: "plus droit", is_particle: false, word_key: "qwm", pos: "nom", sense_retenu: "droit" },
    { position: 95, arabic: "لِلشَّهَـٰدَةِ", phon: "lil-shahādati", fr: "pour le temoignage,", is_particle: false, word_key: "shd", pos: "nom", sense_retenu: "temoignage" },
    { position: 96, arabic: "وَأَدْنَىٰ", phon: "wa-adnā", fr: "et plus proche", is_particle: true },
    { position: 97, arabic: "أَلَّا", phon: "allā", fr: "de ne pas", is_particle: true },
    { position: 98, arabic: "تَرْتَابُوا۟", phon: "tartābū", fr: "douter", is_particle: false, word_key: "ryb", pos: "verbe", sense_retenu: "douter" },
    { position: 99, arabic: "إِلَّا", phon: "illā", fr: "— sauf", is_particle: true },
    { position: 100, arabic: "أَن", phon: "an", fr: "s'il s'agit", is_particle: true },
    { position: 101, arabic: "تَكُونَ", phon: "takūna", fr: "d'", is_particle: true },
    { position: 102, arabic: "تِجَـٰرَةً", phon: "tijāratan", fr: "un commerce", is_particle: false, word_key: "tjr", pos: "nom", sense_retenu: "commerce" },
    { position: 103, arabic: "حَاضِرَةً", phon: "ḥāḍiratan", fr: "present", is_particle: false, word_key: "HDr", pos: "adjectif", sense_retenu: "present" },
    { position: 104, arabic: "تُدِيرُونَهَا", phon: "tudīrūnahā", fr: "que vous faites tourner", is_particle: false, word_key: "dwr", pos: "verbe", sense_retenu: "faire tourner" },
    { position: 105, arabic: "بَيْنَكُمْ", phon: "baynakum", fr: "entre vous,", is_particle: false, word_key: "byn", pos: "nom", sense_retenu: "entre" },
    { position: 106, arabic: "فَلَيْسَ", phon: "falaysa", fr: "alors pas", is_particle: true },
    { position: 107, arabic: "عَلَيْكُمْ", phon: "ʿalaykum", fr: "sur vous", is_particle: true },
    { position: 108, arabic: "جُنَاحٌ", phon: "junāḥun", fr: "d'inclinaison vers la faute", is_particle: false, word_key: "jnH", pos: "nom", sense_retenu: "inclinaison vers la faute" },
    { position: 109, arabic: "أَلَّا", phon: "allā", fr: "a ne pas", is_particle: true },
    { position: 110, arabic: "تَكْتُبُوهَا", phon: "taktubūhā", fr: "l'ecrire.", is_particle: false, word_key: "ktb", pos: "verbe", sense_retenu: "ecrire" },
    { position: 111, arabic: "وَأَشْهِدُوا۟", phon: "wa-ashhidū", fr: "Et prenez des temoins", is_particle: false, word_key: "shd", pos: "verbe", sense_retenu: "prendre a temoin" },
    { position: 112, arabic: "إِذَا", phon: "idhā", fr: "quand", is_particle: true },
    { position: 113, arabic: "تَبَايَعْتُمْ", phon: "tabāyaʿtum", fr: "vous faites une transaction.", is_particle: false, word_key: "byE", pos: "verbe", sense_retenu: "transaction" },
    { position: 114, arabic: "وَلَا", phon: "wa-lā", fr: "Que ni", is_particle: true },
    { position: 115, arabic: "يُضَآرَّ", phon: "yuḍārra", fr: "ne subisse de tort", is_particle: false, word_key: "Drr", pos: "verbe", sense_retenu: "subir du tort" },
    { position: 116, arabic: "كَاتِبٌ", phon: "kātibun", fr: "scribe", is_particle: false, word_key: "ktb", pos: "nom", sense_retenu: "scribe" },
    { position: 117, arabic: "وَلَا", phon: "wa-lā", fr: "ni", is_particle: true },
    { position: 118, arabic: "شَهِيدٌ", phon: "shahīdun", fr: "temoin.", is_particle: false, word_key: "shd", pos: "nom", sense_retenu: "temoin" },
    { position: 119, arabic: "وَإِن", phon: "wa-in", fr: "Et si", is_particle: true },
    { position: 120, arabic: "تَفْعَلُوا۟", phon: "tafʿalū", fr: "vous le faites,", is_particle: false, word_key: "fEl", pos: "verbe", sense_retenu: "faire" },
    { position: 121, arabic: "فَإِنَّهُ", phon: "fa-innahu", fr: "c'est", is_particle: true },
    { position: 122, arabic: "فُسُوقٌ", phon: "fusūqun", fr: "une deviance", is_particle: false, word_key: "fsq", pos: "nom", sense_retenu: "deviance" },
    { position: 123, arabic: "بِكُمْ", phon: "bikum", fr: "de votre part.", is_particle: true },
    { position: 124, arabic: "وَٱتَّقُوا۟", phon: "wa-ttaqū", fr: "Et premunissez-vous envers", is_particle: false, word_key: "wqy", pos: "verbe", sense_retenu: "se premunir" },
    { position: 125, arabic: "ٱللَّهَ", phon: "allāha", fr: "Dieu.", is_particle: true },
    { position: 126, arabic: "وَيُعَلِّمُكُمُ", phon: "wa-yuʿallimukumu", fr: "Dieu vous enseigne.", is_particle: false, word_key: "Elm", pos: "verbe", sense_retenu: "enseigner" },
    { position: 127, arabic: "ٱللَّهُ", phon: "allāhu", fr: "—", is_particle: true },
    { position: 128, arabic: "وَٱللَّهُ", phon: "wa-llāhu", fr: "Et Dieu est", is_particle: true },
    { position: 129, arabic: "بِكُلِّ", phon: "bikulli", fr: "de toute", is_particle: true },
    { position: 130, arabic: "شَىْءٍ", phon: "shayʾin", fr: "chose", is_particle: true },
    { position: 131, arabic: "عَلِيمٌ", phon: "ʿalīmun", fr: "Savant.", is_particle: false, word_key: "Elm", pos: "nom", sense_retenu: "Savant" }
  ];

  // Update the verse
  const { error } = await supabase.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments
  }).eq('id', analysis_id);

  if (error) console.error('Verse update error:', error.message);
  else console.log('Verse update OK: analysis_id=' + analysis_id);

  console.log('\n=== DONE ===');
}

main().catch(console.error);
