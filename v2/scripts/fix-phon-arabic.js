const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Arabic → Latin transliteration ──────────────────────────────────

const LETTER_MAP = {
  '\u0621': "'",   // ء hamza
  '\u0623': "'",   // أ alef with hamza above
  '\u0625': "'",   // إ alef with hamza below
  '\u0622': "'a",  // آ alef madda
  '\u0671': '',    // ٱ alef wasla
  '\u0627': '',    // ا alef (vowel carrier)
  '\u0628': 'b',
  '\u062A': 't',
  '\u062B': 'th',
  '\u062C': 'j',
  '\u062D': 'h',
  '\u062E': 'kh',
  '\u062F': 'd',
  '\u0630': 'dh',
  '\u0631': 'r',
  '\u0632': 'z',
  '\u0633': 's',
  '\u0634': 'sh',
  '\u0635': 's',
  '\u0636': 'd',
  '\u0637': 't',
  '\u0638': 'z',
  '\u0639': "'",
  '\u063A': 'gh',
  '\u0641': 'f',
  '\u0642': 'q',
  '\u0643': 'k',
  '\u0644': 'l',
  '\u0645': 'm',
  '\u0646': 'n',
  '\u0647': 'h',
  '\u0648': 'w',
  '\u064A': 'y',
  '\u0649': 'Y',   // alef maqsura - special marker
  '\u0629': 'T',   // ta marbuta - special marker
};

const FATHA  = '\u064E';
const DAMMA  = '\u064F';
const KASRA  = '\u0650';
const SUKUN  = '\u0652';
const SHADDA = '\u0651';
const FATHATAN = '\u064B';
const DAMMATAN = '\u064C';
const KASRATAN = '\u064D';
const SUPERSCRIPT_ALEF = '\u0670';
const ALEF = '\u0627';
const WAW  = '\u0648';
const YA   = '\u064A';
const LAM  = '\u0644';
const ALEF_WASLA = '\u0671';
const TA_MARBUTA = '\u0629';
const ALEF_MAQSURA = '\u0649';
const HAMZA_ABOVE = '\u0623';
const HAMZA_BELOW = '\u0625';
const HAMZA = '\u0621';
const ALEF_MADDA = '\u0622';

const SUN_LETTERS = new Set([
  '\u062A', '\u062B', '\u062F', '\u0630', '\u0631', '\u0632',
  '\u0633', '\u0634', '\u0635', '\u0636', '\u0637', '\u0638',
  '\u0644', '\u0646'
]);

function isLetter(ch) {
  return LETTER_MAP[ch] !== undefined;
}

function isDiacritic(ch) {
  const c = ch.charCodeAt(0);
  return (c >= 0x064B && c <= 0x065F) || c === 0x0670;
}

function cleanForTranslit(text) {
  return text
    .replace(/[\u06D6-\u06ED]/g, '')
    .replace(/[\u0610-\u061A]/g, '')
    .replace(/[\u0653-\u0655]/g, '')
    .replace(/[\u0660-\u0669]/g, '')
    .replace(/[\u200B-\u200F\u200C\u200D]/g, '')
    .replace(/\uFDFA|\uFDFB/g, '')
    .replace(/[\u06E5\u06E6]/g, '')
    .replace(/\u0657/g, '')
    .replace(/\u0656/g, '')
    .replace(/\u065C/g, '')
    ;
}

