const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVWA(vid, wk, pos, patch) {
  const { data } = await sb.from('verse_word_analyses')
    .select('id, analysis_axes').eq('verse_id', vid).eq('word_key', wk).eq('position', pos).single();
  if (!data) { console.log(`  SKIP ${wk}/p${pos} vid=${vid} — not found`); return; }
  const axes = { ...data.analysis_axes };
  if (patch.concepts) {
    axes.concepts = { ...data.analysis_axes.concepts };
    for (const [cn, cv] of Object.entries(patch.concepts)) {
      axes.concepts[cn] = { ...(axes.concepts[cn] || {}), ...cv };
    }
  }
  if (patch.concept_chosen) axes.concept_chosen = patch.concept_chosen;
  const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
  console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos}`);
}

// ============================================================
// Axes reutilisables pour concepts qui reviennent plusieurs fois
// ============================================================

// rbb "Croissance/Augmentation" — V198 (vid=205) et V200 (vid=207)
const AXES_RBB_CROISSANCE = {
  axe1_verset: "Dans ce verset, le mot rabb designe le Seigneur, celui qui possede l'autorite bienveillante sur ses creatures. Le concept de croissance ou d'augmentation est present dans la racine r-b-b qui porte l'idee de nourrir, faire grandir, elever. Le Seigneur est etymologiquement celui qui fait croitre. Cependant le verset utilise rabb dans le sens d'autorite et de souverainete, pas dans le sens de faire pousser ou augmenter quelque chose de materiel.",
  axe2_voisins: "Les versets voisins traitent des rites du pelerinage et des invocations a Dieu. Le contexte est celui de la relation entre le croyant et son Seigneur dans un cadre rituel. La croissance impliquerait un processus graduel de developpement, or le pelerinage est un moment intense de soumission et de rupture avec le quotidien. Les versets environnants ne parlent pas de croissance mais de prescriptions, de limites et de rappel divin.",
  axe3_sourate: "Al-Baqarah utilise le mot rabb dans des dizaines de contextes — legislatif, narratif, invocatoire. La sourate presente le Seigneur comme le maitre absolu qui legifere et guide, pas comme un agent de croissance biologique. Le concept de croissance est etymologiquement present dans la racine mais la sourate met en avant l'autorite, la misericorde et la justice du Seigneur. La croissance est un aspect de la seigneurie, pas son centre.",
  axe4_coherence: "Le Coran utilise la racine r-b-b principalement pour designer la relation de seigneurie entre Dieu et ses creatures. Le sens de croissance est rare dans l'usage coranique de rabb — le Coran prefere d'autres racines pour exprimer la croissance comme n-b-t ou n-m-w. La coherence coranique montre que rabb fonctionne comme un titre d'autorite bienveillante, pas comme un agent de croissance materielle.",
  axe5_frequence: "Pour la mission du khalifa, la distinction entre seigneurie et croissance est importante. Le khalifa represente l'autorite divine sur terre — il gouverne, il ne fait pas simplement croitre. La croissance est un objectif de la bonne gouvernance mais elle n'est pas la nature du pouvoir. Le khalifa qui reduirait son role a la croissance oublierait les dimensions de justice, de legislation et de protection qui definissent la seigneurie."
};

// rbb "Education/Accompagnement" — V198 (vid=205) et V200 (vid=207)
const AXES_RBB_EDUCATION = {
  axe1_verset: "Dans ce verset, le mot rabb designe le Seigneur dans un contexte de pelerinage et d'invocation. Le concept d'education ou d'accompagnement evoque le processus pedagogique de guider et former. La racine r-b-b porte effectivement le sens d'elever et d'eduquer. Cependant le verset utilise rabb comme titre de souverainete dans une invocation, pas dans un contexte pedagogique. L'education est un aspect de la seigneurie mais pas le sens premier ici.",
  axe2_voisins: "Les versets voisins decrivent les rites du pelerinage — les stations, les invocations, les regles de conduite. Le contexte est rituel et legislatif, pas educatif. L'accompagnement pedagogique impliquerait un processus d'apprentissage progressif, or le pelerinage est un acte d'obeissance immediate. Les versets ne decrivent pas un Seigneur qui enseigne mais un Seigneur qui ordonne et que l'on invoque avec humilite.",
  axe3_sourate: "Al-Baqarah contient des passages educatifs — les paraboles, les recits des prophetes — mais dans les passages rituels, le ton change. Le Seigneur n'est plus le pedagogue mais le maitre des rites. La sourate distingue les registres — enseignement narratif et prescription rituelle. Dans les versets du pelerinage, le concept d'education est moins pertinent que celui d'autorite legislative car les rites sont a executer, pas a comprendre.",
  axe4_coherence: "Le Coran presente Dieu comme educateur dans certains contextes — Il enseigne a Adam les noms, Il explique les signes. Mais dans les passages rituels, l'accent est mis sur l'obeissance et la soumission. L'education et l'accompagnement sont des modalites de la relation divine mais pas les seules. La coherence coranique montre que le contexte determine quelle facette de la seigneurie est mise en avant.",
  axe5_frequence: "Pour la mission du khalifa, l'education est un pilier de la gouvernance. Le khalifa doit former et accompagner les citoyens. Cependant dans le contexte du pelerinage, le khalifa est aussi celui qui organise les rites et veille a leur bon deroulement. L'accompagnement pedagogique est complementaire a l'autorite organisationnelle. Le khalifa qui ne ferait qu'eduquer sans organiser ne remplirait que la moitie de sa mission."
};

// kfr "Couverture/Dissimulation" — V191 (vid=198)
const AXES_KFR_COUVERTURE = {
  axe1_verset: "Dans ce verset, la racine k-f-r designe ceux qui rejettent la foi — les kafirin dont le chatiment est la mort. Le concept de couverture ou dissimulation est pertinent car la racine porte originellement le sens de couvrir, cacher. Le kafir est etymologiquement celui qui couvre la verite. Dans ce verset de combat, le rejet de la foi est presente comme un acte de guerre, pas simplement un voilement interieur de la verite.",
  axe2_voisins: "Les versets voisins traitent du combat contre ceux qui combattent les croyants et de l'interdiction de l'agression. Le contexte est militaire et juridique. La couverture comme concept evoque un acte interieur — voiler la verite — alors que le passage decrit des actes exterieurs violents. La dissimulation est le mecanisme psychologique initial qui conduit au rejet puis a l'hostilite, mais le verset se concentre sur les consequences, pas sur le mecanisme.",
  axe3_sourate: "Al-Baqarah utilise la racine k-f-r dans de nombreux contextes — theologique, legislatif, narratif. Le concept de couverture est present des le debut de la sourate avec la description de ceux dont les coeurs sont scelles. Dans les versets de combat, le kufr est un acte collectif qui menace la communaute, pas un simple voilement individuel. La sourate montre que la couverture de la verite peut mener a la confrontation armee quand elle devient agression.",
  axe4_coherence: "Le Coran presente le kufr comme un spectre allant de la couverture interieure au rejet actif et agressif. Le concept de couverture correspond au debut de ce spectre. Dans les versets de combat, le Coran traite de l'extremite du spectre — le rejet qui se manifeste par la violence. La coherence coranique montre que la couverture est la racine du kufr mais que le verset traite de ses consequences les plus graves.",
  axe5_frequence: "Pour la mission du khalifa, la couverture de la verite est un danger pour la societe car elle peut evoluer vers la violence. Le khalifa doit lutter contre toutes les formes de dissimulation — la corruption cachee, les verites etouffees. Cependant dans ce contexte de combat, le khalifa fait face a un kufr qui a depasse le stade de la couverture pour devenir agression. La reponse n'est plus pedagogique mais defensive."
};

async function main() {
  console.log('=== FIX V191-200 ===\n');

  // ===================================================================
  // V191 (vid=198): kfr/p27 et thqf/p3
  // ===================================================================
  console.log('--- V191 (vid=198): kfr/p27 "Couverture/Dissimulation" ---');
  await fixVWA(198, 'kfr', 27, { concepts: { "Couverture/Dissimulation": AXES_KFR_COUVERTURE }});

  console.log('--- V191 (vid=198): thqf/p3 "Habilete" ---');
  await fixVWA(198, 'thqf', 3, { concepts: {
    "Habilete": {
      axe1_verset: "Dans ce verset, le mot thaqiftumuhum signifie 'la ou vous les trouvez, les rencontrez'. Le concept d'habilete evoque la competence et l'adresse. La racine th-q-f porte le sens de trouver, saisir, mais aussi d'etre habile et adroit. Le verset utilise la racine dans le sens de rencontrer ou trouver l'ennemi, pas dans le sens de posseder une competence ou un talent particulier.",
      axe2_voisins: "Les versets voisins traitent du combat contre les agresseurs et des regles d'engagement. Le contexte est militaire — il s'agit de localiser et affronter l'ennemi. L'habilete au sens de competence technique n'est pas le sujet du passage. Les versets prescrivent de combattre ceux qui combattent les croyants, pas de developper des competences. La rencontre avec l'ennemi est un fait de terrain, pas un exercice d'adresse.",
      axe3_sourate: "Al-Baqarah aborde le combat dans un cadre legislatif precis — defense, limites, interdiction de l'agression. Le concept d'habilete impliquerait une valorisation de la competence guerriere en soi, ce qui n'est pas le propos de la sourate. La sourate encadre le combat par des regles morales, pas par la recherche de l'excellence technique. L'habilete est utile au combat mais le verset parle de trouver l'ennemi, pas de le vaincre par l'adresse.",
      axe4_coherence: "Le Coran utilise la racine th-q-f dans le sens de trouver, rencontrer, saisir. Le sens d'habilete est present dans la langue arabe classique mais rare dans l'usage coranique. Les occurrences coraniques de cette racine designent toujours une rencontre ou une capture, pas une competence. La coherence coranique oriente clairement vers le sens de rencontre plutot que vers celui d'habilete ou d'adresse.",
      axe5_frequence: "Pour la mission du khalifa, l'habilete est une qualite necessaire a la gouvernance mais elle n'est pas ce que le verset enseigne. Le verset enseigne ou et comment engager l'ennemi — des questions strategiques, pas des questions de talent individuel. Le khalifa doit savoir ou trouver les menaces et comment y repondre dans les limites de la loi divine. La rencontre est le concept operationnel ici, pas la virtuosite."
    }
  }});

  // ===================================================================
  // V193 (vid=200): dyn/p8 et edw/p13
  // ===================================================================
  console.log('\n--- V193 (vid=200): dyn/p8 "Obeissance/Soumission" ---');
  await fixVWA(200, 'dyn', 8, { concepts: {
    "Obeissance/Soumission": {
      axe1_verset: "Dans ce verset, le mot al-din designe la religion, le systeme de croyances et de pratiques. Le concept d'obeissance ou de soumission est etroitement lie a la religion car la pratique religieuse implique l'obeissance a Dieu. Cependant le verset parle de la religion comme systeme global — que la religion soit entierement pour Dieu. L'obeissance est une composante de la religion mais pas son synonyme car la religion inclut aussi les croyances, les rites et les lois.",
      axe2_voisins: "Les versets voisins traitent du combat et de ses regles. Le contexte est celui de la defense de la communaute croyante contre l'oppression. Le mot din dans ce contexte designe le systeme qui doit etre protege, pas simplement l'acte d'obeir. L'obeissance serait un concept trop reducteur pour rendre compte de ce que le verset cherche a preserver. Le passage vise la liberte de pratiquer la religion dans toutes ses dimensions.",
      axe3_sourate: "Al-Baqarah construit progressivement un systeme complet — croyances, legislations, rites, morale. Le mot din dans la sourate designe ce systeme dans sa totalite. L'obeissance est un element de ce systeme mais elle n'en est pas le resume. La sourate ne presente jamais la religion comme une simple obeissance — elle inclut la reflexion, la comprehension, l'engagement volontaire. Le din est plus riche que la soumission.",
      axe4_coherence: "Le Coran utilise la racine d-y-n dans plusieurs sens — religion, jugement, retribution, dette. Le sens d'obeissance est present dans l'arriere-plan semantique car la religion implique l'obeissance au Createur. Cependant les versets coraniques qui parlent du din comme systeme le presentent toujours comme un ensemble comprenant croyances, pratiques et valeurs. L'obeissance seule ne couvre pas cette richesse semantique.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre religion et obeissance est capitale. Le khalifa ne gouverne pas par la simple soumission des sujets mais en instaurant un systeme juste qui integre toutes les dimensions de la vie. Un din reduit a l'obeissance produirait une societe servile, pas une societe libre et responsable. Le khalifa doit promouvoir la religion comme cadre de vie complet, pas comme simple discipline."
    }
  }});

  console.log('--- V193 (vid=200): edw/p13 "Hostilite/Inimitie" ---');
  await fixVWA(200, 'edw', 13, { concepts: {
    "Hostilite/Inimitie": {
      axe1_verset: "Dans ce verset, le mot udwan designe la transgression ou l'exces — point d'hostilite sauf contre les injustes. Le concept d'hostilite ou d'inimitie evoque une animosite personnelle, une haine envers quelqu'un. Le verset utilise la racine e-d-w dans le sens de transgression des limites, pas dans le sens de haine personnelle. La transgression est un acte objectif qui depasse les bornes fixees, l'hostilite est un sentiment subjectif.",
      axe2_voisins: "Les versets voisins encadrent le combat par des regles precises — ne pas agresser, combattre ceux qui combattent, cesser si l'ennemi cesse. Le contexte est juridique et proportionnel. L'hostilite comme sentiment impliquerait une animosite sans limites, or le passage insiste sur les limites. La transgression est le depassement mesurable de ces limites, ce qui correspond au cadre juridique du passage mieux que l'hostilite emotionnelle.",
      axe3_sourate: "Al-Baqarah pose des cadres legislatifs stricts pour tous les domaines de la vie, y compris le combat. Le concept de transgression s'inscrit dans cette logique de limites a ne pas depasser. L'hostilite comme concept emotionnel est plus difficile a legisler car elle releve du for interieur. La sourate legifere sur les actes, pas sur les sentiments. La transgression est un acte exterieur mesurable, l'hostilite est un etat interieur difficile a encadrer.",
      axe4_coherence: "Le Coran utilise la racine e-d-w dans les deux sens — transgression et hostilite. Cependant dans les contextes legislatifs, le sens de transgression domine car il permet de definir des limites claires. L'hostilite apparait davantage dans les passages narratifs qui decrivent les attitudes des ennemis de la foi. La coherence coranique montre que le contexte legislatif de ce verset oriente vers la transgression des limites.",
      axe5_frequence: "Pour la mission du khalifa, la transgression est un concept juridique operationnel. Le khalifa peut constater une transgression et y repondre par la loi. L'hostilite est un sentiment qu'il est difficile de prouver et de sanctionner. Le khalifa a besoin de criteres objectifs pour gouverner justement. La transgression fournit ces criteres — c'est le depassement d'une limite definie. L'hostilite reste dans le domaine de l'intention que seul Dieu connait."
    }
  }});

  // ===================================================================
  // V195 (vid=202): hsn/p16 — axe5 trop court (83 chars)
  // ===================================================================
  console.log('\n--- V195 (vid=202): hsn/p16 — expansion axe5 ---');
  {
    const { data } = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 202).eq('word_key', 'hsn').eq('position', 16).single();
    if (data) {
      const axes = { ...data.analysis_axes };
      const concepts = { ...axes.concepts };
      // Find the retenu concept and expand its axe5
      for (const [cn, cd] of Object.entries(concepts)) {
        if (cd.status === 'retenu' && cd.axe5_frequence && cd.axe5_frequence.length < 100) {
          concepts[cn] = { ...cd,
            axe5_frequence: "Pour la mission du khalifa, l'excellence et la bienfaisance sont des piliers de la gouvernance juste. Le khalifa doit incarner le ihsan — faire le bien au-dela du strict minimum. La bienfaisance cree un cercle vertueux dans la societe car elle encourage la generosite et la solidarite. Le khalifa qui se contente du minimum legal manque l'esprit de la loi divine qui appelle a l'excellence en toute chose. Le ihsan est ce qui distingue une societe fonctionnelle d'une societe florissante."
          };
          console.log(`  Expanded axe5 for "${cn}" (was ${cd.axe5_frequence.length} chars)`);
        }
      }
      axes.concepts = concepts;
      const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
      console.log(error ? `  ERR hsn/p16: ${error.message}` : `  OK hsn/p16`);
    } else {
      console.log('  SKIP hsn/p16 vid=202 — not found');
    }
  }

  // ===================================================================
  // V196 (vid=203): blgh/p16, hdr/p64, mte/p38, nsk/p34
  // ===================================================================
  console.log('\n--- V196 (vid=203): blgh/p16 "Transmission/Communication" ---');
  await fixVWA(203, 'blgh', 16, { concepts: {
    "Transmission/Communication": {
      axe1_verset: "Dans ce verset, le mot yablugha signifie 'atteindre' — que l'offrande atteigne son lieu de sacrifice. Le concept de transmission ou communication evoque le fait de faire parvenir un message. La racine b-l-gh porte les deux sens — atteindre un lieu et transmettre une information. Le verset utilise clairement le sens d'atteindre physiquement un endroit, pas celui de communiquer un message a quelqu'un.",
      axe2_voisins: "Les versets voisins traitent des rites du pelerinage — interdictions pendant l'ihram, offrandes, compensations. Le contexte est rituel et pratique. La transmission d'un message n'a pas de rapport avec le fait qu'une offrande arrive a destination. Les versets decrivent des actions physiques — se raser la tete, sacrifier, jeuner — pas des actes de communication. L'atteinte du lieu de sacrifice est une condition materielle, pas un acte de transmission.",
      axe3_sourate: "Al-Baqarah traite des rites avec une precision juridique qui exige des criteres concrets. Le concept de transmission est trop abstrait pour ce contexte de prescriptions rituelles precises. La sourate utilise la racine b-l-gh pour marquer des seuils concrets — atteindre l'age de la majorite, atteindre un lieu. Le sens de communication est absent des passages legislatifs de la sourate car la sourate legifere sur des actes, pas sur des messages.",
      axe4_coherence: "Le Coran utilise la racine b-l-gh dans le sens d'atteindre un seuil — physique, temporel ou metaphorique. Le sens de transmission est present dans la langue arabe mais moins frequent dans l'usage coranique de cette racine. Les versets coraniques qui emploient balagha parlent d'arriver a un point precis. La coherence coranique oriente vers l'idee d'atteinte et d'accomplissement plutot que vers la communication.",
      axe5_frequence: "Pour la mission du khalifa, l'atteinte des objectifs est un critere de reussite de la gouvernance. Le khalifa doit s'assurer que les prescriptions atteignent leur but — que les offrandes arrivent a destination, que les lois sont appliquees. La transmission est un moyen, l'atteinte est un resultat. Le khalifa juge l'efficacite de sa gouvernance par les resultats atteints, pas simplement par les messages transmis."
    }
  }});

  console.log('--- V196 (vid=203): hdr/p64 "Sedentarite/Civilisation" ---');
  await fixVWA(203, 'hdr', 64, { concepts: {
    "Sedentarite/Civilisation": {
      axe1_verset: "Dans ce verset, le mot hadiri designe ceux dont la famille reside pres de la Mosquee sacree. Le concept de sedentarite ou civilisation evoque l'installation durable dans un lieu et le developpement d'une culture. La racine h-d-r porte le sens de presence et de residence. Le verset utilise cette racine pour decrire une residence permanente pres de la Mosquee, ce qui est effectivement un aspect de la sedentarite.",
      axe2_voisins: "Les versets voisins traitent des modalites du pelerinage et des dispenses selon la situation du croyant. Le contexte distingue ceux qui vivent pres de la Mosquee de ceux qui viennent de loin. La sedentarite est pertinente car elle determine le statut juridique du pelerin — les residents de La Mecque ont des obligations differentes des voyageurs. Les versets font une distinction geographique et sociale qui touche a la sedentarite.",
      axe3_sourate: "Al-Baqarah construit une legislation qui tient compte des realites geographiques et sociales. Le concept de sedentarite est present dans la sourate a travers les distinctions entre residents et voyageurs, entre sedentaires et nomades. La sourate adapte les prescriptions selon la situation de chacun. La civilisation comme concept macro est trop large pour ce verset qui traite d'une distinction juridique precise entre residents et non-residents.",
      axe4_coherence: "Le Coran utilise la racine h-d-r principalement dans le sens de presence et de temoignage. Le sens de sedentarite est un extension de la presence — celui qui est present en permanence est sedentaire. La coherence coranique montre que cette racine designe la presence physique, dont la sedentarite est une forme durable. Le verset utilise un sens intermediaire — la residence habituelle, ni simple presence ni civilisation elaborate.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre residents et non-residents est importante pour l'administration. Le khalifa doit adapter les obligations selon les capacites et les situations des citoyens. La sedentarite implique des droits et des devoirs differents de ceux du voyageur. Le khalifa qui appliquerait les memes regles a tous sans distinction de situation manquerait de pragmatisme et d'equite dans sa gouvernance."
    }
  }});

  console.log('--- V196 (vid=203): mte/p38 "Bien/Provision" ---');
  await fixVWA(203, 'mte', 38, { concepts: {
    "Bien/Provision": {
      axe1_verset: "Dans ce verset, le mot tamatta'a signifie 'jouir de, profiter de' — quiconque a joui de l'Umra en attendant le pelerinage. Le concept de bien ou provision evoque les biens materiels et les ressources. La racine m-t-e porte le sens de jouissance, de profit tire d'une chose. Le verset utilise cette racine dans le sens de tirer profit d'une combinaison rituelle, pas dans le sens de posseder des biens materiels.",
      axe2_voisins: "Les versets voisins traitent des rites du pelerinage et de leurs combinaisons. Le contexte est rituel — il s'agit de combiner l'Umra et le Hajj pour en tirer un avantage pratique. La provision materielle n'est pas le sujet du passage. Les versets parlent d'offrandes, de jeune et de compensations rituelles, pas d'accumulation de biens. Le profit ici est un avantage rituel — economiser un voyage — pas un gain materiel.",
      axe3_sourate: "Al-Baqarah utilise la racine m-t-e dans plusieurs contextes. Le concept de jouissance temporaire est le sens dominant dans la sourate — jouissance de la vie, des biens, du delai accorde. La provision est un aspect de la jouissance mais elle ne la resume pas. La sourate montre que la jouissance est toujours temporaire et soumise a des conditions. Le bien materiel est trop statique pour rendre compte de la dynamique de jouissance temporaire.",
      axe4_coherence: "Le Coran utilise la racine m-t-e pour designer une jouissance limitee dans le temps. Les versets qui emploient cette racine insistent toujours sur le caractere temporaire du profit. Le concept de bien ou provision evoque quelque chose de durable et de stockable, ce qui contredit la notion de jouissance ephemere. La coherence coranique oriente vers le profit temporaire plutot que vers la provision permanente.",
      axe5_frequence: "Pour la mission du khalifa, la gestion des biens materiels est essentielle mais elle n'est pas ce que le verset enseigne. Le verset traite de l'organisation des rites pour le benefice des croyants. Le khalifa doit faciliter la pratique religieuse en permettant des combinaisons avantageuses. La provision materielle est un moyen au service de cette facilitation, pas une fin en soi dans le contexte du pelerinage."
    }
  }});

  console.log('--- V196 (vid=203): nsk/p34 "Devotion/Culte" ---');
  await fixVWA(203, 'nsk', 34, { concepts: {
    "Devotion/Culte": {
      axe1_verset: "Dans ce verset, le mot nusuk designe l'offrande sacrificielle dans le cadre du pelerinage. Le concept de devotion ou culte evoque l'ensemble des pratiques d'adoration et de piete. La racine n-s-k porte les deux sens — le sacrifice rituel specifique et la devotion au sens large. Le verset utilise nusuk dans le sens precis de sacrifice animal, pas dans le sens general de devotion ou de piete personnelle.",
      axe2_voisins: "Les versets voisins traitent des regles pratiques du pelerinage — offrandes, compensations, jeune. Le contexte est rituel et prescriptif. La devotion comme concept general est trop large pour ce passage qui detaille des obligations precises. Les versets enumerent des alternatives concretes — sacrifice, jeune, aumone — pas des attitudes spirituelles generales. Le nusuk est un acte specifique dans une liste d'obligations alternatives.",
      axe3_sourate: "Al-Baqarah traite des rites avec precision juridique. Le concept de devotion est present dans la sourate mais dans des passages differents — l'appel a l'adoration exclusive, la patience dans l'epreuve. Dans les passages rituels du pelerinage, la sourate est technique et prescriptive. La devotion est l'esprit qui anime les rites mais le verset traite de la lettre — quelle offrande, quel jeune, quelle compensation.",
      axe4_coherence: "Le Coran utilise la racine n-s-k dans les deux sens — sacrifice rituel et devotion. Les versets qui parlent de mansak ou nusuk dans le contexte du pelerinage designent toujours des rites specifiques, pas la devotion en general. Le Coran a d'autres racines pour exprimer la devotion — e-b-d, q-n-t, x-sh-e. La coherence coranique montre que nusuk dans un contexte de pelerinage designe le rite sacrificiel.",
      axe5_frequence: "Pour la mission du khalifa, la devotion est la motivation interieure qui donne sens aux rites. Cependant le khalifa doit aussi organiser les rites concretement — prevoir les sacrifices, gerer les lieux, distribuer la viande. La devotion sans organisation rituelle est vaine, et les rites sans devotion sont vides. Le verset traite de l'aspect organisationnel — le sacrifice — que le khalifa doit administrer pour le bien de la communaute."
    }
  }});

  // ===================================================================
  // V196 (vid=203): WARNINGS — axes trop courts (occurrences 2/3/4)
  // ===================================================================
  console.log('\n--- V196 (vid=203): Expansion des axes trop courts ---');

  // Helper pour expander les axes courts d'un concept retenu
  async function expandShortAxes(vid, wk, pos, expandedAxes) {
    const { data } = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', vid).eq('word_key', wk).eq('position', pos).single();
    if (!data) { console.log(`  SKIP ${wk}/p${pos} vid=${vid}`); return; }
    const axes = { ...data.analysis_axes };
    const concepts = { ...axes.concepts };
    for (const [cn, cd] of Object.entries(concepts)) {
      if (cd.status === 'retenu') {
        const updated = { ...cd };
        for (const [ak, av] of Object.entries(expandedAxes)) {
          if (!updated[ak] || updated[ak].length < 100) {
            updated[ak] = av;
          }
        }
        concepts[cn] = updated;
      }
    }
    axes.concepts = concepts;
    const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
    console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos} (expanded)`);
  }

  // alh/p69 — Allah dans "craignez Dieu (ittaqu Allah)"
  await expandShortAxes(203, 'alh', 69, {
    axe2_voisins: "Les versets voisins traitent des rites du pelerinage et de la crainte de Dieu qui doit accompagner chaque acte rituel. Le rappel d'Allah intervient comme conclusion apres les prescriptions detaillees. Les versets precedents ont enumere les obligations — sacrifice, jeune, compensation — et ce rappel recentre l'attention sur Celui pour qui ces rites sont accomplis. Le contexte montre que la mention d'Allah unifie les prescriptions sous une autorite unique.",
    axe3_sourate: "Al-Baqarah mentionne le nom Allah dans des contextes tres varies — legislatif, narratif, invocatoire. Dans les passages du pelerinage, le nom divin sert a rappeler que les rites ne sont pas de simples formalites mais des actes d'obeissance au Createur. La sourate utilise systematiquement le rappel d'Allah pour conclure les passages prescriptifs et redonner du sens aux obligations detaillees precedemment.",
    axe4_coherence: "Le Coran utilise le nom Allah comme point d'ancrage de toute legislation. Chaque bloc de prescriptions se termine par un rappel du legislateur divin. Cette structure est coherente dans tout le Coran — les regles sont toujours rattachees a leur source. Le nom divin dans un contexte legislatif porte l'autorite absolue du decret et empeche que les rites soient reduits a de simples conventions humaines.",
    axe5_frequence: "Pour la mission du khalifa, le rappel constant de l'autorite divine est essentiel a la legitimite de la gouvernance. Le khalifa applique la loi divine, pas sa propre volonte. Chaque prescription doit etre rattachee a sa source divine pour eviter l'arbitraire. Le nom Allah dans ce contexte rappelle au khalifa que son pouvoir est delegue et que les rites qu'il administre appartiennent au Createur, pas au gouvernant."
  });

  // alh/p73 — Allah dans "sachez qu'Allah est severe en chatiment"
  await expandShortAxes(203, 'alh', 73, {
    axe2_voisins: "Les versets voisins concluent le passage sur le pelerinage par un avertissement divin. Apres les prescriptions detaillees, le rappel de la severite divine fonctionne comme un mecanisme de dissuasion contre la desobeissance. Les versets precedents ont pose les regles, ce verset rappelle les consequences de leur transgression. Le contexte montre que la mention d'Allah ici est une mise en garde, pas une simple invocation.",
    axe3_sourate: "Al-Baqarah alterne entre promesses et avertissements pour motiver l'obeissance. Le nom Allah apparait dans les deux registres — misericorde et chatiment. Dans les passages legislatifs, la mention du chatiment divin sert a renforcer l'obligation. La sourate ne se contente pas de prescrire, elle fournit les motivations — recompense pour l'obeissant, chatiment pour le transgresseur — et le nom divin porte ces deux dimensions.",
    axe4_coherence: "Le Coran associe systematiquement la legislation a l'avertissement divin. Les passages prescriptifs se terminent souvent par un rappel de la puissance et de la severite d'Allah. Cette structure renforce le caractere obligatoire des prescriptions en rappelant que leur Auteur a le pouvoir de punir la desobeissance. La coherence coranique montre que legislation et avertissement sont inseparables dans le discours divin.",
    axe5_frequence: "Pour la mission du khalifa, l'avertissement divin donne du poids aux lois qu'il administre. Le khalifa ne punit pas de sa propre autorite mais au nom de la justice divine. La severite d'Allah en chatiment dissuade les transgresseurs et soutient le pouvoir du khalifa dans l'application de la loi. Sans cette dimension dissuasive, les prescriptions risquent d'etre ignorees par ceux qui ne craignent pas l'autorite humaine."
  });

  // emr/p39 — amr dans "quiconque a joui de l'Umra..."
  await expandShortAxes(203, 'emr', 39, {
    axe2_voisins: "Les versets voisins traitent des details pratiques du pelerinage. Le mot de la racine a-m-r intervient ici dans un contexte de prescription conditionnelle — si telle condition est remplie, alors tel commandement s'applique. Les versets environnants enumerent des obligations et des compensations, et ce mot de commandement relie la condition a l'obligation. Le contexte montre que l'ordre divin s'adapte aux situations specifiques du pelerin.",
    axe3_sourate: "Al-Baqarah est une sourate de commandements par excellence. La racine a-m-r traverse toute la sourate pour exprimer les ordres divins — prier, jeuner, combattre, depenser. Dans le passage du pelerinage, les commandements sont particulierement detailles car les rites exigent une precision qui ne laisse pas de place a l'improvisation. La sourate utilise cette racine pour structurer la relation d'obeissance entre Dieu et les croyants.",
    axe4_coherence: "Le Coran utilise la racine a-m-r dans des contextes tres varies — ordres divins, commandements prophetiques, affaires humaines. La coherence coranique montre que le sens dominant dans les passages legislatifs est celui du commandement divin qui oblige. Les versets du pelerinage s'inscrivent dans cette logique — chaque prescription est un ordre auquel le croyant doit se conformer sans questionner sa pertinence.",
    axe5_frequence: "Pour la mission du khalifa, le commandement est l'instrument premier de la gouvernance. Le khalifa transmet et applique les commandements divins dans la societe. Dans le contexte du pelerinage, le khalifa doit organiser les rites conformement aux ordres coraniques. Le commandement divin fonde la legitimite de l'organisation rituelle et empeche que les rites soient modifies selon les convenances humaines."
  });

  // hdy/p17 — guidance dans "l'offrande de ce qui est aise (mina al-hadyi)"
  await expandShortAxes(203, 'hdy', 17, {
    axe2_voisins: "Les versets voisins prescrivent les conditions du pelerinage combine — Umra puis Hajj. Le mot hadyi designe l'offrande animale que le pelerin doit sacrifier. Les versets detaillent les alternatives pour ceux qui ne peuvent pas offrir de sacrifice — trois jours de jeune pendant le pelerinage et sept au retour. Le contexte est celui des compensations rituelles proportionnelles aux moyens du pelerin.",
    axe3_sourate: "Al-Baqarah traite des sacrifices et des offrandes dans le cadre legislatif du pelerinage. La sourate utilise la racine h-d-y ici dans le sens specifique d'offrande sacrificielle, distinct du sens plus courant de guidance divine. La sourate distingue les deux emplois par le contexte — la guidance appartient aux passages theologiques, l'offrande aux passages rituels. Le hadyi est un terme technique du pelerinage.",
    axe4_coherence: "Le Coran utilise la racine h-d-y dans deux registres distincts — la guidance spirituelle et l'offrande sacrificielle. Les deux sens coexistent dans le Coran sans confusion car le contexte les distingue clairement. Dans les versets du pelerinage, le hadyi est toujours l'animal offert en sacrifice, jamais la guidance abstraite. La coherence coranique montre que le contexte rituel determine le sens technique de la racine.",
    axe5_frequence: "Pour la mission du khalifa, l'organisation des sacrifices est une responsabilite pratique. Le khalifa doit garantir que les offrandes sont disponibles, que leur distribution est equitable et que les rites sont accomplis dans les regles. L'offrande sacrificielle est un acte social autant que religieux car la viande est distribuee aux pauvres. Le khalifa administre ce systeme de solidarite qui lie le rite a la justice sociale."
  });

  // hdy/p45 — guidance/offrande dans un autre contexte du meme verset
  await expandShortAxes(203, 'hdy', 45, {
    axe2_voisins: "Les versets voisins poursuivent les prescriptions du pelerinage avec les compensations et les alternatives au sacrifice. Cette occurrence de la racine h-d-y intervient dans un contexte de conditions alternatives. Les versets montrent que le systeme rituel est flexible et adapte aux capacites de chacun. Le contexte est celui de la facilitation divine — Dieu ne charge personne au-dela de ses moyens.",
    axe3_sourate: "Al-Baqarah revient plusieurs fois sur les rites du pelerinage dans ce passage en detaillant progressivement les cas particuliers. La repetition de la racine h-d-y montre l'importance de l'offrande dans le systeme rituel du pelerinage. La sourate construit un edifice legislatif ou chaque element est relie aux autres par des conditions et des alternatives. L'offrande est un pivot de ce systeme de compensations mutuelles.",
    axe4_coherence: "Le Coran repete la racine h-d-y dans le meme passage pour couvrir differents cas de figure. Cette repetition n'est pas une redondance mais une precision juridique — chaque occurrence traite d'un aspect different de l'obligation sacrificielle. La coherence coranique montre que la legislation rituelle exige une precision qui justifie les repetitions car chaque situation a ses propres regles et exceptions.",
    axe5_frequence: "Pour la mission du khalifa, la repetition des prescriptions dans differents contextes permet une application plus fine de la loi. Le khalifa doit connaitre chaque cas de figure pour rendre justice a chaque pelerin selon sa situation. La multiplicite des occurrences de l'offrande dans le meme passage equipe le khalifa d'un arsenal juridique complet pour traiter les cas particuliers avec equite et precision."
  });

  // hjj/p41 — pelerinage 2e occurrence
  await expandShortAxes(203, 'hjj', 41, {
    axe2_voisins: "Les versets voisins detaillent les conditions du pelerinage combine — jouir de l'Umra puis accomplir le Hajj. Cette occurrence de la racine h-j-j intervient dans le contexte de la combinaison des deux rites. Les versets prescrivent les offrandes et les jeunes necessaires pour ceux qui combinent les deux pelerinages. Le contexte montre que le hajj est ici un element d'un systeme rituel plus large avec des obligations specifiques.",
    axe3_sourate: "Al-Baqarah consacre un passage substantiel au pelerinage, signe de son importance dans le systeme legislatif coranique. La sourate traite le hajj comme une institution complete avec ses regles, ses exceptions et ses compensations. Cette occurrence participe a la construction de ce cadre legislatif en precisant les modalites du pelerinage combine. La sourate montre que le hajj n'est pas un rite isole mais une institution sociale complexe.",
    axe4_coherence: "Le Coran revient sur le pelerinage dans plusieurs sourates mais c'est dans Al-Baqarah que la legislation est la plus detaillee. La repetition de la racine h-j-j dans le meme passage couvre differentes facettes du rite. La coherence coranique montre que chaque occurrence apporte une precision juridique supplementaire. Le pelerinage est un sujet suffisamment complexe pour necessiter plusieurs mentions dans un meme passage legislatif.",
    axe5_frequence: "Pour la mission du khalifa, l'organisation du pelerinage est une des plus grandes responsabilites de gouvernance. Des millions de personnes convergent vers un meme lieu en un meme temps. Le khalifa doit gerer la logistique, la securite, les sacrifices et les compensations. Chaque precision du texte coranique sur le hajj est un outil de gouvernance que le khalifa utilise pour organiser cet evenement majeur de la communaute."
  });

  // hjj/p53 — pelerinage 3e occurrence
  await expandShortAxes(203, 'hjj', 53, {
    axe2_voisins: "Les versets voisins traitent des prescriptions specifiques pendant la periode du pelerinage — pas de rapports conjugaux, pas de perversite, pas de disputes. Cette occurrence de la racine h-j-j definit la periode pendant laquelle ces interdictions s'appliquent. Le contexte est celui de la sacralisation du temps — le pelerinage cree une parenthese dans la vie ordinaire ou des regles speciales s'appliquent. Les versets montrent que le hajj transforme le comportement du pelerin.",
    axe3_sourate: "Al-Baqarah presente le pelerinage comme un temps de discipline morale intense. La sourate ne se contente pas de decrire les rites physiques — elle legifere sur le comportement du pelerin pendant cette periode sacree. Cette occurrence montre que le hajj est autant un exercice de maitrise de soi qu'un ensemble de rites exterieurs. La sourate integre la dimension morale dans le cadre legislatif du pelerinage.",
    axe4_coherence: "Le Coran associe systematiquement les rites exterieurs a la reforme interieure. Le pelerinage n'echappe pas a cette regle — les gestes rituels sont accompagnes d'exigences morales strictes. La coherence coranique montre que le hajj est un microcosme de la vie du croyant — obeissance exterieure et discipline interieure. Cette occurrence precise les dimensions morales du pelerinage qui completent ses dimensions rituelles.",
    axe5_frequence: "Pour la mission du khalifa, la dimension morale du pelerinage est aussi importante que sa logistique. Le khalifa doit veiller a ce que le hajj soit un temps de reformation morale pour les pelerins, pas simplement un deplacement physique. Les interdictions morales pendant le pelerinage — disputes, perversite — preparent le pelerin a devenir un meilleur citoyen a son retour. Le hajj est une ecole de gouvernance de soi."
  });

  // kwn/p62 — etre/devenir
  await expandShortAxes(203, 'kwn', 62, {
    axe2_voisins: "Les versets voisins traitent des conditions qui determinent les obligations du pelerin. Le mot de la racine k-w-n intervient ici pour exprimer un etat ou une condition — celui dont la famille reside pres de la Mosquee. Les versets distinguent les situations des pelerins selon leur lieu de residence. Le contexte montre que l'etre ou le devenir est utilise ici comme un marqueur de condition juridique, pas comme un concept philosophique.",
    axe3_sourate: "Al-Baqarah utilise la racine k-w-n abondamment dans ses passages legislatifs pour definir des conditions et des etats. La sourate legifere selon les situations — si tu es malade, si tu es en voyage, si ta famille reside pres de la Mosquee. Le verbe etre est un outil syntaxique qui permet de moduler les prescriptions selon les circonstances de chacun. La sourate construit un droit casuistique ou chaque condition a sa regle.",
    axe4_coherence: "Le Coran utilise la racine k-w-n comme un outil linguistique fondamental pour exprimer les etats, les conditions et les transformations. La coherence coranique montre que ce verbe est avant tout fonctionnel dans les passages legislatifs — il sert a poser des conditions, pas a philosopher sur l'etre. Chaque occurrence de cette racine dans un contexte de loi est un marqueur conditionnel qui adapte la prescription a la realite.",
    axe5_frequence: "Pour la mission du khalifa, la capacite de distinguer les situations est essentielle a la justice. Le khalifa ne peut pas appliquer une regle unique a toutes les situations. Le verbe etre dans ce contexte lui fournit les criteres de distinction — etre resident ou non, etre malade ou en sante, etre en voyage ou sedentaire. La casuistique coranique equipe le khalifa des outils necessaires a une gouvernance equitable et adaptee."
  });

  // ras/p27 — tete/raser
  await expandShortAxes(203, 'ras', 27, {
    axe2_voisins: "Les versets voisins traitent des interdictions et des compensations pendant l'ihram. Le rasage de la tete est mentionne comme une action interdite pendant l'etat de sacralisation sauf en cas de maladie. Les versets prescrivent des compensations — jeune, aumone ou sacrifice — pour celui qui se rase par necessite. Le contexte montre que la tete est le lieu physique ou s'applique une interdiction rituelle specifique liee a l'etat de sacralisation.",
    axe3_sourate: "Al-Baqarah traite des prescriptions corporelles dans le cadre du pelerinage. Le corps du pelerin est soumis a des regles specifiques pendant l'ihram — ne pas couper les cheveux, ne pas se parfumer, ne pas avoir de rapports. La sourate montre que le pelerinage engage le corps entier dans un etat de sacralite. La tete et ses cheveux sont un element concret de cette sacralisation corporelle que la sourate legifere avec precision.",
    axe4_coherence: "Le Coran mentionne le rasage de la tete dans le contexte du pelerinage comme un marqueur de desacralisation. Le pelerin se rase la tete a la fin du rite pour marquer son retour a l'etat ordinaire. La coherence coranique montre que les actes corporels — raser, circambuler, courir entre les monts — constituent la grammaire physique du pelerinage. Chaque geste a une signification rituelle que le Coran legifere.",
    axe5_frequence: "Pour la mission du khalifa, la reglementation des actes corporels pendant le pelerinage fait partie de l'administration des rites. Le khalifa doit connaitre les interdictions et les compensations pour guider les pelerins qui transgressent par necessite. Le rasage de la tete illustre la precision avec laquelle le Coran traite le corps dans le rite. Le khalifa applique cette precision dans l'organisation du pelerinage."
  });

  // swm/p49 — jeune
  await expandShortAxes(203, 'swm', 49, {
    axe2_voisins: "Les versets voisins proposent le jeune comme alternative au sacrifice pour les pelerins qui ne trouvent pas d'offrande. Le jeune est ici un mecanisme de compensation — trois jours pendant le pelerinage et sept au retour. Les versets montrent que le systeme rituel est flexible et prevoit des alternatives accessibles a tous. Le contexte montre que le jeune n'est pas une punition mais une solution equitable pour les pelerins demunis.",
    axe3_sourate: "Al-Baqarah traite du jeune dans deux contextes differents — le jeune de Ramadan et le jeune compensatoire du pelerinage. Les deux usages partagent la meme racine s-w-m mais different dans leur fonction. Le jeune de Ramadan est une obligation universelle, le jeune compensatoire est une alternative individuelle. La sourate montre que le jeune est un outil polyvalent dans le systeme legislatif islamique — discipline, compensation, purification.",
    axe4_coherence: "Le Coran utilise le jeune comme mecanisme de compensation dans plusieurs contextes — rupture de serment, pelerinage, expiation. Le jeune est toujours l'alternative accessible a celui qui ne peut pas offrir autre chose. La coherence coranique montre que le jeune est l'ultime recours — quand on ne peut ni sacrifier ni nourrir les pauvres, on jeune. Le jeune est l'egalisation par le corps quand les moyens materiels manquent.",
    axe5_frequence: "Pour la mission du khalifa, le jeune comme compensation garantit que personne n'est exclu des rites par la pauvrete. Le khalifa doit veiller a ce que les alternatives soient connues et accessibles a tous. Le systeme de compensation par le jeune est un mecanisme d'equite sociale que le khalifa administre pour s'assurer que le pelerinage reste accessible a tous les croyants, quelles que soient leurs ressources materielles."
  });

  // ysr/p43 — facilite/aisance
  await expandShortAxes(203, 'ysr', 43, {
    axe2_voisins: "Les versets voisins prescrivent ce qui est aise comme offrande — mina al-hadyi ma istaysara. Le contexte est celui de la facilitation divine dans les rites du pelerinage. Les versets precedents et suivants montrent que Dieu adapte les obligations aux capacites de chacun. L'aisance n'est pas un luxe mais un principe legislatif — Dieu ne charge personne au-dela de ses moyens. Les compensations alternatives confirment ce principe d'accessibilite.",
    axe3_sourate: "Al-Baqarah affirme explicitement que Dieu veut la facilite pour les croyants, pas la difficulte. Ce principe traverse toute la sourate dans les passages legislatifs. La racine y-s-r apparait dans les prescriptions du jeune et du pelerinage pour moduler les obligations. La sourate construit un systeme ou la rigueur des prescriptions est temperee par la misericorde divine qui allegue les fardeaux excessifs.",
    axe4_coherence: "Le Coran utilise la racine y-s-r comme un principe hermeneutique fondamental — la facilite est l'intention divine. Les versets legislatifs du Coran intègrent systematiquement des mecanismes d'allegement pour les situations difficiles. La coherence coranique montre que l'aisance n'est pas une concession mais un choix delibere du Legislateur. La facilite est un attribut de la legislation divine, pas une faiblesse.",
    axe5_frequence: "Pour la mission du khalifa, la facilite est un principe de gouvernance majeur. Le khalifa doit appliquer la loi avec rigueur mais aussi avec misericorde, en tenant compte des capacites de chacun. Un systeme legal qui ne prevoit pas d'allegements ecrase les faibles et exclut les demunis. Le khalifa incarne la facilite divine en administrant un systeme juste et accessible ou chacun peut remplir ses obligations selon ses moyens."
  });

  // ===================================================================
  // V198 (vid=205): rbb/p7 (2 concepts) + sher/p15
  // ===================================================================
  console.log('\n--- V198 (vid=205): rbb/p7 "Croissance/Augmentation" ---');
  await fixVWA(205, 'rbb', 7, { concepts: {
    "Croissance/Augmentation": AXES_RBB_CROISSANCE,
    "Education/Accompagnement": AXES_RBB_EDUCATION
  }});

  console.log('--- V198 (vid=205): sher/p15 "Conscience/Perception" ---');
  await fixVWA(205, 'sher', 15, { concepts: {
    "Conscience/Perception": {
      axe1_verset: "Dans ce verset, le mot al-mash'ar designe le lieu sacre de Muzdalifa ou les pelerins s'arretent apres Arafat. Le concept de conscience ou perception evoque la faculte de sentir et de percevoir. La racine sh-e-r porte le sens de sentir, percevoir, etre conscient. Le verset utilise cette racine dans son sens toponymique — le lieu ou l'on prend conscience, le lieu de la perception sacree — pas dans le sens abstrait de conscience individuelle.",
      axe2_voisins: "Les versets voisins decrivent le deroulement du pelerinage — le deversement depuis Arafat, le rappel de Dieu au Mash'ar sacre. Le contexte est geographique et rituel. La conscience comme faculte mentale n'est pas le sujet du passage qui traite d'un itineraire physique. Le Mash'ar est un lieu concret ou le pelerin s'arrete, pas un etat de conscience. Les versets tracent un parcours spatial, pas un parcours interieur.",
      axe3_sourate: "Al-Baqarah mentionne les lieux sacres du pelerinage dans le cadre de ses prescriptions rituelles. La sourate traite le Mash'ar comme une station du parcours pelerin, au meme titre qu'Arafat et Mina. Le concept de conscience est etymologiquement present dans le nom du lieu mais la sourate utilise le toponyme, pas le concept. La sourate est ici topographique et prescriptive, pas psychologique ou philosophique.",
      axe4_coherence: "Le Coran utilise la racine sh-e-r dans plusieurs sens — poesie, perception, conscience, et comme toponyme. Le Mash'ar al-Haram est un lieu specifique dont le nom evoque la perception mais dont l'usage coranique est topographique. La coherence coranique montre que les lieux sacres portent des noms significatifs mais que le texte les traite comme des etapes rituelles concretes. Le sens du nom enrichit la comprehension sans remplacer la reference geographique.",
      axe5_frequence: "Pour la mission du khalifa, la gestion des lieux sacres est une responsabilite majeure. Le Mash'ar al-Haram est une etape du pelerinage que le khalifa doit administrer — accueil des pelerins, organisation des invocations nocturnes, gestion des flux. La conscience est une qualite que le khalifa cultive mais la gestion du Mash'ar est une tache pratique qui exige de la logistique, pas seulement de la perception interieure."
    }
  }});

  // ===================================================================
  // V200 (vid=207): khlq/p25 concept_chosen fix + qdy/p2 + rbb/p17 + shdd/p11
  // ===================================================================
  console.log('\n--- V200 (vid=207): khlq/p25 — concept_chosen fix ---');
  {
    const { data: khlqData } = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 207).eq('word_key', 'khlq').eq('position', 25).single();
    if (khlqData) {
      const conceptNames = Object.keys(khlqData.analysis_axes.concepts || {});
      console.log('  khlq concepts:', conceptNames.join(', '));
      // Find the retenu concept
      let retenuName = null;
      for (const [cn, cd] of Object.entries(khlqData.analysis_axes.concepts || {})) {
        if (cd.status === 'retenu') retenuName = cn;
      }
      if (retenuName && retenuName !== khlqData.analysis_axes.concept_chosen) {
        console.log(`  Fixing concept_chosen: "${khlqData.analysis_axes.concept_chosen}" -> "${retenuName}"`);
        await fixVWA(207, 'khlq', 25, { concept_chosen: retenuName });
      } else if (!retenuName) {
        // Look for a concept that matches "Creation" or "Formation"
        const found = conceptNames.find(n => n.includes('reation') || n.includes('ormation'));
        if (found) {
          // Set its status to retenu and fix concept_chosen
          const axes = { ...khlqData.analysis_axes };
          axes.concepts = { ...axes.concepts };
          axes.concepts[found] = { ...axes.concepts[found], status: 'retenu' };
          axes.concept_chosen = found;
          const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', khlqData.id);
          console.log(error ? `  ERR khlq/p25: ${error.message}` : `  OK khlq/p25 concept_chosen="${found}" + status=retenu`);
        } else {
          console.log('  WARN: no Creation/Formation concept found, concepts are:', conceptNames);
        }
      } else {
        console.log(`  OK khlq/p25 already correct: concept_chosen="${retenuName}"`);
      }
    } else {
      console.log('  SKIP khlq/p25 vid=207 — not found');
    }
  }

  console.log('\n--- V200 (vid=207): qdy/p2 "Resolution/Decision" ---');
  await fixVWA(207, 'qdy', 2, { concepts: {
    "Resolution/Decision": {
      axe1_verset: "Dans ce verset, le mot qadaytum signifie 'quand vous aurez acheve' vos rites. Le concept de resolution ou decision evoque le fait de prendre une decision et de la mettre en oeuvre. La racine q-d-y porte les sens de juger, decreter, achever. Le verset utilise cette racine dans le sens d'accomplir et de mener a terme, pas dans le sens de prendre une decision judiciaire. L'achevement est le resultat d'une decision anterieure, pas la decision elle-meme.",
      axe2_voisins: "Les versets voisins traitent des invocations apres le pelerinage et de la maniere dont les croyants doivent invoquer Dieu. Le contexte marque la transition entre la fin des rites et ce qui suit. La resolution comme concept decisionnaire impliquerait un choix en cours, or les rites sont deja acheves. Le verset parle d'un accomplissement passe, pas d'une decision a prendre. L'achevement ferme un chapitre, la resolution en ouvre un.",
      axe3_sourate: "Al-Baqarah utilise la racine q-d-y dans plusieurs contextes — jugement divin, achevement d'une tache, resolution d'un litige. La sourate distingue ces sens par le contexte. Dans le passage du pelerinage, le sens d'achevement est naturel car les rites sont des actions a accomplir. La sourate ne parle pas de decision a prendre mais d'obligations a remplir puis a conclure. L'achevement est le mot juste pour ce contexte rituel.",
      axe4_coherence: "Le Coran utilise la racine q-d-y dans les deux registres — judiciaire et accomplissement. Le sens judiciaire apparait dans les versets de jugement et de decret divin. Le sens d'accomplissement apparait dans les versets rituels et pratiques. La coherence coranique montre que le contexte determine le sens pertinent. Dans un verset sur la fin des rites, c'est l'accomplissement qui prevaut sur la decision judiciaire.",
      axe5_frequence: "Pour la mission du khalifa, l'achevement des obligations est un critere d'evaluation de la gouvernance. Le khalifa doit s'assurer que les rites sont menes a terme correctement par la communaute. La resolution comme decision est une autre facette de sa mission — il decide et il tranche. Mais dans ce verset, c'est l'achevement qui est en vue. Le khalifa doit accompagner la communaute jusqu'a l'accomplissement complet de ses devoirs rituels."
    }
  }});

  console.log('--- V200 (vid=207): rbb/p17 "Croissance/Augmentation" + "Education/Accompagnement" ---');
  await fixVWA(207, 'rbb', 17, { concepts: {
    "Croissance/Augmentation": AXES_RBB_CROISSANCE,
    "Education/Accompagnement": AXES_RBB_EDUCATION
  }});

  console.log('--- V200 (vid=207): shdd/p11 "Severite/Durete" ---');
  await fixVWA(207, 'shdd', 11, { concepts: {
    "Severite/Durete": {
      axe1_verset: "Dans ce verset, le mot ashadda signifie 'plus intense, plus fort' — les croyants invoquent Dieu avec plus d'ardeur. Le concept de severite ou durete evoque la rigueur et l'inflexibilite. La racine sh-d-d porte le sens de force, d'intensite, de resserrement. Le verset utilise cette racine dans le sens d'intensite emotionnelle — une invocation plus ardente, plus passionnee — pas dans le sens de severite ou de durete envers quelqu'un.",
      axe2_voisins: "Les versets voisins traitent des invocations apres le pelerinage et du rappel de Dieu avec ferveur. Le contexte est celui de la devotion intense, pas de la rigueur punitive. La severite impliquerait une durete de caractere ou une rigueur dans le jugement, or le verset parle d'intensite dans l'invocation. Les versets encouragent une relation fervente avec Dieu, pas une attitude severe envers les autres.",
      axe3_sourate: "Al-Baqarah utilise la racine sh-d-d dans plusieurs contextes — l'intensite du chatiment, la force de l'attachement, l'ardeur de la priere. La sourate ne confond pas l'intensite positive de la devotion avec la severite punitive. Dans ce passage sur l'invocation post-pelerinage, l'intensite est une qualite de la relation avec Dieu. La severite appartient a un autre registre — celui du chatiment et de la justice, absent de ce verset.",
      axe4_coherence: "Le Coran utilise la racine sh-d-d pour exprimer toute forme d'intensite — positive comme negative. L'intensite du chatiment est severe, l'intensite de l'invocation est fervente. La coherence coranique montre que la racine est polyvalente et que le contexte determine la coloration. Dans un verset d'invocation, la force est ferveur et passion, pas rigueur et durete. La severite est un contresens dans ce contexte devotionnel.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre intensite et severite est importante pour la gouvernance. Le khalifa doit etre fervent dans sa devotion mais pas dur envers les gouvernes. L'intensite de l'invocation montre un coeur engage, la severite montre un caractere inflexible. Le khalifa ideal est celui qui prie avec ardeur et gouverne avec justice et compassion. L'intensite devotionnelle et la severite gouvernementale ne sont pas la meme chose."
    }
  }});

  console.log('\n=== FIX V191-200 TERMINE ===');
}

main().catch(console.error);
