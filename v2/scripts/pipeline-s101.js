/**
 * PIPELINE SOURATE 101 — Al-Qari'a (La Frappante)
 * 11 versets, 18 racines (2 nouvelles: ehn, nfš)
 */
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// IDs versets
const V = { 1:6158, 2:6159, 3:6160, 4:6161, 5:6162, 6:6163, 7:6164, 8:6165, 9:6166, 10:6167, 11:6168 };

// IDs racines existantes
const R = { qre:2267, dry:2098, kwn:2577, nws:303, frš:385, bth:934, jbl:1153, thql:1476, wzn:1848, eyš:1847, rdw:812, xff:928, amm:785, hwy:398, nwr:349, hmy:1855 };

// IDs nouvelles racines (à remplir après création)
let R_ehn, R_nfš;

async function upsertVWA(verse_id, word_key, _unused, analysis_axes, position) {
  const row = { verse_id, word_key, analysis_axes, position,
                sense_chosen: analysis_axes.sense_chosen };
  const { data, error } = await sb.from('verse_word_analyses')
    .upsert(row, { onConflict: 'verse_id,word_key' })
    .select().single();
  if (error) {
    const { data: d2, error: e2 } = await sb.from('verse_word_analyses')
      .insert(row).select().single();
    if (e2) throw new Error(`VWA ${verse_id}/${word_key}: ${e2.message}`);
    return d2;
  }
  return data;
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { error } = await sb.from('word_daily').insert({ analysis_id, sense, arabic, phon, french });
  if (error && !error.message.includes('duplicate')) console.log('  daily warn:', error.message);
}

async function updateVerse(verse_id, fields) {
  const { error } = await sb.from('verse_analyses').update(fields).eq('verse_id', verse_id);
  if (error) throw new Error(`verse_analyses ${verse_id}: ${error.message}`);
}

// ================================================================
// ÉTAPE 2 — Création des racines manquantes
// ================================================================
async function createMissingRoots() {
  console.log('\n=== ÉTAPE 2 — Racines manquantes ===');

  // --- ehn (عهن) ---
  console.log('\n[ehn] Création racine عهن...');
  let { data: waEhn } = await sb.from('word_analyses').select('id').eq('word_key', 'ehn').single();
  if (!waEhn) {
    const { data: created, error: eErr } = await sb.from('word_analyses')
      .insert({ word_key: 'ehn', root_ar: 'ع ه ن', root_phon: 'ehn', total_occurrences: 2 })
      .select().single();
    if (eErr) throw new Error('ehn create: ' + eErr.message);
    waEhn = created;
  } else {
    console.log('  déjà existante');
  }
  R_ehn = waEhn.id;
  console.log('  id=' + R_ehn);

  const { count: ehnCount } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', R_ehn).not('concept', 'is', null);
  if (ehnCount > 0) {
    console.log('  ' + ehnCount + ' sens existants → SKIP');
  } else {
  const ehnSenses = [
    { concept: 'Laine/Fibre', sense: 'laine', description: "Matière textile animale à l'état brut. La laine est souple, légère quand elle est cardée, et se présente en flocons. C'est un état passif — la laine est ce qui EST, pas ce qui agit. Elle se transforme facilement sous l'action extérieure (cardage, teinture).", display_order: 1 },
    { concept: 'Laine/Fibre', sense: 'laine colorée', description: "Laine teinte de couleurs variées. Le Lane's précise que le mot s'applique particulièrement à la laine colorée.", display_order: 2 },
    { concept: 'Laine/Fibre', sense: 'flocon de laine', description: "Portion de laine séparée. Un flocon est le résultat du cardage — la laine réduite à sa plus petite unité.", display_order: 3 },
    { concept: 'Permanence/Présence', sense: 'rester', description: "État intérieur de stabilité et d'enracinement. Rester, demeurer, habiter — c'est un non-mouvement, un ancrage dans un lieu. La permanence est non-directionnelle et continue. Elle s'oppose au mouvement et au changement.", display_order: 4 },
    { concept: 'Permanence/Présence', sense: 'demeurer', description: "Continuer à être dans un état ou un lieu.", display_order: 5 },
    { concept: 'Permanence/Présence', sense: 'durer', description: "Se maintenir dans le temps sans interruption.", display_order: 6 },
    { concept: 'Permanence/Présence', sense: 'être présent', description: "Être là, disponible, à portée.", display_order: 7 },
    { concept: 'Sortie/Émergence', sense: 'sortir', description: "Mouvement de l'intérieur vers l'extérieur. Quelque chose passe d'un état caché à un état visible. Le Lane's donne : le bien sort de lui (khayr). L'émergence est directionnelle — elle va du dedans vers le dehors.", display_order: 8 },
    { concept: 'Sortie/Émergence', sense: 'émaner du bien', description: "Le bien sort de quelqu'un ou quelque chose.", display_order: 9 },
    { concept: 'Sens isolé/Rancœur', sense: 'rancœur', description: "Sens isolé lié à la racine. Rancœur, malveillance — ce sens est un usage spécifique et concret de la racine.", display_order: 10 },
    { concept: 'Sens isolé/Végétal', sense: 'arbre à fleur rouge', description: "Sens isolé lié à la racine. Un arbre du désert avec une fleur rouge.", display_order: 11 }
  ];
  for (const s of ehnSenses) {
    await sb.from('word_meanings').insert({ analysis_id: R_ehn, ...s, meaning_type: 'etymology' });
  }
  console.log('  11 sens → 5 concepts');
  console.log('  Laine/Fibre (3 sens) | Permanence/Présence (4 sens) | Sortie/Émergence (2 sens) | Sens isolé/Rancœur (1) | Sens isolé/Végétal (1)');
  } // end if ehnCount

  // --- nfš (نفش) ---
  console.log('\n[nfš] Création racine نفش...');
  let { data: waNfs } = await sb.from('word_analyses').select('id').eq('word_key', 'nfš').single();
  if (!waNfs) {
    const { data: created, error: nErr } = await sb.from('word_analyses')
      .insert({ word_key: 'nfš', root_ar: 'ن ف ش', root_phon: 'nfš', total_occurrences: 2 })
      .select().single();
    if (nErr) throw new Error('nfš create: ' + nErr.message);
    waNfs = created;
  } else {
    console.log('  déjà existante');
  }
  R_nfš = waNfs.id;
  console.log('  id=' + R_nfš);

  const { count: nfsCount } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', R_nfš).not('concept', 'is', null);
  if (nfsCount > 0) {
    console.log('  ' + nfsCount + ' sens existants → SKIP');
  } else {
  const nfsSenses = [
    { concept: 'Cardage/Effilochage', sense: 'carder', description: "Acte de séparer les fibres (laine, coton) avec les doigts ou un instrument jusqu'à ce qu'elles deviennent éparses et dispersées. Le cardage transforme ce qui est compact et dense en quelque chose de léger et aérien. C'est un acte extérieur directionnel qui va du dense vers le dispersé, du solide vers le flottant.", display_order: 1 },
    { concept: 'Cardage/Effilochage', sense: 'séparer', description: "Défaire les fibres compactes en les écartant les unes des autres.", display_order: 2 },
    { concept: 'Cardage/Effilochage', sense: 'effilocher', description: "Réduire en fils détachés ce qui était tissé ou compact.", display_order: 3 },
    { concept: 'Cardage/Effilochage', sense: 'peigner la laine', description: "Passer la laine au peigne pour en séparer les fibres.", display_order: 4 },
    { concept: 'Dispersion/Pâturage', sense: 'paître la nuit', description: "Laisser le bétail se disperser pour paître la nuit sans berger. C'est un relâchement du contrôle — les animaux se dispersent librement. L'acte n'est pas fait sur la matière mais sur des êtres vivants qu'on laisse aller sans surveillance.", display_order: 5 },
    { concept: 'Dispersion/Pâturage', sense: 'laisser disperser le bétail', description: "Envoyer les animaux paître sans surveillance.", display_order: 6 },
    { concept: 'Hérissement/Gonflement', sense: 'hérisser', description: "Dresser les poils ou les plumes. Le chat hérisse ses poils, l'oiseau ébouriffe ses plumes. C'est un mouvement de l'intérieur vers l'extérieur — ce qui était lisse devient hérissé. Le gonflement est une expansion visible qui donne une apparence de volume sans substance réelle.", display_order: 7 },
    { concept: 'Hérissement/Gonflement', sense: 'ébouriffer', description: "Rendre les poils ou plumes désordonnés et dressés.", display_order: 8 },
    { concept: 'Hérissement/Gonflement', sense: 'gonfler', description: "Devenir enflé, mou et lâche à l'intérieur.", display_order: 9 },
    { concept: 'Sens isolé/Orgueil', sense: 'orgueilleux', description: "Sens isolé lié à la racine. Celui qui se vante de ce qu'il n'a pas. L'apparence sans la substance — comme la laine cardée qui paraît grande mais pèse peu.", display_order: 10 }
  ];
  for (const s of nfsSenses) {
    await sb.from('word_meanings').insert({ analysis_id: R_nfš, ...s, meaning_type: 'etymology' });
  }
  console.log('  10 sens → 4 concepts');
  console.log('  Cardage/Effilochage (4 sens) | Dispersion/Pâturage (2 sens) | Hérissement/Gonflement (3 sens) | Sens isolé/Orgueil (1)');
  } // end if nfsCount
}

// ================================================================
// ANALYSES — Objets réutilisables par racine
// ================================================================

const axes_qre = {
  sense_chosen: "frappante",
  concept_chosen: "Frappe/Choc",
  concepts: {
    "Frappe/Choc": {
      status: "retenu",
      senses: ["frapper à la porte", "événement choquant"],
      proof_ctx: "Le sens retenu est « Frappe/Choc ». Le mot al-qāri'a est un participe actif féminin défini — celle qui frappe activement. D'après le Lane's, qara'a signifie frapper, cogner (comme frapper à une porte). Le participe actif avec l'article défini (al-) en fait un événement connu et identifiable. Le test grammatical : un participe actif féminin peut-il désigner un événement qui frappe ? Oui — la qāri'a est l'événement qui frappe la réalité comme on frappe à une porte. C'est le seul concept de cette racine dans les sources étymologiques.",
      axe1_verset: "Le verset est composé d'un seul mot — al-qāri'a — posé comme un titre, une annonce. Il n'y a pas d'autre mot avec lequel comparer le champ lexical. Le mot se suffit à lui-même et frappe l'esprit du lecteur comme l'événement frappe la réalité. Le participe actif avec l'article défini fait de cette frappe un événement connu et identifiable, pas une frappe quelconque. Le mot est isolé, sans verbe, sans contexte — c'est une annonce brute.",
      axe2_voisins: "Les versets 2 et 3 amplifient l'annonce par des questions rhétoriques : « Qu'est-ce que la frappante ? » puis « Qu'est-ce qui te ferait savoir ce qu'est la frappante ? ». La triple répétition du mot crée une montée en intensité. Les versets 4 et 5 décrivent ensuite les effets concrets de cette frappe : les gens dispersés comme des papillons, les montagnes effilochées comme de la laine. La frappe est cohérente avec ces effets dévastateurs — seul un choc d'une puissance absolue peut réduire les montagnes en fibres.",
      axe3_sourate: "La sourate 101 annonce un événement cataclysmique et ses conséquences. La frappe est le mot inaugural qui donne son nom à la sourate entière. Tout ce qui suit découle de cette frappe : la dispersion des gens (v4), l'effilochage des montagnes (v5), le pesage des actes (v6-9). La frappe est la cause, les versets suivants sont les effets.",
      axe4_coherence: "Le Coran utilise al-qāri'a en 13:31 et 69:4 pour désigner des événements soudains et violents. En 69:4, les peuples de Thamoud et 'Ad ont été détruits par al-qāri'a. En 13:31, la qāri'a frappe les mécréants ou leur voisinage. L'usage est constant et univoque dans le Coran : un événement violent et soudain qui change tout. Aucun autre verset ne contredit ce sens.",
      axe5_frequence: "L'annonce d'une frappe cosmique rappelle à l'être humain que sa réalité est temporaire. Ce qui semble solide et permanent (les montagnes, l'ordre du monde) sera réduit en fibres par cette frappe. Ce rappel pousse à agir justement tant que le temps le permet — la frappe est le signal que les comptes seront rendus (v6-9). La mission de justice prend tout son sens face à l'urgence de cette annonce."
    }
  }
};

const axes_dry = {
  sense_chosen: "savoir",
  concept_chosen: "Connaissance/Perception",
  concepts: {
    "Connaissance/Perception": {
      status: "retenu",
      senses: ["savoir", "percevoir", "se rendre compte"],
      proof_ctx: "Le sens retenu est « Connaissance/Perception ». Le mot adrāka est une forme IV (celle qui ajoute l'idée de 'faire faire') du verbe darā (savoir). Adrāka signifie donc « faire savoir, faire percevoir ». Le verbe est à l'accompli avec le pronom suffixe -ka (toi). La formule « wa-mā adrāka mā » place l'objet au-delà de la perception humaine ordinaire. Le test grammatical : un verbe accompli forme IV peut-il exprimer l'acte de faire percevoir ? Oui — la forme IV est causative, l'accompli marque un acte achevé. C'est le seul concept de cette racine.",
      axe1_verset: "Le verset utilise la formule « wa-mā adrāka mā » qui signifie littéralement « et qu'est-ce qui t'a fait savoir ce que c'est ». Cette formule place l'objet (al-qāri'a) au-delà de ce que l'humain peut saisir par lui-même. La perception est le pont entre l'ignorance humaine et la réalité de l'événement annoncé. Le champ lexical est celui de la limite du savoir humain — la question implique que personne ne peut répondre sans aide.",
      axe2_voisins: "Les versets 1 et 2 posent le mot (al-qāri'a) et demandent ce qu'il est. Le verset 3 intensifie en disant que même la perception humaine ne suffit pas à le comprendre. Les versets 4-5 donnent alors la réponse sous forme d'images concrètes (papillons, laine). La perception au verset 3 est la charnière entre la question et la réponse — elle marque le passage de l'inconnu au décrit.",
      axe3_sourate: "La sourate annonce un événement qui dépasse l'entendement humain. La question « qu'est-ce qui te ferait savoir » est la reconnaissance que cet événement ne peut pas être compris par l'expérience ordinaire. Seule la description qui suit (v4-5) peut en donner une idée. La perception est ici le seuil que l'humain ne peut pas franchir seul.",
      axe4_coherence: "Cette formule « mā adrāka mā » apparaît 13 fois dans le Coran (sourates 69, 74, 77, 82, 83, 86, 90, 97, 101, 104). Elle introduit systématiquement un objet que l'humain ne peut pas appréhender par ses propres moyens. L'usage est constant et univoque. Aucun verset ne contredit ce sens.",
      axe5_frequence: "La question pousse l'être humain à reconnaître les limites de sa connaissance. Cette humilité face au savoir est fondamentale pour la mission de justice — celui qui croit tout savoir ne cherche plus à comprendre, et celui qui ne cherche plus à comprendre ne peut pas agir justement. La perception de ses propres limites est un prérequis à toute action éclairée."
    }
  }
};

