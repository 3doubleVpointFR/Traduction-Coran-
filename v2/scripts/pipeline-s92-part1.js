// Pipeline Sourate 92 (Al-Layl / La Nuit) — Partie 1: Versets 1-7
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  const { error } = await sb.from('word_daily').insert(rows);
  if (error) console.log(`  Daily ERROR:`, error.message);
  else console.log(`  Daily inserted ${rows.length} phrases for id=${analysis_id}`);
}

// ================================================================
// CONTEXTE SOURATE 92 (Al-Layl / La Nuit)
// ================================================================
// Structure : 3 serments (v1-3), constat (v4), premier chemin (v5-7),
// second chemin (v8-10), transition (v11-13), avertissement (v14-16),
// recompense (v17-21). Theme : contraste entre deux voies — le genereux
// pieux et l'avare autosuffisant. Voisines : S91 (Ash-Shams) avant,
// S93 (Ad-Duha) apres.

async function verse92_1() {
  console.log('\n=== VERSET 92:1 — وَٱلَّيْلِ إِذَا يَغْشَىٰ ===');
  const verse_id = 6059;

  // ---- LYL (ليل) — id=528 — "nuit" ----
  // Forme: al-layli = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'lyl', 'nuit', {
    sense_chosen: "nuit",
    concept_chosen: "Nuit/Obscurité",
    concepts: {
      "Nuit/Obscurité": {
        status: "retenu",
        senses: ["nuit", "obscurite", "tenebres"],
        proof_ctx: "Le sens retenu est « Nuit/Obscurite ». Le Lane's donne : la nuit, la periode d'obscurite entre le coucher et le lever du soleil. Le mot al-layli est un nom defini par al- au genitif apres la particule de serment wa-. Le serment par la nuit est un procede coranique frequent — la nuit est un phenomene cosmique qui affecte toute la creation. La nuit est ici qualifiee par la proposition idha yaghsha (quand elle couvre), ce qui la definit par son action principale : couvrir le monde d'obscurite. Le serment introduit le theme central de la sourate : le contraste entre deux voies, comme le contraste entre nuit et jour.",
        axe1_verset: "Le verset dit « par la nuit quand elle couvre ». Le mot al-layli est le premier element du serment. La nuit est definie non pas en elle-meme mais par son action : yaghsha (elle couvre). Le champ lexical nuit + couvrir forme une image d'enveloppement total. La nuit ne se contente pas d'exister — elle agit, elle recouvre le monde. Le serment par un phenomene cosmique actif donne au propos une solennite maximale.",
        axe2_voisins: "Le verset 2 oppose le jour qui se manifeste a la nuit qui couvre. Le verset 3 ajoute un troisieme serment par le createur du masculin et du feminin. Les trois serments forment une serie de contrastes : nuit/jour, masculin/feminin. Le verset 4 tire la conclusion : les efforts des etres humains sont divers. Les contrastes cosmiques fondent le constat de la diversite des chemins humains.",
        axe3_sourate: "La nuit ouvre la sourate comme symbole de ce qui cache et obscurcit. La sourate oppose ensuite deux chemins : celui du don et de la piete (v5-7) et celui de l'avarice et de l'autosuffisance (v8-10). La nuit qui couvre prefigure le chemin de l'obscurite — celui qui refuse de donner et se croit autosuffisant. Le jour qui se devoile prefigure le chemin de la lumiere — celui qui donne et confirme le bien.",
        axe4_coherence: "Le Coran jure par la nuit dans plusieurs sourates : « par la nuit quand elle couvre » (92:1), « par la nuit quand elle s'etend » (89:4), « par la nuit et ce qu'elle abrite » (91:4). La nuit est un element recurrent des serments coraniques, toujours associee a une action specifique. Chaque serment par la nuit la qualifie differemment selon le theme de la sourate.",
        axe5_frequence: "La nuit comme phenomene cosmique rappelle que le monde est fait de contrastes naturels. Le khalifa vit dans un monde ou la nuit succede au jour — cette alternance est le cadre dans lequel il exerce son libre arbitre. Le choix entre les deux voies (generosite ou avarice) se fait dans un monde structure par des oppositions."
      }
    }
  }, 1);

  // ---- GHW (غشو) — id=306 — "couvrir" ----
  // Forme: yaghsha = verbe inaccompli (il/elle couvre)
  await upsertVWA(verse_id, 'ghw', 'couvrir', {
    sense_chosen: "couvrir",
    concept_chosen: "Couverture/Voile",
    concepts: {
      "Couverture/Voile": {
        status: "retenu",
        senses: ["couvrir", "cacher", "voiler", "envelopper"],
        proof_ctx: "Le sens retenu est « Couverture/Voile ». Le Lane's donne : couvrir entierement, envelopper, cacher sous un voile. Le verbe yaghsha est un inaccompli de la racine gh-sh-w qui decrit l'action de recouvrir completement une chose. L'inaccompli marque une action en cours, repetee ou habituelle — la nuit couvre le monde chaque soir, de maniere reguliere. Distinction avec « Invasion/Submersion » : l'invasion implique une agression, un mouvement hostile. Le verbe yaghsha decrit un enveloppement naturel et paisible — la nuit ne conquiert pas le monde, elle le recouvre. Distinction avec « Perte de conscience » : la perte de conscience (ughshiya 'alayhi) est un emploi derive du sens de base. Ici, le sujet est la nuit, pas une personne — il n'y a pas de perte de conscience d'un objet cosmique.",
        axe1_verset: "Le verset dit « par la nuit quand elle couvre ». Le verbe yaghsha est a l'inaccompli (action habituelle et repetee). Le sujet est la nuit — elle couvre le monde d'obscurite. L'inaccompli donne a l'action un caractere permanent et cyclique : chaque nuit, la couverture se renouvelle. Le champ lexical nuit + couvrir forme une image d'enveloppement total et paisible. La couverture de la nuit est un phenomene naturel, pas une agression.",
        axe2_voisins: "Le verset 2 oppose tajalla (il s'est manifeste/devoile) a yaghsha (elle couvre). Couvrir et devoiler sont les deux mouvements opposes : la nuit couvre, le jour devoile. Cette opposition binaire fonde le propos de la sourate sur les deux chemins. Le verset 3 ajoute l'opposition masculin/feminin — la creation est faite de paires contrastees.",
        axe3_sourate: "Couvrir est l'action qui definit la nuit dans cette sourate. La couverture symbolise ce qui cache la realite — l'avarice (v8) et l'autosuffisance (v9) sont des voiles sur la verite. A l'inverse, le jour qui devoile (v2) symbolise la generosite et la piete qui revelent la verite. Le verbe yaghsha place la couverture comme le premier acte cosmique de la sourate.",
        axe4_coherence: "La racine gh-sh-w apparait dans le Coran dans plusieurs contextes : la nuit qui couvre le jour (7:54), le sommeil qui enveloppe (8:11), le chatiment qui recouvre (29:55). Le sens de couverture totale est constant. Dans cette sourate, c'est la nuit qui exerce cette couverture — un emploi cosmique et neutre.",
        axe5_frequence: "La couverture de la nuit rappelle que le monde oscille entre le voile et le devoilement. Le khalifa doit choisir entre couvrir (cacher la verite, retenir ses biens) et devoiler (donner, etre pieux). La nuit qui couvre est le rappel que l'obscurite est un etat transitoire — le jour viendra apres."
      },
      "Invasion/Submersion": {
        status: "peu_probable",
        senses: ["envahir", "submerger", "assaillir"],
        proof_ctx: "Le sens d'invasion implique un mouvement hostile et soudain. La nuit ne fait pas irruption — elle s'installe progressivement et paisiblement. Le verbe yaghsha a l'inaccompli decrit une action habituelle et cyclique, pas une attaque. Le sujet (la nuit) est un phenomene cosmique neutre, pas un agent agressif.",
        axe1_verset: "Le verset decrit la nuit qui couvre — un phenomene naturel regulier. L'inaccompli yaghsha marque l'habitude et la repetition, pas la soudainete d'une invasion. Le champ lexical nuit + action habituelle ecarte le sens d'attaque ou de submersion violente.",
        axe2_voisins: "Le verset 2 oppose un devoilement (tajalla) a cette couverture. L'opposition couvrir/devoiler est paisible et naturelle — elle ne correspond pas a une logique d'invasion/defense. Les deux mouvements sont complementaires, pas antagonistes.",
        axe3_sourate: "La sourate oppose deux voies morales, pas deux forces en conflit. La nuit qui couvre n'est pas un envahisseur — elle est un phenomene naturel qui illustre le contraste entre les chemins. L'invasion ne correspond pas au ton de la sourate.",
        axe4_coherence: "Le Coran utilise ghashiya pour decrire la nuit qui recouvre le jour (7:54) — un mouvement naturel et regulier, pas une invasion. L'emploi coranique de cette racine pour les phenomenes cosmiques est toujours neutre.",
        axe5_frequence: "L'invasion impliquerait un conflit entre la nuit et le monde. Le texte decrit une alternance paisible, pas un combat. Le khalifa vit dans un monde d'alternances, pas de guerres cosmiques."
      },
      "Perte de conscience": {
        status: "nul",
        senses: ["s'evanouir", "perdre connaissance"],
        proof_ctx: "La perte de conscience s'applique aux etres vivants (ughshiya 'alayhi — il fut pris d'evanouissement). Ici, le sujet est la nuit — un phenomene cosmique qui ne peut pas s'evanouir. Le sens est inapplicable au contexte."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلَّيْلِ إِذَا يَغْشَىٰ",
    full_translation: "Par la nuit quand elle couvre !",
    segments: [
      { fr: "Par la nuit", pos: "nom", phon: "wal-layli", arabic: "وَٱلَّيْلِ", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule temporelle", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "elle couvre", pos: "verbe", phon: "yaghsha", arabic: "يَغْشَىٰ", word_key: "ghw", is_particle: false, sense_retenu: "couvrir", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est un serment introduit par la particule wa- (par) suivie d'un nom au genitif. Le mot al-layli (la nuit) est un nom defini par al- au genitif — c'est l'objet du serment. La particule idha (quand) introduit une proposition temporelle qui qualifie la nuit par son action. Le verbe yaghsha est un inaccompli de la racine gh-sh-w (couvrir). L'inaccompli marque une action habituelle et repetee : la nuit couvre le monde chaque soir. Le sujet implicite du verbe est la nuit (huwa/hiya referant a al-layl). Le Lane's (Edward Lane, 1863) donne pour ghashiya : couvrir entierement, envelopper, cacher sous un voile.

§JUSTIFICATION§
**nuit** — Le sens retenu est « nuit ». Aucune alternative n'est possible — al-layl designe exclusivement la nuit. Le mot « nuit » est le seul correspondant francais.

**couvre** — Le sens retenu est « couvrir/voiler ». Le mot « couvre » traduit yaghsha comme un enveloppement total et paisible. L'alternative « envahit » impliquerait une agression etrangere au contexte cosmique. L'alternative « obscurcit » serait trop restrictif — yaghsha ne dit pas seulement obscurcir mais couvrir entierement.

§CRITIQUE§
Hamidullah traduit : « Par la nuit quand elle enveloppe tout ! ». Le mot « tout » (kull) n'est pas dans le texte arabe — c'est un ajout. Le texte dit simplement yaghsha (elle couvre) sans objet explicite. L'ajout de « tout » amplifie le sens au-dela de ce que le texte dit. Notre traduction reste fidele au texte sans ajout.`
  }).eq('verse_id', verse_id);

  // Daily pour ghw (306) — couvrir
  await insertDaily(306, 'couvrir', 'غَشَّى', 'ghashsha', [
    "La brume a couvert la vallee ce matin.",
    "Elle a couvert l'enfant avec une couverture epaisse.",
    "Un voile de nuages couvrait le sommet de la montagne."
  ]);

  console.log('VERSET 92:1 — TERMINE');
  console.log('  lyl → "nuit" | ghw → "couvrir"');
  console.log('  Traduction : "Par la nuit quand elle couvre"');
}

async function verse92_2() {
  console.log('\n=== VERSET 92:2 — وَٱلنَّهَارِ إِذَا تَجَلَّىٰ ===');
  const verse_id = 6060;

  // ---- NHR (نهر) — id=397 — "jour" ----
  // Forme: an-nahari = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'nhr', 'jour', {
    sense_chosen: "jour",
    concept_chosen: "Clarté/Jour",
    concepts: {
      "Clarté/Jour": {
        status: "retenu",
        senses: ["jour", "clarte", "lumiere diurne"],
        proof_ctx: "Le sens retenu est « Clarte/Jour ». Le Lane's donne : le jour, la periode de clarte entre le lever et le coucher du soleil. Le mot an-nahari est un nom defini par al- au genitif apres wa- (serment). Le nahar est specifiquement la periode de lumiere — il ne designe pas un jour de 24 heures (yawm) mais la clarte diurne qui s'oppose a la nuit. Distinction avec « Eau/Cours d'eau » : la racine n-h-r porte aussi le sens de riviere (nahr). Mais ici, le contexte oppose an-nahar a al-layl (la nuit) — c'est l'opposition nuit/jour, pas nuit/riviere. Le contexte lexical impose le sens de jour/clarte. Distinction avec « Interdire » : nahara signifie aussi reprimander, interdire. Le mot ici est un nom (an-nahar), pas un verbe — c'est le jour, pas l'acte d'interdire.",
        axe1_verset: "Le verset dit « par le jour quand il se manifeste ». Le mot an-nahari est le second element du serment, apres la nuit (v1). Le jour est defini par son action : tajalla (il s'est manifeste/devoile). Le champ lexical jour + se manifester forme l'oppose exact de nuit + couvrir. Le jour ne se contente pas d'etre la — il se devoile activement, il rend visible ce que la nuit cachait.",
        axe2_voisins: "Le verset 1 dit « la nuit quand elle couvre » et le verset 2 « le jour quand il se manifeste ». L'opposition est structurelle : nuit/jour, couvrir/devoiler. Le verset 3 ajoutera un troisieme serment (masculin/feminin). Le verset 4 conclura : les efforts sont divers. L'opposition nuit/jour est la premiere de la serie de contrastes qui fondent le constat de la diversite.",
        axe3_sourate: "Le jour qui se manifeste est l'oppose de la nuit qui couvre. Dans la logique de la sourate, le jour correspond au chemin de la generosite et de la piete (v5-7) — le chemin de celui qui donne et confirme le bien. Le jour devoile la verite comme le genereux devoile ses biens pour les partager.",
        axe4_coherence: "Le Coran oppose frequemment la nuit et le jour comme signes cosmiques : « Il a fait de la nuit un vetement et du sommeil un repos, et il a fait du jour un reveil » (25:47). L'opposition nuit/jour est un theme coranique structurant. Le mot nahar apparait 57 fois dans le Coran.",
        axe5_frequence: "Le jour est le temps de l'action et de la visibilite. Le khalifa agit dans la lumiere du jour — ses actes sont visibles. Le contraste avec la nuit rappelle que le choix entre les deux voies se fait a la lumiere, dans la clarte de la conscience."
      },
      "Eau/Cours d'eau": {
        status: "nul",
        senses: ["riviere", "cours d'eau", "fleuve"],
        proof_ctx: "Le mot nahr (riviere) existe dans le Coran mais ici le contexte oppose an-nahar a al-layl (la nuit). L'opposition nuit/riviere n'a pas de sens dans ce serment. Le contexte impose le sens de jour/clarte."
      },
      "Sens isolé/Interdire": {
        status: "nul",
        senses: ["reprimander", "interdire", "rabrouer"],
        proof_ctx: "Le verbe nahara signifie reprimander. Mais ici an-nahar est un nom au genitif dans un serment — c'est le jour, pas l'acte d'interdire. La forme nominale dans ce contexte exclut le sens verbal."
      }
    }
  }, 1);

  // ---- JLY (جلي) — id=1974 — "se manifester" ----
  // Forme: tajalla = verbe accompli forme V (il s'est manifeste/devoile)
  await upsertVWA(verse_id, 'jly', 'se manifester', {
    sense_chosen: "se manifester",
    concept_chosen: "Clarté/Manifestation",
    concepts: {
      "Clarté/Manifestation": {
        status: "retenu",
        senses: ["etre clair", "se manifester", "se devoiler", "apparaitre clairement"],
        proof_ctx: "Le sens retenu est « Clarte/Manifestation ». Le Lane's donne : etre clair, evident, manifeste ; se montrer, se devoiler. Le verbe tajalla est un accompli de la forme V (tafa''ala) de la racine j-l-w/j-l-y. La forme V exprime la reflexivite : le jour se devoile lui-meme, il fait apparaitre sa propre clarte. L'accompli marque un acte acheve — chaque matin, le jour se manifeste completement. Distinction avec « Expulser » : jaliya signifie aussi partir, s'exiler. Mais la forme V (tajalla) n'a pas ce sens — elle signifie se devoiler, se rendre manifeste. Le contexte du serment par le jour qui apparait confirme le sens de manifestation lumineuse.",
        axe1_verset: "Le verset dit « par le jour quand il se manifeste ». Le verbe tajalla est a l'accompli — l'action est achevee et complete. La forme V (reflexive) indique que le jour se devoile de lui-meme — il n'a pas besoin d'un agent exterieur pour apparaitre. Le champ lexical jour + se manifester forme une image de devoilement actif et complet. Le jour ne surgit pas passivement — il se revele, il met a nu ce que la nuit couvrait.",
        axe2_voisins: "Le verbe tajalla (se manifester) s'oppose directement a yaghsha (couvrir) du verset 1. Les deux verbes forment une paire antithetique parfaite : couvrir/devoiler. Cette opposition fonde la structure binaire de la sourate. Le verset 3 ajoutera une troisieme paire (masculin/feminin) pour completer le cadre des contrastes.",
        axe3_sourate: "Se manifester est l'action positive qui correspond au chemin du bien dans la sourate. Celui qui donne et est pieux (v5) agit dans la clarte — il se manifeste par ses actes comme le jour se manifeste par sa lumiere. A l'inverse, celui qui est avare (v8) reste dans l'obscurite de la couverture. La manifestation du jour est le modele du chemin vertueux.",
        axe4_coherence: "La racine j-l-y apparait dans le Coran pour decrire la manifestation divine : « Quand son Seigneur se manifesta (tajalla) a la montagne » (7:143). Le verbe tajalla decrit le devoilement d'une realite cachee. Dans cette sourate, c'est le jour qui se devoile — un emploi cosmique qui partage la meme racine que la manifestation divine.",
        axe5_frequence: "La manifestation est l'acte de rendre visible ce qui etait cache. Le khalifa qui agit dans la clarte se manifeste par ses actes de generosite et de piete. Le jour qui se devoile chaque matin est le rappel que la verite finit toujours par apparaitre."
      },
      "Sens isolé/Expulser": {
        status: "nul",
        senses: ["partir", "s'exiler", "expulser"],
        proof_ctx: "Le sens d'expulser vient de jaliya (quitter un lieu). La forme V tajalla n'a pas ce sens — elle signifie se devoiler, se rendre manifeste. Le contexte du serment par le jour exclut toute idee d'expulsion."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلنَّهَارِ إِذَا تَجَلَّىٰ",
    full_translation: "par le jour quand il se manifeste !",
    segments: [
      { fr: "par le jour", pos: "nom", phon: "wan-nahari", arabic: "وَٱلنَّهَارِ", word_key: "nhr", is_particle: false, sense_retenu: "jour", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule temporelle", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "il se manifeste", pos: "verbe", phon: "tajalla", arabic: "تَجَلَّىٰ", word_key: "jly", is_particle: false, sense_retenu: "se manifester", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le second serment, parallele au premier. La particule wa- introduit le serment. Le mot an-nahari (le jour) est un nom defini par al- au genitif. La particule idha (quand) introduit la proposition temporelle. Le verbe tajalla est un accompli de la forme V de la racine j-l-y. La forme V est reflexive : le sujet agit sur lui-meme. Le jour se devoile lui-meme — il rend sa propre lumiere manifeste. L'accompli marque l'action comme achevee : chaque matin, le devoilement est complet. Le Lane's (Edward Lane, 1863) donne pour tajalla : se montrer, se devoiler, apparaitre clairement.

§JUSTIFICATION§
**jour** — Le sens retenu est « clarte/jour ». Le mot « jour » traduit an-nahar comme la periode de lumiere qui s'oppose a la nuit. L'alternative « lumiere » est trop abstraite — an-nahar designe la periode temporelle, pas la lumiere en tant que telle.

**se manifeste** — Le sens retenu est « se manifester/se devoiler ». Le mot « se manifeste » traduit tajalla comme un acte reflexif de devoilement. L'alternative « apparait » est trop passif — tajalla a la forme V implique que le jour agit activement pour se montrer. L'alternative « brille » ajouterait l'idee de lumiere eclatante que le verbe ne porte pas — tajalla dit « se rendre visible », pas « eclater de lumiere ».

§CRITIQUE§
Hamidullah traduit : « et par le Jour quand il eclaire ! ». Le verbe tajalla ne signifie pas « eclairer » mais « se manifester/se devoiler ». « Eclairer » suppose une action sur un objet exterieur (eclairer quelque chose). « Se manifester » est reflexif — le jour se revele lui-meme. La nuance est importante : le texte dit que le jour se devoile, pas qu'il eclaire le monde. Notre traduction respecte la forme V reflexive du verbe.`
  }).eq('verse_id', verse_id);

  // Daily pour jly (1974) — se manifester
  await insertDaily(1974, 'se manifester', 'تَجَلَّى', 'tajalla', [
    "La verite finit toujours par se manifester.",
    "Son talent s'est manifeste des son plus jeune age.",
    "La beaute du paysage se manifeste au lever du soleil."
  ]);

  console.log('VERSET 92:2 — TERMINE');
  console.log('  nhr → "jour" | jly → "se manifester"');
  console.log('  Traduction : "Par le jour quand il se manifeste"');
}

async function verse92_3() {
  console.log('\n=== VERSET 92:3 — وَمَا خَلَقَ ٱلذَّكَرَ وَٱلْأُنثَىٰٓ ===');
  const verse_id = 6061;

  // ---- XLQ (خلق) — id=344 — "creer" ----
  // Forme: khalaqa = verbe accompli (il a cree)
  await upsertVWA(verse_id, 'xlq', 'creer', {
    sense_chosen: "creer",
    concept_chosen: "Création/Production",
    concepts: {
      "Création/Production": {
        status: "retenu",
        senses: ["creer", "creation", "faconner", "faire exister"],
        proof_ctx: "Le sens retenu est « Creation/Production ». Le Lane's donne : faire exister ce qui n'existait pas, creer a partir de rien. Le verbe khalaqa est un accompli a la troisieme personne du singulier (il a cree). L'accompli marque un acte acheve et definitif. Le sujet est implicite — c'est Celui qui a cree le masculin et le feminin. Le serment wa-ma khalaqa (par ce qui a cree / par Celui qui a cree) porte sur l'acte de creation lui-meme. Distinction avec « Lisse » : khaluqa signifie etre lisse. Le contexte de la creation du masculin et du feminin exclut ce sens. Distinction avec « Mensonge » : ikhtalaqa signifie inventer un mensonge. Le verbe ici est a la forme I (khalaqa), pas a la forme VIII — c'est creer, pas inventer un mensonge.",
        axe1_verset: "Le verset dit « par ce qui a cree le masculin et le feminin ». Le verbe khalaqa a l'accompli marque l'acte de creation comme definitif et acheve. Le relatif ma (ce qui) renvoie au Createur ou a l'acte de creation lui-meme — le texte ne nomme pas le Createur directement mais jure par son acte. Le champ lexical creer + masculin + feminin montre que la creation est fondamentalement binaire, faite de paires complementaires.",
        axe2_voisins: "Ce troisieme serment complete la serie : nuit/jour (v1-2), masculin/feminin (v3). Les trois serments partagent la structure des paires opposees. Le verset 4 conclura que les efforts humains sont divers — les paires cosmiques (nuit/jour) et biologiques (masculin/feminin) fondent la diversite des chemins humains.",
        axe3_sourate: "La creation du masculin et du feminin est le dernier serment avant le constat de la diversite (v4). La creation en paires est le fondement de la diversite des chemins humains. La sourate utilise les contrastes de la creation pour introduire le contraste moral entre le genereux et l'avare.",
        axe4_coherence: "Le Coran associe frequemment la creation aux paires : « Et de toute chose Nous avons cree une paire » (51:49). La creation du masculin et du feminin est un theme coranique fondamental. Le verbe khalaqa apparait plus de 250 fois dans le Coran.",
        axe5_frequence: "La creation en paires rappelle que le monde est structure par des complementarites. Le khalifa vit dans un monde de paires — nuit/jour, masculin/feminin — et doit choisir entre deux chemins. La creation binaire est le cadre du libre arbitre."
      },
      "Sens isolé/Lisse": {
        status: "nul",
        senses: ["etre lisse", "etre sans rugosite"],
        proof_ctx: "Le sens de lissite vient de khaluqa (etre lisse). Le contexte de la creation du masculin et du feminin exclut totalement ce sens. Le verbe est khalaqa (forme I, sens de creer), pas khaluqa."
      },
      "Sens isolé/Mensonge": {
        status: "nul",
        senses: ["inventer un mensonge", "fabriquer une histoire"],
        proof_ctx: "Le sens de mensonge vient de ikhtalaqa (forme VIII — inventer). Le verbe ici est khalaqa (forme I — creer). Les deux formes ont des sens radicalement differents. Le contexte du serment exclut le mensonge."
      }
    }
  }, 1);

  // ---- DKR (ذكر) — id=1688 — "masculin" ----
  // Forme: adh-dhakara = nom defini accusatif
  await upsertVWA(verse_id, 'dkr', 'masculin', {
    sense_chosen: "masculin",
    concept_chosen: "Masculin",
    concepts: {
      "Masculin": {
        status: "retenu",
        senses: ["male", "masculin"],
        proof_ctx: "Le sens retenu est « Masculin ». Le Lane's donne : male, masculin (d'une paire). Le mot adh-dhakara est un nom defini par al- a l'accusatif (objet direct de khalaqa). Dans ce contexte, le mot designe le masculin en tant que composante d'une paire biologique (masculin/feminin). La racine dh-k-r porte aussi le sens de mention, rappel, memoire — mais ici le contexte l'oppose a al-untha (le feminin), ce qui impose le sens de masculin/male. Distinction avec « Mention/Rappel » : le sens de rappel (dhikr) est un emploi frequent de cette racine. Mais ici, l'opposition avec al-untha (le feminin) exclut ce sens — on ne peut pas opposer le rappel au feminin.",
        axe1_verset: "Le verset dit « ce qui a cree le masculin et le feminin ». Le mot adh-dhakara est l'objet direct de khalaqa (il a cree). Le nom defini generalise : c'est le masculin en general, pas un male specifique. L'opposition adh-dhakara/al-untha forme la paire biologique fondamentale. Le champ lexical creer + masculin + feminin decrit la creation comme fondamentalement binaire.",
        axe2_voisins: "La paire masculin/feminin complete les paires nuit/jour (v1-2). Les trois serments forment une serie de contrastes : cosmique (nuit/jour) et biologique (masculin/feminin). Le verset 4 tire la conclusion de ces contrastes : les efforts sont divers.",
        axe3_sourate: "Le masculin comme composante d'une paire s'inscrit dans le theme de la dualite de la sourate. La sourate est construite sur des oppositions : nuit/jour, masculin/feminin, genereux/avare, facilite/difficulte. Le masculin est la premiere composante de la paire biologique qui illustre cette dualite fondamentale.",
        axe4_coherence: "Le Coran utilise adh-dhakar et al-untha ensemble dans plusieurs versets : « Il cree ce qu'Il veut. Il fait don de filles a qui Il veut et de garcons a qui Il veut » (42:49). La paire masculin/feminin est un theme coranique de la creation en paires.",
        axe5_frequence: "Le masculin comme element d'une paire creee rappelle que le khalifa existe dans un monde de complementarites. La diversite biologique est le fondement de la diversite des chemins — chaque etre humain a son propre chemin a parcourir."
      },
      "Mention/Rappel": {
        status: "peu_probable",
        senses: ["mentionner", "rappeler", "se souvenir"],
        proof_ctx: "Le sens de rappel (dhikr) est un emploi majeur de la racine dh-k-r dans le Coran. Mais ici, l'opposition directe avec al-untha (le feminin) impose le sens de masculin. On ne peut pas opposer le rappel au feminin — cela n'a pas de sens grammatical ni logique dans ce contexte.",
        axe1_verset: "Le verset oppose adh-dhakara a al-untha. Si dhakara signifiait « le rappel », l'opposition « le rappel et le feminin » serait grammaticalement incoherente. Le champ lexical creer + rappel + feminin ne forme pas de sens. Le contexte impose le sens de masculin.",
        axe2_voisins: "Les versets 1-2 posent des paires cosmiques (nuit/jour). Le verset 3 ajoute une paire. Si le mot signifiait « rappel », la serie serait : nuit/jour + rappel/feminin — une rupture de logique. La paire masculin/feminin maintient la coherence des contrastes.",
        axe3_sourate: "La sourate est construite sur des paires contrastees. Le sens de rappel briserait cette structure en introduisant un element non-pair dans une serie de paires. La coherence thematique exige le sens de masculin.",
        axe4_coherence: "Le Coran utilise dhikr (rappel) et dhakar (male) dans des contextes distincts. Quand dhakar est oppose a untha, le sens est toujours masculin/feminin — c'est une paire fixe dans le lexique coranique.",
        axe5_frequence: "Le sens de rappel, bien que frequemment atteste pour cette racine dans le Coran, ne s'applique pas ici en raison du contexte syntaxique qui impose la paire biologique masculin/feminin."
      }
    }
  }, 2);

  // ---- ANTH (أنث) — id=960 — "feminin" ----
  // Forme: al-untha = nom defini accusatif
  await upsertVWA(verse_id, 'anth', 'feminin', {
    sense_chosen: "feminin",
    concept_chosen: "Féminin/Femelle",
    concepts: {
      "Féminin/Femelle": {
        status: "retenu",
        senses: ["femelle", "feminin"],
        proof_ctx: "Le sens retenu est « Feminin/Femelle ». Le Lane's donne : femelle, du sexe feminin. Le mot al-untha est un nom defini par al- a l'accusatif, second objet de khalaqa apres adh-dhakara. La racine '-n-th porte exclusivement le sens de feminin/femelle dans le Coran — il n'y a pas d'ambiguite. L'untha est le second element de la paire biologique creee. Le nom defini generalise : c'est le feminin en general, pas une femelle specifique.",
        axe1_verset: "Le verset dit « ce qui a cree le masculin et le feminin ». Le mot al-untha est le second objet de la creation, apres adh-dhakara. La conjonction wa (et) lie les deux elements de la paire. Le nom defini par al- generalise : c'est tout le feminin, pas une femelle particuliere. Le champ lexical creer + masculin + et + feminin forme la paire biologique complete.",
        axe2_voisins: "Le feminin complete la paire biologique du verset 3. Cette paire s'ajoute a la paire cosmique nuit/jour des versets 1-2. Les serments sont complets apres le verset 3. Le verset 4 tire la conclusion de ces trois serments : les efforts sont divers — comme la creation est faite de paires differentes.",
        axe3_sourate: "Le feminin comme second element de la paire biologique contribue au theme de la dualite qui structure toute la sourate. La creation en paires est le modele cosmique et biologique de la diversite des chemins humains que la sourate va decrire (v5-10).",
        axe4_coherence: "Le Coran utilise al-untha dans plusieurs contextes : la creation en paires (53:45), l'attribution des filles aux anges par les polytheistes (53:27), et la designation du sexe biologique. Le mot est toujours sans ambiguite — il designe le feminin.",
        axe5_frequence: "Le feminin comme composante de la paire creee rappelle que la creation est faite de complementarites. La diversite biologique fonde la diversite des parcours humains — chaque etre, masculin ou feminin, a son propre chemin vers le bien ou vers le mal."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "وَمَا خَلَقَ ٱلذَّكَرَ وَٱلْأُنثَىٰٓ",
    full_translation: "par Celui qui a cree le male et la femelle !",
    segments: [
      { fr: "par", pos: "particule", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "ce qui", pos: "relatif", phon: "ma", arabic: "مَا", is_particle: true, position: 0 },
      { fr: "a cree", pos: "verbe", phon: "khalaqa", arabic: "خَلَقَ", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 1 },
      { fr: "le male", pos: "nom", phon: "adh-dhakara", arabic: "ٱلذَّكَرَ", word_key: "dkr", is_particle: false, sense_retenu: "masculin", position: 2 },
      { fr: "et la femelle", pos: "nom", phon: "wal-untha", arabic: "وَٱلْأُنثَىٰٓ", word_key: "anth", is_particle: false, sense_retenu: "feminin", position: 3, prefix_particle: "wa" }
    ],
    translation_explanation: `§DEMARCHE§
Le troisieme serment. La particule wa- introduit le serment. Le relatif ma peut signifier « ce qui » (objet) ou « Celui qui » (personne) — les deux sont grammaticalement possibles. Le verbe khalaqa est un accompli (il a cree) dont le sujet est implicite, reference par ma. Les deux objets sont adh-dhakara (le masculin) et al-untha (le feminin), lies par wa (et). Les deux noms sont definis par al- et a l'accusatif (objets directs). Le Lane's (Edward Lane, 1863) donne pour dhakar : male, du sexe masculin. Pour untha : femelle, du sexe feminin. Les deux mots forment une paire biologique fondamentale.

§JUSTIFICATION§
**a cree** — Le sens retenu est « creer ». Le verbe khalaqa a l'accompli marque l'acte de creation comme acheve et definitif. Pas d'alternative — le sens est univoque dans ce contexte.

**le male** — Le sens retenu est « masculin ». Le mot « male » traduit adh-dhakara comme composante biologique d'une paire. L'alternative « l'homme » est ecartee car adh-dhakar ne designe pas l'etre humain (insan) mais le sexe biologique masculin.

**la femelle** — Le sens retenu est « feminin/femelle ». Le mot « femelle » traduit al-untha comme second element de la paire biologique. L'alternative « la femme » est ecartee pour la meme raison — al-untha designe le sexe biologique, pas la femme en tant que personne.

§CRITIQUE§
Hamidullah traduit : « et par ce qu'Il a cree, le male et la femelle ! ». La structure de Hamidullah ajoute une virgule apres « cree » qui separe le verbe de ses objets directs. Le texte arabe ne fait pas cette separation — khalaqa adh-dhakara wal-untha est une proposition continue. Notre traduction « par Celui qui a cree le male et la femelle » respecte la continuite syntaxique.`
  }).eq('verse_id', verse_id);

  // Daily pour anth (960) — feminin
  await insertDaily(960, 'feminin', 'أُنْثَى', 'untha', [
    "Cette espece animale presente un dimorphisme entre male et femelle.",
    "La forme feminine du mot est differente en arabe.",
    "L'examen a revele que le bebe est de sexe feminin."
  ]);

  console.log('VERSET 92:3 — TERMINE');
  console.log('  xlq → "creer" | dkr → "masculin" | anth → "feminin"');
  console.log('  Traduction : "Par Celui qui a cree le male et la femelle"');
}

async function verse92_4() {
  console.log('\n=== VERSET 92:4 — إِنَّ سَعْيَكُمْ لَشَتَّىٰ ===');
  const verse_id = 6062;

  // ---- SEY (سعي) — id=757 — "effort" ----
  // Forme: sa'yakum = nom en idafa (votre effort)
  await upsertVWA(verse_id, 'sey', 'effort', {
    sense_chosen: "effort",
    concept_chosen: "Effort/Marche",
    concepts: {
      "Effort/Marche": {
        status: "retenu",
        senses: ["effort", "marche", "action", "entreprise"],
        proof_ctx: "Le sens retenu est « Effort/Marche ». Le Lane's donne : marcher d'un pas rapide, se hater, s'efforcer, faire des efforts. Le mot sa'yakum est un nom verbal (masdar) en idafa avec le pronom kum (votre) : « votre effort ». Le sa'y designe l'ensemble des actions et des efforts qu'une personne deploie dans sa vie. Ce n'est pas un effort ponctuel mais un parcours global — la somme de ce qu'on entreprend. Le nom en idafa avec le pronom de la deuxieme personne du pluriel generalise : « votre effort a tous » — chacun a son propre effort. La racine s-'-y porte l'idee de mouvement et d'action deliberee.",
        axe1_verset: "Le verset dit « certes votre effort est divers ». Le mot sa'yakum est le sujet de la phrase nominale renforcee par inna (certes). Le nom en idafa avec -kum (votre) s'adresse a tous les etres humains. Le sa'y est un nom verbal qui designe l'effort global d'une vie — pas un acte isole mais la direction generale de l'existence. Le champ lexical effort + votre + divers forme le constat central de la sourate : les etres humains ne font pas les memes efforts, ne suivent pas les memes chemins.",
        axe2_voisins: "Le verset 4 tire la conclusion des trois serments (v1-3). Apres avoir jure par la nuit, le jour et la creation en paires, le texte affirme que les efforts humains sont divers. Les contrastes cosmiques (nuit/jour) et biologiques (masculin/feminin) fondent le constat de la diversite des chemins. Les versets 5-7 decriront le premier chemin (le genereux), les versets 8-10 le second (l'avare).",
        axe3_sourate: "L'effort est le mot-cle qui relie les serments a la description des deux chemins. La sourate dit que les efforts sont divers — puis elle montre en quoi ils different. Le chemin du genereux (v5-7) et le chemin de l'avare (v8-10) sont les deux formes de sa'y que la sourate oppose. L'effort est le fil conducteur de toute la sourate.",
        axe4_coherence: "Le Coran utilise la racine s-'-y dans plusieurs contextes : le pelerinage (« celui qui y fait le sa'y » — 2:158), l'effort vers Dieu (« celui qui s'efforce vers elle en etant croyant » — 17:19), et la corruption (« ils s'efforcent de corrompre » — 5:64). Le sa'y est toujours un effort delibere et oriente, pas un mouvement aleatoire.",
        axe5_frequence: "L'effort est la responsabilite du khalifa. Chaque etre humain deploie son effort dans une direction — vers le bien ou vers le mal. Le constat que les efforts sont divers n'est pas un jugement mais un fait : la diversite des chemins est inherente a la condition humaine."
      }
    }
  }, 1);

  // ---- STT (شتت) — id=2613 — "divers" ----
  // Forme: la-shatta = nom indéfini avec la- d'insistance
  await upsertVWA(verse_id, 'stt', 'divers', {
    sense_chosen: "divers",
    concept_chosen: "Diversité/Différence",
    concepts: {
      "Diversité/Différence": {
        status: "retenu",
        senses: ["divers", "varies", "differents", "multiples"],
        proof_ctx: "Le sens retenu est « Diversite/Difference ». Le Lane's donne : divers, de differentes sortes, varies, disperses. Le mot shatta est un adjectif/nom qui qualifie le sa'y (effort) comme etant de natures differentes. La particule la- (certes, assurement) renforce l'affirmation — les efforts ne sont pas simplement varies, ils le sont assurement. Le mot shatta vient de la racine sh-t-t qui porte l'idee de separation et de divergence. Les efforts ne sont pas seulement multiples — ils divergent, ils vont dans des directions opposees. Distinction avec « Dispersion/Separation » : la dispersion implique un eclatement desordonne. Le mot shatta dans ce contexte decrit une diversite orientee — les efforts vont dans des directions differentes mais identifiables (le bien et le mal). Ce n'est pas un eclatement chaotique mais une divergence binaire.",
        axe1_verset: "Le verset dit « certes votre effort est divers ». Le mot la-shatta est le predicat (khabar) de la phrase nominale renforcee par inna. La particule la- ajoute une insistance : assurement divers. Le mot qualifie le sa'y (effort) comme etant fondamentalement varie d'une personne a l'autre. Le champ lexical certes + effort + assurement + divers forme une affirmation solennelle et appuyee. La double insistance (inna + la-) montre que cette diversite est un fait majeur, pas anecdotique.",
        axe2_voisins: "Le constat de la diversite (v4) est la charniere entre les serments (v1-3) et la description des deux chemins (v5-10). Le mot shatta annonce la bifurcation : les versets suivants montreront en quoi les efforts divergent — le chemin du don et de la piete (v5-7) versus le chemin de l'avarice et de l'autosuffisance (v8-10). La diversite n'est pas aleatoire — elle est binaire.",
        axe3_sourate: "La diversite des efforts est la these de la sourate. Tout ce qui suit developpe cette diversite en montrant les deux chemins opposes. Le mot shatta est le pivot conceptuel de la sourate — sans la diversite des efforts, il n'y aurait pas besoin de decrire deux chemins. La sourate existe pour montrer que les efforts divergent et que cette divergence a des consequences.",
        axe4_coherence: "La racine sh-t-t apparait rarement dans le Coran. Le mot shatta dans ce verset est un des rares emplois de cette racine. Son sens de diversite/divergence est unique dans le lexique coranique. Le Coran utilise plus souvent mukhtalif (different) ou mutafarriq (separe) pour exprimer la diversite — shatta apporte une nuance de divergence directionnelle.",
        axe5_frequence: "La diversite des efforts est le fondement du libre arbitre. Le khalifa n'est pas predestine a un seul chemin — ses efforts peuvent aller dans des directions opposees. Le constat que les efforts sont divers est aussi le constat que le choix est reel — chacun est responsable de la direction de son effort."
      },
      "Dispersion/Séparation": {
        status: "probable",
        senses: ["disperser", "separer", "eparpiller"],
        proof_ctx: "Le sens de dispersion est present dans la racine sh-t-t. Le Lane's donne aussi : disperser, separer, eparpiller. Cependant, dans ce verset, le mot qualifie les efforts humains — il ne decrit pas un eclatement physique mais une divergence de directions. La dispersion implique un mouvement centrifuge desordonne, tandis que la diversite decrite ici est structuree en deux chemins opposes (v5-10). Le contexte oriente vers la diversite orientee plutot que vers la dispersion chaotique.",
        axe1_verset: "Le verset dit que les efforts sont shatta. Si le sens etait « disperses/eparpilles », cela impliquerait que les efforts sont desorganises et partent dans toutes les directions sans logique. Or les versets suivants (v5-10) montrent exactement deux directions, pas un eparpillement. Le contexte impose une diversite structuree, pas une dispersion chaotique.",
        axe2_voisins: "Les versets 5-10 decrivent exactement deux chemins, pas une multiplicite desordonnee. La structure binaire de la suite (premier chemin v5-7, second chemin v8-10) confirme que shatta designe une divergence en deux directions, pas un eclatement en multiples fragments.",
        axe3_sourate: "La sourate est construite sur des paires opposees (nuit/jour, masculin/feminin, genereux/avare). La dispersion desordonnee contredirait cette structure binaire. La diversite orientee en deux voies est coherente avec la structure de la sourate.",
        axe4_coherence: "La racine sh-t-t porte les deux sens (diversite et dispersion) dans le lexique arabe. Dans le Coran, le contexte determine lequel prevaloir. La structure binaire des versets suivants tranche en faveur de la diversite orientee.",
        axe5_frequence: "La dispersion serait un constat de chaos — les efforts partiraient dans toutes les directions sans sens. La diversite est un constat de choix — les efforts vont dans des directions identifiables. Le Coran decrit un monde de choix, pas de chaos."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
    full_translation: "Vos efforts sont assurement divers.",
    segments: [
      { fr: "certes", pos: "particule", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 0 },
      { fr: "votre effort", pos: "nom", phon: "sa'yakum", arabic: "سَعْيَكُمْ", word_key: "sey", is_particle: false, sense_retenu: "effort", position: 1 },
      { fr: "est assurement divers", pos: "adjectif", phon: "la-shatta", arabic: "لَشَتَّىٰ", word_key: "stt", is_particle: false, sense_retenu: "divers", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale renforcee par inna (certes). La particule inna introduit une affirmation insistante et solennelle. Le mot sa'yakum est un nom verbal (masdar) de la racine s-'-y en idafa avec le pronom suffixe -kum (votre) a l'accusatif (ism inna). Le Lane's (Edward Lane, 1863) donne pour sa'y : effort, action deliberee, marche rapide. Le predicat (khabar) est la-shatta : la particule la- (certes/assurement) renforce encore l'affirmation, et shatta est un adjectif/nom signifiant divers, de differentes sortes. La double insistance inna + la- est un procede grammatical arabe qui marque la certitude absolue.

§JUSTIFICATION§
**effort** — Le sens retenu est « effort ». Le mot « effort » traduit sa'y comme l'ensemble des actions deliberees d'une personne. L'alternative « marche » est trop physique — le sa'y ici n'est pas une marche a pied mais un parcours de vie. L'alternative « entreprise » est acceptable mais moins courant.

**divers** — Le sens retenu est « divers/varies ». Le mot « divers » traduit shatta comme une pluralite de directions. L'alternative « disperses » impliquerait un desordre que le texte ne suggere pas — la sourate montre ensuite deux directions precises, pas un eparpillement. L'alternative « differents » est acceptable mais « divers » est plus fidele a l'idee de variete directionnelle.

§CRITIQUE§
Hamidullah traduit : « Vos efforts sont divergents ». Le mot « divergents » est une bonne traduction qui capte l'idee de directions opposees. Notre traduction donne « divers » qui est plus neutre — le texte arabe shatta dit « varies/de differentes sortes » sans necessairement impliquer la divergence active. Les deux traductions sont defensibles. La nuance est mineure et ne change pas le sens du verset.`
  }).eq('verse_id', verse_id);

  // Daily pour sey (757) — effort
  await insertDaily(757, 'effort', 'سَعْي', "sa'y", [
    "Son effort a fini par payer apres des mois de travail.",
    "L'effort quotidien est la cle de la reussite.",
    "Ils ont fourni un effort considerable pour terminer a temps."
  ]);

  console.log('VERSET 92:4 — TERMINE');
  console.log('  sey → "effort" | stt → "divers"');
  console.log('  Traduction : "Vos efforts sont assurement divers"');
}

async function verse92_5() {
  console.log('\n=== VERSET 92:5 — فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ ===');
  const verse_id = 6063;

  // ---- ETY (عطو) — id=2040 — "donner" ----
  // Forme: a'ta = verbe accompli forme IV (il a donne)
  await upsertVWA(verse_id, 'ety', 'donner', {
    sense_chosen: "donner",
    concept_chosen: "Don/Attribution",
    concepts: {
      "Don/Attribution": {
        status: "retenu",
        senses: ["donner", "accorder", "attribuer", "offrir"],
        proof_ctx: "Le sens retenu est « Don/Attribution ». Le Lane's donne : donner, accorder, attribuer a quelqu'un. Le verbe a'ta est un accompli de la forme IV (af'ala) de la racine '-t-y. La forme IV est causative : elle signifie faire parvenir, faire donner — c'est le don actif et delibere. L'accompli marque l'action comme achevee — celui qui a donne l'a fait de maniere definitive. Le verbe est sans objet explicite — le texte ne dit pas ce qui est donne, ce qui generalise le don a toute forme de generosite. Distinction avec « Venue/Arrivee » : ata/ya'ti (forme I) signifie venir. Mais a'ta (forme IV) signifie donner — les deux formes ont des sens radicalement differents. La forme IV ajoute la causation : faire venir vers l'autre, donc donner.",
        axe1_verset: "Le verset dit « quant a celui qui a donne et s'est premuni ». Le verbe a'ta est le premier des deux actes qui definissent le premier chemin. Le don est mentionne en premier — c'est l'acte fondateur du chemin vertueux. L'absence d'objet direct generalise : donner sans specification de ce qu'on donne. Que ce soit de l'argent, du temps, de l'attention — le don en lui-meme est ce qui compte. L'accompli marque un engagement definitif dans le don.",
        axe2_voisins: "Le verset 5 ouvre la description du premier chemin (v5-7). Le don (a'ta) est suivi de la piete (ittaqa, v5b) et de la confirmation du bien (saddaqa, v6). Les trois actes forment une progression : donner → se premunir → confirmer le bien. Le verset 7 donne la consequence : la facilite. Le don est le point de depart de cette chaine vertueuse.",
        axe3_sourate: "Le don est le premier acte du chemin vertueux dans la sourate. Il s'oppose directement a l'avarice (bakhila, v8) du second chemin. La sourate est construite sur cette opposition : donner vs retenir. Le don est l'acte qui ouvre la voie de la facilite (v7), tandis que l'avarice ouvre la voie de la difficulte (v10).",
        axe4_coherence: "Le Coran associe le don a la vertu dans de nombreux versets : « Ceux qui depensent dans la voie de Dieu » (2:261), « Donnez de ce que Nous vous avons attribue » (2:254). Le don est un acte coranique fondamental de justice et de generosite. Le verbe a'ta est utilise plus de 250 fois dans le Coran.",
        axe5_frequence: "Le don est la premiere responsabilite du khalifa envers les autres. Donner, c'est partager les bienfaits que la creation met a disposition. Le khalifa qui donne reproduit a l'echelle humaine la generosite de la creation elle-meme."
      },
      "Venue/Arrivée": {
        status: "peu_probable",
        senses: ["venir", "arriver", "parvenir"],
        proof_ctx: "Le sens de venue vient de ata (forme I — venir). Mais ici, le verbe est a'ta (forme IV — donner). Les deux formes sont morphologiquement distinctes : la forme IV ajoute un alif initial et change le sens de « venir » a « faire venir vers l'autre, donner ». Le contexte du verset (donner + etre pieux) confirme le sens de don.",
        axe1_verset: "Le verset parle de celui qui a'ta wa-ttaqa — s'il s'agissait de « venu et s'est premuni », la phrase serait grammaticalement possible mais semantiquement faible. Le premier chemin est defini par des actes moraux positifs (donner, etre pieux, confirmer le bien) — « venir » ne s'insere pas dans cette serie morale.",
        axe2_voisins: "Le second chemin (v8) utilise bakhila (il a ete avare) comme oppose de a'ta. L'opposition donner/etre avare est parfaite. L'opposition venir/etre avare n'a pas de sens logique. Le contexte impose le sens de don.",
        axe3_sourate: "La sourate oppose deux attitudes morales. « Venir » n'est pas une attitude morale — c'est un mouvement physique. Le sens de don est le seul qui s'insere dans la logique morale de la sourate.",
        axe4_coherence: "Le Coran utilise la forme IV a'ta specifiquement pour le don dans des dizaines de versets. La forme I ata pour la venue est un verbe different. Le contexte coranique distingue clairement les deux formes.",
        axe5_frequence: "La venue est un mouvement neutre sans valeur morale. Le don est un acte delibere de generosite. Dans une sourate qui oppose le genereux a l'avare, seul le sens de don est pertinent."
      }
    }
  }, 1);

  // ---- WQY (وقي) — id=277 — "se premunir" ----
  // Forme: ittaqa = verbe accompli forme VIII (il s'est premuni/a ete pieux)
  await upsertVWA(verse_id, 'wqy', 'se premunir', {
    sense_chosen: "se premunir",
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["se proteger", "se premunir", "etre pieux", "craindre", "se garder de"],
        proof_ctx: "Le sens retenu est « Protection/Preservation ». Le Lane's donne : se garder, se proteger, se premunir contre le danger. Le verbe ittaqa est un accompli de la forme VIII (ifta'ala) de la racine w-q-y. La forme VIII est reflexive : le sujet se protege lui-meme. Le sens premier est la self-preservation — se mettre a l'abri du mal. L'emploi coranique en a fait le verbe de la piete (taqwa) : celui qui se premunit contre le mal en suivant les commandements divins. L'accompli marque un engagement definitif dans cette attitude de precaution. Le verbe est intransitif ici — sans complement, il designe l'attitude generale de piete et de prudence.",
        axe1_verset: "Le verset dit « celui qui a donne et s'est premuni ». Le verbe ittaqa est le second acte du premier chemin, apres le don (a'ta). La conjonction wa (et) lie les deux actes comme inseparables : donner et se premunir vont ensemble. Le champ lexical donner + se premunir forme le portrait du vertueux — il est genereux envers les autres et prudent envers lui-meme. L'absence de complement generalise : se premunir contre tout mal, pas contre un mal specifique.",
        axe2_voisins: "Le verset 6 ajoutera un troisieme acte : confirmer le bien (saddaqa bil-husna). La progression est : donner → se premunir → confirmer le bien. Les trois actes forment la description complete du premier chemin. Le verset 7 donnera la consequence : la voie sera facilitee. La piete (ittaqa) est le maillon central entre le don et la confirmation.",
        axe3_sourate: "La piete est le second pilier du chemin vertueux dans la sourate. Elle s'oppose a l'autosuffisance (istaghna, v8b) du second chemin. L'opposition est structurelle : se premunir (reconnitre qu'on a besoin de protection) vs se croire autosuffisant (nier ce besoin). La piete est l'attitude de celui qui sait qu'il a besoin d'aide.",
        axe4_coherence: "La racine w-q-y et la forme VIII ittaqa sont parmi les plus frequentes du Coran. Le concept de taqwa (piete/crainte) apparait plus de 250 fois. Le Coran fait de la taqwa la qualite centrale du croyant — c'est l'attitude de vigilance et de precaution face au mal.",
        axe5_frequence: "La piete comme auto-protection rappelle que le khalifa est responsable de sa propre preservation morale. Se premunir, c'est reconnitre sa vulnerabilite et prendre les mesures necessaires. Le khalifa pieux est celui qui ne se croit pas invulnerable."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ",
    full_translation: "Quant a celui qui donne et se premunit,",
    segments: [
      { fr: "quant a", pos: "particule", phon: "fa-amma", arabic: "فَأَمَّا", is_particle: true, position: 0 },
      { fr: "celui qui", pos: "relatif", phon: "man", arabic: "مَنْ", is_particle: true, position: 0 },
      { fr: "donne", pos: "verbe", phon: "a'ta", arabic: "أَعْطَىٰ", word_key: "ety", is_particle: false, sense_retenu: "donner", position: 1 },
      { fr: "et se premunit", pos: "verbe", phon: "wattaqa", arabic: "وَٱتَّقَىٰ", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 2, prefix_particle: "wa" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset ouvre la description du premier chemin avec la construction fa-amma... man (quant a celui qui...). La particule fa- marque la consequence des serments precedents. La particule amma introduit une distinction : « quant a ». Le relatif man (celui qui) introduit une description de personne. Le verbe a'ta est un accompli de la forme IV de la racine '-t-y — il a donne. La forme IV est causative : faire parvenir, donner activement. Le verbe ittaqa est un accompli de la forme VIII de la racine w-q-y — il s'est premuni. La forme VIII est reflexive : le sujet se protege lui-meme. Les deux verbes a l'accompli marquent des engagements definitifs — celui qui a donne et s'est premuni l'a fait de maniere irreversible.

§JUSTIFICATION§
**donne** — Le sens retenu est « don ». Le mot « donne » traduit a'ta comme un acte de generosite delibere. L'alternative « accorde » est trop formel. L'alternative « offre » ajoute une nuance de gratuite que le texte ne specifie pas necessairement.

**se premunit** — Le sens retenu est « protection/preservation ». Le mot « se premunit » traduit ittaqa comme une auto-protection contre le mal. L'alternative « craint Dieu » est une interpretation theologique — le texte ne mentionne pas Dieu dans ce verbe. L'alternative « est pieux » est acceptable mais perd la dimension d'auto-protection.

§CRITIQUE§
Hamidullah traduit : « Celui qui donne et est pieux ». Notre traduction donne « celui qui donne et se premunit ». La difference est dans le second verbe : « est pieux » est une interpretation qui perd le sens reflexif de ittaqa (se proteger soi-meme). « Se premunit » conserve l'idee que la piete est d'abord un acte d'auto-preservation — se garder du mal. La nuance est significative : la piete n'est pas un etat passif mais un acte actif de protection.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:5 — TERMINE');
  console.log('  ety → "donner" | wqy → "se premunir"');
  console.log('  Traduction : "Quant a celui qui donne et se premunit"');
}

async function verse92_6() {
  console.log('\n=== VERSET 92:6 — وَصَدَّقَ بِٱلْحُسْنَىٰ ===');
  const verse_id = 6064;

  // ---- SDQ (صدق) — id=384 — "confirmer" ----
  // Forme: saddaqa = verbe accompli forme II (il a confirme/tenu pour vrai) + bi
  await upsertVWA(verse_id, 'sdq', 'confirmer', {
    sense_chosen: "confirmer",
    concept_chosen: "Vérité/Sincérité",
    concepts: {
      "Vérité/Sincérité": {
        status: "retenu",
        senses: ["etre vrai", "etre sincere", "confirmer", "tenir pour vrai"],
        proof_ctx: "Le sens retenu est « Verite/Sincerite ». Le Lane's donne : etre veridique, dire la verite, confirmer la veracite de quelque chose. Le verbe saddaqa est un accompli de la forme II (fa''ala) de la racine s-d-q. La forme II est intensive et causative : confirmer activement, tenir pour vrai avec conviction. La preposition bi (en, a propos de) introduit l'objet de la confirmation : al-husna (la meilleure chose). Saddaqa bi signifie « confirmer la verite de, tenir pour vrai ». L'accompli marque un engagement definitif dans cette confirmation. Distinction avec « Amitie » : sadiqa signifie etre ami. Mais ici le verbe est a la forme II (intensive), pas a la forme I simple — c'est confirmer, pas etre ami. Distinction avec « Don/Aumone » : tasaddaqa signifie faire l'aumone (forme V). Le verbe ici est saddaqa bi (forme II + bi) — confirmer la verite de, pas faire l'aumone.",
        axe1_verset: "Le verset dit « et confirme la meilleure issue ». Le verbe saddaqa est le troisieme acte du premier chemin, apres donner (v5a) et se premunir (v5b). La preposition bi relie la confirmation a son objet : al-husna (la meilleure). Le champ lexical confirmer + la meilleure forme l'acte de foi du vertueux — il tient pour vrai que la meilleure issue est reelle. L'accompli marque une conviction achevee et ferme.",
        axe2_voisins: "Le verset 6 complete la description du premier chemin commencee au verset 5. La progression est : donner (a'ta) → se premunir (ittaqa) → confirmer le bien (saddaqa bil-husna). Le verset 7 donnera la consequence : la voie sera facilitee. La confirmation du bien est le dernier acte avant la recompense. Le verset 9 opposera kadh-dhaba bil-husna (il a dementir la meilleure issue) comme l'acte oppose.",
        axe3_sourate: "Confirmer la meilleure issue est l'aboutissement du chemin vertueux. Apres le don (acte exterieur) et la piete (acte interieur), la confirmation est l'adhesion intellectuelle et spirituelle au bien. La sourate montre que le chemin vertueux combine trois dimensions : la generosite materielle, la prudence morale et la conviction du bien.",
        axe4_coherence: "La racine s-d-q est fondamentale dans le Coran. Le sidq (verite/sincerite) est la qualite des prophetes et des vertueux. Le verbe saddaqa bi apparait dans plusieurs versets pour decrire la confirmation de la verite revelee. Le Coran fait de la confirmation du bien un acte aussi important que le don et la piete.",
        axe5_frequence: "Confirmer la meilleure issue est l'acte de foi du khalifa. Il ne se contente pas de donner et d'etre prudent — il croit activement que le bien est reel et que la meilleure issue existe. Cette conviction est le moteur de son engagement dans le don et la piete."
      },
      "Amitié": {
        status: "nul",
        senses: ["etre ami", "amitie"],
        proof_ctx: "Le sens d'amitie vient de sadiqa (forme I — etre ami). Le verbe ici est saddaqa (forme II — confirmer) suivi de bi (particule de complement). La forme II et la preposition bi excluent le sens d'amitie — on ne dit pas « il a ete ami a propos de la meilleure issue »."
      },
      "Don/Aumône": {
        status: "peu_probable",
        senses: ["faire l'aumone", "donner en charite"],
        proof_ctx: "Le sens d'aumone vient de tasaddaqa (forme V — faire l'aumone) ou sadaqa (nom — aumone). Le verbe ici est saddaqa bi (forme II + preposition bi), qui signifie confirmer la verite de quelque chose. La presence de bi oriente vers la confirmation, pas vers le don. De plus, le don a deja ete mentionne avec a'ta au verset 5 — repeter le don sous une autre forme serait redondant.",
        axe1_verset: "Le verset dit saddaqa bil-husna. La preposition bi (a propos de, en) oriente le verbe vers la confirmation : « il a confirme la meilleure issue ». Si le sens etait l'aumone, la preposition bi serait superflue — on ne dit pas « il a fait l'aumone a propos de la meilleure ».",
        axe2_voisins: "Le don est deja mentionne au verset 5 (a'ta). Le verset 6 ajoute un acte different : la confirmation. Si saddaqa signifiait aussi « donner », la progression donner → se premunir → donner serait repetitive. La progression donner → se premunir → confirmer est plus coherente et complete.",
        axe3_sourate: "La sourate oppose confirmer (saddaqa, v6) a dementir (kadhdhaba, v9). Cette opposition verite/mensonge n'existe qu'avec le sens de confirmation. Si saddaqa signifiait « faire l'aumone », l'opposition avec kadhdhaba (dementir) ne fonctionnerait plus.",
        axe4_coherence: "Le Coran utilise saddaqa bi dans le sens de confirmer la verite de quelque chose dans plusieurs versets. La construction forme II + bi est distincte de la forme V tasaddaqa qui designe l'aumone.",
        axe5_frequence: "L'aumone est un acte materiel qui double le don deja mentionne. La confirmation est un acte intellectuel et spirituel qui complete le tableau : donner (acte materiel) + se premunir (acte moral) + confirmer (acte de conviction)."
      }
    }
  }, 1);

  // ---- HSN (حسن) — id=574 — "meilleure" ----
  // Forme: al-husna = superlatif feminin defini (la meilleure chose/issue)
  await upsertVWA(verse_id, 'hsn', 'meilleure', {
    sense_chosen: "meilleure",
    concept_chosen: "Excellence morale",
    concepts: {
      "Excellence morale": {
        status: "retenu",
        senses: ["excellence", "vertu", "la meilleure conduite", "la plus haute moralite"],
        proof_ctx: "Le sens retenu est « Excellence morale ». Le Lane's donne : husn — beaute, bonte, excellence. Le mot al-husna est le superlatif feminin defini de la racine h-s-n — il signifie la meilleure chose, la plus belle issue. La forme superlatif (fu'la) indique le degre le plus eleve de la qualite. Le nom est defini par al- — c'est la meilleure issue par excellence, pas une bonne issue parmi d'autres. Dans le contexte du verset, al-husna est l'objet de la confirmation (saddaqa bi) — c'est ce que le vertueux tient pour vrai. Al-husna designe la meilleure issue possible — la recompense ultime, le resultat le plus excellent de la piete et du don. L'excellence morale est le sens qui convient car al-husna est ici un ideal confirme par la foi, pas simplement un objet beau. Distinction avec « Beaute/Bonte » : la beaute est une qualite esthetique. Al-husna dans ce contexte designe un ideal moral et spirituel — la meilleure issue que le vertueux croit reelle. La beaute physique n'est pas pertinente ici.",
        axe1_verset: "Le verset dit « et il a confirme la meilleure issue ». Le mot al-husna est l'objet de la confirmation via la preposition bi. Le superlatif feminin defini forme un absolu : il n'y a pas de meilleure issue que celle-ci. Le champ lexical confirmer + la meilleure forme l'acte de foi dans l'excellence. Le vertueux ne confirme pas une bonne chose — il confirme la meilleure, l'ideale, l'absolue. Cette conviction est ce qui distingue le vertueux de l'avare.",
        axe2_voisins: "Le verset 9 opposera kadhdhaba bil-husna — « il a dementi la meilleure issue ». La meme al-husna est l'objet du dementi dans le second chemin. L'opposition confirmer/dementir la meilleure issue est le pivot moral de la sourate. Celui qui confirme al-husna recoit la facilite (v7), celui qui la dement recoit la difficulte (v10).",
        axe3_sourate: "Al-husna est l'ideal que toute la sourate defend. Le chemin vertueux mene a la confirmation de cet ideal, le chemin de l'avarice mene a son rejet. La sourate est construite autour de cette al-husna comme enjeu central — c'est ce que le vertueux accepte et que l'avare refuse.",
        axe4_coherence: "Le mot husna apparait dans le Coran comme designation de la meilleure issue : « Ceux qui ont fait le bien auront la meilleure recompense (al-husna) et un surplus » (10:26). Al-husna est un terme coranique pour la recompense ultime et l'excellence morale. Le Coran utilise ce mot comme ideal positif par excellence.",
        axe5_frequence: "L'excellence morale est l'horizon du khalifa. Il ne se contente pas d'etre bon — il vise le meilleur (al-husna). Confirmer al-husna, c'est croire que l'excellence est possible et reelle. Le khalifa qui confirme al-husna s'engage a viser le plus haut."
      },
      "Beauté/Bonté": {
        status: "probable",
        senses: ["beaute", "bonte", "agrement", "grace"],
        proof_ctx: "Le sens de beaute/bonte est le sens premier de la racine h-s-n. Le Lane's donne husn comme la beaute et la bonte. Cependant, dans ce contexte, al-husna est l'objet d'une confirmation (saddaqa bi) — on confirme un ideal, une verite, pas une beaute. Al-husna ici designe la meilleure issue morale et spirituelle, pas la beaute esthetique. Le sens d'excellence morale est plus precis dans ce contexte. La beaute/bonte reste un sens de fond de la racine, mais l'emploi specifique dans ce verset oriente vers l'ideal moral plutot que vers la beaute physique.",
        axe1_verset: "Le verset dit « il a confirme la meilleure ». Si al-husna signifiait simplement « la beaute », la phrase dirait « il a confirme la beaute » — ce qui est possible mais vague. L'excellence morale donne un objet plus precis a la confirmation : il a confirme que la meilleure issue (morale) est reelle.",
        axe2_voisins: "Le verset 9 oppose le dementi de al-husna. Si al-husna etait « la beaute », le dementi de la beaute n'aurait pas de sens moral fort. Le dementi de l'excellence morale a un sens beaucoup plus puissant — c'est le refus de croire que le bien ultime existe.",
        axe3_sourate: "La sourate oppose deux chemins moraux. L'excellence morale comme objet de confirmation s'insere parfaitement dans cette logique morale. La beaute esthetique serait hors sujet dans une sourate sur la generosite et l'avarice.",
        axe4_coherence: "Le Coran utilise al-husna dans des contextes moraux et spirituels (10:26, 41:35). Le sens d'excellence morale predomine dans ces emplois coraniques.",
        axe5_frequence: "La beaute est une qualite passive. L'excellence morale est un ideal actif. Le contexte d'une sourate sur les actes (donner, se premunir, confirmer) favorise l'ideal actif."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَصَدَّقَ بِٱلْحُسْنَىٰ",
    full_translation: "et confirme la meilleure issue,",
    segments: [
      { fr: "et", pos: "conjonction", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "confirme", pos: "verbe", phon: "saddaqa", arabic: "صَدَّقَ", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 1 },
      { fr: "la meilleure issue", pos: "nom", phon: "bil-husna", arabic: "بِٱلْحُسْنَىٰ", word_key: "hsn", is_particle: false, sense_retenu: "excellence", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset continue la description du premier chemin. La conjonction wa (et) lie ce verset au precedent — les trois actes (donner, se premunir, confirmer) forment un tout. Le verbe saddaqa est un accompli de la forme II de la racine s-d-q. La forme II est intensive : confirmer avec force, tenir pour vrai avec conviction. La preposition bi (en, a propos de) introduit l'objet de la confirmation. Le Lane's (Edward Lane, 1863) donne pour saddaqa bi : confirmer la veracite de, tenir pour vrai. Le mot al-husna est le superlatif feminin defini de la racine h-s-n — la meilleure chose, la plus excellente issue. Le superlatif feminin (fu'la) designe le degre absolu de l'excellence.

§JUSTIFICATION§
**confirme** — Le sens retenu est « confirmer/tenir pour vrai ». Le mot « confirme » traduit saddaqa bi comme un acte de conviction. L'alternative « croit en » est acceptable mais « confirme » est plus actif — ce n'est pas une croyance passive mais une affirmation active de la verite. L'alternative « fait l'aumone pour » changerait le sens en don materiel, deja couvert par a'ta au verset 5.

**la meilleure issue** — Le sens retenu est « excellence morale ». Le mot « la meilleure issue » traduit al-husna comme l'ideal le plus eleve que le vertueux confirme. L'alternative « la beaute » est trop esthetique — le contexte est moral. L'alternative « la recompense » est une interpretation — al-husna dit « la meilleure » sans specifier de quoi.

§CRITIQUE§
Hamidullah traduit : « et declare veridique la plus belle recompense ». Le mot « recompense » n'est pas dans le texte — al-husna dit « la meilleure/la plus belle » sans specifier. L'ajout de « recompense » est une interpretation exegetique. Notre traduction donne « la meilleure issue » qui reste plus ouvert. Le mot « veridique » est fidele a saddaqa mais notre « confirme » est plus naturel en francais courant.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:6 — TERMINE');
  console.log('  sdq → "confirmer" | hsn → "meilleure"');
  console.log('  Traduction : "Et confirme la meilleure issue"');
}

async function verse92_7() {
  console.log('\n=== VERSET 92:7 — فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ ===');
  const verse_id = 6065;

  // ---- YSR (يسر) — id=968 — "faciliter" ----
  // Forme: sanuyassiruhu = sa- (futur) + nu- (nous) + yassiru (faciliter, forme II) + -hu (lui)
  // Al-yusra = superlatif feminin defini "la plus facile/aisee"
  await upsertVWA(verse_id, 'ysr', 'faciliter', {
    sense_chosen: "faciliter",
    concept_chosen: "Facilité/Aisance",
    concepts: {
      "Facilité/Aisance": {
        status: "retenu",
        senses: ["facilite", "aisance", "rendre facile", "simplifier"],
        proof_ctx: "Le sens retenu est « Facilite/Aisance ». Le Lane's donne : etre facile, aise, commode ; faciliter, rendre facile. Le verbe nuyassiruhu est un inaccompli de la forme II de la racine y-s-r, precede de la particule sa- (futur) et du pronom sujet nu- (nous). La forme II est causative : rendre facile, faciliter. Le suffixe -hu (lui) est le complement d'objet — le vertueux decrit aux versets 5-6 est celui qui sera facilite. La particule sa- marque le futur — c'est une promesse. Le complement lil-yusra (vers la facilite) utilise la preposition li- (vers, pour) et le superlatif feminin al-yusra (la plus facile). Le verset contient deux emplois de la racine y-s-r : le verbe nuyassiru (nous faciliterons) et le nom al-yusra (la facilite). Cette repetition de la racine dans le meme verset amplifie l'idee de facilite totale.",
        axe1_verset: "Le verset dit « nous lui faciliterons la voie la plus aisee ». Le verbe sanuyassiruhu est une promesse divine a la premiere personne du pluriel (nous de majeste). Le futur (sa-) marque l'engagement : c'est une promesse, pas un constat. Le complement lil-yusra specifie la destination : la voie la plus aisee. Le champ lexical nous faciliterons + lui + la plus aisee forme une promesse de facilitation totale. La repetition de la racine y-s-r (faciliter + facilite) cree un effet d'insistance : tout sera facile pour celui qui donne, se premunit et confirme le bien.",
        axe2_voisins: "Le verset 7 est la consequence des versets 5-6. La structure est : donner + se premunir + confirmer le bien → la voie sera facilitee. Le verset 10 opposera la difficulte (sanuyassiruhu lil-'usra — nous lui faciliterons la voie la plus difficile) pour l'avare. L'opposition facilite/difficulte est la consequence logique de l'opposition don/avarice.",
        axe3_sourate: "La facilite est la recompense du premier chemin dans la sourate. La structure de la sourate est : actes vertueux (v5-6) → consequence positive (v7) / actes vicieux (v8-9) → consequence negative (v10). La facilite n'est pas un cadeau gratuit — elle est la consequence directe du don, de la piete et de la confirmation du bien. Le chemin vertueux mene naturellement a la facilite.",
        axe4_coherence: "Le Coran associe frequemment la facilite a la piete : « Dieu veut pour vous la facilite, Il ne veut pas pour vous la difficulte » (2:185). La facilite divine est un theme coranique majeur. La racine y-s-r apparait dans de nombreux versets pour exprimer la bienveillance divine envers les pieux.",
        axe5_frequence: "La facilite est la recompense naturelle du khalifa vertueux. Celui qui donne, se premunit et confirme le bien vit dans la facilite — ses actes sont en harmonie avec l'ordre de la creation. La facilite n'est pas l'absence d'effort mais l'alignement entre l'effort et sa direction juste."
      }
    }
  }, 1);

  await sb.from('verse_analyses').update({
    translation_arab: "فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ",
    full_translation: "Nous lui faciliterons la voie la plus aisee.",
    segments: [
      { fr: "alors", pos: "particule", phon: "fa", arabic: "فَ", is_particle: true, position: 0 },
      { fr: "Nous lui faciliterons", pos: "verbe", phon: "sa-nuyassiruhu", arabic: "سَنُيَسِّرُهُۥ", word_key: "ysr", is_particle: false, sense_retenu: "faciliter", position: 1 },
      { fr: "la voie la plus aisee", pos: "nom", phon: "lil-yusra", arabic: "لِلْيُسْرَىٰ", word_key: "ysr", is_particle: false, sense_retenu: "facilite", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est la consequence des actes decrits aux versets 5-6. La particule fa- (alors, donc) marque cette consequence logique. Le verbe sanuyassiruhu est compose de : sa- (particule du futur proche), nu- (pronom sujet « nous » — le nous de majeste divine), yassiru (inaccompli de la forme II de y-s-r — faciliter, rendre facile), et -hu (pronom suffixe « lui »). La forme II est causative : rendre facile ce qui ne l'etait pas necessairement. Le complement lil-yusra est compose de : li- (preposition « vers, pour »), al-yusra (superlatif feminin defini de y-s-r — la plus facile). Le Lane's (Edward Lane, 1863) donne pour yassara : rendre facile, faciliter, aplanir. Le superlatif al-yusra designe la voie la plus aisee de toutes. La double occurrence de la racine y-s-r (verbe + nom) dans le meme verset cree un effet d'amplification.

§JUSTIFICATION§
**faciliterons** — Le sens retenu est « faciliter/rendre facile ». Le mot « faciliterons » traduit nuyassiru comme un acte de facilitation divine. L'alternative « rendrons facile » est plus explicite mais moins fluide en francais.

**la plus aisee** — Le sens retenu est « facilite/aisance ». Le mot « la plus aisee » traduit al-yusra comme le superlatif de la facilite. L'alternative « la plus facile » est acceptable et quasi-synonyme. « La plus aisee » est choisi pour sa fluidite.

§CRITIQUE§
Hamidullah traduit : « Nous lui faciliterons la voie au plus grand bonheur ». Le mot « bonheur » n'est pas dans le texte — al-yusra signifie « la plus facile/aisee », pas « le bonheur ». L'ajout de « bonheur » est une interpretation qui va au-dela du texte. Al-yusra parle de facilite, pas de felicite. Notre traduction reste fidele au texte en disant « la voie la plus aisee ».`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:7 — TERMINE');
  console.log('  ysr → "faciliter" / "facilite"');
  console.log('  Traduction : "Nous lui faciliterons la voie la plus aisee"');
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  PIPELINE SOURATE 92 (Al-Layl) — PARTIE 1 (v1-7)      ║');
  console.log('╚══════════════════════════════════════════════════════════╝');

  await verse92_1();
  await verse92_2();
  await verse92_3();
  await verse92_4();
  await verse92_5();
  await verse92_6();
  await verse92_7();

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  PARTIE 1 TERMINEE (versets 1-7)                        ║');
  console.log('║  Versets couverts : 92:1-7                               ║');
  console.log('║  Racines traitees : lyl, ghw, nhr, jly, xlq, dkr,       ║');
  console.log('║    anth, sey, stt, ety, wqy, sdq, hsn, ysr              ║');
  console.log('║  Daily inserees : ghw(306), jly(1974), anth(960),        ║');
  console.log('║    sey(757)                                              ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
}

main().catch(console.error);
