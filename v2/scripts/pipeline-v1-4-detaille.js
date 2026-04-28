// Pipeline Maison — Verset 1:4 — AXES DÉTAILLÉS
// مَـٰلِكِ يَوْمِ ٱلدِّينِ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

const ROOTS = {
  mlk: { id: 256, senses: [
    { sense: 'posséder', sense_ar: 'مَلَكَ', description: 'Avoir la propriété exclusive de quelque chose. Détenir avec autorité et droit.', display_order: 1 },
    { sense: 'maître', sense_ar: 'مَالِك', description: 'Celui qui possède et exerce l\'autorité. Le possesseur qui commande et interdit. Participe actif : celui qui est en train de posséder.', display_order: 2 },
    { sense: 'roi', sense_ar: 'مَلِك', description: 'Souverain qui exerce le pouvoir sur un peuple. Celui qui a le pouvoir de commander et d\'interdire sur les gens.', display_order: 3 },
    { sense: 'royaume', sense_ar: 'مَمْلَكَة', description: 'Territoire sous l\'autorité d\'un souverain. Le domaine sur lequel s\'exerce la possession.', display_order: 4 },
    { sense: 'ange', sense_ar: 'مَلَك', description: 'Messager qui transmet la communication divine. Le Lane\'s lie ce sens à la racine m-l-k par l\'idée de message et d\'envoi.', display_order: 5 },
    { sense: 'esclave', sense_ar: 'مَمْلُوك', description: 'Celui dont la volonté est soumise à l\'autorité d\'un autre. Le contraire du possesseur.', display_order: 6 },
    { sense: 'propriété', sense_ar: 'مِلْك', description: 'Les biens possédés : maisons et terres. Ce qui appartient à quelqu\'un.', display_order: 7 },
  ]},
  ywm: { id: 257, senses: [
    { sense: 'jour', sense_ar: 'يَوْم', description: 'Période de temps, que ce soit le jour ou la nuit. Le temps en général, pas seulement la période de lumière. Le Lane\'s donne "a time, whether night or day".', display_order: 1 },
    { sense: 'journée', sense_ar: 'يَوْم', description: 'La période entre le lever et le coucher du soleil. Le temps de lumière uniquement.', display_order: 2 },
    { sense: 'événement', sense_ar: 'يَوْم', description: 'Un accident, un fait marquant. Le Lane\'s donne "an accident, or event". Un jour particulier qui se distingue par ce qui s\'y passe.', display_order: 3 },
    { sense: 'combat', sense_ar: 'يَوْم', description: 'Un jour de bataille. "Ayyam al-arab" désigne les batailles des Arabes. Le jour où l\'on "gagne le jour".', display_order: 4 },
    { sense: 'étape', sense_ar: 'يَوْم', description: 'La distance parcourue en un jour de marche. Une mesure de distance par le temps.', display_order: 5 },
  ]},
  dyn: { id: 258, senses: [
    { sense: 'obéir', sense_ar: 'دَانَ', description: 'Être obéissant, se soumettre. Accepter l\'autorité de quelqu\'un et suivre ses directives.', display_order: 1 },
    { sense: 'religion', sense_ar: 'دِين', description: 'Le système de croyances et de pratiques auquel on se soumet. L\'ensemble des règles que l\'on suit.', display_order: 2 },
    { sense: 'dette', sense_ar: 'دَيْن', description: 'Ce que l\'on doit à un créancier. L\'obligation financière qui lie le débiteur au créancier.', display_order: 3 },
    { sense: 'rétribution', sense_ar: 'دِين', description: 'Le fait de rendre à chacun ce qu\'il mérite. Récompense ou punition selon les actes. Le Lane\'s note le sens de "repayment, requital, compensation".', display_order: 4 },
    { sense: 'habitude', sense_ar: 'دِين', description: 'Coutume, pratique établie. Ce que l\'on fait de manière régulière et constante.', display_order: 5 },
    { sense: 'soumission', sense_ar: 'دِين', description: 'L\'état de celui qui est assujetti. L\'autorité exercée sur quelqu\'un. Le Lane\'s note "subdual, subjection".', display_order: 6 },
    { sense: 'jugement', sense_ar: 'دِين', description: 'Le moment où les comptes sont rendus. Quand chacun reçoit ce qu\'il mérite pour ses actes.', display_order: 7 },
  ]},
}

