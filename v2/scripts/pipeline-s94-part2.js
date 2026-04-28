// Pipeline Sourate 94 (Ash-Sharh / L'Ouverture) — Partie 2: Versets 5-8
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

async function verse94_5() {
  console.log('\n=== VERSET 94:5 — فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ===');
  const verse_id = 6095;

  // ---- ESR (ع س ر) — id=969 — "difficulte" ----
  // Forme: al-'usri — nom defini (al-) au genitif apres ma'a (avec)
  await upsertVWA(verse_id, 'esr', 'difficulte', {
    sense_chosen: "difficulte",
    concept_chosen: "Difficulté/Gêne",
    concepts: {
      "Difficulté/Gêne": {
        status: "retenu",
        senses: ["etre difficile", "difficulte", "gene financiere", "mettre dans la gene"],
        proof_ctx: "Le sens retenu est « Difficulte/Gene ». Le Lane's (Edward Lane, 1863) donne pour la racine 'ayn-s-r : etre difficile, difficulte, gene, contrainte, etat etroit et penible. Le mot al-'usri est un nom defini par al- au genitif apres la preposition ma'a (avec) : « avec la difficulte ». Le Lane's donne 'usr comme l'etat de gene, de contrainte, d'etroitesse — le contraire de yusr (facilite). Le nom defini al-'usr designe LA difficulte specifique, identifiee, connue — ce n'est pas « une difficulte » indefinie mais LA difficulte que la personne traverse. La racine ne porte qu'un seul regroupement semantique dans la base.",
        axe1_verset: "Le verset dit fa-inna ma'a al-'usri yusran — « certes avec la difficulte [il y a] une facilite ». Le mot al-'usr est defini par al- : c'est LA difficulte connue, pas une difficulte quelconque. Le champ lexical oppose la difficulte et la facilite : 'usr (etat etroit, penible) vs yusr (etat large, aise). La preposition ma'a (avec) indique la simultaneite — la facilite accompagne la difficulte, elle ne la remplace pas. Les deux coexistent.",
        axe2_voisins: "Le verset 4 venait de rappeler le dernier bienfait (elevation de la mention). Le verset 5 passe a une affirmation generale : avec la difficulte vient la facilite. C'est la transition entre le rappel des bienfaits passes (v1-4) et l'encouragement pour l'avenir (v5-8). Le verset 6 repete exactement la meme affirmation pour l'amplifier.",
        axe3_sourate: "La sourate 94 est structuree en deux moities : bienfaits passes (v1-4) et encouragement futur (v5-8). La difficulte est le theme central de l'encouragement — en rappelant que la facilite accompagne toujours la difficulte, le texte rassure et motive.",
        axe4_coherence: "Le Coran oppose 'usr et yusr dans d'autres passages : « Dieu veut pour vous la facilite et ne veut pas pour vous la difficulte » (2:185). Le Coran presente systematiquement la facilite comme l'intention divine et la difficulte comme une epreuve temporaire. Le couple 'usr/yusr est un des contrastes fondamentaux du texte coranique.",
        axe5_frequence: "La difficulte est inhérente a la mission du khalifa — agir avec justice dans un monde imparfait est difficile. Le verset affirme que cette difficulte n'est jamais seule : elle est toujours accompagnee d'une facilite. C'est un principe de la realite, pas une promesse conditionnelle."
      }
    }
  }, 1);

  // ---- YSR (ي س ر) — id=968 — "facilite" ----
  // Forme: yusran — nom indefini a l'accusatif (circumstantiel ou predicat)
  await upsertVWA(verse_id, 'ysr', 'facilite', {
    sense_chosen: "facilite",
    concept_chosen: "Facilité/Aisance",
    concepts: {
      "Facilité/Aisance": {
        status: "retenu",
        senses: ["etre facile", "faciliter", "aisance", "richesse"],
        proof_ctx: "Le sens retenu est « Facilite/Aisance ». Le Lane's donne pour la racine y-s-r : etre facile, aisance, largeur, commodite, richesse, abondance. Le mot yusran est un nom indefini a l'accusatif : « une facilite ». Le contraste avec al-'usri (LA difficulte, definie) est significatif : la difficulte est definie (connue, specifique) mais la facilite est indefinie (ouverte, inconnue, potentiellement multiple). Le Lane's donne yusr comme le contraire de 'usr — l'etat de largeur, d'aisance, de commodite. Le concept « Sens isole/Cote » (cote gauche) est nul car le contexte est l'opposition difficulte/facilite.",
        axe1_verset: "Le verset dit ma'a al-'usri yusran — « avec la difficulte, une facilite ». Le mot yusran est indefini a l'accusatif — une facilite parmi d'autres possibles. Le champ lexical oppose etroitesse (difficulte) et largeur (facilite). La preposition ma'a (avec) indique que la facilite est presente en meme temps que la difficulte — elle ne vient pas apres mais pendant. C'est une coexistence, pas une succession.",
        axe2_voisins: "Le verset 6 repete la meme affirmation : inna ma'a al-'usri yusran. La repetition identique renforce le message. Les versets 7-8 enchaineront avec les injonctions : « quand tu te liberes, peine » et « vers ton seigneur, tourne-toi ». La facilite est donc le fondement de l'action demandee ensuite.",
        axe3_sourate: "La facilite est la reponse de la sourate a la difficulte. Apres avoir rappele les bienfaits passes (v1-4), le texte affirme un principe universel : la facilite accompagne toujours la difficulte. Ce principe est la base de l'encouragement.",
        axe4_coherence: "Le Coran utilise yusr dans d'autres passages : « Dieu veut pour vous la facilite » (2:185), « celui qui donne, est conscient et confirme la meilleure [voie], nous le faciliterons vers la facilite » (92:5-7). La facilite est presentee comme la voie naturelle voulue par Dieu. Le Coran oppose systematiquement 'usr et yusr comme deux etats qui se succedent ou coexistent.",
        axe5_frequence: "La facilite accompagne le khalifa dans sa mission — les outils et les ouvertures sont la meme ou les difficultes existent. Le khalifa qui reconnait cette coexistence agit avec confiance au lieu de desesperer devant les obstacles."
      },
      "Sens isolé/Côté": {
        status: "nul",
        senses: ["cote gauche"],
        proof_ctx: "Le sens de cote gauche est hors sujet. Le verset oppose difficulte et facilite, il ne parle pas de direction."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    full_translation: "A côté de la difficulté est, certes, une facilité !",
    segments: [
      { fr: "Certes", pos: "particule", phon: "fa-inna", arabic: "فَإِنَّ", is_particle: true, position: 0 },
      { fr: "avec", pos: "particule", phon: "ma'a", arabic: "مَعَ", is_particle: true, position: 0 },
      { fr: "la difficulte", pos: "nom", phon: "al-'usri", arabic: "ٱلْعُسْرِ", word_key: "esr", is_particle: false, sense_retenu: "difficulte", position: 1 },
      { fr: "une facilite", pos: "nom", phon: "yusran", arabic: "يُسْرًا", word_key: "ysr", is_particle: false, sense_retenu: "aisance", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par fa- (alors, donc) qui lie l'affirmation aux bienfaits precedents + inna (particule d'insistance : certes, en verite). La particule inna met l'accent sur la certitude de ce qui suit. Ma'a est une preposition qui signifie « avec, en compagnie de, en meme temps que ». Le nom al-'usri est defini par al- (la difficulte connue, specifique) au genitif apres ma'a. Le Lane's (Edward Lane, 1863) donne pour 'usr : difficulte, gene, contrainte, etat etroit. Le nom yusran est indefini a l'accusatif (une facilite, sans article) — il est le predicat de la phrase nominale. Le Lane's donne pour yusr : facilite, aisance, largeur, commodite. La construction grammaticale est remarquable : al-'usr est DEFINI (la difficulte) tandis que yusr est INDEFINI (une facilite). En grammaire arabe, le defini designe quelque chose de connu et unique, l'indefini designe quelque chose d'ouvert et potentiellement multiple. Cela signifie que LA difficulte (une seule, connue) est accompagnee d'UNE facilite (une parmi d'autres possibles).

§JUSTIFICATION§
**difficulte** — Le sens retenu est « Difficulte/Gene ». Le mot « difficulte » est choisi car c'est le sens premier et le plus naturel de 'usr. L'alternative « gene » est trop faible — la gene est un inconfort, la difficulte est un obstacle reel. L'alternative « epreuve » est ecartee car elle ajoute une dimension de test/examen absente du mot arabe.

**facilite** — Le sens retenu est « Facilite/Aisance ». Le mot « facilite » est choisi car c'est l'oppose exact de difficulte en francais courant. L'alternative « aisance » est ecartee car elle evoque davantage la richesse materielle. L'alternative « commodite » est trop faible.

§CRITIQUE§
Hamidullah traduit : « A cote de la difficulte est, certes, une facilite ». Notre traduction est tres proche : « Certes avec la difficulte, une facilite ». La difference est « avec » au lieu de « a cote de » — le mot arabe ma'a signifie « avec » (accompagnement simultane), pas « a cote de » (proximite spatiale). « Avec » rend mieux l'idee de coexistence temporelle : la facilite est la EN MEME TEMPS que la difficulte, pas simplement a cote d'elle.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(969, 'difficulte', 'عُسْر', "'usr", [
    "On traverse une periode de difficulte financiere.",
    "La difficulte du chemin n'a pas arrete les randonneurs.",
    "Il affronte cette difficulte avec courage."
  ]);
  await insertDaily(968, 'facilite', 'يُسْر', "yusr", [
    "Avec cette application, tout est d'une grande facilite.",
    "Il a reussi l'examen avec facilite.",
    "La facilite de paiement m'a convaincu."
  ]);

  console.log('VERSET 94:5 — TERMINE');
  console.log('  esr (ع س ر) → sens "Difficulte/Gene" → mot francais "difficulte"');
  console.log('  ysr (ي س ر) → sens "Facilite/Aisance" → mot francais "facilite"');
  console.log('  Traduction : "Certes avec la difficulte, une facilite"');
}

async function verse94_6() {
  console.log('\n=== VERSET 94:6 — إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ===');
  const verse_id = 6096;

  // Memes racines que v5 mais analyse PAR VERSET (contexte different : repetition)

  // ---- ESR v6 ----
  await upsertVWA(verse_id, 'esr', 'difficulte', {
    sense_chosen: "difficulte",
    concept_chosen: "Difficulté/Gêne",
    concepts: {
      "Difficulté/Gêne": {
        status: "retenu",
        senses: ["etre difficile", "difficulte", "gene financiere", "mettre dans la gene"],
        proof_ctx: "Le sens retenu est « Difficulte/Gene ». Meme racine que le verset 5, meme forme (al-'usri, defini au genitif). Le Lane's donne 'usr comme l'etat de gene et de contrainte. La repetition de la meme affirmation dans deux versets consecutifs est un procede rhetorique arabe d'amplification — elle renforce la certitude du message. Le mot al-'usr est de nouveau defini par al- : c'est toujours LA meme difficulte, unique et specifique.",
        axe1_verset: "Le verset dit inna ma'a al-'usri yusran — « certes avec la difficulte, une facilite ». C'est la repetition exacte du verset 5 sans le fa- initial. Le champ lexical est identique : difficulte (defini) + facilite (indefini). La repetition souligne que ce n'est pas un espoir mais une certitude.",
        axe2_voisins: "Le verset 5 dit fa-inna (alors certes), le verset 6 dit inna (certes) — la seule difference est le fa- qui liait le verset 5 aux bienfaits precedents. Le verset 6, sans fa-, est une affirmation autonome : la coexistence de la facilite avec la difficulte est un principe en soi, pas juste une consequence des bienfaits. Le verset 7 enchaine avec l'injonction d'agir.",
        axe3_sourate: "La repetition est le centre de la sourate — les versets 5-6 forment le pivot entre les bienfaits passes (v1-4) et les injonctions futures (v7-8). Repeter deux fois renforce la certitude et donne le courage necessaire pour obeir aux injonctions qui suivent.",
        axe4_coherence: "La repetition d'un verset pour l'amplification est un procede coranique connu : la sourate 55 repete « lequel des bienfaits de votre Seigneur nierez-vous ? » 31 fois. Ici la repetition est double — deux fois suffisent pour etablir une verite comme un principe universel plutot qu'un fait ponctuel.",
        axe5_frequence: "La certitude repetee donne au khalifa la force de perseverer. La difficulte n'est pas niee mais elle est accompagnee — cette realite repetee deux fois est la base de la resilience dans la mission de justice."
      }
    }
  }, 1);

  // ---- YSR v6 ----
  await upsertVWA(verse_id, 'ysr', 'facilite', {
    sense_chosen: "facilite",
    concept_chosen: "Facilité/Aisance",
    concepts: {
      "Facilité/Aisance": {
        status: "retenu",
        senses: ["etre facile", "faciliter", "aisance", "richesse"],
        proof_ctx: "Le sens retenu est « Facilite/Aisance ». Meme racine que le verset 5, meme forme indefinie (yusran). Le Lane's donne yusr comme l'etat d'aisance et de facilite. Le fait que yusr soit de nouveau indefini dans le verset 6 est significatif : selon la grammaire arabe, quand un nom indefini est repete, il designe un nouvel individu. Al-'usr (defini) designe la meme difficulte dans les deux versets, mais yusran (indefini) designe une facilite differente a chaque fois. Les grammairiens arabes en deduisent : une seule difficulte, mais deux facilites.",
        axe1_verset: "Le verset repete yusran (indefini) apres al-'usri (defini). Le champ lexical est le meme que v5 mais la repetition ajoute un nouveau yusr. La facilite est donc double — chaque mention d'une facilite indefinie en ajoute une nouvelle. La difficulte, definie, reste unique.",
        axe2_voisins: "Le verset 5 introduisait la premiere facilite, le verset 6 en ajoute une deuxieme. Le verset 7 demande ensuite de se consacrer a l'effort — cette injonction est fondee sur la double certitude que la facilite accompagne la difficulte.",
        axe3_sourate: "La double facilite est le message central de la sourate — non seulement la facilite accompagne la difficulte, mais elle est double par rapport a la difficulte qui est unique. C'est un message de confiance maximale.",
        axe4_coherence: "Le principe grammatical « le defini repete est le meme, l'indefini repete est different » est un fondement de la grammaire arabe. Ici, al-'usr est le meme dans les deux versets, mais yusran est different — d'ou la tradition prophetique : « une difficulte ne vaincra jamais deux facilites ».",
        axe5_frequence: "Le khalifa recoit plus de facilites que de difficultes — la proportion est de deux contre une. Cette assurance n'est pas de la naivete mais un principe de la realite : les ouvertures sont toujours plus nombreuses que les blocages pour celui qui agit."
      },
      "Sens isolé/Côté": {
        status: "nul",
        senses: ["cote gauche"],
        proof_ctx: "Hors sujet — meme raison que v5."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    full_translation: "A côté de la difficulté est, certes, une facilité !",
    segments: [
      { fr: "Certes", pos: "particule", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 0 },
      { fr: "avec", pos: "particule", phon: "ma'a", arabic: "مَعَ", is_particle: true, position: 0 },
      { fr: "la difficulte", pos: "nom", phon: "al-'usri", arabic: "ٱلْعُسْرِ", word_key: "esr", is_particle: false, sense_retenu: "difficulte", position: 1 },
      { fr: "une facilite", pos: "nom", phon: "yusran", arabic: "يُسْرًا", word_key: "ysr", is_particle: false, sense_retenu: "aisance", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est la repetition du verset 5 sans la particule fa- (alors) initiale. La particule inna (certes) insiste sur la verite de l'affirmation. Ma'a (avec) indique l'accompagnement simultane. Le mot al-'usri est de nouveau defini par al- (la difficulte, la meme que v5). Le mot yusran est de nouveau indefini (une facilite). En grammaire arabe, quand un nom defini (al-'usr) est repete dans deux phrases, il designe le meme referent — c'est LA meme difficulte dans les deux versets. Quand un nom indefini (yusr) est repete, il designe un referent different a chaque fois — c'est une NOUVELLE facilite dans le verset 6. Cette regle grammaticale implique : une seule difficulte accompagnee de deux facilites.

§JUSTIFICATION§
**difficulte** — Meme sens que le verset 5. Le mot « difficulte » est le plus naturel en francais pour 'usr.

**facilite** — Meme sens que le verset 5. Le mot « facilite » est l'oppose exact de « difficulte ».

§CRITIQUE§
Hamidullah traduit identiquement les versets 5 et 6 : « A cote de la difficulte est, certes, une facilite ». Notre traduction aussi. La difference notable est dans l'analyse grammaticale : les traductions courantes ne signalent pas que la repetition implique deux facilites contre une seule difficulte (regle du defini/indefini). Cette nuance grammaticale est rarement commentee dans les traductions mais elle change le message du verset : il ne dit pas « la facilite accompagne la difficulte » une fois de plus, il affirme qu'une deuxieme facilite s'ajoute a la premiere.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 94:6 — TERMINE');
  console.log('  esr (ع س ر) → "difficulte" | ysr (ي س ر) → "facilite"');
  console.log('  Traduction : "Certes avec la difficulte, une facilite"');
}

async function verse94_7() {
  console.log('\n=== VERSET 94:7 — فَإِذَا فَرَغْتَ فَٱنصَبْ ===');
  const verse_id = 6097;

  // ---- FRG (ف ر غ) — id=2150 — "se liberer" ----
  // Forme: faraghta — verbe forme I accompli, 2eme pers. singulier (tu)
  await upsertVWA(verse_id, 'frg', 'se liberer', {
    sense_chosen: "se liberer",
    concept_chosen: "Vacuité/Libération",
    concepts: {
      "Vacuité/Libération": {
        status: "retenu",
        senses: ["etre vide", "se liberer d'une occupation", "se consacrer a", "etre disponible"],
        proof_ctx: "Le sens retenu est « Vacuite/Liberation ». Le Lane's (Edward Lane, 1863) donne pour la racine f-r-gh : etre vide, se vider, se liberer d'une occupation, devenir disponible, se consacrer a. Le verbe faraghta est la forme I accompli, deuxieme personne du singulier (tu) : « quand tu t'es libere » ou « quand tu as fini ». Le sens premier est la vacuite — l'etat d'etre vide, degage, libre de toute occupation. Le Lane's donne faragha min al-'amali : il a fini le travail, il s'en est degage. Le concept « Versement/Ecoulement » (verser, repandre) est nul car le contexte parle de finir une tache, pas de verser un liquide. Le concept « Sens isole/Patience » (patience a bout) est nul car le verset ne parle pas de patience mais de liberation d'une occupation.",
        axe1_verset: "Le verset dit fa-idha faraghta fa-nsab — « alors quand tu te liberes, peine ». Le verbe faraghta est dans une structure temporelle : idha (quand) + accompli = action achevee qui sert de condition. Le champ lexical est celui de la transition : se liberer (finir une tache) + peiner (commencer un effort). La liberation d'une occupation est le prealable a l'engagement dans une nouvelle tache.",
        axe2_voisins: "Les versets 5-6 affirmaient que la facilite accompagne la difficulte. Le verset 7 passe a l'action : « quand tu te liberes, peine ». L'encouragement (v5-6) fonde l'injonction (v7) — puisque la facilite est garantie, il n'y a pas de raison de ne pas s'engager dans l'effort. Le verset 8 ajoute la direction de cet effort : « vers ton seigneur, tourne-toi ».",
        axe3_sourate: "Le verset 7 est la premiere des deux injonctions finales. Apres les bienfaits (v1-4) et l'encouragement (v5-6), le texte demande l'action. Se liberer d'une occupation pour se consacrer a un effort est le message pratique de la sourate.",
        axe4_coherence: "Le Coran utilise faragha dans d'autres contextes : « nous allons nous consacrer a vous » (55:31) — ici aussi le sens est de se rendre disponible pour se tourner vers quelque chose. Le verbe exprime la transition entre deux etats : occupe → libre → engage dans une nouvelle tache.",
        axe5_frequence: "Le khalifa doit savoir passer d'une tache a l'autre sans pause oisive. Quand une occupation se termine, l'effort suivant commence immediatement. La mission de justice ne connait pas de vacances — la liberation d'une tache est le debut de la suivante."
      },
      "Versement/Écoulement": {
        status: "nul",
        senses: ["verser", "repandre", "couler du metal en moule"],
        proof_ctx: "Le sens de verser est hors sujet. Le verset parle de finir une occupation, pas de verser un liquide. Le contexte de l'injonction (quand tu te liberes → peine) est clairement celui de la transition entre deux activites."
      },
      "Sens isolé/Patience": {
        status: "nul",
        senses: ["patience a bout"],
        proof_ctx: "Le sens de patience a bout est hors sujet. Le verset ne parle pas de patience mais de liberation d'une tache. La structure temporelle (quand + accompli) indique l'achevement d'une activite, pas l'epuisement de la patience."
      }
    }
  }, 1);

  // ---- NSB (ن ص ب) — id=994 — "peiner" ----
  // Forme: insab — verbe forme I imperatif, 2eme pers. singulier (peine !)
  await upsertVWA(verse_id, 'nsb', 'peiner', {
    sense_chosen: "peiner",
    concept_chosen: "Fatigue/Peine",
    concepts: {
      "Fatigue/Peine": {
        status: "retenu",
        senses: ["etre fatigue", "peine", "effort"],
        proof_ctx: "Le sens retenu est « Fatigue/Peine ». Le Lane's donne pour la racine n-s-b dans le sens de fatigue : nasiba = etre fatigue, peiner, fournir un effort penible, nasab = fatigue, peine. Le verbe insab est l'imperatif de la forme I : « peine ! » ou « fournis un effort ! ». Le Lane's donne nasaba : il s'est fatigue, il a peine dans un travail. L'imperatif insab ordonne de fournir un effort qui coute, de se donner de la peine. Le concept « Erection/Installation » (dresser, installer, idole) est probable car la racine n-s-b porte aussi le sens de dresser, installer, planter — mais dans ce contexte l'imperatif apres « quand tu te liberes » demande un effort, pas une installation. Le parallele avec le verset 8 (tourne-toi vers ton seigneur) confirme que les deux imperatifs demandent une action interieure (effort, devotion), pas une action physique (dresser, installer).",
        axe1_verset: "Le verset dit fa-nsab — « alors peine ! ». Le verbe est a l'imperatif, precede de fa- (alors) qui le lie a la condition precedente (quand tu te liberes). Le champ lexical est celui de l'effort et de la perseverance : se liberer + peiner. L'imperatif est direct et sans ambiguite — c'est un ordre de fournir un effort. Le contexte (apres la liberation d'une tache) indique que cet effort est une nouvelle tache qui commence immediatement.",
        axe2_voisins: "Le verset 7 forme une paire avec le verset 8 : « quand tu te liberes, peine — et vers ton seigneur, tourne-toi ». Les deux imperatifs (peine + tourne-toi) se completent : l'effort physique/mental (nsb) est dirige vers le seigneur (rbb). L'effort n'est pas aveugle mais oriente.",
        axe3_sourate: "L'injonction de peiner est la conclusion pratique de la sourate. Apres les bienfaits (v1-4) et la promesse de facilite (v5-6), le texte demande l'effort. La peine n'est pas une punition mais la reponse naturelle aux bienfaits recus — celui qui a recu doit agir.",
        axe4_coherence: "Le Coran utilise nasab dans d'autres passages : « ils n'y ressentiront ni fatigue ni lassitude » (15:48, decrivant le paradis). Le nasab (fatigue, peine) est une realite de la vie terrestre — le paradis en est exempt. Ici, le texte ordonne la peine comme un acte positif, pas comme une souffrance subie.",
        axe5_frequence: "Le khalifa est appele a peiner — la mission de justice demande un effort constant et soutenu. La peine n'est pas une contrainte mais l'exercice de la responsabilite. Celui qui se libere d'une tache et ne peine pas pour la suivante gaspille le temps et les facilites accordees."
      },
      "Érection/Installation": {
        status: "probable",
        senses: ["dresser", "installer", "idole (nusub)"],
        proof_ctx: "Le sens de dresser/installer est probable. Le Lane's donne nasaba : il a dresse, il a installe, il a plante. L'imperatif insab pourrait signifier « dresse-toi ! » ou « installe-toi dans [l'effort] ». La distinction philosophique avec le sens retenu est la suivante : la peine (Fatigue/Peine) est un etat interieur de l'effort — on ressent la fatigue de l'engagement. L'installation (Erection/Installation) est un acte exterieur — on dresse quelque chose de visible. Le contexte du verset 7, suivi du verset 8 (tourne-toi vers ton seigneur), oriente vers l'effort interieur et la devotion plutot que vers l'installation physique. Cependant, le sens de « dresser/appliquer » est grammaticalement compatible avec l'imperatif et reste une lecture possible.",
        axe1_verset: "Le verset dit fa-nsab — si le sens est « dresse-toi » ou « installe-toi », le champ lexical serait celui de la mise en place : se liberer + s'installer. Cela decrirait un enchainement d'activites : finir une chose puis en commencer une autre en s'y installant. Le sens est coherent mais moins precis que « peiner » dans ce contexte.",
        axe2_voisins: "Le verset 8 dit « tourne-toi vers ton seigneur » — un mouvement interieur de devotion. Le parallele suggere que l'imperatif du v7 est aussi interieur (peiner dans l'effort) plutot qu'exterieur (dresser quelque chose). L'installation physique serait en decalage avec la devotion interieure du v8.",
        axe3_sourate: "La sourate traite de bienfaits recus et d'encouragement — le theme est interieur et personnel. L'installation/erection est un acte exterieur qui s'integre moins naturellement dans cette thematique.",
        axe4_coherence: "Le Coran utilise nasaba dans le sens d'idole (nusub) dans d'autres passages. Ce sens est clairement exclu ici. Le sens de « dresser » est neutre mais le contexte favorise la peine.",
        axe5_frequence: "L'installation n'implique pas l'effort personnel que la mission du khalifa demande. La peine est un engagement plus complet que la simple mise en place."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "فَإِذَا فَرَغْتَ فَٱنصَبْ",
    full_translation: "Quand tu te libères, alors peine,",
    segments: [
      { fr: "Alors quand", pos: "particule", phon: "fa-idha", arabic: "فَإِذَا", is_particle: true, position: 0 },
      { fr: "tu te liberes", pos: "verbe", phon: "faraghta", arabic: "فَرَغْتَ", word_key: "frg", is_particle: false, sense_retenu: "se liberer d'une occupation", position: 1 },
      { fr: "peine", pos: "verbe", phon: "fa-nsab", arabic: "فَٱنصَبْ", word_key: "nsb", is_particle: false, sense_retenu: "peine", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient deux verbes lies par une structure conditionnelle temporelle. La particule fa- (alors) lie l'injonction aux versets precedents. Idha (quand) + verbe accompli forme une condition temporelle : « quand telle chose se produit ». Le verbe faraghta est la forme I accompli de la racine f-r-gh, deuxieme personne du singulier : « tu t'es libere, tu as fini ». Le Lane's (Edward Lane, 1863) donne pour faragha : etre vide, se liberer d'une occupation, finir une tache, devenir disponible. La deuxieme partie fa-nsab est l'imperatif de la forme I de la racine n-s-b, precede de fa- (alors) : « alors peine ». Le Lane's donne pour nasaba/nasiba : peiner, fournir un effort, etre fatigue. L'imperatif insab ordonne de s'engager dans un effort penible. La structure « quand tu as fini → peine » cree un enchainement sans pause : la fin d'une tache est le debut d'un effort.

§JUSTIFICATION§
**se liberer** — Le sens retenu est « Vacuite/Liberation ». Le mot « se liberer » est choisi car il capture l'idee de finir une occupation et devenir disponible. L'alternative « finir » est plus neutre mais ne contient pas l'idee de devenir libre — « j'ai fini » est plat, « je me suis libere » implique qu'on etait occupe et qu'on est maintenant disponible. L'alternative « se vider » est trop physique pour du francais courant.

**peiner** — Le sens retenu est « Fatigue/Peine ». Le mot « peiner » est choisi car il capture l'effort penible mais volontaire — on peine dans un travail, on se donne de la peine. L'alternative « se fatiguer » est ecartee car elle decrit un resultat passif (on est fatigue) plutot qu'un engagement actif (on peine). L'alternative « s'efforcer » est acceptable mais « peiner » contient l'idee de difficulte que « s'efforcer » n'a pas necessairement.

§CRITIQUE§
Hamidullah traduit : « Quand tu te liberes, alors peine ». Notre traduction est identique. Aucun mot ne fait basculer le sens du verset. Certaines traductions donnent « fais un effort pour adorer » ou « consacre-toi a la priere » — ces traductions ajoutent une interpretation (adoration, priere) absente du texte arabe. Le texte dit « peine » (insab), il ne precise pas dans quoi ni pour quoi.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(2150, 'se liberer', 'فَرَغَ', "faragha", [
    "Quand tu auras fini, appelle-moi.",
    "Je me suis libere de cette tache en une heure.",
    "Elle est enfin disponible apres sa reunion."
  ]);
  await insertDaily(994, 'peiner', 'نَصَبَ', "nasaba", [
    "Il a peine toute la journee dans les champs.",
    "Elle se donne de la peine pour ses enfants.",
    "Apres tant de peine, le resultat est la."
  ]);

  console.log('VERSET 94:7 — TERMINE');
  console.log('  frg (ف ر غ) → sens "Vacuite/Liberation" → mot francais "se liberer"');
  console.log('  nsb (ن ص ب) → sens "Fatigue/Peine" → mot francais "peiner"');
  console.log('  Traduction : "Alors quand tu te liberes, peine"');
}

async function verse94_8() {
  console.log('\n=== VERSET 94:8 — وَإِلَىٰ رَبِّكَ فَٱرْغَب ===');
  const verse_id = 6098;

  // ---- RBB (ر ب ب) — id=253 — "seigneur" ----
  // Forme: rabbika — nom au genitif apres ila (vers) + suffixe possessif -ka (ton)
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["celui qui possede", "maitre", "gouverner", "proprietaire", "celui qui eleve", "celui qui entretient", "seigneur"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorite bienveillante ». Le Lane's donne pour la racine r-b-b dans le sens de seigneurie : le maitre, celui qui possede, celui qui eleve et entretient, celui qui gouverne avec soin. Le mot rabbika est au genitif apres la preposition ila (vers) avec le suffixe -ka (ton) : « vers ton seigneur ». Le rabb est celui qui prend soin de ce qu'il possede, qui l'eleve et le fait grandir — c'est une autorite bienveillante, pas une domination froide. Les autres concepts de la racine (croissance, education, commerce, etc.) sont nuls dans ce contexte car le mot est utilise comme titre divin designant la relation d'autorite protectrice entre Dieu et la personne.",
        axe1_verset: "Le verset dit wa-ila rabbika fa-rghab — « et vers ton seigneur, tourne-toi ». Le mot rabb est le complement de direction (vers) — la destination du mouvement interieur. Le champ lexical est celui de la direction et de la relation : vers + seigneur + tourne-toi. Le seigneur est celui vers qui l'effort et la devotion sont diriges.",
        axe2_voisins: "Le verset 7 demandait de peiner (effort), le verset 8 indique la direction de cet effort : vers le seigneur. Les deux injonctions se completent — l'effort sans direction est vain, la direction sans effort est sterile. La paire peiner + se tourner vers le seigneur forme l'action complete.",
        axe3_sourate: "Le seigneur est le destinataire de toute l'action demandee par la sourate. Les bienfaits (v1-4) viennent de lui, la facilite (v5-6) vient de lui, et l'effort demande (v7-8) est dirige vers lui. Le seigneur est le cadre qui donne sens a l'ensemble de la sourate.",
        axe4_coherence: "Le Coran utilise rabb plus de 900 fois — c'est le nom divin le plus frequent apres Allah. Le rabb est le maitre bienveillant, celui qui fait croitre, qui eleve, qui prend soin. Dans la sourate 1, rabb al-'alamina (seigneur des mondes) ouvre la louange. Ici, rabbika (ton seigneur) personalise la relation — c'est une adresse directe et intime.",
        axe5_frequence: "Le seigneur est le point de reference du khalifa — toute action du khalifa est dirigee vers celui qui l'a cree et qui lui a accorde les bienfaits. Se tourner vers le seigneur, c'est ancrer la mission de justice dans sa source."
      }
    }
  }, 1);

  // ---- RGHB (ر غ ب) — id=799 — "se tourner avec desir" ----
  // Forme: irghab — verbe forme I imperatif, 2eme pers. singulier
  // Avec preposition ila (vers) = desirer ardemment, se tourner vers
  await upsertVWA(verse_id, 'rghb', 'se tourner avec desir', {
    sense_chosen: "se tourner avec desir",
    concept_chosen: "Désir/Aspiration",
    concepts: {
      "Désir/Aspiration": {
        status: "retenu",
        senses: ["desirer", "aspirer", "souhaiter"],
        proof_ctx: "Le sens retenu est « Desir/Aspiration ». Le Lane's donne pour la racine r-gh-b : desirer, aspirer, souhaiter ardemment, se tourner vers quelque chose avec desir. Le verbe irghab est l'imperatif de la forme I : « desire ! » ou « aspire ! ». Suivi de la preposition ila (vers), raghiba ila signifie se tourner vers avec desir — chercher quelque chose avec ardeur. Le Lane's distingue raghiba ila (desirer, se tourner vers) de raghiba 'an (se detourner de). La preposition change le sens : ila oriente le desir vers, 'an l'oriente loin de. Ici, avec ila rabbika, le sens est « tourne-toi avec desir vers ton seigneur ». Il n'y a qu'un seul regroupement semantique dans la base — pas de comparaison necessaire. Test de naturalite semantique : « se tourner avec desir vers ton seigneur » est une expression naturelle et coherente en francais.",
        axe1_verset: "Le verset dit wa-ila rabbika fa-rghab — « et vers ton seigneur, tourne-toi avec desir ». Le verbe irghab est a l'imperatif, precede de fa- (alors). La preposition ila (vers) + rabbika (ton seigneur) donne la direction du desir. Le champ lexical est celui de l'aspiration dirigee : vers + seigneur + desir. L'ordre des mots est remarquable — la destination (vers ton seigneur) est placee AVANT le verbe (tourne-toi) pour la mettre en evidence (taqdim). En arabe, le complement place avant le verbe est mis en relief.",
        axe2_voisins: "Le verset 7 dit « quand tu te liberes, peine » — l'effort sans direction. Le verset 8 donne la direction : « vers ton seigneur, tourne-toi avec desir ». La paire v7-v8 forme un message complet : l'effort est dirige vers le seigneur. Les deux injonctions sont liees par wa- (et) — elles sont inseparables.",
        axe3_sourate: "Le verset 8 est la conclusion de la sourate — le dernier mot est le mouvement vers le seigneur. Toute la sourate converge vers cette injonction finale : apres les bienfaits recus et la promesse de facilite, se tourner avec desir vers la source de ces bienfaits.",
        axe4_coherence: "Le Coran utilise raghiba dans d'autres contextes : « les enfants (orphelins) dont vous desirez les biens » (4:127) — raghiba fi signifie desirer quelque chose. La racine r-gh-b exprime toujours un desir intense, une aspiration ardente. Avec ila (vers), le desir est oriente vers une destination — ici le seigneur.",
        axe5_frequence: "Le khalifa ne se tourne pas vers le seigneur par obligation mais par desir — l'aspiration ardente est le moteur de la mission. Le desir de justice et de bien est la force qui propulse le khalifa dans son action. Se tourner avec desir, c'est agir par conviction profonde, pas par contrainte."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَإِلَىٰ رَبِّكَ فَٱرْغَب",
    full_translation: "et vers ton Seigneur aspire.",
    segments: [
      { fr: "et vers", pos: "particule", phon: "wa-ila", arabic: "وَإِلَىٰ", is_particle: true, position: 0 },
      { fr: "ton seigneur", pos: "nom", phon: "rabbika", arabic: "رَبِّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 1 },
      { fr: "tourne-toi avec desir", pos: "verbe", phon: "fa-rghab", arabic: "فَٱرْغَب", word_key: "rghb", is_particle: false, sense_retenu: "desirer", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par wa- (et) qui lie cette injonction a la precedente (v7). La preposition ila (vers) indique la direction. Le nom rabbika est au genitif apres ila avec le suffixe -ka (ton seigneur). Le Lane's (Edward Lane, 1863) donne pour rabb : le maitre, celui qui possede et prend soin, celui qui eleve et entretient. Le verbe fa-rghab est l'imperatif de la forme I de la racine r-gh-b, precede de fa- (alors). Le Lane's donne pour raghiba ila : desirer ardemment, aspirer a, se tourner vers avec desir. La construction ila rabbika fa-rghab place le complement de direction (vers ton seigneur) AVANT le verbe (tourne-toi avec desir) — c'est un taqdim (mise en relief). En arabe, placer le complement avant le verbe souligne la destination : c'est vers ton seigneur (et pas vers quelqu'un d'autre) que tu dois te tourner.

§JUSTIFICATION§
**seigneur** — Le sens retenu est « Seigneurie/Autorite bienveillante ». Le mot « seigneur » est choisi car c'est la traduction standard de rabb en francais. L'alternative « maitre » est ecartee car elle evoque la domination plus que la bienveillance. L'alternative « educateur » est ecartee car elle est trop specifique — le rabb ne fait pas qu'eduquer, il possede, gouverne et prend soin.

**tourne-toi avec desir** — Le sens retenu est « Desir/Aspiration ». L'expression « tourne-toi avec desir » est choisie car elle capture les deux dimensions du verbe : le mouvement directionnel (se tourner vers, grace a la preposition ila) et l'intensite du desir (raghiba = desirer ardemment). L'alternative « aspire » est plus concise mais perd la dimension directionnelle. L'alternative « desire » est ecartee car « desirer vers » ne se dit pas naturellement en francais — on desire quelque chose, pas vers quelque chose. « Se tourner avec desir » integre la preposition ila dans la traduction.

§CRITIQUE§
Hamidullah traduit : « et vers ton Seigneur aspire ». Notre traduction donne « tourne-toi avec desir vers ton seigneur » au lieu de « aspire ». Le mot « aspirer » est correct mais il perd la dimension de mouvement que la preposition ila (vers) ajoute au verbe raghiba. Le texte ne dit pas simplement « desire ton seigneur » mais « tourne-toi VERS ton seigneur avec desir » — le mouvement directionnel est essentiel. La preposition ila indique que le desir est oriente, pas flottant.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(799, 'desirer', 'رَغِبَ', "raghiba", [
    "Je desire ardemment reussir ce projet.",
    "Elle aspire a une vie meilleure pour ses enfants.",
    "Il se tourne vers l'avenir avec envie et determination."
  ]);

  console.log('VERSET 94:8 — TERMINE');
  console.log('  rbb (ر ب ب) → sens "Seigneurie/Autorite bienveillante" → mot francais "seigneur"');
  console.log('  rghb (ر غ ب) → sens "Desir/Aspiration" → mot francais "tourne-toi avec desir"');
  console.log('  Traduction : "et vers ton seigneur, tourne-toi avec desir"');
}

async function main() {
  await verse94_5();
  await verse94_6();
  await verse94_7();
  await verse94_8();

  console.log('\n=== PARTIE 2 TERMINEE (versets 5-8) ===');
}

main().catch(console.error);
