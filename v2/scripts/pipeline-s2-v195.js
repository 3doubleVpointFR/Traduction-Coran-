const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 195
// verse_id=202, analysis_id=559
// "Et depensez dans le sentier de Dieu et ne vous jetez
//  pas par vos propres mains dans la destruction. Et
//  faites le bien. Car Dieu aime les bienfaisants."
// Depense, sentier de Dieu, ne pas se detruire, excellence
// =====================================================

const verseData = {
  195: {
    verse_id: 202,
    analysis_id: 559,
    translation_arab: "Et depensez dans le chemin de Dieu et ne vous precipitez pas de vos propres mains vers la destruction. Et excellez. Dieu aime ceux qui excellent.",
    full_translation: "Et depensez dans le sentier d'Allah. Et ne vous jetez pas par vos propres mains dans la destruction. Et faites le bien. Car Allah aime les bienfaisants.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par un imperatif de forme IV : **anfiquu** est un imperatif 2MP de la racine n-f-q. Le Lane's donne pour la forme IV : depenser, distribuer, faire sortir de la richesse, debourser. L'imperatif de forme IV signifie « faites sortir » — c'est un acte de faire sortir ses biens de soi vers l'exterieur. La forme IV (af'ala) ajoute l'idee de causalite : on fait sortir la richesse, on la met en mouvement. La preposition **fii** (dans) introduit le cadre de la depense, et le nom **sabiili** (le chemin de) precise la direction. Le mot **sabiili** est un nom en idafa (construction d'annexion) avec le nom qui suit. Le Lane's donne pour s-b-l : chemin, voie, route, direction, moyen d'acces. Le chemin est defini par l'idafa avec **Allaahi** (Dieu) — c'est le chemin de Dieu, la voie que Dieu a tracee. La construction « fii sabiili Allaahi » (dans le chemin de Dieu) est une expression coranique recurrente qui designe la voie que Dieu a etablie pour les croyants.

Le verset poursuit avec une negation : **wa laa tulquu** — la particule de negation laa avec le verbe inaccompli tulquu (2MP) de la racine l-q-y a la forme IV. Le Lane's donne pour la forme IV alqaa : jeter, lancer, projeter, deposer, mettre. La forme IV transforme le sens de base (rencontrer, se trouver face a) en « jeter, lancer » — faire que quelque chose soit projete. L'inaccompli avec la negation laa exprime une interdiction permanente : ne jetez jamais. La preposition **bi** introduit l'instrument : **aydii-kum** (vos mains), un pluriel de yad de la racine y-d-y. Le Lane's donne : main, puissance, action, moyen, bienfait. Les mains sont l'instrument par lequel on se jette — ce sont les propres mains des croyants qui les precipitent. La preposition **ilaa** (vers) introduit la destination : **at-tahlukati** (la destruction), un nom defini singulier de la racine h-l-k. Le Lane's donne : perir, etre detruit, s'aneantir, la destruction, la perte, la ruine. Le mot at-tahluka est un nom verbal qui designe l'etat de destruction — c'est LA destruction, definie par l'article al- comme une realite connue et identifiable. La construction complete dit : ne jetez pas de vos propres mains vers la destruction — vos propres actions (mains) peuvent vous precipiter vers la ruine.

Le verset se termine par un second imperatif : **ahsinuu** est un imperatif 2MP de la racine h-s-n a la forme IV. Le Lane's donne pour la forme IV : faire le bien, exceller, faire quelque chose avec excellence, embellir. La forme IV (af'ala) ajoute l'idee d'effort actif — exceller n'est pas un etat passif mais un acte delibere de perfection. Le verbe est intransitif ici — ahsinuu tout court, sans complement, ce qui signifie « excellez en general, dans tout ce que vous faites ». La particule **inna** (certes, en verite) introduit une proposition causale qui justifie l'ordre. Le nom **Allaaha** (Dieu) est le sujet. Le verbe **yuhibbu** est un inaccompli 3MS de la racine h-b-b a la forme IV. Le Lane's donne pour la forme IV : aimer, affectionner, cherir, preferer. L'inaccompli marque une action continue — Dieu aime en permanence, ce n'est pas un amour ponctuel. Le participe actif pluriel defini **al-muhsiniina** de la racine h-s-n designe ceux qui excellent — les muhsinin sont ceux qui font les choses avec excellence de maniere continue (participe actif = action en cours). L'article al- les definit comme une categorie connue : LES excellents, ceux qui sont connus pour leur excellence.

§JUSTIFICATION§
**depensez** — Le sens retenu est « depenser/distribuer ». Le verbe anfiquu est un imperatif de forme IV qui signifie « faites sortir vos biens ». Le mot « depensez » est choisi car il designe l'acte de faire sortir de la richesse pour la distribuer. L'alternative « percer/traverser » (sens physique de n-f-q : le tunnel, la percee) est ecartee car l'imperatif de forme IV avec le contexte de « dans le chemin de Dieu » designe clairement la depense, pas le forage.

**le chemin** — Le sens retenu est « chemin/voie ». Le mot sabiili designe une voie tracee, une route. Le mot « chemin » est choisi car il designe une direction concrete et definissable. L'alternative « sentier » est ecartee car « sentier » en francais courant evoque un petit chemin de randonnee, alors que sabiil dans le Lane's designe une voie large et claire, un chemin principal. L'alternative « cause » (comme dans « dans la cause de Dieu ») est ecartee car c'est une interpretation exegetique — le texte dit « chemin », pas « cause ».

**Dieu** — Le sens retenu est « Dieu/divinite ». Le nom Allah est le nom propre de Dieu en arabe. Le mot « Dieu » est la traduction standard.

**ne jetez pas** — Le sens retenu est « jeter/projeter ». Le verbe tulquu est un inaccompli de forme IV de la racine l-q-y. La forme IV alqaa signifie « jeter, lancer, projeter » selon le Lane's. Le mot « jetez » est choisi car il designe l'acte de projeter quelque chose — ici se projeter soi-meme vers la destruction. La racine l-q-y a la forme I signifie « rencontrer, se trouver face a », mais la forme IV transforme ce sens en « jeter, lancer » — le sens de rencontre est propre a la forme I, pas a la forme IV utilisee ici. L'alternative « rencontrer » est ecartee car la forme IV n'a pas ce sens.

**vos mains** — Le sens retenu est « main/action ». Le nom aydii-kum est le pluriel de yad (main). Le mot « mains » est choisi car le texte designe litteralement les mains comme instrument de l'action. Le Lane's donne aussi « puissance, bienfait, moyen » pour yad, mais ici le texte dit « bi-aydii-kum » (avec/par vos mains) — l'instrument concret par lequel on agit. Les mains representent les actions des croyants : ce sont leurs propres actes qui peuvent les precipiter vers la destruction.

**la destruction** — Le sens retenu est « destruction/aneantissement ». Le nom at-tahluka est un nom verbal defini de la racine h-l-k. Le mot « destruction » est choisi car il designe l'etat de ruine totale. Le Lane's donne : perir, etre detruit, s'aneantir, perdre. L'alternative « gaspillage » est ecartee car le contexte est plus grave que le gaspillage — le verset parle de se precipiter vers la ruine, pas de mal gerer ses biens.

**excellez** — Le sens retenu est « exceller/faire le bien avec excellence ». Le verbe ahsinuu est un imperatif de forme IV de la racine h-s-n. Le mot « excellez » est choisi car la forme IV de h-s-n porte l'idee de faire les choses avec perfection et soin, pas juste de « faire le bien » au sens vague. L'alternative « soyez bons » est ecartee car elle est trop passive — ahsinuu est un imperatif actif qui demande un effort d'excellence. L'alternative « embellissez » est ecartee car elle est trop esthetique — ahsinuu porte sur la qualite morale des actes, pas sur leur apparence.

**aime** — Le sens retenu est « aimer/affectionner ». Le verbe yuhibbu est un inaccompli de forme IV de h-b-b. Le mot « aime » est choisi car il designe l'affection et la preference. L'inaccompli marque que cet amour est permanent et continu. L'alternative « preferer » est ecartee car le verbe ici est absolu — Dieu aime les muhsinin, pas qu'il les prefere a d'autres.

**ceux qui excellent** — Le sens retenu est « ceux qui excellent ». Le mot al-muhsiniina est un participe actif pluriel defini de h-s-n a la forme IV. Le participe actif designe ceux qui font l'action activement et de maniere continue — les excellents sont ceux qui pratiquent l'excellence comme habitude, pas ceux qui ont excelle une fois. Le mot « ceux qui excellent » est choisi car il garde le lien avec ahsinuu (excellez) — le meme verbe, la meme racine, la meme forme IV. L'alternative « les bienfaisants » est ecartee car « bienfaisant » en francais evoque la charite ponctuelle, alors que muhsin designe l'excellence permanente dans tous les actes.

§CRITIQUE§
**chemin vs sentier** — Les traductions courantes rendent « sabiili Allaahi » par « le sentier d'Allah ». Le mot « sentier » en francais evoque un chemin etroit et rural. Le Lane's donne pour sabiil : une voie, un chemin, une route — sans connotation de petitesse. Notre traduction garde « chemin » qui est plus neutre et plus fidele au sens large de sabiil. Cela ne change pas fondamentalement le sens du verset mais evite une connotation non presente dans l'arabe.

**excellez vs faites le bien** — Les traductions courantes rendent « ahsinuu » par « faites le bien ». La forme IV de h-s-n dans le Lane's porte l'idee d'excellence et de perfection dans l'execution, pas seulement de faire le bien. « Faites le bien » est vague et passif — on peut « faire le bien » sans effort particulier. « Excellez » capture l'effort actif et la recherche de perfection que la forme IV implique. De meme, « les bienfaisants » pour al-muhsiniina perd la nuance d'excellence continue que le participe actif de forme IV exprime. Notre traduction « ceux qui excellent » maintient cette nuance.

**ne vous jetez pas vs ne vous jetez pas par vos propres mains dans la destruction** — La traduction de Hamidullah est fidele au texte arabe. Le point notable est que certaines traductions ajoutent l'idee de « suicide » ou de « perdition volontaire » qui n'est pas dans le texte. Le texte dit simplement : ne vous precipitez pas de vos mains vers la destruction — vos propres actions peuvent vous mener a la ruine. Le texte ne precise pas quel type de destruction ni quelle action specifique mene a la ruine — il pose un principe general.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "depensez", pos: "verbe", phon: "anfiquu", arabic: "\u0623\u064e\u0646\u0641\u0650\u0642\u064f\u0648\u0627\u06df", word_key: "nfq", is_particle: false, sense_retenu: "depenser", position: 1 },
      { fr: "dans", phon: "fii", arabic: "\u0641\u0650\u0649", is_particle: true, position: 2 },
      { fr: "le chemin de", pos: "nom", phon: "sabiili", arabic: "\u0633\u064e\u0628\u0650\u064a\u0644\u0650", word_key: "sbl", is_particle: false, sense_retenu: "chemin/voie", position: 3 },
      { fr: "Dieu", pos: "nom", phon: "Allaahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "et ne", phon: "wa laa", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "jetez pas", pos: "verbe", phon: "tulquu", arabic: "\u062a\u064f\u0644\u0652\u0642\u064f\u0648\u0627\u06df", word_key: "lqy", is_particle: false, sense_retenu: "jeter/projeter", position: 6 },
      { fr: "de vos mains", pos: "nom", phon: "bi-aydiikum", arabic: "\u0628\u0650\u0623\u064e\u064a\u0652\u062f\u0650\u064a\u0643\u064f\u0645\u0652", word_key: "ydy", is_particle: false, sense_retenu: "mains", position: 8 },
      { fr: "vers", phon: "ilaa", arabic: "\u0625\u0650\u0644\u064e\u0649", is_particle: true, position: 9 },
      { fr: "la destruction", pos: "nom", phon: "at-tahlukati", arabic: "\u0671\u0644\u062a\u0651\u064e\u0647\u0652\u0644\u064f\u0643\u064e\u0629\u0650", word_key: "hlk", is_particle: false, sense_retenu: "destruction", position: 10 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 11 },
      { fr: "excellez", pos: "verbe", phon: "ahsinuu", arabic: "\u0623\u064e\u062d\u0652\u0633\u0650\u0646\u064f\u0648\u0627\u06e4", word_key: "hsn", is_particle: false, sense_retenu: "exceller", position: 12 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 13 },
      { fr: "Dieu", pos: "nom", phon: "Allaaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 14 },
      { fr: "aime", pos: "verbe", phon: "yuhibbu", arabic: "\u064a\u064f\u062d\u0650\u0628\u0651\u064f", word_key: "hbb", is_particle: false, sense_retenu: "aimer", position: 15 },
      { fr: "ceux qui excellent", pos: "nom", phon: "al-muhsiniina", arabic: "\u0671\u0644\u0652\u0645\u064f\u062d\u0652\u0633\u0650\u0646\u0650\u064a\u0646\u064e", word_key: "hsn", is_particle: false, sense_retenu: "ceux qui excellent", position: 16 }
    ],
    words: [
      // nfq pos=1
      {
        word_key: "nfq", position: 1, sense_chosen: "depenser",
        analysis_axes: {
          sense_chosen: "depenser",
          concept_chosen: "Depense/Distribution",
          concepts: {
            "Depense/Distribution": {
              status: "retenu",
              senses: ["depenser", "distribuer", "debourser", "faire sortir de la richesse", "ecouler"],
              proof_ctx: "Le verbe anfiquu est un imperatif 2MP de la forme IV de la racine n-f-q. Le Lane's donne pour la forme IV : depenser, distribuer, debourser, faire sortir de la richesse. La forme IV (anfaqa) ajoute l'idee de causalite — faire sortir quelque chose de soi, mettre ses biens en mouvement vers l'exterieur. La depense est un acte exterieur et directif : les biens sortent de celui qui depense et vont vers ce a quoi il les destine. L'imperatif rend cet acte obligatoire dans le cadre du verset. Le champ lexical du verset (chemin de Dieu, ne pas se jeter vers la destruction, exceller) place la depense comme le premier acte concret demande. La depense dans le chemin de Dieu est l'oppose de la destruction : depenser c'est construire, retenir c'est se detruire. Le sens de depense est univoque dans cette construction syntaxique — anfiquu fii sabiili Allaahi est une formule coranique recurrente qui designe toujours la depense pour la voie de Dieu.",
              axe1_verset: "Le verbe anfiquu ouvre le verset par un ordre concret : depensez. Le champ lexical (chemin de Dieu, destruction, exceller) montre que la depense est le premier acte positif demande, suivi de l'interdiction de se precipiter vers la destruction, puis de l'ordre d'exceller. La depense est le fondement — elle met les biens en mouvement vers une cause qui depasse l'individu. Le verset oppose depenser (acte constructif) et se jeter vers la destruction (acte destructif). Les mains qui depensent dans le chemin de Dieu ne sont pas les mains qui precipitent vers la destruction.",
              axe2_voisins: "Le verset 2:194 traite des regles du combat et de la reciprocite dans les mois sacres. Le verset 2:195 passe du combat a la depense — les deux sont lies dans le contexte de la sourate car la depense finance l'effort collectif. Le verset 2:196 traitera du pelerinage et de ses depenses obligatoires. La sequence montre que la depense dans le chemin de Dieu accompagne toutes les obligations — combat, pelerinage, vie communautaire. La depense est le soutien materiel de toute la legislation.",
              axe3_sourate: "La racine n-f-q est presente plusieurs fois dans la sourate al-Baqarah. En 2:3, les muttaqin « depensent de ce que Nous leur avons donne ». En 2:177, la piete inclut « donner de la richesse ». En 2:254, « depensez de ce que Nous vous avons donne avant qu'arrive un jour ou il n'y aura ni commerce ni amitie ». La sourate construit la depense comme un pilier de la vie du croyant — du debut (2:3) jusqu'a la fin, la depense revient comme une exigence constante.",
              axe4_coherence: "La racine n-f-q apparait environ 73 fois dans le Coran. L'expression « anfiquu fii sabiili Allaahi » apparait en 2:195, 2:261, 57:10. Le Coran lie constamment la depense au chemin de Dieu — la richesse n'est pas une fin en soi mais un moyen de servir la voie divine. En 2:261, la depense est comparee a un grain qui produit sept epis, chaque epi contenant cent grains — la depense dans le chemin de Dieu est multipliee. Le Coran montre que la depense est un investissement, pas une perte.",
              axe5_frequence: "Pour la mission du khalifa, la depense est un acte fondamental. Le khalifa est un gerant (khalifa) qui ne possede rien en propre — tout ce qu'il a vient de Dieu et doit etre redistribue. La depense dans le chemin de Dieu est l'expression concrete de la mission : mettre ses ressources au service de la justice, de la communaute, de l'ordre social. Le khalifa qui retient ses biens trahit sa mission — il accumule au lieu de distribuer, il bloque la circulation des richesses qui previent la corruption."
            },
            "Passage/Percee": {
              status: "peu_probable",
              senses: ["percer", "traverser", "passer a travers", "tunnel", "passage souterrain"],
              proof_ctx: "Le sens premier de la racine n-f-q dans le Lane's est lie a l'idee de percee, de passage a travers — le nafaq est le tunnel, le terrier qui perce la terre. La nufqa est la sortie par laquelle on s'echappe. Ce sens physique de percee est l'origine etymologique de la depense : faire sortir la richesse comme on sort par un tunnel. Mais la forme IV anfaqa a specialise le sens vers la depense de richesse. La construction « anfiquu fii sabiili Allaahi » ne peut en aucun cas signifier « percez dans le chemin de Dieu ». La distinction philosophique est que la percee est un acte physique de traverser un obstacle, tandis que la depense est un acte social de distribuer ses biens. Le contexte juridique et moral du verset impose le sens de depense.",
              axe1_verset: "Le mot anfiquu dans le champ lexical du verset (chemin de Dieu, mains, destruction, exceller) s'inscrit dans un contexte d'action morale et sociale, pas d'action physique de percee. La depense est un acte social qui s'oppose a la destruction — percer un tunnel ne s'oppose pas a la destruction de la meme maniere. Le contexte est moral et legislatif, pas physique.",
              axe2_voisins: "Les versets voisins (2:194 sur le combat, 2:196 sur le pelerinage) traitent d'obligations sociales et religieuses. La depense s'inscrit dans cette sequence d'obligations. La percee physique n'a aucun rapport avec le contexte legislatif des versets environnants.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine n-f-q exclusivement au sens de depense (2:3, 2:177, 2:254, 2:261, 2:267). Le sens de percee physique n'apparait jamais dans la sourate. Le contexte interne de la sourate confirme le sens de depense.",
              axe4_coherence: "Le Coran utilise la forme IV anfaqa toujours au sens de depenser, jamais au sens de percer. L'expression « anfaqa fii sabiili Allaahi » est une formule figee qui designe la depense dans le chemin de Dieu. Le sens de percee est relegue a l'etymologie sans application coranique directe.",
              axe5_frequence: "Le sens de percee n'a aucun rapport avec la mission du khalifa dans ce contexte. La depense est l'acte pertinent pour la mission sociale et morale du khalifa."
            }
          }
        }
      },
      // sbl pos=3
      {
        word_key: "sbl", position: 3, sense_chosen: "chemin/voie",
        analysis_axes: {
          sense_chosen: "chemin/voie",
          concept_chosen: "Voie/Direction",
          concepts: {
            "Voie/Direction": {
              status: "retenu",
              senses: ["chemin", "voie", "route", "direction", "moyen d'acces", "passage"],
              proof_ctx: "Le nom sabiili est un nom en idafa (construction d'annexion) avec Allaahi. Le Lane's donne pour s-b-l : chemin, voie, route, direction, moyen d'acces, passage. Le sabiil est une voie tracee et claire que l'on peut suivre — ce n'est pas un sentier vague mais une route etablie. En idafa avec Allaahi, le sabiil devient « le chemin de Dieu » — la voie que Dieu a etablie pour les croyants. Le chemin est un concept spatial et directionnel : il part d'un point et mene quelque part. L'idafa marque l'appartenance — ce chemin appartient a Dieu, c'est lui qui l'a trace. Le sens est univoque dans cette construction — « fii sabiili Allaahi » est une expression coranique figee qui designe la voie divine.",
              axe1_verset: "Le mot sabiili est le cadre de la depense : on depense DANS le chemin de Dieu. Le champ lexical (depenser, Dieu, ne pas se detruire, exceller) montre que le chemin est la direction qui donne sens a la depense. Sans la mention du chemin, la depense serait indifferenciee — depenser dans le chemin de Dieu oriente la depense vers une finalite precise. Le chemin s'oppose a la destruction : suivre le chemin de Dieu c'est eviter la ruine, s'en ecarter c'est se precipiter vers la destruction.",
              axe2_voisins: "Le verset 2:194 mentionnait le combat avec la prescription de la reciprocite. Le verset 2:195 parle de depenser dans le chemin de Dieu. Le verset 2:196 traitera du pelerinage. La sequence montre que le chemin de Dieu englobe le combat, la depense et le pelerinage — c'est une voie totale qui couvre toutes les dimensions de la vie du croyant. Le chemin n'est pas limite a un acte specifique mais a l'ensemble de la voie divine.",
              axe3_sourate: "La racine s-b-l apparait frequemment dans la sourate al-Baqarah. En 2:154, « ceux qui sont tues dans le chemin de Dieu ». En 2:190, « combattez dans le chemin de Dieu ». En 2:215, « que depensez-vous ? ». La sourate utilise « fii sabiili Allaahi » comme une expression recurrente pour encadrer toutes les obligations — la depense, le combat, le sacrifice. Le chemin de Dieu est le cadre universel de l'action du croyant.",
              axe4_coherence: "La racine s-b-l apparait environ 166 fois dans le Coran. L'expression « fii sabiili Allaahi » est une des expressions les plus frequentes du Coran. En 3:169, les tues dans le chemin de Dieu sont vivants. En 9:34, ceux qui n'utilisent pas leurs richesses dans le chemin de Dieu seront chaties. Le Coran fait du chemin de Dieu la direction qui donne sens a toutes les actions — depense, combat, sacrifice, effort. Le chemin est la voie droite (sirat mustaqim) sous un autre angle : le sirat est la voie elle-meme, le sabiil est la direction dans laquelle on avance.",
              axe5_frequence: "Pour la mission du khalifa, le chemin de Dieu est la direction de la mission. Le khalifa ne marche pas au hasard — il suit une voie tracee par Dieu. La depense dans le chemin de Dieu est un acte de la mission : les ressources du khalifa sont mises au service de la direction divine. Le khalifa qui depense dans le chemin de Dieu oriente ses biens vers la justice, l'ordre social et la prevention de la corruption."
            }
          }
        }
      },
      // alh pos=4
      {
        word_key: "alh", position: 4, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore"],
              proof_ctx: "Le nom Allaahi est le nom propre de Dieu en arabe, au genitif (complement d'idafa de sabiili). Le Lane's donne pour la racine a-l-h : adorer, etre confus et effraye, se refugier aupres de. Allah est le nom propre de l'etre divin — il n'a pas de pluriel, pas de feminin, il designe l'unique divinite. Le sens est univoque dans le Coran — Allah est Dieu. Le genitif (Allaahi) le rattache au chemin (sabiili Allaahi = le chemin de Dieu) dans une relation d'appartenance.",
              axe1_verset: "Le mot Allaahi definit la direction de la depense et la source de l'amour final. Le verset commence par Dieu (depensez dans le chemin de Dieu) et se termine par Dieu (Dieu aime ceux qui excellent). La structure encadre tout le verset entre deux mentions de Dieu — la depense est dirigee vers Dieu et l'excellence est recompensee par l'amour de Dieu. Dieu est l'alpha et l'omega du verset.",
              axe2_voisins: "Dieu est mentionne dans tous les versets environnants comme source de la legislation et de la guidance. En 2:194, « premunissez-vous de Dieu ». En 2:196, « accomplissez le pelerinage pour Dieu ». La mention de Dieu dans chaque verset rappelle que toutes les obligations viennent de la meme source.",
              axe3_sourate: "La racine a-l-h est la racine la plus frequente de la sourate al-Baqarah. Dieu est le sujet central de toute la sourate — il legifere, guide, recompense et punit. Chaque section de la sourate revient a Dieu comme source et finalite.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Il est le concept le plus central et le plus recurrent de tout le texte. Le Coran est le discours de Dieu — chaque mention d'Allah rappelle la source du message.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est celui qui a designe le khalifa et qui definit sa mission. Le chemin de Dieu est la direction que le khalifa suit. Depenser dans le chemin de Dieu est un acte de fidelite a la mission confiee par Dieu."
            }
          }
        }
      },
      // lqy pos=6
      {
        word_key: "lqy", position: 6, sense_chosen: "jeter/projeter",
        analysis_axes: {
          sense_chosen: "jeter/projeter",
          concept_chosen: "Rencontre/Face a face",
          concepts: {
            "Rencontre/Face a face": {
              status: "retenu",
              senses: ["rencontrer", "se trouver face a", "jeter (forme IV)", "projeter", "lancer", "deposer"],
              proof_ctx: "Le verbe tulquu est un inaccompli 2MP de la forme IV de la racine l-q-y. Le Lane's donne pour la forme I : rencontrer, se trouver face a face, etre en presence de. Pour la forme IV (alqaa) : jeter, lancer, projeter, deposer, mettre. La forme IV transforme radicalement le sens de la racine — de « rencontrer » (forme I, intransitif, deux parties se trouvent face a face) a « jeter » (forme IV, transitif, un agent projette quelque chose). La forme IV ajoute l'idee de causalite et de transitivite : on fait que quelque chose soit projete dans une direction. Dans le verset, la negation « laa tulquu » interdit l'acte de se jeter — la construction « bi-aydiikum ilaa at-tahlukati » (de vos mains vers la destruction) precise que c'est de vos propres mains que vous vous jetez vers la ruine. Le sens de rencontre (forme I) ne s'applique pas ici — la forme IV est clairement celle du jeter/projeter. Le nom du concept dans la base de donnees est « Rencontre/Face a face » car il couvre la racine dans son ensemble, mais le sens retenu pour ce verset est specifiquement celui de la forme IV : jeter, projeter.",
              axe1_verset: "Le verbe tulquu est au coeur de l'interdiction du verset. Le champ lexical (depenser, chemin de Dieu, mains, destruction, exceller) montre que le verset oppose deux attitudes : depenser dans le chemin de Dieu (constructif) et se jeter vers la destruction (destructif). Le verbe tulquu porte la charge negative du verset — c'est l'acte a eviter. La negation « laa tulquu » est un imperatif negatif permanent : ne faites jamais cela. Les mains (bi-aydiikum) sont l'instrument — ce sont vos propres actions qui vous precipitent. La preposition ilaa (vers) marque la direction — la destruction est la destination de celui qui se jette.",
              axe2_voisins: "Le verset 2:194 posait la regle de la reciprocite dans le combat. Le verset 2:195 passe de la regle de combat a un avertissement general : ne vous precipitez pas vers la destruction. Le lien est direct — dans le contexte du combat, se precipiter vers la destruction peut signifier l'imprudence au combat, mais aussi la retenue excessive de la depense qui affaiblit la communaute. Les commentateurs classiques rapportent que ce verset a ete revele quand certains compagnons ont voulu arreter de depenser pour le combat et retourner a leurs affaires — le texte dit que cette retenue est elle-meme une forme de destruction.",
              axe3_sourate: "La racine l-q-y apparait dans la sourate al-Baqarah en 2:14 (quand ils rencontrent les croyants), 2:46 (ceux qui pensent qu'ils rencontreront leur Seigneur), 2:249 (quand ils rencontrerent Goliath). La forme I (rencontrer) domine dans la sourate. En 2:195, c'est la forme IV (jeter) qui est utilisee — un cas unique dans la sourate qui marque l'interdiction de se projeter vers la ruine. Le contraste entre la rencontre (forme I, passive, on se trouve face a quelque chose) et le jet (forme IV, active, on se projette soi-meme) est significatif.",
              axe4_coherence: "La racine l-q-y apparait environ 145 fois dans le Coran. La forme IV alqaa apparait en 7:107 (Moise jeta son baton), 20:87 (ils jeterent les bijoux), 27:28 (jette-leur cette lettre). La forme IV est toujours un acte de jeter/projeter quelque chose — un objet physique ou soi-meme. En 2:195, c'est soi-meme que l'on jette (de ses propres mains) vers la destruction. Le Coran utilise la forme IV pour des actes soudains et deliberes — le jet est un acte decisif et irreversible.",
              axe5_frequence: "Pour la mission du khalifa, se jeter vers la destruction est le contre-exemple de la mission. Le khalifa est charge de prevenir la corruption et l'injustice — se precipiter vers la ruine par ses propres actions est la trahison ultime de la mission. Le verset avertit que le khalifa peut etre son propre ennemi — ses propres mains (actions) peuvent le mener a la destruction s'il cesse de depenser dans le chemin de Dieu ou s'il agit sans excellence."
            }
          }
        }
      },
      // ydy pos=8
      {
        word_key: "ydy", position: 8, sense_chosen: "mains",
        analysis_axes: {
          sense_chosen: "mains",
          concept_chosen: "Action/Pouvoir",
          concepts: {
            "Action/Pouvoir": {
              status: "retenu",
              senses: ["main", "puissance", "action", "moyen", "bienfait", "pouvoir", "force"],
              proof_ctx: "Le nom aydiikum est le pluriel de yad (main) avec pronom suffixe 2MP (kum = vos). Le Lane's donne pour y-d-y : main, puissance, force, action, bienfait, moyen. La main est le membre physique par lequel on agit — elle est le symbole de l'action humaine. Le pluriel (aydii = mains, au moins trois) generalise — ce ne sont pas une ou deux mains specifiques mais les mains comme instrument d'action. Le pronom « kum » (vos) personnalise : ce sont VOS propres mains, vos propres actions. La preposition « bi » (avec/par) marque l'instrument : c'est par vos mains que vous vous jetez — l'outil de la destruction est entre vos propres mains. Le nom du concept « Action/Pouvoir » couvre le champ semantique large de yad, mais dans ce verset le mot est utilise au sens premier et concret de « mains » comme instrument des actions. Les mains representent les actes que l'on fait — retenir la depense, refuser l'effort, cesser l'excellence sont les actions des mains qui precipitent vers la destruction.",
              axe1_verset: "Le mot aydiikum est l'instrument de l'interdiction. Le champ lexical (jeter, destruction) montre que les mains sont le moyen par lequel on se precipite vers la ruine. Le verset dit que la destruction vient de l'interieur — ce ne sont pas des ennemis exterieurs qui detruisent, ce sont vos propres mains. La construction « bi-aydiikum ilaa at-tahlukati » est frappante : vos mains (instrument) vers la destruction (destination). Le verset responsabilise les croyants — la destruction est autogeneree, pas subie. Les mains sont les memes mains qui doivent depenser dans le chemin de Dieu — elles ont le choix entre la depense (constructif) et la destruction (destructif).",
              axe2_voisins: "Le verset 2:194 parlait du combat et de la reciprocite. Le verset 2:195 precise que les mains des croyants peuvent etre leur propre ennemi. La sequence montre que le danger ne vient pas seulement de l'exterieur (les agresseurs de 2:194) mais aussi de l'interieur (les propres mains de 2:195). Les versets voisins traitent des menaces externes et internes — le combat contre l'ennemi et le combat contre soi-meme.",
              axe3_sourate: "La racine y-d-y apparait dans la sourate al-Baqarah en 2:79 (malheur a ceux qui ecrivent le Livre de leurs mains), 2:95 (a cause de ce que leurs mains ont avance), 2:237 (ou que pardonne celui dans la main de qui est le noeud du mariage). La sourate utilise les mains pour designer les actions concretes des individus — ce que les mains font est ce que la personne fait. En 2:195, les mains sont l'instrument de la propre destruction.",
              axe4_coherence: "La racine y-d-y apparait environ 120 fois dans le Coran. En 5:64, « ses deux mains sont deployees ». En 48:10, « la main de Dieu est au-dessus de leurs mains ». En 111:1, « que perissent les mains d'Abou Lahab ». Le Coran utilise les mains comme metonymie de l'action — les mains font, les mains construisent, les mains detruisent. En 2:195, les mains sont l'instrument de la propre destruction — c'est le meme schema que 111:1 ou les mains d'Abou Lahab causent sa perte.",
              axe5_frequence: "Pour la mission du khalifa, les mains sont les instruments de la mission. Le khalifa agit par ses mains — il construit, il distribue, il etablit la justice. Mais les memes mains peuvent detruire si elles cessent d'agir dans le chemin de Dieu. Le verset rappelle que le khalifa est responsable de ses propres actions — sa destruction viendra de ses propres mains s'il abandonne la depense et l'excellence."
            }
          }
        }
      },
      // hlk pos=10
      {
        word_key: "hlk", position: 10, sense_chosen: "destruction",
        analysis_axes: {
          sense_chosen: "destruction",
          concept_chosen: "Destruction/Aneantissement",
          concepts: {
            "Destruction/Aneantissement": {
              status: "retenu",
              senses: ["perir", "etre detruit", "s'aneantir", "destruction", "ruine", "perte", "mort"],
              proof_ctx: "Le nom at-tahlukati est un nom verbal defini singulier de la racine h-l-k. Le Lane's donne : perir, etre detruit, s'aneantir, perdre, ruiner. La tahluka est l'etat de destruction totale — la perte irreversible et complete. L'article al- definit la destruction comme LA destruction, la realite connue et identifiable. Ce n'est pas une destruction parmi d'autres mais LA destruction par excellence — la ruine totale. Le nom est au singulier car la destruction est un etat unique et definitif — on ne se detruit pas partiellement. La preposition ilaa (vers) montre que la destruction est une destination — on s'y dirige, on s'en approche, on s'y precipite. La destruction est un acte exterieur et definitif — elle transforme ce qui existait en neant.",
              axe1_verset: "Le mot at-tahlukati est la destination interdite du verset. Le champ lexical (jeter, mains, vers) montre que la destruction est le point d'arrivee de ceux qui se jettent par leurs propres mains. Le verset oppose la depense dans le chemin de Dieu (construction) a la precipitation vers la destruction (ruine). La destruction est l'aboutissement negatif — elle est ce qui arrive quand on cesse de depenser et d'exceller. L'article al- la definit comme une realite connue — les croyants savent ce qu'est la destruction, ils l'ont vu chez d'autres peuples mentionnes dans la sourate.",
              axe2_voisins: "Le verset 2:194 parlait du combat avec la reciprocite. Le verset 2:195 avertit de ne pas se precipiter vers la destruction. Le lien entre combat et destruction est direct — le combat mal mene, la depense mal orientee, l'effort mal calcule menent a la destruction. Les commentateurs classiques rapportent que la destruction ici peut etre le refus de depenser pour la communaute — retenir ses biens quand la communaute a besoin est une forme d'autodestruction collective.",
              axe3_sourate: "La racine h-l-k apparait dans la sourate al-Baqarah en 2:205 (il s'efforce de detruire les cultures et le betail). En 2:195, la tahluka est la destruction vers laquelle on se precipite. La sourate lie la destruction a l'action humaine — c'est l'homme qui detruit, par ses propres mains ou par ses efforts mal diriges. La destruction n'est pas une fatalite divine mais une consequence des actes humains.",
              axe4_coherence: "La racine h-l-k apparait environ 67 fois dans le Coran. En 2:205, « Dieu n'aime pas la corruption ». En 7:72, les peuples anciens (Ad, Thamud) ont ete detruits a cause de leur desobeissance. En 28:88, « toute chose perit sauf Son visage ». Le Coran montre que la destruction touche les individus et les peuples qui s'ecartent du chemin de Dieu — la destruction est la consequence de la desobeissance et de la corruption, pas une punition arbitraire.",
              axe5_frequence: "Pour la mission du khalifa, la destruction est l'echec de la mission. Le khalifa est charge de prevenir la corruption (fasad) et de maintenir l'ordre social. Se precipiter vers la destruction est le contraire exact de la mission — c'est participer a la corruption au lieu de la prevenir. Le verset avertit que la destruction peut venir de l'inaction (ne pas depenser) autant que de l'action mauvaise — le khalifa doit etre actif dans la depense et l'excellence pour eviter la ruine."
            },
            "Gaspiller": {
              status: "nul",
              senses: ["gaspiller", "dilapider", "perdre par negligence"],
              proof_ctx: "Le sens de gaspillage est un sous-sens de la racine h-l-k dans le Lane's — perdre quelque chose par negligence ou mauvaise gestion. Mais le mot at-tahluka dans le verset est un nom verbal qui designe l'etat de destruction totale, pas le gaspillage partiel. La construction « ilaa at-tahlukati » (vers la destruction) marque une destination fatale, pas une mauvaise gestion ponctuelle. Le gaspillage est un acte repetable et partiel, la destruction est un etat definitif et total."
            }
          }
        }
      },
      // hsn pos=12
      {
        word_key: "hsn", position: 12, sense_chosen: "exceller",
        analysis_axes: {
          sense_chosen: "exceller",
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["exceller", "faire le bien avec excellence", "perfectionner", "ameliorer", "embellir", "rendre bon"],
              proof_ctx: "Le verbe ahsinuu est un imperatif 2MP de la forme IV de la racine h-s-n. Le Lane's donne pour la forme IV : faire le bien, exceller dans l'execution, faire quelque chose avec perfection et soin, embellir. La forme IV (ahsana) ajoute l'idee d'effort actif — exceller n'est pas un etat passif mais un acte delibere de perfection. L'imperatif ahsinuu est absolu — sans complement d'objet, ce qui signifie « excellez en general, dans tout ce que vous faites ». L'ihsan est un concept qui depasse la simple bonte : c'est la recherche de l'excellence dans chaque acte. Le verbe est place apres l'interdiction (ne vous jetez pas vers la destruction) comme un correctif positif : au lieu de vous detruire, excellez. La sequence du verset montre trois niveaux : depensez (acte materiel) → ne vous detruisez pas (interdiction) → excellez (elevation morale).",
              axe1_verset: "Le verbe ahsinuu est le troisieme et dernier ordre du verset. Le champ lexical (depenser, chemin de Dieu, ne pas se detruire) montre que l'excellence est le sommet de la sequence : on depense d'abord, on evite la destruction ensuite, on excelle enfin. L'excellence est l'acte le plus eleve — elle depasse la simple obeissance (depenser) et la simple prudence (ne pas se detruire) pour atteindre la perfection. Le verbe est absolu (pas de complement) ce qui generalise l'ordre : excellez dans tout, pas seulement dans la depense ou le combat.",
              axe2_voisins: "Le verset 2:194 posait des regles precises pour le combat. Le verset 2:195 passe des regles au principe : excellez. L'excellence est le principe qui sous-tend toutes les regles — celui qui excelle dans tout ce qu'il fait obeit naturellement aux regles. Le verset 2:196 traitera du pelerinage avec ses rites precis. L'excellence de 2:195 est le lien entre le combat (2:194) et le pelerinage (2:196) — dans les deux cas, le croyant doit exceller.",
              axe3_sourate: "La racine h-s-n apparait frequemment dans la sourate al-Baqarah. En 2:58, « Nous accorderons plus aux muhsinin ». En 2:83, « parlez aux gens avec excellence (husnan) ». En 2:112, « celui qui soumet son visage a Dieu et il est muhsin ». La sourate construit l'ihsan comme une qualite superieure qui definit le croyant accompli — l'ihsan est au-dessus de la simple soumission (islam).",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. En 16:90, « Dieu ordonne la justice et l'ihsan (l'excellence) ». En 55:60, « la recompense de l'ihsan est-elle autre chose que l'ihsan ? ». En 2:195, ahsinuu ordonne l'excellence et yuhibbu al-muhsinin annonce que Dieu aime ceux qui excellent. Le Coran lie l'excellence a l'amour divin — l'ihsan est la qualite qui attire l'amour de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'excellence est le niveau superieur de la mission. Le khalifa ne se contente pas de faire le minimum — il excelle dans chaque acte. L'ihsan est la perfection dans l'execution de la mission : depenser avec excellence, combattre avec excellence, vivre avec excellence. Le khalifa muhsin est celui qui fait tout comme si Dieu le voyait — l'excellence est la conscience permanente de la mission."
            },
            "Beaute/Bonte": {
              status: "probable",
              senses: ["beau", "bon", "agreable", "plaisant", "joli", "gracieux"],
              proof_ctx: "Le sens de beaute/bonte est le sens de base de la racine h-s-n — ce qui est beau, bon, agreable. Le Lane's donne pour la forme I : etre beau, etre bon, etre agreable. La forme IV (ahsana) signifie « rendre beau, rendre bon, faire avec beaute ». La beaute est un etat de perfection esthetique et morale — ce qui est beau est bien fait, harmonieux. La distinction philosophique avec l'excellence est que la beaute est un etat (etre beau), tandis que l'excellence est un acte (faire les choses avec perfection). L'imperatif ahsinuu demande un acte, pas un etat — « faites avec excellence » plutot que « soyez beaux ». Le verbe a la forme IV est actif et transitif (meme utilise absolument ici), ce qui oriente vers l'acte d'exceller plutot que vers l'etat de beaute. Cependant, les deux sens se rejoignent profondement — exceller c'est rendre beau ses actes.",
              axe1_verset: "Le sens de beaute pourrait s'appliquer au contexte du verset — « rendez beaux vos actes ». Le champ lexical (depenser, chemin de Dieu, destruction) oriente cependant vers l'excellence morale plutot que vers l'esthetique. La beaute est un concept trop passif pour ce contexte d'obligations actives — le verset demande des actes (depenser, ne pas se detruire), pas des etats (etre beau).",
              axe2_voisins: "Les versets voisins traitent du combat et du pelerinage — des actes concrets. Le sens de beaute esthetique s'inscrit moins bien dans cette sequence legislative que le sens d'excellence dans l'execution.",
              axe3_sourate: "La sourate al-Baqarah utilise h-s-n surtout au sens moral — l'ihsan est l'excellence du croyant, pas la beaute physique. Le contexte moral de la sourate oriente vers l'excellence.",
              axe4_coherence: "Le Coran utilise la forme IV ahsana principalement au sens d'exceller et de faire le bien avec perfection. La beaute physique est couverte par d'autres racines (j-m-l pour la beaute, z-y-n pour l'ornement). La forme IV de h-s-n est specifiquement morale.",
              axe5_frequence: "La beaute comme etat passif ne correspond pas a la mission active du khalifa. L'excellence comme acte delibere de perfection correspond mieux a la mission."
            }
          }
        }
      },
      // alh pos=14
      {
        word_key: "alh", position: 14, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore"],
              proof_ctx: "Le nom Allaaha est le nom propre de Dieu en arabe, a l'accusatif (sujet de inna). Le Lane's donne pour la racine a-l-h : adorer, etre confus et effraye, se refugier aupres de. Allah est le nom propre de l'etre divin. Apres la particule inna (certes), le nom est a l'accusatif comme c'est la regle grammaticale. Le sens est identique a la premiere mention (position 4) — Dieu est mentionne deux fois dans le verset, au debut (chemin de Dieu) et a la fin (Dieu aime).",
              axe1_verset: "Le mot Allaaha est le sujet de la proposition causale finale : certes Dieu aime ceux qui excellent. Le champ lexical du verset se boucle avec cette mention — la depense etait dans le chemin de Dieu, et la recompense vient de Dieu sous forme d'amour. Dieu encadre le verset du debut a la fin.",
              axe2_voisins: "Dieu est mentionne dans tous les versets environnants. La repetition du nom divin rappelle que chaque obligation est liee a Dieu — c'est lui qui ordonne et c'est lui qui recompense.",
              axe3_sourate: "Comme pour la premiere occurrence, Allah est omnipresent dans la sourate al-Baqarah. La double mention dans un meme verset souligne l'encadrement divin de la prescription.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Sa repetition dans un meme verset n'est pas un hasard — elle cree un encadrement : la depense est pour Dieu, et l'amour vient de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la double mention de Dieu rappelle que la mission vient de Dieu (depensez dans le chemin de Dieu) et que la recompense vient de Dieu (Dieu aime ceux qui excellent). Le khalifa agit pour Dieu et est recompense par Dieu."
            }
          }
        }
      },
      // hbb pos=15
      {
        word_key: "hbb", position: 15, sense_chosen: "aimer",
        analysis_axes: {
          sense_chosen: "aimer",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affectionner", "cherir", "preferer", "avoir de l'amour pour"],
              proof_ctx: "Le verbe yuhibbu est un inaccompli 3MS de la forme IV de la racine h-b-b. Le Lane's donne pour la forme IV : aimer, affectionner, cherir, avoir de l'amour pour, preferer. La forme IV (ahabba) signifie « faire entrer dans l'amour, aimer activement ». L'inaccompli marque que l'amour de Dieu est continu et permanent — ce n'est pas un amour ponctuel mais un etat permanent. Le sujet est Dieu (Allaaha) et l'objet est les muhsinin (ceux qui excellent). Le Coran attribue explicitement l'amour a Dieu — yuhibbu est utilise a de nombreuses reprises pour decrire ce que Dieu aime et ce qu'il n'aime pas. L'amour divin est un acte dirige vers l'exterieur — il sort de Dieu et atteint ceux qui excellent. Ce n'est pas un sentiment interieur que Dieu garderait pour lui mais une realite qui atteint les muhsinin.",
              axe1_verset: "Le verbe yuhibbu est la conclusion du verset — la motivation finale. Le champ lexical (depenser, chemin de Dieu, ne pas se detruire, exceller) culmine dans l'amour de Dieu pour ceux qui excellent. Le verset ne menace pas — il motive par l'amour. La structure est : faites ceci (depensez, excellez), evitez cela (ne vous detruisez pas), PARCE QUE Dieu aime ceux qui font ainsi. L'amour est la recompense ultime — plus precieuse que toute autre retribution. L'inaccompli (yuhibbu, il aime) marque que cet amour est toujours disponible, pas conditionne a un moment precis.",
              axe2_voisins: "Le verset 2:190 dit « Dieu n'aime pas les agresseurs (al-mu'tadiin) ». Le verset 2:195 dit « Dieu aime les muhsinin ». La sequence montre les deux faces de la relation divine : Dieu n'aime pas les excessifs et il aime les excellents. L'amour divin est discriminant — il va vers ceux qui excellent et se detourne de ceux qui agressent. Les versets voisins construisent un portrait de ce que Dieu aime et de ce qu'il rejette.",
              axe3_sourate: "La racine h-b-b apparait dans la sourate al-Baqarah en 2:165 (il y a des gens qui prennent des rivaux en dehors de Dieu et les aiment comme on aime Dieu) et en 2:190, 2:195, 2:205, 2:222. La sourate construit un systeme d'amour divin : Dieu aime les muhsinin (2:195), les repentants et les purifies (2:222), et il n'aime pas les agresseurs (2:190), les corrupteurs (2:205). L'amour de Dieu est un critere de jugement — etre aime de Dieu est le signe de l'excellence.",
              axe4_coherence: "La racine h-b-b apparait environ 95 fois dans le Coran. L'expression « inna Allaaha yuhibbu » (certes Dieu aime) apparait a de nombreuses reprises : Dieu aime les equitables (5:42, 49:9, 60:8), les patients (3:146), les confiants (3:159), les muhsinin (2:195, 3:134, 3:148, 5:13, 5:93). Le Coran fait de l'amour divin une recompense accessible a ceux qui pratiquent les qualites mentionnees — l'amour n'est pas arbitraire mais repond a des actes precis.",
              axe5_frequence: "Pour la mission du khalifa, l'amour de Dieu est la recompense supreme de la mission bien accomplie. Le khalifa qui excelle dans sa mission — depenser avec justice, prevenir la corruption, maintenir l'ordre social — est aime de Dieu. L'amour divin est la motivation ultime du khalifa — plus puissante que la crainte du chatiment. Le khalifa muhsin agit par excellence et recolte l'amour divin."
            }
          }
        }
      },
      // hsn pos=16
      {
        word_key: "hsn", position: 16, sense_chosen: "ceux qui excellent",
        analysis_axes: {
          sense_chosen: "ceux qui excellent",
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["celui qui excelle", "celui qui fait le bien avec excellence", "bienfaisant", "excellent", "celui qui perfectionne"],
              proof_ctx: "Le nom al-muhsiniina est un participe actif pluriel defini de la forme IV de la racine h-s-n. Le Lane's donne pour le participe actif de la forme IV : celui qui fait le bien, celui qui excelle, celui qui fait les choses avec perfection. Le participe actif designe celui qui fait l'action activement et de maniere continue — le muhsin est celui qui pratique l'excellence comme habitude permanente, pas celui qui a excelle une seule fois. L'article al- definit le groupe comme une categorie connue : LES muhsinin, ceux qui sont reconnus pour leur excellence. Le pluriel marque que c'est un groupe — tous ceux qui excellent sont aimes de Dieu. Le participe actif est compatible avec le sens d'excellence car l'excellence est un effort actif et continu — on excelle par decision et par effort, pas par hasard. Le lien avec ahsinuu (position 12) est direct : l'ordre « excellez » et la recompense « Dieu aime ceux qui excellent » utilisent la meme racine, la meme forme IV — l'ordre et sa recompense sont lies par la meme racine.",
              axe1_verset: "Le mot al-muhsiniina ferme le verset en designant les beneficiaires de l'amour divin. Le champ lexical (depenser, chemin de Dieu, exceller) montre que les muhsinin sont ceux qui accomplissent tout ce que le verset demande : ils depensent, ils ne se detruisent pas, ils excellent. Le participe actif marque que l'excellence est un etat permanent — les muhsinin excellent en continu, pas occasionnellement. L'article al- les definit comme une categorie connue, pas un groupe vague.",
              axe2_voisins: "Le verset 2:190 mentionnait les agresseurs (al-mu'tadiin) comme ceux que Dieu n'aime pas. Le verset 2:195 mentionne les muhsinin comme ceux que Dieu aime. Les deux groupes sont definis par des participes actifs — l'un fait l'agression, l'autre fait l'excellence. Le croyant a le choix entre ces deux voies : l'agression (que Dieu rejette) ou l'excellence (que Dieu aime).",
              axe3_sourate: "En 2:58, Dieu promet d'accorder plus aux muhsinin. En 2:112, celui qui soumet son visage a Dieu « wa huwa muhsinun » (et il est excellent) recoit sa recompense. En 2:195, les muhsinin sont aimes de Dieu. La sourate construit le portrait du muhsin a travers ces mentions — il depense, il soumet son visage a Dieu, et il excelle dans tous ses actes. Le muhsin est le modele du croyant accompli dans la sourate al-Baqarah.",
              axe4_coherence: "Le Coran mentionne les muhsinin a de nombreuses reprises. En 3:134, les muhsinin sont ceux qui depensent dans l'aisance et l'adversite et qui maitrisent leur colere. En 5:93, « il n'y a pas de reproche pour ceux qui croient et font le bien s'ils sont muhsinin ». En 16:128, « Dieu est avec ceux qui se premunissent et ceux qui sont muhsinin ». Le Coran place les muhsinin au sommet de la hierarchie des croyants — au-dessus des simples obeissants.",
              axe5_frequence: "Pour la mission du khalifa, le muhsin est le khalifa accompli. Le khalifa ne se contente pas de la simple obeissance — il excelle dans chaque dimension de sa mission. L'excellence est la marque du khalifa qui prend sa mission au serieux — il ne fait pas le minimum mais recherche la perfection. Le verset promet l'amour de Dieu comme recompense de cette excellence — la motivation ultime de la mission."
            },
            "Beaute/Bonte": {
              status: "probable",
              senses: ["les beaux", "les bons", "ceux qui embellissent"],
              proof_ctx: "Le sens de beaute/bonte est le sens de base de h-s-n — le muhsin pourrait etre « celui qui embellit » ou « celui qui est bon ». Mais le participe actif de la forme IV oriente vers l'acte delibere d'exceller plutot que vers l'etat passif de beaute. La distinction philosophique est la meme que pour ahsinuu (position 12) : la beaute est un etat, l'excellence est un acte. Le participe actif impose une action continue — le muhsin fait quelque chose activement. « Celui qui embellit » pourrait fonctionner mais est trop esthetique pour le contexte moral du verset. « Celui qui excelle » capture mieux l'effort actif et la perfection morale que la forme IV exprime.",
              axe1_verset: "Le sens de beaute s'inscrit moins bien dans le champ lexical du verset qui est moral et pratique (depenser, ne pas se detruire). L'excellence morale est plus adaptee au contexte d'obligations actives.",
              axe2_voisins: "Les versets voisins traitent du combat et du pelerinage — des actes concrets. La beaute esthetique s'inscrit moins bien dans cette sequence que l'excellence dans l'execution.",
              axe3_sourate: "La sourate utilise h-s-n principalement au sens moral. Le muhsin dans la sourate est toujours quelqu'un qui fait des actes d'excellence, pas quelqu'un qui est esthetiquement beau.",
              axe4_coherence: "Le Coran utilise muhsin au sens de celui qui excelle moralement. La beaute physique n'est jamais le sens de muhsin dans le Coran.",
              axe5_frequence: "L'excellence active correspond mieux a la mission du khalifa que la beaute passive."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [202];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSET 195 ===\n');
  await processVerse(195);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V195 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
