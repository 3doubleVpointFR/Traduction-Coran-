/**
 * Audit : pour chaque verset analysé, identifier les mots différents
 * entre notre translation_arab et Hamidullah (full_translation),
 * puis vérifier lesquels sont effectivement abordés dans le §CRITIQUE§.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Tokenisation : split en mots, garde uniquement les mots significatifs (>2 chars)
function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9àâäéèêëïîôöùûüÿçœæ\s']/gi, ' ')
    .split(/\s+/)
    .map(w => w.replace(/^['"«»]+|['"«»]+$/g, ''))
    .filter(w => w.length > 2);
}

// Stop words à ignorer (peu pertinents pour la critique)
const STOP = new Set(['les', 'des', 'une', 'que', 'qui', 'pour', 'dans', 'par', 'sur', 'pas',
  'son', 'ses', 'aux', 'sont', 'avec', 'tous', 'toute', 'cela', 'cette', 'ces',
  'votre', 'vous', 'nous', 'leur', 'leurs', 'mais', 'ainsi', 'donc', 'plus',
  'tres', 'comme', 'meme', 'tout', 'fait', 'etre', 'avoir']);

async function run() {
  // Charger tous les verse_analyses non-vides
  const { data: vas } = await db.from('verse_analyses')
    .select('verse_id, translation_arab, full_translation, translation_explanation')
    .not('translation_arab', 'is', null);

  // Mapper vid → S/V
  const vids = vas.map(v => v.verse_id);
  const vmap = {};
  for (let i = 0; i < vids.length; i += 100) {
    const chunk = vids.slice(i, i + 100);
    const { data } = await db.from('verses').select('id, surah_id, verse_num').in('id', chunk);
    for (const x of data ?? []) vmap[x.id] = `S${x.surah_id}V${x.verse_num}`;
  }

  const report = [];
  for (const va of vas) {
    if (!va.translation_arab || !va.full_translation) continue;
    const oursTokens = new Set(tokenize(va.translation_arab).filter(t => !STOP.has(t)));
    const hamiTokens = new Set(tokenize(va.full_translation).filter(t => !STOP.has(t)));

    // Mots dans Hami mais pas chez nous (= choix divergent)
    const onlyHami = [...hamiTokens].filter(t => !oursTokens.has(t));
    // Mots chez nous mais pas chez Hami
    const onlyOurs = [...oursTokens].filter(t => !hamiTokens.has(t));

    // Vérifier si chaque mot est abordé dans le CRITIQUE
    const expl = (va.translation_explanation || '').toLowerCase();
    const critIdx = expl.indexOf('§critique§');
    const crit = critIdx >= 0 ? expl.slice(critIdx) : '';

    const uncoveredHami = onlyHami.filter(t => !crit.includes(t));
    const uncoveredOurs = onlyOurs.filter(t => !crit.includes(t));

    if (uncoveredHami.length + uncoveredOurs.length > 0) {
      report.push({
        tag: vmap[va.verse_id] || va.verse_id,
        ours: va.translation_arab,
        hami: va.full_translation,
        uncoveredHami,
        uncoveredOurs,
      });
    }
  }

  console.log(`\n=== ${report.length} versets avec mots non abordés en §CRITIQUE§ ===\n`);
  for (const r of report.slice(0, 15)) {
    console.log(`\n──── ${r.tag} ────`);
    console.log(`Nous : ${r.ours.slice(0, 200)}`);
    console.log(`Hami : ${r.hami.slice(0, 200)}`);
    if (r.uncoveredHami.length) console.log(`  ⊘ mots Hami non discutés : ${r.uncoveredHami.join(', ')}`);
    if (r.uncoveredOurs.length) console.log(`  ⊘ mots nous non discutés : ${r.uncoveredOurs.join(', ')}`);
  }
  if (report.length > 15) console.log(`\n... +${report.length - 15} autres versets`);
}
run().catch(e => { console.error(e); process.exit(1); });
