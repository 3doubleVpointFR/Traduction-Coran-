const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1088, total = 2321

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

  // 1. qṯa (قثء) — concombre, cucurbitacée
  r=await ins('q\u1E6Fa',[
    {sense:'concombre',concept:'Légume/Plante',description:"Plante potagère rampante qui produit un fruit allongé et aqueux. Le concombre est un aliment terrestre, simple et abondant — il pousse au sol et se récolte facilement. C'est un des aliments qu'Israël réclamait à la place de la manne céleste."},
    {sense:'cucurbitacée',concept:'Légume/Plante',description:''},
  ]);log(r,'q\u1E6Fa')

  // 2. ḏll (ذلل) — être humble, soumis, docile, méprisé
  r=await ins('\u1E0Fll',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État intérieur de celui qui reconnaît sa petitesse et accepte d'être en bas. L'humilité reste dans celui qui l'éprouve — c'est un abaissement volontaire de soi. Elle est permanente comme disposition et peut être positive (soumission à Dieu) ou négative (humiliation)."},
    {sense:'être soumis',concept:'Humilité/Soumission',description:''},
    {sense:'être docile',concept:'Humilité/Soumission',description:''},
    {sense:'s\'abaisser',concept:'Humilité/Soumission',description:''},
    {sense:'être méprisé',concept:'Avilissement',description:"État de celui qui est rabaissé par le regard des autres. L'avilissement vient de l'extérieur et atteint celui qui est méprisé — c'est directionnel et dégradant. C'est l'humilité imposée, non choisie."},
    {sense:'rendre facile',concept:'Divers',description:'Faciliter un chemin — le rendre doux et praticable.'},
  ]);log(r,'\u1E0Fll')

  // 3. msr (مصر) — Égypte, ville, frontière, traire
  r=await ins('msr',[
    {sense:'Égypte',concept:'Lieu/Civilisation',description:"Le pays du Nil, terre de civilisation ancienne et lieu majeur de l'histoire prophétique. L'Égypte est un lieu permanent dans la géographie et dans la mémoire — elle est le cadre de l'exode et de l'oppression de Pharaon."},
    {sense:'grande ville',concept:'Lieu/Civilisation',description:''},
    {sense:'frontière',concept:'Limite/Séparation',description:"La ligne qui sépare deux territoires et définit ce qui appartient à chacun. La frontière est permanente — elle délimite et distingue. Tracer une frontière c'est séparer et organiser l'espace."},
    {sense:'traire',concept:'Divers',description:'Extraire le lait — sens concret de tirer un liquide.'},
  ]);log(r,'msr')

  // 4. ḏlk (ذلك) — pronom démonstratif lointain
  r=await ins('\u1E0Flk',[
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom qui désigne ce qui est éloigné dans l'espace, le temps ou le rang. Le démonstratif de distance pointe vers ce qui n'est pas ici — c'est directionnel du locuteur vers le lointain. Il crée une séparation entre le proche et l'éloigné."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
    {sense:'ce (lointain)',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'\u1E0Flk')

  // 5. ans (أنس) — être familier, être sociable, humain
  r=await ins('ans',[
    {sense:'être familier',concept:'Familiarité/Sociabilité',description:"État intérieur de confort et d'aisance en présence de l'autre, l'opposé de la peur et de la sauvagerie. La familiarité est permanente entre ceux qui se connaissent — elle crée un lien de confiance et de proximité. L'humain est l'être sociable par nature."},
    {sense:'être sociable',concept:'Familiarité/Sociabilité',description:''},
    {sense:'être humain',concept:'Familiarité/Sociabilité',description:''},
    {sense:'humains (ins)',concept:'Familiarité/Sociabilité',description:''},
    {sense:'percevoir',concept:'Perception',description:"Acte de remarquer quelque chose par les sens. La perception est le premier contact avec le monde — elle est directionnelle de l'extérieur vers celui qui perçoit."},
    {sense:'voir de loin',concept:'Perception',description:''},
  ]);log(r,'ans')

  // 6. anw (ءنو) — mûrir, approcher du temps
  r=await ins('anw',[
    {sense:'mûrir (fruit)',concept:'Maturité/Temps',description:"État de ce qui a atteint sa plénitude après un processus de développement. La maturité est un état permanent une fois atteint — le fruit mûr est prêt à être cueilli. Le temps de la maturité est celui où la chose est à son meilleur."},
    {sense:'arriver à maturité',concept:'Maturité/Temps',description:''},
    {sense:'approcher (le moment)',concept:'Maturité/Temps',description:''},
  ]);log(r,'anw')

  // 7. kld (خلد) — demeurer éternellement (variante de ḫld)
  r=await ins('kld',[
    {sense:'demeurer éternellement',concept:'Éternité/Permanence',description:"État de ce qui ne finit jamais et ne change pas. L'éternité est l'absence totale de fin — c'est l'état permanent absolu. Demeurer éternellement c'est être soustrait au temps et à la mort."},
    {sense:'rester pour toujours',concept:'Éternité/Permanence',description:''},
    {sense:'être immortel',concept:'Éternité/Permanence',description:''},
    {sense:'pencher vers',concept:'Inclination',description:"Mouvement intérieur de l'âme vers ce qui attire. L'inclination est directionnelle et peut devenir permanente si elle se fixe."},
  ]);log(r,'kld')

  // 8. lyy (ليي → لي) — pronom prépositionnel
  r=await ins('lyy',[
    {sense:'à moi',concept:'Appartenance/Destination',description:"Préposition et pronom qui indiquent que quelque chose est destiné au locuteur ou lui appartient. L'appartenance est un lien permanent entre le possesseur et le possédé — elle est directionnelle vers celui qui reçoit."},
    {sense:'pour moi',concept:'Appartenance/Destination',description:''},
  ]);log(r,'lyy')

  // 9. bsa (بسأ) — être misérable, désespérer
  r=await ins('bsa',[
    {sense:'être misérable',concept:'Misère/Détresse',description:"État de dénuement et de souffrance extrême. La misère est un état permanent qui écrase celui qui la vit — elle est intérieure dans la souffrance et extérieure dans la privation. Le misérable est celui que tout a abandonné."},
    {sense:'être malheureux',concept:'Misère/Détresse',description:''},
    {sense:'mal',concept:'Misère/Détresse',description:''},
    {sense:'combien terrible',concept:'Divers',description:'Expression d\'exclamation devant le malheur.'},
  ]);log(r,'bsa')

  // 10. shry (شري) — acheter, vendre, échanger
  r=await ins('shry',[
    {sense:'acheter',concept:'Échange/Transaction',description:"Acte extérieur de donner quelque chose pour obtenir autre chose en retour. L'échange est bidirectionnel — il sort de l'acheteur et de la marchandise en même temps. C'est ponctuel dans l'acte mais crée un transfert permanent de propriété."},
    {sense:'vendre',concept:'Échange/Transaction',description:''},
    {sense:'échanger',concept:'Échange/Transaction',description:''},
    {sense:'se vendre (sacrifier sa vie)',concept:'Sacrifice/Don de soi',description:"Acte de donner sa propre personne en échange de quelque chose de plus grand. Le sacrifice de soi sort de celui qui se donne — c'est directionnel et irréversible. Celui qui se vend s'échange lui-même contre une cause."},
  ]);log(r,'shry')

  console.log('\n=== Batch 150 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
