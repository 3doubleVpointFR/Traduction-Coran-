const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const analysis_id = 1300; // drs

  await db.from('word_meanings').delete().eq('analysis_id', analysis_id);
  console.log('Anciens sens drs supprimés');

  const senses = [
    // CONCEPT 1 — Étude/Lecture répétée (sens premier coranique : tadrusūn / darasa al-kitāb)
    {
      concept: 'Étude/Lecture répétée',
      sense: 'étudier',
      description: "Acte de lire et relire un texte avec effort pour le retenir et le maîtriser. La racine d-r-s appliquée à un livre désigne précisément la lecture répétée et soutenue qui mène à l'apprentissage par cœur — Lane's : « to read, or to read repeatedly, or to study, in order to remember ; or to read and learn ». Acte volontaire et durable qui sort de l'étudiant et porte sur un texte fixe — l'étude n'est pas l'enseignement (qui sort vers autrui) ni la simple lecture (qui peut être unique).",
      display_order: 1,
      status: 'retenu'
    },
    {
      concept: 'Étude/Lecture répétée',
      sense: 'lire et relire',
      description: '',
      display_order: 2,
      status: null
    },
    {
      concept: 'Étude/Lecture répétée',
      sense: 'apprendre par cœur',
      description: '',
      display_order: 3,
      status: null
    },
    {
      concept: 'Étude/Lecture répétée',
      sense: 'étudier ensemble',
      description: '',
      display_order: 4,
      status: null
    },
    {
      concept: 'Étude/Lecture répétée',
      sense: 'lieu d\'étude',
      description: '',
      display_order: 5,
      status: null
    },
    // CONCEPT 2 — Effacement/Trace estompée (sens premier physique : darasa al-rasm)
    {
      concept: 'Effacement/Trace estompée',
      sense: 'être effacé',
      description: "Disparition progressive d'une marque ou d'une trace par usure du temps, vent ou sable qui recouvrent — Lane's : « It (a trace, or mark) became effaced, erased, rased, or obliterated ». État résultant d'un processus passif : la trace ne se détruit pas activement, elle se laisse couvrir et s'estomper. Curieusement coréférent avec le sens d'étude : on use un texte par lecture comme on use une trace par exposition.",
      display_order: 6,
      status: null
    },
    {
      concept: 'Effacement/Trace estompée',
      sense: 'maison délaissée',
      description: '',
      display_order: 7,
      status: null
    },
    {
      concept: 'Effacement/Trace estompée',
      sense: 'disparition progressive',
      description: '',
      display_order: 8,
      status: null
    },
    // CONCEPT 3 — Battage/Foulage du grain (sens concret agricole)
    {
      concept: 'Battage/Foulage du grain',
      sense: 'battre le grain',
      description: "Action concrète de fouler ou battre le blé pour en séparer le grain de la paille — extension physique de la racine au domaine agricole. Le mouvement répété du battage rejoint l'idée de répétition présente dans l'étude : on revient sur un même point jusqu'à en extraire ce qu'il contient. Lane's : darīs « dry threshed crop, Alexandrian trefoil ».",
      display_order: 9,
      status: null
    },
    {
      concept: 'Battage/Foulage du grain',
      sense: 'paille foulée',
      description: '',
      display_order: 10,
      status: null
    },
    // CONCEPT 4 — Vêtement usé (extension à l'objet usagé)
    {
      concept: 'Vêtement usé',
      sense: 'vêtement usé',
      description: "Vêtement vieilli, élimé par l'usage répété — dirs (دِرْس) désigne l'habit qui a perdu son apprêt initial et porte les traces du frottement. Extension de la racine à l'objet qui a subi répétition d'usage. Comme la trace effacée, le vêtement usé porte la marque du temps — mais ici c'est l'objet lui-même qui s'est altéré, pas la trace qu'il laisse.",
      display_order: 11,
      status: null
    },
    {
      concept: 'Vêtement usé',
      sense: 'habit ancien',
      description: '',
      display_order: 12,
      status: null
    },
    // CONCEPT 5 — Sens isolés féminins
    {
      concept: 'Sens isolé/Menstruations',
      sense: 'femme en menstruations',
      description: "Sens tropique attesté dans le Lane's : dāris désigne tropiquement une femme ou une jeune fille qui a ses menstruations. Sens isolé sans rapport direct avec le verset coranique. Mention pour exhaustivité du Lane's.",
      display_order: 13,
      status: null
    }
  ];

  for (const s of senses) {
    await db.from('word_meanings').insert({
      analysis_id,
      concept: s.concept,
      sense: s.sense,
      description: s.description,
      display_order: s.display_order,
      status: s.status,
      meaning_type: 'etymology',
      occ_count: 0,
      occ_refs: []
    });
  }

  await db.from('word_analyses').update({
    analysis_step: 'enriched',
    root_meaning: 'étudier (lire/relire) ; effacer une trace ; battre le grain ; vêtement usé'
  }).eq('id', analysis_id);

  const r = await db.from('word_meanings').select('sense, concept, status').eq('analysis_id', analysis_id).order('display_order');
  console.log('\n[drs] ' + r.data.length + ' sens → 5 concepts');
  const concepts = {};
  r.data.forEach(m => { concepts[m.concept] = (concepts[m.concept] || 0) + 1; });
  Object.entries(concepts).forEach(([c, n]) => console.log('  ' + c + ' (' + n + ' sens)'));
  console.log('\ndrs enrichi ✅ — 6 occurrences coraniques (déjà en base)');
}

run().catch(console.error);
