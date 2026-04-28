require('dotenv').config({path:'.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// HELPERS
// ============================================================
async function upsertVWA(verse_id, word_key, analysis_axes, position) {
  const sense_chosen = analysis_axes.sense_chosen || null;
  await sb.from('verse_word_analyses').delete().eq('verse_id', verse_id).eq('word_key', word_key);
  const {data,error} = await sb.from('verse_word_analyses')
    .insert({verse_id, word_key, sense_chosen, analysis_axes, position: position || 1})
    .select().single();
  if(error) throw new Error(`VWA ${verse_id}/${word_key}: ${error.message}`);
  return data;
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const {error} = await sb.from('word_daily').insert({analysis_id, sense, arabic, phon, french});
  if(error && !error.message.includes('duplicate')) console.log('  daily warning:', error.message);
}

async function updateVerse(verse_id, fields) {
  const {error} = await sb.from('verse_analyses').update(fields).eq('verse_id', verse_id);
  if(error) throw new Error(`verse_analyses ${verse_id}: ${error.message}`);
}

// ============================================================
// VERSET 97:1 (6126)
// إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ
// ============================================================
async function verse97_1() {
  console.log('\n====== VERSET 97:1 (6126) ======\n');

  // nzl (289) — Descente/Révélation [retenu]
  await upsertVWA(6126, 'nzl', {
    sense_chosen: "fait descendre",
    concept_chosen: "Descente/Révélation",
    concepts: {
      "Descente/Révélation": {
        status: "retenu",
        senses: ["descendre", "faire descendre", "révéler", "envoyer d'en haut", "pluie qui descend"],
        proof_ctx: "Le sens retenu est « Descente/Révélation ». Le verbe anzalnāhu est un accompli de la forme IV avec le pronom nā (nous) et le suffixe hu (le) — « nous l'avons fait descendre ». La forme IV (af'ala) est causative : le sujet FAIT descendre quelque chose. Le Lane's donne pour nazzala et anzala : « faire descendre, envoyer d'en haut ». Le pronom hu (le) renvoie à un objet non nommé dans le verset — le texte ne précise pas ce qui est fait descendre. La distinction avec « Halte/Séjour » : la halte est un état statique d'installation dans un lieu, la descente est un mouvement directionnel de haut en bas. Le verbe anzala avec la forme IV causative impose un mouvement descendant actif, pas un séjour.",
        axe1_verset: "Le verbe anzalnāhu est le verbe principal du verset. Le champ lexical associe un mouvement descendant (nzl) à un moment précis (laylat al-qadr). Le pronom nā (nous) est un pluriel de majesté qui indique l'agent de la descente. Le hu (le) est l'objet — ce qui descend. La descente est donc un acte divin (nous), directionnel (de haut en bas), achevé (accompli), portant sur un objet défini mais non nommé.",
        axe2_voisins: "Le verset 4 reprend la racine n-z-l sous la forme V (tanazzalu, descente continue) pour les anges et l'esprit. Deux descentes sont décrites dans la sourate : celle de l'objet non nommé (v1, accompli ponctuel) et celle des anges (v4, inaccompli continu). La première est un événement unique, la seconde est un processus récurrent.",
        axe3_sourate: "La sourate s'ouvre sur un acte de descente et s'articule autour de la nuit durant laquelle cette descente a eu lieu. Le thème central est : que s'est-il passé durant cette nuit ? La descente est l'événement fondateur.",
        axe4_coherence: "Le Coran utilise anzala pour la descente de la révélation en 2:185 « le mois de Ramadan durant lequel le Coran a été fait descendre ». L'usage en 97:1 est cohérent : un objet fait descendre durant une nuit précise.",
        axe5_frequence: "La descente d'un message divin est le fondement de la mission de justice : sans révélation descendue, pas de preuve claire, pas de guide pour le khalifa. La descente rend la justice possible en fournissant la référence."
      },
      "Halte/Séjour": {
        status: "nul",
        senses: ["s'installer", "faire halte", "hôte", "lieu de descente"],
        proof_ctx: "La halte est un état statique. Le verbe anzala (forme IV causative) décrit un mouvement actif de haut en bas, pas une installation."
      }
    }
  }, 2);
  console.log('  nzl → Descente/Révélation → "fait descendre"');

  // qdr (373) — Mesure/Détermination pour CE verset
  await upsertVWA(6126, 'qdr', {
    sense_chosen: "la mesure",
    concept_chosen: "Mesure/Détermination",
    concepts: {
      "Mesure/Détermination": {
        status: "retenu",
        senses: ["mesurer", "déterminer", "décréter", "destin", "valeur"],
        proof_ctx: "Le sens retenu pour ce verset est « Mesure/Détermination ». Le mot al-qadri est un nom masculin défini au génitif en idāfa avec laylati — « la nuit de la mesure ». Le Lane's donne pour qadara : « mesurer, déterminer, décréter ». Le qadr est l'acte de fixer la mesure de chaque chose — la détermination des affaires. Dans le contexte de la sourate, le verset 4 précise que les anges descendent « pour toute affaire » (min kulli amr), ce qui indique que la nuit est caractérisée par la détermination des affaires, pas par une puissance abstraite. La distinction avec « Puissance/Capacité » : la puissance est un état intérieur permanent (être capable de faire), la mesure est un acte extérieur ponctuel (fixer la quantité et la nature des choses). La nuit est définie par ce qui s'y PASSE (la mesure des affaires), pas par une qualité abstraite (la puissance).",
        axe1_verset: "Le mot al-qadri est en idāfa avec laylati : « la nuit de la mesure ». L'idāfa qualifie la nuit par son contenu — ce qui la caractérise. Le champ lexical du verset est celui d'un événement temporel : descente (nzl) + nuit (lyl) + mesure (qdr). La mesure est ce qui donne son identité à cette nuit. La nuit n'est pas « puissante » (la puissance est un attribut de personne, pas de moment) — elle est la nuit où la mesure des choses est fixée.",
        axe2_voisins: "Le verset 4 dit que les anges descendent « pour toute affaire » (min kulli amrin). Le mot amr (affaire, ordre) est le complément de la descente : les anges viennent pour régler les affaires. Cela confirme que la nuit est celle de la détermination — les affaires sont mesurées, fixées, déterminées. Si la nuit était celle de la puissance, le v4 aurait dit « avec toute puissance », pas « pour toute affaire ».",
        axe3_sourate: "La sourate porte le nom al-Qadr. Son thème est la description de cette nuit exceptionnelle. La sourate répond à la question : pourquoi cette nuit est-elle spéciale ? Parce que c'est la nuit où les affaires sont mesurées et déterminées — et parce que les anges descendent pour les mettre en oeuvre.",
        axe4_coherence: "Le Coran utilise la racine q-d-r dans des contextes de mesure et de détermination : en 54:49 « nous avons créé toute chose avec une mesure (bi-qadarin) ». En 65:3 « Dieu a placé une mesure pour chaque chose (qad ja'ala Allāhu li-kulli shay'in qadran) ». L'usage en 97:1 est cohérent : la nuit est celle où la mesure de chaque chose est fixée.",
        axe5_frequence: "La mesure est le fondement de la justice : mesurer c'est attribuer à chaque chose sa juste part, sa juste proportion. La nuit de la mesure est la nuit où l'ordre juste du monde est fixé. Pour la mission du khalifa, comprendre que l'univers est mesuré avec précision fonde la responsabilité de maintenir cet ordre."
      },
      "Puissance/Capacité": {
        status: "probable",
        senses: ["pouvoir", "être capable"],
        proof_ctx: "La puissance est un état intérieur permanent — être capable de faire quelque chose. Elle appartient à un agent (Dieu est puissant), pas à un moment (la nuit est puissante ne se dit pas naturellement). Le mot qadr en idāfa avec layla caractérise la nuit par son contenu, pas par un attribut. La puissance est une qualité d'un être, pas d'une période temporelle. La distinction philosophique : la puissance est un potentiel qui réside dans l'agent, la mesure est un acte qui porte sur les objets. La nuit n'a pas de potentiel — elle est le cadre temporel d'un acte (la mesure des affaires).",
        axe1_verset: "La puissance fonctionnerait si le sujet était Dieu (Dieu est puissant). Mais le sujet est la nuit — « la nuit de la puissance » est moins naturel que « la nuit de la mesure ». L'idāfa avec un nom de temps favorise un contenu (ce qui se passe durant la nuit) plutôt qu'un attribut abstrait.",
        axe2_voisins: "Le verset 4 parle d'affaires (amr) qui sont traitées durant la nuit. Les affaires sont mesurées/déterminées, pas rendues puissantes.",
        axe3_sourate: "La sourate décrit ce qui se passe durant la nuit (descente, anges, affaires), pas une qualité abstraite de la nuit.",
        axe4_coherence: "Le Coran attribue la puissance (qudra) à Dieu, pas aux moments. Quand le Coran dit qadr pour un moment, il s'agit de mesure (54:49, 65:3).",
        axe5_frequence: "La puissance abstraite n'éclaire pas directement la mission de justice. La mesure des affaires fonde la responsabilité."
      }
    }
  }, 5);
  console.log('  qdr → Mesure/Détermination → "la mesure"');

  await updateVerse(6126, {
    translation_arab: "Nous l'avons fait descendre durant la nuit de la mesure.",
    full_translation: "Nous l'avons certes, fait descendre (le Coran) pendant la nuit d'Al-Qadr.",
    translation_explanation: `§DEMARCHE§

La particule **innā** est composée de inna (certes, particule d'emphase) et du pronom nā (nous). Le « nous » est un pluriel de majesté — une forme qui exprime la grandeur de celui qui parle sans indiquer une pluralité de personnes.

Le verbe **anzalnāhu** est un accompli de la forme IV de n-z-l avec deux pronoms : nā (nous, sujet) et hu (le, objet). La forme IV (af'ala) est causative : « nous avons FAIT descendre quelque chose ». L'accompli indique un événement achevé — la descente a eu lieu, elle est terminée. Le pronom hu (le) renvoie à un objet masculin singulier non nommé dans le verset. Le texte ne précise pas ce qui a été fait descendre.

La préposition **fī** (dans, durant) introduit le cadre temporel.

Le mot **laylati** est un nom féminin au génitif de la racine l-y-l — « nuit ». En idāfa (construction possessive) avec al-qadri, il forme « la nuit de la mesure ». L'idāfa relie la nuit à ce qui la caractérise : la mesure.

Le mot **al-qadri** est un nom masculin défini au génitif. Le Lane's (d'après les sources étymologiques, Lane's Arabic-English Lexicon, Edward Lane, 1863) donne pour la racine q-d-r : « mesurer, déterminer, décréter, fixer la mesure de chaque chose ». L'article al (le) indique que cette mesure est connue, identifiée — pas n'importe quelle mesure.

§JUSTIFICATION§

**fait descendre** — Le sens retenu est « Descente/Révélation ». Le mot « fait descendre » rend la forme IV causative : le sujet fait descendre activement. L'alternative « révélé » est écartée car « révéler » ajoute l'idée de dévoilement d'un secret, alors que anzala décrit simplement un mouvement de haut en bas.

**la mesure** — Le sens retenu est « Mesure/Détermination ». Le mot « mesure » est choisi car il rend l'idée de fixer la proportion et la nature des choses. L'alternative « le destin » est écartée car « destin » en français implique la fatalité et l'impossibilité de changer le cours des événements, alors que qadr est un acte de détermination — fixer les mesures, pas les imposer aveuglément. L'alternative « la puissance » est écartée car la puissance est un attribut de personne, pas un contenu de nuit — « la nuit de la puissance » est moins naturel que « la nuit de la mesure ».

§CRITIQUE§

**Al-Qadr laissé en arabe** — Hamidullah ne traduit pas al-Qadr et le laisse en arabe. Ce choix prive le lecteur francophone du sens du mot. La racine q-d-r signifie « mesurer, déterminer ». Le mot al-qadr en idāfa avec layla caractérise cette nuit par son contenu : c'est la nuit où les mesures sont fixées. Laisser le mot en arabe transforme un nom commun porteur de sens (la mesure) en un nom propre opaque.

**« le Coran » ajouté entre parenthèses** — Hamidullah ajoute « (le Coran) » entre parenthèses. Ce mot est absent du texte arabe qui dit simplement hu (le, pronom masculin singulier). Le texte ne nomme pas ce qui a été fait descendre. Cet ajout est une interprétation qui restreint le sens : le pronom pourrait renvoyer à d'autres choses que le Coran. En ajoutant « le Coran », la traduction ferme une ouverture que le texte laisse ouverte.`,
    segments: [
      {fr:"Nous", pos:"particle", phon:"innā", arabic:"إِنَّآ", is_particle:true, position:1},
      {fr:"l'avons fait descendre", pos:"verbe", phon:"anzalnāhu", arabic:"أَنزَلْنَـٰهُ", word_key:"nzl", is_particle:false, sense_retenu:"faire descendre", position:2},
      {fr:"durant", pos:"particle", phon:"fī", arabic:"فِى", is_particle:true, position:3},
      {fr:"la nuit", pos:"nom", phon:"laylati", arabic:"لَيْلَةِ", word_key:"lyl", is_particle:false, sense_retenu:"nuit", position:4},
      {fr:"de la mesure.", pos:"nom", phon:"al-qadri", arabic:"ٱلْقَدْرِ", word_key:"qdr", is_particle:false, sense_retenu:"mesurer", position:5}
    ]
  });
  console.log('VERSET 97:1 — TERMINÉ ✓');
}

// ============================================================
// VERSET 97:2 (6127)
// وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ
// ============================================================
async function verse97_2() {
  console.log('\n====== VERSET 97:2 (6127) ======\n');

  // dry (2098) — Connaissance/Perception [retenu]
  await upsertVWA(6127, 'dry', {
    sense_chosen: "fait savoir",
    concept_chosen: "Connaissance/Perception",
    concepts: {
      "Connaissance/Perception": {
        status: "retenu",
        senses: ["savoir", "percevoir", "se rendre compte"],
        proof_ctx: "Le sens retenu est « Connaissance/Perception ». Le verbe adrāka est un accompli de la forme IV de d-r-y — « il t'a fait savoir ». La forme IV est causative : le sujet fait savoir, fait percevoir. Le Lane's donne pour darā : « savoir, percevoir, se rendre compte ». La forme IV adrā : « faire savoir, informer ». La question « mā adrāka » est une formule rhétorique coranique qui signifie : « qu'est-ce qui t'a fait savoir ? » — c'est-à-dire : tu ne peux pas savoir par toi-même, c'est au-delà de ta perception habituelle.",
        axe1_verset: "Le verbe adrāka est au centre d'une question rhétorique double : « wa mā adrāka mā laylatu al-qadri ». La première mā est interrogative (qu'est-ce qui), la seconde est aussi interrogative (qu'est-ce que). La construction demande : « qu'est-ce qui t'a fait savoir qu'est-ce que la nuit de la mesure ? ». La question rhétorique amplifie la grandeur de la nuit — elle est au-delà de ce que l'humain peut percevoir seul.",
        axe2_voisins: "Le verset 1 a posé le fait (la descente), le verset 2 pose la question (qu'est-ce que cette nuit ?), le verset 3 donne la réponse (meilleure que mille mois). La séquence fait → question → réponse est un procédé pédagogique qui attire l'attention avant de donner l'information.",
        axe3_sourate: "La formule « mā adrāka » apparaît dans plusieurs sourates pour signaler quelque chose d'extraordinaire (69:3, 74:27, 82:17-18, 83:8, 86:2, 90:12, 101:3, 104:5). Son usage en 97:2 place la nuit de la mesure dans cette catégorie de réalités qui dépassent la perception ordinaire.",
        axe4_coherence: "Le Coran utilise « mā adrāka » toujours pour des réalités difficiles à concevoir. En 101:10 « mā adrāka mā hiya » (qu'est-ce qui t'a fait savoir ce que c'est ?). La formule indique systématiquement que la réponse va surprendre.",
        axe5_frequence: "La question rhétorique rappelle les limites de la connaissance humaine. Pour la mission du khalifa, reconnaître qu'il y a des réalités au-delà de sa perception empêche l'arrogance intellectuelle."
      }
    }
  }, 2);
  console.log('  dry → Connaissance/Perception → "fait savoir"');

  await updateVerse(6127, {
    translation_arab: "Et qu'est-ce qui t'a fait savoir ce qu'est la nuit de la mesure ?",
    full_translation: "Et qui te dira ce qu'est la nuit d'Al-Qadr ?",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et) relie ce verset au précédent.

La construction **mā adrāka** est une question rhétorique. Le mot **mā** est un pronom interrogatif — « qu'est-ce qui ». Le verbe **adrāka** est un accompli de la forme IV de d-r-y avec le pronom suffixe ka (toi) — « il t'a fait savoir ». La forme IV (adrā) est causative : « faire savoir, faire percevoir ». L'accompli est utilisé ici dans un sens rhétorique : la question ne demande pas une réponse factuelle mais signale l'immensité de ce qui va être décrit.

Le second **mā** est aussi interrogatif — « qu'est-ce que ». Il introduit la subordonnée : « ce qu'est la nuit de la mesure ».

Les mots **laylatu al-qadri** reprennent l'expression du v1 — la nuit de la mesure. Le nominatif de laylatu indique que c'est le sujet de la subordonnée.

§JUSTIFICATION§

**fait savoir** — Le sens retenu est « Connaissance/Perception ». La formulation « fait savoir » rend la forme IV causative : quelqu'un ou quelque chose te fait acquérir le savoir. L'alternative « dire » (Hamidullah : « qui te dira ») est écartée car dire implique une parole, alors que adrā implique une perception — faire percevoir est plus large que dire.

§CRITIQUE§

**qui te dira vs qu'est-ce qui t'a fait savoir** — Hamidullah traduit « wa mā adrāka » par « et qui te dira ». Le verbe adrā est à l'accompli (passé), pas au futur. Le mā est un pronom interrogatif de chose (« quoi »), pas de personne (« qui »). La traduction « qu'est-ce qui t'a fait savoir » est plus fidèle à la grammaire. De plus, « dire » réduit la perception à la parole, alors que « faire savoir » inclut toutes les formes de connaissance.`,
    segments: [
      {fr:"Et qu'est-ce qui", pos:"particle", phon:"wa mā", arabic:"وَمَآ", is_particle:true, position:1},
      {fr:"t'a fait savoir", pos:"verbe", phon:"adrāka", arabic:"أَدْرَىٰكَ", word_key:"dry", is_particle:false, sense_retenu:"savoir", position:2},
      {fr:"ce qu'est", pos:"particle", phon:"mā", arabic:"مَا", is_particle:true, position:3},
      {fr:"la nuit", pos:"nom", phon:"laylatu", arabic:"لَيْلَةُ", word_key:"lyl", is_particle:false, sense_retenu:"nuit", position:4},
      {fr:"de la mesure ?", pos:"nom", phon:"al-qadri", arabic:"ٱلْقَدْرِ", word_key:"qdr", is_particle:false, sense_retenu:"mesurer", position:5}
    ]
  });
  console.log('VERSET 97:2 — TERMINÉ ✓');
}

// ============================================================
// VERSET 97:3 (6128)
// لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
// ============================================================
async function verse97_3() {
  console.log('\n====== VERSET 97:3 (6128) ======\n');

  // ḫyr (557) — Bien/Excellence (step1 key: xyr → ḫyr)
  await upsertVWA(6128, 'ḫyr', {
    sense_chosen: "meilleure",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien", "meilleur", "bon"],
        proof_ctx: "Le sens retenu est « Bien/Excellence ». Le mot khayrun est un élatif (comparatif/superlatif) indéfini au nominatif — « meilleure ». La construction khayrun min (meilleure que) est comparative. Le Lane's donne pour khayr : « bien, meilleur, bon ». Le khayr est ce qui est intrinsèquement bon et supérieur. La distinction avec « Choix/Préférence » : le choix est un acte de sélection (on choisit entre A et B), le bien est une qualité intrinsèque (A est meilleur que B en soi). Le verset décrit une qualité de la nuit, pas un acte de choix.",
        axe1_verset: "Le mot khayrun est le khabar (attribut) de la phrase nominale « laylatu al-qadri khayrun min alfi shahrin ». La nuit EST meilleure — c'est une qualité inhérente, pas un jugement subjectif. Le comparatif min (que) introduit l'étalon de mesure : mille mois. Le champ lexical associe la supériorité (khayr) à une mesure temporelle (mille mois) — la valeur de la nuit est exprimée en termes quantitatifs.",
        axe2_voisins: "Le verset 2 posait la question rhétorique (qu'est-ce que cette nuit ?). Le verset 3 répond : elle est meilleure que mille mois. La réponse utilise une comparaison concrète que l'humain peut saisir. Le verset 4 expliquera pourquoi elle est si supérieure (les anges y descendent).",
        axe3_sourate: "La sourate exalte la valeur de la nuit de la mesure. Le verset 3 est le coeur de cette exaltation : une seule nuit vaut plus que mille mois (environ 83 ans — une vie humaine entière). La supériorité est à la fois temporelle (un moment vaut plus qu'une durée) et qualitative.",
        axe4_coherence: "Le Coran utilise khayr dans des comparaisons fréquentes : en 2:184 « jeûner est meilleur (khayrun) pour vous ». En 93:4 « et la fin est meilleure (khayrun) pour toi que le début ». L'usage comparatif de khayrun min est constant dans le Coran.",
        axe5_frequence: "La supériorité d'un moment de mesure sur une durée de temps ordinaire enseigne que la qualité de l'action prime sur la quantité. Pour la mission de justice, un acte juste au bon moment vaut plus que des années d'activité sans direction."
      },
      "Choix/Préférence": {
        status: "nul",
        senses: ["choisir", "préférer"],
        proof_ctx: "Le verset décrit une qualité intrinsèque de la nuit (elle EST meilleure), pas un acte de choix. Le comparatif khayrun min indique une supériorité objective, pas une préférence subjective."
      }
    }
  }, 3);
  console.log('  ḫyr → Bien/Excellence → "meilleure"');

  await updateVerse(6128, {
    translation_arab: "La nuit de la mesure est meilleure que mille mois.",
    full_translation: "La nuit d'Al-Qadr est meilleure que mille mois.",
    translation_explanation: `§DEMARCHE§

La phrase est nominale (sans verbe) : **laylatu al-qadri** (la nuit de la mesure) est le sujet, **khayrun** (meilleure) est l'attribut. En arabe, la phrase nominale exprime un fait permanent et stable — la nuit est meilleure de manière absolue, pas temporaire.

Le mot **khayrun** est un élatif (comparatif) indéfini au nominatif. En arabe, l'élatif est une forme spéciale qui exprime la comparaison sans utiliser de verbe. Le mot est indéfini (sans article al) car il est en position de comparaison.

La préposition **min** (que) introduit l'étalon de comparaison.

Le mot **alfi** est un nom au génitif — « mille ». En idāfa avec **shahrin** (mois, génitif singulier indéfini), il forme « mille mois ». Le singulier shahrin après alf est une règle de grammaire arabe : après les nombres de centaines et de milliers, le nom est au singulier. Mille mois représente environ 83 ans — une vie humaine.

§JUSTIFICATION§

**meilleure** — Le sens retenu est « Bien/Excellence ». Le mot « meilleure » est la forme comparative féminine qui correspond à l'élatif khayrun qualifiant laylatu (nuit, féminin). L'alternative « supérieure » est écartée car « supérieur » est un registre plus formel que « meilleur » qui est du français courant.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La seule différence reste « al-Qadr » non traduit chez Hamidullah, comme au v1.`,
    segments: [
      {fr:"La nuit", pos:"nom", phon:"laylatu", arabic:"لَيْلَةُ", word_key:"lyl", is_particle:false, sense_retenu:"nuit", position:1},
      {fr:"de la mesure", pos:"nom", phon:"al-qadri", arabic:"ٱلْقَدْرِ", word_key:"qdr", is_particle:false, sense_retenu:"mesurer", position:2},
      {fr:"est meilleure", pos:"nom", phon:"khayrun", arabic:"خَيْرٌ", word_key:"ḫyr", is_particle:false, sense_retenu:"meilleur", position:3},
      {fr:"que", pos:"particle", phon:"min", arabic:"مِّنْ", is_particle:true, position:4},
      {fr:"mille", pos:"nom", phon:"alfi", arabic:"أَلْفِ", word_key:"alf", is_particle:false, sense_retenu:"mille", position:5},
      {fr:"mois.", pos:"nom", phon:"shahrin", arabic:"شَهْرٍ", is_particle:false, position:6}
    ]
  });
  console.log('VERSET 97:3 — TERMINÉ ✓');
}

