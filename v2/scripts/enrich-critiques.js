/**
 * Enrichit le §CRITIQUE§ de plusieurs versets avec les divergences Hami / nous
 * qui n'étaient pas déjà discutées.
 *
 * Pour chaque verset, on ajoute des blocs **xxx vs « yyy »** ciblés sur les
 * différences sémantiques substantielles (pas la ponctuation, pas Allah/Dieu
 * déjà discuté).
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Format : { vid: [bloc1, bloc2, ...] }
const ADDITIONS = {
  // V39 (vid=332) : "Voilà qu'Allah" emphatique, "naissance" vs "bonne nouvelle", "priait" vs "tenait debout priant"
  332: [
    `**bonne nouvelle de Yaḥyā vs « la naissance de Yahya »** : Hamidullah rend yubashshiruka bi-yaḥyā par « t'annonce la naissance de Yahya ». La forme verbale yubashshiru (forme II de b-š-r = peau, surface visible, réjouir le visage) signifie spécifiquement « annoncer une bonne nouvelle qui réjouit » — ce n'est pas un simple « annoncer ». Hamidullah glisse vers « la naissance », transformant la racine bashar (joie) en simple événement biologique. Notre traduction « bonne nouvelle de Yaḥyā » préserve la racine joyeuse (b-š-r) ; le contenu de la nouvelle (la naissance) reste implicite mais ne déplace pas le sens du verbe.`,
    `**alors qu'il se tenait debout, priant vs « pendant que, debout, il priait »** : Hamidullah aplatit la structure circonstancielle wa-huwa qāʾimun yuṣallī en deux locutions juxtaposées. L'arabe articule un état (qāʾim, debout) et une action (yuṣallī, priant) en parallèle, marqués par la wāw circonstancielle (ḥāl). Notre traduction préserve la simultanéité des deux états par « se tenait debout, priant ».`,
  ],

  // V42 (vid=335) — déjà bien couvert, rien à ajouter de substantiel

  // V44 (vid=337) : "jetaient" vs "lançaient" (calames), "Inconnaissable" vs "invisible"
  337: [
    `**l'invisible vs « l'Inconnaissable »** : Hamidullah rend al-ghayb par « l'Inconnaissable ». Or al-ghayb (racine gh-y-b = être absent, non visible) désigne ce qui échappe à la perception directe, mais reste connaissable par d'autres voies (révélation, déduction). « Inconnaissable » fige la chose comme inaccessible par principe — glissement métaphysique vers une catégorie philosophique kantienne absente du sens arabe. « L'invisible » garde la dimension perceptive ouverte du ghayb.`,
    `**lançaient vs « jetaient »** : Hamidullah rend yulqūna par « jetaient ». La racine l-q-y porte le sens de « lancer », « projeter avec intention » — pas le simple « jeter ». Dans le rite des calames (tirage au sort par projection de roseaux dans l'eau), c'est l'intention rituelle qui compte. « Lançaient » conserve l'idée d'une action décidée et orientée.`,
  ],

  // V46 (vid=339) : "âge mûr" vs "adulte", "gens de bien" vs "vertueux"
  339: [
    `**adulte vs « son âge mûr »** : Hamidullah rend kahlan par « son âge mûr ». Kahl désigne précisément l'homme dans la pleine force de l'âge (entre 30 et 50 ans environ) — mais en français, « âge mûr » est ambigu (peut désigner aussi la vieillesse). « Adulte » est plus net en français contemporain pour l'opposition au berceau (mahd = nourrisson) que le verset trace explicitement.`,
    `**parmi les vertueux vs « du nombre des gens de bien »** : Hamidullah rend min aṣ-ṣāliḥīn par « du nombre des gens de bien ». La racine ṣ-l-ḥ (être ajusté, droit) et la forme du participe actif ṣāliḥ marquent l'agentivité — celui qui fait activement le bien. « Gens de bien » est une catégorie passive, « les vertueux » conserve le caractère agentif du participe.`,
  ],

  // V47 (vid=340) : "C'est ainsi que" vs "Ainsi", "décide" vs "décrète", "Sois et c'est"
  340: [
    `**Ainsi vs « C'est ainsi que »** : Hamidullah ajoute la périphrase emphatique « C'est ainsi que » pour rendre kaḏālika. L'arabe dit simplement « ainsi » (kaḏālika = comme cela). « C'est ainsi que » alourdit la structure et déplace l'accent vers une démonstration explicative absente du texte qui se contente d'une simple comparaison.`,
    `**décrète vs « décide »** : Hamidullah rend qaḍā par « décide ». La racine q-ḍ-y porte un sens plus solennel et exécutoire que « décider » — qaḍā désigne l'acte d'achever, de trancher définitivement, de juger sans appel. « Décréter » conserve cette dimension d'autorité performante (la parole qui réalise) que la racine porte dans tout le Coran.`,
  ],

  // V49 (vid=342) : "Enfants" vs "Fils", "glaise" vs "argile", "figure" vs "forme"
  342: [
    `**Fils d'Israël vs « Enfants d'Israël »** : Hamidullah rend banī ʾisrāʾīla par « Enfants d'Israël ». Banū (pluriel de ibn = fils) désigne en arabe la filiation, étendue par usage à un peuple ou une lignée. « Fils » est la traduction directe de la racine ; « Enfants » est une atténuation française qui efface la dimension de filiation explicitement marquée par la racine b-n-y.`,
    `**argile vs « glaise »** : Hamidullah rend ṭīn par « glaise ». Les deux mots sont possibles en français mais « argile » est le terme moderne et neutre ; « glaise » a une connotation rurale/artisanale qui n'est pas dans le mot arabe ṭīn (matière souple humide propre au modelage).`,
    `**la forme vs « la figure »** : Hamidullah rend ka-hayʾati par « comme la figure ». Hayʾa (racine h-y-ʾ = préparation, disposition) désigne la configuration d'ensemble — la forme structurée. « Figure » glisse vers la silhouette ou la représentation, perdant la dimension de configuration interne (préparation à la vie après le souffle) que le verset met en place.`,
  ],

  // V58 (vid=351) : "Voilà ce que" vs "Cela"
  351: [
    `**Cela vs « Voilà ce que »** : Hamidullah ajoute l'emphatique « Voilà ce que » pour rendre ḏālika. Le démonstratif arabe ḏālika signifie simplement « cela ». L'ajout « Voilà ce que » transforme une référence neutre en pointage emphatique absent du texte.`,
  ],

  // V77 (vid=370) : "vendent" vs "troquent", "vil" vs "infime", "Résurrection"
  370: [
    `**troquent vs « vendent »** : Hamidullah rend yashtarūna par « vendent ». La forme VIII de la racine š-r-y (qui couvre à la fois acheter et vendre, selon le contexte et la forme) prend ici un sens d'échange — troquer une chose contre une autre. « Vendre » réduit la transaction à un sens unilatéral, alors que « troquer » conserve la dimension d'échange réciproque (l'engagement contre un prix).`,
    `**l'engagement vs « l'alliance »** : Hamidullah rend ʿahd par « alliance ». ʿAhd désigne l'engagement mutuel ou unilatéral — la promesse, le pacte. « Alliance » est plus politique/religieux et porte une connotation chrétienne forte (l'Ancienne / la Nouvelle Alliance). « Engagement » est plus neutre et plus proche du sens fonctionnel de la racine.`,
    `**la vie à venir vs « l'au-delà »** : Hamidullah rend al-ʾākhira par « l'au-delà ». Al-ʾākhira (racine ʾ-kh-r = être derrière, suivre) désigne ce qui vient après cette vie — la « vie à venir » (en opposition à al-dunyā = la vie d'ici-bas). « L'au-delà » est plus métaphysique et figé en concept ; « la vie à venir » garde la dimension temporelle de la racine.`,
  ],

  // V79 (vid=372) : "honoré" vs "apporte", "exclusion" vs "écart", "maîtres"
  372: [
    `**apporte vs « ait honoré »** : Hamidullah rend yuʾtīhu par « ait honoré ». La racine ʾ-t-y (forme IV) signifie « apporter, donner » — pas « honorer ». Hamidullah ajoute une nuance d'estime/déférence absente du verbe arabe. « Apporter » garde le sens factuel de la transmission divine.`,
    `**à l'écart de Dieu vs « à l'exclusion d'Allah »** : Hamidullah rend min dūni allāh par « à l'exclusion d'Allah ». Dūn désigne ce qui est en deçà, ou à côté, ou en marge — pas une exclusion absolue. « À l'écart de » conserve cette nuance d'éloignement relatif, alors que « exclusion » durcit le rapport en négation totale.`,
    `**hommes voués au Seigneur vs « maîtres »** : Hamidullah rend rabbāniyyīn par « maîtres ». Le mot rabbānī est un adjectif formé sur rabb (Seigneur) avec le suffixe -ānī qui marque l'appartenance / la consécration. « Maître » glisse vers l'autorité, alors que rabbānī désigne plutôt celui qui est consacré au Seigneur (relation verticale avec Dieu, pas horizontale avec les autres). « Hommes voués au Seigneur » garde la dimension consacrée.`,
  ],
};

async function run() {
  for (const [vidStr, blocks] of Object.entries(ADDITIONS)) {
    const vid = parseInt(vidStr);
    const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    let expl = va.translation_explanation || '';
    if (!expl.includes('§CRITIQUE§')) {
      console.log(`⚠ vid=${vid} : pas de §CRITIQUE§, skip`);
      continue;
    }
    // Append blocks à la fin de §CRITIQUE§
    let added = 0;
    for (const block of blocks) {
      // Vérifier si le bloc n'est pas déjà présent (par mot-clé)
      const key = block.split('vs')[0].trim().slice(0, 30);
      if (expl.includes(key)) continue;
      expl = expl + '\n\n' + block;
      added++;
    }
    if (added > 0) {
      await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} : +${added} bloc(s) critique`);
    } else {
      console.log(`⊙ vid=${vid} : déjà couvert`);
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
