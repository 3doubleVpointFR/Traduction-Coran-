const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 30, total = 2297

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

  // Racines manquantes des batches précédents (bonnes clés)
  r = await ins('kḏb', [
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité. Le mensonge sort de celui qui ment et atteint celui qui écoute. C'est un acte directionnel et volontaire qui crée une fausse réalité."},
    {sense:'mensonge',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'démentir',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'nier la vérité',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'accuser de mensonge',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'menteur',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'illusion',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kḏb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ndh r', [
    {sense:'avertir',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer quelqu'un d'un danger pour qu'il l'évite. L'avertissement sort de celui qui avertit et atteint celui qui est averti. C'est un acte directionnel, rationnel et bienveillant."},
    {sense:'prévenir',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'mettre en garde',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'avertisseur',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'voeu',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager à faire quelque chose. Le voeu est une promesse faite à soi-même ou à Dieu."},
    {sense:'promettre',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager."},
    {sense:'consacrer',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager."},
    {sense:'crainte',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ndh r — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hqq', [
    {sense:'être vrai',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité. La vérité est extérieure et permanente — elle existe indépendamment de celui qui la reconnaît ou la nie."},
    {sense:'vérité',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité."},
    {sense:'réalité',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité."},
    {sense:'droit',concept:'Vérité/Réalité',description:"État objectif. Extension : le droit est ce qui est juste et vrai."},
    {sense:'devoir',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses. Le devoir est une obligation rationnelle qui atteint celui qui doit agir."},
    {sense:'mériter',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses."},
    {sense:'être obligatoire',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses."},
    {sense:'se réaliser',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'vérifier',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hqq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ghyb', [
    {sense:'être absent',concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible par les sens. L'absence est un état objectif — la chose existe mais n'est pas accessible."},
    {sense:'disparaître',concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible."},
    {sense:'se cacher',concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible."},
    {sense:'invisible',concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible."},
    {sense:'inconnu',concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible."},
    {sense:"l'invisible",concept:'Absence/Invisible',description:"État de ce qui n'est pas perceptible."},
    {sense:'médire',concept:'Médisance/Calomnie',description:"Acte extérieur de parler de quelqu'un en son absence. La médisance sort de celui qui parle et atteint la réputation de l'absent."},
    {sense:'calomnier',concept:'Médisance/Calomnie',description:"Acte extérieur de parler de quelqu'un en son absence."},
    {sense:'forêt dense',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'creux',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ghyb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('zlm', [
    {sense:'opprimer',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose là où ce n'est pas sa place. L'injustice sort de celui qui opprime et atteint celui qui est opprimé. C'est un acte directionnel et volontaire."},
    {sense:'être injuste',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'injustice',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'oppresseur',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'obscurité',concept:'Obscurité/Ténèbres',description:"État de ce qui est privé de lumière. L'obscurité est un état extérieur qui empêche de voir."},
    {sense:'ténèbres',concept:'Obscurité/Ténèbres',description:"État de ce qui est privé de lumière."},
    {sense:'se faire du tort',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] zlm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('eml', [
    {sense:'travailler',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort pour obtenir un résultat. Le travail sort de celui qui agit et transforme la réalité. C'est un acte continu et volontaire."},
    {sense:'agir',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'oeuvre',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'acte',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'ouvrier',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'gouverneur',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] eml — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('slh', [
    {sense:'être bon',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste. La bonté est un état objectif et permanent — ce qui est bon reste bon."},
    {sense:'rectitude',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'réparer',concept:'Bonté/Rectitude',description:"Extension : remettre dans l'état juste."},
    {sense:'réconcilier',concept:'Bonté/Rectitude',description:"Extension : remettre les relations dans l'ordre juste."},
    {sense:'oeuvre bonne',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'vertueux',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'paix',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] slh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('kṯr', [
    {sense:'être nombreux',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité. L'abondance est un état objectif et extérieur — elle se voit et se mesure."},
    {sense:'abondance',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'beaucoup',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'multiplier',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'la plupart',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'souvent',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kṯr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('hšr', [
    {sense:'rassembler',concept:'Rassemblement/Résurrection',description:"Acte extérieur de réunir des éléments dispersés en un seul lieu. Le rassemblement sort de celui qui rassemble et atteint ceux qui sont rassemblés. C'est un acte directionnel vers un point central."},
    {sense:'réunir',concept:'Rassemblement/Résurrection',description:"Acte extérieur de réunir."},
    {sense:'résurrection',concept:'Rassemblement/Résurrection',description:"Acte extérieur de réunir. Extension : le rassemblement final de tous les êtres."},
    {sense:'expulser',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hšr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('thny', [
    {sense:'plier',concept:'Dualité/Répétition',description:"Acte de doubler quelque chose sur lui-même. La dualité est un état objectif — deux choses existent côte à côte ou l'une après l'autre."},
    {sense:'répéter',concept:'Dualité/Répétition',description:"Acte de doubler."},
    {sense:'deux',concept:'Dualité/Répétition',description:"Le nombre deux."},
    {sense:'deuxième',concept:'Dualité/Répétition',description:"Position ordinale."},
    {sense:'exception',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'louer',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] thny — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
