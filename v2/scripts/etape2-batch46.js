const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 437, total = 2321

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

  // 438. ma' (موء) — eau
  r = await ins("ma'", [
    {sense:'eau',concept:'Élément vital',description:"Substance liquide essentielle à toute vie — l'eau (mâ') est permanente comme élément fondamental de la création. De l'eau Dieu a créé tout être vivant. Elle descend du ciel pour faire reverdir la terre morte. L'eau purifie, fertilise, désaltère. Sans elle, pas de vie possible sur terre."},
    {sense:'liquide',concept:'Élément vital',description:''},
    {sense:'pluie',concept:'Élément vital',description:''},
  ])
  log(r,"ma'",{'Élément vital':"Essentielle à toute vie. Tout être vivant créé d'eau. Purifie et fertilise."})

  // 439. a y a (أيء) — signe, verset
  r = await ins('a y a', [
    {sense:'signe',concept:'Signe/Révélation',description:"Ce qui indique une réalité au-delà de lui-même — le signe (âya) est permanent comme indicateur de sens. Les signes de Dieu sont partout : dans les cieux, sur terre, en nous-mêmes. Les versets du Coran sont aussi des signes qui guident vers la vérité. Voir les signes c'est accéder à la connaissance de Celui qui les a posés."},
    {sense:'verset',concept:'Signe/Révélation',description:''},
    {sense:'miracle',concept:'Signe/Révélation',description:''},
    {sense:'preuve',concept:'Signe/Révélation',description:''},
  ])
  log(r,'a y a',{'Signe/Révélation':"Indique une réalité au-delà. Partout dans la création. Les versets sont des signes."})

  // 440. z y t (زيت) — huile, olive
  r = await ins('z y t', [
    {sense:'huile',concept:'Huile/Bénédiction',description:"Substance grasse tirée des olives — l'huile (zayt) est permanente comme produit béni. L'olivier est un arbre béni, ni oriental ni occidental, dont l'huile éclaire même sans que le feu la touche. L'huile sert à l'éclairage, à la nourriture, à l'onction. Lumière sur lumière."},
    {sense:'olive',concept:'Huile/Bénédiction',description:''},
    {sense:'olivier',concept:'Huile/Bénédiction',description:''},
  ])
  log(r,'z y t',{'Huile/Bénédiction':"Tirée des olives. Arbre béni. L'huile éclaire. Lumière sur lumière."})

  // 441. e n b (عنب) — raisin
  r = await ins('e n b', [
    {sense:'raisin',concept:'Fruit/Provision',description:"Fruit de la vigne, en grappes — le raisin ('inab) est permanent comme fruit béni mentionné parmi les bienfaits de Dieu. Des jardins de vignes et de palmiers dont vous tirez une boisson enivrante et une bonne provision. Le raisin nourrit et réjouit. Ses usages sont multiples."},
    {sense:'vigne',concept:'Fruit/Provision',description:''},
    {sense:'grappe',concept:'Fruit/Provision',description:''},
  ])
  log(r,'e n b',{'Fruit/Provision':"Fruit de la vigne. Bienfait de Dieu. Nourrit et réjouit."})

  // 442. th m r (ثمر) — fruit
  r = await ins('th m r', [
    {sense:'fruit',concept:'Fruit/Récompense',description:"Produit comestible des arbres et des plantes — le fruit (thamar/thamara) est le résultat de la croissance, l'aboutissement du processus végétal. C'est permanent comme catégorie mais saisonnier dans l'apparition. Les fruits du Paradis sont éternels et à portée de main. Le fruit est aussi la récompense des actes : qui sème le bien récolte le bien."},
    {sense:'récolte',concept:'Fruit/Récompense',description:''},
    {sense:'produit',concept:'Fruit/Récompense',description:''},
    {sense:'résultat',concept:'Fruit/Récompense',description:''},
  ])
  log(r,'th m r',{'Fruit/Récompense':"Produit de la croissance. Aboutissement. Les fruits du Paradis sont éternels."})

  // 443. azr (ءزر) — ceinture, soutien
  r = await ins('azr', [
    {sense:'ceinture',concept:'Soutien/Force',description:"Ce qui ceint et soutient le corps — la ceinture (izâr) entoure et maintient. C'est permanent comme soutien structurel. Renforce-moi par lui (Moïse demandant Aaron comme soutien). L'aide fraternelle ceint et renforce celui qui la reçoit."},
    {sense:'soutien',concept:'Soutien/Force',description:''},
    {sense:'renforcer',concept:'Soutien/Force',description:''},
    {sense:'force',concept:'Soutien/Force',description:''},
  ])
  log(r,'azr',{'Soutien/Force':"Ceindre et maintenir. Moïse renforcé par Aaron. L'aide fraternelle."})

  // 444. trw (طرو) — frais, tendre
  r = await ins('trw', [
    {sense:'frais',concept:'Fraîcheur/Nouveauté',description:"Ce qui est nouveau et non altéré — le frais (tarî) est temporaire comme état de ce qui vient d'être produit. La viande fraîche tirée de la mer. Ce qui est frais garde toute sa saveur et sa valeur. Opposé au sec et à l'ancien."},
    {sense:'tendre',concept:'Fraîcheur/Nouveauté',description:''},
    {sense:'nouveau',concept:'Fraîcheur/Nouveauté',description:''},
  ])
  log(r,'trw',{'Fraîcheur/Nouveauté':"Nouveau et non altéré. Garde saveur et valeur. La viande fraîche de la mer."})

  // 445. wakhr (وخر) — retarder
  r = await ins('wakhr', [
    {sense:'retarder',concept:'Délai/Report',description:"Repousser à plus tard ce qui devait être fait — retarder (akhkhara) est directionnel vers l'avenir. C'est ponctuel dans la décision mais crée un délai. Dieu n'avance ni ne retarde le terme quand il arrive. Ce qui est retardé n'est pas annulé, seulement différé."},
    {sense:'différer',concept:'Délai/Report',description:''},
    {sense:'reporter',concept:'Délai/Report',description:''},
    {sense:'postérieur',concept:'Délai/Report',description:''},
  ])
  log(r,'wakhr',{'Délai/Report':"Repousser à plus tard. Le terme ne peut être ni avancé ni retardé."})

  // 446. ainna — certes
  r = await ins('ainna', [
    {sense:'certes',concept:'Emphase/Affirmation',description:"Particule d'emphase qui renforce la certitude de l'énoncé — 'inna' donne du poids et de la solennité à ce qui suit. C'est directionnel vers l'affirmation qu'on veut rendre indubitable. Certes, Nous avons fait descendre le Rappel et certes Nous en sommes les gardiens."},
    {sense:'vraiment',concept:'Emphase/Affirmation',description:''},
    {sense:'assurément',concept:'Emphase/Affirmation',description:''},
  ])
  log(r,'ainna',{'Emphase/Affirmation':"Renforce la certitude. Donne solennité. Certes, Nous avons fait descendre."})

  // 447. krm (كرم) — généreux, noble
  r = await ins('krm', [
    {sense:'généreux',concept:'Générosité/Noblesse',description:"Qui donne sans compter, qui a des qualités élevées — le généreux (karîm) est permanent dans sa disposition à donner et dans sa noblesse de caractère. Le Coran est noble (karîm), le Trône est noble, l'accueil au Paradis est noble. La générosité est une qualité divine : Dieu est al-Karîm, le Très-Généreux qui donne sans qu'on Lui demande."},
    {sense:'noble',concept:'Générosité/Noblesse',description:''},
    {sense:'honorable',concept:'Générosité/Noblesse',description:''},
    {sense:'vigne',concept:'Fruit/Abondance',description:"La vigne (karm) produit abondamment. C'est l'arbre de la générosité qui donne sans retenue."},
  ])
  log(r,'krm',{'Générosité/Noblesse':"Donne sans compter. Dieu est al-Karîm. Le Coran est noble.",'Fruit/Abondance':"La vigne produit abondamment. Arbre de générosité."})

  console.log('\n=== Batch 46 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
