const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 199
// verse_id=206, analysis_id=565
// "Ensuite deferlez par ou les gens deferlent, et demandez
//  pardon a Dieu. Dieu est Pardonneur et Misericordieux."
// Flux collectif du pelerinage, demander pardon, attributs divins
// =====================================================

const verseData = {
  199: {
    verse_id: 206,
    analysis_id: 565,
    translation_arab: "Puis deferlez de la ou les gens ont deferle, et demandez le pardon de Dieu. Dieu est celui qui couvre et celui qui fait misericorde.",
    full_translation: "Ensuite deferlez par ou les gens deferlent, et demandez pardon a Allah. Car Allah est Pardonneur et Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par la particule **thumma** (puis, ensuite) qui marque une sequence temporelle — il y a un avant et un apres. Ce qui suit est une etape qui vient apres une autre dans le rituel du pelerinage. Le verbe **afidu** est un imperatif 2MP de la racine f-y-d, forme IV (af'ala). La forme IV en arabe est causative ou transitive — elle ajoute l'idee de « faire faire » ou de « produire un mouvement vers l'exterieur ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine f-y-d porte le sens de deborder, couler abondamment, se repandre. La forme IV (afada) signifie se deverser en masse, deferler, se repandre depuis un lieu en grande quantite. L'imperatif (afidu) ordonne aux pelerins de deferler — de se mettre en mouvement en masse depuis un lieu. La preposition **min** (de, depuis) indique le point de depart du mouvement. Le mot **haythu** (la ou, l'endroit ou) est un adverbe de lieu indefini — il designe un lieu sans le nommer. La construction « min haythu » (de la ou) laisse le lieu implicite — le texte ne nomme pas Arafat ni aucun lieu specifique. Le verbe **afada** est un accompli 3MS de la racine f-y-d, forme IV — le meme verbe que l'imperatif mais a l'accompli. L'accompli indique que l'action a deja eu lieu : les gens ont deja deferle avant que l'ordre ne soit donne aux pelerins. Le mot **al-nasu** est un nom defini pluriel de la racine n-w-s. D'apres les sources etymologiques, la racine n-w-s porte le sens de mouvement, agitation, les gens comme ensemble d'etres qui bougent. Le nom al-nas designe les gens, les humains, le genre humain. L'article al- definit les gens comme LES gens — l'ensemble des gens connus, la masse humaine. Le verbe **istaghfiru** est un imperatif 2MP de la racine gh-f-r, forme X (istaf'ala). La forme X en arabe signifie « demander/chercher » l'action de la racine. La racine gh-f-r porte le sens de couvrir, proteger, cacher un defaut. La forme X (istaghfara) signifie donc « demander la couverture », « chercher la protection contre ses propres defauts ». L'imperatif ordonne aux pelerins de demander cette couverture a Dieu. Le mot **Allaha** est un nom propre accusatif de la racine l-h-h. Il designe Dieu comme l'etre vers qui se dirige l'adoration. Il est ici complement d'objet du verbe istaghfiru — c'est a Dieu que l'on demande la couverture. Le mot **inna** est une particule d'emphase qui ouvre une phrase nominale — « certes, en verite ». Elle introduit une justification de l'ordre precedent. Le mot **Allaha** est repete en position de sujet de la phrase nominale — Dieu est nomme une deuxieme fois pour poser la raison de l'ordre. L'adjectif **ghafurun** est un adjectif qualificatif de la racine gh-f-r, sur le schema fa'ul qui marque l'intensite et la constance. D'apres les sources etymologiques, ghafur signifie celui qui couvre intensement et constamment — celui dont la couverture est permanente et abondante. Ce n'est pas un acte ponctuel mais une qualite permanente. L'adjectif **rahimun** est un adjectif qualificatif de la racine r-h-m, sur le meme schema fa'ul. D'apres les sources etymologiques, la racine r-h-m porte le sens de tendresse maternelle, douceur du ventre (rahim = uterus). Le rahim est celui dont la tendresse est intense et constante — une tendresse qui enveloppe comme le ventre maternel protege l'enfant.

§JUSTIFICATION§
**deferlez** — Le sens retenu est « Debordement/Abondance ». Le verbe afidu (forme IV de f-y-d) designe un mouvement de masse qui deborde depuis un lieu. Le mot « deferlez » est choisi car il capte a la fois l'abondance du mouvement et sa direction (depuis un lieu vers l'exterieur). L'alternative « couler » est ecartee car elle evoque un liquide passif, alors que le verbe arabe designe un mouvement humain collectif et volontaire. L'alternative « mourir » (sens isole de f-y-d) est ecartee car le contexte est un ordre adresse aux vivants — un imperatif de mouvement, pas de mort.

**a deferle** — Le sens retenu est « Debordement/Abondance ». Le verbe afada (meme racine f-y-d, forme IV accompli) marque que les gens ont deja accompli ce mouvement. L'accompli montre que le deferlement des gens est un fait accompli, un precedent a suivre. Le choix de « a deferle » maintient la coherence avec l'imperatif — le meme verbe, le meme mouvement, mais deja realise par les gens.

**les gens** — Le sens retenu est « Humanite/Peuple ». Le mot al-nasu designe l'ensemble des humains comme masse collective. Le mot « les gens » est choisi car c'est le terme le plus courant en francais pour designer un groupe humain indifferencie. L'alternative « les humains » est ecartee car elle est plus formelle et moins naturelle dans le contexte d'un mouvement de foule.

**demandez le pardon** — Le sens retenu est « Pardon/Couverture ». Le verbe istaghfiru (forme X de gh-f-r) signifie « demander la couverture de ses defauts ». Le mot « pardon » est choisi car c'est le mot le plus courant en francais pour exprimer cette demande, meme si le sens etymologique est plus proche de « couverture ». L'alternative « demandez la protection » est ecartee car le verbe a la forme X vise specifiquement la couverture des fautes, pas une protection physique.

**Dieu** — Le sens retenu est « Divinite ». Le mot Allah est traduit par « Dieu » conformement a la regle (Allah → Dieu dans la traduction). Il apparait deux fois dans le verset : d'abord comme objet de la demande de pardon, puis comme sujet de la phrase qui justifie cette demande.

**Pardonneur** — Le sens retenu est « Pardon/Couverture ». L'adjectif ghafur (schema fa'ul de gh-f-r) designe celui qui couvre intensement et constamment. Le mot « Pardonneur » est choisi comme equivalent courant, meme si « celui qui couvre » serait plus fidele a l'etymologie. Le schema fa'ul indique l'intensite — ce n'est pas un pardon occasionnel mais une couverture permanente.

