const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1358, total = 2321

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

  // 1. lm (لم) — ne pas (négation du passé)
  r=await ins('lm',[
    {sense:'ne pas (passé)',concept:'Négation/Passé',description:"Particule qui nie qu'un acte ait eu lieu dans le passé. La négation du passé transforme l'accompli en non-accompli — elle affirme que l'événement n'est jamais arrivé. C'est un jugement rationnel et définitif sur le non-être d'un fait."},
    {sense:'n\'a pas',concept:'Négation/Passé',description:''},
  ]);log(r,'lm')

  // 2. gtrf (غترف) — variante de ghtrf (luxe/arrogance)
  r=await ins('gtrf',[
    {sense:'vivre dans le luxe',concept:'Luxe/Arrogance',description:"État de celui que la richesse a rendu sourd aux avertissements. Le luxe est permanent chez le riche orgueilleux — il coupe de la réalité et rend arrogant."},
    {sense:'être gâté par la richesse',concept:'Luxe/Arrogance',description:''},
  ]);log(r,'gtrf')

  // 3. grf (غرف) — variante de ghrf (puiser/chambre haute)
  r=await ins('grf',[
    {sense:'puiser',concept:'Puisage/Prélèvement',description:"Acte de prendre de l'eau avec la main. Le puisage est directionnel — il va de la source vers celui qui puise. C'est un acte ponctuel de prélèvement."},
    {sense:'poignée d\'eau',concept:'Puisage/Prélèvement',description:''},
    {sense:'chambre haute',concept:'Élévation/Étage',description:"Pièce située en hauteur, l'étage noble. La chambre haute symbolise la récompense et l'honneur."},
  ]);log(r,'grf')

  // 4. mnhm (من + هم) — d'eux, parmi eux
  r=await ins('mnhm',[
    {sense:'d\'eux',concept:'Provenance/Partitivité',description:"Préposition et pronom qui indiquent l'origine à partir d'un groupe. La provenance est directionnelle — elle part du groupe vers ce qui en sort."},
    {sense:'parmi eux',concept:'Provenance/Partitivité',description:''},
  ]);log(r,'mnhm')

  // 5. annhm (أنّهم) — que eux (particule + pronom)
  r=await ins('annhm',[
    {sense:'que eux (certes)',concept:'Certitude/Assertion',description:"Particule d'assertion suivie du pronom pluriel. L'affirmation impose une certitude sur le groupe désigné — elle pose une vérité indiscutable les concernant."},
    {sense:'certes ils',concept:'Certitude/Assertion',description:''},
  ]);log(r,'annhm')

  // 6. mlq (لقي) — rencontrer, trouver, recevoir
  r=await ins('mlq',[
    {sense:'rencontrer',concept:'Rencontre/Réception',description:"Acte de se trouver face à face avec quelqu'un ou quelque chose. La rencontre est bidirectionnelle — les deux parties arrivent l'une vers l'autre. C'est un événement ponctuel mais qui peut avoir des conséquences permanentes."},
    {sense:'trouver',concept:'Rencontre/Réception',description:''},
    {sense:'recevoir',concept:'Rencontre/Réception',description:''},
    {sense:'jeter',concept:'Projection',description:"Acte extérieur de lancer quelque chose. Le jet est directionnel — il sort de celui qui jette et atteint la cible."},
    {sense:'inspirer (ilqa)',concept:'Projection',description:''},
  ]);log(r,'mlq')

  // 7. fat (فئة) — variante de fah (groupe, skip probable)
  r=await ins('fat',[
    {sense:'groupe',concept:'Groupe/Faction',description:"Ensemble de personnes unies par un but commun. Le groupe agit comme un seul corps face aux autres."},
    {sense:'troupe',concept:'Groupe/Faction',description:''},
  ]);log(r,'fat')

  // 8. ghl (غلب) — variante de ghlb (vaincre, skip probable)
  r=await ins('ghl',[
    {sense:'vaincre',concept:'Victoire/Domination',description:"Acte de triompher sur un adversaire. La victoire est directionnelle — elle sort du vainqueur et s'impose au vaincu."},
    {sense:'dominer',concept:'Victoire/Domination',description:''},
  ]);log(r,'ghl')

  // 9. me (معي) — avec, ensemble, accompagnement
  r=await ins('me',[
    {sense:'avec',concept:'Accompagnement/Compagnie',description:"Préposition qui indique la présence simultanée de deux êtres dans le même espace ou la même action. L'accompagnement est un état de partage permanent tant que les deux parties restent ensemble — être avec quelqu'un c'est partager son chemin."},
    {sense:'en compagnie de',concept:'Accompagnement/Compagnie',description:''},
    {sense:'ensemble',concept:'Accompagnement/Compagnie',description:''},
  ]);log(r,'me')

  // 10. ghny (غني) — être riche, se passer de, suffisant
  r=await ins('ghny',[
    {sense:'être riche',concept:'Richesse/Autosuffisance',description:"État de celui qui possède suffisamment pour ne manquer de rien. La richesse est un état intérieur de plénitude — elle est permanente tant que les moyens demeurent. Le riche est celui qui n'a besoin de personne car il se suffit à lui-même."},
    {sense:'se passer de',concept:'Richesse/Autosuffisance',description:''},
    {sense:'être autosuffisant',concept:'Richesse/Autosuffisance',description:''},
    {sense:'enrichir',concept:'Richesse/Autosuffisance',description:''},
    {sense:'chant',concept:'Divers',description:'Le chant qui enrichit l\'âme — sens dérivé de la suffisance intérieure.'},
  ]);log(r,'ghny')

  console.log('\n=== Batch 177 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
