const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 124, total = 2321

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

  // 125. nhn (نحن) — pronom "nous", pas de racine sémantique
  console.log('[SKIP] nhn (نحن) — pronom personnel, pas de racine sémantique')

  // 126. khlw (خلو) — vide, vacant, quitter, solitude
  r = await ins('khlw', [
    {sense:'être vide',concept:'Vide/Vacuité',description:"État d'absence totale de contenu. Le vide est une réalité spatiale permanente — un lieu sans rien dedans. C'est l'opposé du plein et du peuplé."},
    {sense:'vacant',concept:'Vide/Vacuité',description:"Qui n'est occupé par personne. La vacance est un état spatial qui attend d'être comblé."},
    {sense:'dépourvu',concept:'Vide/Vacuité',description:"Privé de quelque chose. Être dépourvu c'est manquer de ce qui devrait être là."},
    {sense:'laisser vide',concept:'Vide/Vacuité',description:"Acte de rendre un lieu inoccupé. C'est un acte extérieur qui transforme un espace plein en espace vide."},
    {sense:'quitter',concept:'Abandon/Séparation',description:"Acte de se séparer de quelqu'un ou d'un lieu. Le départ est directionnel — on s'éloigne de ce qu'on quitte. C'est un mouvement vers l'extérieur."},
    {sense:'abandonner',concept:'Abandon/Séparation',description:"Laisser derrière soi de manière définitive. L'abandon est un acte volontaire qui rompt le lien avec ce qu'on quitte."},
    {sense:'être distant',concept:'Abandon/Séparation',description:"État d'éloignement par rapport à quelqu'un. La distance est spatiale ou relationnelle."},
    {sense:'solitude',concept:'Solitude/Retraite',description:"État d'être seul, sans compagnie. La solitude est un état intérieur qui peut être choisi ou subi."},
    {sense:'retraite',concept:'Solitude/Retraite',description:"Lieu ou état de retrait volontaire. La retraite est un espace où l'on se consacre à la réflexion ou au culte, à l'écart des autres."},
    {sense:'se consacrer au culte en solitude',concept:'Solitude/Retraite',description:"Acte de se retirer du monde pour se vouer à la dévotion. C'est un mouvement intérieur qui se manifeste par un retrait physique."},
    {sense:'libre',concept:'Liberté',description:"Qui n'est lié par rien, qui va où il veut. La liberté est l'état de celui qui n'a pas de contrainte extérieure."},
    {sense:'divorcée',concept:'Liberté',description:"Femme libérée du lien conjugal. Le divorce est une libération qui rend vacant le statut matrimonial."},
    {sense:'sauf',concept:'Divers',description:"Particule d'exception — ce qui reste en dehors. Sens grammatical isolé."},
    {sense:'laisser',concept:'Abandon/Séparation',description:"Permettre à quelqu'un de rester ou de faire. Laisser c'est ne pas intervenir — c'est un acte passif de non-empêchement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] khlw — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 127. stn (شطن) — distant, diable, Satan, corde
  r = await ins('stn', [
    {sense:'être distant',concept:'Éloignement/Distance',description:"État d'être loin de quelqu'un ou quelque chose. La distance est spatiale et mesurable. C'est un état permanent qui sépare deux réalités."},
    {sense:'éloigner',concept:'Éloignement/Distance',description:"Acte de rendre quelqu'un distant. L'éloignement est directionnel — il sort de celui qui éloigne et atteint celui qui est éloigné."},
    {sense:'loin de la vérité',concept:'Éloignement/Distance',description:"Éloignement métaphorique par rapport au droit chemin. Être loin de la vérité c'est être dans l'erreur par excès de distance."},
    {sense:'diable',concept:'Diable/Satan',description:"Être qui est éloigné de toute bonté et de toute obéissance. Le diable est l'archétype de l'éloignement — il est celui qui s'est écarté le plus de Dieu par orgueil et corruption."},
    {sense:'Satan',concept:'Diable/Satan',description:"Le diable par excellence, celui qui est excessivement orgueilleux et corrompu. Satan est l'éloignement fait être — il est la distance maximale par rapport à la miséricorde divine."},
    {sense:'agir en diable',concept:'Diable/Satan',description:"Se comporter avec un orgueil excessif et une corruption insolente. Agir en diable c'est reproduire le comportement de l'éloignement radical."},
    {sense:'corde longue',concept:'Corde',description:"Corde longue et solide pour puiser l'eau. La corde est concrète et fonctionnelle — elle relie deux points distants."},
    {sense:'expédition lointaine',concept:'Éloignement/Distance',description:"Raid guerrier vers un lieu éloigné. L'expédition est un mouvement vers la distance."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] stn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 128. mey (معي) — intestins, boyaux
  console.log('[SKIP] mey (معي) — sens trop limité dans le Lane\'s (intestins seulement)')

  // 129. kmm (كمم) — combien, calice, couvrir
  r = await ins('kmm', [
    {sense:'combien',concept:'Quantité/Interrogation',description:"Interrogation sur le nombre ou la quantité. C'est un outil grammatical qui demande une mesure. La question porte sur le dénombrement des choses."},
    {sense:'quelle quantité',concept:'Quantité/Interrogation',description:"Question sur la mesure d'une chose. La quantité est objective et mesurable."},
    {sense:'calice de fleur',concept:'Enveloppe/Couverture',description:"Enveloppe qui protège la fleur avant son éclosion. Le calice est une couverture naturelle qui entoure et protège ce qui est à l'intérieur."},
    {sense:'spathe du palmier',concept:'Enveloppe/Couverture',description:"Enveloppe qui protège le régime de dattes. La spathe est un couvercle naturel."},
    {sense:'bonnet rond',concept:'Enveloppe/Couverture',description:"Couvre-chef qui enveloppe la tête. Sens concret de couverture physique."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] kmm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 130. sfh (سفه) — insensé, léger, stupide
  r = await ins('sfh', [
    {sense:'être insensé',concept:'Légèreté/Stupidité',description:"État intérieur de manque de sagesse et de discernement. L'insensé ne mesure pas les conséquences de ses actes. C'est un état permanent de déficience intellectuelle et morale."},
    {sense:'léger d\'esprit',concept:'Légèreté/Stupidité',description:"Qui manque de poids et de gravité dans le jugement. La légèreté d'esprit est l'opposé de la sagesse — elle rend les décisions fragiles et irréfléchies."},
    {sense:'stupide',concept:'Légèreté/Stupidité',description:"Qui ne comprend pas et ne raisonne pas correctement. La stupidité est une incapacité à saisir la réalité telle qu'elle est."},
    {sense:'déclarer insensé',concept:'Légèreté/Stupidité',description:"Acte extérieur de qualifier quelqu'un d'insensé. Le jugement sort de celui qui juge et atteint la réputation de l'autre."},
    {sense:'agir de manière insensée',concept:'Légèreté/Stupidité',description:"Se comporter sans sagesse ni retenue. L'action insensée est visible et ses conséquences sont extérieures."},
    {sense:'agitation',concept:'Agitation/Mouvement',description:"État de mouvement désordonné. L'agitation est physique — le vent agite les branches, la mer agite les vagues. C'est un mouvement sans direction."},
    {sense:'soif violente',concept:'Divers',description:"Sens physique isolé. État de soif extrême."},
    {sense:'se quereller',concept:'Divers',description:"Se disputer mutuellement. Sens social d'un comportement insensé réciproque."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sfh — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 131. smm (صمم) — sourd, pénétrer, ferme
  r = await ins('smm', [
    {sense:'être sourd',concept:'Surdité',description:"État de ne pas entendre. La surdité est un état permanent qui coupe celui qui en souffre du monde sonore. C'est une fermeture de l'oreille qui empêche la réception."},
    {sense:'rendre sourd',concept:'Surdité',description:"Acte extérieur de priver quelqu'un de l'ouïe. C'est directionnel — l'action sort de la cause et atteint l'oreille de l'autre."},
    {sense:'feindre la surdité',concept:'Surdité',description:"Acte volontaire de faire semblant de ne pas entendre. C'est un refus délibéré de recevoir le message — la surdité simulée est un acte de rejet."},
    {sense:'sourd',concept:'Surdité',description:"Celui qui n'entend pas, par obstruction de l'oreille. Le sourd est coupé de la communication sonore — il ne reçoit rien de ce qui est dit."},
    {sense:'pénétrer',concept:'Pénétration/Fermeté',description:"Traverser un obstacle avec force. La pénétration est un mouvement directionnel qui va en profondeur — elle atteint l'os et le traverse."},
    {sense:'trancher',concept:'Pénétration/Fermeté',description:"Couper à travers une articulation ou un os. Le tranchant est net et définitif."},
    {sense:'détermination',concept:'Pénétration/Fermeté',description:"Qualité de celui qui va droit au but sans hésitation. La détermination est la pénétration appliquée à la volonté."},
    {sense:'bouchon',concept:'Obstruction',description:"Ce qui ferme l'ouverture d'un récipient. Le bouchon est un obstacle concret qui empêche le passage."},
    {sense:'calamité',concept:'Divers',description:"Événement qui frappe comme un coup sourd. Sens figuré d'un malheur violent."},
    {sense:'épée tranchante',concept:'Pénétration/Fermeté',description:"Arme qui coupe sans plier. L'épée est l'instrument de la pénétration — elle traverse ce qu'elle frappe."},
    {sense:'avare',concept:'Divers',description:"Celui qui ne laisse rien sortir. L'avarice est une fermeture totale — rien ne passe."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] smm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 132. bkm (بكم) — muet
  r = await ins('bkm', [
    {sense:'être muet',concept:'Mutisme',description:"État de ne pas pouvoir parler, soit par nature soit par incapacité à formuler sa pensée. Le mutisme est une fermeture de la parole qui empêche toute expression vers l'extérieur."},
    {sense:'muet de naissance',concept:'Mutisme',description:"Incapacité congénitale à parler. Le muet de naissance n'a jamais eu accès à l'expression par la parole — c'est un état permanent et irréversible."},
    {sense:'incapable de s\'exprimer',concept:'Mutisme',description:"Ne pas trouver les mots pour dire ce qu'on pense. C'est un état où la pensée existe mais ne peut pas sortir — la parole est bloquée entre l'intérieur et l'extérieur."},
    {sense:'parole empêchée',concept:'Mutisme',description:"Discours qui devient entravé et ne coule plus librement. L'empêchement de la parole est un obstacle entre la pensée et son expression."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bkm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 133. emy (عمى) — aveugle, obscur, erreur, nuages
  r = await ins('emy', [
    {sense:'être aveugle',concept:'Cécité/Aveuglement',description:"État de ne pas voir, physiquement ou mentalement. La cécité est une fermeture des yeux qui coupe celui qui en souffre du monde visible. C'est un état permanent qui empêche toute perception visuelle."},
    {sense:'rendre aveugle',concept:'Cécité/Aveuglement',description:"Acte extérieur de priver quelqu'un de la vue. C'est directionnel — l'action sort de la cause et atteint les yeux de l'autre."},
    {sense:'aveugle',concept:'Cécité/Aveuglement',description:"Celui qui ne voit pas, des deux yeux. L'aveugle est coupé de la perception visuelle — il ne reçoit rien de ce qui est montré."},
    {sense:'aveugle d\'esprit',concept:'Cécité/Aveuglement',description:"Celui qui ne comprend pas, qui erre intellectuellement. La cécité de l'esprit est une métaphore de l'incapacité à voir la vérité."},
    {sense:'obscurcir',concept:'Obscurité/Confusion',description:"Rendre une information inapparente ou difficile à comprendre. L'obscurcissement est un voile mis sur le sens — il empêche la compréhension."},
    {sense:'feindre l\'aveuglement',concept:'Cécité/Aveuglement',description:"Faire semblant de ne pas voir ou de ne pas comprendre. C'est un refus volontaire de percevoir la réalité."},
    {sense:'errer',concept:'Obscurité/Confusion',description:"S'écarter du droit chemin par manque de vision. L'errance est la conséquence de la cécité — on ne voit pas le chemin."},
    {sense:'erreur',concept:'Obscurité/Confusion',description:"État d'égarement dû au manque de vision. L'erreur est le résultat de la cécité intellectuelle."},
    {sense:'orgueil',concept:'Obscurité/Confusion',description:"Fierté qui aveugle. L'orgueil est une forme d'aveuglement volontaire qui empêche de voir sa propre réalité."},
    {sense:'sans repères',concept:'Obscurité/Confusion',description:"Lieu sans signes pour se guider. L'absence de repères est la cause spatiale de l'égarement."},
    {sense:'nuages denses',concept:'Divers',description:"Nuages épais qui ressemblent à de la fumée au sommet des montagnes. Sens météorologique concret."},
    {sense:'choisir',concept:'Divers',description:"Acte de sélectionner et préférer. Sens isolé sans lien évident avec la cécité."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] emy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 134. rje (رجع) — retourner, revenir, renvoyer, pluie
  r = await ins('rje', [
    {sense:'retourner',concept:'Retour/Réversion',description:"Acte de revenir à un lieu ou un état antérieur. Le retour est un mouvement directionnel vers l'origine — on revient là d'où l'on est parti. C'est l'opposé du départ."},
    {sense:'revenir',concept:'Retour/Réversion',description:"Acte de venir de nouveau là où l'on était. Le retour implique un mouvement circulaire — on part et on revient au point de départ."},
    {sense:'réverter',concept:'Retour/Réversion',description:"Revenir à un état ou une condition antérieure. La réversion est un retour à l'origine — les choses reprennent leur état premier."},
    {sense:'faire revenir',concept:'Retour/Réversion',description:"Acte extérieur de ramener quelqu'un ou quelque chose. C'est directionnel — l'action sort de celui qui ramène et atteint ce qui est ramené."},
    {sense:'renvoyer',concept:'Retour/Réversion',description:"Faire retourner quelqu'un d'où il vient. Le renvoi est un acte directionnel de mise à distance."},
    {sense:'pluie',concept:'Pluie/Renouvellement',description:"Eau qui retourne du ciel vers la terre. La pluie est un retour cyclique — l'eau monte puis redescend. C'est le retour par excellence dans la nature."},
    {sense:'répéter',concept:'Répétition',description:"Dire ou faire quelque chose de nouveau. La répétition est un retour dans le temps — on revient à ce qui a déjà été dit ou fait."},
    {sense:'réponse',concept:'Répétition',description:"Ce qui est renvoyé en retour d'une question. La réponse est un retour de parole — elle sort de celui qui répond et revient vers celui qui a questionné."},
    {sense:'profit',concept:'Divers',description:"Retour positif d'un investissement. Le profit est ce qui revient de l'effort — c'est un retour matériel."},
    {sense:'ruminer',concept:'Divers',description:"Faire revenir la nourriture pour la mâcher de nouveau. La rumination est un retour physique de ce qui a été avalé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] rje — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 135. awl (أول) — retourner, famille, premier, instrument, gouverner
  r = await ins('awl', [
    {sense:'retourner',concept:'Retour/Origine',description:"Acte de revenir à un état ou un lieu antérieur. Le retour est un mouvement vers l'origine — on revient là d'où l'on est parti."},
    {sense:'faire retourner',concept:'Retour/Origine',description:"Acte extérieur de ramener quelque chose à son état premier. C'est directionnel et transformateur."},
    {sense:'aboutissement',concept:'Retour/Origine',description:"Ce à quoi aboutit un processus. L'aboutissement est le retour final — la destination vers laquelle tout converge."},
    {sense:'famille',concept:'Famille/Appartenance',description:"Les proches par le sang, les parents par filiation. La famille est le groupe auquel on appartient par naissance — c'est l'origine relationnelle."},
    {sense:'parenté',concept:'Famille/Appartenance',description:"Lien de sang entre les membres d'un même groupe. La parenté est un lien permanent qui rattache chacun à son origine."},
    {sense:'instrument',concept:'Instrument/Outil',description:"Objet avec lequel on travaille. L'instrument est un moyen concret et extérieur qui sert à accomplir une tâche."},
    {sense:'outil',concept:'Instrument/Outil',description:"Ce qui sert à faire quelque chose. L'outil est fonctionnel — il existe pour servir un but."},
    {sense:'gouverner',concept:'Gouvernance',description:"Acte d'exercer l'autorité sur un groupe. Le gouvernement est un acte extérieur directionnel — il sort du gouvernant et atteint les gouvernés."},
    {sense:'interpréter',concept:'Retour/Origine',description:"Ramener un texte ou un rêve à son sens premier. L'interprétation est un retour au sens originel caché sous l'apparence."},
    {sense:'découvrir le bien en quelqu\'un',concept:'Divers',description:"Voir les signes extérieurs du bien chez quelqu'un. C'est un acte de perception qui va de l'apparence vers la réalité intérieure."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] awl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // 136. šry (شري) — mal, acheter/vendre, disperser
  r = await ins('šry', [
    {sense:'être mauvais',concept:'Mal/Méchanceté',description:"État de corruption morale. Le mal est un état intérieur permanent qui se manifeste extérieurement par des actes injustes et nuisibles."},
    {sense:'mal',concept:'Mal/Méchanceté',description:"Ce qui est moralement corrompu, injuste, nuisible. Le mal est l'opposé du bien — il détruit au lieu de construire."},
    {sense:'méchanceté',concept:'Mal/Méchanceté',description:"Disposition intérieure à faire du mal. La méchanceté est un état permanent qui oriente les actes vers la nuisance."},
    {sense:'rendre notoire en mal',concept:'Mal/Méchanceté',description:"Acte extérieur de dénoncer publiquement quelqu'un pour ses méfaits. La dénonciation sort du dénonciateur et atteint la réputation de l'autre."},
    {sense:'traiter avec hostilité',concept:'Mal/Méchanceté',description:"Agir envers quelqu'un de manière mauvaise et hostile. L'hostilité est directionnelle — elle sort de l'agresseur et atteint la cible."},
    {sense:'vendre',concept:'Commerce/Échange',description:"Acte de céder quelque chose en échange d'un prix. La vente est un acte extérieur directionnel qui transfère la propriété d'un objet."},
    {sense:'acheter',concept:'Commerce/Échange',description:"Acte d'acquérir quelque chose en payant un prix. L'achat est l'autre face de la vente — il est aussi directionnel."},
    {sense:'échanger',concept:'Commerce/Échange',description:"Troquer une chose contre une autre. L'échange est un mouvement réciproque entre deux parties."},
    {sense:'se disperser',concept:'Divers',description:"Se séparer dans toutes les directions. La dispersion est un mouvement centrifuge qui éloigne les éléments les uns des autres."},
    {sense:'semer la discorde',concept:'Mal/Méchanceté',description:"Exciter l'hostilité entre les gens. Semer la discorde est un acte extérieur qui détruit les liens sociaux."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šry — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 16 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
