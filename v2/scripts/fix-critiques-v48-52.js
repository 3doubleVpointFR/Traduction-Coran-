const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ========== V48 (id=699) ==========
  const critiqueV48 = [
    "**l'Écriture vs le Livre** : les traductions courantes donnent « le Livre » pour al-kitāb. Les deux sens sont proches et ne changent pas fondamentalement le sens du verset. Notre choix « l'Écriture » cherche à distinguer al-kitāb (le texte révélé en général) des deux livres spécifiques nommés ensuite (Torah et Évangile). Si al-kitāb signifie « le Livre » au sens d'un livre précis, il fait doublon avec la Torah et l'Évangile. « L'Écriture » lève cette ambiguïté.",
    "",
    "**enseigne (présent) vs enseignera (futur)** : les traductions courantes donnent « enseignera » (futur) pour yuʿallimuhu. Or le verbe arabe est à l'inaccompli (muḍāriʿ), une forme qui exprime l'action en cours ou habituelle — PAS le futur. L'arabe a une forme spécifique pour le futur (sa-/sawfa + inaccompli). L'inaccompli seul décrit une action qui se déroule, qui est en train de se faire. Notre choix « enseigne » (présent) rend cette valeur d'action en cours. « Enseignera » ajoute une projection temporelle que le texte arabe ne porte pas explicitement."
  ].join("\n");

  // ========== V49 (id=702) ==========
  const critiqueV49 = [
    "**je façonne vs je forme** : akhluqu vient de la racine kh-l-q qui signifie créer. Hamidullah donne « je forme ». Notre choix « je façonne » est proche mais rend mieux l'aspect artisanal de l'acte. L'enjeu est le rapport à la matière : « créer » dit faire exister à partir de rien, ce qui est un attribut exclusivement divin dans le Coran. Or Jésus utilise une matière première (l'argile) — il ne crée pas ex nihilo. « Façonner » rend mieux cet aspect artisanal. La nuance est réelle car le Coran distingue soigneusement entre l'acte divin de création (sans matière) et l'acte humain de fabrication (avec matière).",
    "",
    "**l'aveugle-né vs l'aveugle** : al-akmah désigne spécifiquement celui qui est aveugle de naissance — la cécité est congénitale. Le mot pour « aveugle » en général est a'mā. Hamidullah traduit par « l'aveugle-né », confirmant cette distinction. D'autres traducteurs donnent simplement « l'aveugle » (a'mā), ce qui perd la précision du texte. La nuance est importante car elle souligne le caractère miraculeux : guérir une personne qui n'a JAMAIS vu est plus extraordinaire que rendre la vue à quelqu'un qui l'a perdue.",
    "",
    "**je donne la vie aux morts vs je ressuscite les morts** : uḥyī est la forme IV causative de ḥ-y-y (vivre) — littéralement « je fais vivre, je vivifie ». Hamidullah traduit par « je ressuscite ». Le mot « ressusciter » porte une charge théologique spécifique : il implique la résurrection, un retour à la vie après la mort dans un cadre eschatologique. Le verbe arabe uḥyī ne porte pas cette charge — il dit simplement « donner la vie ». Notre choix préserve la neutralité du texte arabe.",
    "",
    "**vous stockez vs vous amassez** : taddakhirūna est la forme VIII de dh-kh-r (mettre en réserve). Hamidullah traduit par « vous amassez ». Le mot « amasser » en français a une connotation d'accumulation excessive ou avide, alors que iddakhara est neutre — c'est simplement l'acte de mettre de côté pour plus tard. Notre choix « stocker » est plus neutre et rend mieux la racine.",
    "",
    "**ceux qui accordent confiance vs croyants** : mu'minīn vient de la racine '-m-n dont le sens premier est la sécurité et la confiance. Le mot « croyants » en français désigne aujourd'hui les adhérents d'une religion — un sens post-islamique qui rétrécit le champ sémantique. Le mu'min dans le Coran est d'abord celui qui accorde sa confiance au message divin, qui fait confiance aux signes. Notre traduction « ceux qui accordent confiance » restitue cette dimension active et relationnelle.",
    "",
    "**les Fils d'Israël vs les Enfants d'Israël** : les traductions courantes donnent « les Enfants d'Israël » pour Banī Isrā'īl. Or banī est le pluriel de ibn (fils), pas de walad/ṭifl (enfant). « Fils » indique un lien de filiation directe avec le patriarche — « enfant » dilue cette filiation en y ajoutant une connotation de dépendance ou de jeunesse. La nuance est mineure mais « Fils » est plus précis étymologiquement.",
    "",
    "**je vous informe vs je vous apprends** : unabbiʾukum vient de la forme II de n-b-' qui signifie « informer, révéler une nouvelle ». Hamidullah traduit par « je vous apprends ». Le verbe « apprendre » en français implique un transfert de savoir progressif (comme un professeur). « Informer » implique la révélation d'un fait caché — Jésus ne leur enseigne pas ce qu'ils mangent, il leur RÉVÈLE ce qu'ils cachent. La nuance est significative : « informer » souligne le caractère miraculeux (connaître l'inconnaissable), « apprendre » le normalise.",
    "",
    "**l'argile vs la glaise** : Hamidullah traduit ṭīn par « la glaise ». Les deux mots désignent la même matière (terre mêlée d'eau), mais « argile » est plus courant en français contemporain. La différence est purement stylistique et n'affecte pas le sens.",
    "",
    "**la forme vs la figure** : Hamidullah traduit hay'a par « la figure ». « Forme » et « figure » sont proches — les deux désignent l'apparence extérieure. « Forme » est plus neutre et courant. La différence est mineure.",
    "",
    "**Il y a là assurément un signe vs Voilà bien là un signe** : Hamidullah traduit inna fī dhālika la-āyatan par « Voilà bien là un signe ». Notre choix « Il y a là assurément un signe » rend la particule emphatique la- par « assurément » et la construction inna fī dhālika par « il y a là ». Les deux formulations rendent le sens emphatique du texte. La différence est stylistique."
  ].join("\n");

  // ========== V50 (id=701) ==========
  const critiqueV50 = [
    "**ce qui est devant moi de la Torah vs ce qu'il y a dans la Thora révélée avant moi** — L'expression arabe mā bayna yadayya mina t-tawrāt signifie littéralement « ce qui est entre mes deux mains de la Torah ». C'est une formule idiomatique qui désigne ce qui se tient devant quelqu'un — ce qui l'a précédé. Notre choix « ce qui est devant moi » préserve la métaphore spatiale de l'arabe (bayna yadayya = entre mes mains = devant moi). Hamidullah traduit par « ce qu'il y a dans la Thora révélée avant moi » — ce qui pose deux problèmes : (1) il ajoute le mot « révélée » qui n'est PAS dans le texte arabe, et (2) il traduit « ce qu'il y a DANS » alors que le texte dit mā bayna yadayya MINA (ce qui est devant moi DE) — la préposition min (de) indique la provenance, pas la localisation « dans ». La différence est significative.",
    "",
    "**prémunissez-vous vs craignez** — Les traductions courantes donnent « craignez Allah » pour ittaqū Allāha. Ce choix transforme le rapport avec Dieu : « craindre » implique une relation de peur et de menace, comme si Dieu était une source de danger dont il faut avoir peur. Mais la racine w-q-y signifie « protéger, mettre un bouclier devant ». La forme VIII réflexive (ittaqā) signifie « se protéger soi-même » — la taqwā est l'acte de se mettre à l'abri, pas l'état d'avoir peur. Le sens est plutôt : « prenez vos précautions envers Dieu » — soyez prudents dans votre rapport avec l'autorité suprême. Le biais vient des commentaires classiques qui ont associé la taqwā à la « crainte de Dieu » (khashyat Allāh), mais khashya (peur révérencielle) vient d'une racine différente (kh-sh-y) qui signifie effectivement « craindre ». La taqwā vient de w-q-y (protéger) — c'est une protection active, pas une peur passive.",
    "",
    "**je suis venu à vous avec vs j'ai apporté** — Les traductions courantes donnent « j'ai apporté un signe » pour ji'tukum bi-āyatin. Le verbe jā'a signifie « venir » (se déplacer vers), pas « apporter » (faire venir un objet). ji'tukum bi- = « je suis venu à vous avec » — l'accent est sur la venue de Jésus, le signe l'accompagne. « Apporter » déplace l'accent sur le signe comme objet transporté, ce qui est une nuance différente. Cela dit, les deux lectures sont proches et ne changent pas fondamentalement le sens du verset.",
    "",
    "**de votre Seigneur vs de la part de votre Seigneur** — Hamidullah ajoute « de la part de » pour min rabbikum. En arabe, min signifie simplement « de » (provenance). « De la part de » en français introduit l'idée d'un intermédiaire ou d'une délégation qui n'est pas dans le texte. Notre choix « de votre Seigneur » est plus fidèle à la préposition min.",
    "",
    "**vous a été interdit vs vous était interdit** — Hamidullah utilise l'imparfait « vous était interdit » tandis que notre traduction utilise le passé composé « vous a été interdit ». Le verbe arabe ḥurrima est à l'accompli (passif) — une action terminée. Le passé composé français rend mieux cette action achevée que l'imparfait qui implique une durée ou une habitude."
  ].join("\n");

  // ========== V51 (id=704) ==========
  const critiqueV51 = [
    "**un chemin droit vs le chemin droit** — Les traductions courantes donnent « le chemin droit » pour ṣirāṭun mustaqīmun. Or le texte arabe utilise l'indéfini (ṣirāṭun avec tanwīn) et non le défini (aṣ-ṣirāṭ avec article al-). « Le chemin droit » implique qu'il n'y a qu'un seul chemin identifié et connu de tous. « Un chemin droit » dit que ce que Jésus propose EST un chemin droit — sans exclure ni inclure d'autres chemins. Le biais vient de l'habitude de traduire ṣirāṭ mustaqīm comme une formule figée « le droit chemin », alors que la grammaire arabe distingue clairement le défini du indéfini. En 1:6 (ihdinā aṣ-ṣirāṭa al-mustaqīma), l'article est bien présent — c'est LE chemin droit. Ici en 3:51, l'absence d'article est un choix du texte.",
    "",
    "**assurément vs Certes** — Hamidullah traduit inna par « Certes ». Notre choix « assurément » rend la même particule de renforcement. Les deux mots sont des adverbes d'emphase acceptables. « Certes » en français moderne a pris une nuance concessive (certes... mais), tandis qu'« assurément » reste purement affirmatif. Pour une particule qui renforce une affirmation solennelle, « assurément » est plus fidèle au ton de inna.",
    "",
    "**Voici vs voilà** — Hamidullah traduit hādhā par « voilà ». Or hādhā est un démonstratif de PROXIMITÉ (celui-ci, ceci). Le démonstratif d'éloignement en arabe est dhālika (celui-là). En français, « voici » marque la proximité (ce qui est ici, près) et « voilà » marque l'éloignement (ce qui est là-bas, loin). Notre choix « Voici » respecte la valeur de proximité de hādhā : Jésus présente son message comme quelque chose de PROCHE et d'immédiat, pas de distant."
  ].join("\n");

  // ========== V52 (id=706) ==========
  const critiqueV52 = [
    "**couverture vs incrédulité** — Les traductions courantes donnent « incrédulité » ou « incroyance » pour al-kufr. Or le sens premier de k-f-r est « couvrir » — le kafir est le laboureur qui couvre la graine, la nuit qui couvre le jour. « L'incrédulité » est un état mental (ne pas croire), tandis que « la couverture » est un acte (recouvrir la vérité). Le changement est significatif : avec « incrédulité », les Enfants d'Israël n'arrivent pas à croire (problème intellectuel) ; avec « couverture », ils recouvrent activement les signes (acte volontaire de dissimulation). Le verbe ahassa (sentir) confirme cette lecture : on « sent » un acte en cours (la couverture), on ne « sent » pas un état mental (l'incrédulité).",
    "",
    "**éprouvés vs apôtres/disciples** — Les traductions courantes donnent « apôtres » ou « disciples » pour al-hawariyyun. Or « apôtre » vient du grec apostolos (envoyé) et « disciple » du latin discipulus (élève) — aucun des deux n'a de rapport avec la racine arabe h-w-r. Le hawariyy est celui qui a été éprouvé et trouvé pur — la pureté obtenue par l'épreuve. « Éprouvés » rend ce processus de vérification que ni « apôtre » ni « disciple » ne contiennent. Le biais vient de l'influence du vocabulaire chrétien sur les traductions du texte arabe.",
    "",
    "**secoureurs vs alliés** — Les traductions courantes donnent « alliés » pour ansar. Or n-s-r signifie « secourir, porter secours dans un moment de besoin ». L'allié est lié par un pacte — le secoureur agit dans l'urgence. La différence est notable : Jésus ne cherche pas des alliés politiques mais des personnes prêtes à l'aider activement dans sa mission vers Dieu. Le mot ansar sera repris plus tard pour désigner les habitants de Médine qui ont secouru le Prophète — le sens de secours actif est central.",
    "",
    "**vers Dieu vs dans la voie d'Allah** — Les traductions courantes donnent « dans la voie d'Allah » ou « dans le sentier d'Allah » pour ilā Allāh. Or ilā est une préposition de direction qui signifie « vers » — elle indique un mouvement, une destination. « Dans la voie de » correspondrait à fī sabīli Allāh, une expression DIFFÉRENTE qui apparaît ailleurs dans le Coran (par exemple en 2:154, 2:190). La différence est significative : « vers Dieu » (ilā Allāh) dit que le secours est orienté VERS Dieu comme destination finale ; « dans la voie de Dieu » (fī sabīli Allāh) dit que le secours se fait À L'INTÉRIEUR d'un chemin déjà tracé. Jésus demande : « qui me secourra dans ma marche VERS Dieu ? » — le mouvement est dynamique et directionnel.",
    "",
    "**mis notre confiance vs croyons** — Les traductions courantes donnent « nous croyons en Dieu » pour amanna bi-Allahi. Or la racine '-m-n porte le sens premier de sécurité et de confiance — pas de croyance intellectuelle. « Nous avons mis notre confiance en Dieu » dit que les éprouvés placent leur sécurité en Dieu, tandis que « nous croyons en Dieu » réduit l'engagement à une adhésion intellectuelle. La confiance est un acte total (on remet sa sécurité), la croyance est un acte mental (on accepte comme vrai).",
    "",
    "**ceux qui se remettent vs soumis** — Les traductions courantes donnent « soumis » pour muslimun. Or muslim est un participe actif de la forme IV (aslama = remettre), ce qui indique un acte volontaire et continu. « Soumis » est un participe passé passif — il décrit quelqu'un qui subit la soumission. « Ceux qui se remettent » est un participe actif réflexif — il décrit quelqu'un qui choisit activement de se remettre à Dieu. La différence est celle entre subir (soumis) et choisir (se remettre)."
  ].join("\n");

  const allUpdates = [
    { id: 699, vnum: 48, critique: critiqueV48 },
    { id: 702, vnum: 49, critique: critiqueV49 },
    { id: 701, vnum: 50, critique: critiqueV50 },
    { id: 704, vnum: 51, critique: critiqueV51 },
    { id: 706, vnum: 52, critique: critiqueV52 },
  ];

  for (const u of allUpdates) {
    // Fetch current
    const { data, error } = await db.from('verse_analyses')
      .select('verse_id, translation_explanation')
      .eq('id', u.id).single();
    if (error) { console.error('ERR fetch id=' + u.id, error.message); continue; }

    const expl = data.translation_explanation;
    const idx = expl.indexOf('\u00a7CRITIQUE\u00a7');
    if (idx === -1) { console.error('V' + u.vnum + ': \u00a7CRITIQUE\u00a7 not found!'); continue; }

    // Replace everything from §CRITIQUE§ onward
    const before = expl.substring(0, idx);
    const newExpl = before + '\u00a7CRITIQUE\u00a7\n' + u.critique;

    // Count bold entries for logging
    const oldCritique = expl.substring(idx);
    const oldBolds = (oldCritique.match(/\*\*[^*]+vs[^*]+\*\*/g) || []).length;
    const newBolds = (u.critique.match(/\*\*[^*]+vs[^*]+\*\*/g) || []).length;

    // Update DB
    const { error: updateErr } = await db.from('verse_analyses')
      .update({ translation_explanation: newExpl })
      .eq('id', u.id);
    if (updateErr) { console.error('V' + u.vnum + ': UPDATE ERROR', updateErr.message); continue; }

    console.log('V' + u.vnum + ' (id=' + u.id + '): OK — ' + oldBolds + ' differences -> ' + newBolds + ' differences');
  }
  console.log('\nAll done!');
}
run().catch(console.error);
