const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 190
// verse_id=197, analysis_id=557
// "Et combattez dans la voie de Dieu ceux qui vous
//  combattent, et ne transgressez pas. Certes, Dieu
//  n'aime pas les transgresseurs."
// Combat defensif, limites, transgression interdite
// =====================================================

const verseData = {
  190: {
    verse_id: 197,
    analysis_id: 557,
    translation_arab: "Et combattez dans la voie de Dieu ceux qui vous combattent, et ne transgressez pas. Certes, Dieu n'aime pas les transgresseurs.",
    full_translation: "Combattez dans le sentier de Dieu ceux qui vous combattent, et ne transgressez pas. Certes, Dieu n'aime pas les transgresseurs !",
    translation_explanation: `§DEMARCHE§
Le verset ouvre la section sur les regles du combat en posant le principe fondamental : le combat est autorise mais encadre par des limites strictes. Le verbe **qatilu** est un imperatif 2MP de la forme III de la racine q-t-l. Le Lane's donne : combattre, lutter, faire la guerre, s'engager dans un combat mutuel, chercher a tuer reciproquement. La forme III (mufa'ala) marque la reciprocite — qatala en forme III signifie combattre mutuellement, pas simplement tuer (forme I). L'imperatif adresse aux croyants un ordre collectif de combattre. La conjonction **wa** (et) relie ce verset a ce qui precede et marque la continuite legislative. La particule **fi** (dans) introduit le cadre du combat : il se fait DANS la voie de Dieu, pas en dehors. Le nom **sabili** est un nom genitif masculin singulier de la racine s-b-l. Le Lane's donne : chemin, voie, route, direction, moyen, methode, cause. Le sabil est le chemin que l'on emprunte pour atteindre un but. La locution « fi sabili l-lahi » (dans la voie de Dieu) est une expression coranique centrale qui designe le combat mene pour la cause de Dieu — pas pour des interets personnels, tribaux ou materiels. La voie de Dieu est le cadre qui legitime le combat. Le nom **Allahi** est le nom propre de la divinite a la racine a-l-h. Le Lane's donne : le Dieu, la divinite unique, Celui qui est adore. Le genitif rattache la voie a Dieu — c'est la voie DE Dieu, celle qu'Il a tracee. Le pronom relatif **alladhina** (ceux qui) introduit la qualification de l'ennemi : ce ne sont pas tous les gens, mais ceux qui vous combattent. Le verbe **yuqatilunakum** est un inaccompli 3MP forme III de la racine q-t-l avec pronom suffixe 2MP. Le Lane's donne : ils vous combattent, ils luttent contre vous, ils vous font la guerre. L'inaccompli marque une action en cours ou recurrente — ceux qui sont en train de vous combattre ou qui ont l'habitude de le faire. Le pronom suffixe -kum (vous) fait des croyants l'objet de l'agression — le combat autorise est une reponse defensive. La conjonction **wa-la** (et ne...pas) introduit l'interdiction. Le verbe **ta'tadu** est un inaccompli 2MP forme VIII de la racine '-d-w. Le Lane's donne : transgresser, depasser les limites, commettre un exces, aller au-dela de ce qui est permis, etre hostile, etre injuste. La forme VIII (ifti'al) marque l'effort reflexif — la transgression est un acte que l'on commet activement contre soi-meme et contre l'autre. L'interdiction est absolue : ne transgressez pas, meme dans le combat. La particule **inna** (certes) introduit une proposition emphatique qui justifie l'interdiction. Le nom **Allaha** est le nom de Dieu a l'accusatif — sujet de inna. La negation **la** nie le verbe suivant. Le verbe **yuhibbu** est un inaccompli 3MS forme IV de la racine h-b-b. Le Lane's donne : aimer, affectionner, desirer, vouloir du bien, avoir de l'inclination pour. La forme IV (af'ala) est causative — le sens est « avoir de l'amour pour, manifester de l'affection envers ». La negation « la yuhibbu » (Il n'aime pas) est une formule coranique qui exprime la desapprobation divine sans parler de haine — Dieu n'aime pas les transgresseurs, ce qui implique qu'Il les desapprouve et ne leur accorde pas Sa faveur. Le nom **al-mu'tadina** est un participe actif pluriel forme VIII de la racine '-d-w. Le Lane's donne : les transgresseurs, ceux qui depassent les limites, ceux qui commettent des exces. Le participe actif marque un etat permanent — les transgresseurs sont ceux dont la transgression est une caractéristique, pas un acte isole. L'article al- et le pluriel designent une categorie connue : LES transgresseurs, ceux qui par nature ou par habitude depassent les limites.

§JUSTIFICATION§
**combattez** — Le sens retenu est « combattre/lutter mutuellement ». Le verbe qatilu est un imperatif forme III de q-t-l. L'alternative « tuer » (forme I) est ecartee car la forme III marque la reciprocite — il s'agit d'un combat mutuel, pas d'un meurtre unilateral.

**la voie** — Le sens retenu est « chemin/voie/direction ». Le mot sabili designe la voie tracee par Dieu. L'alternative « moyen/methode » est ecartee car la locution « fi sabili l-lahi » est une expression figee qui designe la cause de Dieu, pas une simple methode.

**Dieu** — Le sens retenu est « la divinite unique ». Le mot Allah est le nom propre de Dieu. Aucune alternative pertinente — le sens est univoque.

**vous combattent** — Le sens retenu est « combattre mutuellement ». Le verbe yuqatilunakum est un inaccompli forme III avec pronom suffixe. L'alternative « tuer » est ecartee pour la meme raison que qatilu — la forme III est reciproque.

**ne transgressez pas** — Le sens retenu est « transgresser/depasser les limites ». Le verbe ta'tadu est un inaccompli forme VIII de '-d-w. L'alternative « etre hostile/ennemi » est ecartee car le contexte est celui d'une limite a respecter dans le combat — il ne s'agit pas d'hostilite en general mais de transgression des limites posees par Dieu.

**n'aime pas** — Le sens retenu est « aimer/affectionner ». Le verbe yuhibbu est un inaccompli forme IV de h-b-b. L'alternative « desirer » est ecartee car le contexte est l'attitude divine envers une categorie de personnes — il s'agit d'amour et d'approbation, pas de desir.

**les transgresseurs** — Le sens retenu est « ceux qui depassent les limites ». Le mot al-mu'tadina est un participe actif forme VIII de '-d-w. L'alternative « les ennemis/les hostiles » est ecartee car le contexte est celui de la transgression des limites dans le combat — les transgresseurs sont ceux qui ne respectent pas les regles du combat, pas simplement des ennemis.

§CRITIQUE§
Les traductions courantes rendent « qatilu fi sabili l-lahi » par « combattez dans le sentier de Dieu » ou « dans la voie de Dieu ». Notre traduction garde « la voie de Dieu » qui est plus naturel en francais que « le sentier ». Le point crucial du verset est la conditionnalite du combat : « ceux qui vous combattent » (alladhina yuqatilunakum) — le combat est autorise seulement contre ceux qui combattent les croyants en premier. C'est le fondement coranique du combat defensif. L'interdiction « wa-la ta'tadu » (et ne transgressez pas) pose un cadre ethique au combat — meme en situation de guerre, il y a des limites a ne pas franchir. Hamidullah traduit par « ne transgressez pas » ce qui est fidele. Notre traduction conserve cette traduction directe. La formule « Dieu n'aime pas les transgresseurs » est une sanction morale — elle motive l'obeissance par l'amour divin plutot que par la peur du chatiment.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "combattez", pos: "verbe", phon: "qatilu", arabic: "\u0642\u064e\u0640\u0670\u062a\u0650\u0644\u064f\u0648\u0627\u06df", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 1 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 2 },
      { fr: "la voie de", pos: "nom", phon: "sabili", arabic: "\u0633\u064e\u0628\u0650\u064a\u0644\u0650", word_key: "sbl", is_particle: false, sense_retenu: "voie/chemin", position: 3 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 5 },
      { fr: "vous combattent", pos: "verbe", phon: "yuqatilunakum", arabic: "\u064a\u064f\u0642\u064e\u0640\u0670\u062a\u0650\u0644\u064f\u0648\u0646\u064e\u0643\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 6 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 7 },
      { fr: "transgressez pas", pos: "verbe", phon: "ta'tadu", arabic: "\u062a\u064e\u0639\u0652\u062a\u064e\u062f\u064f\u0648\u0653\u0627\u06df", word_key: "edw", is_particle: false, sense_retenu: "transgresser", position: 8 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 9 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 11 },
      { fr: "aime pas", pos: "verbe", phon: "yuhibbu", arabic: "\u064a\u064f\u062d\u0650\u0628\u0651\u064f", word_key: "hbb", is_particle: false, sense_retenu: "aimer", position: 12 },
      { fr: "les transgresseurs", pos: "nom", phon: "al-mu'tadina", arabic: "\u0671\u0644\u0652\u0645\u064f\u0639\u0652\u062a\u064e\u062f\u0650\u064a\u0646\u064e", word_key: "edw", is_particle: false, sense_retenu: "transgresseurs", position: 13 }
    ],
    words: [
      // qtl pos=1
      {
        word_key: "qtl", position: 1, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combattre", "tuer", "lutter", "faire la guerre", "s'engager dans un combat mutuel"],
              proof_ctx: "Le verbe qatilu est un imperatif 2MP de la forme III de la racine q-t-l. Le Lane's donne : combattre mutuellement, lutter l'un contre l'autre, s'engager dans un combat reciproque, chercher a tuer l'un l'autre. La forme I qatala signifie tuer — un acte unilateral. La forme III qatala ajoute la reciprocite — combattre mutuellement implique que les deux parties sont engagees dans le combat. L'imperatif est un ordre collectif adresse aux croyants. La racine q-t-l porte le sens fondamental de supprimer la vie, mais la forme III deplace le sens vers le combat mutuel ou chaque partie risque sa vie. Le contexte « fi sabili l-lahi » (dans la voie de Dieu) encadre ce combat — il n'est legitime que dans le cadre trace par Dieu.",
              axe1_verset: "Le mot qatilu ouvre le verset et pose l'ordre central : combattez. Le champ lexical (voie de Dieu, ceux qui vous combattent, ne transgressez pas, transgresseurs) montre que le combat est le sujet principal mais qu'il est encadre par trois conditions : il doit etre dans la voie de Dieu, il doit viser ceux qui combattent les croyants, et il ne doit pas depasser les limites. Le verbe est a l'imperatif — c'est un ordre, pas une permission. Mais l'ordre est immediatement suivi de restrictions qui le cadrent. Le combat coranique n'est pas une licence de violence — c'est un devoir encadre.",
              axe2_voisins: "Le verset 2:191 poursuit avec « tuez-les (uqtuluhum, forme I) ou que vous les trouviez et expulsez-les d'ou ils vous ont expulses ». Le passage de la forme III (combat mutuel, v.190) a la forme I (tuer, v.191) montre une escalade conditionnelle — le combat mutuel peut mener au fait de tuer l'ennemi. Le verset 2:192 ajoute « s'ils cessent, alors Dieu est pardonneur » — le combat s'arrete quand l'agression cesse. Les versets 190-193 forment un bloc legislatif complet sur les regles du combat.",
              axe3_sourate: "La racine q-t-l apparait frequemment dans la sourate al-Baqarah. En 2:154, « ne dites pas de ceux qui sont tues dans la voie de Dieu qu'ils sont morts — ils sont vivants ». En 2:178, le talion est prescrit pour les tues. En 2:190-193, les regles du combat sont posees. La sourate construit progressivement le cadre du combat : d'abord le statut des martyrs (154), puis le talion (178), puis les regles d'engagement (190-193). Le combat dans la sourate est toujours encadre par la justice et la mesure.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. En 4:74, « qu'ils combattent dans la voie de Dieu ceux qui echangent la vie d'ici-bas contre l'au-dela ». En 9:36, « combattez les associateurs tous ensemble comme ils vous combattent tous ensemble ». En 22:39, « il est permis a ceux qui sont combattus de combattre parce qu'ils ont ete leses ». Le Coran pose le combat comme une reponse defensive a l'agression — le verset 2:190 en est la formulation la plus explicite avec « ceux qui vous combattent ».",
              axe5_frequence: "Pour la mission du khalifa, le combat est le dernier recours pour proteger l'ordre divin sur terre. Le khalifa ne combat pas par desir de pouvoir ou de conquete mais pour defendre la voie de Dieu contre ceux qui l'attaquent. Le combat est un acte de preservation — le khalifa protege la communaute, la justice et la liberte de culte contre l'agression. Le refus de combattre quand on est agresse serait une defaillance de la mission — laisser la corruption s'installer sans resistance. Le combat dans la voie de Dieu est l'expression ultime de la responsabilite du khalifa."
            }
          }
        }
      },
      // sbl pos=3
      {
        word_key: "sbl", position: 3, sense_chosen: "voie",
        analysis_axes: {
          sense_chosen: "voie",
          concept_chosen: "Voie/Direction",
          concepts: {
            "Voie/Direction": {
              status: "retenu",
              senses: ["chemin", "voie", "route", "direction", "moyen", "cause", "sentier"],
              proof_ctx: "Le nom sabili est un nom genitif masculin singulier de la racine s-b-l. Le Lane's donne : chemin, voie, route, direction, moyen d'acces, cause pour laquelle on agit. Le sabil est le chemin trace que l'on emprunte pour atteindre une destination. Au sens concret, c'est une route physique ; au sens figure, c'est la cause ou la direction. La construction « fi sabili l-lahi » est une locution coranique majeure qui designe la cause de Dieu — le chemin que Dieu a trace pour les croyants. Le genitif lie la voie a Dieu — ce n'est pas n'importe quelle voie mais celle qui mene a Dieu et qui est conforme a Sa volonte.",
              axe1_verset: "Le mot sabili definit le cadre du combat. Le champ lexical (combattez, Dieu, ceux qui vous combattent, ne transgressez pas) montre que la voie de Dieu est la condition de legitimite du combat. Sans cette condition, le combat serait simple violence. Le mot est au genitif rattache a Allah — la voie appartient a Dieu, c'est Lui qui la definit. Combattre « dans » la voie de Dieu signifie que le combat doit etre conforme aux regles divines — pas au-dela, pas en dehors. La voie est a la fois la cause (pourquoi on combat) et la methode (comment on combat).",
              axe2_voisins: "Le verset 2:191 precise « l'epreuve (fitna) est plus grave que le meurtre » — ce qui situe le combat dans la voie de Dieu comme une reponse a la fitna (persecution religieuse). Le verset 2:193 conclut « combattez-les jusqu'a ce qu'il n'y ait plus de fitna et que le culte soit pour Dieu ». La voie de Dieu est donc la liberte de culte — on combat dans la voie de Dieu pour que le culte de Dieu soit libre et non persecute. Les versets 190-193 definissent la voie de Dieu comme la defense de la liberte religieuse.",
              axe3_sourate: "La racine s-b-l apparait dans la sourate al-Baqarah en de nombreuses occurrences. En 2:154, « ceux qui sont tues dans la voie de Dieu ». En 2:195, « depensez dans la voie de Dieu ». En 2:217, « detourner de la voie de Dieu ». La sourate utilise « sabili l-lahi » comme un concept englobant — la voie de Dieu est le cadre de toute action du croyant : le combat, la depense, le sacrifice. Celui qui detourne de la voie de Dieu est l'oppose de celui qui y combat.",
              axe4_coherence: "La racine s-b-l apparait environ 176 fois dans le Coran. L'expression « fi sabili l-lahi » est l'une des plus frequentes du Coran — elle apparait dans les contextes du combat (2:190, 4:74, 9:111), de la depense (2:195, 2:261), du sacrifice (3:169), de l'emigration (4:100). Le Coran fait de la voie de Dieu le cadre universel de l'action du croyant — tout ce qu'il fait de significatif (combattre, depenser, emigrer, mourir) se fait dans cette voie ou en dehors d'elle.",
              axe5_frequence: "Pour la mission du khalifa, la voie de Dieu est la direction de la mission elle-meme. Le khalifa ne trace pas sa propre voie — il suit celle que Dieu a tracee. La voie de Dieu est la cause pour laquelle le khalifa existe sur terre : prevenir la corruption, etablir la justice, proteger le culte. Le combat dans la voie de Dieu est l'expression de cette mission quand elle est menacee par l'agression exterieure. Le khalifa qui combat hors de la voie de Dieu trahit sa mission."
            }
          }
        }
      },
      // alh pos=4
      {
        word_key: "alh", position: 4, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "Celui qui est adoré", "le Dieu unique"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif, de la racine a-l-h. Le Lane's donne : Dieu, la divinite, Celui qui est adore, l'Etre supreme. Le mot Allah est le nom propre du Dieu unique dans la theologie coranique — il n'a pas de pluriel et ne designe qu'une seule entite. Le genitif rattache le nom a sabili (voie) — la voie de Dieu. La mention de Dieu dans le contexte du combat est cruciale : elle place le combat sous l'autorite divine, pas sous l'autorite humaine. Le combat legitime est celui que Dieu autorise dans Sa voie, pas celui que les hommes decident pour leurs propres raisons.",
              axe1_verset: "Le mot Allahi apparait deux fois dans le verset : d'abord comme possesseur de la voie (sabili l-lahi), puis comme sujet de la desapprobation (inna l-laha la yuhibbu). La double mention encadre le verset : Dieu definit la voie au debut et Dieu sanctionne la transgression a la fin. Le combat est place entre ces deux mentions de Dieu — il est autorise par Dieu et juge par Dieu. Le champ lexical montre que Dieu est l'autorite supreme du combat — c'est Lui qui ordonne, Lui qui limite, et Lui qui desapprouve l'exces.",
              axe2_voisins: "Le verset 2:191 mentionne « aupres de la Mosquee sacree » (al-masjidi l-harami) — un lieu sacre de Dieu. Le verset 2:192 dit « Dieu est pardonneur, misericordieux ». Le verset 2:193 conclut « et que le culte soit pour Dieu (li-l-lahi) ». Les versets 190-193 sont satures de references a Dieu — le combat est entierement subordonne a l'autorite divine. Chaque aspect du combat (sa cause, ses limites, son arret, son but) est defini par rapport a Dieu.",
              axe3_sourate: "Le nom Allah apparait plus de 200 fois dans la sourate al-Baqarah. Il est present dans presque chaque verset legislatif comme l'autorite qui prescrit, interdit, pardonne et juge. La sourate construit une legislation entierement fondee sur l'autorite divine — chaque prescription est de Dieu, pour Dieu, et jugee par Dieu.",
              axe4_coherence: "Le nom Allah apparait environ 2700 fois dans le Coran. Il est le nom le plus frequent du texte. Chaque contexte — legislation, recit, exhortation, eschatologie — mentionne Dieu comme reference supreme. Dans le contexte du combat, la mention de Dieu distingue le combat legitime (dans Sa voie) du combat illegitime (pour des raisons humaines).",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Le khalifa n'agit pas en son nom propre mais au nom de Dieu — il est le representant de l'autorite divine sur terre. Le combat dans la voie de Dieu est un combat au service du mandant, pas au service du mandataire. Le khalifa qui combat pour ses propres interets trahit son mandat. La double mention de Dieu dans le verset rappelle que le khalifa est sous surveillance divine — Dieu ordonne et Dieu juge."
            }
          }
        }
      },
      // qtl pos=6 (yuqatilunakum — same root as pos=1)
      {
        word_key: "qtl", position: 6, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combattre", "tuer", "lutter", "faire la guerre", "s'engager dans un combat mutuel"],
              proof_ctx: "Le verbe yuqatilunakum est un inaccompli 3MP forme III de la racine q-t-l avec pronom suffixe 2MP (-kum). Le Lane's donne : ils vous combattent, ils luttent contre vous mutuellement, ils s'engagent dans un combat reciproque avec vous. La forme III maintient la reciprocite — ce ne sont pas des meurtriers unilateraux mais des combattants engages dans un conflit mutuel. L'inaccompli marque une action en cours ou recurrente — ceux qui sont en train de vous combattre ou ceux qui ont l'habitude de le faire. Le pronom suffixe -kum fait des croyants l'objet de l'agression — c'est l'ennemi qui initie le combat, pas les croyants.",
              axe1_verset: "Le mot yuqatilunakum definit l'ennemi : ce ne sont pas tous les non-croyants mais specifiquement ceux qui combattent les croyants. Le champ lexical (combattez, voie de Dieu, ne transgressez pas) montre que le combat est une reponse a l'agression. Le pronom relatif alladhina (ceux qui) restreint l'objet du combat — la cible n'est pas tous les gens mais une categorie precise. La forme III (combat mutuel) implique que l'ennemi est aussi engage dans le combat — il ne s'agit pas d'attaquer des civils ou des non-combattants. Le verset pose le principe du combat defensif : on combat ceux qui VOUS combattent.",
              axe2_voisins: "Le verset 2:191 detaille les actions a prendre contre ceux qui combattent les croyants : les tuer ou les trouver, les expulser d'ou ils ont expulse. Le verset 2:192 ajoute la condition d'arret : « s'ils cessent, alors Dieu est pardonneur ». La sequence montre que le combat est lie a l'agression de l'ennemi — quand l'agression cesse, le combat cesse. Le yuqatilunakum du verset 190 est la condition necessaire : tant qu'ils vous combattent, vous combattez ; quand ils arretent, vous arretez.",
              axe3_sourate: "En 2:217, la sourate aborde le combat durant le mois sacre et precise que « detourner de la voie de Dieu et la mecreance en Lui et en la Mosquee sacree et en expulser ses habitants est plus grave aupres de Dieu ». La sourate construit le combat comme une reponse a des agressions multiples : le combat arme (yuqatilunakum), la persecution religieuse (fitna), l'expulsion (ikhraj). Le verset 2:190 pose le principe general que les versets suivants detaillent.",
              axe4_coherence: "En 60:8-9, le Coran precise : « Dieu ne vous interdit pas d'etre bienveillants et equitables envers ceux qui ne vous combattent pas dans la religion et ne vous expulsent pas de vos demeures ». Ce verset confirme le principe de 2:190 — le combat est dirige contre ceux qui combattent les croyants, pas contre tous. En 4:90, « s'ils se retirent de vous et ne vous combattent pas et vous offrent la paix, alors Dieu ne vous donne aucune voie contre eux ». Le Coran est coherent : le combat est conditionne par l'agression de l'ennemi.",
              axe5_frequence: "Pour la mission du khalifa, la qualification de l'ennemi est essentielle. Le khalifa ne combat pas tout le monde — il combat ceux qui attaquent l'ordre divin et les croyants. La mention « ceux qui vous combattent » est un critere objectif : l'ennemi est identifie par ses actes (le combat), pas par sa croyance ou son identite. Le khalifa qui combat ceux qui ne le combattent pas trahit sa mission de justice et devient lui-meme un transgresseur."
            }
          }
        }
      },
      // edw pos=8
      {
        word_key: "edw", position: 8, sense_chosen: "transgresser",
        analysis_axes: {
          sense_chosen: "transgresser",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "dépasser les limites", "commettre un excès", "aller au-delà du permis", "être injuste"],
              proof_ctx: "Le verbe ta'tadu est un inaccompli 2MP forme VIII de la racine '-d-w. Le Lane's donne : transgresser, depasser les limites, aller au-dela de ce qui est permis, commettre un exces, etre injuste, franchir les bornes. La forme VIII (ifti'al) ajoute une nuance reflexive — la transgression est un acte que le sujet commet activement et qui retombe sur lui. La racine '-d-w porte le double sens de transgression (depasser les limites) et d'hostilite (etre ennemi). Le contexte du combat clarifie le sens : ne depassez pas les limites posees par Dieu dans le combat. Les limites incluent de ne pas tuer les civils, de ne pas mutiler les corps, de ne pas detruire les cultures et les arbres, de ne pas tuer les femmes et les enfants — selon les hadiths prophetiques.",
              axe1_verset: "Le mot ta'tadu est l'interdiction centrale du verset. Le champ lexical (combattez, voie de Dieu, ceux qui vous combattent, transgresseurs) montre que le verset autorise le combat mais interdit la transgression. L'interdiction « wa-la ta'tadu » est placee entre l'ordre de combattre et la sanction divine — elle est le pivot du verset. Le verset construit un equilibre : OUI au combat defensif, NON a la transgression. Le verbe est a l'inaccompli avec la negation la — c'est une interdiction permanente, pas ponctuelle. La transgression dans le combat inclut tout exces : tuer des non-combattants, depasser les limites de la necessite, transformer le combat en carnage.",
              axe2_voisins: "Le verset 2:191 ajoute une nuance : « ne les combattez pas aupres de la Mosquee sacree jusqu'a ce qu'ils vous y combattent ». Cela montre que meme dans le combat autorise, il y a des lieux ou le combat est interdit sauf en cas de necessite absolue. Le verset 2:194 mentionne « celui qui transgresse contre vous (i'tada alaykum), transgressez contre lui (fa'tadu alayhi) dans la meme mesure » — la reciprocite exacte est autorisee mais pas l'exces. La racine '-d-w est utilisee des deux cotes — la transgression de l'ennemi autorise une reponse equivalente, pas superieure.",
              axe3_sourate: "La racine '-d-w apparait dans la sourate al-Baqarah en plusieurs contextes. En 2:178, les regles du talion posent le principe de la proportionnalite. En 2:194, la reciprocite exacte dans la transgression. En 2:229, « ceux qui transgressent les limites de Dieu ». La sourate construit la transgression comme le franchissement des limites divines — hudud Allah. Le verset 2:190 pose le principe que le combat ne doit pas franchir ces limites.",
              axe4_coherence: "La racine '-d-w apparait environ 98 fois dans le Coran. En 5:87, « ne transgressez pas — Dieu n'aime pas les transgresseurs ». En 7:55, « invoquez votre Seigneur en humilite — Il n'aime pas les transgresseurs ». La formule « Dieu n'aime pas les transgresseurs » (la yuhibbu al-mu'tadina) est recurrente — elle apparait dans des contextes varies (combat, invocation, legislation) et marque une constante de l'ethique coranique : l'exces est toujours condamne, quel que soit le contexte.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est l'antithese de la mission. Le khalifa existe pour prevenir la corruption sur terre — s'il transgresse lui-meme, il devient ce qu'il est cense combattre. L'interdiction de transgresser dans le combat est un rappel que le khalifa n'est pas au-dessus des lois divines. Meme en situation de guerre, le khalifa reste lie par les limites de Dieu. La transgression transforme le defenseur en agresseur et le juste en injuste — elle annule la mission du khalifa."
            },
            "Hostilité/Inimitié": {
              status: "probable",
              senses: ["être hostile", "être ennemi", "montrer de l'hostilité", "traiter en ennemi"],
              proof_ctx: "Le sens d'hostilite est un sens atteste de la racine '-d-w. Le Lane's donne : être ennemi, traiter quelqu'un en ennemi, montrer de l'hostilite. Le mot 'aduww (ennemi) derive de la meme racine. Mais le contexte du verset 2:190 oriente vers la transgression des limites plutot que vers l'hostilite generique. Le verbe ta'tadu est precede de la negation la et suit l'ordre de combattre — il s'agit de ne pas depasser les limites du combat autorise, pas de ne pas etre hostile en general. L'hostilite envers l'ennemi est implicite dans l'ordre de combattre — ce qui est interdit est l'exces, pas l'hostilite elle-meme. Le sens de transgression est plus precis et mieux adapte au contexte legislatif du verset."
            }
          }
        }
      },
      // alh pos=10
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "Celui qui est adoré", "le Dieu unique"],
              proof_ctx: "Le nom Allaha est le nom propre de la divinite a l'accusatif (sujet de inna), de la racine a-l-h. Le Lane's donne : Dieu, la divinite, Celui qui est adore, l'Etre supreme. L'accusatif est exige par la particule inna qui introduit une proposition emphatique — « certes Dieu... ». La mention de Dieu ici est celle du juge qui desapprouve les transgresseurs. Le passage de Dieu comme ordonnateur du combat (sabili l-lahi) a Dieu comme juge (inna l-laha la yuhibbu) montre les deux faces de l'autorite divine : Il ordonne et Il sanctionne.",
              axe1_verset: "Le mot Allaha est le sujet de la proposition finale du verset. Le champ lexical (certes, n'aime pas, transgresseurs) montre que Dieu est le juge des transgresseurs. La structure du verset place Dieu au debut (voie de Dieu) et a la fin (Dieu n'aime pas) — le verset est encadre par l'autorite divine. Le combat est ordonne par Dieu et juge par Dieu — aucun espace n'echappe a Son autorite. La proposition « inna l-laha la yuhibbu l-mu'tadina » est une justification de l'interdiction : on ne transgresse pas PARCE QUE Dieu n'aime pas les transgresseurs.",
              axe2_voisins: "Le verset 2:192 dit « Dieu est pardonneur, misericordieux » — apres avoir mentionne que Dieu n'aime pas les transgresseurs, le texte precise qu'Il pardonne a ceux qui cessent. Le verset 2:194 dit « premunissez-vous de Dieu » — la conscience de l'autorite divine est le moteur de l'obeissance. Les versets construisent un portrait de Dieu a la fois juge et misericordieux — Il desapprouve l'exces mais pardonne le repentir.",
              axe3_sourate: "Dans toute la sourate al-Baqarah, les formules « Dieu n'aime pas » et « Dieu aime » definissent les categories de comportements approuves et desapprouves. En 2:195, « Dieu aime les bienfaisants ». En 2:222, « Dieu aime ceux qui se repentent et aime ceux qui se purifient ». La sourate construit une ethique fondee sur l'amour de Dieu — le croyant cherche a etre aime de Dieu en evitant ce qu'Il n'aime pas.",
              axe4_coherence: "La formule « inna l-laha la yuhibbu » suivie d'un participe actif pluriel est recurrente dans le Coran. En 3:57, « Dieu n'aime pas les injustes ». En 3:140, « Dieu n'aime pas les injustes ». En 5:87, « Dieu n'aime pas les transgresseurs ». Le Coran utilise cette formule pour definir les categories morales que Dieu desapprouve — les injustes, les transgresseurs, les orgueilleux, les traitres. Chaque formule est une balise ethique qui guide le comportement du croyant.",
              axe5_frequence: "Pour la mission du khalifa, la desapprobation divine est la sanction ultime. Le khalifa qui transgresse perd l'amour de Dieu — il perd le soutien de Celui qui l'a mandate. La formule « Dieu n'aime pas les transgresseurs » est un avertissement direct au khalifa : ta mission a des limites, et si tu les depasses, tu perds ton statut aupres de Dieu. L'amour de Dieu est la recompense du khalifa fidele ; sa perte est la sanction du khalifa transgresseur."
            }
          }
        }
      },
      // hbb pos=12
      {
        word_key: "hbb", position: 12, sense_chosen: "aimer",
        analysis_axes: {
          sense_chosen: "aimer",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affectionner", "désirer", "vouloir du bien", "avoir de l'inclination pour"],
              proof_ctx: "Le verbe yuhibbu est un inaccompli 3MS forme IV de la racine h-b-b. Le Lane's donne : aimer, affectionner, avoir de l'amour pour, desirer, vouloir du bien, avoir de l'inclination pour, preferer. La forme IV (af'ala) est causative — elle marque le fait de manifester de l'amour, de l'exprimer activement. L'inaccompli marque un etat permanent — Dieu n'aime pas les transgresseurs de maniere constante, ce n'est pas une reaction ponctuelle. La negation « la yuhibbu » ne signifie pas que Dieu les deteste — elle signifie qu'Il ne leur accorde pas Sa faveur, Son approbation, Sa proximite. L'absence d'amour divin est la privation du bien supreme.",
              axe1_verset: "Le mot yuhibbu est le verbe de la proposition finale qui justifie l'interdiction de transgresser. Le champ lexical (certes, Dieu, ne...pas, transgresseurs) montre que l'amour divin est le critere ethique ultime. Le verset motive l'obeissance par l'amour plutot que par la peur du chatiment — on ne transgresse pas parce que Dieu n'aime pas les transgresseurs, pas parce qu'Il les punira. La negation « la yuhibbu » est plus douce qu'une menace de chatiment — elle touche le coeur du croyant qui desire l'amour de Dieu. La structure du verset fait de l'amour divin la motivation finale du comportement ethique.",
              axe2_voisins: "Le verset 2:195 utilise la formule positive : « Dieu aime les bienfaisants (al-muhsinina) ». Le contraste entre 2:190 (Dieu n'aime pas les transgresseurs) et 2:195 (Dieu aime les bienfaisants) cree un cadre ethique binaire — on est soit transgresseur soit bienfaisant. Le verset 2:222 ajoute « Dieu aime ceux qui se repentent et ceux qui se purifient ». Les versets construisent une carte de l'amour divin : les transgresseurs en sont prives, les bienfaisants et les repentants en beneficient.",
              axe3_sourate: "La racine h-b-b apparait dans la sourate al-Baqarah en 2:165, « ceux qui prennent des associes en dehors de Dieu les aiment comme on aime Dieu, mais ceux qui croient sont plus intenses dans leur amour pour Dieu ». En 2:190, l'amour de Dieu pour Ses creatures est le critere ethique. En 2:216, « il se peut que vous detestiez une chose alors qu'elle est un bien pour vous ». La sourate explore l'amour sous toutes ses formes — l'amour de Dieu par les hommes, l'amour de Dieu pour les hommes, l'amour mal place des associateurs.",
              axe4_coherence: "La racine h-b-b apparait environ 95 fois dans le Coran. La formule « Dieu aime / n'aime pas » est un marqueur ethique central. En 3:31, « si vous aimez Dieu, suivez-moi, Dieu vous aimera ». En 3:76, « Dieu aime les pieux ». En 3:134, « Dieu aime les bienfaisants ». Le Coran construit une ethique fondee sur la reciprocite de l'amour — le croyant aime Dieu et Dieu aime le croyant qui obeit. La transgression rompt cette reciprocite.",
              axe5_frequence: "Pour la mission du khalifa, l'amour de Dieu est la finalite de la mission. Le khalifa ne cherche pas le pouvoir ou la gloire — il cherche l'approbation de Celui qui l'a mandate. L'amour de Dieu est la validation ultime de la mission du khalifa. La formule « Dieu n'aime pas les transgresseurs » rappelle au khalifa que sa mission a des limites — depasser ces limites revient a perdre l'amour de Dieu et donc la raison d'etre de la mission. Le khalifa fidele est celui que Dieu aime ; le khalifa transgresseur est celui que Dieu desapprouve."
            }
          }
        }
      },
      // edw pos=13
      {
        word_key: "edw", position: 13, sense_chosen: "transgresseurs",
        analysis_axes: {
          sense_chosen: "transgresseurs",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "dépasser les limites", "commettre un excès", "aller au-delà du permis", "être injuste"],
              proof_ctx: "Le nom al-mu'tadina est un participe actif pluriel defini forme VIII de la racine '-d-w. Le Lane's donne : les transgresseurs, ceux qui depassent les limites, ceux qui franchissent les bornes, ceux qui commettent des exces. Le participe actif (ism fa'il) marque un agent permanent — les mu'tadin sont ceux dont la transgression est un trait de caractere, pas un acte isole. La forme VIII maintient la nuance reflexive — la transgression retombe sur le transgresseur lui-meme. L'article al- et le pluriel designent une categorie morale connue et identifiable : LES transgresseurs, ceux qui par nature ou par habitude refusent de respecter les limites divines.",
              axe1_verset: "Le mot al-mu'tadina ferme le verset et designe la categorie que Dieu n'aime pas. Le champ lexical (ne transgressez pas, Dieu, n'aime pas) montre que les transgresseurs sont l'antithese du croyant fidele. Le passage du verbe (ta'tadu, ne transgressez pas) au participe (al-mu'tadina, les transgresseurs) marque une escalade : transgresser est un acte ponctuel, etre transgresseur est un etat permanent. Le verset avertit les croyants : si vous transgressez, vous devenez des transgresseurs — une categorie que Dieu n'aime pas. Le participe actif est un miroir : le croyant qui transgresse se retrouve dans cette categorie.",
              axe2_voisins: "Le verset 2:191 montre les consequences pratiques de la transgression des ennemis : « expulsez-les d'ou ils vous ont expulses ». Le verset 2:194 dit « celui qui transgresse contre vous, transgressez contre lui dans la meme mesure ». Les versets montrent que la transgression n'est pas unilaterale — l'ennemi aussi transgresse, et la reponse doit etre proportionnelle. Le mu'tadin du verset 190 est un avertissement aux croyants : ne devenez pas comme vos ennemis en depassant les limites.",
              axe3_sourate: "En 2:229, « ceux qui transgressent les limites de Dieu (hudud Allah), ce sont eux les injustes ». En 2:231, « celui qui fait cela s'est fait du tort a lui-meme ». La sourate lie la transgression a l'injustice et au tort que l'on se fait a soi-meme. Les mu'tadin de 2:190 sont dans la meme categorie que les transgresseurs des limites de Dieu en matiere de divorce (2:229-231) — la transgression est un concept unifie dans la sourate, qu'elle concerne le combat ou la legislation familiale.",
              axe4_coherence: "En 5:87, « ne transgressez pas — certes Dieu n'aime pas les transgresseurs ». Cette formule est identique a celle de 2:190 — la repetition montre que le Coran utilise une formule fixe pour condamner la transgression. En 7:55, le contexte est l'invocation — meme dans la priere, la transgression est condamnee. Le Coran fait de la transgression un concept moral universel — elle est interdite dans le combat, dans la priere, dans le divorce, dans toute interaction humaine et divine.",
              axe5_frequence: "Pour la mission du khalifa, les transgresseurs representent l'echec de la mission. Le khalifa est place sur terre pour prevenir la corruption — les transgresseurs sont ceux qui la propagent. La mention des transgresseurs a la fin du verset est un avertissement : le khalifa lui-meme peut devenir un transgresseur s'il ne respecte pas les limites du combat. La mission du khalifa n'est pas une licence de pouvoir absolu — elle est encadree par des limites divines, et celui qui les depasse devient celui qu'il est cense combattre."
            },
            "Hostilité/Inimitié": {
              status: "probable",
              senses: ["être hostile", "être ennemi", "montrer de l'hostilité", "traiter en ennemi"],
              proof_ctx: "Le participe mu'tadin peut aussi etre lu comme « les hostiles, les ennemis » de la racine '-d-w dont derive 'aduww (ennemi). Le Lane's atteste ce sens : etre hostile, traiter en ennemi, montrer de l'hostilite. Mais le contexte du verset oriente vers la transgression des limites plutot que vers l'hostilite generique. La formule « Dieu n'aime pas les transgresseurs » est une condamnation morale de l'exces, pas une description de l'inimitie. Les mu'tadin ne sont pas simplement des ennemis — ce sont des gens qui depassent les limites, y compris les croyants eux-memes s'ils transgressent. Le sens d'hostilite reduirait le verset a une condamnation des ennemis, alors que le sens de transgression en fait un avertissement universel."
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

  const verseIds = [197];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 190 ===\n');
  await processVerse(190);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V190 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
