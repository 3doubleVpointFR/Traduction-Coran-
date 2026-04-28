const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 372;

  // ===== 1. Supprimer anciennes VWA (au cas où) =====
  await db.from('verse_word_analyses').delete().eq('verse_id', vid);

  // ===== 2. Insérer les VWA — analysis_axes au format V3 =====
  const vwa = [];

  // Helper pour pousser une VWA
  const push = (word_key, position, axes) => {
    vwa.push({ verse_id: vid, word_key, position, analysis_axes: axes });
  };

  // ─── kwn position 2 (kāna mā = "n'a pas été") ───
  push('kwn', 2, {
    sense_chosen: 'être',
    concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)', 'venir à l\'existence'],
        proof_ctx: "kāna est un verbe d'existence à l'accompli (mā kāna = « il n'a pas été »). Auxiliaire qui sert à dater ou nier l'existence d'un état — ici il nie l'idée que le statut décrit ait jamais existé pour un humain. Compatible avec la structure mā kāna li-X an Y (« il n'a pas été à X que Y », c'est-à-dire « il n'a pas appartenu à X de... »)."
      },
      'Lieu/État': { status: 'nul', senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'], proof_ctx: "Sens spatial inadapté : kāna ici est verbe modal et non locatif." },
      'Humilité/Soumission': { status: 'nul', senses: ['être humble soumis'], proof_ctx: "Sens dérivé inadapté au verbe auxiliaire." }
    }
  });

  // ─── bshr position 3 (li-bashar = "à un humain") ───
  push('bshr', 3, {
    sense_chosen: 'humain',
    concept_chosen: 'Corps/Anatomie',
    concepts: {
      'Corps/Anatomie': {
        status: 'retenu',
        senses: ['être humain'],
        proof_ctx: "bashar est un nom indéfini singulier désignant l'être humain dans sa dimension corporelle visible — le mot dérive de la peau (bashara) comme partie visible et tactile de la personne. Ici li-basharin (« à un humain ») désigne génériquement n'importe quel être humain, sans qualification de fonction (prophète, savant, etc.). Compatible avec la grammaire : nom indéfini admis dans la construction li-X an Y."
      },
      'Surface/Contact': { status: 'nul', senses: ['peau', 'contact peau à peau', 'peler'], proof_ctx: "Sens physique de la peau — non requis ici, le mot dans le verset désigne la personne entière." },
      'Annonce/Réjouissance': { status: 'nul', senses: ['annoncer une bonne nouvelle', 'réjouir', 'beau visage'], proof_ctx: "Forme verbale d'annonce (Forme II) — non utilisée ici, le mot est un nom." }
    }
  });

  // ─── aty position 5 (yu'tī-hu = "lui apporte") ───
  push('aty', 5, {
    sense_chosen: 'apporter',
    concept_chosen: 'Venue/Arrivée',
    concepts: {
      'Venue/Arrivée': {
        status: 'retenu',
        senses: ['venir', 'arriver', 'apporter', 'donner', 'commettre'],
        proof_ctx: "yu'tī est l'inaccompli de la Forme IV ātā : faire venir quelque chose à quelqu'un, c'est-à-dire apporter ou remettre. La Forme IV transitive transforme l'arrivée intransitive en transmission active. Compatible avec la structure double objet : yu'tī-hu (« il lui apporte ») + al-kitāb (« l'écriture »). L'objet est l'écriture, le destinataire est l'humain visé."
      },
      'Sens isolé/Détruire': { status: 'nul', senses: ['détruire'], proof_ctx: "Sens isolé sans rapport avec le don d'un livre." }
    }
  });

  // ─── alh position 6 (allāhu) ───
  push('alh', 6, {
    sense_chosen: 'Dieu',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
        proof_ctx: "allāhu est le nom propre divin, sujet du verbe yu'tī-hu (« lui apporte »). Le sujet est explicitement Dieu comme donneur de l'écriture. Compatible avec la grammaire : nom propre déterminé en position de sujet (mu'tī)."
      },
      'Adoration/Dévotion': { status: 'nul', senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'], proof_ctx: "Forme verbale d'adoration — non utilisée ici, le mot est un nom propre." },
      'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: "Sens secondaire de la racine — non activé par cette occurrence." },
      'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: "Sens isolé inadapté." },
      'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: "Sens isolé inadapté." }
    }
  });

  // ─── ktb position 7 (al-kitāba = "l'écriture") ───
  push('ktb', 7, {
    sense_chosen: 'écriture révélée',
    concept_chosen: 'Livre/Écrit',
    concepts: {
      'Livre/Écrit': {
        status: 'retenu',
        senses: ['livre', 'écriture révélée', 'registre', 'contrat écrit', 'contrat de mariage', 'contrat d\'affranchissement'],
        proof_ctx: "al-kitāb est le nom déterminé désignant le corpus textuel révélé (l'Écriture). Ici l'écriture est l'un des trois dons mentionnés (avec le jugement et la prophétie), ce qui pointe vers le contenu textuel révélé. Cohérent avec V48-V78."
      },
      'Écriture/Inscription': { status: 'nul', senses: ['écrire', 'dicter', 'demander d\'écrire', 'écrire à quelqu\'un', 's\'inscrire', 'copier un livre', 'art de l\'écriture', 'scribe', 'savant', 'école', 'enseignant', 'vendeur de livres'], proof_ctx: "Sens verbal d'écrire ou nom d'agent — non requis : le mot est un nom déterminé désignant le corpus." },
      'Obligation/Décret': { status: 'nul', senses: ['prescrire', 'rendre obligatoire', 'juger', 'décret divin', 'prédestination'], proof_ctx: "Sens prescriptif — non activé ici, le contexte est don du corpus textuel." },
      'Assemblage/Couture': { status: 'nul', senses: ['rassembler', 'coudre', 'attacher', 'fermer la vulve', 'lier l\'outre', 'se ceindre', 'collecter', 'préparer les troupes', 'armée'], proof_ctx: "Sens physique de réunir — non lié au don textuel." },
      'Souffle/Vent': { status: 'nul', senses: ['rétention urinaire'], proof_ctx: "Sens physiologique isolé." },
      'Sens isolé/Constipation': { status: 'nul', senses: ['constipation'], proof_ctx: "Sens isolé." },
      'Sens isolé/Flèche': { status: 'nul', senses: ['flèche d\'entraînement'], proof_ctx: "Sens isolé." },
      'Sens isolé/Gonflé': { status: 'nul', senses: ['gonflé et plein'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── hkm position 8 (wa-l-ḥukm = "et le jugement") ───
  push('hkm', 8, {
    sense_chosen: 'jugement',
    concept_chosen: 'Jugement/Décision',
    concepts: {
      'Jugement/Décision': {
        status: 'retenu',
        senses: ['juger', 'décider', 'sentence'],
        proof_ctx: "al-ḥukm est le nom verbal de ḥakama (juger, décider). Ici il vient entre al-kitāb (l'écriture) et al-nubuwwa (la prophétie), donc parmi les dons faits à un humain — désigne la capacité de trancher et de décider, faculté que Dieu accorde au prophète. Distinct de Sagesse/ḥikma (un état d'âme contemplatif) qui n'est pas le mot ici (al-ḥukm, pas al-ḥikma)."
      },
      'Sagesse': { status: 'peu_probable', senses: ['être sage', 'sagesse'], proof_ctx: "Sagesse correspond à ḥikma (forme nominale différente) — al-ḥukm dans le verset est la décision/le jugement, pas la disposition contemplative qu'est ḥikma." },
      'Autorité/Pouvoir': { status: 'nul', senses: ['gouverner'], proof_ctx: "Sens politique de gouvernement — non activé : le verset énumère un don intellectuel, pas une charge politique." },
      'Sens isolé/Empêcher': { status: 'nul', senses: ['empêcher'], proof_ctx: "Sens isolé sans rapport." }
    }
  });

  // ─── nba position 9 (wa-l-nubuwwa = "et la prophétie") ───
  push('nba', 9, {
    sense_chosen: 'prophétie',
    concept_chosen: 'Prophétie',
    concepts: {
      'Prophétie': {
        status: 'retenu',
        senses: ['prophète', 'prophétie'],
        proof_ctx: "al-nubuwwa est le nom abstrait désignant la fonction de prophète — l'office et la mission de transmettre ce qui vient de Dieu. Compatible avec la grammaire : nom abstrait défini en position de complément d'objet du verbe yu'tī (« apporter »)."
      },
      'Information/Nouvelle': { status: 'peu_probable', senses: ['informer', 'nouvelle', 'annoncer'], proof_ctx: "L'information générale n'est pas le sens ici : la forme nubuwwa désigne spécifiquement la fonction prophétique, pas l'acte ponctuel de transmettre une nouvelle." },
      'Sens isolé/Crier': { status: 'nul', senses: ['crier'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── qwl position 11 (yaqūla = "qu'il dise") ───
  push('qwl', 11, {
    sense_chosen: 'dire',
    concept_chosen: 'Parole/Énonciation',
    concepts: {
      'Parole/Énonciation': {
        status: 'retenu',
        senses: ['dire', 'parler', 'parole', 'discours', 'affirmer'],
        proof_ctx: "yaqūla est l'inaccompli subjonctif de qāla — l'acte de dire, énoncer un propos. Ici en lien avec thumma (« puis ») et li-l-nās (« aux gens ») : action ponctuelle d'énoncer un propos précis qui est cité ensuite (kūnū ʿibādan lī...)."
      },
      'Pensée/Avis': { status: 'nul', senses: ['opinion', 'avis', 'doctrine'], proof_ctx: "Le verset cite un propos énoncé extérieurement (« soyez serviteurs... »), pas un avis intérieur." },
      'Corps/Anatomie': { status: 'nul', senses: ['troupeau'], proof_ctx: "Sens isolé." },
      'Sens isolé/Puissance': { status: 'nul', senses: ['puissance'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── nws position 12 (li-l-nās = "aux gens") ───
  push('nws', 12, {
    sense_chosen: 'gens',
    concept_chosen: 'Humanité/Peuple',
    concepts: {
      'Humanité/Peuple': {
        status: 'retenu',
        senses: ['gens', 'êtres humains', 'peuple'],
        proof_ctx: "al-nās est le nom collectif désignant l'ensemble des humains, ici ceux à qui le prophète parlerait. Compatible : nom déterminé pluriel collectif en position de destinataire après li- (« à »)."
      },
      'Perception/Visibilité': { status: 'nul', senses: ['voir de loin', 'être visible'], proof_ctx: "Sens verbal de perception — non requis ici, le mot est un collectif nominal." },
      'Sens isolé/Oublier': { status: 'nul', senses: ['oublier'], proof_ctx: "Sens isolé." },
      'Sens isolé/Être': { status: 'nul', senses: ['être agité'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── kwn position 13 (kūnū = "soyez") ───
  push('kwn', 13, {
    sense_chosen: 'être',
    concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)', 'venir à l\'existence'],
        proof_ctx: "kūnū est l'impératif pluriel de kāna : « soyez ». Auxiliaire d'identification d'un état que les destinataires doivent assumer (ici : ʿibād, serviteurs). L'impératif sort du locuteur (le faux propos cité) et atteint les auditeurs (« les gens »)."
      },
      'Lieu/État': { status: 'nul', senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'], proof_ctx: "Sens locatif inadapté ici : kūnū commande l'identification à un statut, pas un déplacement." },
      'Humilité/Soumission': { status: 'nul', senses: ['être humble soumis'], proof_ctx: "Sens dérivé inadapté au verbe auxiliaire." }
    }
  });

  // ─── ebd position 14 (ʿibādan = "serviteurs") ───
  push('ebd', 14, {
    sense_chosen: 'serviteur',
    concept_chosen: 'Servitude/Esclavage',
    concepts: {
      'Servitude/Esclavage': {
        status: 'retenu',
        senses: ['serviteur', 'esclave', 'être humain', 'asservir', 'rendre soumis', 'aplanir un chemin'],
        proof_ctx: "ʿibādan est le pluriel indéfini de ʿabd (serviteur). Combiné à lī (« à moi ») et opposé à min dūni allāh (« à l'écart de Dieu »), le sens est celui d'allégeance/sujétion personnelle — « soyez à mon service au lieu d'être à celui de Dieu ». L'idée est la fidélité acquise comme propriété personnelle, distincte de l'adoration cultuelle (ʿibāda)."
      },
      'Adoration/Dévotion': { status: 'peu_probable', senses: ['adorer', 'servir', 'vouer un culte', 'se dévouer', 'dévotion', 'adoration'], proof_ctx: "L'adoration cultuelle est concevable mais le contexte (lī = à moi vs Dieu) pointe vers la sujétion personnelle d'un humain à un autre, ce qui est de la servitude, non du culte religieux." },
      'Sens isolé/Être': { status: 'nul', senses: ['être en colère'], proof_ctx: "Sens isolé." },
      'Sens isolé/Mépriser': { status: 'nul', senses: ['mépriser'], proof_ctx: "Sens isolé." },
      'Sens isolé/Colérique': { status: 'nul', senses: ['colérique'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── dwn position 17 (dūni) ───
  push('dwn', 17, {
    sense_chosen: 'en dessous',
    concept_chosen: 'Infériorité/En-dessous',
    concepts: {
      'Infériorité/En-dessous': {
        status: 'retenu',
        senses: ['en dessous', 'inférieur', 'moindre'],
        proof_ctx: "dūn désigne la position en dessous ou à côté/en deçà. La locution min dūni X (« d'en dessous de X ») est une expression idiomatique signifiant « à l'écart de X » ou « à un rang inférieur à X » — ici le faux prophète demanderait un service qui se substituerait à celui de Dieu, en se plaçant à un rang qui exclut Dieu."
      },
      'Proximité/Moindre distance': { status: 'nul', senses: ['proche'], proof_ctx: "Sens de proximité — non activé ici, le sens est l'écart par rapport à Dieu." },
      'Sens isolé/Le': { status: 'nul', senses: ['le plus bas'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── alh position 18 (allāhi) ───
  push('alh', 18, {
    sense_chosen: 'Dieu',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
        proof_ctx: "allāhi en cas génitif après min dūni : Dieu est la référence à laquelle le faux service s'oppose. Compatible : nom propre divin déterminé en position de complément du nom dūn."
      },
      'Adoration/Dévotion': { status: 'nul', senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'], proof_ctx: "Forme verbale — non utilisée ici." },
      'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: "Sens secondaire — non activé." },
      'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: "Sens isolé." },
      'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── kwn position 20 (kūnū = "soyez") ───
  push('kwn', 20, {
    sense_chosen: 'être',
    concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)', 'venir à l\'existence'],
        proof_ctx: "Second kūnū de la phrase, en parallèle au précédent — impératif pluriel « soyez ». Cette fois introduit l'attribut rabbāniyyīn comme statut juste à assumer, en opposition au statut faux des ʿibād-de-moi cité avant."
      },
      'Lieu/État': { status: 'nul', senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'], proof_ctx: "Sens locatif inadapté." },
      'Humilité/Soumission': { status: 'nul', senses: ['être humble soumis'], proof_ctx: "Sens dérivé inadapté." }
    }
  });

  // ─── rbb position 21 (rabbāniyyīn) ───
  push('rbb', 21, {
    sense_chosen: 'éduquer',
    concept_chosen: 'Éducation/Accompagnement',
    concepts: {
      'Éducation/Accompagnement': {
        status: 'retenu',
        senses: ['élever un enfant', 'éduquer', 'former', 'accompagner la croissance'],
        proof_ctx: "rabbāniyyīn est un adjectif pluriel construit sur rabb (Seigneur) avec le suffixe intensif -ānī, qui marque une relation forte et exclusive — « celui qui est intensément du Seigneur ». Le verset explicite immédiatement la fonction de cette dévotion par bi-mā kuntum tuʿallimūn al-kitāb wa bi-mā kuntum tadrusūn (« par ce que vous étiez en train d'enseigner l'écriture et par ce que vous étiez en train d'étudier ») — la qualification rabbānī est donc liée à l'activité d'éducation et d'apprentissage soutenu. Le concept Éducation/Accompagnement capture cette dimension formatrice."
      },
      'Seigneurie/Autorité bienveillante': { status: 'probable', senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner'], proof_ctx: "rabb appartient à ce concept et le suffixe -ānī rattache l'adjectif au Seigneur. Mais ici le verset dérive le sens du qualificatif rabbānī vers l'enseignement et l'étude — la fonction relationnelle vers le Seigneur s'incarne dans l'éducation, pas dans la possession ou le gouvernement." },
      'Croissance/Augmentation': { status: 'nul', senses: ['augmenter', 'croître', 'faire grandir', 'nourrir', 'développer', 'excès', 'colline', 'éminence'], proof_ctx: "Sens physique de croissance — non activé pour cet adjectif relationnel." },
      'Commerce/Usure': { status: 'nul', senses: ['usure', 'augmentation de dette', 'intérêt'], proof_ctx: "Sens économique sans rapport." },
      'Souffle/Vent': { status: 'nul', senses: ['essoufflement'], proof_ctx: "Sens isolé." },
      'Sens isolé/Fixer': { status: 'nul', senses: ['fixer'], proof_ctx: "Sens isolé." },
      'Sens isolé/Rassembler': { status: 'nul', senses: ['rassembler'], proof_ctx: "Sens isolé." },
      'Sens isolé/Groupe': { status: 'nul', senses: ['groupe'], proof_ctx: "Sens isolé." },
      'Sens isolé/Confiture': { status: 'nul', senses: ['confiture'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── kwn position 23 (kuntum = "vous étiez") ───
  push('kwn', 23, {
    sense_chosen: 'être',
    concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)', 'venir à l\'existence'],
        proof_ctx: "kuntum est l'accompli pluriel à la 2e personne de kāna — « vous avez été » / « vous étiez ». Suivi de l'inaccompli tuʿallimūn, il forme une périphrase du passé continu (« vous étiez en train d'enseigner »). Auxiliaire de temps."
      },
      'Lieu/État': { status: 'nul', senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'], proof_ctx: "Sens locatif inadapté." },
      'Humilité/Soumission': { status: 'nul', senses: ['être humble soumis'], proof_ctx: "Sens dérivé inadapté." }
    }
  });

  // ─── elm position 24 (tuʿallimūn = "enseigner") ───
  push('elm', 24, {
    sense_chosen: 'enseignement',
    concept_chosen: 'Savoir/Connaissance',
    concepts: {
      'Savoir/Connaissance': {
        status: 'retenu',
        senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
        proof_ctx: "tuʿallimūn est l'inaccompli de la Forme II ʿallama — faire savoir, transmettre la connaissance à autrui. La Forme II est causative : ʿalima (savoir) → ʿallama (faire savoir). Compatible avec la grammaire : verbe transitif suivi de son objet al-kitāb (l'écriture)."
      },
      'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe', 'drapeau', 'montagne', 'repère', 'étendard', 'lèvre fendue'], proof_ctx: "Sens visuel des signes/marques — non activé pour le verbe transitif d'enseignement." },
      'Monde/Création': { status: 'nul', senses: ['monde', 'les mondes', 'ensemble des créatures', 'univers'], proof_ctx: "Sens cosmologique — non activé." },
      'Lieu/Géographie': { status: 'nul', senses: ['informer', 'nommer'], proof_ctx: "Sens isolé." },
      'Sens isolé/Enseigner': { status: 'nul', senses: ['enseigner'], proof_ctx: "Doublon isolé — le sens d'enseigner appartient au concept Savoir/Connaissance." },
      'Sens isolé/Homonyme': { status: 'nul', senses: ['homonyme'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── ktb position 25 (al-kitāba = "l'écriture") ───
  push('ktb', 25, {
    sense_chosen: 'écriture révélée',
    concept_chosen: 'Livre/Écrit',
    concepts: {
      'Livre/Écrit': {
        status: 'retenu',
        senses: ['livre', 'écriture révélée', 'registre', 'contrat écrit', 'contrat de mariage', 'contrat d\'affranchissement'],
        proof_ctx: "Second al-kitāb de la phrase — désigne le même corpus textuel révélé que celui mentionné en position 7. Cohérent avec V48-V78 et avec la première occurrence du verset."
      },
      'Écriture/Inscription': { status: 'nul', senses: ['écrire', 'dicter', 'demander d\'écrire', 'écrire à quelqu\'un', 's\'inscrire', 'copier un livre', 'art de l\'écriture', 'scribe', 'savant', 'école', 'enseignant', 'vendeur de livres'], proof_ctx: "Forme verbale ou nom d'agent — non requise pour ce nom déterminé." },
      'Obligation/Décret': { status: 'nul', senses: ['prescrire', 'rendre obligatoire', 'juger', 'décret divin', 'prédestination'], proof_ctx: "Sens prescriptif — non activé." },
      'Assemblage/Couture': { status: 'nul', senses: ['rassembler', 'coudre', 'attacher', 'fermer la vulve', 'lier l\'outre', 'se ceindre', 'collecter', 'préparer les troupes', 'armée'], proof_ctx: "Sens physique." },
      'Souffle/Vent': { status: 'nul', senses: ['rétention urinaire'], proof_ctx: "Sens isolé." },
      'Sens isolé/Constipation': { status: 'nul', senses: ['constipation'], proof_ctx: "Sens isolé." },
      'Sens isolé/Flèche': { status: 'nul', senses: ['flèche d\'entraînement'], proof_ctx: "Sens isolé." },
      'Sens isolé/Gonflé': { status: 'nul', senses: ['gonflé et plein'], proof_ctx: "Sens isolé." }
    }
  });

  // ─── kwn position 27 (kuntum = "vous étiez") ───
  push('kwn', 27, {
    sense_chosen: 'être',
    concept_chosen: 'Être/Existence',
    concepts: {
      'Être/Existence': {
        status: 'retenu',
        senses: ['être (verbe incomplet)', 'venir à l\'existence'],
        proof_ctx: "Second kuntum de la phrase — auxiliaire du passé continu introduisant tadrusūn (« vous étudiez »). En parallèle au kuntum précédent. Auxiliaire de temps."
      },
      'Lieu/État': { status: 'nul', senses: ['lieu', 'reste à ta place', 'état condition', 'motif raison', 'devenir comme'], proof_ctx: "Sens locatif inadapté." },
      'Humilité/Soumission': { status: 'nul', senses: ['être humble soumis'], proof_ctx: "Sens dérivé inadapté." }
    }
  });

  // ─── drs position 28 (tadrusūn = "étudier") ───
  push('drs', 28, {
    sense_chosen: 'étudier',
    concept_chosen: 'Étude/Lecture répétée',
    concepts: {
      'Étude/Lecture répétée': {
        status: 'retenu',
        senses: ['étudier', 'lire et relire', 'apprendre par cœur', 'étudier ensemble', 'lieu d\'étude'],
        proof_ctx: "tadrusūn est l'inaccompli pluriel 2e personne — « vous étudiez ». La racine d-r-s appliquée à un texte désigne la lecture répétée et soutenue qui mène à l'apprentissage par cœur. Compatible avec la grammaire : verbe d'action durative en parallèle structurel à tuʿallimūn (la dyade enseigner/étudier formant la fonction du rabbānī)."
      },
      'Effacement/Trace estompée': { status: 'nul', senses: ['être effacé', 'maison délaissée', 'disparition progressive'], proof_ctx: "Sens d'effacement physique — non activé pour ce verbe d'action humaine sur un texte étudié activement." },
      'Battage/Foulage du grain': { status: 'nul', senses: ['battre le grain', 'paille foulée'], proof_ctx: "Sens agricole — non requis ici." },
      'Vêtement usé': { status: 'nul', senses: ['vêtement usé', 'habit ancien'], proof_ctx: "Sens d'objet usé — non activé pour un verbe d'étude." },
      'Sens isolé/Menstruations': { status: 'nul', senses: ['femme en menstruations'], proof_ctx: "Sens isolé." }
    }
  });

  for (const v of vwa) {
    await db.from('verse_word_analyses').insert(v);
  }
  console.log('VWA V79 : ' + vwa.length + ' entrées créées ✅');

  // ===== 3. Segments d'affichage =====
  const segments = [
    { fr: "Il n'a",      pos: null,    phon: 'mā',          arabic: 'مَا',        position: 1,  word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "pas été",     pos: 'verbe', phon: 'kāna',        arabic: 'كَانَ',      position: 2,  word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)' },
    { fr: "pour un humain", pos: 'nom', phon: 'li-basharin', arabic: 'لِبَشَرٍ',   position: 3,  word_key: 'bshr',is_particle: false, sense_retenu: 'être humain' },
    { fr: "que",         pos: null,    phon: 'an',          arabic: 'أَن',        position: 4,  word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "lui apporte", pos: 'verbe', phon: 'yu\'tiyahu',  arabic: 'يُؤْتِيَهُ',  position: 5,  word_key: 'aty', is_particle: false, sense_retenu: 'apporter' },
    { fr: "Dieu",        pos: 'nom',   phon: 'allāhu',      arabic: 'ٱللَّهُ',    position: 6,  word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
    { fr: "l'écriture",  pos: 'nom',   phon: 'al-kitāba',   arabic: 'ٱلْكِتَٰبَ', position: 7,  word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée' },
    { fr: "et le jugement", pos: 'nom', phon: 'wa-l-ḥukma', arabic: 'وَٱلْحُكْمَ', position: 8,  word_key: 'hkm', is_particle: false, sense_retenu: 'juger' },
    { fr: "et la prophétie", pos: 'nom', phon: 'wa-l-nubuwwata', arabic: 'وَٱلنُّبُوَّةَ', position: 9, word_key: 'nba', is_particle: false, sense_retenu: 'prophétie' },
    { fr: "puis",        pos: null,    phon: 'thumma',      arabic: 'ثُمَّ',      position: 10, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "qu'il dise",  pos: 'verbe', phon: 'yaqūla',      arabic: 'يَقُولَ',    position: 11, word_key: 'qwl', is_particle: false, sense_retenu: 'dire' },
    { fr: "aux gens",    pos: 'nom',   phon: 'li-l-nāsi',   arabic: 'لِلنَّاسِ',  position: 12, word_key: 'nws', is_particle: false, sense_retenu: 'gens' },
    { fr: "« soyez",     pos: 'verbe', phon: 'kūnū',        arabic: 'كُونُوا۟',   position: 13, word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)' },
    { fr: "serviteurs",  pos: 'nom',   phon: 'ʿibādan',     arabic: 'عِبَادًا',   position: 14, word_key: 'ebd', is_particle: false, sense_retenu: 'serviteur' },
    { fr: "pour moi",    pos: null,    phon: 'lī',          arabic: 'لِّى',       position: 15, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "à",           pos: null,    phon: 'min',         arabic: 'مِن',        position: 16, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "l'écart de",  pos: 'nom',   phon: 'dūni',        arabic: 'دُونِ',      position: 17, word_key: 'dwn', is_particle: false, sense_retenu: 'en dessous' },
    { fr: "Dieu »",      pos: 'nom',   phon: 'allāhi',      arabic: 'ٱللَّهِ',    position: 18, word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
    { fr: "mais",        pos: null,    phon: 'wa-lākin',    arabic: 'وَلَٰكِن',   position: 19, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "« soyez",     pos: 'verbe', phon: 'kūnū',        arabic: 'كُونُوا۟',   position: 20, word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)' },
    { fr: "des hommes voués au Seigneur", pos: 'nom', phon: 'rabbāniyyīna', arabic: 'رَبَّٰنِيِّ.نَ', position: 21, word_key: 'rbb', is_particle: false, sense_retenu: 'éduquer' },
    { fr: "par ce que",  pos: null,    phon: 'bi-mā',       arabic: 'بِمَا',      position: 22, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "vous étiez en train d'", pos: 'verbe', phon: 'kuntum', arabic: 'كُنتُمْ', position: 23, word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)' },
    { fr: "enseigner",   pos: 'verbe', phon: 'tuʿallimūna', arabic: 'تُعَلِّمُونَ', position: 24, word_key: 'elm', is_particle: false, sense_retenu: 'enseignement' },
    { fr: "l'écriture",  pos: 'nom',   phon: 'al-kitāba',   arabic: 'ٱلْكِتَٰبَ', position: 25, word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée' },
    { fr: "et par ce que", pos: null,  phon: 'wa-bi-mā',    arabic: 'وَبِمَا',    position: 26, word_key: null,  is_particle: true,  sense_retenu: null },
    { fr: "vous étiez en train d'", pos: 'verbe', phon: 'kuntum', arabic: 'كُنتُمْ', position: 27, word_key: 'kwn', is_particle: false, sense_retenu: 'être (verbe incomplet)' },
    { fr: "étudier »",   pos: 'verbe', phon: 'tadrusūna',   arabic: 'تَدْرُسُونَ', position: 28, word_key: 'drs', is_particle: false, sense_retenu: 'étudier' }
  ];

  // ===== 4. translation_arab + full_translation + translation_explanation =====
  const translation_arab = "Il n'a pas été pour un humain que Dieu lui apporte l'écriture, et le jugement et la prophétie, puis qu'il dise aux gens : « soyez serviteurs pour moi à l'écart de Dieu » ; mais : « soyez des hommes voués au Seigneur, par ce que vous étiez en train d'enseigner l'écriture, et par ce que vous étiez en train d'étudier ».";

  const full_translation = "Il ne convient pas à un être humain qu'Allah ait honoré du Livre, de la sagesse et de la prophétie, de dire aux gens: « Soyez mes serviteurs, à l'exclusion d'Allah », mais au contraire, [il devra dire]: « Soyez des maîtres parfaits, puisque vous enseignez le Livre et vous l'étudiez ».";

  const translation_explanation = `§DEMARCHE§

Le verset prolonge le passage commencé en V75-V78 où le texte expose les manœuvres de certains Gens du Livre. V78 a décrit ceux qui tordent leurs langues avec l'écriture pour faire passer leurs propos pour de la révélation. V79 répond directement par la négative : aucun humain ayant reçu l'écriture, le jugement et la prophétie ne peut détourner la parole de Dieu pour s'attribuer à lui-même un service personnel — le rôle reste l'éducation soutenue, ancrée dans l'enseignement et l'étude.

**kāna** (a été) est le verbe d'existence à l'accompli, ici précédé de la négation **mā** (n'a pas). Construction mā kāna li-X an Y = « il n'a pas été à X que Y », c'est-à-dire « il n'a pas appartenu à X de... ». Forme qui nie une éventualité comme historiquement non réalisée et logiquement non possible. Lane's : kāna est le verbe copulatif de l'existence et de l'identification d'état.

**bashar** (humain) est un nom indéfini singulier — n'importe quel être humain. La racine b-sh-r désigne d'abord la peau (bashara) comme partie visible du corps, puis par extension métonymique l'être humain dans sa dimension corporelle visible. Le mot pose un humain générique, sans qualifier sa fonction (prophète, savant) — la négation porte donc sur tout humain en général.

**yu'tī-hu** (lui apporte) est l'inaccompli subjonctif de la Forme IV ātā. La Forme IV est causative : la racine 'ity (venir/arriver) se transforme en « faire venir vers », c'est-à-dire « apporter, remettre ». Le suffixe -hu (à lui) reprend le bashar mentionné juste avant. Construction à double objet : Dieu apporte à l'humain → l'écriture/le jugement/la prophétie.

**allāhu** (Dieu) est le nom propre divin, sujet du verbe yu'tī-hu — c'est Dieu qui apporte. Hamidullah → Dieu (convention de notre traduction).

**al-kitāba** (l'écriture) est le nom déterminé désignant le corpus textuel révélé. Racine k-t-b qui désigne tout l'éventail de l'écrit (écriture, livre, registre, contrat). La forme déterminée et le contexte du don divin pointent vers le corpus révélé. Cohérent avec V48-V78.

**al-ḥukm** (le jugement) est le nom verbal de ḥakama (juger, décider). À distinguer de al-ḥikma (la sagesse, état contemplatif) qui est une forme nominale différente. Ici al-ḥukm désigne la capacité de trancher et de décider — la faculté que Dieu accorde au prophète pour juger entre les gens. Lane's : ḥukm = « judgment, decision, sentence ».

**al-nubuwwa** (la prophétie) est le nom abstrait construit sur n-b-' (nouvelle, information). Désigne la fonction prophétique — l'office et la mission de transmettre ce qui vient de Dieu. Compatible avec les deux noms précédents : ces trois dons (écriture, jugement, prophétie) forment l'équipement complet du prophète.

**yaqūla** (qu'il dise) est l'inaccompli subjonctif de qāla, gouverné par thumma (puis). L'enchaînement an yu'tī-hu... thumma yaqūla pose une succession logique : Dieu donne, puis l'humain dirait — la négation initiale (mā kāna) porte sur cette succession. Lane's : qāla = « to say, to utter speech ».

**li-l-nāsi** (aux gens) est le complément d'attribution introduit par li- (à) — destinataires du faux propos. al-nās est le collectif désignant l'ensemble des humains.

**kūnū** (soyez) est l'impératif pluriel de kāna. Verbe d'existence qui commande l'identification à un état (ici : ʿibād, serviteurs). L'impératif sort du locuteur (le faux prophète hypothétique) et atteint les auditeurs.

**ʿibādan** (serviteurs) est le pluriel indéfini de ʿabd — celui qui est au service d'un autre. Construction kūnū ʿibādan lī (« soyez serviteurs pour moi ») + min dūni allāh (« à l'écart de Dieu ») : sujétion personnelle d'un humain à un autre, en remplacement de la sujétion à Dieu. Le contexte (lī = à moi, opposé à Dieu) écarte le sens cultuel (adoration) au profit du sens d'allégeance personnelle.

**dūni** (à l'écart de) est le nom de position relative — « en dessous, à côté ». Dans la locution min dūni X (« d'en deçà de X »), c'est une expression idiomatique signifiant « à un rang inférieur à X » ou « à l'écart de X ». Sens préservé : non pas « à l'exclusion » (terme juridique) mais l'écart positionnel par rapport à Dieu.

**allāhi** (Dieu) est en cas génitif après min dūni — Dieu est la référence à laquelle le faux service s'oppose.

**kūnū rabbāniyyīn** : second kūnū parallèle au précédent, mais introduit cette fois le statut juste — rabbāniyyīn. Le terme **rabbāniyyīna** (voués au Seigneur) est un adjectif pluriel construit sur rabb (Seigneur) avec le suffixe intensif -ānī, qui marque une relation forte et exclusive — « celui qui est intensément du Seigneur ». Lane's : rabbānī = « one who devotes himself to religious services or applies himself to acts of devotion ; who possesses a knowledge of God ; a learned man, a teacher of others, who nourishes people with the small matters of knowledge before the great ». Le verset explicite immédiatement la fonction par bi-mā... — la dévotion s'incarne dans l'enseignement et l'étude.

**kuntum** (vous étiez) est l'accompli pluriel 2e personne de kāna. Suivi de l'inaccompli tuʿallimūn, il forme une périphrase du passé continu (« vous étiez en train de »). Auxiliaire de temps qui inscrit l'action dans une durée passée prolongée.

**tuʿallimūn** (enseigner) est l'inaccompli de la Forme II ʿallama — faire savoir, transmettre la connaissance. La Forme II est causative : ʿalima (savoir) → ʿallama (faire savoir, enseigner). Lane's : ʿallama = « he made him to know, taught him ».

**al-kitāba** (l'écriture) seconde occurrence — même corpus textuel révélé qu'à la position 7. Compatible avec le verbe transitif tuʿallimūn (enseigner X à qq'un) — ici X = l'écriture.

**kuntum** (vous étiez) seconde occurrence parallèle — auxiliaire du passé continu qui introduit tadrusūn.

**tadrusūn** (étudier) est l'inaccompli pluriel 2e personne de darasa. Lane's : darasa al-kitāba = « to read or to read repeatedly, or to study, in order to remember ; or to read and learn ». Acte de lire et relire un texte avec effort pour le retenir et le maîtriser. Action durative parallèle à l'enseignement — la dyade enseigner/étudier (ʿallama / darasa) constitue la fonction du rabbānī.

§JUSTIFICATION§

**être** (kāna, kūnū, kuntum) — Le sens retenu est « Être/Existence ». Le mot « être » est choisi car kāna est le verbe copulatif de base de l'arabe. Pour la forme négative mā kāna li-X an Y, la traduction « il n'a pas été pour X que Y » préserve la négation d'existence et la structure du verbe accompli. Pour kūnū (impératif) la traduction « soyez » est l'équivalent direct. Pour kuntum + verbe inaccompli, la périphrase « vous étiez en train de » rend le passé continu en français.

**humain** — Le sens retenu est « Corps/Anatomie ». Le mot « humain » est choisi car il rend bashar dans sa dimension générique, sans qualifier la fonction. L'alternative « être humain » est écartée car l'expression française est plus lourde sans gain de précision ; le simple « humain » suffit.

**apporter** (yu'tī-hu) — Le sens retenu est « Venue/Arrivée ». Le mot « apporter » est choisi car la Forme IV ātā transforme l'arrivée intransitive en transmission active : faire venir une chose à quelqu'un. L'alternative « donner » est écartée car « donner » suggère un transfert de propriété définitif, alors que ātā désigne plus précisément l'action de remettre/transmettre — Dieu apporte/remet l'écriture sans que celle-ci devienne propriété humaine.

**Dieu** (allāhu, allāhi) — Le sens retenu est « Divinité ». Le mot « Dieu » est choisi par convention de toutes nos traductions (Allah → Dieu) pour rendre le nom divin accessible au lecteur francophone sans effet d'altérité linguistique.

**l'écriture** (al-kitāb, ×2) — Le sens retenu est « Livre/Écrit ». Le mot « écriture » est choisi car il rend la dimension du corpus textuel révélé — ce qui a été écrit, ce qui est inscrit dans le texte. L'alternative « livre » est écartée car « livre » matérialise et singularise un objet identifié, alors que kitāb désigne plus largement le contenu textuel comme catégorie. Cohérent avec V48-V78.

**le jugement** (al-ḥukm) — Le sens retenu est « Jugement/Décision ». Le mot « jugement » est choisi car il rend l'acte de trancher et de décider — la faculté du juge ou du prophète. L'alternative « sagesse » est écartée car la sagesse en français correspond à ḥikma (forme nominale différente, état contemplatif) et non à ḥukm (acte de jugement). L'alternative « sentence » est trop juridique-restrictive ; « décision » est possible mais « jugement » couvre mieux l'éventail (juger entre les gens, prendre une décision réfléchie).

**la prophétie** — Le sens retenu est « Prophétie ». Le mot « prophétie » est choisi car il rend nubuwwa comme fonction et office, pas comme nouvelle ponctuelle. L'alternative « prophétisme » est trop technique-académique.

**dire** (yaqūla) — Le sens retenu est « Parole/Énonciation ». Le mot « dire » est choisi car c'est l'équivalent direct de qāla — verbe simple d'énonciation. L'alternative « affirmer » est écartée car elle ajoute une note d'assertion qui n'est pas dans qāla (verbe neutre).

**aux gens** (li-l-nās) — Le sens retenu est « Humanité/Peuple ». Le mot « gens » est choisi car il rend al-nās dans sa dimension collective générique. L'alternative « êtres humains » est plus lourde sans gain de précision ; « peuple » suggère une communauté politique unifiée que al-nās ne porte pas.

**serviteurs** (ʿibādan) — Le sens retenu est « Servitude/Esclavage ». Le mot « serviteurs » est choisi car il rend ʿibād dans sa dimension d'allégeance personnelle (être au service de quelqu'un) — sens activé par le contexte lī (à moi) opposé à dūni allāh. L'alternative « adorateurs » est écartée car le contexte n'est pas cultuel mais relationnel-de-sujétion.

**à l'écart de** (dūni) — Le sens retenu est « Infériorité/En-dessous ». L'expression « à l'écart de » est choisie car elle préserve la position-position-sous (en deçà, à côté) sans charge juridique. L'alternative « à l'exclusion de » est écartée car « exclusion » est un terme juridico-administratif qui ajoute une notion de bannissement absent du dūn — qui exprime simplement la position en dessous ou à côté.

**des hommes voués au Seigneur** (rabbāniyyīna) — Le sens retenu est « Éducation/Accompagnement ». L'expression « des hommes voués au Seigneur » est choisie car elle restitue à la fois la racine rabb (Seigneur) et le suffixe intensif -ānī (relation forte et exclusive — voués). La fonction éducative explicitée par le verset (enseigner et étudier) est l'incarnation pratique de ce vœu. L'alternative « des maîtres parfaits » est écartée car « maître » suggère la maîtrise/possession (rabb au sens de propriétaire) sans la dimension de dévouement, et « parfait » est une qualification absente du texte.

**enseigner** (tuʿallimūn) — Le sens retenu est « Savoir/Connaissance ». Le mot « enseigner » est choisi car la Forme II causative ʿallama signifie précisément « faire savoir, transmettre la connaissance ». L'alternative « instruire » est moins fréquente en français courant.

**étudier** (tadrusūn) — Le sens retenu est « Étude/Lecture répétée ». Le mot « étudier » est choisi car il rend la lecture répétée et soutenue qui mène à l'apprentissage par cœur. L'alternative « apprendre » est trop générale ; « lire et relire » est plus paraphrastique.

§CRITIQUE§

**il n'a pas été pour un humain vs « il ne convient pas à un être humain »** : Hamidullah rend mā kāna li-bashar par « il ne convient pas à un être humain ». Le verbe « convenir » introduit une notion de bienséance/convenance morale absente du texte arabe. mā kāna est une simple négation d'existence à l'accompli — « cela n'a pas été le cas pour un humain ». Le texte arabe nie la possibilité historique et logique d'un événement, sans jugement de convenance. Le glissement transforme un constat ontologique (ce n'est pas le cas) en un verdict moral (ce ne serait pas convenable) — deux registres différents.

**lui apporte vs « ait honoré du »** : Hamidullah rend yu'tī-hu par « ait honoré du ». Trois transformations : (1) le verbe simple ātā (apporter, remettre) devient « honorer », ajoutant une qualification de prestige absente du texte ; (2) la forme « du Livre » (avec « du » partitif) sépare l'humain du don, alors que la structure arabe est directe (yu'tī-hu al-kitāba = il lui apporte l'écriture en accusatif) ; (3) le passé composé « ait honoré » présente le don comme un fait accompli alors que l'inaccompli yu'tī désigne ici une éventualité hypothétique sous le mā kāna an. Le sens global change : Hamidullah décrit une élection prestigieuse, le texte arabe décrit une transmission factuelle hypothétique.

**le jugement vs « la sagesse »** : Hamidullah rend al-ḥukm par « la sagesse ». Confusion morphologique entre al-ḥukm (le jugement, l'acte de trancher) et al-ḥikma (la sagesse, état contemplatif) — formes nominales différentes de la même racine ḥ-k-m mais avec des sens distincts dans le Lane's. Le texte arabe utilise al-ḥukm (la décision/jugement) qui désigne une faculté pratique active, pas une disposition intérieure de réflexion sage. La différence change la nature du don : Hamidullah suggère un attribut moral interne (sagesse comme vertu), le texte arabe désigne une compétence pratique (la capacité de trancher entre les gens).

**à l'écart de Dieu vs « à l'exclusion d'Allah »** : Hamidullah rend min dūni allāh par « à l'exclusion d'Allah ». « Exclusion » est un terme juridico-administratif qui implique une procédure de bannissement actif. dūn désigne simplement une position en dessous ou à côté — la locution min dūni X signifie littéralement « d'en deçà de X ». La différence change le registre : Hamidullah décrit un acte juridique d'exclusion (bannir Dieu de la relation), le texte arabe décrit un positionnement spatial-relationnel (se placer à un rang qui ignore Dieu).

**des hommes voués au Seigneur vs « des maîtres parfaits »** : Hamidullah rend rabbāniyyīn par « des maîtres parfaits ». Deux glissements : (1) la racine rabb (Seigneur) disparaît au profit de « maître » qui suggère la maîtrise/possession (rabb au sens d'autorité-sur), alors que le suffixe -ānī rattache l'adjectif au Seigneur comme objet de dévotion, pas à la maîtrise comme attribut ; (2) « parfaits » ajoute une qualification de perfection absente du texte. Le sens global change : Hamidullah décrit un statut élevé d'expertise (« maîtres parfaits »), le texte arabe décrit une relation de dévouement à Dieu qui s'incarne dans l'enseignement et l'étude (lue dans la suite immédiate du verset).

**vous étiez en train d'enseigner vs « vous enseignez »** : Hamidullah rend kuntum tuʿallimūn par « vous enseignez ». La périphrase kāna + inaccompli est en arabe une construction du passé continu (durée prolongée dans le passé). Hamidullah neutralise ce temps composé en présent simple, perdant la dimension durative. La différence change la temporalité : Hamidullah décrit une activité actuelle ponctuelle, le texte arabe décrit une pratique continue inscrite dans la durée — c'est précisément cette continuité qui justifie la qualification rabbānī (la dévotion s'inscrit dans une pratique durable, pas dans un acte ponctuel).`;

  await db.from('verse_analyses').upsert({
    verse_id: vid,
    translation_arab,
    translation_explanation,
    full_translation,
    segments
  }, { onConflict: 'verse_id' });

  console.log('V79 translation + segments + explanation ✅');

  // ===== 5. word_daily pour drs (3 phrases) =====
  const { data: existing } = await db.from('word_daily').select('id').eq('analysis_id', 1300);
  if (!existing || existing.length === 0) {
    await db.from('word_daily').insert([
      { analysis_id: 1300, arabic: '', phon: '', french: 'Il étudie le livre tous les soirs pour préparer son examen.', sense: 'étudier' },
      { analysis_id: 1300, arabic: '', phon: '', french: 'Avant la conférence, elle a étudié les notes plusieurs fois pour bien les retenir.', sense: 'étudier' },
      { analysis_id: 1300, arabic: '', phon: '', french: "L'élève étudie sa leçon en la relisant à voix haute.", sense: 'étudier' }
    ]);
    console.log('word_daily drs : 3 phrases ajoutées ✅');
  } else {
    console.log('word_daily drs : déjà ' + existing.length + ' phrases');
  }

  // ===== 6. Logs récap =====
  console.log('\n[kwn] 8 sens → 3 concepts');
  console.log('  Être/Existence → RETENU (auxiliaire copulatif)');
  console.log('[bshr] 7 sens → 3 concepts');
  console.log('  Corps/Anatomie → RETENU (humain générique)');
  console.log('[aty] 6 sens → 2 concepts');
  console.log('  Venue/Arrivée → RETENU (Forme IV ātā = apporter)');
  console.log('[alh] 16 sens → 5 concepts');
  console.log('  Divinité → RETENU');
  console.log('[ktb] 36 sens → 8 concepts');
  console.log('  Livre/Écrit → RETENU (cohérent V48-V78)');
  console.log('[hkm] 7 sens → 4 concepts');
  console.log('  Jugement/Décision → RETENU (vs Sagesse = ḥikma)');
  console.log('[nba] 6 sens → 3 concepts');
  console.log('  Prophétie → RETENU');
  console.log('[qwl] 10 sens → 4 concepts');
  console.log('  Parole/Énonciation → RETENU');
  console.log('[nws] 7 sens → 4 concepts');
  console.log('  Humanité/Peuple → RETENU');
  console.log('[ebd] 15 sens → 5 concepts');
  console.log('  Servitude/Esclavage → RETENU (allégeance vs adoration)');
  console.log('[dwn] 5 sens → 3 concepts');
  console.log('  Infériorité/En-dessous → RETENU (à l\'écart de)');
  console.log('[rbb] 27 sens → 9 concepts');
  console.log('  Éducation/Accompagnement → RETENU (rabbānī = voué au Seigneur, fonction éducative)');
  console.log('[elm] 22 sens → 6 concepts');
  console.log('  Savoir/Connaissance → RETENU (Forme II causative)');
  console.log('[drs] 13 sens → 5 concepts (enrichi)');
  console.log('  Étude/Lecture répétée → RETENU');

  console.log('\nVERSET 3:79 — TERMINÉ');
  console.log('  Traduction : ' + translation_arab);
}

run().catch(console.error);
