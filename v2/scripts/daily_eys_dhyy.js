const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const phrases = [
  // eys (id=690) — Jésus / couleur
  { analysis_id: 690, arabic: 'عِيسَى ٱبْنُ مَرْيَمَ.', phon: "ʿīsā bnu maryama.", french: "Jésus fils de Marie.", sense: 'Jésus' },
  { analysis_id: 690, arabic: 'جَمَلٌ أَعْيَسُ.', phon: "jamalun aʿyasu.", french: "Un chameau de couleur blanche teintée.", sense: 'Blanc teinté de rouge' },
  { analysis_id: 690, arabic: 'رَجُلٌ أَعْيَسُ ٱلشَّعْرِ.', phon: "rajulun aʿyasu sh-shaʿri.", french: "Un homme aux cheveux blancs.", sense: 'Cheveux blancs' },

  // dhyy (id=281) — pronom relatif (cas particulier — phrases d'usage)
  { analysis_id: 281, arabic: 'ٱلَّذِينَ يَعْمَلُونَ.', phon: "alladhīna yaʿmalūna.", french: "Ceux qui travaillent.", sense: 'non trouvé' },
  { analysis_id: 281, arabic: 'ٱلَّذِينَ سَافَرُوا.', phon: "alladhīna sāfarū.", french: "Ceux qui ont voyagé.", sense: 'non trouvé' },
  { analysis_id: 281, arabic: 'ٱلَّذِينَ مَعَنَا.', phon: "alladhīna maʿanā.", french: "Ceux qui sont avec nous.", sense: 'non trouvé' }
];

(async () => {
  for (const p of phrases) {
    const { error } = await db.from('word_daily').insert(p);
    if (error) console.log('ERR', p.french, error.message);
    else console.log('OK', p.french);
  }
})();
