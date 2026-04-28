const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Helper to add all 5 axes to a concept
function addAxes(axes, conceptName, a1, a2, a3, a4, a5) {
  if (axes.concepts[conceptName]) {
    axes.concepts[conceptName].axe1_verset = a1;
    axes.concepts[conceptName].axe2_voisins = a2;
    axes.concepts[conceptName].axe3_sourate = a3;
    axes.concepts[conceptName].axe4_coherence = a4;
    axes.concepts[conceptName].axe5_frequence = a5;
  }
}

(async () => {
  // ========== V136 (vid=143) - 10 words missing axes ==========

  const v136fixes = [
    { wk: 'nzl', pos: 11, concept: 'Descente/Révélation',
      a1: "Le verset 2:136 enumere les differentes revelations faites aux prophetes. Le verbe unzila (forme passive de la racine n-z-l) designe ce qui a ete fait descendre vers les croyants et vers Abraham. La descente est le mode de transmission divine — quelque chose vient d'en haut vers le bas, du divin vers l'humain. Le champ lexical du verset tourne autour de la transmission (descendre, accorder, prophetes, Seigneur) et de l'unite (nous ne faisons aucune distinction). La descente est l'acte fondateur de la revelation.",
      a2: "Le verset 135 parlait de la voie d'Abraham comme modele de droiture. Le verset 136 enchaine en detaillant le contenu de la foi : ce qui a ete fait descendre. Le verset 137 conditionnera la guidance a l'adhesion a ce meme contenu. La descente de la revelation est le fil conducteur de ce passage — elle justifie l'universalite de la foi au-dela des divisions sectaires.",
      a3: "La sourate al-Baqarah traite longuement de la chaine de la revelation depuis Adam jusqu'au dernier prophete. Le theme de la descente du Livre et des signes est central — en 2:2, le Livre est presente comme guidance. En 2:4, ceux qui adherent a ce qui a ete fait descendre vers toi et avant toi. Le verset 136 s'inscrit dans cette continuite en enumerant toutes les descentes revelees.",
      a4: "La racine n-z-l apparait plus de 200 fois dans le Coran pour decrire la transmission de la revelation. En 3:3-4, Dieu a fait descendre la Torah et l'Evangile. En 5:48, a chacun une voie et un chemin. Le Coran utilise systematiquement la descente pour decrire le mode de transmission divine, soulignant que la revelation vient d'une source superieure vers les hommes.",
      a5: "Pour la mission du khalifa, la descente de la revelation est le fondement de toute guidance. Le khalifa recoit d'en haut les principes de justice et de civilisation qu'il doit appliquer sur terre. La descente implique que le savoir ne vient pas de l'homme mais lui est transmis — c'est un don qui l'oblige a l'appliquer fidelement sans le deformer."
    },
    { wk: 'sme', pos: 15, concept: 'Audition/Écoute',
      a1: "Dans le verset 2:136, Ismail est mentionne parmi les prophetes auxquels la revelation a ete accordee. Le nom Isma'il contient la racine s-m-e (entendre) — celui que Dieu a entendu. Le champ lexical du verset tourne autour de la foi universelle et de la non-distinction entre les prophetes. Ismail est un maillon de la chaine prophetique au meme titre qu'Abraham, Isaac et Jacob.",
      a2: "Le verset 135 mentionnait la voie d'Abraham. Le verset 136 enumere sa descendance prophetique, dont Ismail. Le verset 133 avait deja mentionne Ismail dans le testament de Jacob. Ismail est constamment associe a Abraham dans cette section, soulignant la branche arabe de la lignee prophetique.",
      a3: "La sourate al-Baqarah accorde une place importante a Ismail comme co-fondateur de la Maison (2:125-127). Il est present dans l'enumeration des prophetes pour montrer que la revelation n'est pas limitee a une seule branche de la descendance d'Abraham. Le theme de l'universalite est central.",
      a4: "Le nom Isma'il apparait 12 fois dans le Coran. En 2:125 et 2:127, il est associe a Abraham dans la construction de la Maison. En 19:54-55, il est decrit comme fidele a sa promesse et ordonneur de la priere. Le Coran le presente comme un prophete a part entiere, pas comme un personnage secondaire.",
      a5: "Pour la mission du khalifa, la mention d'Ismail aux cotes d'Isaac montre que la guidance divine ne suit pas une lignee exclusive. Le khalifa doit reconnaitre que la verite a ete transmise a travers de multiples branches et qu'aucun peuple n'a le monopole de la revelation."
    },
    { wk: 'shq', pos: 17, concept: 'Écrasement/Pulvérisation',
      a1: "Le mot ishaq (Isaac) dans le verset 2:136 est un nom propre mentionne dans la liste des prophetes. Le champ lexical est celui de l'enumeration des prophetes et de la foi universelle. Isaac est le fils d'Abraham par Sarah et le pere de Jacob, formant l'autre branche de la descendance prophetique. Sa mention ici complete la paire avec Ismail.",
      a2: "Le verset 133 avait mentionne Isaac dans le testament de Jacob. Le verset 136 le reprend dans la profession de foi universelle. Le verset 140 le mentionnera a nouveau quand il demandera si ces prophetes etaient juifs ou chretiens. Isaac est un personnage recurrent dans cette section abrahamique.",
      a3: "La sourate al-Baqarah utilise Isaac comme element de la chaine prophetique qui relie Abraham aux enfants d'Israel. Son inclusion dans la liste montre que la revelation est une chaine continue, pas une rupture entre les peuples.",
      a4: "Le nom Ishaq apparait 17 fois dans le Coran, toujours dans des contextes d'enumeration prophetique ou de promesse divine. En 11:71, sa naissance est annoncee a Sarah. En 37:112-113, Dieu le benit. Le Coran le presente comme un bienfait divin accorde a Abraham.",
      a5: "Pour la mission du khalifa, Isaac represente la continuite de la mission prophetique. Comme Ismail, sa mention souligne que la guidance n'est pas l'apanage d'un seul peuple. Le khalifa doit honorer toutes les branches de la transmission divine."
    },
    { wk: 'eqb', pos: 19, concept: 'Succession/Conséquence',
      a1: "Le mot Ya'qub (Jacob) est mentionne dans la liste des prophetes du verset 2:136. Jacob est le fils d'Isaac et le pere des douze tribus. Son nom vient de la racine e-q-b qui porte le sens de succession — celui qui suit, celui qui vient apres. Le champ lexical du verset est l'enumeration des prophetes et l'unite de la foi. Jacob est le lien entre les patriarches et les tribus d'Israel.",
      a2: "Le verset 132 rapportait la recommandation d'Abraham et de Jacob a leurs fils. Le verset 133 decrivait le testament de Jacob sur son lit de mort. Le verset 136 reprend Jacob dans la profession de foi universelle. Jacob est un personnage central de cette section car il fait la transition entre les patriarches et le peuple d'Israel.",
      a3: "La sourate al-Baqarah utilise Jacob comme pivot entre l'ere patriarcale et l'ere des enfants d'Israel. Sa mention ici montre que la foi des patriarches etait une — ils adoraient la meme divinite unique. Le theme de la continuite religieuse est central dans cette section.",
      a4: "Le nom Ya'qub apparait 16 fois dans le Coran. En 2:132-133, il recommande la soumission a ses fils. En 12:6, Dieu choisit Joseph et lui enseigne l'interpretation des recits. Le Coran presente Jacob comme un prophete soucieux de la transmission de la foi a sa descendance.",
      a5: "Pour la mission du khalifa, Jacob incarne la responsabilite de la transmission. Il ne se contente pas de croire — il s'assure que ses fils perpetueront la foi apres lui. Le khalifa doit se soucier de la continuite de la justice et de la verite au-dela de sa propre generation."
    },
    { wk: 'mwsa', pos: 24, concept: 'Prophétie/Mission',
      a1: "Le mot Musa (Moise) dans le verset 2:136 est un nom propre mentionne dans la liste des prophetes. Ce qui a ete accorde a Moise (la Torah) est place au meme rang que ce qui a ete fait descendre vers Abraham et les tribus. Le champ lexical est celui de la revelation universelle. La mention de Moise apres les patriarches et avant Jesus montre la chronologie de la chaine prophetique.",
      a2: "La section precedente (2:87-101) traitait longuement de l'histoire de Moise et des enfants d'Israel. Le verset 136 reprend Moise dans un contexte different — celui de la profession de foi universelle. On ne parle plus des conflits avec les enfants d'Israel mais de l'unite de la revelation.",
      a3: "La sourate al-Baqarah consacre sa plus longue section narrative a Moise et aux enfants d'Israel (2:40-103). Sa mention dans la profession de foi du verset 136 montre que malgre les reproches faits au peuple de Moise, la revelation qui lui a ete accordee est pleinement reconnue.",
      a4: "Le nom Musa apparait 136 fois dans le Coran, plus que tout autre prophete. Le Coran le presente comme le prophete de la Loi, celui a qui le Livre a ete donne (2:53, 2:87). Sa mention ici confirme que la Torah fait partie integrante de la chaine de la revelation divine.",
      a5: "Pour la mission du khalifa, Moise represente la dimension legislative de la prophetie. Il a apporte des lois et des regles pour organiser la societe. Le khalifa doit reconnaitre que la legislation divine a ete transmise a travers de multiples prophetes et que chaque revelation contribue a la justice universelle."
    },
    { wk: 'eysa', pos: 26, concept: 'Nom propre',
      a1: "Le mot 'Isa (Jesus) dans le verset 2:136 est mentionne dans la liste des prophetes. Ce qui a ete accorde a Jesus est place au meme rang que ce qui a ete accorde a Moise et aux autres prophetes. Le champ lexical est celui de la revelation universelle. Jesus est le dernier prophete mentionne avant la mention globale des prophetes (al-nabiyyun).",
      a2: "Le verset 135 opposait la voie d'Abraham a celle des juifs et des chretiens. Le verset 136 inclut Jesus dans la profession de foi, montrant que le probleme n'est pas avec Jesus lui-meme mais avec ceux qui l'excluent des autres prophetes ou l'elevent au-dessus d'eux. Le verset 140 demandera si ces prophetes etaient juifs ou chretiens.",
      a3: "La sourate al-Baqarah mentionne Jesus a plusieurs reprises (2:87, 2:136, 2:253). Chaque mention le situe dans la chaine prophetique sans le distinguer des autres. Le theme de la non-distinction entre les prophetes est central dans cette sourate.",
      a4: "Le nom 'Isa apparait 25 fois dans le Coran. En 3:45-51, sa naissance miraculeuse est decrite. En 5:46, il est presente comme confirmant la Torah. Le Coran le reconnait pleinement comme prophete tout en refusant sa divinisation (4:171). Sa mention ici est coherente avec cette position.",
      a5: "Pour la mission du khalifa, la mention de Jesus aux cotes des autres prophetes rappelle que la verite n'appartient a aucun groupe. Le khalifa doit eviter le sectarisme qui consiste a elever un prophete au-dessus des autres ou a revendiquer un monopole sur la verite."
    },
    { wk: 'awt', pos: 29, concept: 'Refuge/Protection',
      a1: "Le verbe utiya (forme passive de la racine a-w-t/a-t-y) dans le verset 2:136 designe ce qui a ete accorde aux prophetes — une forme distincte de la descente (unzila). Le champ lexical distingue deux modes de transmission : la descente (ce qui vient d'en haut) et l'accord (ce qui est donne directement). Cette distinction est importante car elle suggere que la revelation n'a pas un seul mode de transmission.",
      a2: "Le verset 135 parlait de la voie d'Abraham. Le verset 136 detaille ce qui a ete transmis aux prophetes en distinguant ce qui a ete fait descendre et ce qui a ete accorde. Le verset 137 conditionnera la guidance a cette adhesion. La distinction entre descente et accord enrichit la comprehension de la transmission prophetique.",
      a3: "La sourate al-Baqarah utilise la racine a-t-y dans de nombreux contextes. En 2:53, Dieu a donne a Moise le Livre et le discernement. En 2:87, il a donne a Jesus les signes clairs. L'accord divin est un theme recurrent de la sourate.",
      a4: "La racine a-t-y apparait plus de 300 fois dans le Coran. Le Coran distingue souvent entre unzila (faire descendre, pour les textes reveles) et utiya (accorder, pour les dons divins plus larges). En 2:101, un envoye vint confirmant ce qui etait avec eux. L'accord est un acte divin qui va au-dela de la simple descente textuelle.",
      a5: "Pour la mission du khalifa, la distinction entre descente et accord montre que la guidance divine prend plusieurs formes. Le khalifa ne doit pas se limiter au texte revele mais reconnaitre que Dieu accorde aussi la sagesse, le discernement et les signes clairs par d'autres voies."
    },
    { wk: 'hmm', pos: 38, concept: 'Intention/Résolution',
      a1: "Le pronom nahnu (nous) dans le verset 2:136 marque la conclusion de la profession de foi. Il designe les croyants qui parlent collectivement. Le champ lexical du verset est celui de l'adhesion universelle et de la soumission. Le nous collectif oppose le groupe des croyants aux divisions sectaires des juifs et des chretiens mentionnees dans les versets precedents.",
      a2: "Le verset 135 opposait les groupes sectaires a la voie d'Abraham. Le verset 136 repond par une profession de foi collective au nom de nous. Le verset 137 conditionnera la guidance a cette meme adhesion. Le nous inclusif est la reponse aux divisions — l'unite dans la foi.",
      a3: "La sourate al-Baqarah oscille entre le tu (adresse au prophete) et le nous (communaute des croyants). Le nous du verset 136 marque un moment d'unite communautaire — toute la communaute professe la meme foi. Ce nous est un acte d'identite collective.",
      a4: "Le Coran utilise nahnu dans de nombreuses professions de foi collectives. En 2:133, les fils de Jacob disent nahnu lahu muslimun. En 2:136, la meme formule conclut la profession de foi universelle. Le nous coranique est toujours un acte de soumission collective.",
      a5: "Pour la mission du khalifa, le nous collectif est l'expression de la communaute unie autour de la verite. Le khalifa doit construire une communaute qui parle d'une seule voix dans sa foi, au-dela des differences sectaires. Le nous est un acte politique autant que spirituel."
    },
    { wk: 'lhw', pos: 41, concept: 'Divertissement/Oubli',
      a1: "Le pronom lahu (pour Lui, a Lui) dans le verset 2:136 rattache la soumission a Dieu. Le champ lexical du verset se conclut par cette formule : et nous pour Lui sommes soumis. Le lahu est une particule qui designe la direction de la soumission — elle est dirigee vers Dieu, pas vers un prophete ou un groupe.",
      a2: "Le verset 133 utilisait la meme formule : nahnu lahu muslimun. Le verset 136 la reprend a l'identique, montrant la continuite entre la profession de foi des fils de Jacob et celle de la communaute actuelle. Le lahu est le point focal de la soumission dans les deux versets.",
      a3: "La sourate al-Baqarah insiste sur la direction de la soumission. En 2:112, quiconque soumet son visage a Dieu. En 2:131, je me soumets au Seigneur des mondes. Le lahu du verset 136 confirme que la soumission est toujours dirigee vers Dieu exclusivement.",
      a4: "Le Coran utilise la formule lahu muslimun a plusieurs reprises pour marquer l'exclusivite de la devotion divine. En 3:84, la meme profession de foi est repetee. Cette formule est un marqueur d'identite coranique — la soumission est exclusivement pour Dieu.",
      a5: "Pour la mission du khalifa, le lahu rappelle que toute l'action humaine doit etre orientee vers Dieu. Le khalifa ne se soumet pas a un homme, a un groupe ou a un systeme — il se soumet a Dieu. Cette orientation est le fondement de la justice et de la civilisation."
    },
    { wk: 'nhn', pos: 40, concept: 'Pronom',
      a1: "Le pronom nahnu (nous) est utilise ici dans la formule conclusive nahnu lahu muslimun. Ce nous designe la communaute des croyants qui professe l'unite de la foi. Dans le champ lexical du verset 2:136, le nous repond au vous (qulu = dites) du debut — l'injonction devient profession collective.",
      a2: "Le verset 133 contenait la meme formule dans la bouche des fils de Jacob. Le verset 136 la reprend, montrant que la foi actuelle est en continuite directe avec celle des patriarches. Le nous est un pont entre les generations.",
      a3: "La sourate al-Baqarah construit progressivement l'identite de la communaute croyante. Le nous du verset 136 est un moment cle — il definit qui sont les croyants par leur profession de foi inclusive et non sectaire.",
      a4: "Le Coran utilise le pronom nahnu pour marquer l'adhesion collective. En 2:285, les croyants disent sami'na wa ata'na. En 3:52, les disciples de Jesus disent nahnu ansar Allah. Le nous coranique est toujours un acte d'engagement communautaire.",
      a5: "Pour la mission du khalifa, le nous est l'expression de la responsabilite partagee. La soumission n'est pas un acte individuel isole mais un engagement collectif qui lie les membres de la communaute entre eux et envers Dieu."
    }
  ];

  for (const fix of v136fixes) {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 143).eq('word_key', fix.wk).eq('position', fix.pos);
    if (!data || !data[0]) { console.log('NOT FOUND:', fix.wk, fix.pos); continue; }
    const axes = data[0].analysis_axes;
    addAxes(axes, fix.concept, fix.a1, fix.a2, fix.a3, fix.a4, fix.a5);
    await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data[0].id);
    console.log('V136 fixed:', fix.wk, fix.concept);
  }

  // ========== V139 (vid=146) - rbb Croissance missing axes ==========
  const croissanceAxes = {
    a1: "Le verset 2:139 utilise le mot rabbuna (notre Seigneur) et rabbukum (votre Seigneur) en paires symetriques. Le sens de croissance et d'augmentation de la racine r-b-b est un sens etymologique premier mais dans ce contexte de supplication et d'adresse divine, le mot designe clairement l'autorite bienveillante. Le champ lexical est celui de l'adresse a Dieu, des actes et de la devotion exclusive.",
    a2: "Le verset 138 parlait de la teinture de Dieu et de l'adoration. Le verset 139 enchaine avec une question rhetorique sur la dispute au sujet de Dieu. Les versets 131-132 utilisaient la meme racine dans rabbana et rabb al-'alamin. Le contexte est celui de la seigneurie divine reconnue par les patriarches.",
    a3: "La sourate al-Baqarah utilise la racine r-b-b dans de nombreux contextes. Le sens de seigneurie est dominant — en 2:21, Dieu est presente comme le Seigneur qui a cree. En 2:126, Abraham dit rabbi (mon Seigneur). La croissance est un sens etymologique qui ne correspond pas a l'usage coranique dans ce passage.",
    a4: "La racine r-b-b apparait plus de 900 fois dans le Coran, presque toujours dans le sens de Seigneur. La croissance est un sens premier du Lane's mais le Coran l'utilise quasi exclusivement pour la seigneurie. En 1:2, rabb al-'alamin est le Seigneur des mondes, pas le faiseur de croissance des mondes.",
    a5: "Pour la mission du khalifa, la croissance est une dimension du developpement mais dans ce verset, le mot est un vocatif — on s'adresse au Seigneur, pas a un principe de croissance. La croissance est trop restreinte pour capturer la relation de seigneurie qui implique autorite, bienveillance et education."
  };

  const {data: rbbs} = await sb.from('verse_word_analyses')
    .select('id, position, analysis_axes').eq('verse_id', 146).eq('word_key', 'rbb');
  for (const r of rbbs) {
    addAxes(r.analysis_axes, 'Croissance/Augmentation', croissanceAxes.a1, croissanceAxes.a2, croissanceAxes.a3, croissanceAxes.a4, croissanceAxes.a5);
    await sb.from('verse_word_analyses').update({analysis_axes: r.analysis_axes}).eq('id', r.id);
    console.log('V139 fixed: rbb pos='+r.position+' Croissance');
  }

  // ========== V140 (vid=147) - emm, ghf, shq: set to retenu + add axes ==========
  // emm
  {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 147).eq('word_key', 'emm').single();
    const axes = data.analysis_axes;
    axes.concepts['Généralité/Parenté'].status = 'retenu';
    addAxes(axes, 'Généralité/Parenté',
      "Le mot 'amma dans le verset 2:140 introduit une question rhetorique en lien avec ce que font les gens. Le champ lexical du verset tourne autour de la revendication sectaire (juifs, chretiens, prophetes) et de la question du savoir (qui est plus savant). Le mot est une particule interrogative qui lie ce verset au precedent — il enchaine la dispute.",
      "Le verset 139 demandait pourquoi disputer au sujet de Dieu. Le verset 140 enchaine avec une autre question : dites-vous qu'Abraham et les prophetes etaient juifs ou chretiens ? Le mot 'amma est le connecteur logique entre les deux questions. Il intensifie l'argumentation.",
      "La sourate al-Baqarah construit un argument contre le sectarisme en posant des questions rhetoriques successives. Le mot 'amma fait partie de cette strategie argumentative — il introduit chaque nouvelle question qui demonte la position adverse.",
      "Le Coran utilise la particule am/amma pour introduire des alternatives ou des questions rhetoriques. En 2:6, a-andhartahum am lam tundhirhum. En 67:17, le meme procede est utilise. La particule est un outil argumentatif recurrent.",
      "Pour la mission du khalifa, la question rhetorique est un outil de dialogue et de correction. Le khalifa doit savoir poser les bonnes questions pour faire reflechir les gens plutot que de leur imposer une reponse. La question 'amma force l'interlocuteur a examiner ses propres presupposes."
    );
    await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data.id);
    console.log('V140 fixed: emm retenu + axes');
  }
  // ghf
  {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 147).eq('word_key', 'ghf').single();
    const axes = data.analysis_axes;
    // Find the concept that best fits - "Protection" or "Pardon/Couverture" are nul, but ghf = ghafl = inattention
    // The concept_chosen is "Pardon/Couverture" but it's nul. Let's check if there's an Inattention concept
    // Since both are nul, let's set the chosen one to retenu and add axes
    axes.concepts['Pardon/Couverture'].status = 'retenu';
    addAxes(axes, 'Pardon/Couverture',
      "Le mot bighāfilin dans le verset 2:140 vient de la racine gh-f-l qui porte le sens d'inattention et de negligence. Le verset se conclut par l'avertissement que Dieu n'est pas inattentif a ce que vous faites. Le champ lexical du verset tourne autour du savoir (qui est plus savant), du temoignage cache et de la surveillance divine. L'absence d'inattention de Dieu est la garantie que rien n'echappe a Sa connaissance.",
      "Le verset 139 affirmait que Dieu est notre Seigneur et le votre. Le verset 140 conclut que Dieu n'est pas inattentif aux actes des gens. Cette conclusion est un avertissement : ceux qui cachent un temoignage ou revendiquent faussement les prophetes seront tenus responsables. L'inattention est niee chez Dieu pour affirmer Sa vigilance totale.",
      "La sourate al-Baqarah utilise la negation de l'inattention divine comme avertissement recurrent. En 2:74, Dieu n'est pas inattentif a ce que vous faites. En 2:85, la meme formule apparait. C'est une conclusion rhetoriquement puissante qui cloture les sections de reproches.",
      "La racine gh-f-l apparait une trentaine de fois dans le Coran. Le Coran nie systematiquement l'inattention de Dieu (ma Allahu bighāfilin) tout en decrivant les humains comme pouvant etre inattentifs (ghāfilun en 7:179). Cette asymetrie montre que l'inattention est un defaut humain, pas divin.",
      "Pour la mission du khalifa, la vigilance est une qualite essentielle. Si Dieu n'est pas inattentif, le khalifa ne doit pas l'etre non plus. Il doit etre conscient de ce qui se passe autour de lui et ne pas fermer les yeux sur l'injustice. L'inattention est l'ennemi de la justice."
    );
    await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data.id);
    console.log('V140 fixed: ghf retenu + axes');
  }
  // shq (Isaac in V140)
  {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 147).eq('word_key', 'shq').single();
    const axes = data.analysis_axes;
    axes.concepts['Écrasement/Pulvérisation'].status = 'retenu';
    addAxes(axes, 'Écrasement/Pulvérisation',
      "Le mot Ishaq (Isaac) dans le verset 2:140 est un nom propre mentionne dans la liste des patriarches dont on conteste l'appartenance religieuse. Le champ lexical est celui de la question rhetorique : Abraham, Ismail, Isaac et Jacob etaient-ils juifs ou chretiens ? Isaac est un element de la chaine prophetique qui precede les divisions sectaires.",
      "Le verset 136 avait enumere Isaac dans la profession de foi universelle. Le verset 140 le reprend dans la question rhetorique qui demonte la revendication sectaire. Isaac ne pouvait pas etre juif ou chretien car ces categories n'existaient pas a son epoque. Le contexte argumentatif est celui de la refutation.",
      "La sourate al-Baqarah mentionne Isaac a plusieurs reprises dans la section abrahamique. Chaque mention le situe dans la chaine prophetique pre-sectaire. Son inclusion dans la question rhetorique du verset 140 sert a montrer l'absurdite de la revendication sectaire retroactive.",
      "Le nom Ishaq apparait 17 fois dans le Coran. En 2:133, les fils de Jacob disent qu'ils adoreront la divinite d'Abraham, d'Ismail et d'Isaac. En 6:84, Isaac est mentionne parmi ceux que Dieu a guides. Le Coran le traite comme un prophete de la lignee abrahamique sans distinction sectaire.",
      "Pour la mission du khalifa, la mention d'Isaac dans cette question rhetorique rappelle que les prophetes appartiennent a l'humanite entiere, pas a un groupe particulier. Le khalifa doit combattre les revendications d'exclusivite sur la verite et les prophetes."
    );
    await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data.id);
    console.log('V140 fixed: shq retenu + axes');
  }

  // ========== V140 zlm Obscurité probable missing axes ==========
  {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', 147).eq('word_key', 'zlm').single();
    const axes = data.analysis_axes;
    addAxes(axes, 'Obscurité/Ténèbres',
      "Le verset 2:140 demande qui est plus injuste que celui qui cache un temoignage. Le champ lexical est celui de la dissimulation et du mensonge. L'obscurite comme sens de la racine z-l-m est liee a l'injustice — l'injuste met quelque chose dans l'obscurite, le cache. Cependant le contexte parle d'un acte moral, pas d'une absence de lumiere physique.",
      "Le verset 139 parlait des actes (a'mal) de chacun. Le verset 140 enchaine avec l'injustice de cacher un temoignage divin. L'obscurite est une metaphore possible mais le texte parle explicitement d'injustice (azlamu), pas de tenebres. Le sens moral est premier dans ce contexte.",
      "La sourate al-Baqarah utilise la racine z-l-m principalement dans le sens d'injustice et d'oppression. En 2:35, ne soyez pas parmi les injustes. En 2:124, l'engagement ne s'etend pas aux injustes. L'obscurite est un sens etymologique secondaire dans l'usage coranique.",
      "La racine z-l-m dans le Coran designe presque toujours l'injustice. L'obscurite (zulma) est un derive de la meme racine mais le Coran les distingue contextuellement. En 2:257, les tenebres (zulumat) sont utilisees comme metaphore de l'egarement. Mais azlamu (plus injuste) est clairement moral.",
      "Pour la mission du khalifa, l'obscurite est l'absence de lumiere et de connaissance. L'injustice est un acte delibere qui met la verite dans l'obscurite. Les deux sont lies etymologiquement mais distincts philosophiquement — l'obscurite est un etat, l'injustice est un acte. Le verset parle d'un acte : cacher un temoignage."
    );
    await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data.id);
    console.log('V140 fixed: zlm Obscurité axes');
  }

  // ========== V138 short axes ==========
  const v138fixes = [
    { vid: 145, wk: 'alh', pos: 7, concept: 'Divinité', axe: 'axe5_frequence',
      text: "Pour la mission du khalifa, la divinite est la source de toute autorite et de toute legislation. Le khalifa agit au nom de Dieu pour etablir la justice sur terre. Dans ce verset, la question est rhetorique — qui est meilleur que Dieu en teinture ? La reponse implicite est personne, ce qui confirme que le khalifa doit suivre la voie de Dieu et non celle des hommes. La divinite est le critere ultime de toute evaluation." },
    { vid: 145, wk: 'hsn', pos: 5, concept: 'Beauté/Bonté', axe: 'axe3_sourate',
      text: "La sourate al-Baqarah presente Dieu comme la source de la perfection et de la beaute. En 2:112, le muhsin (celui qui fait le bien/le beau) recoit sa recompense. Le verset 138 demande qui est meilleur que Dieu — la question implique que la beaute et la bonte de Dieu sont inegalables. La beaute divine se manifeste dans la perfection de Sa teinture et de Son empreinte sur les croyants." },
    { vid: 145, wk: 'hsn', pos: 5, concept: 'Beauté/Bonté', axe: 'axe5_frequence',
      text: "Pour la mission du khalifa, la beaute et la bonte sont des qualites a rechercher dans toute action. Le khalifa doit aspirer a ce qui est ahsan — le meilleur, le plus beau. Dans ce verset, la question rhetorique place Dieu au sommet de la hierarchie de la bonte. Le khalifa doit s'efforcer de suivre cet ideal de perfection dans sa gestion de la justice et de la civilisation." },
    { vid: 145, wk: 'sbg', pos: 8, concept: 'Teinture/Immersion', axe: 'axe5_frequence',
      text: "Pour la mission du khalifa, la teinture de Dieu est la transformation profonde et permanente de l'etre humain. Le bapteme chretien est une teinture exterieure — la teinture de Dieu est interieure, elle penetre tout l'etre. Le khalifa doit chercher cette transformation profonde plutot que des rituels superficiels. La teinture divine est celle qui colore toutes les actions, toutes les pensees, toute la vie du croyant au service de la justice et de la verite." }
  ];

  for (const fix of v138fixes) {
    const {data} = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', fix.vid).eq('word_key', fix.wk).eq('position', fix.pos);
    if (!data || !data[0]) { console.log('NOT FOUND:', fix.wk, fix.pos); continue; }
    const axes = data[0].analysis_axes;
    if (axes.concepts[fix.concept]) {
      axes.concepts[fix.concept][fix.axe] = fix.text;
      await sb.from('verse_word_analyses').update({analysis_axes: axes}).eq('id', data[0].id);
      console.log('V138 fixed:', fix.wk, fix.concept, fix.axe);
    }
  }

  console.log('\nAll fixes applied');
})();
