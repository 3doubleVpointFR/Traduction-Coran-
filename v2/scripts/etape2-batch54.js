const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 507, total = 2321

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

  // Skip ma' et ns'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])

  // 510. emr (عمر) — vie, âge
  r = await ins('emr', [
    {sense:'vie',concept:'Vie/Durée',description:"Le temps vécu par un être — la vie ('umr) est la durée d'existence accordée par Dieu. C'est permanent comme mesure du temps personnel. Par ta vie ! (la'amruka) est un serment par la vie du Prophète. L'âge avancé est un retour vers la faiblesse originelle, et celui qui vit longtemps voit se réduire sa science."},
    {sense:'âge',concept:'Vie/Durée',description:''},
    {sense:'longévité',concept:'Vie/Durée',description:''},
    {sense:'peupler',concept:'Habitation/Construction',description:"Habiter un lieu et le faire vivre — peupler ('amara) c'est rendre un lieu vivant par la présence. Les mosquées sont peuplées par ceux qui croient en Dieu."},
    {sense:'construire',concept:'Habitation/Construction',description:''},
  ])
  log(r,'emr',{'Vie/Durée':"Temps vécu. Par ta vie! L'âge avancé est retour à la faiblesse.",'Habitation/Construction':"Rendre vivant par la présence. Peupler les mosquées."})

  // 511. khzn (خزن) — stocker, trésor
  r = await ins('khzn', [
    {sense:'stocker',concept:'Conservation/Réserve',description:"Garder en réserve pour l'avenir — stocker (khazana) est l'acte de mettre de côté et de protéger. C'est directionnel vers l'intérieur du lieu de stockage. Les trésors (khazâ'in) des cieux et de la terre appartiennent à Dieu. Il détient les clés de tout ce qui existe et dispense comme Il veut. Le gardien (khâzin) veille sur ce qui lui est confié."},
    {sense:'thésauriser',concept:'Conservation/Réserve',description:''},
    {sense:'trésor',concept:'Conservation/Réserve',description:''},
    {sense:'gardien',concept:'Conservation/Réserve',description:''},
  ])
  log(r,'khzn',{'Conservation/Réserve':"Garder en réserve. Les trésors des cieux appartiennent à Dieu."})

  // 512. m'aw (معو) — intestins, refuge
  r = await ins("m'aw", [
    {sense:'intestins',concept:'Intérieur/Corps',description:"Les entrailles, la partie la plus interne du corps — les intestins (am'â') sont ce qui digère et transforme la nourriture. C'est intérieur et caché dans les profondeurs du corps. L'eau bouillante déchirera leurs intestins. Ce qui est le plus interne subit le châtiment le plus pénétrant."},
    {sense:'entrailles',concept:'Intérieur/Corps',description:''},
    {sense:'refuge',concept:'Abri',description:"Lieu où l'on se retire pour être protégé — le refuge (ma'wâ) est l'endroit où l'on trouve la sécurité. Le Paradis est le refuge des croyants."},
  ])
  log(r,"m'aw",{'Intérieur/Corps':"Entrailles. L'eau bouillante déchirera les intestins.",'Abri':"Lieu de sécurité. Le Paradis est le refuge."})

  // 513. lwh (لوح) — tablette, planche
  r = await ins('lwh', [
    {sense:'tablette',concept:'Support/Écriture',description:"Surface sur laquelle on écrit — la tablette (lawh) est permanente comme support de l'écriture divine. La Table gardée (al-Lawh al-Mahfûz) contient tout ce qui fut et sera décrété. Les Tables de Moïse contenaient la guidance et la miséricorde. Ce qui est inscrit sur la tablette est préservé de l'oubli et de l'altération."},
    {sense:'planche',concept:'Support/Écriture',description:''},
    {sense:'Table gardée',concept:'Support/Écriture',description:''},
  ])
  log(r,'lwh',{'Support/Écriture':"Surface d'écriture. La Table gardée contient tout décret. Préservé de l'oubli."})

  // 514. awh (أوه) — se lamenter, hélas
  r = await ins('awh', [
    {sense:'se lamenter',concept:'Plainte/Compassion',description:"Exprimer sa douleur par des exclamations — se lamenter (awwaha/ta'awwaha) est l'expression sonore de la souffrance intérieure. Abraham était certes très implorant (awwâh) et plein de mansuétude. Le awwâh est celui dont le cœur est si tendre qu'il gémit de compassion pour les autres et d'amour pour Dieu."},
    {sense:'gémir',concept:'Plainte/Compassion',description:''},
    {sense:'hélas',concept:'Plainte/Compassion',description:''},
    {sense:'compatissant',concept:'Plainte/Compassion',description:''},
  ])
  log(r,'awh',{'Plainte/Compassion':"Exprimer la douleur. Abraham était awwâh. Cœur tendre qui gémit."})

  // 515. myt (ميت) — mort, mourir
  r = await ins('myt', [
    {sense:'mort',concept:'Mort/Fin',description:"Cessation de la vie — la mort (mawt) est le passage de l'état vivant à l'état sans vie. C'est ponctuel dans l'instant du trépas mais permanent dans l'état qui en résulte. Toute âme goûtera la mort. La mort est certitude (yaqîn) qui attend chacun. Elle n'est pas anéantissement mais passage vers une autre demeure."},
    {sense:'mourir',concept:'Mort/Fin',description:''},
    {sense:'décéder',concept:'Mort/Fin',description:''},
    {sense:'tuer',concept:'Mort/Fin',description:''},
    {sense:'terre morte',concept:'Résurrection',description:"Sol sans végétation que Dieu fait revivre — la terre morte (mayta) que la pluie ranime est signe de la résurrection des corps."},
  ])
  log(r,'myt',{'Mort/Fin':"Cessation de la vie. Toute âme la goûtera. Passage vers une autre demeure.",'Résurrection':"Terre morte ranimée. Signe de la résurrection."})

  // 516. nyl (نيل) — Nil, obtenir
  r = await ins('nyl', [
    {sense:'obtenir',concept:'Obtention/Atteinte',description:"Parvenir à ce qu'on visait — obtenir (nâla/yanâlu) est l'acte d'atteindre son but. C'est directionnel vers ce qu'on acquiert. Vous n'atteindrez la piété que si vous dépensez de ce que vous aimez. Ce qui atteint Dieu n'est pas la chair des sacrifices mais la piété des cœurs."},
    {sense:'atteindre',concept:'Obtention/Atteinte',description:''},
    {sense:'parvenir',concept:'Obtention/Atteinte',description:''},
    {sense:'Nil',concept:'Fleuve',description:"Le grand fleuve d'Égypte — le Nil est le don de Dieu à l'Égypte, source de vie dans le désert."},
  ])
  log(r,'nyl',{'Obtention/Atteinte':"Parvenir au but. La piété atteint Dieu, non la chair.",'Fleuve':"Le Nil, don de Dieu à l'Égypte."})

  // 517. ayk (أيك) — fourré, bosquet
  r = await ins('ayk', [
    {sense:'fourré',concept:'Végétation dense',description:"Ensemble touffu d'arbres et de buissons — le fourré (ayka) est une végétation dense et entremêlée. C'est permanent comme formation végétale. Les gens du Fourré (ashâb al-Ayka) sont le peuple de Shu'ayb qui fut détruit pour sa malhonnêteté dans les mesures. Le fourré peut être refuge ou lieu de perdition."},
    {sense:'bosquet',concept:'Végétation dense',description:''},
    {sense:'forêt',concept:'Végétation dense',description:''},
  ])
  log(r,'ayk',{'Végétation dense':"Végétation touffue. Les gens du Fourré détruits pour malhonnêteté."})

  console.log('\n=== Batch 54 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