function axes_kwn(verseNum) {
  return {
    sense_chosen: "seront",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        status: "retenu",
        senses: ["être (verbe incomplet)", "venir à l'existence"],
        proof_ctx: "Le sens retenu est « Être/Existence ». Le mot yakūnu (v4) / takūnu (v5) est un verbe inaccompli de kāna, utilisé comme verbe incomplet (kāna nāqisa) — il lie un sujet à son attribut. Dans le verset, il dit que les gens « seront comme » des papillons (v4) et les montagnes « seront comme » de la laine (v5). Le test grammatical : un verbe inaccompli peut-il exprimer un état futur en cours ? Oui — l'inaccompli marque une action non encore achevée. Distinction avec « Lieu/État » : le lieu décrit une position spatiale, alors qu'ici kāna est un outil grammatical de comparaison (seront comme). Distinction avec « Humilité/Soumission » : aucun rapport avec la soumission dans ce contexte de comparaison.",
        axe1_verset: verseNum === 4
          ? "Le verset dit « le jour où les gens seront comme des papillons dispersés ». Le verbe yakūnu lie le sujet (les gens) à sa comparaison (papillons). Le champ lexical est celui de la transformation — les gens passent de leur état normal à un état de dispersion. Le verbe « être » est l'outil qui permet cette bascule d'un état à l'autre. Sans lui, la comparaison ne tient pas."
          : "Le verset dit « et les montagnes seront comme de la laine cardée ». Le verbe takūnu lie le sujet (les montagnes) à sa comparaison (laine). Le champ lexical est celui de la transformation — les montagnes passent de la solidité à la légèreté. Le verbe « être » est l'outil grammatical qui rend cette métamorphose possible.",
        axe2_voisins: "Les versets 4 et 5 forment une paire : les gens dispersés (v4), les montagnes effilochées (v5). Le verbe « être » dans les deux versets crée un parallélisme parfait. Le verset 3 pose la question (qu'est-ce que la frappante ?), les versets 4-5 répondent en décrivant ce que les choses « seront ». Le verbe d'existence est le pivot qui transforme la question en réponse visuelle.",
        axe3_sourate: "La sourate annonce une transformation cosmique. Le verbe « être » est l'instrument grammatical de cette transformation — il dit que le monde tel qu'on le connaît cessera d'exister sous sa forme actuelle et « sera » autrement. L'existence est le cadre dans lequel la métamorphose se produit.",
        axe4_coherence: "Le Coran utilise kāna/yakūnu des centaines de fois comme verbe incomplet pour établir des comparaisons et des états. C'est l'usage grammatical le plus courant du verbe. Aucune contradiction avec d'autres versets.",
        axe5_frequence: "La transformation de l'existant rappelle à l'être humain que rien de ce qu'il construit n'est permanent. Les montagnes elles-mêmes, symbole de solidité, « seront » de la laine. Cette conscience de la fragilité de l'existence pousse à agir pour ce qui dure — la justice et la civilisation — plutôt que pour ce qui sera dispersé."
      },
      "Humilité/Soumission": {
        status: "nul",
        senses: ["être humble soumis"],
        proof_ctx: "Aucun rapport avec l'humilité dans ce contexte de comparaison grammaticale. Le verbe est un copule, pas un état moral."
      },
      "Lieu/État": {
        status: "peu_probable",
        senses: ["lieu", "reste à ta place", "état condition", "motif raison", "devenir comme"],
        proof_ctx: "Le concept « Lieu/État » inclut le sens « devenir comme » qui pourrait convenir à la structure comparative du verset. Mais ici, kāna fonctionne comme verbe incomplet (copule) — il ne décrit pas un lieu ou un état mais lie un sujet à son attribut. La distinction philosophique : le « lieu » est spatial et fixe, alors que la copule est un outil grammatical neutre qui ne porte pas de sens propre. Le verset ne dit pas « rester dans un état » mais « être (comme) des papillons ».",
        axe1_verset: "Le verset utilise la structure kāna + sujet + ka (comparaison) + attribut. Cette structure est grammaticale, pas spatiale. Les gens ne sont pas « dans un lieu » ni « dans un état » — ils sont comparés à des papillons. Le ka (comme) confirme qu'il s'agit d'une comparaison, pas d'un état fixe.",
        axe2_voisins: "Les versets voisins décrivent des transformations, pas des positions. Les gens sont comparés à des papillons (v4), les montagnes à de la laine (v5). Le registre est celui de la métamorphose, pas du lieu ou de la condition stable.",
        axe3_sourate: "La sourate décrit un bouleversement total. Le concept de lieu/état implique une stabilité qui est exactement ce que la sourate détruit — tout est en mouvement et en transformation.",
        axe4_coherence: "Le Coran utilise kāna comme copule dans la grande majorité de ses occurrences. Le sens « lieu » est rare et marginal.",
        axe5_frequence: "Le lieu/état implique une fixité qui ne correspond pas au message de la sourate — tout est bouleversé, rien ne reste en place."
      }
    }
  };
}

const axes_nws = {
  sense_chosen: "gens",
  concept_chosen: "Humanité/Peuple",
  concepts: {
    "Humanité/Peuple": {
      status: "retenu",
      senses: ["gens", "êtres humains", "peuple"],
      proof_ctx: "Le sens retenu est « Humanité/Peuple ». Le mot an-nās est un nom collectif défini par al- qui désigne l'ensemble des êtres humains. Le test grammatical : un nom défini collectif peut-il désigner les gens ? Oui — an-nās est le mot le plus courant du Coran pour désigner l'humanité dans son ensemble. Distinction avec « Perception/Visibilité » : la perception est un acte, les gens sont des êtres. Le verset parle d'êtres (qui seront comme des papillons), pas d'actes de perception.",
      axe1_verset: "Le verset compare les gens à des papillons dispersés. Le mot an-nās désigne le sujet de cette comparaison — tous les êtres humains sans exception. Le champ lexical est celui de la foule humaine réduite à l'impuissance. Les gens, normalement organisés en sociétés, seront réduits à des insectes éparpillés. Le contraste entre la dignité humaine et la fragilité des papillons est au cœur de l'image.",
      axe2_voisins: "Le verset 5 fait le même parallèle avec les montagnes — si les gens sont des papillons, les montagnes sont de la laine. Les deux versets montrent que rien n'est épargné par la frappante : ni les êtres vivants (les gens), ni le monde physique (les montagnes). Les gens sont mentionnés en premier car c'est l'humain qui est interpellé.",
      axe3_sourate: "La sourate parle de l'humanité face au jugement. Les gens sont le sujet central — c'est eux qui seront pesés (v6-9). La mention des gens au verset 4 prépare la division en deux groupes aux versets 6-9.",
      axe4_coherence: "Le Coran utilise an-nās plus de 240 fois pour désigner l'humanité collective. L'usage est constant et univoque.",
      axe5_frequence: "Les gens sont l'objet de la mission du khalifa. La frappante les réduit à des papillons pour montrer que sans justice et sans actes pesants (v6), l'humanité n'a aucune assise. C'est le rappel que la dignité humaine vient de ses actes, pas de sa nature."
    },
    "Perception/Visibilité": {
      status: "nul",
      senses: ["voir de loin", "être visible"],
      proof_ctx: "Aucun rapport avec la vision ou la visibilité. Le verset parle d'êtres humains, pas d'un acte de perception."
    },
    "Sens isolé/Oublier": {
      status: "nul",
      senses: ["oublier"],
      proof_ctx: "Sens isolé sans rapport avec le contexte. Les gens ne sont pas décrits comme oubliant."
    },
    "Sens isolé/Être": {
      status: "nul",
      senses: ["être agité"],
      proof_ctx: "Sens isolé sans rapport. L'agitation n'est pas le sujet — c'est la comparaison avec les papillons."
    }
  }
};

const axes_frs = {
  sense_chosen: "papillons",
  concept_chosen: "Animal/Faune",
  concepts: {
    "Animal/Faune": {
      status: "retenu",
      senses: ["jeune bétail"],
      proof_ctx: "Le sens retenu est « Animal/Faune ». Le Lane's définit al-farāsh comme de petites créatures qui se jettent dans le feu (« certains petits êtres qui tombent dans le feu ») ou des petits insectes volants attirés par la lumière. Ce sont des papillons de nuit ou des phalènes — des êtres fragiles, légers, qui volent de façon désordonnée. Le test grammatical : un nom défini (avec ka + al-) peut-il désigner des petites créatures ? Oui — la comparaison dit « comme LES papillons », un type connu. Distinction avec « Étalement/Literie » : l'étalement est un acte, les papillons sont des êtres vivants. Le verset compare les gens à des créatures, pas à un acte d'étendre.",
      axe1_verset: "Le verset compare les gens à des papillons dispersés (al-farāsh al-mabthūth). Le champ lexical est celui de la fragilité et du désordre — les papillons sont de petites créatures qui volent sans direction, attirées par la lumière et le feu. L'image est celle d'une nuée d'insectes affolés, sans repère ni destination. Le mot mabthūth (dispersé) renforce cette image de chaos total.",
      axe2_voisins: "Le verset 5 complète l'image avec les montagnes comme laine cardée. Les deux comparaisons forment un tableau : des créatures fragiles (papillons) dans un monde en dissolution (laine). Le voisinage confirme que le registre est celui de la destruction totale — même les êtres les plus solides (montagnes) et les plus organisés (gens) sont réduits à la fragilité et au désordre.",
      axe3_sourate: "La sourate décrit les effets de la frappante. Les papillons sont l'image choisie pour montrer ce que deviennent les gens : des êtres légers, sans direction, éparpillés. Cette image sert de transition entre l'annonce (v1-3) et le jugement (v6-11). Les papillons montrent l'état d'impuissance qui précède la pesée des actes.",
      axe4_coherence: "Le Coran utilise des images animales pour illustrer des réalités spirituelles — les araignées (29:41), les ânes (62:5), les chiens (7:176). L'usage de créatures fragiles pour illustrer l'impuissance humaine est cohérent avec le style coranique. Les papillons sont les créatures les plus fragiles — elles se jettent même dans le feu.",
      axe5_frequence: "L'image des papillons montre l'être humain réduit à l'état de créature sans direction ni poids. C'est l'opposé exact de la mission du khalifa — celui qui doit construire, organiser, faire justice. Quand cette mission est abandonnée, l'humain n'est plus qu'un papillon dans la tempête."
    },
    "Étalement/Literie": {
      status: "probable",
      senses: ["étendre", "lit", "tapis", "étendre la terre"],
      proof_ctx: "Le concept « Étalement/Literie » décrit l'acte d'étendre à plat. La distinction philosophique : l'étalement est un processus (transformer ce qui est plié en surface), alors que les papillons sont des êtres vivants. Le verset utilise une comparaison avec des créatures (ka-l-farāsh), pas avec un processus d'étalement. Le Lane's donne bien le sens de « petites créatures volantes qui se jettent dans le feu » pour al-farāsh, ce qui confirme le sens animal plutôt que textile.",
      axe1_verset: "Le verset dit « comme des papillons dispersés ». Le mot mabthūth (dispersé) s'applique à des êtres qui se déplacent dans toutes les directions, pas à une surface étendue. L'étalement créerait une image de tapis ou de sol plat, ce qui contredit le mouvement chaotique décrit par mabthūth.",
      axe2_voisins: "Le verset 5 utilise la laine (un textile) pour les montagnes. Si le verset 4 utilisait aussi un sens textile (étalement/literie), les deux images seraient redondantes. Le parallélisme gens/montagnes demande des images distinctes : des créatures vivantes (v4) et de la matière inerte (v5).",
      axe3_sourate: "La sourate oppose le vivant (gens) et l'inerte (montagnes). L'étalement/literie est du registre de l'inerte — il ne convient pas pour décrire ce que deviennent les gens.",
      axe4_coherence: "Le Coran utilise farāsh au sens de créatures volantes, pas au sens de literie. Le mot firāsh (même racine, forme différente) est utilisé pour la literie, mais farāsh est la forme pour les petites créatures.",
      axe5_frequence: "L'étalement est un acte de création (étendre la terre) ou de confort (préparer un lit). Ce registre constructif ne correspond pas au message de destruction de la sourate."
    },
    "Sens isolé/Médire": {
      status: "nul",
      senses: ["médire"],
      proof_ctx: "Aucun rapport avec la médisance. Le verset décrit une scène cosmique, pas un acte de parole."
    }
  }
};

