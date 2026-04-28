const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 669, total = 2321

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

  // 675. ḏky (ذكي) — purifier, immolation rituelle
  r = await ins('ḏky', [
    {sense:'purifier',concept:'Purification/Sacrifice',description:"Rendre pur par l'immolation rituelle — purifier (dhakâ/yudhakkî) est l'acte de rendre licite la chair en respectant le rite sacrificiel. C'est directionnel vers la pureté légale. Sauf ce que vous avez égorgé rituellement (dhakkâytum). L'immolation rituelle distingue le licite de l'illicite. La zakât partage cette racine : purifier sa richesse par le don."},
    {sense:'égorger rituellement',concept:'Purification/Sacrifice',description:''},
    {sense:'immoler',concept:'Purification/Sacrifice',description:''},
  ])
  log(r,'ḏky',{'Purification/Sacrifice':"Rendre licite par le rite. Sauf ce que vous avez égorgé. La zakât purifie."})

  // 676. ghdw (غدو) — matin, aller le matin
  r = await ins('ghdw', [
    {sense:'matin',concept:'Temps matinal/Départ',description:"Le début du jour et le mouvement qu'on y fait — le matin (ghuduww/ghadâ) est le temps où l'on part pour ses activités. C'est directionnel vers l'extérieur et l'action. Glorifiez-Le matin (ghuduwwan) et soir ! Le ghâdî est celui qui part le matin. C'est le temps de l'élan initial, du commencement des œuvres quotidiennes."},
    {sense:'partir le matin',concept:'Temps matinal/Départ',description:''},
    {sense:'aube',concept:'Temps matinal/Départ',description:''},
  ])
  log(r,'ghdw',{'Temps matinal/Départ':"Début du jour et départ. Glorifiez-Le matin ! Temps de l'élan initial."})

  // 677. lal (لال) — néant, rien (particule de négation)
  r = await ins('lal', [
    {sense:'non',concept:'Négation/Refus',description:"Particule de négation catégorique — lâ est la négation qui annule ce qui suit. C'est permanent comme refus absolu. Point de contrainte en religion (lâ ikrâha fî d-dîn). Lâ ilâha illa Allâh nie toute divinité autre que Dieu. La négation est le premier pas vers l'affirmation du vrai."},
    {sense:'pas de',concept:'Négation/Refus',description:''},
    {sense:'aucun',concept:'Négation/Refus',description:''},
  ])
  log(r,'lal',{'Négation/Refus':"Annuler ce qui suit. Point de contrainte en religion. Nier pour affirmer le vrai."})

  // 678. sqt (سقط) — tomber, avorton
  r = await ins('sqt', [
    {sense:'tomber',concept:'Chute/Déchet',description:"Mouvement vers le bas par perte de soutien — tomber (saqata) est directionnel vers le sol, c'est la défaite de ce qui se tenait. Et les dattes mûres tomberont (tusâqit) sur toi. L'avorton (siqt) est ce qui tombe avant terme, le fruit non abouti. La chute peut être physique ou métaphorique : tomber dans l'erreur, choir de son rang."},
    {sense:'choir',concept:'Chute/Déchet',description:''},
    {sense:'avorton',concept:'Chute/Déchet',description:''},
  ])
  log(r,'sqt',{'Chute/Déchet':"Mouvement vers le bas. Les dattes tomberont sur toi. Chute physique ou métaphorique."})

  // 679. lha (لهي) — se divertir, oublier
  r = await ins('lha', [
    {sense:'se divertir',concept:'Distraction/Oubli',description:"Se détourner de l'essentiel par le jeu — se divertir (lahâ/yalhû) est se laisser absorber par ce qui n'a pas d'importance réelle. C'est intérieur comme état d'esprit et ponctuel comme activité. Le commerce et le divertissement (lahw) les ont distraits de l'invocation de Dieu. Le lahw est l'opposé du dhikr, l'oubli contre le souvenir."},
    {sense:'jouer',concept:'Distraction/Oubli',description:''},
    {sense:'divertissement',concept:'Distraction/Oubli',description:''},
    {sense:'oublier',concept:'Distraction/Oubli',description:''},
  ])
  log(r,'lha',{'Distraction/Oubli':"Se détourner de l'essentiel. Le lahw les a distraits. Opposé du dhikr."})

  console.log('\n=== Batch 82 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