// ============================================================
// VERSET 97:4 (6129)
// تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ
// ============================================================
async function verse97_4() {
  console.log('\n====== VERSET 97:4 (6129) ======\n');

  // mlk (256) — Ange/Messager [retenu]
  await upsertVWA(6129, 'mlk', {
    sense_chosen: "les anges",
    concept_chosen: "Ange/Messager",
    concepts: {
      "Ange/Messager": {
        status: "retenu",
        senses: ["ange", "messager", "message"],
        proof_ctx: "Le sens retenu est « Ange/Messager ». Le mot al-malā'ikatu est un nom pluriel défini au nominatif — « les anges ». Le Lane's donne pour malak : « ange, messager ». Les anges sont les êtres qui portent et exécutent les ordres divins. L'article al indique les anges en général — tous les anges, pas un groupe spécifique. La distinction avec « Royauté/Souveraineté » : la royauté est un statut de pouvoir et de gouvernance, les anges sont des êtres qui exécutent, pas qui gouvernent. La distinction avec « Possession/Autorité » : la possession est un état de propriété, les anges ne possèdent rien — ils transmettent.",
        axe1_verset: "Le mot al-malā'ikatu est le sujet du verbe tanazzalu (descendent). Le champ lexical est celui de la descente et de la mission : les anges descendent (nzl) + l'esprit (rwh) + avec la permission (idhn) + de leur seigneur (rbb) + pour toute affaire (amr). Les anges sont les agents de la descente, les exécutants des affaires.",
        axe2_voisins: "Le verset 1 décrivait la descente d'un objet non nommé. Le verset 4 décrit la descente des agents : les anges et l'esprit. Les deux descentes sont liées — ce qui a été fait descendre (v1) est porté par ceux qui descendent (v4).",
        axe3_sourate: "La sourate décrit la nuit de la mesure comme une nuit où des êtres descendent du ciel pour exécuter les affaires. Les anges sont les acteurs de cette nuit exceptionnelle.",
        axe4_coherence: "Le Coran décrit les anges comme des exécutants des ordres divins : en 66:6 « des anges durs et forts, qui ne désobéissent pas à Dieu en ce qu'il leur ordonne ». En 97:4, les anges descendent « pour toute affaire » — ils exécutent les mesures fixées.",
        axe5_frequence: "Les anges comme exécutants des affaires divines rappellent que l'ordre de l'univers est maintenu par des agents dédiés. Pour la mission de justice, l'idée d'agents qui descendent pour mettre en oeuvre les décisions renforce la certitude que l'ordre est maintenu."
      },
      "Royauté/Souveraineté": {
        status: "nul",
        senses: ["roi", "royaume", "règne", "souverain"],
        proof_ctx: "Le contexte parle d'êtres qui descendent pour exécuter des affaires, pas de souverains qui gouvernent. Le pluriel al-malā'ika est toujours traduit par « anges » dans le Coran."
      },
      "Possession/Autorité": {
        status: "nul",
        senses: ["posséder", "maître", "possesseur"],
        proof_ctx: "Les êtres qui descendent ne possèdent rien — ils exécutent avec la permission de leur seigneur."
      }
    }
  }, 2);
  console.log('  mlk → Ange/Messager → "les anges"');

  // rwh (693) — Esprit/Souffle vital
  await upsertVWA(6129, 'rwh', {
    sense_chosen: "l'esprit",
    concept_chosen: "Esprit/Souffle vital",
    concepts: {
      "Esprit/Souffle vital": {
        status: "retenu",
        senses: ["esprit", "âme"],
        proof_ctx: "Le sens retenu est « Esprit/Souffle vital ». Le mot al-rūḥu est un nom masculin défini au nominatif — « l'esprit ». Le Lane's donne pour rūḥ : « esprit, âme, souffle vital ». Le rūḥ est le principe de vie, ce qui anime les êtres. L'article al indique un esprit identifié, connu — pas n'importe quel esprit. Le texte ne précise pas qui est cet esprit — il le mentionne après les anges et séparément d'eux, ce qui signifie qu'il est distinct des anges. La distinction avec « Souffle/Mouvement » : le vent est un mouvement physique d'air, l'esprit est un principe immatériel. Le contexte est celui de la descente d'êtres, pas de phénomènes météorologiques.",
        axe1_verset: "Le mot al-rūḥu est coordonné avec al-malā'ikatu par wa (et) — « les anges ET l'esprit ». La coordination par « et » indique que l'esprit est distinct des anges mais participe à la même action (descendre). Le champ lexical est celui de la descente d'êtres immatériels : anges + esprit descendent pour les affaires.",
        axe2_voisins: "Le verset 5 dit que la nuit est « paix » (salām). La présence de l'esprit (principe de vie) et des anges durant cette nuit produit la paix. Les êtres qui descendent apportent la paix.",
        axe3_sourate: "La sourate décrit la nuit de la mesure par ses acteurs : les anges et l'esprit. L'esprit est le deuxième acteur de cette nuit, mentionné séparément des anges pour en souligner l'importance distincte.",
        axe4_coherence: "Le Coran mentionne al-rūḥ dans des contextes de révélation : en 16:102 « l'esprit de sainteté l'a fait descendre ». En 26:193 « l'esprit fidèle est descendu avec ». L'esprit est associé à la descente de la révélation — cohérent avec 97:4.",
        axe5_frequence: "L'esprit comme principe de vie qui descend durant la nuit de la mesure signifie que cette nuit est vivifiante — elle apporte la vie et le renouvellement. Pour la mission de justice, la descente de l'esprit est le renouvellement de l'énergie vitale nécessaire à l'action."
      },
      "Souffle/Mouvement": {
        status: "nul",
        senses: ["vent"],
        proof_ctx: "Le contexte est celui de la descente d'êtres, pas de phénomènes météorologiques. Le vent ne descend pas avec la permission d'un seigneur pour des affaires."
      },
      "Apaisement": {
        status: "nul",
        senses: ["repos"],
        proof_ctx: "Le repos est un état passif. Le texte décrit un être qui descend activement — pas un état de repos."
      }
    }
  }, 3);
  console.log('  rwh → Esprit/Souffle vital → "l\'esprit"');

  // amr (428) — Commandement/Autorité [retenu]
  await upsertVWA(6129, 'amr', {
    sense_chosen: "affaire",
    concept_chosen: "Commandement/Autorité",
    concepts: {
      "Commandement/Autorité": {
        status: "retenu",
        senses: ["ordonner", "commander", "nommer gouverneur"],
        proof_ctx: "Le sens retenu est « Commandement/Autorité ». Le mot amrin est un nom masculin indéfini au génitif après kulli — « toute affaire ». Le Lane's donne pour amr : « ordonner, commander ; affaire, chose ». Dans le contexte du verset, amr désigne les affaires qui sont réglées durant la nuit — les ordres qui sont fixés. La construction min kulli amrin (de/pour toute affaire) indique que la descente des anges est liée à TOUTES les affaires sans exception. Le mot amr combine l'idée d'ordre (commandement) et d'affaire (chose à régler) — les affaires sont ordonnées, mises en ordre.",
        axe1_verset: "Le mot amrin est le complément final du verset : « les anges descendent... pour toute affaire ». La préposition min (de/pour) relie la descente aux affaires : les anges descendent POUR régler les affaires. Le champ lexical est celui de l'exécution ordonnée : descente (nzl) + anges (mlk) + permission (idhn) + seigneur (rbb) + toute affaire (amr). Chaque mot ajoute une précision à la chaîne de commandement.",
        axe2_voisins: "Le verset 1 mentionnait la descente d'un objet, le v4 précise que les anges descendent « pour toute affaire ». Les affaires sont la raison de la descente. Le v5 (paix) est le résultat de cette mise en ordre des affaires.",
        axe3_sourate: "La sourate montre que la nuit de la mesure est celle où les affaires sont réglées : mesurées (v1 qadr), mises en oeuvre par les anges (v4 amr), dans la paix (v5 salām).",
        axe4_coherence: "Le Coran utilise amr dans des contextes de décision divine : en 44:4 « durant celle-ci toute affaire sage est distinguée ». L'usage en 97:4 est parallèle : les affaires sont réglées durant la nuit.",
        axe5_frequence: "La mise en ordre de toutes les affaires durant cette nuit rappelle que l'univers fonctionne par des décisions ordonnées, pas par le hasard. Pour la mission de justice, savoir que chaque affaire est ordonnée fonde la responsabilité."
      }
    }
  }, 9);
  console.log('  amr → Commandement/Autorité → "affaire"');

  await updateVerse(6129, {
    translation_arab: "Les anges et l'esprit descendent durant celle-ci, avec la permission de leur seigneur, pour toute affaire.",
    full_translation: "Durant celle-ci descendent les Anges ainsi que l'Esprit, par permission de leur Seigneur pour tout ordre.",
    translation_explanation: `§DEMARCHE§

Le verbe **tanazzalu** est un inaccompli de la forme V de n-z-l — « ils descendent ». La forme V (tafa''ala) est réflexive et progressive : le sujet descend de lui-même, progressivement. L'inaccompli indique une action en cours ou habituelle — les anges descendent chaque nuit de la mesure, c'est récurrent. La distinction avec le v1 est importante : le v1 utilise la forme IV à l'accompli (anzalnā = nous avons fait descendre, un acte unique), le v4 utilise la forme V à l'inaccompli (tanazzalu = ils descendent, un processus récurrent et progressif).

Le mot **al-malā'ikatu** est un nom pluriel défini au nominatif — « les anges ». C'est le sujet du verbe. L'article al inclut tous les anges.

Le mot **wa al-rūḥu** (et l'esprit) est coordonné avec les anges par wa. L'esprit est mentionné séparément, ce qui le distingue des anges comme une entité propre. Le texte ne précise pas l'identité de cet esprit.

Le complément **fīhā** (durant elle) renvoie à la nuit de la mesure.

La préposition **bi-idhni** (avec la permission de) est composée de bi (avec) et idhni (permission), de la racine a-dh-n (oreille, écoute → permission). La permission est l'autorisation de celui qui a le pouvoir.

Le mot **rabbihim** (leur seigneur) est en idāfa avec idhni : « la permission de leur seigneur ».

La construction **min kulli amrin** (pour toute affaire) est le complément final. **Min** peut signifier « pour, à cause de, concernant ». **Kulli** (toute, chaque) est au génitif, suivi de **amrin** (affaire, indéfini) — « pour chaque affaire ».

§JUSTIFICATION§

**descendent** — Le sens retenu est « Descente/Révélation ». Le mot « descendent » rend l'inaccompli de la forme V : un mouvement descendant progressif et récurrent. L'alternative « se déposent » est écartée car trop passif — les anges descendent activement.

**les anges** — Le sens retenu est « Ange/Messager ». Le mot « anges » est le terme courant en français. L'alternative « messagers » est écartée car les anges sont plus que des messagers — ils exécutent les affaires.

**l'esprit** — Le sens retenu est « Esprit/Souffle vital ». Le mot « esprit » rend rūḥ directement. L'alternative « l'âme » est écartée car « âme » en français est associé à l'âme individuelle, tandis que al-rūḥ désigne une entité distincte.

**affaire** — Le sens retenu est « Commandement/Autorité ». Le mot « affaire » rend amr dans son double sens d'ordre et de chose à régler. L'alternative « ordre » est acceptable mais « affaire » est plus large — une affaire inclut à la fois la décision et son exécution.

§CRITIQUE§

**tout ordre vs toute affaire** — Hamidullah traduit amr par « ordre ». Le mot amr dans le Lane's couvre à la fois « ordre, commandement » et « affaire, chose ». Dans ce contexte, « affaire » est plus précis que « ordre » car les anges ne descendent pas juste pour donner des ordres — ils descendent pour régler les affaires, c'est-à-dire pour mettre en oeuvre les mesures de la nuit. L'affaire est plus large que l'ordre : elle inclut la décision et son exécution.

Pour le reste, la traduction est sensiblement la même (majuscules en moins pour les noms communs).`,
    segments: [
      {fr:"descendent", pos:"verbe", phon:"tanazzalu", arabic:"تَنَزَّلُ", word_key:"nzl", is_particle:false, sense_retenu:"descendre", position:1},
      {fr:"les anges", pos:"nom", phon:"al-malā'ikatu", arabic:"ٱلْمَلَـٰٓئِكَةُ", word_key:"mlk", is_particle:false, sense_retenu:"ange", position:2},
      {fr:"et l'esprit", pos:"nom", phon:"wa al-rūḥu", arabic:"وَٱلرُّوحُ", word_key:"rwh", is_particle:false, sense_retenu:"esprit", position:3},
      {fr:"durant celle-ci,", pos:"particle", phon:"fīhā", arabic:"فِيهَا", is_particle:true, position:4},
      {fr:"avec la permission de", pos:"nom", phon:"bi-idhni", arabic:"بِإِذْنِ", word_key:"aḏn", is_particle:false, sense_retenu:"permettre", position:5},
      {fr:"leur seigneur,", pos:"nom", phon:"rabbihim", arabic:"رَبِّهِم", word_key:"rbb", is_particle:false, sense_retenu:"seigneur", position:6},
      {fr:"pour", pos:"particle", phon:"min", arabic:"مِّن", is_particle:true, position:7},
      {fr:"toute", pos:"nom", phon:"kulli", arabic:"كُلِّ", word_key:"kll", is_particle:false, sense_retenu:"tout", position:8},
      {fr:"affaire.", pos:"nom", phon:"amrin", arabic:"أَمْرٍ", word_key:"amr", is_particle:false, sense_retenu:"ordonner", position:9}
    ]
  });
  console.log('VERSET 97:4 — TERMINÉ ✓');
}

