const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// FIX: Ajouter les 5 axes manquants aux concepts
// probable et peu_probable dans V201-210
// 135 erreurs de validation a corriger
// =====================================================

// Mapping verse_number -> verse_id
const verseMap = {
  202: 209,
  203: 210,
  205: 212,
  206: 213,
  207: 214,
  208: 215,
  209: 216,
  210: 217
};

// =====================================================
// AXES DATA: 25 concepts (probable / peu_probable)
// Chaque entree: { verse, word_key, position, concept, axes }
// =====================================================

// --- Axes partages pour athm (V203 positions 11 et 16) ---
const athm_chatiment_axes = {
  axe1_verset: "Le concept de chatiment/consequence est present dans la racine a-th-m mais le verset 2:203 utilise ithm dans le sens de faute morale, pas de chatiment. Le champ lexical (jours comptes, se hater, retarder, pas de faute) montre que ithm designe ici l'absence de peche pour celui qui choisit l'une ou l'autre option du pelerinage. Le chatiment est une consequence possible du ithm, pas le ithm lui-meme. La distinction est celle entre la faute (ithm) et sa sanction (chatiment).",
  axe2_voisins: "Les versets 2:201-202 parlent de recompense et de part, pas de chatiment. Le verset 2:204 parle de l'hypocrite dont la parole plait mais dont le coeur est corrompu. Le contexte des versets voisins est celui de la responsabilite morale individuelle, pas de la punition collective. Le ithm est la faute que le pelerin pourrait commettre — le chatiment viendrait apres, dans l'au-dela. Le verset 203 rassure : ni hater ni retarder ne constitue une faute.",
  axe3_sourate: "La sourate al-Baqarah mentionne le ithm en 2:85, 2:173, 2:181, 2:188, 2:203, 2:206, 2:219. Dans tous ces cas, ithm designe la faute morale ou le peche, pas le chatiment. La sourate distingue clairement entre le ithm (faute) et le adhab (chatiment). Le concept de chatiment est porte par d'autres racines (e-dh-b, j-z-y) dans la sourate, pas par a-th-m.",
  axe4_coherence: "La racine a-th-m apparait environ 48 fois dans le Coran. En 4:111, « man yaksib ithman fa-innama yaksibhu ala nafsihi » (celui qui commet un peche le commet contre lui-meme). En 5:2, « wa-la ta'awanu ala al-ithmi » (n'entraidez-vous pas dans le peche). Le Coran utilise ithm pour la faute morale, le peche, la transgression — pas pour le chatiment qui en resulte. Le chatiment est une consequence du ithm, pas un synonyme.",
  axe5_frequence: "Pour la mission du khalifa, le chatiment est une dimension de la justice mais le ithm est la faute qui precede le chatiment. Le khalifa doit prevenir le ithm (la faute) avant d'appliquer le chatiment. Le verset 2:203 montre que certains choix ne constituent pas une faute — le khalifa doit discerner entre ce qui est faute et ce qui est permis. La nuance est importante pour la justice : punir ce qui n'est pas faute serait injuste."
};

const athm_culpabilite_axes = {
  axe1_verset: "Le concept de culpabilite/remords est un etat interieur qui ne correspond pas au contexte du verset 2:203. Le verset parle de l'absence de faute objective (fa-la ithma alayhi), pas d'un sentiment subjectif de culpabilite. Le champ lexical (jours comptes, se hater, retarder, taqwa) est celui de la reglementation rituelle, pas de la psychologie du remords. Le ithm ici est une realite juridique (faute ou non-faute), pas un sentiment.",
  axe2_voisins: "Les versets voisins (201-202 sur l'invocation, 204-206 sur l'hypocrite) ne contiennent aucune dimension de remords ou de culpabilite subjective. Le passage est legislatif et rituel — il pose des regles pour le pelerinage. La culpabilite comme sentiment interieur n'est pas le sujet du passage. Le Coran n'utilise pas ithm pour designer le remords mais pour designer l'acte fautif lui-meme ou la transgression objective.",
  axe3_sourate: "Dans la sourate al-Baqarah, le ithm est toujours une faute objective, jamais un sentiment de culpabilite. En 2:85, le ithm est lie a la transgression de l'alliance. En 2:188, le ithm est lie a la consommation illegale des biens. En 2:219, le ithm du vin et du jeu est superieur a leur benefice. Le remords est un sentiment distinct que le Coran exprime par d'autres termes (nadam, par exemple). Le ithm est l'acte, pas le sentiment qui suit.",
  axe4_coherence: "La racine a-th-m dans le Coran designe systematiquement la faute morale comme acte ou realite objective. En 5:107, « fa-qad istahaqqa ithman » (il a merite un peche). En 33:58, « faqad ihtamalu buhtanan wa-ithman mubinan » (ils portent une calomnie et un peche manifeste). Le Coran ne confond pas le ithm (faute objective) avec le sentiment de culpabilite. La culpabilite est inadaptee comme concept pour cette racine.",
  axe5_frequence: "Pour la mission du khalifa, le remords n'est pas un critere de jugement — la faute objective l'est. Le khalifa juge les actes (ithm = faute), pas les sentiments (culpabilite). Le verset 2:203 illustre ce principe : il declare que certains actes ne sont pas des fautes, independamment de ce que le pelerin ressent. La mission de justice du khalifa repose sur la distinction objectif/subjectif, et le ithm est du cote objectif."
};