const axes_bth = {
  sense_chosen: "dispersés",
  concept_chosen: "Dispersion/Diffusion",
  concepts: {
    "Dispersion/Diffusion": {
      status: "retenu",
      senses: ["disperser", "répandre", "disséminer", "divulguer"],
      proof_ctx: "Le sens retenu est « Dispersion/Diffusion ». Le mot al-mabthūth est un participe passif (une forme qui dit que l'action est subie) — « ce qui a été dispersé ». D'après le Lane's, baththa signifie disperser dans toutes les directions ce qui était rassemblé. Le test grammatical : un participe passif peut-il décrire quelque chose qui a été dispersé ? Oui — la dispersion sort de l'agent (la frappante) et atteint les gens. Distinction avec « Affliction intérieure » : l'affliction est un état intérieur de chagrin. Le participe passif impose un acte extérieur subi, pas un état intérieur ressenti.",
      axe1_verset: "Le verset dit « comme des papillons dispersés ». Le mot mabthūth qualifie les papillons — ils sont éparpillés dans toutes les directions. Le champ lexical est celui du chaos et de la perte d'unité. La dispersion est l'image de l'humanité privée de structure et d'organisation. Ce qui était rassemblé (la société humaine) est réduit à des particules sans lien.",
      axe2_voisins: "Le verset 5 décrit les montagnes comme de la laine cardée — une autre forme de dispersion (la laine compacte devient fibres séparées). Les deux versets partagent le même registre : la décomposition de ce qui était uni. La dispersion des gens (v4) et le cardage des montagnes (v5) sont deux manifestations du même événement.",
      axe3_sourate: "La sourate décrit une destruction totale suivie d'un jugement. La dispersion est la première conséquence de la frappante — tout ce qui tenait ensemble se défait. C'est le préambule nécessaire au jugement individuel (v6-9) : quand la société est dispersée, chacun se retrouve seul face à ses actes.",
      axe4_coherence: "Le Coran utilise baththa en 4:1 (Il a dispersé d'eux des hommes et des femmes en grand nombre) et en 2:164 (les créatures qu'Il a dispersées). La dispersion est toujours un acte puissant qui répartit dans l'espace. L'usage est cohérent.",
      axe5_frequence: "La dispersion est l'effondrement de toute structure sociale. L'être humain, dont la mission est de construire et d'organiser la justice, se retrouve réduit à un être isolé et perdu. La dispersion est l'image de l'échec collectif — quand la civilisation s'effondre, il ne reste que des individus éparpillés."
    },
    "Affliction intérieure": {
      status: "nul",
      senses: ["chagrin", "confier sa peine"],
      proof_ctx: "L'affliction est un état intérieur. Le participe passif mabthūth impose un acte subi de l'extérieur, pas un état ressenti de l'intérieur. Les papillons sont dispersés physiquement, pas affligés émotionnellement."
    }
  }
};

const axes_jbl = {
  sense_chosen: "montagnes",
  concept_chosen: "Montagne/Solidité",
  concepts: {
    "Montagne/Solidité": {
      status: "retenu",
      senses: ["montagne", "être solide et massif"],
      proof_ctx: "Le sens retenu est « Montagne/Solidité ». Le mot al-jibāl est le pluriel de jabal (montagne) avec l'article défini. Les montagnes sont le symbole de la solidité et de la permanence dans le monde physique. Le test grammatical : un nom défini pluriel peut-il désigner les montagnes ? Oui — al-jibāl est l'usage standard du Coran. Distinction avec « Création/Nature » : la création est un acte originel, alors que le verset parle des montagnes comme objets existants qui seront transformés.",
      axe1_verset: "Le verset compare les montagnes à de la laine cardée. Le champ lexical est celui de la transformation du solide en léger. Les montagnes — ce qu'il y a de plus massif sur terre — seront réduites à de la laine effilochée. Le contraste entre la solidité de la montagne et la légèreté de la laine est le cœur de l'image. C'est le symbole de permanence qui est détruit.",
      axe2_voisins: "Le verset 4 fait le même avec les gens (comparés à des papillons). Le parallèle gens/montagnes couvre toute la réalité : le vivant et l'inerte. Les deux sont réduits à néant. Le verset 3 avait prévenu que la frappante dépasse l'entendement — les versets 4-5 illustrent pourquoi.",
      axe3_sourate: "La sourate annonce la fin de tout ce qui semble permanent. Les montagnes sont choisies parce qu'elles sont le dernier symbole de solidité — si même elles deviennent de la laine, rien ne tient. Ce choix prépare la transition vers le jugement : si le monde physique ne tient plus, seuls les actes (la balance, v6-9) ont de la valeur.",
      axe4_coherence: "Le Coran mentionne les montagnes de nombreuses fois — comme piliers de la terre (78:7), comme spectacle à observer (88:17), comme objets qui tremblent (73:14). La transformation des montagnes en laine est cohérente avec 78:20 où elles « deviennent un mirage ». L'image varie mais le message est constant : les montagnes ne survivront pas.",
      axe5_frequence: "Les montagnes sont souvent citées dans le Coran comme preuves de la puissance créatrice. Leur destruction montre que même les fondations du monde sont soumises à la frappante. Pour le khalifa, c'est le rappel que rien de matériel n'est éternel — seuls les actes justes pèsent dans la balance."
    },
    "Création/Nature": {
      status: "nul",
      senses: ["créer (jibilla)", "pétrir"],
      proof_ctx: "La création (jibilla) est un acte originel de façonnage. Le verset ne parle pas de créer mais de détruire — les montagnes ne sont pas créées, elles sont défaites. Sens hors contexte."
    }
  }
};

function axes_ehn() {
  return {
    sense_chosen: "laine",
    concept_chosen: "Laine/Fibre",
    concepts: {
      "Laine/Fibre": {
        status: "retenu",
        senses: ["laine", "laine colorée", "flocon de laine"],
        proof_ctx: "Le sens retenu est « Laine/Fibre ». Le mot al-'ihn est un nom défini qui désigne la laine, en particulier la laine teinte de couleurs variées selon le Lane's. Le test grammatical : un nom défini (avec ka + al-) peut-il désigner de la laine ? Oui — la comparaison dit « comme LA laine ». Le mot est en position de complément de comparaison (ka-l-'ihn). Distinction avec « Permanence/Présence » : rester et demeurer n'ont aucun rapport avec la comparaison matérielle du verset. Les montagnes ne sont pas comparées à la stabilité mais à la légèreté de la laine cardée.",
        axe1_verset: "Le verset dit « et les montagnes seront comme de la laine cardée ». Le mot al-'ihn désigne la matière à laquelle les montagnes sont comparées. Le champ lexical est celui de la légèreté et de la fragilité — la laine est le contraire absolu de la montagne. La laine colorée ajoute une dimension visuelle : les montagnes, habituellement grises et uniformes, deviennent des flocons multicolores qui flottent dans l'air.",
        axe2_voisins: "Le verset 4 compare les gens à des papillons (êtres fragiles). Le verset 5 compare les montagnes à de la laine (matière fragile). Les deux images forment un tableau complet de dissolution : le vivant est réduit à l'insecte, le solide est réduit à la fibre. La laine complète les papillons — le monde entier est ramené à ce qu'il y a de plus léger.",
        axe3_sourate: "La sourate décrit la fin de la solidité. La laine est le symbole parfait de cette fin — elle est douce, légère, sans structure. Une montagne de laine n'est plus une montagne. Le choix de la laine (plutôt que de la poussière ou du sable) insiste sur la transformation qualitative : le dur devient doux, le compact devient aérien.",
        axe4_coherence: "Le Coran utilise al-'ihn en 70:9 dans un contexte très similaire : « et les montagnes seront comme de la laine ». L'image est identique — la laine est systématiquement associée à la dissolution des montagnes. L'usage est cohérent entre les deux sourates.",
        axe5_frequence: "La transformation des montagnes en laine montre que la solidité matérielle n'a aucune valeur face à la frappante. Pour le khalifa, c'est le rappel que construire sur la matière seule est vain — il faut construire sur la justice et les actes, qui sont les seuls à « peser » (v6-9)."
      },
      "Permanence/Présence": {
        status: "peu_probable",
        senses: ["rester", "demeurer", "durer", "être présent"],
        proof_ctx: "La permanence décrit un état de stabilité et d'enracinement dans un lieu. Le verset utilise al-'ihn comme matière de comparaison (ka-l-'ihn = « comme de la laine »), pas comme état de permanence. La distinction philosophique : la permanence est un non-mouvement (on reste), alors que la laine est une matière passive (elle est). Le contexte est matériel et visuel, pas temporal ou spatial.",
        axe1_verset: "Le verset compare les montagnes à une matière. La permanence est un état temporel (durer, rester) qui ne s'applique pas à une comparaison matérielle. On ne compare pas une montagne à « la stabilité » mais à « de la laine ». Le registre est visuel et concret, pas abstrait.",
        axe2_voisins: "Le verset 4 compare les gens à des papillons (matière vivante). Le parallélisme demande que le verset 5 compare les montagnes à une matière aussi — pas à un état abstrait comme la permanence.",
        axe3_sourate: "La sourate décrit la destruction de tout ce qui est permanent. Le concept de permanence serait contradictoire avec le message de la sourate — tout est éphémère, rien ne reste.",
        axe4_coherence: "En 70:9, le même mot est clairement utilisé au sens de laine (contexte identique). La permanence n'apparaît jamais dans les passages sur la fin des temps.",
        axe5_frequence: "La permanence ne contribue pas au message de la sourate — le verset montre l'impermanence, pas la durée."
      },
      "Sortie/Émergence": {
        status: "nul",
        senses: ["sortir", "émaner du bien"],
        proof_ctx: "La sortie/émergence est un mouvement. Le verset utilise le mot comme matière de comparaison, pas comme mouvement. Hors contexte."
      },
      "Sens isolé/Rancœur": {
        status: "nul",
        senses: ["rancœur"],
        proof_ctx: "Sens isolé sans rapport avec la comparaison matérielle du verset."
      },
      "Sens isolé/Végétal": {
        status: "nul",
        senses: ["arbre à fleur rouge"],
        proof_ctx: "Sens isolé. Le verset parle de montagnes et de laine, pas d'arbres."
      }
    }
  };
}

function axes_nfs() {
  return {
    sense_chosen: "cardée",
    concept_chosen: "Cardage/Effilochage",
    concepts: {
      "Cardage/Effilochage": {
        status: "retenu",
        senses: ["carder", "séparer", "effilocher", "peigner la laine"],
        proof_ctx: "Le sens retenu est « Cardage/Effilochage ». Le mot al-manfūsh est un participe passif (une forme qui dit que l'action a été subie) — « ce qui a été cardé ». D'après le Lane's, nafasha signifie séparer les fibres (laine ou coton) avec les doigts ou un instrument jusqu'à ce qu'elles deviennent éparses. Le Lane's cite explicitement « 'ihn manfūsh » (laine cardée) comme expression coranique (101:5). Le test grammatical : un participe passif peut-il décrire la laine qui a été cardée ? Oui — le cardage est un acte extérieur qui atteint la laine et la transforme. Distinction avec « Dispersion/Pâturage » : le pâturage concerne des animaux vivants, pas de la matière textile. Distinction avec « Hérissement/Gonflement » : le hérissement est un mouvement de l'intérieur vers l'extérieur (le chat hérisse SES poils), alors que le cardage est subi de l'extérieur (la laine EST cardée par quelqu'un).",
        axe1_verset: "Le verset dit « comme de la laine cardée ». Le mot al-manfūsh qualifie la laine — elle a subi le cardage, elle est devenue éparse et légère. Le champ lexical est celui de la décomposition de la matière : la laine compacte est réduite en fibres séparées. Le cardage est l'image de la destruction qui ne laisse que des filaments.",
        axe2_voisins: "Le verset 4 utilise mabthūth (dispersé) pour les papillons. Le verset 5 utilise manfūsh (cardé) pour la laine. Les deux participes passifs décrivent le même processus — la décomposition — appliqué à des matières différentes. La dispersion (v4) et le cardage (v5) sont deux facettes de la même destruction.",
        axe3_sourate: "La sourate montre la réduction de tout à sa plus petite unité. Le cardage est l'image parfaite : il prend ce qui est compact et le réduit en fibres individuelles. La laine cardée ne peut plus être reconstituée — la destruction est irréversible. C'est la préparation au jugement individuel (v6-9) : chacun sera seul, comme une fibre séparée.",
        axe4_coherence: "Le Lane's cite explicitement cette expression coranique ('ihn manfūsh). Le Coran utilise des images de décomposition dans d'autres sourates — les montagnes en poussière (56:5-6), la terre aplanie (84:3). Le cardage de la laine est cohérent avec ces images de destruction transformatrice.",
        axe5_frequence: "Le cardage montre que même ce qui semble insignifiant (de la laine) peut être encore davantage réduit. Pour le khalifa, c'est le rappel que rien n'est trop petit pour être défait — seule la justice, qui est immatérielle, résiste à la destruction de la matière."
      },
      "Dispersion/Pâturage": {
        status: "probable",
        senses: ["paître la nuit", "laisser disperser le bétail"],
        proof_ctx: "La dispersion/pâturage décrit l'acte de laisser le bétail se disperser librement la nuit. La distinction philosophique : le pâturage s'applique à des êtres vivants (animaux) qu'on laisse aller, alors que le cardage s'applique à de la matière (laine) qu'on défait. Le verset parle de 'ihn (laine) — c'est de la matière, pas du bétail. Le participe passif manfūsh est ici appliqué à un nom de matière, pas à des animaux. Le pâturage ne peut pas qualifier la laine.",
        axe1_verset: "Le verset dit « comme de la laine manfūsh ». La laine est une matière inerte. Le pâturage concerne des êtres vivants (bétail) qui se déplacent par eux-mêmes. La laine ne « paît » pas — elle est cardée par une force extérieure. Le champ lexical est textile, pas pastoral.",
        axe2_voisins: "Le verset 4 utilise des papillons (créatures vivantes) pour les gens. Le verset 5 utilise de la laine (matière inerte) pour les montagnes. Le parallélisme oppose le vivant à l'inerte. Le pâturage (qui concerne le vivant) ne convient pas pour qualifier la laine inerte du verset 5.",
        axe3_sourate: "La sourate distingue le sort des gens (v4, v6-9) de celui du monde physique (v5). La laine représente le monde physique — elle ne peut pas être associée à un concept pastoral qui concerne le vivant.",
        axe4_coherence: "Le Coran utilise nafasha au sens de pâturage en 21:78 (le bétail qui paît la nuit dans un champ). Mais en 101:5, le contexte est textile (laine), pas pastoral. Les deux usages sont distincts.",
        axe5_frequence: "Le pâturage implique une liberté (les animaux vont où ils veulent). Le cardage implique une destruction (la matière est défaite). Le message de la sourate est la destruction, pas la liberté."
      },
      "Hérissement/Gonflement": {
        status: "peu_probable",
        senses: ["hérisser", "ébouriffer", "gonfler"],
        proof_ctx: "Le hérissement est un mouvement de l'intérieur vers l'extérieur — le chat dresse SES poils, l'oiseau ébouriffe SES plumes. Le participe passif manfūsh impose que l'action soit subie de l'extérieur, pas produite de l'intérieur. La laine ne « se hérisse » pas d'elle-même — elle « est cardée » par une force extérieure. Le hérissement est actif et auto-généré, le cardage est passif et subi. La nature philosophique est incompatible avec la structure grammaticale passive.",
        axe1_verset: "Le verset utilise un participe passif. Le hérissement est un processus actif de l'intérieur (l'animal dresse lui-même ses poils). Ce mouvement auto-généré est incompatible avec la passivité du mot manfūsh — la laine subit le cardage, elle ne se hérisse pas.",
        axe2_voisins: "Le verset 4 utilise mabthūth (dispersé) — un autre participe passif. Le parallélisme des deux participes passifs (v4 et v5) confirme que le processus est subi de l'extérieur dans les deux cas.",
        axe3_sourate: "La sourate décrit des processus subis, pas des processus auto-générés. La frappante IMPOSE la destruction — rien ne se détruit de lui-même.",
        axe4_coherence: "Le Lane's distingue clairement nafasha (carder, transitif) de tanaffasha (se hérisser, réfléchi). Le participe passif manfūsh vient de nafasha, pas de tanaffasha.",
        axe5_frequence: "Le hérissement est une réaction de défense (le chat qui menace). Le message de la sourate est l'impossibilité de se défendre — pas la menace."
      },
      "Sens isolé/Orgueil": {
        status: "nul",
        senses: ["orgueilleux"],
        proof_ctx: "Sens isolé sans rapport. Le verset décrit de la laine, pas une attitude humaine."
      }
    }
  };
}

