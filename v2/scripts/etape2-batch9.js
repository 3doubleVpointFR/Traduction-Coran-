const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 52, total = 2297

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('  ' + key + ' non trouvé — skip'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('  ERREUR ' + key + ': ' + error.message); return null }
  const concepts = [...new Set(senses.map(s => s.concept))]
  return {total: senses.length, concepts}
}

async function run() {
  let r

  r = await ins('ard', [
    {sense:'terre',concept:'Terre/Sol',description:"Surface solide sur laquelle on vit et on marche. La terre est extérieure, permanente et universelle — elle est le support de toute activité humaine."},
    {sense:'sol',concept:'Terre/Sol',description:"Surface sur laquelle on se tient."},
    {sense:'pays',concept:'Terre/Sol',description:"Extension : territoire habité."},
    {sense:'bas',concept:'Terre/Sol',description:"Position spatiale opposée au ciel."},
    {sense:'rhume',concept:'Divers',description:"Sens isolés."},
    {sense:'tremblement',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ard — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ahl', [
    {sense:'famille',concept:'Famille/Communauté',description:"Ensemble de personnes liées par le sang ou l'appartenance. La famille est une réalité relationnelle permanente."},
    {sense:'gens de',concept:'Famille/Communauté',description:"Groupe appartenant à un lieu ou une qualité."},
    {sense:'peuple',concept:'Famille/Communauté',description:"Communauté humaine."},
    {sense:'digne de',concept:'Mérite/Aptitude',description:"État de celui qui est qualifié pour quelque chose. Le mérite est un jugement objectif sur la capacité."},
    {sense:'accueillir',concept:'Divers',description:"Sens isolés."},
    {sense:'se marier',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ahl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('swr', [
    {sense:'forme',concept:'Forme/Image',description:"Apparence extérieure et visible d'une chose. La forme est ce qui se montre — elle est extérieure, permanente et identifiable."},
    {sense:'image',concept:'Forme/Image',description:"Représentation visible."},
    {sense:'façonner',concept:'Forme/Image',description:"Acte de donner une forme."},
    {sense:'apparence',concept:'Forme/Image',description:"Ce qui se voit de l'extérieur."},
    {sense:'trompette',concept:'Divers',description:"Sens isolés."},
    {sense:'mur',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] swr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('rjl', [
    {sense:'homme',concept:'Homme/Piéton',description:"Être humain adulte de sexe masculin. L'homme est une réalité extérieure et visible. La racine lie l'homme au pied — celui qui marche."},
    {sense:'pied',concept:'Homme/Piéton',description:"Membre inférieur du corps qui permet de marcher."},
    {sense:'piéton',concept:'Homme/Piéton',description:"Celui qui marche à pied."},
    {sense:'revenir',concept:'Divers',description:"Sens isolés."},
    {sense:'improviser',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] rjl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('wld', [
    {sense:'engendrer',concept:'Engendrement/Naissance',description:"Acte de donner naissance à un autre être. L'engendrement sort du parent et produit l'enfant. C'est un acte directionnel et ponctuel avec des conséquences permanentes."},
    {sense:'enfanter',concept:'Engendrement/Naissance',description:"Acte de mettre au monde."},
    {sense:'enfant',concept:'Engendrement/Naissance',description:"Celui qui est né de l'engendrement."},
    {sense:'fils',concept:'Engendrement/Naissance',description:"Descendant masculin."},
    {sense:'père',concept:'Engendrement/Naissance',description:"Celui qui engendre."},
    {sense:'naître',concept:'Engendrement/Naissance',description:"Acte d'entrer dans l'existence par l'engendrement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] wld — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('jez', [
    {sense:'récompenser',concept:'Rétribution/Compensation',description:"Acte extérieur de rendre à quelqu'un ce qu'il mérite. La rétribution sort de celui qui rétribue et atteint celui qui reçoit. C'est directionnel et peut être positif (récompense) ou négatif (châtiment)."},
    {sense:'punir',concept:'Rétribution/Compensation',description:"Rendre le mal pour le mal."},
    {sense:'rétribution',concept:'Rétribution/Compensation',description:"Ce qui est rendu pour les actes."},
    {sense:'suffire',concept:'Suffisance',description:"Combler le besoin."},
    {sense:'partie',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] jez — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('sbr', [
    {sense:'patienter',concept:'Patience/Endurance',description:"Acte intérieur de supporter sans fléchir. La patience est un état permanent de résistance face à l'épreuve. Elle reste chez celui qui la pratique mais se manifeste extérieurement par la constance."},
    {sense:'endurer',concept:'Patience/Endurance',description:"Supporter avec constance."},
    {sense:'patience',concept:'Patience/Endurance',description:"État de résistance."},
    {sense:'retenir',concept:'Patience/Endurance',description:"Acte de se contenir."},
    {sense:'emprisonner',concept:'Divers',description:"Sens isolés."},
    {sense:'sommet de montagne',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sbr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('tqy', [
    {sense:'craindre Dieu',concept:'Crainte/Piété',description:"Acte intérieur de conscience qui se manifeste par l'évitement du mal. La crainte pieuse est un état permanent qui oriente les actes vers le bien."},
    {sense:'piété',concept:'Crainte/Piété',description:"État de conscience qui évite le mal."},
    {sense:'se protéger',concept:'Crainte/Piété',description:"Acte de se prémunir contre le mal."},
    {sense:'pieux',concept:'Crainte/Piété',description:"Celui qui craint et se protège."},
    {sense:'bouclier',concept:'Divers',description:"Sens isolés. Ce qui protège physiquement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] tqy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('edl', [
    {sense:'être juste',concept:'Justice/Équité',description:"État objectif de donner à chacun ce qui lui revient. La justice est extérieure — elle se manifeste dans les actes et les décisions. C'est un état permanent qui ne dépend pas de l'humeur."},
    {sense:'justice',concept:'Justice/Équité',description:"État de conformité au droit."},
    {sense:'équité',concept:'Justice/Équité',description:"Traitement égal et juste."},
    {sense:'rançon',concept:'Justice/Équité',description:"Extension : compensation juste."},
    {sense:'équivalent',concept:'Justice/Équité',description:"Ce qui est du même poids."},
    {sense:'dévier',concept:'Divers',description:"Sens isolés. Contraire : s'éloigner de la justice."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] edl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('wjh', [
    {sense:'visage',concept:'Visage/Direction',description:"Partie du corps qui fait face à l'autre. Le visage est extérieur, visible et directionnel — il montre vers où on regarde. Extension : la direction, ce vers quoi on se tourne."},
    {sense:'face',concept:'Visage/Direction',description:"Ce qui est tourné vers l'autre."},
    {sense:'direction',concept:'Visage/Direction',description:"Le côté vers lequel on se tourne."},
    {sense:'se diriger vers',concept:'Visage/Direction',description:"Acte de tourner son visage vers."},
    {sense:'manière',concept:'Divers',description:"Sens isolés."},
    {sense:'noble',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] wjh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
