// Pipeline Sourate 91 (Ash-Shams / Le Soleil) — Partie 1: Versets 1-5
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
// CONTEXTE SOURATE 91 (Ash-Shams / Le Soleil)
// ================================================================
// Structure : 7 serments cosmiques (v1-7), inspiration de l'ame (v8),
// constat succes/echec (v9-10), recit de Thamud (v11-15).
// Theme : L'ame humaine recoit le potentiel du bien et du mal —
// celui qui la purifie reussit, celui qui la corrompt echoue.
// L'exemple de Thamud illustre cet echec.
// Voisines : S90 (Al-Balad) avant, S92 (Al-Layl) apres.

async function verse91_1() {
  console.log('\n=== VERSET 91:1 — وَٱلشَّمْسِ وَضُحَىٰهَا ===');
  const verse_id = 6044;

  // ---- SHMS (شمس) — id=1117 — "soleil" ----
  // Forme: al-shamsi = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'shms', 'soleil', {
    sense_chosen: "soleil",
    concept_chosen: "Lumière/Astre",
    concepts: {
      "Lumière/Astre": {
        status: "retenu",
        senses: ["soleil", "astre lumineux", "source de lumiere"],
        proof_ctx: "Le sens retenu est « Lumiere/Astre ». Le Lane's (Edward Lane, 1863) donne pour shamsa : le soleil, l'astre lumineux du jour. Le mot al-shamsi est un nom defini par al- au genitif apres la particule de serment wa-. Le soleil est le premier element d'une serie de sept serments cosmiques qui ouvrent la sourate. Le serment par le soleil donne au propos une solennite maximale — le soleil est la reference de la lumiere et du temps diurne. Distinction avec « Animal/Faune » : le Lane's mentionne que shams peut designer un petit lezard (shamsiyya). Ce sens est strictement zoologique et n'a aucun rapport avec le contexte des serments cosmiques. Le texte jure par un phenomene celeste, pas par un animal.",
        axe1_verset: "Le verset dit « par le soleil et son eclat ». Le mot al-shamsi est le premier objet du serment, immediatement suivi de wa-duhaha (et son eclat). Le soleil n'est pas nomme seul — il est qualifie par son eclat matinal. Le champ lexical soleil + eclat forme une image de lumiere rayonnante et de debut de journee. La particule wa- entre les deux elements lie le soleil a son action : produire de la clarte. Le serment par le soleil place toute la sourate sous le signe de la lumiere qui revele.",
        axe2_voisins: "Le verset 2 continue avec la lune qui suit le soleil. Le verset 3 ajoute le jour qui manifeste, le verset 4 la nuit qui couvre. Les sept serments (v1-7) forment une progression du cosmique (soleil, lune) vers l'humain (l'ame, v7). Le soleil ouvre cette serie comme la source premiere de la lumiere — tout ce qui suit en decoule. La lune qui suit le soleil (v2) prolonge cette lumiere dans la nuit.",
        axe3_sourate: "Le soleil est le premier serment d'une sourate qui parle de la purification de l'ame (v9) et de sa corruption (v10). La lumiere du soleil prefigure la purete — celui qui purifie son ame agit comme le soleil qui eclaire. A l'inverse, la corruption de l'ame (v10) correspond a l'obscurcissement. Le soleil est le modele cosmique de ce que l'ame devrait etre : une source de clarte.",
        axe4_coherence: "Le Coran mentionne le soleil dans de nombreux contextes : comme signe de la creation (« le soleil et la lune selon un calcul precis » — 55:5), comme phenomene soumis (« le soleil court vers un lieu de repos qui lui est propre » — 36:38), et comme objet de serment (91:1). Le soleil est toujours presente comme un phenomene cosmique ordonne et regulier, jamais comme un objet d'adoration. Le serment par le soleil dans cette sourate suit le modele coranique de jurer par les phenomenes naturels pour introduire un enseignement.",
        axe5_frequence: "Le soleil comme phenomene cosmique rappelle que le monde est eclaire par une source de lumiere constante et fiable. Le khalifa vit dans un monde structure par la lumiere du soleil — cette lumiere est le cadre dans lequel il exerce sa responsabilite. La purification de l'ame (v9) est l'equivalent moral de la lumiere solaire : rendre clair ce qui est obscur, reveler ce qui est cache."
      },
      "Animal/Faune": {
        status: "nul",
        senses: ["lezard", "animal a sang froid"],
        proof_ctx: "Le Lane's mentionne shamsiyya comme un petit lezard. Le contexte des serments cosmiques (soleil, lune, jour, nuit, ciel, terre, ame) exclut totalement un sens zoologique. Le texte jure par des phenomenes celestes et naturels, pas par des animaux."
      }
    }
  }, 1);

  // ---- DHUH (ضحو) — id=2138 — "eclat" ----
  // Forme: duhaha = nom + suffixe possessif -ha (son eclat / sa clarte matinale)
  await upsertVWA(verse_id, 'dhuh', 'eclat', {
    sense_chosen: "eclat",
    concept_chosen: "Clarté/Apparition",
    concepts: {
      "Clarté/Apparition": {
        status: "retenu",
        senses: ["eclat", "clarte matinale", "lumiere du debut de journee", "apparition lumineuse"],
        proof_ctx: "Le sens retenu est « Clarte/Apparition ». Le Lane's (Edward Lane, 1863) donne pour duha : la clarte du soleil quand il s'eleve, la lumiere du debut de matinee, l'eclat de la lumiere solaire. Le mot duhaha est un nom avec le suffixe possessif -ha (son eclat, referant au soleil qui est feminin en arabe). Le duha designe specifiquement la lumiere que le soleil produit quand il est deja leve — pas le lever lui-meme, mais la clarte qui en resulte. Distinction avec « Repas/Temps » : le Lane's donne aussi le sens de repas du matin (ghada' ad-duha) et de temps de la matinee. Mais le suffixe -ha (son) rattache le duha directement au soleil — c'est l'eclat du soleil, pas un moment de la journee ni un repas. Le possessif impose un lien physique entre le soleil et son eclat. Distinction avec « Sacrifice » : le Lane's donne le sens de sacrifice matinal (ad-dahiyya). Ce sens est un emploi derive lie au moment du sacrifice (le matin). Le contexte du serment cosmique exclut ce sens rituel. Distinction avec « Lieu/Geographie » : le Lane's donne le sens de terrain decouvert, espace ouvert. Ce sens est secondaire et ne s'applique pas au contexte du soleil et de son eclat.",
        axe1_verset: "Le verset dit « par le soleil et son eclat ». Le mot duhaha est lie au soleil par le possessif -ha (son). Le duha n'est pas independant — c'est une propriete du soleil, sa clarte quand il est haut. Le champ lexical soleil + eclat forme une paire indissociable : le soleil est defini par ce qu'il produit. L'eclat est la manifestation visible de la presence du soleil — sans le soleil, pas d'eclat. Le serment porte donc sur le soleil ET sur ce qu'il fait : eclairer le monde.",
        axe2_voisins: "Le verset 2 dit « par la lune quand elle le suit ». La lune suit le soleil comme l'eclat suit le soleil — c'est une progression logique. Le verset 3 « par le jour quand il la manifeste » prolonge le theme de la lumiere qui se repand. Les quatre premiers serments forment une serie lumineuse : soleil → eclat → lune → jour → manifestation. Chaque serment ajoute un aspect de la lumiere naturelle.",
        axe3_sourate: "L'eclat du soleil est la premiere qualite nommee dans la sourate. La sourate parle de l'ame et de sa purification (v9-10) — l'eclat prefigure la purete de l'ame. L'eclat matinal est le moment ou le monde passe de l'obscurite a la clarte, comme l'ame passe de la corruption a la purification. Le duha est un etat de clarte complete — pas un lever progressif mais une lumiere deja deployee.",
        axe4_coherence: "Le Coran utilise duha dans la sourate 93 (Ad-Duha) : « par la clarte du jour (ad-duha) ». Le duha est un moment de lumiere complete et de stabilite — apres le lever agite du soleil, la clarte s'installe. Le Coran oppose ad-duha a la nuit (93:2 — « par la nuit quand elle s'etend »). Le duha est systematiquement associe a la lumiere diurne dans le Coran. Dans cette sourate, le possessif -ha rattache le duha specifiquement au soleil, ce qui en fait un eclat direct et non un moment temporel.",
        axe5_frequence: "L'eclat du soleil rappelle que la lumiere naturelle est un don permanent et fiable. Le khalifa vit dans un monde eclaire — la clarte du duha est le cadre de ses actions quotidiennes. La purification de l'ame (v9) est l'equivalent interieur de l'eclat exterieur : une ame purifiee rayonne comme le soleil dans son eclat matinal."
      },
      "Repas/Temps": {
        status: "nul",
        senses: ["repas du matin", "moment de la matinee", "heure du duha"],
        proof_ctx: "Le Lane's donne le sens de temps de la matinee et de repas matinal. Mais le suffixe possessif -ha (son) rattache le mot directement au soleil : c'est l'eclat du soleil, pas un moment horaire. On ne dit pas « le repas du soleil » ni « l'heure du soleil » dans ce contexte de serment cosmique."
      },
      "Sacrifice": {
        status: "nul",
        senses: ["sacrifice matinal", "offrande du matin"],
        proof_ctx: "Le Lane's donne ad-dahiyya (sacrifice du matin). Ce sens est un emploi rituel derive du moment de la matinee. Le contexte du serment cosmique (soleil, lune, jour, nuit) exclut toute reference sacrificielle. Le possessif -ha (son eclat) impose un lien physique avec le soleil."
      },
      "Lieu/Géographie": {
        status: "nul",
        senses: ["terrain decouvert", "espace ouvert", "plaine"],
        proof_ctx: "Le Lane's donne le sens de terrain decouvert expose au soleil. Ce sens geographique ne s'applique pas au contexte du serment par le soleil et son eclat. Le possessif -ha rattache le duha au soleil, pas a un lieu."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلشَّمْسِ وَضُحَىٰهَا",
    full_translation: "par le Soleil et par sa clarte",
    segments: [
      { fr: "Par le soleil", pos: "nom", phon: "wal-shamsi", arabic: "وَٱلشَّمْسِ", word_key: "shms", is_particle: false, sense_retenu: "soleil", position: 1, prefix_particle: "wa" },
      { fr: "et son eclat", pos: "nom", phon: "wa-duhaha", arabic: "وَضُحَىٰهَا", word_key: "dhuh", is_particle: false, sense_retenu: "eclat", position: 2, prefix_particle: "wa" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est un serment introduit par la particule wa- (par) suivie d'un nom au genitif. Le mot al-shamsi (le soleil) est un nom defini par al- au genitif — c'est le premier objet du serment. La seconde partie wa-duhaha ajoute un second element lie au premier : duhaha est un nom avec le suffixe possessif -ha (son) qui renvoie au soleil (feminin en arabe). Le Lane's (Edward Lane, 1863) donne pour duha : la clarte du soleil quand il est deja leve, l'eclat lumineux du debut de journee. Le suffixe possessif cree un lien direct entre le soleil et sa propriete lumineuse. Le serment porte a la fois sur l'astre et sur ce qu'il produit : la clarte.

§JUSTIFICATION§
**soleil** — Le sens retenu est « soleil ». Le mot al-shamsi designe exclusivement le soleil comme astre lumineux. Aucune alternative credible — le contexte des serments cosmiques (soleil, lune, jour, nuit) impose ce sens.

**eclat** — Le sens retenu est « eclat/clarte matinale ». Le mot « eclat » traduit duhaha comme la lumiere rayonnante que le soleil produit. L'alternative « clarte » est acceptable mais « eclat » rend mieux l'intensite de la lumiere solaire directe. L'alternative « matinee » est ecartee car le suffixe -ha (son) rattache le mot au soleil — c'est l'eclat du soleil, pas un moment de la journee pris isolement.

§CRITIQUE§
Hamidullah traduit : « Par le Soleil et par sa clarte ! ». La traduction de Hamidullah est fidele au texte. Le mot « clarte » est un bon equivalent de duha. Notre traduction utilise « eclat » pour marquer l'intensite lumineuse que porte le mot duha — le Lane's decrit la lumiere du soleil quand il est deja haut, une lumiere pleine et eclatante, pas simplement une clarte diffuse. Les traductions courantes donnent sensiblement le meme sens.`
  }).eq('verse_id', verse_id);

  // Daily pour shms (1117) — soleil
  await insertDaily(1117, 'soleil', 'شَمْس', 'shams', [
    "Le soleil se leve a l'est chaque matin sans exception.",
    "Les tournesols tournent leur visage vers le soleil tout au long de la journee.",
    "Apres trois jours de pluie, le soleil est enfin revenu et les enfants sont sortis jouer."
  ]);

  console.log('VERSET 91:1 — TERMINE');
  console.log('  shms → "soleil" | dhuh → "eclat"');
  console.log('  Traduction : "Par le soleil et son eclat"');
}

async function verse91_2() {
  console.log('\n=== VERSET 91:2 — وَٱلْقَمَرِ إِذَا تَلَىٰهَا ===');
  const verse_id = 6045;

  // ---- QMR (قمر) — id=1783 — "lune" ----
  // Forme: al-qamari = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'qmr', 'lune', {
    sense_chosen: "lune",
    concept_chosen: "Astre/Lumière",
    concepts: {
      "Astre/Lumière": {
        status: "retenu",
        senses: ["lune", "astre nocturne", "lumiere reflechie"],
        proof_ctx: "Le sens retenu est « Astre/Lumiere ». Le Lane's (Edward Lane, 1863) donne pour qamar : la lune, l'astre de la nuit. Le mot al-qamari est un nom defini par al- au genitif apres la particule de serment wa-. La lune est le second element des serments cosmiques, apres le soleil (v1). Le qamar designe specifiquement la lune comme corps celeste visible — l'astre qui eclaire la nuit. Distinction avec « Temps » : le Lane's donne qamar dans le sens de mois lunaire (al-qamariyya). Mais ici le contexte du serment cosmique (soleil, lune, jour, nuit) impose l'objet celeste, pas une unite de temps. Le texte jure par des phenomenes visibles, pas par des divisions calendaires.",
        axe1_verset: "Le verset dit « par la lune quand elle le suit ». Le mot al-qamari est le second objet de serment apres al-shamsi (v1). La lune est qualifiee par l'action de suivre (talaha) — elle ne jure pas par la lune en soi mais par la lune en relation avec le soleil. Le champ lexical lune + suivre forme une image de succession ordonnee : la lune prend le relais du soleil. Le serment par la lune qui suit le soleil montre un ordre cosmique ou chaque element a sa place et sa fonction.",
        axe2_voisins: "Le verset 1 a jure par le soleil et son eclat. Le verset 2 ajoute la lune qui suit le soleil — la lumiere nocturne succede a la lumiere diurne. Le verset 3 ajoutera le jour qui manifeste, le verset 4 la nuit qui couvre. La progression est logique : soleil → lune → jour → nuit. La lune est le deuxieme maillon de la chaine cosmique.",
        axe3_sourate: "La lune qui suit le soleil s'inscrit dans le theme de l'ordre cosmique qui precede l'enseignement sur l'ame (v7-10). Les phenomenes celestes sont ordonnes — le soleil eclaire, la lune suit, le jour manifeste, la nuit couvre. Cet ordre cosmique est le modele de l'ordre moral : comme la lune suit sa course, l'ame humaine a un chemin a suivre (purification vs corruption).",
        axe4_coherence: "Le Coran associe frequemment le soleil et la lune comme paire cosmique : « le soleil et la lune selon un calcul precis » (55:5), « Il a assujetti le soleil et la lune » (14:33). La paire soleil/lune est un theme coranique structurant. Le serment par les deux astres dans cette sourate suit ce modele de la paire celeste ordonnee. Le Coran presente toujours la lune comme un signe de l'ordre divin, pas comme un objet d'adoration.",
        axe5_frequence: "La lune comme astre qui suit le soleil rappelle que le monde est structure par des successions ordonnees. Le khalifa vit dans un monde ou chaque element a sa place — la lune ne precede pas le soleil, elle le suit. Cette succession ordonnee est le cadre dans lequel l'etre humain exerce sa responsabilite. La purete de l'ame (v9) est l'adhesion a cet ordre naturel."
      },
      "Temps": {
        status: "nul",
        senses: ["mois lunaire", "cycle mensuel", "calendrier lunaire"],
        proof_ctx: "Le Lane's donne qamar dans le sens de mois lunaire. Le contexte du serment cosmique (soleil, lune, jour, nuit, ciel) impose le corps celeste, pas une unite de temps. Le texte jure par des phenomenes visibles et naturels, pas par des divisions calendaires abstraites."
      }
    }
  }, 1);

  // ---- TLW (تلو) — id=730 — "suivre" ----
  // Forme: talaha = verbe accompli forme I, 3eme personne feminin (elle l'a suivi)
  await upsertVWA(verse_id, 'tlw', 'suivre', {
    sense_chosen: "suivre",
    concept_chosen: "Récitation/Succession",
    concepts: {
      "Récitation/Succession": {
        status: "retenu",
        senses: ["suivre", "succeder a", "venir apres", "reciter", "lire a haute voix"],
        proof_ctx: "Le sens retenu est « suivre/succeder ». Le Lane's (Edward Lane, 1863) donne pour tala : suivre, venir apres quelqu'un ou quelque chose, succeder. Le verbe talaha est un accompli de la forme I a la troisieme personne du feminin avec le suffixe -ha (elle l'a suivi — le feminin renvoie a la lune, al-qamar etant parfois traite au feminin dans la poesie, ou par attraction avec le pronom -ha qui renvoie au soleil/shamsi qui est feminin). L'accompli marque l'action comme achevee et certaine : la lune a suivi le soleil, c'est un fait accompli et repetable. Le sens de « reciter » que porte aussi cette racine est un emploi derive de « suivre » — reciter c'est suivre un texte mot apres mot. Dans ce contexte cosmique, la lune suit le soleil dans le ciel, elle ne recite rien. Le contexte impose le sens physique de succession celeste.",
        axe1_verset: "Le verset dit « par la lune quand elle le suit ». Le verbe talaha exprime une succession physique — la lune vient apres le soleil dans le ciel. L'accompli marque l'action comme un fait etabli et certain. La particule idha (quand) introduit la condition temporelle : le serment porte sur la lune au moment precis ou elle succede au soleil. Le champ lexical lune + suivre + soleil forme une image de relais cosmique ordonne. La lune ne brille pas par elle-meme au hasard — elle prend le relais du soleil selon un ordre precis.",
        axe2_voisins: "Le verset 1 a presente le soleil et son eclat. Le verset 2 montre la lune qui suit — la succession est explicite. Le verset 3 ajoutera le jour qui manifeste (le soleil, feminise par le pronom -ha). Le verset 4 dira la nuit qui couvre. La serie suit une logique de relais : soleil → lune → jour → nuit. Chaque element succede au precedent selon un ordre naturel immuable.",
        axe3_sourate: "Suivre est l'action qui definit la lune dans cette sourate. La sourate parle de l'ame et de sa capacite a choisir entre purification et corruption (v9-10). La lune qui suit le soleil sans deviance est le modele cosmique de l'ame qui suit le bon chemin. Le verbe tala implique un mouvement ordonne et fidele — la lune ne devie pas de sa course. La suite de la sourate montrera que l'ame humaine, elle, peut devier (v10).",
        axe4_coherence: "La racine t-l-w apparait dans le Coran avec les deux sens : reciter (« quand on leur recite Nos versets » — 8:31) et suivre (« puis il suivit une voie » — 18:85 selon certaines lectures). Le sens de succession physique est atteste dans la langue arabe classique. Dans cette sourate, le sujet est la lune et l'objet est le soleil — le sens de recitation est exclu car un astre ne recite pas. Le contexte cosmique impose la succession celeste.",
        axe5_frequence: "Suivre, dans le sens de succeder a quelqu'un dans un mouvement ordonne, rappelle que le monde cosmique fonctionne par relais. Le khalifa observe que la lune suit le soleil sans faillir — cette regularite est le cadre naturel de sa propre vie. La purification de l'ame (v9) implique de suivre un ordre, comme la lune suit le soleil."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلْقَمَرِ إِذَا تَلَىٰهَا",
    full_translation: "par la lune quand elle le suit",
    segments: [
      { fr: "Par la lune", pos: "nom", phon: "wal-qamari", arabic: "وَٱلْقَمَرِ", word_key: "qmr", is_particle: false, sense_retenu: "lune", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule temporelle", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "elle le suit", pos: "verbe", phon: "talaha", arabic: "تَلَىٰهَا", word_key: "tlw", is_particle: false, sense_retenu: "suivre", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le second serment. La particule wa- introduit le serment par la lune. Le mot al-qamari (la lune) est un nom defini par al- au genitif. La particule idha (quand) introduit la proposition temporelle qui qualifie la lune par son action. Le verbe talaha est un accompli de la forme I de la racine t-l-w avec le suffixe pronominal -ha (elle l'a suivi — le pronom renvoie au soleil). L'accompli marque l'action comme un fait acheve et certain. Le Lane's (Edward Lane, 1863) donne pour tala : suivre, venir apres, succeder a. La racine porte aussi le sens de « reciter » (suivre un texte mot a mot), mais ici le sujet est un astre, pas un lecteur — le sens physique de succession s'impose.

§JUSTIFICATION§
**lune** — Le sens retenu est « lune ». Le mot al-qamar designe l'astre nocturne. Aucune alternative credible dans ce contexte de serment cosmique.

**elle le suit** — Le sens retenu est « suivre/succeder ». Le verbe « suit » traduit talaha comme une succession physique ordonnee — la lune vient apres le soleil dans le ciel. L'alternative « recite » est ecartee car un astre ne recite rien ; le sens de recitation est un emploi derive de « suivre un texte ». L'alternative « poursuit » est ecartee car la poursuite impliquerait une intention de rattraper, alors que tala decrit simplement le fait de venir apres dans un ordre etabli.

§CRITIQUE§
Hamidullah traduit : « par la lune quand elle le suit ». La traduction de Hamidullah est identique a la notre. Les traductions courantes donnent sensiblement le meme sens. Le verbe tala dans ce contexte est unanimement compris comme « suivre » et non « reciter ».`
  }).eq('verse_id', verse_id);

  // Daily pour qmr (1783) — lune
  await insertDaily(1783, 'lune', 'قَمَر', 'qamar', [
    "La lune etait pleine hier soir et eclairait tout le jardin.",
    "Les marees sont directement influencees par la position de la lune.",
    "Il observait la lune avec un telescope depuis sa terrasse."
  ]);

  console.log('VERSET 91:2 — TERMINE');
  console.log('  qmr → "lune" | tlw → "suivre"');
  console.log('  Traduction : "Par la lune quand elle le suit"');
}

async function verse91_3() {
  console.log('\n=== VERSET 91:3 — وَٱلنَّهَارِ إِذَا جَلَّىٰهَا ===');
  const verse_id = 6046;

  // ---- NHR (نهر) — id=397 — "jour" ----
  // Forme: an-nahari = nom defini au genitif (serment par wa-)
  // Deja analyse en s92:2 — NOUVEAUX axes pour ce contexte
  await upsertVWA(verse_id, 'nhr', 'jour', {
    sense_chosen: "jour",
    concept_chosen: "Clarté/Jour",
    concepts: {
      "Clarté/Jour": {
        status: "retenu",
        senses: ["jour", "clarte", "lumiere diurne"],
        proof_ctx: "Le sens retenu est « Clarte/Jour ». Le Lane's (Edward Lane, 1863) donne : le jour, la periode de clarte entre le lever et le coucher du soleil. Le mot an-nahari est un nom defini par al- au genitif apres wa- (serment). Le nahar designe la periode de lumiere — pas un jour de 24 heures (yawm) mais la clarte diurne elle-meme. Ici, le jour est qualifie par l'action de manifester (jallaha) — il manifeste la lumiere du soleil. Distinction avec « Eau/Cours d'eau » : la racine n-h-r porte aussi le sens de riviere (nahr). Le contexte des serments cosmiques (soleil, lune, jour, nuit) exclut ce sens. Distinction avec « Interdire » : nahara signifie aussi reprimander. Le mot ici est un nom au genitif, pas un verbe — c'est le jour, pas l'acte d'interdire.",
        axe1_verset: "Le verset dit « par le jour quand il la manifeste ». Le mot an-nahari est le troisieme objet de serment. Le jour est qualifie par le verbe jallaha (il l'a manifestee) — le jour ne se contente pas d'exister, il agit sur le soleil en rendant sa lumiere manifeste. Le champ lexical jour + manifester forme une image d'activation de la lumiere. Le jour est l'agent qui rend la lumiere du soleil visible a la terre — sans le jour, la lumiere du soleil ne se deploie pas pleinement.",
        axe2_voisins: "Le verset 1 a jure par le soleil et son eclat, le verset 2 par la lune qui suit. Le verset 3 ajoute le jour qui manifeste — c'est la troisieme etape de la serie lumineuse. Le verset 4 ajoutera la nuit qui couvre — l'oppose direct. La progression soleil → lune → jour → nuit forme un cycle complet de lumiere et d'obscurite. Le jour est le moment ou la lumiere solaire atteint sa pleine manifestation.",
        axe3_sourate: "Le jour qui manifeste la lumiere s'inscrit dans le theme de la revelation et de la clarte. La sourate oppose la purification de l'ame (v9) a sa corruption (v10). Le jour qui manifeste est le modele cosmique de la purification — rendre visible, rendre clair, ôter le voile. Le jour agit comme l'ame purifiee : il revele au lieu de cacher.",
        axe4_coherence: "Le Coran utilise le jour (nahar) comme signe cosmique dans de nombreux versets : « la succession de la nuit et du jour est un signe pour ceux qui reflechissent » (3:190). Le jour est toujours associe a la clarte, a l'activite et a la vie. Dans cette sourate, le jour n'est pas passif — il manifeste la lumiere. Le Coran donne au jour un role actif dans la revelation de la lumiere.",
        axe5_frequence: "Le jour comme agent de manifestation rappelle que la clarte n'est pas un accident — elle est le resultat d'un processus naturel ordonne. Le khalifa vit dans un monde ou le jour manifeste la lumiere chaque matin. La purification de l'ame est l'equivalent interieur de cette manifestation quotidienne : rendre visible ce qui est bon en soi."
      },
      "Eau/Cours d'eau": {
        status: "nul",
        senses: ["riviere", "cours d'eau", "fleuve"],
        proof_ctx: "Le mot nahr (riviere) existe dans le Coran mais ici le contexte oppose le jour (an-nahar) a la nuit (al-layl, v4). L'opposition nuit/riviere n'a pas de sens dans cette serie de serments cosmiques."
      },
      "Sens isolé/Interdire": {
        status: "nul",
        senses: ["reprimander", "interdire", "rabrouer"],
        proof_ctx: "Le verbe nahara signifie reprimander. Mais ici an-nahar est un nom au genitif dans un serment — c'est le jour, pas l'acte d'interdire. La forme nominale dans ce contexte exclut le sens verbal."
      }
    }
  }, 1);

  // ---- JLY (جلي) — id=1974 — "manifester" ----
  // Forme: jallaha = verbe accompli forme II + suffixe -ha (il l'a manifestee/clarifiee)
  // La forme II (fa''ala) est causative/intensive : rendre manifeste
  // -ha renvoie au soleil (al-shams, feminin)
  // Deja analyse en s92:2 — NOUVEAUX axes pour ce contexte
  await upsertVWA(verse_id, 'jly', 'manifester', {
    sense_chosen: "manifester",
    concept_chosen: "Clarté/Manifestation",
    concepts: {
      "Clarté/Manifestation": {
        status: "retenu",
        senses: ["etre clair", "manifester", "rendre visible", "devoiler", "clarifier"],
        proof_ctx: "Le sens retenu est « Clarte/Manifestation ». Le Lane's (Edward Lane, 1863) donne pour jalla : etre clair, evident, manifeste ; rendre visible, devoiler. Le verbe jallaha est un accompli de la forme II (fa''ala) de la racine j-l-w/j-l-y avec le suffixe -ha. La forme II est causative : jalla = etre clair, jalla (forme II) = rendre clair, manifester. Le suffixe -ha renvoie au soleil (al-shams, feminin) — le jour rend la lumiere du soleil manifeste. La difference avec le verset 92:2 (tajalla, forme V reflexive — le jour se manifeste lui-meme) est importante : ici, forme II transitive, le jour manifeste AUTRE CHOSE (le soleil). Le jour est l'agent actif qui rend visible la lumiere solaire. Distinction avec « Expulser » : jaliya signifie aussi partir, s'exiler. Le contexte cosmique du serment et la forme II causative excluent ce sens — le jour ne s'exile pas, il manifeste.",
        axe1_verset: "Le verset dit « par le jour quand il la manifeste ». Le verbe jallaha a la forme II est causatif et transitif — le jour ne se manifeste pas lui-meme (comme en 92:2 avec tajalla), il manifeste autre chose : le soleil (le pronom -ha). Le champ lexical jour + manifester + soleil forme une relation de cause a effet : le jour rend la lumiere du soleil visible sur terre. Le jour est l'intermediaire entre le soleil et la terre. L'accompli marque l'action comme achevee et certaine — chaque jour, la manifestation se produit completement.",
        axe2_voisins: "Le verset 1 a jure par le soleil et son eclat. Le verset 2 a ajoute la lune qui suit le soleil. Le verset 3 complete la serie lumineuse : le jour manifeste la lumiere du soleil. Le verset 4 introduira l'opposition : la nuit qui couvre. Les quatre premiers versets forment un chiasme : soleil (source) → lune (relais) → jour (manifestation) → nuit (couverture). Le verbe jallaha est le point culminant de la lumiere dans cette serie avant le basculement vers l'obscurite.",
        axe3_sourate: "Manifester — rendre visible ce qui etait cache — est un acte central dans cette sourate. La sourate parle de l'ame a qui est inspire ce qui est bon et ce qui est mauvais (v8). L'ame a besoin de manifestation pour voir clairement. Le jour qui manifeste la lumiere solaire est le modele cosmique de ce que l'ame doit faire : rendre visible le bien et ecarter le voile de la corruption.",
        axe4_coherence: "La racine j-l-y apparait dans le Coran pour decrire la manifestation : « Quand son Seigneur se manifesta (tajalla) a la montagne » (7:143). Le verbe exprime le devoilement d'une realite cachee. Ici, la forme II (causative) donne au jour le role d'agent de la manifestation — le jour ne se devoile pas lui-meme, il devoile la lumiere du soleil. Cette distinction de forme (II vs V) montre la precision du texte coranique.",
        axe5_frequence: "Manifester la lumiere est l'acte quotidien du jour. Le khalifa observe chaque matin le jour rendre le monde visible — cette manifestation est le cadre de ses actions. La purification de l'ame (v9) est un acte de manifestation : rendre visible le bien qui est en soi, comme le jour rend visible la lumiere du soleil."
      },
      "Sens isolé/Expulser": {
        status: "nul",
        senses: ["partir", "s'exiler", "expulser"],
        proof_ctx: "Le sens d'expulser vient de jaliya (quitter un lieu). La forme II causative jallaha signifie « rendre manifeste » — le contexte du serment par le jour exclut toute idee d'expulsion ou d'exil."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلنَّهَارِ إِذَا جَلَّىٰهَا",
    full_translation: "par le jour quand il l'eclaire",
    segments: [
      { fr: "Par le jour", pos: "nom", phon: "wan-nahari", arabic: "وَٱلنَّهَارِ", word_key: "nhr", is_particle: false, sense_retenu: "jour", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule temporelle", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "il la manifeste", pos: "verbe", phon: "jallaha", arabic: "جَلَّىٰهَا", word_key: "jly", is_particle: false, sense_retenu: "manifester", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le troisieme serment. La particule wa- introduit le serment par le jour. Le mot an-nahari (le jour) est un nom defini par al- au genitif. La particule idha (quand) introduit la proposition temporelle. Le verbe jallaha est un accompli de la forme II (fa''ala) de la racine j-l-y avec le suffixe -ha. La forme II est causative : elle signifie « rendre manifeste » (alors que la forme V tajalla en 92:2 signifie « se manifester soi-meme »). Le suffixe -ha renvoie au soleil (al-shams, feminin en arabe). Le jour manifeste la lumiere du soleil — il est l'agent qui rend cette lumiere visible sur terre. Le Lane's (Edward Lane, 1863) donne pour la forme II de j-l-y : rendre clair, faire apparaitre, devoiler.

§JUSTIFICATION§
**jour** — Le sens retenu est « clarte/jour ». Le mot an-nahar designe la periode de lumiere diurne. L'alternative « riviere » (nahr) est exclue par le contexte cosmique. L'alternative « reprimander » (nahara) est exclue car le mot est un nom, pas un verbe.

**il la manifeste** — Le sens retenu est « manifester/rendre visible ». Le verbe « manifeste » traduit jallaha comme un acte causatif — le jour rend la lumiere du soleil visible. L'alternative « eclaire » (utilisee par Hamidullah) est moins precise car « eclairer » suggere que le jour produit sa propre lumiere, alors que jallaha dit que le jour rend manifeste une lumiere qui existe deja (celle du soleil). L'alternative « revele » est possible mais « manifeste » est plus fidele au sens etymologique de « rendre evident ».

§CRITIQUE§
Hamidullah traduit : « par le Jour quand il l'eclaire ! ». Le verbe « eclaire » n'est pas faux mais il masque une nuance : jallaha (forme II causative) ne dit pas que le jour produit de la lumiere — il dit que le jour rend la lumiere du soleil manifeste. La difference est subtile mais significative : le jour est un intermediaire, pas une source. Notre traduction « il la manifeste » preserve cette distinction causative qui montre le role du jour comme revelateur de la lumiere solaire.`
  }).eq('verse_id', verse_id);

  // Daily: SKIP pour nhr et jly (deja des phrases en base depuis s92)
  console.log('  Daily SKIP nhr(397) et jly(1974) — deja existants depuis s92');

  console.log('VERSET 91:3 — TERMINE');
  console.log('  nhr → "jour" | jly → "manifester"');
  console.log('  Traduction : "Par le jour quand il la manifeste"');
}

async function verse91_4() {
  console.log('\n=== VERSET 91:4 — وَٱلَّيْلِ إِذَا يَغْشَىٰهَا ===');
  const verse_id = 6047;

  // ---- LYL (ليل) — id=528 — "nuit" ----
  // Forme: al-layli = nom defini au genitif (serment par wa-)
  // Deja analyse en s92:1 — NOUVEAUX axes pour ce contexte
  await upsertVWA(verse_id, 'lyl', 'nuit', {
    sense_chosen: "nuit",
    concept_chosen: "Nuit/Obscurité",
    concepts: {
      "Nuit/Obscurité": {
        status: "retenu",
        senses: ["nuit", "obscurite", "tenebres"],
        proof_ctx: "Le sens retenu est « Nuit/Obscurite ». Le Lane's (Edward Lane, 1863) donne : la nuit, la periode d'obscurite entre le coucher et le lever du soleil. Le mot al-layli est un nom defini par al- au genitif apres la particule de serment wa-. La nuit est ici qualifiee par le verbe yaghshaha (elle la couvre) avec le suffixe -ha qui renvoie au soleil — la nuit couvre la lumiere du soleil. Ce quatrieme serment introduit l'opposition directe au troisieme (le jour qui manifeste). La nuit est l'agent qui couvre ce que le jour avait manifeste.",
        axe1_verset: "Le verset dit « par la nuit quand elle la couvre ». Le mot al-layli est le quatrieme objet de serment. La nuit est qualifiee par l'action de couvrir le soleil (yaghshaha, le suffixe -ha renvoie au soleil). Le champ lexical nuit + couvrir + soleil forme l'image exactement inverse du verset 3 (jour + manifester + soleil). La nuit ne se contente pas d'exister — elle agit en couvrant la lumiere. Le serment oppose deux actions sur le meme objet : le jour manifeste la lumiere du soleil, la nuit la couvre.",
        axe2_voisins: "Le verset 3 a dit « le jour quand il la manifeste ». Le verset 4 inverse : « la nuit quand elle la couvre ». Les deux versets forment une paire antithetique parfaite avec la meme structure : phenomene + quand + action sur le soleil. Le verset 5 changera de registre avec le ciel et sa construction. Les quatre premiers serments (soleil, lune, jour, nuit) forment le bloc cosmique des corps celestes et de leurs cycles.",
        axe3_sourate: "La nuit qui couvre la lumiere est l'oppose de la purification de l'ame (v9). La corruption de l'ame (v10) est comme la nuit : elle couvre ce qui etait clair. La sourate utilise le cycle cosmique lumiere/obscurite comme modele du cycle moral purete/corruption. La nuit n'est pas mauvaise en soi — elle fait partie de l'ordre naturel — mais son action de couvrir illustre ce que fait la corruption : cacher la clarte de l'ame.",
        axe4_coherence: "Le Coran jure par la nuit dans plusieurs sourates : 91:4, 92:1, 89:4, 93:2. Chaque serment par la nuit la qualifie differemment : elle couvre (91:4, 92:1), elle s'etend (89:4), elle s'installe (93:2). La nuit est un element recurrent des serments coraniques, toujours definie par son action specifique. Ici, la nuit couvre le soleil — un emploi propre a cette sourate qui l'oppose au jour qui manifeste le soleil.",
        axe5_frequence: "La nuit qui couvre la lumiere rappelle que le monde oscille entre la clarte et l'obscurite. Le khalifa vit dans ce cycle quotidien — chaque nuit, la lumiere est couverte, chaque matin, elle est manifestee. Ce cycle est le cadre de sa responsabilite morale : choisir entre purifier son ame (comme le jour manifeste) ou la corrompre (comme la nuit couvre)."
      }
    }
  }, 1);

  // ---- GHW (غشو) — id=306 — "couvrir" ----
  // Forme: yaghshaha = verbe inaccompli + suffixe -ha (elle la couvre)
  // Deja analyse en s92:1 — NOUVEAUX axes pour ce contexte
  await upsertVWA(verse_id, 'ghw', 'couvrir', {
    sense_chosen: "couvrir",
    concept_chosen: "Couverture/Voile",
    concepts: {
      "Couverture/Voile": {
        status: "retenu",
        senses: ["couvrir", "cacher", "voiler", "envelopper"],
        proof_ctx: "Le sens retenu est « Couverture/Voile ». Le Lane's (Edward Lane, 1863) donne : couvrir entierement, envelopper, cacher sous un voile. Le verbe yaghshaha est un inaccompli de la racine gh-sh-w avec le suffixe -ha (elle la couvre — le pronom renvoie au soleil). L'inaccompli marque une action en cours, repetee ou habituelle : la nuit couvre la lumiere du soleil de maniere cyclique. La difference avec le verset 92:1 (yaghsha, sans objet explicite — la nuit couvre le monde en general) est que ici le suffixe -ha precise l'objet : la nuit couvre la lumiere du soleil. C'est une couverture ciblee, pas un enveloppement general. Distinction avec « Invasion/Submersion » : l'invasion implique un mouvement hostile et soudain. Le verbe yaghsha a l'inaccompli decrit une action habituelle et cyclique — la nuit couvre la lumiere paisiblement, comme chaque soir. La couverture est naturelle, pas agressive.",
        axe1_verset: "Le verset dit « par la nuit quand elle la couvre ». Le verbe yaghshaha est a l'inaccompli avec le suffixe -ha — la nuit couvre le soleil (action habituelle et repetee). Le champ lexical nuit + couvrir + soleil forme l'oppose exact du verset 3 (jour + manifester + soleil). Le meme objet (le soleil) subit deux actions opposees : etre manifeste par le jour et etre couvert par la nuit. L'inaccompli insiste sur le caractere cyclique et permanent de cette couverture.",
        axe2_voisins: "Le verset 3 dit « le jour quand il la manifeste (jallaha) ». Le verset 4 dit « la nuit quand elle la couvre (yaghshaha) ». Les deux verbes agissent sur le meme pronom -ha (le soleil). Cette symetrie parfaite montre que le texte structure ses serments en paires antithetiques : manifester/couvrir, jour/nuit, lumiere/obscurite. Le verset 5 passera au ciel — un changement de registre apres le bloc des corps celestes.",
        axe3_sourate: "Couvrir la lumiere est l'action qui correspond a la corruption de l'ame (v10 — « celui qui l'a corrompue a echoue »). La nuit couvre la lumiere du soleil comme la corruption couvre la purete de l'ame. La sourate utilise la paire manifester/couvrir comme modele cosmique de la paire purifier/corrompre. Le verbe yaghsha applique a la nuit prefigure l'obscurcissement moral que decrit la suite de la sourate.",
        axe4_coherence: "La racine gh-sh-w apparait dans le Coran pour decrire la nuit qui couvre le jour (7:54 — « il couvre la nuit du jour »), le sommeil qui enveloppe (8:11), et le chatiment qui recouvre (29:55). Le sens de couverture totale est constant dans tous les emplois coraniques. Ici, la nuit couvre le soleil — un emploi specifique a cette sourate qui precise l'objet de la couverture la ou 92:1 le laisse implicite.",
        axe5_frequence: "La couverture de la lumiere par la nuit rappelle que la clarte n'est pas permanente — elle peut etre couverte. Le khalifa sait que sa propre clarte interieure (la purete de l'ame) peut etre couverte par la corruption. Le cycle nuit/jour est le rappel quotidien que la couverture est temporaire — le jour reviendra manifester la lumiere."
      },
      "Invasion/Submersion": {
        status: "peu_probable",
        senses: ["envahir", "submerger", "assaillir"],
        proof_ctx: "Le sens d'invasion implique un mouvement hostile et soudain. La nuit ne fait pas irruption sur le soleil — elle s'installe progressivement et paisiblement. Le verbe yaghshaha a l'inaccompli decrit une action habituelle et cyclique, pas une attaque. Le suffixe -ha (la couvrir) montre un enveloppement, pas une agression.",
        axe1_verset: "Le verset decrit la nuit qui couvre le soleil — un phenomene naturel regulier. L'inaccompli yaghshaha marque l'habitude et la repetition, pas la soudainete d'une invasion. Le suffixe -ha montre que l'action est dirigee vers un objet precis (le soleil) de maniere ordonnee, pas chaotique. Le champ lexical nuit + action habituelle + soleil ecarte le sens d'attaque ou de submersion violente. La structure parallele avec le verset 3 (jour + manifester + soleil) confirme qu'il s'agit d'un cycle naturel, pas d'un conflit.",
        axe2_voisins: "Le verset 3 oppose un devoilement (jallaha) a cette couverture. L'opposition manifester/couvrir est paisible et naturelle — elle ne correspond pas a une logique d'invasion/defense. Les deux mouvements sont complementaires et cycliques, pas antagonistes. La serie des serments cosmiques decrit un ordre, pas un combat.",
        axe3_sourate: "La sourate decrit l'ame et ses deux potentiels (purification et corruption). Les serments cosmiques illustrent ces potentiels par des cycles naturels paisibles. L'invasion ne correspond pas au ton des serments qui decrivent un ordre cosmique harmonieux. La nuit qui couvre n'est pas une ennemie — elle fait partie du cycle.",
        axe4_coherence: "Le Coran utilise ghashiya pour decrire la nuit qui recouvre le jour (7:54) — un mouvement naturel et regulier. L'emploi coranique de cette racine pour les phenomenes cosmiques est toujours neutre et ordonne, jamais hostile. L'invasion serait un sens etrange pour un serment de solennite.",
        axe5_frequence: "L'invasion impliquerait un conflit entre la nuit et le soleil. Le texte decrit une alternance paisible ou chacun a son role. Le khalifa vit dans un monde d'alternances ordonnees, pas de guerres cosmiques. La couverture de la nuit est un acte naturel, pas une agression."
      },
      "Perte de conscience": {
        status: "nul",
        senses: ["s'evanouir", "perdre connaissance"],
        proof_ctx: "La perte de conscience s'applique aux etres vivants (ughshiya 'alayhi — il fut pris d'evanouissement). Ici, le sujet est la nuit et l'objet est le soleil — un phenomene cosmique qui ne peut pas s'evanouir. Le sens est inapplicable au contexte."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلَّيْلِ إِذَا يَغْشَىٰهَا",
    full_translation: "par la nuit quand elle l'enveloppe",
    segments: [
      { fr: "Par la nuit", pos: "nom", phon: "wal-layli", arabic: "وَٱلَّيْلِ", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule temporelle", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "elle la couvre", pos: "verbe", phon: "yaghshaha", arabic: "يَغْشَىٰهَا", word_key: "ghw", is_particle: false, sense_retenu: "couvrir", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le quatrieme serment. La particule wa- introduit le serment par la nuit. Le mot al-layli (la nuit) est un nom defini par al- au genitif. La particule idha (quand) introduit la proposition temporelle. Le verbe yaghshaha est un inaccompli de la racine gh-sh-w avec le suffixe pronominal -ha. Le suffixe -ha renvoie au soleil (al-shams, feminin) — la nuit couvre la lumiere du soleil. L'inaccompli marque une action habituelle et repetee : chaque nuit, la couverture se renouvelle. Le Lane's (Edward Lane, 1863) donne pour ghashiya : couvrir entierement, envelopper, cacher sous un voile. Ce verset forme une paire antithetique parfaite avec le verset 3 : le jour manifeste le soleil (jallaha), la nuit le couvre (yaghshaha).

§JUSTIFICATION§
**nuit** — Le sens retenu est « nuit ». Le mot al-layl designe exclusivement la nuit. Aucune alternative n'est possible.

**elle la couvre** — Le sens retenu est « couvrir/voiler ». Le verbe « couvre » traduit yaghshaha comme un enveloppement total et paisible de la lumiere du soleil. L'alternative « envahit » impliquerait une agression etrangere au contexte cosmique. L'alternative « obscurcit » est moins precise — yaghsha ne dit pas seulement obscurcir mais couvrir entierement, comme un voile qui recouvre. L'alternative « enveloppe » (utilisee par Hamidullah) est acceptable — nous utilisons « couvre » pour rester coherent avec l'analyse de la racine gh-sh-w.

§CRITIQUE§
Hamidullah traduit : « par la nuit quand elle l'enveloppe ! ». Le mot « enveloppe » est un bon equivalent de yaghsha — les deux mots decrivent une couverture totale. La nuance entre « couvrir » et « envelopper » est minime : « envelopper » insiste sur le caractere englobant, « couvrir » sur l'acte de recouvrir une surface. Les deux rendent le sens du verset. Les traductions courantes donnent sensiblement le meme sens.`
  }).eq('verse_id', verse_id);

  // Daily: SKIP pour lyl et ghw (deja existants depuis s92)
  console.log('  Daily SKIP lyl(528) et ghw(306) — deja existants depuis s92');

  console.log('VERSET 91:4 — TERMINE');
  console.log('  lyl → "nuit" | ghw → "couvrir"');
  console.log('  Traduction : "Par la nuit quand elle la couvre"');
}

async function verse91_5() {
  console.log('\n=== VERSET 91:5 — وَٱلسَّمَآءِ وَمَا بَنَىٰهَا ===');
  const verse_id = 6048;

  // ---- SMW (سمو) — id=249 — "ciel" ----
  // Forme: al-sama'i = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'smw', 'ciel', {
    sense_chosen: "ciel",
    concept_chosen: "Ciel/Ce qui couvre",
    concepts: {
      "Ciel/Ce qui couvre": {
        status: "retenu",
        senses: ["ciel", "voute celeste", "ce qui est au-dessus", "ce qui couvre"],
        proof_ctx: "Le sens retenu est « Ciel/Ce qui couvre ». Le Lane's (Edward Lane, 1863) donne pour sama' : le ciel, ce qui est eleve au-dessus, la voute celeste, tout ce qui couvre et surplombe. Le mot al-sama'i est un nom defini par al- au genitif apres la particule de serment wa-. Le ciel est le cinquieme element des serments, apres le bloc des corps celestes (soleil, lune, jour, nuit). Le passage du soleil/lune/jour/nuit au ciel marque un changement d'echelle — du cycle lumineux a la structure meme de l'univers. Distinction avec « Hauteur/Elevation » : le Lane's donne aussi sama dans le sens generique de « ce qui est eleve ». Mais le contexte du serment cosmique (apres soleil, lune, jour, nuit) impose le ciel comme structure physique visible. Distinction avec « Nom/Identification » : la racine s-m-w est liee a ism (nom) dans certaines analyses. Ce sens n'a aucun rapport avec le contexte des serments cosmiques.",
        axe1_verset: "Le verset dit « par le ciel et ce qui l'a bati ». Le mot al-sama'i est le cinquieme objet de serment. Le ciel est qualifie par sa construction (banaha — il l'a bati). Le champ lexical ciel + batir forme une image de structure architecturale cosmique — le ciel n'est pas un vide mais une construction ordonnee. Le serment ne porte pas sur le ciel seul mais sur le ciel ET son constructeur (ou son acte de construction — le relatif « ma » est ambigu). Le ciel est presente comme une oeuvre qui a ete fabriquee.",
        axe2_voisins: "Les versets 1-4 ont jure par des cycles (soleil/eclat, lune/succession, jour/manifestation, nuit/couverture). Le verset 5 change de registre : du cycle a la structure. Le ciel est une construction permanente, pas un phenomene cyclique. Le verset 6 ajoutera la terre et ce qui l'a etendue — la paire ciel/terre complete la description de l'univers physique. Le verset 7 passera a l'ame humaine, completant la serie des serments.",
        axe3_sourate: "Le ciel comme structure batie s'inscrit dans le theme de l'ordre de la creation. La sourate va de la creation cosmique (v1-6) a la creation de l'ame (v7) puis a son potentiel (v8-10). Le ciel bati montre que l'univers est une construction deliberee — rien n'est aleatoire. L'ame humaine, comme le ciel, est une creation structuree avec un potentiel inscrit en elle.",
        axe4_coherence: "Le Coran decrit le ciel comme une construction dans plusieurs versets : « Nous avons bati au-dessus de vous sept [cieux] solides » (78:12), « Le ciel, Nous l'avons bati par Notre force » (51:47). Le mot bana' (construction) applique au ciel est un theme coranique recurrent. Le serment par le ciel bati dans cette sourate s'inscrit dans cette tradition coranique qui presente le ciel comme une oeuvre d'architecture cosmique.",
        axe5_frequence: "Le ciel comme structure batie rappelle que l'univers est un cadre ordonne et construit. Le khalifa vit sous un ciel qui n'est pas un accident mais une construction. Cette idee de structure deliberee est le fondement de la responsabilite morale : si le monde est construit avec intention, l'ame humaine aussi, et son potentiel de purification ou de corruption n'est pas aleatoire."
      },
      "Hauteur/Élévation": {
        status: "nul",
        senses: ["hauteur", "elevation", "ce qui est haut"],
        proof_ctx: "Le Lane's donne sama dans le sens generique de « ce qui est eleve ». Le contexte du serment cosmique (soleil, lune, jour, nuit, ciel, terre) impose le sens concret du ciel comme voute celeste. Le sens abstrait de « hauteur » n'est pas pertinent ici."
      },
      "Nom/Identification": {
        status: "nul",
        senses: ["nom", "appellation", "designation"],
        proof_ctx: "Le lien entre s-m-w et ism (nom) est discute par les grammairiens. Ce sens n'a aucun rapport avec le contexte du serment cosmique. Le texte jure par le ciel physique et sa construction, pas par un nom."
      }
    }
  }, 1);

  // ---- BNY (بني) — id=386 — "batir" ----
  // Forme: banaha = verbe accompli forme I + suffixe -ha (il/ce qui l'a bati)
  await upsertVWA(verse_id, 'bny', 'batir', {
    sense_chosen: "batir",
    concept_chosen: "Construction/Édification",
    concepts: {
      "Construction/Édification": {
        status: "retenu",
        senses: ["batir", "construire", "edifier", "eriger"],
        proof_ctx: "Le sens retenu est « Construction/Edification ». Le Lane's (Edward Lane, 1863) donne pour bana : batir, construire, edifier un batiment ou une structure. Le verbe banaha est un accompli de la forme I avec le suffixe -ha (il l'a bati — le pronom renvoie au ciel, al-sama', feminin en arabe). L'accompli marque l'acte de construction comme acheve et definitif — le ciel est bati, c'est un fait. Le verbe bana implique un acte delibere de construction — pas un phenomene spontane mais une fabrication intentionnelle avec une structure. Distinction avec « Filiation » : le Lane's donne ibn (fils) comme derive de la racine b-n-y. Le sens de filiation (fils, descendance) est un emploi nominal derive de l'idee de « construction » (le fils « bâtit » la lignee). Mais ici, le verbe bana est utilise avec le ciel comme objet — il s'agit d'une construction physique, pas d'une relation filiale. Le contexte du serment cosmique exclut la filiation.",
        axe1_verset: "Le verset dit « par le ciel et ce qui l'a bati ». Le verbe banaha a l'accompli marque la construction comme achevee et definitive. Le relatif ma (ce qui / Celui qui) introduit l'agent de la construction sans le nommer explicitement. Le champ lexical ciel + batir forme une image architecturale — le ciel est une structure construite, pas un espace vide. Le serment porte sur l'acte de construction autant que sur le ciel lui-meme. La construction du ciel est presentee comme un fait accompli et une oeuvre digne de serment.",
        axe2_voisins: "Les versets 1-4 ont jure par des cycles cosmiques. Le verset 5 passe a la structure de l'univers : le ciel bati. Le verset 6 completera avec la terre etendue — la paire ciel/terre decrit l'espace physique dans sa totalite. Le verset 7 passera a l'ame humaine — la derniere creation nommee. La progression ciel (v5) → terre (v6) → ame (v7) va du plus grand au plus intime.",
        axe3_sourate: "Batir le ciel est un acte de creation structurelle. La sourate va de la creation de l'univers (v1-6) a la creation de l'ame (v7-8) puis a la responsabilite humaine (v9-10). La construction du ciel montre que la creation est un acte d'ingenierie deliberee. L'ame humaine, comme le ciel, est une construction avec une architecture interne — elle a ete concue avec des potentiels precis (v8).",
        axe4_coherence: "Le Coran utilise le verbe bana pour decrire la construction du ciel dans plusieurs versets : « Le ciel, Nous l'avons bati (banaynaha) par Notre force et Nous l'etendons » (51:47), « Nous avons bati (banayna) au-dessus de vous sept [cieux] solides » (78:12). Le verbe bana applique au ciel est constant dans le Coran — c'est un theme recurrent qui presente le ciel comme une construction architecturale. Le serment de 91:5 s'inscrit dans cette coherence.",
        axe5_frequence: "Batir est un acte de creation structurelle et deliberee. Le khalifa observe le ciel comme une construction — un ouvrage qui tient par sa structure. Cette observation rappelle que lui-meme est une construction : son ame a ete batie avec des potentiels (v8). La responsabilite de purifier son ame (v9) est la responsabilite de maintenir cette construction interieure en bon etat."
      },
      "Filiation": {
        status: "probable",
        senses: ["fils", "descendance", "progeniture", "lignee"],
        proof_ctx: "Le Lane's donne ibn (fils) comme derive de la racine b-n-y. Le sens de filiation est un emploi nominal bien atteste. Mais dans ce verset, le verbe bana est utilise avec le ciel comme objet direct (banaha — il l'a bati). La filiation exigerait un emploi nominal (ibn = fils), pas un emploi verbal transitif avec un objet celeste. La distinction philosophique est claire : batir est un acte de fabrication exterieure (on fabrique quelque chose a partir de rien ou de materiaux), alors que la filiation est une relation biologique de descendance. On ne peut pas « filiationner » le ciel — le ciel n'est le fils de personne. Le verbe bana avec un objet physique impose le sens de construction.",
        axe1_verset: "Le verset dit « par le ciel et ce qui l'a bati ». Si le verbe signifiait « engendrer/donner une descendance », la phrase deviendrait « par le ciel et ce qui l'a engendre » — ce qui impliquerait que le ciel est le fils de quelque chose. Le champ lexical ciel + engendrer est possible mais le Coran ne decrit jamais le ciel comme un etre engendre. Le verbe bana avec un complement d'objet celeste impose le sens de construction physique, pas de filiation biologique.",
        axe2_voisins: "Le verset 6 dira « par la terre et ce qui l'a etendue ». Le verbe du verset 6 (tahaha — etendre) est un verbe de fabrication physique. La paire ciel/terre est traitee avec des verbes de construction (batir/etendre). Le sens de filiation briserait la coherence de cette paire en introduisant une relation biologique la ou le texte parle de fabrication.",
        axe3_sourate: "La sourate decrit la creation de l'univers puis de l'ame. Le ciel bati et la terre etendue sont des actes de fabrication. La filiation introduirait un theme biologique absent de cette serie de serments qui parle de construction cosmique et d'inspiration de l'ame.",
        axe4_coherence: "Le Coran utilise bana pour le ciel dans 51:47 et 78:12 — toujours avec le sens de construire/batir. Le Coran rejette explicitement l'idee que Dieu ait un fils (112:3) — l'idee de filiation cosmique est etrangere au texte coranique.",
        axe5_frequence: "La filiation impliquerait que le ciel est un descendant — une relation biologique entre un parent et un enfant. Le texte decrit une relation entre un constructeur et son ouvrage — une relation technique et deliberee. Le khalifa observe le ciel comme une construction, pas comme un etre engendre."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلسَّمَآءِ وَمَا بَنَىٰهَا",
    full_translation: "par le ciel et Celui qui l'a edifie",
    segments: [
      { fr: "Par le ciel", pos: "nom", phon: "was-sama'i", arabic: "وَٱلسَّمَآءِ", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 1, prefix_particle: "wa" },
      { fr: "et ce qui", pos: "particule", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 0 },
      { fr: "l'a bati", pos: "verbe", phon: "banaha", arabic: "بَنَىٰهَا", word_key: "bny", is_particle: false, sense_retenu: "batir", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le cinquieme serment. La particule wa- introduit le serment par le ciel. Le mot al-sama'i (le ciel) est un nom defini par al- au genitif. La seconde partie wa-ma banaha ajoute un element lie : le relatif ma (ce qui / Celui qui) suivi du verbe bana a l'accompli avec le suffixe -ha (il l'a bati, le pronom renvoyant au ciel qui est feminin en arabe). Le relatif ma est ambigu en arabe : il peut designer « ce qui » (l'acte de construction) ou « Celui qui » (le constructeur). Le texte ne tranche pas — les deux lectures sont grammaticalement valides. Le verbe bana est un accompli de la forme I qui signifie « batir, construire ». Le Lane's (Edward Lane, 1863) donne pour bana : construire un batiment, edifier une structure. L'accompli marque l'acte de construction comme acheve et definitif.

§JUSTIFICATION§
**ciel** — Le sens retenu est « ciel/voute celeste ». Le mot al-sama' designe le ciel physique visible. L'alternative « hauteur » est trop abstraite — le contexte des serments cosmiques impose le ciel concret. L'alternative « ce qui couvre » est un sens etymologique de sama' mais ici le texte parle de l'objet physique, pas de la fonction de couvrir.

**l'a bati** — Le sens retenu est « batir/construire ». Le verbe « batir » traduit bana comme un acte de construction deliberee et structurelle. L'alternative « edifier » (utilisee par Hamidullah) est un bon synonyme — nous utilisons « batir » car c'est le mot le plus courant en francais pour decrire la construction d'une grande structure. L'alternative « engendrer » (derive de ibn/fils) est ecartee car le verbe bana avec un objet celeste decrit une construction physique, pas une relation de filiation.

§CRITIQUE§
Hamidullah traduit : « par le ciel et Celui qui l'a edifie ! ». Hamidullah choisit « Celui qui » pour le relatif ma — une lecture valide qui identifie l'agent comme une personne (le Createur). Notre traduction garde « ce qui » pour rester neutre et fidele a l'ambiguite du texte arabe. Le mot « edifie » est un synonyme acceptable de « bati » — les deux rendent le sens de bana. Les traductions courantes donnent sensiblement le meme sens pour ce verset.`
  }).eq('verse_id', verse_id);

  // Daily: SKIP pour smw et bny (deja existants en base)
  console.log('  Daily SKIP smw(249) et bny(386) — deja existants en base');

  console.log('VERSET 91:5 — TERMINE');
  console.log('  smw → "ciel" | bny → "batir"');
  console.log('  Traduction : "Par le ciel et ce qui l\'a bati"');
}

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║  PIPELINE SOURATE 91 (Ash-Shams) — PARTIE 1 (v1-5)    ║');
  console.log('╚══════════════════════════════════════════════════════════╝');

  await verse91_1();
  await verse91_2();
  await verse91_3();
  await verse91_4();
  await verse91_5();

  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║  PARTIE 1 TERMINEE (versets 1-5)                        ║');
  console.log('║  Versets couverts : 91:1-5                               ║');
  console.log('║  Racines traitees : shms, dhuh, qmr, tlw, nhr, jly,     ║');
  console.log('║    lyl, ghw, smw, bny                                    ║');
  console.log('║  Daily inserees : shms(1117), qmr(1783)                  ║');
  console.log('║  Daily SKIP : nhr(397), jly(1974), lyl(528), ghw(306),   ║');
  console.log('║    smw(249), bny(386) — deja existants                   ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
}

main().catch(console.error);
