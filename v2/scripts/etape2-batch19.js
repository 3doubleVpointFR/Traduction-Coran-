const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 159, total = 2321

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

  // mshy (مشي) — marcher, aller à pied, purger
  r = await ins('mshy', [
    {sense:'marcher',concept:'Marche/Déplacement',description:"Acte de se déplacer à pied. La marche est un mouvement extérieur, volontaire et continu qui transporte le corps d'un point à un autre."},
    {sense:'aller à pied',concept:'Marche/Déplacement',description:"Se déplacer en utilisant ses pieds. C'est le mode de locomotion le plus fondamental — il est accessible à tout être vivant."},
    {sense:'marcher lentement',concept:'Marche/Déplacement',description:"Avancer avec des pas mesurés et pesants. La lenteur de la marche peut indiquer la fatigue ou la gravité."},
    {sense:'marcher avec quelqu\'un',concept:'Marche/Déplacement',description:"Accompagner quelqu'un en marchant à son rythme. C'est un acte de compagnonnage et de solidarité."},
    {sense:'se promener',concept:'Marche/Déplacement',description:"Marcher sans but précis, pour le plaisir. La promenade est une marche libre et détendue."},
    {sense:'purger',concept:'Divers',description:"Faire évacuer les intestins. Sens médical concret isolé lié au mouvement interne."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mshy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // šya (شيء) — chose, vouloir, créer
  r = await ins('šya', [
    {sense:'chose',concept:'Chose/Existence',description:"Toute réalité qui existe ou qui peut exister. La chose est le concept le plus général — elle englobe tout ce qui est, qu'il soit concret ou abstrait."},
    {sense:'quelque chose',concept:'Chose/Existence',description:"Une réalité indéterminée. Quelque chose désigne une existence dont on ne précise pas la nature."},
    {sense:'vouloir',concept:'Volonté',description:"Acte intérieur de diriger sa volonté vers un objet. Le vouloir est le mouvement premier de la conscience vers ce qu'elle désire réaliser."},
    {sense:'créer',concept:'Volonté',description:"Faire exister ce qui n'existait pas. La création est l'acte suprême de la volonté — elle transforme le néant en chose."},
    {sense:'rien',concept:'Chose/Existence',description:"L'absence de toute chose. Le rien est le contraire de la chose — c'est le vide total d'existence."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šya — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dhhb (ذهب) — doublon de dhb, déjà traité
  r = await ins('dhhb', [
    {sense:'aller',concept:'Départ/Mouvement',description:"Acte de se déplacer d'un point à un autre. Aller est un mouvement directionnel vers l'avant."},
    {sense:'partir',concept:'Départ/Mouvement',description:"Acte de quitter un lieu. Le départ est un mouvement d'éloignement."},
    {sense:'or',concept:'Or/Richesse',description:"Métal précieux jaune. L'or est concret, permanent et universellement valorisé."},
    {sense:'dorer',concept:'Or/Richesse',description:"Recouvrir d'or. La dorure donne l'apparence de la richesse."},
    {sense:'école de pensée',concept:'Doctrine/Voie',description:"Voie de pensée adoptée par un groupe. L'école de pensée indique la direction de la réflexion."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhhb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // elw (علو) — être haut, élever, supérieur
  r = await ins('elw', [
    {sense:'être haut',concept:'Hauteur/Élévation',description:"État de se trouver en position élevée. La hauteur est spatiale et mesurable — c'est la distance entre le bas et le haut. C'est un état permanent qui confère la supériorité."},
    {sense:'élever',concept:'Hauteur/Élévation',description:"Acte de mettre en position haute. L'élévation est un mouvement ascendant qui sort du bas et atteint le haut. C'est directionnel."},
    {sense:"s'élever",concept:'Hauteur/Élévation',description:"Monter par sa propre force. L'élévation de soi est un mouvement volontaire vers le haut, qu'il soit physique ou moral."},
    {sense:'supérieur',concept:'Hauteur/Élévation',description:"Qui est au-dessus des autres. La supériorité est une position permanente de domination par la hauteur."},
    {sense:'le Très-Haut',concept:'Hauteur/Élévation',description:"Celui qui est au-dessus de tout. Le Très-Haut est la hauteur absolue — rien ne le dépasse ni ne l'atteint."},
    {sense:'charger sur un chameau',concept:'Divers',description:"Mettre une charge en hauteur sur le dos d'un animal. Sens concret de mise en position élevée."},
    {sense:'rivaliser en élévation',concept:'Hauteur/Élévation',description:"Se mesurer à un autre pour déterminer qui est le plus haut. La rivalité en hauteur est une compétition de supériorité."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] elw — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // kll (كل) — s'émousser, fardeau, couronner
  r = await ins('kll', [
    {sense:"s'émousser",concept:'Émoussement/Faiblesse',description:"Perdre son tranchant ou son acuité. L'émoussement est un état de perte de force ou de netteté. Ce qui est émoussé ne coupe plus et ne perce plus."},
    {sense:'être fatigué',concept:'Émoussement/Faiblesse',description:"Perdre ses forces par l'effort. La fatigue est un état d'épuisement qui diminue la capacité d'agir."},
    {sense:'fardeau',concept:'Charge/Dépendance',description:"Ce qui pèse sur quelqu'un. Le fardeau est une charge extérieure qui accable celui qui la porte — il est lourd et constant."},
    {sense:'personne à charge',concept:'Charge/Dépendance',description:"Celui qui dépend d'un autre pour sa subsistance. La personne à charge est un poids économique et moral pour celui qui la soutient."},
    {sense:'couronner',concept:'Divers',description:"Orner, décorer. Sens isolé sans lien direct avec la faiblesse."},
    {sense:'agacer les dents',concept:'Divers',description:"Provoquer une sensation désagréable dans les dents. Sens physique concret isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kll — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // qdr (قدر) — mesurer, déterminer, pouvoir, destin
  r = await ins('qdr', [
    {sense:'mesurer',concept:'Mesure/Détermination',description:"Acte de calculer la quantité, la taille ou la proportion de quelque chose. La mesure est un acte rationnel et objectif qui donne une valeur précise aux choses."},
    {sense:'déterminer',concept:'Mesure/Détermination',description:"Fixer avec précision ce qui doit être. La détermination est un acte de volonté qui définit les limites et les proportions."},
    {sense:'décréter',concept:'Mesure/Détermination',description:"Décider de manière souveraine ce qui sera. Le décret est un acte d'autorité qui fixe le destin des choses."},
    {sense:'pouvoir',concept:'Puissance/Capacité',description:"Avoir la capacité de faire quelque chose. Le pouvoir est une force intérieure qui se manifeste par la capacité d'agir sur le monde extérieur."},
    {sense:'être capable',concept:'Puissance/Capacité',description:"Avoir les moyens de réaliser quelque chose. La capacité est la condition préalable de l'action."},
    {sense:'destin',concept:'Mesure/Détermination',description:"Ce qui a été mesuré et fixé d'avance. Le destin est la mesure divine des événements — chaque chose a sa proportion et son moment."},
    {sense:'valeur',concept:'Mesure/Détermination',description:"La mesure de l'importance de quelque chose. La valeur est ce qui quantifie le mérite ou le poids d'une réalité."},
    {sense:'marmite',concept:'Divers',description:"Récipient de cuisson. Sens concret isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] qdr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // fel (فعل) — faire, agir, action
  r = await ins('fel', [
    {sense:'faire',concept:'Action/Acte',description:"Acte fondamental de produire un effet dans le monde. Faire est le verbe le plus général de l'action — il englobe toute transformation de la réalité par un agent."},
    {sense:'agir',concept:'Action/Acte',description:"Exercer une activité qui produit un résultat. L'action est extérieure, visible et mesurable par ses effets."},
    {sense:'action',concept:'Action/Acte',description:"Ce qui est fait. L'action est le résultat concret du verbe faire — elle existe dans le monde et a des conséquences."},
    {sense:'subir une action',concept:'Action/Acte',description:"Recevoir l'effet d'un acte fait par un autre. Le passif est le contraire de l'actif — on reçoit au lieu de produire."},
    {sense:'faire ensemble',concept:'Action/Acte',description:"Agir à deux ou en groupe. L'action conjointe est un acte coopératif où plusieurs agents produisent un même effet."},
    {sense:'efficace',concept:'Action/Acte',description:"Qui produit l'effet voulu. L'efficacité est la qualité de l'action qui atteint son but."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fel — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ly (لي) — particule
  r = await ins('ly', [
    {sense:'pour',concept:'Particule',description:"Particule de finalité ou d'appartenance. Indique le but ou le bénéficiaire d'une action."},
    {sense:'afin que',concept:'Particule',description:"Conjonction de but. Introduit la finalité d'une action."},
    {sense:'non',concept:'Particule',description:"Particule de négation. Inverse le sens de la proposition."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ly — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // edd (عدد) — compter, nombre, préparer
  r = await ins('edd', [
    {sense:'compter',concept:'Dénombrement/Calcul',description:"Acte rationnel de déterminer la quantité d'éléments. Le comptage est un acte mental objectif qui produit un nombre."},
    {sense:'dénombrer',concept:'Dénombrement/Calcul',description:"Établir le nombre exact d'un ensemble. Le dénombrement est un calcul exhaustif."},
    {sense:'nombre',concept:'Dénombrement/Calcul',description:"Résultat du comptage. Le nombre est une valeur objective et mesurable."},
    {sense:'préparer',concept:'Préparation',description:"Rendre quelque chose prêt pour un usage futur. La préparation est un acte anticipatoire — on agit maintenant pour ce qui viendra."},
    {sense:'équiper',concept:'Préparation',description:"Fournir ce qui est nécessaire pour une tâche. L'équipement est la préparation matérielle."},
    {sense:'énumérer ses qualités',concept:'Dénombrement/Calcul',description:"Compter et réciter ses mérites. L'énumération est un comptage appliqué aux qualités morales."},
    {sense:'nombreux',concept:'Dénombrement/Calcul',description:"Qui est en grande quantité. Ce qui est nombreux dépasse ce qui peut être facilement compté."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] edd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // mmm — pas trouvé
  r = await ins('mmm', [
    {sense:'non trouvé',concept:'Non trouvé',description:"Racine non attestée dans le Lane's Arabic-English Lexicon."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mmm — 1 sens → 1 concept (Non trouvé) — reste ' + (total-done)) }

  // aty (أتي) — venir, apporter, donner
  r = await ins('aty', [
    {sense:'venir',concept:'Venue/Arrivée',description:"Acte de se déplacer vers un lieu ou une personne. La venue est un mouvement directionnel — on vient vers quelqu'un ou quelque chose. C'est l'opposé de partir."},
    {sense:'arriver',concept:'Venue/Arrivée',description:"Atteindre le lieu vers lequel on se dirigeait. L'arrivée est le terme du mouvement — on est enfin là."},
    {sense:'apporter',concept:'Venue/Arrivée',description:"Venir avec quelque chose. Apporter c'est combiner le mouvement de venue avec le transport d'un objet."},
    {sense:'donner',concept:'Venue/Arrivée',description:"Transmettre quelque chose à quelqu'un. Le don est un mouvement directionnel de l'avoir vers l'autre."},
    {sense:'commettre',concept:'Venue/Arrivée',description:"Faire un acte, souvent répréhensible. Commettre c'est venir à un acte — c'est l'approche volontaire d'une action."},
    {sense:'détruire',concept:'Divers',description:"Anéantir, ruiner. Sens de venue destructrice — le mal vient sur quelque chose et le détruit."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] aty — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dew (دعو) — appeler, invoquer, prier, prétendre
  r = await ins('dew', [
    {sense:'appeler',concept:'Appel/Invocation',description:"Acte de diriger sa voix vers quelqu'un pour attirer son attention. L'appel sort de celui qui appelle et atteint celui qui est appelé. C'est directionnel et sonore."},
    {sense:'invoquer',concept:'Appel/Invocation',description:"Appeler Dieu en le suppliant. L'invocation est un appel dirigé vers le haut — elle sort du suppliant et monte vers Dieu."},
    {sense:'prier',concept:'Appel/Invocation',description:"Adresser une demande humble à Dieu. La prière est un acte intérieur qui se manifeste par des paroles dirigées vers le divin."},
    {sense:'demander',concept:'Appel/Invocation',description:"Solliciter quelque chose de quelqu'un. La demande est un mouvement directionnel du demandeur vers celui qui peut donner."},
    {sense:'prétendre',concept:'Prétention/Revendication',description:"Affirmer quelque chose qui peut être vrai ou faux. La prétention est un acte de parole qui revendique un statut ou un fait."},
    {sense:'revendiquer une filiation',concept:'Prétention/Revendication',description:"Affirmer un lien de parenté. La revendication de filiation est une prétention à l'appartenance familiale."},
    {sense:'maudire',concept:'Divers',description:"Appeler le mal sur quelqu'un. La malédiction est un appel inversé — au lieu de demander le bien, on demande le mal."},
    {sense:'inviter',concept:'Appel/Invocation',description:"Appeler quelqu'un à venir ou à participer. L'invitation est un appel bienveillant qui attire l'autre vers soi."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dew — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 19 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
