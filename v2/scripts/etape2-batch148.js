const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1068, total = 2321

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

  // 1. sher (شعر) — sentir, poésie, cheveux, savoir
  r=await ins('sher',[
    {sense:'sentir',concept:'Perception/Conscience',description:"Acte intérieur de prendre conscience de quelque chose par les sens ou l'intuition. La perception est le premier contact entre l'être et le monde — elle est directionnelle de l'extérieur vers l'intérieur. Sentir c'est savoir par l'expérience directe, pas par le raisonnement."},
    {sense:'savoir',concept:'Perception/Conscience',description:''},
    {sense:'être conscient de',concept:'Perception/Conscience',description:''},
    {sense:'cheveux',concept:'Cheveux/Poils',description:"Ce qui pousse du corps et couvre la peau. Les cheveux sont permanents dans leur croissance — ils sont le signe visible de la vitalité. Le poil est ce qui perçoit le monde par le toucher, lié au sens de sentir."},
    {sense:'poils',concept:'Cheveux/Poils',description:''},
    {sense:'poésie',concept:'Poésie/Expression',description:"Art de la parole rythmée qui naît de la perception fine des choses. La poésie est un acte extérieur d'expression qui part du poète et atteint l'auditeur — elle transforme le sentiment intérieur en parole qui touche."},
    {sense:'poète',concept:'Poésie/Expression',description:''},
    {sense:'rite sacré',concept:'Divers',description:'Les signes et rites visibles du pèlerinage (shaeair).'},
  ]);log(r,'sher')

  // 2. ghsh (غشو) — couvrir, voiler, envelopper, venir à
  r=await ins('ghsh',[
    {sense:'couvrir',concept:'Couverture/Voilement',description:"Acte extérieur de recouvrir quelque chose pour le cacher ou le protéger. La couverture sort de ce qui couvre et atteint ce qui est couvert — c'est directionnel et peut être permanent ou temporaire. Couvrir c'est empêcher de voir ce qui est en dessous."},
    {sense:'voiler',concept:'Couverture/Voilement',description:''},
    {sense:'envelopper',concept:'Couverture/Voilement',description:''},
    {sense:'envahir',concept:'Couverture/Voilement',description:''},
    {sense:'venir à quelqu\'un',concept:'Venue/Approche',description:"Acte de se rendre auprès de quelqu'un, de l'aborder. La venue sort du visiteur et atteint le visité — c'est directionnel et ponctuel."},
    {sense:'évanouissement',concept:'Divers',description:'État où la conscience est couverte — obscurcissement temporaire.'},
  ]);log(r,'ghsh')

  // 3. tghyn (طغين → طغي) — transgresser, dépasser les limites, tyranniser
  r=await ins('tghyn',[
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de dépasser les limites fixées, d'aller au-delà de ce qui est permis. La transgression sort du transgresseur et franchit la frontière — c'est directionnel vers l'extérieur de la norme. Elle est ponctuelle dans l'acte mais peut devenir un état permanent chez le tyran."},
    {sense:'dépasser les limites',concept:'Transgression/Excès',description:''},
    {sense:'tyranniser',concept:'Transgression/Excès',description:''},
    {sense:'déborder (eau)',concept:'Transgression/Excès',description:''},
    {sense:'tyran (taghout)',concept:'Transgression/Excès',description:''},
  ]);log(r,'tghyn')

  // 4. rjae (رجع) — revenir, retourner, réponse
  r=await ins('rjae',[
    {sense:'revenir',concept:'Retour',description:"Acte de reprendre le chemin inverse vers le point de départ. Le retour est directionnel — il part de là où l'on est et ramène d'où l'on vient. C'est un mouvement qui boucle le cycle du départ, ponctuel dans l'acte mais peut être un retour définitif."},
    {sense:'retourner',concept:'Retour',description:''},
    {sense:'ramener',concept:'Retour',description:''},
    {sense:'se repentir',concept:'Retour',description:''},
    {sense:'réponse',concept:'Réponse/Écho',description:"Parole qui revient en réaction à ce qui a été dit. La réponse est directionnelle — elle part de celui qui répond et atteint celui qui a questionné. C'est le retour de la parole."},
    {sense:'écho',concept:'Réponse/Écho',description:''},
    {sense:'pluie qui revient',concept:'Divers',description:'La pluie comme retour périodique de l\'eau du ciel.'},
  ]);log(r,'rjae')

  // 5. kdr (كدر) — être trouble, être impur, verser
  r=await ins('kdr',[
    {sense:'être trouble',concept:'Turbidité/Impureté',description:"État de ce qui est mélangé d'impuretés, de ce qui n'est pas clair. La turbidité est un état intérieur permanent tant que l'impureté demeure — elle empêche de voir à travers. Le trouble est l'opposé de la limpidité."},
    {sense:'être impur',concept:'Turbidité/Impureté',description:''},
    {sense:'troubler',concept:'Turbidité/Impureté',description:''},
    {sense:'verser',concept:'Versement',description:"Acte extérieur de faire couler un liquide. Le versement est directionnel du haut vers le bas — il sort du récipient et atteint ce qui reçoit. C'est ponctuel."},
    {sense:'se précipiter (oiseau)',concept:'Divers',description:'Mouvement rapide de l\'oiseau qui fond sur sa proie.'},
  ]);log(r,'kdr')

  // 6. m-w-a (ماء) — eau
  r=await ins('m-w-a',[
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide fondamentale qui donne la vie à tout ce qui existe. L'eau est permanente dans sa nature — elle coule, purifie, nourrit et fait vivre. Elle est la base de toute création vivante, l'élément sans lequel rien ne pousse ni ne survit."},
    {sense:'liquide',concept:'Eau/Liquide',description:''},
    {sense:'sperme',concept:'Eau/Liquide',description:''},
    {sense:'éclat (du visage)',concept:'Divers',description:'La fraîcheur et la luminosité du visage — comme si l\'eau transparaissait.'},
  ]);log(r,'m-w-a')

  // 7. ḫld (خلد) — être éternel, demeurer, paradis
  r=await ins('\u1E2Bld',[
    {sense:'demeurer éternellement',concept:'Éternité/Permanence',description:"État de ce qui ne finit jamais, de ce qui reste sans limite de temps. L'éternité est l'état permanent par excellence — elle est l'absence de fin et de changement. Demeurer éternellement c'est être soustrait au passage du temps."},
    {sense:'rester pour toujours',concept:'Éternité/Permanence',description:''},
    {sense:'être immortel',concept:'Éternité/Permanence',description:''},
    {sense:'pencher vers',concept:'Inclination',description:"Acte intérieur de se sentir attiré vers quelque chose. L'inclination est un mouvement de l'âme vers ce qui attire — elle est directionnelle et peut être permanente."},
    {sense:'esprit (khild)',concept:'Divers',description:'La partie de l\'être qui demeure — l\'esprit permanent.'},
  ]);log(r,'\u1E2Bld')

  // 8. maḏ (ماذ) — particule interrogative/relative
  r=await ins('ma\u1E0F',[
    {sense:'quoi',concept:'Interrogation/Indéfini',description:"Particule qui questionne sur la nature ou l'identité d'une chose. L'interrogation ouvre un vide dans la connaissance et demande à le combler — elle est directionnelle du questionneur vers la réponse. Quoi cherche à identifier ce qui est inconnu."},
    {sense:'que',concept:'Interrogation/Indéfini',description:''},
    {sense:'ce que',concept:'Interrogation/Indéfini',description:''},
  ]);log(r,'ma\u1E0F')

  // 9. illa (ليا → إلا) — sauf, excepté
  r=await ins('illa',[
    {sense:'sauf',concept:'Exception/Restriction',description:"Particule qui exclut un élément de l'ensemble général. L'exception est un acte rationnel de séparation — elle isole le particulier du général. Sauf crée une frontière entre ce qui est inclus et ce qui ne l'est pas."},
    {sense:'excepté',concept:'Exception/Restriction',description:''},
    {sense:'si ce n\'est',concept:'Exception/Restriction',description:''},
  ]);log(r,'illa')

  // 10. stw (وقي) — protéger, prémunir, piété
  r=await ins('stw',[
    {sense:'protéger',concept:'Protection/Prémunition',description:"Acte extérieur de mettre un bouclier entre quelqu'un et un danger. La protection sort du protecteur et atteint le protégé — c'est directionnel et crée un état de sécurité. Protéger c'est empêcher le mal d'atteindre celui qu'on garde."},
    {sense:'prémunir',concept:'Protection/Prémunition',description:''},
    {sense:'se prémunir (taqwa)',concept:'Protection/Prémunition',description:''},
    {sense:'piété (crainte révérencielle)',concept:'Protection/Prémunition',description:''},
    {sense:'éviter le mal',concept:'Protection/Prémunition',description:''},
  ]);log(r,'stw')

  console.log('\n=== Batch 148 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
