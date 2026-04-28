const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 793, total = 2321

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

  // 806. fyk (فيك) — verser, répandre
  r = await ins('fyk', [
    {sense:'verser',concept:'Écoulement/Abondance',description:"Faire couler un liquide — verser (afâka/yufîku) c'est répandre ce qui était contenu. Le fayak est le flot abondant. L'eau versée abondamment nourrit la terre. La générosité est comme le versement : elle répand les bienfaits. Ce qui est versé se diffuse et profite à ce qui l'entoure."},
    {sense:'répandre',concept:'Écoulement/Abondance',description:''},
    {sense:'abondance',concept:'Écoulement/Abondance',description:''},
  ])
  log(r,'fyk',{'Écoulement/Abondance':"Faire couler. Le flot abondant. Générosité qui répand."})

  // 807. xrq (خرق) — percer, déchirer
  r = await ins('xrq', [
    {sense:'percer',concept:'Perforation/Transgression',description:"Faire un trou dans une surface — percer (kharaqa) c'est traverser ce qui résiste. C'est ponctuel et peut être violent. Tu ne perceras (takhriqa) pas la terre et tu n'atteindras pas les montagnes. Le khurq est aussi la sottise, le fait de transgresser les limites de la raison. Iblîs fit preuve de khurq en refusant de se prosterner."},
    {sense:'déchirer',concept:'Perforation/Transgression',description:''},
    {sense:'sottise',concept:'Perforation/Transgression',description:''},
  ])
  log(r,'xrq',{'Perforation/Transgression':"Faire un trou. Tu ne perceras pas la terre. Sottise qui transgresse."})

  // 808. rmn (رمن) — grenade (fruit)
  r = await ins('rmn', [
    {sense:'grenade',concept:'Fruit/Bienfait',description:"Fruit à grains rouges juteux — la grenade (rummân) est un des fruits mentionnés comme bienfait divin. C'est permanent comme espèce. Des jardins de palmiers et de grenades (rummân). La grenade avec ses grains nombreux symbolise l'abondance. C'est un fruit du Paradis, signe de la générosité divine dans la création."},
    {sense:'rummân',concept:'Fruit/Bienfait',description:''},
  ])
  log(r,'rmn',{'Fruit/Bienfait':"Fruit à grains rouges. Jardins de grenades. Signe d'abondance."})

  // 809. bjs (بجس) — jaillir, faire jaillir
  r = await ins('bjs', [
    {sense:'jaillir',concept:'Jaillissement/Source',description:"Sortir avec force d'une ouverture — jaillir (inbajasa) c'est surgir comme l'eau d'une source. C'est ponctuel et puissant. Nous avons fait jaillir (inbajasat) de lui douze sources. Moïse frappa le rocher et l'eau jaillit. Le jaillissement est la manifestation soudaine de ce qui était caché, la grâce qui surgit du désert."},
    {sense:'faire jaillir',concept:'Jaillissement/Source',description:''},
    {sense:'source',concept:'Jaillissement/Source',description:''},
  ])
  log(r,'bjs',{'Jaillissement/Source':"Sortir avec force. Douze sources jaillirent. Grâce qui surgit."})

  // 810. mn n (منن) — bienfait, rappeler le bienfait
  r = await ins('mn n', [
    {sense:'bienfait',concept:'Don/Reproche',description:"Ce qu'on accorde comme faveur — le mann est le bienfait accordé généreusement. C'est aussi le fait de rappeler le bienfait, ce qui annule la récompense. N'annulez pas vos aumônes par le rappel (al-mann) et le tort. Dieu a favorisé (manna) les croyants. Le mann peut être divin (bienfait pur) ou humain (potentiellement entaché de reproche)."},
    {sense:'faveur',concept:'Don/Reproche',description:''},
    {sense:'rappeler le bienfait',concept:'Don/Reproche',description:''},
  ])
  log(r,'mn n',{'Don/Reproche':"Faveur accordée. N'annulez pas par le mann. Bienfait divin pur."})

  console.log('\n=== Batch 108 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
