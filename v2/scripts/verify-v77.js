const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 370; // S3:V77
  console.log('=== VALIDATION S3:V77 (verse_id=370, va_id=731) ===\n');

  // ── verse_analyses ──────────────────────────────────────────────────────
  const { data: va } = await db.from('verse_analyses').select('full_translation, translation_arab, translation_explanation, segments').eq('verse_id', vid).single();
  console.log('HAMIDULLAH: ' + va.full_translation);
  console.log('NOTRE:      ' + va.translation_arab);

  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  console.log('\nSegments : ' + segs.length + ' positions');
  console.log('  emptyFr=' + segs.filter(s => !s.fr).length
    + ' nullSenseRetenu=' + segs.filter(s => !s.is_particle && s.word_key && !s.sense_retenu).length);

  // ── VWA ─────────────────────────────────────────────────────────────────
  const { data: vwa } = await db.from('verse_word_analyses').select('position, word_key, sense_chosen, analysis_axes').eq('verse_id', vid).order('position');
  console.log('\nVWA (' + vwa.length + '):');
  for (const v of vwa) {
    const a = typeof v.analysis_axes === 'string' ? JSON.parse(v.analysis_axes) : v.analysis_axes;
    const nConcepts = a.concepts ? Object.keys(a.concepts).length : 0;
    const retenu = a.concepts ? Object.entries(a.concepts).filter(([,c]) => c.status === 'retenu').length : 0;
    const nProof = a.concepts ? Object.values(a.concepts).filter(c => c.proof_ctx && c.proof_ctx.length > 0).length : 0;
    console.log('  pos=' + v.position + ' ' + v.word_key + ' → ' + a.concept_chosen + ' / ' + v.sense_chosen
      + ' | concepts=' + nConcepts + ' retenu=' + retenu + ' proof_ctx=' + nProof + ' V3=' + !!a.concepts);
  }

  // ── meaning_type check ───────────────────────────────────────────────────
  console.log('\nmeaning_type du sens retenu :');
  for (const v of vwa) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', v.word_key).maybeSingle();
    if (!wa) { console.log('  ' + v.word_key + ': MANQUANT dans word_analyses ❌'); continue; }
    const { data: wm } = await db.from('word_meanings').select('meaning_type, concept').eq('analysis_id', wa.id).eq('sense', v.sense_chosen);
    const types = (wm || []).map(m => m.meaning_type);
    const ok = types.includes('etymology') || types.includes('quranic');
    console.log('  ' + v.word_key + ' "' + v.sense_chosen + '": [' + types.join(',') + ']' + (ok ? ' ✓' : ' ❌ MANQUE etymology/quranic'));
  }

  // ── Richesse des racines ─────────────────────────────────────────────────
  console.log('\nRichesse des racines :');
  const seen = new Set();
  for (const v of vwa) {
    if (seen.has(v.word_key)) continue; seen.add(v.word_key);
    const { data: wa } = await db.from('word_analyses').select('id, root_phon, analysis_step, total_occurrences').eq('word_key', v.word_key).maybeSingle();
    if (!wa) continue;
    const { count } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.id);
    const { count: dc } = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.id);
    const status = count >= 5 ? '✅' : (count > 0 ? '⚠ <5' : '❌');
    console.log('  ' + v.word_key + ' (phon=' + wa.root_phon + ') : ' + count + ' sens, ' + dc + ' daily, step=' + wa.analysis_step + ' ' + status);
  }

  // ── Doublons racines ─────────────────────────────────────────────────────
  console.log('\nDoublons racines :');
  const seenR = new Set();
  let doublons = 0;
  for (const v of vwa) {
    if (seenR.has(v.word_key)) continue; seenR.add(v.word_key);
    const { data: wa } = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key', v.word_key).maybeSingle();
    if (!wa) continue;
    const { data: dupes } = await db.from('word_analyses').select('word_key').eq('root_ar', wa.root_ar);
    if (dupes && dupes.length > 1) {
      const others = dupes.filter(d => d.word_key !== v.word_key).map(d => d.word_key);
      console.log('  ⚠ ' + v.word_key + ' (root_ar=' + wa.root_ar + ') → doublons : [' + others.join(', ') + ']');
      doublons++;
    }
  }
  if (doublons === 0) console.log('  Aucun doublon ✅');

  // ── §DEMARCHE§ intro ─────────────────────────────────────────────────────
  const expl = va.translation_explanation;
  const demStart = expl.indexOf('§DEMARCHE§');
  const justStart = expl.indexOf('§JUSTIFICATION§');
  const critStart = expl.indexOf('§CRITIQUE§');
  const demarche = expl.substring(demStart + 10, justStart).trim();
  const paragraphs = demarche.split('\n\n').filter(p => p.trim());
  console.log('\n§DEMARCHE§ : ' + paragraphs.length + ' paragraphes');
  console.log('  Intro : ' + paragraphs[0].substring(0, 120) + '...');

  // Vérification : chaque paragraphe (hors intro) commence par **mot_phonétique**
  let malformed = 0;
  for (const p of paragraphs.slice(1)) {
    if (!p.trim().startsWith('**')) { malformed++; console.log('  ⚠ Paragraphe mal formaté : ' + p.substring(0, 80)); }
  }
  if (malformed === 0) console.log('  Format §DEMARCHE§ : OK ✅');

  // Vérification : pas d'anglais dans §DEMARCHE§ (cherche des mots typiquement anglais)
  const engWords = ['the', 'and', 'of', 'to', 'is', ' a ', 'that', 'this', 'Lane\'s', 'means'];
  // Lane's est attendu dans les descriptions mais les phrases explicatives doivent être en français
  // On vérifie juste quelques mots courants en anglais hors noms propres
  const hasEnglish = ['the', 'and of the', 'is a'].some(w => demarche.toLowerCase().includes(' ' + w + ' '));
  console.log('  Anglais dans §DEMARCHE§ : ' + (hasEnglish ? '⚠ possible' : 'non ✅'));

  console.log('\n§JUSTIFICATION§ : ' + expl.substring(justStart + 15, critStart).trim().split('\n\n').filter(p => p.trim()).length + ' paragraphes');
  console.log('\n§CRITIQUE§ intro :');
  console.log(expl.substring(critStart + 10).trim().split('\n\n')[0].substring(0, 200));

  console.log('\n=== FIN VALIDATION S3:V77 ===');
}
run().catch(console.error);
