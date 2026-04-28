const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 723, total = 2321

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

  // 730. aayt (آيت) — signes (variante)
  r = await ins('aayt', [
    {sense:'signes',concept:'Signe',description:"Skip si déjà fait comme aaay ou aay."},
  ])

  // 731. ntw (نوت) — notation (variante)
  r = await ins('ntw', [
    {sense:'noter',concept:'Notation',description:"Skip si variante."},
  ])

  // 732. zhr (ظهر) — apparaître, dos, manifeste
  r = await ins('zhr', [
    {sense:'apparaître',concept:'Manifestation/Dos',description:"Devenir visible et évident — apparaître (zahara) est le passage du caché au visible. C'est directionnel vers l'extérieur. Le manifeste (zâhir) s'oppose au caché (bâtin). Il est le Premier et le Dernier, le Manifeste (az-Zâhir) et le Caché. Le dos (zahr) est la partie visible quand on tourne le dos. Prévaloir (azhara) c'est dominer et devenir visible."},
    {sense:'dos',concept:'Manifestation/Dos',description:''},
    {sense:'manifeste',concept:'Manifestation/Dos',description:''},
    {sense:'prévaloir',concept:'Manifestation/Dos',description:''},
  ])
  log(r,'zhr',{'Manifestation/Dos':"Du caché au visible. Az-Zâhir et le Caché. Prévaloir et dominer."})

  // 733. asr (أسر) — capturer, lier
  r = await ins('asr', [
    {sense:'capturer',concept:'Captivité/Lien',description:"Prendre et retenir prisonnier — capturer (asara) c'est priver de liberté. C'est ponctuel comme action mais l'état qui en résulte est durable. Nous avons affermi leur constitution (asrahum). L'asîr est le captif, le prisonnier. Nourrir le captif (asîr) est un acte de piété. L'isar est le lien, ce qui attache et retient. La captivité est l'opposé de la liberté."},
    {sense:'captif',concept:'Captivité/Lien',description:''},
    {sense:'lien',concept:'Captivité/Lien',description:''},
  ])
  log(r,'asr',{'Captivité/Lien':"Priver de liberté. Nourrir le captif. L'isar attache et retient."})

  // 734. fdy (فدي) — racheter, rançon
  r = await ins('fdy', [
    {sense:'racheter',concept:'Rançon/Sacrifice',description:"Libérer en donnant un prix — racheter (fadâ) c'est échanger quelque chose contre la liberté ou le salut de quelqu'un. C'est directionnel vers le rachat. Nous l'avons racheté (fadaynâhu) par un sacrifice solennel (Isaac). La fidya est la compensation, ce qu'on donne à la place. Le rachat peut être matériel (rançon) ou spirituel (sacrifice expiatoire)."},
    {sense:'rançon',concept:'Rançon/Sacrifice',description:''},
    {sense:'compensation',concept:'Rançon/Sacrifice',description:''},
  ])
  log(r,'fdy',{'Rançon/Sacrifice':"Libérer par un prix. Nous l'avons racheté. Sacrifice d'Isaac."})

  // 735. xzy (خزي) — humiliation, honte
  r = await ins('xzy', [
    {sense:'humiliation',concept:'Honte/Ignominie',description:"État de celui qui est couvert de honte — l'humiliation (khizy) est la dégradation publique de l'honneur. C'est intérieur comme sentiment et extérieur comme statut. Ne m'humilie pas (lâ tukhzinî) le Jour où ils seront ressuscités. Le khizy est le châtiment qui abaisse et déshonore. C'est pire que la souffrance physique car il atteint la dignité."},
    {sense:'honte',concept:'Honte/Ignominie',description:''},
    {sense:'déshonneur',concept:'Honte/Ignominie',description:''},
  ])
  log(r,'xzy',{'Honte/Ignominie':"Dégradation de l'honneur. Ne m'humilie pas au Jour. Pire que la souffrance."})

  console.log('\n=== Batch 93 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
