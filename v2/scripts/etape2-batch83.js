const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 674, total = 2321

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

  // 680. hyr (حير) — être perplexe, confusion
  r = await ins('hyr', [
    {sense:'être perplexe',concept:'Confusion/Égarement',description:"État de celui qui ne sait quelle direction prendre — être perplexe (hâra/yahâru) est intérieur comme état mental. C'est l'incapacité de choisir entre plusieurs voies. Errant, perplexe (hayrân) sur la terre. La hayra est l'égarement de celui qui a perdu ses repères, qui tourne en rond sans trouver la sortie. C'est l'opposé de la guidance."},
    {sense:'confusion',concept:'Confusion/Égarement',description:''},
    {sense:'errer',concept:'Confusion/Égarement',description:''},
  ])
  log(r,'hyr',{'Confusion/Égarement':"Ne sait quelle direction. Errant, perplexe sur la terre. Opposé de la guidance."})

  // 681. fll (فلل) — brèche, ébrécher
  r = await ins('fll', [
    {sense:'brèche',concept:'Entaille/Fuite',description:"Ouverture dans ce qui devrait être fermé — la brèche (full) est la faille dans une lame ou dans une défense. C'est permanent comme dommage. Ils se dispersèrent (infallû) après la bataille. La défaite militaire crée une brèche dans les rangs. Ce qui est ébréché a perdu son intégrité, sa capacité de trancher ou de résister."},
    {sense:'ébrécher',concept:'Entaille/Fuite',description:''},
    {sense:'se disperser',concept:'Entaille/Fuite',description:''},
  ])
  log(r,'fll',{'Entaille/Fuite':"Ouverture dans le fermé. Ils se dispersèrent. Perte d'intégrité."})

  // 682. bzgh (بزغ) — se lever (astre), poindre
  r = await ins('bzgh', [
    {sense:'se lever',concept:'Apparition/Aurore',description:"Émergence d'un astre au-dessus de l'horizon — se lever (bazagha) est directionnel vers le haut et vers le visible. Quand il vit la lune se lever (bâzighatan). Abraham contempla les astres pour montrer leur impermanence. Ce qui se lève finira par se coucher. Seul Dieu ne connaît ni lever ni coucher, Il est l'Éternel."},
    {sense:'poindre',concept:'Apparition/Aurore',description:''},
    {sense:'apparaître',concept:'Apparition/Aurore',description:''},
  ])
  log(r,'bzgh',{'Apparition/Aurore':"Émergence au-dessus de l'horizon. La lune se levant. Ce qui se lève se couchera."})

  // 683. fly (فلي) — fendre, pou
  r = await ins('fly', [
    {sense:'fendre',concept:'Division/Parasite',description:"Séparer en deux parties — fendre (falâ) est l'action de diviser ce qui était uni. Le pou (fulân) est l'insecte qui s'attache aux cheveux et qu'on doit fendre pour l'enlever. L'épouillage (tafliya) est le soin minutieux. La racine évoque la séparation fine, le détachement de ce qui adhère indûment."},
    {sense:'épouiller',concept:'Division/Parasite',description:''},
    {sense:'pou',concept:'Division/Parasite',description:''},
  ])
  log(r,'fly',{'Division/Parasite':"Séparer ce qui était uni. Le pou adhère. Détacher ce qui s'attache indûment."})

  // 684. qtd (قتد) — bâton de selle, droit
  r = await ins('qtd', [
    {sense:'bâton de selle',concept:'Support/Rectitude',description:"Pièce de bois qui maintient la selle en place — le qatad est l'armature rigide de la selle. C'est permanent comme structure. Le lotus (sidr) aux épines comme des bâtons de selle (qatâd). L'image évoque ce qui se dresse droit, ce qui soutient et maintient. La rectitude est la qualité de ce qui ne plie pas."},
    {sense:'armature',concept:'Support/Rectitude',description:''},
    {sense:'droit',concept:'Support/Rectitude',description:''},
  ])
  log(r,'qtd',{'Support/Rectitude':"Armature qui maintient. Lotus aux épines comme qatâd. Ce qui se dresse droit."})

  console.log('\n=== Batch 83 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
