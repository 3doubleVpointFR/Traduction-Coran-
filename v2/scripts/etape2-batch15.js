const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 109, total = 2321

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

  // --- D'abord, insérer les particules skippées du batch 14 ---

  r = await ins('thlk', [
    {sense:'celui-là',concept:'Démonstratif',description:"Pronom démonstratif d'éloignement. Désigne ce qui est distant dans l'espace ou le discours. C'est un outil grammatical qui pointe vers un référent déjà connu de l'interlocuteur."},
    {sense:'cela',concept:'Démonstratif',description:"Référence à quelque chose de déjà mentionné ou connu. Le démonstratif crée un lien entre le discours actuel et un objet ou une idée précédemment évoquée."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] thlk — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('dhyy', [
    {sense:'non trouvé',concept:'Non trouvé',description:"Racine non attestée dans le Lane's Arabic-English Lexicon. Possible variante orthographique ou erreur de segmentation."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhyy — 1 sens → 1 concept (Non trouvé) — reste ' + (total-done)) }

  r = await ins('dhhy', [
    {sense:'non trouvé',concept:'Non trouvé',description:"Racine non attestée dans le Lane's Arabic-English Lexicon. Doublon probable de dhyy."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] dhhy — 1 sens → 1 concept (Non trouvé) — reste ' + (total-done)) }

  r = await ins('ma', [
    {sense:'quoi',concept:'Particule',description:"Particule interrogative ou négative. Sert à poser une question sur la nature d'une chose ou à nier une proposition. C'est un outil grammatical fondamental."},
    {sense:'ne...pas',concept:'Particule',description:"Négation. Inverse le sens de la proposition. C'est un outil grammatical qui transforme l'affirmation en négation."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ma — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('lyk', [
    {sense:'à toi',concept:'Particule',description:"Préposition de direction vers la deuxième personne. C'est un outil grammatical qui indique le destinataire d'une action."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] lyk — 1 sens → 1 concept (Particule) — reste ' + (total-done)) }

  // --- Maintenant les 10 nouvelles racines ---

  // ghw (غشو) — couvrir, voiler, envahir
  r = await ins('ghw', [
    {sense:'couvrir',concept:'Couverture/Voile',description:"Acte extérieur de placer quelque chose par-dessus pour cacher ou protéger. La couverture sort de celui qui couvre et atteint ce qui est couvert. C'est directionnel et peut être permanent."},
    {sense:'cacher',concept:'Couverture/Voile',description:"Rendre invisible en mettant un voile dessus. C'est l'acte de soustraire quelque chose à la vue ou à la connaissance."},
    {sense:'voiler',concept:'Couverture/Voile',description:"Mettre un voile sur quelque chose. Le voile est un obstacle entre l'observateur et la réalité. Il empêche la perception."},
    {sense:'se couvrir d\'un vêtement',concept:'Couverture/Voile',description:"Acte réflexif de se couvrir soi-même pour ne pas voir ni entendre. C'est un refus volontaire de percevoir la réalité."},
    {sense:'envahir',concept:'Invasion/Submersion',description:"Acte extérieur de venir sur quelqu'un de manière soudaine et irrésistible. L'invasion est directionnelle, violente et inattendue."},
    {sense:'submerger',concept:'Invasion/Submersion',description:"Recouvrir entièrement, comme l'eau qui monte. La submersion est totale — elle ne laisse rien à découvert."},
    {sense:'évanouissement',concept:'Perte de conscience',description:"Perte momentanée de conscience. L'évanouissement est un voile qui tombe sur l'esprit — il empêche toute perception pendant sa durée."},
    {sense:'trouble de l\'entendement',concept:'Perte de conscience',description:"Voile sur l'intelligence qui empêche de comprendre. C'est un état passif où la faculté de raisonner est obstruée."},
    {sense:'couverture',concept:'Couverture/Voile',description:"L'objet qui sert à couvrir. La couverture est concrète et extérieure — elle s'interpose entre deux réalités."},
    {sense:'film sur les yeux',concept:'Couverture/Voile',description:"Voile physique ou métaphorique sur les yeux ou le cœur. Ce qui empêche de voir la vérité."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ghw — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hm (هم) — même racine que hmm mais word_key différent
  r = await ins('hm', [
    {sense:'avoir l\'intention',concept:'Intention/Résolution',description:"Acte intérieur de diriger sa volonté vers un objectif. L'intention est le mouvement premier de la volonté, avant l'action."},
    {sense:'méditer',concept:'Intention/Résolution',description:"Réflexion profonde qui précède une décision. La méditation est intérieure et préparatoire."},
    {sense:'désirer',concept:'Intention/Résolution',description:"Mouvement de la volonté vers quelque chose sans nécessairement agir. Le désir est orienté vers un objet."},
    {sense:'résolution',concept:'Intention/Résolution',description:"Détermination ferme à accomplir quelque chose. La résolution est le stade avancé de l'intention."},
    {sense:'chagriner',concept:'Souci/Inquiétude',description:"Rendre quelqu'un triste ou inquiet. Le chagrin est causé par une situation extérieure et atteint celui qui le subit."},
    {sense:'inquiéter',concept:'Souci/Inquiétude',description:"Provoquer un état de trouble chez quelqu'un. L'inquiétude sort de la situation et atteint la personne."},
    {sense:'souci',concept:'Souci/Inquiétude',description:"État intérieur de préoccupation causé par une situation. Le souci est passif — il est subi, pas choisi."},
    {sense:'affaire difficile',concept:'Souci/Inquiétude',description:"Situation qui cause du souci et de la détresse. C'est la cause extérieure qui provoque l'inquiétude."},
    {sense:'roi noble',concept:'Grandeur/Noblesse',description:"Celui qui aspire au plus haut par son courage et sa générosité. La noblesse est une qualité permanente."},
    {sense:'vieux décrépit',concept:'Divers',description:"État physique de dégradation liée à l'âge extrême."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // zwd (زود) — provisions, viatique
  r = await ins('zwd', [
    {sense:'faire des provisions',concept:'Provisions/Viatique',description:"Acte de rassembler ce qui est nécessaire pour un voyage ou un séjour. Les provisions sont concrètes, extérieures et essentielles à la survie."},
    {sense:'donner des provisions',concept:'Provisions/Viatique',description:"Acte extérieur de fournir à quelqu'un ce dont il a besoin pour son voyage. Le don de provisions sort du donneur et atteint le voyageur."},
    {sense:'se munir',concept:'Provisions/Viatique',description:"Acte réflexif de se préparer en prenant ce qui est nécessaire. Se munir est un acte volontaire et prévoyant."},
    {sense:'provisions',concept:'Provisions/Viatique',description:"Ce que l'on emporte pour le voyage. Par extension, toute bonne action qui prépare pour l'au-delà."},
    {sense:'sac de voyage',concept:'Récipient',description:"Contenant en cuir pour les provisions. Le récipient est concret et fonctionnel — il sert à transporter."},
    {sense:'outre en cuir',concept:'Récipient',description:"Sac en peau pour transporter l'eau. Sens concret et physique lié au voyage."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] zwd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // lhm (لهم) — inspirer, engloutir
  r = await ins('lhm', [
    {sense:'inspirer',concept:'Inspiration',description:"Acte divin de mettre dans l'esprit de quelqu'un la direction vers le bien. L'inspiration sort de la source divine et atteint l'homme. C'est directionnel, ponctuel et transformateur."},
    {sense:'suggérer',concept:'Inspiration',description:"Acte de mettre une idée dans l'esprit de quelqu'un. La suggestion est extérieure et directionnelle — elle vient de l'extérieur et pénètre dans l'esprit."},
    {sense:'guider vers le bien',concept:'Inspiration',description:"Orientation vers ce qui est bon et profitable. La guidance par inspiration est un acte de bienveillance qui oriente sans contraindre."},
    {sense:'avaler d\'un coup',concept:'Engloutissement',description:"Acte physique d'avaler goulûment sans mâcher. L'engloutissement est rapide, total et irréversible."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] lhm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // edb (عذب) — doux, châtiment, s'abstenir
  r = await ins('edb', [
    {sense:'doux',concept:'Douceur',description:"Qualité de ce qui est agréable au goût, facile à boire ou à avaler. La douceur est une qualité intrinsèque permanente qui se perçoit par les sens. C'est l'opposé de l'amer et du salé."},
    {sense:'sucré',concept:'Douceur',description:"Ce qui a un goût agréable. Le sucré attire et satisfait celui qui le goûte."},
    {sense:'eau douce',concept:'Douceur',description:"Eau agréable à boire, par opposition à l'eau salée. La douceur de l'eau est une qualité physique mesurable."},
    {sense:'agréable',concept:'Douceur',description:"Ce qui plaît quand on le consomme. L'agrément est la réaction positive des sens face à la douceur."},
    {sense:'punir',concept:'Châtiment/Punition',description:"Acte extérieur d'infliger une souffrance pour corriger. La punition sort de celui qui punit et atteint celui qui est puni. C'est directionnel et sert d'avertissement aux autres."},
    {sense:'châtier',concept:'Châtiment/Punition',description:"Infliger un châtiment corporel ou moral. Le châtiment est une correction qui vise à empêcher la récidive."},
    {sense:'tourmenter',concept:'Châtiment/Punition',description:"Infliger une souffrance prolongée. Le tourment est un châtiment qui dure et qui ronge celui qui le subit."},
    {sense:'châtiment',concept:'Châtiment/Punition',description:"La souffrance infligée comme correction. Le châtiment est le résultat de l'acte de punir — il est visible et sert d'exemple."},
    {sense:'s\'abstenir',concept:'Abstention',description:"Acte volontaire de renoncer à quelque chose. L'abstention est un retrait intérieur qui se manifeste extérieurement par l'absence d'action."},
    {sense:'quitter',concept:'Abstention',description:"Acte de se séparer de quelque chose. Quitter est un mouvement d'éloignement volontaire."},
    {sense:'poussières flottant sur l\'eau',concept:'Divers',description:"Sens physique concret. Particules qui flottent à la surface de l'eau."},
    {sense:'arbre vénéneux',concept:'Divers',description:"Arbre qui tue les chameaux. Sens botanique isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] edb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // shaer (شعر) — même racine Lane's que šer, word_key différent
  r = await ins('shaer', [
    {sense:'savoir',concept:'Connaissance/Perception',description:"Acte intérieur de saisir la réalité. Le savoir est une acquisition permanente qui reste chez celui qui le possède."},
    {sense:'percevoir',concept:'Connaissance/Perception',description:"Saisir par les sens ou l'intellect. La perception est la connaissance fine des détails."},
    {sense:'comprendre',concept:'Connaissance/Perception',description:"Saisir le sens profond de quelque chose. La compréhension atteint la structure interne de la réalité."},
    {sense:'faire savoir',concept:'Connaissance/Perception',description:"Acte extérieur de transmettre une connaissance à quelqu'un. Le savoir sort de celui qui sait et atteint celui qui ignorait."},
    {sense:'poésie',concept:'Poésie/Création',description:"Création par la parole mesurée. La poésie sort du poète et atteint l'auditeur par le langage."},
    {sense:'poète',concept:'Poésie/Création',description:"Celui qui crée par la parole. Le poète exprime un savoir profond dans une forme mesurée."},
    {sense:'cheveux',concept:'Cheveux/Pilosité',description:"Ce qui pousse sur le corps des êtres vivants. Les cheveux sont extérieurs, visibles et permanents."},
    {sense:'signe',concept:'Signe/Signal',description:"Ce qui permet d'identifier et de reconnaître. Le signe est extérieur, visible et permanent."},
    {sense:'cri de ralliement',concept:'Signe/Signal',description:"Signal sonore par lequel un groupe se reconnaît. Le cri sort de celui qui le lance et atteint ceux qui l'entendent."},
    {sense:'orge',concept:'Divers',description:"Céréale cultivée, grain concret. Sens physique isolé."},
    {sense:'étoile Sirius',concept:'Divers',description:"Étoile brillante du ciel. Sens astronomique isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] shaer — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hza (هزأ) — moquer, ridiculiser
  r = await ins('hza', [
    {sense:'se moquer',concept:'Moquerie/Dérision',description:"Acte extérieur de tourner quelqu'un en ridicule. La moquerie sort de celui qui moque et atteint celui qui est moqué. C'est directionnel et dégradant — elle rabaisse l'autre."},
    {sense:'railler',concept:'Moquerie/Dérision',description:"Se moquer avec mépris. La raillerie est une forme de moquerie qui implique un sentiment de supériorité de celui qui raille."},
    {sense:'ridiculiser',concept:'Moquerie/Dérision',description:"Rendre quelqu'un ridicule aux yeux des autres. Le ridicule est un jugement social qui sort du moqueur et atteint la réputation de la cible."},
    {sense:'celui dont on se moque',concept:'Moquerie/Dérision',description:"Personne qui est l'objet de la dérision des autres. C'est la cible passive de la moquerie."},
    {sense:'moqueur',concept:'Moquerie/Dérision',description:"Celui qui se moque des autres de manière habituelle. La moquerie est son trait permanent."},
    {sense:'briser',concept:'Divers',description:"Sens physique de casser. Lien possible avec l'idée de détruire par la parole."},
    {sense:'froid intense',concept:'Divers',description:"Matin de froid extrême. Sens météorologique isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hza — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // mdd (مدد) — tirer, étendre, aider, encre
  r = await ins('mdd', [
    {sense:'tirer',concept:'Extension/Étirement',description:"Acte physique de tirer vers soi ou dans une direction. Le tirage est extérieur, directionnel et modifie la position de l'objet tiré."},
    {sense:'étendre',concept:'Extension/Étirement',description:"Augmenter la longueur ou l'étendue de quelque chose. L'extension transforme ce qui est compact en quelque chose de déployé."},
    {sense:'étirer',concept:'Extension/Étirement',description:"Allonger en exerçant une force. L'étirement modifie la forme de l'objet de manière visible."},
    {sense:'allonger',concept:'Extension/Étirement',description:"Rendre plus long. L'allongement est un changement mesurable de dimension."},
    {sense:'aider',concept:'Aide/Renfort',description:"Acte extérieur de fournir un soutien à quelqu'un. L'aide sort de celui qui aide et atteint celui qui est aidé. C'est directionnel et volontaire."},
    {sense:'renforcer',concept:'Aide/Renfort',description:"Augmenter la force ou le nombre d'un groupe. Le renfort est une extension appliquée aux forces humaines."},
    {sense:'troupe de renfort',concept:'Aide/Renfort',description:"Force militaire qui s'ajoute à l'armée existante. Le renfort est concret et change le rapport de force."},
    {sense:'augmenter',concept:'Abondance/Accroissement',description:"Faire croître en quantité. L'augmentation est un mouvement vers le plus qui transforme l'état initial."},
    {sense:'rendre abondant',concept:'Abondance/Accroissement',description:"Faire qu'il y ait beaucoup de quelque chose. L'abondance est l'état où rien ne manque."},
    {sense:'remplir',concept:'Abondance/Accroissement',description:"Faire qu'un récipient soit plein. Le remplissage est un acte qui comble un vide."},
    {sense:'durée',concept:'Mesure/Durée',description:"Étendue de temps. La durée est une extension appliquée au temps — elle a un début et une fin."},
    {sense:'limite de temps',concept:'Mesure/Durée',description:"Point extrême au-delà duquel le temps est épuisé. La limite marque la fin de l'extension temporelle."},
    {sense:'grand',concept:'Extension/Étirement',description:"Qui a une grande taille ou stature. La grandeur est une extension appliquée au corps humain."},
    {sense:'encre',concept:'Divers',description:"Ce avec quoi on écrit. L'encre est un liquide qui s'étend sur le papier."},
    {sense:'pus',concept:'Divers',description:"Matière purulente qui s'accumule dans une plaie. Sens médical concret."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mdd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // tghn (طغين → طغو) — transgresser, tyranniser
  r = await ins('tghn', [
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de franchir les limites justes. La transgression est un mouvement vers l'extérieur qui dépasse ce qui est permis. C'est un acte volontaire de désobéissance."},
    {sense:'excéder les limites',concept:'Transgression/Excès',description:"Dépasser la mesure commune et juste. L'excès est l'opposé de la modération — il détruit l'équilibre."},
    {sense:'s\'exalter dans l\'incroyance',concept:'Transgression/Excès',description:"Se placer au-dessus de toute autorité par orgueil. C'est la transgression poussée à l'extrême dans le domaine de la croyance."},
    {sense:'être extravagant dans la désobéissance',concept:'Transgression/Excès',description:"Commettre des actes de désobéissance sans aucune retenue. L'extravagance est l'excès sans frein."},
    {sense:'faire transgresser',concept:'Transgression/Excès',description:"Pousser quelqu'un d'autre à dépasser les limites. C'est un acte directionnel qui sort de l'instigateur et atteint la victime."},
    {sense:'tyran',concept:'Tyrannie',description:"Celui qui dépasse toutes les limites et opprime les autres. La tyrannie est un excès permanent qui s'impose à l'autre par la force."},
    {sense:'insolent',concept:'Tyrannie',description:"Celui qui ne respecte aucune limite et dévie du droit chemin. L'insolence est la manifestation extérieure de la transgression intérieure."},
    {sense:'diable',concept:'Tyrannie',description:"Être qui dépasse les limites par orgueil et corruption. Le diable est l'archétype du transgresseur — celui qui a refusé toute soumission."},
    {sense:'taghout',concept:'Tyrannie',description:"Tout ce qui est adoré en dehors de Dieu, ou tout tyran qui se fait obéir dans la désobéissance à Dieu. Le taghout est l'excès institutionnalisé."},
    {sense:'voix',concept:'Divers',description:"Son émis par quelqu'un. Sens isolé."},
    {sense:'sommet de montagne',concept:'Divers',description:"Partie élevée d'une montagne. Sens géographique isolé lié à l'idée de hauteur."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] tghn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // emh (عمه) — confusion, perplexité
  r = await ins('emh', [
    {sense:'être confus',concept:'Confusion/Égarement',description:"État intérieur de trouble où l'on ne voit pas le droit chemin. La confusion est un état passif et permanent tant qu'on ne retrouve pas la direction. C'est l'opposé de la guidance."},
    {sense:'être perplexe',concept:'Confusion/Égarement',description:"Ne pas savoir quelle direction prendre. La perplexité est un état d'hésitation paralysante face à plusieurs options."},
    {sense:'errer',concept:'Confusion/Égarement',description:"Aller et venir sans direction fixe. L'errance est la manifestation physique de la confusion intérieure — on bouge mais sans but."},
    {sense:'aller et venir dans la confusion',concept:'Confusion/Égarement',description:"Mouvement répétitif sans progrès. C'est l'état de celui qui cherche la sortie sans la trouver."},
    {sense:'faire du tort par ignorance',concept:'Injustice',description:"Acte extérieur de traiter quelqu'un injustement faute d'information fiable. L'injustice par ignorance sort de celui qui juge mal et atteint celui qui est lésé."},
    {sense:'sans repères',concept:'Confusion/Égarement',description:"Lieu ou état sans signes pour se guider. L'absence de repères est la cause de la confusion."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] emh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 15 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
