const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 373;
  const va = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
  let expl = va.data.translation_explanation;

  // 1. Remplacer "concept" par "axe" (mot autorisé)
  // - "Le concept Commandement/Autorité" → "L'axe Commandement/Autorité"
  // - "Le concept" → "L'axe"
  expl = expl.replace(/\bLe concept\b/g, "L'axe");
  expl = expl.replace(/\bconcept\b/g, "axe");

  // 2. Ajouter phrase d'introduction au début de §DEMARCHE§
  const intro = `§DEMARCHE§

Le verset 80 prolonge directement l'argumentation du verset 79 — la phrase mā kāna li-bashar an... s'étend par wa-lā yaʾmurakum (« et qu'il ne vous ordonne pas »), reliant la même négation modale à un nouveau scénario : l'adoption des anges et des prophètes comme seigneurs. La seconde proposition (interrogative ʾayamurukum) renforce le propos par une question rhétorique sur l'absurdité d'un commandement à recouvrir la vérité après s'être remis. L'analyse mot par mot ci-dessous éclaire les choix lexicaux retenus.

`;

  expl = expl.replace('§DEMARCHE§\n\n', intro);

  await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
  console.log('✅ V80 corrigé : "concept" → "axe", introduction §DEMARCHE§ ajoutée');

  // Verify
  const check = expl.match(/\bconcept\b/g);
  console.log('Reste de "concept" :', check?.length || 0);
}
run().catch(console.error);
