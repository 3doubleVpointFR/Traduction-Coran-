// Pipeline S88 v1-5 — Étapes 3-4 : Axes + Traductions
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA updated ${word_key} (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR insert VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA created ${word_key} (id=${data.id})`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VA: ${error.message}`);
    else console.log(`  ✓ VA updated (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR insert VA: ${error.message}`);
    else console.log(`  ✓ VA created (id=${data.id})`);
  }
}

(async () => {
  console.log('=== PIPELINE S88 v1-5 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 1 (5968): هَلْ أَتَىٰكَ حَدِيثُ ٱلْغَـٰشِيَةِ
  // ============================================================
  console.log('--- VERSET 1 ---');

  // aty (id=379) — أَتَىٰكَ — verbe accompli
  await upsertVWA(5968, 'aty', 'venir', {
    sense_chosen: 'venir',
    concept_chosen: 'Venue/Arrivée',
    concepts: {
      'Venue/Arrivée': {
        status: 'retenu',
        senses: ['venir', 'arriver', 'apporter', 'donner', 'commettre'],
        proof_ctx: "La racine a-t-y n'a qu'un seul regroupement significatif (Venue/Arrivee). Le verbe ataka (il t'est parvenu) est a l'accompli avec le pronom suffixe -ka (toi). Le sens retenu est la venue au sens de parvenir : le recit est parvenu au destinataire. L'autre sens (Detruire) est un emploi isole sans rapport avec le contexte d'un recit qui parvient.",
        axe1_verset: "Le champ lexical du verset est celui de la transmission d'information. Le verbe ataka (il t'est parvenu) est suivi de hadithu (le recit de) al-ghashiya (l'enveloppante). La venue est celle d'une information — un recit qui arrive au destinataire. Le verbe a l'accompli presente cette venue comme un fait, pas une hypothese. L'interrogation hal (est-ce que) donne au verset un ton de questionnement qui interpelle directement le destinataire.",
        axe2_voisins: "Le verset 1 ouvre la sourate en posant une question. Les versets 2-7 repondent a cette question en decrivant ce qui se passe le jour de l'enveloppante. Le verbe « parvenir » inaugure le recit — une fois que l'information est parvenue, le destinataire est responsable de ce qu'il en fait. Les versets suivants detailleront les deux destins possibles.",
        axe3_sourate: "La sourate 88 (al-Ghashiya) est construite autour de la question initiale du verset 1. Toute la sourate est une reponse a cette question : voici ce qui arrive ce jour-la. Le theme de la sourate est le contraste entre les deux destins (puni et recompense). La venue du recit est le declencheur de toute la reflexion.",
        axe4_coherence: "Le Coran utilise la construction hal ataka (t'est-il parvenu) dans d'autres passages pour introduire des recits importants. En 20:9, « t'est-il parvenu le recit de Moise ? ». En 79:15, « t'est-il parvenu le recit de Moise ? ». Cette construction est un procede rhetorique coranique pour capter l'attention et introduire un enseignement majeur.",
        axe5_frequence: "La venue de l'information est le premier pas vers la responsabilite du khalifa. Celui qui recoit un recit ne peut plus pretendre l'ignorer. La question hal ataka interpelle le khalifa directement : maintenant que tu sais, que feras-tu ? C'est le fondement de la responsabilite fondee sur la connaissance."
      },
      'Sens isolé/Détruire': { status: 'nul', senses: ['détruire'], proof_ctx: "Sens isole sans rapport avec le contexte de transmission d'un recit." }
    }
  }, 2);

  // hdṯ (id=635) — حَدِيثُ — nom en idafa
  await upsertVWA(5968, 'hdṯ', 'événement', {
    sense_chosen: 'événement',
    concept_chosen: 'Nouveauté/Récence',
    concepts: {
      'Nouveauté/Récence': {
        status: 'retenu',
        senses: ['événement', 'nouveau', 'récent'],
        proof_ctx: "La racine h-d-th n'a qu'un seul regroupement de sens, tous lies a l'idee de ce qui est nouveau, recent, un evenement qui se produit. Le mot hadith signifie a la fois un recit (ce que l'on raconte d'un evenement) et un evenement (ce qui est nouveau, ce qui arrive). Dans le contexte du verset, hadithu al-ghashiya est « le recit de l'enveloppante » — l'evenement de l'enveloppante tel qu'il est raconte. Le hadith est ce qui est nouveau par opposition a ce qui est ancien et connu. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-d-th porte l'idee de ce qui vient d'arriver, ce qui est frais et recent.",
        axe1_verset: "Le mot hadith est en position d'idafa (construction d'appartenance) avec al-ghashiya — le recit DE l'enveloppante. Le champ lexical combine la venue (ataka) et le recit (hadith) — une information nouvelle qui parvient. Le mot hadith en arabe est plus large que « recit » en francais : il inclut l'evenement lui-meme et sa narration. Dans le verset, c'est la narration de l'evenement qui est presentee.",
        axe2_voisins: "Le verset 1 introduit le recit, les versets 2-7 en developpent le contenu. Le hadith est donc le cadre narratif de toute la premiere partie de la sourate. Le mot annonce ce qui va suivre : le recit des visages humilies (v2-7) et des visages radieux (v8-10).",
        axe3_sourate: "La sourate porte le nom de son sujet principal : al-ghashiya. Le recit (hadith) de cette enveloppante est le fil conducteur de la sourate. Le hadith n'est pas un simple recit — c'est un evenement nouveau que le destinataire doit integrer a sa comprehension du monde.",
        axe4_coherence: "Le Coran utilise hadith dans d'autres contextes de recit/evenement. En 53:59, « vous etonnez-vous de ce recit (hadith) ? ». En 56:81, « est-ce ce recit (hadith) que vous negligez ? ». Le mot hadith dans le Coran designe toujours un evenement ou un recit porteur d'enseignement, jamais une banalite.",
        axe5_frequence: "Le recit de l'enveloppante est une information que le khalifa doit connaitre pour exercer sa mission. Le khalifa doit savoir ce qui l'attend — la connaissance du jour de la reddition de comptes oriente ses choix sur terre."
      }
    }
  }, 3);

  // ghw (id=306) — ٱلْغَـٰشِيَةِ — participe actif defini feminin
  await upsertVWA(5968, 'ghw', 'submerger', {
    sense_chosen: 'submerger',
    concept_chosen: 'Invasion/Submersion',
    concepts: {
      'Invasion/Submersion': {
        status: 'retenu',
        senses: ['envahir', 'submerger'],
        proof_ctx: "La racine gh-sh-w possede trois regroupements de sens significatifs. Invasion/Submersion est retenu car le mot al-ghashiya (participe actif feminin defini) designe « celle qui submerge, celle qui envahit tout ». Le participe actif indique que cette entite FAIT activement l'action de submerger. La distinction avec Couverture/Voile est philosophique : couvrir est un acte passif et protecteur (on couvre pour cacher ou proteger), tandis que submerger est un acte violent et total (ce qui submerge envahit tout sans laisser d'echappatoire). L'enveloppante du jour du jugement n'est pas un voile protecteur — c'est un evenement qui submerge tout et tous, sans exception. La Perte de conscience est un etat interieur (s'evanouir) qui ne correspond pas a un participe actif designant un evenement exterieur.",
        axe1_verset: "Le mot al-ghashiya est en position d'idafa avec hadith — le recit de celle qui submerge. Le champ lexical est celui de l'evenement majeur qui arrive : la question hal ataka (t'est-il parvenu) introduit un sujet grave. Le participe actif feminin avec l'article defini (al-ghashiya) designe une entite specifique et connue — non pas n'importe quelle couverture, mais LA submersion, l'evenement qui submerge. Le poids du mot est celui d'un tsunami, pas d'un voile.",
        axe2_voisins: "Les versets 2-7 decrivent des visages humilies, du feu brulant, une source bouillante, une plante epineuse — tout le registre est celui de la submersion par l'epreuve. Les versets 8-10 decriront l'inverse : des visages radieux, un jardin eleve. L'enveloppante submerge les uns et revele les autres. Le contexte de chatiment et de recompense confirme qu'il s'agit d'un evenement submersif, pas d'un voile.",
        axe3_sourate: "La sourate porte le nom al-ghashiya — l'enveloppante. Le theme central est cet evenement qui submerge tout : les visages humilies d'un cote, les visages radieux de l'autre. Le nom meme de la sourate est celui d'un evenement submersif, pas d'un voile ou d'un evanouissement.",
        axe4_coherence: "Le Coran utilise la racine gh-sh-w dans d'autres contextes de submersion. En 7:54, la nuit « recouvre » le jour (yaghshahu) — c'est un recouvrement total. En 12:107, « une submersion (ghashiya) du chatiment de Dieu ». La coherence coranique confirme que ghashiya dans un contexte de jugement designe un evenement submersif, pas un voile protecteur.",
        axe5_frequence: "L'evenement submersif est le moment ou le khalifa fait face a la realite de ses actes. La submersion totale ne laisse aucune echappatoire — chacun est submerge par les consequences de ses choix. Ce sens renforce la responsabilite du khalifa : il n'y aura pas de lieu ou se cacher."
      },
      'Couverture/Voile': {
        status: 'probable',
        senses: ['couvrir', 'cacher', 'voiler', 'se couvrir d\'un vêtement', 'couverture', 'film sur les yeux'],
        proof_ctx: "Le voile couvre pour cacher ou proteger — c'est un acte qui separe deux espaces. La submersion envahit tout sans distinction. La ghashiya du jour du jugement n'est pas un voile qui separe : elle submerge, elle envahit. La distinction philosophique est : le voile est selectif (il couvre une partie, pas tout), la submersion est totale (elle atteint tout). Le contexte du verset (feu brulant, source bouillante) est celui de la submersion totale, pas de la couverture selective.",
        axe1_verset: "Le participe actif al-ghashiya pourrait signifier « celle qui couvre ». Mais le mot hadith (recit/evenement) introduit un evenement, pas un objet. On ne raconte pas un voile — on raconte un evenement. « Le recit de celle qui submerge » est plus naturel que « le recit de celle qui couvre ».",
        axe2_voisins: "Les versets suivants decrivent le feu, la source bouillante, la nourriture qui ne nourrit pas — un registre de chatiment, pas de voilement. Le voile protege, le feu brule. Le contexte pointe vers la submersion.",
        axe3_sourate: "La sourate decrit deux destins opposes — le chatiment et la recompense. Un voile ne produit pas deux destins, une submersion si : elle submerge les uns et epargne les autres.",
        axe4_coherence: "En 12:107, ghashiya est explicitement associee au chatiment. En 88:1, le contexte confirme la meme association.",
        axe5_frequence: "Le voile protege ou cache — ce n'est pas la finalite du jour du jugement. La submersion confronte chacun a la verite de ses actes."
      },
      'Perte de conscience': { status: 'nul', senses: ['évanouissement', 'trouble de l\'entendement'], proof_ctx: "L'evanouissement est un etat interieur qui ne correspond pas a un participe actif feminin designant un evenement exterieur qui arrive." }
    }
  }, 4);

  // VA verset 1
  await upsertVA(5968, {
    segments: [
      { fr: 'T\'est-il parvenu', pos: 'INTG+V', phon: 'hal atāka', arabic: 'هَلْ أَتَىٰكَ', word_key: 'aty', is_particle: false, sense_retenu: 'venir', position: 1 },
      { fr: 'le recit', pos: 'N', phon: 'hadīthu', arabic: 'حَدِيثُ', word_key: 'hdṯ', is_particle: false, sense_retenu: 'événement', position: 3 },
      { fr: 'de la submersive', pos: 'N', phon: 'al-ghāshiya', arabic: 'ٱلْغَـٰشِيَةِ', word_key: 'ghw', is_particle: false, sense_retenu: 'submerger', position: 4 }
    ],
    translation_arab: "T'est-il parvenu le recit de la submersive ?",
    full_translation: "T'est-il parvenu le récit de l'Enveloppante ?",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par **hal** (هَلْ), une particule interrogative qui pose une question directe au destinataire. Cette question n'attend pas forcement une reponse — c'est un procede rhetorique arabe pour capter l'attention et introduire un sujet important.

Le verbe **ataka** (أَتَىٰكَ) est a l'accompli (une forme qui presente l'action comme achevee) avec le pronom suffixe -ka (toi). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine a-t-y signifie venir, parvenir. L'accompli indique que le recit EST parvenu — c'est un fait, pas une possibilite.

Le mot **hadith** (حَدِيثُ) est un nom en idafa (construction d'appartenance) avec al-ghashiya. D'apres les sources etymologiques, la racine h-d-th signifie ce qui est nouveau, recent — un evenement ou le recit d'un evenement. Le mot hadith couvre les deux : l'evenement et sa narration.

Le mot **al-ghashiya** (ٱلْغَـٰشِيَةِ) est un participe actif feminin defini (une forme qui dit que cette entite FAIT activement l'action, de maniere continue). D'apres les sources etymologiques, la racine gh-sh-w signifie couvrir entierement, envahir, submerger. Le participe actif avec l'article defini designe une entite specifique et connue : « la submersive » — celle qui submerge tout ce qu'elle atteint. Le feminin indique une entite ou un evenement (les evenements sont souvent au feminin en arabe).

§JUSTIFICATION§
**parvenu** — Le sens retenu est « venir » du regroupement Venue/Arrivee. Le verbe « parvenir » est choisi car il combine la venue avec l'idee d'atteindre le destinataire. L'alternative « arriver » serait acceptable mais « parvenir » insiste sur le fait que l'information a ATTEINT la personne.

**recit** — Le sens retenu est « evenement » du regroupement Nouveaute/Recence. Le mot « recit » est choisi car hadith dans cette construction (hadithu + nom) designe la narration d'un evenement. L'alternative « evenement » seul serait trop brut — le verset ne demande pas « l'evenement t'est-il parvenu » mais « le recit de l'evenement t'est-il parvenu ».

**la submersive** — Le sens retenu est « submerger » du regroupement Invasion/Submersion. Le mot « submersive » (neologisme forme sur submerger) est choisi pour rendre le participe actif arabe : celle qui submerge, qui envahit tout. L'alternative « l'enveloppante » (couverture) attenue la violence de l'evenement — submerger implique qu'on ne peut pas s'echapper, envelopper implique qu'on est juste recouvert. L'alternative « l'evanouissante » ne correspond pas a un participe actif (qui fait l'action) mais a un etat passif.

§CRITIQUE§
**submersive vs enveloppante** — Les traductions courantes donnent « l'Enveloppante » (Hamidullah) ou « le cataclysme ». Le mot « enveloppante » vient de la racine gh-sh-w dont le sens premier est couvrir. Mais les sources etymologiques donnent aussi le sens d'envahir, de submerger. Le contexte du verset (introduction d'un recit sur le jour du jugement, suivi de descriptions de feu et de chatiment) pointe vers la submersion plutot que la simple couverture. « Enveloppante » evoque une couverture douce ; « submersive » evoque un evenement qui ne laisse aucune echappatoire. Le texte arabe, par le choix du participe actif, insiste sur l'action violente de cet evenement.`
  });
  console.log('  v1 done\n');

  // ============================================================
  // VERSET 2 (5969): وُجُوهٌ يَوْمَئِذٍ خَـٰشِعَةٌ
  // ============================================================
  console.log('--- VERSET 2 ---');

  // wjh (id=747) — وُجُوهٌ — nom indefini pluriel
  await upsertVWA(5969, 'wjh', 'visage', {
    sense_chosen: 'visage',
    concept_chosen: 'Visage/Direction',
    concepts: {
      'Visage/Direction': {
        status: 'retenu',
        senses: ['visage', 'face', 'direction', 'se diriger vers'],
        proof_ctx: "La racine w-j-h possede un regroupement principal (Visage/Direction) et deux sens isoles. Le mot wujuh est le pluriel de wajh (visage). Dans le verset, wujuh est indefini et en position de sujet — « des visages, ce jour-la, humilies ». Le visage est la partie du corps qui exprime les emotions et l'etat interieur de la personne. Les sens isoles (Maniere, Noble) sont hors contexte.",
        axe1_verset: "Le mot wujuh (des visages) est le sujet du verset, qualifie par khashi'a (humilies). Le champ lexical est celui de l'etat exterieur qui revele l'interieur — le visage montre l'humiliation. L'indefini (wujuhun, pas al-wujuh) indique qu'il s'agit de « certains visages », pas de tous. Le verset distingue un groupe particulier — il y en aura d'autres (v8 : d'autres visages, radieux).",
        axe2_voisins: "Le verset 1 posait la question du recit. Le verset 2 commence la reponse : des visages humilies. Le verset 3 ajoute des qualificatifs (travaillantes, epuisees). Le verset 8 opposera d'autres visages (radieux). Le visage est le marqueur de l'etat de chaque groupe.",
        axe3_sourate: "La sourate oppose deux groupes par leurs visages : humilies (v2) et radieux (v8). Le visage est le fil conducteur de cette opposition — c'est par le visage que se lit le destin de chacun. Le theme de la sourate (le jour de la submersion) se manifeste sur les visages.",
        axe4_coherence: "Le Coran utilise wujuh dans d'autres passages pour decrire l'etat des gens au jour du jugement. En 3:106-107, « le jour ou des visages blanchiront et des visages noirciront ». En 75:22-24, « des visages radieux... des visages sombres ». Le motif des visages comme revelateurs du destin est un procede coranique constant.",
        axe5_frequence: "Le visage du khalifa revele la qualite de sa mission. Les visages humilies sont ceux qui n'ont pas rempli leur mission — leur echec se lit sur leur visage. Le visage est la partie la plus exposee du corps, celle qu'on ne peut pas cacher."
      },
      'Sens isolé/Manière': { status: 'nul', senses: ['manière'], proof_ctx: "Hors sujet dans le contexte de visages humilies." },
      'Sens isolé/Noble': { status: 'nul', senses: ['noble'], proof_ctx: "Hors sujet." }
    }
  }, 1);

  // khaʃe (id=503) — خَـٰشِعَةٌ — participe actif feminin
  await upsertVWA(5969, 'khaʃe', 's\'humilier', {
    sense_chosen: 's\'humilier',
    concept_chosen: 'Humilité/Soumission',
    concepts: {
      'Humilité/Soumission': {
        status: 'retenu',
        senses: ['s\'humilier', 'être humble', 'se soumettre', 'recueillement'],
        proof_ctx: "La racine kh-sh-' possede deux regroupements de sens. Humilite/Soumission est retenu car le mot khashi'a (participe actif feminin) qualifie des visages soumis et humilies. Le participe actif indique que ces visages FONT activement l'humiliation — ils sont en train de s'humilier, pas en train de chuchoter. La distinction avec Discretion (baisser la voix) est claire : le contexte est celui de visages, pas de voix. La discretion est un acte sonore (baisser le volume), l'humilite est un etat visible sur le visage (tete baissee, regard au sol). Le participe actif feminin s'accorde avec wujuh (visages, pluriel non-humain traite comme feminin singulier en arabe).",
        axe1_verset: "Le mot khashi'a qualifie wujuh (visages). Le champ lexical est celui de l'humiliation visible — les visages montrent leur soumission. Le participe actif indique un etat en cours : ces visages sont activement humilies, pas momentanement baisses. L'indefini wujuhun + le qualificatif khashi'a = « des visages humilies » — un groupe specifique dont l'etat se lit sur le visage.",
        axe2_voisins: "Le verset 3 ajoute 'amila nasiba (travaillantes, epuisees) — l'humiliation des visages est accompagnee de travail penible et d'epuisement. Le verset 4 precise qu'elles entrent dans un feu brulant. L'humilite ici n'est pas une vertu choisie mais un etat subi — ces visages sont humilies parce qu'ils font face aux consequences de leurs actes.",
        axe3_sourate: "La sourate oppose visages humilies (v2) et visages radieux (v8). L'humilite de v2 est l'antithese de la serenite de v8. Le theme de la sourate est la confrontation avec les consequences : les uns sont humilies, les autres sont combles.",
        axe4_coherence: "Le Coran utilise la racine kh-sh-' pour l'humilite dans d'autres passages. En 42:45, les injustes « humilies par l'avilissement, regardent d'un oeil furtif ». En 54:7, « les regards humilies ». La coherence coranique montre que khashi'a dans un contexte de jugement designe l'humiliation subie par ceux qui ont mal agi, pas un recueillement volontaire.",
        axe5_frequence: "L'humiliation est la consequence du manquement a la mission du khalifa. Les visages humilies sont ceux qui n'ont pas rempli leur role de justice et de civilisation — ils portent maintenant sur leur visage la marque de cet echec."
      },
      'Discrétion': { status: 'nul', senses: ['baisser la voix'], proof_ctx: "Le contexte est celui de visages (element visuel), pas de voix (element sonore). On ne « baisse pas la voix » d'un visage." }
    }
  }, 3);

  // VA verset 2
  await upsertVA(5969, {
    segments: [
      { fr: 'Des visages', pos: 'N', phon: 'wujuh', arabic: 'وُجُوهٌ', word_key: 'wjh', is_particle: false, sense_retenu: 'visage', position: 1 },
      { fr: 'ce jour-la', pos: 'T', phon: "yawma'idhin", arabic: 'يَوْمَئِذٍ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'humilies', pos: 'N', phon: "khāshi'a", arabic: 'خَـٰشِعَةٌ', word_key: 'khaʃe', is_particle: false, sense_retenu: 's\'humilier', position: 3 }
    ],
    translation_arab: "Des visages, ce jour-la, humilies",
    full_translation: "Des visages, ce jour-là, seront humiliés",
    translation_explanation: `§DEMARCHE§
Le mot **wujuh** (وُجُوهٌ) est un nom au pluriel indefini (une forme qui dit « des visages » sans preciser lesquels). En arabe, le pluriel des noms non-humains (et les noms collectifs designant des parties du corps) se traite grammaticalement comme un feminin singulier — d'ou l'accord feminin des adjectifs qui suivent. L'indefini est significatif : il dit « certains visages », pas « tous les visages ». Cela prepare l'opposition avec le verset 8 (d'autres visages, radieux).

**Yawma'idhin** (يَوْمَئِذٍ) signifie « ce jour-la » — reference au jour de la submersive mentionne au verset 1.

Le mot **khashi'a** (خَـٰشِعَةٌ) est un participe actif feminin (une forme qui dit que le sujet FAIT activement l'action). D'apres les sources etymologiques, la racine kh-sh-' signifie s'humilier, baisser la tete et le regard en signe de soumission. Le participe actif indique que ces visages sont en train de s'humilier — c'est un etat continu et visible.

§JUSTIFICATION§
**visages** — Le sens retenu est « visage » du regroupement Visage/Direction. Le mot « visages » est le plus direct et fidele a wujuh.

**humilies** — Le sens retenu est « s'humilier » du regroupement Humilite/Soumission. Le mot « humilies » est choisi car il decrit l'etat visible sur les visages — tete baissee, regard au sol, marque de soumission. L'alternative « recueillis » ajouterait une dimension positive (le recueillement est un choix vertueux) alors que le contexte est celui du chatiment. L'alternative « soumis » serait acceptable mais « humilies » rend mieux l'aspect visible et force de la situation.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « des visages seront humilies ». La difference est minime — Hamidullah ajoute « seront » (futur) alors que l'arabe utilise un participe actif sans verbe etre (phrase nominale). La phrase nominale arabe est intemporelle, elle decrit un etat, pas un futur specifique. Notre traduction garde cette intemporalite.`
  });
  console.log('  v2 done\n');

  // ============================================================
  // VERSET 3 (5970): عَامِلَةٌ نَّاصِبَةٌ
  // ============================================================
  console.log('--- VERSET 3 ---');

  // eml (id=393) — عَامِلَةٌ — participe actif feminin
  await upsertVWA(5970, 'eml', 'travailler', {
    sense_chosen: 'travailler',
    concept_chosen: 'Action/Oeuvre',
    concepts: {
      'Action/Oeuvre': {
        status: 'retenu',
        senses: ['travailler', 'agir', 'oeuvre', 'acte', 'ouvrier'],
        proof_ctx: "La racine '-m-l n'a qu'un seul regroupement significatif. Le participe actif 'amila (travaillante) qualifie les visages du verset 2. Le sens est clair : ces visages sont en train de travailler — pas au sens productif mais au sens d'un labeur penible. Le sens isole (Gouverneur) est hors contexte.",
        axe1_verset: "Le mot 'amila est un adjectif qui complete khashi'a (humilies) pour qualifier les memes visages. Le champ lexical combine humiliation et labeur — ces visages sont humilies ET travaillent. Le travail ici n'est pas une activite productive mais un labeur force et penible, comme le confirme le mot suivant (nasiba = epuisees).",
        axe2_voisins: "Le verset 2 donnait le premier qualificatif (humilies). Le verset 3 en ajoute deux (travaillantes, epuisees). Le verset 4 donnera le lieu (un feu brulant). La progression est : humilies → travaillantes → epuisees → dans le feu. Chaque verset ajoute une couche au tableau.",
        axe3_sourate: "Dans la sourate, le travail des visages humilies contraste avec la satisfaction des visages radieux (v9 : satisfaits de leur effort). Les deux groupes ont travaille, mais les premiers travaillent dans le chatiment (labeur penible) tandis que les seconds recoltent le fruit de leur effort passe.",
        axe4_coherence: "Le Coran utilise la racine '-m-l dans de nombreux contextes d'action et d'oeuvre. En 99:7-8, « celui qui fait (ya'mal) un poids de bien le verra, et celui qui fait un poids de mal le verra ». Le travail est toujours lie aux consequences — ce que l'on fait determine ce que l'on recoit.",
        axe5_frequence: "Le travail penible des visages humilies est le resultat de leur manquement a la mission du khalifa. Ils travaillent maintenant dans le chatiment parce qu'ils n'ont pas travaille correctement sur terre."
      },
      'Sens isolé/Gouverneur': { status: 'nul', senses: ['gouverneur'], proof_ctx: "Hors contexte — le verset decrit un etat, pas une fonction." }
    }
  }, 1);

  // nsp (id=1612) — نَّاصِبَةٌ — participe actif feminin
  await upsertVWA(5970, 'nsp', 'fatigue', {
    sense_chosen: 'fatigue',
    concept_chosen: 'Élévation/Fatigue',
    concepts: {
      'Élévation/Fatigue': {
        status: 'retenu',
        senses: ['ériger', 'stèle', 'fatigue'],
        proof_ctx: "La racine n-s-b possede un seul regroupement qui mele l'idee d'eriger et celle de la fatigue. Le lien etymologique est que celui qui erige (qui met debout une stele, qui se dresse) s'epuise dans l'effort. Le mot nasiba (participe actif feminin) dans le contexte du verset 3 signifie « epuisee, fatiguee par l'effort ». D'apres les sources etymologiques, nasiba al-rajul signifie « l'homme s'est fatigue, s'est epuise ». Le participe actif indique un etat continu — ces visages sont en permanence epuises par le labeur.",
        axe1_verset: "Le mot nasiba complete 'amila — travaillantes ET epuisees. Le champ lexical est celui du labeur sans repit : le travail epuise mais ne s'arrete pas. Les deux participes actifs (travaillante, epuisee) se suivent sans conjonction — un procede arabe qui montre la simultaneite : elles sont a la fois en train de travailler et de s'epuiser.",
        axe2_voisins: "Le verset 2 (humilies) → verset 3 (travaillantes, epuisees) → verset 4 (feu brulant). L'epuisement est l'etape entre l'humiliation et le feu — ces visages sont epuises par un travail sans fin dans un lieu de chatiment.",
        axe3_sourate: "L'epuisement des visages humilies contraste avec la satisfaction des visages radieux (v9). Les premiers sont epuises par un labeur sterile, les seconds sont satisfaits de leur effort passe. Le theme de la sourate est le contraste entre effort recompense et labeur vain.",
        axe4_coherence: "Le Coran utilise la racine n-s-b dans d'autres contextes de fatigue. En 15:48, « ils n'y seront pas touches par la fatigue (nasab) ». Ce verset decrit le paradis ou il n'y a pas de fatigue — le contraste avec 88:3 est saisissant : dans le chatiment, la fatigue est permanente.",
        axe5_frequence: "L'epuisement est la consequence d'un travail sans sens — le khalifa qui n'a pas rempli sa mission se retrouve a travailler sans but, sans resultat, sans fin. L'effort sans la bonne direction est un gaspillage qui epuise."
      }
    }
  }, 2);

  // VA verset 3
  await upsertVA(5970, {
    segments: [
      { fr: 'Travaillantes', pos: 'ADJ', phon: "'āmila", arabic: 'عَامِلَةٌ', word_key: 'eml', is_particle: false, sense_retenu: 'travailler', position: 1 },
      { fr: 'epuisees', pos: 'ADJ', phon: 'nāsiba', arabic: 'نَّاصِبَةٌ', word_key: 'nsp', is_particle: false, sense_retenu: 'fatigue', position: 2 }
    ],
    translation_arab: "Travaillantes, epuisees",
    full_translation: "préoccupées, accablées",
    translation_explanation: `§DEMARCHE§
Les deux mots du verset sont des participes actifs feminins (une forme qui dit que le sujet FAIT activement l'action). Ils qualifient les visages (wujuh) du verset 2 — en arabe, les adjectifs d'un nom au pluriel non-humain prennent la forme du feminin singulier.

**'Amila** (عَامِلَةٌ) vient de la racine '-m-l qui signifie travailler, agir. Le participe actif dit que ces visages sont en train de travailler — un labeur en cours. Le verset 3 est une suite du verset 2 sans conjonction (on appelle cela une annexion descriptive) — c'est une precision supplementaire sur l'etat des visages humilies.

**Nasiba** (نَّاصِبَةٌ) vient de la racine n-s-b qui lie l'erection (mettre debout) et la fatigue (l'effort d'eriger epuise). D'apres les sources etymologiques, nasiba signifie s'etre fatigue, s'etre epuise. Le participe actif dit que ces visages sont en permanence epuises — la fatigue ne s'arrete pas.

La juxtaposition des deux participes sans conjonction cree un effet de simultaneite : ces visages sont a la fois en train de travailler et de s'epuiser. Le travail ne produit rien — il epuise sans resultat.

§JUSTIFICATION§
**travaillantes** — Le sens retenu est « travailler » du regroupement Action/Oeuvre. Le participe « travaillantes » est la forme la plus directe. L'alternative « agissantes » serait trop neutre. L'alternative « ouvrieres » est un nom, pas un participe.

**epuisees** — Le sens retenu est « fatigue » du regroupement Elevation/Fatigue. Le mot « epuisees » est choisi car il rend l'intensite de la fatigue — pas juste fatiguees mais epuisees, videes de toute energie. L'alternative « fatiguees » serait acceptable mais moins forte.

§CRITIQUE§
**travaillantes vs preoccupees** — Hamidullah traduit « preoccupees, accablees ». Le mot « preoccupees » vient de l'interpretation qui voit dans 'amila un travail mental (se soucier, etre preoccupe). Mais les sources etymologiques donnent '-m-l comme un travail physique et concret — travailler, agir, faire une oeuvre. « Preoccupee » est un etat mental interieur, « travaillante » est une activite visible. Le texte arabe utilise un participe actif qui decrit une action en cours, pas un etat de souci.

**epuisees vs accablees** — Hamidullah traduit « accablees ». Le mot « accablee » implique une cause exterieure (on est accable par quelque chose). Le mot arabe nasiba decrit l'epuisement qui resulte de l'effort propre — on s'epuise en travaillant. « Epuisee » rend mieux cette idee de fatigue qui vient du travail lui-meme.`
  });
  console.log('  v3 done\n');

  // ============================================================
  // VERSET 4 (5971): تَصْلَىٰ نَارًا حَامِيَةً
  // ============================================================
  console.log('--- VERSET 4 ---');

  // sly (id=1469) — تَصْلَىٰ — verbe inaccompli
  await upsertVWA(5971, 'sly', 'être exposé au feu', {
    sense_chosen: 'être exposé au feu',
    concept_chosen: 'Combustion/Châtiment',
    concepts: {
      'Combustion/Châtiment': {
        status: 'retenu',
        senses: ['brûler', 'être exposé au feu', 'rôtir', 'endurer le feu'],
        proof_ctx: "La racine s-l-y n'a qu'un seul regroupement de sens, tout entier lie au feu et a ses effets. Le verbe tasla (inaccompli, 3eme personne feminin) signifie « elle est exposee au feu, elle endure le feu ». Le sujet est wujuh (visages) du verset 2 — ces visages endurent le feu. L'inaccompli indique une action en cours ou repetee : l'exposition au feu est continue.",
        axe1_verset: "Le verbe tasla est suivi de naran (un feu) et hamiya (brulant). Le champ lexical est celui de la combustion — les visages humilies (v2), travaillants et epuises (v3), endurent maintenant un feu brulant. Chaque verset de v2 a v4 intensifie le tableau : humiliation → travail → epuisement → feu.",
        axe2_voisins: "Le verset 3 (travaillantes, epuisees) menait vers cette conclusion : le feu brulant. Le verset 5 ajoute la source bouillante. La progression v4-v5-v6-v7 detaille les conditions du chatiment : feu, eau brulante, nourriture qui ne nourrit pas.",
        axe3_sourate: "Le feu est l'element central du chatiment dans la premiere partie de la sourate. Il contraste avec le jardin eleve (v10) de la seconde partie. Le theme de la sourate est la confrontation entre le feu et le jardin — les deux destins possibles.",
        axe4_coherence: "Le Coran utilise la racine s-l-y dans de nombreux contextes de chatiment par le feu. En 4:10, « ils seront exposes (yaslauna) a un feu ardent ». En 84:12, « il sera expose (yasla) au feu ». La coherence est constante : salla/yasla est le verbe coranique specifique pour l'exposition au feu du chatiment.",
        axe5_frequence: "L'exposition au feu est la consequence ultime du manquement a la mission du khalifa. Le feu brulant est l'antithese de la terre fertile sur laquelle le khalifa devait agir — au lieu de cultiver la terre, il fait face au feu."
      }
    }
  }, 1);

  // nwr (id=349) — نَارًا — nom indefini
  await upsertVWA(5971, 'nwr', 'feu', {
    sense_chosen: 'feu',
    concept_chosen: 'Lumière/Clarté',
    concepts: {
      'Lumière/Clarté': {
        status: 'retenu',
        senses: ['lumière', 'éclairer', 'feu', 'guider par la lumière'],
        proof_ctx: "La racine n-w-r regroupe lumiere et feu sous le meme champ semantique — le feu est la source de lumiere. Le mot nar (feu) est un emploi specifique de cette racine pour designer la flamme. Dans le contexte du verset, naran (un feu, indefini) designe le feu du chatiment. Les sens isoles (Fleur, Fuir) sont completement hors contexte.",
        axe1_verset: "Le mot naran est le complement du verbe tasla (elle endure le feu). Le champ lexical est celui de la combustion. Le mot est indefini (naran, pas al-nar) — un feu, pas LE feu. L'indefini donne une dimension de grandeur : pas un feu ordinaire mais un feu (sans limite definie).",
        axe2_voisins: "Le feu de v4 est le premier element du chatiment. Il sera suivi de la source bouillante (v5) et de la nourriture epineuse (v6-7). Le feu est le cadre general dans lequel les autres elements s'inscrivent.",
        axe3_sourate: "Le feu est l'antithese du jardin (v10). La sourate oppose le feu brulant des visages humilies et le jardin eleve des visages radieux.",
        axe4_coherence: "Le Coran utilise nar de maniere constante pour le feu du chatiment. La racine n-w-r lie le feu a la lumiere — etymologiquement, le feu est ce qui eclaire. Le feu du chatiment est aussi un revelateur : il revele la verite de chacun.",
        axe5_frequence: "Le feu represente la consequence destructrice du manquement a la mission. Le khalifa qui n'a pas eclaire le monde par la justice fait face a un feu qui eclaire sa realite."
      },
      'Sens isolé/Fleur': { status: 'nul', senses: ['fleur'], proof_ctx: "Hors sujet." },
      'Sens isolé/Fuir': { status: 'nul', senses: ['fuir'], proof_ctx: "Hors sujet." }
    }
  }, 2);

  // Hmy (id=2641) — حَامِيَةً — participe actif feminin
  await upsertVWA(5971, 'Hmy', 'brûlant', {
    sense_chosen: 'brûlant',
    concept_chosen: 'Chaleur/Brûlure',
    concepts: {
      'Chaleur/Brûlure': {
        status: 'retenu',
        senses: ['être brûlant', 'chauffer intensément', 'rougir au feu', 'brûlant'],
        proof_ctx: "La racine h-m-y possede quatre regroupements de sens. Chaleur/Brulure est retenu car le mot hamiya (participe actif feminin) qualifie nar (feu) — un feu brulant. Le participe actif indique que le feu est activement en train de bruler a un degre extreme. La distinction avec Protection/Interdiction est totale : proteger est un acte dirige vers l'exterieur pour empecher une agression, bruler est un etat de chaleur extreme. Le feu ne protege pas, il brule. La Fierte/Indignation est un etat interieur (emotion) qui ne correspond pas a la qualification d'un feu physique. Le Venin/Poison est hors contexte.",
        axe1_verset: "Le mot hamiya qualifie naran (un feu). Le champ lexical est celui de la chaleur extreme — le feu n'est pas juste allume, il est brulant, a son degre maximum. Le participe actif (celle qui brule activement) insiste sur l'intensite continue de la chaleur.",
        axe2_voisins: "Le verset 5 ajoutera la source bouillante (aniya) — meme registre de chaleur extreme. Les voisins confirment que le theme est la chaleur intense et insupportable.",
        axe3_sourate: "Le feu brulant est le premier element sensoriel du chatiment dans la sourate. Il contraste avec le jardin eleve (v10) de la recompense. La chaleur extreme est l'antithese de la fraicheur du jardin.",
        axe4_coherence: "Le Coran qualifie le feu de hamiya dans d'autres passages. En 101:11, « un feu brulant (nar hamiya) » — la meme expression exacte. La coherence confirme que hamiya est l'adjectif coranique standard pour qualifier l'intensite du feu du chatiment.",
        axe5_frequence: "La chaleur extreme represente l'intensite des consequences. Le khalifa qui a manque a sa mission fait face a une realite brulante — pas tiede, pas moderee, mais brulante. L'intensite du chatiment est proportionnelle a la gravite du manquement."
      },
      'Protection/Interdiction': { status: 'nul', senses: ['protéger', 'défendre'], proof_ctx: "Le feu ne protege pas — il brule. Le contexte de chatiment exclut le sens de protection." },
      'Fierté/Indignation': { status: 'nul', senses: ['dédain', 'indignation'], proof_ctx: "Etat interieur qui ne qualifie pas un feu physique." },
      'Venin/Poison': { status: 'nul', senses: ['venin'], proof_ctx: "Hors contexte." }
    }
  }, 3);

  // VA verset 4
  await upsertVA(5971, {
    segments: [
      { fr: 'Elle endure', pos: 'V', phon: 'taslā', arabic: 'تَصْلَىٰ', word_key: 'sly', is_particle: false, sense_retenu: 'être exposé au feu', position: 1 },
      { fr: 'un feu', pos: 'N', phon: 'nāran', arabic: 'نَارًا', word_key: 'nwr', is_particle: false, sense_retenu: 'feu', position: 2 },
      { fr: 'brulant', pos: 'ADJ', phon: 'hāmiya', arabic: 'حَامِيَةً', word_key: 'Hmy', is_particle: false, sense_retenu: 'brûlant', position: 3 }
    ],
    translation_arab: "Elle endure un feu brulant",
    full_translation: "elle sera exposée à un Feu ardent",
    translation_explanation: `§DEMARCHE§
Le verbe **tasla** (تَصْلَىٰ) est a l'inaccompli (une forme qui presente l'action comme en cours ou repetee), 3eme personne du feminin singulier. Le sujet est les visages (wujuh) du verset 2. D'apres les sources etymologiques, la racine s-l-y signifie etre expose au feu, endurer la chaleur du feu. L'inaccompli indique que cette exposition est continue — pas un contact bref mais une exposition prolongee.

Le mot **naran** (نَارًا) est un nom indefini a l'accusatif (complement d'objet). D'apres les sources etymologiques, la racine n-w-r lie le feu a la lumiere — le feu est la source de lumiere. L'indefini (un feu) au lieu du defini (le feu) donne une dimension d'immensité : pas un feu delimite mais un feu sans contours precis.

Le mot **hamiya** (حَامِيَةً) est un participe actif feminin (une forme qui dit que le feu FAIT activement l'action de bruler). D'apres les sources etymologiques, la racine h-m-y dans le sens de chaleur signifie etre brulant, atteindre un degre extreme de chaleur. Le participe actif indique que le feu est a son maximum d'intensite — il brule activement et continuellement.

§JUSTIFICATION§
**endure** — Le sens retenu est « etre expose au feu » du regroupement Combustion/Chatiment. Le verbe « endurer » est choisi car il rend a la fois l'exposition au feu et la duree de cette exposition. L'alternative « brule » (elle brule dans un feu) impliquerait la destruction, alors que le texte dit qu'elle endure — elle ne se consume pas, elle subit la chaleur. L'alternative « rotir » serait trop cru.

**feu** — Le sens retenu est « feu » du regroupement Lumiere/Clarte. Le mot « feu » est le plus direct pour nar.

**brulant** — Le sens retenu est « brulant » du regroupement Chaleur/Brulure. Le mot « brulant » decrit l'intensite extreme de la chaleur. L'alternative « ardent » serait acceptable mais « brulant » est plus courant en francais quotidien.

§CRITIQUE§
**endure vs sera exposee** — Hamidullah traduit « elle sera exposee a un Feu ardent ». La construction « sera exposee a » est plus passive que « endure ». Le texte arabe utilise le verbe tasla qui signifie precisement endurer le feu — pas juste y etre expose mais le subir de maniere prolongee. « Endure » rend mieux cette idee de souffrance continue. De plus, Hamidullah met une majuscule a « Feu » — un choix editorial qui sacralise le mot, alors que le texte arabe utilise le mot courant nar (feu) sans indication de majuscule.`
  });
  console.log('  v4 done\n');

  // ============================================================
  // VERSET 5 (5972): تُسْقَىٰ مِنْ عَيْنٍ ءَانِيَةٍ
  // ============================================================
  console.log('--- VERSET 5 ---');

  // sqy (id=584) — تُسْقَىٰ — verbe passif inaccompli
  await upsertVWA(5972, 'sqy', 'abreuver', {
    sense_chosen: 'abreuver',
    concept_chosen: 'Irrigation/Don',
    concepts: {
      'Irrigation/Don': {
        status: 'retenu',
        senses: ['abreuver', 'irriguer', 'donner à boire'],
        proof_ctx: "La racine s-q-y n'a qu'un seul regroupement de sens, tout entier lie a l'acte de donner a boire. Le verbe tusqa (passif inaccompli) signifie « elles sont abreuvees » — les visages recoivent a boire. Le passif indique que l'abreuvage est subi, pas choisi. L'inaccompli indique que c'est une action continue ou repetee.",
        axe1_verset: "Le verbe tusqa est au passif (elles sont abreuvees) suivi de min 'aynin aniya (d'une source bouillante). Le champ lexical est celui de la boisson forcee — on les fait boire d'une source brulante. C'est l'inverse de l'irrigation bienfaisante : ici, l'eau fait souffrir au lieu de desalterer.",
        axe2_voisins: "Le verset 4 (feu brulant) est suivi du verset 5 (source bouillante) — le chatiment est a la fois par le feu et par l'eau. L'eau brulante est le double du feu. Le verset 6 ajoutera la nourriture epineuse — feu, eau, nourriture : les trois besoins vitaux sont retournes en chatiment.",
        axe3_sourate: "La source bouillante de v5 contraste avec le jardin eleve de v10. Le theme de la sourate oppose les elements du chatiment (feu, eau brulante, nourriture sterile) et les elements de la recompense (jardin, satisfaction).",
        axe4_coherence: "Le Coran utilise la racine s-q-y dans des contextes positifs (2:60 : les douze sources qui abreuvent) et negatifs (88:5 : l'eau brulante). La meme racine sert pour l'eau bienfaisante et l'eau brulante — c'est l'etat de l'eau qui change, pas l'acte d'abreuver.",
        axe5_frequence: "L'abreuvage brulant est le retournement de la benediction en chatiment. Le khalifa qui n'a pas partage les bienfaits recoit en retour des bienfaits retournes — l'eau qui devait desalterer brule."
      }
    }
  }, 1);

  // eyn (id=590) — عَيْنٍ — nom indefini
  await upsertVWA(5972, 'eyn', 'source', {
    sense_chosen: 'source',
    concept_chosen: 'Eau vive',
    concepts: {
      'Eau vive': {
        status: 'retenu',
        senses: ['source'],
        proof_ctx: "La racine '-y-n possede trois regroupements de sens principaux. Eau vive (source) est retenu car le mot 'ayn dans le contexte min 'aynin (d'une source) designe un point d'eau. La preposition min (de, a partir de) confirme qu'il s'agit d'un lieu d'ou vient l'eau, pas d'un oeil. Le sens Vision/Perception (oeil) ne fonctionne pas avec la preposition min dans ce contexte : « abreuvees d'un oeil bouillant » n'a pas de sens. Le test de naturalite semantique confirme : « abreuvees d'une source bouillante » est naturel, « abreuvees d'un oeil bouillant » est absurde. Le sens Identite (essence) est trop abstrait pour le contexte physique du chatiment.",
        axe1_verset: "Le mot 'ayn est precede de min (de) — « d'une source ». Le champ lexical est celui de l'eau et de l'abreuvage. La source est le point d'ou vient l'eau brulante — un lieu physique d'ou jaillit le liquide.",
        axe2_voisins: "Le verset 4 evoquait le feu, le verset 5 ajoute l'eau. La source bouillante est le pendant liquide du feu — les deux elements brulants. Le verset 6 ajoutera la nourriture.",
        axe3_sourate: "La source bouillante est un element du tableau du chatiment. Elle s'oppose implicitement aux sources du jardin (non mentionnees ici mais presentes dans d'autres sourates).",
        axe4_coherence: "Le Coran utilise 'ayn pour les sources dans de nombreux passages. En 55:50, « deux sources qui coulent ». En 76:6, « une source ou boivent les serviteurs de Dieu ». Les sources du paradis sont fraicheset agréables — la source de 88:5 est bouillante. Le contraste est coranique.",
        axe5_frequence: "La source est un element vital de la civilisation. Le khalifa qui n'a pas partage les sources de la terre recoit une source brulante."
      },
      'Vision/Perception': { status: 'nul', senses: ['œil', 'regard'], proof_ctx: "Le test de naturalite semantique echoue : « abreuvees d'un oeil bouillant » est absurde. La preposition min + le verbe tusqa imposent le sens de source." },
      'Identité': { status: 'nul', senses: ['essence'], proof_ctx: "Trop abstrait pour le contexte physique du chatiment." }
    }
  }, 3);

  // ana2 (id=2642) — ءَانِيَةٍ — participe actif feminin
  await upsertVWA(5972, 'ana2', 'bouillir', {
    sense_chosen: 'bouillir',
    concept_chosen: 'Maturité/Cuisson',
    concepts: {
      'Maturité/Cuisson': {
        status: 'retenu',
        senses: ['atteindre sa maturité', 'être cuit à point', 'bouillir', 'être brûlant', 'mûrir'],
        proof_ctx: "La racine a-n-y dans le sens temporel/maturite possede quatre regroupements. Maturite/Cuisson est retenu car le mot aniya (participe actif feminin) qualifie 'ayn (source) — une source qui a atteint son point de chaleur maximum. D'apres les sources etymologiques, le Lane's precise : « al-hamim ana — l'eau chaude est devenue chauffee au degre le plus extreme ». Le participe actif indique que la source est activement en ebullition. Les sens Temps/Echeance (le temps est venu) et Patience/Deliberation (agir avec patience) sont hors contexte — on ne qualifie pas une source de « patiente » ou « a l'heure ». Le Retard est egalement hors sujet.",
        axe1_verset: "Le mot aniya qualifie 'ayn (source). Le champ lexical est celui de la chaleur extreme des liquides — la source a atteint son point d'ebullition. Le participe actif indique un etat continu : la source bout en permanence, pas par intermittence.",
        axe2_voisins: "Le verset 4 (feu brulant) est complete par le verset 5 (source bouillante). Deux elements brulants — l'un solide (feu), l'autre liquide (eau). Le parallele renforce l'idee d'un environnement entierement hostile.",
        axe3_sourate: "La source bouillante fait partie du tableau du chatiment (v2-7). Elle contraste avec le jardin de la recompense (v10) ou tout est agreable.",
        axe4_coherence: "Le Coran utilise la racine a-n-y pour decrire l'eau brulante en 55:44 : « an (bouillant) ». Le mot aniya de 88:5 est la forme feminine du meme participe. La coherence est directe.",
        axe5_frequence: "L'eau bouillante est l'antithese de l'eau fraiche et vivifiante que le khalifa devait partager. La source bouillante est le retournement du bienfait en chatiment."
      },
      'Temps/Échéance': { status: 'nul', senses: ['le temps est venu', 'être proche'], proof_ctx: "On ne qualifie pas une source de « a l'heure » ou « ponctuelle ». Le contexte est physique (chaleur), pas temporel." },
      'Patience/Délibération': { status: 'nul', senses: ['agir avec patience'], proof_ctx: "Hors sujet — une source n'agit pas avec patience." },
      'Retard/Arriération': { status: 'nul', senses: ['être en retard'], proof_ctx: "Hors sujet." }
    }
  }, 4);

  // VA verset 5
  await upsertVA(5972, {
    segments: [
      { fr: 'Elle est abreuvee', pos: 'V', phon: 'tusqā', arabic: 'تُسْقَىٰ', word_key: 'sqy', is_particle: false, sense_retenu: 'abreuver', position: 1 },
      { fr: 'de', pos: 'P', phon: 'min', arabic: 'مِنْ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'une source', pos: 'N', phon: "'ayn", arabic: 'عَيْنٍ', word_key: 'eyn', is_particle: false, sense_retenu: 'source', position: 3 },
      { fr: 'bouillante', pos: 'ADJ', phon: 'āniya', arabic: 'ءَانِيَةٍ', word_key: 'ana2', is_particle: false, sense_retenu: 'bouillir', position: 4 }
    ],
    translation_arab: "Elle est abreuvee d'une source bouillante",
    full_translation: "elle sera abreuvée d'une source bouillante",
    translation_explanation: `§DEMARCHE§
Le verbe **tusqa** (تُسْقَىٰ) est au passif inaccompli (une forme qui dit que le sujet SUBIT l'action de maniere continue). Le sujet est toujours les visages (wujuh) du verset 2. Le passif indique que l'abreuvage est impose — ces visages ne choisissent pas de boire, on les fait boire. D'apres les sources etymologiques, la racine s-q-y signifie abreuver, donner a boire.

La preposition **min** (مِنْ) signifie « de, a partir de » et introduit l'origine de la boisson : la source.

Le mot **'ayn** (عَيْنٍ) est un nom indefini qui signifie « une source ». D'apres les sources etymologiques, la racine '-y-n couvre l'oeil, la source et l'essence. Le contexte (abreuvee de + lieu) impose le sens de source : un point d'ou jaillit l'eau.

Le mot **aniya** (ءَانِيَةٍ) est un participe actif feminin (une forme qui dit que la source FAIT activement l'action de bouillir). D'apres les sources etymologiques, la racine a-n-y dans ce sens signifie atteindre le degre extreme de chaleur. Le Lane's donne : « l'eau chaude est devenue chauffee au degre le plus extreme ». Le participe actif indique que la source est en ebullition permanente.

§JUSTIFICATION§
**abreuvee** — Le sens retenu est « abreuver » du regroupement Irrigation/Don. Le participe « abreuvee » au passif rend le passif arabe tusqa. L'alternative « on lui donne a boire » serait une periphrase acceptable mais « abreuvee » est plus concis.

**source** — Le sens retenu est « source » du regroupement Eau vive. Le mot « source » designe un point d'ou jaillit l'eau. L'alternative « oeil » ne fonctionne pas avec « abreuvee de ».

**bouillante** — Le sens retenu est « bouillir » du regroupement Maturite/Cuisson. Le mot « bouillante » est le plus naturel pour decrire une eau a temperature extreme. L'alternative « brulante » serait acceptable mais « bouillante » est plus specifique pour un liquide.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « elle sera abreuvee d'une source bouillante » — notre traduction est quasi identique. La seule difference est le temps : Hamidullah met le futur (« sera ») alors que le texte arabe utilise l'inaccompli qui decrit un etat en cours. Notre traduction garde le present pour respecter cette nuance.`
  });
  console.log('  v5 done\n');

  console.log('=== PIPELINE S88 v1-5 TERMINÉ ===');
})();
