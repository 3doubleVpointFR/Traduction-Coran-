const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 418, total = 2321

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

  // 419. mwd (مود) — amour, affection
  r = await ins('mwd', [
    {sense:'amour',concept:'Amour/Affection',description:"Sentiment d'attachement profond envers quelqu'un — l'amour (mawadda) est intérieur comme disposition du cœur et permanent comme sentiment durable. C'est directionnel vers l'aimé. Dieu a placé entre les époux amour et miséricorde. L'amour sincère recherche le bien de l'aimé et se réjouit de son bonheur."},
    {sense:'affection',concept:'Amour/Affection',description:''},
    {sense:'tendresse',concept:'Amour/Affection',description:''},
    {sense:'souhaiter',concept:'Désir',description:"Vouloir que quelque chose arrive — le souhait (wadda) est intérieur comme mouvement vers ce qu'on désire. Ils souhaitent que vous soyez comme eux."},
  ])
  log(r,'mwd',{'Amour/Affection':"Attachement profond. Entre époux, amour et miséricorde. Recherche le bien de l'aimé.",'Désir':"Vouloir que quelque chose arrive. Mouvement vers ce qu'on désire."})

  // 420. z r e (زرع) — semer, agriculture
  r = await ins('z r e', [
    {sense:'semer',concept:'Semence/Agriculture',description:"Mettre des graines en terre pour qu'elles poussent — semer (zara'a) est directionnel vers la terre et vers l'avenir. C'est ponctuel dans l'acte mais engage un processus de croissance. Est-ce vous qui le faites pousser ou est-ce Nous ? La semence est confiée à la terre mais c'est Dieu qui fait germer et croître."},
    {sense:'cultiver',concept:'Semence/Agriculture',description:''},
    {sense:'plantation',concept:'Semence/Agriculture',description:''},
    {sense:'récolte',concept:'Semence/Agriculture',description:''},
  ])
  log(r,'z r e',{'Semence/Agriculture':"Mettre en terre pour faire pousser. C'est Dieu qui fait germer."})

  // 421. n x l (نخل) — palmier
  r = await ins('n x l', [
    {sense:'palmier',concept:'Arbre/Provision',description:"Arbre des régions chaudes qui donne les dattes — le palmier (nakhla/nakhl) est permanent comme espèce végétale bénie. Il est souvent cité dans le Coran comme signe des bienfaits de Dieu. Le palmier dont le tronc et le fruit nourrissent, dont les feuilles abritent. Il est comparé à la parole bonne dont la racine est ferme."},
    {sense:'dattier',concept:'Arbre/Provision',description:''},
    {sense:'palmeraie',concept:'Arbre/Provision',description:''},
  ])
  log(r,'n x l',{'Arbre/Provision':"Arbre béni donnant les dattes. Signe des bienfaits. Racine ferme comme la bonne parole."})

  // 422. k l l (كلل) — couronne, fatigue
  r = await ins('k l l', [
    {sense:'couronne',concept:'Ornement/Cercle',description:"Parure qui entoure la tête — la couronne (iklîl) est un ornement circulaire qui distingue et honore celui qui la porte. C'est permanent comme symbole de royauté ou de gloire."},
    {sense:'cercle',concept:'Ornement/Cercle',description:''},
    {sense:'fatiguer',concept:'Fatigue/Lassitude',description:"Éprouver de l'épuisement — la fatigue (kalal) est un état temporaire où les forces diminuent. Dieu ne se fatigue pas : le Verset du Trône affirme que ni sommeil ni fatigue ne Le saisissent."},
    {sense:'lasser',concept:'Fatigue/Lassitude',description:''},
  ])
  log(r,'k l l',{'Ornement/Cercle':"Parure qui distingue et honore. Symbole de royauté.",'Fatigue/Lassitude':"Épuisement temporaire. Dieu ne se fatigue pas."})

  // 423. dh l k (ذلك) — celui-là
  r = await ins('dh l k', [
    {sense:'celui-là',concept:'Démonstratif',description:"Pronom désignant le lointain — dhâlika pointe vers ce qui est éloigné. C'est directionnel vers le distant dans l'espace ou le discours. Le démonstratif confère importance et solennité à ce qu'il désigne."},
    {sense:'cela',concept:'Démonstratif',description:''},
    {sense:'voilà',concept:'Démonstratif',description:''},
  ])
  log(r,'dh l k',{'Démonstratif':"Désigne le lointain. Confère solennité et importance."})

  // 424. tham (ذأم) — blâmer
  r = await ins('tham', [
    {sense:'blâmer',concept:'Blâme/Réprobation',description:"Exprimer sa désapprobation envers quelqu'un ou son acte — le blâme (dhamm) est directionnel vers celui qu'on blâme. C'est ponctuel dans l'expression mais peut refléter un jugement permanent. Le blâmé (madhmûm) porte la honte de son acte. Satan sera repoussé, blâmé."},
    {sense:'critiquer',concept:'Blâme/Réprobation',description:''},
    {sense:'réprouver',concept:'Blâme/Réprobation',description:''},
  ])
  log(r,'tham',{'Blâme/Réprobation':"Exprimer la désapprobation. Satan repoussé et blâmé."})

  // 425. eshr (عشر) — dix
  r = await ins('eshr', [
    {sense:'dix',concept:'Nombre/Complétude',description:"Nombre qui suit neuf — dix ('ashr/'ashara) est permanent comme valeur numérique. C'est le nombre de la complétude décimale, base du système de comptage. Dix jours, dix nuits, les dix premiers jours de Dhul-Hijja sont les plus méritoires."},
    {sense:'dixième',concept:'Nombre/Complétude',description:''},
    {sense:'décade',concept:'Nombre/Complétude',description:''},
    {sense:'intimité',concept:'Relation proche',description:"Vivre ensemble de façon proche — la vie commune ('ishra) est relationnelle et permanente tant qu'elle dure. Vivez avec elles selon les convenances."},
  ])
  log(r,'eshr',{'Nombre/Complétude':"Complétude décimale. Les dix jours les plus méritoires.",'Relation proche':"Vie commune. Vivre selon les convenances."})

  // 426. khtm (ختم) — sceller
  r = await ins('khtm', [
    {sense:'sceller',concept:'Sceau/Clôture',description:"Fermer définitivement, apposer un sceau — sceller (khatama) est directionnel vers ce qu'on ferme. C'est ponctuel dans l'acte mais crée un état permanent de fermeture. Dieu a scellé leurs cœurs : ils n'entendent plus la vérité. Muhammad est le sceau des prophètes (khâtam an-nabiyyîn) : après lui, plus de prophète."},
    {sense:'cacheter',concept:'Sceau/Clôture',description:''},
    {sense:'terminer',concept:'Sceau/Clôture',description:''},
    {sense:'sceau',concept:'Sceau/Clôture',description:''},
    {sense:'dernier',concept:'Sceau/Clôture',description:''},
  ])
  log(r,'khtm',{'Sceau/Clôture':"Fermer définitivement. Cœurs scellés. Muhammad sceau des prophètes."})

  // 427. aiḏa — alors, à ce moment
  r = await ins('aiḏa', [
    {sense:'alors',concept:'Temporalité/Circonstance',description:"Adverbe indiquant un moment précis dans le passé ou le futur — 'idhâ' introduit une circonstance temporelle. C'est directionnel vers le moment désigné. Quand le ciel se fendra, quand la terre sera secouée. L'adverbe ouvre la scène de ce qui se passe à ce moment."},
    {sense:'quand',concept:'Temporalité/Circonstance',description:''},
    {sense:'lorsque',concept:'Temporalité/Circonstance',description:''},
  ])
  log(r,'aiḏa',{'Temporalité/Circonstance':"Moment précis. Ouvre la scène. Quand le ciel se fendra."})

  // 428. swf (سوف) — futur
  r = await ins('swf', [
    {sense:'futur',concept:'Avenir/Promesse',description:"Particule qui projette l'action dans l'avenir — 'sawfa' indique que quelque chose arrivera certainement mais plus tard. C'est directionnel vers le temps à venir. Ils sauront bientôt (sawfa ya'lamûn). Le futur annoncé par Dieu est certain car Sa parole s'accomplit toujours."},
    {sense:'bientôt',concept:'Avenir/Promesse',description:''},
    {sense:'plus tard',concept:'Avenir/Promesse',description:''},
  ])
  log(r,'swf',{'Avenir/Promesse':"Projette dans l'avenir. Certain mais ultérieur. Ils sauront bientôt."})

  console.log('\n=== Batch 44 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
