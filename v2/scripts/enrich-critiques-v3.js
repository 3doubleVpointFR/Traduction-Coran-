/**
 * Troisième vague d'enrichissement des §CRITIQUE§ verset par verset
 * (analyse manuelle des écarts substantiels avec Hamidullah).
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const ADD = {
  // V26 (vid=319) : souverain/règne vs Maître/autorité absolue, retires vs arraches
  319: [
    `**souverain du règne vs « Maître de l'autorité absolue »** : Hamidullah rend mālik al-mulk par « Maître de l'autorité absolue ». Mālik (participe actif de m-l-k) désigne celui qui possède effectivement et exerce — « souverain » conserve l'autorité personnelle (le maître régnant), alors que « Maître » est plus diffus (autorité d'autorité). Mulk = règne, royauté, le pouvoir du roi (sens primitif de m-l-k) ; « autorité absolue » est une glose qui transforme un substantif concret (le règne) en abstraction philosophique (l'autorité absolue).`,
    `**Tu retires vs « Tu arraches »** : Hamidullah rend tanziʿu par « arraches ». La racine n-z-ʿ porte le sens de « ôter, extraire, retirer » avec parfois la nuance de force (arrachement). Mais en parallélisme avec tuʾtī (« Tu donnes »), le verbe demande la nuance neutre du retrait — pas l'arrachement violent. « Retirer » garde la symétrie don/retrait, « arracher » dramatise inutilement.`,
  ],

  // V38 (vid=331) : invoqua vs pria, "C'est alors que"
  331: [
    `**invoqua vs « pria »** : Hamidullah rend daʿā par « pria ». La racine d-ʿ-w (appeler, invoquer, supplier) désigne l'acte d'adresser un appel à quelqu'un — pas la prière rituelle (ṣalāt). « Invoquer » garde la dimension d'appel-supplication, « prier » glisse vers la prière formelle absente du verbe arabe.`,
    `**Là vs « C'est alors que »** : Hamidullah ajoute la périphrase emphatique « C'est alors que ». L'arabe hunālika est un adverbe de lieu/circonstance qui se rend simplement par « là » (au sens spatial ou temporel). « C'est alors que » alourdit en présentatif emphatique absent du texte.`,
    `**accorde-moi vs « donne-moi »** : Hamidullah rend hab par « donne ». La racine w-h-b porte un sens spécifique de don gratuit, gracieux — pas le simple « donner » qui couvre tout transfert. « Accorder » conserve la dimension d'un don gracieux que la racine porte, alors que « donner » l'aplatit.`,
  ],

  // V44 (vid=337) : lançaient vs jetaient, prendrait en charge vs se chargerait
  337: [
    `**lançaient vs « jetaient »** : Hamidullah rend yulqūna par « jetaient ». La racine l-q-y porte le sens de « lancer, projeter avec intention » — pas le simple « jeter ». Dans le rite des calames (tirage au sort par projection rituelle dans l'eau), c'est l'intention rituelle qui compte. « Lancer » conserve l'idée d'une action décidée et orientée.`,
    `**prendrait en charge vs « se chargerait de »** : Hamidullah rend yakfulu par « se chargerait de ». La racine k-f-l désigne la tutelle, la garantie, la prise en responsabilité formelle (avec engagement). « Prendre en charge » garde l'idée de responsabilité assumée comme un dépôt formel ; « se charger de » est plus diffus et glisse vers le simple soin matériel.`,
  ],

  // V46 (vid=339) : adulte vs âge mûr (en complément)
  339: [
    `**adulte vs « âge mûr »** : Hamidullah rend kahlan par « âge mûr ». Kahl désigne précisément l'homme dans la pleine force de l'âge (entre 30 et 50 ans) — mais en français, « âge mûr » est ambigu (peut désigner aussi la vieillesse). « Adulte » est plus net en français contemporain pour l'opposition au berceau (mahd = nourrisson) que le verset trace explicitement.`,
  ],

  // V48 (vid=341) : présent vs futur, (Dieu) ajouté, Sagesse capitalisée
  341: [
    `**Il lui enseigne vs « (Dieu) lui enseignera »** : Hamidullah ajoute « (Dieu) » entre parenthèses pour expliciter le sujet et passe au futur (« enseignera »). Le texte arabe yuʿallimuhu est à l'imparfait — un présent narratif qui peut couvrir l'action en cours ou à venir, sans qu'il faille trancher. Le sujet est implicite dans la structure du verset (Dieu, mentionné précédemment). Ces ajouts explicitatifs alourdissent le texte sans nécessité.`,
    `**la sagesse vs « la Sagesse »** : Hamidullah majuscule « Sagesse ». Le mot al-ḥikma est descriptif (la sagesse en général ou comme pratique) ; la majuscule en français en fait un concept dogmatique (la Sagesse divine personnifiée). On préfère la minuscule pour rester descriptif.`,
  ],

  // V50 (vid=343) : structure phrasale "ce qui est devant moi de la Torah" vs "ce qu'il y a dans la Thora révélée avant moi"
  343: [
    `**ce qui est devant moi de la Torah vs « ce qu'il y a dans la Thora révélée avant moi »** : Hamidullah ajoute « révélée » et déplace l'antériorité du démonstratif (devant) vers la révélation. Le texte arabe mā bayna yadayya min al-tawrāti utilise l'expression bayna yadayya (« entre mes deux mains » = devant moi) qui désigne ce qui précède dans le temps ou se trouve disponible immédiatement. « Devant moi » garde l'image arabe ; « révélée avant moi » glose en explicitant la révélation.`,
  ],

  // V51 (vid=344) : assurément vs certes, Voici vs voilà
  344: [
    `**Dieu est assurément vs « Certes, Allah est »** : Hamidullah rend inna par « Certes » avec virgule détachée. La particule arabe inna est postposée au sujet annoncé — une emphase qui se rend en français par « assurément » placé après le sujet (« Dieu est assurément »), plutôt que par « Certes » initial qui crée une rupture syntaxique absente du flux arabe.`,
    `**Voici vs « voilà »** : Hamidullah rend hāḏā par « voilà ». Le démonstratif arabe hāḏā désigne ce qui est proche, immédiat — « voici » en français conserve cette proximité (objet présenté ici), alors que « voilà » désigne plutôt ce qui est distant (objet présenté là-bas).`,
  ],

  // V61 (vid=354) : structure "Quiconque" vs "A ceux qui"
  354: [
    `**Quiconque a disputé vs « À ceux qui te contredisent »** : Hamidullah transforme la structure conditionnelle arabe (man + accompli = quiconque a fait) en proposition descriptive (« à ceux qui te contredisent »). Le pronom man est ouvert et hypothétique (« quiconque, qui que ce soit »), alors que « ceux qui » désigne un groupe identifié. Cette transformation aplatit l'universalité de la formulation arabe.`,
    `**après ce qui t'est venu du savoir vs « maintenant que tu en es bien informé »** : Hamidullah rend min baʿdi mā jāʾaka mina al-ʿilm par « maintenant que tu en es bien informé ». La structure arabe utilise jāʾa (venir) avec ʿilm (savoir) comme sujet — « le savoir t'est venu », image de réception passive. « Tu en es bien informé » transforme la passivité (réception) en activité (être informé). Notre traduction « ce qui t'est venu du savoir » conserve la structure arabe d'arrivée du savoir.`,
  ],

  // V62 (vid=355) : si ce n'est vs en dehors d'
  355: [
    `**si ce n'est Dieu vs « en dehors d'Allah »** : Hamidullah rend illā Allāh par « en dehors d'Allah ». La particule illā est une exception (« sinon, si ce n'est ») qui isole l'élément retenu de l'ensemble nié. « Si ce n'est » conserve cette structure d'exception ; « en dehors de » glisse vers la spatialité (extérieur géographique), perdant la valeur logique d'exception.`,
  ],

  // V72 (vid=365) : "fut révélé" vs "a été révélé", "ceux qui ont cru" vs "croyants"
  365: [
    `**en ce qui fut révélé vs « à ce qui a été révélé »** : Hamidullah utilise le passé composé (« a été révélé »), notre traduction utilise le passé simple (« fut révélé »). Le verbe arabe unzila (accompli) place la révélation comme événement clos et distant ; le passé simple français préserve cette distance temporelle, alors que le passé composé la rapproche du présent du locuteur.`,
    `**ceux qui ont cru vs « les croyants »** : Hamidullah rend al-ladhīna āmanū par « les croyants ». La structure arabe utilise un relatif + verbe accompli — « ceux qui ont accordé leur confiance ». Notre traduction conserve la structure verbale (acte d'accorder la foi) ; « les croyants » substantive l'acte en catégorie identitaire fixe (les croyants comme groupe défini), perdant la dynamique de l'acte.`,
    `**à sa fin vs « à la fin du jour »** : Hamidullah ajoute « du jour » par souci d'explicitation. Le texte arabe ākhirahu utilise un suffixe pronominal -hu qui réfère à l'antécédent (al-nahār = le jour). Notre traduction « à sa fin » conserve la structure pronominale arabe sans l'expliciter.`,
  ],

  // V74 (vid=367) : "Dieu possède" vs "Allah est le Détenteur"
  367: [
    `**Dieu possède la faveur immense vs « Allah est le Détenteur de la grâce immense »** : Hamidullah substantive le verbe arabe en figure (« le Détenteur ») alors que le texte utilise une structure verbale (Allāh dhū al-faḍl al-ʿaẓīm). Le mot dhū n'est pas « détenteur » mais « celui qui est doté de » — un possessif relationnel, pas un titre. Notre traduction « Dieu possède » conserve la structure verbale et la dimension d'attribut.`,
    `**la faveur vs « la grâce »** : Hamidullah rend al-faḍl par « la grâce ». La racine f-ḍ-l désigne le surplus, le don supplémentaire — la faveur accordée au-delà du dû. « Grâce » porte une connotation chrétienne forte (la grâce divine comme catégorie théologique). « Faveur » garde le sens de don préférentiel, plus proche de la racine arabe.`,
  ],
};

async function run() {
  for (const [vidStr, blocks] of Object.entries(ADD)) {
    const vid = parseInt(vidStr);
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    let expl = r.data.translation_explanation || '';
    if (!expl.includes('§CRITIQUE§')) {
      console.log(`⚠ vid=${vid} : pas de §CRITIQUE§`);
      continue;
    }
    let added = 0;
    for (const block of blocks) {
      // Vérifier si le bloc n'est pas déjà présent (par mot-clé du début)
      const key = block.split(' vs ')[0].slice(0, 50);
      if (expl.includes(key)) continue;
      expl += '\n\n' + block;
      added++;
    }
    if (added) {
      await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} : +${added} bloc(s) critique`);
    } else {
      console.log(`⊙ vid=${vid} : déjà couvert`);
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
