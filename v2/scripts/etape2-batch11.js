const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 68, total = 2297

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('  ERREUR ' + key + ': ' + error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}

async function run() {
  let r

  r = await ins('ety', [
    {sense:'donner',concept:'Don/Attribution',description:"Acte extérieur de transmettre quelque chose de soi vers l'autre. Le don sort du donneur et atteint le receveur. C'est directionnel, ponctuel mais avec effets permanents."},
    {sense:'accorder',concept:'Don/Attribution',description:"Acte de transmettre."},
    {sense:'venir',concept:'Venue/Arrivée',description:"Mouvement vers un lieu. La venue est directionnelle — on se déplace d'un point à un autre."},
    {sense:'arriver',concept:'Venue/Arrivée',description:"Atteindre un lieu."},
    {sense:'apporter',concept:'Venue/Arrivée',description:"Venir avec quelque chose."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ety — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('bqr', [
    {sense:'vache',concept:'Bétail/Animal',description:"Animal domestique d'élevage. Le bétail est une réalité extérieure, physique et concrète — il représente la richesse matérielle."},
    {sense:'boeuf',concept:'Bétail/Animal',description:"Animal domestique."},
    {sense:'ouvrir',concept:'Ouverture/Fente',description:"Acte physique de séparer pour rendre accessible ce qui était fermé. L'ouverture est un mouvement extérieur et ponctuel."},
    {sense:'fendre',concept:'Ouverture/Fente',description:"Acte de séparer."},
    {sense:'examiner',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bqr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('dbh', [
    {sense:'égorger',concept:'Sacrifice/Abattage',description:"Acte physique de tuer un animal en coupant la gorge. Le sacrifice est un acte extérieur, directionnel et ponctuel."},
    {sense:'sacrifice',concept:'Sacrifice/Abattage',description:"Acte de tuer rituellement."},
    {sense:'victimme',concept:'Sacrifice/Abattage',description:"L'animal sacrifié."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dbh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('lwn', [
    {sense:'couleur',concept:'Couleur/Apparence',description:"Qualité visuelle extérieure d'une chose. La couleur est extérieure, visible et permanente — elle est ce qui se voit en premier après la forme."},
    {sense:'teinte',concept:'Couleur/Apparence',description:"Nuance de couleur."},
    {sense:'espèce',concept:'Couleur/Apparence',description:"Extension : type, catégorie distinguée par son apparence."},
    {sense:'changement',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] lwn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('šfq', [
    {sense:'craindre',concept:'Crainte/Pitié',description:"État intérieur de peur mêlée de compassion. La crainte par pitié reste chez celui qui la ressent — c'est un sentiment intérieur qui peut motiver des actes extérieurs."},
    {sense:'compatir',concept:'Crainte/Pitié',description:"Ressentir de la peine pour l'autre."},
    {sense:'crépuscule',concept:'Divers',description:"Sens isolés. Lumière rougeâtre du soir."},
    {sense:'mince',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šfq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('dwn', [
    {sense:'en dessous',concept:'Infériorité/En-dessous',description:"Position spatiale inférieure. Ce qui est en dessous est dans une position moindre par rapport à ce qui est au-dessus."},
    {sense:'inférieur',concept:'Infériorité/En-dessous',description:"Position moindre."},
    {sense:'moindre',concept:'Infériorité/En-dessous',description:"Moins que."},
    {sense:'proche',concept:'Proximité/Moindre distance',description:"Ce qui est à faible distance. Le proche est accessible et atteignable."},
    {sense:'le plus bas',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dwn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('msv', [
    {sense:'exemple',concept:'Exemple/Comparaison',description:"Réalité utilisée pour illustrer ou comparer. L'exemple est extérieur et directionnel — il pointe de la chose connue vers la chose à comprendre."},
    {sense:'parabole',concept:'Exemple/Comparaison',description:"Récit illustratif."},
    {sense:'ressemblance',concept:'Exemple/Comparaison',description:"Ce qui est semblable."},
    {sense:'semblable',concept:'Exemple/Comparaison',description:"Ce qui ressemble."},
    {sense:'statue',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] msv — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('bewd', [
    {sense:'moustique',concept:'Insecte/Petitesse',description:"Petit insecte qui pique. Le moustique est une réalité extérieure, concrète et petite — il représente ce qui est insignifiant en taille mais présent."},
    {sense:'petit',concept:'Insecte/Petitesse',description:"Ce qui est de taille minime."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bewd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('fsq', [
    {sense:'sortir de l\'obéissance',concept:'Transgression/Rébellion',description:"Acte extérieur de quitter le cadre établi. La transgression sort de celui qui transgresse et brise l'ordre. C'est un acte directionnel et volontaire."},
    {sense:'désobéir',concept:'Transgression/Rébellion',description:"Acte de sortir de l'obéissance."},
    {sense:'pervers',concept:'Transgression/Rébellion',description:"Celui qui sort du cadre."},
    {sense:'datte qui sort de sa peau',concept:'Divers',description:"Sens physique premier : ce qui sort de son enveloppe."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fsq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('qte', [
    {sense:'couper',concept:'Coupure/Séparation',description:"Acte physique de séparer en deux parties. La coupure est extérieure, directionnelle et ponctuelle — elle transforme l'uni en séparé."},
    {sense:'rompre',concept:'Coupure/Séparation',description:"Acte de briser un lien."},
    {sense:'interrompre',concept:'Coupure/Séparation',description:"Acte d'arrêter un cours."},
    {sense:'traverser',concept:'Coupure/Séparation',description:"Passer à travers en séparant."},
    {sense:'décider',concept:'Décision',description:"Acte de trancher une question. La décision est un acte rationnel qui met fin à l'hésitation."},
    {sense:'morceau',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] qte — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
