require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S86 v1-10 — ÉTAPES 2-3-4 ===\n');

  // ============================================================
  // ÉTAPE 2 — Création des racines manquantes
  // ============================================================

  // --- thqb (ث-ق-ب) ---
  console.log('--- ÉTAPE 2 : Création racine thqb (ث-ق-ب) ---');
  let thqbId;
  const { data: existThqb } = await sb.from('word_analyses').select('id').eq('word_key', 'thqb');
  if (existThqb && existThqb.length > 0) {
    thqbId = existThqb[0].id;
    console.log('  thqb existe déjà (id=' + thqbId + ')');
  } else {
    const { data: waThqb } = await sb.from('word_analyses').insert({
      word_key: 'thqb', root_ar: 'ث ق ب', root_phon: 'thqb', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 2, analysis_step: 'meanings'
    }).select().single();
    thqbId = waThqb.id;
    console.log('  ✓ word_analyses thqb créé (id=' + thqbId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: thqbId, sense: 'percer', concept: 'Perforation/Pénétration', status: null, meaning_type: 'etymology', display_order: 1, description: "Acte physique de traverser une matiere en y creant un trou de petite taille. La perforation est directionnelle — elle va d'un cote a l'autre. C'est un mouvement qui penetre et qui traverse. Le Lane's donne : faire un trou dans une chose avec un instrument de perage, un trou qui traverse de part en part." },
      { analysis_id: thqbId, sense: 'perforer', concept: 'Perforation/Pénétration', status: null, meaning_type: 'etymology', display_order: 2, description: "Variante de percer, avec emphase sur le resultat — le trou cree." },
      { analysis_id: thqbId, sense: 'trouer', concept: 'Perforation/Pénétration', status: null, meaning_type: 'etymology', display_order: 3, description: "Creer une ouverture dans une surface solide." },
      { analysis_id: thqbId, sense: 'forer', concept: 'Perforation/Pénétration', status: null, meaning_type: 'etymology', display_order: 4, description: "Percer en profondeur a l'aide d'un instrument." },
      { analysis_id: thqbId, sense: 'briller intensement', concept: 'Lumière perçante', status: null, meaning_type: 'etymology', display_order: 5, description: "Ce qui traverse l'obscurite par sa lumiere, comme si la lumiere percait les tenebres. Le Lane's donne : etoile ou lampe qui brille avec une intensite telle qu'elle semble percer l'obscurite et la dissiper. C'est une extension metaphorique de la perforation — la lumiere perfore le noir. L'acte est directionnel, continu et visible de loin." },
      { analysis_id: thqbId, sense: 'etoile percante', concept: 'Lumière perçante', status: null, meaning_type: 'etymology', display_order: 6, description: "Astre nocturne dont la lumiere traverse les tenebres. Le Lane's cite le Coran 86:3 — l'astre qui brille intensement comme s'il percait les spheres celestes par sa lumiere." },
      { analysis_id: thqbId, sense: 'tison', concept: 'Lumière perçante', status: null, meaning_type: 'etymology', display_order: 7, description: "Combustible, ce qui allume le feu — extension du sens de lumiere percante." },
      { analysis_id: thqbId, sense: 'grande route', concept: 'Passage/Voie', status: null, meaning_type: 'etymology', display_order: 8, description: "Route que les gens traversent par leur marche, comme si elle etait percee par le passage. Extension metaphorique : la voie est un trou dans le paysage cree par l'usage." },
      { analysis_id: thqbId, sense: 'voie qui traverse', concept: 'Passage/Voie', status: null, meaning_type: 'etymology', display_order: 9, description: "Route qui traverse une montagne ou un terrain rocheux." },
      { analysis_id: thqbId, sense: 'penetrer dans les affaires', concept: 'Pénétration intellectuelle', status: null, meaning_type: 'etymology', display_order: 10, description: "Homme qui entre beaucoup dans les affaires — extension metaphorique de la perforation vers le domaine intellectuel." }
    ]);
    console.log('  ✓ word_meanings thqb insérés (10 sens, 4 groupes)');
  }

  // --- dfq (د-ف-ق) ---
  console.log('--- ÉTAPE 2 : Création racine dfq (د-ف-ق) ---');
  let dfqId;
  const { data: existDfq } = await sb.from('word_analyses').select('id').eq('word_key', 'dfq');
  if (existDfq && existDfq.length > 0) {
    dfqId = existDfq[0].id;
    console.log('  dfq existe déjà (id=' + dfqId + ')');
  } else {
    const { data: waDfq } = await sb.from('word_analyses').insert({
      word_key: 'dfq', root_ar: 'د ف ق', root_phon: 'dfq', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 1, analysis_step: 'meanings'
    }).select().single();
    dfqId = waDfq.id;
    console.log('  ✓ word_analyses dfq créé (id=' + dfqId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: dfqId, sense: 'verser avec force', concept: 'Jaillissement/Écoulement', status: null, meaning_type: 'etymology', display_order: 1, description: "Mouvement d'un liquide qui sort avec vehemence et impétuosité. Le Lane's donne : verser, repandre avec force. C'est un acte directionnel et brusque — le liquide sort d'un contenant avec une energie qui le propulse. Le mouvement est soudain, pas progressif. La forme I est transitive : quelqu'un verse l'eau." },
      { analysis_id: dfqId, sense: 'jaillir', concept: 'Jaillissement/Écoulement', status: null, meaning_type: 'etymology', display_order: 2, description: "Sortie brusque d'un liquide. Le Lane's note que l'intransitif (l'eau jaillit d'elle-meme) est conteste par certains grammairiens — la forme I est normalement transitive." },
      { analysis_id: dfqId, sense: 'repandre abondamment', concept: 'Jaillissement/Écoulement', status: null, meaning_type: 'etymology', display_order: 3, description: "Forme II intensive : verser en grande quantite. Extension vers la generosite — les mains versent la largesse." },
      { analysis_id: dfqId, sense: 'couler d un seul coup', concept: 'Jaillissement/Écoulement', status: null, meaning_type: 'etymology', display_order: 4, description: "Quantite versee d'un seul coup (dufqa). L'idee de simultaneite — tout sort en meme temps." },
      { analysis_id: dfqId, sense: 'rapide', concept: 'Rapidité/Impétuosité', status: null, meaning_type: 'etymology', display_order: 5, description: "Extension metaphorique du mouvement brusque du liquide vers la vitesse en general. Le Lane's donne difaqq : chameau rapide, cheval veloce. La rapidite est l'application du jaillissement au deplacement." },
      { analysis_id: dfqId, sense: 'impetueux', concept: 'Rapidité/Impétuosité', status: null, meaning_type: 'etymology', display_order: 6, description: "Qui se deplace avec la force d'un liquide verse. Marcher en se balancant avec de grands pas rapides." },
      { analysis_id: dfqId, sense: 'torrent qui remplit', concept: 'Jaillissement/Écoulement', status: null, meaning_type: 'etymology', display_order: 7, description: "Torrent (dufaq) qui remplit la vallee. Extension du jaillissement vers l'inondation." }
    ]);
    console.log('  ✓ word_meanings dfq insérés (7 sens, 2 groupes)');
  }

  // --- Ajout sens anatomique pour trb (tara'ib = côtes) ---
  console.log('--- ÉTAPE 2 : Ajout sens anatomique pour trb ---');
  const trbId = 1156;
  const { data: trbAnat } = await sb.from('word_meanings').select('id').eq('analysis_id', trbId).eq('concept', 'Anatomie/Poitrine');
  if (trbAnat && trbAnat.length > 0) {
    console.log('  trb Anatomie/Poitrine existe déjà');
  } else {
    await sb.from('word_meanings').insert([
      { analysis_id: trbId, sense: 'cotes superieures', concept: 'Anatomie/Poitrine', status: null, meaning_type: 'etymology', display_order: 10, description: "Les os de la partie superieure de la poitrine. Le Lane's donne : les tara'ib sont les os de la poitrine, les cotes qui entourent le haut du torse. C'est le lieu physique ou se trouve le coeur et les organes vitaux. Le lien etymologique avec la terre (turab) vient de l'idee de base, de fondation — les cotes sont la base structurelle du torse." },
      { analysis_id: trbId, sense: 'poitrine', concept: 'Anatomie/Poitrine', status: null, meaning_type: 'etymology', display_order: 11, description: "La partie superieure du torse, delimitee par les cotes." }
    ]);
    console.log('  ✓ word_meanings trb Anatomie/Poitrine ajoutés');
  }

  console.log('\n--- ÉTAPE 2 TERMINÉE ---\n');

  // ============================================================
  // ÉTAPES 3-4 — Analyse par verset
  // ============================================================

  // ========== VERSET 1 (5932) ==========
  // وَٱلسَّمَآءِ وَٱلطَّارِقِ
  console.log('--- v1 (5932): wa-as-sama\'i wa-at-tariqi ---');

  await upsertVWA(5932, 'smw', 'ciel', {
    sense_chosen: 'ciel',
    concept_chosen: 'Ciel/Ce qui couvre',
    concepts: {
      'Ciel/Ce qui couvre': {
        senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage', 'dos', 'celeste'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w porte le sens de ce qui est au-dessus, ce qui couvre, le ciel. Le mot as-sama'i est au cas genitif apres la particule de serment wa (par). Le ciel est la voute qui couvre et qui contient les astres — c'est le cadre dans lequel apparait le tariq (le visiteur nocturne). Le sens de hauteur/elevation est un sens abstrait qui ne s'applique pas a l'objet physique du serment. Le sens de nom/identification est sans rapport avec le contexte.",
        axe1_verset: "Le mot as-sama'i est un nom feminin defini au cas genitif, complement de la particule de serment wa. Le champ lexical du verset est celui du ciel nocturne — le ciel (sama') et le visiteur nocturne (tariq) forment une paire : le contenant et ce qui y apparait. Le serment par le ciel etablit un cadre cosmique pour ce qui suit. Le ciel est la voute visible qui couvre la terre, et c'est dans ce ciel que l'astre percant apparaitra (verset 3). Le genitif est impose par la construction du serment.",
        axe2_voisins: "Le verset 2 demandera : qu'est-ce qui t'a fait savoir ce qu'est le visiteur nocturne ? Le verset 3 repondra : l'astre percant. Le ciel du verset 1 est le lieu ou se trouve cet astre. La sequence v1-v3 va du general (le ciel) au particulier (l'astre percant). Le serment par le ciel prepare l'auditeur a regarder vers le haut, vers ce qui le depasse.",
        axe3_sourate: "La sourate 86 ouvre sur un serment cosmique (le ciel et le visiteur nocturne) et se termine par un avertissement. Le ciel est le cadre de depart — il introduit la dimension de grandeur et de surplomb qui dominera toute la sourate. La sourate passera du ciel (v1) a la creation de l'homme (v5-7) puis au jugement (v9-10).",
        axe4_coherence: "Le Coran utilise le serment par le ciel dans d'autres passages. En 51:7, wa-as-sama'i dhati al-hubuk (par le ciel aux voies). En 85:1, wa-as-sama'i dhati al-buruj (par le ciel aux constellations). Le serment par le ciel est un procede coranique recurrent qui invite a contempler la grandeur de la creation.",
        axe5_frequence: "Le ciel est le cadre dans lequel le khalifa contemple les signes de la creation. Le serment par le ciel invite l'etre humain a lever le regard au-dela de son horizon immediat. La contemplation du ciel est le premier pas vers la conscience de sa place dans l'univers — prerequis de la mission de justice et de civilisation."
      },
      'Hauteur/Élévation': {
        senses: ['etre haut', 'se dresser', 'monter', 'noble', 'hautain'],
        status: 'nul',
        proof_ctx: "Le sens abstrait de hauteur ne s'applique pas ici. Le serment porte sur un objet concret — la voute celeste — pas sur une qualite abstraite."
      },
      'Nom/Identification': {
        senses: ['nom', 'nommer', 'renommee'],
        status: 'nul',
        proof_ctx: "Aucun rapport avec le contexte du serment cosmique."
      }
    }
  }, 1);

  await upsertVWA(5932, 'trq', 'celui qui frappe la nuit', {
    sense_chosen: 'celui qui frappe la nuit',
    concept_chosen: 'Frappe/Percussion',
    concepts: {
      'Frappe/Percussion': {
        senses: ['frapper', 'percussion'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine t-r-q signifie frapper, donner un coup. Le tariq est etymologiquement celui qui frappe — et par extension celui qui vient la nuit, parce que le visiteur nocturne frappe a la porte. Le mot at-tariqi est un participe actif defini au cas genitif (deuxieme element du serment). Le participe actif indique que la personne ou la chose FAIT l'action activement — elle frappe. Le sens de voie/passage est un derive nominal (la route que l'on frappe du pied) qui ne s'applique pas a un participe actif. Le sens de lumiere percante est une extension metaphorique qui sera explicitee au verset 3 avec un autre mot (thaqib). Ici, au verset 1, le tariq est presente comme un etre ou un phenomene qui frappe — c'est le sens premier de la racine.",
        axe1_verset: "Le mot at-tariqi est un participe actif defini au cas genitif, deuxieme element du serment apres as-sama'i. Le champ lexical est celui du ciel nocturne et de ce qui y survient. Le tariq est ce qui frappe dans la nuit — un phenomene qui se manifeste soudainement dans l'obscurite. Le participe actif avec l'article defini (al-) designe une entite connue et identifiable. Le verset ne dit pas encore de quoi il s'agit — il laisse la question ouverte pour le verset 2.",
        axe2_voisins: "Le verset 2 demandera : qu'est-ce qui t'a fait savoir ce qu'est le tariq ? Le verset 3 repondra : l'astre percant. Le tariq du verset 1 est donc un astre, mais le mot choisi par le texte est celui de la frappe/percussion — pas celui de l'etoile (najm) ou de la lumiere. Ce choix lexical est delibere : le texte veut d'abord evoquer l'impact, la soudainete, le coup — avant de reveler qu'il s'agit d'un astre.",
        axe3_sourate: "La sourate 86 s'appelle at-Tariq. Le mot donne son nom a la sourate entiere, ce qui montre son importance. La frappe nocturne est le theme d'ouverture — quelque chose qui survient dans la nuit et qui frappe. Ce theme se prolongera dans la sourate avec l'idee que rien n'echappe a la surveillance (v4) et que tout sera mis a l'epreuve (v9).",
        axe4_coherence: "Le Coran utilise la racine t-r-q dans d'autres passages. En 20:77, idrib lahum tariqan fi al-bahri (frappe pour eux un chemin dans la mer) — le chemin est cree par une frappe. En 13:13, ar-ra'du yusabbihu bi-hamdihi (le tonnerre glorifie par sa louange) — le tonnerre est un phenomene de percussion celeste. L'idee de frappe celeste est coherente avec le serment par le ciel.",
        axe5_frequence: "Le visiteur nocturne qui frappe est un signe pour celui qui veille. Le khalifa est celui qui reste eveille — attentif aux signes, aux coups portes a sa porte. La frappe nocturne est un appel a la vigilance, prerequis de la mission de justice. Celui qui dort ne voit pas le signe."
      },
      'Voie/Passage': {
        senses: ['chemin', 'voie'],
        status: 'nul',
        proof_ctx: "Le mot at-tariqi est un participe actif (celui qui fait l'action), pas un nom de lieu. Le sens de chemin/voie est un derive nominal de la racine (la route que l'on bat du pied). Un participe actif ne peut pas designer un lieu passif."
      },
      'Lumière perçante': {
        senses: ['astre nocturne'],
        status: 'peu_probable',
        proof_ctx: "Le sens d'astre nocturne est une extension metaphorique attestee par le Lane's. Mais au verset 1, le texte n'a pas encore revele que le tariq est un astre — cette revelation viendra au verset 3 avec le mot thaqib (percant). Choisir 'lumiere percante' ici anticiperait la reponse du verset 3, ce qui brise la structure rhetorique du texte (question-reponse). Le sens premier de la racine (frapper) est plus fidele au verset 1 pris isolement.",
        axe1_verset: "Le mot at-tariqi est un participe actif defini. Le sens de lumiere percante ferait de at-tariqi un astre qui perce l'obscurite. Le champ lexical (ciel + astre nocturne) serait coherent. Mais le texte utilise tariq, pas najm (etoile) ni thaqib (percant) — il choisit deliberement le mot de la frappe, pas celui de la lumiere.",
        axe2_voisins: "Le verset 3 dira an-najmu ath-thaqibu (l'astre percant). Si at-tariqi signifiait deja lumiere percante, le verset 3 serait une simple repetition. La structure rhetorique (serment + question + reponse) suggere que le verset 1 presente le tariq sous un angle different du verset 3.",
        axe3_sourate: "La sourate porte le nom at-Tariq, pas an-Najm. Le choix du mot tariq (frappeur) plutot que najm (astre) comme titre indique que c'est la frappe, pas la lumiere, qui est le theme central.",
        axe4_coherence: "Le Lane's donne at-tariq comme celui qui vient la nuit, par extension l'etoile qui apparait la nuit. Ce sens est atteste mais il est derive du sens de frapper (on frappe a la porte la nuit). Le premier sens est la frappe, l'etoile est une specialisation.",
        axe5_frequence: "La lumiere percante est un signe passif — elle est la, visible. La frappe nocturne est un signe actif — elle interpelle, elle exige une reponse. Le khalifa est interpelle par les signes actifs, pas seulement par ce qui est visible."
      }
    }
  }, 2);

  await upsertVA(5932, {
    translation_arab: "Par le ciel et celui qui frappe la nuit",
    full_translation: "Par le ciel et par l'astre nocturne",
    segments: [
      { fr: "Par", pos: "PART", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "le ciel", pos: "N", phon: "as-sama'i", arabic: "ٱلسَّمَآءِ", position: 2, word_key: "smw", is_particle: false, sense_retenu: "ciel" },
      { fr: "et", pos: "CONJ", phon: "wa", arabic: "وَ", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "celui qui frappe la nuit", pos: "N", phon: "at-tariqi", arabic: "ٱلطَّارِقِ", position: 4, word_key: "trq", is_particle: false, sense_retenu: "celui qui frappe la nuit" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset ouvre par une formule de serment. La particule **wa** suivie d'un nom au genitif forme un serment en arabe — « par le ciel ». Le deuxieme **wa** introduit le deuxieme element du serment : « et par le tariq ».

Le mot **as-sama'i** est un nom feminin defini au cas genitif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w designe ce qui est au-dessus, le ciel, la voute celeste. Le genitif est impose par la construction du serment.

Le mot **at-tariqi** est un participe actif (une forme qui dit que la chose FAIT l'action activement) de la racine t-r-q, defini par l'article al- et au cas genitif. D'apres les sources etymologiques, la racine t-r-q signifie frapper, donner un coup. Le tariq est celui qui frappe — et par extension celui qui vient la nuit, parce que le visiteur nocturne frappe a la porte. Le verset ne precise pas encore de quoi il s'agit — la reponse viendra au verset 3.

§JUSTIFICATION§
**ciel** — Le sens retenu est « ciel ». C'est le sens direct de sama' dans un contexte de serment cosmique. L'alternative « toit » est ecartee car elle s'applique a un batiment, pas au cosmos. L'alternative « nuage » est trop specifique — le serment porte sur la voute celeste entiere.

**celui qui frappe la nuit** — Le sens retenu est « celui qui frappe ». Ce mot est choisi car tariq est un participe actif de la racine t-r-q (frapper). Le participe actif designe celui qui fait l'action. L'alternative « astre nocturne » est ecartee pour ce verset car elle anticipe la reponse du verset 3 — le texte pose d'abord un mystere (qui est ce tariq ?) avant de le reveler. L'alternative « chemin » est ecartee car un participe actif designe un agent, pas un lieu.

§CRITIQUE§
**celui qui frappe vs astre nocturne** — Hamidullah traduit « l'astre nocturne » des le verset 1. Ce choix fusionne la question (v1-2) et la reponse (v3) en supprimant le suspense rhetorique du texte. Le texte arabe utilise deliberement tariq (le frappeur) au verset 1, puis njm thaqib (l'astre percant) au verset 3. Traduire tariq par « astre nocturne » revient a donner la reponse avant que la question ne soit posee. L'etymologie pure donne « celui qui frappe la nuit », ce qui preserve la structure du texte.`
  });

  console.log('VERSET 86:1 — TERMINÉ');
  console.log('  smw → Ciel/Ce qui couvre → "ciel"');
  console.log('  trq → Frappe/Percussion → "celui qui frappe la nuit"');

  // ========== VERSET 2 (5933) ==========
  // وَمَآ أَدْرَىٰكَ مَا ٱلطَّارِقُ
  console.log('\n--- v2 (5933): wa-ma adraka ma at-tariqu ---');

  await upsertVWA(5933, 'dry', 'fait savoir', {
    sense_chosen: 'fait savoir',
    concept_chosen: 'Connaissance/Perception',
    concepts: {
      'Connaissance/Perception': {
        senses: ['savoir', 'percevoir', 'se rendre compte'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine d-r-y signifie savoir, percevoir, se rendre compte. Le verbe adraka est a la forme IV a l'accompli (une forme qui signifie « faire faire » — ici « faire savoir »). Le pronom -ka (toi) est le complement : « qu'est-ce qui t'a fait savoir ? ». La forme IV + accompli indique un acte acheve de transmission de connaissance. Il n'y a qu'un seul groupe de sens pour cette racine, celui de la connaissance/perception.",
        axe1_verset: "Le verbe adraka est en forme IV a l'accompli avec le pronom -ka (toi, 2e personne masculin singulier). Le sujet est ma (qu'est-ce qui). La structure wa-ma adraka ma X est une formule rhetorique coranique qui introduit un mystere — « et qu'est-ce qui t'a fait savoir ce qu'est X ? ». Le champ lexical est celui de la connaissance et du mystere : quelque chose depasse la connaissance ordinaire de l'auditeur.",
        axe2_voisins: "Le verset 1 a presente le serment par le ciel et le tariq. Le verset 2 pose la question : qu'est-ce qui t'a fait savoir ce qu'est le tariq ? Le verset 3 donnera la reponse. Cette structure en trois temps (presentation-question-reponse) est un procede rhetorique coranique qui cree l'attente et l'attention. Le verbe adraka est le pivot — il signale que la connaissance du tariq n'est pas evidente.",
        axe3_sourate: "La sourate 86 procede par devoilement progressif. Le verset 2 utilise la formule de mystere (ma adraka) pour signaler que ce qui suit merite une attention particuliere. Ce procede revient dans d'autres sourates pour les realites les plus importantes.",
        axe4_coherence: "Le Coran utilise la formule wa-ma adraka ma dans d'autres passages. En 101:3, wa-ma adraka ma al-qari'a (qu'est-ce qui t'a fait savoir ce qu'est le fracas ?). En 104:5, wa-ma adraka ma hutamatu allahi (qu'est-ce qui t'a fait savoir ce qu'est le broyeur de Dieu ?). La formule signale toujours une realite qui depasse la comprehension ordinaire.",
        axe5_frequence: "La question « qu'est-ce qui t'a fait savoir ? » est un appel a l'humilite intellectuelle. Le khalifa reconnait que sa connaissance est limitee et qu'il a besoin qu'on lui fasse savoir. C'est le contraire de l'arrogance — la condition premiere de la justice est de reconnaitre qu'on ne sait pas tout."
      }
    }
  }, 1);

  await upsertVWA(5933, 'trq', 'celui qui frappe la nuit', {
    sense_chosen: 'celui qui frappe la nuit',
    concept_chosen: 'Frappe/Percussion',
    concepts: {
      'Frappe/Percussion': {
        senses: ['frapper', 'percussion'],
        status: 'retenu',
        proof_ctx: "Meme analyse que le verset 1. Le mot at-tariqu est repris ici au cas nominatif (sujet de la phrase nominale : « ce qu'est le tariq »). La question porte sur l'identite du tariq — le texte demande a l'auditeur de reflechir a ce qu'est cette entite qui frappe dans la nuit.",
        axe1_verset: "Le mot at-tariqu est au cas nominatif, predicat de la phrase nominale ma at-tariqu (qu'est le tariq). Le champ lexical est celui de l'interrogation — le texte questionne l'identite du tariq. Le participe actif est le meme qu'au verset 1, mais ici il est l'objet de la question, pas du serment.",
        axe2_voisins: "Le verset 1 a presente le tariq dans le serment. Le verset 2 le questionne. Le verset 3 repondra. La repetition du mot tariq dans trois versets consecutifs montre son importance centrale dans l'ouverture de la sourate.",
        axe3_sourate: "Le tariq donne son nom a la sourate. Sa triple mention (v1 serment, v2 question, v3 reponse) forme la structure d'ouverture qui capte l'attention avant les themes de la creation et du jugement.",
        axe4_coherence: "La repetition d'un mot dans une formule de mystere est un procede coranique standard. Le Coran repete le mot pour ancrer l'attention de l'auditeur avant la revelation.",
        axe5_frequence: "Le questionnement est la methode du khalifa — il ne prend pas les choses pour acquises, il interroge la realite. La question « qu'est-ce qui t'a fait savoir ? » est un modele d'investigation."
      },
      'Voie/Passage': { senses: ['chemin', 'voie'], status: 'nul', proof_ctx: "Meme raisonnement que v1 : un participe actif ne designe pas un lieu." },
      'Lumière perçante': { senses: ['astre nocturne'], status: 'nul', proof_ctx: "Au verset 2, la question porte sur l'identite du tariq. La reponse (lumiere percante) viendra au verset 3." }
    }
  }, 2);

  await upsertVA(5933, {
    translation_arab: "Et qu'est-ce qui t'a fait savoir ce qu'est celui qui frappe la nuit ?",
    full_translation: "Et qui te dira ce qu'est l'astre nocturne ?",
    segments: [
      { fr: "Et qu'est-ce qui", pos: "PART", phon: "wa-ma", arabic: "وَمَآ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "t'a fait savoir", pos: "V", phon: "adraka", arabic: "أَدْرَىٰكَ", position: 2, word_key: "dry", is_particle: false, sense_retenu: "fait savoir" },
      { fr: "ce qu'est", pos: "PART", phon: "ma", arabic: "مَا", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "celui qui frappe la nuit", pos: "N", phon: "at-tariqu", arabic: "ٱلطَّارِقُ", position: 4, word_key: "trq", is_particle: false, sense_retenu: "celui qui frappe la nuit" }
    ],
    translation_explanation: `§DEMARCHE§
La structure **wa-ma adraka ma** est une formule rhetorique coranique recurrente qui introduit un mystere. Le wa est une conjonction (et), ma est un pronom interrogatif (qu'est-ce qui), et le deuxieme ma introduit une proposition nominale (ce qu'est X).

Le verbe **adraka** est en forme IV (une forme qui ajoute l'idee de « faire faire ») de la racine d-r-y, a l'accompli (un temps qui indique que l'action est achevee). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine d-r-y signifie savoir, percevoir. La forme IV signifie donc « faire savoir, faire percevoir ». Le pronom **-ka** (toi) est le complement direct : « qu'est-ce qui t'a fait savoir ? ».

Le mot **at-tariqu** est le meme qu'au verset 1, mais ici au cas nominatif car il est le sujet de la phrase nominale ma at-tariqu (ce qu'est le tariq).

§JUSTIFICATION§
**fait savoir** — Le sens retenu est « faire savoir ». Ce mot est choisi car adraka en forme IV signifie transmettre la connaissance a quelqu'un. L'alternative « fait percevoir » est ecartee car la perception est sensorielle, tandis que la connaissance est plus large. L'alternative « enseigne » est ecartee car elle implique un processus long, tandis que adraka est un acte ponctuel.

§CRITIQUE§
**fait savoir vs dira** — Hamidullah traduit « qui te dira ». Le verbe adraka est a l'accompli (passe), pas au futur. La traduction « t'a fait savoir » (accompli) est plus fidele que « te dira » (futur). Le choix du futur par Hamidullah vient peut-etre d'une interpretation de la formule comme une question ouverte, mais le texte utilise bien l'accompli — l'acte de faire savoir a deja eu lieu.`
  });

  console.log('VERSET 86:2 — TERMINÉ');
  console.log('  dry → Connaissance/Perception → "fait savoir"');
  console.log('  trq → Frappe/Percussion → "celui qui frappe la nuit"');

  // ========== VERSET 3 (5934) ==========
  // ٱلنَّجْمُ ٱلثَّاقِبُ
  console.log('\n--- v3 (5934): an-najmu ath-thaqibu ---');

  await upsertVWA(5934, 'njm', 'astre', {
    sense_chosen: 'astre',
    concept_chosen: 'Astre/Guidance',
    concepts: {
      'Astre/Guidance': {
        senses: ['etoile', 'astre', 'portion'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-j-m designe l'etoile, l'astre, et par extension une portion (de quelque chose qui apparait progressivement). Le mot an-najmu est un nom defini au cas nominatif, sujet de la phrase nominale. Il repond a la question du verset 2 : le tariq est l'astre percant. Le sens de portion est hors sujet ici. Il n'y a qu'un seul groupe de sens pertinent — l'astre.",
        axe1_verset: "Le mot an-najmu est un nom masculin defini au cas nominatif, sujet de la phrase nominale qui repond a la question du verset 2. Il est qualifie par ath-thaqibu (le percant). Le champ lexical est celui de l'astronomie et de la lumiere — l'astre qui perce l'obscurite. La phrase nominale (nom + adjectif) est un constat factuel : voila ce qu'est le tariq.",
        axe2_voisins: "Le verset 2 demandait : qu'est-ce que le tariq ? Le verset 3 repond : l'astre percant. L'astre est la revelation de l'identite du tariq. Le passage du mystere (v2) a la reponse (v3) cree un effet de devoilement — on decouvre que le frappeur nocturne est une lumiere celeste qui perce les tenebres.",
        axe3_sourate: "L'astre percant ouvre la sourate par une image de lumiere dans l'obscurite. Ce theme traverse la sourate — la lumiere qui perce (v3), la creation de l'homme (v5-7), et le jour ou les secrets seront mis a l'epreuve (v9). L'astre est le premier signe de la verite qui finira par eclater.",
        axe4_coherence: "Le Coran mentionne an-najm dans d'autres passages. En 53:1, wa-an-najmi idha hawa (par l'etoile quand elle decline). En 55:6, wa-an-najmu wa-ash-shajaru yasjudani (l'etoile et l'arbre se prosternent). L'astre est un signe celeste recurrent dans le Coran.",
        axe5_frequence: "L'astre est un guide pour le voyageur nocturne. Le khalifa est un voyageur dans l'obscurite de l'ignorance — il a besoin de signes celestes pour s'orienter. L'astre percant est le signe qui guide quand tout est sombre."
      }
    }
  }, 1);

  await upsertVWA(5934, 'thqb', 'percant', {
    sense_chosen: 'percant',
    concept_chosen: 'Lumière perçante',
    concepts: {
      'Perforation/Pénétration': {
        senses: ['percer', 'perforer', 'trouer', 'forer'],
        status: 'peu_probable',
        proof_ctx: "Le sens physique de perforation (faire un trou) est le sens premier de la racine. Mais le mot ath-thaqibu est un participe actif qui qualifie an-najmu (l'astre). Un astre ne perfore pas physiquement — il perce metaphoriquement l'obscurite par sa lumiere. Le sens de lumiere percante est l'extension metaphorique attestee par le Lane's pour cette racine quand elle s'applique aux astres.",
        axe1_verset: "Le mot ath-thaqibu est un participe actif defini qualifiant an-najmu. Le sens de perforation physique ferait de l'astre un objet qui troue quelque chose — ce qui est bizarre pour un astre. Le champ lexical (ciel, astre) oriente vers la lumiere, pas vers la perforation materielle.",
        axe2_voisins: "L'astre percant repond a la question du verset 2 sur l'identite du tariq. La perforation physique ne repondrait pas a cette question — c'est la lumiere de l'astre qui le rend identifiable et remarquable.",
        axe3_sourate: "La sourate traite de la creation et du jugement. La perforation physique n'a pas de lien avec ces themes. La lumiere qui perce l'obscurite est une image beaucoup plus pertinente pour introduire l'idee que rien n'est cache.",
        axe4_coherence: "Le Lane's cite explicitement le Coran 86:3 sous le sens de lumiere percante : etoile qui brille intensement comme si elle percait l'obscurite ou les spheres celestes par sa lumiere.",
        axe5_frequence: "La perforation physique est un acte destructeur. La lumiere percante est un acte revelateur. Le khalifa a besoin de lumiere, pas de destruction."
      },
      'Lumière perçante': {
        senses: ['briller intensement', 'etoile percante', 'tison'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, le Lane's donne thaqib comme qualificatif d'une etoile ou d'une lampe qui brille si intensement qu'elle semble percer l'obscurite et la dissiper. C'est une extension metaphorique de la perforation : la lumiere traverse les tenebres comme un outil traverse la matiere. Le participe actif (celui qui perce) est compatible avec cette realite — l'astre fait activement l'action de percer l'obscurite par sa lumiere. Le sens de perforation physique (faire un trou) est le sens premier mais il ne s'applique pas naturellement a un astre — un astre ne troue pas la matiere, il illumine.",
        axe1_verset: "Le mot ath-thaqibu est un participe actif defini au cas nominatif, qualifiant an-najmu (l'astre). Le champ lexical est celui de la lumiere celeste — l'astre est defini par sa capacite a percer l'obscurite. Le participe actif (une forme qui dit que l'astre FAIT l'action en continu) indique que cette luminosite est une propriete permanente de l'astre, pas un evenement ponctuel. La phrase nominale an-najmu ath-thaqibu est un constat d'identite.",
        axe2_voisins: "Le verset 3 repond a la question du verset 2 : le tariq est l'astre percant. La reponse utilise un nouveau mot (thaqib) pour completer le sens du tariq — le frappeur nocturne est une lumiere qui perce les tenebres. Les deux racines (trq = frapper, thqb = percer) se completent : le tariq frappe a la porte de la nuit, le thaqib perce son obscurite.",
        axe3_sourate: "La lumiere percante est le premier signe de la sourate. Elle introduit le theme de la revelation — ce qui est cache dans l'obscurite finira par etre eclaire. Ce theme se prolonge au verset 9 ou les secrets seront mis a l'epreuve. L'astre percant est l'annonce que rien ne restera cache.",
        axe4_coherence: "En 37:10, le Coran utilise shihabun thaqibun (flamme percante) pour decrire les etoiles filantes qui poursuivent les djinns. Le mot thaqib qualifie la lumiere dans les deux cas — en 37:10 comme en 86:3. La lumiere percante est une realite physique observable : certaines etoiles brillent avec une intensite telle qu'elles semblent transpercer le ciel noir.",
        axe5_frequence: "La lumiere percante est l'instrument du khalifa contre l'obscurite de l'ignorance et de l'injustice. Voir clair dans les tenebres est la condition premiere de la justice — il faut distinguer le vrai du faux avant de pouvoir agir justement. L'astre percant est le modele de cette clarte."
      },
      'Passage/Voie': {
        senses: ['grande route', 'voie qui traverse'],
        status: 'nul',
        proof_ctx: "Le sens de route/voie est une extension metaphorique (la route perce le paysage). Un participe actif qualifiant un astre ne peut pas designer une voie."
      },
      'Pénétration intellectuelle': {
        senses: ['penetrer dans les affaires'],
        status: 'nul',
        proof_ctx: "Le sens de penetration intellectuelle s'applique a une personne, pas a un astre."
      }
    }
  }, 2);

  await upsertVA(5934, {
    translation_arab: "L'astre percant",
    full_translation: "C'est l'étoile vivement brillante",
    segments: [
      { fr: "L'astre", pos: "N", phon: "an-najmu", arabic: "ٱلنَّجْمُ", position: 1, word_key: "njm", is_particle: false, sense_retenu: "astre" },
      { fr: "percant", pos: "ADJ", phon: "ath-thaqibu", arabic: "ٱلثَّاقِبُ", position: 2, word_key: "thqb", is_particle: false, sense_retenu: "percant" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset 3 est la reponse a la question du verset 2. C'est une phrase nominale composee d'un nom et de son qualificatif, tous deux au nominatif defini.

Le mot **an-najmu** est un nom masculin defini au cas nominatif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-j-m designe l'etoile, l'astre. An-najmu est l'astre — le texte revele que le tariq (le frappeur nocturne du verset 1) est un astre celeste.

Le mot **ath-thaqibu** est un participe actif (une forme qui dit que l'astre FAIT l'action en continu) de la racine th-q-b, defini par l'article al-. D'apres les sources etymologiques, la racine th-q-b signifie percer, perforer, faire un trou qui traverse. Le participe actif thaqib, applique a un astre, signifie celui qui brille si intensement qu'il semble percer l'obscurite et la dissiper. Le Lane's cite explicitement ce verset sous ce sens.

§JUSTIFICATION§
**astre** — Le sens retenu est « astre ». Ce mot est choisi car najm designe un corps celeste lumineux. L'alternative « etoile » est ecartee car etoile en francais designe specifiquement une etoile fixe, tandis qu'astre est plus large et peut inclure les planetes et les etoiles filantes. Le texte ne precise pas de quel astre il s'agit.

**percant** — Le sens retenu est « percant ». Ce mot est choisi car il combine l'idee de perforation (le sens premier de la racine) et de lumiere intense (l'application a un astre). L'alternative « brillant » est ecartee car elle perd le sens de penetration — briller est passif, percer est actif. L'alternative « etincelant » est ecartee car l'etincelle est breve, tandis que l'astre perce en continu.

§CRITIQUE§
**percant vs vivement brillante** — Hamidullah traduit « vivement brillante ». Cette traduction perd completement le sens de la racine th-q-b (percer, perforer). « Vivement brillante » decrit une intensite lumineuse, mais « percant » decrit une lumiere qui traverse et dissipe l'obscurite — c'est beaucoup plus fort. Le Lane's dit explicitement : qui brille comme si elle percait l'obscurite. La traduction etymologique preserve cette image de penetration que « brillante » efface.`
  });

  console.log('VERSET 86:3 — TERMINÉ');
  console.log('  njm → Astre/Guidance → "astre"');
  console.log('  thqb → Lumière perçante → "percant"');

  // ========== VERSET 4 (5935) ==========
  // إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ
  console.log('\n--- v4 (5935): in kullu nafsin lamma alayha hafizun ---');

  await upsertVWA(5935, 'kll', 'chaque', {
    sense_chosen: 'chaque',
    concept_chosen: 'Totalité',
    concepts: {
      'Totalité': {
        senses: ['tout', 'chaque', 'totalite'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine k-l-l porte le sens de totalite, l'ensemble sans exception. Le mot kullu est au cas nominatif, sujet de la phrase. Kullu nafsin signifie chaque ame, toute ame — sans exception. Le sens de totalite est le seul sens pertinent dans ce contexte.",
        axe1_verset: "Le mot kullu est un nom au cas nominatif, en idafa avec nafsin (ame). La structure in kullu nafsin lamma alayha hafizun signifie : il n'est d'ame qui n'ait sur elle un gardien. Le mot kullu etablit l'universalite — aucune ame n'echappe a la surveillance. Le champ lexical est celui de l'exhaustivite et de la surveillance.",
        axe2_voisins: "Apres les versets 1-3 qui presentent l'astre percant, le verset 4 passe a l'ame humaine. La transition est significative : de meme que l'astre perce l'obscurite, de meme un gardien surveille chaque ame. Rien n'echappe.",
        axe3_sourate: "La sourate 86 va du cosmique (le ciel, l'astre) au personnel (chaque ame). Le mot kullu est le pivot — il applique a chaque ame individuelle la surveillance universelle annoncee par l'astre percant.",
        axe4_coherence: "Le Coran utilise kullu nafsin dans de nombreux versets. En 3:185, kullu nafsin dha'iqatu al-mawt (toute ame goutera la mort). En 21:35, kullu nafsin dha'iqatu al-mawt (meme formule). L'universalite de kullu nafsin est un theme majeur.",
        axe5_frequence: "L'universalite est le fondement de la justice. Le khalifa sait que toute ame est egale devant la surveillance — pas d'exception, pas de privilege. La justice exige l'application universelle."
      },
      'Émoussement/Faiblesse': { senses: ['s emousser', 'etre fatigue'], status: 'nul', proof_ctx: "Aucun rapport avec le contexte de surveillance universelle." },
      'Charge/Dépendance': { senses: ['fardeau', 'personne a charge'], status: 'nul', proof_ctx: "Le sens de fardeau ne s'applique pas a kullu dans ce contexte syntaxique." }
    }
  }, 1);

  await upsertVWA(5935, 'nfs', 'ame', {
    sense_chosen: 'ame',
    concept_chosen: 'Âme/Être',
    concepts: {
      'Âme/Être': {
        senses: ['ame', 'soi-meme', 'personne', 'esprit', 'desir'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-f-s designe l'ame, le soi, la personne dans sa totalite. Le mot nafsin est au cas genitif (complement de kullu dans l'idafa). Chaque nafs est une entite complete — un etre avec sa conscience, ses actes et ses secrets. Le sens de souffle/vie est un derive physique qui ne s'applique pas ici ou il s'agit de l'etre surveille. Le sens de desir est trop restreint.",
        axe1_verset: "Le mot nafsin est un nom feminin indefini au cas genitif, en idafa avec kullu. Le champ lexical est celui de l'etre individuel sous surveillance. La nafs est ce qui est surveille — l'entite complete avec ses actes et ses secrets. Le gardien (hafiz, verset suivant) veille sur cette nafs.",
        axe2_voisins: "Le verset 5 demandera a l'etre humain de regarder de quoi il a ete cree. La nafs du verset 4 est la meme entite qui sera invitee a la reflexion au verset 5. La sequence v4-v5 dit : chaque ame est surveillee, que l'etre humain regarde donc son origine.",
        axe3_sourate: "La nafs est le sujet central de la sourate 86 apres l'ouverture cosmique. La sourate passe du ciel (v1-3) a l'ame (v4) a la creation physique (v5-7) au retour (v8) au jugement (v9-10). L'ame est le fil conducteur.",
        axe4_coherence: "Le Coran utilise nafsin dans des contextes de responsabilite individuelle. En 2:286, la yukallifu allahu nafsan illa wus'aha (Dieu ne charge une ame que de ce qu'elle peut). L'ame est toujours l'unite de responsabilite dans le Coran.",
        axe5_frequence: "L'ame est le lieu de la mission du khalifa. C'est dans l'ame que se jouent les choix de justice ou d'injustice. La surveillance de chaque ame rappelle que les actes ont des consequences — condition de la responsabilite."
      },
      'Souffle/Vie': { senses: ['souffle', 'respirer', 'soulagement'], status: 'nul', proof_ctx: "Le sens de souffle/respiration ne s'applique pas a l'ame surveillee par un gardien. Il s'agit de l'etre complet, pas de la respiration." }
    }
  }, 2);

  await upsertVWA(5935, 'hfz', 'gardien', {
    sense_chosen: 'gardien',
    concept_chosen: 'Préservation/Protection',
    concepts: {
      'Préservation/Protection': {
        senses: ['garder', 'preserver', 'proteger', 'surveiller'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-f-z signifie garder, preserver, proteger, surveiller. Le mot hafizun est un participe actif indefini au cas nominatif (predicat). Le participe actif indique que le gardien FAIT l'action activement et en continu — il garde, il surveille. L'indefini (sans article) indique un gardien non specifie — le texte ne dit pas qui est ce gardien. Le sens de memorisation est possible pour la racine mais ne s'applique pas a un gardien sur une ame — on ne « memorise » pas une ame, on la surveille.",
        axe1_verset: "Le mot hafizun est un participe actif indefini au cas nominatif, predicat de la phrase. Le champ lexical est celui de la surveillance : chaque ame (kullu nafsin) a sur elle (alayha) un gardien (hafiz). La preposition ala (sur) indique une position de surplomb — le gardien est au-dessus, il voit tout. Le participe actif indefini designe un gardien dont l'identite n'est pas precisee par le texte.",
        axe2_voisins: "Apres l'astre percant qui perce l'obscurite (v3), le gardien surveille chaque ame (v4). La lumiere de l'astre et la surveillance du gardien sont paralleles — rien n'echappe, ni dans le ciel ni dans les ames. Le verset 9 completera cette idee en disant que les secrets seront mis a l'epreuve.",
        axe3_sourate: "La surveillance est le theme qui relie l'ouverture cosmique (v1-3) au jugement final (v9-10). L'astre perce l'obscurite, le gardien surveille l'ame, les secrets seront eprouves — une progression de la lumiere a la verite.",
        axe4_coherence: "Le Coran utilise la racine h-f-z pour la surveillance dans d'autres passages. En 82:10-12, wa inna alaykum lahafizina kiraman katibina (il y a sur vous des gardiens, nobles, qui ecrivent). En 50:18, ma yalfizu min qawlin illa ladayhi raqibun atidun (il ne prononce pas un mot sans qu'un observateur attentif soit pres de lui). La surveillance est un theme coranique recurrent.",
        axe5_frequence: "La surveillance est le cadre qui rend la mission du khalifa possible. Sans surveillance, il n'y a pas de responsabilite. Le khalifa sait qu'il est surveille — ses actes comptent, ses choix ont des consequences. C'est cette conscience qui le maintient sur le droit chemin."
      },
      'Mémorisation': {
        senses: ['memoriser'],
        status: 'nul',
        proof_ctx: "Le sens de memoriser ne s'applique pas a un gardien (hafiz) qui veille sur une ame. La preposition ala (sur) indique une surveillance, pas une memorisation."
      }
    }
  }, 3);

  await upsertVA(5935, {
    translation_arab: "Chaque ame a sur elle un gardien",
    full_translation: "Il n'est pas d'âme qui n'ait sur elle un gardien",
    segments: [
      { fr: "Certes", pos: "PART", phon: "in", arabic: "إِن", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "chaque", pos: "N", phon: "kullu", arabic: "كُلُّ", position: 2, word_key: "kll", is_particle: false, sense_retenu: "chaque" },
      { fr: "ame", pos: "N", phon: "nafsin", arabic: "نَفْسٍ", position: 3, word_key: "nfs", is_particle: false, sense_retenu: "ame" },
      { fr: "assurement", pos: "PART", phon: "lamma", arabic: "لَّمَّا", position: 4, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "sur elle", pos: "PREP", phon: "alayha", arabic: "عَلَيْهَا", position: 5, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "(un) gardien", pos: "N", phon: "hafizun", arabic: "حَافِظٌ", position: 6, word_key: "hfz", is_particle: false, sense_retenu: "gardien" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **in** est ici une particule d'affirmation (pas de negation) suivie de **lamma** qui renforce l'affirmation : « assurement, sans aucun doute ». La structure in...lamma est une double affirmation emphatique.

Le mot **kullu** est un nom au cas nominatif, en idafa (annexion) avec **nafsin** (ame au genitif indefini). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kull signifie tout, chaque, la totalite sans exception. Kullu nafsin = chaque ame, toute ame.

La preposition **alayha** (sur elle) indique que le gardien est en position de surplomb par rapport a l'ame.

Le mot **hafizun** est un participe actif (une forme qui dit que la personne FAIT l'action activement et en continu) de la racine h-f-z, indefini au cas nominatif, predicat de la phrase. D'apres les sources etymologiques, la racine h-f-z signifie garder, preserver, proteger, surveiller. Le participe actif indefini indique un gardien non specifie — le texte ne dit pas qui est ce gardien.

§JUSTIFICATION§
**chaque** — Le sens retenu est « chaque ». C'est le sens direct de kullu en idafa. L'alternative « tout » est ecartee car en francais « toute ame » est plus litteraire que « chaque ame ». « Chaque » insiste sur l'individualite — chaque ame separement a son gardien.

**ame** — Le sens retenu est « ame ». C'est le sens direct de nafs dans ce contexte. L'alternative « personne » est ecartee car elle est trop exterieure — la nafs inclut la dimension interieure (conscience, secrets) que le gardien surveille.

**gardien** — Le sens retenu est « gardien ». Ce mot est choisi car hafiz est un participe actif de garder/surveiller. L'alternative « protecteur » est ecartee car proteger implique une bienveillance, tandis que garder est plus neutre — le gardien peut aussi etre un surveillant qui enregistre les actes. L'alternative « conservateur » est ecartee car elle n'est pas du francais courant.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « il n'est pas d'ame qui n'ait sur elle un gardien ». La traduction est fidele. La seule difference est la tournure negative (« il n'est pas d'ame qui n'ait ») vs notre tournure affirmative (« chaque ame a »). Les deux expriment la meme universalite.`
  });

  console.log('VERSET 86:4 — TERMINÉ');
  console.log('  kll → Totalité → "chaque"');
  console.log('  nfs → Âme/Être → "ame"');
  console.log('  hfz → Préservation/Protection → "gardien"');

  // ========== VERSET 5 (5936) ==========
  // فَلْيَنظُرِ ٱلْإِنسَـٰنُ مِمَّ خُلِقَ
  console.log('\n--- v5 (5936): fa-l-yanzhur al-insanu mimma khuliqa ---');

  await upsertVWA(5936, 'nzr', 'regarder', {
    sense_chosen: 'regarder',
    concept_chosen: 'Regard/Contemplation',
    concepts: {
      'Regard/Contemplation': {
        senses: ['regarder', 'voir', 'contempler', 'considerer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-z-r signifie regarder, contempler, considerer. Le verbe yanzhur est a l'inaccompli au jussif (forme de l'ordre indirect : qu'il regarde). Le jussif donne un commandement — c'est une injonction a l'etre humain de porter son regard sur son origine. Le sens d'attente est exclu car il n'y a pas de complement temporal.",
        axe1_verset: "Le verbe yanzhur est a l'inaccompli jussif (une forme d'ordre indirect, comme « qu'il regarde ») de la racine n-z-r. Le sujet est al-insanu (l'etre humain). Le complement est mimma khuliqa (de quoi il a ete cree). Le champ lexical est celui de l'introspection — l'etre humain est invite a regarder sa propre origine. Le fa introductif lie cette injonction au verset 4 : puisque chaque ame est surveillee, que l'etre humain regarde donc de quoi il est fait.",
        axe2_voisins: "Le verset 4 disait que chaque ame a un gardien. Le verset 5 enchaine : que l'etre humain regarde. Le verset 6 repondra : il a ete cree d'une eau jaillissante. La sequence v4-v6 est logique : tu es surveille (v4), regarde ton origine (v5), tu viens d'une eau (v6). Le regard sur l'origine est une lecon d'humilite.",
        axe3_sourate: "La sourate 86 passe du cosmique (v1-3) a l'individuel (v4-7). Le verbe yanzhur est le pivot — il redirige l'attention du ciel vers l'etre humain lui-meme. Regarder son origine est la premiere etape vers la prise de conscience.",
        axe4_coherence: "Le Coran utilise fa-l-yanzhur dans d'autres passages. En 80:24, fa-l-yanzhur al-insanu ila ta'amihi (que l'etre humain regarde sa nourriture). La formule est identique : une invitation a la contemplation de ce qui est ordinaire pour y decouvrir l'extraordinaire.",
        axe5_frequence: "Le regard est l'instrument premier du khalifa. Avant d'agir, il regarde. Avant de juger, il contemple. L'injonction de regarder son origine est un rappel que la mission de justice commence par la connaissance de soi."
      },
      'Attente': {
        senses: ['attendre', 'delai'],
        status: 'nul',
        proof_ctx: "Le sens d'attente exige un complement temporel ou un contexte d'anticipation. Ici le complement est mimma khuliqa (de quoi il a ete cree) — c'est un objet de contemplation, pas d'attente."
      }
    }
  }, 1);

  await upsertVWA(5936, 'Ans', 'etre humain', {
    sense_chosen: 'etre humain',
    concept_chosen: 'Humanité/Espèce',
    concepts: {
      'Humanité/Espèce': {
        senses: ['etres humains', 'etre humain', 'peuple residant en un lieu', 'domestique'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine a-n-s designe l'etre humain, l'espece humaine. Le mot al-insanu est un nom defini au cas nominatif, sujet de yanzhur. Al-insan designe l'etre humain en tant que genre — pas un individu particulier mais l'espece entiere. Le sens de sociabilite/familiarite est un derive de la meme racine (uns = intimite) mais ne s'applique pas ici ou le mot designe l'espece. Le sens d'oubli (insiyan) est etymologiquement discute — certains grammairiens rattachent insan a nasiya (oublier), mais le Lane's privilegie le rattachement a la racine a-n-s.",
        axe1_verset: "Le mot al-insanu est un nom defini au cas nominatif, sujet du verbe yanzhur. Le champ lexical est celui de l'espece humaine face a sa propre creation. L'article al- donne une valeur generique — c'est l'etre humain en general, pas un individu. L'injonction s'adresse a toute l'espece.",
        axe2_voisins: "Le verset 4 parlait de chaque ame (kullu nafsin). Le verset 5 parle de l'etre humain (al-insan). Le passage de nafs a insan est un changement de perspective — de l'ame individuelle a l'espece. Le verset 6 precisera la materialite de cette creation.",
        axe3_sourate: "La sourate 86 invite l'etre humain a se contempler. Le mot al-insan est le point de bascule entre le cosmique (v1-3) et le biologique (v6-7). L'etre humain est invite a faire le lien entre le ciel au-dessus de lui et la matiere dont il est fait.",
        axe4_coherence: "Le Coran utilise al-insan dans des contextes de reflexion sur l'origine. En 76:1, hal ata ala al-insani hinun min ad-dahri (est-il venu sur l'etre humain un temps ou il n'etait rien ?). L'etre humain est regulierement invite a mediter sur son debut.",
        axe5_frequence: "L'etre humain est le khalifa — celui qui est charge de la mission de justice et de civilisation. Mais avant d'exercer cette mission, il doit se connaitre lui-meme. Regarder son origine est l'acte fondateur de l'humilite necessaire a la justice."
      },
      'Sociabilité/Familiarité': {
        senses: ['etre sociable et familier', 'etre a l aise', 'ami choisi', 'rendre familier'],
        status: 'nul',
        proof_ctx: "Le sens de sociabilite vient de la racine a-n-s (intimite, familiarite). Mais al-insan dans ce verset designe l'espece humaine, pas la qualite de sociabilite."
      },
      'Joie/Réconfort': {
        senses: ['se rejouir', 'etre console'],
        status: 'nul',
        proof_ctx: "Aucun rapport avec l'invitation a regarder son origine."
      },
      'Perception/Connaissance': {
        senses: ['percevoir', 'voir et connaitre', 'pupille de l oeil'],
        status: 'nul',
        proof_ctx: "Le sens de perception (insanu al-ayn = la pupille) est un derive nominal specialise. Al-insanu ici designe l'espece, pas la pupille."
      },
      'Oubli': {
        senses: ['oubli'],
        status: 'nul',
        proof_ctx: "Le rattachement de insan a nasiya (oublier) est une etymologie populaire contestee. Le Lane's privilegie le rattachement a a-n-s. De plus, le contexte n'est pas celui de l'oubli."
      }
    }
  }, 2);

  await upsertVWA(5936, 'xlq', 'cree', {
    sense_chosen: 'cree',
    concept_chosen: 'Création/Production',
    concepts: {
      'Création/Production': {
        senses: ['creer', 'creation', 'creature', 'faconner', 'nature', 'caractere'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-l-q signifie creer, faconner, donner l'existence. Le verbe khuliqa est au passif accompli (une forme qui dit que l'action a ete subie et qu'elle est achevee) — il a ete cree. Le passif ne precise pas par qui — le texte dit « de quoi il a ete cree », pas « par qui ». La question porte sur la matiere, pas sur l'agent.",
        axe1_verset: "Le verbe khuliqa est au passif accompli au cas majzum (apres mimma). Le sujet implicite est al-insanu du debut du verset. Le complement est mimma (de quoi) qui introduit la matiere de la creation. Le champ lexical est celui de l'origine materielle de l'etre humain.",
        axe2_voisins: "Le verset 5 pose la question (de quoi a-t-il ete cree ?) et le verset 6 repond (d'une eau jaillissante). La structure question-reponse est la meme qu'aux versets 2-3 (qu'est-ce que le tariq ? l'astre percant).",
        axe3_sourate: "La creation de l'etre humain est le deuxieme theme majeur de la sourate apres le serment cosmique. La sourate relie le ciel (creation cosmique) a l'homme (creation biologique) pour montrer que le meme ordre regit les deux.",
        axe4_coherence: "Le Coran utilise khuliqa pour inviter a la reflexion. En 86:5, mimma khuliqa. En 96:2, khalaqa al-insana min alaq. La creation de l'homme est un theme recurrent de reflexion.",
        axe5_frequence: "Connaitre sa propre creation est la base de l'humilite. Le khalifa qui sait de quoi il est fait ne peut pas etre arrogant. La creation a partir d'une matiere humble rappelle que la dignite vient de la mission, pas de l'origine."
      }
    }
  }, 3);

  await upsertVA(5936, {
    translation_arab: "Que l'etre humain regarde de quoi il a ete cree",
    full_translation: "Que l'homme considère donc de quoi il a été créé",
    segments: [
      { fr: "Que", pos: "PART", phon: "fa-l", arabic: "فَلْ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "regarde", pos: "V", phon: "yanzhur", arabic: "يَنظُرِ", position: 2, word_key: "nzr", is_particle: false, sense_retenu: "regarder" },
      { fr: "l'etre humain", pos: "N", phon: "al-insanu", arabic: "ٱلْإِنسَـٰنُ", position: 3, word_key: "Ans", is_particle: false, sense_retenu: "etre humain" },
      { fr: "de quoi", pos: "PART", phon: "mimma", arabic: "مِمَّ", position: 4, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "il a ete cree", pos: "V", phon: "khuliqa", arabic: "خُلِقَ", position: 5, word_key: "xlq", is_particle: false, sense_retenu: "cree" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **fa** (alors, donc) lie ce verset au precedent — puisque chaque ame a un gardien, alors que l'etre humain regarde. La particule **li** (la) devant le verbe est le lam de l'ordre indirect (lam al-amr), qui transforme l'inaccompli en jussif (un mode qui exprime un ordre atenue, comme « qu'il regarde »).

Le verbe **yanzhur** est a l'inaccompli jussif de la racine n-z-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), nazara signifie regarder, contempler, considerer. Le jussif donne un ordre indirect : que l'etre humain regarde.

Le mot **al-insanu** est un nom defini au cas nominatif, sujet de yanzhur. C'est l'etre humain en general — pas un individu, mais l'espece.

Le mot **mimma** est la contraction de min (de) + ma (quoi). C'est un pronom interrogatif qui introduit la question : de quoi ?

Le verbe **khuliqa** est au passif accompli (une forme qui dit que l'action a ete subie dans le passe) de la racine kh-l-q. Le passif ne nomme pas l'agent — le texte demande de quoi l'etre humain a ete cree, pas par qui.

§JUSTIFICATION§
**regarde** — Le sens retenu est « regarder ». Ce mot est choisi car nazara signifie porter son regard, contempler. L'alternative « considere » est ecartee car elle est trop intellectuelle — regarder est plus physique, plus direct, plus accessible.

**etre humain** — Le sens retenu est « etre humain ». Ce mot est choisi car al-insan designe l'espece humaine. L'alternative « homme » est ecartee car elle peut etre comprise au sens masculin en francais courant. « Etre humain » est plus inclusif et plus precis.

**cree** — Le sens retenu est « cree ». C'est le sens direct du passif de khalaqa.

§CRITIQUE§
**regarde vs considere** — Hamidullah traduit « que l'homme considere ». « Considere » est un registre plus soutenu que « regarde ». Le texte arabe utilise nazara, qui est le regard physique en premier lieu, avec l'extension vers la reflexion. « Regarde » est plus fidele au registre du texte et plus accessible.`
  });

  console.log('VERSET 86:5 — TERMINÉ');
  console.log('  nzr → Regard/Contemplation → "regarder"');
  console.log('  Ans → Humanité/Espèce → "etre humain"');
  console.log('  xlq → Création/Production → "cree"');

  // ========== VERSET 6 (5937) ==========
  // خُلِقَ مِن مَّآءٍ دَافِقٍ
  console.log('\n--- v6 (5937): khuliqa min ma\'in dafiqin ---');

  await upsertVWA(5937, 'xlq', 'cree', {
    sense_chosen: 'cree',
    concept_chosen: 'Création/Production',
    concepts: {
      'Création/Production': {
        senses: ['creer', 'creation', 'creature', 'faconner', 'nature'],
        status: 'retenu',
        proof_ctx: "Meme racine et meme forme que le verset 5. Le verbe khuliqa est au passif accompli — il a ete cree. Ici la reponse est donnee : il a ete cree d'une eau jaillissante. Le passif maintient l'anonymat de l'agent — le texte insiste sur la matiere (eau), pas sur le createur.",
        axe1_verset: "Le verbe khuliqa est au passif accompli, sujet implicite (l'etre humain du verset 5). Le complement est min ma'in dafiqin (d'une eau jaillissante). Le champ lexical est celui de l'origine biologique — l'etre humain vient d'un liquide.",
        axe2_voisins: "Le verset 5 posait la question (de quoi il a ete cree). Le verset 6 repond : d'une eau jaillissante. Le verset 7 precisera l'origine anatomique de cette eau. La sequence v5-7 est une progression : question-reponse-precision.",
        axe3_sourate: "La creation a partir d'eau est le rappel d'humilite au coeur de la sourate. Apres le serment cosmique et la surveillance, l'etre humain est ramene a sa materialite la plus humble.",
        axe4_coherence: "Le Coran mentionne la creation a partir d'eau dans d'autres passages. En 21:30, wa ja'alna mina al-ma'i kulla shay'in hayyin (nous avons fait de l'eau toute chose vivante). En 77:20, a lam nakhluqkum min ma'in mahinun (ne vous avons-nous pas crees d'une eau vile ?).",
        axe5_frequence: "La creation a partir d'eau rappelle au khalifa son humilite. La dignite ne vient pas de la matiere d'origine mais de la mission confiee."
      }
    }
  }, 1);

  await upsertVWA(5937, 'dfq', 'versee', {
    sense_chosen: 'versee',
    concept_chosen: 'Jaillissement/Écoulement',
    concepts: {
      'Jaillissement/Écoulement': {
        senses: ['verser avec force', 'jaillir', 'repandre abondamment', 'couler d un seul coup', 'torrent qui remplit'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine d-f-q signifie verser avec force, repandre avec vehemence. Le mot dafiqin est un participe actif indefini au cas genitif, qualifiant ma'in (eau). IMPORTANT : le Lane's precise que ma'un dafiqun signifie madfuqun (eau qui a ete versee) — le participe actif a ici un sens passif, comme dans sirrun katimun (secret cache) ou asimun (protege). Cette particularite grammaticale est attestee par les grammairiens : la racine etant strictement transitive selon la majorite des lexicologues, le participe actif prend le sens du passif. Le sens de rapidite/impetuosite est une extension metaphorique qui ne s'applique pas a un liquide.",
        axe1_verset: "Le mot dafiqin est un participe actif indefini au genitif, qualifiant ma'in (eau). Le champ lexical est celui de la creation biologique — l'eau jaillissante est le fluide reproducteur. Le participe actif avec sens passif (eau versee, pas eau qui verse) indique que l'eau a ete projetee, repandue — c'est le resultat d'un acte. La qualification indefinie (sans article) indique une eau non specifiee, generique.",
        axe2_voisins: "Le verset 5 demandait de quoi l'etre humain a ete cree. Le verset 6 repond : d'une eau jaillissante. Le verset 7 precisera d'ou sort cette eau. La reponse est directe et concrete — pas de metaphore, pas d'abstraction.",
        axe3_sourate: "L'eau jaillissante est l'image la plus humble de l'origine humaine dans la sourate. Apres le ciel et l'astre percant (v1-3), la sourate descend jusqu'au liquide biologique. Ce contraste entre le cosmique et le biologique est delibere — il rappelle la distance entre la grandeur du ciel et l'humilite de l'origine.",
        axe4_coherence: "Le Coran mentionne l'eau de la creation dans d'autres passages. En 32:8, thumma ja'ala naslahu min sulalatin min ma'in mahinun (puis il a fait sa descendance d'un extrait d'eau vile). En 77:20, a lam nakhluqkum min ma'in mahinun (ne vous avons-nous pas crees d'une eau vile ?). L'eau est toujours presentee comme une matiere humble.",
        axe5_frequence: "L'eau jaillissante est le rappel que le khalifa ne se fait pas lui-meme. Il est cree a partir d'une matiere qu'il ne controle pas. La conscience de cette origine est le fondement de l'humilite — sans laquelle il n'y a pas de justice."
      },
      'Rapidité/Impétuosité': {
        senses: ['rapide', 'impetueux'],
        status: 'nul',
        proof_ctx: "Le sens de rapidite s'applique a des chameaux ou des chevaux dans le Lane's, pas a un liquide biologique."
      }
    }
  }, 2);

  await upsertVA(5937, {
    translation_arab: "Il a ete cree d'une eau versee",
    full_translation: "Il a été créé d'une giclée d'eau",
    segments: [
      { fr: "Il a ete cree", pos: "V", phon: "khuliqa", arabic: "خُلِقَ", position: 1, word_key: "xlq", is_particle: false, sense_retenu: "cree" },
      { fr: "d'une eau", pos: "N", phon: "min ma'in", arabic: "مِن مَّآءٍ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "versee", pos: "ADJ", phon: "dafiqin", arabic: "دَافِقٍ", position: 3, word_key: "dfq", is_particle: false, sense_retenu: "versee" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **khuliqa** est au passif accompli de la racine kh-l-q — il a ete cree. C'est la meme forme qu'au verset 5. Le passif ne nomme pas l'agent createur.

La preposition **min** (de, a partir de) introduit la matiere de la creation.

Le mot **ma'in** est un nom masculin indefini au cas genitif (apres min). C'est le mot arabe pour eau.

Le mot **dafiqin** est un participe actif (une forme qui dit normalement que la chose FAIT l'action) indefini au cas genitif, qualifiant ma'in. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine d-f-q signifie verser avec force, repandre avec vehemence. Le Lane's precise un point grammatical important : ma'un dafiqun signifie madfuqun (eau versee), parce que la racine est strictement transitive selon la majorite des grammairiens — le participe actif prend le sens du passif. Ce phenomene existe dans d'autres mots arabes : sirrun katimun = secret cache (pas : secret qui cache), asimun = protege (pas : qui protege).

§JUSTIFICATION§
**versee** — Le sens retenu est « versee ». Ce mot est choisi car dafaqa signifie verser avec force et le participe actif a ici un sens passif (eau qui a ete versee). L'alternative « jaillissante » est ecartee car le jaillissement implique que l'eau sort d'elle-meme (intransitif), alors que le Lane's precise que la racine est transitive — l'eau est versee, pas l'eau qui jaillit d'elle-meme. L'alternative « repandue » est ecartee car elle perd la dimension de force et de vehemence que porte la racine.

§CRITIQUE§
**versee vs giclee** — Hamidullah traduit « une giclee d'eau ». Cette traduction transforme l'adjectif (eau versee) en nom (une giclee). De plus, « giclee » est un mot familier en francais qui peut avoir des connotations non souhaitees. L'etymologie donne simplement « une eau versee [avec force] », ce qui est plus neutre et plus fidele.`
  });

  console.log('VERSET 86:6 — TERMINÉ');
  console.log('  xlq → Création/Production → "cree"');
  console.log('  dfq → Jaillissement/Écoulement → "versee"');

  // ========== VERSET 7 (5938) ==========
  // يَخْرُجُ مِنۢ بَيْنِ ٱلصُّلْبِ وَٱلتَّرَآئِبِ
  console.log('\n--- v7 (5938): yakhruju min bayni as-sulbi wa-at-tara\'ibi ---');

  await upsertVWA(5938, 'xrj', 'sort', {
    sense_chosen: 'sort',
    concept_chosen: 'Sortie/Émergence',
    concepts: {
      'Sortie/Émergence': {
        senses: ['sortir', 'faire sortir', 'expulser', 'emerger', 'produire'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-r-j signifie sortir, emerger, quitter un lieu. Le verbe yakhruju est a l'inaccompli (une forme qui indique une action en cours ou habituelle). Le sujet renvoie a l'eau du verset 6 — elle sort d'entre la colonne vertebrale et les cotes. L'inaccompli indique que cette sortie est un processus en cours, generique, pas un evenement ponctuel passe.",
        axe1_verset: "Le verbe yakhruju est a l'inaccompli de la forme I de kh-r-j. Le sujet est implicite (l'eau du verset 6). Le complement est min bayni as-sulbi wa-at-tara'ibi (d'entre la colonne vertebrale et les cotes). Le champ lexical est celui de l'anatomie et du mouvement — l'eau sort d'un lieu precis du corps.",
        axe2_voisins: "Le verset 6 disait que l'etre humain est cree d'une eau versee. Le verset 7 precise l'origine anatomique de cette eau. Le verset 8 enchainera sur la capacite de le faire revenir. La sequence v6-v7-v8 va de la matiere a l'origine a la possibilite du retour.",
        axe3_sourate: "La precision anatomique du verset 7 ancre la sourate dans le concret. Apres le cosmique (v1-3) et le moral (v4), la sourate descend dans le biologique le plus precis. Cette descente dans le concret prepare l'argument du verset 8 : si Dieu peut creer a partir de cette eau, il peut faire revenir.",
        axe4_coherence: "Le Coran utilise la racine kh-r-j pour decrire des emergences. En 7:57, khalaqa lakum min al-ardi (il a fait sortir pour vous de la terre). Le mouvement de sortie est un theme de creation et de renouvellement.",
        axe5_frequence: "La sortie est le premier acte de l'existence. Sortir du corps est le debut de la chaine qui mene a la vie, a la mission du khalifa, a la justice. L'etre humain sort d'un lieu humble pour accomplir une mission grande."
      },
      'Tribut/Revenu': { senses: ['impot', 'revenu'], status: 'nul', proof_ctx: "Aucun rapport avec le contexte anatomique." }
    }
  }, 1);

  await upsertVWA(5938, 'slb', 'colonne vertebrale', {
    sense_chosen: 'colonne vertebrale',
    concept_chosen: 'Dureté/Fermeté',
    concepts: {
      'Dureté/Fermeté': {
        senses: ['dur', 'ferme'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-l-b porte le sens de durete, fermete. Le mot as-sulbi est un nom defini au cas genitif (apres bayni). Le sulb est etymologiquement ce qui est dur et ferme — et par extension la colonne vertebrale, qui est la structure dure et rigide du dos. Le Lane's donne sulb comme la colonne vertebrale, l'epine dorsale. Le sens de supplice/crucifixion (salb) est un autre derive de la meme racine (attacher a une structure rigide) mais n'a aucun rapport avec le contexte anatomique.",
        axe1_verset: "Le mot as-sulbi est un nom masculin defini au cas genitif, premier element de la paire « entre X et Y ». Le champ lexical est anatomique — la colonne vertebrale est l'axe central du corps, la structure la plus dure et la plus rigide. L'eau sort d'entre cette structure et les cotes.",
        axe2_voisins: "Le verset 6 decrivait l'eau. Le verset 7 localise son origine dans le corps. La precision anatomique (colonne vertebrale + cotes) delimite un espace precis dans le torse superieur. Le texte ne dit pas « des reins » ou « des organes reproducteurs » — il dit d'entre la colonne vertebrale et les cotes.",
        axe3_sourate: "La mention de la colonne vertebrale apporte une precision scientifique a la description de la creation. La sourate descend du cosmique au biologique avec une rigueur croissante.",
        axe4_coherence: "Le Coran mentionne le sulb dans un autre passage en 4:23, hurrimat alaykum...wa hala'ilu abna'ikum alladhina min aslabikum (les epouses de vos fils qui sont de vos sulb = de vos reins). Le sulb y designe la descendance directe par le lien biologique.",
        axe5_frequence: "La colonne vertebrale est ce qui permet a l'etre humain de se tenir droit. Le khalifa se tient droit — physiquement et moralement. La creation a partir de ce lieu symbolise la verticalite de la mission."
      },
      'Supplice/Exposition': {
        senses: ['crucifier', 'croix'],
        status: 'nul',
        proof_ctx: "Le sens de crucifixion vient de la meme racine (attacher a une structure rigide) mais n'a aucun rapport avec le contexte anatomique du verset."
      }
    }
  }, 2);

  await upsertVWA(5938, 'trb', 'cotes', {
    sense_chosen: 'cotes',
    concept_chosen: 'Anatomie/Poitrine',
    concepts: {
      'Anatomie/Poitrine': {
        senses: ['cotes superieures', 'poitrine'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, le mot tara'ib est le pluriel de tariba et designe les os de la partie superieure de la poitrine — les cotes qui entourent le haut du torse. Le Lane's donne : les tara'ib sont les os de la poitrine. Le mot est au cas genitif (apres wa, coordonne avec as-sulbi). Le lien etymologique avec turab (terre, poussiere) vient de l'idee de base fondamentale — les cotes sont la base structurelle du torse. Le sens de terre/poussiere n'est pas pertinent pour ce mot qui est un terme anatomique specialise.",
        axe1_verset: "Le mot at-tara'ibi est un nom pluriel defini au cas genitif, deuxieme element de la paire « entre la colonne vertebrale et les cotes ». Le champ lexical est anatomique — les cotes completent la colonne vertebrale pour delimiter l'espace thoracique. L'eau sort d'entre ces deux structures osseuses.",
        axe2_voisins: "La paire sulb-tara'ib delimite un espace anatomique precis : la zone entre le dos (colonne vertebrale) et le devant (cotes de la poitrine). C'est l'espace thoracique et abdominal superieur. Le texte localise l'origine de l'eau dans cette zone.",
        axe3_sourate: "La precision anatomique sert l'argument de la sourate : si Dieu a pu creer l'etre humain a partir d'eau sortant de cet endroit precis, il peut le faire revenir (v8).",
        axe4_coherence: "Le Coran n'utilise le mot tara'ib qu'en 86:7. C'est un hapax (mot qui n'apparait qu'une seule fois). Le Lane's confirme que c'est un terme anatomique classique designant les cotes de la poitrine.",
        axe5_frequence: "Les cotes protegent le coeur et les organes vitaux. La creation a partir de cet espace protege montre que l'etre humain vient d'un lieu intime et vital du corps."
      },
      'Terre/Poussière': {
        senses: ['terre', 'poussiere', 'sol'],
        status: 'nul',
        proof_ctx: "Le sens de terre/poussiere est le sens general de la racine t-r-b, mais le mot tara'ib est un terme anatomique specialise qui designe les cotes de la poitrine, pas la terre."
      }
    }
  }, 3);

  await upsertVA(5938, {
    translation_arab: "Elle sort d'entre la colonne vertebrale et les cotes",
    full_translation: "Sortie d'entre les lombes et les côtes",
    segments: [
      { fr: "Elle sort", pos: "V", phon: "yakhruju", arabic: "يَخْرُجُ", position: 1, word_key: "xrj", is_particle: false, sense_retenu: "sort" },
      { fr: "d'entre", pos: "PREP", phon: "min bayni", arabic: "مِنۢ بَيْنِ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "la colonne vertebrale", pos: "N", phon: "as-sulbi", arabic: "ٱلصُّلْبِ", position: 3, word_key: "slb", is_particle: false, sense_retenu: "colonne vertebrale" },
      { fr: "et les cotes", pos: "N", phon: "wa-at-tara'ibi", arabic: "وَٱلتَّرَآئِبِ", position: 4, word_key: "trb", is_particle: false, sense_retenu: "cotes" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **yakhruju** est a l'inaccompli (une forme qui indique une action en cours ou habituelle) de la racine kh-r-j. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kharaja signifie sortir, emerger. Le sujet implicite renvoie a l'eau du verset 6. L'inaccompli indique un processus general et permanent, pas un evenement ponctuel.

La preposition **min** (de) suivie de **bayni** (entre) localise l'origine de l'eau dans un espace delimite par deux structures anatomiques.

Le mot **as-sulbi** est un nom masculin defini au cas genitif. D'apres les sources etymologiques, la racine s-l-b signifie etre dur, ferme. Le sulb est la colonne vertebrale — la structure dure et rigide du dos.

Le mot **at-tara'ibi** est un nom pluriel defini au cas genitif. C'est le pluriel de tariba, de la racine t-r-b. D'apres les sources etymologiques, les tara'ib sont les os de la partie superieure de la poitrine — les cotes. Le mot designe specifiquement les cotes de la poitrine, pas la terre (un autre sens de la meme racine).

La structure « d'entre la colonne vertebrale et les cotes » delimite l'espace thoracique — la zone entre le dos et le devant du torse.

§JUSTIFICATION§
**sort** — Le sens retenu est « sortir ». C'est le sens direct de yakhruju.

**colonne vertebrale** — Le sens retenu est « colonne vertebrale ». Ce mot est choisi car sulb designe la structure dure du dos. L'alternative « lombes » (utilisee par Hamidullah) est ecartee car les lombes sont la partie basse du dos, tandis que sulb designe la colonne vertebrale dans son ensemble. L'alternative « reins » (au sens ancien de dos/lombes) est ecartee car elle est archaique.

**cotes** — Le sens retenu est « cotes ». Ce mot est choisi car tara'ib designe les os de la poitrine. L'alternative « poitrine » est ecartee car la poitrine inclut les tissus mous, tandis que tara'ib designe specifiquement les os (les cotes).

§CRITIQUE§
**colonne vertebrale vs lombes** — Hamidullah traduit « les lombes ». Les lombes sont la partie inferieure du dos (zone lombaire). Le mot arabe sulb designe la colonne vertebrale — la structure rigide entiere, pas seulement la partie basse. La traduction « lombes » est une reduction anatomique qui pourrait orienter le lecteur vers une interpretation specifique (les glandes reproductives). Le texte dit simplement « la colonne vertebrale ».`
  });

  console.log('VERSET 86:7 — TERMINÉ');
  console.log('  xrj → Sortie/Émergence → "sort"');
  console.log('  slb → Dureté/Fermeté → "colonne vertebrale"');
  console.log('  trb → Anatomie/Poitrine → "cotes"');

  // ========== VERSET 8 (5939) ==========
  // إِنَّهُۥ عَلَىٰ رَجْعِهِۦ لَقَادِرٌ
  console.log('\n--- v8 (5939): innahu ala raj\'ihi laqadirun ---');

  await upsertVWA(5939, 'rje', 'retour', {
    sense_chosen: 'retour',
    concept_chosen: 'Retour/Réversion',
    concepts: {
      'Retour/Réversion': {
        senses: ['retourner', 'revenir', 'reverter', 'faire revenir', 'renvoyer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine r-j-e signifie retourner, revenir, faire revenir. Le mot raj'ihi est un masdar (nom verbal) au cas genitif (apres ala), avec le pronom -hi (son). Le masdar designe l'action de retour — son retour. Le pronom -hi renvoie a l'etre humain mentionne aux versets 5-7. Le sens de pluie est un derive (la pluie qui revient regulierement) qui n'est pas pertinent ici. Le sens de repetition ne s'applique pas dans ce contexte.",
        axe1_verset: "Le mot raj'ihi est un masdar au cas genitif, complement de la preposition ala (sur, a propos de). Le pronom -hi (son) renvoie a l'etre humain ou a sa creation. Le champ lexical est celui de la capacite et du retour — il (Dieu, implicite) est capable de faire revenir l'etre humain. Le verset relie la creation (v5-7) au retour (v8) par un argument de capacite.",
        axe2_voisins: "Les versets 5-7 decrivaient la creation de l'etre humain a partir d'eau. Le verset 8 en tire la conclusion : celui qui a cree a partir de cette matiere peut faire revenir. Le verset 9 precisera quand : le jour ou les secrets seront eprouves. La logique est : creation → capacite de retour → moment du retour.",
        axe3_sourate: "Le retour est l'argument central de la sourate. L'astre percant (v1-3), la surveillance (v4), la creation humble (v5-7) convergent vers cette conclusion : le retour est possible et certain. La sourate 86 est construite comme une demonstration.",
        axe4_coherence: "Le Coran utilise la racine r-j-e pour le retour/resurrection dans de nombreux passages. En 75:4, bala qadiriyna ala an nusawwiya bananahu (oui, nous sommes capables de reconstituer ses doigts). L'argument de la capacite divine a partir de la creation premiere est recurrent.",
        axe5_frequence: "Le retour est la garantie que les actes du khalifa ont des consequences. Sans retour, pas de jugement. Sans jugement, pas de responsabilite. Le retour est le cadre qui donne un sens a la mission de justice."
      },
      'Pluie/Renouvellement': { senses: ['pluie'], status: 'nul', proof_ctx: "Le sens de pluie est un derive specifique. Le contexte (apres la description de la creation humaine) indique clairement le retour de l'etre humain." },
      'Répétition': { senses: ['repeter', 'reponse'], status: 'nul', proof_ctx: "Le sens de repetition ne s'applique pas dans ce contexte de retour apres la mort." }
    }
  }, 1);

  await upsertVWA(5939, 'qdr', 'capable', {
    sense_chosen: 'capable',
    concept_chosen: 'Puissance/Capacité',
    concepts: {
      'Puissance/Capacité': {
        senses: ['pouvoir', 'etre capable'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine q-d-r porte le sens de pouvoir, etre capable, avoir la capacite. Le mot qadirun est un participe actif indefini au cas nominatif, predicat de la phrase inna-hu. Le lam devant qadirun est le lam d'insistance (la-qadirun = assurement capable). Le participe actif indique une capacite active et permanente — pas un acte ponctuel mais une capacite continue. Le sens de mesure/determination est un autre registre de la meme racine, mais ici le contexte (la capacite de faire revenir) impose le sens de puissance.",
        axe1_verset: "Le mot qadirun est un participe actif indefini au cas nominatif, renforce par le lam d'insistance. Le predicat de la phrase inna-hu ala raj'ihi la-qadirun : certes il est, a propos de son retour, assurement capable. Le champ lexical est celui de la capacite et de l'affirmation — inna + la forment la double emphase la plus forte en arabe.",
        axe2_voisins: "Les versets 5-7 decrivaient la creation. Le verset 8 affirme la capacite du retour. La logique est : si la creation a ete possible a partir d'une eau versee, le retour est d'autant plus possible. Le verset 9 precisera le moment de ce retour.",
        axe3_sourate: "La capacite divine est l'argument conclusif de la premiere moitie de la sourate. La sourate passe du serment (v1-3) a la surveillance (v4) a la creation (v5-7) a la capacite (v8). Chaque etape renforce l'argument suivant.",
        axe4_coherence: "Le Coran utilise qadir pour affirmer la capacite divine. En 75:40, a laysa dhalika bi-qadirin ala an yuhyiya al-mawta (celui-la n'est-il pas capable de donner la vie aux morts ?). Meme argument : la creation premiere prouve la capacite du retour.",
        axe5_frequence: "La capacite est le fondement de la confiance. Le khalifa sait que les actes seront juges parce que le retour est garanti par une capacite infinie. Cette certitude soutient la perseverance dans la justice."
      },
      'Mesure/Détermination': {
        senses: ['mesurer', 'determiner', 'decreter', 'destin', 'valeur'],
        status: 'nul',
        proof_ctx: "Le sens de mesure/determination est un autre registre de q-d-r. Mais le contexte (ala raj'ihi qadirun = capable de le faire revenir) impose le sens de capacite, pas de mesure."
      }
    }
  }, 2);

  await upsertVA(5939, {
    translation_arab: "Il est assurement capable de le faire revenir",
    full_translation: "Allah est certes capable de le ressusciter",
    segments: [
      { fr: "Certes il", pos: "PART", phon: "innahu", arabic: "إِنَّهُۥ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "a propos de", pos: "PREP", phon: "ala", arabic: "عَلَىٰ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "son retour", pos: "N", phon: "raj'ihi", arabic: "رَجْعِهِۦ", position: 3, word_key: "rje", is_particle: false, sense_retenu: "retour" },
      { fr: "assurement capable", pos: "ADJ", phon: "la-qadirun", arabic: "لَقَادِرٌ", position: 4, word_key: "qdr", is_particle: false, sense_retenu: "capable" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **inna** + le pronom **-hu** (il) ouvre une phrase emphatique. Le pronom -hu renvoie a Dieu (implicite dans le contexte).

La preposition **ala** (sur, a propos de) introduit l'objet de la capacite.

Le mot **raj'ihi** est un masdar (nom verbal, une forme qui transforme le verbe en nom — « le retour ») de la racine r-j-e, au cas genitif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), raj'a signifie retourner, revenir. Le pronom **-hi** (son) renvoie a l'etre humain. Raj'ihi = son retour.

Le lam devant **qadirun** est le lam d'insistance (lam at-tawkid). **Qadirun** est un participe actif (une forme qui dit que la personne FAIT l'action activement et en continu) de la racine q-d-r, indefini au cas nominatif, predicat de inna-hu. D'apres les sources etymologiques, qadara signifie pouvoir, etre capable. Le participe actif indique une capacite permanente, pas un acte ponctuel. La combinaison inna...la- est la formule d'affirmation la plus forte en arabe.

§JUSTIFICATION§
**retour** — Le sens retenu est « retour ». Ce mot est choisi car raj'a signifie retourner, revenir. L'alternative « resurrection » est ecartee car le texte dit raj' (retour), pas ba'th (resurrection) — le retour est un mouvement de revenir a un etat anterieur, tandis que la resurrection est un acte specifique de revivification. Le texte ne precise pas la nature exacte de ce retour.

**capable** — Le sens retenu est « capable ». Ce mot est choisi car qadir signifie qui a la capacite. L'alternative « puissant » est ecartee car la puissance est une qualite generale, tandis que la capacite est ciblee — capable DE quelque chose (ici, du retour).

§CRITIQUE§
**capable de le faire revenir vs capable de le ressusciter** — Hamidullah traduit « capable de le ressusciter ». Le texte dit raj'ihi (son retour), pas ba'thihi (sa resurrection). « Ressusciter » est une interpretation theologique qui precise la nature du retour. Le texte reste plus ouvert — il dit simplement « son retour », sans specifier s'il s'agit de resurrection physique, de retour a un etat, ou d'autre chose. L'etymologie pure preserve cette ouverture.

**il vs Allah** — Hamidullah ajoute le nom « Allah » qui n'est pas dans le texte arabe. Le texte dit inna-hu (certes il), le pronom renvoie a l'agent implicite de la creation. Le texte ne nomme pas Dieu explicitement ici — il utilise un pronom.`
  });

  console.log('VERSET 86:8 — TERMINÉ');
  console.log('  rje → Retour/Réversion → "retour"');
  console.log('  qdr → Puissance/Capacité → "capable"');

  // ========== VERSET 9 (5940) ==========
  // يَوْمَ تُبْلَى ٱلسَّرَآئِرُ
  console.log('\n--- v9 (5940): yawma tubla as-sara\'iru ---');

  await upsertVWA(5940, 'ywm', 'jour', {
    sense_chosen: 'jour',
    concept_chosen: 'Temps/Période',
    concepts: {
      'Temps/Période': {
        senses: ['jour', 'journee', 'temps', 'periode'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine y-w-m designe le jour, la journee, une periode de temps. Le mot yawma est au cas accusatif (complement circonstanciel de temps). Il indique le moment ou le retour (verset 8) aura lieu. Le sens d'evenement marquant est un derive qui pourrait aussi convenir mais le contexte demande simplement la reference temporelle.",
        axe1_verset: "Le mot yawma est un nom au cas accusatif, complement circonstanciel de temps. Il precise quand le retour du verset 8 aura lieu. Le champ lexical est temporel — un jour specifique ou les secrets seront eprouves.",
        axe2_voisins: "Le verset 8 affirmait la capacite du retour. Le verset 9 precise le moment. Le verset 10 decrira la situation a ce moment-la. La sequence v8-v10 est : capacite → moment → consequence.",
        axe3_sourate: "Le jour de l'epreuve des secrets est le point culminant de la sourate. Tout converge vers ce jour : l'astre percant (rien n'est cache), le gardien (tout est surveille), la creation (l'origine est humble), le retour (il aura lieu).",
        axe4_coherence: "Le Coran mentionne yawma dans de nombreux contextes eschatologiques. En 70:4, yawma ta'ruju al-mala'ikatu (le jour ou les anges monteront). Le jour est toujours un moment de basculement.",
        axe5_frequence: "Le jour de l'epreuve est le cadre qui donne un sens a la mission du khalifa. Les actes sont juges, les secrets sont reveles — c'est la motivation ultime de la justice."
      },
      'Événement/Moment marquant': { senses: ['evenement', 'bataille'], status: 'nul', proof_ctx: "Le sens de bataille/evenement est trop specifique. Le verset decrit un jour de jugement, pas une bataille." }
    }
  }, 1);

  await upsertVWA(5940, 'blw', 'eprouvees', {
    sense_chosen: 'eprouvees',
    concept_chosen: 'Épreuve/Test',
    concepts: {
      'Épreuve/Test': {
        senses: ['eprouver', 'tester', 'affliction'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine b-l-w signifie eprouver, tester, mettre a l'epreuve. Le verbe tubla est au passif inaccompli (une forme qui dit que l'action sera subie de maniere continue) — les secrets seront eprouves, testes, examines. Le passif ne precise pas par qui. Le sens d'usure est un derive physique (user un vetement) qui n'est pas pertinent ici.",
        axe1_verset: "Le verbe tubla est au passif inaccompli de la racine b-l-w. Le sujet est as-sara'iru (les secrets). Le champ lexical est celui de l'examen et de la revelation — les secrets ne sont pas simplement reveles, ils sont eprouves, testes, examines en profondeur. L'epreuve implique un processus actif de verification, pas une simple mise a nu.",
        axe2_voisins: "Le verset 8 affirmait la capacite du retour. Le verset 9 precise que ce retour inclura l'epreuve des secrets. Le verset 10 decrira l'impuissance a ce moment-la. L'epreuve est le mecanisme du jugement.",
        axe3_sourate: "L'epreuve des secrets est le theme final de la sourate (avant l'avertissement de la deuxieme partie). Tout ce qui a ete cache (les secrets que le gardien surveillait au verset 4) sera mis a l'epreuve. La sourate boucle : surveillance (v4) → epreuve (v9).",
        axe4_coherence: "Le Coran utilise la racine b-l-w pour l'epreuve dans de nombreux passages. En 2:155, wa-la-nabluwaннakum bi-shay'in min al-khawfi (nous vous eprouverons par quelque chose de la peur). L'epreuve est un theme majeur du Coran.",
        axe5_frequence: "L'epreuve est le mecanisme qui separe le vrai du faux. Le khalifa sait que ses secrets seront eprouves — pas seulement ses actes visibles, mais ses intentions cachees. C'est la motivation la plus profonde de l'integrite."
      },
      'Usure': { senses: ['user'], status: 'nul', proof_ctx: "Le sens d'usure physique ne s'applique pas a des secrets." }
    }
  }, 2);

  await upsertVWA(5940, 'srr', 'secrets', {
    sense_chosen: 'secrets',
    concept_chosen: 'Caché/Intime',
    concepts: {
      'Caché/Intime': {
        senses: ['secret'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-r-r porte plusieurs sens dont celui de secret, ce qui est cache et intime. Le mot as-sara'iru est le pluriel de sarira, un nom feminin qui designe le secret interieur, l'intention cachee, ce que la personne garde en elle-meme. Le mot est au cas nominatif, sujet du verbe passif tubla. Le sens de joie/plaisir est un autre derive de la meme racine (surur = joie), mais dans ce contexte (epreuve le jour du jugement), c'est le secret qui est pertinent — ce sont les intentions cachees qui seront eprouvees, pas les joies. Le sens de mobilier (sarir = lit) est sans rapport.",
        axe1_verset: "Le mot as-sara'iru est un nom pluriel defini au cas nominatif, sujet de tubla. Le champ lexical est celui de l'interieur cache — les sara'ir sont les pensees, intentions et motivations que les gens gardent a l'interieur d'eux-memes. L'article al- indique qu'il s'agit de tous les secrets, sans exception. L'epreuve portera sur ce qui est cache, pas sur ce qui est visible.",
        axe2_voisins: "Le verset 4 disait que chaque ame a un gardien. Le verset 9 revele ce que le gardien surveillait : les secrets interieurs. Le gardien ne surveille pas seulement les actes visibles mais les intentions cachees. La boucle v4-v9 est complete : surveillance → epreuve des secrets.",
        axe3_sourate: "Les secrets sont le theme unificateur de la sourate 86. L'astre percant (v3) perce l'obscurite, le gardien (v4) surveille l'ame, et le jour venu les secrets seront eprouves (v9). La sourate est construite autour de l'idee que rien ne reste cache — ni dans le ciel (l'astre perce la nuit) ni dans l'ame (les secrets seront eprouves).",
        axe4_coherence: "Le Coran mentionne les secrets dans d'autres passages. En 3:29, in tubdu ma fi anfusikum aw tukhfuhu yuhasibkum bihi allahu (que vous montriez ce qui est en vous ou que vous le cachiez, Dieu vous en demandera compte). Les secrets sont toujours soumis au jugement dans le Coran.",
        axe5_frequence: "Les secrets sont le lieu le plus intime de la mission du khalifa. La justice ne se joue pas seulement dans les actes visibles mais dans les intentions. Le khalifa qui sait que ses secrets seront eprouves agit avec integrite meme quand personne ne regarde."
      },
      'Joie/Plaisir': {
        senses: ['rejouir', 'plaire'],
        status: 'nul',
        proof_ctx: "Le sens de joie (surur) est un autre derive de la racine s-r-r. Mais dans le contexte d'un jour d'epreuve, ce sont les secrets qui sont eprouves, pas les joies. L'epreuve des joies n'a pas de sens — l'epreuve porte sur ce qui est cache."
      },
      'Mobilier': {
        senses: ['lit'],
        status: 'nul',
        proof_ctx: "Le sens de lit (sarir) est un objet physique sans rapport avec l'epreuve des secrets."
      }
    }
  }, 3);

  await upsertVA(5940, {
    translation_arab: "Le jour ou les secrets seront eprouves",
    full_translation: "Le jour où les consciences seront sondées",
    segments: [
      { fr: "Le jour (ou)", pos: "N", phon: "yawma", arabic: "يَوْمَ", position: 1, word_key: "ywm", is_particle: false, sense_retenu: "jour" },
      { fr: "seront eprouves", pos: "V", phon: "tubla", arabic: "تُبْلَى", position: 2, word_key: "blw", is_particle: false, sense_retenu: "eprouvees" },
      { fr: "les secrets", pos: "N", phon: "as-sara'iru", arabic: "ٱلسَّرَآئِرُ", position: 3, word_key: "srr", is_particle: false, sense_retenu: "secrets" }
    ],
    translation_explanation: `§DEMARCHE§
Le mot **yawma** est un nom au cas accusatif (complement circonstanciel de temps). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), yawm signifie jour, journee, periode. Le cas accusatif indique un moment dans le temps — le jour ou quelque chose se produira. Ce jour est relie au retour mentionne au verset 8.

Le verbe **tubla** est au passif inaccompli (une forme qui dit que l'action sera subie) de la racine b-l-w. D'apres les sources etymologiques, bala signifie eprouver, tester, mettre a l'epreuve. Le passif indique que les secrets SUBIRONT l'epreuve — ils seront examines, testes, verifies. L'inaccompli apres yawma indique un evenement futur.

Le mot **as-sara'iru** est le pluriel de sarira, de la racine s-r-r. D'apres les sources etymologiques, sarira designe le secret interieur, l'intention cachee, ce que la personne garde au fond d'elle-meme. Le pluriel defini (les secrets) indique que TOUS les secrets, sans exception, seront eprouves.

§JUSTIFICATION§
**jour** — Le sens retenu est « jour ». C'est le sens direct de yawm.

**eprouves** — Le sens retenu est « eprouves ». Ce mot est choisi car bala signifie mettre a l'epreuve, tester. L'alternative « sondes » est ecartee car sonder implique une exploration, tandis qu'eprouver implique un test qui determine la valeur — l'epreuve juge, le sondage explore. L'alternative « reveles » est ecartee car la revelation est passive (on montre), tandis que l'epreuve est active (on teste).

**secrets** — Le sens retenu est « secrets ». Ce mot est choisi car sarira designe ce qui est cache intérieurement. L'alternative « consciences » est ecartee car la conscience est un mecanisme moral, tandis que le secret est un contenu cache. L'alternative « intentions » est ecartee car les sara'ir sont plus larges que les intentions — elles incluent les pensees, les desirs, les motivations cachees.

§CRITIQUE§
**secrets vs consciences** — Hamidullah traduit « les consciences ». Sara'ir (pluriel de sarira) signifie les secrets interieurs, pas les consciences. La conscience (damir) est un autre mot arabe. La traduction « consciences » oriente vers un jugement moral (la conscience juge), tandis que « secrets » oriente vers un devoilement (ce qui est cache sera mis a l'epreuve). L'etymologie pure donne « les secrets », ce qui est plus fidele au texte.

**eprouves vs sondes** — Hamidullah traduit « sondees ». Le verbe tubla vient de bala (eprouver, tester), pas de sabara (sonder). L'epreuve est un test de verite — les secrets seront testes pour voir s'ils sont authentiques ou non. Le sondage est une exploration passive. L'etymologie donne « eprouves », qui est plus actif et plus fort.`
  });

  console.log('VERSET 86:9 — TERMINÉ');
  console.log('  ywm → Temps/Période → "jour"');
  console.log('  blw → Épreuve/Test → "eprouvees"');
  console.log('  srr → Caché/Intime → "secrets"');

  // ========== VERSET 10 (5941) ==========
  // فَمَا لَهُۥ مِن قُوَّةٍ وَلَا نَاصِرٍ
  console.log('\n--- v10 (5941): fa-ma lahu min quwwatin wa-la nasirin ---');

  await upsertVWA(5941, 'qww', 'force', {
    sense_chosen: 'force',
    concept_chosen: 'Puissance/Capacité',
    concepts: {
      'Puissance/Capacité': {
        senses: ['force', 'puissance', 'capacite'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine q-w-w designe la force, la puissance, la capacite. Le mot quwwatin est un nom feminin indefini au cas genitif (apres min privatif). La structure ma lahu min quwwatin signifie « il n'a pas de force ». La negation porte sur la possession — l'etre humain ne possede aucune force ce jour-la. Il n'y a qu'un seul groupe de sens pour cette racine.",
        axe1_verset: "Le mot quwwatin est un nom feminin indefini au cas genitif apres la preposition min (privative dans cette construction). La structure fa-ma lahu min quwwatin est une negation totale : il n'a pas la moindre force. Le champ lexical est celui de l'impuissance — ni force propre ni aide exterieure (verset suivant). Le fa lie cette impuissance au jour de l'epreuve des secrets (v9).",
        axe2_voisins: "Le verset 9 decrivait le jour de l'epreuve. Le verset 10 en tire la consequence : ce jour-la, l'etre humain sera sans force et sans secoureur. L'impuissance est totale — ni ressource interne (force) ni ressource externe (secoureur). La sequence v9-v10 dit : les secrets seront eprouves et l'etre humain sera totalement demuni.",
        axe3_sourate: "Le verset 10 conclut la premiere moitie de la sourate. Le contraste est saisissant : le ciel et l'astre percant (v1-3) sont puissants, l'etre humain est impuissant (v10). Toute la sourate converge vers cette prise de conscience de l'impuissance.",
        axe4_coherence: "Le Coran decrit l'impuissance au jour du jugement dans d'autres passages. En 69:35, fa-laysa lahu al-yawma hahuna hamimun (il n'a aujourd'hui aucun ami intime). L'isolement total est un theme recurrent du jugement.",
        axe5_frequence: "L'impuissance au jour du jugement est le rappel que la force veritable ne reside pas dans l'etre humain. Le khalifa qui se croit fort est dans l'illusion — sa force est empruntee, temporaire. La vraie mission se construit dans la conscience de cette fragilite."
      }
    }
  }, 1);

  await upsertVWA(5941, 'nsr', 'secoureur', {
    sense_chosen: 'secoureur',
    concept_chosen: 'Secours/Victoire',
    concepts: {
      'Secours/Victoire': {
        senses: ['secourir', 'aider', 'victoire', 'defendre'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-s-r signifie secourir, aider, defendre. Le mot nasirin est un participe actif indefini au cas genitif (apres wa-la). Le participe actif designe celui qui fait l'action — le secoureur, l'aidant. L'indefini avec la negation (wa-la nasirin = et pas de secoureur) indique l'absence totale de toute aide exterieure. Le sens d'alliance/soutien est un derive proche mais nasir ici est le secoureur direct, celui qui viendrait porter secours.",
        axe1_verset: "Le mot nasirin est un participe actif indefini au cas genitif, coordonne avec quwwatin par wa-la (et pas). La structure complete est : il n'a ni force ni secoureur. Le champ lexical est celui de l'impuissance totale — pas de ressource interne (force) et pas de ressource externe (secoureur). La double negation (ma...min...wa-la) est la forme la plus forte de negation en arabe.",
        axe2_voisins: "Le verset 10 complete le verset 9 : le jour de l'epreuve des secrets, l'etre humain sera sans force et sans secoureur. Les deux versets forment une paire : l'epreuve (v9) et l'impuissance (v10). La sourate enchainera (v11-17) avec un nouveau serment et un avertissement.",
        axe3_sourate: "Le secoureur absent conclut la premiere partie de la sourate. L'etre humain est seul face a l'epreuve de ses secrets. Cette solitude contraste avec la surveillance du gardien (v4) — le gardien surveille mais ne secourt pas.",
        axe4_coherence: "Le Coran mentionne l'absence de secoureur dans d'autres passages. En 2:270, wa-ma li-az-zalimina min ansarin (les injustes n'auront pas de secoureurs). L'absence de secours est liee a l'injustice — celui qui a ete injuste ne trouvera personne pour l'aider.",
        axe5_frequence: "L'absence de secoureur rappelle que le khalifa ne peut pas compter sur les autres pour echapper aux consequences de ses actes. La responsabilite est individuelle. La mission de justice doit etre exercee avec la conscience que personne ne viendra nous sauver de nos propres secrets."
      },
      'Alliance/Soutien': { senses: ['partisan'], status: 'nul', proof_ctx: "Le sens d'alliance/partisan est un derive de la meme racine, mais nasir ici designe specifiquement le secoureur — celui qui porte secours dans l'urgence, pas le partisan qui soutient dans la duree." }
    }
  }, 2);

  await upsertVA(5941, {
    translation_arab: "Il n'aura ni force ni secoureur",
    full_translation: "il n'aura alors ni force ni secoureur",
    segments: [
      { fr: "Alors", pos: "PART", phon: "fa", arabic: "فَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "il n'a pas", pos: "PART", phon: "ma lahu", arabic: "مَا لَهُۥ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "de force", pos: "N", phon: "min quwwatin", arabic: "مِن قُوَّةٍ", position: 3, word_key: "qww", is_particle: false, sense_retenu: "force" },
      { fr: "ni de secoureur", pos: "N", phon: "wa-la nasirin", arabic: "وَلَا نَاصِرٍ", position: 4, word_key: "nsr", is_particle: false, sense_retenu: "secoureur" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **fa** (alors) lie ce verset au verset 9 — le jour de l'epreuve des secrets, alors il n'aura ni force ni secoureur.

La structure **ma lahu** est une negation de possession : il n'a pas, il ne possede pas. Le pronom -hu (il, lui) renvoie a l'etre humain.

La preposition **min** devant **quwwatin** est privative — elle renforce la negation en indiquant « pas la moindre force ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine q-w-w signifie force, puissance, capacite. Le mot quwwatin est au cas genitif indefini.

La conjonction **wa-la** (et pas) introduit le deuxieme element de la negation. Le mot **nasirin** est un participe actif (une forme qui designe celui qui FAIT l'action) de la racine n-s-r, indefini au cas genitif. D'apres les sources etymologiques, nasara signifie secourir, aider, defendre. Nasir est le secoureur — celui qui viendrait porter secours. L'indefini dans une negation indique l'absence totale : aucun secoureur, quel qu'il soit.

La structure complete (ma lahu min...wa-la...) est la negation la plus forte en arabe : il ne possede pas la moindre force et il n'a aucun secoureur.

§JUSTIFICATION§
**force** — Le sens retenu est « force ». C'est le sens direct de quwwa. L'alternative « puissance » est ecartee car la puissance est une capacite d'action, tandis que la force est une ressource — l'etre humain n'a meme pas la ressource de base.

**secoureur** — Le sens retenu est « secoureur ». Ce mot est choisi car nasir est un participe actif de secourir — c'est celui qui porte secours. L'alternative « defenseur » est ecartee car la defense est reactive, tandis que le secours est actif — le secoureur vient vers celui qui est en difficulte. L'alternative « allie » est ecartee car l'alliance est durable, tandis que le secours est ponctuel — ici l'etre humain n'a meme pas de secours ponctuel.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « ni force ni secoureur ». La traduction est fidele. La seule difference est le mot « alors » qui rend le fa initial — Hamidullah le conserve aussi.`
  });

  console.log('VERSET 86:10 — TERMINÉ');
  console.log('  qww → Puissance/Capacité → "force"');
  console.log('  nsr → Secours/Victoire → "secoureur"');

  console.log('\n=== PIPELINE S86 v1-10 TERMINÉE ===');
})();
