const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 237, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {senses, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.senses.length+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    r.senses.forEach(s => {
      console.log('• '+s.sense+' ['+s.concept+']')
      console.log('  '+s.description)
    })
  }
}

async function run() {
  let r

  // hyn (حين) — temps, moment
  r=await ins('hyn',[
    {sense:'temps',concept:'Temps/Durée',description:"Étendue dans laquelle se déroulent les événements. Le temps est le cadre de toute existence créée — il contient le passé, le présent et le futur. C'est permanent comme dimension mais chaque moment est ponctuel. Le temps passe et ne revient pas."},
    {sense:'moment',concept:'Temps/Durée',description:"Instant particulier dans le flux du temps. Le moment est un point dans la durée — c'est ponctuel par définition. Chaque moment est unique et irréversible. Le bon moment est celui où l'action est juste."},
    {sense:'quand',concept:'Temps/Durée',description:"Interrogation ou indication sur le moment. Quand situe dans le temps — c'est une question ou une réponse temporelle. C'est ponctuel dans la désignation mais peut viser un temps passé, présent ou futur."},
    {sense:'période',concept:'Temps/Durée',description:"Étendue de temps délimitée. La période a un début et une fin — c'est une portion de temps. Elle est temporaire par nature. Chaque période a ses caractéristiques propres."},
    {sense:'mort',concept:'Destin/Échéance',description:"Le moment où la vie s'achève. La mort est l'échéance ultime — elle est ponctuelle mais définitive. Chaque être a son moment fixé (ajal). La mort est le temps qui s'arrête pour l'individu."},
  ]);log(r,'hyn')

  // skn (سكن) — habiter, être calme
  r=await ins('skn',[
    {sense:'habiter',concept:'Habitation/Demeure',description:"Acte de demeurer en un lieu de façon stable. Habiter est directionnel — on s'installe dans un espace qui devient le sien. C'est permanent tant qu'on reste. Habiter c'est faire d'un lieu sa maison, y trouver repos et sécurité."},
    {sense:'demeurer',concept:'Habitation/Demeure',description:"Acte de rester en place durablement. Demeurer est un état de stabilité — on ne bouge pas, on reste où l'on est. C'est permanent ou de longue durée. Demeurer c'est habiter dans la durée."},
    {sense:'être calme',concept:'Calme/Repos',description:"État de tranquillité intérieure ou extérieure. Le calme est l'absence d'agitation — c'est un état qui peut être permanent (tempérament) ou temporaire (moment de paix). Le calme est le repos de l'âme ou du corps."},
    {sense:'s\'apaiser',concept:'Calme/Repos',description:"Acte de passer de l'agitation au calme. S'apaiser est un mouvement vers le repos — c'est ponctuel dans le passage mais aboutit à un état durable. La nuit apaise, la prière apaise, l'amour apaise."},
    {sense:'se reposer',concept:'Calme/Repos',description:"Acte de cesser l'activité pour récupérer. Se reposer est intérieur — on retrouve ses forces en s'immobilisant. C'est ponctuel comme acte mais nécessaire régulièrement. Le repos restaure ce que l'effort épuise."},
    {sense:'pauvre',concept:'Divers',description:"Celui qui n'a pas les moyens de bouger, qui reste immobile par manque. Le pauvre est dans un état permanent de manque — il ne peut pas se mouvoir librement. Sens dérivé de l'immobilité forcée."},
  ]);log(r,'skn')

  // mnh (منه) — de lui
  r=await ins('mnh',[
    {sense:'de lui',concept:'Provenance/Origine',description:"Préposition indiquant l'origine masculine ou neutre. De lui désigne le point de départ — c'est directionnel vers l'arrière, vers la source. Ce qui vient de lui tire son origine de cette personne ou chose."},
    {sense:'de cela',concept:'Provenance/Origine',description:"Préposition référentielle renvoyant à ce qui précède. De cela établit un lien avec ce qui a été mentionné — c'est une reprise qui maintient la cohérence du discours."},
    {sense:'parmi eux',concept:'Partie/Appartenance',description:"Préposition partitive indiquant l'extraction d'un groupe. Parmi eux désigne une partie du tout — c'est un mouvement de l'ensemble vers l'élément. Être parmi eux c'est appartenir au groupe."},
  ]);log(r,'mnh')

  // rghd (رغد) — abondance, vie aisée
  r=await ins('rghd',[
    {sense:'abondance',concept:'Abondance/Aisance',description:"État de ce qui dépasse le nécessaire et offre le surplus. L'abondance est un état permanent de ce qui est abondant — il y a plus qu'assez. C'est le contraire de la pénurie. L'abondance permet la générosité et le choix."},
    {sense:'vie aisée',concept:'Abondance/Aisance',description:"Condition de celui qui a tout ce qu'il faut et plus. La vie aisée est un état permanent tant que durent les moyens — elle libère des soucis matériels. C'est un bienfait qui peut être épreuve si on oublie d'où il vient."},
    {sense:'prospérité',concept:'Abondance/Aisance',description:"État de réussite et de croissance matérielle. La prospérité est l'abondance qui dure et s'accroît — c'est permanent tant que les causes demeurent. La prospérité est une bénédiction mais aussi une responsabilité."},
    {sense:'jouir pleinement',concept:'Jouissance',description:"Acte de profiter sans limite de ce qu'on a. Jouir pleinement est intérieur — c'est l'expérience du bien en abondance. C'est ponctuel dans l'acte mais peut caractériser une période de vie. Mangez et buvez du bien de Dieu."},
  ]);log(r,'rghd')

  // hyth (حيث) — où, là où
  r=await ins('hyth',[
    {sense:'où',concept:'Lieu/Espace',description:"Adverbe de lieu interrogatif ou relatif. Où situe dans l'espace — c'est une question ou une désignation spatiale. C'est ponctuel dans l'indication mais peut désigner un lieu permanent."},
    {sense:'là où',concept:'Lieu/Espace',description:"Locution de lieu relatif précisant la position. Là où établit un lien entre une action et un lieu — c'est une indication spatiale. Le lieu désigné peut être réel ou métaphorique."},
    {sense:'partout où',concept:'Lieu/Espace',description:"Adverbe de lieu généralisé sans restriction. Partout où nie l'importance du lieu particulier — tout endroit est équivalent. C'est une affirmation permanente d'universalité spatiale."},
    {sense:'de quelque façon',concept:'Manière',description:"Locution indiquant la manière sans restriction. De quelque façon généralise sur le mode — peu importe comment. C'est une indifférence au moyen tant que le but est atteint."},
  ]);log(r,'hyth')

  // shy (شيء) — chose
  r=await ins('shy',[
    {sense:'chose',concept:'Chose/Être',description:"Toute réalité qui existe ou peut être conçue. La chose est le concept le plus général — elle englobe tout ce qui est. C'est permanent comme catégorie. Tout ce qui n'est pas rien est chose."},
    {sense:'quelque chose',concept:'Chose/Être',description:"Réalité indéterminée mais existante. Quelque chose désigne sans préciser — c'est une chose sans visage. C'est un état d'indétermination qui peut être levé."},
    {sense:'rien',concept:'Néant',description:"Absence de chose, négation de l'être. Rien est le contraire de chose — c'est le vide absolu. C'est permanent comme concept de l'absence. De rien, rien ne vient sans le Créateur."},
    {sense:'vouloir',concept:'Volonté',description:"Acte intérieur de diriger sa volonté vers un objet. Vouloir une chose c'est tendre vers elle — c'est intérieur et directionnel vers l'objet voulu. La volonté est le moteur de l'action."},
  ]);log(r,'shy')

  // qrb (قرب) — être proche, sacrifice
  r=await ins('qrb',[
    {sense:'être proche',concept:'Proximité/Rapprochement',description:"État de ce qui est à courte distance spatiale ou relationnelle. La proximité est un état permanent ou temporaire — on est proche ou on le devient. C'est relatif : on est proche de quelque chose. La proximité facilite le contact et l'influence."},
    {sense:'s\'approcher',concept:'Proximité/Rapprochement',description:"Acte de réduire la distance avec quelqu'un ou quelque chose. S'approcher est directionnel vers l'autre — c'est un mouvement qui réduit l'écart. C'est ponctuel dans le mouvement mais peut aboutir à un état durable de proximité."},
    {sense:'rapprocher',concept:'Proximité/Rapprochement',description:"Acte de rendre proche ce qui était éloigné. Rapprocher est directionnel — l'agent unit ce qui était séparé. C'est ponctuel mais crée un nouvel état. On rapproche les cœurs, les choses, les personnes."},
    {sense:'sacrifice',concept:'Offrande/Sacrifice',description:"Ce qu'on rapproche de Dieu comme offrande. Le sacrifice est un acte extérieur directionnel vers Dieu — on donne pour se rapprocher. C'est ponctuel dans l'acte mais crée un lien permanent. Le sacrifice coûte à celui qui offre."},
    {sense:'offrande',concept:'Offrande/Sacrifice',description:"Ce qu'on présente à Dieu ou aux autres. L'offrande est un don qui sort de celui qui offre — c'est directionnel vers le destinataire. Elle rapproche le donneur du receveur."},
    {sense:'parent proche',concept:'Parenté',description:"Celui qui est proche par le sang. Le parent proche partage l'origine — c'est un état permanent de la relation. La proximité du sang crée des droits et des devoirs."},
  ]);log(r,'qrb')

  // hdh (هذه) — celle-ci
  r=await ins('hdh',[
    {sense:'celle-ci',concept:'Démonstratif/Désignation',description:"Pronom démonstratif féminin désignant ce qui est présent et proche. Celle-ci pointe vers une réalité féminine accessible — c'est directionnel vers ce qui est montré. C'est ponctuel dans l'acte de désigner mais la chose désignée peut être permanente."},
    {sense:'cette',concept:'Démonstratif/Désignation',description:"Adjectif démonstratif féminin accompagnant un nom. Cette qualifie et montre — c'est une désignation qui rend présent. La chose montrée est là, accessible, visible."},
    {sense:'ceci',concept:'Démonstratif/Désignation',description:"Pronom démonstratif neutre ou général. Ceci pointe vers ce qui est là — c'est un geste verbal qui rend présent. Le démonstratif établit un lien entre le locuteur et ce qu'il montre."},
  ]);log(r,'hdh')

  // shjr (شجر) — arbre, dispute
  r=await ins('shjr',[
    {sense:'arbre',concept:'Arbre/Végétation',description:"Plante ligneuse à tronc qui s'élève vers le ciel. L'arbre est un être permanent qui pousse de la terre vers le haut — il a des racines en bas et des branches en haut. L'arbre est symbole de vie, de croissance, de stabilité. L'arbre bon donne de bons fruits."},
    {sense:'plante',concept:'Arbre/Végétation',description:"Tout végétal qui pousse de la terre. La plante est un être vivant enraciné — elle ne peut pas bouger mais elle pousse. C'est permanent tant qu'elle vit. La plante transforme la terre et l'eau en vie."},
    {sense:'dispute',concept:'Conflit/Querelle',description:"Désaccord qui s'élève entre personnes comme des branches qui s'entremêlent. La dispute est un conflit de paroles — elle sort des parties et les oppose. C'est ponctuel dans l'échange mais peut laisser des traces. Les disputes compliquent les relations comme les branches emmêlées."},
    {sense:'être emmêlé',concept:'Conflit/Querelle',description:"État de ce qui est enchevêtré et confus. L'emmêlement est un état de désordre — les éléments se croisent et se bloquent. C'est le résultat du conflit ou de la croissance désordonnée."},
    {sense:'s\'élever',concept:'Élévation',description:"Acte de monter, de pousser vers le haut. S'élever est directionnel vers le haut — comme l'arbre qui monte vers le ciel. C'est progressif et peut être permanent. S'élever c'est grandir vers la lumière."},
  ]);log(r,'shjr')

  // bdw (بدو) — apparaître, bédouin
  r=await ins('bdw',[
    {sense:'apparaître',concept:'Apparition/Manifestation',description:"Acte de devenir visible après avoir été caché. Apparaître est un mouvement du caché vers le visible — c'est directionnel de l'intérieur vers l'extérieur. C'est ponctuel dans le moment où l'on voit mais ce qui apparaît peut rester visible."},
    {sense:'se montrer',concept:'Apparition/Manifestation',description:"Acte volontaire de se rendre visible. Se montrer est directionnel — on sort de l'invisibilité vers le regard des autres. C'est une décision qui expose. Se montrer peut être courage ou vanité."},
    {sense:'sembler',concept:'Apparition/Manifestation',description:"Avoir l'apparence de quelque chose. Sembler est un état de surface — on paraît être sans nécessairement être. C'est la différence possible entre l'apparence et la réalité. Ce qui semble n'est pas toujours ce qui est."},
    {sense:'bédouin',concept:'Désert/Nomadisme',description:"Habitant du désert qui vit de façon nomade. Le bédouin est un état permanent de vie — il habite là où tout apparaît sans obstacle, dans l'espace ouvert du désert. Le bédouin est libre de l'attache aux villes."},
    {sense:'désert',concept:'Désert/Nomadisme',description:"Espace nu et ouvert sans végétation ni habitation fixe. Le désert est un état permanent du lieu — tout y apparaît clairement car rien ne cache. Le désert est le lieu de l'épreuve et de la révélation."},
  ]);log(r,'bdw')

  console.log('\n=== Batch 26 v2 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
