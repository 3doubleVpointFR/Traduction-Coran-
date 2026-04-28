const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 183, total = 2321
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
  r=await ins('shbh',[
    {sense:'ressembler',concept:'Ressemblance/Similitude',description:"Avoir une similitude avec autre chose. La ressemblance est un lien entre deux réalités qui partagent des traits communs."},
    {sense:'rendre semblable',concept:'Ressemblance/Similitude',description:"Acte de faire qu'une chose soit comme une autre. C'est un acte extérieur qui rapproche deux réalités."},
    {sense:'imiter',concept:'Ressemblance/Similitude',description:"Reproduire les traits d'un modèle. L'imitation est un acte volontaire qui copie un modèle."},
    {sense:'semblable',concept:'Ressemblance/Similitude',description:"Ce qui est pareil à autre chose. Le semblable est le résultat de la ressemblance."},
    {sense:'douteux',concept:'Ambiguïté/Doute',description:"Ce qui prête à confusion par sa ressemblance avec autre chose. Le douteux ressemble au vrai et au faux en même temps."},
    {sense:'ambigu',concept:'Ambiguïté/Doute',description:"Ce qui peut être compris de plusieurs façons. L'ambiguïté naît de la ressemblance entre des sens différents."},
  ]);log(r,'shbh')
  r=await ins('fy',[
    {sense:'dans',concept:'Particule',description:"Préposition de lieu ou de temps. Indique l'intérieur d'un espace ou d'une période."},
  ]);log(r,'fy')
  r=await ins('zwj',[
    {sense:'coupler',concept:'Couple/Union',description:"Acte de réunir deux choses ensemble pour en faire une paire. Le couplage transforme deux entités séparées en une unité."},
    {sense:'marier',concept:'Couple/Union',description:"Acte d'unir un homme et une femme par le mariage. Le mariage est un couplage permanent qui crée un lien social et spirituel."},
    {sense:'époux',concept:'Couple/Union',description:"Chacun des deux membres du couple. L'époux est la moitié de la paire — il ne se définit que par rapport à l'autre."},
    {sense:'paire',concept:'Couple/Union',description:"Deux choses qui vont ensemble. La paire est l'unité minimale de la pluralité."},
    {sense:'espèce',concept:'Couple/Union',description:"Catégorie de choses semblables. L'espèce regroupe les individus qui partagent les mêmes caractéristiques."},
  ]);log(r,'zwj')
  r=await ins('thr',[
    {sense:'être pur',concept:'Pureté/Purification',description:"État d'absence de souillure. La pureté est un état intérieur et extérieur de propreté totale."},
    {sense:'purifier',concept:'Pureté/Purification',description:"Acte d'enlever ce qui est impur. La purification transforme l'impur en pur. C'est directionnel."},
    {sense:'se purifier',concept:'Pureté/Purification',description:"Acte réflexif de se nettoyer soi-même. La purification de soi est un acte volontaire de préparation."},
    {sense:'pur',concept:'Pureté/Purification',description:"Qui est exempt de souillure. Le pur est dans un état permanent de propreté morale et physique."},
  ]);log(r,'thr')
  r=await ins('khd',[
    {sense:'demeurer',concept:'Permanence/Éternité',description:"Rester dans un lieu de manière prolongée. La demeure est un état de stabilité qui résiste au changement."},
    {sense:'demeurer longtemps',concept:'Permanence/Éternité',description:"Rester très longtemps. La permanence prolongée est un pas vers l'éternité."},
    {sense:'éternel',concept:'Permanence/Éternité',description:"Qui dure sans fin. L'éternité est la permanence absolue — rien ne change, rien ne passe."},
    {sense:'faire demeurer',concept:'Permanence/Éternité',description:"Causer la permanence de quelqu'un dans un lieu. Acte extérieur qui fixe dans un état durable."},
    {sense:'orner de bracelets',concept:'Divers',description:"Décorer avec des bijoux. Sens concret isolé."},
  ]);log(r,'khd')
  r=await ins('drb',[
    {sense:'frapper',concept:'Frappe/Coup',description:"Acte extérieur de donner un coup. La frappe sort de celui qui frappe et atteint ce qui est frappé. C'est directionnel et soudain."},
    {sense:'battre',concept:'Frappe/Coup',description:"Donner des coups répétés. Le battement est une frappe continue et insistante."},
    {sense:'donner un exemple',concept:'Établissement/Institution',description:"Proposer une illustration pour faire comprendre. Donner un exemple c'est frapper l'esprit avec une image."},
    {sense:'établir',concept:'Établissement/Institution',description:"Fixer, mettre en place. Établir c'est frapper le sol pour planter — la frappe qui crée la stabilité."},
    {sense:'voyager',concept:'Déplacement',description:"Se déplacer dans un pays. Voyager c'est frapper la terre avec ses pieds."},
    {sense:'frapper la monnaie',concept:'Établissement/Institution',description:"Fabriquer des pièces. La frappe monétaire est un acte de marquage permanent."},
    {sense:'dresser une tente',concept:'Établissement/Institution',description:"Planter une tente. Dresser c'est frapper le sol avec les piquets."},
    {sense:'semer la discorde',concept:'Divers',description:"Provoquer la division entre les gens. Sens figuré de la frappe appliquée aux relations."},
  ]);log(r,'drb')
  r=await ins('bed',[
    {sense:'une partie',concept:'Partie/Division',description:"Une portion d'un tout. La partie n'existe que par rapport au tout dont elle est extraite."},
    {sense:'certains',concept:'Partie/Division',description:"Quelques-uns parmi un ensemble. Certains désigne une fraction indéterminée du groupe."},
    {sense:'diviser en parties',concept:'Partie/Division',description:"Séparer un tout en portions distinctes. La division transforme l'unité en pluralité."},
    {sense:'moustique',concept:'Divers',description:"Insecte qui pique. Sens concret isolé."},
  ]);log(r,'bed')
  r=await ins('fwq',[
    {sense:'au-dessus',concept:'Supériorité/Dessus',description:"Position spatiale en haut par rapport à autre chose. Le dessus est la position dominante."},
    {sense:'surpasser',concept:'Supériorité/Dessus',description:"Être supérieur aux autres en qualité ou en rang."},
    {sense:'exceller',concept:'Supériorité/Dessus',description:"Dépasser les autres par sa qualité. L'excellence est la supériorité manifeste et reconnue."},
    {sense:'se rétablir',concept:'Rétablissement',description:"Revenir à un état de santé. Le rétablissement est un retour au-dessus après être tombé."},
    {sense:'encoche de flèche',concept:'Divers',description:"Partie supérieure de la flèche. Sens concret isolé."},
  ]);log(r,'fwq')
  r=await ins('nwh',[
    {sense:'rendre célèbre',concept:'Renommée',description:"Faire connaître quelqu'un publiquement. La renommée sort de celui qui proclame et atteint les oreilles de tous."},
    {sense:'rendre notoire',concept:'Renommée',description:"Faire en sorte que quelqu'un soit connu de tous, en bien ou en mal."},
  ]);log(r,'nwh')
  r=await ins('mḏa',[
    {sense:'depuis',concept:'Particule',description:"Préposition de temps qui marque le point de départ d'une durée."},
  ]);log(r,'mḏa')
  r=await ins('rwd',[
    {sense:'aller et venir',concept:'Mouvement/Recherche',description:"Se déplacer dans plusieurs directions. Le va-et-vient est un mouvement exploratoire."},
    {sense:'chercher à convaincre',concept:'Mouvement/Recherche',description:"Essayer de tourner quelqu'un vers une position. La persuasion est un mouvement vers l'esprit de l'autre."},
    {sense:'désirer',concept:'Mouvement/Recherche',description:"Vouloir obtenir quelque chose. Le désir est un mouvement intérieur orienté vers un objet."},
    {sense:'agir doucement',concept:'Douceur/Lenteur',description:"Procéder avec précaution et lenteur. La douceur dans l'action est un mouvement mesuré."},
    {sense:'pâturage',concept:'Divers',description:"Lieu où les animaux cherchent leur nourriture."},
  ]);log(r,'rwd')
  r=await ins('hḏa',[
    {sense:'couper rapidement',concept:'Coupure rapide',description:"Trancher avec vitesse et efficacité. La coupure rapide est un acte violent et soudain."},
    {sense:'réciter rapidement',concept:'Coupure rapide',description:"Lire à toute vitesse sans pause. La récitation rapide est la coupure appliquée à la parole."},
    {sense:'tranchant',concept:'Coupure rapide',description:"Qui coupe vite et bien. Le tranchant est la qualité de ce qui sépare sans effort."},
  ]);log(r,'hḏa')
  console.log('\n=== Batch 21 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
