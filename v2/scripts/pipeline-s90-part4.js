// Pipeline Sourate 90 (Al-Balad) — Partie 4: Versets 16-20 (Étapes 3-4)
// Analyse des concepts sur 5 axes + traduction + segments
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

async function upsertVA(verse_id, data) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(data).eq('id', existing[0].id);
    console.log(`  Updated VA id=${existing[0].id}`);
  } else {
    const { data: created, error } = await sb.from('verse_analyses').insert({ verse_id, ...data }).select().single();
    if (error) console.log(`  Error VA:`, error.message);
    else console.log(`  Created VA id=${created.id}`);
  }
}

// ============================================================
// VERSET 90:16 — أَوْ مِسْكِينًا ذَا مَتْرَبَةٍ
// "Ou un pauvre couvert de poussière"
// ============================================================
async function verse90_16() {
  console.log('\n=== VERSET 90:16 — أَوْ مِسْكِينًا ذَا مَتْرَبَةٍ ===');
  const verse_id = 6039;

  // ---- skn (سكن) — id=462 — "pauvre (miskîn)" ----
  // Forme: nom indéfini accusatif miskīnan (un pauvre)
  // miskîn = celui qui ne peut pas bouger par manque de moyens (de sukûn = immobilité)
  await upsertVWA(verse_id, 'skn', 'pauvre', {
    sense_chosen: "pauvre",
    concept_chosen: "Sens isolé/Pauvre",
    concepts: {
      "Habitation/Demeure": {
        status: "peu_probable",
        senses: ["habiter", "demeurer"],
        proof_ctx: "L'habitation est l'acte de demeurer en un lieu. Or le mot miskīn désigne une personne démunie, pas un habitant. La construction dhā matraba (possesseur de poussière) confirme qu'il s'agit d'un état de dénuement, pas d'habitation. Distinction : habiter est un acte stable et volontaire, être pauvre est un état subi et passif.",
        axe1_verset: "Le verset dit « un miskīn possesseur de poussière ». Le miskīn est à l'accusatif (complément de iṭʿām, v14). Si le sens était « habitant », la phrase serait « nourrir un habitant couvert de poussière » — incohérent. L'acte de nourrir cible les personnes démunies, pas les habitants en général.",
        axe2_voisins: "Le verset 15 parlait d'un orphelin (personne vulnérable). Le verset 16 ajoute un pauvre (autre personne vulnérable). Le contexte est une série de bénéficiaires d'actes de vertu — des personnes dans le besoin, pas des habitants.",
        axe3_sourate: "La sourate appelle à aider les personnes vulnérables. L'habitation ne s'inscrit pas dans ce programme de vertu.",
        axe4_coherence: "Le Coran utilise miskīn dans le sens de « pauvre, démuni » dans tous ses usages : 2:83, 2:177, 4:8, 9:60, 58:4, 68:24, 69:34, 76:8, 107:3. Le sens est univoque dans le Coran.",
        axe5_frequence: "L'habitation n'a pas de dimension éthique dans ce contexte. C'est le pauvre que le khalifa doit aider."
      },
      "Calme/Repos": {
        status: "nul",
        senses: ["être calme", "s'apaiser", "se reposer"],
        proof_ctx: "Le calme est un état intérieur de tranquillité. Le miskīn n'est pas quelqu'un de calme mais quelqu'un de démuni. Le contexte de nourriture et de famine élimine le sens de repos."
      },
      "Sens isolé/Pauvre": {
        status: "retenu",
        senses: ["pauvre"],
        proof_ctx: "Le sens retenu est « Sens isolé/Pauvre ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le miskīn est celui qui est immobilisé par le manque de moyens — le mot vient de sukūn (immobilité). Le pauvre est celui que la misère empêche de bouger, de se nourrir, de vivre dignement. C'est un état subi et permanent, pas un choix. Le mot est à l'accusatif indéfini (miskīnan) — complément de iṭʿām (nourrir, v14). L'indéfini signifie n'importe quel pauvre. Le qualificatif dhā matraba (possesseur de poussière) amplifie : c'est un pauvre si démuni qu'il est couvert de terre. Distinction avec « Habitation/Demeure » : le miskīn n'est pas un habitant mais un démuni. L'étymologie confirme : le sukūn (immobilité) qui donne miskīn n'est pas l'immobilité du repos mais celle de l'impuissance.",
        axe1_verset: "Le verset dit « ou un pauvre possesseur de poussière ». Le champ lexical est : pauvre + poussière. Le « ou » (aw) offre une alternative au verset 15 : on nourrit soit l'orphelin proche, soit le pauvre dans la poussière. Le miskīn qualifié par la poussière est le niveau extrême de la pauvreté — la personne est à même le sol, couverte de terre.",
        axe2_voisins: "Le verset 15 ciblait l'orphelin de parenté proche (le cercle familial). Le verset 16 élargit : le pauvre dans la poussière peut être n'importe qui. La progression va du proche au lointain, du familier à l'étranger. L'obstacle moral (v11-12) inclut la vertu envers tous, pas seulement les proches.",
        axe3_sourate: "La sourate construit un programme de vertu par cercles concentriques : libérer un être humain (v13), nourrir l'orphelin proche (v15), nourrir le pauvre étranger (v16). Le miskīn dhā matraba est le dernier cercle — le plus éloigné mais aussi le plus dramatique dans sa description.",
        axe4_coherence: "Le Coran associe souvent le miskīn à l'acte de nourrir : en 69:34 « il n'encourageait pas à nourrir le miskīn ». En 76:8 « et ils nourrissent le miskīn, l'orphelin et le prisonnier ». En 107:3 « et n'encourage pas à nourrir le miskīn ». Le refus de nourrir le miskīn est systématiquement présenté comme un signe de rejet moral.",
        axe5_frequence: "Le khalifa est responsable de tous les membres de la communauté, y compris les plus démunis. Le miskīn dhā matraba est la personne la plus marginalisée — celle que la société a oubliée au point qu'elle est couverte de poussière. Le khalifa qui l'ignore trahit sa mission fondamentale."
      }
    }
  }, 2);

  // ---- trb (ترب) — id=1156 — "poussière" ----
  // Forme: nom matraba (lieu/état de poussière) au génitif indéfini
  await upsertVWA(verse_id, 'trb', 'terre', {
    sense_chosen: "terre",
    concept_chosen: "Terre/Poussière",
    concepts: {
      "Terre/Poussière": {
        status: "retenu",
        senses: ["terre", "poussière", "sol"],
        proof_ctx: "Le sens retenu est « Terre/Poussière ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), turāb signifie la terre, la poussière, le sol. Le nom matraba est un nom de lieu/état (forme maf'ala) qui signifie l'état d'être couvert de poussière, le dénuement extrême. Combiné avec dhā (possesseur de), « dhā matraba » qualifie le pauvre : c'est un pauvre possesseur de poussière — si démuni qu'il est à même le sol, couvert de terre. La poussière est ici une métaphore de l'extrême pauvreté : celui qui n'a rien est au niveau de la terre. C'est un état extérieur, visible et permanent — la poussière sur le corps est le signe visible de la misère. Distinction avec « Être pauvre » : le sens « être pauvre » est un dérivé secondaire de la racine. Ici, la forme matraba oriente vers le sens physique concret (la poussière comme matière) qui sert de métaphore pour la pauvreté.",
        axe1_verset: "Le verset dit « un pauvre possesseur de poussière ». Le mot matraba est au génitif après dhā. Le champ lexical est : pauvre + poussière. La poussière qualifie physiquement l'état du pauvre : il est au sol, couvert de terre. L'image est concrète et frappante — on voit la personne dans la poussière.",
        axe2_voisins: "Le verset 15 qualifiait l'orphelin par sa parenté (dhā maqraba). Le verset 16 qualifie le pauvre par sa poussière (dhā matraba). La symétrie grammaticale (dhā + nom en maf'ala) crée un parallèle : deux personnes vulnérables, chacune définie par sa condition — l'un par le lien familial, l'autre par le dénuement physique.",
        axe3_sourate: "La sourate utilise des images concrètes pour décrire les bénéficiaires de la vertu. La poussière est l'image la plus forte de la pauvreté — elle rend la misère visible et tangible. Face à cette image, la vantardise du riche (v6) apparaît d'autant plus obscène.",
        axe4_coherence: "Le Coran utilise turāb dans plusieurs contextes : la création de l'homme à partir de terre (2:264, 3:59, 18:37), le retour à la terre (23:35, 23:82), et la poussière comme symbole de dénuement. En 80:40, les visages couverts de poussière (ghabara) sont ceux des rejeteurs. La poussière est associée à l'humilité ou à la misère.",
        axe5_frequence: "La poussière qui couvre le pauvre est le signe visible de l'échec du khalifa. Quand des membres de la communauté sont à même le sol, couverts de terre, c'est que la justice et la civilisation ont failli. Le khalifa doit relever ceux qui sont dans la poussière."
      },
      "Sens isolé/Être": {
        status: "nul",
        senses: ["être pauvre"],
        proof_ctx: "Ce sens secondaire est un dérivé de la racine. La forme matraba oriente vers le sens physique concret (poussière, terre) plutôt que vers le sens abstrait (pauvreté). De plus, le pauvre est déjà nommé par miskīn — la matraba ajoute la description physique de son état."
      }
    }
  }, 4);

  // --- Traduction v16 ---
  await upsertVA(verse_id, {
    translation_arab: "Ou un pauvre couvert de poussière",
    full_translation: "ou un pauvre dans le dénuement",
    segments: [
      { fr: "Ou", pos: "CONJ", phon: "aw", arabic: "أَوْ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "un pauvre", pos: "N.INDEF.ACC", phon: "miskīnan", arabic: "مِسْكِينًا", word_key: "skn", is_particle: false, sense_retenu: "pauvre", position: 2 },
      { fr: "couvert de", pos: "ADJ", phon: "dhā", arabic: "ذَا", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: "poussière", pos: "N.INDEF.GEN", phon: "matraba", arabic: "مَتْرَبَةٍ", word_key: "trb", is_particle: false, sense_retenu: "terre", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est syntaxiquement parallèle au verset 15 : « ou **un pauvre possesseur de poussière** » (complément de iṭʿām, v14). La conjonction **aw** (ou) offre une alternative : on nourrit soit l'orphelin proche, soit le pauvre dans la poussière. Le mot **miskīnan** est un nom dérivé de la racine s-k-n — d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le miskīn est celui que la misère a immobilisé (de sukūn = immobilité). Le mot est à l'accusatif indéfini.

L'adjectif **dhā** (possesseur de) qualifie le pauvre, comme au verset 15 pour l'orphelin. Le mot **matraba** est un nom de lieu/état (forme maf'ala de la racine t-r-b) : l'état d'être couvert de terre, le lieu de la poussière. L'expression « dhā matraba » signifie littéralement « possesseur de poussière » — un pauvre si démuni qu'il est au niveau du sol, couvert de terre.

La symétrie grammaticale avec le verset 15 est frappante : yatīman dhā maqraba / miskīnan dhā matraba — deux accusatifs indéfinis qualifiés par dhā + nom en maf'ala. Le parallélisme souligne que les deux catégories (orphelin, pauvre) sont les bénéficiaires complémentaires de la vertu.

§JUSTIFICATION§
**un pauvre** — Le sens retenu est « pauvre ». Le mot « pauvre » est du français courant pour miskīn. L'alternative « indigent » est trop soutenue. L'alternative « nécessiteux » est possible mais « pauvre » est plus direct et courant.

**couvert de poussière** — Le sens retenu est « terre ». L'expression « couvert de poussière » rend l'image concrète de la matraba. L'alternative « dans le dénuement » (Hamidullah) est une interprétation qui perd l'image physique de la poussière. Le texte dit matraba (poussière, terre), pas faqr (pauvreté abstraite). L'image de la poussière est plus forte et plus concrète que le mot abstrait « dénuement ».

§CRITIQUE§
Hamidullah traduit « ou un pauvre dans le dénuement ». Le mot « dénuement » est une interprétation abstraite de matraba. Le texte dit littéralement « possesseur de poussière » — une image physique concrète. La traduction courante perd cette image frappante du pauvre couvert de terre, réduit au niveau du sol. Le mot matraba vient de turāb (terre, poussière) — le texte veut que le lecteur voie le pauvre dans la poussière, pas qu'il pense abstraitement au « dénuement ».`
  });

  console.log('  v16 DONE');
}

// ============================================================
// VERSET 90:17 — ثُمَّ كَانَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ وَتَوَاصَوْا۟ بِٱلصَّبْرِ وَتَوَاصَوْا۟ بِٱلْمَرْحَمَةِ
// "Puis il était de ceux qui ont adhéré et se sont mutuellement recommandé la patience et la miséricorde"
// ============================================================
async function verse90_17() {
  console.log('\n=== VERSET 90:17 — ثُمَّ كَانَ مِنَ ٱلَّذِينَ ءَامَنُوا۟ وَتَوَاصَوْا۟ بِٱلصَّبْرِ وَتَوَاصَوْا۟ بِٱلْمَرْحَمَةِ ===');
  const verse_id = 6040;

  // ---- amn (أمن) — id=287 — "adhérer/croire" ----
  // Forme: verbe accompli forme IV āmanū (ils ont adhéré/cru)
  await upsertVWA(verse_id, 'amn', 'avoir la foi', {
    sense_chosen: "avoir la foi",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Sécurité/Confiance": {
        status: "probable",
        senses: ["être en sécurité", "se sentir en sécurité", "faire confiance", "confier", "fidèle", "lieu sûr"],
        proof_ctx: "La sécurité est un état intérieur de tranquillité. Or le verbe āmanū est à la forme IV (causative) : faire quelque chose activement, pas être dans un état passif. La forme IV d'a-m-n signifie donner sa confiance, adhérer — c'est un acte actif d'engagement, pas un état de sécurité. Distinction avec « Foi/Adhésion » : la sécurité est un état subi (on se sent en sécurité), l'adhésion est un acte volontaire (on choisit d'adhérer). Le verset place āmanū dans une série d'actes volontaires (adhérer + se recommander mutuellement), ce qui confirme l'acte actif.",
        axe1_verset: "Le verset dit « puis il était de ceux qui āmanū et se sont recommandé la patience et la miséricorde ». Le verbe āmanū est en parallèle avec tawāṣaw (se recommander mutuellement) — deux actes volontaires de la communauté. Si āmanū signifiait « se sont sentis en sécurité », le parallèle avec « se recommander la patience » serait incohérent — on ne met pas sur le même plan un état passif et un acte communautaire actif.",
        axe2_voisins: "Le passage (v11-20) décrit un programme de vertu : libérer, nourrir, puis adhérer et se recommander mutuellement. La sécurité comme état passif ne s'inscrit pas dans cette progression d'actes moraux.",
        axe3_sourate: "La sourate appelle à l'action : franchir l'obstacle (v11), libérer (v13), nourrir (v14-16), puis adhérer et se recommander (v17). La sécurité passive ne correspond pas au thème d'action de la sourate.",
        axe4_coherence: "Le Coran utilise āmanū (forme IV) systématiquement dans le sens d'adhérer, croire, s'engager dans la foi. La forme IV d'a-m-n est le verbe coranique par excellence pour l'acte de foi.",
        axe5_frequence: "Le khalifa qui se sent simplement en sécurité n'accomplit pas sa mission. Le khalifa doit adhérer activement aux principes de justice."
      },
      "Foi/Adhésion": {
        status: "retenu",
        senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
        proof_ctx: "Le sens retenu est « Foi/Adhésion ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme IV āmana signifie donner sa confiance, adhérer à quelque chose comme vrai, s'engager par la foi. L'adhésion est un acte intérieur qui se manifeste extérieurement : on choisit de croire et cette croyance se traduit en actes. Le verbe est à l'accompli pluriel (āmanū = ils ont adhéré) — l'adhésion est présentée comme un acte accompli, un engagement pris. Le verset place cet acte en parallèle avec tawāṣaw (se recommander mutuellement) — l'adhésion et la recommandation mutuelle sont les deux piliers de la communauté vertueuse. Distinction avec « Sécurité/Confiance » : la sécurité est un état passif, l'adhésion est un acte volontaire d'engagement. Distinction avec « Garantie/Protection » : la protection est un acte tourné vers l'autre (protéger quelqu'un), l'adhésion est un acte intérieur d'engagement personnel.",
        axe1_verset: "Le verset dit « puis il était de ceux qui ont adhéré et se sont recommandé mutuellement la patience et se sont recommandé mutuellement la miséricorde ». Le verbe āmanū ouvre la série des actes communautaires. Le champ lexical est : adhérer + recommander + patience + miséricorde. L'adhésion est le fondement sur lequel se construisent les recommandations mutuelles — on adhère d'abord, puis on se recommande la patience et la miséricorde.",
        axe2_voisins: "Les versets 13-16 décrivaient des actes de vertu individuels (libérer, nourrir). Le verset 17 passe au collectif : être parmi ceux qui adhèrent et se recommandent mutuellement. L'individu rejoint la communauté des vertueux. L'adhésion est la porte d'entrée dans cette communauté.",
        axe3_sourate: "La sourate trace un parcours : l'être humain est créé dans la difficulté (v4), se vante (v6), reçoit des dons (v8-10), doit franchir l'obstacle de la vertu (v11-16), puis rejoindre la communauté des adhérents (v17). L'adhésion est l'aboutissement du parcours individuel — elle mène à la communauté.",
        axe4_coherence: "Le Coran utilise alladhīna āmanū (ceux qui ont adhéré) des centaines de fois comme la désignation standard de la communauté des croyants. C'est la formule la plus fréquente du Coran pour identifier ceux qui suivent la voie. En 103:3, la même structure : « sauf ceux qui ont adhéré et fait les bonnes actions et se sont recommandé la vérité et se sont recommandé la patience ». Le parallèle avec la sourate 103 est frappant.",
        axe5_frequence: "L'adhésion est l'acte fondateur du khalifa. Le khalifa n'est pas seulement celui qui agit bien — il est celui qui adhère d'abord aux principes de justice, puis agit en conséquence. L'adhésion est l'engagement intérieur qui donne sens aux actes extérieurs."
      },
      "Garantie/Protection": {
        status: "nul",
        senses: ["protéger", "accorder la sécurité"],
        proof_ctx: "La protection est un acte extérieur tourné vers l'autre. Le verset décrit un acte intérieur d'engagement (āmanū = ils ont adhéré), pas un acte de protection d'autrui. Le contexte communautaire (ceux qui adhèrent et se recommandent mutuellement) confirme l'engagement, pas la protection."
      }
    }
  }, 4);

  // ---- wsy (وصي) — id=813 — "recommander mutuellement" ----
  // Forme: verbe accompli forme VI tawāṣaw (ils se sont mutuellement recommandé)
  await upsertVWA(verse_id, 'wsy', 'recommander', {
    sense_chosen: "recommander",
    concept_chosen: "Recommandation/Injonction",
    concepts: {
      "Recommandation/Injonction": {
        status: "retenu",
        senses: ["recommander", "enjoindre", "faire un testament", "charger quelqu'un d'une mission"],
        proof_ctx: "Le sens retenu est « Recommandation/Injonction ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), waṣṣā signifie transmettre une parole importante, recommander, enjoindre. La forme VI (tawāṣaw) ajoute la réciprocité : se recommander MUTUELLEMENT — chacun recommande à l'autre et reçoit la recommandation de l'autre. C'est un acte extérieur, directionnel et réciproque. La recommandation sort de chacun et atteint les autres, créant un réseau de soutien mutuel. Le verbe est répété deux fois dans le verset avec deux objets différents (la patience et la miséricorde) — la double recommandation forme les deux piliers de la communauté. Distinction avec « Liaison/Connexion » : la liaison est un acte physique de joindre, la recommandation est un acte verbal de transmission de valeurs.",
        axe1_verset: "Le verset dit « et se sont recommandé mutuellement la patience et se sont recommandé mutuellement la miséricorde ». Le verbe tawāṣaw est à la forme VI de l'accompli (une forme qui exprime la réciprocité : se faire l'un à l'autre). La répétition du verbe avec deux compléments (bi-l-ṣabr et bi-l-marḥama) crée un parallélisme qui souligne les deux valeurs complémentaires : l'endurance face à la difficulté (patience) et la tendresse envers les autres (miséricorde).",
        axe2_voisins: "Les versets 13-16 décrivaient des actes individuels de vertu. Le verset 17 passe à l'acte collectif : se recommander mutuellement. Le passage de l'individuel au collectif est le point de bascule — la vertu n'est complète que quand elle est partagée et mutuellement encouragée.",
        axe3_sourate: "La sourate construit un programme moral complet : actes de vertu individuels (libérer, nourrir) puis communauté de soutien mutuel (adhérer, se recommander). La recommandation mutuelle est le ciment social qui empêche l'isolement moral.",
        axe4_coherence: "Le Coran utilise tawāṣaw dans la sourate 103:3 avec les mêmes termes : « se sont recommandé la vérité et se sont recommandé la patience ». La sourate 90 remplace « la vérité » par « la miséricorde » — les deux sourates se complètent. La recommandation mutuelle est un pilier communautaire dans le Coran.",
        axe5_frequence: "Le khalifa ne peut pas accomplir sa mission seul. La recommandation mutuelle crée le réseau de soutien nécessaire pour maintenir la justice et la civilisation. Le khalifa qui recommande la patience et la miséricorde construit une communauté capable d'affronter les épreuves ensemble."
      },
      "Liaison/Connexion": {
        status: "nul",
        senses: ["lier ensemble", "terre fertile continue"],
        proof_ctx: "La liaison physique (joindre deux choses) n'a pas de rapport avec l'acte verbal de recommandation mutuelle. Le verset décrit une transmission de valeurs entre personnes, pas un acte de connexion physique."
      }
    }
  }, 5);

  // ---- sbr (صبر) — id=502 — "patience" ----
  // Forme: nom défini génitif al-ṣabr (la patience)
  await upsertVWA(verse_id, 'sbr', 'patienter', {
    sense_chosen: "patienter",
    concept_chosen: "Patience/Endurance",
    concepts: {
      "Patience/Endurance": {
        status: "retenu",
        senses: ["patienter", "endurer", "patience", "retenir"],
        proof_ctx: "Le sens retenu est « Patience/Endurance ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ṣabara signifie supporter sans fléchir, endurer avec constance. La patience est un état intérieur permanent de résistance face à l'épreuve — on refuse de céder, on tient bon. Le nom al-ṣabr est défini (avec al-) : c'est la patience en tant que valeur connue et identifiée. La préposition bi (avec/par) indique l'objet de la recommandation : « ils se sont recommandé avec la patience » = ils se sont encouragés à patienter. Il n'y a qu'un seul sens pertinent pour cette racine dans ce contexte.",
        axe1_verset: "Le verset dit « se sont recommandé mutuellement la patience ». Le mot al-ṣabr est au génitif défini après bi. Le champ lexical est : recommander + patience + miséricorde. La patience est la première des deux valeurs recommandées — elle précède la miséricorde. L'ordre n'est pas anodin : la patience est la condition préalable à la miséricorde. Il faut d'abord endurer soi-même avant de pouvoir être miséricordieux envers les autres.",
        axe2_voisins: "Les actes de vertu des versets 13-16 (libérer, nourrir en temps de famine) exigent de la patience : donner quand on manque soi-même demande de l'endurance. La patience recommandée au verset 17 est le support moral qui rend les actes des versets précédents possibles.",
        axe3_sourate: "La sourate commence par rappeler que l'être humain est créé dans la difficulté (v4). La patience est la réponse à cette difficulté : au lieu de se vanter (v6), on endure et on agit. La patience est le trait moral qui transforme la difficulté en vertu.",
        axe4_coherence: "Le Coran mentionne la patience (ṣabr) plus de 90 fois. En 103:3, exactement la même recommandation : « se sont recommandé la patience ». En 2:153, « cherchez aide dans la patience et la prière ». La patience est une des valeurs les plus insistantes du Coran.",
        axe5_frequence: "Le khalifa qui perd patience ne peut pas accomplir sa mission de justice. La patience est la fondation sur laquelle se construisent tous les actes de civilisation — libérer les opprimés et nourrir les affamés demande de la constance et de l'endurance face aux difficultés."
      },
      "Sens isolé/Emprisonner": {
        status: "nul",
        senses: ["emprisonner"],
        proof_ctx: "L'emprisonnement est un sens concret qui n'a aucun rapport avec la recommandation mutuelle de valeurs morales."
      }
    }
  }, 7);

  // ---- rhm (رحم) — id=251 — "miséricorde" ----
  // Forme: nom défini génitif al-marḥama (la miséricorde)
  await upsertVWA(verse_id, 'rhm', 'miséricorde', {
    sense_chosen: "miséricorde",
    concept_chosen: "Miséricorde/Tendresse",
    concepts: {
      "Miséricorde/Tendresse": {
        status: "retenu",
        senses: ["miséricorde", "pardon", "traiter avec compassion", "miséricorde réciproque"],
        proof_ctx: "Le sens retenu est « Miséricorde/Tendresse ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), raḥima signifie éprouver de la tendresse, traiter avec compassion. Le nom marḥama est un nom d'intensité/lieu de la racine r-ḥ-m : la miséricorde comme réalité englobante. La miséricorde est un mouvement intérieur de tendresse qui se dirige vers l'extérieur en actes de bienfaisance — elle sort de celui qui l'éprouve et atteint celui qui en bénéficie. Le mot est défini (al-marḥama) : c'est la miséricorde comme valeur universelle et identifiée. C'est la deuxième valeur recommandée mutuellement, après la patience. Distinction avec « Utérus/Reproduction » : le sens physique est hors contexte ici (recommandation de valeurs morales). Distinction avec « Parenté/Lien familial » : la parenté est un lien biologique fixe, la miséricorde est un acte de tendresse volontaire.",
        axe1_verset: "Le verset dit « se sont recommandé mutuellement la miséricorde ». Le mot al-marḥama est au génitif défini après bi. Le champ lexical est : recommander + patience + miséricorde. La miséricorde complète la patience : la patience endure, la miséricorde agit. Les deux ensemble forment l'équilibre moral parfait — résistance intérieure et tendresse extérieure.",
        axe2_voisins: "Les actes de vertu des versets 13-16 sont des manifestations concrètes de la miséricorde : libérer un être humain, nourrir un orphelin, nourrir un pauvre. La miséricorde du verset 17 est le principe moral qui sous-tend tous ces actes. Se recommander la miséricorde, c'est s'encourager mutuellement à continuer ces actes de vertu.",
        axe3_sourate: "La sourate oppose la vantardise stérile du riche (v6) à la miséricorde agissante de la communauté vertueuse (v17). La miséricorde est la réponse morale à l'arrogance : au lieu de dilapider sa richesse par ego, on la partage par compassion.",
        axe4_coherence: "Le Coran présente la miséricorde (raḥma) comme un attribut central. En 6:12 « Il s'est prescrit la miséricorde ». En 21:107 le Prophète est envoyé « comme miséricorde pour les mondes ». La recommandation mutuelle de la miséricorde fait écho à cette valeur fondamentale du Coran.",
        axe5_frequence: "La miséricorde est l'essence de la mission du khalifa. Le khalifa qui empêche la corruption et établit la justice le fait par miséricorde envers les créatures. Se recommander la miséricorde, c'est rappeler constamment la finalité de la mission : non pas la domination, mais la tendresse active envers les autres."
      },
      "Utérus/Reproduction": {
        status: "nul",
        senses: ["utérus", "vulve"],
        proof_ctx: "Le sens physique de l'utérus est hors contexte dans une recommandation mutuelle de valeurs morales. Le verset parle de miséricorde comme vertu, pas d'organes reproducteurs."
      },
      "Parenté/Lien familial": {
        status: "nul",
        senses: ["lien de parenté", "parents par les femmes"],
        proof_ctx: "Le lien de parenté est un lien biologique fixe, pas une valeur que l'on recommande mutuellement. On ne se recommande pas la parenté — on se recommande la miséricorde comme acte volontaire."
      }
    }
  }, 9);

  // --- Traduction v17 ---
  await upsertVA(verse_id, {
    translation_arab: "Puis il était de ceux qui ont adhéré et se sont mutuellement recommandé la patience et se sont mutuellement recommandé la miséricorde",
    full_translation: "et qui, de plus, parsing est de ceux qui croient et s'enjoignent mutuellement l'endurance, et s'enjoignent mutuellement la miséricorde",
    segments: [
      { fr: "Puis", pos: "CONJ", phon: "thumma", arabic: "ثُمَّ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "il était", pos: "V.ACC", phon: "kāna", arabic: "كَانَ", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "de", pos: "PREP", phon: "min", arabic: "مِنَ", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: "ceux qui", pos: "REL", phon: "alladhīna", arabic: "ٱلَّذِينَ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
      { fr: "ont adhéré", pos: "V.ACC.IV", phon: "āmanū", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "avoir la foi", position: 5 },
      { fr: "et se sont mutuellement recommandé", pos: "V.ACC.VI", phon: "tawāṣaw", arabic: "وَتَوَاصَوْا۟", word_key: "wsy", is_particle: false, sense_retenu: "recommander", position: 6 },
      { fr: "la patience", pos: "N.DEF.GEN", phon: "bi-l-ṣabr", arabic: "بِٱلصَّبْرِ", word_key: "sbr", is_particle: false, sense_retenu: "patienter", position: 7 },
      { fr: "et se sont mutuellement recommandé", pos: "V.ACC.VI", phon: "tawāṣaw", arabic: "وَتَوَاصَوْا۟", word_key: "wsy", is_particle: false, sense_retenu: "recommander", position: 8 },
      { fr: "la miséricorde", pos: "N.DEF.GEN", phon: "bi-l-marḥama", arabic: "بِٱلْمَرْحَمَةِ", word_key: "rhm", is_particle: false, sense_retenu: "miséricorde", position: 9 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par **thumma** (puis, ensuite) — une conjonction qui marque un ordre temporel ou logique. Après avoir décrit les actes de vertu individuels (v13-16), le texte ajoute une condition supplémentaire avec thumma : être membre de la communauté des adhérents. Le verbe **kāna** (il était) à l'accompli suivi de **min** (parmi) place l'individu au sein d'un groupe : « il était parmi ceux qui... ».

Le pronom relatif **alladhīna** (ceux qui) introduit la description de ce groupe. Le premier verbe **āmanū** est une forme IV (causative) de la racine a-m-n à l'accompli pluriel : ils ont adhéré, ils ont donné leur engagement. La forme IV est importante — ce n'est pas « être en sécurité » (forme I) mais « donner activement sa confiance/adhésion » (forme IV).

Le verbe **tawāṣaw** est une forme VI (réciprocité) de la racine w-ṣ-y : ils se sont recommandé les uns aux autres. La forme VI indique que l'action est mutuelle — chacun recommande et chacun reçoit la recommandation. Le verbe est répété deux fois avec deux compléments : **bi-l-ṣabr** (par/avec la patience) et **bi-l-marḥama** (par/avec la miséricorde). La préposition bi marque l'objet de la recommandation.

Les deux noms **al-ṣabr** et **al-marḥama** sont définis (avec al-) — ce sont la patience et la miséricorde comme valeurs universelles et identifiées, pas des instances particulières. La patience (ṣabr) est l'endurance face aux épreuves ; la miséricorde (marḥama) est la tendresse agissante envers les autres.

§JUSTIFICATION§
**ont adhéré** — Le sens retenu est « avoir la foi ». Le mot « adhéré » est choisi car la forme IV āmana signifie donner son engagement actif. L'alternative « cru » est possible mais « adhéré » porte mieux la dimension d'engagement volontaire et actif. L'alternative « se sont sentis en sécurité » est écartée car la forme IV est causative/active, pas un état passif.

**se sont mutuellement recommandé** — Le sens retenu est « recommander ». L'expression « se sont mutuellement recommandé » traduit la forme VI (réciprocité) de tawāṣaw. L'alternative « se sont enjoint » est possible mais plus soutenu. L'alternative « se sont conseillé » est trop faible — la waṣiyya est plus qu'un conseil, c'est une injonction solennelle.

**la patience** — Le sens retenu est « patienter ». Le mot « patience » est du français courant. L'alternative « endurance » est possible mais plus physique — la patience est plus large et inclut l'endurance morale.

**la miséricorde** — Le sens retenu est « miséricorde ». Le mot « miséricorde » est choisi car la marḥama est une tendresse qui se manifeste en actes. L'alternative « compassion » est possible mais la miséricorde est plus large — elle inclut la compassion mais aussi le pardon et l'aide active.

§CRITIQUE§
Hamidullah traduit « et qui, de plus, est de ceux qui croient et s'enjoignent mutuellement l'endurance, et s'enjoignent mutuellement la miséricorde ». La traduction est globalement fidèle. La nuance est que « croient » est plus passif qu'« ont adhéré » — āmanū (forme IV) est un acte d'engagement, pas un simple état de croyance. Le mot « endurance » pour ṣabr est un choix valide mais plus physique que « patience ». Les traductions courantes donnent sensiblement le même sens pour ce verset.`
  });

  console.log('  v17 DONE');
}

// ============================================================
// VERSET 90:18 — أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْمَيْمَنَةِ
// "Ceux-là sont les compagnons de la droite"
// ============================================================
async function verse90_18() {
  console.log('\n=== VERSET 90:18 — أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلْمَيْمَنَةِ ===');
  const verse_id = 6041;

  // ---- shb (صحب) — id=476 — "compagnon" ----
  // Forme: nom pluriel défini aṣḥābu (les compagnons)
  await upsertVWA(verse_id, 'shb', 'compagnon', {
    sense_chosen: "compagnon",
    concept_chosen: "Compagnonnage/Association",
    concepts: {
      "Compagnonnage/Association": {
        status: "retenu",
        senses: ["accompagner", "compagnon", "associé", "ami"],
        proof_ctx: "Le sens retenu est « Compagnonnage/Association ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ṣaḥiba signifie accompagner quelqu'un, être son compagnon de route. Le nom aṣḥāb (pluriel de ṣāḥib) désigne les compagnons — ceux qui cheminent ensemble, qui partagent un même parcours. Le compagnonnage est un état permanent de proximité et de solidarité. Les aṣḥāb al-maymana sont ceux qui partagent la condition de la droite — ils appartiennent à ce groupe, ils en sont les membres permanents. Il n'y a qu'un seul sens pour cette racine — tous tournent autour du compagnonnage et de l'association.",
        axe1_verset: "Le verset dit « ceux-là sont les compagnons de la droite ». Le mot aṣḥābu est au nominatif défini — prédicat de la phrase nominale (ulāʾika aṣḥābu = ceux-là [sont] les compagnons). Le champ lexical est : démonstratif + compagnon + droite. Le verset identifie le groupe décrit aux versets 13-17 : ceux qui franchissent l'obstacle de la vertu sont les compagnons de la droite.",
        axe2_voisins: "Le verset 17 décrivait les qualités du groupe (adhérer, se recommander la patience et la miséricorde). Le verset 18 les identifie : ils sont les compagnons de la droite. Le verset 19 introduira le contraste avec les compagnons de la gauche. La structure est : description (v13-17) → identification (v18) → contraste (v19-20).",
        axe3_sourate: "La sourate aboutit à la classification de l'humanité en deux groupes : les compagnons de la droite (vertueux) et les compagnons de la gauche (rejeteurs). Le compagnonnage est l'état permanent de ceux qui ont choisi la voie de la vertu.",
        axe4_coherence: "Le Coran utilise « aṣḥāb al-maymana » en 56:8, 56:27, 56:38, 56:90-91 et ici en 90:18. Dans la sourate 56, les compagnons de la droite sont décrits en détail comme ceux qui reçoivent les bienfaits. L'expression est une désignation coranique fixe pour le groupe des vertueux.",
        axe5_frequence: "Les compagnons de la droite sont ceux qui accomplissent la mission du khalifa : justice, générosité, patience, miséricorde. Le compagnonnage de la droite est la récompense de celui qui a franchi l'obstacle de la vertu."
      }
    }
  }, 2);

  // ---- ymn (يمن) — id=1028 — "droite/bénédiction" ----
  // Forme: nom défini génitif al-maymana (la droite/le lieu de bénédiction)
  await upsertVWA(verse_id, 'ymn', 'droite', {
    sense_chosen: "droite",
    concept_chosen: "Droite/Serment",
    concepts: {
      "Droite/Serment": {
        status: "retenu",
        senses: ["droite", "serment", "main droite"],
        proof_ctx: "Le sens retenu est « Droite/Serment ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), yamîn signifie le côté droit, la main droite, le serment. Le nom maymana est un nom de lieu (forme maf'ala) qui signifie le lieu de la droite, le côté droit. La droite est traditionnellement le côté de la bénédiction, de la force et du bon augure dans la tradition arabe. Les « compagnons de la maymana » sont ceux qui se trouvent du côté droit — le côté favorable. Le mot est défini (al-maymana) : c'est la droite comme position connue et identifiée. Distinction avec « Bénédiction/Prospérité » : la bénédiction est un don reçu, la droite est une position occupée. Le nom maymana (forme de lieu) oriente vers la position plutôt que vers le don. Les deux sens sont liés (être à droite = être béni), mais la forme grammaticale privilégie la position.",
        axe1_verset: "Le verset dit « ceux-là sont les compagnons de la droite ». Le mot al-maymana est au génitif défini dans une construction de type idafa (aṣḥābu al-maymana = les compagnons de la droite). Le champ lexical est : compagnon + droite. La droite identifie le groupe : être du côté droit, c'est être du bon côté.",
        axe2_voisins: "Le verset 19 introduira le contraste avec « aṣḥāb al-mashʾama » (les compagnons de la gauche/du mauvais augure). La symétrie maymana/mashʾama oppose la droite (bon augure) à la gauche (mauvais augure). Le contraste est structurel et sémantique.",
        axe3_sourate: "La sourate aboutit à cette classification binaire : droite (vertueux) et gauche (rejeteurs). La droite résume tout le programme de vertu décrit dans la sourate — c'est la destination finale de celui qui a franchi l'obstacle.",
        axe4_coherence: "Le Coran utilise « aṣḥāb al-maymana » en parallèle avec « aṣḥāb al-mashʾama » en 56:8-9 et ici en 90:18-19. La sourate 56 développe longuement la description des deux groupes. La sourate 90 résume en deux versets ce que la sourate 56 développe en dizaines de versets.",
        axe5_frequence: "La droite est la position du khalifa accompli : celui qui a franchi l'obstacle de la vertu se retrouve du bon côté. La maymana est à la fois une position (la droite) et une récompense (la bénédiction)."
      },
      "Bénédiction/Prospérité": {
        status: "probable",
        senses: ["être béni", "prospérité"],
        proof_ctx: "La bénédiction est un don reçu de l'extérieur. La maymana peut signifier le lieu de la bénédiction et de la prospérité — les compagnons de la maymana seraient alors les compagnons de la bénédiction. Les deux sens (droite et bénédiction) sont intimement liés dans la racine y-m-n. La distinction est que le sens de « droite » est spatial (une position), tandis que « bénédiction » est un état. La forme maymana (nom de lieu) oriente vers la position, mais le sens de bénédiction reste présent en arrière-plan.",
        axe1_verset: "Si maymana signifie « bénédiction », la phrase serait « les compagnons de la bénédiction » — cohérent. Mais la symétrie avec mashʾama (v19, mauvais augure/gauche) suggère une opposition spatiale droite/gauche plutôt que bénédiction/malédiction.",
        axe2_voisins: "Le contraste avec mashʾama (v19) fonctionne mieux comme opposition spatiale (droite vs gauche) que comme opposition de dons (bénédiction vs malédiction).",
        axe3_sourate: "Les deux lectures (droite ou bénédiction) sont cohérentes avec le thème de la sourate. Les vertueux sont à la fois du bon côté et bénis.",
        axe4_coherence: "En 56:8, aṣḥāb al-maymana est immédiatement suivi de « mā aṣḥāb al-maymana » (que sont les compagnons de la maymana !) — le même style de question rhétorique que 90:12. Les deux sens coexistent dans l'usage coranique.",
        axe5_frequence: "La bénédiction et la position à droite convergent dans la mission du khalifa : être du bon côté, c'est recevoir la bénédiction de l'accomplissement de sa mission."
      },
      "Sens isolé/Yémen": {
        status: "nul",
        senses: ["Yémen"],
        proof_ctx: "Le Yémen est un lieu géographique. Le verset parle d'une classification morale de l'humanité, pas de géographie. Aucun rapport avec le contexte."
      }
    }
  }, 3);

  // --- Traduction v18 ---
  await upsertVA(verse_id, {
    translation_arab: "Ceux-là sont les compagnons de la droite",
    full_translation: "Ceux-là sont les gens de la droite",
    segments: [
      { fr: "Ceux-là", pos: "DEM", phon: "ulāʾika", arabic: "أُو۟لَـٰٓئِكَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "sont les compagnons", pos: "N.DEF.NOM", phon: "aṣḥābu", arabic: "أَصْحَـٰبُ", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 2 },
      { fr: "de la droite", pos: "N.DEF.GEN", phon: "al-maymana", arabic: "ٱلْمَيْمَنَةِ", word_key: "ymn", is_particle: false, sense_retenu: "droite", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale : **ulāʾika** (ceux-là, pronom démonstratif de l'éloignement) + **aṣḥābu al-maymana** (les compagnons de la droite). En arabe, une phrase nominale (sujet + prédicat sans verbe) exprime une réalité permanente et établie — « ceux-là SONT les compagnons de la droite » (pas « deviennent » ou « seront », mais « sont » de manière intrinsèque).

Le pronom **ulāʾika** (ceux-là) renvoie à tout le groupe décrit aux versets 13-17 : ceux qui libèrent, nourrissent, adhèrent, et se recommandent mutuellement la patience et la miséricorde. Le nom **aṣḥāb** (pluriel de ṣāḥib) signifie les compagnons, les associés permanents. Il est en construction d'annexion (idafa) avec **al-maymana** : les compagnons DE la droite. Le mot **maymana** est un nom de lieu (forme maf'ala de y-m-n) : le lieu de la droite, le côté droit.

§JUSTIFICATION§
**les compagnons** — Le sens retenu est « compagnon ». Le mot « compagnons » est choisi car aṣḥāb désigne ceux qui partagent une même condition de façon permanente. L'alternative « gens » (Hamidullah) est plus neutre — « compagnons » porte mieux l'idée de partage et de solidarité qui est le thème du verset 17.

**de la droite** — Le sens retenu est « droite ». Le mot « droite » est choisi car la maymana est le côté droit. L'alternative « de la bénédiction » est possible (le sens est lié) mais « droite » préserve l'opposition spatiale avec « gauche » (mashʾama, v19) et est plus littéral.

§CRITIQUE§
Hamidullah traduit « Ceux-là sont les gens de la droite ». Le choix de « gens » au lieu de « compagnons » pour aṣḥāb perd la dimension de solidarité et de compagnonnage. Le ṣāḥib est celui qui accompagne, qui chemine avec — les « gens » sont simplement des individus dans un même lieu. La nuance est importante : les aṣḥāb de la droite ne sont pas simplement « situés à droite » — ils partagent un cheminement commun de vertu, de patience et de miséricorde.`
  });

  console.log('  v18 DONE');
}

// ============================================================
// VERSET 90:19 — وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِنَا هُمْ أَصْحَـٰبُ ٱلْمَشْـَٔمَةِ
// "Et ceux qui ont rejeté nos signes, eux sont les compagnons de la gauche"
// ============================================================
async function verse90_19() {
  console.log('\n=== VERSET 90:19 — وَٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِنَا هُمْ أَصْحَـٰبُ ٱلْمَشْـَٔمَةِ ===');
  const verse_id = 6042;

  // ---- kfr (كفر) — id=294 — "rejeter/couvrir" ----
  // Forme: verbe accompli kafarū (ils ont rejeté/couvert)
  await upsertVWA(verse_id, 'kfr', 'rejeter', {
    sense_chosen: "rejeter",
    concept_chosen: "Rejet/Ingratitude",
    concepts: {
      "Couverture/Dissimulation": {
        status: "probable",
        senses: ["couvrir", "cacher", "la nuit qui couvre"],
        proof_ctx: "Le sens originel de k-f-r est couvrir, cacher. Appliqué à bi-āyātinā (nos signes), « couvrir nos signes » signifie les dissimuler, les ignorer volontairement. Ce sens est étymologiquement premier et cohérent : ceux qui couvrent les signes refusent de les voir. Distinction avec « Rejet/Ingratitude » : couvrir est un acte de dissimulation (empêcher de voir), rejeter est un acte de refus actif (reconnaître et refuser). Les deux sens convergent : couvrir les signes revient à les rejeter. Mais « rejet » est plus précis car le verbe est suivi de bi (avec/par rapport à) — la préposition bi indique la chose rejetée, ce qui oriente vers le refus actif plutôt que vers la dissimulation passive.",
        axe1_verset: "Le verset dit « ceux qui kafarū bi-āyātinā » (ceux qui ont couvert/rejeté nos signes). La préposition bi après kafara oriente vers le sens de rejet actif plutôt que de simple couverture physique. Couvrir quelque chose physiquement n'utilise pas bi — on couvre quelque chose, pas « avec/par rapport à » quelque chose.",
        axe2_voisins: "Le verset 18 identifiait les vertueux (compagnons de la droite). Le verset 19 introduit le contraste : ceux qui rejettent les signes sont les compagnons de la gauche. Le rejet actif est un meilleur contraste avec l'adhésion (v17) que la simple dissimulation.",
        axe3_sourate: "La sourate oppose ceux qui agissent (v13-17) à ceux qui rejettent (v19). Le rejet est l'opposé de l'action — c'est le refus de franchir l'obstacle. La couverture est trop passive pour ce contraste.",
        axe4_coherence: "Le Coran utilise kafarū bi-āyātinā dans de nombreux versets (3:4, 3:21, 4:56, 7:36, etc.) toujours dans le sens de rejeter/nier les signes. La construction kafara bi est la formule standard du rejet dans le Coran.",
        axe5_frequence: "Le rejet actif des signes est l'opposé de la mission du khalifa. Le khalifa reconnaît les signes et agit en conséquence — celui qui les rejette trahit sa mission fondamentale."
      },
      "Rejet/Ingratitude": {
        status: "retenu",
        senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
        proof_ctx: "Le sens retenu est « Rejet/Ingratitude ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kafara suivi de bi signifie nier, rejeter, refuser de reconnaître. Le rejet est un acte extérieur et directionnel : il sort de celui qui rejette et atteint ce qui est rejeté. Les signes (āyāt) sont les preuves et les indications — les rejeter signifie refuser de les reconnaître comme vrais. L'accompli (kafarū = ils ont rejeté) marque un acte achevé : le rejet est consommé. Distinction avec « Couverture/Dissimulation » : la couverture est un acte de dissimulation passive, le rejet est un acte de refus actif. La préposition bi confirme le rejet actif (« rejeter par rapport à ») plutôt que la couverture physique. Distinction avec « Expiation/Réparation » : l'expiation est un acte positif de réparation, le rejet est un acte négatif de refus.",
        axe1_verset: "Le verset dit « ceux qui ont rejeté nos signes ». Le verbe kafarū est un accompli pluriel de la forme I, suivi de bi-āyātinā (par rapport à nos signes). Le pronom -nā (nos) est le possessif divin. Le champ lexical est : rejeter + signes + compagnon + gauche. Le rejet des signes est l'acte qui qualifie le deuxième groupe — les compagnons de la gauche.",
        axe2_voisins: "Le verset 18 identifiait les vertueux par leurs actes (libérer, nourrir, adhérer, recommander). Le verset 19 identifie les rejeteurs par leur refus : ils ont rejeté les signes. Le contraste est entre l'action et le refus d'agir — les uns franchissent l'obstacle, les autres le refusent.",
        axe3_sourate: "La sourate oppose deux réponses à la question « qu'est-ce que l'obstacle ? ». Les uns le franchissent et deviennent compagnons de la droite. Les autres rejettent les signes et deviennent compagnons de la gauche. Le rejet des signes est le refus de reconnaître l'obstacle moral.",
        axe4_coherence: "Le Coran utilise alladhīna kafarū bi-āyātinā comme formule récurrente pour identifier les rejeteurs (3:4, 4:56, 7:36, 8:52, 22:57, 40:4). Le rejet des signes de Dieu est systématiquement présenté comme le critère d'identification du groupe opposé aux vertueux.",
        axe5_frequence: "Le khalifa qui rejette les signes rejette sa propre mission. Les signes sont les indications qui guident vers la justice et la civilisation — les rejeter, c'est refuser de voir ce qui doit être fait pour empêcher la corruption."
      },
      "Expiation/Réparation": {
        status: "nul",
        senses: ["expier", "effacer les péchés"],
        proof_ctx: "L'expiation est un acte positif de réparation. Le verset décrit un acte négatif de rejet (kafarū bi = ont rejeté). Les deux sens sont opposés."
      }
    }
  }, 2);

  // ---- ayt (آية) — id=475 — "signes" ----
  // Forme: nom pluriel défini génitif āyātinā (nos signes)
  await upsertVWA(verse_id, 'ayt', 'signe', {
    sense_chosen: "signe",
    concept_chosen: "Signe/Preuve",
    concepts: {
      "Signe/Preuve": {
        status: "retenu",
        senses: ["signe", "miracle", "preuve"],
        proof_ctx: "Le sens retenu est « Signe/Preuve ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), āya signifie un signe, une indication, une preuve. Les āyāt (pluriel) sont les signes de Dieu — les indications visibles dans la création et dans le texte révélé qui pointent vers la vérité. Le pronom -nā (nos) attribue les signes à Dieu. Les signes sont permanents et extérieurs : ils sont là pour être vus et reconnus. Les rejeter (kafarū bi) signifie refuser de les voir ou de les reconnaître. Distinction avec « Révélation/Parole » : le verset est ici au sens large — les signes incluent les versets mais aussi les signes dans la création. Le contexte (la sourate parle de la création de l'être humain, v4, des dons divins, v8-10) oriente vers les signes au sens large.",
        axe1_verset: "Le verset dit « ceux qui ont rejeté nos signes ». Le mot āyātinā est au génitif défini après bi. Le champ lexical est : rejeter + signes + compagnon + gauche. Les signes sont l'objet du rejet — ce que les compagnons de la gauche refusent de reconnaître.",
        axe2_voisins: "Les versets 8-10 mentionnaient les dons divins (les yeux, la langue, les lèvres, les deux voies). Ces dons sont eux-mêmes des signes. Les signes rejetés au verset 19 incluent ces dons et ces indications que l'être humain ignore par arrogance.",
        axe3_sourate: "La sourate est elle-même un signe : elle décrit l'obstacle moral, définit la vertu, et classe l'humanité. Rejeter les signes, c'est rejeter tout ce programme moral que la sourate expose.",
        axe4_coherence: "Le Coran utilise āyāt dans les deux sens (signes dans la création et versets du texte) de manière complémentaire. En 41:53 « Nous leur montrerons Nos signes dans les horizons et en eux-mêmes ». Les signes sont partout — les rejeter est un aveuglement volontaire.",
        axe5_frequence: "Les signes sont les guides du khalifa. Le khalifa qui reconnaît les signes sait quoi faire : libérer, nourrir, patienter, avoir de la miséricorde. Le khalifa qui rejette les signes est perdu."
      },
      "Révélation/Parole": {
        status: "probable",
        senses: ["verset"],
        proof_ctx: "Le sens de « verset » est un sous-ensemble du sens de « signe ». Les versets du Coran sont des signes verbaux. Dans ce contexte, āyāt peut inclure les versets révélés. Mais le contexte de la sourate (qui parle de la création, des dons corporels, des actes de vertu) oriente vers les signes au sens large — pas seulement les versets mais aussi les signes dans la création et dans l'expérience humaine.",
        axe1_verset: "Le mot āyātinā (nos signes) avec le pronom divin peut désigner les versets révélés. Mais le contexte immédiat (la sourate elle-même) parle de signes variés : la création, les dons, l'obstacle moral.",
        axe2_voisins: "Les versets 8-10 décrivent des signes dans la création (yeux, langue, lèvres, deux voies). Les āyāt rejetées semblent inclure ces signes naturels, pas seulement les versets textuels.",
        axe3_sourate: "La sourate ne se limite pas au texte — elle parle de la nature humaine, de la création, de la vertu. Les signes rejetés sont plus larges que les seuls versets.",
        axe4_coherence: "Le Coran utilise āyāt tantôt pour les versets (2:252), tantôt pour les signes naturels (30:21-24), tantôt pour les deux ensemble. Le contexte détermine l'extension du sens.",
        axe5_frequence: "Les versets sont une catégorie de signes, mais la mission du khalifa s'appuie sur tous les signes — naturels et textuels."
      }
    }
  }, 3);

  // ---- shb (صحب) — id=476 — "compagnon" ----
  // Même analyse que v18
  await upsertVWA(verse_id, 'shb', 'compagnon', {
    sense_chosen: "compagnon",
    concept_chosen: "Compagnonnage/Association",
    concepts: {
      "Compagnonnage/Association": {
        status: "retenu",
        senses: ["accompagner", "compagnon", "associé", "ami"],
        proof_ctx: "Même analyse que le verset 18. Les aṣḥāb al-mashʾama sont les compagnons de la gauche — ceux qui partagent la condition du mauvais augure. Le compagnonnage est un état permanent.",
        axe1_verset: "Le mot aṣḥābu est au nominatif défini — prédicat de la phrase « hum aṣḥābu al-mashʾama » (eux sont les compagnons de la gauche). Le pronom hum (eux) renforce l'identification : ce sont bien eux, pas d'autres.",
        axe2_voisins: "Le verset 18 utilisait le même mot pour les compagnons de la droite. Le parallélisme aṣḥāb al-maymana / aṣḥāb al-mashʾama crée une symétrie parfaite entre les deux groupes.",
        axe3_sourate: "La sourate classe l'humanité en deux groupes de compagnons. Le mot ṣāḥib implique que le destin est partagé — on n'est pas seul dans son choix.",
        axe4_coherence: "Le Coran utilise aṣḥāb pour les deux groupes (aṣḥāb al-janna / aṣḥāb al-nār en 59:20, 7:44). Le compagnonnage est la marque de l'appartenance à un groupe.",
        axe5_frequence: "Le compagnonnage du mauvais augure est le résultat du rejet de la mission du khalifa."
      }
    }
  }, 5);

  // ---- shAm (شأم) — id=2633 — "gauche/mauvais augure" ----
  // Forme: nom défini génitif al-mashʾama (la gauche/le mauvais augure)
  await upsertVWA(verse_id, 'shAm', 'le côté gauche', {
    sense_chosen: "le côté gauche",
    concept_chosen: "Gauche/Direction gauche",
    concepts: {
      "Malchance/Mauvais augure": {
        status: "probable",
        senses: ["être de mauvais augure", "porter malheur à son peuple", "infortune et malchance", "trouver quelque chose de mauvais augure", "personne malchanceuse"],
        proof_ctx: "Le mauvais augure est une qualité de ce qui porte malheur. La mashʾama peut signifier le lieu du mauvais augure — les compagnons de la mashʾama seraient les compagnons de l'infortune. Les deux sens (gauche et mauvais augure) sont intimement liés dans la racine sh-ʾ-m : la gauche est le côté du mauvais augure. Distinction avec « Gauche/Direction gauche » : la gauche est une position spatiale, le mauvais augure est une qualité morale. La forme mashʾama (nom de lieu, forme maf'ala) oriente vers le lieu/côté, mais la charge sémantique de malheur reste présente.",
        axe1_verset: "Si mashʾama signifie « mauvais augure », la phrase serait « les compagnons de l'infortune » — cohérent avec la description de ceux qui rejettent les signes.",
        axe2_voisins: "Le contraste avec maymana (v18) fonctionne aussi bien comme droite/gauche que comme bénédiction/mauvais augure. Les deux lectures sont complémentaires.",
        axe3_sourate: "Le mauvais augure est la conséquence du rejet : ceux qui refusent de franchir l'obstacle de la vertu finissent dans l'infortune.",
        axe4_coherence: "En 56:9, les aṣḥāb al-mashʾama sont décrits avec la même formule : « mā aṣḥāb al-mashʾama » (que sont les compagnons de la mashʾama !). Les deux sens coexistent dans l'usage coranique.",
        axe5_frequence: "L'infortune et le mauvais augure sont le résultat du rejet de la mission du khalifa."
      },
      "Gauche/Direction gauche": {
        status: "retenu",
        senses: ["le côté gauche", "prendre la direction de la gauche", "la main gauche"],
        proof_ctx: "Le sens retenu est « Gauche/Direction gauche ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la mashʾama est le côté gauche — l'opposé de la maymana (le côté droit). La forme mashʾama est un nom de lieu (forme maf'ala) : le lieu de la gauche. La gauche est traditionnellement le côté du mauvais augure dans la culture arabe — aller à gauche, c'est aller vers ce qui est défavorable. La symétrie avec maymana (v18) confirme l'opposition spatiale : droite vs gauche. Les compagnons de la mashʾama sont ceux qui se trouvent du côté gauche — le côté défavorable. Le choix de « gauche » plutôt que « mauvais augure » est motivé par la forme grammaticale (nom de lieu) et par la symétrie avec maymana (droite). Distinction avec « Malchance/Mauvais augure » : le mauvais augure est une qualité abstraite, la gauche est une position concrète. Distinction avec « Syrie/Géographie » : le verset parle de classification morale, pas de géographie. Distinction avec « Nature/Caractère » : la mashʾama n'est pas un trait de caractère mais une position occupée.",
        axe1_verset: "Le verset dit « eux sont les compagnons de la gauche ». Le mot al-mashʾama est au génitif défini dans une idafa (aṣḥābu al-mashʾama). Le champ lexical est : rejeter + signes + compagnon + gauche. La gauche identifie le groupe des rejeteurs, en symétrie avec la droite (v18) qui identifie les vertueux.",
        axe2_voisins: "Le verset 18 disait « les compagnons de la maymana (droite) ». Le verset 19 oppose « les compagnons de la mashʾama (gauche) ». La symétrie est parfaite : même structure, même mot aṣḥāb, deux directions opposées. Le verset 20 ajoutera la conséquence pour les compagnons de la gauche.",
        axe3_sourate: "La sourate aboutit à cette classification binaire : droite (vertueux) et gauche (rejeteurs). La gauche est la destination de ceux qui ont refusé de franchir l'obstacle de la vertu (v11).",
        axe4_coherence: "Le Coran oppose systématiquement aṣḥāb al-yamīn (compagnons de la droite) et aṣḥāb al-shimāl (compagnons de la gauche) en 56:8-9, 56:27, 56:41. La sourate 90 utilise maymana/mashʾama au lieu de yamīn/shimāl — des synonymes qui portent la même opposition directionnelle avec une coloration supplémentaire (bon augure/mauvais augure).",
        axe5_frequence: "La gauche est la position de celui qui a trahi sa mission de khalifa. Être du côté gauche, c'est avoir choisi le mauvais côté — le côté de l'arrogance, du rejet et du refus de la vertu."
      },
      "Syrie/Géographie": {
        status: "nul",
        senses: ["la Syrie (al-Shâm)", "venir en Syrie", "syrien"],
        proof_ctx: "La Syrie est un lieu géographique. Le verset parle de classification morale, pas de géographie. Aucun rapport avec le contexte."
      },
      "Nature/Caractère": {
        status: "nul",
        senses: ["nature innée et disposition"],
        proof_ctx: "Le tempérament inné n'est pas un lieu ou une direction. La mashʾama est un nom de lieu/direction, pas un trait de caractère."
      }
    }
  }, 6);

  // --- Traduction v19 ---
  await upsertVA(verse_id, {
    translation_arab: "Et ceux qui ont rejeté nos signes, eux sont les compagnons de la gauche",
    full_translation: "Ceux qui ne croient pas en Nos versets sont les gens de la gauche",
    segments: [
      { fr: "Et", pos: "CONJ", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "ceux qui", pos: "REL", phon: "alladhīna", arabic: "ٱلَّذِينَ", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "ont rejeté", pos: "V.ACC", phon: "kafarū", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "rejeter", position: 3 },
      { fr: "nos signes", pos: "N.DEF.GEN", phon: "bi-āyātinā", arabic: "بِـَٔايَـٰتِنَا", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 4 },
      { fr: "eux", pos: "PRON", phon: "hum", arabic: "هُمْ", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
      { fr: "sont les compagnons", pos: "N.DEF.NOM", phon: "aṣḥābu", arabic: "أَصْحَـٰبُ", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 6 },
      { fr: "de la gauche", pos: "N.DEF.GEN", phon: "al-mashʾama", arabic: "ٱلْمَشْـَٔمَةِ", word_key: "shAm", is_particle: false, sense_retenu: "le côté gauche", position: 7 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est structuré en deux parties. La première : **wa-alladhīna kafarū bi-āyātinā** (et ceux qui ont rejeté nos signes) — le pronom relatif alladhīna (ceux qui) introduit la description du deuxième groupe. Le verbe **kafarū** est un accompli pluriel de k-f-r (forme I) : ils ont rejeté. La préposition **bi** indique l'objet du rejet : **āyātinā** (nos signes) — le pronom suffixe -nā (nos) est le possessif divin.

La deuxième partie : **hum aṣḥābu al-mashʾama** (eux sont les compagnons de la gauche). Le pronom **hum** (eux) est un sujet emphatique — il insiste sur l'identification : ce sont bien EUX, pas d'autres. La construction est une phrase nominale (pronom + prédicat) qui exprime une identité permanente. Le nom **mashʾama** est un nom de lieu (forme maf'ala de sh-ʾ-m) : le côté gauche, le lieu du mauvais augure. La structure est en miroir parfait avec le verset 18 : ulāʾika aṣḥābu al-maymana / hum aṣḥābu al-mashʾama.

D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-f-r signifie couvrir, cacher, puis par extension rejeter, nier. La préposition bi après kafara oriente vers le sens de rejet actif (rejeter par rapport à quelque chose) plutôt que de simple couverture physique.

§JUSTIFICATION§
**ont rejeté** — Le sens retenu est « rejeter ». Le mot « rejeté » est choisi car la construction kafara bi signifie refuser de reconnaître, nier activement. L'alternative « ont couvert » (sens premier) est trop physique pour ce contexte de signes divins. L'alternative « ont nié » est possible mais « rejeté » est plus fort — le rejet implique une connaissance préalable suivie d'un refus, pas simplement une ignorance.

**nos signes** — Le sens retenu est « signe ». Le mot « signes » traduit āyāt comme indications, preuves. L'alternative « versets » est un sous-ensemble du sens — les signes incluent les versets mais aussi les signes dans la création.

**de la gauche** — Le sens retenu est « le côté gauche ». Le mot « gauche » est choisi pour la symétrie avec « droite » (v18). L'alternative « du mauvais augure » est possible (les deux sens sont liés) mais « gauche » préserve l'opposition spatiale directe.

§CRITIQUE§
Hamidullah traduit « Ceux qui ne croient pas en Nos versets sont les gens de la gauche ». Le choix de « ne croient pas » pour kafarū est une interprétation qui adoucit le sens : kafara suivi de bi est un rejet actif, pas une simple absence de croyance. On peut ne pas croire par ignorance, mais kafara bi implique un refus volontaire. De plus, « versets » pour āyāt est restrictif — le texte dit « signes », qui inclut les versets mais aussi les signes dans la création. Enfin, « gens » au lieu de « compagnons » pour aṣḥāb perd la dimension de compagnonnage dans le malheur.`
  });

  console.log('  v19 DONE');
}

// ============================================================
// VERSET 90:20 — عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌۢ
// "Sur eux un feu scellé"
// ============================================================
async function verse90_20() {
  console.log('\n=== VERSET 90:20 — عَلَيْهِمْ نَارٌ مُّؤْصَدَةٌۢ ===');
  const verse_id = 6043;

  // ---- nar (نار) — id=1422 — "feu" ----
  // Forme: nom indéfini nominatif nārun (un feu)
  await upsertVWA(verse_id, 'nar', 'feu', {
    sense_chosen: "feu",
    concept_chosen: "Feu/Enfer",
    concepts: {
      "Feu/Enfer": {
        status: "retenu",
        senses: ["feu", "enfer", "flamme"],
        proof_ctx: "Le sens retenu est « Feu/Enfer ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), nār signifie le feu — l'élément qui brûle et consume. Le feu est directionnel : il sort de sa source et atteint ce qu'il touche, il se propage et détruit. Le mot est indéfini (nārun, sans al-) : c'est un feu, non spécifié, ce qui crée un effet de terreur par l'indétermination — quel feu ? on ne sait pas. Le feu est qualifié de muʾṣada (scellé, fermé hermétiquement) — un feu dont on ne peut pas s'échapper. La phrase nominale « ʿalayhim nārun » (sur eux un feu) exprime une réalité permanente et englobante. Il n'y a qu'un seul sens pour cette racine — tous tournent autour du feu.",
        axe1_verset: "Le verset dit « sur eux un feu scellé ». Le mot nārun est au nominatif indéfini — sujet de la phrase nominale (ou prédicat avancé, selon l'analyse). Le champ lexical est : sur + feu + scellé. Le feu est au-dessus d'eux (ʿalayhim = sur eux) et il est scellé (muʾṣada = fermé hermétiquement). L'image est celle d'un enfermement dans le feu — pas un feu qui passe, mais un feu qui entoure et dont on ne sort pas.",
        axe2_voisins: "Le verset 19 identifiait les compagnons de la gauche (ceux qui ont rejeté les signes). Le verset 20 décrit leur conséquence : un feu scellé sur eux. Le passage de l'identification (v19) à la conséquence (v20) clôt la sourate par l'image la plus forte.",
        axe3_sourate: "La sourate s'ouvre par un serment (v1-3), décrit la condition humaine (v4-10), appelle à la vertu (v11-17), classe l'humanité (v18-19) et conclut par la conséquence pour les rejeteurs (v20). Le feu scellé est la conclusion ultime — la conséquence du refus de franchir l'obstacle de la vertu.",
        axe4_coherence: "Le Coran décrit le feu (nār) dans de nombreux versets comme la conséquence du rejet. En 104:8-9, le feu « se referme sur eux, dans des colonnes étendues » — même image de feu qui enferme. En 2:24, « le feu dont le combustible est les gens et les pierres ». Le feu comme conséquence du rejet est un thème constant du Coran.",
        axe5_frequence: "Le feu est la conséquence ultime de l'échec du khalifa. Celui qui refuse de franchir l'obstacle de la vertu — libérer, nourrir, patienter, avoir de la miséricorde — se retrouve enfermé dans les conséquences de ses choix. Le feu scellé symbolise l'irréversibilité de ce choix."
      }
    }
  }, 2);

  // ---- wsd (وصد) — id=2422 — "scellé/fermé" ----
  // Forme: participe passif muʾṣada (scellée, fermée hermétiquement)
  await upsertVWA(verse_id, 'wsd', 'fermer hermétiquement', {
    sense_chosen: "fermer hermétiquement",
    concept_chosen: "Fermeture/Scellement",
    concepts: {
      "Fermeture/Scellement": {
        status: "retenu",
        senses: ["fermer hermétiquement", "sceller"],
        proof_ctx: "Le sens retenu est « Fermeture/Scellement ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), waṣada/awṣada signifie fermer hermétiquement, bloquer toute sortie. Le participe passif muʾṣada (une forme qui dit que l'action est subie — le feu est scellé, fermé par un agent) indique que le feu est fermé sur eux — ils ne peuvent pas en sortir. La fermeture est un acte extérieur et permanent : une fois scellé, rien ne s'échappe. Le participe passif est au féminin singulier pour s'accorder avec nār (feu, féminin en arabe). Test de compatibilité grammaticale : « subir la fermeture » — le feu subit la fermeture, il est fermé/scellé sur eux. Le participe passif est parfaitement compatible : le feu est l'objet de l'acte de sceller. Il n'y a que deux sens dans cette racine, qui convergent vers la même idée de fermeture hermétique.",
        axe1_verset: "Le verset dit « sur eux un feu scellé ». Le mot muʾṣada est un participe passif (une forme qui dit que le feu est l'objet de l'action de sceller — quelqu'un ou quelque chose a scellé ce feu). Le participe passif s'accorde avec nār (féminin). Le champ lexical est : feu + scellé + sur eux. Le scellement crée l'image d'un enfermement total : le feu est au-dessus, autour, et il est fermé — pas d'issue.",
        axe2_voisins: "Le verset 19 décrivait les compagnons de la gauche par leur acte (rejeter les signes). Le verset 20 décrit leur conséquence par une image concrète : un feu scellé. Le scellement est la touche finale qui rend l'image complète — ce n'est pas un feu passager mais un feu permanent et inévitable.",
        axe3_sourate: "La sourate se termine par cette image forte. Tout le programme de la sourate (franchir l'obstacle, libérer, nourrir, patienter, se recommander la miséricorde) est résumé dans le contraste : ceux qui le font sont compagnons de la droite (v18), ceux qui le refusent sont sous un feu scellé (v20). Le scellement donne à la conclusion un caractère définitif.",
        axe4_coherence: "Le Coran utilise muʾṣada uniquement ici (90:20) et en 104:8 (ʿalayhim muʾṣada). Les deux versets décrivent la même réalité : un feu fermé sur les rejeteurs. L'image du feu scellé est propre à ces deux passages et crée un écho entre les sourates 90 et 104.",
        axe5_frequence: "Le scellement est la finalité de celui qui refuse la mission du khalifa. La fermeture hermétique signifie qu'il n'y a plus de retour possible — le choix est fait et ses conséquences sont permanentes."
      }
    }
  }, 3);

  // --- Traduction v20 ---
  await upsertVA(verse_id, {
    translation_arab: "Sur eux un feu scellé",
    full_translation: "au-dessus d'eux, un Feu bien refermé",
    segments: [
      { fr: "Sur eux", pos: "PREP+PRON", phon: "ʿalayhim", arabic: "عَلَيْهِمْ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "un feu", pos: "N.INDEF.NOM", phon: "nār", arabic: "نَارٌ", word_key: "nar", is_particle: false, sense_retenu: "feu", position: 2 },
      { fr: "scellé", pos: "PART.PASS", phon: "muʾṣada", arabic: "مُّؤْصَدَةٌۢ", word_key: "wsd", is_particle: false, sense_retenu: "fermer hermétiquement", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale courte et percutante : **ʿalayhim** (sur eux) + **nārun** (un feu) + **muʾṣadatun** (scellé). La préposition **ʿalā** (sur) avec le pronom -him (eux) place le feu au-dessus des compagnons de la gauche. Le mot **nār** est indéfini (nārun, sans al-) — l'indéfini crée un effet de terreur par l'imprécision : un feu, on ne sait pas lequel ni de quelle nature.

Le participe passif **muʾṣada** est une forme qui dit que le feu subit une action — il est scellé, fermé hermétiquement par un agent non précisé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), awṣada signifie fermer hermétiquement une porte ou un passage — bloquer toute sortie. Le participe passif au féminin s'accorde avec nār (féminin en arabe).

La phrase nominale (sans verbe) exprime une réalité permanente et établie : ce n'est pas « un feu sera scellé sur eux » (futur ponctuel) mais « sur eux un feu scellé » (état permanent). L'image est celle d'un enfermement total dans le feu — pas de sortie, pas d'échappatoire.

§JUSTIFICATION§
**un feu** — Le sens retenu est « feu ». Le mot « feu » est du français courant pour nār. L'indéfini (un feu) est maintenu car le texte ne met pas al-. L'alternative « enfer » est une interprétation — le texte dit « feu » (nār), pas « enfer » (jahannam). L'indéfini laisse l'image ouverte.

**scellé** — Le sens retenu est « fermer hermétiquement ». Le mot « scellé » est choisi car il capture l'idée de fermeture définitive et hermétique. L'alternative « fermé » est trop banal — on ferme une porte mais on scelle un tombeau. « Scellé » porte la gravité de l'irréversibilité. L'alternative « refermé » (Hamidullah) implique que le feu était ouvert puis refermé — le texte ne dit pas cela, il dit simplement que le feu est dans un état de fermeture hermétique.

§CRITIQUE§
Hamidullah traduit « au-dessus d'eux, un Feu bien refermé ». Le mot « refermé » implique une action en deux temps (ouvert puis refermé) qui n'est pas dans le texte — muʾṣada est un participe passif qui décrit un état de fermeture, pas un processus de réouverture puis de refermeture. Le mot « bien » est un ajout d'intensité qui n'est pas dans le texte. Notre traduction « scellé » est plus précise : le feu est dans un état permanent de fermeture hermétique, sans idée de mouvement ou de processus.`
  });

  console.log('  v20 DONE');
}

// ============================================================
// MAIN
// ============================================================
(async () => {
  console.log('=== PIPELINE S90 PART 4 — VERSETS 16-20 ===');
  await verse90_16();
  await verse90_17();
  await verse90_18();
  await verse90_19();
  await verse90_20();
  console.log('\n=== PART 4 TERMINÉE ===');
})();
