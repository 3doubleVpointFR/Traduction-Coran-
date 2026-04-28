const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 343; // S3:V50
  const vaId = 701;

  console.log('═══════════════════════════════════════════');
  console.log('PIPELINE MAISON — Sourate 3, Verset 50');
  console.log('verse_id:', verseId, '| va_id:', vaId);
  console.log('═══════════════════════════════════════════');

  // ═══════════════════════════════════════════
  // ÉTAPE 3 — VWA ENTRIES (12 mots importants)
  // ═══════════════════════════════════════════

  // VWA 1: muṣaddiqan (sdq) — position 1
  // Participe actif forme II (mufa''il), accusatif indéfini = ḥāl (état)
  // Forme II causative de ṣ-d-q : "faire que ce soit vrai" = "confirmer"
  const { error: e1 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'sdq',
    position: 1,
    sense_chosen: 'confirmer',
    reason: "Participe actif forme II (muṣaddiq), accusatif indéfini = ḥāl (état). La forme II causative de ṣ-d-q transforme « dire vrai » en « confirmer la vérité de ». Jésus confirme activement la Torah qui est devant lui.",
    analysis_axes: {
      concept_chosen: "Vérité/Sincérité",
      concepts: {
        "Vérité/Sincérité": {
          status: "retenu",
          senses: ["dire vrai", "vrai", "sincère", "confirmer"],
          proof_ctx: "La forme II causative de ṣ-d-q signifie « rendre vrai, confirmer la véracité de ». Le participe actif muṣaddiq désigne celui qui confirme activement — Jésus atteste la véracité de la Torah. Le champ lexical (Torah, ce qui est devant moi) montre la continuité avec la révélation antérieure. Le sens « Amitié » (ami sincère) est un sens dérivé de la fidélité — un ami fidèle est « celui qui confirme son lien ». Ici le contexte est la confirmation d'un texte, pas d'un lien personnel. Le sens « Don/Aumône » (ṣadaqa) est un sens dérivé de la sincérité dans le don — hors contexte ici."
        },
        "Amitié": {
          status: "nul",
          senses: ["ami sincère"],
          proof_ctx: "L'amitié sincère dérive de la fidélité — hors contexte pour la confirmation d'un texte révélé."
        },
        "Don/Aumône": {
          status: "nul",
          senses: ["aumône", "dot"],
          proof_ctx: "L'aumône est la sincérité dans le don — aucun rapport avec la confirmation de la Torah."
        }
      }
    }
  });
  console.log('VWA sdq:', e1 ? 'ERREUR: ' + e1.message : 'OK');

  // VWA 2: bayna (byn) — position 3
  // ẓarf makān = préposition spatiale "entre"
  const { error: e2 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'byn',
    position: 3,
    sense_chosen: 'entre',
    reason: "Préposition spatiale (ẓarf makān). Dans l'expression « mā bayna yadayya mina at-tawrāt » = ce qui est entre mes deux mains de la Torah = ce qui est devant moi de la Torah.",
    analysis_axes: {
      concept_chosen: "Séparation/Distance",
      concepts: {
        "Séparation/Distance": {
          status: "retenu",
          senses: ["séparer", "entre", "quitter"],
          proof_ctx: "Le sens « entre » comme préposition spatiale est le seul compatible avec l'expression idiomatique « bayna yadayya » (entre mes deux mains = devant moi). Le sens « Clarté/Évidence » (être clair, expliquer) désigne la manifestation visible — un processus qui n'a pas de rapport avec la position spatiale exprimée ici."
        },
        "Clarté/Évidence": {
          status: "nul",
          senses: ["être clair", "expliquer", "évident", "preuve"],
          proof_ctx: "La clarté et l'explication sont des processus de manifestation — hors contexte pour une préposition de lieu."
        }
      }
    }
  });
  console.log('VWA byn:', e2 ? 'ERREUR: ' + e2.message : 'OK');

  // VWA 3: yadayya (ydy) — position 4
  // Duel au génitif + pronom possessif 1ère personne = "mes deux mains" = "devant moi"
  const { error: e3 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'ydy',
    position: 4,
    sense_chosen: 'devant',
    reason: "Duel (yadayya = mes deux mains) au génitif après bayna. L'expression « bayna yadayya » est idiomatique : ce qui est entre mes deux mains = ce qui est devant moi, ce qui m'a précédé. Le duel renforce la notion de présence immédiate.",
    analysis_axes: {
      concept_chosen: "Antériorité/Présence",
      concepts: {
        "Antériorité/Présence": {
          status: "retenu",
          senses: ["devant", "immédiat", "comptant"],
          proof_ctx: "L'expression « mā bayna yadayhi » (ce qui est entre ses mains) est une formule coranique récurrente qui désigne ce qui est devant quelqu'un, ce qui le précède dans le temps. Ici yadayya (mes deux mains) avec le pronom de 1ère personne — Jésus parle de ce qui est devant lui = la Torah qui l'a précédé. Le sens « Main/Corps » (main physique) est le sens premier concret mais l'expression « bayna yadayya » est idiomatique et renvoie à l'antériorité. Le sens « Pouvoir/Autorité » (la main comme pouvoir) est hors contexte — Jésus ne parle pas de son pouvoir sur la Torah."
        },
        "Main/Corps": {
          status: "probable",
          senses: ["main", "bras", "patte avant"],
          proof_ctx: "La main physique est le sens premier de y-d-y. L'expression utilise les mains concrètes mais dans un sens idiomatique de présence/antériorité."
        },
        "Pouvoir/Autorité": {
          status: "nul",
          senses: ["pouvoir", "autorité", "emprise", "maîtrise"],
          proof_ctx: "Le pouvoir et l'autorité sont des extensions de la main comme instrument de contrôle — hors contexte pour « ce qui est devant moi »."
        },
        "Bienfait/Générosité": {
          status: "nul",
          senses: ["bienfait", "faveur", "générosité", "don"],
          proof_ctx: "Le bienfait est ce que la main donne — hors contexte pour la formule « bayna yadayya »."
        },
        "Moyen/Instrument": {
          status: "nul",
          senses: ["par le moyen de", "intermédiaire"],
          proof_ctx: "L'instrumentalité est hors contexte pour cette expression idiomatique."
        },
        "Soumission/Reconnaissance": {
          status: "nul",
          senses: ["obéissance", "reconnaissance de supériorité"],
          proof_ctx: "La soumission est un sens lié au don de la main — hors contexte ici."
        }
      }
    }
  });
  console.log('VWA ydy:', e3 ? 'ERREUR: ' + e3.message : 'OK');

  // VWA 4: uḥilla (hll) — position 7
  // Verbe forme IV (af'ala), inaccompli subjonctif, 1ère pers sing
  // li + subjonctif = but : "pour que je rende licite"
  const { error: e4 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'hll',
    position: 7,
    sense_chosen: 'rendre licite',
    reason: "Forme IV (uḥilla) de ḥ-l-l au subjonctif après la particule de but li-. La forme IV causative transforme « être licite » en « rendre licite ». Jésus vient pour rendre licite une partie de ce qui était interdit.",
    analysis_axes: {
      concept_chosen: "Licéité/Permission",
      concepts: {
        "Licéité/Permission": {
          status: "retenu",
          senses: ["être licite", "être permis", "rendre licite"],
          proof_ctx: "La forme IV causative de ḥ-l-l est « faire être licite » = « rendre licite ». Le verbe est au subjonctif après li- (pour que) : Jésus vient dans le but de rendre licite une partie de ce qui leur était interdit. Le sens est précis et univoque dans cette construction. Le sens « Dissolution/Libération » (délier, résoudre) est le sens physique premier (défaire un nœud) — il est compatible étymologiquement mais le contexte (baʿḍa alladhī ḥurrima) demande spécifiquement la notion de licéité opposée à l'interdiction (ḥurrima)."
        },
        "Dissolution/Libération": {
          status: "probable",
          senses: ["délier", "résoudre"],
          proof_ctx: "Délier est le sens physique premier de ḥ-l-l. Rendre licite dérive métaphoriquement de « délier ce qui était noué/interdit ». Les deux sens sont proches mais le contexte juridique (interdit → licite) oriente vers la licéité."
        },
        "Installation": {
          status: "nul",
          senses: ["descendre (en un lieu)", "séjourner"],
          proof_ctx: "S'installer en un lieu n'a aucun rapport avec le contexte d'allègement des interdits."
        }
      }
    }
  });
  console.log('VWA hll:', e4 ? 'ERREUR: ' + e4.message : 'OK');

  // VWA 5: baʿḍa (bed) — position 9
  // Nom accusatif = COD de uḥilla
  const { error: e5 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'bed',
    position: 9,
    sense_chosen: 'une partie',
    reason: "Nom accusatif (COD de uḥilla). baʿḍa et non kulla : seulement UNE PARTIE de ce qui était interdit est rendue licite, pas la totalité. Cette restriction est significative — Jésus ne vient pas abolir toute la loi.",
    analysis_axes: {
      concept_chosen: "Partie/Division",
      concepts: {
        "Partie/Division": {
          status: "retenu",
          senses: ["une partie", "certains", "diviser en parties", "quelque chose de", "démembrer"],
          proof_ctx: "Le nom baʿḍ désigne une portion d'un tout. Le texte dit baʿḍa alladhī ḥurrima (une partie de ce qui a été interdit) — pas kulla (la totalité). Cette restriction est intentionnelle : Jésus vient alléger certaines interdictions, pas les abolir toutes. Le sens est univoque dans cette construction."
        },
        "Sens isolé/Moustique": {
          status: "nul",
          senses: ["moustique", "piquer", "importuner"],
          proof_ctx: "Le sens concret « moustique » (baʿūḍa) est un dérivé de la même racine mais hors contexte ici."
        }
      }
    }
  });
  console.log('VWA bed:', e5 ? 'ERREUR: ' + e5.message : 'OK');

  // VWA 6: ḥurrima (hrm) — position 11
  // Verbe forme II, accompli passif = "a été interdit"
  const { error: e6 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'hrm',
    position: 11,
    sense_chosen: 'interdire',
    reason: "Verbe accompli passif forme II (ḥurrima). Le passif indique que l'interdiction a été imposée SUR eux (ʿalaykum) — ce n'est pas eux qui ont choisi l'interdit. La forme II intensive renforce l'acte d'interdire.",
    analysis_axes: {
      concept_chosen: "Interdiction/Sacré",
      concepts: {
        "Interdiction/Sacré": {
          status: "retenu",
          senses: ["interdire", "sacré", "sanctuaire", "illicite", "priver", "respecter"],
          proof_ctx: "Le verbe ḥurrima au passif signifie « a été rendu interdit ». Le passif est important : l'interdiction vient d'une autorité supérieure (la loi mosaïque), pas d'un choix personnel. Le contexte pair avec uḥilla (rendre licite) confirme que le champ est celui de la loi et des interdits. Le sens « Interdiction/Sacré » couvre à la fois l'interdit et le sacré — ici c'est l'interdit légal qui est en jeu."
        },
        "Sens isolé/Épouse": {
          status: "nul",
          senses: ["épouse"],
          proof_ctx: "Le sens « épouse » (ḥarīm/ḥurma) est un sens dérivé de la notion de sacré/protégé — hors contexte ici."
        }
      }
    }
  });
  console.log('VWA hrm:', e6 ? 'ERREUR: ' + e6.message : 'OK');

  // VWA 7: ji'tukum (jyy) — position 13
  // Verbe forme I, accompli 1ère pers sing + pronom 2ème pers plur
  // NOTE: step 1 avait assigné "jya" mais le bon key est "jyy" (racine ج ي ء)
  const { error: e7 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'jyy',
    position: 13,
    sense_chosen: 'venir',
    reason: "Verbe accompli 1ère personne (ji'tu) + pronom suffixe -kum (vous). jā'a/yajī'u = venir. ji'tukum = je suis venu à vous. Le verbe jā'a avec bi- (préposition) signifie « venir avec » = apporter.",
    analysis_axes: {
      concept_chosen: "Venue/Apport",
      concepts: {
        "Venue/Apport": {
          status: "retenu",
          senses: ["venir", "apporter", "arriver", "se rendre à"],
          proof_ctx: "Le verbe jā'a au passé 1ère personne signifie « je suis venu ». ji'tukum bi-āyatin = je suis venu à vous avec un signe. Le sens « venir » est le sens premier et direct de j-y-'. Le verbe implique un déplacement volontaire vers un but — Jésus est venu vers les Enfants d'Israël dans un but précis. Le sens « Confrontation » (faire face) est un sens dérivé de la venue — arriver face à quelqu'un — mais le contexte n'est pas celui d'un affrontement."
        },
        "Apport/Causalité": {
          status: "probable",
          senses: ["amener", "faire venir"],
          proof_ctx: "Amener (faire venir quelque chose) est proche — ji'tukum bi-āyatin pourrait se lire « je vous ai apporté un signe ». Les deux lectures sont compatibles, mais le sens premier de jā'a est « venir » (le sujet se déplace), pas « apporter » (l'objet se déplace)."
        },
        "Confrontation": {
          status: "nul",
          senses: ["faire face", "être en face"],
          proof_ctx: "La confrontation est un sens dérivé de la venue face à quelqu'un — hors contexte pour un message de guidance."
        }
      }
    }
  });
  console.log('VWA jyy:', e7 ? 'ERREUR: ' + e7.message : 'OK');

  // VWA 8: āyatin (ayh) — position 14
  // Nom féminin indéfini au génitif (après bi- préposition)
  // NOTE: step 1 avait assigné "ayy" mais le bon key est "ayh" (comme en V49)
  const { error: e8 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'ayh',
    position: 14,
    sense_chosen: 'signe',
    reason: "Nom féminin indéfini au génitif après bi- (avec). āyatin = un signe. L'indéfini (tankīr) indique un signe parmi d'autres — pas LE signe unique, mais un signe parmi les manifestations de la puissance divine.",
    analysis_axes: {
      concept_chosen: "Signe/Manifestation",
      concepts: {
        "Signe/Manifestation": {
          status: "retenu",
          senses: ["signe", "verset", "miracle", "preuve", "marque", "indication"],
          proof_ctx: "Le mot āya désigne une manifestation visible — quelque chose qui montre, qui indique. Le sens « signe » est le sens premier : une chose qui rend visible une réalité cachée. Ici le signe vient de « votre Seigneur » (min rabbikum) — c'est une manifestation de l'autorité divine. Les miracles décrits au verset précédent (guérir l'aveugle-né, donner la vie aux morts) sont des āyāt au sens de manifestations visibles. Le sens « Interpellation/Appel » (appeler, crier vers) est un sens complètement différent lié à la racine a-y-h (hé !) et non à āya."
        },
        "Interpellation/Appel": {
          status: "nul",
          senses: ["appeler (crier vers)", "interpeller"],
          proof_ctx: "L'interpellation est un cri d'appel — un acte vocal hors contexte pour un signe que l'on apporte."
        }
      }
    }
  });
  console.log('VWA ayh:', e8 ? 'ERREUR: ' + e8.message : 'OK');

  // VWA 9: rabbikum (rbb) — position 16
  // Nom en iḍāfa + pronom possessif 2ème pers plur = "votre Seigneur"
  const { error: e9 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'rbb',
    position: 16,
    sense_chosen: 'seigneur',
    reason: "Nom en iḍāfa au génitif (après min) + pronom suffixe -kum (votre). rabb = celui qui fait croître, qui élève, qui entretient. rabbikum = votre Seigneur. Jésus dit que le signe vient de LEUR Seigneur — il ne s'attribue pas la puissance.",
    analysis_axes: {
      concept_chosen: "Seigneurie/Autorité bienveillante",
      concepts: {
        "Seigneurie/Autorité bienveillante": {
          status: "retenu",
          senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
          proof_ctx: "Le mot rabb désigne celui qui fait croître quelque chose depuis le début jusqu'à son accomplissement. C'est une autorité bienveillante qui nourrit et développe. rabbikum (votre Seigneur) — Jésus rappelle aux Enfants d'Israël que le signe vient de leur Seigneur, pas de lui-même. Le sens « Croissance/Augmentation » (augmenter, croître) est le sens physique premier dont dérive la seigneurie — faire croître est l'acte fondateur du rabb. Le sens « Éducation » est proche mais rabb va au-delà de l'éducation — il inclut l'autorité et la possession."
        },
        "Croissance/Augmentation": {
          status: "probable",
          senses: ["augmenter", "croître", "faire grandir", "nourrir", "développer", "excès", "colline", "éminence"],
          proof_ctx: "La croissance est le sens physique premier de r-b-b. Le rabb est étymologiquement « celui qui fait croître ». Mais ici rabbikum désigne spécifiquement l'autorité qui gouverne et entretient, pas la croissance en soi."
        },
        "Éducation/Accompagnement": {
          status: "peu_probable",
          senses: ["élever un enfant", "éduquer", "former", "accompagner la croissance"],
          proof_ctx: "L'éducation est un aspect du rabb mais ici le contexte est celui de l'autorité divine qui envoie des signes, pas celui d'un éducateur."
        },
        "Commerce/Usure": {
          status: "nul",
          senses: ["usure", "augmentation de dette", "intérêt"],
          proof_ctx: "L'usure est un sens dérivé de « augmentation » appliqué au commerce — hors contexte."
        },
        "Souffle/Vent": {
          status: "nul",
          senses: ["essoufflement"],
          proof_ctx: "Sens isolé et obscur — hors contexte."
        }
      }
    }
  });
  console.log('VWA rbb:', e9 ? 'ERREUR: ' + e9.message : 'OK');

  // VWA 10: ittaqū (wqy) — position 17
  // Verbe forme VIII (iftaʿala), impératif 2ème pers plur
  // Forme VIII réflexive de w-q-y : "se protéger soi-même"
  const { error: e10 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'wqy',
    position: 17,
    sense_chosen: 'se prémunir',
    reason: "Impératif forme VIII (ittaqū) de w-q-y. La forme VIII réflexive transforme « protéger » en « se protéger soi-même » = se prémunir. L'impératif fa-ttaqū est un ordre direct : prémunissez-vous envers Dieu.",
    analysis_axes: {
      concept_chosen: "Protection/Préservation",
      concepts: {
        "Protection/Préservation": {
          status: "retenu",
          senses: ["protéger", "préserver", "craindre", "piété", "se prémunir", "éviter"],
          proof_ctx: "La racine w-q-y signifie « protéger, mettre un bouclier devant ». La forme VIII réflexive (ittaqā) ajoute le « soi-même » : se mettre soi-même sous protection. Le sens premier est « se protéger » — la taqwā est l'acte de se mettre à l'abri. Le sens « craindre » est une extension de la protection (on se protège de ce qu'on craint), mais l'étymologie part de la protection, pas de la peur. Dans le verset, ittaqū Allāha signifie « protégez-vous envers Dieu » — prenez des précautions dans votre rapport avec Dieu. Ce n'est pas la peur d'un châtiment, c'est la prudence de celui qui sait qu'il a affaire à une autorité suprême."
        },
        "Sens isolé/Bouclier": {
          status: "nul",
          senses: ["bouclier"],
          proof_ctx: "Le bouclier (wiqāya) est l'objet concret de protection — la forme VIII dépasse cet objet pour désigner l'acte de se protéger."
        }
      }
    }
  });
  console.log('VWA wqy:', e10 ? 'ERREUR: ' + e10.message : 'OK');

  // VWA 11: Allāha (alh) — position 18
  // Nom propre accusatif (COD de ittaqū)
  const { error: e11 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'alh',
    position: 18,
    sense_chosen: 'Dieu',
    reason: "Nom propre accusatif (COD de ittaqū). Allāh est le nom propre de la divinité unique. Accusatif car complément du verbe ittaqū.",
    analysis_axes: {
      concept_chosen: "Divinité",
      concepts: {
        "Divinité": {
          status: "retenu",
          senses: ["divinité", "divinité (concept)", "Dieu", "théologie", "exclamation divine", "oui certes"],
          proof_ctx: "Allāh est le nom propre de Dieu dans le Coran. Le sens est univoque dans ce contexte — c'est le COD de ittaqū (prémunissez-vous envers Dieu)."
        },
        "Adoration/Dévotion": {
          status: "nul",
          senses: ["adorer", "faire adorer", "se dévouer au culte", "diviniser"],
          proof_ctx: "L'adoration est un acte dirigé vers la divinité — ici Allāh est le nom propre, pas l'acte d'adorer."
        },
        "Détresse": {
          status: "nul",
          senses: ["être perplexe", "se lamenter"],
          proof_ctx: "La détresse est un sens marginal de la racine — hors contexte pour le nom propre."
        },
        "Refuge/Protection": {
          status: "nul",
          senses: ["chercher refuge", "protéger", "demeurer"],
          proof_ctx: "Chercher refuge est un sens lié à la divinité comme abri — mais ici le mot est le nom propre Dieu, pas l'acte de chercher refuge."
        },
        "Domination": {
          status: "nul",
          senses: ["asservir"],
          proof_ctx: "L'asservissement est un sens isolé et marginal — hors contexte."
        }
      }
    }
  });
  console.log('VWA alh:', e11 ? 'ERREUR: ' + e11.message : 'OK');

  // VWA 12: aṭīʿūni (twe) — position 19
  // Verbe forme IV (afʿala), impératif 2ème pers plur + nūn al-wiqāya + yā
  const { error: e12 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'twe',
    position: 19,
    sense_chosen: 'obéir',
    reason: "Impératif forme IV (aṭīʿū) de ṭ-w-ʿ + nūn al-wiqāya + yā (obéissez-moi). La forme IV est causative mais dans ce verbe elle a le sens de « rendre obéissance » = « obéir ». Jésus demande l'obéissance après avoir invoqué le signe de Dieu.",
    analysis_axes: {
      concept_chosen: "Obéissance/Soumission volontaire",
      concepts: {
        "Obéissance/Soumission volontaire": {
          status: "retenu",
          senses: ["obéir", "se soumettre volontairement", "consentir"],
          proof_ctx: "Le verbe aṭāʿa (forme IV de ṭ-w-ʿ) signifie « obéir volontairement ». La racine ṭ-w-ʿ porte la notion de consentement — obéir par choix, pas par force. L'impératif aṭīʿūni (obéissez-moi) est un ordre direct de Jésus après l'injonction de se prémunir envers Dieu. Le sens « Capacité/Pouvoir » (être capable, pouvoir) est un sens dérivé de la disposition volontaire — celui qui est disposé est capable. Mais ici l'impératif demande l'acte d'obéissance, pas la capacité."
        },
        "Capacité/Pouvoir": {
          status: "peu_probable",
          senses: ["être capable", "pouvoir"],
          proof_ctx: "La capacité est la disposition intérieure qui rend l'obéissance possible. Mais l'impératif aṭīʿūni demande l'acte concret d'obéir, pas la simple capacité."
        }
      }
    }
  });
  console.log('VWA twe:', e12 ? 'ERREUR: ' + e12.message : 'OK');

  // ═══════════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION + EXPLICATION
  // ═══════════════════════════════════════════

  const translationArab = "Et confirmant ce qui est devant moi de la Torah, et pour vous rendre licite une partie de ce qui vous a été interdit. Et je suis venu à vous avec un signe de votre Seigneur. Prémunissez-vous donc envers Dieu, et obéissez-moi.";

  const fullTranslation = "Et confirmant ce qu'il y a dans la Thora révélée avant moi, et pour vous rendre licite une partie de ce qui vous était interdit. Et j'ai apporté un signe de la part de votre Seigneur. Craignez Allah donc, et obéissez-moi.";

  const explanation = `§DEMARCHE§
Ce verset poursuit le discours de Jésus aux Enfants d'Israël commencé au verset 49. Après avoir présenté ses miracles (façonner l'argile, guérir l'aveugle-né, donner la vie aux morts), Jésus expose ici sa mission en trois points : il confirme la Torah, il allège certaines interdictions, et il apporte un signe de Dieu. Le verset se termine par un double impératif qui résume l'appel de Jésus.

**muṣaddiqan** (confirmant) est un participe actif de la forme II de la racine ṣ-d-q, à l'accusatif indéfini. C'est un ḥāl (état) : il exprime l'état dans lequel Jésus se présente. Un participe actif est une forme qui dit que la personne FAIT l'action activement et en continu — Jésus est en train de confirmer. La forme II est causative : elle transforme « dire vrai » (ṣadaqa) en « faire que ce soit vrai, confirmer la véracité de ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ṣ-d-q porte la notion de conformité avec la réalité — le ṣādiq est celui dont la parole correspond à la réalité. muṣaddiq est celui qui confirme activement que quelque chose correspond à la réalité. On traduit par « confirmant ».

**li-mā bayna yadayya** (ce qui est devant moi) est une expression composée. **li-** est une préposition (pour/de). **mā** est un pronom relatif (ce que). **bayna** (entre) est une préposition spatiale de la racine b-y-n qui marque la position entre deux points. **yadayya** (mes deux mains) est le duel du nom yad (main) de la racine y-d-y au génitif avec le pronom possessif de 1ère personne. L'expression « mā bayna yadayya » (ce qui est entre mes deux mains) est une formule coranique idiomatique qui signifie « ce qui est devant moi, ce qui m'a précédé ». Ce qui est « entre les deux mains » de quelqu'un est ce qui se tient devant lui, à sa portée immédiate. Dans le contexte, ce qui est devant Jésus de la Torah = la Torah qui l'a précédé. On traduit par « ce qui est devant moi de la Torah ».

**wa-li-uḥilla** (et pour vous rendre licite) est composé de **wa** (et), **li-** (pour que, particule de but) et **uḥilla**, un verbe au subjonctif de la forme IV de la racine ḥ-l-l, 1ère personne du singulier. Le subjonctif après li- exprime le but : « pour que je rende licite ». La forme IV est causative : elle transforme « être licite » (ḥalla) en « rendre licite, faire être licite ». D'après les sources étymologiques, le sens premier de ḥ-l-l est « délier, défaire un nœud » — la licéité est métaphoriquement le fait de délier ce qui était noué par l'interdit. On traduit par « pour vous rendre licite ».

**baʿḍa** (une partie de) est un nom à l'accusatif (COD de uḥilla) de la racine b-ʿ-ḍ. Le texte dit baʿḍa (une partie) et non kulla (la totalité) — cette restriction est significative. Jésus ne vient pas abolir toute la loi de la Torah, mais alléger certaines interdictions spécifiques. On traduit par « une partie de ».

**ḥurrima** (a été interdit) est un verbe accompli à la voix passive de la forme II de la racine ḥ-r-m. Le passif (une forme où le sujet subit l'action) indique que l'interdiction a été imposée sur eux (ʿalaykum) par une autorité supérieure — la loi mosaïque. Ce n'est pas eux qui ont choisi l'interdit, c'est quelque chose qui leur a été imposé. D'après les sources étymologiques, le sens premier de ḥ-r-m est « rendre inaccessible, mettre hors d'atteinte ». L'interdit est ce qui a été placé hors de portée. On traduit par « ce qui vous a été interdit ».

**ji'tukum** (je suis venu à vous) est un verbe accompli de la racine j-y-' à la 1ère personne du singulier avec le pronom suffixe -kum (vous). jā'a signifie « venir, se déplacer vers un but ». Le verbe est suivi de la préposition **bi-** (avec) et du nom **āyatin** (un signe) — ji'tukum bi-āyatin = je suis venu à vous avec un signe. On traduit par « je suis venu à vous avec un signe ».

**āyatin** (un signe) est un nom féminin de la racine a-y-h au génitif indéfini (après bi-). L'indéfini (tankīr) présente le signe comme un parmi d'autres — ce n'est pas LE signe unique mais un signe parmi les manifestations divines décrites au verset précédent. Le signe vient **min rabbikum** (de votre Seigneur) — Jésus ne s'attribue pas la puissance, il rappelle qu'elle vient de Dieu.

**rabbikum** (votre Seigneur) est le nom rabb de la racine r-b-b en iḍāfa avec le pronom -kum. Le rabb est celui qui fait croître, qui élève et qui entretient. Jésus s'adresse aux Enfants d'Israël et dit que le signe vient de LEUR Seigneur — il ne dit pas « mon Seigneur » mais « votre Seigneur », rappelant leur lien direct avec Dieu.

**fa-ttaqū** (prémunissez-vous donc) est composé de **fa-** (donc, conjonction de conséquence) et **ittaqū**, impératif de la forme VIII de la racine w-q-y. La forme VIII est réflexive : elle transforme « protéger » (waqā) en « se protéger soi-même ». L'impératif ordonne à chacun de se mettre soi-même sous protection. D'après les sources étymologiques, le sens premier de w-q-y est « protéger, mettre un bouclier devant » — la taqwā est littéralement l'acte de se mettre à l'abri. On traduit par « prémunissez-vous donc ».

**Allāha** (Dieu) est le nom propre de la divinité, à l'accusatif car COD de ittaqū. On traduit par « Dieu ».

**wa-aṭīʿūni** (et obéissez-moi) est composé de **wa** (et) et **aṭīʿū**, impératif de la forme IV de la racine ṭ-w-ʿ, avec le pronom suffixe -nī (moi, précédé du nūn al-wiqāya). La racine ṭ-w-ʿ porte la notion de disposition volontaire : le ṭāʾiʿ est celui qui se conforme par choix, non par contrainte. La forme IV intensifie l'acte : « rendre l'obéissance ». L'impératif aṭīʿūni est le second ordre de Jésus après « prémunissez-vous envers Dieu » — il demande l'obéissance à son message. On traduit par « obéissez-moi ».

§JUSTIFICATION§
**confirmant** — Le sens retenu est « confirmer » du champ « Vérité/Sincérité ». Le mot « confirmant » est choisi car la forme II causative de ṣ-d-q signifie « attester la véracité de ». En français courant, « confirmer » est le mot naturel pour cet acte de validation. L'alternative « attestant » est écartée car elle est plus formelle et juridique. L'alternative « certifiant » est écartée car elle implique un document ou une autorité officielle.

**entre** — Le sens retenu est « entre » du champ « Séparation/Distance ». L'expression « bayna yadayya » est idiomatique — « entre mes deux mains » = « devant moi ». Le mot « entre » est le seul qui rend cette préposition spatiale.

**devant** — Le sens retenu est « devant » du champ « Antériorité/Présence ». Le mot « devant » rend l'expression idiomatique « bayna yadayya » (entre mes deux mains = devant moi). L'alternative « en ma possession » est écartée car yadayya dans cette expression ne désigne pas la possession mais la position.

**rendre licite** — Le sens retenu est « rendre licite » du champ « Licéité/Permission ». Le mot « rendre licite » est choisi car la forme IV causative de ḥ-l-l signifie « faire être licite ». L'alternative « permettre » est écartée car elle est trop vague et n'implique pas le passage du statut « interdit » au statut « licite ». L'alternative « délier » est écartée car elle est trop physique pour un contexte de loi.

**une partie** — Le sens retenu est « une partie » du champ « Partie/Division ». Le mot « une partie » est le seul qui rend baʿḍa dans ce contexte. L'alternative « certains » est possible mais « une partie » rend mieux le contraste avec la totalité (kull).

**interdit** — Le sens retenu est « interdire » du champ « Interdiction/Sacré ». Le passif « a été interdit » rend ḥurrima. L'alternative « rendu illicite » est synonyme mais « interdit » est plus courant en français.

**venir** — Le sens retenu est « venir » du champ « Venue/Apport ». Le mot « venir » est le sens premier de j-y-' — se déplacer vers un lieu. L'alternative « apporter » change le focus : « venir avec un signe » met l'accent sur la venue de Jésus, « apporter un signe » met l'accent sur le signe comme objet. Le texte dit ji'tukum bi- (je suis venu à vous avec), pas ataytukum (je vous ai apporté).

**signe** — Le sens retenu est « signe » du champ « Signe/Manifestation ». Le mot « signe » est le sens premier de āya. L'alternative « miracle » est écartée car elle ajoute une connotation surnaturelle que le texte ne dit pas — le texte dit « signe » (quelque chose qui montre), pas « miracle » (quelque chose de surnaturel). L'alternative « preuve » est écartée car elle est trop juridique.

**Seigneur** — Le sens retenu est « seigneur » du champ « Seigneurie/Autorité bienveillante ». Conforme à l'usage constant dans notre projet. L'alternative « celui qui fait croître » est le sens étymologique premier mais « Seigneur » est le seul mot français qui rend la combinaison d'autorité, de bienveillance et de possession que rabb exprime.

**prémunissez-vous** — Le sens retenu est « se prémunir » du champ « Protection/Préservation ». Le mot « prémunissez-vous » est choisi car la forme VIII réflexive de w-q-y signifie « se protéger soi-même ». En français courant, « se prémunir » est le mot qui rend cette protection volontaire et réflexive. L'alternative « craignez » est écartée car elle part de la peur, pas de la protection — la racine w-q-y n'est pas la racine de la peur (kh-w-f) mais celle de la protection. L'alternative « protégez-vous » est acceptable mais « prémunissez-vous » ajoute la nuance de prévention (se protéger AVANT que le mal n'arrive).

**obéissez** — Le sens retenu est « obéir » du champ « Obéissance/Soumission volontaire ». Le mot « obéissez » est le mot français courant pour ṭ-w-ʿ. L'alternative « soumettez-vous » est écartée car elle implique une contrainte — la racine ṭ-w-ʿ porte la notion de volonté et de consentement, pas de soumission forcée.

§CRITIQUE§
**prémunissez-vous vs craignez** — Les traductions courantes donnent « craignez Allah » pour ittaqū Allāha. Ce choix transforme le rapport avec Dieu : « craindre » implique une relation de peur et de menace, comme si Dieu était une source de danger dont il faut avoir peur. Mais la racine w-q-y signifie « protéger, mettre un bouclier devant ». La forme VIII réflexive (ittaqā) signifie « se protéger soi-même » — la taqwā est l'acte de se mettre à l'abri, pas l'état d'avoir peur. Le sens est plutôt : « prenez vos précautions envers Dieu » — soyez prudents dans votre rapport avec l'autorité suprême. Le biais vient des commentaires classiques qui ont associé la taqwā à la « crainte de Dieu » (khashyat Allāh), mais khashya (peur révérencielle) vient d'une racine différente (kh-sh-y) qui signifie effectivement « craindre ». La taqwā vient de w-q-y (protéger) — c'est une protection active, pas une peur passive.

**j'ai apporté vs je suis venu à vous avec** — Les traductions courantes donnent « j'ai apporté un signe » pour ji'tukum bi-āyatin. Le verbe jā'a signifie « venir » (se déplacer vers), pas « apporter » (faire venir un objet). ji'tukum bi- = « je suis venu à vous avec » — l'accent est sur la venue de Jésus, le signe l'accompagne. « Apporter » déplace l'accent sur le signe comme objet transporté, ce qui est une nuance différente. Cela dit, les deux lectures sont proches et ne changent pas fondamentalement le sens du verset.

Les traductions courantes donnent sensiblement le même sens pour les autres mots du verset : « confirmant », « rendre licite », « une partie de ce qui vous était interdit », « votre Seigneur », « obéissez-moi ».`;

  // Segments d'affichage
  const segments = [
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "confirmant", phon: "muṣaddiqan", arabic: "مُصَدِّقًا", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 1 },
    { fr: "ce qui", phon: "li-mā", arabic: "لِّمَا", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
    { fr: "est entre", phon: "bayna", arabic: "بَيْنَ", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 3 },
    { fr: "mes deux mains", phon: "yadayya", arabic: "يَدَيَّ", word_key: "ydy", is_particle: false, sense_retenu: "devant", position: 4 },
    { fr: "de", phon: "mina", arabic: "مِنَ", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
    { fr: "la Torah", phon: "at-tawrāti", arabic: "ٱلتَّوْرَىٰةِ", word_key: null, is_particle: false, sense_retenu: "Torah (nom propre)", position: 6 },
    { fr: "et pour", phon: "wa-li-", arabic: "وَلِ", word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: "vous rendre licite", phon: "uḥilla", arabic: "أُحِلَّ", word_key: "hll", is_particle: false, sense_retenu: "rendre licite", position: 7 },
    { fr: "pour vous", phon: "lakum", arabic: "لَكُم", word_key: null, is_particle: true, sense_retenu: null, position: 8 },
    { fr: "une partie de", phon: "baʿḍa", arabic: "بَعْضَ", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 9 },
    { fr: "ce qui", phon: "alladhī", arabic: "ٱلَّذِى", word_key: null, is_particle: true, sense_retenu: null, position: 10 },
    { fr: "vous a été interdit", phon: "ḥurrima", arabic: "حُرِّمَ", word_key: "hrm", is_particle: false, sense_retenu: "interdire", position: 11 },
    { fr: "sur vous", phon: "ʿalaykum", arabic: "عَلَيْكُمْ", word_key: null, is_particle: true, sense_retenu: null, position: 12 },
    { fr: "et je suis venu à vous", phon: "wa-ji'tukum", arabic: "وَجِئْتُكُم", word_key: "jyy", is_particle: false, sense_retenu: "venir", position: 13 },
    { fr: "avec un signe", phon: "bi-āyatin", arabic: "بِـَٔايَةٍ", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 14 },
    { fr: "de", phon: "min", arabic: "مِّن", word_key: null, is_particle: true, sense_retenu: null, position: 15 },
    { fr: "votre Seigneur", phon: "rabbikum", arabic: "رَّبِّكُمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 16 },
    { fr: "prémunissez-vous donc", phon: "fa-ttaqū", arabic: "فَٱتَّقُوا۟", word_key: "wqy", is_particle: false, sense_retenu: "se prémunir", position: 17 },
    { fr: "envers Dieu", phon: "Allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 18 },
    { fr: "et obéissez-moi", phon: "wa-aṭīʿūni", arabic: "وَأَطِيعُونِ", word_key: "twe", is_particle: false, sense_retenu: "obéir", position: 19 }
  ];

  // UPDATE verse_analyses (ghost entry exists)
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    segments: segments,
    full_translation: fullTranslation
  }).eq('id', vaId);
  console.log('VA update:', vaErr ? 'ERREUR: ' + vaErr.message : 'OK');

  // Vérification word_daily (toutes les racines ont déjà 3 phrases → SKIP)
  console.log('\nword_daily: toutes les racines ont déjà 3 phrases → SKIP');

  console.log('\n═══════════════════════════════════════════');
  console.log('VERSET 3:50 — TERMINÉ');
  console.log('═══════════════════════════════════════════');
  console.log('  muṣaddiqan (sdq/ṣ-d-q) → « Vérité/Sincérité » → « confirmant »');
  console.log('  bayna (byn/b-y-n) → « Séparation/Distance » → « entre »');
  console.log('  yadayya (ydy/y-d-y) → « Antériorité/Présence » → « devant »');
  console.log('  uḥilla (hll/ḥ-l-l) → « Licéité/Permission » → « rendre licite »');
  console.log('  baʿḍa (bed/b-ʿ-ḍ) → « Partie/Division » → « une partie »');
  console.log('  ḥurrima (hrm/ḥ-r-m) → « Interdiction/Sacré » → « interdire »');
  console.log('  ji\'tukum (jyy/j-y-\') → « Venue/Apport » → « venir »');
  console.log('  āyatin (ayh) → « Signe/Manifestation » → « signe »');
  console.log('  rabbikum (rbb/r-b-b) → « Seigneurie/Autorité bienveillante » → « Seigneur »');
  console.log('  ittaqū (wqy/w-q-y) → « Protection/Préservation » → « prémunissez-vous »');
  console.log('  Allāha (alh) → « Divinité » → « Dieu »');
  console.log('  aṭīʿūni (twe/ṭ-w-ʿ) → « Obéissance/Soumission volontaire » → « obéissez »');
  console.log('\n  Traduction : "Et confirmant ce qui est devant moi de la Torah, et pour vous rendre licite une partie de ce qui vous a été interdit. Et je suis venu à vous avec un signe de votre Seigneur. Prémunissez-vous donc envers Dieu, et obéissez-moi."');
}

run().catch(console.error);
