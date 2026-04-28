const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Complete dictionary for ALL remaining empty segments
// Keys are verse_id + position for exact matching
const fixes = {
  // V26 (vid=33)
  '33_38': 'sauf', '33_39': 'les pervers',
  // V102 (vid=109)
  '109_11': 'mais', '109_49': 'sauf',
  // V106 (vid=113)
  '113_9': "d'elle",
  // V144 (vid=151)
  '151_21': 'et certes', '151_33': 'de ce que',
  // V145 (vid=152)
  '152_23': 'de', '152_31': 'parmi',
  // V149 (vid=156)
  '156_9': 'et certes il', '156_16': 'de ce que',
  // V150 (vid=157)
  '157_20': 'sauf',
  // V165 (vid=172)
  '172_28': 'et que',
  // V167 (vid=174)
  '174_12': 'de nous',
  // V168 (vid=175)
  '175_4': 'de ce que',
  // V171 (vid=178)
  '178_10': 'sauf',
  // V172 (vid=179)
  '179_13': 'Lui seul',
  // V174 (vid=181)
  '181_18': 'sauf',
  // V176 (vid=183)
  '183_7': 'et certes',
  // V177 (vid=184)
  '184_9': 'mais',
  // V191 (vid=198)
  '198_5': 'de',
  // V217 (vid=224)
  '224_33': 'vous faire revenir',
  // V219 (vid=226)
  '226_11': 'et leur péché', '226_14': 'leur utilité',
  '226_15': 'et ils te demandent',
  // V221 (vid=228)
  '228_35': 'et expose clairement', '228_37': 'aux gens',
  // V222 (vid=229)
  '229_12': 'les approchez', '229_16': 'se sont purifiées',
  '229_17': 'alors allez à elles', '229_26': 'et aime',
  // V228 (vid=235)
  '235_22': 'et leurs époux', '235_23': 'ont plus de droit',
  '235_24': 'à les reprendre', '235_35': 'et pour les hommes',
  // V230 (vid=237)
  '237_4': 'est licite', '237_11': 'un autre que lui',
  '237_13': 'la répudie', '237_18': 'se reprennent',
  '237_20': 'pensent', '237_28': 'les expose', '237_29': 'à un peuple',
  // V231 (vid=238)
  '238_2': 'avez répudié', '238_4': 'ont atteint',
  '238_13': 'pour nuire', '238_14': 'par transgression',
  '238_19': 'a fait tort', '238_20': 'à lui-même',
  '238_22': 'prenez', '238_23': 'les signes de',
  '238_35': 'et la sagesse', '238_36': 'vous exhorte',
  '238_43': 'de toute',
  // V232 (vid=239)
  '239_7': 'les empêchez', '239_26': 'plus pur', '239_28': 'et plus décent',
  // V233 (vid=240)
  '240_3': 'leurs enfants', '240_7': 'veut', '240_9': 'parfaire',
  '240_12': 'le père', '240_14': 'leur nourriture',
  '240_15': 'et leurs vêtements', '240_23': 'ne subit de tort',
  '240_25': 'par son enfant', '240_28': 'pour lui',
  '240_29': 'par son enfant', '240_31': "l'héritier",
  '240_35': 'veulent', '240_36': 'le sevrage',
  '240_38': 'consentement mutuel', '240_39': "d'eux deux",
  '240_40': 'et concertation', '240_45': 'vous voulez',
  '240_47': 'faire allaiter', '240_53': 'avez remis',
  '240_55': 'avez donné',
  // V234 (vid=241)
  '241_7': 'en elles-mêmes', '241_12': 'ont atteint',
  '241_25': 'bien informé',
  // V235 (vid=242)
  '242_8': 'la demande en mariage', '242_14': 'sait',
  '242_17': 'vous les évoquerez', '242_20': 'leur promettre',
  '242_24': 'dites', '242_25': 'une parole',
  '242_28': 'vous décidez', '242_29': "le lien du",
  '242_32': 'atteigne', '242_42': 'alors prenez garde',
  // V236 (vid=243)
  '243_13': 'une dot fixée', '243_14': 'et donnez-leur jouissance',
  '243_16': "l'aisé", '243_20': 'sa mesure',
  '243_21': 'une jouissance',
  // V237 (vid=244)
  '244_2': 'les avez répudiées', '244_18': 'pardonne',
  '244_22': 'le mariage', '244_24': 'vous pardonniez',
  '244_25': 'est plus proche', '244_28': "n'oubliez pas",
  '244_29': 'la générosité',
  // V239 (vid=246)
  '246_7': 'êtes en sécurité', '246_14': 'vous étiez',
  // V240 (vid=247)
  '247_7': 'pour leurs épouses', '247_14': 'elles sortent',
  '247_20': 'elles font',
  // V245 (vid=252)
  '252_4': 'prête', '252_7': 'bon', '252_8': 'Il le multiplie',
  '252_14': 'et étend', '252_16': 'vous serez ramenés',
  // V246 (vid=253)
  '253_6': 'les fils de', '253_7': 'Israël',
  '253_10': 'Moïse', '253_24': 'il se peut que vous',
  '253_30': 'combattiez', '253_35': 'nous combattions',
  '253_40': 'avons été expulsés', '253_42': 'nos demeures',
  '253_43': 'et nos enfants', '253_48': 'se détournèrent',
  '253_54': 'des injustes',
  // V249 (vid=256)
  '256_3': 'Talout', '256_4': 'avec les troupes',
  '256_9': 'par une rivière', '256_22': 'a puisé',
  '256_23': 'une gorgée', '256_24': 'de sa main',
  '256_25': 'alors ils burent', '256_31': "l'a traversée",
  '256_38': 'force', '256_41': 'Jalout',
  '256_42': 'et ses troupes', '256_45': 'pensent',
  '256_47': 'vont rencontrer', '256_51': 'de troupe',
  '256_52': 'peu nombreuse', '256_53': 'a vaincu',
  '256_54': 'une troupe', '256_55': 'nombreuse',
  '256_60': 'les endurants',
  // V250 (vid=257)
  '257_1': 'et lorsque',
  // V251 (vid=258)
  '258_2': 'par la permission de', '258_5': 'David',
  '258_6': 'Jalout', '258_7': 'et lui donna',
  '258_11': 'et lui enseigna', '258_15': 'la défense de',
  '258_19': 'par les autres', '258_20': 'se serait corrompue',
  '258_24': 'doué de', '258_25': 'grâce',
  '258_27': 'les mondes',
  // V252 (vid=259)
  '259_9': 'les envoyés',
  // V253 (vid=260)
  '260_2': 'les messagers', '260_13': 'en degrés',
  '260_14': 'et Nous avons donné', '260_15': 'Jésus',
  '260_16': 'fils de', '260_17': 'Marie',
  '260_21': 'le Saint', '260_26': 'se sont combattus',
  '260_29': 'après eux', '260_39': 'a cru',
  '260_47': 'se sont combattus', '260_50': 'fait',
  '260_52': 'veut',
  // V254 (vid=261)
  '261_6': 'vous avons pourvu', '261_10': 'vienne',
  '261_13': 'commerce', '261_16': 'amitié intime',
  // V258 (vid=265)
  '265_8': 'son Seigneur', '265_10': 'lui a donné',
  '265_16': 'mon Seigneur', '265_19': 'et fait mourir',
  '265_22': 'je donne la vie', '265_23': 'et je fais mourir',
  '265_28': 'fait venir', '265_29': 'le soleil',
  '265_31': 'le levant', '265_32': 'alors fais-le venir',
  '265_35': 'le couchant', '265_42': 'le peuple',
  // V259 (vid=266)
  '266_2': 'comme celui qui', '266_3': 'est passé',
  '266_9': 'ses toits', '266_12': 'donne la vie',
  '266_16': 'sa mort', '266_17': 'alors le fit mourir',
  '266_27': 'je suis resté', '266_28': 'un jour',
  '266_34': 'tu es resté', '266_37': 'alors regarde',
  '266_39': 'ta nourriture', '266_40': 'et ta boisson',
  '266_42': 'ne se gâte', '266_45': 'ton âne',
  '266_46': 'et pour faire de toi', '266_47': 'un signe',
  '266_48': 'pour les gens', '266_51': 'les os',
  '266_56': 'de la chair', '266_58': 'est apparu clairement',
  '266_61': 'je sais', '266_66': 'chose',
  '266_67': 'est capable',
  // V260 (vid=267)
  '267_5': 'montre-moi', '267_8': 'les morts',
  '267_11': 'tu crois', '267_16': 'mon cœur',
  '267_18': 'alors prends', '267_19': 'quatre',
  '267_25': 'place', '267_28': 'une montagne',
  '267_29': "d'elles", '267_30': 'une partie',
  '267_32': 'alors appelle-les', '267_33': 'elles viendront à toi',
  '267_35': 'et sache',
  // V282 (vid=289) — 2 remaining
  // V284 (vid=291) — 1 remaining
  // V286 (vid=293)
  '293_40': 'de nous',
};

