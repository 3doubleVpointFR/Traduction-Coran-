const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const Database = require('better-sqlite3')
const path = require('path')
const ldb = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))
let done = 207, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts ('+r.concepts.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // khsr (خسر) — perdre, être en perte, diminution
  r=await ins('khsr',[
    {sense:'perdre',concept:'Perte/Diminution',description:"Acte de ne plus avoir ce qu'on avait. La perte est une diminution qui affecte celui qui perd — c'est un mouvement négatif, une sortie sans retour."},
    {sense:'subir une perte',concept:'Perte/Diminution',description:"État de celui qui a moins qu'avant. La perte subie est passive — elle arrive à celui qui la subit."},
    {sense:'diminuer',concept:'Perte/Diminution',description:"Acte de réduire la quantité. La diminution est une perte progressive et mesurable."},
    {sense:'être trompé',concept:'Tromperie/Erreur',description:"État de celui qui a été induit en erreur. Être trompé c'est perdre par la faute d'autrui."},
    {sense:'être dans l\'erreur',concept:'Tromperie/Erreur',description:"État d'égarement qui mène à la perte. L'erreur est une perte de direction."},
    {sense:'faire périr',concept:'Destruction',description:"Acte de causer la perte totale de quelqu'un. Faire périr est la perte ultime — la destruction complète."},
    {sense:'châtiment du péché',concept:'Destruction',description:"Conséquence de l'erreur. Le châtiment est la perte qui résulte de la faute."},
  ]);log(r,'khsr')

  // dhly (ذلي → ذل) — être humble, humilié, soumis
  r=await ins('dhly',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État de celui qui reconnaît sa petitesse. L'humilité est intérieure — elle reste chez celui qui l'éprouve."},
    {sense:'être humilié',concept:'Humilité/Soumission',description:"État de celui qui est rabaissé. L'humiliation vient de l'extérieur et atteint l'intérieur."},
    {sense:'être soumis',concept:'Humilité/Soumission',description:"État de dépendance volontaire ou forcée. La soumission est un abaissement devant plus grand que soi."},
    {sense:'docile',concept:'Humilité/Soumission',description:"Qualité de celui qui se laisse guider facilement. La docilité est une soumission positive."},
    {sense:'s\'abaisser',concept:'Humilité/Soumission',description:"Acte volontaire de se mettre plus bas. L'abaissement est un mouvement vers le bas."},
    {sense:'méprisé',concept:'Divers',description:"État de celui qui est regardé de haut. Le mépris est le regard de l'autre qui rabaisse."},
  ]);log(r,'dhly')

  // khlaq — variante de kh l q, skip si doublon
  // Vérifions si c'est un doublon ou une entrée distincte
  r=await ins('khlaq',[
    {sense:'créer',concept:'Création/Formation',description:"Acte de faire exister ce qui n'existait pas. La création est l'acte premier qui donne l'être."},
    {sense:'façonner',concept:'Création/Formation',description:"Acte de donner forme à la matière. Le façonnage est une création qui modèle."},
    {sense:'nature innée',concept:'Nature/Caractère',description:"Ce qui est créé en l'être dès l'origine. La nature est le résultat de la création."},
    {sense:'caractère',concept:'Nature/Caractère',description:"Disposition morale innée. Le caractère est la nature intérieure de l'être."},
    {sense:'mesurer',concept:'Mesure/Proportion',description:"Déterminer les proportions avant de créer. La mesure précède la création."},
    {sense:'lisser',concept:'Divers',description:"Rendre une surface uniforme. Sens concret de finition."},
  ]);log(r,'khlaq')

  // stwy (سوي) — être égal, droit, niveau
  r=await ins('stwy',[
    {sense:'être égal',concept:'Égalité/Équilibre',description:"État de parité entre deux choses. L'égalité est un équilibre parfait sans différence."},
    {sense:'être droit',concept:'Rectitude/Droiture',description:"État de ce qui ne dévie pas. La droiture est l'absence de courbe ou de détour."},
    {sense:'être de niveau',concept:'Égalité/Équilibre',description:"État de surface plane et uniforme. Le niveau est une égalité spatiale."},
    {sense:'s\'établir fermement',concept:'Établissement',description:"Acte de se fixer solidement en place. L'établissement est une stabilisation."},
    {sense:'monter sur',concept:'Établissement',description:"Acte de s'élever et de se poser sur quelque chose. Monter c'est s'établir en hauteur."},
    {sense:'achever',concept:'Accomplissement',description:"Acte de mener à terme. L'achèvement est l'égalisation finale — tout est complet."},
    {sense:'maturité',concept:'Accomplissement',description:"État de développement complet. La maturité est l'achèvement de la croissance."},
  ]);log(r,'stwy')

  // ana (أنى) — quand, comment, d'où
  r=await ins('ana',[
    {sense:'quand',concept:'Temps/Interrogation',description:"Interrogation sur le moment. Le quand cherche à situer dans le temps."},
    {sense:'comment',concept:'Manière/Interrogation',description:"Interrogation sur la manière. Le comment cherche le mode d'être ou d'action."},
    {sense:'d\'où',concept:'Origine/Interrogation',description:"Interrogation sur l'origine. Le d'où cherche le point de départ."},
    {sense:'où que ce soit',concept:'Lieu/Généralité',description:"Indication de lieu indéterminé. Partout sans distinction."},
    {sense:'mûrir',concept:'Maturité',description:"Atteindre le moment de la plénitude. Mûrir c'est arriver au bon moment."},
  ]);log(r,'ana')

  // xlf (خلف) — être derrière, succéder, remplacer
  r=await ins('xlf',[
    {sense:'être derrière',concept:'Position/Arrière',description:"État de ce qui vient après dans l'espace. L'arrière est la position opposée à l'avant."},
    {sense:'succéder',concept:'Succession/Remplacement',description:"Acte de venir après quelqu'un. La succession est un mouvement dans le temps qui suit."},
    {sense:'remplacer',concept:'Succession/Remplacement',description:"Acte de prendre la place d'un autre. Le remplacement est une succession active."},
    {sense:'laisser derrière',concept:'Position/Arrière',description:"Acte de ne pas emmener avec soi. Laisser derrière c'est avancer seul."},
    {sense:'différer',concept:'Différence/Opposition',description:"État de ne pas être semblable. Différer c'est s'opposer à ce qui est."},
    {sense:'contredire',concept:'Différence/Opposition',description:"Acte de dire le contraire. La contradiction est une différence de parole."},
    {sense:'manquer à sa promesse',concept:'Différence/Opposition',description:"Acte de ne pas tenir ce qu'on a dit. Manquer c'est différer de sa parole."},
    {sense:'successeur',concept:'Succession/Remplacement',description:"Celui qui vient après. Le successeur est le résultat de la succession."},
    {sense:'califat',concept:'Succession/Remplacement',description:"Fonction de celui qui succède. Le califat est la succession au pouvoir."},
  ]);log(r,'xlf')

  // man (من) — qui, de, parmi
  r=await ins('man',[
    {sense:'qui',concept:'Interrogation/Relation',description:"Pronom interrogatif pour les personnes. Le qui cherche l'identité."},
    {sense:'celui qui',concept:'Interrogation/Relation',description:"Pronom relatif désignant une personne. Celui qui établit une relation."},
    {sense:'de',concept:'Origine/Provenance',description:"Préposition d'origine. Le de indique le point de départ."},
    {sense:'parmi',concept:'Partie/Ensemble',description:"Préposition partitive. Parmi indique l'extraction d'un ensemble."},
    {sense:'quelqu\'un',concept:'Indéfini',description:"Pronom indéfini désignant une personne non spécifiée."},
  ]);log(r,'man')

  // sfk (سفك) — verser, répandre (sang)
  r=await ins('sfk',[
    {sense:'verser',concept:'Écoulement/Effusion',description:"Acte de faire couler un liquide. Verser est un mouvement du haut vers le bas."},
    {sense:'répandre',concept:'Écoulement/Effusion',description:"Acte de faire sortir en dispersant. Répandre étend ce qui était contenu."},
    {sense:'faire couler le sang',concept:'Violence/Sang',description:"Acte de blesser jusqu'au sang. Le sang qui coule est le signe de la violence."},
    {sense:'effusion de sang',concept:'Violence/Sang',description:"Résultat de l'acte violent. L'effusion est le sang répandu."},
    {sense:'être éloquent',concept:'Divers',description:"Parole qui coule abondamment. L'éloquence est une effusion de mots."},
  ]);log(r,'sfk')

  // dmw (دمو → دم) — sang, parenté
  r=await ins('dmw',[
    {sense:'sang',concept:'Sang/Vie',description:"Liquide vital qui circule dans le corps. Le sang est le support de la vie."},
    {sense:'saigner',concept:'Sang/Vie',description:"Acte de perdre du sang. Saigner c'est voir la vie s'écouler."},
    {sense:'tacher de sang',concept:'Sang/Vie',description:"Acte de marquer par le sang. La tache de sang est une trace de vie ou de mort."},
    {sense:'parenté par le sang',concept:'Parenté/Lignée',description:"Lien familial par l'ascendance commune. Le sang unit les générations."},
    {sense:'prix du sang',concept:'Compensation',description:"Ce qui est dû pour le sang versé. Le prix du sang est la compensation de la vie."},
  ]);log(r,'dmw')

  // sbh (سبح) — nager, glorifier, flotter
  r=await ins('sbh',[
    {sense:'nager',concept:'Mouvement/Flottement',description:"Acte de se déplacer dans l'eau. Nager est un mouvement fluide et libre."},
    {sense:'flotter',concept:'Mouvement/Flottement',description:"État de ce qui reste à la surface. Flotter c'est être porté sans couler."},
    {sense:'voyager',concept:'Mouvement/Flottement',description:"Acte de se déplacer sur une longue distance. Voyager c'est nager dans l'espace."},
    {sense:'courir',concept:'Mouvement/Flottement',description:"Acte de se déplacer rapidement. Courir c'est un mouvement fluide sur terre."},
    {sense:'glorifier',concept:'Glorification/Louange',description:"Acte de proclamer la grandeur de Dieu. Glorifier c'est élever par la parole."},
    {sense:'louer',concept:'Glorification/Louange',description:"Acte de dire le bien de quelqu'un. Louer c'est reconnaître la valeur."},
    {sense:'prier',concept:'Glorification/Louange',description:"Acte de s'adresser à Dieu. La prière est une glorification ritualisée."},
    {sense:'chapelet',concept:'Divers',description:"Objet pour compter les glorifications. Le chapelet est l'outil de la louange."},
  ]);log(r,'sbh')

  console.log('\n=== Batch 23 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
