const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const fixes = {
  jel: {
    concept: 'Action/Réalisation',
    new_proof: "Le mot jāʿilu est un participe actif construit comme « celui qui place ». Le complément qui suit (ceux qui t'ont suivi au-dessus de ceux qui ont dénié) décrit un positionnement spatial relatif. Parmi les sens listés, « placer » et « établir » sont les plus naturels avec un complément de position au-dessus de quelque chose."
  },
  khlf: {
    concept: 'Divergence/Désaccord',
    new_proof: "Le verbe takhtalifūna est conjugué à l'inaccompli, deuxième personne masculin pluriel, à la forme VIII. La forme VIII (iftaʿala) exprime ici un acte mutuel et actif de différer les uns des autres. Le contexte décrit un état d'opposition entre des groupes, ce qui aligne précisément ce sens."
  }
};

(async () => {
  for (const [k, f] of Object.entries(fixes)) {
    const { data } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 348).eq('word_key', k).single();
    const axes = data.analysis_axes;
    axes.concepts[f.concept].proof_ctx = f.new_proof;
    const { error } = await db.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
    if (error) console.log('ERR', k, error.message);
    else console.log('OK', k, 'fixed');
  }

  // Fix kwn sense_chosen
  const { data: kwn } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 348).eq('word_key', 'kwn').single();
  const ax = kwn.analysis_axes;
  ax.sense_chosen = 'être (verbe incomplet)';
  await db.from('verse_word_analyses').update({ sense_chosen: 'être (verbe incomplet)', analysis_axes: ax }).eq('id', kwn.id);
  console.log('OK kwn sense_chosen aligned');

  // Add VWA for kfr position 21 (second occurrence)
  // First check if it doesn't already exist
  const { data: existing } = await db.from('verse_word_analyses').select('id').eq('verse_id', 348).eq('word_key', 'kfr').eq('position', 21);
  if (!existing || existing.length === 0) {
    // Get kfr position 14 VWA and clone for position 21
    const { data: pos14 } = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', 348).eq('word_key', 'kfr').eq('position', 14).single();
    const axes21 = JSON.parse(JSON.stringify(pos14.analysis_axes));
    // Slightly adjust proof_ctx for the second occurrence
    axes21.concepts['Rejet/Ingratitude'].proof_ctx = "Le verbe kafarū est conjugué à l'accompli, troisième personne masculin pluriel. C'est la seconde occurrence dans le verset, dans la même structure d'opposition au groupe des suiveurs (alladhīna ittabaʿūka). Le contexte impose le même sens d'acte tourné vers l'extérieur de refus de reconnaître.";
    const { error } = await db.from('verse_word_analyses').insert({
      verse_id: 348, word_key: 'kfr', position: 21,
      sense_chosen: 'nier', analysis_axes: axes21
    });
    if (error) console.log('ERR kfr pos21:', error.message);
    else console.log('OK kfr pos21 created');
  } else {
    console.log('kfr pos21 already exists');
  }
})();
