// Pipeline Maison — Sourate 112 (Al-Ikhlas) — ÉTAPE 2
// Sens étymologiques exhaustifs — Lane's Arabic-English Lexicon (Edward Lane, 1863)
// Règles : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('============================================')
  console.log('  SOURATE 112 — ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  console.log('============================================')
  console.log('')

  // ══════════════════════════════════════
  // Créer les word_analyses pour chaque racine
  // ══════════════════════════════════════
  console.log('>>> Création des word_analyses')

  const rootDefs = [
    { word_key: 'ahd', root_ar: 'أ ح د', root_phon: 'a-h-d', root_meaning: 'un, unique, seul', total_occurrences: 85 },
    { word_key: 'smd', root_ar: 'ص م د', root_phon: 's-m-d', root_meaning: 'se diriger vers, solide, élevé', total_occurrences: 1 },
    { word_key: 'wld', root_ar: 'و ل د', root_phon: 'w-l-d', root_meaning: 'enfanter, engendrer, mettre au monde', total_occurrences: 102 },
    { word_key: 'kwn', root_ar: 'ك و ن', root_phon: 'k-w-n', root_meaning: 'être, exister, devenir', total_occurrences: 1390 },
    { word_key: 'kfw', root_ar: 'ك ف ء', root_phon: 'k-f-w', root_meaning: 'retourner, égaler, compenser', total_occurrences: 1 },
  ]

  const analysisIds = {}
  for (const rd of rootDefs) {
    // Vérifier si existe déjà
    const { data: existing } = await db.from('word_analyses').select('id').eq('word_key', rd.word_key)
    if (existing && existing.length > 0) {
      analysisIds[rd.word_key] = existing[0].id
      console.log('  [' + rd.word_key + '] déjà existant (id=' + existing[0].id + ')')
      continue
    }
    const { data, error } = await db.from('word_analyses').insert({
      word_key: rd.word_key,
      root_ar: rd.root_ar,
      root_phon: rd.root_phon,
      root_meaning: rd.root_meaning,
      total_occurrences: rd.total_occurrences,
      analysis_step: 'etape2',
      prompt_version: 'maison-v8',
      model_used: 'claude-manual',
    }).select('id')
    if (error) { console.log('  ERREUR ' + rd.word_key + ': ' + error.message); continue }
    analysisIds[rd.word_key] = data[0].id
    console.log('  [' + rd.word_key + '] créé (id=' + data[0].id + ')')
  }
  console.log('')

  // ══════════════════════════════════════
  // Insertion des sens étymologiques
  // ══════════════════════════════════════

  const ROOTS = {
    ahd: { senses: [
      // Sens physiques/concrets
      { sense: 'un', sense_ar: 'أَحَدٌ', description: "Le nombre un, le premier des nombres. C'est le sens arithmétique de base. Le Lane's note que ahad est interchangeable avec wahid quand il est appliqué à Dieu comme épithète, mais les deux mots ont des nuances différentes dans l'usage général.", display_order: 1 },
      { sense: 'unique', sense_ar: 'أَحَدٌ', description: "Ce qui ne peut pas être divisé en parties, ce qui est indivisible. Le Lane's note que ce qui est ahad ne peut pas être séparé en composants, alors que wahid peut désigner quelque chose qui apparaît divisible en parties distinctes. L'unicité ici est absolue, pas relative.", display_order: 2 },
      { sense: 'quiconque', sense_ar: 'أَحَدٌ', description: "Dans les phrases négatives et interrogatives : n'importe quelle personne, quiconque, aucun. Le Lane's note que dans la construction 'lam yakun ahad', ahad signifie 'personne, aucun' plutôt que 'un' ou 'unique'. C'est un usage grammatical spécifique au contexte négatif.", display_order: 3 },
      { sense: 'dimanche', sense_ar: 'الأَحَد', description: "Le premier jour de la semaine dans le calendrier arabe. Appelé al-ahad (le un) parce que c'est le premier jour.", display_order: 4 },
      { sense: 'rendre solitaire', sense_ar: 'أَوْحَدَ', description: "Forme IV : rendre quelqu'un seul, l'isoler, le laisser face à ses ennemis sans soutien. Extension de 'un' vers la solitude : celui qui est seul n'a personne avec lui.", display_order: 5 },
      { sense: 'rendre sans égal', sense_ar: 'أَوْحَدَ', description: "Forme IV : faire de quelqu'un une personne sans égal à son époque, le distinguer au-dessus de tous les autres. Extension de l'unicité vers l'excellence absolue.", display_order: 6 },
      { sense: 'déclarer l\'unicité', sense_ar: 'أَحَّدَ', description: "Forme II : proclamer que quelque chose est un, affirmer l'unicité. Le Lane's note le sens de professer l'unicité de Dieu comme usage spécifique de cette forme.", display_order: 7 },
      { sense: 'devenir solitaire', sense_ar: 'اسْتَوْحَدَ', description: "Forme X : se retrouver seul, à l'écart des autres. Aussi dans le dialecte yéménite : ne pas savoir quelque chose, manquer de connaissance.", display_order: 8 },
      { sense: 'enfanter un seul petit', sense_ar: 'أَوْحَدَ', description: "Forme IV appliquée aux brebis : mettre au monde un seul petit à la fois, par opposition à des jumeaux.", display_order: 9 },
      { sense: 'un par un', sense_ar: 'أُحَادَ', description: "Forme adverbiale : un à un, un par un, individuellement, séparément. Manière de compter ou de procéder élément par élément.", display_order: 10 },
      { sense: 'événement terrible', sense_ar: 'إِحْدَى الإِحَدِ', description: "Expression figée : un événement grand, terrible, accablant. Aussi utilisée comme superlatif de louange quand appliquée aux personnes.", display_order: 11 },
    ]},
    smd: { senses: [
      // Sens physiques/concrets
      { sense: 'se diriger vers', sense_ar: 'صَمَدَ', description: "Se tourner vers quelqu'un ou quelque chose, se diriger intentionnellement vers un but. C'est le sens physique premier de la racine : le mouvement orienté vers une cible.", display_order: 1 },
      { sense: 'avoir recours à', sense_ar: 'صَمَدَ', description: "Se tourner vers quelqu'un dans les moments de besoin ou d'urgence. Extension du mouvement physique vers le besoin : on se dirige vers celui qui peut aider.", display_order: 2 },
      { sense: 'viser', sense_ar: 'صَمَدَ', description: "Diriger son attention ou son effort vers quelque chose, chercher à atteindre un objectif. L'intention dirigée vers un but précis.", display_order: 3 },
      { sense: 'frapper', sense_ar: 'صَمَدَهُ بِالعَصَا', description: "Frapper quelqu'un avec un bâton ou une canne. Le Lane's note ce sens de coup porté, notamment viser la tête.", display_order: 4 },
      { sense: 'terrain élevé', sense_ar: 'صَمَدٌ', description: "Sol surélevé et dur, pas assez haut pour être une montagne. Terrain ferme et résistant, qui ne cède pas sous le poids.", display_order: 5 },
      { sense: 'sol dur', sense_ar: 'صَمَدٌ', description: "Terre ferme, compacte et résistante. Extension du terrain élevé : ce qui est ferme ne s'effondre pas.", display_order: 6 },
      { sense: 'boucher', sense_ar: 'صَمَدَ القَارُورَة', description: "Mettre un bouchon sur l'ouverture d'un flacon. Le Lane's note le sens de fermer, sceller, rendre étanche.", display_order: 7 },
      { sense: 'bouchon', sense_ar: 'صِمَادٌ', description: "L'objet qui ferme l'ouverture d'un récipient. Aussi : un tissu ou foulard enroulé autour de la tête.", display_order: 8 },
      { sense: 'brûler le visage', sense_ar: 'صَمَدَتِ الشَّمْسُ', description: "Le soleil qui brûle et dessèche le visage. Le Lane's note ce sens de chaleur intense dirigée.", display_order: 9 },
      { sense: 'dresser', sense_ar: 'صَمَدَ', description: "Ériger, mettre debout quelque chose. Le sens de mettre en position verticale, installer.", display_order: 10 },
      { sense: 'rocher encastré', sense_ar: 'صَمْدَةٌ', description: "Roche fermement encastrée dans le sol, à fleur de terre. Quelque chose de solide qui ne bouge pas.", display_order: 11 },
      { sense: 'celui vers qui on se tourne', sense_ar: 'الصَّمَدُ', description: "Celui vers qui les gens se dirigent dans leurs besoins, le refuge vers lequel on se tourne. Extension de 'se diriger vers' : celui qui est la destination de tous les recours. Le Lane's note ce sens comme épithète.", display_order: 12 },
      { sense: 'celui qui dure éternellement', sense_ar: 'الصَّمَدُ', description: "Celui qui continue pour toujours, l'éternel, le permanent qui ne cesse pas d'exister. Le Lane's note ce sens de permanence absolue.", display_order: 13 },
      { sense: 'solide', sense_ar: 'صَمَدٌ', description: "Ce qui est plein, compact, sans creux ni cavité à l'intérieur. Le contraire de ce qui est creux. Extension physique : ce qui est solide ne peut pas être percé ni vidé.", display_order: 14 },
      { sense: 'combattre', sense_ar: 'صَامَدَ', description: "Forme III : lutter contre quelqu'un, s'affronter au combat. Le Lane's note ce sens de confrontation.", display_order: 15 },
      { sense: 'idole', sense_ar: 'صَمُودٌ', description: "Nom d'une idole adorée par la tribu de Ad. Le Lane's mentionne ce nom propre lié à la racine.", display_order: 16 },
      { sense: 'chamelle stérile', sense_ar: 'صَمْدَةٌ', description: "Chamelle qui a été saillie mais qui n'a pas conçu. Le Lane's note ce sens de stérilité après accouplement.", display_order: 17 },
    ]},
    wld: { senses: [
      { sense: 'enfanter', sense_ar: 'وَلَدَتْ', description: "Mettre au monde un enfant ou un petit. C'est le sens physique premier de la racine : l'acte de donner naissance. Utilisé pour les femelles en général (humaines et animales).", display_order: 1 },
      { sense: 'engendrer', sense_ar: 'وَلَدَ', description: "Le rôle du père dans la procréation : être à l'origine biologique d'un enfant. Le Lane's distingue ce sens de 'enfanter' qui est l'acte de la mère.", display_order: 2 },
      { sense: 'enfant', sense_ar: 'وَلَدٌ', description: "Fils, fille, progéniture. Le mot walad fonctionne comme singulier et comme collectif. Désigne aussi bien l'enfant né que le fœtus non encore né.", display_order: 3 },
      { sense: 'nouveau-né', sense_ar: 'وَلِيدٌ', description: "Enfant qui vient de naître, nourrisson. Le tout début de la vie après la naissance.", display_order: 4 },
      { sense: 'accoucher', sense_ar: 'وَلَّدَ', description: "Forme II : assister une femme dans l'accouchement, jouer le rôle de sage-femme. Faire en sorte que la naissance se passe bien.", display_order: 5 },
      { sense: 'élever un enfant', sense_ar: 'وَلَّدَ', description: "Forme II : nourrir, éduquer, faire grandir un enfant. L'ensemble des soins qui suivent la naissance.", display_order: 6 },
      { sense: 'esclave', sense_ar: 'وَلِيدٌ', description: "Personne née en servitude, esclave de naissance. Le Lane's note que walid peut désigner un garçon apte au service avant la puberté.", display_order: 7 },
      { sense: 'se multiplier', sense_ar: 'تَوَالَدُوا', description: "Forme VI : se reproduire en nombre, devenir nombreux par la procréation. La multiplication d'un groupe par la naissance.", display_order: 8 },
      { sense: 'rendre enceinte', sense_ar: 'اسْتَوْلَدَهَا', description: "Forme X : féconder une femme, la rendre enceinte. L'acte qui mène à la conception.", display_order: 9 },
      { sense: 'lieu de naissance', sense_ar: 'مَوْلِدٌ', description: "L'endroit où une personne est née. Le lieu géographique de la naissance.", display_order: 10 },
      { sense: 'moment de naissance', sense_ar: 'مِيلَادٌ', description: "Le temps, la date, le moment précis où une personne est née.", display_order: 11 },
      { sense: 'père', sense_ar: 'وَالِدٌ', description: "Celui qui engendre, le parent masculin. Participe actif : celui qui est en train d'engendrer ou qui a engendré.", display_order: 12 },
      { sense: 'mère', sense_ar: 'وَالِدَةٌ', description: "Celle qui enfante, la parente féminine. Participe actif féminin. Aussi utilisé pour les brebis et les chèvres en gestation.", display_order: 13 },
      { sense: 'innover', sense_ar: 'مُوَلَّدٌ', description: "Créer quelque chose de nouveau, inventer. Le Lane's note le sens de 'innovated language' : un mot ou une expression qui n'existait pas dans l'arabe classique. Extension de 'mettre au monde' vers la création intellectuelle.", display_order: 14 },
      { sense: 'contemporain de naissance', sense_ar: 'وِلْدَةٌ', description: "Personne née en même temps qu'une autre, du même âge. Ceux qui partagent la même époque de naissance.", display_order: 15 },
      { sense: 'de sang mêlé', sense_ar: 'مُوَلَّدٌ', description: "Personne qui n'est pas d'extraction purement arabe. Aussi : un esclave né parmi les Arabes. Le Lane's note ce sens d'origine mixte.", display_order: 16 },
      { sense: 'document falsifié', sense_ar: 'مُوَلَّدٌ', description: "Un écrit forgé, fabriqué, qui n'est pas authentique. Extension de 'innover' vers la falsification : ce qui est créé artificiellement.", display_order: 17 },
    ]},
    kwn: { senses: [
      { sense: 'être', sense_ar: 'كَانَ', description: "Verbe d'existence : être dans un état, exister. C'est le verbe le plus fondamental de la langue arabe. Le Lane's note qu'il fonctionne comme verbe incomplet (nécessitant un sujet et un attribut) ou comme verbe complet (signifiant simplement 'exister').", display_order: 1 },
      { sense: 'exister', sense_ar: 'كَانَ', description: "Avoir une existence réelle, être présent dans la réalité. Le sens complet du verbe kana : affirmer l'existence de quelque chose.", display_order: 2 },
      { sense: 'devenir', sense_ar: 'كَانَ', description: "Passer d'un état à un autre, commencer à être quelque chose qu'on n'était pas. Le Lane's note cet usage temporel du verbe.", display_order: 3 },
      { sense: 'venir à l\'existence', sense_ar: 'تَكَوَّنَ', description: "Forme V : naître, apparaître, commencer à exister. Le processus par lequel quelque chose passe du néant à l'existence.", display_order: 4 },
      { sense: 's\'humilier', sense_ar: 'اسْتَكَانَ', description: "Forme X : devenir humble, soumis, abaissé. Le Lane's note le sens de se mettre dans un état d'abaissement volontaire.", display_order: 5 },
      { sense: 'lieu', sense_ar: 'مَكَانٌ', description: "Un endroit précis, un lieu d'existence. L'espace où quelque chose se trouve ou se produit.", display_order: 6 },
      { sense: 'état', sense_ar: 'مَكَانَةٌ', description: "Condition, situation dans laquelle on se trouve. Le rang ou la position qu'on occupe.", display_order: 7 },
    ]},
    kfw: { senses: [
      // Sens physiques/concrets
      { sense: 'retourner', sense_ar: 'كَفَأَ', description: "Tourner quelque chose à l'envers, inverser. Le Lane's donne l'exemple d'un homme qui retourne un pain dans sa main jusqu'à ce qu'il soit régulier.", display_order: 1 },
      { sense: 'renverser', sense_ar: 'كَفَأَ', description: "Mettre à l'envers un récipient, inverser un contenant. Le sens de retournement complet, de mise sens dessus dessous.", display_order: 2 },
      { sense: 'incliner', sense_ar: 'كَفَأَ', description: "Pencher quelque chose sur le côté, faire dévier de la verticale. Le Lane's note ce sens pour un arc qu'on incline en tirant, ou un récipient qu'on penche.", display_order: 3 },
      { sense: 'détourner', sense_ar: 'كَفَأَ', description: "Faire changer de direction à quelqu'un, le faire se retourner ou reculer. Le Lane's note le sens de tourner quelqu'un de son chemin.", display_order: 4 },
      { sense: 'chasser', sense_ar: 'كَفَأَ', description: "Pousser quelqu'un ou des animaux au loin, les forcer à partir. Le Lane's note le sens de conduire des chameaux par la force.", display_order: 5 },
      { sense: 'poursuivre', sense_ar: 'كَفَأَ', description: "Suivre quelqu'un, aller après lui. Extension de chasser : on poursuit ce qu'on chasse.", display_order: 6 },
      { sense: 'changer de couleur', sense_ar: 'كَفَأَ', description: "La couleur de quelque chose qui se modifie. Le Lane's note cet usage figuré du retournement : comme si la couleur se retournait.", display_order: 7 },
      { sense: 'égal', sense_ar: 'كُفُؤٌ', description: "Celui qui est semblable, pareil, du même niveau. Le Lane's note le sens de 'like him, equal to him'. Deux choses qui se correspondent exactement, qui sont du même rang ou de la même valeur.", display_order: 8 },
      { sense: 'compenser', sense_ar: 'كَافَأَ', description: "Forme III : rendre la pareille, donner en retour ce qui est équivalent. Le Lane's note le sens de 'requited, compensated, recompensed him for a thing'.", display_order: 9 },
      { sense: 'semblable', sense_ar: 'كُفُؤٌ', description: "Ce qui ressemble à autre chose, ce qui est de même nature ou qualité. Proche de 'égal' mais insistant sur la ressemblance plutôt que sur le rang.", display_order: 10 },
    ]},
  }

  console.log('>>> Insertion des sens étymologiques')
  console.log('')

  let totalSenses = 0
  for (const [key, root] of Object.entries(ROOTS)) {
    const id = analysisIds[key]
    if (!id) { console.log('  [' + key + '] PAS D\'ID — skip'); continue }

    // Vérifier si des sens existent déjà
    const { data: existing } = await db.from('word_meanings').select('id').eq('analysis_id', id)
    if (existing && existing.length > 0) {
      console.log('  [' + key + '] ' + existing.length + ' sens DÉJÀ EXISTANTS — skip')
      continue
    }

    const senses = root.senses.map(s => ({...s, analysis_id: id, meaning_type: 'etymology'}))
    const { error } = await db.from('word_meanings').insert(senses)
    if (error) { console.log('  [' + key + '] ERREUR: ' + error.message); continue }
    totalSenses += senses.length
    console.log('  [' + key + '] ' + senses.length + ' sens insérés :')
    for (const s of senses) console.log('    ' + s.display_order + '. ' + s.sense + ' — ' + s.description.substring(0, 80) + '...')
    console.log('')
  }

  console.log('  TOTAL : ' + totalSenses + ' sens pour ' + Object.keys(ROOTS).length + ' racines')
  console.log('')
  console.log('============================================')
  console.log('  ÉTAPE 2 TERMINÉE')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
