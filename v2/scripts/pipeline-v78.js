const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 371;

  // ========================================================================
  // ÉTAPE 3 — VWA : une entrée par occurrence de mot important
  // ========================================================================

  // === farīqan (pos=6) — frq (ف ر ق) ===
  const vwa_frq = {
    sense_chosen: 'groupe',
    concept_chosen: 'Groupe/Partie',
    concepts: {
      'Groupe/Partie': {
        status: 'retenu',
        senses: ['groupe', 'partie'],
        proof_ctx: "Farīqan est un nom accusatif indéfini après min-hum (parmi eux) avec la- d'emphase — il désigne un sous-ensemble identifiable au sein d'une collectivité plus large. Le contexte rend absurde le sens « séparation » (agent abstrait qui n'a pas de sujet humain), tandis que « groupe » décrit précisément cette partie détachée du tout qui agit selon le verset (tordre les langues avec l'écriture)."
      },
      'Séparation/Distinction': {
        status: 'nul',
        senses: ['séparer', 'distinguer', 'diviser', 'Furqān'],
        proof_ctx: "Farīqan n'est pas l'acte de séparer mais son résultat personnifié — le sous-groupe qui en résulte. La forme faʿīl n'est pas celle de l'acte abstrait."
      }
    }
  };

  // === yalwūna (pos=7) — lwy (ل و ي) ===
  const vwa_lwy = {
    sense_chosen: 'tordre',
    concept_chosen: 'Torsion/Déviation',
    concepts: {
      'Torsion/Déviation': {
        status: 'retenu',
        senses: ['tordre', 'détourner', 'courber', 'nier sa dette'],
        proof_ctx: "Yalwūna est un verbe à l'inaccompli actif Forme I de la racine l-w-y, 3ème personne du masculin pluriel. Appliqué à alsinatahum (leurs langues) + bi-l-kitāb (avec l'écriture), il décrit un acte physique et volontaire : tordre les langues en articulant l'écriture, c'est-à-dire altérer la prononciation du texte pour induire en erreur. L'image étymologique de la torsion (comme on tord un brin) est ici conservée et dirigée vers la déformation vocale."
      },
      'Drapeau/Étendard': {
        status: 'nul',
        senses: ['drapeau'],
        proof_ctx: "Sens nominal concret, hors contexte grammatical (le verset a un verbe conjugué, non un nom)."
      }
    }
  };

  // === alsinatahum (pos=8) — lsn (ل س ن) ===
  const vwa_lsn = {
    sense_chosen: 'langue',
    concept_chosen: 'Langue/Organe',
    concepts: {
      'Langue/Organe': {
        status: 'retenu',
        senses: ['langue', 'organe de la parole'],
        proof_ctx: "Alsinatahum est le pluriel de lisān (langue) + suffixe possessif -hum (leur). Dans la construction yalwūna alsinatahum bi-l-kitāb (ils tordent leurs langues avec l'écriture), c'est l'organe physique qui est tordu en articulant — le sens premier concret est ici le seul compatible avec le verbe « tordre »."
      },
      'Parole/Discours': {
        status: 'nul',
        senses: ['parole', 'propos tenus'],
        proof_ctx: "« Ils tordent leurs paroles » serait possible en français mais le texte parle de l'organe (alsinatahum, pluriel concret d'organes), et le verbe yalwūna s'applique littéralement à la matière qu'on courbe."
      },
      "Langage/Mode d'expression": {
        status: 'nul',
        senses: ['langage', 'idiome'],
        proof_ctx: "Le pluriel alsinatahum désigne les organes de chacun, non le système linguistique collectif."
      },
      'Éloquence/Clarté': {
        status: 'nul',
        senses: ['éloquence', 'clarté du discours'],
        proof_ctx: "L'éloquence est une qualité, pas un objet que l'on tord."
      },
      'Renommée/Rumeur': {
        status: 'nul',
        senses: ['renommée', 'message transmis'],
        proof_ctx: "Sens collectif, incompatible avec le pluriel anatomique concret."
      }
    }
  };

  // === al-kitābi (pos=10, 14, 19) — ktb (ك ت ب) ===
  const vwa_ktb_tmpl = {
    sense_chosen: 'écriture révélée',
    concept_chosen: 'Livre/Écrit',
    concepts: {
      'Livre/Écrit': {
        status: 'retenu',
        senses: ['écriture révélée', 'livre', 'écrit'],
        proof_ctx: "Al-kitāb avec article défini désigne dans ce contexte le corpus scripturaire révélé — ce que Dieu a fait descendre, par opposition à ce que cette faction fabrique avec leurs langues. Cohérent avec V48, V72, V75 qui utilisent le même sens pour le même usage du terme."
      },
      'Écriture/Inscription': {
        status: 'nul',
        senses: ['écrire', 'inscription'],
        proof_ctx: "Désignerait l'acte d'écrire, mais al-kitāb avec article défini renvoie au résultat institué (l'écriture révélée), non à l'acte scriptural ponctuel."
      },
      'Obligation/Décret': {
        status: 'nul',
        senses: ['décret', 'obligation', 'prescription'],
        proof_ctx: "Ce sens s'active dans les constructions kutiba ʿalā (il a été prescrit à) ; ici, al-kitāb nominal défini = le corpus, pas le décret."
      },
      'Assemblage/Couture': {
        status: 'nul',
        senses: ['coudre', 'assembler'],
        proof_ctx: "Sens physique premier de la racine ; hors contexte de révélation."
      }
    }
  };

  // === taḥsabū (pos=12) — hsb (ح س ب) ===
  const vwa_hsb = {
    sense_chosen: 'penser',
    concept_chosen: 'Calcul/Évaluation',
    concepts: {
      'Calcul/Évaluation': {
        status: 'retenu',
        senses: ['compter', 'estimer', 'penser', 'compte'],
        proof_ctx: "Li-taḥsabūhu est une subordonnée de but (li- = pour que) + inaccompli 2MP + suffixe -hu (le) : « pour que vous le comptiez/estimiez ». Dans cette construction avec l'objet direct + mina l-kitāb (de l'écriture), hisāb désigne le jugement intérieur qui classe un objet dans une catégorie — « estimer que cela fait partie de l'écriture ». Le français « penser » rend ce jugement évaluatif qui fonde une croyance erronée."
      },
      'Suffisance': {
        status: 'nul',
        senses: ['suffire', 'suffisant'],
        proof_ctx: "Ce sens requiert une construction différente (ḥasbī = cela me suffit) ; le verbe taḥsabūhu ici avec objet direct est le verbe d'évaluation, pas de suffisance."
      },
      'Sens isolé/Noblesse': {
        status: 'nul',
        senses: ['noblesse'],
        proof_ctx: "Sens isolé sans rapport avec le verbe ici conjugué."
      }
    }
  };

  // === yaqūlūna (pos=21, 33) — qwl (ق و ل) ===
  const vwa_qwl_tmpl = {
    sense_chosen: 'dire',
    concept_chosen: 'Parole/Énonciation',
    concepts: {
      'Parole/Énonciation': {
        status: 'retenu',
        senses: ['dire', 'prononcer', 'énoncer'],
        proof_ctx: "Yaqūlūna est un verbe à l'inaccompli actif Forme I, 3ème personne du masculin pluriel, qui introduit le discours direct qui suit (huwa min ʿindi allāhi). Sens premier et neutre : prononcer une parole. Cohérent avec V72, V75 qui utilisent « dire » pour le même verbe."
      },
      'Pensée/Avis': {
        status: 'nul',
        senses: ['penser', 'opinion', 'avis'],
        proof_ctx: "La construction yaqūlu X (avec discours direct) exprime la parole prononcée, non l'avis intérieur."
      },
      'Corps/Anatomie': {
        status: 'nul',
        senses: ['taille', 'membre'],
        proof_ctx: "Sens dérivé rare, hors contexte."
      },
      'Sens isolé/Puissance': {
        status: 'nul',
        senses: ['puissance'],
        proof_ctx: "Hors contexte."
      }
    }
  };

  // === ʿindi (pos=24, 30) — end (ع ن د) ===
  const vwa_end_tmpl = {
    sense_chosen: 'auprès de',
    concept_chosen: 'Proximité/Présence',
    concepts: {
      'Proximité/Présence': {
        status: 'retenu',
        senses: ['auprès de', 'chez', 'près de'],
        proof_ctx: "ʿindi est un nom en état construit (idāfa) fonctionnant comme préposition de proximité avec allāhi (auprès de Dieu). La construction min ʿindi allāhi = « de la part de Dieu, provenant de Dieu » — formule idiomatique pour attribuer l'origine d'une parole ou d'un bien à Dieu. Le test de naturalité donne : « cela vient d'auprès de Dieu » ✅."
      },
      'Opinion/Jugement': {
        status: 'nul',
        senses: ['selon'],
        proof_ctx: "Ce sens s'active dans ʿindī = « selon moi, à mon avis » ; ici ʿindi allāhi est locatif/provenance, non perspective subjective."
      },
      'Déviation/Obstination': {
        status: 'nul',
        senses: ['dévier', "s'obstiner", 'aller à l\'encontre', "s'éloigner"],
        proof_ctx: "Sens verbal de ʿanada (Forme I) ; la construction ici est nominale, hors de ce champ."
      }
    }
  };

  // === allāhi (pos=25, 31, 35) — alh (ا ل ه) ===
  const vwa_alh_tmpl = {
    sense_chosen: 'Dieu',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['Dieu', 'divinité'],
        proof_ctx: "Allāhi est le nom propre divin au génitif, second terme de l'idāfa avec ʿindi. Nom propre désignant l'être divin unique dans le Coran — sens retenu par tous les versets précédents de la sourate."
      },
      'Adoration/Dévotion': {
        status: 'nul',
        senses: ['adorer', 'dévotion'],
        proof_ctx: "Sens verbal de la racine ; ici Allāh est le Nom, pas l'acte d'adorer."
      },
      'Refuge/Protection': {
        status: 'nul',
        senses: ['refuge', 'protection'],
        proof_ctx: "Sens dérivé ; hors contexte nominal."
      },
      'Domination': {
        status: 'nul',
        senses: ['dominer'],
        proof_ctx: "Sens physique éloigné ; hors contexte."
      },
      'Détresse': {
        status: 'nul',
        senses: ['détresse'],
        proof_ctx: "Sens d'un verbe distinct ; hors contexte."
      }
    }
  };

  // === al-kadhiba (pos=36) — kḏb (ك ذ ب) ===
  const vwa_kdhb = {
    sense_chosen: 'mensonge',
    concept_chosen: 'Mensonge/Fausseté',
    concepts: {
      'Mensonge/Fausseté': {
        status: 'retenu',
        senses: ['mentir', 'mensonge', 'démentir', 'nier la vérité', 'accuser de mensonge', 'menteur'],
        proof_ctx: "Al-kadhiba est un nom défini (l'article al- individualise la référence) à l'accusatif comme complément d'objet direct de yaqūlūna. Le singulier défini renvoie à LE mensonge — la doctrine mensongère spécifique que cette faction énonce (l'attribution d'un propos à Dieu qui n'en vient pas). Cohérent avec V75 qui utilise le même sens pour le même usage du singulier défini."
      },
      'Sens isolé/Illusion': {
        status: 'nul',
        senses: ['illusion'],
        proof_ctx: "Sens concret éloigné, hors contexte."
      }
    }
  };

  // === yaʿlamūna (pos=39) — elm (ع ل م) ===
  const vwa_elm = {
    sense_chosen: 'savoir',
    concept_chosen: 'Savoir/Connaissance',
    concepts: {
      'Savoir/Connaissance': {
        status: 'retenu',
        senses: ['savoir', 'connaître', 'connaissance', 'science'],
        proof_ctx: "Yaʿlamūna est un verbe à l'inaccompli actif, 3ème personne du masculin pluriel. La proposition wa-hum yaʿlamūna (alors qu'ils savent) est une circonstancielle d'état (ḥāl) qui indique la conscience claire de ceux qui mentent : ils savent que ce qu'ils disent n'est pas vrai. Sens cognitif pur. Cohérent avec V75."
      },
      'Marque/Signe': {
        status: 'nul',
        senses: ['marque', 'signe'],
        proof_ctx: "Sens nominal dérivé de ʿalāma ; hors contexte verbal."
      },
      'Monde/Création': {
        status: 'nul',
        senses: ['monde'],
        proof_ctx: "Sens dérivé (ʿālam = monde) ; hors contexte."
      },
      'Sens isolé/Enseigner': {
        status: 'nul',
        senses: ['enseigner'],
        proof_ctx: "La Forme II (ʿallama = enseigner) est distincte de la Forme I ici employée."
      },
      'Sens isolé/Homonyme': {
        status: 'nul',
        senses: ['homonyme'],
        proof_ctx: "Hors contexte."
      },
      'Lieu/Géographie': {
        status: 'nul',
        senses: ['lieu'],
        proof_ctx: "Hors contexte."
      }
    }
  };

  // ========================================================================
  // INSÉRER LES 15 VWA (une par occurrence, même si racine répétée)
  // ========================================================================
  // Supprimer les anciennes VWA
  await db.from('verse_word_analyses').delete().eq('verse_id', vid);

  const vwaEntries = [
    { position: 6, word_key: 'frq', axes: vwa_frq },
    { position: 7, word_key: 'lwy', axes: vwa_lwy },
    { position: 8, word_key: 'lsn', axes: vwa_lsn },
    { position: 10, word_key: 'ktb', axes: vwa_ktb_tmpl },
    { position: 12, word_key: 'hsb', axes: vwa_hsb },
    { position: 14, word_key: 'ktb', axes: vwa_ktb_tmpl },
    { position: 19, word_key: 'ktb', axes: vwa_ktb_tmpl },
    { position: 21, word_key: 'qwl', axes: vwa_qwl_tmpl },
    { position: 24, word_key: 'end', axes: vwa_end_tmpl },
    { position: 25, word_key: 'alh', axes: vwa_alh_tmpl },
    { position: 30, word_key: 'end', axes: vwa_end_tmpl },
    { position: 31, word_key: 'alh', axes: vwa_alh_tmpl },
    { position: 33, word_key: 'qwl', axes: vwa_qwl_tmpl },
    { position: 35, word_key: 'alh', axes: vwa_alh_tmpl },
    { position: 36, word_key: 'kḏb', axes: vwa_kdhb },
    { position: 39, word_key: 'elm', axes: vwa_elm }
  ];

  for (const e of vwaEntries) {
    await db.from('verse_word_analyses').insert({
      verse_id: vid,
      position: e.position,
      word_key: e.word_key,
      sense_chosen: e.axes.sense_chosen,
      analysis_axes: e.axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v3-maison-sourate3'
    });
  }
  console.log('VWA V78 : 16 entrées créées ✅');

  // ========================================================================
  // ÉTAPE 4 — SEGMENTS / TRADUCTIONS / EXPLICATION
  // ========================================================================

  const newSegments = [
    { position: 1, phon: 'wa', arabic: 'وَ', fr: 'Et', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 2, phon: 'inna', arabic: 'إِنَّ', fr: 'en vérité,', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 3, phon: 'min', arabic: 'مِنْ', fr: 'parmi', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 4, phon: 'hum', arabic: 'هُمْ', fr: 'eux', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 5, phon: 'la', arabic: 'لَ', fr: 'certes', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 6, phon: 'farīqan', arabic: 'فَرِيقًا', fr: 'un groupe', is_particle: false, word_key: 'frq', sense_retenu: 'groupe', pos: 'nom' },
    { position: 7, phon: 'yalwūna', arabic: 'يَلْوُۥنَ', fr: 'qui tordent', is_particle: false, word_key: 'lwy', sense_retenu: 'tordre', pos: 'verbe' },
    { position: 8, phon: 'alsinatahum', arabic: 'أَلْسِنَتَهُم', fr: 'leurs langues', is_particle: false, word_key: 'lsn', sense_retenu: 'langue', pos: 'nom' },
    { position: 9, phon: 'bi', arabic: 'بِ', fr: 'avec', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 10, phon: 'al-kitābi', arabic: 'ٱلْكِتَـٰبِ', fr: "l'écriture", is_particle: false, word_key: 'ktb', sense_retenu: 'écriture révélée', pos: 'nom' },
    { position: 11, phon: 'li', arabic: 'لِ', fr: 'pour que', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 12, phon: 'taḥsabūhu', arabic: 'تَحْسَبُوهُ', fr: 'vous pensiez que cela', is_particle: false, word_key: 'hsb', sense_retenu: 'penser', pos: 'verbe' },
    { position: 13, phon: 'mina', arabic: 'مِنَ', fr: 'est de', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 14, phon: 'al-kitābi', arabic: 'ٱلْكِتَـٰبِ', fr: "l'écriture", is_particle: false, word_key: 'ktb', sense_retenu: 'écriture révélée', pos: 'nom' },
    { position: 15, phon: 'wa', arabic: 'وَ', fr: '— et', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 16, phon: 'mā', arabic: 'مَا', fr: 'cela n\'est pas', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 17, phon: 'huwa', arabic: 'هُوَ', fr: '', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 18, phon: 'mina', arabic: 'مِنَ', fr: 'de', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 19, phon: 'al-kitābi', arabic: 'ٱلْكِتَـٰبِ', fr: "l'écriture ;", is_particle: false, word_key: 'ktb', sense_retenu: 'écriture révélée', pos: 'nom' },
    { position: 20, phon: 'wa', arabic: 'وَ', fr: 'et', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 21, phon: 'yaqūlūna', arabic: 'يَقُولُونَ', fr: 'ils disent :', is_particle: false, word_key: 'qwl', sense_retenu: 'dire', pos: 'verbe' },
    { position: 22, phon: 'huwa', arabic: 'هُوَ', fr: '« cela vient', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 23, phon: 'min', arabic: 'مِنْ', fr: 'd\'', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 24, phon: 'ʿindi', arabic: 'عِندِ', fr: 'auprès de', is_particle: false, word_key: 'end', sense_retenu: 'auprès de', pos: 'nom' },
    { position: 25, phon: 'allāhi', arabic: 'ٱللَّهِ', fr: 'Dieu »,', is_particle: false, word_key: 'alh', sense_retenu: 'Dieu', pos: 'nom' },
    { position: 26, phon: 'wa', arabic: 'وَ', fr: '— et', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 27, phon: 'mā', arabic: 'مَا', fr: 'cela ne vient pas', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 28, phon: 'huwa', arabic: 'هُوَ', fr: '', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 29, phon: 'min', arabic: 'مِنْ', fr: 'd\'', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 30, phon: 'ʿindi', arabic: 'عِندِ', fr: 'auprès de', is_particle: false, word_key: 'end', sense_retenu: 'auprès de', pos: 'nom' },
    { position: 31, phon: 'allāhi', arabic: 'ٱللَّهِ', fr: 'Dieu ;', is_particle: false, word_key: 'alh', sense_retenu: 'Dieu', pos: 'nom' },
    { position: 32, phon: 'wa', arabic: 'وَ', fr: 'et', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 33, phon: 'yaqūlūna', arabic: 'يَقُولُونَ', fr: 'ils disent', is_particle: false, word_key: 'qwl', sense_retenu: 'dire', pos: 'verbe' },
    { position: 34, phon: 'ʿalā', arabic: 'عَلَى', fr: 'sur', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 35, phon: 'allāhi', arabic: 'ٱللَّهِ', fr: 'Dieu', is_particle: false, word_key: 'alh', sense_retenu: 'Dieu', pos: 'nom' },
    { position: 36, phon: 'al-kadhiba', arabic: 'ٱلْكَذِبَ', fr: 'le mensonge,', is_particle: false, word_key: 'kḏb', sense_retenu: 'mensonge', pos: 'nom' },
    { position: 37, phon: 'wa', arabic: 'وَ', fr: 'alors qu\'', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 38, phon: 'hum', arabic: 'هُمْ', fr: 'eux', is_particle: true, word_key: null, sense_retenu: null, pos: null },
    { position: 39, phon: 'yaʿlamūna', arabic: 'يَعْلَمُونَ', fr: 'savent.', is_particle: false, word_key: 'elm', sense_retenu: 'savoir', pos: 'verbe' }
  ];

  // Hamidullah officiel pour 3:78
  const full_translation = "Et il y a parmi eux certains qui roulent leurs langues en lisant le Livre pour vous faire croire que cela provient du Livre, alors qu'il n'est point du Livre ; et ils disent : « Ceci vient d'Allah », alors qu'il ne vient point d'Allah ; ils disent sciemment des mensonges contre Allah.";

  // Notre traduction étymologique
  const translation_arab = "Et en vérité parmi eux un groupe qui tord leurs langues avec l'écriture pour que vous pensiez que cela est de l'écriture — et cela n'est pas de l'écriture ; et ils disent : « cela vient d'auprès de Dieu », — et cela ne vient pas d'auprès de Dieu ; et ils disent sur Dieu le mensonge, alors qu'eux savent.";

  // ========================================================================
  // §DEMARCHE§ — un mot par paragraphe
  // ========================================================================
  const demarche = `§DEMARCHE§

Ce verset prolonge la description de la faction hostile entamée au verset 75 et 77 : le groupe qui trahit ses engagements est ici identifié par un procédé précis — déformer la prononciation de l'écriture révélée pour faire passer ses propres propos pour des paroles divines. Le verset énonce trois fois le démenti direct : ce n'est pas de l'écriture, cela ne vient pas d'auprès de Dieu, et ils le savent.

**Inna** (en vérité) est une particule d'affirmation et de mise en relief qui place ce qui suit sous le signe de la certitude. Elle régit l'accusatif sur le mot qui la suit, ici farīqan.

**Min-hum** (parmi eux) est la préposition min (de, parmi) + le pronom suffixe 3MP -hum. Elle indique que ce qui est décrit est un sous-ensemble d'une population plus large mentionnée au verset précédent — la structure partitive.

**La-farīqan** (certes un groupe) est la particule d'emphase la- + le nom farīqan au masculin singulier accusatif indéfini. D'après les sources étymologiques (Lane's Arabic-English Lexicon), la racine ف ر ق (f-r-q) désigne la séparation et la distinction ; farīq (forme faʿīl) est le résultat de cette séparation personnifié en sous-groupe — une partie détachée du tout. Accolé à min-hum, il identifie ce sous-groupe au sein de la population visée.

**Yalwūna** (tordent) est un verbe à l'inaccompli actif Forme I de la racine ل و ي (l-w-y), 3ème personne du masculin pluriel. D'après les sources étymologiques, la racine l-w-y désigne l'acte de tordre, de courber ce qui était droit. Ici elle décrit une action physique dirigée vers un objet (alsinatahum) et articulée avec un instrument (bi-l-kitāb). L'inaccompli exprime l'action habituelle et continue de ce groupe.

**Alsinatahum** (leurs langues) est le pluriel de lisān (racine ل س ن, l-s-n), masculin pluriel accusatif en position d'objet direct de yalwūna, avec le pronom suffixe -hum (leur). D'après les sources étymologiques, lisān désigne d'abord l'organe anatomique de la parole ; son pluriel alsina renvoie à ces organes pris individuellement. La présence du pronom possessif collectif -hum renforce l'image concrète : chacun tord la sienne.

**Bi-l-kitābi** (avec l'écriture) est formé de la préposition bi (avec, au moyen de) + l'article défini al- + le nom kitāb au génitif. D'après les sources étymologiques, la racine ك ت ب (k-t-b) désigne l'assemblage, l'écrit, le livre ; al-kitāb avec article défini renvoie dans le Coran au corpus scripturaire révélé. La préposition bi- indique l'objet sur lequel porte la torsion : c'est en articulant le texte révélé qu'ils en altèrent la prononciation.

**Li-taḥsabūhu** (pour que vous pensiez que cela) : li- est la conjonction de but (afin que). **Taḥsabū** est un verbe à l'inaccompli actif Forme I de la racine ح س ب (ḥ-s-b), 2ème personne du masculin pluriel, avec le pronom suffixe -hu (le, cela). D'après les sources étymologiques, ḥasaba = compter, calculer, évaluer ; avec un objet direct et un attribut introduit par min, il signifie estimer que X est de la catégorie Y. La finalité de la torsion des langues est ici révélée : induire l'auditeur à classer faussement les propos.

**Mina l-kitābi** (est de l'écriture) est la préposition min (de, faisant partie de) + l'article défini + kitāb au génitif. La construction min al-X après un verbe d'évaluation exprime l'appartenance catégorielle — taḥsabūhu min al-kitāb = « vous estimiez que cela est de l'écriture ».

**Wa-mā huwa mina l-kitābi** (et cela n'est pas de l'écriture) : wa est la coordination circonstancielle, mā est la particule de négation absolue (mā al-nāfiya), huwa est le pronom 3MS sujet (cela), mina l-kitāb reprend la formule précédente. La phrase nominale niée fonctionne comme une circonstancielle d'état (ḥāl) : « alors que cela n'est pas de l'écriture ». Le démenti divin contredit l'estimation qu'ils cherchent à induire.

**Wa-yaqūlūna** (et ils disent) est la coordination wa + verbe à l'inaccompli actif Forme I de la racine ق و ل (q-w-l), 3ème personne du masculin pluriel. D'après les sources étymologiques, qāla = prononcer une parole ; yaqūlu introduit en arabe le discours direct qui suit.

**Huwa min ʿindi allāhi** (cela vient d'auprès de Dieu) : huwa (cela) est le sujet de la phrase nominale, min ʿindi est la préposition de provenance — **ʿindi** (auprès de) est un nom de la racine ع ن د (ʿ-n-d) en état construit avec allāhi. D'après les sources étymologiques, ʿind désigne la proximité — être « chez, auprès de ». Min ʿindi X = « de la part de X, provenant de X » — formule idiomatique pour attribuer l'origine à quelqu'un.

**Allāhi** (Dieu) est le nom propre divin au génitif, second terme de l'idāfa avec ʿindi. ʿIndi allāhi = « auprès de Dieu », localisation métaphorique de l'origine divine.

**Wa-mā huwa min ʿindi allāhi** (et cela ne vient pas d'auprès de Dieu) reprend la même structure de négation que plus haut, appliquée cette fois à la provenance divine. Le parallélisme syntaxique renforce le double démenti : ni textuel (al-kitāb), ni divin (ʿind Allāh).

**Wa-yaqūlūna ʿalā allāhi al-kadhiba** (et ils disent sur Dieu le mensonge) : la troisième occurrence de yaqūlūna introduit cette fois un énoncé non comme discours direct mais comme qualification de l'acte. **ʿAlā allāhi** (sur Dieu) est la préposition ʿalā qui exprime ici l'objet du propos (ils parlent au sujet de Dieu, ils tiennent des propos sur Lui). **Al-kadhiba** (le mensonge) est un nom de la racine ك ذ ب (k-dh-b), masculin singulier accusatif défini, complément d'objet direct de yaqūlūna. D'après les sources étymologiques, kadhib = le contraire de ṣidq (la vérité), dire ce qui ne correspond pas à la réalité. L'article défini al- individualise la référence : le mensonge, c'est-à-dire la doctrine mensongère précise que le verset vient d'exposer (attribuer à Dieu ce qui ne vient pas de Lui).

**Wa-hum yaʿlamūna** (alors qu'eux savent) : wa-hum est la coordination + pronom 3MP (eux, indépendant) en position de sujet topicalisé. **Yaʿlamūna** est un verbe à l'inaccompli actif Forme I de la racine ع ل م (ʿ-l-m), 3ème personne du masculin pluriel. D'après les sources étymologiques, la racine ʿ-l-m désigne la connaissance, le savoir. La proposition wa-hum yaʿlamūna est une circonstancielle d'état (ḥāl) qui accompagne yaqūlūna : elle précise que le mensonge est prononcé en pleine conscience de sa fausseté. L'inaccompli exprime l'état cognitif actuel et permanent.`;

  // ========================================================================
  // §JUSTIFICATION§ — un mot par entrée
  // ========================================================================
  const justification = `§JUSTIFICATION§

**un groupe** — Le sens retenu est « groupe » (Groupe/Partie) de la racine f-r-q. Le mot « groupe » est choisi car farīq désigne une sous-partie identifiable au sein d'une collectivité — une fraction. L'alternative « faction » est possible mais porte une charge politique moderne absente de farīq. « Parti » est écarté comme trop politique. « Fraction » est écarté comme trop mathématique.

**qui tordent** — Le sens retenu est « tordre » (Torsion/Déviation) de la racine l-w-y. Le verbe « tordre » est choisi car il rend l'image concrète étymologique : comme on tord un brin, ils tordent leurs langues pour déformer la parole. L'alternative « détourner » est écartée car elle abstrait l'image en la rendant métaphorique. « Courber » est écarté car moins usuel en français pour cet usage vocal. « Rouler » (Hamidullah) est écarté car c'est une paraphrase interprétative qui n'est pas dans la racine l-w-y.

**leurs langues** — Le sens retenu est « langue » (Langue/Organe) de la racine l-s-n. Le mot « langues » (pluriel) est choisi car alsina est le pluriel anatomique désignant l'organe de chacun. L'alternative « leurs paroles » est écartée : le texte parle concrètement de l'organe qui est tordu, pas de l'abstraction du discours. « Leurs idiomes » est écarté : le pluriel renvoie aux organes de chacun, pas aux systèmes linguistiques.

**avec l'écriture** — Le sens retenu est « écriture révélée » (Livre/Écrit) de la racine k-t-b. L'expression « l'écriture » est choisie car al-kitāb avec l'article défini désigne le corpus scripturaire révélé — l'objet-texte dans sa dimension de contenu révélé, pas l'acte d'écrire. L'alternative « le Livre » est écartée car elle matérialise le Coran en objet-livre physique, alors que le contexte est l'acte de prononciation d'un texte révélé. Cohérent avec V48, V72, V75 qui utilisent « l'écriture » pour le même usage.

**vous pensiez que cela** — Le sens retenu est « penser » (Calcul/Évaluation) de la racine ḥ-s-b. Le verbe « penser » est choisi car taḥsabū désigne ici l'acte intérieur de classement catégoriel — estimer qu'une chose fait partie d'une catégorie. L'alternative « compter » est écartée car trop arithmétique dans ce contexte. « Croire » est écarté car cela déplacerait vers le champ de la foi, alors que ḥisāb reste évaluatif et rationnel. « Estimer » est possible mais plus formel que « penser ».

**ils disent** — Le sens retenu est « dire » (Parole/Énonciation) de la racine q-w-l. Le verbe « dire » est le sens direct et neutre de yaqūlu. Aucune alternative pertinente.

**d'auprès de** — Le sens retenu est « auprès de » (Proximité/Présence) de la racine ʿ-n-d. L'expression « d'auprès de » (avec la préposition min en amont) est choisie car min ʿindi X est la formule arabe pour attribuer la provenance à une source. L'alternative « de chez » est possible mais plus familière. « De la part de » est possible mais plus juridique que relationnel. « Provenant de » perd la nuance de proximité relationnelle avec la source.

**Dieu** — Nom propre divin (allāh). Toujours rendu par « Dieu » en français courant, conformément à la règle de traduction.

**sur Dieu** — Le sens retenu du mot « sur » traduit la préposition ʿalā dans sa fonction d'indiquer l'objet du propos (ils disent DES CHOSES SUR Dieu). L'alternative « contre » (Hamidullah) est écartée car elle présuppose une posture d'hostilité qui n'est pas dans ʿalā : la préposition signifie d'abord « au sujet de » dans cette construction, et c'est le contenu du propos (al-kadhiba) qui en fait une offense, pas la préposition elle-même.

**le mensonge** — Le sens retenu est « mensonge » (Mensonge/Fausseté) de la racine k-dh-b. Le mot « mensonge » est choisi car al-kadhib (singulier défini) désigne LE mensonge précis — la doctrine mensongère spécifique que le verset vient d'exposer. L'alternative « des mensonges » (Hamidullah, pluriel indéfini) est écartée car elle élargit vers des mensonges en général, alors que l'arabe a le singulier défini qui individualise. Cohérent avec V75 qui traduit al-kadhib par « le mensonge ».

**savent** — Le sens retenu est « savoir » (Savoir/Connaissance) de la racine ʿ-l-m. Le verbe « savoir » est choisi car yaʿlamūna à l'inaccompli exprime un état cognitif actuel et permanent — ils ont pleine conscience de ce qu'ils font. L'alternative « connaissent » est écartée car elle impliquerait un objet direct ; ici yaʿlamūna est absolu (ils savent, sans préciser quoi). Cohérent avec V75.`;

  // ========================================================================
  // §CRITIQUE§ — uniquement différences substantives, dans l'ordre d'apparition
  // ========================================================================
  const critique = `§CRITIQUE§

**un groupe qui tord leurs langues avec l'écriture vs « certains qui roulent leurs langues en lisant le Livre »** : Hamidullah rend yalwūna alsinatahum bi-l-kitāb par « roulent leurs langues en lisant le Livre ». Trois glissements se cumulent : (1) yalwūna est traduit par « roulent » alors que la racine l-w-y désigne l'acte de tordre/courber, non de rouler — « rouler la langue » est une expression française qui évoque le trille sonore, non la déformation intentionnelle d'un texte. (2) bi-l-kitāb (« avec l'écriture ») est rendu par « en lisant le Livre » — paraphrase qui ajoute l'acte de lecture absent du texte et transforme la préposition instrumentale en circonstance temporelle. (3) La torsion est présentée comme un geste vocal neutre, alors que le verset décrit un procédé de falsification articulatoire pour faire passer un propos pour un autre. Le sens global change : Hamidullah suggère une simple déclamation bruyante pendant la lecture, le texte arabe décrit une manipulation délibérée de la prononciation à fins trompeuses.

**l'écriture vs « le Livre »** : Hamidullah rend al-kitāb par « le Livre » (majuscule, singulier identifié). Nous traduisons par « l'écriture ». La racine k-t-b désigne le corpus scripturaire révélé comme catégorie textuelle, pas comme objet-livre physique identifié. « Le Livre » tend à matérialiser et singulariser l'objet (LE livre précis), alors que « l'écriture » garde l'idée du contenu révélé comme type de parole. Cohérent avec les choix V48-V77.

**vous pensiez vs « vous faire croire »** : Hamidullah rend li-taḥsabūhu par « pour vous faire croire ». La racine ḥ-s-b est celle du calcul/évaluation rationnelle, non de la croyance. « Croire » déplace vers le champ de la foi, alors que taḥsabū désigne l'estimation intellectuelle — le classement qu'un auditeur fait mentalement. La différence change la nature de l'acte trompeur : Hamidullah décrit une induction à la foi (registre religieux), le texte arabe décrit une induction à l'évaluation erronée (registre cognitif).

**sur Dieu le mensonge vs « des mensonges contre Allah »** : Hamidullah rend yaqūlūna ʿalā allāhi al-kadhiba par « disent sciemment des mensonges contre Allah ». Trois transformations : (1) yaqūlūna devient « disent sciemment », déplaçant le savoir (wa-hum yaʿlamūna, circonstancielle séparée à la fin) à l'intérieur du verbe — perte de la structure arabe où l'énonciation et le savoir sont deux propositions coordonnées. (2) al-kadhiba (singulier défini = LE mensonge spécifique) devient « des mensonges » (pluriel indéfini = mensonges en général) — perte de la référence précise à la doctrine mensongère venant d'être exposée. (3) ʿalā (sur, au sujet de) devient « contre » — ajout d'une charge d'hostilité absente du texte. Le texte arabe décrit un acte précis et conscient — dire UN propos précis au sujet de Dieu qui ne vient pas de Lui — que Hamidullah dissout en un comportement général hostile.

**alors qu'eux savent vs « sciemment »** : Comme noté ci-dessus, wa-hum yaʿlamūna est grammaticalement une proposition circonstancielle indépendante (ḥāl) — elle ne dit pas « ils disent en sachant », mais « ils disent [un propos], alors qu'eux savent [que c'est faux] ». La traduction adverbiale par « sciemment » coule les deux propositions en une seule, perdant le relief rhétorique du texte arabe qui sépare l'acte (yaqūlūna) de l'état cognitif (yaʿlamūna) pour mieux souligner la lucidité consciente du mensonge.`;

  const translation_explanation = demarche + '\n\n' + justification + '\n\n' + critique;

  await db.from('verse_analyses').update({
    segments: newSegments,
    translation_arab,
    full_translation,
    translation_explanation
  }).eq('verse_id', vid);

  console.log('V78 translation + segments + explanation ✅');
  console.log('\n[frq] 6 sens → 2 concepts');
  console.log('  Séparation/Distinction → NUL');
  console.log('  Groupe/Partie → RETENU (farīqan = sous-groupe identifiable)');
  console.log('[lwy] 5 sens → 2 concepts');
  console.log('  Drapeau/Étendard → NUL');
  console.log('  Torsion/Déviation → RETENU (tordre les langues = altération articulatoire)');
  console.log('[lsn] 10 sens → 5 concepts (enrichi)');
  console.log('  Langue/Organe → RETENU (pluriel anatomique concret)');
  console.log('[ktb] 36 sens → 8 concepts');
  console.log('  Livre/Écrit → RETENU (cohérent V48-V77)');
  console.log('[hsb] 7 sens → 3 concepts');
  console.log('  Calcul/Évaluation → RETENU (classement catégoriel)');
  console.log('[qwl] 10 sens → 4 concepts');
  console.log('  Parole/Énonciation → RETENU');
  console.log('[end] 8 sens → 3 concepts');
  console.log('  Proximité/Présence → RETENU (min ʿindi = provenance)');
  console.log('[alh] 16 sens → 5 concepts');
  console.log('  Divinité → RETENU');
  console.log('[kḏb] 6 sens → 2 concepts');
  console.log('  Mensonge/Fausseté → RETENU (al-kadhiba = LE mensonge spécifique)');
  console.log('[elm] 22 sens → 6 concepts');
  console.log('  Savoir/Connaissance → RETENU (ḥāl de conscience)');

  console.log('\nVERSET 3:78 — TERMINÉ');
  console.log('  Traduction : ' + translation_arab);
}

run().catch(console.error);
