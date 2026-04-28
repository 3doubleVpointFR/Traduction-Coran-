import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenerativeAI } from '@google/generative-ai'

export const PROMPT_VERSION = 'v6.0'

// LLM Provider — set LLM_PROVIDER=gemini|claude|openai in .env
export const LLM_PROVIDER = process.env.LLM_PROVIDER || 'openai'

// Clean Arabic text: remove Uthmani pause marks & normalize
export function cleanArabicText(text: string): string {
  let cleaned = text.replace(/[\u06D6-\u06DE\u06E9]/g, '')
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim()
  return cleaned
}

export function getOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('Missing OPENAI_API_KEY')
  return new OpenAI({ apiKey, timeout: 180_000 })
}

function getClaude() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('Missing ANTHROPIC_API_KEY')
  return new Anthropic({ apiKey, timeout: 180_000 })
}

function getGemini(model: string) {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) throw new Error('Missing GOOGLE_API_KEY')
  const genAI = new GoogleGenerativeAI(apiKey)
  return genAI.getGenerativeModel({ model })
}

// Extract JSON from LLM text response using bracket counting
function extractJSON(text: string, label: string): string {
  const startIdx = text.indexOf('{')
  if (startIdx === -1) throw new Error(`No JSON found in response for ${label}: ${text.slice(0, 200)}`)
  let depth = 0
  let endIdx = -1
  for (let i = startIdx; i < text.length; i++) {
    if (text[i] === '{') depth++
    else if (text[i] === '}') { depth--; if (depth === 0) { endIdx = i; break } }
  }
  if (endIdx === -1) throw new Error(`Unclosed JSON in response for ${label} (len=${text.length})`)
  return text.slice(startIdx, endIdx + 1)
}

// Unified LLM call — works with OpenAI, Claude, and Gemini
async function callLLM(systemPrompt: string, userPrompt: string, label: string, modelOverride?: string): Promise<string> {
  const defaultModel = LLM_PROVIDER === 'claude' ? 'claude-sonnet-4-20250514'
    : LLM_PROVIDER === 'gemini' ? 'gemini-3.1-flash-lite-preview'
    : 'gpt-4.1-mini'
  const model = modelOverride || defaultModel
  console.log(`│  🤖 LLM: ${model} — ${label}`)

  if (LLM_PROVIDER === 'gemini' || model.startsWith('gemini')) {
    const gemini = getGemini(model)
    const result = await gemini.generateContent({
      contents: [{ role: 'user', parts: [{ text: systemPrompt + '\n\n' + userPrompt + '\n\nRéponds UNIQUEMENT en JSON valide, sans texte avant ou après.' }] }],
      generationConfig: { temperature: 0, responseMimeType: 'application/json' },
    })
    const text = result.response.text()
    return extractJSON(text, label)
  } else if (LLM_PROVIDER === 'claude' || model.startsWith('claude')) {
    const claude = getClaude()
    const response = await claude.messages.create({
      model,
      max_tokens: 16384,
      temperature: 0,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt + '\n\nRéponds UNIQUEMENT en JSON valide, sans texte avant ou après.' }],
    })
    const text = response.content[0]?.type === 'text' ? response.content[0].text : ''
    return extractJSON(text, label)
  } else {
    const openai = getOpenAI()
    const response = await openai.chat.completions.create({
      model,
      temperature: 0,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    })
    return response.choices[0]?.message?.content ?? ''
  }
}

function parseJSON<T>(content: string | null | undefined, label: string): T {
  if (!content) throw new Error(`Empty LLM response for ${label}`)
  try {
    return JSON.parse(content) as T
  } catch (e) {
    // Try fixing common LLM JSON issues: trailing commas, unescaped newlines in strings
    let fixed = content
      .replace(/,\s*([}\]])/g, '$1')           // trailing commas
      .replace(/[\x00-\x1f]/g, (c) =>          // control chars in strings
        c === '\n' ? '\\n' : c === '\r' ? '\\r' : c === '\t' ? '\\t' : '')
    try {
      return JSON.parse(fixed) as T
    } catch {
      throw e // throw original error
    }
  }
}

