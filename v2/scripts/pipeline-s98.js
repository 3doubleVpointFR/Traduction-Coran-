require('dotenv').config({path:'.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// HELPERS
// ============================================================
async function upsertVWA(verse_id, word_key, analysis_axes, position) {
  const sense_chosen = analysis_axes.sense_chosen || null;
  await sb.from('verse_word_analyses').delete().eq('verse_id', verse_id).eq('word_key', word_key);
  const {data,error} = await sb.from('verse_word_analyses')
    .insert({verse_id, word_key, sense_chosen, analysis_axes, position: position || 1})
    .select().single();
  if(error) throw new Error(`VWA ${verse_id}/${word_key}: ${error.message}`);
  return data;
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const {error} = await sb.from('word_daily').insert({analysis_id, sense, arabic, phon, french});
  if(error && !error.message.includes('duplicate')) console.log('  daily warning:', error.message);
}

async function updateVerse(verse_id, fields) {
  const {error} = await sb.from('verse_analyses').update(fields).eq('verse_id', verse_id);
  if(error) throw new Error(`verse_analyses ${verse_id}: ${error.message}`);
}

// ============================================================
// ÉTAPE 2 — RACINES MANQUANTES
// ============================================================
async function createMissingRoots() {
  console.log('\n====== ÉTAPE 2 — RACINES MANQUANTES ======\n');

  // fkk (ف ك ك) — séparation/libération
  let {data: existing} = await sb.from('word_analyses').select('id').eq('word_key','fkk').maybeSingle();
  if (!existing) {
    const {data: created} = await sb.from('word_analyses')
      .insert({word_key:'fkk', root_ar:'ف ك ك', root_phon:'f-k-k', total_occurrences: 4})
      .select().single();
    const id = created.id;
    console.log('[fkk] Créé id=' + id);
    await sb.from('word_meanings').insert([
      {analysis_id:id, concept:'Séparation/Ouverture', sense:'séparer', description:"Acte physique de détacher deux choses liées ou emmêlées l'une à l'autre. La séparation est un acte extérieur, directionnel et ponctuel — on prend ce qui est joint et on le disjoint. Le Lane's donne : « he separated a thing from another thing, and any two things knit together or intricately intermixed ». C'est le passage de l'état lié à l'état disjoint, la rupture d'un assemblage.", meaning_type:'etymology', display_order:1},
      {analysis_id:id, concept:'Séparation/Ouverture', sense:'ouvrir', description:'', meaning_type:'etymology', display_order:2},
      {analysis_id:id, concept:'Séparation/Ouverture', sense:'briser un sceau', description:'', meaning_type:'etymology', display_order:3},
      {analysis_id:id, concept:'Séparation/Ouverture', sense:'démettre un os', description:'', meaning_type:'etymology', display_order:4},
      {analysis_id:id, concept:'Séparation/Ouverture', sense:'relâcher', description:'', meaning_type:'etymology', display_order:5},
      {analysis_id:id, concept:'Libération/Affranchissement', sense:'racheter un gage', description:"Acte de libérer ce qui est retenu par un lien d'obligation. La libération est un acte extérieur et résolutif — on met fin à une contrainte qui emprisonnait. Le Lane's donne : « he redeemed the pledge, he liberated the captive, he emancipated the slave ». La distinction avec la séparation : la séparation est physique et neutre, la libération est la séparation appliquée à un être qui était retenu contre sa volonté ou par une obligation.", meaning_type:'etymology', display_order:6},
      {analysis_id:id, concept:'Libération/Affranchissement', sense:'libérer un captif', description:'', meaning_type:'etymology', display_order:7},
      {analysis_id:id, concept:'Libération/Affranchissement', sense:'affranchir un esclave', description:'', meaning_type:'etymology', display_order:8},
      {analysis_id:id, concept:'Détachement/Cessation', sense:"se détacher", description:"État résultatif de celui qui se sépare de quelque chose, qui cesse d'y être lié. La forme VII (infakka) ajoute la dimension réflexive : le sujet se détache lui-même, il cesse de son propre mouvement. Le Lane's donne pour la forme VII le sens de « se détacher d'un piège ». Le munfakk est celui qui est dans l'état de s'être détaché, d'avoir cessé. C'est un état intérieur résolutif — le sujet n'est plus retenu.", meaning_type:'etymology', display_order:9},
      {analysis_id:id, concept:'Détachement/Cessation', sense:'cesser', description:'', meaning_type:'etymology', display_order:10},
      {analysis_id:id, concept:'Détachement/Cessation', sense:"se dégager d'un piège", description:'', meaning_type:'etymology', display_order:11},
    ]);
    console.log('[RACINE] fkk — 11 sens → 3 concepts');
  } else {
    console.log('[fkk] Existe déjà, skip');
  }

  // ṣḥf (ص ح ف) — page/écrit
  ({data: existing} = await sb.from('word_analyses').select('id').eq('word_key','ṣḥf').maybeSingle());
  if (!existing) {
    const {data: created} = await sb.from('word_analyses')
      .insert({word_key:'ṣḥf', root_ar:'ص ح ف', root_phon:'ṣ-ḥ-f', total_occurrences: 8})
      .select().single();
    const id = created.id;
    console.log('[ṣḥf] Créé id=' + id);
    await sb.from('word_meanings').insert([
      {analysis_id:id, concept:'Page/Feuillet', sense:'feuille écrite', description:"Surface physique sur laquelle on inscrit du texte — un morceau de papier, de peau ou de parchemin portant une écriture. La page est un objet passif, réceptacle de l'écriture. Le Lane's donne : « a written piece of paper or of skin, a book, a register, a page ». Le pluriel ṣuḥuf désigne un ensemble de feuillets, des pages écrites. C'est le support matériel de la transmission écrite.", meaning_type:'etymology', display_order:1},
      {analysis_id:id, concept:'Page/Feuillet', sense:'page', description:'', meaning_type:'etymology', display_order:2},
      {analysis_id:id, concept:'Page/Feuillet', sense:'parchemin', description:'', meaning_type:'etymology', display_order:3},
      {analysis_id:id, concept:'Page/Feuillet', sense:'registre', description:'', meaning_type:'etymology', display_order:4},
      {analysis_id:id, concept:'Compilation/Codex', sense:'rassembler des pages', description:"Acte de réunir des feuillets entre deux planchettes pour en faire un recueil. Le Lane's donne : « it had ṣuḥuf collected in it, put in it between two boards ». C'est le passage de pages éparses à un ensemble organisé — la constitution d'un codex ou d'un muṣḥaf.", meaning_type:'etymology', display_order:5},
      {analysis_id:id, concept:'Compilation/Codex', sense:'constituer un recueil', description:'', meaning_type:'etymology', display_order:6},
      {analysis_id:id, concept:'Sens isolé/Erreur de lecture', sense:'confusion de points diacritiques', description:"Sens technique tardif. Le taṣḥīf est l'erreur commise en lisant une page à cause de l'ambiguïté des points diacritiques.", meaning_type:'etymology', display_order:7},
    ]);
    console.log('[RACINE] ṣḥf — 7 sens → 3 concepts');
  } else {
    console.log('[ṣḥf] Existe déjà, skip');
  }

  console.log('\n✓ Racines manquantes traitées');
}

// ============================================================
// VERSET 98:1 (6131)
// لَمْ يَكُنِ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَـٰبِ وَٱلْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ ٱلْبَيِّنَةُ
// ============================================================
async function verse98_1() {
  console.log('\n====== VERSET 98:1 (6131) ======\n');

  // kfr (294) — Couverture/Dissimulation [retenu]
  await upsertVWA(6131, 'kfr', {
    sense_chosen: "couvrir",
    concept_chosen: "Couverture/Dissimulation",
    concepts: {
      "Couverture/Dissimulation": {
        status: "retenu",
        senses: ["couvrir", "cacher", "la nuit qui couvre"],
        proof_ctx: "Le sens retenu est « Couverture/Dissimulation ». Le verbe kafarū est un accompli à la 3ème personne du pluriel — « ils ont couvert ». La racine k-f-r a pour sens premier la couverture : couvrir une chose pour la cacher. Le Lane's donne le cultivateur qui couvre la graine dans la terre comme image première. Ici, kafarū décrit ceux qui ont couvert — ce qu'ils ont couvert n'est pas précisé par le texte. La distinction avec « Rejet/Ingratitude » : le rejet est un acte de refus conscient dirigé vers l'extérieur, tandis que la couverture est un acte qui cache, qui met un voile sur quelque chose. Le texte ne précise pas s'il s'agit d'un rejet volontaire ou d'un recouvrement — le sens premier (couvrir) est plus fidèle à l'étymologie.",
        axe1_verset: "Le champ lexical du verset est celui de l'état et du changement d'état : « n'étaient pas en état de se détacher » (munfakkīna), « jusqu'à ce que leur vienne » (ḥattā ta'tiyahum). Le verbe kafarū identifie un groupe par son action passée (accompli). Le verset oppose ceux qui ont couvert à la preuve claire (al-bayyina) — l'acte de couvrir est mis en contraste direct avec la clarté. Ce contraste renforce le sens de couverture : ce qui est couvert s'oppose à ce qui est clair et évident.",
        axe2_voisins: "Le verset 2 précise ce qu'est la preuve claire : un envoyé récitant des pages purifiées. Le verset 3 ajoute : dans lesquelles se trouvent des écrits droits. La preuve est donc un texte clair et pur. L'acte de couvrir s'oppose directement à cette clarté textuelle — ceux qui couvrent sont ceux qui mettent un voile sur ce que le texte rend évident.",
        axe3_sourate: "La sourate 98 porte le nom al-Bayyina (la Preuve claire). Son thème central est le contraste entre la clarté de la preuve et la division des gens face à elle. Le verbe kafarū ouvre la sourate en identifiant le premier groupe — ceux qui couvrent — avant même que la preuve ne soit décrite.",
        axe4_coherence: "Le Coran utilise la racine k-f-r dans des contextes variés : en 2:6, « ceux qui ont couvert, que tu les avertisses ou non, ils ne donnent pas confiance ». En 14:7, Dieu dit « si vous couvrez, mon épreuve est sévère ». L'usage en 98:1 est cohérent : kafarū est un accompli qui décrit un état résultatif — ils ont déjà accompli l'acte de couvrir.",
        axe5_frequence: "L'acte de couvrir est l'opposé de la mission de justice et de civilisation : le khalifa doit dévoiler, clarifier, rendre apparent. Couvrir, c'est empêcher l'accès à la vérité. Le verset dit que ceux qui couvrent ne pouvaient pas se détacher de cet état — ils y étaient enfermés jusqu'à ce que la preuve vienne."
      },
      "Rejet/Ingratitude": {
        status: "probable",
        senses: ["nier", "être ingrat", "renier un bienfait", "rejeter"],
        proof_ctx: "Le rejet est un acte conscient de refus dirigé vers l'extérieur — on rejette activement quelque chose qu'on a reçu. La couverture est plus large : elle inclut le rejet mais aussi l'ignorance, le déni passif, le fait de ne pas voir. Le texte utilise le verbe seul sans complément — il ne précise pas ce qui est couvert ou rejeté. Le sens premier (couvrir) est plus ouvert et fidèle à l'étymologie que le sens dérivé (rejeter).",
        axe1_verset: "Le rejet fonctionnerait dans le champ lexical du verset : ceux qui rejettent ne se détachent pas de leur rejet jusqu'à la preuve. Mais le verset ne mentionne pas d'objet rejeté — le verbe est absolu. Le rejet suppose un objet précis (on rejette quelque chose), tandis que la couverture peut être un état général.",
        axe2_voisins: "Le verset 4 dit que la division est venue après la preuve — ce qui suggère que le problème n'est pas le rejet initial mais l'incapacité de se détacher d'un état. Le rejet comme acte conscient est moins cohérent avec cette idée d'état dont on ne peut se défaire.",
        axe3_sourate: "La sourate oppose clarté et couverture. Le rejet comme sens serait cohérent mais moins précis que la couverture directe.",
        axe4_coherence: "Le Coran utilise kafara avec des compléments quand il veut dire rejeter (kafara bi = il a rejeté). L'absence de complément ici favorise le sens absolu de couvrir.",
        axe5_frequence: "Le rejet implique une conscience et un choix — ce qui est possible mais plus restrictif que la couverture qui peut être involontaire."
      }
    }
  }, 4);
  console.log('  kfr → Couverture/Dissimulation → "couvrir"');

  // fkk (NEW) — Détachement/Cessation
  await upsertVWA(6131, 'fkk', {
    sense_chosen: "se détacher",
    concept_chosen: "Détachement/Cessation",
    concepts: {
      "Détachement/Cessation": {
        status: "retenu",
        senses: ["se détacher", "cesser", "se dégager d'un piège"],
        proof_ctx: "Le sens retenu est « Détachement/Cessation ». Le mot munfakkīna est un participe actif pluriel masculin de la forme VII (infakka). La forme VII ajoute la dimension réflexive : le sujet se détache lui-même. Le participe actif indique un état en cours — être dans l'état de se détacher. Avec la négation lam yakun, le sens est : « ils n'étaient pas dans l'état de se détacher ». Le Lane's donne pour la forme VII : « il s'est détaché d'un piège ». La distinction avec « Séparation/Ouverture » : la séparation est un acte transitif (on sépare une chose d'une autre), le détachement est réflexif (on se détache soi-même). La distinction avec « Libération/Affranchissement » : la libération suppose un agent extérieur qui libère, le détachement est un mouvement propre du sujet.",
        axe1_verset: "Le champ lexical du verset est centré sur l'état et l'incapacité de changement : la négation (lam), l'état continu (yakun + participe), la limite temporelle (ḥattā). Le mot munfakkīna décrit un état dont les sujets ne pouvaient pas sortir par eux-mêmes. Le détachement comme processus réflexif est cohérent : ils ne pouvaient pas se détacher de leur état de couverture. Le verset décrit une impasse qui ne se résout que par l'arrivée de la preuve claire.",
        axe2_voisins: "Le verset 4 reprend l'idée avec tafarraqa (forme V, se diviser) — un autre verbe réflexif qui décrit un mouvement de séparation. La sourate utilise deux racines de séparation (f-k-k et f-r-q) pour deux réalités différentes : le détachement d'un état (fkk) et la division d'un groupe (frq). Le premier est positif (ils ne pouvaient pas se détacher), le second est négatif (ils se sont divisés).",
        axe3_sourate: "La sourate décrit le parcours d'un groupe face à la preuve : d'abord l'incapacité de se détacher (v1), puis l'arrivée de la preuve (v2-3), puis la division (v4). Le détachement est le premier mouvement attendu — celui qui ne se produit pas sans la preuve.",
        axe4_coherence: "Le Coran utilise la racine f-k-k en 90:13 (fakkū raqaba = libérer un cou/esclave) avec le sens de libération physique. L'usage en 98:1 est métaphorique : ce qui est « attaché » n'est pas un corps mais un état mental ou spirituel. La forme VII (se détacher) est unique dans le Coran à ce verset.",
        axe5_frequence: "Le détachement est un prérequis de la mission de justice : pour avancer, il faut d'abord se détacher de ce qui retient. Le verset dit que sans preuve claire, le détachement est impossible — ce qui fait de la preuve l'instrument nécessaire du progrès."
      },
      "Séparation/Ouverture": {
        status: "peu_probable",
        senses: ["séparer", "ouvrir", "briser un sceau", "relâcher"],
        proof_ctx: "La séparation est un acte transitif : on sépare A de B. Mais munfakkīna est un participe de forme VII (réflexif) — les sujets ne séparent pas quelque chose, ils se détachent eux-mêmes. La séparation transitive ne correspond pas à la forme grammaticale.",
        axe1_verset: "La séparation transitive supposerait un objet — qu'est-ce qu'ils séparent ? Le texte ne donne pas de complément d'objet. Le participe réflexif pointe vers un état interne, pas un acte sur un objet.",
        axe2_voisins: "Le contexte des versets voisins parle de changement d'état, pas d'acte de séparation physique.",
        axe3_sourate: "Le thème de la sourate est la preuve et la réaction face à elle — un cadre intellectuel, pas physique.",
        axe4_coherence: "L'usage en 90:13 est transitif (libérer un cou). L'usage en 98:1 est réflexif — sens différent.",
        axe5_frequence: "La séparation physique n'éclaire pas la mission de justice dans ce contexte."
      },
      "Libération/Affranchissement": {
        status: "peu_probable",
        senses: ["racheter un gage", "libérer un captif", "affranchir un esclave"],
        proof_ctx: "La libération suppose un agent extérieur qui libère. Mais la forme VII (réflexive) indique que le sujet agit sur lui-même — il se détache, il ne se fait pas libérer. De plus, le participe actif indique un état du sujet, pas l'action d'un libérateur.",
        axe1_verset: "Le verset ne mentionne pas de libérateur ni de captivité. Le contexte est intellectuel, pas celui de l'esclavage ou de la captivité.",
        axe2_voisins: "Aucun verset voisin n'évoque de captivité physique ou de libération.",
        axe3_sourate: "Le cadre de la sourate est celui de la preuve et de la foi, pas de la liberté physique.",
        axe4_coherence: "Le sens de libération est pertinent en 90:13 mais pas ici où la forme est réflexive.",
        axe5_frequence: "La libération physique n'est pas en jeu dans ce verset."
      }
    }
  }, 9);
  console.log('  fkk → Détachement/Cessation → "se détacher"');

  // byn (596) — Clarté/Évidence
  await upsertVWA(6131, 'byn', {
    sense_chosen: "preuve claire",
    concept_chosen: "Clarté/Évidence",
    concepts: {
      "Clarté/Évidence": {
        status: "retenu",
        senses: ["être clair", "expliquer", "évident", "preuve"],
        proof_ctx: "Le sens retenu est « Clarté/Évidence ». Le mot al-bayyina est un nom féminin défini avec l'article al — « la preuve claire ». Le bayyina est ce qui est tellement clair qu'il rend les choses évidentes par lui-même, sans besoin d'explication supplémentaire. Le Lane's donne : « a clear proof, an evidence, a demonstration ». La définition par l'article al indique que cette preuve est connue, identifiée — pas n'importe quelle preuve. La distinction avec « Séparation/Distance » : la séparation est un mouvement d'éloignement entre deux choses, la clarté est une qualité intrinsèque de ce qui se montre tel qu'il est. Le verset 2 précise ce qu'est cette preuve : un envoyé récitant des pages purifiées.",
        axe1_verset: "Le mot al-bayyina est en position de sujet du verbe ta'tiyahum (elle leur vient). La preuve claire est l'agent qui vient vers eux — elle est active, pas passive. Le champ lexical oppose la couverture (kafarū) à la clarté (al-bayyina) : l'une cache, l'autre montre. Le détachement (munfakkīna) est impossible sans l'arrivée de la clarté — la clarté est la condition du changement d'état.",
        axe2_voisins: "Le verset 2 définit la preuve claire : un envoyé de Dieu récitant des pages purifiées. Le verset 3 précise le contenu : des écrits droits. La preuve claire est donc un texte lu à voix haute — une parole articulée qui rend les choses évidentes. Le verset 4 réutilise al-bayyina comme l'événement après lequel la division se produit.",
        axe3_sourate: "La sourate porte le nom al-Bayyina — la preuve claire est le thème central. Tout s'organise autour d'elle : avant elle (l'incapacité de se détacher), elle-même (l'envoyé et les pages), après elle (la division, puis le tri entre les pires et les meilleurs).",
        axe4_coherence: "Le Coran utilise bayyina au singulier défini dans des contextes similaires : en 6:57 « je suis sur une preuve claire de mon Seigneur ». En 11:17 « celui qui est sur une preuve claire de son Seigneur ». La bayyina est toujours une évidence qui vient de Dieu et qui tranche.",
        axe5_frequence: "La preuve claire est l'instrument de la justice : sans elle, les gens restent dans leur état. Avec elle, chacun est mis face à l'évidence et doit choisir. La bayyina est ce qui rend le jugement possible — sans clarté, pas de responsabilité."
      },
      "Séparation/Distance": {
        status: "nul",
        senses: ["séparer", "entre", "quitter"],
        proof_ctx: "Le mot al-bayyina est un nom féminin défini, pas un verbe de séparation. Le contexte est celui de la clarté et de la preuve, pas de la distance."
      }
    }
  }, 12);
  console.log('  byn → Clarté/Évidence → "preuve claire"');

  // TRADUCTION v1
  await updateVerse(6131, {
    translation_arab: "Ceux qui ont couvert, parmi les gens de l'écrit et ceux qui associent, n'étaient pas en état de se détacher jusqu'à ce que leur vienne la preuve claire :",
    full_translation: "Les infidèles parmi les gens du Livre, ainsi que les Associateurs, ne cesseront pas de mécroire jusqu'à ce que leur vienne la Preuve évidente.",
    translation_explanation: `§DEMARCHE§

Le verbe **kafarū** est un accompli à la 3ème personne du pluriel avec le pronom suffixe wāw — « ils ont couvert ». L'accompli indique que l'acte de couvrir est déjà accompli, c'est un état résultatif. Le pronom relatif **alladhīna** (ceux qui) transforme le verbe en description d'un groupe.

La construction **lam yakun** est une négation de l'inaccompli apocopé du verbe k-w-n (être) — « ils n'étaient pas ». Lam est la particule de négation du passé. Le verbe yakun à l'inaccompli apocopé donne un sens d'état continu dans le passé.

Le mot **munfakkīna** est un participe actif pluriel masculin de la forme VII de la racine f-k-k. La forme VII (infakka) est réflexive — elle ajoute le sens de « se faire à soi-même ». Le participe actif décrit un état en cours : « en état de se détacher ». Avec lam yakun, le sens complet est : « ils n'étaient pas en état de se détacher ». Ils étaient retenus dans un état dont ils ne pouvaient pas sortir seuls.

La particule **ḥattā** (jusqu'à ce que) introduit la limite temporelle : leur incapacité de se détacher dure jusqu'à un événement précis.

Le verbe **ta'tiyahum** est un inaccompli au subjonctif de la racine a-t-y (venir) — « elle leur vienne ». Le sujet est al-bayyina.

Le mot **al-bayyina** est un nom féminin défini — « la preuve claire ». L'article al indique qu'il s'agit d'une preuve identifiée, connue, pas n'importe laquelle.

§JUSTIFICATION§

**couvert** — Le sens retenu est « Couverture/Dissimulation ». Le mot « couvert » est choisi car la racine k-f-r a pour sens premier la couverture. L'alternative « rejeté » est écartée car le texte ne mentionne pas d'objet rejeté — le verbe est absolu. L'alternative « mécru » n'existe pas en français courant.

**se détacher** — Le sens retenu est « Détachement/Cessation ». Le mot « se détacher » rend la forme VII réflexive : le sujet agit sur lui-même. L'alternative « cesser » est écartée car trop vague — cesser quoi ? Le texte décrit un état dont on se détache, pas une action qu'on arrête. L'alternative « se séparer » est écartée car elle implique deux parties qui s'éloignent, alors que le détachement décrit le fait de se dégager d'un état.

**preuve claire** — Le sens retenu est « Clarté/Évidence ». Le mot « preuve claire » est choisi car al-bayyina combine l'idée de preuve (quelque chose qui démontre) et de clarté (qui se montre par elle-même). L'alternative « évidence » seule est écartée car elle est trop abstraite.

§CRITIQUE§

**infidèles vs ceux qui ont couvert** — Hamidullah traduit kafarū par « les infidèles ». Ce mot français vient du latin infidelis (qui ne croit pas) et appartient au vocabulaire religieux chrétien. Il impose une lecture de non-croyance, alors que la racine k-f-r signifie couvrir — l'image est celle de quelqu'un qui met un voile sur quelque chose, pas de quelqu'un qui refuse de croire. La traduction « infidèle » fait perdre toute l'image étymologique de la couverture.

**cesseront pas de mécroire vs n'étaient pas en état de se détacher** — Hamidullah traduit munfakkīna par « ne cesseront pas de mécroire ». Ce choix fusionne deux mots (kafarū et munfakkīna) en une seule idée. Le texte arabe distingue clairement l'acte de couvrir (kafarū, verbe accompli) et l'état de ne pas se détacher (munfakkīna, participe de forme VII). Le sens est que ces gens n'arrivaient pas à se détacher de leur état — pas qu'ils continuaient à mécroire. La nuance est celle de l'impuissance face à un état, pas de la persistance dans un acte.`,
    segments: [
      {fr:"(ne)", pos:"particle", phon:"lam", arabic:"لَمْ", is_particle:true, position:1},
      {fr:"étaient", pos:"verbe", phon:"yakun", arabic:"يَكُنِ", word_key:"kwn", is_particle:false, sense_retenu:"être", position:2},
      {fr:"Ceux qui", pos:"particle", phon:"alladhīna", arabic:"ٱلَّذِينَ", is_particle:true, position:3},
      {fr:"ont couvert,", pos:"verbe", phon:"kafarū", arabic:"كَفَرُوا۟", word_key:"kfr", is_particle:false, sense_retenu:"couvrir", position:4},
      {fr:"parmi", pos:"particle", phon:"min", arabic:"مِنْ", is_particle:true, position:5},
      {fr:"les gens de", pos:"nom", phon:"ahli", arabic:"أَهْلِ", word_key:"ahl", is_particle:false, sense_retenu:"gens de", position:6},
      {fr:"l'écrit", pos:"nom", phon:"al-kitāb", arabic:"ٱلْكِتَـٰبِ", word_key:"ktb", is_particle:false, sense_retenu:"écrit", position:7},
      {fr:"et ceux qui associent,", pos:"nom", phon:"wa-l-mushrikīn", arabic:"وَٱلْمُشْرِكِينَ", word_key:"šrk", is_particle:false, sense_retenu:"associer", position:8},
      {fr:"(pas) en état de se détacher", pos:"nom", phon:"munfakkīna", arabic:"مُنفَكِّينَ", word_key:"fkk", is_particle:false, sense_retenu:"se détacher", position:9},
      {fr:"jusqu'à ce que", pos:"particle", phon:"ḥattā", arabic:"حَتَّىٰ", is_particle:true, position:10},
      {fr:"leur vienne", pos:"verbe", phon:"ta'tiyahum", arabic:"تَأْتِيَهُمُ", word_key:"aty", is_particle:false, sense_retenu:"venir", position:11},
      {fr:"la preuve claire :", pos:"nom", phon:"al-bayyina", arabic:"ٱلْبَيِّنَةُ", word_key:"byn", is_particle:false, sense_retenu:"preuve claire", position:12}
    ]
  });
  console.log('VERSET 98:1 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:2 (6132)
// رَسُولٌ مِّنَ ٱللَّهِ يَتْلُوا۟ صُحُفًا مُّطَهَّرَةً
// ============================================================
async function verse98_2() {
  console.log('\n====== VERSET 98:2 (6132) ======\n');

  // tlw (730) — Récitation/Succession
  await upsertVWA(6132, 'tlw', {
    sense_chosen: "réciter",
    concept_chosen: "Récitation/Succession",
    concepts: {
      "Récitation/Succession": {
        status: "retenu",
        senses: ["réciter", "lire", "succéder"],
        proof_ctx: "Le sens retenu est « Récitation/Succession ». Le verbe yatlū est un inaccompli de la forme I — « il récite ». Le Lane's donne pour t-l-w : « he read, or recited, he followed ». Le sens premier est suivre — réciter c'est suivre le texte mot par mot. L'inaccompli donne un sens de durée ou d'habitude : il est en train de réciter, ou il récite de manière continue. La récitation est un acte extérieur, directionnel : la parole sort de celui qui récite et atteint celui qui écoute.",
        axe1_verset: "Le verbe yatlū a pour sujet rasūlun (un envoyé) et pour objet ṣuḥufan (des pages). L'envoyé récite des pages — il suit leur texte et le transmet oralement. Le champ lexical est celui de la transmission orale d'un texte écrit : envoyé (rsl) + réciter (tlw) + pages (ṣḥf) + purifiées (ṭhr). Chaque mot enrichit l'image d'une transmission fidèle et pure.",
        axe2_voisins: "Le verset 1 a posé la question : qu'est-ce que la preuve claire ? Le verset 2 répond : un envoyé qui récite. Le verset 3 précise le contenu des pages : des écrits droits. La récitation est le mode de transmission de la preuve — elle passe par la voix, pas par la lecture silencieuse.",
        axe3_sourate: "La sourate est centrée sur la preuve claire. La récitation est le moyen par lequel cette preuve est transmise — le lien entre le texte écrit (ṣuḥuf) et les gens qui doivent l'entendre.",
        axe4_coherence: "Le Coran utilise yatlū fréquemment pour la récitation des versets : en 2:129 « un envoyé d'entre eux qui leur récite tes signes ». L'usage en 98:2 est identique : l'envoyé récite le contenu de pages.",
        axe5_frequence: "La récitation est l'acte de transmission de la connaissance. Pour la mission de justice, la transmission fidèle du texte est le fondement de toute compréhension correcte."
      }
    }
  }, 4);
  console.log('  tlw → Récitation/Succession → "réciter"');

  // ṣḥf (NEW) — Page/Feuillet
  await upsertVWA(6132, 'ṣḥf', {
    sense_chosen: "pages",
    concept_chosen: "Page/Feuillet",
    concepts: {
      "Page/Feuillet": {
        status: "retenu",
        senses: ["feuille écrite", "page", "parchemin", "registre"],
        proof_ctx: "Le sens retenu est « Page/Feuillet ». Le mot ṣuḥufan est un nom pluriel féminin indéfini à l'accusatif — « des pages ». Le Lane's donne pour ṣaḥīfa : « a written piece of paper or of skin ». Le pluriel ṣuḥuf désigne un ensemble de feuillets écrits. L'indéfini (sans article al) signifie que ces pages ne sont pas identifiées comme un livre précis — ce sont des pages, des feuillets. La distinction avec « Compilation/Codex » : la compilation est l'acte de rassembler des pages, les pages sont les supports individuels. Le texte parle de pages récitées, pas d'un codex assemblé.",
        axe1_verset: "Le mot ṣuḥufan est l'objet de yatlū (il récite) — l'envoyé récite DES PAGES. Le pluriel indéfini donne l'image de feuillets multiples, pas d'un livre unique. L'adjectif muṭahharatan (purifiées) qualifie ces pages : elles ont été rendues pures. Le champ lexical associe la transmission (réciter) au support (pages) et à la qualité (purifiées).",
        axe2_voisins: "Le verset 3 dit « fīhā kutubun qayyimatun » — dans lesquelles se trouvent des écrits droits. Les pages contiennent des écrits. Le rapport est celui du contenant (ṣuḥuf = pages) au contenu (kutub = écrits). Les deux mots viennent de racines différentes : ṣ-ḥ-f pour le support physique, k-t-b pour le contenu inscrit.",
        axe3_sourate: "La sourate identifie la preuve claire comme un texte matériel : des pages purifiées contenant des écrits droits. Ce n'est pas une preuve abstraite mais un objet concret — des feuillets qu'on peut toucher, lire, réciter.",
        axe4_coherence: "Le Coran utilise ṣuḥuf en 20:133 « une preuve claire dans les premières pages » et en 87:18-19 « les premières pages, les pages d'Ibrahim et de Moussa ». Les ṣuḥuf sont toujours des documents écrits transmis par les prophètes — des supports de révélation.",
        axe5_frequence: "Les pages écrites sont le support matériel de la justice : sans texte fixé, la preuve se perd dans l'oralité et la déformation. Les ṣuḥuf garantissent la permanence de la preuve."
      },
      "Compilation/Codex": {
        status: "nul",
        senses: ["rassembler des pages", "constituer un recueil"],
        proof_ctx: "Le texte parle de pages (pluriel) récitées, pas d'un acte de compilation. Le sens de compilation est l'acte de rassembler, pas le résultat."
      }
    }
  }, 5);
  console.log('  ṣḥf → Page/Feuillet → "pages"');

  // thr (402) — Pureté/Purification
  await upsertVWA(6132, 'thr', {
    sense_chosen: "rendues pures",
    concept_chosen: "Pureté/Purification",
    concepts: {
      "Pureté/Purification": {
        status: "retenu",
        senses: ["être pur", "purifier", "se purifier", "pur"],
        proof_ctx: "Le sens retenu est « Pureté/Purification ». Le mot muṭahharatan est un participe passif féminin singulier de la forme II — « rendues pures ». La forme II (ṭahhara) est intensive et causative : rendre pur, purifier activement. Le participe passif indique que les pages ont SUBI la purification — quelqu'un ou quelque chose les a rendues pures. Le Lane's donne : « être pur, purifier, se purifier ». La pureté ici est celle du texte : les pages sont débarrassées de toute altération, erreur ou corruption.",
        axe1_verset: "Le mot muṭahharatan qualifie ṣuḥufan (des pages) — ce sont des pages RENDUES PURES. Le passif de la forme II indique un agent qui a purifié ces pages. Le champ lexical associe la récitation (yatlū) à des pages dont la pureté est garantie — la transmission est fiable parce que le support est pur.",
        axe2_voisins: "Le verset 3 ajoute que dans ces pages purifiées se trouvent des écrits droits (qayyima). La pureté des pages (v2) et la droiture des écrits (v3) se complètent : le contenant est pur et le contenu est droit. Les deux qualités ensemble décrivent une source sans défaut.",
        axe3_sourate: "La pureté des pages fait partie de la description de la preuve claire. La sourate insiste sur la fiabilité de cette preuve : elle est claire (bayyina), purifiée (muṭahharatan), droite (qayyimatun). Trois qualités qui éliminent tout doute sur sa validité.",
        axe4_coherence: "Le Coran utilise muṭahharatan en 2:25 pour les épouses purifiées, et en 80:14 pour les pages (ṣuḥuf muṭahharatan). Le même couple ṣuḥuf + muṭahharatan apparaît dans deux contextes de révélation pure.",
        axe5_frequence: "La pureté du support garantit la fiabilité de la preuve. Pour la mission de justice, un texte altéré ne peut pas servir de base de jugement. La purification est la condition de la légitimité."
      }
    }
  }, 6);
  console.log('  thr → Pureté/Purification → "rendues pures"');

  // TRADUCTION v2
  await updateVerse(6132, {
    translation_arab: "un envoyé de la part de Dieu, récitant des pages rendues pures,",
    full_translation: "un Messager, de la part d'Allah, qui leur récite des feuilles purifiées,",
    translation_explanation: `§DEMARCHE§

Le mot **rasūlun** est un nom masculin indéfini au nominatif — « un envoyé ». L'indéfini signifie que le verset ne nomme pas l'envoyé — il décrit une fonction, pas une personne identifiée. Le nominatif indique que rasūlun est une apposition explicative de al-bayyina du v1 : la preuve claire, C'EST un envoyé.

La préposition **min Allāh** (de la part de Dieu) indique l'origine de l'envoi. L'envoyé vient de Dieu.

Le verbe **yatlū** est un inaccompli de la forme I de t-l-w — « il récite ». Le sens premier de la racine est « suivre » — réciter c'est suivre un texte. L'inaccompli décrit une action en cours ou habituelle : l'envoyé est en train de réciter, ou il récite continuellement.

Le mot **ṣuḥufan** est un nom pluriel féminin indéfini à l'accusatif — « des pages ». Le Lane's (d'après les sources étymologiques, Lane's Arabic-English Lexicon, Edward Lane, 1863) donne pour ṣaḥīfa : « une feuille écrite de papier ou de peau ». Le pluriel indéfini désigne des feuillets écrits non identifiés comme un livre unique.

Le mot **muṭahharatan** est un participe passif féminin de la forme II de ṭ-h-r — « rendues pures ». La forme II est causative et intensive : ṭahhara = rendre pur activement. Le participe passif indique que les pages ont été purifiées par un agent — elles n'ont pas acquis la pureté d'elles-mêmes. Quelqu'un les a rendues pures.

§JUSTIFICATION§

**envoyé** — Le sens retenu est « Envoi/Message ». Le mot « envoyé » est choisi car rasūl vient de r-s-l (envoyer) — c'est celui qui est envoyé. L'alternative « messager » est écartée car messager met l'accent sur le message porté, tandis qu'envoyé met l'accent sur l'acte d'envoi. Le texte ne dit pas que l'envoyé porte un message — il dit qu'il récite des pages.

**récitant** — Le sens retenu est « Récitation/Succession ». Le mot « récitant » traduit l'inaccompli yatlū comme participe présent français, ce qui rend l'aspect continu. L'alternative « lisant » est écartée car la lecture peut être silencieuse, alors que la récitation est orale — l'envoyé lit À VOIX HAUTE pour les gens.

**pages** — Le sens retenu est « Page/Feuillet ». Le mot « pages » est choisi car ṣuḥuf désigne des feuillets écrits. L'alternative « feuilles » est écartée car « feuille » en français évoque d'abord la feuille d'arbre — une ambiguïté que « page » évite.

**rendues pures** — Le sens retenu est « Pureté/Purification ». La formulation « rendues pures » rend le participe passif de la forme II : l'action de purifier a été subie par les pages. L'alternative « purifiées » fonctionne aussi mais « rendues pures » explicite mieux le sens causatif de la forme II — quelqu'un les a rendues pures.

§CRITIQUE§

Hamidullah traduit « des feuilles purifiées ». Le mot « feuilles » est ambigu en français (feuille d'arbre ou feuille de papier) — « pages » est plus précis pour des supports écrits. Pour le reste, la traduction est sensiblement la même.`,
    segments: [
      {fr:"un envoyé", pos:"nom", phon:"rasūlun", arabic:"رَسُولٌ", word_key:"rsl", is_particle:false, sense_retenu:"envoyé", position:1},
      {fr:"de la part de", pos:"particle", phon:"min", arabic:"مِّنَ", is_particle:true, position:2},
      {fr:"Dieu,", pos:"nom", phon:"Allāh", arabic:"ٱللَّهِ", word_key:"alh", is_particle:false, sense_retenu:"divinité", position:3},
      {fr:"récitant", pos:"verbe", phon:"yatlū", arabic:"يَتْلُوا۟", word_key:"tlw", is_particle:false, sense_retenu:"réciter", position:4},
      {fr:"des pages", pos:"nom", phon:"ṣuḥufan", arabic:"صُحُفًا", word_key:"ṣḥf", is_particle:false, sense_retenu:"pages", position:5},
      {fr:"rendues pures,", pos:"adjectif", phon:"muṭahharatan", arabic:"مُّطَهَّرَةً", word_key:"thr", is_particle:false, sense_retenu:"rendues pures", position:6}
    ]
  });
  console.log('VERSET 98:2 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:3 (6133) — فِيهَا كُتُبٌ قَيِّمَةٌ
// ============================================================
async function verse98_3() {
  console.log('\n====== VERSET 98:3 (6133) ======\n');

  // ktb (275) — Écriture/Inscription [retenu]
  await upsertVWA(6133, 'ktb', {
    sense_chosen: "écrits",
    concept_chosen: "Livre/Écrit",
    concepts: {
      "Livre/Écrit": {
        status: "retenu",
        senses: ["livre", "écriture révélée", "registre", "contrat écrit"],
        proof_ctx: "Le sens retenu pour ce verset est « Livre/Écrit ». Le mot kutubun est le pluriel brisé de kitāb, nom masculin indéfini au nominatif — « des écrits ». Le Lane's donne kitāb : « book, writing, what is written ». Le pluriel kutub désigne des écrits multiples, des textes. L'indéfini (sans article) signifie des écrits en général. Note : le sens « Écriture/Inscription » est retenu pour cette racine au niveau global (acte d'écrire), mais dans ce verset, kutubun désigne le résultat de l'écriture — les écrits, les textes produits. La distinction avec « Obligation/Décret » : le décret est un acte d'autorité qui impose, les écrits sont des textes neutres. Le contexte (« dans des pages purifiées ») pointe vers le contenu textuel, pas vers des décrets.",
        axe1_verset: "Le mot kutubun est le sujet de la phrase nominale « fīhā kutubun qayyimatun » (dans elles des écrits droits). Le champ lexical est celui du contenu : les pages (v2) sont le contenant, les écrits (kutubun) sont le contenu. L'adjectif qayyimatun (droits) qualifie ces écrits — ce ne sont pas n'importe quels écrits, ce sont des écrits qui se tiennent droit.",
        axe2_voisins: "Le verset 2 a décrit le support (des pages purifiées), le verset 3 décrit le contenu (des écrits droits). La progression va du contenant au contenu. Le verset 4 montre la réaction face à ces écrits : la division — les gens se divisent après avoir reçu des écrits pourtant droits.",
        axe3_sourate: "La sourate identifie la preuve claire comme un envoyé récitant des pages contenant des écrits droits. Les écrits sont le cœur de la preuve : c'est leur contenu qui rend la preuve claire.",
        axe4_coherence: "Le Coran utilise kutub (pluriel) rarement — en 2:213 « et il a fait descendre avec eux le kitāb ». Le singulier kitāb désigne habituellement l'ensemble de la révélation, tandis que le pluriel kutub en 98:3 suggère des textes multiples au sein des pages.",
        axe5_frequence: "Les écrits sont le véhicule de la connaissance fixée. Pour la mission de justice, des écrits droits sont la base de tout jugement correct — ils fournissent la référence stable que l'oral ne peut pas garantir."
      },
      "Obligation/Décret": {
        status: "nul",
        senses: ["prescrire", "rendre obligatoire", "décret divin"],
        proof_ctx: "Le contexte est celui de pages contenant des textes, pas de décrets imposés. Le pluriel kutubun est descriptif, pas prescriptif."
      }
    }
  }, 2);
  console.log('  ktb → Livre/Écrit → "écrits"');

  // qwm (263) — Verticalité/Droiture [retenu]
  await upsertVWA(6133, 'qwm', {
    sense_chosen: "droits",
    concept_chosen: "Verticalité/Droiture",
    concepts: {
      "Verticalité/Droiture": {
        status: "retenu",
        senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger"],
        proof_ctx: "Le sens retenu est « Verticalité/Droiture ». Le mot qayyimatun est un adjectif féminin singulier indéfini de la forme intensive fa'ʿila — « droite ». La forme intensive indique que la droiture est une qualité intrinsèque et forte, pas superficielle. Le Lane's donne pour qāma : « se lever, se dresser, être droit ». La qayyima est ce qui se tient debout, droit, sans déviation. Les écrits sont qayyima parce qu'ils ne penchent ni à droite ni à gauche — ils sont droits en eux-mêmes.",
        axe1_verset: "Le mot qayyimatun qualifie kutubun (des écrits). Le champ lexical associe le contenu (écrits) à la qualité (droits). Avec les pages purifiées du v2, le tableau complet est : un contenant pur et un contenu droit. La droiture des écrits est la qualité qui en fait une preuve valide.",
        axe2_voisins: "Le mot qayyimatun revient au v5 sous la forme al-qayyimati (la droite) pour qualifier le mode de vie (dīn). Les écrits droits (v3) fondent un mode de vie droit (v5) : la droiture du texte produit la droiture de la pratique.",
        axe3_sourate: "La droiture est une qualité centrale dans la sourate : les écrits sont droits (v3), le mode de vie est droit (v5). La sourate oppose cette droiture à la division (v4) et à la couverture (v1) — ceux qui couvrent et se divisent s'éloignent de ce qui est droit.",
        axe4_coherence: "Le Coran utilise qayyim en 9:36 pour dīn al-qayyim (le mode de vie droit). En 12:40 « c'est le mode de vie le droit ». L'usage en 98:3 est cohérent : qayyima qualifie ce qui est intrinsèquement juste et stable.",
        axe5_frequence: "La droiture des écrits est la garantie que la justice repose sur une base solide. Des écrits droits ne peuvent pas mener à l'injustice — ils sont le fondement de la civilisation."
      }
    }
  }, 3);
  console.log('  qwm → Verticalité/Droiture → "droits"');

  await updateVerse(6133, {
    translation_arab: "dans lesquelles se trouvent des écrits droits.",
    full_translation: "dans lesquelles se trouvent des prescriptions d'une rectitude parfaite.",
    translation_explanation: `§DEMARCHE§

La préposition **fīhā** (dans elles) est composée de fī (dans) et du pronom suffixe hā (elle, féminin singulier ou pluriel non-humain). Le hā renvoie à ṣuḥufan (les pages) du v2 — dans les pages.

Le mot **kutubun** est un nom pluriel masculin indéfini au nominatif — « des écrits ». C'est le pluriel brisé de kitāb. Le nominatif indique que kutubun est le sujet de la phrase nominale (fīhā kutubun = dans elles sont des écrits).

Le mot **qayyimatun** est un adjectif féminin singulier indéfini de la forme intensive — « droits ». Le Lane's donne pour la racine q-w-m : « se lever, se dresser, être droit ». La forme intensive qayyim indique une droiture profonde et intrinsèque — pas une droiture imposée de l'extérieur mais une qualité propre.

La phrase est nominale (pas de verbe) : « dans elles — des écrits droits ». En arabe, la phrase nominale exprime un fait stable, permanent. Les écrits sont droits de manière permanente.

§JUSTIFICATION§

**écrits** — Le sens retenu est « Livre/Écrit ». Le mot « écrits » est choisi pour rendre kutubun comme le résultat de l'acte d'écrire. L'alternative « livres » est écartée car le pluriel kutubun dans le contexte de ṣuḥuf (pages) désigne des textes écrits dans des pages, pas des livres reliés. L'alternative « prescriptions » (Hamidullah) est écartée car kutub ne signifie pas prescription — c'est un ajout d'interprétation.

**droits** — Le sens retenu est « Verticalité/Droiture ». Le mot « droits » est choisi car il rend l'idée de ce qui se tient debout, sans déviation. L'alternative « justes » est écartée car la justice est un jugement, tandis que la droiture est une qualité physique (ce qui ne penche pas) transposée au texte.

§CRITIQUE§

**prescriptions vs écrits** — Hamidullah traduit kutubun par « prescriptions ». Le mot kutub vient de k-t-b (écrire) et signifie « écrits, textes écrits ». Le mot « prescription » ajoute l'idée d'obligation (prescrire = ordonner), qui n'est pas dans le mot kutub. Ce choix vient probablement de l'exégèse qui interprète les écrits comme des commandements. Mais le texte dit simplement « des écrits droits » — des textes qui se tiennent droit, pas des ordres à suivre.

**rectitude parfaite vs droits** — Le mot qayyimatun est un adjectif simple signifiant « droit ». L'ajout de « parfaite » est un renforcement absent du texte arabe.`,
    segments: [
      {fr:"dans lesquelles", pos:"particle", phon:"fīhā", arabic:"فِيهَا", is_particle:true, position:1},
      {fr:"des écrits", pos:"nom", phon:"kutubun", arabic:"كُتُبٌ", word_key:"ktb", is_particle:false, sense_retenu:"écrits", position:2},
      {fr:"droits.", pos:"adjectif", phon:"qayyimatun", arabic:"قَيِّمَةٌ", word_key:"qwm", is_particle:false, sense_retenu:"droit", position:3}
    ]
  });
  console.log('VERSET 98:3 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:4 (6134)
// وَمَا تَفَرَّقَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَةُ
// ============================================================
async function verse98_4() {
  console.log('\n====== VERSET 98:4 (6134) ======\n');

  // frq (515) — Séparation/Distinction
  await upsertVWA(6134, 'frq', {
    sense_chosen: "se diviser",
    concept_chosen: "Séparation/Distinction",
    concepts: {
      "Séparation/Distinction": {
        status: "retenu",
        senses: ["séparer", "distinguer", "diviser", "Furqân"],
        proof_ctx: "Le sens retenu est « Séparation/Distinction ». Le verbe tafarraqa est un accompli de la forme V — « ils se sont divisés ». La forme V (tafa''ala) est réflexive-intensive : le sujet se divise lui-même, de manière intense et complète. Le Lane's donne : « séparer, distinguer, diviser ». La division ici est un éclatement du groupe en factions. La distinction avec « Groupe/Partie » : le groupe est le résultat statique de la division, la séparation est le mouvement de division lui-même. Le verbe tafarraqa décrit le mouvement, pas l'état résultant.",
        axe1_verset: "Le verbe tafarraqa est précédé de la négation mā et suivi de illā (sauf, excepté) — « ils ne se sont divisés QUE après ». La construction mā...illā est une restriction : la division n'a eu lieu que dans une circonstance précise. Le complément « min ba'di mā jā'athum al-bayyinatu » (après que la preuve claire leur est venue) identifie cette circonstance. La division est une conséquence de l'arrivée de la preuve, pas un état antérieur.",
        axe2_voisins: "Le verset 1 dit que les gens ne pouvaient pas se détacher avant la preuve. Le verset 4 dit qu'ils se sont divisés après la preuve. Paradoxe : la preuve qui devait permettre le détachement a provoqué la division. Les deux verbes (fkk et frq) décrivent deux réalités opposées : le détachement libère, la division fragmente.",
        axe3_sourate: "La division est le drame central de la sourate : les écrits sont droits (v3), mais les gens se divisent quand même (v4). La preuve claire ne produit pas l'unité — elle produit le tri. Les versets 6-7 montrent le résultat de cette division : les pires et les meilleurs.",
        axe4_coherence: "Le Coran dénonce la division des gens du Livre en 3:105 « ne soyez pas comme ceux qui se sont divisés et disputés après que les preuves claires leur sont venues ». L'usage en 98:4 est identique : la division vient APRÈS la preuve, pas avant.",
        axe5_frequence: "La division est l'ennemi de la mission de justice et de civilisation. Le texte montre que même une preuve claire ne garantit pas l'unité — la responsabilité humaine reste entière."
      },
      "Groupe/Partie": {
        status: "nul",
        senses: ["groupe", "partie"],
        proof_ctx: "Le verbe tafarraqa décrit l'acte de se diviser, pas le résultat (des groupes). Le contexte est celui du mouvement de division, pas de l'existence de factions."
      }
    }
  }, 2);
  console.log('  frq → Séparation/Distinction → "se diviser"');

  // byn (596) — réutilisé pour v4
  await upsertVWA(6134, 'byn', {
    sense_chosen: "preuve claire",
    concept_chosen: "Clarté/Évidence",
    concepts: {
      "Clarté/Évidence": {
        status: "retenu",
        senses: ["être clair", "expliquer", "évident", "preuve"],
        proof_ctx: "Le sens retenu est « Clarté/Évidence ». Le mot al-bayyinatu réapparaît ici avec l'article al — la même preuve claire que celle du v1. Cette fois, elle est en position de sujet du verbe jā'athum (elle leur est venue). Le verset dit que la division n'a eu lieu qu'APRÈS cette venue. La preuve est donc le déclencheur du changement — avant elle, pas de détachement ; après elle, la division.",
        axe1_verset: "Le mot al-bayyinatu est le sujet de jā'athum dans la proposition temporelle « après que la preuve claire leur est venue ». Son rôle est de marquer le point de basculement : avant = pas de changement, après = division. Le champ lexical du verset est celui du temps et de la causalité : la preuve est la cause, la division est l'effet.",
        axe2_voisins: "C'est la deuxième occurrence de al-bayyina dans la sourate (après v1). Le verset 1 l'annonçait comme la condition du détachement, le verset 4 la montre comme le déclencheur de la division. La même preuve produit deux effets : elle devait libérer, elle a divisé.",
        axe3_sourate: "La bayyina est le fil conducteur de la sourate : v1 (attente de la preuve), v2-3 (description de la preuve), v4 (effet de la preuve). Tout s'articule autour d'elle.",
        axe4_coherence: "Le Coran associe bayyina et division en 3:105 et 42:14. La preuve claire ne garantit pas l'adhésion — elle rend la division inexcusable.",
        axe5_frequence: "La preuve rend chacun responsable : après elle, la division est un choix, pas une ignorance."
      }
    }
  }, 11);
  console.log('  byn → Clarté/Évidence → "preuve claire"');

  await updateVerse(6134, {
    translation_arab: "Et ceux à qui l'écrit a été donné ne se sont divisés qu'après que la preuve claire leur est venue.",
    full_translation: "Et ceux à qui le Livre a été donné ne se sont divisés qu'après que la preuve leur fut venue.",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et) relie ce verset au précédent — la description de la preuve (v2-3) est suivie de la réaction des gens face à elle.

La construction **mā tafarraqa...illā** est une négation-exception : « ils ne se sont divisés QU'après ». Mā est la négation, illā est l'exception. Le verbe **tafarraqa** est un accompli de la forme V de f-r-q — « ils se sont divisés ». La forme V est réflexive et intensive : le sujet se divise lui-même, de l'intérieur. Ce n'est pas un agent extérieur qui les divise — ils se fragmentent d'eux-mêmes.

Le pronom relatif **alladhīna** (ceux qui) introduit le groupe concerné, suivi de **ūtū** — un accompli passif de la forme IV de a-t-y — « il leur a été donné ». La forme IV passive signifie « on leur a fait donner, on leur a accordé ». Le sujet passif reçoit l'écrit sans l'avoir demandé.

Le mot **al-kitāba** est l'accusatif défini de kitāb — « l'écrit ». L'article al le distingue de kutubun du v3 (des écrits) : ici c'est L'écrit, celui qui est connu et identifié.

La proposition **min ba'di mā jā'athum al-bayyinatu** est temporelle : « après que la preuve claire leur est venue ». Le verbe jā'at est un accompli féminin de j-y-' (venir) — la preuve est venue à eux.

§JUSTIFICATION§

**se sont divisés** — Le sens retenu est « Séparation/Distinction ». Le mot « se sont divisés » rend la forme V réflexive : ils se sont divisés eux-mêmes. L'alternative « se sont séparés » est écartée car la séparation peut être neutre (on se sépare en se quittant), alors que la division implique la fragmentation d'un tout en parties antagonistes.

**l'écrit** — Le même mot que dans v1 (al-kitāb), sens « Écriture/Inscription ». L'alternative « le Livre » (avec majuscule) est écartée car la majuscule sacralise le mot, alors que kitāb signifie simplement « ce qui est écrit ».

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La seule différence notable est « le Livre » (avec majuscule) chez Hamidullah, ce qui sacralise le mot kitāb au-delà de son sens étymologique.`,
    segments: [
      {fr:"Et (ne)", pos:"particle", phon:"wa-mā", arabic:"وَمَا", is_particle:true, position:1},
      {fr:"se sont divisés", pos:"verbe", phon:"tafarraqa", arabic:"تَفَرَّقَ", word_key:"frq", is_particle:false, sense_retenu:"se diviser", position:2},
      {fr:"ceux à qui", pos:"particle", phon:"alladhīna", arabic:"ٱلَّذِينَ", is_particle:true, position:3},
      {fr:"il a été donné", pos:"verbe", phon:"ūtū", arabic:"أُوتُوا۟", word_key:"aty", is_particle:false, sense_retenu:"donner", position:4},
      {fr:"l'écrit", pos:"nom", phon:"al-kitāba", arabic:"ٱلْكِتَـٰبَ", word_key:"ktb", is_particle:false, sense_retenu:"écrit", position:5},
      {fr:"(qu')après que", pos:"particle", phon:"illā min ba'di mā", arabic:"إِلَّا مِنۢ بَعْدِ مَا", is_particle:true, position:6},
      {fr:"leur est venue", pos:"verbe", phon:"jā'athum", arabic:"جَآءَتْهُمُ", word_key:"jya", is_particle:false, sense_retenu:"venir", position:10},
      {fr:"la preuve claire.", pos:"nom", phon:"al-bayyinatu", arabic:"ٱلْبَيِّنَةُ", word_key:"byn", is_particle:false, sense_retenu:"preuve claire", position:11}
    ]
  });
  console.log('VERSET 98:4 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:5 (6135) — le plus long
// ============================================================
async function verse98_5() {
  console.log('\n====== VERSET 98:5 (6135) ======\n');

  // ebd (259) — Adoration/Dévotion [retenu]
  await upsertVWA(6135, 'ebd', {
    sense_chosen: "servir",
    concept_chosen: "Adoration/Dévotion",
    concepts: {
      "Adoration/Dévotion": {
        status: "retenu",
        senses: ["adorer", "servir", "vouer un culte", "se dévouer"],
        proof_ctx: "Le sens retenu est « Adoration/Dévotion ». Le verbe ya'budū est un inaccompli au subjonctif (après li) — « qu'ils servent ». Le Lane's donne pour 'abada : « he served, worshipped, adored ». Le sens premier est servir — l'adoration est un service dédié. L'inaccompli après li (pour, afin que) exprime le but : ils n'ont été ordonnés que POUR servir Dieu. La distinction avec « Servitude/Esclavage » : la servitude est un état imposé, l'adoration est un service volontaire et dédié.",
        axe1_verset: "Le verbe ya'budū est au centre d'une structure de restriction : mā umirū illā li-ya'budū (ils n'ont été ordonnés que pour servir). Le champ lexical combine le commandement (amr, passif), le service (ebd), la pureté d'intention (xls), le mode de vie (dyn), la droiture (hnf), la prière (slw), la purification (zkw). Tous ces mots convergent vers une pratique intégrée.",
        axe2_voisins: "Le verset 4 montrait la division. Le verset 5 dit ce qui leur avait été ordonné : servir Dieu. Le contraste est fort : au lieu de se diviser, ils auraient dû servir. Le verset 5 est le rappel de l'instruction originelle face à la division constatée.",
        axe3_sourate: "Le service de Dieu est le contenu pratique de la preuve claire : les écrits droits (v3) ordonnent de servir, et ce service constitue le mode de vie droit (fin du v5).",
        axe4_coherence: "Le Coran utilise ya'budū Allāha fréquemment : en 51:56 « je n'ai créé les djinns et les humains que pour qu'ils me servent ». L'usage en 98:5 est identique.",
        axe5_frequence: "Le service est le fondement de la mission du khalifa : servir Dieu signifie agir selon la justice et la droiture dans le monde."
      }
    }
  }, 4);
  console.log('  ebd → Adoration/Dévotion → "servir"');

  // xls (699) — Pureté/Sincérité
  await upsertVWA(6135, 'xls', {
    sense_chosen: "rendant pur",
    concept_chosen: "Pureté/Sincérité",
    concepts: {
      "Pureté/Sincérité": {
        status: "retenu",
        senses: ["purifier", "sincère", "dévoué"],
        proof_ctx: "Le sens retenu est « Pureté/Sincérité ». Le mot mukhliṣīna est un participe actif pluriel masculin de la forme IV de kh-l-ṣ — « rendant pur ». La forme IV est causative : le sujet fait devenir pur. Le participe actif indique que le sujet accomplit activement cette purification. Le Lane's donne pour khalaṣa : « être pur, sincère ». La forme IV akhlaṣa : « rendre pur, dédier exclusivement ». Ils servent Dieu EN rendant pur à Lui le mode de vie — leur intention est purifiée de tout mélange.",
        axe1_verset: "Le mot mukhliṣīna est en position de ḥāl (état) : « servant Dieu EN ÉTAT DE rendant pur à Lui le mode de vie ». Le champ lexical de la pureté traverse le verset : rendant pur (xls) rejoint la purification (zkw) et la droiture (hnf). La pureté d'intention est la condition du service valide.",
        axe2_voisins: "Le verset 4 montre la division — l'impureté de l'intention mène à la fragmentation. Le verset 5 prescrit la pureté comme remède : en rendant pur le mode de vie, la division n'a pas de raison d'être.",
        axe3_sourate: "La pureté est un thème récurrent : les pages sont purifiées (v2), les écrits sont droits (v3), le mode de vie doit être rendu pur (v5). La pureté va du texte à la pratique.",
        axe4_coherence: "Le Coran utilise mukhliṣīna lahu al-dīna en 7:29, 10:22, 29:65, 31:32, 39:2, 39:11, 40:14, 40:65 — c'est une formule récurrente qui associe toujours la pureté au mode de vie dédié à Dieu.",
        axe5_frequence: "La pureté d'intention est ce qui distingue le service authentique de l'hypocrisie. Pour la mission de justice, l'action pure est celle qui vise le bien commun sans arrière-pensée."
      }
    }
  }, 6);
  console.log('  xls → Pureté/Sincérité → "rendant pur"');

  // hnf (811) — Inclinaison/Droiture
  await upsertVWA(6135, 'hnf', {
    sense_chosen: "inclinés vers le vrai",
    concept_chosen: "Inclinaison/Droiture",
    concepts: {
      "Inclinaison/Droiture": {
        status: "retenu",
        senses: ["s'incliner vers la vérité", "être monothéiste pur (hanif)", "se détourner du faux"],
        proof_ctx: "Le sens retenu est « Inclinaison/Droiture ». Le mot ḥunafā'a est un nom pluriel masculin à l'accusatif — « inclinés vers le vrai ». Le Lane's donne pour ḥanafa : « he inclined, or declined, from error to guidance ». Le ḥanīf est celui qui penche du côté du vrai et s'éloigne du faux. C'est un mouvement d'inclinaison — pas une position fixe mais une tendance active. La distinction avec « Déviation/Courbure » : la déviation est physique et neutre (pied bot, courbure), l'inclinaison est un mouvement moral vers le vrai. Le mot ḥunafā' décrit un état moral, pas physique.",
        axe1_verset: "Le mot ḥunafā'a est en position de ḥāl (état) : « servant Dieu, rendant pur le mode de vie, INCLINÉS VERS LE VRAI ». Il ajoute une qualité supplémentaire aux serviteurs : non seulement ils rendent pur leur mode de vie, mais ils sont activement inclinés vers la vérité. Le champ lexical de la droiture est renforcé par qwm (droit, qayyima) à la fin du verset.",
        axe2_voisins: "L'inclinaison vers le vrai est l'opposé de la division (v4). Ceux qui se divisent s'éloignent de la droiture. Ceux qui sont ḥunafā' restent orientés vers la vérité.",
        axe3_sourate: "La sourate oppose ceux qui couvrent (v1) et se divisent (v4) à ceux qui sont inclinés vers le vrai (v5). L'inclinaison est la posture correcte face à la preuve claire.",
        axe4_coherence: "Le Coran utilise ḥanīf en 2:135, 3:67, 6:79, 6:161 pour décrire Ibrahim comme ḥanīf — celui qui s'est incliné vers le vrai en quittant les idoles. L'usage en 98:5 applique cette qualité à tous les serviteurs.",
        axe5_frequence: "L'inclinaison vers le vrai est le mouvement fondamental du khalifa : pencher du côté de la justice et s'éloigner de la corruption. C'est une orientation permanente, pas un acte ponctuel."
      },
      "Déviation/Courbure": {
        status: "nul",
        senses: ["pied bot", "être tordu"],
        proof_ctx: "Le contexte moral du verset exclut le sens physique de courbure. Le pluriel ḥunafā' est toujours moral dans le Coran."
      }
    }
  }, 9);
  console.log('  hnf → Inclinaison/Droiture → "inclinés vers le vrai"');

  await updateVerse(6135, {
    translation_arab: "Et il ne leur a été ordonné que de servir Dieu, Lui rendant pur le mode de vie, inclinés vers le vrai, d'établir la prière et de donner la purification. Et c'est là le mode de vie droit.",
    full_translation: "Il ne leur a été commandé, cependant, que d'adorer Allah, Lui vouant un culte exclusif, d'accomplir la Salât et d'acquitter la Zakât. Et voilà la religion de droiture.",
    translation_explanation: `§DEMARCHE§

La construction **wa mā umirū illā** est une restriction : « et il ne leur a été ordonné que ». Le verbe umirū est un accompli passif de a-m-r (ordonner) — « il leur a été ordonné ». Le passif ne nomme pas celui qui ordonne.

Le **li** devant **ya'budū** est la préposition de but — « pour qu'ils servent ». Le verbe ya'budū est un inaccompli subjonctif de 'a-b-d. Le complément **Allāha** est à l'accusatif — objet direct du service.

Le mot **mukhliṣīna** est un participe actif pluriel de la forme IV de kh-l-ṣ. La forme IV (akhlaṣa) est causative : « rendre pur, purifier ». Le participe actif indique un état en cours : « en état de rendre pur ». Le complément **lahu** (à Lui) indique le bénéficiaire : ils rendent pur À LUI. Le mot **al-dīna** (le mode de vie) est l'objet : ce qui est rendu pur c'est le mode de vie.

Le mot **ḥunafā'a** est le pluriel de ḥanīf — « inclinés vers le vrai ». C'est un deuxième ḥāl (état) : ils servent Dieu, rendant pur et inclinés vers le vrai.

Les verbes **yuqīmū** (établir, forme IV de q-w-m) et **yu'tū** (donner, forme IV de a-t-y) sont coordonnés au subjonctif avec le même li initial. **Al-ṣalāta** (la prière) et **al-zakāta** (la purification) sont les deux objets.

La phrase finale **wa dhālika dīnu al-qayyimati** est nominale : « et cela est le mode de vie de la droite ». Le dīn est en idāfa avec al-qayyima (la droite) — le mode de vie de la droiture.

§JUSTIFICATION§

**servir** — Le sens retenu est « Adoration/Dévotion ». Le mot « servir » rend le sens premier de 'abada (servir, se dévouer). L'alternative « adorer » est écartée car adorer en français a pris un sens principalement émotionnel (j'adore ce film), tandis que servir garde le sens d'un acte concret et continu.

**rendant pur** — Le sens retenu est « Pureté/Sincérité ». La formulation « rendant pur » traduit le participe actif de la forme IV causative. L'alternative « vouant un culte exclusif » (Hamidullah) est écartée car elle ajoute le mot « culte » absent du texte et transforme la pureté en exclusivité.

**le mode de vie** — Le sens de dīn est « mode de vie, voie, pratique ». L'alternative « religion » est écartée car « religion » en français implique un système de croyances organisé avec clergé et institutions, alors que dīn désigne une manière de vivre.

**inclinés vers le vrai** — Le sens retenu est « Inclinaison/Droiture ». L'alternative « monothéistes purs » est écartée car hanīf ne contient pas le concept de monothéisme — il décrit un mouvement d'inclinaison vers la vérité.

**prière** — Le sens retenu de ṣalāt est « Prière/Invocation ». Le mot français « prière » est courant et rend l'idée de l'invocation rituelle.

**purification** — Le sens retenu de zakāt est « Purification/Croissance ». Le mot « purification » rend le sens premier de la racine z-k-w (être pur, croître). L'alternative « aumône » est un sens dérivé — la zakāt est d'abord un acte de purification de ses biens.

§CRITIQUE§

**religion vs mode de vie** — Hamidullah traduit dīn par « religion ». Le mot dīn vient de d-y-n dont le Lane's donne : obéissance, habitude, pratique, rétribution. Le mot « religion » vient du latin religio (lien avec le divin) et implique un système de croyances organisé. Le dīn est plus large : c'est une manière de vivre selon une voie, pas nécessairement un système religieux au sens occidental.

**culte exclusif vs rendant pur le mode de vie** — Hamidullah traduit mukhliṣīna lahu al-dīna par « Lui vouant un culte exclusif ». Le texte dit mukhliṣīna (rendant pur) + lahu (à Lui) + al-dīna (le mode de vie). Le mot « culte » est absent du texte arabe. Le mot « exclusif » traduit l'idée de pureté par l'idée d'exclusivité — une nuance différente. Rendre pur son mode de vie signifie le débarrasser de tout ce qui le corrompt, pas simplement l'adresser à un seul destinataire.

**Salât et Zakât** — Hamidullah laisse ces mots en arabe, ce qui empêche le lecteur francophone de comprendre leur sens étymologique. Ṣalāt vient de ṣ-l-w (prière, invocation), zakāt vient de z-k-w (purification, croissance). Traduire ces mots permet au lecteur de comprendre ce que ces pratiques sont fondamentalement.`,
    segments: [
      {fr:"Et (il ne)", pos:"particle", phon:"wa-mā", arabic:"وَمَآ", is_particle:true, position:1},
      {fr:"leur a été ordonné", pos:"verbe", phon:"umirū", arabic:"أُمِرُوٓا۟", word_key:"amr", is_particle:false, sense_retenu:"ordonner", position:2},
      {fr:"(que) de", pos:"particle", phon:"illā li-", arabic:"إِلَّا لِ", is_particle:true, position:3},
      {fr:"servir", pos:"verbe", phon:"ya'budū", arabic:"يَعْبُدُوا۟", word_key:"ebd", is_particle:false, sense_retenu:"servir", position:4},
      {fr:"Dieu,", pos:"nom", phon:"Allāha", arabic:"ٱللَّهَ", word_key:"alh", is_particle:false, sense_retenu:"divinité", position:5},
      {fr:"Lui rendant pur", pos:"nom", phon:"mukhliṣīna lahu", arabic:"مُخْلِصِينَ لَهُ", word_key:"xls", is_particle:false, sense_retenu:"rendant pur", position:6},
      {fr:"le mode de vie,", pos:"nom", phon:"al-dīna", arabic:"ٱلدِّينَ", word_key:"dyn", is_particle:false, sense_retenu:"mode de vie", position:8},
      {fr:"inclinés vers le vrai,", pos:"nom", phon:"ḥunafā'a", arabic:"حُنَفَآءَ", word_key:"hnf", is_particle:false, sense_retenu:"inclinés vers le vrai", position:9},
      {fr:"et d'établir", pos:"verbe", phon:"wa yuqīmū", arabic:"وَيُقِيمُوا۟", word_key:"qwm", is_particle:false, sense_retenu:"établir", position:10},
      {fr:"la prière", pos:"nom", phon:"al-ṣalāta", arabic:"ٱلصَّلَوٰةَ", word_key:"slw", is_particle:false, sense_retenu:"prière", position:11},
      {fr:"et de donner", pos:"verbe", phon:"wa yu'tū", arabic:"وَيُؤْتُوا۟", word_key:"aty", is_particle:false, sense_retenu:"donner", position:12},
      {fr:"la purification.", pos:"nom", phon:"al-zakāta", arabic:"ٱلزَّكَوٰةَ", word_key:"zkw", is_particle:false, sense_retenu:"purification", position:13},
      {fr:"Et c'est là", pos:"particle", phon:"wa dhālika", arabic:"وَذَٰلِكَ", is_particle:true, position:14},
      {fr:"le mode de vie", pos:"nom", phon:"dīnu", arabic:"دِينُ", word_key:"dyn", is_particle:false, sense_retenu:"mode de vie", position:15},
      {fr:"droit.", pos:"nom", phon:"al-qayyimati", arabic:"ٱلْقَيِّمَةِ", word_key:"qwm", is_particle:false, sense_retenu:"droit", position:16}
    ]
  });
  console.log('VERSET 98:5 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:6 (6136)
// ============================================================
async function verse98_6() {
  console.log('\n====== VERSET 98:6 (6136) ======\n');

  // shrr (1011) — Mal/Méchanceté [retenu]
  await upsertVWA(6136, 'shrr', {
    sense_chosen: "les pires",
    concept_chosen: "Mal/Méchanceté",
    concepts: {
      "Mal/Méchanceté": {
        status: "retenu",
        senses: ["mal", "être mauvais", "méchanceté"],
        proof_ctx: "Le sens retenu est « Mal/Méchanceté ». Le mot sharru est un nom masculin défini par l'idāfa avec al-bariyyati — « les pires de la création ». Le sharr est le superlatif de ce qui est mauvais. Le Lane's donne : « mal, être mauvais, méchanceté ». Dans ce verset, sharru fonctionne comme un élatif (superlatif) : non pas le mal en général mais le degré le plus extrême du mal.",
        axe1_verset: "Le mot sharru est en position de khabar (attribut) dans la phrase nominale « ulā'ika hum sharru al-bariyyati » (ceux-là sont les pires de la création). Le champ lexical est celui du jugement moral définitif : la particule inna (certes) ouvre le verset, le pronom de séparation hum (eux) isole le groupe, sharru les qualifie au degré extrême. L'ensemble forme une sentence sans appel.",
        axe2_voisins: "Le verset 7 pose l'exact contraire : « ceux-là sont les meilleurs de la création » (khayru al-bariyyati). Les deux versets forment un couple parfait : sharru/khayru, les pires/les meilleurs. Le critère de tri est la couverture (v6) vs la confiance (v7).",
        axe3_sourate: "La sourate aboutit à un tri : après la preuve claire (v1-3), la division (v4), le rappel du commandement (v5), vient le jugement : les uns sont les pires, les autres les meilleurs. Ce tri est la finalité de la preuve.",
        axe4_coherence: "Le Coran utilise sharru al-bariyyati uniquement en 98:6. C'est la formulation la plus forte du jugement négatif dans le Coran — non pas les mauvais, mais les PIRES de toute la création.",
        axe5_frequence: "Le jugement de pire/meilleur est le résultat de la mission de justice : les actes sont évalués et classés. Le texte ne dit pas « punis » mais « les pires » — c'est un constat, pas une punition arbitraire."
      }
    }
  }, 15);
  console.log('  shrr → Mal/Méchanceté → "les pires"');

  // bra (555) — Création/Origination
  await upsertVWA(6136, 'bra', {
    sense_chosen: "la création",
    concept_chosen: "Création/Origination",
    concepts: {
      "Création/Origination": {
        status: "retenu",
        senses: ["créer", "façonner"],
        proof_ctx: "Le sens retenu est « Création/Origination ». Le mot al-bariyyati est un nom féminin défini au génitif — « de la création ». Le Lane's donne pour bara'a : « créer, façonner ». La bariyya est l'ensemble de ce qui est créé, la création dans sa totalité. L'article al indique toute la création sans exception. La distinction avec « Innocence/Pureté » : l'innocence est un état moral de la personne, la création est l'ensemble des êtres. Le contexte (sharru al-bariyyati = les pires DE LA CRÉATION) exige le sens d'ensemble créé, pas d'innocence.",
        axe1_verset: "Le mot al-bariyyati est le complément de sharru en idāfa : « les pires de la création ». Le sens est superlatif absolu : parmi TOUT ce qui est créé, ces gens sont les pires. L'amplitude est maximale — pas juste les pires parmi les humains mais parmi toute la création.",
        axe2_voisins: "Le mot réapparaît au v7 dans khayru al-bariyyati (les meilleurs de la création). La même échelle, les deux extrêmes. La création est le cadre de référence pour les deux jugements.",
        axe3_sourate: "La sourate commence par des groupes humains (gens du Livre, ceux qui associent) et finit par les situer dans l'échelle de toute la création. Le passage du particulier à l'universel amplifie le jugement.",
        axe4_coherence: "Le Coran utilise bariyya en 98:6 et 98:7 uniquement. C'est un hapax contextuel qui donne à ces deux versets une portée unique.",
        axe5_frequence: "Situer les humains dans l'échelle de la création rappelle leur responsabilité : le khalifa peut être le meilleur ou le pire de ce qui existe."
      },
      "Innocence/Pureté": {
        status: "nul",
        senses: ["être innocent", "se désavouer"],
        proof_ctx: "Le contexte exige le sens d'ensemble créé (sharru de quoi ? de la création). L'innocence n'a pas de sens ici."
      }
    }
  }, 16);
  console.log('  bra → Création/Origination → "la création"');

  await updateVerse(6136, {
    translation_arab: "Ceux qui ont couvert, parmi les gens de l'écrit et ceux qui associent, seront dans le feu de la géhenne, y demeurant pour toujours. Ceux-là sont les pires de la création.",
    full_translation: "Les infidèles parmi les gens du Livre, ainsi que les Associateurs iront au feu de l'Enfer, pour y demeurer éternellement. Ceux-là sont les pires de toute la création.",
    translation_explanation: `§DEMARCHE§

La particule **inna** (certes) ouvre le verset avec emphase — ce qui suit est une affirmation forte.

La construction **alladhīna kafarū min ahli al-kitābi wa al-mushrikīna** reprend exactement la même formule que le v1 : même groupe, même description. Le texte revient sur eux après avoir décrit la preuve (v2-3), la division (v4) et le commandement (v5).

La préposition **fī nāri jahannama** (dans le feu de la géhenne) indique le lieu. Le mot **nār** vient de la racine n-w-r qui donne aussi nūr (lumière) — le feu est la forme destructrice de l'énergie lumineuse. **Jahannam** est un nom propre qui n'est pas traduit.

Le participe **khālidīna** (demeurant) est un participe actif pluriel de kh-l-d — « ceux qui demeurent ». C'est un état permanent, continu. Le complément **fīhā** (dans elle) renvoie au feu.

La phrase **ulā'ika hum sharru al-bariyyati** est une phrase nominale emphatique : le pronom de séparation hum isole le sujet pour l'identifier exclusivement à l'attribut. « Ceux-là, EUX, sont les pires de la création. »

§JUSTIFICATION§

**couvert** — Même justification que v1.

**le feu de la géhenne** — Nār est traduit par « feu » (sens premier). Jahannam est un nom propre géographique laissé tel quel avec la francisation « géhenne ».

**demeurant pour toujours** — Le sens retenu de khālidīna est « Éternité/Permanence ». Le participe actif décrit un état continu. L'alternative « éternellement » (adverbe) est écartée car le texte utilise un participe (état du sujet), pas un adverbe (manière).

**les pires de la création** — Le sens retenu de sharr est « Mal/Méchanceté » au degré superlatif. Le mot « pires » rend l'élatif arabe. Le sens retenu de bariyya est « Création/Origination » — l'ensemble de ce qui est créé.

§CRITIQUE§

**Enfer vs géhenne** — Hamidullah traduit jahannam par « Enfer ». Le mot « Enfer » vient du latin infernus (le monde d'en bas) et porte tout le bagage de la théologie chrétienne médiévale. Jahannam est un nom propre qui n'a pas cette charge — « géhenne » est la francisation du mot jahannam et préserve le terme original.

Pour le reste (« infidèles » vs « ceux qui ont couvert »), la critique est la même que pour le verset 1.`,
    segments: [
      {fr:"Certes", pos:"particle", phon:"inna", arabic:"إِنَّ", is_particle:true, position:1},
      {fr:"ceux qui", pos:"particle", phon:"alladhīna", arabic:"ٱلَّذِينَ", is_particle:true, position:2},
      {fr:"ont couvert,", pos:"verbe", phon:"kafarū", arabic:"كَفَرُوا۟", word_key:"kfr", is_particle:false, sense_retenu:"couvrir", position:3},
      {fr:"parmi", pos:"particle", phon:"min", arabic:"مِنْ", is_particle:true, position:4},
      {fr:"les gens de", pos:"nom", phon:"ahli", arabic:"أَهْلِ", word_key:"ahl", is_particle:false, sense_retenu:"gens de", position:5},
      {fr:"l'écrit", pos:"nom", phon:"al-kitābi", arabic:"ٱلْكِتَـٰبِ", word_key:"ktb", is_particle:false, sense_retenu:"écrit", position:6},
      {fr:"et ceux qui associent,", pos:"nom", phon:"wa al-mushrikīna", arabic:"وَٱلْمُشْرِكِينَ", word_key:"šrk", is_particle:false, sense_retenu:"associer", position:7},
      {fr:"dans", pos:"particle", phon:"fī", arabic:"فِى", is_particle:true, position:8},
      {fr:"le feu de", pos:"nom", phon:"nāri", arabic:"نَارِ", word_key:"nwr", is_particle:false, sense_retenu:"feu", position:9},
      {fr:"la géhenne,", pos:"nom", phon:"jahannama", arabic:"جَهَنَّمَ", is_particle:false, position:10},
      {fr:"y demeurant pour toujours.", pos:"nom", phon:"khālidīna fīhā", arabic:"خَـٰلِدِينَ فِيهَآ", word_key:"xld", is_particle:false, sense_retenu:"demeurer pour toujours", position:11},
      {fr:"Ceux-là", pos:"particle", phon:"ulā'ika", arabic:"أُو۟لَـٰٓئِكَ", is_particle:true, position:13},
      {fr:"sont", pos:"particle", phon:"hum", arabic:"هُمْ", is_particle:true, position:14},
      {fr:"les pires", pos:"nom", phon:"sharru", arabic:"شَرُّ", word_key:"shrr", is_particle:false, sense_retenu:"les pires", position:15},
      {fr:"de la création.", pos:"nom", phon:"al-bariyyati", arabic:"ٱلْبَرِيَّةِ", word_key:"bra", is_particle:false, sense_retenu:"la création", position:16}
    ]
  });
  console.log('VERSET 98:6 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:7 (6137)
// إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أُو۟لَـٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ
// ============================================================
async function verse98_7() {
  console.log('\n====== VERSET 98:7 (6137) ======\n');

  // amn (287) — Sécurité/Confiance [retenu]
  await upsertVWA(6137, 'amn', {
    sense_chosen: "accordé confiance",
    concept_chosen: "Sécurité/Confiance",
    concepts: {
      "Sécurité/Confiance": {
        status: "retenu",
        senses: ["être en sécurité", "se sentir en sécurité", "faire confiance", "confier"],
        proof_ctx: "Le sens retenu est « Sécurité/Confiance ». Le verbe āmanū est un accompli de la forme IV de a-m-n — « ils ont accordé confiance ». La forme IV est causative : le sujet fait naître la confiance, il l'accorde. Le Lane's donne pour amina : « être en sécurité ». La forme IV āmana : « accorder la sécurité, donner confiance ». Le verbe à l'accompli indique un acte achevé : ils ont déjà accordé confiance. La distinction avec « Foi/Adhésion » : la foi est une croyance intérieure abstraite, la confiance est un acte relationnel qui engage — on accorde confiance À quelqu'un ou À quelque chose.",
        axe1_verset: "Le verbe āmanū est le premier qualificatif du groupe opposé aux kāfirūna du v6. Le champ lexical oppose : couvrir (kfr, v6) ↔ accorder confiance (amn, v7). Les deux groupes sont définis par leur acte fondamental. Le verset ajoute wa 'amilū al-ṣāliḥāti (et fait les actes bons) — la confiance seule ne suffit pas, elle doit être accompagnée d'actes.",
        axe2_voisins: "Le verset 6 identifiait les pires, le v7 identifie les meilleurs. Le critère de distinction est double : confiance + actes bons (v7) vs couverture (v6). La structure parallèle est parfaite.",
        axe3_sourate: "La sourate aboutit à ce tri : les pires et les meilleurs. Ceux qui ont accordé confiance sont dans le camp des meilleurs — la confiance est la réponse correcte à la preuve claire.",
        axe4_coherence: "Le Coran couple systématiquement āmanū et 'amilū al-ṣāliḥāti (plus de 50 occurrences). C'est la formule standard pour décrire le groupe vertueux.",
        axe5_frequence: "Accorder confiance est le premier pas de la mission de justice : sans confiance dans la preuve, pas d'action juste possible."
      },
      "Foi/Adhésion": {
        status: "probable",
        senses: ["croire", "avoir la foi", "accepter comme vrai"],
        proof_ctx: "La foi comme croyance intérieure est un sens valide mais plus restrictif. La confiance est relationnelle (on fait confiance à quelqu'un), la foi peut être solitaire (je crois en quelque chose). La forme IV causative oriente vers un acte dirigé vers l'extérieur (accorder), ce qui favorise la confiance. La distinction philosophique : la confiance engage dans une relation, la foi peut rester une conviction personnelle.",
        axe1_verset: "La foi fonctionnerait dans le verset : ceux qui ont cru et fait les actes bons. Mais l'opposition avec kafarū (couvrir) favorise un sens plus actif : couvrir ↔ découvrir/accorder confiance plutôt que couvrir ↔ croire.",
        axe2_voisins: "Le contexte des versets voisins est celui de l'acte, pas de la croyance intérieure : servir (v5), établir la prière (v5), donner la purification (v5).",
        axe3_sourate: "La sourate est centrée sur la preuve et la réaction à la preuve — accorder confiance est une réponse plus concrète que croire.",
        axe4_coherence: "Le Coran utilise āmanū dans des contextes de relation de confiance (āmana bi = faire confiance à, 2:3).",
        axe5_frequence: "La foi comme conviction personnelle est moins directement liée à l'action que la confiance relationnelle."
      }
    }
  }, 3);
  console.log('  amn → Sécurité/Confiance → "accordé confiance"');

  // ḫyr (557) — Bien/Excellence (step1 key: xyr → ḫyr)
  await upsertVWA(6137, 'ḫyr', {
    sense_chosen: "les meilleurs",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien", "meilleur", "bon"],
        proof_ctx: "Le sens retenu est « Bien/Excellence ». Le mot khayru est un élatif (superlatif) en idāfa avec al-bariyyati — « les meilleurs de la création ». Le Lane's donne pour khayr : « bien, meilleur, bon ». Le khayr est l'opposé exact du sharr. Dans ce verset, il fonctionne comme superlatif absolu : les meilleurs de TOUTE la création. La distinction avec « Choix/Préférence » : le choix est un acte de sélection, le bien est une qualité intrinsèque. Le contexte est celui du jugement moral, pas de la sélection.",
        axe1_verset: "Le mot khayru est en position de khabar (attribut) dans « ulā'ika hum khayru al-bariyyati ». La structure est identique au v6 (sharru → khayru). Le champ lexical est celui du mérite moral : confiance (amn) + actes bons (eml + slh) = meilleur (ḫyr).",
        axe2_voisins: "Le v6 posait les pires, le v7 pose les meilleurs. Symétrie parfaite. Le v8 détaille la récompense des meilleurs.",
        axe3_sourate: "Le mot khayru est le verdict positif de la sourate, comme sharru était le verdict négatif. Les deux termes encadrent le jugement final.",
        axe4_coherence: "Le Coran utilise le couple khayr/sharr abondamment. L'usage en 98:7 est le superlatif le plus fort : les meilleurs de toute la création.",
        axe5_frequence: "Être les meilleurs de la création est le sommet de la mission de justice : non pas bons, mais les MEILLEURS de tout ce qui existe."
      },
      "Choix/Préférence": {
        status: "nul",
        senses: ["choisir", "préférer"],
        proof_ctx: "Le contexte est celui du jugement moral (meilleur/pire), pas du choix ou de la préférence."
      }
    }
  }, 8);
  console.log('  ḫyr → Bien/Excellence → "les meilleurs"');

  await updateVerse(6137, {
    translation_arab: "Ceux qui ont accordé confiance et fait les actes bons, ceux-là sont les meilleurs de la création.",
    full_translation: "Quant à ceux qui croient et accomplissent les bonnes oeuvres, ce sont les meilleurs de toute la création.",
    translation_explanation: `§DEMARCHE§

La particule **inna** (certes) ouvre le verset avec la même emphase que le v6 — les deux verdicts ont la même force.

Le verbe **āmanū** est un accompli de la forme IV de a-m-n — « ils ont accordé confiance ». La forme IV est causative : ils ont fait naître la confiance, ils l'ont accordée. L'accompli indique un acte achevé.

Le verbe **'amilū** est un accompli de 'a-m-l — « ils ont fait, ils ont agi ». Le complément **al-ṣāliḥāti** est le pluriel féminin défini de ṣāliḥ (bon, droit) — « les bonnes (choses), les actes bons ». Le participe actif ṣāliḥ vient de ṣ-l-ḥ (être bon, réparer) — ce qui est ṣāliḥ est ce qui est intrinsèquement bon et en bon état.

La phrase **ulā'ika hum khayru al-bariyyati** est la copie exacte du v6 avec khayru à la place de sharru. Le pronom de séparation hum isole et identifie.

§JUSTIFICATION§

**accordé confiance** — Le sens retenu est « Sécurité/Confiance ». La formulation « accordé confiance » rend la forme IV causative : accorder, donner la confiance. L'alternative « cru » est écartée car « croire » en français est devenu un verbe de conviction intellectuelle, alors que āmana est un acte relationnel — on accorde confiance à quelqu'un.

**les actes bons** — Les sens retenus sont « Action/Oeuvre » pour 'aml et « Bonté/Rectitude » pour ṣlḥ. L'alternative « les bonnes oeuvres » est écartée car « oeuvre » en français a pris un sens littéraire ou artistique. « Acte » est plus courant et concret.

**les meilleurs** — Le sens retenu est « Bien/Excellence ». Le mot « meilleurs » rend l'élatif superlatif de khayr.

§CRITIQUE§

**croient vs accordé confiance** — Hamidullah traduit āmanū par « croient ». Le verbe āmana (forme IV de a-m-n) a pour sens premier « accorder la sécurité, faire confiance ». Le mot « croire » en français moderne a pris un sens de conviction personnelle (je crois que...), tandis que āmana est un acte de confiance relationnelle. Traduire par « croire » fait perdre la dimension d'engagement actif contenue dans la forme IV causative.

Pour le reste, les traductions sont sensiblement les mêmes.`,
    segments: [
      {fr:"Certes", pos:"particle", phon:"inna", arabic:"إِنَّ", is_particle:true, position:1},
      {fr:"ceux qui", pos:"particle", phon:"alladhīna", arabic:"ٱلَّذِينَ", is_particle:true, position:2},
      {fr:"ont accordé confiance", pos:"verbe", phon:"āmanū", arabic:"ءَامَنُوا۟", word_key:"amn", is_particle:false, sense_retenu:"accorder confiance", position:3},
      {fr:"et fait", pos:"verbe", phon:"wa 'amilū", arabic:"وَعَمِلُوا۟", word_key:"eml", is_particle:false, sense_retenu:"agir", position:4},
      {fr:"les actes bons,", pos:"nom", phon:"al-ṣāliḥāti", arabic:"ٱلصَّـٰلِحَـٰتِ", word_key:"slh", is_particle:false, sense_retenu:"bon", position:5},
      {fr:"ceux-là", pos:"particle", phon:"ulā'ika", arabic:"أُو۟لَـٰٓئِكَ", is_particle:true, position:6},
      {fr:"sont", pos:"particle", phon:"hum", arabic:"هُمْ", is_particle:true, position:7},
      {fr:"les meilleurs", pos:"nom", phon:"khayru", arabic:"خَيْرُ", word_key:"ḫyr", is_particle:false, sense_retenu:"les meilleurs", position:8},
      {fr:"de la création.", pos:"nom", phon:"al-bariyyati", arabic:"ٱلْبَرِيَّةِ", word_key:"bra", is_particle:false, sense_retenu:"la création", position:9}
    ]
  });
  console.log('VERSET 98:7 — TERMINÉ ✓');
}

// ============================================================
// VERSET 98:8 (6138) — le plus long
// ============================================================
async function verse98_8() {
  console.log('\n====== VERSET 98:8 (6138) ======\n');

  // jzy (531) — Rétribution/Justice
  await upsertVWA(6138, 'jzy', {
    sense_chosen: "rétribution",
    concept_chosen: "Rétribution/Justice",
    concepts: {
      "Rétribution/Justice": {
        status: "retenu",
        senses: ["rétribuer", "récompenser", "punir"],
        proof_ctx: "Le sens retenu est « Rétribution/Justice ». Le mot jazā'uhum est un nom masculin en idāfa avec le pronom hum — « leur rétribution ». Le Lane's donne pour jazā : « rétribuer, récompenser, punir ». La rétribution est neutre : elle peut être positive ou négative selon les actes. Dans ce verset, le contexte est positif (jardins, satisfaction) — la rétribution est une récompense. La distinction avec « Suffisance » : la suffisance est un état, la rétribution est un acte de justice proportionnelle.",
        axe1_verset: "Le mot jazā'uhum ouvre le verset comme sujet : « leur rétribution (est) auprès de leur seigneur ». Le champ lexical est celui de la récompense : rétribution (jzy) → jardins (jnn) → résidence (edn) → rivières (nhr) → satisfaction mutuelle (rdw). Chaque mot enrichit la récompense.",
        axe2_voisins: "Le verset 7 identifiait les meilleurs de la création, le v8 détaille leur récompense. La progression est logique : identification → rétribution.",
        axe3_sourate: "Le v8 est le point culminant positif de la sourate, comme le v6 était le point culminant négatif. La sourate se clôt sur la récompense, pas sur la punition — le dernier mot est pour les meilleurs.",
        axe4_coherence: "Le Coran utilise jazā' fréquemment pour la rétribution divine : en 55:60 « hal jazā'u al-iḥsāni illā al-iḥsān » (la rétribution du bien est-elle autre chose que le bien ?). Le principe de proportionnalité est constant.",
        axe5_frequence: "La rétribution est le fondement de la justice : chaque acte a une conséquence proportionnelle. Pour la mission du khalifa, savoir que les actes sont rétribués motive la justice."
      }
    }
  }, 1);
  console.log('  jzy → Rétribution/Justice → "rétribution"');

  // rdw (812) — Satisfaction/Agrément
  await upsertVWA(6138, 'rdw', {
    sense_chosen: "être satisfait",
    concept_chosen: "Satisfaction/Agrément",
    concepts: {
      "Satisfaction/Agrément": {
        status: "retenu",
        senses: ["être satisfait", "agréer", "approuver", "consentir"],
        proof_ctx: "Le sens retenu est « Satisfaction/Agrément ». Le verbe raḍiya est un accompli de r-ḍ-w — « il a été satisfait ». Le Lane's donne : « être satisfait, agréer, approuver ». La satisfaction est un état intérieur résultatif — le sujet a atteint un état de contentement. Le verset utilise raḍiya deux fois : « Dieu a été satisfait d'eux ET ils ont été satisfaits de Lui ». La satisfaction est mutuelle — ce n'est pas un rapport unilatéral. La distinction avec « Choix/Préférence » : le choix est un acte de sélection, la satisfaction est un état émotionnel positif qui résulte d'un rapport réussi.",
        axe1_verset: "Le verbe raḍiya apparaît deux fois dans le verset avec une symétrie parfaite : « Dieu a été satisfait d'eux » + « ils ont été satisfaits de Lui ». La préposition 'an (de, à propos de) introduit l'objet de la satisfaction. Le champ lexical de la récompense culmine avec cette satisfaction mutuelle : au-delà des jardins et des rivières, il y a la relation de satisfaction réciproque entre Dieu et les serviteurs.",
        axe2_voisins: "Le verset 7 identifiait les meilleurs, le v8 détaille leur récompense. La satisfaction mutuelle est le sommet de cette récompense — au-dessus des biens matériels (jardins, rivières).",
        axe3_sourate: "La sourate aboutit à cette relation de satisfaction : la preuve claire (v1-3) mène à la division (v4), le commandement (v5) rappelle le devoir, et le résultat final pour ceux qui suivent est la satisfaction réciproque entre eux et Dieu.",
        axe4_coherence: "Le Coran utilise la formule raḍiya Allāhu 'anhum wa raḍū 'anhu en 5:119, 9:100, 58:22. C'est une formule de béatitude qui exprime le sommet de la relation entre Dieu et les serviteurs. Le fait que le Coran attribue la satisfaction à Dieu (raḍiya) rend ce sens compatible — Dieu dit de Lui-même qu'il est satisfait.",
        axe5_frequence: "La satisfaction mutuelle est le but ultime de la mission de justice : non pas une obéissance servile mais une relation de contentement réciproque. Le serviteur est satisfait de Dieu et Dieu est satisfait du serviteur."
      },
      "Choix/Préférence": {
        status: "nul",
        senses: ["choisir pour soi", "rendre satisfait"],
        proof_ctx: "Le contexte est celui de la satisfaction mutuelle, pas d'un choix. Le verbe raḍiya avec 'an exprime la satisfaction à propos de quelqu'un, pas un choix."
      }
    }
  }, 13);
  console.log('  rdw → Satisfaction/Agrément → "être satisfait"');

  // ḫšy (641) — Crainte révérencielle (step1 key: x → ḫšy)
  await upsertVWA(6138, 'ḫšy', {
    sense_chosen: "révérer",
    concept_chosen: "Crainte révérencielle",
    concepts: {
      "Crainte révérencielle": {
        status: "retenu",
        senses: ["craindre", "révérer", "appréhender"],
        proof_ctx: "Le sens retenu est « Crainte révérencielle ». Le verbe khashiya est un accompli — « il a révéré ». Le Lane's donne pour khashiya : « he feared, he feared with reverence ». La khashya est une crainte mêlée de respect et de considération pour la grandeur de l'objet craint — ce n'est pas la peur animale (khawf) mais une appréhension qui vient de la reconnaissance de la grandeur. Le sujet du verbe est man (celui qui) — quiconque a révéré son seigneur. La crainte révérencielle est un état intérieur permanent qui oriente le comportement.",
        axe1_verset: "Le verbe khashiya est dans la dernière proposition du verset : « cela est pour celui qui a révéré son seigneur ». La révérence est la condition d'accès à toute la récompense décrite avant (jardins, rivières, satisfaction). Le champ lexical se clôt sur cette condition : la récompense n'est pas gratuite, elle est pour celui qui révère.",
        axe2_voisins: "Le verset 7 disait « ceux qui ont accordé confiance et fait les actes bons ». Le v8 ajoute la condition de révérence. La séquence est : confiance → actes → révérence. La révérence est le couronnement de l'attitude correcte.",
        axe3_sourate: "La sourate se clôt sur ce mot : khashiya rabbahu (il a révéré son seigneur). Après la preuve claire, le commandement, le jugement, la récompense — le dernier mot est pour la révérence. C'est la disposition intérieure qui fonde tout le reste.",
        axe4_coherence: "Le Coran distingue khashya de khawf. En 35:28 « seuls les savants parmi Ses serviteurs ont la khashya de Dieu ». La khashya est liée à la connaissance — plus on connaît, plus on révère. En 98:8, la révérence est la condition finale.",
        axe5_frequence: "La révérence est l'attitude intérieure qui soutient la mission de justice : celui qui révère son seigneur agit avec conscience et responsabilité. La crainte révérencielle empêche l'arrogance et la corruption."
      }
    }
  }, 20);
  console.log('  ḫšy → Crainte révérencielle → "révérer"');

  await updateVerse(6138, {
    translation_arab: "Leur rétribution auprès de leur seigneur : des jardins de résidence sous lesquels coulent les rivières, y demeurant pour toujours à jamais. Dieu a été satisfait d'eux et ils ont été satisfaits de Lui. Cela est pour celui qui a révéré son seigneur.",
    full_translation: "Leur récompense auprès d'Allah sera les Jardins de séjour, sous lesquels coulent les ruisseaux, pour y demeurer éternellement. Allah les agrée et ils L'agréent. Telle sera la récompense de celui qui craint son Seigneur.",
    translation_explanation: `§DEMARCHE§

Le mot **jazā'uhum** est un nom en idāfa avec le pronom hum — « leur rétribution ». C'est le sujet de la phrase nominale. Le complément **'inda rabbihim** (auprès de leur seigneur) situe la rétribution dans l'espace divin. Le mot rabb vient de r-b-b (seigneur, celui qui élève et nourrit).

Le mot **jannātu** est un nom féminin pluriel de j-n-n (jardin, lieu couvert de verdure) — « des jardins ». En idāfa avec **'adnin** (de résidence), il forme « des jardins de résidence ». Le mot 'adn vient de '-d-n dont le Lane's donne : « résider dans un lieu, s'y établir durablement, mine (lieu où les minéraux résident) ». Les jardins de 'adn sont des jardins de résidence permanente.

Le verbe **tajrī** est un inaccompli de j-r-y (couler, courir) — « coulent ». Le complément **min taḥtihā** (de dessous elles) indique que les rivières coulent sous les jardins. **Al-anhāru** est le pluriel de nahr (rivière) — les rivières.

Le participe **khālidīna fīhā abadan** ajoute « pour toujours à jamais ». Le mot abad (jamais, toujours) renforce la permanence déjà exprimée par khālidīna.

Le verbe **raḍiya** est un accompli de r-ḍ-w — « il a été satisfait ». La structure est symétrique : **raḍiya Allāhu 'anhum** (Dieu a été satisfait d'eux) **wa raḍū 'anhu** (et ils ont été satisfaits de Lui). La préposition 'an (de, à propos de) introduit l'objet de la satisfaction dans les deux cas.

Le démonstratif **dhālika** (cela) résume toute la récompense. La préposition **li-man** (pour celui qui) introduit la condition. Le verbe **khashiya** est un accompli de kh-sh-y — « il a révéré ». Le complément **rabbahu** (son seigneur) est l'objet de la révérence.

§JUSTIFICATION§

**rétribution** — Le sens retenu est « Rétribution/Justice ». Le mot « rétribution » est choisi car il est neutre (peut être positif ou négatif) et rend l'idée de proportionnalité. L'alternative « récompense » est écartée car elle est exclusivement positive, alors que jazā' peut aussi être négatif.

**jardins de résidence** — Le sens retenu de janna est « Jardin/Paradis ». Le mot « jardins » rend le pluriel. Pour 'adn, le sens retenu est « résidence » — le Lane's donne « résider durablement dans un lieu ». L'alternative « séjour » (Hamidullah) est acceptable mais « résidence » est plus précis pour l'idée d'établissement permanent.

**rivières** — Le sens retenu de nahr est « Eau/Cours d'eau ». Le mot « rivières » est courant. L'alternative « ruisseaux » (Hamidullah) minimise le débit — nahr désigne un cours d'eau notable, pas un petit ruisseau.

**satisfait** — Le sens retenu est « Satisfaction/Agrément ». Le mot « satisfait » rend raḍiya directement. L'alternative « agréer » est plus formel et moins courant.

**révéré** — Le sens retenu est « Crainte révérencielle ». Le mot « révéré » est choisi car il combine la crainte et le respect. L'alternative « craint » est écartée car « craindre » en français est purement négatif (peur), tandis que khashiya inclut le respect et la considération pour la grandeur. Le Lane's précise : « he feared with reverence ».

§CRITIQUE§

**craint vs révéré** — Hamidullah traduit khashiya par « craint ». Le mot « craindre » en français évoque la peur (je crains le chien, je crains l'orage). Mais khashiya dans le Lane's est explicitement « he feared WITH REVERENCE ». La khashya est réservée dans le Coran à ceux qui connaissent (35:28 « seuls les savants ont la khashya »). Traduire par « craindre » fait perdre la dimension de connaissance et de respect qui distingue khashya de khawf (peur simple). « Révérer » rend cette nuance : on révère ce qu'on connaît et respecte, on craint ce qu'on ne comprend pas.

**ruisseaux vs rivières** — Hamidullah traduit al-anhāru par « ruisseaux ». Le mot nahr dans le Lane's désigne un cours d'eau notable (rivière, fleuve), pas un petit cours d'eau. « Ruisseau » est une diminution qui n'est pas dans le texte arabe.`,
    segments: [
      {fr:"Leur rétribution", pos:"nom", phon:"jazā'uhum", arabic:"جَزَآؤُهُمْ", word_key:"jzy", is_particle:false, sense_retenu:"rétribution", position:1},
      {fr:"auprès de", pos:"particle", phon:"'inda", arabic:"عِندَ", is_particle:true, position:2},
      {fr:"leur seigneur :", pos:"nom", phon:"rabbihim", arabic:"رَبِّهِمْ", word_key:"rbb", is_particle:false, sense_retenu:"seigneur", position:3},
      {fr:"des jardins", pos:"nom", phon:"jannātu", arabic:"جَنَّـٰتُ", word_key:"jnn", is_particle:false, sense_retenu:"jardin", position:4},
      {fr:"de résidence", pos:"nom", phon:"'adnin", arabic:"عَدْنٍ", word_key:"edn", is_particle:false, sense_retenu:"résidence", position:5},
      {fr:"coulent", pos:"verbe", phon:"tajrī", arabic:"تَجْرِى", word_key:"jry", is_particle:false, sense_retenu:"couler", position:6},
      {fr:"de dessous elles", pos:"particle", phon:"min taḥtihā", arabic:"مِن تَحْتِهَا", is_particle:true, position:7},
      {fr:"les rivières,", pos:"nom", phon:"al-anhāru", arabic:"ٱلْأَنْهَـٰرُ", word_key:"nhr", is_particle:false, sense_retenu:"rivière", position:9},
      {fr:"y demeurant pour toujours", pos:"nom", phon:"khālidīna fīhā", arabic:"خَـٰلِدِينَ فِيهَآ", word_key:"xld", is_particle:false, sense_retenu:"demeurer pour toujours", position:10},
      {fr:"à jamais.", pos:"particle", phon:"abadan", arabic:"أَبَدًا", is_particle:true, position:12},
      {fr:"Dieu a été satisfait", pos:"verbe", phon:"raḍiya Allāhu", arabic:"رَّضِىَ ٱللَّهُ", word_key:"rdw", is_particle:false, sense_retenu:"être satisfait", position:13},
      {fr:"d'eux", pos:"particle", phon:"'anhum", arabic:"عَنْهُمْ", is_particle:true, position:15},
      {fr:"et ils ont été satisfaits", pos:"verbe", phon:"wa raḍū", arabic:"وَرَضُوا۟", word_key:"rdw", is_particle:false, sense_retenu:"être satisfait", position:16},
      {fr:"de Lui.", pos:"particle", phon:"'anhu", arabic:"عَنْهُ", is_particle:true, position:17},
      {fr:"Cela est pour", pos:"particle", phon:"dhālika li-man", arabic:"ذَٰلِكَ لِمَنْ", is_particle:true, position:18},
      {fr:"celui qui a révéré", pos:"verbe", phon:"khashiya", arabic:"خَشِىَ", word_key:"ḫšy", is_particle:false, sense_retenu:"révérer", position:20},
      {fr:"son seigneur.", pos:"nom", phon:"rabbahu", arabic:"رَبَّهُۥ", word_key:"rbb", is_particle:false, sense_retenu:"seigneur", position:21}
    ]
  });
  console.log('VERSET 98:8 — TERMINÉ ✓');
}

// ============================================================
// PHRASES DU QUOTIDIEN
// ============================================================
async function insertDailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  // fkk — Détachement/Cessation
  const {data: fkkData} = await sb.from('word_analyses').select('id').eq('word_key','fkk').maybeSingle();
  if (fkkData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', fkkData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(fkkData.id, "se détacher", "فَكَّ العُقْدَة", "fakka al-'uqda", "Il a défait le nœud.");
      await insertDaily(fkkData.id, "se détacher", "فَكَّ الرَّهْن", "fakka al-rahn", "Il a racheté le gage.");
      await insertDaily(fkkData.id, "se détacher", "اِنْفَكَّ مِنَ العادة", "infakka min al-'āda", "Il s'est détaché de l'habitude.");
      console.log('  fkk — 3 phrases insérées');
    } else {
      console.log('  fkk — phrases existantes, skip');
    }
  }

  // ṣḥf — Page/Feuillet
  const {data: shfData} = await sb.from('word_analyses').select('id').eq('word_key','ṣḥf').maybeSingle();
  if (shfData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', shfData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(shfData.id, "pages", "صَحِيفَة يَوْمِيَّة", "ṣaḥīfat yawmiyya", "Un journal quotidien.");
      await insertDaily(shfData.id, "pages", "صُحُف إِبْرَاهِيم", "ṣuḥuf Ibrāhīm", "Les pages d'Ibrahim.");
      await insertDaily(shfData.id, "pages", "كَتَبَ فِي الصَّحِيفَة", "kataba fī al-ṣaḥīfa", "Il a écrit dans la page.");
      console.log('  ṣḥf — 3 phrases insérées');
    } else {
      console.log('  ṣḥf — phrases existantes, skip');
    }
  }

  // tlw — Récitation/Succession
  const {data: tlwData} = await sb.from('word_analyses').select('id').eq('word_key','tlw').maybeSingle();
  if (tlwData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', tlwData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(tlwData.id, "réciter", "تَلَا القُرْآن", "talā al-Qur'ān", "Il a récité le Coran.");
      await insertDaily(tlwData.id, "réciter", "يَتْلُو الدَّرْس", "yatlū al-dars", "Il récite la leçon.");
      await insertDaily(tlwData.id, "réciter", "تَلَاهُ خَطْوَة بِخَطْوَة", "talāhu khaṭwatan bi-khaṭwa", "Il l'a suivi pas à pas.");
      console.log('  tlw — 3 phrases insérées');
    } else {
      console.log('  tlw — phrases existantes, skip');
    }
  }

  // xls — Pureté/Sincérité
  const {data: xlsData} = await sb.from('word_analyses').select('id').eq('word_key','xls').maybeSingle();
  if (xlsData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', xlsData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(xlsData.id, "rendant pur", "أَخْلَصَ النِّيَّة", "akhlaṣa al-niyya", "Il a rendu pure l'intention.");
      await insertDaily(xlsData.id, "rendant pur", "عَسَل خَالِص", "'asal khāliṣ", "Du miel pur.");
      await insertDaily(xlsData.id, "rendant pur", "أَخْلَصَ لَهُ الوُدّ", "akhlaṣa lahu al-wudd", "Il lui a voué une affection pure.");
      console.log('  xls — 3 phrases insérées');
    } else {
      console.log('  xls — phrases existantes, skip');
    }
  }

  // hnf — Inclinaison/Droiture
  const {data: hnfData} = await sb.from('word_analyses').select('id').eq('word_key','hnf').maybeSingle();
  if (hnfData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', hnfData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(hnfData.id, "inclinés vers le vrai", "كَانَ حَنِيفًا", "kāna ḥanīfan", "Il était incliné vers le vrai.");
      await insertDaily(hnfData.id, "inclinés vers le vrai", "مِلَّة إِبْرَاهِيم حَنِيفًا", "millat Ibrāhīm ḥanīfan", "La voie d'Ibrahim, incliné vers le vrai.");
      await insertDaily(hnfData.id, "inclinés vers le vrai", "حَنَفَ عَنِ الباطِل", "ḥanafa 'an al-bāṭil", "Il s'est détourné du faux.");
      console.log('  hnf — 3 phrases insérées');
    } else {
      console.log('  hnf — phrases existantes, skip');
    }
  }

  // frq — Séparation/Distinction
  const {data: frqData} = await sb.from('word_analyses').select('id').eq('word_key','frq').maybeSingle();
  if (frqData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', frqData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(frqData.id, "se diviser", "فَرَّقَ بَيْنَ الحَقّ وَالبَاطِل", "farraqa bayna al-ḥaqq wa al-bāṭil", "Il a distingué entre le vrai et le faux.");
      await insertDaily(frqData.id, "se diviser", "تَفَرَّقَ الجَمْع", "tafarraqa al-jam'", "Le groupe s'est dispersé.");
      await insertDaily(frqData.id, "se diviser", "فَرِيق مِنْهُم", "farīq minhum", "Un groupe d'entre eux.");
      console.log('  frq — 3 phrases insérées');
    } else {
      console.log('  frq — phrases existantes, skip');
    }
  }

  // bra — Création/Origination
  const {data: braData} = await sb.from('word_analyses').select('id').eq('word_key','bra').maybeSingle();
  if (braData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', braData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(braData.id, "la création", "بَرَأَ اللهُ الخَلْق", "bara'a Allāhu al-khalq", "Dieu a créé les créatures.");
      await insertDaily(braData.id, "la création", "البَارِئ المُصَوِّر", "al-bāri' al-muṣawwir", "Le créateur, le façonneur.");
      await insertDaily(braData.id, "la création", "بَرِيء مِنَ التُّهْمَة", "barī' min al-tuhma", "Innocent de l'accusation.");
      console.log('  bra — 3 phrases insérées');
    } else {
      console.log('  bra — phrases existantes, skip');
    }
  }

  // jzy — Rétribution/Justice
  const {data: jzyData} = await sb.from('word_analyses').select('id').eq('word_key','jzy').maybeSingle();
  if (jzyData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', jzyData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(jzyData.id, "rétribution", "جَزَاهُ خَيْرًا", "jazāhu khayran", "Il l'a rétribué par du bien.");
      await insertDaily(jzyData.id, "rétribution", "الجَزَاء مِنْ جِنْسِ العَمَل", "al-jazā' min jinsi al-'amal", "La rétribution est de même nature que l'acte.");
      await insertDaily(jzyData.id, "rétribution", "جَزَاكَ اللهُ خَيْرًا", "jazāka Allāhu khayran", "Que Dieu te rétribue par du bien.");
      console.log('  jzy — 3 phrases insérées');
    } else {
      console.log('  jzy — phrases existantes, skip');
    }
  }

  // ḫšy — Crainte révérencielle
  const {data: khshyData} = await sb.from('word_analyses').select('id').eq('word_key','ḫšy').maybeSingle();
  if (khshyData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', khshyData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(khshyData.id, "révérer", "يَخْشَى رَبَّهُ", "yakhshā rabbahu", "Il révère son seigneur.");
      await insertDaily(khshyData.id, "révérer", "إِنَّمَا يَخْشَى اللهَ مِنْ عِبَادِهِ العُلَمَاء", "innamā yakhsha Allāha min 'ibādihi al-'ulamā'", "Seuls les savants parmi Ses serviteurs révèrent Dieu.");
      await insertDaily(khshyData.id, "révérer", "خَشِيَ عَلَى أَوْلَادِهِ", "khashiya 'alā awlādihi", "Il a craint pour ses enfants.");
      console.log('  ḫšy — 3 phrases insérées');
    } else {
      console.log('  ḫšy — phrases existantes, skip');
    }
  }

  // rdw — Satisfaction/Agrément
  const {data: rdwData} = await sb.from('word_analyses').select('id').eq('word_key','rdw').maybeSingle();
  if (rdwData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', rdwData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(rdwData.id, "être satisfait", "رَضِيَ بِنَصِيبِهِ", "raḍiya bi-naṣībihi", "Il a été satisfait de sa part.");
      await insertDaily(rdwData.id, "être satisfait", "رِضَا الوَالِدَيْن", "riḍā al-wālidayn", "La satisfaction des parents.");
      await insertDaily(rdwData.id, "être satisfait", "رَضِيَ عَنْهُ", "raḍiya 'anhu", "Il a été satisfait de lui.");
      console.log('  rdw — 3 phrases insérées');
    } else {
      console.log('  rdw — phrases existantes, skip');
    }
  }

  // zkw — Purification/Croissance
  const {data: zkwData} = await sb.from('word_analyses').select('id').eq('word_key','zkw').maybeSingle();
  if (zkwData) {
    const {data: existingDaily} = await sb.from('word_daily').select('id').eq('analysis_id', zkwData.id).limit(1);
    if (!existingDaily || existingDaily.length === 0) {
      await insertDaily(zkwData.id, "purification", "زَكَّى نَفْسَهُ", "zakkā nafsahu", "Il a purifié son âme.");
      await insertDaily(zkwData.id, "purification", "أَخْرَجَ الزَّكَاة", "akhraja al-zakāt", "Il a donné la purification (l'aumône).");
      await insertDaily(zkwData.id, "purification", "نَمَا المَالُ وَزَكَا", "namā al-mālu wa zakā", "L'argent a crû et s'est purifié.");
      console.log('  zkw — 3 phrases insérées');
    } else {
      console.log('  zkw — phrases existantes, skip');
    }
  }

  console.log('\n✓ Phrases du quotidien terminées');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  PIPELINE SOURATE 98 — AL-BAYYINA       ║');
  console.log('║  8 versets, IDs 6131-6138                ║');
  console.log('╚══════════════════════════════════════════╝');

  await createMissingRoots();
  await verse98_1();
  await verse98_2();
  await verse98_3();
  await verse98_4();
  await verse98_5();
  await verse98_6();
  await verse98_7();
  await verse98_8();
  await insertDailyPhrases();

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║  ✓ PIPELINE SOURATE 98 TERMINÉE          ║');
  console.log('╚══════════════════════════════════════════╝');
}

main().catch(err => { console.error('ERREUR:', err); process.exit(1); });
