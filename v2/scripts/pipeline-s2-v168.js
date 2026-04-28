const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 168
// verse_id=175, analysis_id=533
// "O gens, mangez de ce qui est sur la terre, licite et
//  bon, et ne suivez pas les traces du diable. Il est
//  pour vous un ennemi evident."
// =====================================================

const verseData = {
  168: {
    verse_id: 175,
    analysis_id: 533,
    translation_arab: "O gens, mangez de ce qui est sur la terre, licite et bon, et ne suivez pas les traces du diable. Il est pour vous un ennemi evident.",
    full_translation: "O les gens ! De ce qui existe sur la terre, mangez le licite et le pur ; et ne suivez point les pas du Diable car il est vraiment pour vous un ennemi declare.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par une interpellation universelle : ya ayyuha an-nasu. La particule ya est une particule d'appel, ayyuha est un pronom d'interpellation. Le nom **an-nasu** est un nom collectif defini de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Le vocatif s'adresse a l'ensemble de l'humanite, sans distinction de groupe ni de croyance — c'est un commandement universel. Le verbe **kulu** est un imperatif 2MP de la racine a-k-l. Le Lane's donne : manger, consommer, devorer. L'imperatif marque un ordre divin — mangez. Le pluriel indique que l'ordre s'adresse a tous ceux qui sont interpelles. La preposition **mimma** (min + ma) signifie « de ce qui » — c'est un partitif qui delimite la source de l'alimentation. La preposition **fi** (dans/sur) rattache l'alimentation a la terre — ce qui se trouve sur la terre. Le nom **al-ardi** est un nom feminin singulier defini de la racine a-r-d. Le Lane's donne : terre, sol, pays. La terre est le support de toute subsistance humaine — tout ce qui est mangeable provient de la terre. Le nom **halalan** est un nom masculin singulier indefini accusatif de la racine h-l-l. Le Lane's donne : licite, permis, delie de tout interdit. Le halal est ce qui est denoue — l'oppose du haram (attache/interdit). L'accusatif marque l'etat (hal) — mangez-en en tant que chose licite. Le nom **tayyiban** est un adjectif masculin singulier indefini accusatif de la racine t-y-b. Le Lane's donne : bon, pur, agreable, sain. Le tayyib qualifie ce qui est bon dans sa nature meme — pas seulement permis par la loi mais bon en soi. L'accumulation halalan tayyiban pose deux criteres : legalement permis ET intrinsequement bon. La conjonction **wa-la** (et ne...pas) introduit une prohibition. Le verbe **tattabi'u** est un inaccompli 2MP avec la negation la de la racine t-b-'. Le Lane's donne : suivre, venir apres, emboiter le pas. L'inaccompli avec la indique une prohibition permanente — ne suivez pas, jamais. Le nom **khutuwati** est un pluriel feminin de la racine kh-t-w. Le Lane's donne : pas, enjambee, trace laissee par la marche. Les « pas » du diable sont ses traces, son chemin — suivre ses pas c'est emprunter son chemin. Le nom **ash-shaytani** est un nom masculin singulier defini de la racine sh-t-n. Le Lane's donne : celui qui est eloigne (de la misericorde), le rebelle. Le shaytan est celui qui s'est eloigne de Dieu par orgueil. Le genitif rattache les pas au diable — ce sont ses traces, son parcours de rebellion. La particule **innahu** (certes il) ouvre une proposition causale qui justifie la prohibition. Le pronom suffixe « hu » renvoie au diable. Le pronom **lakum** (pour vous) marque le destinataire de l'inimitie. Le nom **'aduwwun** est un nom masculin singulier indefini de la racine '-d-w. Le Lane's donne : ennemi, hostile, celui qui veut du mal. L'indefini souligne la nature meme du diable — il est ennemi par essence. Le nom **mubinun** est un participe actif de la forme IV de la racine b-y-n. Le Lane's donne : clair, evident, manifeste. La forme IV (af'ala) rend transitif — mubin est celui qui rend clair, qui manifeste. L'inimitie du diable n'est pas cachee — elle est manifeste, evidente, declaree.

§JUSTIFICATION§
**gens** — Le sens retenu est « gens ». Le mot an-nasu designe l'ensemble des etres humains. L'alternative « peuple » est ecartee car « peuple » en francais implique souvent une nation ou un groupe ethnique, alors que « gens » est plus universel et correspond a l'interpellation qui s'adresse a toute l'humanite.

**mangez** — Le sens retenu est « manger ». Le verbe kulu est un imperatif direct de la racine a-k-l. L'alternative « consommer » est ecartee car « manger » est plus concret et plus courant en francais — l'ordre divin est simple et direct.

**la terre** — Le sens retenu est « terre ». Le mot al-ard designe la surface terrestre comme source de subsistance. L'alternative « pays » est ecartee car le contexte est universel — il ne s'agit pas d'un territoire specifique mais de la terre entiere.

**licite** — Le sens retenu est « licite ». Le mot halalan designe ce qui est permis, delie de tout interdit. L'alternative « delie » est ecartee car « licite » est le terme juridique courant qui rend exactement le sens de halal en francais.

**bon** — Le sens retenu est « bon ». Le mot tayyiban qualifie ce qui est bon dans sa nature. L'alternative « pur » est ecartee car « bon » est plus large et plus naturel — le tayyib est ce qui est bon en soi, pas seulement purifie.

**suivez** — Le sens retenu est « suivre ». Le verbe tattabi'u designe l'acte d'emboiter le pas, de marcher dans les traces de quelqu'un. L'alternative « poursuivre » est ecartee car « suivre » est plus neutre et rend mieux l'idee de prendre le meme chemin.

**traces** — Le sens retenu est « pas/traces ». Le mot khutuwat designe les pas laisses par la marche. L'alternative « enjambees » est ecartee car « traces » rend mieux l'idee du chemin marque — suivre les traces c'est emprunter le meme parcours.

**le diable** — Le sens retenu est « diable ». Le mot ash-shaytan designe celui qui s'est eloigne de la misericorde divine. L'alternative « rebelle » est ecartee car « diable » est le terme consacre qui identifie immediatement l'etre en question.

**ennemi** — Le sens retenu est « ennemi ». Le mot 'aduwwun designe celui qui est en etat d'hostilite permanente. L'alternative « agresseur » est ecartee car « ennemi » est plus permanent et plus fondamental — l'ennemi est hostile par nature, l'agresseur par acte.

**evident** — Le sens retenu est « evident ». Le mot mubin designe ce qui est clair et manifeste. L'alternative « explicateur » est ecartee car le contexte est la qualification de l'inimitie du diable — elle est evidente, pas en train d'expliquer quelque chose.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere tres similaire. Hamidullah traduit « O les gens ! De ce qui existe sur la terre, mangez le licite et le pur » en inversant l'ordre syntaxique pour le francais. Notre traduction suit l'ordre arabe : « O gens, mangez de ce qui est sur la terre, licite et bon ». La difference principale est le mot « pur » (Hamidullah) contre « bon » (notre choix). Le Lane's donne tayyib comme « bon, agreable, plaisant, pur » — les deux traductions sont defensibles. Nous preferons « bon » car il est plus large et plus courant. L'expression « ennemi declare » (Hamidullah) contre « ennemi evident » est une nuance de style — mubin signifie « qui rend clair, manifeste » et les deux adjectifs le rendent correctement.`,
    segments: [
      { fr: "o gens", phon: "ya ayyuha an-nasu", arabic: "\u064a\u064e\u0640\u0670\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0646\u0651\u064e\u0627\u0633\u064f", is_particle: true, position: 0 },
      { fr: "mangez", pos: "verbe", phon: "kulu", arabic: "\u0643\u064f\u0644\u064f\u0648\u0627\u06df", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 1 },
      { fr: "de ce qui est", phon: "mimma", arabic: "\u0645\u0650\u0645\u0651\u064e\u0627", is_particle: true, position: 2 },
      { fr: "sur la terre", pos: "nom", phon: "fi al-ardi", arabic: "\u0641\u0650\u064a \u0671\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 3 },
      { fr: "licite", pos: "nom", phon: "halalan", arabic: "\u062d\u064e\u0644\u064e\u0640\u0670\u0644\u064b\u0627", word_key: "hll", is_particle: false, sense_retenu: "licite", position: 4 },
      { fr: "bon", pos: "adjectif", phon: "tayyiban", arabic: "\u0637\u064e\u064a\u0651\u0650\u0628\u064b\u0627", word_key: "tyb", is_particle: false, sense_retenu: "bon", position: 5 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 6 },
      { fr: "suivez", pos: "verbe", phon: "tattabi'u", arabic: "\u062a\u064e\u062a\u0651\u064e\u0628\u0650\u0639\u064f\u0648\u0627\u06df", word_key: "tbae", is_particle: false, sense_retenu: "suivre", position: 7 },
      { fr: "les traces", pos: "nom", phon: "khutuwati", arabic: "\u062e\u064f\u0637\u064f\u0648\u064e\u0640\u0670\u062a\u0650", word_key: "khatw", is_particle: false, sense_retenu: "traces", position: 8 },
      { fr: "du diable", pos: "nom", phon: "ash-shaytani", arabic: "\u0671\u0644\u0634\u0651\u064e\u064a\u0652\u0637\u064e\u0640\u0670\u0646\u0650", word_key: "\u0161ytn", is_particle: false, sense_retenu: "diable", position: 9 },
      { fr: "certes il est", phon: "innahu", arabic: "\u0625\u0650\u0646\u0651\u064e\u0647\u064f", is_particle: true, position: 10 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 11 },
      { fr: "un ennemi", pos: "nom", phon: "'aduwwun", arabic: "\u0639\u064e\u062f\u064f\u0648\u0651\u064c", word_key: "edw", is_particle: false, sense_retenu: "ennemi", position: 12 },
      { fr: "evident", pos: "adjectif", phon: "mubinun", arabic: "\u0645\u0651\u064f\u0628\u0650\u064a\u0646\u064c", word_key: "byn", is_particle: false, sense_retenu: "evident", position: 13 }
    ],
    words: [
      // nws pos=2
      {
        word_key: "nws", position: 2, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["gens", "\u00eatres humains", "peuple"],
              proof_ctx: "Le mot an-nasu est un nom collectif defini de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Le nas est l'ensemble des etres humains sans distinction — c'est un collectif universel. Ici le vocatif « ya ayyuha an-nasu » s'adresse a toute l'humanite, pas a un groupe specifique. La distinction avec « voir de loin » (nul) est claire : le mot est un nom collectif designant les gens, pas un verbe de perception. La distinction avec « oublier » (nul) est egalement claire : le contexte est une interpellation, pas un acte d'oubli.",
              axe1_verset: "Le mot an-nasu ouvre le verset par une interpellation universelle. Le vocatif ya ayyuha an-nasu est une formule coranique qui s'adresse a l'ensemble de l'humanite — pas seulement aux croyants ni aux Fils d'Israel, mais a tous les gens. Cette ouverture universelle marque que le commandement qui suit (mangez le licite et le bon, ne suivez pas le diable) concerne chaque etre humain sans exception. Le champ lexical du verset (terre, licite, bon, diable, ennemi) dessine un cadre universel de subsistance et de mise en garde.",
              axe2_voisins: "Les versets precedents (2:163-167) traitaient de la divinite unique et du chatiment des suiveurs aveugles. Le verset 168 marque un tournant : apres la theologie, l'injonction pratique. L'interpellation « o gens » elargit l'audience — on passe des idolatres et de leurs suiveurs a l'humanite entiere. Le verset 169 precisera ce que le diable ordonne : le mal et la turpitude. La transition est logique — apres avoir montre que les suiveurs aveugles seront chatit, le texte s'adresse a tous pour prevenir cette erreur.",
              axe3_sourate: "La formule « ya ayyuha an-nasu » apparait en 2:21 au debut de la sourate (« o gens, adorez votre Seigneur ») et en 2:168. Les deux occurrences marquent des commandements universels fondamentaux — adorer Dieu et manger le licite. La sourate al-Baqarah utilise cette interpellation pour les grands principes qui concernent toute l'humanite, par opposition a « ya ayyuha alladhina amanu » (o vous qui avez cru) qui s'adresse specifiquement aux croyants.",
              axe4_coherence: "La racine n-w-s apparait environ 241 fois dans le Coran. Le vocatif « ya ayyuha an-nasu » apparait en 4:1, 4:170, 10:23, 10:57, 22:1, 22:5, 22:73, 31:33, 35:3, 35:5, 35:15, 49:13. Ces occurrences marquent toujours des appels universels touchant a la creation, a la subsistance, a la mise en garde ou a la dignite humaine. Le Coran distingue clairement les appels aux gens (universels) des appels aux croyants (specifiques).",
              axe5_frequence: "Pour la mission du khalifa, l'interpellation « o gens » rappelle que la mission du khalifa concerne l'humanite entiere. Le khalifa n'est pas le representant d'un groupe mais de l'espece humaine. Les commandements universels (manger le licite, eviter le diable) sont les bases de la mission de tout etre humain sur terre. Chaque etre humain est concerne par cette responsabilite."
            },
            "Perception/Visibilit\u00e9": {
              status: "nul",
              senses: ["voir de loin", "\u00eatre visible"],
              proof_ctx: "Le sens de perception visuelle est hors sujet — le mot est un nom collectif designant les gens dans un vocatif, pas un verbe de perception."
            },
            "Sens isol\u00e9/Oublier": {
              status: "nul",
              senses: ["oublier"],
              proof_ctx: "Le sens d'oubli est hors sujet — le mot est un nom collectif designant les gens, pas un verbe d'oubli."
            }
          }
        }
      },
      // akl pos=3
      {
        word_key: "akl", position: 3, sense_chosen: "manger",
        analysis_axes: {
          sense_chosen: "manger",
          concept_chosen: "Alimentation/Consommation",
          concepts: {
            "Alimentation/Consommation": {
              status: "retenu",
              senses: ["manger", "consommer", "d\u00e9vorer", "nourriture"],
              proof_ctx: "Le verbe kulu est un imperatif 2MP de la racine a-k-l. Le Lane's donne : manger, consommer, devorer, se nourrir. L'alimentation est l'acte fondamental d'introduire la nourriture dans le corps — directionnel de l'exterieur vers l'interieur. L'imperatif marque un ordre divin direct. Ici « kulu mimma fi al-ardi halalan tayyiban » ordonne de manger de ce qui est sur la terre en tant que chose licite et bonne. La distinction avec « consumer par le feu » (nul) est claire : le contexte est l'alimentation humaine, pas la destruction par le feu.",
              axe1_verset: "Le verbe kulu est le commandement central de la premiere partie du verset. L'imperatif divin ordonne de manger — c'est un acte positif. La source est precisee : « de ce qui est sur la terre » (mimma fi al-ardi). Les qualificatifs halalan tayyiban posent les deux conditions : legalement permis et intrinsequement bon. Le verset oppose deux attitudes : manger le licite et le bon (commandement positif) contre suivre les traces du diable (prohibition). L'alimentation n'est pas un acte neutre — elle est encadree par la loi divine.",
              axe2_voisins: "Le verset 167 montrait le regret des suiveurs aveugles qui se desavouent mutuellement. Le verset 168 repond en donnant la voie juste : manger le licite et le bon. Le verset 169 precisera que le diable ordonne le mal et la turpitude — l'oppose du licite et du bon. La sequence est pedagogique : apres avoir montre le desastre du suivisme aveugle, le texte donne l'alternative correcte : consommer ce qui est permis et bon.",
              axe3_sourate: "La racine a-k-l apparait plusieurs fois dans la sourate al-Baqarah. En 2:35, Adam et son epouse pouvaient manger de tout sauf de l'arbre interdit. En 2:168, le commandement s'elargit a toute l'humanite — mangez de ce qui est sur la terre. En 2:172, le meme commandement sera repris pour les croyants specifiquement. La sourate etablit une progression : d'Adam au Paradis → a l'humanite sur terre → aux croyants en particulier.",
              axe4_coherence: "La racine a-k-l apparait environ 109 fois dans le Coran. L'imperatif « mangez » (kulu) est souvent accompagne de qualificatifs : kulu wa-shrabu (mangez et buvez) en 2:60, 2:187, 7:31. Le couple halalan tayyiban apparait aussi en 5:88, 8:69, 16:114. Le Coran ne laisse jamais l'alimentation sans cadre — manger est un acte qui engage la responsabilite devant Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'alimentation est un acte fondamental de la vie sur terre. Le khalifa doit se nourrir de ce qui est licite et bon — c'est une condition de base de sa mission. Manger le haram (l'illicite) ou le mauvais corrompt la mission de l'interieur. L'alimentation licite et bonne nourrit le corps qui porte l'ame chargee de la mission du khalifa sur terre."
            },
            "Destruction/\u00c9rosion": {
              status: "nul",
              senses: ["consumer (le feu mange)", "user"],
              proof_ctx: "Le sens de destruction par le feu est hors sujet — le contexte est un imperatif d'alimentation humaine adresse aux gens, pas une consommation par le feu."
            }
          }
        }
      },
      // ard pos=5
      {
        word_key: "ard", position: 5, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini au genitif de la racine a-r-d. Le Lane's donne : terre, sol, surface terrestre, pays. La terre est le support permanent de toute activite humaine — elle est exterieure, visible et universelle. Ici « mimma fi al-ardi » signifie « de ce qui est sur la terre » — la terre est la source de la subsistance. La distinction avec « rhume » et « tremblement » (nuls) est evidente : le contexte est la subsistance alimentaire, pas un phenomene physique.",
              axe1_verset: "Le mot al-ardi situe la source de l'alimentation — la terre. Le champ lexical du verset oppose le haut et le bas : les gens sont sur la terre et doivent manger de ce qu'elle produit. La terre est presentee comme une source de bien (licite et bon) — ce n'est pas un lieu de privation mais d'abondance encadree. Le verset ne dit pas « mangez peu » mais « mangez de ce qui est sur la terre » — la terre est genereuse, et la restriction porte sur la qualite (licite et bon), pas sur la quantite.",
              axe2_voisins: "Le verset 164 mentionnait la creation des cieux et de la terre comme signe de l'unicite divine. Le verset 168 reprend la terre sous un angle pratique — elle n'est plus seulement un signe de Dieu mais la source de la subsistance. Les versets voisins montrent la terre comme signe (164) puis comme ressource (168). La progression va du theorique au pratique.",
              axe3_sourate: "La racine a-r-d est tres frequente dans la sourate al-Baqarah. En 2:11-12, « ne semez pas le desordre sur la terre ». En 2:22, « [Dieu] vous a fait la terre pour lit ». En 2:30, « Je vais etablir sur la terre un khalifa ». En 2:168, la terre est la source de la subsistance. La sourate presente la terre comme le lieu de la mission du khalifa, son lit, sa source de subsistance et le lieu ou il ne doit pas semer le desordre.",
              axe4_coherence: "La racine a-r-d apparait environ 461 fois dans le Coran. La terre est un theme structurant — elle est le lieu de l'epreuve, de la subsistance, de la mission. En 7:10, « Nous vous avons etablis sur la terre et Nous vous y avons assigne des moyens de subsistance ». En 67:15, « C'est Lui qui vous a rendu la terre soumise. Marchez dans ses sentiers et mangez de Sa subsistance ». Le Coran associe constamment la terre a la subsistance et a la mission.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu de la mission. En 2:30, Dieu annonce qu'Il va etablir sur la terre un khalifa. En 2:168, Dieu dit aux gens de manger de ce qui est sur la terre. La terre est a la fois le lieu et la ressource de la mission — le khalifa utilise la terre pour se nourrir et accomplir sa tache. La terre n'est pas une fin en soi mais un support pour la mission divine."
            },
            "Sens isol\u00e9/Rhume": {
              status: "nul",
              senses: ["rhume"],
              proof_ctx: "Le sens de rhume est hors sujet — le mot designe la terre comme source de subsistance."
            },
            "Sens isol\u00e9/Tremblement": {
              status: "nul",
              senses: ["tremblement"],
              proof_ctx: "Le sens de tremblement est hors sujet — le contexte est l'alimentation, pas un phenomene sismique."
            }
          }
        }
      },
      // hll pos=6
      {
        word_key: "hll", position: 6, sense_chosen: "licite",
        analysis_axes: {
          sense_chosen: "licite",
          concept_chosen: "Lic\u00e9it\u00e9/Permission",
          concepts: {
            "Lic\u00e9it\u00e9/Permission": {
              status: "retenu",
              senses: ["\u00eatre licite", "\u00eatre permis", "rendre licite"],
              proof_ctx: "Le mot halalan est un nom masculin singulier indefini accusatif de la racine h-l-l. Le Lane's donne : licite, permis, delie de tout interdit, ce dont le noeud est defait. Le halal est etymologiquement ce qui est denoue — l'oppose du haram qui est noue/attache/interdit. L'accusatif indique l'etat (hal) dans lequel on mange — on mange en tant que chose licite. La distinction avec « delier/resoudre » (nul) est claire : le mot est utilise comme qualificatif de l'alimentation, pas comme verbe d'action. La distinction avec « descendre en un lieu » (nul) est egalement claire : le contexte est la qualification de la nourriture, pas l'installation.",
              axe1_verset: "Le mot halalan est le premier des deux qualificatifs de la nourriture — licite et bon (halalan tayyiban). Le halal est le critere legal : ce qui est permis par la loi divine. Le tayyib est le critere qualitatif : ce qui est bon en soi. Les deux criteres sont necessaires — une chose peut etre licite mais pas bonne (exces), ou bonne dans sa nature mais interdite dans un contexte donne. Le verset pose que l'alimentation du croyant doit satisfaire les deux conditions simultanement. Le champ lexical oppose halal (licite) aux « traces du diable » qui menent au haram (illicite).",
              axe2_voisins: "Le verset 167 montrait les suiveurs aveugles qui regrettent. Le verset 168 donne la voie alternative : manger le licite. Le verset 169 precisera que le diable ordonne le mal — l'oppose du licite. La progression est : regret des suiveurs (167) → commandement du licite (168) → nature du commandement diabolique (169). Le licite est la voie de sortie du suivisme aveugle.",
              axe3_sourate: "La racine h-l-l apparait dans la sourate al-Baqarah dans des contextes de permission et d'interdiction. En 2:187, il est permis (uhilla) de cohabiter avec les epouses les nuits du jeune. En 2:196, quand on sort de l'etat de sacralisation (halla). En 2:275, Dieu a rendu licite le commerce. La sourate utilise la racine h-l-l pour delimiter le cadre du permis face a l'interdit.",
              axe4_coherence: "La racine h-l-l apparait environ 53 fois dans le Coran. Le couple halalan tayyiban (licite et bon) apparait en 2:168, 5:88, 8:69, 16:114. Ce doublet est une formule coranique recurrente qui pose les deux criteres de l'alimentation permise. En 5:4, « on leur a rendu licites les bonnes choses ». Le Coran insiste sur la double exigence : la legalite divine ET la bonte intrinseque.",
              axe5_frequence: "Pour la mission du khalifa, le licite est le cadre de la mission. Le khalifa ne peut accomplir sa mission en mangeant l'illicite — ce qui entre dans le corps affecte l'ame. La distinction entre halal et haram est un acte de discernement fondamental. Le khalifa qui mange le licite nourrit un corps sain pour une mission saine. Le halal n'est pas une contrainte mais une liberation — il denoue ce qui est permis et balise le chemin."
            },
            "Dissolution/Lib\u00e9ration": {
              status: "nul",
              senses: ["d\u00e9lier", "r\u00e9soudre"],
              proof_ctx: "Le sens de delier est le sens etymologique premier de h-l-l. Dans ce contexte le mot est utilise comme qualificatif nominal (halalan) decrivant l'etat de la nourriture — ce qui est licite — pas comme verbe decrivant l'acte de delier."
            },
            "Installation": {
              status: "nul",
              senses: ["descendre (en un lieu)", "s\u00e9journer"],
              proof_ctx: "Le sens de s'installer/descendre est hors sujet — le mot qualifie la nourriture comme licite, il ne decrit pas une installation."
            }
          }
        }
      },
      // tyb pos=7
      {
        word_key: "tyb", position: 7, sense_chosen: "bon",
        analysis_axes: {
          sense_chosen: "bon",
          concept_chosen: "Bont\u00e9/Puret\u00e9",
          concepts: {
            "Bont\u00e9/Puret\u00e9": {
              status: "retenu",
              senses: ["\u00eatre bon", "pur", "licite", "agr\u00e9able", "parfum"],
              proof_ctx: "Le mot tayyiban est un adjectif masculin singulier indefini accusatif de la racine t-y-b. Le Lane's donne : bon, agreable, pur, plaisant, sain. Le tayyib est ce qui est bon dans sa nature meme — pas seulement autorise par la loi mais agreable dans sa substance. L'accusatif marque l'etat (hal) en coordination avec halalan — la nourriture est a la fois licite ET bonne. Le tayyib est un jugement de qualite intrinseque, pas de legalite. La racine couvre aussi le parfum (odeur agreable) et la purete (proprete) — tous les sens convergent vers l'idee de ce qui est bon et agreable.",
              axe1_verset: "Le mot tayyiban est le second qualificatif de la nourriture, apres halalan. Le couple halalan tayyiban pose deux exigences complementaires : le halal est le critere juridique (permis par Dieu), le tayyib est le critere qualitatif (bon en soi). Le verset dit : ne vous contentez pas du permis, cherchez aussi le bon. Le champ lexical oppose le bon (tayyib) aux traces du diable qui menent au mauvais. L'alimentation juste combine la legalite et la qualite — le khalifa mange bien et justement.",
              axe2_voisins: "Le verset 169 precisera que le diable ordonne le « mal et la turpitude » (as-su'a wa-l-fahsha') — exactement l'oppose du tayyib (bon). Le verset 172 reprendra « mangez des bonnes choses (tayyibat) que Nous vous avons attribuees ». Les versets voisins renforcent la centralite du tayyib : le bon est ce que Dieu ordonne, le mauvais est ce que le diable ordonne.",
              axe3_sourate: "La racine t-y-b apparait dans la sourate al-Baqarah en 2:57 (« mangez des bonnes choses dont Nous vous avons pourvus »), 2:168 (halalan tayyiban), 2:172 (« mangez des bonnes choses »), 2:267 (« depensez des bonnes choses que vous avez acquises »). La sourate utilise tayyib comme critere recurrent pour l'alimentation et la depense — tout ce qui sort du patrimoine du croyant doit etre bon.",
              axe4_coherence: "La racine t-y-b apparait environ 50 fois dans le Coran. En 14:24, « une bonne parole est comme un bon arbre ». En 4:2, « ne mangez pas les biens des orphelins — mangez le bon, pas le mauvais ». Le Coran utilise tayyib pour qualifier la parole, la nourriture, la terre, le parfum — tout ce qui est bon dans sa nature. Le bon est un critere universel qui transcende le domaine alimentaire.",
              axe5_frequence: "Pour la mission du khalifa, le bon est la qualite de ce qui nourrit la mission. Le khalifa se nourrit du bon — nourriture bonne, parole bonne, action bonne. Le tayyib est l'adequation entre la chose et sa finalite — la bonne nourriture nourrit, la bonne parole guide, la bonne action construit. Le khalifa qui cherche le bon accomplit sa mission avec les meilleurs moyens."
            }
          }
        }
      },
      // tbae pos=9
      {
        word_key: "tbae", position: 9, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suite/Succession",
          concepts: {
            "Suite/Succession": {
              status: "retenu",
              senses: ["suivre", "poursuivre", "successeur", "partisan"],
              proof_ctx: "Le verbe tattabi'u est un inaccompli 2MP de la forme VIII de la racine t-b-'. Le Lane's donne : suivre, emboiter le pas, venir apres, marcher dans les traces de. La forme VIII (ittaba'a) est reflexive — c'est un choix delibere de suivre. L'inaccompli avec la negation la (la tattabi'u) forme une prohibition permanente — ne suivez jamais. La distinction avec « consequence » (nul) est claire : le verbe decrit l'acte volontaire de suivre quelqu'un, pas un effet qui decoule d'une cause.",
              axe1_verset: "Le verbe tattabi'u ouvre la seconde partie du verset — la prohibition. La premiere partie ordonne de manger le licite et le bon, la seconde interdit de suivre les traces du diable. L'opposition est structurante : suivre le commandement de Dieu (manger le licite) vs suivre les traces du diable. Le verbe « suivre » est precis — ce n'est pas simplement « obeir » mais « marcher dans les traces de », ce qui implique emprunter le meme chemin, faire les memes pas. Le suiveur reproduit le parcours du suivi.",
              axe2_voisins: "Le verset 166 montrait les suiveurs (ittaba'u) qui se desavouent de leurs leaders le Jour du Jugement. Le verset 167 montrait le regret des suiveurs. Le verset 168 utilise le meme verbe pour la prohibition : ne suivez pas les traces du diable. Les versets 166-168 forment un ensemble coherent sur le theme du suivisme — le suivisme aveugle mene a la perdition (166-167), donc ne suivez pas le diable (168).",
              axe3_sourate: "La racine t-b-' est structurante dans la sourate al-Baqarah. En 2:38, « celui qui suivra Ma guidance n'aura rien a craindre ». En 2:145, « si tu suis leurs desirs apres la science qui t'est venue ». En 2:166, les liens entre suiveurs et suivis seront coupes. En 2:168, ne suivez pas les traces du diable. La sourate oppose deux suivis : suivre la guidance de Dieu (salut) vs suivre le diable ou les desirs (perdition).",
              axe4_coherence: "La racine t-b-' apparait environ 174 fois dans le Coran. L'expression « la tattabi'u khutuwati ash-shaytani » (ne suivez pas les traces du diable) est un refrain coranique — elle apparait en 2:168, 2:208, 6:142, 24:21. Le Coran repete cette prohibition quatre fois, soulignant son importance. Chaque occurrence est dans un contexte d'alimentation ou de comportement general — le diable detourne de ce qui est bon et licite.",
              axe5_frequence: "Pour la mission du khalifa, le choix de qui suivre est la decision fondamentale. Le khalifa suit la guidance de Dieu ou les traces du diable — il n'y a pas de troisieme voie. Suivre les traces du diable c'est emprunter le chemin de la rebellion et de l'eloignement de Dieu. Le khalifa discerne les traces et choisit le bon chemin — c'est l'exercice fondamental de son libre arbitre au service de sa mission."
            },
            "R\u00e9sultat/Effet": {
              status: "nul",
              senses: ["cons\u00e9quence"],
              proof_ctx: "Le sens de consequence est hors sujet — le verbe decrit l'acte volontaire de suivre les traces du diable, pas un effet qui decoule d'une cause."
            }
          }
        }
      },
      // khatw pos=10
      {
        word_key: "khatw", position: 10, sense_chosen: "traces",
        analysis_axes: {
          sense_chosen: "traces",
          concept_chosen: "Marche/Progression",
          concepts: {
            "Marche/Progression": {
              status: "retenu",
              senses: ["faire un pas", "enjamber", "pas (khutuwa)", "marcher"],
              proof_ctx: "Le mot khutuwati est un pluriel feminin au genitif de la racine kh-t-w. Le Lane's donne : pas, enjambee, trace laissee par la marche. Le pas est l'acte elementaire de la locomotion — chaque pas est ponctuel mais la marche est un parcours permanent. Les « pas du diable » (khutuwat ash-shaytan) sont ses traces, son chemin marque au sol — suivre ses pas c'est emprunter le meme parcours de rebellion et d'eloignement de Dieu. Le pluriel khutuwat indique de multiples pas, de multiples etapes — le diable ne mene pas d'un coup mais pas a pas.",
              axe1_verset: "Le mot khutuwati est l'objet de l'interdiction — ne suivez pas les traces du diable. Les traces (pas) sont des marques au sol qui montrent un chemin. Le champ lexical du verset oppose deux chemins : le chemin de Dieu (manger le licite et le bon) et le chemin du diable (ses traces). Le verset ne dit pas « n'obeissez pas au diable » mais « ne suivez pas ses traces » — l'image est spatiale et concrete. Chaque pas du diable est une etape vers l'egarement — suivre ses traces c'est s'eloigner pas a pas du droit chemin.",
              axe2_voisins: "Le verset 166 montrait les liens (asbab) entre suiveurs et suivis qui sont coupes. Le verset 168 precise le mecanisme du suivisme — on suit des traces, des pas, un chemin marque. Le verset 169 revelera le contenu de ces traces : le diable ordonne le mal et la turpitude. Les traces du diable sont donc les etapes de la degradation morale — chaque pas mene plus loin dans le mal.",
              axe3_sourate: "L'expression khutuwat ash-shaytan apparait en 2:168 et en 2:208. En 2:208, le contexte est l'entree dans l'islam en totalite — « ne suivez pas les traces du diable ». La sourate utilise cette expression pour mettre en garde contre l'abandon progressif de la voie droite. Les traces du diable ne sont pas un saut dans le mal mais une progression insidieuse — pas a pas.",
              axe4_coherence: "Le mot khutuwat apparait 6 fois dans le Coran, toujours dans l'expression khutuwat ash-shaytan : 2:168, 2:208, 6:142, 24:21. Aucune autre utilisation n'existe dans le Coran. Cette exclusivite montre que les « pas » dans le Coran sont toujours les pas du diable — le mot est devenu un idiome coranique pour designer le chemin de l'egarement. Le Coran utilise cette image concrete pour rendre tangible le processus insidieux de la tentation.",
              axe5_frequence: "Pour la mission du khalifa, les traces du diable sont les etapes de l'echec de la mission. Le diable ne mene pas a l'echec d'un coup — il procede pas a pas, trace apres trace. Le khalifa doit reconnaitre ces traces et s'en detourner. Chaque compromis avec l'illicite est un pas de plus sur le chemin du diable. La vigilance du khalifa consiste a ne pas poser le pied sur les traces du diable — meme le premier pas."
            }
          }
        }
      },
      // \u0161ytn pos=11
      {
        word_key: "\u0161ytn", position: 11, sense_chosen: "diable",
        analysis_axes: {
          sense_chosen: "diable",
          concept_chosen: "\u00c9garement/R\u00e9bellion",
          concepts: {
            "\u00c9garement/R\u00e9bellion": {
              status: "retenu",
              senses: ["diable (shaytan)", "s'\u00e9loigner de la v\u00e9rit\u00e9", "\u00eatre rebelle"],
              proof_ctx: "Le mot ash-shaytani est un nom masculin singulier defini au genitif de la racine sh-t-n. Le Lane's donne : celui qui est eloigne (de la misericorde divine), le rebelle, le brulant de colere. Le shaytan est etymologiquement celui qui s'est eloigne — c'est un etat permanent de rebellion contre Dieu. Le defini (ash-shaytan avec l'article) designe le diable par excellence — Iblis, celui qui a refuse de se prosterner devant Adam. Le genitif rattache les pas (khutuwat) au diable — ce sont ses traces specifiques. La distinction avec « bruler de colere » (nul) est claire : le mot designe l'etre rebel, pas un etat emotionnel.",
              axe1_verset: "Le mot ash-shaytani est le possesseur des traces interdites. Le verset construit une opposition binaire : Dieu ordonne de manger le licite et le bon, et interdit de suivre les traces du diable. Le diable est presente comme l'anti-guide — celui dont le chemin mene a l'oppose du commandement divin. La justification suit immediatement : « il est pour vous un ennemi evident » — l'inimitie du diable n'est pas cachee, elle est declaree. Le champ lexical (traces, ennemi, evident) dessine le portrait d'un adversaire actif et visible.",
              axe2_voisins: "Le verset 36 de la sourate racontait comment le diable a fait trebucher Adam et Eve hors du Paradis. Le verset 168 reprend le meme avertissement pour l'humanite entiere — ne suivez pas le diable qui a deja fait chuter vos parents. Le verset 169 precisera que le diable ordonne le mal et la turpitude. Les versets voisins completent le portrait du diable : il a fait chuter Adam (36), il mene par ses traces (168), il ordonne le mal (169).",
              axe3_sourate: "La racine sh-t-n apparait dans la sourate al-Baqarah en 2:14 (les diables de l'hypocrisie), 2:36 (le diable fait trebucher Adam), 2:102 (ce que les diables enseignaient), 2:168 (les traces du diable), 2:208 (les traces du diable), 2:268 (le diable promet la pauvrete). La sourate presente le diable comme un acteur permanent qui agit sur plusieurs fronts — la tromperie, la chute, l'enseignement du faux, les traces, les fausses promesses.",
              axe4_coherence: "La racine sh-t-n apparait environ 88 fois dans le Coran. Le diable est declare ennemi de l'homme en 2:168, 2:208, 7:22, 12:5, 17:53, 35:6, 36:60, 43:62. Le Coran repete cette declaration d'inimitie pour que l'homme ne se trompe pas sur la nature du diable. En 35:6, « le diable est pour vous un ennemi, prenez-le donc pour ennemi ». Le Coran ne laisse aucune ambiguite sur le statut du diable.",
              axe5_frequence: "Pour la mission du khalifa, le diable est l'adversaire de la mission. En 2:34, le diable refuse de se prosterner devant Adam — il rejette la mission du khalifa. En 2:36, il fait chuter Adam du Paradis. En 2:168, il tente de detourner l'humanite du licite et du bon. Le khalifa doit connaitre son ennemi — le diable s'oppose a chaque aspect de la mission par ses traces, ses promesses et ses ordres."
            },
            "Feu/Chaleur": {
              status: "nul",
              senses: ["br\u00fbler (de col\u00e8re)"],
              proof_ctx: "Le sens de bruler est un eclairage etymologique — la racine shatana peut evoquer le feu interieur. Dans ce contexte le mot designe l'etre rebelle par excellence, le diable, pas un etat de colere."
            }
          }
        }
      },
      // edw pos=14
      {
        word_key: "edw", position: 14, sense_chosen: "ennemi",
        analysis_axes: {
          sense_chosen: "ennemi",
          concept_chosen: "Hostilit\u00e9/Inimiti\u00e9",
          concepts: {
            "Hostilit\u00e9/Inimiti\u00e9": {
              status: "retenu",
              senses: ["ennemi", "hostilit\u00e9", "agression"],
              proof_ctx: "Le mot 'aduwwun est un nom masculin singulier indefini de la racine '-d-w. Le Lane's donne : ennemi, hostile, celui qui veut du mal et agit pour nuire. L'ennemi est en etat permanent d'opposition — son hostilite n'est pas ponctuelle mais constitutive. L'indefini ('aduwwun sans article) marque la nature meme du diable : il est ennemi par essence, pas par circonstance. La distinction avec « courir » (nul) est claire : le mot est un nom qualificatif, pas un verbe de mouvement. La distinction avec « transgresser » est claire aussi : le mot designe un statut (ennemi), pas un acte (transgresser).",
              axe1_verset: "Le mot 'aduwwun est le predicat de la proposition causale « innahu lakum 'aduwwun mubinun » — il est pour vous un ennemi evident. Cette proposition justifie la prohibition de suivre les traces du diable. La raison de l'interdiction est simple et directe : le diable est un ennemi. Le qualificatif mubin (evident) renforce : cette inimitie n'est pas douteuse ni cachee, elle est manifeste. Le verset donne la cause et l'effet : il est ennemi (cause) donc ne le suivez pas (effet).",
              axe2_voisins: "Le verset 36 racontait les actes du diable — il a fait trebucher Adam. Le verset 168 donne le verdict : il est ennemi. Le verset 169 detaillera ses ordres : le mal et la turpitude. La sequence est : actes passes (36) → verdict (168) → nature de ses ordres (169). La declaration d'inimitie est un jugement definitif qui ne changera jamais — le diable est et restera ennemi.",
              axe3_sourate: "La racine '-d-w apparait dans la sourate al-Baqarah en 2:36 (« descendez, vous serez ennemis les uns des autres »), 2:98 (« Dieu est ennemi des dissimulateurs »), 2:168 (« il est pour vous un ennemi evident »), 2:190 (« combattez ceux qui vous combattent »). La sourate utilise la racine '-d-w pour delimiter les camps — l'inimitie est une realite permanente entre le diable et l'homme, entre Dieu et les dissimulateurs.",
              axe4_coherence: "La racine '-d-w apparait environ 106 fois dans le Coran. L'expression « innahu lakum 'aduwwun mubin » (il est pour vous un ennemi evident) apparait presque identiquement en 2:168, 2:208, 6:142, 7:22, 12:5, 17:53, 28:15, 35:6, 36:60, 43:62. Le Coran repete cette declaration au moins dix fois — la repetition montre que l'homme oublie constamment cette verite et a besoin d'etre rappele.",
              axe5_frequence: "Pour la mission du khalifa, l'ennemi est identifie clairement. Le khalifa n'a pas a chercher qui est son adversaire — le Coran le declare ouvertement. L'inimitie du diable est permanente, universelle et evidente. Le khalifa qui connait son ennemi peut se premunir contre ses ruses. Ignorer l'ennemi c'est se rendre vulnerable — le verset insiste sur l'evidence de l'inimitie pour empecher toute negligence."
            },
            "Course/Vitesse": {
              status: "nul",
              senses: ["courir"],
              proof_ctx: "Le sens de courir est hors sujet — le mot est un nom qualifiant le diable comme ennemi, pas un verbe de mouvement rapide."
            },
            "Transgression/Exc\u00e8s": {
              status: "nul",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Le sens de transgression est un sens connexe de la racine '-d-w. Dans ce contexte le mot est un nom designant le statut d'ennemi du diable, pas un acte de transgression."
            }
          }
        }
      },
      // byn pos=15
      {
        word_key: "byn", position: 15, sense_chosen: "evident",
        analysis_axes: {
          sense_chosen: "evident",
          concept_chosen: "Clart\u00e9/\u00c9vidence",
          concepts: {
            "Clart\u00e9/\u00c9vidence": {
              status: "retenu",
              senses: ["\u00eatre clair", "expliquer", "\u00e9vident", "preuve"],
              proof_ctx: "Le mot mubinun est un participe actif de la forme IV de la racine b-y-n. Le Lane's donne : clair, evident, manifeste, qui rend clair. La forme IV (abana) est causative — mubin est celui qui rend clair, qui manifeste au grand jour. Le participe actif indique un etat permanent — l'inimitie du diable est constamment manifeste, pas occasionnellement. L'indefini (mubinun sans article) coordonne avec 'aduwwun — ennemi evident, les deux qualificatifs forment une unite. La distinction avec « separer/entre » (nul) est claire : le mot qualifie l'inimitie comme evidente, il ne decrit pas une separation spatiale.",
              axe1_verset: "Le mot mubinun ferme le verset en qualifiant l'inimitie du diable — elle est evidente. Le verset a une structure argumentative complete : ordre (mangez le licite et le bon) → prohibition (ne suivez pas les traces du diable) → justification (il est pour vous un ennemi evident). Le mot mubin est le dernier mot du verset et porte tout le poids de la conclusion — l'inimitie du diable n'est pas une hypothese, c'est une evidence manifeste. Si l'inimitie est evidente, celui qui suit quand meme les traces du diable est sans excuse.",
              axe2_voisins: "Le verset 159 utilise mubin dans « ceux qui cachent les preuves claires (bayyinat) ». Le verset 168 utilise mubin pour qualifier l'inimitie du diable — elle est claire. Les deux usages partagent l'idee que la verite est manifeste : les preuves sont claires et l'inimitie du diable est evidente. Cacher ce qui est clair (159) et suivre un ennemi evident (168) sont deux formes de refus de voir ce qui est devant soi.",
              axe3_sourate: "La racine b-y-n est tres frequente dans la sourate al-Baqarah. En 2:99, « Nous avons fait descendre vers toi des signes clairs (bayyinat) ». En 2:159, « ceux qui cachent les preuves claires ». En 2:168, « un ennemi evident ». En 2:185, le Coran est « guidance claire ». La sourate utilise la racine b-y-n pour souligner que la verite est manifeste — les signes sont clairs, les preuves sont evidentes, l'ennemi est manifeste. Le probleme n'est jamais l'obscurite de la verite mais le refus de la voir.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le mot mubin est un des adjectifs les plus frequents — il qualifie le Livre (kitab mubin), l'ennemi (aduww mubin), l'egarement (dalal mubin), l'autorite (sultan mubin). Le Coran se presente comme une clarification totale — tout est rendu mubin, evident, manifeste. Le diable est ennemi mubin et le Coran est Livre mubin — l'opposition est totale.",
              axe5_frequence: "Pour la mission du khalifa, l'evidence est un outil de la mission. Le khalifa vit dans un monde ou la verite est manifeste — les signes sont clairs, l'ennemi est evident, la guidance est limpide. Le khalifa n'a pas l'excuse de l'ignorance car tout est mubin. Sa mission est de voir ce qui est evident et d'agir en consequence — manger le licite, eviter le diable, suivre la guidance claire."
            },
            "S\u00e9paration/Distance": {
              status: "nul",
              senses: ["s\u00e9parer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est hors sujet — le mot qualifie l'inimitie du diable comme evidente, il ne decrit pas une separation spatiale ou un espace entre deux choses."
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

  const verseIds = [175];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 168 ===\n');
  await processVerse(168);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V168 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
