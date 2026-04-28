const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  const phrases = [
    {word_key:'abw',sense:'père',arabic:'أبي أحسن الناس',phon:'abi ahsanu an-nas',french:'Mon père est le meilleur des gens.'},
    {word_key:'abw',sense:'père',arabic:'كل إنسان يحب أباه',phon:'kullu insanin yuhibbu abahu',french:'Tout être humain aime son père.'},
    {word_key:'abw',sense:'père',arabic:'أبوك علّمك الحياة',phon:'abuka allamaka al-hayat',french:'Ton père t\'a appris la vie.'},
    {word_key:'ydy',sense:'mains',arabic:'اغسل يديك',phon:'ighsil yadayk',french:'Lave tes mains.'},
    {word_key:'ydy',sense:'mains',arabic:'بين يديك الاختيار',phon:'bayna yadayka al-ikhtiyar',french:'Le choix est entre tes mains.'},
    {word_key:'ydy',sense:'mains',arabic:'يد واحدة لا تصفق',phon:'yadun wahida la tusaffiq',french:'Une seule main n\'applaudit pas.'},
    {word_key:'gny',sense:'suffisance',arabic:'الغنى غنى النفس',phon:'al-ghina ghina an-nafs',french:'La vraie richesse est la richesse de l\'âme.'},
    {word_key:'gny',sense:'suffisance',arabic:'استغن عن الناس',phon:'istaghni an an-nas',french:'Sois autosuffisant vis-à-vis des gens.'},
    {word_key:'gny',sense:'suffisance',arabic:'من غنيت نفسه غني',phon:'man ghaniyat nafsuhu ghaniy',french:'Celui dont l\'âme se suffit est riche.'},
    {word_key:'ksb',sense:'acquisition',arabic:'اكسب رزقك بيدك',phon:'iksib rizqaka bi-yadik',french:'Gagne ta subsistance de tes propres mains.'},
    {word_key:'ksb',sense:'acquisition',arabic:'كل نفس بما كسبت رهينة',phon:'kullu nafsin bima kasabat rahina',french:'Chaque personne est liée à ce qu\'elle a acquis.'},
    {word_key:'ksb',sense:'acquisition',arabic:'ماذا كسبت اليوم؟',phon:'madha kasabta al-yawm?',french:'Qu\'as-tu acquis aujourd\'hui ?'},
    {word_key:'mwl',sense:'richesse',arabic:'المال لا يدوم',phon:'al-malu la yadum',french:'La richesse ne dure pas.'},
    {word_key:'mwl',sense:'richesse',arabic:'المال خادم جيد وسيد سيء',phon:'al-malu khadimun jayyid wa sayyidun sayyi\'',french:'La richesse est un bon serviteur et un mauvais maître.'},
    {word_key:'mwl',sense:'richesse',arabic:'لا تجعل المال هدفك',phon:'la taj\'al al-mala hadafak',french:'Ne fais pas de la richesse ton objectif.'},
    {word_key:'nwr',sense:'feu',arabic:'النار تحرق وتنير',phon:'an-naru tuhriq wa tunir',french:'Le feu brûle et éclaire.'},
    {word_key:'nwr',sense:'feu',arabic:'أوقد نارا للدفء',phon:'awqid naran li-d-dif\'',french:'Allume un feu pour la chaleur.'},
    {word_key:'nwr',sense:'feu',arabic:'النور يهدي والنار تحرق',phon:'an-nuru yahdi wa an-naru tuhriq',french:'La lumière guide et le feu brûle.'},
    {word_key:'sly',sense:'combustion',arabic:'صلي النار',phon:'sali an-nar',french:'Il a été exposé au feu.'},
    {word_key:'sly',sense:'combustion',arabic:'من يلعب بالنار يصلاها',phon:'man yal\'ab bi-n-nar yaslaha',french:'Qui joue avec le feu s\'y brûle.'},
    {word_key:'sly',sense:'combustion',arabic:'الصلي بالنار عقوبة',phon:'as-salyu bi-n-nar uquba',french:'L\'exposition au feu est un châtiment.'},
    {word_key:'hml',sense:'portage',arabic:'احمل حقيبتك',phon:'ihmil haqibtak',french:'Porte ton sac.'},
    {word_key:'hml',sense:'portage',arabic:'لا تحمل أكثر مما تطيق',phon:'la tahmil akthara mimma tutiq',french:'Ne porte pas plus que ce que tu peux supporter.'},
    {word_key:'hml',sense:'portage',arabic:'تحمل المسؤولية',phon:'tahammala al-mas\'uliyya',french:'Il a porté la responsabilité.'},
    {word_key:'mra',sense:'femme',arabic:'المرأة نصف المجتمع',phon:'al-mar\'atu nisfu al-mujtama\'',french:'La femme est la moitié de la société.'},
    {word_key:'mra',sense:'femme',arabic:'كل امرأة لها حقوقها',phon:'kullu imra\'atin laha huququha',french:'Chaque femme a ses droits.'},
    {word_key:'mra',sense:'femme',arabic:'امرأة قوية تبني أمة',phon:'imra\'atun qawiyyatun tabni umma',french:'Une femme forte construit une nation.'},
    {word_key:'hbl',sense:'corde',arabic:'اعتصموا بحبل الله',phon:'i\'tasimu bi-habli llah',french:'Accrochez-vous à la corde de Dieu.'},
    {word_key:'hbl',sense:'corde',arabic:'الحبل يربط الأشياء',phon:'al-hablu yarbutu al-ashya\'',french:'La corde attache les choses.'},
    {word_key:'hbl',sense:'corde',arabic:'لا تقطع حبل الوصل',phon:'la taqta\' habla al-wasl',french:'Ne coupe pas la corde du lien.'},
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
