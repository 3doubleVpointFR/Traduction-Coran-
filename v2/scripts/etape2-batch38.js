const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 358, total = 2321

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

  // 359. ezw (عظو) — os, grandeur
  r = await ins('ezw', [
    {sense:'os',concept:'Structure/Ossature',description:"La partie dure et solide qui soutient le corps — l'os ('azm) est permanent comme structure interne qui donne forme et solidité au corps. Les os sont ce qui reste après la chair, ce qui résiste au temps. Dieu reconstituera les os le Jour de la Résurrection : Celui qui les a créés la première fois peut les recréer."},
    {sense:'ossement',concept:'Structure/Ossature',description:''},
    {sense:'grand',concept:'Grandeur/Importance',description:"Ce qui dépasse la mesure ordinaire en taille ou en valeur — le grand ('azîm) est permanent comme qualité d'éminence. C'est un jugement sur ce qui mérite le respect par sa dimension. Dieu est al-'Azîm, le Très-Grand dont la grandeur dépasse toute mesure."},
    {sense:'immense',concept:'Grandeur/Importance',description:''},
    {sense:'important',concept:'Grandeur/Importance',description:''},
  ])
  log(r,'ezw',{'Structure/Ossature':"Partie dure qui soutient. Résiste au temps. Sera reconstituée au Jugement.",'Grandeur/Importance':"Ce qui dépasse la mesure ordinaire. Dieu est al-'Azîm."})

  // 360. trq (طرق) — frapper, chemin
  r = await ins('trq', [
    {sense:'frapper',concept:'Frappe/Percussion',description:"Acte de donner un coup sur quelque chose — frapper (tarq) est directionnel vers ce qu'on frappe. C'est ponctuel dans chaque coup. L'étoile qui perce (târiq) frappe la nuit de sa lumière. Le marteau frappe l'enclume. Le son du frappe peut annoncer une venue."},
    {sense:'percussion',concept:'Frappe/Percussion',description:''},
    {sense:'chemin',concept:'Voie/Passage',description:"Espace par lequel on passe pour aller d'un lieu à un autre — le chemin (tarîq) est permanent comme voie de passage. C'est directionnel de l'origine vers la destination. Tout chemin mène quelque part. Le droit chemin (tarîq mustaqîm) mène à Dieu."},
    {sense:'voie',concept:'Voie/Passage',description:''},
    {sense:'astre nocturne',concept:'Lumière perçante',description:"L'étoile qui perce l'obscurité de la nuit — at-târiq est celui qui frappe la nuit de sa lumière. C'est directionnel vers l'obscurité qu'il traverse."},
  ])
  log(r,'trq',{'Frappe/Percussion':"Donner un coup. Directionnel vers ce qu'on frappe. Peut annoncer une venue.",'Voie/Passage':"Espace pour passer. Mène d'un lieu à un autre. Le droit chemin mène à Dieu.",'Lumière perçante':"Étoile qui perce la nuit. Traverse l'obscurité."})

  // 361. hnl (هنل) — là, voici
  r = await ins('hnl', [
    {sense:'là',concept:'Indication/Lieu',description:"Adverbe qui désigne un endroit proche ou lointain — là (hunâ/hunâlika) pointe vers un lieu. C'est directionnel vers l'espace qu'on désigne. Là où tu es, là où se passe l'action. L'indication spatiale situe l'événement dans l'espace."},
    {sense:'voici',concept:'Indication/Lieu',description:''},
    {sense:'ici',concept:'Indication/Lieu',description:''},
  ])
  log(r,'hnl',{'Indication/Lieu':"Désigne un endroit. Directionnel vers l'espace. Situe l'événement."})

  // 362. bnt (بنت) — fille
  r = await ins('bnt', [
    {sense:'fille',concept:'Descendance féminine',description:"Enfant de sexe féminin par rapport à ses parents — la fille (bint) est permanente comme relation de filiation. Elle porte l'héritage familial et perpétue la lignée par le mariage. Le Coran condamne ceux qui tuaient leurs filles par honte ou par crainte de la pauvreté. Les filles ont des droits sur leurs parents comme les fils."},
    {sense:'fillette',concept:'Descendance féminine',description:''},
    {sense:'descendante',concept:'Descendance féminine',description:''},
  ])
  log(r,'bnt',{'Descendance féminine':"Enfant féminin. Relation permanente de filiation. A des droits comme les fils."})

  // 363. rde (رضع) — allaiter
  r = await ins('rde', [
    {sense:'allaiter',concept:'Allaitement/Nourriture',description:"Acte de nourrir un enfant au sein — l'allaitement (radâ'a) est directionnel de la mère vers l'enfant. C'est une période temporaire mais fondatrice du lien. L'allaitement complet est de deux ans pour qui veut le compléter. Il crée une parenté de lait qui interdit le mariage comme la parenté de sang."},
    {sense:'téter',concept:'Allaitement/Nourriture',description:''},
    {sense:'nourrice',concept:'Allaitement/Nourriture',description:''},
    {sense:'lait maternel',concept:'Allaitement/Nourriture',description:''},
  ])
  log(r,'rde',{'Allaitement/Nourriture':"Nourrir au sein. Directionnel vers l'enfant. Deux ans complets. Crée parenté de lait."})

  // 364. mne (منع) — empêcher
  r = await ins('mne', [
    {sense:'empêcher',concept:'Empêchement/Interdiction',description:"Acte de faire obstacle à ce que quelqu'un fasse ou obtienne quelque chose — empêcher (man') est directionnel vers celui qu'on empêche et ce dont on le prive. C'est ponctuel dans l'acte mais peut créer un état permanent d'interdiction. Qui empêche la mosquée de Dieu qu'on y mentionne Son nom ? L'empêcheur se dresse entre le sujet et l'objet de son désir."},
    {sense:'interdire',concept:'Empêchement/Interdiction',description:''},
    {sense:'refuser',concept:'Empêchement/Interdiction',description:''},
    {sense:'protéger',concept:'Protection/Défense',description:"Empêcher le mal d'atteindre quelqu'un — la protection est l'empêchement positif, directionnel vers celui qu'on défend. Dieu est al-Mâni', Celui qui empêche le mal d'atteindre Ses serviteurs."},
  ])
  log(r,'mne',{'Empêchement/Interdiction':"Faire obstacle. Directionnel vers l'empêché. Se dresse entre le sujet et son objet.",'Protection/Défense':"Empêcher le mal. Dieu est al-Mâni'."})

  // 365. axḏ (أخذ) — prendre
  r = await ins('axḏ', [
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de saisir quelque chose par la main ou par l'autorité — prendre (akhadha) est directionnel vers ce qui est pris. C'est ponctuel mais établit une possession ou un contrôle. Dieu prend les âmes au moment de la mort. Prendre le pacte c'est s'engager. La prise de Dieu sur les oppresseurs est sévère et sans échappatoire."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
    {sense:'recevoir',concept:'Prise/Saisie',description:''},
    {sense:'adopter',concept:'Adoption/Engagement',description:"Prendre pour sien ce qui ne l'était pas — adopter est directionnel vers ce qu'on fait sien. Ceux qui prennent des alliés en dehors de Dieu s'égarent."},
    {sense:'châtier',concept:'Châtiment',description:"Saisir pour punir — le châtiment divin est une prise irrésistible. C'est ponctuel mais définitif."},
  ])
  log(r,'axḏ',{'Prise/Saisie':"Saisir par la main ou l'autorité. Établit possession. La prise de Dieu est sans échappatoire.",'Adoption/Engagement':"Faire sien. Prendre des alliés hors de Dieu égare.",'Châtiment':"Saisie punitive. Irrésistible et définitive."})

  // 366. a y t (أية) — signe, verset
  r = await ins('a y t', [
    {sense:'signe',concept:'Signe/Manifestation',description:"Ce qui indique autre chose que soi-même, qui pointe vers une réalité plus grande — le signe (âya) est permanent comme indicateur de sens. Les signes de Dieu sont dans la création (les astres, les plantes, les animaux) et dans la révélation (les versets). Le signe appelle à la réflexion : celui qui voit le signe et comprend accède à la connaissance de Celui qui l'a posé."},
    {sense:'verset',concept:'Signe/Manifestation',description:''},
    {sense:'miracle',concept:'Signe/Manifestation',description:''},
    {sense:'preuve',concept:'Signe/Manifestation',description:''},
  ])
  log(r,'a y t',{'Signe/Manifestation':"Indique autre chose que soi. Dans la création et la révélation. Appelle à la réflexion."})

  // 367. ydd (يدد) — main
  r = await ins('ydd', [
    {sense:'main',concept:'Main/Pouvoir',description:"Membre du corps qui sert à saisir et à agir — la main (yad) est permanente comme instrument d'action et symbole de puissance. C'est par la main qu'on prend, qu'on donne, qu'on frappe, qu'on construit. La main de Dieu (yad Allah) est une expression de Sa puissance et de Sa générosité. Les deux mains de Dieu sont ouvertes, Il dépense comme Il veut."},
    {sense:'puissance',concept:'Main/Pouvoir',description:''},
    {sense:'pouvoir',concept:'Main/Pouvoir',description:''},
    {sense:'bienfait',concept:'Main/Pouvoir',description:''},
  ])
  log(r,'ydd',{'Main/Pouvoir':"Instrument d'action. Symbole de puissance. La main de Dieu est ouverte en générosité."})

  // 368. wsa (وسع) — être large, contenir
  r = await ins('wsa', [
    {sense:'être large',concept:'Largeur/Capacité',description:"État de ce qui a une grande étendue ou peut contenir beaucoup — la largeur (sa'a) est permanente comme qualité d'espace. Ce qui est large peut accueillir, contenir, embrasser. La terre de Dieu est vaste pour celui qui veut émigrer. La miséricorde de Dieu embrasse (wasi'at) toute chose. Dieu est al-Wâsi', Celui dont la capacité est infinie."},
    {sense:'contenir',concept:'Largeur/Capacité',description:''},
    {sense:'embrasser',concept:'Largeur/Capacité',description:''},
    {sense:'capacité',concept:'Largeur/Capacité',description:''},
    {sense:'aisance',concept:'Aisance/Richesse',description:"État de celui qui a plus que le nécessaire — l'aisance est permanente comme situation de suffisance. Le riche dépense selon son aisance."},
  ])
  log(r,'wsa',{'Largeur/Capacité':"Grande étendue. Peut contenir et embrasser. La miséricorde de Dieu embrasse tout.",'Aisance/Richesse':"Plus que le nécessaire. Dépenser selon sa capacité."})

  console.log('\n=== Batch 38 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
