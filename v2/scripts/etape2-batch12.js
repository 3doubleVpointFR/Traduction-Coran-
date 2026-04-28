const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 74, total = 2297

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

  r = await ins('wsl', [
    {sense:'joindre',concept:'Liaison/Connexion',description:"Acte extérieur de relier deux choses séparées. La liaison sort de celui qui relie et crée un pont permanent entre deux réalités."},
    {sense:'lier',concept:'Liaison/Connexion',description:"Créer un lien."},
    {sense:'atteindre',concept:'Liaison/Connexion',description:"Parvenir à quelque chose."},
    {sense:'arriver',concept:'Liaison/Connexion',description:"Atteindre un point."},
    {sense:'lien de parenté',concept:'Liaison/Connexion',description:"Relation qui relie les membres d'une famille."},
    {sense:'connexion',concept:'Liaison/Connexion',description:"État d'être relié."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] wsl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('fsd', [
    {sense:'corrompre',concept:'Corruption/Désordre',description:"Acte extérieur de détériorer l'état normal d'une chose. La corruption sort de celui qui corrompt et atteint ce qui est corrompu. C'est un mouvement de l'ordre vers le désordre."},
    {sense:'corruption',concept:'Corruption/Désordre',description:"État de détérioration."},
    {sense:'gâter',concept:'Corruption/Désordre',description:"Rendre mauvais ce qui était bon."},
    {sense:'désordre',concept:'Corruption/Désordre',description:"État contraire à l'ordre."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fsd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('slh', [
    {sense:'être bon',concept:'Bonté/Rectitude',description:"État intérieur de conformité au bien. La bonté est une qualité permanente qui se manifeste extérieurement dans les actes justes."},
    {sense:'rectifier',concept:'Bonté/Rectitude',description:"Rendre bon ce qui ne l'était pas."},
    {sense:'réconcilier',concept:'Bonté/Rectitude',description:"Rétablir l'ordre entre deux parties."},
    {sense:'bon',concept:'Bonté/Rectitude',description:"Celui qui est conforme au bien."},
    {sense:'vertueux',concept:'Bonté/Rectitude',description:"Celui qui pratique le bien."},
    {sense:'paix',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] slh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('xsr', [
    {sense:'perdre',concept:'Perte/Dommage',description:"État extérieur de ne plus avoir ce qu'on avait. La perte atteint celui qui perd — c'est un résultat subi, pas un acte volontaire."},
    {sense:'perte',concept:'Perte/Dommage',description:"État de privation."},
    {sense:'perdant',concept:'Perte/Dommage',description:"Celui qui subit la perte."},
    {sense:'dommage',concept:'Perte/Dommage',description:"Ce qui est perdu."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xsr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ehd', [
    {sense:'engagement',concept:'Engagement/Promesse',description:"Acte extérieur de se lier par une parole ou un accord. L'engagement sort de celui qui s'engage et atteint celui envers qui on s'engage. C'est directionnel et durable."},
    {sense:'pacte',concept:'Engagement/Promesse',description:"Accord liant deux parties."},
    {sense:'promesse',concept:'Engagement/Promesse',description:"Parole donnée."},
    {sense:'confier',concept:'Engagement/Promesse',description:"Remettre à quelqu'un."},
    {sense:'époque',concept:'Divers',description:"Sens isolés. Période de temps."},
    {sense:'rencontre',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ehd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('nqd', [
    {sense:'rompre',concept:'Rupture/Annulation',description:"Acte extérieur de briser ce qui était uni ou lié. La rupture sort de celui qui rompt et défait ce qui avait été construit."},
    {sense:'annuler',concept:'Rupture/Annulation',description:"Défaire ce qui avait été fait."},
    {sense:'défaire',concept:'Rupture/Annulation',description:"Acte de détruire un assemblage."},
    {sense:'trahir un pacte',concept:'Rupture/Annulation',description:"Rompre un engagement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nqd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('lqy', [
    {sense:'rencontrer',concept:'Rencontre/Face à face',description:"Acte extérieur de se trouver face à face avec quelqu'un ou quelque chose. La rencontre est directionnelle — les deux parties convergent."},
    {sense:'trouver',concept:'Rencontre/Face à face',description:"Arriver à ce qu'on cherchait."},
    {sense:'recevoir',concept:'Rencontre/Face à face',description:"Accueillir ce qui vient."},
    {sense:'jeter',concept:'Jeter/Lancer',description:"Acte extérieur de projeter quelque chose loin de soi. Le lancer sort de la main et atteint une cible. C'est directionnel et ponctuel."},
    {sense:'lancer',concept:'Jeter/Lancer',description:"Projeter avec force."},
    {sense:'inspirer',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] lqy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('šrk', [
    {sense:'associer',concept:'Association/Partage',description:"Acte extérieur de mettre ensemble deux réalités distinctes comme si elles étaient égales ou liées. L'association relie ce qui était séparé."},
    {sense:'partager',concept:'Association/Partage',description:"Diviser entre plusieurs."},
    {sense:'associé',concept:'Association/Partage',description:"Celui qui est joint à un autre."},
    {sense:'polythéisme',concept:'Association/Partage',description:"Acte d'associer d'autres divinités à Dieu."},
    {sense:'piège',concept:'Divers',description:"Sens isolés. Filet qui attrape."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šrk — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('twb', [
    {sense:'revenir',concept:'Retour/Repentir',description:"Acte de se retourner vers l'état initial ou vers la bonne direction. Le retour est un mouvement directionnel — on quitte un état pour en rejoindre un autre. C'est volontaire et ponctuel mais avec des effets permanents."},
    {sense:'se repentir',concept:'Retour/Repentir',description:"Revenir sur ses actes."},
    {sense:'accepter le repentir',concept:'Retour/Repentir',description:"Acte d'accueillir le retour."},
    {sense:'repentir',concept:'Retour/Repentir',description:"L'acte de revenir."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] twb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḏkr', [
    {sense:'mentionner',concept:'Mention/Rappel',description:"Acte extérieur de nommer ou évoquer quelque chose. La mention sort de celui qui parle et atteint celui qui écoute. C'est un acte de communication directionnel."},
    {sense:'rappeler',concept:'Mention/Rappel',description:"Ramener à la mémoire."},
    {sense:'souvenir',concept:'Mention/Rappel',description:"Ce qui reste en mémoire."},
    {sense:'rappel',concept:'Mention/Rappel',description:"Acte de ramener à l'esprit."},
    {sense:'mâle',concept:'Genre/Masculin',description:"Être de sexe masculin. Le mâle est une réalité biologique extérieure et visible."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḏkr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
