const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 161
// verse_id=168, analysis_id=527
// "Ceux qui ont nie et sont morts alors qu'ils etaient
//  nieurs, sur ceux-la la malediction de Dieu, des anges
//  et des gens tous ensemble."
// =====================================================

const verseData = {
  161: {
    verse_id: 168,
    analysis_id: 527,
    translation_arab: "Ceux qui ont nie et sont morts alors qu'ils etaient nieurs, sur ceux-la la malediction de Dieu, des anges et des gens tous ensemble.",
    full_translation: "Ceux qui ont mecru et sont morts en etant mecreants, sur eux la malediction d'Allah, des anges et de tous les hommes.",
    translation_explanation: `§DEMARCHE§
Le verset prononce une sentence definitive sur ceux qui ont nie puis sont morts dans cet etat. Le verbe **kafaruu** est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, nier, etre ingrat, rejeter un bienfait. L'accompli indique que l'acte de nier est acheve — ils ont nie dans le passe et cette negation s'est cristallisee. Le pronom implicite « ceux qui » (alladhiina) introduit une categorie de personnes definie par leur acte. Le verbe **maatuu** est un accompli 3MP de la racine m-w-t. Le Lane's donne : mourir, cesser de vivre. L'accompli marque que la mort est un evenement acheve — ils sont morts. La conjonction « wa » (et) lie les deux accomplis en une sequence : ils ont nie PUIS sont morts. La mort est venue alors que la negation etait toujours active. Le pronom **hum** (eux) dans « wa-hum » introduit une proposition d'etat (hal) : « alors qu'ils etaient ». Le mot **kuffaarun** est un nom pluriel indefini de la racine k-f-r. Le Lane's donne : nieurs, ceux qui rejettent. Le pluriel indefini (kuffaarun sans article) qualifie leur etat au moment de la mort — ils etaient dans l'etat de negation quand la mort les a saisis. La distinction entre le verbe kafaruu (ils ont nie — acte ponctuel) et le nom kuffaarun (nieurs — etat permanent) est essentielle : le premier decrit ce qu'ils ont fait, le second decrit ce qu'ils etaient. Le demonstratif **ulaa'ika** (ceux-la) reprend et designe specifiquement cette categorie. Le pronom **'alayhim** (sur eux) introduit la sentence qui leur incombe. Le mot **la'natu** est un nom feminin singulier au genitif de la racine l-'-n. Le Lane's donne : malediction, eloignement de la misericorde divine. La malediction est un eloignement definitif — celui qui est maudit est banni de la proximite divine. Le nom est au singulier mais la malediction vient de trois sources. Le mot **Allaahi** est le nom propre de la divinite au genitif. Dieu est la premiere source de la malediction. Le mot **al-malaa'ikati** est un nom pluriel defini au genitif de la racine m-l-k. Le Lane's donne : anges, messagers celestes. Les anges sont la deuxieme source de la malediction. L'article defini (al-) indique la totalite des anges — pas certains anges mais tous. Le mot **an-naasi** est un nom pluriel defini au genitif de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Les gens sont la troisieme source de la malediction. L'article defini indique la totalite des gens. Le mot **ajma'iina** est un adjectif de la racine j-m-' au genitif masculin pluriel. Le Lane's donne : tous ensemble, totalite sans exception. Ce mot confirme que la malediction est unanime — Dieu, les anges et les gens, tous sans exception. Le verset construit une gradation de la malediction : du divin (Dieu) au celeste (les anges) a l'humain (les gens), et la totalite (tous ensemble) scelle l'unanimite.

§JUSTIFICATION§
**nie** — Le sens retenu est « nier ». Le verbe kafaruu decrit l'acte de nier les signes de Dieu. L'alternative « couvrir » est ecartee car le contexte est le rejet delibere de la verite, pas un acte physique de couverture. L'alternative « etre ingrat » est ecartee car le verset porte sur le rejet fondamental, pas sur l'ingratitude envers un bienfait specifique.

**sont morts** — Le sens retenu est « mourir ». Le verbe maatuu decrit le deces comme evenement acheve. L'alternative « terre morte » est ecartee car le sujet est des personnes, pas un terrain.

**nieurs** — Le sens retenu est « nier ». Le mot kuffaarun qualifie l'etat de negation permanente au moment de la mort. L'alternative « cultivateur » est ecartee car le contexte est la negation de la verite, pas l'agriculture. Le mot est traduit par « nieurs » (nom agent) plutot que par le verbe « nier » car la forme grammaticale est un nom pluriel designant ceux qui sont dans l'etat de negation.

**malediction** — Le sens retenu est « maudire ». Le mot la'natu designe l'eloignement de la misericorde divine. Cette racine n'a qu'un seul concept retenu, le choix est immediat.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allaahi est le nom propre de la divinite, premiere source de la malediction.

**les anges** — Le sens retenu est « ange ». Le mot al-malaa'ikati designe les creatures celestes, deuxieme source de la malediction. L'alternative « roi/royaume » est ecartee car la forme grammaticale malaa'ika est specifiquement le pluriel d'ange (malak), pas de roi (malik).

**les gens** — Le sens retenu est « gens ». Le mot an-naasi designe l'ensemble des etres humains, troisieme source de la malediction. L'alternative « voir de loin » est ecartee car le mot est un nom collectif designant les humains, pas un verbe de perception.

**tous ensemble** — Le sens retenu est « totalite ». Le mot ajma'iina confirme que la malediction est unanime et sans exception. L'alternative « vendredi » est ecartee car le contexte est la totalite, pas un jour de la semaine.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. Hamidullah traduit « mecru » la ou nous donnons « nie ». Le choix de « nier » est plus fidele a l'etymologie de k-f-r qui porte d'abord le sens de couvrir/cacher la verite, donc nier son existence. « Mecroire » est un neologisme theologique qui n'existe pas en francais courant. Les traductions varient aussi sur « malediction » — certaines ajoutent « d'Allah, des anges et de tous les hommes » ce qui est exactement le sens du texte arabe. Notre traduction respecte la structure tripartite de la malediction (Dieu, anges, gens) et le sceau de totalite (ajma'iina).`,
    segments: [
      { fr: "ceux qui", phon: "inna alladhina", arabic: "\u0625\u0650\u0646\u0651\u064e \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "ont nie", pos: "verbe", phon: "kafaruu", arabic: "\u0643\u064e\u0641\u064e\u0631\u064f\u0648\u0627\u06df", word_key: "kfr", is_particle: false, sense_retenu: "nier", position: 1 },
      { fr: "et sont morts", pos: "verbe", phon: "wa-maatuu", arabic: "\u0648\u064e\u0645\u064e\u0627\u062a\u064f\u0648\u0627\u06df", word_key: "mwt", is_particle: false, sense_retenu: "mourir", position: 2 },
      { fr: "alors qu'ils", phon: "wa-hum", arabic: "\u0648\u064e\u0647\u064f\u0645\u0652", is_particle: true, position: 3 },
      { fr: "etaient", phon: "", arabic: "", is_particle: true, position: 4 },
      { fr: "nieurs", pos: "nom", phon: "kuffaarun", arabic: "\u0643\u064f\u0641\u0651\u064e\u0627\u0631\u064c", word_key: "kfr", is_particle: false, sense_retenu: "nier", position: 5 },
      { fr: "sur ceux-la", phon: "ulaa'ika 'alayhim", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0670\u0649\u0650\u0653\u0643\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 6 },
      { fr: "la malediction", pos: "nom", phon: "la'natu", arabic: "\u0644\u064e\u0639\u0652\u0646\u064e\u0629\u064f", word_key: "len", is_particle: false, sense_retenu: "malediction", position: 7 },
      { fr: "de Dieu", pos: "nom", phon: "Allaahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "des anges", pos: "nom", phon: "al-malaa'ikati", arabic: "\u0648\u064e\u0671\u0644\u0652\u0645\u064e\u0644\u064e\u0640\u0670\u0653\u0649\u0650\u0643\u064e\u0629\u0650", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 9 },
      { fr: "et des gens", pos: "nom", phon: "wa-an-naasi", arabic: "\u0648\u064e\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 10 },
      { fr: "tous ensemble", pos: "adjectif", phon: "ajma'iina", arabic: "\u0623\u064e\u062c\u0652\u0645\u064e\u0639\u0650\u064a\u0646\u064e", word_key: "jme", is_particle: false, sense_retenu: "totalite", position: 11 }
    ],
    words: [
      // kfr pos=1 (kafaruu — accompli 3MP)
      {
        word_key: "kfr", position: 1, sense_chosen: "nier",
        analysis_axes: {
          sense_chosen: "nier",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["nier", "etre ingrat", "renier un bienfait", "rejeter", "mecreant"],
              proof_ctx: "Le verbe kafaruu est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, nier, rejeter, etre ingrat envers un bienfait. Le rejet est un acte exterieur et volontaire — celui qui nie refuse de reconnaitre ce qui lui est presente. L'accompli indique que l'acte de nier est acheve et cristallise. Ici le verbe ouvre le verset en definissant la categorie de personnes visees : ceux qui ont nie. Le contexte de la sourate (suite des versets sur les interdits alimentaires et la soumission a Dieu) montre que la negation porte sur les signes de Dieu et Ses commandements.",
              axe1_verset: "Le verbe kafaruu ouvre le verset en posant la condition premiere : ceux qui ont nie. Le verset construit une chaine de consequences : nier → mourir dans la negation → malediction universelle. Le champ lexical du verset (nier, mourir, nieurs, malediction) tourne autour du rejet et de ses consequences. La negation est l'acte fondateur qui entraine tout le reste — sans la negation, il n'y a pas de malediction. Le verbe est a l'accompli pour marquer que l'acte est pose et irrevocable.",
              axe2_voisins: "Le verset 159 parlait de ceux qui dissimulent les preuves et la guidance. Le verset 160 offrait une porte de sortie par le repentir. Le verset 161 traite de ceux qui n'ont pas saisi cette porte — ils ont nie et sont morts dans cet etat. La progression est : dissimulation (159) → possibilite de repentir (160) → consequence pour ceux qui n'ont pas repenti (161). La negation du verset 161 est definitive car suivie de la mort.",
              axe3_sourate: "La racine k-f-r est une des plus recurrentes de la sourate al-Baqarah. En 2:6, « ceux qui ont nie, que tu les avertisses ou non, ils ne croiront pas ». En 2:89, « une negation de ce qui vient de Dieu ». La sourate trace un portrait progressif de la negation — depuis le refus initial jusqu'a la mort dans l'etat de negation. Le verset 161 est l'aboutissement de ce parcours.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le schema « ceux qui ont nie et sont morts nieurs » apparait aussi en 3:91 avec une formulation presque identique. Le Coran repete ce schema pour souligner que la negation suivie de la mort sans repentir est un point de non-retour. En 47:34, « ceux qui ont nie et detourne du chemin de Dieu puis sont morts nieurs, Dieu ne leur pardonnera pas ».",
              axe5_frequence: "Pour la mission du khalifa, la negation est l'antithese de la mission. Le khalifa est charge de reconnaitre les signes de Dieu et de les mettre en pratique. Nier c'est refuser la mission elle-meme. Le verset avertit que la negation qui persiste jusqu'a la mort entraine une exclusion definitive — le khalifa doit saisir l'occasion du repentir tant qu'il est vivant."
            },
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le sens physique de couvrir est le sens premier de k-f-r — la nuit couvre le jour, la terre couvre la graine. Le contexte du verset est le rejet delibere des signes de Dieu, pas un acte physique de couverture. Le lien semantique existe : nier c'est couvrir la verite, la cacher sous le refus. Mais le verset traite de l'acte volontaire de negation, pas de l'image physique."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le verset parle de ceux qui ont nie, pas de ceux qui reparent une faute."
            },
            "Sens isolé/Cultivateur": {
              status: "nul",
              senses: ["cultivateur"],
              proof_ctx: "Le sens de cultivateur est un usage concret isole de k-f-r. Le contexte est la negation de la verite, pas l'agriculture."
            }
          }
        }
      },
      // mwt pos=2 (maatuu — accompli 3MP)
      {
        word_key: "mwt", position: 2, sense_chosen: "mourir",
        analysis_axes: {
          sense_chosen: "mourir",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le verbe maatuu est un accompli 3MP de la racine m-w-t. Le Lane's donne : mourir, cesser de vivre, passer de l'etat vivant a l'etat mort. La mort est un evenement ponctuel et irreversible qui met fin a la vie terrestre. L'accompli indique que la mort est un fait acheve. Ici le verbe est coordonne avec kafaruu (ont nie) par la conjonction « wa » — ils ont nie ET sont morts. La mort scelle la negation dans l'irrevocable : tant qu'on est vivant, le repentir est possible (verset 160), mais la mort ferme cette porte.",
              axe1_verset: "Le verbe maatuu est le deuxieme element de la chaine du verset : nier → mourir → etat de negation → malediction. La mort est le moment charniere qui transforme la negation en etat definitif. Le champ lexical du verset (nier, mourir, nieurs, malediction) montre que la mort n'est pas un evenement neutre — elle est le sceau qui fixe l'etat de la personne. Le verset precise « alors qu'ils etaient nieurs » (wa-hum kuffaarun) pour montrer que la mort les a saisis dans cet etat.",
              axe2_voisins: "Le verset 160 offrait le repentir comme issue. Le verset 161 montre ceux qui n'ont pas repenti avant la mort. Le verset 162 precisera que la malediction est permanente — ils y demeureront. La mort du verset 161 est le point de bascule entre la possibilite du repentir (160) et l'irrevocabilite de la malediction (162).",
              axe3_sourate: "La racine m-w-t apparait dans la sourate al-Baqarah dans des contextes varies. En 2:19, la mort par la foudre. En 2:28, « vous etiez morts, Il vous a donne la vie ». En 2:132, Jacob au moment de la mort demande a ses fils qui ils adorent. La sourate utilise la mort comme moment de verite — c'est a la mort que l'etat reel de la personne est fixe.",
              axe4_coherence: "La racine m-w-t apparait environ 165 fois dans le Coran. Le schema « mourir en etant nieur » (maata wa-huwa kaafirun) est un schema coranique recurrent. En 3:91, « quiconque meurt en etant nieur, on n'acceptera de lui meme le poids de la terre en or ». Le Coran insiste sur le fait que la mort dans l'etat de negation ferme definitivement la porte du repentir.",
              axe5_frequence: "Pour la mission du khalifa, la mort est la date limite de la mission. Le khalifa a jusqu'a sa mort pour accomplir sa mission — reconnaitre les signes, se repentir, agir selon les commandements. Mourir dans l'etat de negation c'est echouer definitivement dans la mission. Le verset rappelle l'urgence : la mort peut survenir a tout moment."
            },
            "Sens isolé/Immobile": {
              status: "nul",
              senses: ["immobile"],
              proof_ctx: "Le sens d'immobilite est un usage concret lie a la racine. Le contexte est la mort des personnes qui ont nie, pas l'immobilite physique."
            }
          }
        }
      },
      // kfr pos=5 (kuffaarun — nom pluriel indefini)
      {
        word_key: "kfr", position: 5, sense_chosen: "nier",
        analysis_axes: {
          sense_chosen: "nier",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["nier", "etre ingrat", "renier un bienfait", "rejeter", "mecreant"],
              proof_ctx: "Le mot kuffaarun est un nom pluriel masculin indefini de la racine k-f-r. Le Lane's donne : nieurs, ceux qui rejettent. Le pluriel kuffaar est la forme intensive du pluriel — il designe ceux qui sont plonges dans l'etat de negation. L'indefini (sans article) marque un etat qualitatif : ils etaient dans l'etat de negation au moment de leur mort. La distinction entre kafaruu (verbe — ils ont nie) et kuffaarun (nom — nieurs) est fondamentale : le verbe decrit l'acte passe, le nom decrit l'etat present au moment de la mort.",
              axe1_verset: "Le mot kuffaarun est l'attribut de la proposition d'etat « wa-hum kuffaarun » (alors qu'ils etaient nieurs). Le verset ne se contente pas de dire qu'ils ont nie dans le passe — il precise qu'ils etaient ENCORE dans cet etat au moment de la mort. Le champ lexical montre la progression : l'acte de nier (kafaruu) s'est cristallise en etat permanent (kuffaarun). C'est la persistance dans la negation qui entraine la malediction, pas un acte isole.",
              axe2_voisins: "Le verset 160 offrait le repentir — celui qui se repent sort de l'etat de negation. Le verset 161 montre ceux qui n'ont pas repenti : ils sont restes kuffaarun (nieurs) jusqu'a la mort. Le mot kuffaarun marque l'etat oppose du repentir — la persistance obstinee dans le refus.",
              axe3_sourate: "La sourate al-Baqarah utilise les derives de k-f-r sous leurs differentes formes. En 2:19, la racine apparait sous forme verbale. En 2:161, le nom kuffaarun designe l'etat cristallise. La sourate montre la progression du rejet : de l'acte ponctuel a l'etat permanent.",
              axe4_coherence: "Le pluriel kuffaar apparait environ 20 fois dans le Coran. Il designe systematiquement ceux qui sont plonges dans la negation comme etat permanent. En 57:20, les kuffaar sont compares aux cultivateurs — un jeu de mots coranique sur la racine k-f-r qui porte aussi le sens de cultivateur (celui qui couvre la terre de graines). Le double sens enrichit la comprehension.",
              axe5_frequence: "Pour la mission du khalifa, l'etat de kuffaar est l'echec total de la mission. Le khalifa qui persiste dans la negation jusqu'a la mort n'a pas accompli sa mission. Le verset distingue l'acte ponctuel (nier une fois) de l'etat permanent (etre nieur) — c'est la persistance qui condamne, pas l'erreur passagere."
            },
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le sens physique de couvrir reste present en arriere-plan — le kuffaar est celui qui couvre la verite de maniere permanente. Le nom kuffaarun porte cette image : la personne qui vit dans l'etat de couverture de la verite. Mais le sens premier ici est la negation active, pas la couverture passive."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le mot designe ceux qui nient, pas ceux qui expient."
            }
          }
        }
      },
      // len pos=7 (la'natu — nom feminin singulier genitif)
      {
        word_key: "len", position: 7, sense_chosen: "malediction",
        analysis_axes: {
          sense_chosen: "malediction",
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malediction", "maudit"],
              proof_ctx: "Le mot la'natu est un nom feminin singulier de la racine l-'-n au genitif. Le Lane's donne : malediction, eloignement de la misericorde divine, exclusion de la grace de Dieu. La malediction est un etat permanent d'eloignement — celui qui est maudit est banni de la proximite divine. La la'na est l'oppose de la rahma (misericorde). Ici la malediction vient de trois sources : Dieu, les anges et les gens — une triple exclusion qui couvre le divin, le celeste et l'humain. Cette racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le mot la'natu est le coeur de la sentence du verset — c'est la consequence de la negation suivie de la mort. Le verset construit une structure en trois couches : la malediction DE Dieu (source supreme), DES anges (source celeste), ET DES gens (source terrestre). La triple source montre que l'exclusion est totale — ni le ciel ni la terre n'accorde sa faveur au nieur mort dans la negation. Le mot ajma'iina (tous ensemble) scelle cette unanimite.",
              axe2_voisins: "Le verset 159 prononcait deja une malediction sur ceux qui dissimulent : « ceux-la, Dieu les maudit et les maudisseurs les maudissent ». Le verset 161 reprend le theme de la malediction mais l'elargit a trois sources explicites (Dieu, anges, gens). Le verset 162 precisera que cette malediction est permanente — ils y demeureront sans allegement.",
              axe3_sourate: "La racine l-'-n apparait dans la sourate al-Baqarah dans les contextes de rejet grave. En 2:88, « Dieu les a maudits pour leur negation ». En 2:89, la malediction de Dieu sur les nieurs. La sourate utilise la malediction comme consequence ultime de la negation persistante — c'est la sanction divine maximale.",
              axe4_coherence: "La racine l-'-n apparait environ 41 fois dans le Coran. La malediction est reservee aux cas les plus graves : Iblis (2:34, 15:35), les nieurs persistants (2:161), ceux qui dissimulent les signes (2:159). En 4:93, la malediction est prononcee sur celui qui tue un croyant deliberement. Le Coran n'utilise pas la malediction a la legere — elle marque l'exclusion definitive.",
              axe5_frequence: "Pour la mission du khalifa, la malediction est l'echec absolu de la mission. Etre maudit par Dieu, les anges et les gens signifie etre exclu de tout soutien — divin, celeste et humain. Le khalifa doit comprendre que persister dans la negation entraine une exclusion totale de la chaine de la creation. La malediction est l'oppose de la barka (benediction) qui accompagne le khalifa fidele."
            }
          }
        }
      },
      // llh pos=8 (Allaahi — nom propre genitif)
      {
        word_key: "llh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allaahi est le nom propre de la divinite au genitif dans l'expression « la'natu Allaahi » (la malediction de Dieu). Le Lane's donne : Dieu, l'Etre qui existe necessairement par Lui-meme, comprenant tous les attributs de perfection. Ici Dieu est la premiere source de la malediction — la source supreme. L'idafa (construction possessive) rattache la malediction a Dieu comme son auteur. La malediction de Dieu est la plus grave car elle emane de l'autorite absolue.",
              axe1_verset: "Le nom Allaahi est la premiere source de la malediction dans la structure tripartite du verset : Dieu → anges → gens. Dieu est cite en premier car Il est la source supreme de l'autorite. La malediction de Dieu entraine celle des anges (qui obeissent a Dieu) et celle des gens (qui reconnaissent l'autorite divine). Le champ lexical montre une hierarchie descendante : du Createur aux creatures celestes aux creatures terrestres.",
              axe2_voisins: "Le verset 159 disait « Dieu les maudit ». Le verset 161 reprend cette malediction mais ajoute les anges et les gens comme sources supplementaires. La progression montre que la malediction s'elargit — elle n'est pas seulement divine mais universelle.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah et du Coran entier. En 2:161, Dieu est l'auteur de la malediction — le meme Dieu qui en 2:160 acceptait le repentir. La sourate montre les deux faces de Dieu : misericordieux envers ceux qui se repentent (160), maudissant envers ceux qui persistent dans la negation (161).",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « la'natu Allaahi » (malediction de Dieu) apparait en 3:61, 7:44, 11:18. Le Coran presente la malediction divine comme un acte de justice — Dieu ne maudit pas sans raison mais en reponse a la negation persistante.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. La malediction de Dieu est l'exclusion du mandat — le khalifa maudit a perdu sa mission. Le khalifa doit maintenir sa relation avec Dieu par la reconnaissance et l'obeissance pour eviter cette exclusion."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la source de la malediction."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["etre confus"],
              proof_ctx: "Le sens de confusion est hors sujet — le mot est le nom propre Allah dans un contexte de malediction."
            }
          }
        }
      },
      // mlk pos=9 (al-malaa'ikati — nom pluriel defini genitif)
      {
        word_key: "mlk", position: 9, sense_chosen: "ange",
        analysis_axes: {
          sense_chosen: "ange",
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le mot al-malaa'ikati est un nom pluriel defini au genitif de la racine m-l-k. Le Lane's donne : ange, messager celeste, etre charge d'une mission divine. Le pluriel malaa'ika designe l'ensemble des anges. L'article defini (al-) indique la totalite — tous les anges sans exception. Le genitif rattache les anges a la malediction — les anges sont la deuxieme source de la malediction apres Dieu. La forme malaa'ika est specifiquement le pluriel d'ange (malak), pas de roi (malik) — la distinction vocalique est essentielle.",
              axe1_verset: "Le mot al-malaa'ikati est la deuxieme source de la malediction dans la structure tripartite : Dieu → anges → gens. Les anges occupent la position intermediaire entre le divin et l'humain. Le champ lexical du verset construit une hierarchie cosmique de la malediction — du ciel le plus haut (Dieu) au ciel intermediaire (les anges) a la terre (les gens). La malediction des anges montre que meme les creatures celestes les plus proches de Dieu participent a l'exclusion des nieurs.",
              axe2_voisins: "Le verset 159 mentionnait « les maudisseurs » sans preciser leur identite. Le verset 161 explicite qui sont ces maudisseurs : Dieu, les anges et les gens. Les anges sont identifies comme acteurs de la malediction — ils ne sont pas neutres face a la negation humaine.",
              axe3_sourate: "La racine m-l-k apparait dans la sourate al-Baqarah sous ses differents sens. En 2:30, les anges dialoguent avec Dieu sur la creation du khalifa. En 2:34, les anges se prosternent devant Adam. En 2:98, celui qui est ennemi des anges est ennemi de Dieu. Le verset 161 montre les anges dans un role judiciaire — ils participent a la malediction des nieurs.",
              axe4_coherence: "Le mot malaa'ika apparait environ 88 fois dans le Coran. Les anges sont presentes comme des executants de la volonte divine — en 66:6, ils sont « des anges durs et severes ». En 2:161, leur participation a la malediction confirme leur role d'agents de la justice divine. Les anges ne maudissent pas de leur propre initiative mais en accord avec le decret divin.",
              axe5_frequence: "Pour la mission du khalifa, les anges sont les temoins de la mission. En 2:30, les anges questionnent la sagesse de creer un khalifa. En 2:161, les anges maudissent ceux qui ont echoue dans la mission. Les anges sont donc a la fois les questionneurs initiaux et les juges finaux de la mission du khalifa."
            },
            "Royauté/Souveraineté": {
              status: "nul",
              senses: ["roi", "royaume", "regne", "souverain", "couronnement", "trone"],
              proof_ctx: "Le sens de royaute est hors sujet — la forme grammaticale malaa'ika est specifiquement le pluriel d'ange (malak avec fatha), pas de roi (malik avec kasra). Le contexte est la malediction, pas la souverainete."
            },
            "Possession/Autorité": {
              status: "nul",
              senses: ["posseder", "maitre", "possesseur", "propriete", "biens", "esclave", "asservir"],
              proof_ctx: "Le sens de possession est hors sujet — le mot designe les anges, pas les proprietaires."
            }
          }
        }
      },
      // nws pos=10 (an-naasi — nom pluriel defini genitif)
      {
        word_key: "nws", position: 10, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-naasi est un nom pluriel defini au genitif de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple, humanite. Le mot designe l'ensemble des etres humains consideres collectivement. L'article defini (al-/an-) indique la totalite — tous les gens sans exception. Le genitif rattache les gens a la malediction — les gens sont la troisieme source de la malediction apres Dieu et les anges. Le mot naas englobe tous les humains : croyants, prophetes, gens du commun.",
              axe1_verset: "Le mot an-naasi est la troisieme et derniere source de la malediction dans la structure tripartite : Dieu → anges → gens. Les gens representent la dimension terrestre et humaine de la malediction. Le verset montre que meme les autres etres humains participent a l'exclusion des nieurs morts dans la negation. La malediction n'est pas seulement celeste — elle est aussi sociale et humaine. Le mot ajma'iina (tous ensemble) qui suit scelle l'unanimite de cette triple source.",
              axe2_voisins: "Le verset 159 disait « les maudisseurs les maudissent ». Le verset 161 identifie les gens comme faisant partie de ces maudisseurs. La malediction humaine s'ajoute a la malediction divine et angelique pour creer une exclusion totale.",
              axe3_sourate: "La racine n-w-s apparait frequemment dans la sourate al-Baqarah. En 2:8, « parmi les gens, certains disent ». En 2:13, « croyez comme les gens ont cru ». En 2:143, « vous serez temoins sur les gens ». La sourate presente les gens comme une collectivite diverse — certains croient, d'autres nient. Le verset 161 montre les gens dans un role unanime de malediction contre les nieurs morts dans la negation.",
              axe4_coherence: "Le mot naas apparait environ 241 fois dans le Coran. En 2:161, l'inclusion des gens parmi les sources de la malediction montre que la negation isole le nieur de sa propre espece. Le Coran presente la malediction humaine comme un rejet social naturel — meme les humains se detournent de celui qui a nie la verite.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont les co-khalifas — les compagnons de mission. Etre maudit par les gens signifie perdre la communaute humaine. Le khalifa qui echoue dans sa mission perd non seulement la faveur divine et angelique mais aussi l'appui de ses semblables. L'isolement total est la consequence de la negation persistante."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est hors sujet — le mot an-naasi designe les gens, pas l'acte de voir. Le contexte est la source humaine de la malediction."
            },
            "Sens isolé/Oublier": {
              status: "nul",
              senses: ["oublier"],
              proof_ctx: "Le sens d'oubli est un usage isole de la racine. Le contexte est la collectivite humaine, pas l'acte d'oublier."
            }
          }
        }
      },
      // jme pos=11 (ajma'iina — adjectif genitif masculin pluriel)
      {
        word_key: "jme", position: 11, sense_chosen: "totalite",
        analysis_axes: {
          sense_chosen: "totalite",
          concept_chosen: "Rassemblement/Union",
          concepts: {
            "Rassemblement/Union": {
              status: "retenu",
              senses: ["rassembler", "reunir", "assembler", "contracter", "unanimite", "vendredi", "totalite"],
              proof_ctx: "Le mot ajma'iina est un adjectif au genitif masculin pluriel de la racine j-m-'. Le Lane's donne : tous ensemble, totalite sans exception, unanimite. Le mot ajma'iina est une forme intensive qui insiste sur la totalite absolue — pas « la plupart » mais « tous sans exception ». Il qualifie les trois sources de la malediction (Dieu, les anges, les gens) pour confirmer qu'aucun d'entre eux n'est exclu de la malediction. La distinction avec le sens de « vendredi » est evidente : le contexte est la totalite de la malediction, pas un jour de la semaine.",
              axe1_verset: "Le mot ajma'iina ferme la sentence du verset en scellant l'unanimite. Le verset a enumere trois sources de malediction (Dieu, anges, gens) et ajma'iina confirme que cette enumeration est exhaustive — tous sans exception. Le champ lexical du verset (malediction, Dieu, anges, gens, tous) construit une exclusion maximale. Le mot agit comme un verrou qui empeche toute echappatoire — il n'y a personne qui ne participe pas a la malediction.",
              axe2_voisins: "Le verset 162 precisera « demeurant en elle » (khalidiina fiiha) — la permanence temporelle. Le verset 161 etablit la totalite spatiale (tous maudissent) et le verset 162 ajoutera la totalite temporelle (pour toujours). Les deux versets ensemble creent une exclusion totale dans l'espace et dans le temps.",
              axe3_sourate: "La racine j-m-' apparait dans la sourate al-Baqarah dans des contextes de rassemblement. En 2:29, Dieu a cree pour vous ce qui est sur terre « tous ensemble » (jami'an). En 2:148, « Dieu vous rassemblera tous ensemble ». Le verset 161 utilise la meme racine mais pour un rassemblement negatif — le rassemblement unanime dans la malediction.",
              axe4_coherence: "Le mot ajma'iina apparait environ 25 fois dans le Coran. Il est utilise pour insister sur la totalite absolue — en 15:30, « les anges se prosternerent tous ensemble ». En 26:95, « les armees d'Iblis toutes ensemble ». Le Coran utilise cette forme pour marquer qu'aucun element du groupe n'est exclu. En 2:161, l'unanimite de la malediction est totale.",
              axe5_frequence: "Pour la mission du khalifa, la totalite est un concept central. Le khalifa est charge d'une mission par la totalite de la creation — Dieu, les anges et les gens. Quand cette meme totalite se retourne en malediction, le khalifa a perdu tous ses appuis. La mission du khalifa requiert le soutien de tous les niveaux de la creation — la malediction unanime est la perte totale de ce soutien."
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

  const verseIds = [168];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 161 ===\n');
  await processVerse(161);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V161 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