const AXES = {
  mlk: {
    'maître': {
      status: 'retenu',
      axe1_verset: 'Le verset dit "maliki yawmi d-din" (Maître du Jour de la rétribution). Le mot malik (avec un a long) est un participe actif de la racine m-l-k, ce qui désigne celui qui est activement en train de posséder, pas un titre statique. Le champ lexical est celui de l\'autorité et de la possession active : celui qui détient avec pouvoir et responsabilité. Le mot est en triple idafa (annexion) : le Maître DU Jour DE la rétribution, ce qui crée une chaîne de possession où chaque mot complète le précédent.',
      axe2_voisins: 'Le verset 2 qualifie Dieu de Seigneur des mondes (rabb = celui qui élève). Le verset 4 ajoute qu\'il est Maître du Jour (malik = celui qui possède). La progression va de la seigneurie bienveillante (élever et nourrir) à la maîtrise absolue (posséder et décider). Les deux attributs sont complémentaires : le Seigneur s\'occupe de la croissance au quotidien, le Maître détient l\'autorité finale sur le Jour des comptes. Cette progression montre que Dieu est à la fois tendre (rabb) et souverain (malik).',
      axe3_sourate: 'La Fatiha qualifie Dieu avec des titres de plus en plus forts : miséricordieux (v1/3), Seigneur des mondes (v2), puis Maître du Jour de la rétribution (v4). C\'est une escalade qui va de la bonté à l\'autorité temporelle. Le verset 4 introduit la dimension de la justice : Dieu n\'est pas seulement miséricordieux et seigneur, Il est aussi celui qui rendra les comptes. Ce verset complète le portrait en ajoutant la dimension de la responsabilité et de la conséquence des actes.',
      axe4_coherence: 'Le Coran utilise malik et malik pour Dieu dans différents contextes. Les deux lectures (malik avec a long = possesseur, malik avec a court = roi) sont attestées dans les lectures coraniques de ce verset. Cependant, la forme malik (participe actif, a long) insiste sur la possession active : Dieu est en train de posséder ce Jour, Il ne se contente pas d\'y régner. Le Coran utilise cette distinction de manière cohérente : la possession active implique une responsabilité directe.',
      axe5_frequence: 'Le maître possède avec autorité et responsabilité. Pour le khalifa, c\'est un modèle de gouvernance : posséder implique être responsable de ce qu\'on possède, pas simplement en jouir. La maîtrise du Jour de la rétribution montre que les actes ont des conséquences, ce qui fonde la responsabilité morale du khalifa. Si Dieu est le Maître du Jour où les comptes sont rendus, alors le khalifa doit agir en sachant que ses actes seront évalués.',
      proof_ctx: 'Le "maître" (malik, avec a long = participe actif) est celui qui possède activement avec autorité, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Test de compatibilité grammaticale : le mot est en idafa avec yawm. "Maître du Jour" fonctionne parfaitement en français courant. Distinction avec "roi" : malik (a court) = roi qui règne sur un peuple, c\'est un titre politique. Malik (a long) = possesseur qui détient avec autorité, c\'est un rapport de propriété. Le verset utilise la forme avec a long (participe actif = celui qui est en train de posséder), ce qui insiste sur la possession directe et active, pas sur le règne politique. Distinction avec "posséder" : posséder est le verbe (l\'action), maître est le nom d\'agent (celui qui fait l\'action). Le verset identifie la personne (le Maître), pas l\'action (posséder).',
    },
    roi: {
      status: 'probable',
      axe1_verset: 'Le roi (malik, a court) est le souverain qui commande un peuple, celui qui a le pouvoir politique. Le verset utilise malik (a long) = possesseur actif, pas malik (a court) = roi. Les deux lectures sont attestées dans les traditions de récitation du Coran. Le champ lexical du verset est celui de la possession et de l\'autorité sur un Jour précis, pas sur un peuple. Le roi règne sur des sujets, le maître possède ce qui lui appartient.',
      axe2_voisins: 'Les versets voisins qualifient Dieu comme Seigneur (rabb, v2) et Miséricordieux (v3). La royauté serait un titre politique qui s\'inscrirait dans cette série, mais rabb et malik ont déjà couvert l\'idée d\'autorité. La progression de la sourate va de la bonté à la possession, pas de la bonté à la royauté. Le portrait construit est celui d\'un Dieu qui prend soin et qui détient, pas d\'un Dieu qui règne politiquement.',
      axe3_sourate: 'La Fatiha n\'est pas un texte politique, c\'est une prière. La royauté est un concept politique (un roi règne sur un État), alors que la maîtrise est un concept de propriété (un maître possède ce qui lui appartient). La sourate pose une relation personnelle entre l\'humain et Dieu, pas une structure de gouvernement. Le ton est intime (Toi seul que nous adorons), pas institutionnel.',
      axe4_coherence: 'Les deux lectures (malik et malik) sont attestées dans les traditions de récitation du Coran. Le Coran utilise les deux formes dans différents contextes. Cependant, le Coran décrit aussi Dieu comme "maliku n-nas" (Roi des gens, sourate 114), où c\'est clairement la forme roi. Ici, la tradition majoritaire lit malik (possesseur), ce qui s\'accorde mieux avec la possession d\'un Jour (on possède un moment, on ne règne pas sur un moment).',
      axe5_frequence: 'Le roi commande et interdit, il exerce un pouvoir politique. Pour le khalifa, la royauté serait un modèle de gouvernance politique. Mais le verset parle de la possession d\'un Jour, pas du gouvernement d\'un peuple. Le modèle proposé est celui de la responsabilité face aux conséquences (la rétribution), pas celui du pouvoir politique. La maîtrise est plus intime et plus personnelle que la royauté.',
      proof_ctx: 'Le roi (malik, a court) est le souverain politique. Le maître (malik, a long) est le possesseur actif. Le verset utilise la forme a long (participe actif = possession active). La frontière philosophique : le roi règne sur des sujets (relation de pouvoir), le maître possède ce qui lui appartient (relation de propriété). On possède un Jour, on ne règne pas sur un Jour. La possession est plus directe et plus totale que la royauté.',
    },
    'posséder': {
      status: 'probable',
      axe1_verset: 'Posséder est le sens verbal de la racine m-l-k : avoir la propriété exclusive. Le verset utilise le participe actif malik (celui qui possède), pas le verbe malaka (posséder). Le champ lexical du verset est celui de l\'identité (qui est Dieu), pas de l\'action (ce qu\'Il fait). Cependant, le lien est direct : le malik est celui qui malaka, le maître est celui qui possède. Le sens "posséder" est contenu dans "maître".',
      axe2_voisins: 'Les versets voisins qualifient Dieu par des noms d\'agent (rabb = celui qui élève, malik = celui qui possède), pas par des verbes d\'action. La sourate construit un portrait avec des titres, pas un récit avec des actions. Posséder serait narratif (Dieu possède le Jour), le verset est descriptif (Dieu est le Maître du Jour).',
      axe3_sourate: 'La Fatiha pose des identités permanentes, pas des actions temporelles. Posséder est une action (on possède à un moment donné), être maître est un état (on est maître en permanence). La sourate décrit ce que Dieu EST, pas ce qu\'Il FAIT à un moment donné.',
      axe4_coherence: 'Le Coran utilise le verbe malaka dans d\'autres contextes pour l\'action de posséder. Dans ce verset, c\'est le participe actif malik qui est utilisé, pas le verbe. Cette distinction est maintenue : le titre identifie, le verbe raconte.',
      axe5_frequence: 'Posséder est une responsabilité du khalifa : ce qu\'on possède, on en est responsable. Cependant, le verset pose l\'identité du Maître, pas l\'acte de posséder. Le khalifa doit reconnaître le Maître (identité) avant d\'imiter la possession responsable (action).',
      proof_ctx: 'Posséder est le verbe (l\'action), maître est le nom d\'agent (celui qui fait l\'action). Le verset utilise le nom malik, pas le verbe malaka. La frontière : posséder est temporel (on possède maintenant), être maître est permanent (on est maître en continu). Le verset pose un état permanent.',
    },
    royaume: { status: 'nul', proof_ctx: 'Territoire sous autorité. Le verset parle de la maîtrise d\'un Jour, pas d\'un territoire géographique.' },
    ange: { status: 'nul', proof_ctx: 'Messager divin. Complètement hors du contexte de la possession du Jour de la rétribution.' },
    esclave: { status: 'nul', proof_ctx: 'Celui qui est soumis. C\'est le contraire du maître. Le verset parle du Maître, pas de l\'esclave.' },
    'propriété': { status: 'nul', proof_ctx: 'Biens matériels possédés. Le verset parle d\'autorité sur un Jour, pas de biens matériels.' },
  },
  ywm: {
    jour: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "yawmi d-din" (Jour de la rétribution). Le mot yawm désigne une période de temps, un moment défini et identifiable. Le champ lexical est celui du temps et de l\'échéance : il y a un moment précis où les comptes seront rendus. Le mot yawm est en idafa avec ad-din (la rétribution), ce qui crée l\'expression "le Jour DE la rétribution" : un moment défini par ce qui s\'y passe. L\'article défini (le Jour, pas un jour) montre qu\'il s\'agit d\'un moment connu et attendu, pas d\'un jour quelconque.',
      axe2_voisins: 'Les versets voisins qualifient Dieu hors du temps : miséricordieux (qualité permanente, v1/3), Seigneur des mondes (autorité spatiale, v2). Le verset 4 ajoute la dimension temporelle : Dieu est aussi Maître du temps, spécifiquement du Jour ultime. Cette progression va de l\'espace (les mondes) au temps (le Jour), montrant que la souveraineté de Dieu couvre toutes les dimensions. Le Jour de la rétribution est le point final vers lequel tout converge.',
      axe3_sourate: 'La Fatiha qualifie Dieu à la fois hors du temps (miséricordieux en permanence) et dans le temps (Maître du Jour). Cette double qualification montre que Dieu est éternel mais aussi présent dans l\'histoire. Le Jour de la rétribution donne un horizon à la mission humaine : il y a une échéance, les actes ne sont pas sans conséquence. La sourate pose ainsi le cadre complet : Dieu est bon (miséricorde), responsable (seigneurie), et juste (le Jour viendra).',
      axe4_coherence: 'Le Coran utilise yawm pour des jours spécifiques et marquants : yawm al-qiyama (le Jour de la résurrection), yawm ad-din (le Jour de la rétribution), yawm al-hisab (le Jour du compte). L\'usage est constant : yawm désigne un moment temporel précis, identifié par ce qui s\'y passe. Le Lane\'s donne "a time, whether night or day", ce qui confirme que yawm est une période de temps au sens large, pas seulement la période de lumière.',
      axe5_frequence: 'Le Jour de la rétribution est le moment où la mission du khalifa est évaluée. C\'est l\'échéance qui donne du poids aux actes : si les actes sont évalués, alors chaque décision compte. Sans ce Jour, la mission du khalifa n\'aurait pas de cadre de responsabilité. Le khalifa agit en sachant qu\'il y aura un moment de vérité, ce qui fonde la gravité et la sérieux de sa mission de justice et de civilisation.',
      proof_ctx: 'Le "jour" (yawm) est une période de temps, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le Lane\'s donne "a time, whether night or day; time absolutely". Test de compatibilité grammaticale : nom en idafa avec ad-din. "Jour de la rétribution" fonctionne parfaitement. Distinction avec "événement" : l\'événement est ce qui arrive (le contenu), le jour est le moment où ça arrive (le contenant). Le verset parle du moment (yawm), pas de ce qui s\'y passe (l\'événement). L\'événement est la rétribution, le jour est le moment de cette rétribution. Les deux sont liés mais le verset distingue le moment (yawm) du contenu (ad-din).',
    },
    'événement': {
      status: 'probable',
      axe1_verset: 'L\'événement est un fait marquant, quelque chose qui arrive et qui se distingue. Le verset utilise yawm (jour, moment temporel), pas un mot qui désigne un événement. Le champ lexical du verset est celui du temps et de l\'échéance, pas du récit d\'un fait. Cependant, le Jour de la rétribution est aussi un événement au sens où c\'est un fait marquant qui arrivera. Les deux sens se chevauchent partiellement.',
      axe2_voisins: 'Les versets voisins décrivent des attributs permanents de Dieu. Le verset 4 introduit une dimension temporelle avec le Jour. L\'événement serait un fait qui se produit dans le temps, ce qui est compatible. Cependant, les versets voisins posent des qualités (miséricordieux, seigneur), pas des faits (événement). Le mot yawm s\'inscrit dans une série de qualifications, pas dans un récit d\'événements.',
      axe3_sourate: 'La Fatiha qualifie Dieu, elle ne raconte pas des événements. Le Jour est un attribut de la maîtrise de Dieu (Il est Maître du Jour), pas un événement raconté. La sourate est descriptive et contemplative, pas narrative. L\'événement serait un sens plus narratif que descriptif.',
      axe4_coherence: 'Le Coran utilise yawm principalement dans le sens de moment temporel, pas d\'événement. Quand le Coran veut parler d\'un événement, il utilise d\'autres mots. Le mot yawm est systématiquement temporel dans le Coran : un jour, un moment, une période. L\'événement est ce qui remplit le jour, pas le jour lui-même.',
      axe5_frequence: 'L\'événement est ce qui se passe, le jour est quand ça se passe. Pour le khalifa, ce qui compte c\'est l\'échéance (le moment viendra), pas le récit de l\'événement. Le verset pose un horizon temporel (il y aura un Jour), pas un fait divers (il y aura un événement).',
      proof_ctx: 'L\'événement est ce qui arrive (le contenu). Le jour est le moment où ça arrive (le contenant temporel). Le verset utilise yawm (le moment), pas un mot qui désigne un fait. La frontière : le jour est un cadre temporel, l\'événement est ce qui remplit ce cadre. Le Coran utilise yawm comme moment temporel, pas comme synonyme d\'événement.',
    },
    journée: { status: 'nul', proof_ctx: 'Période de lumière entre lever et coucher du soleil. Le verset parle d\'un Jour cosmique et ultime, pas d\'une journée ordinaire de 12 heures.' },
    combat: { status: 'nul', proof_ctx: 'Jour de bataille. Le verset parle du Jour de la rétribution, pas d\'une bataille militaire.' },
    'étape': { status: 'nul', proof_ctx: 'Distance parcourue en un jour de marche. Mesure de distance. Complètement hors du contexte du verset.' },
  },
  dyn: {
    'rétribution': {
      status: 'retenu',
      axe1_verset: 'Le verset dit "yawmi d-din" (Jour de la rétribution). Le mot din dans ce contexte désigne le moment où chacun reçoit ce qu\'il mérite pour ses actes : la récompense pour le bien, la conséquence pour le mal. Le champ lexical est celui de la justice et de l\'évaluation finale. Le mot est en idafa avec yawm (le Jour), ce qui crée l\'expression "le Jour DE la rétribution" : le moment où les comptes sont rendus. C\'est le sens qui complète logiquement "maître" et "jour" : celui qui possède le moment des comptes.',
      axe2_voisins: 'Les versets voisins posent Dieu comme Miséricordieux (v3) et Seigneur (v2). Le verset 4 ajoute la dimension de la justice : la miséricorde n\'exclut pas la rétribution. Les deux coexistent dans le portrait de Dieu que la Fatiha construit. La progression montre que Dieu est bon (miséricorde) ET juste (rétribution). L\'un sans l\'autre serait incomplet : la miséricorde sans justice serait de l\'indulgence aveugle, la justice sans miséricorde serait de la tyrannie.',
      axe3_sourate: 'La Fatiha pose les fondements de la relation avec Dieu : miséricorde ET rétribution. Les deux sont mentionnés comme des attributs complémentaires. La rétribution donne un cadre de responsabilité à la relation : si Dieu est Maître du Jour de la rétribution, alors les actes de l\'humain ont un poids et des conséquences. La sourate ne pose pas un Dieu seulement gentil ni seulement sévère, mais un Dieu complet.',
      axe4_coherence: 'Le Coran utilise "yawm ad-din" dans d\'autres passages pour le Jour où chacun reçoit ce qu\'il mérite. L\'expression est récurrente et son sens est stable. Le Lane\'s donne din comme "repayment, requital, compensation" : c\'est le fait de rendre à chacun selon ses actes. Le Coran distingue din (rétribution) de diin (religion) et dayn (dette) par le contexte et la vocalisation, même si les trois partagent la même racine.',
      axe5_frequence: 'La rétribution est le mécanisme qui rend la mission du khalifa significative : les actes ont des conséquences, donc chaque décision compte. Sans rétribution, pas de responsabilité, et sans responsabilité, pas de mission. Le khalifa agit en sachant que ses actes seront évalués, ce qui donne du poids à chaque choix. La rétribution n\'est pas une menace mais un cadre : elle garantit que la justice n\'est pas un mot vide.',
      proof_ctx: 'La "rétribution" est le fait de rendre à chacun ce qu\'il mérite, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le Lane\'s donne "repayment, requital, compensation". Test de compatibilité grammaticale : nom défini avec al-. "La rétribution" fonctionne en français courant. Distinction avec "religion" : la religion est le système de croyances qu\'on suit (les règles), la rétribution est le résultat final (les conséquences). "Jour de la religion" ne fait pas sens en français courant, "Jour de la rétribution" fait sens. Distinction avec "jugement" : le jugement est l\'acte d\'évaluer (le processus), la rétribution est le résultat de cette évaluation (la conséquence). Le verset parle du Jour du résultat (chacun reçoit ce qu\'il mérite), pas du Jour du processus (chacun est évalué). Le Lane\'s insiste sur l\'idée de "repayment" qui est le résultat, pas le processus.',
    },
    jugement: {
      status: 'probable',
      axe1_verset: 'Le jugement est l\'acte d\'évaluer, de peser les actes pour déterminer ce que chacun mérite. Le verset dit "yawm ad-din", et din peut signifier jugement dans certains contextes. Le champ lexical du verset est celui de la justice finale, ce qui est compatible avec le jugement. Cependant, le Lane\'s insiste sur le sens de "repayment" (rétribution) plutôt que "judgment" (jugement). Le jugement est le processus, la rétribution est le résultat.',
      axe2_voisins: 'Les versets voisins posent un Dieu miséricordieux et seigneur. Le jugement serait compatible avec cette série d\'attributs : Dieu est bon, Il élève, et Il juge. Cependant, les versets insistent sur ce que Dieu EST (miséricordieux, seigneur, maître), pas sur ce qu\'Il FAIT (juger). Le jugement est une action, la rétribution est un résultat. Le verset pose un résultat (le Jour de la rétribution), pas un processus (le Jour du jugement).',
      axe3_sourate: 'La Fatiha pose des attributs et des états, pas des processus. Le jugement est un processus (évaluer, peser, décider). La rétribution est un état final (chacun a reçu ce qu\'il mérite). La sourate est orientée vers les résultats (qui est Dieu, ce qui revient à l\'humain), pas vers les processus (comment Dieu juge).',
      axe4_coherence: 'Le Coran utilise din dans le sens de rétribution (repayment) et dans le sens de jugement (judgment) selon les contextes. Cependant, dans l\'expression "yawm ad-din", le sens dominant d\'après les sources étymologiques est la rétribution. Le Coran utilise d\'autres mots pour le jugement : hisab (le compte), qada (décider). La rétribution est plus spécifique que le jugement.',
      axe5_frequence: 'Le jugement est le processus par lequel le khalifa évalue les actes. C\'est une compétence importante. Cependant, le verset pose le résultat (la rétribution), pas le processus (le jugement). Pour le khalifa, ce qui compte c\'est que les actes aient des conséquences (rétribution), pas le mécanisme d\'évaluation (jugement).',
      proof_ctx: 'Le jugement est l\'acte d\'évaluer (le processus). La rétribution est le résultat de cette évaluation (la conséquence). Le Lane\'s donne "repayment, requital" pour din, ce qui insiste sur le résultat. La frontière philosophique : juger c\'est évaluer, rétribuer c\'est distribuer les conséquences. Le verset parle du Jour où les conséquences sont distribuées, pas du Jour où l\'évaluation est faite.',
    },
    religion: {
      status: 'probable',
      axe1_verset: 'La religion est le système de croyances et de pratiques auquel on se soumet. Le verset dit "yawm ad-din" et din peut signifier religion. Cependant, "le Jour de la religion" ne fait pas sens en français courant : on ne dit pas "le Jour de la religion" comme on dit "le Jour de la rétribution". Le champ lexical du verset est celui de la justice finale et des comptes, pas celui du système de croyances.',
      axe2_voisins: 'Les versets voisins qualifient Dieu par des attributs (miséricorde, seigneurie, maîtrise), pas par référence à un système de croyances. La religion comme système est un concept humain (les règles qu\'on suit), alors que le verset parle d\'un attribut divin (ce que Dieu maîtrise). Les versets construisent un portrait de Dieu, pas une description du système religieux.',
      axe3_sourate: 'La Fatiha est une prière qui pose la relation entre l\'humain et Dieu. La religion serait un concept trop large et trop vague pour ce verset précis. La rétribution est spécifique et concrète : chacun reçoit ce qu\'il mérite. La religion est générale et abstraite : l\'ensemble des croyances et des pratiques. Le verset cherche la précision, pas la généralité.',
      axe4_coherence: 'Le Coran utilise din dans le sens de religion dans de nombreux passages ("lakum dinukum wa liya din" = à vous votre religion et à moi la mienne). Mais dans l\'expression "yawm ad-din", le contexte pointe vers la rétribution, pas vers la religion. Le Coran distingue les deux usages par le contexte : quand din est associé à yawm (jour), c\'est la rétribution. Quand din est associé aux humains, c\'est la religion.',
      axe5_frequence: 'La religion est le cadre dans lequel le khalifa exerce sa mission. C\'est un concept important mais trop vaste pour ce verset. Le verset pose un moment précis (le Jour) avec un contenu précis (la rétribution), pas un système global (la religion). La rétribution est plus opérationnelle que la religion pour motiver l\'action juste.',
      proof_ctx: 'La religion est le système de croyances et de pratiques. La rétribution est le résultat final des actes. "Jour de la religion" ne fonctionne pas en français courant, "Jour de la rétribution" fonctionne. Le Coran distingue les deux usages de din par le contexte : avec yawm, c\'est la rétribution.',
    },
    dette: {
      status: 'peu_probable',
      axe1_verset: 'La dette est l\'obligation financière envers un créancier. Le verset parle d\'un Jour cosmique de comptes, pas de commerce ou de finance. Le champ lexical du verset est celui de la justice divine, pas des transactions commerciales. "Le Jour de la dette" ne fonctionne pas en français courant dans ce contexte de souveraineté divine. La dette est un sens concret et matériel de la racine, trop étroit pour ce verset.',
      axe2_voisins: 'Les versets voisins décrivent des attributs grandioses de Dieu (miséricorde universelle, seigneurie des mondes). La dette serait un concept trop petit et trop matériel pour s\'inscrire dans cette série d\'attributs cosmiques. La progression de la sourate va du grand au plus grand, pas du grand au petit.',
      axe3_sourate: 'La Fatiha traite de la relation fondamentale entre l\'humain et Dieu, pas de relations commerciales. La dette est un concept économique qui n\'a pas sa place dans une prière d\'ouverture qui pose les fondements de la foi. Le registre de la sourate est théologique et moral, pas financier.',
      axe4_coherence: 'Le Coran utilise dayn (avec un ya long) pour la dette financière, pas din (avec un ya court). Les deux mots partagent la même racine mais ont des formes et des sens différents. Le Coran distingue clairement les deux : la sourate al-Baqara (2:282) utilise dayn pour la dette dans un contexte commercial, ici c\'est din dans un contexte de justice divine.',
      axe5_frequence: 'La dette est une relation entre créancier et débiteur. Pour le khalifa, les relations financières sont importantes mais ce n\'est pas le sujet du verset. Le verset pose un cadre de responsabilité morale (rétribution des actes), pas de responsabilité financière (remboursement d\'une dette).',
      proof_ctx: 'La dette (dayn) est l\'obligation financière. La rétribution (din) est le résultat moral des actes. Le Coran distingue dayn (dette, ya long) de din (rétribution, ya court). "Jour de la dette" n\'a pas de sens dans ce contexte théologique. Le verset parle de justice divine, pas de commerce.',
    },
    'obéir': { status: 'nul', proof_ctx: 'Se soumettre, être obéissant. Le verset parle d\'un Jour, pas de l\'acte d\'obéir. "Jour de l\'obéissance" ne fonctionne pas.' },
    habitude: { status: 'nul', proof_ctx: 'Coutume, pratique établie. "Jour de l\'habitude" n\'a aucun sens dans ce contexte.' },
    soumission: { status: 'nul', proof_ctx: 'État d\'assujettissement. "Jour de la soumission" ne correspond pas au sens du verset qui parle de conséquences des actes.' },
  },
}

