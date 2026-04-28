const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSET 61
// verse_id=68, analysis_id=426
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {
  61: {
    verse_id: 68,
    analysis_id: 426,
    translation_arab: "Et lorsque vous avez dit : Moise, nous ne supporterons pas une nourriture unique. Invoque pour nous ton Seigneur, qu'Il fasse sortir pour nous de ce que la terre fait pousser : de ses legumes, de ses concombres, de son ail, de ses lentilles et de ses oignons. Il dit : Voulez-vous echanger ce qui est meilleur contre ce qui est plus vil ? Descendez dans une cite, vous aurez ce que vous demandez. L'humiliation et la misere furent plaquees sur eux et ils revinrent charges de la desapprobation de Dieu. Cela parce qu'ils couvraient les signes de Dieu et tuaient les prophetes sans droit. Cela parce qu'ils desobeirent et transgressaient.",
    full_translation: "Et [rappelez-vous] lorsque vous avez dit : O Moise, nous ne pouvons plus supporter une seule nourriture. Invoque donc pour nous ton Seigneur afin qu'Il fasse sortir pour nous de ce que fait pousser la terre : des legumes, des concombres, de l'ail, des lentilles et des oignons. Il [Moise] dit : Voulez-vous echanger ce qui est meilleur contre ce qui est plus vil ? Descendez dans une cite et vous aurez ce que vous avez demande. Et l'humiliation et la misere s'abattirent sur eux et ils encoururent la colere de Dieu. Cela parce qu'ils ne croyaient pas aux signes de Dieu et qu'ils tuaient injustement les prophetes. Cela parce qu'ils desobeirent et transgressaient.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la plainte des enfants d'Israel a Moise et la reponse divine. Le verbe **qultum** est un accompli 2MP de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». La deuxieme personne du pluriel (vous avez dit) interpelle directement les enfants d'Israel — Dieu leur rappelle leur propre parole de plainte. Le verbe **nasbira** est un inaccompli 1P de la racine s-b-r precede de la particule de negation definitive **lan**. Le Lane's donne « he was patient, endured, bore with ». La negation lan + subjonctif exprime un refus categorique — ils ne supporteront jamais une seule nourriture. Le mot **ta'amin** est un nom masculin singulier indefini genitif de la racine t-'-m. Le Lane's donne « food, nourishment, aliment, what is eaten ». La nourriture unique est la manne du desert — un seul type d'aliment. Le mot **wahidin** est un adjectif masculin singulier indefini genitif de la racine w-h-d. Le Lane's donne « one, single, sole, unique ». L'adjectif qualifie la nourriture — une seule sorte, ce qui provoque la lassitude. Le verbe **ud'u** est un imperatif 2MS de la racine d-'-w. Le Lane's donne « he called, invoked, prayed, summoned ». L'imperatif ordonne a Moise d'invoquer son Seigneur — ils veulent passer par l'intermediaire prophetique. Le mot **rabbaka** est un nom masculin singulier avec pronom 2MS de la racine r-b-b. Le Lane's donne « lord, master, owner, sustainer ». Le Seigneur est invoque comme celui qui pourvoit — c'est a Lui de faire sortir ce que la terre produit. Le verbe **yukhrij** est un inaccompli 3MS forme IV majzum de la racine kh-r-j. Le Lane's donne « he went out, came out, emerged ». La forme IV signifie « faire sortir » — Dieu fait sortir de la terre ce qui pousse. Le verbe **tunbitu** est un inaccompli 3FS forme IV de la racine n-b-t. Le Lane's donne « it sprouted, grew, germinated ». La forme IV signifie « faire pousser » — la terre fait pousser la vegetation. Le mot **al-ardu** est un nom feminin singulier defini nominatif de la racine a-r-d. Le Lane's donne « earth, land, ground, soil ». La terre est le support de la vegetation — elle fait pousser les plantes. Le mot **baqliha** est un nom masculin singulier avec pronom 3FS de la racine b-q-l. Le Lane's donne « herbs, vegetables, pot-herbs, green plants eaten as food ». Les legumes verts sont les herbes potageres. Le mot **qiththa'iha** est un nom masculin singulier avec pronom 3FS de la racine q-th-'. Le Lane's donne « cucumber, a certain plant ». Les concombres sont les fruits allonges et frais. Le mot **fumiha** est un nom masculin singulier avec pronom 3FS de la racine f-w-m. Le Lane's donne « garlic, wheat ». L'ail (ou le ble selon certains commentateurs) est un aliment a bulbe. Le mot **'adasiha** est un nom masculin singulier avec pronom 3FS de la racine '-d-s. Le Lane's donne « lentils, a well-known grain ». Les lentilles sont des graines comestibles. Le mot **basaliha** est un nom masculin singulier avec pronom 3FS de la racine b-s-l. Le Lane's donne « onion, a certain plant ». Les oignons sont des legumes a bulbe. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said ». Moise repond aux enfants d'Israel. Le verbe **atastabdiluna** est un inaccompli 2MP forme X interrogatif de la racine b-d-l. Le Lane's donne « he sought to exchange, to substitute ». La forme X (istabdala) signifie « chercher a echanger ». L'interrogation est reproche — Voulez-vous echanger le meilleur contre le plus vil ? Le mot **adna** est un elatif masculin singulier de la racine d-n-w. Le Lane's donne « nearer, lower, baser, more contemptible ». L'elatif designe ce qui est plus bas — les legumes terrestres par rapport a la manne celeste. Le mot **khayrun** est un elatif masculin singulier nominatif de la racine kh-y-r. Le Lane's donne « better, best, good ». Le meilleur designe la manne celeste que Dieu leur avait donnee. Le verbe **ihbituu** est un imperatif 2MP de la racine h-b-t. Le Lane's donne « he descended, went down, alighted ». L'imperatif ordonne la descente — ils doivent descendre dans une cite pour avoir ce qu'ils veulent. Le mot **misran** est un nom masculin singulier indefini accusatif de la racine m-s-r. Le Lane's donne « Egypt, a great city, a city, a territory ». La cite peut etre l'Egypte ou n'importe quelle grande ville. Le verbe **sa'altum** est un accompli 2MP de la racine s-'-l. Le Lane's donne « he asked, questioned, requested ». Le verbe designe leur demande — ce qu'ils ont reclame. Le verbe **duribat** est un accompli passif 3FS de la racine d-r-b. Le Lane's donne « he struck, hit, beat ». Le passif signifie « fut frappee/plaquee sur eux ». L'humiliation leur fut imposee. Le mot **al-maskanatu** est un nom feminin singulier defini nominatif de la racine s-k-n. Le Lane's donne « poverty, indigence, lowliness, neediness ». La maskanah est la misere — l'etat de celui qui ne peut plus bouger par manque de moyens. Le verbe **ba'uu** est un accompli 3MP de la racine b-w-'. Le Lane's donne « he returned, came back, incurred, deserved ». Le verbe signifie « ils revinrent charges de » — ils encoururent la desapprobation. Le mot **ghadabin** est un nom masculin singulier indefini genitif de la racine gh-d-b. Le Lane's donne « the contrary of al-rida (satisfaction), anger, wrath, displeasure ». Le Lane's definit ghadab comme le contraire de al-rida. Le rida est la satisfaction et l'approbation. Le ghadab est donc la desapprobation — un jugement dirige vers l'exterieur qui atteint celui qui est juge. Le verbe **kanuu** est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they used to be ». Le verbe **yakfuruna** est un inaccompli 3MP de la racine k-f-r. Le Lane's donne « he covered, he hid, he was ungrateful, he denied ». Le sens premier est couvrir — ils couvraient les signes de Dieu. Le mot **bi-ayati** est un nom feminin pluriel defini genitif de la racine '-y-y. Le Lane's donne « sign, miracle, proof, mark ». Les signes de Dieu sont les preuves de Sa puissance. Le verbe **yaqtuluna** est un inaccompli 3MP de la racine q-t-l. Le Lane's donne « he killed, slew, put to death ». L'inaccompli avec kanuu indique une action continue — ils tuaient habituellement les prophetes. Le mot **al-nabiyyina** est un nom masculin pluriel defini accusatif de la racine n-b-'. Le Lane's donne « one who informs, a prophet, a bringer of news from God ». Les prophetes sont les informateurs de Dieu. Le mot **bi-ghayri** est un nom masculin singulier genitif de la racine gh-y-r. Le Lane's donne « other than, without, not ». La construction « sans droit » signifie « sans aucune legitimite ». Le mot **al-haqqi** est un nom masculin singulier defini genitif de la racine h-q-q. Le Lane's donne « truth, reality, right, due, just ». Le droit est la verite objective — tuer sans droit c'est tuer sans aucune justification. Le verbe **'asaw** est un accompli 3MP de la racine '-s-y. Le Lane's donne « he disobeyed, rebelled, transgressed ». La desobeissance est un acte de rebellion contre l'ordre divin. Le verbe **ya'taduna** est un inaccompli 3MP forme VIII de la racine '-d-w. Le Lane's donne « he transgressed, exceeded the proper limit ». La forme VIII (i'tada) signifie « transgresser activement ». L'inaccompli avec kanuu indique une transgression habituelle.

§JUSTIFICATION§
**vous avez dit** — Le sens retenu est « dire ». Le verbe qultum est un accompli 2MP qui rapporte la parole des enfants d'Israel. L'alternative « avis » est ecartee car le contexte est une plainte explicite, pas une opinion.

**ne supporterons** — Le sens retenu est « patienter ». Le verbe nasbira precede de lan exprime le refus de supporter. L'alternative « sommet de montagne » est ecartee car la forme verbale designe l'acte de supporter, pas un lieu.

**nourriture** — Le sens retenu est « nourriture ». Le mot ta'amin designe ce qu'on mange. Pas d'alternative pertinente dans ce contexte alimentaire.

**unique** — Le sens retenu est « un ». Le mot wahidin qualifie la nourriture comme unique. Pas d'alternative pertinente.

**invoque** — Le sens retenu est « invoquer ». Le verbe ud'u ordonne a Moise d'invoquer son Seigneur. L'alternative « maudire » est ecartee car le contexte est une demande de bienfait, pas un appel au mal.

**ton Seigneur** — Le sens retenu est « seigneur ». Le mot rabbaka designe celui qui possede et entretient. L'alternative « usure » est ecartee car le pronom possessif (ton) et le contexte d'invocation designent clairement la relation seigneuriale.

**fasse sortir** — Le sens retenu est « faire sortir ». Le verbe yukhrij forme IV designe l'acte de faire sortir la vegetation de la terre. L'alternative « impot » est ecartee car le contexte est agricole.

**fait pousser** — Le sens retenu est « faire pousser ». Le verbe tunbitu forme IV designe la croissance vegetale. Pas d'alternative pertinente.

**terre** — Le sens retenu est « terre ». Le mot al-ardu designe le sol qui fait pousser. L'alternative « rhume » est ecartee car le contexte est agricole.

**legumes** — Le sens retenu est « legumes verts ». Le mot baqliha designe les herbes potageres. Pas d'alternative pertinente.

**concombres** — Le sens retenu est « concombre ». Le mot qiththa'iha designe le fruit allonge. Pas d'alternative pertinente.

**ail** — Le sens retenu est « ail ». Le mot fumiha designe la plante a bulbe. L'alternative « ble » est possible selon certains commentateurs mais l'usage courant retient l'ail.

**lentilles** — Le sens retenu est « lentilles ». Le mot 'adasiha designe les graines en forme de disque. Pas d'alternative pertinente.

**oignons** — Le sens retenu est « oignon ». Le mot basaliha designe la plante a bulbe. Pas d'alternative pertinente.

**Il dit** — Le sens retenu est « dire ». Le verbe qala introduit la reponse de Moise.

**echanger** — Le sens retenu est « substituer ». Le verbe atastabdiluna forme X designe la recherche d'echange. Le contexte est un reproche — echanger le meilleur contre le plus vil.

**plus vil** — Le sens retenu est « proche/plus bas ». Le mot adna est un elatif de danw signifiant « plus proche » ou « plus vil ». Le contexte est moral — ce qui est terrestre et bas par opposition au celeste.

**meilleur** — Le sens retenu est « meilleur ». Le mot khayrun est un elatif qui designe ce qui est superieur en valeur. Il designe la manne celeste.

**descendez** — Le sens retenu est « descendre ». Le verbe ihbituu ordonne la descente dans une cite. L'alternative « degrader » est ecartee car l'imperatif designe un mouvement physique de descente.

**cite** — Le sens retenu est « grande ville ». Le mot misran designe une cite ou une metropole. L'alternative « frontiere » est ecartee car le contexte ordonne d'entrer dans un lieu habite.

**avez demande** — Le sens retenu est « demander ». Le verbe sa'altum designe la requete des enfants d'Israel.

**furent plaquees** — Le sens retenu est « frapper ». Le verbe duribat au passif signifie « fut plaquee/imposee sur eux ». L'humiliation et la misere leur furent imposees comme un marquage.

**misere** — Le sens retenu est « pauvrete ». Le mot al-maskanatu designe l'etat de misere et d'indigence. L'alternative « habiter » est ecartee car le mot maskanah est un masdar derive qui designe l'etat de celui qui est immobilise par la pauvrete.

**revinrent charges** — Le sens retenu est « retourner/meriter ». Le verbe ba'uu signifie qu'ils revinrent charges de la desapprobation — ils l'ont meritee. Pas d'alternative pertinente.

**desapprobation** — Le sens retenu est « contraire de al-rida ». Le Lane's definit ghadab comme le contraire de la satisfaction (rida). Le mot designe la desapprobation divine — un jugement rationnel dirige vers ceux qui ont desobei.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allah est le nom propre de la divinite. Pas d'alternative pertinente dans ce contexte.

**etaient** — Le sens retenu est « etre ». Le verbe kanuu avec l'inaccompli indique une action continue dans le passe.

**couvraient** — Le sens retenu est « couvrir ». Le verbe yakfuruna au sens premier signifie « ils couvraient les signes ». L'alternative « cultivateur » est ecartee car le contexte est la dissimulation des signes divins.

**signes** — Le sens retenu est « signe ». Le mot ayati designe les preuves de Dieu. L'alternative « verset » est possible mais le sens premier est le signe.

**tuaient** — Le sens retenu est « tuer ». Le verbe yaqtuluna designe l'acte de faire mourir les prophetes. Pas d'alternative pertinente.

**prophetes** — Le sens retenu est « prophete ». Le mot al-nabiyyina designe les informateurs de Dieu. L'alternative « crier » est ecartee car le mot designe des personnes, pas un acte.

**sans** — Le sens retenu est « sans ». Le mot bi-ghayri signifie « sans/en l'absence de ». L'alternative « changer » est ecartee car ghayri est ici une preposition d'exclusion.

**droit** — Le sens retenu est « droit ». Le mot al-haqqi designe la verite et la legitimite. L'alternative « obligation » est ecartee car le contexte parle de l'absence de justification.

**desobeirent** — Le sens retenu est « desobeir ». Le verbe 'asaw designe la rebellion contre l'ordre. Pas d'alternative pertinente.

**transgressaient** — Le sens retenu est « transgresser ». Le verbe ya'taduna forme VIII designe le depassement des limites. L'alternative « ennemi » est ecartee car la forme VIII verbale designe l'acte de transgresser, pas l'identite de l'ennemi.

§CRITIQUE§
**nourriture unique vs un seul type d'aliment** — Le Lane's donne « food, nourishment » pour ta'am. « Nourriture unique » preserve la structure arabe (ta'am wahid = nourriture une). La manne etait un seul type d'aliment que les enfants d'Israel trouvaient monotone.
**ail vs ble** — Le Lane's donne « garlic » et « wheat » pour fum. Les commentateurs classiques divergent. L'ail est le sens retenu car il s'inscrit dans la liste des legumes terrestres. Le ble serait un aliment de base, pas un legume.
**cite vs Egypte** — Le Lane's donne « Egypt, a great city » pour misr. Le mot est indefini (misran, pas Misra) donc il designe « une cite » et non l'Egypte en particulier. L'indefini indique que n'importe quelle ville suffira — le point est de quitter le desert.
**desapprobation vs colere** — Le Lane's definit ghadab comme « the contrary of al-rida ». Le rida est la satisfaction et l'approbation. « Desapprobation » est plus fidele au Lane's que « colere » qui implique une emotion. La desapprobation est un jugement rationnel — Dieu desapprouve leur conduite.
**couvraient vs rejetaient** — Le Lane's donne « he covered, concealed » comme sens premier de k-f-r. « Couvraient » preserve le sens etymologique — ils couvraient (dissimulaient) les signes de Dieu. « Rejetaient » est un sens derive acceptable mais moins fidele au sens premier.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 0 },
      { fr: "vous avez dit", pos: "verbe", phon: "qultum", arabic: "قُلْتُمْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "Moise", phon: "ya Musa", arabic: "يَٰمُوسَYٰ", is_particle: true, position: 2 },
      { fr: "jamais", phon: "lan", arabic: "لَن", is_particle: true, position: 3 },
      { fr: "nous ne supporterons", pos: "verbe", phon: "nasbira", arabic: "نَّصْبِرَ", word_key: "sbr", is_particle: false, sense_retenu: "patienter", position: 4 },
      { fr: "sur", phon: "'ala", arabic: "عَلَYٰ", is_particle: true, position: 5 },
      { fr: "une nourriture", pos: "nom", phon: "ta'amin", arabic: "طَعَامٍ", word_key: "taem", is_particle: false, sense_retenu: "nourriture", position: 6 },
      { fr: "unique", pos: "adjectif", phon: "wahidin", arabic: "وَٰحِدٍ", word_key: "whd", is_particle: false, sense_retenu: "un", position: 7 },
      { fr: "invoque", pos: "verbe", phon: "ud'u", arabic: "فَٱدْعُ", word_key: "dew", is_particle: false, sense_retenu: "invoquer", position: 8 },
      { fr: "pour nous", phon: "lana", arabic: "لَنَا", is_particle: true, position: 9 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbaka", arabic: "رَبَّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 10 },
      { fr: "qu'Il fasse sortir", pos: "verbe", phon: "yukhrij", arabic: "يُخْرِجْ", word_key: "xrj", is_particle: false, sense_retenu: "faire sortir", position: 11 },
      { fr: "pour nous", phon: "lana", arabic: "لَنَا", is_particle: true, position: 12 },
      { fr: "de ce que", phon: "mimma", arabic: "مِمَّا", is_particle: true, position: 13 },
      { fr: "fait pousser", pos: "verbe", phon: "tunbitu", arabic: "تُن۞بِتُ", word_key: "nbt", is_particle: false, sense_retenu: "faire pousser", position: 14 },
      { fr: "la terre", pos: "nom", phon: "al-ardu", arabic: "ٱلْأَرْضُ", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 15 },
      { fr: "de", phon: "min", arabic: "مِن۞", is_particle: true, position: 16 },
      { fr: "ses legumes", pos: "nom", phon: "baqliha", arabic: "بَقْلِهَا", word_key: "bql", is_particle: false, sense_retenu: "legumes verts", position: 17 },
      { fr: "et ses concombres", pos: "nom", phon: "qiththa'iha", arabic: "وَقِثَّآئِهَا", word_key: "qtha", is_particle: false, sense_retenu: "concombre", position: 18 },
      { fr: "et son ail", pos: "nom", phon: "fumiha", arabic: "وَفُومِهَا", word_key: "fwm", is_particle: false, sense_retenu: "ail", position: 19 },
      { fr: "et ses lentilles", pos: "nom", phon: "'adasiha", arabic: "وَعَدَسِهَا", word_key: "eds", is_particle: false, sense_retenu: "lentilles", position: 20 },
      { fr: "et ses oignons", pos: "nom", phon: "basaliha", arabic: "وَبَصَلِهَا", word_key: "bsl", is_particle: false, sense_retenu: "oignon", position: 21 },
      { fr: "Il dit", pos: "verbe", phon: "qala", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 22 },
      { fr: "voulez-vous echanger", pos: "verbe", phon: "atastabdiluna", arabic: "أَتَسْتَبْدِلُونَ", word_key: "bdl", is_particle: false, sense_retenu: "substituer", position: 23 },
      { fr: "ce qui", phon: "alladhi", arabic: "ٱلَّذِY", is_particle: true, position: 24 },
      { fr: "est", phon: "huwa", arabic: "هُوَ", is_particle: true, position: 25 },
      { fr: "plus vil", pos: "nom", phon: "adna", arabic: "أَدْنَYٰ", word_key: "dnw", is_particle: false, sense_retenu: "proche", position: 26 },
      { fr: "contre ce qui", phon: "bi-alladhi", arabic: "بِٱلَّذِY", is_particle: true, position: 27 },
      { fr: "est", phon: "huwa", arabic: "هُوَ", is_particle: true, position: 28 },
      { fr: "meilleur", pos: "nom", phon: "khayrun", arabic: "خَيْرٌ", word_key: "xyr", is_particle: false, sense_retenu: "meilleur", position: 29 },
      { fr: "descendez", pos: "verbe", phon: "ihbituu", arabic: "ٱهْبِطُوا۟", word_key: "hbt", is_particle: false, sense_retenu: "descendre", position: 30 },
      { fr: "dans une cite", pos: "nom", phon: "misran", arabic: "مِصْرًا", word_key: "msr", is_particle: false, sense_retenu: "grande ville", position: 31 },
      { fr: "car certes", phon: "fa-inna", arabic: "فَإِنَّ", is_particle: true, position: 32 },
      { fr: "pour vous", phon: "lakum", arabic: "لَكُم", is_particle: true, position: 33 },
      { fr: "ce que", phon: "ma", arabic: "مَّا", is_particle: true, position: 34 },
      { fr: "vous avez demande", pos: "verbe", phon: "sa'altum", arabic: "سَأَلْتُمْ", word_key: "sal", is_particle: false, sense_retenu: "demander", position: 35 },
      { fr: "et furent plaquees", pos: "verbe", phon: "duribat", arabic: "وَضُرِبَتْ", word_key: "drb", is_particle: false, sense_retenu: "frapper", position: 36 },
      { fr: "sur eux", phon: "'alayhimu", arabic: "عَلَيْهِمُ", is_particle: true, position: 37 },
      { fr: "l'humiliation", phon: "al-dhillatu", arabic: "ٱلذِّلَّةُ", is_particle: true, position: 38 },
      { fr: "et la misere", pos: "nom", phon: "al-maskanatu", arabic: "وَٱلْمَسْكَنَةُ", word_key: "skn", is_particle: false, sense_retenu: "pauvrete", position: 39 },
      { fr: "et ils revinrent charges", pos: "verbe", phon: "ba'uu", arabic: "وَبَآءُو", word_key: "bwa", is_particle: false, sense_retenu: "retourner", position: 40 },
      { fr: "de desapprobation", pos: "nom", phon: "bi-ghadabin", arabic: "بِغَضَبٍ", word_key: "ghdb", is_particle: false, sense_retenu: "contraire de al-rida", position: 41 },
      { fr: "de", phon: "mina", arabic: "مِّنَ", is_particle: true, position: 42 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 43 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 44 },
      { fr: "parce qu'ils", phon: "bi-annahum", arabic: "بِأَنَّهُمْ", is_particle: true, position: 45 },
      { fr: "etaient", pos: "verbe", phon: "kanuu", arabic: "كَانُوا۟", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 46 },
      { fr: "couvrant", pos: "verbe", phon: "yakfuruna", arabic: "يَكْفُرُونَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 47 },
      { fr: "les signes", pos: "nom", phon: "bi-ayati", arabic: "بِـَٔايَٰتِ", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 48 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 49 },
      { fr: "et tuaient", pos: "verbe", phon: "yaqtuluna", arabic: "وَيَقْتُلُونَ", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 50 },
      { fr: "les prophetes", pos: "nom", phon: "al-nabiyyina", arabic: "ٱلنَّبِيِّ.نَ", word_key: "nba", is_particle: false, sense_retenu: "prophete", position: 51 },
      { fr: "sans", pos: "nom", phon: "bi-ghayri", arabic: "بِغَيْرِ", word_key: "ghyr", is_particle: false, sense_retenu: "sans", position: 52 },
      { fr: "droit", pos: "nom", phon: "al-haqqi", arabic: "ٱلْحَقِّ", word_key: "hqq", is_particle: false, sense_retenu: "droit", position: 53 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 54 },
      { fr: "parce que", phon: "bima", arabic: "بِمَا", is_particle: true, position: 55 },
      { fr: "ils desobeirent", pos: "verbe", phon: "'asaw", arabic: "عَصَوا۟", word_key: "esy", is_particle: false, sense_retenu: "desobeir", position: 56 },
      { fr: "et ils etaient", pos: "verbe", phon: "wa-kanuu", arabic: "وَّكَانُوا۟", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 57 },
      { fr: "transgressant", pos: "verbe", phon: "ya'taduna", arabic: "يَعْتَدُونَ", word_key: "edw", is_particle: false, sense_retenu: "transgresser", position: 58 }
    ],
    words: [
      // =====================================================
      // qwl (position 1) — "vous avez dit" — Parole/Énonciation
      // =====================================================
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qultum est un accompli 2MP de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». La deuxieme personne du pluriel (vous avez dit) interpelle directement les enfants d'Israel — Dieu leur rappelle leur propre parole de plainte. L'interpellation directe renforce le reproche divin.",
              axe1_verset: "Le verbe qultum ouvre la plainte des enfants d'Israel. Ce qui suit est le contenu de leur parole : le refus de supporter la nourriture unique, la demande de legumes terrestres. La parole des enfants d'Israel revele leur etat interieur — l'impatience et la lassitude. Le verset contient deux paroles : celle des enfants d'Israel (qultum) et la reponse de Moise (qala). La parole de plainte est opposee a la parole de reproche.",
              axe2_voisins: "Le verset 60 rapportait une parole de Moise demandant de l'eau pour son peuple — une demande legitime. Ce verset 61 rapporte une parole de plainte des enfants d'Israel — une demande illegitime. La difference est que Moise demande pour servir son peuple tandis que les enfants d'Israel se plaignent par caprice. Le contraste entre les deux paroles montre la difference entre la priere et la recrimination.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. Chaque episode des enfants d'Israel est introduit par une parole — « Nous avons dit » ou « lorsque vous avez dit ». La sourate montre que la parole revele le coeur. Les enfants d'Israel disent ce qu'ils ne devraient pas dire. La parole est le lieu ou se manifeste la soumission ou la rebellion.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Le schema « idh qultum » (lorsque vous avez dit) est une formule de reproche — Dieu rappelle aux enfants d'Israel leurs propres paroles de plainte. En 7:161-162, un passage parallele rapporte les memes evenements avec les memes formules. La parole de plainte est un theme recurrent des recits israelites.",
              axe5_frequence: "Pour la mission du khalifa, la parole de plainte est un signe de faiblesse. Le khalifa qui se plaint de ce que Dieu lui a donne au lieu de l'utiliser pour sa mission echoue dans sa tache. Les enfants d'Israel se plaignent de la manne celeste — un don divin — au lieu de l'accepter avec gratitude."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "La forme verbale qultum (vous avez dit) designe l'acte de prononcer des mots, pas un avis ou une opinion interieure. Le contexte est une plainte exprimee a voix haute a Moise."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le troupeau est un sens rare et concret de q-w-l. Le contexte verbal (vous avez dit) exclut tout sens nominal lie au betail."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "La puissance est un sens isole de q-w-l. Le contexte verbal designe clairement l'acte de parler."
            }
          }
        }
      },
      // =====================================================
      // sbr (position 4) — "ne supporterons pas" — Patience/Endurance
      // =====================================================
      {
        word_key: "sbr", position: 4, sense_chosen: "patienter",
        analysis_axes: {
          concept_chosen: "Patience/Endurance",
          sense_chosen: "patienter",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patienter", "endurer", "patience", "retenir"],
              proof_ctx: "Le verbe nasbira est un inaccompli 1P subjonctif de la racine s-b-r. Le Lane's donne « he was patient, he endured, he bore with constancy ». Le verbe est precede de lan (negation definitive) — ils declarent qu'ils ne supporteront jamais une nourriture unique. Le subjonctif apres lan marque l'impossibilite volontaire — ce n'est pas qu'ils ne peuvent pas, c'est qu'ils ne veulent pas.",
              axe1_verset: "Le verbe nasbira precede de lan est la premiere declaration de la plainte. Le refus de patienter est categorique et collectif (1ere personne du pluriel). La patience etait requise dans le desert — supporter la manne comme seule nourriture. Le refus de la patience est le refus d'accepter l'epreuve divine. La suite du verset montrera les consequences de cette impatience — la demande de legumes terrestres au lieu de la manne celeste.",
              axe2_voisins: "Le verset 60 rapportait une demande d'eau par Moise — un besoin vital legitime. Ce verset 61 rapporte un refus de supporter la nourriture — un caprice et non un besoin. La patience dans le desert etait une epreuve divine. Les enfants d'Israel echouent a cette epreuve en declarant leur incapacite a patienter. Le verset suivant (62) ouvrira un nouveau theme.",
              axe3_sourate: "La racine s-b-r est un theme majeur de la sourate al-Baqarah. En 2:45, « cherchez secours dans la patience et la priere ». En 2:153, « Dieu est avec les patients ». En 2:155, « annonce la bonne nouvelle aux patients ». La sourate presente la patience comme la vertu centrale du croyant. Le refus de patience dans ce verset 61 est l'echec de cette vertu fondamentale.",
              axe4_coherence: "La racine s-b-r apparait 103 fois dans le Coran. La patience est la qualite que Dieu recompense le plus genereusement (39:10, « les patients recevront leur recompense sans compter »). Le refus de patience des enfants d'Israel est l'exact oppose de ce que le Coran exige. L'expression lan nasbira est unique dans le Coran — nulle part ailleurs un peuple ne declare aussi categoriquement son refus de patienter.",
              axe5_frequence: "Pour la mission du khalifa, la patience est la condition de reussite. Le khalifa impatient qui refuse l'epreuve ne peut pas accomplir sa mission. Les enfants d'Israel, en refusant de patienter devant la nourriture unique, montrent qu'ils ne sont pas a la hauteur de la mission divine. L'impatience est le signe d'un attachement au confort terrestre plutot qu'a l'obeissance divine."
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["sommet de montagne"],
              proof_ctx: "Le sommet de montagne est un sens concret rare de s-b-r. Le contexte verbal (nasbira = nous supporterons) exclut tout sens geographique."
            },
            "Sens isolé/Emprisonner": {
              status: "nul",
              senses: ["emprisonner"],
              proof_ctx: "L'emprisonnement est un sens concret de s-b-r (retenir quelqu'un). Le contexte est le refus de supporter, pas l'acte d'emprisonner."
            }
          }
        }
      },
      // =====================================================
      // taem (position 6) — "nourriture" — Gustation/Expérience
      // =====================================================
      {
        word_key: "taem", position: 6, sense_chosen: "nourriture",
        analysis_axes: {
          concept_chosen: "Gustation/Expérience",
          sense_chosen: "nourriture",
          concepts: {
            "Gustation/Expérience": {
              status: "retenu",
              senses: ["goûter", "manger", "nourriture", "saveur"],
              proof_ctx: "Le mot ta'amin est un nom masculin singulier indefini genitif de la racine t-'-m. Le Lane's donne « food, nourishment, aliment, what is eaten or tasted ». Le mot designe la nourriture en tant que chose qu'on goute et qu'on mange. L'indefini (ta'amin, pas al-ta'am) rend la nourriture generique — n'importe quelle nourriture, a condition qu'elle soit unique (wahid).",
              axe1_verset: "Le mot ta'amin est le complement de nasbira 'ala — ce sur quoi ils refusent de patienter. La nourriture unique est la manne du desert. Le mot ta'am ne designe pas seulement l'aliment physique mais l'experience gustative — une seule saveur, un seul gout. La monotonie gustative est la cause de leur plainte. La suite du verset enumere les nourritures variees qu'ils desirent — legumes, concombres, ail, lentilles, oignons.",
              axe2_voisins: "Le verset 57 mentionnait les bienfaits du desert (manne et cailles). Le verset 58 offrait la nourriture de la cite (mangez en abondance). Ce verset 61 revient a la plainte sur la nourriture du desert. La nourriture est le fil conducteur de ces versets — Dieu pourvoit mais les enfants d'Israel veulent plus de variete. Le passage de la manne aux legumes est une descente du celeste vers le terrestre.",
              axe3_sourate: "La racine t-'-m dans la sourate designe l'experience alimentaire. La nourriture est un bienfait divin qui requiert la gratitude. Les enfants d'Israel se plaignent du bienfait au lieu d'en etre reconnaissants. La sourate montre que l'ingratitude face a la nourriture est un signe de l'ingratitude face a Dieu.",
              axe4_coherence: "La racine t-'-m apparait 48 fois dans le Coran. En 6:141, « mangez de leurs fruits quand ils fructifient ». En 76:8-9, les justes nourrissent le pauvre pour l'amour de Dieu. La nourriture dans le Coran est toujours un signe divin et un test — recevoir la nourriture et s'en plaindre est un echec du test.",
              axe5_frequence: "Pour la mission du khalifa, la nourriture est un outil de mission, pas une fin en soi. Le khalifa qui se plaint de sa nourriture perd de vue sa mission. Les enfants d'Israel ont recu la manne pour survivre et accomplir leur mission — se plaindre de la monotonie montre que la nourriture est devenue une fin plutot qu'un moyen."
            }
          }
        }
      },
      // =====================================================
      // whd (position 7) — "unique" — Unicité/Unité (nul pour ce contexte)
      // =====================================================
      {
        word_key: "whd", position: 7, sense_chosen: "un",
        analysis_axes: {
          concept_chosen: "Unicité/Unité",
          sense_chosen: "un",
          concepts: {
            "Unicité/Unité": {
              status: "retenu",
              senses: ["un", "unique", "seul", "unifier"],
              proof_ctx: "Le mot wahidin est un adjectif masculin singulier indefini genitif de la racine w-h-d. Le Lane's donne « one, single, sole, unique ». L'adjectif qualifie ta'amin — une nourriture unique, une seule sorte. L'unicite ici est restrictive — elle designe la monotonie, le fait de n'avoir qu'une seule chose.",
              axe1_verset: "Le mot wahidin qualifie la nourriture comme unique — un seul type d'aliment. C'est cette unicite qui provoque la plainte. L'ironie du verset est que l'unicite est une qualite divine supreme (Dieu est wahid) mais les enfants d'Israel la rejettent quand elle s'applique a leur nourriture. La demande qui suit enumere cinq aliments differents (legumes, concombres, ail, lentilles, oignons) — la multiplicite terrestre contre l'unicite celeste.",
              axe2_voisins: "En 2:163, « Votre Dieu est un Dieu unique (ilahun wahidun) ». L'unicite divine est louee. Ici, l'unicite alimentaire est rejetee. Le contraste montre la selective des enfants d'Israel — ils acceptent certaines formes d'unicite et en rejettent d'autres. L'unicite de la nourriture est un test de leur acceptation de la volonte divine.",
              axe3_sourate: "La racine w-h-d dans la sourate porte le theme central du tawhid (unicite divine). En 2:133, « Nous adorerons ton Dieu, Dieu unique ». L'unicite est le fondement de la foi. L'emploi de wahid pour la nourriture dans ce verset cree un echo ironique — les enfants d'Israel rejettent l'unicite alimentaire tout en etant censes embrasser l'unicite divine.",
              axe4_coherence: "La racine w-h-d apparait 68 fois dans le Coran. Le mot wahid est le plus souvent utilise pour decrire Dieu. L'usage pour la nourriture en 2:61 est inhabituel et cree un contraste delibere entre l'unicite divine (desirable) et l'unicite alimentaire (rejetee). Ce contraste revele la nature des enfants d'Israel — ils veulent la variete dans le materiel et l'unicite dans le spirituel est trop exigeante.",
              axe5_frequence: "Pour la mission du khalifa, l'unicite de la nourriture est un test de simplicite. Le khalifa qui exige la variete materielle avant d'avoir accompli sa mission montre que ses priorites sont mal ordonnees. Les enfants d'Israel veulent la variete des plaisirs terrestres alors qu'ils n'ont pas encore accompli leur mission dans la cite."
            }
          }
        }
      },
      // =====================================================
      // dew (position 8) — "invoque" — Appel/Invocation
      // =====================================================
      {
        word_key: "dew", position: 8, sense_chosen: "invoquer",
        analysis_axes: {
          concept_chosen: "Appel/Invocation",
          sense_chosen: "invoquer",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appeler", "invoquer", "prier", "demander", "inviter"],
              proof_ctx: "Le verbe ud'u est un imperatif 2MS de la racine d-'-w. Le Lane's donne « he called, called upon, invoked, summoned, prayed to ». L'imperatif ordonne a Moise d'invoquer son Seigneur. Les enfants d'Israel ne s'adressent pas directement a Dieu mais passent par l'intermediaire prophetique — ils demandent a Moise d'invoquer pour eux.",
              axe1_verset: "Le verbe ud'u est le pivot de la demande des enfants d'Israel. Au lieu de patienter (nasbira), ils demandent a Moise d'invoquer (ud'u) — ils echangent la patience contre la demande. Le prefixe fa- (fa-ud'u) indique la consequence de leur impatience — puisque nous ne supportons pas, alors invoque. L'invocation est mediee par Moise — les enfants d'Israel ne prient pas directement mais font prier leur prophete pour des desirs materiels.",
              axe2_voisins: "Le verset 60 rapportait une invocation de Moise pour l'eau (istasqa Musa li-qawmihi) — une demande legitime pour un besoin vital. Ce verset 61 rapporte une invocation demandee par le peuple pour des legumes — un caprice gastronomique. Le contraste entre les deux invocations montre la degradation — de la demande legitime a la reclamation capricieuse.",
              axe3_sourate: "La racine d-'-w dans la sourate couvre toutes les formes d'appel. En 2:186, « quand Mes serviteurs t'interrogent sur Moi, Je suis proche, Je reponds a l'appel de celui qui M'appelle ». Dieu est accessible par l'invocation directe. Les enfants d'Israel evitent l'invocation directe et passent par Moise — un signe de distance avec Dieu.",
              axe4_coherence: "La racine d-'-w apparait 212 fois dans le Coran. L'invocation est un acte central de la relation avec Dieu. En 40:60, « Invoquez-Moi, Je vous repondrai ». Le Coran encourage l'invocation directe. Les enfants d'Israel qui demandent a Moise d'invoquer a leur place montrent une distance par rapport a Dieu — ils ne Lui parlent pas directement.",
              axe5_frequence: "Pour la mission du khalifa, l'invocation est l'outil premier de la mission. Le khalifa invoque Dieu directement pour les besoins de sa mission. Les enfants d'Israel refusent l'invocation directe et demandent a Moise d'invoquer pour des desirs materiels — un detournement de l'invocation."
            },
            "Prétention/Revendication": {
              status: "nul",
              senses: ["prétendre", "revendiquer une filiation"],
              proof_ctx: "La pretention est un sens de d-'-w dans d'autres contextes. Ici la forme imperative ud'u designe clairement l'acte d'invoquer Dieu, pas de pretendre quoi que ce soit."
            },
            "Sens isolé/Maudire": {
              status: "nul",
              senses: ["maudire"],
              proof_ctx: "La malediction est un appel au mal. Le contexte est une demande de nourriture, pas un appel au mal."
            }
          }
        }
      },
      // =====================================================
      // rbb (position 10) — "ton Seigneur" — Seigneurie/Autorité bienveillante
      // =====================================================
      {
        word_key: "rbb", position: 10, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          sense_chosen: "seigneur",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient", "seigneur"],
              proof_ctx: "Le mot rabbaka est un nom masculin singulier avec pronom 2MS de la racine r-b-b. Le Lane's donne « lord, master, owner, sustainer, nourisher ». Le pronom possessif (ton Seigneur) rattache la seigneurie a Moise — les enfants d'Israel disent « ton Seigneur » et non « notre Seigneur ». Cette formulation cree une distance — ils parlent du Seigneur de Moise, pas du leur.",
              axe1_verset: "Le mot rabbaka est l'objet de l'invocation (ud'u lana rabbaka). Les enfants d'Israel demandent a Moise d'invoquer son Seigneur pour obtenir de la nourriture terrestre. L'utilisation de « ton Seigneur » au lieu de « notre Seigneur » est significative — elle revele une relation distante avec Dieu. Ils ne L'invoquent pas directement et ne Le reconnaissent pas comme leur propre Seigneur dans cette demande.",
              axe2_voisins: "Le verset 60 utilisait « son peuple » (li-qawmihi) — Moise priait pour les siens. Ce verset 61 utilise « ton Seigneur » (rabbaka) — les enfants d'Israel renvoient la responsabilite a Moise. Le contraste montre un renversement — Moise servait son peuple, le peuple se decharge sur Moise. En 2:54, Moise dit « tournez-vous vers votre Createur » — la relation directe est exigee.",
              axe3_sourate: "La racine r-b-b est fondamentale dans la sourate. En 2:21, « adorez votre Seigneur ». En 2:62, « ceux qui croient en leur Seigneur ». La sourate insiste sur la relation directe avec le Seigneur. L'expression « ton Seigneur » plutot que « notre Seigneur » dans la bouche des enfants d'Israel est un ecart par rapport a cette relation directe.",
              axe4_coherence: "La racine r-b-b apparait 980 fois dans le Coran. Le mot Rabb est le nom divin le plus frequent apres Allah. L'expression « ton Seigneur » (rabbaka) est frequemment adressee au Prophete par Dieu. Mais dans la bouche des enfants d'Israel, elle marque une distance — ils relegent la relation divine a leur prophete au lieu de l'assumer eux-memes.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est la source de la mission. Le khalifa reconnait Dieu comme son Seigneur — il dit « mon Seigneur », pas « le Seigneur de quelqu'un d'autre ». Les enfants d'Israel qui disent « ton Seigneur » a Moise montrent qu'ils n'assument pas personnellement leur relation avec Dieu."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["augmentation de dette", "intérêt", "usure"],
              proof_ctx: "L'usure est un sens de r-b-b dans le domaine financier. Le contexte utilise rabbaka (ton Seigneur) dans une invocation — la relation seigneuriale est evidente."
            },
            "Croissance/Augmentation": {
              status: "nul",
              senses: ["développer", "augmenter", "croître"],
              proof_ctx: "La croissance est le sens physique de r-b-b. Le mot rabbaka avec le pronom possessif designe clairement le Seigneur, pas un processus de croissance."
            }
          }
        }
      },
      // =====================================================
      // xrj (position 11) — "fasse sortir" — Sortie/Émergence
      // =====================================================
      {
        word_key: "xrj", position: 11, sense_chosen: "faire sortir",
        analysis_axes: {
          concept_chosen: "Sortie/Émergence",
          sense_chosen: "faire sortir",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le verbe yukhrij est un inaccompli 3MS forme IV majzum de la racine kh-r-j. Le Lane's donne « he went out, came out, emerged ». La forme IV (akhraja) signifie « faire sortir activement ». Le sujet implicite est Dieu (via l'invocation) — c'est Dieu qui fait sortir de la terre les productions vegetales. Le majzum est lie a la structure de souhait (invoque pour nous ton Seigneur qu'Il fasse sortir).",
              axe1_verset: "Le verbe yukhrij decrit l'action divine attendue — faire sortir de la terre ce qu'elle produit. La chaine est : les enfants d'Israel demandent a Moise, Moise invoque Dieu, Dieu fait sortir de la terre. La sortie est de l'interieur (la terre) vers l'exterieur (la surface) — un mouvement ascendant de la graine vers la plante. La suite enumere ce qui doit sortir : legumes, concombres, ail, lentilles, oignons.",
              axe2_voisins: "Le verset 60 rapportait la sortie de l'eau du rocher (fa-nfajarat minhu ithnataa 'ashrata 'aynan). Ce verset 61 demande la sortie des vegetaux de la terre. Les deux sont des sorties miraculeuses — l'eau du rocher et la nourriture de la terre. La difference est que l'eau etait un besoin vital et les legumes un caprice.",
              axe3_sourate: "La racine kh-r-j dans la sourate designe les sorties divines et les expulsions. En 2:22, Dieu fait descendre l'eau du ciel et fait sortir les fruits. En 2:167, les damnes voudraient sortir du Feu. La sortie est un mecanisme divin — Dieu fait sortir ce qu'Il veut de ou Il veut.",
              axe4_coherence: "La racine kh-r-j apparait 181 fois dans le Coran. L'expression « faire sortir de la terre » est un theme recurrent de la puissance divine. En 6:95, « Dieu fait sortir le vivant du mort et le mort du vivant ». La sortie est un signe de la puissance creatrice — la terre inerte produit des plantes vivantes.",
              axe5_frequence: "Pour la mission du khalifa, la sortie de la terre est un signe a observer. Le khalifa voit dans la croissance vegetale la puissance divine. Les enfants d'Israel demandent cette sortie mais pour leur confort, pas pour mediter le signe."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impôt", "revenu"],
              proof_ctx: "Le tribut est un sens de kh-r-j dans le domaine fiscal. Le contexte utilise la forme IV causative (faire sortir) appliquee a la vegetation, pas aux impots."
            }
          }
        }
      },
      // =====================================================
      // nbt (position 14) — "fait pousser" — Croissance végétale
      // =====================================================
      {
        word_key: "nbt", position: 14, sense_chosen: "faire pousser",
        analysis_axes: {
          concept_chosen: "Croissance végétale",
          sense_chosen: "faire pousser",
          concepts: {
            "Croissance végétale": {
              status: "retenu",
              senses: ["pousser", "faire germer", "végétation", "plante"],
              proof_ctx: "Le verbe tunbitu est un inaccompli 3FS forme IV de la racine n-b-t. Le Lane's donne « it sprouted, grew, germinated ». La forme IV (anbata) signifie « faire pousser, faire germer ». Le sujet est al-ardu (la terre) — c'est la terre qui fait pousser. Le verbe complete yukhrij — Dieu fait sortir ce que la terre fait pousser.",
              axe1_verset: "Le verbe tunbitu precise le mecanisme de production. Ce n'est pas une creation ex nihilo mais une pousse naturelle de la terre. La terre est presentee comme un agent secondaire — elle fait pousser par la volonte de Dieu. La sequence yukhrij/tunbitu lie deux agents : Dieu (fait sortir) et la terre (fait pousser). La vegetation demandee est terrestre et ordinaire — pas celeste et miraculeuse comme la manne.",
              axe2_voisins: "Le verset 60 mentionnait l'eau jaillissant du rocher — un miracle. Ce verset 61 demande la pousse naturelle de la terre — un processus ordinaire. Les enfants d'Israel veulent quitter le miraculeux pour l'ordinaire. La pousse de la terre est un processus quotidien — ils veulent la normalite du monde terrestre au lieu de l'exception du desert.",
              axe3_sourate: "La racine n-b-t dans la sourate est liee a la croissance et a la vegetation. En 2:261, la parabole du grain qui pousse (anbata sab'a sanabila). La croissance vegetale est un signe de la puissance divine. La sourate utilise la vegetation comme metaphore de la multiplication des bonnes actions.",
              axe4_coherence: "La racine n-b-t apparait 26 fois dans le Coran. En 3:37, Dieu fait pousser Marie d'une belle pousse (anbataha nabatan hasanan). En 71:17, Dieu fait pousser les humains de la terre comme des plantes. La pousse est un acte divin permanent — Dieu fait pousser toute chose vivante de la terre.",
              axe5_frequence: "Pour la mission du khalifa, la pousse de la terre est un signe a mediter. Le khalifa observe la vegetation et reconnait la puissance divine. Les enfants d'Israel veulent la pousse terrestre pour la consommer, pas pour la mediter — leur rapport a la creation est utilitaire."
            }
          }
        }
      },
      // =====================================================
      // ard (position 15) — "la terre" — Terre/Sol
      // =====================================================
      {
        word_key: "ard", position: 15, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          sense_chosen: "terre",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "bas", "sol", "pays"],
              proof_ctx: "Le mot al-ardu est un nom feminin singulier defini nominatif de la racine a-r-d. Le Lane's donne « earth, land, ground, soil, country ». La terre est ici le sol qui fait pousser les vegetaux. L'article defini (al-) designe la terre en general — toute terre qui produit. Le nominatif indique que la terre est le sujet de tunbitu (fait pousser).",
              axe1_verset: "Le mot al-ardu est le sujet de tunbitu — la terre fait pousser. Les enfants d'Israel veulent ce que la terre produit naturellement — des legumes, des concombres, de l'ail. La terre est le lieu de la production ordinaire, par opposition au ciel d'ou descendait la manne. Demander ce que la terre produit c'est choisir le terrestre au lieu du celeste. La terre est le lieu de la descente (ihbituu misran) — ils doivent descendre vers le terrestre.",
              axe2_voisins: "Le verset 60 mentionnait le rocher — la pierre dure de laquelle jaillit l'eau. Ce verset 61 mentionne la terre — le sol fertile de laquelle poussent les legumes. Le rocher (miracle) cede la place a la terre (nature ordinaire). Les enfants d'Israel preferent la terre fertile au rocher miraculeux.",
              axe3_sourate: "La racine a-r-d est l'une des plus frequentes de la sourate. En 2:22, « Celui qui a fait de la terre un lit pour vous ». En 2:30, « Je vais etablir sur terre un khalifa ». La terre est le lieu de la mission du khalifa — c'est sur terre que se joue la responsabilite humaine.",
              axe4_coherence: "La racine a-r-d apparait 461 fois dans le Coran. La terre est systematiquement opposee au ciel — ce qui est en bas versus ce qui est en haut. En 7:160, le verset parallele mentionne les memes productions terrestres. La terre produit par la volonte de Dieu — rien ne pousse sans Sa permission.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu d'exercice de la mission. Le khalifa travaille la terre et en tire sa subsistance. Les enfants d'Israel veulent les produits de la terre mais sans l'effort et sans la gratitude — ils veulent le resultat sans la mission."
            }
          }
        }
      },
      // =====================================================
      // bql (position 17) — "legumes" — nul concept
      // =====================================================
      {
        word_key: "bql", position: 17, sense_chosen: "legumes verts",
        analysis_axes: {
          concept_chosen: "Végétaux comestibles",
          sense_chosen: "legumes verts",
          concepts: {
            "Végétaux comestibles": {
              status: "retenu",
              senses: ["légumes verts", "herbes", "verdure"],
              proof_ctx: "Le mot baqliha est un nom masculin singulier avec pronom 3FS de la racine b-q-l. Le Lane's donne « herbs, vegetables, pot-herbs, leguminous plants ». Les legumes verts sont les herbes potageres cultivees. Le pronom (ha = d'elle) rattache les legumes a la terre — les legumes de la terre. C'est le premier des cinq aliments enumeres dans la demande des enfants d'Israel."
            }
          }
        }
      },
      // =====================================================
      // qtha (position 18) — "concombres" — nul concept
      // =====================================================
      {
        word_key: "qtha", position: 18, sense_chosen: "concombre",
        analysis_axes: {
          concept_chosen: "Légume/Désir terrestre",
          sense_chosen: "concombre",
          concepts: {
            "Légume/Désir terrestre": {
              status: "retenu",
              senses: ["concombre", "courge"],
              proof_ctx: "Le mot qiththa'iha est un nom masculin singulier avec pronom 3FS de la racine q-th-'. Le Lane's donne « cucumber, a certain vegetable ». Le concombre est le deuxieme aliment enumere. Le pronom (ha) rattache le concombre a la terre. La demande de concombres revele l'attachement aux plaisirs terrestres — un fruit frais et desaltérant du monde d'en bas."
            }
          }
        }
      },
      // =====================================================
      // fwm (position 19) — "ail" — nul concept
      // =====================================================
      {
        word_key: "fwm", position: 19, sense_chosen: "ail",
        analysis_axes: {
          concept_chosen: "Condiment/Terrestre",
          sense_chosen: "ail",
          concepts: {
            "Condiment/Terrestre": {
              status: "retenu",
              senses: ["ail", "blé"],
              proof_ctx: "Le mot fumiha est un nom masculin singulier avec pronom 3FS de la racine f-w-m. Le Lane's donne « garlic, or according to some wheat ». L'ail est le troisieme aliment enumere. Certains commentateurs y voient le ble. Le sens d'ail s'inscrit mieux dans la liste de legumes et condiments terrestres. L'ail d'Egypte symbolise l'attachement aux saveurs du monde quitte."
            }
          }
        }
      },
      // =====================================================
      // eds (position 20) — "lentilles" — nul concept
      // =====================================================
      {
        word_key: "eds", position: 20, sense_chosen: "lentilles",
        analysis_axes: {
          concept_chosen: "Légumineuse/Terrestre",
          sense_chosen: "lentilles",
          concepts: {
            "Légumineuse/Terrestre": {
              status: "retenu",
              senses: ["lentilles", "légumineuses"],
              proof_ctx: "Le mot 'adasiha est un nom masculin singulier avec pronom 3FS de la racine '-d-s. Le Lane's donne « lentils, a well-known grain ». Les lentilles sont le quatrieme aliment enumere. Elles representent la nourriture simple et terrestre que les enfants d'Israel preferaient a la manne celeste."
            }
          }
        }
      },
      // =====================================================
      // bsl (position 21) — "oignons" — nul concept
      // =====================================================
      {
        word_key: "bsl", position: 21, sense_chosen: "oignon",
        analysis_axes: {
          concept_chosen: "Condiment/Terrestre",
          sense_chosen: "oignon",
          concepts: {
            "Condiment/Terrestre": {
              status: "retenu",
              senses: ["oignon", "bulbe"],
              proof_ctx: "Le mot basaliha est un nom masculin singulier avec pronom 3FS de la racine b-s-l. Le Lane's donne « onion, a well-known plant ». L'oignon est le cinquieme et dernier aliment enumere. L'enumeration de cinq aliments terrestres face a la manne unique celeste souligne le contraste entre la multiplicite du desir et l'unicite du don divin."
            }
          }
        }
      },
      // =====================================================
      // bdl (position 23) — "voulez-vous echanger" — Changement/Substitution
      // =====================================================
      {
        word_key: "bdl", position: 23, sense_chosen: "substituer",
        analysis_axes: {
          concept_chosen: "Changement/Substitution",
          sense_chosen: "substituer",
          concepts: {
            "Changement/Substitution": {
              status: "retenu",
              senses: ["changer", "remplacer", "substituer", "échange"],
              proof_ctx: "Le verbe atastabdiluna est un inaccompli 2MP forme X interrogatif de la racine b-d-l. Le Lane's donne « he sought to exchange, to take in exchange, to substitute ». La forme X (istabdala) signifie « chercher a obtenir en echange ». Le hamza interrogatif (a-tastabdiluna) transforme l'affirmation en reproche — Voulez-vous echanger le meilleur contre le pire ?",
              axe1_verset: "Le verbe atastabdiluna est le pivot du reproche de Moise. La question est rhetorique — elle ne demande pas une reponse mais condamne l'acte. L'echange est le meilleur (khayrun) contre le plus vil (adna). La manne celeste est le meilleur et les legumes terrestres sont le plus vil. La forme X (recherche active d'echange) montre que les enfants d'Israel cherchent deliberement a degrader leur situation. L'echange n'est pas impose — c'est un choix volontaire de descente.",
              axe2_voisins: "Le verset 59 utilisait la forme II (baddala) pour decrire la substitution de la parole divine. Ce verset 61 utilise la forme X (istabdala) pour decrire la substitution de la nourriture divine. Les deux versets montrent le meme schema — les enfants d'Israel substituent le divin par le terrestre. La substitution est leur faute recurrente : ils changent la parole et ils changent la nourriture.",
              axe3_sourate: "La racine b-d-l dans la sourate designe les actes de substitution blames. En 2:59, ils ont change la parole. En 2:211, « celui qui change le bienfait de Dieu ». La sourate montre que la substitution du bienfait divin est un acte grave qui entraine des consequences. Le changement delibere du meilleur en pire est la definition de l'injustice envers soi-meme.",
              axe4_coherence: "La racine b-d-l apparait 44 fois dans le Coran. La forme X (istabdala) apparait 3 fois — en 2:61, 4:2 et 47:38. Dans chaque cas, l'echange est blame — substituer le bien par le mal, le pur par l'impur. En 4:2, « ne substituez pas le mauvais au bon ». Le Coran condamne toute substitution qui degrade la qualite morale ou spirituelle.",
              axe5_frequence: "Pour la mission du khalifa, la substitution est le piege principal. Le khalifa qui echange les valeurs superieures de sa mission contre les plaisirs inferieurs echoue. Les enfants d'Israel echangent la manne celeste contre des legumes terrestres — le paradigme de la substitution de mission."
            }
          }
        }
      },
      // =====================================================
      // dnw (position 26) — "plus vil" — Proximité/Monde d'ici-bas
      // =====================================================
      {
        word_key: "dnw", position: 26, sense_chosen: "proche",
        analysis_axes: {
          concept_chosen: "Proximité/Monde d'ici-bas",
          sense_chosen: "proche",
          concepts: {
            "Proximité/Monde d'ici-bas": {
              status: "retenu",
              senses: ["être proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le mot adna est un elatif masculin singulier nominatif de la racine d-n-w. Le Lane's donne « nearer, lower, baser, more contemptible, inferior ». L'elatif signifie « plus proche » ou « plus bas/vil ». Le Lane's precise que adna peut signifier a la fois « plus proche » (en distance) et « plus vil » (en valeur). Le contexte oppose adna a khayr — le plus vil au meilleur. La dunyaa (monde d'ici-bas) vient de la meme racine — le monde proche et vil.",
              axe1_verset: "Le mot adna designe ce que les enfants d'Israel preferent — le plus vil, le plus bas. Les legumes terrestres sont adna par rapport a la manne celeste. Le reproche de Moise est que les enfants d'Israel choisissent volontairement ce qui est inferieur. Le mot adna cree un jeu de mots avec al-dunya (le monde d'ici-bas) — choisir les legumes c'est choisir le monde d'ici-bas. L'echange du khayr (meilleur) contre l'adna (plus vil) est l'essence de la perte.",
              axe2_voisins: "Le verset 59 montrait le chatiment pour avoir change la parole divine. Ce verset 61 montre le reproche pour avoir prefere le vil au meilleur. Les deux versets decrivent des degradations — la parole degradee et la nourriture degradee. Les enfants d'Israel choisissent systematiquement le bas contre le haut, le proche contre le lointain.",
              axe3_sourate: "La racine d-n-w dans la sourate designe le monde d'ici-bas et la proximite. En 2:85, « ceux qui achetent la vie d'ici-bas (al-hayat al-dunya) ». En 2:201, « donne-nous dans le monde d'ici-bas ». La sourate oppose systematiquement la dunya a l'akhira. Le choix de l'adna dans ce verset est le choix de la dunya — les legumes terrestres contre la manne celeste.",
              axe4_coherence: "La racine d-n-w apparait 133 fois dans le Coran. L'elatif adna est utilise pour decrire ce qui est inferieur en valeur. En 87:16-17, « vous preferez la vie d'ici-bas alors que l'au-dela est meilleur et plus durable ». Le Coran reproche systematiquement le choix du proche et du vil au detriment du lointain et du meilleur.",
              axe5_frequence: "Pour la mission du khalifa, l'adna est le piege de la proximite. Le khalifa tente par le proche et le vil perd de vue le meilleur et le lointain. Les enfants d'Israel choisissent les legumes proches plutot que la manne meilleure — le paradigme de la tentation d'ici-bas."
            }
          }
        }
      },
      // =====================================================
      // hbt (position 30) — "descendez" — Descente/Chute
      // =====================================================
      {
        word_key: "hbt", position: 30, sense_chosen: "descendre",
        analysis_axes: {
          concept_chosen: "Descente/Chute",
          sense_chosen: "descendre",
          concepts: {
            "Descente/Chute": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "baisser", "tomber"],
              proof_ctx: "Le verbe ihbituu est un imperatif 2MP de la racine h-b-t. Le Lane's donne « he descended, went down, alighted from a higher to a lower place ». L'imperatif ordonne la descente — descendez dans une cite. La descente est du haut vers le bas, du desert (lieu d'epreuve elevee) vers la cite (lieu de confort bas). Le meme verbe est utilise en 2:36 pour la descente d'Adam du Paradis.",
              axe1_verset: "Le verbe ihbituu est la reponse de Moise a la demande de legumes. Si vous voulez des legumes, descendez dans une cite — vous y trouverez ce que vous voulez. La descente est une consequence du choix — choisir les legumes c'est devoir descendre. Le verbe ihbituu cree un parallele avec la descente d'Adam (2:36-38) — les enfants d'Israel repetent la chute adamique. Adam est descendu du Paradis pour avoir mange, les enfants d'Israel descendent du desert pour vouloir manger autrement.",
              axe2_voisins: "Le verset 58 ordonnait d'entrer dans une cite (udkhuluu) — une entree avec honneur. Ce verset 61 ordonne de descendre dans une cite (ihbituu) — une descente avec blame. Le contraste entre udkhuluu (entrer) et ihbituu (descendre) est significatif. L'entree de 2:58 etait un privilege conditionne par la prosternation. La descente de 2:61 est une concession au caprice — une degradation.",
              axe3_sourate: "La racine h-b-t dans la sourate designe les descentes-chutes. En 2:36, « Descendez ! Vous etes ennemis les uns des autres ». En 2:38, « Descendez-en tous ». La descente est toujours liee a une perte de statut — on descend quand on echoue a l'epreuve. La sourate etablit un parallele entre la descente d'Adam et la descente des enfants d'Israel — meme schema d'echec.",
              axe4_coherence: "La racine h-b-t apparait 16 fois dans le Coran. En 7:161, le verset parallele utilise udkhuluu (entrez) au lieu de ihbituu (descendez) — la variante est significative. La sourate al-Baqarah utilise ihbituu pour souligner la dimension de chute et de degradation que le verset parallele de la sourate 7 n'a pas.",
              axe5_frequence: "Pour la mission du khalifa, la descente est la consequence de l'echec. Le khalifa qui choisit le confort terrestre au lieu de l'epreuve divine descend de son rang. Les enfants d'Israel descendent du statut de peuple guide dans le desert au statut de citadins ordinaires. La descente est une perte de mission."
            },
            "Dégradation": {
              status: "nul",
              senses: ["dégrader"],
              proof_ctx: "La degradation est un sens derive de h-b-t. L'imperatif ihbituu designe le mouvement physique de descente, meme si la degradation morale est implicite dans le contexte."
            }
          }
        }
      },
      // =====================================================
      // msr (position 31) — "cite" — Lieu/Civilisation
      // =====================================================
      {
        word_key: "msr", position: 31, sense_chosen: "grande ville",
        analysis_axes: {
          concept_chosen: "Lieu/Civilisation",
          sense_chosen: "grande ville",
          concepts: {
            "Lieu/Civilisation": {
              status: "retenu",
              senses: ["Égypte", "grande ville"],
              proof_ctx: "Le mot misran est un nom masculin singulier indefini accusatif de la racine m-s-r. Le Lane's donne « Egypt, a great town, a city, a territory ». Le mot est au tanwin (misran) — c'est un indefini, donc il designe « une cite » generique et non l'Egypte en particulier. S'il s'agissait de l'Egypte, le mot serait Misra (diptote sans tanwin). L'indefini signifie que n'importe quelle ville suffit pour trouver des legumes.",
              axe1_verset: "Le mot misran est la destination de la descente (ihbituu misran). La cite est le lieu ou les enfants d'Israel trouveront les legumes qu'ils desirent. Le verset implique que les legumes sont disponibles dans n'importe quelle cite — la demande est banale et n'exige pas l'intervention divine. L'ironie est que les enfants d'Israel demandent a Dieu ce que n'importe quelle cite offre — ils sollicitent le miracle pour l'ordinaire.",
              axe2_voisins: "Le verset 58 mentionnait la cite (al-qaryata) comme un don divin. Ce verset 61 mentionne une cite (misran) comme une concession au caprice. La cite de 2:58 etait un privilege — entrez et mangez en abondance. La cite de 2:61 est un rabaissement — descendez et trouvez vos legumes. Le passage de al-qaryata (defini, connue) a misran (indefini, quelconque) marque la degradation.",
              axe3_sourate: "La racine m-s-r est rare dans la sourate. L'Egypte est le pays dont les enfants d'Israel sont sortis — leur demander de descendre dans une cite peut etre une allusion au retour en Egypte. Demander les legumes d'Egypte c'est vouloir retourner a l'esclavage pour le confort alimentaire. La sourate montre que la nostalgie du confort passe peut mener a la perte du present.",
              axe4_coherence: "La racine m-s-r apparait 5 fois dans le Coran. En 10:87, « installez-vous en Egypte (bi-Misra) ». En 12:21, Joseph arrive en Egypte (Misra). Quand le Coran designe l'Egypte comme pays propre, il utilise Misra (diptote). L'indefini misran dans ce verset designe donc une cite generique — n'importe quelle ville ou les legumes sont disponibles.",
              axe5_frequence: "Pour la mission du khalifa, la cite est le lieu de la facilite. Le khalifa qui prefere la cite au desert choisit le confort. Les enfants d'Israel sont renvoyes a la cite — au lieu de la mission dans le desert, la vie ordinaire dans une ville quelconque."
            },
            "Limite/Séparation": {
              status: "nul",
              senses: ["frontière"],
              proof_ctx: "La frontiere est un sens de m-s-r. Le contexte utilise misran au sens de cite/ville, pas de frontiere territoriale."
            }
          }
        }
      },
      // =====================================================
      // sal (position 35) — "avez demande" — Requête/Interrogation
      // =====================================================
      {
        word_key: "sal", position: 35, sense_chosen: "demander",
        analysis_axes: {
          concept_chosen: "Requête/Interrogation",
          sense_chosen: "demander",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["questionner", "interroger", "demander"],
              proof_ctx: "Le verbe sa'altum est un accompli 2MP de la racine s-'-l. Le Lane's donne « he asked, questioned, requested, demanded ». Le verbe designe la demande active — ce qu'ils ont reclame. L'accompli (sa'altum = vous avez demande) renvoie a la demande de legumes formulee au debut du verset. La construction inna lakum ma sa'altum signifie « certes pour vous ce que vous avez demande » — la promesse est conditionnelle.",
              axe1_verset: "Le verbe sa'altum cloture la reponse de Moise sur un ton de concession. La structure est : descendez dans une cite (ihbituu misran) car vous y trouverez ce que vous avez demande (ma sa'altum). La demande est accordee mais a un prix — la descente. Le fait que la demande soit accordee ne signifie pas qu'elle soit approuvee. La concession divine n'est pas une approbation.",
              axe2_voisins: "Le verset 60 rapportait la demande d'eau de Moise (istasqa) — une demande approuvee et recompensee par douze sources. Ce verset 61 rapporte la demande de legumes (sa'altum) — une demande concedee mais blamee. Le contraste entre les deux demandes montre que toute requete n'est pas egale — la demande de necessite est approuvee, la demande de caprice est concedee avec blame.",
              axe3_sourate: "La racine s-'-l dans la sourate couvre les questions et les demandes. En 2:108, « voulez-vous questionner votre messager comme Moise fut questionne auparavant ? ». En 2:186, l'invocation est une forme de demande approuvee. La sourate distingue les demandes legitimes des demandes capricieuses.",
              axe4_coherence: "La racine s-'-l apparait 129 fois dans le Coran. Le Coran distingue la demande pieuse (du'a') de la demande capricieuse (su'al). En 2:61, la demande est capricieuse — les enfants d'Israel demandent des legumes au lieu d'accepter la manne. Le Coran montre que Dieu accorde parfois ce que l'homme demande meme si c'est inferieur a ce qu'Il offre.",
              axe5_frequence: "Pour la mission du khalifa, la demande doit etre alignee sur la mission. Le khalifa qui demande le confort plutot que la guidance demande le mauvais. Les enfants d'Israel demandent des legumes — une demande materialiste deconnectee de leur mission spirituelle."
            }
          }
        }
      },
      // =====================================================
      // drb (position 36) — "furent plaquees" — Frappe/Coup
      // =====================================================
      {
        word_key: "drb", position: 36, sense_chosen: "frapper",
        analysis_axes: {
          concept_chosen: "Frappe/Coup",
          sense_chosen: "frapper",
          concepts: {
            "Frappe/Coup": {
              status: "retenu",
              senses: ["frapper", "battre"],
              proof_ctx: "Le verbe duribat est un accompli passif 3FS de la racine d-r-b. Le Lane's donne « he struck, hit, beat, stamped ». Le passif signifie « fut frappee/plaquee ». Le sujet grammatical est al-dhillatu (l'humiliation) — l'humiliation fut plaquee sur eux. La frappe est une imposition violente — l'humiliation et la misere ne sont pas venues doucement mais ont ete plaquees sur eux comme un sceau.",
              axe1_verset: "Le verbe duribat introduit la section des consequences. Apres la plainte et la reponse de Moise, le verset passe aux chatiments. L'humiliation et la misere furent plaquees sur eux — la frappe est un marquage permanent. L'expression duribat 'alayhim al-dhillatu est une expression coranique fixe qui designe l'imposition de l'humiliation. La frappe est comme un sceau — une marque indelebile apposee sur un peuple.",
              axe2_voisins: "Le verset 59 rapportait un chatiment descendu du ciel (rijzan mina al-sama'i). Ce verset 61 rapporte un chatiment plaque sur eux (duribat 'alayhim). Les deux chatiments sont differents — le premier est un fleau ponctuel, le second est un marquage permanent. L'humiliation et la misere sont des etats durables, pas des fleaux ponctuels.",
              axe3_sourate: "La racine d-r-b dans la sourate a des sens varies. En 2:26, Dieu frappe des exemples (yadhribu amthalan). En 2:60, Moise frappe le rocher de son baton. En 2:61, l'humiliation est frappee sur eux. La frappe divine prend des formes variees — exemples pedagogiques, miracles, chatiments. La sourate utilise la frappe comme acte d'autorite divine.",
              axe4_coherence: "La racine d-r-b apparait 58 fois dans le Coran. L'expression duribat 'alayhim al-dhillatu est repetee en 3:112 dans un contexte similaire. La frappe de l'humiliation est un chatiment specifique aux enfants d'Israel desobeissants. L'humiliation frappee est un marquage — comme une monnaie frappee, elle porte une inscription indelebile.",
              axe5_frequence: "Pour la mission du khalifa, la frappe de l'humiliation est la consequence de la desobeissance chronique. Le khalifa qui desobeit de maniere repetee recoit un marquage d'humiliation. Les enfants d'Israel recoivent ce marquage parce que leur desobeissance est systematique — plainte, substitution, meurtre des prophetes."
            },
            "Établissement/Institution": {
              status: "nul",
              senses: ["frapper la monnaie", "donner un exemple", "établir"],
              proof_ctx: "L'etablissement (frapper la monnaie, dresser une tente) est un sens de d-r-b dans d'autres contextes. Ici le passif duribat avec 'alayhim (sur eux) et le sujet al-dhillatu (l'humiliation) indique clairement l'imposition d'un etat de honte."
            },
            "Déplacement": {
              status: "nul",
              senses: ["voyager"],
              proof_ctx: "Le voyage (daraba fi al-ard) est un sens de d-r-b. Le contexte passif (duribat 'alayhim) exclut tout sens de deplacement."
            }
          }
        }
      },
      // =====================================================
      // skn (position 39) — "misere" — Habitation/Demeure (sens derive)
      // =====================================================
      {
        word_key: "skn", position: 39, sense_chosen: "pauvrete",
        analysis_axes: {
          concept_chosen: "Sens isolé/Pauvre",
          sense_chosen: "pauvrete",
          concepts: {
            "Sens isolé/Pauvre": {
              status: "retenu",
              senses: ["pauvre"],
              proof_ctx: "Le mot al-maskanatu est un nom feminin singulier defini nominatif de la racine s-k-n. Le Lane's donne « poverty, neediness, lowliness, abjection ». Le maskanah est l'etat de misere — celui qui est si immobilise par la pauvrete qu'il ne peut plus bouger (lien avec sakana = rester immobile). L'article defini (al-) fait de la misere un etat connu et identifie. Le mot est coordonne avec al-dhillatu (l'humiliation) — les deux etats sont lies."
            },
            "Habitation/Demeure": {
              status: "nul",
              senses: ["habiter", "demeurer"],
              proof_ctx: "L'habitation est le sens premier de s-k-n. Le mot al-maskanatu est un derive specifique qui designe l'etat de pauvrete — celui qui est si immobile qu'il ne peut rien faire. Le contexte est clairement punitif."
            },
            "Calme/Repos": {
              status: "nul",
              senses: ["se reposer", "s'apaiser", "être calme"],
              proof_ctx: "Le calme est un sens de s-k-n. Le mot maskanah designe la pauvrete immobilisante, pas la tranquillite — c'est l'immobilite forcee du pauvre, pas le repos volontaire."
            }
          }
        }
      },
      // =====================================================
      // bwa (position 40) — "revinrent charges" — Retour/Mérite
      // =====================================================
      {
        word_key: "bwa", position: 40, sense_chosen: "retourner",
        analysis_axes: {
          concept_chosen: "Retour/Mérite",
          sense_chosen: "retourner",
          concepts: {
            "Retour/Mérite": {
              status: "retenu",
              senses: ["retourner", "mériter", "établir"],
              proof_ctx: "Le verbe ba'uu est un accompli 3MP de la racine b-w-'. Le Lane's donne « he returned, came back, incurred (guilt, blame, anger), deserved ». Le verbe signifie « ils revinrent charges de » ou « ils meritèrent ». La construction ba'uu bi-ghadabin min Allahi signifie « ils revinrent avec la desapprobation de Dieu » — ils ont merite la desapprobation comme on retourne chez soi charge de son fardeau.",
              axe1_verset: "Le verbe ba'uu lie le retour au merite — ils reviennent charges de la desapprobation divine. Le retour n'est pas un mouvement physique mais un retour moral — ils retournent a un etat de blame. Le verbe ba'a implique que la desapprobation est devenue leur demeure — ils s'y installent comme on s'installe chez soi. La suite du verset explique la cause de cette desapprobation — la couverture des signes et le meurtre des prophetes.",
              axe2_voisins: "Le verset 59 rapportait un chatiment descendu du ciel. Ce verset 61 rapporte la desapprobation divine meritee. Les deux sont des consequences de la desobeissance mais de nature differente — le chatiment est un evenement ponctuel, la desapprobation est un etat permanent. Les enfants d'Israel cumulent les chatiments ponctuels et les etats de blame permanents.",
              axe3_sourate: "La racine b-w-' dans la sourate apparait pour decrire le retour charge de blame. L'expression ba'uu bi-ghadabin est une formule recurrente dans le Coran pour les enfants d'Israel. La sourate montre que la desapprobation divine s'accumule — chaque faute ajoute une couche de blame.",
              axe4_coherence: "La racine b-w-' apparait 8 fois dans le Coran. En 3:112, l'expression ba'uu bi-ghadabin min Allahi est repetee dans un contexte similaire. Le retour charge de desapprobation est un chatiment specifique — il designe un etat permanent d'opprobre divin. Le verbe ba'a implique que la desapprobation est devenue une seconde nature.",
              axe5_frequence: "Pour la mission du khalifa, le retour charge de blame est l'echec ultime. Le khalifa qui merite la desapprobation divine ne peut plus remplir sa mission. Les enfants d'Israel revinrent charges de desapprobation — leur mission est compromise par leur propre conduite."
            }
          }
        }
      },
      // =====================================================
      // ghdb (position 41) — "desapprobation" — Contraire de al-rida
      // =====================================================
      {
        word_key: "ghdb", position: 41, sense_chosen: "contraire de al-rida",
        analysis_axes: {
          concept_chosen: "Contraire de al-rida",
          sense_chosen: "contraire de al-rida",
          concepts: {
            "Contraire de al-rida": {
              status: "retenu",
              senses: ["être en colère", "contraire de al-rida", "excitation du sang du cœur", "accès de colère", "en colère rapidement", "rendre en colère", "devenir en colère progressivement", "objet de colère", "faculté irascible", "perturbé dans les relations", "se mettre mutuellement en colère", "colère"],
              proof_ctx: "Le mot ghadabin est un nom masculin singulier indefini genitif de la racine gh-d-b. Le Lane's definit ghadab comme « the contrary of al-rida ». Le rida est la satisfaction, l'approbation, le contentement. Le ghadab est donc la desapprobation — le contraire de la satisfaction. La construction bi-ghadabin min Allahi signifie « avec la desapprobation de Dieu ». La preposition min (de Dieu) indique l'origine — la desapprobation vient de Dieu et atteint les enfants d'Israel.",
              axe1_verset: "Le mot ghadabin designe l'etat que les enfants d'Israel ont merite (ba'uu bi-ghadab). La desapprobation divine est la consequence de leurs actes enumeres ensuite : la couverture des signes et le meurtre des prophetes. La desapprobation est un jugement rationnel — Dieu ne se satisfait pas de leur conduite. Le verset presente la desapprobation comme un etat acquis — ils l'ont meritee par leurs actes repetitifs.",
              axe2_voisins: "Le verset 59 rapportait un chatiment materiel (rijz). Ce verset 61 rapporte une desapprobation morale (ghadab). Le chatiment materiel est ponctuel — un fleau qui frappe et qui passe. La desapprobation morale est permanente — elle reste tant que les causes persistent. Les enfants d'Israel recoivent les deux — le fleau ponctuel et la desapprobation permanente.",
              axe3_sourate: "La racine gh-d-b dans la sourate est liee au jugement divin. En 2:90, « ils ont encouru colere sur colere ». L'accumulation de la desapprobation montre que les enfants d'Israel repetent leurs fautes sans se corriger. La sourate presente la desapprobation divine comme un processus cumulatif — chaque faute ajoute une couche.",
              axe4_coherence: "La racine gh-d-b apparait 24 fois dans le Coran. En 1:7, « ceux qui ont encouru la desapprobation (al-maghdubi 'alayhim) ». La tradition identifie les maghdub 'alayhim aux enfants d'Israel. L'expression revient en 3:112, 5:60, 7:152 — toujours pour les enfants d'Israel desobeissants. La desapprobation divine est un marqueur recurrent de leur conduite.",
              axe5_frequence: "Pour la mission du khalifa, la desapprobation divine est le signe de l'echec de la mission. Le khalifa dont Dieu ne se satisfait pas n'accomplit pas ce pour quoi il a ete cree. Les enfants d'Israel ont merite la desapprobation par la couverture des signes et le meurtre des prophetes — les deux actes les plus graves contre la mission prophetique."
            },
            "Dureté/Matériau": {
              status: "nul",
              senses: ["éminence", "cuir épais", "pierre dure"],
              proof_ctx: "La durete est un sens physique de gh-d-b. Le contexte (bi-ghadabin min Allahi) est clairement moral et relationnel — la desapprobation de Dieu, pas la durete d'un materiau."
            },
            "Maladie/Corps": {
              status: "nul",
              senses: ["éruption cutanée", "variole"],
              proof_ctx: "Les maladies corporelles sont un sens de gh-d-b. Le contexte est moral — la desapprobation divine, pas une maladie physique."
            },
            "Rupture/Séparation": {
              status: "nul",
              senses: ["rompre avec quelqu'un par colère"],
              proof_ctx: "La rupture est un acte ponctuel. Le contexte decrit un etat de desapprobation permanente, pas une rupture ponctuelle."
            }
          }
        }
      },
      // =====================================================
      // alh (position 43) — "Dieu" — Divinité
      // =====================================================
      {
        word_key: "alh", position: 43, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["oui certes", "divinité", "exclamation divine", "divinité (concept)", "théologie", "Dieu"],
              proof_ctx: "Le mot Allahi est le nom propre de Dieu au cas genitif. Le Lane's donne « God, the one true God ». Le genitif est commande par la preposition min (de Dieu). La desapprobation vient de Dieu — la source est divine. Le nom Allah designe l'Etre supreme, unique, sans associe, celui qui est adore."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "La detresse est un sens derive de '-l-h. Le contexte utilise le nom propre Allah qui designe exclusivement Dieu."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer"],
              proof_ctx: "L'adoration est un acte dirige vers Dieu. Le contexte utilise le nom propre Allah, pas le verbe d'adoration."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge"],
              proof_ctx: "Le refuge est un sens derive de '-l-h. Le contexte est la desapprobation de Dieu, pas l'acte de chercher refuge."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "La domination est un sens derive. Le contexte utilise le nom propre Allah."
            }
          }
        }
      },
      // =====================================================
      // knw (position 46) — "etaient" — Existence/Devenir
      // =====================================================
      {
        word_key: "knw", position: 46, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          sense_chosen: "etre",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "exister", "devenir"],
              proof_ctx: "Le verbe kanuu est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they used to be ». Le verbe kana avec l'inaccompli (kanuu yakfuruna) indique une action continue dans le passe — « ils etaient habituellement en train de couvrir ». La forme accompli + inaccompli cree un aspect duratif — la couverture des signes n'est pas un acte ponctuel mais une habitude enracinee."
            }
          }
        }
      },
      // =====================================================
      // kfr (position 47) — "couvrant" — Couverture/Dissimulation
      // =====================================================
      {
        word_key: "kfr", position: 47, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          sense_chosen: "couvrir",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["la nuit qui couvre", "cacher", "couvrir"],
              proof_ctx: "Le verbe yakfuruna est un inaccompli 3MP de la racine k-f-r. Le Lane's donne « he covered, concealed, hid ». Le sens premier est couvrir — la nuit qui couvre le jour, le cultivateur qui couvre la graine dans la terre. Yakfuruna bi-ayati Allahi signifie « ils couvraient les signes de Dieu » — ils dissimulaient les preuves de la verite divine. La couverture est un acte delibere de dissimulation.",
              axe1_verset: "Le verbe yakfuruna explique la premiere cause de la desapprobation divine. Les enfants d'Israel couvraient (dissimulaient) les signes de Dieu — ils avaient acces aux signes mais les cachaient ou les niaient. L'inaccompli avec kanuu indique que cette couverture etait habituelle — pas un acte ponctuel mais un comportement systematique. Les signes de Dieu (ayat Allah) sont les preuves de Sa puissance — la manne, les cailles, les miracles — qu'ils refusaient de reconnaitre.",
              axe2_voisins: "Le verset 59 rapportait la transgression (kanuu yafsuquna). Ce verset 61 rapporte la couverture des signes (kanuu yakfuruna). Les deux versets utilisent la meme structure kanuu + inaccompli pour decrire des habitudes enracinees. La transgression et la couverture sont les deux faces de la desobeissance — on transgresse les ordres et on couvre les signes.",
              axe3_sourate: "La racine k-f-r dans la sourate couvre la couverture et la dissimulation. En 2:6, « ceux qui couvrent (kafaruu) — c'est egal pour eux que tu les avertisses ou non ». En 2:89, « ils avaient l'habitude de couvrir (yakfuruna) ». La sourate presente la couverture comme un acte delibere de dissimulation de la verite — les signes sont visibles mais volontairement caches.",
              axe4_coherence: "La racine k-f-r apparait 525 fois dans le Coran. Le sens premier de couvrir explique tous les derives — le kufr est l'acte de couvrir la verite, le kafir est celui qui couvre. Le cultivateur (kafir) couvre la graine dans la terre (sens agricole). La nuit couvre le jour. Le ingrat couvre le bienfait. Les enfants d'Israel couvrent les signes de Dieu — ils cachent ce qui devrait etre visible.",
              axe5_frequence: "Pour la mission du khalifa, la couverture des signes est l'echec de la mission de temoignage. Le khalifa est cense montrer les signes de Dieu, pas les couvrir. Les enfants d'Israel, au lieu de temoigner des signes divins qu'ils ont recus, les dissimulent — trahison de la mission de temoignage."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "L'ingratitude et le rejet sont des sens derives de k-f-r (celui qui couvre un bienfait est un ingrat). Le sens retenu est « couvrir » car il est plus fidele a l'etymologie et au Lane's. Mais « rejeter » est un sens derive pertinent — couvrir les signes c'est les rejeter."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les péchés"],
              proof_ctx: "L'expiation est l'acte de couvrir les peches par une bonne action. Le contexte est la couverture des signes, pas l'expiation des peches."
            }
          }
        }
      },
      // =====================================================
      // ayt (position 48) — "signes" — Signe/Preuve
      // =====================================================
      {
        word_key: "ayt", position: 48, sense_chosen: "signe",
        analysis_axes: {
          concept_chosen: "Signe/Preuve",
          sense_chosen: "signe",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayati est un nom feminin pluriel defini genitif de la racine '-y-y. Le Lane's donne « sign, mark, indication, miracle, proof, evidence ». Les signes sont les preuves de la puissance divine — les miracles, les bienfaits, les revelations. Le pluriel defini (ayat Allah) designe l'ensemble des signes de Dieu. Le genitif est commande par la preposition bi (yakfuruna bi-ayati Allah = ils couvraient les signes de Dieu).",
              axe1_verset: "Le mot ayati est l'objet de la couverture (yakfuruna). Les signes de Dieu sont nombreux et varies — la manne, les cailles, l'ombre du nuage, l'eau du rocher, tous les miracles du desert. Les enfants d'Israel couvraient ces signes au lieu de les reconnaitre. La couverture des signes est la premiere cause de la desapprobation divine — elle precede le meurtre des prophetes dans l'enumeration.",
              axe2_voisins: "Le verset 59 rapportait la corruption de la parole divine. Ce verset 61 rapporte la couverture des signes divins. Les deux actes sont des negations de la communication divine — changer la parole et couvrir les signes. Les enfants d'Israel refusent systematiquement la guidance divine sous toutes ses formes — parole et signes.",
              axe3_sourate: "La racine '-y-y est tres frequente dans la sourate al-Baqarah. En 2:39, « ceux qui couvrent et traitent de mensonges Nos signes ». En 2:99, « Nous avons fait descendre vers toi des signes clairs ». La sourate presente les signes comme des preuves irrefutables — les couvrir est un acte delibere de mauvaise foi.",
              axe4_coherence: "La racine '-y-y apparait 382 fois dans le Coran. Les signes de Dieu sont partout — dans la creation, dans la revelation, dans l'histoire. Le Coran insiste sur la visibilite des signes — ils sont clairs (bayyinat), evidents, a portee de tous. Les couvrir exige un effort delibere de dissimulation. L'expression yakfuruna bi-ayati Allahi est une accusation grave et recurrente.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les outils de la mission. Le khalifa reconnait les signes et les montre aux autres. Couvrir les signes c'est saboter la mission de temoignage. Les enfants d'Israel avaient recu les signes les plus eclatants et les ont couverts."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le verset est un type specifique de signe — un signe verbal. Le contexte parle des signes de Dieu en general (miracles, bienfaits) pas specifiquement des versets reveles. Le sens de « signe » est plus large et plus adapte."
            }
          }
        }
      },
      // =====================================================
      // qtl (position 50) — "tuaient" — Meurtre/Combat
      // =====================================================
      {
        word_key: "qtl", position: 50, sense_chosen: "tuer",
        analysis_axes: {
          concept_chosen: "Meurtre/Combat",
          sense_chosen: "tuer",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "assassiner", "combattre", "meurtre", "combat"],
              proof_ctx: "Le verbe yaqtuluna est un inaccompli 3MP de la racine q-t-l. Le Lane's donne « he killed, slew, put to death, murdered ». L'inaccompli avec kanuu (wa-yaqtuluna al-nabiyyina) indique une action continue dans le passe — ils tuaient habituellement les prophetes. Le pluriel (nabiyyina = les prophetes) indique que le meurtre etait systematique, pas un acte isole.",
              axe1_verset: "Le verbe yaqtuluna est la deuxieme cause de la desapprobation divine. Apres la couverture des signes, le meurtre des prophetes. Les deux causes sont liees — couvrir les signes c'est rejeter le message, tuer les prophetes c'est eliminer le messager. La precision bi-ghayri al-haqqi (sans droit) aggrave l'acte — ce n'est pas un meurtre en situation de guerre mais un assassinat sans aucune justification.",
              axe2_voisins: "Le verset 59 rapportait la substitution de la parole divine. Ce verset 61 rapporte le meurtre des porteurs de la parole divine. La progression est terrifiante — de la corruption de la parole au meurtre des prophetes. Les enfants d'Israel ne se contentent pas de desobeir — ils eliminent ceux qui les rappellent a l'obeissance.",
              axe3_sourate: "La racine q-t-l est frequente dans la sourate al-Baqarah. En 2:87, « chaque fois qu'un messager vous apportait ce que vous ne desiriez pas, vous vous enfliez d'orgueil : certains vous les traitiez de menteurs et d'autres vous les tuiez ». En 2:91, « pourquoi tuiez-vous les prophetes auparavant ? ». La sourate reproche systematiquement aux enfants d'Israel le meurtre des prophetes.",
              axe4_coherence: "La racine q-t-l apparait 170 fois dans le Coran. L'expression yaqtuluna al-nabiyyina bi-ghayri al-haqqi est repetee en 3:21, 3:112, 3:181. Le meurtre des prophetes sans droit est l'accusation la plus grave portee contre les enfants d'Israel dans le Coran. Tuer une ame sans droit c'est comme tuer l'humanite entiere (5:32).",
              axe5_frequence: "Pour la mission du khalifa, le meurtre des prophetes est la destruction de la guidance. Le khalifa qui elimine les rappeleurs detruit sa propre capacite a etre guide. Les enfants d'Israel tuaient ceux-la memes qui les guidaient — l'auto-sabotage le plus grave possible."
            }
          }
        }
      },
      // =====================================================
      // nba (position 51) — "prophetes" — Information/Nouvelle
      // =====================================================
      {
        word_key: "nba", position: 51, sense_chosen: "prophete",
        analysis_axes: {
          concept_chosen: "Information/Nouvelle",
          sense_chosen: "prophete",
          concepts: {
            "Information/Nouvelle": {
              status: "retenu",
              senses: ["informer", "nouvelle", "annoncer"],
              proof_ctx: "Le mot al-nabiyyina est un nom masculin pluriel defini accusatif de la racine n-b-'. Le Lane's donne « one who informs, a prophet, one who brings tidings from God ». Le prophete (nabi) est etymologiquement celui qui apporte les nouvelles de Dieu (naba' = nouvelle). Le pluriel defini (al-nabiyyina) designe les prophetes en tant que groupe connu — tous les prophetes envoyes aux enfants d'Israel. L'accusatif est commande par yaqtuluna (ils tuaient les prophetes)."
            },
            "Prophétie": {
              status: "probable",
              senses: ["prophète", "prophétie"],
              proof_ctx: "La prophetie est un sens central de n-b-'. Le concept retenu « Information/Nouvelle » englobe la prophetie — le prophete est celui qui informe de la part de Dieu. Les deux concepts se chevauchent."
            }
          }
        }
      },
      // =====================================================
      // ghyr (position 52) — "sans" — Autre/Exclusion
      // =====================================================
      {
        word_key: "ghyr", position: 52, sense_chosen: "sans",
        analysis_axes: {
          concept_chosen: "Autre/Exclusion",
          sense_chosen: "sans",
          concepts: {
            "Autre/Exclusion": {
              status: "retenu",
              senses: ["sauf", "excepté", "différent", "exclusion", "pas", "n'est pas", "sans", "autre"],
              proof_ctx: "Le mot bi-ghayri est un nom masculin singulier genitif de la racine gh-y-r precede de la preposition bi. Le Lane's donne « other than, different from, without, not being ». La construction bi-ghayri al-haqqi signifie « sans droit, sans verite, sans justification ». Le mot ghayri exclut tout droit — il n'y a aucune justification au meurtre des prophetes. L'exclusion est totale et absolue.",
              axe1_verset: "Le mot bi-ghayri qualifie le meurtre des prophetes — sans droit. La precision est importante car le Coran reconnait des cas ou tuer est justifie (guerre defensive, justice penale). Le meurtre des prophetes est specifie comme etant sans aucun droit — un assassinat pur. Le mot ghayri aggrave l'accusation en excluant toute excuse possible.",
              axe2_voisins: "Le verset 59 decrivait un acte de substitution (ghayra alladhi qila lahum = autre que ce qui leur avait ete dit). Ce verset 61 utilise ghayri dans un sens different — « sans » (bi-ghayri al-haqqi = sans droit). La racine gh-y-r sert dans les deux versets a marquer l'ecart par rapport a la norme — ecart par rapport a la parole prescrite en 59, ecart par rapport au droit en 61.",
              axe3_sourate: "La racine gh-y-r dans la sourate sert de marqueur d'exclusion et d'alterite. En 2:114, « ceux qui empechent les mosquees de Dieu ». L'exclusion est un outil de jugement moral — ghayri trace la ligne entre le juste et l'injuste, le permis et l'interdit.",
              axe4_coherence: "La racine gh-y-r apparait 163 fois dans le Coran. L'expression bi-ghayri al-haqqi (sans droit) est une formule recurrente pour condamner les actes injustifies. En 3:21, 3:112, 3:181 — toujours pour le meurtre des prophetes. L'expression est un marqueur d'injustice absolue — il n'y a aucune circonstance attenuante.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de droit est la marque de l'injustice pure. Le khalifa qui agit sans droit commet l'injustice. Les enfants d'Israel ont tue les prophetes sans aucun droit — l'injustice la plus grave car elle s'attaque aux representants de Dieu."
            }
          }
        }
      },
      // =====================================================
      // hqq (position 53) — "droit" — Vérité/Réalité
      // =====================================================
      {
        word_key: "hqq", position: 53, sense_chosen: "droit",
        analysis_axes: {
          concept_chosen: "Vérité/Réalité",
          sense_chosen: "droit",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["être vrai", "vérité", "réalité", "droit"],
              proof_ctx: "Le mot al-haqqi est un nom masculin singulier defini genitif de la racine h-q-q. Le Lane's donne « truth, reality, right, due, just claim ». Le droit (haqq) est la verite objective — ce qui est conforme a la realite et a la justice. L'article defini (al-) fait du droit un concept absolu — le droit en soi, la justice en soi. Le genitif est commande par ghayri (bi-ghayri al-haqqi = sans le droit).",
              axe1_verset: "Le mot al-haqqi complete l'accusation de meurtre — sans le droit. Le droit aurait pu justifier le meurtre dans certaines circonstances (justice penale). L'absence de droit rend le meurtre un assassinat pur. Le haqq est ici la legitimite juridique et morale — les enfants d'Israel n'avaient aucune raison valable de tuer les prophetes. Le droit est l'inverse de leur acte — ils agissent dans le faux (batil) et non dans le vrai (haqq).",
              axe2_voisins: "Le verset 59 decrivait l'injustice (zulm) des enfants d'Israel. Ce verset 61 precise que leur violence est sans droit (bi-ghayri al-haqqi). Le zulm (mettre les choses a la mauvaise place) et l'absence de haqq (sans justification) sont deux faces du meme phenomene — l'injustice est l'absence de verite dans l'acte.",
              axe3_sourate: "La racine h-q-q dans la sourate designe la verite et le droit. En 2:26, « ceux qui savent que c'est la verite (al-haqq) de leur Seigneur ». En 2:42, « ne melez pas la verite (al-haqq) au faux (al-batil) ». La sourate oppose systematiquement le haqq (verite) au batil (faux). Les enfants d'Israel agissent dans le batil en tuant sans haqq.",
              axe4_coherence: "La racine h-q-q apparait 287 fois dans le Coran. Al-Haqq est l'un des noms divins — Dieu est la Verite. Tuer sans droit (bi-ghayri al-haqqi) est une formule qui condamne l'injustice absolue. En 5:32, « quiconque tue une ame sans droit, c'est comme s'il avait tue l'humanite entiere ». Le meurtre sans droit est le crime le plus grave dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le droit est la norme de la mission. Le khalifa agit dans le haqq — il place les choses a leur juste place. Les enfants d'Israel qui tuent sans droit agissent dans le batil — l'exact oppose de la mission du khalifa."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "mériter", "être obligatoire"],
              proof_ctx: "L'obligation est un sens de h-q-q. Le contexte utilise al-haqqi au sens de droit/verite dans l'expression « sans droit ». Le sens d'obligation n'est pas pertinent ici."
            }
          }
        }
      },
      // =====================================================
      // esy (position 56) — "desobeirent" — Rébellion/Péché
      // =====================================================
      {
        word_key: "esy", position: 56, sense_chosen: "desobeir",
        analysis_axes: {
          concept_chosen: "Rébellion/Péché",
          sense_chosen: "desobeir",
          concepts: {
            "Rébellion/Péché": {
              status: "retenu",
              senses: ["désobéir", "se rebeller", "pécher"],
              proof_ctx: "Le verbe 'asaw est un accompli 3MP de la racine '-s-y. Le Lane's donne « he disobeyed, rebelled, transgressed, refused compliance ». L'accompli designe un acte ponctuel passe — ils ont desobei. La desobeissance est ici un acte delibere de refus de se conformer a l'ordre divin. Le verbe est au coeur de la deuxieme explication causale (bima 'asaw).",
              axe1_verset: "Le verbe 'asaw est la troisieme cause de la desapprobation. Apres la couverture des signes et le meurtre des prophetes, la desobeissance. L'ordre est significatif : couvrir (cacher la verite), tuer (eliminer les porteurs de verite), desobeir (refuser la verite). Les trois actes forment un crescendo de rebellion. L'accompli (ils desobeirent) designe un acte accompli et revolu, par opposition a l'inaccompli (wa-kanuu ya'taduna = et ils transgressaient habituellement).",
              axe2_voisins: "Le verset 59 rapportait la transgression (fisq). Ce verset 61 rapporte la desobeissance ('isyan). Les deux sont des formes de rebellion mais la desobeissance est plus directe — le desobeissant refuse un ordre explicite. Le transgresseur depasse les limites, le desobeissant refuse de s'y conformer.",
              axe3_sourate: "La racine '-s-y dans la sourate est liee a la rebellion contre Dieu. En 2:35, Adam est averti de ne pas desobeir. En 2:36, le diable les fait desobeir. La desobeissance est le mecanisme de la chute — Adam desobeit et tombe, les enfants d'Israel deobeissent et tombent. La sourate montre que la desobeissance est un choix — on choisit de refuser l'ordre.",
              axe4_coherence: "La racine '-s-y apparait 33 fois dans le Coran. En 20:121, « Adam desobeit ('asa) a son Seigneur et s'egara ». La desobeissance est le mecanisme de la chute dans tous les recits coraniques. Les enfants d'Israel repetent le schema adamique — la desobeissance mene a la chute et a la desapprobation divine.",
              axe5_frequence: "Pour la mission du khalifa, la desobeissance est l'abandon de la mission. Le khalifa qui desobeit refuse l'ordre divin et perd sa legitimite. Les enfants d'Israel ont desobei — acte qui s'ajoute a la couverture des signes et au meurtre des prophetes pour justifier la desapprobation divine."
            }
          }
        }
      },
      // =====================================================
      // edw (position 58) — "transgressaient" — Transgression/Excès
      // =====================================================
      {
        word_key: "edw", position: 58, sense_chosen: "transgresser",
        analysis_axes: {
          concept_chosen: "Transgression/Excès",
          sense_chosen: "transgresser",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Le verbe ya'taduna est un inaccompli 3MP forme VIII de la racine '-d-w. Le Lane's donne « he transgressed, exceeded the proper limit, acted aggressively ». La forme VIII (i'tada) signifie « transgresser activement, depasser les limites fixees ». L'inaccompli avec kanuu (wa-kanuu ya'taduna) indique une action continue dans le passe — la transgression etait habituelle.",
              axe1_verset: "Le verbe ya'taduna cloture le verset par la quatrieme et derniere cause. Apres la couverture des signes, le meurtre des prophetes et la desobeissance, la transgression habituelle. L'opposition entre 'asaw (accompli = ils desobeirent une fois) et ya'taduna (inaccompli = ils transgressaient continuellement) est deliberee. La desobeissance est un acte, la transgression est un etat. Le verset se termine sur l'etat permanent — la transgression etait leur habitude.",
              axe2_voisins: "Le verset 59 se terminait de la meme maniere — kanuu yafsuquna (ils transgressaient habituellement). Ce verset 61 se termine par kanuu ya'taduna (ils transgressaient habituellement). Les deux versets partagent la meme structure finale — la transgression habituelle comme cause du chatiment. La racine est differente (f-s-q vs '-d-w) mais le sens est voisin — depasser les limites fixees par Dieu.",
              axe3_sourate: "La racine '-d-w dans la sourate designe l'hostilite et la transgression. En 2:85, « rancondans des captifs alors que leur expulsion vous etait interdite — croyez-vous a une partie du Livre et couvrez-vous l'autre ? ». En 2:190, « combattez dans le sentier de Dieu ceux qui vous combattent et ne transgressez pas (la ta'taduu) ». La sourate trace les limites et condamne leur depassement.",
              axe4_coherence: "La racine '-d-w apparait 106 fois dans le Coran. L'inimitie ('adawah) et la transgression ('udwan) sont les deux faces de la meme racine — l'ennemi est celui qui transgresse les limites de la relation. En 5:87, « ne transgressez pas (la ta'taduu) — Dieu n'aime pas les transgresseurs ». En 23:7, « ceux qui desirent au-dela de cela sont les transgresseurs ». La transgression est le depassement des limites fixees par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est le depassement des limites de la mission. Le khalifa qui transgresse depasse les bornes de son mandat. Les enfants d'Israel transgressaient habituellement — la transgression etait devenue leur nature, pas un accident. L'habitude de transgression est l'echec chronique de la mission."
            },
            "Hostilité/Inimitié": {
              status: "nul",
              senses: ["ennemi", "hostilité", "agression"],
              proof_ctx: "L'hostilite est un sens de '-d-w. La forme VIII (i'tada) designe specifiquement l'acte de transgresser les limites. Le contexte (kanuu ya'taduna) decrit une habitude de transgression, pas une relation d'inimitie."
            },
            "Course/Vitesse": {
              status: "nul",
              senses: ["courir"],
              proof_ctx: "La course est un sens physique de '-d-w. Le contexte moral (transgression des limites divines) exclut tout sens de deplacement physique."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES
// =====================================================
const dailyPhrases = [
  // nbt (id=579) — croissance vegetale
  { analysis_id: 579, phrases: [
    { sense: "pousser", arabic: "أَنبَتَ اللهُ الزَّرْعَ مِنَ الأَرْضِ", phon: "anbata Allahu al-zar'a mina al-ardi", french: "Dieu a fait pousser la recolte de la terre." },
    { sense: "végétation", arabic: "النَّبَاتُ يَحْتَاجُ إِلَى المَاءِ وَالشَّمْسِ", phon: "al-nabatu yahtaju ila al-ma'i wa-l-shamsi", french: "La vegetation a besoin d'eau et de soleil." },
    { sense: "faire germer", arabic: "نَبَتَتِ البُذُورُ بَعْدَ المَطَرِ", phon: "nabatat al-budhuru ba'da al-matari", french: "Les graines ont germe apres la pluie." }
  ]},
  // bql (id=580) — legumes
  { analysis_id: 580, phrases: [
    { sense: "légumes verts", arabic: "أَكَلْنَا بَقْلًا مِنَ الحَدِيقَةِ", phon: "akalna baqlan mina al-hadiqati", french: "Nous avons mange des legumes du jardin." },
    { sense: "herbes", arabic: "البَقْلُ يَنْبُتُ فِي الرَّبِيعِ", phon: "al-baqlu yanbutu fi al-rabi'i", french: "Les herbes poussent au printemps." },
    { sense: "verdure", arabic: "غَطَّى البَقْلُ الأَرْضَ خَضْرَاءَ", phon: "ghatta al-baqlu al-arda khadra'a", french: "La verdure a couvert la terre de vert." }
  ]},
  // qtha (id=581) — concombre
  { analysis_id: 581, phrases: [
    { sense: "concombre", arabic: "القِثَّاءُ بَارِدٌ فِي الصَّيْفِ", phon: "al-qiththa'u baridun fi al-sayfi", french: "Le concombre est frais en ete." },
    { sense: "concombre", arabic: "زَرَعَ القِثَّاءَ فِي حَدِيقَتِهِ", phon: "zara'a al-qiththa'a fi hadiqatihi", french: "Il a plante des concombres dans son jardin." },
    { sense: "courge", arabic: "أَحَبَّ القِثَّاءَ لِطَعْمِهِ اللَّذِيذِ", phon: "ahabba al-qiththa'a li-ta'mihi al-ladhidhi", french: "Il aimait le concombre pour son gout delicieux." }
  ]},
  // fwm (id=582) — ail
  { analysis_id: 582, phrases: [
    { sense: "ail", arabic: "الفُومُ يُضَافُ إِلَى الطَّعَامِ", phon: "al-fumu yudafu ila al-ta'ami", french: "L'ail est ajoute a la nourriture." },
    { sense: "ail", arabic: "رَائِحَةُ الفُومِ قَوِيَّةٌ", phon: "ra'ihatu al-fumi qawiyyatun", french: "L'odeur de l'ail est forte." },
    { sense: "blé", arabic: "طَحَنَ الفُومَ لِيَصْنَعَ خُبْزًا", phon: "tahana al-fuma li-yasna'a khubzan", french: "Il a moulu le ble pour faire du pain." }
  ]},
  // eds (id=583) — lentilles
  { analysis_id: 583, phrases: [
    { sense: "lentilles", arabic: "العَدَسُ غَنِيٌّ بِالحَدِيدِ", phon: "al-'adasu ghaniyyun bi-l-hadidi", french: "Les lentilles sont riches en fer." },
    { sense: "lentilles", arabic: "طَبَخَتْ شُورْبَةَ العَدَسِ", phon: "tabakhat shurbata al-'adasi", french: "Elle a cuisine la soupe de lentilles." },
    { sense: "légumineuses", arabic: "العَدَسُ مِنْ أَقْدَمِ المَحَاصِيلِ", phon: "al-'adasu min aqdami al-mahasili", french: "Les lentilles font partie des plus anciennes recoltes." }
  ]},
  // bsl (id=585) — oignon
  { analysis_id: 585, phrases: [
    { sense: "oignon", arabic: "البَصَلُ يُبْكِي مَنْ يَقْطَعُهُ", phon: "al-basalu yubki man yaqta'uhu", french: "L'oignon fait pleurer celui qui le coupe." },
    { sense: "oignon", arabic: "أَضَافَ البَصَلَ إِلَى الطَّبْخِ", phon: "adafa al-basala ila al-tabkhi", french: "Il a ajoute l'oignon a la cuisson." },
    { sense: "bulbe", arabic: "زَرَعَ بَصَلًا فِي الحَقْلِ", phon: "zara'a basalan fi al-haqli", french: "Il a plante des oignons dans le champ." }
  ]},
  // bwa (id=684) — retour/merite
  { analysis_id: 684, phrases: [
    { sense: "retourner", arabic: "بَاءُوا بِغَضَبٍ مِنَ اللهِ", phon: "ba'uu bi-ghadabin min Allahi", french: "Ils revinrent charges de la desapprobation de Dieu." },
    { sense: "mériter", arabic: "بَاءَ بِالإِثْمِ مَنْ ظَلَمَ", phon: "ba'a bi-l-ithmi man zalama", french: "Celui qui a ete injuste a merite le peche." },
    { sense: "établir", arabic: "بَوَّأَهُمُ اللهُ مَنْزِلًا طَيِّبًا", phon: "bawwa'ahumu Allahu manzilan tayyiban", french: "Dieu les a etablis dans une bonne demeure." }
  ]},
  // esy (id=594) — desobeissance
  { analysis_id: 594, phrases: [
    { sense: "désobéir", arabic: "عَصَى آدَمُ رَبَّهُ فَغَوَى", phon: "'asa Adamu rabbahu fa-ghawa", french: "Adam desobeit a son Seigneur et s'egara." },
    { sense: "se rebeller", arabic: "لَا تَعْصِ أَمْرَ اللهِ", phon: "la ta'si amra Allahi", french: "Ne te rebelle pas contre l'ordre de Dieu." },
    { sense: "désobéir", arabic: "مَنْ يَعْصِ اللهَ يَخْسَرْ", phon: "man ya'si Allaha yakhsar", french: "Celui qui desobeit a Dieu perd." }
  ]},
  // msr (id=864) — cite/Egypte
  { analysis_id: 864, phrases: [
    { sense: "Égypte", arabic: "اِهْبِطُوا مِصْرًا", phon: "ihbituu misran", french: "Descendez dans une cite." },
    { sense: "grande ville", arabic: "مِصْرُ أُمُّ الدُّنْيَا", phon: "Misru ummu al-dunya", french: "L'Egypte est la mere du monde." },
    { sense: "grande ville", arabic: "دَخَلَ مِصْرَ وَأَقَامَ فِيهَا", phon: "dakhala Misra wa-aqama fiha", french: "Il entra en Egypte et s'y installa." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  console.log(`  analysis_id=${data.analysis_id} (preset)`);

  let okCount = 0;
  let errCount = 0;

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
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
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
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [68];
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', root.analysis_id);

    if (count && count > 0) {
      console.log(`  analysis_id=${root.analysis_id} — ${count} phrases existent deja, skip`);
      totalSkip += root.phrases.length;
      continue;
    }

    for (const p of root.phrases) {
      const { error } = await supabase.from('word_daily').insert({
        analysis_id: root.analysis_id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      });
      if (error) {
        console.error(`  ERR daily id=${root.analysis_id}:`, error.message);
        totalErr++;
      } else {
        totalOk++;
      }
    }
    console.log(`  analysis_id=${root.analysis_id} — 3 phrases inserees`);
  }

  console.log(`DAILY PHRASES — ${totalOk} OK, ${totalSkip} skip, ${totalErr} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSET 61 ===\n');

  const result = await processVerse(61);
  const totalOk = result ? result.okCount : 0;
  const totalErr = result ? result.errCount : 0;

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V61 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
