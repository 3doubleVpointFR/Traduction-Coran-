require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S87 v11-15 — ÉTAPES 3-4 ===\n');

  // ========== VERSET 11 (5959) ==========
  console.log('--- v11 (5959): wa-yatajannabuha al-ashqa ---');

  await upsertVWA(5959, 'jnb', 'éviter', {
    sense_chosen: 'éviter',
    concept_chosen: 'Côté/Éloignement',
    concepts: {
      'Côté/Éloignement': {
        senses: ['côté', 'flanc', 'éviter', 's\'éloigner'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-n-b porte le sens de cote, flanc, et par extension eviter, s'eloigner. Le verbe yatajannabu est en forme V (reflexif) a l'inaccompli : il s'ecarte de lui-meme, il evite. Le pronom ha renvoie au rappel (adh-dhikra du verset 9). L'Etre surnaturel (etranger/junub) est un sens specialise qui n'a aucun rapport avec l'action d'eviter le rappel.",
        axe1_verset: "Le verbe yatajannabu est en forme V (reflexive) a l'inaccompli avec le pronom ha (elle, renvoyant au rappel). Le champ lexical oppose ce verset au verset 10 : celui qui revere se rappelle (v10), tandis que le plus malheureux evite (v11). L'evitement est l'oppose du souvenir. Le verset decrit l'attitude de refus actif — la forme V indique que la personne se met elle-meme a l'ecart, c'est un choix delibere.",
        axe2_voisins: "Le verset 10 montrait le receptif (celui qui revere se rappellera). Le verset 11 montre le refractaire (le plus malheureux evite). Les versets 12-13 decriront les consequences de cet evitement : le feu et l'etat entre mort et vie. La paire v10-v11 forme un contraste symetrique : souvenir vs evitement, reverence vs malheur.",
        axe3_sourate: "La sourate 87 passe de la glorification (v1) aux actes divins (v2-5) puis au rappel (v9-10) et enfin aux deux types de reponse : l'acceptation (v10) et le refus (v11-13). L'evitement du rappel est le comportement qui conduit aux consequences decrites ensuite.",
        axe4_coherence: "Le Coran utilise la racine j-n-b pour decrire l'evitement dans d'autres passages. En 39:17, wa alladhina ijtanabu at-taghuta (ceux qui ont evite les fausses divinites). L'evitement est un acte de choix — on choisit de s'ecarter. Le meme sens d'eloignement volontaire s'applique ici.",
        axe5_frequence: "L'evitement du rappel est l'oppose de la mission du khalifa. Le khalifa est celui qui rappelle et qui se rappelle. Celui qui evite le rappel refuse cette mission. C'est le comportement le plus contraire a la finalite de justice et de civilisation — sans rappel, pas de conscience, pas de responsabilite."
      },
      'Être surnaturel': {
        senses: ['être étranger (junub)'],
        status: 'nul',
        proof_ctx: "L'etat d'etrangete ou d'impurete rituelle (junub) n'a aucun rapport avec le contexte d'evitement du rappel dans ce verset."
      }
    }
  }, 1);

  await upsertVWA(5959, 'shqy', 'être malheureux', {
    sense_chosen: 'être malheureux',
    concept_chosen: 'Malheur/Damnation',
    concepts: {
      'Malheur/Damnation': {
        senses: ['être malheureux', 'être damné'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine sh-q-y porte le sens d'etre malheureux, infortune. Le mot al-ashqa est le superlatif (af'al) avec l'article al- : le plus malheureux de tous. C'est un etat permanent de malheur, pas un evenement ponctuel. Le superlatif indique le degre extreme — celui qui est le plus eloigne du bonheur et de la reussite.",
        axe1_verset: "Le mot al-ashqa est un superlatif avec l'article defini, sujet du verbe yatajannabu. Le champ lexical oppose le malheur a la reussite du verset 14 (aflaha = a reussi). Le plus malheureux est celui qui evite le rappel — le malheur est la consequence de l'evitement. Le superlatif indique que c'est le plus extreme dans le malheur, pas un simple malheureux.",
        axe2_voisins: "Le verset 10 parlait de celui qui revere. Le verset 11 introduit son oppose : le plus malheureux. Les versets 12-13 decriront ce que subit ce plus malheureux. Le verset 14 reviendra au positif avec « a reussi celui qui s'est purifie ». Le plus malheureux est le pivot negatif du passage.",
        axe3_sourate: "La sourate oppose la glorification et le rappel (positif) a l'evitement et le malheur (negatif). Al-ashqa represente le sommet du negatif — c'est le superlatif du malheur. La sourate ne decrit pas un chatiment arbitraire mais une consequence logique : eviter le rappel conduit au malheur extreme.",
        axe4_coherence: "Le Coran utilise shaqiy/ashqa dans d'autres passages. En 91:12, idh inba'atha ashqaha (quand le plus malheureux d'entre eux se leva) — a propos du peuple de Thamud. En 20:2, ma anzalna 'alayka al-qur'ana li-tashqa (Nous n'avons pas fait descendre le Coran pour que tu sois malheureux). Le malheur est toujours lie au refus ou a l'eloignement de la guidance.",
        axe5_frequence: "Le malheur extreme est l'antithese de la mission du khalifa. Le khalifa qui remplit sa mission reussit (aflaha), celui qui evite le rappel est malheureux (ashqa). Le malheur n'est pas un chatiment impose mais la consequence naturelle du refus de la guidance."
      }
    }
  }, 2);

  await upsertVA(5959, {
    translation_arab: "Et l'evitera le plus malheureux",
    full_translation: "alors que s'en ecartera le damne",
    segments: [
      { fr: "Et l'evitera", pos: "V", phon: "wa-yatajannabuha", arabic: "وَيَتَجَنَّبُهَا", position: 1, word_key: "jnb", is_particle: false, sense_retenu: "éviter" },
      { fr: "le plus malheureux", pos: "N", phon: "al-ashqa", arabic: "ٱلْأَشْقَى", position: 2, word_key: "shqy", is_particle: false, sense_retenu: "être malheureux" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **yatajannabu** est en forme V (reflexive) de la racine j-n-b a l'inaccompli. La forme V indique que le sujet fait l'action sur lui-meme : il se met lui-meme a l'ecart. L'inaccompli indique une action continue ou habituelle. Le pronom ha (elle) renvoie au rappel (adh-dhikra) mentionne au verset 9. La conjonction wa (et) relie ce verset au precedent en opposant les deux attitudes.

Le mot **al-ashqa** est un superlatif (forme af'al) avec l'article al-. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-q-y signifie etre malheureux, infortune. Le superlatif designe celui qui est au plus haut degre du malheur.

§JUSTIFICATION§
**evitera** — Le sens retenu est « eviter ». Ce mot est choisi car il rend l'idee de s'ecarter volontairement, ce que la forme V reflexive exprime. L'alternative « s'eloigner » est ecartee car elle est plus spatiale et passive, tandis qu'eviter implique un choix delibere face a quelque chose qui se presente.

**le plus malheureux** — Le sens retenu est « etre malheureux ». Le superlatif « le plus malheureux » traduit directement al-ashqa. L'alternative « le plus miserable » est ecartee car « miserable » en francais courant a une connotation de pauvrete materielle. L'alternative « le plus damne » est ecartee car « damne » est un mot du vocabulaire religieux chretien qui implique une condamnation eternelle prononcee par Dieu, ce que le texte ne dit pas ici.

§CRITIQUE§
**le plus malheureux vs le damne** — Les traductions courantes donnent « le damne » (Hamidullah). Le mot « damne » vient du latin damnare (condamner) et porte une charge theologigue chretienne : la damnation eternelle comme chatiment divin. La racine sh-q-y ne contient pas cette idee de condamnation — elle decrit un etat de malheur, d'infortune. La difference est significative : « le damne » implique que Dieu a condamne cette personne, tandis que « le plus malheureux » decrit un etat qui resulte de ses propres choix (eviter le rappel). Le texte ne dit pas que Dieu l'a damne — il dit qu'il est malheureux parce qu'il evite.`
  });

  console.log('\nVERSET 87:11 — TERMINÉ');
  console.log('  jnb → Côté/Éloignement → "éviter"');
  console.log('  shqy → Malheur/Damnation → "le plus malheureux"');

  // ========== VERSET 12 (5960) ==========
  console.log('\n--- v12 (5960): alladhi yasla an-nar al-kubra ---');

  await upsertVWA(5960, 'sly', 'endurer le feu', {
    sense_chosen: 'endurer le feu',
    concept_chosen: 'Combustion/Châtiment',
    concepts: {
      'Combustion/Châtiment': {
        senses: ['brûler', 'être exposé au feu', 'rôtir', 'endurer le feu'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-l-y porte le sens de bruler, etre expose au feu, endurer la chaleur. Le verbe yasla est a l'inaccompli 3e personne : il endure le feu. L'inaccompli indique une action continue — il ne cesse pas de bruler. Il n'y a qu'un seul regroupement non-nul pour cette racine.",
        axe1_verset: "Le verbe yasla est a l'inaccompli avec l'objet an-nar (le feu) qualifie de al-kubra (la plus grande). Le champ lexical est celui du feu et de la grandeur : endurer le plus grand feu. Le verset decrit la consequence de l'evitement du verset 11 — celui qui evite le rappel endure le feu. L'inaccompli indique que cette endurance est continue et permanente.",
        axe2_voisins: "Le verset 11 identifiait le plus malheureux et son comportement (eviter le rappel). Le verset 12 precise qui il est : celui qui endure le feu. Le verset 13 ajoutera la description de son etat : ni mort ni vivant. Les versets 11-13 forment un triptyque du refractaire : identite, consequence, etat.",
        axe3_sourate: "La sourate oppose la reussite (v14) au malheur (v11-13). L'endurance du feu est le point le plus bas de la sourate — c'est la consequence ultime de l'evitement du rappel. Apres cette description sombre, la sourate revient au positif avec la reussite de celui qui se purifie (v14).",
        axe4_coherence: "Le Coran utilise la racine s-l-y pour l'endurance du feu dans plusieurs passages. En 92:15, la yasla-ha illa al-ashqa (n'y endurera que le plus malheureux) — le meme mot ashqa avec le meme verbe yasla. La coherence entre 87:11-12 et 92:15 est remarquable : le plus malheureux est celui qui endure le feu.",
        axe5_frequence: "L'endurance du feu est l'antithese de la mission du khalifa. Le feu represente la consequence de l'echec — celui qui refuse la guidance et la justice se retrouve dans le feu. C'est un avertissement pour le khalifa : la mission n'est pas facultative, ses consequences sont reelles."
      }
    }
  }, 2);

  await upsertVWA(5960, 'nwr', 'feu', {
    sense_chosen: 'feu',
    concept_chosen: 'Lumière/Clarté',
    concepts: {
      'Lumière/Clarté': {
        senses: ['lumière', 'éclairer', 'feu', 'guider par la lumière'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-w-r porte le sens fondamental de lumiere et de feu. Le feu (nar) et la lumiere (nur) partagent la meme racine car le feu est la source primordiale de lumiere. Le mot an-nar est un nom defini avec l'article al- : le feu connu, le feu par excellence. Les autres sens (Fleur, Fuir) sont des sens isoles marginaux.",
        axe1_verset: "Le mot an-nar est un nom defini au cas accusatif, objet de yasla (endurer). Il est qualifie par al-kubra (la plus grande). Le champ lexical est celui du feu et de la grandeur. Le feu est ici une realite de consequence, pas de lumiere — c'est le feu qui brule, pas qui eclaire. Mais etymologiquement, feu et lumiere partagent la meme racine car le feu est la source premiere de la lumiere.",
        axe2_voisins: "Le verset 11 parlait du plus malheureux qui evite le rappel. Le verset 12 decrit sa consequence : endurer le feu. Le verset 13 completera en decrivant l'etat dans ce feu. Le feu est le lieu de la consequence — c'est le cadre dans lequel se deroule le malheur extreme.",
        axe3_sourate: "La sourate decrit un contraste entre ceux qui se purifient et reussissent (v14) et ceux qui evitent et endurent le feu (v11-13). Le feu est l'element central de la partie negative. C'est la consequence de l'evitement du rappel — l'oppose de la facilite promise au prophete (v8).",
        axe4_coherence: "Le Coran utilise an-nar dans de nombreux passages comme consequence. En 2:39, ula'ika ashab an-nar (ceux-la sont les compagnons du feu). En 3:131, wa ittaqu an-nar (et prenez garde au feu). Le feu est une constante coranique comme consequence du refus de la guidance.",
        axe5_frequence: "Le feu rappelle au khalifa l'importance de sa mission. La consequence du refus n'est pas abstraite — elle est concrete et decrite. Le khalifa qui rappelle aide les autres a eviter cette consequence. Le feu est le moteur de l'urgence de la mission."
      },
      'Sens isolé/Fleur': { senses: ['fleur'], status: 'nul', proof_ctx: "La fleur est un sens botanique isole sans rapport avec le contexte du feu." },
      'Sens isolé/Fuir': { senses: ['fuir'], status: 'nul', proof_ctx: "Fuir est un sens isole qui ne s'applique pas au nom an-nar dans ce contexte." }
    }
  }, 3);

  await upsertVWA(5960, 'kbr', 'être grand', {
    sense_chosen: 'être grand',
    concept_chosen: 'Grandeur/Importance',
    concepts: {
      'Grandeur/Importance': {
        senses: ['être grand', 'grandir', 'être important', 'magnifier'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine k-b-r porte le sens de grandeur, importance, magnitude. Le mot al-kubra est le superlatif feminin (fu'la) avec l'article al- : la plus grande. Il qualifie an-nar (le feu) — c'est le plus grand feu, le feu supreme. Les sens d'Orgueil/Arrogance et Age/Anciennete sont nul dans ce contexte d'attribut qualifiant le feu.",
        axe1_verset: "Le mot al-kubra est un superlatif feminin avec l'article al-, qualifiant an-nar. Le champ lexical du verset est celui de l'intensite maximale : endurer le feu le plus grand. Le superlatif amplifie la consequence — ce n'est pas un petit feu mais le plus grand. L'article al- le definit comme connu et specifique.",
        axe2_voisins: "Le verset 11 donnait le superlatif du malheur (al-ashqa). Le verset 12 donne le superlatif du feu (al-kubra). Les deux superlatifs se repondent : le plus malheureux endure le plus grand feu. Le parallele entre les deux intensifie le message.",
        axe3_sourate: "La sourate utilise des superlatifs aux deux extremes : al-a'la (le Tres-Haut, v1) pour Dieu, al-ashqa (le plus malheureux, v11) et al-kubra (la plus grande, v12) pour la consequence. Le theme est celui des extremes — la grandeur divine et la grandeur de la consequence.",
        axe4_coherence: "Le Coran qualifie le feu de grand dans d'autres passages. En 79:34-39, la consequence est liee a celui qui a prefere la vie d'ici-bas. La grandeur du feu est proportionnelle a la gravite du choix — celui qui evite le rappel a la plus grande consequence.",
        axe5_frequence: "La grandeur de la consequence rappelle au khalifa la gravite de l'enjeu. La mission n'est pas anodine — ses consequences sont proportionnelles. Le plus grand feu est la mesure de l'importance du rappel que le khalifa est charge de transmettre."
      },
      'Orgueil/Arrogance': { senses: ['s\'enorgueillir', 'orgueil'], status: 'nul', proof_ctx: "L'orgueil ne s'applique pas ici — al-kubra qualifie an-nar (le feu), pas une personne." },
      'Âge/Ancienneté': { senses: ['vieillir', 'aîné'], status: 'nul', proof_ctx: "L'anciennete et le vieillissement n'ont aucun rapport avec la qualification du feu." }
    }
  }, 4);

  await upsertVA(5960, {
    translation_arab: "Celui qui endurera le feu, le plus grand",
    full_translation: "qui brulera dans le plus grand Feu",
    segments: [
      { fr: "Celui qui", pos: "REL", phon: "alladhi", arabic: "ٱلَّذِى", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "endurera", pos: "V", phon: "yasla", arabic: "يَصْلَى", position: 2, word_key: "sly", is_particle: false, sense_retenu: "endurer le feu" },
      { fr: "le feu", pos: "N", phon: "an-nar", arabic: "ٱلنَّارَ", position: 3, word_key: "nwr", is_particle: false, sense_retenu: "feu" },
      { fr: "le plus grand", pos: "ADJ", phon: "al-kubra", arabic: "ٱلْكُبْرَىٰ", position: 4, word_key: "kbr", is_particle: false, sense_retenu: "être grand" }
    ],
    translation_explanation: `§DEMARCHE§
Le pronom relatif **alladhi** (celui qui) relie ce verset au verset 11 : c'est le plus malheureux, celui qui endure le feu.

Le verbe **yasla** est a l'inaccompli 3e personne de la racine s-l-y. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), s-l-y signifie etre expose au feu, endurer la chaleur, bruler. L'inaccompli indique une action continue — il endure sans cesse.

Le mot **an-nar** est un nom defini de la racine n-w-r. Le feu et la lumiere partagent la meme racine car le feu est la source primordiale de lumiere. Ici c'est le feu comme realite brulante.

Le mot **al-kubra** est le superlatif feminin de la racine k-b-r avec l'article al- : la plus grande. Il qualifie an-nar.

§JUSTIFICATION§
**endurera** — Le sens retenu est « endurer le feu ». Le mot « endurer » est choisi car il rend l'idee de subir durablement, ce que l'inaccompli exprime (action continue). L'alternative « brulera » est ecartee car bruler est plus ponctuel et physique, tandis qu'endurer exprime la duree et la souffrance.

**le feu** — Le sens retenu est « feu ». C'est la traduction directe de nar. Pas d'alternative necessaire.

**le plus grand** — Le sens retenu est « etre grand ». Le superlatif « le plus grand » qualifie le feu en intensite.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. La nuance est dans « brulera » (Hamidullah) vs « endurera » — bruler est un processus physique instantane, endurer est une souffrance dans la duree. L'inaccompli arabe favorise la duree.`
  });

  console.log('\nVERSET 87:12 — TERMINÉ');
  console.log('  sly → Combustion/Châtiment → "endurer"');
  console.log('  nwr → Lumière/Clarté → "feu"');
  console.log('  kbr → Grandeur/Importance → "le plus grand"');

  // ========== VERSET 13 (5961) ==========
  console.log('\n--- v13 (5961): thumma la yamut fiha wa-la yahya ---');

  await upsertVWA(5961, 'mwt', 'mourir', {
    sense_chosen: 'mourir',
    concept_chosen: 'Mort/Cessation',
    concepts: {
      'Mort/Cessation': {
        senses: ['mourir', 'mort', 'tuer', 'mortel', 'terre morte'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine m-w-t porte le sens de mourir, cesser de vivre. Le verbe yamut est a l'inaccompli avec la negation la : il ne meurt pas. L'inaccompli avec la indique une negation permanente — il ne meurt jamais. Le Sens isole/Immobile est marginal et hors contexte.",
        axe1_verset: "Le verbe yamut est a l'inaccompli 3e personne avec la negation la : il ne meurt pas. Le champ lexical oppose la mort et la vie dans le meme verset : la yamut wa-la yahya (il ne meurt pas et il ne vit pas). Les deux negations creent un etat intermediaire — ni la paix de la mort ni la plenitude de la vie. Le verset decrit un entre-deux permanent.",
        axe2_voisins: "Le verset 12 decrivait l'endurance du feu. Le verset 13 precise l'etat dans ce feu : ni mort ni vivant. C'est l'aggravation — non seulement le feu est le plus grand, mais en plus on n'y meurt pas (ce qui apporterait un soulagement). Les versets 11-13 forment une gradation ascendante dans la description du malheur.",
        axe3_sourate: "La sourate oppose la vie proche (v16) et l'ultime (v17). Le verset 13 montre ce qui arrive quand on prefere la vie proche : un etat ou l'on ne meurt pas et ne vit pas. C'est l'antithese de la vie pleine promise a celui qui se purifie (v14).",
        axe4_coherence: "Le Coran decrit cet etat entre mort et vie dans d'autres passages. En 20:74, innahu man ya'ti rabbahu mujriman fa-inna lahu jahannama la yamut fiha wa-la yahya (celui qui vient a son Seigneur en criminel, il aura la gehenne, il n'y meurt pas et n'y vit pas). La formulation est identique — la yamut fiha wa-la yahya est un topos coranique.",
        axe5_frequence: "L'impossibilite de mourir dans le feu rappelle au khalifa que les consequences sont definitives. Il n'y a pas d'echappatoire par la mort. Le khalifa comprend que la mission est urgente car les consequences sont permanentes et irremediables."
      },
      'Sens isolé/Immobile': { senses: ['immobile'], status: 'nul', proof_ctx: "L'immobilite est un sens physique isole sans rapport avec l'etat de mort nie dans ce contexte." }
    }
  }, 3);

  await upsertVWA(5961, 'hyy', 'vivre', {
    sense_chosen: 'vivre',
    concept_chosen: 'Vie/Vivant',
    concepts: {
      'Vie/Vivant': {
        senses: ['vivre', 'vie', 'vivant', 'donner la vie'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-y-y porte le sens de vivre, etre vivant. Le verbe yahya est a l'inaccompli avec la negation wa-la : et il ne vit pas. L'inaccompli avec la indique une negation permanente. Les sens de Salutation/Pudeur, Serpent et Eau/Liquide sont hors contexte.",
        axe1_verset: "Le verbe yahya est a l'inaccompli 3e personne avec la negation wa-la : et il ne vit pas. Le champ lexical oppose la mort niee et la vie niee dans la meme phrase. Le verset cree un etat paradoxal : pas mort, pas vivant. C'est le comble du malheur — meme les deux etats fondamentaux de l'existence (vie et mort) lui sont refuses.",
        axe2_voisins: "Le verset 12 decrivait le feu. Le verset 13 complete la description par l'etat dans le feu. Le verset 14 passera brusquement au positif : « a reussi celui qui s'est purifie ». Le contraste entre v13 (ni mort ni vivant) et v14 (a reussi) est saisissant — c'est le tournant de la sourate.",
        axe3_sourate: "La sourate oppose systematiquement le positif et le negatif. La vie niee au verset 13 contraste avec la vie mentionnee au verset 16 (la vie proche). Celui qui prefere la vie proche (v16) se retrouve dans un etat ou il ne vit plus vraiment (v13). C'est une ironie structurelle.",
        axe4_coherence: "En 20:74, la meme formule la yamut fiha wa-la yahya. En 35:36, la yuqda 'alayhim fa-yamutu (il ne leur est pas decrete de mourir). Le Coran decrit systematiquement cet etat intermediaire comme la pire des conditions — la mort serait un soulagement qui n'arrive pas.",
        axe5_frequence: "La vie niee est l'antithese absolue de la mission du khalifa. Le khalifa est celui qui donne la vie a la civilisation, a la justice. L'etat decrit au verset 13 est la negation totale de cette mission — ni vie ni mort, c'est l'annihilation de tout but et de toute fonction."
      },
      'Salutation/Pudeur': { senses: ['saluer', 'pudeur'], status: 'nul', proof_ctx: "La salutation et la pudeur n'ont aucun rapport avec la negation de la vie dans le feu." },
      'Sens isolé/Serpent': { senses: ['serpent'], status: 'nul', proof_ctx: "Le serpent est un sens animalier isole hors contexte." },
      'Eau/Liquide': { senses: ['pluie'], status: 'nul', proof_ctx: "La pluie n'a aucun rapport avec l'etat de non-vie dans le feu." }
    }
  }, 6);

  await upsertVA(5961, {
    translation_arab: "Puis il n'y meurt pas et il n'y vit pas",
    full_translation: "ou il ne meurt ni ne vit",
    segments: [
      { fr: "Puis", pos: "CONJ", phon: "thumma", arabic: "ثُمَّ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "il ne", pos: "NEG", phon: "la", arabic: "لَا", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "meurt pas", pos: "V", phon: "yamut", arabic: "يَمُوتُ", position: 3, word_key: "mwt", is_particle: false, sense_retenu: "mourir" },
      { fr: "en elle", pos: "P", phon: "fiha", arabic: "فِيهَا", position: 4, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "et ne", pos: "NEG", phon: "wa-la", arabic: "وَلَا", position: 5, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "vit pas", pos: "V", phon: "yahya", arabic: "يَحْيَىٰ", position: 6, word_key: "hyy", is_particle: false, sense_retenu: "vivre" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **thumma** (puis) marque une succession avec un intervalle — apres etre entre dans le feu, puis il ne meurt pas. Thumma est plus lent que fa (puis immediatement).

La negation **la** avec l'inaccompli **yamut** (il meurt) donne : il ne meurt pas. De meme **wa-la** avec **yahya** (il vit) : et il ne vit pas. Les deux negations creent un etat paradoxal permanent — l'inaccompli indique que cet etat est continu.

Le pronom **fiha** (en elle) renvoie a an-nar (le feu) du verset 12.

§JUSTIFICATION§
**meurt** — Le sens retenu est « mourir ». C'est la traduction directe. Pas d'alternative necessaire pour ce sens premier.

**vit** — Le sens retenu est « vivre ». C'est la traduction directe. L'alternative « existe » est ecartee car exister est plus abstrait, tandis que vivre implique l'experience consciente de la vie.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah utilise « ou il ne meurt ni ne vit » — meme contenu, formulé differemment.`
  });

  console.log('\nVERSET 87:13 — TERMINÉ');
  console.log('  mwt → Mort/Cessation → "mourir"');
  console.log('  hyy → Vie/Vivant → "vivre"');

  // ========== VERSET 14 (5962) ==========
  console.log('\n--- v14 (5962): qad aflaha man tazakka ---');

  await upsertVWA(5962, 'flh', 'réussir', {
    sense_chosen: 'réussir',
    concept_chosen: 'Réussite/Prospérité',
    concepts: {
      'Réussite/Prospérité': {
        senses: ['réussir', 'prospérer', 'être heureux', 'obtenir ce qu\'on désire'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine f-l-h porte le sens de reussir, prosperer, obtenir le bonheur durable. Le verbe aflaha est en forme IV (causatif) a l'accompli avec la particule qad qui confirme la realisation : a effectivement reussi. La forme IV peut etre comprise comme 'parvenir a la reussite'. La distinction avec Fendre/Labourer est philosophique : fendre est un acte physique ponctuel sur la matiere (labourer la terre), tandis que la reussite est un aboutissement durable et global de la personne.",
        axe1_verset: "Le verbe aflaha est a l'accompli avec qad : a deja reussi, c'est un fait accompli. Le sujet est man tazakka (celui qui s'est purifie). Le champ lexical oppose ce verset aux versets 11-13 : apres le malheur, le feu et l'etat entre mort et vie, voici la reussite et la purification. Le contraste est maximal — c'est le tournant positif de la sourate.",
        axe2_voisins: "Les versets 11-13 decrivaient le sort du refractaire. Le verset 14 ouvre le sort du receptif. Le verset 15 completera : et a mentionne le nom de son Seigneur puis a prie. Les versets 14-15 forment la description positive, symetrique aux versets 11-13 negatifs.",
        axe3_sourate: "La sourate 87 oppose deux destins : celui qui evite le rappel (malheur, feu) et celui qui se purifie (reussite). Le verset 14 est le pivot — c'est l'affirmation centrale de la sourate : la purification mene a la reussite.",
        axe4_coherence: "Le Coran utilise aflaha dans plusieurs passages fondateurs. En 23:1, qad aflaha al-mu'minun (ont reussi les croyants). En 91:9, qad aflaha man zakkaha (a reussi celui qui l'a purifiee — l'ame). Le lien entre purification et reussite est un pattern coranique recurrent.",
        axe5_frequence: "La reussite est le but ultime du khalifa. Le khalifa qui se purifie et rappelle les autres reussit — c'est la promesse fondamentale. La reussite n'est pas materielle mais globale : elle englobe la paix interieure, la reconnaissance divine et l'accomplissement de la mission."
      },
      'Fendre/Labourer': {
        senses: ['fendre', 'labourer', 'cultivateur'],
        status: 'peu_probable',
        proof_ctx: "Fendre/Labourer decrit un acte physique sur la matiere — fendre la terre pour la cultiver. Ce sens est le sens etymologique premier (le laboureur fend la terre pour faire pousser). Mais dans ce verset, le sujet est man tazakka (celui qui s'est purifie), pas un laboureur. La purification est un processus interieur, pas un labour physique. La forme IV aflaha est un aboutissement global, pas un acte physique ponctuel.",
        axe1_verset: "Le champ lexical du verset est celui de la purification et de la reussite interieure (tazakka = s'est purifie). Le labour est un acte physique exterieur qui ne s'inscrit pas dans ce champ de purification. Le sujet est « celui qui s'est purifie », pas « celui qui a laboure ». La fente/labour ne forme pas d'expression naturelle avec la purification.",
        axe2_voisins: "Les versets voisins parlent de rappel (v15), de preferance de la vie (v16), de l'ultime (v17). Le contexte est entierement spirituel et moral. Le labour comme acte agricole serait completement isole et incongruent dans ce passage.",
        axe3_sourate: "La sourate 87 traite de glorification, de rappel et de choix moral. Le labour est absent de ce theme. La reussite comme aboutissement moral s'inscrit dans le fil directeur, le labour non.",
        axe4_coherence: "Le Coran utilise toujours aflaha dans le sens de reussite morale/spirituelle (23:1, 91:9), jamais dans le sens de labourer. Le pattern qad aflaha + pronom relatif est toujours lie a un comportement vertueux, pas a un labour.",
        axe5_frequence: "Le labour est un acte physique qui ne contribue pas directement a la mission de justice et de civilisation dans ce contexte moral. La reussite comme aboutissement de la purification est directement liee a la mission du khalifa."
      }
    }
  }, 2);

  await upsertVWA(5962, 'zkw', 'purifier', {
    sense_chosen: 'purifier',
    concept_chosen: 'Purification/Croissance',
    concepts: {
      'Purification/Croissance': {
        senses: ['purifier', 'aumône légale', 'croître', 'être pur', 'prospérer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine z-k-w porte le double sens de purifier et de croitre — la purification fait croitre. Le verbe tazakka est en forme V (reflexive) a l'accompli : il s'est purifie lui-meme. La forme V indique que le sujet fait l'action sur lui-meme — c'est une auto-purification, un effort personnel. Il n'y a qu'un seul regroupement non-nul pour cette racine.",
        axe1_verset: "Le verbe tazakka est en forme V (reflexive) a l'accompli : il s'est purifie. Le champ lexical associe la purification a la reussite (aflaha). Se purifier precede la reussite — c'est la cause. Le verset dit : a reussi celui qui s'est purifie. La purification est la condition de la reussite.",
        axe2_voisins: "Le verset 15 completera les actions du reussi : il a mentionne le nom de son Seigneur et a prie. La purification (v14) est suivie du rappel et de la priere (v15). Les trois actions forment un programme complet : se purifier, mentionner le nom divin, prier.",
        axe3_sourate: "La sourate commence par l'ordre de glorifier (v1) et aboutit a la purification (v14). La glorification du debut et la purification du verset 14 se repondent : glorifier c'est reconnaitre la grandeur, se purifier c'est s'en rendre digne. Les deux actes sont les piliers de la vie du croyant dans cette sourate.",
        axe4_coherence: "Le Coran lie purification et reussite dans un passage parallele. En 91:9, qad aflaha man zakkaha (a reussi celui qui l'a purifiee — l'ame). La meme racine z-k-w et le meme verbe aflaha. La coherence est parfaite — la purification est la voie de la reussite dans le Coran.",
        axe5_frequence: "La purification est fondamentale pour le khalifa. Avant d'agir dans le monde (justice, civilisation), le khalifa se purifie — il clarifie ses intentions, elimine les impuretes de son ame. La purification est le prerequis de toute action juste."
      }
    }
  }, 4);

  await upsertVA(5962, {
    translation_arab: "A reussi celui qui s'est purifie",
    full_translation: "Reussit, certes, celui qui se purifie",
    segments: [
      { fr: "A", pos: "CERT", phon: "qad", arabic: "قَدْ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "reussi", pos: "V", phon: "aflaha", arabic: "أَفْلَحَ", position: 2, word_key: "flh", is_particle: false, sense_retenu: "réussir" },
      { fr: "celui qui", pos: "REL", phon: "man", arabic: "مَن", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "s'est purifie", pos: "V", phon: "tazakka", arabic: "تَزَكَّىٰ", position: 4, word_key: "zkw", is_particle: false, sense_retenu: "purifier" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **qad** avec l'accompli exprime la certitude de la realisation : a effectivement reussi, c'est un fait etabli. Qad renforce l'accompli — ce n'est pas une hypothese mais une affirmation.

Le verbe **aflaha** est en forme IV a l'accompli. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine f-l-h porte le sens premier de fendre la terre (le laboureur) puis par extension de reussir, prosperer. La forme IV (af'ala) marque l'aboutissement : parvenir a la reussite.

Le pronom relatif **man** (celui qui) introduit la condition de la reussite.

Le verbe **tazakka** est en forme V (reflexive) a l'accompli. D'apres les sources etymologiques, la racine z-k-w signifie purifier et croitre. La forme V est reflexive : se purifier soi-meme. L'accompli indique que la purification est achevee — il s'est purifie completement.

§JUSTIFICATION§
**reussi** — Le sens retenu est « reussir ». Ce mot est choisi car il traduit l'aboutissement global et durable que aflaha exprime. L'alternative « prospere » est ecartee car la prosperite est souvent associee au materiel, tandis que la reussite est plus globale. L'alternative « a ete heureux » est ecartee car le bonheur est un etat emotionnel, tandis que la reussite est un accomplissement.

**s'est purifie** — Le sens retenu est « purifier ». Le reflexif « se purifier » rend la forme V. L'alternative « a fait l'aumone » est ecartee car l'aumone (zakat) est un sens derive specifique qui restreint la purification a un seul acte, tandis que tazakka est plus global.

§CRITIQUE§
**a reussi vs reussit** — Hamidullah utilise le present « reussit » alors que l'arabe utilise l'accompli avec qad (a reussi). La difference est temporelle : « a reussi » (accompli) affirme que la reussite est deja acquise, c'est un fait. « Reussit » (present) est plus general et atemporel. L'accompli arabe avec qad est plus affirmatif et definitif.`
  });

  console.log('\nVERSET 87:14 — TERMINÉ');
  console.log('  flh → Réussite/Prospérité → "réussir"');
  console.log('  zkw → Purification/Croissance → "se purifier"');

  // ========== VERSET 15 (5963) ==========
  console.log('\n--- v15 (5963): wa-dhakara isma rabbihi fa-salla ---');

  await upsertVWA(5963, 'ðkr', 'mentionner', {
    sense_chosen: 'mentionner',
    concept_chosen: 'Mention/Rappel',
    concepts: {
      'Mention/Rappel': {
        senses: ['mentionner', 'se souvenir', 'rappel (dhikr)'],
        status: 'retenu',
        proof_ctx: "Le verbe dhakara est a l'accompli 3e personne : il a mentionne. C'est la forme I simple — mentionner, dire le nom. L'objet est isma rabbihi (le nom de celui qui l'eleve). La distinction avec Masculin/Male est evidente : le contexte est la mention du nom divin, pas le genre.",
        axe1_verset: "Le verbe dhakara est a l'accompli avec l'objet isma rabbihi. Le champ lexical combine la mention, le nom et la priere (fa-salla). Mentionner le nom precede la priere — c'est l'acte preparatoire. Le verset decrit un programme en deux temps : mentionner puis prier.",
        axe2_voisins: "Le verset 14 donnait la condition de la reussite (la purification). Le verset 15 ajoute deux actions du reussi : mentionner le nom divin et prier. Les versets 14-15 forment l'ensemble des conditions de la reussite : purification + mention + priere.",
        axe3_sourate: "La sourate commence par l'ordre de glorifier le nom (v1 : sabbih isma rabbika). Le verset 15 repond a cet ordre : il a mentionne le nom de son Seigneur. Le debut et le milieu de la sourate se repondent — la glorification ordonnee est accomplie par celui qui reussit.",
        axe4_coherence: "Le Coran associe la mention du nom divin a la priere dans d'autres passages. En 20:14, wa aqim as-salata li-dhikri (accomplis la priere pour Ma mention). La mention et la priere sont les deux piliers de la relation entre le croyant et Dieu.",
        axe5_frequence: "La mention du nom est fondamentale pour le khalifa. Avant d'agir, le khalifa mentionne le nom de celui qui l'a cree — c'est l'acte de conscience qui precede toute action. Mentionner, c'est se souvenir de l'autorite bienveillante sous laquelle on agit."
      },
      'Masculin/Mâle': { senses: ['mâle', 'masculin'], status: 'nul', proof_ctx: "Le genre masculin n'a aucun rapport avec la mention du nom divin." }
    }
  }, 1);

  await upsertVWA(5963, 'smw', 'nom', {
    sense_chosen: 'nom',
    concept_chosen: 'Nom/Identification',
    concepts: {
      'Nom/Identification': {
        senses: ['nom', 'nommer', 'prononcer le nom de Dieu', 'se nommer', 'renommée', 'homonyme'],
        status: 'retenu',
        proof_ctx: "Le mot isma est un nom au cas accusatif, objet de dhakara. Le contexte est identique au verset 1 (sabbih isma rabbika) : le nom sert a identifier et a invoquer. La distinction avec Ciel/Ce qui couvre est la meme qu'au verset 1 — le nom est un outil d'identification, pas un espace physique.",
        axe1_verset: "Le mot isma est complement d'objet de dhakara, suivi de rabbihi en idafa. Le champ lexical est celui de l'identification et de l'invocation : mentionner le nom de celui qui l'eleve. Le nom est le moyen par lequel on accede a la personne identifiee. C'est le vecteur de la relation.",
        axe2_voisins: "Le verset 14 parlait de purification, le verset 15 ajoute la mention du nom et la priere. Le nom est le pivot entre la purification interieure (v14) et la priere exterieure (fa-salla). On se purifie, on mentionne le nom, puis on prie — une progression de l'interieur vers l'exterieur.",
        axe3_sourate: "Le verset 1 ordonnait de glorifier le nom. Le verset 15 montre quelqu'un qui mentionne le nom. Le nom revient comme fil rouge de la sourate — c'est par le nom qu'on glorifie et qu'on prie.",
        axe4_coherence: "Le Coran utilise isma avec dhakara dans d'autres contextes d'invocation. Le nom est toujours le vecteur de la relation entre l'humain et le divin — on mentionne le nom pour se relier.",
        axe5_frequence: "Le nom est l'outil premier du khalifa pour se relier a celui qui l'a cree. Mentionner le nom, c'est activer la relation de reconnaissance et de responsabilite."
      },
      'Ciel/Ce qui couvre': {
        senses: ['ciel', 'toit', 'nuage', 'pluie'],
        status: 'nul',
        proof_ctx: "Le ciel ne s'applique pas dans ce contexte — dhakara isma rabbihi (il a mentionne le nom de celui qui l'eleve) impose le sens d'identification, pas de couverture."
      }
    }
  }, 2);

  await upsertVWA(5963, 'rbb', 'celui qui élève', {
    sense_chosen: 'celui qui élève',
    concept_chosen: 'Seigneurie/Autorité bienveillante',
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'gouverner'],
        status: 'retenu',
        proof_ctx: "Le mot rabbihi est en idafa avec le pronom hi (son). Le contexte est similaire au verset 1 (rabbika). Le rabb est celui qui possede, eleve et entretient. La distinction avec Croissance/Augmentation est la meme : la seigneurie est une relation personnelle, la croissance est un processus impersonnel.",
        axe1_verset: "Le mot rabbihi est en idafa avec le pronom hi (son). Le champ lexical — mentionner, nom, celui qui l'eleve, prier — est celui de la relation personnelle entre le croyant et son Seigneur. Mentionner le nom de celui qui l'eleve, c'est reconnaitre cette relation d'autorite bienveillante.",
        axe2_voisins: "Le verset 14 parlait de purification et de reussite. Le verset 15 ancre cette reussite dans la relation avec le rabb. Le rabb est la reference — se purifier devant qui ? mentionner le nom de qui ? Le rabb donne un sens et une direction a la purification.",
        axe3_sourate: "Le rabb est mentionne au verset 1 (rabbika) et au verset 15 (rabbihi). Les deux occurrences encadrent les actes divins (v2-5) et le rappel (v9-10). Le rabb est le fil conducteur de la sourate — c'est lui qui est glorifie, c'est lui dont on mentionne le nom.",
        axe4_coherence: "Le Coran utilise rabb systematiquement dans le contexte de la relation personnelle entre Dieu et ses creatures. La coherence est parfaite avec le verset 1 et avec l'ensemble du Coran.",
        axe5_frequence: "Le rabb est la reference du khalifa. Mentionner le nom de celui qui l'eleve, c'est ancrer sa mission dans cette relation fondatrice."
      },
      'Croissance/Augmentation': {
        senses: ['augmenter', 'croître', 'faire grandir', 'nourrir'],
        status: 'nul',
        proof_ctx: "La croissance impersonnelle ne convient pas ici — le pronom hi (son) impose une relation personnelle, pas un processus impersonnel."
      }
    }
  }, 3);

  await upsertVWA(5963, 'slw', 'prier', {
    sense_chosen: 'prier',
    concept_chosen: 'Prière/Invocation',
    concepts: {
      'Prière/Invocation': {
        senses: ['prier', 'prière rituelle', 'invoquer', 'bénir', 'lieu de prière'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-l-w porte le sens de prier, invoquer, se relier. Le verbe fa-salla est a l'accompli avec fa (puis) : puis il a prie. C'est l'acte qui suit la mention du nom. Les sens de Proximite/Attachement, Lieu/Geographie et Corps/Anatomie sont nul dans ce contexte.",
        axe1_verset: "Le verbe fa-salla est a l'accompli avec fa de succession : apres avoir mentionne le nom, puis il a prie. Le champ lexical associe la mention du nom et la priere — les deux actes se completent. Mentionner le nom, c'est reconnaitre; prier, c'est se relier. La priere est l'aboutissement de la mention.",
        axe2_voisins: "Le verset 14 disait : a reussi celui qui s'est purifie. Le verset 15 complete : et a mentionne et a prie. Les trois actions (purification, mention, priere) constituent le programme complet du reussi. La priere est la derniere action de ce triptyque.",
        axe3_sourate: "La sourate commence par la glorification (acte de parole) et aboutit a la priere (acte de devotion). La progression est coherente : glorifier d'abord, puis se purifier, mentionner et prier. La priere est l'aboutissement pratique de la glorification theorique.",
        axe4_coherence: "Le Coran associe la priere a la mention du nom. En 20:14, aqim as-salata li-dhikri (accomplis la priere pour Ma mention). En 29:45, inna as-salata tanha 'an al-fahsha' (la priere preserve de la turpitude). La priere est toujours liee a la mention et a la preservation morale.",
        axe5_frequence: "La priere est un pilier de la vie du khalifa. C'est le moment ou le khalifa se relie a celui qui l'a cree, ou il renouvelle sa conscience et sa mission. La priere suit la mention du nom — elle est l'acte qui concretise la reconnaissance."
      },
      'Proximité/Attachement': { senses: ['suivre de près'], status: 'nul', proof_ctx: "Suivre de pres ne s'applique pas dans ce contexte de mention du nom et de priere." },
      'Lieu/Géographie': { senses: ['milieu'], status: 'nul', proof_ctx: "Le milieu geographique n'a aucun rapport avec la priere dans ce contexte." },
      'Corps/Anatomie': { senses: ['deuxième dans une course'], status: 'nul', proof_ctx: "Le sens de deuxieme dans une course est completement hors contexte." }
    }
  }, 4);

  await upsertVA(5963, {
    translation_arab: "Et a mentionne le nom de celui qui l'eleve, puis a prie",
    full_translation: "et invoque le nom de son Seigneur, puis prie",
    segments: [
      { fr: "Et a mentionne", pos: "V", phon: "wa-dhakara", arabic: "وَذَكَرَ", position: 1, word_key: "ðkr", is_particle: false, sense_retenu: "mentionner" },
      { fr: "le nom (de)", pos: "N", phon: "isma", arabic: "ٱسْمَ", position: 2, word_key: "smw", is_particle: false, sense_retenu: "nom" },
      { fr: "celui qui l'eleve", pos: "N", phon: "rabbihi", arabic: "رَبِّهِۦ", position: 3, word_key: "rbb", is_particle: false, sense_retenu: "celui qui élève" },
      { fr: "puis a prie", pos: "V", phon: "fa-salla", arabic: "فَصَلَّىٰ", position: 4, word_key: "slw", is_particle: false, sense_retenu: "prier" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) relie ce verset au verset 14 — celui qui a reussi est aussi celui qui a mentionne et prie.

Le verbe **dhakara** est a l'accompli de la forme I de dh-k-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), dhakara signifie mentionner, dire, rappeler. L'accompli indique un acte acheve.

Le mot **isma** est au cas accusatif, objet de dhakara. En idafa avec **rabbihi** (celui qui l'eleve + pronom hi = son).

Le verbe **fa-salla** est a l'accompli avec fa (puis). D'apres les sources etymologiques, la racine s-l-w signifie prier, invoquer. La priere suit la mention du nom — c'est la sequence logique.

§JUSTIFICATION§
**mentionne** — Le sens retenu est « mentionner ». Ce mot est choisi car dhakara a la forme I signifie dire, citer, mentionner. L'alternative « invoque » est ecartee car l'invocation (du'a) ajoute une dimension de supplication absente de la forme I de dh-k-r. Mentionner est plus neutre et plus fidele.

**prie** — Le sens retenu est « prier ». C'est le sens le plus direct de salla. L'alternative « invoque » est ecartee pour la meme raison — la priere (salat) et l'invocation (du'a) sont distinctes en arabe.

§CRITIQUE§
**mentionne vs invoque** — Hamidullah donne « invoque le nom de son Seigneur ». L'invocation ajoute une dimension de supplication que le verbe dhakara ne porte pas. Dhakara signifie mentionner, dire, rappeler — c'est un acte de parole neutre. L'invocation transforme un acte de mention en acte de supplication, ce qui oriente le lecteur vers un registre plus religieux que ce que le texte dit.`
  });

  console.log('\nVERSET 87:15 — TERMINÉ');
  console.log('  ðkr → Mention/Rappel → "mentionner"');
  console.log('  smw → Nom/Identification → "nom"');
  console.log('  rbb → Seigneurie/Autorité bienveillante → "celui qui l\'élève"');
  console.log('  slw → Prière/Invocation → "prier"');

  console.log('\n=== PIPELINE S87 v11-15 TERMINÉE ===');
})();
