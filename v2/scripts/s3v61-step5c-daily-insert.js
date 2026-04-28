// Insert daily phrases for bhl (sens retenu: s'humilier en invocation)
// elw (sens retenu: le Très-Haut — mais usage courant "taʿāl = viens" aussi)
// nsw (sens retenu: femmes)
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const DAILY = [
  // bhl aid=1287 — sens retenu "s'humilier en invocation" (ibtahala)
  { analysis_id: 1287, arabic: 'أَبْتَهِلُ إِلَى ٱللَّهِ', phon: 'abtahilu ilā llāhi', french: 'Je m\'humilie en invocation vers Dieu', sense: "s'humilier en invocation" },
  { analysis_id: 1287, arabic: 'نَبْتَهِلُ فِي ٱلدُّعَاءِ', phon: 'nabtahilu fī d-duʿāʾi', french: 'Nous nous humilions en invocation dans la prière', sense: "s'humilier en invocation" },
  { analysis_id: 1287, arabic: 'اِبْتَهَلَ بِٱلدُّعَاءِ', phon: 'ibtahala bi-d-duʿāʾi', french: 'Il s\'est humilié en invocation par la prière', sense: "s'humilier en invocation" },
  // elw aid=371 — sens retenu "le Très-Haut" (rattaché à la formule taʿāl(aw))
  { analysis_id: 371, arabic: 'تَعَالَ إِلَىٰ هُنَا', phon: 'taʿāl ilā hunā', french: 'Viens par ici', sense: 'le Très-Haut' },
  { analysis_id: 371, arabic: 'تَعَالَوْا نَجْلِسُ', phon: 'taʿālaw najlisu', french: 'Venez, asseyons-nous', sense: 'le Très-Haut' },
  { analysis_id: 371, arabic: 'ٱللَّهُ تَعَالَىٰ', phon: 'allāhu taʿālā', french: 'Dieu le Très-Haut', sense: 'le Très-Haut' },
  // nsw aid=2198 — sens retenu "femmes"
  { analysis_id: 2198, arabic: 'ٱلنِّسَاءُ فِي ٱلْبَيْتِ', phon: 'an-nisāʾu fī l-bayti', french: 'Les femmes sont à la maison', sense: 'femmes' },
  { analysis_id: 2198, arabic: 'نِسَاؤُنَا وَأَطْفَالُنَا', phon: 'nisāʾunā wa-aṭfālunā', french: 'Nos femmes et nos enfants', sense: 'femmes' },
  { analysis_id: 2198, arabic: 'يَتَحَدَّثُ مَعَ ٱلنِّسَاءِ', phon: 'yataḥaddathu maʿa n-nisāʾi', french: 'Il discute avec les femmes', sense: 'femmes' }
];

async function run() {
  for (const d of DAILY) {
    const { error } = await db.from('word_daily').insert(d);
    if (error) { console.error('ERR:', d, error); throw error; }
    console.log('+ aid=' + d.analysis_id + ' : ' + d.french);
  }
  console.log('\nDone. ' + DAILY.length + ' phrases insérées.');
}
run().catch(e => { console.error(e); process.exit(1); });
