// fix-s2-v21-30-concepts-names.js
// Rename invented concept keys in VWA analysis_axes.concepts to match real DB concept names
// Does NOT change concept_chosen or sense_chosen — only renames secondary concept keys

const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co', process.env.SUPABASE_SERVICE_KEY);

// Manual overrides for cases where fuzzy matching won't work
// Format: "vwaId:badConceptName" → "correctConceptName"
const MANUAL_OVERRIDES = {
  '1105:Baiser': 'Sens isolé/Embrasser',
  '1106:Conscience/Piete': 'Sens isolé/Bouclier',
  '1129:Effet/Consequence': 'Action/Acte',
  '1129:Sens isole/Etre affecte': 'Action/Acte',
  '1130:Conscience/Piete': 'Sens isolé/Bouclier',
  '1134:Interdiction/Protection': 'Interdit/Enclos',
  '1135:Sens isole/Morsure': 'Dénombrement/Calcul',
  '1143:Sens isole/Terre': 'Position basse',
  '1150:Association': 'Couple/Union',
  '1151:Sens isole/Circoncision': 'Pureté/Purification',
  '1160:Droit/Justice': 'Obligation/Nécessité',
  '1164:Mouvement lent': 'Douceur/Lenteur',
  '1168:Sens isole/Fruit': 'Corps/Anatomie',
  '1169:Démolition': 'Rupture/Annulation',
  '1170:Connaissance': 'Sens isolé/Époque',
  '1170:Recommandation': 'Sens isolé/Rencontre',
  '1174:Traversée': 'Eau/Liquide',
  '1176:Don': 'Liaison/Connexion',
  '1176:Arrivée': 'Liaison/Connexion',
  '1188:Communauté': 'Rassemblement/Union',
  '1199:Postériorité': 'Position/Arrière',
  '1205:Terre sainte': 'Lieu saint',
};

function normalize(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function findBestMatch(badName, dbConcepts, existingKeys) {
  const normBad = normalize(badName);

  // 1. Exact normalized match
  for (const c of dbConcepts) {
    if (normalize(c) === normBad) return c;
  }

  // 2. Partial match — check if key words overlap
  const badParts = normBad.split(/[\/\s]+/).filter(p => p.length > 2);
  let bestScore = 0;
  let bestMatch = null;

  for (const c of dbConcepts) {
    if (existingKeys.includes(c)) continue; // skip already-used concepts
    const nc = normalize(c);
    const cParts = nc.split(/[\/\s]+/).filter(p => p.length > 2);

    let score = 0;
    for (const bp of badParts) {
      for (const cp of cParts) {
        if (bp === cp) score += 3;
        else if (cp.includes(bp) || bp.includes(cp)) score += 2;
        else if (bp.substring(0, 4) === cp.substring(0, 4)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = c;
    }
  }

  if (bestMatch) return bestMatch;

  // 3. Fallback: pick the first DB concept not already used
  for (const c of dbConcepts) {
    if (!existingKeys.includes(c)) return c;
  }

  return null;
}

async function main() {
  const verseIds = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37];

  // Target VWA IDs
  const targetIds = [1101, 1103, 1104, 1105, 1106, 1129, 1130, 1134, 1135,
    1143, 1144, 1150, 1151, 1152, 1160, 1164, 1168, 1169, 1170, 1174,
    1176, 1188, 1199, 1205];

  // Fetch VWAs
  const { data: vwas, error: vwaErr } = await db
    .from('verse_word_analyses')
    .select('id, word_key, verse_id, analysis_axes')
    .in('id', targetIds)
    .order('id');

  if (vwaErr) { console.error('Error fetching VWAs:', vwaErr.message); return; }
  console.log(`Fetched ${vwas.length} VWAs`);

  // Fetch word_analyses and word_meanings for all relevant word_keys
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db.from('word_analyses').select('id, word_key').in('word_key', wordKeys);
  const waIds = was.map(w => w.id);
  const { data: wms } = await db.from('word_meanings').select('analysis_id, concept, sense').in('analysis_id', waIds);

  // Build concept map: word_key -> [concept names]
  const conceptsByKey = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!conceptsByKey[wa.word_key]) conceptsByKey[wa.word_key] = new Set();
    conceptsByKey[wa.word_key].add(wm.concept);
  }
  // Convert sets to arrays
  for (const k of Object.keys(conceptsByKey)) {
    conceptsByKey[k] = [...conceptsByKey[k]];
  }

  console.log(`\nDB concepts loaded for ${Object.keys(conceptsByKey).length} word_keys\n`);

  // Process each VWA
  let updated = 0;
  let skipped = 0;
  const renames = [];

  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.concepts) { skipped++; continue; }

    const dbConcepts = conceptsByKey[vwa.word_key] || [];
    const conceptKeys = Object.keys(ax.concepts);
    let changed = false;

    for (const ck of conceptKeys) {
      // Skip if it already matches a DB concept
      if (dbConcepts.includes(ck)) continue;

      // Check manual override first
      const overrideKey = `${vwa.id}:${ck}`;
      let newKey = MANUAL_OVERRIDES[overrideKey] || null;

      if (!newKey) {
        // Find best matching DB concept
        const currentValidKeys = Object.keys(ax.concepts).filter(k => dbConcepts.includes(k));
        newKey = findBestMatch(ck, dbConcepts, currentValidKeys);
      }

      if (newKey && newKey !== ck && dbConcepts.includes(newKey)) {
        if (ax.concepts[newKey]) {
          // Target key already exists — just delete the bad key
          delete ax.concepts[ck];
          changed = true;
          renames.push({
            vwaId: vwa.id,
            wordKey: vwa.word_key,
            from: ck,
            to: `${newKey} (DELETED — target already exists)`
          });
        } else {
          // Rename: copy value to new key, delete old key
          ax.concepts[newKey] = ax.concepts[ck];
          delete ax.concepts[ck];
          changed = true;
          renames.push({
            vwaId: vwa.id,
            wordKey: vwa.word_key,
            from: ck,
            to: newKey
          });
        }
      } else {
        console.log(`  WARNING: VWA ${vwa.id} [${vwa.word_key}] — no DB match for "${ck}"`);
        console.log(`    DB concepts: ${dbConcepts.join(', ')}`);
      }
    }

    if (changed) {
      const { error: updErr } = await db
        .from('verse_word_analyses')
        .update({ analysis_axes: ax })
        .eq('id', vwa.id);

      if (updErr) {
        console.error(`  ERROR updating VWA ${vwa.id}: ${updErr.message}`);
      } else {
        updated++;
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(70));
  console.log(`SUMMARY: ${updated} VWAs updated, ${skipped} skipped, ${renames.length} renames`);
  console.log('='.repeat(70));

  for (const r of renames) {
    console.log(`  VWA ${r.vwaId} [${r.wordKey}]: "${r.from}" → "${r.to}"`);
  }
}

main().catch(console.error);
