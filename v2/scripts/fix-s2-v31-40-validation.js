const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// Fix script for Sourate 2:31-40 (verse_ids 38-47)
// 3 fixes:
//   1. sense_chosen missing in analysis_axes (77 VWAs)
//   2. concept_chosen mismatch for stn (VWA 1242)
//   3. Missing axes for 7 VWAs with retenu/probable concepts
// ============================================================

// Axes data for 7 VWAs missing axes
const axesData = {

  // VWA 1270 [hkm] v32 (2:32) — "Jugement/Decision" (probable)
  // Context: Angels say "Glory to You, we have no knowledge except what You taught us. You are the All-Knowing, the All-Wise"
  1270: {
    concept: "Jugement/Decision",
    axes: {
      axe1_verset: "Dans le verset 2:32, les anges reconnaissent la sagesse divine en disant subhanaka — Gloire a Toi. Le mot al-Hakim (le Sage) est employe comme attribut divin en fin de verset, directement lie a la racine h-k-m dans son sens de jugement et de decision juste. Les anges admettent que leur connaissance est limitee a ce que Dieu leur a enseigne, ce qui implique que le jugement veritable appartient exclusivement a Dieu. La sagesse divine n'est pas une simple accumulation de savoir mais une capacite de decision parfaite qui echappe aux creatures. En utilisant al-Hakim apres al-Alim, le verset etablit que le savoir sans la sagesse de juger est incomplet. Le champ lexical du verset oppose l'aveu d'ignorance des anges a la plenitude du jugement divin.",
      axe2_voisins: "Le verset precedent 2:31 montre Dieu enseignant a Adam tous les noms — c'est l'acte de jugement divin qui decide de confier le savoir a Adam plutot qu'aux anges. Le verset suivant 2:33 confirme ce jugement quand Dieu demande a Adam d'informer les anges, prouvant que la decision de creer un khalifa etait fondee. En 2:30, les anges avaient questionne la decision de placer un khalifa sur terre — le jugement divin est donc le fil conducteur de cette sequence. En 2:34, l'ordre de se prosterner devant Adam est un autre acte de jugement qui met a l'epreuve les creatures. La sequence 2:30-34 est entierement structuree autour du jugement divin et de ses consequences. Les versets voisins montrent que chaque decision divine revele un aspect de la sagesse que les creatures ne percevaient pas initialement.",
      axe3_sourate: "La sourate al-Baqarah fait du jugement divin un theme structurant — de la designation du khalifa en 2:30 aux prescriptions juridiques des versets legislatifs. Le mot Hakim apparait dans la sourate pour qualifier Dieu comme Celui dont chaque decision est parfaitement ajustee. En 2:129, Ibrahim demande a Dieu d'envoyer un messager qui enseignera le Livre et la sagesse (al-hikma) — le jugement divin se transmet par la prophetie. En 2:231, les divorces doivent etre geres avec le Livre et la sagesse — la hikma est un guide pratique pour les decisions humaines. En 2:269, Dieu donne la sagesse a qui Il veut, et celui qui recoit la sagesse a recu un bien immense — le jugement juste est presente comme le plus grand don divin. La sourate fait donc du jugement divin le modele que le khalifa doit imiter dans sa gestion terrestre.",
      axe4_coherence: "Le Coran utilise la racine h-k-m dans plus de 200 versets, couvrant les sens de sagesse, jugement, juridiction et gouvernance. En 3:6, Dieu est Celui qui forme dans les matrices comme Il veut — Il est le Puissant, le Sage. En 6:18, Dieu est au-dessus de Ses serviteurs — Il est le Sage, le Bien-Informe. En 27:6, le Coran est recu de la part d'un Sage, d'un Omniscient — la revelation elle-meme est un acte de jugement divin. En 31:27, si les arbres etaient des calames et la mer de l'encre, les paroles de Dieu ne s'epuiseraient pas — la sagesse divine est inepuisable. En 36:2, par le Coran plein de sagesse (al-hakim) — le Livre lui-meme est qualifie de sage car chaque mot est le fruit d'un jugement parfait.",
      axe5_frequence: "Pour la mission du khalifa, le jugement est la competence centrale — le khalifa doit juger entre les hommes avec justice et sagesse. La racine h-k-m fonde le concept de gouvernance dans le Coran : juger (hakama), sagesse (hikma), juridiction (hukm) derivent toutes de la meme racine. En 4:58, Dieu vous ordonne de juger entre les hommes avec equite — le khalifa est investi d'un pouvoir de jugement delegue. En 5:44, ceux qui ne jugent pas selon ce que Dieu a descendu sont les recouvrants — le jugement juste est un devoir non negociable. En 38:26, O David, Nous t'avons fait khalifa sur la terre, juge donc entre les hommes avec verite — le lien entre khilafa et jugement est explicite. Le khalifa qui abandonne le jugement juste trahit sa mission fondamentale, car la sagesse de Dieu ne se manifeste sur terre que par des decisions humaines eclairees par la revelation.",
      proof_ctx: "La distinction entre Jugement/Decision et les autres concepts disponibles (comme Sagesse/Prudence) reside dans l'aspect actif et decisoire de h-k-m. Le jugement n'est pas une reflexion passive mais un acte tranchant qui separe le vrai du faux. Dans le contexte de 2:32, les anges reconnaissent que cette capacite de decision leur echappe — ils peuvent glorifier et sanctifier, mais juger et decider revient a Dieu seul. Le jugement implique une autorite que la sagesse seule ne confere pas : on peut etre sage sans avoir le pouvoir de juger, mais on ne peut pas juger justement sans sagesse. L'attribut al-Hakim en fin de verset confirme que le jugement divin est infaillible parce qu'il est fonde sur un savoir total (al-Alim) et une sagesse parfaite."
    }
  },

  // VWA 1273 [smw] v33 (2:33) — "Ciel/Ce qui couvre" (retenu)
  // Context: God tells Adam to inform the angels of the names; "Did I not tell you I know the unseen of the heavens and earth?"
  1273: {
    concept: "Ciel/Ce qui couvre",
    axes: {
      axe1_verset: "Dans le verset 2:33, Dieu declare a lam aqul lakum inni a'lamu ghayba al-samawati wa al-ard — ne vous ai-Je pas dit que Je connais l'invisible des cieux et de la terre. Le mot samawat (cieux) est utilise au pluriel, designant l'ensemble de ce qui est au-dessus et qui couvre la creation terrestre. Le champ lexical du verset oppose le visible (ce que les anges connaissent) a l'invisible (ghayb) des cieux — ce qui est couvert et cache. La racine s-m-w dans son sens de ce qui couvre renforce l'idee que les cieux contiennent des realites cachees auxquelles les anges eux-memes n'ont pas acces. Le verset etablit que la connaissance de Dieu englobe tout ce qui est couvert par les cieux et ce qui est sur terre. La mention des cieux ici n'est pas cosmologique mais epistemologique — elle definit l'etendue du savoir divin.",
      axe2_voisins: "Le verset precedent 2:32 montre les anges avouant leur ignorance — ils ne savent que ce que Dieu leur a enseigne. Le verset 2:33 repond en revelant que le savoir divin couvre les cieux et la terre, depassant infiniment le savoir des anges. En 2:29, Dieu est presente comme Celui qui a cree tout ce qui est sur terre puis S'est tourne vers le ciel et en a fait sept cieux — la creation des cieux est un acte de volonte deliberee. En 2:30, les anges interrogent sur la designation du khalifa — la reponse complete vient en 2:33 ou Dieu revele qu'Il sait ce qui est cache dans les cieux. La sequence montre que la creation du khalifa est liee au plan divin pour les cieux et la terre. Les versets voisins construisent une progression du questionnement a la revelation du savoir cache.",
      axe3_sourate: "La sourate al-Baqarah mentionne les cieux dans de nombreux passages, toujours en lien avec la puissance creatrice et le savoir divin. En 2:22, le ciel est un edifice (bina'an) construit au-dessus de la terre — la couverture celeste est une protection. En 2:29, les sept cieux sont faconnes apres la creation terrestre — la hierarchie est etablie. En 2:107, a Dieu appartient le royaume des cieux et de la terre — la souverainete englobe tout. En 2:116, a Dieu appartient ce qui est dans les cieux et sur la terre, tout Lui obeit — la soumission est universelle. En 2:164, la creation des cieux et de la terre fait partie des signes pour les doues d'intelligence. La sourate utilise les cieux comme marqueur de la grandeur divine et de l'etendue de Son savoir et de Son pouvoir.",
      axe4_coherence: "Le Coran mentionne les cieux (samawat) dans des centaines de versets, formant le couple cieux-terre qui structure la cosmologie coranique. En 21:32, le ciel est un toit protege — la fonction de couverture est explicite. En 51:47, le ciel est construit avec puissance et etendu continuellement — la construction divine est dynamique. En 41:12, Dieu decreta sept cieux en deux jours et revela a chaque ciel sa fonction — chaque couche celeste a un role specifique. En 67:3, celui qui a cree sept cieux superposes sans que tu voies de faille — la perfection de la couverture celeste est un defi a l'observation humaine. En 71:15, n'avez-vous pas vu comment Dieu a cree sept cieux superposes — la superposition des cieux est un signe recurrent. Le Coran est coherent dans sa presentation des cieux comme couverture structuree, protectrice et porteuse de signes.",
      axe5_frequence: "Pour la mission du khalifa, les cieux representent l'etendue de ce qui le depasse — le khalifa gere la terre mais les cieux lui rappellent les limites de son savoir. La racine s-m-w apparait dans le Coran plus de 300 fois, presque toujours associee a la terre pour former le couple cosmique. En 2:33, le ghayb des cieux est presente comme relevant exclusivement du savoir divin — le khalifa ne peut pretendre a cette connaissance. En 3:190, la creation des cieux et de la terre et l'alternance de la nuit et du jour sont des signes pour les doues d'intelligence — le khalifa doit observer les cieux comme source de reflexion. En 45:3, dans les cieux et la terre il y a des signes pour les croyants — l'observation des cieux fait partie de la methode du khalifa. Le khalifa doit lever les yeux vers ce qui le couvre pour comprendre sa place dans la creation et les limites de sa juridiction terrestre.",
      proof_ctx: "La distinction entre Ciel/Ce qui couvre et d'autres concepts comme Elevation/Hauteur reside dans la fonction de couverture protectrice. La racine s-m-w dans son sens premier evoque ce qui est eleve et qui couvre — le ciel n'est pas simplement haut, il est un toit (saqf) qui protege et enveloppe. Dans le contexte de 2:33, les cieux contiennent le ghayb (invisible) — ils couvrent et cachent des realites que seul Dieu connait. Le concept de couverture est plus pertinent que celui de hauteur car le verset parle de ce qui est cache (ghayb) dans les cieux, pas de la hauteur des cieux. La couverture implique un contenu cache, ce qui correspond exactement au propos du verset — Dieu seul sait ce que les cieux recouvrent."
    }
  },

  // VWA 1275 [gyb] v33 (2:33) — "Absence/Invisibilite" (probable)
  // Context: "Did I not tell you I know the unseen (ghayb) of the heavens and earth?"
  1275: {
    concept: "Absence/Invisibilite",
    axes: {
      axe1_verset: "Dans le verset 2:33, le mot ghayb est employe dans l'expression ghayba al-samawati wa al-ard — l'invisible des cieux et de la terre. Le champ lexical du verset oppose la connaissance manifeste (ce que les anges savent et ce qu'Adam a demontre) a l'invisible que seul Dieu maitrise. La racine gh-y-b designe ce qui est absent du champ de perception — ce qui echappe aux sens et a la raison des creatures. Le verset utilise ghayb comme argument definitif : Dieu sait ce qui est invisible, donc Sa decision de creer un khalifa est fondee sur un savoir que les anges ne possedent pas. L'invisibilite est ici epistemologique et non physique — le ghayb n'est pas simplement ce qu'on ne voit pas mais ce qui depasse toute capacite de connaissance creatrice. Le champ lexical construit une hierarchie du savoir : les anges savent ce qu'on leur enseigne, Adam sait les noms, mais Dieu seul connait le ghayb.",
      axe2_voisins: "En 2:31, Dieu enseigne a Adam les noms — le savoir apparent. En 2:32, les anges avouent leur ignorance. En 2:33, Dieu revele qu'Il connait le ghayb — le climax de la sequence. Cette progression montre que le savoir visible (les noms) n'est qu'une fraction du savoir total qui inclut l'invisible. En 2:30, les anges questionnaient la decision divine — la reponse complete est que le ghayb echappe aux anges. En 2:3, les croyants sont decrits comme ceux qui croient au ghayb — la foi en l'invisible est le premier attribut mentionne dans la sourate. Les versets voisins construisent donc un arc narratif ou le ghayb est d'abord un critere de foi (2:3), puis un argument de souverainete divine (2:33). L'invisible est le terrain exclusif de Dieu, et la foi consiste a accepter ce qu'on ne peut pas percevoir.",
      axe3_sourate: "La sourate al-Baqarah ouvre avec la mention du ghayb comme critere de foi (2:3) et revient au ghayb en 2:33 comme attribut divin — l'invisible encadre le debut de la sourate. En 2:3, les muttaqin sont ceux qui croient au ghayb — c'est la premiere qualite requise. En 2:33, le ghayb des cieux et de la terre est le domaine exclusif de Dieu — la foi en l'invisible trouve ici sa justification. En 2:235, Dieu sait ce que vous avez dans vos ames — le ghayb inclut les intentions humaines. En 2:255, Dieu connait ce qui est devant eux et derriere eux — le ghayb englobe le passe et l'avenir. La sourate fait du ghayb un theme fondateur qui distingue le croyant du recouvrant et le Createur de la creature.",
      axe4_coherence: "Le Coran utilise la racine gh-y-b dans une soixantaine de versets, toujours pour marquer la frontiere entre le savoir humain et le savoir divin. En 6:59, Dieu possede les clefs de l'invisible (mafatih al-ghayb) que seul Lui connait — le ghayb est verrouille pour les creatures. En 72:26-27, Dieu est le Connaisseur de l'invisible et ne devoile Son invisible a personne sauf a un messager qu'Il agree — le ghayb peut etre partiellement revele par la prophetie. En 35:38, Dieu connait l'invisible des cieux et de la terre — la meme expression qu'en 2:33 revient dans d'autres sourates. En 49:18, Dieu connait l'invisible des cieux et de la terre — la repetition confirme la constance de cet attribut. Le Coran est coherent dans sa presentation du ghayb comme domaine exclusif de Dieu, avec des ouvertures ponctuelles par la revelation prophetique.",
      axe5_frequence: "Pour la mission du khalifa, l'invisible est la frontiere de l'humilite — le khalifa doit agir en sachant qu'il ne voit pas tout et que les consequences de ses actes lui echappent partiellement. La racine gh-y-b rappelle au khalifa que sa connaissance est toujours partielle et que la guidance divine est necessaire pour combler les lacunes. En 2:3, la foi au ghayb est la premiere condition de la taqwa — le khalifa qui refuse l'invisible sort du cadre de la guidance. En 18:22, la connaissance du nombre des gens de la caverne releve du ghayb — meme les prophetes ne pretendent pas tout connaitre. En 27:65, dis : personne dans les cieux et la terre ne connait l'invisible sauf Dieu — le ghayb est un monopole divin absolu. Le khalifa doit gouverner avec la conscience que des forces invisibles orientent les evenements et que seul le recours a la revelation peut eclairer ce que les sens ne percoivent pas.",
      proof_ctx: "La distinction entre Absence/Invisibilite et d'autres concepts comme Secret/Mystere tient au fait que ghayb ne designe pas un secret deliberement cache mais une realite ontologiquement inaccessible aux creatures. Le secret peut etre revele par celui qui le detient, mais le ghayb est invisible par nature — il depasse la capacite de perception des creatures, pas leur droit d'acces. Dans le contexte de 2:33, le ghayb des cieux et de la terre n'est pas une information cachee par Dieu mais une realite que seul un savoir infini peut embrasser. L'invisibilite est structurelle, pas circonstancielle — c'est la nature meme du reel qui depasse la perception creatrice."
    }
  },

  // VWA 1284 [kbr] v34 (2:34) — "Grandeur/Importance" (probable)
  // Context: Prostrate to Adam, all did except Iblis who refused and was arrogant (istakbara)
  1284: {
    concept: "Grandeur/Importance",
    axes: {
      axe1_verset: "Dans le verset 2:34, le verbe istakbara est employe pour decrire le refus d'Iblis de se prosterner devant Adam — aba wa istakbara wa kana mina al-kafirin. La racine k-b-r dans la forme istaf'ala exprime la pretention a la grandeur, l'arrogance de celui qui se considere trop grand pour obeir. Le champ lexical du verset oppose la prosternation (soumission physique et spirituelle) a l'istikbar (pretention a la grandeur). Iblis refuse de se soumettre parce qu'il se considere superieur — la grandeur qu'il revendique est une grandeur usurpee qui contredit l'ordre divin. Le verset lie l'arrogance au kufr — wa kana mina al-kafirin — montrant que la pretention a la grandeur est une forme de recouvrement. Le champ lexical construit une equation : refus (aba) + arrogance (istakbara) = kufr, etablissant que la grandeur illusoire est la racine de la perdition.",
      axe2_voisins: "En 2:33, Dieu vient de prouver la superiorite d'Adam en savoir — le contexte immediat est une demonstration de la hierarchie divine. En 2:34, l'ordre de prosterner teste l'acceptation de cette hierarchie — Iblis echoue au test par arrogance. En 2:35, Dieu installe Adam au paradis — la suite montre que la soumission est recompensee par l'elevation. En 2:36, Satan les fait chuter — celui qui a refuse la soumission par arrogance cause la chute de ceux qui etaient eleves. La sequence 2:33-36 montre que la vraie grandeur est dans la soumission a l'ordre divin et que la fausse grandeur (istikbar) mene a la destruction des autres. Les versets voisins construisent un contraste entre la grandeur acceptee par Dieu (Adam eleve par le savoir) et la grandeur revendiquee contre Dieu (Iblis refusant de se prosterner).",
      axe3_sourate: "La sourate al-Baqarah fait de l'arrogance un theme recurrent qui explique l'echec de peuples entiers. En 2:34, Iblis est le premier a manifester l'istikbar dans le recit coranique de la sourate — il inaugure une lignee de refus. En 2:87, chaque fois qu'un messager vient aux enfants d'Israel avec ce que leurs ames ne desirent pas, ils s'enorgueillissent (istakbartum) — la meme racine revient pour les humains. En 2:206, quand on lui dit crains Dieu, l'orgueil le saisit dans le peche — l'arrogance est un mecanisme de resistance a la verite. En 2:258, Nimrod dispute avec Ibrahim au sujet de son Seigneur — l'arrogance du pouvoir politique defie la souverainete divine. La sourate montre que l'istikbar d'Iblis est le prototype de toute arrogance humaine — refuser l'ordre divin par pretention a la grandeur.",
      axe4_coherence: "Le Coran utilise la racine k-b-r dans des dizaines de versets pour denoncer l'arrogance et affirmer que la grandeur veritable appartient a Dieu seul. En 4:173, les orgueilleux qui refusent l'adoration seront chatires — l'istikbar devant Dieu n'a pas d'issue. En 7:13, Dieu dit a Iblis descends de la, ce n'est pas a toi de t'enorgueillir ici — le paradis est incompatible avec l'arrogance. En 16:23, Dieu n'aime pas les orgueilleux (al-mutakabbirin) — l'amour divin est refuse aux arrogants. En 39:72, on dit aux orgueilleux entrez les portes de la Gehenne — l'arrogance mene directement a l'enfer. En 40:35, ceux qui disputent les signes de Dieu sans preuve, grande est la repugnance aupres de Dieu et des croyants — l'arrogance intellectuelle est aussi condamnee. Le Coran est unanime : la grandeur revendiquee contre Dieu est la racine de toute perdition.",
      axe5_frequence: "Pour la mission du khalifa, l'arrogance est l'ennemi interieur le plus dangereux — le khalifa qui s'enorgueillit de son pouvoir trahit sa mission de serviteur. La racine k-b-r rappelle que la grandeur veritable est celle de Dieu (Allahu Akbar) et que toute pretention humaine a la grandeur est une usurpation. En 2:34, Iblis est le modele negatif — le khalifa doit faire l'exact contraire : se soumettre a l'ordre divin meme quand il ne comprend pas. En 28:83, la demeure derniere est reservee a ceux qui ne cherchent ni la grandeur sur terre ni la corruption — le khalifa ideal est humble. En 31:18, ne detourne pas ton visage des hommes et ne marche pas sur terre avec arrogance — la gestion du khalifa doit etre marquee par la modestie. Le khalifa qui imite Iblis dans l'istikbar perd sa legitimite car la khilafa est un mandat divin de service, pas un titre de domination.",
      proof_ctx: "La distinction entre Grandeur/Importance et d'autres concepts comme Orgueil/Vanite tient au fait que k-b-r designe la grandeur elle-meme — un concept neutre qui devient negatif seulement quand il est usurpe. La grandeur de Dieu (Allahu Akbar) est legitime ; la grandeur d'Iblis (istakbara) est illegitime. Le concept d'importance est plus large que l'orgueil : il inclut la grandeur objective (l'importance reelle d'une chose) et la grandeur pretentieuse (l'arrogance). Dans le contexte de 2:34, Iblis revendique une importance qu'il n'a pas — il se considere trop grand pour se prosterner alors que l'ordre vient de Celui qui est veritablement Grand."
    }
  },

  // VWA 1286 [kfr] v34 (2:34) — "Rejet/Ingratitude" (probable)
  // Context: Iblis refused, was arrogant "and was among the disbelievers" (wa kana mina al-kafirin)
  1286: {
    concept: "Rejet/Ingratitude",
    axes: {
      axe1_verset: "Dans le verset 2:34, la racine k-f-r apparait dans la conclusion wa kana mina al-kafirin — et il fut parmi les recouvrants. Le champ lexical du verset lie le refus (aba), l'arrogance (istakbara) et le kufr en une sequence causale : le refus d'obeir nait de l'arrogance, et l'arrogance mene au recouvrement. Le kufr d'Iblis n'est pas un recouvrement doctrinal — il connait Dieu, il L'a adore — mais un recouvrement existentiel : il refuse l'ordre de Dieu en pleine connaissance de cause. Le verset utilise kana mina pour indiquer que le kufr n'est pas un acte ponctuel mais un etat qui classe Iblis dans une categorie permanente. La racine k-f-r dans son sens de recouvrement montre qu'Iblis couvre la verite de l'ordre divin sous le voile de son orgueil. Le champ lexical du verset fait du kufr la consequence logique et inevitable de l'istikbar.",
      axe2_voisins: "En 2:33, Dieu vient de reveler Son savoir du ghayb — la verite est manifeste. En 2:34, Iblis couvre cette verite manifeste par son refus — le kufr est un acte de recouvrement delibere apres la revelation. En 2:35, Dieu installe Adam au paradis — le croyant qui se soumet est recompense tandis que le kafir est exclu. En 2:36, Satan cause la chute d'Adam — le kafir devient acteur de corruption. En 2:24, le feu est prepare pour les kafirin — la consequence du kufr est annoncee avant meme le recit d'Iblis. Les versets voisins montrent que le kufr d'Iblis n'est pas un cas isole mais le prototype de tout kufr humain. La sequence narrative lie le recouvrement a l'arrogance et a la volonte de corrompre ceux qui ont ete eleves.",
      axe3_sourate: "La sourate al-Baqarah est structuree par l'opposition iman/kufr — les croyants et les recouvrants sont les deux categories fondamentales presentees des les premiers versets. En 2:6-7, les kafirin sont decrits comme ceux dont les coeurs sont scelles — le recouvrement est presente comme un etat de fermeture. En 2:34, Iblis est le premier kafir nomme dans la sourate — son kufr par arrogance devient le modele explicatif. En 2:89, quand un Livre confirmant ce qu'ils avaient leur est venu, ils l'ont recouvert — le kufr des humains repete celui d'Iblis. En 2:161, ceux qui couvrent et meurent en etat de kufr sont maudits — la sourate est severe envers le recouvrement persistant. La sourate fait du kufr d'Iblis la matrice de tout recouvrement ulterieur dans l'histoire humaine.",
      axe4_coherence: "Le Coran utilise la racine k-f-r dans des centaines de versets, en faisant l'une des racines les plus frequentes du texte. En 2:34, Iblis est le premier kafir du recit coranique — tous les kufr subsequents sont des variantes de son refus originel. En 7:12, Iblis justifie son refus par la superiorite du feu sur l'argile — le kufr est rationalise par un raisonnement errone. En 15:31, Iblis dit il ne m'appartient pas de me prosterner devant un humain cree d'argile — le kufr est formule comme un refus de principe. En 18:50, Iblis est du nombre des djinns, il sortit de l'obeissance a son Seigneur — le kufr est une sortie volontaire. En 38:74, Iblis dit il s'enorgueilllt et fut parmi les kafirin — la meme formule qu'en 2:34 revient dans d'autres sourates. Le Coran est coherent dans sa presentation du kufr d'Iblis comme le modele originel de tout rejet de la verite divine.",
      axe5_frequence: "Pour la mission du khalifa, le kufr est l'antithese de sa mission — le khalifa doit combattre le recouvrement de la verite sous toutes ses formes. La racine k-f-r rappelle que recouvrir la verite est le peche originel du cosmos, commis avant meme la chute d'Adam. En 2:34, le premier kafir n'est pas un humain mais une creature qui a cote Dieu de pres — le kufr n'est pas lie a l'ignorance mais au refus delibere. En 3:97, celui qui recouvre, Dieu se passe des mondes — le kufr ne nuit qu'a son auteur. En 14:7, si vous etes reconnaissants J'augmenterai, mais si vous recouvrez Mon chatiment est severe — le kufr comme ingratitude declenche la justice divine. Le khalifa doit veiller a ce que la gratitude (shukr, l'oppose du kufr) prevale dans sa gestion, car le recouvrement des bienfaits est la premiere etape vers la corruption de la mission.",
      proof_ctx: "La distinction entre Rejet/Ingratitude et d'autres concepts comme Incredulite/Atheisme tient au sens originel de k-f-r qui est couvrir et non pas ne pas croire. Iblis ne peut pas etre incredule — il a vu Dieu, il Lui a parle, il connait Son pouvoir. Son kufr est un acte de recouvrement : il couvre l'obligation d'obeir sous le voile de son orgueil. Le rejet est actif et volontaire, tandis que l'incredulite pourrait etre passive et involontaire. Dans le contexte de 2:34, Iblis rejette l'ordre divin en pleine connaissance — c'est un kufr de rébellion, pas d'ignorance. L'ingratitude est aussi presente : Iblis recouvre les bienfaits de sa position elevee au lieu d'en etre reconnaissant."
    }
  },

  // VWA 1335 [kfr] v39 (2:39) — "Rejet/Ingratitude" (probable)
  // Context: "Those who reject and deny Our signs, they are companions of the fire, therein to remain"
  1335: {
    concept: "Rejet/Ingratitude",
    axes: {
      axe1_verset: "Dans le verset 2:39, le verbe kafaru est employe dans la construction walladhina kafaru wa kadhdhabu bi ayatina — ceux qui ont recouvert et dementi Nos signes. Le champ lexical du verset associe deux verbes complementaires : kafaru (recouvrir) et kadhdhabu (dementir). Le kufr est l'acte interieur de recouvrement, le takdhib est sa manifestation exterieure par le deni. Le verset indique la consequence directe : ula'ika ashabu al-nar hum fiha khalidun — ils sont les compagnons du feu pour l'eternite. La racine k-f-r dans ce verset designe un recouvrement complet qui se traduit par le deni actif des signes divins. Le champ lexical oppose implicitement ce verset au verset precedent 2:38 ou la guidance est proposee a tous — le kufr est le refus delibere de cette guidance offerte.",
      axe2_voisins: "Le verset 2:38 annonce que la guidance viendra — faman tabi'a hudaya fala khawfun alayhim — celui qui suit la guidance n'a rien a craindre. Le verset 2:39 presente l'alternative negative : ceux qui recouvrent et dementent les signes. En 2:37, Adam recoit des paroles de son Seigneur et Dieu accepte son repentir — la voie du retour existe. En 2:38, l'ordre de descendre du paradis est suivi de la promesse de guidance — le kufr n'est donc pas inevitable. En 2:40, Dieu s'adresse aux enfants d'Israel — le passage du kufr general au cas particulier des Banu Isra'il montre que le recouvrement a des manifestations historiques concretes. Les versets voisins construisent un choix binaire : guidance ou kufr, paix ou feu, en laissant la responsabilite entierement a l'humain.",
      axe3_sourate: "La sourate al-Baqarah fait du kufr l'obstacle central a la mission du khalifa sur terre. En 2:6, le debut de la sourate declare que les kafirin ne croiront pas, qu'on les avertisse ou non — le recouvrement est presente comme un etat de fermeture. En 2:39, le kufr est lie au deni des signes (ayat) — c'est la combinaison du recouvrement interieur et du deni exterieur qui scelle le sort. En 2:161-162, ceux qui meurent kafirin sont maudits de Dieu, des anges et de tous les hommes — la sourate est sans appel sur la gravite du kufr persistant. En 2:217, le kufr est plus grave que le meurtre (al-fitnatu akbaru mina al-qatl) — dans l'echelle de la sourate, le recouvrement est le crime supreme. La sourate fait du kufr non pas une simple erreur mais une trahison de la mission khalifale.",
      axe4_coherence: "Le Coran associe kafaru et kadhdhabu dans de nombreux versets pour decrire la double dimension du recouvrement. En 3:4, ceux qui recouvrent les signes de Dieu auront un chatiment severe — la formule est identique en structure a 2:39. En 5:10, ceux qui recouvrent et dementent Nos signes sont les compagnons du feu — la meme expression revient mot pour mot. En 5:86, ceux qui recouvrent et dementent Nos signes sont les compagnons de la fournaise — la formule est une constante coranique. En 64:10, ceux qui recouvrent et dementent Nos signes sont les gens du feu pour l'eternite — la meme sentence traverse tout le Coran. La coherence est totale : le kufr accompagne du takdhib mene invariablement au feu eternel, sans exception dans tout le texte coranique.",
      axe5_frequence: "Pour la mission du khalifa, le recouvrement des signes est la menace existentielle — si les signes de Dieu sont recouverts, la guidance disparait et la corruption s'installe. La racine k-f-r dans le contexte de 2:39 combine le recouvrement et l'ingratitude : recouvrir les signes c'est aussi nier les bienfaits de la guidance. En 14:28, ceux qui ont echange le bienfait de Dieu par le kufr et ont installe leur peuple dans la perdition — le kufr des dirigeants corrompt des communautes entieres. En 16:112, la cite qui etait en securite et recevait sa subsistance de partout puis a recouvert les bienfaits de Dieu — le kufr collectif entraine la destruction. En 30:34, soyez ingrats (li yakfuru) envers ce que Nous leur avons donne — le kufr est aussi l'ingratitude pour les bienfaits materiels. Le khalifa doit maintenir la gratitude collective car le kufr d'un peuple entraine la perte de la guidance et des bienfaits.",
      proof_ctx: "La distinction entre Rejet/Ingratitude dans le contexte de 2:39 et dans celui de 2:34 reside dans la dimension collective et eschatologique. En 2:34, le kufr d'Iblis est individuel et ontologique — une creature refuse l'ordre divin. En 2:39, le kufr est celui des humains qui recouvrent les signes et dementent — c'est un kufr historique et collectif qui touche des communautes entieres. La consequence est explicitement eschatologique : ashab al-nar khalidun — compagnons du feu pour toujours. L'ingratitude ici porte sur les ayat (signes) que Dieu a donnees — recouvrir ces signes c'est refuser le cadeau de la guidance apres l'avoir recu."
    }
  },

  // VWA 1343 [nem] v40 (2:40) — "Douceur/Aisance" (probable)
  // Context: "O Children of Israel, remember My favor (ni'mati) which I bestowed upon you"
  1343: {
    concept: "Douceur/Aisance",
    axes: {
      axe1_verset: "Dans le verset 2:40, le mot ni'mati (Mon bienfait) derive de la racine n-e-m qui exprime la douceur, l'aisance et le bienfait. L'expression udhkuru ni'matiya allati an'amtu alaykum — rappelez-vous Mon bienfait que J'ai repandu sur vous — place le bienfait divin comme objet central du souvenir. La racine n-e-m dans son sens de douceur evoque une vie agreable et facilitee par la grace divine. Le champ lexical du verset lie le souvenir (dhikr) au bienfait (ni'ma) — se souvenir du bienfait est le premier acte de gratitude. Le verset utilise la forme an'amtu (J'ai gratifie) pour souligner que l'aisance vient exclusivement de Dieu et que les enfants d'Israel en sont les recipiendaires, non les producteurs. Le bienfait est a la fois materiel (la liberation d'Egypte, la manne) et spirituel (la Torah, la prophetie).",
      axe2_voisins: "Le verset 2:39 vient de decrire le sort des kafirin — le feu eternel. Le verset 2:40 s'ouvre sur un appel positif : rappelez-vous Mon bienfait. Le contraste est saisissant — apres la menace vient le rappel de la douceur divine. En 2:41, l'appel se poursuit avec la demande de croire en ce qui a ete descendu — la gratitude pour les bienfaits passes doit mener a l'acceptation de la revelation presente. En 2:47, le meme appel est repete : O enfants d'Israel, rappelez-vous Mon bienfait — la repetition montre l'importance du souvenir. En 2:38, Dieu promet la guidance a ceux qui descendent sur terre — le bienfait de 2:40 est la concretisation de cette promesse pour les Banu Isra'il. Les versets voisins montrent que la ni'ma est le pont entre la promesse generale (2:38) et l'histoire particuliere d'Israel.",
      axe3_sourate: "La sourate al-Baqarah fait du bienfait divin envers les enfants d'Israel un dossier complet qui occupe une large partie de la sourate. En 2:40, le premier appel aux Banu Isra'il porte sur le bienfait — c'est le point de depart de toute la relation. En 2:47, le bienfait est precise comme une election au-dessus des mondes — faddalntukum ala al-alamin. En 2:49, le bienfait est historique : la delivrance de Pharaon. En 2:57, le bienfait est materiel : la manne et les cailles. En 2:60, le bienfait est l'eau jaillissant du rocher — douze sources pour douze tribus. La sourate enumere les bienfaits un par un pour montrer que l'ingratitude d'Israel n'est pas due a un manque de bienfaits mais a un refus de gratitude. Le khalifa doit comprendre que la ni'ma divine est abondante mais exige le shukr.",
      axe4_coherence: "Le Coran utilise la racine n-e-m dans des dizaines de versets pour rappeler les bienfaits divins et exiger la gratitude. En 1:7, la fatiha mentionne ceux que Dieu a gratifies (an'amta alayhim) — le bienfait est le premier attribut du chemin droit. En 5:20, Moise rappelle a son peuple les bienfaits de Dieu : Il a fait de vous des rois — la ni'ma est aussi politique. En 14:34, si vous comptiez les bienfaits de Dieu vous ne pourriez les denombrer — la ni'ma est infinie. En 16:18, si vous comptiez le bienfait de Dieu vous ne pourriez le recenser — la meme affirmation revient. En 31:20, Dieu a repandu sur vous Ses bienfaits apparents et caches — la ni'ma a des dimensions visibles et invisibles. Le Coran est coherent dans sa presentation du bienfait comme don divin surabondant qui appelle une gratitude permanente.",
      axe5_frequence: "Pour la mission du khalifa, le bienfait est la matiere premiere de sa gestion — le khalifa distribue les bienfaits divins et veille a la gratitude collective. La racine n-e-m rappelle que l'aisance et la douceur de la vie sont des dons de Dieu, non des acquis humains. En 2:40, l'appel a se souvenir du bienfait est un appel a la gratitude active — le souvenir doit se traduire en obeissance. En 5:7, rappelez-vous le bienfait de Dieu sur vous et le pacte par lequel Il vous a lies — la ni'ma est associee au pacte. En 93:11, quant au bienfait de ton Seigneur, proclame-le — la ni'ma doit etre proclamee, pas cachee. En 8:53, Dieu ne change pas un bienfait qu'Il a accorde a un peuple tant que celui-ci ne change pas ce qui est en lui-meme — le maintien du bienfait depend de la gratitude. Le khalifa doit enseigner la gratitude car la perte de la ni'ma est la consequence directe du kufr.",
      proof_ctx: "La distinction entre Douceur/Aisance et d'autres concepts comme Bienfait/Grace tient a la racine n-e-m qui evoque en premier lieu la douceur de vivre et l'aisance — la ni'ma n'est pas un bienfait ponctuel mais un etat de confort et de facilite accorde par Dieu. Dans le contexte de 2:40, la ni'ma englobe tout ce qui a rendu la vie des enfants d'Israel agreable : la liberation, la nourriture, l'eau, la Torah, la prophetie. Le concept de douceur est plus large que celui de bienfait car il inclut l'etat interieur de bien-etre et pas seulement les dons exterieurs. La ni'ma est une aisance totale — materielle, spirituelle et existentielle — que seul Dieu peut accorder."
    }
  }
};


