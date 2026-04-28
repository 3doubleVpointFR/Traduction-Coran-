const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1528, total = 2321

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

  // 1. brk (برك) — bénir, s'agenouiller, bassin d'eau
  r=await ins('brk',[
    {sense:'bénir',concept:'Bénédiction/Abondance',description:"Acte divin d'accorder un surplus de bien permanent à quelqu'un ou quelque chose. La baraka sort de Dieu et atteint ce qui est béni — c'est directionnel et crée un état permanent de croissance et de bien. La bénédiction est un don qui ne s'épuise pas."},
    {sense:'bénédiction (baraka)',concept:'Bénédiction/Abondance',description:''},
    {sense:'être béni',concept:'Bénédiction/Abondance',description:''},
    {sense:'s\'agenouiller (chameau)',concept:'Repos/Stabilité',description:"Acte du chameau qui plie ses genoux pour se poser au sol. L'agenouillement crée un état de repos stable — le chameau se fixe en un lieu."},
    {sense:'bassin d\'eau',concept:'Divers',description:'Étendue d\'eau qui reste en place — lié au sens de se poser et rester.'},
  ]);log(r,'brk')

  // 2. ryq (ريق) — variante, possiblement provision de voyage
  r=await ins('ryq',[
    {sense:'provision de voyage',concept:'Provision/Viatique',description:"Ce que l'on emporte pour se sustenter pendant le voyage. La provision est temporelle — elle accompagne le voyageur et s'épuise au fil du chemin. Le meilleur viatique est la piété."},
    {sense:'sustenter',concept:'Provision/Viatique',description:''},
  ]);log(r,'ryq')

  // 3. ewj (عوج) — être tordu, courbure, déviation
  r=await ins('ewj',[
    {sense:'être tordu',concept:'Torsion/Déviation',description:"État de ce qui n'est pas droit, de ce qui dévie de la ligne droite. La torsion est permanente dans ce qui est tordu — elle est le contraire de la rectitude. Le iwaj est l'absence de droiture, que ce soit dans un chemin ou dans un caractère."},
    {sense:'courbure',concept:'Torsion/Déviation',description:''},
    {sense:'déviation',concept:'Torsion/Déviation',description:''},
  ]);log(r,'ewj')

  // 4. nkr (نكر) — nier, rejeter, blâmable, inconnu
  r=await ins('nkr',[
    {sense:'nier',concept:'Déni/Rejet',description:"Acte de refuser de reconnaître ce qui est vrai ou connu. Le déni sort de celui qui nie et rejette la vérité — c'est directionnel et rationnel. Nier c'est fermer les yeux sur ce que l'on sait être vrai."},
    {sense:'rejeter',concept:'Déni/Rejet',description:''},
    {sense:'blâmable (munkar)',concept:'Blâmable/Mal',description:"Ce qui est reconnu comme mauvais par la raison et la loi. Le munkar est permanent dans sa nature — il est le contraire du maaruf (reconnu comme bien). C'est ce que la nature saine repousse."},
    {sense:'inconnu',concept:'Divers',description:'Ce qui n\'est pas reconnu — l\'étranger, le nouveau.'},
  ]);log(r,'nkr')

  // 5. fyq (فيق) — revenir à soi, se réveiller, surplus de lait
  r=await ins('fyq',[
    {sense:'revenir à soi',concept:'Réveil/Retour à la conscience',description:"Acte de retrouver ses sens après un évanouissement ou une absence. Le réveil est un passage de l'inconscience vers la conscience — c'est directionnel de l'intérieur vers l'extérieur. Revenir à soi c'est retrouver la lucidité."},
    {sense:'se réveiller',concept:'Réveil/Retour à la conscience',description:''},
    {sense:'surplus de lait',concept:'Divers',description:'Le lait qui revient dans la mamelle après la traite — sens de retour.'},
  ]);log(r,'fyq')

  // 6. esm (عصم) — protéger, préserver, empêcher
  r=await ins('esm',[
    {sense:'protéger',concept:'Protection/Préservation',description:"Acte de garder quelqu'un à l'abri du danger et de l'erreur. La protection sort du protecteur et atteint le protégé — c'est directionnel et crée un état de sécurité permanente. Le isma est la protection divine qui empêche de tomber dans le péché."},
    {sense:'préserver',concept:'Protection/Préservation',description:''},
    {sense:'empêcher de tomber',concept:'Protection/Préservation',description:''},
    {sense:'s\'accrocher à',concept:'Divers',description:'S\'agripper à quelque chose de solide pour ne pas tomber.'},
  ]);log(r,'esm')

  // 7. anṯy (أنثى) — variante féminin
  r=await ins('an\u1E6Fy',[
    {sense:'femelle',concept:'Féminin/Femelle',description:"Le genre qui porte et donne la vie. Le féminin est permanent dans l'être — il caractérise la nature de ce qui reçoit et génère."},
    {sense:'féminin',concept:'Féminin/Femelle',description:''},
  ]);log(r,'an\u1E6Fy')

  // 8. mrym (مريم) — variante Marie
  r=await ins('mrym',[
    {sense:'Marie',concept:'Nom propre',description:"Nom de la mère de Jésus, femme pure choisie par Dieu. C'est un nom propre permanent."},
  ]);log(r,'mrym')

  // 9. ḏrw (ذرو) — variante dispersion
  r=await ins('\u1E0Frw',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. Multidirectionnel et irréversible."},
    {sense:'progéniture',concept:'Descendance',description:"Les enfants qui se multiplient à travers les générations."},
    {sense:'atome',concept:'Petitesse',description:"La plus petite chose perceptible."},
  ]);log(r,'\u1E0Frw')

  // 10. hbl (حبل) — corde, lien, grossesse
  r=await ins('hbl',[
    {sense:'corde',concept:'Lien/Attachement',description:"Ce qui relie deux choses ensemble et les empêche de se séparer. La corde est un lien permanent tant qu'elle n'est pas coupée — elle connecte et maintient. Le habl d'Allah est le lien qui relie l'homme à Dieu."},
    {sense:'lien',concept:'Lien/Attachement',description:''},
    {sense:'pacte',concept:'Lien/Attachement',description:''},
    {sense:'grossesse',concept:'Gestation',description:"État de la femme qui porte un enfant. La grossesse est un état intérieur temporaire mais transformateur — elle porte en elle la vie future."},
    {sense:'veine jugulaire',concept:'Divers',description:'La corde du cou — le lien vital le plus proche.'},
  ]);log(r,'hbl')

  console.log('\n=== Batch 194 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
