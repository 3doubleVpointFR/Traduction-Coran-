// Pipeline S88 v11-14 — Étapes 3-4 : Axes + Traductions
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
  console.log('=== PIPELINE S88 v11-14 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 11 (5978): لَّا تَسْمَعُ فِيهَا لَـٰغِيَةً
  // ============================================================
  console.log('--- VERSET 11 ---');

  // sme (id=302) — تَسْمَعُ — verbe inaccompli
  await upsertVWA(5978, 'sme', 'entendre', {
    sense_chosen: 'entendre',
    concept_chosen: 'Audition/Ecoute',
    concepts: {
      'Audition/Ecoute': {
        status: 'retenu',
        senses: ['entendre', 'ecouter', 'ouie', 'obeir', 'exaucer'],
        proof_ctx: "La racine s-m-' possede deux regroupements de sens. Audition/Ecoute est retenu car le verbe tasma'u (tu entends) est a l'inaccompli avec la negation la — « tu n'entends pas ». Le sujet est le destinataire (tu) et l'objet est laghiya (parole vaine). Le sens d'entendre est direct et physique : percevoir par l'ouie. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-' porte l'idee de perception auditive. La distinction avec Renommee/Bruit est que la renommee concerne la reputation et ce que les autres entendent de quelqu'un, tandis que l'Audition est la perception directe par le destinataire. Le verset decrit ce que le destinataire perçoit dans le jardin — c'est une audition directe, pas une reputation.",
        axe1_verset: "Le verbe tasma'u (tu entends) est precede de la negation la et suivi de fiha (en elle, c'est-a-dire dans le jardin du verset 10). Le champ lexical est celui de l'environnement sonore du jardin : ce que l'on entend ou n'entend pas. La negation la tasma'u (tu n'entends pas) nie l'existence de toute parole vaine dans ce lieu. L'inaccompli indique une permanence — tu n'entends jamais de parole vaine, c'est un etat permanent du jardin.",
        axe2_voisins: "Le verset 10 situait les visages radieux dans un jardin eleve. Le verset 11 commence a decrire ce jardin par ce qui en est absent : la parole vaine. Les versets 12-13-14 decriront ce qui est present : une source, des lits, des gobelets. Le verset 11 ouvre la description du jardin par la negation du negatif — l'absence de futilite est la premiere qualite du lieu.",
        axe3_sourate: "La sourate oppose le chatiment (v2-7) et la recompense (v8-16). Le verset 11 fait partie de la description detaillee du jardin. Apres la presentation des visages radieux (v8-9) et du jardin eleve (v10), le texte decrit les qualites specifiques du lieu. L'absence de parole vaine est la premiere qualite mentionnee — c'est un lieu de paix sonore.",
        axe4_coherence: "Le Coran mentionne l'absence de parole vaine au paradis dans d'autres passages. En 56:25, « ils n'y entendent ni laghw ni ta'thim » (ni futilite ni peche). En 78:35, « ils n'y entendent ni laghw ni kazzab » (ni futilite ni mensonge). La coherence coranique confirme que l'absence de parole vaine est une caracteristique constante du jardin paradisiaque.",
        axe5_frequence: "L'audition est un sens fondamental du khalifa — c'est par l'ecoute qu'il recoit la connaissance et qu'il comprend le monde. Dans le jardin, l'audition est purifiee : plus de bruit parasite, plus de parole vaine. Le khalifa qui a ecoute la verite sur terre se retrouve dans un lieu ou seule la verite est entendue."
      },
      'Renommee/Bruit': { status: 'nul', senses: ['reputation', 'bruit', 'faire entendre'], proof_ctx: "Le contexte est celui de la perception auditive directe du destinataire dans le jardin, pas de la reputation ou de la renommee. Le verbe tasma'u (tu entends) est a la deuxieme personne — c'est l'audition personnelle, pas la reputation." }
    }
  }, 2);

  // lghw (id=2489) — لَـٰغِيَةً — nom/adjectif indefini accusatif
  await upsertVWA(5978, 'lghw', 'parole vaine', {
    sense_chosen: 'parole vaine',
    concept_chosen: 'Vanite/Futilite',
    concepts: {
      'Vanite/Futilite': {
        status: 'retenu',
        senses: ['parole vaine', 'futilite', 'serment involontaire', 'absurdite'],
        proof_ctx: "La racine l-gh-w n'a qu'un seul regroupement de sens (Vanite/Futilite). Le mot laghiya est un nom/adjectif au feminin indefini accusatif — objet de tasma'u (tu entends). D'apres les sources etymologiques, la racine l-gh-w designe tout ce qui est vain, futile, sans valeur — la parole creuse, le propos sans contenu, le bavardage inutile. Le mot laghiya est la forme feminine de laghi (celui qui dit des choses vaines), et peut aussi etre compris comme un nom d'action au feminin signifiant « une parole vaine, une futilite ». Le sens est automatiquement retenu car c'est le seul regroupement de la racine."
      }
    }
  }, 4);

  // VA verset 11
  await upsertVA(5978, {
    segments: [
      { fr: 'Tu n\'y', pos: 'NEG+P+PRON', phon: 'la ... fiha', arabic: 'لَّا ... فِيهَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'entends', pos: 'V', phon: "tasma'u", arabic: 'تَسْمَعُ', word_key: 'sme', is_particle: false, sense_retenu: 'entendre', position: 2 },
      { fr: 'dans celui-ci', pos: 'P+PRON', phon: 'fiha', arabic: 'فِيهَا', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'aucune parole futile', pos: 'N', phon: 'laghiya', arabic: 'لَـٰغِيَةً', word_key: 'lghw', is_particle: false, sense_retenu: 'parole vaine', position: 4 }
    ],
    translation_arab: "Tu n'y entends aucune parole futile",
    full_translation: "ou tu n'entends aucune futilite",
    translation_explanation: `§DEMARCHE§
La particule **la** est une negation simple qui nie l'action du verbe. Combinee avec l'inaccompli, elle indique que l'action ne se produit jamais — c'est une negation permanente, pas ponctuelle.

Le verbe **tasma'u** est a l'inaccompli de la deuxieme personne du singulier. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-' signifie entendre, percevoir par l'ouie. L'inaccompli avec la negation la donne un sens de permanence : tu n'entends jamais. Le sujet « tu » interpelle directement le destinataire — c'est une description personnalisee du jardin.

La preposition **fi** (dans) suivie du pronom **-ha** (elle) forme fiha — « dans celui-ci », reference au jardin eleve du verset 10. Le pronom feminin renvoie a janna (jardin, feminin en arabe).

Le mot **laghiya** est un nom/adjectif feminin indefini a l'accusatif (objet de tasma'u). D'apres les sources etymologiques, la racine l-gh-w designe la parole vaine, la futilite, le bavardage sans substance. Le mot laghiya est derive de lagha (dire des choses vaines) et designe une parole vaine ou une action futile. L'indefini renforce la negation : tu n'entends aucune futilite, quelle qu'elle soit.

§JUSTIFICATION§
**entends** — Le sens retenu est « entendre » du regroupement Audition/Ecoute. Le verbe « entendre » est le plus naturel pour tasma'u dans ce contexte d'environnement sonore. L'alternative « ecouter » impliquerait une action volontaire (on choisit d'ecouter), alors que « entendre » est une perception — dans ce jardin, meme passivement, on ne percoit aucune futilite.

**parole futile** — Le sens retenu est « parole vaine » du regroupement Vanite/Futilite. L'expression « parole futile » est choisie car elle rend accessible en francais courant l'idee de laghiya — une parole sans substance, sans valeur, creuse. L'alternative « futilite » seul (comme chez Hamidullah) est plus abstrait — « parole futile » ancre le sens dans le concret de ce que l'on entend.

§CRITIQUE§
**futilite vs parole futile** — Hamidullah traduit « aucune futilite ». Le mot arabe laghiya est plus specifiquement lie au langage — lagha signifie dire des choses vaines, bavarder sans substance. La traduction « parole futile » est plus fidele a l'etymologie de la racine l-gh-w que « futilite » qui est plus general et pourrait inclure des actes futiles. Le verset parle de ce que l'on ENTEND (tasma'u) — donc le contexte est sonore, et laghiya designe specifiquement une parole vaine, pas une futilite quelconque.`
  });
  console.log('  v11 done\n');

  // ============================================================
  // VERSET 12 (5979): فِيهَا عَيْنٌ جَارِيَةٌ
  // ============================================================
  console.log('--- VERSET 12 ---');

  // eyn (id=590) — عَيْنٌ — nom indefini nominatif
  await upsertVWA(5979, 'eyn', 'source', {
    sense_chosen: 'source',
    concept_chosen: 'Eau vive',
    concepts: {
      'Eau vive': {
        status: 'retenu',
        senses: ['source'],
        proof_ctx: "La racine '-y-n possede trois regroupements de sens. Eau vive est retenu car le mot 'ayn (source) est un nom indefini au nominatif suivi de jariya (coulante). La construction 'ayn jariya (une source coulante) impose le sens de source d'eau. D'apres les sources etymologiques, la racine '-y-n designe a la fois l'oeil (organe de la vision) et la source (point d'ou jaillit l'eau). Le lien etymologique est que les deux sont des points d'emergence — l'oeil fait emerger la vision, la source fait emerger l'eau. La distinction avec Vision/Perception est que le mot 'ayn suivi de jariya (coulante) ne peut pas etre un oeil qui coule (cela signifierait un oeil qui pleure, hors sujet). Une source qui coule est naturel. Le sens Identite (essence) est un sens philosophique derive qui ne correspond pas au contexte physique du jardin.",
        axe1_verset: "Le mot 'ayn est le sujet du verset, qualifie par jariya (coulante). Le champ lexical est celui de l'eau vive — une source qui coule. La preposition fiha (dans celui-ci) situe cette source dans le jardin du verset 10. L'indefini 'aynun (une source) donne une dimension d'abondance — une source parmi d'autres possibles, sans limite. Le verset passe de l'absence (pas de parole vaine, v11) a la presence (une source coulante).",
        axe2_voisins: "Le verset 11 decrivait ce qui est absent du jardin (la parole vaine). Le verset 12 commence a decrire ce qui est present : une source coulante. Les versets 13-14 ajouteront des lits eleves et des gobelets poses. La progression est logique : l'eau (v12) precede le mobilier (v13) et la vaisselle (v14). C'est une description qui construit un cadre de vie complet.",
        axe3_sourate: "La source coulante fait partie du tableau de la recompense (v8-16). Elle contraste avec la source bouillante du chatiment (v5 : 'ayn aniya — source brulante). La meme racine '-y-n est utilisee dans les deux tableaux — mais l'eau est bouillante pour les chatties et coulante (fraiche, agreable) pour les recompenses.",
        axe4_coherence: "Le Coran mentionne les sources du paradis dans plusieurs passages. En 76:6, « une source ('ayn) dont boivent les serviteurs de Dieu ». En 83:28, « une source ('ayn) dont boivent les rapproches ». La source est un element constant de la description coranique du paradis — l'eau vive est le symbole de la vie et de l'abondance.",
        axe5_frequence: "La source d'eau est la base de toute civilisation. Le khalifa qui a gere les ressources en eau sur terre se retrouve dans un lieu ou l'eau coule naturellement et sans effort. La source du jardin est le symbole de l'abondance naturelle — l'eau n'a pas besoin d'etre puisee, elle coule d'elle-meme."
      },
      'Vision/Perception': { status: 'nul', senses: ['oeil', 'regard'], proof_ctx: "Le mot 'ayn suivi de jariya (coulante) ne peut pas etre un oeil — un oeil qui coule signifierait un oeil qui pleure, hors sujet dans la description du jardin paradisiaque. Le contexte impose le sens de source d'eau." },
      'Identite': { status: 'nul', senses: ['essence'], proof_ctx: "Sens philosophique derive qui ne correspond pas au contexte physique et concret du jardin (source + coulante)." }
    }
  }, 2);

  // jry (id=395) — جَارِيَةٌ — participe actif feminin
  await upsertVWA(5979, 'jry', 'couler', {
    sense_chosen: 'couler',
    concept_chosen: 'Course/Flux',
    concepts: {
      'Course/Flux': {
        status: 'retenu',
        senses: ['courir', 'couler', 'se passer', 'faire courir', 'riviere'],
        proof_ctx: "La racine j-r-y possede trois regroupements de sens. Course/Flux est retenu car le mot jariya (participe actif feminin) qualifie 'ayn (source) — « une source coulante ». Le participe actif indique que la source FAIT activement l'action de couler — elle est en mouvement continu. D'apres les sources etymologiques, la racine j-r-y signifie courir, couler — l'idee fondamentale est le mouvement continu d'un fluide ou d'un corps. Le sens specifique de « couler » s'applique aux liquides, et le contexte (source d'eau) impose ce sens. La distinction avec Competition (rivaliser) est que la competition est un sens derive (courir les uns contre les autres), hors sujet pour une source d'eau. Le Sens isole/Agent (jariya = servante, agent) est un sens derive du participe actif utilise comme nom, mais ici jariya est un adjectif qualifiant 'ayn, pas un nom autonome.",
        axe1_verset: "Le mot jariya qualifie 'ayn (source). Le champ lexical est celui du mouvement de l'eau — couler. Le participe actif indique un ecoulement continu et permanent. La source ne tarit pas, elle coule sans cesse. Le verset decrit un element dynamique du jardin : l'eau n'est pas stagnante, elle est vive et en mouvement.",
        axe2_voisins: "Le verset 12 est le premier element concret du jardin apres l'absence de futilite (v11). La source coulante etablit le cadre : c'est un lieu vivant, ou l'eau circule. Les versets 13-14 ajouteront le mobilier et la vaisselle — la source est la base sur laquelle le reste du confort est construit.",
        axe3_sourate: "Le flux de la source contraste avec la source bouillante du chatiment (v5). Dans le chatiment, l'eau est presente mais hostile (elle brule). Dans la recompense, l'eau est presente et bienfaisante (elle coule). Le meme element (l'eau) est retourne — le chatiment ne prive pas d'eau, il la rend hostile ; la recompense la rend agreable.",
        axe4_coherence: "Le Coran utilise la racine j-r-y pour decrire les fleuves du paradis qui coulent (tajri min tahtiha al-anhar — des fleuves coulent en dessous). Cette expression apparait dans de nombreux versets (2:25, 3:15, 3:136, etc.). Le flux de l'eau est l'image coranique par excellence de la vie et de l'abondance au paradis.",
        axe5_frequence: "Le flux continu de l'eau est le symbole de la benediction permanente. Le khalifa qui a fait couler les bienfaits sur terre (partage, justice, construction) se retrouve dans un lieu ou les bienfaits coulent naturellement. Le flux est la recompense du flux — celui qui a donne recoit sans fin."
      },
      'Competition': { status: 'peu_probable', senses: ['rivaliser'], proof_ctx: "Le sens de competition (rivaliser, courir les uns contre les autres) est un sens derive de la course. Dans le contexte d'une source d'eau, il n'y a pas de rivalite — la source coule, elle ne rivalise pas. Ce sens est possible dans d'autres contextes coraniques mais pas ici." },
      'Sens isole/Agent': { status: 'nul', senses: ['agent'], proof_ctx: "Le mot jariya peut etre un nom autonome (servante, agent) mais ici il est employe comme adjectif qualifiant 'ayn (source). La construction 'ayn jariya est « une source coulante », pas « une source agente »." }
    }
  }, 3);

  // VA verset 12
  await upsertVA(5979, {
    segments: [
      { fr: 'Il y a', pos: 'P+PRON', phon: 'fiha', arabic: 'فِيهَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'une source', pos: 'N', phon: "'ayn", arabic: 'عَيْنٌ', word_key: 'eyn', is_particle: false, sense_retenu: 'source', position: 2 },
      { fr: 'coulante', pos: 'ADJ', phon: 'jariya', arabic: 'جَارِيَةٌ', word_key: 'jry', is_particle: false, sense_retenu: 'couler', position: 3 }
    ],
    translation_arab: "Il y a une source coulante",
    full_translation: "La, une source courante.",
    translation_explanation: `§DEMARCHE§
La preposition **fi** (dans) suivie du pronom **-ha** (elle) forme fiha — « dans celui-ci / il y a ». Le pronom feminin renvoie a janna (jardin, feminin en arabe) du verset 10. La construction fiha + nom au nominatif est une phrase nominale arabe qui signifie « il y a dans celui-ci... ».

Le mot **'ayn** est un nom indefini au nominatif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-y-n designe a la fois l'oeil et la source d'eau. Le lien etymologique est celui du point d'emergence — l'oeil fait emerger la vision, la source fait emerger l'eau. Dans le contexte du jardin, suivi de jariya (coulante), le sens de source d'eau est impose. L'indefini (une source) n'est pas diminutif — il indique une source sans limites precises, une abondance indeterminee.

Le mot **jariya** est un participe actif feminin (une forme qui dit que le sujet FAIT activement l'action de couler). D'apres les sources etymologiques, la racine j-r-y signifie courir, couler — le mouvement continu. Le participe actif indique que la source coule en permanence, sans interruption. L'accord feminin est naturel car 'ayn (source) est feminin en arabe.

§JUSTIFICATION§
**source** — Le sens retenu est « source » du regroupement Eau vive. Le mot « source » est le plus naturel pour 'ayn dans le contexte d'eau coulante. L'alternative « oeil » est ecartee car un oeil qui coule (qui pleure) est hors sujet. L'alternative « essence » est un sens philosophique derive qui ne correspond pas au contexte physique.

**coulante** — Le sens retenu est « couler » du regroupement Course/Flux. Le mot « coulante » est choisi car il rend directement le participe actif jariya applique a une source d'eau. L'alternative « courante » (comme chez Hamidullah) est acceptable et donne un sens quasi identique. L'alternative « qui coule » serait une periphrase moins elegante.

§CRITIQUE§
**courante vs coulante** — Hamidullah traduit « une source courante ». La difference entre « coulante » et « courante » est minime en francais. Les deux derivent de l'idee de mouvement. « Courante » est plus habituel en francais classique (eau courante), « coulante » est plus direct etymologiquement (l'eau coule). Les deux rendent fidelement le participe actif jariya. Le choix de « coulante » privilegiee la transparence etymologique — le lecteur comprend immediatement que la source coule, elle est en mouvement.`
  });
  console.log('  v12 done\n');

  // ============================================================
  // VERSET 13 (5980): فِيهَا سُرُرٌ مَّرْفُوعَةٌ
  // ============================================================
  console.log('--- VERSET 13 ---');

  // srr (id=616) — سُرُرٌ — nom pluriel indefini nominatif
  await upsertVWA(5980, 'srr', 'lit', {
    sense_chosen: 'lit',
    concept_chosen: 'Mobilier',
    concepts: {
      'Mobilier': {
        status: 'retenu',
        senses: ['lit'],
        proof_ctx: "La racine s-r-r possede trois regroupements de sens. Mobilier (lit) est retenu car le mot surur est le pluriel de sarir (lit, trone, couche). D'apres les sources etymologiques, sarir designe un lit ou un trone sur lequel on s'assoit ou on s'allonge. Le pluriel brise surur est forme specifiquement sur le schema fu'ul qui est le pluriel de fa'il — c'est bien le pluriel de sarir (lit), pas de surur (joie, qui est deja un masdar et ne se pluralise pas de cette facon). Le contexte du jardin (source coulante v12, gobelets poses v14) est celui d'elements physiques et concrets — le lit fait partie du mobilier du jardin. La distinction avec Joie/Plaisir est cruciale : surur comme « joie » est un masdar (nom d'action verbal) au singulier qui n'a pas de pluriel de cette forme. Le mot surur du verset est un pluriel brise de sarir — morphologiquement, c'est le pluriel de « lit », pas la « joie ». Le sens Cache/Intime (secret) ne correspond pas au contexte du mobilier du jardin.",
        axe1_verset: "Le mot surur est le sujet de la phrase nominale fiha surur marfu'a (il y a des lits eleves). Le champ lexical est celui du mobilier : lits (surur) + gobelets (akwab, v14) + coussins (namariq, v15) + tapis (zarabi, v16). Le verset decrit l'amenagement interieur du jardin — un lieu de confort et de repos. Le qualificatif marfu'a (eleves) ajoute une dimension de prestige : ce ne sont pas des lits quelconques mais des lits eleves, des trones.",
        axe2_voisins: "Le verset 12 decrivait la source (element naturel). Le verset 13 passe au mobilier (element construit). Les versets 14-16 continueront avec les gobelets, les coussins et les tapis. La progression est logique : eau (v12), mobilier (v13), vaisselle (v14), textile (v15-16). C'est un amenagement complet du lieu de vie.",
        axe3_sourate: "Le mobilier du jardin fait partie du tableau de la recompense (v8-16). Il contraste avec le chatiment ou il n'y a que du feu (v4), de l'eau bouillante (v5) et des epines (v6). Le jardin est un lieu equipe, confortable, ou tout est prevu pour le bien-etre. Le chatiment est un lieu de depouillement total.",
        axe4_coherence: "Le Coran mentionne les surur (lits/trones) du paradis dans d'autres passages. En 15:47, « sur des lits (surur) face a face ». En 36:56, « eux et leurs epouses, dans des ombres, sur des lits (surur) accoudees ». En 56:15, « sur des lits (surur) tisses ». Le pluriel surur est systematiquement associe au mobilier du paradis dans le Coran — il designe toujours des lits ou des trones physiques, jamais la joie abstraite.",
        axe5_frequence: "Le lit est le lieu du repos et de la dignite. Le khalifa qui a travaille pour la justice et la civilisation se retrouve sur un lit eleve — un trone qui reconnaitra la valeur de son effort. Le mobilier du jardin est la recompense concrete de l'effort terrestre."
      },
      'Joie/Plaisir': { status: 'peu_probable', senses: ['rejouir', 'plaire'], proof_ctx: "Le mot surur dans ce verset est un pluriel brise (schema fu'ul) de sarir (lit). Le masdar surur (joie) est un singulier qui ne se pluralise pas sous cette forme. La morphologie arabe distingue les deux : surur (pluriel de sarir) et surur (masdar singulier de sarra). Le contexte physique du verset (source, lits, gobelets) confirme qu'il s'agit du mobilier, pas d'un sentiment abstrait." },
      'Cache/Intime': { status: 'nul', senses: ['secret'], proof_ctx: "Le sens de secret ne correspond pas au contexte du mobilier du jardin. Les lits sont decrits comme eleves (marfu'a) — ils sont visibles et exposes, pas caches." }
    }
  }, 2);

  // rfe (id=711) — مَّرْفُوعَةٌ — participe passif feminin
  await upsertVWA(5980, 'rfe', 'elever', {
    sense_chosen: 'elever',
    concept_chosen: 'Elevation/Exaltation',
    concepts: {
      'Elevation/Exaltation': {
        status: 'retenu',
        senses: ['lever', 'elever', 'hausser', 'exalter'],
        proof_ctx: "La racine r-f-' possede deux regroupements de sens. Elevation/Exaltation est retenu car le mot marfu'a est un participe passif feminin — « elevees, qui ont ete elevees ». Le participe passif indique que les lits ont SUBI l'action d'etre eleves — quelqu'un ou quelque chose les a places en hauteur. D'apres les sources etymologiques, la racine r-f-' signifie lever, elever, hausser. Le sens physique est direct : les lits sont sureleves, places en hauteur. Le sens peut aussi etre qualitatif : les lits sont de haute qualite, exaltes. Les deux sens se renforcent : physiquement hauts ET de haute valeur. La distinction avec Suppression (enlever) est que la suppression est l'action d'oter, de retirer, ce qui ne correspond pas a un participe passif qualifiant des lits — on n'« enleve » pas des lits pour les decrire dans un jardin paradisiaque.",
        axe1_verset: "Le mot marfu'a qualifie surur (lits). Le champ lexical est celui de l'elevation : des lits eleves. L'elevation est a la fois physique (les lits sont en hauteur, comme des trones sureleves) et symbolique (ces lits sont prestigieux, de haute valeur). Le participe passif indique que l'elevation n'est pas naturelle mais realisee — les lits ont ete places en hauteur pour honorer ceux qui s'y assoient.",
        axe2_voisins: "Le verset 12 decrivait une source coulante (mouvement horizontal). Le verset 13 ajoute des lits eleves (elevation verticale). Le contraste entre l'eau qui coule et les lits qui dominent cree un espace tridimensionnel : l'eau au sol, les lits en hauteur. Le jardin est un lieu a la fois bas (sources) et haut (trones).",
        axe3_sourate: "L'elevation des lits rappelle le jardin eleve du verset 10 ('aliya). Le theme de la hauteur traverse la description du jardin — le lieu est eleve (v10), les lits sont eleves (v13). Tout pointe vers le haut dans la recompense, alors que dans le chatiment tout pointe vers le bas (humiliation des visages, v2).",
        axe4_coherence: "Le Coran utilise la racine r-f-' pour l'elevation dans d'autres contextes. En 56:34, « des lits eleves (marfu'a) ». La meme expression exacte est utilisee en 56:34 et en 88:13, ce qui confirme que marfu'a applique aux surur designe une elevation physique des lits/trones. En 2:253, « nous avons eleve certains prophetes au-dessus d'autres » — l'elevation est aussi qualitative.",
        axe5_frequence: "L'elevation est la reconnaissance de la valeur du khalifa. Les lits eleves sont des trones — le khalifa qui a accompli sa mission est eleve, place en hauteur, reconnu. L'elevation physique dans le jardin est la materialisation de l'elevation morale acquise sur terre."
      },
      'Suppression': { status: 'nul', senses: ['enlever'], proof_ctx: "Le sens de suppression (enlever, oter) ne correspond pas au contexte de lits dans un jardin. On ne decrit pas des lits comme « enleves » dans un tableau de recompense." }
    }
  }, 3);

  // VA verset 13
  await upsertVA(5980, {
    segments: [
      { fr: 'Il y a', pos: 'P+PRON', phon: 'fiha', arabic: 'فِيهَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'des lits', pos: 'N', phon: 'surur', arabic: 'سُرُرٌ', word_key: 'srr', is_particle: false, sense_retenu: 'lit', position: 2 },
      { fr: 'eleves', pos: 'ADJ', phon: "marfu'a", arabic: 'مَّرْفُوعَةٌ', word_key: 'rfe', is_particle: false, sense_retenu: 'elever', position: 3 }
    ],
    translation_arab: "Il y a des lits eleves",
    full_translation: "et des lits sureleves",
    translation_explanation: `§DEMARCHE§
La preposition **fi** (dans) suivie du pronom **-ha** (elle) forme fiha — « dans celui-ci / il y a ». Le pronom feminin renvoie toujours a janna (jardin) du verset 10. La repetition de fiha (v11, v12, v13) ancre chaque element dans le meme lieu — le jardin.

Le mot **surur** est un nom pluriel indefini au nominatif. C'est le pluriel brise de sarir (lit, trone). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-r-r a plusieurs sens dont le mobilier (sarir = lit ou trone sur lequel on s'assied ou s'allonge). Le pluriel brise surur (schema fu'ul) est la forme standard du pluriel de sarir. Le mot ne doit pas etre confondu avec surur (joie), qui est un masdar singulier de la racine s-r-r — les deux mots s'ecrivent pareil mais leur morphologie est differente. Le contexte physique (jardin, source, gobelets) confirme qu'il s'agit de lits ou de trones.

Le mot **marfu'a** est un participe passif feminin (une forme qui dit que le sujet A SUBI l'action d'etre eleve). D'apres les sources etymologiques, la racine r-f-' signifie lever, elever, hausser. Le participe passif indique que les lits ont ete eleves, places en hauteur. L'accord feminin est dû au fait que les pluriels brises non-humains sont traites comme feminins singuliers en arabe. L'elevation est a la fois physique (les lits sont en hauteur, sureleves) et qualitative (de haute valeur).

§JUSTIFICATION§
**lits** — Le sens retenu est « lit » du regroupement Mobilier. Le mot « lits » est choisi car il rend directement le pluriel surur (de sarir = lit/trone). L'alternative « trones » serait acceptable car sarir designe aussi un trone, mais « lits » est plus general et englobe les deux usages (se coucher et s'asseoir). L'alternative « joies » est ecartee car surur ici est morphologiquement le pluriel de sarir, pas le masdar surur (joie).

**eleves** — Le sens retenu est « elever » du regroupement Elevation/Exaltation. Le mot « eleves » rend la double dimension de marfu'a : hausse physique et prestige qualitatif. L'alternative « sureleves » (comme chez Hamidullah) insiste sur l'aspect physique de la hauteur — le prefixe « sur- » ajoute l'idee de hauteur supplementaire. L'alternative « exaltes » serait trop abstrait pour du mobilier.

§CRITIQUE§
**lits sureleves vs lits eleves** — Hamidullah traduit « des lits sureleves ». Le mot « sureleves » insiste sur la hauteur physique — les lits sont places plus haut que le sol. Le mot « eleves » est plus polyvalent — il inclut la hauteur physique et la qualite superieure. Le participe passif arabe marfu'a ne precise pas si l'elevation est uniquement physique — il dit que les lits « ont ete eleves ». La traduction « eleves » conserve cette ambiguite productive. D'autre part, la traduction arabe ne dit pas « et » — le « et » de Hamidullah est ajoute pour la fluidite du francais, mais le texte arabe enchaine simplement fiha surur marfu'a apres les versets precedents.`
  });
  console.log('  v13 done\n');

  // ============================================================
  // VERSET 14 (5981): وَأَكْوَابٌ مَّوْضُوعَةٌ
  // ============================================================
  console.log('--- VERSET 14 ---');

  // kwb (id=2644) — أَكْوَابٌ — nom pluriel indefini nominatif
  await upsertVWA(5981, 'kwb', 'gobelet', {
    sense_chosen: 'gobelet',
    concept_chosen: 'Recipient/Gobelet',
    concepts: {
      'Recipient/Gobelet': {
        status: 'retenu',
        senses: ['gobelet', 'recipient sans anse', 'recipient sans bec verseur', 'boire avec un gobelet'],
        proof_ctx: "La racine k-w-b possede quatre regroupements de sens. Recipient/Gobelet est retenu car le mot akwab est le pluriel de kub (gobelet). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le kub est un recipient a boire sans anse et sans bec verseur — un gobelet simple, arrondi, fait pour etre tenu a la main. Le pluriel akwab (schema af'al) est le pluriel standard de kub. Le contexte du jardin (source coulante v12, lits eleves v13) est celui d'elements physiques de confort — les gobelets completent le mobilier et la source. La distinction avec Chagrin/Soupir est que le chagrin est un etat emotionnel hors sujet dans un tableau de recompense paradisiaque. Le Jeu/Divertissement (jeu de des, petit tambour) et le Sens isole/Anatomie (finesse du cou) sont hors sujet.",
        axe1_verset: "Le mot akwab est le sujet du verset, precede de wa- (et) qui le connecte au verset precedent. Le champ lexical est celui de la vaisselle a boire : des gobelets (akwab) + poses (mawdu'a). Le « et » (wa) lie les gobelets aux lits eleves du verset 13 — la description du jardin s'enrichit d'element en element. Les gobelets sont la vaisselle qui accompagne la source (v12) — l'eau coule, et des gobelets sont la pour la recueillir et la boire.",
        axe2_voisins: "Le verset 13 decrivait les lits eleves. Le verset 14 ajoute les gobelets poses. Les versets 15-16 ajouteront les coussins et les tapis. La progression logique est : mobilier d'assise (lits), vaisselle (gobelets), textile d'agrements (coussins, tapis). C'est une enumeration qui construit un interieur complet et luxueux.",
        axe3_sourate: "Les gobelets font partie du tableau de la recompense. Ils contrastent avec le chatiment ou la seule boisson est l'eau bouillante (v5). Dans le jardin, l'eau coule (v12) et des gobelets sont prets a servir (v14) — tout est organise pour le confort du buveur. Dans le chatiment, l'eau brule et il n'y a rien pour la boire confortablement.",
        axe4_coherence: "Le Coran mentionne les akwab (gobelets) du paradis dans d'autres passages. En 43:71, « on fait circuler des plateaux d'or et des coupes (akwab) ». En 56:18, « des coupes (akwab), des aiguieres et un verre d'un breuvage limpide ». En 76:15, « des vases d'argent et des coupes (akwab) ». Les akwab sont systematiquement associes a la vaisselle du paradis dans le Coran.",
        axe5_frequence: "Le gobelet est l'objet qui permet de boire — il est l'intermediaire entre la source et le buveur. Le khalifa qui a servi les autres sur terre (donne a boire, partage les ressources) se retrouve dans un lieu ou les gobelets sont deja poses, prets a servir. Le service rendu est recompense par un service recu."
      },
      'Chagrin/Soupir': { status: 'nul', senses: ['soupir de regret'], proof_ctx: "Le chagrin est un etat emotionnel negatif — hors sujet dans un tableau de recompense paradisiaque ou les visages sont radieux (v8) et satisfaits (v9)." },
      'Jeu/Divertissement': { status: 'nul', senses: ['jeu de des', 'petit tambour'], proof_ctx: "Le jeu de des et le petit tambour sont des sens derives marginaux sans rapport avec le contexte du jardin et de sa vaisselle." },
      'Sens isole/Anatomie': { status: 'nul', senses: ['finesse du cou avec grosseur de tete'], proof_ctx: "Sens anatomique isole sans rapport avec le contexte du jardin." }
    }
  }, 1);

  // wde (id=1262) — مَّوْضُوعَةٌ — participe passif feminin
  await upsertVWA(5981, 'wde', 'poser', {
    sense_chosen: 'poser',
    concept_chosen: 'Depot/Placement',
    concepts: {
      'Depot/Placement': {
        status: 'retenu',
        senses: ['poser', 'accoucher', 'etablir'],
        proof_ctx: "La racine w-d-' possede deux regroupements de sens. Depot/Placement est retenu car le mot mawdu'a est un participe passif feminin — « posees, qui ont ete posees ». Le participe passif indique que les gobelets ont SUBI l'action d'etre poses — quelqu'un les a places la, prets a l'usage. D'apres les sources etymologiques, la racine w-d-' signifie poser, deposer, mettre en place. Le sens de mawdu'a est direct : les gobelets sont poses, disposes, mis en place pour etre utilises. La distinction avec Abaissement (diminuer) est que l'abaissement est un sens derive de l'idee de poser vers le bas (rabaisser, diminuer), mais dans le contexte du jardin, les gobelets sont poses comme un service prepare, pas abaisses comme un acte de diminution. Le participe passif suggere un service — les gobelets ont ete prepares et deposes pour les residents du jardin.",
        axe1_verset: "Le mot mawdu'a qualifie akwab (gobelets). Le champ lexical est celui du service prepare : des gobelets poses, prets a l'emploi. Le participe passif indique que quelqu'un a fait l'action de poser — un service a ete rendu avant l'arrivee du beneficiaire. Les gobelets ne sont pas simplement « la » — ils ont ete deposes, prepares, disposes avec soin.",
        axe2_voisins: "Le verset 13 decrivait des lits eleves (marfu'a — eleves). Le verset 14 decrit des gobelets poses (mawdu'a — poses). Le contraste entre marfu'a (eleve) et mawdu'a (pose) cree une opposition spatiale interessante : les lits sont en haut, les gobelets sont a portee de main. L'un domine, l'autre est accessible — le confort est complet.",
        axe3_sourate: "Les gobelets poses completent le tableau de la recompense. Apres l'absence de futilite (v11), la source (v12), les lits (v13), les gobelets poses (v14) confirment que tout est organise pour le bien-etre. Le chatiment (v2-7) est un lieu ou rien ne fonctionne ; la recompense (v8-16) est un lieu ou tout est prepare.",
        axe4_coherence: "Le Coran utilise la racine w-d-' dans d'autres contextes de placement. En 56:18, les coupes sont « posees » pour le service. Le participe passif mawdu'a dans le contexte du paradis designe toujours un objet mis en place pour l'usage des residents.",
        axe5_frequence: "Le placement des gobelets est un acte de service — tout est prepare a l'avance pour le khalifa recompense. Celui qui a servi les autres sur terre est servi a son tour dans le jardin."
      },
      'Abaissement': { status: 'nul', senses: ['diminuer'], proof_ctx: "Le sens d'abaissement (diminuer, rabaisser) ne correspond pas au contexte du jardin. Les gobelets ne sont pas « abaisses » ou « diminues » — ils sont poses, places, mis a disposition. Le contexte de la recompense ne comporte aucune diminution." }
    }
  }, 2);

  // VA verset 14
  await upsertVA(5981, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'des gobelets', pos: 'N', phon: 'akwab', arabic: 'أَكْوَابٌ', word_key: 'kwb', is_particle: false, sense_retenu: 'gobelet', position: 2 },
      { fr: 'poses', pos: 'ADJ', phon: "mawdu'a", arabic: 'مَّوْضُوعَةٌ', word_key: 'wde', is_particle: false, sense_retenu: 'poser', position: 3 }
    ],
    translation_arab: "Et des gobelets poses",
    full_translation: "et des coupes posees",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie le verset 14 au verset 13. En arabe, wa est une conjonction coordinatrice qui ajoute un element a une liste. Les gobelets poses s'ajoutent aux lits eleves — la description du jardin s'enrichit.

Le mot **akwab** est un nom pluriel indefini au nominatif. C'est le pluriel brise de kub (gobelet). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le kub est un recipient a boire sans anse et sans bec verseur — un gobelet simple, rond, concu pour etre saisi a la main. Le pluriel akwab (schema af'al) est la forme standard du pluriel de kub. L'indefini indique une abondance indeterminee — des gobelets, autant qu'il en faut, sans limite precisee.

Le mot **mawdu'a** est un participe passif feminin (une forme qui dit que le sujet A SUBI l'action d'etre pose). D'apres les sources etymologiques, la racine w-d-' signifie poser, deposer, mettre en place. Le participe passif indique que les gobelets ont ete poses par quelqu'un — un service a ete prepare. Les gobelets ne sont pas jetes ou eparpilles — ils sont poses avec soin, disposes pour l'usage. L'accord feminin suit la regle des pluriels brises non-humains traites comme feminins singuliers.

§JUSTIFICATION§
**gobelets** — Le sens retenu est « gobelet » du regroupement Recipient/Gobelet. Le mot « gobelets » est choisi car il rend directement le sens de kub — un recipient a boire simple, sans anse. L'alternative « coupes » (comme chez Hamidullah) est plus elegante mais imprecise — une coupe peut avoir des anses ou un pied, alors que le kub est specifiquement sans anse et sans bec. L'alternative « verres » serait anachronique — le verre en tant que materiau n'est pas implique par le mot kub.

**poses** — Le sens retenu est « poser » du regroupement Depot/Placement. Le mot « poses » rend directement le participe passif mawdu'a. L'alternative « disposes » ajouterait une nuance d'ordre et d'arrangement qui n'est pas dans le texte arabe. L'alternative « deposes » ajouterait une nuance de quelqu'un qui les a apportes et laisses la. « Poses » est le plus neutre et direct.

§CRITIQUE§
**coupes vs gobelets** — Hamidullah traduit « des coupes posees ». Le mot arabe kub (pluriel akwab) designe specifiquement un recipient sans anse et sans bec verseur. Le mot francais « coupe » designe un recipient large et peu profond, souvent avec un pied — ce n'est pas exactement un kub. Le « gobelet » est un recipient cylindrique sans anse, ce qui correspond mieux au kub arabe. Le choix de « coupe » chez Hamidullah est une elegance stylistique qui s'ecarte legerement de la description technique du recipient. Les commentateurs arabes insistent sur l'absence d'anse et de bec comme caractéristique du kub — le gobelet rend cette specificite.`
  });
  console.log('  v14 done\n');

  console.log('=== PIPELINE S88 v11-14 TERMINE ===');
})();
