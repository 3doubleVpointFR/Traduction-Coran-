const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 152
// verse_id=159, analysis_id=517
// "Mentionnez-Moi donc, Je vous mentionnerai.
//  Soyez reconnaissants envers Moi et ne Me niez pas."
// =====================================================

const verseData = {
  152: {
    verse_id: 159,
    analysis_id: 517,
    translation_arab: "Mentionnez-Moi donc, Je vous mentionnerai. Soyez reconnaissants envers Moi et ne Me niez pas.",
    full_translation: "Rappelez-vous de Moi, Je me rappellerai de vous. Et remerciez-Moi et ne soyez pas ingrats envers Moi.",
    translation_explanation: `§DEMARCHE§
Le verset est un commandement divin direct aux croyants, structure en deux paires symetriques. La premiere paire est une reciprocite : mentionnez-Moi / Je vous mentionnerai. La seconde paire est un ordre et une interdiction : soyez reconnaissants / ne niez pas. Le verbe **udhkuruni** est un imperatif 2MP de la racine dh-k-r avec pronom suffixe 1S (ni). Le Lane's donne : mentionner, rappeler, se souvenir, evoquer. L'imperatif marque un ordre direct — Dieu ordonne aux croyants de Le mentionner. Le pronom suffixe « ni » (Moi) fait de Dieu l'objet du rappel. Le verbe **adhkurkum** est un inaccompli 1S de la racine dh-k-r avec pronom suffixe 2MP (kum). Le Lane's donne le meme champ : mentionner, rappeler. L'inaccompli marque ici une promesse continue — si vous Me mentionnez, Je vous mentionnerai (en permanence). Le passage de l'imperatif 2MP a l'inaccompli 1S cree une reciprocite : l'action humaine (mentionner Dieu) declenche la reponse divine (mentionner les croyants). Le verbe **ushkuru** est un imperatif 2MP de la racine sh-k-r. Le Lane's donne : remercier, etre reconnaissant, louer pour un bienfait. L'imperatif ordonne la gratitude envers Dieu. La preposition **li** (envers Moi) indique la direction de la reconnaissance — elle est adressee a Dieu. Le verbe **takfurun** est un inaccompli 2MP de la racine k-f-r avec la negation « la » (ne... pas). Le Lane's donne : couvrir, nier, etre ingrat, rejeter un bienfait. L'inaccompli avec la negation (la takfurun) est un ordre negatif — ne niez pas. La racine k-f-r est l'antonyme exact de sh-k-r : la gratitude reconnait le bienfait, le kufr le couvre et le nie. Le verset construit donc deux paires d'opposes : mentionner/etre mentionne et remercier/ne pas nier. La structure est concentrique : dhikr → dhikr → shukr → kufr.

§JUSTIFICATION§
**mentionnez** — Le sens retenu est « mentionner ». Le verbe udhkuruni porte le sens de rappeler et de mentionner. « Mentionnez-Moi » est retenu car le contexte est un ordre de rappel actif — faire mention de Dieu par la parole, la pensee et l'acte. L'alternative « se souvenir » est ecartee car le souvenir est passif et interieur, alors que le dhikr coranique est un acte actif et exteriorise.

**mentionnerai** — Le sens retenu est « mentionner ». Le verbe adhkurkum est la reponse divine au dhikr humain. Dieu mentionne les croyants — Il les evoque, les rappelle, les eleve. Le meme mot est utilise pour les deux parties (Dieu et les croyants), ce qui cree une parfaite reciprocite.

**soyez reconnaissants** — Le sens retenu est « remercier ». Le verbe ushkuru ordonne la gratitude. « Soyez reconnaissants » est retenu car le shukr est un etat permanent de reconnaissance, pas un acte ponctuel. L'alternative « louer » est ecartee car la louange est un acte vocal, tandis que la reconnaissance est un etat global (coeur, langue et acte).

**niez** — Le sens retenu est « nier ». Le verbe takfurun avec la negation la ordonne de ne pas nier les bienfaits de Dieu. « Nier » est retenu car il est l'antonyme exact de « reconnaitre » — la reconnaissance (shukr) affirme le bienfait, le deni (kufr) le couvre. L'alternative « etre ingrat » est ecartee car « ingrat » est un adjectif qualifiant une personne, tandis que « nier » est un acte precis que l'on peut eviter.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah donne « Souvenez-vous de Moi, Je Me souviendrai de vous ». Notre traduction prefere « mentionnez » a « souvenez-vous » car le dhikr coranique n'est pas un simple souvenir interieur — c'est un acte actif de mention, de rappel et d'evocation. La difference est importante : le souvenir est passif, la mention est active. Pour la seconde partie, Hamidullah donne « ne soyez pas ingrats envers Moi » — notre « ne Me niez pas » est plus proche du sens premier de k-f-r qui est couvrir/nier, alors que « ingrat » est deja une interpretation morale.`,
    segments: [
      { fr: "mentionnez-Moi", pos: "verbe", phon: "udhkuruni", arabic: "\u0641\u064e\u0671\u0630\u0652\u0643\u064f\u0631\u064f\u0648\u0646\u0650\u0649", word_key: "dhkr", is_particle: false, sense_retenu: "mentionner", position: 1 },
      { fr: "Je vous mentionnerai", pos: "verbe", phon: "adhkurkum", arabic: "\u0623\u064e\u0630\u0652\u0643\u064f\u0631\u0652\u0643\u064f\u0645\u0652", word_key: "dhkr", is_particle: false, sense_retenu: "mentionner", position: 2 },
      { fr: "soyez reconnaissants", pos: "verbe", phon: "ushkuru", arabic: "\u0648\u064e\u0671\u0634\u0652\u0643\u064f\u0631\u064f\u0648\u0627\u06df", word_key: "shkr", is_particle: false, sense_retenu: "remercier", position: 3 },
      { fr: "envers Moi", phon: "li", arabic: "\u0644\u0650\u0649", is_particle: true, position: 4 },
      { fr: "ne niez pas", pos: "verbe", phon: "takfurun", arabic: "\u0648\u064e\u0644\u064e\u0627 \u062a\u064e\u0643\u0652\u0641\u064f\u0631\u064f\u0648\u0646\u0650", word_key: "kfr", is_particle: false, sense_retenu: "nier", position: 5 }
    ],
    words: [
      // dhkr pos=1 — udhkuruni (imperatif 2MP + pronom 1S)
      {
        word_key: "dhkr", position: 1, sense_chosen: "mentionner",
        analysis_axes: {
          sense_chosen: "mentionner",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "mémoire"],
              proof_ctx: "Le verbe udhkuruni est un imperatif 2MP de la racine dh-k-r avec pronom suffixe 1S. Le Lane's donne : se souvenir, rappeler, mentionner, evoquer par la langue ou le coeur. Le dhikr est un acte qui ramene a la conscience ce qui etait absent — c'est un mouvement de l'esprit vers l'objet du rappel. Ici l'objet est Dieu Lui-meme (pronom ni). L'imperatif marque un ordre divin direct aux croyants. Le dhikr de Dieu est considere comme la nourriture du coeur — sans lui le coeur meurt spirituellement. La distinction avec le sens de « male » (nul) est evidente : le contexte est le rappel de Dieu, pas la masculinite.",
              axe1_verset: "Le verbe udhkuruni ouvre le verset avec un imperatif divin — c'est le premier ordre du verset, celui qui conditionne tout le reste. Le champ lexical du verset est structure en deux paires : dhikr/dhikr et shukr/kufr. La premiere paire est une reciprocite parfaite — mentionnez-Moi, Je vous mentionnerai. Le meme mot (dh-k-r) est utilise pour les deux parties, ce qui montre que le dhikr est un echange bidirectionnel entre Dieu et les croyants. Le verset place le dhikr comme condition prealable a la gratitude : d'abord mentionner Dieu, ensuite etre reconnaissant.",
              axe2_voisins: "Le verset 151 rappelait l'envoi d'un messager qui recite les signes, purifie et enseigne le Livre et la sagesse. Le verset 152 enchaine avec l'ordre de mentionner Dieu — apres avoir recu l'enseignement du messager, la reponse attendue est le dhikr. Le verset 153 demandera de chercher aide dans la patience et la priere. La sequence est : enseignement → mention de Dieu → patience et priere. Le dhikr est le premier pas de la reponse humaine aux bienfaits divins.",
              axe3_sourate: "La racine dh-k-r apparait de maniere structurante dans la sourate al-Baqarah. En 2:40, « rappelez-vous Mon bienfait ». En 2:47, « rappelez-vous que Je vous ai preferes ». En 2:63, « rappelez-vous ce qui est dans le Livre ». Le verset 152 est le sommet de cette serie de rappels — apres avoir rappele les bienfaits specifiques (Livre, messager, guidance), Dieu demande maintenant un dhikr reciproque et permanent. C'est le passage du rappel historique au rappel existentiel.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. Le dhikr est un theme central — en 33:41, « mentionnez Dieu d'une mention abondante ». En 13:28, « c'est par le dhikr de Dieu que les coeurs s'apaisent ». Le schema « mentionnez-Moi, Je vous mentionnerai » de 2:152 est unique dans le Coran — il etablit une reciprocite explicite entre le dhikr humain et le dhikr divin. Dieu ne se contente pas de recevoir le dhikr, Il le rend.",
              axe5_frequence: "Pour la mission du khalifa, le dhikr est l'acte fondamental de la mission. Le khalifa est sur terre pour mentionner Dieu — par la parole, la pensee et l'acte. L'oubli de Dieu est l'echec de la mission. Le verset 152 promet que ce dhikr n'est pas a sens unique — Dieu mentionne en retour celui qui Le mentionne. Le khalifa qui remplit sa mission de dhikr est eleve par la mention divine."
            },
            "Masculin": {
              status: "nul",
              senses: ["mâle"],
              proof_ctx: "Le sens de male est un usage physique de dh-k-r — l'etre de sexe masculin. Le contexte est le rappel et la mention de Dieu, pas la masculinite."
            }
          }
        }
      },
      // dhkr pos=2 — adhkurkum (inaccompli 1S + pronom 2MP)
      {
        word_key: "dhkr", position: 2, sense_chosen: "mentionner",
        analysis_axes: {
          sense_chosen: "mentionner",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "mémoire"],
              proof_ctx: "Le verbe adhkurkum est un inaccompli 1S de la racine dh-k-r avec pronom suffixe 2MP. Le Lane's donne : se souvenir, rappeler, mentionner, evoquer. L'inaccompli marque ici une promesse divine continue — la mention divine des croyants n'est pas ponctuelle mais permanente. Le pronom suffixe « kum » (vous) fait des croyants l'objet de la mention divine. Dieu mentionne Ses serviteurs — Il les evoque, les rappelle, les eleve aupres de Ses anges. Le passage de l'imperatif humain (udhkuruni) a l'inaccompli divin (adhkurkum) montre que la mention divine est une reponse garantie et continue.",
              axe1_verset: "Le verbe adhkurkum est la reponse divine a l'ordre donne en debut de verset. La structure est parfaitement symetrique : vous → Moi / Je → vous. Le meme mot-racine est utilise pour les deux actions, ce qui montre que le dhikr de Dieu envers les croyants est de meme nature que le dhikr des croyants envers Dieu. Le champ lexical du verset oppose ensuite le shukr (reconnaissance) au kufr (deni) — la paire dhikr/dhikr est completee par la paire shukr/anti-kufr. Le verset forme un carre semantique parfait.",
              axe2_voisins: "Le verset 151 decrivait les bienfaits concrets du messager (recitation, purification, enseignement). Le verset 152 repond a ces bienfaits par la promesse divine de reciprocite. Le verset 153 demandera patience et priere face aux epreuves. La mention divine (adhkurkum) est le pont entre les bienfaits recus (v.151) et les epreuves a venir (v.153) — Dieu mentionne ceux qui Le mentionnent, meme dans l'epreuve.",
              axe3_sourate: "Dans la sourate al-Baqarah, Dieu rappelle frequemment Ses bienfaits aux croyants. En 2:40 et 2:47, Il demande « rappelez-vous Mon bienfait ». En 2:152, Il va plus loin — Il ne demande plus seulement le rappel des bienfaits mais la mention de Sa personne, et promet de mentionner en retour. C'est une elevation du rapport : du rappel historique des bienfaits a la relation personnelle de mention reciproque.",
              axe4_coherence: "Le dhikr divin envers les croyants est un theme majeur du Coran. En 7:205, « mentionnez votre Seigneur en vous-memes ». En 29:45, « le dhikr de Dieu est plus grand ». Le verset 2:152 est le seul qui explicite la reciprocite — « mentionnez-Moi, Je vous mentionnerai ». Les autres versets ordonnent le dhikr sans promettre explicitement le retour. Ce verset est donc un sommet de la theologie du dhikr.",
              axe5_frequence: "Pour la mission du khalifa, la promesse divine de mention est la plus haute recompense de la mission. Le khalifa qui mentionne Dieu est mentionne par Dieu — aupres des anges, dans l'assemblee celeste. Le hadith rapporte que « Dieu dit : s'il Me mentionne en lui-meme, Je le mentionne en Moi-meme ; s'il Me mentionne dans une assemblee, Je le mentionne dans une assemblee meilleure ». La mention divine est le salaire du dhikr."
            },
            "Masculin": {
              status: "nul",
              senses: ["mâle"],
              proof_ctx: "Le sens de male est hors sujet — le contexte est la mention divine des croyants, pas la masculinite."
            }
          }
        }
      },
      // shkr pos=3 — ushkuru (imperatif 2MP)
      {
        word_key: "shkr", position: 3, sense_chosen: "remercier",
        analysis_axes: {
          sense_chosen: "remercier",
          concept_chosen: "Gratitude/Reconnaissance",
          concepts: {
            "Gratitude/Reconnaissance": {
              status: "retenu",
              senses: ["remercier", "être reconnaissant", "louer (pour un bienfait)"],
              proof_ctx: "Le verbe ushkuru est un imperatif 2MP de la racine sh-k-r. Le Lane's donne : remercier, etre reconnaissant, louer pour un bienfait recu. Le shukr est la reponse juste au bienfait — c'est un acte qui sort de celui qui recoit et atteint celui qui a donne. Le shukr est a la fois interieur (reconnaissance du coeur) et exterieur (expression par la langue et l'acte). L'imperatif ordonne la gratitude comme un devoir. La preposition li (envers Moi) dirige la gratitude vers Dieu — c'est Lui qui est l'auteur des bienfaits et c'est vers Lui que la reconnaissance doit se diriger.",
              axe1_verset: "Le verbe ushkuru est le troisieme ordre du verset, apres les deux dhikr. La structure du verset place la gratitude apres la mention — d'abord mentionner Dieu, ensuite Lui etre reconnaissant. Le champ lexical oppose shukr (gratitude) a kufr (deni) dans la meme phrase. La paire shukr/kufr est l'exacte antithese : la gratitude reconnait le bienfait, le kufr le couvre et le nie. Le verset montre que la gratitude et le deni sont les deux seules reponses possibles aux bienfaits de Dieu — il n'y a pas de position neutre.",
              axe2_voisins: "Le verset 151 enumerait les bienfaits concrets du messager (recitation, purification, enseignement du Livre et de la sagesse, enseignement de ce qu'ils ne savaient pas). Le verset 152 demande la gratitude pour ces bienfaits. Le verset 153 demandera la patience — la gratitude precede la patience car il faut d'abord reconnaitre les bienfaits recus avant de supporter les epreuves. La gratitude est le socle sur lequel la patience se construit.",
              axe3_sourate: "La racine sh-k-r est presente dans la sourate al-Baqarah a des moments clefs. En 2:52, « peut-etre serez-vous reconnaissants » apres le pardon du veau d'or. En 2:56, meme formule apres la resurrection. En 2:152, Dieu ordonne directement la gratitude — le passage du souhait (peut-etre serez-vous reconnaissants) a l'ordre (soyez reconnaissants) marque une montee en intensite dans la demande divine.",
              axe4_coherence: "La racine sh-k-r apparait environ 75 fois dans le Coran. En 14:7, « si vous etes reconnaissants, J'augmenterai [Mes bienfaits] ». En 31:12, « sois reconnaissant envers Dieu ». Le Coran lie systematiquement la gratitude a l'augmentation des bienfaits et l'ingratitude a leur perte. Le verset 2:152 place shukr et kufr comme les deux voies exclusives — il n'y a pas de troisieme option.",
              axe5_frequence: "Pour la mission du khalifa, la gratitude est le carburant de la mission. Le khalifa qui reconnait les bienfaits de Dieu est motive pour poursuivre sa mission. L'ingratitude est la mort de la mission — celui qui ne reconnait pas les dons recus n'a aucune raison de servir. La gratitude ouvre la porte a davantage de bienfaits, selon la promesse de 14:7."
            },
            "Rétribution": {
              status: "probable",
              senses: ["récompenser"],
              proof_ctx: "Le sens de recompenser est un usage ou Dieu est le sujet — Dieu recompense ceux qui sont reconnaissants. Ici le sujet de ushkuru est les croyants (imperatif 2MP), pas Dieu. Les croyants ne recompensent pas Dieu, ils Le remercient. Le sens de retribution est valide pour la racine sh-k-r quand Dieu est le sujet (Dieu est shakir/shakur — Il recompense), mais le contexte impose ici le sens humain de gratitude.",
              axe1_verset: "Le sens de retribution est secondaire dans ce verset car le sujet est les croyants, pas Dieu. Cependant, la structure du verset (mentionnez-Moi / Je vous mentionnerai) montre que Dieu retribue le dhikr par le dhikr. De meme, la gratitude des croyants pourrait etre retribuee par Dieu — le Coran dit ailleurs que Dieu est « Shakur » (Celui qui retribue la gratitude). Le sens de retribution est implicite dans la promesse globale du verset.",
              axe2_voisins: "Le verset 151 decrivait les bienfaits du messager. La gratitude en v.152 est la reponse a ces bienfaits. La retribution divine est implicite — Dieu retribue la gratitude par davantage de bienfaits, comme le confirme 14:7.",
              axe3_sourate: "En 2:158, Dieu est qualifie de « Shakir » (Celui qui retribue la gratitude) et « Alim » (Savant). La proximite de ce qualificatif avec le verset 152 montre que la retribution divine est bien un theme du passage.",
              axe4_coherence: "En 76:22, Dieu dit que l'effort des croyants est « mashkuran » (retribue). En 4:147, « Dieu est Shakiran Aliman ». Le Coran affirme que Dieu retribue la gratitude — le sens de retribution est permanent dans la racine sh-k-r quand Dieu est le sujet.",
              axe5_frequence: "Pour la mission du khalifa, la retribution divine est la garantie que la mission n'est pas vaine. Le khalifa qui sert avec gratitude sait que Dieu retribue chaque effort. Le « Shakur » divin est la certitude que rien n'est perdu."
            }
          }
        }
      },
      // kfr pos=5 — takfurun (inaccompli 2MP avec negation)
      {
        word_key: "kfr", position: 5, sense_chosen: "nier",
        analysis_axes: {
          sense_chosen: "nier",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe takfurun est un inaccompli 2MP de la racine k-f-r avec la negation la. Le Lane's donne comme sens premier : couvrir, cacher, dissimuler. Le sens physique de couverture est le fondement etymologique de la racine — le kafir est etymologiquement celui qui couvre. La nuit qui couvre le jour, la terre qui couvre la graine, le cultivateur qui couvre la semence. Ici le contexte est moral et spirituel — « ne niez pas » les bienfaits de Dieu. Le sens de couverture est sous-jacent : nier un bienfait c'est le couvrir, le cacher, faire comme s'il n'existait pas. La distinction avec le sens retenu (nier/ingratitude) est que la couverture est le mecanisme physique, le deni est l'acte moral.",
              axe1_verset: "Le sens de couverture est le substrat etymologique de l'interdiction « la takfurun ». Le verset oppose shukr (decouvrir le bienfait par la reconnaissance) et kufr (couvrir le bienfait par le deni). La gratitude met le bienfait en lumiere, le kufr le recouvre d'ombre. Cette opposition est structurelle dans le verset.",
              axe2_voisins: "Le verset 151 enumerait les bienfaits du messager — des bienfaits visibles et concrets. Le verset 152 interdit de couvrir ces bienfaits. L'interdiction « ne couvrez pas » suit logiquement l'enumeration des bienfaits : apres les avoir recus ouvertement, ne les cachez pas.",
              axe3_sourate: "La racine k-f-r est omnipresente dans la sourate al-Baqarah. En 2:6, « ceux qui couvrent — avertis ou non, ils ne croient pas ». En 2:26, « quant aux dissimulateurs, ils disent ». Le sens de couverture est le fil conducteur de la sourate pour decrire l'attitude de rejet.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens physique de couverture est atteste en 57:20 (« comme une pluie dont la vegetation rejouit les cultivateurs (kuffar) »). Le cultivateur couvre la graine de terre. Ce sens premier eclaire tous les usages moraux de la racine.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'antithese de la mission. Le khalifa est charge de decouvrir la verite, pas de la couvrir. Couvrir les bienfaits de Dieu c'est trahir la mission de temoignage."
            },
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le verbe takfurun dans le contexte de ce verset porte le sens de nier les bienfaits de Dieu et d'etre ingrat envers Lui. Le Lane's donne : nier, etre ingrat envers un bienfaiteur, rejeter ce qui a ete donne. Le kufr est l'acte de refuser de reconnaitre un bienfait recu — c'est l'oppose exact du shukr. Le verset oppose directement ushkuru (soyez reconnaissants) a la takfurun (ne niez pas), ce qui montre que le kufr ici est d'abord l'ingratitude, le refus de reconnaitre les bienfaits. La negation (la) transforme l'inaccompli en interdiction — Dieu interdit le kufr comme acte de deni des bienfaits.",
              axe1_verset: "Le verbe takfurun cloture le verset en interdisant le deni. La structure du verset est claire : deux ordres positifs (mentionnez, soyez reconnaissants) et un ordre negatif (ne niez pas). Le kufr est place en dernier comme la frontiere a ne pas franchir. L'opposition shukr/kufr dans la meme phrase est la cle du verset — la gratitude et l'ingratitude sont les deux seules voies. Le champ lexical (mentionner, etre reconnaissant, nier) montre que le verset couvre tout le spectre de la relation croyant-Dieu : le rappel, la gratitude et le refus.",
              axe2_voisins: "Le verset 151 decrivait les bienfaits du messager — recitation, purification, enseignement. Le verset 152 interdit de nier ces bienfaits. Le verset 153 demandera patience et priere face aux epreuves — l'interdiction du kufr en v.152 prepare le terrain : meme dans l'epreuve (v.153), le croyant ne doit pas nier les bienfaits anterieurs. La sequence est : bienfaits → gratitude/interdiction du deni → epreuve avec patience.",
              axe3_sourate: "La racine k-f-r est la racine la plus polemique de la sourate al-Baqarah. En 2:6, elle definit ceux qui rejettent. En 2:28, elle interroge : « comment pouvez-vous nier Dieu ? ». En 2:89, le kufr est dirige contre la revelation. En 2:152, le kufr est reduit a son noyau le plus fondamental : l'ingratitude envers Dieu. La sourate montre que le kufr n'est pas d'abord une position theologique mais une attitude morale — le refus de reconnaitre les bienfaits recus.",
              axe4_coherence: "La paire shukr/kufr est un refrain coranique. En 76:3, « soit reconnaissant, soit ingrat ». En 14:7, « si vous etes reconnaissants, J'augmenterai ; si vous etes ingrats, Mon chatiment est severe ». Le Coran presente shukr et kufr comme les deux seules reponses aux bienfaits — il n'y a pas de position neutre. Le verset 2:152 s'inscrit dans cette dichotomie universelle.",
              axe5_frequence: "Pour la mission du khalifa, le kufr est l'echec total de la mission. Le khalifa est place sur terre pour reconnaitre et servir — le deni est l'exact oppose de sa vocation. L'interdiction « la takfurun » est un rappel que la mission n'admet pas l'ingratitude. Le khalifa qui nie les bienfaits de Dieu se coupe de la source meme de sa mission."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les péchés"],
              proof_ctx: "Le sens d'expiation est un usage specifique de k-f-r — couvrir une faute par une reparation. Le contexte est l'interdiction de nier les bienfaits de Dieu, pas l'expiation des peches."
            },
            "Sens isolé/Cultivateur": {
              status: "nul",
              senses: ["cultivateur"],
              proof_ctx: "Le sens de cultivateur est un usage physique de k-f-r — celui qui couvre la graine de terre. Le contexte est moral et spirituel, pas agricole."
            },
            "Sens isolé/Goudron": {
              status: "nul",
              senses: ["goudron"],
              proof_ctx: "Le sens de goudron est un usage materiel rare de k-f-r. Le contexte est l'interdiction du deni, pas une matiere physique."
            },
            "Sens isolé/Village": {
              status: "nul",
              senses: ["village"],
              proof_ctx: "Le sens de village est un usage geographique rare de k-f-r. Le contexte est l'interdiction du deni des bienfaits."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// INSERT verse_word_analyses + UPDATE verse_analyses
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

  const verseIds = [159];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 152 ===\n');
  await processVerse(152);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V152 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
