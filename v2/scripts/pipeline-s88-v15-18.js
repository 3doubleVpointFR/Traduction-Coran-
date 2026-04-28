// Pipeline S88 v15-18 — Étapes 3-4 : Axes + Traductions
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
  console.log('=== PIPELINE S88 v15-18 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 15 (5982): وَنَمَارِقُ مَصْفُوفَةٌ
  // ============================================================
  console.log('--- VERSET 15 ---');

  // نَمَارِقُ — nom pluriel, PAS DE RACINE dans QAC (coussins/oreillers, pluriel de namruqa)
  // Pas de VWA car word_key: null

  // sff (id=2075) — مَصْفُوفَةٌ — participe passif feminin
  await upsertVWA(5982, 'sff', 'ranger', {
    sense_chosen: 'ranger',
    concept_chosen: 'Ordre/Alignement',
    concepts: {
      'Ordre/Alignement': {
        status: 'retenu',
        senses: ['ranger', 'aligner', 'rang', 'file', 'ceux qui sont ranges'],
        proof_ctx: "La racine s-f-f ne possede qu'un seul regroupement de sens (Ordre/Alignement). Le mot masfufa est un participe passif feminin — « rangees, qui ont ete rangees ». Le participe passif indique que les coussins ont SUBI l'action d'etre ranges — quelqu'un les a alignes, disposes en ordre. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-f-f signifie ranger en file, aligner, disposer en rang. Le sens est automatiquement retenu car c'est le seul regroupement de la racine. Le contexte du jardin (lits v13, gobelets v14, coussins v15, tapis v16) confirme un amenagement ordonne et soigne.",
        axe1_verset: "Le mot masfufa qualifie namariq (coussins). Le champ lexical est celui de l'arrangement ordonne : des coussins ranges en ligne, alignes. Le participe passif indique que l'alignement n'est pas naturel mais realise — quelqu'un a dispose les coussins avec soin, en rangs reguliers. L'image est celle d'un interieur soigneusement amenage ou chaque element est a sa place. Les coussins ne sont pas jetes au hasard mais ranges en ordre, ce qui evoque un luxe organise.",
        axe2_voisins: "Le verset 14 decrivait des gobelets poses (mawdu'a). Le verset 15 ajoute des coussins ranges (masfufa). Le verset 16 ajoutera des tapis deployes (mabthuthha). La progression est celle des textiles : coussins (pour s'appuyer) puis tapis (pour couvrir le sol). Les coussins accompagnent les lits eleves du verset 13 — ils completent l'assise, ajoutant le confort au prestige.",
        axe3_sourate: "Les coussins ranges font partie du tableau detaille de la recompense (v8-16). La sourate enumere methodiquement les elements du jardin : source (v12), lits (v13), gobelets (v14), coussins (v15), tapis (v16). L'ordre et l'alignement des coussins contrastent avec le desordre et la desolation du chatiment (v2-7) ou il n'y a que des epines et de l'eau bouillante. Le jardin est un lieu d'ordre et de beaute, le chatiment est un lieu de privation.",
        axe4_coherence: "Le Coran utilise la racine s-f-f dans d'autres contextes d'alignement. En 37:1, « par ceux qui sont ranges en rangs (saffat) ». En 61:4, « ceux qui combattent en rangs (saffan) ». L'idee de rangee et d'ordre est constante dans l'usage coranique de cette racine. Appliquee aux coussins, elle evoque un interieur organise avec la meme rigueur que les rangs de la priere ou du combat.",
        axe5_frequence: "L'alignement des coussins est un signe de civilisation et de soin. Le khalifa qui a organise et mis de l'ordre dans ses responsabilites terrestres se retrouve dans un lieu ou tout est range, ordonne, prepare. L'ordre du jardin est la recompense de l'ordre moral et social maintenu sur terre."
      }
    }
  }, 2);

  // VA verset 15
  await upsertVA(5982, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'des coussins', pos: 'N', phon: 'namariq', arabic: 'نَمَارِقُ', word_key: null, is_particle: false, sense_retenu: null, position: 2 },
      { fr: 'ranges', pos: 'ADJ', phon: 'masfufa', arabic: 'مَصْفُوفَةٌ', word_key: 'sff', is_particle: false, sense_retenu: 'ranger', position: 3 }
    ],
    translation_arab: "Et des coussins ranges",
    full_translation: "et des coussins alignes",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie le verset 15 au verset 14. L'enumeration se poursuit : apres les gobelets poses, les coussins ranges. La conjonction wa ajoute chaque element au tableau du jardin comme une touche supplementaire de confort.

Le mot **namariq** est un nom pluriel indefini au nominatif. C'est le pluriel brise de namruqa (coussin, oreiller). Ce mot n'a pas de racine dans le systeme QAC (Quranic Arabic Corpus). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), namariq designe des coussins ou des oreillers sur lesquels on s'appuie ou on s'accoude. Le pluriel indefini indique une abondance — des coussins en nombre, autant qu'il en faut pour le confort.

Le mot **masfufa** est un participe passif feminin (une forme qui dit que le sujet A SUBI l'action d'etre range). D'apres les sources etymologiques, la racine s-f-f signifie ranger en file, aligner, disposer en rang ordonne. Le participe passif indique que les coussins ont ete ranges par quelqu'un — ils ne sont pas jetes au hasard mais disposes en ligne avec soin. L'accord feminin suit la regle des pluriels brises non-humains traites comme feminins singuliers en arabe.

