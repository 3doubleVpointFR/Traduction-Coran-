const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 134, total = 2321

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

  // SKIP nhn — pronom "nous"
  console.log('[SKIP] nhn — pronom personnel "nous"')
  // SKIP mey — intestins seulement
  console.log('[SKIP] mey — intestins, trop limité')

  // rbh (ربح) — gagner, profit
  r = await ins('rbh', [
    {sense:'gagner',concept:'Gain/Profit',description:"Acte extérieur d'obtenir un avantage matériel par le commerce ou l'effort. Le gain sort de la transaction et atteint celui qui en bénéficie. C'est directionnel et mesurable."},
    {sense:'profit',concept:'Gain/Profit',description:"Résultat positif d'une transaction. Le profit est ce qui reste après l'effort — c'est un surplus qui enrichit celui qui le reçoit."},
    {sense:'commerce profitable',concept:'Gain/Profit',description:"Échange qui rapporte plus qu'il ne coûte. Le commerce profitable est un mouvement réciproque qui laisse un excédent."},
    {sense:'donner du profit',concept:'Gain/Profit',description:"Faire en sorte que quelqu'un obtienne un gain. C'est un acte extérieur directionnel."},
    {sense:'chercher le gain',concept:'Gain/Profit',description:"Se mettre en quête d'un profit. La recherche du gain est un mouvement volontaire orienté vers un objectif matériel."},
    {sense:'être confus',concept:'Divers',description:"État de perplexité. Sens isolé sans lien évident avec le gain."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] rbh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // tjr (تجر) — commerce, acheter et vendre
  r = await ins('tjr', [
    {sense:'commercer',concept:'Commerce',description:"Acte extérieur d'acheter et vendre pour obtenir un gain. Le commerce est un mouvement réciproque entre deux parties — chacun donne et reçoit. C'est un acte volontaire orienté vers le profit."},
    {sense:'commerce profitable',concept:'Commerce',description:"Échange qui rapporte un bénéfice. Le commerce lucratif est le but de l'activité marchande."},
    {sense:'marchand',concept:'Commerce',description:"Celui qui pratique le commerce de manière habituelle. Le marchand est défini par son activité permanente d'achat et de vente."},
    {sense:'rivaliser dans le commerce',concept:'Commerce',description:"Se mesurer à un autre dans la pratique commerciale. La rivalité marchande est une compétition extérieure et mesurable."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] tjr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ayh (أيه) — pas trouvé
  console.log('[SKIP] ayh — racine non trouvée dans le Lane\'s')

  // nss (نسس) — marcher doucement, vent froid, créature
  r = await ins('nss', [
    {sense:'marcher doucement',concept:'Mouvement doux',description:"Aller à un rythme lent et tranquille. Le mouvement doux est un déplacement mesuré, sans hâte ni violence."},
    {sense:'vent froid',concept:'Divers',description:"Souffle d'air glacé. Sens météorologique concret isolé."},
    {sense:'créature étrange',concept:'Divers',description:"Être à l'apparence inhabituelle, sautillant sur un pied. Sens légendaire isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nss — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dhwy (ذوي) — possesseur, essence, nature
  r = await ins('dhwy', [
    {sense:'possesseur',concept:'Possession/Essence',description:"Celui qui détient quelque chose. Le possesseur est défini par ce qu'il a — la possession est un lien permanent entre une personne et ce qui lui appartient."},
    {sense:'propriétaire',concept:'Possession/Essence',description:"Celui qui a la maîtrise de quelque chose. La propriété est un droit permanent qui définit la relation entre une personne et un objet."},
    {sense:'doué de',concept:'Possession/Essence',description:"Celui qui possède une qualité ou un attribut. Être doué de quelque chose c'est avoir cette chose comme partie intégrante de soi."},
    {sense:'essence',concept:'Possession/Essence',description:"La nature fondamentale d'une chose. L'essence est ce qui fait qu'une chose est ce qu'elle est — c'est la réalité intrinsèque et permanente."},
    {sense:'propriété essentielle',concept:'Possession/Essence',description:"Qualité constitutive d'un être. La propriété essentielle est innée, originelle et ne peut pas être séparée de celui qui la possède."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhwy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dhwn (ذون) — richesse, défaut
  r = await ins('dhwn', [
    {sense:'être riche',concept:'Richesse',description:"État de posséder en abondance. La richesse est un état permanent d'aisance matérielle qui procure le confort et la liberté."},
    {sense:'aisance',concept:'Richesse',description:"Condition de vie confortable et sans manque. L'aisance est l'absence de besoin."},
    {sense:'défaut',concept:'Divers',description:"Vice ou imperfection. Sens isolé opposé à la richesse — le défaut est un manque dans la nature de quelque chose."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhwn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ell (عل) — boire une deuxième fois, cause, maladie, divertir
  r = await ins('ell', [
    {sense:'abreuver une seconde fois',concept:'Répétition/Redoublement',description:"Donner à boire après avoir déjà donné à boire. Le redoublement est un acte qui ajoute une couche supplémentaire à ce qui a déjà été fait."},
    {sense:'teindre une seconde fois',concept:'Répétition/Redoublement',description:"Appliquer une teinture sur ce qui a déjà été teint. La deuxième couche renforce et approfondit le résultat."},
    {sense:'redoubler',concept:'Répétition/Redoublement',description:"Faire quelque chose une fois de plus. Le redoublement intensifie et confirme l'action première."},
    {sense:'cause',concept:'Cause/Raison',description:"Ce qui produit un effet. La cause est ce qui précède et explique un résultat — elle est le fondement de l'événement."},
    {sense:'raison',concept:'Cause/Raison',description:"Motif qui justifie une action ou un état. La raison est le pourquoi des choses."},
    {sense:'prétexte',concept:'Cause/Raison',description:"Raison invoquée qui n'est pas la vraie cause. Le prétexte est une cause apparente qui cache la cause réelle."},
    {sense:'maladie',concept:'Maladie/Faiblesse',description:"Affliction qui atteint le corps. La maladie est un état de faiblesse qui empêche le fonctionnement normal."},
    {sense:'malade',concept:'Maladie/Faiblesse',description:"Celui qui souffre d'une maladie. Le malade est diminué dans sa capacité d'agir."},
    {sense:'divertir',concept:'Divers',description:"Occuper quelqu'un pour le détourner de son souci. Le divertissement est un acte extérieur qui détourne l'attention."},
    {sense:"s'occuper",concept:'Divers',description:"Se consacrer à quelque chose pour passer le temps. L'occupation est un acte volontaire de remplissage du temps."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ell — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // mthl (مثل) — se tenir debout, ressembler, exemple, proverbe
  r = await ins('mthl', [
    {sense:'se tenir debout',concept:'Station/Présence',description:"Acte de se dresser devant quelqu'un. La station debout est une posture de présence active — on se montre et on fait face."},
    {sense:'dresser',concept:'Station/Présence',description:"Mettre debout, faire apparaître. Dresser quelque chose c'est le rendre visible et présent."},
    {sense:'ressembler',concept:'Ressemblance/Exemple',description:"Avoir une similitude avec quelque chose d'autre. La ressemblance est un lien entre deux réalités qui partagent des traits communs."},
    {sense:'imiter',concept:'Ressemblance/Exemple',description:"Reproduire les traits de quelqu'un d'autre. L'imitation est un acte volontaire qui copie un modèle extérieur."},
    {sense:'exemple',concept:'Ressemblance/Exemple',description:"Ce qui sert de modèle ou d'illustration. L'exemple est une réalité concrète qui représente une réalité plus large."},
    {sense:'proverbe',concept:'Ressemblance/Exemple',description:"Parole qui illustre une vérité par analogie. Le proverbe est un exemple linguistique qui circule entre les gens."},
    {sense:'parabole',concept:'Ressemblance/Exemple',description:"Récit qui illustre une leçon par comparaison. La parabole est un exemple narratif qui fait comprendre l'abstrait par le concret."},
    {sense:'semblable',concept:'Ressemblance/Exemple',description:"Ce qui est pareil à autre chose. Le semblable est le résultat de la ressemblance."},
    {sense:'mutiler',concept:'Divers',description:"Sens physique concret de couper ou châtrer. Acte violent isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mthl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dwa (ضوأ) — lumière, briller, éclairer
  r = await ins('dwa', [
    {sense:'donner de la lumière',concept:'Lumière/Éclairage',description:"Acte de produire de la clarté. La lumière sort de sa source et atteint tout ce qui l'entoure. C'est directionnel et transformateur — elle rend visible ce qui était caché."},
    {sense:'briller',concept:'Lumière/Éclairage',description:"Émettre de la lumière de manière continue. La brillance est un état permanent de rayonnement qui sort de l'objet lumineux et se propage."},
    {sense:'éclairer',concept:'Lumière/Éclairage',description:"Rendre visible en projetant de la lumière. L'éclairage est un acte extérieur qui transforme l'obscurité en clarté."},
    {sense:'mettre en lumière',concept:'Lumière/Éclairage',description:"Révéler ce qui était caché. La mise en lumière est un acte de dévoilement — elle fait apparaître la vérité."},
    {sense:'se tenir dans l\'ombre pour observer',concept:'Observation secrète',description:"Être dans le noir pour voir les autres sans être vu. L'observation secrète est un acte de perception unidirectionnel — on voit sans être vu."},
    {sense:'chercher la lumière',concept:'Lumière/Éclairage',description:"Demander à être éclairé, au sens propre ou figuré. Chercher la lumière c'est chercher la guidance et la compréhension."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dwa — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hwl (حول) — changer, transformer, ruse, année, force
  r = await ins('hwl', [
    {sense:'changer',concept:'Changement/Transformation',description:"Acte de passer d'un état à un autre. Le changement est un mouvement qui transforme la nature ou la condition de quelque chose. C'est permanent et irréversible."},
    {sense:'transformer',concept:'Changement/Transformation',description:"Modifier essentiellement quelque chose. La transformation est un changement profond qui altère la substance même."},
    {sense:'déplacer',concept:'Changement/Transformation',description:"Faire passer d'un lieu ou état à un autre. Le déplacement est un changement spatial ou catégoriel."},
    {sense:'se détourner',concept:'Changement/Transformation',description:"Changer de direction ou d'avis. Le détournement est un changement d'orientation."},
    {sense:'ruse',concept:'Ruse/Stratagème',description:"Moyen habile pour obtenir ce qu'on veut. La ruse est un acte mental qui conçoit un plan détourné pour atteindre un objectif."},
    {sense:'stratagème',concept:'Ruse/Stratagème',description:"Plan élaboré pour contourner un obstacle. Le stratagème est une intelligence appliquée à la résolution de problèmes."},
    {sense:'force',concept:'Ruse/Stratagème',description:"Puissance et capacité d'agir. La force est la capacité de transformer les choses par sa propre puissance."},
    {sense:'année',concept:'Temps/Cycle',description:"Cycle complet de temps. L'année est un retour au point de départ — le changement cyclique par excellence."},
    {sense:'autour de',concept:'Espace/Environnement',description:"Ce qui entoure quelque chose. L'entourage est l'espace qui enveloppe un centre."},
    {sense:'louche',concept:'Divers',description:"Celui dont les yeux ne regardent pas dans la même direction. Sens physique concret."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hwl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // dhb (ذهب) — aller, partir, or, école de pensée
  r = await ins('dhb', [
    {sense:'aller',concept:'Départ/Mouvement',description:"Acte de se déplacer d'un point à un autre. Aller est un mouvement directionnel vers l'avant — on quitte un lieu pour en rejoindre un autre."},
    {sense:'partir',concept:'Départ/Mouvement',description:"Acte de quitter un lieu. Le départ est un mouvement d'éloignement qui rompt avec la position initiale."},
    {sense:'passer',concept:'Départ/Mouvement',description:"Se déplacer en traversant. Le passage est un mouvement qui ne s'arrête pas — il va au-delà."},
    {sense:'disparaître',concept:'Départ/Mouvement',description:"Cesser d'être visible ou présent. La disparition est le résultat final du départ — on n'est plus là."},
    {sense:'or',concept:'Or/Richesse',description:"Métal précieux jaune. L'or est concret, permanent et universellement valorisé. C'est la richesse matérielle par excellence."},
    {sense:'dorer',concept:'Or/Richesse',description:"Recouvrir d'or. La dorure est un acte extérieur qui donne l'apparence de la richesse."},
    {sense:'école de pensée',concept:'Doctrine/Voie',description:"Voie de pensée adoptée par un groupe. L'école de pensée est un chemin intellectuel suivi — elle indique la direction de la réflexion."},
    {sense:'suivre une doctrine',concept:'Doctrine/Voie',description:"Adopter une voie de pensée religieuse ou philosophique. Suivre une doctrine c'est choisir une direction pour sa pensée."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // trk (ترك) — laisser, abandonner, quitter
  r = await ins('trk', [
    {sense:'laisser',concept:'Abandon/Renoncement',description:"Acte de ne plus s'occuper de quelque chose. Laisser c'est se retirer d'une situation ou d'un objet. C'est un acte volontaire de désengagement."},
    {sense:'abandonner',concept:'Abandon/Renoncement',description:"Quitter définitivement quelque chose ou quelqu'un. L'abandon est un départ sans retour — on rompt le lien de manière permanente."},
    {sense:'renoncer',concept:'Abandon/Renoncement',description:"Cesser volontairement de poursuivre quelque chose. Le renoncement est un acte intérieur de décision qui se manifeste par l'arrêt de l'action."},
    {sense:'quitter',concept:'Abandon/Renoncement',description:"Se séparer de quelqu'un ou quelque chose. Le départ est un mouvement d'éloignement volontaire."},
    {sense:'délaisser',concept:'Abandon/Renoncement',description:"Cesser de s'intéresser à quelqu'un. Le délaissement est un abandon progressif qui laisse l'autre seul."},
    {sense:'renoncer mutuellement',concept:'Abandon/Renoncement',description:"Les deux parties cessent de poursuivre une affaire. Le renoncement mutuel est un désengagement réciproque."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] trk — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 17 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
