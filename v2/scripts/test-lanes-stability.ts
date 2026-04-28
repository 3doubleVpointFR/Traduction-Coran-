// Test de stabilité : 5 appels étape 2 pour samad via Lane's
import { readFileSync } from 'fs'

// Load .env.local manually
const envContent = readFileSync('.env.local', 'utf8')
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=')
  if (key && vals.length) process.env[key.trim()] = vals.join('=').trim()
})

import { getLanesEntry, translateLanesSenses } from '../lib/lanes'

async function main() {
  const root = 'صمد'
  const pos = 'nom'
  const arabic = 'ٱلصَّمَدُ'

  const entry = getLanesEntry(root)
  if (!entry) {
    console.log('❌ Racine non trouvée dans Lane\'s')
    return
  }

  console.log('═══════════════════════════════════════════')
  console.log(`Test de stabilité : 5 appels pour "${root}"`)
  console.log('═══════════════════════════════════════════\n')

  const allResults: string[][] = []

  for (let i = 1; i <= 5; i++) {
    console.log(`\n─── Appel ${i}/5 ───────────────────────────`)
    try {
      const result = await translateLanesSenses(entry, pos, arabic)
      const senses = result.senses.map(s => s.sense)
      allResults.push(senses)
      console.log(`  Résultat: ${senses.join(' | ')}`)
    } catch (e: any) {
      console.error(`  ❌ Erreur:`, e.message)
      allResults.push([])
    }

    // Petit délai entre les appels
    if (i < 5) await new Promise(r => setTimeout(r, 2000))
  }

  // Comparaison
  console.log('\n═══════════════════════════════════════════')
  console.log('COMPARAISON DES 5 RÉSULTATS')
  console.log('═══════════════════════════════════════════\n')

  for (let i = 0; i < allResults.length; i++) {
    console.log(`Appel ${i + 1}: ${allResults[i].join(' | ')}`)
  }

  // Vérifier si identiques
  const reference = JSON.stringify(allResults[0])
  const allSame = allResults.every(r => JSON.stringify(r) === reference)
  console.log(`\n${allSame ? '✅ STABLE — 5/5 identiques !' : '⚠️ INSTABLE — des différences détectées'}`)

  if (!allSame) {
    // Montrer les différences
    const uniqueSets = new Set(allResults.map(r => JSON.stringify(r)))
    console.log(`  ${uniqueSets.size} variantes différentes sur 5 appels`)
  }
}

main().catch(console.error)
