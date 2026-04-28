const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 656, total = 2321

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

  // Skip entrées connues
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 662. aaay (آيء) — signe, verset
  r = await ins('aaay', [
    {sense:'signe',concept:'Signe/Révélation',description:"Ce qui manifeste une réalité cachée — le signe (âya) est permanent comme preuve divine dans la création ou la révélation. Les versets (âyât) du Coran sont des signes, comme les phénomènes naturels. Dans la création il y a des signes pour ceux qui réfléchissent. Le signe invite à voir au-delà de l'apparence."},
    {sense:'verset',concept:'Signe/Révélation',description:''},
    {sense:'miracle',concept:'Signe/Révélation',description:''},
    {sense:'preuve',concept:'Signe/Révélation',description:''},
  ])
  log(r,'aaay',{'Signe/Révélation':"Manifeste le caché. Versets et phénomènes naturels. Pour ceux qui réfléchissent."})

  // 663. zyl (زيل) — séparer, ôter
  r = await ins('zyl', [
    {sense:'séparer',concept:'Séparation/Distinction',description:"Mettre à part ce qui était ensemble — séparer (zâla/yuzîlu) crée une distinction entre les éléments. Si les mécréants s'étaient distingués (tazayyalû), Nous aurions châtié ceux d'entre eux qui ont mécru. La séparation des croyants et des mécréants permet le jugement. Cesser (zâla/yazâlu) c'est ne plus être comme avant."},
    {sense:'ôter',concept:'Séparation/Distinction',description:''},
    {sense:'cesser',concept:'Séparation/Distinction',description:''},
  ])
  log(r,'zyl',{'Séparation/Distinction':"Mettre à part. Si les mécréants s'étaient distingués. Permet le jugement."})

  // 664. šfy (شفي) — guérir (variante)
  r = await ins('šfy', [
    {sense:'guérir',concept:'Guérison',description:"Skip si déjà fait comme shfy."},
  ])

  // 665. yhb (يهب) — donner, accorder
  r = await ins('yhb', [
    {sense:'donner',concept:'Don divin',description:"Accorder gratuitement — donner (wahaba) est l'acte de générosité sans contrepartie. C'est directionnel du donneur vers le receveur. Mon Seigneur m'a donné (wahabanî) Isaac et Jacob. Le don de descendance est parmi les plus grands bienfaits. Dieu donne à qui Il veut des filles et à qui Il veut des garçons."},
    {sense:'accorder',concept:'Don divin',description:''},
    {sense:'gratifier',concept:'Don divin',description:''},
  ])
  log(r,'yhb',{'Don divin':"Accorder gratuitement. M'a donné Isaac et Jacob. Donne à qui Il veut."})

  // 666. bkr (بكر) — matin, premier-né
  r = await ins('bkr', [
    {sense:'matin',concept:'Début du jour/Primauté',description:"Le début du jour quand le soleil se lève — le matin (bukra) est le temps de la fraîcheur et du renouveau. Glorifiez-Le matin (bukratan) et soir ! Le premier (bikr) est celui qui vient avant les autres, comme le premier-né. La vache ne doit être ni vieille ni trop jeune mais bakr, entre les deux."},
    {sense:'aube',concept:'Début du jour/Primauté',description:''},
    {sense:'premier-né',concept:'Début du jour/Primauté',description:''},
    {sense:'vierge',concept:'Pureté/Nouveauté',description:"Celle qui n'a pas connu d'homme — la bikr est la femme non mariée, pure de tout contact."},
  ])
  log(r,'bkr',{'Début du jour/Primauté':"Début du jour. Glorifiez-Le matin ! Le premier avant les autres.",'Pureté/Nouveauté':"Vierge. Pure de tout contact."})

  console.log('\n=== Batch 79 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
