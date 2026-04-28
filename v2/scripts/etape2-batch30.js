const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 278, total = 2321

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

  // 279. khaʃe (خشع) — s'humilier, être humble devant Dieu
  r = await ins('khaʃe', [
    {sense:'s\'humilier',concept:'Humilité/Soumission',description:"État intérieur de l'âme qui se reconnaît petite devant ce qui la dépasse — l'humilité (khushu') est un abaissement volontaire qui n'est pas humiliation mais reconnaissance de sa vraie place. C'est permanent comme disposition du cœur et se manifeste dans le corps qui s'incline. L'humilité devant Dieu est la porte de toute élévation spirituelle : celui qui s'abaisse sincèrement est élevé."},
    {sense:'être humble',concept:'Humilité/Soumission',description:''},
    {sense:'se soumettre',concept:'Humilité/Soumission',description:''},
    {sense:'recueillement',concept:'Humilité/Soumission',description:''},
    {sense:'baisser la voix',concept:'Discrétion',description:"Acte de modérer son expression par respect ou humilité — baisser la voix est directionnel vers l'intérieur, un retrait de la manifestation extérieure. C'est ponctuel mais révèle une disposition permanente de retenue."},
  ])
  log(r,'khaʃe',{'Humilité/Soumission':"Abaissement volontaire devant ce qui dépasse. Permanent dans le cœur. Porte de l'élévation spirituelle.",'Discrétion':"Modérer son expression par respect. Retrait vers l'intérieur."})

  // 280. zkw (زكو) — purifier, aumône, croître
  r = await ins('zkw', [
    {sense:'purifier',concept:'Purification/Croissance',description:"Acte de nettoyer ce qui est souillé et de faire croître ce qui est bon — la zakât purifie les biens en les partageant et fait croître le bien restant. C'est directionnel du donneur vers le receveur et de l'impur vers le pur. La purification enlève ce qui empêche la croissance saine. L'âme se purifie par les bonnes œuvres et croît en vertu."},
    {sense:'aumône légale',concept:'Purification/Croissance',description:''},
    {sense:'croître',concept:'Purification/Croissance',description:''},
    {sense:'être pur',concept:'Purification/Croissance',description:''},
    {sense:'prospérer',concept:'Purification/Croissance',description:''},
  ])
  log(r,'zkw',{'Purification/Croissance':"Nettoyer et faire croître. Directionnel de l'impur vers le pur. L'aumône purifie et multiplie."})

  // 281. rka (ركع) — s'incliner, génuflexion
  r = await ins('rka', [
    {sense:'s\'incliner',concept:'Inclination/Prière',description:"Acte corporel de courber le dos en signe de soumission à Dieu — l'inclination (ruku') est un moment de la prière où le corps traduit l'humilité de l'âme. C'est directionnel vers le bas et vers Dieu simultanément. C'est ponctuel dans le geste mais répété dans chaque prière. S'incliner c'est reconnaître par le corps que l'on n'est pas le plus grand."},
    {sense:'génuflexion',concept:'Inclination/Prière',description:''},
    {sense:'se courber',concept:'Inclination/Prière',description:''},
    {sense:'prière',concept:'Inclination/Prière',description:''},
  ])
  log(r,'rka',{'Inclination/Prière':"Courber le corps en signe de soumission. Directionnel vers le bas et vers Dieu. Le corps traduit l'humilité de l'âme."})

  // 282. lbs (لبس) — vêtir, revêtir, confusion
  r = await ins('lbs', [
    {sense:'vêtir',concept:'Vêtement/Revêtement',description:"Acte de couvrir le corps d'un habit — vêtir est directionnel de l'extérieur vers le corps qu'on recouvre. Le vêtement protège, cache et distingue. C'est ponctuel dans l'acte mais crée un état permanent de couverture. On revêt aussi les qualités comme on revêt un habit : revêtir la piété, revêtir la patience."},
    {sense:'habiller',concept:'Vêtement/Revêtement',description:''},
    {sense:'revêtir',concept:'Vêtement/Revêtement',description:''},
    {sense:'vêtement',concept:'Vêtement/Revêtement',description:''},
    {sense:'confondre',concept:'Confusion/Mélange',description:"Acte de mêler les choses au point qu'on ne les distingue plus — la confusion est directionnelle, elle va du clair vers l'obscur. Confondre le vrai et le faux c'est habiller le faux des apparences du vrai. La confusion est une forme de voile sur la vérité."},
    {sense:'obscurcir',concept:'Confusion/Mélange',description:''},
  ])
  log(r,'lbs',{'Vêtement/Revêtement':"Couvrir le corps. Directionnel vers ce qu'on recouvre. Protège, cache, distingue.",'Confusion/Mélange':"Mêler au point de ne plus distinguer. Du clair vers l'obscur. Voiler la vérité."})

  // 283. btl (بطل) — être vain, annuler
  r = await ins('btl', [
    {sense:'être vain',concept:'Vanité/Nullité',description:"État de ce qui est sans valeur réelle, sans effet durable — le bâtil est l'opposé du haqq (vrai). C'est permanent comme nature de ce qui est faux et illusoire. Le vain n'a pas de fondement, il s'effondre quand la vérité apparaît. Les faux dieux sont bâtil car ils n'ont aucun pouvoir réel."},
    {sense:'faux',concept:'Vanité/Nullité',description:''},
    {sense:'nul',concept:'Vanité/Nullité',description:''},
    {sense:'annuler',concept:'Annulation',description:"Acte de rendre nul ce qui avait une valeur — annuler est directionnel vers ce qu'on prive d'effet. C'est ponctuel et définitif. Le mensonge annule la valeur de la parole. Les mauvaises actions peuvent annuler les bonnes."},
    {sense:'invalider',concept:'Annulation',description:''},
  ])
  log(r,'btl',{'Vanité/Nullité':"Ce qui est sans valeur réelle. Opposé du vrai. S'effondre devant la vérité.",'Annulation':"Rendre nul ce qui avait valeur. Directionnel et définitif."})

  // 284. atmr (أمر) — ordonner, commander, affaire
  r = await ins('atmr', [
    {sense:'ordonner',concept:'Commandement/Autorité',description:"Acte d'imposer sa volonté par la parole à celui qui doit obéir — l'ordre sort de celui qui commande et atteint celui qui doit exécuter. C'est directionnel et implique une hiérarchie : le supérieur ordonne, l'inférieur obéit. L'ordre de Dieu est absolu car Sa volonté crée ce qu'elle énonce. L'ordre humain peut être juste ou injuste."},
    {sense:'commander',concept:'Commandement/Autorité',description:''},
    {sense:'ordre',concept:'Commandement/Autorité',description:''},
    {sense:'affaire',concept:'Affaire/Chose',description:"Ce dont on s'occupe, ce qui requiert attention et décision — l'affaire (amr) est permanente tant qu'elle n'est pas résolue. Elle concerne celui qui en a la charge. L'Affaire de Dieu (amr Allah) est Son décret qui régit toute chose."},
    {sense:'chose',concept:'Affaire/Chose',description:''},
    {sense:'décret',concept:'Affaire/Chose',description:''},
  ])
  log(r,'atmr',{'Commandement/Autorité':"Imposer sa volonté par la parole. Directionnel du supérieur vers l'inférieur. L'ordre divin est absolu.",'Affaire/Chose':"Ce qui requiert attention et décision. Permanente tant que non résolue."})

  // 285. brr (برر) — être pieux, terre ferme
  r = await ins('brr', [
    {sense:'être pieux',concept:'Piété/Bonté',description:"État de celui qui accomplit le bien avec constance et sincérité — la piété (birr) est permanente comme disposition du cœur qui se traduit en actes. C'est intérieur dans son origine mais se manifeste dans le comportement extérieur. Le pieux fait le bien envers Dieu, les parents, les proches, les orphelins. La piété englobe toutes les vertus pratiquées pour Dieu."},
    {sense:'piété',concept:'Piété/Bonté',description:''},
    {sense:'bonté',concept:'Piété/Bonté',description:''},
    {sense:'vertueux',concept:'Piété/Bonté',description:''},
    {sense:'terre ferme',concept:'Terre/Sol',description:"Le sol stable par opposition à la mer — la terre (barr) est permanente et solide, elle porte les êtres. C'est le lieu de la stabilité où l'on peut s'établir."},
    {sense:'continent',concept:'Terre/Sol',description:''},
  ])
  log(r,'brr',{'Piété/Bonté':"Faire le bien avec constance et sincérité. Permanent dans le cœur. Englobe toutes les vertus pour Dieu.",'Terre/Sol':"Sol stable et permanent. Lieu de l'établissement."})

  // 286. ayy (آي) — quel, lequel
  r = await ins('ayy', [
    {sense:'quel',concept:'Interrogation/Sélection',description:"Pronom interrogatif qui demande d'identifier parmi un ensemble — quel ouvre le champ des possibles et demande une sélection. C'est directionnel du questionneur vers les options. C'est un acte rationnel de discrimination : parmi tout ceci, lequel ? La question attend une réponse qui restreint l'indéterminé au déterminé."},
    {sense:'lequel',concept:'Interrogation/Sélection',description:''},
    {sense:'n\'importe quel',concept:'Interrogation/Sélection',description:''},
  ])
  log(r,'ayy',{'Interrogation/Sélection':"Demander d'identifier parmi un ensemble. Directionnel vers les options. Discrimination rationnelle."})

  // 287. nsy (نسي) — oublier
  r = await ins('nsy', [
    {sense:'oublier',concept:'Oubli/Négligence',description:"Acte involontaire ou volontaire de perdre le souvenir de quelque chose — l'oubli est la disparition de la conscience de ce qui était su. C'est ponctuel quand il survient mais peut devenir permanent. L'oubli de Dieu est le pire des oublis car il fait perdre le sens de l'existence. Dieu n'oublie pas, mais Il peut 'oublier' celui qui L'a oublié, c'est-à-dire le délaisser."},
    {sense:'négliger',concept:'Oubli/Négligence',description:''},
    {sense:'omettre',concept:'Oubli/Négligence',description:''},
    {sense:'laisser',concept:'Oubli/Négligence',description:''},
  ])
  log(r,'nsy',{'Oubli/Négligence':"Perdre le souvenir. Ponctuel ou permanent. L'oubli de Dieu est le pire des oublis."})

  // 288. qra (قرأ) — lire, réciter
  r = await ins('qra', [
    {sense:'lire',concept:'Lecture/Récitation',description:"Acte de prononcer à voix haute ou de parcourir des yeux un texte écrit — la lecture (qirâ'a) est directionnelle du texte vers le lecteur qui reçoit le sens. C'est ponctuel dans chaque lecture mais peut être répétée. Le Coran (Qur'ân) est par excellence ce qui est récité : la parole divine destinée à être lue, méditée, intériorisée. Lire le Coran c'est entendre Dieu parler."},
    {sense:'réciter',concept:'Lecture/Récitation',description:''},
    {sense:'Coran',concept:'Lecture/Récitation',description:''},
    {sense:'proclamer',concept:'Lecture/Récitation',description:''},
  ])
  log(r,'qra',{'Lecture/Récitation':"Prononcer ou parcourir un texte. Directionnel du texte vers le lecteur. Le Coran est la récitation par excellence."})

  console.log('\n=== Batch 30 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
