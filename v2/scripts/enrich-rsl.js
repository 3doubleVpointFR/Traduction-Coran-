const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const analysis_id = 688; // rsl

  // Delete existing and re-insert
  const { error: delErr } = await db.from('word_meanings').delete().eq('analysis_id', analysis_id);
  if (delErr) { console.log('Delete error:', delErr); return; }

  const meanings = [
    // Concept 1: Envoi/Transmission
    { analysis_id, concept: 'Envoi/Transmission', sense: 'envoyer', status: null, display_order: 1, meaning_type: 'etymology',
      description: "Acte exterieur directionnel et ponctuel : faire partir quelqu'un ou quelque chose vers une destination. Le mouvement sort de l'envoyeur et atteint le destinataire. Le Lane's donne la forme IV arsala : « the act of sending ». L'envoi implique une separation — ce qui est envoye quitte celui qui envoie pour aller vers l'autre." },
    { analysis_id, concept: 'Envoi/Transmission', sense: 'envoyer un messager', status: null, display_order: 2, meaning_type: 'etymology',
      description: "Faire partir une personne chargee d'un message. Le Lane's cite : « arsala ilayhi : he sent to him a message, or a messenger »." },
    { analysis_id, concept: 'Envoi/Transmission', sense: 'echanger des messages', status: null, display_order: 3, meaning_type: 'etymology',
      description: "Forme III rasalahu : correspondre, s'envoyer mutuellement des lettres ou messages." },
    { analysis_id, concept: 'Envoi/Transmission', sense: 'message', status: null, display_order: 4, meaning_type: 'etymology',
      description: "Le contenu transmis. Le Lane's donne risalah : « a message; and a letter; a communication sent from one person to another »." },

    // Concept 2: Messager/Porteur
    { analysis_id, concept: 'Messager/Porteur', sense: 'messager', status: null, display_order: 5, meaning_type: 'etymology',
      description: "Celui qui est envoye avec un message. Le messager est l'instrument de la transmission — il porte en lui le contenu et le transmet a l'autre. Le Lane's donne rasul : « one sent with a message ». Le Lane's precise selon IAmb : « one who carries on by consecutive progressions the relation of the tidings of him who has sent him ». Le messager est defini par sa relation a l'envoyeur — il n'agit pas de sa propre initiative mais transmet ce qu'on lui a confie." },
    { analysis_id, concept: 'Messager/Porteur', sense: 'envoye', status: null, display_order: 6, meaning_type: 'etymology',
      description: "Participe passif de sens : celui qui a ete envoye (mafoul). Le Lane's donne : « of the measure faoul in the sense of mafoul »." },

    // Concept 3: Lacher/Liberer
    { analysis_id, concept: 'Lacher/Liberer', sense: 'lacher', status: null, display_order: 7, meaning_type: 'etymology',
      description: "Acte exterieur ponctuel de relacher ce qui etait retenu. Le mouvement va de la contrainte vers la liberte. Le Lane's donne pour la forme IV arsala : « the discharging a thing; as, for instance, an arrow from a bow; and water from a vessel. The launching forth a ship or boat; letting it go; letting it take its course ». Le lacher implique qu'on cesse de retenir — l'objet part de lui-meme une fois libere." },
    { analysis_id, concept: 'Lacher/Liberer', sense: 'liberer', status: null, display_order: 8, meaning_type: 'etymology',
      description: "Relacher ce qui etait contraint. Le Lane's cite : « letting it take its course »." },
    { analysis_id, concept: 'Lacher/Liberer', sense: 'lancer', status: null, display_order: 9, meaning_type: 'etymology',
      description: "Projeter vers l'avant. Le Lane's cite le lancer d'une fleche ou le depart d'un cheval de course." },

    // Concept 4: Douceur/Aisance
    { analysis_id, concept: 'Douceur/Aisance', sense: "etre facile dans l'allure", status: null, display_order: 10, meaning_type: 'etymology',
      description: "Etat interieur de facilite dans le mouvement. La douceur n'est pas dirigee vers l'exterieur — elle caracterise la maniere d'etre de celui qui la possede. Le Lane's donne le sens premier de la forme I rasila : « he (a camel) was, or became, easy in pace ». La racine porte l'idee fondamentale de relachement, d'absence de tension — ce qui est rasl coule naturellement sans effort." },
    { analysis_id, concept: 'Douceur/Aisance', sense: 'agir avec douceur et calme', status: null, display_order: 11, meaning_type: 'etymology',
      description: "Forme V tarassala : agir avec douceur, sans hate, avec gravite. Le Lane's donne : « he acted gently, and deliberately, and with gravity »." },
    { analysis_id, concept: 'Douceur/Aisance', sense: 'reciter posement', status: null, display_order: 12, meaning_type: 'etymology',
      description: "Forme II tarsil dans la lecture : prononcer sans hate. Le Lane's donne : « easy utterance; without haste »." },

    // Concept 5: Pendaison/Relachement physique
    { analysis_id, concept: 'Pendaison/Relachement', sense: 'cheveux pendants et lisses', status: null, display_order: 13, meaning_type: 'etymology',
      description: "Sens physique concret de la racine. Le Lane's donne : « it (hair) became lank, not crisp; or lank and pendent; or long, and lank or pendent ». Ce sens illustre l'idee fondamentale de relachement : ce qui pend tombe naturellement sous l'effet de la gravite, sans tension ni resistance." },
    { analysis_id, concept: 'Pendaison/Relachement', sense: 'pendre', status: null, display_order: 14, meaning_type: 'etymology',
      description: "Retomber librement. Meme idee de relachement que les cheveux lisses." },

    // Concept 6: Troupeau/Groupe
    { analysis_id, concept: 'Troupeau/Groupe', sense: 'troupeau de chameaux', status: null, display_order: 15, meaning_type: 'etymology',
      description: "Groupe d'animaux qui se deplacent ensemble. Le Lane's donne rasal : « a drove, or herd, or a distinct collection or number, of camels, and of sheep; from ten to twenty-five ». L'idee de succession et de file ordonnee relie ce sens au concept d'envoi — les animaux sont « envoyes » les uns apres les autres." },
    { analysis_id, concept: 'Troupeau/Groupe', sense: 'groupe de personnes', status: null, display_order: 16, meaning_type: 'etymology',
      description: "Extension metaphorique du troupeau. Le Lane's cite : « applied to a company of men as being likened to a drove of camels »." },

    // Concept 7: Pluie/Eau
    { analysis_id, concept: 'Pluie/Eau', sense: 'pluie envoyee', status: null, display_order: 17, meaning_type: 'etymology',
      description: "Sens derive de l'envoi applique a l'eau. Le Lane's mentionne l'eau lachee, la pluie qui descend. L'eau est « envoyee » du ciel vers la terre — meme structure que l'envoi d'un messager." },
  ];

  const { data, error } = await db.from('word_meanings').insert(meanings).select('id');
  if (error) console.log('Insert error:', error);
  else console.log('Inserted', data.length, 'meanings for rsl');

  // Update analysis_step
  const { error: e2 } = await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 688);
  if (e2) console.log('Update step error:', e2);
  else console.log('Updated rsl analysis_step to etymology');
}

run().catch(console.error);
