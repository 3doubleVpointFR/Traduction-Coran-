import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Clean Arabic text from DB artifacts:
 * - Remove ^ (unmapped Buckwalter superscript alef)
 * - Remove stray > < that weren't converted
 * - Deduplicate consecutive identical words
 */
export function cleanArabicText(text: string): string {
  if (!text) return text
  // Remove ^ characters
  let cleaned = text.replace(/\^/g, '')
  // Deduplicate consecutive identical words (e.g. "ذَٰلِكَ ذَٰلِكَ" → "ذَٰلِكَ")
  const words = cleaned.split(' ')
  const deduped: string[] = []
  for (const w of words) {
    if (deduped.length === 0 || w !== deduped[deduped.length - 1]) {
      deduped.push(w)
    }
  }
  return deduped.join(' ')
}

/**
 * Convert Buckwalter transliteration to readable phonetic.
 * Handles consonants, vowels, shadda (doubling), and common patterns.
 */
export function buckwalterToPhonetic(bw: string): string {
  if (!bw) return bw

  // Remove QAC artefacts: backtick (superscript alef), @, #, [ ]
  let cleaned = bw.replace(/[`@#\[\]{}]/g, '')

  // Pre-process: handle shadda (~ doubles the preceding letter)
  let processed = ''
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned[i] === '~' && processed.length > 0) {
      processed += processed[processed.length - 1]
    } else if (cleaned[i] === 'o') {
      // Sukun: skip
      continue
    } else {
      processed += cleaned[i]
    }
  }

  // Merge aY → ā (alef maqsura after fatha)
  processed = processed.replace(/aY/g, 'ā')
  // Merge iy → ī, uw → ū at word boundaries
  processed = processed.replace(/iy\b/g, 'ī')
  processed = processed.replace(/uw\b/g, 'ū')

  // Character-by-character mapping
  const charMap: Record<string, string> = {
    '>': "'", '<': "'", '|': "'ā", '&': "'", '}': "'",
    'E': "'", 'H': 'ḥ', 'x': 'kh', 'v': 'th', '$': 'sh',
    'S': 'ṣ', 'D': 'ḍ', 'T': 'ṭ', 'Z': 'ẓ', 'g': 'gh',
    'q': 'q', 'p': 'h', 'j': 'j', 'f': 'f', 'd': 'd',
    'r': 'r', 'z': 'z', 's': 's', 't': 't', 'b': 'b',
    'n': 'n', 'm': 'm', 'l': 'l', 'k': 'k', 'h': 'h',
    'w': 'w', 'y': 'y',
    'A': 'ā', 'Y': 'ā',
    'F': 'an', 'N': 'un', 'K': 'in',
    '*': 'dh',
    // Short vowels a, i, u stay as-is
  }

  let result = ''
  for (let i = 0; i < processed.length; i++) {
    const ch = processed[i]
    // Handle 'Al' as article prefix
    if (ch === 'A' && i + 1 < processed.length && processed[i + 1] === 'l') {
      result += 'al-'
      i++ // skip the 'l'
      continue
    }
    result += charMap[ch] ?? ch
  }

  // Post-processing fixes
  // Fix double consonant at word start from shadda (tt → at-t, etc.)
  result = result.replace(/\b([bcdfghjklmnpqrstvwxyz])(\1)/gi, (_, c1, c2) => {
    return `a${c1}-${c2}`
  })
  // Fix maā → mā (short vowel before long)
  result = result.replace(/a(ā)/g, '$1')
  // Clean up double dashes, spaces
  result = result.replace(/--/g, '-')
  result = result.replace(/\s{2,}/g, ' ').trim()

  return result
}