**Misericordieux** — Le sens retenu est « Misericorde/Tendresse ». L'adjectif rahim (schema fa'ul de r-h-m) designe celui dont la tendresse est intense et constante. Le mot « Misericordieux » est l'equivalent courant, bien que l'etymologie soit plus proche de « celui qui fait tendresse ». Le schema fa'ul marque la meme intensite que ghafur — la tendresse divine est permanente et abondante.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. Le point notable est la traduction de « afidu » par « deferlez » — Hamidullah utilise le meme mot, ce qui est fidele a l'etymologie de la racine f-y-d qui porte le sens de debordement et de flux abondant. La forme X « istaghfiru » est traduite par « demandez pardon » dans toutes les traductions courantes, ce qui est correct bien que l'etymologie precise soit « demandez la couverture ». La nuance est subtile et ne change pas le sens global du verset. La paire ghafur-rahim est traduite partout par « Pardonneur et Misericordieux » — les deux adjectifs sont sur le schema fa'ul qui marque l'intensite, une nuance que la traduction courante ne rend pas explicitement mais qui ne change pas le sens fondamental.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 0 },
      { fr: "deferlez", pos: "verbe", phon: "afidu", arabic: "\u0623\u064e\u0641\u0650\u064a\u0636\u064f\u0648\u0627\u06df", word_key: "fyd", is_particle: false, sense_retenu: "deferler", position: 1 },
      { fr: "de la ou", phon: "min haythu", arabic: "\u0645\u0650\u0646\u0652 \u062d\u064e\u064a\u0652\u062b\u064f", is_particle: true, position: 2 },
      { fr: "a deferle", pos: "verbe", phon: "afada", arabic: "\u0623\u064e\u0641\u064e\u0627\u0636\u064e", word_key: "fyd", is_particle: false, sense_retenu: "deferler", position: 4 },
      { fr: "les gens", pos: "nom", phon: "al-nasu", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u064f", word_key: "nws", is_particle: false, sense_retenu: "les gens", position: 5 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 6 },
      { fr: "demandez le pardon de", pos: "verbe", phon: "istaghfiru", arabic: "\u0671\u0633\u0652\u062a\u064e\u063a\u0652\u0641\u0650\u0631\u064f\u0648\u0627\u06df", word_key: "gfr", is_particle: false, sense_retenu: "demander le pardon", position: 7 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 9 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "est Pardonneur", pos: "adjectif", phon: "ghafurun", arabic: "\u063a\u064e\u0641\u064f\u0648\u0631\u064c", word_key: "gfr", is_particle: false, sense_retenu: "Pardonneur", position: 11 },
      { fr: "et Misericordieux", pos: "adjectif", phon: "rahimun", arabic: "\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064c", word_key: "rhm", is_particle: false, sense_retenu: "Misericordieux", position: 12 }
    ],
    words: [
      // fyd pos=1 (imperatif afidu)
      {
        word_key: "fyd", position: 1, sense_chosen: "deferler",
        analysis_axes: {
          sense_chosen: "deferler",
          concept_chosen: "Debordement/Abondance",
          concepts: {
            "Debordement/Abondance": {
              status: "retenu",
              senses: ["deborder", "couler abondamment", "se repandre", "se deverser en masse", "deferler", "affluer", "jaillir"],
              proof_ctx: "Le verbe afidu est un imperatif 2MP de la racine f-y-d, forme IV (af'ala). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine f-y-d porte le sens premier de deborder, couler en abondance, se repandre depuis un recipient qui ne peut plus contenir son contenu. La forme IV (afada) ajoute la dimension causative et transitive — elle designe le fait de se deverser en masse depuis un lieu, de deferler comme un flot. L'imperatif ordonne un mouvement collectif de masse — les pelerins doivent se mettre en mouvement ensemble, comme un flux qui deborde. Le concept de debordement est un mouvement exterieur, directionnel et collectif — il sort d'un lieu et se repand vers l'exterieur. C'est un acte physique de deplacement en masse, pas un etat interieur. Le sens de « mourir » (sens isole de fada = son ame a deferle, c'est-a-dire l'a quitte) est un sens derive metaphorique qui n'a aucun rapport avec le contexte d'un ordre adresse a des pelerins vivants.",
              axe1_verset: "Le verbe afidu est l'action principale du verset — c'est l'ordre central. Le champ lexical (puis, de la ou, les gens, demander pardon) tourne autour d'un mouvement collectif suivi d'une demande de pardon. Le deferlement est le mouvement physique, et la demande de pardon est l'acte spirituel qui l'accompagne. La preposition « min » (depuis) et l'adverbe « haythu » (la ou) indiquent un point de depart — on deferle DEPUIS un lieu. Le verset pose un mouvement centrifuge : partir d'un lieu et se repandre. L'imperatif pluriel (afidu = deferlez, vous) montre que l'acte est collectif — ce n'est pas un individu qui part mais une masse qui deferle.",
              axe2_voisins: "Le verset 2:198 parle de « chercher la grace de votre Seigneur » pendant le pelerinage — il autorise le commerce pendant le pelerinage. Le verset 2:199 enchaine avec l'ordre de deferler depuis le lieu ou les gens deferlent. La sequence montre que le pelerinage alterne entre les permissions (commerce) et les obligations rituelles (deferlement, demande de pardon). Le verset 2:200 enchainera avec le rappel (dhikr) de Dieu apres l'accomplissement des rites. Le deferlement de 2:199 est donc une etape rituelle situee entre l'autorisation du commerce et le rappel de Dieu — il s'inscrit dans la sequence des rites du pelerinage.",
              axe3_sourate: "La sourate al-Baqarah contient une section complete sur le pelerinage (versets 196-203). La racine f-y-d n'apparait que dans ce verset dans la sourate, ce qui en fait un terme technique specifique au rituel du deferlement. La sourate pose les regles du pelerinage etape par etape : la sacralisation, les offrandes, les stations, le deferlement, le rappel. Le deferlement est l'etape ou les pelerins quittent un lieu sacre en masse pour rejoindre un autre lieu — c'est un mouvement rituel organise, pas un deplacement quelconque.",
              axe4_coherence: "La racine f-y-d apparait rarement dans le Coran. En 5:83, « tu vois leurs yeux deborder (tafidu) de larmes » — le sens est le debordement d'un liquide. En 9:92, « leurs yeux debordent (tafidu) de larmes ». En 2:199, le verbe est utilise pour le mouvement humain — les gens deferlent comme un flot qui deborde. Le Coran utilise la meme racine pour le debordement physique (larmes) et le debordement humain (pelerins). L'image est coherente : dans les deux cas, quelque chose deborde de son contenant — les larmes debordent des yeux, les pelerins debordent du lieu sacre.",
              axe5_frequence: "Pour la mission du khalifa, le deferlement collectif est un acte d'unite. Les pelerins ne partent pas chacun de leur cote — ils deferlent ensemble, comme un seul flux. Ce mouvement de masse rappelle que la mission du khalifa est collective — l'humanite avance ensemble, pas en ordre disperse. Le pelerinage rassemble les gens de toutes origines dans un meme mouvement, un meme flux. Le deferlement est l'image physique de l'unite humaine : une masse qui se deplace ensemble vers un meme but."
            },
            "Sens isole/Mourir": {
              status: "nul",
              senses: ["mourir", "rendre l'ame", "l'ame deferle hors du corps"],
              proof_ctx: "Le sens de mourir est un sens derive metaphorique de la racine f-y-d dans le Lane's — « son ame a deferle » signifie que l'ame a quitte le corps comme un liquide qui deborde. Mais le contexte du verset est un imperatif adresse a des pelerins vivants — « deferlez ! ». Ordonner a quelqu'un de mourir n'a aucun sens dans ce contexte rituel. Ce sens est completement hors sujet."
            }
          }
        }
      },
      // fyd pos=4 (accompli afada)
      {
        word_key: "fyd", position: 4, sense_chosen: "deferler",
        analysis_axes: {
          sense_chosen: "deferler",
          concept_chosen: "Debordement/Abondance",
          concepts: {
            "Debordement/Abondance": {
              status: "retenu",
              senses: ["deborder", "couler abondamment", "se repandre", "se deverser en masse", "deferler", "affluer", "jaillir"],
              proof_ctx: "Le verbe afada est un accompli 3MS de la racine f-y-d, forme IV. C'est le meme verbe que l'imperatif afidu mais a l'accompli — il marque un fait acheve. Les gens ont deja deferle, c'est un precedent. D'apres les sources etymologiques, la forme IV de f-y-d designe le fait de se deverser en masse depuis un lieu. L'accompli indique que ce deferlement est un fait historique et rituel — les gens (al-nas) l'ont fait avant, et les pelerins doivent faire de meme. Le verbe a l'accompli sert de reference : faites comme les gens ont fait, deferlez d'ou ils ont deferle.",
              axe1_verset: "Le verbe afada sert de reference pour l'imperatif afidu. Le champ lexical (de la ou, les gens) montre que l'accompli pose un modele : les gens ont deferle d'un certain lieu, et vous devez faire pareil. La construction « min haythu afada al-nasu » (de la ou les gens ont deferle) lie le mouvement ordonne a un mouvement deja accompli. Les pelerins ne font pas quelque chose de nouveau — ils reproduisent un mouvement que d'autres ont deja fait. L'accompli donne au mouvement une dimension de tradition et de continuite rituelle.",
              axe2_voisins: "Dans le contexte des versets du pelerinage (2:196-203), chaque rite est pose comme une obligation qui s'inscrit dans une tradition. Le verset 2:198 parlait de la station a Arafat. Le verset 2:199 ordonne de deferler « de la ou les gens ont deferle » — le lieu n'est pas nomme mais est identifie par le precedent des gens. L'accompli (afada) ancre le rite dans l'histoire : c'est un rite que les gens pratiquent, pas une innovation.",
              axe3_sourate: "La sourate al-Baqarah pose les fondements de la legislation et du rituel. L'utilisation de l'accompli pour marquer un precedent est un procede courant dans la sourate — les obligations sont souvent posees en reference a ce qui a ete fait avant (les prophetes precedents, les peuples precedents). Le deferlement des gens est un precedent rituel que les pelerins doivent perpetuer.",
              axe4_coherence: "Le Coran utilise l'accompli pour marquer des faits etablis qui servent de modeles. En 2:199, l'accompli afada pose le deferlement des gens comme un fait accompli qui legitime l'ordre donne aux pelerins. La racine f-y-d a l'accompli dans le Coran marque toujours un debordement qui a eu lieu — les larmes ont deja deferle (5:83, 9:92). Ici, les gens ont deja deferle — c'est un fait qui fonde l'obligation.",
              axe5_frequence: "Pour la mission du khalifa, le precedent est un guide pour l'action. Le khalifa ne part pas de zero — il s'inscrit dans une continuite. Le fait que les gens aient deja deferle montre que le rite est une tradition humaine, pas une invention individuelle. Le khalifa perpetue les rites et les obligations transmis par les generations precedentes — il herite d'une mission et la transmet a son tour."
            }
          }
        }
      },
      // nws pos=5
      {
        word_key: "nws", position: 5, sense_chosen: "les gens",
        analysis_axes: {
          sense_chosen: "les gens",
          concept_chosen: "Humanite/Peuple",
          concepts: {
            "Humanite/Peuple": {
              status: "retenu",
              senses: ["gens", "humains", "peuple", "genre humain", "les hommes", "la masse humaine"],
              proof_ctx: "Le nom al-nasu est un nom defini pluriel de la racine n-w-s. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-w-s porte le sens de mouvement, agitation. Le mot al-nas designe les gens comme ensemble d'etres qui bougent et s'agitent — l'humanite en tant que masse active. L'article al- definit les gens comme LES gens — un groupe connu et identifie, l'ensemble des humains qui pratiquent le rite. Le nom defini donne au mot une dimension universelle : ce ne sont pas des gens particuliers mais LES gens, la masse humaine dans son ensemble. Le concept d'humanite est collectif et exterieur — il designe un groupe, pas un individu, et se manifeste par le mouvement et l'action.",
              axe1_verset: "Le mot al-nasu est le sujet du verbe afada (a deferle) — ce sont les gens qui ont deferle. Le champ lexical (deferler, de la ou, demander pardon) montre que les gens sont la reference du mouvement rituel. Le verset ordonne aux pelerins de deferler « de la ou les gens ont deferle » — les gens sont le modele, le precedent. L'article defini (al-) montre que ces gens sont connus — ils font partie de la tradition rituelle. Le mot est au pluriel indefini dans sa portee — « les gens » en general, sans distinction de tribu, de rang ou d'epoque.",
              axe2_voisins: "Le verset 2:198 parlait des pelerins et de leur recherche de la grace divine. Le verset 2:199 mentionne « les gens » (al-nas) comme ceux qui ont deja deferle. La mention des gens en general (pas seulement les croyants ou les pelerins) elargit le rite au-dela d'un groupe particulier — le deferlement est un acte que les gens en general ont pratique. Le verset 2:200 parlera du rappel de Dieu et des peres — la memoire collective.",
              axe3_sourate: "La racine n-w-s est tres frequente dans la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:13, « croyez comme les gens ont cru ». En 2:21, « o les gens, adorez votre Seigneur ». En 2:199, les gens sont le modele du deferlement. La sourate utilise al-nas pour designer l'humanite dans sa diversite — croyants et incredules, pelerins et sedentaires. Le mot designe la masse humaine sans distinction.",
              axe4_coherence: "La racine n-w-s est une des plus frequentes du Coran — elle apparait dans pratiquement chaque sourate. Le mot al-nas designe toujours les gens en tant que collectif humain. En 114:1-6 (sourate al-Nas), le mot est repete six fois pour designer l'humanite que Dieu protege. En 2:199, les gens sont le collectif qui a etabli la pratique du deferlement — le rite est humain et universel.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont l'objet de la mission. Le khalifa est envoye parmi les gens pour empecher la corruption et l'injustice. La mention des gens dans le contexte du pelerinage montre que le rite rassemble les gens — le pelerinage est un acte collectif qui unit l'humanite. Le khalifa s'inscrit dans cette masse humaine : il n'est pas au-dessus des gens mais parmi eux, deferle avec eux, demande pardon avec eux."
            }
          }
        }
      },
      // gfr pos=7 (forme X istaghfiru)
      {
        word_key: "gfr", position: 7, sense_chosen: "demander le pardon",
        analysis_axes: {
          sense_chosen: "demander le pardon",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["couvrir", "cacher", "proteger", "pardonner", "effacer les fautes", "voiler les defauts", "absoudre"],
              proof_ctx: "Le verbe istaghfiru est un imperatif 2MP de la racine gh-f-r, forme X (istaf'ala). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine gh-f-r porte le sens premier de couvrir, cacher, voiler, proteger. Le ghifar est le vetement qui couvre la tete, le mighfar est le casque qui protege. La forme X (istaghfara) signifie « demander la couverture », « chercher que ses defauts soient couverts ». Le concept de pardon/couverture est un acte exterieur et relationnel — celui qui demande le pardon s'adresse a un autre (Dieu) pour que ses fautes soient couvertes. C'est un acte directionnel : la demande sort du demandeur et se dirige vers Dieu. La forme X ajoute une dimension de recherche active — on ne recoit pas passivement le pardon, on le cherche, on le demande. L'imperatif pluriel (istaghfiru) ordonne a tous les pelerins de demander cette couverture — c'est un acte collectif qui suit le deferlement physique.",
              axe1_verset: "Le verbe istaghfiru est le deuxieme ordre du verset apres afidu (deferlez). Le champ lexical (deferler, les gens, Dieu, Pardonneur, Misericordieux) montre que la demande de pardon suit le mouvement physique. Le verset construit une sequence : d'abord le mouvement du corps (deferlement), puis le mouvement de l'ame (demande de pardon). La conjonction « wa » (et) lie les deux ordres — ils sont complementaires, pas alternatifs. Le complement d'objet « Allaha » (Dieu) designe le destinataire de la demande — c'est a Dieu qu'on demande la couverture. La forme X (istaghfiru) est plus intense qu'un simple « ghfiru » (pardonnez) car elle marque la recherche active — les pelerins doivent activement chercher le pardon, pas simplement esperer le recevoir.",
              axe2_voisins: "Le verset 2:198 parlait de la recherche de la grace divine (fadl) pendant le pelerinage. Le verset 2:199 ordonne de demander le pardon (istighfar). La sequence montre deux dimensions du rapport a Dieu pendant le pelerinage : chercher Sa grace (bien materiel) et chercher Sa couverture (bien spirituel). Le verset 2:200 enchainera avec le rappel (dhikr) — apres le pardon, le souvenir. Les versets construisent une progression spirituelle : grace → pardon → rappel.",
              axe3_sourate: "La racine gh-f-r est tres presente dans la sourate al-Baqarah. En 2:58, « Nous vous pardonnerons (naghfir) vos fautes ». En 2:173, « Dieu est Pardonneur (ghafur) et Misericordieux (rahim) ». En 2:199, la meme paire ghafur-rahim conclut l'ordre de demander le pardon. La sourate utilise gh-f-r pour la couverture divine des fautes humaines — un theme recurrent qui culmine dans les rites du pelerinage ou le pardon est demande collectivement.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. La forme X (istaghfara) apparait en de nombreux endroits : en 4:106, « demande pardon a Dieu (istaghfiri Allaha) ». En 47:19, « demande pardon pour tes fautes ». En 71:10, Nuh dit « demandez pardon a votre Seigneur, Il est tres pardonnant ». Le Coran lie systematiquement la demande de pardon (istighfar) a la qualite divine de couverture (ghufran) — on demande parce que Dieu pardonne, et Dieu pardonne parce qu'on demande. Le verset 2:199 suit ce schema : demandez le pardon car Dieu est Pardonneur.",
              axe5_frequence: "Pour la mission du khalifa, la demande de pardon est un acte d'humilite. Le khalifa reconnait ses fautes et cherche la couverture divine — il ne se pretend pas parfait. La demande de pardon dans le contexte du pelerinage montre que meme dans l'accomplissement d'un rite sacre, le khalifa reste conscient de ses imperfections. L'istighfar empeche l'orgueil et maintient le khalifa dans une posture d'humilite devant Dieu. C'est un acte qui previent la corruption de l'ame."
            }
          }
        }
      },
      // alh pos=8
      {
        word_key: "alh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "la divinite", "celui qui est adore", "l'objet de l'adoration"],
              proof_ctx: "Le mot Allaha est un nom propre accusatif de la racine l-h-h (ou a-l-h selon certaines analyses). D'apres les sources etymologiques, la racine porte le sens d'adorer, de se tourner vers avec devotion, d'etre perplexe devant la grandeur. Le mot Allah designe l'etre unique vers qui se dirige toute adoration. Il est ici en position de complement d'objet du verbe istaghfiru — c'est a Dieu que l'on demande la couverture des fautes. La divinite est la realite transcendante vers laquelle se dirigent les demandes et les adorations. Le nom propre est defini par essence — il n'y a qu'un seul Allah, la question de la definition ne se pose pas.",
              axe1_verset: "Le mot Allaha en position 8 est le complement du verbe istaghfiru — « demandez pardon a Dieu ». Le champ lexical (deferler, pardon, Pardonneur, Misericordieux) montre que Dieu est le destinataire de la demande et la source du pardon. Le verset pose Dieu comme le point de convergence des demandes humaines — apres le mouvement physique du deferlement, les pelerins se tournent vers Dieu pour la dimension spirituelle. Le nom est a l'accusatif (Allaha) car il est objet direct du verbe — la demande se dirige vers Dieu.",
              axe2_voisins: "Le verset 2:198 mentionnait « votre Seigneur » (rabbikum) — un autre nom divin. Le verset 2:199 utilise « Allah » deux fois. La sequence montre une progression : d'abord le Seigneur qui accorde Sa grace, puis Dieu a qui on demande pardon. Les noms divins changent selon le contexte : Rabb pour la relation de seigneurie et de grace, Allah pour la relation d'adoration et de demande de pardon.",
              axe3_sourate: "Le mot Allah est le mot le plus frequent de la sourate al-Baqarah. Il apparait dans pratiquement chaque passage legislatif, narratif et exhortatif. En 2:199, Allah est a la fois le destinataire de la demande de pardon et le sujet de la phrase qui justifie la demande. La sourate construit Dieu comme l'autorite legislative (kutiba), la source de la grace (fadl), et le pardonneur des fautes (ghafur).",
              axe4_coherence: "Le mot Allah apparait environ 2700 fois dans le Coran. Il est le nom divin par excellence — celui qui rassemble tous les attributs. En 2:199, Allah est qualifie de ghafur (pardonneur) et rahim (misericordieux) — deux attributs qui justifient la demande de pardon. Le Coran lie systematiquement le nom Allah aux attributs qui fondent la relation entre Dieu et les humains.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de la mission et son horizon. Le khalifa est envoye par Dieu et retourne vers Dieu. La demande de pardon a Dieu dans le pelerinage rappelle que la mission du khalifa n'est pas autonome — elle depend de Dieu qui pardonne et fait misericorde. Le khalifa ne s'appuie pas sur ses propres forces mais sur la couverture et la tendresse divines."
            }
          }
        }
      },
      // alh pos=10
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "la divinite", "celui qui est adore", "l'objet de l'adoration"],
              proof_ctx: "Le mot Allaha en position 10 est le sujet de la phrase nominale introduite par inna — « certes Dieu est Pardonneur et Misericordieux ». Ici le nom divin n'est plus complement d'objet mais sujet : Dieu passe de celui a qui on s'adresse a celui dont on decrit les qualites. La repetition du nom Allah dans le meme verset (positions 8 et 10) cree un lien causal : demandez pardon a Dieu (position 8) PARCE QUE Dieu (position 10) est Pardonneur et Misericordieux. La deuxieme mention justifie la premiere — la demande de pardon a du sens parce que Dieu possede la qualite de pardonner.",
              axe1_verset: "Le mot Allaha en position 10 ouvre la justification du verset. Le champ lexical (certes, Pardonneur, Misericordieux) montre que cette mention de Dieu sert a fonder l'ordre de demander pardon. La particule inna (certes) renforce l'affirmation — il est certain que Dieu est Pardonneur et Misericordieux. Le verset construit un raisonnement : ordre (deferlez, demandez pardon) → justification (car Dieu est Pardonneur et Misericordieux). La repetition du nom divin est un procede rhetorique qui ancre la justification dans l'identite divine elle-meme.",
              axe2_voisins: "Le verset 2:173 utilisait deja la formule « inna Allaha ghafurun rahimun » (certes Dieu est Pardonneur et Misericordieux) pour conclure un passage legislatif sur les interdits alimentaires. Le verset 2:199 reprend la meme formule pour conclure le passage sur le deferlement et la demande de pardon. La repetition de cette formule dans des contextes differents montre que la couverture et la tendresse divines sont des constantes — elles s'appliquent a toute situation ou le croyant se tourne vers Dieu.",
              axe3_sourate: "La formule « inna Allaha ghafurun rahimun » est un leitmotiv de la sourate al-Baqarah. Elle apparait en 2:173, 2:182, 2:192, 2:199, 2:218, 2:226. Chaque occurrence conclut un passage legislatif ou exhortatif en rappelant que Dieu pardonne et fait misericorde. La sourate construit une image de Dieu qui legifere avec rigueur mais pardonne avec abondance.",
              axe4_coherence: "La paire ghafur-rahim est une des paires d'attributs divins les plus frequentes du Coran — elle apparait plus de 70 fois. Le Coran associe systematiquement la couverture des fautes (ghufran) et la tendresse (rahma) — les deux vont ensemble. Dieu ne se contente pas de couvrir les fautes — Il enveloppe aussi de Sa tendresse. La couverture est un acte de protection (couvrir ce qui est laid) et la tendresse est un acte d'amour (envelopper de douceur).",
              axe5_frequence: "Pour la mission du khalifa, la justification divine donne confiance. Le khalifa demande pardon parce qu'il sait que Dieu pardonne — la demande n'est pas un acte desespere mais un acte confiant. La mission du khalifa est encadree par la couverture et la tendresse divines — meme quand il commet des erreurs, Dieu est la pour couvrir et pour faire misericorde. Cette certitude permet au khalifa d'avancer sans etre paralyse par la peur de l'erreur."
            }
          }
        }
      },
      // gfr pos=11 (adjectif ghafurun)
      {
        word_key: "gfr", position: 11, sense_chosen: "Pardonneur",
        analysis_axes: {
          sense_chosen: "Pardonneur",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["couvrir", "cacher", "proteger", "pardonner", "effacer les fautes", "voiler les defauts", "absoudre"],
              proof_ctx: "L'adjectif ghafurun est un adjectif qualificatif de la racine gh-f-r, sur le schema fa'ul. D'apres les sources etymologiques, le schema fa'ul en arabe marque l'intensite et la permanence — il designe celui qui fait l'action de maniere intense et constante. Ghafur signifie donc « celui qui couvre intensement et constamment » — la couverture divine des fautes n'est pas un acte ponctuel mais une qualite permanente. Le concept de pardon/couverture ici est un attribut divin permanent — Dieu EST pardonneur par nature, pas seulement quand Il decide de pardonner. Le schema fa'ul marque cette permanence : ghafur n'est pas « celui qui a pardonne une fois » mais « celui qui pardonne toujours et abondamment ». L'adjectif est attribut de Dieu dans une phrase nominale (Allaha ghafurun) — il qualifie l'essence divine, pas un acte momentane.",
              axe1_verset: "L'adjectif ghafurun est le premier attribut divin mentionne dans la justification. Le champ lexical (demander pardon, Dieu, Misericordieux) montre que le pardon est la reponse divine a la demande humaine. Le verset construit un dialogue : les humains demandent (istaghfiru), Dieu est (ghafur) — la demande trouve sa reponse dans la nature meme de Dieu. L'adjectif repond au verbe : istaghfiru (forme X de gh-f-r = cherchez la couverture) → ghafur (fa'ul de gh-f-r = celui qui couvre intensement). La meme racine est utilisee pour la demande et pour la reponse — la demande de couverture est fondee sur la qualite de celui qui couvre.",
              axe2_voisins: "Le verset 2:182 utilisait deja la paire ghafur-rahim pour conclure le passage sur le testament. Le verset 2:192 l'utilisait pour conclure le passage sur le combat. Le verset 2:199 l'utilise pour conclure le passage sur le deferlement. La repetition de cette paire dans des contextes legislatifs differents montre que la couverture et la tendresse divines sont le fondement de toute la legislation — chaque obligation est assortie d'un rappel que Dieu pardonne et fait misericorde.",
              axe3_sourate: "La racine gh-f-r sous la forme ghafur apparait de nombreuses fois dans la sourate al-Baqarah. En 2:173, apres les interdits alimentaires. En 2:182, apres le testament. En 2:199, apres le deferlement. La sourate utilise ghafur comme un refrain legislatif — chaque bloc de regles se conclut par le rappel que Dieu est pardonneur. Ce refrain empeche la legislation de devenir oppressante — les obligations sont fermes mais Dieu est indulgent.",
              axe4_coherence: "L'attribut ghafur apparait environ 91 fois dans le Coran. Il est le plus souvent associe a rahim (72 fois), formant la paire ghafur-rahim qui est la description divine la plus frequente du Coran. Le Coran insiste sur le fait que Dieu pardonne — plus que sur tout autre attribut. La couverture divine est presentee comme la qualite dominante de la relation entre Dieu et les humains. Le schema fa'ul marque que cette couverture n'est pas conditionnelle mais constitutive — elle fait partie de l'essence divine.",
              axe5_frequence: "Pour la mission du khalifa, le pardon divin est le filet de securite de la mission. Le khalifa sait qu'il commettra des erreurs — la demande de pardon et la certitude que Dieu pardonne lui permettent de continuer la mission sans desesperer. Le ghufran divin est un acte de couverture — Dieu cache les defauts du khalifa et lui donne une chance de recommencer. Sans cette couverture, la mission serait ecrasante — avec elle, le khalifa avance avec confiance."
            }
          }
        }
      },
      // rhm pos=12
      {
        word_key: "rhm", position: 12, sense_chosen: "Misericordieux",
        analysis_axes: {
          sense_chosen: "Misericordieux",
          concept_chosen: "Misericorde/Tendresse",
          concepts: {
            "Misericorde/Tendresse": {
              status: "retenu",
              senses: ["tendresse", "misericorde", "compassion", "douceur maternelle", "pitie", "clemence", "bienveillance"],
              proof_ctx: "L'adjectif rahimun est un adjectif qualificatif de la racine r-h-m, sur le schema fa'ul. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-h-m porte le sens premier de rahim (uterus, ventre maternel) — la tendresse originelle est celle du ventre qui protege l'enfant. La rahma est la tendresse maternelle etendue a un sens plus large de compassion et de bienveillance. Le schema fa'ul (rahim) marque l'intensite et la permanence — Dieu est celui dont la tendresse est intense et constante, comme la tendresse du ventre maternel qui ne cesse jamais de proteger. Le concept de misericorde est un mouvement interieur de tendresse qui se manifeste a l'exterieur par des actes de bienveillance — c'est une qualite qui sort de celui qui la possede et atteint celui qui en beneficie.",
              axe1_verset: "L'adjectif rahimun est le deuxieme attribut divin, place apres ghafurun. Le champ lexical (pardon, Dieu, Pardonneur) montre que la misericorde complete le pardon. Le verset construit une double qualification : Dieu couvre les fautes (ghafur) ET enveloppe de tendresse (rahim). La couverture efface le mal, la tendresse apporte le bien — les deux ensemble forment la reponse divine complete a la demande de pardon. L'ordre n'est pas aleatoire : d'abord la couverture (enlever le negatif), puis la tendresse (apporter le positif).",
              axe2_voisins: "Le verset 2:198 parlait de la grace divine (fadl) — un bienfait materiel. Le verset 2:199 mentionne la tendresse divine (rahim) — un bienfait spirituel. La sequence montre que Dieu accorde a la fois des bienfaits materiels (grace pendant le pelerinage) et des bienfaits spirituels (couverture et tendresse). Les versets du pelerinage construisent une image complete de la generosite divine qui couvre tous les aspects de la vie du pelerin.",
              axe3_sourate: "La racine r-h-m est omnipresente dans la sourate al-Baqarah. En 2:1, la basmala (« Au nom de Dieu, le Tout-Misericordieux, le Misericordieux »). En 2:37, « Il est le Revenant en grace, le Misericordieux ». En 2:54, « Il est le Revenant en grace, le Misericordieux ». En 2:163, « le Tout-Misericordieux, le Misericordieux ». En 2:199, rahim qualifie Dieu apres l'ordre de demander pardon. La sourate fait de la rahma un attribut divin central — elle encadre toute la legislation et toute la narration.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran — c'est une des racines les plus frequentes. L'attribut rahim apparait 114 fois, souvent en paire avec ghafur. En 1:1, la basmala ouvre le Coran par les deux formes de la tendresse : al-Rahman (le Tout-Misericordieux, celui dont la tendresse englobe tout) et al-Rahim (le Misericordieux, celui dont la tendresse est constante et intense). Le Coran construit la tendresse divine comme la qualite fondamentale de la relation entre Dieu et la creation.",
              axe5_frequence: "Pour la mission du khalifa, la tendresse divine est le modele de la mission. Le khalifa est envoye pour etablir la justice — mais la justice sans tendresse est de la brutalite. La mention de la rahma apres le ghufran montre que Dieu ne se contente pas de couvrir les fautes — Il enveloppe aussi de tendresse. Le khalifa doit reproduire ce modele : corriger avec justice et envelopper de bienveillance. La rahma est ce qui rend la mission du khalifa humaine et non mecanique."
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

  const verseIds = [206];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 199 ===\n');
  await processVerse(199);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V199 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
