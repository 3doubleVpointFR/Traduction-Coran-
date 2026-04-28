/**
 * Pipeline maison — Sourate 106 (Quraysh) — Étapes 2, 3, 4
 * Exécute verset par verset: étape 2 (racines manquantes) → étape 3 (axes) → étape 4 (traduction)
 */
require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// ÉTAPE 2 — Création des racines manquantes + word_meanings
// ============================================================

async function createRootIfMissing(wordKey, rootAr, rootPhon, totalOcc) {
  const {data: existing} = await sb.from('word_analyses').select('id').eq('word_key', wordKey);
  if (existing && existing.length > 0) {
    console.log(`[RACINE] ${wordKey} existe déjà (id=${existing[0].id})`);
    return existing[0].id;
  }
  const {data, error} = await sb.from('word_analyses').insert({
    word_key: wordKey,
    root_ar: rootAr,
    root_phon: rootPhon,
    root_meaning: '',
    total_occurrences: totalOcc,
    model_used: 'claude-pipeline',
    prompt_version: 'v2-maison',
    analysis_step: 'concepts'
  }).select('id').single();
  if (error) throw new Error(`Erreur création racine ${wordKey}: ${error.message}`);
  console.log(`[RACINE] ${wordKey} créée (id=${data.id})`);
  return data.id;
}

async function ensureMeanings(analysisId, concepts) {
  // Check if meanings exist
  const {data: existing} = await sb.from('word_meanings').select('id').eq('analysis_id', analysisId);
  if (existing && existing.length > 0) {
    console.log(`  → ${existing.length} sens déjà existants, skip`);
    return;
  }

  let order = 1;
  const rows = [];
  for (const concept of concepts) {
    for (const sense of concept.senses) {
      rows.push({
        analysis_id: analysisId,
        sense: sense.name,
        concept: concept.name,
        description: concept.description,
        meaning_type: 'etymology',
        display_order: order++,
        occ_count: 0,
        occ_refs: [],
        sense_ar: '',
      });
    }
  }

  const {error} = await sb.from('word_meanings').insert(rows);
  if (error) throw new Error(`Erreur insertion meanings pour analysis ${analysisId}: ${error.message}`);
  console.log(`  → ${rows.length} sens insérés en ${concepts.length} concepts`);
}

// ============================================================
// ALL ROOT DEFINITIONS (Lane's-based)
// ============================================================

const ROOT_DEFINITIONS = {
  // === alf (id=706) — 22 occ ===
  alf: {
    id: 706,
    concepts: [
      {
        name: 'Nombre/Multitude',
        description: "Réalité quantitative de ce qui est très nombreux ou groupé en grande quantité. Le mille est le nombre qui représente la grande quantité par excellence dans la langue arabe. C'est un état extérieur et objectif — on peut compter et vérifier. La multitude est permanente, elle ne dépend pas du regard de celui qui observe.",
        senses: [
          {name: 'mille'},
          {name: 'millier'},
          {name: 'grand nombre'},
          {name: 'être très nombreux'},
          {name: 'rendre mille'},
        ]
      },
      {
        name: 'Union/Réconciliation',
        description: "Réalité relationnelle de rassembler ce qui était séparé, de créer un lien durable entre des éléments distincts. L'union sort de celui qui unit et atteint ceux qui sont unis — c'est un acte dirigé vers l'extérieur qui transforme la relation entre les gens. Elle est durable et crée un état nouveau qui n'existait pas avant.",
        senses: [
          {name: 'unir'},
          {name: 'réconcilier'},
          {name: 'rassembler'},
          {name: 'accord mutuel'},
          {name: 'amitié'},
          {name: 'affection'},
        ]
      },
      {
        name: 'Habitude/Familiarité',
        description: "Réalité intérieure de ce qui devient naturel par la répétition et l'accoutumance. La familiarité est un état qui se construit progressivement et devient permanent — on ne peut pas être familier d'un coup. C'est un état intérieur qui change la relation de la personne avec ce qui l'entoure, rendant l'étrange ordinaire et le difficile aisé.",
        senses: [
          {name: 'être familier avec'},
          {name: 'avoir l\'habitude de'},
          {name: 'accoutumance'},
          {name: 'familiarité'},
          {name: 'pacte de sécurité'},
          {name: 'sauf-conduit'},
          {name: 'engagement habituel'},
        ]
      },
      {
        name: 'Composition/Écriture',
        description: "Réalité extérieure de créer un tout organisé à partir d'éléments séparés. Composer un livre ou un ouvrage, c'est rassembler des idées en un ensemble cohérent. C'est un acte dirigé vers l'extérieur qui produit un résultat visible et durable.",
        senses: [
          {name: 'composer un livre'},
          {name: 'compilation'},
          {name: 'ouvrage composé'},
        ]
      }
    ]
  },

  // === rhl (id=2224) — 4 occ ===
  rhl: {
    id: 2224,
    concepts: [
      {
        name: 'Voyage/Départ',
        description: "Réalité extérieure de quitter un lieu pour se déplacer vers un autre. Le voyage est un mouvement physique qui sépare la personne de son point de départ. C'est un acte volontaire, directionnel et temporaire — il y a un départ, un trajet et une destination.",
        senses: [
          {name: 'voyager'},
          {name: 'partir'},
          {name: 'quitter un lieu'},
          {name: 'voyage commercial'},
          {name: 'caravane'},
        ]
      },
      {
        name: 'Monture/Transport',
        description: "Réalité matérielle de ce qui sert au déplacement. La monture est l'animal ou le moyen qui porte le voyageur. C'est un objet extérieur, concret et utilitaire qui rend le voyage possible.",
        senses: [
          {name: 'chameau de voyage'},
          {name: 'monture'},
          {name: 'selle'},
          {name: 'lieu de départ'},
          {name: 'étape du voyage'},
        ]
      }
    ]
  },

  // === shty (id=2524) — 1 occ (already exists but needs meanings) ===
  shty: {
    id: 2524,
    concepts: [
      {
        name: 'Hiver/Saison froide',
        description: "Réalité temporelle et climatique de la période froide de l'année. L'hiver est une saison définie, un quart ou une moitié de l'année selon les usages. C'est un état extérieur et cyclique qui conditionne les activités humaines — agriculture, voyages, commerce.",
        senses: [
          {name: 'hiver'},
          {name: 'saison froide'},
          {name: 'pluie hivernale'},
          {name: 'herbage d\'hiver'},
          {name: 'résider en hiver'},
          {name: 'lieu de séjour hivernal'},
          {name: 'nourriture suffisante pour l\'hiver'},
          {name: 'jour froid'},
          {name: 'nuit froide'},
        ]
      }
    ]
  },

  // === ebd (id=259) — 275 occ ===
  ebd: {
    id: 259,
    concepts: [
      {
        name: 'Adoration/Dévotion',
        description: "Réalité intérieure et extérieure de se soumettre volontairement et de rendre un culte. L'adoration est un acte qui sort du fidèle et se dirige vers l'objet de l'adoration. C'est un engagement permanent qui implique la reconnaissance de la grandeur de l'autre et l'humilité de soi.",
        senses: [
          {name: 'adorer'},
          {name: 'rendre un culte'},
          {name: 'se dévouer'},
          {name: 'pratiquer le culte'},
          {name: 'lieu de culte'},
          {name: 'acte de dévotion'},
        ]
      },
      {
        name: 'Servitude/Esclavage',
        description: "Réalité sociale de celui qui est possédé par un autre et n'a pas de liberté propre. La servitude est un état imposé de l'extérieur qui prive la personne de son autonomie. C'est un état permanent (tant qu'il dure) et subi — le serviteur ne choisit pas sa condition.",
        senses: [
          {name: 'esclave'},
          {name: 'serviteur'},
          {name: 'asservir'},
          {name: 'être asservi'},
          {name: 'réduire en esclavage'},
        ]
      },
      {
        name: 'Soumission/Humilité',
        description: "Réalité intérieure de reconnaître sa propre petitesse devant quelque chose de plus grand. La soumission est un état intérieur qui se manifeste à l'extérieur par des actes d'obéissance. C'est un choix permanent qui oriente toutes les actions de la personne.",
        senses: [
          {name: 'se soumettre'},
          {name: 's\'humilier'},
          {name: 'obéir'},
          {name: 'chemin battu par la soumission'},
        ]
      },
      {
        name: 'Force/Robustesse',
        description: "Réalité physique de ce qui est solide et résistant. Un chameau robuste supporte les charges lourdes. C'est un état extérieur et observable, une qualité permanente du corps ou de l'objet.",
        senses: [
          {name: 'chameau robuste'},
          {name: 'sol durci'},
          {name: 'être fort et endurant'},
        ]
      }
    ]
  },

  // === rbb (id=253) — 980 occ ===
  rbb: {
    id: 253,
    concepts: [
      {
        name: 'Seigneurie/Autorité bienveillante',
        description: "Réalité de celui qui possède, gère et prend soin de ce qui lui appartient. Le seigneur n'est pas un tyran — il est responsable de ce qu'il gouverne. C'est une autorité permanente qui se dirige vers l'extérieur en actes de gestion, de protection et de développement de ce qui est sous sa charge.",
        senses: [
          {name: 'seigneur'},
          {name: 'maître'},
          {name: 'propriétaire'},
          {name: 'possesseur'},
          {name: 'chef'},
          {name: 'roi'},
        ]
      },
      {
        name: 'Croissance/Augmentation',
        description: "Réalité physique et abstraite de ce qui grandit, se développe et augmente en quantité ou en qualité. La croissance est un processus graduel et continu, un mouvement ascendant qui part d'un état initial vers un état plus accompli.",
        senses: [
          {name: 'faire croître'},
          {name: 'augmenter'},
          {name: 'développer'},
          {name: 'accroître'},
          {name: 'surplus'},
          {name: 'profit'},
        ]
      },
      {
        name: 'Éducation/Accompagnement',
        description: "Réalité de celui qui prend en charge le développement d'un autre, qui le nourrit, l'enseigne et le fait passer d'un état d'ignorance à un état de compétence. L'éducation est un acte dirigé vers l'extérieur, patient et continu, qui transforme celui qui le reçoit.",
        senses: [
          {name: 'éduquer'},
          {name: 'élever un enfant'},
          {name: 'nourrir'},
          {name: 'prendre soin'},
          {name: 'accompagner dans la croissance'},
        ]
      },
      {
        name: 'Fixation/Stabilité',
        description: "Réalité physique de ce qui est fixé, établi et ne bouge plus. Fixer la teinture, laisser fermenter, coller — autant d'actes qui stabilisent un état et le rendent permanent.",
        senses: [
          {name: 'fixer une teinture'},
          {name: 'fermenter'},
          {name: 'coller'},
          {name: 'datte mûre'},
          {name: 'miel épais'},
        ]
      }
    ]
  },

  // === byt (id=788) — 73 occ ===
  byt: {
    id: 788,
    concepts: [
      {
        name: 'Demeure/Sanctuaire',
        description: "Réalité physique de l'espace clos où l'on habite, où l'on passe la nuit, où l'on trouve refuge. La demeure est un lieu permanent qui définit l'identité de ses habitants. Le sens s'étend du simple abri au temple sacré — tout lieu qui accueille et protège.",
        senses: [
          {name: 'maison'},
          {name: 'demeure'},
          {name: 'temple'},
          {name: 'sanctuaire'},
          {name: 'tente'},
          {name: 'chambre'},
        ]
      },
      {
        name: 'Nuit/Séjour nocturne',
        description: "Réalité temporelle de passer la nuit quelque part. Le séjour nocturne est un acte temporaire mais récurrent qui lie la personne à un lieu. C'est une activité qui se répète chaque jour et qui implique repos et vulnérabilité.",
        senses: [
          {name: 'passer la nuit'},
          {name: 'séjourner la nuit'},
          {name: 'veiller la nuit'},
          {name: 'attaque nocturne'},
          {name: 'nuitée'},
        ]
      },
      {
        name: 'Famille/Lignée',
        description: "Réalité sociale de ceux qui partagent la même demeure et la même lignée. La famille est le groupe humain qui habite ensemble et qui est lié par le sang ou le mariage.",
        senses: [
          {name: 'famille'},
          {name: 'gens de la maison'},
          {name: 'lignée'},
          {name: 'vers de poésie (bayt)'},
        ]
      }
    ]
  },

  // === tem (id=577) — 48 occ ===
  tem: {
    id: 577,
    concepts: [
      {
        name: 'Gustation/Nourriture',
        description: "Réalité physique et sensorielle de goûter, manger et se nourrir. La gustation est un acte qui entre dans celui qui goûte — c'est une expérience intérieure provoquée par un contact extérieur avec la nourriture. C'est ponctuel (chaque bouchée) mais vital (nécessaire à la survie).",
        senses: [
          {name: 'nourrir'},
          {name: 'donner à manger'},
          {name: 'goûter'},
          {name: 'manger'},
          {name: 'nourriture'},
          {name: 'aliment'},
          {name: 'festin'},
        ]
      },
      {
        name: 'Saveur/Expérience sensorielle',
        description: "Réalité intérieure de percevoir le goût de quelque chose. La saveur est ce que la chose laisse en nous quand on la goûte. C'est une expérience subjective et intérieure — chacun perçoit la saveur différemment.",
        senses: [
          {name: 'saveur'},
          {name: 'goût'},
          {name: 'palais'},
          {name: 'appétit'},
          {name: 'délice'},
        ]
      },
      {
        name: 'Obéissance/Docilité',
        description: "Réalité intérieure de celui qui accepte facilement ce qu'on lui demande. La docilité est un état intérieur de disponibilité et de réceptivité qui se manifeste en actes d'obéissance. Sens figuré dérivé de l'idée que celui qui est nourri est reconnaissant.",
        senses: [
          {name: 'obéir'},
          {name: 'être docile'},
          {name: 'se laisser conduire'},
        ]
      }
    ]
  },

  // === amn (id=287) — 879 occ ===
  amn: {
    id: 287,
    concepts: [
      {
        name: 'Sécurité/Confiance',
        description: "Réalité intérieure de celui qui est en paix, qui ne craint rien et qui se sent en sécurité. La sécurité est un état intérieur permanent qui résulte de l'absence de menace. C'est aussi la confiance que l'on place en quelqu'un — un mouvement intérieur qui se dirige vers l'extérieur en donnant sa foi à l'autre.",
        senses: [
          {name: 'être en sécurité'},
          {name: 'être en paix'},
          {name: 'ne pas craindre'},
          {name: 'se sentir en sûreté'},
          {name: 'confiance'},
          {name: 'fidélité'},
          {name: 'honnêteté'},
        ]
      },
      {
        name: 'Foi/Adhésion',
        description: "Réalité intérieure de croire en quelque chose et d'y adhérer. La foi est un état intérieur permanent qui oriente les actes de la personne. C'est un engagement volontaire et profond qui transforme la relation de la personne avec le monde.",
        senses: [
          {name: 'croire'},
          {name: 'avoir la foi'},
          {name: 'adhérer'},
          {name: 'croyant'},
          {name: 'fidèle'},
        ]
      },
      {
        name: 'Garantie/Protection',
        description: "Réalité extérieure de donner une assurance de sécurité à quelqu'un. La garantie sort de celui qui la donne et atteint celui qui la reçoit. C'est un acte directionnel et volontaire qui crée un état de sécurité chez l'autre.",
        senses: [
          {name: 'accorder la sécurité'},
          {name: 'mettre en sécurité'},
          {name: 'donner un sauf-conduit'},
          {name: 'protéger'},
          {name: 'garantir'},
          {name: 'être digne de confiance'},
          {name: 'dépôt confié'},
        ]
      },
      {
        name: 'Souhait/Aspiration',
        description: "Réalité intérieure de désirer quelque chose et d'espérer l'obtenir. Le souhait est un état intérieur qui se projette vers l'extérieur en rêvant d'un futur meilleur. C'est temporaire et orienté vers l'avant.",
        senses: [
          {name: 'souhaiter'},
          {name: 'désirer'},
          {name: 'espérer'},
          {name: 'vœu'},
        ]
      }
    ]
  },

  // === xwf (id=759) — 124 occ ===
  xwf: {
    id: 759,
    concepts: [
      {
        name: 'Crainte/Peur',
        description: "Réalité intérieure de celui qui anticipe un danger ou un mal futur. La peur est un état émotionnel qui reste chez celui qui la ressent — elle ne sort pas vers l'extérieur mais paralyse ou pousse à fuir. C'est un état qui peut être ponctuel (frayeur) ou permanent (anxiété).",
        senses: [
          {name: 'avoir peur'},
          {name: 'craindre'},
          {name: 'redouter'},
          {name: 'être effrayé'},
          {name: 'peur'},
          {name: 'crainte'},
          {name: 'frayeur'},
          {name: 'épouvanter'},
        ]
      },
      {
        name: 'Précaution/Vigilance',
        description: "Réalité intérieure et extérieure de celui qui prend des mesures pour éviter un danger. La précaution est un acte rationnel, pas émotionnel — on calcule le risque et on agit en conséquence. C'est un état permanent de veille qui se manifeste en actes de prudence.",
        senses: [
          {name: 'prendre des précautions'},
          {name: 'être vigilant'},
          {name: 'se méfier'},
          {name: 'anticiper le danger'},
        ]
      },
      {
        name: 'Diminution/Manque',
        description: "Réalité physique de ce qui est réduit, raccourci ou diminué. Sens concret de la racine lié à l'idée de quelque chose qui manque ou qui est enlevé.",
        senses: [
          {name: 'diminuer'},
          {name: 'réduire'},
          {name: 'enlever une partie'},
          {name: 'route qui raccourcit le trajet'},
        ]
      }
    ]
  },

  // === syf (NEW — 1 occ) ===
  syf: {
    id: null, // will be created
    concepts: [
      {
        name: 'Été/Saison chaude',
        description: "Réalité temporelle et climatique de la période chaude de l'année. L'été est une saison définie, un quart ou une moitié de l'année selon les usages arabes. C'est un état extérieur et cyclique qui conditionne les activités humaines — commerce, expéditions, agriculture. L'été est le contraire de l'hiver et représente la période d'activité et d'abondance.",
        senses: [
          {name: 'été'},
          {name: 'saison chaude'},
          {name: 'pluie estivale'},
          {name: 'herbage d\'été'},
          {name: 'résider en été'},
          {name: 'lieu de séjour estival'},
          {name: 'nourriture suffisante pour l\'été'},
          {name: 'jour chaud'},
          {name: 'nuit chaude'},
          {name: 'expédition estivale'},
        ]
      },
      {
        name: 'Déviation/Détournement',
        description: "Réalité physique de ce qui s'écarte de sa trajectoire ou de sa cible. La déviation est un mouvement qui change de direction, qui quitte le droit chemin. C'est un acte ponctuel et observable — la flèche qui manque, le chameau qui se détourne.",
        senses: [
          {name: 'flèche qui dévie de la cible'},
          {name: 'chameau étalon qui se détourne de la femelle'},
          {name: 's\'écarter'},
        ]
      }
    ]
  },

  // === jwe (NEW — 5 occ) ===
  jwe: {
    id: null, // will be created
    concepts: [
      {
        name: 'Faim/Privation',
        description: "Réalité physique et intérieure du ventre vide et du besoin de nourriture. La faim est un état intérieur qui reste chez celui qui la ressent — elle ne sort pas vers l'extérieur mais pousse à chercher de la nourriture. C'est un état qui peut être ponctuel (un repas manqué) ou permanent (la famine). La faim est le contraire de la satiété.",
        senses: [
          {name: 'avoir faim'},
          {name: 'avoir le ventre vide'},
          {name: 'faim'},
          {name: 'famine'},
          {name: 'épisode de faim'},
          {name: 'état de destitution et de faim'},
          {name: 'contraindre quelqu\'un à la faim'},
          {name: 'se rendre volontairement affamé'},
          {name: 'montrer la faim'},
          {name: 'homme dont la marmite n\'est pas pleine'},
          {name: 'homme qui paraît toujours affamé'},
        ]
      },
      {
        name: 'Désir ardent/Langueur',
        description: "Réalité intérieure de celui qui désire intensément quelque chose ou quelqu'un d'absent. Le désir ardent est un état émotionnel profond qui consume celui qui le ressent. C'est un mouvement intérieur qui se projette vers un objet absent — on languit de ce qu'on n'a pas.",
        senses: [
          {name: 'désirer ardemment'},
          {name: 'languir de rencontrer quelqu\'un'},
          {name: 'languir après ses biens'},
          {name: 'convoiter'},
          {name: 'être insatiable de connaissance'},
        ]
      },
      {
        name: 'Minceur/Finesse',
        description: "Réalité physique de ce qui est mince, fin et svelte. Sens figuré de la faim appliqué à l'apparence physique — celle qui n'a pas de graisse, qui a la taille fine.",
        senses: [
          {name: 'femme à la taille fine'},
        ]
      }
    ]
  }
};


