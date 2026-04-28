/**
 * Réécrit le §CRITIQUE§ de chaque verset de sourate 3 dans l'ordre exact du verset,
 * en couvrant TOUTES les divergences mot-à-mot avec Hamidullah.
 *
 * Format : un bloc **X vs « Y »** par divergence, dans l'ordre des mots du verset.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CRITIQUES = {
  // V27 (vid=320)
  // NOUS : Tu fais entrer la nuit dans le jour et Tu fais entrer le jour dans la nuit ; et Tu fais sortir le vivant du mort et Tu fais sortir le mort du vivant ; et Tu pourvois qui Tu veux sans compte.
  // HAMI : Tu fais pénétrer la nuit dans le jour, et Tu fais pénétrer le jour dans la nuit. Tu fais sortir le vivant du mort, et Tu fais sortir le mort du vivant. Et Tu attribues à qui Tu veux, sans compter.
  320: `§CRITIQUE§

**Tu fais entrer vs « Tu fais pénétrer »** : Hamidullah rend tūliju par « fais pénétrer ». La racine w-l-j signifie « entrer, pénétrer dans » — neutre. « Pénétrer » en français contemporain glisse vers la pénétration physique forcée et porte une charge sexuelle. « Faire entrer » est neutre et conserve le sens étymologique (faire passer un élément dans un autre).

**Tu pourvois vs « Tu attribues »** : Hamidullah rend tarzuqu par « attribues ». La racine r-z-q désigne précisément l'acte de fournir la subsistance, le moyen de vivre — pourvoir aux besoins. « Attribuer » est plus administratif (assigner une part) et perd la dimension de subsistance vitale que la racine porte (rizq = nourriture, subsistance, sustentation).

**sans compte vs « sans compter »** : Hamidullah rend bi-ghayri ḥisāb par « sans compter » (verbe). Notre traduction « sans compte » conserve le substantif arabe ḥisāb (action de compter, calcul). La nuance : « sans compte » signifie « sans tenir de comptabilité, sans limite mesurable » ; « sans compter » glisse vers l'acte de calculer (Dieu ne calculerait pas), perdant la dimension de quantité illimitée.`,

  // V38 (vid=331)
  // NOUS : Là, Zacharie invoqua son Seigneur. Il dit : « Mon Seigneur, accorde-moi de chez Toi une bonne descendance. Tu es certes celui qui entend l'invocation. »
  // HAMI : C'est alors que Zacharie pria son Seigneur, et dit : « Ô mon Seigneur, donne-moi, venant de Toi, une excellente descendance. Car Tu es Celui qui entend bien les prières. »
  331: `§CRITIQUE§

**Là vs « C'est alors que »** : Hamidullah ajoute la périphrase emphatique « C'est alors que » pour rendre hunālika. L'arabe hunālika est un adverbe de lieu/circonstance qui se rend simplement par « là » (sens spatial ou temporel). « C'est alors que » alourdit en présentatif emphatique absent du texte.

**invoqua vs « pria »** : Hamidullah rend daʿā par « pria ». La racine d-ʿ-w (appeler, invoquer, supplier) désigne l'acte d'adresser un appel — pas la prière rituelle (ṣalāt). « Invoquer » garde la dimension d'appel-supplication ; « prier » glisse vers la prière formelle absente du verbe arabe.

**accorde-moi vs « donne-moi »** : Hamidullah rend hab par « donne ». La racine w-h-b porte un sens spécifique de don gratuit, gracieux — pas le simple « donner » qui couvre tout transfert. « Accorder » conserve la dimension de don gracieux ; « donner » l'aplatit.

**de chez Toi vs « venant de Toi »** : Hamidullah rend min ladunka par « venant de Toi ». L'expression min ladun désigne ce qui provient de la proximité immédiate (« d'auprès de »). « De chez Toi » conserve l'image de proximité-source ; « venant de Toi » est plus neutre et glisse vers la simple origine.

**bonne vs « excellente »** : Hamidullah rend ṭayyiba par « excellente ». La racine ṭ-y-b couvre ce qui est bon, agréable, pur, plaisant — sens large. « Bonne » garde la généralité de la racine ; « excellente » durcit en superlatif absent du sens premier.

**celui qui entend vs « Celui qui entend bien »** : Hamidullah ajoute l'adverbe « bien » et majuscule « Celui ». Le texte arabe samīʿ (forme intensive de s-m-ʿ = entendre) est déjà intensif par sa forme — pas besoin d'ajouter « bien ». La majuscule théologise l'attribut.

**l'invocation vs « les prières »** : Hamidullah pluralise duʿāʾ en « les prières ». Le singulier arabe duʿāʾ désigne l'acte d'invoquer (l'invocation comme pratique), pas une multiplicité d'occurrences. Le pluriel français crée une accumulation absente du verset.`,

  // V39 (vid=332) — déjà bien couvert mais réordonner
  // NOUS : Alors les anges l'appelèrent alors qu'il se tenait debout, priant dans le sanctuaire : « Dieu t'annonce la bonne nouvelle de Yaḥyā, confirmateur d'une parole de Dieu, chef, abstinent et prophète parmi les vertueux. »
  // HAMI : Puis les Anges l'appelèrent pendant que, debout, il priait dans le Sanctuaire : « Voilà qu'Allah t'annonce la naissance de Yahya, confirmateur d'une parole d'Allah, un chef, un chaste, un prophète et du nombre des gens de bien. »
  332: `§CRITIQUE§

**Alors vs « Puis »** : Hamidullah rend fa- par « Puis ». La particule fa- marque la succession immédiate (alors, sur ce, du coup) — pas le simple « puis » qui indique une succession quelconque. « Alors » garde la conséquence immédiate liée à l'invocation du verset précédent.

**alors qu'il se tenait debout, priant vs « pendant que, debout, il priait »** : Hamidullah aplatit la structure circonstancielle wa-huwa qāʾimun yuṣallī en deux locutions juxtaposées. L'arabe articule un état (qāʾim, debout) et une action (yuṣallī, priant) en parallèle, marqués par la wāw circonstancielle (ḥāl). Notre traduction préserve la simultanéité des deux états.

**Dieu vs « Allah »** : Hamidullah translittère ٱللَّهَ par « Allah ». ʾallāh est lexicalement « la divinité » (al-ilāh) — accessible en français par « Dieu ». Conserver le mot arabe non traduit fige la divinité en nom propre étranger.

**Voilà qu'Allah t'annonce vs « Dieu t'annonce »** : Hamidullah ajoute l'emphatique « Voilà que » avant le verbe. Le texte arabe yubashshiruka est un verbe simple sans particule emphatique — l'ajout est une amplification rhétorique absente.

**bonne nouvelle de Yaḥyā vs « la naissance de Yahya »** : Hamidullah rend yubashshiruka bi-yaḥyā par « t'annonce la naissance de Yahya ». La forme verbale yubashshiru (forme II de b-š-r = peau, surface visible, réjouir le visage) signifie spécifiquement « annoncer une bonne nouvelle qui réjouit ». Hamidullah glisse vers « la naissance », transformant la racine bashar (joie) en simple événement biologique.

**une parole de Dieu vs « une parole d'Allah »** : Hamidullah translittère « Allah » dans la formule kalimatin mina llāh.

**chef, abstinent et prophète vs « un chef, un chaste, un prophète »** : Hamidullah distribue chaque qualité avec un article indéfini répété, ajoutant une cadence litanique absente du texte qui aligne simplement les qualificatifs. Et « chaste » réduit ḥaṣūr (retenue active générale) à la sexualité, alors que la racine ḥ-ṣ-r couvre toute forme de retenue volontaire.

**parmi les vertueux vs « du nombre des gens de bien »** : Hamidullah délaye min aṣ-ṣāliḥīn en « du nombre des gens de bien » — paraphrase explicative qui dissout le participe actif arabe (le ṣāliḥ qui agit en bien) dans une catégorie passive. « Parmi les vertueux » conserve l'agentivité.`,
};

async function run() {
  for (const [vidStr, newCrit] of Object.entries(CRITIQUES)) {
    const vid = parseInt(vidStr);
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    let expl = r.data.translation_explanation || '';
    const idx = expl.indexOf('§CRITIQUE§');
    if (idx < 0) {
      console.log(`⚠ vid=${vid} : pas de §CRITIQUE§, ajout en fin`);
      expl = expl.trimEnd() + '\n\n' + newCrit;
    } else {
      expl = expl.slice(0, idx).trimEnd() + '\n\n' + newCrit;
    }
    await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
    console.log(`✓ vid=${vid} §CRITIQUE§ réécrit dans l'ordre`);
  }
}
run().catch(e => { console.error(e); process.exit(1); });
