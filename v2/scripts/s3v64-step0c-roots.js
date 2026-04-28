const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const ROOTS = [
  { key: 'qwl',  name: 'qawl (dire)' },
  { key: 'ahl',  name: 'ahl (gens, famille)' },
  { key: 'ktb',  name: 'kitab (livre/écriture)' },
  { key: 'elw',  name: 'ʿalā (venir haut)' },
  { key: 'klm',  name: 'kalima (parole)' },
  { key: 'swy',  name: 'sawā (égalité)' },
  { key: 'byn',  name: 'bayna (entre)' },
  { key: 'ebd',  name: 'ʿabada (adorer)' },
  { key: 'alh',  name: 'ilah (divinité)' },
  { key: 'shrk', name: 'ashraka (associer)' },
  { key: 'shyy', name: 'shayʾ (chose)' },
  { key: 'axdh', name: 'akhadha (prendre)' },
  { key: 'bed',  name: 'baʿḍ (partie)' },
  { key: 'rbb',  name: 'rabb/arbāb (seigneur)' },
  { key: 'dwn',  name: 'dūn (en dessous)' },
  { key: 'wly',  name: 'tawallā (se détourner)' },
  { key: 'shhd', name: 'shahida (témoigner)' },
  { key: 'slm',  name: 'muslim (se remettre)' }
];

async function run() {
  for (const r of ROOTS) {
    const { data: wa } = await db.from('word_analyses').select('id,root_arabic,analysis_step,total_occurrences').eq('word_key', r.key);
    if (!wa || !wa.length) {
      console.log('  [MANQUANT] ' + r.key + ' ' + r.name);
      continue;
    }
    const aid = wa[0].id;
    const { data: wm } = await db.from('word_meanings').select('id,sense,concept_group').eq('analysis_id', aid);
    const n = wm ? wm.length : 0;
    // list concepts
    const concepts = wm ? Array.from(new Set(wm.map(x => x.concept_group).filter(Boolean))) : [];
    console.log(r.key.padEnd(5) + ' (aid=' + aid + ') ' + r.name + ' → ' + n + ' sens, step=' + wa[0].analysis_step + ', racine=' + wa[0].root_arabic + ', occ=' + wa[0].total_occurrences);
    console.log('     concepts=' + JSON.stringify(concepts));
  }
}
run().catch(console.error);
