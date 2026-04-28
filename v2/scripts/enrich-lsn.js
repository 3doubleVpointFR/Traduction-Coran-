const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const analysis_id = 1298;

  // 1. Supprimer les anciens sens
  const del = await db.from('word_meanings').delete().eq('analysis_id', analysis_id);
  console.log('Anciens sens supprimés');

  // 2. Nouveaux sens extraits du Lane's pour ل س ن (lsn), regroupés en 5 concepts
  const senses = [
    // CONCEPT 1 — Langue/Organe (référence anatomique concrète)
    {
      concept: 'Langue/Organe',
      sense: 'langue',
      description: "Organe physique dans la bouche servant à produire la parole et à goûter. C'est le sens primaire concret de la racine — l'organe charnu, identifiable, dont la fonction est articulatoire. Tout autre sens dérive métonymiquement de cet organe.",
      display_order: 1,
      status: 'retenu'
    },
    {
      concept: 'Langue/Organe',
      sense: 'organe de la parole',
      description: '',
      display_order: 2,
      status: null
    },
    // CONCEPT 2 — Parole/Discours (extension du physique au produit de l'organe)
    {
      concept: 'Parole/Discours',
      sense: 'parole',
      description: "Ce qui sort de la langue — le discours articulé, le propos tenu. Extension métonymique de l'organe à son produit. C'est un acte qui sort de celui qui parle et atteint ceux qui écoutent — acte extérieur, directionnel, ponctuel ou habituel selon l'usage.",
      display_order: 3,
      status: 'retenu'
    },
    {
      concept: 'Parole/Discours',
      sense: 'propos tenus',
      description: '',
      display_order: 4,
      status: null
    },
    // CONCEPT 3 — Langage/Mode d'expression (extension systémique)
    {
      concept: 'Langage/Mode d\'expression',
      sense: 'langage',
      description: "Le système complet d'expression d'une communauté — ensemble de mots, de tournures et d'usages partagés. Extension de la parole individuelle à la structure collective qui la rend possible. Dans le Coran, lisān peut désigner la langue arabe, hébraïque, syriaque, etc., comme système distinctif d'une communauté.",
      display_order: 5,
      status: 'retenu'
    },
    {
      concept: 'Langage/Mode d\'expression',
      sense: 'idiome',
      description: '',
      display_order: 6,
      status: null
    },
    // CONCEPT 4 — Éloquence/Clarté (qualité de la parole)
    {
      concept: 'Éloquence/Clarté',
      sense: 'éloquence',
      description: "Qualité de la parole qui la rend claire, articulée et convaincante. Dérivée de lasan (chasteté ou clarté du discours dans le Lane's), cette acception porte sur la maîtrise expressive — un attribut jugé positivement, acquis par exercice.",
      display_order: 7,
      status: 'retenu'
    },
    {
      concept: 'Éloquence/Clarté',
      sense: 'clarté du discours',
      description: '',
      display_order: 8,
      status: null
    },
    // CONCEPT 5 — Renommée/Rumeur (extension encore plus éloignée, mais attestée)
    {
      concept: 'Renommée/Rumeur',
      sense: 'renommée',
      description: "Le bruit qui court sur quelqu'un — ce que les langues disent d'une personne. Le Lane's atteste lisān = khabar (nouvelle, information, rumeur). Extension collective : ce que circulent les langues devient une réputation qui précède la personne.",
      display_order: 9,
      status: null
    },
    {
      concept: 'Renommée/Rumeur',
      sense: 'message transmis',
      description: '',
      display_order: 10,
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

  // 3. Mettre à jour word_analyses
  await db.from('word_analyses').update({
    analysis_step: 'enriched',
    root_meaning: 'langue (organe) ; parole ; langage ; éloquence'
  }).eq('id', analysis_id);

  const r = await db.from('word_meanings').select('sense, concept, status').eq('analysis_id', analysis_id).order('display_order');
  console.log('\n[lsn] ' + r.data.length + ' sens → 5 concepts');
  const concepts = {};
  r.data.forEach(m => { concepts[m.concept] = (concepts[m.concept] || 0) + 1; });
  Object.entries(concepts).forEach(([c, n]) => console.log('  ' + c + ' (' + n + ' sens)'));

  // 4. total_occurrences — déjà 25, OK
  console.log('\nlsn enrichi ✅ — 25 occurrences coraniques (déjà en base)');
}

run().catch(console.error);
