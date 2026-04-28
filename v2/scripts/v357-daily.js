const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Check schema
  const { data: sample } = await db.from('word_daily').select('*').limit(1);
  if (sample && sample[0]) console.log('columns:', Object.keys(sample[0]));
  
  const dailyPhrases = [
    { analysis_id: 287, phrase_fr: "Les habitants du quartier ont accordé foi à la parole du médiateur." },
    { analysis_id: 287, phrase_fr: "Elle a accordé foi au témoignage de son amie malgré les rumeurs." },
    { analysis_id: 287, phrase_fr: "On n'accorde foi qu'à celui qu'on a éprouvé." },
    { analysis_id: 393, phrase_fr: "Il a agi vite pour réparer la fuite avant l'orage." },
    { analysis_id: 393, phrase_fr: "Plutôt que de se plaindre, elle a agi pour trouver une solution." },
    { analysis_id: 393, phrase_fr: "Agir vaut mieux que promettre." },
    { analysis_id: 326, phrase_fr: "Accompagner une personne âgée aux courses est une œuvre bonne." },
    { analysis_id: 326, phrase_fr: "Il passe ses samedis à faire des œuvres bonnes dans son quartier." },
    { analysis_id: 326, phrase_fr: "Une œuvre bonne, même petite, remet les choses à leur juste place." },
    { analysis_id: 487, phrase_fr: "Le client a payé intégralement la facture avant de partir." },
    { analysis_id: 487, phrase_fr: "Elle tient à payer intégralement ce qu'elle doit, même en retard." },
    { analysis_id: 487, phrase_fr: "Un contrat n'est respecté que si les deux parties paient intégralement ce qui est dû." },
    { analysis_id: 609, phrase_fr: "L'enfant attend sa récompense après avoir rangé sa chambre." },
    { analysis_id: 609, phrase_fr: "La meilleure récompense de l'effort, c'est parfois le travail accompli lui-même." },
    { analysis_id: 609, phrase_fr: "Il a touché sa récompense pour avoir retrouvé le chien perdu." },
    { analysis_id: 930, phrase_fr: "Elle aime passer du temps avec ses grands-parents le dimanche." },
    { analysis_id: 930, phrase_fr: "Il aime son métier parce qu'il y a mis du sens." },
    { analysis_id: 930, phrase_fr: "On aime mieux ce qu'on a choisi librement." },
    { analysis_id: 354, phrase_fr: "Le contremaître est devenu injuste envers les nouveaux employés." },
    { analysis_id: 354, phrase_fr: "Il trouve injuste qu'on punisse toute la classe pour une seule faute." },
    { analysis_id: 354, phrase_fr: "Personne n'aime travailler sous un chef injuste." }
  ];
  
  const { data, error } = await db.from('word_daily').insert(dailyPhrases).select();
  if (error) console.error('err:', error); else console.log('inserted:', data.length);
}
run().catch(console.error);
