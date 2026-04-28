const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1028, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. ibrhm (إبراهيم) — nom propre, racine brh = preuve, blancheur
  r=await ins('ibrhm',[
    {sense:'Abraham (nom propre)',concept:'Nom propre',description:"Nom du prophète patriarche. C'est un nom propre permanent qui désigne une personne historique précise — il ne change pas selon le contexte."},
    {sense:'preuve claire',concept:'Preuve/Évidence',description:"Ce qui rend la vérité manifeste et indiscutable. La preuve sort de celui qui la présente et atteint celui qui la reçoit — c'est directionnel et rationnel. La preuve éclaire l'esprit de façon permanente une fois comprise."},
    {sense:'longue période',concept:'Durée',description:"Un espace de temps étendu. La durée est un état permanent par nature — elle s'étend et persiste dans le temps."},
  ]);log(r,'ibrhm')

  // 2. stf (صطف → صف) — ranger en rang, aligner
  r=await ins('stf',[
    {sense:'ranger en rang',concept:'Alignement/Ordre',description:"Acte extérieur de placer des personnes ou des choses en ligne droite. L'alignement sort de celui qui organise et atteint ceux qui sont rangés — c'est directionnel et crée un ordre visible. Le rang est permanent tant que personne ne le rompt."},
    {sense:'se mettre en rang',concept:'Alignement/Ordre',description:''},
    {sense:'s\'aligner pour le combat',concept:'Alignement/Ordre',description:''},
    {sense:'rangée',concept:'Alignement/Ordre',description:''},
    {sense:'galerie couverte (suffa)',concept:'Abri/Véranda',description:"Espace couvert attenant à un bâtiment, lieu de repos et de rassemblement. L'abri est un lieu permanent qui protège ceux qui s'y trouvent."},
    {sense:'dalle plate',concept:'Surface/Platitude',description:"Pierre lisse et plane. La surface plate est un état permanent de ce qui a été aplani — elle offre une base stable."},
  ]);log(r,'stf')

  // 3. dhrr (ذرو) — disperser, répandre, créer (progéniture)
  r=await ins('dhrr',[
    {sense:'disperser au vent',concept:'Dispersion/Éparpillement',description:"Acte extérieur de jeter quelque chose pour que le vent l'emporte dans toutes les directions. La dispersion sort de celui qui jette et atteint ce qui est dispersé — c'est directionnel et ponctuel. Ce qui est dispersé ne revient pas à son état initial."},
    {sense:'répandre',concept:'Dispersion/Éparpillement',description:''},
    {sense:'vanner le grain',concept:'Dispersion/Éparpillement',description:''},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants et petits-enfants que l'on engendre, la lignée qui se multiplie. La descendance sort du parent et se répand dans le monde — c'est directionnel et permanent. La progéniture est la dispersion de la vie à travers les générations."},
    {sense:'multiplier (les créatures)',concept:'Descendance/Multiplication',description:''},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose visible, le grain de poussière dans un rayon de soleil. L'atome est permanent dans son existence mais infime dans sa taille — il est ce que le vent emporte."},
  ]);log(r,'dhrr')

  // 4. nsk (نسك) — adorer, rite, sacrifice, purifier
  r=await ins('nsk',[
    {sense:'adorer',concept:'Dévotion/Culte',description:"Acte intérieur et extérieur de vouer un culte à Dieu par des actes rituels. La dévotion part du dévot et se dirige vers Dieu — c'est directionnel vers le haut. C'est un état permanent chez celui qui s'y consacre."},
    {sense:'se consacrer à la dévotion',concept:'Dévotion/Culte',description:''},
    {sense:'devenir dévot',concept:'Dévotion/Culte',description:''},
    {sense:'rites du pèlerinage',concept:'Rite/Cérémonie',description:"Les actes codifiés du pèlerinage que l'on accomplit dans un ordre précis. Le rite est extérieur et visible, il sort du pèlerin et s'accomplit dans des lieux précis — c'est ponctuel et localisé."},
    {sense:'lieux des rites',concept:'Rite/Cérémonie',description:''},
    {sense:'bête sacrifiée',concept:'Sacrifice',description:"Animal immolé comme offrande rituelle. Le sacrifice sort de celui qui offre et atteint l'animal — c'est directionnel et ponctuel, un acte unique qui ne se répète pas pour la même bête."},
    {sense:'purifier un vêtement',concept:'Purification',description:"Acte extérieur de nettoyer et rendre pur ce qui était souillé. La purification sort de celui qui purifie et atteint ce qui est purifié — c'est directionnel et ponctuel."},
  ]);log(r,'nsk')

  // 5. beṯ (بعث) — envoyer, ressusciter, éveiller, inciter
  r=await ins('be\u1E6F',[
    {sense:'envoyer',concept:'Envoi/Mission',description:"Acte extérieur de faire partir quelqu'un vers un but. L'envoi sort de l'expéditeur et atteint l'envoyé puis sa destination — c'est doublement directionnel. C'est ponctuel dans l'acte mais crée une mission qui dure."},
    {sense:'envoyer un messager',concept:'Envoi/Mission',description:''},
    {sense:'ressusciter',concept:'Résurrection/Éveil',description:"Acte de ramener à la vie ce qui était mort, de tirer du néant vers l'existence. La résurrection sort de Dieu et atteint celui qui est ressuscité — c'est directionnel et transforme un état permanent (la mort) en un autre état permanent (la vie)."},
    {sense:'éveiller du sommeil',concept:'Résurrection/Éveil',description:''},
    {sense:'se lever pour partir',concept:'Résurrection/Éveil',description:''},
    {sense:'inciter',concept:'Incitation/Impulsion',description:"Acte extérieur de pousser quelqu'un à agir. L'incitation sort de celui qui pousse et atteint celui qui est poussé — c'est directionnel et ponctuel. L'incitation met en mouvement ce qui était immobile."},
    {sense:'exciter',concept:'Incitation/Impulsion',description:''},
  ]);log(r,'be\u1E6F')

  // 6. ezz (عزز) — être puissant, être rare, renforcer, aimer
  r=await ins('ezz',[
    {sense:'être puissant',concept:'Puissance/Gloire',description:"État de celui qui possède la force et l'autorité que personne ne peut vaincre. La puissance est un état intérieur permanent qui rayonne vers l'extérieur — celui qui est puissant impose le respect par sa seule présence. C'est un état qui reste dans celui qui le possède."},
    {sense:'être glorieux',concept:'Puissance/Gloire',description:''},
    {sense:'être invincible',concept:'Puissance/Gloire',description:''},
    {sense:'être rare et précieux',concept:'Rareté/Valeur',description:"État de ce qui est difficile à trouver et donc hautement estimé. La rareté est un état permanent de ce qui existe en petite quantité — elle reste dans ce qui est rare et lui confère sa valeur."},
    {sense:'renforcer',concept:'Renforcement',description:"Acte extérieur de rendre plus fort, de consolider. Le renforcement sort de celui qui renforce et atteint ce qui est renforcé — c'est directionnel et crée un état de solidité durable."},
    {sense:'aimer',concept:'Divers',description:'Sens rare attesté par certains lexicographes.'},
  ]);log(r,'ezz')

  // 7. ksr (خسر, doublon de khsr) — perdre
  // ksr id=808 est un doublon de khsr id=431, vérifions si khsr est déjà fait
  r=await ins('ksr',[
    {sense:'perdre',concept:'Perte/Diminution',description:"Acte de ne plus avoir ce qu'on avait. La perte est une diminution qui affecte celui qui perd — c'est un mouvement négatif, une sortie sans retour. La perte sort de celui qui perd et emporte ce qu'il avait."},
    {sense:'subir une perte',concept:'Perte/Diminution',description:''},
    {sense:'diminuer',concept:'Perte/Diminution',description:''},
    {sense:'être trompé',concept:'Tromperie/Erreur',description:"État de celui qui a été induit en erreur. Être trompé c'est perdre par la faute d'autrui — c'est directionnel de l'extérieur vers l'intérieur. C'est ponctuel dans l'acte mais les conséquences peuvent être permanentes."},
    {sense:'être dans l\'erreur',concept:'Tromperie/Erreur',description:''},
    {sense:'faire périr',concept:'Destruction',description:"Acte de causer la perte totale de quelqu'un. Faire périr est la perte ultime — c'est directionnel et définitif, un acte ponctuel aux conséquences irréversibles."},
  ]);log(r,'ksr')

  // 8. umm (أمم) — mère, communauté, se diriger vers, guide
  r=await ins('umm',[
    {sense:'se diriger vers',concept:'Direction/Intention',description:"Acte extérieur de s'orienter vers un but, de prendre une direction délibérée. La direction sort du marcheur et pointe vers la destination — c'est directionnel par essence. C'est ponctuel dans le mouvement mais peut exprimer une orientation permanente de la vie."},
    {sense:'viser',concept:'Direction/Intention',description:''},
    {sense:'mère',concept:'Maternité/Origine',description:"Celle qui engendre et nourrit, l'origine de la vie. La mère est la source permanente d'où l'on vient — la maternité reste dans celle qui la porte. C'est une relation qui ne se rompt jamais, un lien intérieur et définitif."},
    {sense:'être une mère pour',concept:'Maternité/Origine',description:''},
    {sense:'communauté',concept:'Communauté/Nation',description:"Groupe de personnes unies par une même direction, une même croyance ou un même guide. La communauté est un état permanent de rassemblement — elle existe tant que ses membres partagent le même but."},
    {sense:'nation',concept:'Communauté/Nation',description:''},
    {sense:'guide (imam)',concept:'Guide/Modèle',description:"Celui qui se tient devant et que les autres suivent. Le guide sort du rang et dirige les autres — c'est directionnel de l'imam vers ceux qui le suivent. C'est un rôle permanent tant que dure l'autorité."},
    {sense:'diriger la prière',concept:'Guide/Modèle',description:''},
    {sense:'origine, principe',concept:'Maternité/Origine',description:''},
  ]);log(r,'umm')

  // 9. brhm — variante de ibrhm, traiter comme nom propre
  r=await ins('brhm',[
    {sense:'Abraham (variante)',concept:'Nom propre',description:"Variante du nom du prophète Ibrahim/Abraham. C'est un nom propre permanent et inchangeable."},
    {sense:'preuve',concept:'Preuve/Évidence',description:"Ce qui établit la vérité de façon indiscutable. La preuve sort de celui qui argumente et atteint l'esprit de celui qui reçoit — c'est directionnel et rationnel. Une fois établie, la preuve est permanente."},
  ]);log(r,'brhm')

  // 10. rdw (رضو) — agréer, être satisfait, approuver
  r=await ins('rdw',[
    {sense:'être satisfait',concept:'Satisfaction/Agrément',description:"État intérieur de contentement face à ce qui est. La satisfaction reste dans celui qui la ressent — c'est un état permanent tant que la cause demeure. C'est un jugement rationnel d'approbation, pas une simple émotion : celui qui est satisfait a évalué et accepté."},
    {sense:'agréer',concept:'Satisfaction/Agrément',description:''},
    {sense:'approuver',concept:'Satisfaction/Agrément',description:''},
    {sense:'consentir',concept:'Satisfaction/Agrément',description:''},
    {sense:'choisir pour soi',concept:'Choix/Préférence',description:"Acte intérieur de sélectionner ce que l'on préfère. Le choix est un jugement rationnel qui part de celui qui choisit — c'est directionnel vers l'objet choisi. C'est ponctuel dans l'acte mais peut créer un état permanent de préférence."},
    {sense:'rendre satisfait',concept:'Choix/Préférence',description:''},
  ]);log(r,'rdw')

  console.log('\n=== Batch 144 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
