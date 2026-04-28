/**
 * RESTAURATION COMPLÈTE SOURATE 3 (V26 → V78)
 * Réexécute en séquence tous les scripts pipeline disponibles.
 * V79 + V80 déjà restaurés. V1-V25, V53, V54, V55, V57 perdus.
 */

const { spawnSync } = require('child_process');
const path = require('path');

const SCRIPTS_DIR = __dirname;

// Ordre exact d'exécution. Chaque entrée = [verse_num, [scripts...]]
const PLAN = [
  [26, ['enrich-s3v26-roots.js', 'pipeline-s3v26-etape34.js']],
  [27, ['enrich-s3v27-wlj.js', 'pipeline-s3v27-etape34.js']],
  [28, ['enrich-s3v28-roots.js', 'pipeline-s3v28-phase1.js', 'pipeline-s3v28-etape34.js']],
  [29, ['pipeline-s3v29-phase1.js', 'pipeline-s3v29-etape34.js', 'pipeline-s3v29-fix-vwa.js']],
  [30, ['pipeline-s3v30-phase1.js', 'pipeline-s3v30-etape34.js']],
  [31, ['pipeline-s3v31-etape34.js']],
  [32, ['pipeline-s3v32-etape34.js']],
  [33, ['pipeline-s3v33-etape34.js']],
  [34, ['pipeline-s3v34-etape34.js']],
  [35, ['pipeline-s3v35-etape34.js']],
  [36, ['pipeline-s3v36-etape34.js']],
  [37, ['pipeline-s3v37-etape34.js']],
  [38, ['pipeline-s3v38-etape34.js']],
  [39, ['pipeline-s3v39-etape34.js']],
  [40, ['pipeline-s3v40-etape34.js']],
  [41, ['pipeline-s3v41-etape34.js']],
  [42, ['pipeline-s3v42-etape34.js']],
  [43, ['pipeline-s3v43-etape34.js']],
  [44, ['pipeline-s3v44-etape34.js']],
  [45, ['pipeline-s3v45-etape34.js']],
  [46, ['pipeline-s3v46-etape34.js']],
  [47, ['pipeline-s3v47-etape234.js']],
  [48, ['pipeline-s3v48.js']],
  [49, ['pipeline-s3v49.js']],
  [50, ['pipeline-s3v50.js']],
  [51, ['pipeline-s3v51.js']],
  [52, ['pipeline-s3v52.js']],
  [56, ['pipeline-s3v56.js', 'pipeline-s3v56-enrich.js', 'pipeline-s3v56-fix.js']],
  [58, ['pipeline-s3v58.js']],
  [59, ['pipeline-s3v59.js']],
  [60, ['pipeline-s3v60.js']],
  [61, ['pipeline-s3v61.js']],
  [62, ['pipeline-s3v62.js']],
  [63, ['pipeline-s3v63.js']],
  [64, ['pipeline-s3v64.js']],
  [65, ['pipeline-s3v65.js']],
  [66, ['pipeline-s3v66.js']],
  [67, ['pipeline-s3v67.js']],
  [68, ['pipeline-s3v68.js']],
  [69, ['pipeline-s3v69.js']],
  [70, ['pipeline-s3v70.js']],
  [71, ['pipeline-s3v71.js']],
  [72, ['pipeline-s3v72.js']],
  [73, ['pipeline-s3v73.js']],
  [74, ['pipeline-s3v74.js']],
  [75, ['pipeline-s3v75.js']],
  [76, ['_v76_pipeline.js', 'fix-v76.js', 'fix-v76-critique.js']],
  [77, ['pipeline-s3v77.js', '_fix_s3v77_vwa.js', 'fix-v77.js', 'fix-v77-final.js']],
  [78, ['pipeline-v78.js', 'fix-v78.js', 'fix-v78-daily.js']],
];

const results = [];
const startGlobal = Date.now();

for (const [verseNum, scripts] of PLAN) {
  console.log(`\n══════════════════════════════════════════════════════════`);
  console.log(`▶ V${verseNum}  (${scripts.length} script${scripts.length > 1 ? 's' : ''})`);
  console.log(`══════════════════════════════════════════════════════════`);

  let verseOK = true;
  const verseLog = [];

  for (const script of scripts) {
    const scriptPath = path.join(SCRIPTS_DIR, script);
    const start = Date.now();
    process.stdout.write(`  • ${script} ... `);

    const res = spawnSync('node', [scriptPath], {
      cwd: path.dirname(SCRIPTS_DIR),
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024,
    });

    const dur = ((Date.now() - start) / 1000).toFixed(1);
    if (res.status === 0) {
      console.log(`OK (${dur}s)`);
      verseLog.push({ script, status: 'OK', dur });
    } else {
      console.log(`❌ FAIL (${dur}s, exit=${res.status})`);
      const stderrTail = (res.stderr || '').split('\n').slice(-10).join('\n');
      const stdoutTail = (res.stdout || '').split('\n').slice(-5).join('\n');
      console.log(`    --- stderr ---\n${stderrTail}`);
      if (stdoutTail) console.log(`    --- stdout ---\n${stdoutTail}`);
      verseLog.push({ script, status: 'FAIL', dur, stderr: stderrTail });
      verseOK = false;
    }
  }

  results.push({ verseNum, ok: verseOK, scripts: verseLog });
}

const totalDur = ((Date.now() - startGlobal) / 1000).toFixed(1);

console.log(`\n\n╔══════════════════════════════════════════════════════════╗`);
console.log(`║   RÉCAPITULATIF — durée totale ${totalDur}s`);
console.log(`╚══════════════════════════════════════════════════════════╝`);

const ok = results.filter(r => r.ok);
const ko = results.filter(r => !r.ok);
console.log(`\n✅ ${ok.length} versets OK : ${ok.map(r => r.verseNum).join(', ')}`);
if (ko.length > 0) {
  console.log(`\n❌ ${ko.length} versets KO :`);
  for (const r of ko) {
    const failed = r.scripts.filter(s => s.status === 'FAIL').map(s => s.script);
    console.log(`  V${r.verseNum} → ${failed.join(', ')}`);
  }
}

console.log(`\n📌 Versets définitivement perdus (pas de script) : V1-V25, V53, V54, V55, V57`);
console.log(`📌 V79 + V80 déjà restaurés en amont.`);