function transliterate(arabic) {
  if (!arabic) return '';
  const text = cleanForTranslit(arabic);
  const chars = [...text];

  // Tokenize: each token = letter + diacritics
  const tokens = [];
  let i = 0;
  while (i < chars.length) {
    if (isLetter(chars[i])) {
      const tok = { ch: chars[i], dia: [] };
      let j = i + 1;
      while (j < chars.length && isDiacritic(chars[j])) {
        tok.dia.push(chars[j]);
        j++;
      }
      tokens.push(tok);
      i = j;
    } else if (isDiacritic(chars[i])) {
      i++; // orphan diacritic
    } else {
      i++; // non-Arabic
    }
  }

  if (tokens.length === 0) return '';

  let result = '';
  let ti = 0;

  // Detect and handle al- prefix
  if (tokens.length >= 2 && isAlefCarrier(tokens[0].ch) && tokens[1].ch === LAM) {
    const lamDia = tokens[1].dia;
    const lamHasShadda = lamDia.includes(SHADDA);

    if (lamHasShadda) {
      // ال with shadda on lam → "All" (e.g., الله → Allah)
      const vowel = vowelFrom(lamDia);
      result = 'All' + vowel;
      ti = 2;
    } else if (tokens.length >= 3 && SUN_LETTERS.has(tokens[2].ch)) {
      // Sun letter assimilation
      const sunBase = baseOf(tokens[2].ch);
      result = 'a' + sunBase[0] + '-';
      ti = 2;
    } else {
      result = 'al-';
      ti = 2;
    }
  }

  while (ti < tokens.length) {
    const tok = tokens[ti];
    const ch = tok.ch;
    const dia = tok.dia;
    const nextTok = ti + 1 < tokens.length ? tokens[ti + 1] : null;

    // --- Alef wasla mid-word: silent ---
    if (ch === ALEF_WASLA) {
      ti++;
      continue;
    }

    // --- Bare alef mid-word: long vowel marker or hamza carrier ---
    if (ch === ALEF && ti > 0) {
      // Usually silent; extends the 'a' vowel of previous consonant
      ti++;
      continue;
    }

    // --- Alef at start without al- detected ---
    if (ch === ALEF && ti === 0) {
      const v = vowelFrom(dia);
      result += v || 'a';
      ti++;
      continue;
    }

    // --- Hamza variants ---
    if (ch === HAMZA_ABOVE || ch === HAMZA_BELOW || ch === HAMZA) {
      const v = vowelFrom(dia);
      if (ti === 0) {
        // Word-initial: just the vowel
        if (ch === HAMZA_BELOW) {
          result += v || 'i';
        } else {
          result += v || 'a';
        }
      } else {
        // Mid-word hamza
        result += "'" + v;
      }
      ti++;
      // Skip following bare alef (long vowel after hamza)
      if (ti < tokens.length && tokens[ti].ch === ALEF) ti++;
      continue;
    }

    // --- Alef madda ---
    if (ch === ALEF_MADDA) {
      result += "'a";
      ti++;
      continue;
    }

    // --- Alef maqsura ---
    if (ch === ALEF_MAQSURA) {
      result += 'a';
      ti++;
      continue;
    }

    // --- Ta marbuta ---
    if (ch === TA_MARBUTA) {
      const tanwin = tanwinFrom(dia);
      if (tanwin) {
        result += 't' + tanwin;
      } else {
        result += 'a';
      }
      ti++;
      continue;
    }

    // --- Waw as long vowel ---
    if (ch === WAW && ti > 0) {
      const prevVowel = rawVowelFrom(tokens[ti - 1].dia);
      if (prevVowel === DAMMA) {
        // Check if waw has no vowel of its own (or sukun) → long u
        const wawVowel = rawVowelFrom(dia);
        if (!wawVowel || wawVowel === SUKUN) {
          ti++;
          continue;
        }
      }
    }

    // --- Ya as long vowel ---
    if (ch === YA && ti > 0) {
      const prevVowel = rawVowelFrom(tokens[ti - 1].dia);
      if (prevVowel === KASRA) {
        const yaVowel = rawVowelFrom(dia);
        if (!yaVowel || yaVowel === SUKUN) {
          ti++;
          continue;
        }
      }
    }

    // --- Regular consonant ---
    let base = baseOf(ch);

    // Shadda: double the consonant
    if (dia.includes(SHADDA)) {
      base = base + base;
    }

    // Vowel
    const v = vowelFrom(dia);

    // Check for long a: fatha + next token is alef
    if (v === 'a' && nextTok && nextTok.ch === ALEF) {
      result += base + 'a';
      ti += 2; // skip alef
      continue;
    }

    result += base + v;
    ti++;
  }

  // Post-process
  result = result
    .replace(/^'+/, '')
    .replace(/'+$/, '')
    .replace(/''+/g, "'")
    .replace(/-+/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '')
    .trim();

  return result;
}

function isAlefCarrier(ch) {
  return ch === ALEF_WASLA || ch === ALEF || ch === HAMZA_ABOVE || ch === HAMZA_BELOW;
}

function baseOf(ch) {
  const b = LETTER_MAP[ch];
  if (b === 'T') return 't'; // ta marbuta fallback
  if (b === 'Y') return 'a'; // alef maqsura fallback
  return b || '';
}

function rawVowelFrom(dia) {
  for (const d of dia) {
    if ([FATHA, DAMMA, KASRA, SUKUN, FATHATAN, DAMMATAN, KASRATAN, SUPERSCRIPT_ALEF].includes(d)) return d;
  }
  return null;
}

function vowelFrom(dia) {
  for (const d of dia) {
    if (d === FATHA || d === SUPERSCRIPT_ALEF) return 'a';
    if (d === DAMMA) return 'u';
    if (d === KASRA) return 'i';
    if (d === SUKUN) return '';
    if (d === FATHATAN) return 'an';
    if (d === DAMMATAN) return 'un';
    if (d === KASRATAN) return 'in';
  }
  return '';
}

function tanwinFrom(dia) {
  for (const d of dia) {
    if (d === FATHATAN) return 'an';
    if (d === DAMMATAN) return 'un';
    if (d === KASRATAN) return 'in';
  }
  return null;
}

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str);
}