const VERSE = {
  verse_id: 4,
  words: [
    {verse_id:4, word_key:'mlk', sense_chosen:'maître', position:1},
    {verse_id:4, word_key:'ywm', sense_chosen:'jour', position:2},
    {verse_id:4, word_key:'dyn', sense_chosen:'rétribution', position:3},
  ],
  translation_arab: "Maître du Jour de la rétribution.",
  translation_explanation: "Le verset est construit comme un enchaînement (ce qu'on appelle en arabe une idafa, quand un mot est rattaché au suivant pour dire qu'il lui appartient, comme \"la porte de la maison\"). Ici c'est une triple idafa : Malik (le maître, celui qui possède) possède le Jour (yawm), et ce Jour est celui de la rétribution (ad-din). Chaque mot complète le précédent, comme quand on dit en français \"le propriétaire de la maison du quartier\". La forme malik (avec un a long, c'est un participe actif) désigne celui qui possède avec autorité. C'est différent de malik (avec un a court) qui veut dire roi. \"Maître\" est choisi car c'est du français courant pour exprimer la possession avec autorité. Le mot din est traduit par \"rétribution\" car le Lane's le définit comme \"repayment, requital\" : le moment où chacun reçoit ce qu'il mérite pour ses actes.",
  segments: [
    {fr:"Maître",pos:"nom",phon:"maliki",arabic:"مَـٰلِكِ",word_key:"mlk",is_particle:false,sense_retenu:"maître"},
    {fr:"du Jour",pos:"nom",phon:"yawmi",arabic:"يَوْمِ",word_key:"ywm",is_particle:false,sense_retenu:"jour"},
    {fr:"de la rétribution",pos:"nom",phon:"ad-dini",arabic:"ٱلدِّينِ",word_key:"dyn",is_particle:false,sense_retenu:"rétribution"},
  ],
}

