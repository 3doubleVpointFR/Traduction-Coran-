const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 759, total = 2321

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

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 771. ɣdb (غضب) — se mettre en colère
  r = await ins('ɣdb', [
    {sense:'se mettre en colère',concept:'Colère/Courroux',description:"Éprouver un sentiment violent contre quelqu'un — la colère (ghaḍab) est l'émotion intense face à l'offense. C'est intérieur comme émotion mais se manifeste extérieurement. La colère de Dieu (ghaḍab Allâh) s'abat sur les désobéissants. Le maghdûb 'alayhim sont ceux qui ont encouru la colère. La colère humaine doit être maîtrisée, celle de Dieu est justice."},
    {sense:'colère',concept:'Colère/Courroux',description:''},
    {sense:'courroux',concept:'Colère/Courroux',description:''},
  ])
  log(r,'ɣdb',{'Colère/Courroux':"Émotion violente. La colère de Dieu. Maghdûb 'alayhim."})

  // 772. snh (سنة) — année, assoupissement
  r = await ins('snh', [
    {sense:'année',concept:'Temps/Sommeil',description:"Période de douze mois — l'année (sana) est l'unité de temps correspondant au cycle solaire ou lunaire. C'est cyclique. Il demeura parmi eux mille ans (alfa sanatin) moins cinquante. La sina est aussi l'assoupissement léger. Ni somnolence (sina) ni sommeil ne Le prennent (Âyat al-Kursî). Dieu ne dort jamais. L'année mesure le temps, la sina est l'absence de conscience."},
    {sense:'assoupissement',concept:'Temps/Sommeil',description:''},
    {sense:'somnolence',concept:'Temps/Sommeil',description:''},
  ])
  log(r,'snh',{'Temps/Sommeil':"Période de douze mois. Mille ans. Ni somnolence ni sommeil ne Le prennent."})

  // 773. bas (بأس) — force, misère
  r = await ins('bas', [
    {sense:'force',concept:'Puissance/Malheur',description:"Capacité de nuire ou de se défendre — le ba's est la force guerrière, la puissance. C'est aussi le malheur qui s'abat. Ils n'ont aucune force (lâ ba'sa) qui les protège. Le châtiment (ba's) de Dieu est terrible pour ceux qui le méritent. La puissance peut être positive (défense) ou négative (destruction). Quand Notre ba's les atteignit."},
    {sense:'malheur',concept:'Puissance/Malheur',description:''},
    {sense:'châtiment',concept:'Puissance/Malheur',description:''},
  ])
  log(r,'bas',{'Puissance/Malheur':"Force et malheur. Ils n'ont aucune force. Le ba's de Dieu est terrible."})

  // 774. dya (ضيع) — perdre, gaspiller (variante)
  r = await ins('dya', [
    {sense:'perdre',concept:'Perte/Gaspillage',description:"Laisser se dissiper — perdre (dâ'a/yudî'u) c'est laisser échapper ce qu'on avait. Le dâ'i' est ce qui est perdu, gaspillé. Dieu ne laisse pas perdre (yudî'u) la récompense de ceux qui font le bien. Rien n'est perdu auprès de Dieu. Le gaspillage est blâmable car les ressources sont des bienfaits divins à préserver."},
    {sense:'gaspiller',concept:'Perte/Gaspillage',description:''},
    {sense:'dissiper',concept:'Perte/Gaspillage',description:''},
  ])
  log(r,'dya',{'Perte/Gaspillage':"Laisser échapper. Dieu ne laisse pas perdre la récompense. Rien n'est perdu."})

  // 775. ndj (نضج) — mûrir, cuire
  r = await ins('ndj', [
    {sense:'mûrir',concept:'Maturation/Cuisson',description:"Atteindre l'état de développement complet — mûrir (nadija) c'est arriver à perfection. Le nudj est la cuisson complète. Chaque fois que leurs peaux seront cuites (nadidjat), Nous leur donnerons d'autres peaux. Le châtiment des damnés est renouvelé sans fin. La maturation est l'état parfait du fruit prêt à être cueilli."},
    {sense:'cuire',concept:'Maturation/Cuisson',description:''},
    {sense:'être cuit',concept:'Maturation/Cuisson',description:''},
  ])
  log(r,'ndj',{'Maturation/Cuisson':"Atteindre la perfection. Quand leurs peaux seront cuites. Châtiment renouvelé."})

  console.log('\n=== Batch 101 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
