const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ajr analysis_id = 609
  const { data: existing } = await db.from('word_meanings').select('*').eq('analysis_id', 609).order('display_order');
  console.log('Existing sens for ajr:');
  existing.forEach(x => console.log(`  id=${x.id} [${x.concept}] ${x.sense} (order=${x.display_order})`));
  
  // Max display_order
  const maxOrder = Math.max(...existing.map(x => x.display_order || 0));
  console.log('Max order:', maxOrder);
  
  // Add new senses while KEEPING existing
  // The first sense of Rétribution/Salaire is "récompense" — let's enrich its description philosophique
  // But rule says don't modify existing when ≥ 5. We're < 5, we can add. Let's add:
  // - "louer (bien)" in a new concept "Location/Loyer"
  // - "donner en location" same concept
  // - "être loué pour un travail" same concept
  // - "aumône rétribuée" new concept "Aumône méritoire"
  
  const newSenses = [
    {
      analysis_id: 609,
      concept: 'Rétribution/Salaire',
      sense: 'louange',
      status: 'nul',
      display_order: maxOrder + 1,
      meaning_type: 'etymology',
      description: 'Sens tropical attesté dans les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) : bonne renommée, éloge. Sens figuré très rare, dérivé de la notion de récompense morale.'
    },
    {
      analysis_id: 609,
      concept: 'Location/Loyer',
      sense: 'donner en location',
      status: 'nul',
      display_order: maxOrder + 2,
      meaning_type: 'etymology',
      description: 'Acte économique par lequel on cède l\'usage d\'un bien (maison, esclave) à quelqu\'un d\'autre en échange d\'un paiement. C\'est un acte extérieur, contractuel, entre deux parties. Contrairement à la récompense qui est donnée gratuitement comme contrepartie de mérite, la location est un échange commercial défini à l\'avance.'
    },
    {
      analysis_id: 609,
      concept: 'Location/Loyer',
      sense: 'loyer',
      status: 'nul',
      display_order: maxOrder + 3,
      meaning_type: 'etymology',
      description: 'Somme versée pour l\'usage d\'un bien.'
    }
  ];
  
  const { data, error } = await db.from('word_meanings').insert(newSenses).select();
  if (error) { console.error('ERR', error); return; }
  console.log('Inserted:', data.length, 'new senses');
  
  // Update analysis_step to etymology
  const { error: e2 } = await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 609);
  if (e2) console.error('step err', e2);
  else console.log('ajr step → etymology');
}
run().catch(console.error);
