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
  const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
  console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos}`);
}

// ============================================================
// Axes reutilisables pour concepts qui reviennent plusieurs fois
// ============================================================

const AXES_RETARD_LENTEUR = {
  axe1_verset: "Dans ce verset, la racine a-th-m renvoie au peche, a la faute morale. Le concept de retard ou de lenteur evoque l'idee de trainer, de ne pas agir a temps. Le peche peut effectivement etre vu comme un retard dans l'obeissance ou un ralentissement du cheminement spirituel. Cependant le verset met l'accent sur la culpabilite et la transgression, pas sur la lenteur. Le retard est une consequence possible du peche mais pas sa nature premiere dans ce contexte.",
  axe2_voisins: "Les versets voisins traitent de prescriptions legales sur le testament et les obligations successorales. Le contexte est celui de la responsabilite juridique, pas de la temporalite. La lenteur impliquerait un probleme de rythme ou de delai, or le texte parle de faute morale deliberee. Les prescriptions environnantes exigent une action juste, pas une action rapide. Le retard n'est pas le sujet du passage legislatif.",
  axe3_sourate: "Al-Baqarah etablit un cadre normatif ou le peche est defini par rapport a la loi divine. La sourate distingue clairement les transgressions volontaires des manquements involontaires. La lenteur releve davantage du manquement que de la transgression deliberee. La sourate met en garde contre la desobeissance consciente, pas contre la procrastination. Le concept de retard manque la gravite que la sourate attribue au peche.",
  axe4_coherence: "Le Coran utilise la racine a-th-m pour designer des fautes graves — le mensonge, la calomnie, la transgression des limites divines. Le retard ou la lenteur n'atteint pas ce niveau de gravite dans le registre coranique. Les versets qui emploient cette racine evoquent toujours une rupture morale, pas un simple delai. La coherence coranique oriente vers la faute deliberee plutot que vers le ralentissement.",
  axe5_frequence: "Pour la mission du khalifa, la distinction entre le peche et le retard est fondamentale pour la justice. Un retard peut etre excuse par les circonstances, mais un peche engage la responsabilite individuelle. Le khalifa doit juger les actes selon leur nature morale, pas selon leur temporalite. La lenteur dans l'obeissance est un defaut mineur compare a la transgression volontaire que le verset vise."
};

const AXES_ADORATION_CULTE = {
  axe1_verset: "Dans ce verset, le mot Allah designe le Createur comme source de legislation et d'autorite. Le concept d'adoration ou de culte evoque les pratiques devotionnelles et rituelles. Or le verset traite de prescriptions pratiques — le jeune, la nuit, les relations conjugales — pas de rituels d'adoration pure. Le nom divin apparait ici comme legislateur et regulateur, pas comme objet de contemplation mystique ou de louange.",
  axe2_voisins: "Les versets voisins detaillent les regles du jeune et les permissions nocturnes. Le contexte est entierement legislatif et pratique. L'adoration au sens cultuel impliquerait des invocations, des prieres ou des louanges. Le passage ne contient rien de tel — il enumere des permissions et des interdictions. Le nom divin sert a authentifier la source des regles, pas a susciter un acte de devotion.",
  axe3_sourate: "Al-Baqarah utilise le nom Allah dans des contextes tres divers — legislatifs, narratifs, theologiques. Le concept d'adoration est present dans la sourate mais dans des passages specifiques comme l'appel a l'adoration exclusive. Dans les passages legislatifs comme celui-ci, le nom divin fonctionne comme signature d'autorite. La sourate ne confond pas les registres — la legislation et la devotion ont chacune leur place.",
  axe4_coherence: "Le Coran distingue les versets d'adoration pure (tasbih, hamd) des versets legislatifs (ahkam). Les deux registres coexistent mais ne se melangent pas sans raison. Le nom Allah dans un contexte legislatif porte l'autorite du legislateur. Le reduire au concept d'adoration dans un passage de regles pratiques appauvrit la fonction legislative du texte et brouille la distinction entre les deux registres.",
  axe5_frequence: "Pour la mission du khalifa, la distinction entre adoration et legislation est cruciale. Le khalifa applique les lois divines dans la societe — il ne dirige pas le culte. Reconnaitre Allah comme legislateur dans les passages de loi permet au khalifa de fonder son autorite juridique. Reduire le nom divin a l'adoration dans ce contexte priverait le khalifa de la base legale necessaire a sa mission de gouvernance."
};

const AXES_SEPARATION_ELOIGNEMENT_BYN = {
  axe1_verset: "Dans ce verset, la racine b-y-n est utilisee dans le sens de rendre clair, expliquer, montrer. Le concept de separation ou d'eloignement evoque la distance entre deux choses. Or le verset emploie cette racine pour parler de clarification — rendre les signes ou les regles manifestes. La separation est un sens etymologique present dans la racine car clarifier c'est distinguer, mais le verset met l'accent sur l'explication, pas sur l'eloignement.",
  axe2_voisins: "Les versets voisins traitent de prescriptions detaillees sur le jeune et les regles de conduite. Le contexte est celui de l'enseignement et de la clarification des regles. La separation impliquerait une rupture ou un eloignement qui ne correspond pas au propos pedagogique du passage. Les versets cherchent a rapprocher le croyant de la comprehension, pas a creer de la distance. La clarification est l'opposee de la separation.",
  axe3_sourate: "Al-Baqarah utilise abondamment la racine b-y-n pour exprimer la clarte des signes divins. La sourate insiste sur le fait que les prescriptions sont claires et sans ambiguite. Le concept de separation est pertinent au niveau etymologique car clarifier implique de separer le vrai du faux. Mais la sourate utilise cette racine dans un sens constructif — eclairer, pas diviser. La separation reste secondaire par rapport a la clarte.",
  axe4_coherence: "Le Coran emploie la racine b-y-n dans les deux sens — clarifier et separer. Les versets de legislation utilisent systematiquement le sens de clarification. Les versets de jugement dernier utilisent parfois le sens de separation entre les groupes. La coherence coranique montre que le contexte determine le sens dominant. Dans un passage legislatif, la clarification prevaut naturellement sur la separation.",
  axe5_frequence: "Pour la mission du khalifa, la clarte des lois est indispensable a la gouvernance. Le khalifa doit expliquer et rendre accessible les regles de la cite. La separation comme concept principal orienterait vers la division sociale, ce qui est contraire a la mission d'unite du khalifa. La clarification construit la cohesion en permettant a chacun de comprendre ses droits et ses devoirs. C'est le sens qui sert le mieux la mission."
};

const AXES_LIAISON_CONNEXION_WSY = {
  axe1_verset: "Dans ce verset, la racine w-s-y est utilisee dans le sens de recommander fermement, de leguer une volonte testamentaire. Le concept de liaison ou de connexion evoque un lien entre deux entites. Le testament cree effectivement un lien entre le testateur et ses heritiers, entre sa volonte et l'avenir. Cependant le testament est avant tout une injonction morale et juridique, pas un simple fil de connexion entre deux parties.",
  axe2_voisins: "Les versets voisins traitent de prescriptions successorales et de la responsabilite de ceux qui executent le testament. Le contexte est juridique et contraignant. La connexion est un aspect du testament mais elle ne rend pas compte de son caractere obligatoire. Le passage insiste sur la culpabilite de ceux qui modifient le testament, ce qui montre que c'est l'injonction qui prime, pas le lien. La liaison est trop neutre pour ce contexte.",
  axe3_sourate: "Al-Baqarah construit un systeme de devoirs reciproques entre les membres de la communaute. Le concept de connexion est present dans toute la sourate a travers les alliances et les obligations mutuelles. Le testament participe a ce reseau de liens sociaux. Cependant la sourate met l'accent sur le caractere contraignant de ces devoirs, pas sur leur fonction de liaison. L'obligation est plus structurante que la connexion.",
  axe4_coherence: "Le Coran utilise la racine w-s-y pour des injonctions solennelles — recommandations divines aux prophetes, testaments aux mourants. Le registre est toujours celui de l'autorite et de la gravite. Le concept de connexion adoucit cette gravite en reduisant l'injonction a un lien neutre. La coherence coranique montre que wasiyya est une parole qui engage et contraint, pas un simple pont entre deux parties.",
  axe5_frequence: "Pour la mission du khalifa, les connexions sociales sont necessaires mais insuffisantes. Le khalifa a besoin d'institutions contraignantes pour maintenir l'ordre. Le testament comme injonction est un outil de gouvernance plus puissant que la simple connexion. Il impose le respect de la volonte du defunt et empeche les conflits successoraux. La connexion est un effet secondaire de l'injonction, pas son essence."
};

const AXES_AFFLICTION_IMMOBILITE_SWM = {
  axe1_verset: "Dans ce verset, la racine s-w-m designe le jeune comme pratique spirituelle prescrite. Le concept d'affliction ou d'immobilite evoque la souffrance et l'arret de toute activite. Le jeune implique effectivement une forme de privation et de restriction des mouvements naturels du corps. Cependant le verset presente le jeune comme une discipline positive, pas comme une affliction. L'immobilite est un aspect du jeune mais pas son but.",
  axe2_voisins: "Les versets voisins detaillent les modalites du jeune — duree, compensations, permissions. Le contexte est pratique et organisationnel. L'affliction impliquerait que le jeune est une punition ou une souffrance imposee, ce qui contredit le ton du passage. Les versets insistent sur la facilite que Dieu veut pour les croyants, pas sur la difficulte. L'immobilite est contraire a l'esprit de ces versets qui organisent la vie quotidienne pendant le jeune.",
  axe3_sourate: "Al-Baqarah presente le jeune comme une institution benefique pour la communaute. La sourate ne traite jamais le jeune comme une affliction mais comme une discipline formatrice. Le concept d'immobilite contredit les versets qui permettent de manger la nuit et d'avoir des relations conjugales — le jeune n'est pas un arret total. La sourate equilibre restriction et permission, ce qui exclut l'idee d'affliction absolue.",
  axe4_coherence: "Le Coran presente le jeune comme un moyen d'atteindre la piete, pas comme une souffrance. Les versets sur le jeune insistent sur ses bienfaits spirituels et sur les facilites accordees aux malades et aux voyageurs. L'affliction comme concept central contredit cette vision positive. L'immobilite est dementie par les activites permises pendant le jeune — travailler, prier, vivre normalement sauf manger et boire.",
  axe5_frequence: "Pour la mission du khalifa, le jeune est un outil de discipline collective, pas une affliction imposee. Le khalifa doit promouvoir le jeune comme exercice de maitrise de soi qui renforce la solidarite sociale. L'immobilite paralyserait la societe, ce qui est contraire a la mission de gouvernance. Le jeune bien compris dynamise la communaute en developpant la patience et l'empathie envers les demunis."
};

const AXES_ECRITURE_INSCRIPTION_KTB = {
  axe1_verset: "Dans ce verset, la racine k-t-b est utilisee au passif pour exprimer une prescription divine. Le concept d'ecriture ou d'inscription evoque l'acte physique de tracer des signes sur un support. Or le verset emploie kutiba dans le sens de decreter, prescrire, imposer une obligation. L'ecriture est le moyen historique par lequel les lois sont fixees et transmises, ce qui rend ce concept adjacent mais secondaire au sens de decret.",
  axe2_voisins: "Les versets voisins traitent de prescriptions legales — jeune, testament, retribution. Le contexte est entierement legislatif. L'ecriture physique n'est pas le sujet du passage. Les prescriptions sont decretees par Dieu, pas inscrites par un scribe. Le verset sur les dettes plus loin dans la sourate traite explicitement de l'ecriture comme acte physique, confirmant que ce verset-ci parle de decret, pas d'inscription.",
  axe3_sourate: "Al-Baqarah utilise la racine k-t-b dans les deux sens — le Livre revele et les prescriptions decretees. Les passages legislatifs emploient systematiquement le sens de decret. Les passages sur les Ecritures emploient le sens de livre ecrit. La sourate distingue ces deux usages par le contexte. Dans ce passage legislatif, le sens de decret est clairement dominant et l'ecriture reste un sens etymologique de fond.",
  axe4_coherence: "Le Coran associe naturellement l'ecriture et le decret car la revelation est un texte ecrit qui contient des decrets. Les deux sens coexistent sans contradiction. Cependant dans les versets legislatifs, le Coran met l'accent sur l'obligation imposee, pas sur le support ecrit. La coherence coranique montre que kutiba dans un contexte de loi signifie 'il a ete prescrit', pas 'il a ete ecrit'.",
  axe5_frequence: "Pour la mission du khalifa, l'ecriture est un outil fondamental de gouvernance. Cependant le khalifa doit d'abord comprendre les prescriptions avant de les mettre par ecrit. Le decret divin fonde l'autorite de la loi, l'ecriture n'en est que le support materiel. Le khalifa qui confondrait ecriture et prescription risquerait de reduire la loi divine a un simple texte, en perdant la dimension d'obligation morale."
};

async function main() {
  console.log('=== FIX V181-190 ===\n');

  // ===================================================================
  // V181 (vid=188): athm/p6 "Retard/Lenteur"
  // ===================================================================
  console.log('--- V181 (vid=188): athm/p6 "Retard/Lenteur" ---');
  await fixVWA(188, 'athm', 6, { concepts: { "Retard/Lenteur": AXES_RETARD_LENTEUR }});

  // ===================================================================
  // V182 (vid=189): athm/p7, athm/p11, wsy/p4
  // ===================================================================
  console.log('\n--- V182 (vid=189): athm/p7 "Retard/Lenteur" ---');
  await fixVWA(189, 'athm', 7, { concepts: { "Retard/Lenteur": AXES_RETARD_LENTEUR }});

  console.log('--- V182 (vid=189): athm/p11 "Retard/Lenteur" ---');
  await fixVWA(189, 'athm', 11, { concepts: { "Retard/Lenteur": AXES_RETARD_LENTEUR }});

  console.log('--- V182 (vid=189): wsy/p4 "Liaison/Connexion" ---');
  await fixVWA(189, 'wsy', 4, { concepts: { "Liaison/Connexion": AXES_LIAISON_CONNEXION_WSY }});

  // ===================================================================
  // V183 (vid=190): ktb/p4, qbl/p12, swm/p6
  // ===================================================================
  console.log('\n--- V183 (vid=190): ktb/p4 "Écriture/Inscription" ---');
  await fixVWA(190, 'ktb', 4, { concepts: { "Écriture/Inscription": AXES_ECRITURE_INSCRIPTION_KTB }});

  console.log('--- V183 (vid=190): qbl/p12 "Orientation/Direction" ---');
  await fixVWA(190, 'qbl', 12, { concepts: {
    "Orientation/Direction": {
      axe1_verset: "Dans ce verset, le mot qablihi signifie 'avant lui' — une reference temporelle, pas spatiale. Le concept d'orientation ou de direction evoque la qibla, le fait de se tourner vers un point. Or le verset utilise la racine q-b-l dans son sens temporel de precedence. Il ne s'agit pas de se tourner physiquement vers une direction mais de faire reference a ce qui existait avant la revelation actuelle.",
      axe2_voisins: "Les versets voisins traitent de la prescription du jeune et de ses modalites. Le contexte est temporel — le jeune est prescrit comme il l'a ete pour les communautes precedentes. L'orientation spatiale n'a pas de rapport avec ce passage sur le jeune. Les versets ne parlent ni de qibla ni de direction de priere. La reference temporelle sert a legitimer la prescription en montrant sa continuite historique.",
      axe3_sourate: "Al-Baqarah traite de l'orientation spatiale dans les versets sur le changement de qibla, bien plus loin dans la sourate. La racine q-b-l est polyvalente dans la sourate — elle couvre l'anteriorite temporelle, l'orientation spatiale, et l'acceptation. Le contexte de chaque occurrence determine le sens pertinent. Dans ce passage sur le jeune, c'est clairement le sens temporel qui opere.",
      axe4_coherence: "Le Coran utilise la racine q-b-l dans plusieurs acceptions — avant, en face de, accepter, qibla. Le sens temporel est tres frequent dans le Coran, souvent pour comparer la prescription actuelle avec celles des communautes anterieures. L'orientation comme sens principal ici ignorerait cette fonction comparative essentielle au discours coranique. La coherence textuelle impose le sens temporel.",
      axe5_frequence: "Pour la mission du khalifa, la continuite historique des prescriptions est importante car elle fonde leur legitimite. L'orientation spatiale est pertinente pour la priere mais pas pour le jeune. Le khalifa doit comprendre que les lois divines ne sont pas des innovations mais des constantes de la guidance. Le sens temporel de qablihi ancre le jeune dans l'histoire prophetique et renforce son autorite."
    }
  }});

  console.log('--- V183 (vid=190): swm/p6 "Silence/Immobilité" ---');
  await fixVWA(190, 'swm', 6, { concepts: {
    "Silence/Immobilité": {
      axe1_verset: "Dans ce verset, la racine s-w-m designe le jeune prescrit aux croyants. Le concept de silence ou d'immobilite evoque l'arret de toute parole et de tout mouvement. Le jeune implique une restriction mais pas un silence total ni une immobilite complete. Le verset prescrit de s'abstenir de nourriture et de boisson, pas de parole ou de mouvement. Le silence est un sens ancien de la racine mais le contexte coranique l'oriente vers la privation alimentaire.",
      axe2_voisins: "Les versets voisins detaillent les modalites pratiques du jeune — duree, compensations, facilites. Le contexte est organisationnel et pratique. Le silence impliquerait un voeud de mutisme qui n'est mentionne nulle part dans ce passage. Les versets suivants permettent de manger et de boire la nuit, ce qui montre que le jeune est une alternance, pas un arret total. L'immobilite est contraire a la vie active que le passage presuppose.",
      axe3_sourate: "Al-Baqarah presente le jeune comme une pratique qui s'integre dans la vie quotidienne. La sourate ne mentionne jamais le silence comme composante du jeune. Le concept d'immobilite contredit les passages ou les croyants sont appeles a l'action — combat, commerce, entraide. La sourate valorise l'action disciplinee, pas l'arret de toute activite. Le silence est un sens pre-coranique de la racine qui ne s'applique pas ici.",
      axe4_coherence: "Le Coran n'utilise la racine s-w-m que pour designer le jeune alimentaire, jamais pour le silence ou l'immobilite. Le seul passage ou le silence est lie a sawm est dans la sourate Maryam, ou il s'agit d'un voeu de silence specifique, pas du jeune rituel. La coherence coranique montre que le jeune rituel prescrit dans Al-Baqarah est distinct du voeu de silence. Les deux pratiques ne doivent pas etre confondues.",
      axe5_frequence: "Pour la mission du khalifa, le silence et l'immobilite paralysent la gouvernance. Le khalifa doit agir, communiquer, decider. Le jeune comme discipline de privation alimentaire renforce la volonte sans empecher l'action. Le khalifa qui jeunerait dans le silence et l'immobilite abandonnerait sa mission. Le jeune coranique forme des gouvernants disciplinés qui agissent avec lucidite malgre la privation."
    }
  }});

  // ===================================================================
  // V184 (vid=191): edd/p2, sfr/p9, twq/p16
  // ===================================================================
  console.log('\n--- V184 (vid=191): edd/p2 "Préparation/Équipement" ---');
  await fixVWA(191, 'edd', 2, { concepts: {
    "Préparation/Équipement": {
      axe1_verset: "Dans ce verset, la racine e-d-d est utilisee dans le sens de compter, denombrer des jours de jeune. Le concept de preparation ou d'equipement evoque le fait de se munir, de s'appreter. Compter et preparer partagent l'idee de mise en ordre, mais le verset parle explicitement du nombre de jours, pas d'une preparation. La preparation impliquerait une action prospective, alors que le denombrement est un acte de mesure et de delimitation.",
      axe2_voisins: "Les versets voisins detaillent les regles du jeune — duree, compensations pour les malades et les voyageurs. Le contexte est celui de la quantification, pas de l'equipement. La preparation serait pertinente si le verset parlait de se preparer au jeune, mais il parle du nombre de jours a jeuner. Les compensations pour les jours manques confirment que c'est le comptage qui est en jeu, pas la preparation.",
      axe3_sourate: "Al-Baqarah utilise le vocabulaire de la quantification dans ses passages legislatifs pour definir des obligations precises. La preparation est un concept present dans la sourate mais dans d'autres contextes — la preparation au combat par exemple. Dans ce passage sur le jeune, la precision numerique est essentielle pour definir l'obligation. La preparation est trop vague pour ce contexte qui exige de la precision.",
      axe4_coherence: "Le Coran utilise la racine e-d-d principalement dans le sens de compter, denombrer. Les versets legislatifs qui emploient cette racine parlent de periodes definies — jours de jeune, mois de viduité, denombrement des ennemis. Le sens de preparation existe dans la racine mais il est rare dans le registre legislatif coranique. La coherence montre que le comptage est le sens premier dans les prescriptions temporelles.",
      axe5_frequence: "Pour la mission du khalifa, la precision dans le denombrement est essentielle a l'application de la loi. Le khalifa doit savoir exactement combien de jours doivent etre jeuner et compenser. La preparation est une qualite generale utile mais elle ne remplace pas la precision quantitative. Le khalifa qui se contenterait de 'preparer' le jeune sans en compter les jours manquerait a son devoir d'exactitude juridique."
    }
  }});

  console.log('--- V184 (vid=191): sfr/p9 "Dévoilement/Révélation" ---');
  await fixVWA(191, 'sfr', 9, { concepts: {
    "Dévoilement/Révélation": {
      axe1_verset: "Dans ce verset, le mot safar designe le voyage, le deplacement. Le concept de devoilement ou de revelation evoque le fait de rendre visible ce qui etait cache. Etymologiquement, le voyage devoile car il expose le voyageur a des realites nouvelles. Cependant le verset utilise safar dans un contexte juridique — le voyageur beneficie d'une dispense de jeune. Le sens pertinent est le deplacement physique, pas le devoilement metaphorique.",
      axe2_voisins: "Les versets voisins traitent des conditions pratiques du jeune — maladie, voyage, compensation. Le contexte est celui des dispenses juridiques, pas de la decouverte ou de la revelation. Le devoilement serait pertinent dans un contexte mystique ou epistemologique, pas dans un passage legislatif. Les dispenses sont accordees en raison de la difficulte physique du voyage, pas en raison de ce qu'il revele.",
      axe3_sourate: "Al-Baqarah distingue les passages legislatifs des passages narratifs et theologiques. Le voyage est mentionne dans la sourate comme condition de dispense juridique, pas comme experience de devoilement. La sourate utilise d'autres racines pour exprimer la revelation et le devoilement des signes divins. La racine s-f-r dans ce contexte est clairement orientee vers le deplacement physique et ses contraintes.",
      axe4_coherence: "Le Coran utilise la racine s-f-r pour le voyage dans les contextes legislatifs et pour le devoilement dans d'autres contextes. Les deux sens coexistent dans la langue arabe mais le Coran les distingue par le contexte. Dans les versets de dispense, le voyage est toujours un fait physique qui justifie un allegement. La coherence coranique confirme que safar ici est le deplacement, pas le devoilement.",
      axe5_frequence: "Pour la mission du khalifa, le voyage est une realite logistique qui exige des adaptations juridiques. Le khalifa doit prevoir des dispenses pour les voyageurs qui ne peuvent pas remplir certaines obligations. Le devoilement est un concept trop abstrait pour fonder une dispense juridique. La gouvernance exige des criteres concrets — le deplacement physique est verifiable, le devoilement interieur ne l'est pas."
    }
  }});

  console.log('--- V184 (vid=191): twq/p16 "Encerclement/Lien" ---');
  await fixVWA(191, 'twq', 16, { concepts: {
    "Encerclement/Lien": {
      axe1_verset: "Dans ce verset, la racine t-w-q est utilisee pour exprimer la capacite, le fait de pouvoir supporter quelque chose. Le concept d'encerclement ou de lien evoque le fait d'entourer, d'enserrer. Etymologiquement, la capacite est liee a ce qui encercle le cou — le collier, la charge. Cependant le verset parle de ceux qui ont la capacite de jeuner mais choisissent de payer une compensation. Le sens contextuel est la capacite, pas l'encerclement.",
      axe2_voisins: "Les versets voisins traitent des dispenses et des compensations pour le jeune. Le contexte est celui des capacites individuelles face a l'obligation. L'encerclement impliquerait une contrainte exterieure qui entoure le croyant, alors que le verset parle d'une capacite interieure. Les compensations sont calibrees selon les capacites de chacun, pas selon les liens qui l'enserrent. Le passage est pragmatique et adaptatif.",
      axe3_sourate: "Al-Baqarah adapte les prescriptions aux capacites des croyants — c'est un principe fondamental de la sourate. Le concept de capacite est plus fonctionnel que celui d'encerclement pour exprimer cette adaptabilite. La sourate ne presente jamais les obligations comme des liens qui encerclent, mais comme des devoirs proportionnes aux moyens. L'encerclement donnerait une image oppressive contraire a l'esprit du passage.",
      axe4_coherence: "Le Coran adapte les obligations aux capacites humaines — c'est un principe repete dans plusieurs sourates. La racine t-w-q dans ce contexte exprime cette proportionnalite. L'encerclement est un sens etymologique qui renvoie au collier et a la charge portee autour du cou. La coherence coranique favorise le sens de capacite car il s'inscrit dans le principe general d'adaptation des obligations aux moyens individuels.",
      axe5_frequence: "Pour la mission du khalifa, connaitre les capacites de chaque membre de la societe est essentiel pour une gouvernance juste. Le khalifa doit adapter les charges aux capacites de chacun, pas encercler les citoyens d'obligations. L'encerclement evoque la tyrannie, la capacite evoque la justice proportionnelle. Le khalifa qui gouverne selon les capacites construit une societe equilibree et resiliente."
    }
  }});

  // ===================================================================
  // V185 (vid=192): shhr/p1, shhr/p16, shkr/p44
  // ===================================================================
  const AXES_NOTORIETE_PUBLICITE_SHHR = {
    axe1_verset: "Dans ce verset, le mot shahr designe le mois — une unite de temps basee sur le cycle lunaire. Le concept de notoriete ou de publicite evoque le fait d'etre connu, celebre, repandu. Le mois est effectivement un phenomene public et visible — tout le monde voit la lune. Cependant le verset utilise shahr pour delimiter une periode de jeune, pas pour parler de celebrite. Le sens temporel est pratique et legislatif, pas social.",
    axe2_voisins: "Les versets voisins detaillent les regles du jeune pendant le mois de Ramadan. Le contexte est calendaire et rituel. La notoriete impliquerait que le mois est celebre ou renomme, ce qui est vrai pour Ramadan mais n'est pas le sens du mot shahr dans ce contexte. Le verset utilise le mot pour identifier la periode, pas pour qualifier sa celebrite. Les modalites pratiques du jeune confirment l'orientation temporelle du passage.",
    axe3_sourate: "Al-Baqarah utilise le vocabulaire temporel pour organiser les obligations rituelles. Le mois est une unite fondamentale du calendrier islamique. La notoriete du mois de Ramadan est un fait culturel mais pas le sens du mot shahr dans la sourate. La sourate s'interesse a la fonction calendaire du mois, pas a sa renommee. Le concept de publicite est trop social pour ce contexte rituel et calendaire.",
    axe4_coherence: "Le Coran utilise la racine sh-h-r pour le mois dans la grande majorite des occurrences. Le sens de rendre celebre ou public existe dans la racine mais il est rare dans le contexte coranique. Les versets qui parlent des mois sacres utilisent shahr dans son sens temporel avec un qualificatif sacral. La coherence coranique montre que shahr dans les prescriptions rituelles est une unite de temps, pas un qualificatif de notoriete.",
    axe5_frequence: "Pour la mission du khalifa, le calendrier est un outil de gouvernance essentiel. Le khalifa doit organiser la vie collective selon les mois lunaires et les obligations saisonnieres. La notoriete du mois est un phenomene derive — c'est parce que Ramadan est prescrit qu'il est celebre, pas l'inverse. Le khalifa se concentre sur la fonction organisationnelle du mois, pas sur sa celebrite sociale."
  };

  console.log('\n--- V185 (vid=192): shhr/p1 "Notoriete/Publicite" ---');
  await fixVWA(192, 'shhr', 1, { concepts: { "Notoriete/Publicite": AXES_NOTORIETE_PUBLICITE_SHHR }});

  console.log('--- V185 (vid=192): shhr/p16 "Notoriete/Publicite" ---');
  await fixVWA(192, 'shhr', 16, { concepts: { "Notoriete/Publicite": AXES_NOTORIETE_PUBLICITE_SHHR }});

  console.log('--- V185 (vid=192): shkr/p44 "Retribution" ---');
  await fixVWA(192, 'shkr', 44, { concepts: {
    "Retribution": {
      axe1_verset: "Dans ce verset, la racine sh-k-r est utilisee pour exprimer la gratitude envers Dieu. Le concept de retribution evoque le fait de recompenser ou de punir en retour d'un acte. La gratitude et la retribution partagent l'idee de reciprocite — on remercie en reponse a un bienfait. Cependant le verset appelle a la gratitude active du croyant, pas a la retribution divine. Le sens est celui de la reconnaissance, pas de la recompense.",
      axe2_voisins: "Les versets voisins traitent du jeune et de ses bienfaits spirituels. Le contexte est celui de la formation spirituelle par la discipline. La retribution impliquerait un systeme de recompense et de punition, or le passage insiste sur la gratitude comme attitude existentielle. Les versets invitent a remercier Dieu pour la guidance, pas a attendre une retribution pour le jeune accompli. La gratitude est desinteressee, la retribution est transactionnelle.",
      axe3_sourate: "Al-Baqarah appelle a la gratitude a plusieurs reprises — envers les bienfaits de la creation, de la guidance, de la legislation. La sourate presente la gratitude comme une reponse naturelle a la generosité divine. La retribution apparait dans la sourate dans les contextes de jugement et de sanction, pas dans les contextes d'adoration. Les deux concepts operent dans des registres differents au sein de la sourate.",
      axe4_coherence: "Le Coran utilise la racine sh-k-r principalement pour la gratitude et la reconnaissance. Le sens de retribution existe dans la langue arabe classique mais il est secondaire dans le Coran. Les versets qui parlent de recompense divine utilisent d'autres racines — j-z-y, th-w-b. La coherence coranique reserve sh-k-r a la gratitude du croyant et a la reconnaissance divine, pas a la retribution mecanique.",
      axe5_frequence: "Pour la mission du khalifa, la gratitude est un fondement de la cohesion sociale. Le khalifa qui cultive la gratitude dans sa communaute cree un climat de confiance et de cooperation. La retribution comme systeme mecanique de recompense et de punition est necessaire mais insuffisante. La gratitude transcende la retribution en creant des liens affectifs et moraux qui depassent le calcul transactionnel."
    }
  }});

  // ===================================================================
  // V186 (vid=193): dew/p8, jwb/p7
  // ===================================================================
  console.log('\n--- V186 (vid=193): dew/p8 "Pretention/Revendication" ---');
  await fixVWA(193, 'dew', 8, { concepts: {
    "Pretention/Revendication": {
      axe1_verset: "Dans ce verset, la racine d-e-w est utilisee dans le sens d'invoquer, d'appeler Dieu. Le concept de pretention ou de revendication evoque le fait de reclamer quelque chose indument. L'invocation et la pretention partagent la racine mais different radicalement dans leur attitude — l'invocation est humble, la pretention est arrogante. Le verset parle de l'appel sincere du croyant a Dieu, pas d'une revendication orgueilleuse.",
      axe2_voisins: "Les versets voisins traitent du jeune et de la proximite divine. Le contexte est celui de l'intimite spirituelle entre le croyant et son Createur. La pretention impliquerait une attitude conflictuelle ou le croyant reclamerait des droits, or le verset presente une relation d'amour et de confiance. L'invocation dans ce passage est une conversation intime, pas une revendication devant un tribunal.",
      axe3_sourate: "Al-Baqarah presente l'invocation comme un moyen de communication entre le croyant et Dieu. La sourate distingue l'appel sincere de la pretention vaine — les hypocrites pretendent croire mais ne croient pas vraiment. Dans ce verset, le contexte est celui de la sincerite — Dieu repond a l'appel du croyant. La pretention est reservee dans la sourate aux attitudes des negateurs et des hypocrites.",
      axe4_coherence: "Le Coran utilise la racine d-e-w dans les deux sens — invocation sincere et pretention mensongere. Le contexte determine toujours le sens pertinent. Dans les versets qui parlent de la reponse divine, c'est l'invocation sincere qui est en jeu. Dans les versets qui denoncent les fausses croyances, c'est la pretention. La coherence coranique reserve la pretention aux contextes polemiques, pas aux contextes devotionnels.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre invocation et pretention est cruciale. Le khalifa doit encourager l'invocation sincere qui rapproche le croyant de Dieu et renforce la piete collective. La pretention est un vice qui mine l'autorite legitime en creant de fausses revendications. Le khalifa qui sait invoquer avec humilite inspire sa communaute a faire de meme."
    }
  }});

  console.log('--- V186 (vid=193): jwb/p7 "Traversee/Percement" ---');
  await fixVWA(193, 'jwb', 7, { concepts: {
    "Traversee/Percement": {
      axe1_verset: "Dans ce verset, la racine j-w-b est utilisee pour exprimer la reponse divine a l'invocation du croyant. Le concept de traversee ou de percement evoque le fait de passer a travers, de percer un obstacle. La reponse peut etre vue comme une traversee — la parole de l'invocateur traverse l'espace pour atteindre le divin. Cependant le verset met l'accent sur la reciprocite de la communication, pas sur le percement d'un obstacle.",
      axe2_voisins: "Les versets voisins traitent de la proximite divine et du jeune. Le contexte est celui de la facilite de communication entre Dieu et le croyant — Dieu est proche, il repond. La traversee impliquerait une difficulte, un obstacle a franchir, ce qui contredit le message du verset qui insiste sur la proximite et l'accessibilite. Le passage elimine les obstacles au lieu de les traverser.",
      axe3_sourate: "Al-Baqarah presente la relation entre Dieu et le croyant comme directe et sans intermediaire. La sourate supprime les barrieres entre le fidele et son Createur. Le concept de traversee reintroduirait une distance que le verset cherche precisement a abolir. La sourate utilise d'autres racines pour exprimer le franchissement d'obstacles — la racine j-w-b ici est dans le registre de la communication, pas du deplacement.",
      axe4_coherence: "Le Coran utilise la racine j-w-b principalement pour la reponse — reponse divine, reponse humaine. Le sens de traversee est marginal dans le corpus coranique. Les versets qui parlent de la reponse de Dieu aux invocations utilisent systematiquement le sens de reciprocite communicationnelle. La coherence coranique confirme que la reponse est le sens premier de cette racine dans les contextes devotionnels.",
      axe5_frequence: "Pour la mission du khalifa, la capacite de repondre aux besoins de la communaute est fondamentale. Le khalifa doit etre accessible et reactif, comme Dieu est presente comme proche et repondant dans ce verset. La traversee impliquerait que le khalifa doit forcer des obstacles pour atteindre les citoyens, ce qui est contraire a l'ideal de proximite. La reponse rapide et directe est le modele de gouvernance ici."
    }
  }});

  // ===================================================================
  // V187 (vid=194) — LE GROS BLOC (39 entries)
  // ===================================================================
  console.log('\n--- V187 (vid=194): akl/p31 "Destruction/Érosion" ---');
  await fixVWA(194, 'akl', 31, { concepts: {
    "Destruction/Érosion": {
      axe1_verset: "Dans ce verset, la racine a-k-l est utilisee dans le sens de manger, de se nourrir. Le concept de destruction ou d'erosion evoque l'usure progressive, la decomposition. Manger peut etre vu comme une forme de destruction car l'aliment est detruit par la digestion. Cependant le verset parle de la permission de manger la nuit pendant le Ramadan — c'est un acte de subsistance, pas de destruction.",
      axe2_voisins: "Les versets voisins traitent des permissions nocturnes pendant le jeune — manger, boire, relations conjugales. Le contexte est celui de la permission et de la jouissance licite. La destruction impliquerait un acte negatif, or manger la nuit est presente comme une grace divine. Les versets equilibrent la restriction diurne et la permission nocturne, creant un rythme de vie harmonieux, pas destructeur.",
      axe3_sourate: "Al-Baqarah utilise la racine a-k-l dans plusieurs sens — manger licitement, consommer indument les biens d'autrui. Le sens de destruction par la consommation existe dans la sourate quand il s'agit de manger les biens des orphelins par exemple. Mais dans ce passage sur le jeune, manger est un acte positif et permis. La sourate distingue clairement la consommation licite de la consommation destructrice.",
      axe4_coherence: "Le Coran utilise la racine a-k-l dans un spectre qui va de la nourriture licite a la consommation injuste. Le sens de destruction est present quand le Coran parle de manger le feu ou les biens d'autrui. Dans les versets de permission alimentaire, le sens est toujours positif et vital. La coherence coranique montre que le contexte determine si manger est un acte de vie ou de destruction.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre consommation vitale et consommation destructrice est fondamentale. Le khalifa doit garantir l'acces a la nourriture licite tout en empechant la consommation predatrice des biens d'autrui. La destruction comme concept ici confondrait ces deux registres et criminaliserait un acte vital que Dieu autorise explicitement."
    }
  }});

  console.log('--- V187 (vid=194): alh/p15 "Adoration/Culte" ---');
  await fixVWA(194, 'alh', 15, { concepts: { "Adoration/Culte": AXES_ADORATION_CULTE }});

  console.log('--- V187 (vid=194): alh/p29 "Adoration/Culte" ---');
  await fixVWA(194, 'alh', 29, { concepts: { "Adoration/Culte": AXES_ADORATION_CULTE }});

  console.log('--- V187 (vid=194): alh/p56 "Adoration/Culte" ---');
  await fixVWA(194, 'alh', 56, { concepts: { "Adoration/Culte": AXES_ADORATION_CULTE }});

  console.log('--- V187 (vid=194): alh/p61 "Adoration/Culte" ---');
  await fixVWA(194, 'alh', 61, { concepts: { "Adoration/Culte": AXES_ADORATION_CULTE }});

  console.log('--- V187 (vid=194): ayy/p62 "Limite/Extrémité" ---');
  await fixVWA(194, 'ayy', 62, { concepts: {
    "Limite/Extrémité": {
      axe1_verset: "Dans ce verset, le mot ayat designe les signes ou versets divins. Le concept de limite ou d'extremite evoque une frontiere, un point au-dela duquel on ne peut aller. Les signes divins definissent effectivement des limites comportementales. Cependant le verset utilise ayat pour designer les communications divines qui eclairent, pas pour tracer des frontieres. Les signes sont des guides, pas des barrieres.",
      axe2_voisins: "Les versets voisins traitent des regles du jeune et utilisent le mot hudud pour designer les limites divines. Le Coran distingue clairement les signes (ayat) des limites (hudud) — les premiers eclairent, les seconds deliminent. Le contexte utilise les deux mots dans des fonctions differentes, ce qui confirme que ayat n'est pas un synonyme de limite dans ce passage. La distinction lexicale est deliberee.",
      axe3_sourate: "Al-Baqarah utilise le mot ayat tres frequemment pour designer les versets coraniques, les miracles et les signes de la creation. Le concept de limite est reserve au mot hudud dans la sourate. Les deux concepts operent dans des registres differents — la pedagogie pour les signes, la legislation pour les limites. La sourate maintient cette distinction de maniere coherente tout au long de son texte.",
      axe4_coherence: "Le Coran distingue systematiquement ayat (signes) et hudud (limites). Les signes revelent la verite et guident vers la comprehension. Les limites tracent des frontieres juridiques a ne pas franchir. Confondre les deux reviendrait a reduire la dimension epistemologique des signes a une simple fonction de bornage. La coherence coranique exige de maintenir cette distinction fondamentale.",
      axe5_frequence: "Pour la mission du khalifa, les signes et les limites ont des fonctions complementaires mais distinctes. Les signes forment l'intelligence et la conscience du khalifa. Les limites encadrent son action juridique. Le khalifa qui confondrait les signes avec des limites se priverait de leur fonction educative. Les signes l'eclairent pour qu'il comprenne pourquoi les limites existent — ils sont la pedagogie qui fonde la legislation."
    }
  }});

  console.log('--- V187 (vid=194): bghy/p26 "Transgression/Injustice" ---');
  await fixVWA(194, 'bghy', 26, { concepts: {
    "Transgression/Injustice": {
      axe1_verset: "Dans ce verset, la racine b-gh-y est utilisee dans le sens de chercher, rechercher — les croyants recherchent ce que Dieu a prescrit pour eux. Le concept de transgression ou d'injustice evoque le depassement des bornes et l'oppression. La recherche et la transgression partagent l'idee de mouvement vers un objectif, mais la recherche est licite et la transgression est illicite. Le verset parle d'une quete autorisee par Dieu.",
      axe2_voisins: "Les versets voisins traitent des permissions nocturnes pendant le jeune. Le contexte est celui de la grace divine qui autorise et facilite. La transgression impliquerait une violation des regles, or le verset decrit exactement le contraire — une action conforme a la volonte divine. Les croyants cherchent ce que Dieu leur a prescrit, ce qui est l'antithese de la transgression.",
      axe3_sourate: "Al-Baqarah utilise la racine b-gh-y dans les deux sens — chercher et transgresser. Les passages qui parlent de transgression sont dans des contextes polemiques ou punitifs. Les passages qui parlent de recherche sont dans des contextes de permission et de grace. La sourate distingue ces deux usages par le ton et le contexte. Ce passage de permission oriente clairement vers la recherche licite.",
      axe4_coherence: "Le Coran utilise la racine b-gh-y dans un spectre semantique large — de la recherche legitime a la transgression grave. Le contexte determine toujours le sens. Dans les versets ou Dieu accorde une permission, la recherche est le sens naturel. Dans les versets ou Dieu condamne un comportement, la transgression est le sens pertinent. La coherence coranique confirme que la recherche de ce que Dieu prescrit n'est jamais une transgression.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre recherche legitime et transgression est essentielle a la justice. Le khalifa doit encourager la recherche du bien et punir la transgression. Confondre les deux paralyserait la societe en criminalisant la recherche et en banalisant la transgression. Le khalifa qui comprend cette distinction gouverne avec discernement et equilibre."
    }
  }});

  const AXES_ANNONCE_REJOUISSANCE_BSHR = {
    axe1_verset: "Dans ce verset, la racine b-sh-r est utilisee dans le sens de contact physique intime entre epoux — la peau contre la peau. Le concept d'annonce ou de rejouissance evoque la bonne nouvelle, la joie partagee. Le contact intime peut etre vu comme une source de rejouissance, mais le verset parle specifiquement de la relation conjugale physique, pas d'une annonce joyeuse. Le sens ici est charnel et concret, pas communicationnel.",
    axe2_voisins: "Les versets voisins traitent des permissions nocturnes pendant le jeune. Le contexte est celui des relations conjugales autorisees la nuit. L'annonce impliquerait une transmission d'information joyeuse, or le verset decrit un acte physique intime. Les permissions enumérées — manger, boire, relations conjugales — sont toutes des actes corporels. L'annonce est trop abstraite pour ce registre physique.",
    axe3_sourate: "Al-Baqarah utilise la racine b-sh-r dans les deux sens — bonne nouvelle (bashara) et contact cutane (bashara). Les passages prophetiques utilisent le sens d'annonce. Les passages legislatifs sur les relations conjugales utilisent le sens de contact. La sourate distingue ces usages par le contexte. Dans ce passage sur le jeune et les nuits de Ramadan, c'est le sens de contact intime qui s'impose.",
    axe4_coherence: "Le Coran utilise mubashara specifiquement pour les relations conjugales dans les passages legislatifs. Le sens d'annonce joyeuse apparait dans d'autres contextes — annoncer un enfant, annoncer le paradis. Les deux sens partagent la racine mais operent dans des registres distincts. La coherence coranique montre que dans un contexte de permissions conjugales, le contact physique est le seul sens pertinent.",
    axe5_frequence: "Pour la mission du khalifa, la regulation des relations conjugales est necessaire a l'ordre social. Le khalifa doit appliquer les permissions et les interdictions liees a l'intimite conjugale. L'annonce comme concept ici detournerait l'attention des regles pratiques que le khalifa doit faire respecter. La vie conjugale bien reglée est un pilier de la stabilite sociale que le khalifa doit proteger."
  };

  console.log('--- V187 (vid=194): bshr/p25 "Annonce/Réjouissance" ---');
  await fixVWA(194, 'bshr', 25, { concepts: { "Annonce/Réjouissance": AXES_ANNONCE_REJOUISSANCE_BSHR }});

  console.log('--- V187 (vid=194): bshr/p49 "Annonce/Réjouissance" ---');
  await fixVWA(194, 'bshr', 49, { concepts: { "Annonce/Réjouissance": AXES_ANNONCE_REJOUISSANCE_BSHR }});

  console.log('--- V187 (vid=194): byd/p37 "Surface/Étendue" ---');
  await fixVWA(194, 'byd', 37, { concepts: {
    "Surface/Étendue": {
      axe1_verset: "Dans ce verset, la racine b-y-d est utilisee pour designer la couleur blanche — le fil blanc de l'aube. Le concept de surface ou d'etendue evoque un espace vaste et plat. La blancheur et la surface partagent l'idee de clarte et d'ouverture, mais le verset parle d'un phenomene visuel precis — la distinction entre le fil blanc et le fil noir de l'aube. Le sens est chromatique et temporel, pas spatial.",
      axe2_voisins: "Les versets voisins traitent de la delimitation temporelle du jeune — manger la nuit jusqu'a l'apparition de l'aube. Le contexte est celui de la mesure du temps par les phenomenes lumineux. La surface n'a pas de rapport avec cette delimitation temporelle. Le passage utilise une image visuelle concrete — les fils de lumiere — pour definir le moment precis ou le jeune commence. C'est de la chronometrie, pas de la geographie.",
      axe3_sourate: "Al-Baqarah utilise des reperes visuels et temporels pour definir les obligations. Le fil blanc de l'aube est un marqueur temporel naturel et universel. Le concept de surface est absent de ce registre chronometrique. La sourate ne parle pas d'espaces vastes dans ce passage mais de moments precis. La blancheur ici est un indicateur de temps, pas une description de paysage.",
      axe4_coherence: "Le Coran utilise la racine b-y-d pour la blancheur dans des contextes varies — visages blancs au jour du jugement, main blanche de Moise, fil blanc de l'aube. Le sens de surface n'apparait pas dans ces usages. La coherence coranique associe cette racine a la lumiere, a la purete et a la distinction visuelle. La surface est un sens lexicographique de la racine mais il n'est pas active dans le corpus coranique.",
      axe5_frequence: "Pour la mission du khalifa, les reperes temporels clairs sont essentiels a l'organisation de la vie collective. Le khalifa doit pouvoir definir le debut et la fin du jeune de maniere objective et universelle. La blancheur de l'aube est un repere naturel accessible a tous. La surface comme concept n'offre aucun critere temporel utile a la gouvernance rituelle. Le khalifa a besoin de precision, pas de vastes etendues."
    }
  }});

  console.log('--- V187 (vid=194): byn/p34 "Séparation/Éloignement" ---');
  await fixVWA(194, 'byn', 34, { concepts: { "Séparation/Éloignement": AXES_SEPARATION_ELOIGNEMENT_BYN }});

  console.log('--- V187 (vid=194): byn/p60 "Séparation/Éloignement" ---');
  await fixVWA(194, 'byn', 60, { concepts: { "Séparation/Éloignement": AXES_SEPARATION_ELOIGNEMENT_BYN }});

  console.log('--- V187 (vid=194): efw/p22 "Surplus/Excès" ---');
  await fixVWA(194, 'efw', 22, { concepts: {
    "Surplus/Excès": {
      axe1_verset: "Dans ce verset, la racine e-f-w est utilisee dans le sens de pardonner, d'effacer les fautes. Le concept de surplus ou d'exces evoque ce qui depasse la mesure, l'abondance. Le pardon peut etre vu comme un surplus de misericorde — Dieu depasse la justice stricte en pardonnant. Cependant le verset parle du pardon divin pour les transgressions passees, pas d'un exces ou d'un debordement. Le pardon est un acte delibere de clemence.",
      axe2_voisins: "Les versets voisins traitent des permissions divines pour la nuit de Ramadan. Le contexte est celui de la grace et de la facilite. Le surplus impliquerait un depassement, or le pardon divin est presente comme une correction misericordieuse, pas comme un exces. Dieu pardonne ce qui a ete fait avant la revelation de la permission — c'est une mise a zero, pas un debordement. Le passage regularise une situation, pas un exces.",
      axe3_sourate: "Al-Baqarah utilise la racine e-f-w dans le sens de pardon et d'effacement. La sourate presente le pardon comme un attribut divin fondamental. Le concept de surplus apparait dans la sourate dans d'autres contextes — l'exces de richesse a donner en aumone. Les deux concepts sont distincts dans la sourate. Le pardon efface, le surplus deborde — les dynamiques sont differentes.",
      axe4_coherence: "Le Coran utilise la racine e-f-w dans le sens de pardonner et d'effacer dans la grande majorite des occurrences. Le sens de surplus existe mais il est secondaire. Les versets qui parlent du pardon divin utilisent systematiquement le sens d'effacement des fautes. La coherence coranique confirme que afw dans un contexte de grace et de misericorde est le pardon, pas le surplus.",
      axe5_frequence: "Pour la mission du khalifa, le pardon est un outil de gouvernance puissant. Le khalifa qui sait pardonner les fautes passees lors d'un changement de legislation maintient la cohesion sociale. Le surplus comme concept orienterait vers l'exces et le gaspillage, ce qui est contraire a la moderation que le khalifa doit incarner. Le pardon reconstruit la confiance, le surplus la gaspille."
    }
  }});

  console.log('--- V187 (vid=194): ekf/p51 "Attachement obsessionnel" ---');
  await fixVWA(194, 'ekf', 51, { concepts: {
    "Attachement obsessionnel": {
      axe1_verset: "Dans ce verset, la racine e-k-f est utilisee pour la retraite spirituelle dans la mosquee (itikaf). Le concept d'attachement obsessionnel evoque une fixation excessive et maladive sur un objet ou une activite. La retraite spirituelle implique un attachement intense a l'adoration, mais le verset la presente comme une pratique positive et regulee. L'obsession est pathologique, la retraite est disciplinee et temporaire.",
      axe2_voisins: "Les versets voisins traitent des regles du jeune et des permissions nocturnes. Le contexte est celui de la discipline spirituelle equilibree. L'attachement obsessionnel impliquerait un desequilibre que le passage ne contient pas. Les versets equilibrent restriction et permission, adoration et vie conjugale. La retraite dans la mosquee est une des composantes de ce equilibre, pas une obsession qui le rompt.",
      axe3_sourate: "Al-Baqarah presente les pratiques spirituelles comme des moyens de formation, pas comme des fins obsessionnelles. La sourate condamne l'exces dans la religion et valorise l'equilibre. La retraite spirituelle est une pratique limitee dans le temps et encadree par des regles. L'attachement obsessionnel contredit cette vision equilibree. La sourate insiste sur la moderation en toute chose.",
      axe4_coherence: "Le Coran utilise la racine e-k-f dans le sens de se consacrer a une activite, de se retirer pour adorer. Le sens d'obsession existe dans la racine — les idolatres qui s'attachent obsessionnellement a leurs idoles. Mais dans le contexte de la mosquee et du jeune, l'attachement est vertueux et temporaire. La coherence coranique distingue l'attachement pieux de l'attachement idolatre par le contexte et l'objet de l'attachement.",
      axe5_frequence: "Pour la mission du khalifa, la retraite spirituelle est un temps de ressourcement necessaire au leadership. Le khalifa qui se retire temporairement pour mediter et prier revient renforce. L'attachement obsessionnel paralyserait le khalifa dans une devotion excessive au detriment de sa mission de gouvernance. La retraite est un outil de regeneration, pas une fin en soi."
    }
  }});

  console.log('--- V187 (vid=194): elm/p14 "Enseignement/Instruction" ---');
  await fixVWA(194, 'elm', 14, { concepts: {
    "Enseignement/Instruction": {
      axe1_verset: "Dans ce verset, la racine e-l-m est utilisee dans le sens de savoir, connaitre — Dieu sait que les croyants se trahissaient eux-memes. Le concept d'enseignement ou d'instruction evoque la transmission de savoir d'un maitre a un eleve. Le savoir divin ici est une connaissance omnisciente des actes humains, pas un acte d'enseignement. Dieu constate et sait, il n'enseigne pas dans ce verset precis.",
      axe2_voisins: "Les versets voisins traitent des permissions nocturnes et du pardon divin. Le contexte est celui de la science divine qui observe les comportements humains. L'enseignement impliquerait une intention pedagogique directe, or le verset decrit la connaissance que Dieu a des transgressions passees. Les versets montrent un Dieu qui sait, pardonne et legifere — le savoir precede la legislation, pas l'enseignement.",
      axe3_sourate: "Al-Baqarah utilise la racine e-l-m abondamment dans les deux sens — connaissance et enseignement. Les passages ou Dieu enseigne sont explicites — Il a enseigne a Adam les noms. Les passages ou Dieu sait sont des affirmations d'omniscience. La sourate distingue ces deux usages. Dans ce verset, c'est l'omniscience qui est invoquee pour justifier le pardon et la nouvelle legislation.",
      axe4_coherence: "Le Coran distingue clairement elima (savoir) de allama (enseigner) dans l'usage des formes verbales. Le savoir divin est un attribut permanent — Dieu sait toujours tout. L'enseignement divin est un acte ponctuel et delibere. La forme utilisee dans ce verset est celle du savoir, pas de l'enseignement. La coherence grammaticale et contextuelle confirme cette distinction.",
      axe5_frequence: "Pour la mission du khalifa, la connaissance des realites de sa communaute est prerequise a toute action. Le khalifa doit savoir ce qui se passe avant de legiferer ou d'enseigner. Ce verset montre que Dieu legifere sur la base de sa connaissance des comportements humains. Le khalifa doit imiter ce modele — d'abord connaitre, puis legiferer, puis enseigner. La connaissance est le fondement."
    }
  }});

  console.log('--- V187 (vid=194): fjr/p42 "Débordement/Excès" ---');
  await fixVWA(194, 'fjr', 42, { concepts: {
    "Débordement/Excès": {
      axe1_verset: "Dans ce verset, le mot fajr designe l'aube — le moment ou la lumiere perce l'obscurite. Le concept de debordement ou d'exces evoque ce qui sort de ses limites, qui depasse la mesure. L'aube peut etre vue comme un debordement de lumiere qui submerge la nuit. Cependant le verset utilise fajr comme repere temporel precis pour le debut du jeune, pas comme metaphore de debordement.",
      axe2_voisins: "Les versets voisins traitent de la delimitation temporelle du jeune. Le contexte est chronometrique — quand commence le jeune. Le debordement impliquerait un phenomene excessif, or l'aube est un phenomene graduel et regulier qui sert de marqueur fiable. Les versets cherchent la precision, pas le spectaculaire. L'aube est un repere quotidien ordinaire, pas un evenement excessif.",
      axe3_sourate: "Al-Baqarah utilise le mot fajr une seule fois dans ce passage sur le jeune. La sourate ne developpe pas de theme autour du debordement ou de l'exces dans ce contexte. Les passages sur l'exces dans la sourate utilisent d'autres racines — israf, tughyan. Le mot fajr dans la sourate est purement temporel et astronomique, pas moral ou metaphorique.",
      axe4_coherence: "Le Coran utilise la racine f-j-r dans deux registres — l'aube comme phenomene naturel et la debauche comme exces moral. Le contexte determine toujours le sens. Dans les versets sur le jeune, c'est le sens astronomique qui s'impose. Dans les versets sur la morale, c'est le sens de debordement. La coherence coranique ne melange jamais ces deux registres dans un meme passage.",
      axe5_frequence: "Pour la mission du khalifa, les reperes temporels naturels sont des outils de gouvernance essentiels. L'aube permet de synchroniser les obligations collectives sans instrument artificiel. Le debordement comme concept ici briserait la fonction pratique du mot et le rendrait inutile pour la regulation temporelle. Le khalifa a besoin de l'aube comme horloge naturelle, pas comme metaphore de l'exces."
    }
  }});

  console.log('--- V187 (vid=194): hdd/p55 "Acuité/Tranchant" ---');
  await fixVWA(194, 'hdd', 55, { concepts: {
    "Acuité/Tranchant": {
      axe1_verset: "Dans ce verset, le mot hudud designe les limites divines — les frontieres que les croyants ne doivent pas franchir. Le concept d'acuite ou de tranchant evoque la nettete, la capacite de couper. Les limites divines sont effectivement tranchantes dans leur definition — elles separent nettement le licite de l'illicite. Cependant le verset met l'accent sur la frontiere a respecter, pas sur la nettete de la coupure.",
      axe2_voisins: "Les versets voisins traitent des regles du jeune et des permissions. Le contexte est celui de la delimitation claire entre ce qui est permis et ce qui est interdit. L'acuite impliquerait que ces limites coupent ou blessent, or elles protegent et encadrent. Les versets presentent les limites comme des gardes-fous benefiques, pas comme des lames tranchantes. La fonction est protectrice, pas agressive.",
      axe3_sourate: "Al-Baqarah utilise le mot hudud a plusieurs reprises pour les limites divines. La sourate insiste sur le respect de ces limites et met en garde contre leur transgression. Le concept d'acuite n'est pas developpe dans ces passages — c'est la notion de frontiere et de territoire sacre qui domine. La sourate trace des lignes a ne pas franchir, elle ne brandit pas des lames tranchantes.",
      axe4_coherence: "Le Coran utilise la racine h-d-d dans le sens de limite et de frontiere dans les versets legislatifs. Le sens d'acuite ou de tranchant apparait dans d'autres contextes — le fer, le regard pergant. Les deux sens coexistent dans la racine mais le Coran les separe par le contexte. La coherence montre que hudud dans un contexte legislatif est toujours la limite normative, jamais le tranchant physique.",
      axe5_frequence: "Pour la mission du khalifa, les limites claires sont indispensables a l'etat de droit. Le khalifa doit definir et faire respecter les frontieres entre le licite et l'illicite. L'acuite comme concept orienterait vers la severite de la punition plutot que vers la clarte de la norme. Le khalifa a besoin de limites bien definies, pas de lames tranchantes. La clarte normative est plus efficace que la severite punitive."
    }
  }});

  console.log('--- V187 (vid=194): hll/p1 "Descente/Installation" ---');
  await fixVWA(194, 'hll', 1, { concepts: {
    "Descente/Installation": {
      axe1_verset: "Dans ce verset, la racine h-l-l est utilisee dans le sens de rendre licite, permettre. Le concept de descente ou d'installation evoque le fait de s'installer, de descendre dans un lieu. La permission divine peut etre vue comme une descente de la grace qui s'installe dans la vie des croyants. Cependant le verset parle explicitement de ce qui est permis la nuit du jeune — c'est une permission juridique, pas une installation physique.",
      axe2_voisins: "Les versets voisins traitent des permissions et des interdictions liees au jeune. Le contexte est entierement juridique et normatif. La descente impliquerait un mouvement spatial, or le passage definit des categories juridiques — licite et illicite. Les versets ne parlent pas de s'installer quelque part mais de ce qu'on a le droit de faire. La permission est un statut juridique, pas un mouvement physique.",
      axe3_sourate: "Al-Baqarah utilise la racine h-l-l dans le sens de permission et de licite a plusieurs reprises. La sourate construit un systeme normatif ou chaque chose a un statut — halal ou haram. Le concept de descente est present dans la sourate pour la revelation et la pluie, pas pour les permissions juridiques. La sourate distingue ces registres — le normatif et le cosmologique — avec des racines differentes.",
      axe4_coherence: "Le Coran utilise la racine h-l-l dans les deux sens — descendre et rendre licite. Les passages legislatifs utilisent systematiquement le sens de permission. Les passages narratifs sur les voyages utilisent le sens de descendre et s'installer. La coherence coranique confirme que dans un contexte de prescription juridique, le sens de permission est le seul pertinent. La descente est un sens etymologique de fond.",
      axe5_frequence: "Pour la mission du khalifa, la capacite de definir le licite et l'illicite est le coeur de la gouvernance. Le khalifa doit connaitre les permissions divines pour legiferer conformement a la loi revelee. La descente comme concept ici detournerait l'attention de la fonction normative essentielle. Le khalifa gouverne par la norme, pas par le mouvement — la permission est son outil principal."
    }
  }});

  console.log('--- V187 (vid=194): khyt/p36 "Couture/Tissage" ---');
  const AXES_COUTURE_TISSAGE_KHYT = {
    axe1_verset: "Dans ce verset, le mot khayt designe le fil — le fil blanc et le fil noir de l'aube qui marquent le debut du jeune. Le concept de couture ou de tissage evoque l'acte d'assembler des tissus avec du fil. Le fil est l'outil de la couture, mais dans ce verset il sert de metaphore visuelle pour les premieres lueurs de l'aube. Le verset ne parle pas de coudre ou de tisser mais de distinguer deux lignes lumineuses dans le ciel.",
    axe2_voisins: "Les versets voisins traitent de la delimitation temporelle du jeune. Le contexte est astronomique et chronometrique. La couture impliquerait un acte artisanal qui n'a aucun rapport avec la determination du moment ou commence le jeune. Les versets utilisent l'image du fil comme metaphore de la fine ligne lumineuse a l'horizon, pas comme reference a un metier textile. Le registre est poetique et pratique, pas artisanal.",
    axe3_sourate: "Al-Baqarah n'a pas de theme textile ou artisanal dans ce passage ni dans les passages voisins. La sourate utilise cette image du fil de l'aube comme un outil pedagogique unique et memorable. Le concept de couture n'apparait nulle part dans le contexte de la sourate. L'image du fil est isolee et sert exclusivement a definir un moment precis du jour. La couture serait une surinterprétation du mot hors contexte.",
    axe4_coherence: "Le Coran utilise le mot khayt dans cette unique occurrence pour l'image de l'aube. Le sens de fil comme ligne lumineuse est specifique a ce verset. La couture comme sens associe n'apparait pas dans le corpus coranique de maniere significative. La coherence coranique montre que le fil ici est une metaphore visuelle autosuffisante qui ne convoque pas le champ semantique de la couture ou du tissage.",
    axe5_frequence: "Pour la mission du khalifa, l'image du fil de l'aube est un repere temporel precis et universel. La couture comme concept n'apporte rien a la gouvernance rituelle. Le khalifa a besoin de reperes clairs pour synchroniser les pratiques collectives. Le fil de l'aube est un de ces reperes — simple, naturel, accessible a tous sans equipement. La couture est etrangere a cette fonction de regulation temporelle."
  };
  await fixVWA(194, 'khyt', 36, { concepts: { "Couture/Tissage": AXES_COUTURE_TISSAGE_KHYT }});

  console.log('--- V187 (vid=194): khyt/p39 "Couture/Tissage" ---');
  await fixVWA(194, 'khyt', 39, { concepts: { "Couture/Tissage": AXES_COUTURE_TISSAGE_KHYT }});

  console.log('--- V187 (vid=194): ktb/p28 "Écriture/Inscription" ---');
  await fixVWA(194, 'ktb', 28, { concepts: { "Écriture/Inscription": AXES_ECRITURE_INSCRIPTION_KTB }});

  console.log('--- V187 (vid=194): kwn/p17 "Devenir/Transformation" ---');
  await fixVWA(194, 'kwn', 17, { concepts: {
    "Devenir/Transformation": {
      axe1_verset: "Dans ce verset, la racine k-w-n est utilisee pour exprimer l'etre, l'existence — le fait d'etre dans un certain etat. Le concept de devenir ou de transformation evoque un changement d'etat, un passage d'une forme a une autre. Le verset decrit un etat present — les croyants se trahissaient — pas un processus de transformation. Le verbe kana ici est un auxiliaire temporel, pas un verbe de changement.",
      axe2_voisins: "Les versets voisins traitent de faits etablis et de prescriptions fixes. Le contexte n'est pas celui du changement ou de la transformation mais de la constatation et de la regulation. Le devenir impliquerait un processus evolutif, or le passage enonce des faits et legifere. Les versets constatent un comportement passe et y repondent par une nouvelle permission, pas par une transformation des croyants.",
      axe3_sourate: "Al-Baqarah utilise la racine k-w-n principalement comme auxiliaire etre dans des constructions temporelles. Le concept de devenir est present dans la sourate dans les recits de creation — kun fayakun — mais pas dans les passages legislatifs. La sourate distingue le registre cosmologique du devenir et le registre legislatif de l'etre actuel. Ce verset est dans le second registre.",
      axe4_coherence: "Le Coran utilise kana comme auxiliaire temporel dans des milliers de versets. Le sens de devenir est specifique a quelques contextes cosmologiques et existentiels. La forme verbale utilisee ici est l'imparfait narratif qui decrit un etat passe, pas un processus de transformation. La coherence grammaticale et contextuelle du Coran confirme que kana ici est un auxiliaire d'etat, pas un verbe de devenir.",
      axe5_frequence: "Pour la mission du khalifa, connaitre l'etat actuel de la societe est necessaire avant d'envisager sa transformation. Le verset constate un etat passe pour justifier une nouvelle legislation. Le khalifa doit d'abord diagnostiquer avant de transformer. Le devenir est un objectif, la connaissance de l'etat present est le point de depart. La racine k-w-n dans ce verset fournit le diagnostic, pas le programme de transformation."
    }
  }});

  const AXES_CONFUSION_MELANGE_LBS = {
    axe1_verset: "Dans ce verset, la racine l-b-s est utilisee dans le sens de vetement — les epoux sont un vetement l'un pour l'autre. Le concept de confusion ou de melange evoque le desordre, le brouillage des reperes. Le vetement recouvre et protege, la confusion embrouille et desoriente. Le verset utilise une metaphore d'intimite et de protection, pas de confusion. Les epoux se couvrent mutuellement, ils ne se melangent pas au point de perdre leur identite.",
    axe2_voisins: "Les versets voisins traitent des permissions conjugales pendant le jeune. Le contexte est celui de l'intimite licite entre epoux. La confusion impliquerait un desordre ou une perte de clarte, or le verset celebre la complementarite conjugale. Les epoux comme vetements reciproques evoquent la protection, la pudeur et la proximite. Le passage est positif et affirmatif, pas confus ni ambigu.",
    axe3_sourate: "Al-Baqarah presente la relation conjugale comme une institution divine protegee par des regles claires. La sourate ne confond jamais les registres — le conjugal a ses regles propres. Le concept de confusion contredit la clarte legislative de la sourate. Le vetement comme metaphore conjugale est un des passages les plus celebres du Coran pour sa beaute et sa precision. La confusion lui est etrangere.",
    axe4_coherence: "Le Coran utilise la racine l-b-s dans les deux sens — vetir et confondre. Le sens de confusion apparait dans les versets qui parlent de meler le vrai au faux. Le sens de vetement apparait dans les contextes physiques et metaphoriques de couverture et de protection. La coherence coranique distingue ces deux usages par le contexte. Dans une metaphore conjugale, c'est le vetement qui s'impose, pas la confusion.",
    axe5_frequence: "Pour la mission du khalifa, la clarte des relations sociales est essentielle. Le vetement comme metaphore conjugale definit clairement les roles et les droits des epoux. La confusion brouille ces roles et mene aux conflits. Le khalifa doit promouvoir des relations conjugales claires et protectrices, pas confuses et ambigues. Le vetement reciproque est un modele de complementarite ordonnee."
  };

  console.log('--- V187 (vid=194): lbs/p9 "Confusion/Mélange" ---');
  await fixVWA(194, 'lbs', 9, { concepts: { "Confusion/Mélange": AXES_CONFUSION_MELANGE_LBS }});

  console.log('--- V187 (vid=194): lbs/p12 "Confusion/Mélange" ---');
  await fixVWA(194, 'lbs', 12, { concepts: { "Confusion/Mélange": AXES_CONFUSION_MELANGE_LBS }});

  console.log('--- V187 (vid=194): lyl/p47 "Couverture/Enveloppement" ---');
  await fixVWA(194, 'lyl', 47, { concepts: {
    "Couverture/Enveloppement": {
      axe1_verset: "Dans ce verset, le mot layl designe la nuit comme periode temporelle — le temps permis pour manger, boire et avoir des relations conjugales. Le concept de couverture ou d'enveloppement evoque le fait de recouvrir, d'envelopper dans l'obscurite. La nuit enveloppe effectivement le monde dans l'obscurite, mais le verset l'utilise comme marqueur temporel, pas comme metaphore d'enveloppement.",
      axe2_voisins: "Les versets voisins traitent de la delimitation entre nuit et jour pour les obligations du jeune. Le contexte est chronometrique — la nuit est le temps de la permission, le jour est le temps de la restriction. L'enveloppement impliquerait une experience immersive de l'obscurite, or le passage utilise la nuit comme simple unite de temps. Les versets s'interessent a quand, pas a comment la nuit se manifeste.",
      axe3_sourate: "Al-Baqarah utilise le mot nuit dans un contexte legislatif precis. La sourate ne developpe pas de theme poetique autour de l'enveloppement nocturne dans ce passage. D'autres sourates explorent la dimension cosmologique de la nuit qui couvre le jour, mais Al-Baqarah dans ce passage est pragmatique et reglementaire. La nuit est un cadre temporel, pas une experience sensorielle d'enveloppement.",
      axe4_coherence: "Le Coran utilise le mot layl dans des registres varies — cosmologique, poetique, legislatif. Dans les passages legislatifs, la nuit est toujours un cadre temporel objectif. Dans les passages cosmologiques, la nuit est parfois presentee comme un voile qui couvre. La coherence coranique montre que le registre determine le traitement — dans ce passage legislatif, la nuit est du temps, pas un manteau.",
      axe5_frequence: "Pour la mission du khalifa, la nuit comme cadre temporel permet d'organiser les obligations et les permissions. Le khalifa doit savoir quand les regles s'appliquent et quand elles sont levees. L'enveloppement comme concept n'aide pas cette organisation temporelle. Le khalifa a besoin de la nuit comme horloge naturelle pour synchroniser la vie collective, pas comme metaphore poetique de l'obscurite."
    }
  }});

  console.log('--- V187 (vid=194): nfs/p19 "Souffle/Esprit" ---');
  await fixVWA(194, 'nfs', 19, { concepts: {
    "Souffle/Esprit": {
      axe1_verset: "Dans ce verset, le mot anfusakum designe 'vos ames' ou 'vous-memes' — les croyants se trahissaient eux-memes. Le concept de souffle ou d'esprit evoque la dimension immaterielle, le principe vital. Le mot nafs dans ce verset fonctionne comme pronom reflexif — 'vous-memes' — pas comme reference au souffle vital. Le verset parle d'auto-trahison, pas de la nature spirituelle de l'ame.",
      axe2_voisins: "Les versets voisins traitent de comportements concrets — manger, boire, relations conjugales. Le contexte est pratique et corporel. Le souffle ou l'esprit impliquerait une discussion metaphysique qui est absente de ce passage. Les versets parlent de ce que les croyants faisaient physiquement la nuit, pas de la nature de leur esprit. Le sens reflexif de nafs est le seul pertinent dans ce contexte charnel.",
      axe3_sourate: "Al-Baqarah utilise le mot nafs dans de nombreux contextes — l'ame individuelle, le soi reflexif, la personne. La sourate ne developpe pas une pneumatologie du souffle dans ce passage. Le sens reflexif est le plus frequent dans les passages legislatifs de la sourate. Le souffle comme concept pneumatique apparait dans d'autres sourates — al-Hijr, Sad — dans les recits de creation. Ce passage n'est pas un recit de creation.",
      axe4_coherence: "Le Coran utilise la racine n-f-s dans un spectre large — le soi, l'ame, le souffle, la personne. Le contexte determine le sens pertinent. Dans les passages ou les croyants agissent sur 'eux-memes', le sens reflexif est systematique. Le souffle vital apparait dans les contextes cosmologiques et eschatologiques. La coherence coranique confirme que anfusakum dans un contexte d'auto-trahison est reflexif, pas pneumatique.",
      axe5_frequence: "Pour la mission du khalifa, la responsabilite personnelle est fondamentale. Le mot anfusakum dans ce verset rappelle que les croyants se nuisent a eux-memes par leurs transgressions. Le khalifa doit faire comprendre que les lois divines protegent les personnes contre elles-memes. Le souffle comme concept detournerait l'attention de cette responsabilite personnelle en la spiritualisant excessivement."
    }
  }});

  console.log('--- V187 (vid=194): nsw/p7 "Oubli/Négligence" ---');
  await fixVWA(194, 'nsw', 7, { concepts: {
    "Oubli/Négligence": {
      axe1_verset: "Dans ce verset, le mot nisa'ikum designe 'vos femmes' — les epouses des croyants. Le concept d'oubli ou de negligence evoque le fait de ne plus se souvenir, de negliger. La racine n-s-w dans le sens de 'femmes' est distincte de la racine n-s-y dans le sens d'oublier, bien que les deux se ressemblent graphiquement. Le verset parle des relations conjugales, pas de l'oubli ou de la negligence.",
      axe2_voisins: "Les versets voisins traitent des permissions conjugales pendant le jeune. Le contexte est celui des droits et devoirs entre epoux. L'oubli impliquerait une defaillance de memoire qui n'a aucun rapport avec le sujet. Les versets reglementent les relations intimes, pas les capacites cognitives. La confusion entre n-s-w (femmes) et n-s-y (oubli) est une erreur etymologique classique que le contexte elimine.",
      axe3_sourate: "Al-Baqarah parle des femmes dans de nombreux versets — mariage, divorce, menstruation, allaitement. Le mot nisa est clairement identifie dans la sourate comme designation des femmes. Le concept d'oubli apparait dans la sourate dans d'autres contextes — l'oubli de l'alliance, l'oubli des bienfaits. Les deux champs semantiques ne se melangent jamais dans la sourate.",
      axe4_coherence: "Le Coran distingue clairement les racines n-s-w (femmes) et n-s-y (oubli) par le contexte et la morphologie. Les versets legislatifs sur les femmes utilisent systematiquement la premiere racine. Les versets sur l'oubli utilisent la seconde. La coherence lexicale du Coran rend la confusion impossible pour un lecteur attentif au contexte. L'homographie partielle ne cree pas d'ambiguite semantique.",
      axe5_frequence: "Pour la mission du khalifa, la protection des droits des femmes est une responsabilite fondamentale. L'oubli comme concept ici detournerait l'attention de cette responsabilite concrete. Le khalifa doit legiferer sur les relations conjugales avec clarte et justice. Confondre 'femmes' avec 'oubli' menerait a des interpretations absurdes qui nuiraient a la legislation familiale que le khalifa doit appliquer."
    }
  }});

  console.log('--- V187 (vid=194): nws/p63 "Agitation/Mouvement" ---');
  await fixVWA(194, 'nws', 63, { concepts: {
    "Agitation/Mouvement": {
      axe1_verset: "Dans ce verset, le mot nas designe les gens, les personnes, l'humanite en general. Le concept d'agitation ou de mouvement evoque l'effervescence, l'activite intense. La racine n-w-s dans le sens d'agitation est etymologiquement liee au mot nas car l'humanite est caracterisee par son agitation. Cependant le verset utilise nas comme designation collective neutre, pas comme description d'un comportement agite.",
      axe2_voisins: "Les versets voisins traitent des regles du jeune et s'adressent aux croyants. Le contexte est legislatif et le mot nas designe les destinataires generaux de la revelation. L'agitation impliquerait une description de comportement, or le verset ne commente pas l'attitude des gens mais leur prescrit des regles. Le mot nas est un pronom collectif fonctionnel, pas une caracterisation anthropologique.",
      axe3_sourate: "Al-Baqarah utilise le mot nas de maniere tres frequente comme designation generique de l'humanite. La sourate ne developpe jamais le sens d'agitation quand elle emploie ce mot. Le concept d'agitation apparait dans la sourate dans d'autres contextes — l'agitation des hypocrites, le trouble des negateurs. Le mot nas dans les passages legislatifs est neutre et inclusif.",
      axe4_coherence: "Le Coran utilise le mot nas dans des milliers de versets comme designation de l'humanite. Le sens d'agitation est un sens etymologique profond qui n'est jamais active dans l'usage coranique du mot. La coherence coranique traite nas comme un collectif humain neutre. L'agitation comme sens premier imposerait une vision negative de l'humanite que le Coran ne soutient pas systematiquement.",
      axe5_frequence: "Pour la mission du khalifa, l'humanite est le sujet de sa gouvernance. Le khalifa gouverne les gens — nas — pas leur agitation. Reduire l'humanite a son agitation est reducteur et pessimiste. Le khalifa doit voir dans les gens des sujets de droit capables de discipline et de vertu, pas des etres fondamentalement agites. Le mot nas comme collectif neutre sert mieux la vision d'une humanite gouvernable."
    }
  }});

  console.log('--- V187 (vid=194): qrb/p58 "Sacrifice/Offrande" ---');
  await fixVWA(194, 'qrb', 58, { concepts: {
    "Sacrifice/Offrande": {
      axe1_verset: "Dans ce verset, la racine q-r-b est utilisee dans le sens de proximite, d'approche — ne pas approcher les limites divines. Le concept de sacrifice ou d'offrande evoque un don fait a Dieu pour se rapprocher de Lui. La proximite et le sacrifice partagent l'idee de rapprochement, mais le verset interdit de s'approcher des limites, il ne parle pas d'offrir un sacrifice. Le mouvement ici est negatif — ne pas s'approcher — pas positif.",
      axe2_voisins: "Les versets voisins traitent des interdictions et des limites du jeune. Le contexte est celui des frontieres a ne pas franchir. Le sacrifice impliquerait un acte d'offrande positif qui n'a aucun rapport avec ce passage. Les versets mettent en garde contre la transgression des limites, pas contre l'oubli des sacrifices. Le registre est prohibitif, pas sacrificiel.",
      axe3_sourate: "Al-Baqarah traite du sacrifice dans d'autres passages — le sacrifice d'Abraham, les offrandes rituelles. Ces passages utilisent d'autres racines ou la racine q-r-b dans un contexte explicitement sacrificiel. Dans ce passage sur le jeune, le sacrifice est absent du champ thematique. La sourate distingue les contextes sacrificiels des contextes legislatifs sur les limites.",
      axe4_coherence: "Le Coran utilise la racine q-r-b dans plusieurs sens — proximite, offrande, parente. Le sens est toujours determine par le contexte. Dans les versets qui interdisent de s'approcher, le sens est spatial et metaphorique — ne pas aller pres de l'interdit. Dans les versets sacrificiels, le sens est rituel — offrir pour se rapprocher de Dieu. La coherence coranique separe ces deux usages par le contexte.",
      axe5_frequence: "Pour la mission du khalifa, l'interdiction de s'approcher des limites est un principe de prevention. Le khalifa doit etablir des zones tampons autour des interdits pour empecher la transgression. Le sacrifice comme concept ici remplacerait la prevention par le rituel, ce qui est inadapte au contexte legislatif. Le khalifa gouverne par la prevention, pas par le sacrifice."
    }
  }});

  console.log('--- V187 (vid=194): rfv/p5 "Grossièreté/Vulgarité" ---');
  await fixVWA(194, 'rfv', 5, { concepts: {
    "Grossièreté/Vulgarité": {
      axe1_verset: "Dans ce verset, la racine r-f-th est utilisee pour designer l'intimite conjugale, le rapport sexuel. Le concept de grossierete ou de vulgarite evoque un langage ou un comportement choquant et inconvenant. Le mot rafath designe en effet les propos intimes ou obscenes dans certains contextes. Cependant le verset utilise ce mot pour designer les relations conjugales licites pendant la nuit de Ramadan — un acte que Dieu autorise et benit.",
      axe2_voisins: "Les versets voisins traitent des permissions nocturnes avec un ton de grace et de facilite. Le contexte est celui de la permission divine, pas de la condamnation morale. La grossierete impliquerait un jugement negatif sur les relations conjugales, ce qui contredit la permission explicite du verset. Dieu autorise le rafath, il ne le condamne pas. Le passage rehabilite une pratique que les croyants craignaient d'accomplir.",
      axe3_sourate: "Al-Baqarah reglemente les relations conjugales avec dignite et realisme. La sourate ne presente jamais les relations intimes licites comme vulgaires ou grossieres. Le concept de grossierete est reserve dans la sourate aux comportements reprehensibles — les propos offensants, les actes indecents hors mariage. Les relations conjugales dans leur cadre licite sont protegees par la sourate, pas stigmatisées.",
      axe4_coherence: "Le Coran utilise le mot rafath dans des contextes ou l'intimite conjugale est mentionnee sans jugement negatif — ici et dans les versets sur le pelerinage. Le sens de grossierete apparait quand la racine est utilisee hors du cadre conjugal. La coherence coranique montre que le cadre determine la valeur morale de l'acte. Dans le mariage, le rafath est licite et noble. Hors mariage, il est grossier.",
      axe5_frequence: "Pour la mission du khalifa, la protection de la dignite conjugale est essentielle. Le khalifa doit garantir que les relations intimes dans le mariage sont respectees et protegees, pas stigmatisees. La grossierete comme concept ici humilierait un acte que Dieu a rendu licite. Le khalifa qui comprend la noblesse de la vie conjugale construit une societe qui respecte l'intimite et la dignite des couples."
    }
  }});

  console.log('--- V187 (vid=194): shrb/p32 "Imprégnation/Imbibition" ---');
  await fixVWA(194, 'shrb', 32, { concepts: {
    "Imprégnation/Imbibition": {
      axe1_verset: "Dans ce verset, la racine sh-r-b est utilisee dans le sens de boire — la permission de boire la nuit pendant le Ramadan. Le concept d'impregnation ou d'imbibition evoque le fait d'etre sature de liquide, d'absorber en profondeur. Boire desaltere, l'impregnation sature. Le verset parle d'un acte simple et quotidien — boire — pas d'un processus d'absorption profonde. La permission est pratique, pas metaphysique.",
      axe2_voisins: "Les versets voisins traitent des permissions nocturnes — manger, boire, relations conjugales. Le contexte est celui d'actes corporels simples et necessaires. L'impregnation impliquerait un processus lent et profond qui ne correspond pas au rythme du passage. Les versets enumerent des permissions pratiques avec efficacite. Boire est un acte ponctuel et vital, pas un processus d'impregnation graduelle.",
      axe3_sourate: "Al-Baqarah utilise la racine sh-r-b dans des contextes ou boire est un acte physique — boire de l'eau, boire du vin interdit. La sourate ne developpe pas le concept d'impregnation spirituelle ou metaphorique dans ces passages. L'impregnation comme concept apparaitrait dans un registre mystique que ce passage legislatif n'adopte pas. La sourate est pragmatique dans ses prescriptions alimentaires.",
      axe4_coherence: "Le Coran utilise la racine sh-r-b pour l'acte de boire dans la grande majorite des occurrences. Le sens d'impregnation est un sens derive qui apparait dans des expressions comme 'leurs coeurs se sont impregnes du veau'. Ces usages metaphoriques sont rares et clairement marques par le contexte. La coherence coranique reserve l'impregnation aux metaphores explicites, pas aux permissions alimentaires.",
      axe5_frequence: "Pour la mission du khalifa, l'acces a l'eau potable est un droit fondamental. Le khalifa doit garantir que chacun peut boire — un acte simple et vital. L'impregnation comme concept eleverait un besoin basique a un niveau metaphysique inutile pour la gouvernance pratique. Le khalifa legifere sur les droits vitaux, pas sur les etats d'impregnation spirituelle."
    }
  }});

  console.log('--- V187 (vid=194): sjd/p53 "Soumission/Humilité" ---');
  await fixVWA(194, 'sjd', 53, { concepts: {
    "Soumission/Humilité": {
      axe1_verset: "Dans ce verset, le mot masajid designe les mosquees — les lieux de prostration. Le concept de soumission ou d'humilite evoque une attitude interieure de deference et de modestie. La prostration est en effet l'acte physique par excellence de la soumission. Cependant le verset parle des mosquees comme lieux physiques ou se pratique la retraite spirituelle, pas de l'attitude de soumission elle-meme.",
      axe2_voisins: "Les versets voisins traitent de la retraite spirituelle (itikaf) dans les mosquees et des limites a respecter. Le contexte est spatial et reglementaire — ou et comment pratiquer la retraite. La soumission comme concept orienterait vers l'attitude interieure du fidele, or le verset s'interesse au lieu physique et aux regles qui s'y appliquent. Les mosquees sont des batiments avec des regles, pas des etats d'ame.",
      axe3_sourate: "Al-Baqarah mentionne les mosquees comme lieux sacres proteges par des regles specifiques. La sourate s'interesse a la fonction institutionnelle des mosquees, pas a la soumission individuelle des fideles. Le concept de soumission est present dans la sourate a travers l'islam et la devotion, mais dans d'autres contextes. Dans ce passage, c'est le lieu qui compte, pas l'attitude.",
      axe4_coherence: "Le Coran utilise la racine s-j-d dans les deux sens — la prostration comme acte physique et la soumission comme attitude. Les versets qui parlent des mosquees utilisent le sens architectural — un lieu consacre a la prostration. Les versets qui parlent de soumission utilisent le sens moral et spirituel. La coherence coranique distingue le lieu de l'attitude, meme si les deux sont lies.",
      axe5_frequence: "Pour la mission du khalifa, les mosquees sont des institutions publiques qui necessitent une gestion et des regles. Le khalifa doit proteger les mosquees comme lieux de culte et les reglementer — qui peut y faire la retraite, dans quelles conditions. La soumission comme concept ici detournerait l'attention de la gestion institutionnelle vers la piete individuelle, ce qui n'est pas le role du khalifa dans ce contexte."
    }
  }});

  console.log('--- V187 (vid=194): swd/p40 "Prééminence/Maîtrise" ---');
  await fixVWA(194, 'swd', 40, { concepts: {
    "Prééminence/Maîtrise": {
      axe1_verset: "Dans ce verset, le mot aswad designe la couleur noire — le fil noir de l'aube qui contraste avec le fil blanc. Le concept de preeminence ou de maitrise evoque la superiorite, le leadership. La noirceur et la maitrise partagent la racine s-w-d car le maitre (sayyid) est celui qui se distingue. Cependant le verset utilise aswad dans un sens purement chromatique pour decrire un phenomene visuel de l'aube.",
      axe2_voisins: "Les versets voisins traitent de la delimitation temporelle du jeune par des reperes visuels. Le contexte est astronomique et sensoriel. La preeminence impliquerait une hierarchie sociale ou politique totalement absente de ce passage. Les versets decrivent des fils de lumiere et d'obscurite, pas des rapports de pouvoir. Le noir ici est une couleur, pas un symbole de domination.",
      axe3_sourate: "Al-Baqarah n'associe pas la couleur noire a la maitrise ou a la preeminence dans ce passage ni ailleurs. La sourate utilise la racine s-w-d pour la couleur dans ce verset et pour la noirceur des visages au jour du jugement dans un autre. Le concept de preeminence n'apparait pas dans ces usages. La sourate traite du leadership avec d'autres racines — khalifa, imam, wali.",
      axe4_coherence: "Le Coran utilise la racine s-w-d pour la couleur noire et pour la maitrise (sayyid). Les deux sens sont bien distincts dans le corpus coranique. Le sens de couleur apparait dans les descriptions visuelles. Le sens de maitrise apparait dans les recits prophetiques — sayyid pour Yahya par exemple. La coherence coranique ne confond jamais une description chromatique avec un titre de noblesse.",
      axe5_frequence: "Pour la mission du khalifa, la couleur noire de l'aube est un repere temporel naturel, pas un symbole de pouvoir. Le khalifa utilise les reperes visuels pour organiser les obligations collectives. La preeminence est un concept politique qui n'a rien a faire dans un passage chronometrique. Le khalifa doit distinguer les outils pratiques des symboles politiques pour gouverner efficacement."
    }
  }});

  console.log('--- V187 (vid=194): swm/p4 "Affliction/Immobilité" ---');
  await fixVWA(194, 'swm', 4, { concepts: { "Affliction/Immobilité": AXES_AFFLICTION_IMMOBILITE_SWM }});

  console.log('--- V187 (vid=194): swm/p45 "Affliction/Immobilité" ---');
  await fixVWA(194, 'swm', 45, { concepts: { "Affliction/Immobilité": AXES_AFFLICTION_IMMOBILITE_SWM }});

  console.log('--- V187 (vid=194): tmm/p44 "Intégrité/Totalité" ---');
  await fixVWA(194, 'tmm', 44, { concepts: {
    "Intégrité/Totalité": {
      axe1_verset: "Dans ce verset, la racine t-m-m est utilisee dans le sens de completer, achever — completer le jeune jusqu'a la nuit. Le concept d'integrite ou de totalite evoque un etat de perfection et de plenitude. Completer et etre integre partagent l'idee de ne rien laisser manquer. Cependant le verset parle d'un processus temporel — finir le jeune — pas d'un etat de perfection atteint. L'achevement est un acte, l'integrite est un etat.",
      axe2_voisins: "Les versets voisins traitent des modalites pratiques du jeune — debut, fin, permissions. Le contexte est procedural et temporel. L'integrite impliquerait une reflexion sur la perfection ou la completude morale, or le passage est pragmatique. Les versets definissent quand le jeune commence et quand il finit, pas quand l'integrite est atteinte. L'achevement du jeune est un acte quotidien repete, pas un accomplissement moral definitif.",
      axe3_sourate: "Al-Baqarah utilise la racine t-m-m dans le sens de completer des obligations — le pelerinage, le jeune. La sourate s'interesse a l'execution complete des devoirs, pas a l'integrite abstraite. Le concept de totalite est trop philosophique pour ce registre pratique. La sourate demande de finir ce qu'on a commence, pas d'atteindre un etat de perfection. L'accent est sur l'action, pas sur l'etre.",
      axe4_coherence: "Le Coran utilise la racine t-m-m pour exprimer l'achevement et la completion d'obligations divines. Le sens de perfection ou d'integrite apparait dans les versets sur la perfection de la religion et de la grace. Les deux sens sont presents mais dans des registres differents. La coherence coranique montre que dans les prescriptions pratiques, c'est l'achevement procedural qui compte, pas la totalite philosophique.",
      axe5_frequence: "Pour la mission du khalifa, l'execution complete des obligations est une exigence de gouvernance. Le khalifa doit s'assurer que les devoirs sont accomplis integralement, pas partiellement. L'integrite comme concept est un ideal vers lequel tendre, mais l'achevement est une obligation mesurable. Le khalifa a besoin de criteres concrets — le jeune est-il complet ou non — pas de reflexions sur la totalite metaphysique."
    }
  }});

  console.log('--- V187 (vid=194): twb/p20 "Récompense/Rétribution" ---');
  await fixVWA(194, 'twb', 20, { concepts: {
    "Récompense/Rétribution": {
      axe1_verset: "Dans ce verset, la racine t-w-b est utilisee dans le sens de se repentir, de revenir vers Dieu. Le concept de recompense ou de retribution evoque le fait de rendre a chacun selon ses actes. Le repentir et la retribution partagent l'idee de retour — on revient a Dieu par le repentir, Dieu retribue par la recompense. Cependant le verset parle de la misericorde divine qui accueille le repentir, pas d'une transaction meritoire.",
      axe2_voisins: "Les versets voisins traitent du pardon divin et des permissions apres une periode de transgression. Le contexte est celui de la reconciliation entre Dieu et les croyants. La retribution impliquerait un calcul de merites, or le passage decrit un elan de misericorde gratuite. Dieu pardonne et legifere, il ne comptabilise pas les bonnes actions. Le repentir est un retour, pas un investissement en vue d'une recompense.",
      axe3_sourate: "Al-Baqarah presente le repentir comme un mouvement de retour vers Dieu qui est toujours accueilli. La sourate distingue le repentir (retour a Dieu) de la retribution (recompense des actes). Les deux concepts operent dans des dynamiques differentes — le repentir est une initiative humaine, la retribution est une reponse divine. La sourate ne les confond pas dans les passages de grace et de pardon.",
      axe4_coherence: "Le Coran utilise la racine t-w-b exclusivement pour le repentir et le retour. La retribution utilise d'autres racines — j-z-y, th-w-b. La coherence lexicale du Coran est tres stricte sur cette distinction. Taba signifie toujours revenir, se repentir, et jamais retribuer ou recompenser. La confusion entre les deux racines t-w-b (repentir) et th-w-b (recompense) est une erreur morphologique que le contexte elimine.",
      axe5_frequence: "Pour la mission du khalifa, le repentir est un mecanisme social de rehabilitation. Le khalifa doit offrir la possibilite de se repentir et de se reintegrer dans la societe. La retribution est un mecanisme de justice qui recompense et punit. Les deux sont necessaires mais distincts. Le khalifa qui confondrait repentir et retribution priverait les fautifs de la possibilite de recommencer."
    }
  }});

  console.log('--- V187 (vid=194): wqy/p65 "Crainte/Peur" ---');
  await fixVWA(194, 'wqy', 65, { concepts: {
    "Crainte/Peur": {
      axe1_verset: "Dans ce verset, la racine w-q-y est utilisee dans le sens de se premunir, de se proteger — la taqwa, la piete protectrice. Le concept de crainte ou de peur evoque une emotion de frayeur face a un danger. La taqwa est souvent traduite par 'crainte de Dieu' mais elle signifie plus precisement 'se proteger contre la colere de Dieu par l'obeissance'. Le verset parle de protection active, pas de peur passive.",
      axe2_voisins: "Les versets voisins traitent des regles du jeune et de la discipline spirituelle. Le contexte est celui de la formation du caractere par la pratique. La crainte ou la peur impliquerait une emotion negative, or le passage presente la taqwa comme un objectif positif — le but du jeune est d'atteindre la taqwa. Les versets visent a construire, pas a effrayer. La protection est un objectif constructif, la peur est une reaction defensive.",
      axe3_sourate: "Al-Baqarah mentionne la taqwa des les premiers versets comme qualite des gens de bien. La sourate presente la taqwa comme la qualite fondamentale du croyant accompli. Le concept de peur reduit cette qualite a une emotion primitive. La sourate developpe une vision de la taqwa qui inclut la conscience morale, la discipline et la vigilance — bien au-dela de la simple peur.",
      axe4_coherence: "Le Coran utilise la racine w-q-y dans le sens de protection et de prevention systematiquement. Les versets qui parlent de taqwa decrivent une attitude proactive de protection contre le mal. La peur est reactive et paralysante, la taqwa est proactive et dynamisante. La coherence coranique montre que les muttaqun sont des gens d'action et de vertu, pas des gens terrorises et immobilises par la peur.",
      axe5_frequence: "Pour la mission du khalifa, la taqwa comme protection active est un ideal de gouvernance. Le khalifa protege sa communaute contre les dangers materiels et spirituels. La peur comme concept principal paralyserait la gouvernance en creant une atmosphere de terreur. Le khalifa inspire la taqwa — la vigilance protectrice — pas la peur. La societe du khalifa est vigilante et proactive, pas craintive et passive."
    }
  }});

  console.log('--- V187 (vid=194): xwn/p18 "Diminution/Altération" ---');
  await fixVWA(194, 'xwn', 18, { concepts: {
    "Diminution/Altération": {
      axe1_verset: "Dans ce verset, la racine kh-w-n est utilisee dans le sens de trahir — les croyants se trahissaient eux-memes en ayant des relations conjugales la nuit du Ramadan avant que la permission ne soit revelee. Le concept de diminution ou d'alteration evoque la reduction, la degradation. La trahison peut etre vue comme une diminution de la confiance ou de l'integrite, mais le verset parle d'un acte de transgression, pas d'un processus de degradation graduelle.",
      axe2_voisins: "Les versets voisins traitent du pardon divin et des nouvelles permissions. Le contexte est celui de la mise en regle d'une situation irreguliere. La diminution impliquerait une perte progressive, or le verset decrit un acte ponctuel de transgression qui est ensuite pardonne. La trahison ici est un comportement specifique — violer une regle avant sa modification — pas une erosion continue de la qualite morale.",
      axe3_sourate: "Al-Baqarah utilise la racine kh-w-n dans le sens de trahison et d'infidelite a un engagement. La sourate traite de la trahison des alliances, de la confiance et des devoirs. Le concept de diminution est trop vague pour ce registre de rupture de confiance. La sourate distingue la trahison deliberee de la faiblesse humaine, et ce verset parle de la seconde — une faiblesse pardonnee.",
      axe4_coherence: "Le Coran utilise la racine kh-w-n pour la trahison dans tous les contextes ou elle apparait. Le sens de diminution n'est pas atteste dans le corpus coranique pour cette racine. La coherence coranique associe kh-w-n a la rupture de confiance, pas a la reduction quantitative ou qualitative. La trahison est un acte moral, la diminution est un processus physique ou quantitatif.",
      axe5_frequence: "Pour la mission du khalifa, la trahison est une menace directe a la cohesion sociale. Le khalifa doit identifier et traiter les trahisons pour maintenir la confiance dans les institutions. La diminution comme concept ici adoucirait la gravite de la trahison en la presentant comme un simple amoindrissement. Le khalifa doit nommer la trahison pour la combattre et restaurer la confiance."
    }
  }});

  // ===================================================================
  // V188 (vid=195): akl/p2, hkm/p9
  // ===================================================================
  console.log('\n--- V188 (vid=195): akl/p2 "Destruction/Érosion" ---');
  await fixVWA(195, 'akl', 2, { concepts: {
    "Destruction/Érosion": {
      axe1_verset: "Dans ce verset, la racine a-k-l est utilisee dans le sens de consommer, devorer les biens d'autrui injustement. Le concept de destruction ou d'erosion evoque l'usure progressive. La consommation injuste des biens est effectivement une forme de destruction du patrimoine d'autrui. Le verset utilise akala pour decrire l'appropriation illegale des richesses, ce qui est bien une destruction economique. Cependant le sens premier est la consommation injuste, la destruction n'en est que la consequence.",
      axe2_voisins: "Les versets voisins traitent des regles de justice et des prescriptions sociales. Le contexte est celui de l'ethique economique. La destruction impliquerait un acte de vandalisme, or le verset parle d'appropriation illegale — manger les biens d'autrui. La distinction est importante car l'appropriation enrichit le coupable tandis que la destruction ne profite a personne. Le verset vise les profiteurs, pas les destructeurs gratuits.",
      axe3_sourate: "Al-Baqarah utilise la racine a-k-l dans le sens de consommation injuste a plusieurs reprises — manger l'usure, manger les biens des orphelins. La sourate construit un cadre ethique ou la consommation est regulee par la justice. Le concept de destruction est present dans ces situations mais comme consequence, pas comme intention. La sourate vise a reguler la consommation, pas a empecher la destruction en soi.",
      axe4_coherence: "Le Coran utilise l'expression 'manger les biens' comme metaphore de l'appropriation illegale dans de nombreux versets. Le sens de destruction est secondaire par rapport au sens de consommation injuste. La coherence coranique montre que le probleme n'est pas la destruction du bien mais son transfert illegitime d'un proprietaire legitime a un usurpateur. La destruction est un dommage collateral, pas l'objectif du coupable.",
      axe5_frequence: "Pour la mission du khalifa, la protection des biens est une responsabilite fondamentale. Le khalifa doit empecher la consommation injuste des richesses par les puissants. La destruction comme concept est trop vague pour fonder une legislation economique precise. Le khalifa a besoin de categories juridiques claires — vol, usurpation, fraude — pas d'un concept general de destruction qui dilue la responsabilite."
    }
  }});

  console.log('--- V188 (vid=195): hkm/p9 "Sagesse" ---');
  await fixVWA(195, 'hkm', 9, { concepts: {
    "Sagesse": {
      axe1_verset: "Dans ce verset, la racine h-k-m est utilisee dans le sens de jugement, de tribunal — porter les litiges devant les juges. Le concept de sagesse evoque la connaissance profonde et le discernement. Le jugement et la sagesse sont lies car un bon juge doit etre sage. Cependant le verset parle de l'acte juridique de soumettre un litige a un tribunal, pas de la qualite interieure de sagesse. Le sens est institutionnel et procedural.",
      axe2_voisins: "Les versets voisins traitent de la consommation injuste des biens et de la corruption. Le contexte est celui de la justice institutionnelle et de ses derives. La sagesse impliquerait une reflexion philosophique sur le bien et le mal, or le passage parle de corruption judiciaire — utiliser les tribunaux pour voler les biens d'autrui. Le registre est juridique et criminel, pas philosophique.",
      axe3_sourate: "Al-Baqarah utilise la racine h-k-m dans les deux sens — sagesse (hikmah) et jugement (hukm). La sourate distingue ces usages par le contexte. Les versets sur la revelation mentionnent la sagesse comme contenu de l'enseignement divin. Les versets sur les litiges mentionnent le jugement comme procedure juridique. Ce verset est dans le second registre — il parle de tribunaux, pas de philosophie.",
      axe4_coherence: "Le Coran distingue clairement hikmah (sagesse) et hukm (jugement/autorite). Les deux derivent de la meme racine mais ont des fonctions differentes dans le texte. La sagesse est un attribut de la revelation et des prophetes. Le jugement est une fonction institutionnelle exercee par les juges. La coherence coranique montre que dans un contexte de litige et de corruption, c'est le jugement qui est en jeu, pas la sagesse.",
      axe5_frequence: "Pour la mission du khalifa, le systeme judiciaire est un pilier de la gouvernance. Le khalifa doit garantir que les tribunaux rendent des jugements justes, pas qu'ils soient des lieux de sagesse philosophique. La corruption judiciaire que le verset denonce est un danger direct pour la mission du khalifa. La sagesse est une qualite souhaitable chez le juge, mais le verset parle du systeme judiciaire comme institution, pas comme ecole de sagesse."
    }
  }});

  // ===================================================================
  // V189 (vid=196): hll/p3, flh/p27
  // ===================================================================
  console.log('\n--- V189 (vid=196): hll/p3 "Acclamation/Joie" ---');
  await fixVWA(196, 'hll', 3, { concepts: {
    "Acclamation/Joie": {
      axe1_verset: "Dans ce verset, le mot ahillah designe les croissants de lune — les phases lunaires qui servent de reperes temporels. Le concept d'acclamation ou de joie evoque les cris de joie que les gens poussent en voyant le nouveau croissant. L'apparition du croissant suscite effectivement des acclamations dans la tradition arabe. Cependant le verset utilise ahillah pour definir un systeme calendaire, pas pour decrire une emotion collective.",
      axe2_voisins: "Les versets voisins traitent du jeune, du pelerinage et des regles de conduite. Le contexte est legislatif et pratique. L'acclamation impliquerait une celebration, or le verset repond a une question sur les croissants en expliquant leur fonction calendaire. Les versets cherchent a informer et a reguler, pas a celebrer. Le croissant est un outil, pas un objet de fete dans ce contexte.",
      axe3_sourate: "Al-Baqarah utilise les phenomenes astronomiques comme reperes pour les obligations rituelles — l'aube pour le jeune, les croissants pour le calendrier. La sourate ne developpe pas de theme festif autour des phenomenes celestes dans ce passage. L'acclamation est un phenomene social lie a l'observation du croissant, mais la sourate s'interesse a la fonction du croissant, pas a la reaction des observateurs.",
      axe4_coherence: "Le Coran utilise la racine h-l-l dans plusieurs sens — croissant, acclamation, licite. Le sens de chaque occurrence est determine par le contexte et la morphologie. Le pluriel ahillah designe clairement les croissants de lune. L'acclamation utiliserait une autre forme verbale — ahalla ou hallala. La coherence morphologique et contextuelle du Coran confirme que ahillah dans ce verset designe les phases lunaires.",
      axe5_frequence: "Pour la mission du khalifa, le calendrier lunaire est un outil de gouvernance essentiel. Le khalifa organise les obligations collectives — jeune, pelerinage, fetes — selon les croissants de lune. L'acclamation est une reaction emotionnelle qui n'a pas de valeur legislative. Le khalifa a besoin du croissant comme marqueur temporel objectif, pas comme occasion de rejouissance. La gouvernance exige de la precision, pas de l'emotion."
    }
  }});

  console.log('--- V189 (vid=196): flh/p27 "Fendre/Labourer" ---');
  await fixVWA(196, 'flh', 27, { concepts: {
    "Fendre/Labourer": {
      axe1_verset: "Dans ce verset, la racine f-l-h est utilisee dans le sens de reussir, de prosperer — les croyants qui suivent la piete reussiront. Le concept de fendre ou de labourer evoque le travail de la terre, le fait de creuser des sillons. Etymologiquement, la reussite est liee au labour car le cultivateur qui fend la terre recolte ensuite. Cependant le verset parle de reussite spirituelle, pas d'agriculture. Le sens a evolue du concret vers l'abstrait.",
      axe2_voisins: "Les versets voisins traitent de la piete et des regles de conduite. Le contexte est celui de la reussite morale et spirituelle. Le labour impliquerait un travail agricole qui est absent de ce passage. Les versets ne parlent ni de terre, ni de semences, ni de recolte. Le passage est entierement dans le registre ethique et spirituel. Le labour est un sens etymologique que le contexte coranique a depasse.",
      axe3_sourate: "Al-Baqarah utilise la racine f-l-h dans le sens de reussite a plusieurs reprises — ceux qui reussiront sont les pieux, les obeissants. La sourate ne developpe pas le sens agricole de la racine dans ces passages. Le labour apparait dans la sourate avec d'autres racines quand le Coran parle d'agriculture. La sourate distingue les registres — le spirituel et l'agricole — avec des racines differentes.",
      axe4_coherence: "Le Coran utilise la racine f-l-h exclusivement dans le sens de reussite et de prosperite dans les appels a la priere et dans les exhortations morales. Le sens de labour n'est jamais active dans ces contextes. La coherence coranique montre que falaha dans le registre ethique signifie toujours reussir, prosperer, atteindre le salut. Le labour est un sens pre-coranique que la revelation a transcende.",
      axe5_frequence: "Pour la mission du khalifa, la reussite de la communaute est l'objectif ultime. Le khalifa doit creer les conditions de la prosperite materielle et spirituelle. Le labour est un moyen de prosperite materielle, la piete est un moyen de prosperite spirituelle. Le verset parle de la seconde. Le khalifa qui comprend que la reussite depasse le labour physique gouverne avec une vision elevee qui integre le materiel et le spirituel."
    }
  }});

  // ===================================================================
  // V190 (vid=197): edw/p8, edw/p13
  // ===================================================================
  const AXES_HOSTILITE_INIMITIE_EDW = {
    axe1_verset: "Dans ce verset, la racine e-d-w est utilisee dans le sens de transgresser, de depasser les bornes. Le concept d'hostilite ou d'inimitie evoque une relation de haine et de conflit entre deux parties. La transgression et l'hostilite sont liees car transgresser les limites contre quelqu'un est un acte hostile. Cependant le verset parle de depasser les limites divines dans le combat, pas de haine interpersonnelle. Le sens est juridique — ne pas outrepasser — pas emotionnel.",
    axe2_voisins: "Les versets voisins traitent du combat dans le sentier de Dieu et de ses regles. Le contexte est celui de la regulation de la violence par des normes. L'hostilite impliquerait une emotion de haine, or le verset regle le comportement en combat sans reference aux emotions. Les versets prescrivent de combattre ceux qui combattent et de ne pas transgresser. L'accent est sur la discipline, pas sur la haine.",
    axe3_sourate: "Al-Baqarah traite du combat avec des regles strictes qui limitent la violence. La sourate distingue le combat regle de l'hostilite aveugle. Le concept d'hostilite est present dans la sourate mais dans des contextes ou l'inimitie est denoncee comme un vice. Dans ce passage, le combat est une obligation encadree, pas une expression de haine. La sourate veut des combattants disciplinés, pas des ennemis haineux.",
    axe4_coherence: "Le Coran utilise la racine e-d-w dans les deux sens — transgresser et etre hostile. Le contexte determine le sens. Dans les versets legislatifs sur le combat, le sens de transgression des limites est dominant. Dans les versets sur les relations entre communautes, le sens d'hostilite est plus frequent. La coherence coranique montre que dans un contexte de regles de combat, c'est la transgression des normes qui est visee, pas l'hostilite emotionnelle.",
    axe5_frequence: "Pour la mission du khalifa, la regulation de la violence est une des responsabilites les plus lourdes. Le khalifa doit faire la guerre dans des limites precises et empecher la transgression de ces limites. L'hostilite comme concept orienterait vers la gestion des emotions, ce qui est secondaire. Le khalifa a besoin de regles claires et appliquees, pas de therapie emotionnelle. La discipline de combat est son outil principal."
  };

  console.log('\n--- V190 (vid=197): edw/p8 "Hostilité/Inimitié" ---');
  await fixVWA(197, 'edw', 8, { concepts: { "Hostilité/Inimitié": AXES_HOSTILITE_INIMITIE_EDW }});

  console.log('--- V190 (vid=197): edw/p13 "Hostilité/Inimitié" ---');
  await fixVWA(197, 'edw', 13, { concepts: { "Hostilité/Inimitié": AXES_HOSTILITE_INIMITIE_EDW }});

  console.log('\n=== FIX V181-190 TERMINE ===');
}
main().catch(console.error);