// ============================================================
// VERSET 97:5 (6130)
// سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ
// ============================================================
async function verse97_5() {
  console.log('\n====== VERSET 97:5 (6130) ======\n');

  // slm (627) — Paix/Soumission
  await upsertVWA(6130, 'slm', {
    sense_chosen: "paix",
    concept_chosen: "Paix/Soumission",
    concepts: {
      "Paix/Soumission": {
        status: "retenu",
        senses: ["paix", "soumission", "islam", "salut"],
        proof_ctx: "Le sens retenu est « Paix/Soumission ». Le mot salāmun est un nom masculin indéfini au nominatif — « paix ». Le Lane's donne pour salām : « paix, intégrité, salut, soumission ». Le salām est l'état de sécurité totale, l'absence de tout mal et de toute perturbation. Le mot est en position de khabar (attribut) antéposé : « salāmun hiya » = « paix, elle est ». L'antéposition de l'attribut devant le sujet est un procédé d'emphase : la paix est mise en avant, elle est l'information principale. La distinction avec « Intégrité/Santé » : l'intégrité est un état physique de la personne (être sain et sauf), la paix est un état général du moment et du lieu — toute la nuit est paix.",
        axe1_verset: "Le mot salāmun ouvre le verset et résume la nature de la nuit. Le champ lexical final de la sourate est temporal : paix (slm) + elle (hiya, pronom renvoyant à la nuit) + jusqu'au (ḥattā) + lever (ṭle) + de l'aube (fjr). La nuit est paix du début à la fin — la limite est le lever de l'aube. Le mot paix englobe tout ce qui se passe dans la nuit : la descente, les anges, les affaires — tout cela est paix.",
        axe2_voisins: "Le verset 4 décrivait la descente des anges pour toute affaire. Le verset 5 résume le résultat de cette descente : la paix. Les anges descendent pour régler les affaires, et le résultat est la paix. La séquence est : cause (descente pour les affaires) → effet (paix).",
        axe3_sourate: "La sourate se clôt sur la paix. Le mouvement de la sourate va de la descente (v1) à la paix (v5). La nuit de la mesure est une nuit de paix parce que les affaires y sont mises en ordre. La paix est la conclusion logique de la mesure ordonnée.",
        axe4_coherence: "Le Coran utilise salām dans des contextes de bénédiction et de protection : en 36:58 « salām, parole d'un seigneur miséricordieux ». En 56:26 « ils n'entendent que salām, salām ». Le salām est toujours associé à un état de bien complet.",
        axe5_frequence: "La paix est le but ultime de la mission de justice et de civilisation. La nuit de la mesure est paix parce que la justice y est mise en oeuvre par les anges. Le khalifa aspire à reproduire cette paix dans le monde par la justice."
      },
      "Intégrité/Santé": {
        status: "nul",
        senses: ["sain et sauf"],
        proof_ctx: "L'intégrité physique concerne une personne. Le verset dit que la nuit entière EST paix — c'est un état du moment, pas une qualité physique d'un individu."
      }
    }
  }, 1);
  console.log('  slm → Paix/Soumission → "paix"');

  // fjr (587) — Commencement/Lumière
  await upsertVWA(6130, 'fjr', {
    sense_chosen: "l'aube",
    concept_chosen: "Commencement/Lumière",
    concepts: {
      "Commencement/Lumière": {
        status: "retenu",
        senses: ["aube", "aurore"],
        proof_ctx: "Le sens retenu est « Commencement/Lumière ». Le mot al-fajri est un nom masculin défini au génitif — « de l'aube ». Le Lane's donne pour fajr : « aube, le premier éclat de lumière qui fend l'obscurité ». Le fajr est le moment où la lumière commence à percer — la rupture de la nuit par la lumière. L'article al indique l'aube en tant que phénomène connu et régulier. La distinction avec « Éclatement » : l'éclatement est un acte violent de rupture, l'aube est le résultat pacifique de cette rupture — la lumière qui apparaît. La distinction avec « Transgression » : la transgression est un sens moral dérivé (débauche = éclater les limites morales), l'aube est le sens physique premier.",
        axe1_verset: "Le mot al-fajri est le terme qui ferme la sourate : « jusqu'au lever de l'aube ». Le champ lexical final est temporel : la paix dure jusqu'à l'aube. L'aube est la limite naturelle de la nuit — quand la lumière apparaît, la nuit finit. La paix de la nuit de la mesure a une durée définie : du début de la nuit jusqu'à l'aube.",
        axe2_voisins: "La sourate a commencé par « la nuit » (v1) et finit par « l'aube » (v5). Le mouvement est complet : de l'obscurité à la lumière. La nuit de la mesure occupe l'espace entre le crépuscule et l'aube — un temps défini, pas une éternité.",
        axe3_sourate: "L'aube est la frontière finale de la sourate. La sourate couvre un arc temporel : nuit → paix → aube. L'aube marque le retour à la vie ordinaire après la nuit extraordinaire.",
        axe4_coherence: "Le Coran utilise al-fajr en 89:1 « par l'aube » (serment) et en 2:187 « jusqu'à ce que vous distinguiez le fil blanc du fil noir de l'aube ». L'aube est toujours la frontière entre la nuit et le jour.",
        axe5_frequence: "L'aube comme limite de la paix rappelle que les moments exceptionnels ont une fin — le khalifa doit agir dans le temps qui lui est donné. L'aube est aussi le début d'un nouveau jour d'action."
      },
      "Éclatement": {
        status: "nul",
        senses: ["jaillir"],
        proof_ctx: "Le contexte est celui d'une limite temporelle (jusqu'au lever de l'aube), pas d'un acte d'éclatement violent."
      },
      "Transgression": {
        status: "nul",
        senses: ["débauche"],
        proof_ctx: "Le contexte est celui de la paix et de l'aube, pas de la transgression morale."
      }
    }
  }, 4);
  console.log('  fjr → Commencement/Lumière → "l\'aube"');

  await updateVerse(6130, {
    translation_arab: "Paix, elle est, jusqu'au lever de l'aube.",
    full_translation: "Elle est paix et salut jusqu'à l'apparition de l'aube.",
    translation_explanation: `§DEMARCHE§

Le mot **salāmun** est un nom indéfini au nominatif — « paix ». Il est en position de khabar (attribut) antéposé. En arabe, quand l'attribut est placé AVANT le sujet, c'est un procédé d'emphase (taqdīm) : l'information mise en avant est la paix. La phrase normale serait « hiya salāmun » (elle est paix) — en disant « salāmun hiya » (paix, elle est), le texte met la paix au premier plan.

Le pronom **hiya** (elle) est le sujet. Il renvoie à la nuit de la mesure (laylatu al-qadri, féminin).

La particule **ḥattā** (jusqu'à) introduit la limite temporelle.

Le mot **maṭla'i** est un nom de lieu/temps de la racine ṭ-l-' — « le lever, l'apparition ». Le Lane's donne pour ṭala'a : « se lever (soleil, astre), apparaître, émerger ». Le maṭla' est le moment où quelque chose se lève — ici, le moment où l'aube se lève.

Le mot **al-fajri** est un nom défini au génitif — « de l'aube ». En idāfa avec maṭla', il forme « le lever de l'aube ». Le Lane's donne pour fajr : « le premier éclat de lumière, le moment où l'obscurité se fend ». L'aube est le moment de transition entre la nuit et le jour.

§JUSTIFICATION§

**paix** — Le sens retenu est « Paix/Soumission ». Le mot « paix » est choisi car il rend l'état de sécurité totale et d'absence de perturbation. L'alternative « salut » est écartée car « salut » en français a pris un sens religieux chrétien (le salut de l'âme) ou un sens de salutation (dire salut). « Paix » est neutre et universel.

**lever** — Le sens retenu est « Lever/Apparition ». Le mot « lever » est choisi car maṭla' décrit le mouvement de ce qui se lève au-dessus de l'horizon. L'alternative « apparition » est moins précise — le lever est un type d'apparition spécifique lié aux astres et à l'aube.

**l'aube** — Le sens retenu est « Commencement/Lumière ». Le mot « aube » est le terme courant pour le premier éclat de lumière du matin. L'alternative « aurore » est écartée car l'aurore est un registre plus littéraire.

§CRITIQUE§

**paix et salut vs paix** — Hamidullah traduit salāmun par « paix et salut ». Le texte arabe ne contient qu'un seul mot : salāmun. L'ajout de « salut » est une doublure absente du texte. Le salām est unique — « paix » suffit à le rendre.

**apparition vs lever** — Hamidullah traduit maṭla' par « apparition ». Le mot maṭla' vient de ṭ-l-' (se lever) et désigne spécifiquement le moment où un astre ou la lumière se lève au-dessus de l'horizon. « Lever » est plus précis que « apparition » qui est plus vague.`,
    segments: [
      {fr:"Paix,", pos:"nom", phon:"salāmun", arabic:"سَلَـٰمٌ", word_key:"slm", is_particle:false, sense_retenu:"paix", position:1},
      {fr:"elle est,", pos:"particle", phon:"hiya", arabic:"هِىَ", is_particle:true, position:2},
      {fr:"jusqu'au", pos:"particle", phon:"ḥattā", arabic:"حَتَّىٰ", is_particle:true, position:3},
      {fr:"lever", pos:"nom", phon:"maṭla'i", arabic:"مَطْلَعِ", word_key:"tle", is_particle:false, sense_retenu:"se lever (soleil)", position:4},
      {fr:"de l'aube.", pos:"nom", phon:"al-fajri", arabic:"ٱلْفَجْرِ", word_key:"fjr", is_particle:false, sense_retenu:"aube", position:5}
    ]
  });
  console.log('VERSET 97:5 — TERMINÉ ✓');
}

