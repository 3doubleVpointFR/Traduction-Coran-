const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  verse_id: 266,
  analysis_id: 625,
  full_translation: "Ou bien, [songe] à celui qui est passé près d'une cité déserte et renversée. Il dit : « Comment Allah ressuscitera-t-Il cette (cité) après sa mort ? » Alors Allah le fit mourir pendant cent ans, puis le ressuscita et lui dit : « Combien de temps es-tu resté ? » Il dit : « Je suis resté un jour ou moins d'un jour. » Allah dit : « Non, tu es resté cent ans. Regarde ta nourriture et ta boisson : elles ne se sont pas dégradées. Et regarde ton âne. Et pour faire de toi un signe pour les hommes, regarde les os comme Nous les redressons, puis les revêtons de chair. » Quand la chose lui fut bien établie, il dit : « Je sais qu'Allah est Omnipotent. »",
  translation_arab: "Ou [vois] celui qui passa par une cite effondrée sur ses toits et dit : 'Comment Dieu ferait-Il revivre celle-ci apres sa mort ?' Dieu le fit mourir cent ans, puis le ressuscita. Il dit : 'Combien de temps es-tu demeure ?' Il dit : 'Je suis demeure un jour ou partie d'un jour.' Il dit : 'Non, tu as demeure cent ans. Regarde ta nourriture et ta boisson : elles ne se sont pas alterees. Et regarde ton ane. Et pour faire de toi un signe pour les gens, regarde les os — comment Nous les dressons puis les revetons de chair.' Lorsque cela lui fut manifeste, il dit : 'Je sais que Dieu est puissant sur toute chose.'",
  translation_explanation: `§DEMARCHE§
Le verset 2:259 est une demonstration narrative de la resurrection : un homme passe pres d'une cite effondrée (khawiya ala urushiha), s'interroge sur la possibilite de la resurrection, et Dieu lui offre une experience directe — il meurt cent ans puis est ressuscite. La demarche traductive consiste a rendre la progression dramatique et pedagogique du recit. Le terme qarya (cité, bourgade) designe un lieu ou les humains se rassemblent — son etat d'effondrement total est rendu par khawiya ala urushiha (effondrée sur ses toits). Le verbe ba'atha (ressusciter, envoyer) est le terme technique coranique de la resurrection — thumma ba'athahu = puis Il le ressuscita. Le verbe labitha (demeurer, sejourner) apparait trois fois dans le verset, soulignant le theme de la duree percue versus la duree reelle. La nourriture non alteree apres cent ans (lam yatasannah) et l'ane dont les os se reconstituent sont les deux signes empiriques de la puissance divine. La sequence nunshizu al-azm thumma naksuha lahma (comment Nous dressons les os puis les revetons de chair) est une description anatomique et sequentielle de la resurrection — ossature d'abord, chair ensuite. La conclusion alam anna llaha ala kulli shay'in qadir (il sait que Dieu est puissant sur toute chose) est la formule d'attestation finale.

§JUSTIFICATION§
Qarya traduit par "cite" : racine qry = se rassembler, puis lieu ou les gens se rassemblent. Khawiya traduit par "effondree" : racine khwy = etre creux, vide, tomber en ruine. Urush traduit par "toits" : racine arsh = toit, charpente, structure superieure. Ba'atha traduit par "ressuscita" : racine b-'th = envoyer, susciter, ressusciter — terme technique de la resurrection eschatologique. Labitha traduit par "demeura" : racine lbth = rester, sejourner, passer du temps en un lieu. Yatasannah traduit par "se sont alterees" : racine snh = annee, vieillir avec les annees. Himar traduit par "ane" : racine hmr, l'animal domestique. Nunshizu traduit par "dressons" : racine nshz = se lever, dresser, mettre debout. Azm traduit par "os" : racine azm = os, ossature. Naksuha traduit par "revetons" : racine ksw = vetir, recouvrir. Lahm traduit par "chair" : racine lhm = chair, viande. Qadir traduit par "puissant" : racine qdr = pouvoir, capacite.

§CRITIQUE§
La traduction de Hamidullah rend ce verset en termes generalement fideles mais avec plusieurs points discutables. Premierement, "deserte et renversee" pour khawiya ala urushiha — Hamidullah additionne deux adjectifs la ou l'arabe utilise un seul participe avec un complement : "effondree sur ses toits" est plus precis et plus image. Deuxiemement, "ressuscitera" pour yuhyi dans la question initiale — le verbe utilise est bien yuhyi (fait vivre) et non un terme specifique de resurrection ; garder "ferait-Il revivre" est preferable a "ressuscitera" qui importe une eschatologie pas encore presente dans la question du personnage. Troisiemement, "elle ne s'est pas degradee" pour lam yatasannah est correct ; "ne se sont pas alterees" est plus precis. Quatriemement, "redressons" pour nunshizu est acceptable ; mais la nuance de "dresser" (mettre debout le squelette) est plus fidele a l'image anatomique que "redresser" (qui implique quelque chose de coude). Notre traduction cherche a rendre la pedagogie progressive et concrete du miracle.`,
  segments: [
    { position: 1, text_arab: "أَوْ", translation: "Ou", phonetic: "aw", grammar_type: "particle" },
    { position: 2, text_arab: "كَٱلَّذِى", translation: "[vois] celui qui", phonetic: "ka-lladhi", grammar_type: "particle" },
    { position: 3, text_arab: "مَرَّ", translation: "passa par", phonetic: "marra", grammar_type: "verb", root_key: "mrr" },
    { position: 4, text_arab: "عَلَىٰ", translation: "pres de", phonetic: "ala", grammar_type: "particle" },
    { position: 5, text_arab: "قَرْيَةٍ", translation: "une cite", phonetic: "qaryatin", grammar_type: "noun", root_key: "qry" },
    { position: 6, text_arab: "وَهِىَ", translation: "qui etait", phonetic: "wa-hiya", grammar_type: "particle" },
    { position: 7, text_arab: "خَاوِيَةٌ", translation: "effondree", phonetic: "khawiyatun", grammar_type: "noun", root_key: "xwy" },
    { position: 8, text_arab: "عَلَىٰ", translation: "sur", phonetic: "ala", grammar_type: "particle" },
    { position: 9, text_arab: "عُرُوشِهَا", translation: "ses toits", phonetic: "urushiha", grammar_type: "noun", root_key: "arsh" },
    { position: 10, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 11, text_arab: "أَنَّىٰ", translation: "Comment", phonetic: "anna", grammar_type: "particle" },
    { position: 12, text_arab: "يُحْيِۦ", translation: "ferait-Il revivre", phonetic: "yuhyi", grammar_type: "verb", root_key: "hyy" },
    { position: 13, text_arab: "هَٰذِهِ", translation: "celle-ci", phonetic: "hadhihi", grammar_type: "particle" },
    { position: 14, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "allahu", grammar_type: "noun" },
    { position: 15, text_arab: "بَعْدَ", translation: "apres", phonetic: "ba'da", grammar_type: "particle" },
    { position: 16, text_arab: "مَوْتِهَا", translation: "sa mort", phonetic: "mawtiha", grammar_type: "noun", root_key: "mwt" },
    { position: 17, text_arab: "فَأَمَاتَهُ", translation: "Dieu le fit mourir", phonetic: "fa-amatahu", grammar_type: "verb", root_key: "mwt" },
    { position: 18, text_arab: "ٱللَّهُ", translation: "", phonetic: "allahu", grammar_type: "noun" },
    { position: 19, text_arab: "مِا۟ئَةَ", translation: "cent", phonetic: "mi'ata", grammar_type: "noun" },
    { position: 20, text_arab: "عَامٍ", translation: "ans,", phonetic: "amin", grammar_type: "noun", root_key: "awm" },
    { position: 21, text_arab: "ثُمَّ", translation: "puis", phonetic: "thumma", grammar_type: "particle" },
    { position: 22, text_arab: "بَعَثَهُۥ", translation: "le ressuscita.", phonetic: "ba'athahu", grammar_type: "verb", root_key: "bEv" },
    { position: 23, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 24, text_arab: "كَمْ", translation: "Combien de temps", phonetic: "kam", grammar_type: "particle" },
    { position: 25, text_arab: "لَبِثْتَ", translation: "es-tu demeure ?", phonetic: "labithta", grammar_type: "verb", root_key: "lbv" },
    { position: 26, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 27, text_arab: "لَبِثْتُ", translation: "Je suis demeure", phonetic: "labithu", grammar_type: "verb", root_key: "lbv" },
    { position: 28, text_arab: "يَوْمًا", translation: "un jour", phonetic: "yawman", grammar_type: "noun", root_key: "ywm" },
    { position: 29, text_arab: "أَوْ", translation: "ou", phonetic: "aw", grammar_type: "particle" },
    { position: 30, text_arab: "بَعْضَ", translation: "partie d'un", phonetic: "ba'da", grammar_type: "noun" },
    { position: 31, text_arab: "يَوْمٍ", translation: "jour.", phonetic: "yawmin", grammar_type: "noun", root_key: "ywm" },
    { position: 32, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 33, text_arab: "بَل", translation: "Non,", phonetic: "bal", grammar_type: "particle" },
    { position: 34, text_arab: "لَّبِثْتَ", translation: "tu as demeure", phonetic: "labithta", grammar_type: "verb", root_key: "lbv" },
    { position: 35, text_arab: "مِا۟ئَةَ", translation: "cent", phonetic: "mi'ata", grammar_type: "noun" },
    { position: 36, text_arab: "عَامٍ", translation: "ans.", phonetic: "amin", grammar_type: "noun", root_key: "awm" },
    { position: 37, text_arab: "فَٱنظُرْ", translation: "Regarde", phonetic: "fandhur", grammar_type: "verb", root_key: "nzr" },
    { position: 38, text_arab: "إِلَىٰ", translation: "ta", phonetic: "ila", grammar_type: "particle" },
    { position: 39, text_arab: "طَعَامِكَ", translation: "nourriture", phonetic: "ta'amika", grammar_type: "noun", root_key: "tEm" },
    { position: 40, text_arab: "وَشَرَابِكَ", translation: "et ta boisson :", phonetic: "wa-sharabika", grammar_type: "noun", root_key: "shrb" },
    { position: 41, text_arab: "لَمْ", translation: "elles ne se sont pas", phonetic: "lam", grammar_type: "particle" },
    { position: 42, text_arab: "يَتَسَنَّهْ", translation: "alterees.", phonetic: "yatasannah", grammar_type: "verb", root_key: "snh" },
    { position: 43, text_arab: "وَٱنظُرْ", translation: "Et regarde", phonetic: "wa-ndhur", grammar_type: "verb", root_key: "nzr" },
    { position: 44, text_arab: "إِلَىٰ", translation: "ton", phonetic: "ila", grammar_type: "particle" },
    { position: 45, text_arab: "حِمَارِكَ", translation: "ane.", phonetic: "himarika", grammar_type: "noun", root_key: "hmr" },
    { position: 46, text_arab: "وَلِنَجْعَلَكَ", translation: "Et pour faire de toi", phonetic: "wa-li-naj'alaka", grammar_type: "verb" },
    { position: 47, text_arab: "ءَايَةً", translation: "un signe", phonetic: "ayatan", grammar_type: "noun", root_key: "awy" },
    { position: 48, text_arab: "لِّلنَّاسِ", translation: "pour les gens,", phonetic: "li-l-nasi", grammar_type: "noun", root_key: "nws" },
    { position: 49, text_arab: "وَٱنظُرْ", translation: "regarde", phonetic: "wa-ndhur", grammar_type: "verb", root_key: "nzr" },
    { position: 50, text_arab: "إِلَى", translation: "les", phonetic: "ila", grammar_type: "particle" },
    { position: 51, text_arab: "ٱلْعِظَامِ", translation: "os —", phonetic: "al-azami", grammar_type: "noun", root_key: "azm" },
    { position: 52, text_arab: "كَيْفَ", translation: "comment", phonetic: "kayfa", grammar_type: "particle" },
    { position: 53, text_arab: "نُنشِزُهَا", translation: "Nous les dressons", phonetic: "nunshizuha", grammar_type: "verb", root_key: "nshz" },
    { position: 54, text_arab: "ثُمَّ", translation: "puis", phonetic: "thumma", grammar_type: "particle" },
    { position: 55, text_arab: "نَكْسُوهَا", translation: "les revetons", phonetic: "naksuha", grammar_type: "verb", root_key: "ksw" },
    { position: 56, text_arab: "لَحْمًا", translation: "de chair.", phonetic: "lahman", grammar_type: "noun", root_key: "lhm" },
    { position: 57, text_arab: "فَلَمَّا", translation: "Lorsque", phonetic: "fa-lamma", grammar_type: "particle" },
    { position: 58, text_arab: "تَبَيَّنَ", translation: "cela lui fut manifeste,", phonetic: "tabayyana", grammar_type: "verb", root_key: "byn" },
    { position: 59, text_arab: "لَهُۥ", translation: "", phonetic: "lahu", grammar_type: "particle" },
    { position: 60, text_arab: "قَالَ", translation: "il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 61, text_arab: "أَعْلَمُ", translation: "Je sais", phonetic: "a'lamu", grammar_type: "verb", root_key: "alm" },
    { position: 62, text_arab: "أَنَّ", translation: "que", phonetic: "anna", grammar_type: "particle" },
    { position: 63, text_arab: "ٱللَّهَ", translation: "Dieu", phonetic: "allaha", grammar_type: "noun" },
    { position: 64, text_arab: "عَلَىٰ", translation: "sur", phonetic: "ala", grammar_type: "particle" },
    { position: 65, text_arab: "كُلِّ", translation: "toute", phonetic: "kulli", grammar_type: "noun" },
    { position: 66, text_arab: "شَىْءٍ", translation: "chose", phonetic: "shay'in", grammar_type: "noun" },
    { position: 67, text_arab: "قَدِيرٌ", translation: "puissant.", phonetic: "qadirun", grammar_type: "noun", root_key: "qdr" }
  ],
  vwa: [
    {
      word_key: "qry",
      position: 5,
      sense_chosen: "cite, lieu peuple — lieu ou les humains se sont rassembles pour vivre ensemble",
      analysis_axes: {
        sense_chosen: "cite, lieu peuple — lieu ou les humains se sont rassembles pour vivre ensemble",
        concept_chosen: "Cite/LieuPeuple",
        concepts: {
          "Cite/LieuPeuple": {
            status: "retenu",
            senses: [
              "s'assembler, se rassembler (sens etymologique premier)",
              "qarya = lieu ou les gens se rassemblent, bourgade, village, cite",
              "agglomeration humaine quelle que soit sa taille",
              "lieu habite ou qui l'etait — marque par la presence humaine"
            ],
            proof_ctx: "Lane's Lexicon: q-r-y = to collect, to gather; qarya = a village, a town, a city — literally the place where people gather. The root shares its gathering sense with the verb qara'a (to read = to assemble sounds/letters). A qarya can range from a small hamlet to a great city depending on context.",
            axe1_verset: "La qarya est ici qualifiee de khawiyatun ala urushiha — effondree sur ses toits. Ce n'est pas une cite desertee (ou les batiments seraient encore debout) mais une cite dont les structures se sont ecroulees sur elles-memes. L'image est celle d'une civilisation reellement aneantie. Le voyageur qui passe par la et voit cette desolation absolue s'interroge naturellement sur la resurrection : peut-on vraiment faire revivre cela ? La qarya morte est le defi que Dieu releve par une demonstration empirique.",
            axe2_voisins: "La cite effondrée (pos=5-9) contraste avec la question sur la resurrection (pos=10-16) et la reponse divine sous forme d'experience directe (pos=17 et suivants). La vue de la destruction radicale est le point de depart de toute la sequence pedagogique. La qarya n'est pas un simple decor — elle est le probleme theologique que le verset va resoudre. Le voyageur lui-meme deviendra un signe (aya, pos=47) pour les gens, se substituant symboliquement a la cite qu'il contemplait.",
            axe3_sourate: "Al-Baqarah contient plusieurs references a des cites detruites et a la punition collective (2:59 sur les transgresseurs, 2:61 sur les rebellions). La qarya desolee est un signe (aya) de la puissance divine — et l'homme qui la contemple en sera lui-meme un signe pour les gens. Dans le Coran, les cites sont souvent punies collectivement quand elles transgressent (7:4 : combien de cites avons-Nous detruites). La qarya effondrée de ce verset peut aussi etre lue comme le symbole d'une civilization defunte.",
            axe4_coherence: "La racine q-r-y donne aussi qar'a (lire — assembler les sons en parole) et al-Qur'an (la Recitation — la Parole assemblee). Le lieu ou les gens se rassemblent est l'etymologie de qarya. Dans le Coran, la qarya est souvent le lieu de la revelation et du jugement collectif. L'expression ahlaka al-qura (Il a detruit les cites) est une formule pour la punition divine collective qui traverse tout le Coran.",
            axe5_frequence: "Qarya apparait environ 56 fois dans le Coran, toujours pour designer un lieu habite ou qui l'etait. L'expression est plurielle et singuliere selon les contextes : al-qura (les cites) comme ensemble de civilisations humaines, ou qarya specifique pour un lieu precis du recit. L'image de la cite comme unite de vie humaine et de jugement collectif est fondamentale dans la theologie coranique."
          },
          "Rassemblement/Concentration": {
            status: "peu_probable",
            senses: [
              "qarar = se rassembler, se concentrer en un lieu",
              "al-qura = les lieux de rassemblement collectif"
            ],
            proof_ctx: "Lane's Lexicon: le sens etymologique premier de q-r-y est l'acte de se rassembler — mais dans le Coran, qarya designe presque toujours le lieu physique concret, pas l'acte abstrait de rassemblement.",
            axe1_verset: "Dans ce verset, qarya designe clairement un lieu physique avec des structures (toits, urush). Le sens abstrait de rassemblement est trop eloigne du contexte concret.",
            axe2_voisins: "Aucun element contextuel ne renvoie au sens abstrait de rassemblement. La description physique (effondree sur ses toits) confirme le sens de lieu concret.",
            axe3_sourate: "Le sens abstrait de rassemblement est present en arriere-plan etymologique mais n'est jamais actualise dans les utilisations coraniques de qarya.",
            axe4_coherence: "La coherence avec khawiya (effondree) impose le sens de lieu physique.",
            axe5_frequence: "Dans 100% des occurrences coraniques, qarya designe un lieu physique concret — jamais un acte abstrait."
          }
        }
      }
    },
    {
      word_key: "xwy",
      position: 7,
      sense_chosen: "effondrée, creuse, vide — etat de ce qui s'est ecroule sur lui-meme, structure et contenu",
      analysis_axes: {
        sense_chosen: "effondrée, creuse, vide — etat de ce qui s'est ecroule sur lui-meme, structure et contenu",
        concept_chosen: "Effondrement/Vacuite",
        concepts: {
          "Effondrement/Vacuite": {
            status: "retenu",
            senses: [
              "etre vide, etre creux — sens premier de la racine",
              "khawiya = effondree, tombee en ruine, videe de sa substance",
              "s'affaisser sur soi-meme, s'ecrouler en laissant un vide",
              "deserte et effondrée — cumul du vide humain et de l'effondrement structural"
            ],
            proof_ctx: "Lane's Lexicon: kh-w-y = to be empty, to be hollow, to fall in ruins, to collapse; khawiya = empty, fallen in, ruined, hollow — Lane attests the dual sense of physical collapse and inner emptiness. Khawiyatun ala urushiha = collapsed upon its roofs — meaning the upper structures have caved in, the city has fallen into itself.",
            axe1_verset: "Khawiyatun ala urushiha = effondree sur ses toits. L'image est anatomiquement precise : les toits (arush = structures superieures, charpentes, plafonds) ont cede sous leur propre poids et la cite s'est ecroulée sur elle-meme. Ce n'est pas une cite desertee ou les batiments seraient debout mais vides — c'est une cite dont les structures physiques se sont effondrees. Cette precision est importante pour comprendre la question qui suit : peut-on faire revivre quelque chose d'aussi totalement detruit ?",
            axe2_voisins: "L'image de la cite effondree est le declencheur de la question sur la resurrection. La question annaY yuhyi hadhihi llahu ba'da mawtiha (comment Dieu ferait-Il revivre celle-ci apres sa mort ?) presuppose un etat de destruction totale — pas une simple degradation. La reponse divine sera a la hauteur de la question : une demonstration empirique et sequentielle de la resurrection, depuis les os qui se dressent jusqu'a la chair qui les recouvre.",
            axe3_sourate: "La metaphore de la chute et de l'effondrement (khawa) s'applique dans le Coran a la fois aux structures physiques et aux structures sociales et morales. Une cite effondree est le symbole d'une civilisation detruite par son injustice. Al-Baqarah presente plusieurs exemples de peuples qui ont transgresse et dont les civilisations ont ete detruites — la qarya khawiya est l'image emblematique de ce destin.",
            axe4_coherence: "La meme racine kh-w-y apparait en 22:45 pour decrire des puits abandonnes et des chateaux en ruine — le resultat de la destruction divine de peuples injustes. L'image de la cite effondree est donc liee dans le Coran aux civilisations qui ont transgresse. La khawiya de ce verset peut etre lue comme le signe d'une punition divine anterieure — et le voyageur qui la contemple se demande comment cette destruction peut etre reversee.",
            axe5_frequence: "Khawiya dans ce sens precis d'effondrement structural est rare dans le Coran. Sa precision — effondree sur ses propres toits — en fait une image saisissante de la desolation complete. Cette rarete meme souligne l'intensite de la scene : la cite n'est pas simplement en mauvais etat, elle est dans un etat d'effondrement total qui rend la question de la resurrection d'autant plus pertinente et dramatique."
          },
          "Absence/Desertification": {
            status: "probable",
            senses: [
              "vide de ses occupants, deserte",
              "khala = etre deserte, abandonne par ses habitants"
            ],
            proof_ctx: "Lane's Lexicon: khawiya peut aussi signifier deserted, empty of inhabitants — le sens de vide humain coexiste avec le sens d'effondrement physique.",
            axe1_verset: "La qualification ala urushiha (sur ses toits) indique un effondrement physique concret, pas seulement un abandon humain. Une cite desertee mais debout n'aurait pas ses structures effondrees.",
            axe2_voisins: "Le contexte de la question sur la resurrection (comment faire revivre cela ?) implique une destruction totale, pas un simple depart des habitants.",
            axe3_sourate: "Le sens de desertification (abandon humain) est present en arriere-plan mais l'effondrement physique est le sens dominant impose par le complement ala urushiha.",
            axe4_coherence: "Les deux sens coexistent semantiquement : la cite est a la fois vide de ses occupants ET physiquement effondree. Mais l'effondrement structural est le premier plan de l'image.",
            axe5_frequence: "La precision ala urushiha distingue khawiya du sens de simple abandon — c'est l'effondrement qui prime dans ce verset."
          }
        }
      }
    },
    {
      word_key: "bEv",
      position: 22,
      sense_chosen: "ressusciter, susciter a nouveau — faire sortir de la mort vers la vie, terme technique de la resurrection",
      analysis_axes: {
        sense_chosen: "ressusciter, susciter a nouveau — faire sortir de la mort vers la vie, terme technique de la resurrection",
        concept_chosen: "Resurrection/Envoi",
        concepts: {
          "Resurrection/Envoi": {
            status: "retenu",
            senses: [
              "envoyer, deputer en mission (sens premier)",
              "susciter, faire sortir d'un etat d'inaction ou de mort",
              "ba'atha = ressusciter d'entre les morts (sens eschatologique)",
              "thumma ba'athahu = puis Il le ressuscita — terme technique du Coran"
            ],
            proof_ctx: "Lane's Lexicon: b-'-th = to send, to dispatch, to raise up, to arouse, to resurrect; ba'atha = to send someone on a mission, or to raise the dead; the theological sense of ba'atha = to quicken the dead, to raise them from death. The same root gives yawm al-ba'th = the Day of Resurrection. Lane notes that ba'atha and arsala (to send) are often synonymous for prophetic mission, while ba'atha has the additional eschatological sense of resurrection.",
            axe1_verset: "Ba'atha ici est explicitement utilise pour la resurrection apres cent ans de mort. Thumma ba'athahu = puis Il le ressuscita — la sequence amata (Il le fit mourir, pos=17) → ba'athahu (Il le ressuscita, pos=22) est la demonstration pratique de la toute-puissance divine sur le cycle vie-mort. C'est le meme verbe utilise pour l'envoi des prophetes (ba'atha rasul = envoyer un messager) et pour la resurrection eschatologique collective — les deux sens se rejoignent dans l'idee de faire sortir quelqu'un d'un etat de silence ou d'inaction vers un etat d'action et de vie.",
            axe2_voisins: "La sequence mort (pos=17) → resurrection (pos=22) → interrogation sur la duree (pos=23-36) est le coeur du miracle. Le voyageur est un cas individuel qui prefigure la resurrection collective du Jour dernier. La question sur la duree (labitha, trois occurrences) montre que la resurrection implique une discontinuite dans le temps vecu — le ressuscite ne sait pas combien de temps il a ete mort. La nourriture non alteree et l'ane reconstitue sont les confirmations empiriques.",
            axe3_sourate: "Al-Baqarah contient plusieurs demonstrations de la resurrection divine : 2:243 (les milliers qui fuyaient la mort et furent ressuscites), 2:259 (ici, le voyageur et la cite), 2:260 (les oiseaux d'Ibrahim). Ces trois exemples forment une progression de preuve sur la toute-puissance divine sur la vie et la mort. La resurrection n'est pas seulement un article de foi — elle est demonstree empiriquement et progressivement dans cette section de la sourate.",
            axe4_coherence: "Ba'atha est le verbe technique du Coran pour la resurrection eschatologique — yawm al-ba'th = le Jour de la Resurrection. La meme racine donne mab'uth (ressuscite, envoye) et bi'tha (mission prophetique). Vie, mort, resurrection et mission prophetique sont liees dans cette racine unique. Dieu envoie les prophetes et envoie les morts vers la vie — la resurrection est vue comme un envoi divin, une nouvelle mission donnee a ceux qui etaient morts.",
            axe5_frequence: "Ba'atha apparait environ 67 fois dans le Coran avec les deux sens (envoyer et ressusciter). La polyvalence de ce verbe est significative : Dieu envoie les prophetes en mission et envoie les morts vers la vie selon le meme acte de volonte souveraine. Le verset 259 est l'une des demonstrations les plus concretes et les plus detaillees de ce pouvoir — avec la nourriture non alteree et les os qui se reconstituent comme preuves empiriques supplementaires."
          },
          "Stimulation/Declenchement": {
            status: "probable",
            senses: [
              "susciter un mouvement, declencher une action",
              "ba'atha = stimuler, activer ce qui etait inerte"
            ],
            proof_ctx: "Lane's Lexicon: ba'atha peut signifier to arouse, to stimulate, to set in motion — sens connexe a la resurrection mais plus general.",
            axe1_verset: "Dans ce verset, ba'atha designe explicitement la resurrection apres la mort — le contexte eschatologique est sans ambiguite.",
            axe2_voisins: "La sequence amata → ba'atha (mourir puis ressusciter) impose le sens de resurrection plutot que de simple stimulation.",
            axe3_sourate: "Le sens de stimulation est present dans certains contextes coraniques de ba'atha mais n'est pas pertinent ici.",
            axe4_coherence: "La precision semantique est importante : la resurrection est un ba'ath particulier, pas n'importe quel suscitement.",
            axe5_frequence: "Dans les contextes explicitement eschatologiques, ba'atha designe la resurrection. Le sens de stimulation generale est secondaire."
          }
        }
      }
    },
    {
      word_key: "lbv",
      position: 25,
      sense_chosen: "demeurer, sejourner, rester en un lieu pour une duree — duree percue versus duree reelle",
      analysis_axes: {
        sense_chosen: "demeurer, sejourner, rester en un lieu pour une duree — duree percue versus duree reelle",
        concept_chosen: "Demeure/Sejour",
        concepts: {
          "Demeure/Sejour": {
            status: "retenu",
            senses: [
              "rester, sejourner, demeurer en un lieu ou dans un etat",
              "labitha = il est reste, il a sejoune (accompli)",
              "la duree comme dimension subjective et objective du sejour",
              "s'attarder, passer du temps — implique une duree consciente ou percue"
            ],
            proof_ctx: "Lane's Lexicon: l-b-th = to remain, to stay, to tarry, to abide; labitha = he remained, he stayed; labithu = the duration of the stay. The verb implies both a subjective experience of duration and an objective measure of time spent in a place or state.",
            axe1_verset: "Labitha apparait trois fois dans ce verset (pos=25, 27, 34) — repetition qui souligne l'importance centrale de la duree dans le miracle. Dieu demande combien de temps il a demeure (pos=25), l'homme repond un jour ou moins (pos=27-31), Dieu rectifie cent ans (pos=33-36). La duree objective (100 ans) et la duree subjective (un jour) divergent totalement. C'est le coeur du miracle : le temps s'est suspendu pour lui pendant que le monde biologique autour de lui (l'ane) a suivi son cours.",
            axe2_voisins: "La divergence entre duree percue et duree reelle est confirmee par deux signes : la nourriture non alteree (pos=37-42) — qui montre que le temps objectif s'est suspendu pour lui — et l'ane dont les os se reconstituent (pos=43-56) — qui montre que le monde biologique a, lui, suivi le cours normal du temps. L'homme a donc ete preserve dans un etat suspendu pendant cent ans, puis ressuscite, sans avoir vieilli ni perdu ses provisions.",
            axe3_sourate: "Le theme du temps est present dans al-Baqarah dans plusieurs contextes : la duree de la periode d'attente apres le divorce (iddah, 2:228-234), les termes de paiement des dettes (2:280), la duree de l'allaitement (2:233). La perception du temps est relative et gouvernee par Dieu. Ce verset 259 est l'illustration la plus dramatique de cette relativite : cent ans vecus comme un jour ou moins.",
            axe4_coherence: "Labitha est utilise dans le Coran pour les durees de sejour dans l'au-dela (14:44 : labithu fi adh-dhulumati = ils sejourneront dans les tenebres) et pour les siecles de sejour au paradis (labithin fiha abadan = y demeurant eternellement). La question du temps et de son experience est un theme eschatologique central dans le Coran. Les gens de la Caverne (18:11-19) offrent un parallelisme exact : dormant dans la caverne, ils estiment avoir dormi un jour ou moins — exactement comme le voyageur de ce verset.",
            axe5_frequence: "Labitha apparait environ 36 fois dans le Coran. Sa frequence dans des contextes de temps suspendu ou modifie (les gens de la Caverne en 18:11-19, le voyageur ici, les durees eschatologiques) en fait un verbe associe aux miracles du temps divin et aux experiences ou la duree subjective diverge de la duree objective. C'est un verbe cle pour comprendre la theologie coranique du temps comme don divin modulable."
          },
          "Attente/Immobilite": {
            status: "probable",
            senses: [
              "attendre en restant immobile",
              "s'attarder sans avancer — sens de la patience dans le sejour"
            ],
            proof_ctx: "Lane's Lexicon: labitha peut impliquer le fait de rester en place sans mouvement, d'attendre. Ce sens d'immobilite est connexe mais secondaire.",
            axe1_verset: "Dans ce verset, labitha designe une duree de sejour mesurable (cent ans) — le sens de sejour temporel est plus precis que le simple sens d'immobilite.",
            axe2_voisins: "La question kam labithta (combien de temps es-tu reste ?) implique une mesure de duree, pas seulement un etat d'immobilite.",
            axe3_sourate: "Le sens d'attente est connexe mais secondaire dans ce contexte de quantification temporelle.",
            axe4_coherence: "L'immobilite et le sejour partagent l'idee de rester sans avancer, mais le sejour (avec sa dimension temporelle mesurable) est le sens premier dans ce contexte.",
            axe5_frequence: "Quand le Coran mesure une duree avec labitha, c'est le sens de sejour temporel qui prime sur le sens d'immobilite."
          }
        }
      }
    },
    {
      word_key: "nshz",
      position: 53,
      sense_chosen: "dresser, relever, assembler — les os se remettent debout, reconstitution sequentielle du squelette",
      analysis_axes: {
        sense_chosen: "dresser, relever, assembler — les os se remettent debout, reconstitution sequentielle du squelette",
        concept_chosen: "Dressement/Reconstitution",
        concepts: {
          "Dressement/Reconstitution": {
            status: "retenu",
            senses: [
              "s'elever, se lever, se dresser (sens premier de nshz/nshr)",
              "nunshizu = Nous les dressons, Nous les relevons (causatif divin)",
              "remettre debout ce qui etait tombe, assembler ce qui etait disperse",
              "reconstitution de l'ossature — premiere etape de la resurrection"
            ],
            proof_ctx: "Lane's Lexicon: n-sh-z = to rise, to be elevated, to lift up; nunshizu = we raise them up, we set them upright. Some readers read nunshiru (from n-sh-r = to spread, to scatter and then reassemble). Both readings converge on the sense of raising up and reassembling the bones. Lane attests nunshizu = we cause them to rise, to stand up — the causative divine act of making bones stand erect.",
            axe1_verset: "Nunshizu al-azm = comment Nous dressons les os. L'image est celle du squelette qui se reconstiue : les os epars se levent, se mettent en place, se dressent en ossature coherente. Puis naksuha lahman (pos=55-56) = Nous les revetons de chair. La description est sequentielle et anatomique : ossature d'abord, chair ensuite. C'est une vision progressive de la resurrection qui montre le PROCESSUS et pas seulement le resultat — Dieu pedagogique qui montre comment Il ressuscite.",
            axe2_voisins: "La sequence nunshizu (pos=53) → naksuha lahman (pos=55-56) est la demonstration complete en deux etapes. L'ossature se redresse d'abord (structure), puis la chair la revett (vie). C'est l'image inverse de la mort : en mourant, la chair disparait et les os restent ; en ressuscitant, les os se dressent et la chair les recouvre. Cette sequence est rendue visible a l'homme pour qu'il comprenne et atteste (pos=60-67) la toute-puissance divine.",
            axe3_sourate: "L'image de la resurrection osseuse est explicite et concrete dans ce verset. Elle repond a la question implicite de ceux qui doutent (peut-on vraiment ressusciter des os ? peut-on faire revivre une cite entierement detruite ?). Al-Baqarah donne ici une reponse visuelle, directe et sequentielle — pas un argument abstrait mais une demonstration que le personnage observe lui-meme.",
            axe4_coherence: "La meme image (os → chair dans la resurrection) apparait en 36:78-79 (qui redonnera la vie a ces os pourris ? Dis : Il les vivifiera, Celui qui les a crees la premiere fois) et en 23:14 (creation de l'homme : os revetus de chair). La resurrection est presentee dans le Coran comme une re-creation, suivant le meme processus que la creation initiale. Nunshizu ici est l'acte inverse de la mort — il refait ce que la mort a defait.",
            axe5_frequence: "Nunshizu dans ce sens precis (dresser les os, reconstituer le squelette) est unique a ce verset dans le Coran — une hapax legomenon de la resurrection anatomique. Cette rarete souligne la specificite du miracle decrit ici : une demonstration visuelle, progressive et participative de la puissance divine sur la mort. Le personnage ne recoit pas seulement une assurance verbale — il voit le processus se derouler devant lui."
          },
          "Elevation/Soulevement": {
            status: "probable",
            senses: [
              "lever vers le haut, soulever",
              "nsh = elevation, soulevement physique"
            ],
            proof_ctx: "Lane's Lexicon: la racine nshz partage avec nshr et nsha le sens d'elevation et de soulevement vers le haut.",
            axe1_verset: "L'elevation vers le haut est incluse dans le sens de dresser les os — les os se levent, s'elevent pour former le squelette. Mais 'dresser' capture mieux l'image de l'ossature qui se remet debout.",
            axe2_voisins: "La sequence avec naksuha lahman (les revetir de chair) confirme que le sens est de mettre les os en position verticale et articulee — pas seulement de les soulever.",
            axe3_sourate: "Le sens d'elevation est present en arriere-plan mais 'dresser' est plus adequat pour l'image anatomique concrete.",
            axe4_coherence: "Les deux sens sont etymologiquement proches mais 'dresser' (mettre debout, en position) est plus precis pour la reconstitution d'un squelette.",
            axe5_frequence: "Le sens unique de cette occurrence impose une interpretation contextuelle : les os se dressent en ossature coherente avant d'etre revetus de chair."
          }
        }
      }
    },
    {
      word_key: "ksw",
      position: 55,
      sense_chosen: "revetir, couvrir — la chair habille les os comme un vetement couvre un corps, image anatomique et metaphorique",
      analysis_axes: {
        sense_chosen: "revetir, couvrir — la chair habille les os comme un vetement couvre un corps, image anatomique et metaphorique",
        concept_chosen: "Revetement/Habillage",
        concepts: {
          "Revetement/Habillage": {
            status: "retenu",
            senses: [
              "habiller, vetir — mettre un vetement sur quelqu'un",
              "kasaa = couvrir d'une couche protectrice ou ornementale",
              "naksuha = Nous les revetons (causatif divin, la chair couvre l'ossature)",
              "le revetement comme image de la resurrection : les os habilles de chair"
            ],
            proof_ctx: "Lane's Lexicon: k-s-w = to clothe, to dress, to put a garment on someone; kasaa = to clothe, to cover with a garment; naksuha = we clothe them, we cover them. The image of clothing (kiswa) applied to the resurrection: the flesh clothes the bones as a garment clothes a body.",
            axe1_verset: "Thumma naksuha lahman = puis Nous les revetons de chair. Le verbe kasaa (revetir) donne a la chair le statut d'un vetement qui habille l'ossature — image coherente avec la vision anatomique : la chair et la peau habillent le squelette comme un vetement habille un corps. C'est une metaphore anatomique precise et poetique a la fois. La chair n'est pas simplement ajoutee aux os — elle les revett, les couvre, leur donne leur forme et leur protection.",
            axe2_voisins: "La sequence nunshizu (pos=53 : dresser les os) → naksuha lahman (pos=55-56 : les revetir de chair) est la demonstration complete de la resurrection en deux temps. L'ossature se redresse (structure), puis la chair la revett (vie et forme). C'est l'image inverse de la mort : en mourant, la chair disparait et les os restent ; en ressuscitant, les os se dressent et la chair les recouvre. Cette sequence visible est la pedagogie divine que le personnage observe.",
            axe3_sourate: "L'image du revetement (kiswa) est presente dans le Coran dans plusieurs contextes : la kiswa de la Kaaba (vetement sacre de la maison de Dieu), le vetement comme couverture protectrice et honorifique, la taqwa (conscience divine) comme meilleur vetement (7:26). Dans al-Baqarah, l'image du revetement de chair est la plus concrete et la plus anatomiquement precise — elle ancre la resurrection dans le reel observable.",
            axe4_coherence: "La meme image est reprise en 23:14 (la creation de l'embryon : Nous avons cree les os, puis Nous avons revetu les os de chair). La creation et la resurrection suivent le meme schema dans le Coran : os d'abord, chair ensuite. La resurrection est presentee comme une re-creation selon le meme processus que la creation initiale. Naksuha ici est le miroir de fa-kasawna l-izama lahman de 23:14.",
            axe5_frequence: "Kasaa apparait environ 4-5 fois dans le Coran. L'image du vetement est tres presente dans le Coran : la taqwa comme vetement (7:26), les vetements de soie au paradis, le vetement comme signe de dignite et de protection. Le revetement de chair est donc une image naturelle dans ce reseau metaphorique — la chair est le vetement de l'ossature, et Dieu habille les os de resurrection comme Il habille les hommes de dignite."
          },
          "Don de vetement": {
            status: "peu_probable",
            senses: [
              "offrir un vetement comme cadeau",
              "kasaa fulan = habiller quelqu'un, lui donner des habits"
            ],
            proof_ctx: "Lane's Lexicon: kasaa peut signifier faire cadeau d'un vetement a quelqu'un dans un contexte de don.",
            axe1_verset: "Dans ce verset, naksuha lahman designe le revetement de chair sur les os — c'est une image anatomique concrete, pas un cadeau de tissu.",
            axe2_voisins: "Le contexte de la resurrection anatomique exclut tout sens de don materiel.",
            axe3_sourate: "Le sens de cadeau de vetement est possible dans d'autres contextes coraniques mais inapplicable ici.",
            axe4_coherence: "La coherence avec la sequence nunshizu (dresser les os) impose le sens de revetement anatomique.",
            axe5_frequence: "Dans ce contexte unique de resurrection anatomique, kasaa designe le revetement et non le don."
          }
        }
      }
    }
  ]
};

async function main() {
  console.log('=== PIPELINE S2 V259 ===');
  const data = verseData;

  // Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);

  if (veErr) { console.error('ERROR verse_analyses:', veErr.message); return; }
  console.log('verse_analyses updated (V259, id=' + data.analysis_id + ')');

  // Insert VWAs
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('  VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V259');
}
main().catch(console.error);
