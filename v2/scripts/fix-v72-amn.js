const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 365;
  // ===== 1. Update VWA pos=6 et pos=11 : sense_chosen "croire" → "faire confiance", concept "Foi/Adhésion" → "Sécurité/Confiance"
  const newAxes6 = {
    sense_chosen: 'faire confiance',
    concept_chosen: 'Sécurité/Confiance',
    concepts: {
      'Sécurité/Confiance': {
        status: 'retenu',
        senses: ['faire confiance', 'être en sécurité', 'se sentir en sécurité', 'confier', 'lieu sûr', 'fidèle'],
        proof_ctx: 'āminū est un impératif Forme IV de ʾ-m-n + bi- (faire confiance à). La Forme IV āmana est le causatif de la Forme I amina (être en sécurité) — c\'est l\'acte de rendre sûr, d\'accorder sa confiance. Dans cette construction (āminū bi-mā unzila), le sens est « faites confiance en ce qui est révélé » — acte de remise volontaire, pas simple adhésion intellectuelle. Cohérent avec V49, V53, V68 qui utilisent aussi ce sens pour amn.'
      },
      'Foi/Adhésion': {
        status: 'probable',
        senses: ['avoir la foi', 'confirmer', 'accepter comme vrai', 'croire', 'croyant'],
        proof_ctx: '« Croire en » est une lecture possible mais importe le vocabulaire chrétien de la foi (belief). La racine ʾ-m-n porte d\'abord le sens étymologique de sécurité et de confiance, pas de croyance intellectuelle.'
      },
      'Garantie/Protection': {
        status: 'nul',
        senses: ['accorder la sécurité', 'protéger'],
        proof_ctx: 'Le verbe accorde la confiance, il ne protège pas quelqu\'un d\'autre.'
      },
      'Sens isolé/Amen': {
        status: 'nul',
        senses: ['amen'],
        proof_ctx: 'Sens liturgique dérivé, hors sujet.'
      }
    }
  };
  // pos=11 = āmanū (accompli), même concept
  const newAxes11 = {
    sense_chosen: 'faire confiance',
    concept_chosen: 'Sécurité/Confiance',
    concepts: {
      'Sécurité/Confiance': {
        status: 'retenu',
        senses: ['faire confiance', 'être en sécurité', 'se sentir en sécurité', 'confier', 'lieu sûr', 'fidèle'],
        proof_ctx: 'āmanū est un accompli 3MP Forme IV de ʾ-m-n sans préposition — désigne ceux qui ont accompli l\'acte d\'accorder leur confiance (à la révélation et à Dieu). Cohérent avec V49, V53, V68.'
      },
      'Foi/Adhésion': {
        status: 'probable',
        senses: ['avoir la foi', 'confirmer', 'accepter comme vrai', 'croire', 'croyant'],
        proof_ctx: '« Croire / croyants » reste une lecture possible mais réduit à la croyance intellectuelle ce que la racine exprime d\'abord comme confiance et sécurité.'
      },
      'Garantie/Protection': {
        status: 'nul',
        senses: ['accorder la sécurité', 'protéger'],
        proof_ctx: 'Le verbe accorde la confiance, il ne protège pas quelqu\'un d\'autre.'
      },
      'Sens isolé/Amen': {
        status: 'nul',
        senses: ['amen'],
        proof_ctx: 'Sens liturgique dérivé, hors sujet.'
      }
    }
  };

  await db.from('verse_word_analyses').update({ sense_chosen: 'faire confiance', analysis_axes: newAxes6 }).eq('verse_id', vid).eq('position', 6);
  await db.from('verse_word_analyses').update({ sense_chosen: 'faire confiance', analysis_axes: newAxes11 }).eq('verse_id', vid).eq('position', 11);
  console.log('V72 VWA pos=6 et pos=11 : sense_chosen croire → faire confiance ✅');

  // ===== 2. Update segments
  const { data: va } = await db.from('verse_analyses').select('segments, translation_arab, translation_explanation').eq('verse_id', vid).single();
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  const seg6 = segs.find(s => s.position === 6);
  const seg11 = segs.find(s => s.position === 11);
  if (seg6) { seg6.fr = 'Faites confiance en'; seg6.sense_retenu = 'faire confiance'; }
  if (seg11) { seg11.fr = 'ont fait confiance'; seg11.sense_retenu = 'faire confiance'; }

  // ===== 3. Update translation_arab
  const newTrad = va.translation_arab
    .replace(/Croyez en/g, 'Faites confiance en')
    .replace(/ont cru/g, 'ont fait confiance');

  // ===== 4. Update translation_explanation (DEM + JUST)
  const critStart = va.translation_explanation.indexOf('§CRITIQUE§');
  const beforeCrit = va.translation_explanation.substring(0, critStart);
  const critSection = va.translation_explanation.substring(critStart);

  // Replace 'croire' mentions in DEM and JUST (but keep concept name mentions)
  let newBefore = beforeCrit
    .replace(/\bCroyez\b/g, 'Faites confiance')
    .replace(/\bcroyez\b/g, 'faites confiance')
    .replace(/\bont cru\b/g, 'ont fait confiance')
    .replace(/« croire »/g, '« faire confiance »')
    .replace(/« croyez en »/g, '« faites confiance en »')
    .replace(/sens retenu est « Foi\/Adhésion »/g, 'sens retenu est « Sécurité/Confiance »')
    .replace(/L'alternative « faites confiance à » est écartée[^.]*\.[^*]*/g, 'L\'alternative « croyez en » (Hamidullah) est écartée car elle importe le vocabulaire chrétien de la foi (belief), alors que la racine ʾ-m-n porte le sens primaire de sécurité et de confiance.');

  // Ajouter une entrée §CRITIQUE§ pour faites confiance vs croyez
  // Parse existing critique entries
  const critContent = critSection.substring('§CRITIQUE§'.length);
  const entryRegex = /(\*\*[^*]+?vs[^*]+?\*\*[\s\S]*?)(?=(?:\n\s*\n\*\*[^*]+?vs[^*]+?\*\*)|\s*$)/g;
  const entries = [...critContent.matchAll(entryRegex)].map(m => m[1].trim());

  const newEntryAmn = `**faites confiance en vs « Croyez à »** : Les traductions courantes donnent « Croyez à ce qui a été révélé » pour āminū bi-. Ce choix importe le vocabulaire chrétien de la foi (belief) sur une racine arabe qui porte d'abord le sens de sécurité et de confiance (ʾ-m-n). La Forme IV āmana est causative : elle signifie « accorder sa confiance », pas « croire » au sens intellectuel. « Faites confiance en » restitue cet acte de remise volontaire, cohérent avec V49, V53, V68 qui emploient le même sens pour la même racine. « Croire » réduit l'engagement à une adhésion mentale, alors que la racine décrit une remise active et relationnelle.`;

  const newEntryAmn2 = `**ceux qui ont fait confiance vs « aux croyants »** : Même problème qu'avec āminū : « croyants » fige l'acte en identité religieuse et efface la dimension active du verbe. āmanū désigne ceux qui ont accompli l'acte d'accorder leur confiance à la révélation — pas une catégorie confessionnelle.`;

  // Positions in translation_arab (after fix)
  const updatedTrad = newTrad.toLowerCase();
  // Order: "faites confiance en" comes before "ont fait confiance"
  const pos1 = updatedTrad.indexOf('faites confiance en');
  const pos2 = updatedTrad.indexOf('ont fait confiance');

  // Insert entries in order
  const allEntries = [];
  for (const e of entries) {
    const m = e.match(/\*\*([^*]+?)\s+vs\s+/);
    if (!m) { allEntries.push({ entry: e, pos: 99999 }); continue; }
    const word = m[1].trim().toLowerCase();
    allEntries.push({ entry: e, pos: updatedTrad.indexOf(word) >= 0 ? updatedTrad.indexOf(word) : 99999 });
  }
  allEntries.push({ entry: newEntryAmn, pos: pos1 });
  allEntries.push({ entry: newEntryAmn2, pos: pos2 });
  allEntries.sort((a, b) => a.pos - b.pos);

  const newCrit = '§CRITIQUE§\n\n' + allEntries.map(e => e.entry).join('\n\n');

  await db.from('verse_analyses').update({
    segments: segs,
    translation_arab: newTrad,
    translation_explanation: newBefore + newCrit
  }).eq('verse_id', vid);

  console.log('V72 translation_arab + segments + DEM + JUSTIFICATION + §CRITIQUE§ mis à jour ✅');
  console.log('\nnewTrad: ' + newTrad);
}
run().catch(console.error);
