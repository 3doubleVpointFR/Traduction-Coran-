// Pipeline V2 — Sourate 1 — ÉTAPE 2 COMPLÈTE (toutes les racines)
// Extraction Lane's SQLite + regroupement par concepts + insertion en base
const { createClient } = require('@supabase/supabase-js')
const Database = require('better-sqlite3')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const ldb = new Database(require('path').join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))

function extractSenses(rootAr) {
  const entries = ldb.prepare('SELECT headword, xml FROM entry WHERE root = ? ORDER BY id').all(rootAr)
  const results = []
  let count = 0
  for (const e of entries) {
    const parts = e.xml.split(/<sense[^>]*>[^<]*<\/sense>/)
    for (const part of parts) {
      const regex = /<hi rend="ital">(.*?)<\/hi>/g
      let match, defs = []
      while ((match = regex.exec(part)) !== null) { defs.push(match[1]) }
      if (defs.length > 0) {
        const fullDef = defs.join(' ').replace(/\s+/g, ' ').trim()
        if (fullDef.length > 3) { count++; results.push({ n: count, hw: e.headword, def: fullDef }) }
      }
    }
  }
  return results
}

async function insertRoot(aid, key, arRoot, concepts) {
  // Vérifier si déjà fait
  const { count } = await db.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', aid)
  if (count > 0) {
    console.log('  [' + key + '] SKIP — ' + count + ' sens déjà en base')
    return
  }

  const senses = extractSenses(arRoot)
  console.log('  [' + key + '] ' + senses.length + ' sens extraits du Lane\'s')

  // Insérer chaque sens avec son concept
  let order = 0
  for (const [conceptName, conceptData] of Object.entries(concepts)) {
    for (const senseName of conceptData.senses) {
      order++
      await db.from('word_meanings').insert({
        analysis_id: aid,
        sense: senseName,
        sense_ar: '',
        description: conceptData.description,
        display_order: order,
        meaning_type: 'etymology',
        concept: conceptName,
      })
    }
  }

  // Compter concepts
  const conceptNames = Object.keys(concepts)
  const totalSenses = Object.values(concepts).reduce((acc, c) => acc + c.senses.length, 0)
  console.log('    → ' + totalSenses + ' sens insérés en ' + conceptNames.length + ' concepts')
  for (const [name, data] of Object.entries(concepts)) {
    console.log('      ' + name + ' (' + data.senses.length + ' sens)')
  }
}

