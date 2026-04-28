// Pipeline Sourate 96 (Al-Alaq) — Partie 1: Versets 1-5
// Étapes 3 + 4: Axes concepts + Traductions
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

async function insertDaily(analysis_id, phrases) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) {
    console.log(`  word_daily already exists for analysis_id=${analysis_id}, SKIP`);
    return;
  }
  const { error } = await sb.from('word_daily').insert(phrases);
  if (error) console.log(`  Error word_daily:`, error.message);
  else console.log(`  Inserted ${phrases.length} daily phrases`);
}

// ================================================================
// CONTEXTE SOURATE 96 (Al-Alaq)
// ================================================================
// Thème : Première révélation. L'être humain est créé d'une chose accrochée,
// Dieu lui enseigne par le calame ce qu'il ignorait. Puis l'être humain transgresse
// dès qu'il se croit autosuffisant. La sourate oppose le savoir divin (v1-5)
// à la transgression humaine (v6-19). Le retour est vers le Seigneur.
// Versets voisins S95 (le figuier) et S97 (la nuit du destin).

async function verse96_1() {
  console.log('\n=== VERSET 96:1 — ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ ===');
  const verse_id = 6107;

  // ---- QRA (قرأ) — id=512 — "Lis" ----
  // Concepts: Lecture/Récitation (4 sens)
  // Forme: impératif 2ème personne (iqra') — ordre direct
  await upsertVWA(verse_id, 'qra', 'lis', {
    sense_chosen: "lis",
    concept_chosen: "Lecture/Récitation",
    concepts: {
      "Lecture/Récitation": {
        status: "retenu",
        senses: ["lire", "réciter", "Coran", "proclamer"],
        proof_ctx: "Le sens retenu est « Lecture/Récitation ». La racine qara'a désigne l'acte de prononcer à voix haute ou de parcourir des yeux un texte. Dans le verset, c'est un impératif direct adressé à la deuxième personne : « lis ». Le Lane's donne : il a lu, récité, prononcé. L'ordre de lire est le premier commandement de la sourate et le premier mot révélé selon la tradition. La lecture est l'acte fondateur par lequel l'être humain accède au savoir (versets 3-5). Il n'y a pas d'autre concept dans cette racine — la lecture est le seul concept et il s'impose naturellement.",
        axe1_verset: "Le verset dit « lis au nom de ton seigneur qui a créé ». Le mot iqra' ouvre le verset et la sourate. Il est suivi de « au nom de ton seigneur » — la lecture est liée au nom du seigneur, ce qui en fait un acte de connaissance rattaché à la source de toute création. Le champ lexical associe lecture + nom + seigneur + création. La lecture est le moyen d'accéder à la connaissance, et la connaissance est liée à celui qui a créé. La lecture ouvre la voie vers la compréhension de la création.",
        axe2_voisins: "Le verset 2 précise que la création concerne l'être humain à partir d'une chose accrochée. Le verset 3 répète l'ordre de lire avec un attribut supplémentaire du seigneur (le plus généreux). Les versets 4-5 développent l'enseignement par le calame. Le contexte immédiat place la lecture comme porte d'entrée vers le savoir divin. La répétition de l'impératif au verset 3 souligne l'urgence et l'importance de cet acte.",
        axe3_sourate: "La sourate 96 est structurée autour de deux mouvements : les versets 1-5 établissent le savoir comme don divin par la lecture, puis les versets 6-19 montrent la transgression de celui qui refuse ce savoir. La lecture est le thème fondateur — c'est l'acte qui distingue celui qui accepte le savoir de celui qui le rejette. Le titre même de la sourate (al-'Alaq) renvoie à la création, mais le premier mot est « lis ».",
        axe4_coherence: "Le Coran associe régulièrement la lecture et la récitation à la guidance : « Récite ce qui t'a été révélé du Livre » (29:45). Le mot qur'ān lui-même vient de cette racine — le Coran est « ce qui est lu/récité ». L'impératif iqra' dans cette sourate est cohérent avec l'ensemble du message coranique qui place la lecture comme acte fondateur de la relation entre l'être humain et le savoir divin.",
        axe5_frequence: "La lecture est l'outil premier du khalifa pour accomplir sa mission de justice et de civilisation. Sans lecture, pas de savoir ; sans savoir, pas de justice ; sans justice, la corruption s'installe. L'ordre de lire au nom du seigneur place cet acte dans un cadre plus large que la simple acquisition de connaissances — c'est un acte qui engage la responsabilité de l'être humain envers sa mission de civilisation."
      }
    }
  }, 1);

  // ---- SMW (سمو) — id=249 — "nom" ----
  // Le mot ism (nom) dans bi-ismi rabbika — "au nom de ton seigneur"
  // Concepts pertinents: Nom/Identification, Hauteur/Élévation, Ciel/Ce qui couvre
  await upsertVWA(verse_id, 'smw', 'nom', {
    sense_chosen: "nom",
    concept_chosen: "Nom/Identification",
    concepts: {
      "Nom/Identification": {
        status: "retenu",
        senses: ["nom", "nommer", "prononcer le nom de Dieu", "renommée", "homonyme"],
        proof_ctx: "Le sens retenu est « Nom/Identification ». Le Lane's donne : le nom est un signe qui pointe vers ce qu'il désigne, il permet d'identifier et de distinguer. Dans le verset, « au nom de ton seigneur » signifie que la lecture se fait en invoquant l'identité du seigneur — le nom est le pont entre celui qui lit et celui au nom de qui il lit. Le nom est une réalité extérieure et permanente. Distinction avec « Hauteur/Élévation » : l'élévation est un mouvement ascendant, pas un signe d'identification. Le verset ne parle pas de s'élever mais d'invoquer un nom. Distinction avec « Ciel/Ce qui couvre » : le ciel est une réalité spatiale qui n'a pas de rapport avec l'acte de nommer dans ce contexte.",
        axe1_verset: "Le verset dit « lis au nom de ton seigneur qui a créé ». Le mot ism est en position d'idafa avec rabb (seigneur) — « le nom de ton seigneur ». La préposition bi (au/par) lie la lecture au nom : on lit par le nom, c'est-à-dire en invoquant l'identité de celui qui commande la lecture. Le champ lexical nom + seigneur + création forme une chaîne : le seigneur est identifié par son nom, et ce nom est lié à l'acte de créer. Le nom n'est pas un simple label — c'est l'identité qui qualifie le seigneur.",
        axe2_voisins: "Le verset 3 ajoute un autre attribut du seigneur : « le plus généreux ». Le verset 4 ajoute : « qui a enseigné par le calame ». Le seigneur est identifié progressivement par ses attributs — créer, être généreux, enseigner. Le nom au verset 1 ouvre cette identification qui se déploie sur cinq versets. Le nom est la porte d'entrée vers la connaissance de qui est le seigneur.",
        axe3_sourate: "La sourate place le nom du seigneur comme fondement de la lecture. Le thème central est le savoir comme don divin — et ce savoir commence par nommer, par identifier celui de qui vient le savoir. La sourate oppose ensuite celui qui reconnaît ce nom (et lit) à celui qui le rejette (et transgresse).",
        axe4_coherence: "Le Coran utilise la formule « au nom de Dieu » (bismillah) pour ouvrir chaque sourate sauf la 9e. Le nom de Dieu est invoqué comme ouverture de tout acte. Dans d'autres versets : « Invoque le nom de ton seigneur » (73:8, 76:25, 87:1). Le nom est systématiquement le moyen par lequel l'être humain se connecte au divin.",
        axe5_frequence: "Le nom du seigneur ancre la mission du khalifa dans une réalité qui le dépasse. Lire au nom du seigneur, c'est reconnaître que le savoir ne vient pas de soi — il vient de celui qui a créé. Cette reconnaissance est le fondement de l'humilité nécessaire au khalifa pour exercer la justice sans tomber dans la transgression décrite aux versets 6-7."
      },
      "Hauteur/Élévation": {
        status: "nul",
        senses: ["être haut", "se dresser", "monter", "noble", "aspirer"],
        proof_ctx: "L'élévation physique ou abstraite n'a aucun rapport avec le contexte du verset. Le mot est clairement ism (nom) en idafa avec rabb, pas une forme verbale de la racine samā (s'élever). Le contexte syntaxique élimine ce concept sans ambiguïté."
      },
      "Ciel/Ce qui couvre": {
        status: "nul",
        senses: ["ciel", "toit", "nuage"],
        proof_ctx: "Le ciel comme voûte n'a aucun rapport avec « au nom de ton seigneur ». Le mot ism ne désigne pas le ciel dans ce contexte."
      }
    }
  }, 2);

  // ---- RBB (ربب) — id=253 — "seigneur" ----
  // Forme: nom en idafa avec -ka (ton), rabbika = "ton seigneur"
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "gouverner"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante ». Le Lane's donne : le rabb est le seigneur, le maître, le propriétaire qui élève et entretient. C'est une relation permanente et extérieure entre le maître et ce qu'il gouverne. Dans le verset, « ton seigneur » est suivi de « qui a créé » — le seigneur est identifié par l'acte de création, ce qui est l'autorité suprême. Le possessif « ton » personnalise cette relation. Distinction avec « Croissance/Augmentation » : la croissance est un processus physique de développement, pas une relation d'autorité. Le verset ne parle pas de croître mais d'un seigneur qui crée. Distinction avec « Éducation/Accompagnement » : l'éducation est un aspect de la seigneurie mais le verset met l'accent sur la création (khalaqa), pas sur l'accompagnement.",
        axe1_verset: "Le verset dit « lis au nom de ton seigneur qui a créé ». Le mot rabb est qualifié par le pronom possessif -ka (ton) et par la relative « qui a créé ». Le seigneur n'est pas nommé abstraitement — il est identifié par sa relation personnelle avec l'interlocuteur (ton) et par son acte fondateur (créer). Le champ lexical nom + seigneur + création place le rabb comme source de tout ce qui existe. Le seigneur est celui qui a autorité parce qu'il a créé.",
        axe2_voisins: "Le verset 3 ajoute « ton seigneur est le plus généreux » — un nouvel attribut de la seigneurie. Le verset 8 dit « c'est vers ton seigneur qu'est le retour ». Le seigneur est le point de départ (il crée, verset 1) et le point d'arrivée (le retour, verset 8). Entre les deux, il enseigne (versets 4-5). La seigneurie encadre toute la sourate — elle est l'horizon permanent.",
        axe3_sourate: "La sourate oppose la seigneurie divine (versets 1-5, 8) à la transgression humaine (versets 6-7, 9-16). Le seigneur crée, enseigne et attend le retour — l'être humain transgresse quand il oublie cette seigneurie. Le thème de la seigneurie est le fil conducteur qui donne son sens à la transgression : on transgresse parce qu'on oublie de qui on dépend.",
        axe4_coherence: "Le mot rabb est le mot le plus fréquent du Coran pour désigner Dieu dans sa relation avec la création (980 occurrences). La formule « ton seigneur » (rabbuka) est utilisée des dizaines de fois pour rappeler cette relation personnelle. Le Coran utilise rabb quand il veut souligner l'autorité bienveillante — ilāh quand il parle de divinité en soi.",
        axe5_frequence: "Le seigneur est celui qui donne au khalifa les moyens de sa mission : la création (l'existence même), le savoir (le calame), la guidance. Reconnaître la seigneurie, c'est reconnaître que l'être humain n'est pas autosuffisant — ce qui est exactement le message des versets 6-7 où l'être humain transgresse dès qu'il se croit riche/autosuffisant."
      },
      "Croissance/Augmentation": {
        status: "nul",
        senses: ["augmenter", "croître", "faire grandir", "excès"],
        proof_ctx: "La croissance physique ne correspond pas au contexte. Le verset parle d'un seigneur qui crée, pas d'un processus de développement. La forme rabb est un nom, pas un verbe de croissance."
      },
      "Éducation/Accompagnement": {
        status: "peu_probable",
        senses: ["élever un enfant", "éduquer", "former", "accompagner la croissance"],
        proof_ctx: "L'éducation est un aspect de la seigneurie — le rabb est aussi celui qui éduque. Mais le verset 1 qualifie le seigneur par la création (khalaqa), pas par l'éducation. C'est aux versets 4-5 que l'enseignement apparaît, avec un autre mot ('allama, de la racine 'ilm). Le choix de rabb + khalaqa au verset 1 pointe vers l'autorité du créateur, pas vers l'éducateur.",
        axe1_verset: "Le verset associe rabb à khalaqa (créer). Le champ lexical pointe vers la source de l'existence, pas vers l'accompagnement pédagogique. Le nom + seigneur + création forment un triptyque de fondation, pas d'éducation. L'éducation viendra aux versets 4-5 avec un autre vocabulaire.",
        axe2_voisins: "Les versets 4-5 parlent d'enseignement ('allama) par le calame. Si l'éducation était le concept central du verset 1, elle serait redondante avec les versets suivants. Le verset 1 pose le fondement (création), les versets 4-5 développent la conséquence (enseignement). Deux étapes distinctes.",
        axe3_sourate: "La sourate distingue clairement la création (verset 1-2) de l'enseignement (versets 4-5). Le concept d'éducation fusionnerait ces deux étapes, ce qui contredit la structure de la sourate.",
        axe4_coherence: "Le Coran utilise rabb dans des contextes variés — pas seulement éducatifs. Dans « rabb al-'ālamīn » (seigneur des mondes), le sens est l'autorité sur toute la création, pas l'éducation des mondes.",
        axe5_frequence: "L'éducation contribue à la mission du khalifa, mais le verset 1 pose un fondement plus large : la reconnaissance de la source de l'existence. Sans cette reconnaissance, l'éducation n'a pas de cadre."
      },
      "Commerce/Usure": {
        status: "nul",
        senses: ["usure", "augmentation de dette"],
        proof_ctx: "L'usure est un sens financier de la racine qui n'a aucun rapport avec le contexte de la création et de la lecture."
      }
    }
  }, 3);

  // ---- XLQ (خلق) — id=344 — "créer" ----
  // Forme: verbe accompli 3ème personne (khalaqa) — il a créé
  await upsertVWA(verse_id, 'xlq', 'créer', {
    sense_chosen: "créer",
    concept_chosen: "Création/Production",
    concepts: {
      "Création/Production": {
        status: "retenu",
        senses: ["créer", "création", "créature", "façonner", "nature", "caractère"],
        proof_ctx: "Le sens retenu est « Création/Production ». Le Lane's donne : faire exister ce qui n'existait pas, façonner. Dans le verset, « qui a créé » qualifie le seigneur — la création est l'acte qui fonde son autorité. C'est un verbe accompli (khalaqa), indiquant un acte achevé et définitif. La création est directionnelle : elle sort du créateur et produit une réalité nouvelle. Il n'y a pas d'alternative sérieuse — le mot khalaqa dans le Coran désigne toujours la création.",
        axe1_verset: "Le verset dit « ton seigneur qui a créé ». Le verbe khalaqa est en position de relative qualifiant le seigneur. Le verset ne précise pas ce qui a été créé — c'est la création en elle-même, universelle et absolue. Le verset 2 viendra préciser l'objet de la création (l'être humain). Le champ lexical lis + nom + seigneur + créer forme une progression du commandement à la source de l'autorité.",
        axe2_voisins: "Le verset 2 développe : « il a créé l'être humain d'une chose accrochée ». La création est d'abord posée dans l'absolu (verset 1), puis détaillée (verset 2). Les versets 3-5 passent de la création à l'enseignement — la création est le premier acte du seigneur, l'enseignement est le second.",
        axe3_sourate: "La création est le point de départ de la sourate. L'être humain existe parce que le seigneur l'a créé — et c'est cette réalité qu'il oublie quand il transgresse (versets 6-7). La sourate rappelle d'où vient l'être humain (une chose accrochée) pour le ramener à l'humilité.",
        axe4_coherence: "Le Coran associe systématiquement la création à l'argument d'autorité divine : « Ô gens, adorez votre seigneur qui vous a créés » (2:21). L'acte de créer fonde le droit à la seigneurie. Avec 261 occurrences, khalaqa est un mot central du Coran.",
        axe5_frequence: "Le khalifa est d'abord un être créé — sa mission commence par la reconnaissance de sa propre origine. Celui qui oublie qu'il a été créé (d'une chose accrochée, verset 2) se croit autosuffisant (verset 7) et transgresse (verset 6). La création est le rappel permanent de la dépendance qui fonde l'humilité nécessaire à la mission de justice."
      }
    }
  }, 5);

  // --- Traduction verset 1 ---
  await sb.from('verse_analyses').update({
    translation_arab: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
    full_translation: "Lis, au nom de ton Seigneur qui a créé",
    segments: [
      { fr: "Lis", pos: "verbe", phon: "iqra'", arabic: "ٱقْرَأْ", word_key: "qra", is_particle: false, sense_retenu: "lire", position: 1 },
      { fr: "au nom de", pos: "nom", phon: "bismi", arabic: "بِٱسْمِ", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 2, prefix_particle: "bi" },
      { fr: "ton seigneur", pos: "nom", phon: "rabbika", arabic: "رَبِّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "qui", pos: "pronom relatif", phon: "alladhī", arabic: "ٱلَّذِى", is_particle: true, position: 4 },
      { fr: "a créé", pos: "verbe", phon: "khalaqa", arabic: "خَلَقَ", word_key: "xlq", is_particle: false, sense_retenu: "créer", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par un impératif (une forme qui donne un ordre direct) : « lis ». Cet impératif est adressé à la deuxième personne — c'est un commandement personnel et direct. Le mot bismi (au nom de) est composé de la préposition bi (par/au moyen de) et du nom ism (nom) en idafa (un rattachement grammatical, comme « le livre de l'élève ») avec rabbika (ton seigneur). Le mot rabb (seigneur) porte le pronom possessif -ka (ton) — le seigneur est personnel, pas abstrait. Le verbe khalaqa (il a créé) est un verbe accompli (une forme qui indique que l'action est terminée et définitive) à la troisième personne, dans une proposition relative introduite par alladhī (qui). Le seigneur est qualifié par un acte achevé : il a créé. Le verset ne précise pas l'objet de la création — c'est la création dans l'absolu, sans limite ni restriction.

§JUSTIFICATION§
**lis** — Le sens retenu est « lire ». Le mot « lis » est choisi car c'est l'impératif direct en français courant de « lire ». L'alternative « récite » est écartée car elle implique une répétition de mémoire, alors que le verset ne précise pas de texte à réciter — c'est un ordre général de lecture. L'alternative « proclame » est écartée car elle ajoute une dimension publique que le texte ne contient pas.

**nom** — Le sens retenu est « nom ». Le mot « nom » est le seul choix naturel en français pour ism. L'alternative « renommée » est écartée car le verset ne parle pas de célébrité mais d'identification.

**seigneur** — Le sens retenu est « seigneur ». Le mot « seigneur » est choisi car il traduit la relation d'autorité bienveillante du rabb — celui qui possède, entretient et gouverne. L'alternative « maître » est écartée car elle implique une domination sans la dimension de bienveillance. L'alternative « éducateur » est écartée car le verset qualifie le rabb par la création, pas par l'éducation.

**a créé** — Le sens retenu est « créer ». L'accompli « a créé » traduit l'acte achevé et définitif. L'alternative « façonné » est écartée car elle implique un travail artisanal sur une matière existante, alors que khalaqa est la création à partir de rien.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset. La structure « Lis au nom de ton Seigneur qui a créé » est fidèle à la grammaire et à l'étymologie. Aucun mot ne fait basculer le sens du verset dans les traductions classiques.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:1 — TERMINÉ');
  console.log('  qra (ق ر أ) → concept "Lecture/Récitation" → mot français "lis"');
  console.log('  smw (س م و) → concept "Nom/Identification" → mot français "nom"');
  console.log('  rbb (ر ب ب) → concept "Seigneurie/Autorité bienveillante" → mot français "seigneur"');
  console.log('  xlq (خ ل ق) → concept "Création/Production" → mot français "créer"');
  console.log('  Traduction : "Lis au nom de ton seigneur qui a créé"');
}

async function verse96_2() {
  console.log('\n=== VERSET 96:2 — خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ ===');
  const verse_id = 6108;

  // ---- XLQ (خلق) — déjà analysé v1, même concept ----
  await upsertVWA(verse_id, 'xlq', 'créer', {
    sense_chosen: "créer",
    concept_chosen: "Création/Production",
    concepts: {
      "Création/Production": {
        status: "retenu",
        senses: ["créer", "création", "créature", "façonner", "nature"],
        proof_ctx: "Même concept qu'au verset 1. Ici le verbe khalaqa est répété mais avec un objet précis : l'être humain (al-insān) et une matière d'origine : une chose accrochée ('alaq). La création passe de l'absolu (verset 1) au particulier (verset 2).",
        axe1_verset: "Le verset dit « il a créé l'être humain d'une chose accrochée ». Le verbe khalaqa est le même qu'au verset 1, mais complété par un objet direct (l'être humain) et un complément d'origine (min 'alaq). Le champ lexical créer + être humain + accrochement forme une description de l'origine humble de l'homme. La création est l'acte fondateur qui donne existence à l'être humain à partir d'une matière insignifiante.",
        axe2_voisins: "Le verset 1 posait la création dans l'absolu. Le verset 2 la précise. Les versets 3-5 passent à l'enseignement. Cette progression création → enseignement montre que l'être humain est d'abord créé physiquement puis élevé par le savoir. Le verset 7 rappellera que cet être créé d'une chose accrochée se croit autosuffisant — le contraste est saisissant.",
        axe3_sourate: "La sourate rappelle l'origine humble de l'être humain pour fonder l'humilité. L'être humain qui transgresse (verset 6) oublie qu'il a été créé d'une chose accrochée. La création est l'argument massue contre la transgression.",
        axe4_coherence: "Le Coran rappelle fréquemment l'origine de l'être humain comme argument d'humilité : « Nous avons créé l'être humain d'argile » (23:12), « d'eau insignifiante » (77:20). Le rappel de l'origine est un procédé coranique récurrent pour combattre l'orgueil.",
        axe5_frequence: "Le khalifa doit savoir d'où il vient pour savoir où il va. La conscience de sa propre création est le fondement de l'humilité nécessaire à la mission de justice. Celui qui oublie sa création se croit autosuffisant et transgresse — exactement ce que décrit la suite de la sourate."
      }
    }
  }, 1);

  // ---- ANS (أنس) — id=866 — "être humain" ----
  // Forme: nom défini al-insān
  await upsertVWA(verse_id, 'ans', 'être humain', {
    sense_chosen: "être humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["être familier", "être sociable", "être humain", "humains"],
        proof_ctx: "Le sens retenu est « Familiarité/Sociabilité ». Le Lane's donne : la familiarité, le confort en présence de l'autre, l'opposé de la peur et de la sauvagerie. Le mot insān (être humain) dérive de cette racine — l'humain est l'être sociable par nature, celui qui vit en société. Le mot est défini par al- (l'être humain en général, pas un individu). Distinction avec « Perception » : la perception est un acte ponctuel de remarquer quelque chose, pas une nature permanente. Le verset décrit la nature de l'être créé, pas un acte de perception.",
        axe1_verset: "Le verset dit « il a créé l'être humain d'une chose accrochée ». Le mot al-insān est l'objet direct de la création — c'est celui qui est créé. Le nom défini par al- désigne l'espèce humaine dans sa totalité, pas un individu. Le champ lexical créer + être humain + accrochement décrit l'origine de toute l'humanité. L'être humain est nommé par sa nature sociable (ins) — celui qui vit en compagnie des autres.",
        axe2_voisins: "Le verset 5 répète al-insān dans un contexte d'enseignement. Le verset 6 le reprend dans un contexte de transgression. L'être humain est le fil conducteur de la sourate — créé (v2), enseigné (v5), puis transgresseur (v6). Le même mot désigne la même espèce dans trois états différents.",
        axe3_sourate: "L'être humain est le sujet central de la sourate 96. C'est lui qui est créé, enseigné, puis qui transgresse. La sourate trace l'arc complet de la condition humaine : de l'origine humble à la transgression par l'oubli.",
        axe4_coherence: "Le mot insān apparaît 65 fois dans le Coran. Il désigne toujours l'espèce humaine dans sa nature — sociable, fragile, créée. D'autres mots (bashar, nās) désignent l'humain sous d'autres angles. Le choix de insān ici souligne la nature intime de la création.",
        axe5_frequence: "Le khalifa est d'abord un être humain (insān) — un être social créé pour vivre en société et y exercer la justice. Le mot insān rappelle que la mission de civilisation est inscrite dans la nature même de l'être humain, qui est un être de compagnie et de société, pas un être solitaire."
      },
      "Perception": {
        status: "nul",
        senses: ["percevoir", "voir de loin"],
        proof_ctx: "La perception est un acte ponctuel qui ne correspond pas au contexte. Le verset parle de la création de l'être humain, pas d'un acte de perception."
      }
    }
  }, 2);

  // ---- ELQ (علق) — id=1558 — "chose accrochée" ----
  // Forme: nom indéfini 'alaq (sans al-)
  await upsertVWA(verse_id, 'elq', 'accrochement', {
    sense_chosen: "accrochement",
    concept_chosen: "Accrochage/Attachement",
    concepts: {
      "Accrochage/Attachement": {
        status: "retenu",
        senses: ["s'accrocher", "caillot de sang", "s'attacher"],
        proof_ctx: "Le sens retenu est « Accrochage/Attachement ». Le Lane's donne : s'accrocher à quelque chose et ne pas le lâcher. Le 'alaq est ce qui s'accroche — le sens premier est l'accrochement, pas le sang. Le caillot de sang (souvent traduit) est un dérivé parce que le sang coagulé s'accroche à la surface. Le Lane's donne aussi : la sangsue ('alaqa) — l'animal qui s'accroche. Le mot est indéfini ('alaqin, avec tanwīn) — une chose accrochée parmi d'autres, pas la chose accrochée en particulier. Distinction avec « Suspendre » : suspendre est mettre en hauteur, pas s'accrocher à une surface.",
        axe1_verset: "Le verset dit « il a créé l'être humain d'une chose accrochée ». Le mot 'alaq est le complément d'origine (min 'alaq — à partir de). C'est la matière première de la création humaine. Le champ lexical créer + être humain + accrochement décrit un processus : la création part d'une matière qui s'accroche. L'image est celle de l'embryon qui s'accroche à la paroi utérine — un état de dépendance absolue. L'être humain commence comme quelque chose qui dépend totalement d'un support.",
        axe2_voisins: "Le verset 1 posait la création dans l'absolu. Le verset 2 la ramène à l'humilité de l'origine. Le verset 7 dira que l'être humain « se croit autosuffisant » — le contraste entre celui qui s'accrochait pour survivre et celui qui se croit indépendant est le cœur de la sourate. Le 'alaq est le rappel physique de la dépendance originelle.",
        axe3_sourate: "La sourate utilise l'image de la chose accrochée pour fonder son argument contre la transgression. L'être humain qui se croit riche (verset 7) a commencé comme une chose accrochée, dépendante, insignifiante. Le titre même de la sourate (al-'Alaq) est tiré de ce mot — c'est le mot-clé de la sourate.",
        axe4_coherence: "Le Coran décrit les stades de la création humaine en plusieurs endroits : terre, eau, sperme, 'alaqa, chair (23:12-14). Le mot 'alaqa dans 23:14 est clairement un stade embryonnaire — ce qui s'accroche. La cohérence coranique confirme le sens d'accrochement biologique.",
        axe5_frequence: "Le rappel de l'origine humble est un outil puissant pour le khalifa. Savoir qu'on a commencé comme une chose accrochée empêche de se croire supérieur aux autres. L'humilité fondée sur la connaissance de sa propre origine est le rempart contre la corruption et la transgression."
      },
      "Sens isolé/Suspendre": {
        status: "nul",
        senses: ["suspendre"],
        proof_ctx: "Suspendre est mettre en hauteur — le verset parle d'une matière d'origine, pas d'un acte de suspension."
      }
    }
  }, 4);

  // --- Traduction verset 2 ---
  await sb.from('verse_analyses').update({
    translation_arab: "خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ",
    full_translation: "qui a créé l'homme d'une adhérence",
    segments: [
      { fr: "Il a créé", pos: "verbe", phon: "khalaqa", arabic: "خَلَقَ", word_key: "xlq", is_particle: false, sense_retenu: "créer", position: 1 },
      { fr: "l'être humain", pos: "nom", phon: "al-insāna", arabic: "ٱلْإِنسَـٰنَ", word_key: "ans", is_particle: false, sense_retenu: "être humain", position: 2 },
      { fr: "à partir de", pos: "préposition", phon: "min", arabic: "مِنْ", is_particle: true, position: 3 },
      { fr: "chose accrochée", pos: "nom", phon: "'alaqin", arabic: "عَلَقٍ", word_key: "elq", is_particle: false, sense_retenu: "accrochement", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe khalaqa (il a créé) est un verbe accompli (une forme qui indique que l'action est terminée), le même qu'au verset 1 mais complété ici par deux informations : l'objet créé et la matière d'origine. L'objet est al-insāna (l'être humain) — le nom est défini par al- et porte la marque de l'accusatif (le « a » final), ce qui en fait l'objet direct du verbe. La préposition min (à partir de) introduit la matière d'origine : 'alaqin (une chose accrochée). Le mot 'alaq est au génitif indéfini (tanwīn — le « in » final), ce qui signifie « une chose accrochée » en général, pas une chose accrochée précise. Le Lane's (Edward Lane, 1863) donne pour cette racine : ce qui s'accroche et ne lâche pas, la sangsue qui s'accroche à la peau, le sang qui coagule et adhère à la surface.

§JUSTIFICATION§
**créer** — Même mot qu'au verset 1. Le verbe accompli marque un acte achevé et définitif.

**être humain** — Le sens retenu est « être humain ». Le mot insān est choisi car il est le plus naturel en français courant. L'alternative « homme » est écartée car elle peut être comprise comme « mâle » alors que insān désigne l'espèce humaine sans distinction de genre.

**chose accrochée** — Le sens retenu est « accrochement ». Le mot « chose accrochée » traduit 'alaq par sa nature première : ce qui s'accroche. L'alternative « caillot de sang » est écartée car le Lane's donne le sens premier comme « ce qui s'accroche » — le sang coagulé n'est qu'un dérivé. L'alternative « adhérence » (Hamidullah) est acceptable mais plus technique que le français courant.

§CRITIQUE§
Les traductions courantes donnent « adhérence » (Hamidullah), « caillot de sang » (autres). Le mot « caillot de sang » vient des exégèses classiques qui ont identifié le 'alaq au sang coagulé — mais le Lane's montre que le sens premier est « ce qui s'accroche ». Le sang est un dérivé du sens premier, pas l'inverse. Traduire par « caillot de sang » réduit l'image à un seul de ses aspects et perd la dimension universelle de la dépendance (l'embryon qui s'accroche à la paroi). « Chose accrochée » est plus fidèle à l'étymologie.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:2 — TERMINÉ');
  console.log('  xlq (خ ل ق) → concept "Création/Production" → mot français "créer"');
  console.log('  ans (أ ن س) → concept "Familiarité/Sociabilité" → mot français "être humain"');
  console.log('  elq (ع ل ق) → concept "Accrochage/Attachement" → mot français "accrochement"');
  console.log('  Traduction : "Il a créé l\'être humain à partir de chose accrochée"');
}

async function verse96_3() {
  console.log('\n=== VERSET 96:3 — ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ ===');
  const verse_id = 6109;

  // ---- QRA — même concept, même sens ----
  await upsertVWA(verse_id, 'qra', 'lis', {
    sense_chosen: "lis",
    concept_chosen: "Lecture/Récitation",
    concepts: {
      "Lecture/Récitation": {
        status: "retenu",
        senses: ["lire", "réciter", "proclamer"],
        proof_ctx: "Même concept qu'au verset 1. La répétition de l'impératif « lis » au verset 3 insiste sur l'urgence du commandement. Cette fois, l'impératif est suivi non pas de « au nom de » mais de « et ton seigneur est le plus généreux » — le deuxième ordre de lire est accompagné d'un encouragement : celui qui commande la lecture est le plus généreux, donc sa lecture mènera au bien.",
        axe1_verset: "Le verset dit « lis, et ton seigneur est le plus généreux ». L'impératif est le même qu'au verset 1 mais le complément change. Au verset 1 : « lis au nom de ton seigneur qui a créé ». Au verset 3 : « lis, et ton seigneur est le plus généreux ». La progression va de la création à la générosité — le seigneur n'est pas seulement celui qui crée, il est aussi le plus généreux. La lecture est associée à la générosité du savoir.",
        axe2_voisins: "Le verset 4 précise la forme de cette générosité : l'enseignement par le calame. La générosité du seigneur se manifeste par le don du savoir. Le verset 5 développe : il a enseigné à l'être humain ce qu'il ne savait pas. La lecture du verset 3 est la porte d'entrée vers cette générosité.",
        axe3_sourate: "La répétition de « lis » marque la structure de la sourate : les versets 1-5 forment un bloc d'enseignement. Le premier « lis » fonde l'acte sur la création, le second le motive par la générosité. Les deux impératifs encadrent le message : la lecture est à la fois un devoir (fondé sur la création) et un cadeau (fondé sur la générosité).",
        axe4_coherence: "Le Coran répète les commandements pour les renforcer. La double injonction « lis » rappelle les doubles appels coraniques (« yā ayyuhā alladhīna āmanū » — « ô vous qui croyez »). La répétition n'est pas une redondance mais une insistance.",
        axe5_frequence: "La répétition du commandement de lire souligne que le savoir n'est pas optionnel pour le khalifa — c'est un devoir fondamental, insistant, non négociable. La générosité divine rend ce devoir accessible : le seigneur ne commande pas la lecture sans donner les moyens de lire (le calame, verset 4)."
      }
    }
  }, 1);

  // ---- RBB — même concept ----
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maître", "celui qui élève"],
        proof_ctx: "Même concept qu'au verset 1. Ici le seigneur est qualifié par un nouvel attribut : al-akram (le plus généreux). La seigneurie s'enrichit — le seigneur crée (v1) et est le plus généreux (v3).",
        axe1_verset: "Le verset dit « ton seigneur est le plus généreux ». Le mot rabb est en position de sujet de la phrase nominale (wa-rabbuka al-akram). Le pronom possessif -ka (ton) maintient la relation personnelle. Le seigneur est qualifié par un superlatif de générosité — il n'est pas seulement généreux, il est le plus généreux de tous.",
        axe2_voisins: "Au verset 1, le seigneur est « celui qui a créé ». Au verset 3, il est « le plus généreux ». Au verset 8, il sera « celui vers qui est le retour ». Trois qualifications progressives qui dessinent le portrait complet du seigneur dans cette sourate.",
        axe3_sourate: "La seigneurie est l'antithèse de la transgression. Le seigneur est généreux (versets 3-5) mais l'être humain transgresse (versets 6-7). La générosité du seigneur est le don du savoir — l'ingratitude de l'être humain est le rejet de ce don.",
        axe4_coherence: "Le titre al-akram (le plus généreux) n'apparaît qu'ici dans le Coran. C'est un hapax qui souligne l'unicité de cette générosité — le seigneur est le plus généreux dans un sens absolu, pas en comparaison avec d'autres.",
        axe5_frequence: "Le khalifa reçoit sa mission d'un seigneur généreux qui donne les moyens (le savoir, le calame). Cette générosité fonde la responsabilité : recevoir le savoir oblige à l'utiliser pour la justice."
      }
    }
  }, 2);

  // ---- KRM (كرم) — id=1470 — "le plus généreux" ----
  // Forme: superlatif af'al (akram) avec al- = le plus généreux
  await upsertVWA(verse_id, 'krm', 'généreux', {
    sense_chosen: "généreux",
    concept_chosen: "Générosité/Noblesse",
    concepts: {
      "Générosité/Noblesse": {
        status: "retenu",
        senses: ["généreux", "noble", "honorable"],
        proof_ctx: "Le sens retenu est « Générosité/Noblesse ». Le Lane's donne : celui qui donne sans compter, qui a des qualités élevées. Le karīm est permanent dans sa disposition à donner. La forme al-akram est un superlatif avec article défini — « le plus généreux » dans l'absolu. Le verset attribue ce superlatif au seigneur. Distinction avec « Fruit/Abondance » : la vigne (karm) est un sens concret de la racine qui n'a aucun rapport avec le contexte divin.",
        axe1_verset: "Le verset dit « ton seigneur est le plus généreux ». Le mot al-akram est en position de prédicat de la phrase nominale — il qualifie le seigneur. Le superlatif (forme af'al avec al-) indique le degré absolu : personne n'est plus généreux. Le champ lexical lis + seigneur + plus généreux lie la lecture à la générosité — lire est l'acte par lequel on reçoit cette générosité. La suite (versets 4-5) révèle la forme de cette générosité : l'enseignement.",
        axe2_voisins: "Les versets 4-5 détaillent en quoi le seigneur est le plus généreux : il a enseigné par le calame, il a enseigné à l'être humain ce qu'il ne savait pas. La générosité divine se manifeste par le don du savoir — pas par la richesse matérielle. C'est un parallèle direct avec les versets 6-7 où l'être humain transgresse à cause de la richesse. La vraie générosité est le savoir, pas la richesse.",
        axe3_sourate: "La générosité est l'attribut central du seigneur dans cette sourate. Elle s'oppose à l'autosuffisance de l'être humain (verset 7). Le seigneur donne généreusement (le savoir) — l'être humain croit qu'il n'a besoin de rien. Le contraste structure toute la sourate.",
        axe4_coherence: "Le Coran utilise la racine k-r-m pour décrire la noblesse et la générosité : « Nous avons honoré (karramnā) les enfants d'Adam » (17:70). L'honneur divin accordé à l'être humain est un thème coranique majeur. Ici, al-akram est un attribut unique du seigneur.",
        axe5_frequence: "La générosité du seigneur fonde la mission du khalifa : celui qui reçoit généreusement le savoir doit le transmettre généreusement par la justice et la civilisation. La générosité divine est le modèle de la générosité humaine."
      },
      "Fruit/Abondance": {
        status: "nul",
        senses: ["vigne"],
        proof_ctx: "La vigne est un sens concret de la racine qui n'a aucun rapport avec le contexte du verset. Le seigneur n'est pas qualifié par un fruit."
      }
    }
  }, 3);

  // --- Traduction verset 3 ---
  await sb.from('verse_analyses').update({
    translation_arab: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
    full_translation: "Lis! Ton Seigneur est le Très Noble",
    segments: [
      { fr: "Lis", pos: "verbe", phon: "iqra'", arabic: "ٱقْرَأْ", word_key: "qra", is_particle: false, sense_retenu: "lire", position: 1 },
      { fr: "et ton seigneur", pos: "nom", phon: "wa-rabbuka", arabic: "وَرَبُّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 2 },
      { fr: "est le plus généreux", pos: "adjectif", phon: "al-akramu", arabic: "ٱلْأَكْرَمُ", word_key: "krm", is_particle: false, sense_retenu: "généreux", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par le même impératif qu'au verset 1 : iqra' (lis). Puis une phrase nominale (une phrase sans verbe en arabe, qui exprime un état permanent) : wa-rabbuka al-akramu — « et ton seigneur est le plus généreux ». La conjonction wa (et) lie le commandement à la qualification du seigneur. Le mot al-akramu est un superlatif (la forme af'al en arabe, qui dit « le plus... de tous ») précédé de l'article al- (le), ce qui en fait un superlatif absolu : le plus généreux de tous, sans exception.

§JUSTIFICATION§
**lis** — Même sens qu'au verset 1.

**seigneur** — Même sens qu'au verset 1.

**le plus généreux** — Le sens retenu est « généreux ». Le mot « le plus généreux » est choisi car il traduit exactement le superlatif al-akram. L'alternative « le plus noble » est écartée car la noblesse est un statut social, alors que la générosité est un acte de donner — et les versets 4-5 montrent que le seigneur donne le savoir. L'alternative « le Très Noble » (Hamidullah) mélange noblesse et registre religieux chrétien.

§CRITIQUE§
Les traductions courantes donnent « le Très Noble » (Hamidullah) ou « le Très Généreux ». Le choix de « noble » au lieu de « généreux » change la perception : la noblesse est un statut, la générosité est un acte. Les versets suivants (4-5) montrent que le seigneur agit en enseignant — ce qui correspond à la générosité (donner le savoir), pas à la noblesse (avoir un rang). Le mot « Très » avec majuscule ajoute un registre religieux chrétien absent du texte arabe, qui dit simplement al-akram (le plus généreux).`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:3 — TERMINÉ');
  console.log('  qra (ق ر أ) → concept "Lecture/Récitation" → mot français "lis"');
  console.log('  rbb (ر ب ب) → concept "Seigneurie/Autorité bienveillante" → mot français "seigneur"');
  console.log('  krm (ك ر م) → concept "Générosité/Noblesse" → mot français "généreux"');
  console.log('  Traduction : "Lis, et ton seigneur est le plus généreux"');
}

async function verse96_4() {
  console.log('\n=== VERSET 96:4 — ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ ===');
  const verse_id = 6110;

  // ---- ELM (علم) — id=254 — "enseigner" ----
  // Forme: verbe accompli forme II ('allama) — faire savoir, enseigner
  // La forme II (fa''ala) ajoute la causativité : 'alima = savoir → 'allama = faire savoir
  await upsertVWA(verse_id, 'elm', 'enseigner', {
    sense_chosen: "enseigner",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
        proof_ctx: "Le sens retenu est « Savoir/Connaissance ». Le Lane's donne : la connaissance, la certitude, la compréhension. La forme II ('allama) est causative — elle signifie « faire savoir », c'est-à-dire enseigner. Dans le verset, le seigneur est « celui qui a enseigné par le calame ». L'enseignement est l'acte par lequel le savoir passe du seigneur à l'être humain. Distinction avec « Marque/Signe » : la marque est un repère physique, pas un acte de transmission de savoir. La forme II exclut le sens de « marquer » car elle implique la causativité du savoir. Distinction avec « Monde/Création » : les mondes ('ālamīn) sont l'ensemble des créatures, pas l'acte d'enseigner.",
        axe1_verset: "Le verset dit « qui a enseigné par le calame ». Le verbe 'allama (forme II, une forme causative qui signifie « faire savoir ») est en position de relative qualifiant le seigneur. Le complément bi-l-qalam (par le calame) indique l'instrument de l'enseignement. Le champ lexical enseigner + calame lie le savoir à l'écriture — le seigneur ne se contente pas de faire savoir oralement, il enseigne par l'écriture, qui est le moyen de préserver et transmettre le savoir.",
        axe2_voisins: "Le verset 3 qualifiait le seigneur de « plus généreux ». Le verset 4 explique en quoi : la générosité se manifeste par l'enseignement. Le verset 5 développe : « il a enseigné à l'être humain ce qu'il ne savait pas ». La progression est : le plus généreux → enseigne par le calame → enseigne ce qu'on ignorait. L'enseignement est la forme suprême de la générosité.",
        axe3_sourate: "L'enseignement est le pivot de la sourate. Les versets 1-5 établissent le savoir comme don divin. Les versets 6-19 montrent celui qui rejette ce savoir. Le calame (verset 4) et le savoir (verset 5) s'opposent à l'ignorance de celui qui transgresse (verset 14 : « ne sait-il pas que Dieu voit ? »).",
        axe4_coherence: "Le Coran fait de l'enseignement un attribut divin majeur : « Le Tout Miséricordieux a enseigné le Coran, il a créé l'être humain, il lui a enseigné l'expression claire » (55:1-4). L'enseignement divin est le fondement de la civilisation humaine dans le Coran.",
        axe5_frequence: "L'enseignement est l'outil par lequel le khalifa reçoit sa mission. Sans savoir, pas de justice possible. Le calame (l'écriture) est le moyen de préserver ce savoir à travers les générations — c'est la base de la civilisation. Le seigneur qui enseigne par le calame donne au khalifa les moyens permanents de sa mission."
      },
      "Marque/Signe": {
        status: "nul",
        senses: ["marquer", "signe", "drapeau", "repère"],
        proof_ctx: "La marque est un sens de la racine qui ne correspond pas à la forme II ('allama). La forme II est causative du savoir, pas de la marque. Le contexte d'enseignement par le calame exclut le sens de repère physique."
      },
      "Monde/Création": {
        status: "nul",
        senses: ["monde", "les mondes", "univers"],
        proof_ctx: "Les mondes ('ālamīn) sont un nom dérivé de la racine, pas un verbe. Le verset utilise la forme verbale II, pas le nom 'ālam."
      }
    }
  }, 2);

  // ---- QLM (قلم) — id=1269 — "calame" ----
  // Forme: nom défini al-qalam
  await upsertVWA(verse_id, 'qlm', 'calame', {
    sense_chosen: "calame",
    concept_chosen: "Écriture/Instrument",
    concepts: {
      "Écriture/Instrument": {
        status: "retenu",
        senses: ["calame", "écrire"],
        proof_ctx: "Le sens retenu est « Écriture/Instrument ». Le Lane's donne : le roseau taillé pour écrire, l'instrument qui fixe la parole sur le support. Le calame est l'outil de l'écriture — il est permanent dans sa fonction de préservation du savoir. Le mot est défini par al- (le calame en général, l'écriture comme moyen). Distinction avec « Tailler » : tailler est l'acte de préparer le roseau, pas l'instrument lui-même. Le verset parle de l'instrument, pas de sa fabrication.",
        axe1_verset: "Le verset dit « qui a enseigné par le calame ». Le mot al-qalam est le complément d'instrument introduit par bi (par). Le seigneur enseigne par le moyen de l'écriture. Le champ lexical enseigner + calame associe le savoir à la permanence de l'écrit — ce qui est écrit reste, ce qui est oral disparaît. Le calame est le pont entre le savoir divin et la mémoire humaine.",
        axe2_voisins: "Le verset 3 qualifiait le seigneur de « plus généreux ». Le verset 5 développe : « il a enseigné ce qu'il ne savait pas ». Le calame est le moyen concret de cette générosité — l'écriture est le véhicule du savoir. Sans le calame, le savoir resterait oral et périssable.",
        axe3_sourate: "Le calame est le symbole concret du savoir dans cette sourate. Il s'oppose à la transgression de celui qui ignore : les versets 1-5 fondent le savoir sur l'écriture, les versets 6-19 montrent celui qui transgresse parce qu'il ne sait pas (verset 14). Le calame est l'arme du savoir contre l'ignorance.",
        axe4_coherence: "Le Coran mentionne le calame dans la sourate 68 (al-Qalam) : « Nūn. Par le calame et ce qu'ils écrivent ». Le calame est un objet de serment coranique — il a une valeur sacrée dans le message coranique. L'écriture est un thème coranique majeur.",
        axe5_frequence: "Le calame est l'outil de civilisation par excellence. Sans écriture, pas de loi, pas de science, pas de transmission du savoir entre générations. Le khalifa a besoin du calame pour établir la justice de manière permanente et transmissible."
      }
    }
  }, 3);

  // --- Traduction verset 4 ---
  await sb.from('verse_analyses').update({
    translation_arab: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
    full_translation: "qui a enseigné par la plume [le calame]",
    segments: [
      { fr: "qui", pos: "pronom relatif", phon: "alladhī", arabic: "ٱلَّذِى", is_particle: true, position: 1 },
      { fr: "a enseigné", pos: "verbe", phon: "'allama", arabic: "عَلَّمَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 2 },
      { fr: "par le calame", pos: "nom", phon: "bil-qalami", arabic: "بِٱلْقَلَمِ", word_key: "qlm", is_particle: false, sense_retenu: "calame", position: 3, prefix_particle: "bi" }
    ],
    translation_explanation: `§DEMARCHE§
Le pronom relatif alladhī (qui) relie ce verset au seigneur mentionné au verset 3. Le verbe 'allama est une forme II (une forme causative en arabe — quand on double la deuxième lettre du verbe, le sens passe de « savoir » à « faire savoir », c'est-à-dire enseigner). C'est un verbe accompli à la troisième personne : il a enseigné. Le complément bi-l-qalami (par le calame) est introduit par la préposition bi (par, au moyen de), qui indique l'instrument. Le qalam (calame) est le roseau taillé pour écrire — l'instrument de l'écriture. Le mot est défini par al- : c'est le calame en tant que moyen universel d'écriture, pas un calame particulier.

§JUSTIFICATION§
**a enseigné** — Le sens retenu est « savoir » (concept Savoir/Connaissance). Le mot « a enseigné » est choisi car la forme II ('allama) est causative — faire savoir = enseigner. L'alternative « a fait connaître » est écartée car plus lourd en français que le simple « enseigner ».

**calame** — Le sens retenu est « calame ». Le mot « calame » est choisi car il désigne précisément l'instrument d'écriture. L'alternative « plume » est acceptable en français courant mais moins précise — la plume est un instrument européen, le calame est un roseau taillé. L'alternative « stylo » est anachronique.

§CRITIQUE§
Les traductions courantes donnent « par la plume » ou « par le calame ». Les deux sont acceptables. Le choix de « calame » est plus fidèle à l'objet arabe. Aucun mot ne fait basculer le sens du verset — les traductions classiques sont fidèles.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:4 — TERMINÉ');
  console.log('  elm (ع ل م) → concept "Savoir/Connaissance" → mot français "enseigner"');
  console.log('  qlm (ق ل م) → concept "Écriture/Instrument" → mot français "calame"');
  console.log('  Traduction : "Qui a enseigné par le calame"');
}

async function verse96_5() {
  console.log('\n=== VERSET 96:5 — عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ ===');
  const verse_id = 6111;

  // ---- ELM — forme II 'allama (enseigner) + forme I ya'lam (savoir) ----
  await upsertVWA(verse_id, 'elm', 'enseigner', {
    sense_chosen: "enseigner",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "connaître", "certitude", "enseignement"],
        proof_ctx: "Même concept qu'au verset 4. Le verset utilise deux formes de la même racine : 'allama (forme II — enseigner) et ya'lam (forme I inaccompli — savoir). La juxtaposition des deux formes crée un jeu : « il a enseigné ('allama) à l'être humain ce qu'il ne savait pas (lam ya'lam) ». Le savoir vient de l'extérieur (du seigneur) vers l'être humain qui ne le possédait pas. L'enseignement comble l'ignorance.",
        axe1_verset: "Le verset dit « il a enseigné à l'être humain ce qu'il ne savait pas ». Le verbe 'allama (enseigner) prend ici un objet direct (l'être humain) et un objet indirect (ce qu'il ne savait pas). Le pronom relatif mā (ce que) est suivi de la négation lam + ya'lam (il ne savait pas) — c'est un inaccompli apocopé par lam, qui exprime la négation du passé. Le champ lexical enseigner + être humain + ne pas savoir forme une phrase complète sur le don du savoir.",
        axe2_voisins: "Le verset 4 disait « par le calame » — le moyen. Le verset 5 dit « ce qu'il ne savait pas » — le contenu. La progression est : moyen → contenu. Les versets 1-5 forment un bloc complet : lis → seigneur créateur → plus généreux → enseigne par le calame → enseigne l'inconnu. Le verset 6 rompt avec ce bloc par « Prenez garde ! ».",
        axe3_sourate: "Le verset 5 clôt la section positive de la sourate. L'être humain est créé, enseigné, comblé de savoir. À partir du verset 6, il transgresse. Le contraste entre « ce qu'il ne savait pas » (ignorance originelle comblée par le seigneur) et « ne sait-il pas que Dieu voit ? » (verset 14, ignorance volontaire du transgresseur) structure la sourate.",
        axe4_coherence: "Le Coran répète ce thème : « Dieu vous a fait sortir des ventres de vos mères sans que vous sachiez rien » (16:78). L'ignorance originelle de l'être humain et le don divin du savoir est un thème coranique fondamental.",
        axe5_frequence: "Le savoir que le khalifa ne possédait pas par nature lui est donné par le seigneur. Cette grâce fonde la responsabilité : celui qui reçoit le savoir doit l'utiliser pour la justice, pas pour la transgression. Le verset oppose implicitement le bon usage du savoir (justice) au mauvais usage (transgression, versets 6-7)."
      }
    }
  }, 1);

  // ---- ANS — même concept ----
  await upsertVWA(verse_id, 'ans', 'être humain', {
    sense_chosen: "être humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["être familier", "être sociable", "être humain"],
        proof_ctx: "Même concept qu'au verset 2. L'être humain est maintenant le destinataire de l'enseignement, alors qu'au verset 2 il était l'objet de la création. La progression est : créé (v2) → enseigné (v5) → transgresseur (v6).",
        axe1_verset: "Le verset dit « il a enseigné à l'être humain ce qu'il ne savait pas ». L'être humain (al-insān) est le destinataire du savoir. Le même mot revient pour la troisième fois dans la sourate, créant un fil conducteur : l'être humain créé, l'être humain enseigné, puis l'être humain transgresseur.",
        axe2_voisins: "Au verset 2, l'être humain était créé d'une chose accrochée. Au verset 5, il reçoit le savoir. Au verset 6, il transgresse. La sourate trace l'arc complet de la condition humaine en trois stations.",
        axe3_sourate: "L'être humain est le sujet central — chaque mention de al-insān ajoute une couche à la description de sa condition.",
        axe4_coherence: "Le Coran utilise al-insān dans des contextes de faiblesse et de don divin : créé faible (4:28), enseigné ce qu'il ignorait (96:5), ingrat (100:6). Le portrait est constant.",
        axe5_frequence: "Le khalifa est l'être humain qui reçoit le savoir — c'est ce qui le distingue de la chose accrochée qu'il était. Le savoir est le fondement de la mission."
      }
    }
  }, 2);

  // --- Traduction verset 5 ---
  await sb.from('verse_analyses').update({
    translation_arab: "عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ",
    full_translation: "a enseigné à l'homme ce qu'il ne savait pas",
    segments: [
      { fr: "Il a enseigné", pos: "verbe", phon: "'allama", arabic: "عَلَّمَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 1 },
      { fr: "à l'être humain", pos: "nom", phon: "al-insāna", arabic: "ٱلْإِنسَـٰنَ", word_key: "ans", is_particle: false, sense_retenu: "être humain", position: 2 },
      { fr: "ce que", pos: "pronom relatif", phon: "mā", arabic: "مَا", is_particle: true, position: 3 },
      { fr: "pas", pos: "négation", phon: "lam", arabic: "لَمْ", is_particle: true, position: 4 },
      { fr: "il ne savait", pos: "verbe", phon: "ya'lam", arabic: "يَعْلَمْ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe 'allama (il a enseigné) est le même qu'au verset 4, forme II accomplie. L'objet direct est al-insāna (l'être humain). Puis le pronom relatif mā (ce que) introduit une subordonnée : lam ya'lam — « il ne savait pas ». Le mot lam est une particule de négation qui, combinée avec le verbe inaccompli ya'lam (il sait), exprime la négation du passé : « il ne savait pas ». Le verbe ya'lam est la forme I (simple) de la même racine que 'allama — le jeu entre les deux formes est significatif : la forme II (enseigner) comble la forme I négative (ne pas savoir).

§JUSTIFICATION§
**a enseigné** — Même mot qu'au verset 4.

**être humain** — Même mot qu'au verset 2.

**ne savait pas** — Le verbe ya'lam (forme I, inaccompli) est nié par lam. Le choix « ne savait pas » en français traduit naturellement lam ya'lam. L'alternative « ne connaissait pas » est écartée car « savoir » est plus direct et courant que « connaître » dans ce contexte.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:5 — TERMINÉ');
  console.log('  elm (ع ل م) → concept "Savoir/Connaissance" → mot français "enseigner"/"savoir"');
  console.log('  ans (أ ن س) → concept "Familiarité/Sociabilité" → mot français "être humain"');
  console.log('  Traduction : "Il a enseigné à l\'être humain ce qu\'il ne savait pas"');
}

async function main() {
  await verse96_1();
  await verse96_2();
  await verse96_3();
  await verse96_4();
  await verse96_5();
  console.log('\n=== PARTIE 1 TERMINÉE (versets 1-5) ===');
}

main().catch(console.error);
