/**
 * Cohérence finale kfr :
 * - V52, V70, V72, V80 : aligner DEMARCHE/JUSTIFICATION/CRITIQUE sur "dissimulation/dissimuler"
 * - V56 : décider — texte dit "ont rejeté" mais segment dit "dissimulé". Aligner sur le texte (rejeté reste plus naturel pour l'accompli plural absolu)
 * - V71 : reformater §DEMARCHE§ avec sauts de ligne propres
 * - V80 : retirer définitivement l'argument bi- "instrumental" et "recouvrir la vérité reçue" forcé
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ============== V56 : aligner segment + VWA sur "rejeté" (plus naturel pour l'accompli) ==============
  // Le texte "ceux qui ont rejeté" est plus naturel que "ceux qui ont dissimulé [la vérité]"
  // On revient à "rejeter" pour V56 — décision contextuelle
  const r56 = await db.from('verse_analyses').select('segments').eq('verse_id', 349).single();
  const newSegs56 = r56.data.segments.map(s => {
    if (s.word_key === 'kfr') return { ...s, fr: 'ont rejeté', sense_retenu: 'rejeter' };
    return s;
  });
  await db.from('verse_analyses').update({ segments: newSegs56 }).eq('verse_id', 349);

  const { data: vwa56 } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 349).eq('word_key', 'kfr').maybeSingle();
  if (vwa56) {
    vwa56.analysis_axes.sense_chosen = 'rejeter';
    vwa56.analysis_axes.concept_chosen = 'Rejet/Ingratitude';
    if (vwa56.analysis_axes.concepts) {
      for (const c of Object.keys(vwa56.analysis_axes.concepts)) {
        vwa56.analysis_axes.concepts[c].status = (c === 'Rejet/Ingratitude') ? 'retenu' : 'nul';
      }
    }
    await db.from('verse_word_analyses').update({ sense_chosen: 'rejeter', analysis_axes: vwa56.analysis_axes }).eq('id', vwa56.id);
    console.log('✓ V56 : sense_chosen rétabli sur "rejeter" (concept Rejet/Ingratitude)');
  }

  // ============== V71 : ajouter sauts de ligne propres autour des marqueurs ==============
  const r71 = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 364).single();
  let t71 = r71.data.translation_explanation || '';
  // S'assurer que §DEMARCHE§/§JUSTIFICATION§/§CRITIQUE§ sont entourés de \n\n
  t71 = t71.replace(/§DEMARCHE§\s*/g, '§DEMARCHE§\n\n');
  t71 = t71.replace(/\s*§JUSTIFICATION§\s*/g, '\n\n§JUSTIFICATION§\n\n');
  t71 = t71.replace(/\s*§CRITIQUE§\s*/g, '\n\n§CRITIQUE§\n\n');
  // Aussi : avant chaque **mot** dans DEMARCHE, mettre \n\n
  t71 = t71.replace(/\.\s+\*\*([^*]+)\*\*/g, '.\n\n**$1**');
  await db.from('verse_analyses').update({ translation_explanation: t71 }).eq('verse_id', 364);
  console.log('✓ V71 : §DEMARCHE§ avec sauts de ligne propres');

  // ============== V70 : aligner JUSTIFICATION + CRITIQUE sur "dissimuler" ==============
  const r70 = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 363).single();
  let t70 = r70.data.translation_explanation || '';
  t70 = t70
    // DEMARCHE : "(recouvrez-vous)" → "(dissimulez-vous)"
    .replace(/\*\*takfurūna\*\* \(recouvrez-vous\)/g, '**takfurūna** (dissimulez-vous)')
    .replace(/« vous recouvrez \[encore et encore\] »/g, '« vous dissimulez [encore et encore] »')
    // JUSTIFICATION : titre **recouvrez-vous** → **dissimulez-vous**
    .replace(/\*\*recouvrez-vous\*\*/g, '**dissimulez-vous**')
    .replace(/Le mot « dissimulez-vous » est choisi car la racine k-f-r/g, 'Le mot « dissimuler » est choisi car la racine k-f-r')
    // Phrases : alors que recouvrir → dissimuler
    .replace(/recouvre ce qu'on sait/g, 'dissimule ce qu\'on sait')
    .replace(/on ne recouvre pas ce qu'on ignore, on recouvre/g, 'on ne dissimule pas ce qu\'on ignore, on dissimule')
    .replace(/alors que recouvrir suppose une connaissance/g, 'alors que dissimuler suppose une connaissance')
    // CRITIQUE
    .replace(/\*\*recouvrez-vous vs « niez-vous »\*\*/g, '**dissimulez-vous vs « niez-vous »**')
    .replace(/« Recouvrir » conserve l'image étymologique/g, '« Dissimuler » conserve la dimension active')
    .replace(/perdant l'image active du recouvrement/g, 'perdant la dimension active de la dissimulation');
  await db.from('verse_analyses').update({ translation_explanation: t70 }).eq('verse_id', 363);
  console.log('✓ V70 : DEMARCHE/JUSTIFICATION/CRITIQUE alignés sur "dissimuler"');

  // ============== V72 : aligner sur "dissimuler" ==============
  const r72 = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 365).single();
  let t72 = r72.data.translation_explanation || '';
  t72 = t72
    .replace(/recouvrant les signes/g, 'dissimulant les signes')
    // DEMARCHE
    .replace(/\*\*wa-kfurū\*\* \(et recouvrez-le\)/g, '**wa-kfurū** (et dissimulez-le)')
    .replace(/recouvrir — cacher — la vérité/g, 'dissimuler la vérité')
    .replace(/après avoir semblé adhérer, recouvrir/g, 'après avoir semblé adhérer, dissimuler')
    // JUSTIFICATION
    .replace(/\*\*et recouvrez-le\*\*/g, '**et dissimulez-le**')
    .replace(/Le mot « recouvrez » est choisi car kfurū/g, 'Le mot « dissimuler » est choisi car kfurū')
    .replace(/« Recouvrir » porte l'idée d'une action intentionnelle/g, '« Dissimuler » porte l\'idée d\'une action intentionnelle')
    // CRITIQUE
    .replace(/\*\*recouvrez-le à sa fin vs « n'y croyez plus à la fin du jour »\*\*/g, '**dissimulez-le à sa fin vs « n\'y croyez plus à la fin du jour »**')
    .replace(/ici « recouvrir \[ce qui a été reçu\], cacher \[la confiance accordée\] »/g, 'ici « dissimuler [ce qui a été reçu], cacher [la confiance accordée] »')
    .replace(/ils proposent de croire le matin et de RECOUVRIR \(revenir-cacher\) le soir/g, 'ils proposent de croire le matin et de DISSIMULER (revenir-cacher) le soir')
    .replace(/« Recouvrir » conserve l'image étymologique/g, '« Dissimuler » conserve la dimension active');
  await db.from('verse_analyses').update({ translation_explanation: t72 }).eq('verse_id', 365);
  console.log('✓ V72 : DEMARCHE/JUSTIFICATION/CRITIQUE alignés sur "dissimuler"');

  // ============== V80 : retirer "bi- (instrumental)" et "recouvrir la vérité reçue" forcé ==============
  const r80 = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 373).single();
  let t80 = r80.data.translation_explanation || '';
  t80 = t80
    .replace(/Le préfixe bi- \(instrumental\) marque l'objet du commandement\.\s*/g, '')
    .replace(/recouvrir la vérité reçue/g, 'cacher la vérité reçue')
    .replace(/préservant l'image étymologique active/g, 'préservant la racine étymologique')
    // Retirer phrase "couvrir/cacher au sens premier" trop redondante avec ce qui est dit avant
    .replace(/\(nominal de la racine k-f-r = couvrir\/cacher au sens premier\)/g, '(nom verbal de la racine k-f-r = couvrir/cacher)');
  await db.from('verse_analyses').update({ translation_explanation: t80 }).eq('verse_id', 373);
  console.log('✓ V80 : argument bi- (instrumental) retiré, langage uniformisé');

  // ============== V52 : aligner sur "dissimulation" ==============
  const r52 = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 345).single();
  let t52 = r52.data.translation_explanation || '';
  t52 = t52
    .replace(/\*\*la couverture\*\*/g, '**la dissimulation**')
    .replace(/le mot « couverture » est choisi/gi, 'le mot « dissimulation » est choisi')
    .replace(/Le mot « couvrir » est choisi/g, 'Le mot « dissimuler » est choisi');
  await db.from('verse_analyses').update({ translation_explanation: t52 }).eq('verse_id', 345);
  console.log('✓ V52 : DEMARCHE/JUSTIFICATION/CRITIQUE alignés sur "dissimulation"');

  console.log('\n✅ Cohérence kfr finalisée sur tous les versets');
}

run().catch(e => { console.error(e); process.exit(1); });
