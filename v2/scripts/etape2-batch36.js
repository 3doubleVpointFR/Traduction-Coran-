const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 338, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // 339. rjz (رجز) — tremblement, châtiment
  r = await ins('rjz', [
    {sense:'tremblement',concept:'Châtiment/Fléau',description:"État d'agitation violente qui secoue et déstabilise — le tremblement (rijz) est une perturbation qui vient de l'extérieur et envahit celui qui la subit. C'est ponctuel dans l'événement mais peut être fatal. Le rijz est souvent un châtiment divin : la souillure qui frappe les impurs, le fléau qui s'abat sur les rebelles. C'est aussi l'agitation démoniaque qui trouble l'âme."},
    {sense:'châtiment',concept:'Châtiment/Fléau',description:''},
    {sense:'souillure',concept:'Châtiment/Fléau',description:''},
    {sense:'fléau',concept:'Châtiment/Fléau',description:''},
    {sense:'idole',concept:'Impureté spirituelle',description:"Ce qui est adoré en dehors de Dieu — les idoles sont une souillure (rijz) dont le croyant doit s'écarter. Elles sont impures car elles détournent du Vrai."},
  ])
  log(r,'rjz',{'Châtiment/Fléau':"Agitation violente venue de l'extérieur. Châtiment divin qui frappe les rebelles. Trouble l'âme.",'Impureté spirituelle':"Souillure des idoles. Ce qui détourne du Vrai."})

  // 340. end (عند) — auprès, chez
  r = await ins('end', [
    {sense:'auprès de',concept:'Proximité/Présence',description:"Préposition qui indique la proximité spatiale ou relationnelle — être auprès de quelqu'un c'est être dans son espace proche, dans sa sphère. C'est relationnel et permanent tant que dure la présence. 'Inda Allah' (auprès de Dieu) désigne ce qui est dans la science ou la présence divine, ce qui a valeur à Ses yeux. Ce qui est auprès de Dieu est meilleur et plus durable."},
    {sense:'chez',concept:'Proximité/Présence',description:''},
    {sense:'près de',concept:'Proximité/Présence',description:''},
    {sense:'selon',concept:'Opinion/Jugement',description:"Du point de vue de quelqu'un — 'indî' (selon moi) exprime un jugement personnel. C'est intérieur comme opinion propre à celui qui la formule."},
  ])
  log(r,'end',{'Proximité/Présence':"Être dans l'espace proche de quelqu'un. Relationnel. Ce qui est auprès de Dieu est meilleur.",'Opinion/Jugement':"Point de vue personnel. Intérieur à celui qui juge."})

  // 341. dxl (دخل) — entrer
  r = await ins('dxl', [
    {sense:'entrer',concept:'Entrée/Pénétration',description:"Acte de passer de l'extérieur à l'intérieur d'un espace — entrer est directionnel de dehors vers dedans. C'est ponctuel comme franchissement d'un seuil mais crée un nouvel état d'inclusion. Entrer au Paradis est le but ultime du croyant : passer de l'épreuve terrestre à la félicité éternelle. Entrer dans l'Islam c'est franchir le seuil de la foi."},
    {sense:'pénétrer',concept:'Entrée/Pénétration',description:''},
    {sense:'accéder',concept:'Entrée/Pénétration',description:''},
    {sense:'introduire',concept:'Entrée/Pénétration',description:''},
    {sense:'revenu',concept:'Ressource',description:"Ce qui entre dans les biens — le revenu (dakhl) est ce qui vient enrichir le patrimoine. C'est directionnel vers celui qui reçoit."},
  ])
  log(r,'dxl',{'Entrée/Pénétration':"Passer de l'extérieur à l'intérieur. Ponctuel comme franchissement. Entrer au Paradis est le but.",'Ressource':"Ce qui entre dans les biens. Enrichit le patrimoine."})

  // 342. qry (قري) — village, réciter
  r = await ins('qry', [
    {sense:'village',concept:'Établissement humain',description:"Lieu où les gens se rassemblent pour habiter — le village (qarya) est permanent comme établissement humain. C'est un espace défini où se déroule la vie collective. Les villages mentionnés dans le Coran sont souvent des exemples de communautés détruites pour leur rébellion. Le village peut désigner aussi la cité, la ville."},
    {sense:'cité',concept:'Établissement humain',description:''},
    {sense:'réciter',concept:'Lecture/Récitation',description:"Acte de prononcer un texte à haute voix — la récitation (qirâ'a) est directionnelle de celui qui récite vers les auditeurs et vers le texte lui-même. Réciter le Coran c'est lui donner voix, le faire passer de l'écrit à l'oral, le rendre vivant par la parole."},
    {sense:'lire',concept:'Lecture/Récitation',description:''},
    {sense:'accueillir',concept:'Hospitalité',description:"Recevoir un hôte et lui offrir le gîte — l'hospitalité (qirâ) est directionnelle vers l'invité. C'est une vertu qui honore celui qui l'exerce."},
  ])
  log(r,'qry',{'Établissement humain':"Lieu de rassemblement permanent. Espace de vie collective. Villages détruits pour rébellion.",'Lecture/Récitation':"Donner voix au texte. Directionnel vers les auditeurs. Rendre vivant par la parole.",'Hospitalité':"Recevoir l'hôte. Vertu qui honore."})

  // 343. bwb (بوب) — porte
  r = await ins('bwb', [
    {sense:'porte',concept:'Ouverture/Accès',description:"Structure qui permet d'entrer ou de sortir d'un espace clos — la porte (bâb) est permanente comme passage entre deux espaces. Elle peut être ouverte ou fermée, elle régule l'accès. Les portes du ciel s'ouvrent pour la miséricorde, les portes de l'enfer se referment sur les damnés. La porte est le seuil qu'on franchit, le lieu de la décision entre entrer et rester dehors."},
    {sense:'chapitre',concept:'Ouverture/Accès',description:''},
    {sense:'entrée',concept:'Ouverture/Accès',description:''},
    {sense:'accès',concept:'Ouverture/Accès',description:''},
  ])
  log(r,'bwb',{'Ouverture/Accès':"Passage entre deux espaces. Régule l'accès. Seuil de décision entre entrer et rester dehors."})

  // 344. htt (حطط) — déposer, enlever
  r = await ins('htt', [
    {sense:'déposer',concept:'Décharge/Allègement',description:"Acte de poser ce qu'on portait ou d'enlever un fardeau — déposer est directionnel de haut vers bas, de soi vers l'extérieur. C'est ponctuel comme acte de libération. Dieu enlève (hatta) les péchés de celui qui se repent sincèrement. Déposer son fardeau c'est être allégé de ce qui pesait sur les épaules ou sur la conscience."},
    {sense:'enlever',concept:'Décharge/Allègement',description:''},
    {sense:'abaisser',concept:'Décharge/Allègement',description:''},
    {sense:'péché enlevé',concept:'Décharge/Allègement',description:''},
  ])
  log(r,'htt',{'Décharge/Allègement':"Enlever un fardeau. De haut vers bas. Dieu enlève les péchés du repentant."})

  // 345. ghfr (غفر) — pardonner
  r = await ins('ghfr', [
    {sense:'pardonner',concept:'Pardon/Couverture',description:"Acte de couvrir la faute et de ne pas la punir — le pardon (maghfira) est directionnel de celui qui pardonne vers celui qui est pardonné. C'est ponctuel dans l'acte mais libère définitivement de la dette. Dieu est al-Ghafûr, Celui qui couvre les péchés et les efface. Le pardon divin est une grâce qui précède le mérite. Pardonner c'est couvrir la faute comme on couvre une nudité, c'est protéger le fautif de la honte de son acte."},
    {sense:'couvrir',concept:'Pardon/Couverture',description:''},
    {sense:'effacer',concept:'Pardon/Couverture',description:''},
    {sense:'rémission',concept:'Pardon/Couverture',description:''},
    {sense:'casque',concept:'Protection',description:"Ce qui couvre et protège la tête — le casque (mighfar) est permanent comme équipement protecteur. Il couvre et préserve."},
  ])
  log(r,'ghfr',{'Pardon/Couverture':"Couvrir la faute. Directionnel vers le pardonné. Dieu couvre les péchés comme on couvre une nudité.",'Protection':"Ce qui couvre et préserve. Équipement protecteur."})

  // 346. xta (خطأ) — pécher, erreur
  r = await ins('xta', [
    {sense:'pécher',concept:'Erreur/Faute',description:"Acte de manquer la cible, de s'écarter du droit chemin — le péché (khatî'a) est un manquement, une déviation par rapport à la norme juste. C'est ponctuel dans l'acte mais peut avoir des conséquences durables. L'erreur peut être involontaire (khata') ou volontaire (péché). Celui qui se trompe sans intention n'est pas blâmé comme celui qui pèche sciemment."},
    {sense:'erreur',concept:'Erreur/Faute',description:''},
    {sense:'faute',concept:'Erreur/Faute',description:''},
    {sense:'manquer',concept:'Erreur/Faute',description:''},
    {sense:'se tromper',concept:'Erreur/Faute',description:''},
  ])
  log(r,'xta',{'Erreur/Faute':"Manquer la cible. Déviation par rapport au juste. L'involontaire n'est pas blâmé comme le volontaire."})

  // 347. hsn (حسن) — être beau, bon
  r = await ins('hsn', [
    {sense:'être beau',concept:'Beauté/Bonté',description:"État de ce qui est agréable à voir ou à considérer — la beauté (husn) est permanente comme qualité intrinsèque. C'est un jugement de valeur sur ce qui plaît à l'œil ou à l'esprit. Le beau et le bon sont liés : ce qui est vraiment beau est aussi bon, et ce qui est bon possède une beauté propre. Dieu a créé toute chose en beauté (ahsana kulla shay'). La belle patience, le beau comportement, la belle parole."},
    {sense:'bon',concept:'Beauté/Bonté',description:''},
    {sense:'excellent',concept:'Beauté/Bonté',description:''},
    {sense:'bien faire',concept:'Excellence morale',description:"Agir de la meilleure façon — l'excellence (ihsân) est d'adorer Dieu comme si on Le voyait. C'est le degré suprême de la foi, au-delà de l'islam (soumission) et de l'îmân (foi). Le muhsin est celui qui fait le bien avec excellence."},
    {sense:'bienfaisance',concept:'Excellence morale',description:''},
  ])
  log(r,'hsn',{'Beauté/Bonté':"Ce qui plaît à l'œil et à l'esprit. Le beau et le bon sont liés. Dieu crée en beauté.",'Excellence morale':"Agir de la meilleure façon. Adorer Dieu comme si on Le voyait. Degré suprême de la foi."})

  // 348. shya (شيء) — chose
  r = await ins('shya', [
    {sense:'chose',concept:'Existence/Entité',description:"Tout ce qui existe ou peut être conçu — la chose (shay') est le concept le plus universel, applicable à tout ce qui est. C'est permanent comme catégorie ontologique. Dieu dit à une chose 'Sois' et elle est (kun fa-yakûn). Toute chose périra sauf Sa Face. La chose est ce qui peut être désigné, pensé, voulu. Même le néant, quand on en parle, devient une 'chose'."},
    {sense:'quelque chose',concept:'Existence/Entité',description:''},
    {sense:'rien',concept:'Existence/Entité',description:''},
    {sense:'affaire',concept:'Existence/Entité',description:''},
  ])
  log(r,'shya',{'Existence/Entité':"Tout ce qui existe ou peut être conçu. Catégorie la plus universelle. 'Sois' et elle est."})

  console.log('\n=== Batch 36 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
