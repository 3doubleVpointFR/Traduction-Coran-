// Pipeline Sourate 96 (Al-Alaq) — Partie 2: Versets 6-10
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

async function verse96_6() {
  console.log('\n=== VERSET 96:6 — كَلَّآ إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰٓ ===');
  const verse_id = 6112;

  // ---- ANS — "être humain" ----
  await upsertVWA(verse_id, 'ans', 'être humain', {
    sense_chosen: "être humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["être familier", "être sociable", "être humain"],
        proof_ctx: "Même concept. Troisième mention de al-insān dans la sourate. Après avoir été créé (v2) et enseigné (v5), l'être humain est maintenant décrit dans sa faiblesse : il transgresse. Le même être sociable par nature se retrouve en rupture avec l'ordre établi.",
        axe1_verset: "Le verset dit « Certes, l'être humain transgresse ». Le mot al-insān est le sujet de la transgression — c'est celui qui a été créé d'une chose accrochée et enseigné par le calame qui maintenant dépasse les limites. Le contraste entre le destinataire du savoir (v5) et le transgresseur (v6) est saisissant.",
        axe2_voisins: "Le verset 5 disait « il a enseigné à l'être humain ». Le verset 6 dit « l'être humain transgresse ». Le passage brutal du savoir à la transgression montre la fragilité humaine. Le verset 7 donne la cause : l'autosuffisance.",
        axe3_sourate: "L'être humain est le pivot de la sourate. Les versets 1-5 le montrent en réception du savoir divin. Les versets 6-7 le montrent en transgression. La sourate questionne : pourquoi celui qui a tout reçu se rebelle-t-il ?",
        axe4_coherence: "Le Coran décrit régulièrement l'être humain comme ingrat : « L'être humain est certes ingrat envers son seigneur » (100:6). La transgression après le don est un motif récurrent.",
        axe5_frequence: "Le khalifa qui transgresse trahit sa mission. La sourate montre que la transgression vient de l'oubli de sa propre dépendance — l'être humain créé d'une chose accrochée se croit autosuffisant."
      }
    }
  }, 3);

  // ---- TGY (طغي) — id=2598 — "transgresser" ----
  // Forme: verbe inaccompli ya-ṭghā avec lām d'insistance (la-yaṭghā)
  await upsertVWA(verse_id, 'tgy', 'transgresser', {
    sense_chosen: "transgresser",
    concept_chosen: "Transgression/Excès",
    concepts: {
      "Transgression/Excès": {
        status: "retenu",
        senses: ["transgresser", "dépasser les limites", "outrepasser", "excès", "tyrannie"],
        proof_ctx: "Le sens retenu est « Transgression/Excès ». Le Lane's donne : dépasser les limites fixées, déborder comme l'eau qui sort de son lit. Le ṭughyān est un débordement extérieur qui affecte tout autour. La forme est un inaccompli (yaṭghā) avec lām d'insistance — « il transgresse assurément ». L'inaccompli exprime ici une action habituelle, récurrente, pas ponctuelle. L'être humain transgresse par nature dès que les conditions sont réunies (verset 7). Distinction avec « Inondation/Débordement » : l'inondation est le sens physique de la racine — l'eau qui déborde. Ici c'est métaphorique : l'être humain déborde de ses limites morales. Le concept est le même (transgression/excès) mais appliqué au comportement humain, pas à l'eau.",
        axe1_verset: "Le verset dit « l'être humain transgresse assurément ». Le verbe yaṭghā est un inaccompli (une forme qui exprime une action en cours ou habituelle) renforcé par la particule inna (certes) et le lām d'insistance (la-). La phrase est nominale renforcée : « certes l'être humain transgresse assurément ». Le double renforcement (inna + la-) souligne la certitude du constat. Le champ lexical est : être humain + transgression — un diagnostic de la condition humaine.",
        axe2_voisins: "Le verset 7 donne la cause de la transgression : « il se voit autosuffisant ». Le verset 8 donne le rappel : « c'est vers ton seigneur qu'est le retour ». La progression transgression → cause → rappel forme un argument complet. Le verset 6 pose le constat, le verset 7 l'explique, le verset 8 le corrige.",
        axe3_sourate: "La transgression est le thème central des versets 6-19. Elle s'oppose au savoir des versets 1-5. La sourate pose la question fondamentale : pourquoi l'être humain qui a reçu le savoir transgresse-t-il ? La réponse est au verset 7 : parce qu'il se croit autosuffisant.",
        axe4_coherence: "Le Coran utilise la racine ṭ-gh-y pour décrire Pharaon (ṭāghiya, 79:17), l'eau du déluge qui transgresse ses limites (69:11). La transgression est toujours un dépassement des limites qui entraîne la destruction. Le mot ṭāghūt (faux dieu) vient de la même racine — celui qui transgresse au point de se prendre pour un dieu.",
        axe5_frequence: "La transgression est l'antithèse de la mission du khalifa. Le khalifa est chargé d'empêcher la corruption — la transgression est la corruption même. Quand l'être humain transgresse, il abandonne sa mission de justice et devient la source même du mal qu'il devait combattre."
      },
      "Inondation/Débordement": {
        status: "nul",
        senses: ["déborder", "inonder"],
        proof_ctx: "Le sens physique d'inondation est la racine métaphorique de la transgression. Dans le contexte du verset, l'être humain ne déborde pas physiquement — il dépasse les limites morales. Le sens physique éclaire la métaphore mais n'est pas le sens du verset."
      }
    }
  }, 4);

  // --- Traduction verset 6 ---
  await sb.from('verse_analyses').update({
    translation_arab: "كَلَّآ إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰٓ",
    full_translation: "Prenez garde! Vraiment l'homme devient rebelle",
    segments: [
      { fr: "Mais non !", pos: "particule", phon: "kallā", arabic: "كَلَّآ", is_particle: true, position: 1 },
      { fr: "certes", pos: "particule", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 2 },
      { fr: "l'être humain", pos: "nom", phon: "al-insāna", arabic: "ٱلْإِنسَـٰنَ", word_key: "ans", is_particle: false, sense_retenu: "être humain", position: 3 },
      { fr: "transgresse assurément", pos: "verbe", phon: "la-yaṭghā", arabic: "لَيَطْغَىٰٓ", word_key: "tgy", is_particle: false, sense_retenu: "transgresser", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par kallā — une particule de dissuasion et de rupture qui marque un tournant dans le discours. Elle interrompt ce qui précède pour introduire un avertissement. Puis inna (certes) ouvre une phrase nominale renforcée. Le sujet est al-insāna (l'être humain) à l'accusatif (après inna). Le prédicat est la-yaṭghā — un verbe inaccompli (une forme qui exprime une action en cours ou habituelle) précédé du lām d'insistance. Le lām combiné avec inna crée un double renforcement : « certes... assurément ». Le verbe yaṭghā (il transgresse) à l'inaccompli exprime que cette transgression est une tendance habituelle de l'être humain, pas un événement ponctuel.

§JUSTIFICATION§
**transgresse** — Le sens retenu est « transgresser ». Le mot « transgresse » est choisi car il traduit exactement le ṭughyān : dépasser les limites fixées. L'alternative « se rebelle » (Hamidullah) est écartée car la rébellion implique un acte politique ciblé, alors que la transgression est un débordement général des limites. L'alternative « tyrannise » est écartée car elle implique le pouvoir sur les autres, alors que le verset 7 montre que la transgression vient de l'autosuffisance personnelle.

§CRITIQUE§
Les traductions courantes donnent « devient rebelle » (Hamidullah) ou « se montre rebelle ». Le mot « rebelle » vient de l'interprétation historique qui identifie le verset à Abū Jahl se rebellant contre le Prophète. Mais le texte dit al-insān (l'être humain en général) — pas un individu précis. Le ṭughyān est un dépassement des limites, pas une rébellion politique. Traduire par « transgresse » garde l'universalité du constat.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:6 — TERMINÉ');
  console.log('  ans (أ ن س) → concept "Familiarité/Sociabilité" → mot français "être humain"');
  console.log('  tgy (ط غ ي) → concept "Transgression/Excès" → mot français "transgresser"');
  console.log('  Traduction : "Mais non ! Certes l\'être humain transgresse assurément"');
}

async function verse96_7() {
  console.log('\n=== VERSET 96:7 — أَن رَّءَاهُ ٱسْتَغْنَىٰٓ ===');
  const verse_id = 6113;

  // ---- RAY (رأي) — id=552 — "voir" ----
  // Forme: verbe accompli ra'āhu — il l'a vu / il se voit
  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Le sens retenu est « Vision/Perception ». Le Lane's donne : voir par les yeux ou par l'esprit. Le verbe ra'ā est un accompli avec le pronom -hu (le/se) — « il se voit » ou « il le voit ». Dans le contexte, le pronom est réflexif : l'être humain se voit lui-même autosuffisant. C'est une auto-perception, pas une vision externe. Distinction avec « Jugement/Avis » : l'avis est une opinion après réflexion. Ici, il s'agit d'une perception immédiate de soi — l'être humain se perçoit riche, il ne réfléchit pas. Distinction avec « Apparition » : apparaître est devenir visible — le verset parle de voir, pas d'apparaître.",
        axe1_verset: "Le verset dit « dès qu'il se voit autosuffisant ». Le verbe ra'āhu est un accompli (action achevée) avec le pronom objet -hu. La particule an (que/dès que) fait de ce verset la cause de la transgression du verset 6. Le champ lexical se voir + autosuffisant forme la cause de la transgression : c'est l'auto-perception faussée qui mène au débordement.",
        axe2_voisins: "Le verset 6 posait le constat (la transgression). Le verset 7 donne la cause (l'autosuffisance perçue). Le verset 8 apporte le correctif (le retour vers le seigneur). La perception faussée de soi est le maillon entre le don divin (v1-5) et la transgression (v6).",
        axe3_sourate: "La sourate oppose la vision juste (le seigneur voit, verset 14) à la vision faussée (l'être humain se voit autosuffisant, verset 7). L'aveuglement de l'être humain sur sa propre condition est le ressort de la transgression.",
        axe4_coherence: "Le Coran utilise ra'ā dans des contextes d'auto-perception erronée : « Quiconque pense (ra'ā) que Dieu ne l'aidera pas... » (22:15). La vision faussée de soi est un thème coranique récurrent.",
        axe5_frequence: "Le khalifa qui se voit autosuffisant abandonne sa mission. L'autosuffisance est le poison de la mission de justice — celui qui croit ne pas avoir besoin du seigneur ne reconnaît plus de limites à son pouvoir."
      },
      "Jugement/Avis": {
        status: "nul",
        senses: ["opinion", "avis"],
        proof_ctx: "L'avis est une opinion réfléchie. Le verset décrit une perception immédiate et spontanée, pas une réflexion délibérée."
      },
      "Apparition": {
        status: "nul",
        senses: ["apparaître"],
        proof_ctx: "Le verset parle de voir, pas d'apparaître. Le sujet est actif (il voit), pas passif (il apparaît)."
      }
    }
  }, 2);

  // ---- GNY (غني) — id=2584 — "autosuffisant" ----
  // Forme: verbe accompli forme X (istaghná) — se considérer riche/autosuffisant
  await upsertVWA(verse_id, 'gny', 'autosuffisant', {
    sense_chosen: "autosuffisant",
    concept_chosen: "Richesse/Autosuffisance",
    concepts: {
      "Richesse/Autosuffisance": {
        status: "retenu",
        senses: ["être riche", "se passer de", "être autosuffisant", "enrichir"],
        proof_ctx: "Le sens retenu est « Richesse/Autosuffisance ». Le Lane's donne : être riche, se passer de, ne manquer de rien. La forme X (istaghná) ajoute la dimension de recherche ou de prétention : « se considérer comme riche/autosuffisant ». Dans le verset, l'être humain transgresse parce qu'il se considère autosuffisant — il croit ne pas avoir besoin du seigneur. L'autosuffisance est un état intérieur de plénitude qui coupe celui qui le vit de toute dépendance. Distinction avec « Chant » : le chant est un sens dérivé de la richesse intérieure qui n'a aucun rapport avec le contexte de transgression.",
        axe1_verset: "Le verset dit « dès qu'il se voit autosuffisant ». Le verbe istaghná est une forme X (une forme qui exprime la recherche ou la prétention — ici « se considérer riche »). L'accompli marque un état acquis : dès que l'être humain atteint l'autosuffisance, la transgression suit. Le champ lexical se voir + autosuffisant est le diagnostic psychologique de la transgression : c'est la croyance de ne pas avoir besoin qui mène au dépassement des limites.",
        axe2_voisins: "Le verset 6 disait « l'être humain transgresse ». Le verset 7 explique pourquoi : parce qu'il se croit autosuffisant. Le verset 8 rappelle que le retour est vers le seigneur — l'autosuffisance est une illusion car personne n'échappe au retour. La progression transgression → autosuffisance → retour forme un argument complet.",
        axe3_sourate: "L'autosuffisance est l'antithèse du message des versets 1-5. Le seigneur crée (l'être humain dépend de lui pour exister), enseigne (l'être humain dépend de lui pour savoir), et est le plus généreux (l'être humain dépend de lui pour recevoir). L'autosuffisance nie ces trois dépendances. C'est l'oubli de tout ce qui précède.",
        axe4_coherence: "Le Coran oppose systématiquement la richesse à la gratitude : « Et quand il lui accorde un bienfait, il dit : je n'ai eu cela que grâce à un savoir que je possède » (39:49). L'autosuffisance est l'oubli de la source des bienfaits. Le Coran utilise ghaniyy comme attribut divin (le riche absolu) — seul Dieu est véritablement autosuffisant.",
        axe5_frequence: "L'autosuffisance est l'ennemi de la mission du khalifa. Celui qui se croit autosuffisant ne reconnaît pas de seigneur au-dessus de lui, pas de limites à son pouvoir, pas de compte à rendre. Il devient la source de la corruption qu'il devait combattre. La sourate montre que la richesse matérielle sans savoir mène à la transgression."
      },
      "Sens isolé/Chant": {
        status: "nul",
        senses: ["chant"],
        proof_ctx: "Le chant comme richesse de l'âme n'a aucun rapport avec le contexte de transgression par l'autosuffisance."
      }
    }
  }, 3);

  // --- Traduction verset 7 ---
  await sb.from('verse_analyses').update({
    translation_arab: "أَن رَّءَاهُ ٱسْتَغْنَىٰٓ",
    full_translation: "dès qu'il estime qu'il peut se suffire à lui-même",
    segments: [
      { fr: "dès que", pos: "particule", phon: "an", arabic: "أَن", is_particle: true, position: 1 },
      { fr: "il se voit", pos: "verbe", phon: "ra'āhu", arabic: "رَّءَاهُ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 2 },
      { fr: "autosuffisant", pos: "verbe", phon: "istaghná", arabic: "ٱسْتَغْنَىٰٓ", word_key: "gny", is_particle: false, sense_retenu: "être riche", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
La particule an (dès que / parce que) fait de ce verset la cause de la transgression du verset 6. Le verbe ra'āhu est un accompli de la racine r-'-y (voir) avec le pronom objet -hu. Dans ce contexte, le pronom est réflexif : il se voit lui-même. Le verbe istaghná est une forme X (une forme de recherche ou de prétention en arabe — ista-) de la racine gh-n-y (être riche). La forme X signifie « se considérer comme riche, se croire autosuffisant ». L'accompli marque un état acquis : dès que l'être humain se perçoit comme n'ayant besoin de rien, il transgresse.

§JUSTIFICATION§
**se voit** — Le sens retenu est « voir ». Le mot « se voit » traduit ra'āhu avec le sens réflexif. L'alternative « se considère » est acceptable mais plus intellectuelle — le verset décrit une perception immédiate, pas une réflexion.

**autosuffisant** — Le sens retenu est « être riche/autosuffisant ». Le mot « autosuffisant » est choisi car la forme X (istaghná) ajoute la dimension de prétention — il ne s'agit pas d'être objectivement riche mais de se croire autosuffisant. L'alternative « riche » est trop matérielle — l'autosuffisance peut être financière, intellectuelle ou existentielle. L'alternative « se passer de » est un verbe, pas un état.

§CRITIQUE§
Les traductions courantes donnent « dès qu'il estime qu'il peut se suffire à lui-même » (Hamidullah). Cette traduction est assez fidèle mais longue. Notre « dès qu'il se voit autosuffisant » est plus concis et fidèle à la structure arabe (deux verbes courts). Hamidullah ajoute entre parenthèses « à cause de sa richesse » — cette précision n'est pas dans le texte et réduit l'autosuffisance à la seule dimension matérielle.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:7 — TERMINÉ');
  console.log('  ray (ر أ ي) → concept "Vision/Perception" → mot français "voir"');
  console.log('  gny (غ ن ي) → concept "Richesse/Autosuffisance" → mot français "autosuffisant"');
  console.log('  Traduction : "Dès qu\'il se voit autosuffisant"');
}

async function verse96_8() {
  console.log('\n=== VERSET 96:8 — إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ ===');
  const verse_id = 6114;

  // ---- RBB — "seigneur" ----
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maître", "celui qui élève"],
        proof_ctx: "Même concept qu'aux versets 1 et 3. Troisième mention de « ton seigneur » — cette fois comme destination du retour. Le seigneur est le point de départ (il crée, v1), la motivation (il est généreux, v3) et le point d'arrivée (le retour, v8). La seigneurie encadre toute la première partie de la sourate.",
        axe1_verset: "Le verset dit « certes, c'est vers ton seigneur qu'est le retour ». Le mot rabb est en position de complément de direction avec ilā (vers). Le pronom possessif -ka maintient la relation personnelle. Le seigneur est le but ultime du voyage humain.",
        axe2_voisins: "Après la transgression (v6) causée par l'autosuffisance (v7), le verset 8 rappelle que l'autosuffisance est une illusion : le retour est vers le seigneur. Personne n'échappe à cette destination. Le rappel rétablit la hiérarchie : l'être humain dépend du seigneur, quoi qu'il en pense.",
        axe3_sourate: "Le verset 8 clôt la section médiane (v6-8) et prépare la section finale (v9-19). Le retour vers le seigneur est le pivot entre le constat de transgression et les conséquences qui suivent.",
        axe4_coherence: "Le Coran répète le thème du retour vers Dieu : « Vers Lui est votre retour à tous » (10:4). Le retour est un thème central qui fonde la responsabilité — si on revient vers le seigneur, on rend des comptes.",
        axe5_frequence: "Le retour vers le seigneur fonde la responsabilité du khalifa. Celui qui sait qu'il reviendra vers son seigneur agit avec conscience — celui qui l'oublie transgresse."
      }
    }
  }, 3);

  // ---- RJE (رجع) — id=336 — "retour" ----
  // Forme: nom al-ruj'ā — le retour
  await upsertVWA(verse_id, 'rje', 'retour', {
    sense_chosen: "retour",
    concept_chosen: "Retour/Réversion",
    concepts: {
      "Retour/Réversion": {
        status: "retenu",
        senses: ["retourner", "revenir", "réverter", "faire revenir", "renvoyer"],
        proof_ctx: "Le sens retenu est « Retour/Réversion ». Le Lane's donne : revenir à un lieu ou un état antérieur. Le retour est un mouvement directionnel vers l'origine. Le mot al-ruj'ā est un nom d'action féminin avec article défini — le retour par excellence, le retour absolu et inévitable. Le texte ne précise pas de quoi on revient — c'est le retour existentiel, la fin de la vie terrestre. Distinction avec « Pluie/Renouvellement » : la pluie est un retour physique de l'eau, pas pertinent ici. Distinction avec « Répétition » : la répétition est un retour de parole, le verset parle d'un retour existentiel.",
        axe1_verset: "Le verset dit « certes, c'est vers ton seigneur qu'est le retour ». Le mot al-ruj'ā est le sujet de la phrase nominale renforcée par inna. La direction ilā rabbika (vers ton seigneur) est mise en avant (taqdīm — une construction arabe qui met en avant le complément pour l'emphase). Le retour est vers le seigneur, pas ailleurs. Cette mise en avant souligne que la destination est le seigneur lui-même.",
        axe2_voisins: "Après la transgression (v6) et l'autosuffisance (v7), le retour remet les choses en perspective. L'être humain qui se croit autosuffisant oublie qu'il retournera vers celui qui l'a créé. Le retour est l'argument ultime contre l'autosuffisance : tu as beau te croire riche, tu retourneras vers ton seigneur.",
        axe3_sourate: "Le retour est le point final de l'arc narratif : création (v1-2) → enseignement (v3-5) → transgression (v6-7) → retour (v8). La sourate rappelle que le voyage humain a un début (la création) et une fin (le retour). Entre les deux, l'être humain choisit le savoir ou la transgression.",
        axe4_coherence: "Le mot ruj'ā n'apparaît qu'ici et en 79:44 dans le Coran. En 79:44, le contexte est similaire : « À ton seigneur est le terme final ». La rareté du mot souligne la solennité du retour. Le Coran utilise d'autres mots pour le retour (ma'ād, marji') mais ruj'ā a une connotation d'inévitabilité.",
        axe5_frequence: "La conscience du retour est le moteur de la mission du khalifa. Celui qui sait qu'il retournera vers son seigneur agit avec responsabilité — il ne transgresse pas parce qu'il sait qu'il rendra des comptes. Le retour est le fondement éthique de la mission de justice."
      },
      "Pluie/Renouvellement": {
        status: "nul",
        senses: ["pluie"],
        proof_ctx: "La pluie est un retour physique de l'eau qui n'a aucun rapport avec le retour existentiel vers le seigneur."
      },
      "Répétition": {
        status: "nul",
        senses: ["répéter", "réponse"],
        proof_ctx: "La répétition est un retour de parole qui n'a aucun rapport avec le contexte du retour vers le seigneur."
      }
    }
  }, 4);

  // --- Traduction verset 8 ---
  await sb.from('verse_analyses').update({
    translation_arab: "إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ",
    full_translation: "Mais, c'est vers ton Seigneur qu'est le retour",
    segments: [
      { fr: "Certes", pos: "particule", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 1 },
      { fr: "vers", pos: "préposition", phon: "ilā", arabic: "إِلَىٰ", is_particle: true, position: 2 },
      { fr: "ton seigneur", pos: "nom", phon: "rabbika", arabic: "رَبِّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "est le retour", pos: "nom", phon: "ar-ruj'ā", arabic: "ٱلرُّجْعَىٰٓ", word_key: "rje", is_particle: false, sense_retenu: "retour", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
La particule inna (certes) ouvre une phrase nominale renforcée. Le complément de direction ilā rabbika (vers ton seigneur) est placé en tête de phrase avant le sujet al-ruj'ā (le retour) — c'est un taqdīm (une mise en avant en arabe qui insiste sur l'élément déplacé). En arabe, quand on met le complément avant le sujet, c'est pour dire « c'est vers ton seigneur — et pas ailleurs — qu'est le retour ». Le mot al-ruj'ā est un nom d'action féminin de la racine r-j-' (retourner), avec l'article al- qui le rend défini : le retour, le seul, l'inévitable.

§JUSTIFICATION§
**seigneur** — Même mot qu'aux versets précédents.

**retour** — Le sens retenu est « retour ». Le mot « retour » traduit directement al-ruj'ā. L'alternative « aboutissement » est écartée car elle perd la dimension de mouvement — le retour implique qu'on revient vers un point de départ. L'alternative « fin » est trop final — le retour n'est pas nécessairement une fin mais un mouvement vers l'origine.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « c'est vers ton Seigneur qu'est le retour » — fidèle à la grammaire et au sens. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:8 — TERMINÉ');
  console.log('  rbb (ر ب ب) → concept "Seigneurie/Autorité bienveillante" → mot français "seigneur"');
  console.log('  rje (ر ج ع) → concept "Retour/Réversion" → mot français "retour"');
  console.log('  Traduction : "Certes, c\'est vers ton seigneur qu\'est le retour"');
}

async function verse96_9() {
  console.log('\n=== VERSET 96:9 — أَرَءَيْتَ ٱلَّذِى يَنْهَىٰ ===');
  const verse_id = 6115;

  // ---- RAY — "as-tu vu" ----
  // Forme: accompli 2ème pers. avec hamza interrogative (a-ra'ayta)
  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Même concept qu'au verset 7. Ici la forme est a-ra'ayta — une question rhétorique à la deuxième personne : « as-tu vu ? ». Le hamza interrogatif (a-) transforme le verbe en question. Le verset interpelle l'interlocuteur pour attirer son attention sur un comportement scandaleux : celui qui interdit la prière. Cette question sera répétée aux versets 11 et 13.",
        axe1_verset: "Le verset dit « as-tu vu celui qui interdit ? ». La question rhétorique engage l'interlocuteur. Le verbe ra'ayta est un accompli (as-tu vu) — l'action d'observer est achevée, le scandale est déjà en cours. Le complément alladhī yanhā (celui qui interdit) est le sujet de l'observation.",
        axe2_voisins: "Le verset 10 complète : « un serviteur quand il prie ». Les versets 9-10 forment une unité : « as-tu vu celui qui interdit un serviteur quand il prie ? ». Les versets 11-14 développent trois scénarios rhétoriques.",
        axe3_sourate: "La question rhétorique marque le passage de la section générale (v6-8, l'être humain en général) à la section spécifique (v9-16, un cas concret de transgression). L'universel devient particulier.",
        axe4_coherence: "Le Coran utilise a-ra'ayta dans de nombreuses sourates pour interpeller et dénoncer (107:1, 96:9, etc.). C'est une formule rhétorique récurrente.",
        axe5_frequence: "La question rhétorique engage la responsabilité de l'interlocuteur : voir le mal sans réagir est une forme de complicité. Le khalifa doit voir et agir."
      }
    }
  }, 1);

  // ---- NHY (نهي) — id=979 — "interdire" ----
  // Forme: verbe inaccompli yanhā — il interdit
  await upsertVWA(verse_id, 'nhy', 'interdire', {
    sense_chosen: "interdire",
    concept_chosen: "Interdiction/Empêchement",
    concepts: {
      "Interdiction/Empêchement": {
        status: "retenu",
        senses: ["interdire", "empêcher", "défendre"],
        proof_ctx: "Le sens retenu est « Interdiction/Empêchement ». Le Lane's donne : poser un interdit sur une action, empêcher quelqu'un de faire quelque chose. L'interdiction sort de celui qui interdit et atteint celui qui est interdit — c'est directionnel et extérieur. La forme est un inaccompli (yanhā) qui exprime une action habituelle : il interdit régulièrement, pas une seule fois. Distinction avec « Intelligence/Discernement » : l'intelligence (nuhā) est un sens dérivé — la faculté qui « interdit » à l'homme de faire des bêtises. Mais le verset parle d'un être humain qui interdit à un autre de prier, pas d'une faculté intérieure.",
        axe1_verset: "Le verset dit « celui qui interdit ». Le verbe yanhā est un inaccompli (une action en cours ou habituelle) — l'interdiction est récurrente. Le sujet est alladhī (celui qui) — un anonyme identifié par son acte. Le verset 10 précisera l'objet de l'interdiction : un serviteur qui prie. Le champ lexical est l'abus de pouvoir : quelqu'un use de son autorité pour empêcher un acte de dévotion.",
        axe2_voisins: "Le verset 10 complète : « un serviteur quand il prie ». L'interdiction porte sur la prière — c'est un abus d'autorité qui touche la relation entre l'être humain et son seigneur. Les versets 11-13 posent trois questions rhétoriques sur ce personnage.",
        axe3_sourate: "L'interdiction de la prière est l'illustration concrète de la transgression décrite au verset 6. L'être humain qui se croit autosuffisant (v7) va jusqu'à interdire à un autre de prier. C'est le sommet de la transgression : non seulement il ne reconnaît pas le seigneur, mais il empêche les autres de le faire.",
        axe4_coherence: "Le Coran condamne ceux qui empêchent la prière et l'accès aux lieux de culte : « Qui est plus injuste que celui qui empêche l'accès aux mosquées de Dieu ? » (2:114). L'interdiction de la prière est un acte majeur de transgression dans le Coran.",
        axe5_frequence: "Empêcher quelqu'un de prier est l'antithèse de la mission du khalifa. Le khalifa doit garantir la liberté de dévotion, pas l'interdire. Celui qui interdit la prière détruit le lien entre l'être humain et son seigneur — il s'oppose à l'ordre même de la création."
      },
      "Intelligence/Discernement": {
        status: "nul",
        senses: ["intelligence (nuha)"],
        proof_ctx: "L'intelligence est un dérivé lointain de la racine. Le verset parle d'un acte concret d'interdiction entre deux personnes, pas d'une faculté intérieure."
      }
    }
  }, 3);

  // --- Traduction verset 9 ---
  await sb.from('verse_analyses').update({
    translation_arab: "أَرَءَيْتَ ٱلَّذِى يَنْهَىٰ",
    full_translation: "As-tu vu celui qui interdit",
    segments: [
      { fr: "As-tu vu", pos: "verbe", phon: "a-ra'ayta", arabic: "أَرَءَيْتَ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 1 },
      { fr: "celui qui", pos: "pronom relatif", phon: "alladhī", arabic: "ٱلَّذِى", is_particle: true, position: 2 },
      { fr: "interdit", pos: "verbe", phon: "yanhā", arabic: "يَنْهَىٰ", word_key: "nhy", is_particle: false, sense_retenu: "interdire", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par a-ra'ayta — un verbe accompli à la deuxième personne (tu as vu) précédé du hamza interrogatif (a-), ce qui en fait une question rhétorique : « as-tu vu ? ». Cette formule interpelle directement l'interlocuteur pour attirer son attention sur un scandale. Le pronom relatif alladhī (celui qui) introduit le personnage par son acte, pas par son nom. Le verbe yanhā est un inaccompli (une forme qui exprime une action en cours ou habituelle) de la racine n-h-y (interdire). L'inaccompli indique que l'interdiction est récurrente — ce n'est pas un incident isolé.

§JUSTIFICATION§
**as-tu vu** — Le sens retenu est « voir ». La formule « as-tu vu » traduit la question rhétorique arabe. L'alternative « vois-tu » (Hamidullah, verset 11) est acceptable mais « as-tu vu » est plus fidèle à l'accompli arabe.

**interdit** — Le sens retenu est « interdire ». Le mot « interdit » traduit directement yanhā. L'alternative « empêche » est acceptable mais moins fort — interdire implique l'usage de l'autorité, empêcher implique la force physique.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:9 — TERMINÉ');
  console.log('  ray (ر أ ي) → concept "Vision/Perception" → mot français "voir"');
  console.log('  nhy (ن ه ي) → concept "Interdiction/Empêchement" → mot français "interdire"');
  console.log('  Traduction : "As-tu vu celui qui interdit"');
}

async function verse96_10() {
  console.log('\n=== VERSET 96:10 — عَبْدًا إِذَا صَلَّىٰٓ ===');
  const verse_id = 6116;

  // ---- EBD (عبد) — id=259 — "serviteur" ----
  // Forme: nom indéfini accusatif 'abdan
  await upsertVWA(verse_id, 'ebd', 'serviteur', {
    sense_chosen: "serviteur",
    concept_chosen: "Servitude/Esclavage",
    concepts: {
      "Adoration/Dévotion": {
        status: "probable",
        senses: ["adorer", "servir", "vouer un culte", "se dévouer"],
        proof_ctx: "L'adoration est un acte de dévotion envers Dieu. Le verset utilise le nom 'abd (serviteur), pas le verbe 'abada (adorer). Le nom désigne la personne dans sa relation de service, pas l'acte d'adoration en soi. L'adoration est ce que fait le serviteur — mais le verset identifie la personne, pas son acte. La prière (ṣallā) au même verset couvre déjà l'acte de dévotion.",
        axe1_verset: "Le verset dit « un serviteur quand il prie ». Le mot 'abdan est un nom indéfini à l'accusatif — un serviteur quelconque, pas un serviteur particulier. Le champ lexical serviteur + prier décrit quelqu'un dans sa double relation : serviteur (relation au seigneur) et priant (acte de dévotion). L'adoration est implicite dans la prière.",
        axe2_voisins: "Le verset 9 posait la question : qui interdit ? Le verset 10 complète : un serviteur qui prie. Le personnage de l'interdicteur empêche la relation serviteur-seigneur. Les versets suivants questionnent la légitimité de cette interdiction.",
        axe3_sourate: "La prière et la servitude sont les actes positifs de la sourate, en opposition à la transgression. Le serviteur qui prie est l'antithèse du transgresseur autosuffisant.",
        axe4_coherence: "Le Coran utilise 'abd pour désigner les croyants dans leur relation à Dieu : « Les serviteurs du Tout Miséricordieux » (25:63). Le mot implique la reconnaissance de la seigneurie.",
        axe5_frequence: "Le serviteur qui prie accomplit sa mission de khalifa : il reconnaît son seigneur et maintient le lien de dépendance qui fonde la justice."
      },
      "Servitude/Esclavage": {
        status: "retenu",
        senses: ["serviteur", "esclave", "être humain", "asservir", "aplanir un chemin"],
        proof_ctx: "Le sens retenu est « Servitude/Esclavage ». Le Lane's donne : le serviteur est celui dont la volonté est subordonnée à celle du maître. C'est un état permanent de soumission volontaire. Le mot 'abd dans le Coran désigne celui qui reconnaît la seigneurie de Dieu — le serviteur est l'opposé de l'autosuffisant. Le verset dit 'abdan (un serviteur) — nom indéfini, donc un serviteur quelconque, pas un personnage identifié. La servitude est l'état relationnel permanent entre la créature et le créateur. Distinction avec « Adoration/Dévotion » : l'adoration est l'acte, la servitude est l'état. Le verset nomme la personne par son état ('abd), pas par son acte (qui est la prière, ṣallā).",
        axe1_verset: "Le verset dit « un serviteur quand il prie ». Le mot 'abdan est en position d'objet — c'est celui qui subit l'interdiction. L'indéfinition (pas de al-) universalise : n'importe quel serviteur qui prie peut être visé par l'interdicteur. Le champ lexical serviteur + prier décrit un état de soumission (servitude) manifesté par un acte (prière).",
        axe2_voisins: "Le verset 9 identifiait l'interdicteur. Le verset 10 identifie la victime : un serviteur en prière. Le contraste entre celui qui se croit autosuffisant (v7) et le serviteur qui prie est structurel : l'un refuse la dépendance, l'autre l'assume.",
        axe3_sourate: "La servitude est l'antithèse de la transgression. Le transgresseur refuse d'être serviteur — il se croit autosuffisant. Le serviteur reconnaît sa dépendance — il prie. La sourate oppose ces deux attitudes face au seigneur.",
        axe4_coherence: "Le Coran utilise 'abd 275 fois — c'est un mot central. « N'ai-je pas fait alliance avec vous, ô enfants d'Adam, de ne pas servir le diable ? » (36:60). La servitude envers Dieu est le choix fondamental.",
        axe5_frequence: "La servitude est la reconnaissance de la dépendance qui fonde la mission du khalifa. Servir le seigneur, c'est accepter les limites qui empêchent la transgression. Le serviteur qui prie est le khalifa en acte."
      }
    }
  }, 1);

  // ---- SLW (صلو) — id=283 — "prier" ----
  // Forme: verbe accompli forme II ṣallā — il a prié
  await upsertVWA(verse_id, 'slw', 'prier', {
    sense_chosen: "prier",
    concept_chosen: "Prière/Invocation",
    concepts: {
      "Prière/Invocation": {
        status: "retenu",
        senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
        proof_ctx: "Le sens retenu est « Prière/Invocation ». Le Lane's donne : se tourner vers Dieu par des paroles et des gestes. La prière est un acte extérieur et directionnel qui sort de celui qui prie et se dirige vers Dieu. La forme ṣallā est un accompli : « quand il a prié » ou « quand il prie » (avec idhā qui donne un sens conditionnel habituel). Distinction avec « Proximité/Attachement » : suivre de près est un sens secondaire qui ne correspond pas à l'acte décrit dans le verset.",
        axe1_verset: "Le verset dit « un serviteur quand il prie ». Le verbe ṣallā est un accompli après idhā (quand), ce qui exprime une habitude : « quand il prie » = « chaque fois qu'il prie ». La prière est l'acte qui manifeste la servitude. Le champ lexical serviteur + prier forme le portrait de celui qui reconnaît son seigneur.",
        axe2_voisins: "Le verset 12 mentionne la taqwā (protection/prévention) — un autre acte positif qui s'ajoute à la prière. Les deux actes (prier et ordonner la prévention) décrivent le comportement du serviteur vertueux, en contraste avec l'interdicteur.",
        axe3_sourate: "La prière est l'acte positif central de la sourate. Elle s'oppose à la transgression. Le verset 19 clôt la sourate par « prosterne-toi et rapproche-toi » — la prière est la réponse à la transgression.",
        axe4_coherence: "Le Coran ordonne la prière des centaines de fois. La prière est le pilier de la relation serviteur-seigneur. Interdire la prière est l'acte le plus grave de transgression.",
        axe5_frequence: "La prière est l'acte par lequel le khalifa maintient sa connexion avec le seigneur. Sans prière, le khalifa perd son ancrage et risque la transgression."
      },
      "Proximité/Attachement": {
        status: "nul",
        senses: ["suivre de près"],
        proof_ctx: "Suivre de près est un sens secondaire sans rapport avec le contexte de prière."
      }
    }
  }, 3);

  // --- Traduction verset 10 ---
  await sb.from('verse_analyses').update({
    translation_arab: "عَبْدًا إِذَا صَلَّىٰٓ",
    full_translation: "à un serviteur d'Allah quand il prie",
    segments: [
      { fr: "un serviteur", pos: "nom", phon: "'abdan", arabic: "عَبْدًا", word_key: "ebd", is_particle: false, sense_retenu: "serviteur", position: 1 },
      { fr: "quand", pos: "particule", phon: "idhā", arabic: "إِذَا", is_particle: true, position: 2 },
      { fr: "il prie", pos: "verbe", phon: "ṣallā", arabic: "صَلَّىٰٓ", word_key: "slw", is_particle: false, sense_retenu: "prier", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le mot 'abdan est un nom indéfini à l'accusatif (le tanwīn « an » marque l'accusatif indéfini) — un serviteur quelconque, pas un serviteur précis. Le mot est l'objet du verbe yanhā (interdit) du verset 9. La particule idhā (quand) introduit une condition temporelle habituelle : « chaque fois qu'il prie ». Le verbe ṣallā est un accompli de la forme II (une forme intensive — la prière est un acte complet et accompli). Avec idhā, l'accompli prend un sens d'habitude : la prière est un acte régulier du serviteur.

§JUSTIFICATION§
**serviteur** — Le sens retenu est « serviteur ». Le mot « serviteur » traduit 'abd dans sa dimension de relation au seigneur. L'alternative « esclave » est écartée car elle implique une contrainte involontaire, alors que la servitude envers Dieu dans le Coran est volontaire. L'alternative « adorateur » est écartée car elle décrit l'acte (adorer) plutôt que l'état (être serviteur).

**prie** — Le sens retenu est « prier ». Le mot « prie » est le choix naturel en français courant. L'alternative « fait la prière rituelle » est trop technique.

§CRITIQUE§
Hamidullah ajoute « d'Allah (Mouhammad) » entre parenthèses — ni « d'Allah » ni « Mouhammad » ne sont dans le texte arabe. Le texte dit simplement « un serviteur quand il prie » — l'universalité est voulue. Ajouter un nom propre réduit le verset à un incident historique et lui retire sa portée universelle.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:10 — TERMINÉ');
  console.log('  ebd (ع ب د) → concept "Servitude/Esclavage" → mot français "serviteur"');
  console.log('  slw (ص ل و) → concept "Prière/Invocation" → mot français "prier"');
  console.log('  Traduction : "Un serviteur quand il prie"');
}

async function main() {
  await verse96_6();
  await verse96_7();
  await verse96_8();
  await verse96_9();
  await verse96_10();
  console.log('\n=== PARTIE 2 TERMINÉE (versets 6-10) ===');
}

main().catch(console.error);
