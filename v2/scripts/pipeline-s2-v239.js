const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 239
// verse_id=246, analysis_id=603
// "fa-in khiftum fa-rijalan aw rukbanan
//  fa-idha amintum fadhkuru Llaha
//  kama 'allamakum ma lam takunu ta'lamuna"
// =====================================================

const verseData = {
  239: {
    verse_id: 246,
    analysis_id: 603,
    translation_arab: "Si vous craignez un danger, priez a pied ou a cheval. Lorsque vous etes en securite, rappelez Dieu comme Il vous a appris ce que vous ne saviez pas.",
    full_translation: "Si vous craignez [un danger], priez a pied ou a cheval. Lorsque vous serez en securite, rappelez Dieu comme Il vous a appris ce que vous ne saviez pas.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 239 est la suite directe du verset 238 sur la priere. Alors que le 238 etablissait l'obligation de preserver les prieres dans des conditions normales, le 239 legifere sur la priere en situation de danger ou de peur. C'est un verset de concession pragmatique : le danger ne dispense pas de la priere, il en allege les conditions d'execution. Le verset comporte deux temps forts — le temps du danger (khiftum) et le temps de la securite (amintum) — et deux obligations correspondantes : prier n'importe comment (rijalan aw rukbanan) puis rappeler Dieu avec reconnaissance.\n" +
"\n" +
"La racine **khwf** (kha-waw-fa) signifie la crainte et l'apprehension. Le Lane's donne : khafa = craindre, avoir peur, eprouver de l'apprehension — khawf = la peur, la crainte. Khiftum = vous avez craint / vous craignez (parfait 2MP). La crainte (khawf) dans le Coran designe a la fois la peur physique du danger et la crainte reverencielle de Dieu. Ici il s'agit de la peur physique — la menace d'un ennemi ou d'un peril.\n" +
"\n" +
"La racine **rjl** (ra-jim-lam) signifie l'homme, le pied, le fait de marcher. Le Lane's donne : rajul = homme adulte, rijal = hommes (pluriel) — rijalan (accusatif) = en tant qu'hommes a pied / en marchant. Dans ce contexte, rijalan designe la priere accomplie a pied, en marchant, sans la posture complete de la priere rituelle. Le rajul (homme) et la rijl (jambe/pied) partagent la meme racine — rijalan evoque la mobilite pedestrienne.\n" +
"\n" +
"La racine **rkb** (ra-kaf-ba) signifie monter, chevaucher, etre en selle. Le Lane's donne : rakiba = monter (un cheval, un chameau), rukban = ceux qui chevauchent (pluriel de rakib) — rukbanan = en etant a cheval / en chevauchant. La priere a cheval est une concession pour ceux qui ne peuvent s'arreter — ils prient dans la direction ou ils font face, avec des gestes simplifies.\n" +
"\n" +
"La racine **amn** (alif-mim-nun) signifie la securite et la foi. Le Lane's donne : amina = etre en securite, etre tranquille — amintum = vous etes en securite (parfait 2MP). La racine amn est fondamentale dans le Coran — elle couvre a la fois la securite physique (aman) et la foi (iman). Amintum ici signifie 'quand vous serez en securite', revenant de l'etat de peur (khawf) a l'etat de tranquillite (aman).\n" +
"\n" +
"La racine **dhkr** (dhal-kaf-ra) signifie rappeler, mentionner, evoquer. Le Lane's donne : dhakara = rappeler, mentionner — udhkuru = rappelez, mentionnez (imperatif 2MP). Fadhkuru Llaha = rappelez Dieu / mentionnez Dieu. Le dhikr (rappel/mention) est l'acte central de la vie spirituelle — rappeler Dieu apres le danger est a la fois un retour a la priere complete et un acte de gratitude pour la securite retrouvee.\n" +
"\n" +
"La racine **elm** ('ain-lam-mim) signifie savoir, connaitre, enseigner. Le Lane's donne : 'alima = savoir, connaitre — 'allama = enseigner (forme II intensive) — 'allamakum = Il vous a enseignes / Il vous a appris. Kama 'allamakum = comme Il vous a appris. Dieu est le Maitre qui enseigne — la priere, le dhikr, le Coran — tout ce que les hommes ne savaient pas avant la Revelation.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Si vous craignez** — fa-in khiftum : khiftum (vous avez craint, parfait 2MP de khafa) introduit la condition du danger. La conjonction fa-in (si alors) ouvre la logique conditionnelle du verset. La peur (khawf) est la condition qui justifie l'allegement des formes de la priere — non l'abandon, mais l'adaptation. L'islam juridique a developpe la priere de la peur (salat al-khawf) a partir de ce verset.\n" +
"\n" +
"**priez a pied ou a cheval** — fa-rijalan aw rukbanan : rijalan (a pied, accusatif de rijal/rajul) et rukbanan (a cheval, accusatif de rukban) sont deux adverbes de maniere indiquant la posture de la priere en situation de danger. La conjonction aw (ou) indique une alternative — selon les circonstances, en marchant ou en chevauchant. L'essentiel est que la priere soit accomplie — dans sa forme allegee.\n" +
"\n" +
"**Lorsque vous serez en securite** — fa-idha amintum : amintum (vous etes en securite, parfait 2MP de amina) marque le retour de l'etat de peur a l'etat de tranquillite. La construction fa-idha (et quand) introduit la consequence : le retour a la normale exige le retour a la priere complete et au rappel de Dieu. L'aman (securite) est le retour aux conditions ordinaires de la vie spirituelle.\n" +
"\n" +
"**rappelez Dieu** — fadhkuru Llaha : udhkuru (rappelez, mentionnez, imperatif 2MP de dhakara) avec le nom Llaha (Dieu) designe le dhikr — le rappel actif de Dieu. Ce rappel inclut la reprise de la priere complete, la gratitude pour la securite retrouvee et la remise de la relation avec Dieu au centre. Le dhikr est plus large que la priere formelle — c'est l'orientation permanente vers Dieu.\n" +
"\n" +
"**comme Il vous a appris** — kama 'allamakum : 'allamakum (Il vous a enseignes, parfait 3MS de 'allama) avec kama (comme/ainsi que) etablit le modele de ce rappel. Dieu est le Maitre qui a enseigne aux hommes la priere, le Coran, les rites. Le rappel de Dieu doit se faire selon la maniere dont Il l'a enseigne — non selon des invocations improvisees mais selon la revelation transmise.\n" +
"\n" +
"**ce que vous ne saviez pas** — ma lam takunu ta'lamuna : la'lamuna (vous saviez, imperfectif 2MP de 'alima) avec la negation lam et ma lam takunu designe tout ce que les hommes ignoraient avant la Revelation. Le Coran et la priere sont un enseignement divin qui comble l'ignorance humaine — le rappel de Dieu est un retour a cet enseignement.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'khiftum' par 'vous craignez'. La racine khwf (khafa = craindre) est bien rendue. 'Si vous craignez' (present) plutot que 'si vous avez craint' (parfait) est une traduction interpretative valide — le parfait arabe a valeur conditionnelle en contexte de si/in.\n" +
"\n" +
"Hamidullah traduit 'rijalan aw rukbanan' par 'a pied ou a cheval'. C'est la traduction la plus simple et la plus directe — rijalan (en tant qu'hommes a pied/pedons) et rukbanan (en tant que cavaliers). La formulation 'a pied ou a cheval' estompe la dimension de priere dans le mouvement (on prie en marchant ou en chevauchant) mais elle est suffisamment claire pour la comprehension generale.\n" +
"\n" +
"Hamidullah traduit 'fadhkuru Llaha' par 'rappelez Dieu'. La racine dhkr (dhakara = rappeler/mentionner) est bien rendue par 'rappeler'. Cependant, 'rappelez Dieu' peut etre compris comme un simple rappel memoriel alors que le dhikr est un acte actif de mention et d'evocation — 'mentionnez Dieu' ou 'evoquez Dieu' serait tout aussi valide et rendrait mieux la dimension sonore et active du dhikr.",
    segments: [
      { fr: "Si vous craignez", pos: "verbe", phon: "fa-in khiftum", arabic: "فَإِنْ خِفْتُمْ", word_key: "khwf", is_particle: false, sense_retenu: "crainte/apprehension", position: 1 },
      { fr: "a pied", pos: "nom", phon: "fa-rijalan", arabic: "فَرِجَالًا", word_key: "rjl", is_particle: false, sense_retenu: "homme a pied/pieton", position: 2 },
      { fr: "ou a cheval", pos: "nom", phon: "aw rukbanan", arabic: "أَوْ رُكْبَانًا", word_key: "rkb", is_particle: false, sense_retenu: "monture/cavalier", position: 3 },
      { fr: "Lorsque vous serez en securite", pos: "verbe", phon: "fa-idha amintum", arabic: "فَإِذَآ أَمِنتُمْ", word_key: "amn", is_particle: false, sense_retenu: "securite/foi", position: 4 },
      { fr: "rappelez Dieu", pos: "verbe", phon: "fadhkuru Llaha", arabic: "فَٱذْكُرُوا۟ ٱللَّهَ", word_key: "dhkr", is_particle: false, sense_retenu: "rappel/mention", position: 5 },
      { fr: "comme Il vous a appris", pos: "verbe", phon: "kama 'allamakum", arabic: "كَمَا عَلَّمَكُم", word_key: "elm", is_particle: false, sense_retenu: "savoir/enseignement", position: 6 },
      { fr: "ce que vous ne saviez pas", pos: "particule", phon: "ma lam takunu ta'lamuna", arabic: "مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ", is_particle: true, position: 7 }
    ],
    vwa: [
      {
        word_key: "khwf",
        position: 2,
        sense_chosen: "Crainte/Apprehension",
        analysis_axes: {
          sense_chosen: "Crainte/Apprehension",
          concept_chosen: "Crainte/Apprehension",
          concepts: {
            "Crainte/Apprehension": {
              status: "retenu",
              senses: ["craindre", "avoir peur", "ressentir la crainte", "khafa = il craignit", "khiftum = vous avez craint"],
              proof_ctx: "fa-in khiftum fa-rijalan aw rukbanan = si vous craignez (un danger), (priez) a pied ou a cheval",
              axe1_verset: "Khiftum (vous avez craint / vous craignez, parfait 2MP de khafa) introduit la condition du verset — la peur comme facteur qui allegit la forme de la priere mais ne la supprime pas. La condition fa-in khiftum (si vous craignez) ouvre la regle de la priere de la peur (salat al-khawf). Le parfait arabe en contexte conditionnel a valeur de present ou de futur.",
              axe2_voisins: "Khiftum est le premier element conditionnel du verset — il est suivi immediatement de la reponse (rijalan aw rukbanan = a pied ou a cheval). La rapidite de la reponse apres la condition montre l'urgence : en cas de peur, la priere s'adapte immediatement. Puis fa-idha amintum (quand vous serez en securite) marque le retour au normal — khawf et aman forment le couple antinomique du verset.",
              axe3_sourate: "Dans S2, khwf apparait aussi en v.38 (pas de peur pour ceux qui suivent la guidance), v.62 (pas de peur pour les croyants), v.112, v.150, v.262, v.274. La peur (khawf) dans S2 est souvent niee pour les croyants dans la vie eternelle — 'la khawfun 'alayhim' (pas de peur sur eux). Ici en v.239, khawf designe la peur physique du danger immediat qui justifie l'allegement de la priere.",
              axe4_coherence: "Le sens Crainte/Apprehension est coherent avec le contexte legislatif : le v.238 etablissait la priere en conditions normales, le v.239 la regle en conditions de danger. La peur (khawf) est le pivot du verset — elle justifie la concession (rijalan/rukbanan) et son absence (aman) signale le retour a l'obligation pleine. La coherence est dans la logique juridique : l'obstacle legitime l'allegement, sa levee retablit l'obligation.",
              axe5_frequence: "La racine khwf est frequente dans le Coran — khawf (la peur) aparait dans de nombreux versets. Le couple khawf/aman (peur/securite) est un motif coranique frequent : S2:239, S4:101, S106:4. La peur physique (khawf min al-'aduw = peur de l'ennemi) et la peur de Dieu (khashya/khawf de Dieu) sont soigneusement distinguees par le contexte. Ici il s'agit de la peur physique du danger."
            }
          }
        }
      },
      {
        word_key: "rjl",
        position: 3,
        sense_chosen: "Homme a pied/Pieton",
        analysis_axes: {
          sense_chosen: "Homme a pied/Pieton",
          concept_chosen: "Homme a pied/Pieton",
          concepts: {
            "Homme a pied/Pieton": {
              status: "retenu",
              senses: ["hommes a pied", "fantassin", "pieton", "rijalan = en marchant sur ses jambes", "pluriel de rajul = homme"],
              proof_ctx: "fa-rijalan aw rukbanan = a pied ou a cheval (maniere de prier en situation de danger)",
              axe1_verset: "Rijalan (accusatif, a pied / en tant que pedons) est un adverbe de maniere indiquant la posture de la priere lors du danger. Il designe la priere accomplie debout, en marchant, sans les prosternations habituelles — une priere simplifiee en mouvement. Rijalan vient de rajul (homme) et rijl (jambe/pied) — l'homme qui se tient et marche sur ses jambes, oppose au cavalier (rakib).",
              axe2_voisins: "Rijalan et rukbanan (a pied et a cheval) sont les deux alternatives de la priere de peur — soit on prie en marchant, soit en chevauchant. La conjonction aw (ou) laisse le choix selon la situation. La priere 'a pied' (rijalan) est mentionnee en premier — c'est la forme la moins eloignee de la priere normale puisqu'on est toujours au sol, meme en mouvement.",
              axe3_sourate: "Dans S2, rjl n'apparait pas dans d'autres versets de facon significative. Mais rajul/rijal (homme/hommes) est une racine fondamentale du vocabulaire coranique. Ici rijalan est utilise dans un sens technique et specifique — la priere pedetrique, a pied — ce qui en fait une occurrence unique dans le registre liturgique de S2.",
              axe4_coherence: "Le sens Homme a pied/Pieton est coherent avec le contexte de la priere de peur : la priere 'rijalan' (a pied/en marchant) est une priere allegee pour celui qui ne peut s'arreter pour accomplir les postures normales. La coherence est dans la logique de simplification : danger -> allegement -> priere a pied ou a cheval -> maintien de l'essentiel (la connexion avec Dieu) malgre la forme allegee.",
              axe5_frequence: "La racine rjl (homme/pied/marche) est presente dans le Coran principalement au sens d'homme (rajul/rijal). L'usage de rijalan pour designer la priere a pied est specifique et technique — il n'apparait qu'ici dans le Coran dans ce sens liturgique. La forme rijalan (adverbe de maniere) est moins frequente que la forme nominale rijal (hommes)."
            }
          }
        }
      },
      {
        word_key: "rkb",
        position: 5,
        sense_chosen: "Monture/Cavalier",
        analysis_axes: {
          sense_chosen: "Monture/Cavalier",
          concept_chosen: "Monture/Cavalier",
          concepts: {
            "Monture/Cavalier": {
              status: "retenu",
              senses: ["monter", "chevaucher", "etre a cheval", "rukbanan = ceux qui chevauchent", "rakib = cavalier"],
              proof_ctx: "aw rukbanan = ou a cheval (priere accomplie en chevauchant lors du danger)",
              axe1_verset: "Rukbanan (a cheval, en chevauchant, accusatif pluriel de rakib) est le deuxieme adverbe de maniere pour la priere de peur. Il designe la priere accomplie sur une monture — cheval, chameau — sans descendre ni s'arreter. La jurisprudence islamique a elabore les regles de cette priere : on fait face a la direction qu'on suit, on incline la tete pour la ruku' et la sujud.",
              axe2_voisins: "Rukbanan fait pendant a rijalan — les deux ensemble couvrent toutes les situations du combattant ou du fuyard en danger : a pied ou a cheval. La mention 'aw' (ou) donne une alternative, non une hierarchie — les deux sont valides selon la situation. Rukbanan (a cheval) est mentionne en second car c'est la forme la plus eloignee de la priere normale, la plus allegee.",
              axe3_sourate: "Dans S2, rkb n'apparait qu'ici. Mais la racine rkb est presente dans d'autres sourates : S16:8 (les chevaux, les mulets, les anes pour que vous les montiez), S43:12-13 (Il vous a cree des paires et vous a donne des montures). La monture (rakuba/markab) est un moyen de deplacement — ici integree dans le dispositif de la priere de peur comme outil de maintien de l'obligation priante.",
              axe4_coherence: "Le sens Monture/Cavalier est coherent avec le contexte martial et de deplacement du verset : la priere rukbanan (a cheval) est la priere du combattant ou du voyageur en danger qui ne peut s'arreter. La coherence est dans la logique islamique de facilitation (taysir) : meme dans les conditions les plus difficiles, la priere est maintenue dans sa forme la plus adaptee aux circonstances.",
              axe5_frequence: "La racine rkb (monter/chevaucher) est presente dans plusieurs versets coraniques sur les montures et les moyens de transport. La forme rukbanan (en chevauchant) est specifique a ce verset et n'apparait qu'ici dans le Coran dans ce sens liturgique de priere a cheval. C'est un terme technique du fiqh de la priere de peur (salat al-khawf) qui tire son autorite de ce verset unique."
            }
          }
        }
      },
      {
        word_key: "amn",
        position: 8,
        sense_chosen: "Securite/Foi",
        analysis_axes: {
          sense_chosen: "Securite/Foi",
          concept_chosen: "Securite/Foi",
          concepts: {
            "Securite/Foi": {
              status: "retenu",
              senses: ["etre en securite", "etre tranquille", "foi", "iman", "amintum = vous etes en securite"],
              proof_ctx: "fa-idha amintum fadhkuru Llaha = quand vous serez en securite, rappelez Dieu",
              axe1_verset: "Amintum (vous etes en securite / vous etes tranquilles, parfait 2MP de amina) marque le retour de l'etat de danger a l'etat de tranquillite. La construction fa-idha amintum (et quand vous serez en securite) introduit la consequence : le retour a la priere complete et au dhikr. Amana/amina designe a la fois etre en securite (physique) et avoir la foi (spirituelle) — les deux sens sont presents dans la racine.",
              axe2_voisins: "Amintum fait contraste avec khiftum (vous avez craint) — les deux parfaits conditionnels structurent le verset en deux temps : danger (khawf) puis securite (aman). Le retour a l'aman declenche l'obligation du dhikr — rappelez Dieu. La securite retrouvee est une occasion de gratitude et de retour a la priere complete, non un pretexte a la relache spirituelle.",
              axe3_sourate: "Dans S2, amn est fondamental — iman (foi) et mu'minun (croyants) apparaissent des les premiers versets (v.3, v.6, v.8, etc.). La racine amn couvre a la fois la foi (iman = croyance en Dieu) et la securite (aman = absence de peur). Ces deux sens sont lies etymologiquement — la foi procure la securite interieure, la securite physique permet l'exercice de la foi. En v.239, amintum signifie principalement la securite physique.",
              axe4_coherence: "Le sens Securite/Foi est coherent avec la structure du verset : khawf (peur) -> allegement de la priere -> aman (securite) -> retour au dhikr complet. La securite est la condition du retour a l'obligation priante dans sa forme pleine. La coherence est dans la logique de cause a effet : le danger justifie la forme allegee, la securite retablit la forme complete.",
              axe5_frequence: "La racine amn est l'une des plus frequentes et des plus importantes du Coran — iman (foi), mu'min (croyant), aman (securite), amanah (confiance/depot). Les formes verbales amina/amintum designent aussi bien la foi en Dieu que la securite physique selon le contexte. La polyvalence semantique de amn (securite/foi) est unique dans le vocabulaire coranique."
            }
          }
        }
      },
      {
        word_key: "dhkr",
        position: 9,
        sense_chosen: "Rappel/Mention",
        analysis_axes: {
          sense_chosen: "Rappel/Mention",
          concept_chosen: "Rappel/Mention",
          concepts: {
            "Rappel/Mention": {
              status: "retenu",
              senses: ["rappeler", "evoquer", "mentionner Dieu", "udhkuru = rappelez/mentionnez", "dhikr = le rappel"],
              proof_ctx: "fadhkuru Llaha kama 'allamakum = rappelez Dieu comme Il vous a appris",
              axe1_verset: "Fadhkuru (rappelez, mentionnez, imperatif 2MP de dhakara) avec Llaha (Dieu) constitue la prescription centrale apres le retour a la securite. Le dhikr (rappel/mention de Dieu) est l'acte spiritual primordial — reciter les noms de Dieu, prier, louer, remercier. La securite retrouvee doit immediatement engendrer le retour au dhikr — comme expression de gratitude et de retour a la relation spirituelle normale.",
              axe2_voisins: "Fadhkuru Llaha est suivi de kama 'allamakum (comme Il vous a appris) — le dhikr doit etre accompli selon l'enseignement divin, non selon l'improvisation. Le dhikr kama 'allamakum designe le retour a la priere dans ses formes enseignees par la revelation. Le verbe dhakara en contexte de priere inclut la priere formelle (salat) mais la depasse — c'est l'orientation de tout l'etre vers Dieu.",
              axe3_sourate: "Dans S2, dhkr apparait en v.152 (fadhkuruni adhkurkum = rappelez-Moi, Je vous rappellerai), v.198 (dhikr Dieu a 'Arafat), v.200 (dhikr apres les rites), v.239. Le dhikr est un commandement central de S2 — il designe a la fois la priere formelle et le rappel permanent de Dieu dans toutes les circonstances. V.152 etablit la reciprocite divine : le dhikr humain repond au dhikr divin.",
              axe4_coherence: "Le sens Rappel/Mention est coherent avec la finalite du verset : la priere allegee du danger (rijalan/rukbanan) doit ceder la place au dhikr complet (fadhkuru Llaha) des que la securite est retrouvee. La coherence est dans la progression : allegement justifie -> fin du danger -> retour au dhikr plein. Le dhikr est ce a quoi revient tout allegement — la norme vers laquelle tendre.",
              axe5_frequence: "La racine dhkr est l'une des plus frequentes du Coran — dhikr Allah (rappel de Dieu) est un commandement repete dans de nombreuses sourates. Le dhikr comme pratique spirituelle (repetition des noms de Dieu, recitation du Coran, salat) est fondamental dans la spiritualite islamique. La forme udhkuru/fadhkuru (rappelez) est un imperatif frequent — en S2:152, S2:198, S2:200, S2:239."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 11,
        sense_chosen: "Savoir/Enseignement",
        analysis_axes: {
          sense_chosen: "Savoir/Enseignement",
          concept_chosen: "Savoir/Enseignement",
          concepts: {
            "Savoir/Enseignement": {
              status: "retenu",
              senses: ["enseigner", "savoir", "'allamakum = Il vous a enseignes", "'alima = savoir", "'allama = enseigner (forme intensive)"],
              proof_ctx: "kama 'allamakum ma lam takunu ta'lamuna = comme Il vous a appris ce que vous ne saviez pas",
              axe1_verset: "'Allamakum (Il vous a enseignes, parfait 3MS de la forme II 'allama) avec kama (comme/ainsi que) etablit Dieu comme le Maitre enseignant. La forme II ('allama vs 'alima) designe un enseignement actif et intensif — Dieu n'a pas seulement su, Il a activement transmis la connaissance. Ma lam takunu ta'lamuna (ce que vous ne saviez pas) designe tout le domaine de l'ignorance humaine que la Revelation a eclaire.",
              axe2_voisins: "Kama 'allamakum designe le modele du dhikr — rappeler Dieu selon la facon dont Il a enseigne, non selon des innovations personnelles. L'enseignement divin ('ilm) est le referentiel de l'acte de rappel. La clotore 'ma lam takunu ta'lamuna' (ce que vous ne saviez pas) souligne la dette spirituelle des croyants envers Dieu — Il a enseigne ce que l'ignorance humaine ne pouvait atteindre seule.",
              axe3_sourate: "Dans S2, elm est fondamental — 'alima/ta'lamun/ya'lamun aparaissent des les premiers versets. En v.31, Dieu enseigne a Adam les noms (wa 'allama Adam al-asma'a). En v.151, 'allamakum ma lam takunu ta'lamun aparait aussi — presque identique a v.239. La transmission du savoir de Dieu a l'homme est un theme fondateur de S2 : l'enseignement divin commence avec Adam et continue avec le Prophete.",
              axe4_coherence: "Le sens Savoir/Enseignement est coherent avec la finalite du verset : le dhikr (rappel de Dieu) doit etre accompli kama 'allamakum (comme Dieu l'a enseigne) — c'est-a-dire selon la revelation, selon la sunna, selon les formes de priere transmises. La coherence est dans la logique de l'autorite de l'enseignement divin sur la pratique spirituelle humaine.",
              axe5_frequence: "La racine elm ('ilm = savoir, connaissance) est l'une des plus frequentes du Coran — 'ilm (science/savoir), 'alim (savant), 'allama (enseigner) aparaissent des centaines de fois. Allah est Al-'Alim (le Tres-Savant), un de Ses 99 Noms. La forme 'allamakum (Il vous a enseignes) est specifique a la relation pedagogique Dieu-hommes — le meme syntagme aparait en S2:151 ('allamakum ma lam takunu ta'lamun) presque identique a v.239."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[239];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V239)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('V239 TERMINE');
}
main().catch(console.error);
