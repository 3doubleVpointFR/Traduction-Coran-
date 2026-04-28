// Daily phrases for ahl, axdh, shyy
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const phrases = {
  ahl: [
    { arabic: "أَهْلًا وَسَهْلًا بِكُمْ فِي بَيْتِنَا", phon: "ahlan wa sahlan bikum fī baytinā", french: "Bienvenue chez nous dans notre maison", sense: "gens" },
    { arabic: "كُلُّ أَهْلِ الْقَرْيَةِ يَعْرِفُونَهُ", phon: "kullu ahli l-qaryati yaʿrifūnahu", french: "Tous les gens du village le connaissent", sense: "gens" },
    { arabic: "زَارَ أَهْلَهُ فِي الْعِيدِ", phon: "zāra ahlahu fī l-ʿīdi", french: "Il a rendu visite à sa famille pendant la fête", sense: "famille" }
  ],
  axdh: [
    { arabic: "أَخَذَ الْكِتَابَ مِنَ الرَّفِّ", phon: "akhadha l-kitāba mina r-raffi", french: "Il a pris le livre sur l'étagère", sense: "prendre" },
    { arabic: "اِتَّخَذَ قَرَارًا صَعْبًا", phon: "ittakhadha qarāran ṣaʿban", french: "Il a pris une décision difficile", sense: "se prendre pour" },
    { arabic: "اِتَّخَذَهُ صَدِيقًا", phon: "ittakhadhahu ṣadīqan", french: "Il l'a pris comme ami", sense: "se prendre pour" }
  ],
  shyy: [
    { arabic: "لَا شَيْءَ يَبْقَى", phon: "lā shay'a yabqā", french: "Rien ne reste", sense: "chose" },
    { arabic: "كُلُّ شَيْءٍ بِقَدَرٍ", phon: "kullu shay'in bi-qadarin", french: "Toute chose est selon une mesure", sense: "chose" },
    { arabic: "أَعْطَاهُ شَيْئًا مِنَ الْمَالِ", phon: "aʿṭāhu shay'an mina l-māli", french: "Il lui a donné quelque chose de l'argent", sense: "quelque chose" }
  ]
};

async function run() {
  for (const [key, items] of Object.entries(phrases)) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', key);
    if (!wa || !wa.length) { console.log('MANQUANT ' + key); continue; }
    const aid = wa[0].id;
    const { count } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
    if (count > 0) { console.log(key + ' SKIP (' + count + ' phrases existantes)'); continue; }
    const rows = items.map(p => ({ analysis_id: aid, ...p }));
    const { error } = await db.from('word_daily').insert(rows);
    if (error) { console.log(key + ' ERR:', error.message); }
    else console.log(key + ' → ' + rows.length + ' phrases insérées');
  }
}
run().catch(e => { console.error(e); process.exit(1); });
