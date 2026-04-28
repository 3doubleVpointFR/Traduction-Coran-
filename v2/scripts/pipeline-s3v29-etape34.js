const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 322;
const VA_ID = 678;

// Word analysis IDs (verified from BDD)
const AIDS = {
  qul: 496, khf: 1206, sdr: 1245, bdw: 470,
  elm: 254, alh: 250, smw: 249, ard: 324,
  kll: 372, šya: 369, qdr: 373
};

async function etape34() {
  console.log('=== ÉTAPES 3+4 — S3:V29 ===\n');

  // =============================================
  // 1. VÉRIFIER LES NOMS DE CONCEPTS EN BDD
  // =============================================
  console.log('--- 1. Vérification concepts BDD ---');
  const conceptMap = {};
  for (const [key, aid] of Object.entries(AIDS)) {
    const {data} = await db.from('word_meanings').select('concept').eq('analysis_id', aid);
    conceptMap[key] = [...new Set(data.map(s => s.concept))];
    console.log(key+': '+conceptMap[key].join(', '));
  }

  // =============================================
  // 2. INSÉRER 13 VWA (verse_word_analyses)
  // =============================================
  console.log('\n--- 2. Insertion VWA ---');

  const vwaEntries = [
    // pos=1: qul (dire)
    {
      verse_id: VERSE_ID, word_key: 'qul', position: 1,
      sense_chosen: 'dire', concept_chosen: 'Parole/Énonciation',
      analysis_id: AIDS.qul,
      analysis_axes: {
        concept_chosen: 'Parole/Énonciation',
        concepts: {
          'Parole/Énonciation': {
            status: 'retenu',
            senses: ['dire', 'parler', 'parole', 'affirmer'],
            proof_ctx: "L'impératif qul est l'acte direct de proférer un message — la parole sort du locuteur et atteint l'auditeur. Le contexte commande la transmission d'un avertissement divin, ce qui correspond exactement à l'acte de parole."
          },
          'Avis/Jugement': {
            status: 'probable',
            senses: ['opinion', 'prétendre'],
            proof_ctx: "L'opinion est un sous-type intérieur de la parole, mais l'impératif « dis » commande un acte de profération extérieure, pas une formation d'opinion."
          }
        }
      }
    },

    // pos=3: tukhfū (cacher — Form IV causatif)
    {
      verse_id: VERSE_ID, word_key: 'khf', position: 3,
      sense_chosen: 'cacher', concept_chosen: 'Dissimulation/Secret',
      analysis_id: AIDS.khf,
      analysis_axes: {
        concept_chosen: 'Dissimulation/Secret',
        concepts: {
          'Dissimulation/Secret': {
            status: 'retenu',
            senses: ['cacher', 'être secret', 'dissimuler', 'être imperceptible', 'être latent', 'se cacher', 'étouffer la voix', 'tuer secrètement'],
            proof_ctx: "La forme IV (causative) de kh-f-y signifie « rendre invisible, faire devenir caché ». Le contexte est limpide : « si vous cachez ce qui est dans vos poitrines » — l'acte intentionnel de dissimuler ses pensées intérieures. La dissimulation est un acte directionnel : il prend ce qui est apparent et le rend imperceptible."
          },
          'Apparition/Manifestation': {
            status: 'nul',
            senses: ['apparaître', 'se manifester'],
            proof_ctx: "Le sens contraire (apparaître) n'est pas activé ici — c'est le verbe tubdūhu (b-d-w) qui porte le sens d'apparition dans ce verset."
          },
          'Couverture/Voile': {
            status: 'peu_probable',
            senses: ['vêtement couvrant', 'couverture', 'calice de fleur'],
            proof_ctx: "Le voile est un objet physique, pas un acte — or tukhfū est un verbe actif commandant une dissimulation intentionnelle."
          },
          'Extraction/Déterrement': {
            status: 'nul',
            senses: ['extraire d\'une tombe', 'creuser un puits', 'piller une tombe'],
            proof_ctx: "Sens hors sujet — le verset parle de dissimuler, pas d'extraire."
          },
          'Puits/Profondeur': {
            status: 'nul',
            senses: ['puits profond', 'ancien puits'],
            proof_ctx: "Sens physique géographique hors sujet."
          },
          'Êtres invisibles': {
            status: 'nul',
            senses: ['djinns', 'plumes cachées'],
            proof_ctx: "Sens concret hors sujet — aucun rapport avec la dissimulation des pensées."
          }
        }
      }
    },

    // pos=6: ṣudūrikum (poitrines)
    {
      verse_id: VERSE_ID, word_key: 'sdr', position: 6,
      sense_chosen: 'poitrine', concept_chosen: 'Poitrine/Intériorité',
      analysis_id: AIDS.sdr,
      analysis_axes: {
        concept_chosen: 'Poitrine/Intériorité',
        concepts: {
          'Poitrine/Intériorité': {
            status: 'retenu',
            senses: ['poitrine', 'cœur (intérieur)'],
            proof_ctx: "Le pluriel ṣudūr désigne les poitrines comme siège de l'intériorité — l'espace où résident les pensées et intentions cachées. Le contexte « ce qui est dans vos poitrines » confirme ce sens : la poitrine est le contenant de ce qui est caché."
          },
          'Émission/Sortie': {
            status: 'peu_probable',
            senses: ['sortir', 'émettre'],
            proof_ctx: "Le sens verbal ṣadara (sortir) n'est pas activé ici — le mot est un nom (ṣudūr = poitrines), pas un verbe d'action."
          },
          'Eau/Liquide': {
            status: 'nul',
            senses: ['source (début)'],
            proof_ctx: "Sens physique concret sans rapport avec le contexte."
          }
        }
      }
    },

    // pos=8: tubdūhu (montrer — Form IV causatif)
    {
      verse_id: VERSE_ID, word_key: 'bdw', position: 8,
      sense_chosen: 'se montrer', concept_chosen: 'Apparition/Manifestation',
      analysis_id: AIDS.bdw,
      analysis_axes: {
        concept_chosen: 'Apparition/Manifestation',
        concepts: {
          'Apparition/Manifestation': {
            status: 'retenu',
            senses: ['apparaître', 'se montrer', 'sembler'],
            proof_ctx: "La forme IV de b-d-w est causative : « faire apparaître, rendre visible ». Le contexte oppose tukhfū (cacher) et tubdūhu (le montrer) — les deux pôles contraires de la visibilité. Le sens d'apparition est le seul pertinent."
          },
          'Désert/Nomadisme': {
            status: 'nul',
            senses: ['bédouin', 'désert'],
            proof_ctx: "Sens concret géographique hors sujet."
          }
        }
      }
    },

    // pos=9: yaʿlamhu (le sait — apodose conditionnelle)
    {
      verse_id: VERSE_ID, word_key: 'elm', position: 9,
      sense_chosen: 'savoir', concept_chosen: 'Savoir/Connaissance',
      analysis_id: AIDS.elm,
      analysis_axes: {
        concept_chosen: 'Savoir/Connaissance',
        concepts: {
          'Savoir/Connaissance': {
            status: 'retenu',
            senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
            proof_ctx: "Le verbe yaʿlamu désigne le savoir direct et certain — un état intérieur de compréhension qui n'a pas besoin de la vue pour fonctionner. Le contexte dit : même si vous cachez, Il le sait — le savoir divin atteint ce que la dissimulation humaine tente de cacher."
          },
          'Marque/Signe': {
            status: 'nul',
            senses: ['marquer', 'signe', 'drapeau', 'montagne', 'repère', 'étendard', 'lèvre fendue'],
            proof_ctx: "Le mot est un verbe (savoir), pas un nom (signe/marque)."
          },
          'Monde/Création': {
            status: 'nul',
            senses: ['monde', 'les mondes', 'ensemble des créatures', 'univers'],
            proof_ctx: "Le sens de ʿālamīn (les mondes) n'est pas activé par le verbe yaʿlamu."
          }
        }
      }
    },

    // pos=10: allāhu (Dieu — sujet postposé)
    {
      verse_id: VERSE_ID, word_key: 'alh', position: 10,
      sense_chosen: 'Dieu', concept_chosen: 'Divinité',
      analysis_id: AIDS.alh,
      analysis_axes: {
        concept_chosen: 'Divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
            proof_ctx: "Le nom propre Allāh désigne la Divinité — ce vers quoi se dirige l'adoration. La position de sujet dans la phrase confirme la référence directe au divin."
          },
          'Adoration/Dévotion': {
            status: 'probable',
            senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
            proof_ctx: "La racine ʾ-l-h signifie adorer, mais ici le mot est le nom propre Allāh, pas le verbe alaha."
          },
          'Détresse': {
            status: 'nul',
            senses: ['être perplexe', 'se lamenter'],
            proof_ctx: "Sens hors sujet dans ce contexte."
          },
          'Refuge/Protection': {
            status: 'peu_probable',
            senses: ['chercher refuge', 'protéger', 'demeurer'],
            proof_ctx: "Le sens de refuge n'est pas activé par le nom propre dans cette phrase."
          },
          'Domination': {
            status: 'nul',
            senses: ['asservir'],
            proof_ctx: "Sens hors sujet dans ce contexte."
          }
        }
      }
    },

    // pos=12: yaʿlamu (sait — affirmatif indépendant)
    {
      verse_id: VERSE_ID, word_key: 'elm', position: 12,
      sense_chosen: 'savoir', concept_chosen: 'Savoir/Connaissance',
      analysis_id: AIDS.elm,
      analysis_axes: {
        concept_chosen: 'Savoir/Connaissance',
        concepts: {
          'Savoir/Connaissance': {
            status: 'retenu',
            senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
            proof_ctx: "Deuxième occurrence du verbe, cette fois à l'indicatif (marfūʿ) au lieu du conditionnel — le savoir divin s'élargit des secrets des poitrines à tout ce qui est dans les cieux et la terre."
          },
          'Marque/Signe': {
            status: 'nul',
            senses: ['marquer', 'signe', 'drapeau'],
            proof_ctx: "Le mot est un verbe, pas un nom de signe."
          },
          'Monde/Création': {
            status: 'nul',
            senses: ['monde', 'les mondes'],
            proof_ctx: "Le sens de ʿālamīn n'est pas activé par le verbe yaʿlamu."
          }
        }
      }
    },

    // pos=15: as-samāwāti (les cieux)
    {
      verse_id: VERSE_ID, word_key: 'smw', position: 15,
      sense_chosen: 'ciel', concept_chosen: 'Ciel/Ce qui couvre',
      analysis_id: AIDS.smw,
      analysis_axes: {
        concept_chosen: 'Ciel/Ce qui couvre',
        concepts: {
          'Ciel/Ce qui couvre': {
            status: 'retenu',
            senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage', 'dos', 'semelle supérieure', 'pièce de tissu supérieure', 'céleste', 'bounty'],
            proof_ctx: "Le pluriel as-samāwāt désigne les cieux — la voûte qui couvre et englobe. Dans le contexte de « ce qui est dans les cieux et la terre », les cieux représentent la totalité de ce qui est au-dessus."
          },
          'Hauteur/Élévation': {
            status: 'probable',
            senses: ['être haut', 'se dresser', 'monter', 'noble'],
            proof_ctx: "La hauteur est la qualité fondamentale du ciel, mais le nom samāwāt désigne spécifiquement les cieux comme entité, pas la qualité abstraite de hauteur."
          },
          'Nom/Identification': {
            status: 'nul',
            senses: ['nom', 'nommer'],
            proof_ctx: "Hors sujet — le mot est samāwāt (cieux), pas ism (nom)."
          },
          'Chasse': {
            status: 'nul',
            senses: ['chasser', 'chasseurs'],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },

    // pos=19: al-arḍi (la terre)
    {
      verse_id: VERSE_ID, word_key: 'ard', position: 19,
      sense_chosen: 'terre', concept_chosen: 'Terre/Sol',
      analysis_id: AIDS.ard,
      analysis_axes: {
        concept_chosen: 'Terre/Sol',
        concepts: {
          'Terre/Sol': {
            status: 'retenu',
            senses: ['terre', 'sol', 'pays', 'bas'],
            proof_ctx: "Le nom al-arḍ désigne la terre comme surface solide. Le couple samāwāt/arḍ (cieux/terre) forme un tout qui englobe la totalité de la création — le savoir divin couvre tout."
          },
          'Sens isolé/Rhume': {
            status: 'nul',
            senses: ['rhume'],
            proof_ctx: "Sens physique concret sans rapport."
          },
          'Sens isolé/Tremblement': {
            status: 'nul',
            senses: ['tremblement'],
            proof_ctx: "Sens physique concret sans rapport."
          }
        }
      }
    },

    // pos=21: allāhu (Dieu — deuxième occurrence, mubtadaʾ)
    {
      verse_id: VERSE_ID, word_key: 'alh', position: 21,
      sense_chosen: 'Dieu', concept_chosen: 'Divinité',
      analysis_id: AIDS.alh,
      analysis_axes: {
        concept_chosen: 'Divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: ['divinité', 'Dieu'],
            proof_ctx: "Deuxième occurrence du nom propre Allāh — cette fois sujet d'une phrase nominale affirmant la capacité universelle. La répétition du nom souligne que le même Dieu qui sait est aussi celui qui est capable."
          },
          'Adoration/Dévotion': {
            status: 'probable',
            senses: ['adorer'],
            proof_ctx: "Le sens verbal (adorer) n'est pas activé par le nom propre dans cette phrase."
          }
        }
      }
    },

    // pos=23: kulli (toute — nom en iḍāfa)
    {
      verse_id: VERSE_ID, word_key: 'kll', position: 23,
      sense_chosen: 'tout', concept_chosen: 'Totalité',
      analysis_id: AIDS.kll,
      analysis_axes: {
        concept_chosen: 'Totalité',
        concepts: {
          'Totalité': {
            status: 'retenu',
            senses: ['tout', 'chaque', 'totalité'],
            proof_ctx: "Le mot kull en iḍāfa avec shayʾ signifie « toute chose » — la totalité absolue sans exception. Le verset affirme que la capacité divine s'étend à chaque chose qui existe."
          },
          'Émoussement/Faiblesse': {
            status: 'nul',
            senses: ['s\'émousser', 'être fatigué'],
            proof_ctx: "Sens de faiblesse hors sujet."
          },
          'Charge/Dépendance': {
            status: 'nul',
            senses: ['fardeau', 'personne à charge'],
            proof_ctx: "Sens de dépendance hors sujet."
          }
        }
      }
    },

    // pos=24: shayʾin (chose — nom indéfini en iḍāfa)
    {
      verse_id: VERSE_ID, word_key: 'šya', position: 24,
      sense_chosen: 'chose', concept_chosen: 'Chose/Existence',
      analysis_id: AIDS.šya,
      analysis_axes: {
        concept_chosen: 'Chose/Existence',
        concepts: {
          'Chose/Existence': {
            status: 'retenu',
            senses: ['chose', 'quelque chose', 'rien', 'entité', 'existence'],
            proof_ctx: "Le nom shayʾ est le terme le plus général qui soit — « ce dont on peut parler, ce qui peut être connu ». Dans kulli shayʾ, il représente la totalité de tout ce qui existe."
          },
          'Volonté': {
            status: 'probable',
            senses: ['vouloir', 'créer', 'désirer', 'souhaiter', 'volonté'],
            proof_ctx: "Le sens de volonté (mashīʾa) est lié à la même racine, mais le nom shayʾ au génitif indéfini active le sens de « chose » existante, pas de « volonté »."
          },
          'Incitation/Contrainte': {
            status: 'nul',
            senses: ['inciter', 'contraindre'],
            proof_ctx: "Sens hors sujet."
          },
          'Laideur/Difformité': {
            status: 'nul',
            senses: ['rendre laid', 'mal formé'],
            proof_ctx: "Sens hors sujet."
          },
          'Apaisement': {
            status: 'nul',
            senses: ['apaiser sa colère'],
            proof_ctx: "Sens hors sujet."
          }
        }
      }
    },

    // pos=25: qadīrun (capable — adjectif faʿīl, khabar)
    {
      verse_id: VERSE_ID, word_key: 'qdr', position: 25,
      sense_chosen: 'être capable', concept_chosen: 'Puissance/Capacité',
      analysis_id: AIDS.qdr,
      analysis_axes: {
        concept_chosen: 'Puissance/Capacité',
        concepts: {
          'Puissance/Capacité': {
            status: 'retenu',
            senses: ['pouvoir', 'être capable'],
            proof_ctx: "La forme faʿīl (intensif) de q-d-r dans la construction « qadīr ʿalā kulli shayʾ » active la capacité totale et permanente. La capacité est la force intérieure qui permet de réaliser — le verset affirme que cette capacité s'étend à toute chose sans exception."
          },
          'Mesure/Détermination': {
            status: 'probable',
            senses: ['mesurer', 'déterminer', 'décréter', 'destin', 'valeur'],
            proof_ctx: "La mesure est le sens premier de q-d-r, mais la construction « qadīr ʿalā » active spécifiquement le sens de capacité, pas de mesure. Qui est qadīr sur quelque chose en a la capacité."
          },
          'Sens isolé/Marmite': {
            status: 'nul',
            senses: ['marmite'],
            proof_ctx: "Sens concret hors sujet."
          }
        }
      }
    }
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+' entries):', vwaErr ? 'ERROR: '+vwaErr.message : 'OK');

  // =============================================
  // 3. METTRE À JOUR LES SEGMENTS (fr + sense_retenu)
  // =============================================
  console.log('\n--- 3. Update segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = va.segments;

  const segUpdates = {
    1:  {fr:'dis',            sense_retenu:'dire'},
    3:  {fr:'cachez',         sense_retenu:'cacher'},
    6:  {fr:'vos poitrines',  sense_retenu:'poitrine'},
    8:  {fr:'le montrez',     sense_retenu:'se montrer'},
    9:  {fr:'le sait',        sense_retenu:'savoir'},
    10: {fr:'Dieu',           sense_retenu:'Dieu'},
    12: {fr:'sait',           sense_retenu:'savoir'},
    15: {fr:'les cieux',      sense_retenu:'ciel'},
    19: {fr:'la terre',       sense_retenu:'terre'},
    21: {fr:'Dieu',           sense_retenu:'Dieu'},
    23: {fr:'toute',          sense_retenu:'tout'},
    24: {fr:'chose',          sense_retenu:'chose'},
    25: {fr:'capable',        sense_retenu:'être capable'}
  };

  for (const [posStr, upd] of Object.entries(segUpdates)) {
    const pos = parseInt(posStr);
    const seg = segs.find(s => s.position === pos);
    if (!seg) { console.log('MISSING pos='+pos+' <<<'); continue; }
    seg.fr = upd.fr;
    seg.sense_retenu = upd.sense_retenu;
    console.log('pos='+pos+' '+seg.phon+' → fr="'+upd.fr+'" sense="'+upd.sense_retenu+'"');
  }

  // =============================================
  // 4. TRADUCTION + DÉMARCHE
  // =============================================
  console.log('\n--- 4. Traduction + Démarche ---');

  const translation_arab = "Dis : si vous cachez ce qui est dans vos poitrines ou le montrez, Dieu le sait. Et Il sait ce qui est dans les cieux et ce qui est dans la terre. Et Dieu est capable de toute chose.";

  const full_translation = "Dis : «Que vous cachiez ce qui est dans vos poitrines ou que vous le divulguiez, Allah le sait. Il connaît tout ce qui est dans les cieux et sur la terre. Et Allah est Omnipotent.»";

  const translation_explanation = `§DEMARCHE§
Le verset fait suite à l'avertissement du verset 28 qui interdisait de prendre les rejeteurs comme alliés. Ici, le texte rappelle que même ce qui est dissimulé dans les poitrines est connu de Dieu — une réponse à ceux qui pourraient penser que des alliances secrètes échappent à la connaissance divine. Le verset établit ensuite l'étendue universelle du savoir divin (cieux et terre) et conclut par l'affirmation de la capacité totale de Dieu.

**Qul** (dis) est un verbe à l'impératif (un ordre direct adressé au Prophète de transmettre un message). La racine q-w-l signifie proférer des paroles — c'est un acte extérieur de communication. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la parole est ce qui sort du locuteur et atteint l'auditeur.

**Tukhfū** (cachez) est un verbe à la forme IV (causative), à l'inaccompli majzūm (après la particule conditionnelle « in » qui signifie « si »), deuxième personne du pluriel masculin. La forme IV signifie « faire devenir caché » — c'est un acte intentionnel de dissimulation. D'après les sources étymologiques, la racine kh-f-y a remarquablement deux significations contraires : être caché ET apparaître. Ici, la forme IV active le sens causatif de cacher — rendre invisible quelque chose qui existait à la vue.

**Ṣudūrikum** (vos poitrines) est le pluriel de ṣadr (poitrine) avec le pronom possessif « kum » (vos). La poitrine est le siège métaphorique de l'intériorité — c'est l'espace intérieur où résident les pensées, les émotions et les intentions cachées. L'expression « mā fī ṣudūrikum » (ce qui est dans vos poitrines) désigne le contenu intérieur et secret de la personne.

**Tubdūhu** (le montrez) est un verbe à la forme IV (causative) de la racine b-d-w, à l'inaccompli majzūm, avec le pronom suffixe « hu » (le). La forme IV signifie « faire apparaître, rendre visible ». C'est l'exact contraire de tukhfū dans la même phrase — cacher ou rendre apparent. La racine b-d-w signifie fondamentalement apparaître, devenir visible après avoir été caché.

**Yaʿlamhu** (le sait) est un verbe à l'inaccompli majzūm (apodose de la condition « in »), troisième personne du masculin singulier de la racine ʿ-l-m, avec le pronom suffixe « hu » (le). Le majzūm ici exprime le résultat de la condition : « si vous cachez... Il le sait ». Le savoir (ʿilm) est un état intérieur de compréhension directe et certaine — il n'a pas besoin de la vue pour fonctionner.

**Allāhu** (Dieu) est le nom propre de la divinité, sujet du verbe yaʿlamhu. La racine ʾ-l-h renvoie à la divinité — ce qui reçoit l'adoration. La position de ce nom après le verbe (sujet postposé) est normale en arabe.

**Yaʿlamu** (sait) est le même verbe ʿ-l-m mais cette fois à l'inaccompli marfūʿ (indicatif). Ce n'est plus un conditionnel mais une affirmation indépendante : « Et Il sait ». Le passage du majzūm (conditionnel) au marfūʿ (affirmatif) élargit le savoir divin : il ne se limite pas aux secrets des poitrines, il englobe tout ce qui est dans les cieux et la terre.

**As-samāwāti** (les cieux) est le pluriel de samāʾ (ciel), défini par l'article « al ». La racine s-m-w signifie être haut, s'élever. Le ciel est ce qui est au-dessus et couvre — la voûte qui enveloppe la terre. Le pluriel désigne l'ensemble des réalités élevées.

**Al-arḍi** (la terre) est un nom singulier défini de la racine ʾ-r-ḍ. La terre est la surface solide. La préposition « fī » (dans) avant al-arḍ est importante : le texte dit « dans la terre », pas « sur la terre » — ce qui englobe aussi ce qui est enfoui et caché.

**Kulli** (toute) est un nom de la racine k-l-l en position d'annexion (iḍāfa) avec shayʾin. Kull signifie la totalité sans exception — chaque élément sans en laisser aucun de côté.

**Shayʾin** (chose) est un nom indéfini de la racine sh-y-ʾ, en position de complément (génitif). D'après les sources étymologiques, shayʾ est le terme le plus général : « ce qui peut être connu, ce dont on peut parler ». L'expression kulli shayʾin englobe absolument tout ce qui existe.

**Qadīrun** (capable) est un adjectif de la forme faʿīl (intensive) de la racine q-d-r, en position d'attribut de la phrase nominale « Allāhu ʿalā kulli shayʾin qadīrun ». La forme faʿīl indique une qualité permanente et intense — ce n'est pas une capacité ponctuelle mais une puissance constante. La construction « qadīr ʿalā » (capable de/sur) affirme que cette capacité s'étend à toute chose.

§JUSTIFICATION§
**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est le sens impératif direct de q-w-l : proférer un message. L'alternative « avis/opinion » est écartée car l'impératif commande un acte de profération, pas une formation d'opinion intérieure.

**cachez** — Le sens retenu est « Dissimulation/Secret ». Le mot « cachez » est choisi car c'est du français courant et correspond à la forme IV causative de kh-f-y (rendre invisible intentionnellement). L'alternative « dissimulez » est écartée car un peu plus soutenu que « cachez » pour la même réalité. « Être imperceptible » est écarté car il décrit un état et non un acte causatif.

**poitrines** — Le sens retenu est « Poitrine/Intériorité ». Le mot « poitrines » est choisi car il est à la fois littéral (ṣadr = poitrine) et métaphorique (siège de l'intériorité). L'alternative « cœur (intérieur) » est écartée car ṣadr n'est pas le même mot que qalb (cœur) — traduire par « cœurs » ajouterait une confusion avec une autre racine.

**le montrez** — Le sens retenu est « Apparition/Manifestation ». Le mot « montrez » est choisi car la forme IV de b-d-w est causative (faire apparaître) et « montrer » est le verbe transitif naturel en français courant. L'alternative « apparaître » est écartée car elle est intransitive et ne convient pas à la forme IV transitive.

**sait** — Le sens retenu est « Savoir/Connaissance ». Le mot « sait » est choisi car ʿ-l-m désigne le savoir factuel et certain. L'alternative « connaît » est écartée car en français, « connaître » implique une familiarité acquise par l'expérience, alors que le texte affirme un savoir direct et absolu.

**Dieu** — Le sens retenu est « Divinité ». « Dieu » est la traduction systématique de Allāh dans notre approche étymologique.

**les cieux** — Le sens retenu est « Ciel/Ce qui couvre ». Le pluriel « cieux » correspond à as-samāwāt. L'alternative « hauteurs » est écartée car samāwāt désigne spécifiquement les cieux comme entité, pas la qualité abstraite de hauteur.

**la terre** — Le sens retenu est « Terre/Sol ». Le mot « terre » correspond directement à al-arḍ sans alternative significative.

**toute** — Le sens retenu est « Totalité ». « Toute » est le sens direct de kulli (totalité sans exception). L'alternative « chaque » est écartée car « toute chose » est plus naturel que « chaque chose » en français.

**chose** — Le sens retenu est « Chose/Existence ». « Chose » est le sens direct de shayʾ — la réalité la plus générale. L'alternative « entité » est écartée car trop philosophique pour du français courant.

**capable** — Le sens retenu est « Puissance/Capacité ». Le mot « capable » est choisi car qadīr ʿalā signifie « ayant la capacité de ». L'alternative « tout-puissant » est écartée car elle fusionne kulli shayʾin (toute chose) et qadīr (capable) en un seul mot, ce qui est une interprétation et non une traduction. L'alternative « omnipotent » est écartée car c'est un mot latin (omni-potens) du registre théologique, pas du français courant.

§CRITIQUE§
**le montrez vs le divulguiez** — Les traductions courantes donnent « divulguiez » pour tubdūhu. Ce choix implique que rendre ses pensées visibles est un acte indiscret ou imprudent. Mais la racine b-d-w signifie « apparaître, devenir visible » — un processus neutre, sans connotation négative. Le texte pose une simple alternative : que vous le cachiez ou le rendiez apparent — il ne dit pas que le montrer est répréhensible. « Montrer » respecte cette neutralité.

**dans la terre vs sur la terre** — Les traductions courantes donnent « sur la terre » pour fī al-arḍ. Or fī signifie « dans » (à l'intérieur de), pas « sur » (à la surface de). La préposition arabe pour « sur » est ʿalā, et elle est utilisée dans le même verset pour « ʿalā kulli shayʾin ». La différence n'est pas anodine : « ce qui est dans la terre » inclut ce qui est enfoui, caché sous la surface — renforçant le thème central du verset sur la connaissance divine de tout ce qui est dissimulé.

**Omnipotent vs capable de toute chose** — Les traductions courantes donnent « Omnipotent » pour qadīrun ʿalā kulli shayʾin. « Omnipotent » est un mot latin (omni-potens = tout-puissant) emprunté au vocabulaire théologique chrétien. La racine q-d-r signifie « mesurer, avoir la capacité de ». La forme qadīr (faʿīl = intensif) signifie « pleinement capable ». L'expression complète « qadīr ʿalā kulli shayʾin » est une phrase de trois mots que les traductions courantes compriment en un seul — cette compression masque la structure et le sens de chaque mot.`;

  const {error:trErr} = await db.from('verse_analyses').update({
    segments: segs,
    translation_arab,
    full_translation,
    translation_explanation,
    validated: false
  }).eq('id', VA_ID);
  console.log('Translation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 5. PHRASES DU QUOTIDIEN POUR QUL (0 daily)
  // =============================================
  console.log('\n--- 5. Word daily pour qul ---');

  // Vérifier d'abord
  const {count:qulCount} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', AIDS.qul);
  if (qulCount > 0) {
    console.log('qul a déjà '+qulCount+' daily — SKIP');
  } else {
    const dailyPhrases = [
      {analysis_id: AIDS.qul, phrase_ar: 'قُل لي ماذا تريد', phrase_fr: 'Dis-moi ce que tu veux', context: "Demander à quelqu'un d'exprimer ses besoins"},
      {analysis_id: AIDS.qul, phrase_ar: 'قال لها الحقيقة', phrase_fr: 'Il lui a dit la vérité', context: "Acte de parole honnête et directe"},
      {analysis_id: AIDS.qul, phrase_ar: 'يقولون ما لا يفعلون', phrase_fr: 'Ils disent ce qu\'ils ne font pas', context: "Parole sans action correspondante"}
    ];
    const {error:dailyErr} = await db.from('word_daily').insert(dailyPhrases);
    console.log('Daily qul:', dailyErr ? 'ERROR: '+dailyErr.message : '3 phrases insérées OK');
  }

  // =============================================
  // 6. VÉRIFICATION FINALE
  // =============================================
  console.log('\n--- 6. Vérification finale ---');

  // Check VWA count
  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen,concept_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → ['+v.concept_chosen+'] '+v.sense_chosen));

  // Check segments
  const {data:vaCheck} = await db.from('verse_analyses').select('segments,translation_arab').eq('id', VA_ID).single();
  console.log('\nTraduction: '+(vaCheck.translation_arab ? vaCheck.translation_arab.substring(0,80)+'...' : 'VIDE <<<'));

  const impSegs = vaCheck.segments.filter(s => s.type === 'important');
  let segIssues = 0;
  impSegs.forEach(s => {
    if (!s.fr) { console.log('  MISSING fr pos='+s.position+' <<<'); segIssues++; }
    if (!s.sense_retenu) { console.log('  MISSING sense_retenu pos='+s.position+' <<<'); segIssues++; }
  });
  console.log(segIssues === 0 ? 'Tous les segments ont fr + sense_retenu ✓' : segIssues+' problèmes <<<');

  // Check daily
  const {count:dailyFinal} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', AIDS.qul);
  console.log('Daily qul: '+dailyFinal+' phrases');

  console.log('\n=== ÉTAPES 3+4 TERMINÉES ===');
}

etape34().catch(e => console.error('FATAL:', e));
