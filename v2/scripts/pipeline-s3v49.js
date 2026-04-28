// Pipeline S3:V49 — Enrichissement + VWA + Traduction
// verse_id=342, VA_ID=702
// Arabic: وَرَسُولًا إِلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ أَنِّى قَدْ جِئْتُكُم بِـَٔايَةٍ مِّن رَّبِّكُمْ ...
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 342;
const VA_ID = 702;

// ═══════════════════════════════════════════════════════════════════
// ENRICHISSEMENT — ajouter les sens Lane's dans word_meanings
// ═══════════════════════════════════════════════════════════════════

async function enrichRoot(aid, label, newSenses) {
  console.log('\n--- Enrichir ' + label + ' (aid=' + aid + ') ---');
  const { data: existing } = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({ ...s, analysis_id: aid, display_order: maxOrder + 1 + i, meaning_type: 'etymology' }));
  const { error } = await db.from('word_meanings').insert(toInsert);
  if (error) { console.log('ERREUR insert ' + label + ':', error.message); return false; }
  console.log('Insert: ' + toInsert.length + ' sens OK → ' + (existing.length + toInsert.length) + ' total');

  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', aid);
  return true;
}

async function runEnrichments() {
  console.log('=== ÉTAPE 1 — ENRICHISSEMENTS ===\n');

  // ─────────────────────────────────────────
  // 1. tyn (aid=1276, root=ط ي ن) — 3→8 sens
  // ─────────────────────────────────────────
  await enrichRoot(1276, 'tyn (ط ي ن)', [
    {
      concept: 'Matière/Argile', sense: 'terre',
      description: "Sol naturel composé de particules minérales. La terre est la matière première brute avant qu'elle ne soit travaillée — c'est l'état naturel du matériau dont l'argile est une forme spécifique."
    },
    {
      concept: 'Matière/Argile', sense: 'boue',
      description: "Mélange de terre et d'eau. La boue est l'état intermédiaire entre la terre sèche et l'argile modelable."
    },
    {
      concept: 'Matière/Argile', sense: 'sol',
      description: "Surface de la terre sur laquelle on marche. Extension spatiale de la matière."
    },
    {
      concept: 'Travail/Construction', sense: "enduire d'argile",
      description: "Acte de recouvrir une surface avec de l'argile ou du plâtre. C'est l'acte technique qui transforme la matière brute en revêtement — un geste extérieur et directionnel du bâtisseur vers la surface. Le Lane's donne ṭayyana : il a plâtré, enduit de plâtre ou d'argile."
    },
    {
      concept: 'Travail/Construction', sense: 'artisan de l\'argile',
      description: "Celui dont le métier est de travailler l'argile. Le ṭayyān est le plâtrier ou le potier."
    },
    {
      concept: 'Nature/Tempérament', sense: 'nature',
      description: "Disposition innée d'une personne, son caractère fondamental. La ṭīna est la nature profonde — comme si chaque être avait été façonné d'une argile particulière qui détermine son tempérament. Le Lane's donne ṭīna : la nature, le tempérament, la disposition naturelle d'une personne."
    },
    {
      concept: 'Nature/Tempérament', sense: 'tempérament',
      description: "Constitution morale et physique innée. Extension de la nature — le tempérament est la façon dont la nature se manifeste au quotidien."
    },
    {
      concept: 'Matière/Argile', sense: 'se souiller de boue',
      description: "Être couvert de terre humide. Le Lane's donne tāna : il s'est souillé de boue, il a été couvert de boue."
    }
  ]);

  // ─────────────────────────────────────────
  // 2. tyr (aid=1152, root=ط ي ر) — 4→11 sens
  // ─────────────────────────────────────────
  await enrichRoot(1152, 'tyr (ط ي ر)', [
    {
      concept: 'Vol/Mouvement', sense: 'voler',
      description: "Acte de se déplacer dans l'air en utilisant des ailes ou un moyen de sustentation. Le vol est le mouvement premier de cette racine — le passage du sol vers le ciel, un acte directionnel ascendant. Le Lane's donne ṭāra : il a volé, il s'est élevé dans l'air et s'est déplacé en l'air au moyen de ses ailes."
    },
    {
      concept: 'Vol/Mouvement', sense: "s'envoler",
      description: "Quitter le sol pour prendre l'air. Le moment de départ du vol."
    },
    {
      concept: 'Vol/Mouvement', sense: 'se disperser',
      description: "Se séparer et partir dans des directions différentes. Le Lane's donne taṭāyara : il s'est dispersé, éparpillé comme des oiseaux qui s'envolent."
    },
    {
      concept: 'Vol/Mouvement', sense: 'se fendre',
      description: "Se séparer en deux parties. Extension du mouvement de dispersion."
    },
    {
      concept: 'Présage/Augure', sense: 'augure',
      description: "Art de deviner l'avenir par l'observation du vol des oiseaux. Le présage est une lecture du mouvement des oiseaux — les Arabes observaient la direction de l'envol pour en tirer des conclusions sur l'avenir. Le Lane's donne taṭayyara : il a tiré un présage, un augure du vol des oiseaux."
    },
    {
      concept: 'Présage/Augure', sense: 'mauvais présage',
      description: "Signe annonçant un malheur. Le ṭīra ou ṭiyara est le mauvais augure tiré de l'observation des oiseaux."
    },
    {
      concept: 'Présage/Augure', sense: 'tirer les sorts',
      description: "Chercher à connaître l'avenir par des moyens divinatoires. Extension du présage vers la divination."
    },
    {
      concept: 'Caractère/Légèreté', sense: 'légèreté',
      description: "Manque de constance ou de gravité dans le comportement. Le Lane's donne ṭā'ir : celui qui est léger, inconstant, volage — comme un oiseau qui ne reste jamais posé."
    },
    {
      concept: 'Caractère/Légèreté', sense: 'inconstance',
      description: "Changement fréquent d'avis ou de disposition. Comme l'oiseau qui change de direction en vol."
    },
    {
      concept: 'Caractère/Légèreté', sense: 'cheval vif',
      description: "Cheval rapide et vif dans ses mouvements. Le Lane's donne ṭayyār : un cheval léger, vif, comme s'il volait."
    }
  ]);

  // ─────────────────────────────────────────
  // 3. nfx (aid=1277, root=ن ف خ) — 4→10 sens
  // ─────────────────────────────────────────
  await enrichRoot(1277, 'nfx (ن ف خ)', [
    {
      concept: 'Gonflement/Enflure', sense: 'gonfler',
      description: "Augmenter le volume de quelque chose en y introduisant de l'air ou un gaz. Le gonflement est le résultat visible du souffle — l'objet prend du volume sous l'effet de l'air introduit. Le Lane's donne nafakha : il a gonflé, il a fait enfler."
    },
    {
      concept: 'Gonflement/Enflure', sense: 'enfler',
      description: "Devenir plus volumineux par accumulation interne. L'enflure est un état résultant, pas l'acte de souffler."
    },
    {
      concept: 'Gonflement/Enflure', sense: 'flatulence',
      description: "Accumulation de gaz dans le ventre. Extension corporelle du gonflement."
    },
    {
      concept: 'Gonflement/Enflure', sense: 'ventre gonflé',
      description: "Abdomen distendu par l'air ou la nourriture. Le Lane's donne nafkh : la distension du ventre."
    },
    {
      concept: 'Orgueil/Arrogance', sense: 'arrogance',
      description: "Attitude de celui qui se gonfle d'importance — se donner plus de volume qu'on n'en a réellement. L'arrogance est le gonflement moral — comme un soufflet qui se remplit d'air sans substance. Le Lane's donne intafakha : il s'est gonflé d'orgueil."
    },
    {
      concept: 'Orgueil/Arrogance', sense: "se gonfler d'orgueil",
      description: "Adopter une attitude prétentieuse. Extension morale du gonflement physique."
    },
    {
      concept: 'Souffle/Expiration', sense: 'soufflet',
      description: "Instrument qui produit un courant d'air par compression et expansion. Le minfākh est le soufflet du forgeron — l'outil qui canalise le souffle vers une cible."
    },
    {
      concept: 'Vigueur/Plénitude', sense: 'vigueur juvénile',
      description: "État de plénitude physique de la jeunesse. Le Lane's donne nafkha al-shabāb : l'éclat de la jeunesse, quand le corps est à son apogée de vitalité — comme s'il était gonflé de vie."
    }
  ]);

  // ─────────────────────────────────────────
  // 4. adn (aid=722, root=أ ذ ن) — 3→11 sens
  // ─────────────────────────────────────────
  await enrichRoot(722, 'adn (أ ذ ن)', [
    {
      concept: 'Écoute/Oreille', sense: 'écouter',
      description: "Acte de prêter attention aux sons ou aux paroles. L'écoute est la fonction première de l'oreille — recevoir ce qui vient de l'extérieur. Le Lane's donne adhina lahu : il l'a écouté, il a prêté l'oreille."
    },
    {
      concept: 'Écoute/Oreille', sense: 'oreille',
      description: "Organe de l'audition. L'udhun est l'organe physique qui capte les sons."
    },
    {
      concept: 'Écoute/Oreille', sense: "prêter l'oreille",
      description: "Se concentrer pour entendre attentivement. Le Lane's donne ta'adhdhana : il a écouté avec attention."
    },
    {
      concept: 'Annonce/Appel', sense: 'annoncer',
      description: "Faire savoir publiquement une nouvelle ou un événement. L'annonce est l'acte extérieur de diffuser une information — elle sort de l'annonciateur et atteint les auditeurs. Le Lane's donne adhdhana (forme II) : il a annoncé, il a fait savoir, il a proclamé."
    },
    {
      concept: 'Annonce/Appel', sense: "appel à la prière",
      description: "Le adhān est l'annonce vocale qui invite les fidèles à la prière. C'est l'application la plus connue de l'annonce dans la tradition islamique."
    },
    {
      concept: 'Annonce/Appel', sense: 'muezzin',
      description: "Celui qui lance l'appel à la prière. Le mu'adhdhin est l'annonciateur — celui dont le rôle est de proclamer."
    },
    {
      concept: 'Annonce/Appel', sense: 'minaret',
      description: "Tour d'où le muezzin lance l'appel. Le mi'dhana ou ma'dhana est le lieu de l'annonce — l'endroit élevé d'où la voix porte."
    },
    {
      concept: 'Permission/Autorisation', sense: 'autoriser',
      description: "Accorder le droit de faire quelque chose. L'autorisation est la permission donnée par celui qui a l'autorité. Le Lane's donne adhina lahu fī : il lui a permis, il l'a autorisé."
    },
    {
      concept: 'Organe/Corps', sense: 'grandes oreilles',
      description: "Personne ou animal aux oreilles proéminentes. Le ādhān est celui qui a de grandes oreilles. Extension anatomique."
    },
    {
      concept: 'Organe/Corps', sense: 'feuilles',
      description: "Le Lane's mentionne les udhun des feuilles — les oreillettes latérales de certaines feuilles, par analogie de forme avec l'oreille."
    }
  ]);

  // ─────────────────────────────────────────
  // 5. bra (aid=555, root=ب ر أ) — 4→11 sens
  // ─────────────────────────────────────────
  await enrichRoot(555, 'bra (ب ر أ)', [
    {
      concept: 'Création', sense: 'créer (Dieu)',
      description: "Acte de Dieu qui fait exister les êtres à partir de rien. Le bāri' est le Créateur — celui qui produit les êtres. Ce sens est spécifiquement divin dans la tradition arabe : seul Dieu bara'a au sens de créer ex nihilo. Le Lane's donne bara'a al-khalqa : Il a créé la création."
    },
    {
      concept: 'Création', sense: 'Créateur',
      description: "Nom divin al-Bāri' — celui qui crée les êtres. Un des noms de Dieu dans la tradition islamique."
    },
    {
      concept: 'Création', sense: 'humanité',
      description: "L'ensemble des êtres créés. Al-bariyya désigne les créatures, l'humanité — ce qui a été produit par l'acte de création."
    },
    {
      concept: 'Guérison', sense: 'guérir',
      description: "Retrouver la santé après une maladie. La guérison est le passage de l'état de maladie à l'état de santé — un mouvement de libération du corps par rapport au mal qui l'affectait. Le Lane's donne bari'a min al-maraḍ : il a guéri de la maladie, il s'en est libéré."
    },
    {
      concept: 'Guérison', sense: 'se rétablir',
      description: "Reprendre des forces après une maladie. La convalescence est le processus graduel de retour à la santé."
    },
    {
      concept: 'Guérison', sense: 'convalescence',
      description: "Période de rétablissement progressif. Le bur' est la guérison accomplie."
    },
    {
      concept: 'Libération/Innocence', sense: 'séparer',
      description: "Se détacher de quelqu'un ou de quelque chose. Le Lane's donne tabarra'a minhu : il s'est séparé de lui, il s'est désavoué de lui. C'est la coupure du lien."
    },
    {
      concept: 'Libération/Innocence', sense: 'absoudre',
      description: "Déclarer quelqu'un libre de toute faute. L'absolution est la libération juridique ou morale."
    }
  ]);

  // ─────────────────────────────────────────
  // 6. brs (aid=1279, root=ب ر ص) — 2→8 sens
  // ─────────────────────────────────────────
  await enrichRoot(1279, 'brs (ب ر ص)', [
    {
      concept: 'Maladie/Lèpre', sense: 'taches blanches',
      description: "Marques décolorées sur la peau, symptôme de la lèpre. Les taches blanches sont le signe visible de la maladie — une altération de la surface du corps."
    },
    {
      concept: 'Animal/Reptile', sense: 'gecko',
      description: "Petit lézard. Le Lane's donne al-abraṣ comme nom du gecko en raison de ses taches claires sur la peau. L'animal est nommé par analogie avec les taches de lèpre."
    },
    {
      concept: 'Animal/Reptile', sense: 'lézard',
      description: "Reptile à peau tachetée. Extension de gecko — même analogie avec les taches."
    },
    {
      concept: 'Brillance/Éclat', sense: 'briller',
      description: "Émettre de la lumière ou refléter un éclat. Le Lane's mentionne un sens de brillance et d'éclat lié aux taches claires — ce qui est abraṣ est aussi ce qui brille par ses taches blanches."
    },
    {
      concept: 'Marque/Trace', sense: 'raser la tête',
      description: "Couper les cheveux à ras. Le Lane's mentionne le sens de barṣa comme le fait de raser — laisser la tête dénudée comme une surface marquée."
    },
    {
      concept: 'Marque/Trace', sense: 'sol dénudé',
      description: "Terrain sans végétation. Une terre abraṣ est un sol où la végétation manque par endroits — comme des taches sur la terre."
    }
  ]);

  // ─────────────────────────────────────────
  // 7. dkhr (aid=1280, root=ذ خ ر) — 3→10 sens
  // ─────────────────────────────────────────
  await enrichRoot(1280, 'dkhr (ذ خ ر)', [
    {
      concept: 'Réserve/Stockage', sense: 'trésor',
      description: "Bien précieux mis de côté pour l'avenir. Le dhakhīra est le trésor — la chose de valeur stockée et préservée. Le Lane's donne dhakhara : il a mis en réserve, il a thésaurisé."
    },
    {
      concept: 'Réserve/Stockage', sense: 'préparer',
      description: "Mettre de côté en vue d'un usage futur. La préparation est l'acte de constituer des réserves."
    },
    {
      concept: 'Réserve/Stockage', sense: 'provisions',
      description: "Nourriture et biens stockés pour subvenir aux besoins. Les provisions sont les réserves alimentaires."
    },
    {
      concept: 'Réserve/Stockage', sense: 'thésauriser',
      description: "Accumuler des richesses sans les utiliser. Le Lane's donne iddakhara (forme VIII) : il a amassé, il a stocké pour lui-même."
    },
    {
      concept: 'Corps/Intérieur', sense: 'intestins',
      description: "Organes internes du ventre. Le dakhīr désigne les intestins — ce qui est à l'intérieur, stocké dans le corps. Le Lane's mentionne ce sens anatomique comme extension de l'idée de contenu caché."
    },
    {
      concept: 'Corps/Intérieur', sense: 'gras',
      description: "Tissu adipeux. La graisse est une réserve corporelle — de l'énergie stockée dans le corps."
    },
    {
      concept: 'Plante', sense: 'jonc odorant',
      description: "Le idhkhir est une plante aromatique (jonc odorant). Le Lane's la cite comme une herbe odorante connue en Arabie."
    }
  ]);

  // ─────────────────────────────────────────
  // 8. byt (aid=788, root=ب ي ت) — 3→10 sens
  // ─────────────────────────────────────────
  await enrichRoot(788, 'byt (ب ي ت)', [
    {
      concept: 'Habitation/Demeure', sense: 'tente',
      description: "Abri transportable fait de toile ou de peaux. Avant la maison de pierre, le bayt était la tente — l'habitation première des nomades arabes."
    },
    {
      concept: 'Habitation/Demeure', sense: 'chambre',
      description: "Pièce d'une maison. Le bayt peut désigner une pièce spécifique à l'intérieur d'une habitation plus grande."
    },
    {
      concept: 'Habitation/Demeure', sense: 'construire',
      description: "Ériger une structure d'habitation. Le Lane's donne bayyata : il a construit, il a édifié un bayt."
    },
    {
      concept: 'Nuit/Repos', sense: 'passer la nuit',
      description: "Demeurer dans un lieu pendant la nuit. Le sens premier verbal de b-y-t est « passer la nuit en un lieu ». Le Lane's donne bāta yabītu : il a passé la nuit. La nuit est le moment où l'on revient au bayt — le lien entre la maison et la nuit est organique."
    },
    {
      concept: 'Nuit/Repos', sense: 'rassis',
      description: "Pain ou nourriture vieux d'une nuit. Le bayyit est ce qui a passé la nuit — ce qui n'est plus frais. Le Lane's mentionne le pain bayyit : le pain d'hier."
    },
    {
      concept: 'Attaque/Complot', sense: 'attaque nocturne',
      description: "Assault lancé de nuit, par surprise. Le bayyata (forme II) ou bayāt est l'attaque de nuit — l'acte de fondre sur l'ennemi pendant qu'il dort dans son bayt. Le Lane's donne bayyatahum : il les a attaqués de nuit."
    },
    {
      concept: 'Attaque/Complot', sense: 'machination de nuit',
      description: "Complot tramé dans l'obscurité. Extension de l'attaque nocturne vers la ruse et le stratagème nocturne."
    },
    {
      concept: 'Poésie', sense: 'vers de poésie',
      description: "Le bayt est aussi le vers — l'unité de base du poème arabe. Comme la maison est l'unité de base de l'habitation, le vers est l'unité de base du poème."
    },
    {
      concept: 'Habitation/Demeure', sense: 'nourriture du foyer',
      description: "Le Lane's mentionne tabiyyata : la nourriture que l'on prépare le soir pour la nuit. Les provisions du foyer."
    }
  ]);

  console.log('\n=== ENRICHISSEMENTS TERMINÉS ===\n');
}