const axesData = [
  // ===================== V202 (vid=209) =====================
  {
    verse_id: 209, word_key: "hsb", position: 8, concept: "Suffisance",
    axes: {
      axe1_verset: "Le concept de suffisance est present dans la racine h-s-b (hasb = ce qui suffit), mais le verset 2:202 utilise al-hisab dans le sens du compte/reddition des comptes. Le champ lexical (part, ce qu'ils ont acquis, rapide, le compte) est celui de la comptabilite divine, pas de la suffisance. Le hisab est ici le decompte des oeuvres, pas la notion de « ce qui suffit ». La suffisance apparait dans la meme racine via « hasbuna Allah » (Dieu nous suffit), mais c'est un usage different.",
      axe2_voisins: "Les versets 2:200-201 parlent d'invocations et de demandes a Dieu — l'ici-bas, l'au-dela, le feu. Le verset 2:202 conclut que ceux qui demandent bien auront une part de ce qu'ils ont acquis. Le contexte voisin est celui de la recompense proportionnelle, pas de la suffisance. Le hisab dans ce passage est le mecanisme de retribution, pas la notion de contentement ou d'assez.",
      axe3_sourate: "La racine h-s-b dans la sourate al-Baqarah apparait en 2:202, 2:206, 2:284. En 2:206, « fa-hasbuhu jahannam » (la Gehenne lui suffit) — ici le sens est bien la suffisance. En 2:202, sarieu al-hisab est une formule recurrente du Coran pour la reddition des comptes. La sourate utilise les deux sens de h-s-b mais dans des contextes distincts. Le concept de suffisance est plausible pour la racine mais pas pour ce verset precis.",
      axe4_coherence: "La racine h-s-b apparait environ 109 fois dans le Coran. En 3:173, « hasbuna Allahu wa-ni'ma al-wakil » (Dieu nous suffit, quel excellent protecteur). En 65:3, « wa-man yatawakkal ala Allahi fa-huwa hasbuhu » (celui qui se confie a Dieu, Il lui suffit). Le sens de suffisance est frequent mais toujours avec la forme hasb + pronom. La forme hisab designe systematiquement le compte. Le verset 2:202 utilise hisab, pas hasb.",
      axe5_frequence: "Pour la mission du khalifa, la suffisance divine est un theme important — Dieu suffit a celui qui se confie a Lui. Mais le verset 2:202 parle de la rapidite du compte divin, pas de la suffisance. La mission du khalifa implique de rendre des comptes (hisab) pour ses actions, pas seulement de se contenter de Dieu. Le concept de compte/reddition est plus pertinent pour la responsabilite du khalifa que celui de suffisance."
    }
  },
  {
    verse_id: 209, word_key: "ksb", position: 4, concept: "Gain/Profit",
    axes: {
      axe1_verset: "Le concept de gain/profit est proche du sens de k-s-b mais le verset 2:202 utilise kasabu dans le contexte de l'acquisition des oeuvres aupres de Dieu. Le champ lexical (part, ce qu'ils ont acquis, compte) montre que l'acquisition est celle des oeuvres bonnes ou mauvaises, pas un gain commercial. Le kasb ici est spirituel — ce que les pelerins ont acquis par leurs invocations et leurs rites. Le gain/profit oriente vers le commercial, tandis que le verset parle de retribution divine.",
      axe2_voisins: "Les versets 2:200-201 parlent d'invocations a Dieu pour l'ici-bas et l'au-dela. Le verset 2:202 conclut : ceux-la auront une part de ce qu'ils ont acquis. Le voisinage est celui de la recompense spirituelle, pas du commerce. L'acquisition ici est celle des bonnes oeuvres qui produisent une part (nasib) aupres de Dieu. Le gain/profit commercial n'est pas le registre de ce passage.",
      axe3_sourate: "La racine k-s-b apparait dans la sourate al-Baqarah en 2:79, 2:81, 2:134, 2:141, 2:202, 2:281, 2:286. En 2:281, « wa-tuwaffa kullu nafsin ma kasabat » (chaque ame recevra ce qu'elle a acquis). En 2:286, « laha ma kasabat wa-alayha ma iktasabat » (pour elle ce qu'elle a acquis, contre elle ce qu'elle a commis). La sourate utilise k-s-b pour l'acquisition spirituelle des oeuvres, pas pour le profit commercial. Le concept retenu d'acquisition/retribution est plus fidele.",
      axe4_coherence: "La racine k-s-b apparait environ 67 fois dans le Coran. En 3:161, « tuwaffa kullu nafsin ma kasabat » (chaque ame sera retribuee pour ce qu'elle a acquis). En 45:22, « li-tujza kullu nafsin bi-ma kasabat » (pour que chaque ame soit retribuee pour ce qu'elle a acquis). Le Coran utilise kasaba principalement pour l'acquisition des oeuvres morales — bonnes ou mauvaises — pas pour le profit materiel. Le gain/profit est un sens possible de la racine mais pas l'usage coranique dominant.",
      axe5_frequence: "Pour la mission du khalifa, l'acquisition des oeuvres est un principe de responsabilite : chacun acquiert (kasaba) ses propres oeuvres et en repond devant Dieu. Le gain/profit est un concept plus etroit — il evoque l'avantage materiel. Le khalifa est responsable de ce qu'il acquiert comme oeuvres morales, pas seulement de ses profits. Le concept d'acquisition/retribution est plus adapte a la mission de justice que celui de gain commercial."
    }
  },
  {
    verse_id: 209, word_key: "sre", position: 7, concept: "Hate/Precipitation",
    axes: {
      axe1_verset: "Le concept de hate/precipitation est un sens voisin de la racine s-r-e mais le verset 2:202 utilise sari'u al-hisab (rapide en compte). Le champ lexical (part, acquis, Dieu, rapide, compte) est celui de l'efficacite divine, pas de la precipitation. Sari' qualifie Dieu — Dieu est rapide dans Son compte. La hate/precipitation connote une action precipitee, hative, potentiellement irreflechie. Qualifier Dieu de « precipite » serait imprecis — Dieu est rapide par puissance, pas par hate.",
      axe2_voisins: "Les versets 2:200-201 parlent des invocations calmes et reflechies des pelerins. Le verset 2:203 qui suit mentionne « celui qui se hate en deux jours » (ta'ajjala) — c'est la racine e-j-l qui porte le sens de hate dans le contexte voisin, pas s-r-e. La distinction est que ta'ajjala (se hater) est un acte humain, tandis que sari' (rapide) est un attribut divin. Le voisinage distingue clairement les deux registres.",
      axe3_sourate: "La racine s-r-e apparait pour la premiere fois dans la sourate al-Baqarah au verset 2:202. L'expression « sari'u al-hisab » est une formule qui revient dans le Coran pour designer l'efficacite divine dans le jugement. La sourate utilise cette formule pour rappeler que Dieu ne tarde pas a faire les comptes — la rapidite est un signe de puissance et de maitrise, pas de precipitation.",
      axe4_coherence: "La racine s-r-e apparait environ 47 fois dans le Coran. En 3:199, « sari'u al-hisab ». En 5:4, « sari'u al-hisab ». En 6:62, « wa-huwa asra'u al-hasibin » (Il est le plus rapide des compteurs). Le Coran utilise sari' comme attribut divin de rapidite efficace. La hate/precipitation est un sens humain — le Coran ne qualifie pas Dieu de precipite mais de rapide. La vitesse divine est parfaite, sans erreur ni precipitation.",
      axe5_frequence: "Pour la mission du khalifa, la rapidite du compte divin rappelle que les oeuvres du khalifa seront evaluees sans delai. La hate/precipitation est un defaut humain — le khalifa ne doit pas agir par precipitation mais avec reflexion. La rapidite divine est un modele d'efficacite, pas de hate. Le khalifa aspire a la rapidite dans le bien (comme Dieu est rapide en compte) mais evite la precipitation (qui est un defaut)."
    }
  },

  // ===================== V203 (vid=210) =====================
  {
    verse_id: 210, word_key: "athm", position: 11, concept: "Chatiment/Consequence",
    axes: athm_chatiment_axes
  },
  {
    verse_id: 210, word_key: "athm", position: 16, concept: "Chatiment/Consequence",
    axes: athm_chatiment_axes
  },
  {
    verse_id: 210, word_key: "athm", position: 11, concept: "Culpabilite/Remords",
    axes: athm_culpabilite_axes
  },
  {
    verse_id: 210, word_key: "athm", position: 16, concept: "Culpabilite/Remords",
    axes: athm_culpabilite_axes
  },
  {
    verse_id: 210, word_key: "edd", position: 5, concept: "Preparation",
    axes: {
      axe1_verset: "Le concept de preparation est inadapte pour le verset 2:203. Le mot ma'dudat est un participe passif de la racine e-d-d signifiant « comptes, denombrables ». Le champ lexical (jours, comptes, invoquer, Dieu) est celui de la temporalite limitee du dhikr pendant le pelerinage. La preparation n'est pas le sujet — le verset parle de jours dont le nombre est defini, pas de jours de preparation. Le participe passif (ma'dud = compte) exclut le sens actif de preparer.",
      axe2_voisins: "Les versets 2:201-202 parlent de l'invocation et du compte divin. Le verset 2:203 prescrit le dhikr pendant un nombre precis de jours. Les versets voisins ne contiennent aucune notion de preparation — le contexte est celui de l'execution des rites, pas de leur preparation. La preparation precede les rites ; le verset 203 est dans la phase d'execution et de conclusion du pelerinage.",
      axe3_sourate: "La racine e-d-d dans la sourate al-Baqarah apparait en 2:80 (ayyaman ma'dudata = des jours comptes) et 2:184 (ayyaman ma'dudat = des jours comptes, pour le jeune). Dans les deux cas, le sens est « denombrables, en nombre limite ». La sourate utilise e-d-d exclusivement pour le nombre, pas pour la preparation. Le concept de preparation n'apparait pas dans les usages de cette racine dans la sourate.",
      axe4_coherence: "La racine e-d-d apparait environ 57 fois dans le Coran. En 3:200, « i'ddat al-shuhur » (le nombre des mois). En 18:22, « i'ddatuhum » (leur nombre). En 72:28, « ahsa kulla shay'in adadan » (Il a denombre toute chose en nombre). Le Coran utilise e-d-d massivement pour le denombrement et le calcul, pas pour la preparation. La preparation est portee par d'autres racines (e-d-d avec un autre sens existe mais n'est pas celui du participe ma'dud).",
      axe5_frequence: "Pour la mission du khalifa, le denombrement des jours montre que la mission a des cadres temporels precis. Le khalifa ne prepare pas indefiniment — il agit dans des temps comptes. La preparation est une phase distincte de l'execution. Le verset 2:203 est dans la phase d'execution (les jours du pelerinage sont la), pas dans la phase de preparation. Le khalifa respecte les echeances que Dieu a comptees."
    }
  },
  {
    verse_id: 210, word_key: "elm", position: 24, concept: "Marque/Signe",
    axes: {
      axe1_verset: "Le concept de marque/signe est un sens secondaire de la racine e-l-m qui ne s'applique pas au verset 2:203. Le verbe i'lamu est un imperatif 2MP signifiant « sachez ». Le champ lexical (sachez, que vous, vers Lui, serez rassembles) est celui de la connaissance et de la certitude, pas du signe visible. L'imperatif « sachez » est un acte cognitif, pas l'imposition d'une marque ou la reconnaissance d'un signe. Le signe (alam) est un derive nominal de la racine mais le verbe alima est different.",
      axe2_voisins: "Les versets voisins ne contiennent pas de signes ou de marques visibles. Le verset 2:202 parle du compte rapide. Le verset 2:204 parle de l'hypocrite dont la parole plait. Le passage est dans un registre de connaissance et de conscience, pas de signes exterieurs. L'imperatif « sachez » demande une certitude interieure, pas l'identification d'un signe exterieur.",
      axe3_sourate: "La racine e-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:13, « a-la innahum hum al-sufaha' wa-lakin la ya'lamun » (ce sont eux les insenses mais ils ne savent pas). En 2:30, « inni a'lamu ma la ta'lamun » (Je sais ce que vous ne savez pas). La sourate utilise e-l-m massivement pour le savoir et la connaissance. Le sens de marque/signe est marginal et ne correspond pas a l'usage de la sourate.",
      axe4_coherence: "La racine e-l-m apparait environ 854 fois dans le Coran. Le sens dominant est savoir, connaitre, apprendre. En 55:4, « allamahu al-bayan » (Il lui a enseigne l'expression claire). En 96:5, « allama al-insana ma lam ya'lam » (Il a enseigne a l'homme ce qu'il ne savait pas). Le concept de marque/signe est semantiquement distinct — il passe par le derive alam (etendard, signe) qui est un sous-produit de la racine, pas son sens premier.",
      axe5_frequence: "Pour la mission du khalifa, la connaissance (ilm) est le fondement de la mission — le khalifa doit savoir pour agir justement. Le concept de marque/signe est une dimension marginale qui n'eclaire pas la mission. Le verset 2:203 ordonne aux croyants de savoir qu'ils seront rassembles vers Dieu — c'est une certitude qui oriente l'action du khalifa, pas un signe exterieur a identifier."
    }
  },
  {
    verse_id: 210, word_key: "hšr", position: 27, concept: "Sens isole/Expulser",
    axes: {
      axe1_verset: "Le concept d'expulsion est un sens possible de la racine h-sh-r mais le verset 2:203 utilise tuhsharuna (vous serez rassembles) dans le sens du rassemblement eschatologique. Le champ lexical (sachez, vers Lui, vous serez rassembles) est celui du retour final a Dieu, pas de l'expulsion. Le passif tuhsharuna (on vous rassemblera) indique un mouvement vers un point central (Dieu), pas un eloignement ou une expulsion d'un lieu. L'expulsion est un mouvement centrifuge, le hashr eschatologique est centripete.",
      axe2_voisins: "Les versets voisins ne contiennent aucune notion d'expulsion. Le verset 2:202 parle du compte rapide. Le verset 2:204 parle de l'hypocrite. Le contexte est celui de la conclusion du pelerinage et du rappel de la fin derniere — le rassemblement final vers Dieu. L'expulsion (faire sortir quelqu'un d'un lieu) n'a pas de support contextuel dans ce passage.",
      axe3_sourate: "La racine h-sh-r dans la sourate al-Baqarah apparait aussi en 2:85, ou l'expulsion (ikhraj) est mentionnee a cote du hashr. Mais en 2:203, le hashr est clairement eschatologique — « ilayhi tuhsharuna » (vers Lui vous serez rassembles). La sourate distingue le hashr comme rassemblement et le ikhraj/tard comme expulsion. Le verset 2:203 utilise le hashr dans son sens premier de rassemblement.",
      axe4_coherence: "La racine h-sh-r apparait environ 44 fois dans le Coran. En 6:111, « hasharna alayhim » (Nous aurions rassemble pour eux). En 81:5, « wa-idha al-wuhushu hushirat » (quand les betes sauvages seront rassemblees). Le sens dominant est le rassemblement, en particulier le rassemblement eschatologique du Jour dernier. Le sens d'expulser est marginal et apparait dans des contextes tres specifiques (hashr de Banu Nadir en 59:2), pas dans le registre eschatologique.",
      axe5_frequence: "Pour la mission du khalifa, le rassemblement final vers Dieu est le rappel que la mission a une echeance. Le khalifa sera rassemble vers Dieu avec tous les humains pour rendre des comptes. L'expulsion est un acte de rupture — le rassemblement est un acte de reunion. La mission du khalifa vise le rassemblement des humains vers la justice, pas leur expulsion. Le hashr eschatologique motive la responsabilite du khalifa."
    }
  },
  {
    verse_id: 210, word_key: "ywm", position: 4, concept: "Evenement/Moment marquant",
    axes: {
      axe1_verset: "Le concept d'evenement/moment marquant est un sens trop specifique pour le verset 2:203. Le mot ayyamin (jours, pluriel) est utilise dans le sens temporel ordinaire — des jours comptes pendant lesquels on invoque Dieu. Le champ lexical (invoquer, Dieu, jours, comptes) est celui de la temporalite rituelle, pas de l'evenement exceptionnel. Les ayyam ici sont des jours du calendrier (les 11, 12, 13 de Dhul-Hijja), pas des evenements marquants.",
      axe2_voisins: "Les versets voisins ne suggerent pas d'evenements marquants mais une routine rituelle : invoquer Dieu, se hater ou retarder le depart. Le verset 2:202 parle du compte des oeuvres acquises. Le contexte est quotidien et pratique — des jours comptes pour le dhikr — pas des moments exceptionnels ou historiques. L'evenement marquant connote l'exceptionnel, alors que ces jours sont reguliers et annuels.",
      axe3_sourate: "La racine y-w-m dans la sourate al-Baqarah apparait massivement (2:8, 2:48, 2:62, 2:85, 2:113, 2:126, 2:174, 2:184, 2:203, 2:212, 2:254, 2:281). Le yawm designe tantot le Jour du Jugement (yawm al-qiyama), tantot des jours ordinaires (ayyam ma'dudat). En 2:203, le pluriel ayyam avec l'adjectif ma'dudat (comptes) indique des jours ordinaires en nombre limite. Le concept d'evenement marquant conviendrait mieux au Jour du Jugement, pas aux jours du pelerinage.",
      axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. Le yawm est le mot temporel le plus frequent. Le Coran utilise yawm pour des jours ordinaires (ayyam) et pour des moments eschatologiques (yawm al-qiyama, yawm al-din). La distinction entre jours ordinaires et moments marquants est contextuelle. En 2:203, le contexte rituel impose le sens de jours ordinaires comptes. Le concept d'evenement/moment marquant surcharge le texte d'une signification que le contexte ne supporte pas.",
      axe5_frequence: "Pour la mission du khalifa, les jours comptes montrent que la mission s'exerce dans le temps quotidien, pas seulement dans les moments exceptionnels. Le khalifa invoque Dieu chaque jour, pas seulement lors d'evenements marquants. Le concept d'evenement/moment marquant reduirait la portee du dhikr a l'exceptionnel, alors que le verset demande un dhikr durant des jours definis — une pratique reguliere, disciplinee, inscrite dans le quotidien."
    }
  },

  // ===================== V205 (vid=212) =====================
  {
    verse_id: 212, word_key: "nsl", position: 12, concept: "Chute/Detachement",
    axes: {
      axe1_verset: "Le concept de chute/detachement est le sens physique originel de la racine n-s-l (nasala = tomber, se detacher). Mais le verset 2:205 utilise al-nasl dans le sens de progeniture/descendance. Le champ lexical (corrompre, terre, detruire, recoltes, progeniture, Dieu n'aime pas la corruption) est celui de la destruction de la vie et de la civilisation. Le nasl est ici la descendance humaine ou animale — ce que l'hypocrite detruit. La chute physique ne correspond pas au contexte de destruction biologique.",
      axe2_voisins: "Le verset 2:204 introduit l'hypocrite dont la parole plait. Le verset 2:206 decrit sa reaction orgueilleuse quand on lui dit de craindre Dieu. Le verset 2:205 est entre les deux — il decrit les actions destructrices de l'hypocrite sur terre. La destruction des recoltes (harth) et de la progeniture (nasl) est un acte de corruption. La chute/detachement n'a pas de lien avec cette description de destruction systematique.",
      axe3_sourate: "La racine n-s-l apparait dans la sourate al-Baqarah uniquement en 2:205. Le nasl est associe au harth (recoltes) pour former un binome : recoltes + progeniture = base de la civilisation. La sourate al-Baqarah pose les fondements de la civilisation du khalifa — detruire les recoltes et la progeniture, c'est detruire la civilisation elle-meme. Le concept de chute est etranger a cette thematique.",
      axe4_coherence: "La racine n-s-l apparait environ 12 fois dans le Coran. En 21:96, « min kulli hadabin yansilun » (de chaque colline ils deferleront) — ici le sens est glisser/deferler, proche de la chute. En 36:77, « khalaqnahu min nutfatin » (Nous l'avons cree d'une semence) — ici le lien est avec la generation. Le Coran utilise la racine dans les deux registres mais le contexte de 2:205 (destruction des recoltes et de la progeniture) impose le sens biologique de descendance, pas le sens physique de chute.",
      axe5_frequence: "Pour la mission du khalifa, la progeniture (nasl) est la continuite de la civilisation. Le khalifa protege les recoltes et la progeniture contre la corruption. La chute/detachement n'apporte pas cette dimension de continuite civilisationnelle. Le concept retenu de progeniture est directement lie a la mission du khalifa : assurer la perennite de l'espece humaine et de ses moyens de subsistance sur terre."
    }
  },
  {
    verse_id: 212, word_key: "wly", position: 2, concept: "Autorite",
    axes: {
      axe1_verset: "Le concept d'autorite est un sens central de la racine w-l-y (wali = celui qui a autorite, tuteur, protecteur). Mais le verset 2:205 utilise tawalla (Form V) qui signifie « se detourner, tourner le dos ». Le champ lexical (quand il tourne le dos, s'efforce, corrompre, detruire) montre que le verbe tawalla designe ici l'action de se detourner — quand l'hypocrite quitte la presence du Prophete, il agit en destructeur. L'autorite est un sens de la racine, pas de cette forme verbale dans ce contexte.",
      axe2_voisins: "Le verset 2:204 decrit l'hypocrite dont la parole plait « dans la vie d'ici-bas ». Le verset 2:205 commence par « quand il tourne le dos » — le tawalli est le moment ou l'hypocrite quitte la scene publique et revele sa vraie nature. Les versets voisins construisent un contraste entre apparence (parole plaisante) et realite (corruption). L'autorite n'est pas le sujet de ce contraste — c'est le detournement et l'hypocrisie.",
      axe3_sourate: "La racine w-l-y dans la sourate al-Baqarah apparait en 2:107, 2:120, 2:205, 2:257, 2:282. En 2:257, « Allahu waliyyu alladhina amanu » (Dieu est le protecteur de ceux qui croient). En 2:205, tawalla est un Form V reflexif qui inverse le sens : au lieu de se rapprocher (wali = proche), on se detourne. La sourate utilise w-l-y dans les deux directions — proximite/protection et detournement. Le concept d'autorite ne couvre que la dimension de proximite, pas celle de detournement.",
      axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Le sens d'autorite est frequent (waliyy, wali, awliya'). Mais la Form V (tawalla) designe le plus souvent le detournement : en 3:63, « fa-in tawallaw » (s'ils se detournent). En 5:49, « fa-in tawallaw » (s'ils se detournent). Le Coran utilise tawalla systematiquement pour le detournement, pas pour l'exercice de l'autorite. Le verset 2:205 suit cet usage constant.",
      axe5_frequence: "Pour la mission du khalifa, le detournement (tawalli) est l'inverse de la mission. Le khalifa ne se detourne pas de sa responsabilite — il y fait face. L'hypocrite qui tawalla (se detourne) agit en anti-khalifa : il corrompt au lieu de construire, il detruit au lieu de preserver. Le concept d'autorite est pertinent pour le khalifa mais pas pour decrire l'action de l'hypocrite dans ce verset — l'hypocrite n'exerce pas l'autorite, il se detourne."
    }
  },

  // ===================== V206 (vid=213) =====================
  {
    verse_id: 213, word_key: "axḏ", position: 6, concept: "Chatiment",
    axes: {
      axe1_verset: "Le concept de chatiment est un sens derive de la racine a-kh-dh (prendre, saisir). Le verset 2:206 utilise akhadhat-hu (elle s'est emparee de lui) avec pour sujet al-izzatu bi-al-ithmi (la puissance/orgueil par la faute). Le champ lexical (quand on lui dit premunit-toi de Dieu, s'empare de lui, puissance, faute, Gehenne) montre que le « prendre » est ici une emprise psychologique — l'orgueil s'empare de l'hypocrite. Le chatiment viendra apres (la Gehenne), mais l'akhdh ici est l'emprise de l'orgueil, pas un chatiment.",
      axe2_voisins: "Le verset 2:205 decrit les actions destructrices de l'hypocrite. Le verset 2:207 presente le contraste — celui qui se sacrifie pour l'agrement de Dieu. Le verset 2:206 est le moment ou l'hypocrite refuse le rappel et se laisse saisir par l'orgueil. Le chatiment (la Gehenne) est mentionne a la fin du verset comme consequence, mais l'akhdh du debut est l'emprise, pas le chatiment. Le verset distingue clairement la cause (akhdh de l'orgueil) et la consequence (Gehenne).",
      axe3_sourate: "La racine a-kh-dh dans la sourate al-Baqarah apparait en 2:63, 2:67, 2:80, 2:83, 2:84, 2:93, 2:206, 2:255, 2:275, 2:286. En 2:255, « la ta'khudhuhu sinatun wa-la nawm » (ni somnolence ni sommeil ne Le saisit). En 2:286, « la tu'akhidhna in nasina » (ne nous punis pas si nous oublions) — ici le sens de chatiment est present dans la Form III mu'akhadha. Mais en 2:206, la Form I avec sujet « l'orgueil » indique l'emprise, pas la punition.",
      axe4_coherence: "La racine a-kh-dh apparait environ 273 fois dans le Coran. En 7:73, « fa-akhadhathumu al-rajfatu » (le seisme les saisit) — ici le chatiment divin saisit les peuples. En 11:67, « akhadhat alladhina zalamu al-sayhatu » (le cri saisit les injustes). Le sens de chatiment est present quand le sujet de akhdh est un fleau divin. En 2:206, le sujet est l'orgueil humain — c'est une emprise psychologique, pas un fleau divin. Le chatiment est plausible pour la racine mais pas pour ce verset precis.",
      axe5_frequence: "Pour la mission du khalifa, le chatiment est une dimension de la justice — le khalifa peut chatier les corrupteurs. Mais le verset 2:206 montre un mecanisme plus subtil : l'orgueil s'empare de celui qui refuse le rappel. Le khalifa doit comprendre que le refus de la taqwa n'est pas seulement punissable — il est aussi un symptome d'emprise de l'orgueil. La mission du khalifa inclut le rappel (comme dans « ittaqi Allah ») autant que le chatiment."
    }
  },
  {
    verse_id: 213, word_key: "mhd", position: 15, concept: "Preparation/Aplanissement",
    axes: {
      axe1_verset: "Le concept de preparation/aplanissement est le sens verbal originel de la racine m-h-d (mahada = aplanir, preparer, etendre). Mais le verset 2:206 utilise al-mihad dans le sens de lit/couche/berceau — le resultat de l'action d'aplanir. Le champ lexical (Gehenne, quel mauvais lit) montre que mihad est ici le lieu de repos eternel (la Gehenne comme lit). La preparation est l'action, le mihad est le produit fini. Le verset parle du produit (le lit), pas de l'action (preparer).",
      axe2_voisins: "Les versets 2:204-205 decrivent les actes de l'hypocrite. Le verset 2:207 contraste avec celui qui se sacrifie. Le verset 2:206 conclut la description de l'hypocrite par sa destination finale : la Gehenne comme lit. Le voisinage est celui de la consequence (ou aboutira l'hypocrite), pas de la preparation. Le mihad est la destination, pas le processus. Le verbe la-bi'sa (quel mauvais) porte un jugement sur le resultat, pas sur le processus.",
      axe3_sourate: "La racine m-h-d apparait dans la sourate al-Baqarah uniquement en 2:206. Le mihad est un mot rare dans la sourate, utilise comme image forte : la Gehenne est un lit, un berceau — un lieu ou l'on repose indefiniment. La sourate utilise des images concretes (feu, chatiment, Gehenne) pour decrire les consequences des actes. Le concept de preparation/aplanissement n'est pas l'image vehiculee ici — c'est le repos force dans un mauvais lit.",
      axe4_coherence: "La racine m-h-d apparait environ 11 fois dans le Coran. En 3:197, « wa-bi'sa al-mihad » (quel mauvais lit). En 13:18, « wa-bi'sa al-mihad ». En 38:56, « fa-bi'sa al-mihad ». Le Coran utilise la formule « bi'sa al-mihad » comme expression fixe pour la Gehenne-comme-lit. Le sens de preparation/aplanissement est absent de ces occurrences — le mihad est toujours le produit (le lit), jamais l'action (preparer). Le concept de lit/couche est le sens retenu dans l'ensemble du Coran.",
      axe5_frequence: "Pour la mission du khalifa, le mihad est l'aboutissement — le khalifa prepare (mahada) son mihad par ses actes. Mais le verset ne parle pas de la preparation : il decrit le resultat. Le mauvais mihad de l'hypocrite est la consequence de ses actes destructeurs. Le khalifa doit savoir que ses actes preparent son mihad — mais le concept ici est le resultat (le lit), pas le processus (la preparation). La distinction entre processus et resultat est une nuance importante."
    }
  },

  // ===================== V207 (vid=214) =====================
  {
    verse_id: 214, word_key: "ebd", position: 13, concept: "Adoration/Devotion",
    axes: {
      axe1_verset: "Le concept d'adoration/devotion est un sens central de la racine e-b-d mais le verset 2:207 utilise al-ibad (les serviteurs) comme nom pluriel designant les etres humains en tant que serviteurs de Dieu. Le champ lexical (vend son ame, quete de l'agrement, Dieu, compatissant, serviteurs) montre que al-ibad designe ici les personnes envers qui Dieu est compatissant. L'adoration est l'acte (ibada), les serviteurs sont les agents (ibad). Le verset parle des agents, pas de l'acte.",
      axe2_voisins: "Le verset 2:206 decrivait l'hypocrite et sa destination en Gehenne. Le verset 2:207 contraste avec celui qui se sacrifie pour l'agrement de Dieu — et conclut que Dieu est compatissant envers les serviteurs. Les versets voisins construisent un contraste entre l'hypocrite (qui corrompt) et le devot (qui se sacrifie). Les ibad sont les beneficiaires de la compassion divine, pas les pratiquants d'un acte d'adoration specifique.",
      axe3_sourate: "La racine e-b-d dans la sourate al-Baqarah apparait en 2:21, 2:83, 2:90, 2:96, 2:138, 2:172, 2:186, 2:207. En 2:21, « u'budu rabbakum » (adorez votre Seigneur). En 2:186, « idha sa'alaka ibadi » (quand Mes serviteurs te demandent). La sourate utilise e-b-d dans les deux sens — adoration (ibada) et serviteurs (ibad). En 2:207, le pluriel al-ibad est clairement le sens de serviteurs, pas d'adoration. La forme du mot (ibad vs ibada) tranche.",
      axe4_coherence: "La racine e-b-d apparait environ 275 fois dans le Coran. Le pluriel ibad designe les serviteurs de Dieu : en 2:207, 3:30, 8:51, 22:10, 40:44, 50:29. La construction « ra'uf bi-al-ibad » (compatissant envers les serviteurs) est une expression qui revient en 2:207, 3:30, 22:65. Le Coran distingue nettement entre ibada (acte d'adoration) et ibad (les serviteurs comme personnes). Le concept d'adoration/devotion est l'acte, pas la personne — le verset parle de la personne.",
      axe5_frequence: "Pour la mission du khalifa, les serviteurs (ibad) sont ceux envers qui Dieu est compatissant — et envers qui le khalifa doit exercer sa mission de justice. Le concept de servitude (ibad) eclaire la mission : le khalifa est lui-meme un serviteur, et il sert d'autres serviteurs. L'adoration/devotion est l'acte par lequel on sert Dieu, mais le verset souligne la compassion de Dieu envers ses serviteurs, pas leur acte d'adoration."
    }
  },
  {
    verse_id: 214, word_key: "rwf", position: 11, concept: "Douceur/Delicatesse",
    axes: {
      axe1_verset: "Le concept de douceur/delicatesse est un sens voisin de la racine r-w-f mais le verset 2:207 utilise ra'uf (tres compatissant), un adjectif intensif (fa'ul) qui depasse la simple douceur. Le champ lexical (vend son ame, agrement de Dieu, compatissant, serviteurs) est celui de la compassion divine intense, pas de la douceur. La ra'fa est une compassion qui s'emeut et qui intervient — plus intense que la simple douceur qui est passive. Ra'uf qualifie Dieu comme profondement affecte par l'etat de ses serviteurs.",
      axe2_voisins: "Le verset 2:206 montrait la durete du sort de l'hypocrite (Gehenne). Le verset 2:207 contraste avec la compassion divine envers celui qui se sacrifie. La ra'fa divine est la reponse au sacrifice du croyant — Dieu est compatissant envers celui qui donne tout. La douceur/delicatesse serait trop faible pour decrire cette reponse divine au sacrifice total. Le voisinage demande un terme intense, pas doux.",
      axe3_sourate: "La racine r-w-f apparait dans la sourate al-Baqarah en 2:143 (« inna Allaha bi-al-nasi la-ra'uf rahim ») et 2:207. Les deux occurrences qualifient Dieu de ra'uf — tres compatissant. La sourate presente la ra'fa comme un attribut divin majeur, plus intense que la simple misericorde (rahma). La douceur/delicatesse n'est pas la meme chose que la compassion — la douceur est un mode d'action, la compassion est un etat affectif intense qui pousse a agir.",
      axe4_coherence: "La racine r-w-f apparait environ 13 fois dans le Coran. En 9:117, « innahu bihim ra'uf rahim » (certes Il est envers eux compatissant et misericordieux). En 22:65, « inna Allaha bi-al-nasi la-ra'uf rahim ». En 59:10, « innaka ra'uf rahim ». Le Coran utilise ra'uf exclusivement comme attribut divin d'une intensite superieure a la simple douceur. La ra'fa est la compassion qui fait trembler — pas la douceur qui adoucit. La distinction est dans l'intensite.",
      axe5_frequence: "Pour la mission du khalifa, la compassion divine (ra'fa) est un modele pour le khalifa : il doit etre compatissant envers ceux qu'il gouverne. La douceur/delicatesse est une qualite desirable mais insuffisante — le khalifa doit avoir la ra'fa, une compassion active qui le pousse a intervenir pour proteger les serviteurs. La ra'fa est un moteur d'action, pas seulement une qualite de temperament."
    }
  },

  // ===================== V208 (vid=215) =====================
  {
    verse_id: 215, word_key: "amn", position: 2, concept: "Securite/Confiance",
    axes: {
      axe1_verset: "Le concept de securite/confiance est le sens de base de la racine a-m-n (aman = securite, amana = faire confiance). Mais le verset 2:208 utilise amanu (Form IV, accompli 3MP) dans le sens de « ils ont accorde la confiance/ils ont cru ». Le champ lexical (o ceux qui ont cru, entrez dans la paix entierement, ne suivez pas le diable) est celui de la foi comme adhesion active, pas de la securite passive. La Form IV (a'mana) est causative — faire devenir en securite, d'ou accorder sa confiance, croire. Le concept retenu est plus precis.",
      axe2_voisins: "Le verset 2:207 parlait de celui qui se sacrifie pour Dieu. Le verset 2:209 avertit ceux qui glissent apres les preuves. Le verset 2:208 s'adresse aux croyants (alladhina amanu) — l'interpellation suppose que la foi est acquise et demande un pas supplementaire : entrer dans la paix entierement. La securite/confiance est un prealable acquis, pas le sujet du verset. Le verset demande d'aller au-dela de la simple confiance vers l'engagement total.",
      axe3_sourate: "La racine a-m-n est l'une des plus frequentes de la sourate al-Baqarah (2:3, 2:8, 2:13, 2:25, 2:62, 2:76, 2:82, 2:91, 2:93, 2:104, 2:136, 2:165, 2:177, 2:208, 2:228, 2:264, 2:285). L'interpellation « ya ayyuha alladhina amanu » est une formule recurrente qui identifie les croyants comme groupe. La sourate utilise la Form IV amana pour la foi-adhesion, pas pour la securite. Le concept de securite apparait dans d'autres contextes (2:125, « ja'ala al-bayta amnan » = il fit de la Maison un lieu sur).",
      axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. La Form IV (amana) domine avec le sens de croire/accorder la confiance. En 2:285, « kullu amana bi-Allahi » (chacun a cru en Dieu). Le sens de securite (aman) est present mais distinct : en 2:125, « mathaba li-al-nasi wa-amnan » (un lieu de retour et de securite). Le Coran distingue nettement iman (foi) et aman (securite). Le verset 2:208 utilise amanu au sens de foi, pas de securite.",
      axe5_frequence: "Pour la mission du khalifa, la securite est un objectif de la mission (assurer la securite des gens), mais la foi (iman) est le fondement de la mission. Le verset 2:208 s'adresse aux croyants pour leur demander l'engagement total dans la paix. La securite/confiance est le socle, l'engagement total est l'objectif. Le khalifa croit d'abord (iman), puis entre dans la paix entierement (silm) — les deux sont lies mais distincts."
    }
  },
  {
    verse_id: 215, word_key: "edw", position: 13, concept: "Transgression/Exces",
    axes: {
      axe1_verset: "Le concept de transgression/exces est un sens de la racine e-d-w (a'tada = transgresser, depasser les limites). Mais le verset 2:208 utilise aduwwun (ennemi) — un nom d'agent derive de la meme racine mais avec un sens different. Le champ lexical (diable, ennemi, manifeste) montre que aduww designe ici l'adversaire declare, pas un acte de transgression. L'ennemi (aduww) est celui qui manifeste de l'hostilite — la transgression (udwan) est l'acte de depasser les limites. Le verset parle de la personne hostile, pas de l'acte transgressif.",
      axe2_voisins: "Le verset 2:207 parlait de la compassion de Dieu envers les serviteurs. Le verset 2:209 avertit contre le glissement apres les preuves. Le verset 2:208 avertit contre le diable comme ennemi. Le contexte voisin est celui de la mise en garde contre un adversaire (le diable), pas contre un acte de transgression. L'ennemi est une personne, la transgression est un acte — le verset identifie une personne.",
      axe3_sourate: "La racine e-d-w dans la sourate al-Baqarah apparait en 2:36 (aduww = ennemi), 2:98 (aduww = ennemi), 2:168 (aduww = ennemi), 2:178 (i'tada = transgresser), 2:190 (i'tadu = transgresser), 2:193 (al-zalimin = les injustes, contexte d'udwan), 2:208 (aduww = ennemi). La sourate utilise les deux sens — ennemi et transgression — mais le derive aduww est toujours « ennemi ». Le concept de transgression est porte par les formes verbales (i'tada), pas par le nom aduww.",
      axe4_coherence: "La racine e-d-w apparait environ 106 fois dans le Coran. Le mot aduww (ennemi) est le derive le plus frequent : en 2:36, 2:98, 2:168, 4:101, 6:112, 7:22, 20:39, 35:6, 36:60, 43:62. Le diable est qualifie de aduww (ennemi) dans de nombreux versets. La transgression (udwan, i'tida') utilise les memes racines mais dans des formes grammaticales distinctes. Le verset 2:208 utilise aduww — le sens est ennemi, pas transgression.",
      axe5_frequence: "Pour la mission du khalifa, la transgression est un acte que le khalifa doit combattre. Mais le verset 2:208 identifie l'ennemi — le diable — qui pousse a la transgression. Le khalifa doit connaitre son ennemi (aduww) pour comprendre d'ou vient la transgression. Le concept d'ennemi est plus strategique — il identifie l'adversaire de la mission. La transgression est un symptome, l'ennemi est la source."
    }
  },
  {
    verse_id: 215, word_key: "kff", position: 6, concept: "Retenue/Abstention",
    axes: {
      axe1_verset: "Le concept de retenue/abstention est le sens de base de la racine k-f-f (kaffa = retenir, empecher, cesser). Mais le verset 2:208 utilise kaffatan (entierement, totalement) — un derive adverbial qui signifie « tous ensemble, entierement ». Le champ lexical (entrez dans la paix entierement) montre que kaffatan qualifie la maniere d'entrer — sans reserve, sans exception. Le mot ne signifie pas retenue ou abstention ici mais totalite. La retenue est le sens premier de la racine, la totalite (kaffatan) est un sens derive semantiquement inverse.",
      axe2_voisins: "Le verset 2:207 parlait de celui qui vend son ame pour Dieu — un engagement total. Le verset 2:208 demande d'entrer dans la paix entierement (kaffatan) — la meme exigence de totalite. Le voisinage est celui de l'engagement complet, pas de la retenue. La retenue/abstention serait une demi-mesure — le verset demande le contraire : pas de retenue, l'engagement entier.",
      axe3_sourate: "La racine k-f-f apparait dans la sourate al-Baqarah en 2:208 et 2:233. En 2:233, « idha sallamtum ma ataytum » (si vous avez remis ce que vous deviez) — le contexte est different. En 2:208, kaffatan est un adverbe de totalite. La sourate ne developpe pas le sens de retenue/abstention dans ce passage. Le concept est possible pour la racine mais inadapte a cet usage particulier.",
      axe4_coherence: "La racine k-f-f apparait environ 15 fois dans le Coran. En 4:77, « kuffu aydiyakum » (retenez vos mains) — ici le sens est bien la retenue. En 33:25, « wa-kaffa Allahu al-mu'minina al-qital » (Dieu a epargne aux croyants le combat) — la retenue divine. Mais kaffatan (entierement) est un usage specifique : en 2:208, 21:108, 34:28. Le Coran utilise kaffatan comme adverbe de totalite, distinct du verbe kaffa (retenir). Le derive adverbial a pris un sens propre.",
      axe5_frequence: "Pour la mission du khalifa, la totalite de l'engagement (kaffatan) est essentielle — le khalifa entre dans la mission entierement, pas partiellement. La retenue/abstention serait un frein a la mission. Le verset 2:208 demande l'engagement total dans la paix/soumission. Le khalifa ne retient pas son adhesion — il la donne entierement. La retenue a sa place dans d'autres contextes (retenir ses mains en 4:77), pas ici."
    }
  },
  {
    verse_id: 215, word_key: "khtw", position: 9, concept: "Trace/Chemin",
    axes: {
      axe1_verset: "Le concept de trace/chemin est un sens derive de la racine kh-t-w (khatwa = pas, enjambee). La trace est ce que le pas laisse derriere lui. Mais le verset 2:208 utilise khutuwat (les pas) au sens de methode/voie du diable — les pas sont les etapes que le diable fait suivre. Le champ lexical (ne suivez pas, les pas, le diable, ennemi) montre que khutuwat designe les etapes actives de la methode du diable, pas les traces passives qu'il laisse. La trace est un resultat, les pas sont une action.",
      axe2_voisins: "Le verset 2:207 parlait de la quete de l'agrement de Dieu. Le verset 2:209 avertit contre le glissement. Le verset 2:208 oppose deux chemins : la paix (silm) et les pas du diable (khutuwat al-shaytan). Les versets voisins construisent une opposition entre deux voies. La trace est un indice posterieur — les pas sont la voie elle-meme que l'on suit activement. Le verset demande de ne pas suivre (la tattabi'u) les pas — c'est un acte actif de suivi, pas une lecture passive de traces.",
      axe3_sourate: "La racine kh-t-w apparait dans la sourate al-Baqarah en 2:168 et 2:208. En 2:168, « wa-la tattabi'u khutuwati al-shaytani » (et ne suivez pas les pas du diable) — meme formule exacte. La sourate repete l'avertissement contre les khutuwat du diable pour insister sur le danger. La trace/chemin est un sens possible mais les khutuwat sont les etapes concretes et progressives de la tentation, pas des traces a suivre.",
      axe4_coherence: "La racine kh-t-w apparait environ 7 fois dans le Coran, toujours dans l'expression « khutuwat al-shaytan ». En 6:142, 24:21, 2:168, 2:208. Le Coran utilise khutuwat exclusivement pour les pas du diable — une methode progressive de tentation. La trace/chemin est un concept trop general. Les khutuwat sont specifiques — chaque pas est une etape de la methode diabolique (doute, desir, justification, passage a l'acte). Le Coran n'utilise pas cette racine pour des traces physiques.",
      axe5_frequence: "Pour la mission du khalifa, les pas du diable sont les etapes de la corruption que le khalifa doit combattre. La trace est passive — les pas sont actifs. Le khalifa ne cherche pas des traces du diable posterieurement — il empeche les gens de suivre les pas du diable en temps reel. La mission est preventive (ne pas suivre) plus que detective (chercher des traces). Le concept de pas/etapes est plus actionnable que celui de trace."
    }
  },
  {
    verse_id: 215, word_key: "slm", position: 5, concept: "Integrite/Sante",
    axes: {
      axe1_verset: "Le concept d'integrite/sante est un sens de la racine s-l-m (salima = etre sain, intact). Mais le verset 2:208 utilise al-silm dans le sens de paix/soumission. Le champ lexical (entrez dans la paix entierement, ne suivez pas le diable) montre que al-silm est un etat collectif ou l'on entre, pas une qualite personnelle d'integrite. L'integrite est un etat individuel de sante/intactite. La paix/soumission est un etat collectif d'adhesion complete au projet divin.",
      axe2_voisins: "Le verset 2:207 parlait de celui qui vend son ame pour l'agrement de Dieu. Le verset 2:209 avertit contre le glissement. Le verset 2:208 demande l'entree dans la paix — un engagement collectif total. Les versets voisins construisent une progression : sacrifice individuel (207) → engagement collectif (208) → mise en garde (209). L'integrite/sante est une qualite statique, le silm est un espace dynamique dans lequel on entre.",
      axe3_sourate: "La racine s-l-m dans la sourate al-Baqarah apparait en 2:71, 2:112, 2:128, 2:131, 2:132, 2:133, 2:136, 2:208. En 2:131, « aslimu » (soumets-toi) — le sens est la soumission a Dieu. En 2:112, « man aslama wajhahu li-Allahi » (celui qui soumet son visage a Dieu). La sourate utilise s-l-m principalement pour la soumission a Dieu (islam). Le concept d'integrite/sante n'est pas developpe dans la sourate pour cette racine.",
      axe4_coherence: "La racine s-l-m apparait environ 140 fois dans le Coran. Le Coran utilise s-l-m dans trois registres principaux : la paix (salam), la soumission (islam/aslama), et la sante/securite (salama). En 2:208, le mot al-silm est debattu entre « paix » et « soumission (islam) ». L'integrite/sante est un troisieme sens possible mais marginal dans ce contexte. Le Coran utilise le derive salim pour l'integrite (qalb salim = coeur sain), pas le mot silm.",
      axe5_frequence: "Pour la mission du khalifa, la paix (silm) est un objectif de la mission — le khalifa travaille pour la paix et la soumission a Dieu. L'integrite/sante est une qualite desirable mais n'est pas l'objet de l'injonction du verset. Le verset demande d'entrer dans le silm, pas d'etre en bonne sante. La mission du khalifa est de construire la paix et la soumission collective a Dieu sur terre — c'est un projet politique et spirituel, pas medical."
    }
  },
  {
    verse_id: 215, word_key: "stn", position: 10, concept: "Eloignement/Distance",
    axes: {
      axe1_verset: "Le concept d'eloignement/distance est le sens etymologique de la racine sh-t-n (shatana = s'eloigner). Mais le verset 2:208 utilise al-shaytan (le diable) — un nom propre qui designe l'etre demoniaque, pas une notion d'eloignement. Le champ lexical (ne suivez pas, les pas, le diable, ennemi, manifeste) montre que le shaytan est un etre personnel, un adversaire actif, pas une abstraction d'eloignement. L'etymologie (eloigne de la misericorde) est un arriere-plan, pas le sens operatoire.",
      axe2_voisins: "Le verset 2:207 parlait de la compassion divine. Le verset 2:209 avertit contre le glissement. Le verset 2:208 identifie le diable comme ennemi. Les versets voisins construisent une opposition entre la compassion de Dieu et l'hostilite du diable. L'eloignement/distance n'est pas le theme — c'est l'opposition entre deux forces (Dieu compatissant vs diable hostile) qui structure le passage.",
      axe3_sourate: "La racine sh-t-n dans la sourate al-Baqarah apparait en 2:14, 2:36, 2:102, 2:168, 2:208, 2:268, 2:275. Dans tous les cas, al-shaytan est un etre personnel qui agit : il seduit (2:36), il enseigne la sorcellerie (2:102), il fait peur avec la pauvrete (2:268). La sourate presente le shaytan comme un agent actif, pas comme un concept d'eloignement. Le sens etymologique est secondaire par rapport au sens operatoire de la sourate.",
      axe4_coherence: "La racine sh-t-n apparait environ 88 fois dans le Coran. Le shaytan est un personnage recurrent — il refuse de se prosterner (2:34), il tente Adam et Eve (7:20-22), il embellit les mauvaises actions (6:43). Le Coran traite le shaytan comme un etre reel, pas comme une metaphore d'eloignement. Le concept d'eloignement/distance peut eclairer l'etymologie du nom mais ne capture pas la realite coranique du personnage.",
      axe5_frequence: "Pour la mission du khalifa, le diable est l'adversaire de la mission. Le khalifa doit identifier et combattre l'influence du diable sur les gens. L'eloignement/distance est un concept passif — le shaytan n'est pas un eloignement mais un ennemi actif. La mission du khalifa exige de reconnaitre l'ennemi comme tel et de proteger les gens contre ses pas. Le concept d'ennemi manifeste (aduww mubin) est plus operatoire que l'etymologie d'eloignement."
    }
  },

  // ===================== V209 (vid=216) =====================
  {
    verse_id: 216, word_key: "ezz", position: 10, concept: "Rarete/Valeur",
    axes: {
      axe1_verset: "Le concept de rarete/valeur est un sens secondaire de la racine e-z-z (azza = etre rare, precieux, d'ou puissant). Mais le verset 2:209 utilise azizun (puissant) comme attribut divin. Le champ lexical (si vous glissez, les preuves, sachez, Dieu, puissant, sage) est celui de l'avertissement divin — Dieu est puissant et sage, donc capable de chatier et de juger. La rarete/valeur n'apporte pas cette dimension de puissance et de capacite de chatiment. Le aziz divin est Celui dont la puissance est incontestable.",
      axe2_voisins: "Le verset 2:208 demandait d'entrer dans la paix entierement. Le verset 2:210 evoque la venue de Dieu dans les ombres des nuages. Le verset 2:209 est un avertissement intermediaire : si vous glissez, Dieu est puissant et sage. Le voisinage construit une gradation — demande, avertissement, manifestation divine. La rarete/valeur n'a pas de place dans cette gradation d'avertissement.",
      axe3_sourate: "La racine e-z-z dans la sourate al-Baqarah apparait en 2:129, 2:206, 2:209, 2:220, 2:228, 2:240, 2:260. En 2:206, al-izzatu bi-al-ithmi (l'orgueil par la faute) — ici e-z-z est l'orgueil. En 2:129, « innaka anta al-aziz al-hakim » (Tu es le Puissant le Sage). En 2:209, meme formule. La sourate utilise e-z-z tantot pour la puissance divine, tantot pour l'orgueil humain. La rarete/valeur est un sens etymologique qui ne correspond a aucun usage dans la sourate.",
      axe4_coherence: "La racine e-z-z apparait environ 119 fois dans le Coran. En 3:6, 3:18, 3:62, 5:118 — aziz est un des Noms les plus frequents de Dieu. Le sens de puissance/invincibilite domine : le aziz est Celui que personne ne peut vaincre ou contraindre. La rarete est le sens concret originel (un bien rare est precieux), la puissance est le sens abstrait derive (celui qui est rare en puissance = invincible). Le Coran utilise le sens derive de puissance, pas le sens concret de rarete.",
      axe5_frequence: "Pour la mission du khalifa, la puissance divine (izza) est le garant de la justice. Le khalifa agit sous l'autorite d'un Dieu puissant — les transgresseurs ne peuvent echapper au Aziz. La rarete/valeur n'apporte pas cette dimension de garantie de la justice. Le khalifa tire sa legitimite de la puissance divine, pas de la rarete divine. La mission de justice fonctionne parce que Dieu est puissant pour l'appliquer."
    }
  },
  {
    verse_id: 216, word_key: "hkm", position: 11, concept: "Jugement/Decision",
    axes: {
      axe1_verset: "Le concept de jugement/decision est un sens central de la racine h-k-m (hakama = juger, trancher). Mais le verset 2:209 utilise hakimun (sage) — un adjectif qui qualifie Dieu comme sage, pas comme juge. Le champ lexical (si vous glissez, les preuves, Dieu, puissant, sage) montre que hakim complete aziz : Dieu est puissant ET sage. La sagesse (hikma) est la qualite de celui qui agit avec discernement. Le jugement (hukm) est l'acte de trancher un cas. Le verset parle de la qualite (sage), pas de l'acte (juger).",
      axe2_voisins: "Le verset 2:208 demandait l'engagement total. Le verset 2:210 evoque l'affaire tranchee (qudiya al-amr). Le verset 2:209 avertit en presentant deux attributs divins — puissance et sagesse. Le jugement/decision sera mentionne au verset 210 (qudiya) avec une autre racine. Le verset 209 ne parle pas encore du jugement — il prepare le terrain en presentant les qualites de Celui qui jugera.",
      axe3_sourate: "La racine h-k-m dans la sourate al-Baqarah apparait en 2:32, 2:129, 2:151, 2:209, 2:220, 2:228, 2:231, 2:260, 2:269. En 2:129, « innaka anta al-aziz al-hakim ». En 2:269, « yu'ti al-hikmata man yasha' » (Il donne la sagesse a qui Il veut). La sourate developpe h-k-m dans les deux registres — sagesse et jugement — mais la forme hakim (adjectif) designe la sagesse, pas l'acte de juger. L'acte de juger utilise la forme hakam ou hukm.",
      axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran. Le Coran distingue hakim (sage, epithetique) de hakam (juge, actif). En 6:18, « wa-huwa al-hakim al-khabir » (Il est le Sage le Connaisseur). En 95:8, « a-laysa Allahu bi-ahkami al-hakimin » (Dieu n'est-Il pas le plus juste des juges?) — ici le sens est juge. Le verset 2:209 utilise hakim, pas hakam — la sagesse, pas le jugement. La distinction grammaticale tranche entre les deux concepts.",
      axe5_frequence: "Pour la mission du khalifa, la sagesse divine (hikma) est le modele de la gouvernance. Le khalifa gouverne avec sagesse, pas seulement avec jugement. Le jugement/decision est un acte ponctuel — la sagesse est une qualite permanente qui guide tous les actes. Le verset 2:209 rappelle que Dieu est sage dans Son avertissement — Il ne punit pas par caprice mais avec sagesse. Le khalifa s'inspire de cette sagesse pour exercer sa mission avec discernement."
    }
  },

  // ===================== V210 (vid=217) =====================
  {
    verse_id: 217, word_key: "amr", position: 14, concept: "Commandement/Autorite",
    axes: {
      axe1_verset: "Le concept de commandement/autorite est un sens actif de la racine a-m-r (amara = commander). Mais le verset 2:210 utilise al-amr dans le sens de « l'affaire, la chose, la situation » — quand est tranchee l'affaire (qudiya al-amr). Le champ lexical (attendre, venir, nuages, anges, l'affaire est tranchee, les affaires retournent) montre que al-amr designe ici la realite/la situation, pas un commandement. L'amr est ce qui arrive, pas ce qui est ordonne. La construction passive « qudiya al-amr » (l'affaire est tranchee) confirme : l'amr est l'objet du tranchement, pas son auteur.",
      axe2_voisins: "Le verset 2:209 presentait la puissance et la sagesse divines. Le verset 2:210 conclut le passage par la scene eschatologique — la venue de Dieu et le tranchement de l'affaire. Les versets voisins construisent une sequence : avertissement (209) → realisation (210). L'amr qui est tranche est la situation finale, le denouement, pas un commandement emis. Le commandement precede ; l'affaire tranchee est le resultat.",
      axe3_sourate: "La racine a-m-r dans la sourate al-Baqarah apparait en 2:27, 2:67, 2:68, 2:117, 2:210. En 2:117, « idha qada amran » (quand Il decide une affaire) — meme construction que 2:210 avec une autre racine pour « decider ». En 2:67, « inna Allaha ya'murukum » (Dieu vous ordonne) — ici le sens est commander. La sourate utilise les deux sens — commander et affaire — mais la construction avec qada/qudiya impose le sens d'affaire/situation.",
      axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. En 16:1, « ata amru Allahi » (l'ordre/l'affaire de Dieu est venu). En 54:50, « wa-ma amruna illa wahidatun » (Notre affaire n'est qu'une seule). Le Coran utilise al-amr tantot pour l'ordre/commandement, tantot pour l'affaire/realite. Le contexte tranche : quand al-amr est l'objet d'un verbe de tranchement (qada, qudiya), c'est l'affaire. Quand il est l'objet d'un verbe de communication, c'est le commandement.",
      axe5_frequence: "Pour la mission du khalifa, l'affaire (amr) qui est tranchee est le denouement final — le moment ou tout est decide et ou les comptes sont rendus. Le commandement/autorite est une dimension de la mission du khalifa (il commande avec justice), mais le verset 2:210 parle du denouement, pas du commandement. Le khalifa doit savoir que toute affaire (amr) revient a Dieu — y compris les affaires qu'il a commandees durant sa mission."
    }
  },
  {
    verse_id: 217, word_key: "nzr", position: 1, concept: "Regard/Contemplation",
    axes: {
      axe1_verset: "Le concept de regard/contemplation est le sens visuel de la racine n-z-r (nazara = regarder). Mais le verset 2:210 utilise yanzuruna dans le sens de « attendre, s'attendre a » — hal yanzuruna illa an ya'tiyahumu Allah (qu'attendent-ils sinon que Dieu leur vienne). Le champ lexical (attendent-ils, sinon que, leur vienne, Dieu, nuages, anges) est celui de l'attente incredule, pas du regard physique. La construction hal + yanzuruna + illa + an est une formule d'attente dans le Coran, pas de vision.",
      axe2_voisins: "Le verset 2:209 avertissait les croyants qui glissent. Le verset 2:210 enchaine avec une question rhetorique : qu'attendent-ils ? La sequence est logique — apres l'avertissement, la question de ce qu'ils attendent. Le regard/contemplation n'a pas de support contextuel — personne ne regarde physiquement quelque chose dans ce passage. L'attente est l'attitude de ceux qui ne prennent pas au serieux l'avertissement.",
      axe3_sourate: "La racine n-z-r dans la sourate al-Baqarah apparait en 2:50 (wa-antum tanzuruna = et vous regardiez — sens visuel), 2:104 (unzurna = regarde-nous), 2:210 (yanzuruna = ils attendent). La sourate utilise les deux sens — regard visuel et attente. En 2:210, la construction avec « illa an » (sinon que) impose le sens d'attente : qu'attendent-ils sinon l'arrivee de Dieu ? Le regard visuel ne fonctionne pas avec « sinon que ».",
      axe4_coherence: "La racine n-z-r apparait environ 129 fois dans le Coran. En 7:53, « hal yanzuruna illa ta'wilahu » (qu'attendent-ils sinon son interpretation) — meme construction, sens d'attente. En 47:18, « fa-hal yanzuruna illa al-sa'ata » (qu'attendent-ils sinon l'Heure). Le Coran utilise « hal yanzuruna illa » comme formule fixe pour l'attente incredule. Le sens visuel de regard/contemplation est present dans d'autres constructions mais pas dans celle-ci.",
      axe5_frequence: "Pour la mission du khalifa, l'attente incredule (nazar au sens d'attendre) est un obstacle a la mission. Les gens qui attendent passivement au lieu d'agir sont un defi pour le khalifa. Le regard/contemplation est une activite intellectuelle positive — l'attente incredule est une passivite negative. Le verset 2:210 critique ceux qui attendent au lieu d'agir — le khalifa doit transformer l'attente passive en action positive."
    }
  }
];

