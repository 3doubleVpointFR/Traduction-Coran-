// Pipeline S3:V56 — Étape 2 : enrichissement racines (shdd aid=675, akhr aid=653)
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function enrichRoot(aid, label, newSenses) {
  console.log('\n--- Enrichir ' + label + ' (aid=' + aid + ') ---');
  const { data: existing } = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({ ...s, analysis_id: aid, display_order: maxOrder + 1 + i, meaning_type: 'etymology' }));
  const { error } = await db.from('word_meanings').insert(toInsert);
  if (error) { console.log('ERREUR insert ' + label + ':', error.message); return false; }
  console.log('Insert: ' + toInsert.length + ' sens OK -> ' + (existing.length + toInsert.length) + ' total');

  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', aid);
  return true;
}

async function run() {
  // shdd aid=675 — actuellement 1 sens "serrer" (concept "Force")
  await enrichRoot(675, 'shdd (ش د د)', [
    {
      concept: 'Force/Solidité', sense: "lier fortement",
      description: "Acte extérieur de serrer un lien — corde, fil, nœud — de sorte qu'il soit solide et résiste à la rupture. Le Lane's donne shadd al-ʿiṣābah = le lieu où l'on serre le bandeau. L'action sort de celui qui lie et atteint l'objet lié — c'est directionnel et produit un état de fermeté durable."
    },
    {
      concept: 'Force/Solidité', sense: "affermir",
      description: "Rendre ferme, consistant, solide. Extension du sens de serrer vers la qualité interne de fermeté qu'on donne à une chose."
    },
    {
      concept: 'Intensité/Sévérité', sense: "intense",
      description: "État de ce qui atteint un haut degré dans sa nature. Le Lane's donne shadīd = qualité poussée à son intensité maximale. C'est un état mesurable de l'objet lui-même — une punition intense, un froid intense, un vent intense. La réalité décrite est caractérisée par sa force, sa densité, ou sa dureté perçue."
    },
    {
      concept: 'Intensité/Sévérité', sense: "sévère",
      description: "Qualité de ce qui est dur à subir, pesant, rigoureux. Le Lane's donne shadīd comme « dur à supporter, pesant, violent »."
    },
    {
      concept: 'Intensité/Sévérité', sense: "rigoureux",
      description: "Qualité de ce qui applique une règle sans adoucissement ni tolérance. Le Lane's inclut « strict, rigoureux » dans la liste des sens de shadīd."
    },
    {
      concept: 'Attaque/Assaut', sense: "charger (en bataille)",
      description: "Acte extérieur de se jeter sur un adversaire avec force. Le Lane's donne shadda ʿalā al-ʿaduww = il chargea sur l'ennemi. C'est un mouvement directionnel qui sort de l'attaquant et atteint l'assailli — ponctuel et violent."
    },
    {
      concept: 'Attaque/Assaut', sense: "assaillir",
      description: "Attaquer avec vigueur et soudaineté."
    },
    {
      concept: 'Course/Hâte', sense: "courir",
      description: "Acte extérieur de mouvement rapide. Le Lane's donne shadda = il courut, se hâta. Le corps avance avec intensité — c'est un acte ponctuel ou continu."
    },
    {
      concept: 'Course/Hâte', sense: "se hâter",
      description: "Être rapide dans l'action."
    },
    {
      concept: 'Avarice/Tenacité', sense: "avare",
      description: "État intérieur d'un cœur qui retient ses biens. Le Lane's donne shadīd comme synonyme de shaḥīḥ = avare, tenace, avide. La tenacité est un repli intérieur — celui qui tient serré ce qu'il a, ne le lâche pas."
    },
    {
      concept: 'Maturité/Plénitude', sense: "âge de force",
      description: "État de plénitude physique et mentale. Le Lane's donne ashudd = force de l'âge, entre 18 et 40 ans selon les sources. C'est l'état intérieur d'un être qui a atteint la consistance de sa maturité."
    },
    {
      concept: 'Maturité/Plénitude', sense: "maturité",
      description: "Plénitude atteinte par l'expérience et la croissance."
    }
  ]);

  // akhr aid=653 — actuellement 4 sens "autre/dernier/retarder/au-delà" (concept "Altérité/Délai")
  // Enrichir : séparer les concepts + ajouter "autre monde" et "fin/extrémité"
  await enrichRoot(653, 'akhr (أ خ ر)', [
    {
      concept: 'Postériorité/Fin', sense: "fin d'une durée",
      description: "Point terminal d'une période — le Lane's donne ākhir = la fin, le terme, ce qui vient en dernier. C'est une position temporelle définie : le moment où une réalité cesse ou s'achève. Réalité identifiable et située."
    },
    {
      concept: 'Postériorité/Fin', sense: "arrière (d'une chose)",
      description: "Partie située derrière — le Lane's donne ukhur et mu'akhkhar = le derrière, la partie postérieure par opposition à la partie avant (qudum, muqaddam). C'est une position spatiale dans un objet."
    },
    {
      concept: 'Délai/Report', sense: "différer",
      description: "Acte extérieur de repousser une chose dans le temps. Le Lane's donne akhkhara (forme II) = faire reculer, retarder, reporter, remettre à plus tard. L'action sort de celui qui diffère et s'applique à l'objet différé. C'est intentionnel et directionnel."
    },
    {
      concept: 'Délai/Report', sense: "reculer",
      description: "Extension — faire revenir en arrière dans l'ordre temporel ou spatial."
    },
    {
      concept: 'Délai/Report', sense: "accorder un délai",
      description: "Le Lane's donne akhkharanī ilā muddah = il m'a accordé un délai jusqu'à un terme. La forme II peut signifier concéder du temps supplémentaire à quelqu'un."
    },
    {
      concept: 'Autre/Alternative', sense: "un parmi deux",
      description: "Le Lane's donne ākhar = un des deux, l'autre dans une paire. Ce n'est pas « différent » au sens de ghayr, mais « l'autre membre d'un couple » — l'un fait ceci, l'autre fait cela."
    },
    {
      concept: 'Monde à venir/Vie dernière', sense: "al-ākhirah",
      description: "Le Lane's donne al-ākhirah comme contraction de al-dār al-ākhirah = la demeure dernière, ou al-ḥayāh al-ākhirah = la vie dernière. C'est une réalité nommée dans le Coran : l'existence qui vient après celle-ci. Opposée à al-dunyā (la vie proche). C'est un lieu-temps identifié comme définitif."
    },
    {
      concept: 'Monde à venir/Vie dernière', sense: "la vie dernière",
      description: "L'état d'existence postérieur, permanent selon le Lane's : « la demeure dont la durée ne s'achève jamais »."
    }
  ]);

  // Update total_occurrences for shdd if missing (check)
  const { data: shddCheck } = await db.from('word_analyses').select('total_occurrences').eq('id', 675).single();
  console.log('\nshdd total_occurrences: ' + shddCheck.total_occurrences);
  const { data: akhrCheck } = await db.from('word_analyses').select('total_occurrences').eq('id', 653).single();
  console.log('akhr total_occurrences: ' + akhrCheck.total_occurrences);

  console.log('\n=== ENRICHISSEMENTS TERMINÉS ===');
}

run().catch(e => { console.error(e); process.exit(1); });
