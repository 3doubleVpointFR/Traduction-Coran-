const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const Database = require('better-sqlite3')
const path = require('path')
const ldb = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))
let done = 195, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts ('+r.concepts.join(', ')+') — reste '+(total-done))} }

// Helper: get next N undone roots from DB
async function getNextRoots(n) {
  let doneIds = new Set()
  let p = 0
  while(true) {
    const {data} = await db.from('word_meanings').select('analysis_id').not('concept','is',null).range(p*1000,(p+1)*1000-1)
    if (!data || !data.length) break
    data.forEach(d => doneIds.add(d.analysis_id))
    p++
  }
  let rem = []
  p = 0
  while(rem.length < n) {
    const {data} = await db.from('word_analyses').select('id,word_key,root_ar').order('id').range(p*1000,(p+1)*1000-1)
    if (!data || !data.length) break
    for (const r of data) { if (!doneIds.has(r.id)) { rem.push(r); if (rem.length >= n) break } }
    p++
  }
  done = doneIds.size
  return rem
}

async function run() {
  let r

  // aly (إلي → الى) — vers, à, limite
  r=await ins('aly',[
    {sense:'vers',concept:'Direction/Destination',description:"Préposition indiquant la direction vers laquelle on se dirige. C'est un mouvement orienté vers un but."},
    {sense:'jusqu\'à',concept:'Direction/Destination',description:"Préposition de limite. Indique le point final d'un mouvement ou d'une durée."},
    {sense:'auprès de',concept:'Direction/Destination',description:"Proximité spatiale avec quelqu'un. Être auprès de c'est être arrivé à destination."},
  ]);log(r,'aly')

  // adm (آدم → ادم) — peau, surface, assaisonner, Adam
  r=await ins('adm',[
    {sense:'peau',concept:'Surface/Peau',description:"Enveloppe extérieure du corps. La peau est la surface visible qui couvre l'intérieur — elle est le premier contact avec le monde."},
    {sense:'surface',concept:'Surface/Peau',description:"La face visible d'une chose. La surface est ce qui apparaît en premier."},
    {sense:'brun',concept:'Surface/Peau',description:"Couleur foncée de la peau. Le brun est lié à la terre dont Adam a été créé."},
    {sense:'assaisonner',concept:'Assaisonnement',description:"Ajouter ce qui rend la nourriture agréable. L'assaisonnement est un ajout extérieur qui transforme le goût."},
    {sense:'exemple',concept:'Divers',description:"Modèle à suivre. Sens isolé d'exemplarité."},
    {sense:'réconcilier',concept:'Divers',description:"Remettre en harmonie. Sens isolé de rétablissement du lien."},
  ]);log(r,'adm')

  // erd (عرض) — être large, montrer, proposer, accident
  r=await ins('erd',[
    {sense:'être large',concept:'Largeur/Étendue',description:"État d'avoir une grande dimension en largeur. La largeur est spatiale et mesurable — c'est l'étendue horizontale."},
    {sense:'large',concept:'Largeur/Étendue',description:"Qui a une grande étendue. Le large est spacieux et ouvert."},
    {sense:'montrer',concept:'Présentation/Exposition',description:"Acte de rendre visible quelque chose. Montrer est un acte extérieur directionnel — on expose aux yeux des autres."},
    {sense:'proposer',concept:'Présentation/Exposition',description:"Offrir quelque chose au choix de quelqu'un. La proposition sort de celui qui propose et atteint celui qui reçoit."},
    {sense:'exposer',concept:'Présentation/Exposition',description:"Mettre à la vue de tous. L'exposition rend public ce qui était privé."},
    {sense:'parler indirectement',concept:'Présentation/Exposition',description:"Dire quelque chose de manière oblique. Le discours indirect est un détour qui contourne le sens direct."},
    {sense:'accident',concept:'Accident/Éphémère',description:"Ce qui survient sans être essentiel. L'accident est éphémère — il vient et repart, contrairement à la substance."},
    {sense:'maladie',concept:'Accident/Éphémère',description:"Affliction qui survient au corps. La maladie est un accident de santé."},
    {sense:'rivaliser',concept:'Divers',description:"Se mesurer à un autre. La rivalité est une opposition compétitive."},
  ]);log(r,'erd')

  // nba (نبأ) — informer, nouvelle, prophète
  r=await ins('nba',[
    {sense:'informer',concept:'Information/Nouvelle',description:"Acte de communiquer une connaissance à quelqu'un. L'information sort de celui qui sait et atteint celui qui ne savait pas."},
    {sense:'nouvelle',concept:'Information/Nouvelle',description:"Information sur un événement. La nouvelle est un contenu qui voyage de bouche en bouche."},
    {sense:'annoncer',concept:'Information/Nouvelle',description:"Faire connaître quelque chose publiquement. L'annonce est une information diffusée vers un large public."},
    {sense:'prophète',concept:'Prophétie',description:"Celui qui transmet les nouvelles de Dieu aux hommes. Le prophète est l'intermédiaire entre le divin et l'humain."},
    {sense:'prophétie',concept:'Prophétie',description:"Message transmis par le prophète. La prophétie est une nouvelle d'origine divine."},
    {sense:'crier',concept:'Divers',description:"Émettre un son fort. Sens physique de base lié à la communication."},
  ]);log(r,'nba')

  // rja (رجع) — doublon de rje, déjà traité comme retour
  r=await ins('rja',[
    {sense:'retourner',concept:'Retour/Réversion',description:"Acte de revenir à un lieu ou un état antérieur. Le retour est un mouvement directionnel vers l'origine."},
    {sense:'revenir',concept:'Retour/Réversion',description:"Venir de nouveau là où l'on était. Le retour implique un mouvement circulaire."},
    {sense:'renvoyer',concept:'Retour/Réversion',description:"Faire retourner quelqu'un d'où il vient. Le renvoi est un acte directionnel."},
    {sense:'pluie',concept:'Divers',description:"Eau qui retourne du ciel vers la terre. La pluie est un retour cyclique."},
    {sense:'réponse',concept:'Divers',description:"Ce qui est renvoyé en retour d'une question."},
  ]);log(r,'rja')

  // kh l q (خلق) — créer, mesurer, nature, parfumer
  r=await ins('kh l q',[
    {sense:'créer',concept:'Création/Nature',description:"Acte de faire exister ce qui n'existait pas. La création sort du créateur et produit une réalité nouvelle. C'est l'acte fondamental de toute existence."},
    {sense:'mesurer',concept:'Création/Nature',description:"Déterminer les proportions de quelque chose avant de le créer. La mesure est l'étape qui précède la création."},
    {sense:'nature',concept:'Création/Nature',description:"La constitution innée d'un être. La nature est ce qui a été créé en l'être dès l'origine."},
    {sense:'caractère',concept:'Création/Nature',description:"La disposition morale innée. Le caractère est la nature intérieure qui guide le comportement."},
    {sense:'créature',concept:'Création/Nature',description:"Ce qui a été créé. La créature est le résultat de l'acte de création."},
    {sense:'lisser',concept:'Divers',description:"Rendre une surface lisse et uniforme. Sens physique concret."},
    {sense:'parfumer',concept:'Divers',description:"Appliquer un parfum. Sens concret isolé."},
    {sense:'s adapter aux gens',concept:'Divers',description:"Se comporter selon la nature des autres. Sens social d'adaptation."},
  ]);log(r,'kh l q')

  // kum (كوم) — marcher sur la pointe des pieds (très limité, aussi possible qwm)
  // Ce word_key pourrait être qwm (قوم) — se lever, établir, peuple
  r=await ins('kum',[
    {sense:'se lever',concept:'Station/Établissement',description:"Acte de passer de la position assise ou couchée à la position debout. Se lever est un mouvement ascendant volontaire."},
    {sense:'se tenir debout',concept:'Station/Établissement',description:"Être en position verticale. La station debout est un état de présence active."},
    {sense:'établir',concept:'Station/Établissement',description:"Mettre en place de manière stable. Établir c'est dresser quelque chose qui reste."},
    {sense:'redresser',concept:'Station/Établissement',description:"Rendre droit ce qui était tordu. Le redressement est un acte correctif."},
    {sense:'résister',concept:'Station/Établissement',description:"Se dresser face à quelqu'un. La résistance est un acte de station debout face à l'adversaire."},
    {sense:'peuple',concept:'Communauté',description:"Groupe humain qui se tient ensemble. Le peuple est une communauté qui se lève collectivement."},
    {sense:'valeur',concept:'Divers',description:"Ce que vaut une chose. La valeur est la mesure de la station d'une chose."},
  ]);log(r,'kum')

  // jme (جمع) — rassembler, réunir, unanimité
  r=await ins('jme',[
    {sense:'rassembler',concept:'Rassemblement/Union',description:"Acte de réunir ce qui est dispersé. Le rassemblement transforme la dispersion en unité. C'est un acte extérieur directionnel."},
    {sense:'réunir',concept:'Rassemblement/Union',description:"Mettre ensemble des choses ou des personnes séparées. La réunion crée un tout à partir de parties."},
    {sense:'assembler',concept:'Rassemblement/Union',description:"Joindre les parties pour former un ensemble. L'assemblage est un acte de construction par réunion."},
    {sense:'contracter',concept:'Rassemblement/Union',description:"Rapprocher les parties. La contraction est un rassemblement spatial."},
    {sense:'unanimité',concept:'Rassemblement/Union',description:"Accord de tous sur un point. L'unanimité est le rassemblement des avis en un seul."},
    {sense:'vendredi',concept:'Rassemblement/Union',description:"Jour du rassemblement. Le vendredi est le jour où les gens se réunissent pour la prière."},
    {sense:'totalité',concept:'Rassemblement/Union',description:"L'ensemble complet. La totalité est le résultat final du rassemblement — tout est réuni."},
  ]);log(r,'jme')

  // shya — déjà traité (šya batch19), insérer quand même
  r=await ins('shya',[
    {sense:'chose',concept:'Chose/Existence',description:"Toute réalité qui existe. La chose est le concept le plus général — elle englobe tout ce qui est."},
    {sense:'vouloir',concept:'Volonté',description:"Acte intérieur de diriger sa volonté vers un objet."},
  ]);log(r,'shya')

  // wthq (وثق) — être ferme, lier, confiance
  r=await ins('wthq',[
    {sense:'être ferme',concept:'Fermeté/Confiance',description:"État de solidité et de stabilité. Ce qui est ferme ne cède pas et ne bouge pas."},
    {sense:'être solide',concept:'Fermeté/Confiance',description:"Qualité de ce qui résiste à la pression. La solidité est une fermeté matérielle."},
    {sense:'lier solidement',concept:'Fermeté/Confiance',description:"Acte d'attacher quelque chose de manière ferme. Le lien solide est un acte extérieur qui fixe et empêche le mouvement."},
    {sense:'avoir confiance',concept:'Fermeté/Confiance',description:"État intérieur de certitude envers quelqu'un. La confiance est une fermeté de la relation — on s'appuie sur l'autre sans craindre qu'il cède."},
    {sense:'pacte',concept:'Fermeté/Confiance',description:"Engagement ferme entre deux parties. Le pacte est un lien moral solide qui oblige les deux côtés."},
    {sense:'se garantir',concept:'Fermeté/Confiance',description:"Prendre des précautions pour se protéger. La garantie est un acte de fermeté préventive."},
  ]);log(r,'wthq')

  // amr (أمر) — ordonner, commander, affaire, abondant
  r=await ins('amr',[
    {sense:'ordonner',concept:'Commandement/Autorité',description:"Acte extérieur de donner un ordre. Le commandement sort de celui qui a l'autorité et atteint celui qui doit obéir. C'est directionnel et impératif."},
    {sense:'commander',concept:'Commandement/Autorité',description:"Exercer l'autorité sur quelqu'un. Le commandement est un acte de pouvoir qui impose une direction."},
    {sense:'nommer gouverneur',concept:'Commandement/Autorité',description:"Donner le pouvoir de commander à quelqu'un. La nomination est un acte qui transfère l'autorité."},
    {sense:'consulter',concept:'Consultation',description:"Demander l'avis de quelqu'un. La consultation est un mouvement vers l'autre pour chercher la sagesse."},
    {sense:'affaire',concept:'Affaire/Chose',description:"Ce qui occupe et nécessite une action. L'affaire est une réalité qui demande une décision ou un commandement."},
    {sense:'chose',concept:'Affaire/Chose',description:"Réalité à traiter. La chose est ce sur quoi porte le commandement."},
    {sense:'multiplier',concept:'Divers',description:"Rendre abondant. Sens concret d'augmentation."},
    {sense:'signe',concept:'Divers',description:"Marque qui indique quelque chose. Sens isolé."},
  ]);log(r,'amr')

  // aulk — déjà traité comme alk (batch14), insérer quand même
  r=await ins('aulk',[
    {sense:'message',concept:'Message/Envoi',description:"Communication envoyée d'une personne à une autre. Le message sort de l'émetteur et atteint le destinataire."},
    {sense:'messager',concept:'Message/Envoi',description:"Celui qui porte le message. Le messager est l'intermédiaire."},
    {sense:'ange',concept:'Message/Envoi',description:"Être qui porte les messages entre le divin et l'humain."},
    {sense:'mâcher',concept:'Divers',description:"Acte physique de broyer avec les dents."},
  ]);log(r,'aulk')

  console.log('\n=== Batch 22 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
