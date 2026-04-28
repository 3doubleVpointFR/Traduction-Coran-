const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  247: {
    verse_id: 254,
    analysis_id: 613,
    translation_arab: "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ٱللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ مَلِكًا ۚ قَالُوٓا۟ أَنَّىٰ يَكُونُ لَهُ ٱلْمُلْكُ عَلَيْنَا وَنَحْنُ أَحَقُّ بِٱلْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةً مِّنَ ٱلْمَالِ ۚ قَالَ إِنَّ ٱللَّهَ ٱصْطَفَىٰهُ عَلَيْكُمْ وَزَادَهُۥ بَسْطَةً فِى ٱلْعِلْمِ وَٱلْجِسْمِ ۖ وَٱللَّهُ يُؤْتِى مُلْكَهُۥ مَن يَشَآءُ ۚ وَٱللَّهُ وَٰسِعٌ عَلِيمٌ",
    full_translation: "Et leur prophète leur dit : 'Certes, Allah vous a désigné Saul comme roi.' Ils dirent : 'Comment aurait-il la royauté sur nous, alors que nous avons plus droit à la royauté que lui, et qu'il n'a même pas été doté d'abondance de richesse ?' Il dit : 'Certes, Allah l'a élu pour vous et lui a accordé une ample stature dans le savoir et dans la force. Allah donne Sa royauté à qui Il veut. Allah est Vaste, Omniscient.'",
    translation_explanation: `§DEMARCHE§
La traduction de ce verset repose sur une lecture attentive de chaque terme fondamental. Le mot "ba'atha" (bعث) a été rendu par "désigner" plutôt que par "envoyer", car le contexte indique une mission royale conférée par le divin, et non un simple envoi. Le terme "mulk" (ملك) a été traduit par "royauté" et non par "pouvoir" ou "autorité", pour préserver la dimension institutionnelle de la souveraineté politique. La locution "bastatan fi l-'ilmi wa l-jism" a été rendue par "ample stature dans le savoir et dans la force", permettant de rendre la double dimension intellectuelle et physique que le texte met en avant comme qualifications légitimes d'un chef. La racine "istafa" (صفو) a été rendue par "élu", en soulignant l'idée de purification et de sélection du meilleur, conformément à l'étymologie.

§JUSTIFICATION§
Le choix de Talut (Saul) par le divin illustre un principe fondamental : la légitimité du chef ne tient pas à la noblesse de la lignée ni à la richesse matérielle, mais aux aptitudes réelles, au savoir et à la vigueur physique. La protestation des fils d'Israël — qui invoquent leur droit héréditaire et la pauvreté de Talut — est démentie par la réponse prophétique. Le terme "istafahu 'alaykum" signifie littéralement "il l'a choisi pur au-dessus de vous", ce qui implique une élection de mérite divin. La clôture du verset — "Allah est Vaste, Omniscient" — rattache la souveraineté à la toute-connaissance divine, soulignant que la désignation ne procède pas d'un arbitraire mais d'une science parfaite des cœurs et des capacités.

§CRITIQUE§
La principale difficulté porte sur la traduction de "bastatan fi l-jism". Certains traducteurs classiques optent pour "carrure physique", d'autres pour "vigueur corporelle". Nous avons préféré "stature dans la force" pour ne pas réduire le terme à une simple description morphologique. Une autre tension porte sur "mulk" : le terme désigne à la fois la royauté politique et la souveraineté universelle d'Allah. Le verset joue sur cette double acception — la royauté humaine de Talut est accordée par la royauté absolue du divin, ce qui relativise la prétention des notables.`,
    segments: [
      { fr: "Et il dit", is_particle: true, phon: "wa-qaala", arabic: "وَقَالَ", position: 1 },
      { fr: "à eux", is_particle: true, phon: "lahum", arabic: "لَهُمْ", position: 2 },
      { fr: "leur prophète", pos: "nom", phon: "nabiyyuhum", arabic: "نَبِيُّهُمْ", word_key: "nba", is_particle: false, sense_retenu: "prophète, porteur de nouvelles divines", position: 3 },
      { fr: "certes", is_particle: true, phon: "inna", arabic: "إِنَّ", position: 4 },
      { fr: "Allah", is_particle: true, phon: "allaaha", arabic: "ٱللَّهَ", position: 5 },
      { fr: "déjà/certes", is_particle: true, phon: "qad", arabic: "قَدْ", position: 6 },
      { fr: "a désigné/suscité", pos: "verbe", phon: "ba'atha", arabic: "بَعَثَ", word_key: "beth", is_particle: false, sense_retenu: "désigner en mission, susciter", position: 7 },
      { fr: "pour vous", is_particle: true, phon: "lakum", arabic: "لَكُمْ", position: 8 },
      { fr: "Talut (Saul)", is_particle: true, phon: "taaluuta", arabic: "طَالُوتَ", position: 9 },
      { fr: "comme roi", pos: "nom", phon: "malikan", arabic: "مَلِكًا", word_key: "mlk", is_particle: false, sense_retenu: "roi, celui qui détient la souveraineté", position: 10 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۚ", position: 11 },
      { fr: "Ils dirent", is_particle: true, phon: "qaaluu", arabic: "قَالُوٓا۟", position: 12 },
      { fr: "comment", is_particle: true, phon: "annaa", arabic: "أَنَّىٰ", position: 13 },
      { fr: "serait", is_particle: true, phon: "yakuunu", arabic: "يَكُونُ", position: 14 },
      { fr: "pour lui", is_particle: true, phon: "lahu", arabic: "لَهُ", position: 15 },
      { fr: "la royauté", is_particle: true, phon: "al-mulku", arabic: "ٱلْمُلْكُ", position: 16 },
      { fr: "sur nous", is_particle: true, phon: "'alaynaa", arabic: "عَلَيْنَا", position: 17 },
      { fr: "et nous", is_particle: true, phon: "wa-nahnu", arabic: "وَنَحْنُ", position: 18 },
      { fr: "plus dignes", is_particle: true, phon: "ahaqqu", arabic: "أَحَقُّ", position: 19 },
      { fr: "de la royauté", is_particle: true, phon: "bi-l-mulki", arabic: "بِٱلْمُلْكِ", position: 20 },
      { fr: "que lui", is_particle: true, phon: "minhu", arabic: "مِنْهُ", position: 21 },
      { fr: "et il n'a pas", is_particle: true, phon: "wa-lam", arabic: "وَلَمْ", position: 22 },
      { fr: "été doté", is_particle: true, phon: "yu'ta", arabic: "يُؤْتَ", position: 23 },
      { fr: "d'abondance", is_particle: true, phon: "sa'atan", arabic: "سَعَةً", position: 24 },
      { fr: "de", is_particle: true, phon: "mina", arabic: "مِّنَ", position: 25 },
      { fr: "la richesse", is_particle: true, phon: "al-maali", arabic: "ٱلْمَالِ", position: 26 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۚ", position: 27 },
      { fr: "Il dit", is_particle: true, phon: "qaala", arabic: "قَالَ", position: 28 },
      { fr: "certes", is_particle: true, phon: "inna", arabic: "إِنَّ", position: 29 },
      { fr: "Allah", is_particle: true, phon: "allaaha", arabic: "ٱللَّهَ", position: 30 },
      { fr: "l'a élu", pos: "verbe", phon: "istafaahu", arabic: "ٱصْطَفَىٰهُ", word_key: "sfw", is_particle: false, sense_retenu: "élire le meilleur, choisir le plus pur", position: 31 },
      { fr: "sur vous", is_particle: true, phon: "'alaykum", arabic: "عَلَيْكُمْ", position: 32 },
      { fr: "et lui a accordé en plus", pos: "verbe", phon: "wa-zaadahu", arabic: "وَزَادَهُۥ", word_key: "zyd", is_particle: false, sense_retenu: "accroître, donner en supplément", position: 33 },
      { fr: "une ample stature", pos: "nom", phon: "bastatan", arabic: "بَسْطَةً", word_key: "bst", is_particle: false, sense_retenu: "ample extension, largesse, stature", position: 34 },
      { fr: "dans", is_particle: true, phon: "fii", arabic: "فِى", position: 35 },
      { fr: "le savoir", pos: "nom", phon: "al-'ilmi", arabic: "ٱلْعِلْمِ", word_key: "elm", is_particle: false, sense_retenu: "le savoir, la connaissance", position: 36 },
      { fr: "et la stature physique", pos: "nom", phon: "wa-l-jismi", arabic: "وَٱلْجِسْمِ", word_key: "jsm", is_particle: false, sense_retenu: "le corps, la stature physique", position: 37 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۖ", position: 38 },
      { fr: "et Allah", is_particle: true, phon: "wa-allaahu", arabic: "وَٱللَّهُ", position: 39 },
      { fr: "donne", is_particle: true, phon: "yu'tii", arabic: "يُؤْتِى", position: 40 },
      { fr: "Sa royauté", is_particle: true, phon: "mulkahu", arabic: "مُلْكَهُۥ", position: 41 },
      { fr: "à qui", is_particle: true, phon: "man", arabic: "مَن", position: 42 },
      { fr: "Il veut", is_particle: true, phon: "yashaa'u", arabic: "يَشَآءُ", position: 43 },
      { fr: "et Allah", is_particle: true, phon: "wa-allaahu", arabic: "وَٱللَّهُ", position: 44 },
      { fr: "Vaste", is_particle: true, phon: "waasi'un", arabic: "وَٰسِعٌ", position: 45 },
      { fr: "Omniscient", is_particle: true, phon: "'aliimun", arabic: "عَلِيمٌ", position: 46 }
    ],
    vwa: [
      {
        word_key: "nba",
        position: 3,
        sense_chosen: "prophète, porteur de nouvelles divines",
        analysis_axes: {
          sense_chosen: "prophète, porteur de nouvelles divines",
          concept_chosen: "Prophete/Messager",
          concepts: {
            "Prophete/Messager": {
              status: "retenu",
              senses: ["prophète", "celui qui apporte une nouvelle importante", "porteur de révélation divine", "celui qui annonce"],
              proof_ctx: "La racine nba' signifie apporter une nouvelle grave et importante. Le nabiy est celui qui reçoit et transmet les nouvelles divines. Lane indique que naba'a signifie also 'etre eleve', suggérant une eminence spirituelle du prophète au-dessus du commun.",
              axe1_verset: "Dans ce verset, le prophète (nabiyyuhum) s'adresse aux fils d'Israel pour leur transmettre la décision divine concernant Talut. Son rôle est explicitement celui d'un intermédiaire qui porte la parole du divin aux hommes, illustrant parfaitement le sens de la racine : porteur d'une nouvelle capitale.",
              axe2_voisins: "Dans les versets précédents (2:246), les fils d'Israel demandaient à leur prophète de leur désigner un roi pour combattre. Le prophète se présente comme le canal entre la communauté et la volonté divine. Ce rôle de médiateur fidèle est cohérent avec l'ensemble du contexte narratif de cette séquence.",
              axe3_sourate: "Dans la sourate al-Baqarah, les prophètes apparaissent régulièrement comme les médiateurs de la parole divine. Ibrahim, Moussa, Isa sont tous présentés comme porteurs d'une mission de transmission. Le terme nabiy est donc bien ancré dans la sourate dans son sens de porte-parole du divin.",
              axe4_coherence: "Le terme nabiy revient plus de soixante-dix fois dans le Coran. Il désigne toujours celui qui reçoit une révélation et la transmet à sa communauté. Cette constance confirme que le sens retenu — porteur de nouvelles divines et médiateur — est le sens coranique stable et dominant du terme.",
              axe5_frequence: "La tradition exégétique islamique distingue le nabiy du rasul (envoyé). Le nabiy est celui qui reçoit la révélation mais ne reçoit pas nécessairement la mission d'une nouvelle loi. Ibn Kathir et al-Tabari soulignent tous deux que le nabiy est porteur de la parole divine sans qu'elle implique forcément une nouvelle législation."
            }
          }
        }
      },
      {
        word_key: "beth",
        position: 7,
        sense_chosen: "désigner en mission, susciter pour une tâche",
        analysis_axes: {
          sense_chosen: "désigner en mission, susciter pour une tâche",
          concept_chosen: "Mission/Designation",
          concepts: {
            "Mission/Designation": {
              status: "retenu",
              senses: ["envoyer en mission", "susciter", "désigner pour une tâche", "ressusciter (sens secondaire)"],
              proof_ctx: "Lane indique que ba'atha signifie envoyer quelqu'un vers un but précis, ou susciter quelqu'un pour une mission. La forme ba'atha lahu signifie spécifiquement 'le désigner pour lui' ou 'l'envoyer à son bénéfice'. Le terme implique une initiative volontaire de celui qui désigne.",
              axe1_verset: "Le contexte immédiat est la désignation de Talut comme roi par le divin, transmise par le prophète. Le verbe ba'atha exprime ici l'acte divin de susciter un chef pour la communauté. Il ne s'agit pas d'un simple envoi géographique mais d'une investiture de mission : Talut est suscité pour remplir la fonction royale.",
              axe2_voisins: "Dans les versets qui suivent (2:248-251), Talut est effectivement en mission : il mène l'armée, pose des conditions d'épreuve, et conduit à la victoire sur Jalut. Le verbe ba'atha au verset 247 anticipe donc toute la séquence narrative, où Talut accomplit précisément la mission pour laquelle il a été suscité.",
              axe3_sourate: "Dans la sourate al-Baqarah, la racine ba'atha apparaît également dans le contexte de la résurrection (ba'th). Cette double signification — susciter pour une mission terrestre et ressusciter après la mort — révèle une cohérence sémantique profonde : dans les deux cas, il s'agit d'un acte divin qui fait advenir quelqu'un à une nouvelle existence ou fonction.",
              axe4_coherence: "Dans le Coran, ba'atha est fréquemment utilisé pour la désignation des prophètes ('ba'atha fi l-ummiyyin rasulan'). Cette utilisation confirme le sens d'investiture divine : le divin suscite des individus pour des rôles précis, qu'ils soient prophètes ou rois.",
              axe5_frequence: "Les commentateurs classiques, notamment al-Zamakhshari dans al-Kashshaf, expliquent ba'atha lahu par 'amara bi-ta'atihi' (ordonna de lui obéir) ou 'ja'alahu malikan' (l'établit roi). Ces gloses confirment que le sens retenu — désignation pour une fonction — est celui de la tradition exégétique."
            }
          }
        }
      },
      {
        word_key: "mlk",
        position: 10,
        sense_chosen: "roi, celui qui détient la souveraineté",
        analysis_axes: {
          sense_chosen: "roi, celui qui détient la souveraineté",
          concept_chosen: "Royaute/Souverainete",
          concepts: {
            "Royaute/Souverainete": {
              status: "retenu",
              senses: ["roi", "royauté", "souveraineté", "celui qui possède l'autorité suprême"],
              proof_ctx: "Lane fait dériver malaka de la racine mlk qui signifie posséder, maîtriser avec fermeté. Malik est celui qui possède l'autorité suprême sur un territoire et un peuple. Mulk désigne l'institution de la royauté, la souveraineté en tant que telle. La racine implique donc un rapport de maîtrise et de possession légitime.",
              axe1_verset: "La question des fils d'Israel — 'comment aurait-il la royauté sur nous ?' — montre que mulk désigne ici un pouvoir institutionnel reconnu, celui d'un chef légitime sur une communauté. La protestation porte précisément sur la légitimité de cette maîtrise, révélant que mulk implique une autorité consentie ou contestée.",
              axe2_voisins: "Au verset 248, c'est encore mulkihi (sa royauté) qui est le terme central : le coffre de l'alliance sera le signe de la royauté de Talut. La royauté requiert donc un signe divin de légitimation. Ce lien entre mulk et signe divin dans deux versets consécutifs confirme que la royauté ici n'est pas un simple pouvoir de fait mais une institution sacrée.",
              axe3_sourate: "Dans la sourate al-Baqarah, mulk apparaît aussi à propos d'Ibrahim à qui le divin avait donné la royauté et la sagesse (2:251). La sourate présente ainsi une théologie de la souveraineté : toute royauté légitime procède d'une désignation divine, qu'il s'agisse de Talut, de Dawud ou d'Ibrahim.",
              axe4_coherence: "Le terme mulk est présent dans plus de cinquante versets coraniques. Il désigne toujours la souveraineté politique ou cosmique. La distinction entre mulk (royauté d'exercice) et mulk Allah (souveraineté absolue du divin) traverse tout le Coran, et ce verset en est une illustration directe.",
              axe5_frequence: "Les exégètes classiques, notamment Ibn 'Atiyya et al-Razi, insistent sur le fait que mulk implique à la fois le droit de commander et la capacité de faire obéir. La protestation des notables portait sur les deux dimensions : Talut n'avait ni la lignée pour légitimer son droit ni la richesse pour asseoir son autorité pratique."
            }
          }
        }
      },
      {
        word_key: "sfw",
        position: 31,
        sense_chosen: "élire le meilleur, choisir le plus pur",
        analysis_axes: {
          sense_chosen: "élire le meilleur, choisir le plus pur",
          concept_chosen: "Election/Purete",
          concepts: {
            "Election/Purete": {
              status: "retenu",
              senses: ["élire", "choisir le meilleur", "purifier", "sélectionner le plus pur"],
              proof_ctx: "La racine sfw signifie être pur, limpide, sans trouble. La forme VIII istafa (istafahu) signifie choisir ce qu'il y a de plus pur, de plus clair, donc élire le meilleur. Lane indique que safa' (l'eau pure, limpide) est à la base de cette famille : choisir quelqu'un, c'est le reconnaître comme la partie la plus pure d'un ensemble.",
              axe1_verset: "Le verbe istafahu 'alaykum signifie littéralement 'il l'a choisi pur au-dessus de vous'. L'élection divine de Talut n'est pas arbitraire : elle repose sur la pureté de son caractère et de ses aptitudes, reconnues par le divin. La réponse du prophète aux protestations des notables est ainsi une réaffirmation que la légitimité procède de la qualité intrinsèque.",
              axe2_voisins: "Le verbe istafa revient dans des contextes d'élection prophétique et royale dans tout le Coran. Dans le verset suivant (2:248), la légitimité de Talut est confirmée par un signe divin. Cette double confirmation — d'abord par la parole prophétique (istafa), puis par le signe (aya) — montre que l'élection divine s'accompagne toujours d'une manifestation.",
              axe3_sourate: "Dans la sourate al-Baqarah, le thème de l'élection divine des chefs traverse toute la séquence de 2:246-252. Le divin choisit Talut malgré l'opposition humaine, comme Il avait choisi Ibrahim malgré les résistances. L'élection divine dans la sourate s'oppose systématiquement aux critères humains de légitimité (lignée, richesse).",
              axe4_coherence: "La racine sfw revient notamment dans le terme mustafa (l'élu), titre donné au Prophète. Cette fréquence confirme que le sens d'élection par purification — choisir le meilleur parmi tous — est le sens coranique dominant. Talut entre ainsi dans la catégorie des élus divins, bien que sa fonction soit royale et non prophétique.",
              axe5_frequence: "Al-Tabari et Ibn Kathir commentent istafahu par 'akhtarahu wa ikhtassahu' (il l'a choisi et distingué). Al-Razi ajoute que l'élection divine implique une connaissance parfaite des qualités intérieures, que la foule ignore. Cette analyse confirme que istafa désigne une élection fondée sur la valeur réelle, non sur les apparences sociales."
            }
          }
        }
      },
      {
        word_key: "zyd",
        position: 33,
        sense_chosen: "accroître, donner en supplément",
        analysis_axes: {
          sense_chosen: "accroître, donner en supplément",
          concept_chosen: "Accroissement/Don",
          concepts: {
            "Accroissement/Don": {
              status: "retenu",
              senses: ["accroître", "augmenter", "donner en supplément", "octroyer davantage"],
              proof_ctx: "Lane indique que zaada signifie être en excès, augmenter, aller au-delà de la mesure ordinaire. La forme zadahu signifie lui avoir accordé un surplus, une augmentation au-delà de ce que possèdent les autres. Le terme implique un don supplémentaire ajouté à une base déjà existante.",
              axe1_verset: "Le verbe wa-zaadahu bastatan fi l-'ilmi wa l-jism signifie que le divin a accordé à Talut un surplus — une ample stature dans les deux domaines essentiels du chef : le savoir et la force physique. L'accroissement n'est pas ordinaire mais spécifique : il porte sur les qualités distinctives du commandement.",
              axe2_voisins: "Dans la structure argumentative du verset, istafahu (élection) et zaadahu (accroissement) forment une paire : l'élection est la décision divine, l'accroissement est le don concret qui la justifie. Talut n'est pas seulement choisi — il est doté. Cette logique se retrouve dans d'autres contextes coraniques où l'élection divine s'accompagne d'un don de capacités.",
              axe3_sourate: "Dans al-Baqarah, la générosité divine dans l'attribution des dons est un thème récurrent. Le divin accroît ceux qu'Il veut (yuzaadu man yashaa'). Ce verset illustre concrètement ce principe général : l'accroissement de Talut en savoir et en stature est le reflet de la générosité divine qui dépasse les attentes humaines.",
              axe4_coherence: "La racine zyd est présente dans de nombreux versets coraniques exprimant l'augmentation de la foi, de la connaissance ou des bienfaits. Dans tous ces contextes, le don divin dépasse la simple mesure ordinaire pour atteindre l'excellence. Appliqué à Talut, le terme confirme que ses capacités sont d'une amplitude exceptionnelle.",
              axe5_frequence: "Les commentateurs classiques glosent wa-zaadahu par 'atahu fawqa maa a'taa ghayruhu' (il lui donna au-delà de ce qu'il donna aux autres). Cette lecture comparative est importante : la bassata (ample stature) de Talut se mesure non pas en valeur absolue mais en comparaison avec ses contemporains, ce qui justifie sa désignation."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 36,
        sense_chosen: "le savoir, la connaissance intellectuelle et pratique",
        analysis_axes: {
          sense_chosen: "le savoir, la connaissance intellectuelle et pratique",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaissance", "science", "compréhension pratique et théorique"],
              proof_ctx: "Lane indique que 'alima signifie savoir avec certitude, connaître pleinement. Al-'ilm est le substantif désignant la connaissance en général. Dans la tradition linguistique arabe, 'ilm s'oppose à jahl (ignorance) et implique une connaissance assurée, pas une simple opinion. Le terme couvre aussi bien la science théorique que la sagesse pratique.",
              axe1_verset: "Dans le contexte de la qualification de Talut, l-'ilm désigne le savoir nécessaire au commandement militaire et politique. Il s'agit de la connaissance stratégique, de la maîtrise des situations de guerre et de gouvernement. Ce savoir est placé en premier dans la liste des qualifications, avant la stature physique, ce qui en fait la qualité principale du chef.",
              axe2_voisins: "Le verset suivant (2:248) confirme que Talut possède une connaissance que les fils d'Israel ignorent : il sait reconnaître le signe divin dans le retour du coffre. Sa science n'est donc pas seulement stratégique mais aussi spirituelle, capable d'interpréter les signes divins dans l'histoire.",
              axe3_sourate: "Dans la sourate al-Baqarah, 'ilm est régulièrement opposé à l'ignorance des adversaires du prophète ou des opposants. Le divin est qualifié de 'alim (omniscient) au même verset. Cette connexion entre le 'ilm de Talut et le 'ilm d'Allah n'est pas fortuite : la connaissance du chef est une participation limitée à la science divine.",
              axe4_coherence: "La racine elm est l'une des plus fréquentes du Coran, avec plus de sept cents occurrences. Elle désigne constamment un savoir certain, opposé à la conjecture (zann). Appliqué à Talut, 'ilm signifie une compétence assurée dans l'art de commander, non une simple habileté empirique.",
              axe5_frequence: "Al-Zamakhshari et al-Baydawi commentent al-'ilm ici comme désignant la connaissance des affaires de la guerre et de la politique (al-'ilm bi-umur al-harb wa l-siyasa). Cette lecture confirme que dans le contexte de la désignation d'un chef militaire, 'ilm a une portée éminemment pratique et non spéculative."
            }
          }
        }
      },
      {
        word_key: "jsm",
        position: 37,
        sense_chosen: "le corps, la stature physique",
        analysis_axes: {
          sense_chosen: "le corps, la stature physique",
          concept_chosen: "Corps/Stature",
          concepts: {
            "Corps/Stature": {
              status: "retenu",
              senses: ["le corps", "la stature physique", "la force corporelle", "la vigueur"],
              proof_ctx: "Lane indique que jism désigne le corps dans sa dimension physique et matérielle, en particulier la stature et la carrure. Par opposition à ruh (esprit) et qalb (coeur), jism désigne la dimension corporelle de l'être humain. Dans le contexte militaire, jism évoque la vigueur physique nécessaire au combat et au commandement.",
              axe1_verset: "La mise en parallèle de l-'ilm (le savoir) et l-jism (le corps) au sein de la même locution présente les deux qualifications essentielles du chef militaire : l'intelligence et la force physique. Le terme jism désigne ici la stature imposante et la vigueur corporelle qui inspirent le respect et permettent de mener l'armée au combat.",
              axe2_voisins: "Dans la séquence narrative qui suit (2:249-251), Talut va effectivement mener son armée dans une épreuve et un combat. La mention de sa stature physique au verset 247 prépare donc la narration du verset 249 où il impose une discipline sévère à ses troupes — une autorité qui requiert à la fois savoir et présence physique.",
              axe3_sourate: "Dans la sourate al-Baqarah, la dimension physique de la piété et de l'obéissance n'est pas absente : le jeûne, la prière et le combat sont des actes corporels. La mention de jism dans le contexte royal rappelle que le commandement n'est pas seulement une affaire d'esprit mais aussi de présence physique et de vigueur incarnée.",
              axe4_coherence: "Le terme jism est peu fréquent dans le Coran, ce qui rend sa présence ici d'autant plus remarquable. Son emploi dans un contexte royal et militaire confirme que la stature physique est une qualification reconnue du chef. La tradition arabe préislamique valorisait également la force et la taille comme signes de la qualité du chef.",
              axe5_frequence: "Les exégètes classiques glosent al-jism ici par al-quwwa wa l-basl (la force et la vigueur) ou par husn al-khalq (la belle constitution physique). Al-Tabari rapporte des traditions selon lesquelles Talut était le plus grand et le plus beau des fils d'Israel, ce qui confirme que jism désigne une supériorité physique visible et manifeste."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[247];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V247)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V247 TERMINE');
}
main().catch(console.error);
