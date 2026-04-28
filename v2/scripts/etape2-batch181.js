const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1398, total = 2321

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

  // 1. s b l (سبل) — chemin, voie, cause, épi
  r=await ins('s b l',[
    {sense:'chemin',concept:'Voie/Chemin',description:"La route que l'on emprunte pour aller quelque part. Le chemin est permanent dans sa trace — il guide celui qui le suit vers une destination. Le sabil est la voie par laquelle on atteint un but, qu'il soit physique ou spirituel."},
    {sense:'voie',concept:'Voie/Chemin',description:''},
    {sense:'cause (fi sabili)',concept:'Voie/Chemin',description:''},
    {sense:'épi pendant',concept:'Divers',description:'L\'épi qui pend de sa tige — lié au sens de ce qui tombe le long d\'un chemin.'},
  ]);log(r,'s b l')

  // 2. t w e (طوع) — variante de twe (obéir)
  r=await ins('t w e',[
    {sense:'obéir',concept:'Obéissance/Soumission volontaire',description:"Acte de se conformer à un ordre par choix. L'obéissance volontaire sort de celui qui obéit et répond au commandant — c'est directionnel et rationnel. C'est un acte de la volonté qui se soumet librement."},
    {sense:'se soumettre',concept:'Obéissance/Soumission volontaire',description:''},
    {sense:'être capable',concept:'Capacité',description:"État de celui qui a les moyens d'accomplir une chose."},
  ]);log(r,'t w e')

  // 3. d r b (ضرب) — variante de drb (frapper)
  r=await ins('d r b',[
    {sense:'frapper',concept:'Frappe/Coup',description:"Acte extérieur de donner un coup. La frappe sort de celui qui frappe et atteint ce qui est frappé — c'est directionnel, soudain et violent."},
    {sense:'donner un exemple',concept:'Établissement/Institution',description:"Proposer une illustration pour faire comprendre. L'exemple est une frappe sur l'esprit — il marque et éclaire."},
    {sense:'établir',concept:'Établissement/Institution',description:''},
    {sense:'voyager',concept:'Déplacement',description:"Se déplacer en frappant la terre de ses pieds."},
  ]);log(r,'d r b')

  // 4. a r d (أرض) — terre, sol, pays
  r=await ins('a r d',[
    {sense:'terre',concept:'Terre/Sol',description:"La surface solide sur laquelle marchent les êtres vivants. La terre est permanente et fondamentale — elle porte tout ce qui existe et nourrit ce qui y pousse. La terre est l'assise de la vie matérielle, le plancher de l'existence."},
    {sense:'sol',concept:'Terre/Sol',description:''},
    {sense:'pays',concept:'Terre/Sol',description:''},
    {sense:'monde d\'ici-bas',concept:'Terre/Sol',description:''},
  ]);log(r,'a r d')

  // 5. h s b (حسب) — compter, penser, suffire
  r=await ins('h s b',[
    {sense:'compter',concept:'Calcul/Estimation',description:"Acte rationnel de dénombrer et d'évaluer. Le calcul est un acte de l'esprit qui mesure et juge — il est directionnel de l'esprit vers la chose comptée. Compter c'est mettre de l'ordre dans la quantité."},
    {sense:'penser',concept:'Calcul/Estimation',description:''},
    {sense:'estimer',concept:'Calcul/Estimation',description:''},
    {sense:'suffire (hasb)',concept:'Suffisance',description:"État de ce qui comble entièrement le besoin. Hasbunallah — Dieu nous suffit. La suffisance est permanente quand la source est infinie."},
    {sense:'rendre des comptes',concept:'Divers',description:'Le jugement comme acte de comptabilité des actes.'},
  ]);log(r,'h s b')

  // 6. j h l (جهل) — ignorer, être ignorant
  r=await ins('j h l',[
    {sense:'ignorer',concept:'Ignorance/Méconnaissance',description:"État de celui qui ne sait pas ce qu'il devrait savoir. L'ignorance est intérieure et permanente tant que le savoir n'est pas acquis — elle est l'absence de connaissance. L'ignorant agit sans comprendre les conséquences de ses actes."},
    {sense:'être ignorant',concept:'Ignorance/Méconnaissance',description:''},
    {sense:'agir par ignorance',concept:'Ignorance/Méconnaissance',description:''},
    {sense:'être impétueux',concept:'Divers',description:'L\'impétuosité comme forme d\'ignorance — agir sans réfléchir.'},
  ]);log(r,'j h l')

  // 7. gh n y (غني) — variante de ghny (riche, skip probable)
  r=await ins('gh n y',[
    {sense:'être riche',concept:'Richesse/Autosuffisance',description:"État de celui qui possède suffisamment pour ne manquer de rien. La richesse est permanente tant que les moyens demeurent — le riche n'a besoin de personne."},
    {sense:'se passer de',concept:'Richesse/Autosuffisance',description:''},
    {sense:'enrichir',concept:'Richesse/Autosuffisance',description:''},
  ]);log(r,'gh n y')

  // 8. e f f (عفف) — être chaste, s'abstenir, pudeur
  r=await ins('e f f',[
    {sense:'être chaste',concept:'Chasteté/Retenue',description:"État intérieur de celui qui s'abstient de ce qui est interdit ou indécent par dignité personnelle. La chasteté est permanente chez celui qui la cultive — elle est une retenue volontaire qui protège la dignité. Le chaste est celui qui maîtrise ses désirs par la force de sa volonté."},
    {sense:'s\'abstenir',concept:'Chasteté/Retenue',description:''},
    {sense:'pudeur',concept:'Chasteté/Retenue',description:''},
    {sense:'être digne',concept:'Chasteté/Retenue',description:''},
  ]);log(r,'e f f')

  // 9. e r f (عرف) — connaître, reconnaître, coutume, parfum
  r=await ins('e r f',[
    {sense:'connaître',concept:'Connaissance/Reconnaissance',description:"Acte intérieur d'identifier et de comprendre ce qui se présente à l'esprit. La connaissance est permanente une fois acquise — elle reste dans celui qui sait. Reconnaître c'est re-connaître, retrouver dans sa mémoire ce qu'on avait déjà appris."},
    {sense:'reconnaître',concept:'Connaissance/Reconnaissance',description:''},
    {sense:'coutume (urf)',concept:'Convention/Usage',description:"Ce qui est connu et accepté par tous comme la norme. La coutume est permanente dans la communauté — elle est la règle non écrite que tous suivent."},
    {sense:'le bien reconnu (maaruf)',concept:'Convention/Usage',description:''},
    {sense:'parfum',concept:'Divers',description:'Ce qui est connu par l\'odeur — sens de reconnaissance olfactive.'},
  ]);log(r,'e r f')

  // 10. s w m (سوم) — faire paître, lancer, marquer
  r=await ins('s w m',[
    {sense:'faire paître',concept:'Pâturage/Parcours',description:"Acte de laisser les bêtes aller librement dans les champs pour se nourrir. Le pâturage est un mouvement libre et permanent — les bêtes vont où l'herbe les mène. C'est un parcours sans destination fixe."},
    {sense:'lancer (une attaque)',concept:'Envoi/Direction',description:"Acte d'envoyer quelqu'un ou quelque chose vers une cible. Le lancement est directionnel — il sort de la source et vise la cible."},
    {sense:'marquer',concept:'Divers',description:'Mettre un signe distinctif sur quelque chose.'},
  ]);log(r,'s w m')

  console.log('\n=== Batch 181 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
