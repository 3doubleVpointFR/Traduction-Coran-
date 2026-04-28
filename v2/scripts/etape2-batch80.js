const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 660, total = 2321

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

  // 666. allh (اله) — Dieu, divinité
  r = await ins('allh', [
    {sense:'Dieu',concept:'Divinité/Adoration',description:"L'Être suprême digne d'adoration — Allâh est le nom propre de Dieu, Celui qui est adoré en vérité. C'est permanent comme réalité éternelle. Il n'y a de dieu (ilâh) qu'Allâh. Le mot ilâh désigne tout ce qui est adoré, mais seul Allâh mérite vraiment l'adoration. Il est al-Ilâh, le Dieu par excellence."},
    {sense:'divinité',concept:'Divinité/Adoration',description:''},
    {sense:'idole',concept:'Divinité/Adoration',description:''},
  ])
  log(r,'allh',{'Divinité/Adoration':"L'Être suprême. Il n'y a de dieu qu'Allâh. Seul digne d'adoration."})

  // 667. khḏḏ (خذذ) — prendre (variante)
  r = await ins('khḏḏ', [
    {sense:'prendre',concept:'Saisie',description:"Skip si déjà fait."},
  ])

  // 668. ewḏ (عوذ) — chercher refuge
  r = await ins('ewḏ', [
    {sense:'chercher refuge',concept:'Protection/Abri',description:"Se mettre sous la protection de quelqu'un — chercher refuge (a'ûdhu/ista'âdha) est directionnel vers le protecteur. Dis : je cherche refuge (a'ûdhu) auprès du Seigneur de l'aube. Le refuge en Dieu protège contre le mal des créatures et de Satan. Seul Dieu offre une protection absolue."},
    {sense:'se réfugier',concept:'Protection/Abri',description:''},
    {sense:'protection',concept:'Protection/Abri',description:''},
  ])
  log(r,'ewḏ',{'Protection/Abri':"Se mettre sous protection. Je cherche refuge auprès du Seigneur de l'aube."})

  // 669. šyh (شيه) — chose, quelque chose
  r = await ins('šyh', [
    {sense:'chose',concept:'Entité/Existence',description:"Ce qui peut être désigné — la chose (shay') est le concept le plus général. Tout ce qui est, est une chose. Dieu dit à la chose Sois et elle est. La chose n'est rien avant que Dieu ne la fasse être, et redevient rien quand Il le décide."},
    {sense:'quelque chose',concept:'Entité/Existence',description:''},
    {sense:'rien',concept:'Entité/Existence',description:''},
  ])
  log(r,'šyh',{'Entité/Existence':"Ce qui peut être désigné. Dieu dit Sois et c'est. Rien avant Sa parole."})

  // 670. lms (لمس) — toucher
  r = await ins('lms', [
    {sense:'toucher',concept:'Contact physique',description:"Entrer en contact physique avec quelque chose — toucher (lamasa/massa) est directionnel vers ce qu'on atteint. Si vous avez touché (lâmastum) des femmes et ne trouvez pas d'eau, tayammumez. Le toucher crée un lien physique qui peut avoir des conséquences rituelles. Le toucher peut être aussi métaphore de l'acte intime."},
    {sense:'palper',concept:'Contact physique',description:''},
    {sense:'atteindre',concept:'Contact physique',description:''},
  ])
  log(r,'lms',{'Contact physique':"Entrer en contact. Si vous avez touché des femmes. Conséquences rituelles."})

  console.log('\n=== Batch 80 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
