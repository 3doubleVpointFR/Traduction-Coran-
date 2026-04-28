const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 563, total = 2321

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

  // 568. dkk (دكك) — aplatir, écraser
  r = await ins('dkk', [
    {sense:'aplatir',concept:'Écrasement/Destruction',description:"Réduire à une surface plane, broyer — aplatir (dakka) est l'acte de destruction totale qui ne laisse rien debout. C'est directionnel de haut en bas. Quand la terre sera aplatie (dukkat) d'un seul coup. La montagne fut réduite en poussière (dakkan). L'aplatissement est image du nivellement final de toute chose."},
    {sense:'écraser',concept:'Écrasement/Destruction',description:''},
    {sense:'réduire en poussière',concept:'Écrasement/Destruction',description:''},
  ])
  log(r,'dkk',{'Écrasement/Destruction':"Réduire à rien. La montagne en poussière. Nivellement final."})

  // 569. esf (عصف) — balle du blé, tempête
  r = await ins('esf', [
    {sense:'balle du blé',concept:'Résidu/Légèreté',description:"L'enveloppe légère du grain que le vent emporte — la balle ('asf) est le déchet après le battage. C'est l'image de ce qui est sans valeur et sans poids. Il les rendit comme de la paille mangée ('asfin ma'kûl). La légèreté de la paille symbolise la vanité des œuvres des mécréants."},
    {sense:'paille',concept:'Résidu/Légèreté',description:''},
    {sense:'tempête',concept:'Vent violent',description:"Vent qui détruit — la tempête ('âsif) est le vent furieux qui emporte tout sur son passage."},
  ])
  log(r,'esf',{'Résidu/Légèreté':"Enveloppe légère. Comme de la paille mangée. Vanité des œuvres.",'Vent violent':"Tempête qui emporte tout."})

  // 570. rhq (رهق) — couvrir, accabler
  r = await ins('rhq', [
    {sense:'couvrir',concept:'Enveloppement/Oppression',description:"Recouvrir complètement, submerger — couvrir (rahiqa/yarhaqu) est l'acte d'envelopper de toutes parts. Leurs visages seront couverts (tarhaquhâ) de ténèbres. L'humiliation couvrira les mécréants. Être couvert c'est être submergé sans issue, ne voir que ce qui oppresse."},
    {sense:'accabler',concept:'Enveloppement/Oppression',description:''},
    {sense:'submerger',concept:'Enveloppement/Oppression',description:''},
    {sense:'stupidité',concept:'Folie',description:"Manque de discernement — les djinns stupides (sufahâ'unâ) parlaient contre Dieu."},
  ])
  log(r,'rhq',{'Enveloppement/Oppression':"Recouvrir de toutes parts. Visages couverts de ténèbres. Submergé.",'Folie':"Manque de discernement."})

  // 571. sae (سعة) — largeur, capacité
  r = await ins('sae', [
    {sense:'largeur',concept:'Étendue/Capacité',description:"L'amplitude, le contraire de l'étroitesse — la largeur (sa'a) est permanente comme qualité. Dieu est Vaste (Wâsi'), Il englobe tout de Sa science et de Sa miséricorde. La terre de Dieu est vaste, émigrez-y ! La capacité financière (wus') détermine l'obligation."},
    {sense:'capacité',concept:'Étendue/Capacité',description:''},
    {sense:'vaste',concept:'Étendue/Capacité',description:''},
  ])
  log(r,'sae',{'Étendue/Capacité':"Amplitude. Dieu est Vaste. La terre de Dieu est vaste."})

  // 572. aln (ءلن) — annoncer, déclarer
  r = await ins('aln', [
    {sense:'annoncer',concept:'Déclaration/Publicité',description:"Rendre public ce qui était caché — annoncer (a'lana) c'est porter à la connaissance de tous. C'est directionnel de l'intérieur vers l'extérieur. Que vous cachiez votre parole ou que vous la proclamiez (tajharû bihi), Il connaît ce qu'il y a dans les poitrines. Le secret et le public sont égaux devant Dieu."},
    {sense:'proclamer',concept:'Déclaration/Publicité',description:''},
    {sense:'manifester',concept:'Déclaration/Publicité',description:''},
  ])
  log(r,'aln',{'Déclaration/Publicité':"Rendre public. Que vous cachiez ou proclamiez. Égaux devant Dieu."})

  // 573. lbn (لبن) — lait, brique
  r = await ins('lbn', [
    {sense:'lait',concept:'Nourriture/Pureté',description:"Liquide blanc nourrissant produit par les mamelles — le lait (laban) est pur et agréable à boire. D'entre le contenu de la panse et le sang, Nous vous abreuvons d'un lait pur, agréable aux buveurs. Le lait sort d'entre deux impuretés mais il est pur, signe de la puissance divine."},
    {sense:'allaiter',concept:'Nourriture/Pureté',description:''},
    {sense:'brique',concept:'Construction',description:"Élément de construction en terre cuite — les briques (labin) servent à bâtir. Pharaon ordonna de cuire des briques pour construire sa tour vers le ciel."},
  ])
  log(r,'lbn',{'Nourriture/Pureté':"Liquide pur. Sort d'entre deux impuretés. Agréable aux buveurs.",'Construction':"Brique pour bâtir. Tour de Pharaon."})

  console.log('\n=== Batch 62 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
