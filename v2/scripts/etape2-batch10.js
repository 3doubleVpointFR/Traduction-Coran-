const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 59, total = 2297

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

  r = await ins('drj', [
    {sense:'degré',concept:'Degré/Rang',description:"Position dans une hiérarchie. Le degré est extérieur, objectif et mesurable — chaque personne occupe un rang précis."},
    {sense:'rang',concept:'Degré/Rang',description:"Position relative."},
    {sense:'marche',concept:'Degré/Rang',description:"Élément physique qui élève."},
    {sense:'élever graduellement',concept:'Degré/Rang',description:"Monter étape par étape."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] drj — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hdn', [
    {sense:'être proche',concept:'Proximité/Présence',description:"État de ce qui est à faible distance. La proximité est extérieure et relationnelle — on est proche de quelqu'un ou de quelque chose."},
    {sense:'auprès de',concept:'Proximité/Présence',description:"Position spatiale de proximité."},
    {sense:'chez',concept:'Proximité/Présence',description:"Lieu de présence."},
    {sense:'selon',concept:'Proximité/Présence',description:"Extension : du point de vue de."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hdn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('šye', [
    {sense:'vouloir',concept:'Volonté/Décision',description:"Acte intérieur de décider et de choisir. La volonté est un mouvement intérieur qui se dirige vers un objet précis. C'est l'acte fondamental de la liberté."},
    {sense:'désirer',concept:'Volonté/Décision',description:"Mouvement intérieur vers un objet."},
    {sense:'chose',concept:'Chose/Objet',description:"Réalité qui existe indépendamment. Tout ce qui peut être conçu, pensé ou perçu."},
    {sense:'quelque chose',concept:'Chose/Objet',description:"Réalité indéterminée."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šye — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('eḏb', [
    {sense:'châtier',concept:'Châtiment/Punition',description:"Acte extérieur d'infliger une souffrance en réponse à une faute. Le châtiment sort de celui qui punit et atteint celui qui est puni. C'est directionnel et ponctuel."},
    {sense:'punir',concept:'Châtiment/Punition',description:"Acte d'infliger une conséquence négative."},
    {sense:'châtiment',concept:'Châtiment/Punition',description:"La souffrance infligée."},
    {sense:'eau douce',concept:'Divers',description:"Sens isolés. Le Lane's note ce sens physique."},
    {sense:'doux',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] eḏb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('jne', [
    {sense:'rassembler',concept:'Rassemblement/Totalité',description:"Acte extérieur de réunir des éléments dispersés en un tout. Le rassemblement transforme le multiple en un."},
    {sense:'réunir',concept:'Rassemblement/Totalité',description:"Acte de mettre ensemble."},
    {sense:'tous ensemble',concept:'Rassemblement/Totalité',description:"État de totalité."},
    {sense:'groupe',concept:'Rassemblement/Totalité',description:"Ensemble de personnes réunies."},
    {sense:'pluriel',concept:'Divers',description:"Sens isolés. Forme grammaticale."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] jne — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('bel', [
    {sense:'après',concept:'Postériorité/Continuation',description:"Position temporelle qui suit un moment. Ce qui vient après est séparé de ce qui vient avant par une transition."},
    {sense:'ensuite',concept:'Postériorité/Continuation',description:"Ce qui suit dans le temps."},
    {sense:'encore',concept:'Postériorité/Continuation',description:"Continuation au-delà d'un point."},
    {sense:'mais',concept:'Opposition/Correction',description:"Particule qui introduit une correction ou un contraste. L'opposition met face à face deux réalités différentes."},
    {sense:'au contraire',concept:'Opposition/Correction',description:"Inversion de ce qui précède."},
    {sense:'loin',concept:'Divers',description:"Sens isolés. Distance spatiale."},
    {sense:'mari',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bel — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('rsl', [
    {sense:'envoyer',concept:'Envoi/Message',description:"Acte extérieur de faire partir quelque chose ou quelqu'un vers une destination. L'envoi sort de l'expéditeur et atteint le destinataire. C'est directionnel et ponctuel."},
    {sense:'messager',concept:'Envoi/Message',description:"Celui qui est envoyé."},
    {sense:'message',concept:'Envoi/Message',description:"Ce qui est envoyé."},
    {sense:'libérer',concept:'Envoi/Message',description:"Extension : laisser partir, relâcher."},
    {sense:'pluie',concept:'Divers',description:"Sens isolés. Ce qui est envoyé du ciel."},
    {sense:'cheveux lâchés',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] rsl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('bšr', [
    {sense:'annoncer une bonne nouvelle',concept:'Annonce/Bonne nouvelle',description:"Acte extérieur de transmettre une information positive. L'annonce sort de celui qui annonce et atteint celui qui reçoit. C'est directionnel et ponctuel mais avec un effet durable (la joie)."},
    {sense:'bonne nouvelle',concept:'Annonce/Bonne nouvelle',description:"Information positive transmise."},
    {sense:'réjouir',concept:'Annonce/Bonne nouvelle',description:"Acte de causer la joie."},
    {sense:'peau',concept:'Peau/Surface',description:"Enveloppe extérieure du corps. La peau est extérieure, visible et permanente — elle est ce qui se voit en premier."},
    {sense:'être humain',concept:'Peau/Surface',description:"Extension : celui qui a une peau, la créature visible."},
    {sense:'visage',concept:'Peau/Surface',description:"La peau du visage — ce qui est tourné vers les autres."},
    {sense:'toucher',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bšr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('wqd', [
    {sense:'allumer',concept:'Feu/Combustion',description:"Acte extérieur de produire du feu. Le feu est une transformation visible et directionnelle — il consume et éclaire. C'est ponctuel mais avec des effets permanents."},
    {sense:'brûler',concept:'Feu/Combustion',description:"Acte de consumer par le feu."},
    {sense:'feu',concept:'Feu/Combustion',description:"Réalité physique de combustion."},
    {sense:'combustible',concept:'Feu/Combustion',description:"Ce qui alimente le feu."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] wqd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hjr', [
    {sense:'pierre',concept:'Pierre/Matériau',description:"Matière solide et dure extraite de la terre. La pierre est extérieure, permanente et résistante — elle ne change pas facilement."},
    {sense:'roche',concept:'Pierre/Matériau',description:"Masse minérale solide."},
    {sense:'interdit',concept:'Interdit/Enclos',description:"Ce qui est séparé et mis à part. L'interdit crée une limite entre l'accessible et l'inaccessible."},
    {sense:'sanctuaire',concept:'Interdit/Enclos',description:"Lieu mis à part."},
    {sense:'émigrer',concept:'Migration/Séparation',description:"Acte de quitter un lieu pour un autre. La migration est un mouvement extérieur, directionnel et volontaire."},
    {sense:'abandonner',concept:'Migration/Séparation',description:"Acte de quitter."},
    {sense:'giron',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hjr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
