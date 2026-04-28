// Pipeline Sourate 96 (Al-Alaq) — Partie 4: Versets 17-19 + Daily phrases
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

async function verse96_17() {
  console.log('\n=== VERSET 96:17 — فَلْيَدْعُ نَادِيَهُۥ ===');
  const verse_id = 6123;

  // ---- DEW (دعو) — id=381 — "appeler" ----
  // Forme: jussif 3ème pers. fal-yad'u — qu'il appelle donc
  await upsertVWA(verse_id, 'dew', 'appeler', {
    sense_chosen: "appeler",
    concept_chosen: "Appel/Invocation",
    concepts: {
      "Appel/Invocation": {
        status: "retenu",
        senses: ["appeler", "invoquer", "prier", "demander", "inviter"],
        proof_ctx: "Le sens retenu est « Appel/Invocation ». Le Lane's donne : diriger sa voix vers quelqu'un pour attirer son attention. L'appel sort de celui qui appelle et atteint celui qui est appelé — c'est directionnel. La forme est un jussif (fal-yad'u — qu'il appelle) qui exprime un défi : le transgresseur est invité de manière sarcastique à appeler du renfort. Le fā' (donc) marque la conséquence ironique : puisqu'il se croit fort, qu'il appelle son assemblée. Distinction avec « Prétention/Revendication » : la prétention est une affirmation, l'appel est un cri vers l'autre. Le verset parle d'appeler des renforts, pas de revendiquer un statut.",
        axe1_verset: "Le verset dit « qu'il appelle donc son assemblée ». Le verbe yad'u est un jussif (une forme qui exprime un ordre à la troisième personne) précédé de fal- (qu'il... donc). Le complément nādiyahu (son assemblée) est l'objet de l'appel. Le défi est ironique : le transgresseur peut bien appeler toute son assemblée, ça ne suffira pas.",
        axe2_voisins: "Le verset 18 répond : « nous appellerons les gardes ». Les deux versets forment une confrontation : son assemblée vs nos gardes. L'appel du transgresseur est futile face à l'appel divin.",
        axe3_sourate: "L'appel au renfort est le dernier acte du transgresseur avant la conclusion (v19). Il cherche du soutien humain contre la menace divine — un acte désespéré et futile.",
        axe4_coherence: "Le Coran décrit les transgresseurs appelant au secours sans être entendus : « Appelez vos associés, puis rusez contre moi » (7:195). L'appel au renfort contre Dieu est toujours vain.",
        axe5_frequence: "Le khalifa qui appelle les hommes contre Dieu trahit sa mission. L'appel au renfort humain contre l'autorité divine est l'acte ultime de la transgression."
      },
      "Prétention/Revendication": {
        status: "nul",
        senses: ["prétendre", "revendiquer"],
        proof_ctx: "Le verset parle d'un appel concret (appeler des renforts), pas d'une prétention abstraite."
      }
    }
  }, 1);

  // ---- NDW (ندو) — id=946 — "assemblée" ----
  // Forme: nom avec pronom possessif nādiyahu — son assemblée
  await upsertVWA(verse_id, 'ndw', 'assemblée', {
    sense_chosen: "assemblée",
    concept_chosen: "Assemblée/Réunion",
    concepts: {
      "Assemblée/Réunion": {
        status: "retenu",
        senses: ["assemblée (nadi)", "lieu de réunion"],
        proof_ctx: "Le sens retenu est « Assemblée/Réunion ». Le Lane's donne : le nādī est le lieu où les gens se rassemblent pour délibérer. C'est un espace de pouvoir social — celui qui a une assemblée a des alliés. Le pronom possessif -hu (son) personnalise : son assemblée, ses gens, son cercle de pouvoir. Distinction avec « Appel/Invitation » : l'appel est l'acte de la racine (nādā), mais le nom nādī est le lieu du rassemblement. Le verset utilise le nom, pas le verbe.",
        axe1_verset: "Le verset dit « qu'il appelle son assemblée ». Le mot nādiyahu est le complément d'objet : ce que le transgresseur appelle, c'est son groupe de soutien. Le champ lexical appeler + assemblée décrit un recours aux alliés humains face à la menace divine.",
        axe2_voisins: "Le verset 18 oppose les gardes divins à l'assemblée humaine. La confrontation assemblée vs gardes montre la disproportion des forces.",
        axe3_sourate: "L'assemblée représente le pouvoir social du transgresseur — son réseau, ses alliés. La sourate montre que ce pouvoir est dérisoire face à l'autorité divine.",
        axe4_coherence: "Le Coran mentionne le nādī dans la sourate 29:29 (l'assemblée de Lot) et ici. L'assemblée est un lieu de pouvoir qui peut servir le bien ou le mal.",
        axe5_frequence: "L'assemblée du khalifa devrait être un lieu de justice. Quand elle devient un lieu de soutien à la transgression, elle perd sa légitimité."
      },
      "Appel/Invitation": {
        status: "nul",
        senses: ["appeler", "inviter"],
        proof_ctx: "Le verbe est porté par la racine d-'-w dans le même verset (yad'u). Le nom nādī est le lieu, pas l'acte d'appeler."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "فَلْيَدْعُ نَادِيَهُۥ",
    full_translation: "Qu'il appelle donc son assemblée",
    segments: [
      { fr: "Qu'il appelle donc", pos: "verbe", phon: "fal-yad'u", arabic: "فَلْيَدْعُ", word_key: "dew", is_particle: false, sense_retenu: "appeler", position: 1 },
      { fr: "son assemblée", pos: "nom", phon: "nādiyahu", arabic: "نَادِيَهُۥ", word_key: "ndw", is_particle: false, sense_retenu: "assemblée", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
La particule fa (donc) marque la conséquence. Le lām suivi du jussif yad'u (qu'il appelle) forme un ordre à la troisième personne — c'est un défi ironique. Le verbe yad'u est un jussif (une forme apocopée qui exprime un ordre indirect) de la racine d-'-w (appeler). Le complément nādiyahu est composé de nādiya (assemblée, du verbe nādā = appeler) et du pronom possessif -hu (son). Le nādī est le lieu de rassemblement des notables arabes — appeler son nādī, c'est mobiliser son réseau de pouvoir.

§JUSTIFICATION§
**qu'il appelle** — Le jussif fal-yad'u traduit le défi ironique. L'alternative « qu'il convoque » est trop formel.

**assemblée** — Le sens retenu est « assemblée ». Le mot « assemblée » traduit nādī comme lieu de rassemblement. L'alternative « clan » est trop familial. L'alternative « conseil » est trop institutionnel.

§CRITIQUE§
Les traductions courantes donnent « son assemblée » (Hamidullah) ou « ses gens ». Pas de divergence significative.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:17 — TERMINÉ');
  console.log('  dew → "appeler" | ndw → "assemblée"');
  console.log('  Traduction : "Qu\'il appelle donc son assemblée"');
}

async function verse96_18() {
  console.log('\n=== VERSET 96:18 — سَنَدْعُ ٱلزَّبَانِيَةَ ===');
  const verse_id = 6124;

  // ---- DEW — "appeler" ----
  await upsertVWA(verse_id, 'dew', 'appeler', {
    sense_chosen: "appeler",
    concept_chosen: "Appel/Invocation",
    concepts: {
      "Appel/Invocation": {
        status: "retenu",
        senses: ["appeler", "invoquer"],
        proof_ctx: "Même concept qu'au verset 17. Ici la forme est un inaccompli à la première personne du pluriel (sa-nad'u — nous appellerons) avec la particule sa- (futur proche). La réponse divine au défi du transgresseur : tu appelles ton assemblée, nous appellerons les gardes. Le parallélisme yad'u (v17) / nad'u (v18) renforce la confrontation.",
        axe1_verset: "Le verset dit « nous appellerons les gardes ». Le verbe nad'u est un inaccompli précédé de sa- (bientôt). La première personne du pluriel (nous) est le « nous » divin de majesté. L'appel divin est la réponse à l'appel humain du verset 17.",
        axe2_voisins: "Les versets 17-18 forment un diptyque : son appel vs notre appel, son assemblée vs nos gardes. La disproportion est totale.",
        axe3_sourate: "La confrontation appel contre appel clôt la section punitive avant la conclusion du verset 19.",
        axe4_coherence: "Le Coran oppose régulièrement les forces humaines aux forces divines pour montrer la futilité de la résistance à Dieu.",
        axe5_frequence: "Les gardes divins sont la force ultime de justice — le khalifa qui transgresse sera confronté à une force qu'aucune assemblée humaine ne peut égaler."
      }
    }
  }, 1);

  // ---- ZBN (زبن) — id=2618 — "les gardes" ----
  // Forme: nom az-zabāniya — les gardes
  await upsertVWA(verse_id, 'zbn', 'gardes', {
    sense_chosen: "gardes",
    concept_chosen: "Garde/Surveillance brutale",
    concepts: {
      "Garde/Surveillance brutale": {
        status: "retenu",
        senses: ["gardiens", "agents de la force"],
        proof_ctx: "Le sens retenu est « Garde/Surveillance brutale ». Le Lane's donne : chez les Arabes classiques, les zabāniya sont les shuraṭ — les braves de l'armée ou les agents armés du préfet de police. Leur nom vient de la racine z-b-n (repousser) car leur fonction est de repousser, saisir et châtier. Ce sont des gardes dont la force est au service de l'autorité. Le mot est un pluriel sans singulier attesté de manière unanime (les Arabes classiques le considèrent comme un nom collectif). Distinction avec « Repoussement/Expulsion » : le repoussement est l'acte de la racine, les gardes sont les agents qui repoussent. Distinction avec « Tromperie/Duperie » : la duperie est un sens commercial de la racine sans rapport avec des gardes.",
        axe1_verset: "Le verset dit « nous appellerons les gardes ». Le mot az-zabāniya est défini par al- — les gardes par excellence, les forces d'ordre divines. Le champ lexical appeler + gardes décrit la mobilisation d'une force irrésistible face à l'assemblée humaine du transgresseur.",
        axe2_voisins: "Le verset 17 mobilisait l'assemblée humaine. Le verset 18 mobilise les gardes divins. La disproportion est le cœur du message : aucune force humaine ne résiste aux gardes de Dieu.",
        axe3_sourate: "Les gardes sont l'instrument de la punition annoncée au verset 15 (la saisie par le front). Ce sont eux qui exécuteront la sentence.",
        axe4_coherence: "Le mot zabāniya n'apparaît qu'ici dans le Coran. C'est un hapax qui souligne la gravité de la menace. Les gardes sont évoqués sans description — leur seule mention suffit.",
        axe5_frequence: "Les gardes représentent la force de justice divine. Le khalifa doit savoir que la transgression sera confrontée à une force supérieure à toute assemblée humaine."
      },
      "Repoussement/Expulsion": {
        status: "nul",
        senses: ["repousser", "expulser"],
        proof_ctx: "Le repoussement est l'acte de base de la racine. Le verset utilise le nom collectif zabāniya (les gardes), pas le verbe zabana (repousser)."
      },
      "Combat/Confrontation": {
        status: "nul",
        senses: ["lutter"],
        proof_ctx: "Le combat est un dérivé de la racine. Les gardes ne sont pas en combat — ils sont une force d'exécution unilatérale."
      },
      "Tromperie/Duperie": {
        status: "nul",
        senses: ["duper", "escroquer"],
        proof_ctx: "La duperie est un sens commercial de la racine sans aucun rapport avec les gardes."
      },
      "Orgueil/Fierté": {
        status: "nul",
        senses: ["orgueil"],
        proof_ctx: "L'orgueil est un état intérieur. Les gardes sont des agents extérieurs de la force."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "سَنَدْعُ ٱلزَّبَانِيَةَ",
    full_translation: "Nous appellerons les gardiens (de l'Enfer)",
    segments: [
      { fr: "Nous appellerons", pos: "verbe", phon: "sa-nad'u", arabic: "سَنَدْعُ", word_key: "dew", is_particle: false, sense_retenu: "appeler", position: 1 },
      { fr: "les gardes", pos: "nom", phon: "az-zabāniyata", arabic: "ٱلزَّبَانِيَةَ", word_key: "zbn", is_particle: false, sense_retenu: "gardiens", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
La particule sa- (bientôt, dans le futur) précède le verbe nad'u (nous appellerons) — un inaccompli à la première personne du pluriel. Le « nous » est le nous de majesté divin. Le complément az-zabāniyata est un nom défini à l'accusatif. Le mot zabāniya vient de la racine z-b-n (repousser). Le Lane's (Edward Lane, 1863) donne : chez les Arabes classiques, les zabāniya sont les braves de l'armée ou les agents armés de la police qui repoussent et saisissent. Ce sont des gardes dont la fonction est de réprimer par la force.

§JUSTIFICATION§
**appellerons** — Même racine que le verset 17. Le parallélisme est voulu : yad'u (qu'il appelle) / sa-nad'u (nous appellerons).

**gardes** — Le sens retenu est « gardes ». Le mot « gardes » traduit az-zabāniya par sa signification classique : des agents de la force qui repoussent et saisissent. L'alternative « gardiens de l'enfer » (Hamidullah) ajoute « de l'enfer » qui n'est pas dans le texte arabe. L'alternative « anges tourmenteurs » est une interprétation exégétique, pas un sens étymologique.

§CRITIQUE§
Hamidullah ajoute « (de l'Enfer) » entre parenthèses — cette précision vient des exégèses classiques qui identifient les zabāniya aux anges gardiens de l'enfer. Mais le texte arabe dit simplement « les zabāniya ». Le Lane's montre que le sens premier est « les braves de l'armée, les agents de la police ». Ajouter « de l'enfer » oriente l'interprétation vers l'au-delà alors que le texte peut se comprendre dans ce monde : Dieu mobilisera ses forces de l'ordre face à l'assemblée du transgresseur.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:18 — TERMINÉ');
  console.log('  dew → "appeler" | zbn → "gardes"');
  console.log('  Traduction : "Nous appellerons les gardes"');
}

async function verse96_19() {
  console.log('\n=== VERSET 96:19 — كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِب ===');
  const verse_id = 6125;

  // ---- TWE (طوع) — id=925 — "obéir" ----
  // Forme: jussif négatif forme IV lā tuṭi'hu — ne lui obéis pas
  await upsertVWA(verse_id, 'twe', 'obéir', {
    sense_chosen: "obéir",
    concept_chosen: "Obéissance/Soumission volontaire",
    concepts: {
      "Obéissance/Soumission volontaire": {
        status: "retenu",
        senses: ["obéir", "se soumettre volontairement", "consentir"],
        proof_ctx: "Le sens retenu est « Obéissance/Soumission volontaire ». Le Lane's donne : se conformer à un ordre par choix. La forme IV (aṭā'a) signifie obéir, la forme jussive négative (lā tuṭi') signifie « n'obéis pas ». L'interdiction est directe : ne pas obéir au transgresseur. L'obéissance est un acte volontaire — on choisit à qui on obéit. Distinction avec « Capacité/Pouvoir » : la capacité est l'aptitude à faire, pas l'acte d'obéir.",
        axe1_verset: "Le verset dit « non ! Ne lui obéis pas, et prosterne-toi et rapproche-toi ». Le verbe lā tuṭi'hu est un jussif négatif à la deuxième personne (ne lui obéis pas) — un ordre direct de désobéissance envers le transgresseur. Le pronom -hu (lui) renvoie à l'interdicteur des versets 9-16. Le champ lexical ne pas obéir + se prosterner + se rapprocher forme le programme de réponse à la transgression.",
        axe2_voisins: "Après le réquisitoire (v9-16) et la confrontation (v17-18), le verset 19 donne l'instruction finale. La sourate se clôt par trois impératifs : ne pas obéir, se prosterner, se rapprocher. C'est la réponse complète à la transgression.",
        axe3_sourate: "Le verset 19 clôt la sourate par un retour à l'action positive. Après le savoir (v1-5), la transgression (v6-16) et la confrontation (v17-18), la conclusion est pratique : ne pas obéir au transgresseur et se rapprocher de Dieu par la prosternation.",
        axe4_coherence: "Le Coran interdit l'obéissance aux désobéissants : « N'obéis pas aux mécréants » (25:52), « N'obéis pas à tout vil jureur » (68:10). La désobéissance au mal est un devoir.",
        axe5_frequence: "Le khalifa doit choisir à qui il obéit. Obéir au transgresseur, c'est trahir la mission. Désobéir au transgresseur et se prosterner devant Dieu, c'est accomplir la mission."
      },
      "Capacité/Pouvoir": {
        status: "nul",
        senses: ["être capable", "pouvoir"],
        proof_ctx: "La capacité est un état intérieur. Le verset parle d'un acte de désobéissance, pas d'une aptitude."
      }
    }
  }, 3);

  // ---- SJD (سجد) — id=448 — "se prosterner" ----
  // Forme: impératif usjud — prosterne-toi
  await upsertVWA(verse_id, 'sjd', 'se prosterner', {
    sense_chosen: "se prosterner",
    concept_chosen: "Prosternation/Adoration",
    concepts: {
      "Prosternation/Adoration": {
        status: "retenu",
        senses: ["se prosterner", "s'incliner", "adorer", "obéir"],
        proof_ctx: "Le sens retenu est « Prosternation/Adoration ». Le Lane's donne : s'incliner jusqu'au sol en signe de soumission totale. La prosternation est le geste ultime d'humilité — le front touche la terre. La forme est un impératif direct (usjud — prosterne-toi). Le verset 15 parlait de saisir le front du transgresseur — le verset 19 dit de poser le front au sol volontairement. Le contraste est saisissant : le front peut être saisi de force ou posé de gré.",
        axe1_verset: "Le verset dit « prosterne-toi et rapproche-toi ». L'impératif usjud est un ordre direct de prosternation. Le champ lexical se prosterner + se rapprocher forme un mouvement descendant puis rapprochant : on s'abaisse devant Dieu (prosternation) et on se rapproche de lui.",
        axe2_voisins: "Le verset 10 parlait d'un serviteur qui prie. Le verset 19 ordonne la prosternation — la forme la plus intense de la prière. La sourate commence par « lis » (v1) et finit par « prosterne-toi » — de la connaissance à la pratique.",
        axe3_sourate: "La prosternation est la réponse finale à la transgression. Là où le transgresseur se dressait fièrement (v7), le croyant s'abaisse volontairement. La prosternation est l'antithèse de l'autosuffisance.",
        axe4_coherence: "La prosternation est ordonnée dans de nombreux versets coraniques. Ce verset est un verset de prosternation rituelle (sajda tilāwa) — les musulmans se prosternent quand ils le lisent.",
        axe5_frequence: "La prosternation est l'acte par lequel le khalifa reconnaît sa dépendance. C'est le geste qui empêche la transgression — celui qui se prosterne ne peut pas se croire autosuffisant."
      }
    }
  }, 4);

  // ---- QRB (قرب) — id=467 — "se rapprocher" ----
  // Forme: impératif forme VIII iqtarib — rapproche-toi
  await upsertVWA(verse_id, 'qrb', 'se rapprocher', {
    sense_chosen: "se rapprocher",
    concept_chosen: "Proximité/Rapprochement",
    concepts: {
      "Proximité/Rapprochement": {
        status: "retenu",
        senses: ["être proche", "s'approcher", "rapprocher"],
        proof_ctx: "Le sens retenu est « Proximité/Rapprochement ». Le Lane's donne : être à courte distance, s'approcher. La forme VIII (iqtaraba) ajoute la dimension de recherche active de la proximité — on se rapproche volontairement. L'impératif iqtarib (rapproche-toi) est le dernier mot de la sourate — c'est le message final. Après la désobéissance au transgresseur et la prosternation, le rapprochement de Dieu est l'aboutissement. Distinction avec « Offrande/Sacrifice » : le sacrifice (qurbān) est un moyen de rapprochement, mais le verset ne parle pas de sacrifice — il parle du rapprochement lui-même. Distinction avec « Parenté » : la parenté est un sens dérivé sans rapport avec le contexte.",
        axe1_verset: "Le verset dit « rapproche-toi ». L'impératif iqtarib (forme VIII) est le dernier mot de la sourate. Le rapprochement est l'objectif final : tout le discours de la sourate mène à ce mot. Le champ lexical ne pas obéir + se prosterner + se rapprocher forme une progression : libération (ne pas obéir au transgresseur) → humilité (prosternation) → union (rapprochement de Dieu).",
        axe2_voisins: "Le verset 8 disait « c'est vers ton seigneur qu'est le retour ». Le verset 19 dit « rapproche-toi ». Le retour est la destination inévitable — le rapprochement est l'acte volontaire. Les deux disent la même chose sous deux angles : le retour est objectif, le rapprochement est subjectif.",
        axe3_sourate: "Le rapprochement clôt la sourate en inversant le mouvement du verset 13 (se détourner). Le transgresseur se détourne — le croyant se rapproche. La sourate est un arc : création (v1) → transgression (v6) → retour (v8) → rapprochement (v19).",
        axe4_coherence: "Le Coran associe la prosternation au rapprochement : « Prosterne-toi et rapproche-toi » est unique dans cette combinaison exacte. Le rapprochement de Dieu est un thème coranique majeur : « Quand mes serviteurs t'interrogent sur moi — je suis proche » (2:186).",
        axe5_frequence: "Le rapprochement de Dieu est le but ultime de la mission du khalifa. La prosternation est le moyen, le rapprochement est la fin. Le khalifa qui se rapproche de Dieu accomplit sa mission dans sa forme la plus pure."
      },
      "Offrande/Sacrifice": {
        status: "nul",
        senses: ["sacrifice", "offrande"],
        proof_ctx: "Le sacrifice est un moyen de rapprochement. Le verset parle du rapprochement lui-même, pas du moyen."
      },
      "Parenté": {
        status: "nul",
        senses: ["parent proche"],
        proof_ctx: "La parenté est un lien de sang sans rapport avec le contexte du rapprochement de Dieu."
      }
    }
  }, 5);

  await sb.from('verse_analyses').update({
    translation_arab: "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِب ۩",
    full_translation: "Non! Ne lui obéis pas; mais prosterne-toi et rapproche-toi",
    segments: [
      { fr: "Non !", pos: "particule", phon: "kallā", arabic: "كَلَّا", is_particle: true, position: 1 },
      { fr: "Ne", pos: "particule", phon: "lā", arabic: "لَا", is_particle: true, position: 2 },
      { fr: "lui obéis pas", pos: "verbe", phon: "tuṭi'hu", arabic: "تُطِعْهُ", word_key: "twe", is_particle: false, sense_retenu: "obéir", position: 3 },
      { fr: "et prosterne-toi", pos: "verbe", phon: "wa-usjud", arabic: "وَٱسْجُدْ", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 4 },
      { fr: "et rapproche-toi", pos: "verbe", phon: "wa-iqtarib", arabic: "وَٱقْتَرِب", word_key: "qrb", is_particle: false, sense_retenu: "se rapprocher", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par kallā (non !), la troisième occurrence dans la sourate (v6, 15, 19). Chaque kallā marque un tournant : le premier introduit la transgression, le deuxième la menace, le troisième la conclusion. Puis lā tuṭi'hu — lā (ne pas) suivi du jussif tuṭi' (tu obéis, forme IV de la racine ṭ-w-' — obéir) avec le pronom -hu (lui). C'est un ordre direct de désobéissance envers le transgresseur. La forme IV (aṭā'a) signifie obéir — le jussif négatif dit « n'obéis pas ». Puis deux impératifs positifs : wa-usjud (et prosterne-toi, de la racine s-j-d — se prosterner) et wa-iqtarib (et rapproche-toi, forme VIII de la racine q-r-b — être proche). La forme VIII (iqtaraba) ajoute la dimension de recherche active — le rapprochement est volontaire et engagé.

§JUSTIFICATION§
**ne lui obéis pas** — Le sens retenu est « obéir ». Le jussif négatif traduit l'interdiction d'obéir au transgresseur. L'alternative « ne le suis pas » est trop faible — obéir implique la soumission de la volonté.

**prosterne-toi** — Le sens retenu est « se prosterner ». L'impératif est direct et sans ambiguïté.

**rapproche-toi** — Le sens retenu est « se rapprocher ». Le mot « rapproche-toi » traduit iqtarib. L'alternative « approche-toi » est acceptable mais « rapproche-toi » implique un mouvement relationnel plus intime — on se rapproche de quelqu'un, pas seulement d'un lieu.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « mais prosterne-toi » en ajoutant « mais » qui n'est pas dans le texte — le wa (et) lie les trois impératifs sans opposition. Les trois actes sont complémentaires, pas opposés : ne pas obéir au transgresseur, se prosterner devant Dieu, et se rapprocher de lui forment un seul mouvement.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:19 — TERMINÉ');
  console.log('  twe → "obéir" | sjd → "se prosterner" | qrb → "se rapprocher"');
  console.log('  Traduction : "Non ! Ne lui obéis pas, prosterne-toi et rapproche-toi"');
}

async function dailyPhrases() {
  console.log('\n=== PHRASES DU QUOTIDIEN ===');

  // Only insert for new roots: sfe (id=2617) and zbn (id=2618)
  // All other roots should already have daily phrases

  await insertDaily(2617, [
    { analysis_id: 2617, arabic: "سَفَعَ", phon: "safa'a", french: "Il l'a saisi par le col pour l'empêcher de partir.", sense: "saisir" },
    { analysis_id: 2617, arabic: "سُفْعَة", phon: "suf'a", french: "Le soleil a laissé une marque sombre sur sa peau.", sense: "noircir" },
    { analysis_id: 2617, arabic: "سَافَعَ", phon: "sāfa'a", french: "Les deux lutteurs se sont empoignés pendant la compétition.", sense: "empoigner" }
  ]);

  await insertDaily(2618, [
    { analysis_id: 2618, arabic: "زَبَنَ", phon: "zabana", french: "La chamelle a repoussé son petit d'un coup de jarret.", sense: "repousser" },
    { analysis_id: 2618, arabic: "زَبَانِيَة", phon: "zabāniya", french: "Les gardes ont repoussé la foule à l'entrée du marché.", sense: "gardiens" },
    { analysis_id: 2618, arabic: "زَبُون", phon: "zabūn", french: "Le commerçant a profité de ce client naïf.", sense: "duper" }
  ]);

  // Check and skip existing daily phrases for other roots
  const rootIds = [512, 249, 253, 344, 866, 1558, 1470, 254, 1269, 2598, 2584, 552, 336, 979, 259, 283, 261, 428, 277, 599, 250, 572, 381, 946, 925, 448, 467, 2577];
  for (const id of rootIds) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', id);
    if (count > 0) {
      console.log(`  analysis_id=${id}: ${count} phrases exist, SKIP`);
    } else {
      console.log(`  ⚠️  analysis_id=${id}: no daily phrases (existing root, should have them)`);
    }
  }
}

async function main() {
  await verse96_17();
  await verse96_18();
  await verse96_19();
  await dailyPhrases();
  console.log('\n=== PARTIE 4 TERMINÉE (versets 17-19 + daily) ===');
  console.log('\n=== PIPELINE SOURATE 96 COMPLÈTE ===');
}

main().catch(console.error);
