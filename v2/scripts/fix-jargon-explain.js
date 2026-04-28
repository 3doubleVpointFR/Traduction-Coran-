const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function explainJargon(text) {
  if (!text) return text;
  let t = text;

  // =====================================================
  // A. TERMES ISLAMIQUES/CORANIQUES → français d'abord, arabe en parenthèses
  // =====================================================
  const islamicTerms = [
    // Terme arabe → [regex, remplacement "français (arabe)"]
    // On ne remplace que si le terme n'est pas déjà suivi d'une parenthèse explicative
    [/\btaqwa\b(?!\s*\()/gi, 'la prémunition (*taqwa*)'],
    [/\bmuttaqin\b(?!\s*\()/gi, 'ceux qui se prémunissent (*muttaqīn*)'],
    [/\bmuttaq[īi]n\b(?!\s*\()/gi, 'ceux qui se prémunissent (*muttaqīn*)'],
    [/\bfitna\b(?!\s*\()/gi, 'l\'épreuve/tentation (*fitna*)'],
    [/\bjunaha\b(?!\s*\()/gi, 'l\'inclinaison vers la faute (*junāḥa*)'],
    [/\bta'r[iy][dḍ]h?\b(?!\s*\()/gi, 'l\'allusion voilée (*ta\'rīḍ*)'],
    [/\btasrih\b(?!\s*\()/gi, 'la déclaration directe (*taṣrīḥ*)'],
    [/\bkitmane?\b(?!\s*\()/gi, 'la dissimulation (*kitmān*)'],
    [/\btalaq\b(?!\s*\()/gi, 'la répudiation (*ṭalāq*)'],
    [/\b['\u2018\u2019]?idda[h]?\b(?!\s*\()/gi, 'la période d\'attente (*\'idda*)'],
    [/\bnikah\b(?!\s*\()/gi, 'le mariage (*nikāḥ*)'],
    [/\bmahr\b(?!\s*\()/gi, 'la dot (*mahr*)'],
    [/\briba\b(?!\s*\()/gi, 'l\'usure (*ribā*)'],
    [/\bjihad\b(?!\s*\()/gi, 'l\'effort (*jihād*)'],
    [/\bhajj\b(?!\s*\()/gi, 'le pèlerinage (*ḥajj*)'],
    [/\bsalat\b(?!\s*\()/gi, 'la prière rituelle (*ṣalāt*)'],
    [/\bzakat\b(?!\s*\()/gi, 'la purification des biens (*zakāt*)'],
    [/\bkafir\b(?!\s*\()/gi, 'celui qui recouvre (*kāfir*)'],
    [/\bkufr\b(?!\s*\()/gi, 'le recouvrement (*kufr*)'],
    [/\bshirk\b(?!\s*\()/gi, 'l\'association (*shirk*)'],
    [/\bmunafiq\b(?!\s*\()/gi, 'l\'hypocrite (*munāfiq*)'],
    [/\bnifaq\b(?!\s*\()/gi, 'l\'hypocrisie (*nifāq*)'],
    [/\biman\b(?!\s*\()/gi, 'la confiance (*īmān*)'],
    [/\bbirr\b(?!\s*\()/gi, 'la piété (*birr*)'],
    [/\bithm\b(?!\s*\()/gi, 'le péché (*ithm*)'],
    [/\btawba\b(?!\s*\()/gi, 'le retour/repentir (*tawba*)'],
    [/\bdhikr\b(?!\s*\()/gi, 'le rappel (*dhikr*)'],
    [/\bsabr\b(?!\s*\()/gi, 'la persévérance (*ṣabr*)'],
    [/\bihsan\b(?!\s*\()/gi, 'l\'excellence (*iḥsān*)'],
    [/\bzulm\b(?!\s*\()/gi, 'l\'injustice (*ẓulm*)'],
    [/\bhikma[h]?\b(?!\s*\()/gi, 'la sagesse (*ḥikma*)'],
    [/\bfasad\b(?!\s*\()/gi, 'la corruption (*fasād*)'],
    [/\bislah\b(?!\s*\()/gi, 'la réforme (*iṣlāḥ*)'],
    [/\bma['ʿ]ruf\b(?!\s*\()/gi, 'ce qui est reconnu comme bien (*ma\'rūf*)'],
    [/\bmunkar\b(?!\s*\()/gi, 'ce qui est réprouvé (*munkar*)'],
    [/\bnafs\b(?!\s*\()/gi, 'l\'âme/le soi (*nafs*)'],
    [/\banfus\b(?!\s*\()/gi, 'les âmes (*anfus*)'],
    [/\balladhina\b(?!\s*\()/gi, 'ceux qui (*alladhīna*)'],
    [/\bajal\b(?!\s*\()/gi, 'le terme fixé (*ajal*)'],
  ];

  for (const [pattern, replacement] of islamicTerms) {
    // Only replace first occurrence to avoid cluttering
    t = t.replace(pattern, replacement);
  }

  // =====================================================
  // B. MOTS ARABES EN GRAS **al-xxx** — ajouter le français si absent
  // =====================================================
  // Common bold Arabic terms and their French meanings
  const boldArabicMap = {
    'al-nas': 'les gens', 'al-nās': 'les gens', 'al-nasi': 'les gens',
    'al-kitab': 'le Livre', 'al-kitāb': 'le Livre',
    'al-ard': 'la terre', 'al-arḍ': 'la terre',
    'al-sama': 'le ciel', 'al-samā': 'le ciel', 'al-samawat': 'les cieux',
    'al-yawm': 'le jour', 'al-akhir': 'le dernier', 'al-akhira': 'l\'au-delà',
    'al-dunya': 'l\'ici-bas', 'al-dunyā': 'l\'ici-bas',
    'al-haqq': 'la vérité/le droit', 'al-ḥaqq': 'la vérité/le droit',
    'al-batil': 'le faux', 'al-bāṭil': 'le faux',
    'al-nur': 'la lumière', 'al-nūr': 'la lumière',
    'al-zulumāt': 'les ténèbres', 'al-zulumat': 'les ténèbres',
    'al-janna': 'le jardin/paradis', 'al-nar': 'le feu',
    'al-mawt': 'la mort', 'al-hayat': 'la vie', 'al-ḥayāt': 'la vie',
    'al-salat': 'la prière', 'al-ṣalāt': 'la prière',
    'al-birr': 'la piété',
    'al-baqara': 'la vache', 'al-baqarah': 'la vache',
    'wa-mina': 'et parmi',
    'al-ladhina': 'ceux qui', 'alladhīna': 'ceux qui',
    'al-mu\'minin': 'les confiants', 'al-mu\'minīn': 'les confiants',
    'al-kafirin': 'les recouvrants', 'al-kāfirīn': 'les recouvrants',
    'al-zalimin': 'les injustes', 'al-ẓālimīn': 'les injustes',
    'al-fasiqin': 'les pervers', 'al-fāsiqīn': 'les pervers',
    'al-qiblah': 'la direction de prière', 'al-qibla': 'la direction de prière',
    'al-tawrat': 'la Torah', 'al-tawrāt': 'la Torah',
    'al-injil': 'l\'Évangile', 'al-injīl': 'l\'Évangile',
    'al-shaytan': 'le diable', 'al-shaytān': 'le diable',
    'al-rahman': 'la Source de grâce', 'al-raḥmān': 'la Source de grâce',
    'al-rahim': 'le Très-miséricordieux', 'al-raḥīm': 'le Très-miséricordieux',
  };

  // For each **bold Arabic** term, add French if not already explained nearby
  for (const [arab, french] of Object.entries(boldArabicMap)) {
    const escaped = arab.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('\\*\\*' + escaped + '\\*\\*(?!\\s*\\(' + french.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\))', 'gi');
    // Only if the French isn't already right after
    t = t.replace(re, (match) => {
      return match + ' (' + french + ')';
    });
  }

  // =====================================================
  // C. TERMES GRAMMATICAUX — accompli, inaccompli, formes
  // =====================================================

  // "accompli 1P" → "verbe au passé, 1ère personne du pluriel (nous)"
  t = t.replace(/accompli 1P\b/g, 'verbe au passé à la 1ère personne du pluriel (nous)');
  t = t.replace(/accompli p\b/g, 'verbe au passé');
  t = t.replace(/accompli 3MS/g, 'verbe au passé, 3ème personne (il)');
  t = t.replace(/accompli 3FS/g, 'verbe au passé, 3ème personne féminin (elle)');
  t = t.replace(/accompli 3MP/g, 'verbe au passé, 3ème personne du pluriel (ils)');
  t = t.replace(/accompli 2MP/g, 'verbe au passé, 2ème personne du pluriel (vous)');
  t = t.replace(/accompli 2MS/g, 'verbe au passé, 2ème personne (tu)');

  // First occurrence of "accompli" → add explanation
  if (!/au passé \(accompli\)/.test(t) && !/temps passé/.test(t)) {
    t = t.replace(/\best un accompli\b(?! \()/i, 'est un verbe au passé (accompli)');
  }
  // First occurrence of "inaccompli" → add explanation
  if (!/temps présent/.test(t) && !/au présent/.test(t) && !/\(inaccompli\)/.test(t)) {
    t = t.replace(/\binaccompli\b(?! \()/i, 'inaccompli (temps présent ou futur)');
  }

  // Formes verbales — only if not already followed by parenthetical
  t = t.replace(/forme II(?!\s*\()/g, 'forme II (intensification)');
  t = t.replace(/forme III(?!\s*\()/g, 'forme III (interaction/réciprocité)');
  t = t.replace(/forme IV(?!\s*\()/g, 'forme IV (faire faire quelque chose)');
  t = t.replace(/forme V(?!\s*\()/g, 'forme V (réflexif — se faire à soi-même)');
  t = t.replace(/forme VI(?!\s*\()/g, 'forme VI (action mutuelle entre plusieurs)');
  t = t.replace(/forme VII(?!\s*\()/g, 'forme VII (passif — subir l\'action)');
  t = t.replace(/forme VIII(?!\s*\()/g, 'forme VIII (réflexif — agir sur soi-même)');
  t = t.replace(/forme X(?!\s*\()/g, 'forme X (chercher/demander quelque chose)');
  t = t.replace(/forme I(?!\s*\(|I|V|X| )/g, 'forme I (forme de base)');

  // =====================================================
  // D. TERMES GRAMMATICAUX ARABES ISOLÉS
  // =====================================================
  if (!/idafa\s*\(/.test(t) && !/lien possessif/.test(t)) {
    t = t.replace(/\b(?:en )?idafa\b/gi, 'en lien possessif (*idāfa*)');
    t = t.replace(/\biḍāfa\b/gi, 'lien possessif (*idāfa*)');
  }
  if (!/masdar\s*\(/.test(t) && !/nom d'action/.test(t)) {
    t = t.replace(/\bmasdar\b/gi, 'nom d\'action (*masdar*)');
  }
  // fi'l, fa'il, maf'ul
  t = t.replace(/\bfi['ʿ]l\b(?!\s*\()/gi, 'verbe (*fi\'l*)');
  t = t.replace(/\bfa['ʿ]il\b(?!\s*\()/gi, 'agent (*fā\'il*)');
  t = t.replace(/\bmaf['ʿ][uū]l\b(?!\s*\()/gi, 'complément (*maf\'ūl*)');
  t = t.replace(/\bmufa['ʿ]ala\b(?!\s*\()/gi, 'réciprocité (*mufā\'ala*)');

  // Cas grammaticaux — seulement 1ère occurrence de chaque
  if (!/accusatif \(/.test(t)) {
    t = t.replace(/\bau cas accusatif\b/, 'au cas accusatif (complément d\'objet)');
    t = t.replace(/\bl'accusatif\b/, 'l\'accusatif (fonction complément)');
  }
  if (!/nominatif \(/.test(t)) {
    t = t.replace(/\bau cas nominatif\b/, 'au cas nominatif (sujet)');
  }
  if (!/génitif \(|genitif \(/.test(t)) {
    t = t.replace(/\bau g[ée]nitif\b/, 'au génitif (complément du nom)');
  }

  // =====================================================
  // E. "Lane's" → expliquer ce que c'est (1ère occurrence)
  // =====================================================
  if (t.includes("Lane's") && !t.includes("dictionnaire de référence") && !t.includes("dictionnaire Lane")) {
    t = t.replace(/Le Lane's donne/i, 'Le dictionnaire de référence Lane\'s (lexique arabe-anglais de référence) donne');
  }

  // =====================================================
  // F. SUPPRIMER les schèmes arabes isolés entre parenthèses
  //    car les formes sont déjà expliquées en français
  // =====================================================
  t = t.replace(/ \(af['ʿ]ala\)/g, '');
  t = t.replace(/ \(if['ʿ]tala\)/g, '');
  t = t.replace(/ \(ifta['ʿ]ala\)/g, '');
  t = t.replace(/ \(tafa['ʿ]['ʿ]ala\)/g, '');
  t = t.replace(/ \(fa['ʿ]['ʿ]ala\)/g, '');
  t = t.replace(/ \(istaf['ʿ]ala\)/g, '');
  t = t.replace(/ \(taf['ʿ]il\)/g, '');
  t = t.replace(/ \(istif['ʿ]al\)/g, '');
  t = t.replace(/ \(tafa['ʿ]ul\)/g, '');
  t = t.replace(/ \(if'tala\)/g, '');

  // =====================================================
  // G. PHRASES TYPES avec translittération inline → reformuler
  // =====================================================
  // Pattern: "la junaha 'alaykum fima 'arradtum bihi" → mettre le français d'abord
  // These are full Arabic phrases left untranslated
  t = t.replace(/la junaha ['ʿ]alaykum/gi, 'pas de faute sur vous (*lā junāḥa ʿalaykum*)');
  t = t.replace(/['ʿ]alaykum/gi, 'sur vous (*ʿalaykum*)');
  t = t.replace(/\blakum\b(?!\s*\()/gi, 'pour vous (*lakum*)');
  t = t.replace(/\bfima\b(?!\s*\()/gi, 'en ce que (*fīmā*)');
  t = t.replace(/\bbihi\b(?!\s*\()/gi, 'par cela (*bihi*)');
  t = t.replace(/\bfihi\b(?!\s*\()/gi, 'en cela (*fīhi*)');
  t = t.replace(/\bminhu\b(?!\s*\()/gi, 'de lui (*minhu*)');
  t = t.replace(/\blahu\b(?!\s*\()/gi, 'à lui (*lahu*)');
  t = t.replace(/\bilayhi\b(?!\s*\()/gi, 'vers lui (*ilayhi*)');
  t = t.replace(/\bbaynakum\b(?!\s*\()/gi, 'entre vous (*baynakum*)');
  t = t.replace(/\bba['ʿ]di\b(?!\s*\()/gi, 'après (*ba\'di*)');

  // =====================================================
  // H. Nettoyage final
  // =====================================================
  t = t.replace(/  +/g, ' ');
  t = t.replace(/ \./g, '.');
  t = t.replace(/ ,/g, ',');
  // Eviter les doubles parenthèses
  t = t.replace(/\(\(([^)]+)\)\)/g, '($1)');
  // Eviter les explications doublées
  t = t.replace(/(complément d'objet)\)\s*\(complément d'objet\)/g, '$1)');
  t = t.replace(/(sujet)\)\s*\(sujet\)/g, '$1)');

  return t;
}

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixed = 0;

  for (const va of data) {
    if (!va.translation_explanation || va.translation_explanation.length < 50) continue;

    const original = va.translation_explanation;
    const explained = explainJargon(original);

    if (explained !== original) {
      await db.from('verse_analyses').update({translation_explanation: explained}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Démarches avec jargon expliqué:', fixed);

  // Show samples
  for (const vid of [15, 50, 100, 200, 242]) {
    const {data: va} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log('\n=== V' + (vid-7) + ' (extrait) ===');
    console.log(va.translation_explanation.substring(0, 500));
    console.log('...\n');
  }
})();
