const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1478, total = 2321

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

  // 1. yw (يوي) — malheur, détresse
  r=await ins('yw',[
    {sense:'malheur',concept:'Exclamation/Détresse',description:"Cri qui exprime la douleur et la détresse face au malheur. L'exclamation sort de celui qui souffre — c'est un état ponctuel d'expression de la souffrance intérieure."},
    {sense:'hélas',concept:'Exclamation/Détresse',description:''},
  ]);log(r,'yw')

  // 2. glm (غلم) — garçon, jeune homme, serviteur
  r=await ins('glm',[
    {sense:'garçon',concept:'Jeunesse/Enfant mâle',description:"Un jeune être humain de sexe masculin qui n'a pas encore atteint la maturité. La jeunesse est un état temporaire mais formateur — le ghulam est entre l'enfance et l'âge adulte, plein de potentiel."},
    {sense:'jeune homme',concept:'Jeunesse/Enfant mâle',description:''},
    {sense:'serviteur',concept:'Jeunesse/Enfant mâle',description:''},
  ]);log(r,'glm')

  // 3. eqr (عقر) — être stérile, couper les jarrets, base
  r=await ins('eqr',[
    {sense:'être stérile',concept:'Stérilité/Incapacité',description:"État de celui ou celle qui ne peut pas engendrer. La stérilité est un état permanent d'incapacité reproductive — elle est l'absence de la capacité de donner la vie. La femme stérile est celle dont le ventre ne porte pas."},
    {sense:'stérilité',concept:'Stérilité/Incapacité',description:''},
    {sense:'couper les jarrets',concept:'Destruction/Mutilation',description:"Acte violent de trancher les tendons des pattes d'un animal pour l'immobiliser. La mutilation est directionnelle et destructrice — elle sort du bourreau et atteint l'animal."},
    {sense:'base (d\'un palmier)',concept:'Divers',description:'Le pied de l\'arbre — ce qui ne bouge pas.'},
  ]);log(r,'eqr')

  // 4. wde (وضع) — poser, accoucher, établir, diminuer
  r=await ins('wde',[
    {sense:'poser',concept:'Dépôt/Placement',description:"Acte extérieur de mettre quelque chose en place, de l'installer à un endroit. Le placement est directionnel du haut vers le bas — on pose ce qu'on portait. Poser c'est créer un état de stabilité."},
    {sense:'accoucher',concept:'Dépôt/Placement',description:''},
    {sense:'établir',concept:'Dépôt/Placement',description:''},
    {sense:'diminuer',concept:'Abaissement',description:"Acte de rabaisser la valeur ou le rang de quelque chose. L'abaissement est directionnel vers le bas."},
  ]);log(r,'wde')

  // 5. antha (أنثى) — variante de anth (féminin)
  r=await ins('antha',[
    {sense:'femelle',concept:'Féminin/Femelle',description:"Le genre qui porte et donne la vie. Le féminin est un état permanent de l'être — il caractérise la nature de ce qui reçoit et génère."},
    {sense:'féminin',concept:'Féminin/Femelle',description:''},
  ]);log(r,'antha')

  // 6. marym (مريم) — Marie (nom propre)
  r=await ins('marym',[
    {sense:'Marie (nom propre)',concept:'Nom propre',description:"Nom de la mère de Jésus, femme pieuse et pure choisie par Dieu. C'est un nom propre permanent — Marie est le modèle de la dévotion et de la pureté féminine dans le Coran."},
  ]);log(r,'marym')

  // 7. rjm (رجم) — lapider, maudire, chasser à coups de pierres
  r=await ins('rjm',[
    {sense:'lapider',concept:'Lapidation/Rejet',description:"Acte extérieur de jeter des pierres sur quelqu'un pour le punir ou le chasser. La lapidation sort des lanceurs et atteint le visé — c'est directionnel et violent. C'est un acte collectif de rejet qui exclut définitivement."},
    {sense:'chasser à coups de pierres',concept:'Lapidation/Rejet',description:''},
    {sense:'maudire',concept:'Lapidation/Rejet',description:''},
    {sense:'conjecturer',concept:'Divers',description:'Lancer des suppositions — comme on lance des pierres dans l\'obscurité.'},
  ]);log(r,'rjm')

  // 8. kfl (كفل) — garantir, prendre en charge, tutelle
  r=await ins('kfl',[
    {sense:'prendre en charge',concept:'Tutelle/Garantie',description:"Acte extérieur de se porter responsable de quelqu'un, d'assurer son entretien et sa protection. La tutelle sort du garant et atteint celui qui est pris en charge — c'est directionnel et crée un lien permanent de responsabilité."},
    {sense:'garantir',concept:'Tutelle/Garantie',description:''},
    {sense:'tutelle',concept:'Tutelle/Garantie',description:''},
    {sense:'part',concept:'Divers',description:'La part de responsabilité qui revient à chacun.'},
  ]);log(r,'kfl')

  // 9. lk (لك) — à toi (variante déjà faite, skip probable)
  r=await ins('lk',[
    {sense:'à toi',concept:'Attribution/Destination',description:"Préposition et pronom indiquant l'appartenance à l'interlocuteur. L'attribution est directionnelle vers celui à qui on s'adresse."},
    {sense:'pour toi',concept:'Attribution/Destination',description:''},
  ]);log(r,'lk')

  // 10. wHy (وحي) — révéler, inspirer, révélation
  r=await ins('wHy',[
    {sense:'révéler',concept:'Révélation/Inspiration',description:"Acte divin de communiquer un message à un prophète de façon invisible et directe. La révélation sort de Dieu et atteint le prophète — c'est directionnel et transformateur. Le wahy est la parole divine qui descend dans le cœur du récepteur sans intermédiaire humain."},
    {sense:'inspirer',concept:'Révélation/Inspiration',description:''},
    {sense:'révélation (wahy)',concept:'Révélation/Inspiration',description:''},
    {sense:'faire signe',concept:'Divers',description:'Communication non verbale — un geste qui transmet un message.'},
  ]);log(r,'wHy')

  console.log('\n=== Batch 189 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
