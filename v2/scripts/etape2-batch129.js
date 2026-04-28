const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 896, total = 2321

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
  r = await ins("'dn", [{sense:'oreille',concept:'Audition',description:"Skip."}])
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])

  // 915. aawl (أول) — premier, antérieur
  r = await ins('aawl', [
    {sense:'premier',concept:'Priorité/Antériorité',description:"Ce qui vient avant tout — le premier (awwal) précède dans le temps ou l'ordre. C'est permanent comme position. Il est le Premier (al-Awwal) et le Dernier. Dieu est awwal sans commencement et âkhir sans fin. L'awwalîn sont les anciens, ceux qui précédèrent. La priorité n'est pas seulement temporelle mais aussi de rang et d'importance."},
    {sense:'antérieur',concept:'Priorité/Antériorité',description:''},
    {sense:'ancêtres',concept:'Priorité/Antériorité',description:''},
  ])
  log(r,'aawl',{'Priorité/Antériorité':"Ce qui vient avant. Il est le Premier et le Dernier. Priorité de rang."})

  // 916. qsf (قصف) — briser, tonnerre
  r = await ins('qsf', [
    {sense:'briser',concept:'Fracas/Destruction',description:"Casser avec violence — briser (qasafa) c'est détruire avec fracas. C'est ponctuel et dévastateur. Nous avons envoyé contre eux un vent qui brisait (qâsifan) tout. Le qâsif est le vent violent qui détruit. Le qasf est le tonnerre, le fracas du ciel. La puissance destructrice rappelle la toute-puissance divine qui peut anéantir en un instant."},
    {sense:'tonnerre',concept:'Fracas/Destruction',description:''},
    {sense:'fracasser',concept:'Fracas/Destruction',description:''},
  ])
  log(r,'qsf',{'Fracas/Destruction':"Casser avec violence. Vent qui brisait tout. Puissance qui anéantit."})

  // 917. hjd (هجد) — veiller la nuit, tahajjud
  r = await ins('hjd', [
    {sense:'veiller la nuit',concept:'Veille/Dévotion',description:"Prier pendant la nuit — le tahajjud est la prière nocturne surérogatoire. C'est ponctuel comme acte et répété comme pratique. Veille une partie de la nuit (tahajjad bihi), en surplus pour toi. La nuit est le temps de l'intimité avec Dieu, loin des regards. Le mutahajjid se lève quand les autres dorment. La veille nocturne élève le rang auprès de Dieu."},
    {sense:'tahajjud',concept:'Veille/Dévotion',description:''},
    {sense:'prière nocturne',concept:'Veille/Dévotion',description:''},
  ])
  log(r,'hjd',{'Veille/Dévotion':"Prier la nuit. Veille une partie de la nuit. Intimité avec Dieu."})

  // 918. nfae (نفع) — être utile, profiter
  r = await ins('nfae', [
    {sense:'être utile',concept:'Utilité/Profit',description:"Apporter un avantage — être utile (nafa'a) c'est procurer un bénéfice. C'est permanent comme qualité. Quant à ce qui profite (yanfa'u) aux gens, cela demeure sur terre. L'utile dure, l'écume s'en va. Le nâfi' est l'utile, le manfa'a est le profit. L'utilité vraie est ce qui profite dans l'au-delà. Ce qui ne sert que ce monde est vanité passagère."},
    {sense:'profiter',concept:'Utilité/Profit',description:''},
    {sense:'avantage',concept:'Utilité/Profit',description:''},
  ])
  log(r,'nfae',{'Utilité/Profit':"Apporter un avantage. Ce qui profite demeure. L'utile dure."})

  // 919. thbr (ثبر) — perdition, ruine
  r = await ins('thbr', [
    {sense:'perdition',concept:'Ruine/Destruction',description:"Perte totale et définitive — la perdition (thubûr) est la destruction complète. C'est permanent comme état. Ils appelleront la perdition (thubûran). Au Jour du Jugement, les damnés crieront 'thubûr' en vain. La thubûr est l'anéantissement sans retour, le désespoir absolu. Ceux qui la subiront regretteront éternellement leurs choix."},
    {sense:'ruine',concept:'Ruine/Destruction',description:''},
    {sense:'anéantissement',concept:'Ruine/Destruction',description:''},
  ])
  log(r,'thbr',{'Ruine/Destruction':"Perte totale. Ils appelleront la perdition. Désespoir absolu des damnés."})

  console.log('\n=== Batch 129 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
