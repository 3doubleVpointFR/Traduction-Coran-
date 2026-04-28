const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 319;

async function getSenses(wordKey) {
  const {data:wa} = await db.from('word_analyses').select('id').eq('word_key', wordKey).maybeSingle();
  if (!wa) return {};
  const {data:senses} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', wa.id).order('display_order');
  const byC = {};
  senses.forEach(s => { if(!byC[s.concept]) byC[s.concept]=[]; byC[s.concept].push(s.sense); });
  return byC;
}

async function run() {
  console.log('=== PIPELINE S3:V26 — ÉTAPES 3+4 ===\n');

  // =============================================
  // ÉTAPE 3 — Lire les sens depuis la BDD
  // =============================================
  const mlkS = await getSenses('mlk');
  const atyS = await getSenses('aty');
  const shyS = await getSenses('shy');
  const nzaS = await getSenses('nza');
  const ezzS = await getSenses('ezz');
  const dhlS = await getSenses('dhl');
  const ydyS = await getSenses('ydy');
  const khyrS = await getSenses('khyr');
  const kllS = await getSenses('kll');
  const qdrS = await getSenses('qdr');

  // =============================================
  // ÉTAPE 3 — Construire analysis_axes pour chaque mot
  // =============================================

  // 1. MLK — mālika al-mulki (pos=3)
  const mlkAxes = {
    sense_chosen: 'règne',
    concept_chosen: 'Royauté/Souveraineté',
    concepts: {
      'Royauté/Souveraineté': {
        status: 'retenu',
        senses: mlkS['Royauté/Souveraineté'],
        proof_ctx: "Le verset porte sur le pouvoir de régner donné et repris par Dieu. Le sens « souveraineté/règne » est l'objet central du verset — ce que Dieu distribue et retire. Le parallélisme « Tu donnes le règne / Tu retires le règne » confirme que le mulk ici est l'autorité de régner, pas une simple possession matérielle."
      },
      'Possession/Autorité': {
        status: 'probable',
        senses: mlkS['Possession/Autorité'],
        proof_ctx: "Le sens « possession » est proche car mālika est un participe actif de « posséder ». Mais dans ce verset, ce qui est possédé est spécifiquement le pouvoir de régner (pas un bien matériel), ce qui active le champ de la souveraineté plutôt que de la possession générique."
      },
      'Ange/Messager': {
        status: 'nul',
        senses: mlkS['Ange/Messager'],
        proof_ctx: "Aucun rapport avec les anges dans ce verset."
      },
      'Sens isolé/Pâte': {
        status: 'nul',
        senses: mlkS['Sens isolé/Pâte'],
        proof_ctx: "Sans rapport."
      },
      'Sens isolé/Maîtriser': {
        status: 'nul',
        senses: mlkS['Sens isolé/Maîtriser'],
        proof_ctx: "Sans rapport direct."
      },
      'Eau/Liquide': {
        status: 'nul',
        senses: mlkS['Eau/Liquide'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 2. ATY — tuʾtī (pos=5)
  const atyAxes = {
    sense_chosen: 'donner',
    concept_chosen: 'Venue/Arrivée',
    concepts: {
      'Venue/Arrivée': {
        status: 'retenu',
        senses: atyS['Venue/Arrivée'],
        proof_ctx: "La forme IV de ʾ-t-y transforme le mouvement de « venir » en « faire venir vers quelqu'un » = donner. Le verset utilise tuʾtī al-mulka : « Tu fais arriver le règne vers celui que Tu veux ». C'est l'acte de transmettre le pouvoir souverain."
      },
      'Sens isolé/Détruire': {
        status: 'nul',
        senses: atyS['Sens isolé/Détruire'],
        proof_ctx: "Aucune destruction dans ce contexte — il s'agit de donner, pas de détruire."
      }
    }
  };

  // 3. SHY (tashāʾu) — pos=8
  const shyVolAxes = {
    sense_chosen: 'vouloir',
    concept_chosen: 'Volonté',
    concepts: {
      'Volonté': {
        status: 'retenu',
        senses: shyS['Volonté'],
        proof_ctx: "Le verbe tashāʾu (inaccompli, 2e personne) exprime la volonté libre et continue de Dieu. Le verset répète quatre fois « man tashāʾu » (qui Tu veux), soulignant que chaque acte de Dieu — donner, retirer, renforcer, abaisser — procède de Sa volonté libre, sans contrainte extérieure."
      },
      'Chose/Être': {
        status: 'nul',
        senses: shyS['Chose/Être'],
        proof_ctx: "Le verbe tashāʾu est conjugué — c'est l'acte de vouloir, pas la chose."
      },
      'Néant': {
        status: 'nul',
        senses: shyS['Néant'],
        proof_ctx: "Aucun rapport avec le néant."
      },
      'Incitation/Contrainte': {
        status: 'nul',
        senses: shyS['Incitation/Contrainte'],
        proof_ctx: "La forme I exprime la volonté propre, pas l'incitation d'un autre."
      },
      'Difformité/Laideur': {
        status: 'nul',
        senses: shyS['Difformité/Laideur'],
        proof_ctx: "Sans rapport."
      },
      'Apaisement': {
        status: 'nul',
        senses: shyS['Apaisement'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 4. SHY (shayʾin) — pos=27
  const shyChoseAxes = {
    sense_chosen: 'chose',
    concept_chosen: 'Chose/Être',
    concepts: {
      'Chose/Être': {
        status: 'retenu',
        senses: shyS['Chose/Être'],
        proof_ctx: "Le nom shayʾin (indéfini, génitif) dans kulli shayʾin (toute chose) désigne la réalité la plus générale — tout ce qui existe ou peut être conçu. Dieu est capable de toute chose sans exception."
      },
      'Volonté': {
        status: 'nul',
        senses: shyS['Volonté'],
        proof_ctx: "Ici c'est le nom « chose », pas le verbe « vouloir »."
      },
      'Néant': {
        status: 'peu_probable',
        senses: shyS['Néant'],
        proof_ctx: "Le néant est l'opposé de la chose. Dans kulli shayʾin, c'est la chose qui est affirmée, pas le néant."
      },
      'Incitation/Contrainte': {
        status: 'nul',
        senses: shyS['Incitation/Contrainte'],
        proof_ctx: "Sans rapport."
      },
      'Difformité/Laideur': {
        status: 'nul',
        senses: shyS['Difformité/Laideur'],
        proof_ctx: "Sans rapport."
      },
      'Apaisement': {
        status: 'nul',
        senses: shyS['Apaisement'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 5. NZA — tanziʿu (pos=10)
  const nzaAxes = {
    sense_chosen: 'retirer',
    concept_chosen: 'Arrachement/Extraction',
    concepts: {
      'Arrachement/Extraction': {
        status: 'retenu',
        senses: nzaS['Arrachement/Extraction'],
        proof_ctx: "Le verbe tanziʿu (inaccompli, forme I) exprime l'acte de retirer le règne de qui Dieu veut. Le parallélisme avec tuʾtī (Tu donnes) crée une paire d'opposés : donner et retirer. Le Lane's donne nazaʿa comme « tirer, arracher, retirer de sa place ». C'est un acte souverain de reprise, pas un arrachement violent."
      },
      'Aspiration/Nostalgie': {
        status: 'nul',
        senses: nzaS['Aspiration/Nostalgie'],
        proof_ctx: "L'aspiration est un mouvement intérieur de désir — ici l'action est extérieure et porte sur un objet (le règne)."
      },
      'Dispute/Contestation': {
        status: 'nul',
        senses: nzaS['Dispute/Contestation'],
        proof_ctx: "Pas de dispute — Dieu agit unilatéralement, sans opposition."
      },
      'Agonie/Mort': {
        status: 'nul',
        senses: nzaS['Agonie/Mort'],
        proof_ctx: "Aucun rapport avec la mort dans ce contexte."
      },
      'Ressemblance/Hérédité': {
        status: 'nul',
        senses: nzaS['Ressemblance/Hérédité'],
        proof_ctx: "Aucun rapport avec la ressemblance."
      },
      'Tir/Arc': {
        status: 'nul',
        senses: nzaS['Tir/Arc'],
        proof_ctx: "Aucun rapport avec le tir."
      }
    }
  };

  // 6. EZZ — tuʿizzu (pos=15)
  const ezzAxes = {
    sense_chosen: 'être puissant',
    concept_chosen: 'Puissance/Gloire',
    concepts: {
      'Puissance/Gloire': {
        status: 'retenu',
        senses: ezzS['Puissance/Gloire'],
        proof_ctx: "La forme IV de ʿ-z-z signifie « accorder la ʿizza » — rendre quelqu'un puissant, glorieux, invincible. Le verset oppose tuʿizzu (rendre puissant) et tuḏillu (abaisser). La ʿizza est un état de force et de respect qui élève au-dessus des autres — c'est plus que le simple renforcement matériel."
      },
      'Renforcement': {
        status: 'probable',
        senses: ezzS['Renforcement'],
        proof_ctx: "Le renforcement est l'aspect mécanique de l'acte — rendre plus fort. Mais tuʿizzu confère spécifiquement la ʿizza (puissance-gloire), pas juste la force physique. La nuance est dans la dignité et le respect qui accompagnent cette puissance."
      },
      'Rareté/Valeur': {
        status: 'nul',
        senses: ezzS['Rareté/Valeur'],
        proof_ctx: "La rareté n'est pas activée dans ce contexte de distribution du pouvoir."
      },
      'Lieu/Géographie': {
        status: 'nul',
        senses: ezzS['Lieu/Géographie'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 7. DHL — tuḏillu (pos=19)
  const dhlAxes = {
    sense_chosen: 'abaisser',
    concept_chosen: 'Avilissement/Humiliation',
    concepts: {
      'Avilissement/Humiliation': {
        status: 'retenu',
        senses: dhlS['Avilissement/Humiliation'],
        proof_ctx: "La forme IV de dh-l-l signifie « rendre dhull » — faire perdre sa position et sa dignité. Le Lane's donne adhallahu : « il l'a abaissé, humilié, rendu faible ». C'est le contraire exact de tuʿizzu (rendre puissant). Le dhull (avec damma) est l'avilissement — un état de bassesse et de faiblesse visible aux yeux de tous."
      },
      'Douceur/Docilité': {
        status: 'peu_probable',
        senses: dhlS['Douceur/Docilité'],
        proof_ctx: "La docilité (dhill, avec kasra) est un sens positif de cette racine — être doux, maniable, souple. Mais l'opposition directe avec tuʿizzu (rendre puissant) exige le sens négatif : c'est l'abaissement, pas la douceur. Rendre quelqu'un « doux » n'est pas l'opposé de le rendre « puissant »."
      },
      'Apprivoisement/Dressage': {
        status: 'nul',
        senses: dhlS['Apprivoisement/Dressage'],
        proof_ctx: "Le contexte est celui de la distribution du pouvoir entre les peuples, pas du dressage."
      },
      'Facilitation/Aplanissement': {
        status: 'nul',
        senses: dhlS['Facilitation/Aplanissement'],
        proof_ctx: "Sans rapport avec l'aplanissement d'un chemin."
      }
    }
  };

  // 8. YDY — bi-yadika (pos=22)
  const ydyAxes = {
    sense_chosen: 'main',
    concept_chosen: 'Main/Corps',
    concepts: {
      'Main/Corps': {
        status: 'retenu',
        senses: ydyS['Main/Corps'],
        proof_ctx: "Le texte dit littéralement bi-yadika (dans ta main). Le Lane's donne yad : « le bras, de l'épaule aux doigts ». La main est l'instrument de l'action — ce qui saisit, donne et contrôle. Le texte emploie le mot « main » et nous le traduisons tel quel, sans interpréter."
      },
      'Pouvoir/Autorité': {
        status: 'probable',
        senses: ydyS['Pouvoir/Autorité'],
        proof_ctx: "Le pouvoir est une extension métaphorique de la main — « sous sa main » signifie « sous son autorité ». Le contexte (distribution du règne) active cette nuance. Mais choisir « pouvoir » à la place de « main » serait interpréter — le texte utilise le mot yad (main), pas sulṭa (autorité)."
      },
      'Bienfait/Générosité': {
        status: 'peu_probable',
        senses: ydyS['Bienfait/Générosité'],
        proof_ctx: "Le bienfait est ce que la main donne. Mais ici c'est la main elle-même qui est nommée, comme lieu où réside le bien — pas comme acte de donner."
      },
      'Antériorité/Présence': {
        status: 'nul',
        senses: ydyS['Antériorité/Présence'],
        proof_ctx: "Aucune antériorité spatiale ou temporelle dans ce contexte."
      },
      'Moyen/Instrument': {
        status: 'peu_probable',
        senses: ydyS['Moyen/Instrument'],
        proof_ctx: "Le moyen est la main qui exécute. Mais ici le verset dit que le bien EST dans la main, pas que la main est le moyen du bien."
      },
      'Soumission/Reconnaissance': {
        status: 'nul',
        senses: ydyS['Soumission/Reconnaissance'],
        proof_ctx: "Sans rapport — personne ne se soumet dans cette phrase."
      }
    }
  };

  // 9. KHYR — al-khayru (pos=23)
  const khyrAxes = {
    sense_chosen: 'bien',
    concept_chosen: 'Bien/Bonté',
    concepts: {
      'Bien/Bonté': {
        status: 'retenu',
        senses: khyrS['Bien/Bonté'],
        proof_ctx: "Le nom al-khayru (défini, nominatif) dans bi-yadika al-khayru désigne le bien dans toutes ses formes — moral, matériel, spirituel. C'est le bien comme réalité englobante qui inclut le règne, la puissance, et tout ce qui est bénéfique. La phrase nominale affirme une vérité permanente."
      },
      'Bien/Excellence': {
        status: 'probable',
        senses: khyrS['Bien/Excellence'],
        proof_ctx: "L'excellence est un degré supérieur du bien — le meilleur. Mais al-khayr ici n'est pas comparatif. C'est le bien en soi, pas « le meilleur » par rapport à autre chose."
      },
      'Choix/Préférence': {
        status: 'nul',
        senses: khyrS['Choix/Préférence'],
        proof_ctx: "Aucun acte de choix ou de préférence ici."
      },
      'Générosité/Noblesse': {
        status: 'nul',
        senses: khyrS['Générosité/Noblesse'],
        proof_ctx: "La générosité est une qualité de celui qui donne — ici c'est le bien lui-même qui est nommé."
      },
      'Supériorité': {
        status: 'nul',
        senses: khyrS['Supériorité'],
        proof_ctx: "Pas de comparaison de supériorité dans ce contexte."
      }
    }
  };

  // 10. KLL — kulli (pos=26)
  const kllAxes = {
    sense_chosen: 'tout',
    concept_chosen: 'Totalité',
    concepts: {
      'Totalité': {
        status: 'retenu',
        senses: kllS['Totalité'],
        proof_ctx: "Le nom kull (tout/chaque) en idāfa avec shayʾ (chose) exprime l'universalité absolue — il n'existe aucune chose dont Dieu ne serait pas capable. C'est la formule coranique ʿalā kulli shayʾin qadīr qui clôt l'énumération des pouvoirs divins."
      },
      'Émoussement/Faiblesse': {
        status: 'nul',
        senses: kllS['Émoussement/Faiblesse'],
        proof_ctx: "Sans rapport."
      },
      'Charge/Dépendance': {
        status: 'nul',
        senses: kllS['Charge/Dépendance'],
        proof_ctx: "Sans rapport."
      },
      'Corps/Anatomie': {
        status: 'nul',
        senses: kllS['Corps/Anatomie'],
        proof_ctx: "Sans rapport."
      },
      'Sens isolé/Agacer': {
        status: 'nul',
        senses: kllS['Sens isolé/Agacer'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 11. QDR — qadīrun (pos=28)
  const qdrAxes = {
    sense_chosen: 'être capable',
    concept_chosen: 'Puissance/Capacité',
    concepts: {
      'Puissance/Capacité': {
        status: 'retenu',
        senses: qdrS['Puissance/Capacité'],
        proof_ctx: "La forme faʿīl (qadīr) indique une qualité permanente et intrinsèque : la capacité totale. Après avoir détaillé quatre actes précis (donner, retirer, renforcer, abaisser), le verset conclut par une généralisation : Dieu est capable de toute chose sans exception."
      },
      'Mesure/Détermination': {
        status: 'probable',
        senses: qdrS['Mesure/Détermination'],
        proof_ctx: "La mesure et la détermination (qadr) sont liées à la racine q-d-r. Mais la forme qadīr active spécifiquement le sens de capacité — celui qui a le pouvoir de faire. Le Lane's distingue clairement qadr (mesurer) de qadīr (capable)."
      },
      'Sens isolé/Marmite': {
        status: 'nul',
        senses: qdrS['Sens isolé/Marmite'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // =============================================
  // INSERTION VWA (verse_word_analyses)
  // =============================================
  console.log('--- Insertion VWA ---');
  const vwaEntries = [
    {verse_id:VERSE_ID, word_key:'mlk', position:3, sense_chosen:'règne', analysis_axes:mlkAxes},
    {verse_id:VERSE_ID, word_key:'aty', position:5, sense_chosen:'donner', analysis_axes:atyAxes},
    {verse_id:VERSE_ID, word_key:'shy', position:8, sense_chosen:'vouloir', analysis_axes:shyVolAxes},
    {verse_id:VERSE_ID, word_key:'nza', position:10, sense_chosen:'retirer', analysis_axes:nzaAxes},
    {verse_id:VERSE_ID, word_key:'ezz', position:15, sense_chosen:'être puissant', analysis_axes:ezzAxes},
    {verse_id:VERSE_ID, word_key:'dhl', position:19, sense_chosen:'abaisser', analysis_axes:dhlAxes},
    {verse_id:VERSE_ID, word_key:'ydy', position:22, sense_chosen:'main', analysis_axes:ydyAxes},
    {verse_id:VERSE_ID, word_key:'khyr', position:23, sense_chosen:'bien', analysis_axes:khyrAxes},
    {verse_id:VERSE_ID, word_key:'shy', position:27, sense_chosen:'chose', analysis_axes:shyChoseAxes},
    {verse_id:VERSE_ID, word_key:'kll', position:26, sense_chosen:'tout', analysis_axes:kllAxes},
    {verse_id:VERSE_ID, word_key:'qdr', position:28, sense_chosen:'être capable', analysis_axes:qdrAxes},
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA:', vwaErr ? 'ERROR: '+vwaErr.message : vwaEntries.length+' entrées insérées OK');

  // =============================================
  // ÉTAPE 4 — Segments d'affichage
  // =============================================
  const segments = [
    {position:1, phon:'quli', arabic:'قُلِ', fr:'dis', is_particle:true, word_key:null},
    {position:2, phon:'allāhumma', arabic:'ٱللَّهُمَّ', fr:'Ô Dieu', is_particle:true, word_key:'llhm'},
    {position:3, phon:'mālika', arabic:'مَـٰلِكَ', fr:'souverain', pos:'nom', word_key:'mlk', is_particle:false, sense_retenu:'souverain'},
    {position:4, phon:'al-mulki', arabic:'ٱلْمُلْكِ', fr:'du règne', pos:'nom', word_key:'mlk', is_particle:false, sense_retenu:'règne'},
    {position:5, phon:'tuʾtī', arabic:'تُؤْتِى', fr:'Tu donnes', pos:'verbe', word_key:'aty', is_particle:false, sense_retenu:'donner'},
    {position:6, phon:'al-mulka', arabic:'ٱلْمُلْكَ', fr:'le règne', pos:'nom', word_key:'mlk', is_particle:false, sense_retenu:'règne'},
    {position:7, phon:'man', arabic:'مَن', fr:'à qui', is_particle:true, word_key:null},
    {position:8, phon:'tashāʾu', arabic:'تَشَآءُ', fr:'Tu veux', pos:'verbe', word_key:'shy', is_particle:false, sense_retenu:'vouloir'},
    {position:9, phon:'wa', arabic:'وَ', fr:'et', is_particle:true, word_key:null},
    {position:10, phon:'tanziʿu', arabic:'تَنزِعُ', fr:'Tu retires', pos:'verbe', word_key:'nza', is_particle:false, sense_retenu:'retirer'},
    {position:11, phon:'al-mulka', arabic:'ٱلْمُلْكَ', fr:'le règne', pos:'nom', word_key:'mlk', is_particle:false, sense_retenu:'règne'},
    {position:12, phon:'mimman', arabic:'مِمَّن', fr:'de qui', is_particle:true, word_key:null},
    {position:13, phon:'tashāʾu', arabic:'تَشَآءُ', fr:'Tu veux', pos:'verbe', word_key:'shy', is_particle:false, sense_retenu:'vouloir'},
    {position:14, phon:'wa', arabic:'وَ', fr:'et', is_particle:true, word_key:null},
    {position:15, phon:'tuʿizzu', arabic:'تُعِزُّ', fr:'Tu rends puissant', pos:'verbe', word_key:'ezz', is_particle:false, sense_retenu:'être puissant'},
    {position:16, phon:'man', arabic:'مَن', fr:'qui', is_particle:true, word_key:null},
    {position:17, phon:'tashāʾu', arabic:'تَشَآءُ', fr:'Tu veux', pos:'verbe', word_key:'shy', is_particle:false, sense_retenu:'vouloir'},
    {position:18, phon:'wa', arabic:'وَ', fr:'et', is_particle:true, word_key:null},
    {position:19, phon:'tuḏillu', arabic:'تُذِلُّ', fr:'Tu abaisses', pos:'verbe', word_key:'dhl', is_particle:false, sense_retenu:'abaisser'},
    {position:20, phon:'man', arabic:'مَن', fr:'qui', is_particle:true, word_key:null},
    {position:21, phon:'tashāʾu', arabic:'تَشَآءُ', fr:'Tu veux', pos:'verbe', word_key:'shy', is_particle:false, sense_retenu:'vouloir'},
    {position:22, phon:'bi-yadika', arabic:'بِيَدِكَ', fr:'dans Ta main', pos:'nom', word_key:'ydy', is_particle:false, sense_retenu:'main'},
    {position:23, phon:'al-khayru', arabic:'ٱلْخَيْرُ', fr:'le bien', pos:'nom', word_key:'khyr', is_particle:false, sense_retenu:'bien'},
    {position:24, phon:'innaka', arabic:'إِنَّكَ', fr:'certes Tu', is_particle:true, word_key:null},
    {position:25, phon:'ʿalā', arabic:'عَلَىٰ', fr:'de', is_particle:true, word_key:null},
    {position:26, phon:'kulli', arabic:'كُلِّ', fr:'toute', pos:'nom', word_key:'kll', is_particle:false, sense_retenu:'tout'},
    {position:27, phon:'shayʾin', arabic:'شَىْءٍ', fr:'chose', pos:'nom', word_key:'shy', is_particle:false, sense_retenu:'chose'},
    {position:28, phon:'qadīrun', arabic:'قَدِيرٌ', fr:'capable', pos:'adjectif', word_key:'qdr', is_particle:false, sense_retenu:'être capable'},
  ];

  // =============================================
  // ÉTAPE 4 — Traduction et démarche
  // =============================================
  const translationArab = "Dis : Ô Dieu, souverain du règne, Tu donnes le règne à qui Tu veux et Tu retires le règne de qui Tu veux, et Tu rends puissant qui Tu veux et Tu abaisses qui Tu veux — dans Ta main est le bien. Tu es certes capable de toute chose.";

  const fullTranslation = "Dis : «Ô Allah, Maître de l'autorité absolue. Tu donnes l'autorité à qui Tu veux, et Tu arraches l'autorité à qui Tu veux ; et Tu donnes la puissance à qui Tu veux, et Tu humilies qui Tu veux. Le bien est en Ta main et Tu es Omnipotent.» — Hamidullah";

  const explanation = [
    '§DEMARCHE§',
    "Ce verset est une invocation que le texte ordonne de prononcer. Les versets 24-25 rappellent que ceux qui se bercent d'illusions sur leur rétribution seront rassemblés pour un jour sans aucun doute, et chaque âme recevra ce qu'elle a acquis. Le verset 26 affirme la souveraineté absolue de Dieu : c'est Lui qui distribue et reprend le pouvoir, élève et abaisse.",

    "**quli** (dis) est un impératif (un ordre) de la racine q-w-l (dire). C'est un ordre adressé au prophète de prononcer l'invocation qui suit. L'impératif indique que cette invocation n'est pas spontanée — elle est enseignée.",

    "**allāhumma** (Ô Dieu) est une forme vocative (forme d'appel) spéciale utilisée pour les invocations solennelles. C'est l'équivalent de « yā allāh » (ô Dieu) mais en plus solennel.",

    "**mālika** (souverain) est un participe actif (une forme qui dit que la personne FAIT l'action activement et en permanence) de la racine m-l-k. Le sens premier est « posséder, avoir la maîtrise ». En tant que participe actif au vocatif (cas d'appel), il décrit Dieu comme celui qui possède activement et en permanence le règne. Le Lane's donne la racine m-l-k avec les sens de possession et de royauté. La construction mālika al-mulki est une idāfa (rattachement : le souverain DU règne), ce qui signifie que Dieu n'est pas simplement un souverain parmi d'autres — Il est le souverain du règne lui-même, la source de toute autorité. On traduit par « souverain ».",

    "**al-mulki** (du règne) / **al-mulka** (le règne) est un nom défini (avec l'article al-) de la même racine m-l-k. Le mulk désigne l'autorité de régner, le pouvoir souverain. Ce mot apparaît trois fois dans le verset : d'abord comme objet de possession (du règne), puis comme objet de don (Tu donnes le règne), puis comme objet de retrait (Tu retires le règne). Cette répétition est intentionnelle — elle martèle que le règne n'appartient à personne en propre, il est un dépôt que Dieu distribue et reprend. On traduit par « règne ».",

    "**tuʾtī** (Tu donnes) est un verbe à l'inaccompli (une forme qui dit que l'action est en cours, habituelle, ou permanente) de la racine ʾ-t-y, forme IV (une forme qui ajoute l'idée de « faire arriver vers quelqu'un »). Le sens premier de ʾ-t-y est « venir, arriver ». La forme IV transforme ce mouvement en acte de donner : faire venir quelque chose vers quelqu'un. L'inaccompli indique que cette action est continue — Dieu donne le règne de façon permanente, pas une seule fois. On traduit par « Tu donnes ».",

    "**tashāʾu** (Tu veux) est un verbe à l'inaccompli de la racine sh-y-ʾ. Le sens premier est « vouloir, désirer ». Le Lane's donne shāʾahu : « il l'a voulu, souhaité, désiré ». L'inaccompli dit que cette volonté est en cours, active, et sans limite temporelle. Le mot est répété quatre fois dans le verset (« à qui Tu veux… de qui Tu veux… qui Tu veux… qui Tu veux ») — ce refrain martèle que chaque action divine procède de Sa volonté libre, sans contrainte extérieure et sans condition. On traduit par « Tu veux ».",

    "**tanziʿu** (Tu retires) est un verbe à l'inaccompli de la racine n-z-ʿ. Le sens premier est « arracher, retirer, ôter de sa place ». Le Lane's donne nazaʿa : « il a tiré, arraché, retiré de sa place, déplacé ». L'inaccompli indique une action continue et habituelle. Le parallélisme avec tuʾtī (Tu donnes) crée une paire d'opposés : Dieu donne le règne et le retire, dans les deux cas par Sa seule volonté. On traduit par « Tu retires ».",

    "**tuʿizzu** (Tu rends puissant) est un verbe à l'inaccompli de la racine ʿ-z-z, forme IV (une forme qui transforme l'état en acte : « faire que quelqu'un devienne puissant »). Le sens premier de ʿ-z-z est « être puissant, glorieux, invincible ». Le Lane's donne ʿazza : « il était puissant, invincible ». La forme IV active le sens causatif : « accorder la puissance-gloire ». La ʿizza n'est pas une simple force physique — c'est une élévation qui rend respecté et invincible. Le parallélisme avec tuḏillu (Tu abaisses) forme la deuxième paire d'opposés du verset. On traduit par « Tu rends puissant ».",

    "**tuḏillu** (Tu abaisses) est un verbe à l'inaccompli de la racine dh-l-l, forme IV (une forme qui dit « faire que quelqu'un devienne dans l'état de dhull »). Le Lane's distingue deux réalités dans cette racine : le dhull (avec damma) qui est « bassesse, vilenie, humiliation, faiblesse » — le contraire exact de la ʿizza ; et le dhill (avec kasra) qui est « douceur, docilité, souplesse ». La forme IV ici active le premier sens : adhalla = « il a abaissé, humilié, rendu faible ». C'est le contraire de tuʿizzu — celui que Dieu abaisse perd sa position et sa dignité. On traduit par « Tu abaisses ».",

    "**bi-yadika** (dans Ta main) est composé de la préposition bi (dans/par), du nom yad (main) et du pronom possessif -ka (Ta). Le Lane's donne yad : « le bras, de l'articulation de l'épaule aux extrémités des doigts ». La phrase bi-yadika al-khayru est une phrase nominale (quand la phrase commence par un nom plutôt qu'un verbe, elle affirme une vérité permanente) : le bien EST dans Ta main — ça a toujours été et ça sera toujours. La « main » est l'instrument par lequel on saisit, donne et contrôle. On traduit par « dans Ta main ».",

    "**al-khayru** (le bien) est un nom défini au nominatif (le cas du sujet). Dans la phrase nominale bi-yadika al-khayru, le bien est le sujet — c'est le bien qui est déclaré être dans la main de Dieu. Le Lane's donne khayr : « bien, bon, vertueux ». Le bien ici est une réalité englobante — il résume ce que Dieu distribue : le règne, la puissance, et tout ce qui est bénéfique. On traduit par « le bien ».",

    "**qadīrun** (capable) est un adjectif de forme faʿīl (une forme qui indique une qualité permanente et intrinsèque) de la racine q-d-r. Le sens premier est « être capable, avoir le pouvoir de faire ». Le Lane's distingue qadr (mesurer, déterminer) de qadīr (qui a la capacité). La forme faʿīl dit que cette capacité n'est pas temporaire — elle est permanente et constitutive. La formule ʿalā kulli shayʾin qadīr (capable de toute chose) clôt le verset en généralisant : après quatre actes précis (donner, retirer, renforcer, abaisser), le texte affirme qu'il n'y a aucune chose dont Dieu ne soit capable. On traduit par « capable ».",

    '§JUSTIFICATION§',

    "**souverain** — Le sens retenu est « Royauté/Souveraineté ». Le mot « souverain » est choisi car il capture la possession active du pouvoir de régner — mālika est un participe actif, donc celui qui règne activement. L'alternative « possesseur » est écartée car elle est trop générique et ne véhicule pas l'idée de règne. L'alternative « maître » est écartée car elle évoque la propriété matérielle plutôt que l'autorité de régner.",

    "**règne** — Le sens retenu est « Royauté/Souveraineté ». Le mot « règne » est choisi car il désigne spécifiquement l'autorité de gouverner, qui est l'objet donné et retiré dans ce verset. L'alternative « royaume » est écartée car elle désigne un territoire, alors que le mulk ici est le pouvoir de régner, pas un lieu. L'alternative « autorité » est écartée car elle est trop abstraite — le règne inclut la dimension concrète du gouvernement.",

    "**Tu donnes** — Le sens retenu est « Venue/Arrivée ». Le mot « donner » est choisi car la forme IV de ʾ-t-y (faire venir vers quelqu'un) capture exactement l'acte de transmettre le règne. L'alternative « accorder » est écartée car elle ajoute une nuance de faveur gracieuse qui n'est pas dans le texte.",

    "**Tu veux** — Le sens retenu est « Volonté ». Le mot « vouloir » est choisi car il exprime l'acte intérieur de volonté libre sans condition extérieure. L'alternative « désirer » est écartée car elle ajoute une nuance émotionnelle (manque, aspiration) absente du contexte — la volonté divine ici est souveraine, pas émotionnelle.",

    "**Tu retires** — Le sens retenu est « Arrachement/Extraction ». Le mot « retirer » est choisi car il décrit l'acte de reprendre ce qui avait été donné. L'alternative « arracher » est écartée car elle est trop violente — le retrait du règne est un acte souverain, pas nécessairement brutal. L'alternative « ôter » est un synonyme acceptable mais « retirer » est plus courant en français.",

    "**Tu rends puissant** — Le sens retenu est « Puissance/Gloire ». L'expression « rendre puissant » est choisie car la forme IV de ʿ-z-z transforme l'état (être puissant) en acte (accorder la puissance). L'alternative « honorer » est écartée car elle est trop faible — la ʿizza est une puissance concrète qui rend invincible, pas un simple honneur social. L'alternative « renforcer » est écartée car elle est trop physique et ne véhicule pas la gloire associée à la ʿizza.",

    "**Tu abaisses** — Le sens retenu est « Avilissement/Humiliation ». Le mot « abaisser » est choisi car il décrit l'acte de faire perdre position et dignité — le contraire exact de « rendre puissant ». L'alternative « humilier » est écartée car elle ajoute en français une nuance d'intention moqueuse absente du texte arabe. L'alternative « rendre docile » est écartée car la docilité (dhill) est un sens positif de cette racine, alors que l'opposition avec la ʿizza exige le sens négatif (dhull = avilissement).",

    "**main** — Le sens retenu est « Main/Corps ». Le mot « main » est choisi car le texte dit littéralement bi-yadika (dans ta main). L'alternative « pouvoir » est écartée car ce serait une interprétation — le texte utilise le mot yad (main), pas un mot abstrait. L'alternative « emprise » est écartée pour la même raison.",

    "**le bien** — Le sens retenu est « Bien/Bonté ». Le mot « bien » est choisi car il englobe toute forme de bonté — morale, matérielle, spirituelle. L'alternative « bonté » est écartée car elle restreint au domaine moral. L'alternative « meilleur » est écartée car al-khayr ici n'est pas comparatif.",

    "**capable** — Le sens retenu est « Puissance/Capacité ». Le mot « capable » est choisi car la forme faʿīl (qadīr) indique une qualité permanente de capacité. L'alternative « puissant » est écartée car elle chevaucherait avec le mot ʿazīz déjà utilisé dans le verset. L'alternative « tout-puissant » est écartée car c'est un terme de théologie latine (omnipotens) absent du texte arabe.",

    '§CRITIQUE§',

    "**abaisser vs humilier** : les traductions courantes donnent « Tu humilies qui Tu veux ». Ce choix vient de l'interprétation classique qui voit dans tuḏillu une punition intentionnelle. Le Lane's distingue deux réalités dans la racine dh-l-l : le dhull (avec damma) qui est un état de bassesse et de faiblesse, et le dhill (avec kasra) qui est la douceur et la docilité. Le mot « humilier » en français ajoute une dimension de moquerie et d'intention blessante que le texte arabe ne contient pas. Le texte dit simplement que Dieu fait descendre de position. Notre traduction « Tu abaisses » capture cet acte sans y ajouter d'intention — c'est le mouvement inverse de « Tu rends puissant », rien de plus.",

    "**capable de toute chose vs Omnipotent** : les traductions courantes condensent qadīrun ʿalā kulli shayʾin en « Omnipotent » ou « Tout-Puissant ». Ces termes viennent du vocabulaire théologique latin (omni-potens). Le texte arabe détaille la formule : capable (qadīr) de (ʿalā) toute (kull) chose (shayʾ). Cette structure souligne l'universalité — chose par chose, il n'y en a aucune dont Dieu ne serait pas capable. Le terme théologique comprime cette réalité en un seul mot technique qui perd la structure et la précision du texte original."
  ].join('\n\n');

  // =============================================
  // UPDATE verse_analyses
  // =============================================
  console.log('\n--- Update verse_analyses ---');
  const {error:vaErr} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    full_translation: fullTranslation,
    segments: segments
  }).eq('verse_id', VERSE_ID);
  console.log('verse_analyses:', vaErr ? 'ERROR: '+vaErr.message : 'OK');

  // =============================================
  // WORD_DAILY — nza et dhl (pas encore de phrases)
  // =============================================
  console.log('\n--- Insertion word_daily ---');

  // Check existing daily for nza and dhl
  const {data:waNza} = await db.from('word_analyses').select('id').eq('word_key','nza').single();
  const {data:waDhl} = await db.from('word_analyses').select('id').eq('word_key','dhl').single();

  const {count:nzaDaily} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', waNza.id);
  const {count:dhlDaily} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', waDhl.id);

  if (nzaDaily === 0) {
    const nzaPhrases = [
      {analysis_id:waNza.id, sense:'retirer', arabic:'نَزَعَ المِسمارَ مِنَ الجِدار', phon:'nazaʿa l-mismāra mina l-jidār', french:'Il a retiré le clou du mur'},
      {analysis_id:waNza.id, sense:'arracher', arabic:'نَزَعَتِ الأَعشابَ مِنَ الحَديقة', phon:'nazaʿati l-aʿshāba mina l-ḥadīqa', french:'Elle a arraché les mauvaises herbes du jardin'},
      {analysis_id:waNza.id, sense:'extraire', arabic:'نَزَعَ الطَبيبُ السِنَّ', phon:'nazaʿa ṭ-ṭabību s-sinna', french:'Le dentiste a extrait la dent'},
    ];
    const {error:nzaDErr} = await db.from('word_daily').insert(nzaPhrases);
    console.log('nza daily:', nzaDErr ? 'ERROR: '+nzaDErr.message : '3 phrases insérées');
  } else {
    console.log('nza daily: SKIP ('+nzaDaily+' phrases existent déjà)');
  }

  if (dhlDaily === 0) {
    const dhlPhrases = [
      {analysis_id:waDhl.id, sense:'abaisser', arabic:'أَذَلَّتِ الهَزيمةُ كِبرِياءَهُم', phon:'adhallati l-hazīmatu kibriyāʾahum', french:'La défaite a abaissé leur fierté'},
      {analysis_id:waDhl.id, sense:'être docile', arabic:'الطَريقُ مُذَلَّلٌ سَهلُ السُلوك', phon:'aṭ-ṭarīqu mudhallaun sahlu s-sulūk', french:'Le chemin est aplani et facile à parcourir'},
      {analysis_id:waDhl.id, sense:'dresser', arabic:'ذَلَّلَ الحِصانَ الوَحشِيّ', phon:'dhallala l-ḥiṣāna l-waḥshiyy', french:'Il a dressé le cheval sauvage'},
    ];
    const {error:dhlDErr} = await db.from('word_daily').insert(dhlPhrases);
    console.log('dhl daily:', dhlDErr ? 'ERROR: '+dhlDErr.message : '3 phrases insérées');
  } else {
    console.log('dhl daily: SKIP ('+dhlDaily+' phrases existent déjà)');
  }

  // =============================================
  // LOGS FINAUX
  // =============================================
  console.log('\n========================================');
  console.log('VERSET 3:26 — TERMINÉ');
  console.log('========================================');
  const logEntries = [
    ['mlk', 'm-l-k', 'Royauté/Souveraineté', 'règne', 'souverain / règne'],
    ['aty', 'ʾ-t-y', 'Venue/Arrivée', 'donner', 'Tu donnes'],
    ['shy', 'sh-y-ʾ', 'Volonté', 'vouloir', 'Tu veux'],
    ['nza', 'n-z-ʿ', 'Arrachement/Extraction', 'retirer', 'Tu retires'],
    ['ezz', 'ʿ-z-z', 'Puissance/Gloire', 'être puissant', 'Tu rends puissant'],
    ['dhl', 'dh-l-l', 'Avilissement/Humiliation', 'abaisser', 'Tu abaisses'],
    ['ydy', 'y-d-y', 'Main/Corps', 'main', 'dans Ta main'],
    ['khyr', 'kh-y-r', 'Bien/Bonté', 'bien', 'le bien'],
    ['shy', 'sh-y-ʾ', 'Chose/Être', 'chose', 'chose'],
    ['kll', 'k-l-l', 'Totalité', 'tout', 'toute'],
    ['qdr', 'q-d-r', 'Puissance/Capacité', 'être capable', 'capable'],
  ];
  logEntries.forEach(([key, root, concept, sense, fr]) => {
    console.log(`  ${key} (${root}) → sens "${concept}" → mot français "${fr}"`);
  });
  console.log(`\nTraduction : "${translationArab}"`);
}

run().catch(e => console.error(e));
