const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // gyb and rgd already created: gyb.id=2605, rgd.id=2606
  const gybId = 2605;
  const rgdId = 2606;

  const gybM = [
    { analysis_id: gybId, concept: 'Absence/Invisibilité', sense: 'être absent', description: "Contraire de la présence (hudūr). Désigne l'état de ce qui n'est plus là, de ce qui s'est éloigné du champ immédiat. C'est un état passif et non directionnel : la chose n'est simplement plus accessible aux sens, sans qu'il y ait nécessairement intention de se cacher. Cet état peut être temporaire ou permanent, physique ou métaphorique.", meaning_type: 'etymology', status: 'active', display_order: 1 },
    { analysis_id: gybId, concept: 'Absence/Invisibilité', sense: "s'absenter", description: "Quitter un lieu pour n'y plus être visible.", meaning_type: 'etymology', status: 'active', display_order: 2 },
    { analysis_id: gybId, concept: 'Absence/Invisibilité', sense: 'être distant', description: 'Être éloigné, hors de portée.', meaning_type: 'etymology', status: 'active', display_order: 3 },
    { analysis_id: gybId, concept: 'Absence/Invisibilité', sense: 'se coucher (astre)', description: "Le soleil ou la lune disparaissant sous l'horizon.", meaning_type: 'etymology', status: 'active', display_order: 4 },

    { analysis_id: gybId, concept: 'Mystère/Inconnaissable', sense: "l'invisible", description: "Ce qui échappe à la perception humaine, que ce soit par les sens ou par l'intellect. Désigne une réalité objectivement inaccessible à l'être humain sans révélation. Ce n'est pas un acte mais un état ontologique : certaines choses SONT invisibles par nature, indépendamment de toute volonté de les cacher. C'est permanent et non directionnel — le ghayb ne vise personne, il est simplement hors de portée.", meaning_type: 'etymology', status: 'active', display_order: 5 },
    { analysis_id: gybId, concept: 'Mystère/Inconnaissable', sense: 'mystère', description: 'Ce qui est caché aux yeux des hommes.', meaning_type: 'etymology', status: 'active', display_order: 6 },
    { analysis_id: gybId, concept: 'Mystère/Inconnaissable', sense: 'secret', description: "Ce qui n'a pas été révélé.", meaning_type: 'etymology', status: 'active', display_order: 7 },
    { analysis_id: gybId, concept: 'Mystère/Inconnaissable', sense: 'événement futur', description: "Ce qui n'a pas encore eu lieu et reste inconnu.", meaning_type: 'etymology', status: 'active', display_order: 8 },

    { analysis_id: gybId, concept: 'Dissimulation/Occultation', sense: 'cacher', description: "Acte extérieur et directionnel : quelqu'un fait disparaître quelque chose du champ de vision d'autrui. C'est un acte volontaire et ponctuel, qui suppose un agent actif et une cible. La chose cachée n'est pas absente en soi — elle est rendue absente par l'action de celui qui la dissimule. L'intention est au cœur de ce concept.", meaning_type: 'etymology', status: 'active', display_order: 9 },
    { analysis_id: gybId, concept: 'Dissimulation/Occultation', sense: 'faire disparaître', description: 'Rendre invisible volontairement.', meaning_type: 'etymology', status: 'active', display_order: 10 },
    { analysis_id: gybId, concept: 'Dissimulation/Occultation', sense: 'voiler', description: "Recouvrir pour empêcher la vue.", meaning_type: 'etymology', status: 'active', display_order: 11 },

    { analysis_id: gybId, concept: 'Médisance/Calomnie', sense: 'médire', description: "Parler en mal de quelqu'un en son absence. C'est un acte extérieur (parole), directionnel (vise une personne précise), et qui exploite l'absence de la cible. Le lien avec la racine est transparent : on agit dans le ghayb de l'autre, c'est-à-dire pendant son absence. C'est ponctuel et moral — un jugement social négatif exprimé derrière le dos de quelqu'un.", meaning_type: 'etymology', status: 'active', display_order: 12 },
    { analysis_id: gybId, concept: 'Médisance/Calomnie', sense: 'calomnier', description: "Attribuer faussement des défauts à autrui en son absence.", meaning_type: 'etymology', status: 'active', display_order: 13 },

    { analysis_id: gybId, concept: 'Dépression/Creux', sense: 'lieu bas', description: "Endroit enfoncé dans le sol, un creux ou une dépression de terrain. Le lien avec la racine est spatial : ce qui est dans un creux est caché à la vue par le relief environnant. C'est un état permanent et passif — le lieu ne se cache pas, il est simplement géographiquement dissimulé par sa position basse.", meaning_type: 'etymology', status: 'active', display_order: 14 },
    { analysis_id: gybId, concept: 'Dépression/Creux', sense: "fond d'un puits", description: "La partie la plus basse et cachée d'un puits.", meaning_type: 'etymology', status: 'active', display_order: 15 },
    { analysis_id: gybId, concept: 'Dépression/Creux', sense: 'tombe', description: "Le lieu où l'on enterre, qui fait disparaître de la vue.", meaning_type: 'etymology', status: 'active', display_order: 16 },
  ];

  const { error: e1 } = await db.from('word_meanings').insert(gybM);
  console.log('gyb meanings:', e1 ? 'ERROR ' + e1.message : gybM.length + ' inserted');

  // rgd already created
  const rgdM = [
    { analysis_id: rgdId, concept: 'Abondance/Aisance', sense: 'abondance', description: "Désigne un état de vie ample, généreux en moyens, sans restriction ni difficulté. C'est un état permanent et passif — on ne produit pas le raghad, on s'y trouve. Il est non directionnel : il décrit une condition générale de la vie, pas une action vers quelqu'un. Le Lane's insiste sur l'absence de fatigue et de contrainte comme caractéristique centrale.", meaning_type: 'etymology', status: 'active', display_order: 1 },
    { analysis_id: rgdId, concept: 'Abondance/Aisance', sense: 'aisance', description: 'Vie facile et agréable, sans privation.', meaning_type: 'etymology', status: 'active', display_order: 2 },
    { analysis_id: rgdId, concept: 'Abondance/Aisance', sense: 'vie plaisante', description: "Existence pleine de bien-être et de confort.", meaning_type: 'etymology', status: 'active', display_order: 3 },
    { analysis_id: rgdId, concept: 'Abondance/Aisance', sense: 'sans contrainte', description: 'Sans gêne ni restriction dans les moyens de subsistance.', meaning_type: 'etymology', status: 'active', display_order: 4 },

    { analysis_id: rgdId, concept: 'Pâturage libre', sense: 'laisser paître librement', description: "Laisser le bétail paître où il veut, sans entrave. C'est un acte extérieur et ponctuel : le propriétaire libère ses bêtes pour qu'elles se nourrissent à volonté. Le lien avec l'abondance est direct — on ne laisse paître librement que là où l'herbe est abondante. C'est un geste de confiance dans la générosité du terrain.", meaning_type: 'etymology', status: 'active', display_order: 5 },

    { analysis_id: rgdId, concept: 'Confusion/Mélange', sense: 'se mélanger', description: "État où les éléments se confondent sans distinction claire. Le Lane's donne l'image du lait qui n'a pas encore complètement épaissi — les parties sont mêlées sans être encore fixées. C'est un état intermédiaire et passif, qui s'étend métaphoriquement au doute dans l'opinion et à la confusion mentale.", meaning_type: 'etymology', status: 'active', display_order: 6 },
    { analysis_id: rgdId, concept: 'Confusion/Mélange', sense: 'être confus', description: 'Ne pas savoir distinguer clairement.', meaning_type: 'etymology', status: 'active', display_order: 7 },
    { analysis_id: rgdId, concept: 'Confusion/Mélange', sense: 'douter', description: "Être dans l'incertitude de son jugement.", meaning_type: 'etymology', status: 'active', display_order: 8 },

    { analysis_id: rgdId, concept: 'Lieu verdoyant', sense: 'prairie', description: "Lieu où l'herbage est abondant, une rawda. C'est un sens spatial et permanent : le lieu est défini par sa richesse végétale. Le lien avec l'abondance est direct — la prairie est l'incarnation physique du raghad dans le paysage.", meaning_type: 'etymology', status: 'active', display_order: 9 },
  ];

  const { error: e2 } = await db.from('word_meanings').insert(rgdM);
  console.log('rgd meanings:', e2 ? 'ERROR ' + e2.message : rgdM.length + ' inserted');

  // Check word_key 'k' in V46
  const { data: kData } = await db.from('word_analyses').select('id, word_key, root_ar, total_occurrences').eq('word_key', 'k');
  console.log('\nword_key k:', JSON.stringify(kData));
}
main();