// =====================================================
// MAIN: Fetch VWAs, patch analysis_axes, update
// =====================================================
async function main() {
  console.log("=== FIX V201-210: Ajout axes manquants (probable/peu_probable) ===\n");

  let totalUpdated = 0;
  let totalErrors = 0;

  // Group axesData by verse_id for efficient DB fetching
  const byVerse = {};
  for (const item of axesData) {
    if (!byVerse[item.verse_id]) byVerse[item.verse_id] = [];
    byVerse[item.verse_id].push(item);
  }

  for (const [verseIdStr, items] of Object.entries(byVerse)) {
    const verseId = parseInt(verseIdStr);
    console.log(`\n--- verse_id=${verseId} (${items.length} concept(s) a patcher) ---`);

    // Fetch all VWAs for this verse
    const { data: vwas, error: fetchErr } = await supabase
      .from('verse_word_analyses')
      .select('id, word_key, position, analysis_axes')
      .eq('verse_id', verseId);

    if (fetchErr) {
      console.error(`  ERREUR fetch VWAs vid=${verseId}:`, fetchErr.message);
      totalErrors += items.length;
      continue;
    }

    if (!vwas || vwas.length === 0) {
      console.error(`  AUCUN VWA trouve pour vid=${verseId}`);
      totalErrors += items.length;
      continue;
    }

    console.log(`  ${vwas.length} VWA(s) trouves`);

    // For each concept to patch
    for (const item of items) {
      // Find the matching VWA by word_key AND position
      const vwa = vwas.find(v => v.word_key === item.word_key && v.position === item.position);

      if (!vwa) {
        console.error(`  ERREUR: VWA non trouve pour ${item.word_key}@${item.position} vid=${verseId}`);
        totalErrors++;
        continue;
      }

      // Get current analysis_axes
      const axes = vwa.analysis_axes;
      if (!axes || !axes.concepts) {
        console.error(`  ERREUR: analysis_axes ou concepts manquant pour ${item.word_key}@${item.position} (vwa id=${vwa.id})`);
        totalErrors++;
        continue;
      }

      const conceptData = axes.concepts[item.concept];
      if (!conceptData) {
        console.error(`  ERREUR: Concept "${item.concept}" introuvable dans ${item.word_key}@${item.position} (vwa id=${vwa.id})`);
        console.log(`    Concepts disponibles: ${Object.keys(axes.concepts).join(', ')}`);
        totalErrors++;
        continue;
      }

      // Check if axes already present
      if (conceptData.axe1_verset && conceptData.axe2_voisins && conceptData.axe3_sourate && conceptData.axe4_coherence && conceptData.axe5_frequence) {
        console.log(`  SKIP: ${item.word_key}@${item.position} / "${item.concept}" — axes deja presents`);
        continue;
      }

      // Merge axes into the concept (preserving senses, status, proof_ctx)
      conceptData.axe1_verset = item.axes.axe1_verset;
      conceptData.axe2_voisins = item.axes.axe2_voisins;
      conceptData.axe3_sourate = item.axes.axe3_sourate;
      conceptData.axe4_coherence = item.axes.axe4_coherence;
      conceptData.axe5_frequence = item.axes.axe5_frequence;

      // Update in DB
      const { error: updateErr } = await supabase
        .from('verse_word_analyses')
        .update({ analysis_axes: axes })
        .eq('id', vwa.id);

      if (updateErr) {
        console.error(`  ERREUR update ${item.word_key}@${item.position} / "${item.concept}" (vwa id=${vwa.id}):`, updateErr.message);
        totalErrors++;
      } else {
        console.log(`  OK: ${item.word_key}@${item.position} / "${item.concept}" [${conceptData.status}] — 5 axes ajoutes`);
        totalUpdated++;
      }
    }
  }

  console.log(`\n=== RESULTAT: ${totalUpdated} concepts mis a jour, ${totalErrors} erreur(s) ===`);
}

main().catch(err => {
  console.error("ERREUR FATALE:", err);
  process.exit(1);
});
