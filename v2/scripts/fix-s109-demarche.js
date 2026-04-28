const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const V = { 1: 6208, 2: 6209, 3: 6210, 4: 6211, 5: 6212, 6: 6213 }

const explanations = {
  1: `§DEMARCHE§

Le mot **qul** est un verbe à l'impératif (une forme qui donne un ordre). C'est Dieu qui ordonne au Prophète de prononcer les mots qui suivent. L'impératif indique que ce discours n'est pas spontané — c'est un message ordonné, chaque mot est voulu.

Le vocatif **ya ayyuha** (ô vous) interpelle directement les destinataires. En arabe, quand on utilise ya ayyuha suivi d'un nom avec l'article al-, ça s'adresse à un groupe entier identifié. C'est un appel public, pas un murmure.

Le mot **al-kafirun** est un participe actif pluriel (une forme qui dit que les personnes FONT l'action activement et en permanence) avec l'article al- (le/les, qui identifie un groupe connu). Ce ne sont pas des gens qui ont rejeté une fois — c'est leur identité. Le participe actif dit : leur rejet est continu, c'est ce qu'ils sont. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-f-r a pour sens physique premier « couvrir ». Le sens a évolué vers « nier, rejeter, être ingrat envers un bienfait ».

§JUSTIFICATION§

**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est l'impératif direct en français courant qui capture l'ordre de prononcer des mots. L'alternative « parle » est écartée car « parle » est plus vague — on parle en général, on dit des mots précis. L'alternative « déclare » est écartée car c'est du registre officiel, pas du français courant.

**ceux qui rejettent** — Le sens retenu est « Rejet/Ingratitude ». L'expression « ceux qui rejettent » est choisie car elle décrit l'acte philosophique (le rejet actif et continu de la vérité) sans connotation religieuse. L'alternative « mécréants » est écartée car c'est du vocabulaire religieux chargé qui porte des siècles de jugement moral — le mot arabe décrit un acte (rejeter), pas un statut (mécréant). L'alternative « incroyants » est écartée car « incroyant » suggère un simple manque de croyance passif, alors que le participe actif arabe indique un rejet actif.`,

  2: `§DEMARCHE§

La particule **la** est une négation (ne...pas). Elle nie l'action qui suit.

Le verbe **a'budu** est à l'inaccompli (une forme qui dit que l'action est en cours ou habituelle) à la première personne du singulier : « je fais habituellement ». Combiné avec la négation : « je n'adore pas — ni maintenant, ni d'habitude ».

Le pronom relatif **ma** (ce que) introduit l'objet : ce que les rejeteurs adorent. Le ma ne précise pas ce que c'est — il laisse la question ouverte.

Le verbe **ta'budun** est le même verbe mais à la deuxième personne du pluriel : « ce que vous adorez habituellement ». L'inaccompli pour les deux parties montre que la séparation est permanente — ce n'est pas un désaccord ponctuel.

§JUSTIFICATION§

**adorer** — Le sens retenu est « Adoration/Dévotion ». Le mot « adorer » est choisi car il capture l'engagement volontaire et total envers ce que l'on considère comme le plus grand. L'alternative « servir » est écartée car « servir » implique une contrainte extérieure (on sert un maître qui nous commande), alors que « adorer » est un acte intérieur et volontaire qui part du cœur. L'alternative « vénérer » est écartée car c'est du registre littéraire, pas du français courant.`,

  3: `§DEMARCHE§

La conjonction **wa** (et) lie ce verset au précédent. La particule **la** nie ce qui suit.

Le pronom **antum** (vous) désigne les rejeteurs — le verset change de perspective. Après avoir parlé du Prophète (verset 2), c'est maintenant les rejeteurs qui sont le sujet.

Le mot **aabidun** est un participe actif pluriel (une forme qui dit que c'est ce que les personnes SONT, pas seulement ce qu'elles font ponctuellement). « Adorateurs » — c'est une identité. La nuance avec le verset 2 est importante : le verset 2 nie l'acte (« je n'adore pas ») avec un verbe, le verset 3 nie l'identité (« vous n'êtes pas des adorateurs ») avec un participe actif.

Le pronom relatif **ma** (ce que) et le verbe **a'budu** (j'adore, inaccompli première personne) introduisent l'objet d'adoration du Prophète.

§JUSTIFICATION§

**adorateurs** — Le sens retenu est « Adoration/Dévotion ». Le mot « adorateurs » est la forme nominale de « adorer » qui capture l'identité de celui qui adore. L'alternative « serviteurs » est écartée car le verset parle d'identité religieuse (ce qu'on est dans son rapport au divin), pas de statut social (esclave/serviteur). L'alternative « dévots » est écartée car c'est du registre religieux chrétien.`,

  4: `§DEMARCHE§

La structure est similaire aux versets précédents. La conjonction **wa** et la négation **la** ouvrent le verset.

Le pronom **ana** (moi) revient au Prophète — après le « vous » du verset 3, c'est le « moi » qui reprend la parole.

Le mot **aabid** est un participe actif singulier indéfini (sans l'article al-). L'absence d'article rend le sens plus large : « un adorateur » — n'importe quel adorateur, même hypothétiquement.

Le verbe **abadtum** change de temps : c'est un accompli (une forme qui dit que l'action a eu lieu dans le passé comme un fait achevé) à la deuxième personne du pluriel. « Ce que vous avez adoré ». C'est un changement important : le verset 2 parlait du présent (je n'adore pas ce que vous adorez maintenant), le verset 4 ajoute le passé (je ne suis pas un adorateur de ce que vous avez adoré avant). La séparation couvre tous les temps.

§JUSTIFICATION§

**adorateur** — Le sens retenu est « Adoration/Dévotion ». Le mot « adorateur » au singulier capture l'identité individuelle du Prophète. Mêmes alternatives écartées que pour le verset 3.

**vous avez adoré** — Le passage à l'accompli marque un fait passé et achevé. Le mot « adoré » au passé composé français rend bien cette idée d'un acte qui a eu lieu et qui est maintenant révolu. L'alternative « vous adoriez » (imparfait) est écartée car l'imparfait français suggère une habitude passée qui pourrait continuer, alors que l'accompli arabe est définitif.`,

  5: `§DEMARCHE§

Le verset 5 reprend mot pour mot le verset 3. Cette répétition n'est pas un accident — elle ferme un cycle. Après le verset 2 (le Prophète ne fait pas ce qu'ils font, au présent) et le verset 4 (le Prophète n'est pas un adorateur de ce qu'ils ont fait, au passé), les versets 3 et 5 confirment symétriquement que les rejeteurs ne sont pas des adorateurs de ce que le Prophète adore.

La structure de la sourate forme un chiasme (un croisement en miroir) :
- v2 : JE n'adore pas ce que VOUS adorez (présent)
- v3 : VOUS n'êtes pas adorateurs de ce que J'adore
- v4 : JE ne suis pas adorateur de ce que VOUS avez adoré (passé)
- v5 : VOUS n'êtes pas adorateurs de ce que J'adore

Cette structure insiste et scelle la séparation — elle ne laisse aucune échappatoire.

§JUSTIFICATION§

Mêmes justifications que le verset 3 — les mots sont identiques.`,

  6: `§DEMARCHE§

Le mot **lakum** (à vous) est une préposition avec un pronom suffixe (la particule li = à/pour, le suffixe kum = vous). C'est une attribution : quelque chose vous revient.

Le mot **dinukum** est un nom avec un pronom possessif (din = voie, kum = votre). C'est une idafa pronominale (quand un nom est rattaché à un pronom pour dire que la chose lui appartient). « Votre voie » — elle vous appartient, elle est à vous.

La conjonction **wa** (et) crée un parallélisme avec la deuxième partie.

Le mot **liya** (à moi) est la même construction que lakum mais avec le pronom de la première personne. Le mot **dini** (ma voie) est le même nom avec mon pronom possessif.

Le parallélisme lakum dinukum / waliya dini est parfait : à vous le vôtre, à moi le mien. La symétrie est le sceau final de la séparation — chacun a le sien, et c'est définitif.

Ce verset monte en généralité : les versets 2-5 parlaient de l'adoration (l'acte spécifique), le verset 6 parle de la voie entière (le système global). C'est comme dire : non seulement nos actes d'adoration sont différents, mais nos voies de vie entières sont différentes.

§JUSTIFICATION§

**voie** — Le sens retenu est « Religion/Système ». Le mot « voie » est choisi car il capture le système complet de croyances et de pratiques qui définit l'identité de la personne. L'alternative « religion » est écartée car « religion » évoque en français une institution organisée avec clergé, temples et dogmes — un concept qui vient de l'histoire chrétienne. Le din arabe est plus large : c'est la voie de vie, le chemin qu'on suit dans tous les aspects de l'existence. L'alternative « croyance » est écartée car la croyance est un état intérieur, alors que le din englobe aussi les pratiques et les actes. L'alternative « culte » est écartée car le culte est seulement l'aspect rituel, pas l'ensemble du système de vie.`
}

async function run() {
  for (const [vnum, expl] of Object.entries(explanations)) {
    const vid = V[parseInt(vnum)]
    const {error} = await db.from('verse_analyses').update({
      translation_explanation: expl
    }).eq('verse_id', vid)
    if (error) console.log('ERR v' + vnum + ':', error.message)
    else console.log('✅ verset ' + vnum + ' — démarche mise à jour')
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
