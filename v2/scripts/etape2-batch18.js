const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 145, total = 2321

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

  // SKIP nhn, mey, ayh — déjà skippés en batch 17 mais encore dans la liste
  // Insérer des entrées minimales pour les retirer de la liste
  r = await ins('nhn', [
    {sense:'nous',concept:'Pronom',description:"Pronom personnel de la première personne du pluriel. Désigne le groupe qui inclut le locuteur."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nhn — 1 sens → 1 concept (Pronom) — reste ' + (total-done)) }

  r = await ins('mey', [
    {sense:'intestins',concept:'Anatomie',description:"Boyaux, organes internes du système digestif. Sens anatomique concret et physique."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mey — 1 sens → 1 concept (Anatomie) — reste ' + (total-done)) }

  r = await ins('ayh', [
    {sense:'non trouvé',concept:'Non trouvé',description:"Racine non attestée dans le Lane's Arabic-English Lexicon."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ayh — 1 sens → 1 concept (Non trouvé) — reste ' + (total-done)) }

  // syb (صيب) — atteindre la cible, descendre, pluie
  r = await ins('syb', [
    {sense:'atteindre la cible',concept:'Atteinte/Précision',description:"Acte de toucher exactement ce qui était visé. Atteindre la cible est un acte extérieur directionnel — le projectile sort du tireur et frappe le but."},
    {sense:'descendre',concept:'Descente/Pluie',description:"Mouvement de haut en bas. La descente est un mouvement naturel sous l'effet de la gravité."},
    {sense:'pluie qui tombe',concept:'Descente/Pluie',description:"Eau qui descend du ciel. La pluie est une descente bienfaisante qui atteint la terre et lui donne la vie."},
    {sense:'bien dirigé',concept:'Atteinte/Précision',description:"Qui va dans la bonne direction et atteint son but. Ce qui est bien dirigé ne manque pas sa cible."},
    {sense:'souche originelle',concept:'Divers',description:"La partie essentielle et pure d'une chose. Sens concret de ce qui est premier et fondamental."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] syb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // fyh (فيه) — pas de contenu utile
  console.log('[SKIP] fyh — contenu Lane\'s insuffisant')
  r = await ins('fyh', [
    {sense:'non trouvé',concept:'Non trouvé',description:"Racine avec contenu insuffisant dans le Lane's Arabic-English Lexicon."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] fyh — 1 sens → 1 concept (Non trouvé) — reste ' + (total-done)) }

  // red (رعد) — tonnerre, trembler
  r = await ins('red', [
    {sense:'tonner',concept:'Tonnerre/Grondement',description:"Produire un son violent venant du ciel. Le tonnerre est un grondement extérieur, puissant et soudain qui frappe les oreilles de ceux qui l'entendent."},
    {sense:'tonnerre',concept:'Tonnerre/Grondement',description:"Son violent qui accompagne la foudre. Le tonnerre est un phénomène naturel qui précède la pluie — il annonce et avertit."},
    {sense:'trembler',concept:'Tremblement/Peur',description:"Être secoué involontairement par la peur ou le froid. Le tremblement est un mouvement incontrôlable du corps — c'est une réaction physique à une cause extérieure."},
    {sense:'frissonner',concept:'Tremblement/Peur',description:"Être parcouru de frissons sous l'effet de la peur ou du froid. Le frisson est un tremblement léger et rapide."},
    {sense:'être frappé par le tonnerre',concept:'Tonnerre/Grondement',description:"Subir la violence du tonnerre. Être frappé par le tonnerre c'est recevoir un coup venant du ciel — c'est directionnel et soudain."},
    {sense:'menacer',concept:'Divers',description:"Faire gronder sa voix pour intimider. Extension métaphorique du tonnerre appliquée à la parole humaine."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] red — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // brq (برق) — éclair, briller, signe
  r = await ins('brq', [
    {sense:'briller',concept:'Éclair/Éclat',description:"Émettre une lumière vive et soudaine. La brillance est un éclat qui sort de la source et atteint les yeux de celui qui regarde. C'est instantané et visible."},
    {sense:'éclair',concept:'Éclair/Éclat',description:"Lumière vive et brève qui jaillit du ciel. L'éclair est un phénomène naturel soudain et éblouissant qui accompagne le tonnerre."},
    {sense:'éclat',concept:'Éclair/Éclat',description:"Lumière intense et momentanée. L'éclat est ce qui attire le regard par sa brillance soudaine."},
    {sense:'faire briller son épée',concept:'Éclair/Éclat',description:"Agiter une épée pour qu'elle reflète la lumière. C'est un signal visuel extérieur et directionnel."},
    {sense:'se diriger vers la foudre',concept:'Éclair/Éclat',description:"Aller vers la source de lumière. C'est un mouvement attiré par l'éclat."},
    {sense:'écarquiller les yeux',concept:'Divers',description:"Ouvrir grand les yeux pour regarder intensément. Sens physique lié à la brillance du regard."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] brq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // sbe (صبع) — doigt, pointer du doigt, orgueil
  r = await ins('sbe', [
    {sense:'pointer du doigt',concept:'Désignation/Pointage',description:"Acte de diriger son doigt vers quelqu'un pour le désigner. Le pointage est un acte extérieur directionnel — il sort de celui qui pointe et atteint celui qui est désigné."},
    {sense:'doigt',concept:'Désignation/Pointage',description:"Membre de la main qui sert à montrer et à toucher. Le doigt est l'instrument physique de la désignation."},
    {sense:'montrer du doigt avec mépris',concept:'Désignation/Pointage',description:"Désigner quelqu'un de manière dégradante. Le pointage méprisant est un acte d'humiliation publique."},
    {sense:'orgueil',concept:'Orgueil',description:"Sentiment de supériorité excessive. L'orgueil est un état intérieur qui se manifeste par le mépris des autres."},
    {sense:'bien nourrir',concept:'Divers',description:"Alimenter et soigner correctement. Sens concret isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sbe — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // adhn (أذن) — écouter, oreille, permission, avertir
  r = await ins('adhn', [
    {sense:'écouter',concept:'Écoute/Oreille',description:"Acte de prêter attention à un son ou une parole. L'écoute est un acte intérieur réceptif — on ouvre son oreille pour recevoir ce qui vient de l'extérieur."},
    {sense:'oreille',concept:'Écoute/Oreille',description:"Organe de l'audition. L'oreille est la porte par laquelle le son entre — elle est extérieure et réceptive."},
    {sense:'tordre l\'oreille',concept:'Écoute/Oreille',description:"Acte physique de punir en tirant l'oreille. C'est un geste correctif extérieur et directionnel."},
    {sense:'permission',concept:'Permission/Autorisation',description:"Accord donné pour faire quelque chose. La permission sort de celui qui autorise et atteint celui qui demande. C'est un acte de volonté qui ouvre une porte."},
    {sense:'autoriser',concept:'Permission/Autorisation',description:"Donner le droit de faire quelque chose. L'autorisation est un acte extérieur qui lève un interdit."},
    {sense:'demander la permission',concept:'Permission/Autorisation',description:"Solliciter l'accord de quelqu'un. La demande est un mouvement qui va du demandeur vers l'autorité."},
    {sense:'avertir',concept:'Annonce/Avertissement',description:"Informer de quelque chose à venir. L'avertissement sort de celui qui sait et atteint celui qui doit être prévenu."},
    {sense:'appel à la prière',concept:'Annonce/Avertissement',description:"Proclamation sonore qui annonce le temps de la prière. L'appel sort du muezzin et atteint tous ceux qui l'entendent."},
    {sense:'volonté divine',concept:'Permission/Autorisation',description:"Ce que Dieu permet ou ordonne. La volonté divine est l'autorisation suprême qui rend possible ce qui se produit."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] adhn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // sweq (صعق) — foudre, s'évanouir, mourir, son violent
  r = await ins('sweq', [
    {sense:'frapper par la foudre',concept:'Foudre/Choc',description:"Acte du ciel qui frappe la terre avec violence. La foudre est un coup soudain, directionnel et souvent mortel. C'est une force extérieure irrésistible."},
    {sense:'foudre',concept:'Foudre/Choc',description:"Décharge électrique violente du ciel. La foudre est un phénomène naturel destructeur qui vient d'en haut."},
    {sense:"s'évanouir",concept:'Évanouissement/Mort',description:"Perdre connaissance sous l'effet d'un choc violent. L'évanouissement est un état passif causé par une force extérieure trop puissante."},
    {sense:'mourir',concept:'Évanouissement/Mort',description:"Cesser de vivre. La mort est l'état final et irréversible — c'est la perte totale de conscience et de vie."},
    {sense:'son violent',concept:'Foudre/Choc',description:"Bruit puissant qui assomme ou tue. Le son violent est une force sonore qui atteint les oreilles et peut provoquer l'évanouissement."},
    {sense:'souffle de la résurrection',concept:'Évanouissement/Mort',description:"Le son de la trompe au jour de la résurrection qui fait mourir puis revivre. C'est un événement eschatologique violent et total."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sweq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hḏr (حذر) — être prudent, craindre, se méfier
  r = await ins('hḏr', [
    {sense:'être prudent',concept:'Prudence/Vigilance',description:"État de celui qui fait attention aux dangers. La prudence est un état intérieur de vigilance qui se manifeste par des actions de précaution."},
    {sense:'se méfier',concept:'Prudence/Vigilance',description:"Être sur ses gardes face à un danger. La méfiance est un état de préparation mentale qui anticipe le mal."},
    {sense:'craindre',concept:'Prudence/Vigilance',description:"Avoir peur d'un danger potentiel. La crainte est un état intérieur qui pousse à la vigilance et à l'évitement."},
    {sense:'avertir',concept:'Prudence/Vigilance',description:"Mettre quelqu'un en garde contre un danger. L'avertissement est un acte extérieur directionnel — il sort de celui qui sait et atteint celui qui est menacé."},
    {sense:'se prémunir mutuellement',concept:'Prudence/Vigilance',description:"Deux personnes qui se méfient l'une de l'autre. La prudence mutuelle est un état réciproque de vigilance."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hḏr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hwt (حوط) — garder, protéger, entourer, mur
  r = await ins('hwt', [
    {sense:'garder',concept:'Protection/Encerclement',description:"Acte de veiller sur quelqu'un ou quelque chose pour le protéger. La garde est un acte extérieur permanent qui empêche le mal d'atteindre ce qui est gardé."},
    {sense:'protéger',concept:'Protection/Encerclement',description:"Mettre à l'abri du danger. La protection sort du protecteur et entoure ce qui est protégé."},
    {sense:'entourer',concept:'Protection/Encerclement',description:"Former un cercle autour de quelque chose. L'entourage est un acte spatial qui ferme l'accès de tous les côtés."},
    {sense:'encercler',concept:'Protection/Encerclement',description:"Environner complètement. L'encerclement est total — rien ne passe ni ne sort."},
    {sense:'mur',concept:'Protection/Encerclement',description:"Construction qui entoure et protège. Le mur est la manifestation concrète de la protection — il est visible, permanent et infranchissable."},
    {sense:'englober',concept:'Protection/Encerclement',description:"Comprendre quelque chose en totalité. Englober c'est entourer par la connaissance — rien n'échappe."},
    {sense:'ruser pour convaincre',concept:'Divers',description:"Essayer de tourner quelqu'un par la ruse. Sens isolé lié à l'idée de contourner."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hwt — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // kdd (كد) — peiner, travailler dur, avare
  r = await ins('kdd', [
    {sense:'peiner',concept:'Effort/Labeur',description:"Travailler avec acharnement et difficulté. La peine est un effort soutenu et douloureux qui épuise celui qui le fournit."},
    {sense:'travailler dur',concept:'Effort/Labeur',description:"Fournir un effort intense et continu. Le labeur est une dépense d'énergie extérieure et visible."},
    {sense:'être sévère',concept:'Effort/Labeur',description:"Agir avec dureté et rigueur. La sévérité est une intensité qui ne laisse pas de place au repos."},
    {sense:'avare',concept:'Avarice',description:"Celui qui retient et ne donne pas. L'avarice est un état intérieur de rétention qui empêche tout don vers l'extérieur."},
    {sense:'fatiguer',concept:'Effort/Labeur',description:"Épuiser par un travail excessif. La fatigue est le résultat du labeur — elle s'accumule dans le corps."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kdd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // khtf (خطف) — saisir, arracher, enlever
  r = await ins('khtf', [
    {sense:'saisir',concept:'Saisie/Arrachement',description:"Prendre quelque chose avec force et rapidité. La saisie est un acte extérieur soudain et directionnel — la main sort et attrape."},
    {sense:'arracher',concept:'Saisie/Arrachement',description:"Prendre de force en tirant violemment. L'arrachement est un acte brutal qui sépare l'objet de son lieu."},
    {sense:'enlever rapidement',concept:'Saisie/Arrachement',description:"Emporter quelque chose en un instant. L'enlèvement rapide est un mouvement éclair qui ne laisse pas le temps de réagir."},
    {sense:'emporter par la force',concept:'Saisie/Arrachement',description:"Prendre et emmener par la violence. C'est un acte directionnel — l'objet est arraché de son lieu et transporté ailleurs."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] khtf — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 18 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
