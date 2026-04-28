const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const phrases = [
    { analysis_id: 286, french: "Ceux qui arrivent à l'heure auront les meilleures places.", sense: "non trouvé" },
    { analysis_id: 286, french: "Celui qui pose la question mérite une réponse claire.", sense: "non trouvé" },
    { analysis_id: 286, french: "Ceux qui travaillent ensemble finissent plus vite.", sense: "non trouvé" }
  ];
  const { data, error } = await db.from('word_daily').insert(phrases).select();
  if (error) console.error(error); else console.log('inserted:', data.length);
}
run().catch(console.error);
