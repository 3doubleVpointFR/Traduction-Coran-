const { createClient } = require('@supabase/supabase-js');
const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const updates = [
  {
    id: 882, // ray, verse 1
    analysis_axes: {
      sense_chosen: "as-tu vu",
      concept_chosen: "Vision/Perception",
      concepts: {
        "Vision/Perception": {
          senses: ["voir", "percevoir"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Vision/Perception ». Le verbe ara'ayta est à l'accompli deuxième personne avec le hamza interrogatif a- — « as-tu vu ? ». C'est une question rhétorique qui invite le Prophète à observer une réalité. Le test grammatical : un verbe accompli interrogatif peut-il exprimer la vision ? Oui — « as-tu vu celui qui... » est une invitation à observer et comprendre. Distinction avec « Jugement/Avis » : le jugement est intérieur (former une opinion personnelle), la vision est une observation extérieure (constater ce qui se passe). Le verset invite à VOIR un comportement, pas à porter un jugement mental. Distinction avec « Apparition » : le sujet ici est la personne qui voit (tu), pas ce qui apparaît.",
          axe1_verset: "Le verbe ara'ayta ouvre la sourate par une question directe — « as-tu vu celui qui dément ? ». Le champ lexical est celui de l'observation directe, pas de la réflexion abstraite. Le complément d'objet est alladhi (celui qui), ce qui oriente la vision vers une personne concrète et ses actions observables. On invite le Prophète à regarder le comportement de cette personne pour comprendre ce qu'est le déni de la rétribution. La question rhétorique fonctionne comme un projecteur — elle demande de VOIR, de prendre conscience d'une réalité que tout le monde peut observer. La vision ici n'est pas mystique ni intellectuelle, c'est l'observation lucide d'un comportement social que les versets 2-7 vont détailler.",
          axe2_voisins: "Les versets 2-3 décrivent ce que le Prophète doit observer : celui qui repousse l'orphelin et celui qui ne nourrit pas le pauvre. La vision du verset 1 est le cadre introductif — les versets suivants montrent ce qu'il y a à voir. Le passage fonctionne comme une démonstration : d'abord regarder (v1), puis constater les faits (v2-3), puis comprendre les conséquences (v4-7). La vision est le point d'entrée de toute la structure argumentative de la sourate. Si le premier geste est de voir, c'est que la réalité est si parlante qu'il suffit de la regarder pour comprendre. Le texte ne demande pas de réfléchir ni de croire sur parole — il demande d'OBSERVER les faits.",
          axe3_sourate: "La sourate commence par « as-tu vu » et elle est construite comme une démonstration visuelle du déni. Le thème central est : regarde ce que fait celui qui dément, et tu comprendras ce qu'est le vrai déni. La vision est le fil conducteur de toute la sourate — on voit le comportement envers les faibles (v2-3), on voit les priants défaillants (v4-6), on voit le refus d'aider (v7). Toute la sourate est bâtie sur l'idée que la vérité se voit dans les actes et pas dans les paroles. Celui qui prétend croire mais agit mal est démenti par ce qu'on voit de lui. La sourate est courte mais chaque verset montre quelque chose de concret à VOIR.",
          axe4_coherence: "Le Coran utilise ara'ayta dans d'autres sourates pour les questions rhétoriques invitant à l'observation — sourate 96:9 (ara'ayta alladhi yanha — as-tu vu celui qui interdit), sourate 105:1 (alam tara kayfa — n'as-tu pas vu comment). C'est un schéma récurrent d'invitation à observer les réalités du monde avant de tirer des conclusions. Le Coran ne demande pas une foi aveugle mais une observation lucide — le verbe voir est un outil de connaissance avant d'être un outil de foi. Dans la sourate 107, cette invitation est adressée au Prophète mais vise tout lecteur capable de constater les mêmes réalités sociales. La cohérence est parfaite : le Coran invite toujours à ouvrir les yeux sur le monde avant de parler de croyance.",
          axe5_frequence: "Observer le comportement des gens permet de comprendre leurs vraies croyances — la mission humaine de justice commence par l'observation lucide de la réalité sociale. Celui qui voit l'injustice et la reconnaît pour ce qu'elle est fait le premier pas vers la correction. La vision n'est pas passive — voir c'est déjà un acte de responsabilité, car celui qui voit ne peut plus prétendre ignorer ce qu'il a vu. Dans le cadre de la mission de civilisation, voir les signes de corruption sociale (repousser l'orphelin, ignorer le pauvre) est le préalable nécessaire à toute action corrective. La question « as-tu vu ? » est donc un appel à la vigilance permanente — ne pas fermer les yeux sur ce qui se passe autour de soi."
        },
        "Jugement/Avis": {
          senses: ["opinion", "avis"],
          status: "peu_probable",
          proof_ctx: "Le jugement est un acte intérieur — former un avis. Le verset invite à VOIR un comportement extérieur, pas à former une opinion. La question ara'ayta est « as-tu vu ? », pas « que penses-tu ? ». La distinction avec Vision/Perception : le jugement reste dans l'esprit du juge et ne suppose pas de contact direct avec le réel, alors que la vision est la perception directe de ce qui est.",
          axe1_verset: "Le champ lexical est celui de l'observation directe, pas de la formation d'un avis. Le verbe est suivi de alladhi (celui qui) qui pointe vers une personne et ses actions concrètes, pas vers une question abstraite à trancher. Le complément est une description factuelle de comportement. La question rhétorique demande de constater un fait, pas de formuler un jugement personnel. L'avis implique un processus délibératif intérieur qui est absent du registre factuel du verset.",
          axe2_voisins: "Les versets suivants décrivent des actions visibles et concrètes — repousser l'orphelin, ne pas nourrir le pauvre. Ce sont des faits observables, pas des opinions à évaluer ni des cas de conscience à trancher. Le texte montre des comportements sans demander au lecteur de prendre position — il suffit de voir pour comprendre. Le registre est factuel tout au long de la sourate. Le jugement aurait orienté vers une discussion, la vision oriente vers un constat.",
          axe3_sourate: "La sourate montre des actes concrets, pas des opinions à débattre. Son architecture est démonstrative — voir, constater les faits, comprendre les conséquences. Un jugement aurait impliqué une évaluation subjective, alors que la sourate présente des réalités objectives. Le ton est celui du constat lucide et non de la délibération intérieure. Le thème est l'action observable, pas la réflexion personnelle.",
          axe4_coherence: "Le Coran utilise ara'ayta pour l'observation directe dans les sourates mecquoises courtes, pas pour solliciter un avis. Quand le Coran veut un jugement ou un avis, il utilise d'autres formulations plus explicites. La distinction entre voir (ra'a) et juger (ra'y) existe dans l'usage coranique même si les deux partagent la même racine. Le registre de la sourate 107 est clairement celui de l'observation.",
          axe5_frequence: "L'observation précède le jugement — il faut d'abord voir clairement pour pouvoir juger correctement. La mission humaine commence par la prise de conscience de la réalité, pas par la formation d'opinions prématurées. Le sens « jugement » placerait le verset au niveau de la réflexion alors qu'il est au niveau de l'éveil — ouvrir les yeux sur ce qui est. La mission de justice exige d'abord de voir clair."
        },
        "Apparition": {
          senses: ["apparaître"],
          status: "nul",
          proof_ctx: "Le sujet est « tu » (deuxième personne) — c'est lui qui voit, il n'apparaît pas. La forme grammaticale est un accompli deuxième personne (ra'ayta = tu as vu), pas un inaccompli troisième personne. Le verset parle de celui qui observe, pas de celui qui se montre. Hors sujet."
        }
      }
    }
  },
  {
    id: 883, // kdhb, verse 1
    analysis_axes: {
      sense_chosen: "dément",
      concept_chosen: "Déni/Rejet",
      concepts: {
        "Déni/Rejet": {
          senses: ["démentir", "nier", "traiter de menteur"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Déni/Rejet ». Le verbe yukadhdhibu est à la forme II inaccompli (intensive, action continue) — « il dément activement et continuellement ». La forme II ajoute l'intensité : ce n'est pas un doute passager mais un déni actif et permanent. Le verbe est suivi de bi-d-din (la rétribution). Distinction avec « Mensonge/Fausseté » : le mensonge est dire le faux, le déni est refuser de reconnaître le vrai. Le verset décrit quelqu'un qui REJETTE une vérité, pas quelqu'un qui INVENTE un mensonge. La forme I (kadhaba) = mentir, la forme II (kadhdhabha) = démentir/rejeter.",
          axe1_verset: "Le verbe yukadhdhibu est relié à bi-d-din par la préposition bi, formant l'expression « il dément la rétribution ». Le champ lexical est celui du refus de reconnaître une réalité, pas de la fabrication de faux. Le déni ici est ciblé — il porte sur un objet précis (le din, la rétribution). La forme II inaccompli dit que ce déni est habituel et intensif — c'est un trait de caractère permanent, pas un moment de doute. Le registre du verset est celui du constat : voici quelqu'un qui refuse la rétribution, et voici ce que ça donne dans ses actes. Le déni est la cause, les versets suivants montrent les effets.",
          axe2_voisins: "Les versets 2-3 montrent les conséquences directes de ce déni : celui qui ne croit pas à la rétribution maltraite l'orphelin et ignore le pauvre. Le lien causal est explicite — c'est PARCE qu'il dément la rétribution qu'il agit ainsi. Le déni n'est pas un acte de parole isolé, c'est un positionnement existentiel qui produit des comportements. Les versets 4-7 élargissent le tableau : même les priants peuvent tomber dans ce déni s'ils prient sans sincérité. Le déni de la rétribution est le fil rouge de toute la sourate, et les versets 2-7 en sont les manifestations concrètes.",
          axe3_sourate: "Le déni de la rétribution est le point de départ de toute la sourate et son thème fondateur. C'est PARCE qu'il dément que cette personne agit mal — la sourate lie directement la croyance au comportement. Si tu ne crois pas que tes actes ont des conséquences, tu n'as aucune raison de bien agir. La sourate progresse du déni abstrait (v1) aux conséquences concrètes : maltraitance des faibles (v2-3), prière vide (v4-5), ostentation (v6), refus d'aider (v7). Chaque défaut est un symptôme du même déni originel. Le mot « dément » est le verrou de toute la logique de la sourate.",
          axe4_coherence: "Le Coran utilise la forme II kadhdhabha pour le déni actif dans de nombreux versets — les peuples anciens ont « démenti » leurs prophètes (kadhdhabat qawmu Nuh). La forme II insiste sur l'intensité et la répétition du déni. La distinction entre la forme I (kadhaba = mentir) et la forme II (kadhdhabha = démentir) est cohérente dans tout le Coran. La sourate 107 utilise la forme II avec bi (démentir quelque chose) ce qui confirme qu'il s'agit de rejeter une réalité, pas de fabriquer un mensonge. La sourate 82:9 (tukadhdhubuna bi-d-din) a exactement la même construction.",
          axe5_frequence: "Le déni de la rétribution — le refus de croire que les actes ont des conséquences — est la racine philosophique de toute injustice. Celui qui ne croit pas au retour de ses actes n'a aucune raison de bien agir. Ce déni est la corruption première, celle dont découlent toutes les autres corruptions sociales. La mission humaine de justice repose sur la conviction que les actes comptent et qu'ils reviennent. Le verset pointe vers cette réalité fondamentale : le comportement d'une personne révèle ce qu'elle croit vraiment, pas ce qu'elle prétend croire."
        },
        "Mensonge/Fausseté": {
          senses: ["mentir", "dire le faux", "fausseté"],
          status: "probable",
          proof_ctx: "Le mensonge est dire le contraire de la réalité en le sachant. Le déni est refuser de reconnaître ce qui est vrai. Le verset décrit quelqu'un qui REJETTE la rétribution, pas quelqu'un qui invente un mensonge. Le menteur sait la vérité et dit le contraire, le démenteur refuse d'accepter le vrai. La forme II avec bi oriente vers le rejet d'une réalité, pas vers la fabrication d'une fausseté.",
          axe1_verset: "Le verbe yukadhdhibu avec la préposition bi signifie « démentir, rejeter » une réalité — pas « mentir à quelqu'un ». Le champ lexical est celui du rejet d'une vérité, pas de la fabrication de faux. Le complément est la rétribution (ad-din), présentée comme une réalité à reconnaître ou rejeter. La construction bi + nom oriente vers le refus de reconnaître. Le mensonge aurait eu un complément humain (mentir à quelqu'un), pas un complément abstrait (démentir la rétribution).",
          axe2_voisins: "Les conséquences (v2-3) — maltraiter l'orphelin, ne pas nourrir le pauvre — résultent d'un rejet de principes, pas d'un mensonge. Un menteur pourrait traiter correctement l'orphelin tout en mentant par ailleurs. C'est le REJET de la rétribution qui produit ces comportements. Le lien causal est celui du déni vers l'injustice, pas celui du mensonge vers l'injustice. Les versets confirment donc le sens de déni/rejet.",
          axe3_sourate: "Le thème de la sourate est le lien entre croyance en la rétribution et comportement. Ce schéma causal fonctionne avec le déni (rejeter une vérité change le comportement) mais moins bien avec le mensonge (mentir ne change pas nécessairement le comportement). La sourate ne parle pas de gens qui mentent mais de gens qui ne croient pas — et donc agissent mal. Le fil rouge est le rejet, pas la fausseté.",
          axe4_coherence: "Le Coran distingue clairement kadhaba (forme I = mentir) de kadhdhabha (forme II = démentir). La forme II est systématiquement utilisée pour le rejet des prophètes et des vérités, pas pour la production de mensonges. Cette distinction est cohérente dans l'ensemble du corpus coranique. Le sens de mensonge est attaché à la forme I, pas à la forme II utilisée ici.",
          axe5_frequence: "Le mensonge est un acte ponctuel de parole, le déni est un positionnement permanent face à la réalité. La sourate traite d'un état qui produit un comportement durable, pas d'un acte de parole isolé. La mission humaine est menacée par le déni de la rétribution (qui détruit la motivation d'agir justement), pas par le mensonge ponctuel."
        }
      }
    }
  },
  {
    id: 884, // dyn, verse 1
    analysis_axes: {
      sense_chosen: "la rétribution",
      concept_chosen: "Rétribution/Compte",
      concepts: {
        "Rétribution/Compte": {
          senses: ["rétribution", "récompense", "punition", "compensation", "rendre ce qui est dû", "jugement"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Rétribution/Compte ». Le mot ad-din est un nom défini avec al- (la rétribution connue). Démentir « le din » c'est nier que les actes auront un retour. Le test grammatical : un nom défini peut-il désigner la rétribution comme réalité connue ? Oui. Distinction avec « Religion/Système » : la religion est un système global, la rétribution est le mécanisme du retour des actes. Les versets 2-7 montrent que le déni produit l'injustice — ce lien est plus direct avec la rétribution qu'avec la religion. La sourate 1:4 (yawm ad-din) confirme ce sens.",
          axe1_verset: "Le mot ad-din est le complément direct de yukadhdhibu (démentir) via la préposition bi — « il dément la rétribution ». Le champ lexical est celui du refus de croire au retour des actes. La rétribution est ce qui est démenti, et tout le reste de la sourate montre ce que produit ce déni. Le nom est défini avec al-, ce qui en fait une réalité connue — pas un concept vague mais LE principe du retour des actes. Le déni de la rétribution est présenté comme la source de tout ce qui suit. La rétribution donne au verset sa force argumentative : si tu ne crois pas aux conséquences de tes actes, voici ce que tu deviens.",
          axe2_voisins: "Les versets 2-3 montrent le comportement de celui qui dément la rétribution : il maltraite l'orphelin et ne nourrit pas le pauvre. Ce comportement est logique si on ne croit pas au retour des actes — pourquoi aider si rien ne revient ? Le lien entre le déni (v1) et l'injustice (v2-3) est directement causal. Si le din était la religion (un système), le lien serait moins direct — on peut appartenir à un système religieux sans en tirer de conséquences comportementales. Avec la rétribution, le lien est mécanique : pas de conséquences = pas de raison d'agir bien. Les versets 4-7 confirment : même les priants sont concernés s'ils ne vivent pas ce qu'ils prétendent croire.",
          axe3_sourate: "La sourate oppose le déni de la rétribution (v1) au mauvais comportement qui en découle (v2-7). Le din est le pivot autour duquel toute la sourate tourne — tout découle de la croyance ou non au retour des actes. La rétribution comme thème unifie les deux parties de la sourate : la maltraitance des faibles (v2-3) et la prière sans substance (v4-7). Dans les deux cas, c'est l'absence de croyance au retour des actes qui explique le comportement. Le din comme rétribution donne à la sourate sa cohérence argumentative complète. Le choix de « rétribution » éclaire le message central : tes actes te reviendront.",
          axe4_coherence: "Le Coran utilise din pour la rétribution dans la sourate 1:4 (yawm ad-din) et dans la sourate 82:9 (tukadhdhubuna bi-d-din — exactement la même construction qu'en 107:1). La cohérence est directe. Le Coran utilise aussi din pour « religion » dans d'autres contextes (sourate 109:6), mais le contexte tranche. Dans la sourate 107, le lien causal entre le déni du din et l'injustice sociale oriente clairement vers la rétribution. La sourate 82:9 est le parallèle le plus direct : même verbe, même complément, même thème.",
          axe5_frequence: "Croire que les actes ont des conséquences est le fondement de la responsabilité humaine et de toute civilisation juste. Sans rétribution, aucune raison d'être juste — c'est exactement ce que la sourate montre étape par étape. La mission humaine de justice et de prévention de la corruption repose sur ce principe : chaque acte compte, chaque acte revient. Démentir la rétribution c'est saper la base même de cette mission. Le verset 107:1 pose cette question fondamentale en ouvrant la sourate."
        },
        "Religion/Système": {
          senses: ["religion", "système de croyances", "pratique", "coutume", "habitude"],
          status: "probable",
          proof_ctx: "La religion est le système complet de croyances et de pratiques. Le verset montre que le déni mène au mauvais comportement (v2-7) — ce lien est plus direct avec la rétribution qu'avec la religion. La sourate 1:4 et la sourate 82:9 utilisent le même mot pour la rétribution dans des contextes similaires. Le din comme religion est attesté mais le contexte oriente vers la rétribution.",
          axe1_verset: "Le champ lexical est celui du déni et de ses conséquences comportementales — plus proche de la rétribution que de la religion. Le déni d'un système de croyances ne produit pas mécaniquement l'injustice sociale — on peut rejeter un système sans devenir injuste. Le lien causal est plus faible qu'avec la rétribution. Cependant, « il dément la religion » est grammaticalement possible. La question est de savoir quel sens produit le lien le plus direct avec les versets suivants.",
          axe2_voisins: "Les versets 2-3 montrent l'injustice sociale. Ces actes découlent plus naturellement du rejet de la rétribution (pas de conséquences) que du rejet de la religion (un système). On peut rejeter un système religieux et rester juste. Les versets 4-7 montrent la prière vide — ce qui s'explique mieux par l'absence de croyance aux conséquences qu'en termes doctrinaux. Le sens « religion » donnerait une lecture plus doctrinale, moins comportementale.",
          axe3_sourate: "Si le din est la religion, la sourate dit « celui qui rejette la religion maltraite les faibles ». Si le din est la rétribution, elle dit « celui qui ne croit pas aux conséquences agit mal ». La deuxième lecture est plus universelle et plus causale. Le thème de la sourate est le mécanisme du mal, pas l'appartenance religieuse. La progression v1-v7 fonctionne mieux avec la rétribution.",
          axe4_coherence: "La sourate 109:6 confirme que din peut signifier la voie/religion. Le contexte tranche entre les deux sens. La sourate 1:4 et la sourate 82:9 utilisent din pour la rétribution dans des contextes similaires. La cohérence coranique soutient les deux sens en fonction du contexte.",
          axe5_frequence: "La religion comme système est moins directement liée au comportement que la rétribution. On peut suivre un système religieux sans croire aux conséquences des actes — la sourate 107 elle-même montre des priants insincères. La rétribution est plus directement liée à la motivation profonde."
        },
        "Obéissance/Soumission": {
          senses: ["obéir", "se soumettre", "soumission", "assujettissement"],
          status: "nul",
          proof_ctx: "Le verset parle de démentir, pas d'obéir. Le registre est épistémologique (croire/ne pas croire), pas comportemental (obéir/désobéir). Hors sujet."
        },
        "Dette/Obligation": {
          senses: ["dette", "créance", "obligation financière", "prêt"],
          status: "nul",
          proof_ctx: "Pas de contexte financier dans cette sourate. La dette est une relation transactionnelle — le verset ne parle pas de relations financières. Hors sujet."
        },
        "Sens isolé/Maladie": {
          senses: ["maladie"],
          status: "nul",
          proof_ctx: "Aucun lien avec la maladie dans le contexte de la sourate. Hors sujet."
        },
        "Eau/Liquide": {
          senses: ["pluie continue"],
          status: "nul",
          proof_ctx: "Aucun lien avec la pluie ou l'eau dans le contexte du verset. Hors sujet."
        }
      }
    }
  },
  {
    id: 885, // dee2, verse 2
    analysis_axes: {
      sense_chosen: "repousse",
      concept_chosen: "Repoussement/Brutalité",
      concepts: {
        "Repoussement/Brutalité": {
          senses: ["repousser violemment", "bousculer", "rejeter avec rudesse"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Repoussement/Brutalité ». Le verbe yaduu est à l'inaccompli (action habituelle) — « il repousse habituellement ». Le complément est al-yatim (l'orphelin). Repousser l'orphelin c'est le traiter avec mépris et brutalité — le rejeter physiquement. C'est un acte extérieur, directionnel, du fort vers le faible. La racine n'a qu'un seul concept car tous les sens convergent vers le repoussement brutal.",
          axe1_verset: "Le verbe yaduu est suivi de al-yatim — il repousse l'orphelin. Le champ lexical est celui de la violence envers les faibles et du mépris social. L'inaccompli dit que c'est une habitude bien installée, pas un accident ni un moment de colère. Le repoussement est physique et méprisant — la racine d-'-' évoque une bousculade, pas un refus verbal poli. Le verset présente ce geste comme le premier signe du déni de la rétribution. Celui qui ne croit pas aux conséquences de ses actes n'a aucune raison de se retenir face au plus faible.",
          axe2_voisins: "Le verset 1 explique la cause : il dément la rétribution. Le verset 3 ajoute un deuxième signe : il ne nourrit pas le pauvre. Les versets 2-3 sont les preuves concrètes du déni — voilà ce que fait celui qui ne croit pas au retour de ses actes. Le repoussement de l'orphelin est le premier signe car c'est le plus brutal et le plus visible. Le verset 3 montre l'autre face : pas seulement la violence active mais aussi l'indifférence passive. Les deux ensemble peignent un portrait complet.",
          axe3_sourate: "Repousser l'orphelin est le premier signe concret du déni dans la progression de la sourate. La sourate montre une escalade : du déni abstrait (v1) à l'acte brutal (v2), puis à l'indifférence (v3), puis à la prière vide (v4-5), puis à l'ostentation (v6), puis au refus d'aider (v7). Le repoussement est le point de départ — l'acte le plus grossier et le plus immédiatement scandaleux. Personne ne peut voir quelqu'un repousser un orphelin et prétendre que c'est acceptable. C'est par là que la sourate commence sa démonstration.",
          axe4_coherence: "Le Coran mentionne l'orphelin dans de nombreux versets comme test de la bonté — sourate 93:9 (ne le repousse pas), sourate 89:17 (vous n'honorez pas l'orphelin), sourate 4:2 (donnez aux orphelins leurs biens). Le traitement de l'orphelin est un critère moral central dans tout le Coran. La sourate 107 confirme que repousser l'orphelin est le signe du déni de la rétribution. La racine d-'-' (repousser brutalement) est utilisée spécifiquement ici, pas une racine plus douce.",
          axe5_frequence: "Protéger les faibles — et en premier lieu les orphelins — est au cœur de la mission humaine de justice et de civilisation. Repousser l'orphelin est la corruption la plus basique et la plus visible — s'en prendre à celui qui n'a personne pour le défendre. L'orphelin représente le test minimal de l'humanité d'une personne : si tu repousses un enfant sans défense, tout le reste est prévisible. Le verset lie directement le déni philosophique (la rétribution) à l'acte social le plus bas (repousser l'orphelin). La mission de prévention de la corruption commence par ne pas faire de mal aux plus vulnérables."
        }
      }
    }
  },
  {
    id: 886, // ytm, verse 2
    analysis_axes: {
      sense_chosen: "l'orphelin",
      concept_chosen: "Orphelinat/Solitude",
      concepts: {
        "Orphelinat/Solitude": {
          senses: ["être orphelin", "orphelin", "unique"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Orphelinat/Solitude ». Le mot al-yatim est un nom défini avec al- — l'orphelin en tant que catégorie sociale identifiée et universelle. L'orphelin est celui qui a perdu son père et qui est sans protection naturelle. Le texte ne parle pas d'un orphelin spécifique mais de l'orphelin comme type — tout orphelin.",
          axe1_verset: "Le mot al-yatim est le complément direct de yaduu (repousser) — il est la victime du repoussement. Le champ lexical est celui de la vulnérabilité sociale — l'orphelin est celui qui a perdu sa protection naturelle (son père) et qui dépend de la société. Le nom est défini avec al-, ce qui en fait une catégorie universelle. Le verset présente l'orphelin comme le premier test de la compassion humaine. Repousser l'orphelin, c'est attaquer le plus vulnérable. Le mot yatim vient de la racine y-t-m qui évoque la solitude et l'unicité — l'enfant qui se retrouve seul.",
          axe2_voisins: "Après l'orphelin (v2), le verset 3 mentionne le pauvre (miskin). Les deux forment un couple de vulnérabilité — les deux catégories sociales les plus fragiles. L'orphelin manque de protection (pas de père), le pauvre manque de moyens (pas de ressources). Ensemble ils représentent les deux formes principales de faiblesse sociale. Si on ne croit pas aux conséquences de ses actes, on n'a aucune raison de protéger ceux qui ne peuvent pas se défendre. L'orphelin est mentionné en premier car sa vulnérabilité est la plus universellement reconnue.",
          axe3_sourate: "L'orphelin est le premier témoin du vrai état intérieur de la personne. Celui qui dément la rétribution (v1) montre son vrai visage face à l'orphelin (v2) — le traitement des faibles révèle ce qu'on croit vraiment. Il n'y a pas de bénéfice à être bon envers un orphelin si on ne croit pas au retour des actes. Repousser l'orphelin est donc la preuve du déni. La sourate utilise l'orphelin comme révélateur — c'est le cas le plus incontestable d'injustice.",
          axe4_coherence: "Le Coran protège l'orphelin dans de nombreux versets — sourate 4:2 (donnez-leur leurs biens), sourate 6:152 (ne touchez pas aux biens de l'orphelin), sourate 89:17 (vous n'honorez pas l'orphelin), sourate 93:9 (ne le maltraite pas). Le Prophète lui-même était orphelin, ce qui donne au mot une résonance personnelle. L'orphelin est un test universel de justice dans tout le Coran. La sourate 107 confirme cette centralité — maltraiter l'orphelin est l'un des actes les plus graves.",
          axe5_frequence: "L'orphelin est le premier test de la mission humaine de justice — protéger celui qui n'a personne pour le protéger est le minimum absolu de la civilisation. Une société qui abandonne ses orphelins échoue au test le plus basique. La racine y-t-m (être seul, unique) rappelle que l'orphelin est seul dans le monde — sans père, sans défenseur naturel. La mission de prévention de la corruption commence par ne pas ajouter de mal à celui qui en subit déjà. Le verset fait de l'orphelin le symbole de toute personne vulnérable."
        }
      }
    }
  },
  {
    id: 887, // hdd2, verse 3
    analysis_axes: {
      sense_chosen: "n'incite pas",
      concept_chosen: "Incitation/Encouragement",
      concepts: {
        "Incitation/Encouragement": {
          senses: ["inciter", "encourager", "pousser à", "exhorter"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Incitation/Encouragement ». Le verbe yahuddu est à l'inaccompli avec la négation wa la — « et il n'incite pas habituellement ». Le verbe est suivi de ala taaam al-miskin (à la nourriture du pauvre). Il n'encourage pas les gens à nourrir le pauvre — c'est un double refus : il ne nourrit pas lui-même ET ne pousse pas les autres à le faire.",
          axe1_verset: "Le verbe yahuddu est nié (wa la yahuddu) et suivi de ala taaam al-miskin. Le champ lexical est celui de l'indifférence sociale totale — ne pas agir ET ne pas encourager les autres à agir. Le double refus est frappant : ce n'est pas seulement de l'égoïsme mais de l'indifférence profonde. La négation wa la ajoutée à l'inaccompli exprime une absence permanente. L'incitation est un acte social — pousser les autres à bien agir — et son absence révèle un désintérêt total pour le sort des faibles. Le verset dit que même le minimum social (encourager les autres) n'est pas fait.",
          axe2_voisins: "Le verset 2 montre le repoussement (acte direct et brutal). Le verset 3 montre l'indifférence (absence d'acte, passivité coupable). Les deux sont des signes du déni mais de nature différente : l'un est actif, l'autre est passif. La sourate couvre les deux formes d'injustice — ce qu'on fait de mal et ce qu'on ne fait pas de bien. Le verset 3 est plus subtil que le verset 2 : ne pas inciter à nourrir est moins visible que repousser un orphelin, mais c'est tout aussi révélateur. La progression du visible (v2) vers le moins visible (v3) montre la profondeur du diagnostic.",
          axe3_sourate: "L'absence d'incitation est le deuxième signe du déni dans la progression. La sourate monte en nuance : repousser l'orphelin (acte direct visible) → ne pas inciter à nourrir (absence d'acte, invisible). Les versets 4-7 vont encore plus loin dans la subtilité — la prière vide et l'ostentation. La sourate progresse du plus grossier au plus fin, du plus visible au plus caché. Le refus d'inciter est le pont entre la brutalité directe (v2) et la fausseté intérieure (v4-7). Le déni se manifeste à tous les niveaux — dans l'action, dans l'inaction, et dans la prière elle-même.",
          axe4_coherence: "Le Coran utilise exactement la même formule dans la sourate 69:34 (lam yahuddu ala taaam al-miskin) et dans la sourate 89:18 (wa la tahadduna ala taaam al-miskin). Le reproche est récurrent et identique : ne pas inciter à nourrir le pauvre est un signe de corruption morale. La cohérence est directe et sans ambiguïté. Cela montre l'importance de l'incitation sociale dans la vision coranique — il ne suffit pas de ne pas faire le mal, il faut pousser les autres à faire le bien.",
          axe5_frequence: "La mission humaine n'est pas seulement d'agir soi-même mais d'inciter les autres à agir justement. L'indifférence qui ne se soucie même pas de pousser les autres à aider est la forme la plus profonde de corruption sociale. La civilisation repose sur la solidarité collective, pas seulement sur la bonté individuelle. Celui qui n'incite pas à nourrir le pauvre accepte tacitement que le pauvre reste affamé — c'est une complicité par le silence. Le verset place la responsabilité au-delà de l'acte individuel : chacun est responsable non seulement de ce qu'il fait mais de ce qu'il ne pousse pas les autres à faire."
        }
      }
    }
  },
  {
    id: 888, // tem, verse 3
    analysis_axes: {
      sense_chosen: "la nourriture",
      concept_chosen: "Gustation/Nourriture",
      concepts: {
        "Gustation/Nourriture": {
          senses: ["goût", "nourriture", "manger", "saveur"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Gustation/Nourriture ». Le mot taaam est un nom en idafa rattaché à al-miskin — la nourriture du pauvre, le minimum vital. Le verset dit que cette personne n'incite même pas à fournir cette nourriture. Le test grammatical : un nom en idafa peut-il désigner la nourriture rattachée au pauvre ? Oui — taaam al-miskin est une construction classique.",
          axe1_verset: "Le mot taaam est rattaché à al-miskin par une idafa — la nourriture du pauvre, ce dont le pauvre a besoin pour survivre. Le champ lexical est celui du besoin vital non satisfait — la nourriture est le minimum absolu, le premier besoin humain. Le mot est précédé de la préposition ala qui le relie à l'incitation — inciter À la nourriture du pauvre. La nourriture représente le concret par excellence — on ne peut pas être plus basique que manger. Le verset choisit délibérément le besoin le plus élémentaire pour montrer l'ampleur de l'indifférence : même la nourriture n'est pas assurée. Ce n'est pas un luxe qui est refusé mais la survie.",
          axe2_voisins: "La nourriture du pauvre est le complément de l'incitation au verset 3, après le repoussement de l'orphelin au verset 2. Les deux versets pointent vers le même type de personne : quelqu'un qui ne se soucie pas des besoins vitaux des faibles. L'orphelin (v2) est maltraité activement, le pauvre (v3) est ignoré passivement. La nourriture est l'objet concret de l'indifférence sociale. Le passage de la violence (repousser) à l'indifférence (ne pas nourrir) montre que le déni se manifeste sous toutes les formes.",
          axe3_sourate: "La nourriture représente le minimum vital dans la hiérarchie des besoins. La sourate choisit ce symbole pour montrer que celui qui dément la rétribution refuse même le minimum : pas de protection pour l'orphelin (v2), pas de nourriture pour le pauvre (v3). Si même la nourriture est refusée, tout le reste l'est aussi. La sourate progresse du concret (nourriture) vers l'abstrait (prière, ostentation) pour montrer que le déni touche tous les niveaux. Le thème est l'absence totale de compassion et la nourriture en est le test le plus simple.",
          axe4_coherence: "Le Coran mentionne la nourriture du pauvre dans la sourate 69:34 avec la même formule exacte (taaam al-miskin). Nourrir le pauvre est un acte fondamental de piété — sourate 76:8 (wa yutimuna at-taaam ala hubbihi), sourate 90:14-16 (nourrir en un jour de famine un orphelin ou un pauvre). La cohérence est complète : le Coran fait de la nourriture du pauvre un critère moral récurrent et central. Refuser de nourrir ou de pousser à nourrir est systématiquement condamné.",
          axe5_frequence: "Assurer la nourriture du pauvre est le premier devoir social et le test le plus basique de la mission humaine de justice. Ne pas s'en soucier est la forme la plus concrète de corruption — accepter que des êtres humains meurent de faim quand on pourrait agir. La mission de civilisation commence par le ventre : une société où les pauvres ne mangent pas a échoué à sa mission la plus élémentaire. Le verset place la barre au plus bas pour montrer que celui qui dément la rétribution échoue même à ce test minimal. La nourriture est universelle — tout le monde comprend la faim."
        }
      }
    }
  },
  {
    id: 889, // skn, verse 3
    analysis_axes: {
      sense_chosen: "le démuni",
      concept_chosen: "Sens isolé/Pauvre",
      concepts: {
        "Sens isolé/Pauvre": {
          senses: ["pauvre"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Sens isolé/Pauvre ». Le mot al-miskin est un nom défini — le pauvre, le démuni. La racine s-k-n signifie être calme, immobile. Le miskin est étymologiquement celui qui est immobilisé par le manque — bloqué dans sa pauvreté. Distinction avec « Habitation/Demeure » : habiter c'est s'installer par choix, le miskin est immobilisé par le manque. Distinction avec « Calme/Repos » : le calme est positif, le miskin est immobilisé par l'impuissance.",
          axe1_verset: "Le mot al-miskin est le complément de taaam dans la construction en idafa — la nourriture du pauvre. Le champ lexical est celui de la vulnérabilité sociale — l'orphelin (v2) et le pauvre (v3) sont les deux catégories les plus fragiles. Le nom est défini avec al-, catégorie universelle. Le miskin est le bénéficiaire naturel de l'aide que cette personne refuse de promouvoir. L'étymologie (s-k-n = être immobile) éclaire le sens : le miskin est « arrêté » dans sa vie par le manque de moyens. Le verset dit qu'on n'incite même pas les autres à nourrir cette personne bloquée.",
          axe2_voisins: "L'orphelin (v2) et le pauvre (v3) forment un couple de vulnérabilité. L'orphelin manque de protection (pas de père), le pauvre manque de ressources (pas de nourriture). Ensemble, ils couvrent les deux dimensions de la fragilité humaine — la solitude et le dénuement. Les deux sont maltraités ou ignorés par celui qui dément la rétribution. Le choix de ces deux catégories n'est pas arbitraire — ce sont les plus universellement reconnues comme méritant la protection de la société. Le passage de l'orphelin au pauvre élargit le spectre de l'insensibilité.",
          axe3_sourate: "Le pauvre est le deuxième témoin du déni après l'orphelin. La sourate montre que le déni de la rétribution se manifeste dans le traitement des plus faibles — c'est le révélateur du vrai état intérieur. Le miskin complète le yatim pour peindre un portrait complet de l'insensibilité sociale. La progression passe de ces tests concrets (v2-3) aux tests spirituels (v4-7), montrant que le même déni produit l'injustice sociale et la prière vide. Le pauvre est le dernier exemple concret avant le basculement vers le registre spirituel.",
          axe4_coherence: "Le Coran mentionne le miskin dans de nombreux versets — sourate 2:83, sourate 4:36, sourate 76:8. Le miskin est un critère moral central dans tout le Coran, au même titre que l'orphelin. La sourate 107 confirme que ignorer le pauvre est un signe de corruption morale fondamentale. Le parallèle avec les sourates mecquoises tardives (69:34, 89:18) est direct et indiscutable. Le Coran fait du traitement du pauvre un test récurrent de la sincérité de la foi.",
          axe5_frequence: "Le pauvre est celui que la société doit protéger en priorité dans le cadre de la mission humaine de justice. L'ignorer est la corruption sociale la plus basique. L'étymologie (s-k-n = immobilité) rappelle que le pauvre est « arrêté » — il a besoin que quelqu'un le remette en mouvement. La mission de civilisation inclut de remettre en mouvement ceux que le dénuement a immobilisés. Le verset fait du traitement du pauvre un critère de vérité : celui qui prétend croire mais ignore le pauvre se trahit lui-même."
        },
        "Habitation/Demeure": {
          senses: ["habiter", "demeurer"],
          status: "nul",
          proof_ctx: "Le verset parle du miskin (le pauvre), pas d'habitation. La construction taaam al-miskin (la nourriture du pauvre) oriente sans ambiguïté vers un être humain. Hors sujet."
        },
        "Calme/Repos": {
          senses: ["être calme", "s'apaiser", "se reposer"],
          status: "nul",
          proof_ctx: "Le verset parle du pauvre (miskin), pas du calme. Bien que la racine s-k-n signifie « être calme », le mot miskin est un terme technique pour « pauvre/démuni ». La construction taaam al-miskin ne peut pas se lire comme « la nourriture du calme ». Hors sujet."
        }
      }
    }
  }
];

async function main() {
  let ok = 0, fail = 0;
  for (const u of updates) {
    const { error } = await db
      .from('verse_word_analyses')
      .update({ analysis_axes: u.analysis_axes })
      .eq('id', u.id);
    if (error) { console.error(`FAIL VWA ${u.id}:`, error.message); fail++; }
    else { console.log(`OK VWA ${u.id}`); ok++; }
  }
  console.log(`\nDone: ${ok} OK, ${fail} FAIL`);
}
main();
