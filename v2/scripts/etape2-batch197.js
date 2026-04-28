const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1558, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. gdw (غدو) — aller le matin, matin, demain
  r=await ins('gdw',[
    {sense:'aller le matin',concept:'Matin/Départ matinal',description:"Acte de partir tôt, au moment où le jour commence. Le départ matinal est directionnel et ponctuel — il marque le début de la journée d'action. Le matin est le temps de l'énergie nouvelle et du commencement."},
    {sense:'matin (ghuduww)',concept:'Matin/Départ matinal',description:''},
    {sense:'demain',concept:'Matin/Départ matinal',description:''},
    {sense:'repas du matin',concept:'Divers',description:'Le premier repas — lié au temps matinal.'},
  ]);log(r,'gdw')

  // 2. qed (قعد) — variante de qwed (s'asseoir)
  r=await ins('qed',[
    {sense:'s\'asseoir',concept:'Position assise/Immobilité',description:"Acte de prendre une position basse et stable. L'assise est un état qui fixe la personne — c'est l'opposé de se lever et d'agir. S'asseoir c'est choisir l'immobilité."},
    {sense:'rester',concept:'Position assise/Immobilité',description:''},
    {sense:'s\'abstenir',concept:'Position assise/Immobilité',description:''},
  ]);log(r,'qed')

  // 3. bdr (بدر) — se hâter, pleine lune, Badr
  r=await ins('bdr',[
    {sense:'se hâter',concept:'Empressement/Initiative',description:"Acte de prendre l'initiative et d'agir avant les autres. L'empressement est directionnel vers l'avant — celui qui se hâte devance les autres. C'est un mouvement ponctuel de rapidité."},
    {sense:'devancer',concept:'Empressement/Initiative',description:''},
    {sense:'pleine lune (badr)',concept:'Plénitude/Lumière',description:"La lune dans son état de pleine luminosité. La pleine lune est un état de complétude — elle éclaire la nuit de sa lumière maximale."},
    {sense:'Badr (lieu)',concept:'Divers',description:'Lieu de la première bataille de l\'islam — lié à la pleine lune.'},
  ]);log(r,'bdr')

  // 4. fsh (فشل) — échouer, être lâche, faiblir
  r=await ins('fsh',[
    {sense:'échouer',concept:'Échec/Faiblesse',description:"État de celui qui n'atteint pas son but par manque de force ou de courage. L'échec est un résultat ponctuel mais qui peut devenir permanent si la faiblesse persiste. Échouer c'est s'arrêter avant d'avoir abouti."},
    {sense:'être lâche',concept:'Échec/Faiblesse',description:''},
    {sense:'faiblir',concept:'Échec/Faiblesse',description:''},
    {sense:'se disperser',concept:'Échec/Faiblesse',description:''},
  ]);log(r,'fsh')

  // 5. wkl (وكل) — s'en remettre à, confier, mandater
  r=await ins('wkl',[
    {sense:'s\'en remettre à',concept:'Confiance/Délégation',description:"Acte intérieur de confier ses affaires à quelqu'un en qui on a pleinement confiance. Le tawakkul est directionnel — il part de celui qui confie vers celui à qui il confie. C'est un état permanent de confiance qui libère l'âme de l'anxiété."},
    {sense:'confier',concept:'Confiance/Délégation',description:''},
    {sense:'mandater',concept:'Confiance/Délégation',description:''},
    {sense:'représentant (wakil)',concept:'Confiance/Délégation',description:''},
  ]);log(r,'wkl')

  // 6. lnn (لنن → لن) — jamais (négation future)
  r=await ins('lnn',[
    {sense:'jamais (futur)',concept:'Négation future',description:"Particule qui nie catégoriquement qu'une chose se produise dans l'avenir. Le lan ferme définitivement la porte du futur — c'est une négation absolue et permanente de ce qui est à venir."},
    {sense:'ne... jamais',concept:'Négation future',description:''},
  ]);log(r,'lnn')

  // 7. fwr (فور) — bouillonner, immédiatement, jaillir
  r=await ins('fwr',[
    {sense:'bouillonner',concept:'Ébullition/Urgence',description:"État de ce qui est en mouvement violent et incessant, comme l'eau qui bout. L'ébullition est un état de grande agitation — elle monte et cherche à sortir. Le fawr est l'immédiateté, l'urgence de ce qui ne peut pas attendre."},
    {sense:'immédiatement',concept:'Ébullition/Urgence',description:''},
    {sense:'jaillir',concept:'Ébullition/Urgence',description:''},
  ]);log(r,'fwr')

  // 8. khms (خمس) — cinq, cinquième
  r=await ins('khms',[
    {sense:'cinq',concept:'Nombre/Quantité',description:"Le nombre cinq, quantité fixe et permanente. Le cinq est un nombre complet dans la tradition — cinq prières, cinq piliers. C'est un nombre de plénitude pratique."},
    {sense:'cinquième',concept:'Nombre/Quantité',description:''},
  ]);log(r,'khms')

  // 9. akm (أكم) — variante, possiblement complétude
  r=await ins('akm',[
    {sense:'complet',concept:'Complétude',description:"État de ce à quoi il ne manque rien. La complétude est permanente une fois atteinte — tout est à sa place."},
    {sense:'achever',concept:'Complétude',description:''},
  ]);log(r,'akm')

  // 10. qta (قطع) — couper, trancher, interrompre
  r=await ins('qta',[
    {sense:'couper',concept:'Coupure/Rupture',description:"Acte extérieur de séparer par un instrument tranchant ce qui était joint. La coupure est directionnelle et ponctuelle — elle sort de celui qui coupe et atteint ce qui est coupé. Couper c'est rompre une continuité de façon irréversible."},
    {sense:'trancher',concept:'Coupure/Rupture',description:''},
    {sense:'interrompre',concept:'Coupure/Rupture',description:''},
    {sense:'rompre les liens',concept:'Coupure/Rupture',description:''},
    {sense:'traverser',concept:'Divers',description:'Couper une distance — traverser un espace en le divisant.'},
  ]);log(r,'qta')

  console.log('\n=== Batch 197 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
