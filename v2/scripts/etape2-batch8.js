const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 46, total = 2297

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('  ' + key + ' non trouvé — skip'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('  ' + key + ' déjà fait — skip'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('  ERREUR ' + key + ': ' + error.message); return null }
  const concepts = [...new Set(senses.map(s => s.concept))]
  return {total: senses.length, concepts}
}

async function run() {
  let r

  // Corrections batch précédent
  r = await ins('hrm', [
    {sense:'interdire',concept:'Interdiction/Sacré',description:"Acte extérieur de rendre inaccessible. L'interdiction sort de celui qui interdit et crée une limite permanente."},
    {sense:'sacré',concept:'Interdiction/Sacré',description:"Ce qui est mis hors d'atteinte."},
    {sense:'sanctuaire',concept:'Interdiction/Sacré',description:"Lieu rendu inaccessible."},
    {sense:'illicite',concept:'Interdiction/Sacré',description:"Ce qui est rendu interdit."},
    {sense:'priver',concept:'Interdiction/Sacré',description:"Acte de rendre inaccessible."},
    {sense:'respecter',concept:'Interdiction/Sacré',description:"Acte de reconnaître la limite."},
    {sense:'épouse',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hrm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hsb', [
    {sense:'compter',concept:'Calcul/Évaluation',description:"Acte rationnel de mesurer et d'évaluer. Le calcul aboutit à un jugement objectif et permanent."},
    {sense:'estimer',concept:'Calcul/Évaluation',description:"Acte rationnel de mesurer."},
    {sense:'penser',concept:'Calcul/Évaluation',description:"Acte rationnel d'évaluer."},
    {sense:'compte',concept:'Calcul/Évaluation',description:"Résultat du calcul."},
    {sense:'suffire',concept:'Suffisance',description:"État de ce qui comble le besoin sans surplus ni manque."},
    {sense:'suffisant',concept:'Suffisance',description:"État de ce qui comble le besoin."},
    {sense:'noblesse',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hsb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hyy', [
    {sense:'vivre',concept:'Vie/Vivant',description:"État fondamental de l'être qui existe et agit. La vie se manifeste par le mouvement et l'action."},
    {sense:'vie',concept:'Vie/Vivant',description:"État fondamental."},
    {sense:'vivant',concept:'Vie/Vivant',description:"Celui qui possède la vie."},
    {sense:'donner la vie',concept:'Vie/Vivant',description:"Acte de faire passer du non-être à l'être."},
    {sense:'saluer',concept:'Salutation/Pudeur',description:"Acte extérieur de reconnaître l'autre."},
    {sense:'pudeur',concept:'Salutation/Pudeur',description:"État intérieur de retenue."},
    {sense:'serpent',concept:'Divers',description:"Sens isolés."},
    {sense:'pluie',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hyy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('thmr', [
    {sense:'fruit',concept:'Fruit/Produit',description:"Résultat extérieur et visible d'un processus de croissance. Le fruit sort de l'arbre — directionnel et ponctuel."},
    {sense:'récolte',concept:'Fruit/Produit',description:"Résultat de la croissance."},
    {sense:'richesse',concept:'Fruit/Produit',description:"Extension : le fruit du travail."},
    {sense:'produire',concept:'Fruit/Produit',description:"Acte de générer un fruit."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] thmr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // Nouvelles racines
  r = await ins('smy', [
    {sense:'nommer',concept:'Nom/Identification',description:"Acte extérieur de donner un nom pour identifier. Le nom sort de celui qui nomme et identifie ce qui est nommé."},
    {sense:'nom',concept:'Nom/Identification',description:"Signe qui identifie."},
    {sense:'ciel',concept:'Ciel/Hauteur',description:"Ce qui est au-dessus, la voûte céleste. Réalité extérieure et permanente."},
    {sense:'être haut',concept:'Ciel/Hauteur',description:"État de ce qui est élevé."},
    {sense:'pluie',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] smy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('byn', [
    {sense:'être clair',concept:'Clarté/Évidence',description:"État de ce qui est visible et compréhensible sans ambiguïté. La clarté est extérieure et permanente — ce qui est clair se montre à tous."},
    {sense:'expliquer',concept:'Clarté/Évidence',description:"Acte de rendre clair."},
    {sense:'évident',concept:'Clarté/Évidence',description:"État de ce qui est manifeste."},
    {sense:'preuve',concept:'Clarté/Évidence',description:"Ce qui rend clair."},
    {sense:'séparer',concept:'Séparation/Distance',description:"Acte de mettre de la distance entre deux choses. La séparation est extérieure et visible."},
    {sense:'entre',concept:'Séparation/Distance',description:"Position spatiale entre deux points."},
    {sense:'quitter',concept:'Séparation/Distance',description:"Acte de s'éloigner."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] byn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('shd', [
    {sense:'témoigner',concept:'Témoignage/Attestation',description:"Acte extérieur de déclarer ce qu'on a vu ou su. Le témoignage sort du témoin et atteint ceux qui écoutent. C'est directionnel et ponctuel mais avec des effets permanents."},
    {sense:'attester',concept:'Témoignage/Attestation',description:"Acte de déclarer."},
    {sense:'témoin',concept:'Témoignage/Attestation',description:"Celui qui déclare."},
    {sense:'être présent',concept:'Présence/Visibilité',description:"État de ce qui est là et visible. La présence est extérieure et concrète."},
    {sense:'assister',concept:'Présence/Visibilité',description:"Être présent à un événement."},
    {sense:'martyr',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] shd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('dea', [
    {sense:'appeler',concept:'Appel/Invocation',description:"Acte extérieur de s'adresser à quelqu'un pour qu'il réponde. L'appel sort de celui qui appelle et atteint celui qui est appelé. C'est directionnel et peut être ponctuel ou répété."},
    {sense:'invoquer',concept:'Appel/Invocation',description:"Acte de s'adresser à Dieu."},
    {sense:'prier',concept:'Appel/Invocation',description:"Acte de demander."},
    {sense:'inviter',concept:'Appel/Invocation',description:"Acte de convier."},
    {sense:'prétendre',concept:'Divers',description:"Sens isolés."},
    {sense:'maudire',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dea — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('erv', [
    {sense:'hériter',concept:'Héritage/Succession',description:"Acte de recevoir ce qui appartenait à quelqu'un d'autre après sa disparition. L'héritage va de celui qui part vers celui qui reste."},
    {sense:'héritage',concept:'Héritage/Succession',description:"Ce qui est transmis."},
    {sense:'héritier',concept:'Héritage/Succession',description:"Celui qui reçoit."},
    {sense:'transmettre',concept:'Héritage/Succession',description:"Acte de passer à l'autre."},
    {sense:'succéder',concept:'Héritage/Succession',description:"Prendre la place de."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] erv — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('tby', [
    {sense:'suivre',concept:'Suite/Obéissance',description:"Acte extérieur de marcher derrière quelqu'un ou de se conformer. La suite est directionnelle — on va dans la direction de celui qu'on suit."},
    {sense:'obéir',concept:'Suite/Obéissance',description:"Acte de se conformer."},
    {sense:'succéder',concept:'Suite/Obéissance',description:"Venir après."},
    {sense:'partisan',concept:'Suite/Obéissance',description:"Celui qui suit."},
    {sense:'conséquence',concept:'Divers',description:"Sens isolés."},
    {sense:'lire à haute voix',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] tby — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
