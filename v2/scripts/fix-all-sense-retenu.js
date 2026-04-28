const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

// Manual mapping: wrong sense_retenu → correct sense from word_meanings
const fixes = {
  // s107
  'ray:vision': 'voir',
  'ray:ostentation': 'voir',  // the sense is "voir" but used causatively
  'kdhb:déni': 'démentir',
  'dee2:repoussement': 'repousser violemment',
  'hdd2:incitation': 'inciter',
  'shw2:distraction': 'être distrait',
  'men:aide': 'source',  // maoun comes from source/jaillissement
  // s111
  'gny:suffisance': 'être riche',
  'ksb:acquisition': 'acquérir',
  'sly:combustion': 'brûler',
  'hml:portage': 'porter',
  'msd:fibres': 'fibre de palmier',
  // s113
  'wqb:pénétration': 'pénétrer',
  // s114
  'ewdh:protection': 'chercher refuge',
  'xns:retrait': 'se retirer',
  // s109
  'dyn:religion': 'religion', // already fixed
}

async function run() {
  const surahIds = [107, 109, 111, 112, 113, 114]
  let totalFixed = 0

  for (const sid of surahIds) {
    const {data: verses} = await db.from('verses').select('id,verse_num').eq('surah_id', sid).order('verse_num')
    for (const v of verses) {
      const {data: va} = await db.from('verse_analyses').select('id,segments').eq('verse_id', v.id).single()
      if (!va || !va.segments) continue

      let changed = false
      const newSegs = va.segments.map(seg => {
        if (seg.is_particle || !seg.word_key || !seg.sense_retenu) return seg
        const key = seg.word_key + ':' + seg.sense_retenu
        if (fixes[key]) {
          changed = true
          return {...seg, sense_retenu: fixes[key]}
        }
        return seg
      })

      if (changed) {
        await db.from('verse_analyses').update({segments: newSegs}).eq('id', va.id)
        const fixed = newSegs.filter((s,i) => s.sense_retenu !== va.segments[i].sense_retenu)
        fixed.forEach(s => console.log('✅ s' + sid + ':' + v.verse_num + ' ' + s.word_key + ' → "' + s.sense_retenu + '"'))
        totalFixed += fixed.length
      }
    }
  }
  console.log('\nTotal corrigés: ' + totalFixed)

  // Verify
  console.log('\n=== VÉRIFICATION ===')
  for (const sid of surahIds) {
    const {data: verses} = await db.from('verses').select('id,verse_num').eq('surah_id', sid).order('verse_num')
    for (const v of verses) {
      const {data: va} = await db.from('verse_analyses').select('segments').eq('verse_id', v.id).single()
      if (!va || !va.segments) continue
      for (const seg of va.segments) {
        if (seg.is_particle || !seg.word_key || !seg.sense_retenu) continue
        const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', seg.word_key).limit(1)
        if (!wa || !wa[0]) continue
        const {data: m} = await db.from('word_meanings').select('sense').eq('analysis_id', wa[0].id).not('concept','is',null)
        const allSenses = m.map(x => x.sense.toLowerCase())
        if (!allSenses.includes(seg.sense_retenu.toLowerCase())) {
          const partial = allSenses.some(s => s.includes(seg.sense_retenu.toLowerCase()) || seg.sense_retenu.toLowerCase().includes(s))
          if (!partial) {
            console.log('❌ STILL BAD s' + sid + ':' + v.verse_num + ' ' + seg.word_key + '="' + seg.sense_retenu + '"')
          }
        }
      }
    }
  }
  console.log('Done')
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
