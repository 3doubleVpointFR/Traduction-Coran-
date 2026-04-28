/**
 * lib/phonetics.ts
 * Convertit du texte arabe vocalisé (diacritiques Unicode) en phonétique
 * lisible pour un francophone.
 *
 * Fonctionne aussi pour convertir la translitération Buckwalter (lemma_ascii)
 * en phonétique française — utile dans le panneau d'analyse.
 */

// ── Consonnes arabes → phonétique ────────────────────────────────────────────

const CONS: Record<string, string> = {
  'ب': 'b',  'ت': 't',  'ث': 'th', 'ج': 'dj', 'ح': 'h̤',  'خ': 'kh',
  'د': 'd',  'ذ': 'dh', 'ر': 'r',  'ز': 'z',  'س': 's',  'ش': 'ch',
  'ص': 'ṣ',  'ض': 'ḍ',  'ط': 'ṭ',  'ظ': 'ẓ',  'ع': "'",  'غ': 'gh',
  'ف': 'f',  'ق': 'q',  'ك': 'k',  'ل': 'l',  'م': 'm',  'ن': 'n',
  'ه': 'h',  'و': 'w',  'ي': 'y',
  // Hamzas
  'ء': "'",  'أ': "'",  'إ': "'",  'ئ': "'",  'ؤ': "'",
  // Alefs
  'ا': 'â',  'آ': 'â',  'ى': 'â',
  // Spéciaux
  'ة': 'h',  // tâ marbûta finale
  'ٱ': '',   // alef wasla (pas prononcé en début)
}

// ── Diacritiques → voyelles ───────────────────────────────────────────────────

const DIAC: Record<string, string> = {
  '\u064E': 'a',    // fatha          َ
  '\u064F': 'ou',   // damma          ُ
  '\u0650': 'i',    // kasra          ِ
  '\u064B': 'an',   // tanwîn fath    ً
  '\u064C': 'oun',  // tanwîn damm    ٌ
  '\u064D': 'in',   // tanwîn kasr    ٍ
  '\u0670': 'â',    // alef superscript ٰ
  '\u0652': '',     // sukûn          ْ
  '\u0651': '',     // shadda (géré séparément) ّ
  '\u06E1': '',     // quranic marks à ignorer
  '\u0653': '',     '\u0654': '',     '\u0655': '',
}

// Ponctuation coranique à ignorer
const IGNORE = new Set([
  '\u06D6','\u06D7','\u06D8','\u06D9','\u06DA','\u06DB',
  '\u06DC','\u06DD','\u06DE','\u06DF','\u06E0','\u06E2',
  '\u06E3','\u06E4','\u06E5','\u06E6','\u06E7','\u06E8',
  '\u06E9','\u06EA','\u06EB','\u06EC','\u06ED',
  '\u0610','\u0611','\u0612','\u0613','\u0614','\u0615',
  '\u0616','\u0617','\u0618','\u0619','\u061A',
  '\u06F0','\u06F1','\u06F2','\u06F3','\u06F4','\u06F5',
  '\u06F6','\u06F7','\u06F8','\u06F9',
  '\u0660','\u0661','\u0662','\u0663','\u0664','\u0665',
  '\u0666','\u0667','\u0668','\u0669',
  ' ', '۩', '۞',
])

/**
 * Convertit un mot arabe vocalisé (avec diacritiques) en phonétique française.
 * ex. "ٱللَّهِ" → "allahi"
 */
