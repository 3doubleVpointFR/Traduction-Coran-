const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// VWA pour le verset 3:55 (verse_id=348)
// Position correspond à la position dans verse_analyses.segments

const vwaList = [
  // Position 2 — qāla (qwl) — verbe accompli, dire
  {
    position: 2, word_key: 'qwl', sense_chosen: 'dire', concept_chosen: 'Parole/Énonciation',
    concepts: {
      'Parole/Énonciation': {
        status: 'retenu',
        senses: ['dire','parler','parole','discours','affirmer'],
        proof_ctx: "Le sens retenu est l'énonciation parlée. Le verbe est conjugué à l'accompli, troisième personne masculin singulier, avec Dieu pour sujet et un destinataire au vocatif (Ô Jésus). La phrase qui suit est rapportée comme une parole adressée. Les autres sens (avis, puissance, troupeau) sont des extensions sans rapport avec une situation de discours direct."
      },
      'Pensée/Avis': {
        status: 'nul',
        senses: ['opinion','avis','doctrine'],
        proof_ctx: "Une opinion est un état intérieur de jugement, elle ne s'adresse pas à un destinataire au vocatif comme c'est le cas ici."
      },
      'Sens isolé/Puissance': {
        status: 'nul', senses: ['puissance'],
        proof_ctx: "Sens isolé sans rapport avec une parole adressée."
      },
      'Corps/Anatomie': {
        status: 'nul', senses: ['troupeau'],
        proof_ctx: "Sens isolé concret sans rapport avec le contexte."
      }
    }
  },
  // Position 3 — allāhu (alh) — Dieu
  {
    position: 3, word_key: 'alh', sense_chosen: 'Dieu', concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['Dieu','divinité'],
        proof_ctx: "Le mot allāhu est un nom propre défini au nominatif, sujet du verbe qāla. Il désigne la divinité unique vers laquelle on se tourne avec dévotion. C'est le seul sens compatible avec un sujet défini, agent d'une parole adressée à Jésus."
      },
      'Adoration/Dévotion': {
        status: 'nul', senses: ['adorer','faire adorer','se dévouer au culte','diviniser'],
        proof_ctx: "L'adoration est l'acte dirigé vers la divinité, pas la divinité elle-même qui est ici sujet de la parole."
      },
      'Refuge/Protection': {
        status: 'nul', senses: ['chercher refuge','protéger','demeurer'],
        proof_ctx: "Sens étranger à la fonction grammaticale d'un sujet nommant l'agent de la parole."
      },
      'Détresse': {
        status: 'nul', senses: ['être perplexe','se lamenter'],
        proof_ctx: "Sens incompatible avec la position de sujet agent d'une énonciation."
      },
      'Domination': {
        status: 'nul', senses: ['asservir'],
        proof_ctx: "Sens étranger à la fonction du nom propre désignant la divinité unique."
      }
    }
  },
  // Position 4 — yā ʿīsā (eys) — Jésus, vocatif
  {
    position: 4, word_key: 'eys', sense_chosen: 'Jésus', concept_chosen: 'Prophète/Messie',
    concepts: {
      'Prophète/Messie': {
        status: 'retenu',
        senses: ['Jésus','Messie'],
        proof_ctx: "Le mot ʿīsā précédé du yā vocatif désigne le destinataire de la parole divine — le prophète Jésus fils de Marie, déjà nommé dans les versets précédents de la sourate. C'est le seul sens compatible avec un nom propre au vocatif."
      },
      'Couleur/Chameau': {
        status: 'nul', senses: ['Blanc teinté de rouge','Blanc terne','Blanc tirant vers le jaune'],
        proof_ctx: "Sens étymologique de la racine désignant une teinte de chameau, sans rapport avec un nom propre destinataire."
      },
      'Couleur/Animal': {
        status: 'nul', senses: ['Gazelle ou taureau de teinte adma'],
        proof_ctx: "Couleur d'animal, étrangère au vocatif d'un nom propre."
      },
      'Couleur/Cheveux': {
        status: 'nul', senses: ['Cheveux blancs'],
        proof_ctx: "Couleur de cheveux, sans rapport avec le destinataire de la parole."
      },
      'Trace/Empreinte': {
        status: 'nul', senses: ['Trace blanche'],
        proof_ctx: "Trace visible, sens étranger au vocatif d'un nom propre."
      },
      'Insecte': {
        status: 'nul', senses: ['Sauterelle femelle'],
        proof_ctx: "Sens isolé sans rapport avec le contexte."
      }
    }
  },
  // Position 6 — mutawaffīka (wfy) — participe actif forme V avec suffixe ka
  {
    position: 6, word_key: 'wfy', sense_chosen: 'mourir', concept_chosen: 'Mort/Fin',
    concepts: {
      'Mort/Fin': {
        status: 'retenu',
        senses: ['mourir'],
        proof_ctx: "Le mot mutawaffīka est un participe actif de la forme V (tafaʿʿala), construit comme « celui qui te reprend intégralement ». La forme V exprime un acte fait sur soi qui aboutit à un recueillement complet — d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), tawaffā signifie reprendre l'âme intégralement, ce qui désigne le terme de la vie. Le sens « Fidélité/Accomplissement » reste possible mais moins précis dans un contexte où Dieu annonce une action ponctuelle sur la personne de Jésus, suivie d'un mouvement d'élévation."
      },
      'Fidélité/Accomplissement': {
        status: 'probable',
        senses: ['accomplir','tenir sa promesse','payer intégralement','être fidèle'],
        proof_ctx: "L'idée d'accomplir intégralement le terme est compatible avec la forme V, mais le sens dominant de cette forme appliquée à une personne renvoie au recueillement de l'âme, pas à la fidélité comme disposition durable."
      }
    }
  },
  // Position 8 — rāfiʿuka (rfe) — participe actif avec suffixe ka
  {
    position: 8, word_key: 'rfe', sense_chosen: 'élever', concept_chosen: 'Élévation/Exaltation',
    concepts: {
      'Élévation/Exaltation': {
        status: 'retenu',
        senses: ['élever','lever','hausser','exalter'],
        proof_ctx: "Le mot rāfiʿuka est un participe actif construit comme « celui qui t'élève », suivi de la préposition ilā (vers) et du pronom pour Moi. Le mouvement décrit est directionnel, du bas vers le haut, vers Dieu. La structure participe actif + complément directionnel impose le sens d'un mouvement ascensionnel actif."
      },
      'Suppression': {
        status: 'probable',
        senses: ['enlever'],
        proof_ctx: "Le sens d'enlever existe pour cette racine, mais la préposition ilā (vers) qui suit oriente clairement vers un mouvement ascendant ciblé, pas un simple retrait."
      }
    }
  },
  // Position 11 — muṭahhiruka (thr) — participe actif forme II
  {
    position: 11, word_key: 'thr', sense_chosen: 'purifier', concept_chosen: 'Pureté/Purification',
    concepts: {
      'Pureté/Purification': {
        status: 'retenu',
        senses: ['purifier','être pur','se purifier','pur'],
        proof_ctx: "Le mot muṭahhiruka est un participe actif de la forme II (faʿʿala), construite comme « celui qui te purifie ». La forme II est causative et intensive : elle dit que Dieu fait activement passer Jésus de l'état impur à l'état pur. Le complément qui suit (de ceux qui ont dénié) précise de quoi se fait cette purification — d'une mise à distance d'avec un groupe."
      },
      'Pureté/Propreté': {
        status: 'probable',
        senses: ['pur','propreté','nettoyer','purifier'],
        proof_ctx: "La propreté physique est un sens proche, mais ici le complément désigne un groupe humain, pas une souillure matérielle, ce qui oriente vers la purification au sens large."
      },
      'Ablution/Rituel': {
        status: 'nul',
        senses: ['ablution','eau purifiante'],
        proof_ctx: "Sens rituel concret sans rapport avec une purification d'avec un groupe humain."
      },
      'Chasteté/Vertu': {
        status: 'nul',
        senses: ['chasteté','innocence'],
        proof_ctx: "Sens spécifique à la conduite intime, étranger au contexte de séparation d'avec un groupe."
      }
    }
  },
  // Position 14 — kafarū (kfr)
  {
    position: 14, word_key: 'kfr', sense_chosen: 'nier', concept_chosen: 'Rejet/Ingratitude',
    concepts: {
      'Rejet/Ingratitude': {
        status: 'retenu',
        senses: ['nier','rejeter','être ingrat','renier un bienfait'],
        proof_ctx: "Le verbe kafarū est conjugué à l'accompli, troisième personne masculin pluriel, désignant un groupe qui a posé un acte tourné vers l'extérieur — refuser de reconnaître. Le contexte oppose ce groupe à ceux qui ont suivi (ittabaʿūka), ce qui aligne le rejet sur un acte de refus, pas sur une simple dissimulation matérielle."
      },
      'Couverture/Dissimulation': {
        status: 'probable',
        senses: ['couvrir','cacher','la nuit qui couvre'],
        proof_ctx: "Le sens étymologique de couvrir est le sens premier de la racine, mais sans complément matériel à couvrir et avec un groupe humain comme sujet opposé à des suiveurs, l'usage actif désigne un refus de reconnaître."
      },
      'Expiation/Réparation': {
        status: 'nul',
        senses: ['expier','effacer les péchés'],
        proof_ctx: "Sens d'effacer une faute, étranger à un groupe défini par opposition à des suiveurs."
      },
      'Sens isolé/Cultivateur': {
        status: 'nul', senses: ['cultivateur'],
        proof_ctx: "Sens isolé concret sans rapport avec le contexte."
      },
      'Sens isolé/Goudron': {
        status: 'nul', senses: ['goudron'],
        proof_ctx: "Sens isolé concret sans rapport avec le contexte."
      },
      'Sens isolé/Village': {
        status: 'nul', senses: ['village'],
        proof_ctx: "Sens isolé concret sans rapport avec le contexte."
      }
    }
  },
  // Position 16 — jāʿilu (jel) — participe actif
  {
    position: 16, word_key: 'jel', sense_chosen: 'placer', concept_chosen: 'Action/Réalisation',
    concepts: {
      'Action/Réalisation': {
        status: 'retenu',
        senses: ['placer','faire','rendre','établir','créer'],
        proof_ctx: "Le mot jāʿilu est un participe actif construit comme « celui qui place ». Le complément qui suit (ceux qui t'ont suivi au-dessus de ceux qui ont dénié) décrit un positionnement spatial relatif. Parmi les sens du concept, « placer » et « établir » sont les plus naturels avec un complément de position au-dessus de quelque chose."
      },
      'Sens isolé/Récompense': {
        status: 'nul', senses: ['récompense'],
        proof_ctx: "Sens isolé concret sans rapport avec un acte de positionnement."
      }
    }
  },
  // Position 18 — ittabaʿūka (tba) — verbe accompli forme VIII
  {
    position: 18, word_key: 'tba', sense_chosen: 'suivre', concept_chosen: 'Suivre/Accompagner',
    concepts: {
      'Suivre/Accompagner': {
        status: 'retenu',
        senses: ['suivre','accompagner','disciple','imiter'],
        proof_ctx: "Le verbe ittabaʿa est la forme VIII de la racine, qui exprime un suivre actif, voulu et continu. Le suffixe ka (toi) désigne Jésus comme la personne suivie. Le contexte oppose ce groupe à ceux qui ont dénié, ce qui caractérise un choix volontaire d'accompagner et d'adopter le chemin du suivi."
      },
      'Rattraper/Atteindre': {
        status: 'probable',
        senses: ['rattraper','rejoindre','suivre les traces'],
        proof_ctx: "L'idée d'atteindre est compatible avec la forme VIII, mais le contexte décrit un groupe constitué de suiveurs durables, pas un mouvement ponctuel pour combler un écart."
      },
      'Succession/Continuité': {
        status: 'nul',
        senses: ['enchaîner','consécutif','bien exécuté'],
        proof_ctx: "Sens d'éléments qui se succèdent sans acteur volontaire, étranger à un suivi humain conscient."
      },
      'Réclamation/Réparation': {
        status: 'nul',
        senses: ['poursuivre en justice','réclamer','conséquence'],
        proof_ctx: "Sens juridique sans rapport avec un suivi adressé à une personne."
      },
      'Dépendance/Sujétion': {
        status: 'nul',
        senses: ['serviteur','ombre'],
        proof_ctx: "Sens de dépendance servile, étranger à un acte volontaire de suivre."
      }
    }
  },
  // Position 23 — yawmi (ywm) — en idafa avec al-qiyāma
  {
    position: 23, word_key: 'ywm', sense_chosen: 'jour', concept_chosen: 'Temps/Période',
    concepts: {
      'Temps/Période': {
        status: 'retenu',
        senses: ['jour','journée','temps','période'],
        proof_ctx: "Le mot yawmi est en idafa (rattaché par génitif) avec al-qiyāma. Cette construction nomme une unité de temps précise, identifiée par ce qui s'y produit. Le sens premier d'unité de temps est le seul compatible avec une idafa qualifiante."
      },
      'Événement/Moment marquant': {
        status: 'probable',
        senses: ['événement','jour marquant'],
        proof_ctx: "L'idée d'un moment précis qui se distingue est compatible, mais le sens premier reste l'unité de temps qualifiée par ce qui s'y déroule."
      },
      'Sens isolé/Étape': {
        status: 'nul', senses: ['étape'],
        proof_ctx: "Sens isolé sans rapport avec une unité de temps qualifiée."
      },
      'Temps/Cycle': {
        status: 'nul', senses: ["distance d'un jour de marche"],
        proof_ctx: "Sens spatial dérivé, étranger à une qualification temporelle."
      }
    }
  },
  // Position 24 — al-qiyāmati (qwm) — défini, génitif
  {
    position: 24, word_key: 'qwm', sense_chosen: 'redressement', concept_chosen: 'Verticalité/Droiture',
    concepts: {
      'Verticalité/Droiture': {
        status: 'retenu',
        senses: ['se lever','se dresser','se tenir debout'],
        proof_ctx: "Le mot al-qiyāma est un nom défini au génitif, formé sur la racine q-w-m dont le sens premier est se tenir droit, se dresser. Le mot désigne l'acte de se lever, étymologiquement direct. Les autres concepts (peuple, gestion, valeur) sont des dérivés qui ne s'accordent pas avec un nom singulier défini désignant un événement temporel."
      },
      'Peuple/Communauté': {
        status: 'nul',
        senses: ['peuple','communauté','tribu','nation','groupe'],
        proof_ctx: "Sens collectif qui désigne un groupe humain, incompatible avec un nom abstrait singulier qualifiant une unité de temps."
      },
      'Gestion/Administration': {
        status: 'nul',
        senses: ['gérer','administrer','prendre en charge','diriger','veiller sur'],
        proof_ctx: "Sens d'acte de prise en charge, étranger à la qualification d'un jour."
      },
      'Valeur/Mesure': {
        status: 'nul',
        senses: ['valeur','prix','estimation','stature','taille'],
        proof_ctx: "Sens d'évaluation, étranger au contexte d'une unité de temps."
      },
      'Subsistance': {
        status: 'nul',
        senses: ['subsistance','nourriture','ce qui fait vivre'],
        proof_ctx: "Sens de moyens de vie, sans rapport avec la qualification d'un jour."
      },
      'Lieu/Géographie': {
        status: 'nul', senses: ['lieu'],
        proof_ctx: "Sens spatial, étranger au contexte d'une qualification temporelle."
      },
      'Sens isolé/Résidence': {
        status: 'nul', senses: ['résidence'],
        proof_ctx: "Sens isolé sans rapport avec le contexte."
      },
      'Sens isolé/Station': {
        status: 'nul', senses: [],
        proof_ctx: "Sens isolé sans rapport avec le contexte."
      }
    }
  },
  // Position 27 — marjiʿukum (rja) — nom + suffixe kum
  {
    position: 27, word_key: 'rja', sense_chosen: 'retour', concept_chosen: 'Retour/Réversion',
    concepts: {
      'Retour/Réversion': {
        status: 'retenu',
        senses: ['retourner','revenir','renvoyer'],
        proof_ctx: "Le mot marjiʿukum est un nom de lieu ou d'action formé sur la racine r-j-ʿ avec le suffixe pluriel kum (votre). Précédé de la préposition ilayya (vers Moi), il désigne le terme d'un mouvement de retour. Le sens premier de mouvement vers l'origine est le seul compatible avec un complément directionnel vers Dieu."
      },
      'Eau/Liquide': {
        status: 'nul', senses: ['pluie'],
        proof_ctx: "Sens isolé concret sans rapport avec un mouvement de retour vers Dieu."
      },
      'Sens isolé/Réponse': {
        status: 'nul', senses: ['réponse'],
        proof_ctx: "Sens isolé sans rapport avec le contexte directionnel."
      }
    }
  },
  // Position 29 — aḥkumu (hkm) — verbe inaccompli forme IV (ou I), 1ère personne
  {
    position: 29, word_key: 'hkm', sense_chosen: 'trancher', concept_chosen: 'Jugement/Décision',
    concepts: {
      'Jugement/Décision': {
        status: 'retenu',
        senses: ['juger','décider','sentence'],
        proof_ctx: "Le verbe aḥkumu est conjugué à l'inaccompli, première personne singulier, suivi de baynakum (entre vous) et d'un complément qui décrit un objet de désaccord. Cette structure (juger + entre + objet de désaccord) impose le sens de trancher entre des parties divergentes, qui sort du juge et atteint les parties."
      },
      'Autorité/Pouvoir': {
        status: 'probable',
        senses: ['gouverner'],
        proof_ctx: "L'idée d'autorité est connexe, mais le verbe construit avec entre vous + dans ce que vous divergiez désigne un acte ponctuel de décision sur un litige, pas un pouvoir politique permanent."
      },
      'Sagesse': {
        status: 'nul',
        senses: ['être sage','sagesse'],
        proof_ctx: "État intérieur permanent, incompatible avec un verbe inaccompli annonçant une action future ponctuelle entre des parties."
      },
      'Sens isolé/Empêcher': {
        status: 'nul', senses: ['empêcher'],
        proof_ctx: "Sens isolé concret sans rapport avec une décision entre parties."
      }
    }
  },
  // Position 30 — baynakum (byn) — préposition + suffixe
  {
    position: 30, word_key: 'byn', sense_chosen: 'entre', concept_chosen: 'Séparation/Distance',
    concepts: {
      'Séparation/Distance': {
        status: 'retenu',
        senses: ['entre','séparer','quitter'],
        proof_ctx: "Le mot baynakum est un adverbe de position spatiale entre deux ou plusieurs parties, suivi du suffixe pluriel kum (vous). La position d'intermédiaire entre des parties est exactement ce que le contexte demande pour un verbe de jugement entre des groupes en désaccord."
      },
      'Clarté/Évidence': {
        status: 'nul',
        senses: ['être clair','expliquer','évident','preuve'],
        proof_ctx: "Sens d'évidence, étranger à la position spatiale entre deux parties."
      }
    }
  },
  // Position 32 — kuntum (kwn) — verbe accompli, 2e personne pluriel — verbe d'état (kāna + verbe)
  {
    position: 32, word_key: 'kwn', sense_chosen: 'être', concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)'],
        proof_ctx: "Le verbe kuntum est l'accompli du verbe d'existence à la deuxième personne pluriel. Suivi d'un verbe à l'inaccompli (takhtalifūna), il forme une structure qui décrit une action habituelle ou continue dans le passé. Il sert de support grammatical pour situer dans le passé l'acte de diverger."
      },
      'Lieu/État': {
        status: 'nul',
        senses: ['lieu','reste à ta place','état condition','motif raison','devenir comme'],
        proof_ctx: "Ces sens sont des emplois spécifiques étrangers à la fonction d'auxiliaire devant un verbe à l'inaccompli."
      },
      'Humilité/Soumission': {
        status: 'nul',
        senses: ['être humble soumis'],
        proof_ctx: "Sens spécialisé sans rapport avec la fonction d'auxiliaire d'un verbe d'action."
      }
    }
  },
  // Position 34 — takhtalifūna (khlf) — verbe inaccompli forme VIII, 2e personne pluriel
  {
    position: 34, word_key: 'khlf', sense_chosen: 'diverger', concept_chosen: 'Divergence/Désaccord',
    concepts: {
      'Divergence/Désaccord': {
        status: 'retenu',
        senses: ['diverger',"s'opposer",'être en désaccord','contrevenir'],
        proof_ctx: "Le verbe takhtalifūna est conjugué à l'inaccompli, deuxième personne masculin pluriel, à la forme VIII. La forme VIII (iftaʿala) exprime ici un acte mutuel et actif de différer les uns des autres. Le contexte décrit un état d'opposition entre des groupes, ce qui aligne précisément ce concept."
      },
      'Succession/Différence': {
        status: 'probable',
        senses: ['différer','succéder','derrière','successeur','vice-gérant','postérité','remplacer'],
        proof_ctx: "L'idée générale de différer est présente, mais la forme VIII oriente vers un acte mutuel d'opposition, pas vers une simple succession ou un remplacement."
      },
      'Alternance': {
        status: 'nul',
        senses: ['alterner','se succéder mutuellement'],
        proof_ctx: "Sens de succession régulière, étranger à un désaccord entre parties."
      },
      'Manquement': {
        status: 'nul',
        senses: ['manquer à sa promesse','reculer'],
        proof_ctx: "Sens de défaut d'engagement, étranger à un désaccord d'opinion entre parties."
      }
    }
  }
];

(async () => {
  let ok = 0, ko = 0;
  for (const v of vwaList) {
    const analysis_axes = {
      concept_chosen: v.concept_chosen,
      sense_chosen: v.sense_chosen,
      concepts: v.concepts
    };
    const { error } = await db.from('verse_word_analyses').insert({
      verse_id: 348,
      word_key: v.word_key,
      position: v.position,
      sense_chosen: v.sense_chosen,
      analysis_axes
    });
    if (error) { console.log('ERR pos', v.position, v.word_key, error.message); ko++; }
    else { console.log('OK pos', v.position, v.word_key, '->', v.sense_chosen); ok++; }
  }
  console.log(`\n${ok} OK / ${ko} KO`);
})();
