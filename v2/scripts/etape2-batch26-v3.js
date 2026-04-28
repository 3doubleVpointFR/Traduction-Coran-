const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 237, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // 238. hyn (حين) — temps, moment
  r = await ins('hyn', [
    {sense:'temps',concept:'Temps/Durée',description:"Étendue dans laquelle se déroulent les événements et les changements — le temps est le cadre de toute existence créée, ce dans quoi les choses naissent, durent et périssent. C'est permanent comme dimension mais chaque moment en lui est ponctuel et irréversible. Le temps est ce qui passe sans revenir, ce qui contient le passé révolu, le présent fugitif et le futur incertain. Seul Dieu est hors du temps qu'Il a créé."},
    {sense:'moment',concept:'Temps/Durée',description:''},
    {sense:'quand',concept:'Temps/Durée',description:''},
    {sense:'période',concept:'Temps/Durée',description:''},
    {sense:'mort',concept:'Destin/Échéance',description:"Le moment fixé où la vie s'achève — la mort est l'échéance ultime inscrite dans le temps de chaque être. C'est ponctuel (un instant) mais définitif (sans retour). Chaque être a son terme fixé (ajal) que nul ne peut avancer ni retarder. La mort est le temps qui s'arrête pour l'individu tandis que le temps continue pour les autres."},
  ])
  log(r,'hyn',{'Temps/Durée':"Cadre permanent de l'existence créée où les choses naissent, durent et périssent. Chaque moment est ponctuel et irréversible. Ce qui passe sans revenir.",'Destin/Échéance':"Le moment fixé où la vie s'achève. Ponctuel mais définitif. Chaque être a son terme (ajal)."})

  // 239. skn (سكن) — habiter, être calme
  r = await ins('skn', [
    {sense:'habiter',concept:'Habitation/Demeure',description:"Acte de demeurer en un lieu de façon stable, d'en faire sa maison — habiter est directionnel (on s'installe dans un espace) et permanent tant qu'on reste. Habiter c'est transformer un lieu en chez-soi, y trouver repos et sécurité. La demeure est le lieu où l'on revient, où l'on se retire du monde extérieur. Habiter est le contraire d'errer."},
    {sense:'demeurer',concept:'Habitation/Demeure',description:''},
    {sense:'être calme',concept:'Calme/Repos',description:"État intérieur ou extérieur de tranquillité, d'absence d'agitation — le calme peut être permanent (tempérament paisible) ou temporaire (moment de paix après l'agitation). C'est un état de repos où rien ne bouge, où les forces sont en équilibre. Le calme est ce vers quoi tend l'agité, ce que cherche celui qui est troublé. La nuit apaise, la prière apaise, l'amour entre époux apaise."},
    {sense:'s\'apaiser',concept:'Calme/Repos',description:''},
    {sense:'se reposer',concept:'Calme/Repos',description:''},
    {sense:'pauvre',concept:'Divers',description:"Sens dérivé de l'immobilité forcée : celui qui ne peut pas bouger par manque de moyens."},
  ])
  log(r,'skn',{'Habitation/Demeure':"Acte directionnel de s'établir dans un lieu et d'y demeurer. Permanent tant qu'on reste. Transformer un lieu en chez-soi.",'Calme/Repos':"État intérieur de tranquillité sans agitation. Peut être permanent ou temporaire. Ce vers quoi tend l'agité.",'Divers':"Sens dérivé."})

  // 240. mnh (منه) — de lui
  r = await ins('mnh', [
    {sense:'de lui',concept:'Provenance/Origine',description:"Préposition composée qui indique l'origine, le point de départ masculin ou neutre — de lui marque la source d'où quelque chose vient ou émane. C'est directionnel vers l'arrière, vers la cause ou le commencement. Ce qui vient de lui tire son origine, sa nature ou sa légitimité de cette source. La provenance éclaire la nature."},
    {sense:'de cela',concept:'Provenance/Origine',description:''},
    {sense:'parmi eux',concept:'Partie/Appartenance',description:"Préposition partitive qui indique l'extraction d'un élément depuis un groupe — parmi eux désigne une partie du tout, un individu qui appartient à l'ensemble. C'est directionnel du groupe vers l'élément extrait. Être parmi eux c'est appartenir au groupe, en partager l'identité."},
  ])
  log(r,'mnh',{'Provenance/Origine':"Direction vers l'arrière vers la source. Ce qui vient de lui en tire sa nature. La provenance éclaire la nature.",'Partie/Appartenance':"Extraction d'un élément depuis un groupe. Du tout vers la partie. Appartenir."})

  // 241. rghd (رغد) — abondance, vie aisée
  r = await ins('rghd', [
    {sense:'abondance',concept:'Abondance/Aisance',description:"État de ce qui dépasse le nécessaire et offre le surplus — l'abondance est permanente tant que durent ses causes, c'est l'avoir plus qu'assez. Elle est le contraire de la pénurie et du manque. L'abondance permet la générosité (on peut donner de son surplus) et le choix (on n'est pas contraint par la nécessité). C'est un état extérieur qui affecte l'intérieur : l'abondant peut être serein."},
    {sense:'vie aisée',concept:'Abondance/Aisance',description:''},
    {sense:'prospérité',concept:'Abondance/Aisance',description:''},
    {sense:'jouir pleinement',concept:'Jouissance',description:"Acte intérieur de profiter sans limite de ce qu'on possède en abondance — jouir pleinement c'est expérimenter le bien sans restriction, goûter sans compter. C'est ponctuel dans l'acte mais peut caractériser une période de vie. Le Coran invite à manger et boire du bien de Dieu mais rappelle que la jouissance d'ici-bas est temporaire."},
  ])
  log(r,'rghd',{'Abondance/Aisance':"État permanent de surplus qui dépasse le nécessaire. Permet la générosité et le choix. Contraire de la pénurie.",'Jouissance':"Acte intérieur de profiter pleinement sans limite. Goûter le bien en abondance."})

  // 242. hyth (حيث) — où, là où
  r = await ins('hyth', [
    {sense:'où',concept:'Lieu/Espace',description:"Adverbe de lieu qui situe dans l'espace — où interroge ou désigne l'emplacement. C'est une indication spatiale qui peut être ponctuelle (ce lieu-ci) ou permanente (le lieu en général). Le lieu est le cadre spatial comme le temps est le cadre temporel. Où situe dans l'étendue."},
    {sense:'là où',concept:'Lieu/Espace',description:''},
    {sense:'partout où',concept:'Lieu/Espace',description:''},
    {sense:'de quelque façon',concept:'Manière',description:"Locution qui indique la manière sans restriction — de quelque façon généralise sur le mode d'action. C'est une indifférence au moyen tant que le but est atteint. Peu importe comment, l'essentiel est que ce soit fait."},
  ])
  log(r,'hyth',{'Lieu/Espace':"Indication spatiale qui situe dans l'étendue. Le cadre spatial de l'existence. Ponctuel ou permanent.",'Manière':"Généralisation sur le mode d'action. Indifférence au moyen. L'essentiel est le but."})

  // 243. shy (شيء) — chose
  r = await ins('shy', [
    {sense:'chose',concept:'Chose/Être',description:"Toute réalité qui existe ou peut être conçue — la chose est le concept le plus général qui englobe tout ce qui est quelque chose plutôt que rien. C'est permanent comme catégorie : tout ce qui n'est pas le néant est chose. La chose peut être matérielle ou immatérielle, grande ou petite, mais elle a une réalité, une existence propre."},
    {sense:'quelque chose',concept:'Chose/Être',description:''},
    {sense:'rien',concept:'Néant',description:"Absence totale de chose, négation absolue de l'être — rien est le contraire de tout, le vide absolu où il n'y a rien. C'est permanent comme concept mais ne désigne aucune réalité positive. De rien, rien ne vient naturellement — seul le Créateur fait surgir quelque chose du néant."},
    {sense:'vouloir',concept:'Volonté',description:"Acte intérieur de diriger sa volonté vers un objet, de désirer quelque chose — vouloir une chose c'est tendre vers elle par l'intention. C'est directionnel de l'intérieur vers l'objet voulu. La volonté est le moteur de l'action : on fait ce qu'on veut, on cherche ce qu'on désire."},
  ])
  log(r,'shy',{'Chose/Être':"Le concept le plus général : tout ce qui est plutôt que rien. Permanent comme catégorie. Matériel ou immatériel.",'Néant':"Absence totale, négation de l'être. Le vide absolu. De rien, rien ne vient sans le Créateur.",'Volonté':"Acte intérieur de tendre vers un objet désiré. Directionnel vers ce qu'on veut. Moteur de l'action."})

  // 244. qrb (قرب) — être proche, sacrifice
  r = await ins('qrb', [
    {sense:'être proche',concept:'Proximité/Rapprochement',description:"État de ce qui est à courte distance spatiale, temporelle ou relationnelle — la proximité peut être permanente (le voisin) ou temporaire (celui qui s'approche). C'est relationnel : on est toujours proche de quelque chose ou quelqu'un. La proximité facilite le contact, l'influence, l'intimité. Être proche de Dieu c'est être en relation intime avec Lui par la foi et l'obéissance."},
    {sense:'s\'approcher',concept:'Proximité/Rapprochement',description:''},
    {sense:'rapprocher',concept:'Proximité/Rapprochement',description:''},
    {sense:'sacrifice',concept:'Offrande/Sacrifice',description:"Ce qu'on rapproche de Dieu comme offrande — le sacrifice (qurbân) est directionnel vers Dieu, c'est un acte extérieur par lequel on donne quelque chose de précieux pour se rapprocher du divin. C'est ponctuel dans l'acte mais crée un lien durable. Le sacrifice coûte à celui qui offre : on ne sacrifie pas ce qui n'a pas de valeur."},
    {sense:'offrande',concept:'Offrande/Sacrifice',description:''},
    {sense:'parent proche',concept:'Parenté',description:"Celui qui est proche par le sang et la lignée — le parent proche partage l'origine, c'est un état permanent de relation. La proximité du sang crée des droits et des devoirs que la distance géographique n'annule pas."},
  ])
  log(r,'qrb',{'Proximité/Rapprochement':"État relationnel de courte distance. Facilite le contact et l'intimité. Être proche de Dieu par la foi.",'Offrande/Sacrifice':"Ce qu'on rapproche de Dieu en donnant. Directionnel vers le divin. Coûte à celui qui offre.",'Parenté':"Proximité permanente par le sang. Crée des droits et devoirs."})

  // 245. hdh (هذه) — celle-ci
  r = await ins('hdh', [
    {sense:'celle-ci',concept:'Démonstratif/Désignation',description:"Pronom démonstratif féminin qui désigne ce qui est présent et proche — celle-ci pointe vers une réalité accessible, visible, à portée. C'est directionnel du locuteur vers ce qu'il montre. Le démonstratif rend présent, il fait voir, il attire l'attention sur quelque chose de particulier. C'est ponctuel dans l'acte de désigner mais ce qui est désigné peut être permanent."},
    {sense:'cette',concept:'Démonstratif/Désignation',description:''},
    {sense:'ceci',concept:'Démonstratif/Désignation',description:''},
  ])
  log(r,'hdh',{'Démonstratif/Désignation':"Pointer vers ce qui est présent et proche. Directionnel vers ce qu'on montre. Rendre visible et attirer l'attention."})

  // 246. shjr (شجر) — arbre, dispute
  r = await ins('shjr', [
    {sense:'arbre',concept:'Arbre/Végétation',description:"Plante ligneuse à tronc qui s'élève de la terre vers le ciel — l'arbre est un être permanent qui pousse, enraciné en bas et ramifié en haut. L'arbre est symbole de vie (il pousse, il donne des fruits), de stabilité (il est enraciné), de verticalité (il monte vers le haut). L'arbre bon donne de bons fruits selon le Coran. L'arbre du Paradis a été interdit à Adam."},
    {sense:'plante',concept:'Arbre/Végétation',description:''},
    {sense:'dispute',concept:'Conflit/Querelle',description:"Désaccord qui s'élève entre personnes comme des branches qui s'entremêlent et s'opposent — la dispute est un conflit de paroles ou de volontés. C'est directionnel entre les parties qui s'affrontent. La dispute peut être ponctuelle (un différend) ou révéler une opposition plus profonde. Les branches qui s'emmêlent compliquent : de même les disputes embrouillent les relations."},
    {sense:'être emmêlé',concept:'Conflit/Querelle',description:''},
    {sense:'s\'élever',concept:'Élévation',description:"Mouvement vers le haut comme l'arbre qui pousse — s'élever est directionnel de bas en haut. C'est progressif et peut être permanent (ce qui est élevé reste en haut). S'élever c'est grandir vers la lumière, dépasser ce qui est bas."},
  ])
  log(r,'shjr',{'Arbre/Végétation':"Être permanent enraciné qui s'élève vers le haut. Symbole de vie, stabilité, verticalité. L'arbre bon donne de bons fruits.",'Conflit/Querelle':"Opposition qui emmêle comme des branches. Directionnel entre parties. Complique les relations.",'Élévation':"Mouvement vers le haut. Grandir vers la lumière. Dépasser ce qui est bas."})

  // 247. bdw (بدو) — apparaître, bédouin
  r = await ins('bdw', [
    {sense:'apparaître',concept:'Apparition/Manifestation',description:"Acte de devenir visible après avoir été caché — apparaître est directionnel de l'invisible vers le visible, de l'intérieur vers l'extérieur accessible aux regards. C'est ponctuel dans le moment où l'on voit mais ce qui apparaît peut rester visible. Apparaître c'est se manifester, se montrer, sortir du caché. Ce qui apparaît existait avant d'être vu."},
    {sense:'se montrer',concept:'Apparition/Manifestation',description:''},
    {sense:'sembler',concept:'Apparition/Manifestation',description:''},
    {sense:'bédouin',concept:'Désert/Nomadisme',description:"Habitant du désert qui vit de façon nomade dans l'espace ouvert — le bédouin est permanent dans son mode de vie, il habite là où tout apparaît sans obstacle car le désert ne cache rien. C'est l'homme de l'espace nu, libre de l'attache aux villes et aux cultures sédentaires. Le bédouin est associé dans le Coran à la rudesse et parfois à l'hypocrisie des nomades."},
    {sense:'désert',concept:'Désert/Nomadisme',description:''},
  ])
  log(r,'bdw',{'Apparition/Manifestation':"Passage de l'invisible au visible, de l'intérieur vers l'extérieur. Ponctuel dans l'acte de voir. Se manifester, se montrer.",'Désert/Nomadisme':"Mode de vie permanent dans l'espace ouvert où tout apparaît. L'homme de l'espace nu, libre des villes."})

  console.log('\n=== Batch 26 v3 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
