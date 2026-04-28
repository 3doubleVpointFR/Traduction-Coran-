const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  const phrases = [
    // ew - protection/refuge
    {word_key:'ew', sense:'protection', arabic:'أعوذ بالله من الشيطان الرجيم', phon:"a'udhu billahi min ash-shaytani ar-rajim", french:"Je cherche refuge auprès de Dieu contre le diable banni."},
    {word_key:'ew', sense:'protection', arabic:'أعوذ بك من كل شر', phon:"a'udhu bika min kulli sharr", french:"Je cherche refuge auprès de toi contre tout mal."},
    {word_key:'ew', sense:'protection', arabic:'عوّذ أطفالك قبل النوم', phon:"'awwidh atfalaka qabla an-nawm", french:"Protège tes enfants avant le sommeil."},
    // shrr - mal
    {word_key:'shrr', sense:'mal', arabic:'الشر لا يدوم', phon:"ash-sharru la yadum", french:"Le mal ne dure pas."},
    {word_key:'shrr', sense:'mal', arabic:'ابتعد عن الشر', phon:"ibtaeid 'an ash-sharr", french:"Éloigne-toi du mal."},
    {word_key:'shrr', sense:'mal', arabic:'لا تكن مصدر شر', phon:"la takun masdar sharr", french:"Ne sois pas une source de mal."},
    // xlq - création
    {word_key:'xlq', sense:'création', arabic:'الله خلق كل شيء', phon:"allahu khalaqa kulla shay'", french:"Dieu a créé toute chose."},
    {word_key:'xlq', sense:'création', arabic:'خلقك في أحسن تقويم', phon:"khalaqaka fi ahsani taqwim", french:"Il t'a créé dans la meilleure forme."},
    {word_key:'xlq', sense:'création', arabic:'الخلق يدل على الخالق', phon:"al-khalqu yadullu 'ala al-khaliq", french:"La création indique le Créateur."},
    // gsq - obscurité
    {word_key:'gsq', sense:'obscurité', arabic:'غسق الليل', phon:"ghasaqa al-layl", french:"La nuit est tombée (l'obscurité a pénétré)."},
    {word_key:'gsq', sense:'obscurité', arabic:'أوقد نارا في الغسق', phon:"awqid naran fi al-ghasaq", french:"Allume un feu dans l'obscurité."},
    {word_key:'gsq', sense:'obscurité', arabic:'الغاسق وقت خطر', phon:"al-ghasiqu waqtu khatar", french:"L'obscurité est un moment de danger."},
    // wqb - pénétrer
    {word_key:'wqb', sense:'pénétration', arabic:'وقب الليل', phon:"waqaba al-layl", french:"La nuit a pénétré (elle a envahi l'espace)."},
    {word_key:'wqb', sense:'pénétration', arabic:'البرد وقب في العظام', phon:"al-bardu waqaba fi al-'izam", french:"Le froid a pénétré dans les os."},
    {word_key:'wqb', sense:'pénétration', arabic:'لا تدع الخوف يقب في قلبك', phon:"la tada' al-khawfa yaqibu fi qalbik", french:"Ne laisse pas la peur pénétrer dans ton cœur."},
    // nfv - souffler
    {word_key:'nfv', sense:'souffle', arabic:'نفث في أذنه كلاما', phon:"nafatha fi udhnihi kalaman", french:"Il a soufflé des mots dans son oreille."},
    {word_key:'nfv', sense:'souffle', arabic:'لا تنفث في علاقات الناس', phon:"la tanfuth fi 'alaqat an-nas", french:"Ne souffle pas dans les relations des gens (ne les détruis pas par tes paroles)."},
    {word_key:'nfv', sense:'souffle', arabic:'النفث أخطر من الصراخ', phon:"an-nafth akhtaru min as-surakh", french:"Le murmure est plus dangereux que le cri."},
    // eqd - nœud/lien
    {word_key:'eqd', sense:'nœud', arabic:'لا تحل عقدة غيرك', phon:"la tahull 'uqdata ghayrik", french:"Ne défais pas le lien d'un autre."},
    {word_key:'eqd', sense:'nœud', arabic:'العقد شريعة المتعاقدين', phon:"al-'aqdu shari'atu al-muta'aqidin", french:"Le contrat est la loi des contractants."},
    {word_key:'eqd', sense:'nœud', arabic:'اعقد النية قبل العمل', phon:"i'qid an-niyyata qabla al-'amal", french:"Noue ton intention avant d'agir."},
  ]

  let inserted = 0
  for (const p of phrases) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (!wa || !wa[0]) { console.log('SKIP ' + p.word_key + ': not found'); continue }
    const {error} = await db.from('word_daily').insert({
      analysis_id: wa[0].id,
      sense: p.sense,
      arabic: p.arabic,
      phon: p.phon,
      french: p.french
    })
    if (error && error.message.includes('duplicate')) continue
    if (error) console.log('ERR ' + p.word_key + ':', error.message)
    else inserted++
  }
  console.log('✅ ' + inserted + ' phrases insérées')
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
