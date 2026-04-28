const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const phrases = [
    { analysis_id: 287, french: "Les habitants du quartier ont accordé foi à la parole du médiateur.", sense: "avoir la foi" },
    { analysis_id: 287, french: "Elle a accordé foi au témoignage de son amie malgré les rumeurs.", sense: "avoir la foi" },
    { analysis_id: 287, french: "On n'accorde foi qu'à celui qu'on a éprouvé.", sense: "avoir la foi" },
    { analysis_id: 393, french: "Il a agi vite pour réparer la fuite avant l'orage.", sense: "agir" },
    { analysis_id: 393, french: "Plutôt que de se plaindre, elle a agi pour trouver une solution.", sense: "agir" },
    { analysis_id: 393, french: "Agir vaut mieux que promettre.", sense: "agir" },
    { analysis_id: 326, french: "Accompagner une personne âgée aux courses est une œuvre bonne.", sense: "oeuvre bonne" },
    { analysis_id: 326, french: "Il passe ses samedis à faire des œuvres bonnes dans son quartier.", sense: "oeuvre bonne" },
    { analysis_id: 326, french: "Une œuvre bonne, même petite, remet les choses à leur juste place.", sense: "oeuvre bonne" },
    { analysis_id: 487, french: "Le client a payé intégralement la facture avant de partir.", sense: "payer intégralement" },
    { analysis_id: 487, french: "Elle tient à payer intégralement ce qu'elle doit, même en retard.", sense: "payer intégralement" },
    { analysis_id: 487, french: "Un contrat n'est respecté que si les deux parties paient intégralement ce qui est dû.", sense: "payer intégralement" },
    { analysis_id: 609, french: "L'enfant attend sa récompense après avoir rangé sa chambre.", sense: "récompense" },
    { analysis_id: 609, french: "La meilleure récompense de l'effort, c'est parfois le travail accompli lui-même.", sense: "récompense" },
    { analysis_id: 609, french: "Il a touché sa récompense pour avoir retrouvé le chien perdu.", sense: "récompense" },
    { analysis_id: 930, french: "Elle aime passer du temps avec ses grands-parents le dimanche.", sense: "aimer" },
    { analysis_id: 930, french: "Il aime son métier parce qu'il y a mis du sens.", sense: "aimer" },
    { analysis_id: 930, french: "On aime mieux ce qu'on a choisi librement.", sense: "aimer" },
    { analysis_id: 354, french: "Le contremaître est devenu injuste envers les nouveaux employés.", sense: "injuste" },
    { analysis_id: 354, french: "Il trouve injuste qu'on punisse toute la classe pour une seule faute.", sense: "injuste" },
    { analysis_id: 354, french: "Personne n'aime travailler sous un chef injuste.", sense: "injuste" }
  ];
  
  const { data, error } = await db.from('word_daily').insert(phrases).select();
  if (error) console.error('err:', error); else console.log('inserted:', data.length);
}
run().catch(console.error);
