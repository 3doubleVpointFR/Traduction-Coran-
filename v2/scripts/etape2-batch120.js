const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 853, total = 2321

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

  // 868. nqy (نقي) — pur, nettoyer
  r = await ins('nqy', [
    {sense:'pur',concept:'Pureté/Nettoyage',description:"Sans mélange ni souillure — le pur (naqiyy) est ce qui est exempt d'impureté. C'est permanent comme qualité. L'âme pure est celle qui s'est purifiée du mal. Le tanqiya est le nettoyage, l'élimination des impuretés. Purifier son cœur c'est en retirer l'envie, la rancœur et l'orgueil. La pureté intérieure se reflète dans les actes extérieurs."},
    {sense:'nettoyer',concept:'Pureté/Nettoyage',description:''},
    {sense:'exempt',concept:'Pureté/Nettoyage',description:''},
  ])
  log(r,'nqy',{'Pureté/Nettoyage':"Sans souillure. Âme pure. Pureté intérieure se reflète dans les actes."})

  // 869. qran (قرآن) — Coran, récitation
  r = await ins('qran', [
    {sense:'Coran',concept:'Récitation/Révélation',description:"Le Livre récité par excellence — le Qur'ân est la Parole de Dieu récitée. C'est permanent comme Révélation. Nous avons fait descendre le Coran (al-Qur'ân). De la racine qara'a (réciter), le Qur'ân est ce qui est lu et relu. La récitation (qirâ'a) est l'acte de lecture sacrée. Le Coran se mémorise, se psalmodie, se médite. Il est guidance et lumière pour les croyants."},
    {sense:'récitation',concept:'Récitation/Révélation',description:''},
    {sense:'lecture',concept:'Récitation/Révélation',description:''},
  ])
  log(r,'qran',{'Récitation/Révélation':"Parole de Dieu récitée. Nous avons fait descendre le Coran. Guidance et lumière."})

  // 870. shkk (شكك) — douter, hésiter
  r = await ins('shkk', [
    {sense:'douter',concept:'Doute/Hésitation',description:"Manquer de certitude — douter (shakka) c'est ne pas être sûr. C'est intérieur et peut être ponctuel ou permanent. Si tu es dans le doute (shakk) au sujet de ce que Nous t'avons révélé. Le doute est l'opposé de la certitude (yaqîn). Le shâkk est celui qui doute, qui hésite entre deux positions. Le doute peut être stérile ou mener à la recherche de la vérité."},
    {sense:'hésiter',concept:'Doute/Hésitation',description:''},
    {sense:'incertitude',concept:'Doute/Hésitation',description:''},
  ])
  log(r,'shkk',{'Doute/Hésitation':"Manquer de certitude. Si tu es dans le doute. Opposé du yaqîn."})

  // 871. 'dn (أذن) — oreille, autoriser
  r = await ins("'dn", [
    {sense:'oreille',concept:'Audition/Permission',description:"Organe de l'ouïe — l'oreille (udhun) capte les sons. C'est permanent comme partie du corps. Dans leurs oreilles (âdhânihim) une surdité. Écouter est une responsabilité : l'oreille reçoit la guidance ou la refuse. L'idhn est la permission, l'autorisation donnée. Le mu'adhdhin est celui qui appelle à la prière. L'oreille et la permission sont liées : on autorise ce qu'on a entendu."},
    {sense:'autoriser',concept:'Audition/Permission',description:''},
    {sense:'permission',concept:'Audition/Permission',description:''},
  ])
  log(r,"'dn",{'Audition/Permission':"Organe de l'ouïe. Surdité dans leurs oreilles. Le mu'adhdhin appelle."})

  // 872. rfh (رفه) — aisance, confort
  r = await ins('rfh', [
    {sense:'aisance',concept:'Confort/Luxe',description:"Vie facile et agréable — le rafâh est le bien-être matériel, l'absence de difficultés. C'est permanent comme état. Les mutrafûn sont ceux qui vivent dans le luxe. Nous les avons comblés de bienfaits mais ils ont été ingrats. L'aisance peut être une épreuve aussi dangereuse que la pauvreté. Le confort endort la vigilance spirituelle si on n'y prend garde."},
    {sense:'confort',concept:'Confort/Luxe',description:''},
    {sense:'luxe',concept:'Confort/Luxe',description:''},
  ])
  log(r,'rfh',{'Confort/Luxe':"Bien-être matériel. Les mutrafûn dans le luxe. L'aisance endort la vigilance."})

  console.log('\n=== Batch 120 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
