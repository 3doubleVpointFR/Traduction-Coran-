const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1108, total = 2321

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

  // 1. lqd (لقد) — particule d'affirmation passée
  r=await ins('lqd',[
    {sense:'certes (passé)',concept:'Affirmation/Certitude',description:"Particule qui confirme avec certitude qu'un événement a bien eu lieu dans le passé. L'affirmation est un acte rationnel qui pose une vérité indiscutable — elle sort du locuteur et impose une certitude à l'auditeur. Ce qui est confirmé par laqad ne peut être nié."},
    {sense:'assurément',concept:'Affirmation/Certitude',description:''},
    {sense:'en vérité',concept:'Affirmation/Certitude',description:''},
  ]);log(r,'lqd')

  // 2. šrw (شرو) — variante de shry (acheter/vendre)
  r=await ins('\u0161rw',[
    {sense:'acheter',concept:'Échange/Transaction',description:"Acte extérieur de donner pour recevoir en retour. L'échange est bidirectionnel — les deux parties donnent et reçoivent. C'est ponctuel dans l'acte mais crée un transfert permanent de propriété."},
    {sense:'vendre',concept:'Échange/Transaction',description:''},
    {sense:'échanger',concept:'Échange/Transaction',description:''},
  ]);log(r,'\u0161rw')

  // 3. law () — si (irréel), si seulement
  r=await ins('law',[
    {sense:'si (irréel)',concept:'Hypothèse irréelle/Regret',description:"Particule qui ouvre un monde qui n'a pas eu lieu et ne peut plus avoir lieu. L'hypothèse irréelle est un regard vers un passé impossible — elle exprime le regret ou la leçon de ce qui aurait pu être. Le law ferme la porte du possible tout en l'imaginant."},
    {sense:'si seulement',concept:'Hypothèse irréelle/Regret',description:''},
    {sense:'même si',concept:'Concession',description:"Particule qui accorde un point tout en maintenant la conclusion. La concession reconnaît une vérité partielle sans changer le résultat final."},
  ]);log(r,'law')

  // 4. kma (كما) — comme, de même que
  r=await ins('kma',[
    {sense:'comme',concept:'Comparaison',description:"Particule composée qui établit un parallèle entre deux situations ou deux états. La comparaison crée un pont entre le connu et l'inconnu — elle est directionnelle du modèle vers ce qui est comparé. C'est un outil rationnel d'explication par analogie."},
    {sense:'de même que',concept:'Comparaison',description:''},
    {sense:'ainsi que',concept:'Comparaison',description:''},
  ]);log(r,'kma')

  // 5. tlk (تلك) — pronom démonstratif féminin lointain
  r=await ins('tlk',[
    {sense:'celle-là',concept:'Démonstratif/Distance',description:"Pronom qui désigne un féminin éloigné dans l'espace ou le temps. Le démonstratif de distance pointe vers ce qui n'est pas ici — c'est directionnel du locuteur vers le lointain. Il crée une séparation entre le proche et l'éloigné."},
    {sense:'cette (lointaine)',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'tlk')

  // 6. krb (خرب) — être ruiné, détruire, dévaster
  r=await ins('krb',[
    {sense:'être ruiné',concept:'Ruine/Destruction',description:"État de ce qui a été détruit et ne peut plus remplir sa fonction. La ruine est permanente — elle est l'état final de ce qui a été dévasté. Ce qui est en ruine témoigne d'une destruction passée dont les effets durent."},
    {sense:'détruire',concept:'Ruine/Destruction',description:''},
    {sense:'dévaster',concept:'Ruine/Destruction',description:''},
    {sense:'être désert',concept:'Ruine/Destruction',description:''},
    {sense:'ruines',concept:'Ruine/Destruction',description:''},
  ]);log(r,'krb')

  // 7. khzy (خزي) — être humilié, être déshonoré, honte
  r=await ins('khzy',[
    {sense:'être humilié',concept:'Humiliation/Honte',description:"État de celui qui est rabaissé publiquement et perd sa dignité aux yeux des autres. L'humiliation vient de l'extérieur et atteint celui qui la subit — c'est directionnel et dégradant. La honte est permanente dans la mémoire de celui qui l'a subie."},
    {sense:'être déshonoré',concept:'Humiliation/Honte',description:''},
    {sense:'honte',concept:'Humiliation/Honte',description:''},
    {sense:'châtiment humiliant',concept:'Humiliation/Honte',description:''},
    {sense:'avoir honte',concept:'Humiliation/Honte',description:''},
  ]);log(r,'khzy')

  // 8. mm (مم) — de quoi, particule interrogative
  r=await ins('mm',[
    {sense:'de quoi',concept:'Interrogation/Provenance',description:"Particule composée qui questionne sur l'origine ou la matière de quelque chose. L'interrogation de provenance cherche d'où vient la chose — elle est directionnelle vers la source. De quoi demande la nature profonde de ce qui est questionné."},
    {sense:'à partir de quoi',concept:'Interrogation/Provenance',description:''},
  ]);log(r,'mm')

  // 9. r d w (رضو) — doublon de rdw (satisfaction)
  r=await ins('r d w',[
    {sense:'être satisfait',concept:'Satisfaction/Agrément',description:"État intérieur de contentement et d'acceptation face à ce qui est. La satisfaction est un jugement rationnel d'approbation — elle reste dans celui qui la ressent et peut se manifester vers l'extérieur. C'est un état permanent tant que la cause demeure."},
    {sense:'agréer',concept:'Satisfaction/Agrément',description:''},
    {sense:'approuver',concept:'Satisfaction/Agrément',description:''},
    {sense:'consentir',concept:'Satisfaction/Agrément',description:''},
    {sense:'choisir',concept:'Choix/Préférence',description:"Acte rationnel de sélectionner ce que l'on préfère parmi plusieurs options. Le choix est directionnel — il part de celui qui choisit vers l'objet choisi."},
  ]);log(r,'r d w')

  // 10. e n k (عنك) — araignée, toile
  r=await ins('e n k',[
    {sense:'araignée',concept:'Araignée/Fragilité',description:"Petit animal qui tisse une toile fine et fragile pour piéger ses proies. L'araignée est le symbole de la fragilité de ce qui semble solide — sa maison est la plus fragile des maisons. La toile est permanente dans son intention mais fragile dans sa structure."},
    {sense:'toile d\'araignée',concept:'Araignée/Fragilité',description:''},
    {sense:'tisser',concept:'Araignée/Fragilité',description:''},
  ]);log(r,'e n k')

  console.log('\n=== Batch 152 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