// ═══════════════════════════════════════════════════════════════════
// LECTURE DES CONCEPTS DEPUIS LA BDD
// ═══════════════════════════════════════════════════════════════════

async function readConcepts() {
  console.log('=== ÉTAPE 2 — LECTURE DES CONCEPTS ===\n');

  const rootChecks = [
    { key: 'rsl', aid: 312 },
    { key: 'bny', aid: 365 },
    { key: 'jyy', aid: 451 },
    { key: 'ayh', aid: 449 },
    { key: 'rbb', aid: 253 },
    { key: 'xlq', aid: 344 },
    { key: 'tyn', aid: 1276 },
    { key: 'hya', aid: 1278 },
    { key: 'tyr', aid: 1152 },
    { key: 'nfx', aid: 1277 },
    { key: 'kwn', aid: 2577 },
    { key: 'adn', aid: 722 },
    { key: 'alh', aid: 250 },
    { key: 'bra', aid: 555 },
    { key: 'brs', aid: 1279 },
    { key: 'hyy', aid: 310 },
    { key: 'mwt', aid: 423 },
    { key: 'nba', aid: 443 },
    { key: 'akl', aid: 362 },
    { key: 'dkhr', aid: 1280 },
    { key: 'byt', aid: 788 },
    { key: 'amn', aid: 376 },
    { key: 'dlk', aid: 528 }
  ];

  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await db.from('word_meanings').select('sense,concept').eq('analysis_id', r.aid).order('display_order');
    if (!meanings || meanings.length === 0) {
      console.log(r.key + ' (aid=' + r.aid + '): AUCUN SENS TROUVÉ — VÉRIFIER!');
      conceptsMap[r.key] = {};
      continue;
    }
    const concepts = {};
    meanings.forEach(m => { if (!concepts[m.concept]) concepts[m.concept] = []; concepts[m.concept].push(m.sense); });
    conceptsMap[r.key] = concepts;
    console.log(r.key + ' (aid=' + r.aid + '): ' + meanings.length + ' sens, ' + Object.keys(concepts).length + ' concepts');
  }

  return conceptsMap;
}

// ═══════════════════════════════════════════════════════════════════
// VWA — verse_word_analyses
// ═══════════════════════════════════════════════════════════════════

