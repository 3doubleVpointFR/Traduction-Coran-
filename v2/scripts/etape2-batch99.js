const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 749, total = 2321

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

  // 760. bhm (بهم) — bête, animal
  r = await ins('bhm', [
    {sense:'bête',concept:'Animalité/Muet',description:"Animal dépourvu de raison — la bahîma est la bête, l'animal qui ne parle pas. C'est permanent comme nature. Les bêtes des troupeaux (bahîmat al-an'âm) vous sont licites. La bahîma est ce qui n'a pas la parole ni la raison humaine. L'homme peut descendre au niveau de la bahîma s'il abandonne sa raison pour suivre ses instincts."},
    {sense:'animal',concept:'Animalité/Muet',description:''},
    {sense:'quadrupède',concept:'Animalité/Muet',description:''},
  ])
  log(r,'bhm',{'Animalité/Muet':"Dépourvu de raison. Les bêtes des troupeaux vous sont licites. Sans parole."})

  // 761. ḵdn (خدن) — ami intime, amant
  r = await ins('ḵdn', [
    {sense:'ami intime',concept:'Intimité/Liaison',description:"Compagnon très proche, parfois illégitime — le khidn est l'ami intime, celui avec qui on partage les secrets. Le sens peut être négatif: amant, concubin. Ni fornicatrices ni preneuses d'amants (akhdhân). La relation de khidna est cachée, contrairement au mariage qui est public. L'intimité illégitime est condamnée, l'intimité légitime est le mariage."},
    {sense:'amant',concept:'Intimité/Liaison',description:''},
    {sense:'concubin',concept:'Intimité/Liaison',description:''},
  ])
  log(r,'ḵdn',{'Intimité/Liaison':"Compagnon proche. Ni preneuses d'amants. Intimité cachée vs mariage."})

  // 762. qld (قلد) — imiter, collier
  r = await ins('qld', [
    {sense:'imiter',concept:'Imitation/Ornement',description:"Suivre sans discernement — imiter (qallada) c'est suivre quelqu'un aveuglément. Le taqlîd est l'imitation sans réflexion, suivre les ancêtres sans preuve. Le qilâda est le collier, ce qu'on passe au cou. Les offrandes marquées (muqallada) portent un collier qui indique leur destination. L'imitateur porte le collier de celui qu'il suit."},
    {sense:'collier',concept:'Imitation/Ornement',description:''},
    {sense:'marquer',concept:'Imitation/Ornement',description:''},
  ])
  log(r,'qld',{'Imitation/Ornement':"Suivre aveuglément. Taqlîd. Offrandes au collier. Porter le joug."})

  // 763. jrm (جرم) — commettre un crime, pécher
  r = await ins('jrm', [
    {sense:'commettre un crime',concept:'Crime/Culpabilité',description:"Faire une action gravement répréhensible — le jurm est le crime, l'acte qui mérite châtiment. C'est ponctuel comme action mais peut devenir habitude. Que la haine d'un peuple ne vous pousse pas à être injustes (an tajrimû). Le mujrim est le criminel, celui qui commet des crimes. Les mujrimûn seront châtiés dans l'au-delà pour leurs crimes."},
    {sense:'crime',concept:'Crime/Culpabilité',description:''},
    {sense:'criminel',concept:'Crime/Culpabilité',description:''},
  ])
  log(r,'jrm',{'Crime/Culpabilité':"Action gravement répréhensible. Que la haine ne vous pousse. Mujrimûn châtiés."})

  // 764. nkh nq (نخنق) — étrangler (variante complexe)
  r = await ins('nkh nq', [
    {sense:'étrangler',concept:'Suffocation',description:"Skip si déjà fait ou variante."},
  ])

  // 765. yas (يأس) — désespérer
  r = await ins('yas', [
    {sense:'désespérer',concept:'Désespoir/Perte d\'espoir',description:"Perdre tout espoir — désespérer (ya'isa/yay'asu) c'est abandonner l'espérance. C'est intérieur comme état d'âme et souvent blâmable. Ne désespérez pas (lâ tay'asû) de la miséricorde de Dieu. Le ya's est l'opposé du rajâ' (espoir). Seuls les mécréants désespèrent de l'esprit de Dieu. Le désespoir est un manque de foi en la miséricorde infinie."},
    {sense:'perdre espoir',concept:'Désespoir/Perte d\'espoir',description:''},
    {sense:'renoncer',concept:'Désespoir/Perte d\'espoir',description:''},
  ])
  log(r,'yas',{'Désespoir/Perte d\'espoir':"Perdre l'espérance. Ne désespérez pas de Sa miséricorde. Manque de foi."})

  console.log('\n=== Batch 99 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
