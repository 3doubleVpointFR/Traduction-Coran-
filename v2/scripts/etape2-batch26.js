const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 237, total = 2321

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

async function run() {
  let r

  // hyn (حين) — temps, moment, quand
  r=await ins('hyn',[
    {sense:'temps',concept:'Temps/Moment',description:"Durée ou moment déterminé. Le temps est ce dans quoi les événements se produisent."},
    {sense:'moment',concept:'Temps/Moment',description:"Instant particulier. Le moment est un point dans le temps."},
    {sense:'quand',concept:'Temps/Moment',description:"Interrogation ou conjonction temporelle. Quand situe dans le temps."},
    {sense:'une période',concept:'Temps/Moment',description:"Étendue de temps limitée. Une période est un temps avec début et fin."},
    {sense:'mort',concept:'Destin',description:"Le moment final. La mort est le temps qui s'arrête pour l'individu."},
  ]);log(r,'hyn')

  // skn (سكن) — habiter, être calme, s'apaiser
  r=await ins('skn',[
    {sense:'habiter',concept:'Habitation/Repos',description:"Acte de demeurer en un lieu. Habiter c'est s'établir quelque part."},
    {sense:'demeurer',concept:'Habitation/Repos',description:"Acte de rester en place. Demeurer fixe une position."},
    {sense:'être calme',concept:'Calme/Paix',description:"État de tranquillité. Le calme est l'absence d'agitation."},
    {sense:'s\'apaiser',concept:'Calme/Paix',description:"Acte de devenir calme. S'apaiser passe de l'agitation au repos."},
    {sense:'se reposer',concept:'Habitation/Repos',description:"Acte de cesser l'activité. Se reposer est un retour au calme."},
    {sense:'pauvre',concept:'Divers',description:"Celui qui n'a pas de quoi bouger. Le pauvre est immobile par manque."},
  ]);log(r,'skn')

  // mnh (منه) — de lui, de cela
  r=await ins('mnh',[
    {sense:'de lui',concept:'Provenance',description:"Préposition indiquant l'origine. De lui désigne le point de départ."},
    {sense:'de cela',concept:'Provenance',description:"Préposition référentielle. De cela renvoie à ce qui précède."},
    {sense:'parmi eux',concept:'Partie',description:"Préposition partitive. Parmi eux extrait d'un groupe."},
  ]);log(r,'mnh')

  // rghd (رغد) — abondance, vie aisée
  r=await ins('rghd',[
    {sense:'abondance',concept:'Abondance/Aisance',description:"État de ce qui dépasse le nécessaire. L'abondance est le surplus qui permet le confort."},
    {sense:'vie aisée',concept:'Abondance/Aisance',description:"Condition de celui qui a tout ce qu'il faut. L'aisance libère des soucis matériels."},
    {sense:'prospérité',concept:'Abondance/Aisance',description:"État de réussite matérielle. La prospérité est l'abondance qui dure."},
    {sense:'jouir pleinement',concept:'Jouissance',description:"Acte de profiter sans limite. Jouir pleinement c'est avoir en abondance."},
  ]);log(r,'rghd')

  // hyth (حيث) — où, là où
  r=await ins('hyth',[
    {sense:'où',concept:'Lieu',description:"Adverbe de lieu interrogatif ou relatif. Où situe dans l'espace."},
    {sense:'là où',concept:'Lieu',description:"Locution de lieu relatif. Là où précise la position."},
    {sense:'partout où',concept:'Lieu',description:"Adverbe de lieu indéfini. Partout où ne fixe pas de limite."},
    {sense:'de quelque manière que',concept:'Manière',description:"Locution de manière indéfinie. De quelque manière que ouvre toutes les possibilités."},
  ]);log(r,'hyth')

  // shy (شيء) — chose, quelque chose
  r=await ins('shy',[
    {sense:'chose',concept:'Chose/Existence',description:"Toute réalité qui existe. La chose est le concept le plus général de l'être."},
    {sense:'quelque chose',concept:'Chose/Existence',description:"Réalité indéterminée. Quelque chose désigne sans préciser."},
    {sense:'rien',concept:'Négation',description:"Absence de chose. Rien est la chose niée."},
    {sense:'vouloir',concept:'Volonté',description:"Acte de diriger sa volonté. Vouloir fait advenir les choses."},
  ]);log(r,'shy')

  // qrb (قرب) — être proche, s'approcher, sacrifice
  r=await ins('qrb',[
    {sense:'être proche',concept:'Proximité',description:"État de ce qui est à courte distance. La proximité est l'absence de distance."},
    {sense:'s\'approcher',concept:'Proximité',description:"Acte de réduire la distance. S'approcher va vers l'autre."},
    {sense:'rapprocher',concept:'Proximité',description:"Acte de rendre proche. Rapprocher unit ce qui était éloigné."},
    {sense:'sacrifice',concept:'Offrande',description:"Ce qu'on rapproche de Dieu. Le sacrifice est une offrande pour créer la proximité divine."},
    {sense:'offrande',concept:'Offrande',description:"Ce qu'on présente à Dieu. L'offrande est un don pour se rapprocher."},
    {sense:'parent proche',concept:'Parenté',description:"Celui qui est proche par le sang. Le parent est lié par la proximité familiale."},
  ]);log(r,'qrb')

  // hdh (هذه) — celle-ci, cette
  r=await ins('hdh',[
    {sense:'celle-ci',concept:'Démonstratif',description:"Pronom démonstratif féminin. Celle-ci désigne ce qui est présent."},
    {sense:'cette',concept:'Démonstratif',description:"Adjectif démonstratif. Cette pointe vers ce qui est proche."},
    {sense:'ceci',concept:'Démonstratif',description:"Pronom démonstratif neutre. Ceci indique ce qui est là."},
  ]);log(r,'hdh')

  // shjr (شجر) — arbre, dispute, s'élever
  r=await ins('shjr',[
    {sense:'arbre',concept:'Arbre/Végétation',description:"Plante ligneuse à tronc. L'arbre s'élève vers le ciel."},
    {sense:'plante',concept:'Arbre/Végétation',description:"Tout végétal. La plante pousse de la terre."},
    {sense:'dispute',concept:'Conflit',description:"Désaccord qui s'élève entre personnes. La dispute est un conflit verbal."},
    {sense:'être emmêlé',concept:'Conflit',description:"État de ce qui est enchevêtré. Les branches s'emmêlent comme les disputes."},
    {sense:'s\'élever',concept:'Élévation',description:"Acte de monter. S'élever comme un arbre vers le haut."},
  ]);log(r,'shjr')

  // bdw (بدو) — apparaître, se montrer, bédouin
  r=await ins('bdw',[
    {sense:'apparaître',concept:'Apparition/Manifestation',description:"Acte de devenir visible. Apparaître sort du caché vers le visible."},
    {sense:'se montrer',concept:'Apparition/Manifestation',description:"Acte de se rendre visible. Se montrer est une apparition volontaire."},
    {sense:'sembler',concept:'Apparition/Manifestation',description:"Avoir l'apparence de. Sembler est l'apparition de surface."},
    {sense:'bédouin',concept:'Désert',description:"Habitant du désert. Le bédouin vit là où tout apparaît sans obstacle."},
    {sense:'désert',concept:'Désert',description:"Espace nu et ouvert. Le désert est le lieu où tout se montre."},
  ]);log(r,'bdw')

  console.log('\n=== Batch 26 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