// ============================================================
// STEP 2: Create all roots and meanings
// ============================================================

async function runStep2() {
  console.log('\n========== ÉTAPE 2 — RACINES ET SENS ==========\n');

  // Create missing roots first (syf and jwe)
  const syfId = await createRootIfMissing('syf', 'ص ي ف', 'syf', 1);
  ROOT_DEFINITIONS.syf.id = syfId;

  const jweId = await createRootIfMissing('jwe', 'ج و ع', 'jwe', 5);
  ROOT_DEFINITIONS.jwe.id = jweId;

  // Now create meanings for ALL roots
  for (const [key, def] of Object.entries(ROOT_DEFINITIONS)) {
    console.log(`\n[RACINE] ${key} (id=${def.id}) — traitement des sens`);
    await ensureMeanings(def.id, def.concepts);
    const totalSens = def.concepts.reduce((sum, c) => sum + c.senses.length, 0);
    console.log(`[RACINE] ${totalSens} sens extraits → ${def.concepts.length} concepts`);
  }
}

// ============================================================
// STEP 3: Concept analysis on 5 axes for each verse
// ============================================================

// Verse data with word positions and grammatical info
const VERSES = [
  {
    id: 6194, ref: '106:1', analysisId: 6557,
    arabic: 'لِإِيلَـٰفِ قُرَيْشٍ',
    transliteration: 'li-īlāfi quraysh',
    words: [
      {
        word_key: 'alf', position: 1, root_id: 706,
        arabic: 'إِيلَـٰفِ', phon: 'īlāfi',
        gram: 'nom verbal en idafa (rattaché à Quraysh), forme IV (ifaal = faire faire)',
        gramTest: 'nom verbal forme IV en idafa',
        fr_particle: 'لِ' // li = pour/à cause de
      }
      // quraysh = nom propre, pas analysé
    ],
    particles: [{arabic: 'لِ', phon: 'li', fr: 'pour', position: 0}],
    hamidullah: 'A cause du pacte des Quraysh'
  },
  {
    id: 6195, ref: '106:2', analysisId: 6558,
    arabic: 'إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ',
    transliteration: 'īlāfihim riḥlata ash-shitā\'i waṣ-ṣayf',
    words: [
      {
        word_key: 'alf', position: 1, root_id: 706,
        arabic: 'إِۦلَـٰفِهِمْ', phon: 'īlāfihim',
        gram: 'nom verbal en idafa avec pronom suffixe (leur), forme IV',
        gramTest: 'nom verbal forme IV avec pronom possessif'
      },
      {
        word_key: 'rhl', position: 2, root_id: 2224,
        arabic: 'رِحْلَةَ', phon: 'riḥlata',
        gram: 'nom féminin singulier accusatif (complément)',
        gramTest: 'nom féminin accusatif singulier'
      },
      {
        word_key: 'shty', position: 3, root_id: 2524,
        arabic: 'ٱلشِّتَآءِ', phon: 'ash-shitā\'i',
        gram: 'nom défini avec al- au génitif',
        gramTest: 'nom défini avec al-'
      },
      {
        word_key: 'syf', position: 5, root_id: null, // will be filled
        arabic: 'ٱلصَّيْفِ', phon: 'aṣ-ṣayfi',
        gram: 'nom défini avec al- au génitif',
        gramTest: 'nom défini avec al-'
      }
    ],
    particles: [{arabic: 'وَ', phon: 'wa', fr: 'et', position: 4}],
    hamidullah: 'Du pacte couvrant leurs voyages d\'hiver et d\'été'
  },
  {
    id: 6196, ref: '106:3', analysisId: 6559,
    arabic: 'فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ',
    transliteration: 'fal-ya\'budū rabba hādhā al-bayt',
    words: [
      {
        word_key: 'ebd', position: 2, root_id: 259,
        arabic: 'يَعْبُدُوا۟', phon: 'ya\'budū',
        gram: 'verbe inaccompli majzum (après lam d\'ordre), 3e personne pluriel',
        gramTest: 'verbe inaccompli (action en cours ou à faire)'
      },
      {
        word_key: 'rbb', position: 3, root_id: 253,
        arabic: 'رَبَّ', phon: 'rabba',
        gram: 'nom accusatif en idafa (rattaché à al-bayt via hādha)',
        gramTest: 'nom en idafa'
      },
      {
        word_key: 'byt', position: 5, root_id: 788,
        arabic: 'ٱلْبَيْتِ', phon: 'al-bayti',
        gram: 'nom défini avec al- au génitif',
        gramTest: 'nom défini avec al-'
      }
    ],
    particles: [
      {arabic: 'فَ', phon: 'fa', fr: 'alors', position: 0},
      {arabic: 'لْ', phon: 'l', fr: 'qu\'ils', position: 1},
      {arabic: 'هَـٰذَا', phon: 'hādhā', fr: 'cette', position: 4}
    ],
    hamidullah: 'Qu\'ils adorent donc le Seigneur de cette Maison'
  },
  {
    id: 6197, ref: '106:4', analysisId: 6560,
    arabic: 'ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ',
    transliteration: 'alladhī aṭ\'amahum min jū\'in wa-āmanahum min khawf',
    words: [
      {
        word_key: 'tem', position: 2, root_id: 577,
        arabic: 'أَطْعَمَهُم', phon: 'aṭ\'amahum',
        gram: 'verbe accompli forme IV (af\'ala = faire faire) avec pronom suffixe, 3e personne singulier',
        gramTest: 'verbe accompli forme IV (faire manger/nourrir)'
      },
      {
        word_key: 'jwe', position: 4, root_id: null, // will be filled
        arabic: 'جُوعٍ', phon: 'jū\'in',
        gram: 'nom indéfini au génitif (après min)',
        gramTest: 'nom indéfini au génitif'
      },
      {
        word_key: 'amn', position: 6, root_id: 287,
        arabic: 'ءَامَنَهُم', phon: 'āmanahum',
        gram: 'verbe accompli forme IV (af\'ala) avec pronom suffixe, 3e personne singulier',
        gramTest: 'verbe accompli forme IV (accorder la sécurité)'
      },
      {
        word_key: 'xwf', position: 8, root_id: 759,
        arabic: 'خَوْفٍۭ', phon: 'khawfin',
        gram: 'nom indéfini au génitif (après min)',
        gramTest: 'nom indéfini au génitif'
      }
    ],
    particles: [
      {arabic: 'ٱلَّذِىٓ', phon: 'alladhī', fr: 'celui qui', position: 1},
      {arabic: 'مِّن', phon: 'min', fr: 'contre', position: 3},
      {arabic: 'وَ', phon: 'wa', fr: 'et', position: 5},
      {arabic: 'مِّنْ', phon: 'min', fr: 'contre', position: 7},
    ],
    hamidullah: 'qui les a nourris contre la faim et rassurés de la crainte'
  }
];

