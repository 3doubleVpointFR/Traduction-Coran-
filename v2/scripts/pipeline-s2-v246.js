const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  246: {
    verse_id: 253,
    analysis_id: 614,
    translation_arab: "alam tara ila l-mala'i min bani isra'ila min ba'di musa idh qaloo li-nabiyyin lahum ib'ath lana malikan nuqatil fi sabili llahi qala hal 'asaytum in kutiba 'alaykum l-qitalu alla tuqatiloo qaloo wa ma lana alla nuqatila fi sabili llahi wa qad ukhrijna min diyarina wa abna'ina fa-lamma kutiba 'alayhim l-qitalu tawallaw illa qalilan minhum wa-llahu 'alimun bi-l-zalimin",
    full_translation: "N'as-tu pas vu les notables des Banu Israïl après Moïse, quand ils dirent à un prophète parmi eux : 'Envoie-nous un roi, que nous combattions dans la voie d'Allah.' Il dit : 'N'est-ce pas que si le combat vous était prescrit, vous refuseriez de combattre ?' Ils dirent : 'Et pourquoi ne combattrions-nous pas dans la voie d'Allah, alors que nous avons été chassés de nos demeures et séparés de nos fils ?' Mais quand le combat leur fut prescrit, ils se détournèrent, à l'exception d'un petit nombre d'entre eux. Allah connaît parfaitement les injustes.",
    translation_explanation: `§DEMARCHE§
Le verset 2:246 est l'un des versets narratifs les plus denses de la sourate Al-Baqara. Il introduit un récit historique sur les Banu Israïl après Moïse, fonctionnant comme un miroir adressé aux premiers destinataires musulmans qui venaient d'entendre l'appel au combat (v.244-245). La démarche traductive doit rendre plusieurs registres simultanés : le registre narratif (introduction du récit, identification des acteurs), le registre dialogique (deux échanges directs entre les notables et le prophète), et le registre évaluatif (la conclusion divine sur les injustes).

La première difficulté est l'expression alam tara (n'as-tu pas vu) : il s'agit d'une interpellation rhétorique au Prophète Muhammad, invitant à une vision intellectuelle et spirituelle d'un événement passé, non à une vision physique. Tara (racine r-y) est traduit par "n'as-tu pas vu" mais dans le sens de "ne t'es-tu pas rendu compte / n'as-tu pas pris conscience" — la vision est ici celle de la leçon historique.

La deuxième difficulté est al-mala' (les notables) : mot difficile à rendre en français. Al-mala' désigne littéralement "ceux qui remplissent" — c'est-à-dire les personnages imposants qui remplissent les yeux par leur prestige et leur stature sociale. "Notables" est le terme français le plus proche, mais il faut comprendre qu'il s'agit des chefs, des grands de la tribu, ceux qui ont une autorité sociale reconnue.

La troisième difficulté est ib'ath lana malikan (envoie-nous un roi) : le verbe ba'atha (Form I impératif) signifie "envoie, suscite, fais partir en mission". Il ne s'agit pas seulement de désigner quelqu'un mais de l'envoyer avec une mission précise. Malik (roi) désigne celui qui possède l'autorité souveraine — différent de khalifa (successeur) ou amir (chef militaire).

La quatrième difficulté est hal 'asaytum (n'est-ce pas que vous allez peut-être) : formule de doute prophétique exprimant une crainte ou une supposition. 'Asa = avoir à peine confiance, douter que. Le prophète ne les accuse pas directement mais exprime sa méfiance devant leur enthousiasme verbal.

La cinquième difficulté est fa-lamma kutiba 'alayhim l-qitalu tawallaw (quand le combat leur fut prescrit, ils se détournèrent) : le contraste entre le discours courageux (pourquoi ne combattrions-nous pas ?) et l'action lâche (ils se détournèrent) est le coeur moral du verset. Tawallaw (Form V de w-l-y) = se détourner, tourner le dos — c'est plus fort qu'une simple hésitation, c'est un acte de reniement.

La conclusion wa-llahu 'alimun bi-l-zalimin (Allah est Celui qui connaît parfaitement les injustes) ne dit pas "Il les punira" mais "Il connaît" — ce qui est peut-être plus grave : les injustes ne peuvent pas se cacher de la Science divine. Zalimun ici ne désigne pas seulement ceux qui ont refusé de combattre mais plus largement tous ceux qui manquent à leurs engagements — c'est un avertissement ouvert au destinataire du verset.
§JUSTIFICATION§
"N'as-tu pas vu" est préféré à "N'as-tu pas considéré" (Hamidullah) car le verbe ra'a implique d'abord la vision avant l'analyse intellectuelle. "Les notables" est préféré à "les chefs" ou "les grands" car il capture mieux la dimension sociale de al-mala' — ce sont des hommes reconnus publiquement, pas seulement des chefs militaires. "Envoie-nous un roi" est direct et précis pour ib'ath lana malikan — le verbe ba'atha étant rendu par son sens de mission/envoi. "N'est-ce pas que si le combat vous était prescrit, vous refuseriez ?" rend hal 'asaytum in kutiba 'alaykum al-qitalu alla tuqatiloo — la tournure interrogative indirecte avec alla (que... ne pas) est préservée dans la traduction pour garder le ton de doute bienveillant du prophète. "Ils se détournèrent" pour tawallaw est préféré à "ils reculèrent" car tawallaw implique un mouvement actif de l'arrière-plan moral : on tourne le dos, on se détourne — c'est un choix délibéré, pas une faiblesse involontaire. "Allah connaît parfaitement les injustes" — l'adverbe "parfaitement" est justifié par le caractère intensif du nom 'alim (très savant, omniscient) dans le contexte divin.
§CRITIQUE§
La traduction de Hamidullah rend ce verset ainsi : "N'as-tu pas considéré les notables des enfants d'Israël après Moïse, quand ils dirent à un de leurs prophètes : 'Établis-nous un roi et nous combattrons dans le chemin de Dieu.' Il dit : 'N'est-il pas à craindre que si le combat vous était prescrit, vous ne combattiez point ?' Ils dirent : 'Pourquoi ne combattrions-nous pas dans le chemin de Dieu, alors qu'on nous a chassés de nos foyers et de nos enfants ?' Puis quand le combat leur fut imposé, ils tournèrent le dos, sauf un petit nombre d'entre eux. Et Dieu connaît bien les injustes." Plusieurs points méritent discussion. Premièrement, "établis-nous un roi" pour ib'ath lana malikan est moins précis que "envoie-nous un roi" car ba'atha signifie envoyer/susciter en mission, non établir (qui serait nasaba ou ja'ala). Deuxièmement, "N'est-il pas à craindre que" est une paraphrase interprétative de hal 'asaytum — elle ajoute la notion de crainte qui n'est pas dans le texte. La formule originale est plus ouverte : "n'est-ce pas que vous allez peut-être...". Troisièmement, "de nos enfants" pour wa-abna'ina perd la nuance de séparation forcée — ukhrijna min diyarina wa-abna'ina signifie "chassés de nos demeures et (séparés) de nos fils", ce qui implique non seulement l'exil géographique mais l'arrachement familial. Notre traduction "séparés de nos fils" tente de rendre cette dimension supplémentaire. Quatrièmement, "ils tournèrent le dos" chez Hamidullah est proche de notre "ils se détournèrent" — les deux sont acceptables pour tawallaw.`,
    segments: [
      { position: 1, text_arab: "أَلَمْ تَرَ", translation: "N'as-tu pas vu", phonetic: "alam tara", grammar_type: "particle" },
      { position: 2, text_arab: "إِلَى ٱلْمَلَإِ", translation: "les notables", phonetic: "ila l-mala'i", grammar_type: "noun", root_key: "mla" },
      { position: 3, text_arab: "مِنۢ بَنِىٓ إِسْرَٰٓءِيلَ", translation: "des Banu Israïl", phonetic: "min bani isra'ila", grammar_type: "particle" },
      { position: 4, text_arab: "مِنۢ بَعْدِ مُوسَىٰٓ", translation: "après Moïse", phonetic: "min ba'di musa", grammar_type: "particle" },
      { position: 5, text_arab: "إِذْ قَالُوا۟", translation: "quand ils dirent", phonetic: "idh qaloo", grammar_type: "particle" },
      { position: 6, text_arab: "لِنَبِىٍّ لَّهُمُ", translation: "à un prophète parmi eux", phonetic: "li-nabiyyin lahum", grammar_type: "noun", root_key: "nba" },
      { position: 7, text_arab: "ٱبْعَثْ لَنَا", translation: "envoie-nous", phonetic: "ib'ath lana", grammar_type: "verb", root_key: "beth" },
      { position: 8, text_arab: "مَلِكًا", translation: "un roi", phonetic: "malikan", grammar_type: "noun", root_key: "mlk" },
      { position: 9, text_arab: "نُّقَـٰتِلْ فِى سَبِيلِ ٱللَّهِ", translation: "que nous combattions dans la voie d'Allah", phonetic: "nuqatil fi sabili llahi", grammar_type: "verb", root_key: "qtl" },
      { position: 10, text_arab: "ۖ", translation: "—", phonetic: "", grammar_type: "particle" },
      { position: 11, text_arab: "قَالَ هَلْ عَسَيْتُمْ", translation: "Il dit : N'est-ce pas que vous allez peut-être", phonetic: "qala hal 'asaytum", grammar_type: "particle" },
      { position: 12, text_arab: "إِن كُتِبَ عَلَيْكُمُ ٱلْقِتَالُ", translation: "si le combat vous était prescrit", phonetic: "in kutiba 'alaykum l-qitalu", grammar_type: "particle" },
      { position: 13, text_arab: "أَلَّا تُقَـٰتِلُوا۟", translation: "que vous refusiez de combattre", phonetic: "alla tuqatiloo", grammar_type: "particle" },
      { position: 14, text_arab: "ۖ قَالُوا۟", translation: "Ils dirent", phonetic: "qaloo", grammar_type: "particle" },
      { position: 15, text_arab: "وَمَا لَنَآ أَلَّا نُقَـٰتِلَ", translation: "Et pourquoi ne combattrions-nous pas", phonetic: "wa ma lana alla nuqatila", grammar_type: "particle" },
      { position: 16, text_arab: "فِى سَبِيلِ ٱللَّهِ", translation: "dans la voie d'Allah", phonetic: "fi sabili llahi", grammar_type: "particle" },
      { position: 17, text_arab: "وَقَدْ أُخْرِجْنَا مِن دِيَـٰرِنَا", translation: "alors que nous avons été chassés de nos demeures", phonetic: "wa qad ukhrijna min diyarina", grammar_type: "particle" },
      { position: 18, text_arab: "وَأَبْنَآئِنَا", translation: "et séparés de nos fils", phonetic: "wa abna'ina", grammar_type: "particle" },
      { position: 19, text_arab: "ۚ فَلَمَّا كُتِبَ عَلَيْهِمُ ٱلْقِتَالُ", translation: "Mais quand le combat leur fut prescrit", phonetic: "fa-lamma kutiba 'alayhim l-qitalu", grammar_type: "particle" },
      { position: 20, text_arab: "تَوَلَّوْا۟", translation: "ils se détournèrent", phonetic: "tawallaw", grammar_type: "verb", root_key: "wly" },
      { position: 21, text_arab: "إِلَّا قَلِيلًا مِّنْهُمْ", translation: "à l'exception d'un petit nombre d'entre eux", phonetic: "illa qalilan minhum", grammar_type: "particle" },
      { position: 22, text_arab: "ۗ وَٱللَّهُ عَلِيمٌۢ", translation: "et Allah connaît parfaitement", phonetic: "wa-llahu 'alimun", grammar_type: "particle" },
      { position: 23, text_arab: "بِٱلظَّـٰلِمِينَ", translation: "les injustes", phonetic: "bi-l-zalimin", grammar_type: "noun", root_key: "zlm" }
    ],
    vwa: [
      {
        word_key: "mla",
        position: 4,
        sense_chosen: "les notables, l'assemblée des grands, ceux qui imposent par leur prestige",
        analysis_axes: {
          sense_chosen: "les notables, l'assemblée des grands, ceux qui imposent par leur prestige",
          concept_chosen: "Notables/Prestige",
          concepts: {
            "Notables/Prestige": {
              status: "retenu",
              senses: ["remplir (racine m-l-')", "mala' = les notables, les grands", "ceux qui remplissent les yeux par leur prestige", "l'assemblée des personnes influentes"],
              proof_ctx: "Lane's Lexicon: m-l-' = to fill; mala' = the assembly of chiefs, the nobles of a people, those who fill the eyes by their dignity and number; distinguished from common people by rank and authority.",
              axe1_verset: "Dans ce verset, al-mala' désigne les personnages les plus importants des Banu Israïl après Moïse — ceux qui ont une autorité sociale reconnue et qui peuvent s'adresser collectivement à un prophète pour faire une demande politique (un roi). Leur prise de parole collective est significative : c'est l'élite qui parle, non le peuple ordinaire — ce qui rend leur défaillance finale d'autant plus grave.",
              axe2_voisins: "Le fait que les notables s'adressent à un prophète (nabiyy) pour demander un roi (malik) révèle une tension politique et religieuse : ils reconnaissent l'autorité prophétique mais réclament une autorité royale séparée pour le combat. Ce schéma — élite politique qui cherche à contrôler l'action militaire en se dotant d'un chef temporel — est universellement reconnaissable et explique le scepticisme du prophète.",
              axe3_sourate: "Le terme al-mala' revient dans d'autres récits coraniques pour désigner les cours royales ou les assemblées dirigeantes qui s'opposent aux prophètes (v.7:60, v.7:75, v.11:38 concernant Noé et son peuple ; v.27:29 concernant la reine de Saba). Al-mala' est souvent du côté de la résistance au message prophétique, ce qui rend d'autant plus surprenant que ces notables demandent ici un roi pour combattre dans la voie d'Allah.",
              axe4_coherence: "Le choix du terme al-mala' (notables) plutôt qu'un terme plus général comme al-qawm (le peuple) ou al-rijal (les hommes) est théologiquement significatif. Ce sont les responsables qui portent la responsabilité des décisions collectives. Leur défaillance finale (ils se détournèrent) est donc une défaillance d'élite — d'autant plus condamnable que leur discours initial était courageux et que leur position sociale implique un devoir d'exemplarité.",
              axe5_frequence: "Al-mala' apparaît une trentaine de fois dans le Coran, toujours pour désigner des assemblées de notables ou de chefs. Dans les récits de prophètes (Noé, Houd, Salih, Shu'ayb, Moïse, Salomon), al-mala' est souvent la classe dirigeante qui s'oppose à la réforme. Ce pattern récurrent construit une sociologie coranique implicite : le pouvoir social tend à résister au message divin, sauf exception notable."
            }
          }
        }
      },
      {
        word_key: "nba",
        position: 13,
        sense_chosen: "prophète, porteur de nouvelles importantes venues du divin",
        analysis_axes: {
          sense_chosen: "prophète, porteur de nouvelles importantes venues du divin",
          concept_chosen: "Prophetie/Annonce",
          concepts: {
            "Prophetie/Annonce": {
              status: "retenu",
              senses: ["apporter une nouvelle importante (Form I)", "naba' = nouvelle grave, annonce", "nabiy = prophète, celui qui transmet les nouvelles divines", "certains rattachent à naba'a = nouvelle, d'autres à nabu'a = être élevé"],
              proof_ctx: "Lane's Lexicon: n-b-' = to bring news, to announce an important matter; naba' = an important piece of news; nabiy = a prophet, one who brings divine tidings. Some derive it from naba'a (to inform), others from naba'a meaning elevation, eminence.",
              axe1_verset: "Dans ce verset, le prophète (nabiyy) n'est pas nommé — le Coran ne précise pas son identité, laissant les exégètes proposer des noms (Samuel est souvent cité). Ce prophète anonyme joue un rôle de médiateur : il reçoit la demande des notables, exprime son scepticisme prophétique (il voit ce qu'ils ne voient pas encore — leur future défaillance), puis transmet la prescription divine du combat. Sa clairvoyance prophétique est confirmée par les événements.",
              axe2_voisins: "La formule li-nabiyyin lahum (à un prophète parmi eux) souligne l'appartenance communautaire du prophète — il est de leur peuple, ce qui rend sa position délicate : il connaît ses compatriotes, leurs forces et leurs faiblesses. Le tanvin (nabiyyin, indéfini) suggère que ce prophète n'est pas le plus connu — c'est un personnage secondaire dans l'histoire sainte mais dont le rôle est crucial dans ce récit.",
              axe3_sourate: "La sourate Al-Baqara est traversée par des récits sur les prophètes envoyés aux Banu Israïl (Moïse occupe une place centrale, v.49-73 ; v.87 mentionne d'autres prophètes envoyés à Israïl). Le prophète de ce verset s'inscrit dans cette longue chaîne de prophètes qui ont eu à faire face à l'inconstance de leur peuple. La sourate construit ainsi une histoire du manquement humain face aux injonctions divines.",
              axe4_coherence: "La nature prophétique de ce personnage explique sa réponse sibylline : hal 'asaytum (n'est-ce pas que vous allez peut-être...). Un prophète ne répond pas à une demande par un enthousiasme naïf mais par une vision pénétrante de la réalité humaine. Sa méfiance initiale est validée par la suite du récit — ce qui confirme que la clairvoyance prophétique est une compétence spirituelle, non une simple intuition.",
              axe5_frequence: "La racine n-b-' et ses dérivés (naba', nabiy, anbiya', nabbi'a) sont extrêmement fréquents dans le Coran. Le titre nabiy apparaît des dizaines de fois, toujours associé à la transmission d'un message divin important. La distinction entre nabiy (prophète) et rasul (envoyé/messager) est théologiquement débattue : tout rasul est nabiy mais tout nabiy n'est pas nécessairement rasul — le nabiy de ce verset est un prophète local sans être nécessairement un grand messager universel."
            }
          }
        }
      },
      {
        word_key: "beth",
        position: 15,
        sense_chosen: "envoyer en mission, susciter, faire partir avec une charge",
        analysis_axes: {
          sense_chosen: "envoyer en mission, susciter, faire partir avec une charge",
          concept_chosen: "Envoi/Mission",
          concepts: {
            "Envoi/Mission": {
              status: "retenu",
              senses: ["envoyer (Form I impératif)", "susciter, réveiller", "faire partir en mission", "ressusciter (sens eschatologique)"],
              proof_ctx: "Lane's Lexicon: b-'-th = to send, to dispatch on a mission; Form I ba'atha/yab'athu = to send someone forth; also to raise from the dead (eschatological). Ib'ath = imperative: send! dispatch! The verb implies purposeful sending with a specific mission.",
              axe1_verset: "Dans ce verset, ib'ath lana malikan (envoie-nous un roi) est un impératif adressé au prophète. Les notables demandent non pas d'être dirigés spirituellement mais d'être dotés d'un chef militaire. Le verbe ba'atha implique une mission précise, un envoi avec objectif — ce n'est pas une simple désignation mais une mobilisation. Ils veulent un roi envoyé-en-mission pour conduire le combat.",
              axe2_voisins: "L'impératif ib'ath contraste avec la passivité relative des notables : ils ne veulent pas agir eux-mêmes (choisir un roi, organiser le combat) mais demandent au prophète d'agir à leur place. Ce transfert de responsabilité sur le prophète est caractéristique d'une attitude qui préfère déléguer plutôt qu'assumer. Le prophète perçoit cette ambiguïté — d'où son scepticisme.",
              axe3_sourate: "La racine b-'-th apparaît dans plusieurs contextes dans Al-Baqara et le Coran en général. Ses sens couvrent : l'envoi des prophètes (ba'atha rasul = envoyer un messager), la résurrection (yawm al-ba'th = le Jour de la résurrection), et l'envoi en mission militaire ou diplomatique. La polysémie de la racine est riche : envoyer un homme en mission terrestre anticipe sémantiquement la résurrection comme envoi de l'âme vers la vie éternelle.",
              axe4_coherence: "Le fait que les notables demandent un roi (malik) via le prophète (nabiy) révèle une confusion entre les autorités spirituelle et politique. Dans la pensée coranique, le prophète est l'intermédiaire entre Allah et les hommes — mais les hommes lui demandent ici d'exercer une fonction politique (désigner un roi). Cette confusion des registres est l'une des sources du désordre qui suit, quand l'enthousiasme verbal ne se traduit pas en acte réel.",
              axe5_frequence: "La racine b-'-th est fondamentale dans le vocabulaire coranique de la mission prophétique et de la résurrection. Ses dérivés apparaissent des dizaines de fois. Le ba'th (envoi/résurrection) est l'un des cinq grands thèmes eschatologiques du Coran (avec le qiyama, le hashr, le hisab et le jaza'). La demande des notables d'ib'ath (envoie!) résonne donc avec toute cette sémantique de l'envoi divin — mais dans un registre purement terrestre et politique."
            }
          }
        }
      },
      {
        word_key: "mlk",
        position: 17,
        sense_chosen: "roi, souverain qui possède l'autorité et le commandement",
        analysis_axes: {
          sense_chosen: "roi, souverain qui possède l'autorité et le commandement",
          concept_chosen: "Royaute/Souverainete",
          concepts: {
            "Royaute/Souverainete": {
              status: "retenu",
              senses: ["posséder, régner (Form I)", "malik = roi, celui qui possède l'autorité", "mulk = la royauté, le règne", "mamlaka = royaume"],
              proof_ctx: "Lane's Lexicon: m-l-k = to possess, to have dominion over; malik = a king, a sovereign, one who holds supreme authority; mulk = dominion, sovereignty, kingship; distinct from khalifa (vicegerent) or amir (commander).",
              axe1_verset: "Dans ce verset, malikan (un roi, indéfini) est ce que les notables réclament pour pouvoir combattre. L'indétermination (tanvin) est significative : ils ne demandent pas un roi précis mais la fonction royale — un commandement militaire reconnu. Le roi dans ce contexte est d'abord un chef de guerre, un fédérateur capable de mobiliser les tribus. C'est une demande d'autorité institutionnelle pour l'action collective.",
              axe2_voisins: "La demande d'un roi (malik) suit directement l'impératif ib'ath (envoie). La logique est : sans roi, pas de combat coordonné ; sans combat coordonné, pas de victoire. Les notables pensent en termes d'organisation politique et militaire. Mais leur logique est inversée selon le prophète : ce n'est pas le roi qui garantit la victoire, c'est la foi et l'obéissance. La suite du récit (ils se détournèrent) confirme que l'institution royale ne suffit pas sans l'engagement personnel.",
              axe3_sourate: "La suite du récit dans la sourate (v.247-251) nommera ce roi : Talut (Saül selon la tradition biblique). La demande de roi par les Banu Israïl rappelle l'épisode biblique du Premier Livre de Samuel (ch.8-10) où le peuple demande un roi à Samuel. Le Coran reprend ce récit mais en le recentrant sur la dimension de la foi et de l'obéissance plutôt que sur l'aspect dynastique.",
              axe4_coherence: "La royauté (mulk) dans le Coran est une forme légitime d'autorité humaine déléguée par Allah — contrairement à la vision théocratique stricte qui n'admet que l'autorité prophétique. Mais le malik reste soumis à Allah et aux prophètes. Le roi Dawud (David) et le roi Sulayman (Salomon) sont des exemples coraniques de rois-prophètes qui combinent les deux autorités. La demande d'un roi séparé du prophète dans ce verset introduit donc une division qui peut être source de problèmes.",
              axe5_frequence: "La racine m-l-k est l'une des plus fréquentes et des plus importantes du Coran. Malik (Roi) est un attribut divin majeur (Allah est le Malik al-Mulk = le Roi de la royauté, v.3:26 ; le Malik al-Nas = le Roi des hommes, v.114:2). La royauté humaine, quand elle est mentionnée, est toujours relative à la royauté divine absolue d'Allah. La demande d'un roi humain dans ce verset s'inscrit donc dans une tension fondamentale entre autorité humaine et souveraineté divine."
            }
          }
        }
      },
      {
        word_key: "qtl",
        position: 18,
        sense_chosen: "combattre dans la voie d'Allah, prendre part au combat collectif",
        analysis_axes: {
          sense_chosen: "combattre dans la voie d'Allah, prendre part au combat collectif",
          concept_chosen: "Combat/Jihad",
          concepts: {
            "Combat/Jihad": {
              status: "retenu",
              senses: ["tuer (Form I)", "combattre mutuellement (Form III qatala)", "prendre part au combat (Form III)", "al-qital = le combat, la guerre"],
              proof_ctx: "Lane's Lexicon: q-t-l (Form I) = to kill; Form III qatala/yuqatilu = to fight against, to engage in mutual combat; fi sabili llahi = in the way of God = for a righteous religious cause. Al-qital = the fighting, the battle.",
              axe1_verset: "Dans ce verset, la racine q-t-l apparaît trois fois : nuqatil (que nous combattions, Form III subjonctif, pos=18 demande des notables), tuqatiloo (que vous combattiez, Form III subjonctif négatif, pos=~31 question du prophète), nuqatila (que nous combattions, Form III subjonctif, pos=~37 réponse des notables). La Form III exprime un combat bilatéral, mutuel — on ne tue pas, on se bat contre un adversaire. L'expression fi sabili llahi (dans la voie d'Allah) est la qualification religieuse qui distingue ce combat d'une simple guerre tribale.",
              axe2_voisins: "La répétition de la racine q-t-l dans les deux discours (notables et prophète) et dans la conclusion crée une ironie narrative : ceux qui réclamaient le combat avec le plus de véhémence (v.246a) sont ceux qui s'en détournent quand il devient réel (v.246b). Le prophète avait perçu cette ironie dès le début (hal 'asaytum = n'est-ce pas que vous allez peut-être...). Le combat dans la voie d'Allah n'est pas qu'un discours — c'est une épreuve de réalité.",
              axe3_sourate: "Le thème du combat (qital) dans la voie d'Allah est central dans Al-Baqara depuis le v.190 (combattez dans la voie d'Allah ceux qui vous combattent) jusqu'aux v.244-246. La sourate développe une théologie du combat juste qui n'est pas une violence aveugle mais un engagement délibéré et responsable. Les Banu Israïl de ce verset échouent précisément parce qu'ils traitent le combat comme un discours collectif sans en assumer le coût personnel.",
              axe4_coherence: "La distinction entre Form I (tuer, q-t-l) et Form III (combattre, q-t-l) est théologiquement importante. Le Coran appelle au qital (Form III = combat bilatéral, guerre défensive ou dans la voie d'Allah) et non au simple meurtre (Form I). Cette nuance grammaticale encode une éthique du combat : on se bat contre un adversaire armé, on ne tue pas des personnes sans défense. La Form III implique un contexte de guerre déclarée et mutuellement engagée.",
              axe5_frequence: "La racine q-t-l est l'une des racines les plus importantes du Coran dans le contexte du jihad. Elle apparaît des centaines de fois sous différentes formes. La locution figée fi sabili llahi (dans la voie d'Allah) accompagne très fréquemment q-t-l pour qualifier moralement et religieusement l'acte de combat. Cette qualification est essentielle : le même acte de combattre peut être louable (fi sabili llahi) ou condamnable selon l'intention et le contexte."
            }
          }
        }
      },
      {
        word_key: "wly",
        position: 51,
        sense_chosen: "se détourner, tourner le dos, renier son engagement",
        analysis_axes: {
          sense_chosen: "se détourner, tourner le dos, renier son engagement",
          concept_chosen: "Defection/Reniement",
          concepts: {
            "Defection/Reniement": {
              status: "retenu",
              senses: ["être proche, suivre (Form I)", "se retourner (Form II)", "se détourner complètement (Form V tawallay)", "tourner le dos, renier"],
              proof_ctx: "Lane's Lexicon: w-l-y = to be near, to follow; Form V tawallay/yatawalla = to turn one's back on, to turn away from; to apostatize, to forsake. Tawallaw = they turned their backs — implying deliberate rejection and betrayal of commitment.",
              axe1_verset: "Dans ce verset, tawallaw (ils se détournèrent, Form V) désigne l'acte de retournement moral et physique des notables quand le combat leur fut prescrit. Ce n'est pas une hésitation ou une peur passagère — c'est un acte délibéré de retournement. La Form V (taFa''ala) expresse une action réfléchie, accomplie sur soi-même : ils se sont eux-mêmes retournés, ils ont choisi de tourner le dos.",
              axe2_voisins: "Le contraste entre l'enthousiasme verbal (wa ma lana alla nuqatila = pourquoi ne combattrions-nous pas ?) et la défection effective (tawallaw = ils se détournèrent) est le coeur dramatique du verset. Ce retournement est d'autant plus condamnable que les notables avaient revendiqué le combat avec véhémence — leurs paroles courageuses les condamnent rétrospectivement. Le prophète avait anticipé cette discordance entre discours et actes.",
              axe3_sourate: "La Form V tawallay dans le sens de se détourner / déserter apparaît plusieurs fois dans le Coran en lien avec la défaillance morale (v.2:205 pour l'hypocrite qui sème la corruption, v.47:38 pour ceux qui se détournent de la dépense dans la voie d'Allah). Dans Al-Baqara, le thème du retournement / de l'apostasie est traité dès le début (v.18 : les sourds et les aveugles qui ne reviennent pas). Le tawallaw des notables s'inscrit dans ce pattern récurrent.",
              axe4_coherence: "La racine w-l-y a une polysémie remarquable : elle signifie à la fois la proximité et l'éloignement selon la forme verbale. Form I (waliya) = être proche, être ami, prendre sous sa protection. Form V (tawallay) = se détourner, aller loin. Ce paradoxe sémantique encode une vérité anthropologique : celui qui se détourne (tawallay) rompt une relation de proximité (walaya) — c'est d'autant plus grave que la relation initiale était étroite (Allah et son peuple, le prophète et ses concitoyens).",
              axe5_frequence: "La racine w-l-y est parmi les plus riches du Coran avec ses nombreux dérivés : wali (protecteur, ami, saint), walaya (amitié, protection, soutien), mawla (maître, allié), tawallay (se détourner). Le Coran construit une théologie des allégeances (walayat) : la walaya envers Allah est la relation fondamentale, celle envers Sa voie est dérivée. Se détourner (tawallay) de cette walaya est la transgression suprême — ce que font les notables en refusant le combat prescrit."
            }
          }
        }
      },
      {
        word_key: "zlm",
        position: 58,
        sense_chosen: "injustes, oppresseurs, ceux qui mettent les choses à leur mauvaise place",
        analysis_axes: {
          sense_chosen: "injustes, oppresseurs, ceux qui mettent les choses à leur mauvaise place",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["être dans l'obscurité, faire du tort (Form I)", "zalim = injuste, oppresseur", "zulm = injustice, mettre une chose à la mauvaise place", "al-zalimun = les injustes (pluriel)"],
              proof_ctx: "Lane's Lexicon: z-l-m = to be dark; to do wrong; to put something in its wrong place; zulm = injustice, wrong; zalim = one who acts unjustly, a wrongdoer, an oppressor. The core meaning is misplacement: zulm = to put a thing out of its proper place.",
              axe1_verset: "Dans ce verset, wa-llahu 'alimun bi-l-zalimin (et Allah connaît parfaitement les injustes) est la clausule évaluative finale. Les zalimun ici désignent en premier lieu ceux qui se sont détournés du combat prescrit — ils ont commis une injustice envers eux-mêmes (en se privant de la récompense), envers leur communauté (en la laissant sans défense), et envers Allah (en manquant à leur engagement solennel). Le terme 'injustes' est plus fort que 'lâches' ou 'défaillants'.",
              axe2_voisins: "La formule de clôture wa-llahu 'alimun bi-X (et Allah connaît parfaitement X) est caractéristique des fins de versets dans Al-Baqara. Elle ne dit pas qu'Allah punira — la punition est implicite dans la science divine. Savoir que Allah est omniscient des injustes est à la fois un avertissement (tu ne peux pas te cacher) et une consolation pour les victimes de l'injustice (Allah voit et sait). C'est une formule qui ouvre sur l'eschatologie sans la détailler.",
              axe3_sourate: "La racine z-l-m est l'une des plus fréquentes d'Al-Baqara. Elle désigne différentes formes d'injustice : l'injustice envers Allah (shirk, v.2:35), l'injustice envers soi-même (v.2:54, v.2:57), l'injustice envers les autres (v.2:279). Dans ce verset, les zalimun ont commis les trois formes simultanément. La sourate construit une sociologie morale complète autour de la notion de zulm comme manquement fondamental à l'ordre voulu par Allah.",
              axe4_coherence: "La définition classique de zulm comme 'mettre une chose à sa mauvaise place' (Lane's) est théologiquement révélatrice : les notables ont mis leur peur à la place du courage, leurs paroles à la place des actes, leurs intérêts immédiats à la place de leur engagement envers Allah. C'est un désordre moral qui reflète un désordre ontologique — ils n'ont pas su être à la place qui leur était assignée (combattants dans la voie d'Allah).",
              axe5_frequence: "La racine z-l-m est extrêmement fréquente dans le Coran (plus de 300 occurrences sous différentes formes). Les zalimun constituent l'une des grandes catégories morales négatives du Coran, aux côtés des kafirun (incrédules), des munafiqun (hypocrites) et des fasiqun (dévoyés). La science divine des zalimun ('alimun bi-l-zalimin) est une formule récurrente qui souligne que l'injustice ne reste jamais cachée à Allah, quels que soient les efforts humains pour la dissimuler."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[246];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V246)');

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
  console.log('DONE V246 TERMINE');
}
main().catch(console.error);
