// One-shot cleanup : remplace toutes les clés API hardcodées par process.env.XXX
// Usage : node clean-secrets.js
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, 'v2')
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'lanes_data', 'tmp_json'])
const VALID_EXT = /\.(js|mjs|cjs|ts|tsx|jsx|json|md|yml|yaml)$/

const PATTERNS = [
  // Supabase service key : 'sb_secret_xxx' ou "sb_secret_xxx"
  { re: /(['"])sb_secret_[A-Za-z0-9_-]+\1/g, replacement: 'process.env.SUPABASE_SERVICE_KEY' },
  // OpenAI : sk-proj-xxx (long base64-ish strings)
  { re: /(['"])sk-proj-[A-Za-z0-9_-]{20,}\1/g, replacement: 'process.env.OPENAI_API_KEY' },
  // Anthropic : sk-ant-api03-xxx
  { re: /(['"])sk-ant-api[0-9]{2}-[A-Za-z0-9_-]{20,}\1/g, replacement: 'process.env.ANTHROPIC_API_KEY' },
  // Google : AIzaSy + 33 chars
  { re: /(['"])AIzaSy[A-Za-z0-9_-]{33}\1/g, replacement: 'process.env.GOOGLE_API_KEY' },
]

let totalCleaned = 0
let totalFiles = 0

function walk(dir) {
  let entries
  try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return }
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (VALID_EXT.test(e.name)) {
      let content
      try { content = fs.readFileSync(full, 'utf8') } catch { continue }
      let changed = false
      for (const { re, replacement } of PATTERNS) {
        if (re.test(content)) {
          content = content.replace(re, replacement)
          changed = true
        }
      }
      if (changed) {
        fs.writeFileSync(full, content)
        totalCleaned++
        if (totalCleaned <= 20) console.log('cleaned:', path.relative(__dirname, full))
      }
      totalFiles++
    }
  }
}

walk(ROOT)
console.log(`\n✔ Done. ${totalCleaned} fichiers nettoyés (sur ${totalFiles} examinés).`)
