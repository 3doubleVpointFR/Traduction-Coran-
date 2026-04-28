const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 7, total = 2297

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
  // ── nzl ──
  let r = await ins('nzl', [
    {sense:'descendre',concept:'Descente/Révélation',description:'Mouvement extérieur du haut vers le bas. La descente est directionnelle et peut être physique (descendre d\'un lieu) ou abstraite (révéler un texte). L\'acte sort de la source et atteint la destination.'},
    {sense:'faire descendre',concept:'Descente/Révélation',description:'Mouvement extérieur du haut vers le bas.'},
    {sense:'révéler',concept:'Descente/Révélation',description:'Mouvement extérieur du haut vers le bas.'},
    {sense:'envoyer d\'en haut',concept:'Descente/Révélation',description:'Mouvement extérieur du haut vers le bas.'},
    {sense:'pluie qui descend',concept:'Descente/Révélation',description:'Mouvement extérieur du haut vers le bas.'},
    {sense:'s\'installer',concept:'Halte/Séjour',description:'Acte de s\'arrêter dans un lieu pour y séjourner. L\'installation est un mouvement qui aboutit à un état de repos.'},
    {sense:'faire halte',concept:'Halte/Séjour',description:'Acte de s\'arrêter dans un lieu pour y séjourner.'},
    {sense:'hôte',concept:'Halte/Séjour',description:'Acte de s\'arrêter dans un lieu pour y séjourner.'},
    {sense:'lieu de descente',concept:'Halte/Séjour',description:'Acte de s\'arrêter dans un lieu pour y séjourner.'},
    {sense:'rang',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nzl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── qbl ──
  r = await ins('qbl', [
    {sense:'recevoir',concept:'Réception/Accueil',description:'Acte extérieur de prendre ce qui vient vers soi. La réception est directionnelle — quelque chose arrive et on le prend. C\'est un acte qui atteint celui qui reçoit.'},
    {sense:'accepter',concept:'Réception/Accueil',description:'Acte extérieur de prendre ce qui vient vers soi.'},
    {sense:'agréer',concept:'Réception/Accueil',description:'Acte extérieur de prendre ce qui vient vers soi.'},
    {sense:'se tourner vers',concept:'Orientation/Direction',description:'Mouvement extérieur de se diriger vers quelque chose. L\'orientation est directionnelle — on quitte une direction pour en prendre une autre.'},
    {sense:'faire face',concept:'Orientation/Direction',description:'Mouvement extérieur de se diriger vers quelque chose.'},
    {sense:'venir vers',concept:'Orientation/Direction',description:'Mouvement extérieur de se diriger vers quelque chose.'},
    {sense:'avant',concept:'Antériorité/Passé',description:'Position dans le temps qui précède le moment présent. L\'antériorité est un état temporel objectif et permanent — ce qui est avant reste avant.'},
    {sense:'auparavant',concept:'Antériorité/Passé',description:'Position dans le temps qui précède le moment présent.'},
    {sense:'ancien',concept:'Antériorité/Passé',description:'Position dans le temps qui précède le moment présent.'},
    {sense:'devant',concept:'Antériorité/Passé',description:'Position dans le temps ou l\'espace.'},
    {sense:'tribu',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'embrasser',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'garantie',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] qbl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── axr ──
  r = await ins('axr', [
    {sense:'retarder',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent ou un autre événement. La postériorité est un état temporel objectif — ce qui est après reste après. Le retard est un mouvement vers l\'arrière dans le temps.'},
    {sense:'reporter',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'reculer',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'après',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'dernier',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'l\'au-delà',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'fin',concept:'Postériorité/Retard',description:'Position dans le temps qui suit le moment présent.'},
    {sense:'arrière',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'derrière',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] axr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── yqn ──
  r = await ins('yqn', [
    {sense:'être certain',concept:'Certitude/Conviction',description:'État intérieur de savoir sans doute. La certitude est un état permanent une fois atteint — elle ne fluctue pas. C\'est le contraire du doute : le doute hésite, la certitude tranche.'},
    {sense:'certitude',concept:'Certitude/Conviction',description:'État intérieur de savoir sans doute.'},
    {sense:'savoir avec certitude',concept:'Certitude/Conviction',description:'État intérieur de savoir sans doute.'},
    {sense:'conviction ferme',concept:'Certitude/Conviction',description:'État intérieur de savoir sans doute.'},
    {sense:'mort',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] yqn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── flh ──
  r = await ins('flh', [
    {sense:'réussir',concept:'Réussite/Prospérité',description:'État extérieur d\'atteindre ce qu\'on cherche. La réussite est un résultat qui se manifeste concrètement — on réussit ou on échoue, c\'est objectif et visible. Elle est permanente une fois acquise.'},
    {sense:'prospérer',concept:'Réussite/Prospérité',description:'État extérieur d\'atteindre ce qu\'on cherche.'},
    {sense:'être heureux',concept:'Réussite/Prospérité',description:'État extérieur d\'atteindre ce qu\'on cherche.'},
    {sense:'obtenir ce qu\'on désire',concept:'Réussite/Prospérité',description:'État extérieur d\'atteindre ce qu\'on cherche.'},
    {sense:'fendre',concept:'Fendre/Labourer',description:'Acte physique de séparer une chose en deux. La fente est un mouvement extérieur et ponctuel qui transforme l\'état de la chose.'},
    {sense:'labourer',concept:'Fendre/Labourer',description:'Acte physique de séparer une chose en deux.'},
    {sense:'cultivateur',concept:'Fendre/Labourer',description:'Acte physique de séparer une chose en deux.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] flh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── kfr ──
  r = await ins('kfr', [
    {sense:'couvrir',concept:'Couverture/Dissimulation',description:'Acte physique de cacher quelque chose en le recouvrant. La couverture est un acte extérieur qui empêche de voir ce qui est dessous. Le sens physique premier est concret : la nuit couvre le jour, la terre couvre la graine.'},
    {sense:'cacher',concept:'Couverture/Dissimulation',description:'Acte physique de cacher quelque chose en le recouvrant.'},
    {sense:'la nuit qui couvre',concept:'Couverture/Dissimulation',description:'Acte physique de cacher quelque chose en le recouvrant.'},
    {sense:'nier',concept:'Rejet/Ingratitude',description:'Acte extérieur de refuser de reconnaître. Le rejet sort de celui qui nie et atteint ce qui est nié. C\'est un acte directionnel et volontaire qui refuse la réalité de quelque chose.'},
    {sense:'être ingrat',concept:'Rejet/Ingratitude',description:'Acte extérieur de refuser de reconnaître.'},
    {sense:'renier un bienfait',concept:'Rejet/Ingratitude',description:'Acte extérieur de refuser de reconnaître.'},
    {sense:'rejeter',concept:'Rejet/Ingratitude',description:'Acte extérieur de refuser de reconnaître.'},
    {sense:'mécréant',concept:'Rejet/Ingratitude',description:'Acte extérieur de refuser de reconnaître.'},
    {sense:'expier',concept:'Expiation/Réparation',description:'Acte extérieur de compenser une faute par une action réparatrice. L\'expiation sort de celui qui répare et efface la faute.'},
    {sense:'effacer les péchés',concept:'Expiation/Réparation',description:'Acte extérieur de compenser une faute.'},
    {sense:'cultivateur',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'goudron',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'village',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kfr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── swy ──
  r = await ins('swy', [
    {sense:'être égal',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau. L\'égalité est un constat extérieur et permanent — deux choses sont ou ne sont pas égales.'},
    {sense:'équivalent',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau.'},
    {sense:'même chose',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau.'},
    {sense:'indifférent',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau.'},
    {sense:'égaliser',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau.'},
    {sense:'aplanir',concept:'Égalité/Équivalence',description:'État objectif où deux choses sont au même niveau.'},
    {sense:'achever',concept:'Achèvement/Perfection',description:'Acte de mener à son terme, de compléter. L\'achèvement est un acte extérieur qui transforme l\'incomplet en complet.'},
    {sense:'rendre parfait',concept:'Achèvement/Perfection',description:'Acte de mener à son terme.'},
    {sense:'se tenir droit',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'milieu',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] swy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 7 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