export function arabicToPhonetic(text: string): string {
  if (!text) return ''
  const chars = Array.from(text)
  let result = ''

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]

    if (IGNORE.has(ch)) continue

    // ── Diacritique pur ──
    if (ch in DIAC) {
      result += DIAC[ch]
      continue
    }

    // ── Shadda : double la consonne qui précède dans le résultat ──
    if (ch === '\u0651') {
      const m = result.match(/([bcdfghjklmnpqrstvwxyz'ṣḍṭẓh̤gh]|kh|dj|ch|dh|gh|th)+$/i)
      if (m) result += m[0]
      continue
    }

    // ── Consonne ──
    const cons = CONS[ch]
    if (cons !== undefined) {
      if (ch === 'و') {
        const prev = DIAC[chars[i - 1] ?? '']
        const next = chars[i + 1] ?? ''
        if (prev === 'ou' || (!next || IGNORE.has(next))) {
          result += 'ou'
          continue
        }
      }
      if (ch === 'ي') {
        const prev = DIAC[chars[i - 1] ?? '']
        if (prev === 'i') {
          result += 'î'
          continue
        }
      }
      result += cons
      continue
    }
  }

  return result
    .replace(/^'+/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// ── Buckwalter → phonétique française ─────────────────────────────────────────

const BW: Record<string, string> = {
  "'": "'",   '|': 'â',  '>': "'",  '&': "'",
  '<': "'",   '}': "'",  'A': 'â',
  'b': 'b',   't': 't',  'v': 'th', 'j': 'dj', 'H': 'h̤',  'x': 'kh',
  'd': 'd',   '*': 'dh', 'r': 'r',  'z': 'z',  's': 's',   '$': 'ch',
  'S': 'ṣ',   'D': 'ḍ',  'T': 'ṭ',  'Z': 'ẓ',  'E': "'",   'g': 'gh',
  'f': 'f',   'q': 'q',  'k': 'k',  'l': 'l',  'm': 'm',   'n': 'n',
  'h': 'h',   'w': 'w',  'y': 'y',  'p': 'h',  'Y': 'â',
  '{': '',
  'a': 'a',   'u': 'ou', 'i': 'i',
  'F': 'an',  'N': 'in', 'K': 'oun',
  'o': '',    '`': 'â',
}

/**
 * Convertit la translitération Buckwalter en phonétique française.
 */
export function bwToPhonetic(bw: string): string {
  if (!bw) return ''
  let result = ''
  const chars = Array.from(bw)

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i]
    if (ch === '~') {
      const m = result.match(/([bcdfghjklmnpqrstvwxyz'ṣḍṭẓh̤]|kh|dj|ch|dh|gh|th)+$/i)
      if (m) result += m[0]
      continue
    }
    result += BW[ch] ?? ch
  }

  return result.replace(/^'+/, '').trim()
}

/**
 * Raccourcit une phonétique trop longue pour l'affichage au-dessus d'un token.
 */
export function shortPhonetic(ph: string, max = 12): string {
  if (ph.length <= max) return ph
  return ph.slice(0, max) + '…'
}

// ── Buckwalter → Arabe ─────────────────────────────────────────────────────

const BW_TO_AR: Record<string, string> = {
  "'": 'ء', '|': 'آ', '>': 'أ', '&': 'ؤ', '<': 'إ', '}': 'ئ',
  'A': 'ا', 'b': 'ب', 'p': 'ة', 't': 'ت', 'v': 'ث', 'j': 'ج',
  'H': 'ح', 'x': 'خ', 'd': 'د', '*': 'ذ', 'r': 'ر', 'z': 'ز',
  's': 'س', '$': 'ش', 'S': 'ص', 'D': 'ض', 'T': 'ط', 'Z': 'ظ',
  'E': 'ع', 'g': 'غ', 'f': 'ف', 'q': 'ق', 'k': 'ك', 'l': 'ل',
  'm': 'م', 'n': 'ن', 'h': 'ه', 'w': 'و', 'Y': 'ى', 'y': 'ي',
  'F': 'ً', 'N': 'ٌ', 'K': 'ٍ', 'a': 'َ', 'u': 'ُ', 'i': 'ِ',
  '~': 'ّ', 'o': 'ْ', '{': 'ٱ', '`': 'ٰ',
}

/**
 * Convertit du Buckwalter en arabe.
 */
export function bwToArabic(bw: string): string {
  if (!bw) return ''
  return Array.from(bw).map(ch => BW_TO_AR[ch] ?? ch).join('')
}