async function fix() {
  let ok = 0, err = 0, skip = 0;
  const verseIds = [38,39,40,41,42,43,44,45,46,47]; // 2:31 to 2:40

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
  for (const wa of was) waMap[wa.word_key] = wa;
  const waIds = was.map(w => w.id);
  const { data: wms } = await db.from('word_meanings').select('analysis_id, concept, sense, status').in('analysis_id', waIds);

  // Build concept map: word_key -> { conceptName -> [senses] }
  const conceptMap = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!conceptMap[wa.word_key]) conceptMap[wa.word_key] = {};
    if (!conceptMap[wa.word_key][wm.concept]) conceptMap[wa.word_key][wm.concept] = [];
    conceptMap[wa.word_key][wm.concept].push(wm.sense);
  }

  // ============================================================
  // FIX 1: sense_chosen missing in analysis_axes (77 VWAs)
  // ============================================================
  console.log('\n=== FIX 1: sense_chosen manquant dans analysis_axes ===');
  let fix1count = 0;

  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax) { console.log(`  SKIP VWA ${vwa.id} (${vwa.word_key}) — no analysis_axes`); skip++; continue; }

    // Check if sense_chosen already present
    if (ax.sense_chosen) continue;

    let newSense = null;

    // Strategy 1: Look at segments from parent verse_analyses
    const segKey = vwa.verse_id + ':' + vwa.word_key;
    if (segMap[segKey]) {
      newSense = segMap[segKey];
    }

    // Strategy 2: If no segment match, use concept_chosen to find first sense
    if (!newSense && ax.concept_chosen && ax.concepts) {
      const retainedConcept = ax.concepts[ax.concept_chosen];
      if (retainedConcept && retainedConcept.senses && retainedConcept.senses.length > 0) {
        newSense = retainedConcept.senses[0];
      }
    }

    // Strategy 3: Look in conceptMap for the retained concept
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
  // FIX 2: concept_chosen mismatch for stn (VWA 1242, verse_id=43)
  // ============================================================
  console.log('\n=== FIX 2: concept_chosen mismatch stn VWA 1242 ===');

  const vwa1242 = vwas.find(v => v.id === 1242);
  if (vwa1242) {
    const ax = vwa1242.analysis_axes;
    if (ax && ax.concept_chosen === 'Egarement/Rebellion') {
      ax.concept_chosen = 'Eloignement/Distance';
      // Also fix in concepts if the old key exists
      if (ax.concepts && ax.concepts['Egarement/Rebellion']) {
        ax.concepts['Eloignement/Distance'] = ax.concepts['Egarement/Rebellion'];
        delete ax.concepts['Egarement/Rebellion'];
      }
      const { error: e } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', 1242);
      if (e) {
        console.log(`  ERR VWA 1242: ${e.message}`);
        err++;
      } else {
        console.log(`  OK VWA 1242 [stn] concept_chosen: "Egarement/Rebellion" → "Eloignement/Distance"`);
        ok++;
      }
    } else if (ax && ax.concept_chosen !== 'Egarement/Rebellion') {
      console.log(`  SKIP VWA 1242 — concept_chosen is already "${ax.concept_chosen}"`);
      skip++;
    }
  } else {
    console.log('  WARN VWA 1242 not found in loaded data — may be outside verse_ids range');
    // Try direct fetch
    const { data: v1242 } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('id', 1242).single();
    if (v1242 && v1242.analysis_axes) {
      const ax = v1242.analysis_axes;
      if (ax.concept_chosen === 'Egarement/Rebellion') {
        ax.concept_chosen = 'Eloignement/Distance';
        if (ax.concepts && ax.concepts['Egarement/Rebellion']) {
          ax.concepts['Eloignement/Distance'] = ax.concepts['Egarement/Rebellion'];
          delete ax.concepts['Egarement/Rebellion'];
        }
        const { error: e } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', 1242);
        if (e) { console.log(`  ERR VWA 1242: ${e.message}`); err++; }
        else { console.log(`  OK VWA 1242 [stn] concept_chosen fixed`); ok++; }
      } else {
        console.log(`  SKIP VWA 1242 — concept_chosen already "${ax.concept_chosen}"`);
        skip++;
      }
    }
  }

  // ============================================================
  // FIX 3: Missing axes for 7 VWAs with retenu/probable concepts
  // ============================================================
  console.log('\n=== FIX 3: Axes manquants pour 7 VWAs ===');

  for (const [vwaIdStr, axData] of Object.entries(axesData)) {
    const vwaId = parseInt(vwaIdStr);

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
      // Add axes to the concept
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
    }
  }

  // ============================================================
  // VERIFICATION
  // ============================================================
  console.log('\n=== VERIFICATION ===');

  // Re-fetch all VWAs to verify
  const { data: vwasCheck } = await db.from('verse_word_analyses')
    .select('id, word_key, verse_id, sense_chosen, analysis_axes')
    .in('verse_id', verseIds)
    .order('id');

  let missingSense = 0, missingAxesSense = 0;
  for (const vwa of vwasCheck) {
    if (!vwa.analysis_axes?.sense_chosen) {
      missingAxesSense++;
      console.log(`  STILL MISSING sense_chosen in axes: VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id}`);
    }
    if (!vwa.sense_chosen) {
      missingSense++;
    }
  }

  // Check VWA 1242
  const { data: check1242 } = await db.from('verse_word_analyses')
    .select('id, analysis_axes')
    .eq('id', 1242)
    .single();
  if (check1242) {
    const cc = check1242.analysis_axes?.concept_chosen;
    console.log(`  VWA 1242 concept_chosen: "${cc}" ${cc === 'Eloignement/Distance' ? '(OK)' : '(STILL WRONG)'}`);
  }

  // Check 7 VWAs with axes
  for (const vwaId of [1270, 1273, 1275, 1284, 1286, 1335, 1343]) {
    const v = vwasCheck.find(x => x.id === vwaId) || (await db.from('verse_word_analyses').select('id, analysis_axes').eq('id', vwaId).single()).data;
    if (v && v.analysis_axes?.concepts) {
      const conceptKeys = Object.keys(v.analysis_axes.concepts);
      const hasAxes = conceptKeys.some(ck => {
        const c = v.analysis_axes.concepts[ck];
        return c.axe1_verset || c.axe2_voisins;
      });
      console.log(`  VWA ${vwaId}: axes present = ${hasAxes ? 'YES' : 'NO'}`);
    } else {
      console.log(`  VWA ${vwaId}: no concepts found`);
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`VWAs still missing sense_chosen in axes: ${missingAxesSense}`);
  console.log(`VWAs still missing top-level sense_chosen: ${missingSense}`);
  console.log(`Total: ${ok} fixes applied, ${err} errors, ${skip} skipped`);
}

fix().catch(console.error);
