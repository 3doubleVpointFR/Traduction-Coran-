const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 104, total = 2321

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

  // 105. llh (اله) — adorer, divinité, Dieu
  r = await ins('llh', [
    {sense:'adorer',concept:'Adoration/Culte',description:"Acte de diriger sa dévotion totale vers quelque chose. L'adoration est un mouvement intérieur qui se manifeste extérieurement par des actes de soumission et de service. Elle implique une reconnaissance de supériorité absolue de l'objet adoré."},
    {sense:'servir',concept:'Adoration/Culte',description:"Se consacrer au service d'un être supérieur. Le service est un acte extérieur continu et volontaire qui traduit la reconnaissance d'une autorité."},
    {sense:'se consacrer au culte',concept:'Adoration/Culte',description:"Se vouer entièrement aux actes de dévotion. C'est un engagement permanent qui oriente toute la vie vers l'objet d'adoration."},
    {sense:'divinité',concept:'Divinité',description:"L'être qui est l'objet de l'adoration. La divinité est ce vers quoi convergent tous les actes de culte. C'est une réalité permanente qui transcende celui qui adore."},
    {sense:'dieu',concept:'Divinité',description:"Être reconnu comme supérieur et digne d'adoration. Le dieu est celui qui possède les attributs de perfection et vers qui on dirige le culte."},
    {sense:'Dieu',concept:'Divinité',description:"L'Être qui existe nécessairement par Lui-même, comprenant tous les attributs de perfection. C'est le seul vrai dieu, la réalité ultime vers laquelle tend toute adoration."},
    {sense:'théologie',concept:'Divinité',description:"Science de l'être et des attributs de Dieu. C'est la connaissance rationnelle qui porte sur la nature divine et les articles de croyance."},
    {sense:'être confus',concept:'Confusion/Perplexité',description:"État intérieur de trouble et d'égarement. La confusion est un état passif où l'on ne sait plus quelle direction prendre. Ce sens est lié à l'idée que celui qui cherche Dieu sans Le trouver est plongé dans la perplexité."},
    {sense:'réduire en esclavage',concept:'Asservissement',description:"Acte extérieur de prise de contrôle sur quelqu'un. L'asservissement transforme l'autre en instrument soumis. C'est directionnel : il sort du maître et atteint l'esclave."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] llh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 106. thlk (ذلك) — pronom démonstratif, pas de sens racine
  console.log('[SKIP] thlk (ذلك) — pronom démonstratif, pas de contenu sémantique dans le Lane\'s')

  // 107. alk (ألك) — mâcher, message, ange
  r = await ins('alk', [
    {sense:'mâcher',concept:'Mastication',description:"Acte physique de broyer avec les dents. La mastication est un mouvement répétitif qui transforme ce qui est dur en quelque chose d'assimilable. C'est concret, extérieur et observable."},
    {sense:'mâchonner le mors',concept:'Mastication',description:"Action du cheval qui mâche son mors. Sens physique concret lié au mouvement des mâchoires sur un objet dur."},
    {sense:'message',concept:'Message/Envoi',description:"Communication envoyée d'une personne à une autre. Le message sort de l'émetteur et atteint le destinataire. C'est un acte directionnel qui transporte un contenu à travers la distance."},
    {sense:'messager',concept:'Message/Envoi',description:"Celui qui porte le message. Le messager est l'intermédiaire entre l'émetteur et le destinataire. Il transporte la parole d'un point à un autre."},
    {sense:'envoyer un message',concept:'Message/Envoi',description:"Acte de confier une communication à quelqu'un pour qu'il la transmette. C'est un acte extérieur volontaire et directionnel."},
    {sense:'ange',concept:'Message/Envoi',description:"Être qui porte les messages entre le divin et l'humain. L'ange est l'intermédiaire par excellence, celui qui transmet la parole de Dieu aux hommes."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] alk — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 108. hmm (همم) — intention, souci, grandeur
  r = await ins('hmm', [
    {sense:'avoir l\'intention',concept:'Intention/Résolution',description:"Acte intérieur de diriger sa volonté vers un objectif. L'intention est le mouvement premier de la volonté, avant l'action. Elle est ponctuelle et orientée vers l'avenir."},
    {sense:'méditer',concept:'Intention/Résolution',description:"Acte de réflexion profonde qui précède une décision. La méditation est intérieure et préparatoire — elle mène à la résolution."},
    {sense:'désirer',concept:'Intention/Résolution',description:"Mouvement de la volonté vers quelque chose sans nécessairement agir. Le désir est un état intérieur orienté vers un objet."},
    {sense:'résolution',concept:'Intention/Résolution',description:"Détermination ferme à accomplir quelque chose. La résolution est le stade avancé de l'intention — elle est forte et engagée."},
    {sense:'chagriner',concept:'Souci/Inquiétude',description:"Rendre quelqu'un triste ou inquiet. Le chagrin est causé par une situation extérieure et atteint celui qui le subit. C'est directionnel."},
    {sense:'inquiéter',concept:'Souci/Inquiétude',description:"Provoquer un état de trouble chez quelqu'un. L'inquiétude sort de la situation et atteint la personne concernée."},
    {sense:'souci',concept:'Souci/Inquiétude',description:"État intérieur de préoccupation causé par une situation. Le souci est passif — il est subi, pas choisi."},
    {sense:'roi noble',concept:'Grandeur/Noblesse',description:"Celui qui aspire au plus haut et qui se distingue par son courage et sa générosité. La noblesse est une qualité permanente qui rayonne vers l'extérieur."},
    {sense:'vieux décrépit',concept:'Décrépitude',description:"État physique de dégradation liée à l'âge extrême. C'est un état permanent et irréversible qui affecte le corps."},
    {sense:'créature venimeuse',concept:'Divers',description:"Sens physique isolé. Scorpion, serpent ou tout animal venimeux."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hmm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 109. dhyy (ذهي) — pas trouvé dans le Lane's
  console.log('[SKIP] dhyy (ذهي) — racine non trouvée dans le Lane\'s')

  // 110. dhhy (ذهي) — doublon de dhyy, pas trouvé
  console.log('[SKIP] dhhy (ذهي) — doublon de dhyy, racine non trouvée dans le Lane\'s')

  // 111. ma (ماى) — particule, pas de racine sémantique dans le Lane's
  console.log('[SKIP] ma (ماى) — particule interrogative/négative, pas de contenu racine dans le Lane\'s')

  // 112. lyk (ليك) — pas de contenu
  console.log('[SKIP] lyk (ليك) — pas de contenu sémantique dans le Lane\'s')

  // 113. šer (شعر) — savoir, cheveux, poésie, signe
  r = await ins('šer', [
    {sense:'savoir',concept:'Connaissance/Perception',description:"Acte intérieur de saisir la réalité. Le savoir est une acquisition permanente qui reste chez celui qui le possède. C'est la compréhension profonde de quelque chose."},
    {sense:'percevoir',concept:'Connaissance/Perception',description:"Saisir par les sens ou l'intellect. La perception est la connaissance fine des détails — elle implique une attention aux particularités."},
    {sense:'comprendre',concept:'Connaissance/Perception',description:"Saisir le sens profond de quelque chose. La compréhension va au-delà de la simple perception — elle atteint la structure interne de la réalité."},
    {sense:'faire savoir',concept:'Connaissance/Perception',description:"Acte extérieur de transmettre une connaissance à quelqu'un. Le savoir sort de celui qui sait et atteint celui qui ne savait pas."},
    {sense:'les cinq sens',concept:'Connaissance/Perception',description:"Les cinq facultés de perception : l'ouïe, la vue, l'odorat, le goût et le toucher. Ce sont les canaux par lesquels la connaissance du monde extérieur pénètre chez l'homme."},
    {sense:'poésie',concept:'Poésie/Création',description:"Création par la parole mesurée. La poésie est un acte extérieur qui sort du poète et atteint l'auditeur. Elle implique une connaissance profonde qui s'exprime par le langage."},
    {sense:'poète',concept:'Poésie/Création',description:"Celui qui crée par la parole. Le poète est celui qui sait et qui exprime ce savoir dans une forme mesurée."},
    {sense:'menteur',concept:'Poésie/Création',description:"Extension péjorative du poète — celui qui invente. Le lien entre poésie et mensonge tient à la création de réalités par la parole."},
    {sense:'cheveux',concept:'Cheveux/Pilosité',description:"Ce qui pousse sur le corps des êtres vivants. Les cheveux sont extérieurs, visibles et permanents. Ils sont la manifestation physique de la vitalité."},
    {sense:'poil',concept:'Cheveux/Pilosité',description:"Pilosité du corps. Le poil de chèvre notamment est un matériau concret utilisé pour le tissage."},
    {sense:'signe',concept:'Signe/Signal',description:"Ce qui permet d'identifier et de reconnaître. Le signe est extérieur, visible et permanent. Il sert de repère dans la guerre ou le voyage."},
    {sense:'cri de ralliement',concept:'Signe/Signal',description:"Signal sonore par lequel un groupe se reconnaît. Le cri sort de celui qui le lance et atteint ceux qui l'entendent."},
    {sense:'orge',concept:'Divers',description:"Céréale cultivée, grain concret. Sens physique isolé sans lien sémantique avec les autres."},
    {sense:'étoile Sirius',concept:'Divers',description:"Étoile brillante du ciel. Sens astronomique isolé."},
    {sense:'lieu de culte',concept:'Signe/Signal',description:"Lieu marqué où l'on accomplit les rites. Le lieu de culte est un espace identifié par des signes qui le distinguent du reste."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šer — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 114. mn (من) — bienfait, reproche, quantité
  r = await ins('mn', [
    {sense:'accorder un bienfait',concept:'Bienfait/Don',description:"Acte extérieur de gratifier quelqu'un d'un bien. Le don sort du donneur et atteint le bénéficiaire. C'est un acte volontaire, directionnel et généreux."},
    {sense:'donner',concept:'Bienfait/Don',description:"Transférer quelque chose à quelqu'un. Le don est un mouvement de l'avoir vers l'autre."},
    {sense:'faveur',concept:'Bienfait/Don',description:"Bien accordé gratuitement. La faveur est un acte de générosité qui crée un lien entre celui qui donne et celui qui reçoit."},
    {sense:'obligation',concept:'Bienfait/Don',description:"Lien créé par le bienfait reçu. L'obligation est la dette morale que le bénéficiaire porte envers le donneur."},
    {sense:'reprocher un bienfait',concept:'Reproche/Rappel',description:"Acte extérieur de rappeler à quelqu'un ce qu'on lui a donné. Le reproche sort de celui qui a donné et atteint celui qui a reçu. C'est un acte qui dégrade la générosité du don initial."},
    {sense:'très généreux',concept:'Bienfait/Don',description:"Celui qui donne abondamment. La générosité est une qualité permanente qui se manifeste extérieurement par des actes de don répétés."},
    {sense:'combien',concept:'Quantité/Mesure',description:"Interrogation sur le nombre ou la quantité. La quantité est objective et mesurable — elle porte sur le dénombrement des choses."},
    {sense:'enveloppe florale',concept:'Divers',description:"Calice d'une fleur, spathe du palmier. Sens botanique concret isolé."},
    {sense:'corde de puits',concept:'Divers',description:"Corde principale d'un puits. Sens physique concret isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 14 terminé — ' + done + '/2321 (4 skips: thlk, dhyy, dhhy, ma, lyk) ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
