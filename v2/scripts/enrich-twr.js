const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const ANALYSIS_ID = 605; // twr

  // Existing senses (4): mont, montagne, étape, Torah — DO NOT DELETE
  // Get current max display_order
  const { data: existing } = await db.from('word_meanings')
    .select('id, sense, concept, display_order')
    .eq('analysis_id', ANALYSIS_ID).order('display_order');
  console.log('Existants:', existing.length, 'sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  const maxOrder = Math.max(...existing.map(s => s.display_order || 0));
  let order = maxOrder + 1;

  // New senses to ADD (from Lane's Arabic-English Lexicon)
  const newSenses = [
    // Concept: Approche/Proximité
    {
      sense: "tourner autour",
      concept: "Approche/Proximité",
      description: "Acte extérieur et directionnel de se mouvoir autour de quelque chose. Le mouvement est circulaire et exploratoire — on tourne autour sans nécessairement atteindre le centre. C'est un acte continu et spatial. Le Lane's donne : « he went, or hovered, round about it » (ṭāra ḥawlahu).",
    },
    {
      sense: "approcher",
      concept: "Approche/Proximité",
      description: "Se rapprocher du voisinage de quelqu'un. Le Lane's donne : « he will not approach my immediate vicinage » (lā yaṭūrunī). L'approche est le mouvement vers la proximité.",
    },
    {
      sense: "rôder autour",
      concept: "Approche/Proximité",
      description: "Se déplacer autour de quelqu'un en s'en rapprochant. Le Lane's donne : « such a one as it were hovers round about such a one, and draws near to him ».",
    },
    // Concept: Fois/Occurrence
    {
      sense: "une fois",
      concept: "Fois/Occurrence",
      description: "Unité de temps ou d'événement — une occurrence ponctuelle. La fois est un moment délimité, comme un point sur une ligne temporelle. Le Lane's donne : « a time; one time; like the French fois » (ṭawr). L'expression ṭawran baʿda ṭawr (fois après fois) montre la répétition.",
    },
    {
      sense: "plusieurs fois",
      concept: "Fois/Occurrence",
      description: "Répétition d'occurrences. Le pluriel aṭwār désigne les multiples fois. Le Lane's donne : « I came to him several times » (ji'tuhu aṭwāran).",
    },
    // Concept: État/Condition (enrichir l'existant Phase/Développement)
    {
      sense: "état",
      concept: "Phase/Développement",
      description: "Condition dans laquelle se trouve quelqu'un ou quelque chose. Le Lane's donne : « state; condition; quality, mode, or manner; form, or appearance ». Le Coran 71:13 utilise aṭwār pour décrire les divers états de la création humaine.",
    },
    {
      sense: "condition",
      concept: "Phase/Développement",
      description: "Manière d'être, situation. Le Lane's donne : « mankind are of divers sorts and conditions » (an-nāsu aṭwār).",
    },
    {
      sense: "apparence",
      concept: "Phase/Développement",
      description: "Forme visible, aspect extérieur. Le Lane's donne : « of different forms, every one of his proper form ».",
    },
    // Concept: Limite/Mesure
    {
      sense: "limite",
      concept: "Limite/Mesure",
      description: "Borne au-delà de laquelle on ne doit pas aller. La limite est une frontière entre le permis et l'interdit, entre le mesuré et l'excessif. C'est un concept spatial appliqué au comportement. Le Lane's donne : « limit » et « a limit between two things » (ṭawr).",
    },
    {
      sense: "mesure",
      concept: "Limite/Mesure",
      description: "Quantité ou étendue appropriée. Le Lane's donne : « quantity; measure; extent ». L'expression ʿadā ṭawrahu = « il a dépassé sa mesure » montre le lien entre ṭawr et la notion de proportionnalité.",
    },
    {
      sense: "dépasser ses limites",
      concept: "Limite/Mesure",
      description: "Transgresser la frontière de son état propre. Le Lane's donne : « he transgressed the limits of his proper state, or condition » (taʿaddā ṭawrahu).",
    },
    // Concept: Cour/Abords
    {
      sense: "cour d'une maison",
      concept: "Cour/Abords",
      description: "Espace extérieur adjacent à une habitation. Le sens physique et spatial de la racine — l'espace qui entoure et borde. Le Lane's donne : « the yard (fināʾ) of a house » (ṭūr). Ce sens rejoint l'idée d'espace autour/devant.",
    },
    {
      sense: "abords",
      concept: "Cour/Abords",
      description: "L'espace qui jouxte un bâtiment, la partie du terrain qui est coextensive avec la maison. Le Lane's donne : « the part of the fināʾ (exterior court) of a house that is coextensive with the house ».",
    },
    // Concept: Sauvage/Étranger
    {
      sense: "sauvage",
      concept: "Sauvage/Étranger",
      description: "Celui qui s'éloigne des gens, qui fuit la société. L'état de celui qui se tient à l'écart — l'opposé de la proximité sociale. Le Lane's donne : « wild; that estranges himself from mankind » (ṭawriyy). S'applique aux oiseaux et aux hommes.",
    },
    {
      sense: "étranger",
      concept: "Sauvage/Étranger",
      description: "Celui qui vient d'ailleurs, qui n'appartient pas au groupe. Le Lane's donne : « a stranger » (rajulun ṭūriyy).",
    },
  ];

  // INSERT new senses
  const toInsert = newSenses.map(s => ({
    analysis_id: ANALYSIS_ID,
    sense: s.sense,
    concept: s.concept,
    description: s.description,
    meaning_type: 'etymology',
    display_order: order++,
    occ_count: 0,
    occ_refs: [],
  }));

  const { data: inserted, error } = await db.from('word_meanings').insert(toInsert).select('id, sense, concept');
  if (error) { console.error('INSERT ERROR:', error.message); return; }
  console.log('\nInsérés:', inserted.length, 'nouveaux sens');
  inserted.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  // Update analysis_step to 'etymology'
  const { error: updateErr } = await db.from('word_analyses')
    .update({ analysis_step: 'etymology' })
    .eq('id', ANALYSIS_ID);
  if (updateErr) console.error('UPDATE ERROR:', updateErr.message);
  else console.log('\nanalysis_step mis à jour: tagged → etymology');

  // Check final count
  const { count } = await db.from('word_meanings')
    .select('id', { count: 'exact' })
    .eq('analysis_id', ANALYSIS_ID);
  console.log('\nTotal final: ' + count + ' sens pour twr');

  // Add daily phrases if not existing
  const { data: dailyExist } = await db.from('word_daily')
    .select('id')
    .eq('analysis_id', ANALYSIS_ID);
  if (dailyExist && dailyExist.length > 0) {
    console.log('\nPhrases quotidiennes: déjà ' + dailyExist.length + ' existantes, skip');
  } else {
    console.log('\nPhrases quotidiennes: aucune, ajout...');
    // Daily phrases already exist (from screenshot: 3 phrases). Skip.
  }
}
run().catch(console.error);
