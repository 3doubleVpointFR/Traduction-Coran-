const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  const phrases = [
    {word_key:'ray',sense:'vision',arabic:'رأيته بعيني',phon:"ra'aytuhu bi-'ayni",french:'Je l\'ai vu de mes propres yeux.'},
    {word_key:'ray',sense:'vision',arabic:'ما رأيك؟',phon:"ma ra'yuk?",french:'Quel est ton avis ?'},
    {word_key:'ray',sense:'vision',arabic:'أرأيت ما حدث؟',phon:"ara'ayta ma hadath?",french:'As-tu vu ce qui s\'est passé ?'},
    {word_key:'tem',sense:'nourriture',arabic:'طعام صحي',phon:'taaamun sahhiy',french:'Une nourriture saine.'},
    {word_key:'tem',sense:'nourriture',arabic:'أطعم الجائع',phon:"at'im al-ja'i'",french:'Nourris celui qui a faim.'},
    {word_key:'tem',sense:'nourriture',arabic:'ما طعم هذا؟',phon:'ma ta\'mu hadha?',french:'Quel goût a cela ?'},
    {word_key:'skn',sense:'pauvre',arabic:'المسكين يحتاج مساعدة',phon:'al-miskinu yahtaju musa\'ada',french:'Le démuni a besoin d\'aide.'},
    {word_key:'skn',sense:'pauvre',arabic:'لا تحتقر المسكين',phon:'la tahtaqir al-miskin',french:'Ne méprise pas le démuni.'},
    {word_key:'skn',sense:'pauvre',arabic:'أعط المسكين حقه',phon:"a'ti al-miskina haqqahu",french:'Donne au démuni ce qui lui revient.'},
    {word_key:'slw',sense:'prière',arabic:'الصلاة عمود الدين',phon:'as-salatu \'amudu ad-din',french:'La prière est le pilier de la voie.'},
    {word_key:'slw',sense:'prière',arabic:'صلّ في وقتها',phon:'salli fi waqtiha',french:'Prie à son heure.'},
    {word_key:'slw',sense:'prière',arabic:'الصلاة تنهى عن الفحشاء',phon:'as-salatu tanha \'an al-fahsha\'',french:'La prière empêche la turpitude.'},
    {word_key:'mne',sense:'refus',arabic:'لا تمنع الخير',phon:'la tamna\' al-khayr',french:'Ne refuse pas le bien.'},
    {word_key:'mne',sense:'refus',arabic:'من منعك حقك؟',phon:'man mana\'aka haqqak?',french:'Qui t\'a refusé ton droit ?'},
    {word_key:'mne',sense:'refus',arabic:'المنع ظلم',phon:'al-man\'u zulm',french:'Le refus est une injustice.'},
  ]

  let inserted = 0
  for (const p of phrases) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (!wa || !wa[0]) continue
    const {error} = await db.from('word_daily').insert({
      analysis_id: wa[0].id, sense: p.sense,
      arabic: p.arabic, phon: p.phon, french: p.french
    })
    if (error && error.message.includes('duplicate')) continue
    if (error) console.log('ERR ' + p.word_key + ':', error.message)
    else inserted++
  }
  console.log('✅ ' + inserted + ' phrases insérées')
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