(async () => {
  // First, gather which verse_ids we need
  const vidSet = new Set();
  for (const key of Object.keys(fixes)) {
    vidSet.add(parseInt(key.split('_')[0]));
  }

  let totalFixed = 0;
  let versesFixed = 0;

  for (const vid of vidSet) {
    const {data: va} = await db.from('verse_analyses').select('id, segments').eq('verse_id', vid).single();
    if (!va) continue;
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let fixedInVerse = 0;
    for (const s of segs) {
      const key = vid + '_' + s.position;
      if (fixes[key] && (!s.fr || s.fr === '' || s.fr === '—')) {
        s.fr = fixes[key];
        fixedInVerse++;
      }
    }

    if (fixedInVerse > 0) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
      totalFixed += fixedInVerse;
      console.log('V' + (vid-7) + ': ' + fixedInVerse + ' segments remplis');
    }
  }

  // Now count remaining empty
  const {data: allVA} = await db.from('verse_analyses')
    .select('verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let stillEmpty = 0;
  let emptyVerses = [];
  for (const va of allVA) {
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : (va.segments || []);
    if (!Array.isArray(segs)) continue;
    let e = 0;
    for (const s of segs) {
      if (!s.fr || s.fr === '' || s.fr === '—') e++;
    }
    if (e > 0) { stillEmpty += e; emptyVerses.push('V'+(va.verse_id-7)+'('+e+')'); }
  }

  console.log('\n=== RÉSULTAT FINAL ===');
  console.log('Versets corrigés:', versesFixed);
  console.log('Segments remplis:', totalFixed);
  console.log('Encore vides:', stillEmpty);
  if (emptyVerses.length > 0) console.log(emptyVerses.join(', '));
})();
