const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// Fix script for Sourate 2:41-50 (verse_ids 48-57)
// 3 fixes:
//   1. sense_chosen missing in analysis_axes JSONB (60 VWAs)
//   2. Missing axes for 12 VWAs with retenu/probable concepts
//   3. sense_chosen vs word_meanings validation (15 VWAs)
// ============================================================

// Axes data for 12 VWAs missing axes
const axesData = {

  // VWA 1373 [ktb] v51 (2:41) — "Livre/Écrit" (probable)
  // Context: Believe in what I revealed confirming what you have, don't be first to reject, don't sell signs cheap
  1373: {
    concept: "Livre/Écrit",
    axes: {
      axe1_verset: "Dans le verset 2:41, le mot kitab est present dans l'expression musaddiqan lima ma'akum — confirmant ce qui est avec vous. Ce qui est avec les enfants d'Israel est le Livre (Torah). La racine k-t-b dans son sens de livre designe ici l'objet revele qui contient la guidance divine et que les destinataires possedent deja. Le champ lexical du verset lie la revelation nouvelle (ma anzaltu) a la confirmation de ce qui existe deja — le livre precedent sert de reference pour valider le nouveau. Le verset utilise cette relation de confirmation pour etablir que les livres divins forment une chaine coherente, chaque livre attestant le precedent. La racine k-t-b dans son sens d'ecrit fixe evoque la permanence du message divin a travers les epoques.",
      axe2_voisins: "Le verset 2:40 ouvre la sequence par un rappel du bienfait divin envers les enfants d'Israel — le Livre fait partie de ces bienfaits. En 2:42, le verset suivant parle de revetir la verite de faussete — ceux qui possedent le Livre sont accuses de le denaturer. En 2:44, les destinataires ordonnent le bien aux autres mais s'oublient eux-memes alors qu'ils recitent le Livre (al-kitab) — le Livre est explicitement nomme comme le document qu'ils lisent. En 2:53, Moise recoit le Livre et le Critere — la sourate precise l'identite du Livre en question. La sequence 2:40-57 est structuree autour du rappel que les Banu Isra'il ont recu un Livre et qu'ils en sont responsables. Les versets voisins montrent que le Livre est a la fois un privilege et une charge.",
      axe3_sourate: "La sourate al-Baqarah fait du Livre un theme central des le deuxieme verset — dhalika al-kitab la rayba fihi — voici le Livre sans doute. En 2:2, le Coran est lui-meme designe comme al-Kitab — le concept de Livre est fondateur. En 2:41, le Livre precedent (Torah) est invoque comme temoin de la verite du nouveau Livre (Coran). En 2:75, les enfants d'Israel entendaient la parole de Dieu puis la deformaient — la relation au Livre est problematique. En 2:79, malheur a ceux qui ecrivent le Livre de leurs mains puis disent ceci vient de Dieu — la falsification du Livre est denoncee. La sourate fait du Livre le lieu de la verite divine et de sa denaturation humaine.",
      axe4_coherence: "Le Coran utilise la racine k-t-b dans plus de 300 versets, designant le Livre revele, l'acte d'ecrire et le decret divin. En 3:23, ceux a qui une part du Livre a ete donnee sont invites a se referer au Livre de Dieu — l'appel est identique a 2:41. En 5:44, Nous avons fait descendre la Torah dans laquelle il y a guidance et lumiere — le Livre est toujours associe a la guidance. En 29:46, ne disputez avec les gens du Livre qu'avec ce qui est meilleur — le Livre est un terrain commun entre les communautes. En 98:1, les gens du Livre et les associateurs ne pouvaient etre detaches avant que leur vienne la preuve — le Livre definit des communautes entieres. Le Coran est coherent dans sa presentation du Livre comme receptacle de la guidance divine qui traverse les epoques.",
      axe5_frequence: "Pour la mission du khalifa, le Livre est l'instrument fondamental de la guidance — sans Livre, le khalifa n'a pas de reference pour juger et gouverner. La racine k-t-b rappelle que l'ecrit fixe la loi et previent les deformations orales. En 2:41, l'appel a croire en ce qui confirme le Livre precedent montre que la continuite de la revelation est essentielle a la mission. En 2:213, Dieu a fait descendre avec les prophetes le Livre avec la verite pour juger entre les hommes — le Livre est l'outil de la justice. En 57:25, Nous avons fait descendre le Livre et la balance pour que les hommes soient justes — le Livre et la justice sont indissociables. Le khalifa doit preserver le Livre, l'enseigner et l'appliquer car c'est le fondement de toute civilisation fondee sur la guidance divine.",
      proof_ctx: "La distinction entre Livre/Ecrit et Ecriture/Inscription reside dans le fait que le Livre est un objet complet et structure — un corpus revele — tandis que l'inscription est l'acte d'ecrire ou le resultat ponctuel de cet acte. Dans le contexte de 2:41, musaddiqan lima ma'akum fait reference a un Livre complet (la Torah) que les enfants d'Israel possedent, pas a un simple ecrit ou une inscription. Le concept de Livre implique une revelation structuree, un corpus de lois et de recits, tandis que l'inscription peut etre un simple acte d'ecriture."
    }
  },

  // VWA 1375 [ewn] v52 (2:45) — "Aide/Assistance" (probable)
  // Context: Seek help through patience and prayer, heavy except for the humble
  1375: {
    concept: "Aide/Assistance",
    axes: {
      axe1_verset: "Dans le verset 2:45, le verbe ista'inu est employe dans l'expression wa ista'inu bi al-sabri wa al-salat — cherchez l'aide par la patience et la priere. La racine e-w-n dans la forme istaf'ala exprime la demande d'aide, le recours a un soutien. Le champ lexical du verset associe l'aide a deux instruments specifiques : la patience (sabr) et la priere (salat). Le verset indique que l'aide n'est pas passive — elle necessite un effort de la part du demandeur qui doit pratiquer patience et priere. La forme istaf'ala de la racine e-w-n implique que l'aide est recherchee activement, pas simplement recue. Le verset qualifie cette demarche de lourde (kabira) sauf pour les humbles — l'aide divine ne se manifeste que chez ceux qui se soumettent.",
      axe2_voisins: "Le verset 2:44 reproche aux enfants d'Israel d'ordonner le bien sans le pratiquer — la solution proposee en 2:45 est de chercher l'aide divine. En 2:46, les humbles sont definis comme ceux qui pensent qu'ils rencontreront leur Seigneur — l'aide est liee a la certitude de la rencontre divine. En 2:47, le rappel du bienfait divin montre que l'aide de Dieu est deja prouvee par l'histoire. En 2:43, l'ordre d'etablir la priere precede l'appel a chercher l'aide par la priere — la sequence montre une progression. Les versets voisins construisent un schema ou l'aide divine est la reponse a l'echec de la volonte humaine seule. La patience et la priere sont les deux canaux par lesquels l'aide divine se manifeste dans la vie du croyant.",
      axe3_sourate: "La sourate al-Baqarah fait de l'aide divine un theme recurrent qui traverse les recits historiques et les prescriptions. En 2:45, l'aide est cherchee par la patience et la priere — les deux piliers de la taqwa. En 2:153, le meme appel est repete : ya ayyuha alladhina amanu ista'inu bi al-sabri wa al-salat — la repetition souligne l'importance. En 2:250, les compagnons de Talut demandent a Dieu de repandre sur eux la patience et de les aider — l'aide est historique et concrete. En 2:286, la sourate se conclut par une supplication qui demande l'aide divine — rabbana la tuhammilna — la sourate entiere est un appel a l'aide. La sourate presente l'aide divine comme necessaire a chaque etape de la vie du croyant et de la communaute.",
      axe4_coherence: "Le Coran utilise la racine e-w-n dans de nombreux versets pour exprimer l'aide mutuelle et l'aide divine. En 5:2, entraidez-vous dans la piete et la taqwa et ne vous entraidez pas dans le peche et l'agression — l'aide est orientee moralement. En 1:5, iyyaka nasta'in — c'est Toi que nous implorons pour l'aide — la fatiha place l'aide divine au centre de la priere quotidienne. En 12:18, Dieu est Celui dont l'aide est recherchee face au mensonge (al-musta'an) — l'aide divine est le recours contre l'injustice. En 18:95, mon Seigneur m'a aide (a'anani) — Dhul-Qarnayn attribue ses realisations a l'aide divine. Le Coran est coherent dans sa presentation de l'aide comme un echange : l'humain demande avec humilite, Dieu repond avec puissance.",
      axe5_frequence: "Pour la mission du khalifa, l'aide est le mecanisme fondamental qui lie le khalifa a son Seigneur — le khalifa ne peut accomplir sa mission seul et doit constamment chercher l'aide divine. La racine e-w-n rappelle que l'autonomie absolue est une illusion et que la reussite du khalifa depend de son humilite a demander l'aide. En 2:45, l'aide est cherchee par la patience et la priere — les deux disciplines qui gardent le khalifa dans la soumission. En 5:2, l'entraide est prescrite dans la piete — le khalifa doit aussi faciliter l'aide mutuelle dans la communaute. En 110:1, quand vient le secours de Dieu et la victoire — l'aide divine se manifeste dans l'histoire par des evenements concrets. Le khalifa qui neglige de chercher l'aide par la patience et la priere s'expose a l'echec car la mission khalifale depasse les capacites humaines seules.",
      proof_ctx: "La distinction entre Aide/Assistance et Demande d'aide reside dans le fait que l'aide est le concept general — le soutien apporte a quelqu'un — tandis que la demande d'aide est l'acte specifique de solliciter ce soutien. La forme ista'inu en 2:45 est une demande d'aide, mais le concept sous-jacent est l'aide elle-meme comme principe. Le concept probable Aide/Assistance couvre la dimension plus large du soutien divin qui repond a la demande, tandis que le concept retenu Demande d'aide se concentre sur l'acte de sollicitation."
    }
  },

  // VWA 1382 [rbb] v53 (2:46) — "Croissance/Augmentation" (probable)
  1382: {
    concept: "Croissance/Augmentation",
    axes: {
      axe1_verset: "Dans le verset 2:46, le mot rabbihim est employe dans l'expression annahum mulaaqu rabbihim — qu'ils rencontreront leur Seigneur. La racine r-b-b dans son sens de croissance evoque le processus de maturation et d'augmentation que le Seigneur fait subir a Ses creatures. Le champ lexical du verset lie la certitude (yazunnun) a la rencontre (mulaaqu) et au retour (raji'un) — la croissance spirituelle mene a la rencontre divine. Le verset parle des khashi'in — les humbles — dont la certitude est le fruit d'une croissance interieure. La racine r-b-b dans son sens de croissance rappelle que le Rabb est Celui qui fait croitre, et que la rencontre avec Lui est l'aboutissement de cette croissance. Le champ lexical oppose la lourdeur de la priere pour les orgueilleux a la legerete pour les humbles qui ont grandi spirituellement.",
      axe2_voisins: "Le verset 2:45 appelle a chercher l'aide par la patience et la priere — instruments de croissance spirituelle. Le verset 2:46 definit les humbles comme ceux qui ont cette certitude — la certitude est le fruit de la croissance. En 2:47, le rappel du bienfait divin montre que la croissance d'Israel a ete favorisee par des bienfaits concrets. En 2:44, le reproche de ne pas pratiquer ce qu'on preche est un signe d'arret de croissance. Les versets voisins montrent que la croissance spirituelle est un processus qui necessite patience, priere et humilite. La sequence 2:44-47 decrit les conditions de la croissance authentique par opposition a la stagnation hypocrite.",
      axe3_sourate: "La sourate al-Baqarah utilise la racine r-b-b dans des dizaines de versets, designant le Seigneur comme Celui qui fait croitre et eduquer. En 2:5, ceux-la sont sur une guidance de leur Rabb — la guidance est un processus de croissance. En 2:21, adorez votre Rabb qui vous a crees — le Rabb est le createur et l'educateur. En 2:124, quand le Rabb d'Ibrahim l'eprouva par des paroles — l'epreuve est un instrument de croissance. En 2:131, quand son Rabb lui dit soumets-toi, il dit je me soumets au Rabb des mondes — la soumission au Rabb est l'acceptation de la croissance. La sourate presente le Rabb comme l'agent de toute croissance, materielle et spirituelle.",
      axe4_coherence: "Le Coran utilise la racine r-b-b dans des centaines de versets, couvrant les sens de seigneur, educateur, maitre et celui qui fait croitre. En 1:2, al-hamdu lillahi rabbi al-alamin — la louange est pour le Rabb des mondes, le maitre de toute croissance. En 6:164, dis : chercherais-je un autre Rabb que Dieu, Lui le Rabb de toute chose — le Rabb est la source de toute croissance dans l'univers. En 26:78, Celui qui m'a cree et me guide — le Rabb cree puis guide, la croissance est orientee. En 55:1-4, le Rahman a enseigne le Coran, a cree l'homme, lui a enseigne l'expression — la croissance humaine passe par l'enseignement divin. Le Coran est coherent dans sa presentation du Rabb comme agent de croissance a tous les niveaux de la creation.",
      axe5_frequence: "Pour la mission du khalifa, la croissance est l'objectif fondamental — le khalifa doit favoriser la croissance materielle et spirituelle de la communaute. La racine r-b-b rappelle que toute croissance veritable vient du Rabb et que le khalifa n'est qu'un instrument. En 2:46, la certitude de rencontrer le Rabb est le moteur de la croissance interieure — sans cette certitude, la croissance s'arrete. En 3:79, soyez rabbaniyin par le fait que vous enseignez le Livre — le rabbaniy est celui qui facilite la croissance spirituelle par l'enseignement. En 13:17, quant a ce qui est utile aux hommes, cela demeure sur terre — la croissance utile est preservee. Le khalifa doit etre un agent de croissance qui oriente les hommes vers leur Rabb car la croissance sans direction divine est une expansion sans sens.",
      proof_ctx: "La distinction entre Croissance/Augmentation et Seigneurie/Autorite bienveillante reside dans l'aspect processuel. La seigneurie est le statut — le Rabb est le Maitre. La croissance est le processus — le Rabb fait croitre. Dans le contexte de 2:46, la rencontre avec le Rabb est l'aboutissement d'un processus de croissance interieure. Le concept de croissance met l'accent sur le chemin, tandis que la seigneurie met l'accent sur l'autorite. Les deux sont complementaires mais la croissance est le mecanisme par lequel la seigneurie s'exerce."
    }
  },

  // VWA 1382 [rbb] v53 — "Éducation/Accompagnement" (probable) — SECOND concept for same VWA
  // We use a special key to handle this
  "1382b": {
    vwaId: 1382,
    concept: "Éducation/Accompagnement",
    axes: {
      axe1_verset: "Dans le verset 2:46, le mot rabbihim renvoie a la racine r-b-b qui dans son sens d'education designe l'accompagnement attentif du maitre envers celui qu'il eleve. Le Rabb est l'educateur par excellence — Celui qui nourrit, protege et fait grandir Sa creature etape par etape. Le champ lexical du verset evoque les humbles (khashi'in) qui pensent rencontrer leur Rabb — l'education divine les a prepares a cette rencontre. La patience et la priere mentionnees au verset precedent sont les outils pedagogiques du Rabb pour eduquer Ses serviteurs. La racine r-b-b dans son sens d'education implique une progression graduelle, un accompagnement personnalise que le Rabb accorde a chacun. Le verset montre que l'education divine produit l'humilite et la certitude — deux fruits de l'accompagnement reussi.",
      axe2_voisins: "En 2:44, le reproche d'enseigner aux autres sans se reformer soi-meme est un echec educatif — les destinataires ont manque a leur propre education. En 2:45, la patience et la priere sont des methodes educatives prescrites par le Rabb pour former les humbles. En 2:46, les humbles sont le resultat de l'education divine reussie — ils ont la certitude interieure. En 2:47, le rappel des bienfaits est lui-meme un acte educatif — se souvenir fait partie de la pedagogie divine. En 2:49, le recit de la delivrance de Pharaon est un exemple d'education par l'experience historique. Les versets voisins montrent que l'education divine utilise des methodes variees : l'injonction, la priere, le rappel historique et l'epreuve.",
      axe3_sourate: "La sourate al-Baqarah est elle-meme un acte educatif massif — elle enseigne par les recits, les lois et les arguments. En 2:31, Dieu enseigne a Adam tous les noms — l'education est le premier acte divin envers l'humanite. En 2:151, Nous vous avons envoye un messager qui vous enseigne le Livre et la sagesse — l'education prophetique est un prolongement de l'education divine. En 2:129, Ibrahim demande un messager qui enseigne le Livre et la sagesse — l'education est au coeur de la priere d'Ibrahim. En 2:282, le plus long verset du Coran est une lecon de droit commercial — l'education divine couvre tous les domaines de la vie. La sourate fait de l'education divine le fil conducteur de la relation entre Dieu et l'humanite.",
      axe4_coherence: "Le Coran presente le Rabb comme l'educateur supreme dont la pedagogie est parfaite et adaptee a chaque creature. En 12:101, Rabbi Tu m'as donne du pouvoir et Tu m'as enseigne l'interpretation des recits — Yusuf attribue son education a son Rabb. En 20:114, dis Seigneur augmente-moi en savoir — le Prophete demande au Rabb de continuer son education. En 96:1-5, lis au nom de ton Rabb qui a cree, qui a enseigne par le calame — la premiere revelation lie la lecture a l'education divine. En 55:2-4, le Rahman a enseigne le Coran, a cree l'homme, lui a enseigne l'expression — l'education est consubstantielle a la creation. Le Coran est coherent dans sa vision du Rabb comme educateur qui accompagne Sa creation du premier instant jusqu'a la rencontre finale.",
      axe5_frequence: "Pour la mission du khalifa, l'education est la methode fondamentale — le khalifa eduque la communaute comme le Rabb eduque Ses creatures. La racine r-b-b dans son sens d'education fonde le concept de tarbiya — l'education integrale qui forme l'etre humain. En 2:46, la certitude de rencontrer le Rabb est le resultat d'une education reussie — les humbles ont ete eduques par la patience et la priere. En 3:79, les rabbaniyun sont ceux qui eduquent par le Livre — le khalifa doit etre un educateur. En 62:2, le Prophete enseigne le Livre et la sagesse et purifie — l'education prophetique est le modele pour le khalifa. Le khalifa qui neglige l'education trahit la methode du Rabb car la civilisation ne se construit pas par la force mais par l'accompagnement educatif de chaque individu.",
      proof_ctx: "La distinction entre Education/Accompagnement et Seigneurie/Autorite bienveillante reside dans le processus pedagogique. La seigneurie est le statut d'autorite, l'education est la methode par laquelle cette autorite s'exerce. Dans le contexte de 2:46, la rencontre avec le Rabb suppose une preparation — cette preparation est l'education divine. Le concept d'education met l'accent sur la progression, l'apprentissage et la transformation interieure, tandis que la seigneurie met l'accent sur le pouvoir et la bienveillance du Maitre."
    }
  },

  // VWA 1384 [amn] v48 (2:41) — "Foi/Adhésion" (probable)
  // Context: Believe in what I revealed confirming what you have
  1384: {
    concept: "Foi/Adhésion",
    axes: {
      axe1_verset: "Dans le verset 2:41, le verbe aminu est employe dans l'injonction aminu bima anzaltu — croyez en ce que J'ai fait descendre. La racine a-m-n dans son sens de foi et d'adhesion designe l'engagement interieur et total envers la verite revelee. Le champ lexical du verset associe la foi (aminu) a la revelation (anzaltu) et a la confirmation (musaddiqan) — croire c'est adherer a un message qui confirme les precedents. Le verset s'adresse aux detenteurs d'un Livre precedent et leur demande une adhesion au nouveau message — la foi est un renouvellement, pas une rupture. La racine a-m-n dans la forme af'ala implique une adhesion active — amana bi signifie croire en, adherer a, donner sa confiance a. Le champ lexical oppose la foi a la vente des signes a vil prix — l'adhesion sincere est incompatible avec le commerce de la verite.",
      axe2_voisins: "Le verset 2:40 ouvre par l'appel a se souvenir du bienfait — la memoire du bienfait doit conduire a la foi. En 2:41, l'appel a croire est le premier commandement adresse aux enfants d'Israel dans cette sequence. En 2:42, le verset suivant interdit de revetir la verite de faussete — la foi exige la transparence. En 2:43, l'ordre d'etablir la priere est la consequence pratique de la foi — l'adhesion se traduit en actes. En 2:44, le reproche de ne pas pratiquer ce qu'on preche montre que la foi sans action est insuffisante. Les versets voisins construisent une progression : souvenir (2:40), foi (2:41), integrite (2:42), action (2:43), coherence (2:44).",
      axe3_sourate: "La sourate al-Baqarah fait de la foi le critere fondamental qui separe les trois groupes presentes au debut : les croyants (2:3-5), les recouvrants (2:6-7) et les hypocrites (2:8-20). En 2:3, les croyants sont ceux qui croient au ghayb — la foi en l'invisible est le premier attribut. En 2:41, la foi est demandee aux gens du Livre — l'appel est elargi. En 2:62, ceux qui croient en Dieu et au Jour Dernier et agissent bien n'ont rien a craindre — la foi est universelle. En 2:177, la piete est de croire en Dieu, au Jour Dernier, aux anges, au Livre et aux prophetes — la foi a un contenu doctrinal precis. La sourate fait de la foi l'adhesion totale qui structure toute la vie du croyant.",
      axe4_coherence: "Le Coran utilise la racine a-m-n dans des centaines de versets, en faisant l'un des concepts les plus frequents du texte. En 4:136, O vous qui avez cru, croyez en Dieu et Son Messager et le Livre qu'Il a fait descendre — la foi est un renouvellement permanent. En 49:14, les Arabes ont dit nous avons cru, dis vous n'avez pas cru mais dites nous nous sommes soumis — la foi est plus profonde que la soumission exterieure. En 2:285, le Messager a cru en ce qui lui a ete revele de son Seigneur, ainsi que les croyants — la foi du Prophete est le modele. En 61:11, croyez en Dieu et Son Messager et luttez dans le chemin de Dieu — la foi a des consequences pratiques. Le Coran est coherent dans sa presentation de la foi comme adhesion interieure qui se manifeste par l'action.",
      axe5_frequence: "Pour la mission du khalifa, la foi est le fondement — sans adhesion interieure a la guidance divine, la mission est impossible. La racine a-m-n rappelle que la foi est a la fois securite (aman) et adhesion (iman) — le khalifa qui croit est en securite et donne la securite. En 2:41, l'appel a croire precede tous les autres commandements — la foi est la condition prealable. En 8:2, les croyants sont ceux dont les coeurs tremblent quand Dieu est mentionne — la foi est un etat interieur qui affecte tout l'etre. En 23:1, les croyants ont reussi — la foi est la condition du succes. Le khalifa doit cultiver la foi dans la communaute car c'est l'adhesion interieure qui donne sens aux lois et aux institutions.",
      proof_ctx: "La distinction entre Foi/Adhesion et Securite/Confiance reside dans l'orientation du mouvement. La securite est un etat de protection — on est en securite. L'adhesion est un engagement — on adhere a une verite. Dans le contexte de 2:41, aminu bima anzaltu est clairement un appel a l'adhesion, pas a la securite. Le concept de foi comme adhesion est actif et volontaire, tandis que la securite est passive et receptive. L'adhesion implique une conviction, la securite implique une protection."
    }
  },

  // VWA 1389 [kfr] v48 (2:41) — "Rejet/Ingratitude" (probable)
  // Context: don't be first to reject it, don't sell My signs cheap
  1389: {
    concept: "Rejet/Ingratitude",
    axes: {
      axe1_verset: "Dans le verset 2:41, le verbe takfuru designe le rejet actif de la revelation dans l'expression wa la takunu awwala kafirin bihi — ne soyez pas les premiers a la recouvrir. La racine k-f-r dans son sens de rejet et d'ingratitude souligne que les enfants d'Israel, en refusant le Coran, commettent un acte d'ingratitude envers Dieu qui leur a deja donne un Livre. Le champ lexical du verset associe le rejet (kafirin) a la primaute (awwala) — etre le premier a rejeter est une aggravation car les detenteurs du Livre devraient etre les premiers a reconnaitre. Le rejet est aussi lie a la vente des signes (wa la tashtaru bi ayati thamanan qalilan) — le kufr se manifeste par le commerce de la verite. La racine k-f-r ici combine recouvrement de la verite et ingratitude envers les bienfaits divins.",
      axe2_voisins: "Le verset 2:40 rappelle les bienfaits divins — le rejet en 2:41 est donc doublement ingrat car il survient apres les bienfaits. En 2:42, revetir la verite de faussete est une forme de rejet deguise — le kufr n'est pas toujours frontal. En 2:44, ne pas pratiquer ce qu'on preche est un rejet implicite de la verite. En 2:47, le rappel repete du bienfait montre que le rejet est un oubli volontaire des faveurs divines. Les versets voisins montrent que le rejet des enfants d'Israel n'est pas une ignorance mais un choix delibere face a des preuves accumulees. La sequence construit un dossier ou le kufr est presente comme une ingratitude systematique.",
      axe3_sourate: "La sourate al-Baqarah fait du kufr le theme negatif central qui s'oppose a la foi. En 2:6, ceux qui recouvrent ne croiront pas — le kufr est un etat de fermeture. En 2:34, Iblis est le premier kafir — le rejet d'origine. En 2:41, les enfants d'Israel sont avertis de ne pas etre les premiers a rejeter — le parallele avec Iblis est implicite. En 2:89, un Livre confirmant ce qu'ils avaient leur est venu, et ils l'ont recouvert — le meme kufr se repete dans l'histoire. En 2:161, ceux qui recouvrent et meurent recouvrants sont maudits — le kufr persistant est sans retour. La sourate fait du rejet une decision aux consequences eternelles.",
      axe4_coherence: "Le Coran utilise la racine k-f-r dans des centaines de versets pour denoncer le rejet de la verite et l'ingratitude envers les bienfaits. En 14:7, si vous etes reconnaissants J'augmenterai, si vous recouvrez Mon chatiment est severe — le kufr comme ingratitude declenche la punition. En 30:44, celui qui recouvre, contre lui est son kufr — le rejet ne nuit qu'a son auteur. En 35:36, les kafirin auront le feu de la Gehenne — le chatiment est definitif. En 2:41, le Coran avertit specifiquement de ne pas etre les premiers a rejeter — l'avertissement personnalise montre la gravite. Le Coran est coherent dans sa condamnation du kufr comme ingratitude et rejet volontaire de la verite manifeste.",
      axe5_frequence: "Pour la mission du khalifa, le rejet est la menace la plus grave — un peuple qui rejette la guidance divine perd sa mission. La racine k-f-r rappelle que l'ingratitude est le contraire de la gratitude (shukr) et que le khalifa doit prevenir le rejet collectif. En 2:41, l'avertissement de ne pas etre les premiers a rejeter montre que le leadership dans le rejet est une aggravation — les dirigeants qui rejettent entrainent leurs peuples. En 47:38, si vous vous detournez, Il vous remplacera par un autre peuple — le rejet entraine le remplacement du khalifa defaillant. En 14:28, ceux qui ont echange le bienfait de Dieu par le kufr ont installe leur peuple dans la perdition — le rejet des dirigeants detruit des civilisations. Le khalifa doit cultiver la gratitude pour prevenir le rejet.",
      proof_ctx: "La distinction entre Rejet/Ingratitude et Couverture/Dissimulation reside dans l'aspect relationnel. La couverture est l'acte de cacher — un geste technique. Le rejet est une attitude envers un bienfaiteur — une rupture de relation. Dans le contexte de 2:41, les enfants d'Israel sont avertis apres le rappel des bienfaits — le kufr est donc une ingratitude envers Celui qui les a gratifies. Le concept de rejet inclut la dimension emotionnelle et relationnelle que la simple couverture ne capture pas."
    }
  },

  // VWA 1391 [ayt] v48 (2:41) — "Révélation/Parole" (probable)
  // Context: don't sell My signs (ayati) for a small price
  1391: {
    concept: "Révélation/Parole",
    axes: {
      axe1_verset: "Dans le verset 2:41, le mot ayati est employe dans l'expression wa la tashtaru bi ayati thamanan qalilan — ne vendez pas Mes signes a vil prix. La racine a-y-t dans son sens de revelation designe les versets reveles qui contiennent la guidance divine. Le champ lexical du verset associe les signes (ayat) a la transaction commerciale (tashtaru, thamanan) — les signes divins sont traites comme une marchandise par ceux qui les dénaturent. Le verset lie la revelation au concept de confirmation (musaddiqan) — les signes confirment les precedents. La racine a-y-t dans son sens de parole divine fait des ayat le vehicule de la revelation — chaque signe est une parole de Dieu adressee aux hommes. Le verset interdit de monnayer les signes, montrant que la revelation a une valeur incommensurable.",
      axe2_voisins: "Le verset 2:40 rappelle le bienfait — les signes font partie de ces bienfaits. En 2:42, revetir la verite de faussete est une forme de corruption des signes. En 2:44, reciter le Livre sans le pratiquer est une trahison des signes. En 2:49, la delivrance de Pharaon est elle-meme un signe — la revelation n'est pas que textuelle. En 2:50, la separation de la mer est un signe manifeste — les ayat sont aussi des evenements historiques. Les versets voisins montrent que les signes divins sont a la fois textuels (le Livre) et historiques (les miracles), et que les deux sont objets de corruption ou de gratitude.",
      axe3_sourate: "La sourate al-Baqarah fait des ayat un theme omni-present — les signes divins sont mentionnes dans presque chaque passage. En 2:2, le Livre ne contient aucun doute — il est lui-meme un ensemble de signes. En 2:73, ainsi Dieu vous montre Ses signes pour que vous raisonniez — les signes appellent la reflexion. En 2:99, Nous avons fait descendre vers toi des signes clairs — la clarte des signes est affirmee. En 2:118, Nous avons explique les signes pour un peuple qui a la certitude — les signes sont accessibles aux certains. En 2:164, la creation des cieux et de la terre contient des signes pour les doues d'intelligence. La sourate fait des ayat le materiau fondamental de la guidance divine.",
      axe4_coherence: "Le Coran utilise la racine a-y-t dans plus de 380 versets, en faisant l'un des termes les plus frequents du texte. En 3:4, ceux qui recouvrent les signes de Dieu auront un chatiment severe — les signes sont proteges par la justice divine. En 6:97, Nous avons detaille les signes pour un peuple qui sait — les signes sont detailles et accessibles. En 41:53, Nous leur montrerons Nos signes dans les horizons et en eux-memes — les signes sont partout. En 45:6, voila les signes de Dieu, Nous te les recitons avec verite — les signes sont recites, ils sont parole. Le Coran est coherent dans sa presentation des ayat comme la manifestation multiforme de la verite divine.",
      axe5_frequence: "Pour la mission du khalifa, les signes sont les reperes de la guidance — le khalifa doit lire les signes, les enseigner et empecher leur corruption. La racine a-y-t rappelle que chaque signe est une parole divine qui demande une reponse — le khalifa est le premier a devoir repondre aux signes. En 2:41, l'interdiction de vendre les signes montre que la revelation est gratuite et que le khalifa ne doit pas commercialiser la guidance. En 7:146, Je detournerai de Mes signes ceux qui s'enorgueillissent sur terre sans droit — l'arrogance empeche la lecture des signes. En 62:5, ceux qui portent la Torah sans la pratiquer sont comme l'ane portant des livres — porter les signes sans les comprendre est une trahison. Le khalifa doit etre le lecteur attentif des signes pour guider la communaute.",
      proof_ctx: "La distinction entre Revelation/Parole et Signe/Preuve reside dans la source. Le signe est un phenomene observable — un miracle, un evenement, un verset. La revelation est la parole divine qui emane de Dieu vers les hommes. Dans le contexte de 2:41, ayati peut designer a la fois les signes observables et la parole revelee — le concept de revelation est plus large car il inclut la dimension de parole adressee. Le concept probable Revelation/Parole met l'accent sur l'origine divine et la dimension communicationnelle des ayat."
    }
  },

  // VWA 1395 [lbs] v49 (2:42) — "Vêtement/Revêtement" (probable)
  // Context: Don't dress truth in falsehood, don't hide truth knowingly
  1395: {
    concept: "Vêtement/Revêtement",
    axes: {
      axe1_verset: "Dans le verset 2:42, le verbe talbisu est employe dans l'expression wa la talbisu al-haqqa bi al-batil — ne revetez pas la verite de faussete. La racine l-b-s dans son sens de vetement et de revetement designe l'acte de couvrir une chose d'une autre — ici, couvrir la verite du vetement de la faussete. Le champ lexical du verset oppose haqq (verite) et batil (faussete) comme deux couches — la verite est sous le vetement et la faussete est le vetement visible. Le verset utilise la metaphore vestimentaire pour decrire la manipulation intellectuelle — ceux qui habillent la verite de faux la rendent meconnaissable. La racine l-b-s dans son sens concret de vetement donne a la metaphore une force visuelle : la verite est deshabillée de sa clarte et rhabillée de confusion. L'acte de revetir est delibere et suppose un effort — la denaturation de la verite n'est pas accidentelle.",
      axe2_voisins: "Le verset 2:41 appelle a croire en la revelation — le revetement de la verite en 2:42 est le contraire de la foi sincere. En 2:43, l'ordre d'etablir la priere et de donner la zakat est un appel a la transparence — les actes d'adoration ne tolerent pas le deguisement. En 2:44, commander le bien aux autres sans le pratiquer est une forme de revetement — l'apparence de piete couvre la realite de la desobeissance. En 2:42, la deuxieme partie du verset (wa taktumu al-haqqa wa antum ta'lamun) renforce le premier — cacher la verite est le complement du revetement. Les versets voisins construisent un catalogue des formes de denaturation de la verite.",
      axe3_sourate: "La sourate al-Baqarah fait du revetement de la verite par la faussete un theme qui revient dans les passages adresses aux gens du Livre. En 2:42, c'est l'interdiction explicite. En 2:75, ils deformaient la parole de Dieu apres l'avoir comprise — la deformation est un revetement. En 2:79, ils ecrivent le Livre de leurs mains puis disent ceci vient de Dieu — la fabrication est un revetement. En 2:146, ils reconnaissent le Prophete comme ils reconnaissent leurs enfants, mais une partie cache la verite — le revetement est delibere. En 2:159, ceux qui cachent ce que Nous avons fait descendre de preuves et de guidance apres que Nous l'avons explique aux hommes — le revetement est une trahison du mandat. La sourate denonce systematiquement le deguisement de la verite.",
      axe4_coherence: "Le Coran utilise la racine l-b-s dans plusieurs versets avec les deux sens de vetement et de confusion. En 6:9, Nous lui aurions donne l'apparence d'un homme et Nous aurions seme chez eux la confusion (labas) — la confusion est liee au revetement. En 6:82, ceux qui n'ont pas revetu leur foi d'injustice (lam yalbisu imanahum bi zulm) — la meme structure qu'en 2:42 revient avec iman et zulm. En 7:26, O enfants d'Adam Nous avons fait descendre sur vous un vetement (libas) qui couvre vos parties — le vetement est aussi protection. En 25:47, Il vous a fait de la nuit un vetement — le vetement est une couverture naturelle. Le Coran utilise la metaphore vestimentaire pour exprimer la couverture, la protection et la confusion.",
      axe5_frequence: "Pour la mission du khalifa, le revetement de la verite par la faussete est la corruption intellectuelle la plus dangereuse — le khalifa doit garantir la transparence. La racine l-b-s rappelle que la confusion entre vrai et faux est plus nuisible que le mensonge franc car elle detruit le discernement. En 2:42, l'interdiction est sans appel — le khalifa ne doit jamais permettre que la verite soit deguisee. En 6:82, la foi ne doit pas etre revetue d'injustice — le khalifa doit veiller a la purete de la foi dans la communaute. Le vetement dans le Coran est aussi positif (libas al-taqwa en 7:26) — le khalifa doit revetir la communaute du vetement de la taqwa et non de la confusion. Le khalifa doit combattre toute forme de propagande qui deguise la verite en la revetant d'apparences trompeuses.",
      proof_ctx: "La distinction entre Vetement/Revetement et Confusion/Melange reside dans la cause et l'effet. Le vetement est la cause — l'acte de couvrir. La confusion est l'effet — le resultat de ce revetement. Dans le contexte de 2:42, talbisu est l'acte de revetir la verite de faussete, et la confusion qui en resulte est la consequence. Le concept de vetement met l'accent sur l'action deliberee de celui qui deguise, tandis que la confusion met l'accent sur l'etat qui en resulte chez celui qui observe."
    }
  },

  // VWA 1406 [nem] v54 (2:47) — "Douceur/Aisance" (probable)
  // Context: Remember My favor I bestowed upon you, I preferred you over the worlds
  1406: {
    concept: "Douceur/Aisance",
    axes: {
      axe1_verset: "Dans le verset 2:47, le mot ni'mati derive de la racine n-e-m qui exprime la douceur, l'aisance et le bienfait. L'expression udhkuru ni'matiya allati an'amtu alaykum — rappelez-vous Mon bienfait que J'ai repandu sur vous — reprend l'appel du verset 2:40 pour insister. La racine n-e-m dans son sens de douceur evoque l'etat de bien-etre et d'aisance que Dieu a accorde aux enfants d'Israel par des bienfaits successifs. Le verset ajoute une precision absente du verset 2:40 : wa anni faddaltukum ala al-alamin — Je vous ai preferes sur les mondes. La douceur divine n'est pas generique — elle est une election specifique. Le champ lexical lie le bienfait (ni'ma) a la preference (tafdil) — l'aisance accordee aux Banu Isra'il est un privilege qui les distingue.",
      axe2_voisins: "Le verset 2:46 decrivait les humbles certains de rencontrer leur Seigneur — le verset 2:47 rappelle les raisons de cette certitude : le bienfait divin. En 2:48, l'avertissement sur le Jour ou aucune ame ne servira une autre est un contraste — la douceur presente sera suivie de la rigueur du jugement. En 2:49, le bienfait specifique est nomme : la delivrance de Pharaon — la douceur a ete precedee par la souffrance. En 2:50, la separation de la mer est un autre bienfait — la douceur divine se manifeste par des interventions miraculeuses. Les versets voisins montrent que la ni'ma n'est pas un etat permanent mais un don qui exige la gratitude et la vigilance.",
      axe3_sourate: "La sourate al-Baqarah mentionne la ni'ma a plusieurs reprises pour les enfants d'Israel. En 2:40, le premier appel au souvenir du bienfait. En 2:47, le meme appel repete avec l'ajout de la preference. En 2:122, un troisieme rappel identique — la sourate insiste. En 2:211, demande aux enfants d'Israel combien de signes clairs Nous leur avons donnes — les signes sont des bienfaits. La sourate fait du bienfait divin envers Israel un dossier accablant : plus les bienfaits s'accumulent, plus l'ingratitude est grave. La ni'ma dans la sourate est a la fois une grace et un argument de justice divine.",
      axe4_coherence: "Le Coran utilise la racine n-e-m dans des dizaines de versets pour rappeler les bienfaits divins. En 1:7, sirat alladhina an'amta alayhim — le chemin de ceux que Tu as gratifies. En 5:20, rappelez-vous le bienfait de Dieu sur vous quand Il a fait de vous des rois — la ni'ma est politique. En 14:34, si vous comptiez les bienfaits de Dieu vous ne pourriez les denombrer — la ni'ma est infinie. En 16:18, la meme affirmation est repetee — la gratitude doit etre permanente. En 93:11, quant au bienfait de ton Seigneur, proclame-le — la ni'ma exige la proclamation publique. Le Coran est coherent dans sa presentation de la ni'ma comme don surabondant appelant une gratitude active.",
      axe5_frequence: "Pour la mission du khalifa, la douceur et l'aisance sont des indicateurs de la faveur divine — le khalifa doit les redistribuer equitablement. La racine n-e-m rappelle que l'aisance n'est pas un droit acquis mais un don divin revocable. En 2:47, le rappel du bienfait est un appel a la responsabilite — la douceur recue doit etre reconnue et partagee. En 8:53, Dieu ne change pas un bienfait qu'Il a accorde tant que le peuple ne change pas — la ni'ma est conditionnelle. En 28:76, Qarun avait recu des tresors dont les clefs pesaient lourd — la ni'ma sans gratitude mene a la destruction. Le khalifa doit enseigner que l'aisance est un test et que la douceur divine a un prix : la gratitude permanente et le service.",
      proof_ctx: "La distinction entre Douceur/Aisance et Bienfait/Faveur reside dans le registre sensoriel. Le bienfait est un acte — un don accorde. La douceur est un etat — le bien-etre qui resulte du don. La racine n-e-m dans son sens premier evoque la douceur de vivre, le confort existentiel. Dans le contexte de 2:47, la ni'ma englobe tous les bienfaits mais dans leur dimension experiencielle — la douceur de la vie sous la protection divine. Le concept de douceur est plus large que le bienfait ponctuel car il inclut l'etat interieur de gratitude et de bien-etre."
    }
  },

  // VWA 1408 [elm] v54 (2:47) — "Savoir/Connaissance" (retenu, missing axes)
  // Context: I preferred you over the worlds (alamin)
  1408: {
    concept: "Savoir/Connaissance",
    axes: {
      axe1_verset: "Dans le verset 2:47, le mot al-alamin est employe dans l'expression faddaltukum ala al-alamin — Je vous ai preferes sur les mondes. La racine e-l-m dans son sens de savoir apparait ici sous la forme alamin qui designe les mondes — l'ensemble des creatures creees et connues. La relation entre savoir et mondes tient a ce que alam (monde) derive de la racine e-l-m car le monde est ce par quoi on connait le Createur — un signe qui rend le Createur connaissable. Le champ lexical du verset oppose la preference (tafdil) a l'ensemble des mondes — les enfants d'Israel ont ete distingues parmi tous les etres connus. La racine e-l-m dans ce verset evoque le savoir par lequel les mondes sont apprehendees et le savoir par lequel Israel a ete eleve au-dessus des autres.",
      axe2_voisins: "Le verset 2:46 mentionne la rencontre avec le Rabb — cette rencontre est l'objet ultime du savoir. En 2:47, la preference sur les mondes implique un savoir specifique accorde a Israel — la Torah, la prophetie, le discernement. En 2:48, l'avertissement sur le Jour du Jugement est un savoir eschatologique que les mondes recevront. En 2:49, la delivrance de Pharaon est un savoir historique par l'experience. En 2:44, le reproche de ne pas raisonner (afala ta'qilun) montre que le savoir doit s'accompagner de raison. Les versets voisins montrent que le savoir est le privilege qui justifie l'election et la responsabilite qui l'accompagne.",
      axe3_sourate: "La sourate al-Baqarah fait du savoir un theme structurant qui distingue les creatures. En 2:31, Dieu enseigne a Adam tous les noms — le savoir est le premier attribut du khalifa. En 2:32, les anges avouent ne savoir que ce que Dieu leur a enseigne — le savoir est hierarchise. En 2:33, Dieu connait le ghayb des cieux et de la terre — le savoir divin est absolu. En 2:151, le Messager enseigne le Livre et la sagesse et enseigne ce que vous ne saviez pas — le savoir est transmis par la prophetie. En 2:239, quand vous etes en securite invoquez Dieu comme Il vous a enseigne ce que vous ne saviez pas — le savoir est un bienfait. La sourate fait du savoir le critere de l'elevation et de la responsabilite.",
      axe4_coherence: "Le Coran utilise la racine e-l-m dans des centaines de versets, en faisant la racine la plus frequente du texte apres les particules. En 58:11, Dieu eleve ceux qui croient et ceux qui ont recu le savoir de degres — le savoir eleve. En 20:114, dis Rabbi augmente-moi en savoir — le savoir est un objet de priere. En 35:28, seuls les savants parmi Ses serviteurs craignent Dieu — le savoir mene a la crainte reverencielle. En 39:9, sont-ils egaux ceux qui savent et ceux qui ne savent pas — le savoir cree une inegalite qualitative. Le Coran est coherent dans sa presentation du savoir comme critere d'elevation, de responsabilite et de crainte divine.",
      axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil fondamental — le khalifa qui ne sait pas ne peut pas gouverner avec justice. La racine e-l-m rappelle que le monde (alam) lui-meme est un lieu de connaissance — chaque creature est un signe a lire. En 2:47, la preference sur les mondes est liee au savoir recu — le savoir est la raison de l'election. En 2:31, Adam est eleve par le savoir des noms — le khalifa est d'abord un savant. En 96:4-5, Dieu a enseigne par le calame, Il a enseigne a l'homme ce qu'il ne savait pas — l'enseignement est la methode divine. Le khalifa doit faire du savoir la priorite de sa gestion car une civilisation ignorante est une civilisation perdue.",
      proof_ctx: "La distinction entre Savoir/Connaissance et Monde/Creation pour la racine e-l-m reside dans la direction du rapport. Le monde est l'objet connu — ce qui est la pour etre observe et compris. Le savoir est la capacite du sujet — ce qui permet de comprendre et de juger. Dans le contexte de 2:47, al-alamin designe les mondes mais le concept retenu Savoir/Connaissance met l'accent sur ce qui fonde l'election d'Israel : le savoir recu, pas simplement l'existence des mondes. L'axe secondaire de savoir enrichit la lecture en rappelant que la preference divine est fondee sur la transmission du savoir."
    }
  },

  // VWA 1410 [ywm] v55 (2:48) — "Événement/Moment marquant" (probable)
  // Context: Guard against a day when no soul avails another
  1410: {
    concept: "Événement/Moment marquant",
    axes: {
      axe1_verset: "Dans le verset 2:48, le mot yawman est employe dans l'expression ittaqu yawman la tajzi nafsun an nafsin shay'an — premunissez-vous d'un jour ou aucune ame ne suffira pour une autre en rien. La racine y-w-m dans son sens d'evenement marquant designe le Jour du Jugement comme le moment decisif de l'histoire. Le champ lexical du verset oppose la protection (ittaqu) a l'impossibilite de l'intercession — ce jour est un evenement sans precedent ou toutes les relations humaines sont suspendues. La racine y-w-m dans son sens d'evenement met l'accent sur le caractere unique et irreversible de cette journee. Le verset enumere quatre impossibilites : aucune ame ne suffira pour une autre, aucune intercession ne sera acceptee, aucune compensation ne sera prise, aucune aide ne sera donnee. Chaque impossibilite renforce le caractere evenementiel absolu de ce jour.",
      axe2_voisins: "Le verset 2:47 rappelle la preference divine sur les mondes — la preference ne protege pas du jugement. En 2:48, le Jour du Jugement egalise tous les privileges — la preference passee ne dispense pas de la reddition des comptes. En 2:49, le recit de la delivrance de Pharaon est un evenement historique qui prefigure l'evenement eschatologique. En 2:46, la certitude de rencontrer le Seigneur est la preparation a cet evenement. Les versets voisins construisent un arc : preference (2:47), jugement (2:48), delivrance historique (2:49) — le passe et l'avenir convergent vers le moment decisif.",
      axe3_sourate: "La sourate al-Baqarah mentionne le Jour du Jugement a de nombreuses reprises comme horizon de toute action humaine. En 2:8, les hypocrites pretendent croire en Dieu et au Jour Dernier — le Jour est un critere de foi. En 2:62, ceux qui croient en Dieu et au Jour Dernier et agissent bien n'ont rien a craindre — le Jour est le cadre de la retribution. En 2:123, premunissez-vous d'un jour — la meme formule qu'en 2:48 est repetee. En 2:177, la piete est de croire au Jour Dernier — le Jour est un article de foi. En 2:254, depensez avant que ne vienne un jour ou il n'y aura ni commerce ni amitie ni intercession — le Jour est l'urgence. La sourate fait du Jour du Jugement l'horizon qui donne sens a chaque commandement.",
      axe4_coherence: "Le Coran utilise la racine y-w-m dans des centaines de versets, designant a la fois le jour ordinaire et le Jour eschatologique. En 82:17-19, qu'est-ce qui te fait savoir ce qu'est le jour de la retribution, le jour ou aucune ame ne possede rien pour une autre ame — la meme description qu'en 2:48. En 70:8-9, le jour ou le ciel sera comme du metal fondu et les montagnes comme de la laine — l'evenement est cosmique. En 99:1-2, quand la terre sera secouee de son seisme — le Jour est un tremblement universe. En 101:1-3, la fracassante, qu'est-ce que la fracassante — le Jour est nomme par ses effets. Le Coran est coherent dans sa presentation du Jour comme un evenement sans equivalent dans l'histoire cosmique.",
      axe5_frequence: "Pour la mission du khalifa, le Jour du Jugement est l'horizon de responsabilite — chaque decision du khalifa sera evaluee ce jour-la. La racine y-w-m dans son sens d'evenement marquant rappelle que l'histoire n'est pas cyclique mais orientee vers un denouement. En 2:48, l'impossibilite de l'intercession montre que le khalifa sera juge individuellement — le pouvoir collectif ne protege pas au Jour du Jugement. En 39:69, la terre brillera de la lumiere de son Seigneur, le Livre sera depose et les prophetes et les temoins seront amenes — le khalifa sera un temoin ou un accuse. Le khalifa doit gouverner avec la conscience que chaque acte sera evalue lors de cet evenement final.",
      proof_ctx: "La distinction entre Evenement/Moment marquant et Temps/Periode reside dans l'aspect ponctuel vs. duratif. Le temps est une duree qui s'ecoule — un processus continu. L'evenement est un point de rupture — un moment qui change tout. Dans le contexte de 2:48, yawm designe un evenement specifique et unique — le Jour du Jugement — pas une periode temporelle. Le concept d'evenement marquant capture le caractere decisif et irreversible de ce jour, tandis que le concept de temps designerait simplement une unite temporelle."
    }
  },

  // VWA 1421 [rbb] v56 (2:49) — "Croissance/Augmentation" (probable)
  // Context: We saved you from Pharaoh's people, worst punishment, great trial from your Lord
  1421: {
    concept: "Croissance/Augmentation",
    axes: {
      axe1_verset: "Dans le verset 2:49, le mot rabbikum est employe dans l'expression wa fi dhalikum bala'un min rabbikum azim — en cela il y a une epreuve immense de votre Seigneur. La racine r-b-b dans son sens de croissance evoque le fait que l'epreuve de Pharaon etait aussi un moyen de faire croitre les enfants d'Israel — la souffrance les a fortifies. Le champ lexical du verset associe le sauvetage (najjaynakum) a l'epreuve (bala') et au Seigneur (Rabb) — le Rabb fait croitre par l'epreuve autant que par le bienfait. La racine r-b-b ici rappelle que le Rabb est Celui qui fait grandir Ses creatures, y compris par les epreuves. Le verset lie le chatiment (su'a al-adhab) a l'epreuve (bala') — ce qui etait un chatiment pour Pharaon etait une croissance pour Israel.",
      axe2_voisins: "Le verset 2:48 annoncait le Jour du Jugement — le verset 2:49 commence l'enumeration des bienfaits/epreuves historiques. En 2:50, la separation de la mer est une autre epreuve de croissance — traverser la mer exigeait la foi. En 2:47, la preference sur les mondes est le resultat de cette croissance par l'epreuve. En 2:46, les humbles sont certains de rencontrer leur Rabb — cette certitude est le fruit de la croissance par l'epreuve. Les versets voisins montrent que la croissance d'Israel a ete un processus douloureux mais oriente par le Rabb vers l'elevation.",
      axe3_sourate: "La sourate al-Baqarah fait du Rabb comme agent de croissance un theme qui traverse le recit d'Israel. En 2:21, adorez votre Rabb qui vous a crees — le Rabb cree et fait croitre. En 2:124, le Rabb d'Ibrahim l'eprouve par des paroles — l'epreuve est un instrument de croissance. En 2:131, Ibrahim se soumet au Rabb des mondes — la soumission est une croissance. En 2:286, notre Rabb ne nous charge pas au-dela de notre capacite — le Rabb calibre la croissance. La sourate montre que le Rabb fait croitre chaque creature et chaque peuple selon un plan adapte a sa capacite.",
      axe4_coherence: "Le Coran utilise la racine r-b-b dans des centaines de versets pour designer le Seigneur comme maitre de la croissance. En 6:164, dis chercherais-je un autre Rabb que Dieu — le Rabb est unique et Sa methode de croissance est exclusive. En 7:54, votre Rabb est Dieu qui a cree les cieux et la terre en six jours — la creation est le premier acte de croissance. En 13:11, Dieu ne change pas l'etat d'un peuple tant que celui-ci ne change pas ce qui est en lui-meme — la croissance exige un effort humain. En 96:1, lis au nom de ton Rabb qui a cree — la lecture est un instrument de croissance. Le Coran est coherent dans sa presentation du Rabb comme celui qui orchestre la croissance de toute la creation.",
      axe5_frequence: "Pour la mission du khalifa, la croissance par l'epreuve est un principe fondamental — le khalifa doit comprendre que les difficultes sont des occasions de croissance. La racine r-b-b rappelle que le Rabb ne fait pas souffrir pour punir mais pour faire grandir. En 2:49, l'epreuve de Pharaon a forge un peuple — le khalifa doit voir dans les crises des moments de croissance collective. En 21:35, Nous vous eprouvons par le mal et le bien comme tentation — l'epreuve est bidirectionnelle. En 67:2, Celui qui a cree la mort et la vie pour vous eprouver lequel de vous est le meilleur en oeuvres — la vie entiere est une epreuve de croissance. Le khalifa doit accompagner la communaute dans les epreuves en leur montrant que chaque difficulte est une occasion de croitre sous la direction du Rabb.",
      proof_ctx: "La distinction entre Croissance/Augmentation et Seigneurie/Autorite bienveillante pour la racine r-b-b dans le contexte de 2:49 reside dans la dynamique de l'epreuve. La seigneurie est le statut d'autorite du Rabb. La croissance est le processus que le Rabb orchestre par l'epreuve. Dans ce verset, le bala' (epreuve) venant du Rabb est un instrument de croissance — la souffrance sous Pharaon a fait croitre Israel et l'a prepare a recevoir la Torah. Le concept de croissance met l'accent sur la transformation des eprouves."
    }
  }
};


