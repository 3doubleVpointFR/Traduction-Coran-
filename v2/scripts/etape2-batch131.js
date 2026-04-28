const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 906, total = 2321

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
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])

  // 925. tba (تبع) — suivre
  r = await ins('tba', [
    {sense:'suivre',concept:'Suivisme/Obéissance',description:"Aller derrière quelqu'un ou quelque chose — suivre (tabi'a) c'est marcher après un guide. C'est directionnel et peut être ponctuel ou permanent. Suivez (ittabi'û) ce qui vous a été révélé. Le tâbi' est le suiveur, l'atbâ' sont les disciples. Suivre la guidance divine mène au salut, suivre les passions égare. L'ittibâ' est l'adhésion pratique, pas seulement théorique."},
    {sense:'imiter',concept:'Suivisme/Obéissance',description:''},
    {sense:'disciple',concept:'Suivisme/Obéissance',description:''},
  ])
  log(r,'tba',{'Suivisme/Obéissance':"Marcher après un guide. Suivez ce qui est révélé. L'ittibâ' pratique."})

  // 926. tlw (تلو) — réciter, suivre
  r = await ins('tlw', [
    {sense:'réciter',concept:'Récitation/Succession',description:"Lire à haute voix — réciter (talâ) c'est énoncer les paroles sacrées. C'est ponctuel comme acte et répété comme pratique. Récite (utlu) ce qui t'a été révélé du Livre. La tilâwa est la récitation du Coran, acte de culte. Talâ signifie aussi suivre, venir après. Le tâlî suit le précédent. Réciter c'est suivre la Parole, la faire passer de Dieu à soi puis aux autres."},
    {sense:'lire',concept:'Récitation/Succession',description:''},
    {sense:'succéder',concept:'Récitation/Succession',description:''},
  ])
  log(r,'tlw',{'Récitation/Succession':"Énoncer les paroles sacrées. Récite ce qui t'est révélé. La tilâwa: culte."})

  // 927. shr (سحر) — magie, aube
  r = await ins('shr', [
    {sense:'magie',concept:'Magie/Aube',description:"Art occulte qui trompe les sens — la magie (sihr) est l'illusion qui détourne du réel. C'est intérieur (tromperie) et extérieur (effets apparents). Ils enseignèrent aux gens la magie (al-sihr). Les magiciens de Pharaon furent vaincus par Moïse. Le sihr est interdit car il implique souvent l'aide des démons. Le sahar est aussi l'aube, le moment avant le lever du soleil. Les deux sens partagent l'idée de ce qui précède la clarté."},
    {sense:'ensorceler',concept:'Magie/Aube',description:''},
    {sense:'aube',concept:'Magie/Aube',description:''},
  ])
  log(r,'shr',{'Magie/Aube':"Illusion qui trompe. Magiciens de Pharaon vaincus. Aube avant la clarté."})

  // 928. baa (بوء) — mériter, retourner
  r = await ins('baa', [
    {sense:'mériter',concept:'Rétribution/Retour',description:"Encourir les conséquences de ses actes — mériter (bâ'a) c'est revenir avec une charge, positive ou négative. C'est ponctuel comme acte et permanent comme conséquence. Ils revinrent (bâ'û) avec une colère de la part de Dieu. Le bawâ' est ce qu'on mérite et qui revient. Le mubawwa' est la demeure, le lieu où l'on revient. Les actes reviennent à leur auteur comme rétribution."},
    {sense:'retourner',concept:'Rétribution/Retour',description:''},
    {sense:'encourir',concept:'Rétribution/Retour',description:''},
  ])
  log(r,'baa',{'Rétribution/Retour':"Encourir les conséquences. Ils revinrent avec colère. Les actes reviennent."})

  // 929. nskh (نسخ) — abroger, copier
  r = await ins('nskh', [
    {sense:'abroger',concept:'Abrogation/Transcription',description:"Annuler une règle par une autre — abroger (nasakha) c'est remplacer un jugement par un autre. C'est ponctuel comme acte législatif. Nous n'abrogeons (nansakh) aucun verset sans en apporter un meilleur. Le naskh est le remplacement divin d'une règle par une autre plus adaptée. Nasakha signifie aussi copier, transcrire. L'abrogation n'est pas effacement mais évolution de la guidance selon la sagesse divine."},
    {sense:'copier',concept:'Abrogation/Transcription',description:''},
    {sense:'remplacer',concept:'Abrogation/Transcription',description:''},
  ])
  log(r,'nskh',{'Abrogation/Transcription':"Remplacer une règle. Nous n'abrogeons sans apporter meilleur. Évolution de guidance."})

  console.log('\n=== Batch 131 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
