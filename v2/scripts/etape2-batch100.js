const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 754, total = 2321

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

  // 765. nsp (نصب) — ériger, fatigue
  r = await ins('nsp', [
    {sense:'ériger',concept:'Élévation/Fatigue',description:"Dresser quelque chose verticalement — ériger (nasaba) c'est mettre debout. Le nasab est ce qui est dressé, notamment les stèles et idoles. Les ansâb sont les pierres dressées pour les faux cultes. Les idoles sur lesquelles on immolait (wa mâ dhubiba 'alâ n-nusub). Le nasab est aussi la fatigue, la peine qui épuise. Le travail difficile laisse l'homme nasîb, fatigué."},
    {sense:'stèle',concept:'Élévation/Fatigue',description:''},
    {sense:'fatigue',concept:'Élévation/Fatigue',description:''},
  ])
  log(r,'nsp',{'Élévation/Fatigue':"Dresser verticalement. Les ansâb: pierres dressées. Fatigue qui épuise."})

  // 766. ay' (أيء) — signe (variante)
  r = await ins("ay'", [
    {sense:'signe',concept:'Signe',description:"Skip si déjà fait comme aaay."},
  ])

  // 767. ybs (يبس) — sécher, être sec
  r = await ins('ybs', [
    {sense:'sécher',concept:'Sécheresse/Aridité',description:"Perdre son humidité — sécher (yabisa) c'est passer de l'humide au sec. C'est permanent comme état résultant. Un chemin sec (tarîqan yabasan) dans la mer. Moïse ouvrit un passage sec à travers les eaux. Le sec s'oppose à l'humide comme la mort s'oppose à la vie. Ce qui est sec a perdu sa vitalité, mais le sec peut aussi être solide et stable."},
    {sense:'sec',concept:'Sécheresse/Aridité',description:''},
    {sense:'aride',concept:'Sécheresse/Aridité',description:''},
  ])
  log(r,'ybs',{'Sécheresse/Aridité':"Perdre l'humidité. Un chemin sec dans la mer. Mort vs vie."})

  // 768. axt (أخت) — sœur
  r = await ins('axt', [
    {sense:'sœur',concept:'Parenté/Féminin',description:"Fille des mêmes parents qu'une autre — la sœur (ukht) est le lien de fraternité au féminin. C'est permanent comme relation de sang. Ô sœur d'Aaron ! (yâ ukhta Hârûn). Marie est appelée sœur d'Aaron par appartenance à sa lignée. La sœur partage le sang et hérite. Les demi-sœurs peuvent être consanguines ou utérines."},
    {sense:'demi-sœur',concept:'Parenté/Féminin',description:''},
  ])
  log(r,'axt',{'Parenté/Féminin':"Lien de fraternité féminin. Ô sœur d'Aaron ! Partage le sang, hérite."})

  // 769. jrr (جرر) — traîner, tirer
  r = await ins('jrr', [
    {sense:'traîner',concept:'Traction/Entraînement',description:"Tirer quelque chose derrière soi — traîner (jarra) c'est mouvoir en tirant. C'est directionnel vers celui qui tire. Le jarîra est la faute commise, ce qui traîne comme conséquence. Qu'aucun peuple ne vous entraîne (yajrimannakum). Le péché entraîne ses conséquences. Être traîné vers le Feu c'est y être amené de force."},
    {sense:'tirer',concept:'Traction/Entraînement',description:''},
    {sense:'entraîner',concept:'Traction/Entraînement',description:''},
  ])
  log(r,'jrr',{'Traction/Entraînement':"Mouvoir en tirant. Qu'aucun peuple ne vous entraîne. Le péché entraîne."})

  // 770. shan (شأن) — affaire, état
  r = await ins('shan', [
    {sense:'affaire',concept:'État/Occupation',description:"Ce qui occupe et concerne quelqu'un — l'affaire (sha'n) est ce dont on s'occupe. C'est variable selon les moments. Chaque jour Il est à une œuvre (fî sha'n). Dieu a des affaires qu'Il accomplit constamment. Le sha'n est aussi l'état, la condition dans laquelle on se trouve. Le jour où chacun aura assez de son propre sha'n."},
    {sense:'état',concept:'État/Occupation',description:''},
    {sense:'occupation',concept:'État/Occupation',description:''},
  ])
  log(r,'shan',{'État/Occupation':"Ce qui occupe. Chaque jour Il est à une œuvre. Chacun aura son sha'n."})

  console.log('\n=== Batch 100 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
