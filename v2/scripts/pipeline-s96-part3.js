// Pipeline Sourate 96 (Al-Alaq) — Partie 3: Versets 11-16
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function verse96_11() {
  console.log('\n=== VERSET 96:11 — أَرَءَيْتَ إِن كَانَ عَلَى ٱلْهُدَىٰٓ ===');
  const verse_id = 6117;

  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Deuxième a-ra'ayta rhétorique. Même concept. La question porte cette fois sur une hypothèse : « Et s'il était sur la guidance ? ».",
        axe1_verset: "Le verset dit « as-tu vu, s'il était sur la guidance ? ». La question est conditionnelle (in kāna — s'il était). Le verbe ra'ayta engage l'interlocuteur à considérer un scénario : celui qui est interdit de prier est peut-être sur la bonne voie. La question est rhétorique — la réponse est évidente.",
        axe2_voisins: "Le verset 9-10 posait le cas (interdire un serviteur de prier). Les versets 11-12 posent la première hypothèse (et s'il était guidé et ordonnait la prévention ?). Le verset 13 posera la deuxième hypothèse (et s'il démentait et se détournait ?). C'est une structure ternaire de questions rhétoriques.",
        axe3_sourate: "Les questions rhétoriques renforcent le réquisitoire contre le transgresseur. La sourate construit un argument progressif : le transgresseur empêche un homme qui est peut-être guidé.",
        axe4_coherence: "Le Coran utilise cette structure d'argumentation par hypothèse dans d'autres passages pour forcer la réflexion de l'interlocuteur.",
        axe5_frequence: "La question rhétorique pousse le khalifa à évaluer les conséquences de l'interdiction : empêcher quelqu'un de guidé est une faute grave."
      }
    }
  }, 1);

  // ---- KWN (كون) — id=2577 — "être" ----
  // Forme: verbe accompli kāna — il était
  await upsertVWA(verse_id, 'kwn', 'être', {
    sense_chosen: "être",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être", "venir à l'existence"],
        proof_ctx: "Le sens retenu est « Être/Existence ». Le verbe kāna est un verbe incomplet (nāqiṣ) — il porte le temps (accompli = passé/conditionnel) et sert de support grammatical à l'attribut qui suit ('alā l-hudā — sur la guidance). Après la particule conditionnelle in (si), kāna prend le sens de « s'il était ». C'est un verbe-outil grammatical, pas un verbe de sens plein.",
        axe1_verset: "Le verset dit « s'il était sur la guidance ». Le verbe kāna est le support grammatical de la condition. La préposition 'alā (sur) avec al-hudā (la guidance) exprime un état stable : être sur la guidance, c'est être engagé sur un chemin.",
        axe2_voisins: "Ce verset forme une paire avec le verset 12 : « s'il était sur la guidance, ou s'il ordonnait la prévention ». Les deux hypothèses montrent des comportements vertueux.",
        axe3_sourate: "Le verbe kāna situe l'hypothèse dans le temps : l'interdicteur du verset 9 empêche quelqu'un qui est peut-être dans un état de guidance.",
        axe4_coherence: "Le verbe kāna est le plus fréquent du Coran (1390 occurrences). C'est un outil grammatical universel.",
        axe5_frequence: "L'état d'être sur la guidance est l'état naturel du khalifa qui accomplit sa mission."
      }
    }
  }, 3);

  // ---- HDY (هدي) — id=261 — "guidance" ----
  // Forme: nom défini al-hudā
  await upsertVWA(verse_id, 'hdy', 'guidance', {
    sense_chosen: "guidance",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance"],
        proof_ctx: "Le sens retenu est « Guidance/Direction ». Le Lane's donne : montrer le chemin correct à quelqu'un. La guidance est un acte extérieur et directionnel. Le mot al-hudā est un nom défini — la guidance par excellence, le chemin droit. La préposition 'alā (sur) indique un état stable : être sur la guidance = suivre le bon chemin de manière continue. Distinction avec « Conduite/Comportement » : la conduite est une manière d'agir en général, la guidance est spécifiquement le bon chemin. Distinction avec « Don/Offrande » : le cadeau n'a aucun rapport avec le contexte.",
        axe1_verset: "Le verset dit « s'il était sur la guidance ». Le mot al-hudā est le but de la préposition 'alā — l'état dans lequel se trouve le serviteur interdit de prier. La guidance est le chemin que le seigneur montre. Le champ lexical être + sur + guidance décrit un état de conformité avec la volonté du seigneur.",
        axe2_voisins: "Le verset 12 ajoute « ou s'il ordonnait la prévention ». La guidance (suivre le bon chemin) et la taqwā (se prémunir) sont les deux faces de la vertu : la direction positive et la précaution contre le mal.",
        axe3_sourate: "La guidance s'oppose à la transgression. Le serviteur qui prie (v10) et qui est sur la guidance (v11) est l'antithèse du transgresseur autosuffisant (v6-7).",
        axe4_coherence: "Le Coran utilise al-hudā 316 fois. « Guide-nous dans le chemin droit » (1:6) est la demande fondamentale de l'être humain. La guidance est le thème coranique par excellence.",
        axe5_frequence: "La guidance est la boussole du khalifa. Être sur la guidance, c'est accomplir sa mission de justice en suivant le chemin montré par le seigneur."
      },
      "Don/Offrande": {
        status: "nul",
        senses: ["cadeau", "offrande", "sacrifice"],
        proof_ctx: "Le don n'a aucun rapport avec le contexte. Le verset parle d'un état de guidance, pas d'un cadeau."
      }
    }
  }, 5);

  await sb.from('verse_analyses').update({
    translation_arab: "أَرَءَيْتَ إِن كَانَ عَلَى ٱلْهُدَىٰٓ",
    full_translation: "Vois-tu s'il est sur la bonne voie",
    segments: [
      { fr: "As-tu vu", pos: "verbe", phon: "a-ra'ayta", arabic: "أَرَءَيْتَ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 1 },
      { fr: "si", pos: "particule", phon: "in", arabic: "إِن", is_particle: true, position: 2 },
      { fr: "il était", pos: "verbe", phon: "kāna", arabic: "كَانَ", word_key: "kwn", is_particle: false, sense_retenu: "être", position: 3 },
      { fr: "sur", pos: "préposition", phon: "'alā", arabic: "عَلَى", is_particle: true, position: 4 },
      { fr: "la guidance", pos: "nom", phon: "al-hudā", arabic: "ٱلْهُدَىٰٓ", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset reprend la question rhétorique a-ra'ayta (as-tu vu) du verset 9. Cette fois, la question est suivie d'une condition : in kāna (s'il était). La particule in (si) introduit une hypothèse. Le verbe kāna (il était) est un verbe incomplet (en arabe, il sert de support grammatical pour porter le temps). La préposition 'alā (sur) avec al-hudā (la guidance) forme une expression fixe : « être sur la guidance » = suivre le bon chemin. Le nom al-hudā est défini par al- — c'est la guidance en soi, le chemin droit par excellence.

§JUSTIFICATION§
**guidance** — Le sens retenu est « guidance ». Le mot « guidance » traduit al-hudā comme concept de direction vers le bien. L'alternative « bonne voie » (Hamidullah) est acceptable mais moins précise — « voie » est spatial, « guidance » est directionnel. L'alternative « chemin droit » est trop calquée sur ṣirāṭ al-mustaqīm.

§CRITIQUE§
Les traductions courantes donnent « la bonne voie » (Hamidullah) ou « le droit chemin ». Ces traductions sont fidèles au sens mais perdent la nuance du mot hudā qui est spécifiquement la guidance — l'acte d'être guidé, pas le chemin en soi.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:11 — TERMINÉ');
  console.log('  ray → "voir" | kwn → "être" | hdy → "guidance"');
  console.log('  Traduction : "As-tu vu, s\'il était sur la guidance"');
}

async function verse96_12() {
  console.log('\n=== VERSET 96:12 — أَوْ أَمَرَ بِٱلتَّقْوَىٰٓ ===');
  const verse_id = 6118;

  // ---- AMR (أمر) — id=428 — "ordonner" ----
  await upsertVWA(verse_id, 'amr', 'ordonner', {
    sense_chosen: "ordonner",
    concept_chosen: "Commandement/Autorité",
    concepts: {
      "Commandement/Autorité": {
        status: "retenu",
        senses: ["ordonner", "commander", "nommer gouverneur"],
        proof_ctx: "Le sens retenu est « Commandement/Autorité ». Le Lane's donne : donner un ordre, commander. Le verbe amara est un accompli : il a ordonné. Le complément bi-t-taqwā (la prévention) est l'objet indirect — il ordonne la prévention. L'acte d'ordonner est extérieur et directionnel : l'ordre sort de celui qui commande et atteint celui qui obéit. Distinction avec « Consultation » : consulter est demander un avis, pas donner un ordre. Distinction avec « Affaire/Chose » : l'affaire est un nom, pas un verbe d'autorité.",
        axe1_verset: "Le verset dit « ou s'il ordonnait la prévention ». Le verbe amara est un accompli dans une proposition conditionnelle (suite du « si » du verset 11). Le complément bi-t-taqwā est introduit par bi (à/de). L'ordre de prévention est un acte positif — le serviteur ne se contente pas de suivre la guidance, il la transmet en ordonnant aux autres de se prémunir.",
        axe2_voisins: "Le verset 11 posait la première vertu (être sur la guidance). Le verset 12 ajoute la deuxième (ordonner la prévention). Les deux forment un couple : recevoir la guidance (v11) et la transmettre (v12). Le serviteur interdit de prier est potentiellement un guide et un ordonnateur du bien.",
        axe3_sourate: "L'ordre de prévention s'oppose à l'interdiction de la prière (v9). Le transgresseur interdit un acte positif — le serviteur ordonne un acte positif. Les deux attitudes sont symétriques et opposées.",
        axe4_coherence: "Le Coran ordonne « d'ordonner le bien et d'interdire le mal » (3:104). L'ordre de la taqwā est une forme d'amr bi-l-ma'rūf (ordonner le convenable). C'est un devoir fondamental.",
        axe5_frequence: "Ordonner la prévention est un acte de mission du khalifa. Transmettre la guidance par l'ordre positif est la forme active de la mission de justice."
      },
      "Affaire/Chose": {
        status: "nul",
        senses: ["affaire", "chose"],
        proof_ctx: "Le sens nominal (affaire) ne correspond pas au verbe amara utilisé dans le verset."
      }
    }
  }, 2);

  // ---- WQY (وقي) — id=277 — "prévention/protection" ----
  // Forme: nom at-taqwā (forme V nominalisée)
  await upsertVWA(verse_id, 'wqy', 'prévention', {
    sense_chosen: "prévention",
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["protéger", "préserver", "craindre", "piété", "se prémunir", "éviter"],
        proof_ctx: "Le sens retenu est « Protection/Préservation ». Le Lane's donne : protéger, préserver, mettre à l'abri du danger. Le mot at-taqwā est un nom d'action de la forme V (ittaqā — se prémunir). La taqwā est l'acte de se protéger contre le mal — c'est une précaution permanente, pas un acte ponctuel. Le mot est souvent traduit par « piété » ou « crainte de Dieu » dans les traductions classiques, mais l'étymologie montre que le sens premier est la protection et la prévention. Distinction avec « Bouclier » : le bouclier est un sens concret (objet physique) qui ne correspond pas au contexte abstrait du verset.",
        axe1_verset: "Le verset dit « ou s'il ordonnait la prévention ». Le mot at-taqwā est le complément de l'ordre — ce qui est ordonné. La prévention est définie par al- (la prévention par excellence). Le champ lexical ordonner + prévention décrit un acte de transmission positive : non seulement le serviteur se prémunit, mais il ordonne aux autres de le faire.",
        axe2_voisins: "La taqwā complète la hudā (guidance) du verset 11. Les deux forment un couple : la guidance (direction positive) et la prévention (protection contre le mal). Le serviteur interdit de prier est à la fois guidé et protecteur — il réunit les deux vertus.",
        axe3_sourate: "La taqwā est l'antithèse de la transgression (ṭughyān, v6). Le transgresseur dépasse les limites — celui qui pratique la taqwā respecte les limites et les protège. La sourate oppose ces deux attitudes.",
        axe4_coherence: "La taqwā est un mot central du Coran (258 occurrences dans la racine). « Ô vous les êtres humains, nous vous avons créés... le plus noble d'entre vous auprès de Dieu est le plus prévenant (atqākum) » (49:13). La taqwā est le critère de valeur dans le Coran.",
        axe5_frequence: "La prévention est l'outil du khalifa pour empêcher la corruption. Se prémunir contre le mal et ordonner aux autres de le faire est la définition même de la mission de justice."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "أَوْ أَمَرَ بِٱلتَّقْوَىٰٓ",
    full_translation: "ou s'il ordonne la piété ?",
    segments: [
      { fr: "ou", pos: "particule", phon: "aw", arabic: "أَوْ", is_particle: true, position: 1 },
      { fr: "il ordonnait", pos: "verbe", phon: "amara", arabic: "أَمَرَ", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 2 },
      { fr: "la prévention", pos: "nom", phon: "bit-taqwā", arabic: "بِٱلتَّقْوَىٰٓ", word_key: "wqy", is_particle: false, sense_retenu: "se prémunir", position: 3, prefix_particle: "bi" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction aw (ou) relie ce verset au verset 11 comme deuxième hypothèse. Le verbe amara (il a ordonné) est un accompli dans la suite de la condition du verset 11. Le complément bi-t-taqwā est introduit par la préposition bi. Le mot at-taqwā est un nom d'action de la forme V de la racine w-q-y (protéger). La forme V (ittaqā) signifie « se protéger soi-même, se prémunir ». Le nom taqwā est cette action de se prémunir, rendue permanente et nominalisée.

§JUSTIFICATION§
**ordonnait** — Le sens retenu est « ordonner ». Même analyse qu'au paragraphe ci-dessus.

**prévention** — Le sens retenu est « se prémunir ». Le mot « prévention » est choisi car il traduit la taqwā par son sens étymologique : l'acte de se protéger contre le mal, de prendre des précautions. L'alternative « piété » (Hamidullah) est écartée car c'est un vocabulaire chrétien qui ajoute une dimension de dévotion absente de l'étymologie. L'alternative « crainte de Dieu » est écartée car la racine w-q-y signifie protéger, pas craindre — la crainte est une interprétation exégétique, pas un sens étymologique.

§CRITIQUE§
Les traductions courantes donnent « la piété » (Hamidullah) ou « la crainte de Dieu ». Le mot « piété » vient du latin pietas (devoir envers les dieux) — c'est un concept chrétien qui ne correspond pas à la taqwā. La taqwā est un acte de protection et de prévention, pas un sentiment de dévotion. La racine w-q-y signifie se protéger, se prémunir, mettre un bouclier — pas être pieux au sens chrétien. Traduire par « prévention » restitue le sens actif et protecteur de la taqwā.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:12 — TERMINÉ');
  console.log('  amr → "ordonner" | wqy → "prévention"');
  console.log('  Traduction : "Ou s\'il ordonnait la prévention"');
}

async function verse96_13() {
  console.log('\n=== VERSET 96:13 — أَرَءَيْتَ إِن كَذَّبَ وَتَوَلَّىٰٓ ===');
  const verse_id = 6119;

  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir", concept_chosen: "Vision/Perception",
    concepts: { "Vision/Perception": { status: "retenu", senses: ["voir"], proof_ctx: "Troisième a-ra'ayta. Même concept. Cette fois l'hypothèse est inversée : et si le transgresseur démentait et se détournait ?",
      axe1_verset: "Le verset dit « as-tu vu, s'il démentait et se détournait ? ». La troisième question rhétorique clôt la série. Après avoir envisagé la vertu du serviteur (v11-12), le texte envisage le vice de l'interdicteur : il dément et se détourne.",
      axe2_voisins: "Les versets 11-12 décrivaient la vertu possible du serviteur. Le verset 13 décrit le vice probable de l'interdicteur. Le verset 14 pose la conclusion : « Ne sait-il pas que Dieu voit ? ».",
      axe3_sourate: "La série de trois questions rhétoriques (v9-10, v11-12, v13) construit un réquisitoire progressif qui aboutit au verdict du verset 14.",
      axe4_coherence: "Le Coran utilise le triptyque dément-se détourne-ignore dans plusieurs passages pour décrire le profil du rejeteur.",
      axe5_frequence: "Le khalifa doit distinguer entre celui qui dément et celui qui est sur la guidance — c'est la base du discernement." } }
  }, 1);

  // ---- K (كذب) — id=803 — "démentir" ----
  // Forme: verbe accompli forme II kadhdhaba — démentir
  await upsertVWA(verse_id, 'k', 'démentir', {
    sense_chosen: "démentir", concept_chosen: "Comparaison/Similitude",
    concepts: { "Comparaison/Similitude": { status: "nul", senses: ["comme", "semblable à"], proof_ctx: "Le word_key 'k' en BDD est associé à la particule ka (comme). Mais dans ce verset, le mot est kadhdhaba de la racine k-dh-b (mentir). La forme II (kadhdhaba) signifie démentir, accuser de mensonge. C'est un verbe accompli : il a démenti. Le concept de Comparaison n'a aucun rapport — la racine pertinente est k-dh-b, pas k." },
      "Mensonge/Démenti": {
        status: "retenu",
        senses: ["démentir", "mentir", "accuser de mensonge"],
        proof_ctx: "Le sens retenu est « démentir ». La forme II kadhdhaba signifie accuser de mensonge, rejeter comme faux — c'est directionnel de celui qui dément vers ce qu'il rejette. Le démenti est un acte extérieur de rejet. Le verset décrit l'interdicteur qui non seulement empêche la prière mais rejette activement le message.",
        axe1_verset: "Le verset dit « s'il démentait et se détournait ». Le verbe kadhdhaba est un accompli dans une condition : l'interdicteur dément. Le champ lexical démentir + se détourner forme le portrait du rejeteur : il refuse intellectuellement (dément) et physiquement (se détourne).",
        axe2_voisins: "Le verset 14 pose la conclusion : « ne sait-il pas que Dieu voit ? ». Le démenti et le détournement sont les actes qui mènent à l'ignorance volontaire du verset 14.",
        axe3_sourate: "Le démenti s'oppose au savoir des versets 1-5. L'être humain qui a reçu le savoir dément la source même de ce savoir. C'est l'ingratitude suprême.",
        axe4_coherence: "Le Coran utilise kadhdhaba des dizaines de fois pour décrire ceux qui rejettent le message : « Ceux qui ont démenti nos signes » (7:36). Le démenti est un acte majeur de rejet.",
        axe5_frequence: "Le khalifa qui dément le message trahit sa mission. Le démenti est le rejet de la source même de la guidance qui fonde la justice."
      }
    }
  }, 3);

  // ---- WLY (ولي) — id=599 — "se détourner" ----
  // Forme: verbe accompli forme V tawallā — se détourner
  await upsertVWA(verse_id, 'wly', 'se détourner', {
    sense_chosen: "se détourner", concept_chosen: "Proximité/Protection",
    concepts: {
      "Proximité/Protection": {
        status: "probable",
        senses: ["proche", "ami", "protecteur", "allié"],
        proof_ctx: "La proximité/protection est le sens de la forme I (waliya — être proche). Mais le verset utilise la forme V (tawallā) qui a deux sens selon le contexte : 1) se charger de, prendre en main (proximité) ou 2) se détourner, tourner le dos. Avec la conjonction wa-kadhdhaba (et il a démenti), le contexte est négatif : se détourner est le sens correct, pas se rapprocher. La forme V avec un contexte de démenti indique le rejet.",
        axe1_verset: "Le verset dit « s'il démentait et se détournait ». Le verbe tawallā suit kadhdhaba (démentir) — les deux actes forment un couple de rejet. Le démenti est intellectuel, le détournement est physique. Si tawallā signifiait « se charger de » (sens positif), il contredirait le démenti qui précède. Le parallélisme impose le sens négatif.",
        axe2_voisins: "Le contexte des versets 9-13 construit un réquisitoire. Les versets 11-12 décrivaient la vertu. Le verset 13 décrit le vice. Le détournement est le vice physique qui accompagne le vice intellectuel du démenti.",
        axe3_sourate: "Se détourner est l'opposé de se rapprocher (v19 : « rapproche-toi »). La sourate oppose le détournement du transgresseur au rapprochement du serviteur.",
        axe4_coherence: "Le Coran utilise tawallā dans le sens de se détourner de nombreuses fois : « Quand on lui dit : prends garde à Dieu, l'orgueil le pousse au péché, et il se détourne (tawallā) » (2:206).",
        axe5_frequence: "Se détourner est l'abandon de la mission. Le khalifa qui se détourne cesse d'exercer sa responsabilité."
      },
      "Détournement/Rejet": {
        status: "retenu",
        senses: ["se détourner", "tourner le dos", "s'éloigner"],
        proof_ctx: "Le sens retenu est « Détournement ». La forme V tawallā dans un contexte négatif (après kadhdhaba) signifie se détourner, tourner le dos. Le Lane's donne : il a tourné le dos, il s'est éloigné. C'est un mouvement extérieur et directionnel — on s'éloigne de ce qu'on rejette. Distinction avec « Proximité/Protection » : la proximité est le sens positif de la racine w-l-y (forme I). La forme V avec contexte négatif inverse le sens : au lieu de se rapprocher (waliya), on se détourne (tawallā). La nature philosophique est inversée — la proximité est un mouvement vers, le détournement est un mouvement loin de.",
        axe1_verset: "Le verset dit « et se détournait ». Le verbe tawallā est un accompli dans une condition. Le mouvement est centrifuge : l'être humain s'éloigne de la guidance et du seigneur. Le champ lexical démentir + se détourner forme le rejet complet : par la parole (démenti) et par le corps (détournement).",
        axe2_voisins: "Le détournement (v13) prépare le verdict (v14). Celui qui se détourne ne voit plus — d'où la question du verset 14 : « ne sait-il pas que Dieu voit ? ».",
        axe3_sourate: "Le détournement est l'acte final de la transgression. La sourate progresse : transgression (v6) → autosuffisance (v7) → interdiction (v9) → démenti (v13) → détournement (v13). C'est une escalade du rejet.",
        axe4_coherence: "Le Coran associe systématiquement le démenti et le détournement : « Mais non ! Il a démenti et s'est détourné » (75:32). Le couple kadhdhaba-tawallā est une formule coranique récurrente.",
        axe5_frequence: "Le khalifa qui se détourne abandonne sa mission de justice et de civilisation."
      }
    }
  }, 4);

  await sb.from('verse_analyses').update({
    translation_arab: "أَرَءَيْتَ إِن كَذَّبَ وَتَوَلَّىٰٓ",
    full_translation: "Vois-tu s'il dément et tourne le dos ?",
    segments: [
      { fr: "As-tu vu", pos: "verbe", phon: "a-ra'ayta", arabic: "أَرَءَيْتَ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 1 },
      { fr: "si", pos: "particule", phon: "in", arabic: "إِن", is_particle: true, position: 2 },
      { fr: "il démentait", pos: "verbe", phon: "kadhdhaba", arabic: "كَذَّبَ", word_key: "k", is_particle: false, sense_retenu: "démentir", position: 3 },
      { fr: "et se détournait", pos: "verbe", phon: "wa-tawallā", arabic: "وَتَوَلَّىٰٓ", word_key: "wly", is_particle: false, sense_retenu: "se détourner", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le troisième a-ra'ayta (as-tu vu) reprend la question rhétorique. La particule in (si) introduit une deuxième hypothèse, mais inversée : et si l'interdicteur, lui, démentait et se détournait ? Le verbe kadhdhaba est une forme II (une forme intensive — le dédoublement de la deuxième lettre indique l'insistance) de la racine k-dh-b (mentir). La forme II signifie « démentir, accuser de mensonge ». Le verbe tawallā est une forme V de la racine w-l-y. La forme V (ta-fa''ala) a ici le sens de « se détourner, tourner le dos » — le contexte négatif (après « démentir ») impose cette lecture. Les deux verbes sont à l'accompli dans la condition : l'hypothèse décrit des actes achevés.

§JUSTIFICATION§
**démentait** — Le sens retenu est « démentir ». Le mot « démentir » traduit kadhdhaba avec sa nuance de rejet actif : on ne se contente pas de ne pas croire, on accuse de mensonge. L'alternative « mentait » est écartée car la forme II est transitive — on dément quelque chose, on ne ment pas simplement.

**se détournait** — Le sens retenu est « se détourner ». Le mot « se détournait » traduit tawallā dans son sens négatif. L'alternative « tournait le dos » est acceptable mais plus familier.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:13 — TERMINÉ');
  console.log('  ray → "voir" | k → "démentir" | wly → "se détourner"');
  console.log('  Traduction : "As-tu vu, s\'il démentait et se détournait ?"');
}

async function verse96_14() {
  console.log('\n=== VERSET 96:14 — أَلَمْ يَعْلَم بِأَنَّ ٱللَّهَ يَرَىٰ ===');
  const verse_id = 6120;

  await upsertVWA(verse_id, 'elm', 'savoir', {
    sense_chosen: "savoir", concept_chosen: "Savoir/Connaissance",
    concepts: { "Savoir/Connaissance": { status: "retenu", senses: ["savoir", "connaître"], proof_ctx: "Même concept qu'aux versets 4-5. Ici la forme I ya'lam est niée par lam dans une question rhétorique : « ne sait-il pas ? ». Le savoir qui a été donné (v4-5) est maintenant ignoré par le transgresseur. Le contraste est le cœur de la sourate.",
      axe1_verset: "Le verset dit « ne sait-il pas que Dieu voit ? ». Le verbe ya'lam (inaccompli forme I — savoir) est nié par la question rhétorique a-lam (est-ce que... ne pas). La question suppose une réponse évidente : si, il devrait savoir. Le savoir du verset 14 est le même que celui des versets 4-5 — le seigneur a enseigné, donc le transgresseur n'a aucune excuse pour ignorer que Dieu voit.",
      axe2_voisins: "Le verset 13 décrivait le démenti et le détournement. Le verset 14 pose la conclusion : cette ignorance est inexcusable. Les versets 15-19 développent les conséquences.",
      axe3_sourate: "Le verset 14 est le pivot de la sourate. Il relie le savoir (v1-5) à la transgression (v6-13) par une question : celui qui a reçu le savoir peut-il prétendre ignorer ? La réponse est non.",
      axe4_coherence: "Le Coran pose régulièrement ce type de question rhétorique : « Ne savent-ils pas que Dieu sait ce qu'ils cachent ? » (2:77). La question présuppose que le savoir est accessible.",
      axe5_frequence: "Le khalifa n'a pas d'excuse pour ignorer que Dieu voit. Le savoir qui lui a été donné fonde sa responsabilité." } }
  }, 2);

  await upsertVWA(verse_id, 'alh', 'Dieu', {
    sense_chosen: "Dieu", concept_chosen: "Divinité",
    concepts: { "Divinité": { status: "retenu", senses: ["divinité", "Dieu"], proof_ctx: "Le mot Allāh est le nom propre de Dieu dans le Coran. C'est la divinité — la position relationnelle de celui qui reçoit l'adoration. Dans ce verset, Dieu est celui qui voit. La mention de Dieu après « ton seigneur » (v1,3,8) élargit la perspective : le seigneur personnel (rabbuka) est aussi Dieu (Allāh), la divinité universelle.",
      axe1_verset: "Le verset dit « Dieu voit ». Allāh est le sujet du verbe yarā (il voit). Le nom de Dieu est utilisé ici (pas rabb/seigneur) pour souligner l'universalité : ce n'est pas seulement ton seigneur personnel qui voit, c'est Dieu — la divinité absolue qui voit tout.",
      axe2_voisins: "Les versets précédents utilisaient rabb (seigneur) pour la relation personnelle. Le passage à Allāh élargit : le seigneur personnel est le Dieu de tous. L'interdicteur ne peut pas se cacher de Dieu.",
      axe3_sourate: "La mention de Dieu dans un contexte de surveillance universelle (« Dieu voit ») clôt le réquisitoire et ouvre la sentence (v15-19).",
      axe4_coherence: "Le Coran affirme des dizaines de fois que Dieu voit : « Dieu est clairvoyant sur ce que vous faites » (2:110). La vision divine est un thème majeur.",
      axe5_frequence: "La conscience que Dieu voit est le garde-fou du khalifa. Celui qui sait que Dieu voit ne transgresse pas." } }
  }, 4);

  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir", concept_chosen: "Vision/Perception",
    concepts: { "Vision/Perception": { status: "retenu", senses: ["voir", "percevoir"], proof_ctx: "Le verbe yarā (inaccompli — il voit) est attribué à Dieu. La vision divine est permanente (inaccompli = en continu). Dieu voit tout, en tout temps. Cette vision s'oppose à l'aveuglement du transgresseur qui « ne sait pas ». Le contraste entre ne pas savoir (le transgresseur) et voir (Dieu) est le cœur du verset.",
      axe1_verset: "Le verset dit « Dieu voit ». Le verbe yarā est un inaccompli — une forme qui exprime une action continue et permanente. Dieu voit en permanence, pas ponctuellement. Le verset oppose cette vision permanente à l'ignorance du transgresseur.",
      axe2_voisins: "Les trois questions rhétoriques (v9, 11, 13) aboutissent à cette conclusion : Dieu voit tout. L'interdicteur qui dément et se détourne ne peut pas échapper à la vision divine.",
      axe3_sourate: "La vision divine est la réponse à la transgression. Le transgresseur pense agir en secret — Dieu voit. Cette surveillance fonde les conséquences des versets 15-19.",
      axe4_coherence: "Le Coran attribue la vision à Dieu comme attribut fondamental : baṣīr (clairvoyant) apparaît 51 fois.",
      axe5_frequence: "La vision divine est la garantie ultime de la justice. Le khalifa agit sous le regard de Dieu — c'est ce qui empêche la corruption quand aucun humain ne regarde." } }
  }, 5);

  await sb.from('verse_analyses').update({
    translation_arab: "أَلَمْ يَعْلَم بِأَنَّ ٱللَّهَ يَرَىٰ",
    full_translation: "Ne sait-il pas que vraiment Allah voit ?",
    segments: [
      { fr: "Ne", pos: "particule", phon: "a-lam", arabic: "أَلَمْ", is_particle: true, position: 1 },
      { fr: "sait-il pas", pos: "verbe", phon: "ya'lam", arabic: "يَعْلَم", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 2 },
      { fr: "que", pos: "particule", phon: "bi-anna", arabic: "بِأَنَّ", is_particle: true, position: 3 },
      { fr: "Dieu", pos: "nom", phon: "Allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "voit", pos: "verbe", phon: "yarā", arabic: "يَرَىٰ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhétorique négative. La particule a- (interrogation) combinée à lam (négation du passé) et ya'lam (il sait, inaccompli) forme « ne sait-il pas ? ». La construction bi-anna est composée de la préposition bi et de la particule anna (que) suivie d'une proposition : Allāha yarā (Dieu voit). Le verbe yarā est un inaccompli (une forme qui exprime une action continue) — Dieu voit en permanence, sans interruption. La question rhétorique est un reproche : celui qui a reçu le savoir (v4-5) ne peut pas prétendre ignorer que Dieu voit.

§JUSTIFICATION§
**sait-il pas** — Le sens retenu est « savoir ». La question rhétorique « ne sait-il pas » traduit a-lam ya'lam. C'est une accusation d'ignorance volontaire.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allāh est traduit par « Dieu » en français courant. L'alternative « Allah » est un calque qui ne traduit pas — Allāh est le mot arabe pour Dieu.

**voit** — Le sens retenu est « voir ». L'inaccompli yarā est traduit par le présent « voit » en français — une action continue.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah garde « Allah » au lieu de « Dieu » — c'est un choix de non-traduction qui maintient un exotisme inutile. Le mot arabe Allāh signifie Dieu, et doit être traduit en français.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:14 — TERMINÉ');
  console.log('  elm → "savoir" | alh → "Dieu" | ray → "voir"');
  console.log('  Traduction : "Ne sait-il pas que Dieu voit ?"');
}

async function verse96_15() {
  console.log('\n=== VERSET 96:15 — كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًۢا بِٱلنَّاصِيَةِ ===');
  const verse_id = 6121;

  // ---- NHY (نهي) — forme VIII yantahi — cesser, s'arrêter ----
  await upsertVWA(verse_id, 'nhy', 'cesser', {
    sense_chosen: "cesser", concept_chosen: "Interdiction/Empêchement",
    concepts: { "Interdiction/Empêchement": { status: "retenu", senses: ["interdire", "empêcher", "cesser"],
      proof_ctx: "Même racine qu'au verset 9, mais ici la forme VIII (intahā) signifie « cesser, s'arrêter » — la réflexivité de la forme VIII transforme « interdire » en « s'interdire à soi-même », c'est-à-dire cesser. Le verbe est nié par lam dans une condition : « s'il ne cesse pas ». Le transgresseur qui interdisait la prière aux autres (v9) est maintenant sommé de cesser lui-même.",
      axe1_verset: "Le verset dit « s'il ne cesse pas, nous le saisirons par le front ». Le verbe yantahi est un inaccompli apocopé par lam (négation). La condition la-in lam (si... ne pas) crée une menace : la cessation est la dernière chance avant la punition.",
      axe2_voisins: "Le verset 14 posait le verdict (il devrait savoir que Dieu voit). Le verset 15 pose l'ultimatum (s'il ne cesse pas) et la sentence (nous le saisirons par le front). La progression est : verdict → ultimatum → sentence.",
      axe3_sourate: "La cessation est le seuil entre la transgression et la punition. La sourate offre une porte de sortie : cesser la transgression avant qu'il ne soit trop tard.",
      axe4_coherence: "Le Coran donne souvent un ultimatum avant la punition : « Si vous cessez, ce sera mieux pour vous » (8:19).",
      axe5_frequence: "Le khalifa doit cesser la transgression pour revenir à sa mission. La cessation est le premier pas du retour." } }
  }, 4);

  // ---- SFE (سفع) — id=2617 — "saisir" ----
  // Forme: inaccompli 1ère pers. pluriel nasfa'an — nous saisirons
  await upsertVWA(verse_id, 'sfe', 'saisir', {
    sense_chosen: "saisir", concept_chosen: "Saisie/Agrippement",
    concepts: {
      "Saisie/Agrippement": {
        status: "retenu",
        senses: ["saisir par le toupet", "agripper", "tirer avec violence", "empoigner"],
        proof_ctx: "Le sens retenu est « Saisie/Agrippement ». Le Lane's donne pour le verset 96:15 spécifiquement : « Nous le saisirons assurément par la nāṣiya (le front/toupet) » avec les interprétations : saisir et tirer avec violence, noircir le visage, ou humilier. La forme est un inaccompli à la première personne du pluriel (nasfa'an) avec le nūn d'insistance (le « an » final qui exprime la certitude et la menace). Le Lane's cite Az (al-Azharī) : « nous le saisirons par le front pour le traîner au feu ». Distinction avec « Brûlure/Noircissement » : le noircissement est un effet secondaire de la saisie, pas l'acte principal. Le verset dit « nous saisirons par la nāṣiya » — l'acte est la saisie, pas la brûlure. Distinction avec « Avilissement/Humiliation » : l'humiliation est la conséquence sociale de la saisie, pas l'acte lui-même. Le Lane's donne l'humiliation comme interprétation figurée, mais le sens premier est physique : saisir et tirer.",
        axe1_verset: "Le verset dit « nous le saisirons assurément par le front ». Le verbe nasfa'an est un inaccompli énergique (le nūn de la forme lourde est remplacé par un alif, ce qui est un usage coranique particulier). Le complément bi-n-nāṣiya (par le front/toupet) est l'endroit par lequel la saisie se fait. Le champ lexical saisir + front décrit un acte de domination physique : prendre quelqu'un par le front, c'est le soumettre totalement. La saisie est publique et humiliante.",
        axe2_voisins: "Le verset 16 précise la nature du front saisi : « un front menteur, pécheur ». La saisie porte sur un organe qualifié moralement — le front qui ment et pèche. Les versets 17-18 ajoutent la confrontation : « qu'il appelle son assemblée, nous appellerons les gardes ». La saisie est le début d'une séquence punitive.",
        axe3_sourate: "La saisie est la punition annoncée pour la transgression. La sourate progresse de l'avertissement (kallā, v6, 15) à la menace concrète (la saisie par le front). Le contraste avec les versets 1-5 (le don du savoir) est total : le seigneur qui enseigne (v4) est aussi celui qui saisit (v15).",
        axe4_coherence: "Le Coran utilise la saisie comme punition divine : « Le jour où nous les saisirons de la grande saisie » (44:16). La saisie divine est un acte de justice, pas de cruauté arbitraire.",
        axe5_frequence: "La saisie est la conséquence ultime de la transgression. Le khalifa qui refuse de cesser sa transgression sera saisi — c'est l'avertissement qui fonde la responsabilité."
      },
      "Brûlure/Noircissement": {
        status: "probable",
        senses: ["brûler légèrement", "noircir", "marquer au fer", "altérer la couleur"],
        proof_ctx: "Le noircissement est attesté par le Lane's comme interprétation du verset : « nous noircirons assurément son visage ». Le front (nāṣiya) serait une métonymie pour le visage. La brûlure est un effet de la punition qui marque visiblement le transgresseur. Cependant, le complément bi-n-nāṣiya (par le front) indique un acte physique de saisie (prendre par), pas un acte de brûlure (brûler sur). La préposition bi avec nasfa'a a le sens de « saisir par », pas « brûler sur ».",
        axe1_verset: "Le verset dit « nous le saisirons par le front ». Si le sens était « nous noircirons son front », la construction serait différente en arabe (la-nusawwidanna nāṣiyatahu). La préposition bi indique l'instrument ou le moyen de la saisie, pas la surface brûlée. Le sens physique de la brûlure ne s'accorde pas avec la construction grammaticale.",
        axe2_voisins: "Le verset 16 qualifie le front de « menteur, pécheur ». Ces qualifications morales s'appliquent mieux à un front saisi (la partie du corps qui représente la dignité) qu'à un front noirci. Le noircissement ne nécessite pas de qualification morale du front.",
        axe3_sourate: "La sourate construit un réquisitoire qui aboutit à un châtiment physique : saisir par le front est un acte de soumission forcée. Le noircissement serait un châtiment esthétique moins cohérent avec le ton de la sourate.",
        axe4_coherence: "Le Lane's cite les deux sens pour ce verset précis. Les lexicographes arabes classiques privilégient la saisie avec violence plutôt que le noircissement seul. Al-Azharī parle de « saisir pour traîner au feu ».",
        axe5_frequence: "La saisie physique est une punition plus directe et plus cohérente avec la mission du khalifa : c'est l'acte d'autorité qui met fin à la transgression."
      },
      "Frappe/Gifle": {
        status: "nul",
        senses: ["gifler", "frapper avec un bâton"],
        proof_ctx: "La gifle est un acte ponctuel de violence qui ne correspond pas à la construction du verset. Le complément bi-n-nāṣiya (par le front) indique une saisie, pas une frappe. On ne gifle pas « par le front » — on gifle au visage."
      },
      "Avilissement/Humiliation": {
        status: "peu_probable",
        senses: ["avilir", "rendre méprisable", "humilier"],
        proof_ctx: "L'humiliation est une interprétation figurée attestée par le Lane's. Le verset pourrait signifier « nous l'humilierons ». Cependant, le complément physique bi-n-nāṣiya (par le front) ancre l'acte dans le concret : la saisie physique est première, l'humiliation en est la conséquence.",
        axe1_verset: "Le verset mentionne un organe physique (le front). L'humiliation serait un sens figuré qui ignore l'ancrage physique du verset. Le texte dit « par le front », pas « en sa dignité ».",
        axe2_voisins: "Le verset 16 qualifie physiquement le front (menteur, pécheur). Cette qualification physique confirme que le front est pris au sens propre, pas figuré.",
        axe3_sourate: "L'humiliation serait trop abstraite dans le contexte d'un réquisitoire qui aboutit à des actes concrets (saisie, gardes, v17-18).",
        axe4_coherence: "Le Coran décrit des punitions concrètes, pas abstraites. Le feu, les chaînes, les gardes — tout est physique.",
        axe5_frequence: "L'humiliation est la conséquence de la saisie, pas son synonyme. La saisie est l'acte, l'humiliation est l'effet."
      }
    }
  }, 5);

  // ---- NSY (ناصية = front/toupet) ----
  // Note: le word_key 'nsy' en BDD est pour ن س ي (oubli), mais ici c'est ن ص ي (front)
  // On utilise quand même le word_key 'nsy' car c'est ce que le step1 a assigné
  await upsertVWA(verse_id, 'nsy', 'front', {
    sense_chosen: "front", concept_chosen: "Front/Toupet",
    concepts: { "Front/Toupet": { status: "retenu", senses: ["front", "toupet", "mèche de cheveux", "devant de la tête"],
      proof_ctx: "Le mot nāṣiya vient de la racine ن ص ي (nṣy), pas de ن س ي (nsy/oubli). Le Lane's donne pour nāṣiya : l'endroit où les cheveux poussent sur le devant de la tête, la mèche de cheveux sur le front. C'est la partie la plus visible et la plus exposée du visage — symbole de la dignité et de l'identité. Saisir quelqu'un par la nāṣiya, c'est le soumettre par la partie qui représente sa fierté. Le mot est défini par al- : la nāṣiya par excellence, le front comme symbole.",
      axe1_verset: "Le verset dit « nous le saisirons par le front ». Le mot al-nāṣiya est le complément introduit par bi (par). Le front est l'endroit par lequel la saisie s'effectue — c'est la partie du corps qui représente la dignité, la fierté, l'identité visible. Saisir par le front est l'acte de soumission ultime.",
      axe2_voisins: "Le verset 16 qualifie le front : « un front menteur, pécheur ». Le front n'est pas neutre — il est moralement caractérisé. Les cheveux du front qui se dressent fièrement sont ceux d'un menteur et d'un pécheur.",
      axe3_sourate: "Le front saisi est le symbole de la transgression punie. L'être humain qui se croyait autosuffisant (v7) sera saisi par ce qui symbolise sa fierté.",
      axe4_coherence: "Le Coran mentionne la nāṣiya ailleurs : « [Le jour où] les coupables seront reconnus à leur marque, et saisis par les mèches et les pieds » (55:41). La saisie par le front est un châtiment coranique récurrent.",
      axe5_frequence: "Le front est le siège visible de l'orgueil. Sa saisie est le symbole de la fin de la transgression." } }
  }, 6);

  await sb.from('verse_analyses').update({
    translation_arab: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًۢا بِٱلنَّاصِيَةِ",
    full_translation: "Mais non! S'il ne cesse pas, Nous le saisirons certes, par le toupet",
    segments: [
      { fr: "Mais non !", pos: "particule", phon: "kallā", arabic: "كَلَّا", is_particle: true, position: 1 },
      { fr: "si", pos: "particule", phon: "la-in", arabic: "لَئِن", is_particle: true, position: 2 },
      { fr: "ne", pos: "particule", phon: "lam", arabic: "لَّمْ", is_particle: true, position: 3 },
      { fr: "il ne cesse pas", pos: "verbe", phon: "yantahi", arabic: "يَنتَهِ", word_key: "nhy", is_particle: false, sense_retenu: "interdire", position: 4 },
      { fr: "nous le saisirons", pos: "verbe", phon: "la-nasfa'an", arabic: "لَنَسْفَعًۢا", word_key: "sfe", is_particle: false, sense_retenu: "saisir", position: 5 },
      { fr: "par le front", pos: "nom", phon: "bin-nāṣiyati", arabic: "بِٱلنَّاصِيَةِ", word_key: "nsy", is_particle: false, sense_retenu: "front", position: 6, prefix_particle: "bi" }
    ],
    translation_explanation: `§DEMARCHE§
La particule kallā (mais non !) marque un nouveau refus et un avertissement. La construction la-in lam yantahi (si... ne cesse pas) est une condition négative renforcée par le lām (assurément). Le verbe yantahi est une forme VIII (intahā) de la racine n-h-y (interdire) — la forme VIII transforme « interdire » en « s'interdire à soi-même, cesser ». L'inaccompli apocopé par lam exprime la négation : « s'il ne cesse pas ». Le verbe la-nasfa'an est un inaccompli à la première personne du pluriel (nous) de la racine s-f-' (saisir) avec le nūn d'insistance (nasfa'anna, écrit nasfa'an avec un alif). Le nūn d'insistance exprime la certitude de la menace. Le complément bi-n-nāṣiyati (par le front) indique l'endroit de la saisie. Le mot nāṣiya (de la racine n-ṣ-y) désigne le devant de la tête, l'endroit où poussent les cheveux sur le front.

§JUSTIFICATION§
**cesse** — Le sens retenu est « cesser ». La forme VIII intahā signifie « s'interdire, cesser ». L'alternative « s'arrête » est acceptable mais moins fort.

**saisirons** — Le sens retenu est « saisir ». Le mot « saisirons » traduit nasfa'an par son sens premier dans le Lane's : saisir par le front et tirer. L'alternative « traînerons » est trop libre — le verbe arabe dit saisir, pas traîner (le traînage est la conséquence).

**front** — Le mot nāṣiya est traduit par « front ». L'alternative « toupet » (Hamidullah) est du français vieilli. L'alternative « mèche » est trop précis sur les cheveux seuls.

§CRITIQUE§
Hamidullah traduit « nous le saisirons certes, par le toupet ». Le mot « toupet » est vieilli et familier en français moderne (il évoque l'audace plutôt que le front). « Front » est plus clair et courant. Le sens global est le même dans toutes les traductions.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:15 — TERMINÉ');
  console.log('  nhy → "cesser" | sfe → "saisir" | nsy → "front"');
  console.log('  Traduction : "Mais non ! S\'il ne cesse pas, nous le saisirons par le front"');
}

async function verse96_16() {
  console.log('\n=== VERSET 96:16 — نَاصِيَةٍ كَـٰذِبَةٍ خَاطِئَةٍ ===');
  const verse_id = 6122;

  await upsertVWA(verse_id, 'nsy', 'front', {
    sense_chosen: "front", concept_chosen: "Front/Toupet",
    concepts: { "Front/Toupet": { status: "retenu", senses: ["front", "toupet"],
      proof_ctx: "Même mot qu'au verset 15 mais ici sans article (nāṣiyatin, indéfini avec tanwīn). C'est une badal (apposition explicative) : « un front menteur, pécheur ». L'indéfinition donne une valeur de mépris : pas le front en soi, mais un front de cette nature.",
      axe1_verset: "Le verset dit « un front menteur, pécheur ». Trois mots indéfinis au génitif forment une qualification dégradante. Le front n'est pas neutre — il est caractérisé par le mensonge et le péché.",
      axe2_voisins: "Le verset 15 annonçait la saisie par le front. Le verset 16 qualifie ce front. C'est une précision qui aggrave le portrait du transgresseur.",
      axe3_sourate: "La qualification morale du front conclut le réquisitoire. Le transgresseur est identifié par son organe le plus visible : son front est celui d'un menteur et d'un pécheur.",
      axe4_coherence: "Le Coran qualifie moralement des parties du corps : « des cœurs aveugles » (22:46), « des langues menteuses » (16:116). Le front menteur est dans la même veine.",
      axe5_frequence: "Le front du khalifa doit être celui de la vérité, pas du mensonge. La qualification morale rappelle que chaque partie du corps rend des comptes." } }
  }, 1);

  // ---- K/KDB — "menteur" — participe actif kādhibatin ----
  await upsertVWA(verse_id, 'k', 'menteur', {
    sense_chosen: "menteur", concept_chosen: "Mensonge/Démenti",
    concepts: { "Mensonge/Démenti": { status: "retenu", senses: ["démentir", "mentir", "menteur"],
      proof_ctx: "Le mot kādhibatin est un participe actif féminin de la racine k-dh-b (mentir) — « menteuse ». Le participe actif (une forme qui dit que le sujet FAIT l'action activement et en continu) qualifie le front comme activement menteur, pas ponctuellement. Le front ment en continu — il affiche une fierté qui ne correspond pas à la réalité.",
      axe1_verset: "Le verset dit « un front menteur, pécheur ». Le participe actif kādhibatin qualifie le front comme agent du mensonge. Le front qui se dresse fièrement ment sur la nature de son propriétaire.",
      axe2_voisins: "Le démenti du verset 13 (kadhdhaba) revient ici sous forme de qualification permanente (kādhiba). Le menteur du verset 13 est maintenant marqué physiquement.",
      axe3_sourate: "Le mensonge est le vice intellectuel du transgresseur. Il dément (v13) et son front est menteur (v16).",
      axe4_coherence: "Le Coran utilise kādhib/kādhiba pour qualifier les menteurs et les mensonges : « visage menteur » est cohérent avec le style coranique.",
      axe5_frequence: "Le khalifa doit être véridique. Le mensonge est l'antithèse de la mission de justice." } }
  }, 2);

  // ---- XTA (خطأ) — id=572 — "pécheur" ----
  // Forme: participe actif féminin khāṭi'atin
  await upsertVWA(verse_id, 'xta', 'pécheur', {
    sense_chosen: "pécheur", concept_chosen: "Erreur/Faute",
    concepts: { "Erreur/Faute": { status: "retenu", senses: ["pécher", "erreur", "faute", "manquer", "se tromper"],
      proof_ctx: "Le sens retenu est « Erreur/Faute ». Le Lane's donne : manquer la cible, s'écarter du droit chemin. Le participe actif khāṭi'a qualifie le front comme activement pécheur — il commet l'erreur en continu. La faute est un écart par rapport à la norme juste. Combiné avec « menteur », le portrait est complet : le transgresseur ment et s'écarte du chemin.",
      axe1_verset: "Le verset dit « un front menteur, pécheur ». Le participe actif khāṭi'atin (féminin pour s'accorder avec nāṣiya) qualifie le front comme source active d'erreurs. Le champ lexical menteur + pécheur forme la double qualification morale du transgresseur.",
      axe2_voisins: "Le verset 15 annonçait la punition. Le verset 16 en justifie la raison : le front est menteur et pécheur. La punition est proportionnelle aux vices.",
      axe3_sourate: "Le péché est l'aboutissement de la transgression (v6). Transgresser → se croire autosuffisant → interdire la prière → démentir → pécher. C'est une escalade.",
      axe4_coherence: "Le Coran utilise khāṭi' pour le pécheur et khaṭī'a pour le péché : « Quiconque commet une faute (khaṭī'a) la commet contre lui-même » (4:111). Le péché est un manquement personnel.",
      axe5_frequence: "Le khalifa qui pèche trahit sa mission. Le péché est l'écart par rapport au chemin de justice." } }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "نَاصِيَةٍ كَـٰذِبَةٍ خَاطِئَةٍ",
    full_translation: "le toupet d'un menteur, d'un pécheur",
    segments: [
      { fr: "Un front", pos: "nom", phon: "nāṣiyatin", arabic: "نَاصِيَةٍ", word_key: "nsy", is_particle: false, sense_retenu: "front", position: 1 },
      { fr: "menteur", pos: "adjectif", phon: "kādhibatin", arabic: "كَـٰذِبَةٍ", word_key: "k", is_particle: false, sense_retenu: "menteur", position: 2 },
      { fr: "pécheur", pos: "adjectif", phon: "khāṭi'atin", arabic: "خَاطِئَةٍ", word_key: "xta", is_particle: false, sense_retenu: "pécheur", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une apposition explicative (badal) du « front » du verset 15. Les trois mots sont au génitif indéfini (tanwīn -in). Le mot nāṣiyatin (un front) est repris pour être qualifié. Kādhibatin est un participe actif féminin (une forme qui dit que le sujet FAIT l'action activement et en continu) de la racine k-dh-b (mentir) — « menteuse ». Khāṭi'atin est un participe actif féminin de la racine kh-ṭ-' (manquer la cible, pécher) — « pécheresse ». Les deux participes actifs indiquent que le front ment et pèche en permanence, par nature — ce n'est pas un incident isolé.

§JUSTIFICATION§
**front** — Même mot qu'au verset 15.

**menteur** — Le mot « menteur » traduit kādhiba. Le participe actif traduit la permanence de l'acte. L'alternative « mensonger » est plus littéraire et moins courant.

**pécheur** — Le mot « pécheur » traduit khāṭi'a. L'alternative « fautif » est plus neutre mais perd la gravité du péché.

§CRITIQUE§
Hamidullah traduit « le toupet d'un menteur, d'un pécheur ». Il transfère les qualificatifs du front à la personne (« d'un menteur » au lieu de « menteur »). Le texte arabe qualifie le front lui-même, pas la personne — les participes actifs sont féminins pour s'accorder avec nāṣiya (féminin). Cette nuance montre que le corps même du transgresseur est marqué par ses actes.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 96:16 — TERMINÉ');
  console.log('  nsy → "front" | k → "menteur" | xta → "pécheur"');
  console.log('  Traduction : "Un front menteur, pécheur"');
}

async function main() {
  await verse96_11();
  await verse96_12();
  await verse96_13();
  await verse96_14();
  await verse96_15();
  await verse96_16();
  console.log('\n=== PARTIE 3 TERMINÉE (versets 11-16) ===');
}

main().catch(console.error);
