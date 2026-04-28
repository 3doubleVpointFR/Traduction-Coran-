const { createClient } = require('@supabase/supabase-js');
const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const updates = [
  {
    id: 890, // wyl, verse 4
    analysis_axes: {
      sense_chosen: "malheur",
      concept_chosen: "Malédiction/Désastre",
      concepts: {
        "Malédiction/Désastre": {
          senses: ["malheur", "détresse", "damnation"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Malédiction/Désastre ». Le mot wayl est un nom indéfini suivi de li (pour) et al-musallin (les priants). Wayl = un malheur POUR les priants. Le texte ne précise pas la nature exacte — il dit juste que c'est un wayl, quelque chose de terrible. L'indétermination renforce la gravité. La particule fa (donc/alors) lie cet avertissement aux versets précédents — c'est la conséquence logique du déni.",
          axe1_verset: "Le mot wayl ouvre le verset 4 avec la particule fa (alors/donc) qui lie directement aux versets précédents. Le champ lexical bascule de la description à l'avertissement — après avoir montré ce que fait celui qui dément (v1-3), le texte prononce un verdict. Le wayl est suivi de li-l-musallin (pour les priants), ce qui crée une surprise : on s'attendrait à ce que le malheur vise les démenteurs, mais il vise les priants. Le wayl est indéfini (waylun, pas al-wayl), ce qui souligne qu'il s'agit d'un malheur non spécifié et donc plus menaçant. Le mot est bref et percutant — un seul mot qui contient tout un avertissement. Cette surprise ouvre le deuxième volet de la sourate.",
          axe2_voisins: "Les versets 1-3 décrivent le déni et ses manifestations concrètes. Le verset 4 change brusquement de ton — il passe de la description à l'avertissement, de la troisième personne aux priants. Ce changement est le pivot de la sourate : elle ne parle plus seulement des incroyants mais aussi des croyants défaillants. Les versets 5-7 vont préciser quels priants sont visés — ceux qui sont distraits, qui font de l'ostentation, et qui refusent l'aide. Le wayl est la charnière entre les deux parties de la sourate, entre le déni ouvert et le déni caché.",
          axe3_sourate: "Le wayl est le tournant architectural de la sourate — elle passe de « voici ce que fait celui qui dément ouvertement » à « malheur à ceux qui prient sans y être présents ». Le thème s'élargit : même les priants sont concernés par le déni s'ils prient sans sincérité. La sourate dit : le déni le plus dangereux n'est pas celui qui est ouvert (v1-3) mais celui qui se cache derrière la prière (v4-7). Le wayl marque cette révélation — le pire n'est pas de ne pas croire, c'est de prétendre croire sans agir en conséquence. Le malheur annoncé n'est pas pour la prière mais pour la prière vide.",
          axe4_coherence: "Le Coran utilise wayl dans d'autres versets comme avertissement sévère — sourate 83:1 (wayl li-l-mutaffifin = malheur aux fraudeurs), sourate 104:1 (wayl li-kulli humazatin = malheur à tout calomniateur). C'est toujours une formule d'avertissement grave qui annonce des conséquences terribles. La construction wayl li est identique dans toutes ces sourates. Le wayl est aussi mentionné comme un lieu en Enfer dans certains commentaires. La cohérence est parfaite : partout dans le Coran, wayl li introduit un reproche majeur.",
          axe5_frequence: "L'avertissement rappelle que les actes formels (la prière) ne suffisent pas sans sincérité — la mission humaine exige la cohérence entre l'intérieur et l'extérieur. Le wayl vise ceux qui séparent la forme du fond. La corruption la plus dangereuse est celle qui se cache derrière les apparences de piété — elle est invisible et donc impossible à corriger. La mission de justice ne se mesure pas aux gestes rituels mais aux actes concrets envers les faibles. Le wayl est l'avertissement que Dieu voit au-delà des apparences."
        }
      }
    }
  },
  {
    id: 891, // slw, verse 4
    analysis_axes: {
      sense_chosen: "les priants",
      concept_chosen: "Prière/Invocation",
      concepts: {
        "Prière/Invocation": {
          senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Prière/Invocation ». Au verset 4, al-musallin est un participe actif pluriel défini — « les priants », ceux qui sont connus pour prier. Le participe actif dit que la prière est leur activité identitaire. Mais le wayl les vise quand même — le verset 5 résout la tension : ce ne sont pas tous les priants mais ceux qui sont distraits. Distinction avec « Proximité/Attachement » : la proximité est un lien entre deux parties, la prière est un acte dirigé vers Dieu.",
          axe1_verset: "Au verset 4, al-musallin est le complément de wayl li (malheur à) — malheur aux priants. Le champ lexical bascule vers le registre rituel — après les actes sociaux (orphelin, pauvre), la sourate aborde les actes de dévotion. Le participe actif dit que ces personnes sont des priants par identité, pas par occasion. Le fait que le malheur vise des PRIANTS est délibérément choquant — on s'attendait à ce qu'il vise les incroyants. Cette surprise ouvre le deuxième volet de la sourate. Le mot al-musallin inclut tous ceux qui prient — le texte ne distingue pas encore quels priants sont visés.",
          axe2_voisins: "Le verset 5 précise immédiatement quels priants sont visés : ceux qui sont distraits DE leur prière (an salatihim). Le verset 6 ajoute l'ostentation. Le verset 7 conclut par le refus d'aider. Les trois versets forment un portrait progressif du priant défaillant : d'abord absent intérieurement (v5), puis orienté vers les spectateurs (v6), et enfin incapable de solidarité concrète (v7). Le malheur ne vise pas la prière en soi mais la prière qui coexiste avec ces défauts. La suite des versets qualifie et restreint les priants visés.",
          axe3_sourate: "La sourate oppose le vrai engagement (aider l'orphelin, nourrir le pauvre) à l'apparence religieuse (prier sans être présent, faire étalage, refuser l'aide). La prière est le symbole central de cette opposition — l'acte le plus visible de la piété et donc le plus facile à simuler. Celui qui prie sans y être présent reproduit le même déni que celui qui dément la rétribution — les actes sont déconnectés de la conviction. La prière dans la sourate 107 n'est pas condamnée en soi mais comme symptôme : quand la prière ne produit pas de justice sociale, c'est qu'elle est vide.",
          axe4_coherence: "Le Coran dit dans la sourate 29:45 que la prière empêche la turpitude et le mal. La sourate 107 montre le cas inverse : quand la prière ne remplit pas cette fonction. Le Coran dit aussi dans la sourate 23:1-2 que sont bienheureux les croyants concentrés dans leur prière. La sourate 107 décrit l'exact opposé : ceux qui sont distraits DE leur prière. La cohérence est parfaite — le Coran valorise la présence dans la prière et condamne l'absence. La sourate 4:142 dénonce les mêmes défauts chez les hypocrites.",
          axe5_frequence: "La prière sans présence et sans conséquence sur le comportement est une corruption qui sabote la mission humaine de justice. Celui qui prie sans être présent se donne l'illusion de remplir son devoir sans en remplir la substance. La mission exige la cohérence — les actes de dévotion doivent produire de la justice, pas de l'apparence. La prière qui ne transforme pas le comportement est un rituel vide. Le verset dit : le minimum n'est pas de prier mais de prier avec présence — et cette présence se vérifie dans les actes sociaux."
        },
        "Proximité/Attachement": {
          senses: ["suivre de près"],
          status: "nul",
          proof_ctx: "Le verset parle de prière rituelle. Le mot al-musallin est un participe actif de la forme II de s-l-w, qui dans le Coran désigne systématiquement la prière. La construction wayl li-l-musallin ne fonctionne pas avec « proximité ». Hors sujet."
        },
        "Lieu/Géographie": {
          senses: ["milieu"],
          status: "nul",
          proof_ctx: "Le mot al-musallin est un participe actif pluriel (des personnes), pas un nom de lieu. Hors sujet."
        },
        "Corps/Anatomie": {
          senses: ["deuxième dans une course"],
          status: "nul",
          proof_ctx: "Sens très spécifique sans rapport avec le contexte. Hors sujet."
        }
      }
    }
  },
  {
    id: 892, // slw, verse 5
    analysis_axes: {
      sense_chosen: "de leur prière",
      concept_chosen: "Prière/Invocation",
      concepts: {
        "Prière/Invocation": {
          senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Prière/Invocation ». Au verset 5, salatihim est un nom en idafa avec pronom possessif (salat = prière, him = leur) — leur prière. La préposition an (de/loin de) est cruciale — elle crée une distance entre le priant et sa prière : ils sont distraits DE leur prière, pas DANS leur prière. Le test grammatical : un nom en idafa peut-il désigner la prière rattachée aux priants ? Oui — salatihim est « leur prière ».",
          axe1_verset: "Au verset 5, salatihim est précédé de la préposition an (de/loin de) et suivi de sahun (distraits). La construction an salatihim sahun dit littéralement « de leur prière distraits ». Le champ lexical est celui de l'écart entre le geste et la présence — le corps fait la prière mais l'esprit est ailleurs. La préposition an est déterminante : le Coran aurait pu dire fi salatihim (dans leur prière) pour une simple inattention, mais il dit an salatihim (de leur prière) pour marquer un éloignement structurel. Ce n'est pas un moment de distraction mais un état permanent de déconnexion. Le mot salatihim est bref — la prière est nommée une seule fois mais l'éloignement est marqué par la préposition.",
          axe2_voisins: "Le verset 4 annonce le malheur pour les priants, le verset 5 précise la raison : la distraction structurelle. Le verset 6 ajoute l'ostentation. Les trois défauts forment une progression : absence intérieure (v5), fausse orientation (v6), absence de résultat concret (v7). La prière est le fil conducteur de ce portrait — elle est vide à l'intérieur et fausse à l'extérieur. Le verset 5 identifie le premier problème : ces priants ne sont pas présents à ce qu'ils font. C'est la racine dont les versets 6-7 sont les conséquences.",
          axe3_sourate: "La prière au verset 5 est l'exact opposé de ce qu'elle devrait être. Les versets 1-3 montrent ce que produit le déni de la rétribution (injustice sociale). Les versets 4-7 montrent que même la prière peut être un signe de ce déni si elle est vide. La prière est censée empêcher l'injustice (sourate 29:45), mais quand elle est faite avec distraction, elle ne remplit pas cette fonction. La sourate lie la prière vide au même déni que l'injustice sociale. La prière du verset 5 est le miroir du déni du verset 1.",
          axe4_coherence: "Le Coran distingue la bonne prière (sourate 23:2 — fi salatihim khashiun = concentrés DANS leur prière, avec fi) de la mauvaise prière (sourate 107:5 — an salatihim sahun = distraits DE leur prière, avec an). La différence de préposition est significative : fi = présence intérieure, an = éloignement. Le Coran valorise systématiquement la présence dans la prière et condamne l'absence. La sourate 4:142 dénonce les mêmes défauts chez les hypocrites. La cohérence est directe entre toutes ces sourates.",
          axe5_frequence: "La prière vide est une corruption intérieure qui sape la mission humaine en séparant la forme du fond. Celui qui prie sans être présent se ment à lui-même — il fait les gestes sans y mettre le sens. La mission de justice exige la cohérence entre les actes intérieurs et extérieurs. Une prière qui ne transforme pas le comportement est un rituel vide qui n'empêche ni la turpitude ni le mal. Le verset rappelle que la qualité de la prière se mesure à la présence intérieure, pas à la fréquence du geste."
        },
        "Proximité/Attachement": {
          senses: ["suivre de près"],
          status: "nul",
          proof_ctx: "Le contexte est la prière rituelle — salatihim (leur prière) précédé de an et suivi de sahun. La proximité n'a pas de sens ici. Hors sujet."
        },
        "Lieu/Géographie": {
          senses: ["milieu"],
          status: "nul",
          proof_ctx: "Le mot salatihim est un nom avec pronom possessif, pas un nom de lieu. Hors sujet."
        },
        "Corps/Anatomie": {
          senses: ["deuxième dans une course"],
          status: "nul",
          proof_ctx: "Sans rapport avec le contexte. Hors sujet."
        }
      }
    }
  },
  {
    id: 893, // shw2, verse 5
    analysis_axes: {
      sense_chosen: "distraits",
      concept_chosen: "Distraction/Négligence",
      concepts: {
        "Distraction/Négligence": {
          senses: ["être distrait", "négliger", "oublier", "être inattentif"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Distraction/Négligence ». Le mot sahun est un participe actif pluriel — les distraits, ceux qui sont dans cet état de façon permanente. La distraction est leur identité, pas un moment passager. Ils sont distraits DE leur prière (an salatihim) — la préposition an indique l'éloignement. Le texte ne dit pas « dans » (fi) mais « de » (an) — ils sont structurellement à distance de leur propre acte.",
          axe1_verset: "Le mot sahun qualifie les priants du verset 4 — il dit ce qui ne va pas chez eux. Le champ lexical est celui de l'absence intérieure — le corps prie mais l'esprit est ailleurs, déconnecté de l'acte. La préposition an (de/loin de) est cruciale : être distrait DE sa prière signifie que la prière n'est pas une priorité, qu'on la fait par habitude. Le participe actif sahun dit que cet état est permanent et identitaire — c'est un trait de caractère, pas un accident. Le mot sahun est bref et percutant — un seul mot qui décrit tout un état intérieur de vide. La distraction est l'exact opposé de la concentration (khushu) valorisée dans la sourate 23.",
          axe2_voisins: "Le verset 4 avertit les priants, le verset 5 précise le premier défaut : la distraction structurelle. Le verset 6 ajoute l'ostentation. Les trois défauts forment une progression : absence intérieure (v5), fausse orientation vers les gens (v6), absence de résultat concret (v7). La distraction est le premier maillon de cette chaîne causale — c'est PARCE qu'ils sont absents de leur prière qu'ils la font pour les autres (ostentation) et qu'elle ne produit rien de concret (pas d'aide). Le verset 5 est la racine du problème.",
          axe3_sourate: "La distraction dans la prière est le pendant spirituel de l'indifférence sociale (v2-3). La même personne qui ignore le pauvre est distraite dans sa prière — cohérence entre l'intérieur vide et l'extérieur indifférent. La sourate montre que l'insensibilité sociale et l'absence spirituelle ont la même racine : le déni de la rétribution (v1). Celui qui ne croit pas aux conséquences n'a aucune raison d'être présent ni dans ses actes sociaux ni dans sa dévotion. La distraction est le symptôme intérieur du même mal que l'injustice est le symptôme extérieur.",
          axe4_coherence: "Le Coran valorise la présence dans la prière dans la sourate 23:2 (fi salatihim khashiun). La sourate 107 décrit l'exact opposé — an salatihim sahun. Le contraste est renforcé par le changement de préposition : fi pour la concentration, an pour la distraction. Le Coran dit aussi dans la sourate 4:142 que les hypocrites ne se souviennent de Dieu que peu. La cohérence est directe : la distraction dans la prière est un signe d'hypocrisie partout dans le Coran.",
          axe5_frequence: "La distraction dans les actes importants est une corruption intérieure qui sape la mission humaine de justice. La mission exige la présence — être là vraiment, pas seulement physiquement. Celui qui est distrait dans sa prière sera distrait dans ses devoirs envers les autres. La qualité de la présence intérieure se mesure partout : dans la prière (v5), dans la relation aux autres (v2-3, v7). La mission de civilisation repose sur la capacité à être présent à ce qu'on fait — la distraction est l'ennemi de cette présence."
        }
      }
    }
  },
  {
    id: 894, // ray, verse 6
    analysis_axes: {
      sense_chosen: "font étalage",
      concept_chosen: "Vision/Perception",
      concepts: {
        "Vision/Perception": {
          senses: ["voir", "percevoir"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Vision/Perception » avec le sens causatif de la forme III : yura'un = ils font voir, ils montrent. Le verbe yura'un est à la forme III inaccompli — « ils font voir aux gens ». C'est le riya' — l'ostentation. La racine r-'-y (voir) prend ici le sens de « faire voir ». Distinction avec « Jugement/Avis » : l'ostentation n'a rien à voir avec la formation d'un avis. Distinction avec « Apparition » : ils « font voir activement », ils ne sont pas passivement « apparus ».",
          axe1_verset: "Le verbe yura'un décrit le deuxième défaut des priants après la distraction — ils font étalage de leurs actes. Le champ lexical est celui de l'apparence sans substance. La forme III de la racine r-'-y ajoute la direction vers l'autre : ce n'est pas simplement voir ni être vu, c'est FAIRE VOIR intentionnellement. L'inaccompli dit que c'est un comportement habituel et identitaire. Le texte ne précise pas ce qu'ils montrent — l'indétermination élargit le reproche. La racine r-'-y revient ici pour la deuxième fois dans la sourate (après v1 : ara'ayta) mais avec un sens inversé : au v1 on invite à VOIR la réalité, au v6 ils FONT VOIR une fausse réalité.",
          axe2_voisins: "Après la distraction (v5), l'ostentation (v6). Les deux sont liés : celui qui n'est pas présent dans sa prière la fait nécessairement pour les autres et pas pour Dieu. Le verset 7 va conclure par le refus d'aider. Les trois défauts forment un portrait cohérent — absence intérieure, orientation vers les spectateurs, absence de résultat concret. L'ostentation est la charnière : elle explique pourquoi ils prient malgré leur distraction (pour être vus) et pourquoi ils ne produisent pas de bien (parce que la motivation est l'apparence, pas le bien réel).",
          axe3_sourate: "L'ostentation est le troisième défaut dans la progression après le déni (v1), l'indifférence (v2-3), la distraction (v5). La sourate montre une gradation dans la fausseté : d'abord le déni ouvert, puis la prière vide, puis la prière ostentatoire. L'ostentation est la forme la plus raffinée de la corruption — elle donne l'apparence de la piété en étant son exact contraire. La sourate passe du visible (repousser l'orphelin) à l'invisible (l'intention derrière la prière). Le riya' est le symétrique du déni : l'un refuse la réalité, l'autre fabrique une fausse réalité.",
          axe4_coherence: "Le Coran dénonce l'ostentation dans la sourate 4:142 (yura'un an-nas) avec exactement la même racine et forme verbale. Le Coran dit aussi dans la sourate 2:264 que l'aumône faite par ostentation est annulée. Le reproche est cohérent partout : faire les choses pour être vu des gens au lieu de Dieu annule la valeur de l'acte. La sourate 107 confirme cette logique en plaçant l'ostentation entre la distraction et le refus d'aider. La cohérence est directe et sans ambiguïté.",
          axe5_frequence: "L'ostentation corrompt les actes en les détournant de leur but — faire le bien pour être vu vide l'acte de sa substance et le transforme en spectacle. La mission humaine exige la sincérité — agir pour le bien réel, pas pour l'image. L'ostentation est doublement nuisible : elle ne produit pas de bien réel et elle donne l'illusion que le bien est fait. La mission de civilisation est sabotée par ceux qui font semblant d'agir justement — ils occupent l'espace du bien sans le remplir. Le verset montre que la sincérité intérieure est indispensable."
        },
        "Jugement/Avis": {
          senses: ["opinion"],
          status: "nul",
          proof_ctx: "Le verset décrit l'acte de faire voir (forme III causative), pas la formation d'une opinion. Le contexte est clairement l'ostentation. Hors sujet."
        },
        "Apparition": {
          senses: ["apparaître"],
          status: "nul",
          proof_ctx: "Le verbe est à la forme III (faire voir), pas au passif. Ce sont eux qui font voir aux autres, ils ne sont pas passivement en train d'apparaître. Hors sujet."
        }
      }
    }
  },
  {
    id: 895, // mne, verse 7
    analysis_axes: {
      sense_chosen: "refusent",
      concept_chosen: "Empêchement/Interdiction",
      concepts: {
        "Empêchement/Interdiction": {
          senses: ["empêcher", "interdire", "refuser"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Empêchement/Interdiction ». Le verbe yamnaaun est à l'inaccompli pluriel (action habituelle) — « ils refusent habituellement ». Le complément est al-maaun (l'aide élémentaire). Ils bloquent ce qui devrait passer du fort vers le faible. L'empêchement est directionnel — il se dresse entre ce qui est donné et celui qui devrait le recevoir. Distinction avec « Protection/Défense » : la protection empêche le mal d'atteindre quelqu'un (positif), le refus empêche le bien d'atteindre quelqu'un (négatif).",
          axe1_verset: "Le verbe yamnaaun est suivi de al-maaun — ils refusent l'aide élémentaire. Le champ lexical est celui du blocage et de la rétention — ils retiennent ce qui devrait être donné. L'inaccompli dit que c'est un comportement permanent et caractéristique. Le verbe est précédé de wa (et) qui l'ajoute comme troisième défaut après la distraction (v5) et l'ostentation (v6). Le refus de l'aide conclut le portrait des priants défaillants — non seulement ils prient sans y être présents et pour être vus, mais en plus ils refusent même l'aide la plus basique. C'est le dernier et le plus concret des défauts.",
          axe2_voisins: "Le verset 7 conclut la sourate par le refus ultime — même l'aide la plus basique est bloquée. Après le déni (v1), la maltraitance (v2), l'indifférence (v3), la prière vide (v4-5), l'ostentation (v6), le refus d'aider (v7) est le point final. La sourate progresse du plus abstrait (démentir la rétribution) au plus concret (refuser un objet du quotidien). Le refus de l'aide élémentaire est le test final — si même le minimum n'est pas donné, tout le portrait est complet. Les versets 2-3 et le verset 7 encadrent les versets 4-6 — la structure entoure la fausse piété par les preuves concrètes.",
          axe3_sourate: "Le refus de l'aide élémentaire est le dernier signe et le plus concret. La sourate se termine sur l'acte le plus simple : donner l'aide de base — et ils ne le font même pas. Le maaun donne son nom à la sourate entière, ce qui montre son importance symbolique. Le refus de l'aide est le résumé de tout : celui qui dément la rétribution (v1), repousse l'orphelin (v2), ignore le pauvre (v3), prie sans y être (v4-5), fait étalage (v6), et refuse même l'aide la plus basique (v7). La sourate se ferme sur le niveau le plus bas de l'humanité.",
          axe4_coherence: "Le Coran dénonce ceux qui empêchent le bien dans la sourate 68:12 (mannaa li-l-khayr) et dans d'autres versets. Le refus d'aider est un reproche récurrent — sourate 3:180 (ceux qui amassent ce que Dieu leur a donné ne doivent pas croire que c'est un bien pour eux). Le verbe manaa est utilisé pour le blocage du partage. La cohérence est directe : le Coran condamne systématiquement ceux qui bloquent le flux du bien entre les êtres humains. La sourate 107 clôt sur ce reproche.",
          axe5_frequence: "Refuser l'aide élémentaire est la forme la plus basse de l'injustice — même le minimum n'est pas donné, même ce qui ne coûte presque rien est retenu. La mission humaine commence par ne pas bloquer ce qui est dû aux autres — le flux naturel du partage. Celui qui retient l'aide élémentaire se place en obstacle entre les êtres humains, il rompt le lien de solidarité qui est la base de toute civilisation. Le verset fait du refus d'aider le test le plus simple de la mission humaine — si même cela n'est pas fait, rien n'est fait. La corruption commence par le blocage du minimum."
        },
        "Protection/Défense": {
          senses: ["protéger"],
          status: "nul",
          proof_ctx: "Le verset parle d'empêcher l'aide d'atteindre les autres, pas de protéger quelqu'un. Le complément est al-maaun (l'aide élémentaire) — ce qui est refusé est un bien, pas un mal. La protection empêche le mal, ici on empêche le bien. Hors sujet."
        }
      }
    }
  },
  {
    id: 896, // men, verse 7
    analysis_axes: {
      sense_chosen: "l'aide élémentaire",
      concept_chosen: "Source/Jaillissement",
      concepts: {
        "Source/Jaillissement": {
          senses: ["eau jaillissante", "source", "courant"],
          status: "retenu",
          proof_ctx: "Le sens retenu est « Source/Jaillissement ». Le mot al-maaun est un nom défini — l'aide élémentaire, ce qui coule facilement et qu'on ne devrait pas retenir. La racine m-'-n signifie couler, jaillir. Le maaun est ce qui devrait couler naturellement d'une personne vers une autre — l'aide basique, les petits objets du quotidien qu'on prête sans y penser. Le texte ne précise pas quels objets — il dit « le maaun », l'aide qui coule.",
          axe1_verset: "Le mot al-maaun est le complément de yamnaaun (ils refusent) — ils refusent l'aide élémentaire. Le champ lexical est celui de l'aide basique refusée — le minimum qu'on devrait laisser couler vers les autres sans même y réfléchir. Le nom est défini avec al-, ce qui en fait une réalité universelle. La racine m-'-n (couler, jaillir) éclaire le mot : le maaun est ce qui devrait couler naturellement, sans effort, sans calcul, comme l'eau coule d'une source. Retenir le maaun c'est bloquer un flux naturel — aller contre la nature même du partage humain. Le mot donne son nom à la sourate entière, ce qui montre sa centralité symbolique.",
          axe2_voisins: "Le maaun conclut la sourate — c'est le test final et le plus simple. Après tous les défauts listés (déni, maltraitance, indifférence, prière vide, ostentation), le dernier est le plus concret et le plus basique : refuser l'aide élémentaire. La progression va du plus abstrait au plus concret. Le maaun est le point le plus bas de l'échelle — si même cela est refusé, tout le portrait est complet. Le choix de terminer sur le maaun est stratégique : il rend le message accessible à tous, car tout le monde connaît l'expérience de demander un petit objet et de se le voir refuser.",
          axe3_sourate: "Le maaun donne son nom à la sourate — c'est le symbole de tout ce qui est dénoncé. Celui qui dément la rétribution (v1) finit par refuser même l'aide la plus basique (v7). La sourate trace la ligne entre le déni philosophique et le refus matériel. Le maaun représente le test minimum de l'humanité : donner ce qui ne coûte presque rien. Si tu ne passes même pas ce test, tout le reste est confirmé — ta prière est vide, ton ostentation est pathétique. Le maaun est le mot le plus important de la sourate car il ramène tout au concret le plus basique.",
          axe4_coherence: "Le Coran valorise le don et le partage — l'aumône, la sadaqa, le partage de la nourriture. Le maaun est le niveau le plus bas du partage — ce qui ne coûte presque rien et qu'on ne devrait même pas hésiter à donner. Le refuser est le signe le plus clair d'un cœur fermé. Le Coran dit dans la sourate 92:5-7 que celui qui donne et craint Dieu sera facilité, mais celui qui est avare sera en difficulté. Le maaun est le test le plus simple de cette générosité — en dessous de ce niveau, il n'y a plus rien.",
          axe5_frequence: "L'aide élémentaire est le minimum de la solidarité humaine — laisser couler vers les autres ce qui ne coûte presque rien. La mission de civilisation commence par ce flux minimal — un outil prêté, un peu d'eau partagée, un petit geste d'aide. Bloquer ce flux c'est rompre le lien social le plus basique, c'est se placer en dehors de la communauté humaine. Le maaun comme eau qui coule (racine m-'-n) est l'image parfaite de la solidarité naturelle : elle ne devrait pas être retenue, elle devrait couler librement. Le verset conclut la sourate par cette image — le refus du maaun est le résumé de toute la corruption."
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
