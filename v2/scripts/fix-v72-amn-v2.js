const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 365;
  const { data: va } = await db.from('verse_analyses').select('segments, translation_arab, translation_explanation').eq('verse_id', vid).single();

  // ========== VWA UPDATES ==========
  const newAxes6 = {
    sense_chosen: 'faire confiance',
    concept_chosen: 'Sécurité/Confiance',
    concepts: {
      'Sécurité/Confiance': {
        status: 'retenu',
        senses: ['faire confiance', 'être en sécurité', 'se sentir en sécurité', 'confier', 'lieu sûr', 'fidèle'],
        proof_ctx: 'āminū est un impératif Forme IV de ʾ-m-n suivi de bi-. La Forme IV est le causatif de la Forme I (amina = être en sécurité) : elle signifie « accorder sa sécurité/confiance », acte volontaire dirigé vers un objet. āminū bi- = « accordez votre confiance en ». Cohérent avec V49, V53, V68 qui emploient « faire confiance » pour la même racine.'
      },
      'Foi/Adhésion': {
        status: 'probable',
        senses: ['avoir la foi', 'confirmer', 'accepter comme vrai', 'croire', 'croyant'],
        proof_ctx: 'Le sens « croire en » est la traduction conventionnelle de āmana bi- mais importe le vocabulaire chrétien de la foi intellectuelle. La racine ʾ-m-n porte étymologiquement la sécurité et la confiance, pas la croyance.'
      },
      'Garantie/Protection': {
        status: 'nul',
        senses: ['accorder la sécurité', 'protéger'],
        proof_ctx: 'Le verbe accorde la confiance à un objet, il ne protège pas quelqu\'un d\'autre.'
      },
      'Sens isolé/Amen': {
        status: 'nul',
        senses: ['amen'],
        proof_ctx: 'Sens liturgique dérivé, hors sujet.'
      }
    }
  };
  const newAxes11 = {
    sense_chosen: 'faire confiance',
    concept_chosen: 'Sécurité/Confiance',
    concepts: {
      'Sécurité/Confiance': {
        status: 'retenu',
        senses: ['faire confiance', 'être en sécurité', 'se sentir en sécurité', 'confier', 'lieu sûr', 'fidèle'],
        proof_ctx: 'āmanū est un accompli 3MP Forme IV de ʾ-m-n — désigne ceux qui ont accordé leur confiance authentiquement à la révélation, par opposition à la faction qui en simule l\'apparence. Cohérent avec V49, V53, V68.'
      },
      'Foi/Adhésion': {
        status: 'probable',
        senses: ['avoir la foi', 'confirmer', 'accepter comme vrai', 'croire', 'croyant'],
        proof_ctx: '« Ont cru / croyants » reste une lecture possible mais réduit à l\'adhésion mentale ce que la racine exprime d\'abord comme remise confiante.'
      },
      'Garantie/Protection': {
        status: 'nul',
        senses: ['accorder la sécurité', 'protéger'],
        proof_ctx: 'Hors sujet.'
      },
      'Sens isolé/Amen': {
        status: 'nul',
        senses: ['amen'],
        proof_ctx: 'Hors sujet.'
      }
    }
  };

  await db.from('verse_word_analyses').update({ sense_chosen: 'faire confiance', analysis_axes: newAxes6 }).eq('verse_id', vid).eq('position', 6);
  await db.from('verse_word_analyses').update({ sense_chosen: 'faire confiance', analysis_axes: newAxes11 }).eq('verse_id', vid).eq('position', 11);
  console.log('V72 VWA pos=6, 11 mis à jour ✅');

  // ========== SEGMENTS UPDATES ==========
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  const seg6 = segs.find(s => s.position === 6);
  const seg11 = segs.find(s => s.position === 11);
  if (seg6) { seg6.fr = 'faites confiance en'; seg6.sense_retenu = 'faire confiance'; }
  if (seg11) { seg11.fr = 'ont fait confiance'; seg11.sense_retenu = 'faire confiance'; }

  // ========== TRANSLATION_ARAB ==========
  const newTrad = va.translation_arab
    .replace(/« Croyez en/g, '« Faites confiance en')
    .replace(/à ceux qui ont cru/g, 'à ceux qui ont fait confiance');
  console.log('Nouvelle trad:', newTrad);

  // ========== TRANSLATION_EXPLANATION ==========
  const expl = va.translation_explanation;
  const critStart = expl.indexOf('§CRITIQUE§');
  const beforeCrit = expl.substring(0, critStart);
  const critSection = expl.substring(critStart + '§CRITIQUE§'.length);

  // Replace DEM paragraphs for āminū and āmanū
  const oldDemAminu = `**āminū** (croyez en) est un verbe de la racine a-m-n à la Forme IV (āmana), impératif, 2ème personne du masculin pluriel. La Forme IV transforme l'état de sécurité/confiance (Forme I : amina = être en sécurité) en adhésion déclarée tournée vers l'extérieur. La construction āminū bi- (adhérez à / croyez en) est la forme standard de la déclaration de foi dans le Coran. Ici, la faction ordonne à ses membres de simuler cette adhésion — le commandement est stratégique, non sincère.`;
  const newDemAminu = `**āminū** (faites confiance en) est un verbe de la racine a-m-n à la Forme IV (āmana), impératif, 2ème personne du masculin pluriel. La Forme IV est le causatif de la Forme I (amina = être en sécurité) : elle signifie « accorder sa sécurité/confiance », acte volontaire dirigé vers un objet. La construction āminū bi- = « accordez votre confiance en » — la racine ʾ-m-n porte étymologiquement la sécurité et la confiance, pas la croyance intellectuelle. Ici, la faction ordonne à ses membres de simuler cet engagement confiant — le commandement est stratégique, non sincère.`;

  const oldDemAmanu = `**āmanū** (ont cru) est le même verbe a-m-n à la Forme IV, accompli, 3ème personne du masculin pluriel. Il désigne ceux qui ont effectivement adhéré à la révélation — les croyants authentiques, par opposition aux membres de la faction à qui on commande de simuler cette adhésion.`;
  const newDemAmanu = `**āmanū** (ont fait confiance) est le même verbe a-m-n à la Forme IV, accompli, 3ème personne du masculin pluriel. Il désigne ceux qui ont effectivement accordé leur confiance à la révélation — ceux qui s'y sont remis de façon authentique, par opposition aux membres de la faction à qui on commande de simuler cet engagement.`;

  // Replace JUSTIFICATION paragraphs
  const oldJustAminu = `**croyez en** — Le sens retenu est « Foi/Adhésion ». Le mot « croyez en » est choisi car āminū bi- est la construction standard de l'adhésion déclarée dans le Coran. L'alternative « faites confiance à » est écartée car elle évoque la sécurité intérieure (la Forme I amina), alors que la Forme IV āmana désigne une adhésion déclarée tournée vers l'extérieur.`;
  const newJustAminu = `**faites confiance en** — Le sens retenu est « faire confiance » (Sécurité/Confiance). L'expression « faites confiance en » est choisie car la Forme IV āmana est le causatif de amina (être en sécurité/confiance) — c'est l'acte d'accorder sa confiance, dirigé vers un objet. La racine ʾ-m-n porte étymologiquement la sécurité et la confiance, pas la croyance intellectuelle. L'alternative « croyez en » (Hamidullah) est écartée car elle importe le vocabulaire chrétien de la foi (belief). Cohérent avec V49, V53, V68 qui emploient le même sens pour la même racine.`;

  const oldJustAmanu = `**ont cru** — Le sens retenu est « Foi/Adhésion ». Même analyse que āminū — āmanū (accompli) = « ils ont adhéré ». Le mot « cru » à l'accompli est le plus naturel en français.`;
  const newJustAmanu = `**ont fait confiance** — Le sens retenu est « faire confiance ». Même analyse que āminū : āmanū (accompli) = « ils ont accordé leur confiance ». L'alternative « ont cru » est écartée pour les mêmes raisons étymologiques (vocabulaire chrétien de la foi). L'expression « ont fait confiance » rend l'acte de remise volontaire sans charge théologique imposée.`;

  let newBefore = beforeCrit
    .replace(oldDemAminu, newDemAminu)
    .replace(oldDemAmanu, newDemAmanu)
    .replace(oldJustAminu, newJustAminu)
    .replace(oldJustAmanu, newJustAmanu);

  // ========== §CRITIQUE§ avec 2 nouvelles entrées dans l'ordre d'apparition ==========
  const newEntry1 = `**faites confiance en vs « Croyez à »** : Hamidullah rend āminū bi- par « Croyez à ce qui a été révélé ». Ce choix importe le vocabulaire chrétien de la foi (belief, adhésion intellectuelle) sur une racine arabe qui porte d'abord le sens de sécurité et de confiance (ʾ-m-n). La Forme IV āmana est causative — « accorder sa confiance », acte volontaire dirigé vers un objet — pas une croyance mentale. « Faites confiance en » rend mieux cet engagement relationnel et actif, cohérent avec V49, V53, V68 qui emploient le même sens. La différence change la nature de l'acte ordonné : simuler une croyance intellectuelle (Hamidullah) versus simuler une remise confiante (nous).`;

  const newEntry2 = `**à ceux qui ont fait confiance vs « aux croyants »** : Même problème avec āmanū. Hamidullah traduit par « aux croyants », figeant l'acte en identité religieuse. āmanū désigne ceux qui ont accompli l'acte d'accorder leur confiance — un verbe actif, pas une catégorie confessionnelle. « Ceux qui ont fait confiance » rend la dimension active et relationnelle du participe.`;

  // Parse existing entries
  const entryRegex = /(\*\*[^*]+?vs[^*]+?\*\*[\s\S]*?)(?=(?:\n\s*\n\*\*[^*]+?vs[^*]+?\*\*)|\s*$)/g;
  const entries = [...critSection.matchAll(entryRegex)].map(m => m[1].trim());

  const allEntries = entries.concat([newEntry1, newEntry2]);
  // Positions for ordering (in updated translation_arab)
  const t = newTrad.toLowerCase();
  const withPos = allEntries.map(e => {
    const m = e.match(/\*\*([^*]+?)\s+vs\s+/);
    const word = m ? m[1].trim().toLowerCase() : '';
    let pos = t.indexOf(word);
    if (pos < 0) pos = 99999;
    return { entry: e, pos };
  });
  withPos.sort((a, b) => a.pos - b.pos);

  const newCritSection = '§CRITIQUE§\n\n' + withPos.map(e => e.entry).join('\n\n');
  const newExpl = newBefore + newCritSection;

  await db.from('verse_analyses').update({
    segments: segs,
    translation_arab: newTrad,
    translation_explanation: newExpl
  }).eq('verse_id', vid);
  console.log('V72 segments + translation_arab + DEM/JUSTIFICATION + §CRITIQUE§ mis à jour ✅');
  console.log('\nOrdre §CRITIQUE§ final:');
  withPos.forEach(e => {
    const m = e.entry.match(/\*\*([^*]+?)\s+vs/);
    console.log('  pos=' + e.pos + ' : ' + (m ? m[1] : '?'));
  });
}
run().catch(console.error);
