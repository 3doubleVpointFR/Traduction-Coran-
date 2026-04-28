// Pipeline Sourate 90 (Al-Balad) — Partie 3: Versets 11-15 (Étapes 3-4)
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
// VERSET 90:11 — فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ
// "Mais il n'a pas franchi l'obstacle"
// ============================================================
async function verse90_11() {
  console.log('\n=== VERSET 90:11 — فَلَا ٱقْتَحَمَ ٱلْعَقَبَةَ ===');
  const verse_id = 6034;

  // ---- qHm (قحم) — id=2631 — "se précipiter dans" ----
  // Forme: verbe accompli forme VIII iqtaHama (il s'est précipité dans)
  // Négation: fa-lā iqtaHama = "il ne s'est pas précipité dans"
  await upsertVWA(verse_id, 'qHm', 'se jeter dans une affaire sans réflexion', {
    sense_chosen: "se jeter dans une affaire sans réflexion",
    concept_chosen: "Précipitation/Plongée",
    concepts: {
      "Précipitation/Plongée": {
        status: "retenu",
        senses: ["se jeter dans une affaire sans réflexion", "plonger dans les dangers", "franchir un obstacle en se précipitant"],
        proof_ctx: "Le sens retenu est « Précipitation/Plongée ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine q-H-m signifie se jeter dans quelque chose de difficile ou dangereux sans considération. La forme VIII iqtaHama intensifie cette idée : plonger de tout son être dans un obstacle, l'affronter en s'y jetant tête baissée. Le verbe est à l'accompli négatif (fa-lā iqtaHama) : il ne s'est PAS jeté dans l'obstacle, il ne l'a pas affronté. La précipitation est un acte extérieur, directionnel et ponctuel — la personne quitte un état de sécurité pour plonger dans la difficulté. C'est un mouvement volontaire, courageux et irréversible une fois lancé. Distinction avec « Sécheresse/Disette » : la disette est un état subi, passif, qui s'installe. Or le verset décrit un acte non accompli — quelque chose que la personne n'a pas fait. Il ne s'agit pas d'un état subi mais d'une action que l'être humain aurait dû entreprendre et qu'il n'a pas entreprise.",
        axe1_verset: "Le verset dit « alors il ne s'est pas précipité dans l'obstacle ». Le champ lexical est : négation + précipitation + obstacle. Le verbe iqtaHama est un accompli (une forme qui exprime une action achevée — ici, une action qui n'a PAS eu lieu). La négation fa-lā avec l'accompli exprime un regret ou un reproche : il aurait dû franchir l'obstacle mais ne l'a pas fait. La précipitation est ici une vertu : se jeter dans la difficulté pour faire le bien demande du courage. L'obstacle (al-eaqaba) est défini par al- : c'est l'obstacle connu, identifié, que les versets suivants vont définir.",
        axe2_voisins: "Les versets 8-10 rappelaient les dons accordés à l'être humain (deux yeux, une langue, deux lèvres, la guidance vers les deux voies). Le verset 11 constate l'échec : malgré tous ces dons, il ne s'est pas jeté dans l'obstacle. Les versets 12-16 vont définir cet obstacle : libérer un être humain, nourrir l'orphelin et le pauvre. La précipitation dans l'obstacle est donc l'acte de générosité courageux que l'être humain refuse de faire malgré les moyens dont il dispose.",
        axe3_sourate: "La sourate 90 oppose l'arrogance humaine (v5-7 : il se vante de dilapider sa richesse) à la vraie difficulté (v4 : créé dans la difficulté). Le verset 11 marque le tournant : au lieu de dépenser dans la vantardise, il aurait dû se précipiter dans l'obstacle — c'est-à-dire affronter la difficulté de faire le bien. Le thème de la sourate est le passage de l'égocentrisme à l'altruisme, et la précipitation dans l'obstacle est l'acte-clé de cette transition.",
        axe4_coherence: "Le Coran utilise la racine q-H-m uniquement ici (90:11). Mais le thème de franchir les obstacles pour faire le bien se retrouve partout : en 3:92 « vous n'atteindrez la vertu que lorsque vous dépenserez de ce que vous aimez ». Le verbe iqtaHama ajoute une nuance d'urgence et de courage physique — ce n'est pas une simple dépense calme, c'est un plongeon dans la difficulté. Le Coran valorise ceux qui agissent avec détermination dans le bien.",
        axe5_frequence: "Le khalifa qui refuse de se jeter dans l'obstacle trahit sa mission. Se précipiter dans la difficulté pour libérer les opprimés et nourrir les affamés est exactement le rôle du khalifa : empêcher la corruption et établir la justice. La négation (il ne l'a PAS fait) est un constat d'échec — l'être humain doté de tous les moyens a refusé d'agir. La mission du khalifa exige le courage de plonger dans les situations difficiles."
      },
      "Sécheresse/Disette": {
        status: "nul",
        senses: ["souffrir de sécheresse"],
        proof_ctx: "La sécheresse est un état climatique subi passivement. Or le verset décrit une action non accomplie (il ne s'est pas précipité), pas un état météorologique. Aucun rapport avec le contexte."
      },
      "Sens isolé/Vieillesse": {
        status: "nul",
        senses: ["vieille femme"],
        proof_ctx: "Sens isolé désignant une personne âgée, sans rapport avec l'acte de franchir un obstacle."
      },
      "Sens isolé/Redondance": {
        status: "nul",
        senses: ["mot redondant ou superflu"],
        proof_ctx: "Terme linguistique technique, hors sujet dans ce contexte de franchissement d'obstacle."
      }
    }
  }, 1);

  // ---- eqb (عقب) — id=814 — "l'obstacle/la pente" ----
  // Forme: nom défini accusatif al-eaqabata (l'obstacle)
  await upsertVWA(verse_id, 'eqb', 'conséquence', {
    sense_chosen: "conséquence",
    concept_chosen: "Succession/Conséquence",
    concepts: {
      "Talon/Arrière": {
        status: "peu_probable",
        senses: ["frapper le talon", "talon"],
        proof_ctx: "Le talon est une partie physique du corps. Le verset parle d'un obstacle moral à franchir (défini dans les versets suivants comme libérer un être humain et nourrir les affamés). Le talon comme partie anatomique n'a pas de rapport avec le contexte. Distinction avec « Succession/Conséquence » : le talon est statique et concret, alors que l'obstacle-conséquence est un défi moral que l'on affronte ou que l'on évite.",
        axe1_verset: "Le verset dit « il ne s'est pas précipité dans al-eaqaba ». Si eaqaba signifie « talon », la phrase serait « il ne s'est pas jeté dans le talon » — une expression incohérente. Le talon est une partie du corps, pas un lieu dans lequel on se précipite. Le champ lexical (précipitation + obstacle) demande un objet que l'on peut franchir ou dans lequel on peut plonger.",
        axe2_voisins: "Les versets 12-16 définissent al-eaqaba comme « libérer un être humain, nourrir un orphelin, nourrir un pauvre ». Ces actes de vertu sont des obstacles moraux à franchir, pas des parties anatomiques. Le sens de « talon » ne s'articule pas avec la suite du passage.",
        axe3_sourate: "La sourate oppose la vantardise stérile (v6) à l'acte courageux de vertu (v11-16). L'obstacle est le défi moral que l'être humain refuse d'affronter. Le talon n'a pas de place dans ce thème.",
        axe4_coherence: "Le Coran utilise eaqib dans le sens de « conséquence » ou « suite » à de nombreuses reprises (ex : 7:128 « al-eāqibatu li-l-muttaqîn » — la bonne conséquence est pour ceux qui se prémunissent). Le sens d'obstacle-épreuve est cohérent avec l'usage coranique.",
        axe5_frequence: "Le talon comme partie du corps n'a aucun rapport avec la mission du khalifa de justice et de civilisation."
      },
      "Succession/Conséquence": {
        status: "retenu",
        senses: ["succéder", "venir après", "conséquence", "alternance"],
        proof_ctx: "Le sens retenu est « Succession/Conséquence ». D'après les sources étymologiques, la racine e-q-b signifie ce qui vient après, la suite, la conséquence. Le nom eaqaba désigne la pente raide, l'obstacle difficile à gravir — c'est la conséquence de s'engager sur un chemin ardu. Le nom est défini (al-eaqaba) : c'est l'obstacle connu, celui que les versets suivants vont expliciter. La eaqaba est un passage difficile qui exige un effort — c'est la suite logique du reproche : après avoir reçu tous les dons (v8-10), la conséquence attendue est de franchir cet obstacle moral. Distinction avec « Châtiment/Rétribution » : le châtiment est une punition infligée par un agent extérieur. La eaqaba ici n'est pas un châtiment mais un défi moral à relever — c'est l'être humain qui doit agir, pas subir. Distinction avec « Talon/Arrière » : le talon est anatomique et statique, la eaqaba est un obstacle dynamique à franchir.",
        axe1_verset: "Le verset dit « il ne s'est pas précipité dans l'obstacle ». Le mot al-eaqaba est un nom défini accusatif — l'article al- indique que cet obstacle est connu, identifié. Le champ lexical (précipitation + obstacle) construit l'image d'une épreuve morale que l'on affronte en s'y jetant. La eaqaba en arabe désigne littéralement la pente raide d'une montagne — un passage difficile mais franchissable. Métaphoriquement, c'est l'acte de vertu qui demande un effort et du courage.",
        axe2_voisins: "Le verset 12 pose immédiatement la question « et qu'est-ce qui t'a fait savoir ce qu'est l'obstacle ? ». Les versets 13-16 répondent : libérer un être humain, nourrir un orphelin proche, nourrir un pauvre dans la poussière. L'obstacle est donc explicitement défini comme un acte de générosité courageux. La suite du passage confirme que eaqaba est un défi moral, pas un lieu physique.",
        axe3_sourate: "La sourate trace un arc narratif : l'être humain est créé dans la difficulté (v4), se vante de sa richesse (v6), reçoit des dons (v8-10), mais refuse de franchir l'obstacle de la vertu (v11). L'obstacle est le point de bascule de la sourate : d'un côté la vantardise stérile, de l'autre l'action vertueuse qui exige un effort.",
        axe4_coherence: "Le mot eaqaba apparaît aussi en 90:12 dans la même sourate. Le Coran utilise la racine e-q-b dans le sens de « conséquence finale » en 7:128 (« la bonne suite est pour ceux qui se prémunissent ») et en 28:83 (« la conséquence appartient à ceux qui se prémunissent »). L'idée que l'effort moral a une conséquence positive est constante dans le Coran.",
        axe5_frequence: "L'obstacle de la vertu est exactement ce que le khalifa doit franchir : libérer les opprimés, nourrir les affamés, établir la justice. La eaqaba est l'épreuve qui sépare le khalifa digne de celui qui trahit sa mission. Franchir l'obstacle, c'est accomplir la mission de civilisation et d'empêchement de la corruption."
      },
      "Châtiment/Rétribution": {
        status: "peu_probable",
        senses: ["punir", "châtiment"],
        proof_ctx: "Le châtiment est infligé par un agent extérieur. Or le verset dit que l'être humain n'a pas franchi l'obstacle — c'est lui qui doit agir, pas subir. Les versets suivants définissent l'obstacle comme des actes de vertu (libérer, nourrir), pas comme une punition. Distinction avec le sens retenu : la conséquence est un défi à relever activement, le châtiment est une peine à subir passivement.",
        axe1_verset: "Le verbe iqtaHama (se précipiter dans) implique un acte volontaire. On ne se précipite pas volontairement dans un châtiment — on le subit. Le champ lexical demande un obstacle que l'on choisit d'affronter, pas une punition imposée.",
        axe2_voisins: "Les versets 13-16 définissent l'obstacle : libérer un être humain, nourrir un orphelin, nourrir un pauvre. Ce sont des actes de vertu, pas des châtiments. Le contexte élimine complètement le sens de punition.",
        axe3_sourate: "La sourate appelle à l'action vertueuse, pas à subir un châtiment. Le ton est celui du reproche et de l'encouragement, pas de la menace.",
        axe4_coherence: "Quand le Coran parle de châtiment, il utilise eadhâb ou eiqâb, pas eaqaba comme obstacle à franchir.",
        axe5_frequence: "Le châtiment est l'opposé de la mission du khalifa. Le khalifa agit pour la justice, il ne subit pas de punition."
      },
      "Descendance": {
        status: "nul",
        senses: ["descendance", "postérité"],
        proof_ctx: "La descendance est la suite biologique. Le verset parle d'un obstacle moral à franchir, pas de progéniture. Aucun rapport avec le contexte."
      }
    }
  }, 2);

  // --- Traduction v11 ---
  await upsertVA(verse_id, {
    translation_arab: "Mais il ne s'est pas précipité dans l'obstacle",
    full_translation: "Or, il ne s'engage pas dans la voie difficile",
    segments: [
      { fr: "Mais", pos: "CONJ", phon: "fa", arabic: "فَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "il ne s'est pas", pos: "NEG", phon: "lā", arabic: "لَا", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "précipité dans", pos: "V.ACC.VIII", phon: "iqtaḥama", arabic: "ٱقْتَحَمَ", word_key: "qHm", is_particle: false, sense_retenu: "se jeter dans une affaire sans réflexion", position: 3 },
      { fr: "l'obstacle", pos: "N.DEF.ACC", phon: "al-ʿaqaba", arabic: "ٱلْعَقَبَةَ", word_key: "eqb", is_particle: false, sense_retenu: "conséquence", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par **fa** (alors, conséquence logique), suivi de **lā** (négation) et du verbe **iqtaḥama** à l'accompli (une forme qui exprime une action achevée dans le passé). La combinaison fa-lā avec l'accompli exprime un constat négatif avec une nuance de reproche : il aurait dû le faire mais ne l'a pas fait. Le verbe **iqtaḥama** est une forme VIII de la racine q-Ḥ-m — la forme VIII ajoute une dimension réflexive et intensive : se jeter soi-même, de tout son être, dans quelque chose de difficile. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qaḥama signifie se jeter dans une affaire sans réflexion, plonger dans les dangers. La forme VIII intensifie : iqtaḥama = plonger de tout son corps dans l'obstacle.

Le complément **al-ʿaqaba** est un nom défini (avec al-) à l'accusatif — c'est l'obstacle connu, celui que les versets suivants vont définir. La racine ʿ-q-b donne le sens de pente raide, passage difficile. L'article défini al- signale que cet obstacle est précis et identifié, pas n'importe quel obstacle.

§JUSTIFICATION§
**précipité dans** — Le sens retenu est « se jeter dans une affaire sans réflexion ». Le mot « précipité » est choisi car il capture le mouvement brusque et courageux de se jeter dans la difficulté. L'alternative « franchi » est écartée car elle est trop neutre — franchir un obstacle peut se faire calmement, alors que iqtaḥama implique un élan physique, une impulsion de courage. L'alternative « plongé » est possible mais « précipité » garde mieux la nuance d'urgence.

**l'obstacle** — Le sens retenu est « conséquence » (la suite logique de ce qui est difficile). Le mot « obstacle » est choisi car la ʿaqaba est littéralement une pente raide — un passage difficile que l'on peut franchir avec effort. L'alternative « pente » est trop géographique. L'alternative « épreuve » est possible mais « obstacle » est plus courant en français.

§CRITIQUE§
Les traductions courantes donnent « la voie difficile » (Hamidullah) ou « la pente » pour al-ʿaqaba. Le choix de « voie difficile » est une interprétation qui aplatit la métaphore : le texte ne dit pas « voie » (ṭarîq/sabîl), il dit ʿaqaba — un obstacle précis, une pente raide qu'il faut gravir d'un seul élan. Le verbe iqtaḥama (se précipiter, plonger) confirme que ce n'est pas un chemin qu'on emprunte mais un obstacle dans lequel on se jette. La traduction courante perd cette dimension d'urgence et de courage physique.`
  });

  console.log('  v11 DONE');
}

// ============================================================
// VERSET 90:12 — وَمَآ أَدْرَىٰكَ مَا ٱلْعَقَبَةُ
// "Et qu'est-ce qui t'a fait savoir ce qu'est l'obstacle ?"
// ============================================================
async function verse90_12() {
  console.log('\n=== VERSET 90:12 — وَمَآ أَدْرَىٰكَ مَا ٱلْعَقَبَةُ ===');
  const verse_id = 6035;

  // ---- dry (دري) — id=2098 — "savoir/percevoir" ----
  // Forme: verbe accompli forme IV adrāka (t'a fait savoir)
  await upsertVWA(verse_id, 'dry', 'savoir', {
    sense_chosen: "savoir",
    concept_chosen: "Connaissance/Perception",
    concepts: {
      "Connaissance/Perception": {
        status: "retenu",
        senses: ["savoir", "percevoir", "se rendre compte"],
        proof_ctx: "Le sens retenu est « Connaissance/Perception ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), darā/yadrī signifie savoir, avoir connaissance de quelque chose. La forme IV adrā ajoute la causalité : faire savoir, donner la connaissance. La formule « wa-mā adrāka mā » est une tournure rhétorique récurrente dans le Coran qui sert à souligner l'importance et la gravité de ce qui va être défini — elle crée un effet de suspense avant la réponse. La connaissance ici est un acte extérieur et directionnel : quelque chose fait savoir au destinataire. Le pronom -ka (toi) désigne le destinataire de la connaissance. Il n'y a qu'un seul sens possible pour cette racine dans ce contexte."
      }
    }
  }, 2);

  // ---- eqb (عقب) — id=814 — "l'obstacle" ----
  // Même analyse que v11, forme nominative ici (al-ʿaqabatu)
  await upsertVWA(verse_id, 'eqb', 'conséquence', {
    sense_chosen: "conséquence",
    concept_chosen: "Succession/Conséquence",
    concepts: {
      "Succession/Conséquence": {
        status: "retenu",
        senses: ["succéder", "venir après", "conséquence", "alternance"],
        proof_ctx: "Le sens retenu est « Succession/Conséquence ». Même analyse que le verset 11 — la ʿaqaba est l'obstacle-conséquence, la pente raide qui représente l'épreuve morale. Ici le mot est au nominatif (sujet de la phrase nominale « mā al-ʿaqabatu » = qu'est-ce que l'obstacle). La question rhétorique prépare la réponse des versets 13-16 qui définissent l'obstacle comme des actes de vertu courageux.",
        axe1_verset: "Le verset pose la question « qu'est-ce qui t'a fait savoir ce qu'est l'obstacle ? ». La ʿaqaba est le sujet de la deuxième proposition (mā al-ʿaqabatu). Le champ lexical est : savoir + question + obstacle. La question rhétorique souligne que l'obstacle n'est pas banal — il faut une explication pour comprendre sa vraie nature.",
        axe2_voisins: "Le verset 11 constatait l'échec (il ne s'est pas précipité dans l'obstacle). Le verset 12 pose la question de la nature de cet obstacle. Les versets 13-16 répondront : libérer un être humain, nourrir l'orphelin et le pauvre. La question sert de pont entre le constat et la définition.",
        axe3_sourate: "La sourate utilise la technique de la question rhétorique pour marquer les moments-clés. Cette question « wa-mā adrāka » est une formule solennelle qui annonce une vérité importante. Elle crée un effet de gravité autour de l'obstacle moral.",
        axe4_coherence: "La formule « wa-mā adrāka mā » apparaît dans de nombreuses sourates (69:3, 77:14, 82:17, 83:8, 86:2, 97:2, 101:3, 101:10, 104:5). À chaque fois, elle annonce la définition d'un terme important. Le Coran utilise systématiquement cette tournure pour créer du suspense et souligner la gravité.",
        axe5_frequence: "La question oblige le destinataire à réfléchir : qu'est-ce que cet obstacle que le khalifa doit franchir ? La réponse (libérer, nourrir) montre que la mission du khalifa passe par des actes concrets de justice sociale."
      },
      "Talon/Arrière": {
        status: "nul",
        senses: ["frapper le talon", "talon"],
        proof_ctx: "Même rejet qu'au verset 11. Le talon comme partie anatomique n'a pas de sens dans une question rhétorique sur la nature d'une épreuve morale."
      },
      "Châtiment/Rétribution": {
        status: "nul",
        senses: ["punir", "châtiment"],
        proof_ctx: "Le contexte ne parle pas de punition. Les versets suivants définissent la ʿaqaba comme des actes de vertu, pas un châtiment."
      }
    }
  }, 4);

  // --- Traduction v12 ---
  await upsertVA(verse_id, {
    translation_arab: "Et qu'est-ce qui t'a fait savoir ce qu'est l'obstacle ?",
    full_translation: "Et qui te dira ce qu'est la voie difficile ?",
    segments: [
      { fr: "Et", pos: "CONJ", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "qu'est-ce qui", pos: "INTER", phon: "mā", arabic: "مَآ", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "t'a fait savoir", pos: "V.ACC.IV", phon: "adrāka", arabic: "أَدْرَىٰكَ", word_key: "dry", is_particle: false, sense_retenu: "savoir", position: 3 },
      { fr: "ce qu'est", pos: "INTER", phon: "mā", arabic: "مَا", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
      { fr: "l'obstacle", pos: "N.DEF.NOM", phon: "al-ʿaqaba", arabic: "ٱلْعَقَبَةُ", word_key: "eqb", is_particle: false, sense_retenu: "conséquence", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhétorique composée de deux propositions. La première : **wa-mā adrāka** — « et qu'est-ce qui t'a fait savoir ». Le verbe **adrā** est une forme IV (causative) de la racine d-r-y au passé : « a fait savoir ». Le pronom suffixe **-ka** (toi) est le complément d'objet. La deuxième proposition : **mā al-ʿaqabatu** — « ce qu'est l'obstacle ». Le mot **al-ʿaqaba** est ici au nominatif (une forme qui indique le sujet) car il est le sujet de la phrase nominale interrogative.

La formule **wa-mā adrāka mā** est une tournure rhétorique récurrente dans le Coran. Elle sert à créer un effet de gravité et de suspense : le locuteur annonce que ce qui suit est si important que même le destinataire ne peut pas le savoir par lui-même — il faut une explication.

§JUSTIFICATION§
**t'a fait savoir** — Le sens retenu est « savoir ». Le verbe est à la forme IV (causative : faire savoir), d'où « t'a fait savoir » plutôt que simplement « tu sais ». Le mot « savoir » est du français courant. L'alternative « percevoir » est écartée car trop sensoriel — il s'agit d'une connaissance intellectuelle, pas d'une perception physique.

**l'obstacle** — Même choix qu'au verset 11. Le mot « obstacle » traduit al-ʿaqaba comme pente raide, défi à franchir.

§CRITIQUE§
Hamidullah traduit « Et qui te dira ce qu'est la voie difficile ? ». Le texte ne dit pas « qui te dira » (man yukhbiruka) mais « qu'est-ce qui t'a fait savoir » (mā adrāka). La différence est que le texte utilise le passé (a fait savoir), pas le futur (dira). De plus, « la voie difficile » est une interprétation — le texte dit al-ʿaqaba (l'obstacle, la pente raide), pas al-ṭarîq al-ṣaʿb (la voie difficile).`
  });

  console.log('  v12 DONE');
}

// ============================================================
// VERSET 90:13 — فَكُّ رَقَبَةٍ
// "Libérer un être humain"
// ============================================================
async function verse90_13() {
  console.log('\n=== VERSET 90:13 — فَكُّ رَقَبَةٍ ===');
  const verse_id = 6036;

  // ---- fkk (فكك) — id=2615 — "libérer/séparer" ----
  // Forme: nom (masdar) fakku = l'acte de libérer/séparer
  await upsertVWA(verse_id, 'fkk', 'libérer un captif', {
    sense_chosen: "libérer un captif",
    concept_chosen: "Libération/Affranchissement",
    concepts: {
      "Séparation/Ouverture": {
        status: "probable",
        senses: ["séparer", "ouvrir", "briser un sceau", "démettre un os", "relâcher"],
        proof_ctx: "La séparation est un acte physique de détacher deux choses liées. Or le verset ne parle pas de séparer deux objets physiques mais de libérer un être humain (raqaba = cou, par métonymie la personne). La séparation est trop générique et physique pour ce contexte de libération humaine. Distinction avec « Libération/Affranchissement » : la séparation est un acte mécanique neutre (séparer deux planches), la libération est un acte moral qui restaure la dignité d'un être humain retenu.",
        axe1_verset: "Le verset dit « fakku raqabatin » — libération d'un cou. Le champ lexical est : libération + être humain (cou = personne par métonymie). La séparation physique (séparer deux objets) ne s'accorde pas avec l'objet raqaba (un être humain). On ne sépare pas un être humain — on le libère.",
        axe2_voisins: "Le verset 11 parlait de l'obstacle moral à franchir. Le verset 12 demandait ce qu'est cet obstacle. Le verset 13 donne la première réponse : libérer un être humain. La séparation physique (ouvrir, briser) ne correspond pas à la définition d'un acte de vertu moral.",
        axe3_sourate: "La sourate appelle à des actes de vertu concrets. La libération d'un être humain est un acte moral de haute valeur. La simple séparation mécanique ne porte pas cette charge morale.",
        axe4_coherence: "Le Coran utilise fakka raqaba en 90:13 et taḥrîr raqaba en 4:92, 5:89, 58:3 pour la libération d'un être humain. Le sens de libération humaine est constant dans le Coran quand la racine f-k-k est associée à raqaba.",
        axe5_frequence: "La séparation mécanique n'a pas de dimension éthique en soi. La libération d'un être humain est un acte central de la mission du khalifa."
      },
      "Libération/Affranchissement": {
        status: "retenu",
        senses: ["racheter un gage", "libérer un captif", "affranchir un esclave"],
        proof_ctx: "Le sens retenu est « Libération/Affranchissement ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), fakka signifie libérer ce qui est retenu par un lien d'obligation — racheter un gage, libérer un captif, affranchir un esclave. La libération est un acte extérieur et directionnel : elle sort de celui qui libère et atteint celui qui est libéré. C'est un acte de restauration — on rend à une personne sa liberté perdue. Le masdar fakk (l'acte de libérer) associé à raqaba (cou = personne par métonymie) donne « libération d'un être humain ». C'est le premier acte de vertu qui définit l'obstacle du verset 11. Distinction avec « Séparation/Ouverture » : la séparation est un acte mécanique neutre, la libération est un acte moral qui restaure la dignité humaine. Distinction avec « Détachement/Cessation » : le détachement est un état résultatif intérieur (se détacher), la libération est un acte extérieur dirigé vers l'autre (libérer quelqu'un).",
        axe1_verset: "Le verset dit « fakku raqabatin » — libération d'un cou. Le masdar fakk est un nom d'action (une forme qui désigne l'acte lui-même, pas le résultat). Le cou (raqaba) est une métonymie classique en arabe pour désigner la personne entière — « libérer un cou » signifie libérer un être humain de ses chaînes. Le champ lexical est : libération + être humain. L'acte est concret, extérieur et bénéfique.",
        axe2_voisins: "Ce verset est la première réponse à la question « qu'est-ce que l'obstacle ? » (v12). L'obstacle à franchir commence par l'acte le plus noble : libérer un être humain. Les versets 14-16 ajouteront d'autres actes : nourrir en temps de famine. La libération est l'acte le plus difficile et le plus courageux — elle exige de sacrifier sa richesse pour la liberté d'autrui.",
        axe3_sourate: "La sourate oppose celui qui dilapide sa richesse par vantardise (v6) à celui qui la dépense pour libérer un être humain (v13). Le contraste est saisissant : la même richesse peut être détruite par ego ou utilisée pour restaurer la dignité d'une personne. La libération est le premier pilier de l'obstacle moral que la sourate définit.",
        axe4_coherence: "Le Coran accorde une importance majeure à la libération des êtres humains. En 2:177, la vertu inclut « donner de ses biens pour libérer les cous ». En 4:92, 5:89, 58:3, la libération d'un cou est prescrite comme expiation. Le Coran place systématiquement la libération humaine parmi les actes les plus méritoires.",
        axe5_frequence: "La libération des êtres humains est au cœur de la mission du khalifa. Le khalifa est celui qui empêche la corruption — et l'asservissement d'un être humain par un autre est la corruption par excellence. Libérer un cou, c'est restaurer l'ordre naturel où chaque personne est libre et digne."
      },
      "Détachement/Cessation": {
        status: "peu_probable",
        senses: ["se détacher", "cesser", "se dégager d'un piège"],
        proof_ctx: "Le détachement est un état résultatif intérieur — se détacher soi-même. Or le masdar fakk ici est un acte transitif : on libère quelqu'un d'autre (raqaba). Le détachement est réflexif (se détacher), la libération est transitive (libérer un autre). Le verset décrit un acte de vertu dirigé vers autrui, pas un détachement personnel.",
        axe1_verset: "Le masdar fakk associé au génitif raqabatin implique un acte transitif : la libération DE quelqu'un. Le détachement est réflexif (se détacher soi-même), ce qui ne correspond pas à la construction grammaticale fakk + génitif.",
        axe2_voisins: "Le contexte est une série d'actes de vertu tournés vers les autres (libérer, nourrir). Le détachement personnel ne s'inscrit pas dans cette série d'actes altruistes.",
        axe3_sourate: "La sourate appelle à agir pour les autres, pas à se détacher du monde.",
        axe4_coherence: "Le Coran utilise fakka raqaba comme un acte de libération d'autrui, pas de détachement personnel.",
        axe5_frequence: "Le détachement personnel est une vertu intérieure, mais le texte demande ici un acte extérieur concret envers autrui."
      }
    }
  }, 1);

  // ---- rqb (رقب) — id=955 — "cou/être humain" ----
  // Forme: nom indéfini génitif raqabatin (un cou = un être humain)
  await upsertVWA(verse_id, 'rqb', 'cou (raqaba)', {
    sense_chosen: "cou (raqaba)",
    concept_chosen: "Être humain/Esclave",
    concepts: {
      "Surveillance/Vigilance": {
        status: "peu_probable",
        senses: ["surveiller", "observer", "attendre", "craindre (Dieu)"],
        proof_ctx: "La surveillance est un acte de vigilance dirigé vers l'extérieur. Or le verset dit « fakku raqabatin » — libération d'une raqaba. Si raqaba signifie « surveillance », la phrase serait « libération d'une surveillance » — incohérent. Le verset demande un acte concret de libération d'un être humain, pas de libérer une surveillance. Distinction avec « Être humain/Esclave » : la surveillance est un acte, le cou-personne est un être humain concret que l'on libère.",
        axe1_verset: "Le champ lexical est : libérer + cou/personne. La surveillance ne se libère pas — on libère une personne. Le masdar fakk (libération) exige un objet concret que l'on peut détacher de ses liens.",
        axe2_voisins: "Les versets suivants parlent de nourrir des personnes (orphelin, pauvre). Le contexte est une série d'actes de bienfaisance envers des personnes concrètes, pas envers des concepts abstraits.",
        axe3_sourate: "La sourate appelle à des actes de vertu concrets envers les personnes vulnérables. Libérer une personne s'inscrit dans cette logique.",
        axe4_coherence: "Le Coran utilise raqaba dans le sens de « personne à libérer » en 4:92, 5:89, 58:3 — c'est une métonymie établie.",
        axe5_frequence: "La surveillance est une vertu du khalifa, mais ici c'est la libération de l'être humain qui est demandée — un acte plus fondamental."
      },
      "Être humain/Esclave": {
        status: "retenu",
        senses: ["cou (raqaba)", "esclave (libérer un cou)"],
        proof_ctx: "Le sens retenu est « Être humain/Esclave ». D'après les sources étymologiques, la raqaba est le cou — la partie du corps qui relie la tête au tronc. Par métonymie, le cou désigne la personne entière. « Libérer un cou » (fakku raqabatin) signifie libérer un être humain de ses chaînes ou de sa servitude. C'est une métonymie profonde : le cou est la partie du corps sur laquelle se posent les chaînes et les jougs — libérer le cou, c'est retirer les chaînes. Le mot est indéfini (raqabatin, sans al-) : c'est un cou quelconque, n'importe quel être humain asservi — le texte ne spécifie pas qui. Distinction avec « Surveillance/Vigilance » : la surveillance est un acte abstrait, le cou-personne est un être concret.",
        axe1_verset: "Le verset dit « fakku raqabatin » — libération d'un cou. Le mot raqaba est au génitif indéfini (une forme qui indique qu'il est complément du masdar fakk). L'indéfini signifie que n'importe quel être humain asservi compte — le texte ne restreint pas à une catégorie. Le champ lexical (libération + cou = personne) est parfaitement cohérent.",
        axe2_voisins: "Les versets 14-16 poursuivent avec d'autres personnes vulnérables : l'orphelin proche et le pauvre dans la poussière. La raqaba (personne asservie) ouvre la série des personnes à aider. La progression est : personne asservie → orphelin → pauvre.",
        axe3_sourate: "La sourate construit un programme de vertu concrète. Libérer un être humain est le premier acte, le plus courageux et le plus coûteux. La suite descend vers des actes plus accessibles (nourrir). Le cou-personne est le premier bénéficiaire de la vertu.",
        axe4_coherence: "Le Coran utilise raqaba comme métonymie de la personne dans tous les contextes de libération : 2:177 (donner de ses biens pour les raqab), 4:92, 5:89, 58:3 (libérer une raqaba). L'usage est constant et univoque dans le Coran.",
        axe5_frequence: "Libérer une raqaba, c'est restaurer la dignité d'un être humain. C'est l'acte fondamental du khalifa : empêcher qu'un être humain soit réduit à un objet possédé par un autre."
      }
    }
  }, 2);

  // --- Traduction v13 ---
  await upsertVA(verse_id, {
    translation_arab: "Libérer un être humain",
    full_translation: "C'est délier un joug",
    segments: [
      { fr: "Libérer", pos: "N.MASDAR", phon: "fakku", arabic: "فَكُّ", word_key: "fkk", is_particle: false, sense_retenu: "libérer un captif", position: 1 },
      { fr: "un être humain", pos: "N.INDEF.GEN", phon: "raqabatin", arabic: "رَقَبَةٍ", word_key: "rqb", is_particle: false, sense_retenu: "cou (raqaba)", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale sans verbe — c'est une définition de l'obstacle mentionné aux versets 11-12. Le mot **fakku** est un masdar (nom d'action — une forme qui désigne l'acte de faire quelque chose) de la racine f-k-k. Le masdar exprime l'acte lui-même : l'acte de libérer. Il est au nominatif, ce qui en fait le sujet ou le prédicat de la phrase.

Le mot **raqabatin** est un nom indéfini au génitif (une forme qui indique qu'il dépend du masdar). La raqaba signifie le cou — par métonymie classique en arabe, le cou désigne la personne entière, car c'est sur le cou que se posent les chaînes et les jougs. L'indéfini (sans al-) signifie « un cou quelconque » — n'importe quel être humain asservi.

§JUSTIFICATION§
**Libérer** — Le sens retenu est « libérer un captif ». Le mot « libérer » est choisi car la racine f-k-k dans le contexte de raqaba signifie détacher quelqu'un de ses liens. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), fakka signifie libérer ce qui est retenu par un lien d'obligation. L'alternative « séparer » est écartée car elle est trop mécanique et neutre — on sépare des objets, on libère des personnes. L'alternative « détacher » est possible mais « libérer » porte mieux la charge morale de l'acte.

**un être humain** — Le sens retenu est « cou (raqaba) ». Le choix de « un être humain » plutôt que « un cou » vient de la métonymie : en français courant, « libérer un cou » n'a pas de sens. La métonymie arabe (le cou = la personne) est rendue directement par « un être humain ». L'alternative « un esclave » est trop restrictive — le texte dit raqaba (cou, personne), pas abd (esclave). Le texte ne précise pas la nature de l'asservissement.

§CRITIQUE§
Hamidullah traduit « C'est délier un joug ». Cette traduction ajoute le mot « joug » qui n'est pas dans le texte — le texte dit raqaba (cou, personne), pas nîr (joug). Le choix de « délier un joug » est une interprétation qui déplace l'attention de la personne libérée vers l'instrument d'oppression. Le texte met la personne au centre : c'est un cou (un être humain) que l'on libère, pas un joug que l'on retire.`
  });

  console.log('  v13 DONE');
}

// ============================================================
// VERSET 90:14 — أَوْ إِطْعَـٰمٌ فِى يَوْمٍ ذِى مَسْغَبَةٍ
// "Ou nourrir en un jour de famine"
// ============================================================
async function verse90_14() {
  console.log('\n=== VERSET 90:14 — أَوْ إِطْعَـٰمٌ فِى يَوْمٍ ذِى مَسْغَبَةٍ ===');
  const verse_id = 6037;

  // ---- tem (طعم) — id=577 — "nourrir" ----
  // Forme: masdar forme IV iṭʿām (l'acte de nourrir)
  await upsertVWA(verse_id, 'tem', 'nourriture', {
    sense_chosen: "nourriture",
    concept_chosen: "Gustation/Nourriture",
    concepts: {
      "Gustation/Nourriture": {
        status: "retenu",
        senses: ["goût", "nourriture", "manger", "saveur"],
        proof_ctx: "Le sens retenu est « Gustation/Nourriture ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ṭ-ʿ-m couvre tout le champ de la nourriture et du goût. Le masdar de la forme IV (iṭʿām) signifie l'acte de nourrir — la forme IV ajoute la causalité : faire manger, donner à manger. L'iṭʿām est un acte extérieur et directionnel : la nourriture sort de celui qui nourrit et atteint celui qui est nourri. C'est un acte de don concret et mesurable. Le verset utilise le masdar (nom d'action), pas le verbe — c'est l'acte de nourrir en tant que principe, comme définition de l'obstacle moral. Il n'y a qu'un seul regroupement de sens pour cette racine, tous les sens tournent autour de la nourriture.",
        axe1_verset: "Le verset dit « ou nourrir en un jour possesseur de famine ». Le masdar iṭʿām est au nominatif indéfini — il désigne l'acte de nourrir comme deuxième composante de l'obstacle. Le champ lexical est : nourrir + jour + famine. L'acte de nourrir est placé dans un contexte de crise (jour de famine), ce qui en augmente la valeur et la difficulté.",
        axe2_voisins: "Le verset 13 donnait la première composante de l'obstacle : libérer un être humain. Le verset 14 ajoute la deuxième : nourrir en temps de famine. Les versets 15-16 préciseront qui nourrir : l'orphelin proche et le pauvre dans la poussière. La progression est : libérer → nourrir → spécifier les bénéficiaires.",
        axe3_sourate: "La sourate oppose la dépense vantarde (v6 : il dit avoir dilapidé une richesse abondante) à la dépense vertueuse (v14 : nourrir en temps de famine). La même richesse que l'arrogant dilapide par ego pourrait être utilisée pour nourrir les affamés. Le contraste est le thème central de la sourate.",
        axe4_coherence: "Le Coran insiste sur le devoir de nourrir : en 76:8 « et ils nourrissent, par amour pour Lui, le pauvre, l'orphelin et le prisonnier ». En 107:3 « et qui n'encourage pas à nourrir le pauvre ». Le refus de nourrir est présenté comme un signe de rejet de la vérité. L'acte de nourrir est un marqueur de foi dans le Coran.",
        axe5_frequence: "Nourrir les affamés en temps de crise est un acte fondamental du khalifa. Le khalifa est responsable de la survie de sa communauté. En période de famine, celui qui possède des biens et refuse de nourrir trahit sa mission de justice et de civilisation."
      }
    }
  }, 2);

  // ---- ywm (يوم) — id=257 — "jour" ----
  // Forme: nom indéfini génitif yawmin (un jour)
  await upsertVWA(verse_id, 'ywm', 'jour', {
    sense_chosen: "jour",
    concept_chosen: "Temps/Période",
    concepts: {
      "Temps/Période": {
        status: "retenu",
        senses: ["jour", "journée", "temps", "période"],
        proof_ctx: "Le sens retenu est « Temps/Période ». D'après les sources étymologiques, yawm signifie le jour comme unité de temps. Ici, yawmin est indéfini au génitif (après fī = dans) : « dans un jour ». L'expression « yawmin dhī masghaba » (un jour possesseur de famine) utilise le jour comme cadre temporel d'une crise. Le jour n'est pas un événement marquant en soi — c'est le cadre dans lequel la famine se produit. L'indéfini (un jour) signifie n'importe quel jour de famine, pas un jour spécifique.",
        axe1_verset: "Le mot yawmin est au génitif indéfini après la préposition fī (dans). Le champ lexical est : nourrir + dans + jour + famine. Le jour est le cadre temporel de l'acte de nourrir — il situe l'acte dans un moment de crise. L'adjectif dhī (possesseur de) qualifie le jour comme porteur de famine.",
        axe2_voisins: "Le jour de famine est le contexte dans lequel les actes de vertu des versets 15-16 prennent tout leur sens. Nourrir n'importe quand est bien, mais nourrir un jour de famine est héroïque. Le contexte temporel amplifie la valeur de l'acte.",
        axe3_sourate: "La sourate oppose la richesse gaspillée par vantardise (v6) à la richesse investie dans la survie des autres en temps de crise (v14). Le jour de famine est le moment où la richesse révèle sa vraie utilité.",
        axe4_coherence: "Le Coran utilise yawm dans de nombreux contextes de jugement et d'épreuve. Le jour de famine est une épreuve terrestre qui teste la générosité de l'être humain, comme le Jour du jugement teste ses actes.",
        axe5_frequence: "Le khalifa est celui qui agit au bon moment — quand la crise frappe, il mobilise ses ressources pour nourrir les affamés. Le jour de famine est le test ultime de la mission du khalifa."
      },
      "Événement/Moment marquant": {
        status: "peu_probable",
        senses: ["événement", "bataille", "jour de combat", "jour marquant"],
        proof_ctx: "Le jour marquant est un événement historique précis. Or le verset parle d'un jour de famine indéfini (yawmin, sans al-) — n'importe quel jour de famine, pas un événement historique. Distinction : le jour-période est un cadre temporel neutre, le jour-événement est un moment historique précis.",
        axe1_verset: "L'indéfini (un jour) empêche l'identification à un événement précis. Le champ lexical (nourrir + famine) oriente vers un cadre de crise, pas vers un événement historique.",
        axe2_voisins: "Le passage décrit des actes de vertu généraux (libérer, nourrir), pas des événements historiques ponctuels.",
        axe3_sourate: "La sourate donne des principes moraux permanents, pas une chronique d'événements.",
        axe4_coherence: "Le Coran distingue yawm al-qiyāma (jour précis du jugement) des jours indéfinis comme ici. L'indéfini confirme le sens de période générique.",
        axe5_frequence: "Le khalifa agit dans tous les jours de crise, pas seulement lors d'événements marquants."
      }
    }
  }, 4);

  // ---- sghb (سغب) — id=2632 — "famine" ----
  // Forme: nom masghaba (lieu/temps de faim) au génitif indéfini
  await upsertVWA(verse_id, 'sghb', 'avoir faim', {
    sense_chosen: "avoir faim",
    concept_chosen: "Faim/Famine",
    concepts: {
      "Faim/Famine": {
        status: "retenu",
        senses: ["avoir faim", "faim", "faim accompagnée de fatigue", "jour de famine", "être affamé", "entrer dans un état de faim"],
        proof_ctx: "Le sens retenu est « Faim/Famine ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), saghiba signifie avoir faim, souffrir de la faim. Le nom masghaba est un nom de lieu/temps (une forme maf'ala qui désigne le lieu ou le moment où la faim se produit) : « lieu/temps de famine ». La faim est un état intérieur de manque qui affaiblit le corps. Combinée avec « jour possesseur de » (yawmin dhī), la masghaba qualifie le jour : c'est un jour caractérisé par la famine. D'après les sources étymologiques, la faim dans cette racine s'accompagne souvent de fatigue — c'est une privation totale et épuisante. Distinction avec « Soif » : la soif est un sens secondaire rare, et le contexte (nourrir = donner à manger) confirme qu'il s'agit de faim, pas de soif.",
        axe1_verset: "Le mot masghaba est un nom au génitif après dhī (possesseur de). Le champ lexical est : nourrir + jour + famine. L'expression « yawmin dhī masghaba » signifie littéralement « un jour possesseur de famine » — le jour est caractérisé, dominé par la famine. Le verbe iṭʿām (nourrir) est directement lié à la famine : on nourrit parce qu'il y a famine.",
        axe2_voisins: "La famine est le contexte de crise dans lequel les actes de vertu des versets 15-16 prennent leur sens. Nourrir un orphelin ou un pauvre en temps de famine est doublement méritoire : la nourriture est rare et le don coûte plus cher.",
        axe3_sourate: "La sourate oppose la dilapidation de la richesse par vantardise (v6) à l'utilisation de la richesse pour combattre la famine (v14). La famine est le test concret qui révèle si l'être humain utilise ses biens pour lui-même ou pour les autres.",
        axe4_coherence: "Le Coran utilise la racine s-gh-b uniquement ici (90:14). Mais le thème de la faim et de la nécessité de nourrir revient constamment : en 106:4, Dieu protège les Quraysh de la faim (jūʿ). En 76:8, nourrir malgré le besoin est l'acte suprême de vertu. La famine est toujours présentée comme un test de générosité.",
        axe5_frequence: "La famine est la condition extrême qui teste le khalifa. Celui qui possède des biens en temps de famine et refuse de les partager trahit sa mission fondamentale de justice et de civilisation."
      },
      "Soif": {
        status: "nul",
        senses: ["avoir soif (rare)"],
        proof_ctx: "Sens marginal et rare. Le contexte est iṭʿām (nourrir = donner à manger), pas isqāʾ (abreuver). La famine est le sens évident."
      }
    }
  }, 6);

  // --- Traduction v14 ---
  await upsertVA(verse_id, {
    translation_arab: "Ou nourrir en un jour de famine",
    full_translation: "ou nourrir, en un jour de famine",
    segments: [
      { fr: "Ou", pos: "CONJ", phon: "aw", arabic: "أَوْ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "nourrir", pos: "N.MASDAR.IV", phon: "iṭʿām", arabic: "إِطْعَـٰمٌ", word_key: "tem", is_particle: false, sense_retenu: "nourriture", position: 2 },
      { fr: "en", pos: "PREP", phon: "fī", arabic: "فِى", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: "un jour", pos: "N.INDEF.GEN", phon: "yawmin", arabic: "يَوْمٍ", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 4 },
      { fr: "de", pos: "ADJ", phon: "dhī", arabic: "ذِى", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
      { fr: "famine", pos: "N.INDEF.GEN", phon: "masghaba", arabic: "مَسْغَبَةٍ", word_key: "sghb", is_particle: false, sense_retenu: "avoir faim", position: 6 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par **aw** (ou) — il introduit la deuxième composante de l'obstacle, en alternative ou en complément de la première (libérer un être humain). Le masdar **iṭʿām** est un nom d'action de la forme IV de la racine ṭ-ʿ-m — la forme IV est causative : faire manger, donner à manger. Le masdar désigne l'acte lui-même : l'acte de nourrir.

La préposition **fī** (dans/en) introduit le cadre temporel. Le mot **yawmin** (un jour) est indéfini au génitif — n'importe quel jour, pas un jour précis. L'adjectif **dhī** est un nom signifiant « possesseur de » — il qualifie le jour comme porteur de famine. Le mot **masghaba** est un nom de lieu/temps (forme maf'ala de la racine s-gh-b) qui signifie le lieu ou le temps de la faim.

L'expression complète « yawmin dhī masghaba » signifie littéralement « un jour possesseur de famine » — un jour dominé par la faim. C'est un jour de crise où la nourriture manque pour tous.

§JUSTIFICATION§
**nourrir** — Le sens retenu est « nourriture ». Le mot « nourrir » traduit le masdar iṭʿām (l'acte de donner à manger). L'alternative « goûter » est écartée car le masdar de la forme IV est causatif : c'est faire goûter/manger, pas goûter soi-même. L'alternative « alimenter » est possible mais « nourrir » est plus courant en français.

**un jour** — Le sens retenu est « jour » (temps/période). L'indéfini (yawmin) est rendu par « un jour » — n'importe quel jour de famine.

**famine** — Le sens retenu est « avoir faim ». Le mot « famine » est choisi car masghaba désigne le temps/lieu de la faim collective. L'alternative « faim » est possible mais « famine » porte mieux l'idée de crise collective que le nom de lieu/temps masghaba implique.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « ou nourrir, en un jour de famine » — traduction fidèle au texte. La seule nuance est que certaines traductions ajoutent « le prochain » ou « autrui » comme complément d'objet, alors que le texte ne précise pas encore qui est nourri (c'est les versets 15-16 qui le disent).`
  });

  console.log('  v14 DONE');
}

// ============================================================
// VERSET 90:15 — يَتِيمًا ذَا مَقْرَبَةٍ
// "Un orphelin de parenté proche"
// ============================================================
async function verse90_15() {
  console.log('\n=== VERSET 90:15 — يَتِيمًا ذَا مَقْرَبَةٍ ===');
  const verse_id = 6038;

  // ---- ytm (يتم) — id=664 — "orphelin" ----
  // Forme: nom indéfini accusatif yatīman (un orphelin)
  await upsertVWA(verse_id, 'ytm', 'être orphelin', {
    sense_chosen: "être orphelin",
    concept_chosen: "Orphelinat/Solitude",
    concepts: {
      "Orphelinat/Solitude": {
        status: "retenu",
        senses: ["être orphelin", "orphelin", "unique"],
        proof_ctx: "Le sens retenu est « Orphelinat/Solitude ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), yatima signifie être privé de père dans l'enfance. Le yatīm est l'enfant qui a perdu son père avant la puberté — il est seul, sans protection paternelle. L'orphelinat est un état subi, permanent tant que l'enfant n'a pas atteint l'âge adulte, et qui crée une vulnérabilité fondamentale. Le mot est à l'accusatif indéfini (yatīman) — c'est le complément d'objet du masdar iṭʿām du verset précédent : « nourrir... un orphelin ». L'indéfini signifie n'importe quel orphelin. Il n'y a qu'un seul regroupement de sens pour cette racine — tous tournent autour de la perte et de la solitude.",
        axe1_verset: "Le verset dit « un orphelin possesseur de parenté proche ». Le mot yatīman est à l'accusatif indéfini — complément d'objet de iṭʿām (v14 : nourrir). Le champ lexical est : orphelin + parenté + proximité. L'orphelin est qualifié par sa proximité familiale (dhā maqraba) — ce n'est pas n'importe quel orphelin, c'est un orphelin de la famille proche.",
        axe2_voisins: "Le verset 14 disait « nourrir en un jour de famine ». Le verset 15 précise qui nourrir en premier : l'orphelin de parenté proche. Le verset 16 ajoutera le pauvre dans la poussière. La progression est : nourrir → l'orphelin proche → le pauvre étranger. On commence par la famille avant d'élargir.",
        axe3_sourate: "La sourate définit l'obstacle moral (v11-12) par des actes concrets : libérer (v13), nourrir l'orphelin (v15), nourrir le pauvre (v16). L'orphelin est au centre du programme de vertu — c'est la personne la plus vulnérable de la communauté, celle qui a perdu sa protection naturelle.",
        axe4_coherence: "Le Coran mentionne l'orphelin dans de nombreux versets : 2:83, 2:177, 2:215, 4:2, 4:6, 4:8, 4:10, 4:36, 93:9, 107:2. La protection de l'orphelin est un commandement constant. En 93:9 « quant à l'orphelin, ne le maltraite pas ». En 107:2 « c'est celui qui repousse l'orphelin ». Le Coran fait de l'orphelin le test moral de la communauté.",
        axe5_frequence: "Protéger et nourrir l'orphelin est un acte fondamental du khalifa. L'orphelin est celui qui a perdu sa protection naturelle — le khalifa doit combler ce vide en assurant justice et subsistance aux plus vulnérables."
      }
    }
  }, 1);

  // ---- qrb (قرب) — id=467 — "parenté proche" ----
  // Forme: nom maqraba (lieu/état de proximité) au génitif indéfini
  await upsertVWA(verse_id, 'qrb', 'être proche', {
    sense_chosen: "être proche",
    concept_chosen: "Proximité/Rapprochement",
    concepts: {
      "Proximité/Rapprochement": {
        status: "retenu",
        senses: ["être proche", "s'approcher", "rapprocher"],
        proof_ctx: "Le sens retenu est « Proximité/Rapprochement ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qaruba signifie être à courte distance. Le nom maqraba est un nom de lieu/état (forme maf'ala) qui signifie l'état de proximité, la parenté proche. Combiné avec dhā (possesseur de), « dhā maqraba » qualifie l'orphelin : c'est un orphelin qui possède un lien de parenté proche. La maqraba n'est pas une proximité spatiale mais relationnelle — c'est le lien familial qui unit l'orphelin à celui qui devrait le nourrir. Distinction avec « Offrande/Sacrifice » : le sacrifice est un acte de rapprochement rituel vers Dieu. Ici, la proximité est un lien de parenté humain, pas un acte rituel. Distinction avec « Parenté » : le sens « parent proche » est très proche, mais la forme maqraba (nom de lieu/état) oriente vers l'état de proximité plutôt que vers la personne elle-même.",
        axe1_verset: "Le verset dit « un orphelin possesseur de parenté proche ». Le mot maqraba est au génitif après dhā. Le champ lexical est : orphelin + parenté + proximité. La proximité qualifie l'orphelin — elle indique que la priorité est de nourrir d'abord les orphelins de sa propre famille. La parenté crée une obligation supplémentaire.",
        axe2_voisins: "Le verset 14 posait le cadre (nourrir en temps de famine). Le verset 15 précise le premier bénéficiaire : l'orphelin proche. Le verset 16 ajoutera le pauvre étranger (dans la poussière). La progression va du proche au lointain — on commence par sa famille avant d'aider les étrangers.",
        axe3_sourate: "La sourate construit un programme moral ordonné. La proximité familiale est le premier cercle de responsabilité. La sourate ne dit pas de négliger les étrangers (v16 les inclut), mais de commencer par les proches.",
        axe4_coherence: "Le Coran établit un ordre de priorité dans la bienfaisance : 2:177 liste « les proches, les orphelins, les pauvres, les voyageurs ». En 2:215, même ordre : « les parents, les proches, les orphelins, les pauvres, les voyageurs ». La priorité aux proches est constante dans le Coran.",
        axe5_frequence: "Le khalifa commence par sa propre famille : c'est le premier cercle de justice. Négliger ses proches orphelins pour aider des étrangers est un désordre moral. La mission du khalifa s'exerce en cercles concentriques : famille → communauté → humanité."
      },
      "Offrande/Sacrifice": {
        status: "nul",
        senses: ["sacrifice", "offrande"],
        proof_ctx: "Le sacrifice est un acte rituel de rapprochement vers Dieu. Le verset parle de parenté familiale (maqraba comme lien de parenté), pas d'un acte rituel. Aucun rapport avec le contexte de nourrir un orphelin."
      },
      "Parenté": {
        status: "probable",
        senses: ["parent proche"],
        proof_ctx: "Le sens « parent proche » est très proche du sens retenu. La différence est que « Proximité/Rapprochement » décrit l'état de proximité (la maqraba comme qualité), tandis que « Parenté » désigne la personne elle-même (le parent). La forme maqraba (nom de lieu/état) oriente vers l'état de proximité plutôt que vers la personne. En pratique, les deux sens convergent : l'orphelin est proche par le lien de parenté.",
        axe1_verset: "L'expression dhā maqraba (possesseur de proximité) utilise un nom d'état, pas un nom de personne. Le champ lexical oriente vers la qualité de proximité qui caractérise l'orphelin, pas vers l'identité d'un parent spécifique.",
        axe2_voisins: "Le passage décrit des qualités des bénéficiaires : l'orphelin est qualifié par sa proximité (v15), le pauvre par son dénuement (v16). Ce sont des états qui caractérisent les personnes, pas des identités fixes.",
        axe3_sourate: "La sourate utilise des qualificatifs pour décrire les bénéficiaires de la vertu. La proximité familiale est la qualité qui crée l'obligation morale première.",
        axe4_coherence: "Le Coran utilise dhū qurbā (possesseur de parenté) dans de nombreux versets (2:177, 4:36, 8:41) pour désigner les proches par le sang. La construction est identique ici avec maqraba.",
        axe5_frequence: "Que l'on retienne « proximité » ou « parenté », le sens pratique est le même : l'orphelin de la famille proche est la priorité. Les deux sens convergent vers la même obligation morale."
      }
    }
  }, 3);

  // --- Traduction v15 ---
  await upsertVA(verse_id, {
    translation_arab: "Un orphelin de parenté proche",
    full_translation: "un orphelin proche parent",
    segments: [
      { fr: "Un orphelin", pos: "N.INDEF.ACC", phon: "yatīman", arabic: "يَتِيمًا", word_key: "ytm", is_particle: false, sense_retenu: "être orphelin", position: 1 },
      { fr: "de parenté", pos: "ADJ", phon: "dhā", arabic: "ذَا", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "proche", pos: "N.INDEF.GEN", phon: "maqraba", arabic: "مَقْرَبَةٍ", word_key: "qrb", is_particle: false, sense_retenu: "être proche", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Ce verset est syntaxiquement la suite du verset 14 : « nourrir en un jour de famine **un orphelin de parenté proche** ». Le mot **yatīman** est à l'accusatif indéfini (une forme qui indique le complément d'objet) — il est complément du masdar iṭʿām (nourrir) du verset 14.

L'adjectif **dhā** signifie « possesseur de » — c'est un nom de la catégorie des cinq noms (al-asmāʾ al-khamsa) qui se décline avec les voyelles longues. À l'accusatif, il prend la forme dhā. Il qualifie l'orphelin en lui attribuant une qualité.

Le mot **maqraba** est un nom de lieu/état de la racine q-r-b (forme maf'ala). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la maqraba est l'état de proximité familiale, le lien de parenté. L'expression « dhā maqraba » signifie « possesseur de parenté proche » — un orphelin qui est de ta propre famille.

§JUSTIFICATION§
**Un orphelin** — Le sens retenu est « être orphelin ». Le mot « orphelin » est le terme français courant pour yatīm. Pas d'alternative à écarter — le sens est univoque.

**de parenté proche** — Le sens retenu est « être proche ». L'expression « de parenté proche » rend l'idée de maqraba (état de proximité familiale). L'alternative « apparenté » est possible mais « parenté proche » est plus explicite en français courant. L'alternative « voisin » est écartée car la maqraba est un lien de sang, pas de voisinage géographique.

§CRITIQUE§
Hamidullah traduit « un orphelin proche parent ». C'est fidèle au texte. Notre traduction « de parenté proche » est équivalente. Les traductions courantes donnent sensiblement le même sens pour ce verset.`
  });

  console.log('  v15 DONE');
}

// ============================================================
// MAIN
// ============================================================
(async () => {
  console.log('=== PIPELINE S90 PART 3 — VERSETS 11-15 ===');
  await verse90_11();
  await verse90_12();
  await verse90_13();
  await verse90_14();
  await verse90_15();
  console.log('\n=== PART 3 TERMINÉE ===');
})();