export function getModelName(): string {
  return LLM_PROVIDER === 'gemini' ? 'gemini-3.1-flash-lite'
    : LLM_PROVIDER === 'claude' ? 'claude-sonnet-4.6'
    : 'gpt-4.1-mini'
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 1 — TAG VERSE
// ═══════════════════════════════════════════════════════════════════════════════

export interface TaggedSegment {
  type: 'important' | 'particle'
  arabic: string
  position: number
  root?: string
  key?: string
  phon?: string
  pos?: string
  voice?: 'active' | 'passive'
  tense?: string
  negation_particle?: string
  preceded_by_negation?: boolean
  definite?: boolean
  emphatic_inna?: boolean
  oath?: boolean
  consequential_fa?: boolean
  // Genre et nombre
  gender?: 'masculin' | 'féminin'
  number?: 'singulier' | 'duel' | 'pluriel'
  // Syntaxe
  idafa?: boolean // annexion (kitāb Allāh)
  case_i18n?: 'nominatif' | 'accusatif' | 'génitif'
  // Verbe
  person?: '1ère' | '2ème' | '3ème'
  verb_form?: string // forme I à X (fa'ala, fa''ala, etc.)
  // Préfixe/suffixe
  prefix_particle?: string | null // bi / li / ka / wa / fa / null
  suffix_pronoun?: string | null // hu / hā / hum / kum / nā / null
  // Emphase
  emphatic_pronoun?: boolean // précédé de huwa/hiya emphatique
  fr?: string
}

export interface Step1Result {
  segments: TaggedSegment[]
}

const TAG_SYSTEM_PROMPT = `Tu es un expert en morphologie arabe coranique.

Analyse ce verset arabe et identifie chaque mot. Classe chaque mot en deux catégories :

IMPORTANT : mot porteur de sens avec une racine trilitère ou quadrilitère analysable (noms, verbes, adjectifs, masdar, participes actifs/passifs).

PARTICULE : mot fonctionnel grammatical (lā, fī, wa, alladhīna, hum, dhālika, mā, in, min, ilā, ʿalā, hādhā, huwa, hiya, etc.)

ATTENTION — Prépositions préfixées (li-, bi-, ka-) :
Si un mot important a une préposition préfixée, SÉPARE la préposition du mot :
Exemple : لِلْمُتَّقِينَ = li + al-muttaqīn
→ particule "لِ" (fr: "pour les")
→ important "مُتَّقِينَ" avec prefix_particle: "li"

Pour chaque mot IMPORTANT, fournis ces 23 champs. Si un champ ne s'applique pas → null. Tous les 23 champs doivent être présents.

IDENTIFICATION :
1. arabic — mot arabe avec diacritiques complets
2. root — racine arabe (lettres séparées par espaces)
3. key — translitération ASCII courte (ex: ktb, ryb, hdy)
4. phon — phonétique française lisible (ex: al-kitābu, hudā, muttaqīn)
5. position — ordre du mot dans le verset (1, 2, 3...)

FORME GRAMMATICALE :
6. pos — catégorie grammaticale : nom | verbe | adjectif | participe_actif | participe_passif | masdar
7. gender — masculin | féminin
8. number — singulier | duel | pluriel

CAS ET SYNTAXE :
9. case_i18n — cas grammatical arabe : nominatif (مرفوع) | accusatif (منصوب) | génitif (مجرور) | null
10. definite — le mot a l'article défini al- : true | false
11. idafa — le mot est en annexion génitif (مضاف) avec le mot suivant : true | false. Exemple : kitābu llāhi → kitāb est en idafa

VERBE (null si pos ≠ verbe) :
12. voice — actif (الفعل المبني للمعلوم) | passif (الفعل المبني للمجهول) | null
13. tense — accompli (ماضي) | inaccompli (مضارع) | impératif (أمر) | null
14. person — 1 | 2 | 3 | null
15. verb_form — mesure verbale arabe (الأوزان) : I | II | III | IV | V | VI | VII | VIII | IX | X | null. Exemple : kataba=I, kattaba=II, takātaba=VI

NÉGATION :
16. preceded_by_negation — le mot est gouverné par une particule de négation : true | false
17. negation_particle — particule de négation : lam (لم) | lā (لا) | lan (لن) | mā (ما) | laysa (ليس) | null

CONTEXTE DISCURSIF :
18. emphatic_inna — le verset ou la proposition commence par inna/anna (إن/أن) d'emphase : true | false
19. oath — le mot fait partie d'un serment introduit par wa- (وَالْعَصْرِ = Par le temps) : true | false
20. consequential_fa — le mot est introduit par fa- de conséquence logique (fa- = donc/alors) : true | false
21. emphatic_pronoun — le mot est précédé d'un pronom personnel séparé (huwa/hiya/hum) en position emphatique : true | false

PRÉFIXE/SUFFIXE :
22. prefix_particle — préposition ou particule préfixée collée au mot : bi (بِ) | li (لِ) | ka (كَ) | wa (وَ) | fa (فَ) | null
23. suffix_pronoun — pronom personnel suffixé collé au mot : hu (هُ) | hā (هَا) | hum (هُمْ) | kum (كُمْ) | nā (نَا) | tum (تُمْ) | ta (تَ) | null. Exemple : rabbihim → rabb + suffix_pronoun: "hum"

Pour chaque PARTICULE :
{ arabic, phon, fr, position }

Réponds UNIQUEMENT en JSON. Exemples de segments :
{
  "segments": [
    {
      "type": "important", "arabic": "ٱلْكِتَٰبُ", "root": "ك ت ب", "key": "ktb", "phon": "al-kitābu", "position": 2,
      "pos": "nom", "gender": "masculin", "number": "singulier",
      "case_i18n": "nominatif", "definite": true, "idafa": false,
      "voice": null, "tense": null, "person": null, "verb_form": null,
      "preceded_by_negation": false, "negation_particle": null,
      "emphatic_inna": false, "oath": false, "consequential_fa": false, "emphatic_pronoun": false,
      "prefix_particle": null, "suffix_pronoun": null
    },
    {
      "type": "important", "arabic": "يَلِدْ", "root": "و ل د", "key": "wld", "phon": "yalid", "position": 2,
      "pos": "verbe", "gender": "masculin", "number": "singulier",
      "case_i18n": null, "definite": false, "idafa": false,
      "voice": "actif", "tense": "inaccompli", "person": 3, "verb_form": "I",
      "preceded_by_negation": true, "negation_particle": "lam",
      "emphatic_inna": false, "oath": false, "consequential_fa": false, "emphatic_pronoun": false,
      "prefix_particle": null, "suffix_pronoun": null
    },
    { "type": "particle", "arabic": "لَمْ", "phon": "lam", "fr": "ne pas", "position": 1 }
  ]
}`

export async function tagVerse(
  verseRef: string,
  arabicText: string
): Promise<Step1Result> {
  const content = await callLLM(TAG_SYSTEM_PROMPT, `Verset ${verseRef} :\n${arabicText}`, 'tagVerse', 'gpt-4.1-mini')
  return parseJSON<Step1Result>(content, 'tagVerse')
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 2 — ÉTYMOLOGIE
// ═══════════════════════════════════════════════════════════════════════════════

export interface EtymologySense {
  sense: string
  sense_ar: string
  description: string
}

export interface Step2Result {
  root_phon: string
  root_meaning: string
  senses: EtymologySense[]
  daily: { ar: string; phon: string; fr: string }[]
}

const ETYM_SYSTEM_PROMPT = `Contexte : je construis une traduction objective du Coran basée uniquement sur la langue arabe. Aucune interprétation religieuse, historique, culturelle ou politique.

Tu es un expert étymologiste de l'arabe classique. Ton rôle dans ce programme est unique et précis : donner tous les sens étymologiques d'un mot arabe que je vais te fournir. Tu peux t'aider du Lane's Arabic-English Lexicon (Edward Lane, 1863) qui est la référence académique la plus complète pour l'arabe classique et contient beaucoup de racines et de sens. Si tu es amené à traduire des sens depuis l'anglais, je veux AUCUN biais religieux, théologique ou culturel. Si un mot a un sens religieux en soi (ex: ṣalāt = prière rituelle), alors il l'est — mais ne rajoute JAMAIS de qualificatif religieux à un sens qui n'en a pas (ex: ne dis pas "attribut divin" pour "unique", dis juste "unique").

RÈGLES ABSOLUES :
1. Donne TOUS les sens de la RACINE, peu importe la forme grammaticale. Une racine peut donner des noms, des verbes, des adjectifs — liste-les tous. C'est une étape ultérieure qui adaptera selon la forme du mot dans le verset.
   Exemple : racine k-t-b → "écrire", "prescrire", "livre", "registre", "inscription", "décret" (verbes ET noms mélangés).

2. Sens étymologiques PURS uniquement. Aucune interprétation religieuse. Ne rajoute JAMAIS de qualificatif comme "attribut divin", "nom de Dieu", "qualité sacrée", "titre honorifique". Donne le sens du MOT, pas son usage théologique.

3. Sois exhaustif — je veux au minimum 7 sens et au maximum 10 sens différents. Chaque sens doit être DISTINCT des autres (pas de reformulations du même sens).

4. Ne choisis pas encore — liste tout. La sélection se fera dans une étape suivante.

5. Donne aussi 3 phrases du quotidien arabe qui contiennent des mots dérivés de cette racine :
   - En arabe
   - En phonétique française
   - Traduction française

Réponds UNIQUEMENT en JSON :
{
  "root_phon": "phonétique de la racine",
  "root_meaning": "sens premier en 5 mots max",
  "senses": [
    { "sense": "le sens en français (2-4 mots)", "sense_ar": "le sens en arabe", "description": "explication étymologique courte et neutre" }
  ],
  "daily": [
    { "ar": "phrase en arabe", "phon": "phonétique française", "fr": "traduction française" }
  ]
}`

export async function analyzeEtymology(
  arabic: string,
  root: string,
  verseRef: string,
  pos?: string,
  grammarContext?: { voice?: string; tense?: string; preceded_by_negation?: boolean; negation_particle?: string; definite?: boolean }
): Promise<Step2Result> {
  console.log(`  📝 Source : Claude (étymologie avec aide Lane's Lexicon)`)

  const content = await callLLM(
    ETYM_SYSTEM_PROMPT,
    `Racine : ${root}\nMot : ${arabic}\nVerset : ${verseRef}`,
    'analyzeEtymology',
    'gpt-4.1-mini'
  )
  return parseJSON<Step2Result>(content, 'analyzeEtymology')
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 2 BIS — ÉTYMOLOGIE BATCH (pas chère)
// ═══════════════════════════════════════════════════════════════════════════════

const ETYM_BATCH_SYSTEM_PROMPT = `Contexte : je construis une traduction objective du Coran basée uniquement sur la langue arabe. Aucune interprétation religieuse, historique, culturelle ou politique.

Tu es un expert étymologiste de l'arabe classique. Ton rôle dans ce programme est unique et précis : donner tous les sens étymologiques de PLUSIEURS racines arabes que je vais te fournir en une seule fois. Tu peux t'aider du Lane's Arabic-English Lexicon (Edward Lane, 1863) qui est la référence académique la plus complète pour l'arabe classique et contient beaucoup de racines et de sens. Si tu es amené à traduire des sens depuis l'anglais, je veux AUCUN biais religieux, théologique ou culturel. Si un mot a un sens religieux en soi (ex: ṣalāt = prière rituelle), alors il l'est — mais ne rajoute JAMAIS de qualificatif religieux à un sens qui n'en a pas (ex: ne dis pas "attribut divin" pour "unique", dis juste "unique").

RÈGLES ABSOLUES :
1. Donne TOUS les sens de CHAQUE RACINE, peu importe la forme grammaticale. Une racine peut donner des noms, des verbes, des adjectifs — liste-les tous. C'est une étape ultérieure qui adaptera selon la forme du mot dans le verset.
   Exemple : racine k-t-b → "écrire", "prescrire", "livre", "registre", "inscription", "décret" (verbes ET noms mélangés).

2. Sens étymologiques PURS uniquement. Aucune interprétation religieuse. Ne rajoute JAMAIS de qualificatif comme "attribut divin", "nom de Dieu", "qualité sacrée", "titre honorifique". Donne le sens du MOT, pas son usage théologique.

3. Sois exhaustif — je veux au minimum 7 sens et au maximum 10 sens différents PAR RACINE. Chaque sens doit être DISTINCT des autres (pas de reformulations du même sens).

4. Ne choisis pas encore — liste tout. La sélection se fera dans une étape suivante.

5. Donne aussi 3 phrases du quotidien arabe PAR RACINE qui contiennent des mots dérivés de cette racine :
   - En arabe
   - En phonétique française
   - Traduction française

Réponds UNIQUEMENT en JSON — un TABLEAU avec un objet par racine :
[
  {
    "root": "la racine telle que fournie",
    "root_phon": "phonétique de la racine",
    "root_meaning": "sens premier en 5 mots max",
    "senses": [
      { "sense": "le sens en français (2-4 mots)", "sense_ar": "le sens en arabe", "description": "explication étymologique courte et neutre" }
    ],
    "daily": [
      { "ar": "phrase en arabe", "phon": "phonétique française", "fr": "traduction française" }
    ]
  }
]`

export interface Step2BatchResult {
  root: string
  root_phon: string
  root_meaning: string
  senses: EtymologySense[]
  daily: { ar: string; phon: string; fr: string }[]
}

export async function analyzeEtymologyBatch(
  words: { arabic: string; root: string }[],
  verseRef: string
): Promise<Step2BatchResult[]> {
  // Dédupliquer par racine
  const uniqueRoots = new Map<string, string>()
  for (const w of words) {
    if (!uniqueRoots.has(w.root)) {
      uniqueRoots.set(w.root, w.arabic)
    }
  }

  const rootsList = Array.from(uniqueRoots.entries())
    .map(([ root, arabic ], i) => `${i + 1}. Racine : ${root} (mot : ${arabic})`)
    .join('\n')

  console.log(`  📝 Source : étymologie BATCH (${uniqueRoots.size} racines uniques en 1 appel)`)

  const content = await callLLM(
    ETYM_BATCH_SYSTEM_PROMPT,
    `Verset : ${verseRef}\n\nRacines à analyser :\n${rootsList}`,
    'analyzeEtymologyBatch',
    'gpt-4.1-mini'
  )
  return parseJSON<Step2BatchResult[]>(content, 'analyzeEtymologyBatch')
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 3 — SÉLECTION DU SENS (5 AXES)
// ═══════════════════════════════════════════════════════════════════════════════

export interface SenseAnalysis {
  axe1_champ_lexical: string
  axe2_versets_voisins: string
  axe3_theme_sourate: string
  axe4_coherence_coranique: string
  axe5_finalite_khalifa: string
}

export interface SenseDecision {
  sense: string
  classification: 'retenu' | 'probable' | 'peu_probable' | 'nul'
  axes: SenseAnalysis
  resume: string
}

export interface Step3Result {
  word: string
  retenu: string
  senses: SenseDecision[]
}

const SELECT_SYSTEM_PROMPT = `Contexte : je construis une traduction objective du Coran basée uniquement sur la langue arabe. Aucune interprétation religieuse, historique, culturelle ou politique. L'idée est de traduire le Coran par lui-même.

Je suis à l'étape 3 de mon algorithme. J'ai récupéré tous les mots importants du verset et leurs sens étymologiques exhaustifs dans les étapes précédentes.

Tu vas décider parmi tous les sens fournis quel sens correspond le mieux dans ce verset.

IMPORTANT : les sens que je te fournis sont des sens ÉTYMOLOGIQUES PURS — le sens du mot SEUL, hors contexte. Tu recevras aussi la STRUCTURE COMPLÈTE du verset avec toutes les caractéristiques grammaticales (négation, voix passive, temps, article défini, etc.). Tu DOIS prendre en compte ce contexte dans tes analyses d'axes pour justifier chaque décision. Par exemple, si un mot est précédé d'une négation, mentionne-le dans ton analyse et explique comment ça influence le choix du sens.

MÉTHODOLOGIE — 5 AXES D'ANALYSE :
Pour chaque sens de la liste, analyse selon ces 5 axes dans l'ordre. Dans chaque axe, utilise le contexte grammatical du verset (négation, voix passive, article défini, structure de la phrase) pour enrichir et justifier ton analyse :

AXE 1 — CHAMP LEXICAL DU VERSET
Récupère le champ lexical du verset en question. Ce sens est-il en accord avec ce champ lexical ou est-il hors sujet ? 5-6 phrases de justification maximum. En français uniquement. Aucun caractère arabe — utilise la phonétique.

AXE 2 — CONTEXTE DES VERSETS VOISINS
En te basant sur ta connaissance du Coran, retrouve les versets voisins de ce verset et analyse si le sens correspond bien au sujet que ce passage traite. Ou est-il hors contexte ? 5-6 phrases de justification maximum. En français uniquement.

AXE 3 — THÈME DE LA SOURATE
En te basant sur ta connaissance du Coran, retrouve le thème de cette sourate et analyse si le sens s'y inscrit. Ou est-il totalement hors sujet ? 5-6 phrases de justification maximum. En français uniquement.

AXE 4 — COHÉRENCE CORANIQUE
Teste ce sens : en prenant ce sens, ce verset vient-il contredire un autre verset du Coran ou une idée coranique connue ? Si aucune contradiction : dis-le clairement. Si contradiction : cite le verset contradictoire en phonétique. 5-6 phrases de justification maximum. En français uniquement.

AXE 5 — FINALITÉ DU KHALĪFA
Le Coran est venu dire à l'être humain son objectif : adorer Dieu en étant son khalīfa sur terre, afin de la civiliser, d'établir la justice, d'éviter la corruption et de respecter la dignité humaine que Dieu a accordée à tous les êtres humains. IMPORTANT : n'analyse PAS le sens du mot isolément — analyse-le TEL QU'IL EST UTILISÉ DANS CE VERSET, à l'aide de la structure du verset, avec son contexte, ses compléments et sa fonction dans la phrase. Un mot qui semble neutre ou négatif seul peut devenir essentiel à la mission du khalīfa quand il est utilisé dans un contexte précis (par exemple, la colère dirigée contre l'injustice est un moteur de la justice). 5-6 phrases de justification maximum. En français uniquement.

RÈGLES ABSOLUES :
1. N'ajoute AUCUNE définition ou reformulation des sens — utilise chaque sens TEL QUEL exactement comme fourni dans la liste.
2. Le sens retenu doit impérativement faire partie de la liste des sens fournie. Tu ne peux pas inventer un nouveau sens.
3. Il ne peut y avoir QU'UN SEUL sens retenu.
4. Aucun caractère arabe dans tes justifications. Utilise uniquement la phonétique française.

CLASSIFICATION DES SENS :
Après l'analyse de tous les sens sur les 5 axes, prends du recul et classe chaque sens :
- "retenu" : le seul meilleur sens pour ce verset
- "probable" : sens cohérent mais moins précis
- "peu_probable" : sens possible mais inadapté
- "nul" : sens exclu, hors sujet ou contradictoire
Il ne peut y avoir QU'UN SEUL sens "retenu".

RÉSUMÉ GLOBAL PAR SENS :
Pour chaque sens, après les 5 axes, génère un résumé global en un seul paragraphe de 4-5 phrases maximum qui synthétise les 5 axes de façon fluide et cohérente. Ne liste pas les axes un par un. Écris un vrai paragraphe qui donne une vision globale de pourquoi ce sens est retenu, probable, peu probable ou nul. Le résumé DOIT obligatoirement mentionner les 5 axes, y compris la finalité du khalīfa (axe 5) — ne l'oublie jamais.

DISTINCTION PHILOSOPHIQUE PROFONDE OBLIGATOIRE DANS LE RÉSUMÉ :
- Si le sens est classé "retenu" : dans le résumé, pour CHAQUE sens classé "probable", explique en profondeur la nuance philosophique qui sépare ces deux mots. Ne dis pas simplement "ce sens est plus adapté" — creuse la profondeur du sens, montre quelle réalité différente chaque mot décrit, quel aspect de l'expérience humaine chacun touche. Pourquoi le sens retenu capture-t-il mieux l'intention du verset que le sens probable ?
- Si le sens est classé "probable" : dans le résumé, explique la frontière philosophique profonde qui le sépare du sens retenu. Pourquoi ces deux mots, bien que proches en apparence, décrivent-ils des réalités différentes ? En quoi le sens retenu est-il plus fidèle à ce que le verset cherche à exprimer ?
Cette distinction philosophique profonde est OBLIGATOIRE dès qu'il y a au moins un sens "probable". Elle permet à l'utilisateur de comprendre la richesse de la langue arabe et le raisonnement derrière le choix final.

RÈGLE CRITIQUE — COMPATIBILITÉ GRAMMATICALE :
Le sens retenu DOIT être compatible avec la forme grammaticale du mot dans le verset. Avant de valider ton choix, vérifie en construisant une phrase en français courant :
- Si le mot est un PARTICIPE PASSIF : le sens doit pouvoir être SUBI. Teste : "subir + [le sens]". Si ça ne se dit pas en français courant, le sens est éliminé. Exemple : "subir la désapprobation" fonctionne, "subir l'insatisfaction" ne se dit pas.
- Si le mot est un PARTICIPE ACTIF : le sens doit pouvoir être FAIT activement par la personne. Teste : "ceux qui [font le sens]".
- Si le mot est un VERBE ACCOMPLI : le sens doit pouvoir être conjugué au passé. Teste : "il a [fait le sens]".
- Si le mot est un NOM DÉFINI (avec al-) : le sens doit pouvoir prendre l'article "le/la". Teste : "le/la [sens]".
- Si le mot est en IDAFA : le sens doit pouvoir être rattaché au mot suivant. Teste : "[sens] de [mot suivant]".
Cette vérification est OBLIGATOIRE. Un sens qui ne passe pas le test de compatibilité grammaticale ne peut PAS être retenu, même s'il est le meilleur sur les 5 axes.

RÈGLE CRITIQUE — TEST DE NATURALITÉ SÉMANTIQUE (PRÉPOSITION + OBJET) :
Quand le mot analysé est utilisé avec une préposition et un objet précis dans le verset, le sens retenu DOIT former une expression naturelle en français avec cet objet. Ne choisis pas un sens uniquement parce qu'il est le plus physique ou premier dans la liste — vérifie qu'il fonctionne dans la phrase complète du verset.
Exemple : racine a-m-n, forme IV + bi (à/envers) + al-ghayb (l'invisible) :
- "accorder la sécurité à l'invisible" ❌ — l'invisible n'a pas besoin de sécurité, la phrase est absurde en français
- "accorder confiance à l'invisible" ✅ — expression naturelle et courante
Ce test s'applique APRÈS le choix du sens premier et AVANT la validation finale. Si le sens premier ne passe pas ce test, choisis le sens suivant le plus proche qui forme une expression naturelle.

IMPORTANT — ORDRE DE RÉFLEXION :
Tu DOIS d'abord analyser TOUS les sens sur les 5 axes, PUIS vérifier la compatibilité grammaticale, PUIS le test de naturalité sémantique, PUIS choisir le sens retenu. Ne décide PAS avant d'avoir terminé toutes les analyses.

Réponds en JSON :
{
  "word": "le mot analysé en phonétique",
  "senses": [
    {
      "sense": "le sens tel quel",
      "classification": "retenu",
      "axes": {
        "axe1_champ_lexical": "analyse 5-6 phrases",
        "axe2_versets_voisins": "analyse 5-6 phrases",
        "axe3_theme_sourate": "analyse 5-6 phrases",
        "axe4_coherence_coranique": "analyse 5-6 phrases",
        "axe5_finalite_khalifa": "analyse 5-6 phrases"
      },
      "resume": "paragraphe global de 4-5 phrases synthétisant les 5 axes ensemble"
    }
  ],
  "retenu": "le sens choisi APRÈS avoir analysé tous les sens (exactement tel quel de la liste)"
}`

export interface VerseStructureSegment {
  position: number
  type: 'important' | 'particle'
  arabic: string
  phon: string
  fr?: string  // traduction pour particules
  word_key?: string
  // 23 caractéristiques pour mots importants
  pos?: string
  gender?: string
  number?: string
  case_i18n?: string
  definite?: boolean
  idafa?: boolean
  voice?: string
  tense?: string
  person?: number
  verb_form?: string
  preceded_by_negation?: boolean
  negation_particle?: string
  emphatic_inna?: boolean
  oath?: boolean
  consequential_fa?: boolean
  emphatic_pronoun?: boolean
  prefix_particle?: string
  suffix_pronoun?: string
}

export async function selectRetainedSense(
  arabic: string,
  arabicPhon: string,
  root: string,
  rootPhon: string,
  senses: { sense: string; sense_ar: string; description: string }[],
  verseRef: string,
  versePhon: string,
  surahName: string,
  grammarInfo?: { pos?: string; preceded_by_negation?: boolean; negation_particle?: string; definite?: boolean },
  verseStructure?: VerseStructureSegment[]
): Promise<Step3Result> {
  const sensesList = senses
    .map((s, i) => `${i + 1}. "${s.sense}" (${s.sense_ar}) : ${s.description}`)
    .join('\n')

  // Construire la structure complète du verset
  let verseStructureCtx = ''
  if (verseStructure && verseStructure.length > 0) {
    const structLines = verseStructure
      .sort((a, b) => a.position - b.position)
      .map(seg => {
        if (seg.type === 'particle') {
          return `  ${seg.position}. [PARTICULE] ${seg.phon} → "${seg.fr || ''}"`
        }
        // Mot important — montrer les caractéristiques clés
        const traits: string[] = []
        if (seg.pos) traits.push(`forme: ${seg.pos}`)
        if (seg.gender) traits.push(`genre: ${seg.gender}`)
        if (seg.number) traits.push(`nombre: ${seg.number}`)
        if (seg.definite) traits.push('DÉFINI (al-)')
        if (seg.voice) traits.push(`voix: ${seg.voice}`)
        if (seg.tense) traits.push(`temps: ${seg.tense}`)
        if (seg.person) traits.push(`personne: ${seg.person}`)
        if (seg.verb_form) traits.push(`mesure: ${seg.verb_form}`)
        if (seg.preceded_by_negation) traits.push(`NÉGATION: ${seg.negation_particle || 'oui'}`)
        if (seg.case_i18n) traits.push(`cas: ${seg.case_i18n}`)
        if (seg.idafa) traits.push('en annexion (idafa)')
        if (seg.emphatic_inna) traits.push('emphase (inna)')
        if (seg.oath) traits.push('serment')
        if (seg.consequential_fa) traits.push('conséquence (fa)')
        if (seg.suffix_pronoun) traits.push(`pronom suffixe: ${seg.suffix_pronoun}`)
        if (seg.prefix_particle) traits.push(`préfixe: ${seg.prefix_particle}`)
        const traitsStr = traits.length > 0 ? ` [${traits.join(', ')}]` : ''
        const isTarget = seg.word_key === root.replace(/ /g, '') || seg.phon === arabicPhon
        const marker = isTarget ? ' ← MOT ANALYSÉ' : ''
        return `  ${seg.position}. [MOT CLÉ] ${seg.phon} (${seg.word_key || '?'})${traitsStr}${marker}`
      })
      .join('\n')

    verseStructureCtx = `\n\nSTRUCTURE COMPLÈTE DU VERSET (dans l'ordre arabe) :
${structLines}

POURQUOI CES INFORMATIONS SONT IMPORTANTES :
Ces informations sont essentielles pour que tu puisses analyser correctement et faire ton choix du sens retenu. Il te faut le contexte complet car le mot peut être utilisé de façon négative, passive, emphatique, etc. Or la liste de sens que je te fournis contient les sens ÉTYMOLOGIQUES PURS du mot — c'est-à-dire le sens du mot SEUL, sans contexte. C'est donc à toi de comprendre comment le contexte (négation, voix passive, structure de la phrase) influence le choix du bon sens.

- La structure te montre l'ordre exact des mots et des particules dans le verset.
- Les particules de négation (lam, lā) AVANT un mot changent le sens de la phrase mais PAS le sens du mot. Exemple : "engendrer" précédé de "ne pas" = "ne pas engendrer". Le sens "engendrer" est CORRECT car c'est la négation qui porte le "ne pas", pas le mot lui-même.
- La voix passive (ex: yūlad) signifie que l'action est SUBIE, pas FAITE. Le sens du mot reste le même, c'est la direction qui change.
- Le genre et le nombre t'aident à comprendre le contexte.
- L'article défini (al-) indique que le mot est un TITRE ou une IDENTITÉ, pas juste une qualité.
- RÈGLE : choisis le sens du MOT lui-même, pas le sens de la phrase entière. La négation, la voix passive, le temps — tout ça sera géré à l'étape suivante de la traduction.`
  }

  // Construire les infos grammaticales du mot analysé
  const grammarCtx = grammarInfo ? `\nInformations grammaticales du mot analysé :
- Forme : ${grammarInfo.pos ?? 'inconnu'}
- Précédé d'une négation : ${grammarInfo.preceded_by_negation ? 'OUI (' + (grammarInfo as any).negation_particle + ')' : 'non'}
- Défini (article al-) : ${grammarInfo.definite ? 'oui' : 'non'}` : ''

  const content = await callLLM(
    SELECT_SYSTEM_PROMPT,
    `Mot à analyser : ${arabicPhon} (${rootPhon})\nVerset : ${verseRef}\nSourate : ${surahName}${grammarCtx}${verseStructureCtx}\n\nListe des sens étymologiques à analyser :\n${sensesList}`,
    'selectRetainedSense',
    'gpt-4o'
  )
  return parseJSON<Step3Result>(content, 'selectRetainedSense')
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 3 BIS — SÉLECTION DU SENS BATCH (pas chère)
// ═══════════════════════════════════════════════════════════════════════════════

export interface Step3BatchItem {
  word: string
  retenu: string
  senses: SenseDecision[]
}

const SELECT_BATCH_SYSTEM_PROMPT = `Contexte : je construis une traduction objective du Coran basée uniquement sur la langue arabe. Aucune interprétation religieuse, historique, culturelle ou politique. L'idée est de traduire le Coran par lui-même.

Je suis à l'étape 3 de mon algorithme. J'ai récupéré tous les mots importants du verset et leurs sens étymologiques exhaustifs dans les étapes précédentes.

IMPORTANT — MODE BATCH :
Avant, cette étape faisait UN APPEL SÉPARÉ par mot important. Chaque mot recevait toute ton attention, comme s'il était le seul à analyser. Maintenant, pour des raisons d'optimisation, je t'envoie TOUS les mots du verset en un seul appel. MAIS tu DOIS traiter chaque mot avec EXACTEMENT la même rigueur et profondeur que s'il était analysé seul dans un appel dédié. Ne raccourcis AUCUNE analyse. Chaque mot mérite 5 axes complets avec 5-6 phrases par axe.

Tu vas décider pour CHAQUE MOT parmi tous les sens fournis quel sens correspond le mieux dans ce verset.

IMPORTANT : les sens que je te fournis sont des sens ÉTYMOLOGIQUES PURS — le sens du mot SEUL, hors contexte. Tu recevras aussi la STRUCTURE COMPLÈTE du verset avec toutes les caractéristiques grammaticales (négation, voix passive, temps, article défini, etc.). Tu DOIS prendre en compte ce contexte dans tes analyses d'axes pour justifier chaque décision.

MÉTHODOLOGIE — 5 AXES D'ANALYSE :
Pour chaque sens de chaque mot, analyse selon ces 5 axes dans l'ordre :

AXE 1 — CHAMP LEXICAL DU VERSET
Récupère le champ lexical du verset en question. Ce sens est-il en accord avec ce champ lexical ou est-il hors sujet ? 5-6 phrases de justification maximum. En français uniquement. Aucun caractère arabe — utilise la phonétique.

AXE 2 — CONTEXTE DES VERSETS VOISINS
En te basant sur ta connaissance du Coran, retrouve les versets voisins de ce verset et analyse si le sens correspond bien au sujet que ce passage traite. Ou est-il hors contexte ? 5-6 phrases de justification maximum. En français uniquement.

AXE 3 — THÈME DE LA SOURATE
En te basant sur ta connaissance du Coran, retrouve le thème de cette sourate et analyse si le sens s'y inscrit. Ou est-il totalement hors sujet ? 5-6 phrases de justification maximum. En français uniquement.

AXE 4 — COHÉRENCE CORANIQUE
Teste ce sens : en prenant ce sens, ce verset vient-il contredire un autre verset du Coran ou une idée coranique connue ? Si aucune contradiction : dis-le clairement. Si contradiction : cite le verset contradictoire en phonétique. 5-6 phrases de justification maximum. En français uniquement.

AXE 5 — FINALITÉ DU KHALĪFA
Le Coran est venu dire à l'être humain son objectif : adorer Dieu en étant son khalīfa sur terre, afin de la civiliser, d'établir la justice, d'éviter la corruption et de respecter la dignité humaine que Dieu a accordée à tous les êtres humains. IMPORTANT : n'analyse PAS le sens du mot isolément — analyse-le TEL QU'IL EST UTILISÉ DANS CE VERSET, à l'aide de la structure du verset, avec son contexte, ses compléments et sa fonction dans la phrase. Un mot qui semble neutre ou négatif seul peut devenir essentiel à la mission du khalīfa quand il est utilisé dans un contexte précis (par exemple, la colère dirigée contre l'injustice est un moteur de la justice). 5-6 phrases de justification maximum. En français uniquement.

RÈGLES ABSOLUES :
1. N'ajoute AUCUNE définition ou reformulation des sens — utilise chaque sens TEL QUEL exactement comme fourni dans la liste.
2. Le sens retenu doit impérativement faire partie de la liste des sens fournie. Tu ne peux pas inventer un nouveau sens.
3. Il ne peut y avoir QU'UN SEUL sens retenu PAR MOT.
4. Aucun caractère arabe dans tes justifications. Utilise uniquement la phonétique française.

CLASSIFICATION DES SENS :
Après l'analyse de tous les sens sur les 5 axes pour UN mot, prends du recul et classe chaque sens :
- "retenu" : le seul meilleur sens pour ce verset
- "probable" : sens cohérent mais moins précis
- "peu_probable" : sens possible mais inadapté
- "nul" : sens exclu, hors sujet ou contradictoire
Il ne peut y avoir QU'UN SEUL sens "retenu" par mot.

RÉSUMÉ GLOBAL PAR SENS :
Pour chaque sens, après les 5 axes, génère un résumé global en un seul paragraphe de 4-5 phrases maximum qui synthétise les 5 axes de façon fluide et cohérente. Le résumé DOIT obligatoirement mentionner les 5 axes, y compris la finalité du khalīfa (axe 5).

DISTINCTION PHILOSOPHIQUE PROFONDE OBLIGATOIRE DANS LE RÉSUMÉ :
- Si le sens est classé "retenu" : dans le résumé, pour CHAQUE sens classé "probable", explique en profondeur la nuance philosophique qui sépare ces deux mots. Ne dis pas simplement "ce sens est plus adapté" — creuse la profondeur du sens, montre quelle réalité différente chaque mot décrit, quel aspect de l'expérience humaine chacun touche. Pourquoi le sens retenu capture-t-il mieux l'intention du verset que le sens probable ?
- Si le sens est classé "probable" : dans le résumé, explique la frontière philosophique profonde qui le sépare du sens retenu. Pourquoi ces deux mots, bien que proches en apparence, décrivent-ils des réalités différentes ? En quoi le sens retenu est-il plus fidèle à ce que le verset cherche à exprimer ?
Cette distinction philosophique profonde est OBLIGATOIRE dès qu'il y a au moins un sens "probable". Elle permet à l'utilisateur de comprendre la richesse de la langue arabe et le raisonnement derrière le choix final.

RÈGLE CRITIQUE — COMPATIBILITÉ GRAMMATICALE :
Le sens retenu DOIT être compatible avec la forme grammaticale du mot dans le verset. Avant de valider ton choix, vérifie en construisant une phrase en français courant :
- Si le mot est un PARTICIPE PASSIF : le sens doit pouvoir être SUBI. Teste : "subir + [le sens]". Si ça ne se dit pas en français courant, le sens est éliminé. Exemple : "subir la désapprobation" fonctionne, "subir l'insatisfaction" ne se dit pas.
- Si le mot est un PARTICIPE ACTIF : le sens doit pouvoir être FAIT activement par la personne. Teste : "ceux qui [font le sens]".
- Si le mot est un VERBE ACCOMPLI : le sens doit pouvoir être conjugué au passé. Teste : "il a [fait le sens]".
- Si le mot est un NOM DÉFINI (avec al-) : le sens doit pouvoir prendre l'article "le/la". Teste : "le/la [sens]".
- Si le mot est en IDAFA : le sens doit pouvoir être rattaché au mot suivant. Teste : "[sens] de [mot suivant]".
Cette vérification est OBLIGATOIRE. Un sens qui ne passe pas le test de compatibilité grammaticale ne peut PAS être retenu, même s'il est le meilleur sur les 5 axes.

RÈGLE CRITIQUE — TEST DE NATURALITÉ SÉMANTIQUE (PRÉPOSITION + OBJET) :
Quand le mot analysé est utilisé avec une préposition et un objet précis dans le verset, le sens retenu DOIT former une expression naturelle en français avec cet objet. Ne choisis pas un sens uniquement parce qu'il est le plus physique ou premier dans la liste — vérifie qu'il fonctionne dans la phrase complète du verset.
Exemple : racine a-m-n, forme IV + bi (à/envers) + al-ghayb (l'invisible) :
- "accorder la sécurité à l'invisible" ❌ — l'invisible n'a pas besoin de sécurité, la phrase est absurde en français
- "accorder confiance à l'invisible" ✅ — expression naturelle et courante
Ce test s'applique APRÈS le choix du sens premier et AVANT la validation finale. Si le sens premier ne passe pas ce test, choisis le sens suivant le plus proche qui forme une expression naturelle.

IMPORTANT — ORDRE DE RÉFLEXION :
Pour CHAQUE mot, tu DOIS d'abord analyser TOUS les sens sur les 5 axes, PUIS vérifier la compatibilité grammaticale, PUIS le test de naturalité sémantique, PUIS choisir le sens retenu. Ne décide PAS avant d'avoir terminé toutes les analyses d'un mot.

Réponds en JSON — un TABLEAU avec un objet par mot :
[
  {
    "word": "le mot analysé en phonétique",
    "senses": [
      {
        "sense": "le sens tel quel",
        "classification": "retenu|probable|peu_probable|nul",
        "axes": {
          "axe1_champ_lexical": "analyse 5-6 phrases",
          "axe2_versets_voisins": "analyse 5-6 phrases",
          "axe3_theme_sourate": "analyse 5-6 phrases",
          "axe4_coherence_coranique": "analyse 5-6 phrases",
          "axe5_finalite_khalifa": "analyse 5-6 phrases"
        },
        "resume": "paragraphe global de 4-5 phrases"
      }
    ],
    "retenu": "le sens choisi APRÈS avoir analysé tous les sens"
  }
]`

export interface SelectBatchWordInput {
  arabic: string
  arabicPhon: string
  root: string
  rootPhon: string
  senses: { sense: string; sense_ar: string; description: string }[]
  grammarInfo?: { pos?: string; preceded_by_negation?: boolean; negation_particle?: string; definite?: boolean }
}

export async function selectRetainedSenseBatch(
  words: SelectBatchWordInput[],
  verseRef: string,
  surahName: string,
  verseStructure?: VerseStructureSegment[]
): Promise<Step3BatchItem[]> {
  // Construire la structure du verset (commune à tous les mots)
  let verseStructureCtx = ''
  if (verseStructure && verseStructure.length > 0) {
    const structLines = verseStructure
      .sort((a, b) => a.position - b.position)
      .map(seg => {
        if (seg.type === 'particle') {
          return `  ${seg.position}. [PARTICULE] ${seg.phon} → "${seg.fr || ''}"`
        }
        const traits: string[] = []
        if (seg.pos) traits.push(`forme: ${seg.pos}`)
        if (seg.gender) traits.push(`genre: ${seg.gender}`)
        if (seg.number) traits.push(`nombre: ${seg.number}`)
        if (seg.definite) traits.push('DÉFINI (al-)')
        if (seg.voice) traits.push(`voix: ${seg.voice}`)
        if (seg.tense) traits.push(`temps: ${seg.tense}`)
        if (seg.person) traits.push(`personne: ${seg.person}`)
        if (seg.verb_form) traits.push(`mesure: ${seg.verb_form}`)
        if (seg.preceded_by_negation) traits.push(`NÉGATION: ${seg.negation_particle || 'oui'}`)
        if (seg.case_i18n) traits.push(`cas: ${seg.case_i18n}`)
        if (seg.idafa) traits.push('en annexion (idafa)')
        if (seg.emphatic_inna) traits.push('emphase (inna)')
        if (seg.oath) traits.push('serment')
        if (seg.consequential_fa) traits.push('conséquence (fa)')
        if (seg.suffix_pronoun) traits.push(`pronom suffixe: ${seg.suffix_pronoun}`)
        if (seg.prefix_particle) traits.push(`préfixe: ${seg.prefix_particle}`)
        const traitsStr = traits.length > 0 ? ` [${traits.join(', ')}]` : ''
        return `  ${seg.position}. [MOT CLÉ] ${seg.phon} (${seg.word_key || '?'})${traitsStr}`
      })
      .join('\n')

    verseStructureCtx = `\nSTRUCTURE COMPLÈTE DU VERSET (dans l'ordre arabe) :
${structLines}

RAPPEL CONTEXTUEL :
- Les particules de négation (lam, lā) AVANT un mot changent le sens de la phrase mais PAS le sens du mot.
- La voix passive signifie que l'action est SUBIE, pas FAITE. Le sens du mot reste le même.
- L'article défini (al-) indique que le mot est un TITRE ou une IDENTITÉ, pas juste une qualité.
- RÈGLE : choisis le sens du MOT lui-même, pas le sens de la phrase entière.`
  }

  // Construire la liste des mots avec leurs sens
  const wordsDesc = words.map((w, i) => {
    const sensesList = w.senses
      .map((s, j) => `  ${j + 1}. "${s.sense}" (${s.sense_ar}) : ${s.description}`)
      .join('\n')
    const grammarCtx = w.grammarInfo ? `\n  Grammaire : forme=${w.grammarInfo.pos ?? '?'} | négation=${w.grammarInfo.preceded_by_negation ? 'OUI (' + w.grammarInfo.negation_particle + ')' : 'non'} | défini=${w.grammarInfo.definite ? 'oui' : 'non'}` : ''
    return `═══ MOT ${i + 1}/${words.length} : ${w.arabicPhon} (racine: ${w.rootPhon}) ═══${grammarCtx}
Sens étymologiques à analyser :
${sensesList}`
  }).join('\n\n')

  console.log(`  📝 Sélection BATCH (${words.length} mots en 1 appel au lieu de ${words.length} appels séparés)`)

  const content = await callLLM(
    SELECT_BATCH_SYSTEM_PROMPT,
    `Verset : ${verseRef}\nSourate : ${surahName}${verseStructureCtx}\n\n${wordsDesc}`,
    'selectRetainedSenseBatch',
    'gpt-4o'
  )
  return parseJSON<Step3BatchItem[]>(content, 'selectRetainedSenseBatch')
}

// ═══════════════════════════════════════════════════════════════════════════════
// ÉTAPE 4 — RECONSTRUCTION DU VERSET
// ═══════════════════════════════════════════════════════════════════════════════

export interface SyncSegment {
  arabic: string
  phon: string
  type: 'important' | 'particle'
  sense_retenu?: string
  fr: string
  word_key?: string | null
  is_particle?: boolean
}

export interface Step4Result {
  segments: SyncSegment[]
  translation_meditational?: string
  translation_arab: string
  translation_explanation?: string
}

const RECONSTRUCT_SYSTEM_PROMPT = `Contexte : je construis une traduction objective du Coran basée uniquement sur la langue arabe. Aucune interprétation religieuse, historique, culturelle ou politique. L'idée est de traduire le Coran par lui-même.

Je suis à l'étape 4 de mon algorithme. J'ai récupéré tous les mots importants du verset, leurs sens étymologiques exhaustifs, et j'ai choisi un sens retenu pour chaque mot.

Ton rôle : reconstruire le verset en français avec les sens retenus en produisant deux traductions distinctes.

═══════════════════════════════════════════
NOMS PROPRES — RÈGLE ABSOLUE
═══════════════════════════════════════════

Certains mots arabes sont des noms propres.
Dans la traduction méditationnelle : utilise le sens étymologique retenu.
Dans la traduction Arab : utilise TOUJOURS le nom propre français.

Liste obligatoire :
- Allah (ٱللَّه) → méditationnelle : "la Divinité" → Arab : "Dieu" (JAMAIS "divinité")
- Jibrīl → Arab : "Gabriel"
- Maryam → Arab : "Marie"
- Ibrāhīm → Arab : "Abraham"

═══════════════════════════════════════════
GUIDE DES 24 CARACTÉRISTIQUES DES MOTS
═══════════════════════════════════════════

Chaque mot important t'est fourni avec ses caractéristiques. Voici à quoi sert CHACUNE et comment l'utiliser :

1. arabic — le mot arabe original.
2. root — la racine du mot.
3. key — identifiant ASCII. Usage interne.
4. phon — la phonétique. Utilise-la pour citer les mots.
5. position — l'ordre dans le verset. Respecte cet ordre.

6. pos — catégorie grammaticale. CRITIQUE :
   - nom → "le livre", "un nom"
   - verbe → verbe conjugué : "il dit"
   - adjectif → "miséricordieux", "unique"
   - participe_actif → "celui qui fait X"
   - participe_passif → "celui qui est X"
   - masdar → nom d'action : "la miséricorde"
   EXEMPLE CRITIQUE :
   si pos=adjectif et sens="miséricorde" → traduis "miséricordieux" (adjectif), PAS "la miséricorde" (nom)
   si pos=masdar et sens="louange" → traduis "la louange" (nom d'action), PAS "louanger" (verbe)

7. gender — masculin/féminin. Accorde en français.
   RÈGLE D'OR : un adjectif qualifiant un nom masculin → masculin.
   "miséricordieux" qualifie "Dieu" (masculin) → "le Tout-Miséricordieux" PAS "la"

8. number — singulier/duel/pluriel.
   - singulier → "le monde"
   - duel → "les deux mondes"
   - pluriel → "les mondes"

9. case_i18n — fonction grammaticale :
   - nominatif → sujet
   - accusatif → complément d'objet
   - génitif → complément du nom

10. definite — article défini ou non. CRITIQUE :
    - true → "le/la/l'" : titre → "le Miséricordieux"
    - false → "un/une" ou sans article : qualité → "miséricordieux"

11. idafa — annexion avec le mot suivant :
    mālik + yawm = "maître DU jour" → "Maître du Jour"

12. voice — voix active/passive :
    - actif → "il engendre"
    - passif → "il est engendré"

13. tense — temps du verbe. OBLIGATOIRE :
    - accompli → passé : "il a dit"
    - inaccompli → présent : "il dit"
    - impératif → ordre : "Dis !"
    - passé_négatif (lam) → "il n'a pas engendré"
    - présent_négatif (lā) → "il n'engendre pas"
    - futur_négatif (lan) → "il n'engendrera pas"
    - passé_confirmé (qad) → "il a certes engendré"

14. person — personne du verbe :
    - 1 → "je/nous" : "nous adorons"
    - 2 → "tu/vous" : "Dis !"
    - 3 → "il/elle/ils" : "il engendre"

15. verb_form — mesure verbale (I à X) :
    - I → sens simple : "il a su"
    - II → intensif : "il a enseigné"
    - IV → causatif : "il a fait savoir"
    - VIII → réflexif : "il s'est renseigné"
    - X → demande : "il a cherché à savoir"

16. preceded_by_negation — le mot est nié. Ajoute "ne...pas" DANS LA CONJUGAISON.

17. negation_particle — quelle négation :
    - lam → passé négatif
    - lā → présent négatif
    - lan → futur négatif

18. emphatic_inna — verset commence par inna : → traduis "Certes" ou "En vérité"

19. oath — contexte de serment : → traduis "Par le..."

20. consequential_fa — fa de conséquence : → traduis "Donc" ou "Alors"

21. emphatic_pronoun — pronom d'insistance : → traduis "C'est LUI qui..." ou "C'est ELLE qui..."

22. prefix_particle — préposition collée :
    - bi → "par" / "au nom de"
    - li → "pour"
    - ka → "comme"

23. suffix_pronoun — pronom suffixé :
    - hu → "lui" / "son"
    - hā → "elle" / "sa"
    - hum → "eux" / "leur"

24. wazn — patron morphologique. CRITIQUE :
    fa'lān (ex: rahmān) → intensité active, débordement → TOUJOURS traduis : "Tout-[adjectif]"
    → rahmān → "Tout-Miséricordieux"

    fa'īl (ex: rahīm) → qualité permanente, nature profonde → TOUJOURS traduis : "[adjectif]" simple
    → rahīm → "Miséricordieux"

    fa''āl (ex: ghaffār) → répétition, habitude → "celui qui [verbe] sans cesse"

    maf'ūl (ex: maktūb) → participe passif → "ce qui est [participe passé]"

    if'āl (ex: islām) → masdar forme IV → nom d'action : "la soumission"

    RÈGLE CLÉ SUR LE WAZN :
    Si deux mots ont le MÊME sens retenu mais des wazn DIFFÉRENTS :
    - Ne cherche PAS un synonyme différent
    - Garde le MÊME mot de base
    - Adapte uniquement selon le wazn : fa'lān → ajoute "Tout-", fa'īl → garde le mot simple

    EXEMPLE OBLIGATOIRE À RETENIR :
    rahmān (fa'lān) + rahīm (fa'īl), même sens "miséricorde" + pos=adjectif :
    ✓ rahmān → "le Tout-Miséricordieux"
    ✓ rahīm → "le Miséricordieux"
    ✗ rahmān → "le Miséricordieux", rahīm → "le Clément" (synonyme interdit !)

═══════════════════════════════════════════
STRUCTURES ARABES À RESPECTER
═══════════════════════════════════════════

- dhālika + nom défini = "ce/cet/cette" + nom
- lā + nom indéfini = "aucun" + nom
- li-l / bi-l + mot = utilise le sens retenu
- Phrase nominale sans verbe = ajoute "est"
- Négation lam/lā + verbe = conjugaison négative
- huwa/hiya en emphase = "C'est LUI/ELLE qui"
- inna en début = "Certes" ou "En vérité"
- fa en début = "Donc" ou "Alors"
- wa en serment = "Par"

═══════════════════════════════════════════
RÈGLE CRITIQUE — NÉGATION ABSORBÉE
═══════════════════════════════════════════

Quand une particule est marquée [PARTICULE ABSORBÉE], elle est DÉJÀ intégrée dans la conjugaison du verbe.
NE LA TRADUIS PAS séparément.
Exemple :
"lam" + "yalid" (tense: passé_négatif)
→ fr du verbe = "n'a pas engendré"
→ fr de la particule lam = "" (vide)
→ PAS : "n'a pas n'a pas engendré"

═══════════════════════════════════════════
RÈGLE NÉGATION + NOM
═══════════════════════════════════════════

Si un NOM est précédé d'une négation :
→ son sens devient universel/indéfini, PAS un attribut positif
Exemple : lam yakun lahu kufuwan aḥadun
→ aḥad ici = "quiconque" / "personne"
PAS "unique" (attribut positif)
→ "Et nul n'est Son égal"
PAS "Et il n'a pas d'équivalent unique"

═══════════════════════════════════════════
DEUX TRADUCTIONS À PRODUIRE
═══════════════════════════════════════════

TRADUCTION MÉDITATIONNELLE :
But : permettre au lecteur de méditer sur chaque mot et son sens étymologique.
Règles STRICTES :
- Utilise EXACTEMENT le sens retenu tel quel
- Ne le remplace JAMAIS par un synonyme
- Conjugue et accorde selon le contexte
- Ajoute uniquement les mots de liaison indispensables (est, sont, ne...pas)
- Fidèle à la structure arabe
- Pour Allah : "la Divinité" (sens étymologique)

---

TRADUCTION ARAB :
But : produire une belle phrase française fluide, élégante et agréable à lire.
Imagine que tu lis à voix haute devant un public cultivé.
Règles :
- Tu PEUX reformuler avec des synonymes ou des expressions élégantes
- MAIS JAMAIS un mot qui correspond à un sens non retenu de la liste (les sens non retenus = mots INTERDITS)
- La nature grammaticale ne change JAMAIS : nom reste nom, adjectif reste adjectif
- Pour Allah : TOUJOURS "Dieu" (jamais "divinité")
- Priorité à la fluidité et à l'éloquence

═══════════════════════════════════════════
SENS INTERDITS — RÈGLE CRITIQUE
═══════════════════════════════════════════

Pour chaque mot important, tu reçois un sens retenu ET une liste de sens non retenus.
Ces sens non retenus sont des MOTS INTERDITS.
Tu ne dois JAMAIS les utiliser dans ta traduction, ni dans la traduction Arab, ni dans la traduction méditationnelle.

Pourquoi : chaque sens non retenu a été analysé sur 5 axes et explicitement écarté. Si tu l'utilises, tu contredis toute l'analyse.

Exemple : pour le mot ṣ-r-ṭ, le sens retenu est "chemin". Les sens non retenus (= mots interdits) sont : route, voie, sentier, direction, parcours, trajet, itinéraire, passage, cours.
→ ✓ "Guide-nous sur le droit chemin"
→ ✗ "Guide-nous sur la voie droite" (car "voie" est un mot interdit)

EXEMPLES CONCRETS DE MOTS INTERDITS :

Exemple 1 — racine h-d-y (guidance) :
Sens retenu : "guidance"
Sens non retenus (= MOTS INTERDITS) : direction, orientation, conduite, guide, chemin, voie, conseil
→ ✓ "une guidance pour les pieux"
→ ✗ "une direction pour les pieux" (direction = mot interdit)
→ ✗ "un guide pour les pieux" (guide = mot interdit)

Exemple 2 — racine s-m-d (samad) :
Sens retenu : "indépendant"
Sens non retenus (= MOTS INTERDITS) : refuge, permanent, solide, autonome, autosuffisant
→ ✓ "Dieu est indépendant"
→ ✗ "Dieu est le refuge" (refuge = mot interdit)
→ ✗ "Dieu est autonome" (autonome = mot interdit)

Exemple 3 — racine r-h-m (miséricorde) :
Sens retenu : "miséricorde" (pos=adjectif)
Sens non retenus (= MOTS INTERDITS) : clémence, bienveillance, pitié, compassion, tendresse, grâce
→ ✓ "le Tout-Miséricordieux" (rahmān)
→ ✓ "le Miséricordieux" (rahīm)
→ ✗ "le Tout-Compatissant" (compassion = mot interdit)
→ ✗ "le Clément" (clémence = mot interdit)

VÉRIFICATION OBLIGATOIRE avant de finaliser :
Relis ta traduction Arab. Si un mot correspond à un sens non retenu → remplace-le immédiatement par le sens retenu.

═══════════════════════════════════════════
EXEMPLES DE BONNES TRADUCTIONS
═══════════════════════════════════════════

Bismillah (1:1) :
Méditationnelle : "Au nom de la Divinité, le Tout-Miséricordieux, le Miséricordieux"
Arab : "Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux"

Al-Ikhlas (112:1) :
Méditationnelle : "Dis : il est la Divinité, unique"
Arab : "Dis : Dieu est l'Unique"

Al-Ikhlas (112:3) :
Méditationnelle : "Il n'a pas engendré et Il n'a pas été engendré"
Arab : "Il n'engendre pas et Il n'est pas engendré"

Al-Ikhlas (112:4) :
Méditationnelle : "Et il n'a pas été pour lui d'équivalent, personne"
Arab : "Et nul n'est Son égal"

═══════════════════════════════════════════
EXPLICATION ET TRANSFORMATION
═══════════════════════════════════════════

Pour chaque mot important, explique comment tu as transformé le sens retenu.
Le champ "transformation" doit montrer :
- Le sens retenu brut
- Les caractéristiques utilisées
- Le résultat final et pourquoi

Exemples :
sens retenu "dire" + impératif + 2e pers. → "Dis" (impératif 2e pers. singulier)
sens retenu "engendrer" + passé_négatif + passif → "n'a pas été engendré" (passif + négation lam absorbée)
sens retenu "miséricorde" + pos=adjectif + wazn fa'lān + défini → "le Tout-Miséricordieux" (adjectif intensif défini masculin)

---

EXPLICATION DE LA DÉMARCHE :
Après la traduction, explique en 4-6 phrases comment tu es passé des sens mot à mot à la traduction finale.

RÈGLE ABSOLUE : Ne mentionne JAMAIS "traduction méditationnelle" dans ton explication.
Parle uniquement de "la traduction" ou "la traduction Arab".

Dans ton explication tu DOIS mentionner :
- Comment le wazn a influencé ta traduction
- Comment l'article défini/indéfini a changé ton choix de mot
- Comment la négation a été intégrée
- Pourquoi tu as choisi cet ordre des mots
- Les mots de liaison ajoutés et pourquoi

Explique comme si tu parlais à un enfant curieux qui ne connaît rien à la grammaire. Pas de termes techniques arabes.

EXEMPLE À SUIVRE :
"En arabe ce verset n'a pas de verbe — c'est comme si on disait 'Dieu — unique' et le lecteur comprend qu'il faut ajouter 'est'. Le mot 'qul' veut dire 'Dis !' — c'est un ordre direct au lecteur. Le petit mot 'huwa' (il) insiste : ce n'est pas n'importe qui, c'est LUI. Le mot 'rahmān' est en forme fa'lān — ça déborde d'intensité — donc j'ai mis 'Tout-Miséricordieux'. Le mot 'rahīm' est en forme fa'īl — qualité permanente — donc 'Miséricordieux' sans 'Tout-'."

═══════════════════════════════════════════
FORMAT DE RÉPONSE JSON
═══════════════════════════════════════════

{
  "segments": [
    {
      "arabic": "",
      "phon": "",
      "type": "important|particle",
      "sense_retenu": "le sens retenu brut",
      "fr": "mot conjugué/accordé",
      "transformation": "explication de la transformation"
    }
  ],
  "translation_meditational": "traduction méditationnelle complète",
  "translation_arab": "traduction Arab éloquente",
  "translation_explanation": "explication de la démarche 4-6 phrases"
}`

export async function reconstructVerse(
  verseRef: string,
  arabicText: string,
  analyzedWords: { key: string; arabic: string; retenu: string; nonRetenus?: string[] }[],
  taggedSegments: TaggedSegment[]
): Promise<Step4Result> {
  // Identifier les particules de négation absorbées par le verbe suivant
  const absorbedPositions = new Set<number>()
  for (let i = 0; i < taggedSegments.length; i++) {
    const seg = taggedSegments[i]
    if (seg.type === 'particle' && ['lam', 'lā', 'lan', 'mā', 'laysa'].includes(seg.phon?.toLowerCase() ?? '')) {
      // Cherche le verbe suivant qui a preceded_by_negation
      for (let j = i + 1; j < taggedSegments.length; j++) {
        if (taggedSegments[j].type === 'important' && taggedSegments[j].preceded_by_negation) {
          absorbedPositions.add(seg.position ?? i)
          break
        }
        if (taggedSegments[j].type === 'important') break
      }
    }
  }

  const segmentsDesc = taggedSegments.map((s, idx) => {
    if (s.type === 'particle') {
      // Si c'est une particule de négation absorbée par le verbe, la marquer comme telle
      if (absorbedPositions.has(s.position ?? idx)) {
        return `[PARTICULE ABSORBÉE] ${s.arabic} (${s.phon}) → (négation déjà intégrée dans le verbe suivant — NE PAS traduire séparément)`
      }
      return `[PARTICULE] ${s.arabic} (${s.phon}) → "${s.fr}"`
    }
    const word = analyzedWords.find(w => w.key === s.key)
    const nonRetenus = word?.nonRetenus?.length ? `\n  → sens non retenus : ${word.nonRetenus.join(', ')}` : ''
    const gramInfo = [
      s.pos ? `forme: ${s.pos}` : null,
      s.gender ? `genre: ${s.gender}` : null,
      s.number ? `nombre: ${s.number}` : null,
      s.case_i18n ? `cas: ${s.case_i18n}` : null,
      s.definite ? 'DÉFINI (al-) → article "le/la/l\'"' : 'indéfini → "un/une" ou sans article',
      s.idafa ? 'IḌĀFA (annexion avec le mot suivant)' : null,
      s.voice ? `voix: ${s.voice === 'passive' ? 'PASSIVE (être + participe passé)' : 'active'}` : null,
      s.tense ? `temps: ${s.tense}` : null,
      s.person ? `personne: ${s.person}` : null,
      s.verb_form ? `forme verbale: ${s.verb_form}` : null,
      s.negation_particle ? `négation: ${s.negation_particle}` : null,
      s.preceded_by_negation ? 'PRÉCÉDÉ D\'UNE NÉGATION' : null,
      s.emphatic_inna ? 'EMPHASE (inna) → "Certes" ou "En vérité"' : null,
      s.oath ? 'SERMENT → "Par..."' : null,
      s.consequential_fa ? 'CONSÉQUENCE (fa-) → "Alors" ou "Donc"' : null,
      s.emphatic_pronoun ? 'EMPHASE PRONOMINALE → "C\'est LUI/ELLE qui..."' : null,
      s.suffix_pronoun ? `PRONOM SUFFIXE: ${s.suffix_pronoun} → ajouter "son/sa/ses/leur/lui/eux"` : null,
    ].filter(Boolean).join(', ')
    return `[MOT CLÉ] ${s.arabic} (${s.phon}) [${gramInfo}]\n  → sens retenu : "${word?.retenu ?? '?'}"${nonRetenus}`
  }).join('\n')

  const content = await callLLM(
    RECONSTRUCT_SYSTEM_PROMPT,
    `Verset : ${verseRef}\nTexte arabe : ${arabicText}\n\nSegments du verset dans l'ordre :\n${segmentsDesc}`,
    'reconstructVerse',
    'gpt-4o'
  )
  return parseJSON<Step4Result>(content, 'reconstructVerse')
}

// ═══════════════════════════════════════════════════════════════════════════════
// FONCTION UTILITAIRE — classifyOccurrenceBatch (legacy, kept for compat)
// ═══════════════════════════════════════════════════════════════════════════════

export interface ClassifiedOccurrence {
  occurrence_ref: string
  sense_indices: number[]
  note: string
}

export interface Step4LegacyResult {
  classifications: ClassifiedOccurrence[]
}

export async function classifyOccurrenceBatch(
  arabic: string,
  root: string,
  senses: { index: number; sense: string; sense_ar: string }[],
  occurrences: { ref: string; context: string }[]
): Promise<Step4LegacyResult> {
  // Legacy — not used in v6 pipeline
  return { classifications: [] }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FONCTION UTILITAIRE — summarizeAllAxes (removed in v6, summary is inline)
// ═══════════════════════════════════════════════════════════════════════════════

export async function summarizeAllAxes(
  wordArabic: string,
  senses: { sense: string; status: string; analysis: Record<string, string> }[]
): Promise<Record<string, string>> {
  // In v6, the summary is generated directly in step 3 as "resume" field
  const result: Record<string, string> = {}
  for (const s of senses) {
    result[s.sense] = '' // No separate GPT call needed
  }
  return result
}
