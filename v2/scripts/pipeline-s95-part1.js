// Pipeline Sourate 95 (At-Tin) — Partie 1: Versets 1-4
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

// ================================================================
// CONTEXTE SOURATE 95 (At-Tin / Le Figuier)
// ================================================================
// Structure : 3 serments (v1-3), 1 affirmation sur la creation (v4),
// 1 retournement (v5), 1 exception (v6), 1 question rhetorique (v7),
// 1 conclusion (v8). Theme : l'etre humain est cree dans la meilleure
// constitution puis ramene au plus bas, sauf ceux qui croient et agissent.
// Versets voisins : S94 (l'ouverture de la poitrine) et S96 (l'accrochement).

async function verse95_1() {
  console.log('\n=== VERSET 95:1 — وَٱلتِّينِ وَٱلزَّيْتُونِ ===');
  const verse_id = 6099;

  // ---- TYN (طين) — id=1276 — "figuier" ----
  // Forme: nom defini al-tin au genitif (serment par wa-)
  await upsertVWA(verse_id, 'tyn', 'figuier', {
    sense_chosen: "figuier",
    concept_chosen: "Argile/Matière première",
    concepts: {
      "Argile/Matière première": {
        status: "retenu",
        senses: ["argile", "boue", "terre mouillée"],
        proof_ctx: "Le sens retenu est « Argile/Matiere premiere ». Le mot at-tin designe d'abord l'argile, la terre mouillee. Le Lane's donne : boue, argile, terre humide. Cependant, at-tin designe aussi le figuier (l'arbre) et la figue (le fruit). Dans le contexte du verset, le mot est associe a az-zaytun (l'olivier) dans un serment. Les deux arbres sont cites ensemble, ce qui pointe vers des arbres ou des fruits plutot que vers l'argile seule. Le figuier est un arbre nourricier par excellence — son fruit est l'un des premiers aliments de l'humanite. Le mot est defini par al- et au genitif apres wa- (particule de serment) : « par le figuier ». La racine porte les deux sens (argile et figuier) et le contexte du serment par deux vegetaux privilegia le sens vegetal. Neanmoins, le sens d'argile reste en arriere-plan : l'etre humain est cree d'argile (verset 4) et le figuier pousse de la terre — les deux sens convergent vers la creation a partir de la matiere premiere.",
        axe1_verset: "Le verset dit « par le figuier et l'olivier ». Le mot at-tin est associe a az-zaytun (l'olivier) dans un serment double. Les deux mots sont des noms definis au genitif apres la particule de serment wa-. Le champ lexical figuier + olivier forme une paire vegetale nourriciere. Les deux arbres sont des symboles de nourriture, d'abondance et de civilisation mediterraneenne. Le serment par des arbres nourriciers introduit le theme de la creation bienfaisante.",
        axe2_voisins: "Le verset 2 ajoute un troisieme serment : « par le mont Sinai ». Le verset 3 un quatrieme : « par cette cite sure ». Les quatre serments (figuier, olivier, Sinai, cite) precedent l'affirmation du verset 4 : l'etre humain est cree dans la meilleure constitution. Les serments posent le cadre solennel de cette affirmation. Le figuier est le premier element de cette serie.",
        axe3_sourate: "La sourate 95 traite de la creation de l'etre humain dans la meilleure forme puis de sa chute. Le figuier ouvre la sourate par un serment — il ancre le discours dans le concret (un arbre, un fruit) avant de passer a l'abstrait (la constitution humaine). Le figuier comme nourriture premiere rappelle la dependance de l'etre humain envers la creation.",
        axe4_coherence: "Le Coran jure par des elements de la creation : le soleil (91:1), la nuit (92:1), l'aube (89:1), le temps (103:1). Le figuier s'inscrit dans cette serie de realites concretes. Le Coran mentionne at-tin une seule fois comme serment — c'est un hapax qui souligne la singularite de cette sourate.",
        axe5_frequence: "Le figuier comme arbre nourricier rappelle la mission du khalifa : l'etre humain est cree dans un monde qui le nourrit (le figuier) et l'eclaire (l'olivier, dont l'huile sert de lumiere). La creation nourriciere est le cadre dans lequel le khalifa exerce sa mission de justice et de civilisation."
      }
    }
  }, 1);

  // ---- ZYT (زيت) — id=1807 — "olivier" ----
  await upsertVWA(verse_id, 'zyt', 'olivier', {
    sense_chosen: "olivier",
    concept_chosen: "Onction/Bienfait",
    concepts: {
      "Onction/Bienfait": {
        status: "retenu",
        senses: ["huile d'olive", "olive", "olivier"],
        proof_ctx: "Le sens retenu est « Onction/Bienfait ». Le Lane's donne : l'huile d'olive, l'olive comme fruit, l'olivier comme arbre. Le mot az-zaytun designe l'olivier et son fruit. L'olivier est l'arbre de la lumiere — son huile sert a eclairer. C'est aussi l'arbre de l'onction — l'huile d'olive est utilisee pour oindre, nourrir et guerir. Le mot est defini par al- et au genitif dans le serment. L'olivier forme une paire avec le figuier : le figuier nourrit, l'olivier eclaire. Les deux arbres representent les bienfaits fondamentaux de la creation.",
        axe1_verset: "Le verset dit « par le figuier et l'olivier ». L'olivier est le second element du serment. Le champ lexical figuier + olivier associe nourriture et lumiere — les deux besoins fondamentaux de l'etre humain. L'olivier produit l'huile qui eclaire les lampes, nourrit le corps et soigne les maladies. C'est l'arbre de la bienfaisance par excellence.",
        axe2_voisins: "Les versets 2-3 ajoutent le mont Sinai et la cite sure. La serie figuier + olivier + montagne + cite forme une progression du vegetal au geographique. L'olivier est la deuxieme realite concrete qui fonde le serment.",
        axe3_sourate: "L'olivier, avec le figuier, ancre la sourate dans la creation bienfaisante. La sourate affirme ensuite que l'etre humain est cree dans la meilleure constitution (v4) — les bienfaits de la creation (figuier, olivier) preparent cette affirmation.",
        axe4_coherence: "Le Coran mentionne l'olivier dans d'autres passages : « un arbre beni, un olivier, ni d'orient ni d'occident, dont l'huile eclaire presque sans que le feu la touche » (24:35). L'olivier est un symbole coranique de lumiere et de benediction.",
        axe5_frequence: "L'olivier eclaire et nourrit — il represente les moyens que le khalifa recoit pour accomplir sa mission. La lumiere de l'olivier est la metaphore du savoir qui guide la justice."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلتِّينِ وَٱلزَّيْتُونِ",
    full_translation: "Par le figuier et l'olivier !",
    segments: [
      { fr: "Par le figuier", pos: "nom", phon: "wat-tini", arabic: "وَٱلتِّينِ", word_key: "tyn", is_particle: false, sense_retenu: "argile", position: 1, prefix_particle: "wa" },
      { fr: "et l'olivier", pos: "nom", phon: "waz-zaytuni", arabic: "وَٱلزَّيْتُونِ", word_key: "zyt", is_particle: false, sense_retenu: "olive", position: 2, prefix_particle: "wa" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient deux serments introduits par la particule wa- (par). En arabe, wa- suivi d'un nom au genitif forme un serment solennel — c'est Dieu qui jure par sa creation. Le mot at-tini (le figuier) est un nom defini par al- au genitif. La racine t-y-n porte deux sens dans le Lane's (Edward Lane, 1863) : l'argile/boue et le figuier/figue. Le contexte du serment par deux vegetaux oriente vers le sens vegetal. Le mot az-zaytuni (l'olivier) est egalement un nom defini au genitif. Le Lane's donne : l'olive, l'huile d'olive, l'olivier. Les deux noms forment une paire : figuier et olivier, deux arbres nourriciers mediterraneens.

§JUSTIFICATION§
**figuier** — Le sens retenu est « argile/figuier ». Le mot « figuier » est choisi car le contexte du serment associe deux vegetaux. L'alternative « argile » est ecartee car elle briserait la paire vegetale avec l'olivier. L'alternative « figue » (le fruit) est ecartee car le mot arabe at-tin designe plutot l'arbre que le fruit dans ce contexte de serment par des realites fondamentales.

**olivier** — Le sens retenu est « olive/olivier ». Le mot « olivier » est choisi car le serment porte sur l'arbre comme realite fondamentale. L'alternative « olive » (le fruit) est acceptable mais l'arbre est plus solennel. L'alternative « huile d'olive » est trop specifique.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens : « Par le figuier et l'olivier » (Hamidullah). Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:1 — TERMINE');
  console.log('  tyn (ط ي ن) → sens "Argile/Matiere premiere" → mot francais "figuier"');
  console.log('  zyt (ز ي ت) → sens "Onction/Bienfait" → mot francais "olivier"');
  console.log('  Traduction : "Par le figuier et l\'olivier"');
}

async function verse95_2() {
  console.log('\n=== VERSET 95:2 — وَطُورِ سِينِينَ ===');
  const verse_id = 6100;
  // Les mots tur et sinin sont des noms propres (particules dans step1)
  // Pas de VWA a creer — ce sont des noms propres geographiques

  await sb.from('verse_analyses').update({
    translation_arab: "وَطُورِ سِينِينَ",
    full_translation: "et par le Mont Sinaï !",
    segments: [
      { fr: "et par le mont", pos: "nom", phon: "wa-turi", arabic: "وَطُورِ", is_particle: false, position: 1, prefix_particle: "wa" },
      { fr: "Sinai", pos: "nom propre", phon: "sinina", arabic: "سِينِينَ", is_particle: false, position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le troisieme serment : wa-turi sinina — « par le mont Sinai ». La particule wa- introduit le serment. Le mot tur designe une montagne, specifiquement une montagne portant de la vegetation. Le mot sinina est un nom propre au genitif en idafa (rattachement) avec tur : « le mont de Sinai ». Le mont Sinai est le lieu ou la revelation a ete donnee a Moise selon le recit coranique. Le serment par un lieu de revelation ajoute une dimension sacree a la serie des serments.

§JUSTIFICATION§
**mont Sinai** — Ce sont des noms propres geographiques qui n'ont pas d'alternative de traduction. Le mont Sinai est identifie unanimement comme tel.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Aucune divergence.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:2 — TERMINE');
  console.log('  (noms propres geographiques, pas de VWA)');
  console.log('  Traduction : "Et par le mont Sinai"');
}

async function verse95_3() {
  console.log('\n=== VERSET 95:3 — وَهَـٰذَا ٱلْبَلَدِ ٱلْأَمِينِ ===');
  const verse_id = 6101;

  // ---- BLD (بلد) — id=793 — "cite" ----
  await upsertVWA(verse_id, 'bld', 'cite', {
    sense_chosen: "cite",
    concept_chosen: "Territoire/Cité",
    concepts: {
      "Territoire/Cité": {
        status: "retenu",
        senses: ["pays", "cité", "contrée"],
        proof_ctx: "Le sens retenu est « Territoire/Cite ». Le Lane's donne : pays, cite, contree, terre habitee. Le mot al-balad designe une cite, un lieu habite. Le demonstratif hadha (cette) rend la cite specifique : « cette cite » — celle ou se trouve le locuteur. Le mot est defini par al- et qualifie par al-amin (le sur). Le champ lexical cette + cite + sure forme un serment par un lieu precis et securise. La cite sure est traditionnellement identifiee a La Mecque, mais le texte ne la nomme pas — il dit « cette cite sure ».",
        axe1_verset: "Le verset dit « et par cette cite sure ». Le demonstratif hadha (cette) pointe vers une cite specifique. Le mot al-balad (la cite) est en idafa implicite avec al-amin (la sure). Le champ lexical demonstratif + cite + sure decrit un lieu concret, habite et protege. Le serment par un lieu habite ajoute la dimension humaine aux serments precedents (vegetaux et montagne).",
        axe2_voisins: "Les serments forment une progression : vegetal (figuier, olivier) → montagne sacree (Sinai) → cite sure. La progression va du naturel au civilisationnel. Le verset 4 tirera la conclusion de ces quatre serments : l'etre humain est cree dans la meilleure constitution.",
        axe3_sourate: "La cite sure est le lieu de la civilisation humaine — la ou l'etre humain cree dans la meilleure constitution exerce sa mission. La sourate passe du cadre naturel (arbres) au cadre sacre (Sinai) au cadre civilisationnel (cite).",
        axe4_coherence: "Le Coran jure par La Mecque dans la sourate 90 : « Non ! Je jure par cette cite » (90:1). Le serment par la cite est un procede coranique connu. Le mot balad apparait 19 fois dans le Coran.",
        axe5_frequence: "La cite sure est le lieu ou le khalifa exerce sa mission de justice. La securite de la cite est la condition necessaire de la civilisation — sans securite, pas de justice possible."
      }
    }
  }, 2);

  // ---- AMN (أمن) — id=287 — "sure" ----
  // Forme: participe actif amin (sur, digne de confiance)
  await upsertVWA(verse_id, 'amn', 'sure', {
    sense_chosen: "sure",
    concept_chosen: "Sécurité/Confiance",
    concepts: {
      "Sécurité/Confiance": {
        status: "retenu",
        senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
        proof_ctx: "Le sens retenu est « Securite/Confiance ». Le Lane's donne : etre en securite, se sentir a l'abri du danger. Le mot al-amin est un participe actif (une forme qui dit que le sujet possede activement cette qualite) — la cite est activement sure, elle garantit la securite de maniere permanente. Le participe actif indique un etat permanent, pas ponctuel. Distinction avec « Foi/Adhesion » : la foi est l'acte de croire, pas l'etat de securite. Le verset qualifie une cite, pas une personne qui croit. La cite ne croit pas — elle est sure. Distinction avec « Garantie/Protection » : la protection est un acte ponctuel, la securite est un etat permanent. Le participe actif confirme la permanence.",
        axe1_verset: "Le verset dit « cette cite sure ». Le mot al-amin est un participe actif qualifiant al-balad (la cite). Le participe actif (une forme qui dit que le sujet FAIT l'action activement et en continu) indique que la cite est activement et en permanence sure. Le champ lexical cite + sure forme un lieu de civilisation protege. La securite est la qualite qui definit cette cite.",
        axe2_voisins: "La cite sure complete la serie des serments : le figuier nourrit, l'olivier eclaire, le Sinai revele, la cite protege. Les quatre elements representent les conditions de la civilisation : nourriture, lumiere, revelation, securite. Le verset 4 couronne cette serie par l'affirmation sur la creation humaine.",
        axe3_sourate: "La securite de la cite est la condition necessaire pour que l'etre humain exerce sa mission. La sourate montre que l'etre humain est cree dans la meilleure forme (v4) — cette forme s'epanouit dans un cadre sur (la cite sure).",
        axe4_coherence: "Le Coran associe la securite a La Mecque : « Et quiconque y entre est en securite (amin) » (3:97). Le mot amin qualifie aussi les personnes dignes de confiance : Moise est decrit comme amin (28:26).",
        axe5_frequence: "La securite est le fondement de la mission du khalifa. Sans securite, pas de justice ni de civilisation. La cite sure est le modele de ce que le khalifa doit construire et maintenir."
      },
      "Foi/Adhésion": {
        status: "nul",
        senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant"],
        proof_ctx: "La foi est un acte de croyance d'une personne. Une cite ne croit pas — elle est sure. Le participe actif amin qualifie la cite par sa securite, pas par sa foi."
      },
      "Garantie/Protection": {
        status: "nul",
        senses: ["proteger", "accorder la securite"],
        proof_ctx: "La protection est un acte ponctuel dirige vers l'autre. La securite (amin) est un etat permanent de la cite elle-meme. Le participe actif confirme l'etat, pas l'acte."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "وَهَـٰذَا ٱلْبَلَدِ ٱلْأَمِينِ",
    full_translation: "et par cette Cité sûre !",
    segments: [
      { fr: "et par cette", pos: "demonstratif", phon: "wa-hadha", arabic: "وَهَـٰذَا", is_particle: true, position: 1 },
      { fr: "cite", pos: "nom", phon: "al-baladi", arabic: "ٱلْبَلَدِ", word_key: "bld", is_particle: false, sense_retenu: "cite", position: 2 },
      { fr: "sure", pos: "adjectif", phon: "al-amini", arabic: "ٱلْأَمِينِ", word_key: "amn", is_particle: false, sense_retenu: "etre en securite", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le quatrieme serment : wa-hadha l-baladi l-amini — « et par cette cite sure ». La particule wa- introduit le serment. Le demonstratif hadha (cette) rend la cite specifique — le texte ne la nomme pas mais pointe vers elle. Le mot al-baladi (la cite) est un nom defini au genitif. Le mot al-amini est un participe actif (une forme qui dit que le sujet possede cette qualite activement et en permanence) de la racine '-m-n (etre en securite). Le participe actif qualifie la cite comme un lieu qui est en permanence sur — ce n'est pas un etat temporaire.

§JUSTIFICATION§
**cite** — Le sens retenu est « cite ». Le mot « cite » traduit al-balad comme lieu habite et organise. L'alternative « ville » est trop moderne. L'alternative « pays » est trop vaste — le demonstratif hadha (cette) pointe vers un lieu precis et visible.

**sure** — Le sens retenu est « etre en securite ». Le mot « sure » traduit al-amin comme qualite permanente du lieu. L'alternative « en securite » est une locution moins fluide. L'alternative « digne de confiance » s'applique mieux aux personnes qu'aux lieux.

§CRITIQUE§
Les traductions courantes donnent « cette Cite sure » (Hamidullah) — sensiblement le meme sens. Certains ajoutent « (La Mecque) » entre parentheses, ce qui est une identification exegetique, pas textuelle. Le texte dit « cette cite sure » sans la nommer.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:3 — TERMINE');
  console.log('  bld → "cite" | amn → "sure"');
  console.log('  Traduction : "Et par cette cite sure"');
}

async function verse95_4() {
  console.log('\n=== VERSET 95:4 — لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ ===');
  const verse_id = 6102;

  // ---- XLQ (خلق) — id=344 — "creer" ----
  await upsertVWA(verse_id, 'xlq', 'creer', {
    sense_chosen: "creer",
    concept_chosen: "Création/Production",
    concepts: {
      "Création/Production": {
        status: "retenu",
        senses: ["creer", "creation", "creature", "faconner", "nature"],
        proof_ctx: "Le sens retenu est « Creation/Production ». Le Lane's donne : faire exister ce qui n'existait pas. Le verbe khalaqna est un accompli a la premiere personne du pluriel (nous avons cree) — le « nous » de majeste divine. L'accompli marque un acte acheve et definitif. La creation est qualifiee par fi ahsani taqwim (dans la meilleure constitution) — ce n'est pas une creation quelconque mais la meilleure possible.",
        axe1_verset: "Le verset dit « nous avons certes cree l'etre humain dans la meilleure constitution ». Le verbe khalaqna (nous avons cree) est renforce par la-qad (certes) qui exprime la certitude absolue. Le complement fi (dans) ahsani taqwim (la meilleure constitution) qualifie le resultat de la creation. Le champ lexical creer + etre humain + meilleure constitution forme l'affirmation centrale de la sourate : la creation humaine est optimale.",
        axe2_voisins: "Les serments des versets 1-3 preparent cette affirmation. Le verset 5 apportera le retournement : « puis nous l'avons ramene au plus bas des bas ». Le verset 4 est le sommet avant la chute. La creation dans la meilleure forme est le point de depart d'ou l'etre humain peut tomber.",
        axe3_sourate: "Le verset 4 est le pivot de la sourate. Tout ce qui precede (les serments) le fonde. Tout ce qui suit (la chute, l'exception, la question) en decoule. La creation dans la meilleure constitution est la these que la sourate defend.",
        axe4_coherence: "Le Coran affirme la qualite de la creation humaine : « Nous avons honore les enfants d'Adam » (17:70), « Il vous a faconnes et a rendu belles vos formes » (40:64). La creation humaine comme sommet de la creation est un theme coranique constant.",
        axe5_frequence: "Le khalifa est cree dans la meilleure constitution — il a tous les moyens pour accomplir sa mission de justice. La chute du verset 5 n'est pas une fatalite mais un risque : celui qui ne maintient pas sa constitution originelle tombe."
      }
    }
  }, 2);

  // ---- ANS (أنس) — id=866 — "etre humain" ----
  await upsertVWA(verse_id, 'ans', 'etre humain', {
    sense_chosen: "etre humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["etre familier", "etre sociable", "etre humain"],
        proof_ctx: "Meme analyse que dans la sourate 96. Le mot al-insan designe l'espece humaine dans sa totalite. Le nom defini par al- generalise : c'est tout etre humain, pas un individu. Le mot derive de la racine '-n-s qui porte le sens de familiarite et de sociabilite — l'humain est l'etre sociable par nature.",
        axe1_verset: "Le verset dit « nous avons cree l'etre humain dans la meilleure constitution ». Le mot al-insana est l'objet direct de la creation. L'etre humain est le destinataire de cette creation optimale. Le nom defini universalise : chaque etre humain est cree dans la meilleure constitution, sans exception.",
        axe2_voisins: "L'etre humain cree dans la meilleure forme (v4) sera ramene au plus bas (v5) sauf exception (v6). Le meme mot al-insan porte ces trois etats : perfection originelle, chute, et redemption par la foi et les actes.",
        axe3_sourate: "L'etre humain est le sujet central de la sourate. Tout le propos tourne autour de sa condition : d'ou il vient (la meilleure constitution), ou il peut tomber (le plus bas), et comment il peut se maintenir (la foi et les actes).",
        axe4_coherence: "Le mot insan apparait 65 fois dans le Coran. Il designe toujours l'espece humaine dans sa nature — sociable, fragile, creee.",
        axe5_frequence: "Le khalifa est d'abord un etre humain (insan) — un etre social cree pour vivre en societe et y exercer la justice."
      }
    }
  }, 3);

  // ---- HSN (حسن) — id=574 — "meilleur" ----
  // Forme: superlatif ahsan (le meilleur)
  await upsertVWA(verse_id, 'hsn', 'meilleur', {
    sense_chosen: "meilleur",
    concept_chosen: "Beauté/Bonté",
    concepts: {
      "Beauté/Bonté": {
        status: "retenu",
        senses: ["etre beau", "bon", "excellent"],
        proof_ctx: "Le sens retenu est « Beaute/Bonte ». Le Lane's donne : etre beau, bon, agreable, excellent. Le mot ahsani est un superlatif (forme af'al — le meilleur/le plus beau) en idafa avec taqwim (constitution). Le superlatif indique le degre absolu : la meilleure de toutes les constitutions possibles. Le Lane's donne husn comme l'excellence dans la forme et dans le caractere — la beaute est a la fois physique et morale. Distinction avec « Excellence morale » : l'excellence morale est un aspect de la beaute/bonte. Le superlatif ahsan englobe les deux dimensions (physique et morale) sans les separer.",
        axe1_verset: "Le verset dit « dans la meilleure constitution ». Le mot ahsani est un superlatif en position de complement. L'idafa ahsani taqwim (la meilleure constitution) qualifie le resultat de la creation. Le superlatif est absolu : il n'y a pas de constitution meilleure que celle dans laquelle l'etre humain est cree. Le champ lexical creer + meilleur + constitution forme l'affirmation d'excellence.",
        axe2_voisins: "Le superlatif « meilleur » au verset 4 contraste avec le superlatif « le plus bas » au verset 5 (asfala safilin). Les deux superlatifs creent un arc maximal : du sommet absolu au fond absolu. L'etre humain oscille entre les deux extremes.",
        axe3_sourate: "La meilleure constitution est le point de depart de toute la sourate. C'est la reference par rapport a laquelle la chute (v5) se mesure. Sans le verset 4, le verset 5 n'aurait pas de sens.",
        axe4_coherence: "Le Coran utilise ahsan dans d'autres contextes de creation : « Dieu est le meilleur des createurs » (23:14). L'excellence de la creation est un attribut divin constant.",
        axe5_frequence: "La meilleure constitution est le capital du khalifa. Il est cree avec le maximum de potentiel — sa mission est de le maintenir par la foi et les actes, pas de le dilapider par la transgression."
      },
      "Excellence morale": {
        status: "nul",
        senses: ["bien faire", "bienfaisance"],
        proof_ctx: "L'excellence morale est un sens derive de la racine. Le superlatif ahsan dans ce verset qualifie la constitution (taqwim), pas un acte moral. La constitution inclut la dimension morale mais ne s'y reduit pas."
      }
    }
  }, 5);

  // ---- QWM (قوم) — id=263 — "constitution" ----
  // Forme: nom verbal taqwim (forme II nominalisee)
  await upsertVWA(verse_id, 'qwm', 'constitution', {
    sense_chosen: "constitution",
    concept_chosen: "Verticalité/Droiture",
    concepts: {
      "Verticalité/Droiture": {
        status: "retenu",
        senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger"],
        proof_ctx: "Le sens retenu est « Verticalite/Droiture ». Le Lane's donne : se lever, se dresser, etre droit, rectifier. Le mot taqwim est un nom verbal de la forme II (qawwama — redresser, donner la bonne forme). Le taqwim est l'acte de donner a quelque chose sa forme droite et correcte — sa constitution. C'est le resultat du redressement : la forme optimale, la constitution juste. Le mot porte l'idee de verticalite (l'etre humain se tient debout) et de rectitude (sa forme est droite, correcte, harmonieuse). Distinction avec « Peuple/Communaute » : le peuple (qawm) est un autre derive de la racine qui n'a pas de rapport avec la constitution de l'etre humain. Distinction avec « Valeur/Mesure » : la valeur est un sens derive (qima) qui ne correspond pas au contexte de creation.",
        axe1_verset: "Le verset dit « dans la meilleure constitution (taqwim) ». Le mot taqwim est en position de complement d'idafa avec ahsan (meilleur). Le taqwim est la forme que Dieu donne a l'etre humain — sa constitution, sa structure, son architecture. Le champ lexical creer + meilleur + constitution decrit une creation deliberee et optimale. Le taqwim implique que la forme n'est pas aleatoire — elle est redressée, corrigee, optimisee.",
        axe2_voisins: "Le taqwim du verset 4 (la meilleure constitution) contraste avec le verset 5 ou l'etre humain est « ramene au plus bas ». La constitution est le point haut d'ou la chute se mesure. Le mot taqwim implique une forme droite — le verset 5 decrit la perte de cette droiture.",
        axe3_sourate: "La constitution est le mot-cle du verset central de la sourate. C'est ce qui definit la condition originelle de l'etre humain : une forme droite, redressée, optimale. Toute la sourate tourne autour de cette constitution et de sa perte.",
        axe4_coherence: "Le Coran utilise la racine q-w-m pour la droiture : « la religion droite (qayyim) » (12:40), « le chemin droit (mustaqim) » (1:6). La droiture est une valeur coranique fondamentale. Le taqwim est la droiture appliquee a la constitution humaine.",
        axe5_frequence: "La constitution droite est l'equipement du khalifa. Il est cree droit — son travail est de maintenir cette droiture par la foi et les actes. La chute du verset 5 montre ce qui arrive quand le khalifa perd sa droiture."
      },
      "Peuple/Communauté": {
        status: "nul",
        senses: ["peuple", "communaute", "tribu"],
        proof_ctx: "Le peuple (qawm) est un derive de la racine q-w-m mais le mot du verset est taqwim (constitution), pas qawm (peuple). Les deux sont des derives differents de la meme racine."
      },
      "Valeur/Mesure": {
        status: "nul",
        senses: ["valeur", "prix", "estimation"],
        proof_ctx: "La valeur (qima) est un derive commercial de la racine. Le verset parle de la constitution physique et morale de l'etre humain, pas de sa valeur marchande."
      },
      "Gestion/Administration": {
        status: "nul",
        senses: ["gerer", "administrer", "diriger"],
        proof_ctx: "La gestion est un acte d'autorite. Le taqwim est une forme/constitution, pas un acte de gestion."
      }
    }
  }, 6);

  await sb.from('verse_analyses').update({
    translation_arab: "لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
    full_translation: "Nous avons certes créé l'homme dans la forme la plus parfaite",
    segments: [
      { fr: "Certes", pos: "particule", phon: "la-qad", arabic: "لَقَدْ", is_particle: true, position: 1 },
      { fr: "nous avons cree", pos: "verbe", phon: "khalaqna", arabic: "خَلَقْنَا", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 2 },
      { fr: "l'etre humain", pos: "nom", phon: "al-insana", arabic: "ٱلْإِنسَـٰنَ", word_key: "ans", is_particle: false, sense_retenu: "etre humain", position: 3 },
      { fr: "dans", pos: "preposition", phon: "fi", arabic: "فِىٓ", is_particle: true, position: 4 },
      { fr: "la meilleure", pos: "adjectif", phon: "ahsani", arabic: "أَحْسَنِ", word_key: "hsn", is_particle: false, sense_retenu: "bon", position: 5 },
      { fr: "constitution", pos: "nom", phon: "taqwimin", arabic: "تَقْوِيمٍ", word_key: "qwm", is_particle: false, sense_retenu: "rectitude", position: 6 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par la-qad — une combinaison de deux particules d'insistance : la- (certes) et qad (deja/effectivement). Ensemble, elles expriment une certitude absolue et solennelle. C'est la reponse aux serments des versets 1-3 : apres avoir jure par le figuier, l'olivier, le Sinai et la cite sure, voici l'affirmation. Le verbe khalaqna (nous avons cree) est un accompli a la premiere personne du pluriel — le « nous » de majeste divine. L'accompli marque un acte acheve et definitif. Le complement fi ahsani taqwimin est compose de la preposition fi (dans), du superlatif ahsani (le meilleur, forme af'al de la racine h-s-n) et du nom taqwim (constitution, forme nominale de la racine q-w-m). Le taqwim est un nom verbal de la forme II (qawwama — redresser, donner la bonne forme). Il designe le resultat du redressement : la forme optimale, droite, harmonieuse. L'idafa ahsani taqwim signifie « la meilleure constitution » — le degre maximal de la forme droite.

§JUSTIFICATION§
**cree** — Meme racine que la sourate 96. L'accompli avec « nous » marque l'acte divin acheve.

**etre humain** — Le sens retenu est « etre humain ». Meme analyse que precedemment. Le mot « etre humain » est prefere a « homme » qui peut etre compris comme « male ».

**meilleure** — Le sens retenu est « bon/beau ». Le mot « meilleure » traduit le superlatif ahsan. L'alternative « plus belle » est ecartee car le superlatif ahsan couvre la beaute ET la bonte — « meilleure » englobe les deux.

**constitution** — Le sens retenu est « droiture/rectitude ». Le mot « constitution » est choisi car il traduit taqwim comme la forme structurelle et droite de l'etre humain. L'alternative « forme » est trop vague — elle ne porte pas l'idee de droiture et de redressement. L'alternative « stature » est trop physique — le taqwim inclut la dimension morale. L'alternative « nature » perd la dimension de forme deliberement donnee.

§CRITIQUE§
Les traductions courantes donnent « la forme la plus parfaite » (Hamidullah) ou « la plus belle stature ». Le mot « parfaite » n'est pas dans le texte — ahsan signifie « meilleur/plus beau », pas « parfait ». « Parfait » implique l'absence totale de defaut, ce que le texte ne dit pas. Le mot taqwim n'est pas « forme » mais « constitution » — il porte l'idee de redressement delibere, pas de simple apparence. « Constitution » est plus fidele a l'etymologie car il inclut a la fois la structure physique et l'organisation morale de l'etre humain.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 95:4 — TERMINE');
  console.log('  xlq → "creer" | ans → "etre humain" | hsn → "meilleur" | qwm → "constitution"');
  console.log('  Traduction : "Certes nous avons cree l\'etre humain dans la meilleure constitution"');
}

async function main() {
  await verse95_1();
  await verse95_2();
  await verse95_3();
  await verse95_4();
  console.log('\n=== PARTIE 1 TERMINEE (versets 1-4) ===');
}

main().catch(console.error);
