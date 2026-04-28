// Enrichissement racines S3:V64
// - shrk : passer de 3 à 8 sens (Lane's complet)
// - shyy : créer + sens
// - axdh : créer + sens
// - slm : ajouter sens manquants autour de 'islām', 'se remettre', 'se rendre', 'paix offerte'
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function ensureAnalysis(key, root_ar, total_occurrences) {
  const { data: existing } = await db.from('word_analyses').select('id').eq('word_key', key);
  if (existing && existing.length) return existing[0].id;
  const { data: inserted, error } = await db.from('word_analyses').insert({
    word_key: key,
    root_ar,
    root_phon: key,
    root_meaning: '',
    model_used: 'claude-sonnet-4-6-pipeline-maison',
    prompt_version: 'v3',
    analysis_step: 'etymology',
    total_occurrences,
    validated: true
  }).select('id').single();
  if (error) throw error;
  console.log('  CREÉ word_analyses ' + key + ' (aid=' + inserted.id + ')');
  return inserted.id;
}

async function hasSense(aid, sense) {
  const { data } = await db.from('word_meanings').select('id').eq('analysis_id', aid).eq('sense', sense);
  return data && data.length > 0;
}

async function addSense(aid, obj) {
  const exists = await hasSense(aid, obj.sense);
  if (exists) {
    console.log('  [SKIP] ' + obj.sense + ' déjà présent');
    return;
  }
  const { error } = await db.from('word_meanings').insert({ analysis_id: aid, ...obj });
  if (error) { console.log('  [ERR] ' + obj.sense + ' — ' + error.message); throw error; }
  console.log('  [ADD] ' + obj.sense + ' (' + obj.concept + ')');
}