const axes_thql = {
  sense_chosen: "lourd",
  concept_chosen: "Poids/Gravité",
  concepts: {
    "Poids/Gravité": {
      status: "retenu",
      senses: ["lourd", "pesant", "grave"],
      proof_ctx: "Le sens retenu est « Poids/Gravité ». Le mot thaqulat est un verbe accompli (une forme qui dit que l'action est achevée) — « ont pesé lourd ». Le Lane's donne thaqula : être lourd, pesant, avoir du poids. Le test grammatical : un verbe accompli peut-il exprimer le fait d'avoir pesé lourd ? Oui — l'accompli marque l'achèvement de la pesée. Distinction avec « Charge/Responsabilité » : le fardeau est ce qu'on porte (passif, subi), alors que « peser lourd » est un état (actif, intrinsèque). Les balances pèsent lourd par la valeur des actes, pas par un fardeau imposé.",
      axe1_verset: "Le verset dit « quant à celui dont les balances pèseront lourd ». Le mot thaqulat qualifie les balances (mawāzīn) — elles ont du poids, elles sont chargées de valeur. Le champ lexical est celui de la mesure et de la valeur. Le poids des balances représente la densité des actes de la personne — des actes qui « comptent », qui ont de la substance.",
      axe2_voisins: "Le verset 7 donne la conséquence : celui dont les balances sont lourdes sera dans une vie satisfaisante. Le verset 8 oppose : celui dont les balances sont légères. Le poids est le critère qui détermine le sort de chacun. Les versets voisins confirment que le registre est celui de la mesure et du résultat.",
      axe3_sourate: "La sourate passe de la destruction (v1-5) au jugement (v6-9). Le poids est le pivot — c'est par le poids des balances que le sort est déterminé. La gravité des actes est ce qui survit à la frappante, quand tout le reste (montagnes, sociétés) a été réduit en fibres.",
      axe4_coherence: "Le Coran mentionne le poids des actes en 7:8-9 et 23:102-103. La pesée est un thème constant du jugement coranique. L'usage est cohérent — le poids détermine toujours le sort.",
      axe5_frequence: "Le poids des balances récompense les actes de justice et de civilisation. L'être humain dont la mission est de faire le bien accumule du poids — ses actes ont de la substance. Le poids est la mesure de l'engagement du khalifa dans sa mission."
    },
    "Charge/Responsabilité": {
      status: "probable",
      senses: ["fardeau"],
      proof_ctx: "Le fardeau est ce qu'on porte sur ses épaules — c'est subi et pesant. La distinction philosophique : le fardeau est une charge imposée (quelque chose qu'on endure), alors que le poids des balances est une valeur intrinsèque (quelque chose qui compte). Les balances ne « portent pas un fardeau » — elles « ont du poids ». La pesée mesure la valeur, pas la charge. Le verbe thaqulat est intransitif (les balances sont lourdes) — pas transitif (les balances portent un fardeau).",
      axe1_verset: "Le verset dit « dont les balances pèseront lourd ». Les balances sont l'instrument de mesure, pas un porteur de charge. Le fardeau serait un poids subi, alors que les balances mesurent un poids qui leur est propre. Le champ lexical est celui de la mesure, pas du portage.",
      axe2_voisins: "Les versets 7 et 9 donnent des conséquences positives et négatives. Le registre est celui de la récompense et de la sanction, pas de l'endurance d'une charge. On ne « porte » pas ses balances — on est jugé par elles.",
      axe3_sourate: "La sourate mène au jugement. Le fardeau impliquerait une souffrance dans le portage, alors que les balances lourdes mènent à une vie satisfaisante (v7). Le poids est positif ici, pas accablant.",
      axe4_coherence: "Le Coran utilise thiql (fardeau) en 7:189 pour un poids physique porté. Ici le contexte est celui de la balance, pas du portage.",
      axe5_frequence: "Le fardeau serait une punition, alors que les balances lourdes sont une récompense. La mission du khalifa produit du poids positif, pas un fardeau à endurer."
    }
  }
};

const axes_wzn = {
  sense_chosen: "balances",
  concept_chosen: "Pesée/Mesure",
  concepts: {
    "Pesée/Mesure": {
      status: "retenu",
      senses: ["peser", "balance", "poids"],
      proof_ctx: "Le sens retenu est « Pesée/Mesure ». Le mot mawāzīn est le pluriel de mīzān (balance) avec le pronom suffixe -hu (ses). Mawāzīnuhu = « ses balances ». Le Lane's donne : mīzān = instrument pour déterminer le poids avec exactitude. Le test grammatical : un nom pluriel en idafa peut-il désigner les balances de quelqu'un ? Oui — c'est la construction possessive standard. C'est le seul concept de cette racine.",
      axe1_verset: "Le verset dit « celui dont les balances pèseront lourd ». Les balances sont l'instrument qui mesure la valeur des actes. Le champ lexical est celui du jugement et de l'évaluation — on pèse, on mesure, on détermine. Les balances incarnent l'exactitude et l'impartialité de la mesure.",
      axe2_voisins: "Le même mot revient au verset 8 (les balances légères). La répétition crée un parallélisme : mêmes balances, résultats opposés. Les versets 7 et 9 donnent les conséquences de chaque résultat. Les balances sont le pivot de la structure versets 6-9.",
      axe3_sourate: "La sourate passe de la destruction du monde physique (v1-5) au jugement individuel (v6-9). Les balances sont l'outil de ce passage — quand tout le matériel est détruit, seule la mesure des actes subsiste. C'est le cœur du message de la sourate.",
      axe4_coherence: "Le Coran mentionne les mawāzīn en 7:8, 21:47, 23:102-103. L'usage est constant : les balances mesurent les actes au jour du jugement. Aucune contradiction.",
      axe5_frequence: "Les balances mesurent ce que le khalifa a fait de sa mission. La justice est pesée — elle a un poids réel. C'est la validation ultime de l'action humaine : elle est mesurée avec exactitude, rien n'est approximatif."
    }
  }
};

const axes_eys = {
  sense_chosen: "vie",
  concept_chosen: "Vie/Subsistance",
  concepts: {
    "Vie/Subsistance": {
      status: "retenu",
      senses: ["vivre", "subsistance"],
      proof_ctx: "Le sens retenu est « Vie/Subsistance ». Le mot 'īsha est un nom indéfini (sans al-) de la forme fi'la qui indique un mode ou une manière — « une façon de vivre ». Le Lane's donne : 'āsha = vivre, être vivant, subvenir à ses besoins. Le test grammatical : un nom de manière indéfini peut-il décrire un type de vie ? Oui — 'īsha désigne la qualité de vie, pas juste l'existence. C'est le seul concept de cette racine.",
      axe1_verset: "Le verset dit « il sera dans une vie satisfaisante ». Le mot 'īsha désigne le type de vie dans lequel se trouvera celui dont les balances sont lourdes. Le champ lexical est celui du mode de vie — pas juste être en vie, mais vivre d'une certaine manière. La préposition fī (dans) confirme que la vie est un état englobant dans lequel on est plongé.",
      axe2_voisins: "Le verset 6 pose la condition (balances lourdes) et le verset 7 donne le résultat (vie satisfaisante). Le verset 9 oppose avec le gouffre. La vie satisfaisante est la récompense directe du poids des actes — ce n'est pas une vie quelconque, c'est une vie qualifiée positivement.",
      axe3_sourate: "Après la destruction du monde physique (v1-5), la sourate offre deux destins. La vie satisfaisante est le premier destin — celui du positif. La vie est le contraire de la destruction : quand le monde matériel est anéanti, il reste la vie intérieure, le mode d'existence.",
      axe4_coherence: "Le Coran utilise 'īsha en 20:124 (une vie de gêne, ma'īsha danka) et 69:21 (une vie satisfaisante, 'īsha rāḍiya). L'usage est cohérent — 'īsha désigne toujours la qualité de vie, pas la simple existence.",
      axe5_frequence: "La vie satisfaisante est la récompense de celui qui a rempli sa mission de justice. Le khalifa qui a agi justement vivra bien — pas un luxe matériel, mais un état de satisfaction intérieure. La vie est le cadre dans lequel cette satisfaction se déploie."
    }
  }
};

const axes_rdw = {
  sense_chosen: "satisfaisante",
  concept_chosen: "Satisfaction/Agrément",
  concepts: {
    "Satisfaction/Agrément": {
      status: "retenu",
      senses: ["être satisfait", "agréer", "approuver", "consentir"],
      proof_ctx: "Le sens retenu est « Satisfaction/Agrément ». Le mot rāḍiya est un participe actif féminin — « celle qui est satisfaite, contentée ». D'après le Lane's, raḍiya signifie être satisfait, content, approuver. Le test grammatical : un participe actif féminin peut-il qualifier une vie comme étant « dans un état de satisfaction » ? Oui — le participe actif dit que la vie FAIT activement l'action d'être satisfaite. C'est la vie elle-même qui est dans un état de satisfaction, pas les circonstances extérieures. Distinction avec « Choix/Préférence » : le choix est un acte ponctuel (on choisit une fois), alors que la satisfaction est un état continu (on reste satisfait). Le participe actif indique une action continue.",
      axe1_verset: "Le verset dit « dans une vie satisfaisante ». Le mot rāḍiya qualifie directement la vie ('īsha). C'est la vie elle-même qui est satisfaisante — pas l'environnement, pas les biens, la vie en tant que mode d'existence. Le champ lexical est celui de l'état intérieur positif. La satisfaction est l'aboutissement naturel d'une vie bien vécue.",
      axe2_voisins: "Le verset 6 pose les balances lourdes comme condition. La satisfaction est le résultat de cette pesée positive. Le verset 9 oppose avec le gouffre (hāwiya) — la chute est l'opposé de la satisfaction. Les versets voisins confirment que la satisfaction est une récompense, pas un hasard.",
      axe3_sourate: "La sourate divise l'humanité en deux groupes. La satisfaction est le lot du premier groupe — celui qui a du poids. C'est un état stable et positif, contrastant avec la chute du second groupe. La satisfaction est la fin positive de la sourate, le gouffre en est la fin négative.",
      axe4_coherence: "Le Coran utilise rāḍiya en 69:21 et 88:9 pour décrire une vie satisfaisante. En 89:28, Dieu dit à l'âme : « reviens vers ton Seigneur rāḍiya marḍiyya (satisfaite et agréée) ». L'usage est cohérent — rāḍiya décrit un état de contentement profond.",
      axe5_frequence: "La satisfaction est le résultat de la justice. Le khalifa qui a rempli sa mission vit dans un état de contentement — pas un plaisir éphémère, mais une satisfaction profonde qui vient de la cohérence entre ses actes et sa mission. La vie satisfaisante est l'aboutissement de l'engagement juste."
    },
    "Choix/Préférence": {
      status: "peu_probable",
      senses: ["choisir pour soi", "rendre satisfait"],
      proof_ctx: "Le choix est un acte ponctuel de sélection — on choisit à un moment précis. Le participe actif rāḍiya décrit un état continu (la vie EST satisfaisante en permanence), pas un acte ponctuel. La distinction philosophique : le choix est instantané et directionnel (vers une option), la satisfaction est permanente et non-directionnelle (on est dans un état). Le verset parle d'un état (« dans une vie satisfaisante »), pas d'un acte de choix.",
      axe1_verset: "Le verset dit « dans une vie rāḍiya ». La préposition fī (dans) indique un état englobant, pas un acte ponctuel. On ne vit pas « dans un choix » mais « dans une satisfaction ». Le champ lexical est celui de l'état durable.",
      axe2_voisins: "Les versets voisins parlent de conséquences durables (vie satisfaisante vs gouffre). Le choix serait un acte momentané, pas une conséquence durable.",
      axe3_sourate: "La sourate décrit des destins permanents, pas des actes ponctuels. Le choix ne correspond pas au registre de la permanence.",
      axe4_coherence: "Le Coran utilise rāḍiya pour un état, pas pour un choix (ikhtāra est le mot du choix).",
      axe5_frequence: "Le choix est un acte humain, alors que la satisfaction décrite ici est un résultat accordé. Le registre est celui de la récompense, pas de la décision."
    }
  }
};