// ============================================================
// PHRASES DU QUOTIDIEN
// ============================================================
async function insertDailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  const roots = {
    nzl: {id:289, sense:"faire descendre", phrases:[
      ["نَزَلَ المَطَر", "nazala al-maṭar", "La pluie est descendue."],
      ["أَنْزَلَ الكِتَاب", "anzala al-kitāb", "Il a fait descendre l'écrit."],
      ["نَزَلَ مِنَ الجَبَل", "nazala min al-jabal", "Il est descendu de la montagne."]
    ]},
    qdr: {id:373, sense:"mesurer", phrases:[
      ["قَدَّرَ اللهُ كُلَّ شَيْء", "qaddara Allāhu kulla shay'", "Dieu a mesuré toute chose."],
      ["بِقَدَرٍ مَعْلُوم", "bi-qadarin ma'lūm", "Avec une mesure connue."],
      ["قَدَرَ عَلَى الأَمْر", "qadara 'alā al-amr", "Il a eu la capacité pour l'affaire."]
    ]},
    dry: {id:2098, sense:"savoir", phrases:[
      ["دَرَى بِالخَبَر", "darā bi-l-khabar", "Il a su la nouvelle."],
      ["مَا أَدْرَاكَ", "mā adrāka", "Qu'est-ce qui t'a fait savoir ?"],
      ["لَا أَدْرِي", "lā adrī", "Je ne sais pas."]
    ]},
    'ḫyr': {id:557, sense:"meilleur", phrases:[
      ["خَيْرُ النَّاسِ أَنْفَعُهُم", "khayru al-nāsi anfa'uhum", "Le meilleur des gens est le plus utile."],
      ["اِخْتَارَ الخَيْر", "ikhtāra al-khayr", "Il a choisi le bien."],
      ["خَيْرٌ مِنْ ذَلِك", "khayrun min dhālika", "Meilleur que cela."]
    ]},
    mlk: {id:256, sense:"ange", phrases:[
      ["المَلَائِكَة حَوْلَ العَرْش", "al-malā'ika ḥawla al-'arsh", "Les anges autour du trône."],
      ["مَلَكَ البِلَاد", "malaka al-bilād", "Il a possédé le pays."],
      ["مَلِكُ المُلُوك", "maliku al-mulūk", "Le roi des rois."]
    ]},
    rwh: {id:693, sense:"esprit", phrases:[
      ["رُوحُ الإِنْسَان", "rūḥu al-insān", "L'esprit de l'être humain."],
      ["رَوْحٌ وَرَيْحَان", "rawḥun wa rayḥān", "Repos et parfum."],
      ["الرُّوح الأَمِين", "al-rūḥ al-amīn", "L'esprit fidèle."]
    ]},
    slm: {id:627, sense:"paix", phrases:[
      ["السَّلَامُ عَلَيْكُم", "al-salāmu 'alaykum", "La paix sur vous."],
      ["دَارُ السَّلَام", "dāru al-salām", "La demeure de la paix."],
      ["سَلِمَ مِنَ الأَذَى", "salima min al-adhā", "Il a été sain et sauf du mal."]
    ]},
    fjr: {id:587, sense:"aube", phrases:[
      ["صَلَاة الفَجْر", "ṣalāt al-fajr", "La prière de l'aube."],
      ["اِنْفَجَرَ المَاء", "infajara al-mā'", "L'eau a jailli."],
      ["طَلَعَ الفَجْر", "ṭala'a al-fajr", "L'aube s'est levée."]
    ]}
  };

  for (const [key, data] of Object.entries(roots)) {
    const {data: existing} = await sb.from('word_daily').select('id').eq('analysis_id', data.id).limit(1);
    if (existing && existing.length > 0) {
      console.log(`  ${key} — phrases existantes, skip`);
      continue;
    }
    for (const [ar, ph, fr] of data.phrases) {
      await insertDaily(data.id, data.sense, ar, ph, fr);
    }
    console.log(`  ${key} — 3 phrases insérées`);
  }

  console.log('\n✓ Phrases du quotidien terminées');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  PIPELINE SOURATE 97 — AL-QADR          ║');
  console.log('║  5 versets, IDs 6126-6130                ║');
  console.log('╚══════════════════════════════════════════╝');

  // Pas de racines manquantes à créer
  // xyr → ḫyr (557) existe, a → aḏn (1009) existe
  console.log('\n✓ Toutes les racines existent en BDD, pas de création nécessaire');

  await verse97_1();
  await verse97_2();
  await verse97_3();
  await verse97_4();
  await verse97_5();
  await insertDailyPhrases();

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║  ✓ PIPELINE SOURATE 97 TERMINÉE          ║');
  console.log('╚══════════════════════════════════════════╝');
}

main().catch(err => { console.error('ERREUR:', err); process.exit(1); });
