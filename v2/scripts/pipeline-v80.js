const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// PIPELINE MAISON — Sourate 3, Verset 80
// verse_id = 373
// Arabe : وَلَا يَأْمُرَكُمْ أَن تَتَّخِذُوا۟ ٱلْمَلَـٰٓئِكَةَ
//          وَٱلنَّبِيِّـۧنَ أَرْبَابًا ۗ أَيَأْمُرُكُم بِٱلْكُفْرِ
//          بَعْدَ إِذْ أَنتُم مُّسْلِمُونَ
// ============================================================

async function run() {
  const vid = 373;

  // ===== 1. Effacer anciennes VWA si présentes =====
  await db.from('verse_word_analyses').delete().eq('verse_id', vid);

  // ===== 2. VWA — un par mot lexical =====
  const vwa = [];

  // pos 3 : amr (yamur — verbe ordonner, modalisé "ne pas", subjonctif)
  vwa.push({
    verse_id: vid, position: 3, word_key: 'amr',
    analysis_axes: {
      sense_chosen: 'ordonner',
      concept_chosen: 'Commandement/Autorité',
      concepts: {
        'Commandement/Autorité': {
          status: 'retenu',
          senses: ['ordonner', 'commander', 'nommer gouverneur'],
          proof_ctx: "yaʾmurakum est la 3e personne du singulier inaccompli au mode subjonctif (terminaison -a après wa-lā), forme I de la racine ʾ-m-r. Le sens premier de la racine est l'acte d'ordonner — un acte qui sort du commandant et impose un comportement à autrui. Compatible avec la structure yaʾmuru-ka bi-X (« il t'ordonne X ») et yaʾmuru-ka an Y (« il t'ordonne que Y »)."
        },
        'Affaire/Chose': {
          status: 'nul',
          senses: ['affaire', 'chose'],
          proof_ctx: "Sens nominal — non applicable ici puisque le mot est un verbe conjugué qui régit un complément d'objet (« vous »)."
        },
        'Consultation': {
          status: 'nul',
          senses: ['consulter'],
          proof_ctx: "Sens dérivé de la Forme III (tashāwur) — non utilisé ici, le verbe est à la Forme I."
        }
      }
    }
  });

  // pos 5 : akhz (tattakhidhū — verbe Forme VIII "adopter, prendre pour")
  vwa.push({
    verse_id: vid, position: 5, word_key: 'akhz',
    analysis_axes: {
      sense_chosen: 'adopter',
      concept_chosen: 'Prise/Saisie',
      concepts: {
        'Prise/Saisie': {
          status: 'retenu',
          senses: ['prendre', 'saisir', 'adopter'],
          proof_ctx: "tattakhidhū est la 2e personne du masculin pluriel inaccompli au subjonctif de la Forme VIII (ittakhadha) de la racine ʾ-kh-dh. La Forme VIII de cette racine signifie « se prendre pour soi », « adopter », « prendre quelqu'un comme... ». Compatible avec la double accusative (X comme Y) : ittakhadha-hu rabban (« il l'a pris pour seigneur »). Ici le verbe est suivi de deux compléments en accusatif : al-malāʾikata wa-l-nabiyyīna (les anges et les prophètes) puis arbāban (seigneurs) — structure « adopter X comme Y »."
        },
        'Châtiment': {
          status: 'nul',
          senses: ['punir', 'reprocher'],
          proof_ctx: "Sens dérivé de la Forme I appliqué à un agent puisseur — non requis ici, le verbe est à la Forme VIII et le contexte est l'adoption, pas la punition."
        }
      }
    }
  });

  // pos 6 : mlk (al-malāʾikah — les anges)
  vwa.push({
    verse_id: vid, position: 6, word_key: 'mlk',
    analysis_axes: {
      sense_chosen: 'ange',
      concept_chosen: 'Ange/Messager',
      concepts: {
        'Ange/Messager': {
          status: 'retenu',
          senses: ['ange', 'messager', 'message'],
          proof_ctx: "al-malāʾikata est le pluriel défini accusatif de malak (مَلَك = ange/messager), nom collectif désignant la catégorie des êtres angéliques. La forme malak appartient à un sens spécialisé de la racine m-l-k — distincte du sens « possession/royauté » du sens dominant. Compatible avec l'accusatif requis par tattakhidhū."
        },
        'Possession/Autorité': {
          status: 'nul',
          senses: ['posséder', 'maître'],
          proof_ctx: "Le sens dominant de la racine est ici inadapté : malāʾika désigne précisément les êtres angéliques (catégorie ontologique), pas l'acte de posséder ou les possesseurs humains."
        },
        'Royauté/Souveraineté': {
          status: 'nul',
          senses: ['roi', 'royaume'],
          proof_ctx: "La forme malik (roi) est différente de malak (ange) — ici le pluriel malāʾika exige le sens « anges », pas « rois »."
        }
      }
    }
  });

  // pos 8 : nba (an-nabiyyīn — les prophètes)
  vwa.push({
    verse_id: vid, position: 8, word_key: 'nba',
    analysis_axes: {
      sense_chosen: 'prophète',
      concept_chosen: 'Prophétie',
      concepts: {
        'Prophétie': {
          status: 'retenu',
          senses: ['prophète', 'prophétie'],
          proof_ctx: "an-nabiyyīna est le pluriel masculin défini accusatif de nabī (نَبِيّ = prophète), nom dérivé de la racine n-b-ʾ qui désigne celui qui apporte une nouvelle (nabaʾ). Le prophète est étymologiquement « porteur d'annonce » — celui par qui une information transcendante est transmise. Compatible avec l'accusatif requis par tattakhidhū comme second objet aux côtés de al-malāʾika."
        },
        'Information/Nouvelle': {
          status: 'nul',
          senses: ['informer', 'nouvelle'],
          proof_ctx: "Sens premier de la racine — ici le mot dérivé nabī désigne la personne du prophète, pas l'acte d'informer ni la nouvelle elle-même."
        },
        'Sens isolé/Crier': {
          status: 'nul',
          senses: ['crier'],
          proof_ctx: "Sens isolé — sans rapport avec le contexte."
        }
      }
    }
  });

  // pos 9 : rbb (arbāban — seigneurs, pl indéfini accusatif)
  vwa.push({
    verse_id: vid, position: 9, word_key: 'rbb',
    analysis_axes: {
      sense_chosen: 'seigneur',
      concept_chosen: 'Seigneurie/Autorité bienveillante',
      concepts: {
        'Seigneurie/Autorité bienveillante': {
          status: 'retenu',
          senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient'],
          proof_ctx: "arbāban est le pluriel indéfini accusatif de rabb (رَبّ = seigneur, maître). Pluriel inhabituel dans le Coran (généralement rabb est singulier rapporté à Dieu) — l'usage pluriel ici signale la pluralité des seigneurs adoptés, ce qui s'oppose précisément à l'unicité divine. Compatible avec le second accusatif de la construction « adopter X comme Y » (X=anges/prophètes, Y=seigneurs)."
        },
        'Éducation/Accompagnement': {
          status: 'nul',
          senses: ['éduquer', 'élever un enfant'],
          proof_ctx: "Sens dérivé qui suppose un objet humain à éduquer — ici arbāban désigne un statut d'autorité, pas l'acte d'éducation."
        },
        'Croissance/Augmentation': {
          status: 'nul',
          senses: ['augmenter', 'croître'],
          proof_ctx: "Sens primitif de la racine — ici la forme nominale rabb ne dérive pas vers ce sens."
        }
      }
    }
  });

  // pos 10 : amr (ayamurukum — verbe interrogatif "vous ordonnera-t-il")
  vwa.push({
    verse_id: vid, position: 10, word_key: 'amr',
    analysis_axes: {
      sense_chosen: 'ordonner',
      concept_chosen: 'Commandement/Autorité',
      concepts: {
        'Commandement/Autorité': {
          status: 'retenu',
          senses: ['ordonner', 'commander'],
          proof_ctx: "ʾayamurukum est composé de la particule interrogative ʾa- (« est-ce que ») et du verbe yaʾmurukum (3e pers sing inaccompli indicatif de ʾ-m-r) — même racine et sens que la position 3, mais ici à l'indicatif après l'interrogation. La structure yaʾmuru-kum bi-X (« il vous ordonne X ») introduit le complément avec la préposition bi-. Construction parallèle à la position 3, qui pose la même question rhétorique sur l'origine du commandement."
        },
        'Affaire/Chose': {
          status: 'nul',
          senses: ['affaire'],
          proof_ctx: "Sens nominal — non applicable ici puisque le mot est un verbe conjugué."
        }
      }
    }
  });

  // pos 11 : kfr (al-kufr — la couverture/dissimulation, choix étymologique premier)
  vwa.push({
    verse_id: vid, position: 11, word_key: 'kfr',
    analysis_axes: {
      sense_chosen: 'couvrir',
      concept_chosen: 'Couverture/Dissimulation',
      concepts: {
        'Couverture/Dissimulation': {
          status: 'retenu',
          senses: ['couvrir', 'cacher', 'la nuit qui couvre'],
          proof_ctx: "al-kufri est le génitif défini de kufr (كُفْر), nom verbal de la racine k-f-r dont le sens étymologique premier est l'acte de couvrir — Lane's : « He covered, concealed, hid, or veiled, a thing ». Le cultivateur (kāfir au sens originel) est celui qui couvre la graine de terre, et la nuit (kāfira) est ce qui couvre par son obscurité. L'extension au registre théologique désigne celui qui recouvre la vérité reçue — sens premier conservé pour respecter l'étymologie de la racine, plutôt que la spécialisation post-coranique. Compatible avec la préposition bi- qui marque l'objet du verbe yaʾmuru."
        },
        'Rejet/Ingratitude': {
          status: 'probable',
          senses: ['nier', 'être ingrat', 'renier un bienfait', 'rejeter'],
          proof_ctx: "Sens dérivé fréquent dans le Coran — l'acte de couvrir une vérité reçue équivaut à la nier ou à la rejeter. Possible ici, mais nous retenons le sens premier de couverture pour préserver la racine. Le contexte (couvrir/dissimuler après s'être remis) reste cohérent avec ce sens dérivé."
        },
        'Expiation/Réparation': {
          status: 'nul',
          senses: ['expier'],
          proof_ctx: "Sens dérivé qui désigne la couverture comme effacement d'une faute — non applicable ici, le contexte est négatif (la couverture comme dissimulation, pas comme réparation)."
        }
      }
    }
  });

  // pos 12 : baed (baʿda — préposition "après")
  vwa.push({
    verse_id: vid, position: 12, word_key: 'baed',
    analysis_axes: {
      sense_chosen: 'après',
      concept_chosen: 'Postériorité',
      concepts: {
        'Postériorité': {
          status: 'retenu',
          senses: ['après', 'ensuite'],
          proof_ctx: "baʿda est une préposition d'ordre temporel marquant la postériorité — « après » au sens chronologique. La racine b-ʿ-d signifie l'éloignement spatial et la postériorité temporelle (l'« après » est ce qui est temporellement éloigné en aval). Compatible avec la construction baʿda idh + proposition nominale (« après que »)."
        },
        'Éloignement/Distance': {
          status: 'nul',
          senses: ['être loin', "s'éloigner"],
          proof_ctx: "Sens spatial primaire de la racine — ici la préposition baʿda fonctionne au registre temporel, pas spatial."
        },
        'Mort/Destruction': {
          status: 'nul',
          senses: ['périr'],
          proof_ctx: "Sens dérivé de l'éloignement définitif — non applicable au contexte temporel ici."
        }
      }
    }
  });

  // pos 15 : slm (muslimūn — actifs de Forme IV, "ceux qui se remettent")
  vwa.push({
    verse_id: vid, position: 15, word_key: 'slm',
    analysis_axes: {
      sense_chosen: 'se remettre',
      concept_chosen: 'Remise/Reddition',
      concepts: {
        'Remise/Reddition': {
          status: 'retenu',
          senses: ['se remettre', 'se rendre', "s'en remettre", 'livrer'],
          proof_ctx: "muslimūna est le pluriel masculin de muslim, participe actif de la Forme IV (ʾaslama) de la racine s-l-m. La Forme IV signifie « remettre quelque chose à quelqu'un, se rendre, s'en remettre intégralement à » — l'acte de transmettre sa volonté propre à une autorité. Le sens étymologique premier (remise/reddition) est conservé pour préserver la racine, plutôt que la spécialisation post-coranique en label confessionnel. Compatible avec la phrase nominale antum muslimūna (« vous êtes de ceux qui se remettent »)."
        },
        'Paix/Soumission': {
          status: 'probable',
          senses: ['paix', 'soumission', 'islam', 'salut'],
          proof_ctx: "Sens dérivé — la remise volontaire entraîne la paix avec celui à qui l'on se remet. Sens cohérent avec le contexte mais nous retenons le sens premier de remise pour préserver l'étymologie active du participe."
        },
        'Intégrité/Santé': {
          status: 'nul',
          senses: ['sain et sauf'],
          proof_ctx: "Sens premier de la racine au sens de l'absence de défaut — non applicable au participe actif de la Forme IV."
        },
        'Salutation': {
          status: 'nul',
          senses: ['saluer'],
          proof_ctx: "Sens dérivé d'usage social — non applicable au participe muslim qui désigne un état, pas une formule de salutation."
        }
      }
    }
  });

  for (const v of vwa) {
    await db.from('verse_word_analyses').insert(v);
  }
  console.log(`✅ ${vwa.length} VWA insérées`);

  // ===== 3. Segments =====
  const segments = [
    { fr: "et", pos: null, phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "ne pas", pos: null, phon: "lā", arabic: "لَا", position: 2, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "qu'il vous ordonne", pos: "verbe", phon: "yaʾmurakum", arabic: "يَأْمُرَكُمْ", position: 3, word_key: "amr", is_particle: false, sense_retenu: "ordonner" },
    { fr: "que", pos: null, phon: "ʾan", arabic: "أَن", position: 4, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "vous adoptiez", pos: "verbe", phon: "tattakhidhū", arabic: "تَتَّخِذُوا۟", position: 5, word_key: "akhz", is_particle: false, sense_retenu: "adopter" },
    { fr: "les anges", pos: "nom", phon: "al-malāʾikata", arabic: "ٱلْمَلَـٰٓئِكَةَ", position: 6, word_key: "mlk", is_particle: false, sense_retenu: "ange" },
    { fr: "et", pos: null, phon: "wa", arabic: "وَ", position: 7, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "les prophètes", pos: "nom", phon: "an-nabiyyīna", arabic: "ٱلنَّبِيِّـۧنَ", position: 8, word_key: "nba", is_particle: false, sense_retenu: "prophète" },
    { fr: "[pour] seigneurs", pos: "nom", phon: "arbāban", arabic: "أَرْبَابًا", position: 9, word_key: "rbb", is_particle: false, sense_retenu: "seigneur" },
    { fr: "vous ordonnerait-il", pos: "verbe", phon: "ʾayamurukum", arabic: "أَيَأْمُرُكُم", position: 10, word_key: "amr", is_particle: false, sense_retenu: "ordonner" },
    { fr: "par la couverture", pos: "nom", phon: "bi-l-kufri", arabic: "بِٱلْكُفْرِ", position: 11, word_key: "kfr", is_particle: false, sense_retenu: "couvrir" },
    { fr: "après", pos: null, phon: "baʿda", arabic: "بَعْدَ", position: 12, word_key: "baed", is_particle: false, sense_retenu: "après" },
    { fr: "que", pos: null, phon: "ʾidh", arabic: "إِذْ", position: 13, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "vous", pos: null, phon: "ʾantum", arabic: "أَنتُم", position: 14, word_key: null, is_particle: true, sense_retenu: null },
    { fr: "êtes de ceux qui se remettent", pos: "nom", phon: "muslimūna", arabic: "مُّسْلِمُونَ", position: 15, word_key: "slm", is_particle: false, sense_retenu: "se remettre" }
  ];

  // ===== 4. Translation arab + Hamidullah =====
  const translation_arab = "et qu'il ne vous ordonne pas que vous adoptiez les anges et les prophètes pour seigneurs ; vous ordonnerait-il la couverture [de la vérité] après que vous êtes de ceux qui se remettent ?";

  const full_translation = "Et IL ne va pas vous recommander de prendre pour seigneurs anges et prophètes. Vous recommanderait-il la mécréance alors que vous êtes musulmans?";

  // ===== 5. translation_explanation : §DEMARCHE§ + §JUSTIFICATION§ + §CRITIQUE§ =====
  const translation_explanation = `§DEMARCHE§

**amr (yaʾmurakum / ʾayamurukum)** : verbe employé deux fois dans le verset (positions 3 et 10), forme I de la racine ʾ-m-r, qui signifie ordonner/commander. La première occurrence est au subjonctif (yaʾmura, terminaison -a) car régie par la négation wa-lā qui prolonge la structure mā kāna an du verset précédent — « il n'a pas été [pour un humain]... et qu'il ne vous ordonne pas ». La seconde est au mode indicatif après la particule interrogative ʾa- — question rhétorique sur l'absurdité d'un tel commandement. Nous retenons « ordonner » pour le sens central de commandement autoritaire qui sort de celui qui ordonne et impose un acte à autrui. Le concept Commandement/Autorité de la racine couvre cet acte de prescription verbale.

**akhz (tattakhidhū)** : verbe à la Forme VIII (ittakhadha) qui transforme le sens premier de prendre/saisir en se prendre pour soi, adopter, prendre quelqu'un comme. La construction grammaticale du verset est révélatrice : tattakhidhū al-malāʾikata wa-l-nabiyyīna arbāban — deux objets en accusatif liés par la structure double accusative typique de la Forme VIII (X comme Y). Le sens « adopter » capture précisément ce mouvement d'appropriation qui transforme un être en figure d'autorité personnelle. Le concept Prise/Saisie de la racine couvre cette extension au sens d'adoption.

**mlk (al-malāʾikata)** : nom collectif pluriel défini accusatif de malak (ange), appartient à un sens spécialisé de la racine m-l-k distincte du sens dominant possession/royauté. La forme malak (sans -i- intercalaire comme malik=roi) est lexicalisée dans la catégorie des êtres angéliques comme messagers entre mondes. Le sens premier malak/ange est sans rapport étymologique direct avec malik/roi malgré la même racine — convergence lexicale historique. Nous retenons « ange » pour ce sens spécialisé. Le concept Ange/Messager isole cette branche sémantique de la racine.

**nba (an-nabiyyīna)** : pluriel masculin défini accusatif de nabī (prophète), dérivé de la racine n-b-ʾ qui signifie apporter une nouvelle. Le prophète est étymologiquement le porteur d'annonce — celui par qui une information transcendante est transmise depuis une source divine vers une communauté humaine. Le concept Prophétie isole cette spécialisation de la racine au statut de transmetteur officiel. Sens identique à V79.

**rbb (arbāban)** : pluriel indéfini accusatif de rabb (seigneur, maître). L'usage pluriel est inhabituel dans le Coran — généralement rabb singulier rapporté à Dieu. Ici le pluriel signale précisément la pluralité des seigneurs adoptés en violation de l'unicité divine — la grammaire elle-même exprime la déviation théologique critiquée par le verset. Nous retenons « seigneur » pour le sens central d'autorité possédante/protectrice. Le concept Seigneurie/Autorité bienveillante couvre cette acception. Distinct de V79 qui employait rabbāniyyīn (adjectif relationnel construit sur rabb avec suffixe -ānī, concept Éducation/Accompagnement).

**kfr (al-kufri)** : nom verbal de la racine k-f-r au sens étymologique premier de couvrir/cacher. Lane's atteste : « He covered, concealed, hid, or veiled, a thing ». Le cultivateur (kāfir au sens originel) couvre la graine de terre, la nuit (kāfira) couvre par son obscurité. L'extension théologique désigne celui qui recouvre la vérité reçue. Nous retenons le sens premier « couvrir/dissimulation » pour préserver l'étymologie de la racine, plutôt que la spécialisation post-coranique en label théologique. Le concept Couverture/Dissimulation isole le sens primitif de la racine.

**baed (baʿda)** : préposition d'ordre temporel marquant la postériorité (« après »). La racine b-ʿ-d couvre à la fois l'éloignement spatial et la postériorité temporelle — l'« après » est ce qui est temporellement éloigné en aval. Ici le contexte est purement temporel (après un état antérieur). Le concept Postériorité isole cette branche temporelle de la racine.

**slm (muslimūna)** : pluriel masculin du participe actif muslim, dérivé de la Forme IV (ʾaslama) de la racine s-l-m. La Forme IV signifie remettre quelque chose à quelqu'un, se rendre, s'en remettre intégralement à — l'acte de transmettre sa volonté propre à une autorité. Le sens étymologique premier (remise/reddition) est conservé pour préserver la racine, plutôt que la spécialisation post-coranique en label confessionnel « musulman ». Le concept Remise/Reddition couvre cet acte de transmission active.

§JUSTIFICATION§

La structure du verset prolonge directement V79 : la phrase mā kāna li-bashar an yu'tī-hu allāhu... thumma yaqūla... s'étend par wa-lā yaʾmurakum — « il n'a pas été pour un humain qu'il dise... et qu'il vous ordonne... ». La traduction maintient le subjonctif de continuation par « et qu'il ne vous ordonne pas que vous adoptiez ». L'introduction de la double accusative arabe (les anges et les prophètes [comme] seigneurs) est rendue par « adoptiez ... pour seigneurs » qui préserve la structure double objet. Le crochet « [pour] » avant « seigneurs » est ajouté pour signaler en français le second accusatif arabe (adoption-comme), procédé déjà employé dans la pipeline pour préserver la grammaire d'origine.

La seconde proposition introduit une question rhétorique par ʾa- particule interrogative — rendue par l'inversion sujet-verbe française « vous ordonnerait-il ». Le passage du subjonctif à l'indicatif après l'interrogation marque le changement de niveau syntaxique : on quitte la subordination hypothétique pour interpeller directement. Le verbe yaʾmuru bi- (« ordonner par ») introduit son objet par la préposition bi- — rendue par « par la couverture », ce qui maintient la marque instrumentale arabe.

Le choix « couverture [de la vérité] » pour al-kufr préserve le sens étymologique premier de la racine — couvrir/cacher — plutôt que la spécialisation théologique post-coranique « mécréance » qui anachronise le sens. Le crochet « [de la vérité] » signale l'objet implicite du verbe (ce qui est couvert), procédé déjà employé pour les nominalisations arabes qui sous-entendent leur complément.

Pour muslimūn, le choix « de ceux qui se remettent » préserve la valeur active du participe de Forme IV (ʾaslama = se remettre) plutôt que de geler le mot en label confessionnel « musulman ». Cette traduction explicite le mouvement étymologique de remise/reddition active à Dieu, qui est l'acte décrit par la racine, et reste fidèle à l'usage descriptif (et non identitaire) du terme dans le contexte du verset 80.

L'expression baʿda idh antum muslimūna est rendue par « après que vous êtes de ceux qui se remettent » — la structure baʿda idh + proposition nominale en arabe désigne une postériorité par rapport à un état présent ou récemment établi (« après le moment où »). Le présent français « êtes » préserve la valeur d'état actuel de la phrase nominale arabe.

§CRITIQUE§

**qu'il ne vous ordonne pas vs « il ne va pas vous recommander »** : Hamidullah rend wa-lā yaʾmurakum par « il ne va pas vous recommander ». Deux glissements : (1) la racine ʾ-m-r désigne l'acte d'ordonner/commander qui impose une obligation, alors que « recommander » désigne un conseil sans contrainte — registre déontique (commandement) vs. registre conseiller (suggestion). Le texte arabe nie la possibilité d'un commandement autoritaire, Hamidullah affaiblit en niant une simple recommandation. (2) Le subjonctif yaʾmura régi par la structure mā kāna an de V79 (et qu'il ne vous ordonne pas) est rendu par un futur « il ne va pas » qui détache la proposition de la subordination hypothétique de V79 — perte de la continuité syntaxique entre les deux versets, alors que le texte arabe les relie par une seule structure modale.

**que vous adoptiez vs « de prendre »** : Hamidullah rend ʾan tattakhidhū par « de prendre ». Deux glissements : (1) la Forme VIII ittakhadha porte un sens spécifique d'adoption/appropriation (se prendre pour soi, prendre comme), distinct du verbe simple akhadha (Forme I = prendre) — Hamidullah neutralise cette nuance en rendant la Forme VIII par le verbe générique « prendre » comme s'il s'agissait de la Forme I. Le sens « adopter » capture la dimension d'appropriation autoritaire absente de la traduction simple. (2) L'infinitif « de prendre » détache l'acte du sujet « vous », alors que la subordonnée arabe ʾan tattakhidhū conserve explicitement le pronom (« que vous adoptiez ») qui marque la responsabilité directe des destinataires.

**vous ordonnerait-il par la couverture vs « Vous recommanderait-il la mécréance »** : Hamidullah rend ʾayamurukum bi-l-kufr par « Vous recommanderait-il la mécréance ». Deux transformations : (1) « ordonner » → « recommander » comme dans la première occurrence, même affaiblissement déontique. (2) al-kufr (nominal de la racine k-f-r = couvrir/cacher au sens premier) est rendu par « la mécréance », terme théologique spécialisé qui présuppose la cristallisation post-coranique du sens en catégorie identitaire opposée à « musulman ». Le texte arabe utilise un nom dérivé d'une racine concrète (couvrir) qui décrit un acte (recouvrir la vérité reçue), pas une étiquette d'appartenance. La traduction « par la couverture [de la vérité] » préserve la dynamique active de la racine. La perte de la préposition bi- (« par ») est également notable — Hamidullah construit « recommander la mécréance » comme un complément d'objet direct, alors que l'arabe utilise yaʾmuru bi- (ordonner par/avec) qui marque l'instrument ou le moyen du commandement.

**après que vous êtes vs « alors que vous êtes »** : Hamidullah rend baʿda idh antum par « alors que vous êtes ». Deux glissements : (1) baʿda est une préposition de postériorité temporelle (« après »), alors que « alors que » introduit une subordonnée concessive ou simultanée — registre temporel (succession) vs. registre logique (concession). (2) Le texte arabe pose un avant et un après — vous étiez dans un état (remise) avant qu'on vous propose un autre état (couverture) ; Hamidullah aplatit cette chronologie en simultanéité, perdant la rhétorique d'inversion temporelle qui souligne l'absurdité du commandement (on ne revient pas à un état antérieur après l'avoir dépassé). La nuance change la force argumentative du verset.

**de ceux qui se remettent vs « musulmans »** : Hamidullah rend muslimūna par « musulmans ». Deux transformations : (1) muslim est étymologiquement le participe actif de la Forme IV ʾaslama (se remettre, s'en remettre, se rendre) — Hamidullah gèle ce mot vivant en label confessionnel identitaire « musulman », anachronique pour un texte qui décrit des actes (remise active à Dieu) et non des appartenances religieuses cristallisées. (2) La forme muslimūna en arabe est un participe actif qui désigne l'agent en train d'accomplir l'acte de remise — la traduction « de ceux qui se remettent » préserve cette dynamique active, alors que « musulmans » fige en catégorie statique. Le sens global change : le texte arabe interroge la cohérence d'un acte (recouvrir) après un autre acte (se remettre), Hamidullah interroge la cohérence d'un acte avec une identité.`;

  // ===== 6. Update verse_analyses =====
  await db.from('verse_analyses').update({
    translation_arab,
    full_translation,
    segments,
    translation_explanation
  }).eq('verse_id', vid);

  console.log('✅ verse_analyses V80 mis à jour (translation_arab + full_translation + segments + translation_explanation)');
  console.log('\n=== V80 PIPELINE TERMINÉ ===');
  console.log('VWA insérées : ' + vwa.length);
  console.log('Segments : ' + segments.length);
  console.log('translation_explanation : ' + translation_explanation.length + ' caractères');
}

run().catch(console.error);
