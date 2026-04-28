const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 473, total = 2321

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

  // Skip ma'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])

  // 475. hrs (حرص) — convoiter, être avide
  r = await ins('hrs', [
    {sense:'convoiter',concept:'Avidité/Désir intense',description:"Désirer quelque chose avec intensité, vouloir à tout prix — la convoitise (hirs) est un état intérieur de désir ardent. C'est permanent comme disposition du cœur attaché à ce qu'il veut. Vous convoitez qu'ils croient alors qu'un groupe d'entre eux... L'avidité peut pousser à l'excès et faire perdre la mesure."},
    {sense:'être avide',concept:'Avidité/Désir intense',description:''},
    {sense:'désirer ardemment',concept:'Avidité/Désir intense',description:''},
    {sense:'zèle',concept:'Avidité/Désir intense',description:''},
  ])
  log(r,'hrs',{'Avidité/Désir intense':"Désirer avec intensité. Disposition du cœur. Peut faire perdre la mesure."})

  // 476. myl (ميل) — pencher, incliner
  r = await ins('myl', [
    {sense:'pencher',concept:'Inclinaison/Déviation',description:"Quitter la position droite pour aller vers un côté — pencher (mâla/mayl) est directionnel vers ce vers quoi on s'incline. C'est un mouvement de déséquilibre par rapport au centre. Ceux qui veulent que vous vous incliniez (tamîlû) fortement. L'inclination peut être physique (se pencher) ou morale (favoriser, être partial)."},
    {sense:'incliner',concept:'Inclinaison/Déviation',description:''},
    {sense:'dévier',concept:'Inclinaison/Déviation',description:''},
    {sense:'être partial',concept:'Inclinaison/Déviation',description:''},
  ])
  log(r,'myl',{'Inclinaison/Déviation':"Quitter la position droite. Mouvement de déséquilibre. Physique ou moral."})

  // 477. sly (صلي) — brûler, entrer dans le feu
  r = await ins('sly', [
    {sense:'brûler',concept:'Combustion/Châtiment',description:"Être consumé par le feu — brûler (salâ/yaslâ) est l'état de celui qui est dans les flammes. C'est directionnel vers la personne qui brûle, et permanent comme châtiment de l'enfer. Ils brûleront dans un Feu ardent. Le feu de l'enfer brûle les corps sans les consumer, douleur éternelle sans fin."},
    {sense:'être exposé au feu',concept:'Combustion/Châtiment',description:''},
    {sense:'rôtir',concept:'Combustion/Châtiment',description:''},
    {sense:'endurer le feu',concept:'Combustion/Châtiment',description:''},
  ])
  log(r,'sly',{'Combustion/Châtiment':"Être consumé par le feu. Châtiment éternel. Douleur sans fin."})

  // 478. rsx (رسخ) — être ferme, enraciné
  r = await ins('rsx', [
    {sense:'être ferme',concept:'Fermeté/Enracinement',description:"Être solidement établi, ne pas bouger — la fermeté (rusûkh) est l'état de ce qui est enraciné profondément. C'est permanent comme stabilité acquise. Les enracinés dans la science (ar-râsikhûn fî l-'ilm) sont ceux dont le savoir est profond et stable. Ils disent : nous y croyons, tout vient de notre Seigneur."},
    {sense:'enraciné',concept:'Fermeté/Enracinement',description:''},
    {sense:'stable',concept:'Fermeté/Enracinement',description:''},
    {sense:'profond dans la science',concept:'Fermeté/Enracinement',description:''},
  ])
  log(r,'rsx',{'Fermeté/Enracinement':"Solidement établi. Les enracinés dans la science. Savoir profond et stable."})

  // 479. ens (عنص) — élément
  r = await ins('ens', [
    {sense:'élément',concept:'Composant/Base',description:"Partie constitutive d'un tout — l'élément est ce qui entre dans la composition de quelque chose. Les éléments de la création forment ensemble le monde visible. Chaque élément a sa nature propre et son rôle."},
    {sense:'composant',concept:'Composant/Base',description:''},
    {sense:'partie',concept:'Composant/Base',description:''},
  ])
  log(r,'ens',{'Composant/Base':"Partie constitutive. Les éléments forment le monde. Chacun a son rôle."})

  // 480. t y n (طين) — argile
  r = await ins('t y n', [
    {sense:'argile',concept:'Matière/Création',description:"Terre molle avec laquelle on façonne — l'argile (tîn) est la matière dont l'homme a été créé. C'est permanent comme substance de base transformée par le Créateur. Nous avons créé l'homme d'argile, d'une boue malléable. L'argile est humble et malléable, elle prend la forme que le potier lui donne."},
    {sense:'boue',concept:'Matière/Création',description:''},
    {sense:'glaise',concept:'Matière/Création',description:''},
  ])
  log(r,'t y n',{'Matière/Création':"Terre malléable. L'homme créé d'argile. Humble et façonnable."})

  // 481. nsha (نشأ) — créer, élever
  r = await ins('nsha', [
    {sense:'créer',concept:'Création/Origine',description:"Faire exister pour la première fois — créer (ansha'a) est l'acte d'origination. C'est directionnel de Dieu vers Sa création. Dieu vous a créés d'une première création puis vous fera renaître. La création initiale garantit la possibilité de la recréation."},
    {sense:'faire naître',concept:'Création/Origine',description:''},
    {sense:'élever',concept:'Croissance',description:"Faire grandir depuis le début — élever (nash'a) c'est accompagner la croissance. Les jeunes filles élevées dans la parure."},
  ])
  log(r,'nsha',{'Création/Origine':"Faire exister. Création initiale. Garantit la recréation.",'Croissance':"Faire grandir. Accompagner depuis le début."})

  // 482. qhr (قهر) — dominer, vaincre
  r = await ins('qhr', [
    {sense:'dominer',concept:'Domination/Victoire',description:"Exercer un pouvoir supérieur sur quelqu'un — dominer (qahara) est directionnel vers celui qui est soumis. C'est permanent comme rapport de force établi. Dieu est al-Qahhâr, le Dominateur suprême devant qui tout s'incline. L'orphelin ne doit pas être dominé avec dureté car il est vulnérable."},
    {sense:'vaincre',concept:'Domination/Victoire',description:''},
    {sense:'soumettre',concept:'Domination/Victoire',description:''},
    {sense:'opprimer',concept:'Domination/Victoire',description:''},
  ])
  log(r,'qhr',{'Domination/Victoire':"Pouvoir supérieur. Dieu est al-Qahhâr. Ne pas opprimer l'orphelin."})

  // 483. nlw (نول) — atteindre, obtenir
  r = await ins('nlw', [
    {sense:'atteindre',concept:'Obtention/Don',description:"Parvenir à obtenir ce qu'on visait — atteindre (nâla/yanâl) est directionnel vers ce qu'on acquiert. C'est ponctuel dans l'obtention mais peut être permanent dans la possession. Ni leurs viandes ni leur sang n'atteignent Dieu, mais c'est votre piété qui L'atteint. Ce qui compte n'est pas le sacrifice matériel mais l'intention du cœur."},
    {sense:'obtenir',concept:'Obtention/Don',description:''},
    {sense:'donner',concept:'Obtention/Don',description:''},
    {sense:'parvenir',concept:'Obtention/Don',description:''},
  ])
  log(r,'nlw',{'Obtention/Don':"Parvenir à ce qu'on visait. C'est la piété qui atteint Dieu, non les viandes."})

  console.log('\n=== Batch 50 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
