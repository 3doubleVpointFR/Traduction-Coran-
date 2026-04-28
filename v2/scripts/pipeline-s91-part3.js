// Pipeline Sourate 91 (Ash-Shams / Le Soleil) — Partie 3: Versets 11-15
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
// CONTEXTE SOURATE 91 (Ash-Shams / Le Soleil) — Versets 11-15
// ================================================================
// Structure globale : sourate de 15 versets. Sept serments cosmiques (v1-7),
// inspiration de l'ame (v8), constat succes/echec (v9-10),
// recit de Thamud (v11-15).
// Theme : l'ame humaine recoit le potentiel du bien et du mal —
// celui qui la purifie reussit, celui qui la corrompt echoue.
// L'exemple de Thamud illustre cet echec collectif.
// v11-15 : Thamud a dementi par sa transgression, le plus malheureux
// s'est elance, le messager a averti, ils ont dementi et abattu
// la chamelle, leur Seigneur les a detruits et a tout nivele.

async function verse91_11() {
  console.log('\n=== VERSET 91:11 — كَذَّبَتْ ثَمُودُ بِطَغْوَىٰهَآ ===');
  const verse_id = 6054;

  // ---- KDB (كذب) — id=474 — "dementir" ----
  // Forme: kadhdhabat = verbe accompli forme II + ta' du feminin (elle a dementi — Thamud est feminin grammatical)
  await upsertVWA(verse_id, 'kdb', 'dementir', {
    sense_chosen: "dementir",
    concept_chosen: "Mensonge/Fausseté",
    concepts: {
      "Mensonge/Fausseté": {
        status: "retenu",
        senses: ["mentir", "dementir", "declarer faux", "nier", "fausser"],
        proof_ctx: "Le sens retenu est « Mensonge/Faussete ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-dh-b signifie mentir, dire le faux, dementir, declarer faux ce qui est vrai. Le verbe kadhdhabat est a la forme II (taf'il) qui porte une intensite : il ne s'agit pas d'un simple mensonge ponctuel mais d'un deni systematique et delibere. La forme II transforme le mensonge (dire le faux) en deni actif (declarer faux ce qui est presente comme vrai). Le Lane's precise que la forme II kadhdhaba signifie « he accused of lying, he declared to be false, he disbelieved ». Le deni porte sur le message divin transmis par le messager Salih. Le ta' marbutah (kadhdhabat) marque le feminin grammatical car Thamud, nom de peuple, est traite comme feminin collectif. Le deni est ici l'acte fondateur du recit : c'est parce que Thamud a dementi que la destruction a suivi. Distinction avec « Accusation » : l'accusation vise une personne (on accuse quelqu'un). Le deni vise la verite elle-meme — Thamud a declare faux le message, pas simplement accuse le messager. L'objet du deni est le contenu, pas la personne.",
        axe1_verset: "Le verset dit « Thamud a dementi par sa transgression ». Le verbe kadhdhabat ouvre le recit de Thamud par l'acte fondamental : le deni. Le champ lexical dementir + transgression (taghwa) lie le deni a l'exces — Thamud n'a pas dementi par erreur mais par transgression deliberee. La preposition bi- (par/a cause de) rattache le deni a la transgression comme sa cause ou son moyen. Le deni n'est pas une simple erreur intellectuelle mais l'expression d'une transgression plus profonde. L'accompli marque un acte acheve — le deni de Thamud est un fait historique consomme.",
        axe2_voisins: "Les versets 9-10 enonciaient le constat general : celui qui purifie son ame reussit, celui qui la corrompt echoue. Le verset 11 ouvre l'illustration concrete de cet echec avec le peuple de Thamud. Le verset 12 precisera l'acte du plus malheureux. Le deni est presente comme la premiere manifestation de la corruption de l'ame — Thamud a corrompu son ame (v10) et cette corruption se manifeste par le deni (v11). La progression est du general (v9-10) au particulier (v11-15).",
        axe3_sourate: "La sourate 91 s'ouvre par sept serments cosmiques (v1-7) suivis de l'inspiration de l'ame (v8). Le serment porte sur le succes de la purification et l'echec de la corruption (v9-10). Le deni de Thamud est l'exemple par excellence de cet echec. Toute la sourate converge vers ce recit : les serments cosmiques etaient une preparation pour affirmer que corrompre son ame mene a la destruction, et Thamud en est la preuve historique.",
        axe4_coherence: "La racine k-dh-b est l'une des plus frequentes du Coran (plus de 180 occurrences). Le deni des peuples anciens est un theme majeur : « Le peuple de Nouh a dementi » (26:105), « Les 'Ad ont dementi » (26:123), « Les Thamud ont dementi » (26:141). Le Coran presente le deni comme le fil rouge qui relie tous les peuples detruits — chacun a dementi son messager. En 91:11, le deni de Thamud s'inscrit dans cette serie coranique de peuples qui ont dementi et subi les consequences.",
        axe5_frequence: "Pour la mission du khalifa, le deni est l'antithese de la mission. Le khalifa est celui qui reconnait la verite et agit en consequence. Thamud a fait le contraire : ils ont dementi la verite transmise par leur messager. Le deni est le premier pas vers la destruction — il precede la transgression qui precede l'acte destructeur (abattre la chamelle). Pour le khalifa, reconnaitre la verite est le fondement de sa mission ; dementir, c'est renoncer a sa responsabilite."
      },
      "Accusation": {
        status: "peu_probable",
        senses: ["accuser de mensonge", "incriminer", "charger quelqu'un de faussete"],
        proof_ctx: "L'accusation est un acte dirige vers une personne : on accuse quelqu'un de mentir. Le deni est un acte dirige vers un contenu : on declare faux un message, une verite. Dans le verset, le verbe kadhdhabat est intransitif (sans complement d'objet direct de personne) — il est suivi de la preposition bi- (par/a cause de sa transgression), ce qui indique la cause du deni, pas la cible d'une accusation. Le texte ne dit pas « Thamud a accuse Salih » mais « Thamud a dementi par sa transgression ». Distinction avec le sens retenu : le deni porte sur la verite elle-meme, l'accusation porte sur une personne. La structure grammaticale favorise le deni general plutot que l'accusation ciblee.",
        axe1_verset: "Le verset dit « Thamud a dementi par sa transgression ». Si le sens etait l'accusation, on attendrait un complement de personne (accuser quelqu'un). Or le verset ne mentionne aucune personne accusee — le complement est bi-taghwaha (par sa transgression), qui indique la cause du deni, pas la cible d'une accusation. La structure grammaticale sans complement de personne affaiblit le sens d'accusation. Le champ lexical dementi + transgression oriente vers un refus de la verite plutot qu'une attaque contre une personne.",
        axe2_voisins: "Le verset 13 mentionne le messager de Dieu (rasulu Allahi) mais pas comme objet du deni au verset 11. Le messager apparait deux versets plus loin pour donner un avertissement. Le verset 11 est un constat global sur le peuple entier, pas une accusation visant le messager. La progression du recit separe le deni general (v11) de l'interaction avec le messager (v13). L'accusation comme sens principal serait prematuree au verset 11 puisque le messager n'est pas encore mentionne.",
        axe3_sourate: "La sourate traite de la purification et de la corruption de l'ame (v9-10). Le deni est une forme de corruption de l'ame — l'ame qui refuse la verite se corrompt. L'accusation est un acte social dirige vers l'exterieur, pas une corruption interieure de l'ame. Le theme de la sourate favorise le sens de deni interieur plutot que l'accusation dirigee vers autrui. Thamud a corrompu son ame en dementant, pas en accusant.",
        axe4_coherence: "Le Coran utilise kadhdhabat bi- (dementir avec bi-) dans d'autres passages : « ils ont dementi Nos signes » (kadhdhabu bi-ayatina, 3:11). La construction kadhdhaba + bi- indique le deni du contenu (les signes), pas l'accusation de la personne. La structure du verset 91:11 est analogue : kadhdhaba + bi-taghwaha. L'accusation au sens strict aurait une structure differente dans le Coran.",
        axe5_frequence: "Pour la mission du khalifa, l'accusation est un acte social alors que le deni est un positionnement face a la verite. Le khalifa echoue quand il nie la verite, pas quand il accuse quelqu'un. L'echec de Thamud est dans leur rapport a la verite, pas dans une querelle interpersonnelle avec le messager."
      }
    }
  }, 1);

  // ---- THMD (ثمود) — id=1892 — "Thamud" ----
  // Forme: Thamudu = nom propre (peuple de Thamud)
  await upsertVWA(verse_id, 'thmd', 'Thamud', {
    sense_chosen: "Thamud",
    concept_chosen: "Nom propre/Peuple",
    concepts: {
      "Nom propre/Peuple": {
        status: "retenu",
        senses: ["Thamud"],
        proof_ctx: "Le mot Thamudu est un nom propre designant un ancien peuple d'Arabie. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), Thamud est le nom d'un peuple antique qui habitait la region d'Al-Hijr (nord-ouest de l'Arabie). Le Lane's mentionne que la racine th-m-d evoque l'eau peu abondante (thamad = eau rare, source qui tarit). Certains etymologistes rattachent le nom du peuple a cette racine car ils vivaient dans une region aride. Le mot est traite comme feminin collectif en arabe (d'ou kadhdhabat avec le ta' marbutah du feminin). C'est un nom propre sans analyse multi-sens — il n'y a qu'un seul sens possible."
      }
    }
  }, 2);

  // ---- TGHW (طغو) — id=1112 — "transgression" ----
  // Forme: bi-taghwaha = preposition bi + nom (masdar) + possessif -ha (par/a cause de sa transgression)
  await upsertVWA(verse_id, 'tghw', 'transgression', {
    sense_chosen: "transgression",
    concept_chosen: "Transgression/Excès",
    concepts: {
      "Transgression/Excès": {
        status: "retenu",
        senses: ["transgresser", "depasser les limites", "etre excessif", "se rebeller", "deborder"],
        proof_ctx: "Le sens retenu est « Transgression/Exces ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine t-gh-w (ou t-gh-y) signifie transgresser, depasser les limites, etre excessif, deborder, se rebeller contre l'autorite. Le Lane's donne tagha : he exceeded the just limit, he transgressed, he was inordinate, he was exorbitant, he was tyrannical. Le masdar taghwa est la forme nominale qui designe l'acte ou l'etat de transgression. Le Lane's precise que le taghyan est le depassement de toute limite — c'est un exces qui ne reconnait aucune borne. La preposition bi- devant taghwaha peut signifier « par » (au moyen de) ou « a cause de » — Thamud a dementi au moyen de sa transgression, ou bien a cause de sa transgression. Le possessif -ha (sa) renvoie a Thamud (feminin collectif). La transgression est a la fois la cause et le moyen du deni : c'est parce que Thamud etait dans l'exces qu'ils ont dementi. La transgression n'est pas un acte isole mais un etat habituel de depassement des limites qui a conduit au deni.",
        axe1_verset: "Le verset dit « Thamud a dementi par sa transgression ». Le mot taghwaha est le complement circonstanciel du verbe kadhdhabat — il qualifie les circonstances du deni. Le champ lexical dementir + transgression lie deux actes en un : la transgression engendre le deni, ou bien le deni est la forme que prend la transgression. La preposition bi- cree un lien de causalite ou d'instrumentalite entre la transgression et le deni. Le possessif -ha rattache la transgression a Thamud comme leur propriete — c'est leur transgression, elle leur est propre. Le masdar taghwa designe un etat continu, pas un acte ponctuel.",
        axe2_voisins: "Les versets 9-10 parlaient de corruption de l'ame (dassaha). La transgression du verset 11 est la manifestation concrete de cette corruption. Les versets 12-14 detailleront les actes qui decoulent de la transgression : l'elancement du plus malheureux (v12) et le meurtre de la chamelle (v14). La transgression est le terrain sur lequel poussent tous les actes destructeurs. Le passage du general (corruption de l'ame v10) au particulier (transgression de Thamud v11) montre comment la corruption interieure se manifeste en exces exterieur.",
        axe3_sourate: "La sourate oppose la purification (v9) et la corruption (v10). La transgression est le versant actif de la corruption — l'ame corrompue transgresse, depasse les limites, refuse de reconnaitre les bornes. Les sept serments cosmiques (v1-7) evoquaient un ordre cosmique (soleil, lune, jour, nuit, ciel, terre, ame). La transgression est la rupture de cet ordre — Thamud a depasse les limites fixees par l'ordre divin. L'ame qui refuse la purification se jette dans la transgression.",
        axe4_coherence: "La racine t-gh-w/t-gh-y est frequente dans le Coran (plus de 40 occurrences). Le taghyan designe le depassement des limites : « Quant a Thamud, ils furent detruits par le tagiya (l'exces destructeur) » (69:5). En 20:24, « Va vers Pharaon, car il a transgresse (tagha) ». En 96:6-7, « l'etre humain transgresse (yatagha) quand il se voit riche ». La transgression coranique est toujours liee a l'arrogance et au refus de reconnaitre une autorite superieure. Thamud transgresse parce qu'il refuse de reconnaitre les limites que Dieu a fixees.",
        axe5_frequence: "Pour la mission du khalifa, la transgression est l'abandon de toute limite. Le khalifa est celui qui respecte les limites et maintient l'equilibre — il empeche la corruption sur terre. La transgression de Thamud est l'echec radical de cette mission : ils n'ont pas seulement neglige les limites, ils les ont deliberement depassees. Le depassement des limites est l'antithese de la mission du khalifa qui est de maintenir la justice et l'ordre."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "كَذَّبَتْ ثَمُودُ بِطَغْوَىٰهَآ",
    full_translation: "Les Thamud ont dementi [leur prophete] dans leur rebellie",
    segments: [
      { fr: "A dementi", pos: "verbe", phon: "kadhdhabat", arabic: "كَذَّبَتْ", word_key: "kdb", is_particle: false, sense_retenu: "dementir", position: 1 },
      { fr: "Thamud", pos: "nom propre", phon: "Thamudu", arabic: "ثَمُودُ", word_key: "thmd", is_particle: false, sense_retenu: "Thamud", position: 2 },
      { fr: "par sa transgression", pos: "nom", phon: "bi-taghwaha", arabic: "بِطَغْوَىٰهَآ", word_key: "tghw", is_particle: false, sense_retenu: "transgression", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset ouvre le recit de Thamud qui illustre l'echec de la corruption de l'ame (v10). Le verbe kadhdhabat est un accompli forme II de la racine k-dh-b avec le ta' marbutah du feminin. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II kadhdhaba signifie dementir, declarer faux. L'accompli marque un acte acheve — le deni de Thamud est un fait historique. Le ta' du feminin s'accorde avec Thamud qui est traite comme un nom collectif feminin en arabe (un peuple entier est designe au feminin singulier). Le mot Thamudu est un nom propre au nominatif en position de sujet. Le Lane's mentionne que la racine th-m-d evoque l'eau rare — certains etymologistes rattachent le nom du peuple a la secheresse de leur region. Le mot bi-taghwaha est compose de la preposition bi- (par/a cause de), du masdar taghwa (transgression, exces) et du possessif -ha (sa, se rapportant a Thamud). D'apres les sources etymologiques, la racine t-gh-w signifie transgresser, depasser les limites, etre excessif. Le masdar taghwa designe l'etat de transgression. La preposition bi- peut indiquer la cause (a cause de sa transgression) ou le moyen (au moyen de sa transgression) — les deux lectures convergent : la transgression est ce qui a pousse Thamud a dementir.

§JUSTIFICATION§
**dementir** — Le sens retenu est « dementir ». Le verbe kadhdhabat forme II traduit un deni actif et systematique. L'alternative « mentir » est trop faible — mentir est dire le faux, dementir est refuser activement le vrai. L'alternative « accuser » orienterait le deni vers une personne alors que le texte ne mentionne aucun objet de personne dans ce verset.

**Thamud** — Nom propre du peuple antique d'Arabie. Pas d'alternative a ecarter — c'est un nom propre sans ambiguite.

**transgression** — Le sens retenu est « transgression ». Le mot taghwa traduit le depassement des limites. L'alternative « rebellion » est proche mais plus politique — la transgression est plus large, elle couvre tout depassement de limite, pas seulement la revolte contre une autorite. L'alternative « exces » perd la dimension morale — l'exces peut etre positif (exces de generosite) alors que la transgression est toujours negative.

§CRITIQUE§
Hamidullah traduit « Les Thamud ont dementi [leur prophete] dans leur rebellie ». L'ajout de « [leur prophete] » entre crochets est un ajout exegetique absent du texte arabe — le verset ne precise pas l'objet du deni. Le texte dit simplement « Thamud a dementi par sa transgression » sans preciser ce qui a ete dementi. L'ajout de « leur prophete » est une interpretation des exegetes qui comble le silence du texte. Le mot « rebellie » traduit taghwa — c'est un equivalent acceptable mais notre choix « transgression » est plus fidele au Lane's qui donne « exceeding the just limit ». La rebellion implique une autorite politique, la transgression est le depassement de toute limite.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:11 — TERMINE');
  console.log('  kdb (ك ذ ب) → "dementir" | thmd (ث م و د) → "Thamud" | tghw (ط غ و) → "transgression"');
}

async function verse91_12() {
  console.log('\n=== VERSET 91:12 — إِذِ ٱنۢبَعَثَ أَشْقَىٰهَا ===');
  const verse_id = 6055;

  // ---- BETH (بعث) — id=545 — "s'elancer" ----
  // Forme: inba'atha = verbe accompli forme VII (il s'est elance/leve de lui-meme, passif reflexif)
  await upsertVWA(verse_id, 'beth', "s'elancer", {
    sense_chosen: "s'elancer",
    concept_chosen: "Résurrection/Envoi",
    concepts: {
      "Résurrection/Envoi": {
        status: "retenu",
        senses: ["envoyer", "ressusciter", "susciter", "s'elancer", "se lever", "etre envoye"],
        proof_ctx: "Le sens retenu est « Resurrection/Envoi ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine b-'-th signifie envoyer, susciter, faire lever, ressusciter, mettre en mouvement. Le Lane's donne ba'atha : he sent, he raised, he roused from sleep, he stirred up, he caused to rise. La forme VII inba'atha est le reflexif passif : il s'est leve de lui-meme, il s'est elance spontanement, il s'est mis en mouvement de sa propre initiative. Le Lane's precise pour inba'atha : he rose, he was roused, he was sent forth. La forme VII porte l'idee d'une action que le sujet subit ou fait sur lui-meme — le plus malheureux ne recoit pas d'ordre de se lever, il se leve de lui-meme, pousse par sa propre transgression. L'accompli marque un acte acheve. L'elancement est le moment ou le plus malheureux passe de l'intention a l'acte — il se leve pour aller commettre le meurtre de la chamelle. Distinction avec « Mission prophetique » : la racine b-'-th sert aussi a decrire l'envoi des prophetes (ba'atha = il a envoye un prophete). Mais ici la forme VII (reflexif) exclut ce sens — le plus malheureux n'est pas envoye par Dieu, il se leve de lui-meme. La mission prophetique est un envoi par Dieu (forme I), l'elancement est un mouvement spontane (forme VII).",
        axe1_verset: "Le verset dit « quand le plus malheureux d'entre eux s'est elance ». Le verbe inba'atha est precede de idhi (quand) qui situe l'action dans le temps — c'est le moment precis ou le plus malheureux se leve pour agir. Le champ lexical s'elancer + le plus malheureux forme un couple dramatique : celui qui va commettre l'acte le plus grave se leve de son propre mouvement. La forme VII souligne que personne ne l'a pousse — il a agi de lui-meme, spontanement. Le superlatif ashqaha (le plus malheureux d'entre eux) isole un individu dans le groupe de Thamud — un seul s'est leve pour abattre la chamelle.",
        axe2_voisins: "Le verset 11 decrivait le deni de Thamud comme peuple. Le verset 12 resserre le focus sur un individu : le plus malheureux. Le verset 13 introduira le messager et son avertissement. La progression est du collectif (Thamud dementi, v11) a l'individuel (le plus malheureux se leve, v12), puis au dialogue (le messager avertit, v13). L'elancement du plus malheureux est le moment charniere entre le deni collectif et l'acte individuel. Le recit passe du peuple a l'homme qui va incarner la transgression.",
        axe3_sourate: "La sourate parlait de la corruption de l'ame (v10 — dassaha). Le plus malheureux est l'incarnation de cette corruption — son ame corrompue le pousse a se lever pour commettre l'irremediable. L'elancement est la mise en acte de la corruption interieure : l'ame corrompue ne reste pas passive, elle se leve et agit. La forme VII (reflexif) confirme que le mouvement vient de l'interieur — c'est l'ame corrompue elle-meme qui suscite l'elancement. Les sept serments cosmiques (v1-7) preparaient cette scene : tout l'ordre cosmique est convoque pour temoigner de ce moment ou le plus malheureux se leve contre l'ordre divin.",
        axe4_coherence: "La racine b-'-th apparait dans le Coran principalement pour la resurrection et l'envoi des prophetes : « le jour ou ils seront ressuscites (yub'athuna) » (58:6), « nous avons envoye (ba'athna) dans chaque communaute un messager » (16:36). La forme VII inba'atha est plus rare et porte le sens de se lever spontanement. En 91:12, le verbe est utilise pour le mouvement spontane du plus malheureux — il contraste avec l'envoi divin des prophetes. Dieu envoie les prophetes (forme I), mais le transgresseur se leve de lui-meme (forme VII) — la difference de forme grammaticale souligne la difference de nature entre la mission prophetique et l'acte de transgression.",
        axe5_frequence: "Pour la mission du khalifa, l'elancement spontane vers la transgression est l'antithese de la mission. Le khalifa est celui qui se leve pour la justice et l'ordre. Le plus malheureux se leve pour detruire. La forme VII montre que le mouvement vient de l'interieur — l'ame corrompue se met en mouvement d'elle-meme. Le khalifa qui purifie son ame se leve pour le bien ; celui qui la corrompt se leve pour la destruction. L'elancement est le meme mouvement physique, mais l'intention qui le porte est opposee."
      },
      "Mission prophétique": {
        status: "nul",
        senses: ["envoyer un messager", "mission divine"],
        proof_ctx: "La mission prophetique utilise la forme I ba'atha (il a envoye) avec Dieu comme sujet. Le verset 91:12 utilise la forme VII inba'atha (il s'est elance de lui-meme) avec le plus malheureux comme sujet. La forme VII est un reflexif qui exclut l'envoi divin — le plus malheureux n'est pas envoye par Dieu, il se leve spontanement pour commettre son acte."
      }
    }
  }, 1);

  // ---- SHQY (شقي) — id=2176 — "le plus malheureux" ----
  // Forme: ashqaha = superlatif + possessif -ha (le plus malheureux d'entre eux)
  await upsertVWA(verse_id, 'shqy', 'le plus malheureux', {
    sense_chosen: "le plus malheureux",
    concept_chosen: "Malheur/Damnation",
    concepts: {
      "Malheur/Damnation": {
        status: "retenu",
        senses: ["etre malheureux", "etre damne", "etre miserable", "etre infortune"],
        proof_ctx: "Le sens retenu est « Malheur/Damnation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-q-y signifie etre malheureux, miserable, infortune, damne. Le Lane's donne shaqi comme l'oppose de sa'id (heureux). Le mot ashqaha est un superlatif (forme af'al) avec le possessif -ha (d'entre eux, renvoyant a Thamud au feminin). Le superlatif isole un individu parmi le peuple : non pas les malheureux en general mais LE plus malheureux de tous. Le malheur ici n'est pas subi passivement — c'est le resultat des choix de l'individu. Le plus malheureux est celui qui a choisi de se lever pour abattre la chamelle. Son malheur est la consequence de son acte, pas une condition prealable. Le Lane's mentionne que shaqiya implique aussi la misere morale, pas seulement materielle — le plus malheureux est moralement le plus bas de tout le peuple.",
        axe1_verset: "Le verset dit « quand le plus malheureux d'entre eux s'est elance ». Le mot ashqaha est en position de sujet du verbe inba'atha — c'est le plus malheureux qui s'elance. Le superlatif isole un individu du groupe : parmi tous les Thamud, un seul est designe comme le plus malheureux. Le possessif -ha (d'entre eux) rattache le plus malheureux au peuple mentionne au verset 11. Le champ lexical s'elancer + le plus malheureux lie le mouvement au malheur : celui qui se leve pour le mal est le plus malheureux de tous. Le malheur n'est pas un etat prealable mais le resultat de l'elancement vers la transgression.",
        axe2_voisins: "Le verset 11 decrivait le peuple entier (Thamud a dementi). Le verset 12 resserre sur un individu (le plus malheureux). Le verset 13 introduira le messager et l'avertissement. Cette progression du collectif a l'individuel montre que dans un peuple qui transgresse, un individu se distingue par l'exces de son malheur — il est celui qui passe a l'acte. Le verset 14 le confirmera : c'est ce plus malheureux qui menera le meurtre de la chamelle, et c'est le peuple entier qui en paiera les consequences.",
        axe3_sourate: "La sourate oppose la reussite de celui qui purifie son ame (v9 — aflaha) et l'echec de celui qui la corrompt (v10 — khaba). Le plus malheureux incarne le point culminant de cet echec. Le superlatif ashqa (le plus malheureux) repond a aflaha (il a reussi) — la reussite est pour celui qui purifie, le malheur est pour celui qui corrompt. Le plus malheureux est celui dont l'ame est la plus corrompue — il est l'extreme oppose de celui qui a purifie son ame.",
        axe4_coherence: "Le mot ashqa apparait aussi en 92:15 : « n'y brulera que le plus malheureux (al-ashqa) ». En 92:15-16, le plus malheureux est identifie comme celui qui dementi et s'est detourne. En 91:12, le plus malheureux est celui qui s'est elance pour abattre la chamelle. Les deux passages utilisent le meme superlatif pour decrire l'individu le plus eloigne du bien. En 20:2, le Coran dit « nous n'avons pas fait descendre le Coran pour que tu sois malheureux (tashqa) ». Le malheur est l'oppose de la guidance coranique.",
        axe5_frequence: "Pour la mission du khalifa, le plus malheureux est celui qui a le plus echoue dans sa mission. Le khalifa est cree pour maintenir l'ordre et empecher la corruption. Le plus malheureux de Thamud est celui qui a fait exactement le contraire — il s'est leve pour detruire un signe de Dieu (la chamelle). Son malheur est proportionnel a son echec : il est le plus malheureux parce qu'il est le plus eloigne de sa mission originelle."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "إِذِ ٱنۢبَعَثَ أَشْقَىٰهَا",
    full_translation: "quand le plus malheureux d'entre eux se leva",
    segments: [
      { fr: "Quand", pos: "particule", phon: "idhi", arabic: "إِذِ", is_particle: true, position: 0 },
      { fr: "s'est elance", pos: "verbe", phon: "inba'atha", arabic: "ٱنۢبَعَثَ", word_key: "beth", is_particle: false, sense_retenu: "s'elancer", position: 1 },
      { fr: "le plus malheureux d'entre eux", pos: "nom", phon: "ashqaha", arabic: "أَشْقَىٰهَا", word_key: "shqy", is_particle: false, sense_retenu: "le plus malheureux", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition circonstancielle de temps introduite par idhi (quand). Elle rattache l'elancement du plus malheureux au deni du verset 11 — Thamud a dementi au moment ou le plus malheureux s'est elance. Le verbe inba'atha est un accompli forme VII de la racine b-'-th. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme VII inba'atha signifie se lever de soi-meme, s'elancer spontanement, se mettre en mouvement de sa propre initiative. La forme VII est un reflexif passif — l'action revient sur le sujet sans intervention exterieure. L'accompli marque un fait acheve dans le passe. Le mot ashqaha est un superlatif (forme af'al) de la racine sh-q-y (etre malheureux) avec le possessif -ha (d'entre eux, renvoyant a Thamud). Le Lane's donne shaqi : unhappy, unfortunate, damned. Le superlatif designe le plus malheureux du peuple — un individu unique parmi le groupe.

§JUSTIFICATION§
**s'est elance** — Le sens retenu est « s'elancer ». Le verbe inba'atha forme VII traduit un mouvement spontane venant de l'interieur. L'alternative « s'est leve » (Hamidullah) est acceptable mais perd la dimension de la forme VII qui insiste sur le caractere spontane et interieur du mouvement. L'alternative « a ete envoye » impliquerait un envoi divin (forme I ba'atha), ce qui est exclu par la forme VII reflexive. Le plus malheureux n'a pas ete envoye — il s'est mis en mouvement de lui-meme.

**le plus malheureux d'entre eux** — Le sens retenu est « le plus malheureux ». Le superlatif ashqaha traduit le degre maximal du malheur. L'alternative « le plus miserable » est un synonyme acceptable mais « malheureux » est plus courant en francais quotidien. L'alternative « le damne » serait une interpretation — le texte dit « le plus malheureux », pas « le damne ».

§CRITIQUE§
Hamidullah traduit « quand le plus malheureux d'entre eux se leva ». La difference avec notre traduction est minime. Hamidullah utilise « se leva » la ou nous utilisons « s'est elance ». Le verbe inba'atha (forme VII) porte une nuance de mouvement spontane et impulse que « se lever » ne rend pas completement. « S'elancer » traduit mieux cette impulsion interieure — le plus malheureux ne se leve pas calmement, il se met en mouvement avec la force de sa transgression. Pour le reste, les traductions convergent.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:12 — TERMINE');
  console.log('  beth (ب ع ث) → "s\'elancer" | shqy (ش ق ي) → "le plus malheureux"');
}

async function verse91_13() {
  console.log('\n=== VERSET 91:13 — فَقَالَ لَهُمْ رَسُولُ ٱللَّهِ نَاقَةَ ٱللَّهِ وَسُقْيَـٰهَا ===');
  const verse_id = 6056;

  // ---- QWL (قول) — id=307 — "dire" ----
  // Forme: qala = verbe accompli forme I (il a dit)
  await upsertVWA(verse_id, 'qwl', 'dire', {
    sense_chosen: "dire",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        status: "retenu",
        senses: ["dire", "parler", "enoncer", "declarer", "prononcer"],
        proof_ctx: "Le sens retenu est « Parole/Enonciation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine q-w-l signifie dire, parler, enoncer, declarer, prononcer. Le Lane's donne qala : he said, he spoke, he told. C'est le verbe de parole le plus fondamental de la langue arabe. Le verbe qala est a l'accompli forme I — il a dit, simplement et directement. L'accompli marque un acte acheve dans le passe. Le sujet de qala est rasulu Allahi (le messager de Dieu), et lahum (a eux, aux Thamud) est le complement indirect. Le messager leur a adresse la parole pour les avertir. La structure fa-qala lahum (alors il leur a dit) introduit un discours direct — ce qui suit est les paroles du messager. La parole est ici un acte d'avertissement : le messager dit ce qu'il faut dire pour prevenir la catastrophe.",
        axe1_verset: "Le verset dit « le messager de Dieu leur a dit : la chamelle de Dieu et son breuvage ». Le verbe qala introduit le discours direct du messager. Le champ lexical dire + messager + chamelle + breuvage forme un avertissement : le messager nomme ce qui doit etre protege (la chamelle et son droit a boire). La construction fa-qala (alors il dit) avec le fa- de succession montre que la parole du messager est une reaction a l'elancement du plus malheureux (v12). Le messager ne parle pas dans le vide — il parle parce que le plus malheureux s'est leve pour agir. L'avertissement est direct et concret : pas de discours theologique abstrait, mais le rappel de deux choses precises (la chamelle et son eau).",
        axe2_voisins: "Le verset 12 decrivait l'elancement du plus malheureux. Le verset 13 introduit le messager qui tente de prevenir l'acte. Le verset 14 montrera que l'avertissement a echoue — ils ont dementi et abattu la chamelle. La parole du messager se situe entre l'elancement (v12) et l'acte (v14) — c'est le dernier avertissement avant la catastrophe. La progression est claire : le plus malheureux se leve (v12), le messager avertit (v13), ils tuent quand meme (v14).",
        axe3_sourate: "La sourate traite de la purification et de la corruption de l'ame. La parole du messager est une opportunite de purification — il offre a Thamud la possibilite de s'arreter, de reconnaitre la chamelle de Dieu et son droit. La parole est le vehicule de la guidance, le moyen par lequel l'ame peut etre purifiee. Thamud refuse cette parole, confirmant la corruption de leur ame. Le messager accomplit sa mission de parole ; le peuple refuse d'ecouter.",
        axe4_coherence: "La racine q-w-l est la plus frequente du Coran (plus de 1700 occurrences). Le verbe qala est utilise des centaines de fois pour introduire les paroles des prophetes : « Nouh dit a son peuple » (71:1), « Hud leur dit » (7:65), « Salih leur dit » (7:73). La parole prophetique dans le Coran est toujours un avertissement clair et direct. En 91:13, le messager suit ce meme schema : il dit a son peuple ce qu'il faut respecter.",
        axe5_frequence: "Pour la mission du khalifa, la parole est l'outil premier de la mission. Le khalifa avertit, rappelle, enseigne — il utilise la parole pour maintenir la justice et empecher la corruption. Le messager de Thamud remplit cette mission de parole. L'echec de Thamud n'est pas un echec de la parole du messager mais un echec de l'ecoute du peuple. La parole a ete dite — la responsabilite passe a ceux qui ecoutent."
      },
      "Pensée/Avis": {
        status: "nul",
        senses: ["penser", "avoir un avis", "etre d'opinion"],
        proof_ctx: "Le sens de pensee ou d'avis est un sens secondaire de qala dans certains contextes. Le verset introduit un discours direct adresse a un auditoire (lahum = a eux). Le contexte est clairement celui de la parole prononcee, pas d'une pensee interieure."
      }
    }
  }, 1);

  // ---- RSL (رسل) — id=688 — "messager" ----
  // Forme: rasulu = nom (participe actif pattern) defini en idafa (le messager de Dieu)
  await upsertVWA(verse_id, 'rsl', 'messager', {
    sense_chosen: "messager",
    concept_chosen: "Envoi/Message",
    concepts: {
      "Envoi/Message": {
        status: "retenu",
        senses: ["envoyer", "messager", "envoye", "message", "mission", "depecher"],
        proof_ctx: "Le sens retenu est « Envoi/Message ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-s-l signifie envoyer, depecher, emettre, lacher. Le Lane's donne arsala : he sent, he dispatched, he let go. Le rasul est « celui qui est envoye » — un messager, un envoye qui porte un message. Le Lane's precise que le rasul est celui qui porte une mission confiee par un autre. Le mot rasulu est en position d'idafa avec Allahi — le messager de Dieu, celui que Dieu a envoye avec un message pour Thamud. Le messager en question est Salih, mais le texte ne le nomme pas explicitement — il utilise la fonction (messager) plutot que le nom propre. L'idafa « messager de Dieu » rattache le messager a son mandant : il ne parle pas en son nom mais au nom de Dieu. Distinction avec « Eau/Liquide » : la racine r-s-l a aussi le sens de laisser couler (l'eau qu'on lache). Ce sens n'est pas pertinent ici. Distinction avec « Sens isole/Cheveux » : le Lane's mentionne un sens rare de cheveux detaches. Ce sens est completement hors contexte.",
        axe1_verset: "Le verset dit « le messager de Dieu leur a dit ». Le mot rasulu est en position de sujet du verbe qala — c'est le messager qui parle. L'idafa avec Allahi definit la source de l'autorite du messager : il parle au nom de Dieu. Le champ lexical messager + Dieu + dire forme une declaration d'autorite divine : ce n'est pas un homme quelconque qui avertit mais l'envoye de Dieu. Le messager introduit la chamelle et son breuvage — il rappelle ce qui est sacre. La position du messager entre l'elancement du plus malheureux (v12) et l'acte (v14) montre qu'il est le dernier rempart contre la catastrophe.",
        axe2_voisins: "Le verset 12 montrait le plus malheureux qui se leve. Le verset 13 introduit le messager comme contrepoids — face a la transgression, la parole divine intervient. Le verset 14 montrera l'echec de cette intervention. Le messager est place entre la menace et l'acte, offrant une derniere chance. Les versets 11-12 decrivaient le camp du deni et de la transgression. Le verset 13 introduit le camp de la guidance. Le conflit entre les deux camps se resoudra au verset 14.",
        axe3_sourate: "La sourate oppose purification et corruption. Le messager est l'agent de purification — il porte le message qui pourrait purifier l'ame de Thamud s'ils ecoutaient. Son intervention est la derniere opportunite de purification avant que la corruption ne mene a la destruction. Les sept serments cosmiques (v1-7) preparaient ce moment : tout l'ordre cosmique temoigne que la purification est le chemin du succes, et le messager offre cette purification a Thamud.",
        axe4_coherence: "Le mot rasul et ses derives apparaissent plus de 300 fois dans le Coran. Le Coran insiste sur la chaine des messagers envoyes aux peuples : chaque peuple a recu un messager (10:47, 16:36). Salih est mentionne comme messager des Thamud dans plusieurs sourates : « Aux Thamud, [nous avons envoye] leur frere Salih » (7:73, 11:61, 26:142). En 91:13, le texte ne nomme pas Salih mais utilise rasulu Allahi (le messager de Dieu), insistant sur la fonction plutot que sur la personne.",
        axe5_frequence: "Pour la mission du khalifa, le messager est le modele de la mission. Le messager de Dieu avertit, rappelle, nomme ce qui est sacre — il accomplit la mission de guidance que le khalifa doit relayer. L'echec de Thamud a ecouter le messager est l'echec de la reception de la mission. Le khalifa doit a la fois porter le message (comme le messager) et l'ecouter (contrairement a Thamud)."
      },
      "Eau/Liquide": {
        status: "nul",
        senses: ["laisser couler", "lacher l'eau", "decharger"],
        proof_ctx: "Le Lane's mentionne que la racine r-s-l porte aussi le sens de lacher, laisser aller (l'eau, un animal). Ce sens physique n'est pas pertinent ici — le verset parle clairement d'un messager qui s'adresse a un peuple, pas d'un ecoulement d'eau."
      },
      "Sens isolé/Cheveux": {
        status: "nul",
        senses: ["cheveux detaches", "chevelure lachee"],
        proof_ctx: "Le Lane's mentionne un sens rare de cheveux detaches (risl = cheveux longs et laches). Ce sens est completement hors contexte — le verset parle d'un messager de Dieu, pas de cheveux."
      }
    }
  }, 2);

  // ---- NQA (ناقة) — id=1893 — "chamelle" ----
  // Forme: naqata = nom accusatif (la chamelle de Dieu, complement d'objet ou exclamatif)
  await upsertVWA(verse_id, 'nqa', 'chamelle', {
    sense_chosen: "chamelle",
    concept_chosen: "Animal/Signe",
    concepts: {
      "Animal/Signe": {
        status: "retenu",
        senses: ["chamelle", "chamelle femelle"],
        proof_ctx: "Le sens retenu est « Animal/Signe ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-w-q (ou n-q-h) donne naqa : une chamelle femelle. Le Lane's donne naqatun : a she-camel. C'est un nom concret et precis qui designe specifiquement la femelle du chameau. Le mot naqata est a l'accusatif, soit comme complement d'objet de qala (il leur a dit : [respectez] la chamelle de Dieu), soit comme exclamatif d'avertissement (la chamelle de Dieu ! [prenez garde]). L'idafa avec Allahi (la chamelle de Dieu) confere a l'animal un statut sacre — elle n'est pas une chamelle ordinaire mais celle que Dieu a designee comme signe. Le texte ne precise pas la nature exacte de ce statut sacre — il dit seulement qu'elle est « de Dieu ». La chamelle est un signe concret, tangible, que Thamud doit respecter. Sa mise a mort sera l'acte de transgression ultime.",
        axe1_verset: "Le verset dit « la chamelle de Dieu et son breuvage ». Le mot naqata est en position d'exclamatif ou de complement d'objet — le messager designe la chamelle comme l'objet sacre a respecter. L'idafa avec Allahi rattache la chamelle a Dieu : elle est « de Dieu », elle lui appartient ou elle est Son signe. Le champ lexical chamelle + Dieu + breuvage forme un rappel de droits : la chamelle a un droit divin a son eau, et ce droit ne doit pas etre viole. L'avertissement du messager porte sur deux choses precises : l'animal et son eau. La concretude de l'avertissement contraste avec l'abstraction des serments cosmiques (v1-7) — ici, le signe divin est un animal reel avec des besoins reels.",
        axe2_voisins: "Le verset 12 montrait le plus malheureux pret a agir. Le verset 13 nomme l'objet de l'acte : la chamelle. Le verset 14 confirmera que la chamelle a ete abattue ('aqaruha). Le messager designe la chamelle pour la proteger — il la nomme, il rappelle son statut divin, il mentionne son droit a l'eau. Malgre cet avertissement explicite, le peuple abattra la chamelle au verset suivant. L'avertissement rend l'acte d'autant plus grave : ils savaient ce qu'ils faisaient.",
        axe3_sourate: "La sourate parle de signes cosmiques et de purification de l'ame. La chamelle est un signe de Dieu au milieu du monde terrestre — comme le soleil, la lune et la terre sont des signes cosmiques (v1-6), la chamelle est un signe concret dans la vie quotidienne de Thamud. Respecter la chamelle, c'est respecter le signe divin, c'est purifier son ame. Abattre la chamelle, c'est rejeter le signe, c'est corrompre son ame. La chamelle est le point de jonction entre le message cosmique et la vie terrestre.",
        axe4_coherence: "La chamelle de Thamud est mentionnee dans plusieurs passages du Coran : « ceci est la chamelle de Dieu, comme signe pour vous ; laissez-la manger sur la terre de Dieu » (7:73), « et nous leur avons donne la chamelle comme signe visible » (17:59). En 54:27, « nous envoyons la chamelle comme epreuve pour eux ». Le Coran presente la chamelle comme un signe divin et une epreuve — le respect de la chamelle est le test que Thamud a echoue.",
        axe5_frequence: "Pour la mission du khalifa, la chamelle represente le signe concret que le khalifa doit proteger. Le khalifa ne protege pas seulement des principes abstraits mais des realites concretes — les etres vivants, les ressources, les droits. La chamelle de Dieu est un etre vivant avec un droit a l'eau que le khalifa doit garantir. L'echec de Thamud a proteger la chamelle est l'echec de leur mission de khalifa sur terre."
      }
    }
  }, 3);

  // ---- SQY (سقي) — id=584 — "breuvage" ----
  // Forme: suqyaha = nom (masdar) + possessif -ha (son breuvage/son abreuvement)
  await upsertVWA(verse_id, 'sqy', 'breuvage', {
    sense_chosen: "breuvage",
    concept_chosen: "Irrigation/Don",
    concepts: {
      "Irrigation/Don": {
        status: "retenu",
        senses: ["abreuver", "irriguer", "donner a boire", "breuvage", "eau a boire"],
        proof_ctx: "Le sens retenu est « Irrigation/Don ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-q-y signifie abreuver, donner a boire, irriguer. Le Lane's donne saqa : he gave him to drink, he watered. Le masdar suqya designe l'acte d'abreuver ou le breuvage lui-meme — l'eau a boire, le droit a l'eau. Le Lane's precise que suqya est a la fois l'acte de donner a boire et la boisson elle-meme. Le possessif -ha (son) renvoie a la chamelle : c'est son breuvage, son eau, son droit a etre abreuvee. Le messager rappelle deux choses : la chamelle elle-meme et son droit a l'eau. Ce rappel du droit a l'eau est crucial car le conflit entre Thamud et la chamelle portait sur le partage de l'eau. La suqya est un droit vital — priver un etre vivant de son eau est un acte de transgression fondamentale.",
        axe1_verset: "Le verset dit « la chamelle de Dieu et son breuvage ». Le mot suqyaha est coordonne a naqata par wa- (et) — le messager rappelle deux elements sacres : l'animal et son eau. La coordination place les deux sur le meme plan de sacralite : la chamelle est sacree et son eau aussi. Le possessif -ha rattache le breuvage a la chamelle — ce n'est pas l'eau en general mais l'eau qui lui revient de droit. Le champ lexical chamelle + breuvage forme un rappel de droits concrets et vitaux. L'avertissement du messager est pratique : respectez cet animal et son droit a l'eau.",
        axe2_voisins: "Le verset 12 montrait le plus malheureux pret a agir. Le verset 13 precise les deux objets de l'avertissement : la chamelle et son eau. Le verset 14 montrera que les deux ont ete violes — la chamelle a ete abattue, ce qui implique aussi la suppression de son droit a l'eau. Le breuvage est mentionne separement de la chamelle car le conflit portait specifiquement sur le partage de l'eau entre le peuple et l'animal. La mention du breuvage n'est pas une repetition mais un ajout essentiel : le messager rappelle que le probleme est le partage equitable des ressources.",
        axe3_sourate: "La sourate traite de l'equilibre cosmique (v1-7) et de la purification de l'ame (v8-10). Le breuvage de la chamelle s'inscrit dans cette logique d'equilibre : chaque etre a droit a sa part de ressources. La transgression de Thamud est une rupture de cet equilibre — ils ont refuse le partage equitable de l'eau. La corruption de l'ame (v10) se manifeste concretement dans le refus de partager les ressources vitales. La purification de l'ame (v9) passerait par le respect du droit de la chamelle a son eau.",
        axe4_coherence: "En 54:28, le Coran precise le conflit autour de l'eau : « Informe-les que l'eau est a partager entre eux, chaque part de boisson sera presentee ». Le partage de l'eau entre Thamud et la chamelle est explicite dans le Coran. En 26:155, Salih dit : « voici une chamelle, a elle un jour de breuvage et a vous un jour de breuvage fixe ». Le conflit autour du breuvage est le coeur du recit de Thamud dans le Coran — le verset 91:13 le rappelle en deux mots : la chamelle et son breuvage.",
        axe5_frequence: "Pour la mission du khalifa, le breuvage represente le droit vital aux ressources. Le khalifa est garant du partage equitable des ressources — l'eau, la nourriture, les biens. La suqya de la chamelle est un modele de droit fondamental que le khalifa doit proteger. L'echec de Thamud est un echec de partage : ils ont voulu toute l'eau pour eux et ont tue l'animal qui partageait leur ressource. Le khalifa doit empecher cette confiscation des droits vitaux."
      }
    }
  }, 4);

  await sb.from('verse_analyses').update({
    translation_arab: "فَقَالَ لَهُمْ رَسُولُ ٱللَّهِ نَاقَةَ ٱللَّهِ وَسُقْيَـٰهَا",
    full_translation: "Le Messager d'Allah leur dit: La chamelle d'Allah! et qu'elle boive",
    segments: [
      { fr: "Leur a dit", pos: "verbe", phon: "fa-qala lahum", arabic: "فَقَالَ لَهُمْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "le messager de Dieu", pos: "nom", phon: "rasulu Allahi", arabic: "رَسُولُ ٱللَّهِ", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 2 },
      { fr: "la chamelle de Dieu", pos: "nom", phon: "naqata Allahi", arabic: "نَاقَةَ ٱللَّهِ", word_key: "nqa", is_particle: false, sense_retenu: "chamelle", position: 3 },
      { fr: "et son breuvage", pos: "nom", phon: "wa-suqyaha", arabic: "وَسُقْيَـٰهَا", word_key: "sqy", is_particle: false, sense_retenu: "breuvage", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset introduit le discours du messager de Dieu adresse a Thamud. Le fa- initial marque la succession : apres l'elancement du plus malheureux (v12), le messager intervient. Le verbe qala est un accompli forme I de la racine q-w-l. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qala signifie dire, parler, enoncer. Le complement lahum (a eux) indique l'auditoire. Le mot rasulu est en idafa avec Allahi — le messager de Dieu. La racine r-s-l signifie envoyer ; le rasul est celui qui est envoye avec un message. Le texte ne nomme pas le messager (Salih) mais utilise sa fonction (messager de Dieu), insistant sur l'autorite divine de la parole. Le mot naqata est a l'accusatif, soit comme complement d'objet sous-entendu (respectez la chamelle de Dieu), soit comme exclamatif d'avertissement (la chamelle de Dieu !). L'idafa avec Allahi confere a la chamelle un statut sacre. Le mot suqyaha est un masdar (nom verbal) de la racine s-q-y (abreuver, donner a boire) avec le possessif -ha (son). D'apres les sources etymologiques, suqya designe le breuvage ou l'acte d'abreuver. La coordination wa- (et) lie la chamelle a son eau — les deux sont sacres et doivent etre respectes.

§JUSTIFICATION§
**dire** — Le sens retenu est « dire ». Le verbe qala est le verbe de parole le plus courant en arabe. Pas d'alternative a ecarter — c'est le sens premier et evident.

**messager** — Le sens retenu est « messager ». Le mot rasul traduit la fonction d'envoye divin. L'alternative « envoye » est un synonyme exact. L'alternative « apotre » est un vocabulaire chretien a eviter. Le texte ne nomme pas le messager (Salih) — il utilise la fonction generique.

**chamelle** — Le sens retenu est « chamelle ». Le mot naqa designe specifiquement une chamelle femelle. Pas d'alternative a ecarter — c'est le sens premier et unique dans ce contexte.

**breuvage** — Le sens retenu est « breuvage ». Le masdar suqya traduit le droit a l'eau de la chamelle. L'alternative « abreuvement » est plus technique. L'alternative « eau » perdrait la dimension de droit — le suqya n'est pas simplement de l'eau mais le droit d'etre abreuvee.

§CRITIQUE§
Hamidullah traduit « Le Messager d'Allah leur dit : La chamelle d'Allah ! et qu'elle boive ». La traduction de Hamidullah est globalement fidele. « Allah » est rendu par « Dieu » dans notre traduction par convention de francais courant. Hamidullah traduit suqyaha par « qu'elle boive » — une interpretation dynamique du masdar (nom verbal) comme un imperatif. Le texte dit litteralement « son breuvage » (suqyaha = nom + possessif), pas « qu'elle boive » (qui serait un verbe). Notre traduction « et son breuvage » est plus litterale. La difference change legerement le sens : « qu'elle boive » est un ordre, « et son breuvage » est un rappel de droit.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:13 — TERMINE');
  console.log('  qwl (ق و ل) → "dire" | rsl (ر س ل) → "messager" | nqa (ن ا ق) → "chamelle" | sqy (س ق ي) → "breuvage"');
}

async function verse91_14() {
  console.log('\n=== VERSET 91:14 — فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنۢبِهِمْ فَسَوَّىٰهَا ===');
  const verse_id = 6057;

  // ---- KDB (كذب) — id=474 — "dementir" ----
  // Forme: kadhdhabuhu = forme II accompli + suffixe -hu (ils l'ont dementi, -hu = le messager)
  await upsertVWA(verse_id, 'kdb', 'dementir', {
    sense_chosen: "dementir",
    concept_chosen: "Mensonge/Fausseté",
    concepts: {
      "Mensonge/Fausseté": {
        status: "retenu",
        senses: ["mentir", "dementir", "declarer faux", "nier", "fausser"],
        proof_ctx: "Le sens retenu est « Mensonge/Faussete ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-dh-b signifie mentir, dementir, declarer faux. Le verbe kadhdhabuhu est a la forme II accompli avec le suffixe pronominal -hu (le) qui renvoie au messager mentionne au verset 13. A la difference du verset 11 ou le deni etait intransitif (kadhdhabat bi-taghwaha — Thamud a dementi par sa transgression, sans objet direct de personne), le verset 14 a un objet direct : -hu (le messager). Le deni passe du general au personnel — ils ont dementi le messager lui-meme. Le fa- initial marque la succession temporelle : apres l'avertissement du messager (v13), ils l'ont dementi. Le pluriel masculin (kadhdhabu) indique que le peuple entier est implique dans le deni, pas seulement le plus malheureux. Le deni au verset 14 est la reponse directe a l'avertissement du verset 13 — le messager a parle, ils ont refuse.",
        axe1_verset: "Le verset dit « ils l'ont dementi et l'ont abattue ». Le verbe kadhdhabuhu est le premier d'une serie de quatre fa- (alors) qui s'enchainent : fa-kadhdhabuhu fa-'aqaruha fa-damdama fa-sawwaha. Le deni ouvre cette chaine de consequences. Le champ lexical dementir + abattre + detruire + niveler forme une escalade : du deni verbal a la destruction totale. Le suffixe -hu (le) personnalise le deni — ce n'est plus un deni abstrait mais le rejet d'une personne precise (le messager). L'accompli marque des actes acheves et irreversibles.",
        axe2_voisins: "Le verset 13 etait l'avertissement du messager. Le verset 14 est la reponse : le deni, suivi immediatement de l'action destructrice. Le verset 15 donnera la conclusion divine (pas de crainte des consequences). La rapidite de la chaine fa-kadhdhabuhu fa-'aqaruha montre que le deni et l'acte sont quasi simultanes — ils n'ont pas hesité entre le deni et le passage a l'acte. L'avertissement a ete ignore instantanement.",
        axe3_sourate: "Le deni du verset 14 reprend celui du verset 11 (kadhdhabat) en le concretisant. Au verset 11, le deni etait general (Thamud a dementi). Au verset 14, le deni est direct et personnel (ils l'ont dementi, lui le messager). La sourate montre la progression de la corruption : du deni interieur (v11) au deni face-a-face (v14). L'ame corrompue (v10) se manifeste d'abord par un etat general de transgression (v11), puis par un rejet personnel du messager (v14).",
        axe4_coherence: "La double mention du deni (v11 et v14) est typique du recit coranique des peuples detruits. En 26:141-157, le recit de Thamud suit le meme schema : le messager avertit, le peuple dementi, la chamelle est tuee. La racine k-dh-b avec objet direct est utilisee specifiquement pour le deni du messager : kadhdhabuhu (ils l'ont dementi) apparait dans plusieurs recits de peuples (Nouh, Hud, Salih, Lut). Le schema est constant : avertissement puis deni puis chatiment.",
        axe5_frequence: "Pour la mission du khalifa, le deni du messager est le refus de la guidance. Le khalifa qui rejette la guidance divine rejette sa propre mission. Le deni au verset 14 est plus grave qu'au verset 11 car il est personnel — ils ne rejettent pas simplement un message abstrait mais une personne envoyee par Dieu. Le refus de la guidance incarnee dans un messager est l'echec le plus profond du khalifa."
      }
    }
  }, 1);

  // ---- EQR (عقر) — id=1261 — "abattre" ----
  // Forme: fa-'aqaruha = verbe accompli forme I + suffixe -ha (ils l'ont abattue/mutilee, la chamelle)
  await upsertVWA(verse_id, 'eqr', 'abattre', {
    sense_chosen: "abattre",
    concept_chosen: "Destruction/Mutilation",
    concepts: {
      "Destruction/Mutilation": {
        status: "retenu",
        senses: ["mutiler", "abattre", "egorger", "tuer (un animal)", "trancher les jarrets"],
        proof_ctx: "Le sens retenu est « Destruction/Mutilation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-q-r signifie trancher les jarrets d'un chameau pour le faire tomber, abattre un animal en lui coupant les pattes, mutiler, tuer. Le Lane's donne 'aqara al-ba'ira : he hamstrung the camel, he cut the legs of the camel so that it fell. Le mot 'aqara designe specifiquement l'abattage d'un chameau en lui tranchant les jarrets — c'est la methode traditionnelle d'abattage des grands animaux. Le verbe fa-'aqaruha est a l'accompli avec le suffixe -ha (elle = la chamelle). Le fa- marque la succession immediate apres le deni : ils ont dementi puis aussitot abattu. Le pluriel masculin ('aqaru) indique que le peuple entier est responsable de l'acte, meme si c'est le plus malheureux qui a frappe (v12). Le Lane's precise que 'aqara implique une violence deliberee et methodique — ce n'est pas un accident mais un acte de destruction calcule. Distinction avec « Sterilite/Incapacite » : la racine '-q-r porte aussi le sens de sterilite (femme sterile = 'aqir). La sterilite est une incapacite naturelle, pas un acte de violence. Distinction avec le retenu : la destruction est un acte exterieur dirige vers un objet, la sterilite est un etat interieur subi par le sujet. La structure grammaticale (accompli + objet -ha) confirme un acte accompli sur la chamelle, pas un etat de sterilite.",
        axe1_verset: "Le verset dit « ils l'ont abattue ». Le verbe 'aqaruha suit immediatement kadhdhabuhu — le deni et l'abattage sont coordonnes par fa- comme deux actes quasi simultanes. Le champ lexical dementir + abattre montre une escalade : du refus verbal (deni) a la violence physique (abattage). Le suffixe -ha renvoie a la chamelle de Dieu mentionnee au verset 13 — l'objet sacre que le messager avait designe pour protection est celui que le peuple detruit. L'acte d'abattre la chamelle est la transgression ultime car il viole directement l'avertissement du messager. Le pluriel masculin implique la responsabilite collective, pas seulement celle du plus malheureux.",
        axe2_voisins: "Le verset 13 nommait la chamelle et son breuvage comme objets sacres a respecter. Le verset 14 repond par l'abattage de cette meme chamelle. L'ironie est brutale : les deux choses que le messager a nommees pour les proteger sont exactement ce que le peuple detruit. Le verset continue avec la destruction divine (fa-damdama) — l'abattage de la chamelle est la cause directe du chatiment. La progression est : avertissement (v13) → deni + abattage (v14a) → destruction divine (v14b).",
        axe3_sourate: "La sourate oppose purification et corruption. L'abattage de la chamelle est l'acte de corruption par excellence — detruire un signe de Dieu, tuer un etre vivant sacre, violer l'avertissement du messager. Les sept serments cosmiques (v1-7) etaient convocues pour affirmer que la purification reussit et la corruption echoue. L'abattage est la preuve ultime de la corruption de l'ame de Thamud — leur ame corrompue (v10) les a conduits a detruire ce que Dieu avait designe comme sacre.",
        axe4_coherence: "Le verbe 'aqara est utilise dans le Coran specifiquement pour l'abattage de la chamelle de Thamud : « ils abattirent ('aqaru) la chamelle » (7:77), « alors ils appelerent leur compagnon qui se chargea de l'abattre (fa-'aqara) » (54:29). En 54:29, le verbe 'aqara est utilise au singulier (un seul homme a frappe) tandis qu'en 91:14 le pluriel ('aqaruha) marque la responsabilite collective. Le Coran presente l'acte comme individuel dans l'execution mais collectif dans la responsabilite.",
        axe5_frequence: "Pour la mission du khalifa, l'abattage de la chamelle est la destruction d'un signe divin que le khalifa avait la charge de proteger. Le khalifa est garant de l'integrite de la creation — les etres vivants, les ressources, les signes. Abattre la chamelle, c'est violer la charge confiee au khalifa. L'acte est d'autant plus grave qu'il vise un signe de Dieu designe comme tel par le messager — c'est une destruction volontaire et informee."
      },
      "Stérilité/Incapacité": {
        status: "peu_probable",
        senses: ["etre sterile", "femme sterile", "incapacite de procreer", "terre sterile"],
        proof_ctx: "La sterilite est un etat interieur et naturel — on est sterile, on ne rend pas sterile par un acte de violence. Le verset decrit un acte accompli sur la chamelle ('aqaruha = ils l'ont abattue), pas un etat de sterilite. Distinction avec le sens retenu : la destruction est un acte exterieur, delibere, dirige vers un objet. La sterilite est un etat interieur, naturel, subi. La structure grammaticale accompli + objet direct confirme un acte, pas un etat.",
        axe1_verset: "Si 'aqaruha portait le sens de sterilite, le verset dirait « ils l'ont rendue sterile ». Mais la sterilite est un etat naturel qui ne se cause pas par un acte violent. Le contexte de violence (deni puis abattage puis destruction divine) exclut un sens aussi passif que la sterilite. Le champ lexical du verset est entierement celui de la violence et de la destruction, pas de l'incapacite naturelle. La chamelle n'est pas rendue sterile — elle est physiquement abattue.",
        axe2_voisins: "Le verset 12 montrait le plus malheureux qui s'elance — un mouvement physique violent. Le verset 14 enchaine deni + abattage + destruction. Toute la sequence est une escalade de violence. La sterilite est un etat passif qui ne s'inscrit pas dans cette escalade. Le verset 15 conclut par « il ne craint pas les consequences » — cette conclusion n'a de sens que si l'acte precedent etait violent et grave, pas s'il s'agissait de sterilite.",
        axe3_sourate: "La sourate traite de purification et de corruption par des actes. La sterilite n'est pas un acte de corruption — c'est un etat naturel. La corruption de l'ame (v10) se manifeste par des actes deliberes (v11-14), pas par des etats naturels. L'abattage est un acte de corruption active ; la sterilite est un etat passif. Le theme de la sourate exige un sens actif et delibere.",
        axe4_coherence: "Le mot 'aqir (sterile) est utilise dans le Coran pour Sarah et la femme de Zacharie (3:40, 51:29) — des femmes qui ne pouvaient pas enfanter. Ce sens est toujours un etat subi, pas un acte inflige. Le verbe 'aqara avec objet direct est toujours utilise dans le Coran pour l'abattage de la chamelle, jamais pour causer la sterilite.",
        axe5_frequence: "Pour le khalifa, la sterilite n'est pas un echec de mission — c'est un etat naturel hors du controle humain. L'abattage est un acte de destruction volontaire qui represente un echec direct de la mission. La sterilite n'a pas la gravite morale requise par le contexte du recit de Thamud."
      },
      "Végétation/Plante": {
        status: "nul",
        senses: ["plante", "racine de plante", "souche"],
        proof_ctx: "Le Lane's mentionne un sens rare de 'aqr comme souche d'arbre ou base de plante. Ce sens est completement hors contexte — le verset parle de la chamelle de Dieu, pas de vegetation. Le suffixe -ha (elle) renvoie clairement a la chamelle."
      }
    }
  }, 2);

  // ---- DMDM (دمدم) — id=2624 — "detruire" ----
  // Forme: fa-damdama 'alayhim = verbe accompli (forme quadrilitere) + 'alayhim (sur eux)
  await upsertVWA(verse_id, 'dmdm', 'detruire', {
    sense_chosen: "detruire",
    concept_chosen: "Destruction/Écrasement",
    concepts: {
      "Destruction/Écrasement": {
        status: "retenu",
        senses: ["detruire", "ecraser", "aneantir", "ensevelir", "raser"],
        proof_ctx: "Le sens retenu est « Destruction/Ecrasement ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine quadrilitere d-m-d-m est une reduplication intensive de d-m-m qui porte l'idee de destruction totale, d'ecrasement complet, d'aneantissement. Le Lane's donne damdama 'alayhi : he destroyed him utterly, he overwhelmed him with destruction, he razed to the ground. La reduplication de la racine (dm-dm au lieu de dm) exprime une intensite maximale — la destruction est totale, definitive, sans reste. Le verbe est a l'accompli avec la preposition 'alayhim (sur eux) — la destruction s'est abattue sur eux. Le sujet de damdama est rabbuhum (leur Seigneur) — c'est Dieu qui detruit. Le fa- marque la succession : apres le deni et l'abattage, la destruction divine intervient. La destruction est presentee comme la consequence directe de l'abattage — bi-dhanbihim (a cause de leur faute) en donne la raison. Distinction avec « Colere/Mecontentement » : la colere est une emotion interieure qui reste chez celui qui la ressent. La destruction est un acte exterieur dirige sur un objet. Le verset dit que Dieu a detruit (acte) Thamud, pas que Dieu etait en colere (emotion). Distinction avec « Tremblement/Seisme » : le tremblement est le moyen physique, la destruction est le resultat. Le verset insiste sur le resultat (aneantissement total), pas sur le moyen.",
        axe1_verset: "Le verset dit « leur Seigneur les a detruits a cause de leur faute et a tout nivele ». Le verbe fa-damdama est le troisieme fa- de la chaine : fa-kadhdhabuhu fa-'aqaruha fa-damdama. La destruction est le troisieme acte, la consequence des deux premiers. Le champ lexical detruire + Seigneur + faute + niveler forme un jugement complet : Dieu detruit a cause d'une faute et egalise tout. La preposition 'alayhim (sur eux) indique que la destruction s'est abattue sur Thamud comme un poids ecrasant. La reduplication d-m-d-m porte une violence sonore qui traduit la totalite de la destruction.",
        axe2_voisins: "Les versets 11-13 decrivaient le deni et l'avertissement. Le debut du verset 14 montrait le deni et l'abattage. La deuxieme partie du verset 14 donne la reponse divine : la destruction. Le verset 15 clot le recit par une note sur l'absence de crainte des consequences. La destruction est le point culminant du recit — le moment ou Dieu intervient directement. La progression est complete : transgression (v11) → elancement (v12) → avertissement (v13) → deni + abattage (v14a) → destruction (v14b).",
        axe3_sourate: "La sourate affirmait que corrompre son ame mene a l'echec (v10 — khaba). La destruction de Thamud est la preuve concrete de cet echec. Le mot khaba (echouer/perdre) du verset 10 se concretise en damdama (detruire) au verset 14. L'echec annonce dans le constat general se realise dans le recit particulier. Les serments cosmiques (v1-7) etaient convocues pour valider cette verite : la corruption mene a la destruction. La destruction de Thamud est le point d'aboutissement de toute la sourate.",
        axe4_coherence: "Le verbe damdama est rare dans le Coran — il n'apparait qu'ici en 91:14. Mais la destruction des peuples anciens est un theme majeur : « nous les avons detruits (ahlaknahum) a cause de leurs peches » (29:40), « et Dieu les frappa d'un chatiment de fondement » (16:26). En 69:5, « quant a Thamud, ils furent detruits par le tagiya (la destruction excessive) ». En 7:78, « le tremblement les saisit et ils se retrouverent gisant dans leurs demeures ». La destruction de Thamud est decrite differemment selon les sourates mais le resultat est le meme : l'aneantissement total.",
        axe5_frequence: "Pour la mission du khalifa, la destruction divine est la consequence ultime de l'abandon de la mission. Le khalifa qui non seulement abandonne sa mission mais detruit activement les signes de Dieu subit la destruction en retour. La destruction n'est pas un chatiment arbitraire mais la consequence naturelle de la transgression — celui qui detruit sera detruit. Le sujet rabbuhum (leur Seigneur) montre que c'est le meme Seigneur qui avait envoye le messager et la chamelle qui detruit maintenant le peuple — l'autorite bienveillante devient destructrice quand ses signes sont violes."
      },
      "Tremblement/Séisme": {
        status: "probable",
        senses: ["trembler", "faire trembler", "seisme", "secousse", "grondement"],
        proof_ctx: "Le tremblement/seisme est le moyen physique de la destruction. D'apres les sources etymologiques, damdama peut aussi evoquer un grondement sourd, un tremblement de terre, une vibration destructrice. Le Lane's mentionne que damdama porte une resonance sonore (la reduplication evoque le bruit du grondement). D'autres versets decrivent la destruction de Thamud par un tremblement (rajfa en 7:78). Le seisme est le moyen par lequel la destruction se realise. Distinction avec le sens retenu : la destruction est le resultat final, le seisme est le moyen physique. Le verset insiste sur le resultat (fa-damdama 'alayhim = il les a detruits/ecrases) plus que sur le moyen. Mais les deux sens sont intimement lies — le seisme produit la destruction.",
        axe1_verset: "Le verset dit « leur Seigneur les a [detruits/fait trembler] a cause de leur faute ». Si damdama porte le sens de seisme, le verset decrit un tremblement de terre qui s'abat sur Thamud. Le champ lexical seisme + faute + niveler est coherent : un seisme detruit et nivelle tout. La reduplication d-m-d-m pourrait evoquer le grondement repete du seisme — le sol qui tremble, encore et encore, jusqu'a la destruction totale. La preposition 'alayhim (sur eux) est compatible : le seisme s'abat sur eux. Le sens de seisme est coherent avec le champ lexical du verset.",
        axe2_voisins: "En 7:78, la destruction de Thamud est decrite par le mot rajfa (tremblement/seisme) : « le tremblement les saisit ». Le seisme est le moyen de destruction de Thamud dans d'autres passages coraniques. Le verset 91:14 pourrait decrire le meme evenement avec un vocabulaire different. La progression du recit (deni → abattage → seisme → nivellement) est coherente avec un cataclysme naturel qui accomplit la destruction divine.",
        axe3_sourate: "La sourate ouvrait par des phenomenes cosmiques (soleil, lune, jour, nuit, ciel, terre). Un seisme s'inscrirait dans cette logique cosmique — la terre elle-meme reagit a la transgression de Thamud. Le seisme serait la reponse de la terre aux serments du debut de la sourate : la terre (v6) participe a la destruction de ceux qui ont corrompu leur ame. L'ordre cosmique atteste la verite et la terre execute la consequence.",
        axe4_coherence: "La destruction de Thamud est decrite par differents moyens dans le Coran : rajfa (tremblement, 7:78), sayha (cri strident, 11:67), tagiya (destruction excessive, 69:5). Le seisme est l'un de ces moyens. Le verbe damdama, par sa reduplication sonore, pourrait combiner le grondement du seisme et la totalite de la destruction. Le Coran n'est pas contradictoire — les differents termes decrivent des aspects differents du meme evenement catastrophique.",
        axe5_frequence: "Pour le khalifa, le seisme est un rappel que la terre elle-meme est mobilisee dans la consequence de la transgression. Le khalifa est le representant de Dieu sur terre — quand il viole sa mission, la terre elle-meme reagit. Le seisme est la manifestation physique de la rupture du contrat entre le khalifa et son Seigneur."
      },
      "Colère/Mécontentement": {
        status: "peu_probable",
        senses: ["etre furieux", "gronder de colere", "etre mecontent"],
        proof_ctx: "La colere est une emotion interieure. Le Lane's mentionne que damdama peut porter une connotation de grondement (comme le grondement de colere). Mais le verset decrit un acte de destruction ('alayhim = sur eux), pas un etat emotionnel. Le texte ne dit pas que Dieu etait en colere — il dit que Dieu a detruit. La distinction est fondamentale : la destruction est un acte dirigé vers l'exterieur qui atteint physiquement Thamud. La colere resterait chez celui qui la ressent. Le verset 91:14 montre un resultat (Thamud est detruit et tout est nivele), pas une emotion. De plus, attribuer la colere a Dieu serait un anthropomorphisme — le texte ne dit pas explicitement que Dieu est en colere, il dit que Dieu a detruit.",
        axe1_verset: "Si damdama portait le sens de colere, le verset dirait « leur Seigneur s'est mis en colere contre eux a cause de leur faute ». Mais le verset enchaine avec fa-sawwaha (et il a tout nivele) — cette suite implique un acte physique de destruction, pas une emotion. On ne nivelle pas avec de la colere, on nivelle avec une destruction physique. Le champ lexical du verset (dementir + abattre + detruire + niveler) est celui de l'action, pas de l'emotion. La colere ne produit pas directement le nivellement — seule la destruction le fait.",
        axe2_voisins: "Les versets voisins decrivent des actes concrets : deni (acte), elancement (acte), avertissement (acte), abattage (acte). L'ensemble du recit est une succession d'actes, pas d'emotions. La colere briserait la coherence narrative en introduisant une emotion au milieu d'une chaine d'actions. La destruction maintient la logique : acte → acte → acte → consequence.",
        axe3_sourate: "La sourate ne mentionne aucune emotion divine. Elle parle de purification et de corruption, de reussite et d'echec — des resultats, pas des sentiments. La colere divine serait un ajout exegetique que le texte ne soutient pas. Le texte dit ce que Dieu a FAIT (detruit, nivele), pas ce que Dieu a RESSENTI.",
        axe4_coherence: "Le Coran attribue parfois la colere a Dieu (ghadab) mais utilise toujours la racine gh-d-b pour cela, jamais d-m-d-m. La racine d-m-d-m n'est pas associee a la colere dans le Coran. Si le verset voulait exprimer la colere, il utiliserait ghadiba 'alayhim, pas damdama 'alayhim. Le choix du verbe damdama oriente vers la destruction physique, pas l'emotion.",
        axe5_frequence: "Pour le khalifa, la colere est une reaction emotionnelle humaine. La destruction est une consequence d'ordre cosmique. Le texte presente la reponse divine comme un acte de consequence, pas comme une reaction emotionnelle. Attribuer la colere a Dieu reduirait l'acte a une reaction humaine alors que le texte le presente comme une consequence de l'ordre divin."
      }
    }
  }, 3);

  // ---- RBB (ربب) — id=253 — "leur Seigneur" ----
  // Forme: rabbuhum = nom + possessif -hum (leur Seigneur)
  await upsertVWA(verse_id, 'rbb', 'leur Seigneur', {
    sense_chosen: "leur Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maitre", "educateur", "celui qui fait croitre", "celui qui prend en charge"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorite bienveillante ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-b-b signifie elever, nourrir, faire croitre, prendre en charge, etre le maitre de. Le rabb est celui qui nourrit, eduque et fait grandir. Le mot rabbuhum est en position de sujet du verbe damdama — c'est leur Seigneur qui les a detruits. Le possessif -hum (leur) cree un contraste saisissant : Celui qui les avait eleves et nourris est Celui-la meme qui les detruit. Le rabb est a la fois l'educateur bienveillant et l'autorite qui sanctionne la transgression. Le possessif « leur » rappelle que Thamud avait un lien personnel avec leur Seigneur — ils n'ont pas ete detruits par un etranger mais par Celui qui etait leur propre educateur. Cette dimension rend l'echec de Thamud plus tragique : ils ont trahi Celui-la meme qui prenait soin d'eux.",
        axe1_verset: "Le verset dit « leur Seigneur les a detruits a cause de leur faute ». Le mot rabbuhum est le sujet de fa-damdama — c'est le Seigneur qui agit. Le champ lexical Seigneur + detruire + faute montre que la destruction vient de l'autorite supreme en reponse a la transgression. Le possessif -hum (leur) personalise la relation : ce n'est pas un Dieu lointain qui punit des etrangers, c'est leur propre Seigneur qui sanctionne ceux qu'il avait eleves. La position de rabbuhum apres damdama 'alayhim cree un effet de revelation : « il les a detruits — leur Seigneur — a cause de leur faute ». Le sujet est retarde pour creer l'impact.",
        axe2_voisins: "Le verset 13 mentionnait rasulu Allahi (le messager de Dieu) — le representant du Seigneur. Le verset 14 mentionne rabbuhum (leur Seigneur) directement. La progression est du representant au mandant : d'abord le messager avertit (v13), puis le Seigneur Lui-meme intervient (v14). Quand le messager est dementi, le Seigneur agit directement. Le verset 15 conclura par l'absence de crainte — le Seigneur agit sans hesiter.",
        axe3_sourate: "La sourate s'ouvre par des serments cosmiques (v1-7) qui attestent la verite de la purification et de la corruption. Le Seigneur est l'auteur de l'ordre cosmique (le soleil, la lune, le jour, la nuit, le ciel, la terre) et l'auteur de la destruction de ceux qui violent cet ordre. La meme autorite qui a cree l'ame et lui a inspire la piete (v8) detruit ceux qui corrompent cette ame. Le Seigneur est le garant de l'ordre : quand l'ordre est viole, le Seigneur retablit l'equilibre par la destruction.",
        axe4_coherence: "Le mot rabb est le mot le plus frequent du Coran pour designer Dieu dans Sa relation avec Sa creation. En 1:2, « louange a Dieu, Seigneur (rabb) des mondes ». Le possessif « leur Seigneur » apparait des centaines de fois dans le Coran pour marquer la relation personnelle entre Dieu et les humains. En 7:77, « ils abattirent la chamelle et desobeirent a l'ordre de leur Seigneur (rabbihim) ». Le parallele avec 91:14 est direct : dans les deux cas, le Seigneur est celui dont l'ordre est viole et qui sanctionne la violation.",
        axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. Le khalifa agit au nom de son Seigneur. Quand le khalifa trahit sa mission (comme Thamud), c'est son propre Seigneur qui le sanctionne. La relation Seigneur-khalifa est personnelle (rabbuhum = leur Seigneur) — chaque peuple, chaque individu a son propre rapport avec le Seigneur qui l'a eleve. Trahir cette relation, c'est trahir Celui qui vous a fait grandir."
      }
    }
  }, 4);

  // ---- DNB (ذنب) — id=1229 — "faute" ----
  // Forme: bi-dhanbihim = preposition bi + nom + possessif -him (a cause de leur faute)
  await upsertVWA(verse_id, 'dnb', 'faute', {
    sense_chosen: "faute",
    concept_chosen: "Péché/Faute",
    concepts: {
      "Péché/Faute": {
        status: "retenu",
        senses: ["faute", "peche", "transgression", "crime", "culpabilite"],
        proof_ctx: "Le sens retenu est « Peche/Faute ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine dh-n-b signifie commettre une faute, pecher, etre coupable. Le Lane's donne dhanb : a sin, a crime, a fault, an offence, a transgression. Le Lane's mentionne aussi que le sens physique originel de dhanab est la queue d'un animal — ce qui traine derriere soi. La faute (dhanb) est etymologiquement ce qui traine derriere la personne, ce qui la suit comme une queue. Le mot bi-dhanbihim est compose de la preposition bi- (a cause de), du nom dhanb (faute) et du possessif -him (leur). La preposition bi- exprime la cause : Dieu les a detruits a cause de leur faute. Le possessif -him (leur) attribue la faute a Thamud — c'est leur propre faute, pas une faute exterieure. La faute est ici le deni et l'abattage de la chamelle — les actes decrits dans la premiere partie du verset. Distinction avec « Sens isole/Queue » : la queue (dhanab) est le sens physique originel qui a donne naissance au sens figure de faute. Ce sens physique n'est pas pertinent dans ce verset.",
        axe1_verset: "Le verset dit « a cause de leur faute ». Le mot bi-dhanbihim est le complement circonstanciel de cause du verbe damdama — il donne la raison de la destruction. Le champ lexical detruire + faute + niveler forme un schema de causalite : la faute provoque la destruction qui provoque le nivellement. La preposition bi- (a cause de) etablit un lien de cause a effet explicite entre la faute et la destruction. Le possessif -him (leur) insiste sur la responsabilite : c'est leur faute, pas un malheur immotive. Le texte est clair — la destruction n'est pas arbitraire mais causee par une faute identifiable (le deni et l'abattage).",
        axe2_voisins: "Les versets precedents decrivaient les actes de Thamud : transgression (v11), deni (v14a), abattage (v14a). Le mot bi-dhanbihim (a cause de leur faute) resume tous ces actes en un seul mot. La faute est le resume de toute la sequence de transgression. Le verset 15 conclura le recit sans mentionner la faute — la faute a ete nommee et la consequence executee. La mention de la faute entre la destruction et le nivellement est le point de bascule : c'est la faute qui a declenche la destruction.",
        axe3_sourate: "La sourate affirmait au verset 10 que celui qui corrompt son ame echoue (khaba). La faute (dhanb) est la traduction concrete de cette corruption en acte. L'ame corrompue transgresse (v11), le plus malheureux s'elance (v12), le peuple dementi et tue (v14). Tous ces actes sont resumes par dhanb (faute). La faute est le resultat final de la corruption de l'ame — c'est la corruption qui se manifeste en actes. Le verset 10 donnait la theorie (la corruption echoue), le verset 14 donne la preuve (la faute entraine la destruction).",
        axe4_coherence: "La racine dh-n-b apparait dans le Coran dans des contextes de fautes et de peches : « ils reconnurent leur faute (dhanbahum) » (67:11), « pardonne-moi ma faute (dhanbi) » (28:16). Le mot dhanb est toujours un acte dont la personne est responsable — il n'y a pas de faute involontaire dans le Coran. La preposition bi- + dhanb (a cause de la faute) est une construction frequente pour exprimer la cause du chatiment : « a cause de leurs fautes (bi-dhunubihim) ils furent noyes » (71:25). La construction est identique en 91:14.",
        axe5_frequence: "Pour la mission du khalifa, la faute est l'acte qui trahit la mission. Le khalifa est responsable de ses actes — chaque faute le suit (comme la queue suit l'animal, selon l'etymologie). La faute de Thamud n'est pas un malentendu ou un accident — c'est un acte delibere de deni et de destruction. Le khalifa porte la responsabilite de ses fautes, et ces fautes ont des consequences. Le bi- (a cause de) est un rappel constant : la consequence n'est pas arbitraire, elle est causee par la faute."
      },
      "Sens isolé/Queue": {
        status: "nul",
        senses: ["queue", "extremite", "appendice"],
        proof_ctx: "Le sens physique de dhanab (queue d'un animal) est le sens originel de la racine. Le Lane's mentionne que la faute (dhanb) est etymologiquement liee a la queue — ce qui suit la personne, ce qui traine derriere elle. Ce sens physique n'est pas pertinent dans le verset — le contexte est clairement celui de la faute morale qui cause la destruction divine."
      }
    }
  }, 5);

  // ---- SWY (سوي) — id=295 — "niveler" ----
  // Forme: fa-sawwaha = verbe accompli forme II + suffixe -ha (il l'a nivelee/egalisee)
  await upsertVWA(verse_id, 'swy', 'niveler', {
    sense_chosen: "niveler",
    concept_chosen: "Égalité/Équivalence",
    concepts: {
      "Égalité/Équivalence": {
        status: "retenu",
        senses: ["egaliser", "niveler", "mettre a niveau", "aplanir", "rendre egal"],
        proof_ctx: "Le sens retenu est « Egalite/Equivalence ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-w-y signifie etre egal, etre de niveau, rendre egal, niveler, aplanir. Le Lane's donne sawwa : he made equal, he leveled, he made even, he equalized. La forme II sawwa (avec shadda) intensifie le sens : il a completement nivele, il a tout rendu egal. Le verbe fa-sawwaha est a l'accompli avec le suffixe -ha (elle). Le pronom -ha peut renvoyer a la terre, au lieu, ou a la destruction — il a nivele la terre de Thamud, ou il a egalise la destruction (tout le monde a subi le meme sort). Le fa- marque la succession : apres la destruction (damdama), le nivellement. Le nivellement est la derniere etape — apres la destruction, tout est rendu egal, aplani, sans distinction. Le Lane's precise que sawwa implique l'absence de toute irregularite — tout est lisse, egal, uniforme. La destruction a tout nivele. Distinction avec « Achevement/Perfection » : en 91:7, sawwa signifiait « faconner, achever » (l'ame que Dieu a faconnee). Ici en 91:14, le contexte est oppose — ce n'est pas la creation mais la destruction. La racine s-w-y porte les deux sens : egaliser pour creer (faconner) et egaliser pour detruire (niveler). Le contexte du verset 14 (destruction, faute) oriente vers le nivellement destructeur.",
        axe1_verset: "Le verset dit « et a tout nivele ». Le verbe fa-sawwaha est le dernier acte de la chaine : deni → abattage → destruction → nivellement. Le nivellement est la conclusion finale — apres la destruction, tout est rendu egal. Le champ lexical detruire + niveler forme une image d'aneantissement total : rien ne depasse, rien ne subsiste, tout est aplani. Le suffixe -ha (elle) peut renvoyer a la destruction (il l'a egalisee sur tous) ou a la terre (il l'a nivelée). Dans les deux cas, le sens est le meme : la destruction est totale et uniforme. Personne n'a ete epargne parmi les transgresseurs.",
        axe2_voisins: "Le verset 14 contient une progression en quatre etapes : deni → abattage → destruction → nivellement. Le nivellement est l'etape finale qui scelle le destin de Thamud. Le verset 15 conclura par l'absence de crainte des consequences — le nivellement est si complet qu'il n'y a plus rien a craindre ou a regretter. Le nivellement ferme le recit : tout est fini, tout est egal, l'histoire de Thamud est close.",
        axe3_sourate: "La sourate utilisait sawwa au verset 7 pour la creation de l'ame (« l'ame et Celui qui l'a faconnee/sawwaha »). En 91:14, sawwa est utilise pour la destruction. Le meme verbe sert a creer et a detruire — Dieu faconne l'ame (v7) et nivelle la cite des transgresseurs (v14). Ce parallele n'est pas anodin : la meme puissance qui cree avec perfection detruit avec totalite. Le sawwa de la creation et le sawwa de la destruction encadrent le recit — l'ame faconnee (v7) pouvait choisir la purification (v9) ou la corruption (v10), et Thamud a choisi la corruption qui mene au nivellement.",
        axe4_coherence: "La racine s-w-y apparait dans le Coran dans les deux sens. Sens de creation : « Il l'a faconne (sawwahu) et a souffle en lui de Son esprit » (32:9). Sens de nivellement destructeur : « si la terre pouvait etre nivelée (tusawwa) sur eux » (4:42). En 18:29, « un feu dont les murs les encercleront » — le verbe saradiq (encercler) exprime l'idee de nivellement total. Le sawwa de 91:14 s'inscrit dans le sens destructeur — tout est rendu egal dans la destruction.",
        axe5_frequence: "Pour la mission du khalifa, le nivellement est le resultat final de l'abandon de la mission. Quand le khalifa transgresse et detruit au lieu de construire, la consequence est le nivellement — tout ce qu'il a construit est rase. Le parallele avec le sawwa du verset 7 est un rappel : l'ame faconnee par Dieu avec perfection peut mener a la destruction si elle est corrompue. Le khalifa a recu une ame faconnee (v7), il peut la purifier ou la corrompre (v8-10), et la corruption mene au nivellement de tout ce qui existait (v14)."
      }
    }
  }, 6);

  await sb.from('verse_analyses').update({
    translation_arab: "فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنۢبِهِمْ فَسَوَّىٰهَا",
    full_translation: "Mais ils le traiterent de menteur, et ils la tuerent. Leur Seigneur les aneantit pour leur peche et nivela [leur ville]",
    segments: [
      { fr: "Ils l'ont dementi", pos: "verbe", phon: "fa-kadhdhabuhu", arabic: "فَكَذَّبُوهُ", word_key: "kdb", is_particle: false, sense_retenu: "dementir", position: 1 },
      { fr: "et l'ont abattue", pos: "verbe", phon: "fa-'aqaruha", arabic: "فَعَقَرُوهَا", word_key: "eqr", is_particle: false, sense_retenu: "abattre", position: 2 },
      { fr: "leur Seigneur les a detruits", pos: "verbe+nom", phon: "fa-damdama 'alayhim rabbuhum", arabic: "فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم", word_key: "dmdm", is_particle: false, sense_retenu: "detruire", position: 3 },
      { fr: "a cause de leur faute", pos: "nom", phon: "bi-dhanbihim", arabic: "بِذَنۢبِهِمْ", word_key: "dnb", is_particle: false, sense_retenu: "faute", position: 4 },
      { fr: "et a tout nivele", pos: "verbe", phon: "fa-sawwaha", arabic: "فَسَوَّىٰهَا", word_key: "swy", is_particle: false, sense_retenu: "niveler", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le plus long de la sourate — il contient quatre propositions enchainees par fa- (alors/et). Le verbe kadhdhabuhu est un accompli forme II de k-dh-b avec le suffixe -hu (le = le messager). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II kadhdhaba signifie dementir activement. Le suffixe -hu est nouveau par rapport au verset 11 ou le deni etait intransitif — ici le deni vise directement le messager. Le verbe 'aqaruha est un accompli forme I de '-q-r avec le suffixe -ha (elle = la chamelle). D'apres les sources etymologiques, 'aqara signifie abattre un animal en lui tranchant les jarrets. C'est le geste violent par excellence envers un grand animal. Le pluriel ('aqaru) marque la responsabilite collective. Le verbe fa-damdama est un accompli de la racine quadrilitere d-m-d-m. D'apres les sources etymologiques, damdama signifie detruire totalement, ecraser, aneantir. La reduplication (dm-dm) exprime l'intensite maximale de la destruction. Le sujet rabbuhum (leur Seigneur) est retarde pour creer un effet de revelation. Le mot bi-dhanbihim est compose de bi- (a cause de) + dhanb (faute) + -him (leur). D'apres les sources etymologiques, dhanb signifie faute, peche, transgression. La preposition bi- etablit le lien causal entre la faute et la destruction. Le verbe fa-sawwaha est un accompli forme II de s-w-y avec le suffixe -ha. D'apres les sources etymologiques, sawwa forme II signifie niveler, egaliser, rendre plat. Le suffixe -ha renvoie a la terre ou a la destruction — tout a ete rendu egal, aplani. La racine s-w-y etait utilisee au verset 7 pour le faconnement de l'ame (sawwaha = il l'a faconnee) — ici elle est utilisee pour la destruction (sawwaha = il l'a nivelée). Le contraste est frappant : la meme racine sert a creer et a detruire.

§JUSTIFICATION§
**dementir** — Le sens retenu est « dementir ». Le verbe kadhdhabuhu forme II traduit le deni actif du messager. L'alternative « ont traite de menteur » (Hamidullah) est plus idiomatique mais moins precis — dementir porte sur le message, traiter de menteur porte sur la personne.

**abattre** — Le sens retenu est « abattre ». Le verbe 'aqaruha traduit l'abattage violent de la chamelle. L'alternative « tuer » est trop generique — 'aqara designe specifiquement l'abattage d'un grand animal par les jarrets. L'alternative « mutiler » est trop partiel — l'animal est mort, pas seulement blesse.

**detruire** — Le sens retenu est « detruire ». Le verbe damdama traduit la destruction totale et ecrasante. L'alternative « aneantir » (Hamidullah) est un synonyme acceptable. L'alternative « chatier » serait un ajout interpretatif — le texte dit detruire, pas chatier.

**faute** — Le sens retenu est « faute ». Le mot dhanb traduit l'acte reprehensible dont Thamud est responsable. L'alternative « peche » (Hamidullah) porte une connotation religieuse chretienne plus marquee. L'alternative « crime » est trop juridique.

**niveler** — Le sens retenu est « niveler ». Le verbe sawwaha forme II traduit le nivellement total apres la destruction. L'alternative « egaliser » est plus abstrait. L'alternative « raser » est acceptable mais moins fidele a l'etymologie (sawwa = rendre egal/plat).

§CRITIQUE§
Hamidullah traduit « Mais ils le traiterent de menteur, et ils la tuerent. Leur Seigneur les aneantit pour leur peche et nivela [leur ville] ». L'ajout de « [leur ville] » entre crochets est une interpretation exegetique — le texte dit fa-sawwaha sans preciser l'objet du nivellement. Le pronom -ha pourrait renvoyer a la terre, a la destruction, ou a la situation entiere — le texte ne precise pas et Hamidullah ajoute « leur ville » pour combler ce silence. Notre traduction « et a tout nivele » respecte l'indetermination du texte. Le mot « tuerent » pour 'aqaruha est une simplification — 'aqara signifie specifiquement abattre par les jarrets, pas simplement tuer. Notre choix « abattue » rend mieux la violence specifique du geste. Le reste de la traduction de Hamidullah est equivalente.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:14 — TERMINE');
  console.log('  kdb (ك ذ ب) → "dementir" | eqr (ع ق ر) → "abattre" | dmdm (د م د م) → "detruire" | rbb (ر ب ب) → "leur Seigneur" | dnb (ذ ن ب) → "faute" | swy (س و ي) → "niveler"');
}

async function verse91_15() {
  console.log('\n=== VERSET 91:15 — وَلَا يَخَافُ عُقْبَـٰهَا ===');
  const verse_id = 6058;

  // ---- XWF (خوف) — id=759 — "craindre" ----
  // Forme: yakhaafu = verbe inaccompli forme I (il ne craint pas)
  await upsertVWA(verse_id, 'xwf', 'craindre', {
    sense_chosen: "craindre",
    concept_chosen: "Crainte/Peur",
    concepts: {
      "Crainte/Peur": {
        status: "retenu",
        senses: ["craindre", "avoir peur", "redouter", "apprehender", "etre effraye"],
        proof_ctx: "Le sens retenu est « Crainte/Peur ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine kh-w-f signifie craindre, avoir peur, redouter, apprehender un mal futur. Le Lane's donne khafa : he feared, he was afraid, he dreaded. Le verbe yakhaafu est a l'inaccompli forme I avec la negation la (il ne craint pas). L'inaccompli marque un etat permanent ou habituel — il ne craint pas de maniere continue, ce n'est pas qu'il n'a pas craint une seule fois mais qu'il ne craint jamais. Le Lane's precise que khawf est la crainte d'un mal anticipe — c'est la peur de ce qui pourrait arriver, pas la peur de ce qui est deja la. La negation la + inaccompli exprime l'absence totale de crainte. Le sujet de yakhaafu n'est pas explicite dans le verset — le texte dit « et il ne craint pas ses consequences ». Le sujet peut etre Dieu (Il ne craint pas les consequences de Sa destruction) ou le transgresseur (il ne craint pas les consequences de son acte). Le texte ne tranche pas — les deux lectures sont grammaticalement possibles. On ne se prononce pas sur l'identite du sujet car le texte ne le precise pas.",
        axe1_verset: "Le verset dit « et il ne craint pas ses consequences ». Le verbe yakhaafu est precede de wa-la (et ne... pas) — la negation est categorique. L'inaccompli yakhaafu marque un etat constant : la non-crainte n'est pas ponctuelle mais permanente. Le champ lexical ne pas craindre + consequences ferme le recit sur une note d'assurance absolue. Le sujet, qu'il soit Dieu ou le transgresseur, ne craint pas les consequences. Si le sujet est Dieu : Il a detruit sans apprehension. Si le sujet est le transgresseur : il a agi sans craindre les retombees. Le texte laisse l'ambiguite — les deux lectures enrichissent le sens.",
        axe2_voisins: "Le verset 14 decrivait la destruction et le nivellement. Le verset 15 conclut le recit par l'absence de crainte. Si le sujet est Dieu : apres avoir detruit et nivele (v14), Il ne craint pas les consequences (v15). La destruction divine est sans hesitation. Si le sujet est le transgresseur : malgre la destruction qui a suivi (v14), il n'avait pas craint les consequences quand il a agi (v12-14). Le verset 15 est la fermeture du recit de Thamud qui a commence au verset 11. Il scelle l'histoire par un constat final.",
        axe3_sourate: "La sourate affirmait que celui qui corrompt son ame echoue (v10). Le verset 15 conclut l'illustration de cet echec. L'absence de crainte des consequences est soit la toute-puissance divine (Dieu agit sans crainte), soit l'inconscience du transgresseur (il agit sans craindre les retombees). Dans les deux cas, le verset ferme le recit sur une verite : la corruption mene a la destruction, et cette destruction est definitive, sans appel, sans crainte de consequences. Les serments cosmiques (v1-7) etaient convoques pour affirmer cette verite — le verset 15 la confirme.",
        axe4_coherence: "La racine kh-w-f est frequente dans le Coran (plus de 120 occurrences). La crainte de Dieu est un theme central : « ne les craignez pas, craignez-Moi » (2:150). La non-crainte de Dieu est le signe de Sa toute-puissance : « Dieu fait ce qu'Il veut » (2:253). En 5:54, « il combat dans le chemin de Dieu et ne craint pas le blâme de celui qui blâme ». L'absence de crainte est toujours liee a la certitude et a la puissance. En 91:15, l'absence de crainte scelle la certitude de la consequence.",
        axe5_frequence: "Pour la mission du khalifa, l'absence de crainte des consequences est une lecon a double lecture. Si le sujet est Dieu : le khalifa doit savoir que Dieu agit avec certitude, sans hesitation — les consequences de la transgression sont inevitables. Si le sujet est le transgresseur : le khalifa qui ne craint pas les consequences de ses actes court a sa perte. La crainte des consequences est ce qui retient le khalifa dans les limites de sa mission."
      }
    }
  }, 1);

  // ---- EQB (عقب) — id=814 — "consequences" ----
  // Forme: 'uqbaha = nom + possessif -ha (ses consequences)
  await upsertVWA(verse_id, 'eqb', 'consequences', {
    sense_chosen: "consequences",
    concept_chosen: "Succession/Conséquence",
    concepts: {
      "Succession/Conséquence": {
        status: "retenu",
        senses: ["consequence", "suite", "resultat", "succession", "ce qui vient apres"],
        proof_ctx: "Le sens retenu est « Succession/Consequence ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-q-b signifie suivre, venir apres, succeder, etre la consequence de. Le Lane's donne 'aqaba : he followed, he came after, he succeeded. Le nom 'uqba est « ce qui vient apres » — la consequence, la suite, le resultat. Le Lane's precise que 'uqba est la fin d'une chose, ce qui en resulte. Le mot 'uqbaha est compose de 'uqba (consequence) et du possessif -ha (ses). Le -ha peut renvoyer a la destruction (les consequences de la destruction), a la chamelle (les consequences de son abattage), ou a l'acte en general (les consequences de tout cela). Le sens fondamental reste le meme : ce qui vient apres l'acte. La consequence est le resultat temporel — ce qui suit dans le temps. L'absence de crainte des consequences signifie que le sujet (Dieu ou le transgresseur) agit sans se soucier de ce qui viendra ensuite. Distinction avec « Chatiment/Retribution » : le chatiment est une consequence punitive specifique. La consequence est plus large — c'est tout ce qui suit, qu'il soit punitif ou non. Distinction avec « Talon/Arriere » : le talon ('aqib) est le sens physique originel (la partie arriere du pied, ce qui suit le corps). Ce sens physique n'est pas pertinent ici.",
        axe1_verset: "Le verset dit « et il ne craint pas ses consequences ». Le mot 'uqbaha est le complement d'objet de yakhaafu — c'est les consequences que le sujet ne craint pas. Le champ lexical ne pas craindre + consequences forme une conclusion definitive : l'acte (destruction ou transgression) est accompli sans souci de ce qui viendra apres. Le possessif -ha rattache les consequences a un antecedent (la destruction, l'abattage, ou l'acte en general). L'absence de crainte des consequences est la note finale du recit — tout est fini, et les consequences ne font pas peur. L'inaccompli de yakhaafu avec 'uqbaha exprime une absence permanente de crainte — ni maintenant ni jamais.",
        axe2_voisins: "Le verset 14 decrivait les actes (destruction, nivellement). Le verset 15 en donne l'epilogue : pas de crainte des consequences. Le verset 15 est le dernier verset de la sourate — il ferme a la fois le recit de Thamud et la sourate entiere. Les consequences dont il est question sont celles de toute la chaine d'evenements : transgression, deni, abattage, destruction. Le mot 'uqbaha resume tout ce qui pourrait suivre ces actes. Le recit est clos : les actes ont ete commis, les consequences ne font peur a personne.",
        axe3_sourate: "La sourate s'ouvrait par des serments cosmiques sur la purification et la corruption. Elle se ferme par les consequences de la corruption. Le mot 'uqba (consequence) est le point final de la demonstration : la corruption de l'ame (v10) mene au deni (v11), a la transgression (v12-14), et les consequences de tout cela ne font pas peur (v15). La sourate va de la cause (corruption) a la consequence ('uqba) en passant par les actes intermediaires. Les consequences sont la preuve finale que les serments du debut etaient vrais.",
        axe4_coherence: "La racine '-q-b apparait dans le Coran dans des contextes de consequence et de suite : « la bonne consequence ('aqiba) est pour les pieux » (7:128), « quelle a ete la consequence ('aqiba) des transgresseurs » (10:39). Le Coran utilise 'aqiba pour les bonnes et les mauvaises consequences — c'est un mot neutre qui designe simplement ce qui suit. En 91:15, 'uqbaha est neutre : les consequences de l'acte, quelles qu'elles soient. L'absence de crainte des consequences est un theme coranique lie a la puissance divine et a l'inconscience humaine.",
        axe5_frequence: "Pour la mission du khalifa, les consequences sont le resultat de ses actes. Le khalifa qui purifie son ame (v9) a de bonnes consequences. Le khalifa qui la corrompt (v10) a de mauvaises consequences. Le mot 'uqba rappelle que tout acte a une suite — le khalifa ne peut pas agir sans que ses actes le suivent. L'absence de crainte des consequences est soit la confiance du juste (il ne craint pas car il a bien agi), soit l'aveuglement du transgresseur (il ne craint pas car il ne voit pas les consequences)."
      },
      "Châtiment/Rétribution": {
        status: "peu_probable",
        senses: ["chatiment", "punition", "retribution", "represailles"],
        proof_ctx: "Le chatiment est une interpretation plus restrictive de la consequence. D'apres les sources etymologiques, 'uqba est un terme neutre qui signifie simplement « ce qui vient apres » — la consequence, la suite. Le chatiment est une consequence specifiquement punitive. Le verset ne precise pas que les consequences sont punitives — il dit simplement « ses consequences » sans qualificatif. Traduire par « chatiment » serait ajouter un jugement que le texte ne porte pas. Distinction avec le sens retenu : la consequence est neutre (elle peut etre bonne ou mauvaise), le chatiment est toujours negatif. Le texte reste ouvert — le sens retenu respecte cette ouverture.",
        axe1_verset: "Si 'uqbaha signifiait « son chatiment », le verset dirait « il ne craint pas le chatiment ». Mais le chatiment est deja dans la destruction du verset 14 (damdama). Les consequences (uqba) sont ce qui vient APRES la destruction, pas la destruction elle-meme. Le chatiment est l'acte de punir ; la consequence est ce qui suit cet acte. Les deux ne sont pas interchangeables. Le verset parle de ce qui vient apres l'ensemble des evenements, pas du chatiment lui-meme.",
        axe2_voisins: "Le verset 14 contenait deja la destruction (damdama = detruire). Si le verset 15 parlait de chatiment, il y aurait une repetition : destruction au verset 14, chatiment au verset 15. Le sens de « consequence » evite cette redondance — le verset 14 donne l'acte (destruction), le verset 15 evoque ce qui suit cet acte (les consequences au sens large). La consequence est plus large que le chatiment — elle inclut les retombees, les suites, les effets a long terme.",
        axe3_sourate: "La sourate presente la destruction de Thamud comme une consequence de la corruption de l'ame, pas comme un chatiment arbitraire. Le vocabulaire de la sourate est celui de la consequence naturelle (reussite de la purification, echec de la corruption), pas celui du chatiment judiciaire. Le mot « chatiment » introduirait une dimension de punition volontaire qui n'est pas dans la logique de la sourate. La consequence est dans l'ordre des choses — le chatiment est un acte de volonte.",
        axe4_coherence: "Le Coran utilise 'aqiba dans des contextes neutres : « la bonne consequence est pour les pieux » (7:128). La consequence peut etre bonne ou mauvaise. Le chatiment est toujours mauvais. Le choix de « consequence » respecte la polyvalence coranique du mot. Le Coran dispose de mots specifiques pour le chatiment ('adhab, 'iqab) — s'il voulait dire chatiment, il utiliserait l'un de ces mots.",
        axe5_frequence: "Pour le khalifa, la difference entre consequence et chatiment est cruciale. La consequence est un mecanisme naturel — tout acte produit une suite. Le chatiment est un acte de volonte punitive. Comprendre les consequences comme un chatiment reduit la lecon a une punition. Comprendre les consequences comme un resultat naturel elargit la lecon : tout acte a des suites, bonnes ou mauvaises, par la nature meme des choses."
      },
      "Talon/Arrière": {
        status: "nul",
        senses: ["talon", "arriere du pied", "partie posterieure"],
        proof_ctx: "Le talon ('aqib) est le sens physique originel de la racine : la partie arriere du pied, ce qui est derriere, ce qui suit le corps. Ce sens n'est pas pertinent dans le contexte du verset 91:15 qui parle des suites d'un acte de destruction, pas d'une partie du corps."
      },
      "Descendance": {
        status: "nul",
        senses: ["descendance", "posterite", "progéniture"],
        proof_ctx: "La descendance ('aqib) est un sens derive de la succession : les enfants sont ceux qui viennent apres. Ce sens n'est pas pertinent ici — le verset parle des consequences d'un acte de destruction, pas de la posterite d'un peuple."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَلَا يَخَافُ عُقْبَـٰهَا",
    full_translation: "Et Il n'en redoute nullement les consequences",
    segments: [
      { fr: "Et ne", pos: "particule", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 0 },
      { fr: "craint", pos: "verbe", phon: "yakhaafu", arabic: "يَخَافُ", word_key: "xwf", is_particle: false, sense_retenu: "craindre", position: 1 },
      { fr: "ses consequences", pos: "nom", phon: "'uqbaha", arabic: "عُقْبَـٰهَا", word_key: "eqb", is_particle: false, sense_retenu: "consequences", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le dernier de la sourate 91. Il se compose de trois elements : la coordination wa- (et), la negation la + verbe inaccompli yakhaafu (il ne craint pas), et le complement d'objet 'uqbaha (ses consequences). Le verbe yakhaafu est un inaccompli forme I de la racine kh-w-f. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), khafa signifie craindre, avoir peur, redouter un mal futur. L'inaccompli exprime un etat permanent ou habituel — la non-crainte n'est pas ponctuelle mais constante. Le sujet du verbe yakhaafu n'est pas explicite dans le verset. Les grammairiens identifient deux possibilites : soit Dieu (sujet du verbe damdama au verset precedent — Il ne craint pas les consequences de Sa destruction), soit le transgresseur (il n'a pas craint les consequences de son acte). Le texte ne tranche pas entre les deux lectures. On ne se prononce pas sur l'identite du sujet car le texte ne le precise pas. Le mot 'uqbaha est compose de 'uqba (consequence, suite, ce qui vient apres) de la racine '-q-b (suivre, succeder) et du possessif -ha (ses). D'apres les sources etymologiques, 'uqba signifie ce qui suit une chose, sa suite, son resultat. Le possessif -ha renvoie a la destruction, a l'abattage, ou a l'ensemble des actes precedents.

§JUSTIFICATION§
**craint** — Le sens retenu est « craindre ». Le verbe yakhaafu traduit la peur d'un mal futur. L'alternative « redouter » (Hamidullah) est un synonyme plus soutenu. L'alternative « apprehender » est trop formel pour le francais courant. Le choix de « craindre » est le plus naturel et le plus courant.

**consequences** — Le sens retenu est « consequences ». Le mot 'uqbaha traduit ce qui suit les actes precedents. L'alternative « chatiment » serait une interpretation trop restrictive — le texte dit simplement « ses consequences » sans qualifier ces consequences comme punitives. L'alternative « suites » est un synonyme acceptable mais moins precis. Le choix de « consequences » respecte la neutralite du texte arabe.

§CRITIQUE§
Hamidullah traduit « Et Il n'en redoute nullement les consequences ». Hamidullah opte pour Dieu comme sujet (« Il » avec majuscule). C'est une interpretation — le texte arabe ne precise pas le sujet. Notre traduction garde l'ambiguite avec « il » sans majuscule dans les segments, laissant le lecteur comprendre les deux lectures possibles. Le mot « redoute » de Hamidullah est un synonyme de « craint » — les deux sont acceptables. L'ajout de « nullement » par Hamidullah renforce la negation — le texte dit simplement la yakhaafu (ne craint pas) sans adverbe d'intensite. Notre traduction est plus litterale. Pour le reste, les deux traductions convergent sur l'essentiel.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:15 — TERMINE');
  console.log('  xwf (خ و ف) → "craindre" | eqb (ع ق ب) → "consequences"');
}

// ================================================================
// PHRASES DU QUOTIDIEN
// ================================================================
// SKIP: shqy(2176) — deja fait dans s92
// Need daily for: thmd(1892), tghw(1112), nqa(1893), eqr(1261), dmdm(2624), dnb(1229), eqb(814)
// Common roots already with daily: kdb(474), qwl(307), rsl(688), sqy(584),
// rbb(253), swy(295), xwf(759)

async function dailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  // thmd (1892) — Nom propre/Peuple (contexte)
  await insertDaily(1892, 'Thamud', 'ثَمُود', 'Thamud', [
    "Thamud est un peuple ancien qui vivait dans une region aride du nord-ouest de l'Arabie.",
    "Le nom Thamud est peut-etre lie a la rarete de l'eau dans leur region — thamad signifie eau peu abondante.",
    "Les vestiges de Thamud se trouvent a Al-Hijr, un site archeologique au nord-ouest de l'Arabie."
  ]);

  // tghw (1112) — Transgression/Exces
  await insertDaily(1112, 'transgression', 'طُغْيَان', 'tughyan', [
    "Il a depasse toutes les limites dans cette negociation — c'est une vraie transgression des regles.",
    "L'eau a deborde et inonde le quartier — un veritable exces de la riviere apres les pluies.",
    "Celui qui transgresse les regles du jeu sera disqualifie — il ne faut pas depasser les limites."
  ]);

  // nqa (1893) — Animal/Signe (chamelle)
  await insertDaily(1893, 'chamelle', 'نَاقَة', 'naqa', [
    "La chamelle allaite son petit a l'ombre du palmier — c'est un animal bien adapte au desert.",
    "Les caravanes utilisaient des chamelles pour le transport car elles supportent mieux la chaleur que les males.",
    "Cette chamelle produit un lait riche et nourrissant — c'est une ressource precieuse pour les nomades."
  ]);

  // eqr (1261) — Destruction/Mutilation (abattre)
  await insertDaily(1261, 'abattre', 'عَقَرَ', "'aqara", [
    "Le boucher a abattu le mouton selon les regles — un geste rapide et precis.",
    "Ils ont abattu les arbres pour construire la route — la foret a ete rasee en quelques jours.",
    "Il a ete abattu par la nouvelle — c'etait un choc terrible qui l'a mis a terre."
  ]);

  // dmdm (2624) — Destruction/Ecrasement
  await insertDaily(2624, 'detruire', 'دَمْدَمَ', 'damdama', [
    "Le seisme a tout detruit dans le village — il ne reste plus rien debout.",
    "L'orage a ecrase les recoltes sous la grele — une destruction totale en quelques minutes.",
    "Le batiment a ete rase completement — on a tout nivele pour reconstruire a neuf."
  ]);

  // dnb (1229) — Peche/Faute
  await insertDaily(1229, 'faute', 'ذَنْب', 'dhanb', [
    "C'est ma faute, j'aurais du verifier avant de signer — j'assume la responsabilite.",
    "Il a reconnu sa faute devant tout le monde — il faut du courage pour admettre ses erreurs.",
    "Chaque faute a ses consequences — on ne peut pas agir sans que cela nous suive."
  ]);

  // eqb (814) — Succession/Consequence
  await insertDaily(814, 'consequences', 'عَاقِبَة', "'aqiba", [
    "Reflechis aux consequences avant d'agir — chaque decision a une suite.",
    "Les consequences de cette decision seront lourdes — il faut mesurer le pour et le contre.",
    "La bonne consequence est pour celui qui fait bien son travail — la reussite suit l'effort."
  ]);
}

async function main() {
  await verse91_11();
  await verse91_12();
  await verse91_13();
  await verse91_14();
  await verse91_15();
  await dailyPhrases();
  console.log('\n=== PARTIE 3 TERMINEE (versets 11-15) ===');
}

main().catch(console.error);
