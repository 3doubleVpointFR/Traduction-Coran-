// ═══════════════════════════════════════════════════════════════════════════════
// LANE'S LEXICON — Source étymologique académique
// ═══════════════════════════════════════════════════════════════════════════════

import { readFileSync } from 'fs'
import { join } from 'path'

interface LanesRoot {
  id: number
  root: string
  root_buckwalter: string
  definition_en: string
  definition_tr: string | null
  summary_en: string | null
  summary_tr: string | null
  semantic_field: string | null
  morphological_forms: { form_pattern: string; form_arabic: string; form_name: string; form_category: string; example_word: string; occurrences: number }[] | null
  related_roots: string | null
  quran_frequency: number
  source: string
  lane_match_type: string
  lane_volume: string | null
  confidence: string
}

interface LanesData {
  metadata: { total_roots: number }
  roots: LanesRoot[]
}

let _cache: LanesData | null = null

function loadLanesData(): LanesData {
  if (_cache) return _cache
  const filePath = join(process.cwd(), '..', 'data', 'raw', 'lanes_quran_roots.json')
  try {
    const raw = readFileSync(filePath, 'utf8')
    _cache = JSON.parse(raw) as LanesData
    console.log(`  📖 Lane's Lexicon chargé — ${_cache.metadata.total_roots} racines`)
    return _cache
  } catch (e) {
    console.error(`  ✗ Erreur chargement Lane's Lexicon:`, e)
    return { metadata: { total_roots: 0 }, roots: [] }
  }
}

/**
 * Cherche une racine dans Lane's Lexicon
 * @param rootAr - racine en arabe (ex: "صمد", "كتب")
 * @returns La définition complète ou null
 */
export function getLanesEntry(rootAr: string): LanesRoot | null {
  const data = loadLanesData()
  // Nettoyage de la racine (retire espaces)
  const cleaned = rootAr.replace(/\s/g, '')
  const entry = data.roots.find(r => r.root === cleaned)
  if (entry) {
    console.log(`  📖 Lane's: racine "${cleaned}" trouvée — ${entry.definition_en.length} chars de définition`)
    if (entry.morphological_forms?.length) {
      console.log(`  📖 Formes: ${entry.morphological_forms.map(f => f.example_word).join(', ')}`)
    }
  } else {
    console.log(`  📖 Lane's: racine "${cleaned}" NON TROUVÉE — fallback LLM`)
  }
  return entry ?? null
}

/**
 * Traduit les définitions anglaises de Lane's en sens français via Claude Sonnet
 */
export async function translateLanesSenses(
  lanesEntry: LanesRoot,
  pos: string,
  arabic: string
): Promise<{ senses: { sense: string; sense_ar: string; description: string }[]; daily: { ar: string; phon: string; fr: string }[] }> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY manquante')

  // Prépare le texte pour Claude
  const definitionText = lanesEntry.definition_en
  const summaryText = lanesEntry.summary_en || ''
  const morphForms = lanesEntry.morphological_forms?.map(f => `${f.example_word} (${f.form_name})`).join(', ') || ''

  console.log(`  📖 Traduction Lane's → français pour "${lanesEntry.root}" (pos: ${pos})`)
  console.log(`  📖 Définition: ${definitionText.length} chars | Summary: ${summaryText.length} chars`)

  const systemPrompt = `Tu es un linguiste expert en arabe classique et en traduction arabe-anglais-français.

Je te donne la définition complète d'une racine arabe extraite du Lane's Arabic-English Lexicon (Edward Lane, 1863), la référence académique la plus complète pour l'arabe classique.

TON RÔLE : extraire TOUS les sens étymologiques de cette racine et les traduire en français.

RÈGLES :
1. Extrais chaque sens DISTINCT de la définition de Lane's
2. Donne uniquement les sens de forme ${pos} (${pos === 'nom' ? 'nominaux' : pos === 'verbe' ? 'verbaux' : 'adjectivaux'})
3. Sois EXHAUSTIF — si Lane's mentionne un sens, il doit être dans ta liste
4. Traduis chaque sens de l'anglais vers le français de manière précise
5. Garde le sens arabe original (sense_ar) en arabe
6. La description doit être une explication étymologique courte tirée de Lane's
7. Donne aussi 3 phrases du quotidien arabe utilisant cette racine
8. Ne rajoute AUCUN sens qui n'est pas dans Lane's
9. Minimum 4 sens, maximum 10

Réponds UNIQUEMENT en JSON :
{
  "root_phon": "phonétique de la racine (ex: s-m-d)",
  "root_meaning": "sens premier en 5 mots max",
  "senses": [
    { "sense": "le sens en français", "sense_ar": "le sens en arabe", "description": "explication étymologique de Lane's traduite" }
  ],
  "daily": [
    { "ar": "phrase en arabe", "phon": "phonétique", "fr": "traduction" }
  ]
}`

  const userPrompt = `Racine arabe : ${lanesEntry.root}
Mot analysé : ${arabic}
Forme grammaticale requise : ${pos}

DÉFINITION COMPLÈTE DE LANE'S LEXICON :
${definitionText}

${summaryText ? `RÉSUMÉ LANE'S :\n${summaryText}` : ''}
${morphForms ? `FORMES MORPHOLOGIQUES ATTESTÉES :\n${morphForms}` : ''}

Extrais tous les sens de forme "${pos}" et traduis-les en français.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      temperature: 0,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Claude API error: ${response.status} — ${err}`)
  }

  const result = await response.json() as { content: { type: string; text: string }[] }
  const text = result.content[0]?.text || ''

  // Parse JSON from response
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('Pas de JSON dans la réponse Claude')

  const parsed = JSON.parse(jsonMatch[0])

  console.log(`  📖 ${parsed.senses?.length ?? 0} sens extraits de Lane's et traduits en français`)
  parsed.senses?.forEach((s: { sense: string; sense_ar: string }) => {
    console.log(`     · ${s.sense} (${s.sense_ar})`)
  })

  return {
    senses: parsed.senses || [],
    daily: parsed.daily || []
  }
}
