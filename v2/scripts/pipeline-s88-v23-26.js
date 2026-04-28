// Pipeline S88 v23-26 — Étapes 3-4 : Axes + Traductions
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
  console.log('=== PIPELINE S88 v23-26 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 23 (5990): إِلَّا مَن تَوَلَّىٰ وَكَفَرَ
  // ============================================================
  console.log('--- VERSET 23 ---');

  // wly (id=599) — تَوَلَّىٰ — verbe accompli forme V
  await upsertVWA(5990, 'wly', 'se detourner', {
    sense_chosen: 'se detourner',
    concept_chosen: 'Proximite/Protection',
    concepts: {
      'Proximite/Protection': {
        status: 'retenu',
        senses: ['proche', 'ami', 'protecteur', 'allie', 'se detourner'],
        proof_ctx: "La racine w-l-y possede deux regroupements de sens. Proximite/Protection est retenu car le verbe tawalla est a la forme V (ta-fa''ala) de la racine w-l-y. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-l-y porte l'idee fondamentale de proximite — etre proche, etre l'ami, le protecteur, l'allie. La forme V (tafa''ala) est la forme reflexive qui inverse le sens de base : celui qui etait proche se detourne, celui qui etait dans la proximite s'en eloigne. Le verbe tawalla signifie donc « se detourner, tourner le dos ». Le sens choisi « se detourner » appartient au regroupement Proximite/Protection car c'est l'envers de la proximite — quitter la proximite. La distinction avec Autorite (gouverner) est que le contexte ne parle pas de gouvernance mais d'un individu (man = celui qui) qui se detourne activement. Le prefixe ta- de la forme V impose le sens reflexif de s'eloigner.",
        axe1_verset: "Le verbe tawalla est a l'accompli (action achevee) et son sujet est man (celui qui), pronom relatif indefini. Le champ lexical est celui du mouvement d'eloignement : se detourner. Le verset introduit une exception (illa = sauf) au rappel general des versets precedents — sauf celui qui se detourne et dissimule. L'accompli indique que le detournement est un acte consomme, pas une tendance. Le sujet est generique (celui qui) — c'est une categorie de personnes, pas un individu precis.",
        axe2_voisins: "Les versets 21-22 rappelaient la mission du rappeleur : rappeler, car tu n'es qu'un rappeleur, tu n'es pas un dominateur. Le verset 23 introduit l'exception — celui qui refuse le rappel en se detournant. Le verset 24 donnera la consequence de ce detournement. La structure est : mission (v21-22), exception (v23), consequence (v24). Le detournement est la reponse negative au rappel.",
        axe3_sourate: "La sourate 88 oppose les visages humilies (v2-7) et les visages radieux (v8-16), puis decrit les signes dans la creation (v17-20) et la mission du rappeleur (v21-22). Le verset 23 identifie la cause du chatiment : c'est celui qui se detourne et dissimule. Le detournement est l'acte originel qui mene aux visages humilies du debut de la sourate. La boucle se referme : le chatiment des versets 2-7 est reserve a ceux qui se detournent (v23).",
        axe4_coherence: "Le Coran utilise la racine w-l-y a la forme V (tawalla) dans de nombreux passages pour decrire le detournement. En 75:32-33, « il n'a ni confirme ni prie, mais il a dementi et tawalla (s'est detourne) ». En 92:16, « celui qui a dementi et tawalla (s'est detourne) ». La forme V tawalla est une expression coranique recurrente pour decrire le refus actif — tourner le dos au message.",
        axe5_frequence: "La proximite est le lien fondamental entre le khalifa et son Createur. Le detournement (tawalla) est la rupture de ce lien — le khalifa qui s'eloigne de la proximite divine quitte sa fonction. Se detourner, c'est choisir la distance quand la proximite etait offerte. C'est un acte volontaire (forme reflexive V) — personne n'a pousse cet individu, il s'est detourne de lui-meme."
      },
      'Autorite': { status: 'nul', senses: ['gouverner'], proof_ctx: "Le contexte ne concerne pas la gouvernance ou l'exercice du pouvoir. Le verset parle d'un individu qui se detourne du rappel, pas d'un gouverneur. La forme V (tawalla) impose le sens reflexif de s'eloigner, pas le sens transitif de gouverner." }
    }
  }, 3);

  // kfr (id=294) — وَكَفَرَ — verbe accompli
  await upsertVWA(5990, 'kfr', 'dissimuler', {
    sense_chosen: 'dissimuler',
    concept_chosen: 'Couverture/Dissimulation',
    concepts: {
      'Couverture/Dissimulation': {
        status: 'retenu',
        senses: ['couvrir', 'cacher', 'dissimuler', 'la nuit qui couvre'],
        proof_ctx: "La racine k-f-r possede six regroupements de sens. Couverture/Dissimulation est retenu car le verbe kafara a l'accompli porte le sens premier de la racine : couvrir, cacher, dissimuler. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-f-r signifie fondamentalement couvrir — le kafir est originellement « celui qui couvre » (la terre qui couvre la graine, la nuit qui couvre le jour). Le sens physique premier est l'acte de couvrir, de cacher, de dissimuler. Le verset associe tawalla (se detourner) et kafara (dissimuler) — deux mouvements d'eloignement. Se detourner est le mouvement du corps, dissimuler est le mouvement de l'esprit qui couvre la verite. Les deux verbes forment un couple coherent d'eloignement. La distinction avec Rejet/Ingratitude est que le rejet est une extension metaphorique (couvrir la verite = rejeter), tandis que la dissimulation est le sens physique premier. Le verset ne dit pas « rejeter » mais « couvrir » — l'acte de dissimuler est plus fondamental et plus coherent avec le detournement physique de tawalla.",
        axe1_verset: "Le verbe kafara est a l'accompli, coordonne par wa (et) avec tawalla (se detourner). Le champ lexical est celui de la dissimulation : celui qui se detourne ET dissimule. Les deux verbes decrivent la meme personne (man = celui qui) sous deux aspects complementaires : l'eloignement physique (tawalla) et la couverture mentale (kafara). L'accompli indique que l'acte de dissimuler est acheve — c'est un choix fait, pas une hesitation.",
        axe2_voisins: "Le verset 23 presente les deux actions de celui qui refuse le rappel : se detourner (tawalla) et dissimuler (kafara). Le verset 24 donnera la consequence : Dieu le chatie du chatiment le plus grand. L'ordre est significatif — d'abord le detournement (mouvement physique), puis la dissimulation (acte mental), puis la consequence (chatiment). La gradation est logique.",
        axe3_sourate: "La dissimulation est la cause profonde du chatiment dans la sourate. Les visages humilies (v2) le sont parce qu'ils ont dissimule. Les versets 17-20 montraient les signes evidents dans la creation — celui qui dissimule refuse de voir ces signes. La dissimulation est le refus de reconnaitre l'evident, le choix de couvrir ce qui est visible.",
        axe4_coherence: "Le Coran utilise la racine k-f-r dans de nombreux passages. Le sens premier de couvrir est visible en 57:20 ou les kuffar sont les cultivateurs (ceux qui couvrent la graine de terre). En 76:3, « qu'il soit reconnaissant ou kafir (dissimulateur) » — l'opposition est entre gratitude et dissimulation, pas entre foi et incroyance. Le sens etymologique de couverture est la base de tous les usages coraniques de cette racine.",
        axe5_frequence: "La dissimulation est l'antithese de la mission du khalifa. Le khalifa est celui qui rend visible, qui manifeste, qui transmet. Le dissimulateur est celui qui couvre, qui cache, qui refuse de transmettre. L'opposition est fondamentale : le khalifa devoile, le kafir couvre. C'est un choix actif — kafara est a l'accompli, l'acte est volontaire et acheve."
      },
      'Rejet/Ingratitude': { status: 'probable', senses: ['nier', 'etre ingrat', 'renier un bienfait', 'rejeter'], proof_ctx: "Le rejet et l'ingratitude sont des extensions metaphoriques du sens premier de couverture. Rejeter la verite, c'est la couvrir — l'idee est derivee, pas premiere. Le verset associe kafara avec tawalla (se detourner), ce qui favorise le sens physique de dissimulation (couvrir) plutot que le sens moral de rejet. Les deux sont des mouvements d'eloignement, et dissimuler est plus coherent avec se detourner que rejeter." },
      'Expiation/Reparation': { status: 'nul', senses: ['expier', 'effacer les peches'], proof_ctx: "Le sens d'expiation ne correspond pas au contexte. Le verset decrit un acte negatif (se detourner et dissimuler), pas un acte reparateur." },
      'Sens isole/Cultivateur': { status: 'nul', senses: ['cultivateur'], proof_ctx: "Le sens de cultivateur (celui qui couvre la graine de terre) est un sens technique agricole hors sujet dans le contexte du detournement et de la dissimulation." },
      'Sens isole/Goudron': { status: 'nul', senses: ['goudron'], proof_ctx: "Sens technique sans rapport avec le contexte du verset." },
      'Sens isole/Village': { status: 'nul', senses: ['village'], proof_ctx: "Sens geographique sans rapport avec le contexte du verset." }
    }
  }, 4);

  // VA verset 23
  await upsertVA(5990, {
    segments: [
      { fr: 'Sauf', pos: 'EXP', phon: 'illa', arabic: 'إِلَّا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'celui qui', pos: 'REL', phon: 'man', arabic: 'مَن', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'se detourne', pos: 'V', phon: 'tawalla', arabic: 'تَوَلَّىٰ', word_key: 'wly', is_particle: false, sense_retenu: 'se detourner', position: 3 },
      { fr: 'et dissimule', pos: 'CONJ+V', phon: 'wa-kafara', arabic: 'وَكَفَرَ', word_key: 'kfr', is_particle: false, sense_retenu: 'dissimuler', position: 4 }
    ],
    translation_arab: "Sauf celui qui se detourne et dissimule",
    full_translation: "Sauf celui qui se detourne et dissimule",
    translation_explanation: `§DEMARCHE§
La particule **illa** est une particule d'exception qui introduit une restriction a ce qui precede. Le verset 21 disait « rappelle, car tu n'es qu'un rappeleur » et le verset 22 ajoutait « tu n'es pas un dominateur sur eux ». Le verset 23 introduit l'exception : sauf celui qui se detourne et dissimule — celui-la fera face a une consequence (v24). La particule illa isole une categorie de personnes du cadre general.

Le pronom relatif **man** (celui qui) est indefini et generique — il designe une categorie, pas un individu precis. C'est « quiconque » se detourne et dissimule, sans exception. Le pronom relatif ouvre une proposition subordonnee dont les deux verbes (tawalla et kafara) sont les predicats.

Le verbe **tawalla** est a l'accompli de la forme V (ta-fa''ala) de la racine w-l-y. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-l-y signifie etre proche, etre l'allie, le protecteur. La forme V est reflexive et inverse le sens de base : tawalla signifie se detourner, s'eloigner, tourner le dos. L'accompli indique un acte acheve — le detournement est consomme, c'est un choix fait. La forme V impose le sens reflexif : le sujet se detourne lui-meme, personne ne le force.

La conjonction **wa** (et) coordonne les deux verbes — les deux actions sont simultanees ou complementaires. Se detourner ET dissimuler — les deux vont ensemble.

Le verbe **kafara** est a l'accompli de la racine k-f-r. D'apres les sources etymologiques, la racine k-f-r signifie couvrir, cacher, dissimuler. Le kafir est etymologiquement « celui qui couvre » — la terre couvre la graine, la nuit couvre le jour. Le verbe kafara a l'accompli signifie « il a dissimule, il a couvert ». Le sens premier est physique (couvrir), et le sens moral (rejeter, nier) en est derive. Dans ce verset, kafara est associe a tawalla (se detourner) — les deux sont des mouvements d'eloignement, et dissimuler (couvrir la verite) est plus coherent avec se detourner (s'eloigner physiquement) que rejeter.

§JUSTIFICATION§
**se detourne** — Le sens retenu est « se detourner » du regroupement Proximite/Protection. Le verbe « se detourner » rend la forme V reflexive de w-l-y : quitter la proximite, tourner le dos. L'alternative « tourner le dos » (Hamidullah) est un synonyme acceptable mais plus imagé. L'alternative « s'eloigner » serait plus neutre mais perdrait la dimension de refus actif.

**dissimule** — Le sens retenu est « dissimuler » du regroupement Couverture/Dissimulation. Le verbe « dissimuler » rend le sens etymologique premier de k-f-r : couvrir, cacher. L'alternative « ne croit pas » (Hamidullah) est une interpretation exegetique qui s'eloigne de l'etymologie. L'alternative « rejeter » serait plus moral mais moins etymologique. Le choix de « dissimuler » preserve le sens physique de la racine : couvrir ce qui devrait etre visible.

§CRITIQUE§
**dissimule vs ne croit pas** — Hamidullah traduit « ne croit pas ». Le verbe arabe kafara n'a pas de lien etymologique avec la croyance ou l'incroyance — il signifie couvrir, cacher, dissimuler. La traduction « ne croit pas » est une interpretation theologique qui presuppose que kafara concerne la foi, alors que l'etymologie parle de dissimulation. Le verset associe tawalla (se detourner) et kafara (dissimuler) — deux gestes d'eloignement et de couverture. Traduire par « se detourne et dissimule » preserve la coherence du couple verbal et l'ancrage etymologique de chaque racine. La traduction « tourne le dos et ne croit pas » melange un geste physique (tourner le dos) et un etat mental (ne pas croire), ce qui rompt la symetrie du texte arabe.`
  });
  console.log('  v23 done\n');

  // ============================================================
  // VERSET 24 (5991): فَيُعَذِّبُهُ ٱللَّهُ ٱلْعَذَابَ ٱلْأَكْبَرَ
  // ============================================================
  console.log('--- VERSET 24 ---');

  // eðb (id=719) — يُعَذِّبُهُ + ٱلْعَذَابَ — racine apparait 2 fois (verbe + nom)
  await upsertVWA(5991, 'eðb', 'chatier', {
    sense_chosen: 'chatier',
    concept_chosen: 'Chatiment',
    concepts: {
      'Chatiment': {
        status: 'retenu',
        senses: ['chatier', 'chatiment', 'punir', 'tourmenter'],
        proof_ctx: "La racine '-dh-b n'a qu'un seul regroupement de sens (Chatiment). Le sens est automatiquement retenu. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-dh-b signifie chatier, punir, tourmenter. La forme II (yu'adhdhibuhu) est causative — il fait subir le chatiment. Le nom al-'adhab est le chatiment lui-meme. La racine apparait deux fois dans le verset : une fois comme verbe (yu'adhdhibuhu = il le chatie) et une fois comme nom (al-'adhab = le chatiment). Cette repetition racine-verbe-nom (cognate accusative en arabe) renforce l'intensite — il le chatie DU chatiment, c'est-a-dire que l'action et son resultat sont de la meme substance. Le chatiment n'est pas arbitraire — il est la consequence directe du detournement et de la dissimulation du verset 23."
      }
    }
  }, 1);

  // lh (Allah) — ٱللَّهُ — nom propre
  // Pas de VWA pour le nom propre Allah (pas de racine analysable dans le pipeline)

  // kbr (id=451) — ٱلْأَكْبَرَ — adjectif defini superlatif
  await upsertVWA(5991, 'kbr', 'le plus grand', {
    sense_chosen: 'le plus grand',
    concept_chosen: 'Grandeur/Importance',
    concepts: {
      'Grandeur/Importance': {
        status: 'retenu',
        senses: ['etre grand', 'grandir', 'etre important', 'magnifier', 'le plus grand'],
        proof_ctx: "La racine k-b-r possede trois regroupements de sens. Grandeur/Importance est retenu car le mot al-akbar est le superlatif (af'al) de kabir (grand) — « le plus grand ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-b-r signifie etre grand, grandir, etre important. Le superlatif akbar designe le degre le plus eleve de grandeur. Dans le verset, al-akbar qualifie al-'adhab (le chatiment) — c'est le chatiment le plus grand, le plus intense, le plus important. La distinction avec Orgueil/Arrogance est que l'orgueil est un sens derive de la grandeur (se croire grand), mais ici c'est le chatiment qui est qualifie de grand, pas une personne qui s'enorgueillit. Le sens Age/Anciennete (vieillir, aine) ne correspond pas au contexte — le chatiment ne vieillit pas.",
        axe1_verset: "Le mot al-akbar est un adjectif defini au superlatif qui qualifie al-'adhab (le chatiment). Le champ lexical est celui de l'intensite maximale : le chatiment le PLUS grand, pas simplement un grand chatiment. Le superlatif indique qu'il existe des degres de chatiment et que celui-ci est le degre ultime. La construction est un accusatif adverbial (maf'ul mutlaq) — le chatiment est qualifie par le chatiment lui-meme (il le chatie du chatiment le plus grand), ce qui cree une insistance maximale.",
        axe2_voisins: "Le verset 23 decrivait la cause (se detourner et dissimuler). Le verset 24 donne la consequence (le chatiment le plus grand). Les versets 25-26 ajouteront que le retour et le compte appartiennent a Dieu. La progression est : cause (v23) → consequence (v24) → souverainete divine sur le retour et le compte (v25-26).",
        axe3_sourate: "Le chatiment le plus grand fait echo au debut de la sourate (v2-7) ou les visages sont humilies, endures, exposes au feu, abreuves a une source bouillante, nourris d'epines. Le qualificatif « le plus grand » (al-akbar) indique que tout ce qui a ete decrit dans les versets 2-7 est le chatiment le plus grand — c'est l'intensite maximale, sans degre superieur possible.",
        axe4_coherence: "Le Coran utilise l'expression al-'adhab al-akbar dans d'autres passages. En 32:21, « nous leur ferons gouter le chatiment le plus proche (al-adna) avant le chatiment le plus grand (al-akbar) ». Cette distinction entre chatiment proche et chatiment grand indique une hierarchie — le chatiment le plus grand est le chatiment ultime, definitif, apres la mort.",
        axe5_frequence: "La grandeur appliquee au chatiment est la mesure de la responsabilite du khalifa. Plus le khalifa a recu de signes et de rappels, plus son detournement est grave, et plus la consequence est grande. Le superlatif indique que la grandeur de la consequence est proportionnelle a la grandeur des signes refuses."
      },
      'Orgueil/Arrogance': { status: 'nul', senses: ['s\'enorgueillir', 'orgueil'], proof_ctx: "Le superlatif al-akbar qualifie le chatiment (al-'adhab), pas une personne. Il s'agit de la grandeur du chatiment, pas de l'orgueil d'un individu. Le sens d'arrogance est hors sujet dans ce contexte." },
      'Age/Anciennete': { status: 'nul', senses: ['vieillir', 'aine'], proof_ctx: "Le sens d'age ou d'anciennete ne correspond pas au contexte. Le chatiment n'est pas « le plus age » ou « le plus ancien » mais « le plus grand ». Le superlatif porte sur l'intensite, pas sur le temps." }
    }
  }, 4);

  // VA verset 24
  await upsertVA(5991, {
    segments: [
      { fr: 'Alors', pos: 'CONJ', phon: 'fa', arabic: 'فَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'le chatie', pos: 'V+PRON', phon: "yu'adhdhibuhu", arabic: 'يُعَذِّبُهُ', word_key: 'eðb', is_particle: false, sense_retenu: 'chatier', position: 2 },
      { fr: 'Dieu', pos: 'PN', phon: 'Allah', arabic: 'ٱللَّهُ', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'du chatiment', pos: 'N', phon: "al-'adhab", arabic: 'ٱلْعَذَابَ', word_key: 'eðb', is_particle: false, sense_retenu: 'chatier', position: 4 },
      { fr: 'le plus grand', pos: 'ADJ', phon: 'al-akbar', arabic: 'ٱلْأَكْبَرَ', word_key: 'kbr', is_particle: false, sense_retenu: 'le plus grand', position: 5 }
    ],
    translation_arab: "Alors Dieu le chatie du chatiment le plus grand",
    full_translation: "Alors Dieu le chatie du chatiment le plus grand",
    translation_explanation: `§DEMARCHE§
La conjonction **fa** (alors) est une particule de consequence qui lie le verset 24 au verset 23. En arabe, fa introduit une suite logique — si quelqu'un se detourne et dissimule (v23), alors voici la consequence (v24). La particule fa est plus forte que wa (et) — elle indique un rapport de cause a effet.

Le verbe **yu'adhdhibuhu** est a l'inaccompli de la forme II de la racine '-dh-b, suivi du pronom suffixe -hu (le). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-dh-b signifie chatier, punir, tourmenter. La forme II est causative — faire subir le chatiment. L'inaccompli indique une action certaine qui se produira — c'est un futur de certitude. Le pronom -hu (le) renvoie a man (celui qui) du verset 23.

Le nom propre **Allah** (Dieu) est le sujet du verbe yu'adhdhibuhu — c'est Dieu qui chatie. Le sujet est place apres le verbe, ce qui est l'ordre normal en arabe (verbe-sujet-objet).

Le nom **al-'adhab** (le chatiment) est a l'accusatif defini. C'est un accusatif adverbial (maf'ul mutlaq) — il chatie du chatiment, c'est-a-dire que le verbe et son complement sont de la meme racine. Cette construction dite « accusatif absolu » ou « cognate accusative » renforce l'intensite de l'action : le chatiment est total, plein, de la meme nature que l'acte de chatier.

L'adjectif **al-akbar** est le superlatif de kabir (grand), au masculin defini accusatif. D'apres les sources etymologiques, la racine k-b-r signifie etre grand, grandir. Le superlatif akbar signifie « le plus grand ». Il qualifie al-'adhab — c'est le chatiment le plus grand, le degre ultime de consequence.

§JUSTIFICATION§
**chatie** — Le sens retenu est « chatier » du regroupement Chatiment. Le verbe « chatier » est la traduction directe de la forme II 'adhdhaba. L'etymologie porte directement le sens de chatiment et punition. L'alternative « punit » serait acceptable mais « chatier » est plus soutenu en francais et rend mieux la gravite de la forme II arabe.

**chatiment** — Le meme sens est retenu pour le nom al-'adhab. La repetition verbe-nom (chatie du chatiment) est fidele a la construction arabe (accusatif absolu). L'alternative « consequence » serait moins directe que le sens etymologique.

**le plus grand** — Le sens retenu est « le plus grand » du regroupement Grandeur/Importance. Le superlatif rend directement al-akbar. L'alternative « le plus intense » ajouterait une nuance d'intensite qui n'est pas dans la racine k-b-r (grandeur, pas intensite).

§CRITIQUE§
**chatiment vs chatiera** — Hamidullah traduit « Allah le chatiera du plus grand chatiment ». La difference principale est le temps du verbe : Hamidullah met au futur (chatiera), notre traduction au present (chatie). Le verbe arabe yu'adhdhibuhu est a l'inaccompli, qui peut etre present ou futur. Dans le contexte d'une consequence certaine (apres fa), l'inaccompli arabe est un futur de certitude. Le present francais rend la certitude absolue — c'est un present gnomique, une verite permanente. Le futur de Hamidullah est aussi acceptable car il situe l'evenement dans l'avenir. Le choix du present renforce l'immuabilite de la consequence.`
  });
  console.log('  v24 done\n');

  // ============================================================
  // VERSET 25 (5992): إِنَّ إِلَيْنَآ إِيَابَهُمْ
  // ============================================================
  console.log('--- VERSET 25 ---');

  // awb (id=1236) — إِيَابَهُمْ — nom verbal + pronom
  await upsertVWA(5992, 'awb', 'retour', {
    sense_chosen: 'retour',
    concept_chosen: 'Retour/Repentir',
    concepts: {
      'Retour/Repentir': {
        status: 'retenu',
        senses: ['revenir', 'se repentir', 'retourner', 'retour'],
        proof_ctx: "La racine a-w-b n'a qu'un seul regroupement de sens (Retour/Repentir). Le sens est automatiquement retenu. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine a-w-b signifie revenir, retourner. Le mot iyab est le nom verbal (masdar) de aba-ya'ubu — il designe l'acte de retourner, le retour. Le sens choisi est « retour » (pas « repentir ») car la construction ilayina iyabahum (vers nous est leur retour) impose le sens directionnel : c'est un deplacement vers Dieu, un retour physique/ontologique, pas un acte moral de repentance. La preposition ilay (vers) + le pronom na (nous) = ilayina (vers nous) indique une destination — le retour est un mouvement vers un lieu, pas une conversion interieure. Les deux sens (retour et repentir) coexistent dans la racine, mais le contexte impose le sens directionnel."
      }
    }
  }, 3);

  // VA verset 25
  await upsertVA(5992, {
    segments: [
      { fr: 'Certes', pos: 'ACC', phon: 'inna', arabic: 'إِنَّ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'vers nous', pos: 'P+PRON', phon: 'ilayina', arabic: 'إِلَيْنَآ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'est leur retour', pos: 'N+PRON', phon: 'iyabahum', arabic: 'إِيَابَهُمْ', word_key: 'awb', is_particle: false, sense_retenu: 'retour', position: 3 }
    ],
    translation_arab: "Certes, vers nous est leur retour",
    full_translation: "Certes, vers nous est leur retour",
    translation_explanation: `§DEMARCHE§
La particule **inna** est une particule d'emphase qui ouvre la phrase et affirme avec force ce qui suit. En arabe, inna donne a la phrase une valeur de certitude absolue — ce qui suit est indiscutable. Elle regit l'accusatif sur son sujet (iyabahum est a l'accusatif). La traduction « certes » rend cette emphase en francais.

La preposition **ilay** (vers) suivie du pronom **-na** (nous) forme ilayina — « vers nous ». C'est le predicat avance (muqaddam) de la phrase nominale. En arabe, avancer le predicat (vers nous) avant le sujet (leur retour) donne une emphase supplementaire — l'important n'est pas le retour lui-meme mais sa destination : vers NOUS. La construction inna + predicat avance cree une double emphase : certes, c'est vers nous (et pas ailleurs) qu'est leur retour.

Le mot **iyabahum** est compose de iyab (nom verbal de la racine a-w-b) et du pronom suffixe -hum (leur). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine a-w-b signifie revenir, retourner. Le iyab est l'acte de retourner, le retour. La construction ilayina iyabahum signifie litteralement « vers nous [est] leur retour ». Le pronom -hum (leur) renvoie aux humains en general, pas seulement a ceux qui se detournent — le retour vers Dieu concerne tous les etres.

§JUSTIFICATION§
**retour** — Le sens retenu est « retour » du regroupement Retour/Repentir. Le nom « retour » rend directement le masdar iyab. L'alternative « repentir » est ecartee car la construction ilayina (vers nous) impose le sens directionnel — c'est un retour VERS un lieu, pas un acte moral de repentance. L'alternative « venue » serait imprecise car le retour implique un point d'origine — on revient d'ou l'on est parti.

§CRITIQUE§
**vers Nous est leur retour** — Hamidullah traduit « vers Nous est leur retour ». La traduction est quasi identique. La seule difference est la majuscule de « Nous » chez Hamidullah (usage theologique pour designer Dieu). Notre traduction utilise la minuscule car « nous » est un pronom, pas un nom propre — la majuscule est une convention theologique, pas une exigence grammaticale. Le sens est strictement le meme. La structure francaise (vers nous est leur retour) est fidele a la structure arabe (ilayina iyabahum) — predicat avance + sujet.`
  });
  console.log('  v25 done\n');

  // ============================================================
  // VERSET 26 (5993): ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُم
  // ============================================================
  console.log('--- VERSET 26 ---');

  // Hsb (id=996) — حِسَابَهُم — nom + pronom
  await upsertVWA(5993, 'Hsb', 'compte', {
    sense_chosen: 'compte',
    concept_chosen: 'Calcul/Evaluation',
    concepts: {
      'Calcul/Evaluation': {
        status: 'retenu',
        senses: ['compter', 'estimer', 'penser', 'compte', 'calcul'],
        proof_ctx: "La racine h-s-b possede trois regroupements de sens. Calcul/Evaluation est retenu car le mot hisab est le nom d'action de hasaba (compter, calculer) — il designe le compte, l'evaluation. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-s-b signifie compter, calculer, estimer. Le hisab est l'acte de compter, le compte rendu, l'evaluation. Dans le verset, hisabahum (leur compte) est le sujet de la phrase nominale dont le predicat avance est 'alayna (sur nous). La construction 'alayna hisabahum signifie « sur nous incombe leur compte » — c'est Dieu qui prend en charge l'evaluation. La distinction avec Suffisance (suffire) est que le contexte parle d'une action (compter, evaluer), pas d'une qualite (suffire). Le Sens isole/Noblesse est marginal et hors sujet.",
        axe1_verset: "Le mot hisabahum est compose de hisab (compte) et du pronom -hum (leur). Le champ lexical est celui de l'evaluation et du bilan. La preposition 'ala (sur) suivie du pronom -na (nous) = 'alayna (sur nous, a notre charge). Le predicat avance 'alayna insiste sur la responsabilite divine — c'est SUR NOUS qu'est le compte, c'est Dieu qui s'en charge. Le verset attribue a Dieu la responsabilite exclusive du compte : personne d'autre ne comptera.",
        axe2_voisins: "Le verset 25 declarait que le retour est vers Dieu. Le verset 26 ajoute que le compte est a la charge de Dieu. Les deux versets forment un couple : retour (v25) puis compte (v26). La particule thumma (ensuite, puis) indique une sequence — d'abord le retour, ensuite le compte. C'est l'ordre logique : on revient d'abord, on est evalue ensuite. Les versets 25-26 ferment la sourate par une declaration de souverainete divine.",
        axe3_sourate: "Le compte divin est la cle de voute de la sourate. Les versets 2-7 decrivaient le chatiment, les versets 8-16 la recompense, les versets 17-20 les signes, les versets 21-22 la mission du rappeleur, le verset 23 l'exception (celui qui se detourne), le verset 24 la consequence. Les versets 25-26 expliquent le mecanisme : le retour est vers Dieu et le compte Lui appartient. C'est parce que le compte est divin que la consequence du verset 24 est certaine.",
        axe4_coherence: "Le Coran utilise la racine h-s-b pour le compte divin dans de nombreux passages. En 2:284, « Dieu vous en demandera compte (yuhasibukum) ». En 69:26, « je ne pensais pas qu'on me demanderait mon compte (hisabiya) ». En 84:8, « il sera evalue d'une evaluation facile (hisaban yasira) ». Le hisab est un theme coranique majeur — l'evaluation de chaque individu est une constante du texte.",
        axe5_frequence: "Le compte est la mesure de la responsabilite du khalifa. Le khalifa recoit des ressources et des capacites — le hisab est l'evaluation de ce qu'il en a fait. Le compte n'est pas un tribunal arbitraire mais une mesure precise (hasaba = compter) de ce qui a ete donne et de ce qui a ete fait. L'evaluation divine est mathematique dans sa precision — hisab est le meme mot que « calcul »."
      },
      'Suffisance': { status: 'nul', senses: ['suffire', 'suffisant'], proof_ctx: "Le sens de suffisance ne correspond pas au contexte. Le verset parle de prendre en charge le compte (evaluation), pas de suffire a quelque chose. La construction 'alayna hisabahum (sur nous est leur compte) indique une charge, pas une suffisance." },
      'Sens isole/Noblesse': { status: 'nul', senses: ['noblesse'], proof_ctx: "Sens marginal sans rapport avec le contexte du compte et de l'evaluation divine." }
    }
  }, 3);

  // VA verset 26
  await upsertVA(5993, {
    segments: [
      { fr: 'Puis', pos: 'CONJ', phon: 'thumma', arabic: 'ثُمَّ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'certes', pos: 'ACC', phon: 'inna', arabic: 'إِنَّ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'sur nous', pos: 'P+PRON', phon: "'alayna", arabic: 'عَلَيْنَا', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'est leur compte', pos: 'N+PRON', phon: 'hisabahum', arabic: 'حِسَابَهُم', word_key: 'Hsb', is_particle: false, sense_retenu: 'compte', position: 4 }
    ],
    translation_arab: "Puis certes, sur nous est leur compte",
    full_translation: "Puis certes, sur nous est leur compte",
    translation_explanation: `§DEMARCHE§
La conjonction **thumma** (puis, ensuite) introduit une sequence temporelle apres le verset 25. En arabe, thumma indique un intervalle — c'est « ensuite, apres cela ». Contrairement a fa (alors, consequence immediate), thumma implique une etape distincte. D'abord le retour vers Dieu (v25), puis le compte (v26) — deux etapes successives, pas simultanees.

La particule **inna** est a nouveau une particule d'emphase qui affirme avec certitude ce qui suit. La repetition de inna dans les versets 25 et 26 (inna ilayina iyabahum, thumma inna 'alayna hisabahum) cree un parallele structure — les deux declarations sont de meme poids, de meme certitude. Certes le retour est vers nous, puis certes le compte est sur nous.

La preposition **'ala** (sur) suivie du pronom **-na** (nous) forme 'alayna — « sur nous ». C'est le predicat avance de la phrase nominale. La preposition 'ala indique une charge, une responsabilite — le compte est « sur nous », c'est-a-dire a notre charge, sous notre responsabilite. L'avancement du predicat (sur nous) avant le sujet (leur compte) insiste sur la responsabilite divine — c'est SUR NOUS, et personne d'autre, qu'incombe le compte.

Le mot **hisabahum** est compose de hisab (compte, calcul) et du pronom suffixe -hum (leur). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-s-b signifie compter, calculer, estimer. Le hisab est le compte, l'evaluation, le bilan. Le pronom -hum (leur) renvoie a tous les humains — le compte divin concerne chacun, pas seulement ceux qui se detournent.

§JUSTIFICATION§
**compte** — Le sens retenu est « compte » du regroupement Calcul/Evaluation. Le nom « compte » rend directement hisab dans son sens d'evaluation et de bilan. L'alternative « calcul » serait trop technique. L'alternative « jugement » ajouterait une connotation judiciaire absente de l'etymologie — hisab est un calcul, pas un jugement. L'alternative « evaluation » serait acceptable mais moins courant en francais pour ce contexte.

§CRITIQUE§
**sur nous est leur compte vs c'est a Nous de leur demander compte** — Hamidullah traduit « ensuite, c'est a Nous de leur demander compte ». La traduction de Hamidullah est une periphrase interpretative — « c'est a Nous de leur demander compte » ajoute le verbe « demander » qui n'est pas dans le texte arabe. Le texte arabe dit litteralement « sur nous [est] leur compte » ('alayna hisabahum) — c'est une phrase nominale sans verbe. Notre traduction « sur nous est leur compte » preserve la structure nominale arabe et evite d'ajouter un verbe absent du texte. La construction arabe est plus forte dans sa simplicite : le compte EXISTE sur nous, il n'est pas « demande » — il est inherent, il est la par nature.`
  });
  console.log('  v26 done\n');

  console.log('=== PIPELINE S88 v23-26 TERMINE ===');
})();