const axes_xff = {
  sense_chosen: "légères",
  concept_chosen: "Légèreté/Allègement",
  concepts: {
    "Légèreté/Allègement": {
      status: "retenu",
      senses: ["être léger", "alléger", "diminuer un fardeau"],
      proof_ctx: "Le sens retenu est « Légèreté/Allègement ». Le mot khaffat est un verbe accompli — « ont été légères ». Le Lane's donne : khaffa = être léger, peser peu. Le test grammatical : un verbe accompli peut-il exprimer le fait d'avoir été léger ? Oui — l'accompli marque l'achèvement de la pesée qui révèle la légèreté. Distinction avec « Vitesse/Empressement » : la vitesse est un mouvement rapide, alors que la légèreté est un état de poids faible. Les balances ne « vont vite » pas — elles « pèsent peu ».",
      axe1_verset: "Le verset dit « et quant à celui dont les balances seront légères ». Le mot khaffat qualifie les balances — elles n'ont pas de poids, elles sont vides de valeur. Le champ lexical est celui du manque et du vide. La légèreté des balances est l'opposé exact de la lourdeur du verset 6 — là où le poids signifie la valeur, la légèreté signifie l'absence de valeur.",
      axe2_voisins: "Le verset 6 pose les balances lourdes. Le verset 8 pose les balances légères. La paire forme un contraste total. Le verset 9 donne la conséquence (le gouffre), symétrique du verset 7 (la vie satisfaisante). La légèreté est le signe avant-coureur de la chute.",
      axe3_sourate: "La sourate divise l'humanité en deux. La légèreté est le lot du second groupe — celui qui n'a pas de poids. Après la destruction du monde physique (v1-5), la légèreté des balances montre que cette personne n'a rien construit qui survive à la destruction.",
      axe4_coherence: "Le Coran mentionne les balances légères en 23:103 avec la même conséquence négative. L'usage est cohérent — la légèreté des balances est toujours associée à un sort défavorable.",
      axe5_frequence: "La légèreté des balances signifie que le khalifa n'a pas rempli sa mission. Ses actes n'ont pas de poids — ils n'ont pas contribué à la justice ni à la civilisation. La légèreté est le diagnostic d'une vie sans engagement."
    },
    "Vitesse/Empressement": {
      status: "nul",
      senses: ["être rapide", "se hâter"],
      proof_ctx: "La vitesse concerne le mouvement. Les balances sont un instrument de mesure statique — elles ne « vont vite » pas. Le contexte est celui de la pesée, pas du déplacement."
    }
  }
};

const axes_amm = {
  sense_chosen: "mère",
  concept_chosen: "Origine/Communauté",
  concepts: {
    "Origine/Communauté": {
      status: "retenu",
      senses: ["mère", "nation", "communauté"],
      proof_ctx: "Le sens retenu est « Origine/Communauté ». Le mot ummuhu est le nom umm (mère/origine) avec le pronom suffixe -hu (sa). Le Lane's donne : umm = mère, celle qui engendre, l'origine de quelque chose, la source, le fondement. Le mot umm s'étend au-delà de la maternité biologique — umm al-qurā (la mère des cités = La Mecque), umm al-kitāb (la mère du Livre = la source du Livre). Le test grammatical : un nom en idafa possessive peut-il désigner la mère/l'origine de quelqu'un ? Oui — « sa mère » est la construction standard. Le verset dit « sa mère est un gouffre » — son origine, ce vers quoi il revient, est une chute sans fond.",
      axe1_verset: "Le verset dit « sa mère sera un gouffre ». Le mot umm désigne ce qui accueille, ce vers quoi on revient — comme un enfant retourne à sa mère. Pour celui dont les balances sont légères, ce qui l'accueille n'est pas un refuge mais un gouffre. Le champ lexical est celui du retour et de l'origine — mais un retour inversé, vers la chute au lieu du réconfort.",
      axe2_voisins: "Le verset 8 pose la condition (balances légères). Le verset 9 donne la conséquence (sa mère est un gouffre). La structure est symétrique avec les versets 6-7 (balances lourdes → vie satisfaisante). « Sa mère » s'oppose à « une vie » — là où le premier groupe trouve la vie, le second trouve l'origine qui l'engloutit.",
      axe3_sourate: "La sourate sépare deux destins. Le mot « mère » pour le destin négatif est frappant — la mère est normalement le refuge, le réconfort. Ici, la mère est un gouffre. L'inversion du symbole le plus protecteur (la mère) en symbole de destruction (le gouffre) renforce le choc de la sourate.",
      axe4_coherence: "Le Coran utilise umm au sens élargi de fondement/source à plusieurs reprises. En 3:7, umm al-kitāb est la source du Livre. L'extension du mot « mère » à « ce qui accueille/héberge » est attestée dans la langue arabe et dans le Coran.",
      axe5_frequence: "La mère/origine qui se transforme en gouffre montre que celui qui n'a pas rempli sa mission n'a plus de refuge. Le khalifa qui n'a rien construit de juste se retrouve sans fondement — son « retour » n'est pas un retour à la source, mais une chute dans le vide."
    }
  }
};

const axes_hwy = {
  sense_chosen: "gouffre",
  concept_chosen: "Chute/Descente",
  concepts: {
    "Chute/Descente": {
      status: "retenu",
      senses: ["tomber", "faire tomber"],
      proof_ctx: "Le sens retenu est « Chute/Descente ». Le mot hāwiya est un participe actif féminin — « celle qui fait tomber » ou « celle qui est un lieu de chute ». Le Lane's donne : hawā = tomber de haut en bas, chuter sous l'effet de la gravité. Le participe actif féminin fait de ce lieu un agent actif de la chute — il ne reçoit pas passivement, il FAIT tomber. Le test grammatical : un participe actif féminin peut-il désigner un lieu qui fait tomber ? Oui — le participe actif donne au lieu une capacité d'action. Distinction avec « Passion/Désir » : le désir est un mouvement intérieur de l'âme, alors que la chute est un mouvement physique vers le bas. Le verset parle d'un lieu (la mère/le refuge), pas d'une émotion.",
      axe1_verset: "Le verset dit « sa mère est un gouffre ». Le mot hāwiya qualifie ce que sera le destin de celui aux balances légères. Le champ lexical est celui de la chute — un mouvement descendant, sans fond, irréversible. Le gouffre est l'image de la perte totale : pas de sol où s'arrêter, pas de reprise possible.",
      axe2_voisins: "Les versets 10-11 précisent : « Qu'est-ce qui te ferait savoir ce que c'est ? Un feu ardent. » Le gouffre est explicité par le feu — la chute mène au feu. La progression versets 9-10-11 va du symbole (gouffre) à l'identification concrète (feu ardent).",
      axe3_sourate: "La sourate commence par une chute cosmique (la frappante qui détruit le monde, v1-5) et se termine par une chute individuelle (le gouffre, v9-11). Le mouvement descendant traverse toute la sourate — des montagnes qui s'effilochent au gouffre qui engloutit.",
      axe4_coherence: "Le Coran utilise hawā/hāwiya pour la chute dans d'autres contextes — en 14:37, Ibrahim mentionne une vallée non cultivée. En 22:31, celui qui associe est comme celui qui tombe du ciel. La chute est systématiquement associée à un sort négatif dans le Coran.",
      axe5_frequence: "Le gouffre est l'opposé de la construction. Le khalifa est celui qui élève (la justice, la civilisation). Le gouffre est ce qui arrive quand rien n'a été élevé — on tombe parce qu'il n'y a rien pour retenir. La chute est le résultat de l'absence d'actes constructifs."
    },
    "Passion/Désir": {
      status: "peu_probable",
      senses: ["désir", "passion"],
      proof_ctx: "La passion est un mouvement intérieur de l'âme qui tire vers le bas (métaphoriquement). Le verset parle du destin de quelqu'un (sa mère est hāwiya), pas de son état émotionnel. La distinction philosophique : le désir est ressenti à l'intérieur (dans l'âme), le gouffre est un lieu extérieur (où on tombe). Le verset décrit un lieu/destin, pas un état psychologique.",
      axe1_verset: "Le verset dit « sa mère est hāwiya ». Le sujet est « sa mère » (son refuge/origine) — un lieu ou une destination. La passion serait un état intérieur du personnage, pas une qualité de sa destination. Le champ lexical est spatial (lieu de chute), pas émotionnel.",
      axe2_voisins: "Les versets 10-11 identifient hāwiya comme « un feu ardent ». Le feu est un lieu physique, pas une émotion. La passion ne peut pas être un feu ardent — le gouffre si.",
      axe3_sourate: "La sourate parle de destruction physique et de jugement concret (balances, feu). La passion est trop abstraite pour ce registre concret.",
      axe4_coherence: "Le Coran distingue hawā (désir, 45:23) de hawā/hāwiya (chute, lieu de chute). Les deux usages sont bien séparés dans le texte.",
      axe5_frequence: "La passion est une cause, pas une conséquence. Le verset décrit une conséquence (le sort de celui aux balances légères), pas une cause."
    },
    "Corps/Anatomie": {
      status: "nul",
      senses: ["tendre la main"],
      proof_ctx: "Sens concret isolé sans rapport avec le contexte du verset."
    },
    "Souffle/Vent": {
      status: "nul",
      senses: ["air"],
      proof_ctx: "Sens concret isolé. Le verset parle d'un lieu de chute, pas d'air ou de vent."
    }
  }
};

const axes_nwr = {
  sense_chosen: "feu",
  concept_chosen: "Lumière/Clarté",
  concepts: {
    "Lumière/Clarté": {
      status: "retenu",
      senses: ["lumière", "éclairer", "feu", "guider par la lumière"],
      proof_ctx: "Le sens retenu est « Lumière/Clarté ». Le mot nār est un nom indéfini qui désigne le feu — une des manifestations physiques de la lumière. Le Lane's inclut le feu dans le champ sémantique de la lumière (nūr/nār partagent la racine n-w-r). Le test grammatical : un nom indéfini peut-il désigner du feu en général ? Oui — nār sans article désigne du feu (pas « le feu » mais « un feu »). C'est le seul concept pertinent.",
      axe1_verset: "Le verset dit « un feu ardent ». Le mot nār répond à la question du verset 10 (qu'est-ce que c'est ?) — c'est un feu. Le champ lexical est celui de la destruction par le feu. Le feu est la manifestation concrète du gouffre du verset 9 — le gouffre est fait de feu.",
      axe2_voisins: "Le verset 9 introduit le gouffre (hāwiya). Le verset 10 demande ce que c'est. Le verset 11 répond : un feu ardent. La progression est : gouffre → question → réponse (feu). Le feu est l'identification finale de la conséquence négative de la sourate.",
      axe3_sourate: "La sourate se clôt sur cette image. Après la frappante (v1-3), la destruction du monde (v4-5), la pesée (v6-8), et le gouffre (v9), le feu est le mot final. C'est la réalité concrète qui attend celui qui n'a rien dans ses balances.",
      axe4_coherence: "Le Coran mentionne nār des dizaines de fois comme conséquence négative. L'usage est constant et sans ambiguïté. Le feu est toujours associé au jugement défavorable.",
      axe5_frequence: "Le feu est l'opposé de la lumière qui guide. Le khalifa qui n'a pas suivi la lumière (la guidance) se retrouve face au feu (la destruction). Les deux sens de la même racine (nūr = lumière, nār = feu) incarnent les deux destins possibles."
    },
    "Sens isolé/Fleur": {
      status: "nul",
      senses: ["fleur"],
      proof_ctx: "Sens isolé sans rapport. Le verset parle de feu, pas de fleurs."
    },
    "Sens isolé/Fuir": {
      status: "nul",
      senses: ["fuir"],
      proof_ctx: "Sens isolé sans rapport. Le verset identifie un lieu (feu), pas un acte de fuite."
    }
  }
};

const axes_hmy = {
  sense_chosen: "ardent",
  concept_chosen: "Protection/Interdiction",
  concepts: {
    "Protection/Interdiction": {
      status: "retenu",
      senses: ["protéger", "interdire", "zone protégée (hima)"],
      proof_ctx: "Le sens retenu est « Protection/Interdiction ». Le mot ḥāmiya est un participe actif féminin — « celle qui protège/garde ». Le Lane's donne : ḥamā = protéger, interdire l'accès, créer une zone interdite (ḥimā). Le test grammatical : un participe actif féminin peut-il qualifier un feu comme « gardien/protecteur de sa zone » ? Oui — le feu agit activement pour garder son domaine. Le feu ḥāmiya est un feu qui crée autour de lui une zone dont rien ne peut sortir ni entrer — il « protège » ce qu'il détient avec une intensité absolue. C'est cette intensité gardienne qui se traduit en français par « ardent » — un feu si intense qu'il garde tout ce qui y entre.",
      axe1_verset: "Le verset dit « un feu ardent ». Le mot ḥāmiya qualifie le feu — il est actif (participe actif), il fait quelque chose au feu. Ce feu n'est pas passif : il GARDE, il PROTÈGE son domaine avec une intensité telle que rien ne peut s'en échapper. Le champ lexical rejoint l'idée de zone interdite (ḥimā) — le feu crée son propre territoire inviolable.",
      axe2_voisins: "Le verset 9 introduit le gouffre (hāwiya). Le feu ḥāmiya du verset 11 précise la nature de ce gouffre : c'est un feu gardien, un feu qui retient. La chute (v9) mène à un enfermement (v11) — on tombe dans un feu qui ne laisse pas sortir. Les deux versets se complètent parfaitement.",
      axe3_sourate: "La sourate se termine sur cette image de feu gardien. Après la destruction de tout (v1-5) et la pesée (v6-8), le feu ḥāmiya est la réponse finale pour celui dont les balances sont légères. C'est un enfermement total — le contraire de la vie satisfaisante (v7) qui est ouverte et positive.",
      axe4_coherence: "Le Coran utilise ḥamiya/ḥāmiya pour décrire l'intensité du feu en 88:4 (tasla nāran ḥāmiya — elle brûlera d'un feu ardent) et 104:6 (nār allahi al-mūqada — le feu de Dieu allumé). L'idée d'un feu qui garde son domaine est cohérente avec le style coranique.",
      axe5_frequence: "Le feu gardien est l'image de l'enfermement total. Le khalifa qui n'a rien construit de juste se retrouve dans un espace dont il ne peut pas sortir. La protection/interdiction, qui est normalement un acte positif (protéger ce qui est bon), devient ici un acte négatif (enfermer ce qui a échoué). Le même concept, retourné."
    }
  }
};

// ================================================================
// TRAITEMENT DES VERSETS
// ================================================================

