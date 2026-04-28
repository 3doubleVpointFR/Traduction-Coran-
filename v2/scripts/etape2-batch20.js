const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 171, total = 2321

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

  // shhd (شهد) — témoigner, voir, être présent
  r = await ins('shhd', [
    {sense:'témoigner',concept:'Témoignage/Présence',description:"Acte extérieur de rapporter ce que l'on a vu ou su. Le témoignage sort du témoin et atteint ceux qui écoutent. C'est directionnel et fondé sur la connaissance directe."},
    {sense:'voir',concept:'Témoignage/Présence',description:"Percevoir par la vue. Voir est la condition préalable du témoignage — on ne peut témoigner que de ce qu'on a vu."},
    {sense:'être présent',concept:'Témoignage/Présence',description:"Se trouver dans un lieu au moment d'un événement. La présence est la condition physique du témoignage — on voit parce qu'on est là."},
    {sense:'faire témoigner',concept:'Témoignage/Présence',description:"Prendre quelqu'un comme témoin. C'est un acte directionnel qui transforme un observateur en garant."},
    {sense:'attester',concept:'Témoignage/Présence',description:"Affirmer solennellement la vérité de quelque chose. L'attestation est un témoignage formel qui engage celui qui atteste."},
    {sense:'martyr',concept:'Témoignage/Présence',description:"Celui qui témoigne de sa foi par sa vie ou sa mort. Le martyr est le témoin ultime — il confirme sa vérité par le sacrifice."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] shhd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // sdq (صدق) — dire vrai, sincère, ami, dot
  r = await ins('sdq', [
    {sense:'dire vrai',concept:'Vérité/Sincérité',description:"Acte de parler en conformité avec la réalité. La vérité sort de celui qui parle et atteint l'auditeur. C'est l'opposé du mensonge — les mots correspondent aux faits."},
    {sense:'vrai',concept:'Vérité/Sincérité',description:"Ce qui est conforme à la réalité. Le vrai est un état permanent de correspondance entre la parole et le fait."},
    {sense:'sincère',concept:'Vérité/Sincérité',description:"Qui dit et fait ce qu'il pense vraiment. La sincérité est une qualité intérieure qui se manifeste extérieurement par la cohérence entre le cœur et la parole."},
    {sense:'confirmer',concept:'Vérité/Sincérité',description:"Attester que quelque chose est vrai. La confirmation est un acte de validation qui renforce la vérité."},
    {sense:'ami sincère',concept:'Amitié',description:"Celui avec qui on entretient un lien de vérité et de loyauté. L'amitié sincère est fondée sur la vérité mutuelle."},
    {sense:'aumône',concept:'Don/Aumône',description:"Don fait aux nécessiteux. L'aumône est un acte de vérité dans le don — on donne sincèrement, sans attendre de retour."},
    {sense:'dot',concept:'Don/Aumône',description:"Ce que le mari donne à la femme lors du mariage. La dot est un don contractuel qui scelle l'engagement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sdq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // frš (فرش) — étendre, lit, tapis
  r = await ins('frš', [
    {sense:'étendre',concept:'Étalement/Literie',description:"Acte de déployer quelque chose à plat. L'étalement transforme ce qui est replié en surface plane. C'est un acte extérieur qui modifie l'espace."},
    {sense:'lit',concept:'Étalement/Literie',description:"Surface étendue pour dormir. Le lit est le résultat concret de l'action d'étendre — il est plat, horizontal et accueillant."},
    {sense:'tapis',concept:'Étalement/Literie',description:"Surface étendue au sol. Le tapis couvre le sol et le rend habitable."},
    {sense:'étendre la terre',concept:'Étalement/Literie',description:"Rendre la terre plate et habitable. L'étalement de la terre est un acte cosmique qui crée l'espace de vie."},
    {sense:'jeune bétail',concept:'Divers',description:"Petit animal qui reste au sol. Sens concret lié à ce qui est bas et étendu."},
    {sense:'médire',concept:'Divers',description:"Parler mal de quelqu'un en son absence. Sens isolé sans lien évident avec l'étalement."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] frš — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // bny (بني) — construire, bâtir, édifier
  r = await ins('bny', [
    {sense:'construire',concept:'Construction/Édification',description:"Acte extérieur de bâtir une structure. La construction transforme les matériaux en édifice. C'est un acte directionnel, volontaire et permanent dans son résultat."},
    {sense:'bâtir',concept:'Construction/Édification',description:"Élever une structure par assemblage. Bâtir est un acte qui va du bas vers le haut — on pose les fondations puis on monte."},
    {sense:'édifier',concept:'Construction/Édification',description:"Construire en hauteur. L'édification ajoute de la grandeur à la construction."},
    {sense:'fils',concept:'Filiation',description:"Descendant direct. Le fils est ce qui est construit à partir du père — la filiation est une construction biologique."},
    {sense:'donner une maison',concept:'Construction/Édification',description:"Fournir à quelqu'un un bâtiment. C'est un acte de don lié à la construction."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bny — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // maa (موأ) — eau, miauler
  r = await ins('maa', [
    {sense:'eau',concept:'Eau',description:"Substance liquide fondamentale pour la vie. L'eau est extérieure, visible et essentielle — elle nourrit, purifie et donne la vie à tout ce qui existe."},
    {sense:'liquide séminal',concept:'Eau',description:"Fluide de reproduction. Extension du sens d'eau appliquée au liquide vital qui transmet la vie."},
    {sense:'lustre',concept:'Eau',description:"Brillance d'une surface. Le lustre est l'eau de la beauté — ce qui brille comme s'il était mouillé."},
    {sense:'miauler',concept:'Divers',description:"Cri du chat. Sens onomatopéique isolé."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] maa — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // xrj (خرج) — sortir, faire sortir, expulser
  r = await ins('xrj', [
    {sense:'sortir',concept:'Sortie/Émergence',description:"Acte de passer de l'intérieur vers l'extérieur. La sortie est un mouvement directionnel qui traverse une limite — on quitte un espace clos pour l'espace ouvert."},
    {sense:'faire sortir',concept:'Sortie/Émergence',description:"Acte de provoquer la sortie de quelqu'un ou quelque chose. C'est un acte directionnel extérieur qui pousse du dedans vers le dehors."},
    {sense:'expulser',concept:'Sortie/Émergence',description:"Faire sortir par la force. L'expulsion est une sortie contrainte et violente."},
    {sense:'émerger',concept:'Sortie/Émergence',description:"Apparaître en sortant. L'émergence est une sortie qui rend visible ce qui était caché."},
    {sense:'produire',concept:'Sortie/Émergence',description:"Faire sortir un résultat. La production est une sortie appliquée aux fruits du travail."},
    {sense:'impôt',concept:'Tribut/Revenu',description:"Ce qui sort des biens pour être versé à l'autorité. L'impôt est un prélèvement directionnel."},
    {sense:'revenu',concept:'Tribut/Revenu',description:"Ce qui sort de la terre ou du travail comme profit. Le revenu est le produit qui émerge de l'effort."},
    {sense:'résoudre',concept:'Divers',description:"Expliquer, rendre clair. La résolution est une sortie du sens caché vers le sens apparent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xrj — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // h (ه) — lettre, pronom
  r = await ins('h', [
    {sense:'lui',concept:'Pronom',description:"Pronom personnel de la troisième personne du singulier masculin. Désigne une personne ou une chose déjà mentionnée."},
    {sense:'voici',concept:'Particule',description:"Particule de présentation. Attire l'attention sur ce qui suit."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] h — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ndd (ند) — fuir, s'enfuir, opposer, disperser
  r = await ins('ndd', [
    {sense:'fuir',concept:'Fuite/Rébellion',description:"Acte de partir en courant sous l'effet de la peur. La fuite est un mouvement soudain et incontrôlé qui éloigne du danger."},
    {sense:"s'enfuir",concept:'Fuite/Rébellion',description:"Partir en courant de manière désordonnée. La fuite est un mouvement d'éloignement rapide causé par la peur ou le refus."},
    {sense:'devenir rétif',concept:'Fuite/Rébellion',description:"Refuser de se soumettre et partir dans toutes les directions. La rétivité est une rébellion physique contre l'autorité."},
    {sense:'opposer',concept:'Opposition',description:"Acte de résister à quelqu'un. L'opposition est un mouvement contraire directionnel — on va contre l'autre."},
    {sense:'disperser',concept:'Divers',description:"Éparpiller dans toutes les directions. La dispersion est un mouvement centrifuge."},
    {sense:'dénoncer',concept:'Opposition',description:"Élever la voix contre quelqu'un. La dénonciation est un acte vocal d'opposition publique."},
    {sense:'égal',concept:'Divers',description:"Semblable en valeur. Sens isolé d'équivalence."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ndd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // bshr (بشر) — annoncer, peau, visage, contact
  r = await ins('bshr', [
    {sense:'annoncer une bonne nouvelle',concept:'Annonce/Réjouissance',description:"Acte de communiquer un événement qui réjouit. La bonne nouvelle sort de l'annonciateur et atteint celui qui la reçoit. C'est directionnel et transformateur — elle change le visage de celui qui la reçoit."},
    {sense:'réjouir',concept:'Annonce/Réjouissance',description:"Rendre quelqu'un heureux par une nouvelle. La joie est la réaction intérieure à la bonne annonce."},
    {sense:'beau visage',concept:'Annonce/Réjouissance',description:"Visage lumineux de joie. Le beau visage est la manifestation extérieure de la bonne nouvelle reçue."},
    {sense:'peau',concept:'Surface/Contact',description:"Enveloppe extérieure du corps. La peau est la surface visible de l'être — elle est le premier point de contact avec le monde."},
    {sense:'contact peau à peau',concept:'Surface/Contact',description:"Toucher physique direct entre deux personnes. Le contact est un acte d'intimité physique."},
    {sense:'peler',concept:'Surface/Contact',description:"Enlever la surface extérieure. Le pelage est un acte de mise à nu — on retire la couche visible."},
    {sense:'être humain',concept:'Divers',description:"Humain, personne. L'être humain est celui qui a une peau — la surface visible de sa nature."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bshr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // jry (جري) — courir, couler, se passer, agent
  r = await ins('jry', [
    {sense:'courir',concept:'Course/Flux',description:"Se déplacer rapidement. La course est un mouvement rapide et continu qui transporte le corps ou un fluide d'un point à un autre."},
    {sense:'couler',concept:'Course/Flux',description:"Se déplacer comme un liquide. L'eau coule, le sang coule — le flux est un mouvement continu et directionnel."},
    {sense:'se passer',concept:'Course/Flux',description:"Avoir lieu, se produire. Un événement qui se passe est comme un courant qui suit son cours."},
    {sense:'faire courir',concept:'Course/Flux',description:"Provoquer le mouvement rapide de quelque chose. Faire couler les larmes, faire naviguer un bateau."},
    {sense:'rivière',concept:'Course/Flux',description:"Cours d'eau qui coule en permanence. La rivière est le flux par excellence — elle va toujours dans une direction."},
    {sense:'rivaliser',concept:'Compétition',description:"Courir avec quelqu'un pour le dépasser. La rivalité est une course entre deux concurrents."},
    {sense:'agent',concept:'Divers',description:"Celui qui agit pour le compte d'un autre. L'agent est celui qui court pour remplir une mission."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] jry — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // tht (تحت) — dessous, inférieur
  r = await ins('tht', [
    {sense:'dessous',concept:'Position basse',description:"Position spatiale en dessous d'autre chose. Le dessous est l'opposé du dessus — c'est la position la plus basse."},
    {sense:'inférieur',concept:'Position basse',description:"Ce qui est en bas par rapport au reste. L'inférieur est subordonné au supérieur."},
    {sense:'sous',concept:'Position basse',description:"Préposition de position basse. Indique ce qui se trouve en dessous d'autre chose."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] tht — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // hwy (هوى) — tomber, désir, air
  r = await ins('hwy', [
    {sense:'tomber',concept:'Chute/Descente',description:"Se déplacer de haut en bas sous l'effet de la gravité. La chute est un mouvement descendant soudain et irréversible."},
    {sense:'faire tomber',concept:'Chute/Descente',description:"Provoquer la chute de quelque chose. Acte extérieur directionnel qui pousse du haut vers le bas."},
    {sense:'désir',concept:'Passion/Désir',description:"Mouvement intérieur de l'âme vers ce qu'elle convoite. Le désir est un penchant qui tire vers le bas — il éloigne de la raison."},
    {sense:'passion',concept:'Passion/Désir',description:"Inclination forte et souvent déraisonnable. La passion est un désir intense qui domine la volonté."},
    {sense:'tendre la main',concept:'Divers',description:"Étendre le bras pour saisir quelque chose. Mouvement physique vers un objet."},
    {sense:'air',concept:'Divers',description:"Espace entre le ciel et la terre. L'air est le vide dans lequel on tombe."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] hwy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== Batch 20 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
