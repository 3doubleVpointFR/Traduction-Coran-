const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 26, total = 2297

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

  r = await ins('Hvr', [
    {sense:'entourer',concept:'Encerclement/Rassemblement',description:"Acte extérieur de rassembler autour d'un point central. L'encerclement est directionnel — de l'extérieur vers le centre."},
    {sense:'rassembler',concept:'Encerclement/Rassemblement',description:"Acte extérieur de rassembler."},
    {sense:'jour de la résurrection',concept:'Encerclement/Rassemblement',description:"Acte extérieur de rassembler."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Hvr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('fwz', [
    {sense:'réussir',concept:'Succès/Salut',description:"État d'atteindre ce qu'on cherche et d'échapper à ce qu'on craint. Le succès est un résultat extérieur et visible, permanent une fois atteint."},
    {sense:'être sauvé',concept:'Succès/Salut',description:"État d'atteindre ce qu'on cherche."},
    {sense:'obtenir',concept:'Succès/Salut',description:"État d'atteindre ce qu'on cherche."},
    {sense:'salut',concept:'Succès/Salut',description:"État d'atteindre ce qu'on cherche."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fwz — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('nwr', [
    {sense:'lumière',concept:'Lumière/Clarté',description:"Réalité extérieure qui rend visible ce qui était caché dans l'obscurité. La lumière sort de sa source et atteint tout ce qu'elle éclaire. Elle est permanente tant que la source existe."},
    {sense:'éclairer',concept:'Lumière/Clarté',description:"Réalité extérieure qui rend visible."},
    {sense:'feu',concept:'Lumière/Clarté',description:"Réalité extérieure qui rend visible."},
    {sense:'guider par la lumière',concept:'Lumière/Clarté',description:"Réalité extérieure qui rend visible."},
    {sense:'fleur',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'fuir',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nwr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('Zlm', [
    {sense:'opprimer',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose là où ce n'est pas sa place. L'injustice sort de celui qui opprime et atteint celui qui est opprimé. C'est un acte directionnel et volontaire qui viole l'ordre juste."},
    {sense:'être injuste',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'injustice',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'oppresseur',concept:'Injustice/Oppression',description:"Acte extérieur de placer quelque chose hors de sa place."},
    {sense:'obscurité',concept:'Obscurité/Ténèbres',description:"État de ce qui est privé de lumière. L'obscurité est un état extérieur qui empêche de voir. Elle est le contraire de la lumière."},
    {sense:'ténèbres',concept:'Obscurité/Ténèbres',description:"État de ce qui est privé de lumière."},
    {sense:'se faire du tort',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Zlm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('jel', [
    {sense:'faire',concept:'Action/Réalisation',description:"Acte extérieur de produire quelque chose ou de transformer un état. L'action sort de celui qui agit et transforme la réalité. C'est l'acte fondamental — faire, c'est passer de l'intention au résultat."},
    {sense:'rendre',concept:'Action/Réalisation',description:"Acte extérieur de produire ou transformer."},
    {sense:'placer',concept:'Action/Réalisation',description:"Acte extérieur de produire ou transformer."},
    {sense:'commencer à',concept:'Action/Réalisation',description:"Acte extérieur de produire ou transformer."},
    {sense:'établir',concept:'Action/Réalisation',description:"Acte extérieur de produire ou transformer."},
    {sense:'créer',concept:'Action/Réalisation',description:"Acte extérieur de produire ou transformer."},
    {sense:'récompense',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] jel — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('Ayy', [
    {sense:'signe',concept:'Signe/Preuve',description:"Réalité extérieure qui pointe vers autre chose. Le signe est visible et directionnel — il montre quelque chose au-delà de lui-même. C'est permanent tant qu'il existe."},
    {sense:'miracle',concept:'Signe/Preuve',description:"Réalité extérieure qui pointe vers autre chose."},
    {sense:'verset',concept:'Signe/Preuve',description:"Réalité extérieure qui pointe vers autre chose."},
    {sense:'preuve',concept:'Signe/Preuve',description:"Réalité extérieure qui pointe vers autre chose."},
    {sense:'marque',concept:'Signe/Preuve',description:"Réalité extérieure qui pointe vers autre chose."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Ayy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('Eml', [
    {sense:'travailler',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort pour obtenir un résultat. Le travail sort de celui qui agit et transforme la réalité. C'est un acte continu et volontaire qui produit des oeuvres visibles."},
    {sense:'agir',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'oeuvre',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'acte',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'ouvrier',concept:'Action/Oeuvre',description:"Acte extérieur de produire un effort."},
    {sense:'gouverneur',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Eml — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('SlH', [
    {sense:'être bon',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste. La bonté est un état objectif et permanent — ce qui est bon reste bon indépendamment de l'observateur. Elle se manifeste extérieurement par des actes droits."},
    {sense:'rectitude',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'réparer',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste. Extension : réparer c'est remettre dans l'état juste."},
    {sense:'réconcilier',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'oeuvre bonne',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'vertueux',concept:'Bonté/Rectitude',description:"État de ce qui est conforme à l'ordre juste."},
    {sense:'paix',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] SlH — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('xvr', [
    {sense:'être nombreux',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité. L'abondance est un état objectif et extérieur — elle se voit et se mesure. Elle est permanente tant que la source produit."},
    {sense:'abondance',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'beaucoup',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'multiplier',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'la plupart',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
    {sense:'souvent',concept:'Abondance/Multiplicité',description:"État de ce qui est en grande quantité."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xvr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('fsd', [
    {sense:'corrompre',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste. La corruption sort de celui qui corrompt et atteint ce qui est corrompu. C'est un acte directionnel qui transforme le bon en mauvais, l'ordre en désordre."},
    {sense:'gâter',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste."},
    {sense:'désordre',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste."},
    {sense:'corrupteur',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste."},
    {sense:'corruption',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste."},
    {sense:'détériorer',concept:'Corruption/Désordre',description:"Acte extérieur de détruire l'ordre juste."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fsd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