§JUSTIFICATION§
**coussins** — Le mot namariq est traduit par « coussins » car c'est le sens direct du pluriel de namruqa. L'alternative « oreillers » est proche mais evoque davantage le sommeil, tandis que « coussins » evoque l'assise et l'accoudoir, plus en accord avec les lits eleves du verset 13.

**ranges** — Le sens retenu est « ranger » du regroupement Ordre/Alignement. Le mot « ranges » rend directement le participe passif masfufa. L'alternative « alignes » est quasi synonyme et serait egalement acceptable. Le choix de « ranges » insiste sur l'idee d'ordre et de disposition soignee plutot que sur la seule linearite geometrique.

§CRITIQUE§
**ranges vs alignes** — Hamidullah traduit « des coussins ranges ». La traduction retenue concorde avec Hamidullah sur ce point. La racine s-f-f evoque a la fois le rang (file) et l'action de ranger (mettre en ordre). Le mot « ranges » en francais capture bien cette double dimension — des coussins mis en ordre et disposes en rang. « Alignes » insisterait davantage sur la geometrie (en ligne droite), ce qui est un aspect plus restreint de la racine. Le choix de « ranges » est le plus fidele a l'amplitude semantique de s-f-f.`
  });
  console.log('  v15 done\n');

  // ============================================================
  // VERSET 16 (5983): وَزَرَابِىُّ مَبْثُوثَةٌ
  // ============================================================
  console.log('--- VERSET 16 ---');

  // زَرَابِىُّ — nom pluriel, PAS DE RACINE dans QAC (tapis/moquettes, pluriel de zurbiyya)
  // Pas de VWA car word_key: null

  // bth (id=934) — مَبْثُوثَةٌ — participe passif feminin
  await upsertVWA(5983, 'bth', 'deployer', {
    sense_chosen: 'deployer',
    concept_chosen: 'Dispersion/Diffusion',
    concepts: {
      'Dispersion/Diffusion': {
        status: 'retenu',
        senses: ['disperser', 'repandre', 'disseminer', 'divulguer'],
        proof_ctx: "La racine b-th-th possede deux regroupements de sens. Dispersion/Diffusion est retenu car le mot mabthuthha est un participe passif feminin — « deployes, repandus, eparpilles ». Le participe passif indique que les tapis ont SUBI l'action d'etre deployes — quelqu'un les a etendus sur le sol. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine b-th-th signifie disperser, repandre, disseminer. Le sens applique aux tapis est celui de deployer, etendre sur une surface. Les tapis sont deployes partout, repandus dans tout le jardin — l'image est celle d'une couverture textile complete du sol. La distinction avec Affliction interieure (chagrin, confier sa peine) est que l'affliction est un etat emotionnel negatif, completement hors sujet dans un tableau de recompense paradisiaque ou les visages sont radieux et satisfaits.",
        axe1_verset: "Le mot mabthuthha qualifie zarabi (tapis). Le champ lexical est celui du deploiement textile : des tapis etendus sur le sol, repandus partout. Le participe passif indique que les tapis ont ete deployes par quelqu'un — un service a ete rendu, le sol a ete couvert de tapis riches. L'idee de dispersion ajoute une dimension d'abondance : les tapis ne sont pas concentres en un point mais repandus dans tout l'espace, couvrant genereuseusement le sol du jardin.",
        axe2_voisins: "Le verset 15 decrivait des coussins ranges (masfufa — en ordre). Le verset 16 decrit des tapis deployes (mabthuthha — repandus). Le contraste est interessant : les coussins sont ranges en ordre, les tapis sont deployes partout. L'ordre des coussins et la profusion des tapis se completent — precision et abondance. Le verset 16 ferme l'enumeration du mobilier du jardin avant la transition vers les questions rhetoriques (v17-18).",
        axe3_sourate: "Les tapis deployes sont le dernier element du tableau de la recompense (v8-16). Apres la source (v12), les lits (v13), les gobelets (v14), les coussins (v15), les tapis (v16) completent le decor. La sourate passe ensuite a un registre totalement different : les questions rhetoriques sur la creation (v17-20). Les tapis deployes ferment la description du jardin sur une note d'abondance et de luxe.",
        axe4_coherence: "Le Coran utilise la racine b-th-th dans d'autres contextes de dispersion. En 2:164, « les betes qu'Il a disseminees (baththa) » sur terre. En 4:1, « Il a repandu (baththa) a partir d'eux des hommes et des femmes en grand nombre ». L'idee de dispersion abondante est constante — appliquee aux tapis, elle signifie des tapis deployes partout, en abondance, couvrant tout l'espace disponible.",
        axe5_frequence: "Les tapis deployes completent le confort total du jardin. Le sol est couvert de textiles riches — rien n'est laisse nu ou brut. Le khalifa qui a travaille a civiliser la terre (la recouvrir de justice, de construction, de culture) se retrouve dans un lieu ou la terre elle-meme est recouverte de beaute. La profusion des tapis est la recompense de l'effort civilisateur."
      },
      'Affliction interieure': { status: 'nul', senses: ['chagrin', 'confier sa peine'], proof_ctx: "Le chagrin et l'affliction sont des etats emotionnels negatifs. Le contexte est celui d'un jardin paradisiaque ou les visages sont radieux (v8) et satisfaits (v9). L'affliction est completement hors sujet dans cette description de recompense." }
    }
  }, 2);

  // VA verset 16
  await upsertVA(5983, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'des tapis', pos: 'N', phon: 'zarabi', arabic: 'زَرَابِىُّ', word_key: null, is_particle: false, sense_retenu: null, position: 2 },
      { fr: 'deployes', pos: 'ADJ', phon: 'mabthuthha', arabic: 'مَبْثُوثَةٌ', word_key: 'bth', is_particle: false, sense_retenu: 'deployer', position: 3 }
    ],
    translation_arab: "Et des tapis deployes",
    full_translation: "et des tapis etendus",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie le verset 16 au verset 15. L'enumeration se poursuit et se conclut : apres les coussins ranges, les tapis deployes. C'est le dernier element du mobilier du jardin avant la transition vers les questions rhetoriques sur la creation.

Le mot **zarabi** est un nom pluriel indefini au nominatif. C'est le pluriel brise de zurbiyya (tapis, moquette). Ce mot n'a pas de racine dans le systeme QAC (Quranic Arabic Corpus). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), zarabi designe des tapis richement tisses, des moquettes de sol. Le pluriel indefini indique une abondance — des tapis partout, couvrant genereuseusement le sol.

Le mot **mabthuthha** est un participe passif feminin (une forme qui dit que le sujet A SUBI l'action d'etre deploye/repandu). D'apres les sources etymologiques, la racine b-th-th signifie disperser, repandre, disseminer. Applique aux tapis, le sens est celui de deployer sur le sol, etendre partout. Le participe passif indique que les tapis ont ete deployes par quelqu'un — un service prepare. L'idee de dispersion ajoute l'abondance : les tapis sont repandus dans tout l'espace, pas concentres en un seul endroit. L'accord feminin suit la regle des pluriels brises non-humains.

§JUSTIFICATION§
**tapis** — Le mot zarabi est traduit par « tapis » car c'est le sens direct du pluriel de zurbiyya. L'alternative « moquettes » est trop moderne et evoque un materiau industriel. L'alternative « carpettes » est diminutif et ne rend pas le luxe implique par le contexte paradisiaque.

**deployes** — Le sens retenu est « deployer » du regroupement Dispersion/Diffusion. Le mot « deployes » est choisi car il rend l'idee de tapis etendus sur le sol avec une connotation d'ampleur et de largeur. L'alternative « disperses » serait trop desordonne pour des tapis. L'alternative « eparpilles » suggererait un desordre incompatible avec l'image d'un jardin soigne. « Deployes » est le mot qui concilie dispersion et elegance.

§CRITIQUE§
**etendus vs deployes** — Hamidullah traduit « des tapis etendus ». Le mot « etendus » insiste sur l'action d'etendre a plat. Le mot « deployes » ajoute une dimension d'ouverture et d'ampleur — on deploie quelque chose qui etait plie. La racine b-th-th evoque davantage la dispersion (repandre partout) que le simple fait d'etendre. Le choix de « deployes » rend mieux l'idee d'abondance et de diffusion dans l'espace que « etendus » qui est plus statique. Cependant, les deux mots sont proches et rendent fidelement le sens du verset.`
  });
  console.log('  v16 done\n');

  // ============================================================
  // VERSET 17 (5984): أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ
  // ============================================================
  console.log('--- VERSET 17 ---');

  // nzr (id=522) — يَنظُرُونَ — verbe inaccompli 3e pluriel
  await upsertVWA(5984, 'nzr', 'regarder', {
    sense_chosen: 'regarder',
    concept_chosen: 'Regard/Contemplation',
    concepts: {
      'Regard/Contemplation': {
        status: 'retenu',
        senses: ['regarder', 'voir', 'contempler', 'considerer'],
        proof_ctx: "La racine n-z-r possede deux regroupements de sens. Regard/Contemplation est retenu car le verbe yanzuruna (ils regardent) est a l'inaccompli de la 3e personne du pluriel, precede de a-fa-la (interrogation + alors + negation) et suivi de ila (vers). La construction a-fa-la yanzuruna ila est une question rhetorique : « ne regardent-ils donc pas vers... ? ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-z-r signifie regarder, voir, contempler, considerer avec attention. Le sens est celui du regard attentif et reflechi — pas un simple coup d'oeil mais une observation contemplative. La distinction avec Attente (attendre, delai) est que l'attente est un sens derive de l'idee de regarder vers l'avenir, mais ici le verbe est suivi de ila (vers) + un objet concret (les chameaux), ce qui impose le sens de regarder/contempler un objet physique, pas d'attendre un evenement futur.",
        axe1_verset: "Le verbe yanzuruna est le verbe principal du verset, precede de la particule interrogative a-fa-la. Le champ lexical est celui de l'observation et de la reflexion : regarder vers un objet pour comprendre sa creation. La construction a-fa-la (est-ce-que + alors + ne pas) forme une question rhetorique qui interpelle les negateurs — ne regardent-ils donc pas ? L'objet du regard est al-ibil (les chameaux), suivi de kayfa khuliqat (comment ils ont ete crees). Le verset invite a un regard contemplatif qui mene a la connaissance de la creation.",
        axe2_voisins: "Le verset 17 marque une rupture nette avec les versets 15-16 (mobilier du jardin). On passe de la description du paradis a une serie de questions rhetoriques sur la creation. Les versets 17-20 forment un ensemble : chameaux (v17), ciel (v18), montagnes (v19), terre (v20). Le verset 17 ouvre cette serie par l'element le plus proche de l'experience quotidienne des premiers destinataires — les chameaux, animaux centraux de la vie dans la peninsule arabique.",
        axe3_sourate: "La sourate passe du tableau eschatologique (chatiment v2-7, recompense v8-16) a une interpellation directe des negateurs (v17-20). Le regard contemplatif est l'outil par lequel le negateur peut sortir de son erreur — s'il regarde les chameaux, le ciel, les montagnes et la terre, il devrait comprendre qu'une creation aussi complexe ne peut etre sans Createur. Les questions rhetoriques servent de pont entre la description du Jour du Jugement et l'appel a la reflexion.",
        axe4_coherence: "Le Coran utilise frequemment la racine n-z-r pour inviter a l'observation contemplative de la creation. En 7:185, « ne regardent-ils pas (yanzuru) dans le royaume des cieux et de la terre ? ». En 50:6, « ne regardent-ils pas (yanzuru) vers le ciel au-dessus d'eux ? ». Le regard contemplatif vers la creation est un theme coranique recurrent — observer la creation pour y reconnaitre les signes du Createur.",
        axe5_frequence: "Le regard est le premier outil de connaissance du khalifa. Avant de parler, d'agir ou de juger, il regarde — il observe le monde pour le comprendre. L'invitation a regarder les chameaux est une invitation a exercer cette faculte fondamentale. Le khalifa qui refuse de regarder se prive de la connaissance la plus elementaire — celle qui vient de l'observation directe de la creation."
      },
      'Attente': { status: 'nul', senses: ['attendre', 'delai'], proof_ctx: "Le verbe yanzuruna est suivi de ila (vers) + al-ibil (les chameaux) — c'est un regard dirige vers un objet physique, pas une attente. Le sens d'attendre serait possible si le verbe etait suivi de ila + un evenement futur, mais ici l'objet est concret et present." }
    }
  }, 2);

  // abl (id=1851) — ٱلْإِبِلِ — nom defini genitif
  await upsertVWA(5984, 'abl', 'chameau', {
    sense_chosen: 'chameau',
    concept_chosen: 'Chameau/Transport',
    concepts: {
      'Chameau/Transport': {
        status: 'retenu',
        senses: ['chameau'],
        proof_ctx: "La racine '-b-l ne possede qu'un seul regroupement de sens pertinent (Chameau/Transport). Le mot al-ibil est un nom defini au genitif (apres ila). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ibil designe les chameaux en tant que genre — l'espece cameline dans son ensemble. C'est un nom collectif qui englobe tous les chameaux, males et femelles. Le defini (al-) indique que le verset parle des chameaux en general, comme espece, pas de chameaux particuliers. Le sens est automatiquement retenu car c'est le seul regroupement de la racine. Le chameau est l'exemple choisi par le Coran pour illustrer la perfection de la creation — animal remarquablement adapte a son environnement, capable de traverser des deserts sans eau, de porter des charges enormes, et de resister a des conditions extremes.",
        axe1_verset: "Le mot al-ibil est l'objet du regard contemplatif (yanzuruna ila). Le champ lexical est celui de la creation divine : chameaux (v17), ciel (v18), montagnes (v19), terre (v20). Les chameaux sont le premier element de cette enumeration — l'element le plus concret et le plus proche de la vie quotidienne des premiers destinataires. Le verset interroge : comment les chameaux ont-ils ete crees ? La question porte sur le « comment » (kayfa) — c'est une invitation a etudier la mecanique de la creation.",
        axe2_voisins: "Le verset 17 ouvre la serie des quatre questions rhetoriques (v17-20). Les chameaux (v17) sont suivis du ciel (v18), des montagnes (v19) et de la terre (v20). La progression va du plus proche (le chameau que l'on touche et monte) au plus lointain (la terre sur laquelle tout repose). Les chameaux sont l'accroche — l'objet familier qui amorce la reflexion.",
        axe3_sourate: "La mention des chameaux est inattendue apres la description du paradis. La sourate 88 passe brutalement du mobilier du jardin (tapis, coussins) aux chameaux du desert. Ce contraste est delibere — il ramene le destinataire du monde de l'au-dela au monde d'ici-bas, de la vision eschatologique a l'observation quotidienne. Le chameau est le pont entre les deux mondes : un signe de la creation visible ici et maintenant.",
        axe4_coherence: "Le Coran mentionne les chameaux dans d'autres passages comme exemples de la creation. En 36:71-73, les animaux domestiques (y compris les chameaux) sont cites comme signes. En 22:36, les chameaux sont mentionnes dans le contexte du sacrifice. Le chameau est un animal emblematique de la culture coranique — il est a la fois outil de transport, source de nourriture et signe de la creation.",
        axe5_frequence: "Le chameau est l'animal qui porte le khalifa a travers le desert — il est l'instrument de la mission civilisatrice. Le khalifa qui observe le chameau avec attention y decouvre un signe de la sagesse du Createur : un animal capable de survivre sans eau, de porter des charges immenses, de s'agenouiller pour etre charge puis de se lever. Cette merveille d'ingenierie naturelle devrait suffire a convaincre l'observateur attentif."
      }
    }
  }, 4);

  // xlq (id=344) — خُلِقَتْ — verbe passif accompli 3e feminin singulier
  await upsertVWA(5984, 'xlq', 'creer', {
    sense_chosen: 'creer',
    concept_chosen: 'Creation/Production',
    concepts: {
      'Creation/Production': {
        status: 'retenu',
        senses: ['creer', 'creation', 'creature', 'faconner', 'nature', 'caractere'],
        proof_ctx: "La racine kh-l-q possede trois regroupements de sens. Creation/Production est retenu car le verbe khuliqat est au passif accompli 3e feminin singulier — « elle a ete creee / comment elle a ete creee ». Le passif divin (passif sans agent exprime) est une construction coranique classique ou l'agent est Dieu sans etre nomme. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine kh-l-q signifie creer, produire, faconner — donner l'existence a ce qui n'existait pas. Le verbe au passif accompli indique que la creation est un fait acheve — les chameaux ont ete crees, c'est un acte termine dont le resultat est observable. La distinction avec Lisse (lisse, uni) est que la lissite est un sens derive marginal de l'idee de faconner une surface. Le sens Mensonge (mensonge, invention) est un sens derive de l'idee de « creer » une fausse realite — hors sujet dans le contexte de la creation divine reelle.",
        axe1_verset: "Le verbe khuliqat est le verbe de la proposition interrogative kayfa khuliqat (comment elle a ete creee). Le champ lexical est celui de l'acte createur divin. Le mot kayfa (comment) oriente le regard vers le processus de creation — pas seulement le resultat (les chameaux existent) mais la maniere (comment ils ont ete faits). Le passif accompli indique un acte acheve et parfait — la creation des chameaux est un fait accompli dont la perfection est observable.",
        axe2_voisins: "Le verset 17 pose la premiere question (creation des chameaux). Les versets 18-20 poseront les memes questions pour le ciel, les montagnes et la terre — tous avec le meme passif divin (khuliqat, rufi'at, nusibat, sutihat). La repetition de la structure kayfa + passif accompli cree un rythme rhetoriquement puissant.",
        axe3_sourate: "La creation divine est invoquee comme argument apres la description du Jour du Jugement. Le raisonnement implicite est : si Dieu a pu creer les chameaux, le ciel, les montagnes et la terre, Il peut aussi ressusciter les morts et juger les hommes. La creation visible est la preuve de la puissance divine et donc la garantie de l'eschatologie annoncee en debut de sourate.",
        axe4_coherence: "Le Coran utilise massivement la racine kh-l-q pour decrire l'acte createur. En 96:1-2, « Lis au nom de ton Seigneur qui a cree (khalaqa), qui a cree (khalaqa) l'homme d'une adherence ». En 36:81, « Celui qui a cree (khalaqa) les cieux et la terre n'est-Il pas capable de creer (yakhluqa) leurs semblables ? ». La creation est l'attribut divin par excellence dans le Coran.",
        axe5_frequence: "La creation est l'acte fondateur de toute existence. Le khalifa qui observe la creation avec attention y trouve les signes de la sagesse divine. L'invitation a regarder comment les chameaux ont ete crees est une invitation a exercer la raison — l'outil par lequel le khalifa comprend le monde et accomplit sa mission."
      },
      'Sens isole/Lisse': { status: 'nul', senses: ['lisse'], proof_ctx: "Le sens de lissite est un sens derive marginal de l'idee de faconner une surface unie. Il n'a aucun rapport avec le contexte de la creation des chameaux — le verset parle de l'acte createur, pas de la texture d'une surface." },
      'Sens isole/Mensonge': { status: 'nul', senses: ['mensonge'], proof_ctx: "Le sens de mensonge (inventer une fausse realite) est un sens derive de « creer » au sens figure. Le verset parle de la creation reelle des chameaux par Dieu — pas d'une invention fictive. Le passif divin exclut toute idee de mensonge." }
    }
  }, 6);

  // VA verset 17
  await upsertVA(5984, {
    segments: [
      { fr: 'Ne', pos: 'INTG+NEG', phon: 'a-fa-la', arabic: 'أَفَلَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'regardent-ils pas', pos: 'V', phon: 'yanzuruna', arabic: 'يَنظُرُونَ', word_key: 'nzr', is_particle: false, sense_retenu: 'regarder', position: 2 },
      { fr: 'vers', pos: 'P', phon: 'ila', arabic: 'إِلَى', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'les chameaux', pos: 'N', phon: 'al-ibil', arabic: 'ٱلْإِبِلِ', word_key: 'abl', is_particle: false, sense_retenu: 'chameau', position: 4 },
      { fr: 'comment', pos: 'INTG', phon: 'kayfa', arabic: 'كَيْفَ', word_key: null, is_particle: true, sense_retenu: null, position: 5 },
      { fr: 'ils ont ete crees', pos: 'V', phon: 'khuliqat', arabic: 'خُلِقَتْ', word_key: 'xlq', is_particle: false, sense_retenu: 'creer', position: 6 }
    ],
    translation_arab: "Ne regardent-ils pas les chameaux, comment ils ont ete crees",
    full_translation: "Ne regardent-ils pas les chameaux, comment ils ont ete crees ?",
    translation_explanation: `§DEMARCHE§
La particule **a** est un hamza interrogatif qui ouvre une question. La particule **fa** (alors, donc) lie cette question a ce qui precede — elle indique une consequence logique : apres avoir entendu la description du Jour du Jugement et du jardin, « alors » ne regardent-ils pas la creation ? La particule **la** est une negation. L'ensemble a-fa-la forme une question rhetorique negative : « est-ce-que alors ne pas... ? », c'est-a-dire « ne ... donc pas ? ».

Le verbe **yanzuruna** est a l'inaccompli de la 3e personne du masculin pluriel. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-z-r signifie regarder, voir, contempler avec attention. L'inaccompli indique une action en cours ou repetee — regardent-ils habituellement ? Le sujet « ils » designe les negateurs, ceux qui ne croient pas au Jour du Jugement decrit en debut de sourate. La preposition ila (vers) oriente le regard vers un objet specifique.

Le mot **al-ibil** est un nom defini collectif au genitif (apres ila). D'apres les sources etymologiques, ibil designe les chameaux comme espece — le genre camelin dans son ensemble. Le defini (al-) indique qu'il s'agit des chameaux en general, comme categorie de creation. Le chameau est choisi car c'est l'animal le plus remarquable de l'environnement des premiers destinataires — un animal aux capacites extraordinaires d'adaptation.

Le mot **kayfa** est un interrogatif signifiant « comment ». Il introduit la question sur le processus de creation — pas « pourquoi » (la finalite) ni « quand » (le moment) mais « comment » (la maniere). L'attention est dirigee vers le mecanisme de la creation.

Le verbe **khuliqat** est au passif accompli 3e feminin singulier. D'apres les sources etymologiques, la racine kh-l-q signifie creer, faconner, donner l'existence. Le passif sans agent exprime (passif divin) est une construction coranique ou l'agent (Dieu) est implicite. Le feminin singulier s'accorde avec ibil (nom collectif traite comme feminin). L'accompli indique que la creation est un fait acheve et observable.

§JUSTIFICATION§
**regardent-ils** — Le sens retenu est « regarder » du regroupement Regard/Contemplation. Le verbe « regarder » rend directement le sens de yanzuruna + ila. L'alternative « considerer » (comme chez Hamidullah) ajoute une nuance de reflexion intellectuelle qui va au-dela du sens premier de n-z-r. Le verbe « regarder » est plus direct et physique — il invite d'abord a l'observation, qui mene ensuite a la reflexion.

**chameaux** — Le sens retenu est « chameau » du regroupement Chameau/Transport. Le mot « chameaux » rend directement ibil. Il n'y a pas d'alternative pertinente — ibil designe specifiquement les chameaux.

**crees** — Le sens retenu est « creer » du regroupement Creation/Production. Le verbe « creer » rend directement le passif khuliqat. L'alternative « faconner » insisterait sur la forme et l'apparence, tandis que « creer » est plus general et inclut tout l'acte de donner l'existence.

§CRITIQUE§
**considerer vs regarder** — Hamidullah traduit « Ne considerent-ils donc pas les chameaux ». Le verbe « considerer » ajoute une dimension intellectuelle que le verbe arabe n-z-r ne porte pas en premier lieu. La racine n-z-r signifie d'abord regarder physiquement — la reflexion vient ensuite, comme consequence du regard. La traduction « regarder » conserve cette progression naturelle : d'abord on regarde, puis on comprend. Le « donc » de Hamidullah rend bien le fa de a-fa-la — c'est une consequence logique.`
  });
  console.log('  v17 done\n');

  // ============================================================
  // VERSET 18 (5985): وَإِلَى ٱلسَّمَآءِ كَيْفَ رُفِعَتْ
  // ============================================================
  console.log('--- VERSET 18 ---');

  // smw (id=249) — ٱلسَّمَآءِ — nom defini genitif
  await upsertVWA(5985, 'smw', 'ciel', {
    sense_chosen: 'ciel',
    concept_chosen: 'Ciel/Ce qui couvre',
    concepts: {
      'Ciel/Ce qui couvre': {
        status: 'retenu',
        senses: ['ciel', 'toit', 'nuage', 'pluie'],
        proof_ctx: "La racine s-m-w possede de nombreux regroupements de sens. Ciel/Ce qui couvre est retenu car le mot al-sama' est un nom defini au genitif (apres ila) — « vers le ciel ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w signifie etre haut, s'elever. Le mot sama' designe ce qui est au-dessus — le ciel, la voute celeste, le toit. L'etymologie relie le ciel a l'idee de couverture : le ciel est ce qui couvre la terre, ce qui est au-dessus comme un toit. Le defini (al-) indique le ciel en general, la voute celeste visible. Le contexte est celui de l'observation de la creation : apres les chameaux (v17), le regard se leve vers le ciel. La distinction avec Nom/Identification (ism = nom) est que le nom est un autre derivee de s-m-w (ce qui eleve la chose, ce qui la distingue), mais le mot al-sama' dans ce verset designe clairement le ciel physique, pas un nom. La distinction avec Hauteur/Elevation est que la hauteur est l'attribut du ciel mais le mot sama' designe l'objet (le ciel) pas la qualite (la hauteur).",
        axe1_verset: "Le mot al-sama' est l'objet vers lequel le regard est dirige (wa-ila al-sama'). Le champ lexical est celui de la creation visible : chameaux (v17), ciel (v18), montagnes (v19), terre (v20). Le ciel est le deuxieme element de cette enumeration — apres les chameaux sur terre, le regard se leve vers le haut. Le verset interroge : comment le ciel a-t-il ete eleve ? La question porte sur la voute celeste et sa hauteur vertigineuse — un spectacle qui devrait susciter l'emerveillement et la reflexion.",
        axe2_voisins: "Le verset 17 invitait a regarder les chameaux (element terrestre proche). Le verset 18 leve le regard vers le ciel (element celeste lointain). Le verset 19 redesendra vers les montagnes (element terrestre vertical). Le verset 20 ira a la terre (element terrestre horizontal). Le mouvement du regard dessine un cercle complet : bas (chameaux) — haut (ciel) — vertical (montagnes) — horizontal (terre).",
        axe3_sourate: "Le ciel est le deuxieme signe invoque pour convaincre les negateurs. Apres les chameaux (creation animale), le ciel (creation cosmique) elargit l'echelle de l'observation. La sourate passe du microscopique (un animal) au macroscopique (la voute celeste) pour montrer que la creation divine opere a toutes les echelles.",
        axe4_coherence: "Le Coran mentionne le ciel comme signe de la creation dans de nombreux passages. En 50:6, « ne regardent-ils pas le ciel (al-sama') au-dessus d'eux, comment Nous l'avons construit ? ». En 2:22, « Il a fait du ciel (al-sama') un toit ». En 21:32, « Nous avons fait du ciel (al-sama') un toit protege ». Le ciel comme toit protecteur est un theme coranique recurrent — il est un signe visible de la puissance creatrice.",
        axe5_frequence: "Le ciel est le signe le plus universel de la creation. Tout khalifa, ou qu'il soit sur terre, peut lever les yeux et voir le ciel. C'est le signe que personne ne peut ignorer — il est omnipresent, permanent, visible a tout moment. Le khalifa qui leve les yeux avec attention y reconnait la grandeur de l'oeuvre divine et la mesure de sa propre petitesse."
      },
      'Nom/Identification': { status: 'nul', senses: ['nom', 'nommer', 'prononcer le nom de Dieu'], proof_ctx: "Le sens de nom (ism) est un derive de s-m-w (ce qui eleve, ce qui distingue), mais le mot al-sama' dans ce verset designe clairement le ciel physique visible. Le contexte d'observation de la creation (regarder vers le ciel, comment il a ete eleve) exclut toute lecture comme « nom ». Le mot sama' n'est jamais utilise dans le Coran pour signifier « nom »." },
      'Hauteur/Elevation': { status: 'probable', senses: ['etre haut', 'se dresser'], proof_ctx: "La hauteur est l'attribut fondamental du ciel — le ciel EST haut par definition. Cependant, le mot sama' designe l'objet (la voute celeste) et non la qualite abstraite (la hauteur). Le verset dit « vers le ciel, comment il a ete eleve » — le ciel est le sujet qui a ete eleve, pas la hauteur elle-meme. Ce regroupement est probable car le ciel tire son nom de la hauteur, mais le sens retenu est l'objet concret (le ciel) plutot que la qualite." }
    }
  }, 2);

  // rfe (id=711) — رُفِعَتْ — verbe passif accompli 3e feminin singulier
  await upsertVWA(5985, 'rfe', 'elever', {
    sense_chosen: 'elever',
    concept_chosen: 'Elevation/Exaltation',
    concepts: {
      'Elevation/Exaltation': {
        status: 'retenu',
        senses: ['lever', 'elever', 'hausser', 'exalter'],
        proof_ctx: "La racine r-f-' possede deux regroupements de sens. Elevation/Exaltation est retenu car le verbe rufi'at est au passif accompli 3e feminin singulier — « il/elle a ete eleve(e) ». Le passif divin (sans agent exprime) indique que Dieu est l'agent de l'elevation. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-f-' signifie lever, elever, hausser, porter vers le haut. Le verbe au passif accompli indique un acte acheve — le ciel a ete eleve et il reste dans cet etat. L'elevation du ciel est a la fois physique (le ciel est en hauteur, au-dessus de tout) et symbolique (l'acte d'elever le ciel est un signe de la puissance divine). La distinction avec Suppression (enlever, oter) est que le verset parle de l'elevation du ciel — comment il a ete hausse, pas comment il a ete retire. La suppression est un sens derive (lever pour oter) qui ne correspond pas au contexte de la creation.",
        axe1_verset: "Le verbe rufi'at est le verbe de la proposition interrogative kayfa rufi'at (comment il a ete eleve). Le champ lexical est celui de l'elevation cosmique — le ciel a ete hausse a une hauteur vertigineuse. Le passif accompli indique un acte divin acheve et observable : le resultat (le ciel est en haut) est visible, et la question porte sur le processus (comment cela a-t-il ete fait). Le mot kayfa (comment) invite a reflechir a la mecanique divine de cette elevation.",
        axe2_voisins: "Le verset 17 utilisait khuliqat (a ete creee) pour les chameaux. Le verset 18 utilise rufi'at (a ete eleve) pour le ciel. Le verset 19 utilisera nusibat (a ete plantee/dressee) pour les montagnes. Le verset 20 utilisera sutihat (a ete etendue) pour la terre. Chaque element de la creation est decrit avec un verbe specifique a sa nature : les chameaux sont crees, le ciel est eleve, les montagnes sont dressees, la terre est etendue.",
        axe3_sourate: "L'elevation du ciel est le deuxieme argument de la serie de questions rhetoriques. Si Dieu a eleve le ciel a cette hauteur vertigineuse, Il est capable de tout — y compris de ressusciter les morts. L'elevation du ciel est une preuve de puissance qui devrait convaincre les negateurs.",
        axe4_coherence: "Le Coran utilise la racine r-f-' pour l'elevation du ciel dans d'autres passages. En 13:2, « Dieu est Celui qui a eleve (rafa'a) les cieux sans piliers que vous puissiez voir ». En 55:7, « et le ciel, Il l'a eleve (rafa'aha) ». L'elevation du ciel sans piliers visibles est un argument recurrent dans le Coran pour montrer la puissance divine.",
        axe5_frequence: "L'elevation est l'acte par lequel Dieu organise le cosmos. Le ciel est eleve, les montagnes sont dressees, la terre est etendue — chaque element a sa place dans un ordre cosmique. Le khalifa qui observe cet ordre devrait y reconnaitre une volonte organisatrice et en tirer les consequences pour sa propre vie — si le cosmos est ordonne, la vie humaine doit aussi l'etre."
      },
      'Suppression': { status: 'nul', senses: ['enlever'], proof_ctx: "Le sens de suppression (enlever, oter, retirer) ne correspond pas au contexte de l'elevation du ciel. Le verset interroge comment le ciel a ete hausse, pas comment il a ete retire. Le contexte de la creation exclut l'idee de suppression." }
    }
  }, 4);

  // VA verset 18
  await upsertVA(5985, {
    segments: [
      { fr: 'Et vers', pos: 'CONJ+P', phon: 'wa-ila', arabic: 'وَإِلَى', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'le ciel', pos: 'N', phon: "al-sama'", arabic: 'ٱلسَّمَآءِ', word_key: 'smw', is_particle: false, sense_retenu: 'ciel', position: 2 },
      { fr: 'comment', pos: 'INTG', phon: 'kayfa', arabic: 'كَيْفَ', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'il a ete eleve', pos: 'V', phon: "rufi'at", arabic: 'رُفِعَتْ', word_key: 'rfe', is_particle: false, sense_retenu: 'elever', position: 4 }
    ],
    translation_arab: "Et vers le ciel, comment il a ete eleve",
    full_translation: "et vers le ciel, comment il a ete eleve ?",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie le verset 18 au verset 17. La preposition **ila** (vers) reprend la construction du verset 17 (yanzuruna ila) — le verbe « regarder vers » est sous-entendu. Le verset 18 est elliptique : « et [ne regardent-ils pas] vers le ciel, comment il a ete eleve ». L'ellipse du verbe accelere le rythme — la question s'enchaine rapidement apres les chameaux.

Le mot **al-sama'** est un nom defini au genitif (apres ila). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w signifie etre haut, s'elever. Le mot sama' designe le ciel, la voute celeste — ce qui est au-dessus de la terre et la couvre. L'etymologie relie le ciel a l'idee de hauteur et de couverture : le ciel est le toit du monde. Le defini (al-) indique le ciel en general, la voute celeste visible par tous.

Le mot **kayfa** est un interrogatif signifiant « comment ». Comme au verset 17, il oriente la reflexion vers le processus : comment le ciel a-t-il ete eleve a cette hauteur ?

Le verbe **rufi'at** est au passif accompli 3e feminin singulier. D'apres les sources etymologiques, la racine r-f-' signifie lever, elever, hausser. Le passif divin (sans agent exprime) indique que Dieu est l'agent de l'elevation. Le feminin s'accorde avec sama' (ciel, feminin en arabe). L'accompli indique un acte acheve — le ciel a ete eleve et il est toujours dans cet etat.

§JUSTIFICATION§
**ciel** — Le sens retenu est « ciel » du regroupement Ciel/Ce qui couvre. Le mot « ciel » rend directement al-sama'. L'alternative « voute celeste » serait plus poetique mais ajoute l'idee de courbure qui n'est pas dans le mot arabe. L'alternative « firmament » serait archaique. « Ciel » est le mot le plus naturel et direct.

**eleve** — Le sens retenu est « elever » du regroupement Elevation/Exaltation. Le participe « eleve » rend directement le passif rufi'at. L'alternative « hausse » est un synonyme acceptable mais moins courant en francais pour decrire le ciel. L'alternative « leve » serait trop quotidien (on leve un objet, pas le ciel).

§CRITIQUE§
**eleve vs dresse** — Hamidullah traduit « le ciel, comment il est eleve ». La traduction retenue concorde largement avec Hamidullah. La seule difference est le temps : « il a ete eleve » (passe compose, accompli) vs « il est eleve » (present). Le verbe arabe rufi'at est a l'accompli — il decrit un acte termine dans le passe. Le passe compose « a ete eleve » rend plus fidelement l'accompli arabe. Le present « est eleve » de Hamidullah donne une dimension intemporelle qui est interpretative. Le choix de l'accompli est plus fidele a la grammaire arabe.`
  });
  console.log('  v18 done\n');

  console.log('=== PIPELINE S88 v15-18 TERMINE ===');
})();