async function run() {
  console.log('═══ ENRICHISSEMENT S3:V64 ═══\n');

  // ── SHRK ──────────────────────────────────────────────────────────────────
  console.log('─── shrk (ش ر ك) ───');
  const shrkId = await ensureAnalysis('shrk', 'ش ر ك', 168);
  // Sens existants : associer, polythéisme, partenaire (tous dans "Association/Polythéisme")
  // Compléter : partager, participer, copartager, copartenaire, enchevêtrer (routes), snare/filet, lanière de sandale
  const shrkSenses = [
    { sense: 'partager', concept: 'Partage/Copartenariat', status: 'probable', display_order: 10, meaning_type: 'etymology',
      description: "Partager une chose avec un autre — acte objectif et extérieur qui consiste à diviser un bien ou une activité entre plusieurs détenteurs. C'est permanent comme relation tant que le partage dure, directionnel lorsque l'acte de partage est en cours." },
    { sense: 'participer', concept: 'Partage/Copartenariat', status: 'probable', display_order: 11, meaning_type: 'etymology',
      description: "Prendre part à une chose avec d'autres — contribuer activement à une entreprise commune." },
    { sense: 'être copartenaire', concept: 'Partage/Copartenariat', status: 'probable', display_order: 12, meaning_type: 'etymology',
      description: "État d'être partie prenante d'une même chose avec un autre — état permanent de copartage d'un bien ou d'un droit." },
    { sense: 'donner une part', concept: 'Partage/Copartenariat', status: 'peu_probable', display_order: 13, meaning_type: 'etymology',
      description: "Acte de conférer à autrui une portion d'un bien ou d'une fonction." },
    { sense: 'enlacer', concept: 'Enchevêtrement/Piège', status: 'nul', display_order: 14, meaning_type: 'etymology',
      description: "Acte de nouer, de prendre au piège, d'entrelacer des liens autour d'une cible. D'après le Lane's, sharak désigne aussi les filets et pièges du chasseur." },
    { sense: 'piège', concept: 'Enchevêtrement/Piège', status: 'nul', display_order: 15, meaning_type: 'etymology',
      description: "Filet, collet, instrument de chasse — réalité physique concrète." },
    { sense: 'lanière de sandale', concept: 'Lanière', status: 'nul', display_order: 16, meaning_type: 'etymology',
      description: "D'après le Lane's, sharāk désigne la lanière de la sandale qui passe sur le dos du pied — sens concret physique." }
  ];
  for (const s of shrkSenses) await addSense(shrkId, s);

  // ── SHYY (ش ي ء) ──────────────────────────────────────────────────────────
  console.log('\n─── shyy (ش ي ء) ───');
  const shyyId = await ensureAnalysis('shyy', 'ش ي ء', 519);
  const shyySenses = [
    { sense: 'chose', concept: 'Chose/Entité', status: 'retenu', display_order: 1, meaning_type: 'etymology',
      description: "Entité quelconque portée à l'existence — c'est le nom le plus général de tout ce qui peut être connu ou prédiqué. D'après le Lane's, shayʾ désigne ce qui est amené à l'être, que ce soit un accident, un attribut ou une substance ; c'est le terme le plus général qui s'applique à l'existant. Philosophiquement, c'est extérieur (dénomme ce qui est) et permanent (tant que la chose est). Lorsqu'il est utilisé avec une négation (lā... shayʾan = pas quoi que ce soit), il désigne l'inexistant négatif, la nullité." },
    { sense: 'quelque chose', concept: 'Chose/Entité', status: 'probable', display_order: 2, meaning_type: 'etymology',
      description: "Entité indéterminée." },
    { sense: 'entité', concept: 'Chose/Entité', status: 'probable', display_order: 3, meaning_type: 'etymology',
      description: "Réalité existante ou potentielle." },
    { sense: 'quoi que ce soit', concept: 'Chose/Entité', status: 'probable', display_order: 4, meaning_type: 'etymology',
      description: "Expression de la négation universelle — sens activé par la présence de la négation précédente (lā)." },
    { sense: 'vouloir', concept: 'Volonté/Dessein', status: 'nul', display_order: 5, meaning_type: 'etymology',
      description: "D'après le Lane's, la forme I shā'a exprime la volonté, le dessein, le souhait — sens du verbe principal de cette racine (shā'a / mashī'a = volonté). Philosophiquement, c'est intérieur (état mental), mais se manifeste en acte. Ce sens verbal est distinct du nom shay'un qui désigne la chose voulue/produite." },
    { sense: 'volonté', concept: 'Volonté/Dessein', status: 'nul', display_order: 6, meaning_type: 'etymology',
      description: "Nom de l'acte de vouloir — mashī'a." }
  ];
  for (const s of shyySenses) await addSense(shyyId, s);

  // ── AXDH (أ خ ذ) ──────────────────────────────────────────────────────────
  console.log('\n─── axdh (أ خ ذ) ───');
  const axdhId = await ensureAnalysis('axdh', 'أ خ ذ', 273);
  const axdhSenses = [
    { sense: 'prendre', concept: 'Prise/Saisie', status: 'retenu', display_order: 1, meaning_type: 'etymology',
      description: "Acte extérieur et directionnel de saisir, d'emparer, de faire passer une chose ou une personne sous son emprise. La prise sort de celui qui prend et atteint ce qui est pris. Elle est ponctuelle (à l'origine de l'acte) mais peut devenir permanente (maintien dans l'emprise). D'après le Lane's, la forme I akhadha exprime l'acte de prendre avec la main, de saisir, de s'approprier, de tenir. La forme VIII ittakhadha (ou ta'attakhadha) exprime le fait de se prendre pour soi — prendre dans son propre intérêt, constituer comme objet de sa disposition." },
    { sense: 'saisir', concept: 'Prise/Saisie', status: 'probable', display_order: 2, meaning_type: 'etymology',
      description: "Acte de prendre rapidement et fermement." },
    { sense: 's\'emparer', concept: 'Prise/Saisie', status: 'probable', display_order: 3, meaning_type: 'etymology',
      description: "Acte de prendre pour soi par force." },
    { sense: 'recevoir', concept: 'Prise/Saisie', status: 'probable', display_order: 4, meaning_type: 'etymology',
      description: "Acte de prendre ce qui est donné — sens passif de la prise." },
    { sense: 'accepter', concept: 'Prise/Saisie', status: 'probable', display_order: 5, meaning_type: 'etymology',
      description: "Prendre volontairement — acte d'accueillir comme sien." },
    { sense: 'se prendre pour', concept: 'Appropriation/Adoption', status: 'retenu', display_order: 6, meaning_type: 'etymology',
      description: "D'après le Lane's, la forme VIII (ittakhadha) exprime l'acte réflexif de prendre pour soi, de constituer pour soi, d'adopter comme sien. C'est un acte volontaire et orienté — le sujet choisit activement quelque chose ou quelqu'un pour en faire l'objet de son rapport propre. Philosophiquement, c'est extérieur (acte visible), directionnel (le sujet vers l'objet choisi) et ponctuel puis permanent (l'adoption produit un état durable de possession/relation)." },
    { sense: 'adopter', concept: 'Appropriation/Adoption', status: 'probable', display_order: 7, meaning_type: 'etymology',
      description: "Prendre pour soi comme sien — acte de constitution volontaire." },
    { sense: 'faire de (X) un (Y)', concept: 'Appropriation/Adoption', status: 'probable', display_order: 8, meaning_type: 'etymology',
      description: "Structure ittakhadha X Y = prendre X pour en faire Y — constitution d'un rapport de fonction." },
    { sense: 'châtier', concept: 'Châtiment/Sanction', status: 'nul', display_order: 9, meaning_type: 'etymology',
      description: "Emploi coranique de akhadha avec force — saisir pour punir." },
    { sense: 'capturer', concept: 'Captivité', status: 'nul', display_order: 10, meaning_type: 'etymology',
      description: "Prendre comme captif — sens concret de l'akhīdh (captif). D'après le Lane's, akhīdh désigne le captif pris à la guerre." }
  ];
  for (const s of axdhSenses) await addSense(axdhId, s);

  // ── SLM : ajouter des sens pour muslim (forme IV actif) ────────────────────
  console.log('\n─── slm (س ل م) — compléments ───');
  const { data: slmWa } = await db.from('word_analyses').select('id').eq('word_key', 'slm');
  const slmId = slmWa[0].id;
  const slmSenses = [
    { sense: 'se remettre', concept: 'Remise/Reddition', status: 'retenu', display_order: 10, meaning_type: 'etymology',
      description: "D'après le Lane's, la forme IV aslama exprime l'acte de se remettre entièrement à quelqu'un, de s'en remettre à sa disposition — l'idée fondamentale est celle du transfert volontaire de sa propre personne ou de sa cause entre les mains d'un autre. Philosophiquement, c'est un acte extérieur (visible, il se manifeste par la conduite), directionnel (du sujet vers l'entité à qui il se remet) et volontaire et continu (état d'abandon entretenu). Le participe actif muslim désigne celui qui fait cet acte de se remettre de façon continue." },
    { sense: 'se rendre', concept: 'Remise/Reddition', status: 'probable', display_order: 11, meaning_type: 'etymology',
      description: "Se livrer sans combat — acte de cesser la résistance." },
    { sense: 's\'en remettre', concept: 'Remise/Reddition', status: 'probable', display_order: 12, meaning_type: 'etymology',
      description: "Confier sa cause, son sort à quelqu'un." },
    { sense: 'livrer', concept: 'Remise/Reddition', status: 'probable', display_order: 13, meaning_type: 'etymology',
      description: "Remettre un bien, une personne à quelqu'un — acte de transfert." },
    { sense: 'saluer', concept: 'Salutation', status: 'nul', display_order: 14, meaning_type: 'etymology',
      description: "Forme II sallama — prononcer la formule de paix salām ʿalaykum. Ce sens dérive de la racine paix/sécurité." }
  ];
  for (const s of slmSenses) await addSense(slmId, s);

  // ── update analysis_step to etymology ────────────────────────────────────
  for (const key of ['shrk']) {
    await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('word_key', key);
  }

  console.log('\n═══ ENRICHISSEMENT TERMINÉ ═══');
}

run().catch(e => { console.error('ERR', e); process.exit(1); });
