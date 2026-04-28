const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  const analysisId = 690;
  const { data: existing } = await db.from('word_meanings').select('display_order').eq('analysis_id', analysisId).order('display_order', { ascending: false });
  let order = (existing[0]?.display_order || 0);

  const newSenses = [
    {
      concept: 'Couleur/Chameau',
      sense: 'Blanc teinté de rouge',
      description: "Couleur attestée chez les chameaux — un blanc mêlé de la teinte rougeâtre appelée shuqra. C'est une couleur concrète, observable, qui désigne une qualité physique d'un être vivant. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863) cette couleur est aussi décrite comme un blanc terne, ou un blanc avec une légère obscurité, ou tirant vers le jaune."
    },
    { concept: 'Couleur/Chameau', sense: 'Blanc terne' },
    { concept: 'Couleur/Chameau', sense: 'Blanc tirant vers le jaune' },
    {
      concept: 'Couleur/Animal',
      sense: 'Gazelle ou taureau de teinte adma',
      description: "Désigne aussi une gazelle, une antilope ou un taureau (sauvage) ayant la teinte appelée adma. Extension du sens de couleur à d'autres animaux."
    },
    {
      concept: 'Couleur/Cheveux',
      sense: 'Cheveux blancs',
      description: "Se dit d'un homme ayant les cheveux blancs (rajulun aʿyasu sh-shaʿari). Extension à la couleur des cheveux."
    },
    {
      concept: 'Trace/Empreinte',
      sense: 'Trace blanche',
      description: "Désigne une marque, trace, relique ou vestige blanc (rasmun aʿyasu). C'est une trace visible et persistante, identifiable par sa couleur."
    },
    {
      concept: 'Insecte',
      sense: 'Sauterelle femelle',
      description: "L-ʿaysāʾ désigne la sauterelle femelle. Sens isolé, sans rapport apparent avec les autres."
    }
  ];

  for (const s of newSenses) {
    order++;
    const { error } = await db.from('word_meanings').insert({
      analysis_id: analysisId,
      sense: s.sense,
      status: 'nul',
      meaning_type: 'etymology',
      description: s.description || '',
      concept: s.concept,
      display_order: order
    });
    if (error) console.log('ERR:', s.sense, error.message);
    else console.log('OK:', s.sense);
  }
  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', analysisId);
  console.log('analysis_step updated to etymology');
})();
