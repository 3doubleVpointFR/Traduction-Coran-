const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  const V4 = 6229

  // Fix nfv axes
  const {data: nfvVwa} = await db.from('verse_word_analyses').select('id,analysis_axes').eq('verse_id', V4).eq('word_key','nfv').single()
  if (nfvVwa) {
    const axes = {...nfvVwa.analysis_axes}
    const c = axes.concepts['Souffle/Crachat']
    c.proof_ctx = "Le sens retenu est « Souffle/Crachat ». Le mot an-naffathat est un participe actif féminin pluriel défini avec al- — « les souffleuses ». Le souffle est un acte directionnel : il sort de la bouche et atteint ce qui est visé. Dans ce verset, le souffle est dirigé vers les nœuds (les liens). Le Lane's donne pour nafatha : souffler, projeter un souffle léger. Le souffle peut être une parole ou un murmure — projeter des mots vers quelque chose. Les souffleuses sont donc celles qui projettent des paroles vers les liens entre les gens pour les défaire."
    c.axe1_verset = "Le mot an-naffathat est rattaché à sharri (le mal de) et complété par fi al-uqad (dans les nœuds/liens). Le champ lexical est celui de la parole destructrice dirigée vers les relations humaines. Le souffle est le véhicule — la parole ou le murmure qui s'introduit dans les liens pour les défaire. Le mal ici est un acte de parole dirigé vers ce qui unit les gens."
    c.axe2_voisins = "Après le mal de la création (v2) et le mal de l'obscurité (v3), le verset 4 nomme le mal de personnes qui agissent par la parole pour détruire les liens. La progression va du naturel (création, obscurité) vers l'humain (paroles destructrices, envie au verset 5). Les versets 4 et 5 traitent tous deux de maux qui viennent des autres personnes."
    c.axe3_sourate = "La sourate couvre tous les types de mal : naturel (v2-3) et humain (v4-5). Les souffleuses représentent le mal relationnel — des personnes qui par leurs paroles détruisent les liens entre les gens. C'est le mal qui vise les relations humaines."
    c.axe4_coherence = "Le Coran utilise le mot nœud (uqda) pour désigner les liens et les pactes dans d'autres versets. Le souffle (nafth) est un acte de projection orale. La cohérence coranique éclaire le sens : souffler dans les nœuds = projeter des paroles dans les liens pour les défaire. C'est le portrait de ceux qui sèment la discorde par la parole."
    c.axe5_frequence = "Protéger les liens entre les gens contre ceux qui cherchent à les détruire par la parole est fondamental pour la mission de civilisation. Les relations humaines sont le tissu de la société — ceux qui les défont par leurs murmures corrompent la communauté de l'intérieur."
    await db.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', nfvVwa.id)
    console.log('✅ nfv axes refaits')
  }

  // Fix eqd axes
  const {data: eqdVwa} = await db.from('verse_word_analyses').select('id,analysis_axes').eq('verse_id', V4).eq('word_key','eqd').single()
  if (eqdVwa) {
    const axes = {...eqdVwa.analysis_axes}
    const c = axes.concepts['Nœud/Contrat']
    c.proof_ctx = "Le sens retenu est « Nœud/Contrat ». Le mot al-uqad est le pluriel de uqda (nœud/lien) défini avec al- — les liens connus. Le Lane's donne pour uqda : nœud, lien, pacte, contrat. Le Coran utilise ce mot pour les liens entre les gens — serments, pactes, mariages. Dans ce verset, les nœuds sont l'objet du souffle destructeur : les souffleuses soufflent DANS les liens pour les défaire. Le nœud est ce qui lie deux personnes ou deux groupes — le défaire c'est rompre la relation."
    c.axe1_verset = "Le mot al-uqad est le lieu où les souffleuses exercent leur souffle — « dans les nœuds/liens ». Le champ lexical est celui des relations humaines visées par la parole destructrice. Le nœud lie ce qui était séparé — le défaire c'est séparer ce qui était uni."
    c.axe2_voisins = "Le verset 4 combine les souffleuses et les nœuds — la parole et les liens. C'est le portrait de ceux qui par leurs propos défont les relations entre les gens. Le verset 5 complète avec l'envie — un autre mal relationnel."
    c.axe3_sourate = "Les nœuds sont les liens humains visés par le souffle destructeur. La sourate progresse : le mal cosmique (v2-3), puis le mal relationnel (v4-5). Les liens entre les gens sont le tissu de la société — les attaquer c'est corrompre la communauté."
    c.axe4_coherence = "Le Coran utilise uqda pour les serments (sourate 2:235 — le nœud du mariage), les pactes et les engagements. La cohérence coranique éclaire le sens : les nœuds de la sourate 113 sont les liens relationnels que les souffleuses cherchent à défaire par leurs paroles."
    c.axe5_frequence = "Protéger les liens sociaux — mariages, amitiés, alliances — contre ceux qui cherchent à les rompre est essentiel à la mission de civilisation. Sans liens solides entre les gens, aucune justice ne peut être construite."

    if (axes.concepts['Détermination']) {
      axes.concepts['Détermination'].proof_ctx = "La détermination est un nœud intérieur de la volonté — une décision ferme. Le verset parle de nœuds extérieurs (les liens entre les gens) dans lesquels on souffle pour les défaire. Le contexte est celui de la destruction des relations, pas de la résolution personnelle."
    }

    await db.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', eqdVwa.id)
    console.log('✅ eqd axes refaits')
  }

  // Fix translation_explanation for verse 4
  const newExpl = `§DEMARCHE§

La conjonction **wa** et la préposition **min sharri** (et contre le mal de) introduisent le troisième type de mal.

Le mot **an-naffathat** est un participe actif féminin pluriel défini avec al- (une forme qui dit que ce sont des personnes identifiées qui FONT l'action activement et en continu) — « les souffleuses ». Le féminin pluriel identifie un groupe de personnes. Le participe actif dit que c'est leur activité permanente, pas un acte isolé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), nafatha signifie souffler, projeter un souffle léger de la bouche. Le souffle peut être une parole, un murmure — un acte de projection orale dirigé vers quelque chose.

La préposition **fi** (dans) indique le lieu ou l'objet de l'action.

Le mot **al-uqad** est le pluriel de uqda (nœud/lien) défini avec al- — les liens. D'après les sources étymologiques, uqda signifie nœud, lien, pacte, contrat. Le Coran utilise ce mot dans d'autres versets pour les liens entre les gens — le nœud du mariage (sourate 2:235), les pactes et les serments. Les souffleuses soufflent DANS les liens — elles projettent des paroles dans les relations entre les gens pour les défaire. C'est le portrait de personnes qui par leurs propos détruisent ce qui unit les gens : les amitiés, les mariages, les alliances.

§JUSTIFICATION§

**les souffleuses** — Le sens retenu est « Souffle/Crachat ». Le mot « souffleuses » est choisi car il capture l'acte précis : des personnes qui projettent un souffle (des paroles) vers quelque chose. L'alternative « les ensorceleuses » est écartée car c'est de l'interprétation exégétique — le texte décrit un acte (souffler), pas un statut. L'alternative « celles qui crachent » est écartée car le nafth est un souffle léger, pas un crachat.

**les nœuds** — Le sens retenu est « Nœud/Contrat ». Le mot « nœuds » est choisi car il décrit les liens entre les gens — le Coran utilise ce mot pour les pactes et les mariages. L'alternative « liens » a été envisagée mais « nœuds » est plus fidèle au pluriel arabe al-uqad et garde le sens concret de quelque chose qu'on peut nouer et dénouer. L'alternative « pactes » est écartée car trop restrictif — les nœuds couvrent tous types de liens.`

  await db.from('verse_analyses').update({translation_explanation: newExpl}).eq('verse_id', V4)
  console.log('✅ démarche verset 4 refaite')

  // Update nfv description in word_meanings
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key','nfv').limit(1)
  if (wa && wa[0]) {
    const newDesc = "Acte de projeter un souffle léger de la bouche vers quelque chose. Le nafth est un souffle directionnel — il sort de la bouche et atteint ce qui est visé. Le souffle peut être une parole ou un murmure. Dans le Coran, les souffleuses (naffathat) projettent ce souffle dans les liens (uqad) entre les gens — c'est un acte de parole destructrice dirigé vers les relations humaines."
    await db.from('word_meanings').update({description: newDesc}).eq('analysis_id', wa[0].id).eq('display_order', 1)
    console.log('✅ description nfv mise à jour')
  }

  console.log('\nDone')
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
