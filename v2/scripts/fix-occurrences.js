const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const https = require('https')

const ar2bw = {
  'أ':'A','إ':'<','آ':'|','ا':'A','ب':'b','ت':'t','ث':'v','ج':'j','ح':'H',
  'خ':'x','د':'d','ذ':'*','ر':'r','ز':'z','س':'s','ش':'$','ص':'S',
  'ض':'D','ط':'T','ظ':'Z','ع':'E','غ':'g','ف':'f','ق':'q','ك':'k',
  'ل':'l','م':'m','ن':'n','ه':'h','و':'w','ي':'y','ء':"'",'ئ':'}',
  'ة':'p'
}

function rootToCorpus(rootAr) {
  return rootAr.split(' ').filter(c => c).map(c => ar2bw[c] || '?').join('')
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(data))
    })
    req.on('error', reject)
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function getCount(corpusCode) {
  try {
    const html = await fetch('https://corpus.quran.com/qurandictionary.jsp?q=' + encodeURIComponent(corpusCode))
    const match = html.match(/occurs\s+(\d+)\s+time/)
    return match ? parseInt(match[1]) : 0
  } catch(e) {
    return -1 // error
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function run() {
  // Get all unique root_ar → list of ids
  const roots = {}
  let p = 0
  while(true) {
    const {data} = await db.from('word_analyses').select('id,root_ar').range(p*1000,(p+1)*1000-1)
    if (!data || !data.length) break
    for (const r of data) {
      if (!r.root_ar || r.root_ar.trim() === '') continue
      if (!roots[r.root_ar]) roots[r.root_ar] = []
      roots[r.root_ar].push(r.id)
    }
    p++
  }

  const rootList = Object.entries(roots)
  console.log('Total racines uniques:', rootList.length)

  let updated = 0, errors = 0, notFound = 0

  for (let i = 0; i < rootList.length; i++) {
    const [rootAr, ids] = rootList[i]
    const code = rootToCorpus(rootAr)

    if (code.includes('?')) {
      // Unknown character, skip
      notFound++
      continue
    }

    const count = await getCount(code)

    if (count === -1) {
      errors++
      // Retry once after delay
      await sleep(2000)
      const retry = await getCount(code)
      if (retry >= 0) {
        for (const id of ids) {
          await db.from('word_analyses').update({total_occurrences: retry}).eq('id', id)
        }
        updated += ids.length
      }
      continue
    }

    if (count > 0) {
      for (const id of ids) {
        await db.from('word_analyses').update({total_occurrences: count}).eq('id', id)
      }
      updated += ids.length
    } else {
      notFound += ids.length
    }

    if ((i+1) % 50 === 0) {
      console.log('[' + (i+1) + '/' + rootList.length + '] updated=' + updated + ' notFound=' + notFound + ' errors=' + errors)
    }

    // Rate limit: 200ms between requests
    await sleep(200)
  }

  console.log('\n=== TERMINÉ ===')
  console.log('Updated:', updated)
  console.log('Not found:', notFound)
  console.log('Errors:', errors)
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