async function processVerses() {
  console.log('\n=== ÉTAPE 3-4 — Analyse et traduction ===');

  // ---- VERSET 101:1 ----
  console.log('\n--- Verset 101:1 ---');
  await upsertVWA(V[1], 'qre', R.qre, axes_qre, 1);
  await updateVerse(V[1], {
    translation_arab: "al-qāri'a",
    full_translation: "Le Fracas !",
    segments: [
      { fr: "La frappante.", pos: "nom", phon: "al-qāri'a", arabic: "ٱلْقَارِعَةُ", position: 1, word_key: "qre", is_particle: false, sense_retenu: "événement choquant" }
    ],
    translation_explanation: `§DEMARCHE§

Le mot **al-qāri'a** est un participe actif féminin avec l'article défini al- (une forme qui dit que quelque chose fait activement l'action de frapper, et le al- en fait un événement connu et identifiable). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qara'a signifie frapper, cogner — comme quand on frappe à une porte. Le participe actif féminin crée un nom d'événement : « celle qui frappe ». Le verset est composé d'un seul mot posé comme un titre, une annonce.

§JUSTIFICATION§

**frappante** — Le sens retenu est « Frappe/Choc ». Le mot « frappante » est choisi car il capture l'acte de frapper — un coup soudain et violent qui atteint sa cible. L'alternative « fracas » est écartée car le fracas décrit un bruit, pas un coup — la racine qr' est celle de la frappe physique (comme frapper à une porte), pas du vacarme. L'alternative « catastrophe » est écartée car c'est un terme générique qui ne porte pas l'image concrète de la frappe directe.

§CRITIQUE§

Les traductions courantes donnent « le Fracas » (Hamidullah) ou « le Cataclysme ». Le mot « fracas » transforme le verset en annonce sonore — or l'étymologie dit « frapper » (comme frapper à une porte), pas « faire du bruit ». Le sens originel est un coup qui atteint, pas un son qui se propage. La traduction « le Fracas » vient probablement de l'habitude de dramatiser les scènes eschatologiques — mais l'étymologie est plus sobre : c'est un choc, une frappe, pas un vacarme.`
  });
  console.log('VERSET 101:1 — TERMINÉ');
  console.log('  qre (قرع) → sens "Frappe/Choc" → mot "frappante"');
  console.log('  Traduction : "La frappante."');

  // ---- VERSET 101:2 ----
  console.log('\n--- Verset 101:2 ---');
  await upsertVWA(V[2], 'qre', R.qre, axes_qre, 2);
  await updateVerse(V[2], {
    translation_arab: "mā al-qāri'a",
    full_translation: "Qu'est-ce que le Fracas ?",
    segments: [
      { fr: "Qu'est-ce que", phon: "mā", arabic: "مَا", position: 1, word_key: null, is_particle: true },
      { fr: "la frappante ?", pos: "nom", phon: "al-qāri'a", arabic: "ٱلْقَارِعَةُ", position: 2, word_key: "qre", is_particle: false, sense_retenu: "événement choquant" }
    ],
    translation_explanation: `§DEMARCHE§

Le mot **mā** est un pronom interrogatif (qu'est-ce que). Il interroge sur la nature de al-qāri'a. La question est rhétorique — elle ne demande pas une réponse à l'interlocuteur mais amplifie l'annonce du verset 1. La reprise du mot al-qāri'a (même forme exacte qu'au verset 1) crée une insistance et une montée en tension.

§JUSTIFICATION§

**frappante** — Même mot qu'au verset 1. Le sens retenu est « Frappe/Choc ». Le mot « frappante » est maintenu pour la cohérence avec le verset 1. La question porte sur la nature de cet événement qui frappe, pas sur un bruit ou une catastrophe abstraite.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens — la différence reste celle notée au verset 1 : « fracas » vs « frappante ».`
  });
  console.log('VERSET 101:2 — TERMINÉ');
  console.log('  qre (قرع) → sens "Frappe/Choc" → mot "frappante"');
  console.log('  Traduction : "Qu\'est-ce que la frappante ?"');

  // ---- VERSET 101:3 ----
  console.log('\n--- Verset 101:3 ---');
  await upsertVWA(V[3], 'dry', R.dry, axes_dry, 2);
  await upsertVWA(V[3], 'qre', R.qre, axes_qre, 4);
  await updateVerse(V[3], {
    translation_arab: "wa-mā adrāka mā al-qāri'a",
    full_translation: "Et qui te dira ce qu'est le Fracas ?",
    segments: [
      { fr: "Et qu'est-ce qui", phon: "wa-mā", arabic: "وَمَآ", position: 1, word_key: null, is_particle: true },
      { fr: "te ferait savoir", pos: "verbe", phon: "adrāka", arabic: "أَدْرَىٰكَ", position: 2, word_key: "dry", is_particle: false, sense_retenu: "savoir" },
      { fr: "ce qu'est", phon: "mā", arabic: "مَا", position: 3, word_key: null, is_particle: true },
      { fr: "la frappante ?", pos: "nom", phon: "al-qāri'a", arabic: "ٱلْقَارِعَةُ", position: 4, word_key: "qre", is_particle: false, sense_retenu: "événement choquant" }
    ],
    translation_explanation: `§DEMARCHE§

La formule **wa-mā adrāka mā** est une expression coranique récurrente (13 occurrences dans le Coran). **Adrāka** est un verbe accompli forme IV (une forme qui ajoute l'idée de « faire faire ») de la racine d-r-y (savoir). La forme IV signifie « faire savoir, faire percevoir ». Le pronom suffixe -ka (toi) est l'objet direct. La formule complète signifie littéralement : « et qu'est-ce qui t'a fait savoir ce que c'est ? ». Elle place l'objet (al-qāri'a) au-delà de ce que l'humain peut percevoir par ses propres moyens.

La conjonction **wa** (et) relie ce verset au précédent et crée une escalade : le verset 2 demandait « qu'est-ce que la frappante ? », le verset 3 dit « tu ne peux même pas savoir ce que c'est ».

§JUSTIFICATION§

**savoir** — Le sens retenu est « Connaissance/Perception ». Le mot « savoir » est choisi car la forme IV (adrā) signifie « faire savoir ». L'alternative « percevoir » est écartée car percevoir est plus sensoriel (par les sens), alors que savoir est plus global (comprendre la réalité de la chose). La formule interrogative « qu'est-ce qui te ferait savoir » porte sur la compréhension totale, pas sur une perception partielle.

**frappante** — Même mot et même justification qu'aux versets 1-2.

§CRITIQUE§

Les traductions courantes donnent « Et qui te dira ce qu'est le Fracas ? » (Hamidullah). La formule « qui te dira » transforme adrāka (faire savoir/percevoir) en un acte de parole (dire). Or adrā ne signifie pas « dire » mais « faire savoir ». La traduction « qu'est-ce qui te ferait savoir » est plus fidèle car elle garde l'idée de perception/connaissance sans la réduire à un acte de communication verbale.`
  });
  console.log('VERSET 101:3 — TERMINÉ');
  console.log('  dry (دري) → sens "Connaissance/Perception" → mot "savoir"');
  console.log('  qre (قرع) → sens "Frappe/Choc" → mot "frappante"');
  console.log('  Traduction : "Et qu\'est-ce qui te ferait savoir ce qu\'est la frappante ?"');

  // ---- VERSET 101:4 ----
  console.log('\n--- Verset 101:4 ---');
  await upsertVWA(V[4], 'kwn', R.kwn, axes_kwn(4), 2);
  await upsertVWA(V[4], 'nws', R.nws, axes_nws, 3);
  await upsertVWA(V[4], 'frš', R.frš, axes_frs, 4);
  await upsertVWA(V[4], 'bth', R.bth, axes_bth, 5);
  await updateVerse(V[4], {
    translation_arab: "yawma yakūnu an-nāsu ka-l-farāshi al-mabthūth",
    full_translation: "C'est le jour où les gens seront comme des papillons éparpillés,",
    segments: [
      { fr: "Le jour où", phon: "yawma", arabic: "يَوْمَ", position: 1, word_key: null, is_particle: true },
      { fr: "seront", pos: "verbe", phon: "yakūnu", arabic: "يَكُونُ", position: 2, word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)" },
      { fr: "les gens", pos: "nom", phon: "an-nās", arabic: "ٱلنَّاسُ", position: 3, word_key: "nws", is_particle: false, sense_retenu: "gens" },
      { fr: "comme des papillons", pos: "nom", phon: "ka-l-farāsh", arabic: "كَٱلْفَرَاشِ", position: 4, word_key: "frš", is_particle: false, sense_retenu: "jeune bétail" },
      { fr: "dispersés", pos: "adj", phon: "al-mabthūth", arabic: "ٱلْمَبْثُوثِ", position: 5, word_key: "bth", is_particle: false, sense_retenu: "disperser" }
    ],
    translation_explanation: `§DEMARCHE§

**Yawma** est un nom de temps en position d'accusatif (manṣūb) — il fonctionne comme un marqueur temporel : « le jour où ». Il fixe le cadre de ce qui suit dans le moment de la frappante annoncée aux versets 1-3.

**Yakūnu** est un verbe inaccompli (une forme qui dit que l'action n'est pas encore achevée) de kāna. Ici, kāna fonctionne comme verbe incomplet (nāqiṣ) — il lie un sujet à un attribut sans porter de sens propre. Il dit que les gens « seront » dans un état futur.

**An-nās** est un nom collectif défini qui désigne l'ensemble des êtres humains. C'est le sujet du verbe yakūnu.

**Ka-l-farāsh** : la préposition ka (comme) introduit une comparaison. D'après le Lane's, al-farāsh désigne de petites créatures qui se jettent dans le feu, des insectes volants attirés par la lumière — des papillons de nuit ou des phalènes. Ce sont des êtres fragiles qui volent sans direction.

**Al-mabthūth** est un participe passif (une forme qui dit que l'action est subie) de baththa (disperser). Il qualifie les papillons : « ceux qui ont été dispersés ». Le participe passif impose que la dispersion vienne de l'extérieur — les papillons ne se dispersent pas eux-mêmes, ils sont dispersés par la force de la frappante.

§JUSTIFICATION§

**seront** — Le sens retenu est « Être/Existence ». Kāna est utilisé comme copule (verbe incomplet), il ne porte pas de sens propre au-delà du lien sujet-attribut.

**gens** — Le sens retenu est « Humanité/Peuple ». Le mot « gens » est choisi car c'est le mot le plus courant et le plus neutre en français pour désigner l'ensemble des êtres humains. L'alternative « peuple » est écartée car elle implique une identité culturelle ou nationale. L'alternative « êtres humains » est écartée car trop formel pour le français courant.

**papillons** — Le sens retenu est « Animal/Faune ». Le Lane's définit al-farāsh comme de petites créatures volantes qui se jettent dans le feu. Le mot « papillons » est le plus proche en français courant pour ces insectes volants fragiles et désordonnés. L'alternative « phalènes » est écartée car trop technique. L'alternative « moucherons » est écartée car elle ne porte pas l'image de la légèreté et du vol erratique.

**dispersés** — Le sens retenu est « Dispersion/Diffusion ». Le mot « dispersés » est choisi car il capture l'idée de répartition dans toutes les directions de ce qui était rassemblé. L'alternative « éparpillés » est écartée car elle a une connotation plus désordonnée et moins puissante — « dispersé » implique une force qui a agi, « éparpillé » est plus aléatoire.

§CRITIQUE§

Les traductions courantes donnent « comme des papillons éparpillés » (Hamidullah). La différence est mineure (« éparpillés » vs « dispersés »). En revanche, Hamidullah ajoute « C'est le jour où » — le « c'est » n'est pas dans le texte arabe. Le texte dit simplement « le jour où » (yawma), sans démonstratif. Cet ajout est minime mais crée un lien explicatif qui n'existe pas dans l'original.`
  });
  console.log('VERSET 101:4 — TERMINÉ');
  console.log('  kwn (كون) → sens "Être/Existence" → mot "seront"');
  console.log('  nws (نوس) → sens "Humanité/Peuple" → mot "gens"');
  console.log('  frš (فرش) → sens "Animal/Faune" → mot "papillons"');
  console.log('  bth (بثث) → sens "Dispersion/Diffusion" → mot "dispersés"');
  console.log('  Traduction : "Le jour où les gens seront comme des papillons dispersés"');

  // ---- VERSET 101:5 ----
  console.log('\n--- Verset 101:5 ---');
  await upsertVWA(V[5], 'kwn', R.kwn, axes_kwn(5), 1);
  await upsertVWA(V[5], 'jbl', R.jbl, axes_jbl, 2);
  await upsertVWA(V[5], 'ehn', R_ehn, axes_ehn(), 3);
  await upsertVWA(V[5], 'nfš', R_nfš, axes_nfs(), 4);
  await updateVerse(V[5], {
    translation_arab: "wa-takūnu al-jibālu ka-l-'ihni al-manfūsh",
    full_translation: "et les montagnes comme de la laine cardée.",
    segments: [
      { fr: "et seront", pos: "verbe", phon: "wa-takūnu", arabic: "وَتَكُونُ", position: 1, word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)" },
      { fr: "les montagnes", pos: "nom", phon: "al-jibāl", arabic: "ٱلْجِبَالُ", position: 2, word_key: "jbl", is_particle: false, sense_retenu: "montagne" },
      { fr: "comme de la laine", pos: "nom", phon: "ka-l-'ihn", arabic: "كَٱلْعِهْنِ", position: 3, word_key: "ehn", is_particle: false, sense_retenu: "laine" },
      { fr: "cardée", pos: "adj", phon: "al-manfūsh", arabic: "ٱلْمَنفُوشِ", position: 4, word_key: "nfš", is_particle: false, sense_retenu: "carder" }
    ],
    translation_explanation: `§DEMARCHE§

**Wa-takūnu** : la conjonction wa (et) relie ce verset au précédent. Le verbe takūnu est l'inaccompli féminin de kāna — il s'accorde avec al-jibāl (les montagnes, féminin pluriel en arabe). Comme au verset 4, kāna fonctionne comme verbe incomplet (copule).

**Al-jibāl** est le pluriel de jabal (montagne) avec l'article défini. Les montagnes sont le sujet — elles représentent ce qu'il y a de plus massif, de plus stable et de plus permanent dans le monde physique.

**Ka-l-'ihn** : la préposition ka (comme) introduit la comparaison. Le mot al-'ihn désigne la laine, particulièrement la laine teinte de couleurs variées selon le Lane's. C'est une matière souple, légère et fragile — l'opposé absolu de la montagne.

**Al-manfūsh** est un participe passif (une forme qui dit que l'action est subie) de nafasha (carder, séparer les fibres). Le Lane's dit : « séparer avec les doigts ou un instrument jusqu'à ce que la matière devienne éparse ». Le Lane's cite explicitement l'expression « 'ihn manfūsh » (laine cardée) comme expression de ce verset. Le participe passif dit que la laine a SUBI le cardage — elle a été défaite par une force extérieure.

Le contraste entre la montagne et la laine cardée est le cœur de l'image : ce qui était le plus solide au monde est réduit à des fibres flottantes.

§JUSTIFICATION§

**seront** — Même sens que verset 4 : kāna comme copule.

**montagnes** — Le sens retenu est « Montagne/Solidité ». Le mot « montagnes » est le seul mot possible en français courant.

**laine** — Le sens retenu est « Laine/Fibre ». Le mot « laine » est choisi car c'est le mot français courant pour cette matière textile. L'alternative « toison » est écartée car elle désigne la laine encore sur l'animal, pas la laine cardée. L'alternative « flocon » est écartée car trop spécifique — le texte parle de la matière en général.

**cardée** — Le sens retenu est « Cardage/Effilochage ». Le mot « cardée » est choisi car c'est le terme technique français exact pour l'action de séparer les fibres de laine avec un instrument. L'alternative « effilochée » est écartée car elle implique une dégradation accidentelle, alors que le cardage est un acte délibéré et complet. L'alternative « peignée » est écartée car le peignage est plus doux — le cardage est plus radical.

§CRITIQUE§

Les traductions courantes donnent « comme de la laine cardée » — notre traduction est identique sur ce point. L'image est si précise que les traducteurs n'ont pas eu de latitude pour interpréter différemment.`
  });
  console.log('VERSET 101:5 — TERMINÉ');
  console.log('  kwn (كون) → sens "Être/Existence" → mot "seront"');
  console.log('  jbl (جبل) → sens "Montagne/Solidité" → mot "montagnes"');
  console.log('  ehn (عهن) → sens "Laine/Fibre" → mot "laine"');
  console.log('  nfš (نفش) → sens "Cardage/Effilochage" → mot "cardée"');
  console.log('  Traduction : "et les montagnes comme de la laine cardée"');

  // ---- VERSET 101:6 ----
  console.log('\n--- Verset 101:6 ---');
  await upsertVWA(V[6], 'thql', R.thql, axes_thql, 3);
  await upsertVWA(V[6], 'wzn', R.wzn, axes_wzn, 4);
  await updateVerse(V[6], {
    translation_arab: "fa-ammā man thaqulat mawāzīnuhu",
    full_translation: "quant à celui dont la balance sera lourde,",
    segments: [
      { fr: "Quant à", phon: "fa-ammā", arabic: "فَأَمَّا", position: 1, word_key: null, is_particle: true },
      { fr: "celui dont", phon: "man", arabic: "مَن", position: 2, word_key: null, is_particle: true },
      { fr: "pèseront lourd", pos: "verbe", phon: "thaqulat", arabic: "ثَقُلَتْ", position: 3, word_key: "thql", is_particle: false, sense_retenu: "lourd" },
      { fr: "ses balances", pos: "nom", phon: "mawāzīnuhu", arabic: "مَوَٰزِينُهُۥ", position: 4, word_key: "wzn", is_particle: false, sense_retenu: "balance" }
    ],
    translation_explanation: `§DEMARCHE§

**Fa-ammā** est une particule de condition et de répartition — elle introduit le premier cas d'une division (quant à...). Le fa (alors) lie la division au contexte précédent (la frappante et ses effets).

**Man** est un pronom relatif indéfini — « celui qui ». Il ne précise pas qui — c'est n'importe quel être humain.

**Thaqulat** est un verbe accompli (une forme qui dit que l'action est achevée) de thaqula (être lourd). Le tā' à la fin marque le féminin — il s'accorde avec mawāzīn (les balances, pluriel féminin). Le verbe est intransitif : les balances « sont lourdes » par elles-mêmes, pas « portent quelque chose de lourd ».

**Mawāzīnuhu** est le pluriel de mīzān (balance) avec le pronom suffixe -hu (ses). Le pluriel mawāzīn peut signifier soit « ses balances » (plusieurs instruments) soit « ses mesures/poids » (les résultats de la pesée). Le Lane's donne : mīzān = instrument pour peser avec exactitude.

§JUSTIFICATION§

**lourd** — Le sens retenu est « Poids/Gravité ». Le mot « lourd » est choisi car c'est le mot le plus direct pour exprimer le poids. L'alternative « pesant » est écartée car elle a une connotation négative en français (« un silence pesant »), alors que le poids ici est positif — les balances lourdes mènent à une vie satisfaisante. L'alternative « grave » est écartée car elle est trop abstraite et morale.

**balances** — Le sens retenu est « Pesée/Mesure ». Le mot « balances » est choisi car c'est le pluriel français de l'instrument de pesée, correspondant exactement au pluriel arabe mawāzīn.

§CRITIQUE§

Hamidullah donne « quant à celui dont la balance sera lourde ». Il utilise le singulier « la balance » alors que le texte arabe dit mawāzīn (pluriel). Le pluriel est significatif — il peut indiquer plusieurs pesées, plusieurs critères de mesure, pas une balance unique. Notre traduction conserve le pluriel « les balances » fidèle au texte.`
  });
  console.log('VERSET 101:6 — TERMINÉ');
  console.log('  thql (ثقل) → sens "Poids/Gravité" → mot "lourd"');
  console.log('  wzn (وزن) → sens "Pesée/Mesure" → mot "balances"');
  console.log('  Traduction : "Quant à celui dont les balances pèseront lourd"');

  // ---- VERSET 101:7 ----
  console.log('\n--- Verset 101:7 ---');
  await upsertVWA(V[7], 'eyš', R.eyš, axes_eys, 3);
  await upsertVWA(V[7], 'rdw', R.rdw, axes_rdw, 4);
  await updateVerse(V[7], {
    translation_arab: "fa-huwa fī 'īshatin rāḍiya",
    full_translation: "il sera dans une vie agréable ;",
    segments: [
      { fr: "il sera", phon: "fa-huwa", arabic: "فَهُوَ", position: 1, word_key: null, is_particle: true },
      { fr: "dans", phon: "fī", arabic: "فِى", position: 2, word_key: null, is_particle: true },
      { fr: "une vie", pos: "nom", phon: "'īsha", arabic: "عِيشَةٍ", position: 3, word_key: "eyš", is_particle: false, sense_retenu: "vivre" },
      { fr: "satisfaisante", pos: "adj", phon: "rāḍiya", arabic: "رَّاضِيَةٍ", position: 4, word_key: "rdw", is_particle: false, sense_retenu: "être satisfait" }
    ],
    translation_explanation: `§DEMARCHE§

**Fa-huwa** : le fa (alors) tire la conséquence de la condition du verset 6. Huwa (il) est le pronom sujet — il renvoie à « celui dont les balances pèsent lourd ».

**Fī** est une préposition spatiale qui signifie « dans ». Elle place le sujet À L'INTÉRIEUR de la vie satisfaisante — la vie l'enveloppe, l'entoure, ce n'est pas un état extérieur qu'il observe mais un milieu dans lequel il est plongé.

**'Īsha** est un nom de la forme fi'la (une forme qui indique la manière) de la racine '-y-sh (vivre). Il désigne « une façon de vivre, un mode de vie ». C'est indéfini (sans al-) — « une vie », pas « la vie ». Le Lane's donne : 'āsha = vivre, être vivant, subvenir à ses besoins.

**Rāḍiya** est un participe actif féminin de raḍiya (être satisfait). C'est une forme qui dit que le sujet FAIT l'action — ici, c'est la vie elle-même qui « est satisfaite ». La vie n'est pas rendue satisfaisante par l'extérieur — elle EST satisfaisante par nature. Le participe actif s'accorde avec 'īsha (féminin).

§JUSTIFICATION§

**vie** — Le sens retenu est « Vie/Subsistance ». Le mot « vie » est le seul mot courant en français pour traduire 'īsha dans le sens de « mode de vie ».

**satisfaisante** — Le sens retenu est « Satisfaction/Agrément ». Le mot « satisfaisante » est choisi car il capture l'état de contentement intrinsèque. L'alternative « agréable » est écartée car « agréable » qualifie les circonstances extérieures (un repas agréable, un lieu agréable) — « satisfaisante » qualifie l'état intérieur de la vie elle-même. L'alternative « plaisante » est écartée pour la même raison. L'alternative « contentée » est écartée car peu naturel en français courant.

§CRITIQUE§

Les traductions courantes donnent « une vie agréable » (Hamidullah). Le mot « agréable » déplace le sens vers les circonstances extérieures — une vie agréable est une vie où les choses autour sont plaisantes. Or rāḍiya est un participe actif : c'est la vie elle-même qui est dans un état de satisfaction, indépendamment des circonstances. La traduction « satisfaisante » conserve cette nuance : la satisfaction vient de l'intérieur de la vie, pas de l'extérieur.`
  });
  console.log('VERSET 101:7 — TERMINÉ');
  console.log('  eyš (عيش) → sens "Vie/Subsistance" → mot "vie"');
  console.log('  rdw (رضو) → sens "Satisfaction/Agrément" → mot "satisfaisante"');
  console.log('  Traduction : "il sera dans une vie satisfaisante"');

  // ---- VERSET 101:8 ----
  console.log('\n--- Verset 101:8 ---');
  await upsertVWA(V[8], 'xff', R.xff, axes_xff, 3);
  await upsertVWA(V[8], 'wzn', R.wzn, axes_wzn, 4);
  await updateVerse(V[8], {
    translation_arab: "wa-ammā man khaffat mawāzīnuhu",
    full_translation: "et quant à celui dont la balance sera légère,",
    segments: [
      { fr: "Et quant à", phon: "wa-ammā", arabic: "وَأَمَّا", position: 1, word_key: null, is_particle: true },
      { fr: "celui dont", phon: "man", arabic: "مَنْ", position: 2, word_key: null, is_particle: true },
      { fr: "seront légères", pos: "verbe", phon: "khaffat", arabic: "خَفَّتْ", position: 3, word_key: "xff", is_particle: false, sense_retenu: "être léger" },
      { fr: "ses balances", pos: "nom", phon: "mawāzīnuhu", arabic: "مَوَٰزِينُهُۥ", position: 4, word_key: "wzn", is_particle: false, sense_retenu: "balance" }
    ],
    translation_explanation: `§DEMARCHE§

**Wa-ammā** est la forme coordonnée de fa-ammā (verset 6). Le wa (et) ajoute le second cas après le premier. La structure est symétrique : « quant à celui dont... lourd » (v6) / « et quant à celui dont... léger » (v8).

**Man** : même pronom relatif qu'au verset 6.

**Khaffat** est un verbe accompli de khaffa (être léger). Le tā' final marque l'accord féminin avec mawāzīn. Le Lane's donne : khaffa = être léger, peser peu, être sans poids. Le verbe est le contraire exact de thaqulat (verset 6).

**Mawāzīnuhu** : même mot qu'au verset 6 (ses balances).

La symétrie entre les versets 6 et 8 est parfaite : même structure grammaticale, même sujet (les balances), seul le verbe change (lourd → léger). Cette symétrie renforce le contraste entre les deux destins.

§JUSTIFICATION§

**légères** — Le sens retenu est « Légèreté/Allègement ». Le mot « légères » est choisi car c'est le contraire direct de « lourd ». L'alternative « vides » est écartée car le texte parle de poids (léger), pas de contenu (vide). L'alternative « faibles » est écartée car « faible » qualifie une personne, pas un poids.

**balances** — Même mot et même justification qu'au verset 6.

§CRITIQUE§

Hamidullah donne « quant à celui dont la balance sera légère ». Même remarque qu'au verset 6 : le singulier « la balance » remplace le pluriel mawāzīn. Notre traduction conserve le pluriel « les balances ».`
  });
  console.log('VERSET 101:8 — TERMINÉ');
  console.log('  xff (خفف) → sens "Légèreté/Allègement" → mot "légères"');
  console.log('  wzn (وزن) → sens "Pesée/Mesure" → mot "balances"');
  console.log('  Traduction : "Et quant à celui dont les balances seront légères"');

  // ---- VERSET 101:9 ----
  console.log('\n--- Verset 101:9 ---');
  await upsertVWA(V[9], 'amm', R.amm, axes_amm, 1);
  await upsertVWA(V[9], 'hwy', R.hwy, axes_hwy, 2);
  await updateVerse(V[9], {
    translation_arab: "fa-ummuhu hāwiya",
    full_translation: "sa Mère [destination] sera un Abîme très profond.",
    segments: [
      { fr: "sa mère sera", pos: "nom", phon: "ummuhu", arabic: "فَأُمُّهُۥ", position: 1, word_key: "amm", is_particle: false, sense_retenu: "mère" },
      { fr: "un gouffre", pos: "nom", phon: "hāwiya", arabic: "هَاوِيَةٌ", position: 2, word_key: "hwy", is_particle: false, sense_retenu: "tomber" }
    ],
    translation_explanation: `§DEMARCHE§

**Fa-ummuhu** : le fa (alors) tire la conséquence de la condition du verset 8. Le mot umm signifie « mère » — c'est le mot le plus fondamental de la langue arabe pour désigner l'origine, la source, ce qui accueille. Le Lane's donne : umm = mère, source, fondement, principe de quelque chose. En arabe, umm s'étend au-delà de la maternité biologique : umm al-qurā (la mère des cités = La Mecque), umm al-kitāb (la mère du Livre = l'original). Le pronom suffixe -hu (sa) rattache cette « mère » à la personne dont les balances sont légères.

Le verset dit littéralement « sa mère est hāwiya ». L'expression est frappante : la mère est normalement le refuge, l'abri, ce qui protège. Ici, la « mère » (ce qui accueille) est un gouffre.

**Hāwiya** est un participe actif féminin de hawā (tomber). Le Lane's donne : hawā = tomber de haut en bas sous l'effet de la gravité. Le participe actif féminin fait du gouffre un agent actif — il ne reçoit pas passivement, il FAIT tomber. La hāwiya est « celle qui fait chuter », un lieu qui attire vers le bas avec force.

La phrase est nominale (pas de verbe) — elle constate un état : sa mère EST un gouffre. Pas « sera » mais « est » — le destin est posé comme un fait.

§JUSTIFICATION§

**mère** — Le sens retenu est « Origine/Communauté ». Le mot « mère » est conservé car c'est le sens premier et le plus direct du mot umm. Traduire par « refuge » ou « destination » serait déjà une interprétation — le texte dit « mère » et le lecteur doit saisir l'image : ce qui devrait être un refuge protecteur est un gouffre. L'alternative « origine » est écartée car trop abstrait en français courant — « sa mère » est plus frappant et plus naturel que « son origine ».

**gouffre** — Le sens retenu est « Chute/Descente ». Le mot « gouffre » est choisi car il capture l'idée d'un lieu où l'on tombe sans fond. L'alternative « abîme » est écartée car c'est du registre littéraire. L'alternative « précipice » est écartée car le précipice a un bord visible — le gouffre est plus englobant, on y est déjà dedans. L'alternative « chute » est écartée car la chute est le mouvement, le gouffre est le lieu.

§CRITIQUE§

Hamidullah donne « sa Mère [destination] sera un Abîme très profond ». Il ajoute [destination] entre crochets pour interpréter « mère » — c'est un ajout exégétique absent du texte. Il ajoute aussi « très profond » qui n'est pas dans l'original. Notre traduction conserve « sa mère » sans ajout et « un gouffre » sans qualification — le texte est déjà suffisamment frappant sans amplification.`
  });
  console.log('VERSET 101:9 — TERMINÉ');
  console.log('  amm (أمم) → sens "Origine/Communauté" → mot "mère"');
  console.log('  hwy (هوي) → sens "Chute/Descente" → mot "gouffre"');
  console.log('  Traduction : "sa mère sera un gouffre"');

  // ---- VERSET 101:10 ----
  console.log('\n--- Verset 101:10 ---');
  await upsertVWA(V[10], 'dry', R.dry, axes_dry, 2);
  await updateVerse(V[10], {
    translation_arab: "wa-mā adrāka mā hiyah",
    full_translation: "Et qui te dira ce que c'est ?",
    segments: [
      { fr: "Et qu'est-ce qui", phon: "wa-mā", arabic: "وَمَآ", position: 1, word_key: null, is_particle: true },
      { fr: "te ferait savoir", pos: "verbe", phon: "adrāka", arabic: "أَدْرَىٰكَ", position: 2, word_key: "dry", is_particle: false, sense_retenu: "savoir" },
      { fr: "ce que", phon: "mā", arabic: "مَا", position: 3, word_key: null, is_particle: true },
      { fr: "c'est ?", phon: "hiyah", arabic: "هِيَهْ", position: 4, word_key: null, is_particle: true }
    ],
    translation_explanation: `§DEMARCHE§

Ce verset reprend la formule du verset 3 — **wa-mā adrāka mā** — mais cette fois, l'objet n'est pas al-qāri'a mais **hiyah** (elle), qui renvoie à hāwiya (le gouffre) du verset 9. La formule place le gouffre au-delà de la perception humaine, comme elle avait placé la frappante au-delà de la perception au verset 3.

**Hiyah** est le pronom personnel féminin de la troisième personne (elle) avec un hā' de pause à la fin (pause en fin de verset). Il renvoie à hāwiya — le texte demande « qu'est-ce qu'elle est ? » et le verset suivant répond.

La répétition de la formule crée une structure en écho : annonce → question → description (v1-3-4) et destin → question → identification (v9-10-11).

§JUSTIFICATION§

**savoir** — Même mot et même justification qu'au verset 3. La formule wa-mā adrāka mā est identique.

§CRITIQUE§

Les traductions courantes donnent « Et qui te dira ce que c'est ? » — même remarque qu'au verset 3 : « qui te dira » transforme adrāka (faire savoir) en acte de parole (dire).`
  });
  console.log('VERSET 101:10 — TERMINÉ');
  console.log('  dry (دري) → sens "Connaissance/Perception" → mot "savoir"');
  console.log('  Traduction : "Et qu\'est-ce qui te ferait savoir ce que c\'est ?"');

  // ---- VERSET 101:11 ----
  console.log('\n--- Verset 101:11 ---');
  await upsertVWA(V[11], 'nwr', R.nwr, axes_nwr, 1);
  await upsertVWA(V[11], 'hmy', R.hmy, axes_hmy, 2);
  await updateVerse(V[11], {
    translation_arab: "nārun ḥāmiya",
    full_translation: "Un Feu ardent.",
    segments: [
      { fr: "Un feu", pos: "nom", phon: "nār", arabic: "نَارٌ", position: 1, word_key: "nwr", is_particle: false, sense_retenu: "feu" },
      { fr: "ardent", pos: "adj", phon: "ḥāmiya", arabic: "حَامِيَةٌۢ", position: 2, word_key: "hmy", is_particle: false, sense_retenu: "protéger" }
    ],
    translation_explanation: `§DEMARCHE§

**Nār** est un nom indéfini qui désigne le feu. Il est sans article (pas al-nār) — « un feu », pas « le feu ». L'indéfinition crée un effet de révélation : on découvre que le gouffre est un feu. La racine n-w-r est partagée entre nūr (lumière) et nār (feu) — les deux manifestations de la même énergie.

**Ḥāmiya** est un participe actif féminin de ḥamiya. D'après les sources étymologiques, ḥamā signifie protéger, garder, créer une zone interdite (ḥimā). Le participe actif féminin fait du feu un agent actif : il PROTÈGE son domaine, il GARDE ce qui y entre. Le feu ḥāmiya est un feu-gardien — si intense qu'il crée autour de lui une zone dont rien ne peut sortir ni entrer. Cette intensité gardienne est ce qui rend le feu « ardent » en français : un feu ardent est un feu actif, vif, qui ne faiblit pas.

Le verset répond à la question du verset 10 (qu'est-ce que c'est ?) par deux mots : un feu gardien. La brièveté de la réponse contraste avec l'ampleur de la question.

§JUSTIFICATION§

**feu** — Le sens retenu est « Lumière/Clarté ». Le mot « feu » est le sens direct de nār. Pas d'alternative en français courant.

**ardent** — Le sens retenu est « Protection/Interdiction ». Le mot « ardent » est choisi car il capture l'intensité active du feu — un feu ardent est un feu qui brûle avec force et ne faiblit pas, créant une zone dont rien ne s'échappe. L'alternative « brûlant » est écartée car « brûlant » décrit la température (c'est chaud) tandis qu'« ardent » décrit l'intensité active (ça vit, ça garde, ça ne lâche pas). L'alternative « protecteur » est écartée car elle a une connotation positive en français — « ardent » est neutre et porte l'intensité sans le jugement de valeur.

§CRITIQUE§

Les traductions courantes donnent « un feu ardent » — notre traduction est identique. La brièveté du verset (deux mots) ne laisse pas de marge d'interprétation.`
  });
  console.log('VERSET 101:11 — TERMINÉ');
  console.log('  nwr (نور) → sens "Lumière/Clarté" → mot "feu"');
  console.log('  hmy (همي) → sens "Protection/Interdiction" → mot "ardent"');
  console.log('  Traduction : "Un feu ardent."');
}