async function insertVWA(c) {
  console.log('\n=== ÉTAPE 3 — VWA ===\n');

  // Clean any existing VWA for this verse
  const { data: existingVWA } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVWA && existingVWA.length > 0) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Supprimé ' + existingVWA.length + ' VWA existants');
  }

  const vwaEntries = [

    // ── pos=2: rasūlan (rsl) ──
    {
      verse_id: VERSE_ID, word_key: 'rsl', position: 2,
      sense_chosen: 'messager',
      analysis_axes: {
        concept_chosen: "Message/Envoi",
        sense_chosen: "messager",
        concepts: {
          "Message/Envoi": {
            status: "retenu",
            senses: c.rsl["Message/Envoi"] || ["messager", "envoyer", "message", "émissaire", "mission"],
            proof_ctx: "Le nom rasūlan (indéfini accusatif, ḥāl ou complément de sens) désigne celui qui est envoyé avec un message. Jésus est envoyé comme messager auprès des Fils d'Israël — il porte un message divin. Le sens de 'messager' est le seul cohérent pour un nom de fonction qui précède 'auprès des Fils d'Israël'. Contrairement à Délai/Lenteur (accorder un répit), le contexte est celui de l'envoi d'une personne avec une mission."
          },
          "Délai/Lenteur": { status: "nul", senses: c.rsl["Délai/Lenteur"] || ["délai"], proof_ctx: "Hors sujet." },
          "Cheveux/Crinière": { status: "nul", senses: c.rsl["Cheveux/Crinière"] || ["crinière"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=4: banī (bny) ──
    {
      verse_id: VERSE_ID, word_key: 'bny', position: 4,
      sense_chosen: 'fils/enfants',
      analysis_axes: {
        concept_chosen: "Construction/Édification",
        sense_chosen: "fils/enfants",
        concepts: {
          "Construction/Édification": {
            status: "retenu",
            senses: c.bny["Construction/Édification"] || ["fils", "enfants", "construire", "bâtir", "bâtiment"],
            proof_ctx: "Le nom banī (pluriel construit de ibn, au génitif après ilā) désigne les fils ou descendants. Dans l'expression 'Banī Isrā'īl' (les Fils d'Israël), c'est un terme généalogique désignant un peuple par son ancêtre. Le sens premier de b-n-y est construire/bâtir — le fils est celui qui continue la construction de la lignée."
          }
        }
      }
    },

    // ── pos=5: Isrā'īl (sryl) — nom propre ──
    {
      verse_id: VERSE_ID, word_key: 'sryl', position: 5,
      sense_chosen: 'Israël (nom propre)',
      analysis_axes: {
        concept_chosen: "Nom propre",
        sense_chosen: "Israël (nom propre)",
        concepts: {
          "Nom propre": {
            status: "retenu",
            senses: ["Israël"],
            proof_ctx: "Isrā'īl est un nom propre d'emprunt hébraïque désignant le patriarche Jacob. L'expression 'Banī Isrā'īl' identifie le peuple descendant de Jacob. Pas d'alternative étymologique arabe."
          }
        }
      }
    },

    // ── pos=8: ji'tukum (jyy) ──
    {
      verse_id: VERSE_ID, word_key: 'jyy', position: 8,
      sense_chosen: 'venir',
      analysis_axes: {
        concept_chosen: "Venue/Arrivée",
        sense_chosen: "venir",
        concepts: {
          "Venue/Arrivée": {
            status: "retenu",
            senses: c.jyy["Venue/Arrivée"] || ["venir", "arriver", "apporter", "se présenter", "survenir", "amener"],
            proof_ctx: "Le verbe ji'tukum à l'accompli 1ère personne singulier avec pronom suffixe kum (vous) exprime l'arrivée accomplie de Jésus auprès des Fils d'Israël. D'après les sources étymologiques, jā'a signifie venir, arriver, se présenter en un lieu. Le sens est directionnel : le mouvement du locuteur vers les destinataires. La construction bi-āyatin après ji'tukum indique que la venue est accompagnée d'un signe."
          }
        }
      }
    },

    // ── pos=9: bi-āyatin (ayh) ──
    {
      verse_id: VERSE_ID, word_key: 'ayh', position: 9,
      sense_chosen: 'signe',
      analysis_axes: {
        concept_chosen: "Signe/Preuve",
        sense_chosen: "signe",
        concepts: {
          "Signe/Preuve": {
            status: "retenu",
            senses: c.ayh["Signe/Preuve"] || ["signe", "verset", "preuve", "miracle", "marque", "prodige"],
            proof_ctx: "Le nom āyatin (indéfini génitif après la préposition bi-) désigne un signe, une preuve tangible. Jésus vient avec un signe de la part de leur Seigneur — une preuve visible de sa mission. Le mot āya est ensuite explicité dans la suite du verset : le signe est la série de miracles décrits. À la fin du verset, la-āyatan (défini emphatique) reprend ce même mot pour conclure que tout cela est un signe pour les croyants."
          }
        }
      }
    },

    // ── pos=11: rabbikum (rbb) ──
    {
      verse_id: VERSE_ID, word_key: 'rbb', position: 11,
      sense_chosen: 'seigneur',
      analysis_axes: {
        concept_chosen: "Seigneurie/Autorité bienveillante",
        sense_chosen: "seigneur",
        concepts: {
          "Seigneurie/Autorité bienveillante": {
            status: "retenu",
            senses: c.rbb["Seigneurie/Autorité bienveillante"],
            proof_ctx: "Le nom rabbikum (état construit + pronom possessif 2ème personne pluriel) signifie 'votre Seigneur'. Jésus parle aux Fils d'Israël et leur dit qu'il vient avec un signe de LEUR Seigneur — celui qui a autorité sur eux et les prend en charge. Le pronom kum rattache la seigneurie aux destinataires du message."
          },
          "Croissance/Augmentation": { status: "nul", senses: c.rbb["Croissance/Augmentation"], proof_ctx: "Le sens de croissance physique est hors sujet dans un contexte de relation d'autorité." },
          "Éducation/Accompagnement": { status: "peu_probable", senses: c.rbb["Éducation/Accompagnement"], proof_ctx: "L'éducation est un acte du rabb, mais ici c'est le titre d'autorité qui est convoqué dans le complément 'de votre Seigneur'." }
        }
      }
    },

    // ── pos=13: akhluqu (xlq) ──
    {
      verse_id: VERSE_ID, word_key: 'xlq', position: 13,
      sense_chosen: 'façonner',
      analysis_axes: {
        concept_chosen: "Création/Production",
        sense_chosen: "façonner",
        concepts: {
          "Création/Production": {
            status: "retenu",
            senses: c.xlq["Création/Production"] || ["créer", "façonner", "produire", "Créateur", "créature", "création"],
            proof_ctx: "Le verbe akhluqu à l'inaccompli 1ère personne singulier (forme I de kh-l-q) est suivi de 'pour vous, de l'argile, comme la forme d'un oiseau'. Le contexte physique (argile, forme, oiseau) oriente vers le sens de 'façonner' plutôt que 'créer ex nihilo'. Jésus ne crée pas à partir de rien — il travaille l'argile pour lui donner une forme. Le sens de façonner rend mieux l'aspect artisanal de l'acte : prendre une matière et lui donner une forme."
          },
          "Sens isolé/Lisse": { status: "nul", senses: c.xlq["Sens isolé/Lisse"] || ["lisse"], proof_ctx: "Hors sujet." },
          "Sens isolé/Mensonge": { status: "nul", senses: c.xlq["Sens isolé/Mensonge"] || ["mensonge"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=16: aṭ-ṭīni (tyn) ──
    {
      verse_id: VERSE_ID, word_key: 'tyn', position: 16,
      sense_chosen: 'argile',
      analysis_axes: {
        concept_chosen: "Matière/Argile",
        sense_chosen: "argile",
        concepts: {
          "Matière/Argile": {
            status: "retenu",
            senses: c.tyn["Matière/Argile"] || ["argile", "terre", "boue", "sol", "se souiller de boue"],
            proof_ctx: "Le nom aṭ-ṭīni (défini au génitif après min) désigne l'argile comme matière première. Le contexte est celui de la fabrication : Jésus façonne DE L'ARGILE comme la forme d'un oiseau. L'argile est la matière modelable par excellence — elle est entre la terre brute et l'objet fini. Contrairement à Nature/Tempérament (la disposition innée), le verset parle d'un matériau physique travaillé avec les mains."
          },
          "Travail/Construction": { status: "peu_probable", senses: c.tyn["Travail/Construction"] || ["enduire d'argile", "artisan de l'argile"], proof_ctx: "L'acte d'enduire et l'artisan sont des extensions de la racine, mais ici c'est la matière elle-même qui est désignée, pas l'acte ou l'artisan." },
          "Nature/Tempérament": { status: "nul", senses: c.tyn["Nature/Tempérament"] || ["nature", "tempérament"], proof_ctx: "La disposition innée est un sens figuré sans rapport avec le contexte de fabrication physique." }
        }
      }
    },

    // ── pos=17: ka-hay'ati (hya) ──
    {
      verse_id: VERSE_ID, word_key: 'hya', position: 17,
      sense_chosen: 'forme',
      analysis_axes: {
        concept_chosen: "Forme/Apparence",
        sense_chosen: "forme",
        concepts: {
          "Forme/Apparence": {
            status: "retenu",
            senses: ["forme", "apparence", "aspect", "configuration"],
            proof_ctx: "Le nom hay'ati (état construit au génitif, introduit par la préposition de comparaison ka-) désigne la forme, l'apparence extérieure d'une chose. Ka-hay'ati aṭ-ṭayri signifie 'comme la forme de l'oiseau' — l'argile est modelée pour ressembler à l'aspect extérieur d'un oiseau. La racine h-y-' est rare dans le Coran (cette seule occurrence) et dans le Lane's. Le sens de 'forme/aspect/apparence' est le seul attesté."
          }
        }
      }
    },

    // ── pos=18: aṭ-ṭayr (tyr) — première occurrence ──
    {
      verse_id: VERSE_ID, word_key: 'tyr', position: 18,
      sense_chosen: 'oiseau',
      analysis_axes: {
        concept_chosen: "Oiseau",
        sense_chosen: "oiseau",
        concepts: {
          "Oiseau": {
            status: "retenu",
            senses: c.tyr["Oiseau"] || ["oiseau", "volatile"],
            proof_ctx: "Le nom aṭ-ṭayri (défini au génitif après hay'ati) désigne l'oiseau comme catégorie animale. L'argile est modelée comme la forme DE L'OISEAU — le ṭayr est l'animal volant qui sert de modèle à la sculpture. L'article défini al- indique la catégorie générique (l'oiseau en tant que type), pas un oiseau particulier."
          },
          "Vol/Mouvement": { status: "peu_probable", senses: c.tyr["Vol/Mouvement"] || ["voler", "s'envoler"], proof_ctx: "Le vol est l'acte de l'oiseau, mais ici c'est l'animal en tant que modèle de forme qui est désigné, pas son mouvement." },
          "Présage/Augure": { status: "nul", senses: c.tyr["Présage/Augure"] || ["augure", "mauvais présage"], proof_ctx: "Le présage tiré du vol des oiseaux est hors sujet dans un contexte de fabrication artisanale." },
          "Caractère/Légèreté": { status: "nul", senses: c.tyr["Caractère/Légèreté"] || ["légèreté"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=20: anfukhu (nfx) ──
    {
      verse_id: VERSE_ID, word_key: 'nfx', position: 20,
      sense_chosen: 'souffler',
      analysis_axes: {
        concept_chosen: "Souffle/Expiration",
        sense_chosen: "souffler",
        concepts: {
          "Souffle/Expiration": {
            status: "retenu",
            senses: c.nfx["Souffle/Expiration"] || ["souffler", "insuffler", "soufflet"],
            proof_ctx: "Le verbe anfukhu à l'inaccompli 1ère personne singulier (forme I de n-f-kh) décrit l'acte de souffler dans la forme d'argile. Le souffle est l'agent vivifiant : Jésus façonne l'argile puis souffle dedans pour lui donner vie. Le Lane's donne nafakha fīhi : il a soufflé dedans. Le souffle est l'acte qui fait passer la sculpture inerte à la vie. Contrairement à Orgueil/Arrogance (se gonfler d'orgueil), le verset décrit un acte physique de souffle, pas un état moral."
          },
          "Gonflement/Enflure": { status: "peu_probable", senses: c.nfx["Gonflement/Enflure"] || ["gonfler", "enfler"], proof_ctx: "Le gonflement est le résultat physique possible du souffle, mais ici l'accent est sur l'acte de souffler (donner la vie), pas sur le gonflement de l'objet." },
          "Orgueil/Arrogance": { status: "nul", senses: c.nfx["Orgueil/Arrogance"] || ["arrogance"], proof_ctx: "Hors sujet." },
          "Vigueur/Plénitude": { status: "nul", senses: c.nfx["Vigueur/Plénitude"] || ["vigueur juvénile"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=22: fayakūnu (kwn) ──
    {
      verse_id: VERSE_ID, word_key: 'kwn', position: 22,
      sense_chosen: 'devenir',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "devenir",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: c.kwn["Être/Existence"],
            proof_ctx: "Le verbe yakūnu après fa- (fa-yakūnu) exprime le résultat immédiat du souffle — la forme d'argile DEVIENT un oiseau vivant. C'est le verbe de passage d'un état à un autre : de l'inerte au vivant. L'inaccompli après fa- exprime l'immédiateté de la transformation. Contrairement à 'être' simple (état), 'devenir' capture le changement d'état."
          },
          "Humilité/Soumission": { status: "nul", senses: c.kwn["Humilité/Soumission"] || ["humilité"], proof_ctx: "Hors sujet dans un contexte de transformation physique." },
          "Lieu/État": { status: "nul", senses: c.kwn["Lieu/État"] || ["lieu"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=23: ṭayran (tyr) — deuxième occurrence ──
    {
      verse_id: VERSE_ID, word_key: 'tyr', position: 23,
      sense_chosen: 'oiseau',
      analysis_axes: {
        concept_chosen: "Oiseau",
        sense_chosen: "oiseau",
        concepts: {
          "Oiseau": {
            status: "retenu",
            senses: c.tyr["Oiseau"] || ["oiseau", "volatile"],
            proof_ctx: "Le nom ṭayran (indéfini accusatif, attribut de yakūnu) désigne l'oiseau comme résultat de la transformation — la forme d'argile devient UN oiseau (vivant). L'indéfini (ṭayran et non aṭ-ṭayr) dit 'un oiseau' — un être nouveau qui n'existait pas avant."
          }
        }
      }
    },

    // ── pos=24: bi-idhni (adn) ──
    {
      verse_id: VERSE_ID, word_key: 'adn', position: 24,
      sense_chosen: 'permission',
      analysis_axes: {
        concept_chosen: "Permission/Autorisation",
        sense_chosen: "permission",
        concepts: {
          "Permission/Autorisation": {
            status: "retenu",
            senses: c.adn["Permission/Autorisation"] || ["permission", "autoriser", "accorder la permission"],
            proof_ctx: "Le nom idhni (état construit au génitif, après la préposition bi-) signifie 'la permission de'. La construction 'bi-idhni allāh' (par la permission de Dieu) est une formule qui limite le pouvoir miraculeux de Jésus : il ne fait rien de sa propre autorité mais seulement avec la permission divine. L'idhn est l'autorisation accordée par celui qui détient l'autorité. Contrairement à Écoute/Oreille (prêter l'oreille), le contexte est celui d'une délégation de pouvoir, pas de l'audition."
          },
          "Écoute/Oreille": { status: "peu_probable", senses: c.adn["Écoute/Oreille"] || ["écouter", "oreille"], proof_ctx: "L'écoute est le sens corporel premier de la racine, mais le contexte demande le sens dérivé d'autorisation." },
          "Annonce/Appel": { status: "nul", senses: c.adn["Annonce/Appel"] || ["annoncer", "appel à la prière", "muezzin", "minaret"], proof_ctx: "L'annonce publique est hors sujet dans un contexte de permission." },
          "Organe/Corps": { status: "nul", senses: c.adn["Organe/Corps"] || ["grandes oreilles", "feuilles"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=25: allāh (alh) ──
    {
      verse_id: VERSE_ID, word_key: 'alh', position: 25,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: "Divinité",
        sense_chosen: "Dieu",
        concepts: {
          "Divinité": {
            status: "retenu",
            senses: c.alh["Divinité"],
            proof_ctx: "Le nom allāhi (génitif après idhni dans l'idafa bi-idhni allāh) est le nom propre de la réalité divine unique. La permission est celle DE DIEU — la source ultime de l'autorité. Le même mot revient deux fois dans le verset (pos 25 et 35) pour souligner que chaque miracle est conditionné par la permission divine."
          },
          "Adoration/Dévotion": { status: "nul", senses: c.alh["Adoration/Dévotion"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=27: ubri'u (bra) ──
    {
      verse_id: VERSE_ID, word_key: 'bra', position: 27,
      sense_chosen: 'guérir',
      analysis_axes: {
        concept_chosen: "Guérison",
        sense_chosen: "guérir",
        concepts: {
          "Guérison": {
            status: "retenu",
            senses: c.bra["Guérison"] || ["guérir", "se rétablir", "convalescence"],
            proof_ctx: "Le verbe ubri'u à l'inaccompli 1ère personne singulier (forme IV de b-r-') signifie 'je guéris, je fais revenir à la santé'. La forme IV est causative : faire que quelqu'un soit barī' (libre de maladie). Le complément d'objet est al-akmaha wa-al-abraṣa (l'aveugle-né et le lépreux) — deux maladies réputées incurables. La guérison est l'acte de libérer le corps de la maladie. Contrairement à Libération/Innocence (se déclarer innocent), le contexte est médical, pas juridique."
          },
          "Libération/Innocence": { status: "probable", senses: c.bra["Libération/Innocence"] || ["être libre", "innocent", "absoudre", "séparer"], proof_ctx: "Être libre ou innocent partage la racine — la guérison EST une forme de libération (du mal). Mais le contexte médical (maladies physiques) oriente vers 'guérir' plutôt que 'absoudre'." },
          "Création": { status: "nul", senses: c.bra["Création"] || ["créer (Dieu)", "Créateur", "humanité"], proof_ctx: "La création divine est un sens spécifique de la racine hors sujet ici — Jésus ne crée pas l'aveugle, il le guérit." }
        }
      }
    },

    // ── pos=28: al-akmaha (root=k-m-h, mais stocké comme akm) ──
    {
      verse_id: VERSE_ID, word_key: 'akm', position: 28,
      sense_chosen: 'aveugle-né',
      analysis_axes: {
        concept_chosen: "Cécité de naissance",
        sense_chosen: "aveugle-né",
        concepts: {
          "Cécité de naissance": {
            status: "retenu",
            senses: ["aveugle-né"],
            proof_ctx: "Le nom al-akmaha (défini accusatif, objet de ubri'u) désigne spécifiquement celui qui est né aveugle — pas simplement aveugle (aʿmā). Le terme akmah implique que la cécité est congénitale : la personne n'a jamais vu. C'est une maladie considérée comme absolument incurable par la médecine humaine, ce qui souligne le caractère miraculeux de la guérison. NOTE: La racine réelle est k-m-h (ك م ه), pas '-k-m. Le word_key 'akm' dans la BDD pointe vers la racine أ ك م (collines) qui est différente."
          }
        }
      }
    },

    // ── pos=30: al-abraṣa (brs) ──
    {
      verse_id: VERSE_ID, word_key: 'brs', position: 30,
      sense_chosen: 'lépreux',
      analysis_axes: {
        concept_chosen: "Maladie/Lèpre",
        sense_chosen: "lépreux",
        concepts: {
          "Maladie/Lèpre": {
            status: "retenu",
            senses: c.brs["Maladie/Lèpre"] || ["lèpre", "lépreux", "taches blanches"],
            proof_ctx: "Le nom al-abraṣa (défini accusatif, objet de ubri'u, coordonné à al-akmaha par wa-) désigne le lépreux — celui atteint de baraṣ. La lèpre est caractérisée par des taches blanches sur la peau et était considérée comme incurable. Le Lane's donne abraṣ : atteint de baraṣ, c'est-à-dire de taches blanches sur la peau. Comme l'aveugle-né, le lépreux représente une maladie que seule une intervention surnaturelle peut guérir."
          },
          "Animal/Reptile": { status: "nul", senses: c.brs["Animal/Reptile"] || ["gecko", "lézard"], proof_ctx: "Le gecko est nommé par analogie avec les taches, mais le verset parle d'une personne malade, pas d'un animal." },
          "Brillance/Éclat": { status: "nul", senses: c.brs["Brillance/Éclat"] || ["briller"], proof_ctx: "Hors sujet." },
          "Marque/Trace": { status: "nul", senses: c.brs["Marque/Trace"] || ["raser la tête", "sol dénudé"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=32: uḥyī (hyy) ──
    {
      verse_id: VERSE_ID, word_key: 'hyy', position: 32,
      sense_chosen: 'donner la vie',
      analysis_axes: {
        concept_chosen: "Vie",
        sense_chosen: "donner la vie",
        concepts: {
          "Vie": {
            status: "retenu",
            senses: c.hyy["Vie"] || ["vivre", "vivifier", "donner la vie", "vie", "vivant"],
            proof_ctx: "Le verbe uḥyī à l'inaccompli 1ère personne singulier (forme IV de ḥ-y-y) signifie 'je donne la vie, je vivifie'. La forme IV est causative : faire que quelqu'un soit ḥayy (vivant). Le complément al-mawtā (les morts) complète le tableau des trois miracles : guérir l'aveugle-né, guérir le lépreux, donner la vie aux morts. Le verbe uḥyī est précis : il ne dit pas 'ressusciter' (qui implique un cadre théologique spécifique) mais 'donner la vie' — faire passer de l'état de mort à l'état de vivant."
          }
        }
      }
    },

    // ── pos=33: al-mawtā (mwt) ──
    {
      verse_id: VERSE_ID, word_key: 'mwt', position: 33,
      sense_chosen: 'mort',
      analysis_axes: {
        concept_chosen: "Mort",
        sense_chosen: "mort",
        concepts: {
          "Mort": {
            status: "retenu",
            senses: c.mwt["Mort"] || ["mourir", "mort", "mortel", "tuer"],
            proof_ctx: "Le nom al-mawtā (défini accusatif pluriel, objet de uḥyī) désigne les morts — ceux qui sont dans l'état de mort. Le pluriel mawtā est le pluriel de mayyit. Jésus donne la vie AUX MORTS — il fait passer des êtres de l'état de mort à l'état de vie. C'est le miracle le plus extraordinaire de la série, placé en dernier pour un effet de climax."
          }
        }
      }
    },

    // ── pos=37: unabbiʾukum (nba) ──
    {
      verse_id: VERSE_ID, word_key: 'nba', position: 37,
      sense_chosen: 'informer',
      analysis_axes: {
        concept_chosen: "Information/Annonce",
        sense_chosen: "informer",
        concepts: {
          "Information/Annonce": {
            status: "retenu",
            senses: c.nba["Information/Annonce"] || ["informer", "nouvelle", "annoncer", "prophète", "prophétie"],
            proof_ctx: "Le verbe unabbiʾukum à l'inaccompli 1ère personne singulier (forme II de n-b-') avec le pronom suffixe kum (vous) signifie 'je vous informe'. La forme II est intensive : il ne s'agit pas d'une simple information mais d'une révélation détaillée de ce que les gens mangent et stockent chez eux — des choses cachées que seule une connaissance surnaturelle peut révéler. C'est le quatrième miracle : la connaissance de l'invisible."
          }
        }
      }
    },

    // ── pos=39: taʾkulūna (akl) ──
    {
      verse_id: VERSE_ID, word_key: 'akl', position: 39,
      sense_chosen: 'manger',
      analysis_axes: {
        concept_chosen: "Nourriture/Manger",
        sense_chosen: "manger",
        concepts: {
          "Nourriture/Manger": {
            status: "retenu",
            senses: c.akl["Nourriture/Manger"] || ["manger", "nourriture", "dévorer", "consumer", "nourrir"],
            proof_ctx: "Le verbe taʾkulūna à l'inaccompli 2ème personne pluriel (forme I de '-k-l) signifie 'vous mangez'. C'est l'acte quotidien et ordinaire de se nourrir. Jésus révèle ce que les gens mangent — une information privée que seule la connaissance divine permet. Le Lane's donne akala : il a mangé."
          }
        }
      }
    },

    // ── pos=42: taddakhirūna (dkhr) ──
    {
      verse_id: VERSE_ID, word_key: 'dkhr', position: 42,
      sense_chosen: 'stocker',
      analysis_axes: {
        concept_chosen: "Réserve/Stockage",
        sense_chosen: "stocker",
        concepts: {
          "Réserve/Stockage": {
            status: "retenu",
            senses: c.dkhr["Réserve/Stockage"] || ["amasser", "stocker", "trésor", "préparer", "provisions", "thésauriser"],
            proof_ctx: "Le verbe taddakhirūna à l'inaccompli 2ème personne pluriel (forme VIII iddakhara, assimilation du tā' en dal — taddakhirūna) signifie 'vous stockez, vous mettez en réserve'. La forme VIII est réfléchie : stocker pour soi-même. Jésus révèle ce que les gens stockent dans leurs maisons — les provisions cachées, les réserves accumulées. Comme pour 'manger', c'est une information privée que seul un envoyé doté de connaissance divine peut détenir."
          },
          "Corps/Intérieur": { status: "nul", senses: c.dkhr["Corps/Intérieur"] || ["intestins", "gras"], proof_ctx: "Les sens anatomiques sont hors sujet dans un contexte de provisions domestiques." },
          "Plante": { status: "nul", senses: c.dkhr["Plante"] || ["jonc odorant"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=44: buyūtikum (byt) ──
    {
      verse_id: VERSE_ID, word_key: 'byt', position: 44,
      sense_chosen: 'maison',
      analysis_axes: {
        concept_chosen: "Habitation/Demeure",
        sense_chosen: "maison",
        concepts: {
          "Habitation/Demeure": {
            status: "retenu",
            senses: c.byt["Habitation/Demeure"] || ["maison", "tente", "chambre", "construire", "nourriture du foyer"],
            proof_ctx: "Le nom buyūtikum (pluriel de bayt au génitif après fī, avec pronom possessif kum) signifie 'dans vos maisons'. Les buyūt sont les espaces privés où l'on vit et où l'on stocke. Le contexte est domestique : ce que vous stockez dans vos maisons — l'espace privé par excellence. Contrairement à Nuit/Repos (passer la nuit), le verset désigne le lieu physique, pas l'activité nocturne."
          },
          "Nuit/Repos": { status: "nul", senses: c.byt["Nuit/Repos"] || ["passer la nuit", "rassis"], proof_ctx: "L'activité nocturne est hors sujet — le verset parle du lieu, pas de l'action de passer la nuit." },
          "Attaque/Complot": { status: "nul", senses: c.byt["Attaque/Complot"] || ["attaque nocturne", "machination de nuit"], proof_ctx: "Hors sujet." },
          "Poésie": { status: "nul", senses: c.byt["Poésie"] || ["vers de poésie"], proof_ctx: "Hors sujet." }
        }
      }
    },

    // ── pos=47: dhālika (dlk) ──
    {
      verse_id: VERSE_ID, word_key: 'dlk', position: 47,
      sense_chosen: 'cela (démonstratif)',
      analysis_axes: {
        concept_chosen: "Démonstratif",
        sense_chosen: "cela (démonstratif)",
        concepts: {
          "Démonstratif": {
            status: "retenu",
            senses: c.dlk ? (c.dlk["Démonstratif"] || ["cela", "celui-là"]) : ["cela", "celui-là"],
            proof_ctx: "Le pronom démonstratif dhālika (cela, celui-là, lointain) renvoie à l'ensemble des miracles décrits dans le verset. La construction 'inna fī dhālika la-āyatan' signifie 'il y a assurément dans CELA un signe'. Le démonstratif pointe vers tout ce qui précède — les quatre miracles — et les résume en un seul référent."
          }
        }
      }
    },

    // ── pos=48: la-āyatan (ayh) — deuxième occurrence ──
    {
      verse_id: VERSE_ID, word_key: 'ayh', position: 48,
      sense_chosen: 'signe',
      analysis_axes: {
        concept_chosen: "Signe/Preuve",
        sense_chosen: "signe",
        concepts: {
          "Signe/Preuve": {
            status: "retenu",
            senses: c.ayh["Signe/Preuve"] || ["signe", "verset", "preuve", "miracle"],
            proof_ctx: "Le nom āyatan (indéfini accusatif emphatique avec la particule la-) désigne un signe au sens de preuve divine. La particule la- (certes, assurément) renforce l'affirmation : il y a ASSURÉMENT un signe. Ce mot reprend āyatin du début du verset (pos 9) pour former une inclusion — le verset commence et finit par le mot 'signe', encadrant les miracles comme preuves."
          }
        }
      }
    },

    // ── pos=51: kuntum (kwn) ──
    {
      verse_id: VERSE_ID, word_key: 'kwn', position: 51,
      sense_chosen: 'être (verbe incomplet)',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "être (verbe incomplet)",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: c.kwn["Être/Existence"],
            proof_ctx: "Le verbe kuntum à l'accompli 2ème personne pluriel (forme I de k-w-n) dans la construction conditionnelle 'in kuntum mu'minīn' signifie 'si vous êtes'. Le verbe kwn est ici un verbe d'état — il décrit une qualité permanente des destinataires. La condition 'si vous êtes des croyants' invite les Fils d'Israël à reconnaître les signes s'ils accordent confiance."
          }
        }
      }
    },

    // ── pos=52: muʾminīn (amn) ──
    {
      verse_id: VERSE_ID, word_key: 'amn', position: 52,
      sense_chosen: 'accorder confiance',
      analysis_axes: {
        concept_chosen: "Confiance/Sécurité",
        sense_chosen: "accorder confiance",
        concepts: {
          "Confiance/Sécurité": {
            status: "retenu",
            senses: c.amn["Confiance/Sécurité"] || ["accorder confiance", "sécurité", "fidèle", "foi", "confiance"],
            proof_ctx: "Le participe actif muʾminīn (pluriel masculin sain au génitif, attribut de kuntum) désigne ceux qui sont dans l'état de īmān — l'acte d'accorder confiance et sécurité. La racine '-m-n a pour sens premier la sécurité et la confiance. Le mu'min est celui qui accorde sa confiance à quelqu'un ou quelque chose. Contrairement au sens restreint 'croyant' (qui implique une adhésion religieuse codifiée), le sens étymologique est plus large : accorder confiance, se sentir en sécurité avec quelqu'un."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return false; }
  console.log('VWA insert: ' + vwaEntries.length + ' entrées OK');
  return true;
}

// ═══════════════════════════════════════════════════════════════════
// TRADUCTION — verse_analyses UPDATE
// ═══════════════════════════════════════════════════════════════════

async function updateTranslation() {
  console.log('\n=== ÉTAPE 4 — TRADUCTION ===\n');

  const translation_arab = `Et [il sera] messager auprès des Fils d'Israël : « Je suis venu à vous avec un signe de votre Seigneur : je façonne pour vous de l'argile comme la forme d'un oiseau, puis je souffle dedans et il devient un oiseau par la permission de Dieu. Et je guéris l'aveugle-né et le lépreux, et je donne la vie aux morts par la permission de Dieu. Et je vous informe de ce que vous mangez et de ce que vous stockez dans vos maisons. Il y a là assurément un signe pour vous, si vous êtes de ceux qui accordent confiance. »`;

  const full_translation = `et il sera le messager aux Enfants d'Israël, [et leur dira]: « En vérité, je viens à vous avec un signe de la part de votre Seigneur. Pour vous, je forme de la glaise comme la figure d'un oiseau, puis je souffle dedans: et, par la permission d'Allah, cela devient un oiseau. Et je guéris l'aveugle-né et le lépreux, et je ressuscite les morts, par la permission d'Allah. Et je vous apprends ce que vous mangez et ce que vous amassez dans vos maisons. Voilà bien là un signe, pour vous, si vous êtes croyants!`;

  const translation_explanation = `§DEMARCHE§
Ce verset est la suite directe du verset 48 où Dieu annonce qu'Il enseignera à Jésus l'Écriture, la sagesse, la Torah et l'Évangile. Le verset 49 poursuit en décrivant la mission concrète de Jésus : il est envoyé comme messager auprès des Fils d'Israël, porteur de signes miraculeux qui attestent de sa mission divine. Le verset énumère quatre catégories de miracles : la création d'oiseaux vivants à partir d'argile, la guérison de maladies incurables, le don de la vie aux morts, et la connaissance de ce que les gens consomment et stockent en privé. Chaque miracle est rattaché à la permission divine, soulignant que Jésus n'agit pas de sa propre autorité.

**rasūlan** (messager) est un nom masculin indéfini à l'accusatif de la racine r-s-l. L'accusatif indique un état ou une fonction — Jésus est envoyé EN TANT QUE messager. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le rasūl est celui qui est envoyé avec un message — l'émissaire qui porte une parole ou une mission. On traduit par « messager ».

**banī** (fils) est le pluriel construit de ibn (fils) de la racine b-n-y, au génitif après la préposition ilā. L'expression Banī Isrā'īl (les Fils d'Israël) est un nom propre collectif désignant le peuple descendant du patriarche Jacob. On traduit par « les Fils d'Israël ».

**ji'tukum** (je suis venu à vous) est un verbe à l'accompli 1ère personne singulier de la racine j-y-' avec le pronom suffixe kum (vous). D'après les sources étymologiques, jā'a signifie venir, arriver, se présenter. L'accompli exprime que la venue est un fait accompli — Jésus est déjà devant eux. La préposition bi- qui suit (bi-āyatin) indique ce avec quoi il est venu : un signe. On traduit par « je suis venu à vous ».

**bi-āyatin** (avec un signe) est le nom āya (signe) au génitif indéfini singulier après la préposition bi-. Le signe est ce qui accompagne la venue — la preuve tangible de la mission. Ce mot revient à la fin du verset (la-āyatan) pour former une inclusion littéraire. On traduit par « avec un signe ».

**rabbikum** (votre Seigneur) est le nom rabb (seigneur) en idafa avec le pronom possessif kum (votre) au génitif après la préposition min. D'après les sources étymologiques, le rabb est celui qui possède, gouverne et prend en charge. Le pronom kum personnalise la relation : c'est VOTRE Seigneur. On traduit par « votre Seigneur ».

**akhluqu** (je façonne) est un verbe à l'inaccompli 1ère personne singulier de la racine kh-l-q. D'après les sources étymologiques, le sens premier est créer, produire. Mais le contexte est celui d'un travail manuel avec de l'argile — le geste artisanal de donner forme à une matière. On traduit par « je façonne » plutôt que « je crée » pour rendre cet aspect concret.

**aṭ-ṭīni** (l'argile) est le nom ṭīn (argile) défini par al- au génitif après la préposition min. D'après les sources étymologiques, le ṭīn est la terre mêlée d'eau, la matière modelable. C'est la matière première que Jésus travaille. On traduit par « l'argile ».

**ka-hay'ati** (comme la forme de) est la préposition de comparaison ka- (comme) suivie du nom hay'a (forme, aspect) en idafa avec aṭ-ṭayri. La hay'a est l'apparence extérieure, la configuration visible. On traduit par « comme la forme de ».

**aṭ-ṭayri / ṭayran** (l'oiseau / un oiseau) — le mot ṭayr apparaît deux fois : d'abord défini (aṭ-ṭayri = l'oiseau comme modèle, la catégorie), puis indéfini (ṭayran = un oiseau vivant, le résultat de la transformation). D'après les sources étymologiques, le ṭayr est le volatile, l'animal qui vole. On traduit par « l'oiseau » puis « un oiseau ».

**anfukhu** (je souffle) est un verbe à l'inaccompli 1ère personne singulier de la racine n-f-kh. D'après les sources étymologiques, nafakha signifie souffler, insuffler de l'air. Le souffle est l'acte qui fait passer la sculpture d'argile à l'oiseau vivant — c'est l'agent vivifiant. La préposition fīhi (dedans) indique que le souffle entre dans la forme d'argile. On traduit par « je souffle ».

**fa-yakūnu** (et il devient) est le verbe kāna/yakūnu à l'inaccompli 3ème personne masculin singulier de la racine k-w-n, après la particule de succession fa- (puis, alors). L'inaccompli après fa- exprime l'immédiateté du résultat : la forme d'argile DEVIENT immédiatement un oiseau vivant. On traduit par « il devient ».

**bi-idhni allāh** (par la permission de Dieu) — la préposition bi- (par, avec), le nom idhn (permission) de la racine '-dh-n en idafa avec allāh (Dieu). Cette formule revient deux fois dans le verset pour rappeler que les miracles de Jésus ne viennent pas de lui mais de Dieu. L'idhn est l'autorisation accordée par celui qui détient l'autorité. On traduit par « par la permission de Dieu ».

**ubri'u** (je guéris) est un verbe à l'inaccompli 1ère personne singulier, forme IV de la racine b-r-'. La forme IV est causative : faire que quelqu'un soit barī' (libre de maladie). D'après les sources étymologiques, bari'a min al-maraḍ signifie guérir d'une maladie, s'en libérer. On traduit par « je guéris ».

**al-akmaha** (l'aveugle-né) est un nom défini accusatif désignant celui qui est né aveugle. Le terme akmah est spécifique : il ne signifie pas simplement aveugle (a'mā) mais aveugle de naissance — la cécité est congénitale et réputée incurable. On traduit par « l'aveugle-né ».

**al-abraṣa** (le lépreux) est un nom défini accusatif de la racine b-r-ṣ, coordonné à al-akmaha. L'abraṣ est celui atteint de baraṣ — la lèpre, maladie caractérisée par des taches blanches sur la peau. Comme la cécité de naissance, la lèpre était considérée comme incurable. On traduit par « le lépreux ».

**uḥyī** (je donne la vie) est un verbe à l'inaccompli 1ère personne singulier, forme IV de la racine ḥ-y-y. La forme IV est causative : faire que quelqu'un soit ḥayy (vivant). D'après les sources étymologiques, aḥyā signifie faire vivre, donner la vie. On traduit par « je donne la vie » plutôt que « je ressuscite » car le verbe dit littéralement « je vivifie » — faire passer de la mort à la vie.

**al-mawtā** (les morts) est un nom défini accusatif pluriel de la racine m-w-t, objet de uḥyī. Les mawtā sont ceux qui sont dans l'état de mawt (mort). On traduit par « les morts ».

**unabbiʾukum** (je vous informe) est un verbe à l'inaccompli 1ère personne singulier, forme II de la racine n-b-' avec le pronom suffixe kum. La forme II est intensive : informer en détail, révéler. D'après les sources étymologiques, nabba'a signifie informer, annoncer une nouvelle. On traduit par « je vous informe ».

**taʾkulūna** (vous mangez) est un verbe à l'inaccompli 2ème personne pluriel de la racine '-k-l, après le pronom relatif mā (ce que). L'acte de manger est quotidien et privé — le savoir miraculeux de Jésus porte sur le plus ordinaire. On traduit par « vous mangez ».

**taddakhirūna** (vous stockez) est un verbe à l'inaccompli 2ème personne pluriel, forme VIII de la racine dh-kh-r (avec assimilation). D'après les sources étymologiques, iddakhara signifie mettre en réserve pour soi-même. On traduit par « vous stockez ».

**buyūtikum** (vos maisons) est le pluriel de bayt (maison) de la racine b-y-t au génitif après fī, avec le pronom possessif kum. D'après les sources étymologiques, le bayt est l'habitation, la demeure. On traduit par « vos maisons ».

**dhālika** (cela) est un pronom démonstratif d'éloignement qui renvoie à l'ensemble des miracles. Il résume tout ce qui précède en un seul référent. On traduit par « cela ».

**la-āyatan** (assurément un signe) est le nom āya (signe) indéfini accusatif renforcé par la particule d'emphase la- (assurément, certes). Ce mot reprend āyatin du début pour clore le verset sur la même notion. On traduit par « assurément un signe ».

**kuntum muʾminīn** (si vous êtes de ceux qui accordent confiance) — kuntum est un accompli de k-w-n à la 2ème personne pluriel dans une proposition conditionnelle (après in = si). Le participe muʾminīn (pluriel masculin sain de mu'min) de la racine '-m-n désigne ceux qui sont dans l'état de īmān. D'après les sources étymologiques, la racine '-m-n a pour sens premier la sécurité et la confiance — le mu'min est celui qui accorde sa confiance. On traduit par « ceux qui accordent confiance » plutôt que « croyants » pour rester fidèle au sens étymologique de la racine.

§JUSTIFICATION§
**messager** — Le sens retenu est « Message/Envoi ». Le mot « messager » est choisi car il désigne celui qui est envoyé avec un message — la fonction de l'émissaire. L'alternative « apôtre » est écartée car c'est un terme spécifiquement chrétien qui ne traduit pas la racine r-s-l. L'alternative « envoyé » est acceptable mais « messager » est plus précis pour rendre la racine qui contient l'idée du message.

**les Fils d'Israël** — Le sens retenu est « fils/enfants » de la racine b-n-y. L'expression Banī Isrā'īl est un nom propre collectif traduit conventionnellement par « les Fils d'Israël ». L'alternative « les enfants d'Israël » est acceptable mais « Fils » est le terme conventionnel pour cette expression.

**je suis venu à vous** — Le sens retenu est « venir » de la racine j-y-'. Le mot « venu » est choisi car il exprime l'arrivée accomplie du messager. L'alternative « je me suis présenté » est écartée car trop formel.

**un signe** — Le sens retenu est « Signe/Preuve ». Le mot « signe » est choisi car il désigne une preuve tangible de la mission divine. L'alternative « miracle » est écartée car āya ne signifie pas « miracle » mais « signe » — le miracle est l'interprétation, le signe est le fait. L'alternative « verset » est écartée car le contexte n'est pas textuel.

**votre Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car il désigne l'autorité qui prend en charge et gouverne. Le S majuscule marque le titre. L'alternative « votre Maître » est écartée car elle implique une domination sans bienveillance.

**je façonne** — Le sens retenu est « Création/Production ». Le mot « façonne » est choisi car il rend l'aspect physique et artisanal de l'acte : prendre de l'argile et lui donner forme. L'alternative « je crée » est écartée car « créer » implique faire exister à partir de rien — or Jésus utilise de l'argile comme matière première. L'alternative « je forme » est acceptable et c'est le choix de Hamidullah.

**l'argile** — Le sens retenu est « Matière/Argile ». Le mot « argile » est le terme français courant pour le ṭīn. L'alternative « la glaise » est acceptable (c'est le choix de Hamidullah) mais « argile » est plus courant dans le français contemporain.

**la forme** — Le sens retenu est « Forme/Apparence ». Le mot « forme » est le seul équivalent naturel de hay'a. L'alternative « la figure » (choix de Hamidullah) est acceptable.

**oiseau** — Le sens retenu est « Oiseau ». Le mot « oiseau » est le seul équivalent naturel de ṭayr. Pas d'alternative pertinente.

**je souffle** — Le sens retenu est « Souffle/Expiration ». Le mot « souffle » est le seul équivalent naturel de nafakha. L'alternative « j'insuffle » est plus soutenu mais acceptable.

**il devient** — Le sens retenu est « Être/Existence ». Le mot « devient » est choisi car fa-yakūnu exprime le passage d'un état à un autre — de l'argile inerte à l'oiseau vivant. L'alternative « il est » est trop statique — le verbe ici est dynamique.

**par la permission de Dieu** — Le sens retenu est « Permission/Autorisation ». Le mot « permission » est choisi car il désigne l'autorisation accordée par Dieu. L'alternative « par la volonté de Dieu » est écartée car l'idhn n'est pas la volonté (irāda/mashī'a) mais la permission — une nuance importante.

**je guéris** — Le sens retenu est « Guérison ». Le mot « guéris » est choisi car la forme IV de b-r-' signifie faire revenir à la santé, libérer de la maladie. L'alternative « je purifie » est écartée car trop éloigné du sens médical.

**l'aveugle-né** — Le mot « aveugle-né » est choisi car akmah désigne spécifiquement la cécité congénitale. L'alternative « l'aveugle » (a'mā) est écartée car elle perd la précision de la naissance sans vision.

**le lépreux** — Le sens retenu est « Maladie/Lèpre ». Le mot « lépreux » est le seul équivalent naturel de abraṣ. Pas d'alternative pertinente.

**je donne la vie** — Le sens retenu est « Vie ». Le mot « je donne la vie » est choisi car uḥyī (forme IV causative de ḥ-y-y) signifie littéralement « je fais vivre, je vivifie ». L'alternative « je ressuscite » est écartée car « ressusciter » implique un cadre théologique spécifique (la résurrection) que le verbe arabe ne porte pas — uḥyī dit simplement « donner la vie ».

**les morts** — Le sens retenu est « Mort ». Le mot « morts » est le seul équivalent naturel de mawtā. Pas d'alternative pertinente.

**je vous informe** — Le sens retenu est « Information/Annonce ». Le mot « informe » est choisi car la forme II de n-b-' signifie informer en détail, révéler. L'alternative « je vous apprends » (choix de Hamidullah) est acceptable mais « informer » est plus précis pour rendre la révélation d'une connaissance cachée. L'alternative « je vous annonce » est écartée car « annoncer » implique une nouvelle à venir, alors qu'il s'agit de révéler un fait présent.

**vous mangez** — Le sens retenu est « Nourriture/Manger ». Le mot « mangez » est le seul équivalent naturel de ta'kulūna. Pas d'alternative pertinente.

**vous stockez** — Le sens retenu est « Réserve/Stockage ». Le mot « stockez » est choisi car la forme VIII de dh-kh-r signifie mettre en réserve pour soi-même. L'alternative « vous amassez » (choix de Hamidullah) est acceptable mais « amasser » a une connotation d'accumulation excessive que la racine ne porte pas nécessairement. L'alternative « vous gardez » est trop vague.

**vos maisons** — Le sens retenu est « Habitation/Demeure ». Le mot « maisons » est le seul équivalent naturel de buyūt dans ce contexte domestique.

**cela** — Pronom démonstratif. Pas d'alternative pertinente.

**assurément un signe** — Le sens retenu est « Signe/Preuve ». Le mot « signe » renforcé par « assurément » rend la particule emphatique la-. L'alternative « un miracle » est écartée pour la même raison qu'au pos 9.

**ceux qui accordent confiance** — Le sens retenu est « Confiance/Sécurité ». L'expression « ceux qui accordent confiance » est choisie car le participe mu'min vient de la racine '-m-n dont le sens premier est la sécurité et la confiance. L'alternative « croyants » (choix de Hamidullah et de la plupart des traducteurs) est écartée car « croyant » en français porte le sens post-islamique d'adhérent à une religion codifiée — un rétrécissement sémantique. Le mu'min est d'abord celui qui accorde sa confiance, qui fait confiance au message.

§CRITIQUE§
**je façonne vs je crée** : akhluqu vient de la racine kh-l-q qui signifie créer. Hamidullah donne « je forme ». Notre choix « je façonne » est proche de Hamidullah. L'enjeu est le rapport à la matière : « créer » dit faire exister à partir de rien, ce qui est un attribut exclusivement divin dans le Coran. Or Jésus utilise une matière première (l'argile) — il ne crée pas ex nihilo. « Façonner » rend mieux cet aspect artisanal. La nuance est réelle car le Coran distingue soigneusement entre l'acte divin de création (sans matière) et l'acte humain de fabrication (avec matière).

**l'aveugle-né vs l'aveugle** : al-akmah désigne spécifiquement celui qui est aveugle de naissance — la cécité est congénitale. Le mot pour « aveugle » en général est a'mā. Hamidullah traduit par « l'aveugle-né », confirmant cette distinction. D'autres traducteurs donnent simplement « l'aveugle » (a'mā), ce qui perd la précision du texte. La nuance est importante car elle souligne le caractère miraculeux : guérir une personne qui n'a JAMAIS vu est plus extraordinaire que rendre la vue à quelqu'un qui l'a perdue.

**je donne la vie aux morts vs je ressuscite les morts** : uḥyī est la forme IV causative de ḥ-y-y (vivre) — littéralement « je fais vivre, je vivifie ». Hamidullah traduit par « je ressuscite ». Le mot « ressusciter » porte une charge théologique spécifique : il implique la résurrection, un retour à la vie après la mort dans un cadre eschatologique. Le verbe arabe uḥyī ne porte pas cette charge — il dit simplement « donner la vie ». Notre choix préserve la neutralité du texte arabe.

**vous stockez vs vous amassez** : taddakhirūna est la forme VIII de dh-kh-r (mettre en réserve). Hamidullah traduit par « vous amassez ». Le mot « amasser » en français a une connotation d'accumulation excessive ou avide, alors que iddakhara est neutre — c'est simplement l'acte de mettre de côté pour plus tard. Notre choix « stocker » est plus neutre et rend mieux la racine.

**ceux qui accordent confiance vs croyants** : mu'minīn vient de la racine '-m-n dont le sens premier est la sécurité et la confiance. Le mot « croyants » en français désigne aujourd'hui les adhérents d'une religion — un sens post-islamique qui rétrécit le champ sémantique. Le mu'min dans le Coran est d'abord celui qui accorde sa confiance au message divin, qui fait confiance aux signes. Notre traduction « ceux qui accordent confiance » restitue cette dimension active et relationnelle.`;

  // Segments d'affichage
  const segments = [
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "messager", phon: "rasūlan", arabic: "رَسُولًا", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 2 },
    { fr: "auprès de", phon: "ilā", arabic: "إِلَىٰ", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
    { fr: "les Fils", phon: "banī", arabic: "بَنِىٓ", word_key: "bny", is_particle: false, sense_retenu: "fils/enfants", position: 4 },
    { fr: "d'Israël", phon: "Isrā'īla", arabic: "إِسْرَٰٓءِيلَ", word_key: "sryl", is_particle: false, sense_retenu: "Israël (nom propre)", position: 5 },
    { fr: "que je", phon: "annī", arabic: "أَنِّى", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "certes", phon: "qad", arabic: "قَدْ", word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: "je suis venu à vous", phon: "ji'tukum", arabic: "جِئْتُكُم", word_key: "jyy", is_particle: false, sense_retenu: "venir", position: 8 },
    { fr: "avec un signe", phon: "bi-āyatin", arabic: "بِـَٔايَةٍ", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 9 },
    { fr: "de", phon: "min", arabic: "مِّن", word_key: null, is_particle: true, sense_retenu: null, position: 10 },
    { fr: "votre Seigneur", phon: "rabbikum", arabic: "رَّبِّكُمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 11 },
    { fr: "que je", phon: "annī", arabic: "أَنِّىٓ", word_key: null, is_particle: true, sense_retenu: null, position: 12 },
    { fr: "je façonne", phon: "akhluqu", arabic: "أَخْلُقُ", word_key: "xlq", is_particle: false, sense_retenu: "façonner", position: 13 },
    { fr: "pour vous", phon: "lakum", arabic: "لَكُم", word_key: null, is_particle: true, sense_retenu: null, position: 14 },
    { fr: "de", phon: "mina", arabic: "مِّنَ", word_key: null, is_particle: true, sense_retenu: null, position: 15 },
    { fr: "l'argile", phon: "aṭ-ṭīni", arabic: "ٱلطِّينِ", word_key: "tyn", is_particle: false, sense_retenu: "argile", position: 16 },
    { fr: "comme la forme", phon: "ka-hay'ati", arabic: "كَهَيْـَٔةِ", word_key: "hya", is_particle: false, sense_retenu: "forme", position: 17 },
    { fr: "de l'oiseau", phon: "aṭ-ṭayri", arabic: "ٱلطَّيْرِ", word_key: "tyr", is_particle: false, sense_retenu: "oiseau", position: 18 },
    { fr: "puis", phon: "fa", arabic: "فَ", word_key: null, is_particle: true, sense_retenu: null, position: 19 },
    { fr: "je souffle", phon: "anfukhu", arabic: "أَنفُخُ", word_key: "nfx", is_particle: false, sense_retenu: "souffler", position: 20 },
    { fr: "dedans", phon: "fīhi", arabic: "فِيهِ", word_key: null, is_particle: true, sense_retenu: null, position: 21 },
    { fr: "il devient", phon: "fa-yakūnu", arabic: "فَيَكُونُ", word_key: "kwn", is_particle: false, sense_retenu: "devenir", position: 22 },
    { fr: "un oiseau", phon: "ṭayran", arabic: "طَيْرًۢا", word_key: "tyr", is_particle: false, sense_retenu: "oiseau", position: 23 },
    { fr: "par la permission", phon: "bi-idhni", arabic: "بِإِذْنِ", word_key: "adn", is_particle: false, sense_retenu: "permission", position: 24 },
    { fr: "de Dieu", phon: "allāhi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 25 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 26 },
    { fr: "je guéris", phon: "ubri'u", arabic: "أُبْرِئُ", word_key: "bra", is_particle: false, sense_retenu: "guérir", position: 27 },
    { fr: "l'aveugle-né", phon: "al-akmaha", arabic: "ٱلْأَكْمَهَ", word_key: "akm", is_particle: false, sense_retenu: "aveugle-né", position: 28 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 29 },
    { fr: "le lépreux", phon: "al-abraṣa", arabic: "ٱلْأَبْرَصَ", word_key: "brs", is_particle: false, sense_retenu: "lépreux", position: 30 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 31 },
    { fr: "je donne la vie", phon: "uḥyī", arabic: "أُحْىِ", word_key: "hyy", is_particle: false, sense_retenu: "donner la vie", position: 32 },
    { fr: "aux morts", phon: "al-mawtā", arabic: "ٱلْمَوْتَىٰ", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 33 },
    { fr: "par la permission", phon: "bi-idhni", arabic: "بِإِذْنِ", word_key: null, is_particle: true, sense_retenu: null, position: 34 },
    { fr: "de Dieu", phon: "allāhi", arabic: "ٱللَّهِ", word_key: null, is_particle: true, sense_retenu: null, position: 35 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 36 },
    { fr: "je vous informe", phon: "unabbiʾukum", arabic: "أُنَبِّئُكُم", word_key: "nba", is_particle: false, sense_retenu: "informer", position: 37 },
    { fr: "de ce que", phon: "bimā", arabic: "بِمَا", word_key: null, is_particle: true, sense_retenu: null, position: 38 },
    { fr: "vous mangez", phon: "taʾkulūna", arabic: "تَأْكُلُونَ", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 39 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 40 },
    { fr: "ce que", phon: "mā", arabic: "مَا", word_key: null, is_particle: true, sense_retenu: null, position: 41 },
    { fr: "vous stockez", phon: "taddakhirūna", arabic: "تَدَّخِرُونَ", word_key: "dkhr", is_particle: false, sense_retenu: "stocker", position: 42 },
    { fr: "dans", phon: "fī", arabic: "فِى", word_key: null, is_particle: true, sense_retenu: null, position: 43 },
    { fr: "vos maisons", phon: "buyūtikum", arabic: "بُيُوتِكُمْ", word_key: "byt", is_particle: false, sense_retenu: "maison", position: 44 },
    { fr: "il y a", phon: "inna", arabic: "إِنَّ", word_key: null, is_particle: true, sense_retenu: null, position: 45 },
    { fr: "dans", phon: "fī", arabic: "فِى", word_key: null, is_particle: true, sense_retenu: null, position: 46 },
    { fr: "cela", phon: "dhālika", arabic: "ذَٰلِكَ", word_key: "dlk", is_particle: false, sense_retenu: "cela (démonstratif)", position: 47 },
    { fr: "assurément un signe", phon: "la-āyatan", arabic: "لَـَٔايَةً", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 48 },
    { fr: "pour vous", phon: "lakum", arabic: "لَّكُمْ", word_key: null, is_particle: true, sense_retenu: null, position: 49 },
    { fr: "si", phon: "in", arabic: "إِن", word_key: null, is_particle: true, sense_retenu: null, position: 50 },
    { fr: "vous êtes", phon: "kuntum", arabic: "كُنتُم", word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)", position: 51 },
    { fr: "de ceux qui accordent confiance", phon: "mu'minīna", arabic: "مُّؤْمِنِينَ", word_key: "amn", is_particle: false, sense_retenu: "accorder confiance", position: 52 }
  ];

  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments
  }).eq('id', VA_ID);

  if (vaErr) { console.log('ERREUR VA update:', vaErr.message); return false; }
  console.log('VA update (id=' + VA_ID + '): OK');
  return true;
}

// ═══════════════════════════════════════════════════════════════════
// DAILY PHRASES — vérifier avant d'insérer
// ═══════════════════════════════════════════════════════════════════

async function insertDailyPhrases() {
  console.log('\n=== ÉTAPE 5 — DAILY PHRASES ===\n');

  const dailyPlan = [
    { key: 'tyn', aid: 1276, sense: 'argile', phrases: [
      { arabic: 'صَنَعَ إِبْرِيقًا مِنَ الطِّينِ', phon: "ṣana'a ibrīqan min aṭ-ṭīn", french: "Il a fabriqué une cruche en argile." },
      { arabic: 'لَعِبَ الأَطْفَالُ بِالطِّينِ', phon: "la'iba al-aṭfālu bi-ṭ-ṭīn", french: "Les enfants ont joué avec l'argile." },
      { arabic: 'الطِّينُ مَادَّةٌ طَيِّعَةٌ', phon: "aṭ-ṭīnu māddatun ṭayyi'a", french: "L'argile est une matière malléable." }
    ]},
    { key: 'tyr', aid: 1152, sense: 'oiseau', phrases: [
      { arabic: 'رَأَيْتُ طَيْرًا يَطِيرُ فَوْقَ البَيْتِ', phon: "ra'aytu ṭayran yaṭīru fawqa al-bayt", french: "J'ai vu un oiseau voler au-dessus de la maison." },
      { arabic: 'الطُّيُورُ تُهَاجِرُ فِي الخَرِيفِ', phon: "aṭ-ṭuyūru tuhājiru fī al-kharīf", french: "Les oiseaux migrent en automne." },
      { arabic: 'سَمِعْتُ صَوْتَ طَيْرٍ جَمِيلٍ', phon: "sami'tu ṣawta ṭayrin jamīl", french: "J'ai entendu le chant d'un bel oiseau." }
    ]},
    { key: 'nfx', aid: 1277, sense: 'souffler', phrases: [
      { arabic: 'نَفَخَ فِي النَّارِ لِيُشْعِلَهَا', phon: "nafakha fī an-nāri li-yush'ilahā", french: "Il a soufflé sur le feu pour l'allumer." },
      { arabic: 'نَفَخَ الرِّيحُ بِقُوَّةٍ', phon: "nafakha ar-rīḥu bi-quwwa", french: "Le vent a soufflé avec force." },
      { arabic: 'نَفَخَ البَالُونَ حَتَّى انْفَجَرَ', phon: "nafakha al-bālūna ḥattā infajara", french: "Il a soufflé le ballon jusqu'à ce qu'il éclate." }
    ]},
    { key: 'adn', aid: 722, sense: 'permission', phrases: [
      { arabic: 'لَمْ يَأْذَنْ لَهُ بِالدُّخُولِ', phon: "lam ya'dhan lahu bi-d-dukhūl", french: "Il ne lui a pas donné la permission d'entrer." },
      { arabic: 'اسْتَأْذَنَ قَبْلَ أَنْ يَدْخُلَ', phon: "ista'dhana qabla an yadkhula", french: "Il a demandé la permission avant d'entrer." },
      { arabic: 'بِإِذْنِ اللَّهِ سَنَنْجَحُ', phon: "bi-idhni allāhi sa-nanjaḥ", french: "Avec la permission de Dieu, nous réussirons." }
    ]},
    { key: 'bra', aid: 555, sense: 'guérir', phrases: [
      { arabic: 'بَرِئَ مِنَ المَرَضِ بَعْدَ أَسْبُوعٍ', phon: "bari'a min al-maraḍi ba'da usbū'", french: "Il a guéri de la maladie après une semaine." },
      { arabic: 'أَبْرَأَهُ الطَّبِيبُ مِنَ الجُرْحِ', phon: "abra'ahu aṭ-ṭabību min al-jurḥ", french: "Le médecin l'a guéri de la blessure." },
      { arabic: 'أَنَا بَرِيءٌ مِنْ هَذَا الأَمْرِ', phon: "anā barī'un min hādhā al-amr", french: "Je suis innocent de cette affaire." }
    ]},
    { key: 'brs', aid: 1279, sense: 'lépreux', phrases: [
      { arabic: 'كَانَ البَرَصُ مَرَضًا مُخِيفًا', phon: "kāna al-baraṣu maraḍan mukhīfan", french: "La lèpre était une maladie effrayante." },
      { arabic: 'الأَبْرَصُ يَحْتَاجُ إِلَى عِلَاجٍ', phon: "al-abraṣu yaḥtāju ilā 'ilāj", french: "Le lépreux a besoin de traitement." },
      { arabic: 'عَالَجُوا البَرَصَ فِي المُسْتَشْفَى', phon: "'ālajū al-baraṣa fī al-mustashfā", french: "Ils ont traité la lèpre à l'hôpital." }
    ]},
    { key: 'dkhr', aid: 1280, sense: 'stocker', phrases: [
      { arabic: 'ادَّخَرَ طَعَامًا لِلشِّتَاءِ', phon: "iddakhara ṭa'āman li-sh-shitā'", french: "Il a stocké de la nourriture pour l'hiver." },
      { arabic: 'لَا تَدَّخِرُوا أَكْثَرَ مِمَّا تَحْتَاجُونَ', phon: "lā taddakhirū akthara mimmā taḥtājūn", french: "Ne stockez pas plus que ce dont vous avez besoin." },
      { arabic: 'ذَخِيرَةُ الحَرْبِ نَفِدَتْ', phon: "dhakhīratu al-ḥarbi nafidat", french: "Les munitions (réserves de guerre) se sont épuisées." }
    ]},
    { key: 'byt', aid: 788, sense: 'maison', phrases: [
      { arabic: 'رَجَعَ إِلَى بَيْتِهِ مُتْعَبًا', phon: "raja'a ilā baytihi mut'aban", french: "Il est rentré chez lui fatigué." },
      { arabic: 'بَنَى بَيْتًا جَدِيدًا لِعَائِلَتِهِ', phon: "banā baytan jadīdan li-'ā'ilatihi", french: "Il a construit une nouvelle maison pour sa famille." },
      { arabic: 'البُيُوتُ فِي القَرْيَةِ صَغِيرَةٌ', phon: "al-buyūtu fī al-qaryati ṣaghīra", french: "Les maisons du village sont petites." }
    ]}
  ];

  for (const dp of dailyPlan) {
    const { count } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', dp.aid);
    if (count > 0) {
      console.log(dp.key + ' (aid=' + dp.aid + '): ' + count + ' phrases existantes → SKIP');
    } else {
      const rows = dp.phrases.map(p => ({ analysis_id: dp.aid, sense: dp.sense, arabic: p.arabic, phon: p.phon, french: p.french }));
      const { error: dpErr } = await db.from('word_daily').insert(rows);
      if (dpErr) console.log('ERREUR daily ' + dp.key + ':', dpErr.message);
      else console.log(dp.key + ' (aid=' + dp.aid + '): INSERT ' + rows.length + ' phrases OK');
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// VÉRIFICATION FINALE
// ═══════════════════════════════════════════════════════════════════

async function verify() {
  console.log('\n=== VÉRIFICATION FINALE ===\n');

  // 1. Check VA
  const { data: finalVA } = await db.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  if (!finalVA) { console.log('ERREUR: VA id=' + VA_ID + ' non trouvé!'); return; }

  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log('Segments: ' + impSegs.length + ' importants, ' + partSegs.length + ' particules, ' + finalVA.segments.length + ' total');

  // 2. Check VWA
  const { data: finalVWA } = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: ' + finalVWA.length + ' entrées');
  finalVWA.forEach(w => console.log('  pos=' + w.position + ' ' + w.word_key + ' → ' + w.sense_chosen));

  // 3. Check enriched roots
  const enrichedRoots = [
    { key: 'tyn', aid: 1276 },
    { key: 'tyr', aid: 1152 },
    { key: 'nfx', aid: 1277 },
    { key: 'adn', aid: 722 },
    { key: 'bra', aid: 555 },
    { key: 'brs', aid: 1279 },
    { key: 'dkhr', aid: 1280 },
    { key: 'byt', aid: 788 }
  ];
  console.log('\nRacines enrichies:');
  for (const r of enrichedRoots) {
    const { count } = await db.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log('  ' + r.key + ' (aid=' + r.aid + '): ' + count + ' sens');
  }

  // 4. Check forbidden words
  const hasConceptWord = finalVA.translation_explanation.match(/\bconcept\b/gi);
  const hasPipelineWord = finalVA.translation_explanation.match(/\bpipeline\b/gi);
  if (hasConceptWord) console.log('ALERTE: Mot "concept" trouvé dans explanation!');
  if (hasPipelineWord) console.log('ALERTE: Mot "pipeline" trouvé dans explanation!');
  if (!hasConceptWord && !hasPipelineWord) console.log('Mots interdits: aucun');

  // 5. Check fields presence
  console.log('\nChamps:');
  console.log('  full_translation: ' + (finalVA.full_translation ? 'OK' : 'MANQUANT!'));
  console.log('  translation_arab: ' + (finalVA.translation_arab ? 'OK' : 'MANQUANT!'));
  console.log('  translation_explanation: ' + (finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' caractères)' : 'MANQUANT!'));

  // 6. Check DEMARCHE/JUSTIFICATION/CRITIQUE sections
  const hasD = finalVA.translation_explanation.includes('§DEMARCHE§');
  const hasJ = finalVA.translation_explanation.includes('§JUSTIFICATION§');
  const hasC = finalVA.translation_explanation.includes('§CRITIQUE§');
  console.log('  §DEMARCHE§: ' + (hasD ? 'OK' : 'MANQUANT!'));
  console.log('  §JUSTIFICATION§: ' + (hasJ ? 'OK' : 'MANQUANT!'));
  console.log('  §CRITIQUE§: ' + (hasC ? 'OK' : 'MANQUANT!'));

  // Logs finaux
  console.log('\n=== PIPELINE S3:V49 TERMINÉE ===');
  console.log('Traduction: "' + finalVA.translation_arab.substring(0, 100) + '..."');
}

// ═══════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════

async function main() {
  console.log('╔══════════════════════════════════════╗');
  console.log('║   PIPELINE S3:V49 (verse_id=342)     ║');
  console.log('║   VA_ID=702                           ║');
  console.log('╚══════════════════════════════════════╝\n');

  // Step 1: Enrichments
  await runEnrichments();

  // Step 2: Read concepts from DB
  const conceptsMap = await readConcepts();

  // Step 3: VWA
  const vwaOk = await insertVWA(conceptsMap);
  if (!vwaOk) return;

  // Step 4: Translation
  const transOk = await updateTranslation();
  if (!transOk) return;

  // Step 5: Daily phrases
  await insertDailyPhrases();

  // Step 6: Verification
  await verify();
}

main().catch(e => console.error('ERREUR FATALE:', e));