// ============================================================
// FIX 3: sense_chosen corrections
// ============================================================
const senseCorrections = {
  1373: { from: "écriture révélée", to: "écrire" },           // Écriture/Inscription → closest match
  1374: { from: "raisonner", to: "comprendre" },              // Raison/Intelligence → closest
  1377: { from: "prière", to: "prière rituelle" },            // Prière/Invocation → closest
  1378: { from: "lourd", to: "être grand" },                  // Grandeur/Importance → closest
  1384: { from: "se mettre en securite", to: "se sentir en sécurité" }, // Sécurité/Confiance
  1387: { from: "etre", to: "être (verbe incomplet)" },       // Être/Existence
  1388: { from: "premier", to: "aboutissement" },             // Retour/Origine → closest
  1389: { from: "recouvrir", to: "cacher" },                  // Couverture/Dissimulation → closest
  1393: { from: "peu", to: "être peu" },                      // Quantité/Rareté
  1395: { from: "revetir", to: "confondre" },                 // Confusion/Mélange → closest
  1400: { from: "etablir", to: "se lever" },                  // Verticalité/Droiture → closest
  1403: { from: "purification", to: "purifier" },             // Purification/Croissance
  1407: { from: "distinguer", to: "être supérieur" },         // Excellence/Faveur → closest
  1411: { from: "suffire", to: "rétribuer" },                 // Rétribution/Justice
  1420: { from: "épreuve", to: "éprouver" },                  // Épreuve/Test
};