// ================================================================
// PHRASES DU QUOTIDIEN
// ================================================================
async function insertDailyPhrases() {
  console.log('\n=== PHRASES DU QUOTIDIEN ===');

  // qre (2267) — 0 phrases
  await insertDaily(R.qre, 'frapper', 'قَرَعَ', 'qara\'a', "Quelqu'un frappe à la porte, va ouvrir.");
  await insertDaily(R.qre, 'frapper', 'قَرَعَ', 'qara\'a', "Cette nouvelle m'a frappé comme un coup.");
  await insertDaily(R.qre, 'frapper', 'قَرَعَ', 'qara\'a', "Il frappe les cymbales à chaque concert.");
  console.log('  qre: 3 phrases');

  // frš (385) — 0 phrases
  await insertDaily(R.frš, 'étendre', 'فَرَشَ', 'farasha', "Elle a étendu le tapis dans le salon.");
  await insertDaily(R.frš, 'lit', 'فِرَاش', 'firāsh', "Le lit est prêt, tu peux dormir.");
  await insertDaily(R.frš, 'étendre', 'فَرَشَ', 'farasha', "Il a étendu la nappe sur la table.");
  console.log('  frš: 3 phrases');

  // bth (934) — 0 phrases
  await insertDaily(R.bth, 'disperser', 'بَثَّ', 'baththa', "Le vent a dispersé les feuilles dans le jardin.");
  await insertDaily(R.bth, 'répandre', 'بَثَّ', 'baththa', "La chaîne a répandu la nouvelle en direct.");
  await insertDaily(R.bth, 'confier sa peine', 'بَثَّ', 'baththa', "Il a confié sa peine à son ami le plus proche.");
  console.log('  bth: 3 phrases');

  // jbl (1153) — 0 phrases
  await insertDaily(R.jbl, 'montagne', 'جَبَل', 'jabal', "Nous avons gravi la montagne ce matin.");
  await insertDaily(R.jbl, 'montagne', 'جَبَل', 'jabal', "La montagne est couverte de neige en hiver.");
  await insertDaily(R.jbl, 'être solide et massif', 'جَبَل', 'jabal', "Cet homme est solide comme une montagne.");
  console.log('  jbl: 3 phrases');

  // ehn (NEW)
  await insertDaily(R_ehn, 'laine', 'عِهْن', '\'ihn', "Ce pull est en pure laine, il tient chaud.");
  await insertDaily(R_ehn, 'laine colorée', 'عِهْن', '\'ihn', "Elle tisse des écharpes en laine colorée.");
  await insertDaily(R_ehn, 'rester', 'عَهَنَ', '\'ahana', "Il est resté à la maison toute la journée.");
  console.log('  ehn: 3 phrases');

  // nfš (NEW)
  await insertDaily(R_nfš, 'carder', 'نَفَشَ', 'nafasha', "La grand-mère cardait la laine à la main.");
  await insertDaily(R_nfš, 'hérisser', 'تَنَفَّشَ', 'tanaffasha', "Le chat a hérissé ses poils en voyant le chien.");
  await insertDaily(R_nfš, 'séparer', 'نَفَشَ', 'nafasha', "Il faut séparer les fibres avant de filer.");
  console.log('  nfš: 3 phrases');

  // thql (1476) — 0 phrases
  await insertDaily(R.thql, 'lourd', 'ثَقِيل', 'thaqīl', "Cette valise est très lourde, aide-moi.");
  await insertDaily(R.thql, 'pesant', 'ثَقِيل', 'thaqīl', "Le silence était pesant dans la salle.");
  await insertDaily(R.thql, 'fardeau', 'ثِقْل', 'thiql', "Il porte le fardeau de toute sa famille.");
  console.log('  thql: 3 phrases');

  // wzn (1848) — 0 phrases
  await insertDaily(R.wzn, 'peser', 'وَزَنَ', 'wazana', "Le marchand pèse les fruits sur la balance.");
  await insertDaily(R.wzn, 'balance', 'مِيزَان', 'mīzān', "La balance indique trois kilos exactement.");
  await insertDaily(R.wzn, 'poids', 'وَزْن', 'wazn', "Quel est le poids de ce colis ?");
  console.log('  wzn: 3 phrases');

  // eyš (1847) — 0 phrases
  await insertDaily(R.eyš, 'vivre', 'عَاشَ', '\'āsha', "Il vit simplement, sans excès.");
  await insertDaily(R.eyš, 'subsistance', 'مَعِيشَة', 'ma\'īsha', "Sa subsistance vient de son travail quotidien.");
  await insertDaily(R.eyš, 'vivre', 'عَاشَ', '\'āsha', "Nous vivons ensemble depuis dix ans.");
  console.log('  eyš: 3 phrases');

  // rdw (812) — 0 phrases
  await insertDaily(R.rdw, 'être satisfait', 'رَضِيَ', 'raḍiya', "Je suis satisfait du résultat de mon travail.");
  await insertDaily(R.rdw, 'agréer', 'رَضِيَ', 'raḍiya', "Le client a agréé les conditions du contrat.");
  await insertDaily(R.rdw, 'consentir', 'رَضِيَ', 'raḍiya', "Elle a consenti à la proposition après réflexion.");
  console.log('  rdw: 3 phrases');

  // xff (928) — 0 phrases
  await insertDaily(R.xff, 'être léger', 'خَفِيف', 'khafīf', "Ce sac est léger, je peux le porter seul.");
  await insertDaily(R.xff, 'alléger', 'خَفَّفَ', 'khaffafa', "Il faut alléger la charge du camion.");
  await insertDaily(R.xff, 'se hâter', 'خَفَّ', 'khaffa', "Il s'est hâté pour arriver à l'heure.");
  console.log('  xff: 3 phrases');

  // amm (785) — 0 phrases
  await insertDaily(R.amm, 'mère', 'أُمّ', 'umm', "Ma mère prépare le dîner chaque soir.");
  await insertDaily(R.amm, 'communauté', 'أُمَّة', 'umma', "La communauté se rassemble pour la fête.");
  await insertDaily(R.amm, 'mère', 'أُمّ', 'umm', "La mère de toutes les batailles commence demain.");
  console.log('  amm: 3 phrases');

  // hwy (398) — 0 phrases
  await insertDaily(R.hwy, 'tomber', 'هَوَى', 'hawā', "La feuille est tombée de l'arbre.");
  await insertDaily(R.hwy, 'faire tomber', 'أَهْوَى', 'ahwā', "Le vent a fait tomber la branche.");
  await insertDaily(R.hwy, 'désir', 'هَوًى', 'hawan', "Il a suivi son désir au lieu de sa raison.");
  console.log('  hwy: 3 phrases');

  // hmy (1855) — 0 phrases
  await insertDaily(R.hmy, 'protéger', 'حَمَى', 'ḥamā', "Le berger protège son troupeau des loups.");
  await insertDaily(R.hmy, 'interdire', 'حَمَى', 'ḥamā', "Le médecin lui a interdit le sucre.");
  await insertDaily(R.hmy, 'zone protégée (hima)', 'حِمًى', 'ḥiman', "Cette forêt est une zone protégée.");
  console.log('  hmy: 3 phrases');

  // SKIP: dry(2098), kwn(2577), nws(303), nwr(349), ywm(257) — already have phrases
  console.log('  SKIP: dry, kwn, nws, nwr, ywm (phrases existantes)');
}

// ================================================================
// MAIN
// ================================================================
async function main() {
  console.log('========================================');
  console.log('PIPELINE SOURATE 101 — Al-Qari\'a');
  console.log('========================================');

  await createMissingRoots();
  await processVerses();
  await insertDailyPhrases();

  console.log('\n========================================');
  console.log('PIPELINE SOURATE 101 TERMINÉE');
  console.log('========================================');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1) });
