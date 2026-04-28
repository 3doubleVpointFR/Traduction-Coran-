// Restaurer les segments d'affichage (étape 4) de la sourate 1
// Le script FORCE=true les avait écrasés avec le format LLM brut
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function restore() {
  console.log('=== RESTAURATION SEGMENTS SOURATE 1 ===')

  // D'abord copier les segments actuels (format LLM) dans segments_step1
  const {data: all} = await db.from('verse_analyses').select('verse_id, segments').in('verse_id', [1,2,3,4,5,6,7])
  for (const v of all) {
    await db.from('verse_analyses').update({ segments_step1: v.segments }).eq('verse_id', v.verse_id)
  }
  console.log('  segments LLM copiés dans segments_step1')

  const segs = {
    1: [
      {fr:"au",phon:"bi",arabic:"\u0628\u0650",word_key:null,is_particle:true},
      {fr:"nom",pos:"nom",phon:"ismi",arabic:"\u0671\u0633\u0652\u0645\u0650",word_key:"smw",is_particle:false,sense_retenu:"nom"},
      {fr:"de Dieu",pos:"nom",phon:"allahi",arabic:"\u0671\u0644\u0644\u0651\u064e\u0647\u0650",word_key:"alh",is_particle:false,sense_retenu:"divinit\u00e9"},
      {fr:"le Tout-Mis\u00e9ricordieux",pos:"adjectif",phon:"ar-rahmani",arabic:"\u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650",word_key:"rhm",is_particle:false,sense_retenu:"mis\u00e9ricorde"},
      {fr:"le Mis\u00e9ricordieux",pos:"adjectif",phon:"ar-rahimi",arabic:"\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",word_key:"rhm",is_particle:false,sense_retenu:"mis\u00e9ricorde"},
    ],
    2: [
      {fr:"la louange",pos:"nom",phon:"al-hamdu",arabic:"\u0671\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f",word_key:"hmd",is_particle:false,sense_retenu:"louange"},
      {fr:"pour",phon:"li",arabic:"\u0644\u0650",word_key:null,is_particle:true},
      {fr:"Dieu",pos:"nom",phon:"allahi",arabic:"\u0671\u0644\u0644\u0651\u064e\u0647\u0650",word_key:"alh",is_particle:false,sense_retenu:"divinit\u00e9"},
      {fr:"Seigneur",pos:"nom",phon:"rabbi",arabic:"\u0631\u064e\u0628\u0650\u0651",word_key:"rbb",is_particle:false,sense_retenu:"seigneur"},
      {fr:"des mondes",pos:"nom",phon:"al-alamin",arabic:"\u0671\u0644\u0652\u0639\u064e\u0640\u0670\u0644\u064e\u0645\u0650\u064a\u0646\u064e",word_key:"elm",is_particle:false,sense_retenu:"monde"},
    ],
    3: [
      {fr:"le Tout-Mis\u00e9ricordieux",pos:"adjectif",phon:"ar-rahmani",arabic:"\u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0670\u0646\u0650",word_key:"rhm",is_particle:false,sense_retenu:"mis\u00e9ricorde"},
      {fr:"le Mis\u00e9ricordieux",pos:"adjectif",phon:"ar-rahimi",arabic:"\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",word_key:"rhm",is_particle:false,sense_retenu:"mis\u00e9ricorde"},
    ],
    4: [
      {fr:"Ma\u00eetre",pos:"nom",phon:"maliki",arabic:"\u0645\u064e\u0640\u0670\u0644\u0650\u0643\u0650",word_key:"mlk",is_particle:false,sense_retenu:"ma\u00eetre"},
      {fr:"du Jour",pos:"nom",phon:"yawmi",arabic:"\u064a\u064e\u0648\u0652\u0645\u0650",word_key:"ywm",is_particle:false,sense_retenu:"jour"},
      {fr:"de la r\u00e9tribution",pos:"nom",phon:"ad-dini",arabic:"\u0671\u0644\u062f\u0651\u0650\u064a\u0646\u0650",word_key:"dyn",is_particle:false,sense_retenu:"r\u00e9tribution"},
    ],
    5: [
      {fr:"c'est Toi seul",phon:"iyyaka",arabic:"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e",word_key:null,is_particle:true},
      {fr:"que nous adorons",pos:"verbe",phon:"na'budu",arabic:"\u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f",word_key:"ebd",is_particle:false,sense_retenu:"adorer"},
      {fr:"et",phon:"wa",arabic:"\u0648\u064e",word_key:null,is_particle:true},
      {fr:"c'est Toi seul",phon:"iyyaka",arabic:"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e",word_key:null,is_particle:true},
      {fr:"dont nous demandons l'aide",pos:"verbe",phon:"nasta'inu",arabic:"\u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f",word_key:"ewn",is_particle:false,sense_retenu:"demander l'aide"},
    ],
    6: [
      {fr:"guide-nous",pos:"verbe",phon:"ihdina",arabic:"\u0671\u0647\u0652\u062f\u0650\u0646\u064e\u0627",word_key:"hdy",is_particle:false,sense_retenu:"guider"},
      {fr:"le chemin",pos:"nom",phon:"as-sirata",arabic:"\u0671\u0644\u0635\u0651\u0650\u0631\u064e\u0640\u0670\u0637\u064e",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
      {fr:"le droit",pos:"adjectif",phon:"al-mustaqima",arabic:"\u0671\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e",word_key:"qwm",is_particle:false,sense_retenu:"droit"},
    ],
    7: [
      {fr:"le chemin",pos:"nom",phon:"sirata",arabic:"\u0635\u0650\u0631\u064e\u0640\u0670\u0637\u064e",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
      {fr:"de ceux qui",phon:"alladhina",arabic:"\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e",word_key:null,is_particle:true},
      {fr:"Tu as accord\u00e9",pos:"verbe",phon:"an'amta",arabic:"\u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e",word_key:"nem",is_particle:false,sense_retenu:"bienfait"},
      {fr:"sur eux",phon:"alayhim",arabic:"\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652",word_key:"ely",is_particle:false,sense_retenu:"sur"},
      {fr:"non pas",phon:"ghayri",arabic:"\u063a\u064e\u064a\u0652\u0631\u0650",word_key:"ghyr",is_particle:false,sense_retenu:"sauf"},
      {fr:"ceux qui ont subi la d\u00e9sapprobation",pos:"nom",phon:"al-maghdhubi",arabic:"\u0671\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650",word_key:"ghdb",is_particle:false,sense_retenu:"d\u00e9sapprobation"},
      {fr:"sur eux",phon:"alayhim",arabic:"\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652",word_key:"ely",is_particle:false,sense_retenu:"sur"},
      {fr:"et ne pas",phon:"wa-la",arabic:"\u0648\u064e\u0644\u064e\u0627",word_key:null,is_particle:true},
      {fr:"ceux qui s'\u00e9garent",pos:"nom",phon:"ad-dallina",arabic:"\u0671\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e",word_key:"dll",is_particle:false,sense_retenu:"\u00e9garer"},
    ],
  }

  for (const [vid, s] of Object.entries(segs)) {
    const {error} = await db.from('verse_analyses').update({ segments: s }).eq('verse_id', parseInt(vid))
    if (error) console.log('  ERREUR v' + vid + ': ' + error.message)
    else console.log('  v' + vid + ' -> ' + s.length + ' segments restaurés')
  }

  console.log('=== RESTAURATION TERMINÉE ===')
}
restore().catch(e => { console.error(e); process.exit(1) })