async function fix() {
  let ok = 0, err = 0, skip = 0;
  const verseIds = [48,49,50,51,52,53,54,55,56,57]; // 2:41 to 2:50

  console.log('=== LOADING DATA ===');

  // Load VWAs
  const { data: vwas, error: vwaErr } = await db.from('verse_word_analyses')
    .select('id, word_key, verse_id, sense_chosen, analysis_axes, position')
    .in('verse_id', verseIds)
    .order('id');
  if (vwaErr) { console.error('Failed to load VWAs:', vwaErr.message); return; }
  console.log(`Loaded ${vwas.length} VWAs for verse_ids ${verseIds.join(',')}`);

  // Load verse_analyses (segments)
  const { data: verses, error: vaErr } = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .in('verse_id', verseIds);
  if (vaErr) { console.error('Failed to load verse_analyses:', vaErr.message); return; }
  console.log(`Loaded ${verses.length} verse_analyses`);

  // Build segment map: verse_id:word_key -> sense_retenu
  const segMap = {};
  for (const v of verses) {
    for (const seg of (v.segments || [])) {
      if (seg.word_key && seg.sense_retenu) {
        const key = v.verse_id + ':' + seg.word_key;
        if (!segMap[key]) segMap[key] = seg.sense_retenu;
      }
    }
  }
  console.log(`Built segMap with ${Object.keys(segMap).length} entries`);

  // Load word_analyses + word_meanings for concept lookup
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db.from('word_analyses').select('id, word_key').in('word_key', wordKeys);
  const waMap = {};
  for (const wa of (was || [])) waMap[wa.word_key] = wa;
  const waIds = (was || []).map(w => w.id);
  const { data: wms } = await db.from('word_meanings').select('analysis_id, concept, sense, status').in('analysis_id', waIds);

  // Build concept map: word_key -> { conceptName -> [senses] }
  const conceptMap = {};
  for (const wm of (wms || [])) {
    const wa = (was || []).find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!conceptMap[wa.word_key]) conceptMap[wa.word_key] = {};
    if (!conceptMap[wa.word_key][wm.concept]) conceptMap[wa.word_key][wm.concept] = [];
    conceptMap[wa.word_key][wm.concept].push(wm.sense);
  }

  // ============================================================
  // FIX 1: sense_chosen missing in analysis_axes (60 VWAs)
  // ============================================================
  console.log('\n=== FIX 1: sense_chosen manquant dans analysis_axes ===');
  let fix1count = 0;

  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax) { console.log(`  SKIP VWA ${vwa.id} (${vwa.word_key}) — no analysis_axes`); skip++; continue; }

    // Check if sense_chosen already present
    if (ax.sense_chosen) continue;

    let newSense = null;

    // Strategy 1: Use top-level sense_chosen column
    if (vwa.sense_chosen) {
      newSense = vwa.sense_chosen;
    }

    // Strategy 2: Look at segments from parent verse_analyses
    if (!newSense) {
      const segKey = vwa.verse_id + ':' + vwa.word_key;
      if (segMap[segKey]) {
        newSense = segMap[segKey];
      }
    }

    // Strategy 3: If no segment match, use concept_chosen to find first sense
    if (!newSense && ax.concept_chosen && ax.concepts) {
      const retainedConcept = ax.concepts[ax.concept_chosen];
      if (retainedConcept && retainedConcept.senses && retainedConcept.senses.length > 0) {
        newSense = retainedConcept.senses[0];
      }
    }

    // Strategy 4: Look in conceptMap for the retained concept
    if (!newSense && ax.concept_chosen && conceptMap[vwa.word_key]) {
      const concepts = conceptMap[vwa.word_key];
      if (concepts[ax.concept_chosen] && concepts[ax.concept_chosen].length > 0) {
        newSense = concepts[ax.concept_chosen][0];
      }
    }

    if (newSense) {
      ax.sense_chosen = newSense;
      const updates = { analysis_axes: ax };
      // Also update top-level sense_chosen if null
      if (!vwa.sense_chosen) {
        updates.sense_chosen = newSense;
      }
      const { error: e } = await db.from('verse_word_analyses').update(updates).eq('id', vwa.id);
      if (e) {
        console.log(`  ERR VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id}: ${e.message}`);
        err++;
      } else {
        console.log(`  OK VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id} → sense_chosen="${newSense}"`);
        ok++;
        fix1count++;
      }
    } else {
      console.log(`  WARN VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id} — no sense found`);
      skip++;
    }
  }
  console.log(`FIX 1 complete: ${fix1count} VWAs updated`);

  // ============================================================
  // FIX 2: Missing axes for 12 VWAs with retenu/probable concepts
  // ============================================================
  console.log('\n=== FIX 2: Axes manquants pour concepts probables/retenus ===');
  let fix2count = 0;

  for (const [key, axData] of Object.entries(axesData)) {
    // Handle the special "1382b" case
    const vwaId = axData.vwaId || parseInt(key);

    // Fetch current VWA
    const { data: vwa, error: fetchErr } = await db.from('verse_word_analyses')
      .select('id, word_key, verse_id, analysis_axes')
      .eq('id', vwaId)
      .single();

    if (fetchErr || !vwa) {
      console.log(`  ERR VWA ${vwaId}: not found — ${fetchErr?.message || 'null'}`);
      err++;
      continue;
    }

    const ax = vwa.analysis_axes || {};

    // Merge axes into analysis_axes
    const conceptName = axData.concept;
    const newAxes = axData.axes;

    // If the concept exists in ax.concepts, add axes there
    if (ax.concepts && ax.concepts[conceptName]) {
      for (const [axeKey, axeVal] of Object.entries(newAxes)) {
        if (!ax.concepts[conceptName][axeKey] || ax.concepts[conceptName][axeKey].length < 50) {
          ax.concepts[conceptName][axeKey] = axeVal;
        }
      }
    } else {
      // Create concept entry with axes
      if (!ax.concepts) ax.concepts = {};
      ax.concepts[conceptName] = { ...newAxes };
    }

    const { error: e } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', vwaId);
    if (e) {
      console.log(`  ERR VWA ${vwaId} [${vwa.word_key}] v${vwa.verse_id}: ${e.message}`);
      err++;
    } else {
      console.log(`  OK VWA ${vwaId} [${vwa.word_key}] v${vwa.verse_id} — added ${Object.keys(newAxes).length} axes for "${conceptName}"`);
      ok++;
      fix2count++;
    }
  }
  console.log(`FIX 2 complete: ${fix2count} VWAs updated`);

  // ============================================================
  // FIX 3: sense_chosen vs word_meanings validation
  // ============================================================
  console.log('\n=== FIX 3: Correction sense_chosen vs word_meanings ===');
  let fix3count = 0;

  for (const [vwaIdStr, correction] of Object.entries(senseCorrections)) {
    const vwaId = parseInt(vwaIdStr);

    const { data: vwa, error: fetchErr } = await db.from('verse_word_analyses')
      .select('id, word_key, verse_id, sense_chosen, analysis_axes')
      .eq('id', vwaId)
      .single();

    if (fetchErr || !vwa) {
      console.log(`  ERR VWA ${vwaId}: not found`);
      err++;
      continue;
    }

    const ax = vwa.analysis_axes || {};
    const updates = {};

    // Update top-level sense_chosen
    if (vwa.sense_chosen === correction.from) {
      updates.sense_chosen = correction.to;
    }

    // Update sense_chosen in analysis_axes
    if (ax.sense_chosen === correction.from || !ax.sense_chosen) {
      ax.sense_chosen = correction.to;
      updates.analysis_axes = ax;
    }

    if (Object.keys(updates).length > 0) {
      const { error: e } = await db.from('verse_word_analyses').update(updates).eq('id', vwaId);
      if (e) {
        console.log(`  ERR VWA ${vwaId} [${vwa.word_key}] v${vwa.verse_id}: ${e.message}`);
        err++;
      } else {
        console.log(`  OK VWA ${vwaId} [${vwa.word_key}] v${vwa.verse_id} — "${correction.from}" → "${correction.to}"`);
        ok++;
        fix3count++;
      }
    } else {
      console.log(`  SKIP VWA ${vwaId} [${vwa.word_key}] — no change needed`);
      skip++;
    }
  }
  console.log(`FIX 3 complete: ${fix3count} VWAs updated`);

  // ============================================================
  // VERIFICATION
  // ============================================================
  console.log('\n=== VERIFICATION ===');

  // Re-fetch all VWAs to verify
  const { data: vwasCheck } = await db.from('verse_word_analyses')
    .select('id, word_key, verse_id, sense_chosen, analysis_axes')
    .in('verse_id', verseIds)
    .order('id');

  let missingSense = 0, missingAxesSense = 0, senseIssues = 0;
  for (const vwa of vwasCheck) {
    if (!vwa.analysis_axes?.sense_chosen) {
      missingAxesSense++;
      console.log(`  STILL MISSING sense_chosen in axes: VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id}`);
    }
    if (!vwa.sense_chosen) {
      missingSense++;
      console.log(`  STILL MISSING top-level sense_chosen: VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id}`);
    }

    // Re-validate sense_chosen against word_meanings
    const sc = vwa.sense_chosen;
    const cc = vwa.analysis_axes?.concept_chosen;
    if (sc && cc && conceptMap[vwa.word_key]?.[cc]) {
      const senses = conceptMap[vwa.word_key][cc];
      const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const match = senses.some(s => norm(s) === norm(sc));
      if (!match) {
        senseIssues++;
        console.log(`  SENSE MISMATCH: VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id} — "${sc}" NOT IN [${senses.join(', ')}]`);
      }
    }
  }

  // Check axes presence for VWAs that needed them
  const axesVwaIds = [1373, 1375, 1382, 1384, 1389, 1391, 1395, 1406, 1408, 1410, 1421];
  for (const vwaId of axesVwaIds) {
    const v = vwasCheck.find(x => x.id === vwaId);
    if (v && v.analysis_axes?.concepts) {
      const conceptKeys = Object.keys(v.analysis_axes.concepts);
      const probableWithAxes = conceptKeys.filter(ck => {
        const c = v.analysis_axes.concepts[ck];
        return (c.status === 'probable' || c.status === 'retenu') && c.axe1_verset && c.axe1_verset.length > 50;
      });
      const probableWithoutAxes = conceptKeys.filter(ck => {
        const c = v.analysis_axes.concepts[ck];
        return (c.status === 'probable' || c.status === 'retenu') && (!c.axe1_verset || c.axe1_verset.length < 50);
      });
      console.log(`  VWA ${vwaId}: ${probableWithAxes.length} concepts with axes, ${probableWithoutAxes.length} still missing`);
      if (probableWithoutAxes.length > 0) {
        console.log(`    Missing: ${probableWithoutAxes.join(', ')}`);
      }
    } else {
      console.log(`  VWA ${vwaId}: no concepts found`);
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`VWAs still missing sense_chosen in axes: ${missingAxesSense}`);
  console.log(`VWAs still missing top-level sense_chosen: ${missingSense}`);
  console.log(`Sense validation issues remaining: ${senseIssues}`);
  console.log(`Total: ${ok} fixes applied, ${err} errors, ${skip} skipped`);
  console.log(`  FIX 1 (sense_chosen in axes): ${fix1count}`);
  console.log(`  FIX 2 (missing axes): ${fix2count}`);
  console.log(`  FIX 3 (sense corrections): ${fix3count}`);
}

fix().catch(console.error);
