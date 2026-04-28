// Pipeline S88 v6-10 — Étapes 3-4 : Axes + Traductions
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
  console.log('=== PIPELINE S88 v6-10 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 6 (5973): لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ
  // ============================================================
  console.log('--- VERSET 6 ---');

  // lys (id=761) — لَّيْسَ — verbe de negation
  await upsertVWA(5973, 'lys', 'ne pas être', {
    sense_chosen: 'ne pas être',
    concept_chosen: 'Négation/Non-existence',
    concepts: {
      'Négation/Non-existence': {
        status: 'retenu',
        senses: ["ne pas être", "il n'y a pas"],
        proof_ctx: "La racine l-y-s n'a qu'un seul regroupement de sens : la negation de l'existence. Le verbe laysa (il n'est pas) est un verbe de negation absolue en arabe — il nie l'existence meme de la chose. Dans le verset, laysa lahum ta'amun illa min dari' (il n'y a pas pour eux de nourriture sauf de dari') nie l'existence de toute nourriture autre que la plante epineuse. C'est une negation totale suivie d'une exception unique.",
        axe1_verset: "Le verbe laysa ouvre le verset en niant l'existence de toute nourriture pour ces visages. Le champ lexical est celui de la privation : pas de nourriture (ta'am), sauf (illa) une plante epineuse (dari'). La negation est absolue — laysa ne dit pas « peu de nourriture » mais « aucune nourriture ». L'exception (illa) rend la privation encore plus cruelle : il y a bien quelque chose, mais c'est immangeable.",
        axe2_voisins: "Le verset 5 decrivait l'eau bouillante. Le verset 6 ajoute la nourriture epineuse. Le verset 7 completera le tableau en disant que cette nourriture ne nourrit pas et ne rassasie pas. Les trois besoins vitaux sont retournes : le feu (v4) brule au lieu de rechauffer, l'eau (v5) bout au lieu de desalterer, la nourriture (v6) blesse au lieu de nourrir.",
        axe3_sourate: "La privation totale est un element central du tableau du chatiment (v2-7). La sourate oppose cette privation a la recompense (v8-10) ou tout est agreable et satisfaisant.",
        axe4_coherence: "Le Coran utilise laysa dans de nombreux contextes de negation absolue. En 2:177, laysa al-birra (la piete n'est pas) — la negation introduit une redefinition. En 88:6, la negation introduit la privation. La construction laysa... illa (il n'y a pas... sauf) est coranique et marque une exception unique qui renforce la privation.",
        axe5_frequence: "La negation absolue de la nourriture montre que le chatiment prive de tout ce qui est vital. Le khalifa qui n'a pas partage les ressources se retrouve dans un monde ou les ressources sont niees ou retournees contre lui."
      }
    }
  }, 1);

  // taem (id=1726) — طَعَامٌ — nom indefini nominatif
  await upsertVWA(5973, 'taem', 'nourriture', {
    sense_chosen: 'nourriture',
    concept_chosen: 'Gustation/Expérience',
    concepts: {
      'Gustation/Expérience': {
        status: 'retenu',
        senses: ['goûter', 'manger', 'nourriture', 'saveur'],
        proof_ctx: "La racine t-'-m n'a qu'un seul regroupement significatif lie a la gustation et a la nourriture. Le mot ta'am (nourriture) est un nom indefini au nominatif, sujet de laysa — « il n'y a pas de nourriture ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ta'am designe toute substance que l'on mange, la nourriture en general. L'indefini (une nourriture) indique qu'aucune nourriture quelle qu'elle soit n'est disponible.",
        axe1_verset: "Le mot ta'am est le pivot du verset — c'est ce qui est nie (laysa) et dont l'exception (illa min dari') est la seule alternative. Le champ lexical est celui de la subsistance : nourriture, exception, plante epineuse. La nourriture est le besoin fondamental qui est ici refuse.",
        axe2_voisins: "Le verset 5 parlait de l'eau (source bouillante). Le verset 6 passe a la nourriture — le deuxieme besoin vital. Le verset 7 completera en expliquant que cette « nourriture » ne nourrit pas. La progression est logique : eau brulante, nourriture sterile, ni embonpoint ni satiete.",
        axe3_sourate: "La nourriture fait partie du tableau de privation du chatiment. Elle s'oppose implicitement aux fruits et jouissances du jardin (v8-10). La sourate structure le contraste entre un monde ou tout nourrit et un monde ou rien ne nourrit.",
        axe4_coherence: "Le Coran utilise ta'am dans des contextes varies. En 6:145, la nourriture licite. En 69:34, « il ne nourrissait pas le pauvre ». En 88:6, la nourriture est niee — seule la plante epineuse reste. La racine t-'-m traverse le Coran pour parler de la subsistance et de son partage.",
        axe5_frequence: "La nourriture est un element fondamental de la mission du khalifa : nourrir, partager, distribuer. La privation de nourriture est le retournement direct de cette mission — celui qui n'a pas nourri ne sera pas nourri."
      }
    }
  }, 3);

  // Dre2 (id=2643) — ضَرِيعٍ — nom indefini genitif
  await upsertVWA(5973, 'Dre2', 'plante epineuse seche', {
    sense_chosen: 'plante epineuse seche',
    concept_chosen: 'Plante épineuse/Fourrage',
    concepts: {
      'Plante épineuse/Fourrage': {
        status: 'retenu',
        senses: ['plante epineuse seche', 'fourrage sec', 'plante dans eau stagnante'],
        proof_ctx: "La racine d-r-' possede quatre regroupements de sens. Plante epineuse/Fourrage est retenu car le mot dari' designe une plante epineuse, seche et non comestible. D'apres les sources etymologiques, le Lane's precise que le dari' est une plante epineuse (de type shibriq) qui, une fois seche, devient immangeable meme pour le betail. Le mot est en position de complement genitif apres min (de) — « de dari' » — il designe la matiere dont est faite la seule nourriture disponible. La distinction avec Humilite/Imploration est que le verset parle de nourriture (ta'am) et de ce dont elle est faite — le sens physique (plante) est impose par le contexte. Le sens Mamelle/Allaitement est hors sujet. Le Sens isole/Ressemblance est marginal.",
        axe1_verset: "Le mot dari' est le complement de « sauf de » (illa min). Le champ lexical est celui de la nourriture immangeable : la seule chose disponible est une plante epineuse seche. Le contraste est saisissant — la ou on attend de la nourriture, on ne trouve que des epines. Le dari' n'est pas juste mauvais, il est activement hostile : les epines blessent celui qui tente de manger.",
        axe2_voisins: "Le verset 5 (source bouillante) et le verset 6 (plante epineuse) forment une paire : l'eau et la nourriture sont toutes deux hostiles. Le verset 7 confirmera que cette plante ne nourrit ni ne rassasie. La progression est : eau brulante, nourriture epineuse, inutilite totale.",
        axe3_sourate: "Le dari' fait partie du tableau de desolation (v2-7). C'est l'element le plus concret et le plus visuel — une plante seche et epineuse comme seule nourriture. Ce detail physique ancre le chatiment dans le reel.",
        axe4_coherence: "Le mot dari' n'apparait qu'une seule fois dans le Coran (88:6). C'est un hapax. Son sens est eclaire par le contexte et par les sources etymologiques. D'autres passages coraniques mentionnent des arbres du chatiment (zaqqum en 37:62, 44:43, 56:52) — le dari' est un equivalent vegetal, une nourriture qui n'en est pas une.",
        axe5_frequence: "La plante epineuse est le retournement de l'agriculture et de la civilisation. Le khalifa devait cultiver la terre et partager les fruits. Celui qui ne l'a pas fait se retrouve avec une terre qui ne produit que des epines — le contraire de la civilisation."
      },
      'Humilité/Imploration': {
        status: 'peu_probable',
        senses: ['être humble', 'implorer', 'supplier', 'être faible', 'se soumettre'],
        proof_ctx: "Le sens d'humilite ne fonctionne pas dans le contexte du verset. Le mot ta'am (nourriture) impose un complement physique — « de la nourriture, sauf de l'humilite » n'a pas de sens. Le dari' est ici un objet materiel (ce que l'on mange), pas un etat d'ame. La racine d-r-' a bien le sens d'humilite dans d'autres contextes, mais la construction grammaticale (min + genitif apres ta'am) impose un sens concret.",
        axe1_verset: "Le mot ta'am (nourriture) est physique. Le complement apres illa min (sauf de) doit etre ce dont la nourriture est faite — un objet concret. L'humilite est un etat interieur, pas un aliment.",
        axe2_voisins: "Les versets 4-5 decrivent des elements physiques (feu, source). Le verset 6 continue dans le registre physique (nourriture, plante). Passer a un sens abstrait (humilite) casserait la coherence.",
        axe3_sourate: "Le tableau du chatiment est ancre dans le physique. L'humilite est un theme coranique, mais pas dans cette sequence descriptive.",
        axe4_coherence: "Le Coran utilise la racine d-r-' pour l'humilite dans d'autres contextes (7:94, 6:42). Mais en 88:6, la construction grammaticale impose le sens physique.",
        axe5_frequence: "L'humilite est une qualite positive pour le khalifa — elle ne correspond pas au registre punitif du passage."
      },
      'Mamelle/Allaitement': { status: 'nul', senses: ['mamelle', 'téter', 'aux mamelles abondantes'], proof_ctx: "Hors sujet — le contexte parle de nourriture, pas d'allaitement." },
      'Sens isolé/Ressemblance': { status: 'nul', senses: ['ressembler'], proof_ctx: "Sens isole et marginal, sans rapport avec le contexte de nourriture." }
    }
  }, 6);

  // VA verset 6
  await upsertVA(5973, {
    segments: [
      { fr: "Il n'y a pas", pos: 'V', phon: 'laysa', arabic: 'لَّيْسَ', word_key: 'lys', is_particle: false, sense_retenu: 'ne pas être', position: 1 },
      { fr: 'pour eux', pos: 'PREP+PRON', phon: 'lahum', arabic: 'لَهُمْ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'de nourriture', pos: 'N', phon: "ta'ām", arabic: 'طَعَامٌ', word_key: 'taem', is_particle: false, sense_retenu: 'nourriture', position: 3 },
      { fr: 'sauf', pos: 'EXP', phon: 'illā', arabic: 'إِلَّا', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
      { fr: 'de', pos: 'P', phon: 'min', arabic: 'مِن', word_key: null, is_particle: true, sense_retenu: null, position: 5 },
      { fr: "plante epineuse", pos: 'N', phon: "darī'", arabic: 'ضَرِيعٍ', word_key: 'Dre2', is_particle: false, sense_retenu: 'plante epineuse seche', position: 6 }
    ],
    translation_arab: "Il n'y a pas pour eux de nourriture sauf de plante epineuse",
    full_translation: "Ils n'auront pour nourriture que du dari",
    translation_explanation: `§DEMARCHE§
Le verbe **laysa** (لَّيْسَ) est un verbe de negation absolue — il nie l'existence meme de la chose. En arabe, laysa est plus fort que la negation simple (la) : il dit que la chose N'EST PAS, n'existe pas. La construction laysa lahum (il n'y a pas pour eux) nie l'existence de toute nourriture pour ces visages.

Le mot **ta'am** (طَعَامٌ) est un nom indefini au nominatif (sujet de laysa). D'apres les sources etymologiques, la racine t-'-m designe la nourriture, ce que l'on mange, toute substance alimentaire. L'indefini indique qu'aucune nourriture quelle qu'elle soit n'existe pour eux.

La particule **illa** (إِلَّا) signifie « sauf, excepte ». Elle introduit la seule exception a la negation totale. La construction laysa... illa est une forme d'exclusion absolue : rien, sauf une chose.

Le mot **dari'** (ضَرِيعٍ) est un nom indefini au genitif (complement de min). D'apres les sources etymologiques, le dari' est une plante epineuse (de type shibriq) qui une fois seche devient immangeable, meme pour les animaux. C'est le pire des fourrages — sec, epineux, sans valeur nutritive. Le choix d'un nom indefini (un dari', pas le dari') ajoute du mepris : ce n'est meme pas une plante identifiee, c'est une matiere quelconque.

§JUSTIFICATION§
**il n'y a pas** — Le sens retenu est « ne pas etre » du regroupement Negation/Non-existence. L'expression « il n'y a pas » est la traduction naturelle de laysa en francais courant. L'alternative « ils n'ont pas » serait acceptable mais « il n'y a pas pour eux » rend mieux l'idee de negation d'existence — la nourriture n'existe pas dans leur monde.

**nourriture** — Le sens retenu est « nourriture » du regroupement Gustation/Experience. Le mot « nourriture » est le plus direct et courant pour ta'am. L'alternative « aliment » serait plus technique. L'alternative « repas » impliquerait une preparation, alors que ta'am est plus general.

**plante epineuse** — Le sens retenu est « plante epineuse seche » du regroupement Plante epineuse/Fourrage. L'expression « plante epineuse » rend le dari' accessible en francais sans perdre l'idee d'hostilite — les epines blessent celui qui tente de manger. L'alternative « fourrage sec » serait trop neutre — le fourrage nourrit les animaux, alors que le dari' ne nourrit meme pas le betail. L'alternative « ronce » serait une approximation acceptable mais les ronces produisent des mures, ce qui attenuerait l'idee de sterilite totale.

§CRITIQUE§
**dari' non traduit** — Hamidullah garde le mot arabe « dari » sans le traduire, ce qui le rend opaque pour le lecteur francophone. Le dari' est une plante epineuse seche identifiee par les sources etymologiques — la traduire par « plante epineuse » permet au lecteur de comprendre immediatement l'horreur de cette « nourriture » : des epines seches au lieu d'un aliment. Ne pas traduire le mot masque le sens et oblige le lecteur a chercher dans les commentaires. Les traductions courantes qui gardent « dari » ou « epineux » sans preciser que c'est une plante immangeable meme pour le betail perdent la force du verset.`
  });
  console.log('  v6 done\n');

  // ============================================================
  // VERSET 7 (5974): لَّا يُسْمِنُ وَلَا يُغْنِى مِن جُوعٍ
  // ============================================================
  console.log('--- VERSET 7 ---');

  // smn (id=2209) — يُسْمِنُ — verbe forme IV inaccompli
  await upsertVWA(5974, 'smn', 'engraisser', {
    sense_chosen: 'engraisser',
    concept_chosen: 'Embonpoint/Abondance',
    concepts: {
      'Embonpoint/Abondance': {
        status: 'retenu',
        senses: ['être gras', 'gras'],
        proof_ctx: "La racine s-m-n n'a qu'un seul regroupement de sens, lie a l'embonpoint et a l'abondance. Le verbe yusminu est a la forme IV (faire faire) de l'inaccompli — « il ne fait pas engraisser ». D'apres les sources etymologiques, la racine s-m-n designe la graisse, l'embonpoint, l'etat d'etre gras. La forme IV (asmana) signifie « rendre gras, faire engraisser ». Le verset nie cette capacite : le dari' ne rend pas gras, il n'apporte pas de substance au corps. La negation la yusminu (il n'engraisse pas) est directe et totale.",
        axe1_verset: "Le verbe yusminu est precede de la (negation). Le champ lexical est celui de l'inutilite nutritive : pas d'embonpoint (la yusminu), pas de satiete (la yughni min ju'). Le verset dit que cette plante ne remplit aucune des deux fonctions de la nourriture — ni apporter de la masse au corps, ni calmer la faim.",
        axe2_voisins: "Le verset 6 disait que la seule nourriture est la plante epineuse. Le verset 7 complete en disant que cette plante ne sert a rien — elle ne nourrit pas (pas d'embonpoint) et ne calme pas la faim. Le verset 8 changera totalement de registre avec les visages radieux. La transition est brutale : du neant nutritif a la plenitude.",
        axe3_sourate: "Le verset 7 ferme le tableau du chatiment (v2-7) sur l'idee d'inutilite totale. La sourate passe ensuite au tableau de la recompense (v8-10). L'opposition est structurelle : un monde ou rien ne nourrit vs un monde ou tout satisfait.",
        axe4_coherence: "Le Coran associe souvent la graisse et l'embonpoint a la prosperite. En 88:7, l'absence d'embonpoint est l'absence de toute prosperite. La construction « ne fait pas engraisser et ne dispense pas de la faim » est une double negation qui couvre les deux aspects de la nutrition : la croissance et la satiete.",
        axe5_frequence: "L'embonpoint est un signe de prosperite dans la civilisation. Le khalifa qui n'a pas partage la prosperite se retrouve dans un monde ou la nourriture ne produit aucune prosperite — le retournement est complet."
      }
    }
  }, 2);

  // gny (id=2584) — يُغْنِى — verbe forme IV inaccompli
  await upsertVWA(5974, 'gny', 'suffire', {
    sense_chosen: 'suffire',
    concept_chosen: 'Richesse/Autosuffisance',
    concepts: {
      'Richesse/Autosuffisance': {
        status: 'retenu',
        senses: ['se passer de', 'être autosuffisant', 'enrichir', 'être riche'],
        proof_ctx: "La racine gh-n-y possede deux regroupements de sens. Richesse/Autosuffisance est retenu car le verbe yughni (forme IV inaccompli) signifie « rendre autosuffisant, dispenser de ». La construction yughni min ju' (dispenser de la faim) utilise la preposition min (de) — « il ne rend pas autosuffisant par rapport a la faim ». Le test de naturalite semantique confirme : « ne dispense pas de la faim » est naturel en francais. Le sens Chant est hors sujet dans un contexte de nourriture.",
        axe1_verset: "Le verbe yughni est precede de la (negation) et suivi de min ju' (de la faim). Le champ lexical est celui de l'insuffisance : le dari' ne dispense pas de la faim. La construction « ne dispense pas de la faim » dit que meme apres avoir mange cette plante, la faim reste entiere. La nourriture ne remplit pas sa fonction.",
        axe2_voisins: "Le verset 7 complete le verset 6 en expliquant pourquoi le dari' n'est pas une vraie nourriture. Il ferme la sequence du chatiment (v4-7) : feu, eau bouillante, plante epineuse sterile. Le verset 8 ouvrira la sequence de la recompense.",
        axe3_sourate: "L'absence de satiete ferme le tableau du chatiment. La sourate oppose ce vide a la plenitude du jardin (v10). L'insatisfaction perpetuelle est la marque du chatiment — rien ne suffit, rien ne comble.",
        axe4_coherence: "Le Coran utilise la racine gh-n-y pour l'autosuffisance divine (2:263) et la richesse humaine (4:6). En 88:7, l'absence d'autosuffisance alimentaire est le degre zero de la richesse — meme manger ne suffit pas a calmer la faim.",
        axe5_frequence: "L'autosuffisance est un objectif du khalifa : construire une civilisation ou les besoins sont couverts. La plante qui ne dispense pas de la faim est le contraire de cette mission."
      },
      'Sens isolé/Chant': { status: 'nul', senses: ['chant'], proof_ctx: "Hors sujet — le contexte est celui de la nourriture et de la faim, pas de la musique." }
    }
  }, 4);

  // jwe (id=2594) — جُوعٍ — nom indefini genitif
  await upsertVWA(5974, 'jwe', 'faim', {
    sense_chosen: 'faim',
    concept_chosen: 'Faim/Privation',
    concepts: {
      'Faim/Privation': {
        status: 'retenu',
        senses: ['avoir faim', 'faim', 'famine', "état de destitution et de faim", "contraindre quelqu'un à la faim", "se rendre volontairement affamé", "montrer la faim", "homme dont la marmite n'est pas pleine", "homme qui paraît toujours affamé", "avoir le ventre vide", "épisode de faim"],
        proof_ctx: "La racine j-w-' possede trois regroupements de sens. Faim/Privation est retenu car le mot ju' (faim) est en position de complement genitif apres min — « de la faim ». Le contexte est explicite : la nourriture ne dispense pas de la faim. La Faim est l'etat physique de manque alimentaire, la privation du corps. Les sens Desir ardent/Langueur (convoiter, languir) ne correspondent pas au contexte physique de nourriture et d'embonpoint. Le sens Minceur/Finesse est hors sujet.",
        axe1_verset: "Le mot ju' est le complement final du verset — la faim est ce dont on n'est pas dispense. Le champ lexical se ferme sur la faim : negation de l'embonpoint (la yusminu) + negation de la satiete (la yughni min ju'). La faim est l'etat permanent de ces visages.",
        axe2_voisins: "La faim ferme la sequence du chatiment (v4-7). Elle est le resultat de toute la sequence : le feu brule (v4), l'eau bout (v5), la nourriture est epineuse (v6), et meme cette nourriture ne calme pas la faim (v7). C'est le point le plus bas.",
        axe3_sourate: "La faim perpetuelle contraste avec la satisfaction du jardin (v9 : satisfaite de son effort). La sourate oppose la faim sans fin a la satisfaction sans fin.",
        axe4_coherence: "Le Coran mentionne la faim comme epreuve en 2:155 (« Nous vous eprouverons par la faim ») et comme chatiment en 16:112 (« Dieu lui fit gouter la faim et la peur »). En 88:7, la faim est l'etat permanent du chatiment — pas une epreuve temporaire mais une condition definitive.",
        axe5_frequence: "La faim est l'echec de la mission du khalifa. Celui qui n'a pas combattu la faim dans le monde se retrouve dans la faim perpetuelle."
      },
      'Désir ardent/Langueur': { status: 'nul', senses: ['désirer ardemment', 'languir de rencontrer quelqu\'un', 'languir après ses biens', 'convoiter', 'être insatiable de connaissance'], proof_ctx: "Le contexte est physique (nourriture, embonpoint). Le desir ardent est un etat emotionnel qui ne s'applique pas a la construction min ju' dans un contexte alimentaire." },
      'Minceur/Finesse': { status: 'nul', senses: ['femme à la taille fine'], proof_ctx: "Hors sujet — sens physique marginal sans rapport avec la privation alimentaire." }
    }
  }, 6);

  // VA verset 7
  await upsertVA(5974, {
    segments: [
      { fr: 'qui ne', pos: 'NEG', phon: 'lā', arabic: 'لَّا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'fait pas engraisser', pos: 'V', phon: 'yusminu', arabic: 'يُسْمِنُ', word_key: 'smn', is_particle: false, sense_retenu: 'engraisser', position: 2 },
      { fr: 'et ne', pos: 'NEG', phon: 'wa-lā', arabic: 'وَلَا', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'dispense pas', pos: 'V', phon: 'yughni', arabic: 'يُغْنِى', word_key: 'gny', is_particle: false, sense_retenu: 'suffire', position: 4 },
      { fr: 'de', pos: 'P', phon: 'min', arabic: 'مِن', word_key: null, is_particle: true, sense_retenu: null, position: 5 },
      { fr: 'la faim', pos: 'N', phon: "jū'", arabic: 'جُوعٍ', word_key: 'jwe', is_particle: false, sense_retenu: 'faim', position: 6 }
    ],
    translation_arab: "qui ne fait pas engraisser et ne dispense pas de la faim",
    full_translation: "qui ni n'engraisse, ni ne nourrit",
    translation_explanation: `§DEMARCHE§
Le verset 7 est une phrase relative qui qualifie le dari' du verset 6. Il se compose de deux negations paralleles :

Le verbe **yusminu** (يُسْمِنُ) est a la forme IV (causative) de l'inaccompli. D'apres les sources etymologiques, la racine s-m-n designe la graisse, l'embonpoint. La forme IV signifie « faire engraisser, rendre gras ». L'inaccompli avec la negation la (لَّا) indique que cette incapacite est permanente et generale — ce n'est pas qu'il n'engraisse pas aujourd'hui, c'est qu'il n'engraisse jamais.

Le verbe **yughni** (يُغْنِى) est egalement a la forme IV de l'inaccompli. D'apres les sources etymologiques, la racine gh-n-y signifie etre riche, se passer de. La forme IV signifie « rendre autosuffisant, dispenser de ». La construction yughni min ju' (dispenser de la faim) utilise la preposition min pour indiquer ce dont on est dispense.

Le mot **ju'** (جُوعٍ) est un nom indefini au genitif (complement de min). D'apres les sources etymologiques, la racine j-w-' designe la faim, l'etat de privation alimentaire. L'indefini (une faim) indique qu'il ne calme aucune forme de faim.

Les deux negations paralleles (la yusminu wa-la yughni) couvrent les deux fonctions de la nourriture : donner du poids au corps (engraisser) et calmer la sensation de faim (rassasier). Le dari' ne remplit ni l'une ni l'autre.

§JUSTIFICATION§
**fait pas engraisser** — Le sens retenu est « etre gras » du regroupement Embonpoint/Abondance, employe a la forme IV (faire engraisser). Le verbe « engraisser » est choisi car il rend directement la forme causative de la racine s-m-n. L'alternative « nourrir » serait trop vague — yusminu est specifiquement lié a la graisse, pas a la nutrition en general.

**dispense pas** — Le sens retenu est « suffire » du regroupement Richesse/Autosuffisance. Le verbe « dispenser de » est choisi car il rend l'idee de la forme IV : rendre autosuffisant par rapport a quelque chose. L'alternative « rassasier » serait acceptable mais ne rend pas la preposition min (de) — « dispenser de la faim » est plus precis que « rassasier ».

**la faim** — Le sens retenu est « faim » du regroupement Faim/Privation. Le mot « faim » est le plus direct. L'alternative « famine » impliquerait un evenement collectif, alors que ju' est l'etat individuel de celui qui a faim.

§CRITIQUE§
**nourrit vs dispense de la faim** — Hamidullah traduit « qui ni n'engraisse, ni ne nourrit ». Le texte arabe ne dit pas « nourrir » (racine differente) mais « dispenser de la faim » (yughni min ju'). La nuance est importante : « nourrir » est positif (apporter de la nutrition), « ne pas dispenser de la faim » est une double negation qui insiste sur la permanence de la faim. Meme apres avoir mange, la faim reste. La traduction « ne nourrit pas » masque cette insistance sur la permanence de la faim.`
  });
  console.log('  v7 done\n');

  // ============================================================
  // VERSET 8 (5975): وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ
  // ============================================================
  console.log('--- VERSET 8 ---');

  // wjh (id=747) — وُجُوهٌ — nom indefini pluriel nominatif
  await upsertVWA(5975, 'wjh', 'visage', {
    sense_chosen: 'visage',
    concept_chosen: 'Visage/Direction',
    concepts: {
      'Visage/Direction': {
        status: 'retenu',
        senses: ['se diriger vers', 'visage', 'face', 'direction'],
        proof_ctx: "La racine w-j-h n'a qu'un seul regroupement significatif (Visage/Direction). Le mot wujuh est le pluriel de wajh (visage). C'est un nom indefini au nominatif — « des visages ». Le visage est ici la partie du corps qui represente la personne entiere (synecdoque). D'apres les sources etymologiques, wajh est a la fois le visage physique et la direction vers laquelle on se tourne. Les visages du verset 8 contrastent avec ceux du verset 2 — les memes personnes representees par leurs visages, mais dans un etat radicalement different. Les sens Sens isole/Noble et Sens isole/Maniere sont marginaux et hors sujet.",
        axe1_verset: "Le mot wujuh ouvre le verset 8 comme il ouvrait le verset 2. Le champ lexical est celui de la manifestation : le visage montre l'etat interieur de la personne. Le parallele structurel entre v2 (wujuh... khashi'a — visages humilies) et v8 (wujuh... na'ima — visages radieux) organise le contraste central de la sourate.",
        axe2_voisins: "Le verset 7 fermait le tableau du chatiment. Le verset 8 ouvre celui de la recompense. La reprise du mot wujuh (visages) cree un effet de miroir : memes personnes, meme structure, mais etat oppose. Les versets 9-10 developperont ce que vivent ces visages radieux.",
        axe3_sourate: "Les visages sont le fil conducteur de la sourate 88. Ils apparaissent en v2 (humilies) et en v8 (radieux). La sourate se structure autour de ces deux groupes de visages, chacun defini par son etat.",
        axe4_coherence: "Le Coran utilise wujuh pour les visages au jour du jugement dans d'autres passages. En 3:106, « le jour ou des visages blanchiront et des visages noirciront ». En 75:22-23, « des visages ce jour-la seront radieux, regardant vers leur Seigneur ». Le visage comme marqueur de l'etat au jugement est un procede coranique.",
        axe5_frequence: "Le visage est le siege de l'identite et de la dignite. Le khalifa dont le visage est radieux est celui qui a accompli sa mission — son visage rayonne de la satisfaction de l'effort accompli."
      },
      'Sens isolé/Noble': { status: 'nul', senses: ['noble'], proof_ctx: "Sens isole sans rapport avec le pluriel wujuh dans le contexte du jugement." },
      'Sens isolé/Manière': { status: 'nul', senses: ['manière'], proof_ctx: "Hors sujet." }
    }
  }, 1);

  // nem (id=264) — نَّاعِمَةٌ — participe actif feminin
  await upsertVWA(5975, 'nem', 'jouir', {
    sense_chosen: 'jouir',
    concept_chosen: 'Bienfait/Faveur',
    concepts: {
      'Bienfait/Faveur': {
        status: 'retenu',
        senses: ['faveur', 'bénédiction', 'richesse', 'accorder un bienfait', 'nourrir bien', 'combler', 'bienfait'],
        proof_ctx: "La racine n-'-m possede trois regroupements significatifs. Bienfait/Faveur est retenu car le mot na'ima (participe actif feminin) qualifie wujuh (visages) — « des visages radieux, comblees ». D'apres les sources etymologiques, la racine n-'-m lie le bienfait a la jouissance — le ni'ma est le bienfait qui rend la vie agreable, et na'im est l'etat de celui qui jouit de ces bienfaits. Le participe actif indique que ces visages FONT activement l'action de jouir — ils sont dans un etat actif de bonheur, pas dans un bonheur subi passivement. La distinction avec Douceur/Aisance est philosophique : la douceur est un etat passif (on recoit de la douceur), le bienfait est une jouissance active (on jouit des bienfaits). Le participe actif na'ima impose le sens actif : ces visages jouissent, ils ne sont pas juste adoucis. L'Affirmation (oui, certes) et le Betail sont hors sujet.",
        axe1_verset: "Le mot na'ima qualifie directement wujuh — des visages qui jouissent. Le champ lexical est celui de la plenitude : les visages sont radieux parce qu'ils jouissent des bienfaits. Yawma'idhin (ce jour-la) situe cette jouissance au jour du jugement — un etat permanent a partir de ce jour.",
        axe2_voisins: "Le verset 7 decrivait la faim permanente. Le verset 8 oppose des visages qui jouissent — le contraste est radical. Les versets 9-10 preciseront de quoi ils jouissent : la satisfaction de l'effort (v9) et le jardin eleve (v10).",
        axe3_sourate: "La jouissance des visages est le pivot du deuxieme tableau (v8-10). La sourate oppose la souffrance sterile (v2-7) a la jouissance pleine (v8-10).",
        axe4_coherence: "Le Coran utilise na'im pour decrire le paradis (jannat al-na'im — jardin de la jouissance) dans de nombreux passages (5:65, 10:9, 22:56, 31:8, 56:12, 68:34). La racine n-'-m est systematiquement associee a la jouissance des bienfaits divins. En 88:8, les visages sont dans cet etat de jouissance.",
        axe5_frequence: "La jouissance des bienfaits est le resultat de la mission du khalifa accomplie. Celui qui a partage, construit et fait justice jouit du resultat de son effort."
      },
      'Douceur/Aisance': {
        status: 'probable',
        senses: ['floraison', 'tendresse', 'douceur', 'délicatesse', 'vie agréable', 'confort', 'aisance', 'fraîcheur', 'souplesse'],
        proof_ctx: "La Douceur/Aisance est un etat passif — on recoit de la douceur, on est dans le confort. Le Bienfait/Faveur est une jouissance active — on jouit des bienfaits, on en tire du plaisir. Le participe actif na'ima impose le sens actif : ces visages ne sont pas simplement dans un etat de douceur, ils jouissent activement. La frontiere philosophique est : la douceur est un etat dans lequel on se trouve, la jouissance est un acte que l'on fait. Le participe actif impose l'acte, pas l'etat.",
        axe1_verset: "Le mot na'ima pourrait signifier « douce, delicate ». Mais le participe actif impose une action, pas un etat. « Des visages doux » est un etat passif. « Des visages qui jouissent » est une action active. Le champ lexical du verset (jour du jugement, visages) pointe vers l'etat de la personne, pas sa texture.",
        axe2_voisins: "Les versets suivants (v9-10) parlent de satisfaction et de jardin — le registre est celui de la recompense active, pas de la douceur passive.",
        axe3_sourate: "La sourate oppose l'effort sterile (v3 : travaillantes, epuisees) a la jouissance des bienfaits (v8). La douceur ne rend pas cette opposition aussi forte que la jouissance.",
        axe4_coherence: "Le Coran utilise na'im pour le paradis — c'est un lieu de jouissance, pas juste de douceur.",
        axe5_frequence: "La jouissance est le resultat d'un effort fructueux. La douceur est un etat passif qui ne valorise pas autant l'effort du khalifa."
      },
      'Bétail/Animaux': { status: 'nul', senses: ['bétail', 'troupeau', 'chameaux', 'autruche'], proof_ctx: "Hors sujet — sens animalier sans rapport avec des visages humains." },
      'Affirmation': { status: 'nul', senses: ['oui', 'certes', 'excellent'], proof_ctx: "Hors sujet — sens grammatical qui ne qualifie pas des visages." }
    }
  }, 3);

  // VA verset 8
  await upsertVA(5975, {
    segments: [
      { fr: 'Des visages', pos: 'N', phon: 'wujūh', arabic: 'وُجُوهٌ', word_key: 'wjh', is_particle: false, sense_retenu: 'visage', position: 1 },
      { fr: 'ce jour-la', pos: 'T', phon: "yawma'idhin", arabic: 'يَوْمَئِذٍ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'radieuses', pos: 'ADJ', phon: "nā'ima", arabic: 'نَّاعِمَةٌ', word_key: 'nem', is_particle: false, sense_retenu: 'jouir', position: 3 }
    ],
    translation_arab: "Des visages, ce jour-la, radieuses",
    full_translation: "D'autres visages, ce jour-là, seront souriants",
    translation_explanation: `§DEMARCHE§
Le mot **wujuh** (وُجُوهٌ) est un nom pluriel indefini au nominatif — « des visages ». C'est un pluriel brise de wajh (visage). L'indefini donne une dimension ouverte : ce ne sont pas des visages identifies, mais un groupe indefini de personnes representees par leurs visages. La reprise du meme mot qu'en v2 cree un parallele structurel delibere — deux groupes de visages, deux destins opposes.

Le mot **yawma'idhin** (يَوْمَئِذٍ) est un adverbe de temps compose de yawm (jour) et idhin (alors) — « ce jour-la ». Il situe la scene au meme moment que le verset 2. Les deux groupes de visages coexistent dans le meme temps.

Le mot **na'ima** (نَّاعِمَةٌ) est un participe actif feminin (une forme qui dit que le sujet FAIT activement l'action). D'apres les sources etymologiques, la racine n-'-m signifie le bienfait, la jouissance, l'etat de celui qui est comble. Le participe actif indique que ces visages sont dans un etat actif de jouissance — elles jouissent, elles ne sont pas juste douces ou souriantes. Le contraste avec le verset 2 (khashi'a — humiliees) est total : la les visages subissent l'humiliation, ici elles jouissent des bienfaits.

§JUSTIFICATION§
**visages** — Le sens retenu est « visage » du regroupement Visage/Direction. Le mot « visages » est direct et naturel. Le visage represente la personne entiere — c'est la partie qui montre l'etat interieur.

**radieuses** — Le sens retenu est « jouir » du regroupement Bienfait/Faveur. Le mot « radieuses » est choisi car il rend l'etat de celui qui jouit — un visage qui jouit rayonne, il est radieux. L'alternative « jouissantes » serait trop cru en francais courant. L'alternative « comblees » est acceptable mais moins visuel — « radieuses » parle immediatement au lecteur. L'alternative « douces » (du regroupement Douceur/Aisance) est ecartee car le participe actif impose une jouissance active, pas une qualite passive.

§CRITIQUE§
**souriants vs radieuses** — Hamidullah traduit « souriants ». Le texte arabe dit na'ima — du bienfait, de la jouissance. Le sourire est une manifestation faciale possible de la jouissance, mais le texte ne parle pas du sourire (dahik, tabassama sont d'autres racines). Le texte dit que ces visages sont dans un etat de jouissance des bienfaits. « Radieuses » rend mieux cette idee de plenitude que « souriants » qui est une expression ponctuelle. D'autre part, Hamidullah ajoute « D'autres » en debut de phrase, un mot absent du texte arabe — le texte dit simplement « des visages » (wujuh), pas « d'autres visages ».`
  });
  console.log('  v8 done\n');

  // ============================================================
  // VERSET 9 (5976): لِّسَعْيِهَا رَاضِيَةٌ
  // ============================================================
  console.log('--- VERSET 9 ---');

  // sey (id=757) — سَعْيِهَا — nom en idafa + pronom suffixe
  await upsertVWA(5976, 'sey', 'effort', {
    sense_chosen: 'effort',
    concept_chosen: 'Effort/Marche',
    concepts: {
      'Effort/Marche': {
        status: 'retenu',
        senses: ["s'efforcer", 'marcher', 'travailler'],
        proof_ctx: "La racine s-'-y n'a qu'un seul regroupement de sens, lie a l'effort et a la marche. Le mot sa'y (effort) est en position d'idafa avec le pronom suffixe -ha (son, feminin) — « son effort ». La preposition li- (pour, a cause de) indique que la satisfaction est dirigee vers l'effort : « satisfaite de son effort ». D'apres les sources etymologiques, sa'y est l'effort delibere, la marche vers un but, le travail accompli. Le sens est a la fois physique (marcher) et abstrait (s'efforcer) — dans le contexte du jugement, c'est l'effort accompli dans la vie terrestre.",
        axe1_verset: "Le mot sa'y-ha est le complement de radiya (satisfaite). La preposition li- (pour) lie la satisfaction a l'effort. Le champ lexical est celui de la recompense de l'effort : on est satisfait parce que l'effort a porte ses fruits. Le pronom -ha (son effort) renvoie aux visages du verset 8 — ce sont leurs propres efforts qui les satisfont.",
        axe2_voisins: "Le verset 8 decrivait les visages radieux. Le verset 9 explique pourquoi : elles sont satisfaites de leur effort. Le verset 3 disait l'inverse : « travaillantes, epuisees » — un effort sterile. Le contraste est saisissant : en v3, l'effort epuise sans resultat ; en v9, l'effort satisfait parce qu'il a produit du fruit.",
        axe3_sourate: "L'effort est le critere de distinction entre les deux groupes. La sourate ne dit pas que le chatiment ou la recompense sont arbitraires — ils sont lies a l'effort. Celui qui a fait un effort fructueux est satisfait ; celui qui a fait un effort sterile est epuise.",
        axe4_coherence: "Le Coran lie l'effort a sa recompense en 53:39 : « l'homme n'obtient que le fruit de son effort ». En 88:9, la satisfaction est directement liee a l'effort personnel. La coherence est forte : le Coran affirme que chacun recolte ce qu'il a seme.",
        axe5_frequence: "L'effort est le coeur de la mission du khalifa. Le khalifa doit s'efforcer, travailler, marcher vers le bien. La satisfaction de l'effort est la recompense naturelle de cette mission accomplie."
      }
    }
  }, 1);

  // rdw (id=812) — رَاضِيَةٌ — participe actif feminin
  await upsertVWA(5976, 'rdw', 'être satisfait', {
    sense_chosen: 'être satisfait',
    concept_chosen: 'Satisfaction/Agrément',
    concepts: {
      'Satisfaction/Agrément': {
        status: 'retenu',
        senses: ['être satisfait', 'agréer', 'approuver', 'consentir'],
        proof_ctx: "La racine r-d-w possede deux regroupements de sens. Satisfaction/Agrement est retenu car le mot radiya (participe actif feminin) signifie « satisfaite, celle qui est satisfaite ». Le participe actif indique que la personne fait activement l'action d'etre satisfaite — c'est un etat actif de contentement, pas une satisfaction imposee de l'exterieur. La construction li-sa'y-ha radiya (pour son effort, satisfaite) indique que la satisfaction est causee par l'effort accompli. D'apres les sources etymologiques, la racine r-d-w porte l'idee de l'agrement, de l'acceptation, de la satisfaction interieure. La distinction avec Choix/Preference est que le choix est une decision ponctuelle (on choisit), tandis que la satisfaction est un etat durable (on est satisfait). Le participe actif convient aux deux, mais le contexte (satisfaite DE SON EFFORT) oriente vers la satisfaction comme resultat, pas vers le choix.",
        axe1_verset: "Le mot radiya qualifie les visages du verset 8. La preposition li- (pour, a cause de) lie la satisfaction a sa cause : l'effort. Le champ lexical est celui de la recompense : effort → satisfaction. La satisfaction n'est pas gratuite — elle est le fruit de l'effort.",
        axe2_voisins: "Le verset 8 disait « radieuses ». Le verset 9 explique pourquoi : satisfaites de leur effort. Le verset 10 completera en disant ou elles sont : dans un jardin eleve. La progression est : jouissance (v8), satisfaction de l'effort (v9), lieu de la recompense (v10).",
        axe3_sourate: "La satisfaction est le contraire de l'epuisement sterile du verset 3. La sourate oppose deux relations a l'effort : l'effort sans fruit (chatiment) et l'effort avec fruit (recompense). La satisfaction est le marqueur de l'effort fructueux.",
        axe4_coherence: "Le Coran utilise la racine r-d-w pour la satisfaction mutuelle entre Dieu et les croyants. En 5:119, « Dieu est satisfait d'eux et ils sont satisfaits de Lui ». En 98:8, « radiya Allahu 'anhum wa-radu 'anhu — Dieu est satisfait d'eux et ils sont satisfaits de Lui ». En 88:9, la satisfaction est celle de la personne envers son propre effort — un contentement interieur.",
        axe5_frequence: "La satisfaction de l'effort est le signe que le khalifa a accompli sa mission. Le khalifa qui s'est efforce pour la justice, la civilisation et le bien est satisfait parce que son effort a produit du fruit."
      },
      'Choix/Préférence': {
        status: 'peu_probable',
        senses: ['choisir pour soi', 'rendre satisfait'],
        proof_ctx: "Le choix est une decision ponctuelle — on choisit a un moment donne. La satisfaction est un etat durable — on est satisfait sur la duree. Le contexte du verset (satisfaite de son effort) oriente vers un etat resultant, pas vers une decision. « Choisissante de son effort » ne se dit pas en francais — le test de naturalite echoue. « Satisfaite de son effort » est naturel. La frontiere philosophique : le choix est un acte de volonte dirige vers l'avenir (je choisis), la satisfaction est un etat resultant du passe (je suis satisfaite de ce qui a ete fait).",
        axe1_verset: "La construction li-sa'y-ha (pour son effort) oriente vers un resultat, pas un choix. On ne choisit pas un effort deja accompli — on en est satisfait.",
        axe2_voisins: "Le contexte de recompense oriente vers la satisfaction, pas vers le choix.",
        axe3_sourate: "La sourate oppose effort sterile et effort fructueux — la satisfaction est le marqueur du fruit, pas le choix.",
        axe4_coherence: "Le Coran utilise radiya pour la satisfaction, pas pour le choix (ikhtar, istafa sont d'autres racines).",
        axe5_frequence: "La satisfaction recompense l'effort passe. Le choix oriente l'effort futur. Le contexte est celui du resultat, pas de la projection."
      }
    }
  }, 2);

  // VA verset 9
  await upsertVA(5976, {
    segments: [
      { fr: 'De son effort', pos: 'N', phon: "li-sa'yi-hā", arabic: 'لِّسَعْيِهَا', word_key: 'sey', is_particle: false, sense_retenu: 'effort', position: 1 },
      { fr: 'satisfaite', pos: 'ADJ', phon: 'rādiya', arabic: 'رَاضِيَةٌ', word_key: 'rdw', is_particle: false, sense_retenu: 'être satisfait', position: 2 }
    ],
    translation_arab: "De son effort, satisfaite",
    full_translation: "contentes de leur effort",
    translation_explanation: `§DEMARCHE§
Le verset 9 est une phrase nominale tres courte — deux mots seulement — qui qualifie les visages du verset 8.

Le mot **li-sa'yi-ha** (لِّسَعْيِهَا) est compose de trois elements : la preposition li- (pour, a cause de), le nom sa'y (effort) au genitif, et le pronom suffixe -ha (son, feminin singulier renvoyant au collectif wujuh). D'apres les sources etymologiques, la racine s-'-y signifie l'effort delibere, la marche vers un but. Le sa'y est un effort volontaire et soutenu — pas un travail mecanique mais un engagement total.

Le mot **radiya** (رَاضِيَةٌ) est un participe actif feminin (une forme qui dit que le sujet FAIT activement l'action d'etre satisfait). D'apres les sources etymologiques, la racine r-d-w signifie etre satisfait, agreer, approuver. Le participe actif indique que la satisfaction est un etat actif et durable — la personne ne recoit pas la satisfaction passivement, elle l'eprouve activement.

La construction est remarquable : la cause (l'effort) est placee AVANT le resultat (la satisfaction). En arabe, cette anteposition (taqdim) met l'accent sur la cause — c'est l'effort qui produit la satisfaction, pas l'inverse. Le texte dit : « pour son effort → satisfaite ». La satisfaction n'est pas gratuite, elle est le fruit direct de l'effort.

§JUSTIFICATION§
**son effort** — Le sens retenu est « effort » du regroupement Effort/Marche. Le mot « effort » est choisi car il rend la dimension deliberee et soutenue du sa'y. L'alternative « travail » serait acceptable mais plus mecanique — le sa'y est un engagement, pas juste un labeur. L'alternative « marche » serait trop physique pour le contexte du jugement.

**satisfaite** — Le sens retenu est « etre satisfait » du regroupement Satisfaction/Agrement. Le mot « satisfaite » est choisi car il rend directement l'etat de rida — le contentement interieur face au resultat. L'alternative « contente » serait plus faible — « satisfaite » implique une plenitude que « contente » n'a pas. L'alternative « agreee » impliquerait qu'elle recoit l'agrement de quelqu'un d'autre, alors que le texte dit qu'elle est satisfaite DE SON PROPRE EFFORT.

§CRITIQUE§
**contentes vs satisfaite** — Hamidullah traduit « contentes de leur effort ». Le mot « contentes » est plus faible que « satisfaites » — le contentement est un etat leger, la satisfaction est une plenitude. La racine r-d-w porte l'idee d'un agrement profond, d'une acceptation totale. « Satisfaite » rend mieux cette profondeur. Par ailleurs, Hamidullah utilise le pluriel « contentes de leur effort » alors que le texte arabe utilise le singulier distributif « sa'yi-ha » (son effort, a elle) — chaque visage est satisfait de SON propre effort, pas de l'effort collectif. La distinction est importante : la satisfaction est personnelle et individuelle.`
  });
  console.log('  v9 done\n');

  // ============================================================
  // VERSET 10 (5977): فِى جَنَّةٍ عَالِيَةٍ
  // ============================================================
  console.log('--- VERSET 10 ---');

  // jnn (id=394) — جَنَّةٍ — nom indefini genitif
  await upsertVWA(5977, 'jnn', 'jardin', {
    sense_chosen: 'jardin',
    concept_chosen: 'Jardin/Paradis',
    concepts: {
      'Jardin/Paradis': {
        status: 'retenu',
        senses: ['jardin', 'paradis'],
        proof_ctx: "La racine j-n-n possede trois regroupements significatifs. Jardin/Paradis est retenu car le mot janna (jardin) est precede de la preposition fi (dans) — « dans un jardin ». Le contexte est celui de la recompense (v8-10) : les visages radieux, satisfaits de leur effort, sont dans un jardin. D'apres les sources etymologiques, janna signifie un jardin touffu dont la vegetation cache le sol — l'idee premiere est la couverture par la vegetation abondante. Le paradis est le jardin par excellence — un lieu ou la vegetation couvre tout de sa beaute. La distinction avec Dissimulation/Couverture est que le jardin est un lieu concret ou l'on vit, tandis que la dissimulation est un acte abstrait. La preposition fi (dans) impose un lieu physique, pas un acte. Les sens Etres caches (djinn), Folie, Embryon et Bouclier sont hors sujet.",
        axe1_verset: "Le mot janna est precede de fi (dans) et suivi de 'aliya (elevee). Le champ lexical est celui du lieu de la recompense : un jardin eleve. Le jardin est le contraire du dari' (plante epineuse du v6) — la ou le chatiment n'offrait que des epines, la recompense offre un jardin entier.",
        axe2_voisins: "Le verset 9 donnait la raison de la satisfaction (l'effort). Le verset 10 donne le lieu de cette satisfaction : un jardin eleve. La progression est logique : jouissance (v8), satisfaction de l'effort (v9), lieu de la recompense (v10). Le jardin ferme le tableau de la recompense comme le dari' fermait celui du chatiment.",
        axe3_sourate: "Le jardin est le point d'arrivee de la sourate — le lieu ou aboutissent les visages radieux. La sourate oppose le feu brulant (v4) au jardin eleve (v10), l'eau bouillante (v5) a la vegetation luxuriante, le dari' (v6) aux fruits du jardin. L'opposition est systematique.",
        axe4_coherence: "Le Coran utilise janna des centaines de fois pour le paradis. En 55:46-76, les jardins du paradis sont decrits en detail. En 88:10, le jardin est qualifie de 'aliya (eleve) — un jardin en hauteur, ce qui est specifique a ce passage. La hauteur du jardin signifie son excellence et sa noblesse.",
        axe5_frequence: "Le jardin est la recompense du khalifa qui a cultive la terre et partage ses fruits. Le mot janna vient de la racine qui signifie couvrir — le jardin est un lieu ou la vegetation couvre tout, ou l'abondance est totale. C'est le resultat de la civilisation accomplie."
      },
      'Dissimulation/Couverture': {
        status: 'probable',
        senses: ['cacher', 'couvrir'],
        proof_ctx: "La Dissimulation/Couverture est un acte abstrait — cacher, dissimuler. Le Jardin est un lieu concret — un espace ou l'on vit. La preposition fi (dans) impose un lieu physique. On dit « dans un jardin » mais on ne dit pas « dans une dissimulation ». La frontiere philosophique : la dissimulation est un acte, le jardin est un lieu. Le contexte (satisfaction, effort, recompense) oriente vers un lieu de recompense, pas vers un acte de dissimulation. L'etymologie confirme le lien : le jardin « couvre » le sol de sa vegetation — le sens de couverture est a l'origine du mot jardin, mais dans le verset, c'est le lieu concret qui est designe, pas l'acte de couvrir.",
        axe1_verset: "La preposition fi impose un lieu. « Dans un jardin eleve » fonctionne. « Dans une couverture elevee » ne fonctionne pas naturellement.",
        axe2_voisins: "Les versets 8-9 decrivent un etat de bonheur. Le verset 10 donne le lieu — un jardin. La dissimulation ne s'inscrit pas dans cette progression.",
        axe3_sourate: "La sourate oppose des elements concrets (feu, eau, plante, jardin). La dissimulation est abstraite.",
        axe4_coherence: "Le Coran oppose systematiquement le feu (nar) au jardin (janna). La dissimulation n'a pas d'oppose systematique dans cette structure.",
        axe5_frequence: "Le jardin est la recompense concrete. La dissimulation n'est pas une recompense."
      },
      'Êtres cachés': { status: 'nul', senses: ['djinn'], proof_ctx: "Hors sujet — le contexte parle d'un lieu de recompense, pas d'etres surnaturels." },
      'Sens isolé/Folie': { status: 'nul', senses: ['folie'], proof_ctx: "Hors sujet." },
      'Sens isolé/Embryon': { status: 'nul', senses: ['embryon'], proof_ctx: "Hors sujet." },
      'Sens isolé/Bouclier': { status: 'nul', senses: ['bouclier'], proof_ctx: "Hors sujet." }
    }
  }, 2);

  // elw (id=371) — عَالِيَةٍ — participe actif feminin
  await upsertVWA(5977, 'elw', 'être haut', {
    sense_chosen: 'être haut',
    concept_chosen: 'Hauteur/Élévation',
    concepts: {
      'Hauteur/Élévation': {
        status: 'retenu',
        senses: ['être haut', 'élever', "s'élever", 'supérieur', 'le Très-Haut'],
        proof_ctx: "La racine '-l-w possede deux regroupements de sens. Hauteur/Elevation est retenu car le mot 'aliya (participe actif feminin) qualifie janna (jardin) — « un jardin eleve ». Le participe actif indique que le jardin EST ACTIVEMENT haut — il s'eleve, il occupe une position dominante. D'apres les sources etymologiques, la racine '-l-w signifie etre haut, eleve, superieur. La hauteur est a la fois physique (un lieu en altitude) et qualitative (un lieu d'excellence). Le sens Animal/Faune (charger un chameau) est un emploi isole hors sujet.",
        axe1_verset: "Le mot 'aliya qualifie directement janna — le jardin est eleve. Le champ lexical est celui de l'excellence : le jardin n'est pas n'importe quel jardin, il est en hauteur, dominant. La hauteur en arabe porte une connotation d'excellence et de noblesse. Le verset ferme le tableau de la recompense sur une image de plenitude elevee.",
        axe2_voisins: "Le verset 9 parlait de la satisfaction de l'effort. Le verset 10 situe cette satisfaction dans un lieu eleve — un jardin en hauteur. La hauteur est la recompense spatiale de l'effort : celui qui s'est eleve moralement se retrouve dans un lieu eleve physiquement.",
        axe3_sourate: "Le jardin eleve est le point culminant de la sourate. Il s'oppose au dari' (plante rampante au sol) et au feu (chaleur au niveau du sol). La hauteur est la direction de la recompense, la bassesse celle du chatiment.",
        axe4_coherence: "Le Coran utilise 'ali pour qualifier le paradis dans d'autres passages. En 69:22, « dans un jardin eleve » (fi jannatin 'aliya) — exactement la meme construction qu'en 88:10. En 56:34, « des lits eleves » (furush marfu'a). La hauteur est un attribut constant du paradis dans le Coran.",
        axe5_frequence: "L'elevation est la direction de la mission du khalifa : s'elever, elever les autres, construire en hauteur. Le jardin eleve est la recompense de celui qui a vise l'elevation."
      },
      'Animal/Faune': { status: 'nul', senses: ['charger sur un chameau'], proof_ctx: "Sens isole sans rapport avec un jardin. La construction fi jannatin 'aliya impose le sens de hauteur/elevation." }
    }
  }, 3);

  // VA verset 10
  await upsertVA(5977, {
    segments: [
      { fr: 'Dans', pos: 'P', phon: 'fī', arabic: 'فِى', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'un jardin', pos: 'N', phon: 'janna', arabic: 'جَنَّةٍ', word_key: 'jnn', is_particle: false, sense_retenu: 'jardin', position: 2 },
      { fr: 'eleve', pos: 'ADJ', phon: "'āliya", arabic: 'عَالِيَةٍ', word_key: 'elw', is_particle: false, sense_retenu: 'être haut', position: 3 }
    ],
    translation_arab: "Dans un jardin eleve",
    full_translation: "dans un Jardin haut placé",
    translation_explanation: `§DEMARCHE§
La preposition **fi** (فِى) signifie « dans » et situe les visages radieux dans un lieu precis. Cette preposition indique un contenant — les visages sont A L'INTERIEUR du jardin.

Le mot **janna** (جَنَّةٍ) est un nom indefini au genitif (complement de fi). D'apres les sources etymologiques, la racine j-n-n signifie couvrir, cacher. Le jardin (janna) est etymologiquement le lieu ou la vegetation est si abondante qu'elle couvre et cache le sol. L'indefini (un jardin) n'est pas diminutif ici — il indique que le jardin est indefini en grandeur, sans limites precises, un jardin parmi d'autres possibles.

Le mot **'aliya** (عَالِيَةٍ) est un participe actif feminin (une forme qui dit que le jardin EST ACTIVEMENT eleve). D'apres les sources etymologiques, la racine '-l-w signifie etre haut, s'elever, etre superieur. Le participe actif indique que le jardin ne se trouve pas simplement en hauteur — il est eleve par nature, il domine. La hauteur est a la fois physique (un lieu en altitude) et qualitative (un lieu d'excellence). Le jardin est eleve en position ET en qualite.

§JUSTIFICATION§
**jardin** — Le sens retenu est « jardin » du regroupement Jardin/Paradis. Le mot « jardin » est choisi car il est le plus direct pour janna. L'alternative « paradis » impliquerait une dimension religieuse specifique (le paradis chretien, le paradis comme lieu defini), alors que le texte dit simplement « un jardin » — un espace de vegetation abondante. Le mot « jardin » reste concret et accessible.

**eleve** — Le sens retenu est « etre haut » du regroupement Hauteur/Elevation. Le mot « eleve » est choisi car il rend la double dimension de la racine '-l-w : la hauteur physique et l'excellence qualitative. L'alternative « haut » serait plus brut — « un jardin haut » est moins naturel que « un jardin eleve ». L'alternative « sublime » serait trop litteraire pour du francais courant.

§CRITIQUE§
**haut place vs eleve** — Hamidullah traduit « dans un Jardin haut place ». La distinction est mineure : « haut place » et « eleve » rendent le meme sens. Cependant, « haut place » implique que quelqu'un l'a place en hauteur (un placement par un agent), alors que « eleve » decrit un etat intrinsique — le jardin EST eleve par nature. Le participe actif 'aliya soutient cette lecture : le jardin s'eleve de lui-meme, il n'est pas place en hauteur par un agent. Hamidullah met aussi une majuscule a « Jardin » — un choix editorial qui sacralise le mot, alors que le texte arabe utilise l'indefini jannatin (un jardin) sans marque de sacralisation.`
  });
  console.log('  v10 done\n');

  console.log('=== PIPELINE S88 v6-10 TERMINÉ ===');
})();
