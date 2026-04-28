// Pipeline Sourate 92 (Al-Layl) — Partie 2: Versets 8-14
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

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  const { error } = await sb.from('word_daily').insert(rows);
  if (error) console.log(`  Daily ERROR:`, error.message);
  else console.log(`  Daily inserted ${rows.length} phrases for id=${analysis_id}`);
}

// ================================================================
// CONTEXTE SOURATE 92 (Al-Layl / La Nuit) — suite
// ================================================================
// v8-10 : deuxieme chemin — l'avare qui se croit autosuffisant et dement
// v11-13 : transition — la guidance appartient a Dieu, l'au-dela et l'ici-bas aussi
// v14 : avertissement — un feu qui flambe
// Miroir v5-7 (donner, craindre, confirmer le bien → facilite)
//    vs v8-10 (avarice, autosuffisance, dementir le bien → difficulte)

async function verse92_8() {
  console.log('\n=== VERSET 92:8 — وَأَمَّا مَنۢ بَخِلَ وَٱسْتَغْنَىٰ ===');
  const verse_id = 6066;

  // ---- BXL (بخل) — id=2068 — "etre avare" ----
  // Forme: bakhila — verbe accompli forme I, 3eme pers. masc. sing. (il a ete avare)
  await upsertVWA(verse_id, 'bxl', 'etre avare', {
    sense_chosen: "etre avare",
    concept_chosen: "Avarice/Rétention",
    concepts: {
      "Avarice/Rétention": {
        status: "retenu",
        senses: ["etre avare", "retenir", "parcimonie", "avarice"],
        proof_ctx: "Le sens retenu est « Avarice/Retention ». Le Lane's (Edward Lane, 1863) donne pour la racine b-kh-l : etre avare, retenir ce qu'on possede, refuser de donner, parcimonie. Le verbe bakhila est a la forme I accompli, troisieme personne du masculin singulier : « il a ete avare ». L'avarice dans cette racine est un acte volontaire de retention — ce n'est pas la pauvrete (absence de moyens) mais le refus de partager malgre les moyens. Le bukhl est l'oppose exact du ita (donner, v5) — le premier chemin donne, le deuxieme retient. Le Lane's precise que le bakhil est celui qui possede mais refuse de lacher, qui serre ce qu'il a par peur de perdre. C'est un concept unique dans cette racine — tous les sens convergent vers la retention volontaire.",
        axe1_verset: "Le verset dit « quant a celui qui est avare et se croit autosuffisant ». Le verbe bakhila ouvre la description du deuxieme chemin. Le champ lexical est celui de la retention et du refus : avarice + autosuffisance. Les deux verbes (bakhila et istaghna) forment une paire logique — celui qui retient ses biens se croit independant. Le wa- (et) qui relie les deux n'est pas simplement additif, il est causal : l'avarice decoule de l'illusion d'autosuffisance, ou inversement l'autosuffisance justifie l'avarice.",
        axe2_voisins: "Le verset 5 disait « quant a celui qui donne et craint ». Le verset 8 oppose : « quant a celui qui est avare et se croit autosuffisant ». Le contraste est terme a terme : donner vs retenir, craindre vs se croire autosuffisant. Le verset 6 parlait de confirmer le bien — le verset 9 parlera de dementir le bien. La structure en miroir est parfaite sur trois versets de chaque cote.",
        axe3_sourate: "La sourate 92 est construite autour du contraste entre deux chemins. L'avarice est le premier trait du deuxieme chemin — elle est le contraire de la generosite du premier chemin. Le verset 8 ouvre la deuxieme moitie du contraste qui culminera dans la facilitation vers la difficulte (v10). L'avarice n'est pas un simple defaut moral ici, elle est le premier maillon d'une chaine causale qui mene a la perdition.",
        axe4_coherence: "Le Coran utilise bakhila et ses derives dans plusieurs passages. La sourate 47:38 dit : « celui qui est avare, c'est contre lui-meme qu'il est avare ». La sourate 57:24 associe l'avarice a l'orgueil. La racine b-kh-l dans le Coran est toujours negative — elle designe un manquement fondamental a la solidarite et a la generosite. Le bakhil est l'oppose du munfiq (celui qui depense dans le chemin de Dieu).",
        axe5_frequence: "L'avarice est l'echec fondamental du khalifa dans sa mission de redistribution. Le khalifa recoit des moyens (richesse, capacites, temps) pour les redistribuer au service de la collectivite. Celui qui retient ces moyens trahit sa mission. L'avarice n'est pas seulement un defaut personnel — elle est une rupture du pacte de responsabilite qui lie le khalifa a sa communaute. Le verset situe l'avarice comme point de depart d'une spirale descendante."
      }
    }
  }, 1);

  // ---- GNY (غني) — id=2584 — "se croire autosuffisant" ----
  // Forme: istaghna — verbe accompli forme X, 3eme pers. masc. sing.
  await upsertVWA(verse_id, 'gny', 'se croire autosuffisant', {
    sense_chosen: "se croire autosuffisant",
    concept_chosen: "Richesse/Autosuffisance",
    concepts: {
      "Richesse/Autosuffisance": {
        status: "retenu",
        senses: ["etre riche", "se passer de", "etre autosuffisant", "enrichir"],
        proof_ctx: "Le sens retenu est « Richesse/Autosuffisance ». Le Lane's (Edward Lane, 1863) donne pour la racine gh-n-y : etre riche, se passer de, n'avoir besoin de rien. La forme X istaghna signifie « se considerer comme autosuffisant, se croire riche au point de ne pas avoir besoin des autres ni de Dieu ». Le verbe est a la forme X accompli, troisieme personne du masculin singulier : « il s'est cru autosuffisant ». La forme X ajoute une dimension reflexive et pretentieuse — ce n'est pas simplement etre riche (ghani) mais se considerer soi-meme comme n'ayant besoin de rien. L'ironie sera revelee au verset 11 ou la meme racine (yughni) montrera que cette richesse ne servira a rien quand il chutera.",
        axe1_verset: "Le verset dit bakhila wa-istaghna — « il a ete avare et s'est cru autosuffisant ». Le verbe istaghna est le deuxieme trait du deuxieme chemin. Le champ lexical est celui de l'isolement volontaire : retenir (avarice) + se croire independant (autosuffisance). La forme X (istaf'ala) exprime la pretention — il ne s'agit pas d'une richesse reelle mais d'une perception erronee de soi. Celui qui se croit autosuffisant refuse de reconnaitre sa dependance envers Dieu et envers les autres.",
        axe2_voisins: "Le verset 5 disait wa-ittaqa (et il a craint) — la crainte reconnait la dependance envers Dieu. Le verset 8 oppose wa-istaghna (et il s'est cru autosuffisant) — l'autosuffisance nie cette dependance. Le contraste ittaqa vs istaghna est le coeur du message : la crainte sauve, l'arrogance perd. Le verset 11 reprendra la meme racine gny pour montrer l'echec de cette autosuffisance : son bien ne lui servira a rien.",
        axe3_sourate: "La sourate 92 oppose deux attitudes fondamentales : la reconnaissance de la dependance (craindre, donner, confirmer) et l'illusion d'independance (retenir, se croire autosuffisant, dementir). L'autosuffisance est l'attitude centrale du deuxieme chemin — elle est la racine de l'avarice et du dementi. Celui qui pense n'avoir besoin de rien n'a aucune raison de donner ni de craindre.",
        axe4_coherence: "Le Coran utilise istaghna dans d'autres passages avec la meme connotation negative. La sourate 96:7 dit : « l'etre humain transgresse parce qu'il se voit autosuffisant (istaghna) ». La sourate 80:5 : « celui qui se croit autosuffisant (istaghna), tu t'empresses vers lui ». L'autosuffisance est systematiquement presentee comme une illusion dangereuse qui mene a la transgression.",
        axe5_frequence: "L'autosuffisance est la negation de la mission du khalifa. Le khalifa est par definition un mandataire — il agit au nom de Dieu, avec des moyens recus de Dieu. Celui qui se croit autosuffisant oublie qu'il est un mandataire et se prend pour un souverain autonome. Cette confusion entre le mandataire et le souverain est la source de la corruption sur terre. Le verset montre que cette illusion est le debut de la chute."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَأَمَّا مَنۢ بَخِلَ وَٱسْتَغْنَىٰ",
    full_translation: "Et quant a celui qui est avare, se croit auto-suffisant",
    segments: [
      { fr: "Et quant a", pos: "particule", phon: "wa-amma", arabic: "وَأَمَّا", is_particle: true, position: 0 },
      { fr: "celui qui", pos: "pronom relatif", phon: "man", arabic: "مَنۢ", is_particle: true, position: 0 },
      { fr: "est avare", pos: "verbe", phon: "bakhila", arabic: "بَخِلَ", word_key: "bxl", is_particle: false, sense_retenu: "etre avare", position: 1 },
      { fr: "et se croit autosuffisant", pos: "verbe", phon: "wa-istaghna", arabic: "وَٱسْتَغْنَىٰ", word_key: "gny", is_particle: false, sense_retenu: "se croire autosuffisant", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient deux particules introductives (wa-amma man = et quant a celui qui) suivies de deux verbes accomplis coordonnes : bakhila (il a ete avare, forme I de b-kh-l) et istaghna (il s'est cru autosuffisant, forme X de gh-n-y). Le Lane's (Edward Lane, 1863) donne pour b-kh-l : etre avare, retenir, parcimonie. Pour la forme X de gh-n-y : se considerer comme riche, se croire autosuffisant, se passer de. La structure wa-amma man est le miroir exact du verset 5 (fa-amma man) — elle introduit le deuxieme terme du contraste.

§JUSTIFICATION§
**etre avare** — Le sens retenu est « etre avare » pour bakhila. Le Lane's donne : retenir, etre avare, refuser de donner. L'alternative « etre econome » est ecartee car le bukhl n'est pas la prudence financiere mais le refus de partager malgre les moyens. L'alternative « retenir » est acceptable mais « etre avare » est plus explicite en francais.

**se croire autosuffisant** — Le sens retenu est « se croire autosuffisant » pour istaghna. Le Lane's donne pour la forme X : se considerer comme n'ayant besoin de rien. L'alternative « s'enrichir » est ecartee car la forme X n'est pas transitive ici — elle est reflexive et exprime la pretention. L'alternative « se passer de (Dieu) » est correcte mais « se croire autosuffisant » rend mieux la nuance de la forme X qui marque la pretention.

§CRITIQUE§
Hamidullah traduit : « Et quant a celui qui est avare, se croit auto-suffisant ». Notre traduction est identique. Aucune divergence.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:8 — TERMINE');
  console.log('  bxl → "etre avare" | gny → "se croire autosuffisant"');
  console.log('  Traduction : "Et quant a celui qui est avare, se croit auto-suffisant"');
}

async function verse92_9() {
  console.log('\n=== VERSET 92:9 — وَكَذَّبَ بِٱلْحُسْنَىٰ ===');
  const verse_id = 6067;

  // ---- KDB (كذب) — id=474 — "dementir" ----
  // Forme: kadhdhaba — verbe accompli forme II, 3eme pers. masc. sing. + bi (en)
  await upsertVWA(verse_id, 'kdb', 'dementir', {
    sense_chosen: "dementir",
    concept_chosen: "Mensonge/Fausseté",
    concepts: {
      "Mensonge/Fausseté": {
        status: "retenu",
        senses: ["mentir", "dementir", "nier", "faux"],
        proof_ctx: "Le sens retenu est « Mensonge/Faussete ». Le Lane's (Edward Lane, 1863) donne pour la racine k-dh-b : mentir, dire le faux, dementir, accuser de faussete. La forme II kadhdhaba signifie « traiter de mensonge, dementir, nier la verite de ». Le verbe kadhdhaba est a la forme II accompli, troisieme personne du masculin singulier, suivi de la preposition bi- : « il a dementi (au sujet de) ». Le sens retenu est « dementir » car l'objet est al-husna (la meilleure recompense) — il s'agit de nier la realite du bien promis, pas de mentir activement. Le dementi est l'acte de celui qui refuse d'accepter ce qui est vrai. La forme II kadhdhaba intensifie le sens — ce n'est pas un doute passager mais un rejet delibere et affirme.",
        axe1_verset: "Le verset dit kadhdhaba bil-husna — « il a dementi la meilleure recompense ». Le verbe kadhdhaba est suivi de bi- (marque du complement indirect) + al-husna (le superlatif feminin de hasan). Le champ lexical est celui du rejet : dementir + la meilleure. La construction kadhdhaba bi- est une formule coranique recurrente qui designe le rejet d'une verite. Le dementi porte ici sur al-husna — le bien ultime, la meilleure recompense. Celui qui dement al-husna refuse de croire que le bien existe ou qu'il sera retribue.",
        axe2_voisins: "Le verset 6 disait wa-saddaqa bil-husna (et il a confirme le bien). Le verset 9 oppose wa-kadhdhaba bil-husna (et il a dementi le bien). Le contraste saddaqa vs kadhdhaba est le troisieme element du miroir : confirmer vs dementir. Les deux verbes sont suivi du meme complement (bil-husna), ce qui rend le parallelisme parfait. Le verset 10 annoncera la consequence : la facilitation vers la difficulte.",
        axe3_sourate: "Le dementi est le troisieme trait du deuxieme chemin, apres l'avarice et l'autosuffisance. La progression logique est claire : celui qui est avare (il retient) parce qu'il se croit autosuffisant (il n'a besoin de rien) et donc il dement le bien (il ne croit pas a la retribution). Les trois traits forment une chaine causale descendante qui mene a la facilitation vers la difficulte.",
        axe4_coherence: "Le Coran utilise kadhdhaba bi- dans de nombreux passages : kadhdhaba bil-haqqi (il a dementi la verite, 50:5), kadhdhaba bi-ayatina (il a dementi nos signes, 7:36). La forme II avec bi- est la construction standard du rejet de la verite dans le Coran. Dans la sourate 92, le meme verbe est utilise pour le troisieme element du contraste, ce qui montre que le dementi est l'aboutissement logique de l'avarice et de l'autosuffisance.",
        axe5_frequence: "Le dementi du bien est la rupture ultime du khalifa avec sa mission. Celui qui dement la retribution n'a aucune raison d'agir justement — si le bien n'existe pas ou n'est pas retribue, pourquoi donner, pourquoi craindre ? Le dementi supprime toute motivation morale et laisse le khalifa dans un vide de sens qui explique son avarice et son arrogance."
      },
      "Accusation": {
        status: "peu_probable",
        senses: ["traiter de menteur", "accuser de faussete"],
        proof_ctx: "Le sens « accuser de mensonge » est la signification premiere de la forme II. Ici, la construction kadhdhaba bi- (dementir au sujet de) oriente vers le dementi plutot que l'accusation. L'objet n'est pas une personne mais al-husna (le bien) — on ne traite pas un concept de menteur. Le sens d'accusation personnelle ne s'applique pas ici.",
        axe1_verset: "Le complement bil-husna est un concept (la meilleure recompense), pas une personne. L'accusation de mensonge vise normalement une personne. La construction oriente donc vers le dementi d'une verite plutot que vers l'accusation d'un individu.",
        axe2_voisins: "Le verset 6 utilisait saddaqa bil-husna (confirmer le bien). Le parallele impose que kadhdhaba bil-husna signifie « dementir le bien » et non « accuser le bien de mensonge ». La symetrie du texte exclut le sens d'accusation.",
        axe3_sourate: "La sourate parle de deux chemins moraux et de la retribution — le theme de l'accusation personnelle n'y est pas present.",
        axe4_coherence: "Dans les contextes ou kadhdhaba bi- est suivi d'un concept abstrait, le sens est toujours « dementir » et jamais « accuser de mensonge ».",
        axe5_frequence: "Le sens d'accusation n'ajoute rien au theme de la sourate et ne correspond pas a la structure du contraste saddaqa/kadhdhaba."
      }
    }
  }, 1);

  // ---- HSN (حسن) — id=574 — "le bien / la meilleure" ----
  // Forme: al-husna — superlatif feminin defini (la meilleure, la plus belle recompense)
  await upsertVWA(verse_id, 'hsn', 'la meilleure', {
    sense_chosen: "la meilleure",
    concept_chosen: "Excellence morale",
    concepts: {
      "Excellence morale": {
        status: "retenu",
        senses: ["etre bon", "beau", "bienfaisance", "excellence", "le mieux"],
        proof_ctx: "Le sens retenu est « Excellence morale ». Le Lane's (Edward Lane, 1863) donne pour la racine h-s-n : etre bon, beau, agreable, convenable. Le mot al-husna est le superlatif feminin de hasan : « la meilleure, la plus belle ». C'est la meme forme que dans le verset 6, mais ici elle est dementie au lieu d'etre confirmee. Le Lane's precise que husna peut designer la meilleure recompense, la meilleure issue, la plus belle chose. Dans le contexte coranique, al-husna designe souvent la meilleure recompense promise par Dieu — le paradis ou la retribution supreme. Le sens d'excellence morale est retenu car al-husna englobe a la fois la bonte de ce qui est promis et l'excellence de la promesse elle-meme.",
        axe1_verset: "Le verset dit kadhdhaba bil-husna — « il a dementi la meilleure ». Le mot al-husna est l'objet du dementi, introduit par la preposition bi-. Le champ lexical est celui de l'excellence niee : dementir + la meilleure. Le superlatif feminin defini (al-husna) designe le sommet du bien — ce n'est pas un bien ordinaire mais le meilleur bien possible. Le dementi de ce bien est donc le rejet le plus grave, car il porte sur la plus haute promesse.",
        axe2_voisins: "Le verset 6 disait saddaqa bil-husna — confirmer le bien supreme. Le verset 9 dit kadhdhaba bil-husna — dementir le bien supreme. Le mot al-husna est le pivot du contraste entre les deux chemins. Le meme objet (le bien supreme) est soit confirme soit dementi, et c'est ce choix qui determine le chemin. Le verset 10 donnera la consequence du dementi : la facilitation vers la difficulte.",
        axe3_sourate: "Le mot al-husna apparait deux fois dans la sourate (v6 et v9), au centre exact du contraste. Il represente le test fondamental : croire ou non au bien supreme. La sourate est structuree autour de ce test — tout le reste (donner/retenir, craindre/se croire autosuffisant) decoule de la reponse a cette question.",
        axe4_coherence: "Le Coran utilise al-husna dans d'autres passages : wa'ada Allahu al-husna (Dieu a promis la meilleure, 4:95), lil-ladhina ahsanu al-husna wa-ziyada (pour ceux qui ont fait le bien, la meilleure recompense et un surplus, 10:26). Al-husna est un terme coranique recurrent pour la recompense supreme promise aux croyants. C'est le nom meme du Paradis dans certains usages.",
        axe5_frequence: "Le bien supreme est la promesse qui fonde la mission du khalifa. Si le khalifa confirme cette promesse, il donne, il craint, il agit. S'il la dement, il retient, il se croit autosuffisant, il se corrompt. La confirmation ou le dementi d'al-husna est le choix fondateur de toute l'existence morale."
      },
      "Beauté/Bonté": {
        status: "probable",
        senses: ["beaute", "bonte", "joliesse"],
        proof_ctx: "Le sens de « beaute » est present dans la racine h-s-n. Le Lane's donne hasan : beau, agreable. Al-husna pourrait designer « la plus belle chose » au sens esthetique. Ce sens est possible dans d'autres contextes mais ici le parallele avec le premier chemin (donner, craindre, confirmer → facilite) et le deuxieme chemin (retenir, se croire autosuffisant, dementir → difficulte) oriente vers le sens moral d'excellence et de recompense plutot que vers la beaute esthetique.",
        axe1_verset: "Le sens de beaute est grammaticalement possible. Cependant, le champ lexical du verset (dementir + bien supreme) oriente vers l'excellence morale plutot que vers la beaute physique.",
        axe2_voisins: "Le contexte des versets 5-7 et 8-10 est moral (donner/retenir, craindre/se croire autosuffisant). Le sens de beaute esthetique ne s'integre pas dans ce champ semantique.",
        axe3_sourate: "La sourate traite de deux chemins moraux — la beaute physique n'est pas son theme.",
        axe4_coherence: "Le Coran utilise husna dans les deux sens, mais dans les contextes de retribution (comme ici), le sens moral domine systematiquement.",
        axe5_frequence: "Le sens de beaute n'ajoute pas au theme de la responsabilite du khalifa dans cette sourate."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَكَذَّبَ بِٱلْحُسْنَىٰ",
    full_translation: "et traite de mensonge la plus belle recompense",
    segments: [
      { fr: "et il a dementi", pos: "verbe", phon: "wa-kadhdhaba", arabic: "وَكَذَّبَ", word_key: "kdb", is_particle: false, sense_retenu: "dementir", position: 1 },
      { fr: "la meilleure", pos: "nom", phon: "bil-husna", arabic: "بِٱلْحُسْنَىٰ", word_key: "hsn", is_particle: false, sense_retenu: "la meilleure", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient un verbe accompli suivi de son complement : kadhdhaba (il a dementi, forme II de k-dh-b) + bil-husna (le bien supreme, preposition bi- + superlatif feminin defini de h-s-n). Le Lane's (Edward Lane, 1863) donne pour la forme II de k-dh-b : traiter de mensonge, dementir, nier la verite. Pour h-s-n : etre bon, beau, excellent. Al-husna est le superlatif feminin : la meilleure, la plus belle. Le wa- initial coordonne ce verset avec le precedent (v8) — les trois traits (avarice, autosuffisance, dementi) forment un ensemble.

§JUSTIFICATION§
**dementir** — Le sens retenu est « dementir » pour kadhdhaba bi-. Le Lane's donne : traiter de mensonge, dementir. L'alternative « accuser de mensonge » est ecartee car l'objet (al-husna) est un concept, pas une personne. L'alternative « nier » est acceptable mais moins precis — « dementir » implique un rejet actif d'une verite etablie.

**la meilleure** — Le sens retenu est « la meilleure recompense » pour al-husna. Le Lane's donne : la meilleure, la plus belle. L'alternative « la plus belle » est ecartee car le contexte est moral (retribution) et non esthetique. L'alternative « le bien » est trop vague pour un superlatif.

§CRITIQUE§
Hamidullah traduit : « et traite de mensonge la plus belle recompense ». Notre traduction est equivalente. Hamidullah ajoute « recompense » pour expliciter al-husna — cet ajout est justifie car al-husna seul est elliptique en francais. La nuance est que notre traduction utilise « dementir » la ou Hamidullah dit « traiter de mensonge » — les deux sont corrects, « dementir » est plus concis.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:9 — TERMINE');
  console.log('  kdb → "dementir" | hsn → "la meilleure"');
  console.log('  Traduction : "et traite de mensonge la plus belle recompense"');
}

async function verse92_10() {
  console.log('\n=== VERSET 92:10 — فَسَنُيَسِّرُهُۥ لِلْعُسْرَىٰ ===');
  const verse_id = 6068;

  // ---- ESR (عسر) — id=969 — "difficulte" ----
  // Forme: al-'usra — superlatif feminin defini (la plus difficile)
  // Miroir exact de v7 (al-yusra → facilite) → ici (al-'usra → difficulte)
  await upsertVWA(verse_id, 'esr', 'la difficulte', {
    sense_chosen: "la difficulte",
    concept_chosen: "Difficulté/Gêne",
    concepts: {
      "Difficulté/Gêne": {
        status: "retenu",
        senses: ["etre difficile", "gene", "embarras", "la plus difficile"],
        proof_ctx: "Le sens retenu est « Difficulte/Gene ». Le Lane's (Edward Lane, 1863) donne pour la racine ayn-s-r : etre difficile, dur, penible, gene, embarras. Le mot al-'usra est le superlatif feminin defini : « la plus difficile, la plus grande difficulte ». C'est le miroir exact de al-yusra (v7) — si al-yusra est la facilite supreme, al-'usra est la difficulte supreme. Le Lane's precise que le 'usr est l'oppose du yusr : la ou le yusr est l'aisance et la fluidite, le 'usr est le blocage et la constriction. Le mot est construit sur le meme schema morphologique (fu'la) que yusra, ce qui renforce le parallelisme. La difficulte ici n'est pas un obstacle a surmonter mais un etat permanent vers lequel on est conduit.",
        axe1_verset: "Le verset dit fa-sa-nuyassiruhu lil-'usra — « nous lui faciliterons la voie vers la plus grande difficulte ». Le mot al-'usra est le terminus de la facilitation. Le champ lexical est paradoxal : faciliter + difficulte. L'oxymore est delibere — Dieu « facilite » le chemin vers la difficulte, c'est-a-dire qu'il rend naturel et fluide le processus de descente vers la perdition. Chaque choix mauvais rend le suivant plus facile, jusqu'a ce que le chemin vers la difficulte devienne la voie de moindre resistance.",
        axe2_voisins: "Le verset 7 disait fa-sa-nuyassiruhu lil-yusra (nous lui faciliterons la voie vers la facilite). Le verset 10 dit fa-sa-nuyassiruhu lil-'usra (nous lui faciliterons la voie vers la difficulte). La seule difference est le dernier mot : yusra vs 'usra. Cette substitution minimale produit un contraste maximal — le meme mecanisme divin (facilitation) mene a des resultats opposes selon le chemin choisi. Le parallele syntaxique est parfait.",
        axe3_sourate: "La sourate 92 presente deux facilitations : l'une vers le bien (yusra), l'autre vers la difficulte ('usra). La facilitation n'est pas un favoritisme — elle est la consequence logique des choix. Celui qui donne, craint et confirme trouve le bien naturel. Celui qui retient, se croit autosuffisant et dement trouve la difficulte naturelle. Le mecanisme est le meme, les resultats sont opposes. La sourate enseigne que les habitudes morales creent des trajectoires.",
        axe4_coherence: "Le Coran utilise 'usr dans d'autres passages : inna ma'a al-'usri yusran (avec la difficulte il y a une facilite, 94:5-6). La sourate 94 promet que la difficulte est accompagnee de facilite — la sourate 92 montre que la facilite peut mener a la difficulte quand les choix sont mauvais. Les deux sourates se completent : la difficulte n'est pas une fatalite (94) mais le chemin vers elle peut devenir une habitude (92).",
        axe5_frequence: "La difficulte est la consequence de l'echec du khalifa. Celui qui refuse sa mission (avarice, autosuffisance, dementi) est conduit vers un etat de plus en plus difficile — non pas comme punition arbitraire mais comme consequence naturelle de ses choix. Le 'usr est l'etat dans lequel le retour au bien devient de plus en plus penible parce que les mauvaises habitudes se sont enracinees."
      }
    }
  }, 1);

  await sb.from('verse_analyses').update({
    translation_arab: "فَسَنُيَسِّرُهُۥ لِلْعُسْرَىٰ",
    full_translation: "Nous lui faciliterons la voie vers la plus grande difficulte",
    segments: [
      { fr: "Nous lui faciliterons", pos: "verbe", phon: "fa-sa-nuyassiruhu", arabic: "فَسَنُيَسِّرُهُۥ", word_key: "ysr", is_particle: false, sense_retenu: "faciliter", position: 1 },
      { fr: "vers la difficulte", pos: "nom", phon: "lil-'usra", arabic: "لِلْعُسْرَىٰ", word_key: "esr", is_particle: false, sense_retenu: "la difficulte", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le miroir syntaxique du verset 7. Il contient le meme verbe (nuyassiruhu, forme II inaccompli de y-s-r, 1ere pers. pluriel + suffixe -hu) precede de fa- (consecutif) et sa- (futur). Le complement est lil-'usra (preposition li- + al-'usra, superlatif feminin defini de ayn-s-r). Le Lane's (Edward Lane, 1863) donne pour ayn-s-r : difficulte, gene, embarras. Le mot al-'usra est le superlatif : la plus grande difficulte. La structure fa-sa- + inaccompli annonce une consequence future et certaine.

§JUSTIFICATION§
**faciliter** — Le meme verbe que v7 (nuyassiru, forme II de y-s-r). Le sens « faciliter » est deja justifie au verset 7. Ici le paradoxe est que Dieu facilite le chemin VERS la difficulte — chaque mauvais choix rend le suivant plus naturel.

**la difficulte** — Le sens retenu est « la plus grande difficulte » pour al-'usra. Le Lane's donne : difficulte, gene, penibilite. L'alternative « la gene » est acceptable mais trop faible pour un superlatif. L'alternative « le malheur » est ecartee car le 'usr n'est pas un malheur accidentel mais un etat de constriction resultant des choix.

§CRITIQUE§
Hamidullah traduit : « Nous lui faciliterons la voie vers la plus grande difficulte ». Notre traduction est identique. Aucune divergence.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:10 — TERMINE');
  console.log('  esr → "la difficulte"');
  console.log('  Traduction : "Nous lui faciliterons la voie vers la plus grande difficulte"');
}

async function verse92_11() {
  console.log('\n=== VERSET 92:11 — وَمَا يُغْنِى عَنْهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ ===');
  const verse_id = 6069;

  // ---- GNY (غني) — id=2584 — "servir / etre utile" ----
  // Forme: yughni — verbe inaccompli forme IV, 3eme pers. masc. sing. (il sert, il est utile)
  // Ironie: v8 istaghna (se croire autosuffisant) → v11 yughni (sa richesse ne lui servira pas)
  await upsertVWA(verse_id, 'gny', 'servir', {
    sense_chosen: "servir",
    concept_chosen: "Richesse/Autosuffisance",
    concepts: {
      "Richesse/Autosuffisance": {
        status: "retenu",
        senses: ["etre riche", "se passer de", "etre utile", "servir", "enrichir"],
        proof_ctx: "Le sens retenu est « Richesse/Autosuffisance ». Le Lane's (Edward Lane, 1863) donne pour la racine gh-n-y : etre riche, se passer de, n'avoir besoin de rien. La forme IV aghna signifie « rendre riche, suffire, etre utile, servir a ». Le verbe yughni est a la forme IV inaccompli, troisieme personne du masculin singulier : « il sert, il est utile ». La construction ma yughni 'anhu maluhu est une question rhetorique negative : « a quoi lui sert son bien ? » = « son bien ne lui sert a rien ». L'ironie est saisissante : au verset 8, la meme racine apparaissait sous la forme X istaghna (il se croyait autosuffisant) — et maintenant la forme IV yughni revele que cette autosuffisance est illusoire car sa richesse ne lui servira a rien quand il chutera.",
        axe1_verset: "Le verset dit wa-ma yughni 'anhu maluhu idha taradda — « et a quoi lui sert son bien quand il chute ». Le verbe yughni est au centre d'une question rhetorique. Le champ lexical oppose l'utilite (servir) a l'inutilite (question negative ma yughni). Le pronom 'anhu (de lui, pour lui) et le possessif maluhu (son bien) soulignent le caractere personnel et intime de l'echec : c'est SON bien qui ne LUI sert a rien. La richesse accumulee par avarice se revele vide au moment de la chute.",
        axe2_voisins: "Le verset 8 introduisait l'avare autosuffisant (bakhila wa-istaghna). Le verset 11 revele l'inutilite de cette autosuffisance : ma yughni 'anhu maluhu. La progression est : se croire autosuffisant (v8) → sa richesse ne sert a rien (v11). Le verset 12 ouvrira une nouvelle perspective : c'est Dieu qui possede la guidance, pas l'avare qui possede des biens.",
        axe3_sourate: "La sourate 92 construit un argument en deux temps : d'abord le contraste des deux chemins (v5-10), puis les consequences (v11-14). Le verset 11 est la premiere consequence : l'inutilite de la richesse. La meme racine gny sert de fil conducteur — de l'autosuffisance pretendue (v8) a l'inutilite revelee (v11). La sourate deconstruit l'illusion de la richesse en montrant qu'elle n'a de valeur que si elle est partagee (premier chemin).",
        axe4_coherence: "Le Coran utilise ma aghna dans d'autres passages : ma aghna 'anhu maluhu wa-ma kasaba (ses biens et ce qu'il a acquis ne lui ont servi a rien, 111:2). La formule est recurrente — elle denonce l'inutilite des biens au moment du jugement. La racine gny dans le Coran oscille entre la richesse (ghani = riche) et l'inutilite de cette richesse devant Dieu (ma aghna = n'a servi a rien).",
        axe5_frequence: "L'inutilite de la richesse au moment de la chute illustre une loi fondamentale de la mission du khalifa : les moyens recus ne servent que s'ils sont utilises au service de la mission. La richesse retenue (avarice) devient un poids mort — elle ne protege pas celui qui l'accumule. Le khalifa qui comprend cela donne et partage, car il sait que la richesse est un outil de mission, pas une fin en soi."
      }
    }
  }, 1);

  // ---- MWL (مول) — id=1148 — "bien / richesse" ----
  // Forme: maluhu — nom + suffixe possessif 3eme pers. masc. (son bien, ses possessions)
  await upsertVWA(verse_id, 'mwl', 'son bien', {
    sense_chosen: "son bien",
    concept_chosen: "Richesse/Biens",
    concepts: {
      "Richesse/Biens": {
        status: "retenu",
        senses: ["richesse", "biens", "possessions", "fortune", "argent"],
        proof_ctx: "Le sens retenu est « Richesse/Biens ». Le Lane's (Edward Lane, 1863) donne pour la racine m-w-l (ou m-a-l selon certaines analyses) : richesse, biens, possessions, tout ce qu'on possede. Le mot mal est l'un des noms les plus frequents du Coran pour designer les biens materiels. Le suffixe -hu (son) rend maluhu : « son bien, sa richesse, ses possessions ». Le mal en arabe couvre tous les types de richesse — or, argent, betail, terres, marchandises. C'est le terme le plus general pour les biens materiels. Le Lane's precise que le mal est ce qui rejouit le coeur et qu'on peut garder — c'est la possession a laquelle on s'attache.",
        axe1_verset: "Le verset dit ma yughni 'anhu maluhu — « a quoi lui sert son bien ». Le mot maluhu est le sujet de yughni — c'est le bien qui est sense servir, mais qui ne sert a rien. Le champ lexical oppose la possession (son bien) a l'impuissance (ne pas servir). Le possessif -hu insiste sur le caractere personnel de la richesse — c'est sa richesse a lui, celle qu'il a accumulee par avarice, qui se revele inutile.",
        axe2_voisins: "Le verset 8 parlait de l'avare (bakhila) — le verset 11 revele l'objet de son avarice : maluhu (son bien). L'avare retenait ses biens (v8), et maintenant ces biens ne lui servent a rien (v11). Le verset 12 opposera la guidance divine aux biens materiels — ce qui compte n'est pas ce qu'on possede mais la direction qu'on suit.",
        axe3_sourate: "La sourate 92 oppose la richesse materielle a la richesse spirituelle. Le premier chemin est celui du don (ita, v5) — la richesse est partagee et produit la facilite. Le deuxieme chemin est celui de la retention (bukhl, v8) — la richesse est gardee mais ne sert a rien au moment de la chute. Le mot mal est le symbole de ce qui est possede mais perdu.",
        axe4_coherence: "Le Coran mentionne le mal dans de nombreux passages : la yutalil-ladhina yabkhaluna bima atahumu Allahu min fadlihi (que ceux qui sont avares de ce que Dieu leur a donne de sa grace ne pensent pas..., 3:180). Le bien materiel dans le Coran est un test — il est donne pour etre partage, et celui qui le retient echoue au test.",
        axe5_frequence: "Le bien materiel est l'outil principal du khalifa dans sa mission terrestre. Les biens sont donnes pour etre redistribues, investis dans la justice et la construction. Le khalifa qui accumule au lieu de redistribuer detourne l'outil de sa finalite. Le verset 11 montre le resultat de ce detournement : les biens accumules deviennent inutiles au moment ou on en aurait le plus besoin."
      }
    }
  }, 2);

  // ---- RDYA (ر د ي) — id=2620 — "chuter" ----
  // Forme: taradda — verbe accompli forme V, 3eme pers. masc. sing. (il a chute, il est tombe)
  await upsertVWA(verse_id, 'rdya', 'chuter', {
    sense_chosen: "chuter",
    concept_chosen: "Chute/Destruction",
    concepts: {
      "Chute/Destruction": {
        status: "retenu",
        senses: ["perir", "tomber", "etre renverse", "detruire"],
        proof_ctx: "Le sens retenu est « Chute/Destruction ». Le Lane's (Edward Lane, 1863) donne pour la racine r-d-y : perir, tomber dans un puits, etre renverse. La forme V taradda signifie « tomber, chuter, etre precipite dans un gouffre ». Le verbe taradda est a la forme V accompli, troisieme personne du masculin singulier : « il a chute ». La forme V ajoute une nuance reflexive — la chute est en partie consequence de ses propres actes. Le Lane's mentionne aussi le sens de « tomber dans un puits » pour taradda, ce qui ajoute l'image d'une chute dans un gouffre sombre et profond. La chute est le moment ou l'illusion de l'autosuffisance se brise — c'est l'instant de verite.",
        axe1_verset: "Le verset dit idha taradda — « quand il chute ». Le verbe taradda est precede de la conjonction temporelle idha (quand) qui place la chute dans le futur ou dans une hypothese certaine. Le champ lexical est celui de la descente brutale : chuter apres s'etre cru autosuffisant. La question rhetorique (ma yughni) est conditionnee par cette chute — c'est au moment de la chute que l'inutilite de la richesse se revele. La forme V (tafa''ala) implique que le sujet est affecte par l'action — il subit sa propre chute.",
        axe2_voisins: "Le verset 10 annoncait la facilitation vers la difficulte ('usra). Le verset 11 en montre la realisation : la chute (taradda). La progression est : difficulte (v10) → chute (v11). Le verset 12 commencera une nouvelle section avec la declaration divine sur la guidance. La chute est le point le plus bas du deuxieme chemin — apres elle, le discours change de registre.",
        axe3_sourate: "La sourate 92 culmine dans cette chute — le deuxieme chemin mene de l'avarice (v8) a l'autosuffisance (v8) au dementi (v9) a la difficulte (v10) a la chute (v11). La progression descendante est complete. Le verset 11 est le nadir du deuxieme chemin, apres quoi le discours se tourne vers Dieu (v12-13) puis vers l'avertissement (v14).",
        axe4_coherence: "Le Coran utilise des mots de la meme famille pour la chute et la destruction. La racine r-d-y est moins frequente que d'autres racines de destruction (h-l-k par exemple), ce qui donne a taradda un caractere exceptionnel. La chute evoquee par taradda n'est pas un simple echec — c'est une precipitation dans un gouffre, une chute verticale et totale.",
        axe5_frequence: "La chute du khalifa qui a refuse sa mission est l'aboutissement logique de ses choix. Celui qui a retenu, s'est cru autosuffisant et a dementi le bien est conduit inevitablement vers la chute. Le taradda represente le moment ou toutes les illusions s'effondrent et ou la realite de la dependance envers Dieu se revele — mais trop tard pour celui qui a choisi le deuxieme chemin."
      },
      "Vêtement/Manteau": {
        status: "nul",
        proof_ctx: "Le sens de « porter un manteau » (rida) est atteste pour la forme V dans le Lane's, mais il est totalement exclu par le contexte. Le verset parle de l'inutilite de la richesse au moment de la chute — le sens de vetement est sans rapport avec le champ semantique du passage."
      },
      "Combat/Jet de pierres": {
        status: "nul",
        proof_ctx: "Le sens de « jeter des pierres » est atteste pour la forme III dans le Lane's, mais la forme V taradda ne porte pas ce sens. Le contexte de la sourate est celui de la retribution et de la chute, pas du combat."
      },
      "Séduction/Ruse": {
        status: "nul",
        proof_ctx: "Le sens de « seduire par la flatterie » est atteste pour certains derives de la racine, mais il est totalement etranger au contexte de ce verset qui parle de chute et de destruction."
      },
      "Excès/Surplus": {
        status: "nul",
        proof_ctx: "Le sens d'exces (radan) est atteste comme nom dans le Lane's, mais la forme verbale V taradda ne porte pas ce sens. Le contexte oriente exclusivement vers la chute et la destruction."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "وَمَا يُغْنِى عَنْهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ",
    full_translation: "Et a quoi lui servira son bien quand il sombrera ?",
    segments: [
      { fr: "Et a quoi", pos: "particule", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 0 },
      { fr: "lui sert", pos: "verbe", phon: "yughni 'anhu", arabic: "يُغْنِى عَنْهُ", word_key: "gny", is_particle: false, sense_retenu: "servir", position: 1 },
      { fr: "son bien", pos: "nom", phon: "maluhu", arabic: "مَالُهُۥٓ", word_key: "mwl", is_particle: false, sense_retenu: "son bien", position: 2 },
      { fr: "quand", pos: "particule", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "il chute", pos: "verbe", phon: "taradda", arabic: "تَرَدَّىٰٓ", word_key: "rdya", is_particle: false, sense_retenu: "chuter", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique negative : wa-ma yughni 'anhu maluhu idha taradda. La particule ma est interrogative/negative : « a quoi sert ? » = « ne sert a rien ». Le verbe yughni est la forme IV inaccompli de gh-n-y : etre utile, servir a quelqu'un. Le Lane's (Edward Lane, 1863) donne pour la forme IV aghna : rendre autosuffisant, etre utile a. Le pronom 'anhu (de lui) est le beneficiaire. Le mot maluhu (son bien) est le sujet. La conjonction temporelle idha (quand) introduit le moment de la chute : taradda (forme V accompli de r-d-y = il a chute, il est tombe).

§JUSTIFICATION§
**servir** — Le sens retenu est « servir, etre utile » pour yughni. Le Lane's donne pour la forme IV : etre utile a, rendre autosuffisant, dispenser de. L'alternative « enrichir » est ecartee car la question n'est pas l'enrichissement mais l'utilite. L'alternative « suffire » est acceptable mais « servir » est plus naturel dans la question rhetorique « a quoi lui sert son bien ? ».

**son bien** — Le sens retenu est « son bien » pour maluhu. Le Lane's donne : richesse, biens, possessions. L'alternative « sa fortune » est trop moderne. L'alternative « ses biens » (pluriel) est acceptable mais le singulier collectif « son bien » est plus fidele au singulier arabe mal.

**chuter** — Le sens retenu est « chuter » pour taradda. Le Lane's donne pour la forme V : tomber, etre precipite dans un gouffre. L'alternative « perir » est acceptable mais « chuter » preserve l'image de la descente physique. L'alternative « sombrer » est aussi acceptable et Hamidullah l'utilise.

§CRITIQUE§
Hamidullah traduit : « Et a quoi lui servira son bien quand il sombrera ? ». Notre traduction est equivalente. La seule difference est « chuter » vs « sombrer » — « sombrer » a une connotation maritime (couler) tandis que « chuter » a une connotation de chute verticale. Les deux sont valides. Le mot arabe taradda (tomber dans un puits/gouffre) est plus proche de « chuter » que de « sombrer ».`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:11 — TERMINE');
  console.log('  gny → "servir" | mwl → "son bien" | rdya → "chuter"');
  console.log('  Traduction : "Et a quoi lui servira son bien quand il sombrera ?"');
}

async function verse92_12() {
  console.log('\n=== VERSET 92:12 — إِنَّ عَلَيْنَا لَلْهُدَىٰ ===');
  const verse_id = 6070;

  // ---- HDY (هدي) — id=261 — "la guidance" ----
  // Forme: al-huda — nom defini (la guidance)
  // Structure: inna + 'alayna (sur nous) + la-l-huda (certes la guidance)
  await upsertVWA(verse_id, 'hdy', 'la guidance', {
    sense_chosen: "la guidance",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider", "diriger", "montrer le chemin", "guidance", "direction"],
        proof_ctx: "Le sens retenu est « Guidance/Direction ». Le Lane's (Edward Lane, 1863) donne pour la racine h-d-y : guider, conduire dans la bonne direction, montrer le chemin, la guidance, la direction droite. Le mot al-huda est le nom defini : « la guidance ». C'est l'un des mots les plus importants du Coran — il designe la direction divine qui montre le droit chemin. La construction inna 'alayna la-l-huda signifie litteralement « certes sur nous est la guidance » = « c'est a nous qu'incombe la guidance ». Le Lane's precise que al-huda est le fait de montrer le chemin avec bienveillance, de conduire vers la bonne direction. C'est un acte divin par excellence.",
        axe1_verset: "Le verset dit inna 'alayna lal-huda — « c'est a nous qu'incombe la guidance ». Le mot al-huda est renforce par la particule la- (certes) qui precede l'article al-. La structure inna + 'alayna (sur nous) place la responsabilite de la guidance sur Dieu. Le champ lexical est celui de la responsabilite divine : incombe + guidance. Le verset affirme que la guidance est une obligation que Dieu s'est imposee a Lui-meme — ce n'est pas un caprice mais une responsabilite assumee.",
        axe2_voisins: "Les versets 8-11 decrivaient le chemin de l'avare et sa chute. Le verset 12 rompt avec cette description pour affirmer un principe fondamental : la guidance vient de Dieu. Le changement de registre est brusque — du descriptif (l'avare chute) au declaratif (la guidance nous incombe). Le verset 13 completera cette declaration en affirmant la souverainete sur l'au-dela et l'ici-bas.",
        axe3_sourate: "La sourate 92 est construite en trois sections : les deux chemins (v5-10), les declarations divines (v11-13), et l'avertissement (v14-21). Le verset 12 ouvre la deuxieme section. La guidance est la reponse a la question du verset 11 (a quoi sert la richesse ?) — la richesse ne sert a rien, mais la guidance, elle, est ce qui compte. La sourate oppose les biens materiels (inutiles au moment de la chute) a la guidance divine (seule valeur permanente).",
        axe4_coherence: "Le Coran utilise al-huda dans des dizaines de passages : dhalika al-kitabu la rayba fihi hudan lil-muttaqina (ce livre, pas de doute en lui, guidance pour les craignant-Dieu, 2:2). Al-huda est un theme central du Coran — Dieu guide et c'est l'etre humain qui choisit d'accepter ou de refuser cette guidance. Le verset 92:12 place la responsabilite de fournir la guidance sur Dieu, et la responsabilite de l'accepter sur l'etre humain.",
        axe5_frequence: "La guidance est l'outil fondamental du khalifa. Si Dieu prend la responsabilite de guider, le khalifa doit prendre la responsabilite de suivre cette guidance. Le verset 12 etablit le partage des responsabilites : Dieu guide, le khalifa suit. Celui qui refuse la guidance (le deuxieme chemin) refuse non pas un conseil optionnel mais une direction offerte par le Createur Lui-meme."
      },
      "Conduite/Comportement": {
        status: "peu_probable",
        senses: ["conduite", "maniere d'agir"],
        proof_ctx: "Le sens de « conduite » est secondaire dans la racine h-d-y. Le Lane's mentionne la conduite comme maniere de se comporter, mais dans ce verset la construction 'alayna (sur nous/il nous incombe) oriente vers la guidance active et divine, pas vers la conduite humaine. Dieu ne dit pas « notre conduite » mais « la guidance qu'il nous incombe de fournir ».",
        axe1_verset: "Le sens de conduite deplacerait le sujet de Dieu vers l'etre humain. La structure inna 'alayna (il nous incombe) place Dieu comme sujet — il s'agit de ce que Dieu fait, pas de la conduite humaine.",
        axe2_voisins: "Le contexte est celui de la declaration divine apres la description de la chute. Le sens de guidance divine s'integre naturellement dans cette transition.",
        axe3_sourate: "La sourate oppose deux chemins — la guidance est le moyen offert par Dieu pour choisir le bon chemin. Le sens de conduite humaine ne correspond pas a ce role.",
        axe4_coherence: "Dans les constructions 'ala + pronom + al-huda, le Coran designe toujours la guidance divine, jamais la conduite humaine.",
        axe5_frequence: "Le sens de conduite n'ajoute pas a la structure de la sourate qui oppose guidance divine et choix humain."
      },
      "Don/Offrande": {
        status: "nul",
        proof_ctx: "Le sens de « don, offrande, cadeau » (hadiyya) est atteste dans la racine h-d-y, mais il est impossible dans ce contexte. Le mot al-huda (avec la voyelle damma sur le ha) designe la guidance, pas le don (hadiyyatun). La structure grammaticale et le contexte excluent ce sens."
      }
    }
  }, 1);

  await sb.from('verse_analyses').update({
    translation_arab: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
    full_translation: "C'est a Nous qu'incombe certes la direction",
    segments: [
      { fr: "Certes", pos: "particule", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 0 },
      { fr: "il nous incombe", pos: "particule", phon: "'alayna", arabic: "عَلَيْنَا", is_particle: true, position: 0 },
      { fr: "la guidance", pos: "nom", phon: "lal-huda", arabic: "لَلْهُدَىٰ", word_key: "hdy", is_particle: false, sense_retenu: "la guidance", position: 1 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale emphatique : inna (certes) + 'alayna (sur nous, il nous incombe) + la-l-huda (la guidance, renforcee par la- emphatique). Le Lane's (Edward Lane, 1863) donne pour h-d-y : guider, montrer le chemin, la guidance. Le mot al-huda est au nominatif defini. La construction 'ala + pronom + nom signifie « il incombe a [pronom] de [nom] » — c'est une formule d'obligation que Dieu s'applique a Lui-meme.

§JUSTIFICATION§
**la guidance** — Le sens retenu est « la guidance, la direction » pour al-huda. Le Lane's donne : guidance, direction droite, le fait de montrer le chemin. L'alternative « la conduite » est ecartee car elle impliquerait un comportement humain, pas une responsabilite divine. L'alternative « la direction » est acceptable et utilisee par Hamidullah.

§CRITIQUE§
Hamidullah traduit : « C'est a Nous qu'incombe certes la direction ». Notre traduction utilise « la guidance » au lieu de « la direction ». Les deux sont corrects — « direction » est plus courant en francais, « guidance » est plus technique mais plus fidele au terme arabe al-huda qui est un terme specialise du vocabulaire coranique.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:12 — TERMINE');
  console.log('  hdy → "la guidance"');
  console.log('  Traduction : "C\'est a Nous qu\'incombe certes la direction"');
}

async function verse92_13() {
  console.log('\n=== VERSET 92:13 — وَإِنَّ لَنَا لَلْـَٔاخِرَةَ وَٱلْأُولَىٰ ===');
  const verse_id = 6071;

  // ---- AXR (أخر) — id=292 — "l'au-dela / la derniere" ----
  // Forme: al-akhirata — nom defini accusatif (l'au-dela, la derniere vie)
  await upsertVWA(verse_id, 'axr', "l'au-dela", {
    sense_chosen: "l'au-dela",
    concept_chosen: "Postériorité/Retard",
    concepts: {
      "Postériorité/Retard": {
        status: "retenu",
        senses: ["dernier", "posterieur", "retarder", "l'au-dela", "la fin"],
        proof_ctx: "Le sens retenu est « Posteriorite/Retard ». Le Lane's (Edward Lane, 1863) donne pour la racine hamza-kh-r : etre posterieur, venir apres, retarder, le dernier. Le mot al-akhirata est le nom feminin defini a l'accusatif : « la derniere (vie) » = « l'au-dela ». Le Lane's precise que akhir est l'oppose de awwal (premier) — al-akhira est donc la vie qui vient apres la vie premiere (ad-dunya/al-ula). Dans le contexte coranique, al-akhira designe l'au-dela, la vie apres la mort, le monde futur. La construction lana la-l-akhirata signifie « a nous appartient l'au-dela » — c'est une declaration de souverainete divine sur le monde futur.",
        axe1_verset: "Le verset dit wa-inna lana la-l-akhirata wal-ula — « a nous appartient l'au-dela et l'ici-bas ». Le mot al-akhirata est le premier terme de la paire akhira/ula (derniere/premiere). Le champ lexical est celui de la totalite temporelle : l'au-dela + l'ici-bas = tout le temps, toute l'existence. La declaration divine ne se limite pas a un monde — elle couvre les deux. L'accusatif (al-akhirata) indique que le mot est complement de inna lana.",
        axe2_voisins: "Le verset 12 declarait la responsabilite divine de la guidance. Le verset 13 etend cette souverainete a la totalite de l'existence : l'au-dela et l'ici-bas. La progression est : Dieu guide (v12) parce que tout lui appartient (v13). Le verset 14 tirera la consequence : l'avertissement d'un feu. La souverainete totale justifie la legitimite de l'avertissement.",
        axe3_sourate: "La sourate 92 oppose les biens materiels de l'avare (maluhu, v11) a la souverainete divine sur la totalite de l'existence (v13). La richesse de l'avare est derisoire face a la possession divine de l'au-dela et de l'ici-bas. Le contraste entre la possession limitee de l'etre humain et la possession totale de Dieu est un argument qui deconstruit l'illusion de l'autosuffisance.",
        axe4_coherence: "Le Coran utilise la paire al-akhira/ad-dunya (ou al-ula) dans de nombreux passages : wa-lal-akhiratu khayrun laka minal-ula (l'au-dela est meilleur pour toi que l'ici-bas, 93:4). La paire est l'un des contrastes fondamentaux du Coran — la vie premiere (terrestre) et la vie derniere (eternelle). La sourate 92 utilise ula au lieu de dunya, ce qui est plus archaique et plus solennel.",
        axe5_frequence: "L'au-dela est la dimension dans laquelle la mission du khalifa est jugee. Le khalifa agit dans l'ici-bas mais est retribue dans l'au-dela. La souverainete divine sur l'au-dela garantit la justice du jugement — celui qui possede l'au-dela est le seul habilite a retribuer. L'avare qui ne croit pas a l'au-dela nie cette dimension et perd toute motivation pour agir justement."
      }
    }
  }, 1);

  // ---- AWL (أول) — id=337 — "l'ici-bas / la premiere" ----
  // Forme: al-ula — nom feminin defini (la premiere vie, l'ici-bas)
  await upsertVWA(verse_id, 'awl', "l'ici-bas", {
    sense_chosen: "l'ici-bas",
    concept_chosen: "Retour/Origine",
    concepts: {
      "Retour/Origine": {
        status: "retenu",
        senses: ["premier", "retourner", "origine", "commencement", "l'ici-bas"],
        proof_ctx: "Le sens retenu est « Retour/Origine ». Le Lane's (Edward Lane, 1863) donne pour la racine hamza-w-l : etre premier, revenir, retourner, l'origine, le commencement. Le mot al-ula est le nom feminin defini : « la premiere (vie) » = « l'ici-bas ». Le Lane's precise que awwal est l'oppose de akhir — al-ula est donc la vie premiere, la vie terrestre, celle qui vient avant l'au-dela. La construction wa-l-ula complete la paire avec al-akhirata : « l'au-dela et l'ici-bas ». L'ordre est remarquable — l'au-dela est mentionne en premier, ce qui souligne sa priorite dans la perspective divine.",
        axe1_verset: "Le verset dit wa-l-ula — « et la premiere ». Le mot al-ula est le second terme de la paire al-akhirata wa-l-ula. Le champ lexical est celui de la totalite : derniere + premiere = tout. L'ordre inverse (au-dela avant ici-bas) met l'accent sur la priorite de l'au-dela. En mentionnant l'ici-bas en second, le texte souligne que meme la vie terrestre appartient a Dieu — ce n'est pas un domaine autonome ou l'avare pourrait se croire souverain.",
        axe2_voisins: "Le verset 12 parlait de guidance. Le verset 13 parle de souverainete totale. La paire al-akhira/al-ula couvre l'integralite de l'existence — rien n'echappe a Dieu. Le verset 14 utilisera cette souverainete pour legitimer l'avertissement. Si Dieu possede les deux mondes, son avertissement est a prendre au serieux.",
        axe3_sourate: "La sourate oppose les deux mondes : l'avare accumule dans l'ici-bas (al-ula) mais perd dans l'au-dela (al-akhira). Le genereux donne dans l'ici-bas et gagne dans l'au-dela. La souverainete divine sur les deux mondes signifie que les deux registres sont lies — ce qu'on fait dans l'un determine ce qu'on recoit dans l'autre.",
        axe4_coherence: "Le Coran utilise al-ula dans la sourate 93:4 (wa-lal-akhiratu khayrun laka minal-ula — l'au-dela est meilleur pour toi que l'ici-bas). Les deux sourates (92 et 93) sont voisines et partagent ce vocabulaire. Al-ula est un terme plus rare que ad-dunya pour designer l'ici-bas — il souligne le caractere premier (et donc temporaire) de la vie terrestre.",
        axe5_frequence: "L'ici-bas est le terrain d'action du khalifa — c'est la ou il exerce sa mission. La souverainete divine sur l'ici-bas signifie que le khalifa opere sur un terrain qui ne lui appartient pas — il est un gestionnaire, pas un proprietaire. L'avare qui traite ses biens terrestres comme sa propriete absolue oublie que l'ici-bas entier appartient a Dieu."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَإِنَّ لَنَا لَلْـَٔاخِرَةَ وَٱلْأُولَىٰ",
    full_translation: "Et c'est a Nous qu'appartiennent certes la vie derniere et la vie premiere",
    segments: [
      { fr: "Et certes", pos: "particule", phon: "wa-inna", arabic: "وَإِنَّ", is_particle: true, position: 0 },
      { fr: "a nous", pos: "particule", phon: "lana", arabic: "لَنَا", is_particle: true, position: 0 },
      { fr: "l'au-dela", pos: "nom", phon: "lal-akhirata", arabic: "لَلْـَٔاخِرَةَ", word_key: "axr", is_particle: false, sense_retenu: "l'au-dela", position: 1 },
      { fr: "et l'ici-bas", pos: "nom", phon: "wal-ula", arabic: "وَٱلْأُولَىٰ", word_key: "awl", is_particle: false, sense_retenu: "l'ici-bas", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale emphatique : wa-inna (et certes) + lana (a nous, preposition la- + pronom na) + la-l-akhirata (l'au-dela, renforcee par la- emphatique, nom feminin defini a l'accusatif de la racine hamza-kh-r) + wa-l-ula (et l'ici-bas, nom feminin defini de la racine hamza-w-l). Le Lane's (Edward Lane, 1863) donne pour hamza-kh-r : etre dernier, l'au-dela. Pour hamza-w-l : etre premier, l'origine. La construction lana + nom signifie « a nous appartient » — c'est une declaration de propriete divine.

§JUSTIFICATION§
**l'au-dela** — Le sens retenu est « l'au-dela » pour al-akhirata. Le Lane's donne : la derniere, la vie future. L'alternative « la fin » est ecartee car trop vague. L'alternative « la vie derniere » est celle de Hamidullah et est parfaitement valide.

**l'ici-bas** — Le sens retenu est « l'ici-bas » pour al-ula. Le Lane's donne : la premiere, l'origine. L'alternative « la vie premiere » est celle de Hamidullah et est parfaitement valide. L'alternative « le monde d'en bas » est ecartee car c'est une interpretation, pas une traduction du mot ula (premiere).

§CRITIQUE§
Hamidullah traduit : « Et c'est a Nous qu'appartiennent certes la vie derniere et la vie premiere ». Notre traduction est equivalente. Hamidullah utilise « la vie derniere » et « la vie premiere » qui sont des traductions litterales. Nous utilisons « l'au-dela » et « l'ici-bas » qui sont plus courants en francais. Les deux approches sont valides.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:13 — TERMINE');
  console.log('  axr → "l\'au-dela" | awl → "l\'ici-bas"');
  console.log('  Traduction : "Et c\'est a Nous qu\'appartiennent certes la vie derniere et la vie premiere"');
}

async function verse92_14() {
  console.log('\n=== VERSET 92:14 — فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ ===');
  const verse_id = 6072;

  // ---- NDHR (نذر) — id=802 — "avertir" ----
  // Forme: andhartukum — verbe accompli forme IV + suffixe -kum (je vous ai avertis)
  await upsertVWA(verse_id, 'ndhr', 'avertir', {
    sense_chosen: "avertir",
    concept_chosen: "Avertissement/Mise en garde",
    concepts: {
      "Avertissement/Mise en garde": {
        status: "retenu",
        senses: ["avertir", "mettre en garde", "prevenir", "alarmer"],
        proof_ctx: "Le sens retenu est « Avertissement/Mise en garde ». Le Lane's (Edward Lane, 1863) donne pour la racine n-dh-r : avertir, mettre en garde, prevenir d'un danger, alarmer. La forme IV andhara signifie « avertir solennellement, mettre en garde contre un peril ». Le verbe andhartukum est a la forme IV accompli, premiere personne du singulier, avec le suffixe -kum (vous, pluriel) : « je vous ai avertis ». L'avertissement dans la racine n-dh-r est toujours oriente vers l'avenir — il s'agit de prevenir un danger qui n'est pas encore survenu. Le Lane's distingue l'avertissement (indhir) de l'annonce de bonne nouvelle (bashir) — les deux forment une paire dans le Coran. L'avertisseur (nadhir) est celui qui previent du danger par compassion, pas par malveillance.",
        axe1_verset: "Le verset dit fa-andhartukum naran talazza — « je vous ai avertis d'un feu qui flambe ». Le verbe andhartukum est au centre de la declaration prophetique. Le champ lexical est celui de l'alarme : avertir + feu + flambe. L'avertissement porte sur un objet concret (un feu) et non sur une abstraction. Le suffixe -kum (vous) elargit l'avertissement a tous les auditeurs — ce n'est pas un avertissement prive mais une proclamation publique. Le fa- initial (donc) lie l'avertissement aux declarations precedentes (guidance et souverainete).",
        axe2_voisins: "Les versets 12-13 affirmaient la souverainete divine sur la guidance et sur les deux mondes. Le verset 14 tire la consequence : donc je vous ai avertis. La logique est : puisque Dieu guide (v12) et possede tout (v13), l'avertissement est legitime et serieux (v14). Le fa- (donc) marque le lien causal. Les versets suivants (15-21) detailleront qui sera soumis a ce feu.",
        axe3_sourate: "La sourate 92 procede en trois temps : les deux chemins (v5-10), les declarations divines (v11-13), l'avertissement (v14-21). Le verset 14 ouvre le troisieme temps. L'avertissement est la consequence pratique de tout ce qui precede — les deux chemins ont ete presentes, la souverainete divine a ete affirmee, et maintenant l'avertissement concretise le danger pour ceux qui choisissent le mauvais chemin.",
        axe4_coherence: "Le Coran utilise andhara dans de nombreux passages : inna arsalnaka shahidan wa-mubashshiran wa-nadhiran (nous t'avons envoye comme temoin, annonciateur et avertisseur, 48:8). La fonction d'avertisseur est l'une des missions principales du Prophete dans le Coran. L'avertissement est presente comme un acte de misericorde — prevenir du danger avant qu'il ne survienne. La racine n-dh-r est l'un des piliers du vocabulaire prophetique coranique.",
        axe5_frequence: "L'avertissement est l'un des outils fondamentaux de la guidance. Le khalifa avertit par compassion — il ne souhaite pas la destruction de ceux qu'il avertit. L'avertissement est un acte de responsabilite : celui qui sait et ne previent pas est complice. Le Prophete avertit parce qu'il a recu la connaissance des deux chemins et de leurs consequences. L'avertissement est la mise en pratique de la guidance divine (v12) au service de la communaute."
      },
      "Voeu/Consécration": {
        status: "peu_probable",
        senses: ["faire un voeu", "consacrer", "vouer"],
        proof_ctx: "Le sens de « voeu, consecration » est atteste dans la racine n-dh-r. Le Lane's donne nadhr/nadhr : voeu solennel, engagement a accomplir quelque chose pour Dieu. Ce sens est possible pour la forme I (nadhara = il a fait un voeu) mais la forme IV (andhara = il a averti) n'a jamais le sens de voeu. La forme verbale utilisee ici (forme IV avec suffixe pronominal) exclut totalement le sens de consecration.",
        axe1_verset: "La forme IV andhara est toujours utilisee dans le sens d'avertissement dans le Coran. Le complement (naran = un feu) confirme le sens d'avertissement — on avertit d'un danger, on ne consacre pas un feu.",
        axe2_voisins: "Le contexte est celui de la mise en garde apres la presentation des deux chemins. Le sens de voeu ne s'integre pas dans cette progression logique.",
        axe3_sourate: "La sourate presente un avertissement eschatologique — le theme du voeu est absent de la sourate.",
        axe4_coherence: "Dans le Coran, la forme IV d'andhara est exclusivement utilisee pour l'avertissement, jamais pour le voeu.",
        axe5_frequence: "Le sens de voeu n'a aucun rapport avec la mission prophetique d'avertissement qui est le theme de ce verset."
      }
    }
  }, 1);

  // ---- NAR (نار) — id=1422 — "feu" ----
  // Forme: naran — nom indefini accusatif (un feu)
  await upsertVWA(verse_id, 'nar', 'un feu', {
    sense_chosen: "un feu",
    concept_chosen: "Feu/Enfer",
    concepts: {
      "Feu/Enfer": {
        status: "retenu",
        senses: ["feu", "flamme", "enfer", "bruler"],
        proof_ctx: "Le sens retenu est « Feu/Enfer ». Le Lane's (Edward Lane, 1863) donne pour la racine n-w-r (ou n-a-r) : feu, flamme, lumiere. Le mot nar designe le feu physique et, dans le contexte coranique, le feu de l'enfer. Le Lane's precise que an-nar est le nom coranique de l'enfer par excellence — c'est le chatiment destine a ceux qui rejettent la guidance. Le mot naran est ici indefini et a l'accusatif : « un feu » — complement de andhartukum. L'indefini naran (un feu) plutot que le defini an-nar (le feu/l'enfer) cree un effet rhetorique : un feu parmi d'autres, un feu d'une nature particuliere, specifie par le verbe qui suit (talazza = qui flambe). L'indefini permet aussi la qualification par la relative (talazza).",
        axe1_verset: "Le verset dit andhartukum naran talazza — « je vous ai avertis d'un feu qui flambe ». Le mot naran est l'objet de l'avertissement. Le champ lexical est celui du danger concret : avertissement + feu + flambe. Le feu est presente comme une realite physique et intense — il flambe, il est actif, il n'est pas eteint ou metaphorique. L'indefini naran (un feu) et non an-nar (le feu) suggere que ce feu est si terrible qu'il defie la description — c'est « un feu » unique et indescriptible.",
        axe2_voisins: "Les versets 12-13 affirmaient la souverainete divine. Le verset 14 utilise cette souverainete pour legitimer l'avertissement d'un feu. La progression est : Dieu possede l'au-dela (v13) → il avertit d'un feu dans cet au-dela (v14). Le feu est la concretisation du danger annonce par le deuxieme chemin (v8-10). Les versets suivants preciseront qui sera soumis a ce feu.",
        axe3_sourate: "Le feu est l'aboutissement du deuxieme chemin. La sourate 92 procede par etapes : avarice → autosuffisance → dementi → difficulte → chute → feu. Le mot nar est le point culminant de la spirale descendante. La sourate ne mentionne le feu qu'une seule fois (v14) mais ce mot unique porte tout le poids de l'avertissement.",
        axe4_coherence: "Le Coran utilise nar/an-nar dans des centaines de passages. C'est le mot le plus frequent pour le chatiment eschatologique. Les descriptions varient : feu qui flambe (92:14), feu prepare pour les incroyants (2:24), feu dont le combustible est les hommes et les pierres (66:6). Chaque description ajoute un trait specifique au feu. Ici le trait est talazza — le feu flambe intensement.",
        axe5_frequence: "Le feu est la consequence ultime de l'echec du khalifa. Celui qui a refuse sa mission (avarice, autosuffisance, dementi) est averti d'un feu — non pas comme menace arbitraire mais comme consequence logique de ses choix. Le feu represente l'etat dans lequel le khalifa qui a refuse la guidance se retrouve — un etat de souffrance et de regret permanent."
      }
    }
  }, 2);

  // ---- LZW (ل ظ ي) — id=2621 — "flamber" ----
  // Forme: talazza — verbe accompli forme V, 3eme pers. fem. sing. (elle a flambe intensement)
  await upsertVWA(verse_id, 'lzw', 'flamber', {
    sense_chosen: "flamber",
    concept_chosen: "Flamme/Brasier",
    concepts: {
      "Flamme/Brasier": {
        status: "retenu",
        senses: ["flamber", "brasier", "bruler intensement"],
        proof_ctx: "Le sens retenu est « Flamme/Brasier ». Le Lane's (Edward Lane, 1863) donne sous les entrees liees a la racine l-z-y : flamber, bruler avec des flammes vives et intenses. Le nom laza designe un brasier ardent, un feu dont les flammes sont hautes et constantes. La forme V talazza signifie « flamber intensement, produire des flammes vives et continues ». Le verbe talazza est a la forme V accompli, troisieme personne du feminin singulier (le sujet est nar, feminin en arabe) : « elle a flambe, elle flambe intensement ». La forme V (tafa''ala) ajoute une intensite reflexive — le feu flambe de lui-meme, se nourrit de lui-meme, produit ses propres flammes sans avoir besoin de combustible exterieur. Le nom laza est aussi un nom propre de l'enfer dans le Coran (70:15) — c'est le feu qui arrache les membres.",
        axe1_verset: "Le verset dit naran talazza — « un feu qui flambe ». Le verbe talazza qualifie le feu (nar) comme relatif adjectival. Le champ lexical est celui de l'intensite : feu + flamber. Le verbe talazza ne designe pas un feu ordinaire qui brule doucement — il designe un feu dont les flammes sont vives, hautes et constantes. La forme V implique une intensite auto-entretenue — le feu flambe de lui-meme, sans relache. L'image est celle d'un brasier qui ne s'eteint jamais et dont les flammes sont visibles de loin.",
        axe2_voisins: "Le verset 14 introduit le feu apres les declarations divines (v12-13). Le verbe talazza specifie la nature de ce feu — ce n'est pas n'importe quel feu mais un feu qui flambe intensement. Les versets suivants (15-21) preciseront qui sera soumis a ce feu et qui y echappera. Le mot talazza cree l'image mentale qui rend l'avertissement concret et saisissant.",
        axe3_sourate: "La sourate 92 est construite sur le contraste entre deux chemins. Le feu qui flambe est la destination du deuxieme chemin — l'avare autosuffisant qui dement le bien. Le verbe talazza rend cette destination vivante et terrifiante. La sourate utilise peu de mots pour le feu (un seul verset, v14) mais ces mots sont d'une intensite maximale. La brievete renforce l'impact.",
        axe4_coherence: "Le Coran utilise laza dans la sourate 70:15-16 : kalla innaha laza, nazza'atan lish-shawa (certes c'est laza, arrachant le cuir chevelu). Le nom laza designe un feu si intense qu'il arrache la peau. Le verbe talazza dans la sourate 92 evoque cette meme intensite. La racine l-z-y est rare dans le Coran — ses apparitions sont reservees aux descriptions les plus intenses du feu eschatologique.",
        axe5_frequence: "Le feu qui flambe est l'image la plus concrete de la consequence de l'echec du khalifa. La flamme intense et auto-entretenue represente un etat de souffrance qui se nourrit de lui-meme — comme les mauvais choix qui s'accumulent et creent leur propre spirale descendante. Le verbe talazza capture cette idee de perpetuation et d'intensification."
      },
      "Adhérence/Persistance": {
        status: "peu_probable",
        senses: ["adherer", "perseverer", "s'attacher"],
        proof_ctx: "Le sens d'adherence est atteste dans la racine l-z sous une entree voisine dans le Lane's : alazza bihi = il s'est attache a lui. Ce sens est secondaire et distinct du sens de flamme. Dans le contexte de ce verset, le sujet est nar (feu) et le verbe talazza ne peut signifier « elle s'est attachee » — le feu flambe, il ne s'attache pas. Le sens d'adherence est linguistiquement possible pour d'autres derives de la racine mais impossible dans cette construction syntaxique.",
        axe1_verset: "Le sujet du verbe est nar (feu). Un feu qui « s'attache » n'a pas de sens dans le contexte d'un avertissement eschatologique. Le sens de « flamber » est le seul coherent.",
        axe2_voisins: "Le contexte est un avertissement d'un feu — le champ semantique de l'adherence est totalement etranger a ce passage.",
        axe3_sourate: "La sourate ne traite pas d'adherence ou de persistance dans ce passage — elle decrit un chatiment.",
        axe4_coherence: "Dans la sourate 70:15, laza designe clairement un feu. La meme racine dans la sourate 92 garde le meme sens.",
        axe5_frequence: "Le sens d'adherence n'ajoute rien au theme de l'avertissement et du chatiment."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ",
    full_translation: "Je vous ai donc avertis d'un Feu qui flambe",
    segments: [
      { fr: "Je vous ai avertis", pos: "verbe", phon: "fa-andhartukum", arabic: "فَأَنذَرْتُكُمْ", word_key: "ndhr", is_particle: false, sense_retenu: "avertir", position: 1 },
      { fr: "d'un feu", pos: "nom", phon: "naran", arabic: "نَارًا", word_key: "nar", is_particle: false, sense_retenu: "un feu", position: 2 },
      { fr: "qui flambe", pos: "verbe", phon: "talazza", arabic: "تَلَظَّىٰ", word_key: "lzw", is_particle: false, sense_retenu: "flamber", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient trois elements : le verbe andhartukum (je vous ai avertis, forme IV accompli de n-dh-r, 1ere pers. sing. + suffixe -kum), le complement naran (un feu, nom indefini accusatif de la racine n-w-r), et la proposition relative talazza (qui flambe, forme V accompli de l-z-y, 3eme pers. fem. sing.). Le fa- initial (donc) lie l'avertissement aux declarations precedentes. Le Lane's (Edward Lane, 1863) donne pour n-dh-r forme IV : avertir, mettre en garde. Pour n-a-r : feu, flamme. Pour l-z-y forme V : flamber intensement, produire des flammes vives.

§JUSTIFICATION§
**avertir** — Le sens retenu est « avertir » pour andhartukum. Le Lane's donne pour la forme IV : avertir, mettre en garde, prevenir du danger. L'alternative « prevenir » est acceptable mais « avertir » est plus solennel et correspond mieux au contexte prophetique. L'alternative « alarmer » est trop fort — l'avertissement est ferme mais bienveillant.

**un feu** — Le sens retenu est « un feu » pour naran. Le Lane's donne : feu, flamme. L'indefini est preserve dans la traduction (un feu, pas le feu) car le texte arabe utilise l'indefini. L'alternative « l'enfer » est ecartee car le texte ne dit pas an-nar (l'enfer) mais naran (un feu — indefini et qualifie par la relative qui suit).

**flamber** — Le sens retenu est « flamber » pour talazza. Le Lane's donne pour la forme V : flamber intensement, produire des flammes hautes. L'alternative « bruler » est trop faible — talazza designe un flambement intense et spectaculaire, pas une simple combustion. L'alternative « s'embraser » est acceptable mais « flamber » est plus concis et plus percutant.

§CRITIQUE§
Hamidullah traduit : « Je vous ai donc avertis d'un Feu qui flambe ». Notre traduction est identique. Aucune divergence. Le mot « Feu » avec majuscule chez Hamidullah souligne le caractere sacre et eschatologique — nous gardons cette convention.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:14 — TERMINE');
  console.log('  ndhr → "avertir" | nar → "un feu" | lzw → "flamber"');
  console.log('  Traduction : "Je vous ai donc avertis d\'un Feu qui flambe"');
}

// ================================================================
// DAILY PHRASES — racines qui n'ont pas encore de phrases quotidiennes
// ================================================================

async function dailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  // BXL (بخل) — id=2068 — avarice
  await insertDaily(2068, 'etre avare', 'بَخِلَ', 'bakhila', [
    "Il est trop avare pour partager son repas avec les autres.",
    "Ne sois pas avare de tes compliments, ils font du bien.",
    "L'avare accumule mais ne profite jamais de ce qu'il possede."
  ]);

  // RDYA (ر د ي) — id=2620 — chuter
  await insertDaily(2620, 'chuter', 'تَرَدَّى', 'taradda', [
    "Il a chute dans les escaliers et s'est blesse au genou.",
    "L'entreprise a chute apres la perte de son principal client.",
    "Fais attention a ne pas chuter sur le sol mouille."
  ]);

  // LZW (ل ظ ي) — id=2621 — flamber
  await insertDaily(2621, 'flamber', 'تَلَظَّى', 'talazza', [
    "Le feu de cheminee flambe et rechauffe toute la piece.",
    "Les prix de l'immobilier ont flambe cette annee.",
    "Le bucher flambait si fort qu'on voyait les flammes de loin."
  ]);

  // NAR (نار) — id=1422 — feu (check if daily exists)
  await insertDaily(1422, 'feu', 'نَار', 'nar', [
    "Le feu de camp eclairait les visages des enfants.",
    "Il a allume un feu dans la cheminee pour rechauffer la maison.",
    "Les pompiers ont maitrise le feu avant qu'il ne se propage."
  ]);

  console.log('DAILY PHRASES — TERMINE');
}

async function main() {
  await verse92_8();
  await verse92_9();
  await verse92_10();
  await verse92_11();
  await verse92_12();
  await verse92_13();
  await verse92_14();
  await dailyPhrases();

  console.log('\n=== PARTIE 2 TERMINEE (versets 8-14) ===');
}

main().catch(console.error);
