const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 372;

  // ===== 1. Remplacer "concept" par "sens" dans 3 proof_ctx VWA =====
  // elm pos 24 (Sens isolé/Enseigner)
  const elmR = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', vid).eq('word_key', 'elm').eq('position', 24).single();
  const elmAx = elmR.data.analysis_axes;
  elmAx.concepts['Sens isolé/Enseigner'].proof_ctx = "Doublon isolé — le sens d'enseigner appartient au sens Savoir/Connaissance.";
  await db.from('verse_word_analyses').update({ analysis_axes: elmAx }).eq('verse_id', vid).eq('word_key', 'elm').eq('position', 24);

  // rbb pos 21
  const rbbR = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', vid).eq('word_key', 'rbb').eq('position', 21).single();
  const rbbAx = rbbR.data.analysis_axes;
  rbbAx.concepts['Éducation/Accompagnement'].proof_ctx = "rabbāniyyīn est un adjectif pluriel construit sur rabb (Seigneur) avec le suffixe intensif -ānī, qui marque une relation forte et exclusive — « celui qui est intensément du Seigneur ». Le verset explicite immédiatement la fonction de cette dévotion par bi-mā kuntum tuʿallimūn al-kitāb wa bi-mā kuntum tadrusūn (« par ce que vous étiez en train d'enseigner l'écriture et par ce que vous étiez en train d'étudier ») — la qualification rabbānī est donc liée à l'activité d'éducation et d'apprentissage soutenu. Le sens Éducation/Accompagnement capture cette dimension formatrice.";
  rbbAx.concepts['Seigneurie/Autorité bienveillante'].proof_ctx = "rabb appartient à ce sens et le suffixe -ānī rattache l'adjectif au Seigneur. Mais ici le verset dérive le sens du qualificatif rabbānī vers l'enseignement et l'étude — la fonction relationnelle vers le Seigneur s'incarne dans l'éducation, pas dans la possession ou le gouvernement.";
  await db.from('verse_word_analyses').update({ analysis_axes: rbbAx }).eq('verse_id', vid).eq('word_key', 'rbb').eq('position', 21);

  console.log('Proof_ctx : "concept" → "sens" remplacé ✅');

  // ===== 2. Corriger "position 7" dans translation_explanation =====
  // Et reconstruire §CRITIQUE§ avec entrées pour "qu'il dise" et pour "étudier"
  const va = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
  let expl = va.data.translation_explanation;
  expl = expl.replace('même corpus textuel révélé qu\'à la position 7', 'même corpus textuel révélé que celui mentionné en début de verset');

  // Reconstruire §CRITIQUE§ — ajouter 2 entrées : qwl et drs
  const critStart = expl.indexOf('§CRITIQUE§');
  const before = expl.substring(0, critStart);

  const newCritique = `§CRITIQUE§

**il n'a pas été pour un humain vs « il ne convient pas à un être humain »** : Hamidullah rend mā kāna li-bashar par « il ne convient pas à un être humain ». Le verbe « convenir » introduit une notion de bienséance/convenance morale absente du texte arabe. mā kāna est une simple négation d'existence à l'accompli — « cela n'a pas été le cas pour un humain ». Le texte arabe nie la possibilité historique et logique d'un événement, sans jugement de convenance. Le glissement transforme un constat ontologique (ce n'est pas le cas) en un verdict moral (ce ne serait pas convenable) — deux registres différents.

**lui apporte vs « ait honoré du »** : Hamidullah rend yu'tī-hu par « ait honoré du ». Trois transformations : (1) le verbe simple ātā (apporter, remettre) devient « honorer », ajoutant une qualification de prestige absente du texte ; (2) la forme « du Livre » (avec « du » partitif) sépare l'humain du don, alors que la structure arabe est directe (yu'tī-hu al-kitāba = il lui apporte l'écriture en accusatif) ; (3) le passé composé « ait honoré » présente le don comme un fait accompli alors que l'inaccompli yu'tī désigne ici une éventualité hypothétique sous le mā kāna an. Le sens global change : Hamidullah décrit une élection prestigieuse, le texte arabe décrit une transmission factuelle hypothétique.

**le jugement vs « la sagesse »** : Hamidullah rend al-ḥukm par « la sagesse ». Confusion morphologique entre al-ḥukm (le jugement, l'acte de trancher) et al-ḥikma (la sagesse, état contemplatif) — formes nominales différentes de la même racine ḥ-k-m mais avec des sens distincts dans le Lane's. Le texte arabe utilise al-ḥukm (la décision/jugement) qui désigne une faculté pratique active, pas une disposition intérieure de réflexion sage. La différence change la nature du don : Hamidullah suggère un attribut moral interne (sagesse comme vertu), le texte arabe désigne une compétence pratique (la capacité de trancher entre les gens).

**qu'il dise vs « de dire »** : Hamidullah rend thumma yaqūla par « de dire » (infinitif), construction française qui présente le dire comme un acte hypothétique en série avec le don. La structure arabe enchaîne deux verbes au subjonctif gouvernés par an : an yu'tī-hu... thumma yaqūla — « que Dieu lui apporte... puis qu'il dise ». La continuité subjonctive « qu'il dise » préserve le rapport de subordination logique : c'est un même mouvement hypothétique qui contient à la fois le don et l'énonciation. L'infinitif « de dire » de Hamidullah détache le second verbe et lui donne une autonomie syntaxique qui dilue cette imbrication. La nuance est faible mais réelle : le texte arabe lie l'éventualité du don à l'éventualité du discours pervers comme deux faces d'une même hypothèse niée.

**à l'écart de Dieu vs « à l'exclusion d'Allah »** : Hamidullah rend min dūni allāh par « à l'exclusion d'Allah ». « Exclusion » est un terme juridico-administratif qui implique une procédure de bannissement actif. dūn désigne simplement une position en dessous ou à côté — la locution min dūni X signifie littéralement « d'en deçà de X ». La différence change le registre : Hamidullah décrit un acte juridique d'exclusion (bannir Dieu de la relation), le texte arabe décrit un positionnement spatial-relationnel (se placer à un rang qui ignore Dieu).

**des hommes voués au Seigneur vs « des maîtres parfaits »** : Hamidullah rend rabbāniyyīn par « des maîtres parfaits ». Deux glissements : (1) la racine rabb (Seigneur) disparaît au profit de « maître » qui suggère la maîtrise/possession (rabb au sens d'autorité-sur), alors que le suffixe -ānī rattache l'adjectif au Seigneur comme objet de dévotion, pas à la maîtrise comme attribut ; (2) « parfaits » ajoute une qualification de perfection absente du texte. Le sens global change : Hamidullah décrit un statut élevé d'expertise (« maîtres parfaits »), le texte arabe décrit une relation de dévouement à Dieu qui s'incarne dans l'enseignement et l'étude (lue dans la suite immédiate du verset).

**vous étiez en train d'enseigner vs « vous enseignez »** : Hamidullah rend kuntum tuʿallimūn par « vous enseignez ». La périphrase kāna + inaccompli est en arabe une construction du passé continu (durée prolongée dans le passé). Hamidullah neutralise ce temps composé en présent simple, perdant la dimension durative. La différence change la temporalité : Hamidullah décrit une activité actuelle ponctuelle, le texte arabe décrit une pratique continue inscrite dans la durée — c'est précisément cette continuité qui justifie la qualification rabbānī (la dévotion s'inscrit dans une pratique durable, pas dans un acte ponctuel).

**vous étiez en train d'étudier vs « vous l'étudiez »** : Hamidullah rend wa bi-mā kuntum tadrusūn par « et vous l'étudiez ». Deux glissements : (1) la périphrase kuntum tadrusūn (passé continu — « vous étiez en train d'étudier ») est neutralisée en présent simple comme pour le verbe précédent ; (2) Hamidullah ajoute « l' » (objet) qui présuppose que tadrusūn porte sur al-kitāb mentionné juste avant — alors que le texte arabe ne répète pas le complément, laissant l'étude comme activité absolue (sans objet répété). Le texte arabe pose ainsi l'étude comme un état permanent de l'apprenant, pas comme une lecture du Livre seul ; Hamidullah resserre l'étude au seul Livre.`;

  expl = before + newCritique;

  await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
  console.log('§CRITIQUE§ étendu (8 entrées) + "position 7" supprimé ✅');

  console.log('\nV79 corrections appliquées — relancer le validateur');
}

run().catch(console.error);