// ============================================================
// CONCEPT ANALYSES (5 axes) for each word in each verse
// ============================================================

function getConceptAnalyses(verseRef, wordKey, rootDef, gramInfo) {
  // Return analysis_axes JSON for verse_word_analyses
  const analyses = CONCEPT_ANALYSES[`${verseRef}:${wordKey}`];
  if (!analyses) {
    console.warn(`  ⚠ Pas d'analyses pour ${verseRef}:${wordKey}`);
    return null;
  }
  return analyses;
}

// All concept analyses pre-computed
const CONCEPT_ANALYSES = {
  // ============================================================
  // VERSET 106:1 — لِإِيلَـٰفِ قُرَيْشٍ
  // ============================================================
  '106:1:alf': {
    concepts: {
      'Habitude/Familiarité': {
        senses: ['être familier avec', "avoir l'habitude de", 'accoutumance', 'familiarité', 'pacte de sécurité', 'sauf-conduit', 'engagement habituel'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Habitude/Familiarité\". Le mot īlāf est un nom verbal de forme IV (if'āl) qui signifie \"le fait de rendre familier, de faire que quelqu'un ait l'habitude de\". La forme IV ajoute l'idée de causalité : ce n'est pas juste \"être familier\" mais \"avoir rendu familier\", \"avoir établi la familiarité\". Le test de compatibilité : un nom verbal de forme IV en idafa peut-il exprimer la familiarité établie ? Oui — le nom verbal exprime l'action achevée de rendre familier, et l'idafa rattache cette action à Quraysh. Distinction avec \"Union/Réconciliation\" : l'union rassemble des éléments séparés en un tout nouveau, la familiarité est un état d'accoutumance qui rend l'étrange ordinaire. Le verset ne parle pas de rassembler des groupes mais de l'habitude établie que les Quraysh ont de quelque chose (précisé au verset 2 : les voyages). Distinction avec \"Nombre/Multitude\" : la multitude est une quantité, la familiarité est une relation avec une activité. Le sens de mille/multitude n'a aucun rapport avec le contexte.",
        axe1_verset: "Le verset dit li-īlāfi quraysh — pour la familiarité de Quraysh. Le champ lexical est celui de la relation entre un groupe humain (Quraysh) et une pratique habituelle. La particule li (pour, à cause de) introduit une raison ou un bénéfice. La familiarité est un état intérieur qui se construit par la répétition — les Quraysh ont acquis cette familiarité progressivement, elle est devenue leur identité. Les autres mots du verset (li = pour, Quraysh = nom propre) ne contredisent pas ce sens et le complètent en précisant le bénéficiaire.",
        axe2_voisins: "Le verset 2 précise l'objet de cette familiarité : riḥlata ash-shitā'i waṣ-ṣayf (le voyage d'hiver et d'été). La familiarité porte donc sur les voyages commerciaux saisonniers. Le verset 3 en tire une conséquence (fa = alors) : qu'ils adorent le Seigneur de cette Maison. La familiarité avec les voyages est la base qui mène à la reconnaissance du Seigneur. Le verset 4 ajoute les bienfaits concrets : nourrir et sécuriser. La progression va de l'habitude (v1-2) à la reconnaissance (v3) aux bienfaits (v4).",
        axe3_sourate: "La sourate Quraysh est une sourate courte qui rappelle les bienfaits dont bénéficie la tribu de Quraysh. Le thème central est la relation entre les avantages dont ils jouissent (commerce, sécurité) et la reconnaissance qu'ils doivent à Dieu. La familiarité avec les voyages commerciaux est le premier bienfait mentionné — c'est grâce à cette habitude établie qu'ils prospèrent. Le sens de familiarité s'inscrit parfaitement dans ce thème de bienfait-reconnaissance.",
        axe4_coherence: "Le Coran utilise la racine alf dans le sens de réconciliation en 3:103 (fa-allafa bayna qulūbikum = Il a réconcilié vos cœurs) et en 8:63 (law anfaqta mā fī al-arḍi jamī'an mā allafta bayna qulūbihim = même si tu avais dépensé tout ce qui est sur terre tu n'aurais pas réconcilié leurs cœurs). Mais ici le mot est īlāf (forme IV nominale) avec le sens spécifique de l'accoutumance et du pacte commercial, pas de la réconciliation des cœurs. Le Coran distingue les deux usages par le contexte.",
        axe5_frequence: "La familiarité avec une activité productive (le commerce) est un fondement de la civilisation. Les Quraysh ont développé des routes commerciales stables qui ont permis la prospérité de La Mecque. Cette habitude de voyager et de commercer contribue directement à la mission de justice et de civilisation — elle crée des liens entre les peuples, favorise les échanges et établit la paix commerciale."
      },
      'Union/Réconciliation': {
        senses: ['unir', 'réconcilier', 'rassembler', 'accord mutuel', 'amitié', 'affection'],
        status: 'probable',
        proof_ctx: "Le sens \"Union/Réconciliation\" est cohérent car la racine alf porte bien l'idée de rassembler. Mais la distinction philosophique est la suivante : l'union rassemble des éléments séparés en créant un nouveau lien qui n'existait pas, tandis que la familiarité décrit un état d'accoutumance qui rend une pratique naturelle. Le verset ne parle pas de groupes réconciliés mais d'une habitude de la tribu. Le verset 2 précise l'objet : les voyages, pas des relations entre groupes.",
        axe1_verset: "Le verset dit li-īlāfi quraysh. Si le sens est l'union, il faudrait comprendre \"pour l'union de Quraysh\" — c'est-à-dire pour leur rassemblement ou leur réconciliation. Le champ lexical serait alors celui des relations interpersonnelles au sein de la tribu. Le mot quraysh comme complément du nom pourrait signifier l'union entre les membres de la tribu. C'est grammaticalement possible mais le verset 2 oriente vers une autre lecture en parlant de voyages.",
        axe2_voisins: "Le verset 2 dit riḥlata ash-shitā'i waṣ-ṣayf (le voyage d'hiver et d'été). Si on lit \"union\", il faudrait comprendre \"leur union pour le voyage\" — possible mais forcé. La familiarité avec le voyage est plus naturelle que l'union pour le voyage. Le verset 3 tire une conséquence (adorer le Seigneur) qui se lie mieux à l'habitude (vous êtes habitués à ces bienfaits, alors reconnaissez-les) qu'à l'union (vous êtes unis, alors adorez).",
        axe3_sourate: "La sourate parle de bienfaits concrets (voyages, nourriture, sécurité). L'union entre les membres de la tribu est un sujet différent des bienfaits matériels. La familiarité avec les voyages est un bienfait direct, l'union est un état social.",
        axe4_coherence: "Quand le Coran utilise alf pour l'union/réconciliation (3:103, 8:63), c'est toujours avec le verbe allafa suivi de bayna (entre) pour indiquer la réconciliation entre des parties. Ici la construction est différente : nom verbal + complément du nom (Quraysh), ce qui pointe vers l'accoutumance plutôt que la réconciliation.",
        axe5_frequence: "L'union de la tribu est importante pour la civilisation, mais le contexte oriente vers les voyages commerciaux, pas vers l'unité tribale."
      },
      'Nombre/Multitude': {
        senses: ['mille', 'millier', 'grand nombre', 'être très nombreux', 'rendre mille'],
        status: 'nul',
        proof_ctx: "La multitude est un sens quantitatif sans rapport avec le contexte. Le verset ne parle pas du nombre de Quraysh mais de leur relation avec une pratique."
      },
      'Composition/Écriture': {
        senses: ['composer un livre', 'compilation', 'ouvrage composé'],
        status: 'nul',
        proof_ctx: "La composition littéraire n'a aucun rapport avec le contexte du verset qui parle de la tribu de Quraysh et de ses pratiques."
      }
    },
    sense_chosen: 'familiarité',
    concept_chosen: 'Habitude/Familiarité'
  },

  // ============================================================
  // VERSET 106:2 — إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ
  // ============================================================
  '106:2:alf': {
    concepts: {
      'Habitude/Familiarité': {
        senses: ['être familier avec', "avoir l'habitude de", 'accoutumance', 'familiarité', 'pacte de sécurité', 'sauf-conduit', 'engagement habituel'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Habitude/Familiarité\". Le mot īlāfihim reprend le même nom verbal qu'au verset 1 mais avec le pronom possessif \"leur\". Il précise maintenant l'objet de la familiarité : le voyage. Leur familiarité avec le voyage — ils ont l'habitude de voyager, c'est devenu leur nature. La forme IV (if'āl) garde l'idée de causalité : cette familiarité a été rendue possible, établie. Le test de compatibilité : un nom verbal de forme IV avec pronom possessif suivi d'un complément d'objet (riḥlata) peut-il exprimer la familiarité établie avec les voyages ? Oui — \"leur familiarité avec le voyage\" est naturel. Distinction avec \"Union/Réconciliation\" : même analyse qu'au verset 1. Le complément riḥlata (le voyage) confirme qu'il s'agit de l'habitude de voyager, pas de l'union entre des personnes.",
        axe1_verset: "Le verset dit īlāfihim riḥlata ash-shitā'i waṣ-ṣayf — leur familiarité avec le voyage d'hiver et d'été. Le champ lexical est celui du commerce saisonnier : familiarité, voyage, hiver, été. Le mot riḥlata (voyage) comme complément d'objet de īlāf confirme que la familiarité porte sur une activité, pas sur des relations humaines. Les Quraysh ont deux voyages annuels — un en hiver (vers le Yémen) et un en été (vers la Syrie). Cette habitude bien rodée est leur identité commerciale.",
        axe2_voisins: "Le verset 1 a posé le sujet (la familiarité de Quraysh), le verset 2 le développe en précisant l'objet (les voyages saisonniers). Le verset 3 en tire la conséquence (qu'ils adorent). Le verset 2 est le centre descriptif de la sourate — il nomme concrètement ce que les Quraysh font. La familiarité avec les voyages est le pont entre le sujet (v1) et la conséquence (v3-4).",
        axe3_sourate: "La sourate rappelle le bienfait des voyages commerciaux réguliers. Le verset 2 est la description concrète de ce bienfait. La familiarité avec ces voyages signifie que les Quraysh les font sans difficulté, que les routes sont sûres, que les partenaires commerciaux sont établis. C'est un état de prospérité et de stabilité.",
        axe4_coherence: "Le Coran mentionne les voyages commerciaux et les caravanes dans d'autres passages (2:198, 106:1-2). La notion de voyages saisonniers pour le commerce est cohérente avec l'usage coranique. La familiarité avec ces voyages implique que Dieu a facilité ces routes et ces relations commerciales pour les Quraysh.",
        axe5_frequence: "Les voyages commerciaux réguliers sont un pilier de la civilisation. Le commerce pacifique entre les peuples crée des liens, distribue les richesses et favorise la justice. La familiarité des Quraysh avec ces voyages est un don qui leur permet de contribuer à la civilisation."
      },
      'Union/Réconciliation': {
        senses: ['unir', 'réconcilier', 'rassembler', 'accord mutuel', 'amitié', 'affection'],
        status: 'peu_probable',
        proof_ctx: "Le complément d'objet riḥlata (le voyage) élimine le sens d'union/réconciliation. On ne dit pas \"leur union le voyage\" — la construction grammaticale impose que le sens soit une relation de familiarité avec le voyage. L'union aurait besoin de bayna (entre) pour fonctionner.",
        axe1_verset: "Le verset dit īlāfihim riḥlata — leur [familiarité/union] le voyage. Avec le sens d'union, il faudrait lire \"leur union lors du voyage\" ou \"leur pacte pour le voyage\". C'est grammaticalement forcé car riḥlata est à l'accusatif comme complément d'objet direct, pas comme circonstanciel. La construction pointe vers la familiarité AVEC le voyage.",
        axe2_voisins: "Le verset 3 dit qu'ils doivent adorer le Seigneur de cette Maison. La progression familiarité-avec-les-voyages → adoration est plus naturelle que union-pour-les-voyages → adoration. Le lien de cause à effet est plus clair avec la familiarité.",
        axe3_sourate: "La sourate énumère des bienfaits concrets. La familiarité avec les voyages est un bienfait concret. L'union pour les voyages est un état social, pas un bienfait direct.",
        axe4_coherence: "Même analyse qu'au verset 1. La construction avec complément d'objet direct (riḥlata) est différente de la construction avec bayna utilisée pour la réconciliation.",
        axe5_frequence: "L'union est importante mais le texte parle de la relation avec les voyages, pas de l'union entre les personnes."
      },
      'Nombre/Multitude': {
        senses: ['mille', 'millier', 'grand nombre', 'être très nombreux', 'rendre mille'],
        status: 'nul',
        proof_ctx: "Hors sujet. Le verset ne parle pas de quantité."
      },
      'Composition/Écriture': {
        senses: ['composer un livre', 'compilation', 'ouvrage composé'],
        status: 'nul',
        proof_ctx: "Hors sujet. Pas de rapport avec la composition littéraire."
      }
    },
    sense_chosen: 'familiarité',
    concept_chosen: 'Habitude/Familiarité'
  },

  '106:2:rhl': {
    concepts: {
      'Voyage/Départ': {
        senses: ['voyager', 'partir', 'quitter un lieu', 'voyage commercial', 'caravane'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Voyage/Départ\". Le mot riḥlata est un nom féminin singulier à l'accusatif qui signifie \"le voyage\" ou \"l'expédition\". C'est un nom d'action qui désigne l'acte de voyager. Le test de compatibilité : un nom féminin accusatif peut-il exprimer le voyage ? Oui — riḥla est le nom classique du voyage, du déplacement d'un lieu à un autre. Le sens de monture/transport est lié mais le mot riḥla désigne l'acte de voyager lui-même, pas le moyen de transport.",
        axe1_verset: "Le verset dit riḥlata ash-shitā'i waṣ-ṣayf — le voyage d'hiver et d'été. Le champ lexical est celui du déplacement saisonnier : voyage, hiver, été. Le mot riḥla désigne le voyage comme activité — aller d'un lieu à un autre pour le commerce. Les deux saisons (hiver et été) qualifient deux voyages distincts dans deux directions. Le voyage est l'activité centrale de ce verset.",
        axe2_voisins: "Le verset 1 introduit la familiarité de Quraysh, le verset 2 la précise comme familiarité avec les voyages. Le mot riḥla est le nœud qui relie la familiarité (v1) aux bienfaits (v4). Sans les voyages, pas de commerce, pas de nourriture, pas de sécurité. Le voyage est le moyen concret par lequel les Quraysh prospèrent.",
        axe3_sourate: "La sourate est un rappel des bienfaits. Le voyage commercial est le premier bienfait concret nommé. Il est la source de la prospérité matérielle de la tribu. Le thème de la sourate (bienfait → reconnaissance) passe par le voyage comme bienfait fondateur.",
        axe4_coherence: "Le Coran mentionne les voyages et les caravanes dans plusieurs passages. Le commerce est une activité valorisée dans le Coran (2:275, 62:10). Le voyage de Quraysh est un exemple concret de cette activité positive.",
        axe5_frequence: "Le voyage commercial est un acte fondateur de la civilisation. Il crée des liens entre les peuples, distribue les ressources et favorise la connaissance mutuelle. Le voyage des Quraysh contribue directement à cette mission civilisatrice."
      },
      'Monture/Transport': {
        senses: ['chameau de voyage', 'monture', 'selle', 'lieu de départ', 'étape du voyage'],
        status: 'peu_probable',
        proof_ctx: "La monture est le moyen du voyage, pas le voyage lui-même. Le mot riḥla désigne l'acte de voyager, pas l'animal qui porte. Le contexte (hiver et été) qualifie une activité saisonnière, pas un animal.",
        axe1_verset: "Le verset dit riḥlata ash-shitā'i waṣ-ṣayf. Si le sens est la monture, il faudrait comprendre \"la monture d'hiver et d'été\" — ce qui est grammaticalement possible mais sémantiquement étrange. On ne qualifie pas une monture par une saison. On qualifie un voyage par une saison.",
        axe2_voisins: "Le contexte parle de familiarité avec une activité, pas avec un animal. Le lien avec les bienfaits (v4) est plus direct par le voyage que par la monture.",
        axe3_sourate: "Le bienfait rappelé est l'activité de voyager, pas la possession d'animaux. La sourate parle de ce que les Quraysh FONT, pas de ce qu'ils POSSÈDENT.",
        axe4_coherence: "Le Coran utilise d'autres mots pour les montures (dābbah, ba'ir). Le mot riḥla est utilisé pour le voyage comme activité.",
        axe5_frequence: "La monture est un outil, pas une mission. Le voyage comme activité est plus pertinent pour la civilisation."
      }
    },
    sense_chosen: 'voyage',
    concept_chosen: 'Voyage/Départ'
  },

  '106:2:shty': {
    concepts: {
      'Hiver/Saison froide': {
        senses: ['hiver', 'saison froide', 'pluie hivernale', "herbage d'hiver", 'résider en hiver', 'lieu de séjour hivernal', "nourriture suffisante pour l'hiver", 'jour froid', 'nuit froide'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Hiver/Saison froide\". Le mot ash-shitā'i est un nom défini avec al- au génitif. Il désigne la saison froide de l'année, le contraire de l'été. Le test de compatibilité : un nom défini avec al- peut-il identifier l'hiver comme une réalité connue ? Oui — l'hiver est une saison universellement identifiable. Il n'y a qu'un seul concept pour cette racine, le sens est univoque.",
        axe1_verset: "Le verset dit riḥlata ash-shitā'i waṣ-ṣayf — le voyage de l'hiver et de l'été. Le champ lexical est celui des saisons et des voyages. L'hiver et l'été forment une paire qui couvre l'année entière. Le voyage d'hiver est celui qui va vers le sud (le Yémen), vers les régions chaudes. L'article al- rend l'hiver défini — c'est l'hiver connu, la saison que tout le monde identifie.",
        axe2_voisins: "Le verset 1 parle de la familiarité de Quraysh. Le verset 2 précise que cette familiarité concerne les voyages saisonniers. L'hiver et l'été structurent le calendrier commercial des Quraysh. L'hiver et l'été ensemble montrent que les Quraysh voyagent toute l'année — c'est leur mode de vie permanent.",
        axe3_sourate: "La sourate rappelle les bienfaits. Les voyages saisonniers, hiver comme été, sont un bienfait : les Quraysh ont des routes commerciales dans toutes les directions et toutes les saisons. L'hiver comme saison est un élément du bienfait global.",
        axe4_coherence: "C'est la seule occurrence de cette racine dans le Coran. Le sens est clair et univoque dans ce contexte.",
        axe5_frequence: "Les saisons structurent la vie civilisée. Le fait que les Quraysh aient des voyages pour chaque saison montre une organisation avancée de leur société."
      }
    },
    sense_chosen: 'hiver',
    concept_chosen: 'Hiver/Saison froide'
  },

  '106:2:syf': {
    concepts: {
      'Été/Saison chaude': {
        senses: ['été', 'saison chaude', 'pluie estivale', "herbage d'été", 'résider en été', 'lieu de séjour estival', "nourriture suffisante pour l'été", 'jour chaud', 'nuit chaude', 'expédition estivale'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Été/Saison chaude\". Le mot aṣ-ṣayfi est un nom défini avec al- au génitif. Il désigne la saison chaude de l'année, le contraire de l'hiver. Le test de compatibilité : un nom défini avec al- peut-il identifier l'été comme une réalité connue ? Oui — l'été est une saison universellement identifiable. Distinction avec \"Déviation/Détournement\" : la déviation est un mouvement qui s'écarte, l'été est une saison. Le contexte (en parallèle avec l'hiver) confirme le sens saisonnier sans ambiguïté.",
        axe1_verset: "Le verset dit riḥlata ash-shitā'i waṣ-ṣayf — le voyage de l'hiver et de l'été. Le champ lexical est celui des saisons et des voyages. L'été et l'hiver forment une paire complémentaire qui couvre l'année entière. Le voyage d'été est celui qui va vers le nord (la Syrie/le Shām), vers les régions tempérées. L'article al- rend l'été défini — c'est l'été connu de tous.",
        axe2_voisins: "En parallèle avec l'hiver, l'été complète la description de l'activité commerciale annuelle de Quraysh. Les deux saisons ensemble montrent que les Quraysh ne sont jamais inactifs — ils voyagent toute l'année, alternant les destinations selon le climat.",
        axe3_sourate: "La sourate rappelle les bienfaits. L'été comme saison de voyage commercial est un élément du bienfait global. Les deux saisons mentionnées montrent la complétude du bienfait — il couvre toute l'année.",
        axe4_coherence: "C'est la seule occurrence de cette racine dans le Coran. Le sens est clair grâce au parallèle avec l'hiver.",
        axe5_frequence: "L'activité commerciale estivale est un pilier de la prospérité. Le fait que les Quraysh voyagent aussi en été montre une économie diversifiée et des routes commerciales multiples."
      },
      'Déviation/Détournement': {
        senses: ['flèche qui dévie de la cible', 'chameau étalon qui se détourne de la femelle', "s'écarter"],
        status: 'nul',
        proof_ctx: "La déviation est un sens physique isolé sans rapport avec le contexte des saisons et des voyages. Le parallèle avec l'hiver confirme que le sens est saisonnier."
      }
    },
    sense_chosen: 'été',
    concept_chosen: 'Été/Saison chaude'
  },

  // ============================================================
  // VERSET 106:3 — فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ
  // ============================================================
  '106:3:ebd': {
    concepts: {
      'Adoration/Dévotion': {
        senses: ['adorer', 'rendre un culte', 'se dévouer', 'pratiquer le culte', 'lieu de culte', 'acte de dévotion'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Adoration/Dévotion\". Le mot ya'budū est un verbe inaccompli majzūm (après le lām d'ordre) à la 3e personne du pluriel. Le lām d'ordre transforme l'inaccompli en injonction : \"qu'ils adorent\". L'adoration est un acte volontaire et permanent de celui qui reconnaît la grandeur de l'autre. Le test de compatibilité : un verbe inaccompli d'ordre peut-il exprimer l'adoration ? Oui — \"qu'ils adorent\" est une injonction naturelle à une action continue et permanente. Distinction avec \"Servitude/Esclavage\" : la servitude est un état imposé et subi, l'adoration est un acte volontaire et choisi. Le verset utilise le lām d'ordre qui invite à l'action, pas une description d'un état subi. Le contexte (après les bienfaits) montre que l'adoration est une réponse volontaire de reconnaissance, pas une contrainte. Distinction avec \"Soumission/Humilité\" : la soumission est un état intérieur d'humilité, l'adoration est un acte extérieur de dévotion. Le verbe ya'budū décrit une action à faire, pas un état à être.",
        axe1_verset: "Le verset dit fal-ya'budū rabba hādhā al-bayt — qu'ils adorent donc le Seigneur de cette Maison. Le champ lexical est celui du culte et de la reconnaissance : adorer, seigneur, maison (sanctuaire). Le verbe ya'budū est le cœur du verset — c'est l'action demandée. La particule fa (donc/alors) lie cette demande aux versets précédents comme une conséquence. Le lām d'ordre donne au verbe la force d'une injonction. L'adoration est l'acte qui exprime la reconnaissance pour les bienfaits reçus.",
        axe2_voisins: "Les versets 1-2 ont décrit les bienfaits (familiarité avec les voyages). Le verset 3 en tire la conséquence logique : puisqu'ils bénéficient de ces bienfaits, qu'ils adorent celui qui les a rendus possibles. Le verset 4 va détailler d'autres bienfaits (nourriture, sécurité). L'adoration est placée au centre, entre la description des bienfaits et leur détail.",
        axe3_sourate: "La sourate Quraysh suit un schéma bienfait → reconnaissance. L'adoration est la forme que prend cette reconnaissance. Le thème de la sourate est que les Quraysh doivent reconnaître la source de leur prospérité. L'adoration est l'acte par lequel cette reconnaissance se manifeste concrètement.",
        axe4_coherence: "Le Coran utilise la racine ebd des centaines de fois pour l'adoration de Dieu. Le verbe 'abada est le verbe standard du culte rendu à Dieu dans le Coran. L'injonction \"adorez\" ou \"qu'ils adorent\" est récurrente (7:59, 11:50, 23:23). C'est un usage constant et univoque.",
        axe5_frequence: "L'adoration est le fondement de la reconnaissance par le khalifa de sa place dans l'ordre des choses. Reconnaître le Seigneur par l'adoration, c'est reconnaître qu'on n'est pas la source de sa propre prospérité. Cette reconnaissance est la base de la justice — celui qui reconnaît la source de ses bienfaits ne s'attribue pas ce qui ne lui appartient pas."
      },
      'Servitude/Esclavage': {
        senses: ['esclave', 'serviteur', 'asservir', 'être asservi', 'réduire en esclavage'],
        status: 'peu_probable',
        proof_ctx: "La servitude est un état imposé et subi. Le verset utilise le lām d'ordre qui invite à une action volontaire, pas à un état subi. Le contexte (après les bienfaits) montre que la réponse attendue est la reconnaissance, pas la soumission forcée. La frontière philosophique : l'esclave n'a pas le choix, l'adorateur choisit librement.",
        axe1_verset: "Le verset dit fal-ya'budū — qu'ils servent/soient esclaves. Si le sens est la servitude, le verset demanderait aux Quraysh de devenir esclaves du Seigneur de la Maison. Le lām d'ordre invite à une action, pas à un état. On peut inviter quelqu'un à adorer (action) mais on ne peut pas inviter quelqu'un à être esclave (état imposé). La construction grammaticale pointe vers l'action volontaire.",
        axe2_voisins: "Les versets 1-2 décrivent des bienfaits dont les Quraysh jouissent librement. La réponse à des bienfaits est la reconnaissance, pas la servitude. Le passage des bienfaits à la servitude serait une rupture de ton et de logique.",
        axe3_sourate: "La sourate est un rappel bienveillant des bienfaits. Le ton est celui de la gratitude, pas de la contrainte. La servitude serait en rupture avec ce ton.",
        axe4_coherence: "Le Coran distingue 'abd (serviteur/esclave) comme état et 'ibāda (adoration) comme acte volontaire. Ici c'est le verbe ya'budū (de 'ibāda) qui est utilisé, pas l'état de 'ubūdiyya (servitude).",
        axe5_frequence: "La servitude est incompatible avec la liberté du khalifa. L'adoration volontaire, au contraire, est l'expression de cette liberté."
      },
      'Soumission/Humilité': {
        senses: ['se soumettre', "s'humilier", 'obéir', 'chemin battu par la soumission'],
        status: 'probable',
        proof_ctx: "La soumission est proche de l'adoration mais la distinction est philosophique : la soumission est un état intérieur de reconnaissance de sa petitesse, l'adoration est un acte extérieur de dévotion envers l'autre. Le verbe ya'budū décrit une action à faire (adorer), pas un état à être (soumis). L'adoration inclut la soumission mais ne s'y réduit pas — elle ajoute la dimension de reconnaissance active et de culte.",
        axe1_verset: "Si le sens est la soumission, le verset dirait \"qu'ils se soumettent donc au Seigneur de cette Maison\". C'est grammaticalement possible et sémantiquement cohérent. Le champ lexical (seigneur, maison/sanctuaire) est compatible avec la soumission. Mais l'adoration est plus riche que la soumission — elle inclut le culte, la dévotion et la reconnaissance.",
        axe2_voisins: "La soumission comme réponse aux bienfaits est possible mais moins complète que l'adoration. Les bienfaits appellent une reconnaissance active (adoration), pas juste une posture intérieure (soumission).",
        axe3_sourate: "Le thème bienfait-reconnaissance appelle l'adoration comme réponse complète, pas juste la soumission.",
        axe4_coherence: "Le Coran utilise ya'budū pour l'adoration active, pas pour la simple soumission. D'autres verbes sont utilisés pour la soumission (khaḍa'a, aslama).",
        axe5_frequence: "L'adoration est plus complète que la soumission pour la mission du khalifa. La soumission est un premier pas, l'adoration est l'engagement complet."
      },
      'Force/Robustesse': {
        senses: ['chameau robuste', 'sol durci', 'être fort et endurant'],
        status: 'nul',
        proof_ctx: "La robustesse physique n'a aucun rapport avec le contexte d'adoration et de reconnaissance envers le Seigneur."
      }
    },
    sense_chosen: 'adorer',
    concept_chosen: 'Adoration/Dévotion'
  },

  '106:3:rbb': {
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        senses: ['seigneur', 'maître', 'propriétaire', 'possesseur', 'chef', 'roi'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Seigneurie/Autorité bienveillante\". Le mot rabba est un nom accusatif en idafa, rattaché à al-bayt (la Maison) via le démonstratif hādhā. Il signifie \"le Seigneur de cette Maison\". Le seigneur est celui qui possède, gère et prend soin de ce qui lui appartient. Le test de compatibilité : un nom en idafa peut-il exprimer la seigneurie rattachée à un lieu ? Oui — \"Seigneur de cette Maison\" est une construction classique. Distinction avec \"Croissance/Augmentation\" : la croissance est un processus, la seigneurie est une identité. Le verset identifie le Seigneur, il ne parle pas de croissance. Distinction avec \"Éducation/Accompagnement\" : l'éducation est un acte, la seigneurie est une autorité. Le verset nomme l'autorité à adorer, pas un acte éducatif.",
        axe1_verset: "Le verset dit rabba hādhā al-bayt — le Seigneur de cette Maison. Le champ lexical est celui de l'autorité et du sanctuaire : seigneur, cette, maison. Le mot rabb en position d'objet du verbe ya'budū (qu'ils adorent le Seigneur) identifie l'objet de l'adoration. La construction idafa (rabb + al-bayt) rattache l'autorité à un lieu précis — la Maison (la Ka'ba). Le Seigneur est identifié par son lien avec le sanctuaire que les Quraysh connaissent et fréquentent.",
        axe2_voisins: "Le verset 4 développe les attributs de ce Seigneur : celui qui les a nourris et sécurisés. Le Seigneur est d'abord identifié par son lieu (v3) puis par ses actes (v4). La progression va de l'identité (Seigneur de la Maison) à l'action (nourrir, sécuriser). La seigneurie comme autorité bienveillante prépare naturellement les bienfaits du verset 4.",
        axe3_sourate: "La sourate rappelle aux Quraysh que leur prospérité vient du Seigneur de la Maison qu'ils gardent. Le thème de la seigneurie est central — c'est le Seigneur qui a rendu possible la familiarité avec les voyages, la nourriture et la sécurité.",
        axe4_coherence: "Le Coran utilise rabb des centaines de fois pour désigner Dieu comme Seigneur. La construction rabb + lieu est classique : rabb al-'ālamīn (Seigneur des mondes, 1:2), rabb as-samāwāt (Seigneur des cieux). Rabb hādhā al-bayt (Seigneur de cette Maison) est une occurrence spécifique qui lie l'autorité divine à la Ka'ba.",
        axe5_frequence: "La seigneurie bienveillante est le modèle de gouvernance pour le khalifa. Le Seigneur ne domine pas par la force mais par le soin — il nourrit et sécurise (v4). Ce modèle inspire la justice et la responsabilité."
      },
      'Croissance/Augmentation': {
        senses: ['faire croître', 'augmenter', 'développer', 'accroître', 'surplus', 'profit'],
        status: 'nul',
        proof_ctx: "Le verset identifie un être à adorer (le Seigneur), pas un processus de croissance. Le mot rabb en position d'objet de ya'budū désigne une personne/entité, pas une action."
      },
      'Éducation/Accompagnement': {
        senses: ['éduquer', 'élever un enfant', 'nourrir', 'prendre soin', 'accompagner dans la croissance'],
        status: 'probable',
        proof_ctx: "L'éducation est un acte du seigneur, pas l'identité du seigneur. Le verset identifie le Seigneur comme objet d'adoration, il ne décrit pas ses actes éducatifs. La frontière philosophique : la seigneurie est l'identité (ce qu'Il EST), l'éducation est l'acte (ce qu'Il FAIT). Le verset nomme l'identité. Les actes viendront au verset 4.",
        axe1_verset: "Si le sens est l'éducation, il faudrait comprendre \"qu'ils adorent l'Éducateur de cette Maison\". C'est grammaticalement possible mais sémantiquement moins naturel. Le mot rabb en contexte coranique désigne l'autorité suprême, pas l'acte d'éduquer.",
        axe2_voisins: "Le verset 4 détaille les actes (nourrir, sécuriser). Le verset 3 identifie l'autorité. Si rabb signifiait éducateur ici, le verset 4 serait redondant en ajoutant d'autres actes.",
        axe3_sourate: "La sourate distingue l'identité (v3) des actes (v4). L'éducation comme sens de rabb brouille cette distinction.",
        axe4_coherence: "Le Coran utilise rabb comme titre d'autorité, pas comme description d'un acte. Quand il veut parler d'éducation, il utilise d'autres formulations.",
        axe5_frequence: "L'éducation est un aspect de la seigneurie mais n'est pas la seigneurie elle-même. Le concept est trop restreint pour ce verset."
      },
      'Fixation/Stabilité': {
        senses: ['fixer une teinture', 'fermenter', 'coller', 'datte mûre', 'miel épais'],
        status: 'nul',
        proof_ctx: "Sens physiques concrets sans rapport avec le contexte du verset."
      }
    },
    sense_chosen: 'seigneur',
    concept_chosen: 'Seigneurie/Autorité bienveillante'
  },

  '106:3:byt': {
    concepts: {
      'Demeure/Sanctuaire': {
        senses: ['maison', 'demeure', 'temple', 'sanctuaire', 'tente', 'chambre'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Demeure/Sanctuaire\". Le mot al-bayti est un nom défini avec al- au génitif, rattaché à hādhā (cette) et complément du nom rabb. Il signifie \"cette Maison\" — la Ka'ba, le sanctuaire de La Mecque. Le test de compatibilité : un nom défini avec al- et démonstratif peut-il identifier un sanctuaire connu ? Oui — \"cette Maison\" désigne un lieu précis et connu de tous les Quraysh. Distinction avec \"Nuit/Séjour nocturne\" : le séjour nocturne est un acte temporaire, la Maison est un lieu permanent. Le contexte (Seigneur de cette Maison) identifie un lieu, pas une activité. Distinction avec \"Famille/Lignée\" : la famille est un groupe humain, la Maison est un bâtiment sacré. Le démonstratif hādhā (cette) pointe vers un lieu physique identifiable.",
        axe1_verset: "Le verset dit rabba hādhā al-bayt — le Seigneur de cette Maison. Le champ lexical est celui du sanctuaire et de l'autorité. Le mot al-bayt avec le démonstratif hādhā désigne un lieu précis, identifiable et connu. Les Quraysh sont les gardiens de cette Maison — c'est leur identité et leur fierté. La Maison est le point d'ancrage de toute la sourate : c'est grâce à elle que les Quraysh ont leurs privilèges commerciaux et leur sécurité.",
        axe2_voisins: "Le verset 1 parle de Quraysh, le verset 2 de leurs voyages. Le verset 3 nomme la Maison comme le lieu qui justifie l'adoration. Le verset 4 détaille les bienfaits qui viennent du Seigneur de cette Maison. La Maison est le centre géographique et spirituel de la sourate — tout gravite autour d'elle.",
        axe3_sourate: "La sourate Quraysh lie la prospérité de la tribu à la Maison. Les Quraysh prospèrent parce qu'ils sont les gardiens du sanctuaire. Le sanctuaire attire les pèlerins, sécurise les routes commerciales et donne aux Quraysh un statut respecté. La Maison est la clé de voûte de tout le système de bienfaits décrit dans la sourate.",
        axe4_coherence: "Le Coran utilise al-bayt pour désigner la Ka'ba dans de nombreux passages (2:125, 2:127, 3:96-97, 14:37, 22:26). L'expression rabb hādhā al-bayt est directement parallèle à d'autres occurrences coraniques. La Ka'ba est désignée comme \"la première maison établie pour les gens\" (3:96).",
        axe5_frequence: "La Maison/sanctuaire est un lieu de rassemblement et de paix. Elle contribue à la mission de civilisation en créant un espace sacré où les conflits sont suspendus et où les gens se rencontrent dans la paix."
      },
      'Nuit/Séjour nocturne': {
        senses: ['passer la nuit', 'séjourner la nuit', 'veiller la nuit', 'attaque nocturne', 'nuitée'],
        status: 'nul',
        proof_ctx: "Le séjour nocturne est un acte temporaire. Le contexte (Seigneur de cette Maison) identifie un lieu permanent, pas une activité nocturne."
      },
      'Famille/Lignée': {
        senses: ['famille', 'gens de la maison', 'lignée', 'vers de poésie (bayt)'],
        status: 'nul',
        proof_ctx: "La famille est un groupe humain. Le démonstratif hādhā (cette) pointe vers un lieu physique, pas vers un groupe de personnes. On dit \"cette maison\" en pointant un bâtiment, pas \"cette famille\"."
      }
    },
    sense_chosen: 'sanctuaire',
    concept_chosen: 'Demeure/Sanctuaire'
  },

  // ============================================================
  // VERSET 106:4 — ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ
  // ============================================================
  '106:4:tem': {
    concepts: {
      'Gustation/Nourriture': {
        senses: ['nourrir', 'donner à manger', 'goûter', 'manger', 'nourriture', 'aliment', 'festin'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Gustation/Nourriture\". Le mot aṭ'amahum est un verbe accompli forme IV (af'ala) avec pronom suffixe. La forme IV ajoute la causalité : ce n'est pas \"manger\" mais \"faire manger, nourrir\". Le pronom -hum (eux/les) est le complément d'objet — c'est eux (les Quraysh) qui sont nourris. Le test de compatibilité : un verbe accompli forme IV peut-il exprimer l'acte de nourrir dans le passé ? Oui — \"Il les a nourris\" décrit un acte achevé de donner la nourriture. La construction min jū'in (contre la faim) précise les circonstances : la nourriture a remplacé la faim. Distinction avec \"Saveur/Expérience sensorielle\" : la saveur est une perception subjective, la nourriture est un acte concret de donner à manger. Le verbe aṭ'ama (nourrir) désigne l'acte de fournir la nourriture, pas l'expérience de la goûter. Distinction avec \"Obéissance/Docilité\" : la docilité est un état intérieur, la nourriture est un acte extérieur. Le contexte (contre la faim) confirme le sens physique de donner à manger.",
        axe1_verset: "Le verset dit alladhī aṭ'amahum min jū'in — celui qui les a nourris contre la faim. Le champ lexical est celui de la subsistance : nourrir, faim, sécurité, crainte. Le verbe aṭ'ama est suivi de min jū'in (depuis/contre la faim) qui indique que la nourriture a remplacé un état de manque. Le parallèle avec āmanahum min khawfin (les a sécurisés contre la crainte) confirme la structure : bienfait (nourrir/sécuriser) + source du mal éliminé (faim/crainte).",
        axe2_voisins: "Le verset 3 demandait l'adoration du Seigneur de la Maison. Le verset 4 justifie cette demande en détaillant les bienfaits de ce Seigneur : Il les a nourris et sécurisés. Les deux bienfaits (nourriture et sécurité) sont les deux besoins fondamentaux de l'être humain. La nourriture est le premier bienfait mentionné, ce qui lui donne la priorité.",
        axe3_sourate: "La sourate suit le schéma bienfait → reconnaissance. Le verset 4 est le dernier et le plus détaillé — il nomme les deux bienfaits fondamentaux. La nourriture est le premier pilier de la prospérité de Quraysh. Grâce à leur commerce (voyages d'hiver et d'été), les Quraysh ont la nourriture assurée.",
        axe4_coherence: "Le Coran utilise la racine ṭ'am dans de nombreux passages pour la nourriture et le fait de nourrir (76:8, 90:14, 107:3). La forme IV (aṭ'ama = nourrir) est utilisée comme attribut de bienfaisance, que ce soit divine ou humaine. Le parallèle le plus direct est 16:112 qui décrit aussi la faim et la peur comme conséquences de l'ingratitude.",
        axe5_frequence: "Nourrir les affamés est un acte fondamental de la mission du khalifa. Le Coran revient souvent sur l'obligation de nourrir (107:3, 69:34, 76:8). La nourriture est la base de la justice sociale — sans elle, aucune civilisation n'est possible."
      },
      'Saveur/Expérience sensorielle': {
        senses: ['saveur', 'goût', 'palais', 'appétit', 'délice'],
        status: 'nul',
        proof_ctx: "La saveur est une perception subjective. Le verbe aṭ'ama (forme IV = faire manger) décrit un acte concret de fournir la nourriture, pas l'expérience de la percevoir."
      },
      'Obéissance/Docilité': {
        senses: ['obéir', 'être docile', 'se laisser conduire'],
        status: 'nul',
        proof_ctx: "La docilité est un état intérieur sans rapport avec le contexte. La construction aṭ'amahum min jū'in (Il les a nourris contre la faim) est clairement physique."
      }
    },
    sense_chosen: 'nourrir',
    concept_chosen: 'Gustation/Nourriture'
  },

  '106:4:jwe': {
    concepts: {
      'Faim/Privation': {
        senses: ['avoir faim', 'avoir le ventre vide', 'faim', 'famine', 'épisode de faim', 'état de destitution et de faim', "contraindre quelqu'un à la faim", 'se rendre volontairement affamé', 'montrer la faim', "homme dont la marmite n'est pas pleine", 'homme qui paraît toujours affamé'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Faim/Privation\". Le mot jū'in est un nom indéfini au génitif (après min). Il désigne la faim comme état de manque de nourriture. La construction min jū'in (depuis/contre la faim) fait de la faim l'état dont on est délivré par la nourriture. Le test de compatibilité : un nom indéfini au génitif peut-il exprimer la faim ? Oui — jū' indéfini exprime la faim en général, pas une faim particulière. C'est un état que les Quraysh auraient connu sans les bienfaits du Seigneur. Distinction avec \"Désir ardent/Langueur\" : le désir ardent est un état émotionnel de manque affectif, la faim est un état physique de manque de nourriture. Le contexte (nourrir contre la faim) confirme le sens physique sans ambiguïté.",
        axe1_verset: "Le verset dit aṭ'amahum min jū'in — Il les a nourris contre la faim. Le champ lexical est celui de la subsistance physique : nourrir, faim. Le mot jū' est le contraire de la satiété. La construction min (depuis/contre) montre que la faim est l'état initial, la nourriture est le bienfait qui l'élimine. Le parallèle avec khawf (crainte) au second hémistiche confirme que jū' et khawf sont des maux dont on est délivré.",
        axe2_voisins: "Le verset 3 demande l'adoration. Le verset 4 justifie cette demande par deux bienfaits : délivrance de la faim et délivrance de la crainte. La faim est le premier mal mentionné — c'est le besoin le plus fondamental. Les voyages commerciaux (v2) sont le moyen par lequel la faim a été éliminée.",
        axe3_sourate: "La sourate rappelle les bienfaits. La délivrance de la faim est le bienfait physique fondamental. Les Quraysh, grâce à leur commerce, ne souffrent pas de la faim — c'est un don qui mérite reconnaissance.",
        axe4_coherence: "Le Coran utilise jū' dans d'autres passages pour la faim physique : 2:155 (la faim comme épreuve), 16:112 (un village qui a goûté la faim et la peur — parallèle direct avec 106:4), 20:118 (tu n'auras pas faim au Paradis). Le parallèle avec 16:112 est remarquable : les mêmes mots (jū' et khawf) sont utilisés comme conséquences de l'ingratitude, tandis qu'ici ils sont les maux dont Quraysh est délivré par la grâce divine.",
        axe5_frequence: "Éliminer la faim est un objectif fondamental de la civilisation. Le khalifa qui nourrit les affamés accomplit sa mission. La faim est l'ennemi premier de la justice — un peuple affamé ne peut pas être juste."
      },
      'Désir ardent/Langueur': {
        senses: ["désirer ardemment", "languir de rencontrer quelqu'un", 'languir après ses biens', 'convoiter', 'être insatiable de connaissance'],
        status: 'nul',
        proof_ctx: "Le désir ardent est un état émotionnel. La construction aṭ'amahum min jū'in (Il les a nourris contre la faim) est clairement physique — on ne nourrit pas contre le désir ardent."
      },
      'Minceur/Finesse': {
        senses: ['femme à la taille fine'],
        status: 'nul',
        proof_ctx: "Sens physique isolé sans aucun rapport avec le contexte."
      }
    },
    sense_chosen: 'faim',
    concept_chosen: 'Faim/Privation'
  },

  '106:4:amn': {
    concepts: {
      'Garantie/Protection': {
        senses: ['accorder la sécurité', 'mettre en sécurité', 'donner un sauf-conduit', 'protéger', 'garantir', 'être digne de confiance', 'dépôt confié'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Garantie/Protection\". Le mot āmanahum est un verbe accompli forme IV (af'ala) avec pronom suffixe. La forme IV ajoute la causalité : ce n'est pas \"être en sécurité\" mais \"accorder la sécurité, mettre en sécurité\". Le pronom -hum (eux/les) est le complément d'objet — c'est eux qui reçoivent la sécurité. Le test de compatibilité : un verbe accompli forme IV peut-il exprimer l'acte d'accorder la sécurité dans le passé ? Oui — \"Il les a mis en sécurité\" décrit un acte achevé. La construction min khawfin (contre la crainte) précise que la sécurité remplace la crainte. Distinction avec \"Sécurité/Confiance\" : la sécurité est un état intérieur de celui qui est en paix, la garantie/protection est un acte dirigé vers l'extérieur de celui qui accorde la sécurité. La forme IV (āmana) impose le sens causatif : c'est Dieu qui ACCORDE la sécurité, pas les Quraysh qui SONT en sécurité. Distinction avec \"Foi/Adhésion\" : la foi est un acte intérieur de croire, la protection est un acte extérieur d'accorder la sécurité. La forme IV avec complément d'objet humain (les) impose le sens d'accorder, pas de croire.",
        axe1_verset: "Le verset dit āmanahum min khawfin — Il les a mis en sécurité contre la crainte. Le champ lexical est celui de la protection : sécuriser, crainte. Le verbe āmana (forme IV) est parallèle à aṭ'ama (forme IV) — les deux sont des actes du Seigneur envers les Quraysh. La construction est symétrique : aṭ'amahum min jū'in wa-āmanahum min khawfin. Les deux bienfaits sont nourrir (contre la faim) et sécuriser (contre la crainte).",
        axe2_voisins: "La sécurité est le second bienfait après la nourriture. Les deux forment une paire complète : les besoins physiques (nourriture) et le besoin de paix (sécurité). Les versets 1-2 décrivent les moyens (voyages), le verset 3 demande la reconnaissance, le verset 4 nomme les résultats (nourriture et sécurité). La sécurité est le dernier mot de la sourate, ce qui lui donne une importance conclusive.",
        axe3_sourate: "La sourate rappelle les bienfaits. La sécurité est le bienfait ultime — sans elle, ni le commerce ni la nourriture ne sont possibles. Les Quraysh bénéficient de la sécurité grâce au sanctuaire (la Maison mentionnée au v3) qui rend La Mecque inviolable. La sécurité boucle le cercle : Maison → sécurité → commerce → nourriture → reconnaissance.",
        axe4_coherence: "Le Coran utilise la forme IV de amn (āmana) pour l'acte d'accorder la sécurité. Le parallèle direct est 16:112 : wa-āmana-hā min khawf (et l'a mise en sécurité contre la crainte) — exactement la même construction. En 28:57, le Coran dit que le sanctuaire est un lieu sûr (āmin). La sécurité est liée au sanctuaire dans plusieurs passages.",
        axe5_frequence: "Accorder la sécurité est un acte fondamental de la mission du khalifa. La sécurité est le préalable à toute justice et à toute civilisation. Sans sécurité, pas de commerce, pas de prospérité, pas de paix."
      },
      'Sécurité/Confiance': {
        senses: ['être en sécurité', 'être en paix', 'ne pas craindre', 'se sentir en sûreté', 'confiance', 'fidélité', 'honnêteté'],
        status: 'probable',
        proof_ctx: "La sécurité comme état intérieur est proche mais insuffisante. La forme IV (āmana) impose le sens causatif : quelqu'un ACCORDE la sécurité à quelqu'un d'autre. L'état de sécurité est le résultat, pas l'acte. La frontière philosophique : être en sécurité est un état passif (on est en paix), accorder la sécurité est un acte actif (on protège l'autre). Le sujet du verbe est Dieu (alladhī = celui qui), le complément est les Quraysh (hum). C'est Dieu qui agit, les Quraysh qui reçoivent.",
        axe1_verset: "Si le sens est l'état de sécurité, il faudrait comprendre \"Il les a rendus en sécurité contre la crainte\". C'est grammaticalement proche mais philosophiquement différent. Le verbe à la forme IV (causative) met l'accent sur l'acte d'accorder, pas sur l'état résultant. Le parallèle avec aṭ'ama (nourrir = acte) confirme que les deux verbes décrivent des actes, pas des états.",
        axe2_voisins: "Le verset 4 décrit des actes du Seigneur (nourrir, sécuriser). Les deux verbes sont causatifs (forme IV). L'accent est sur ce que le Seigneur FAIT, pas sur l'état des Quraysh.",
        axe3_sourate: "La sourate rappelle les bienfaits comme actes divins. L'accent est sur le donneur (le Seigneur) pas sur le receveur.",
        axe4_coherence: "La forme IV est utilisée dans le Coran pour l'acte d'accorder la sécurité, distincte de la forme I (être en sécurité) et de la forme IV avec sens de croire.",
        axe5_frequence: "L'acte d'accorder la sécurité est plus actif et plus pertinent pour la mission du khalifa que l'état passif de sécurité."
      },
      'Foi/Adhésion': {
        senses: ['croire', 'avoir la foi', 'adhérer', 'croyant', 'fidèle'],
        status: 'nul',
        proof_ctx: "La foi/adhésion utilise aussi la forme IV (āmana bi = croire en). Mais ici la construction est āmanahum min khawfin (les a sécurisés contre la crainte), avec pronom objet + min (contre). Cette construction n'est jamais utilisée pour la foi dans le Coran. La foi serait āmanū bi-llāhi (ils ont cru en Dieu), pas āmanahum min khawfin."
      },
      'Souhait/Aspiration': {
        senses: ['souhaiter', 'désirer', 'espérer', 'vœu'],
        status: 'nul',
        proof_ctx: "Le souhait est un état intérieur de désir. La construction (verbe causatif + pronom objet + contre la crainte) exclut ce sens."
      }
    },
    sense_chosen: 'mettre en sécurité',
    concept_chosen: 'Garantie/Protection'
  },

  '106:4:xwf': {
    concepts: {
      'Crainte/Peur': {
        senses: ['avoir peur', 'craindre', 'redouter', 'être effrayé', 'peur', 'crainte', 'frayeur', 'épouvanter'],
        status: 'retenu',
        proof_ctx: "Le sens retenu est \"Crainte/Peur\". Le mot khawfin est un nom indéfini au génitif (après min). Il désigne la crainte comme état de peur face à un danger. La construction min khawfin (contre la crainte) fait de la crainte le mal dont on est délivré par la sécurité. Le test de compatibilité : un nom indéfini au génitif peut-il exprimer la crainte ? Oui — khawf indéfini exprime la crainte en général, pas une peur particulière. C'est un état que les Quraysh auraient connu sans la protection divine. Distinction avec \"Précaution/Vigilance\" : la précaution est un acte rationnel de prévention, la crainte est un état émotionnel de peur. Le contexte (sécuriser contre la crainte) montre que c'est l'état de peur qui est éliminé, pas les mesures de précaution.",
        axe1_verset: "Le verset dit āmanahum min khawfin — Il les a mis en sécurité contre la crainte. Le champ lexical est celui de la sécurité et du danger : sécuriser, crainte. Le mot khawf est le contraire de la sécurité (amn). La construction min (contre/depuis) montre que la crainte est l'état initial, la sécurité est le bienfait qui l'élimine. Le parallèle avec jū' (faim) confirme que khawf et jū' sont les deux maux fondamentaux dont les Quraysh sont délivrés.",
        axe2_voisins: "Le verset 3 demande l'adoration du Seigneur de la Maison. Le verset 4 justifie cette demande par la délivrance de la faim et de la crainte. La crainte est le dernier mot de la sourate — elle conclut l'argument. Le fait que la crainte soit mentionnée en dernier lui donne un poids conclusif : la sécurité contre la crainte est le bienfait ultime.",
        axe3_sourate: "La sourate rappelle que les Quraysh vivent en sécurité. La Mecque est un sanctuaire inviolable (haram) où les gens ne craignent rien. Cette absence de crainte est le fondement de la prospérité de Quraysh — sans elle, pas de commerce, pas de voyages, pas de pèlerinage.",
        axe4_coherence: "Le Coran utilise khawf dans de nombreux passages pour la crainte/peur. Le parallèle direct avec 16:112 (fa-adhāqahā llāhu libāsa al-jū'i wa-l-khawfi = Dieu lui a fait goûter le vêtement de la faim et de la crainte) montre que jū' et khawf forment une paire récurrente dans le Coran. En 2:155, le Coran annonce des épreuves par la peur, la faim et la perte — encore la même paire.",
        axe5_frequence: "Éliminer la crainte est un objectif fondamental de la civilisation. Le khalifa qui assure la sécurité permet aux gens de vivre, travailler et s'épanouir sans peur. La crainte paralyse, la sécurité libère."
      },
      'Précaution/Vigilance': {
        senses: ['prendre des précautions', 'être vigilant', 'se méfier', 'anticiper le danger'],
        status: 'peu_probable',
        proof_ctx: "La précaution est un acte rationnel de prévention. Le contexte (sécuriser contre la crainte) montre que c'est l'état émotionnel de peur qui est éliminé, pas les mesures de prudence. On ne sécurise pas quelqu'un contre sa vigilance — on le sécurise contre sa peur.",
        axe1_verset: "Si le sens est la précaution, il faudrait comprendre \"Il les a mis en sécurité contre la vigilance\". Ce qui est contradictoire — on ne délivre pas quelqu'un de sa prudence. Le contexte impose que khawf soit un mal dont on est délivré, pas une qualité.",
        axe2_voisins: "Le parallèle avec jū' (faim) confirme que khawf est un mal à éliminer, comme la faim. La précaution n'est pas un mal.",
        axe3_sourate: "La sourate parle de bienfaits qui éliminent des maux. La crainte est un mal, la précaution est une vertu.",
        axe4_coherence: "Le Coran utilise khawf pour la peur/crainte, pas pour la prudence. D'autres mots sont utilisés pour la prudence (hadhara).",
        axe5_frequence: "La précaution est une vertu, la peur est un obstacle. Le verset parle d'éliminer un obstacle."
      },
      'Diminution/Manque': {
        senses: ['diminuer', 'réduire', 'enlever une partie', 'route qui raccourcit le trajet'],
        status: 'nul',
        proof_ctx: "La diminution est un sens physique isolé sans rapport avec le contexte de sécurité et de crainte."
      }
    },
    sense_chosen: 'crainte',
    concept_chosen: 'Crainte/Peur'
  }
};

// ============================================================
// STEP 3: Insert verse_word_analyses
// ============================================================

async function runStep3(verse) {
  console.log(`\n--- ÉTAPE 3 — ${verse.ref} ---`);

  // Read concepts from DB to ensure exact names
  for (const word of verse.words) {
    const rootId = word.root_id || ROOT_DEFINITIONS[word.word_key]?.id;
    if (!rootId) { console.log(`  skip ${word.word_key} — no root id`); continue; }

    const {data: dbMeanings} = await sb.from('word_meanings')
      .select('concept, sense')
      .eq('analysis_id', rootId)
      .order('display_order');

    const dbConcepts = [...new Set(dbMeanings.map(m => m.concept))];
    console.log(`  ${word.word_key} (id=${rootId}) — concepts en BDD: [${dbConcepts.join(', ')}]`);

    const key = `${verse.ref}:${word.word_key}`;
    const analysis = CONCEPT_ANALYSES[key];
    if (!analysis) { console.log(`  ⚠ Pas d'analyse pour ${key}`); continue; }

    // Verify concept names match DB
    for (const cName of Object.keys(analysis.concepts)) {
      if (!dbConcepts.includes(cName)) {
        console.error(`  ❌ ERREUR: concept "${cName}" absent de la BDD pour ${word.word_key}!`);
      }
    }

    // Check if already exists
    const {data: existing} = await sb.from('verse_word_analyses')
      .select('id')
      .eq('verse_id', verse.id)
      .eq('word_key', word.word_key);

    if (existing && existing.length > 0) {
      console.log(`  ${word.word_key} — déjà analysé (id=${existing[0].id}), skip`);
      continue;
    }

    const {data, error} = await sb.from('verse_word_analyses').insert({
      verse_id: verse.id,
      word_key: word.word_key,
      root: null,
      sense_chosen: analysis.sense_chosen,
      analysis_axes: analysis,
      position: word.position,
      model_used: 'claude-pipeline',
      prompt_version: 'v2-maison'
    }).select('id').single();

    if (error) throw new Error(`Erreur insertion vwa ${key}: ${error.message}`);
    console.log(`  ✓ ${word.word_key} → sens "${analysis.sense_chosen}" (id=${data.id})`);
  }
}

// ============================================================
// STEP 4: Translations
// ============================================================

const TRANSLATIONS = {
  '106:1': {
    translation_arab: "Pour la familiarité de Quraysh,",
    segments: [
      {fr: 'pour', phon: 'li', arabic: 'لِ', position: 0, word_key: null, is_particle: true},
      {fr: 'la familiarité', pos: 'nom', phon: 'īlāfi', arabic: 'إِيلَـٰفِ', position: 1, word_key: 'alf', is_particle: false, sense_retenu: 'familiarité'},
      {fr: 'de Quraysh,', pos: 'nom propre', phon: 'quraysh', arabic: 'قُرَيْشٍ', position: 2, word_key: null, is_particle: true}
    ],
    explanation: `§DEMARCHE§
Le mot **īlāf** est un nom verbal de forme IV (une forme qui ajoute l'idée de causalité — « faire que quelque chose soit »). Ce nom verbal est en idafa (c'est quand deux mots sont liés pour dire que le premier appartient au second ou qu'il le concerne) avec **Quraysh**, le nom de la tribu. La forme IV signifie « le fait de rendre familier » ou « le fait d'établir la familiarité ». La particule **li** (pour/à cause de) introduit la raison pour laquelle quelque chose est dit — ici, elle ouvre la sourate en posant le sujet : c'est pour cette familiarité que Quraysh devrait adorer (le verset 3 complète la phrase).

Le verset 1 est grammaticalement incomplet — il est la première partie d'une phrase qui se termine au verset 3. La structure est : « Pour la familiarité de Quraysh [v1]... qu'ils adorent le Seigneur de cette Maison [v3]. »

§JUSTIFICATION§
**familiarité** — Le sens retenu est « Habitude/Familiarité ». Le mot « familiarité » est choisi car il capture l'idée d'une accoutumance qui rend l'étrange ordinaire et le difficile aisé. Les alternatives : « pacte » (utilisé par Hamidullah) implique un accord formel entre deux parties, alors que le mot arabe décrit un état d'accoutumance progressive. « Union » est écarté car il décrit le rassemblement de parties séparées, alors que le verset parle de la relation de Quraysh avec une pratique (les voyages, précisés au verset 2). « Habitude » est trop neutre — la familiarité inclut la notion de confort et d'aisance que l'habitude seule ne porte pas.

§CRITIQUE§
**familiarité vs pacte** — Les traductions courantes donnent « pacte » (Hamidullah) pour le mot īlāf. Ce choix vient des exégèses classiques qui ont interprété le mot comme un accord diplomatique entre les Quraysh et les tribus voisines pour sécuriser les routes commerciales. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine alf porte d'abord le sens de familiarité et d'accoutumance, puis celui d'union et de réconciliation. Le sens de « pacte » est une lecture exégétique qui restreint le mot à un accord formel, alors que l'étymologie donne un sens plus large : la familiarité établie avec une pratique. La nuance change le sens du verset : « un pacte » est un événement ponctuel, « la familiarité » est un état progressif et durable qui définit l'identité de la tribu.`
  },

  '106:2': {
    translation_arab: "leur familiarité avec le voyage d'hiver et d'été,",
    segments: [
      {fr: 'leur familiarité avec', pos: 'nom', phon: 'īlāfihim', arabic: 'إِۦلَـٰفِهِمْ', position: 1, word_key: 'alf', is_particle: false, sense_retenu: 'familiarité'},
      {fr: 'le voyage', pos: 'nom', phon: 'riḥlata', arabic: 'رِحْلَةَ', position: 2, word_key: 'rhl', is_particle: false, sense_retenu: 'voyage'},
      {fr: "de l'hiver", pos: 'nom', phon: "ash-shitā'i", arabic: 'ٱلشِّتَآءِ', position: 3, word_key: 'shty', is_particle: false, sense_retenu: 'hiver'},
      {fr: 'et', phon: 'wa', arabic: 'وَ', position: 4, word_key: null, is_particle: true},
      {fr: "de l'été,", pos: 'nom', phon: 'aṣ-ṣayfi', arabic: 'ٱلصَّيْفِ', position: 5, word_key: 'syf', is_particle: false, sense_retenu: 'été'}
    ],
    explanation: `§DEMARCHE§
Le mot **īlāfihim** reprend le même nom verbal de forme IV qu'au verset 1, mais avec le pronom possessif **-him** (leur). Ce pronom précise que la familiarité appartient aux Quraysh. Le mot **riḥlata** est un nom féminin singulier à l'accusatif (une forme qui marque le complément d'objet) — c'est le voyage comme complément de la familiarité : leur familiarité AVEC le voyage. Le mot **ash-shitā'i** (l'hiver) est un nom défini avec l'article al- au génitif — il qualifie le voyage : le voyage DE l'hiver. Le mot **aṣ-ṣayfi** (l'été) est construit de la même façon, relié par la conjonction **wa** (et).

La structure est : leur familiarité [avec] le voyage de l'hiver et de l'été. Le verset 2 est une apposition qui développe le verset 1 en précisant l'objet de la familiarité.

§JUSTIFICATION§
**familiarité** — Même sens qu'au verset 1, le mot est repris avec le pronom possessif. Le mot « familiarité » est maintenu pour la cohérence.

**voyage** — Le sens retenu est « Voyage/Départ ». Le mot « voyage » est choisi car riḥla désigne l'acte de se déplacer d'un lieu à un autre, une expédition commerciale. L'alternative « caravane » est écartée car elle désigne le groupe qui voyage, pas l'acte de voyager. L'alternative « monture » est écartée car le verset qualifie l'activité par les saisons (on ne qualifie pas un animal par une saison).

**hiver** — Le sens est univoque. Le mot « hiver » est le seul sens possible dans ce contexte saisonnier.

**été** — Le sens est univoque dans ce contexte saisonnier, confirmé par le parallèle avec l'hiver.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset. La seule différence notable reste le mot « pacte » (pour īlāfihim) au lieu de « familiarité », comme discuté au verset 1.`
  },

  '106:3': {
    translation_arab: "qu'ils adorent alors le Seigneur de cette Maison,",
    segments: [
      {fr: 'alors', phon: 'fa', arabic: 'فَ', position: 0, word_key: null, is_particle: true},
      {fr: "qu'ils", phon: 'l', arabic: 'لْ', position: 1, word_key: null, is_particle: true},
      {fr: 'adorent', pos: 'verbe', phon: "ya'budū", arabic: 'يَعْبُدُوا۟', position: 2, word_key: 'ebd', is_particle: false, sense_retenu: 'adorer'},
      {fr: 'le Seigneur', pos: 'nom', phon: 'rabba', arabic: 'رَبَّ', position: 3, word_key: 'rbb', is_particle: false, sense_retenu: 'seigneur'},
      {fr: 'de cette', phon: 'hādhā', arabic: 'هَـٰذَا', position: 4, word_key: null, is_particle: true},
      {fr: 'Maison,', pos: 'nom', phon: 'al-bayti', arabic: 'ٱلْبَيْتِ', position: 5, word_key: 'byt', is_particle: false, sense_retenu: 'sanctuaire'}
    ],
    explanation: `§DEMARCHE§
La particule **fa** (alors/donc) est une conjonction de conséquence qui lie ce verset aux deux précédents : puisqu'ils ont cette familiarité avec les voyages, ALORS qu'ils adorent. La particule **lām** d'ordre suivie du verbe **ya'budū** (inaccompli, 3e personne du pluriel) crée une injonction : « qu'ils adorent ». L'inaccompli avec le lām d'ordre exprime un ordre indirect — ce n'est pas un impératif direct mais une invitation ferme.

Le mot **rabba** est un nom à l'accusatif (complément d'objet du verbe adorer) en idafa avec **al-bayt** (la Maison) via le démonstratif **hādhā** (cette). La construction « le Seigneur de cette Maison » identifie Dieu par son lien avec un lieu précis que les Quraysh connaissent : la Ka'ba. Le démonstratif « cette » souligne la proximité — c'est la Maison qui est ICI, devant eux, qu'ils gardent et dont ils tirent profit.

Le mot **al-bayti** est un nom défini au génitif. La Maison avec l'article al- est la Maison par excellence — la Ka'ba de La Mecque.

§JUSTIFICATION§
**adorer** — Le sens retenu est « Adoration/Dévotion ». Le mot « adorer » est choisi car il désigne l'acte volontaire de rendre un culte, de reconnaître la grandeur de l'autre. L'alternative « servir » est écartée car elle implique un état de servitude, alors que le verbe inaccompli avec lām d'ordre invite à une action volontaire, pas à un état subi. L'alternative « se soumettre » est écartée car elle décrit un état intérieur d'humilité, alors que l'adoration est un acte extérieur et complet qui inclut le culte, la reconnaissance et la dévotion.

**seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car il désigne celui qui possède, gère et prend soin de ce qui lui appartient. L'alternative « éducateur » est écartée car elle décrit un acte (ce qu'Il fait), alors que le verset identifie une autorité (ce qu'Il est). Le verset 4 détaillera les actes.

**sanctuaire** — Le sens retenu est « Demeure/Sanctuaire ». Le mot « Maison » est utilisé dans la traduction (avec majuscule) car c'est le terme traditionnel pour la Ka'ba. L'alternative « temple » est écartée car elle a une connotation d'autres religions. L'alternative « demeure » est trop générique pour un lieu sacré universel.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « Qu'ils adorent donc le Seigneur de cette Maison » — ce qui correspond à notre traduction. La seule différence stylistique est « donc » (Hamidullah) vs « alors » (notre traduction), les deux rendant la particule fa de conséquence.`
  },

  '106:4': {
    translation_arab: "celui qui les a nourris contre la faim et les a mis en sécurité contre la crainte.",
    segments: [
      {fr: 'celui qui', phon: 'alladhī', arabic: 'ٱلَّذِىٓ', position: 1, word_key: null, is_particle: true},
      {fr: 'les a nourris', pos: 'verbe', phon: "aṭ'amahum", arabic: 'أَطْعَمَهُم', position: 2, word_key: 'tem', is_particle: false, sense_retenu: 'nourrir'},
      {fr: 'contre', phon: 'min', arabic: 'مِّن', position: 3, word_key: null, is_particle: true},
      {fr: 'la faim', pos: 'nom', phon: "jū'in", arabic: 'جُوعٍ', position: 4, word_key: 'jwe', is_particle: false, sense_retenu: 'faim'},
      {fr: 'et', phon: 'wa', arabic: 'وَ', position: 5, word_key: null, is_particle: true},
      {fr: 'les a mis en sécurité', pos: 'verbe', phon: 'āmanahum', arabic: 'ءَامَنَهُم', position: 6, word_key: 'amn', is_particle: false, sense_retenu: 'mettre en sécurité'},
      {fr: 'contre', phon: 'min', arabic: 'مِّنْ', position: 7, word_key: null, is_particle: true},
      {fr: 'la crainte.', pos: 'nom', phon: 'khawfin', arabic: 'خَوْفٍۭ', position: 8, word_key: 'xwf', is_particle: false, sense_retenu: 'crainte'}
    ],
    explanation: `§DEMARCHE§
Le pronom relatif **alladhī** (celui qui) relie ce verset au précédent : le Seigneur de cette Maison EST celui qui... Il introduit deux propositions qui décrivent les actes du Seigneur.

Le verbe **aṭ'amahum** est un verbe accompli de forme IV (une forme qui ajoute l'idée de causalité). La racine ṭ-'-m signifie « goûter, manger ». La forme IV transforme « manger » en « faire manger, nourrir ». Le verbe accompli indique que l'action est achevée — Il les A nourris, c'est fait. Le pronom suffixe **-hum** (les) désigne les Quraysh.

La préposition **min** suivie de **jū'in** (faim, indéfini) signifie « depuis/contre la faim ». La faim est l'état initial dont les Quraysh ont été délivrés.

Le verbe **āmanahum** est aussi un verbe accompli de forme IV. La racine a-m-n signifie « être en sécurité ». La forme IV transforme « être en sécurité » en « mettre en sécurité, accorder la sécurité ». La même construction se répète : Il les a mis en sécurité contre (**min**) la crainte (**khawfin**, indéfini).

La structure parallèle des deux propositions est remarquable : verbe accompli forme IV + pronom + min + nom indéfini. Cette symétrie montre que nourrir et sécuriser sont deux bienfaits de même nature et de même importance.

§JUSTIFICATION§
**nourrir** — Le sens retenu est « Gustation/Nourriture ». Le mot « nourrir » est choisi car la forme IV (aṭ'ama) signifie « faire manger, donner la nourriture ». L'alternative « faire goûter » est écartée car elle implique une expérience sensorielle ponctuelle, alors que nourrir décrit un acte vital et continu. L'alternative « satisfaire » est écartée car elle est trop vague.

**faim** — Le sens retenu est « Faim/Privation ». Le mot « faim » est univoque dans ce contexte. Le parallèle avec la crainte confirme que la faim est un mal dont on est délivré.

**mettre en sécurité** — Le sens retenu est « Garantie/Protection ». L'expression « mettre en sécurité » est choisie car la forme IV (āmana) signifie « accorder la sécurité, faire que quelqu'un soit en sécurité ». L'alternative « rassurer » (utilisée par Hamidullah) est plus faible — rassurer c'est calmer l'inquiétude, mettre en sécurité c'est éliminer le danger réel. L'alternative « protéger » est écartée car elle implique une défense active contre un agresseur, alors que āmana crée un état de sécurité globale.

**crainte** — Le sens retenu est « Crainte/Peur ». Le mot « crainte » est choisi car il est plus large que « peur » (qui est ponctuelle) et moins fort que « terreur ». Il désigne l'état général d'insécurité. L'alternative « peur » est possible mais moins soutenue.

§CRITIQUE§
**mettre en sécurité vs rassurer** — Les traductions courantes donnent « rassurés » (Hamidullah) pour āmanahum. Le mot « rassurer » est plus faible que « mettre en sécurité ». Rassurer, c'est apaiser l'inquiétude de quelqu'un, calmer ses nerfs — l'action porte sur l'état émotionnel. Mettre en sécurité, c'est éliminer la source du danger — l'action porte sur la réalité. D'après les sources étymologiques, la racine a-m-n porte le sens de sécurité réelle et objective, pas juste de réconfort émotionnel. La forme IV (causative) renforce cette idée : c'est ACCORDER la sécurité, pas juste CALMER la peur. La nuance est importante : les Quraysh ne sont pas juste rassurés (émotionnellement apaisés), ils sont mis en sécurité (objectivement protégés).

Pour le reste du verset, les traductions courantes donnent sensiblement le même sens. « Nourris contre la faim » correspond à notre traduction.`
  }
};

// Word daily phrases
const WORD_DAILY = {
  'alf:familiarité': [
    {arabic: 'أَلِفَ ٱلسَّفَرَ', phon: 'alifa as-safar', french: "Il s'est familiarisé avec le voyage.", sense: 'familiarité'},
    {arabic: 'إِيلَافُ ٱلتُّجَّارِ', phon: 'īlāf at-tujjār', french: "La familiarité des commerçants avec leur route.", sense: 'familiarité'},
    {arabic: 'أَلِفْتُ هَذَا ٱلْمَكَانَ', phon: 'aliftu hādhā al-makān', french: "Je me suis habitué à cet endroit.", sense: 'familiarité'}
  ],
  'rhl:voyage': [
    {arabic: 'رِحْلَةُ ٱلصَّيْفِ', phon: 'riḥlat aṣ-ṣayf', french: "Le voyage d'été.", sense: 'voyage'},
    {arabic: 'رَحَلُوا إِلَى ٱلشَّامِ', phon: 'raḥalū ilā ash-shām', french: "Ils sont partis vers la Syrie.", sense: 'voyage'},
    {arabic: 'هَذِهِ رِحْلَتُنَا', phon: 'hādhihi riḥlatunā', french: "C'est notre voyage.", sense: 'voyage'}
  ],
  'shty:hiver': [
    {arabic: 'جَاءَ ٱلشِّتَاءُ', phon: "jā'a ash-shitā'", french: "L'hiver est arrivé.", sense: 'hiver'},
    {arabic: 'رِحْلَةُ ٱلشِّتَاءِ', phon: "riḥlat ash-shitā'i", french: "Le voyage d'hiver.", sense: 'hiver'},
    {arabic: 'يَوْمٌ شَاتٍ', phon: 'yawmun shātin', french: "Un jour d'hiver.", sense: 'hiver'}
  ],
  'syf:été': [
    {arabic: 'جَاءَ ٱلصَّيْفُ', phon: 'jā\'a aṣ-ṣayf', french: "L'été est arrivé.", sense: 'été'},
    {arabic: 'يَوْمٌ صَائِفٌ', phon: 'yawmun ṣā\'if', french: "Un jour d'été.", sense: 'été'},
    {arabic: 'قَضَيْنَا ٱلصَّيْفَ هُنَاكَ', phon: 'qaḍaynā aṣ-ṣayfa hunāk', french: "Nous avons passé l'été là-bas.", sense: 'été'}
  ],
  'ebd:adorer': [
    {arabic: 'نَعْبُدُ ٱللَّهَ', phon: "na'budu allāh", french: "Nous adorons Dieu.", sense: 'adorer'},
    {arabic: 'ٱعْبُدُوا رَبَّكُمْ', phon: "u'budū rabbakum", french: "Adorez votre Seigneur.", sense: 'adorer'},
    {arabic: 'هُوَ يَعْبُدُ ٱللَّهَ بِإِخْلَاصٍ', phon: "huwa ya'budu allāha bi-ikhlāṣ", french: "Il adore Dieu avec sincérité.", sense: 'adorer'}
  ],
  'rbb:seigneur': [
    {arabic: 'رَبُّ ٱلْعَالَمِينَ', phon: 'rabb al-\'ālamīn', french: "Le Seigneur des mondes.", sense: 'seigneur'},
    {arabic: 'يَا رَبِّ', phon: 'yā rabbī', french: "Ô mon Seigneur.", sense: 'seigneur'},
    {arabic: 'رَبُّ هَذَا ٱلْبَيْتِ', phon: 'rabb hādhā al-bayt', french: "Le Seigneur de cette Maison.", sense: 'seigneur'}
  ],
  'byt:sanctuaire': [
    {arabic: 'ٱلْبَيْتُ ٱلْحَرَامُ', phon: 'al-bayt al-ḥarām', french: "La Maison sacrée.", sense: 'sanctuaire'},
    {arabic: 'بَيْتُ ٱللَّهِ', phon: 'bayt allāh', french: "La Maison de Dieu.", sense: 'sanctuaire'},
    {arabic: 'ذَهَبْنَا إِلَى ٱلْبَيْتِ', phon: 'dhahabnā ilā al-bayti', french: "Nous sommes allés à la Maison.", sense: 'sanctuaire'}
  ],
  'tem:nourrir': [
    {arabic: 'أَطْعَمَهُمُ ٱللَّهُ', phon: "aṭ'amahumu allāh", french: "Dieu les a nourris.", sense: 'nourrir'},
    {arabic: 'أَطْعِمِ ٱلْمِسْكِينَ', phon: "aṭ'im al-miskīn", french: "Nourris le pauvre.", sense: 'nourrir'},
    {arabic: 'يُطْعِمُ وَلَا يُطْعَمُ', phon: "yuṭ'imu wa-lā yuṭ'am", french: "Il nourrit et n'est pas nourri.", sense: 'nourrir'}
  ],
  'jwe:faim': [
    {arabic: 'أَنَا جَائِعٌ', phon: "anā jā'i'", french: "J'ai faim.", sense: 'faim'},
    {arabic: 'مَاتَ مِنَ ٱلْجُوعِ', phon: 'māta min al-jū\'', french: "Il est mort de faim.", sense: 'faim'},
    {arabic: 'لَا جُوعَ بَعْدَ ٱلْيَوْمِ', phon: "lā jū'a ba'da al-yawm", french: "Plus de faim après aujourd'hui.", sense: 'faim'}
  ],
  'amn:mettre en sécurité': [
    {arabic: 'آمَنَهُمُ ٱللَّهُ', phon: 'āmanahumu allāh', french: "Dieu les a mis en sécurité.", sense: 'mettre en sécurité'},
    {arabic: 'هَذَا بَلَدٌ آمِنٌ', phon: 'hādhā baladun āmin', french: "C'est un pays sûr.", sense: 'mettre en sécurité'},
    {arabic: 'آمَنَهُ مِنْ كُلِّ خَوْفٍ', phon: 'āmanahu min kulli khawf', french: "Il l'a mis en sécurité contre toute crainte.", sense: 'mettre en sécurité'}
  ],
  'xwf:crainte': [
    {arabic: 'لَا خَوْفَ عَلَيْهِمْ', phon: 'lā khawfa \'alayhim', french: "Pas de crainte pour eux.", sense: 'crainte'},
    {arabic: 'خَافَ مِنَ ٱلْعَدُوِّ', phon: "khafa min al-aduww", french: "Il a craint l'ennemi.", sense: 'crainte'},
    {arabic: 'ٱلْخَوْفُ يَمْنَعُ ٱلْعَمَلَ', phon: "al-khawfu yamna'u al-'amal", french: "La crainte empêche l'action.", sense: 'crainte'}
  ]
};

async function runStep4(verse) {
  console.log(`\n--- ÉTAPE 4 — ${verse.ref} ---`);

  const tr = TRANSLATIONS[verse.ref];
  if (!tr) { console.log('  ⚠ Pas de traduction'); return; }

  // Verify sense_retenu in segments matches word_meanings
  for (const seg of tr.segments) {
    if (seg.word_key && seg.sense_retenu) {
      const rootId = ROOT_DEFINITIONS[seg.word_key]?.id;
      if (rootId) {
        const {data: wm} = await sb.from('word_meanings')
          .select('sense')
          .eq('analysis_id', rootId);
        const senses = wm.map(m => m.sense);
        if (!senses.includes(seg.sense_retenu)) {
          console.error(`  ❌ sense_retenu "${seg.sense_retenu}" absent de word_meanings pour ${seg.word_key}! Senses dispo: [${senses.join(', ')}]`);
        }
      }
    }
  }

  // Update verse_analyses
  const {error: vaErr} = await sb.from('verse_analyses')
    .update({
      translation_arab: tr.translation_arab,
      translation_explanation: tr.explanation,
      segments: tr.segments
    })
    .eq('id', verse.analysisId);

  if (vaErr) throw new Error(`Erreur update verse_analyses ${verse.ref}: ${vaErr.message}`);
  console.log(`  ✓ verse_analyses ${verse.analysisId} mis à jour`);
  console.log(`  Traduction : "${tr.translation_arab}"`);

  // Insert word_daily
  for (const word of verse.words) {
    const key = `${word.word_key}:${CONCEPT_ANALYSES[`${verse.ref}:${word.word_key}`]?.sense_chosen}`;
    const dailyPhrases = WORD_DAILY[key];
    if (!dailyPhrases) continue;

    const rootId = ROOT_DEFINITIONS[word.word_key]?.id;
    if (!rootId) continue;

    // Check if already exists
    const {data: existing} = await sb.from('word_daily')
      .select('id')
      .eq('analysis_id', rootId)
      .eq('sense', dailyPhrases[0].sense);

    if (existing && existing.length > 0) {
      console.log(`  word_daily ${word.word_key}:${dailyPhrases[0].sense} — déjà existant, skip`);
      continue;
    }

    const rows = dailyPhrases.map(p => ({
      analysis_id: rootId,
      arabic: p.arabic,
      phon: p.phon,
      french: p.french,
      sense: p.sense
    }));

    const {error: wdErr} = await sb.from('word_daily').insert(rows);
    if (wdErr) throw new Error(`Erreur insertion word_daily ${word.word_key}: ${wdErr.message}`);
    console.log(`  ✓ word_daily ${word.word_key}:${dailyPhrases[0].sense} — 3 phrases`);
  }
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  try {
    // STEP 2: Create all roots and meanings
    await runStep2();

    // Fill in dynamic root IDs
    const syfDef = ROOT_DEFINITIONS.syf;
    const jweDef = ROOT_DEFINITIONS.jwe;

    // Update VERSES with dynamic IDs
    for (const v of VERSES) {
      for (const w of v.words) {
        if (w.word_key === 'syf') w.root_id = syfDef.id;
        if (w.word_key === 'jwe') w.root_id = jweDef.id;
      }
    }

    // Process verse by verse: step 3 then step 4
    for (const verse of VERSES) {
      await runStep3(verse);
      await runStep4(verse);

      // Log summary
      console.log(`\nVERSET ${verse.ref} — TERMINÉ`);
      for (const word of verse.words) {
        const key = `${verse.ref}:${word.word_key}`;
        const analysis = CONCEPT_ANALYSES[key];
        if (analysis) {
          const concept = analysis.concept_chosen;
          const sense = analysis.sense_chosen;
          console.log(`  ${word.word_key} (${ROOT_DEFINITIONS[word.word_key]?.id || '?'}) → sens "${concept}" → mot français "${sense}"`);
        }
      }
      const tr = TRANSLATIONS[verse.ref];
      if (tr) console.log(`  Traduction : "${tr.translation_arab}"`);
    }

    console.log('\n========== PIPELINE S106 TERMINÉE ==========');

  } catch (err) {
    console.error('ERREUR:', err.message);
    process.exit(1);
  }
}

main();
