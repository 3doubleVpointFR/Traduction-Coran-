// Pipeline Sourate 95 (At-Tin) — Partie 2: Versets 5-8
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

// ================================================================
// CONTEXTE SOURATE 95 (At-Tin / Le Figuier) — suite
// ================================================================
// v5 : retournement — l'etre humain est ramene au plus bas
// v6 : exception — sauf ceux qui croient et agissent bien
// v7 : question rhetorique — qu'est-ce qui te fait dementir le jugement ?
// v8 : conclusion — Dieu n'est-il pas le plus juste des juges ?

async function verse95_5() {
  console.log('\n=== VERSET 95:5 — ثُمَّ رَدَدْنَـٰهُ أَسْفَلَ سَـٰفِلِينَ ===');
  const verse_id = 6103;

  // ---- RDD (ردد) — id=674 — "ramener" ----
  // Forme: radadnahu — verbe forme I accompli, 1ere pers. pluriel + suffixe -hu (le)
  await upsertVWA(verse_id, 'rdd', 'ramener', {
    sense_chosen: "ramener",
    concept_chosen: "Retour/Rejet",
    concepts: {
      "Retour/Rejet": {
        status: "retenu",
        senses: ["rendre", "renvoyer", "rejeter", "refuter"],
        proof_ctx: "Le sens retenu est « Retour/Rejet ». Le Lane's (Edward Lane, 1863) donne pour la racine r-d-d : rendre, renvoyer, rejeter, refuter, ramener en arriere. Le verbe radadnahu est a la forme I accompli, premiere personne du pluriel (nous), avec le suffixe pronominal -hu (le). Le sens est « nous l'avons ramene ». Le retour ici est un retournement : apres la meilleure constitution (v4), l'etre humain est ramene au plus bas (v5). Le verbe radda implique un mouvement inverse — ce qui etait en haut est renvoye en bas. Ce n'est pas un rejet mais un retour a une condition inferieure. Le sens de « ramener » est plus precis que « rejeter » car il implique un deplacement dans une direction specifique (vers le bas).",
        axe1_verset: "Le verset dit « puis nous l'avons ramene au plus bas des bas ». Le verbe radadnahu est suivi de asfala safilina (le plus bas des abaissements). Le champ lexical est celui de la descente et de la degradation : ramener + bas + les plus bas. La construction radda + complement de lieu (asfala) indique une direction descendante. Le pronom -hu renvoie a l'etre humain du verset 4. Le retournement est brutal — « thumma » (puis, ensuite) marque une rupture temporelle et logique avec la meilleure constitution.",
        axe2_voisins: "Le verset 4 dit : « nous avons cree l'etre humain dans la meilleure constitution ». Le verset 5 oppose cette creation parfaite a une descente au plus bas. Le contraste ahsani taqwimin (meilleure constitution) vs asfala safilina (plus bas des bas) est le pivot de la sourate. Le verset 6 introduit l'exception : ceux qui croient et agissent bien echappent a cette descente.",
        axe3_sourate: "La sourate 95 est structuree autour du contraste entre la creation elevee et la chute. Les serments (v1-3) preparent l'affirmation (v4), le retournement (v5) la contredit, et l'exception (v6) la resout. Le verbe « ramener » est le pivot qui fait basculer le discours du positif au negatif.",
        axe4_coherence: "Le Coran utilise radda dans de nombreux contextes de retour ou de rejet. Radda ilayhi signifie « le renvoyer a lui ». Ici, le retour est descendant — c'est un renvoi a la condition la plus basse. D'autres versets utilisent le meme verbe pour le retour a Dieu (par exemple, « c'est vers Lui que vous serez ramenes ») mais ici le retour est vers la bassesse.",
        axe5_frequence: "Le khalifa est cree dans la meilleure constitution pour accomplir sa mission. Le retour au plus bas represente l'echec de cette mission — quand le khalifa abandonne sa responsabilite, il est ramene a un etat inferieur a celui pour lequel il a ete cree. C'est un avertissement sur la consequence de la negligence."
      }
    }
  }, 1);

  // ---- SFL (سفل) — id=1570 — "le plus bas" ----
  // Forme: asfala safilina — superlatif + genitif pluriel
  await upsertVWA(verse_id, 'sfl', 'le plus bas', {
    sense_chosen: "le plus bas",
    concept_chosen: "Bassesse/Infériorité",
    concepts: {
      "Bassesse/Infériorité": {
        status: "retenu",
        senses: ["etre bas", "inferieur", "le plus bas"],
        proof_ctx: "Le sens retenu est « Bassesse/Inferiorite ». Le Lane's donne pour la racine s-f-l : etre bas, la partie basse, inferieur, le plus bas. Le mot asfala est le superlatif (af'ala) de safula — il signifie « le plus bas ». Le mot safilina est le participe actif pluriel au genitif — « ceux qui descendent » ou « des abaissements ». L'expression asfala safilina est un superlatif absolu : « le plus bas des bas » ou « le degre le plus bas parmi les etres abaisses ». Cette expression designe le point le plus extreme de la descente humaine — une degradation totale par rapport a la meilleure constitution du verset 4.",
        axe1_verset: "Le verset dit asfala safilina apres radadnahu — « nous l'avons ramene au plus bas des bas ». Le champ lexical est entierement oriente vers la descente : ramener (mouvement vers le bas) + le plus bas (superlatif) + des bas (pluriel d'intensification). Chaque mot renforce l'idee de degradation. L'expression est un superlatif parmi les superlatifs — le degre le plus extreme que la langue arabe puisse exprimer pour la bassesse.",
        axe2_voisins: "Le verset 4 utilise ahsani taqwimin (la meilleure constitution) — un superlatif positif. Le verset 5 repond par asfala safilina — un superlatif negatif. Les deux expressions se font miroir : la meilleure forme vs la pire degradation. Ce contraste est le coeur rhethorique de la sourate. Le verset 6 apporte l'exception qui empeche la generalisation.",
        axe3_sourate: "La sourate 95 joue sur les extremes : le plus haut (meilleure constitution) et le plus bas (degradation totale). Le figuier et l'olivier (dons de la creation) s'opposent a la chute. La bassesse representee par asfala safilina est le contraire exact de la noblesse de la creation humaine.",
        axe4_coherence: "Le Coran utilise des superlatifs pour marquer les extremes : akhsaru (le plus perdant, 18:103), ahsanu (le plus beau, 95:4). L'expression asfala safilina est unique dans le Coran — c'est un hapax qui souligne la gravite exceptionnelle de cette descente. La racine s-f-l n'apparait qu'ici dans le Coran sous cette forme superlative.",
        axe5_frequence: "La degradation au plus bas est la consequence de l'abandon de la mission du khalifa. Celui qui etait cree pour la meilleure constitution mais qui refuse sa responsabilite tombe au degre le plus bas — non pas physiquement mais dans sa dignite et sa capacite a accomplir sa mission de justice."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "ثُمَّ رَدَدْنَـٰهُ أَسْفَلَ سَـٰفِلِينَ",
    full_translation: "Puis Nous l'avons ramene au plus bas des bas.",
    segments: [
      { fr: "Puis", pos: "particule", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 0 },
      { fr: "nous l'avons ramene", pos: "verbe", phon: "radadnahu", arabic: "رَدَدْنَٰهُ", word_key: "rdd", is_particle: false, sense_retenu: "ramener", position: 1 },
      { fr: "au plus bas", pos: "nom", phon: "asfala", arabic: "أَسْفَلَ", word_key: "sfl", is_particle: false, sense_retenu: "le plus bas", position: 2 },
      { fr: "des degradations", pos: "nom", phon: "safilina", arabic: "سَٰفِلِينَ", word_key: "sfl", is_particle: false, sense_retenu: "abaissement", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient trois elements : la particule thumma (puis, ensuite — marque une rupture), le verbe radadnahu (nous l'avons ramene — forme I accompli, 1ere pers. pluriel de la racine r-d-d avec suffixe -hu), et l'expression asfala safilina (le plus bas des bas — superlatif de la racine s-f-l). Le Lane's (Edward Lane, 1863) donne pour r-d-d : rendre, renvoyer, ramener en arriere. Pour s-f-l : etre bas, inferieur, le degre le plus bas. Le verbe radda suivi d'un complement de direction indique un retour force vers un etat inferieur.

§JUSTIFICATION§
**ramener** — Le sens retenu est « ramener » plutot que « rejeter » ou « rendre ». Le verbe radda peut signifier rejeter (ecarter) ou ramener (reconduire). Le contexte ici est un mouvement descendant vers un etat (asfala safilina) — il s'agit donc d'un deplacement vers un lieu ou un etat, pas d'un rejet. L'alternative « rejeter » impliquerait un refus, ce qui ne correspond pas a la structure « ramener a un endroit ». L'alternative « renvoyer » est acceptable mais moins precise.

**le plus bas des bas** — Le sens retenu est litteralement « le plus bas des abaissements ». L'expression arabe est un superlatif absolu — asfala (superlatif de safula) + safilina (participe actif pluriel). Elle designe le degre le plus extreme de la degradation. L'alternative « le plus vil » est trop moralisatrice. L'alternative « le plus bas degre » est acceptable mais perd le pluriel d'intensification.

§CRITIQUE§
Hamidullah traduit : « Ensuite, Nous l'avons ramene au plus bas niveau ». Notre traduction est tres proche mais garde « des bas » (safilina) au lieu de « niveau » pour preserver l'intensification du pluriel. Aucune divergence majeure.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:5 — TERMINE');
  console.log('  rdd → "ramener" | sfl → "le plus bas"');
  console.log('  Traduction : "Puis nous l\'avons ramene au plus bas des bas"');
}

async function verse95_6() {
  console.log('\n=== VERSET 95:6 — إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ ===');
  const verse_id = 6104;

  // ---- AMN (أمن) — id=287 — "croire" ----
  // Forme: amanu — forme IV accompli, 3eme pers. pluriel
  await upsertVWA(verse_id, 'amn', 'croire', {
    sense_chosen: "croire",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
        proof_ctx: "Le sens retenu est « Foi/Adhesion ». Le Lane's donne pour la forme IV amana : croire, avoir la foi, accepter comme vrai, confirmer. La forme IV ajoute le sens de rendre sur (securite) mais dans le contexte coranique, amanu designe quasi systematiquement l'acte de croire, d'adherer a la verite. Le verbe est a la forme IV accompli, 3eme personne du pluriel : « ceux qui ont cru ». Le sens de « croire » est retenu car il s'agit de l'adhesion aux verites divines, pas de la securite physique.",
        axe1_verset: "Le verset dit « sauf ceux qui ont cru et accompli les bonnes oeuvres ». Le verbe amanu est suivi de wa-amilu as-salihati — l'action vertueuse. Les deux verbes forment une paire indissociable dans le discours coranique : la foi interieure (croire) et l'action exterieure (oeuvres bonnes). Le champ lexical est celui de l'engagement complet : adhesion intellectuelle et pratique concrete.",
        axe2_voisins: "Le verset 5 annonce la descente au plus bas. Le verset 6 pose l'exception : ceux qui croient et agissent echappent a cette chute. La foi est la premiere condition de l'exception — sans elle, les bonnes oeuvres seules ne suffisent pas. Le verset 7 demande « qu'est-ce qui te fait dementir le jugement ? » — le dementir est le contraire de croire.",
        axe3_sourate: "La sourate 95 oppose la creation elevee et la chute. La foi est le mecanisme de maintien — elle empeche la descente au plus bas. Le contraste structure toute la sourate : creation parfaite (v4) → chute (v5) → sauf les croyants (v6) → question rhetorique (v7) → Dieu juge (v8).",
        axe4_coherence: "La paire « ceux qui ont cru et accompli les bonnes oeuvres » (alladhina amanu wa-amilu as-salihati) apparait plus de 60 fois dans le Coran. C'est l'une des formules les plus frequentes — elle designe la condition necessaire et suffisante pour le salut. Ici elle sert d'exception a la chute universelle.",
        axe5_frequence: "La foi est la condition premiere du khalifa : pour accomplir sa mission de justice et de civilisation, il doit d'abord adherer a la verite qui fonde cette mission. Sans cette adhesion, sa constitution parfaite se degrade — il tombe au plus bas."
      }
    }
  }, 1);

  // ---- EML (عمل) — id=393 — "accomplir" ----
  await upsertVWA(verse_id, 'eml', 'accomplir', {
    sense_chosen: "accomplir",
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
        proof_ctx: "Le sens retenu est « Action/Oeuvre ». Le Lane's donne pour la racine ayn-m-l : travailler, agir, faire, oeuvre, acte. Le verbe amilu est a la forme I accompli, 3eme personne du pluriel : « ils ont accompli ». Dans le contexte coranique, amilu est presque toujours suivi de as-salihati (les bonnes oeuvres). Le sens est « accomplir des oeuvres » — une action concrete et deliberee, pas un simple travail mecanique.",
        axe1_verset: "Le verset dit amilu as-salihati — « ils ont accompli les bonnes oeuvres ». Le verbe amila est suivi de son complement direct as-salihati. Le champ lexical action + bonte forme la deuxieme condition de l'exception. Apres la foi (amanu), l'action vertueuse (amilu as-salihati) complete le portrait du croyant qui echappe a la chute.",
        axe2_voisins: "Le verset 5 parle de la chute, le verset 6 de ceux qui echappent a la chute par la foi ET l'action. Les deux conditions sont liees par la conjonction wa- (et). Le verset 7 rencherit avec la question sur le dementi du jugement — celui qui dement ne croit pas et donc n'agit pas.",
        axe3_sourate: "L'action vertueuse est le deuxieme pilier de l'exception. La sourate oppose ceux qui agissent bien (qui maintiennent leur constitution elevee) a ceux qui ne le font pas (qui tombent au plus bas). L'action est le critere tangible — la foi est invisible, l'oeuvre est visible.",
        axe4_coherence: "Le verbe amila as-salihati est l'une des expressions les plus frequentes du Coran. Elle definit le croyant non seulement par sa foi mais par ses actes. Le Coran insiste sur le fait que la foi sans les oeuvres est incomplete — les deux sont indissociables.",
        axe5_frequence: "L'action vertueuse est la mission concrete du khalifa. Croire ne suffit pas — il faut agir. Les oeuvres bonnes sont la manifestation tangible de la mission de justice et de civilisation. Le khalifa qui croit mais n'agit pas echoue dans sa mission."
      }
    }
  }, 2);

  // ---- SLH (صلح) — id=326 — "bonnes" ----
  await upsertVWA(verse_id, 'slh', 'bonnes', {
    sense_chosen: "bonnes",
    concept_chosen: "Bonté/Rectitude",
    concepts: {
      "Bonté/Rectitude": {
        status: "retenu",
        senses: ["etre bon", "rectitude", "reparer", "reconcilier", "oeuvre bonne", "vertueux", "reformer"],
        proof_ctx: "Le sens retenu est « Bonte/Rectitude ». Le Lane's donne pour la racine s-l-h : etre bon, convenable, juste, integre, reparer ce qui est casse, reconcilier, agir de maniere droite. Le mot as-salihati est le participe actif feminin pluriel defini : « les (choses) bonnes/droites ». Dans le contexte coranique, as-salihati designe les oeuvres bonnes, les actions vertueuses, les actes conformes a la rectitude. Le sens de « bonnes » est retenu comme traduction naturelle du participe.",
        axe1_verset: "Le mot as-salihati est le complement direct de amilu : « ils ont accompli les bonnes (oeuvres) ». Le champ lexical est la vertu et la rectitude. Le participe salih designe ce qui est bon, droit, conforme — il qualifie les oeuvres comme etant dans la voie de la rectitude.",
        axe2_voisins: "Le mot as-salihati complete la paire amanu wa-amilu as-salihati — la formule complete de l'exception. Les bonnes oeuvres sont le complement indispensable de la foi. Le verset 7 demande « qu'est-ce qui te fait dementir le jugement ? » — les oeuvres bonnes sont la preuve que l'on ne dement pas le jugement.",
        axe3_sourate: "Les oeuvres bonnes sont le moyen par lequel le croyant maintient sa constitution elevee. Sans les oeuvres bonnes, meme le croyant tombe. La sourate utilise cette qualite pour tracer la frontiere entre ceux qui restent dans la meilleure constitution et ceux qui descendent au plus bas.",
        axe4_coherence: "Le mot salih et ses derives apparaissent dans le Coran pour qualifier les prophetes (Salih), les oeuvres (as-salihati), et les personnes (as-salihina). La racine couvre un vaste champ de bonte, rectitude et reparation — elle est le contraire de fasada (corrompre).",
        axe5_frequence: "La rectitude est la qualite fondamentale des oeuvres du khalifa. Ses actions doivent etre bonnes, droites, conformes a la justice. Le mot salih implique aussi la reparation — le khalifa repare ce qui est casse dans la societe."
      }
    }
  }, 3);

  // ---- AJR (أجر) — id=609 — "retribution" ----
  await upsertVWA(verse_id, 'ajr', 'retribution', {
    sense_chosen: "retribution",
    concept_chosen: "Rétribution/Salaire",
    concepts: {
      "Rétribution/Salaire": {
        status: "retenu",
        senses: ["recompense", "salaire", "remuneration", "dot"],
        proof_ctx: "Le sens retenu est « Retribution/Salaire ». Le Lane's donne pour la racine hamza-j-r : recompense, salaire, remuneration, ce qui est donne en echange d'un travail. Le mot ajrun est un nom indefini au nominatif : « une retribution ». Dans le contexte coranique, ajr designe la recompense divine accordee aux croyants qui agissent bien. Le sens de « retribution » est retenu car il englobe a la fois la recompense et l'idee d'un retour proportionne a l'effort — c'est un salaire merite, pas un cadeau gratuit.",
        axe1_verset: "Le verset dit « pour eux une retribution sans interruption ». Le mot ajrun est au nominatif indefini — c'est le sujet de la phrase nominale fa-lahum ajrun. Le champ lexical est celui de la recompense : retribution + sans interruption. La retribution est qualifiee par ghayru mamnunin (non interrompue), ce qui souligne sa permanence et sa plenitude.",
        axe2_voisins: "Le verset 5 annonce la chute, le verset 6 pose l'exception avec sa recompense. Le contraste est entre la degradation (asfala safilina) et la retribution (ajr ghayru mamnun). Celui qui croit et agit recoit une retribution permanente au lieu de la chute. Le verset 7 demande pourquoi dementir le jugement alors que la recompense est assuree.",
        axe3_sourate: "La retribution est la conclusion de l'exception — elle donne un sens concret a la foi et aux oeuvres bonnes. La sourate ne se contente pas de dire que les croyants echappent a la chute — elle affirme qu'ils recoivent une retribution ininterrompue.",
        axe4_coherence: "Le mot ajr apparait plus de 100 fois dans le Coran, presque toujours pour la recompense divine. Il est souvent qualifie : ajr azim (grande retribution), ajr karim (noble retribution), ajr ghayru mamnun (retribution sans interruption). Chaque qualificatif souligne un aspect different de cette recompense.",
        axe5_frequence: "La retribution est la consequence de l'accomplissement de la mission du khalifa. Celui qui croit et agit bien recoit un salaire proportionne — ce n'est pas un favoritisme mais une justice. Le khalifa qui remplit sa mission est retribue, celui qui la neglige tombe."
      }
    }
  }, 4);

  // ---- GHYR (غير) — id=266 — "sans" ----
  await upsertVWA(verse_id, 'ghyr', 'sans', {
    sense_chosen: "sans",
    concept_chosen: "Autre/Exclusion",
    concepts: {
      "Autre/Exclusion": {
        status: "retenu",
        senses: ["sauf", "excepte", "different", "exclusion", "pas", "sans", "autre"],
        proof_ctx: "Le sens retenu est « Autre/Exclusion ». Le Lane's donne pour la racine gh-y-r dans le sens d'exclusion : autre que, different de, sans, excepte. Le mot ghayru est ici un adjectif au nominatif qualifiant ajrun — « une retribution autre que interrompue » = « une retribution sans interruption ». Le sens de « sans » est retenu car ghayru + nom au genitif fonctionne comme une negation qualificative : « non-interrompue » = « sans interruption ».",
        axe1_verset: "Le verset dit ajrun ghayru mamnunin — « une retribution sans interruption ». Le mot ghayru est intercale entre le nom (ajr) et son qualificatif negatif (mamnun). Il sert de negation : la retribution n'est PAS interrompue. Le champ lexical est celui de la permanence par negation de l'interruption.",
        axe2_voisins: "Le mot ghayru qualifie la retribution comme permanente — c'est un mot-outil qui modifie le sens de mamnunin. Le verset 5 parle de chute et le verset 6 de retribution sans fin — ghayru est le pivot qui rend la retribution permanente.",
        axe3_sourate: "La permanence de la retribution contraste avec la temporalite de la chute. Le mot ghayru assure que la recompense des croyants n'est pas limitee dans le temps — contrairement a la creation qui est soumise au changement (meilleure constitution → plus bas).",
        axe4_coherence: "Le Coran utilise ghayru dans de nombreux contextes : ghayri al-maghdubi (autre que ceux qui ont encouru la colere, 1:7), ghayru uli ad-darari (a l'exception de ceux qui souffrent, 4:95). C'est un mot-outil coranique frequent pour l'exclusion et la distinction.",
        axe5_frequence: "La permanence de la retribution souligne que la mission du khalifa n'est pas vaine — ses efforts sont reconnus de maniere definitive. Le « sans interruption » garantit la justice divine qui ne revient pas sur ses promesses."
      }
    }
  }, 5);

  // ---- MNN (منن) — id=561 — "interrompue" ----
  await upsertVWA(verse_id, 'mnn', 'interrompue', {
    sense_chosen: "interrompue",
    concept_chosen: "Faveur/Rappel",
    concepts: {
      "Faveur/Rappel": {
        status: "retenu",
        senses: ["accorder une faveur", "bienfait", "gratifier", "rappeler un bienfait"],
        proof_ctx: "Le sens retenu est « Faveur/Rappel ». Le Lane's donne pour la racine m-n-n : accorder une faveur, donner un bienfait, mais aussi rappeler un bienfait accorde (ce qui implique une interruption de la generosite ou un reproche). Le mot mamnunin est le participe passif au genitif de la forme I : « ce dont on rappelle le bienfait » → « interrompu, diminue ». Le sens de mamnun en contexte est « interrompu » ou « coupe » — car la personne qui rappelle ses bienfaits les annule moralement. Ghayru mamnunin = « sans interruption » = « sans que le bienfait soit rappele ou retire ».",
        axe1_verset: "Le verset dit ajrun ghayru mamnunin — « une retribution sans interruption ». Le mot mamnunin est le participe passif de manna — « ce qui est rappele/interrompu ». Le sens de « interrompu » vient de l'idee que rappeler un bienfait equivaut a l'annuler. La retribution divine n'est pas mamnun car Dieu n'a pas besoin de rappeler ses bienfaits — ils sont permanents.",
        axe2_voisins: "La retribution (ajr) est qualifiee de ghayru mamnunin — elle ne sera ni interrompue ni reprochee. Cela contraste avec la generosite humaine qui est souvent mamnun (assortie de rappels). Le verset precedent (v5) parlait de chute — le verset 6 garantit au contraire une recompense inalterable.",
        axe3_sourate: "La non-interruption de la retribution est l'assurance finale de la sourate. Apres les serments, l'affirmation de la creation parfaite, la chute et l'exception, le qualificatif mamnunin assure que la recompense est definitive et irrevocable.",
        axe4_coherence: "Le Coran utilise mamnun dans d'autres passages : « un salaire non interrompu » (84:25, 41:8). L'expression ajr ghayru mamnun est une formule coranique recurrente qui souligne la permanence de la recompense divine. Le mot mann dans d'autres contextes designe le rappel des bienfaits, un acte blame par le Coran.",
        axe5_frequence: "La permanence de la retribution illustre la justice parfaite du Createur. Le khalifa peut compter sur une recompense definitive pour ses efforts — cela motive l'action juste car les resultats ne seront pas annules ou reproches."
      }
    }
  }, 6);

  await sb.from('verse_analyses').update({
    translation_arab: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    full_translation: "Sauf ceux qui ont cru et accompli les bonnes oeuvres — pour eux une retribution sans interruption.",
    segments: [
      { fr: "Sauf", pos: "particule", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 0 },
      { fr: "ceux qui", pos: "pronom relatif", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 0 },
      { fr: "ont cru", pos: "verbe", phon: "amanu", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 1 },
      { fr: "et accompli", pos: "verbe", phon: "wa-amilu", arabic: "وَعَمِلُوا۟", word_key: "eml", is_particle: false, sense_retenu: "accomplir", position: 2 },
      { fr: "les bonnes oeuvres", pos: "nom", phon: "as-salihati", arabic: "ٱلصَّٰلِحَٰتِ", word_key: "slh", is_particle: false, sense_retenu: "bonnes", position: 3 },
      { fr: "pour eux", pos: "particule", phon: "fa-lahum", arabic: "فَلَهُمْ", is_particle: true, position: 0 },
      { fr: "une retribution", pos: "nom", phon: "ajrun", arabic: "أَجْرٌ", word_key: "ajr", is_particle: false, sense_retenu: "retribution", position: 4 },
      { fr: "sans", pos: "nom", phon: "ghayru", arabic: "غَيْرُ", word_key: "ghyr", is_particle: false, sense_retenu: "sans", position: 5 },
      { fr: "interruption", pos: "nom", phon: "mamnunin", arabic: "مَمْنُونٍ", word_key: "mnn", is_particle: false, sense_retenu: "interrompue", position: 6 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase d'exception : illa (sauf) introduit le groupe exempte de la chute. Alladhina amanu (ceux qui ont cru) — forme IV accompli de la racine hamza-m-n, 3eme personne du pluriel. Wa-amilu as-salihati (et ont accompli les bonnes oeuvres) — forme I accompli de la racine ayn-m-l + participe actif feminin pluriel defini de la racine s-l-h. Fa-lahum ajrun ghayru mamnunin (pour eux une retribution sans interruption) — fa- consecutif + prepositon la + pronom -hum, ajr (retribution au nominatif indefini), ghayru (sans) + mamnun (participe passif de m-n-n au genitif).

§JUSTIFICATION§
**croire** — Le sens retenu est « croire » (forme IV amana). Le Lane's donne : croire, avoir la foi, confirmer. L'alternative « etre en securite » (sens de base de la racine a-m-n) est ecartee car la forme IV en contexte coranique designe exclusivement la foi.

**accomplir** — Le sens retenu est « accomplir ». Le Lane's donne : travailler, agir, faire. L'alternative « travailler » est trop prosaique pour des oeuvres vertueuses. L'alternative « agir » est acceptable mais « accomplir » implique un effort delibere et complet.

**bonnes oeuvres** — Le sens retenu est « bonnes ». Le participe salih signifie bon, droit, vertueux. L'alternative « justes » est acceptable mais « bonnes » est plus courant en francais.

**retribution** — Le sens retenu est « retribution ». Le Lane's donne : recompense, salaire. L'alternative « recompense » est acceptable mais « retribution » souligne le caractere merite et proportionne.

**sans interruption** — Le sens retenu est « sans interruption ». Le mot mamnun (de la racine m-n-n) signifie « dont on rappelle le bienfait » → « interrompu ». Ghayru mamnunin = non interrompu. L'alternative « incessante » est acceptable mais « sans interruption » est plus explicite.

§CRITIQUE§
Hamidullah traduit : « sauf ceux qui croient et accomplissent les bonnes oeuvres : ceux-la auront une recompense jamais interrompue ». Notre traduction est tres proche. La seule difference est « retribution » au lieu de « recompense » — les deux sont corrects mais « retribution » souligne le caractere merite.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:6 — TERMINE');
  console.log('  amn → "croire" | eml → "accomplir" | slh → "bonnes" | ajr → "retribution" | ghyr → "sans" | mnn → "interrompue"');
  console.log('  Traduction : "Sauf ceux qui ont cru et accompli les bonnes oeuvres — pour eux une retribution sans interruption"');
}

async function verse95_7() {
  console.log('\n=== VERSET 95:7 — فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ ===');
  const verse_id = 6105;

  // ---- KDB (كذب) — id=474 — "dementir" ----
  // Forme: yukadhdhibuka — forme II inaccompli, 3eme pers. sing. + suffixe -ka (te)
  await upsertVWA(verse_id, 'kdb', 'dementir', {
    sense_chosen: "dementir",
    concept_chosen: "Mensonge/Fausseté",
    concepts: {
      "Mensonge/Fausseté": {
        status: "retenu",
        senses: ["mentir", "mensonge", "nier", "dementir"],
        proof_ctx: "Le sens retenu est « Mensonge/Faussete ». Le Lane's donne pour la racine k-dh-b : mentir, dire le faux, dementir, accuser de mensonge. La forme II kadhdhaba signifie : traiter de menteur, dementir, accuser de faussete. Le verbe yukadhdhibuka est a la forme II inaccompli, 3eme personne du singulier, avec le suffixe -ka (te) : « qu'est-ce qui te fait dementir ? ». Le sens de « dementir » est retenu car il s'agit de nier la verite du jugement (ad-din), pas de mentir activement. La nuance est entre le mensonge (actif) et le dementi (reactif — refus d'accepter la verite).",
        axe1_verset: "Le verset dit « alors qu'est-ce qui te fait dementir apres cela le jugement ? ». Le verbe yukadhdhibuka est au centre de la question rhetorique. Le champ lexical est celui du refus de la verite : dementir + jugement. La question implique que le dementi est irrationnel apres les preuves presentees (serments, creation, chute, exception).",
        axe2_voisins: "Le verset 6 vient de presenter la recompense des croyants. Le verset 7 se tourne vers celui qui refuse de croire : « qu'est-ce qui te fait dementir le jugement ? ». Le contraste est entre la foi (v6) et le dementi (v7). Le verset 8 repond par la question finale : Dieu est le plus juste des juges.",
        axe3_sourate: "La sourate 95 procede par etapes : serments → affirmation → chute → exception → question rhetorique. Le verset 7 est l'avant-derniere etape — il interpelle directement celui qui refuse le jugement. Le dementir est presente comme inexplicable apres toutes les preuves presentees dans les versets precedents.",
        axe4_coherence: "Le Coran utilise kadhdhaba (forme II) dans de nombreux passages pour le dementi des incredules : kadhdhaba bil-haqqi (il a dementi la verite), kadhdhaba bi-ayatina (il a dementi nos signes). C'est le verbe par excellence du refus de la revelation. La forme II intensifie le sens — ce n'est pas un simple doute mais un rejet actif.",
        axe5_frequence: "Le dementi du jugement est le contraire de la mission du khalifa. Le khalifa reconnaissant accepte le jugement divin et agit en consequence. Celui qui dement le jugement refuse sa propre responsabilite et tombe au plus bas (v5)."
      },
      "Accusation": {
        status: "probable",
        senses: ["traiter de menteur"],
        proof_ctx: "Le sens de « traiter de menteur » est la signification premiere de la forme II. Dans ce contexte, la question serait « qui te traite de menteur quant au jugement ? ». Ce sens est possible mais moins adapte car la question porte sur le jugement (ad-din), pas sur une personne accusee.",
        axe1_verset: "Le verset demande qui traite le Prophete de menteur concernant le jugement. Ce sens focalise sur l'accusation personnelle plutot que sur le refus du jugement. Le champ lexical serait alors accusation + jugement.",
        axe2_voisins: "Dans le contexte de la sourate, le sujet principal est le jugement divin et non l'opposition au Prophete. Le sens d'accusation est donc secondaire.",
        axe3_sourate: "La sourate parle de la creation et du jugement, pas de l'opposition au Prophete. Le sens d'accusation personnelle ne s'integre pas naturellement dans ce theme.",
        axe4_coherence: "Le Coran utilise kadhdhaba dans les deux sens — accuser de mensonge et dementir. Dans les sourates thematiquement proches (99, 100, 101), le sens de jugement domine.",
        axe5_frequence: "L'accusation du Prophete n'est pas le theme central de cette sourate — le jugement divin l'est."
      }
    }
  }, 1);

  // ---- DYN (دين) — id=258 — "jugement" ----
  await upsertVWA(verse_id, 'dyn', 'jugement', {
    sense_chosen: "jugement",
    concept_chosen: "Rétribution/Compte",
    concepts: {
      "Rétribution/Compte": {
        status: "retenu",
        senses: ["compensation", "rendre ce qui est du", "jugement", "retribution", "punition", "recompense"],
        proof_ctx: "Le sens retenu est « Retribution/Compte ». Le Lane's donne pour la racine d-y-n dans le sens de retribution : rendre ce qui est du, juger, retribuer, compenser. Le mot ad-dini est au genitif defini apres la preposition bi- : « concernant le jugement ». Le sens de « jugement » est retenu car le contexte de la sourate (creation, chute, exception, retribution) culmine dans la question du jugement final. L'alternative « religion » est ecartee car le verset ne parle pas de pratique religieuse mais de la realite du jugement divin.",
        axe1_verset: "Le verset dit bi-d-dini — « concernant le jugement ». Le mot ad-din est ici le complement du verbe yukadhdhibu : « dementir le jugement ». Le champ lexical est celui de la justice divine : dementir + jugement. Le jugement est presente comme une realite qu'on ne peut rationnellement nier apres les preuves des versets precedents.",
        axe2_voisins: "Le verset 6 parlait de retribution (ajr) — le verset 7 parle de jugement (din). Les deux mots sont dans le meme champ semantique : la retribution est le resultat du jugement. Le verset 8 confirme avec « le plus juste des juges » (ahkam al-hakimina) — le jugement est le theme culminant de la sourate.",
        axe3_sourate: "La sourate 95 aboutit au jugement : serments (v1-3) → creation parfaite (v4) → chute (v5) → exception (v6) → question sur le jugement (v7) → Dieu juge (v8). Le mot ad-din au verset 7 est le pivot qui oriente toute la sourate vers sa conclusion judiciaire.",
        axe4_coherence: "Le Coran utilise ad-din dans le sens de jugement dans plusieurs sourates : yawm ad-din (le jour du jugement, 1:4), malik yawm ad-din (maitre du jour du jugement). Le mot ad-din a plusieurs sens dans le Coran (religion, jugement, retribution) mais dans les contextes eschatologiques, le sens de jugement domine.",
        axe5_frequence: "Le jugement est le fondement de la mission du khalifa — il agit en sachant qu'il sera juge. Le dementi du jugement supprime la responsabilite et conduit a la chute au plus bas. Le khalifa qui reconnait le jugement maintient sa constitution elevee."
      },
      "Religion/Système": {
        status: "probable",
        senses: ["religion", "pratique", "systeme de croyances"],
        proof_ctx: "Le sens de « religion » est possible. La question serait « qu'est-ce qui te fait dementir la religion ? ». Ce sens est acceptable mais moins precis dans le contexte de la sourate qui parle de creation, de chute et de retribution — le theme est le jugement plutot que la religion comme systeme.",
        axe1_verset: "Le sens de religion deplace le focus de la justice divine vers le systeme de croyances. Dans ce verset, le contexte favorise le jugement car les versets precedents parlent de retribution.",
        axe2_voisins: "Le verset 6 parle de retribution et le verset 8 de juge — le champ semantique est celui du jugement, pas de la religion comme systeme.",
        axe3_sourate: "La sourate ne developpe pas le theme de la religion-pratique mais celui de la creation et du jugement.",
        axe4_coherence: "Le Coran utilise din dans les deux sens. Dans les contextes similaires (sourate 82:9, 107:1), le sens de jugement est prefere.",
        axe5_frequence: "Le sens de religion n'ajoute pas au theme du khalifa et de sa responsabilite dans cette sourate."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ",
    full_translation: "Alors qu'est-ce qui te fait dementir apres cela le jugement ?",
    segments: [
      { fr: "Alors qu'est-ce qui", pos: "particule", phon: "fa-ma", arabic: "فَمَا", is_particle: true, position: 0 },
      { fr: "te fait dementir", pos: "verbe", phon: "yukadhdhibuka", arabic: "يُكَذِّبُكَ", word_key: "kdb", is_particle: false, sense_retenu: "dementir", position: 1 },
      { fr: "apres cela", pos: "adverbe", phon: "ba'du", arabic: "بَعْدُ", is_particle: true, position: 0 },
      { fr: "le jugement", pos: "nom", phon: "bid-dini", arabic: "بِٱلدِّينِ", word_key: "dyn", is_particle: false, sense_retenu: "jugement", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique : fa-ma yukadhdhibuka ba'du bid-dini. La particule fa- (alors, donc) lie cette question aux versets precedents. Ma (qu'est-ce qui) est le pronom interrogatif sujet. Le verbe yukadhdhibuka est la forme II inaccompli de la racine k-dh-b (dementir) avec le suffixe -ka (te). Le Lane's (Edward Lane, 1863) donne pour la forme II : traiter de menteur, dementir, accuser de faussete. Ba'du (apres cela) est un adverbe de temps au datif tronque. Bid-dini (concernant le jugement) est la preposition bi- + le nom defini ad-din au genitif. Le Lane's donne pour d-y-n dans le sens de retribution : jugement, retribution, ce qui est du.

§JUSTIFICATION§
**dementir** — Le sens retenu est « dementir » (forme II de k-dh-b). Le Lane's donne deux sens principaux pour la forme II : traiter quelqu'un de menteur, et dementir/nier une verite. Le contexte favorise « dementir » car l'objet est ad-din (le jugement), pas une personne. L'alternative « accuser de mensonge » est ecartee car le complement est le jugement, pas le Prophete.

**jugement** — Le sens retenu est « jugement » pour ad-din. Le Lane's donne : religion, jugement, retribution, coutume. Le contexte de la sourate (creation → chute → retribution → question → juge) oriente vers le sens de jugement final. L'alternative « religion » est ecartee car la sourate ne traite pas de pratique religieuse mais de justice divine. L'alternative « retribution » est acceptable mais « jugement » est plus precis dans le contexte de la question rhetorique (il s'agit de l'acte de juger, pas du resultat du jugement).

§CRITIQUE§
Hamidullah traduit : « Apres cela, qu'est-ce qui te fait traiter la retribution de mensonge ? ». Notre traduction differe sur deux points : (1) « dementir » au lieu de « traiter de mensonge » — plus concis et plus naturel en francais, (2) « le jugement » au lieu de « la retribution » — le verset 8 parle de « juge » (hakimin), ce qui confirme le champ semantique du jugement.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:7 — TERMINE');
  console.log('  kdb → "dementir" | dyn → "jugement"');
  console.log('  Traduction : "Alors qu\'est-ce qui te fait dementir apres cela le jugement ?"');
}

async function verse95_8() {
  console.log('\n=== VERSET 95:8 — أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَـٰكِمِينَ ===');
  const verse_id = 6106;

  // ---- LYS (ليس) — id=761 — "n'est-ce pas" ----
  await upsertVWA(verse_id, 'lys', "n'est-ce pas", {
    sense_chosen: "n'est-ce pas",
    concept_chosen: "Négation/Non-existence",
    concepts: {
      "Négation/Non-existence": {
        status: "retenu",
        senses: ["ne pas etre", "il n'y a pas"],
        proof_ctx: "Le sens retenu est « Negation/Non-existence ». Le Lane's donne pour laysa : ne pas etre, ne pas exister. Le mot alaysa est la particule interrogative a- + laysa (ne pas etre) : « n'est-ce pas ? ». Laysa est un verbe defectif qui sert de negation nominale en arabe. Dans le contexte de la question rhetorique, alaysa attend une reponse affirmative : « n'est-ce pas que Dieu est le plus juste des juges ? » = « si, bien sur ». C'est une affirmation deguisee en question.",
        axe1_verset: "Le verset dit alaysa Allahu bi-ahkami al-hakimina — « Dieu n'est-Il pas le plus juste des juges ? ». Le mot alaysa ouvre la question rhetorique. Le champ lexical est celui de l'affirmation par la negation interrogative — une figure de style puissante en arabe qui renforce la certitude au lieu de la questionner.",
        axe2_voisins: "Le verset 7 posait la question « qu'est-ce qui te fait dementir le jugement ? ». Le verset 8 repond par une autre question : « Dieu n'est-Il pas le plus juste des juges ? ». La reponse attendue est « si » — ce qui invalide le dementi du verset 7. La structure question-question cree un raisonnement imparable.",
        axe3_sourate: "La sourate se conclut par cette question rhetorique qui resume tout le propos : la creation est parfaite (v4), la chute est reelle (v5), mais le jugement est juste (v8). La negation interrogative alaysa affirme la justice divine comme conclusion logique des preuves accumulees.",
        axe4_coherence: "Le Coran utilise alaysa dans d'autres questions rhetoriques affirmatives : alaysa fi jahannama mathwan (n'y a-t-il pas dans la Gehenne un sejour ?, 39:32). C'est une formule coranique d'affirmation solennelle.",
        axe5_frequence: "La question rhetorique implique que la justice divine est evidente — le khalifa qui reconnait cette evidence maintient sa dignite. Celui qui la nie dement le jugement et tombe au plus bas."
      }
    }
  }, 1);

  // ---- ALH (إله) — id=250 — "Dieu" ----
  await upsertVWA(verse_id, 'alh', 'Dieu', {
    sense_chosen: "Dieu",
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": {
        status: "retenu",
        senses: ["divinite", "Dieu", "adorer"],
        proof_ctx: "Le sens retenu est « Divinite ». Le Lane's donne pour la racine hamza-l-h : divinite, etre adore, celui qui merite l'adoration. Le mot Allah est le nom propre de Dieu en arabe — il est compose de al- (le) + ilah (divinite). Dans le contexte du verset, Allah est le sujet de la phrase : « Dieu n'est-Il pas le plus juste des juges ? ». Le sens de « Dieu » est retenu comme traduction standard du nom propre Allah.",
        axe1_verset: "Le verset dit Allahu bi-ahkami al-hakimina — « Dieu [est] le plus juste des juges ». Le nom Allah est le sujet de la question rhetorique. Le champ lexical est celui de la souverainete judiciaire : Dieu + le plus juste + des juges. Le nom de Dieu est place entre la question (alaysa) et la reponse (le plus juste des juges) — il est au centre de l'affirmation.",
        axe2_voisins: "Le verset 7 parlait du jugement (ad-din), le verset 8 identifie le juge : Dieu. La progression est logique : d'abord le jugement, puis celui qui juge. Le nom de Dieu dans le dernier verset donne l'autorite finale a l'argument de la sourate.",
        axe3_sourate: "Le nom de Dieu apparait une seule fois dans cette sourate — au dernier verset. Cette position finale donne au nom divin le poids maximal : tout le raisonnement (serments, creation, chute, exception, jugement) aboutit a Dieu comme juge supreme.",
        axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Il est le nom le plus frequent et le plus central. Dans les sourates courtes, son apparition est souvent unique et strategiquement placee — ici au sommet de l'argumentation.",
        axe5_frequence: "Dieu est le juge ultime du khalifa — toute la mission du khalifa s'accomplit sous le regard divin. La mention de Dieu en conclusion de la sourate rappelle que la justice divine est le cadre dans lequel le khalifa exerce sa responsabilite."
      }
    }
  }, 2);

  // ---- HKM (حكم) — id=447 — "le plus juste des juges" ----
  // Forme: ahkami (superlatif) + al-hakimina (participe actif pluriel defini au genitif)
  await upsertVWA(verse_id, 'hkm', 'le plus juste des juges', {
    sense_chosen: "le plus juste des juges",
    concept_chosen: "Jugement/Décision",
    concepts: {
      "Jugement/Décision": {
        status: "retenu",
        senses: ["juger", "decider", "sentence"],
        proof_ctx: "Le sens retenu est « Jugement/Decision ». Le Lane's donne pour la racine h-k-m : juger, decider, prononcer une sentence, gouverner, etre sage. Le mot ahkami est le superlatif (af'ali) de hakama : « le plus juste (dans le jugement) ». Le mot al-hakimina est le participe actif pluriel defini au genitif : « les juges » ou « ceux qui jugent ». L'expression ahkami al-hakimina signifie « le plus juste parmi ceux qui jugent » — c'est un superlatif absolu qui place Dieu au-dessus de tout juge. La racine h-k-m porte aussi le sens de sagesse (hikma) — le juge parfait est aussi le sage parfait.",
        axe1_verset: "Le verset dit bi-ahkami al-hakimina — « le plus juste des juges ». Le mot ahkami est un superlatif construit sur le schema af'al. Le mot al-hakimina est le pluriel de hakim (juge/sage). L'expression est un superlatif dans un superlatif : le plus juste parmi les plus justes. Le champ lexical est entierement judiciaire : juge + le plus juste + les juges. Toute la sourate culmine dans cette affirmation de la justice divine supreme.",
        axe2_voisins: "Le verset 7 parlait de dementir le jugement (din). Le verset 8 identifie le juge supreme (ahkam al-hakimina). La progression est : le jugement existe (v7) et le juge est Dieu, le plus juste de tous (v8). Les deux versets forment un raisonnement complet : si le juge est parfaitement juste, le jugement est inevitable et legitime.",
        axe3_sourate: "La sourate aboutit a cette conclusion : Dieu est le juge supreme et le plus juste. Tous les elements precedents (serments, creation, chute, exception) sont des arguments qui preparent cette conclusion. Le mot ahkam al-hakimina est le sommet rhetorique de la sourate — c'est le mot final qui porte tout le poids de l'argumentation.",
        axe4_coherence: "Le Coran utilise hakam et hakim dans de nombreux contextes : al-hakam (le Juge, attribut divin), al-hakim (le Sage, attribut divin). L'expression ahkam al-hakimina est un superlatif rare et solennel — elle n'apparait que dans ce verset et dans 11:45. La racine h-k-m est l'une des plus riches du Coran, couvrant le jugement, la sagesse et le pouvoir.",
        axe5_frequence: "Le jugement divin est le fondement de la mission du khalifa. Si Dieu est le plus juste des juges, alors le khalifa doit aspirer a la justice dans ses propres actions. Le superlatif « le plus juste » etablit le modele supreme de justice que le khalifa doit imiter dans sa sphere d'action."
      },
      "Sagesse": {
        status: "probable",
        senses: ["etre sage", "sagesse"],
        proof_ctx: "Le sens de sagesse est present dans la racine h-k-m. Le mot hakim peut signifier « sage » autant que « juge ». L'expression ahkam al-hakimina pourrait se traduire « le plus sage des sages ». Ce sens est probable mais secondaire car le contexte (jugement, din, dementir) oriente vers la justice judiciaire plutot que vers la sagesse contemplative.",
        axe1_verset: "Le sens « le plus sage des sages » est grammaticalement possible. Cependant, le champ lexical du verset (din = jugement, yukadhdhibu = dementir) oriente vers le sens judiciaire.",
        axe2_voisins: "Le verset 7 parle de din (jugement/retribution) — le lien avec le jugement est plus direct qu'avec la sagesse.",
        axe3_sourate: "La sourate traite de la creation, de la chute et du jugement — le theme judiciaire domine le theme de la sagesse.",
        axe4_coherence: "Le Coran utilise hakim (sage) comme attribut divin independant (ex: al-aziz al-hakim). Ici, le contexte favorise hakim comme juge.",
        axe5_frequence: "La sagesse divine est incluse dans le jugement parfait — juger avec une justice parfaite implique la sagesse."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَـٰكِمِينَ",
    full_translation: "Dieu n'est-Il pas le plus juste des juges ?",
    segments: [
      { fr: "N'est-ce pas", pos: "verbe", phon: "alaysa", arabic: "أَلَيْسَ", word_key: "lys", is_particle: false, sense_retenu: "n'est-ce pas", position: 1 },
      { fr: "Dieu", pos: "nom propre", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "le plus juste", pos: "nom", phon: "bi-ahkami", arabic: "بِأَحْكَمِ", word_key: "hkm", is_particle: false, sense_retenu: "le plus juste", position: 3 },
      { fr: "des juges", pos: "nom", phon: "al-hakimina", arabic: "ٱلْحَٰكِمِينَ", word_key: "hkm", is_particle: false, sense_retenu: "juge", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique affirmative : alaysa Allahu bi-ahkami al-hakimina. La particule a- (interrogatif) + laysa (ne pas etre) forme la question « n'est-ce pas ? ». Allah est le sujet au nominatif. La preposition bi- introduit le predicat : ahkami al-hakimina (le plus juste des juges). Le Lane's (Edward Lane, 1863) donne pour la racine h-k-m : juger, decider, gouverner, etre sage. Le mot ahkami est le superlatif (schema af'al) de hakama : « le plus juste dans le jugement ». Le mot al-hakimina est le participe actif pluriel defini au genitif : « les juges ».

§JUSTIFICATION§
**n'est-ce pas** — Le sens retenu est la question rhetorique affirmative alaysa. Le Lane's donne pour laysa : ne pas etre. La combinaison a- + laysa forme une question qui attend « si » comme reponse. C'est une affirmation solennelle deguisee en question. Aucune alternative.

**Dieu** — Le nom propre Allah est traduit par « Dieu ». Aucune alternative.

**le plus juste des juges** — Le sens retenu est « le plus juste des juges » pour ahkami al-hakimina. Le Lane's donne hakama : juger, decider. Ahkam est le superlatif : le plus juste dans le jugement. Al-hakimina est le pluriel de hakim : juge, celui qui juge. L'alternative « le plus sage des sages » est ecartee car le contexte (din = jugement au v7) oriente vers le sens judiciaire. L'alternative « le plus ferme des gouvernants » est ecartee car le theme de la sourate est le jugement, pas le gouvernement.

§CRITIQUE§
Hamidullah traduit : « Allah n'est-Il pas le plus sage des Juges ? ». Notre traduction differe sur un point : « le plus juste » au lieu de « le plus sage ». Le mot ahkam peut signifier les deux (le plus juste dans le jugement ou le plus sage). Nous privilegions « juste » car le contexte de la sourate (din = jugement, retribution, creation/chute) est judiciaire. Hamidullah melange « sage » (hikma) et « juge » (hakama) — notre traduction reste dans le champ semantique du jugement.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:8 — TERMINE');
  console.log('  lys → "n\'est-ce pas" | alh → "Dieu" | hkm → "le plus juste des juges"');
  console.log('  Traduction : "Dieu n\'est-Il pas le plus juste des juges ?"');
}

async function main() {
  await verse95_5();
  await verse95_6();
  await verse95_7();
  await verse95_8();

  console.log('\n=== PARTIE 2 TERMINEE (versets 5-8) ===');
}

main().catch(console.error);
