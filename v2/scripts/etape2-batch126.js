const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 882, total = 2321

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

  // 899. rby (ربي) — mon Seigneur
  r = await ins('rby', [
    {sense:'mon Seigneur',concept:'Seigneurie/Relation',description:"Pronom possessif avec Rabb — Rabbî exprime la relation personnelle avec le Seigneur. C'est permanent comme lien. Mon Seigneur (Rabbî), pardonne-moi ! L'invocation avec Rabbî est intime, directe. C'est le cri du serviteur vers son Maître, la reconnaissance de la dépendance totale. Rabbî est l'appel de l'âme qui se tourne vers Celui qui la nourrit et la guide."},
    {sense:'Seigneur mien',concept:'Seigneurie/Relation',description:''},
  ])
  log(r,'rby',{'Seigneurie/Relation':"Relation personnelle. Mon Seigneur, pardonne-moi. Cri du serviteur vers son Maître."})

  // 900. kthr (كثر) — beaucoup, abondant
  r = await ins('kthr', [
    {sense:'beaucoup',concept:'Abondance/Multiplicité',description:"En grande quantité — beaucoup (kathîr) s'oppose à peu (qalîl). C'est permanent comme quantité relative. Beaucoup (kathîran) d'entre eux sont pervers. La majorité n'est pas toujours dans le vrai. Le kathîr peut être une bénédiction (progéniture nombreuse) ou une illusion (richesses qui détournent). Al-Kawthar est l'abondance donnée au Prophète. L'abondance vraie vient de Dieu."},
    {sense:'abondant',concept:'Abondance/Multiplicité',description:''},
    {sense:'nombreux',concept:'Abondance/Multiplicité',description:''},
  ])
  log(r,'kthr',{'Abondance/Multiplicité':"Grande quantité. Beaucoup sont pervers. Al-Kawthar: abondance prophétique."})

  // 901. eðb (عذب) — châtier (variante)
  r = await ins('eðb', [
    {sense:'châtier',concept:'Châtiment',description:"Skip si déjà fait comme edhb."},
  ])

  // 902. myk (ميك) — Mika'il, ange
  r = await ins('myk', [
    {sense:'Mika\'il',concept:'Ange/Providence',description:"Ange de la subsistance — Mîkâ'îl (Michel) est un des grands anges. C'est permanent comme être créé. Quiconque est ennemi de Jibrîl et Mîkâ'îl... Mîkâ'îl est chargé de la pluie et de la végétation, de la subsistance des créatures. Il travaille avec Jibrîl qui apporte la révélation. Les deux anges sont complémentaires : l'un nourrit les corps, l'autre les âmes."},
    {sense:'Michel',concept:'Ange/Providence',description:''},
  ])
  log(r,'myk',{'Ange/Providence':"Ange de la subsistance. Mîkâ'îl avec Jibrîl. Nourrit les corps, Jibrîl les âmes."})

  // 903. ezr (عزر) — aider, soutenir
  r = await ins('ezr', [
    {sense:'aider',concept:'Soutien/Renforcement',description:"Apporter son assistance — aider ('azzara) c'est renforcer quelqu'un. C'est ponctuel comme acte et permanent comme disposition. Vous les soutiendrez (tu'azzirûhum) et les honorerez. Le ta'zîr est le soutien, l'assistance au prophète et à sa mission. C'est aussi une peine correctionnelle en droit islamique. Soutenir la vérité demande engagement et sacrifice."},
    {sense:'soutenir',concept:'Soutien/Renforcement',description:''},
    {sense:'renforcer',concept:'Soutien/Renforcement',description:''},
  ])
  log(r,'ezr',{'Soutien/Renforcement':"Apporter assistance. Vous les soutiendrez. Le ta'zîr: soutien à la mission."})

  // 904. a w y (أوي) — abriter, se réfugier
  r = await ins('a w y', [
    {sense:'abriter',concept:'Refuge/Protection',description:"Donner un abri sûr — abriter (âwâ) c'est protéger en accueillant. C'est ponctuel comme acte et permanent comme état. Quand les jeunes se réfugièrent (âwaw) dans la caverne. La caverne des Gens de la Kahf fut leur refuge. Le ma'wâ est le lieu où l'on se retire, l'abri final. L'Enfer est mauvais ma'wâ, le Paradis est le meilleur refuge."},
    {sense:'se réfugier',concept:'Refuge/Protection',description:''},
    {sense:'refuge',concept:'Refuge/Protection',description:''},
  ])
  log(r,'a w y',{'Refuge/Protection':"Protéger en accueillant. Les jeunes dans la caverne. Le ma'wâ: abri final."})

  console.log('\n=== Batch 126 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
