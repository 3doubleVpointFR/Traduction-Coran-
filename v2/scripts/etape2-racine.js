// Étape 2 — Insertion d'une racine avec concepts
// Usage: node etape2-racine.js
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function insert(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('  ' + key + ' non trouvé dans word_analyses'); return }
  const aid = wa[0].id

  // Vérifier si déjà fait
  const {count} = await db.from('word_meanings').select('*', {count:'exact',head:true}).eq('analysis_id', aid).not('concept','is',null)
  if (count > 0) { console.log('  ' + key + ' déjà fait — skip'); return }

  const toInsert = senses.map((s,i) => ({...s, analysis_id: aid, meaning_type: 'etymology', display_order: i+1}))
  const {error} = await db.from('word_meanings').insert(toInsert)
  if (error) console.log('  ERREUR ' + key + ': ' + error.message)

  const concepts = [...new Set(senses.map(s => s.concept))]
  const conceptCounts = concepts.map(c => c + ' (' + senses.filter(s => s.concept === c).length + ')')
  return { ok: !error, total: senses.length, concepts: conceptCounts }
}

async function run() {
  let done = 0
  const total = 2297

  // ── ktb ──
  const r1 = await insert('ktb', [
    {sense:'écrire',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver. L\'écriture sort de celui qui écrit et atteint celui qui lit. C\'est un acte directionnel et durable.'},
    {sense:'dicter',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'demander d\'écrire',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'écrire à quelqu\'un',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'s\'inscrire',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'copier un livre',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'art de l\'écriture',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'scribe',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'savant',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'école',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'enseignant',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'vendeur de livres',concept:'Écriture/Inscription',description:'Acte extérieur et permanent de tracer des signes pour communiquer ou conserver.'},
    {sense:'livre',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit. Le livre est un objet extérieur qui conserve et transmet l\'information de manière permanente. Il est le résultat de l\'acte d\'écrire.'},
    {sense:'écriture révélée',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit.'},
    {sense:'registre',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit.'},
    {sense:'contrat écrit',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit.'},
    {sense:'contrat de mariage',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit.'},
    {sense:'contrat d\'affranchissement',concept:'Livre/Écrit',description:'Support matériel ou immatériel qui contient un texte écrit.'},
    {sense:'prescrire',concept:'Obligation/Décret',description:'Acte d\'autorité qui impose une obligation ou un décret. L\'obligation sort de celui qui prescrit et atteint celui qui est obligé. C\'est un jugement rationnel dirigé vers l\'extérieur, permanent et contraignant.'},
    {sense:'rendre obligatoire',concept:'Obligation/Décret',description:'Acte d\'autorité qui impose une obligation ou un décret.'},
    {sense:'juger',concept:'Obligation/Décret',description:'Acte d\'autorité qui impose une obligation ou un décret.'},
    {sense:'décret divin',concept:'Obligation/Décret',description:'Acte d\'autorité qui impose une obligation ou un décret.'},
    {sense:'prédestination',concept:'Obligation/Décret',description:'Acte d\'autorité qui impose une obligation ou un décret.'},
    {sense:'rassembler',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble. L\'assemblage est un mouvement extérieur qui transforme le dispersé en uni. C\'est ponctuel et concret.'},
    {sense:'coudre',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'attacher',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'fermer la vulve',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'lier l\'outre',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'se ceindre',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'collecter',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'préparer les troupes',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'armée',concept:'Assemblage/Couture',description:'Acte physique de réunir des éléments séparés en un ensemble.'},
    {sense:'rétention urinaire',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent avec les autres sens de la racine.'},
    {sense:'constipation',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'flèche d\'entraînement',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'gonflé et plein',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r1) { done++; console.log('[' + done + '/' + total + '] ktb — ' + r1.total + ' sens → ' + r1.concepts.length + ' concepts (' + r1.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── ryb ──
  const r2 = await insert('ryb', [
    {sense:'douter',concept:'Doute/Suspicion',description:'État intérieur d\'incertitude face à quelque chose. Le doute reste chez celui qui le ressent — c\'est une hésitation qui ne sort pas vers l\'extérieur. C\'est un état permanent tant qu\'il n\'est pas résolu.'},
    {sense:'soupçonner',concept:'Doute/Suspicion',description:'État intérieur d\'incertitude face à quelque chose.'},
    {sense:'inquiétude',concept:'Doute/Suspicion',description:'État intérieur d\'incertitude face à quelque chose.'},
    {sense:'accusation',concept:'Doute/Suspicion',description:'État intérieur d\'incertitude face à quelque chose.'},
    {sense:'besoin',concept:'Besoin/Manque',description:'État de manque qui pousse à chercher ce qui comble. Le besoin est intérieur mais peut se manifester vers l\'extérieur par la demande.'},
    {sense:'avoir besoin de',concept:'Besoin/Manque',description:'État de manque qui pousse à chercher ce qui comble.'},
    {sense:'abondance d\'herbage',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'terre fertile',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r2) { done++; console.log('[' + done + '/' + total + '] ryb — ' + r2.total + ' sens → ' + r2.concepts.length + ' concepts (' + r2.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── wqy ──
  const r3 = await insert('wqy', [
    {sense:'protéger',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal. La protection sort de celui qui protège et atteint celui qui est protégé. C\'est un acte directionnel et peut être permanent.'},
    {sense:'préserver',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal.'},
    {sense:'craindre',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal.'},
    {sense:'piété',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal.'},
    {sense:'se prémunir',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal.'},
    {sense:'éviter',concept:'Protection/Préservation',description:'Acte extérieur de mettre à l\'abri du danger ou du mal.'},
    {sense:'bouclier',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r3) { done++; console.log('[' + done + '/' + total + '] wqy — ' + r3.total + ' sens → ' + r3.concepts.length + ' concepts (' + r3.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── amn ──
  const r4 = await insert('amn', [
    {sense:'être en sécurité',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure qui vient de l\'absence de danger. La sécurité peut rester intérieure (sentiment) ou se manifester extérieurement (lieu sûr). C\'est un état permanent tant que la cause de sécurité existe.'},
    {sense:'se sentir en sécurité',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure.'},
    {sense:'faire confiance',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure.'},
    {sense:'confier',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure.'},
    {sense:'fidèle',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure.'},
    {sense:'lieu sûr',concept:'Sécurité/Confiance',description:'État de tranquillité intérieure.'},
    {sense:'croire',concept:'Foi/Adhésion',description:'Acte intérieur d\'adhésion et de conviction qui se dirige vers l\'extérieur par la déclaration et l\'action. La foi est un mouvement intérieur qui atteint l\'extérieur par ses conséquences. Elle est permanente une fois établie.'},
    {sense:'avoir la foi',concept:'Foi/Adhésion',description:'Acte intérieur d\'adhésion et de conviction.'},
    {sense:'accepter comme vrai',concept:'Foi/Adhésion',description:'Acte intérieur d\'adhésion et de conviction.'},
    {sense:'croyant',concept:'Foi/Adhésion',description:'Acte intérieur d\'adhésion et de conviction.'},
    {sense:'confirmer',concept:'Foi/Adhésion',description:'Acte intérieur d\'adhésion et de conviction.'},
    {sense:'protéger',concept:'Garantie/Protection',description:'Acte extérieur de donner une garantie ou une protection. L\'acte sort de celui qui protège et atteint celui qui est protégé.'},
    {sense:'accorder la sécurité',concept:'Garantie/Protection',description:'Acte extérieur de donner une garantie ou une protection.'},
    {sense:'amen',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r4) { done++; console.log('[' + done + '/' + total + '] amn — ' + r4.total + ' sens → ' + r4.concepts.length + ' concepts (' + r4.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── gyb ──
  const r5 = await insert('gyb', [
    {sense:'être absent',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens. L\'absence est un état objectif — la chose existe mais n\'est pas accessible. C\'est permanent ou temporaire selon le contexte.'},
    {sense:'disparaître',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens.'},
    {sense:'se cacher',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens.'},
    {sense:'invisible',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens.'},
    {sense:'inconnu',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens.'},
    {sense:'l\'invisible',concept:'Absence/Invisible',description:'État de ce qui n\'est pas perceptible par les sens.'},
    {sense:'médire',concept:'Médisance/Calomnie',description:'Acte extérieur de parler de quelqu\'un en son absence. La médisance sort de celui qui parle et atteint la réputation de l\'absent. C\'est un acte directionnel et ponctuel.'},
    {sense:'calomnier',concept:'Médisance/Calomnie',description:'Acte extérieur de parler de quelqu\'un en son absence.'},
    {sense:'forêt dense',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'creux',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r5) { done++; console.log('[' + done + '/' + total + '] gyb — ' + r5.total + ' sens → ' + r5.concepts.length + ' concepts (' + r5.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── slw ──
  const r6 = await insert('slw', [
    {sense:'prier',concept:'Prière/Invocation',description:'Acte extérieur de se tourner vers Dieu par des paroles et des gestes. La prière sort de celui qui prie et se dirige vers Dieu. C\'est un acte directionnel, régulier et structuré.'},
    {sense:'prière rituelle',concept:'Prière/Invocation',description:'Acte extérieur de se tourner vers Dieu.'},
    {sense:'invoquer',concept:'Prière/Invocation',description:'Acte extérieur de se tourner vers Dieu.'},
    {sense:'bénir',concept:'Prière/Invocation',description:'Acte extérieur de se tourner vers Dieu.'},
    {sense:'lieu de prière',concept:'Prière/Invocation',description:'Acte extérieur de se tourner vers Dieu.'},
    {sense:'suivre de près',concept:'Proximité/Attachement',description:'Acte de rester proche, de suivre de manière continue. La proximité est un état relationnel entre deux parties.'},
    {sense:'milieu',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'deuxième dans une course',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r6) { done++; console.log('[' + done + '/' + total + '] slw — ' + r6.total + ' sens → ' + r6.concepts.length + ' concepts (' + r6.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── rzq ──
  const r7 = await insert('rzq', [
    {sense:'pourvoir',concept:'Subsistance/Provision',description:'Acte extérieur d\'accorder les moyens de vivre. La subsistance sort de celui qui pourvoit et atteint celui qui reçoit. C\'est un acte directionnel et peut être permanent ou ponctuel.'},
    {sense:'nourrir',concept:'Subsistance/Provision',description:'Acte extérieur d\'accorder les moyens de vivre.'},
    {sense:'subsistance',concept:'Subsistance/Provision',description:'Acte extérieur d\'accorder les moyens de vivre.'},
    {sense:'moyens de vivre',concept:'Subsistance/Provision',description:'Acte extérieur d\'accorder les moyens de vivre.'},
    {sense:'part',concept:'Subsistance/Provision',description:'Acte extérieur d\'accorder les moyens de vivre.'},
    {sense:'gratitude pour la subsistance',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r7) { done++; console.log('[' + done + '/' + total + '] rzq — ' + r7.total + ' sens → ' + r7.concepts.length + ' concepts (' + r7.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── nfq ──
  const r8 = await insert('nfq', [
    {sense:'dépenser',concept:'Dépense/Distribution',description:'Acte extérieur de faire sortir des biens de soi vers les autres. La dépense sort de celui qui donne et atteint celui qui reçoit. C\'est un acte directionnel et ponctuel.'},
    {sense:'distribuer',concept:'Dépense/Distribution',description:'Acte extérieur de faire sortir des biens de soi vers les autres.'},
    {sense:'s\'épuiser',concept:'Dépense/Distribution',description:'Acte extérieur de faire sortir des biens de soi vers les autres.'},
    {sense:'passer à travers',concept:'Passage/Traversée',description:'Acte de passer d\'un côté à l\'autre. Le passage est un mouvement directionnel à travers un espace.'},
    {sense:'tunnel',concept:'Passage/Traversée',description:'Acte de passer d\'un côté à l\'autre.'},
    {sense:'hypocrisie',concept:'Hypocrisie/Double-face',description:'État intérieur de duplicité où l\'apparence extérieure contredit la réalité intérieure. L\'hypocrite entre par une porte et sort par une autre.'},
    {sense:'hypocrite',concept:'Hypocrisie/Double-face',description:'État intérieur de duplicité.'},
    {sense:'mourir',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'vendre',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r8) { done++; console.log('[' + done + '/' + total + '] nfq — ' + r8.total + ' sens → ' + r8.concepts.length + ' concepts (' + r8.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== PAUSE — 8 racines faites, ' + (total-done) + ' restantes ===')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
