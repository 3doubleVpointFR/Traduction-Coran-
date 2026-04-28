// Pipeline Maison — Sourate 112 — ÉTAPE 4 — Tous les versets
// Traduction + démarche explicative + segments + phrases du quotidien
// Règles : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('============================================')
  console.log('  SOURATE 112 — ÉTAPE 4 — TRADUCTION')
  console.log('============================================')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:1 — قُلْ هُوَ ٱللَّهُ أَحَدٌ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:1')
  console.log('──────────────────────────────────────')

  // CHECKLIST ÉTAPE 4 :
  // [✓] Français courant (pas de registre littéraire)
  // [✓] Aucun mot ne correspond à un sens non retenu
  //     Sens non retenus de ahd : un (nombre), quiconque, dimanche, rendre solitaire, etc.
  //     → ne pas utiliser "un" comme nombre dans la traduction
  //     Sens retenu : unique → OK
  // [✓] Démarche sans interprétation
  // [✓] Si le texte ne précise pas, on dit "le texte ne précise pas"

  const v1 = {
    verse_id: 6222,
    translation_arab: "Dis : Il est Dieu, unique.",
    translation_explanation: "Le verset commence par qul (dis), un impératif (un ordre, une demande) qui s'adresse à celui qui récite. C'est une instruction de transmettre ce qui suit. Huwa (il) est un pronom personnel qui introduit le sujet. Allahu est le nom propre de Dieu, traduit par \"Dieu\" (règle des noms propres). Ahadun est un nom indéfini en position d'attribut (c'est ce qu'on appelle en arabe un khabar, la partie de la phrase qui dit ce qu'est le sujet). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ahad désigne ce qui est indivisible, ce qui ne peut pas être séparé en parties. C'est différent de wahid qui est le nombre \"un\" : le Coran utilise wahid ailleurs pour dire \"un seul Dieu\" (ilahun wahid), mais ici il choisit ahad pour exprimer l'indivisibilité, pas le nombre.",
    segments: [
      {fr:"dis",phon:"qul",arabic:"قُلْ",word_key:null,is_particle:true},
      {fr:"Il",phon:"huwa",arabic:"هُوَ",word_key:null,is_particle:true},
      {fr:"est Dieu",pos:"nom",phon:"allahu",arabic:"ٱللَّهُ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
      {fr:"unique",pos:"nom",phon:"ahadun",arabic:"أَحَدٌ",word_key:"ahd",is_particle:false,sense_retenu:"unique"},
    ],
  }

  const {error: va1Err} = await db.from('verse_analyses').insert({
    verse_id: v1.verse_id,
    translation_arab: v1.translation_arab,
    translation_explanation: v1.translation_explanation,
    segments: v1.segments,
  })
  if (va1Err) console.log('  ERREUR va: ' + va1Err.message)
  else console.log('  Traduction : "' + v1.translation_arab + '"')

  const {error: vwa1Err} = await db.from('verse_word_analyses').insert([
    {verse_id:6222, word_key:'alh', sense_chosen:'divinité', position:3},
    {verse_id:6222, word_key:'ahd', sense_chosen:'unique', position:4},
  ])
  if (vwa1Err) console.log('  ERREUR vwa: ' + vwa1Err.message)
  else console.log('  2 verse_word_analyses insérés')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:2 — ٱللَّهُ ٱلصَّمَدُ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:2')
  console.log('──────────────────────────────────────')

  // Sens non retenus de smd : se diriger vers, viser, frapper, terrain, sol dur, boucher, etc.
  // Sens retenu : celui vers qui on se tourne
  // ATTENTION : ne pas utiliser "éternel" (sens probable, pas retenu)

  const v2 = {
    verse_id: 6223,
    translation_arab: "Dieu, celui vers qui on se tourne.",
    translation_explanation: "Le verset est une phrase nominale (pas de verbe) qui qualifie Dieu avec un titre. Allahu est le nom propre de Dieu. As-samadu est un nom défini avec l'article al- (une forme qui désigne un titre permanent, une qualité qui ne change pas). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-d a pour sens premier \"se diriger vers\". As-samad est celui vers qui les gens se dirigent dans leurs besoins. C'est un mot qui n'apparaît qu'une seule fois dans tout le Coran, ce qui le rend unique. La structure du verset est simple : Dieu est nommé, puis qualifié. Le titre as-samad décrit la relation entre Dieu et tout le reste : tout converge vers Lui.",
    segments: [
      {fr:"Dieu",pos:"nom",phon:"allahu",arabic:"ٱللَّهُ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
      {fr:"celui vers qui on se tourne",pos:"nom",phon:"as-samadu",arabic:"ٱلصَّمَدُ",word_key:"smd",is_particle:false,sense_retenu:"celui vers qui on se tourne"},
    ],
  }

  const {error: va2Err} = await db.from('verse_analyses').insert({
    verse_id: v2.verse_id,
    translation_arab: v2.translation_arab,
    translation_explanation: v2.translation_explanation,
    segments: v2.segments,
  })
  if (va2Err) console.log('  ERREUR va: ' + va2Err.message)
  else console.log('  Traduction : "' + v2.translation_arab + '"')

  const {error: vwa2Err} = await db.from('verse_word_analyses').insert([
    {verse_id:6223, word_key:'alh', sense_chosen:'divinité', position:1},
    {verse_id:6223, word_key:'smd', sense_chosen:'celui vers qui on se tourne', position:2},
  ])
  if (vwa2Err) console.log('  ERREUR vwa: ' + vwa2Err.message)
  else console.log('  2 verse_word_analyses insérés')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:3 — لَمْ يَلِدْ وَلَمْ يُولَدْ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:3')
  console.log('──────────────────────────────────────')

  // Sens non retenus de wld : enfanter (probable), enfant, nouveau-né, accoucher, esclave, etc.
  // Sens retenu : engendrer
  // ATTENTION : ne pas utiliser "enfanter" (sens probable, pas retenu)

  const v3 = {
    verse_id: 6224,
    translation_arab: "Il n'a pas engendré et Il n'a pas été engendré.",
    translation_explanation: "Le verset est construit en deux parties symétriques niées par lam (particule de négation qui, combinée avec un verbe inaccompli, nie le passé). Première partie : lam yalid (Il n'a pas engendré). Le mot yalid est un verbe inaccompli forme I voix active (une forme qui décrit l'action faite par le sujet). \"Engendrer\" signifie être à l'origine biologique d'un autre être. Nier l'engendrement veut dire qu'aucune partie de Dieu ne s'est séparée pour former un autre être, ce qui est cohérent avec l'unicité indivisible du verset 1. Deuxième partie : wa lam yulad (et Il n'a pas été engendré). Le mot yulad est le même verbe mais à la voix passive (une forme qui dit que l'action est subie, pas faite). Nier que Dieu ait été engendré veut dire qu'Il n'est pas le produit d'un autre être, Il n'a pas d'origine en dehors de Lui-même.",
    segments: [
      {fr:"ne pas",phon:"lam",arabic:"لَمْ",word_key:null,is_particle:true},
      {fr:"Il a engendré",pos:"verbe",phon:"yalid",arabic:"يَلِدْ",word_key:"wld",is_particle:false,sense_retenu:"engendrer"},
      {fr:"et",phon:"wa",arabic:"وَ",word_key:null,is_particle:true},
      {fr:"ne pas",phon:"lam",arabic:"لَمْ",word_key:null,is_particle:true},
      {fr:"Il a été engendré",pos:"verbe",phon:"yulad",arabic:"يُولَدْ",word_key:"wld",is_particle:false,sense_retenu:"engendrer"},
    ],
  }

  const {error: va3Err} = await db.from('verse_analyses').insert({
    verse_id: v3.verse_id,
    translation_arab: v3.translation_arab,
    translation_explanation: v3.translation_explanation,
    segments: v3.segments,
  })
  if (va3Err) console.log('  ERREUR va: ' + va3Err.message)
  else console.log('  Traduction : "' + v3.translation_arab + '"')

  const {error: vwa3Err} = await db.from('verse_word_analyses').insert([
    {verse_id:6224, word_key:'wld', sense_chosen:'engendrer', position:2},
    {verse_id:6224, word_key:'wld', sense_chosen:'engendrer', position:5},
  ])
  if (vwa3Err) console.log('  ERREUR vwa: ' + vwa3Err.message)
  else console.log('  2 verse_word_analyses insérés')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:4 — وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:4')
  console.log('──────────────────────────────────────')

  // Sens retenu kwn : être (verbe grammatical)
  // Sens retenu kfw : égal (rang, statut)
  // Sens retenu ahd en contexte négatif : quiconque/personne
  // ATTENTION : ahd ici = "quiconque" (contexte négatif), pas "unique" (contexte affirmatif de 112:1)
  // Ne pas utiliser "semblable" (sens probable kfw, pas retenu)

  const v4 = {
    verse_id: 6225,
    translation_arab: "Et personne n'est égal à Lui.",
    translation_explanation: "Le verset commence par wa (et), qui relie cette négation aux précédentes. Lam yakun est le verbe kana (être) à l'inaccompli nié par lam : \"il n'y a pas\" ou \"il n'a pas été\". C'est un verbe incomplet (ce qu'on appelle en arabe un verbe naqis, c'est-à-dire un verbe qui a besoin d'un sujet ET d'un attribut pour avoir un sens complet). Lahu est un pronom qui signifie \"pour Lui\" ou \"à Lui\". Kufuwan est un nom accusatif indéfini en position d'attribut (la partie de la phrase qui dit ce qu'est le sujet). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kufu signifie \"equal to him\" : celui qui est du même rang, du même niveau. Ahadun est le sujet du verbe kana. Dans ce contexte négatif (lam yakun), ahad signifie \"quiconque, personne\" plutôt que \"unique\". C'est un usage grammatical spécifique : dans les phrases négatives, ahad fonctionne comme pronom indéfini. La phrase complète : il n'y a pas eu pour Lui quiconque d'égal. Le texte ne précise pas dans quel domaine cette égalité est niée : le verset nie l'égalité de manière absolue, dans tous les domaines.",
    segments: [
      {fr:"et",phon:"wa",arabic:"وَ",word_key:null,is_particle:true},
      {fr:"il n'y a pas",phon:"lam yakun",arabic:"لَمْ يَكُن",word_key:"kwn",is_particle:false,sense_retenu:"être",pos:"verbe"},
      {fr:"pour Lui",phon:"lahu",arabic:"لَّهُۥ",word_key:null,is_particle:true},
      {fr:"d'égal",pos:"nom",phon:"kufuwan",arabic:"كُفُوًا",word_key:"kfw",is_particle:false,sense_retenu:"égal"},
      {fr:"personne",pos:"nom",phon:"ahadun",arabic:"أَحَدٌۢ",word_key:"ahd",is_particle:false,sense_retenu:"quiconque"},
    ],
  }

  const {error: va4Err} = await db.from('verse_analyses').insert({
    verse_id: v4.verse_id,
    translation_arab: v4.translation_arab,
    translation_explanation: v4.translation_explanation,
    segments: v4.segments,
  })
  if (va4Err) console.log('  ERREUR va: ' + va4Err.message)
  else console.log('  Traduction : "' + v4.translation_arab + '"')

  const {error: vwa4Err} = await db.from('verse_word_analyses').insert([
    {verse_id:6225, word_key:'kwn', sense_chosen:'être', position:2},
    {verse_id:6225, word_key:'kfw', sense_chosen:'égal', position:4},
    {verse_id:6225, word_key:'ahd', sense_chosen:'quiconque', position:5},
  ])
  if (vwa4Err) console.log('  ERREUR vwa: ' + vwa4Err.message)
  else console.log('  3 verse_word_analyses insérés')
  console.log('')

  // ══════════════════════════════════════
  // PHRASES DU QUOTIDIEN
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  PHRASES DU QUOTIDIEN')
  console.log('──────────────────────────────────────')

  const daily = [
    // ahd (269) — sens retenu : unique
    {analysis_id:269, sense:'unique', arabic:'هُوَ ٱللَّهُ أَحَدٌ', phon:'huwa llahu ahadun', french:'Il est Dieu, unique'},
    {analysis_id:269, sense:'unique', arabic:'لَا أَحَدَ مِثْلُهُ', phon:'la ahada mithluhu', french:'Personne n\'est comme lui'},
    {analysis_id:269, sense:'unique', arabic:'جَاءَ أَحَدٌ', phon:'jaa ahadun', french:'Quelqu\'un est venu'},
    // smd (270) — sens retenu : celui vers qui on se tourne
    {analysis_id:270, sense:'celui vers qui on se tourne', arabic:'ٱللَّهُ ٱلصَّمَدُ', phon:'allahu s-samadu', french:'Dieu, celui vers qui on se tourne'},
    {analysis_id:270, sense:'celui vers qui on se tourne', arabic:'صَمَدْتُ إِلَيْهِ', phon:'samadtu ilayhi', french:'Je me suis tourné vers lui'},
    {analysis_id:270, sense:'celui vers qui on se tourne', arabic:'هُوَ صَمَدُ القَوْمِ', phon:'huwa samadu l-qawm', french:'Il est celui vers qui le peuple se tourne'},
    // wld (271) — sens retenu : engendrer
    {analysis_id:271, sense:'engendrer', arabic:'لَمْ يَلِدْ', phon:'lam yalid', french:'Il n\'a pas engendré'},
    {analysis_id:271, sense:'engendrer', arabic:'وَلَدَتْ وَلَدًا', phon:'waladat waladan', french:'Elle a mis au monde un enfant'},
    {analysis_id:271, sense:'engendrer', arabic:'هُوَ وَالِدِي', phon:'huwa walidi', french:'Il est mon père'},
    // kwn (272) — sens retenu : être
    {analysis_id:272, sense:'être', arabic:'كَانَ اللَّهُ غَفُورًا', phon:'kana llahu ghafuran', french:'Dieu est pardonneur'},
    {analysis_id:272, sense:'être', arabic:'لَمْ يَكُنْ', phon:'lam yakun', french:'Il n\'y avait pas'},
    {analysis_id:272, sense:'être', arabic:'كُنْتُ هُنَاكَ', phon:'kuntu hunaka', french:'J\'étais là-bas'},
    // kfw (273) — sens retenu : égal
    {analysis_id:273, sense:'égal', arabic:'لَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', phon:'lam yakun lahu kufuwan ahad', french:'Personne n\'est égal à Lui'},
    {analysis_id:273, sense:'égal', arabic:'هُوَ كُفْؤُهُ', phon:'huwa kufuhu', french:'Il est son égal'},
    {analysis_id:273, sense:'égal', arabic:'كَافَأَهُ عَلَى عَمَلِهِ', phon:'kafaahu ala amalihi', french:'Il l\'a récompensé pour son travail'},
  ]

  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) console.log('  ERREUR daily: ' + dailyErr.message)
  else console.log('  ' + daily.length + ' phrases insérées')

  console.log('')
  console.log('============================================')
  console.log('  SOURATE 112 — ÉTAPE 4 TERMINÉE')
  console.log('')
  console.log('  112:1 "Dis : Il est Dieu, unique."')
  console.log('  112:2 "Dieu, celui vers qui on se tourne."')
  console.log('  112:3 "Il n\'a pas engendré et Il n\'a pas été engendré."')
  console.log('  112:4 "Et personne n\'est égal à Lui."')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
