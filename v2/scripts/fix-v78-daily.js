const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const analysis_id = 499; // lwy

  const { data: existing } = await db.from('word_daily').select('id').eq('analysis_id', analysis_id);
  if (existing && existing.length > 0) {
    console.log('word_daily lwy déjà peuplé (' + existing.length + ' entrées)');
    return;
  }

  await db.from('word_daily').insert([
    {
      analysis_id,
      phrase_fr: "Il a tordu le fil de fer pour fermer le paquet.",
      phrase_phon: "",
      phrase_ar: "",
      explanation: "Usage concret de lawā : la torsion d'un objet linéaire pour lui donner une nouvelle forme fonctionnelle.",
      display_order: 1
    },
    {
      analysis_id,
      phrase_fr: "Elle a tordu ses paroles pour que personne ne comprenne ce qu'elle voulait dire vraiment.",
      phrase_phon: "",
      phrase_ar: "",
      explanation: "Extension métaphorique (usage coranique) : tordre la parole pour falsifier ou travestir son sens.",
      display_order: 2
    },
    {
      analysis_id,
      phrase_fr: "Le marin a tordu la corde plusieurs fois avant de fixer le voilier au quai.",
      phrase_phon: "",
      phrase_ar: "",
      explanation: "Autre usage concret : la torsion répétée comme préparation à une action (attacher, sécuriser).",
      display_order: 3
    }
  ]);

  console.log('word_daily lwy : 3 phrases quotidiennes ajoutées ✅');
}

run().catch(console.error);