async function run() {
  console.log('============================================')
  console.log('  ÉTAPE 2 — SOURATE 1 — TOUTES LES RACINES')
  console.log('============================================')
  console.log('')

  // ═══ smw (249) ═══
  await insertRoot(249, 'smw', 'سمو', {
    'Hauteur/Élévation': {
      description: 'Réalité physique et abstraite de ce qui se dresse, se lève, dépasse. Mouvement ascendant depuis le bas vers le haut, que ce soit physiquement (se lever, monter) ou socialement (noblesse, éminence). C\'est un état qui se manifeste vers l\'extérieur et qui peut être observé par les autres.',
      senses: ['être haut', 'se dresser', 'monter', 'lever le regard', 'aspirer', 'noble', 'hautain', 'rivaliser en éminence', 'élever quelqu\'un', 'dépasser en nombre', 'étalon qui bondit', 'forme vue de loin', 'lune qui se dresse', 'surpasser', 'éminent']
    },
    'Ciel/Ce qui couvre': {
      description: 'Ce qui est au-dessus et enveloppe. Le ciel comme voûte qui recouvre la terre, et tout ce qui sert de couverture au-dessus de quelque chose. Inclut les phénomènes qui viennent d\'en haut (pluie, nuages). C\'est une réalité extérieure permanente et observable.',
      senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage', 'dos', 'semelle supérieure', 'pièce de tissu supérieure', 'céleste', 'bounty']
    },
    'Nom/Identification': {
      description: 'Réalité extérieure et permanente qui permet d\'identifier, de distinguer et de communiquer. Le nom est un signe qui pointe vers ce qu\'il désigne. Il sort de celui qui nomme et atteint ce qui est nommé. Il crée un pont entre la chose et celui qui la connaît.',
      senses: ['nom', 'nommer', 'prononcer le nom de Dieu', 'se nommer', 's\'appeler mutuellement', 'demander le nom', 'renommée', 'nommé', 'homonyme', 'nominal', 'qualité de nom', 'revendiquer une parenté']
    },
    'Chasse': {
      description: 'Activité extérieure de poursuite et de capture. Mouvement actif vers l\'extérieur pour atteindre une cible. C\'est un acte ponctuel et dirigé.',
      senses: ['chasser', 'chasseurs', 'chaussettes de chasseur', 'inciter à chasser', 'tester une chamelle']
    },
    'Divers': {
      description: 'Sens isolés qui ne forment pas de champ sémantique cohérent avec les autres.',
      senses: ['égal', 'choisir', 'visiter', 'se diriger vers Es-Semaweh', 'faire partir', 'monter à cheval', 'regarder la silhouette', 'désir qui resurgit']
    },
  })

  // ═══ rhm (251) ═══
  await insertRoot(251, 'rhm', 'رحم', {
    'Utérus/Reproduction': {
      description: 'Réalité physique intérieure liée à l\'organe maternel et aux processus de reproduction. L\'utérus est le lieu clos et protégé où la vie se forme. C\'est un état intérieur, physique et permanent tant que l\'organe existe.',
      senses: ['utérus', 'vulve', 'maladie de l\'utérus', 'utérus gonflé', 'chamelle malade post-partum', 'sortie de l\'utérus']
    },
    'Parenté/Lien familial': {
      description: 'Relation horizontale entre humains fondée sur le partage d\'un lien biologique (la matrice commune). C\'est un état permanent et extérieur qui relie les personnes entre elles. Le lien existe indépendamment de la volonté des parties.',
      senses: ['lien de parenté', 'parents par les femmes', 'parent interdit au mariage', 'sentiment de parenté', 'connecté par parenté']
    },
    'Miséricorde/Tendresse': {
      description: 'Mouvement intérieur de tendresse qui se dirige vers l\'extérieur en actes de bienfaisance. La miséricorde part de celui qui la ressent et atteint celui qui la reçoit. C\'est une qualité permanente qui pousse à faire du bien, à pardonner, à protéger.',
      senses: ['miséricorde', 'pardon', 'traiter avec compassion', 'dire "que Dieu te fasse miséricorde"', 'se forcer à la compassion', 'miséricorde réciproque', 'demander la miséricorde', 'le Compatissant', 'plus miséricordieux', 'objet de miséricorde', 'traité avec beaucoup de compassion']
    },
    'Provision/Bienfait matériel': {
      description: 'Manifestation concrète et matérielle de la miséricorde. C\'est le résultat tangible de la tendresse : la pluie qui nourrit, les moyens de subsistance, l\'abondance. C\'est extérieur, observable et souvent ponctuel.',
      senses: ['subsistance', 'pluie', 'abondance', 'prophétie']
    },
    'Divers': {
      description: 'Sens isolés sans champ sémantique cohérent.',
      senses: ['La Mecque', 'Médine', 'outre abîmée', 'la crainte vaut mieux que la pitié']
    },
  })

  // ═══ hmd (252) ═══
  await insertRoot(252, 'hmd', 'حمد', {
    'Louange/Éloge': {
      description: 'Acte extérieur d\'expression positive dirigé vers quelqu\'un pour ce qu\'il est ou ce qu\'il fait. La louange sort de celui qui loue et atteint celui qui est loué. C\'est un acte volontaire, permanent et inconditionnel — on peut louer sans avoir reçu de bienfait.',
      senses: ['louer', 'louange', 'éloge', 'loué', 'digne de louange', 'lieu de louange', 'bannière de louange', 'louable']
    },
    'Gratitude/Remerciement': {
      description: 'Acte extérieur de reconnaissance dirigé vers quelqu\'un pour un bienfait reçu. La gratitude est conditionnelle — elle nécessite un bienfait préalable. Elle sort de celui qui remercie et atteint celui qui est remercié.',
      senses: ['remercier', 'gratitude', 'reconnaissance', 'satisfait de']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['chauffer', 'terre noire']
    },
  })

  // ═══ rbb (253) ═══
  await insertRoot(253, 'rbb', 'رب', {
    'Croissance/Augmentation': {
      description: 'Réalité physique de ce qui grandit, augmente, se développe. C\'est un processus graduel et continu. Le sens premier est l\'augmentation en taille ou en quantité.',
      senses: ['augmenter', 'croître', 'faire grandir', 'nourrir', 'développer', 'excès', 'colline', 'éminence']
    },
    'Seigneurie/Autorité bienveillante': {
      description: 'Relation extérieure permanente entre un maître et ce qu\'il gouverne. Le seigneur possède, élève et entretient. C\'est un acte dirigé vers l\'extérieur : le seigneur fait grandir ce qui est sous sa responsabilité. L\'autorité inclut la possession, l\'éducation et le soin.',
      senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner']
    },
    'Éducation/Accompagnement': {
      description: 'Acte extérieur et continu d\'accompagnement dans la croissance. Élever un enfant, éduquer, former. C\'est un processus long et permanent qui transforme celui qui le reçoit.',
      senses: ['élever un enfant', 'éduquer', 'former', 'accompagner la croissance']
    },
    'Commerce/Usure': {
      description: 'Augmentation dans le domaine financier. L\'usure est l\'augmentation illégitime d\'une dette. C\'est un acte extérieur et transactionnel.',
      senses: ['usure', 'augmentation de dette', 'intérêt']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['essoufflement', 'fixer', 'rassembler', 'groupe', 'confiture']
    },
  })

  // ═══ elm (254) ═══
  await insertRoot(254, 'elm', 'علم', {
    'Savoir/Connaissance': {
      description: 'Réalité intérieure de la compréhension et de la certitude. Le savoir est un état permanent qui réside dans l\'esprit de celui qui sait. C\'est la capacité de distinguer le vrai du faux par la compréhension profonde.',
      senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement']
    },
    'Marque/Signe': {
      description: 'Réalité extérieure et observable qui permet d\'identifier. Le signe est ce qui se distingue et rend visible. C\'est un repère physique ou abstrait qui pointe vers quelque chose.',
      senses: ['marquer', 'signe', 'drapeau', 'montagne', 'repère', 'étendard', 'lèvre fendue']
    },
    'Monde/Création': {
      description: 'L\'ensemble des êtres créés, la totalité de ce qui existe. Le monde est extérieur, observable et englobant. Le Lane\'s lie ce mot à la racine "marquer" : le monde est le signe par lequel on connaît le Créateur.',
      senses: ['monde', 'les mondes', 'ensemble des créatures', 'univers']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['enseigner', 'informer', 'nommer', 'homonyme']
    },
  })

  // ═══ mlk (256) ═══
  await insertRoot(256, 'mlk', 'ملك', {
    'Possession/Autorité': {
      description: 'Réalité extérieure de détention avec droit et autorité. Posséder implique commander, interdire et disposer. Le possesseur a le pouvoir sur ce qu\'il possède. C\'est un état permanent tant que la possession dure.',
      senses: ['posséder', 'maître', 'possesseur', 'propriété', 'biens', 'esclave', 'asservir']
    },
    'Royauté/Souveraineté': {
      description: 'Autorité suprême exercée sur un peuple ou un territoire. Le roi commande et gouverne. C\'est un acte extérieur permanent dirigé vers les sujets.',
      senses: ['roi', 'royaume', 'règne', 'souverain', 'couronnement', 'trône']
    },
    'Ange/Messager': {
      description: 'Être qui transmet la communication. Le Lane\'s lie ce sens à la racine par l\'idée de message et d\'envoi.',
      senses: ['ange', 'messager', 'message']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['pâte', 'maîtriser soi-même', 'eau stagnante']
    },
  })

  // ═══ ywm (257) ═══
  await insertRoot(257, 'ywm', 'يوم', {
    'Temps/Période': {
      description: 'Réalité extérieure et universelle du temps qui passe. Le jour est une unité de mesure du temps, que ce soit la période de lumière ou le temps en général. C\'est permanent et cyclique.',
      senses: ['jour', 'journée', 'temps', 'période']
    },
    'Événement/Moment marquant': {
      description: 'Un moment précis qui se distingue dans le temps. Un jour particulier marqué par un événement important. C\'est ponctuel et identifiable.',
      senses: ['événement', 'bataille', 'jour de combat', 'jour marquant']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['étape', 'distance d\'un jour de marche']
    },
  })

  // ═══ dyn (258) ═══
  await insertRoot(258, 'dyn', 'دين', {
    'Obéissance/Soumission': {
      description: 'Acte extérieur et continu de se conformer à une autorité. L\'obéissance sort de celui qui obéit et atteint celui à qui on obéit. C\'est un acte volontaire et relationnel.',
      senses: ['obéir', 'se soumettre', 'soumission', 'assujettissement']
    },
    'Religion/Système': {
      description: 'Ensemble de croyances et de pratiques auxquelles on se conforme. C\'est un cadre extérieur permanent qui organise la conduite. Le système est global et englobant.',
      senses: ['religion', 'système de croyances', 'pratique', 'coutume', 'habitude']
    },
    'Rétribution/Compte': {
      description: 'Acte extérieur de rendre à chacun ce qu\'il mérite pour ses actes. La rétribution sort de celui qui rétribue et atteint celui qui est rétribué. C\'est le résultat final d\'une évaluation.',
      senses: ['rétribution', 'récompense', 'punition', 'compensation', 'rendre ce qui est dû', 'jugement']
    },
    'Dette/Obligation': {
      description: 'Relation extérieure et transactionnelle entre un créancier et un débiteur. La dette lie deux parties par une obligation de remboursement.',
      senses: ['dette', 'créance', 'obligation financière', 'prêt']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['maladie', 'pluie continue']
    },
  })

  // ═══ ebd (259) ═══
  await insertRoot(259, 'ebd', 'عبد', {
    'Adoration/Dévotion': {
      description: 'Acte extérieur et continu de dévotion totale envers Dieu ou ce qu\'on prend pour divinité. L\'adoration sort de celui qui adore et se dirige vers l\'objet d\'adoration. C\'est un engagement permanent et volontaire.',
      senses: ['adorer', 'servir', 'vouer un culte', 'se dévouer', 'dévotion', 'adoration']
    },
    'Servitude/Esclavage': {
      description: 'État extérieur de soumission d\'une personne à une autre. Le serviteur est celui dont la volonté est subordonnée à celle du maître. C\'est un état permanent et subi ou accepté.',
      senses: ['serviteur', 'esclave', 'être humain', 'asservir', 'rendre soumis', 'aplanir un chemin']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['être en colère', 'mépriser', 'colérique']
    },
  })

  // ═══ ewn (260) ═══
  await insertRoot(260, 'ewn', 'عون', {
    'Aide/Assistance': {
      description: 'Acte extérieur dirigé vers l\'autre pour lui permettre d\'accomplir ce qu\'il ne peut pas faire seul. L\'aide sort de celui qui aide et atteint celui qui est aidé. C\'est un acte relationnel qui peut être ponctuel ou continu.',
      senses: ['aide', 'secours', 'assistance', 'soutien', 'aider', 'prêter secours']
    },
    'Demande d\'aide': {
      description: 'Acte extérieur actif de chercher le secours de quelqu\'un. La demande sort de celui qui demande et atteint celui à qui on demande. C\'est un acte volontaire et ponctuel qui implique la reconnaissance de son propre besoin.',
      senses: ['demander l\'aide', 'chercher le secours', 'solliciter l\'assistance']
    },
    'Entraide/Réciprocité': {
      description: 'Acte extérieur réciproque où les parties s\'aident mutuellement. L\'aide circule dans les deux sens. C\'est un acte relationnel et social.',
      senses: ['s\'entraider', 'aide réciproque', 'coopération']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['serviteur', 'garde armé', 'âge moyen', 'guerre récurrente', 'captif']
    },
  })

  // ═══ hdy (261) ═══
  await insertRoot(261, 'hdy', 'هدى', {
    'Guidance/Direction': {
      description: 'Acte extérieur de montrer le chemin correct à quelqu\'un. La guidance sort de celui qui guide et atteint celui qui est guidé. C\'est un acte relationnel qui suppose une connaissance du bon chemin et la volonté de le partager.',
      senses: ['guider', 'diriger vers la bonne voie', 'montrer le chemin', 'guidance', 'se guider soi-même']
    },
    'Conduite/Comportement': {
      description: 'Manière d\'agir et de se comporter. La conduite est extérieure et observable. C\'est un état permanent qui reflète le caractère de la personne.',
      senses: ['conduite', 'manière d\'agir', 'comportement calme']
    },
    'Don/Offrande': {
      description: 'Acte extérieur de donner quelque chose à quelqu\'un. Le don sort de celui qui donne et atteint celui qui reçoit. C\'est un acte ponctuel et volontaire.',
      senses: ['cadeau', 'offrande', 'sacrifice', 'présent']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['conduire une mariée', 'repentance']
    },
  })

  // ═══ srt (262) ═══
  await insertRoot(262, 'srt', 'صرط', {
    'Chemin/Voie': {
      description: 'Réalité extérieure et directionnelle sur laquelle on se déplace. Le chemin est un parcours qu\'on emprunte et qu\'on peut suivre ou quitter. C\'est permanent, observable et partageable — plusieurs personnes peuvent emprunter le même chemin.',
      senses: ['chemin', 'route', 'voie']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['épée longue', 'pont de l\'au-delà']
    },
  })

  // ═══ qwm (263) ═══
  await insertRoot(263, 'qwm', 'قوم', {
    'Verticalité/Droiture': {
      description: 'Réalité physique et morale de ce qui se tient droit, sans déviation. La verticalité est observable de l\'extérieur. C\'est un état permanent tant qu\'on le maintient. La droiture morale est l\'extension de la droiture physique.',
      senses: ['se lever', 'se dresser', 'droit', 'rectitude', 'redresser', 'corriger', 'se tenir debout']
    },
    'Peuple/Communauté': {
      description: 'Groupe de personnes qui se tiennent ensemble. Le peuple est une réalité extérieure, observable et permanente. Le lien est celui de la communauté, pas de la parenté.',
      senses: ['peuple', 'communauté', 'tribu', 'nation', 'groupe']
    },
    'Gestion/Administration': {
      description: 'Acte extérieur de prendre en charge une affaire et de la diriger. Celui qui gère se lève pour s\'occuper de quelque chose. C\'est un acte continu et responsable.',
      senses: ['gérer', 'administrer', 'prendre en charge', 'diriger', 'veiller sur']
    },
    'Valeur/Mesure': {
      description: 'Réalité abstraite qui permet d\'estimer la juste mesure de quelque chose. La valeur est un jugement qui évalue ce que quelque chose vaut.',
      senses: ['valeur', 'prix', 'estimation', 'stature', 'taille']
    },
    'Subsistance': {
      description: 'Ce qui permet de survivre, la nourriture qui soutient la vie. C\'est ce grâce à quoi on se tient debout (on survit).',
      senses: ['subsistance', 'nourriture', 'ce qui fait vivre']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['lieu', 'résidence', 'station']
    },
  })

  // ═══ nem (264) ═══
  await insertRoot(264, 'nem', 'نعم', {
    'Douceur/Aisance': {
      description: 'Réalité physique et sensorielle de ce qui est agréable au toucher et à la vie. La douceur est une qualité observable et permanente. Elle rend la vie confortable et plaisante.',
      senses: ['douceur', 'tendresse', 'souplesse', 'délicatesse', 'vie agréable', 'confort', 'aisance', 'fraîcheur', 'floraison']
    },
    'Bienfait/Faveur': {
      description: 'Acte extérieur d\'accorder quelque chose de bon à quelqu\'un. Le bienfait sort de celui qui donne et atteint celui qui reçoit. C\'est un acte volontaire qui adoucit la vie de l\'autre. La forme IV (an\'ama) ajoute l\'idée de "faire en sorte que" — accorder activement le bienfait.',
      senses: ['bienfait', 'faveur', 'bénédiction', 'richesse', 'accorder un bienfait', 'nourrir bien', 'combler']
    },
    'Bétail/Animaux': {
      description: 'Troupeau d\'animaux domestiques, source concrète de richesse et de bien-être dans la vie arabe. C\'est une réalité extérieure, observable et matérielle.',
      senses: ['bétail', 'troupeau', 'chameaux', 'autruche']
    },
    'Affirmation': {
      description: 'Particule d\'approbation et de confirmation. Acte extérieur et ponctuel qui sort de celui qui affirme.',
      senses: ['oui', 'certes', 'excellent']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['étoiles de Sagittaire', 'os de la jambe', 'veine']
    },
  })

  // ═══ ely (265) ═══
  await insertRoot(265, 'ely', 'علو', {
    'Hauteur/Domination': {
      description: 'Réalité physique et abstraite de ce qui est au-dessus, qui dépasse, qui domine. La hauteur est observable de l\'extérieur. Elle peut être physique (monter, s\'élever) ou sociale (dominer, surpasser). C\'est un état qui se manifeste vers l\'extérieur.',
      senses: ['être haut', 'monter', 'dominer', 'surpasser', 'élever', 's\'exalter', 'supérieur', 'noble', 'éminent', 'fort', 'lion', 'orgueilleux']
    },
    'Sur/Au-dessus (préposition)': {
      description: 'Position relative d\'un élément par rapport à un autre. Être au-dessus de, en surplomb de. C\'est une relation spatiale extérieure et observable. Dans le Coran, ala est souvent une préposition qui indique la position ou la direction.',
      senses: ['sur', 'au-dessus de', 'vers', 'contre', 'pour', 'à propos de', 'malgré', 'selon', 'avec']
    },
    'Lieu élevé': {
      description: 'Endroit physique qui est en hauteur. C\'est une réalité extérieure, observable et permanente.',
      senses: ['sommet', 'étage supérieur', 'chambre haute', 'région haute du Nejd', 'partie supérieure', 'enclume']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['superscription', 'chamelle robuste', 'hyène', 'chaussettes', 'descendre', 'enlever', 'miel']
    },
  })

  // ═══ ghyr (266) ═══
  await insertRoot(266, 'ghyr', 'غير', {
    'Changement/Altération': {
      description: 'Processus de transformation d\'un état à un autre. Le changement est un mouvement, pas un état. C\'est un acte qui peut être intérieur (quelque chose se transforme) ou extérieur (quelqu\'un transforme quelque chose).',
      senses: ['changer', 'altérer', 'transformer', 'modifier', 'échanger', 'devenir autre', 'arracher les cheveux blancs']
    },
    'Autre/Exclusion': {
      description: 'Acte de séparation active entre deux catégories. "Autre" constate passivement la différence, "sauf" exclut activement. C\'est un outil de catégorisation qui trace une frontière entre ce qui est inclus et ce qui est exclu.',
      senses: ['autre', 'sauf', 'excepté', 'différent', 'exclusion', 'pas', 'n\'est pas', 'sans']
    },
    'Jalousie/Protection': {
      description: 'Sentiment intérieur protecteur intense envers ce qu\'on possède. La jalousie est une émotion qui reste intérieure mais qui peut se manifester par des actes de protection. C\'est un état permanent tant que l\'objet de la jalousie existe.',
      senses: ['jalousie', 'très jaloux', 'plus jaloux', 'protéger ce qui est sien']
    },
    'Provision/Subsistance': {
      description: 'Acte extérieur de pourvoir aux besoins d\'une famille. C\'est un acte dirigé vers l\'extérieur et ponctuel.',
      senses: ['provision de blé', 'pourvoir sa famille', 'obtenir un bénéfice']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['mensonge', 'terre arrosée', 'sang versé', 'badge des non-musulmans', 'discours']
    },
  })

  // ═══ ghdb (267) ═══
  await insertRoot(267, 'ghdb', 'غضب', {
    'Dureté/Matériau': {
      description: 'Réalité physique de ce qui est dur, compact, résistant. La pierre, le cuir, la peau épaisse. C\'est extérieur, observable et permanent. La dureté est une qualité intrinsèque du matériau.',
      senses: ['pierre dure', 'roche ronde', 'éminence', 'cuir épais', 'bouclier en cuir', 'vêtement de combat', 'peau de chèvre', 'peau de poisson', 'peau de tête', 'peau entre les cornes', 'rougeur intense', 'épais', 'lion', 'taureau', 'cent chameaux']
    },
    'Contraire de al-rida': {
      description: 'Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) définit ghadhab comme le contraire de al-rida. Le Lane\'s définit rida comme : satisfait, content, approuvé, aimé, consenti. Ce champ couvre à la fois une dimension émotionnelle (excitation intérieure, état qui reste chez celui qui le ressent) et une dimension rationnelle (désapprobation de la conduite, jugement dirigé vers l\'extérieur qui atteint celui qui est jugé).',
      senses: ['colère', 'être en colère', 'contraire de al-rida', 'excitation du sang du cœur', 'accès de colère', 'en colère rapidement', 'rendre en colère', 'se mettre mutuellement en colère', 'devenir en colère progressivement', 'objet de colère', 'faculté irascible', 'perturbé dans les relations']
    },
    'Rupture/Séparation': {
      description: 'Acte ponctuel de couper les liens avec quelqu\'un par mécontentement. La rupture met fin à la relation. C\'est un acte extérieur, dirigé vers l\'autre, mais ponctuel et définitif.',
      senses: ['rompre avec quelqu\'un par colère']
    },
    'Maladie/Corps': {
      description: 'Affections physiques et corporelles. Ce sont des réalités intérieures au corps, observables mais subies.',
      senses: ['motes dans l\'œil', 'éruption cutanée', 'variole', 'atteint de variole', 'protubérance de chair']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['mordre le mors', 'marmite qui bout', 'austère du regard', 'serpent malveillant', 'groupe de femmes', 'partie anatomique']
    },
  })

  // ═══ dll (268) ═══
  await insertRoot(268, 'dll', 'ضل', {
    'Égarement/Déviation': {
      description: 'Mouvement actif de quitter le bon chemin, de dévier de la direction correcte. L\'égarement suppose qu\'il y avait un chemin connu et qu\'on l\'a quitté. C\'est un acte extérieur, observable et continu tant qu\'on reste hors du chemin.',
      senses: ['s\'égarer', 'dévier', 'errer', 'perdre son chemin', 'faire égarer', 'être égaré', 'confusion', 'perplexité', 'feindre l\'égarement', 'demander l\'égarement', 'route qui égare', 'terre qui égare', 'cause d\'égarement']
    },
    'Disparition/Perte': {
      description: 'Processus de devenir introuvable, de se perdre physiquement ou de périr. La disparition est un état résultant — on n\'est plus là. C\'est extérieur et observable par les autres.',
      senses: ['disparaître', 'se perdre', 'périr', 'mourir', 'devenir poussière', 'être enterré', 'perdre quelque chose', 'état de perdition', 'futilité', 'vain']
    },
    'Oubli/Enterrement': {
      description: 'Processus intérieur de perdre le souvenir ou acte de cacher dans le sol. L\'oubli est intérieur (dans la mémoire), l\'enterrement est extérieur (dans la terre). Les deux partagent l\'idée de rendre invisible.',
      senses: ['oublier', 'enterrer', 'cacher dans le sol', 'eau souterraine', 'restes d\'eau']
    },
    'Divers': {
      description: 'Sens isolés.',
      senses: ['terre rugueuse', 'pierres', 'guide habile', 'fils illégitime', 'sang non vengé', 'suiveur de femmes']
    },
  })

  console.log('')
  console.log('============================================')
  console.log('  ÉTAPE 2 TERMINÉE — TOUTES LES RACINES')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