const DAILY = [
  {analysis_id:256,sense:'maître',arabic:'مَالِكِ يَوْمِ ٱلدِّينِ',phon:'maliki yawmi d-din',french:'Maître du Jour de la rétribution'},
  {analysis_id:256,sense:'maître',arabic:'هُوَ مَالِكُ ٱلْبَيْتِ',phon:'huwa maliku l-bayt',french:'Il est le maître de la maison'},
  {analysis_id:256,sense:'maître',arabic:'مَلَكَ نَفْسَهُ',phon:'malaka nafsahu',french:'Il a maîtrisé lui-même'},
  {analysis_id:257,sense:'jour',arabic:'يَوْمٌ جَمِيلٌ',phon:'yawmun jamil',french:'Une belle journée'},
  {analysis_id:257,sense:'jour',arabic:'فِي يَوْمٍ مِنَ ٱلْأَيَّامِ',phon:'fi yawmin min al-ayyam',french:'Un jour parmi les jours'},
  {analysis_id:257,sense:'jour',arabic:'يَوْمَ ٱلْقِيَامَةِ',phon:'yawma l-qiyama',french:'Le Jour de la résurrection'},
  {analysis_id:258,sense:'rétribution',arabic:'كَمَا تَدِينُ تُدَانُ',phon:'kama tadinu tudan',french:'Comme tu traites tu seras traité'},
  {analysis_id:258,sense:'rétribution',arabic:'يَوْمُ ٱلدِّينِ',phon:'yawmu d-din',french:'Le Jour de la rétribution'},
  {analysis_id:258,sense:'rétribution',arabic:'لَهُ دَيْنٌ عَلَيَّ',phon:'lahu daynun alayya',french:'Il a une dette sur moi'},
]

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:4 — AXES DÉTAILLÉS')
  log('============================================')
  log('')

  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  let totalSenses = 0
  for (const [key, root] of Object.entries(ROOTS)) {
    const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
    const {error} = await db.from('word_meanings').insert(senses)
    if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
    totalSenses += senses.length
    log('  [' + key + '] ' + senses.length + ' sens insérés')
    for (const s of senses) log('    ' + s.display_order + '. ' + s.sense)
  }
  log('  TOTAL : ' + totalSenses + ' sens')
  log('')

  log('>>> ÉTAPE 3 — ANALYSE DES SENS (axes détaillés)')
  let updatedCount = 0
  let totalWithAxes = 0
  for (const [rootKey, rootAxes] of Object.entries(AXES)) {
    log('  [' + rootKey + ']')
    const rootId = ROOTS[rootKey].id
    const {data: meanings} = await db.from('word_meanings')
      .select('id, sense').eq('analysis_id', rootId).order('display_order')
    for (const m of meanings) {
      const axeData = rootAxes[m.sense]
      if (!axeData) { log('    ' + m.sense + ' : pas de données axes'); continue }
      const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
      if (axeData.axe1_verset) { upd.axe1_verset=axeData.axe1_verset; upd.axe2_voisins=axeData.axe2_voisins; upd.axe3_sourate=axeData.axe3_sourate; upd.axe4_coherence=axeData.axe4_coherence; upd.axe5_frequence=axeData.axe5_frequence; totalWithAxes++ }
      const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
      if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
      const tag = axeData.axe1_verset ? '(5 axes détaillés)' : '(proof_ctx seul)'
      log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + ' ' + tag)
      updatedCount++
    }
    log('')
  }
  log('  ' + updatedCount + ' sens mis à jour dont ' + totalWithAxes + ' avec axes détaillés')
  log('')

  log('>>> ÉTAPE 4 — TRADUCTION')
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(VERSE.words)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
  else {
    log('  verse_word_analyses : ' + VERSE.words.length + ' mots insérés')
    for (const w of VERSE.words) log('    ' + w.word_key + ' -> ' + w.sense_chosen + ' (pos ' + w.position + ')')
  }
  const {error: vaErr} = await db.from('verse_analyses').insert({
    verse_id: VERSE.verse_id, translation_arab: VERSE.translation_arab,
    translation_explanation: VERSE.translation_explanation, segments: VERSE.segments,
  })
  if (vaErr) log('  ERREUR va: ' + vaErr.message)
  else log('  Traduction : "' + VERSE.translation_arab + '"')
  const {error: dailyErr} = await db.from('word_daily').insert(DAILY)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  ' + DAILY.length + ' phrases du quotidien')

  log('')
  log('============================================')
  log('  VERSET 1:4 — TERMINÉ')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