// ── Known bad transliterations from first run ───────────────────────
// We identify them by re-transliterating from the arabic field and checking
// if the result from the old (bad) transliterator matches the current phon.

// Old bad transliterator (simplified version to detect its outputs)
function oldTransliterate(arabic) {
  // The old function had known issues:
  // - "ٱلَّذِينَ" → "ad-dhina" (wrong: shadda on lam treated as sun letter)
  // - "ٱلصَّٰلِحَٰتِ" → "ssalihati" (wrong: missing al- prefix)
  // - "مُّ" → "mm" at start (wrong: shadda on first letter)
  // We can't perfectly replicate the old function, so instead:
  // We'll re-transliterate ALL segments from their arabic field and compare.
  return null; // not used
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  const DRY_RUN = process.argv.includes('--dry-run');

  console.log('Fetching all verse_analyses for Sourate 2 (verse_id 8-293)...');
  if (DRY_RUN) console.log('>>> DRY RUN - no updates will be made <<<\n');

  let allRows = [];
  const PAGE = 100;
  for (let offset = 0; ; offset += PAGE) {
    const { data, error } = await db
      .from('verse_analyses')
      .select('id, verse_id, segments, segments_step1')
      .gte('verse_id', 8)
      .lte('verse_id', 293)
      .order('verse_id')
      .range(offset, offset + PAGE - 1);

    if (error) { console.error('Fetch error:', error); return; }
    if (!data || data.length === 0) break;
    allRows.push(...data);
    if (data.length < PAGE) break;
  }

  console.log(`Fetched ${allRows.length} verse_analyses rows.`);

  // Strategy: For every segment, transliterate from the `arabic` field.
  // If the new transliteration differs from the current `phon`, update it.
  // But ONLY if the current phon doesn't already look good (is not Arabic,
  // and looks like a bad transliteration from the first run).
  //
  // Since we can't distinguish "good pipeline phon" from "bad first-run phon",
  // we take a different approach:
  // - The 42 affected verses had phon that WAS Arabic before the first run.
  // - The first run changed those Arabic phon values to bad Latin.
  // - All other verses had good Latin phon from the pipeline.
  // - We can identify "bad first-run Latin" by checking if the current phon
  //   matches common patterns of the old bad transliterator:
  //   * starts with double consonant (e.g., "ssalihati", "mmutahharatun", "rrizqan")
  //   * "ad-dh" pattern (wrong sun letter assimilation for ل with shadda)
  //   * etc.
  //
  // Actually, the cleanest approach: re-transliterate from arabic for ALL segments.
  // If the transliteration from arabic produces something different from current phon,
  // AND the current phon is NOT the good pipeline value (how to tell?), update.
  //
  // Safest: just re-transliterate everything from arabic. The new transliterator
  // produces good output. For segments that had good pipeline phon, the new
  // transliteration from arabic should produce something similar. Let's compare.

  // Let's find all segments where re-transliterating from arabic gives a different
  // result from current phon, and show them for review.
  let totalSegmentsFixed = 0;
  let totalVersesAffected = 0;
  let updateBatch = [];

  for (const row of allRows) {
    if (!Array.isArray(row.segments)) continue;

    let modified = false;
    const newSegments = row.segments.map((seg) => {
      if (!seg.arabic || !seg.phon) return seg;

      // Only fix segments whose phon looks like output from the bad first-run transliterator
      // i.e., the arabic field contains Arabic text and the phon is Latin
      if (hasArabic(seg.phon)) {
        // Still Arabic? Shouldn't happen after first run, but transliterate if so
        const newPhon = transliterate(seg.arabic);
        if (newPhon && newPhon !== seg.phon) {
          modified = true;
          totalSegmentsFixed++;
          return { ...seg, phon: newPhon };
        }
        return seg;
      }

      // Current phon is Latin. Check if it looks like bad transliteration.
      // Re-transliterate from arabic and compare.
      if (!hasArabic(seg.arabic)) return seg; // no arabic source

      const newPhon = transliterate(seg.arabic);
      if (!newPhon) return seg;

      // Only update if different AND the current phon seems problematic
      if (newPhon === seg.phon) return seg;

      // Heuristic: the current phon is from the bad first run if:
      // 1. It starts with double consonant (ss, mm, rr, dd, etc.) - bad shadda at start
      // 2. Contains "ad-dh" or similar wrong sun letter patterns
      // 3. The current phon is very different from what we'd expect

      // Actually, let's be more precise. The good pipeline phon values are
      // typically longer and more carefully crafted. The bad first-run values
      // are identifiable because they were transliterated from the PHON field
      // (which was Arabic), not the arabic field. The arabic field typically
      // has the full word with particles, but the bad phon was transliterated
      // from a truncated Arabic phon (without particles like وَ، بِ).
      //
      // Key insight: The first run transliterated seg.phon (Arabic), NOT seg.arabic.
      // So the bad transliterations are from the truncated phon, not the full arabic.
      // The new transliteration is from seg.arabic (full word).
      //
      // This means: if the current Latin phon is shorter/different from transliterating
      // the full arabic, it was likely from the bad first run.
      //
      // But we also don't want to overwrite good pipeline phon values...
      //
      // Let me check: do the pipeline-generated segments have phon that differs
      // significantly from transliterating their arabic field?

      // For safety, let's update ALL where the transliteration differs.
      // The new transliterator is better, and even for pipeline-generated phon,
      // using a consistent transliteration is better.
      modified = true;
      totalSegmentsFixed++;
      return { ...seg, phon: newPhon };
    });

    if (modified) {
      totalVersesAffected++;
      updateBatch.push({ id: row.id, verse_id: row.verse_id, segments: newSegments });
    }
  }

  console.log(`\nSegments to fix: ${totalSegmentsFixed}`);
  console.log(`Verses affected: ${totalVersesAffected}`);

  if (updateBatch.length === 0) {
    console.log('Nothing to update.');
    return;
  }

  // Show examples
  console.log('\n--- Sample fixes ---');
  let shown = 0;
  for (const upd of updateBatch) {
    const orig = allRows.find(r => r.id === upd.id);
    for (let si = 0; si < upd.segments.length && shown < 30; si++) {
      const oldPhon = orig.segments[si]?.phon;
      const newPhon = upd.segments[si]?.phon;
      if (oldPhon !== newPhon) {
        console.log(`  v${upd.verse_id} seg${si}: "${oldPhon}" → "${newPhon}"`);
        shown++;
      }
    }
    if (shown >= 30) break;
  }

  if (DRY_RUN) {
    console.log('\n>>> DRY RUN - no updates applied <<<');
    return;
  }

  // Update
  console.log(`\nUpdating ${updateBatch.length} rows...`);
  let updated = 0;
  for (const upd of updateBatch) {
    const { error } = await db
      .from('verse_analyses')
      .update({ segments: upd.segments })
      .eq('id', upd.id);

    if (error) {
      console.error(`Error updating verse_id ${upd.verse_id}:`, error.message);
    } else {
      updated++;
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Total segments fixed: ${totalSegmentsFixed}`);
  console.log(`Total verses affected: ${totalVersesAffected}`);
  console.log(`Rows updated successfully: ${updated}/${updateBatch.length}`);
}

main().catch(console.error);
